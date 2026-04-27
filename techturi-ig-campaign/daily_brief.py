"""
Techturi IG Campaign — Daily Brief
Emails you every morning what to post today.

Setup:
1. Set CAMPAIGN_START_DATE below to the day you start posting (YYYY-MM-DD)
2. Add your Gmail App Password to campaign_config.json
3. Run once to test: python daily_brief.py
4. Cron runs it automatically at 8am CT every day
"""

import json
import smtplib
import re
import base64
from datetime import date, datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

# ── CONFIG ────────────────────────────────────────────────────────────────────
BASE_DIR       = Path(__file__).parent
CONFIG_FILE    = BASE_DIR / "campaign_config.json"
CAPTION_FILE   = BASE_DIR / "docs" / "CAPTION_BANK.md"
STRATEGY_FILE  = BASE_DIR / "docs" / "CAMPAIGN_STRATEGY.md"

# ── LOAD CONFIG ───────────────────────────────────────────────────────────────
with open(CONFIG_FILE) as f:
    config = json.load(f)

CAMPAIGN_START = date.fromisoformat(config["campaign_start_date"])
TO_EMAIL       = config["to_email"]
FROM_EMAIL     = config["gmail_address"]
APP_PASSWORD   = config["gmail_app_password"]

# ── DETERMINE DAY ─────────────────────────────────────────────────────────────
today      = date.today()
delta      = (today - CAMPAIGN_START).days + 1
campaign_day = delta

if campaign_day < 1 or campaign_day > 30:
    print(f"Campaign day {campaign_day} is outside the 30-day window. No email sent.")
    exit(0)

# ── PARSE CAPTION BANK ────────────────────────────────────────────────────────
caption_text = CAPTION_FILE.read_text()

# Find the section for today's day
pattern = rf"### Day {campaign_day} —(.*?)(?=### Day {campaign_day + 1} —|## WEEK|\Z)"
match = re.search(pattern, caption_text, re.DOTALL)
day_section = match.group(0).strip() if match else f"Day {campaign_day} content not found."

# Extract post type line
type_match = re.search(r"\*\*Post type:\*\*(.+)", day_section)
post_type = type_match.group(1).strip() if type_match else "See caption bank"

# Extract title
title_match = re.search(rf"### Day {campaign_day} — (.+)", day_section)
day_title = title_match.group(1).strip() if title_match else f"Day {campaign_day}"

# Extract caption (between first ``` block)
caption_match = re.search(r"```\n(.*?)\n```", day_section, re.DOTALL)
caption = caption_match.group(1).strip() if caption_match else "See caption bank."

# Extract hashtags (second ``` block)
hashtag_matches = re.findall(r"```\n(.*?)\n```", day_section, re.DOTALL)
hashtags = hashtag_matches[1].strip() if len(hashtag_matches) > 1 else ""

# Extract slide content if carousel
slides = re.findall(r"\*\*Slide \d+:\*\*(.+)", day_section)

# ── DETERMINE FILE ────────────────────────────────────────────────────────────
posts_dir = BASE_DIR / "posts"
day_str = str(campaign_day).zfill(2)

# Prefer carousel slides (e.g. 02-origin-s1.png) over single image
slide_files = sorted(posts_dir.glob(f"{day_str}-*-s*.png"))
single_files = sorted(posts_dir.glob(f"{day_str}-*.png"))
# Filter out slide files from single_files
single_files = [f for f in single_files if f not in slide_files]

post_images = slide_files if slide_files else single_files

asset_note = ""
if slide_files:
    asset_note = f"✅ {len(slide_files)} carousel slides ready in posts/"
elif single_files:
    asset_note = f"✅ File ready: posts/{single_files[0].name}"
else:
    asset_note = "⚠️ No PNG found — check posts/ folder or render manually"

