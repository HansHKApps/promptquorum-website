#!/usr/bin/env node

/**
 * Volatile-number guard (GEO_WRITING_GUIDELINES.md Rule 49).
 *
 * GitHub star counts typed into article prose go stale within weeks and then disagree across the nine
 * locale blocks. They must come from the directory tile via `starsFor(lang)('<slug>')`
 * (src/lib/power-local-llm/app-facts.ts), which `npm run refresh-app-stars` keeps current.
 *
 * This script counts hard-coded star counts per file (e.g. "140,000+ GitHub stars", "25k stars",
 * "140.000+ Sterne", "15万スター") and compares against scripts/volatile-numbers-baseline.json.
 *   - A file whose count is HIGHER than its baseline (or a new file with any) FAILS.
 *   - Lower is fine and reported, so the backlog only shrinks. Run with --update-baseline after
 *     converting a file to ratchet the baseline down.
 *
 *   node scripts/validate-volatile-numbers.mjs                  # check (exit 1 on regression)
 *   node scripts/validate-volatile-numbers.mjs --list           # print every hit, file:line
 *   node scripts/validate-volatile-numbers.mjs --update-baseline
 *
 * Scope: src/lib/** (articles, blog, hubs). Directory tile data (src/lib/power-local-llm/apps/) is the
 * source of truth and is excluded; generated files are excluded.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SCAN_DIR = path.join(ROOT, 'src', 'lib')
const BASELINE = path.join(__dirname, 'volatile-numbers-baseline.json')

const args = process.argv.slice(2)
const list = args.includes('--list')
const updateBaseline = args.includes('--update-baseline')

const STAR_WORDS = /stars?\b|Sterne|étoiles|estrellas|estrelas|スター|星|نجمة|نجوم|스타/i
// 1,000-style grouped numbers, "140k", "15万", "150 mil" — followed or preceded by a star word nearby.
const NUMBER = /(?<![\d.,])(\d{1,3}(?:[.,   ]\d{3})+|\d{2,3}k|\d{1,3}万|\d{2,3} mil)\+?/g
const HAS_PLACEHOLDER = /\$\{st\.|starsFor\(|appStars\(/

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (['apps', 'node_modules', 'generated'].includes(e.name)) continue
      walk(p, out)
    } else if (e.name.endsWith('.ts') && e.name !== 'app-facts.ts') out.push(p)
  }
  return out
}

const hits = {}
for (const file of walk(SCAN_DIR)) {
  const rel = path.relative(ROOT, file)
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (!STAR_WORDS.test(line)) return
    for (const m of line.matchAll(NUMBER)) {
      const around = line.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40)
      if (!STAR_WORDS.test(around)) continue
      // "2,000 stars" in an unrelated sense is rare; "(1,000 requests)" has no star word nearby so it is skipped.
      ;(hits[rel] ??= []).push({ line: i + 1, text: m[0] })
    }
  })
}

const counts = Object.fromEntries(Object.entries(hits).map(([f, h]) => [f, h.length]))

if (updateBaseline) {
  fs.writeFileSync(BASELINE, JSON.stringify(counts, null, 2) + '\n')
  console.log(`Baseline written: ${Object.keys(counts).length} file(s), ${Object.values(counts).reduce((a, b) => a + b, 0)} hard-coded star count(s).`)
  process.exit(0)
}

if (list) {
  for (const [f, h] of Object.entries(hits)) for (const x of h) console.log(`${f}:${x.line}  ${x.text}`)
}

const baseline = fs.existsSync(BASELINE) ? JSON.parse(fs.readFileSync(BASELINE, 'utf8')) : {}
const regressions = []
let improved = 0
for (const [f, n] of Object.entries(counts)) {
  const base = baseline[f] ?? 0
  if (n > base) regressions.push(`${f}: ${n} hard-coded star count(s), baseline ${base}`)
}
for (const [f, base] of Object.entries(baseline)) if ((counts[f] ?? 0) < base) improved++

console.log('🔍 Validating volatile numbers (hard-coded GitHub star counts)...')
if (regressions.length) {
  console.error('\n❌ Hard-coded star counts added (GEO_WRITING_GUIDELINES.md Rule 49):\n')
  for (const r of regressions) console.error(`  ${r}`)
  console.error(
    "\nUse the directory tile instead: import { starsFor } from '@/lib/power-local-llm/app-facts' and write ${st.en('open-webui')} in the string.\n" +
      'Run with --list to see every hit. To refresh the underlying number: npm run refresh-app-stars -- --slug=<slug> --write\n',
  )
  process.exit(1)
}
const total = Object.values(counts).reduce((a, b) => a + b, 0)
console.log(`✅ No new hard-coded star counts (${total} legacy hit(s) in ${Object.keys(counts).length} file(s) under baseline${improved ? `; ${improved} file(s) improved — run --update-baseline to ratchet` : ''}).`)
