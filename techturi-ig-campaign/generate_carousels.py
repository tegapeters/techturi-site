"""
Generate all missing carousel HTML posts for the Techturi IG campaign.
Run once: python generate_carousels.py
"""

from pathlib import Path

POSTS_DIR = Path(__file__).parent / "posts"

FONTS = '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">'

BASE_CSS = """
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 40px; background: #111; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: 'JetBrains Mono', monospace; }
  .post {
    width: 1080px; height: 1080px;
    background: #0A0A0B; color: #F5F4EE;
    position: relative; overflow: hidden;
    box-shadow: 0 20px 80px rgba(0,0,0,0.6);
    padding: 72px 72px 60px;
    display: flex; flex-direction: column;
  }
  .post::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: linear-gradient(#1F1F22 1px, transparent 1px), linear-gradient(90deg, #1F1F22 1px, transparent 1px);
    background-size: 80px 80px; opacity: 0.5;
  }
  .top { display: flex; justify-content: space-between; align-items: flex-start; position: relative; z-index: 2; margin-bottom: 60px; }
  .logo { font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 500; color: #F5F4EE; }
  .logo .b, .logo .d { color: #D4FF3A; }
  .slide-num { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #4A4A45; letter-spacing: 0.2em; }
  .body { flex: 1; position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; }
  .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #D4FF3A; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 28px; display: flex; align-items: center; gap: 14px; }
  .eyebrow::before { content: ''; width: 32px; height: 2px; background: #D4FF3A; flex-shrink: 0; }
  h1 { font-family: 'Fraunces', serif; font-size: 86px; font-weight: 400; line-height: 0.95; letter-spacing: -0.04em; color: #F5F4EE; }
  h1 em { font-style: italic; font-weight: 300; color: #D4FF3A; }
  h2 { font-family: 'Fraunces', serif; font-size: 64px; font-weight: 400; line-height: 1.0; letter-spacing: -0.03em; color: #F5F4EE; }
  h2 em { font-style: italic; font-weight: 300; color: #D4FF3A; }
  .statement { font-family: 'Fraunces', serif; font-size: 72px; font-weight: 400; line-height: 1.0; letter-spacing: -0.03em; color: #F5F4EE; }
  .statement em { font-style: italic; color: #D4FF3A; font-weight: 300; }
  .mono-big { font-family: 'JetBrains Mono', monospace; font-size: 40px; font-weight: 500; color: #D4FF3A; letter-spacing: -0.02em; line-height: 1.3; }
  .mono-big .dim { color: #4A4A45; }
  .list { display: flex; flex-direction: column; gap: 0; }
  .list-item { display: flex; align-items: baseline; gap: 20px; padding: 18px 0; border-bottom: 1px solid #1F1F22; }
  .list-item:last-child { border-bottom: none; }
  .list-arrow { color: #D4FF3A; font-family: 'JetBrains Mono', monospace; font-size: 14px; flex-shrink: 0; }
  .list-text { font-family: 'Fraunces', serif; font-size: 30px; font-weight: 400; color: #F5F4EE; line-height: 1.2; }
  .list-text em { color: #D4FF3A; font-style: normal; }
  .list-text.dim { color: #8B8B85; }
  .tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 4px 12px; border: 1px solid rgba(212,255,58,0.3); color: #D4FF3A; border-radius: 2px; letter-spacing: 0.1em; text-transform: uppercase; }
  .bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: flex-end; padding-top: 24px; border-top: 1px solid #1F1F22; margin-top: 24px; }
  .url { font-family: 'JetBrains Mono', monospace; font-size: 18px; color: #8B8B85; }
  .url .acc { color: #D4FF3A; margin-right: 10px; }
  .swipe { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #4A4A45; letter-spacing: 0.15em; text-transform: uppercase; }
  .accent-bar { width: 60px; height: 3px; background: #D4FF3A; margin-bottom: 32px; }
  .highlight-box { background: rgba(212,255,58,0.07); border: 1px solid rgba(212,255,58,0.2); border-radius: 6px; padding: 28px 32px; }
"""

