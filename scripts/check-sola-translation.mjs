// Structure-parity check for translated State of Local AI article fragments.
// Usage: node scripts/check-sola-translation.mjs <lang> [slug]
// Compares every tag (name + attributes, except aria-label) of article.html with article.<lang>.html,
// the cite-link multiset, and that figures (numbers with units) survive. Text nodes may differ.
import fs from 'node:fs'
import path from 'node:path'

const lang = process.argv[2]
const slug = process.argv[3] ?? '2026-q4'
if (!lang) { console.error('usage: check-sola-translation.mjs <lang> [slug]'); process.exit(2) }
const dir = path.join('src/lib/state-of-local-ai/content', slug)
const en = fs.readFileSync(path.join(dir, 'article.html'), 'utf8')
const tr = fs.readFileSync(path.join(dir, `article.${lang}.html`), 'utf8')

const tags = (h) => [...h.matchAll(/<\/?[a-zA-Z][^>]*>/g)].map((m) => m[0].replace(/\s+aria-label="[^"]*"/, '').replace(/\s+/g, ' '))
const a = tags(en), b = tags(tr)
let bad = 0
if (a.length !== b.length) { console.log(`TAG COUNT: en ${a.length} vs ${lang} ${b.length}`); bad++ }
for (let i = 0; i < Math.min(a.length, b.length); i++) {
  if (a[i] !== b[i]) { console.log(`TAG #${i} differs:\n  en: ${a[i]}\n  ${lang}: ${b[i]}`); bad++; if (bad > 12) break }
}
const cites = (h) => [...h.matchAll(/href="([^"]*)"/g)].map((m) => m[1]).sort().join('|')
if (cites(en) !== cites(tr)) { console.log('HREF multiset differs'); bad++ }
const textOf = (h) => h.replace(/<[^>]*>/g, ' ')
const nums = (h) => (textOf(h).match(/\d[\d.,]*/g) ?? []).map((n) => n.replace(/[.,]/g, ''))
const na = nums(en).sort(), nb = nums(tr).sort()
const missing = []
const pool = [...nb]
for (const n of na) { const i = pool.indexOf(n); if (i < 0) missing.push(n); else pool.splice(i, 1) }
if (missing.length) { console.log('NUMBERS in en but not in', lang + ':', missing.join(' ')); bad++ }
const leftover = (tr.match(/[A-Za-z]{4,}/g) ?? []).length
console.log(`${lang}: tags ${b.length}/${a.length}, ${bad ? 'ISSUES ' + bad : 'OK'}`)
process.exit(bad ? 1 : 0)
