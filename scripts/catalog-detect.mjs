#!/usr/bin/env node
// Weekly drift report for the local-LLM catalog. Rebuilds the catalog from
// primary sources into a temp file, diffs it against the committed
// data/local-llm-catalog.json, and checks the registry link for every entry.
// Read-only: never touches the committed catalog.
//
// Usage:
//   node scripts/catalog-detect.mjs                     # print the report
//   node scripts/catalog-detect.mjs --report <path>     # also write it as markdown
//
// Exit codes: 0 = ran (changes or not; see "CHANGED=" line), 2 = rebuild failed
// (a candidate no longer resolves - that itself needs a human), 1 = unexpected error.

import fs from 'fs'
import os from 'os'
import path from 'path'
import { spawnSync } from 'child_process'
import { fetchOllamaPopular } from './lib/catalog-sources.mjs'
import { loadRegistry } from './lib/registry.mjs'

const args = process.argv.slice(2)
const reportIdx = args.indexOf('--report')
const reportPath = reportIdx >= 0 ? args[reportIdx + 1] : null

const GIB = 2 ** 30
const SIZE_DRIFT = 0.01 // flag size changes > 1%
const committed = JSON.parse(fs.readFileSync('data/local-llm-catalog.json', 'utf8'))
const candidates = JSON.parse(fs.readFileSync('data/catalog-candidates.json', 'utf8')).candidates

const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'catalog-')), 'catalog.json')
const build = spawnSync('node', ['scripts/catalog-build.mjs', '--out', tmp], { encoding: 'utf8' })
if (build.status !== 0) {
  const msg = `Rebuild FAILED - at least one candidate no longer resolves from primary sources:\n${build.stderr || build.stdout}`
  console.error(msg)
  if (reportPath) fs.writeFileSync(reportPath, `# Local LLM catalog - weekly check\n\n**Rebuild failed.**\n\n\`\`\`\n${build.stderr || build.stdout}\n\`\`\`\n`)
  console.log('CHANGED=true')
  process.exit(2)
}
const fresh = JSON.parse(fs.readFileSync(tmp, 'utf8'))

const lines = []
const section = (title, items) => {
  if (!items.length) return
  lines.push(`\n## ${title}\n`)
  for (const i of items) lines.push(`- ${i}`)
}

const byId = (c) => new Map(c.models.map((m) => [m.id, m]))
const oldM = byId(committed)
const newM = byId(fresh)

const sizeChanges = [], quantChanges = [], ctxChanges = [], licChanges = [], capChanges = [], kvChanges = [], activeChanges = []
for (const [id, n] of newM) {
  const o = oldM.get(id)
  if (!o) continue
  const on = o.quants[0], nn = n.quants[0]
  if (on.name !== nn.name) quantChanges.push(`\`${id}\`: default quant ${on.name} -> ${nn.name}`)
  const drift = Math.abs(nn.size_bytes - on.size_bytes) / on.size_bytes
  if (drift > SIZE_DRIFT) sizeChanges.push(`\`${id}\`: ${(on.size_bytes / GIB).toFixed(2)} -> ${(nn.size_bytes / GIB).toFixed(2)} GiB (${(drift * 100).toFixed(1)}%) - the Ollama build behind \`${n.runtimes.ollama}\` was republished`)
  if (o.context_max !== n.context_max) ctxChanges.push(`\`${id}\`: context ${o.context_max} -> ${n.context_max}`)
  if (o.license !== n.license) licChanges.push(`\`${id}\`: license ${o.license} -> ${n.license}`)
  if (o.active_params_b !== n.active_params_b) activeChanges.push(`\`${id}\`: active params ${o.active_params_b} -> ${n.active_params_b}`)
  for (const k of Object.keys(n.capabilities)) {
    if (o.capabilities[k] !== n.capabilities[k]) capChanges.push(`\`${id}\`: capability ${k} ${o.capabilities[k]} -> ${n.capabilities[k]}`)
  }
  if (JSON.stringify(o.kv?.groups) !== JSON.stringify(n.kv?.groups)) kvChanges.push(`\`${id}\`: KV layer groups changed`)
}
const added = [...newM.keys()].filter((id) => !oldM.has(id)).map((id) => `\`${id}\``)
const removed = [...oldM.keys()].filter((id) => !newM.has(id)).map((id) => `\`${id}\``)

// Registry status of every catalog entry (the registry may have moved on since the last refresh).
const registry = loadRegistry()
const registryIssues = []
for (const m of fresh.models) {
  const r = registry.models.find((x) => x.model === m.registry_model)
  if (!r) registryIssues.push(`\`${m.id}\`: registry entry '${m.registry_model}' not found`)
  else if (r.status !== 'current') registryIssues.push(`\`${m.id}\`: registry says '${m.registry_model}' is **${r.status}**${r.superseded_by ? ` (superseded by ${r.superseded_by})` : ''} - replace or drop this variant`)
}

// Popular Ollama families we do not cover (information for curation, never auto-added).
const popular = await fetchOllamaPopular()
const covered = new Set(candidates.map((c) => c.family))
const uncovered = popular
  .slice(0, 30)
  .filter((p) => !covered.has(p.family))
  .slice(0, 12)
  .map((p) => `#${p.rank} \`${p.family}\` (${p.sizes.join(', ') || 'n/a'}${p.capabilities.length ? '; ' + p.capabilities.join(', ') : ''})`)

lines.push('# Local LLM catalog - weekly check')
lines.push(`\nCatalog ${committed.models.length} variants, committed last_updated ${committed.last_updated}; rebuilt ${fresh.last_updated}.`)
section('Registry link needs attention', registryIssues)
section('Variants added', added)
section('Variants removed', removed)
section('Size changes (> 1%)', sizeChanges)
section('Default quantization changes', quantChanges)
section('Context window changes', ctxChanges)
section('License changes', licChanges)
section('Active-parameter changes', activeChanges)
section('Capability changes', capChanges)
section('KV architecture changes', kvChanges)
section('Popular Ollama families not in the catalog (curation input, top 12 of the top 30)', uncovered)

const factChanges = [added, removed, sizeChanges, quantChanges, ctxChanges, licChanges, activeChanges, capChanges, kvChanges].some((a) => a.length)
if (!factChanges && !registryIssues.length) lines.push('\nNo fact changes. Only verification dates move this week.')

const report = lines.join('\n') + '\n'
console.log(report)
if (reportPath) fs.writeFileSync(reportPath, report)
console.log(`CHANGED=${factChanges || registryIssues.length > 0}`)