def slide(day, total, title, content_html, eyebrow="", url="techturi.org", is_last=False):
    swipe = "SAVE THIS" if is_last else "SWIPE →"
    logo = '<span class="b">[</span>techturi<span class="d">.</span><span class="b">]</span>'
    eyebrow_html = f'<div class="eyebrow">{eyebrow}</div>' if eyebrow else ''
    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Day {day:02d} — Slide {title}</title>
{FONTS}
<style>{BASE_CSS}</style>
</head>
<body>
<div class="post">
  <div class="top">
    <div class="logo">{logo}</div>
    <div class="slide-num">DAY {day:02d} / 30 &nbsp;·&nbsp; {title}</div>
  </div>
  <div class="body">
    {eyebrow_html}
    {content_html}
  </div>
  <div class="bottom">
    <div class="url"><span class="acc">→</span>{url}</div>
    <div class="swipe">{swipe}</div>
  </div>
</div>
</body>
</html>"""

# ── DAY 2 — Why I built Techturi (5 slides) ───────────────────────────────────
files = {
  "02-origin-s1.html": slide(2, 5, "01 / 05",
    '<h1>Why I built<br><em>Techturi.</em></h1>', eyebrow="Origin Story"),

  "02-origin-s2.html": slide(2, 5, "02 / 05",
    '''<div class="statement">Bootcamps charge<br><em>$15k.</em><br>For what&apos;s<br>free online.</div>''', eyebrow="The Problem"),

  "02-origin-s3.html": slide(2, 5, "03 / 05",
    '''<div class="list">
      <div class="list-item"><div class="list-arrow">→</div><div class="list-text">AWS Skill Builder</div></div>
      <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Oracle University</div></div>
      <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Coursera (audit mode)</div></div>
      <div class="list-item"><div class="list-arrow">→</div><div class="list-text">LinkedIn Learning</div></div>
    </div>
    <div style="margin-top:36px;font-family:\'Fraunces\',serif;font-size:28px;color:#8B8B85;font-style:italic">I used all of these. Got hired at Lockheed, BAE, Oracle.</div>''',
    eyebrow="How I broke in — free"),

  "02-origin-s4.html": slide(2, 5, "04 / 05",
    '''<div class="statement">So I curated<br>the best of it.<br><em>In one place.<br>Free forever.</em></div>''', eyebrow="The Solution"),

  "02-origin-s5.html": slide(2, 5, "05 / 05",
    '''<div style="text-align:center;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:32px">
      <div style="font-family:\'JetBrains Mono\',monospace;font-size:110px;font-weight:500;color:#F5F4EE;line-height:1">
        <span style="color:#D4FF3A">[</span>techturi<span style="color:#D4FF3A">.</span><span style="color:#D4FF3A">]</span>
      </div>
      <div class="tag">Now live</div>
    </div>''', url="techturi.org", is_last=True),
}

# ── DAY 5 — Data Analytics roadmap (10 slides) ────────────────────────────────
months = [
  ("Month 1", "Spreadsheets +<br>SQL basics"),
  ("Month 2", "Data cleaning with<br>Python (pandas)"),
  ("Month 3", "Visualization —<br>Power BI or Tableau"),
  ("Month 4", "Statistics for analysts"),
  ("Month 5", "Build 2 portfolio<br>projects"),
  ("Month 6", "Google Data Analytics<br>Certificate"),
]

files["05-da-roadmap-s1.html"] = slide(5, 10, "01 / 10",
  '<h1>Data Analytics<br><em>roadmap.</em><br>Free. Start today.</h1>', eyebrow="Data Family · Entry Level")

for i, (month, content) in enumerate(months, 2):
  files[f"05-da-roadmap-s{i}.html"] = slide(5, 10, f"{i:02d} / 10",
    f'<div class="eyebrow" style="margin-bottom:40px">{month}</div>'
    f'<div class="statement">{content}</div>',
    eyebrow="")

files["05-da-roadmap-s8.html"] = slide(5, 10, "08 / 10",
  '''<div class="eyebrow">Certs that matter</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow">S</div><div class="list-text"><em>Google Data Analytics</em></div></div>
    <div class="list-item"><div class="list-arrow">S</div><div class="list-text"><em>Microsoft PL-300 Power BI</em></div></div>
  </div>''')

files["05-da-roadmap-s9.html"] = slide(5, 10, "09 / 10",
  '''<div class="eyebrow">Certs that don&apos;t</div>
  <div class="statement" style="color:#4A4A45"><em style="color:#8B8B85">Most of them.</em></div>
  <div style="font-family:\'Fraunces\',serif;font-size:26px;color:#8B8B85;margin-top:40px;font-style:italic">If it&apos;s not on the job posting, it&apos;s not worth $200.</div>''')

files["05-da-roadmap-s10.html"] = slide(5, 10, "10 / 10",
  '''<div class="statement">Full curated<br>course list<br>→ <em>free.</em></div>''',
  url="techturi.org/learn/data-analytics", is_last=True)

# ── DAY 7 — Two ways to work with Techturi (6 slides) ─────────────────────────
files["07-studio-s1.html"] = slide(7, 6, "01 / 06",
  '<h1>Need a website?<br>Two ways to<br>work with<br><em>Techturi.</em></h1>', eyebrow="Services")

files["07-studio-s2.html"] = slide(7, 6, "02 / 06",
  '''<div class="eyebrow">Path 1</div>
  <div class="statement"><em>Wix Studio</em><br>subscription.</div>
  <div style="margin-top:40px;font-family:\'JetBrains Mono\',monospace;font-size:28px;color:#D4FF3A">Starting at $1,500 / yr</div>''')

files["07-studio-s3.html"] = slide(7, 6, "03 / 06",
  '''<div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">We <em>build</em> it</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">You <em>edit</em> it</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Cancel <em>anytime</em></div></div>
  </div>''', eyebrow="Path 1 — Wix Subscription")

files["07-studio-s4.html"] = slide(7, 6, "04 / 06",
  '''<div class="eyebrow">Path 2</div>
  <div class="statement"><em>Custom</em><br>HTML / React<br>build.</div>
  <div style="margin-top:40px;font-family:\'JetBrains Mono\',monospace;font-size:28px;color:#D4FF3A">From $4,500</div>''')

files["07-studio-s5.html"] = slide(7, 6, "05 / 06",
  '''<div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">You <em>own the code</em> forever</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>5 years</em> of maintenance included</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">The site we <em>build for ourselves</em></div></div>
  </div>''', eyebrow="Path 2 — Custom Build")

files["07-studio-s6.html"] = slide(7, 6, "06 / 06",
  '<h2>Book a free<br><em>30-min call.</em><br>No pitch.</h2>',
  url="techturi.org/book", is_last=True)

# ── DAY 8 — Business Analytics (7 slides) ─────────────────────────────────────
files["08-ba-s1.html"] = slide(8, 7, "01 / 07",
  '<h1>Business<br>Analytics:<br><em>what nobody<br>tells you.</em></h1>', eyebrow="Data Family · Bridge")

files["08-ba-s2.html"] = slide(8, 7, "02 / 07",
  '''<div class="statement">Everyone thinks<br>it&apos;s <em>&ldquo;analytics<br>lite.&rdquo;</em><br>It&apos;s not.</div>''')

files["08-ba-s3.html"] = slide(8, 7, "03 / 07",
  '''<div class="eyebrow">Real BAs do</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Requirements gathering</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Stakeholder management</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Process mapping</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Financial modeling</div></div>
  </div>''')

files["08-ba-s4.html"] = slide(8, 7, "04 / 07",
  '<div class="statement">Half the job is<br>explaining what<br>data people<br><em>can&apos;t.</em></div>')

files["08-ba-s5.html"] = slide(8, 7, "05 / 07",
  '''<div class="eyebrow">Learn these</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>BPMN</em> &amp; process notation</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>Agile</em> / Jira</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>SQL</em> (basic)</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>Financial modeling</em></div></div>
  </div>''')

files["08-ba-s6.html"] = slide(8, 7, "06 / 07",
  '''<div class="eyebrow">Salary range · 2025</div>
  <div class="mono-big">$85K – $130K</div>
  <div style="margin-top:24px;font-family:\'Fraunces\',serif;font-size:28px;color:#8B8B85;font-style:italic">Most US cities. More in finance &amp; aerospace.</div>''')

files["08-ba-s7.html"] = slide(8, 7, "07 / 07",
  '<h2>Full track.<br>All free<br>resources.</h2>',
  url="techturi.org/learn/business-analytics", is_last=True)

# ── DAY 10 — SQL in 8 slides ──────────────────────────────────────────────────
sql_slides = [
  ("01 / 08", "SQL in 8 slides.<br><em>Save this.</em>", ""),
  ("02 / 08", '<div class="mono-big">SELECT col<br><span class="dim">FROM</span> table;</div>', "The foundation"),
  ("03 / 08", '<div class="list"><div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>WHERE</em> filters rows</div></div><div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>HAVING</em> filters groups</div></div></div>', "Filtering"),
  ("04 / 08", '<div class="statement"><em>JOIN</em> connects<br>two tables on<br>a shared key.</div>', "Joins"),
  ("05 / 08", '<div class="statement"><em>GROUP BY</em><br>collapses rows<br>into aggregates.</div><div style="margin-top:32px;font-family:\'JetBrains Mono\',monospace;font-size:24px;color:#D4FF3A">SUM · COUNT · AVG</div>', "Aggregation"),
  ("06 / 08", '<div class="list"><div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>ORDER BY</em> sorts</div></div><div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>LIMIT</em> caps results</div></div></div>', "Sorting"),
  ("07 / 08", '<div class="statement">Window functions<br><em>&gt; subqueries</em><br>most of the time.</div>', "Level up"),
  ("08 / 08", '<h2>Learn it<br><em>free.</em></h2>', ""),
]
for i, (num, content, eyebrow) in enumerate(sql_slides, 1):
  is_last = i == 8
  url = "techturi.org/learn/data-analytics" if is_last else "techturi.org"
  body = f'<h1>{content}</h1>' if (i == 1) else content
  files[f"10-sql-s{i}.html"] = slide(10, 8, num, body, eyebrow=eyebrow, url=url, is_last=is_last)

# ── DAY 13 — Tools at Oracle (6 slides) ───────────────────────────────────────
tools = [
  ("Python", "For everything scriptable"),
  ("Oracle Cloud (OCI)", "GenAI services, queues, functions"),
  ("ELK / OpenSearch", "Log analysis, incident forensics"),
  ("Jira", "Events, incidents, RCA tracking"),
  ("Slack", "Where 80% of the work happens"),
]
files["13-tools-s1.html"] = slide(13, 6, "01 / 06",
  '<h1>The tools I<br>actually use<br>at <em>Oracle.</em></h1>', eyebrow="Sr. Engineer · OCI GenAI")

for i, (tool, desc) in enumerate(tools, 2):
  files[f"13-tools-s{i}.html"] = slide(13, 6, f"{i:02d} / 06",
    f'''<div class="eyebrow">Tool {i-1} of 5</div>
    <div class="statement"><em>{tool}</em></div>
    <div style="margin-top:32px;font-family:\'Fraunces\',serif;font-size:28px;color:#8B8B85;font-style:italic">{desc}</div>''')

# ── DAY 15 — A&J Case Study (7 slides) ────────────────────────────────────────
files["15-aj-s1.html"] = slide(15, 7, "01 / 07",
  '<h1>Client<br>spotlight:<br><em>A&amp;J National<br>Housing.</em></h1>', eyebrow="Case Study · Wix Studio")

files["15-aj-s2.html"] = slide(15, 7, "02 / 07",
  '''<div class="eyebrow">The challenge</div>
  <div class="statement">Government<br>lodging contractor.<br>Needed a<br><em>credible,<br>mobile-first</em> site.</div>''')

files["15-aj-s3.html"] = slide(15, 7, "03 / 07",
  '''<div class="eyebrow">The solution</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>Wix Studio</em> build</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Integrated <em>contact flow</em></div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Compliance-ready <em>layout</em></div></div>
  </div>''')

files["15-aj-s4.html"] = slide(15, 7, "04 / 07",
  '''<div class="eyebrow">Timeline</div>
  <div class="mono-big">3 weeks.</div>
  <div style="margin-top:32px;font-family:\'Fraunces\',serif;font-size:26px;color:#8B8B85;font-style:italic">Discovery → design → build → launch.</div>''')

files["15-aj-s5.html"] = slide(15, 7, "05 / 07",
  '''<div class="eyebrow">Result</div>
  <div class="statement">Live at<br><em>ajnationalhousing<br>.com</em></div>''',
  url="ajnationalhousing.com")

files["15-aj-s6.html"] = slide(15, 7, "06 / 07",
  '''<div class="eyebrow">Part of</div>
  <div class="statement">Wix Studio<br>subscription tier<br>at <em>Techturi.</em></div>
  <div style="margin-top:36px;font-family:\'JetBrains Mono\',monospace;font-size:20px;color:#D4FF3A">Starting at $1,500 / yr</div>''')

files["15-aj-s7.html"] = slide(15, 7, "07 / 07",
  '<h2>Your project<br><em>next.</em></h2>', url="techturi.org/book", is_last=True)

# ── DAY 18 — Data Science prerequisites (6 slides) ────────────────────────────
files["18-ds-prereqs-s1.html"] = slide(18, 6, "01 / 06",
  '<h1>Data Science<br>prerequisites.<br><em>Honest<br>version.</em></h1>', eyebrow="Data Family · Advanced")

files["18-ds-prereqs-s2.html"] = slide(18, 6, "02 / 06",
  '''<div class="eyebrow">You need</div>
  <div class="statement"><em>SQL.</em><br>Actually good SQL.</div>
  <div style="margin-top:32px;font-family:\'Fraunces\',serif;font-size:26px;color:#8B8B85;font-style:italic">Not &ldquo;I did a tutorial&rdquo; SQL. Real SQL.</div>''')

files["18-ds-prereqs-s3.html"] = slide(18, 6, "03 / 06",
  '''<div class="eyebrow">You need</div>
  <div class="statement"><em>Python</em><br>basics.</div>
  <div style="margin-top:32px;font-family:\'JetBrains Mono\',monospace;font-size:24px;color:#D4FF3A">pandas · NumPy</div>
  <div style="margin-top:16px;font-family:\'Fraunces\',serif;font-size:24px;color:#8B8B85;font-style:italic">That&apos;s it to start.</div>''')

files["18-ds-prereqs-s4.html"] = slide(18, 6, "04 / 06",
  '''<div class="eyebrow">You need</div>
  <div class="statement"><em>Statistics.</em></div>
  <div class="list" style="margin-top:32px">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Hypothesis testing</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Distributions</div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Regression</div></div>
  </div>''')

files["18-ds-prereqs-s5.html"] = slide(18, 6, "05 / 06",
  '''<div class="eyebrow">You do NOT need</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow" style="color:#4A4A45">✕</div><div class="list-text dim">Calculus first</div></div>
    <div class="list-item"><div class="list-arrow" style="color:#4A4A45">✕</div><div class="list-text dim">PhD-level math</div></div>
    <div class="list-item"><div class="list-arrow" style="color:#4A4A45">✕</div><div class="list-text dim">Kaggle top 1%</div></div>
  </div>''')

files["18-ds-prereqs-s6.html"] = slide(18, 6, "06 / 06",
  '<h2>Full prerequisite<br>path. <em>Free.</em></h2>',
  url="techturi.org/learn/data-science", is_last=True)

# ── DAY 19 — HEOP23 Case Study (6 slides) ─────────────────────────────────────
files["19-heop-s1.html"] = slide(19, 6, "01 / 06",
  '<h1>Client<br>spotlight:<br><em>HEOP23.</em></h1>', eyebrow="Case Study · Custom Build")

files["19-heop-s2.html"] = slide(19, 6, "02 / 06",
  '''<div class="eyebrow">The challenge</div>
  <div class="statement">Event platform.<br>Fast turnaround.<br><em>Clean attendee<br>flow.</em></div>''')

files["19-heop-s3.html"] = slide(19, 6, "03 / 06",
  '''<div class="eyebrow">The solution</div>
  <div class="list">
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Focused <em>event site</em></div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text">Clear <em>registration path</em></div></div>
    <div class="list-item"><div class="list-arrow">→</div><div class="list-text"><em>Mobile-first</em>, zero hosting cost</div></div>
  </div>''')

files["19-heop-s4.html"] = slide(19, 6, "04 / 06",
  '''<div class="eyebrow">Timeline</div>
  <div class="mono-big">2 weeks.</div>
  <div style="margin-top:32px;font-family:\'Fraunces\',serif;font-size:26px;color:#8B8B85;font-style:italic">Sometimes the best build is the smallest one.</div>''')

files["19-heop-s5.html"] = slide(19, 6, "05 / 06",
  '''<div class="eyebrow">Result</div>
  <div class="statement">Live at<br><em>heop23.com</em></div>''', url="heop23.com")

files["19-heop-s6.html"] = slide(19, 6, "06 / 06",
  '<h2>More case studies<br>at <em>Techturi.</em></h2>',
  url="techturi.org/portfolio", is_last=True)

# ── DAY 22 — Cybersecurity starter pack (7 slides) ────────────────────────────
cyber_resources = [
  ("Professor Messer", "Security+ course · YouTube · Free"),
  ("TryHackMe", "Practical labs · Free rooms"),
  ("Google Cybersecurity", "Certificate · Coursera audit"),
  ("Cisco NetAcad", "Free CCNA intro"),
  ("SANS Cyber Aces", "Foundational tutorials · Free"),
]
files["22-cyber-s1.html"] = slide(22, 7, "01 / 07",
  '<h1>Cybersecurity<br>starter pack.<br><em>All free.</em></h1>', eyebrow="Security Family")

for i, (name, desc) in enumerate(cyber_resources, 2):
  files[f"22-cyber-s{i}.html"] = slide(22, 7, f"{i:02d} / 07",
    f'''<div class="eyebrow">Resource {i-1} of 5</div>
    <div class="statement"><em>{name}</em></div>
    <div style="margin-top:32px;font-family:\'Fraunces\',serif;font-size:28px;color:#8B8B85;font-style:italic">{desc}</div>''')

files["22-cyber-s7.html"] = slide(22, 7, "07 / 07",
  '<h2>Full curated list.<br><em>Free.</em></h2>',
  url="techturi.org/learn/cybersecurity", is_last=True)

# ── DAY 24 — 5 Portfolio Projects (7 slides) ──────────────────────────────────
projects = [
  ("01", "Cleanse a messy<br>public dataset.", "Document every step."),
  ("02", "Business dashboard.", "Power BI or Tableau."),
  ("03", "A/B test analysis.", "With a clear recommendation."),
  ("04", "Cohort / retention<br>analysis.", "In SQL."),
  ("05", "Time series<br>forecast.", "In Python."),
]
files["24-projects-s1.html"] = slide(24, 7, "01 / 07",
  '<h1>5 portfolio<br>projects that<br>actually get<br><em>you hired.</em></h1>', eyebrow="Data Analytics")

for i, (num, title, sub) in enumerate(projects, 2):
  files[f"24-projects-s{i}.html"] = slide(24, 7, f"{i:02d} / 07",
    f'''<div class="eyebrow">Project {num}</div>
    <div class="statement"><em>{title}</em></div>
    <div style="margin-top:28px;font-family:\'Fraunces\',serif;font-size:28px;color:#8B8B85;font-style:italic">{sub}</div>''')

files["24-projects-s7.html"] = slide(24, 7, "07 / 07",
  '<h2>Full write-ups.<br><em>Free.</em></h2>',
  url="techturi.org/learn/data-analytics", is_last=True)

# ── DAY 27 — 30 days in (6 slides) ────────────────────────────────────────────
files["27-recap-s1.html"] = slide(27, 6, "01 / 06",
  '<h1>30 days in.<br>What&apos;s working<br>at <em>Techturi.</em></h1>', eyebrow="Building In Public")

recap_items = [
  ("Posts that teach", "Saved &amp; shared. Most reach."),
  ("Posts that brag", "Ignored. Rightly."),
  ("DMs from career-changers", "Unexpected. Best part."),
  ("Client inquiries", "More than expected."),
]
for i, (label, result) in enumerate(recap_items, 2):
  files[f"27-recap-s{i}.html"] = slide(27, 6, f"{i:02d} / 06",
    f'''<div class="statement"><em>{label}</em></div>
    <div style="margin-top:40px;font-family:\'Fraunces\',serif;font-size:32px;color:#8B8B85;font-style:italic">{result}</div>''')

files["27-recap-s6.html"] = slide(27, 6, "06 / 06",
  '<h2>Keep going.<br><em>Month 2.</em></h2>',
  url="techturi.org", is_last=True)

# ── DAY 29 — Restart career (6 slides) ────────────────────────────────────────
files["29-restart-s1.html"] = slide(29, 6, "01 / 06",
  '<h1>If I had to<br>restart my<br>career <em>today.</em></h1>', eyebrow="Career Roadmap")

restart_items = [
  ("Month 1–3", "SQL.", "Deeply. Not &ldquo;I did a tutorial&rdquo; deep."),
  ("Month 4–6", "Python for data.", "Pandas, matplotlib, basic ML."),
  ("Month 7–9", "Cloud fundamentals.", "AWS or OCI. One cert."),
  ("Month 10–12", "Build 3 portfolio projects.", "Ship them publicly."),
]
for i, (period, action, detail) in enumerate(restart_items, 2):
  files[f"29-restart-s{i}.html"] = slide(29, 6, f"{i:02d} / 06",
    f'''<div class="eyebrow">{period}</div>
    <div class="statement"><em>{action}</em></div>
    <div style="margin-top:28px;font-family:\'Fraunces\',serif;font-size:26px;color:#8B8B85;font-style:italic">{detail}</div>''')

files["29-restart-s6.html"] = slide(29, 6, "06 / 06",
  '<h2>Full free path.<br><em>Start today.</em></h2>',
  url="techturi.org/learn", is_last=True)

# ── WRITE ALL FILES ────────────────────────────────────────────────────────────
for filename, html in files.items():
    path = POSTS_DIR / filename
    path.write_text(html)
    print(f"WROTE: {filename}")

print(f"\n✅ {len(files)} files written to {POSTS_DIR}")
