// Validates src/lib/askhans/categories.json: schema, 21 categories + default, picture files exist,
// icon names are registered in the widget, and every internal link points at a real route/slug.
// Run: npm run askhans:check
import fs from 'node:fs'

const errors = []
const { categories } = JSON.parse(fs.readFileSync('src/lib/askhans/categories.json', 'utf8'))

const iconsSrc = fs.readFileSync('src/components/askhans/icons.tsx', 'utf8')
const registeredIcons = new Set([...iconsSrc.matchAll(/^\s{2}([A-Z][A-Za-z0-9]+),?$/gm)].map((m) => m[1]))

const slugKeys = (file) => new Set([...fs.readFileSync(file, 'utf8').matchAll(/^\s*'([a-z0-9-]+)'\s*:/gm)].map((m) => m[1]))
const CLUSTERS = {
  'local-llms': slugKeys('src/lib/local-llms/slugs.ts'),
  'power-local-llm': slugKeys('src/lib/power-local-llm/slugs.ts'),
  'prompt-engineering': slugKeys('src/lib/prompt-engineering/slugs.ts'),
  'smart-home': slugKeys('src/lib/smart-home/slugs.ts'),
  'balcony-solar': slugKeys('src/lib/balcony-solar/slugs.ts'),
}
const STATIC = new Set(['directory', 'about', 'pq-apps', 'local-llms', 'power-local-llm', 'prompt-engineering', 'smart-home', 'balcony-solar', 'tools/what-can-i-run', 'tools/can-i-run-this'])

if (categories.length !== 21) errors.push(`expected 21 categories (20 + default), found ${categories.length}`)
if (!categories.some((c) => c.key === 'default')) errors.push('missing "default" category')

const seen = new Set()
for (const c of categories) {
  const where = `[${c.key}]`
  if (seen.has(c.key)) errors.push(`${where} duplicate key`)
  seen.add(c.key)
  for (const f of ['key', 'label_de', 'label_en', 'image', 'alt', 'links', 'icon']) if (c[f] == null) errors.push(`${where} missing ${f}`)
  if (typeof c.affiliate !== 'boolean') errors.push(`${where} affiliate must be boolean`)
  if (!fs.existsSync(`public${c.image}`)) errors.push(`${where} picture missing: public${c.image}`)
  if (!registeredIcons.has(c.icon)) errors.push(`${where} icon ${c.icon} not registered in components/askhans/icons.ts`)
  if (!Array.isArray(c.links) || c.links.length < 1 || c.links.length > 4) errors.push(`${where} needs 1-4 links`)
  for (const l of c.links ?? []) {
    const lw = `${where} link ${l.id}`
    for (const f of ['id', 'title', 'description', 'url', 'icon']) if (!l[f]) errors.push(`${lw} missing ${f}`)
    for (const f of ['placeholder', 'external', 'affiliate']) if (typeof l[f] !== 'boolean') errors.push(`${lw} ${f} must be boolean`)
    if (!registeredIcons.has(l.icon)) errors.push(`${lw} icon ${l.icon} not registered in components/askhans/icons.ts`)
    if (l.external || l.affiliate) continue // reserved, not validated against site routes
    const m = /^\/de\/(.+?)\/?$/.exec(l.url)
    if (!m) {
      errors.push(`${lw} internal v1 links must start with /de/ — got ${l.url}`)
      continue
    }
    const path = m[1]
    const [cluster, slug] = path.split('/')
    if (STATIC.has(path)) continue
    if (!slug || !CLUSTERS[cluster]?.has(slug)) errors.push(`${lw} unknown route ${l.url}`)
  }
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'))
  process.exit(1)
}
console.log(`askhans config OK — ${categories.length} categories, ${categories.reduce((n, c) => n + c.links.length, 0)} links`)
