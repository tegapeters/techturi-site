"""
Render each story template as a separate 1080x1920 PNG.
Each .story element in story-templates.html gets rendered to its own file.
"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

STORIES_DIR = Path("/home/claude/techturi-ig/stories")

async def render_stories():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={"width": 1200, "height": 2100},
            device_scale_factor=2,
        )
        page = await context.new_page()
        html_path = STORIES_DIR / "story-templates.html"
        await page.goto(f"file://{html_path.absolute()}")
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(1500)

        # Render each .story div at full IG story size (1080x1920)
        # The HTML displays them at 540x960 but we render at 2x for retina quality
        names = [
            "story-01-new-post.png",
            "story-02-poll.png",
            "story-03-save-later.png",
            "story-04-behind-scenes.png",
            "story-05-link.png",
        ]

        for i, name in enumerate(names, start=1):
            el = page.locator(f".s{i}").first
            out_path = STORIES_DIR / name
            await el.screenshot(path=str(out_path))
            print(f"RENDERED: {name}")

        await browser.close()

asyncio.run(render_stories())
print("\nStories rendered. Note: output is 1080x1920 at 2x = 2160x3840.")
print("For IG upload, resize to 1080x1920 or upload as-is (Instagram scales down).")
