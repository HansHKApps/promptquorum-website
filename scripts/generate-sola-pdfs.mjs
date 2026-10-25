// Renders the State of Local AI report and its evidence appendix to PDF with headless Chromium.
// Usage: start the app (e.g. `npx next dev --webpack --port 3433`), then
//   node scripts/generate-sola-pdfs.mjs [baseUrl] [issueSlug]
// Output: public/state-of-local-ai/<issue>/state-of-local-ai-<issue>-report.pdf and ...-appendix.pdf
import { chromium } from 'playwright'
import path from 'node:path'

const base = process.argv[2] || 'http://localhost:3433'
const slug = process.argv[3] || '2026-q4'
const outDir = path.join(process.cwd(), 'public/state-of-local-ai', slug)

const jobs = [
  { url: `${base}/about/state-of-local-ai/${slug}`, file: `state-of-local-ai-${slug}-report.pdf`, hide: '#evidence, #press, #links-h, #links-h + ul' },
  { url: `${base}/about/state-of-local-ai/${slug}/evidence`, file: `state-of-local-ai-${slug}-appendix.pdf`, hide: '' },
]

const browser = await chromium.launch()
for (const j of jobs) {
  const page = await browser.newPage()
  await page.goto(j.url, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print' })
  // Drop the cookie dialog, its backdrop and floating widgets (menu, MCP button): anything fixed-position.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('body *')) {
      const pos = getComputedStyle(el).position
      if (pos === 'fixed') el.remove()
    }
    document.body.style.overflow = 'visible'
  })
  if (j.hide) await page.addStyleTag({ content: `${j.hide} { display: none !important; }` })
  await page.pdf({
    path: path.join(outDir, j.file),
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', bottom: '18mm', left: '14mm', right: '14mm' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:8px;color:#666;padding:0 14mm;display:flex;justify-content:space-between"><span>The State of Local AI · Report 01 · promptquorum.com</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
  })
  console.log('wrote', j.file)
  await page.close()
}
await browser.close()
