"""Convert CAMPAIGN_EXPORT.md to a branded PDF."""
import markdown
from pathlib import Path

BASE = Path(__file__).parent
md_text = (BASE / "CAMPAIGN_EXPORT.md").read_text()
body_html = markdown.markdown(md_text, extensions=["tables", "fenced_code"])

html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

  :root {{
    --bg:      #0A0A0B;
    --fg:      #F5F4EE;
    --accent:  #D4FF3A;
    --surface: #131315;
    --border:  #1F1F22;
    --dim:     #8B8B85;
    --dimmer:  #4A4A45;
  }}

  @page {{
    size: A4;
    margin: 0;
  }}

  * {{ box-sizing: border-box; margin: 0; padding: 0; }}

  body {{
    background: var(--bg);
    color: var(--fg);
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    line-height: 1.7;
    padding: 48px 56px;
  }}

  /* Cover strip */
  .cover {{
    padding: 48px 0 40px;
    border-bottom: 2px solid var(--accent);
    margin-bottom: 40px;
  }}
  .cover-logo {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 500;
    color: var(--fg);
    margin-bottom: 20px;
  }}
  .cover-logo .b, .cover-logo .d {{ color: var(--accent); }}
  .cover-title {{
    font-family: 'Fraunces', serif;
    font-size: 42px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--fg);
    margin-bottom: 12px;
  }}
  .cover-title em {{
    font-style: italic;
    font-weight: 300;
    color: var(--accent);
  }}
  .cover-meta {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--dim);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    display: flex;
    gap: 32px;
    margin-top: 16px;
  }}
  .cover-meta span {{ color: var(--accent); }}

  h1 {{ display: none; }}

  h2 {{
    font-family: 'Fraunces', serif;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--fg);
    margin: 36px 0 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }}

  h3 {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 24px 0 10px;
  }}

  p {{
    color: var(--dim);
    margin-bottom: 10px;
    font-size: 11px;
  }}

  strong {{ color: var(--fg); font-weight: 600; }}

  /* Tables */
  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0 24px;
    font-size: 10.5px;
  }}
  thead tr {{
    background: var(--surface);
    border-bottom: 1px solid var(--accent);
  }}
  th {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dim);
    padding: 10px 12px;
    text-align: left;
    font-weight: 500;
  }}
  td {{
    padding: 9px 12px;
    border-bottom: 1px solid var(--border);
    color: var(--dim);
    vertical-align: top;
  }}
  tr:last-child td {{ border-bottom: none; }}
  td:first-child {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--accent);
    white-space: nowrap;
  }}
  td strong {{ color: var(--fg); }}

  /* Code / inline mono */
  code {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 9.5px;
    color: var(--accent);
    background: rgba(212,255,58,0.07);
    padding: 1px 5px;
    border-radius: 2px;
  }}

  /* Lists */
  ul, ol {{
    padding-left: 20px;
    margin-bottom: 12px;
    color: var(--dim);
  }}
  li {{ margin-bottom: 4px; }}

  /* Horizontal rule */
  hr {{
    border: none;
    border-top: 1px solid var(--border);
    margin: 28px 0;
  }}

  /* Footer on each page */
  @page {{
    @bottom-center {{
      content: "techturi.org · @techturi · Apr 25 – May 24, 2026";
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #4A4A45;
      letter-spacing: 0.1em;
    }}
    @bottom-right {{
      content: counter(page) " / " counter(pages);
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #4A4A45;
    }}
  }}
</style>
</head>
<body>

<div class="cover">
  <div class="cover-logo">
    <span class="b">[</span>techturi<span class="d">.</span><span class="b">]</span>
  </div>
  <div class="cover-title">
    Instagram<br><em>Launch Campaign.</em>
  </div>
  <div class="cover-meta">
    <div><span>START</span> &nbsp;April 25, 2026</div>
    <div><span>END</span> &nbsp;May 24, 2026</div>
    <div><span>POSTS</span> &nbsp;30 days · 99 assets</div>
    <div><span>HANDLE</span> &nbsp;@techturi</div>
  </div>
</div>

{body_html}

</body>
</html>"""

import asyncio
from playwright.async_api import async_playwright

async def make_pdf():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_content(html, wait_until="networkidle")
        output = BASE / "CAMPAIGN_EXPORT.pdf"
        await page.pdf(
            path=str(output),
            format="A4",
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
            print_background=True,
        )
        await browser.close()
        print(f"✅ PDF written to {output}")

asyncio.run(make_pdf())
