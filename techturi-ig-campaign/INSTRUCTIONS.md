# INSTRUCTIONS — Techturi Instagram Campaign

Everything in this folder is what you need to run a 30-day launch campaign for @techturi (or whatever handle you use) on Instagram.

---

## What's in this bundle

```
techturi-ig/
├── INSTRUCTIONS.md                     ← You are here
├── docs/
│   ├── CAMPAIGN_STRATEGY.md            ← The 30-day plan + strategy
│   └── CAPTION_BANK.md                 ← All 30 captions, copy-paste ready
├── posts/
│   ├── 01-launch-reveal.png            ← Ready-to-post image
│   ├── 01-launch-reveal.html           ← Source (edit if needed)
│   ├── 03-five-tracks.png
│   ├── 03-five-tracks.html
│   └── ...12 posts total
├── reels/
│   ├── 04-homepage-walkthrough.md      ← Shot list + script
│   ├── 11-free-certs.md
│   ├── reel-11-free-certs.html         ← Screen-record this in Chrome
│   ├── 16-wix-timelapse.md
│   ├── 21-cert-ranking.md
│   ├── reel-21-cert-ranking.html       ← Screen-record this in Chrome
│   └── 25-build-timelapse.md
├── stories/
│   └── story-templates.html            ← 5 reusable story frames
└── render_posts.py                     ← Regenerate PNGs if you edit HTML
```

---

## The daily workflow (5–10 min per day)

Once you've posted Day 1, every subsequent day looks the same:

1. **Open `docs/CAMPAIGN_STRATEGY.md`** — check which day it is
2. **Open the PNG** from `posts/` (or the Reel file from `reels/`)
3. **Copy the caption** from `docs/CAPTION_BANK.md` for that day
4. **Post to Instagram** (feed). Schedule at 11am–1pm CT or 7pm–9pm CT.
5. **Copy the hashtags** from the caption bank into the FIRST COMMENT (not the caption)
6. **Re-share to Stories** immediately — Instagram rewards immediate story re-shares
7. **Add 1–2 more stories** throughout the day (poll, link, behind-the-scenes screenshot)
8. **Respond to DMs and comments** within 24 hours

That's it. Everything else is already decided for you.

---

## How to post a static image (Days 1, 3, 6, 9, 12, 14, 17, 20, 23, 26, 28, 30)

1. Download the `.png` file from `posts/` to your phone (email it to yourself or use AirDrop)
2. Open Instagram → "+" → Post
3. Select the image
4. **DO NOT** apply any Instagram filter — the brand aesthetic is already baked in
5. Paste the caption from `CAPTION_BANK.md`
6. Before posting, tap "Advanced settings" → turn OFF "Hide like and view counts" (visibility signals trust)
7. Post
8. Immediately open the post, tap "..." → "Add to highlights" → create a "Launch" highlight and save it there
9. Paste hashtags in the first comment

---

## How to post a carousel (Days 2, 5, 7, 8, 10, 13, 15, 18, 19, 22, 24, 27, 29)

The caption bank gives you slide-by-slide text content for every carousel. To build the images:

### Option A — Canva (fastest)
1. Open Canva (free), create an Instagram Post design (1080×1080)
2. Use one of these PNG posts as a visual reference: `01-launch-reveal.png`, `06-bootcamp-take.png`, or `14-week2-quote.png`
3. Match the colors exactly: `#0A0A0B` background, `#F5F4EE` text, `#D4FF3A` accent
4. Fonts: Fraunces (headlines), JetBrains Mono (labels), both free in Canva
5. Make one slide per slide spec in the caption bank
6. Download all slides as PNG, post to Instagram as a multi-image post

### Option B — Ask Claude Code
You have the template HTML files in `posts/`. Open Claude Code in this folder and say:

> I need a 7-slide carousel for Day 8 ("Business Analytics: what nobody tells you"). Use `posts/14-week2-quote.html` as the structural template and match the exact styling. Slide content is in `docs/CAPTION_BANK.md` under Day 8. Generate 7 HTML files named `posts/08-ba-carousel-s1.html` through `posts/08-ba-carousel-s7.html`, then update `render_posts.py` to render them and run it.

Claude Code will generate the files, render PNGs, and you post them as a multi-image carousel.

---

## How to post a Reel (Days 4, 11, 16, 21, 25)

Reels are the only format that requires actual video editing — but it's easier than it sounds because there's no face-to-camera required.

### For Reels 11 and 21 (pre-built typography animations)

1. Open `reels/reel-11-free-certs.html` (or `reels/reel-21-cert-ranking.html`) in Chrome
2. Press **F11** for fullscreen mode
3. Start screen recording:
   - **Mac:** Cmd+Shift+5 → "Record Selected Portion" → drag over the browser area → click Record
   - **Windows:** Win+G → Game Bar → Record button