def img_to_b64(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode()

def image_block(img_path: Path, label: str = "") -> str:
    b64 = img_to_b64(img_path)
    label_html = f'<div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.15em;margin-bottom:8px">{label}</div>' if label else ""
    return f"""
    <div style="margin-bottom:12px;">
      {label_html}
      <img src="data:image/png;base64,{b64}"
           style="width:100%;max-width:552px;border-radius:6px;border:1px solid #1f1f22;display:block;" />
    </div>"""

images_section = ""
if post_images:
    if len(post_images) == 1:
        images_section = f"""
    <div style="margin:20px 0;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">POST VISUAL</div>
      {image_block(post_images[0])}
    </div>"""
    else:
        slides_html = "".join(
            image_block(f, f"SLIDE {i+1} OF {len(post_images)}")
            for i, f in enumerate(post_images)
        )
        images_section = f"""
    <div style="margin:20px 0;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">CAROUSEL SLIDES — IN ORDER</div>
      {slides_html}
    </div>"""

# ── WEEK LABELS ───────────────────────────────────────────────────────────────
week_labels = {1: "Week 1 — Launch announce", 2: "Week 2 — Teach hard",
               3: "Week 3 — Show proof", 4: "Week 4 — Pitch the ask"}
week_num = ((campaign_day - 1) // 7) + 1
week_label = week_labels.get(week_num, "")

# ── BEST TIMES (CT) ───────────────────────────────────────────────────────────
best_times = "11am–1pm CT  or  7pm–9pm CT"

# ── BUILD EMAIL ───────────────────────────────────────────────────────────────
subject = f"[Techturi IG] Day {campaign_day}/30 — {day_title}"

slides_section = ""
if slides:
    slides_html = "".join(f"<li style='margin-bottom:6px'><b>Slide {i+1}:</b> {s.strip()}</li>"
                          for i, s in enumerate(slides))
    slides_section = f"""
    <div style="margin:20px 0;padding:16px 20px;background:#1a1f0a;border:1px solid #2a3510;border-radius:6px;">
      <div style="font-family:monospace;font-size:11px;color:#a8cc2e;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:12px;">SLIDE ORDER</div>
      <ol style="margin:0;padding-left:20px;color:#c8c8c0;font-size:14px;line-height:1.7">{slides_html}</ol>
    </div>"""

html = f"""<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0f0f10;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

    <!-- Header -->
    <div style="margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid #1f1f22;">
      <div style="font-family:monospace;font-size:13px;color:#d4ff3a;letter-spacing:0.1em;margin-bottom:8px">
        [techturi.] · IG Campaign
      </div>
      <div style="font-size:24px;font-weight:600;color:#f5f4ee;letter-spacing:-0.02em">
        Day {campaign_day} of 30
      </div>
      <div style="font-size:14px;color:#8b8b85;margin-top:4px">{week_label}</div>
    </div>

    <!-- Today's post -->
    <div style="background:#131315;border:1px solid #1f1f22;border-radius:8px;padding:24px;margin-bottom:20px;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">TODAY'S POST</div>
      <div style="font-size:20px;font-weight:600;color:#f5f4ee;margin-bottom:8px">{day_title}</div>
      <div style="font-family:monospace;font-size:12px;color:#d4ff3a;margin-bottom:16px">{post_type}</div>
      <div style="font-size:13px;color:#8b8b85">{asset_note}</div>
    </div>

    {slides_section}

    {images_section}

    <!-- Caption -->
    <div style="margin-bottom:20px;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">CAPTION — COPY/PASTE</div>
      <div style="background:#131315;border:1px solid #1f1f22;border-left:3px solid #d4ff3a;border-radius:4px;padding:20px;font-size:14px;color:#c8c8c0;white-space:pre-line;line-height:1.8">{caption}</div>
    </div>

    <!-- Hashtags -->
    {"" if not hashtags else f'''
    <div style="margin-bottom:20px;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">FIRST COMMENT — HASHTAGS</div>
      <div style="background:#131315;border:1px solid #1f1f22;border-radius:4px;padding:16px;font-size:13px;color:#8b8b85;line-height:1.7">{hashtags}</div>
    </div>'''}

    <!-- Post timing -->
    <div style="background:#131315;border:1px solid #1f1f22;border-radius:6px;padding:16px 20px;margin-bottom:24px;display:flex;gap:12px;align-items:center;">
      <div style="font-family:monospace;font-size:11px;color:#4a4a45;letter-spacing:0.15em;text-transform:uppercase;">POST WINDOW</div>
      <div style="font-size:14px;color:#d4ff3a;font-weight:600">{best_times}</div>
    </div>

    <!-- Checklist -->
    <div style="margin-bottom:32px;">
      <div style="font-family:monospace;font-size:10px;color:#4a4a45;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px">TODAY'S CHECKLIST</div>
      <div style="background:#131315;border:1px solid #1f1f22;border-radius:6px;padding:16px 20px;">
        {"".join(f'<div style="padding:8px 0;border-bottom:1px solid #1f1f22;font-size:14px;color:#8b8b85;display:flex;gap:12px"><span style="color:#d4ff3a">→</span>{item}</div>' for item in [
          "Post to feed at peak window above",
          "Paste hashtags in the FIRST COMMENT",
          "Re-share to Stories immediately",
          "Add 1 poll or quiz story today",
          "Reply to all DMs and comments within 24h",
        ])}
      </div>
    </div>

    <!-- Footer -->
    <div style="padding-top:24px;border-top:1px solid #1f1f22;display:flex;justify-content:space-between;font-family:monospace;font-size:11px;color:#4a4a45;">
      <span>techturi.org</span>
      <span>{today.strftime("%A, %B %-d, %Y")}</span>
    </div>

  </div>
</body>
</html>"""

# ── SEND EMAIL ────────────────────────────────────────────────────────────────
msg = MIMEMultipart("alternative")
msg["Subject"] = subject
msg["From"]    = FROM_EMAIL
msg["To"]      = TO_EMAIL
msg.attach(MIMEText(html, "html"))

import time

for attempt in range(1, 5):
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(FROM_EMAIL, APP_PASSWORD)
            server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())
        print(f"✅ Sent: {subject}")
        break
    except Exception as e:
        print(f"⚠️  Attempt {attempt} failed: {e}")
        if attempt < 4:
            time.sleep(30)
        else:
            print(f"❌ All attempts failed: {e}")
