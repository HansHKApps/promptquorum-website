#!/usr/bin/env node
// Checks the affiliate-banner pilot assignment (src/lib/affiliate-banners/assignment.ts): 60 treated groups (15 each in
// A1/A3/B1/B3), 20 controls, no overlap with the promo pilot (groups or controls), every page exists and is an
// affiliate-regime page (affiliateDisclosure: true), controls are not treated. Run: npm run test:affiliate-banner-assignment
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_GROUPS, AFF_BANNER_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
const { PILOT_GROUPS, PILOT_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
const maps = {
  'local-llms': (await jiti.import(path.join(ROOT, 'src/lib/local-llms/slugs.ts'))).LLM_SLUG_TO_KEY,
  'power-local-llm': (await jiti.import(path.join(ROOT, 'src/lib/power-local-llm/slugs.ts'))).POWER_LLM_SLUG_TO_KEY,
}
const errors = []
const fail = (m) => errors.push(m)

const treated = Object.entries(AFF_BANNER_GROUPS)
if (treated.length !== 60) fail(`expected 60 treated groups, got ${treated.length}`)
const per = {}
for (const [, e] of treated) per[e.cell] = (per[e.cell] ?? 0) + 1
for (const c of ['A1', 'A3', 'B1', 'B3']) if (per[c] !== 15) fail(`${c}: expected 15 groups, got ${per[c] ?? 0}`)
if (AFF_BANNER_CONTROLS.length !== 20) fail(`expected 20 controls, got ${AFF_BANNER_CONTROLS.length}`)
if (new Set(AFF_BANNER_CONTROLS).size !== AFF_BANNER_CONTROLS.length) fail('duplicate controls')

const promo = new Set([...Object.keys(PILOT_GROUPS), ...Object.values(PILOT_CONTROLS)])
const all = [...treated.map(([k]) => k), ...AFF_BANNER_CONTROLS]
const treatedSet = new Set(treated.map(([k]) => k))
for (const k of AFF_BANNER_CONTROLS) if (treatedSet.has(k)) fail(`${k}: is both treated and control`)
for (const k of all) if (promo.has(k)) fail(`${k}: overlaps the promo pilot (groups or controls)`)

const file = (k) => {
  const [, c, slug] = k.split('/')
  const name = maps[c]?.[slug] ?? slug
  return path.join(ROOT, 'src/lib', c, 'articles', name + '.ts')
}
for (const k of all) {
  const f = file(k)
  if (!fs.existsSync(f)) { fail(`${k}: article file not found (${path.relative(ROOT, f)})`); continue }
  if (!fs.readFileSync(f, 'utf8').includes('affiliateDisclosure: true')) fail(`${k}: not an affiliate-regime page`)
}
const u = '/power-local-llm/uncensored-local-llm-creative-writing-ethics'
if (AFF_BANNER_GROUPS[u]?.tier !== 'solo') fail('the uncensored page must be its own stratum (tier solo)')

if (errors.length) { console.error('affiliate-banner assignment: FAIL\n' + errors.map((e) => ' - ' + e).join('\n')); process.exit(1) }
console.log(`affiliate-banner assignment: OK (${treated.length} treated, ${AFF_BANNER_CONTROLS.length} controls, ${JSON.stringify(per)})`)
