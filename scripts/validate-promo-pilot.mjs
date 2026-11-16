#!/usr/bin/env node
// Checks the promo-slot pilot config (src/lib/promo/pilot.ts): 97 groups (92 articles + 5 hubs), each target balanced
// over P1-P4 (max-min <= 1), P5 on 5 hubs, targets match the cluster table, every page exists, every article group has a
// distinct control that is not in the pilot, and excluded pages (PILOT_EXCLUDED) appear nowhere. Run: npm run test:promo-pilot
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { PILOT_GROUPS, PILOT_CONTROLS, PILOT_EXCLUDED } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
const { PE_SLUG_TO_KEY } = await jiti.import(path.join(ROOT, 'src/lib/prompt-engineering/slugs.ts'))
const { LLM_SLUG_TO_KEY } = await jiti.import(path.join(ROOT, 'src/lib/local-llms/slugs.ts'))
const { POWER_LLM_SLUG_TO_KEY } = await jiti.import(path.join(ROOT, 'src/lib/power-local-llm/slugs.ts'))
const SLUG_MAPS = { 'prompt-engineering': PE_SLUG_TO_KEY, 'local-llms': LLM_SLUG_TO_KEY, 'power-local-llm': POWER_LLM_SLUG_TO_KEY }
const errors = []
const fail = (m) => errors.push(m)

const entries = Object.entries(PILOT_GROUPS)
if (entries.length !== 97) fail(`expected 97 groups, got ${entries.length}`)
const byPl = {}
for (const [, e] of entries) byPl[e.placement] = (byPl[e.placement] ?? 0) + 1
if (byPl.P5 !== 5) fail(`P5: expected 5 hubs, got ${byPl.P5 ?? 0}`)
// Balanced placements WITHIN each target (the overall P1-P4 totals differ because the targets have different sizes).
const byTP = {}
for (const [, e] of entries) if (e.placement !== 'P5') { byTP[e.target] ??= { P1: 0, P2: 0, P3: 0, P4: 0 }; byTP[e.target][e.placement]++ }
const SIZES = { mcp: 20, 'power-mode': 30, 'ask-hans': 12, directory: 30 }
for (const [t, n] of Object.entries(SIZES)) {
  const c = byTP[t] ?? { P1: 0, P2: 0, P3: 0, P4: 0 }, v = Object.values(c)
  if (v.reduce((a, b) => a + b, 0) !== n) fail(`${t}: expected ${n} article groups, got ${v.reduce((a, b) => a + b, 0)}`)
  if (Math.max(...v) - Math.min(...v) > 1) fail(`${t}: placements not balanced (${JSON.stringify(c)})`)
}
for (const x of PILOT_EXCLUDED) {
  if (PILOT_GROUPS[x]) fail(`${x} is excluded but is a pilot page`)
  if (Object.values(PILOT_CONTROLS).includes(x) || PILOT_CONTROLS[x]) fail(`${x} is excluded but is a control`)
}

const clusterOf = (k) => k.split('/')[1]
// Article file for a path; URL slugs can map to differently named article keys (e.g. a -2026 suffix).
const articleFile = (k) => {
  const c = clusterOf(k)
  const slug = k.split('/')[2]
  const name = SLUG_MAPS[c]?.[slug] ?? slug
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
if ((mix['local-llms']?.['power-mode'] ?? 0) !== 30 || (mix['local-llms']?.directory ?? 0) !== 12) fail('local-llms should be 30 Power Mode + 12 Directory')
if ((mix['power-local-llm']?.directory ?? 0) !== 18 || (mix['power-local-llm']?.mcp ?? 0) !== 20) fail('power-local-llm should be 18 Directory + 20 MCP')
if ((mix['prompt-engineering']?.['ask-hans'] ?? 0) !== 12) fail('prompt-engineering should be 12 Ask Hans groups')
// Each of P1-P4 mixes clusters and targets (cluster must not equal placement).
for (const p of ['P1', 'P2', 'P3', 'P4']) {
  const inP = entries.filter(([, e]) => e.placement === p)
  const clusters = new Set(inP.map(([k]) => clusterOf(k)))
  if (clusters.size < 3) fail(`${p}: only ${clusters.size} cluster(s)`)
  if (new Set(inP.map(([, e]) => e.target)).size < 3) fail(`${p}: fewer than 3 targets`)
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
console.log(`promo pilot config: OK (${entries.length} groups, ${controls.length} controls; ${JSON.stringify(byTP)}, P5 x5)`)
