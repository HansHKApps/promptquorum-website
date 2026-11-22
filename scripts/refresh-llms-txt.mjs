// Weekly refresh of public/llms.txt: hub article counts, language count, "Last updated".
// Counts = article files per cluster (rounded down to the nearest 5, shown as "N+").
// "Last updated" is only bumped when something else actually changed.
import fs from 'node:fs'
import path from 'node:path'

const file = 'public/llms.txt'
let txt = fs.readFileSync(file, 'utf8')
const orig = txt

const count = (c) => fs.readdirSync(`src/lib/${c}/articles`).filter((f) => f.endsWith('.ts')).length
const floor5 = (n) => Math.floor(n / 5) * 5
const hubs = { 'prompt-engineering': 'prompt-engineering', 'local-llms': 'local-llms', 'power-local-llm': 'power-local-llm', 'prompt-bites': 'prompt-bites', 'smart-home': 'smart-home' }
for (const [slug, cluster] of Object.entries(hubs)) {
  const n = floor5(count(cluster))
  txt = txt.replace(new RegExp(`(\\]\\(https://www\\.promptquorum\\.com/${slug}\\): )\\d+\\+`), `$1${n}+`)
}
// Languages: 9 locales (en + 8 prefixed dirs)
txt = txt.replace(/across 5 languages \(EN, DE, FR, JA, ZH\)/, 'across 9 languages (EN, DE, FR, ES, PT, AR, JA, ZH, KO)')

if (txt !== orig) {
  const today = new Date().toISOString().slice(0, 10)
  txt = txt.replace(/Last updated: \d{4}-\d{2}-\d{2}/, `Last updated: ${today}`)
  fs.writeFileSync(file, txt)
  console.log('llms.txt updated')
} else console.log('llms.txt already current')
