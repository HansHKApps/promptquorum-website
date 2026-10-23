// Post-page-updater completion check (docs/PAGE_UPDATER.md "Step 10").
// Fails (exit 1) when a recently refreshed article in a skin-supporting cluster
// is missing `designSkin: 'hub'`, or has it in only some locales.
// Usage: node scripts/check-page-updater-complete.mjs [--days 3] [--all]
//   default  : articles whose dateModified is within the last N days
//   --all    : full sweep (run every 3rd page-updater run): every article in a supported cluster
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const SKIN_CLUSTERS = ['local-llms', 'power-local-llm'] // renderers that implement article-skin
const LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'ar', 'ja', 'zh', 'ko']
const args = process.argv.slice(2)
const all = args.includes('--all')
const days = Number(args[args.indexOf('--days') + 1]) || 3
const cutoff = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10)

const problems = []
let checked = 0
for (const cluster of SKIN_CLUSTERS) {
  const dir = join('src/lib', cluster, 'articles')
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.ts'))) {
    const src = readFileSync(join(dir, f), 'utf8')
    const mods = [...src.matchAll(/dateModified:\s*'(\d{4}-\d{2}-\d{2})'/g)].map((m) => m[1])
    const latest = mods.sort().at(-1)
    if (!all && !(latest && latest >= cutoff)) continue
    checked++
    const blocks = LOCALES.filter((l) => new RegExp(`^\\s{2,6}${l}:\\s*\\{\\s*$`, 'm').test(src)).length
    const skinned = (src.match(/^\s*designSkin:\s*'hub',?\s*$/gm) ?? []).length
    if (skinned === 0) {
      if (!all) problems.push(`${cluster}/${f}: refreshed ${latest} but has no designSkin: 'hub'`)
    } else if (skinned !== blocks) {
      problems.push(`${cluster}/${f}: designSkin on ${skinned} of ${blocks} locale blocks (must be all or none)`)
    }
  }
}
if (problems.length) {
  console.error(problems.map((p) => 'INCOMPLETE ' + p).join('\n'))
  process.exit(1)
}
console.log(`page-updater completion check: ${checked} article(s) ok (${all ? 'full sweep' : `since ${cutoff}`})`)