4. Press **F5** to refresh — the animation plays automatically
5. Stop recording after the animation completes (~35 seconds)
6. Open **CapCut** (free on desktop and mobile)
7. Import your recording
8. Crop to 9:16 vertical (1080×1920)
9. Add music from CapCut's library (search "minimal electronic" or "lo-fi focus")
10. Export at 1080×1920, 60fps
11. Post to Instagram — check BOTH "Share to Feed" and "Share as Reel"

### For Reels 4, 16, 25 (need screen recording of real content)

Each one has a `.md` file in `reels/` with step-by-step shot lists. These require you to record your actual site, editor, or Wix build.

**If you want to skip the filming:** Duplicate the pre-built HTML animations (Reel 11 or 21) and rewrite the content for the missing Reels. The technique is identical. Ask Claude Code:

> Create a typography Reel for Day 4 (homepage walkthrough). Use `reels/reel-11-free-certs.html` as the template. Content script is in `reels/04-homepage-walkthrough.md`. Generate `reels/reel-04-homepage.html` with the same structure but updated content.

---

## How to use the story templates

`stories/story-templates.html` contains 5 reusable story frames sized 1080×1920 (Instagram Story dimensions):

1. **"New post is up"** — use when you re-share a feed post
2. **Poll/Question** — swap the question text for daily polls
3. **Save for later** — prompt people to save the day's carousel
4. **Behind the scenes** — wrap a screenshot of your work
5. **Link sticker** — drive to techturi.org or a specific page

To use:
1. Open `stories/story-templates.html` in Chrome
2. Each template is numbered and stacked vertically
3. Screen-capture the one you need (Cmd+Shift+4 on Mac, or use the browser's built-in screenshot)
4. Upload to Instagram Stories
5. Add Instagram's native stickers on top (poll, quiz, link) — those need to be real IG stickers for the algorithm to reward them

---

## If you fall behind

Life happens. Here's how to recover without killing the campaign:

- **1–2 days missed:** Skip them. Don't double-post to catch up — it dilutes reach.
- **3+ days missed:** Restart the sequence from the day you stopped. The campaign works in any 30-day window.
- **Entire week missed:** Post a "catching up" story acknowledging the gap, then resume. Honesty outperforms fake consistency.

---

## Metrics to track (weekly, 5 minutes)

Open Instagram Insights every Sunday and record:

| Metric | Week 1 | Week 2 | Week 3 | Week 4 |
|---|---|---|---|---|
| Profile visits | | | | |
| Website clicks | | | | |
| Saves (total) | | | | |
| New followers | | | | |
| DMs received | | | | |

**Month 1 goal:** 500 website clicks from Instagram, 10 DM inquiries. Adjust up or down based on your existing follower count.

---

## What to do after Day 30

The 30-day campaign is a **launch sequence**, not a permanent rhythm. After Day 30:

- **Drop to 3–4 posts per week** (sustainable long-term)
- **Repurpose winners** — any post with 2x your average saves or reach gets reposted in a new format (carousel → reel, or vice versa) in month 2
- **Boost the top 2 performing posts** with $20–50 each to extend reach
- **Start a monthly recap carousel** (Day 27 template works for this) to build anticipation for future campaigns

---

## If something isn't working

### Your posts are getting low reach

- Check that you're using 8–12 hashtags, not 30 (Instagram flags hashtag stuffing)
- Make sure hashtags are in the first comment, not the caption
- Look at your top-performing post — can you repost it in a carousel format?
- Post at a different time window for 5 days — algorithm rewards consistency within a window

### You're getting followers but no DMs or clicks

- Your content is entertaining but not converting. Add stronger CTAs.
- Make sure your bio link goes to techturi.org (not a Linktree with 10 options)
- Pin your 3 best-performing posts to the top of your grid

### You hate this after Day 5

You're doing it wrong. The strategy is to **post content you'd want to read yourself**. If you're cringing at your own posts, they're too performative. Re-read `CAMPAIGN_STRATEGY.md` — the tone is "serious tech brand that happens to teach," not "influencer building a personal brand."

---

## Regenerating assets

If you need to edit a post:

1. Open the `.html` file in `posts/`
2. Edit the content (text, colors, whatever)
3. Open terminal in this folder, run: `python render_posts.py`
4. The new PNG will overwrite the old one
5. Re-download to your phone and post

You need Playwright installed: `pip install playwright && playwright install chromium`

---

## The single most important thing

Post **consistently** for 30 days. That's the whole strategy. Every single account that has ever succeeded on Instagram posted consistently before they posted well. You already have the "posted well" part handled — the content is ready. Just press post, every day, for 30 days.
