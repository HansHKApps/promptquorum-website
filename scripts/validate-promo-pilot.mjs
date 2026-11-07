#!/usr/bin/env node
// Checks the promo-slot pilot config (src/lib/promo/pilot.ts): 25 groups, P1-P4 on 5 article groups each, P5 on
// 5 hubs, targets match the brief's cluster table, every page exists, controls are 20 distinct pages that are not
// in the pilot. Run: npm run test:promo-pilot
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { PILOT_GROUPS, PILOT_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
const { PE_SLUG_TO_KEY } = await jiti.import(path.join(ROOT, 'src/lib/prompt-engineering/slugs.ts'))
const errors = []
const fail = (m) => errors.push(m)

const entries = Object.entries(PILOT_GROUPS)
if (entries.length !== 25) fail(`expected 25 groups, got ${entries.length}`)
const byPl = {}
for (const [, e] of entries) byPl[e.placement] = (byPl[e.placement] ?? 0) + 1
for (const p of ['P1', 'P2', 'P3', 'P4', 'P5']) if (byPl[p] !== 5) fail(`${p}: expected 5 groups, got ${byPl[p] ?? 0}`)

const clusterOf = (k) => k.split('/')[1]
// Article file for a path; prompt-engineering URL slugs map to differently named article keys.
const articleFile = (k) => {
  const c = clusterOf(k)
  const slug = k.split('/')[2]
  const name = c === 'prompt-engineering' ? (PE_SLUG_TO_KEY[slug] ?? slug) : slug
  return path.join(ROOT, 'src/lib', c, 'articles', name + '.ts')
}
const allowed = { 'local-llms': ['power-mode', 'directory'], 'power-local-llm': ['directory', 'mcp'], 'prompt-engineering': ['ask-hans'] }
const mix = {}
for (const [k, e] of entries) {
  if (e.placement === 'P5') continue
  const c = clusterOf(k)
  if (!allowed[c]?.includes(e.target)) fail(`${k}: target ${e.target} is not allowed for cluster ${c}`)
  mix[c] ??= {}
  mix[c][e.target] = (mix[c][e.target] ?? 0) + 1
  if (!fs.existsSync(articleFile(k))) fail(`${k}: article file not found`)
}
if ((mix['local-llms']?.['power-mode'] ?? 0) !== 4 || (mix['local-llms']?.directory ?? 0) !== 4) fail('local-llms should be 4 Power Mode + 4 Directory')
if ((mix['power-local-llm']?.mcp ?? 0) !== 2) fail('power-local-llm should have exactly 2 MCP groups')
// Each of P1-P4 mixes clusters (cluster must not equal placement).
for (const p of ['P1', 'P2', 'P3', 'P4']) {
  const clusters = new Set(entries.filter(([, e]) => e.placement === p).map(([k]) => clusterOf(k)))
  if (clusters.size < 3) fail(`${p}: only ${clusters.size} cluster(s)`)
}
const controls = Object.entries(PILOT_CONTROLS)
const articleGroups = entries.filter(([, e]) => e.placement !== 'P5').map(([k]) => k)
if (controls.length !== articleGroups.length) fail(`expected ${articleGroups.length} controls, got ${controls.length}`)
for (const k of articleGroups) if (!PILOT_CONTROLS[k]) fail(`${k}: no control`)
const ctl = controls.map(([, v]) => v)
if (new Set(ctl).size !== ctl.length) fail('controls are not distinct')
for (const c of ctl) {
  if (PILOT_GROUPS[c]) fail(`control ${c} is also a pilot page`)
  if (!fs.existsSync(articleFile(c))) fail(`control ${c}: article file not found`)
}
if (errors.length) {
  console.error('promo pilot config: FAIL\n- ' + errors.join('\n- '))
  process.exit(1)
}
console.log(`promo pilot config: OK (${entries.length} groups, ${controls.length} controls; P1-P4 x5, P5 x5)`)
