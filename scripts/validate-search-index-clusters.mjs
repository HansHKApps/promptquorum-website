#!/usr/bin/env node
/**
 * Guard against the "new cluster silently missing from site search" bug.
 *
 * The search index (src/app/api/search-index/route.ts) enumerates content
 * clusters by hand. When a new cluster is added under src/lib/<name>/ with the
 * standard articles-barrel.ts + slugs.ts shape, it is NOT picked up
 * automatically — it must also be wired into the search-index route. This
 * script fails if any such cluster is not referenced there.
 *
 * Run manually:  node scripts/validate-search-index-clusters.mjs
 * Runs monthly in CI via .github/workflows/validate-search-index.yml
 */

import { readdirSync, existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const libDir = join(root, 'src', 'lib')
const routePath = join(root, 'src', 'app', 'api', 'search-index', 'route.ts')

// A "cluster" is any src/lib/<name>/ that has both articles-barrel.ts and slugs.ts.
const clusters = readdirSync(libDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter(
    (name) =>
      existsSync(join(libDir, name, 'articles-barrel.ts')) &&
      existsSync(join(libDir, name, 'slugs.ts')),
  )
  .sort()

const route = readFileSync(routePath, 'utf8')

// A cluster is "wired in" if the route both imports its barrel and emits it as a
// hub — checked via the barrel import path and the `hub: '<name>'` literal.
const missing = clusters.filter((name) => {
  const importsBarrel = route.includes(`@/lib/${name}/articles-barrel`)
  const emitsHub = route.includes(`hub: '${name}'`)
  return !(importsBarrel && emitsHub)
})

console.log(`🔍 Search-index cluster coverage`)
console.log(`   Clusters found: ${clusters.join(', ')}`)

if (missing.length > 0) {
  console.error('')
  console.error('❌ These content clusters are NOT wired into site search:')
  for (const name of missing) console.error(`   • ${name}`)
  console.error('')
  console.error('Fix: add the cluster to src/app/api/search-index/route.ts')
  console.error('  1. import { <name>Content } from "@/lib/<name>/articles-barrel"')
  console.error('  2. import { <NAME>_SLUG_TO_KEY } from "@/lib/<name>/slugs"')
  console.error('  3. import { <NAME>_PUBLISHED_SLUGS } from "@/lib/<name>/published" (if gated)')
  console.error('  4. add a loop pushing entries with hub: "<name>"')
  console.error('  5. add HUB_LABELS / HUB_DOT_COLOR entries in src/components/search/search-utils.ts')
  process.exit(1)
}

console.log(`✅ All ${clusters.length} clusters are indexed for search.`)
