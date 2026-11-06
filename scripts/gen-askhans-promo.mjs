// Generates the 2-minute promo pictures for Ask Hans: public/askhans/promo-<lang>.svg (9 languages).
// Same 900x300 box and brand colours as gen-askhans-pictures.mjs, with a localized headline.
// Run: node scripts/gen-askhans-promo.mjs
import fs from 'node:fs'

const css = fs.readFileSync('src/app/globals.css', 'utf8')
const hslVar = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*([\\d.]+)\\s+([\\d.]+)%\\s+([\\d.]+)%`))
  if (!m) throw new Error(`--${name} not found in globals.css`)
  return [Number(m[1]), Number(m[2]), Number(m[3])]
}
const hex = ([h, s, l]) => {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return '#' + [f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('')
}
const bg = hex(hslVar('hero-from'))
const primary = hex(hslVar('primary'))

const LINE = {
  en: 'As far as we know, the only local-AI site with both',
  de: 'Soweit wir wissen: die einzige Seite zu lokaler KI mit beidem',
  fr: 'À notre connaissance, le seul site d\'IA locale avec les deux',
  ja: '私たちの知る限り、両方を備えた唯一のローカルAIサイト',
  zh: '据我们所知，唯一同时提供两者的本地 AI 网站',
  es: 'Hasta donde sabemos, el único sitio de IA local con ambos',
  pt: 'Até onde sabemos, o único site de IA local com os dois',
  ar: 'على حد علمنا، الموقع الوحيد للذكاء الاصطناعي المحلي الذي يجمع بينهما',
  ko: '저희가 아는 한 둘 다 갖춘 유일한 로컬 AI 사이트',
}
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')

fs.mkdirSync('public/askhans', { recursive: true })
for (const [lang, line] of Object.entries(LINE)) {
  const rtl = lang === 'ar'
  const size = lang === 'ja' || lang === 'zh' || lang === 'ko' ? 30 : line.length > 55 ? 24 : 27
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="900" height="300" role="img" aria-label="Ask Hans + MCP">` +
    `<rect width="900" height="300" fill="${bg}"/>` +
    `<rect x="14" y="14" width="872" height="272" rx="22" fill="none" stroke="${primary}" stroke-opacity="0.35" stroke-width="2"/>` +
    `<g font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans','Noto Sans CJK SC','Noto Sans Arabic',Arial,sans-serif" text-anchor="middle"${rtl ? ' direction="rtl"' : ''}>` +
    `<text x="450" y="132" font-size="78" font-weight="800" fill="${primary}">Ask Hans + MCP</text>` +
    `<text x="450" y="196" font-size="${size}" font-weight="600" fill="#1f2937">${esc(line)}</text>` +
    `<text x="450" y="256" font-size="22" font-weight="600" fill="${primary}" fill-opacity="0.85">promptquorum.com</text>` +
    `</g></svg>\n`
  fs.writeFileSync(`public/askhans/promo-${lang}.svg`, svg)
}
console.log(`wrote ${Object.keys(LINE).length} promo pictures (bg ${bg}, primary ${primary})`)
