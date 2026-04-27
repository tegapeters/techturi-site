"""
Render HTML post templates to Instagram-ready PNG files.
Each post is rendered at its exact post dimensions (1080x1080 or 1080x1350).
"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

POSTS_DIR = Path(__file__).parent / "posts"

POSTS = [
    # ── Original single posts ──
    ("01-launch-reveal.html",           "01-launch-reveal.png",           1080, 1080),
    ("03-five-tracks.html",             "03-five-tracks.png",             1080, 1350),
    ("06-bootcamp-take.html",           "06-bootcamp-take.png",           1080, 1080),
    ("09-dashboard-before-after.html",  "09-dashboard-before-after.png",  1080, 1080),
    ("12-networking-cyber-order.html",  "12-networking-cyber-order.png",  1080, 1080),
    ("14-week2-quote.html",             "14-week2-quote.png",             1080, 1080),
    ("17-149-breakdown.html",           "17-149-breakdown.png",           1080, 1350),
    ("20-wish-i-knew.html",             "20-wish-i-knew.png",             1080, 1350),
    ("23-three-paths.html",             "23-three-paths.png",             1080, 1350),
    ("26-not-for.html",                 "26-not-for.png",                 1080, 1080),
    ("28-testimonial.html",             "28-testimonial.png",             1080, 1080),
    ("30-thanks-cta.html",              "30-thanks-cta.png",              1080, 1080),
    # ── Day 2 — Why I built Techturi (5 slides) ──
    ("02-origin-s1.html", "02-origin-s1.png", 1080, 1080),
    ("02-origin-s2.html", "02-origin-s2.png", 1080, 1080),
    ("02-origin-s3.html", "02-origin-s3.png", 1080, 1080),
    ("02-origin-s4.html", "02-origin-s4.png", 1080, 1080),
    ("02-origin-s5.html", "02-origin-s5.png", 1080, 1080),
    # ── Day 5 — Data Analytics roadmap (10 slides) ──
    ("05-da-roadmap-s1.html",  "05-da-roadmap-s1.png",  1080, 1080),
    ("05-da-roadmap-s2.html",  "05-da-roadmap-s2.png",  1080, 1080),
    ("05-da-roadmap-s3.html",  "05-da-roadmap-s3.png",  1080, 1080),
    ("05-da-roadmap-s4.html",  "05-da-roadmap-s4.png",  1080, 1080),
    ("05-da-roadmap-s5.html",  "05-da-roadmap-s5.png",  1080, 1080),
    ("05-da-roadmap-s6.html",  "05-da-roadmap-s6.png",  1080, 1080),
    ("05-da-roadmap-s7.html",  "05-da-roadmap-s7.png",  1080, 1080),
    ("05-da-roadmap-s8.html",  "05-da-roadmap-s8.png",  1080, 1080),
    ("05-da-roadmap-s9.html",  "05-da-roadmap-s9.png",  1080, 1080),
    ("05-da-roadmap-s10.html", "05-da-roadmap-s10.png", 1080, 1080),
    # ── Day 7 — Studio intro (6 slides) ──
    ("07-studio-s1.html", "07-studio-s1.png", 1080, 1080),
    ("07-studio-s2.html", "07-studio-s2.png", 1080, 1080),
    ("07-studio-s3.html", "07-studio-s3.png", 1080, 1080),
    ("07-studio-s4.html", "07-studio-s4.png", 1080, 1080),
    ("07-studio-s5.html", "07-studio-s5.png", 1080, 1080),
    ("07-studio-s6.html", "07-studio-s6.png", 1080, 1080),
    # ── Day 8 — Business Analytics (7 slides) ──
    ("08-ba-s1.html", "08-ba-s1.png", 1080, 1080),
    ("08-ba-s2.html", "08-ba-s2.png", 1080, 1080),
    ("08-ba-s3.html", "08-ba-s3.png", 1080, 1080),
    ("08-ba-s4.html", "08-ba-s4.png", 1080, 1080),
    ("08-ba-s5.html", "08-ba-s5.png", 1080, 1080),
    ("08-ba-s6.html", "08-ba-s6.png", 1080, 1080),
    ("08-ba-s7.html", "08-ba-s7.png", 1080, 1080),
    # ── Day 10 — SQL (8 slides) ──
    ("10-sql-s1.html", "10-sql-s1.png", 1080, 1080),
    ("10-sql-s2.html", "10-sql-s2.png", 1080, 1080),
    ("10-sql-s3.html", "10-sql-s3.png", 1080, 1080),
    ("10-sql-s4.html", "10-sql-s4.png", 1080, 1080),
    ("10-sql-s5.html", "10-sql-s5.png", 1080, 1080),
    ("10-sql-s6.html", "10-sql-s6.png", 1080, 1080),
    ("10-sql-s7.html", "10-sql-s7.png", 1080, 1080),
    ("10-sql-s8.html", "10-sql-s8.png", 1080, 1080),
    # ── Day 13 — Oracle tools (6 slides) ──
    ("13-tools-s1.html", "13-tools-s1.png", 1080, 1080),
    ("13-tools-s2.html", "13-tools-s2.png", 1080, 1080),
    ("13-tools-s3.html", "13-tools-s3.png", 1080, 1080),
    ("13-tools-s4.html", "13-tools-s4.png", 1080, 1080),
    ("13-tools-s5.html", "13-tools-s5.png", 1080, 1080),
    ("13-tools-s6.html", "13-tools-s6.png", 1080, 1080),
    # ── Day 15 — A&J case study (7 slides) ──
    ("15-aj-s1.html", "15-aj-s1.png", 1080, 1080),
    ("15-aj-s2.html", "15-aj-s2.png", 1080, 1080),
    ("15-aj-s3.html", "15-aj-s3.png", 1080, 1080),
    ("15-aj-s4.html", "15-aj-s4.png", 1080, 1080),
    ("15-aj-s5.html", "15-aj-s5.png", 1080, 1080),
    ("15-aj-s6.html", "15-aj-s6.png", 1080, 1080),
    ("15-aj-s7.html", "15-aj-s7.png", 1080, 1080),
    # ── Day 18 — DS prerequisites (6 slides) ──
    ("18-ds-prereqs-s1.html", "18-ds-prereqs-s1.png", 1080, 1080),
    ("18-ds-prereqs-s2.html", "18-ds-prereqs-s2.png", 1080, 1080),
    ("18-ds-prereqs-s3.html", "18-ds-prereqs-s3.png", 1080, 1080),
    ("18-ds-prereqs-s4.html", "18-ds-prereqs-s4.png", 1080, 1080),
    ("18-ds-prereqs-s5.html", "18-ds-prereqs-s5.png", 1080, 1080),
    ("18-ds-prereqs-s6.html", "18-ds-prereqs-s6.png", 1080, 1080),
    # ── Day 19 — HEOP23 case study (6 slides) ──
    ("19-heop-s1.html", "19-heop-s1.png", 1080, 1080),
    ("19-heop-s2.html", "19-heop-s2.png", 1080, 1080),
    ("19-heop-s3.html", "19-heop-s3.png", 1080, 1080),
    ("19-heop-s4.html", "19-heop-s4.png", 1080, 1080),
    ("19-heop-s5.html", "19-heop-s5.png", 1080, 1080),
    ("19-heop-s6.html", "19-heop-s6.png", 1080, 1080),
    # ── Day 22 — Cyber starter pack (7 slides) ──
    ("22-cyber-s1.html", "22-cyber-s1.png", 1080, 1080),
    ("22-cyber-s2.html", "22-cyber-s2.png", 1080, 1080),
    ("22-cyber-s3.html", "22-cyber-s3.png", 1080, 1080),
    ("22-cyber-s4.html", "22-cyber-s4.png", 1080, 1080),
    ("22-cyber-s5.html", "22-cyber-s5.png", 1080, 1080),
    ("22-cyber-s6.html", "22-cyber-s6.png", 1080, 1080),
    ("22-cyber-s7.html", "22-cyber-s7.png", 1080, 1080),
    # ── Day 24 — Portfolio projects (7 slides) ──
    ("24-projects-s1.html", "24-projects-s1.png", 1080, 1080),
    ("24-projects-s2.html", "24-projects-s2.png", 1080, 1080),
    ("24-projects-s3.html", "24-projects-s3.png", 1080, 1080),
    ("24-projects-s4.html", "24-projects-s4.png", 1080, 1080),
    ("24-projects-s5.html", "24-projects-s5.png", 1080, 1080),
    ("24-projects-s6.html", "24-projects-s6.png", 1080, 1080),
    ("24-projects-s7.html", "24-projects-s7.png", 1080, 1080),
    # ── Day 27 — 30 days recap (6 slides) ──
    ("27-recap-s1.html", "27-recap-s1.png", 1080, 1080),
    ("27-recap-s2.html", "27-recap-s2.png", 1080, 1080),
    ("27-recap-s3.html", "27-recap-s3.png", 1080, 1080),
    ("27-recap-s4.html", "27-recap-s4.png", 1080, 1080),
    ("27-recap-s5.html", "27-recap-s5.png", 1080, 1080),
    ("27-recap-s6.html", "27-recap-s6.png", 1080, 1080),
    # ── Day 29 — Restart career (6 slides) ──
    ("29-restart-s1.html", "29-restart-s1.png", 1080, 1080),
    ("29-restart-s2.html", "29-restart-s2.png", 1080, 1080),
    ("29-restart-s3.html", "29-restart-s3.png", 1080, 1080),
    ("29-restart-s4.html", "29-restart-s4.png", 1080, 1080),
    ("29-restart-s5.html", "29-restart-s5.png", 1080, 1080),
    ("29-restart-s6.html", "29-restart-s6.png", 1080, 1080),
]

async def render_all():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        for html_file, png_file, width, height in POSTS:
            html_path = POSTS_DIR / html_file
            png_path = POSTS_DIR / png_file
            if not html_path.exists():
                print(f"SKIP: {html_path} missing")
                continue
            context = await browser.new_context(
                viewport={"width": width + 80, "height": height + 80},
                device_scale_factor=2,
            )
            page = await context.new_page()
            await page.goto(f"file://{html_path.absolute()}")
            await page.wait_for_load_state("networkidle")
            await page.wait_for_timeout(1500)
            post_el = page.locator(".post")
            await post_el.screenshot(path=str(png_path), omit_background=False)
            print(f"RENDERED: {png_path.name}")
            await context.close()
        await browser.close()

asyncio.run(render_all())
print("\nAll posts rendered.")
