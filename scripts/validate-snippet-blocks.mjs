#!/usr/bin/env node

/**
 * snippetBlocks Validator
 *
 * CLAUDE.md, "Content Conventions": GEO compliance requires `snippetBlocks`
 * (`one-sentence` + `plain-terms`), `leadAnswerBlock`, and an `isTldr: true`
 * section in every article.
 *
 * Why this exists: that rule was declared but never enforced. A 2026-08-30
 * audit found ~1,828 locale blocks across 224 article files missing
 * `snippetBlocks` — and critically, the gap is ~40% in EVERY language
 * including English (en 198/512, de 211/510, zh 214/510). That even spread
 * means this is not translation drift; it is a convention that was simply
 * never backfilled, and nothing surfaced it.
 *
 * `snippetBlocks` are what search engines and AI answer engines lift as the
 * extractable summary. A block without them still renders fine, which is
 * exactly why the gap stayed invisible.
 *
 * Two modes, matching validate-table-cell-length.mjs:
 *   (default)  Full-repo audit. Informational only — always exits 0. The
 *              existing backlog is large and retroactively hard-failing the
 *              build would block every deploy.
 *   --staged   Reports on staged article files only. Also exits 0: filling a
 *              snippetBlock means WRITING a summary in that block's own
 *              language, which cannot be auto-generated, so blocking a commit
 *              would only push authors to --no-verify.
 *
 * Regex-based heuristic, not a parser — tuned to answer "does this locale
 * block declare both snippet types anywhere", which is what the rule asks.
 */

import { readFileSync } from 'node:fs'
import { globSync } from 'node:fs'
import { execSync } from 'node:child_process'

const LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'ar', 'ja', 'zh', 'ko']
const staged = process.argv.includes('--staged')

function articleFiles() {
  if (staged) {
    const out = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' })
    return out.split('\n').filter((f) => /^src\/lib\/[^/]+\/articles\/.+\.ts$/.test(f))
  }
  return globSync('src/lib/*/articles/*.ts')
}

/** Split a file into top-level locale blocks. */
function localeBlocks(text) {
  const found = []
  for (const loc of LOCALES) {
    const m = new RegExp(`\\n\\s{0,4}${loc}:\\s*\\{\\s*\\n`).exec(text)
    if (m) found.push([loc, m.index])
  }
  found.sort((a, b) => a[1] - b[1])
  return found.map(([loc, start], i) => [
    loc,
    text.slice(start, i + 1 < found.length ? found[i + 1][1] : text.length),
  ])
}

const files = articleFiles()
const gaps = []
const perLocale = Object.fromEntries(LOCALES.map((l) => [l, { missing: 0, total: 0 }]))

for (const file of files) {
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const missingHere = []
  for (const [loc, block] of localeBlocks(text)) {
    perLocale[loc].total++
    const hasOne = block.includes("'one-sentence'")
    const hasPlain = block.includes("'plain-terms'")
    if (!hasOne || !hasPlain) {
      perLocale[loc].missing++
      missingHere.push(loc)
    }
  }
  if (missingHere.length) gaps.push([file, missingHere])
}

const totalMissing = Object.values(perLocale).reduce((a, b) => a + b.missing, 0)

if (!totalMissing) {
  console.log(
    staged
      ? `✓ snippetBlocks check passed (${files.length} staged article file(s))`
      : `✓ snippetBlocks present in every locale block (${files.length} files)`,
  )
  process.exit(0)
}

console.log(`\n⚠️  snippetBlocks missing — ${totalMissing} locale block(s) across ${gaps.length} file(s)\n`)
console.log('  CLAUDE.md requires one-sentence + plain-terms in every article.')
console.log('  These must be WRITTEN per block, in that block\'s own language —')
console.log('  a one-sentence extractable answer and a plain-language restatement.\n')
console.log('  locale   missing / blocks')
for (const loc of LOCALES) {
  const { missing, total } = perLocale[loc]
  if (!total) continue
  const pct = total ? Math.round((missing / total) * 100) : 0
  console.log(`  ${loc.padEnd(7)}${String(missing).padStart(7)} / ${String(total).padEnd(6)} (${pct}%)`)
}

const worst = gaps.slice().sort((a, b) => b[1].length - a[1].length).slice(0, 15)
console.log(`\n  worst files:`)
for (const [file, locs] of worst) {
  console.log(`    ${locs.length} locales  ${file.replace('src/lib/', '')}  [${locs.join(',')}]`)
}
if (gaps.length > worst.length) console.log(`    … and ${gaps.length - worst.length} more file(s)`)

console.log('\n  Informational only — exits 0. Fill these as each page is worked.\n')
process.exit(0)
