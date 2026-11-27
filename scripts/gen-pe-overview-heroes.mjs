// Renders the 1200x675 overview images of three prompt-engineering articles in all 9 locales.
// Title, subtitle and bullets are read from the article files, so a text fix only needs a re-run.
// Chromium (Playwright) does the layout, which gives correct Arabic bidi and CJK fonts.
// Usage: node scripts/gen-pe-overview-heroes.mjs
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const LANGS = ['en', 'de', 'es', 'fr', 'ja', 'pt', 'ar', 'zh', 'ko']
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'pe-heroes-'))

// The article files import path aliases Node cannot resolve; drop the imports and stub the two runtime helpers.
async function loadArticle(slug) {
  const source = fs.readFileSync(path.join(ROOT, `src/lib/prompt-engineering/articles/${slug}.ts`), 'utf8')
  const file = path.join(TMP, `${slug}.mts`)
  fs.writeFileSync(file, 'const keyToSlug=(k:string)=>k; const buildOgImageObject=(..._a:unknown[])=>({});\n' + source.replace(/^import .*$/gm, ''))
  return (await import(pathToFileURL(file).href)).article
}

const PAGES = [
  { slug: 'fundamentals-of-prompt-optimization', image: 'fundamentals-of-prompt-optimization-overview', bullets: (a) => a.sections.tldr.items.slice(0, 4) },
  { slug: 'prompt-building-blocks', image: 'prompt-building-blocks-5-blocks-overview', bullets: (a) => a.sections.tldr.items.slice(0, 5) },
  { slug: 'single-prompt-method', image: 'single-prompt-method-overview', quote: true },
]

