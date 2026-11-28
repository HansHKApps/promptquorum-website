// Renders title-only 1200x675 heroes in all 9 locales.
// Titles are read from the article file, so a title fix only needs a re-run.
// Usage: node scripts/gen-title-only-heroes.mjs
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'
import { chromium } from 'playwright'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const PAGES = [
  ['private-local-ai-for-business', 'private-local-ai-for-business-overview-hero'],
  ['how-much-unified-memory-for-local-llm', 'how-much-unified-memory-for-local-llm-tier-fit-chart-hero'],
]
const LANGS = ['en', 'de', 'es', 'fr', 'ja', 'pt', 'ar', 'zh', 'ko']
const FONTS = {
  ja: '"Hiragino Sans", "Hiragino Kaku Gothic ProN"',
  zh: '"PingFang SC", "Hiragino Sans GB"',
  ko: '"Apple SD Gothic Neo"',
  ar: '"SF Arabic", "Geeza Pro"',
}

function readTitles(slug) {
  const file = `src/lib/local-llms/articles/${slug}.ts`
  const sf = ts.createSourceFile(file, fs.readFileSync(path.join(ROOT, file), 'utf8'), ts.ScriptTarget.Latest, true)
  const titles = {}
  const visit = (node) => {
    if (ts.isPropertyAssignment(node) && LANGS.includes(node.name.getText(sf)) && ts.isObjectLiteralExpression(node.initializer)) {
      const t = node.initializer.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === 'title')
      if (t && ts.isStringLiteralLike(t.initializer)) titles[node.name.getText(sf)] ??= t.initializer.text
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return titles
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const html = (lang, title) => `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:675px;overflow:hidden;background:#674ea7;color:#fff;font-family:${FONTS[lang] ? FONTS[lang] + ', ' : ''}"Helvetica Neue",Arial,sans-serif;word-break:${lang === 'ko' ? 'keep-all' : 'normal'}}
main{height:100%;display:flex;flex-direction:column;justify-content:center;padding:60px 80px}
h1{font-size:68px;font-weight:700;line-height:1.3;text-wrap:balance}
footer{position:absolute;bottom:36px;inset-inline-end:80px;font-size:22px;color:#ece8f6}
</style></head><body><main><h1>${esc(title)}</h1></main><footer dir="ltr">promptquorum.com</footer></body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } })
const problems = []
for (const [slug, image] of PAGES) {
  const titles = readTitles(slug)
  for (const lang of LANGS) {
    if (!titles[lang]) { problems.push(`${lang}: no title`); continue }
    await page.setContent(html(lang, titles[lang]), { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    const fits = await page.evaluate(() => {
      const r = document.querySelector('h1').getBoundingClientRect()
      return r.top >= 40 && r.bottom <= 590 && r.left >= 0 && r.right <= 1200
    })
    if (!fits) problems.push(`${lang}: title does not fit`)
    await sharp(await page.screenshot()).webp({ lossless: true, effort: 6 }).toFile(path.join(ROOT, `public/images/${image}-${lang}.webp`))
  }
}
await browser.close()
if (problems.length) { console.error(problems.join('\n')); process.exit(1) }
console.log(`Rendered ${PAGES.length * LANGS.length} heroes.`)
