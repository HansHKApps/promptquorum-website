#!/usr/bin/env node
// Counts distinct pages (EN block only) that link to each new cloud-GPU page. Excludes the 7 pages themselves.
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const NEW = {
  'best-cloud-gpu-providers': 25,
  'runpod-review': 8, 'vast-ai-review': 8, 'clore-ai-review': 8,
  'novita-ai-review': 5, 'vultr-digitalocean-upcloud-gpu-cloud': 5, 'gpu-server-hosting-cudo-cherry-database-mart': 5,
}
const libs = join(root, 'src/lib')
const files = []
for (const c of readdirSync(libs)) {
  try { for (const f of readdirSync(join(libs, c, 'articles'))) if (f.endsWith('.ts')) files.push([c, f.replace(/\.ts$/, ''), join(libs, c, 'articles', f)]) } catch {}
}
const enBlock = (t) => {
  // The English block starts at the first `en: {` line; it ends at the next sibling locale key at the same indentation.
  const m = /^([ \t]*)en: \{/m.exec(t)
  if (!m) return ''
  const rest = t.slice(m.index + m[0].length)
  const j = rest.search(new RegExp(`^${m[1]}(?:de|fr|es|ja|zh|ko|pt|ar): \\{`, 'm'))
  return j < 0 ? rest : rest.slice(0, j)
}
const res = {}
for (const slug of Object.keys(NEW)) res[slug] = []
for (const [cluster, slug, path] of files) {
  if (slug in NEW) continue
  const en = enBlock(readFileSync(path, 'utf8'))
  for (const target of Object.keys(NEW)) if (new RegExp(`\\]\\(/power-local-llm/${target}[)#]`).test(en)) res[target].push(`${cluster}/${slug}`)
}
let ok = true
console.log('| New page | Inbound (EN) | Minimum | Status |\n|---|---|---|---|')
for (const [slug, min] of Object.entries(NEW)) {
  const n = res[slug].length
  if (n < min) ok = false
  console.log(`| ${slug} | ${n} | ${min} | ${n >= min ? 'OK' : 'BELOW'} |`)
}
if (process.argv.includes('--list')) for (const [s, l] of Object.entries(res)) console.log(`\n${s}:\n  ` + l.join('\n  '))
process.exit(ok ? 0 : 1)
