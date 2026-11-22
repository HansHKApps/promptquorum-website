#!/usr/bin/env node
// Verification table for the 7 cloud-GPU pages: per locale section count / FAQ count / affiliateLinks count. Exits 1 if locales differ.
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(join(root, 'package.json'))
const ts = require('typescript')
const SLUGS = ['best-cloud-gpu-providers', 'runpod-review', 'vast-ai-review', 'clore-ai-review', 'novita-ai-review', 'vultr-digitalocean-upcloud-gpu-cloud', 'gpu-server-hosting-cudo-cherry-database-mart']
const LANGS = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'ko', 'pt', 'ar']
const load = (slug) => {
  const code = readFileSync(join(root, 'src/lib/power-local-llm/articles', slug + '.ts'), 'utf8')
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const m = { exports: {} }
  const req = (n) => (n === '@/lib/author' ? { authorPerson: () => ({}) } : n === '@/lib/imageObjectSchema' ? { buildOgImageObject: () => ({}) } : {})
  new Function('module', 'exports', 'require', js)(m, m.exports, req)
  return m.exports.article
}
const countAff = (o) => {
  let n = 0
  const walk = (x) => { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === 'object') for (const [k, v] of Object.entries(x)) { if (k === 'affiliateLinks' && Array.isArray(v)) n += v.length; else walk(v) } }
  walk(o)
  return n
}
let bad = 0
console.log('| Page | ' + LANGS.join(' | ') + ' | Equal |\n|---|' + LANGS.map(() => '---').join('|') + '|---|')
for (const slug of SLUGS) {
  const a = load(slug)
  const cells = LANGS.map((l) => {
    const b = a[l]
    if (!b) return 'MISSING'
    return `${Object.keys(b.sections).length}/${b.sections.faqSection?.faqs?.length ?? '-'}/${countAff(b.sections)}`
  })
  const equal = new Set(cells).size === 1
  if (!equal) bad++
  console.log(`| ${slug} | ${cells.join(' | ')} | ${equal ? 'yes' : 'NO'} |`)
}
console.log('\ncell = sections/FAQs/affiliateLinks')
process.exit(bad ? 1 : 0)