// Short table cells for the building-blocks quick reference (only these four locales use this image).
const QUICK_REF = {
  en: ['5 Building Blocks: Quick Reference', 'When to use what', ['Point', 'Detail'], [['Minimum viable prompt', 'Task + Output Format (2 blocks)'], ['High-value addition', 'One constraint can reduce hallucination risk'], ['Maps to', 'CRAFT, CO-STAR, SPECS, RTF and similar']], 'Different framework names, largely overlapping elements.'],
  de: ['5 Bausteine: Schnellreferenz', 'Wann was verwenden', ['Punkt', 'Detail'], [['Minimaler brauchbarer Prompt', 'Aufgabe + Ausgabeformat (2 Bausteine)'], ['Nützliche Ergänzung', 'Eine Einschränkung kann das Halluzinationsrisiko senken'], ['Entspricht', 'CRAFT, CO-STAR, SPECS, RTF und ähnlichen']], 'Unterschiedliche Namen, weitgehend überlappende Elemente.'],
  fr: ['5 blocs : référence rapide', 'Quand utiliser quoi', ['Point', 'Détail'], [['Prompt minimum viable', 'Tâche + Format de sortie (2 blocs)'], ['Ajout utile', 'Une contrainte peut réduire le risque d’hallucination'], ['Correspond à', 'CRAFT, CO-STAR, SPECS, RTF et similaires']], 'Noms différents, éléments qui se recoupent largement.'],
  ko: ['5가지 구성 요소: 빠른 참조', '언제 무엇을 사용할지', ['항목', '세부 내용'], [['최소한의 실용적 프롬프트', '작업 + 출력 형식 (2개 요소)'], ['유용한 추가 요소', '제약 조건 하나로 환각 위험을 줄일 수 있습니다'], ['대응 관계', 'CRAFT, CO-STAR, SPECS, RTF 등']], '이름은 다르지만 요소가 상당 부분 겹칩니다.'],
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')

const FONTS = {
  ja: '"Hiragino Sans", "Hiragino Kaku Gothic ProN"',
  zh: '"PingFang SC", "Hiragino Sans GB"',
  ko: '"Apple SD Gothic Neo"',
  ar: '"SF Arabic", "Geeza Pro"',
}

function shell(lang, body) {
  const font = `${FONTS[lang] ? FONTS[lang] + ', ' : ''}"Helvetica Neue", Arial, sans-serif`
  return `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:675px;overflow:hidden;background:#fff;color:#1f2430;font-family:${font};word-break:${lang === 'ko' ? 'keep-all' : 'normal'}}
.page{position:relative;overflow:hidden;width:1200px;height:675px;display:flex;flex-direction:column}
.c1,.c2{position:absolute;border-radius:50%}
.c1{width:260px;height:260px;inset-inline-end:-60px;top:150px;background:#f6f4fb}
.c2{width:170px;height:170px;inset-inline-start:-40px;bottom:-60px;background:#fffaf3}
header{background:#674ea7;color:#fff;padding:28px 60px 24px;position:relative}
h1{font-size:34px;font-weight:600;line-height:1.28;display:flex;gap:18px;align-items:center}
.mark{flex:none;display:flex;gap:3px}.mark i{width:5px;height:28px;background:#fff}.mark i:nth-child(n+3){opacity:.55}
.sub{margin-top:12px;font-size:19px;line-height:1.45;color:#ece8f6}
main{flex:1;position:relative;display:flex;flex-direction:column;justify-content:center;padding:8px 60px 40px}
ol{list-style:none;display:flex;flex-direction:column;gap:24px}
li{display:flex;gap:18px;align-items:flex-start;font-size:23px;line-height:1.45}
li .n{flex:none;width:32px;height:32px;border-radius:6px;background:#f1eef9;color:#674ea7;font-size:16px;display:flex;align-items:center;justify-content:center}
li b{font-weight:500;color:#674ea7}
blockquote{border-inline-start:4px solid #674ea7;padding-inline-start:26px;font-size:32px;line-height:1.6;max-width:1010px}
table{width:100%;border-collapse:collapse;font-size:21px}
th{font-size:15px;font-weight:400;color:#7a7f8c;text-align:start;padding:0 0 12px;border-bottom:2px solid #e5e3ee}
td{padding:22px 12px 22px 0;border-bottom:1px solid #eeecf5}td+td{color:#674ea7}
footer{position:relative;display:flex;justify-content:space-between;padding:0 60px 28px;font-size:15px;color:#7a7f8c}
</style></head><body><div class="page"><div class="c1"></div><div class="c2"></div>${body}</div></body></html>`
}

const footer = (left) => `<footer><span><bdi>${esc(left)}</bdi></span><span dir="ltr">promptquorum.com</span></footer>`
const head = (title, sub) => `<header><h1><span class="mark"><i></i><i></i><i></i><i></i></span><span>${esc(title)}</span></h1>${sub ? `<p class="sub">${esc(sub)}</p>` : ''}</header>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } })
const problems = []

async function render(lang, html, name) {
  await page.setContent(html, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  // Fail loudly if the text does not fit between header and footer.
  const overflow = await page.evaluate(() => {
    const main = document.querySelector('main')
    const content = main.firstElementChild.getBoundingClientRect()
    const box = main.getBoundingClientRect()
    return content.bottom > box.bottom || content.top < box.top || content.left < 0 || content.right > 1200 || document.querySelector('footer').getBoundingClientRect().bottom > 675
  })
  if (overflow) problems.push(name)
  await sharp(await page.screenshot()).webp({ lossless: true, effort: 6 }).toFile(path.join(ROOT, 'public/images', `${name}.webp`))
}

for (const spec of PAGES) {
  const article = await loadArticle(spec.slug)
  for (const lang of LANGS) {
    const a = article[lang]
    const body = spec.quote
      ? `<main><blockquote>${esc(a.metaDescription)}</blockquote></main>`
      : `<main><ol>${spec.bullets(a).map((t, i) => `<li><span class="n">${i + 1}</span><span>${inline(t)}</span></li>`).join('')}</ol></main>`
    await render(lang, shell(lang, head(a.title, spec.quote ? '' : a.metaDescription) + body + footer('Prompt Engineering Guide')), `${spec.image}-hero-${lang}`)
  }
}

for (const [lang, [title, sub, cols, rows, note]] of Object.entries(QUICK_REF)) {
  const table = `<table><thead><tr>${cols.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`
  await render(lang, shell(lang, head(title, sub) + `<main>${table}</main>` + footer(note)), `prompt-building-blocks-quick-reference-hero-${lang}`)
}

await browser.close()
fs.rmSync(TMP, { recursive: true, force: true })
if (problems.length) {
  console.error('Text overflows:', problems.join(', '))
  process.exit(1)
}
console.log('Rendered all overview images.')
