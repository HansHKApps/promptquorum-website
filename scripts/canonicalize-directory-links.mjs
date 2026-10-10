#!/usr/bin/env node
// One-off: point links at the canonical /directory instead of the legacy
// /power-local-llm/local-llm-software-directory[-2026] path (which only exists
// as a 301). Scope is limited to review-page article files; only the path
// segment changes, so locale prefixes, query strings and #anchors are kept.
//
//   node scripts/canonicalize-directory-links.mjs          # dry run
//   node scripts/canonicalize-directory-links.mjs --write
//
// Guard: the number of legacy matches before must equal the number of
// canonical matches added, and no other line may differ.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const WRITE = process.argv.includes('--write')
const DIRS = ['src/lib/power-local-llm/articles', 'src/lib/local-llms/articles']
const LEGACY = /(\/(?:de|fr|es|ja|zh|pt|ar|ko))?\/power-local-llm\/local-llm-software-directory(?:-2026)?(?![A-Za-z0-9-])/g

const reviewNames = new Set(
  Object.values(JSON.parse(fs.readFileSync(path.join(ROOT, 'src/generated/feature-review-index.json'), 'utf8'))).map((v) => v.urlSlug),
)
reviewNames.add('microsoft-agent-framework-review')
// cherry-studio's article file is keyed by its article key, not its URL slug
const keyAlias = new Map([['cherry-studio-ai-desktop-client-2026', 'cherry-studio-ai-desktop-client']])

let files = 0
let replaced = 0
const skipped = []
for (const dir of DIRS) {
  for (const f of fs.readdirSync(path.join(ROOT, dir)).filter((x) => x.endsWith('.ts'))) {
    const abs = path.join(ROOT, dir, f)
    const src = fs.readFileSync(abs, 'utf8')
    const matches = src.match(LEGACY)
    if (!matches) continue
    const base = f.replace(/\.ts$/, '')
    if (!reviewNames.has(base) && !reviewNames.has(keyAlias.get(base) ?? '')) {
      skipped.push(`${dir}/${f} (${matches.length})`)
      continue
    }
    const out = src.replace(LEGACY, (_m, loc) => `${loc ?? ''}/directory`)
    const before = src.split('\n')
    const after = out.split('\n')
    if (before.length !== after.length) throw new Error(`${f}: line count changed`)
    const changedLines = before.filter((l, i) => l !== after[i]).length
    if (LEGACY.test(out)) throw new Error(`${f}: legacy URL still present after replace`)
    LEGACY.lastIndex = 0
    files++
    replaced += matches.length
    console.log(`${dir}/${f}: ${matches.length} link(s) on ${changedLines} line(s)`)
    if (WRITE) fs.writeFileSync(abs, out)
  }
}
console.log(`\n${WRITE ? 'APPLIED' : 'DRY RUN'}: ${replaced} links in ${files} files`)
if (skipped.length) console.log(`Skipped (not a review page, left for a separate decision):\n  ${skipped.join('\n  ')}`)
