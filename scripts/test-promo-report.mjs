#!/usr/bin/env node
// Tests for the promo pilot report core + CLI, using a synthetic data set with a KNOWN effect.
// Run: npm run test:promo-report
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { createJiti } from 'jiti'
import { groupPath, localeOf, analyse, clusteredCI, pooledDiff, mulberry32 } from './lib/promo-report-core.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { PILOT_GROUPS, PILOT_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
let failed = 0
const ok = (c, m) => { if (!c) { failed++; console.error('FAIL', m) } else console.log('ok  ', m) }

ok(groupPath('/de/local-llms/x') === '/local-llms/x' && groupPath('/local-llms/x') === '/local-llms/x' && groupPath('/ko') === '/' && groupPath('/de/') === '/', 'groupPath strips locale prefixes')
ok(localeOf('/ja/a') === 'ja' && localeOf('/a') === 'en', 'localeOf')

// Synthetic world: every page 10,000 pageviews in the pilot window (and in baseline). Control usage 20 per 10k views
// (2 per 1,000). Treatment usage = control + 5 per 1,000 in the pilot window (the true effect), +0 in the baseline.
const groups = Object.entries(PILOT_GROUPS).map(([p, e]) => ({ path: p, placement: e.placement, target: e.target, control: PILOT_CONTROLS[p] ?? null }))
const UE = { 'ask-hans': 'ask_hans_question', 'power-mode': 'power_report_started', directory: 'directory_app_view' }
function world(effectPer1000) {
  const w = { pageviews: {}, events: { promo_view: {}, promo_click: {}, promo_open: {}, ask_hans_question: {}, power_report_started: {}, directory_app_view: {} } }
  const add = (name, p, n) => { w.events[name][p] = (w.events[name][p] ?? 0) + n }
  for (const g of groups) {
    for (const [p, isT] of [[g.path, true], [g.control, false]]) {
      if (!p) continue
      w.pageviews[p] = 10000
      w.pageviews['/de' + p] = 4000 // a locale version
      const ue = UE[g.target]
      if (ue) add(ue, p, 20 + (isT ? effectPer1000 * 10 : 0))
      if (isT) { add('promo_view', p, 3000); add('promo_view', '/de' + p, 1500); add('promo_click', p, 120); add('promo_click', '/de' + p, 30); add('promo_open', p, 60) }
    }
  }
  return w
}
const pilot = world(5), baseline = world(0)
const a1 = analyse({ groups, pilot, baseline, opts: { reps: 500 } })
const a2 = analyse({ groups, pilot, baseline, opts: { reps: 500 } })
ok(JSON.stringify(a1) === JSON.stringify(a2), 'analysis is deterministic (seeded bootstrap)')
const dir = a1.cells.find((c) => c.key === 'directory / P1')
// treatment: 20 + 50 usage per 14,000 pageviews = 5.000 per 1,000; control: 20 per 14,000 = 1.4286 per 1,000
ok(dir && dir.incr && Math.abs(dir.incr.est - (5 - 20000 / 14000)) < 1e-6, `directory incremental per 1,000 equals the planted effect (${dir?.incr?.est.toFixed(4)} vs ${(5 - 20000 / 14000).toFixed(4)})`)
ok(dir.incrBase && Math.abs(dir.incrBase.est) < 1e-9, 'baseline difference is ~0 when no effect before launch')
ok(dir.did && dir.did.est > 0 && dir.did.lo > 0, `difference in differences > 0 with interval above 0 (est ${dir.did?.est.toFixed(2)} [${dir.did?.lo.toFixed(2)}, ${dir.did?.hi.toFixed(2)}])`)
const mcp = a1.cells.find((c) => c.key === 'mcp')
ok(mcp && mcp.incr === null && mcp.usage === null, 'MCP has no usage event: judged on reach/CTR only, pooled over placements')
ok(a1.cells.some((c) => c.key === 'power-mode') && !a1.cells.some((c) => c.key.startsWith('power-mode /')), 'Power Mode is pooled over placements')
const hub = a1.cells.find((c) => c.key === 'ask-hans / P5')
ok(hub && hub.pairs === 0 && hub.incr?.note, 'hub cell has no matched pairs, no interval')
ok(dir.eligible === true && typeof dir.verdict === 'string', `eligible cell gets a verdict (${dir.verdict})`)
// Winner path: make one cell clearly better (more clicks) than the median
const boosted = JSON.parse(JSON.stringify(pilot))
for (const g of groups) if (g.target === 'directory' && g.placement === 'P1') boosted.events.promo_click[g.path] = 900
const a3 = analyse({ groups, pilot: boosted, baseline, opts: { reps: 300 } })
ok(a3.cells.find((c) => c.key === 'directory / P1').verdict.startsWith('WINNER'), 'cell with CTR above median and adoption interval above 0 is a WINNER')
// Noise gives a real interval: vary usage per pair
const noisy = JSON.parse(JSON.stringify(pilot)); const rnd = mulberry32(7)
for (const g of groups) if (g.target === 'directory') noisy.events.directory_app_view[g.path] = 20 + Math.floor(rnd() * 120)
const a4 = analyse({ groups, pilot: noisy, baseline, opts: { reps: 500 } })
const nd = a4.cells.find((c) => c.key === 'directory / P2').incr
ok(nd.lo != null && nd.hi > nd.lo, `noisy data gives an interval with width (${nd.lo?.toFixed(2)} to ${nd.hi?.toFixed(2)})`)
const thin = analyse({ groups, pilot, baseline, opts: { reps: 100, minViews: 10_000_000 } })
ok(thin.cells.every((c) => c.verdict === 'INSUFFICIENT DATA'), 'cells below the view threshold are INSUFFICIENT DATA')
ok(pooledDiff([{ tU: 10, tPv: 1000, cU: 5, cPv: 1000 }]) === 5, 'pooledDiff arithmetic')
ok(clusteredCI([{ tU: 1, tPv: 10, cU: 1, cPv: 10 }]).note?.includes('fewer than 3'), 'interval is refused with fewer than 3 pairs')
const r = mulberry32(1); ok(r() === mulberry32(1)(), 'PRNG is reproducible')

// CLI end to end on the synthetic file
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'promo-report-'))
fs.writeFileSync(path.join(tmp, 'c.json'), JSON.stringify({ pilot, baseline }))
const out = execFileSync('node', [path.join(ROOT, 'scripts/promo-pilot-report.mjs'), '--input', path.join(tmp, 'c.json'), '--end', '2026-11-20', '--reps', '300'], { encoding: 'utf8' })
ok(out.includes('# Promo pilot report') && out.includes('incremental adoption') && out.includes('## Hubs') && out.includes('| directory / P1 |'), 'CLI prints all report sections')
ok(!/UMAMI_API_KEY/.test(out), 'file mode needs no API key')
let apiFailed = false
try { execFileSync('node', [path.join(ROOT, 'scripts/promo-pilot-report.mjs'), '--umami'], { encoding: 'utf8', stdio: 'pipe', env: { ...process.env, UMAMI_API_KEY: '' } }) } catch (e) { apiFailed = /UMAMI_API_KEY is not set/.test(String(e.stderr)) }
ok(apiFailed, 'API mode fails loudly without a key')
fs.rmSync(tmp, { recursive: true, force: true })
if (failed) { console.error(`${failed} test(s) failed`); process.exit(1) }
console.log('promo report tests: OK')
