#!/usr/bin/env node
// Tests for the affiliate-banner report core + CLI on synthetic data with a KNOWN effect. Run: npm run test:aff-banner-report
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { createJiti } from 'jiti'
import { analyse, bootstrapDiff, wilson, groupPath } from './lib/aff-banner-report-core.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_GROUPS, AFF_BANNER_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
let failed = 0
const ok = (c, m) => { if (!c) { failed++; console.error('FAIL', m) } else console.log('ok  ', m) }

ok(groupPath('/de/local-llms/x') === '/local-llms/x', 'groupPath strips the locale prefix')
const w = wilson(20, 1000)
ok(w && w.lo < 0.02 && w.hi > 0.02 && w.lo > 0.012, 'wilson interval brackets 2%')

// Synthetic world. Every page 10,000 pageviews (+4,000 in /de). In-text clicks: 5 per 1,000 everywhere (baseline and pilot).
// Planted effect: banner views = 40% of pageviews; banner click rate 4% (A) / 6% (B)  => +16 / +24 outbound per 1,000 pv.
// Planted cannibalization: treated in-text clicks drop by `cannibal` per 1,000 pv in the pilot window.
function world({ effectA, effectB, cannibal = 0 }) {
  const pilot = { pageviews: {}, events: { aff_banner_view: {}, aff_banner_click: {}, affiliate_click: {} } }
  const base = { pageviews: {}, events: { affiliate_click: {} } }
  const add = (win, name, p, n) => { win.events[name][p] = (win.events[name][p] ?? 0) + n }
  const pages = [...Object.keys(AFF_BANNER_GROUPS), ...AFF_BANNER_CONTROLS]
  for (const gp of pages) {
    const e = AFF_BANNER_GROUPS[gp]
    for (const [p, pv] of [[gp, 10000], ['/de' + gp, 4000]]) {
      pilot.pageviews[p] = pv; base.pageviews[p] = pv
      add(base, 'affiliate_click', p, pv * 0.005)
      add(pilot, 'affiliate_click', p, pv * (0.005 - (e ? cannibal / 1000 : 0)))
      if (e) {
        const eff = e.cell.startsWith('A') ? effectA : effectB
        add(pilot, 'aff_banner_view', p, pv * 0.4)
        add(pilot, 'aff_banner_click', p, pv * eff / 1000)
      }
    }
  }
  return { pilot, baseline: base }
}
const run = (wd, extra = {}) => analyse({ treated: AFF_BANNER_GROUPS, controls: AFF_BANNER_CONTROLS, ...wd, opts: { reps: 400 }, ...extra })

const real = run(world({ effectA: 16, effectB: 24 }))
const all = real.cells[0].rows.find((r) => r.set === 'all')
const A = real.cells[0].rows.find((r) => r.set === 'format A (single card)')
const B = real.cells[0].rows.find((r) => r.set === 'format B (compare)')
ok(Math.abs(A.incr.est - 16) < 0.01 && Math.abs(B.incr.est - 24) < 0.01, `planted effects recovered (A ${A.incr.est.toFixed(2)}, B ${B.incr.est.toFixed(2)})`)
ok(all.incr.lo > 0 && /candidate winner/.test(all.verdict), 'a real effect gives an interval above zero and a candidate verdict')
ok(Math.abs(all.incr.did - all.incr.est) < 0.01, 'difference in differences equals the pilot difference when the baseline was balanced')
ok(real.cells[1].rows.every((r) => r.groups <= real.cells[0].rows.find((x) => x.set === r.set).groups), 'the without-uncensored-page variant never has more groups')
ok(real.cells[1].rows.find((r) => r.set === 'cell B1').groups === real.cells[0].rows.find((r) => r.set === 'cell B1').groups - 1, 'the solo page is removed from B1 in the second variant')

const nul = run(world({ effectA: 0, effectB: 0 }))
const nall = nul.cells[0].rows.find((r) => r.set === 'all')
ok(nall.incr.lo <= 0 && nall.incr.hi >= 0 && nall.verdict.startsWith('too few'), 'no effect: interval contains zero and no winner is declared')

const cann = run(world({ effectA: 16, effectB: 24, cannibal: 2 }))
const call = cann.cells[0].rows.find((r) => r.set === 'all')
ok(Math.abs(call.cannibal.est + 2) < 0.01 && call.cannibal.hi < 0, `cannibalization of -2 per 1,000 detected (${call.cannibal.est.toFixed(2)})`)

const small = bootstrapDiff([{ gp: 'a', pv: 10, views: 0, bannerClicks: 5, textClicks: 0 }], [{ gp: 'b', pv: 10, views: 0, bannerClicks: 0, textClicks: 0 }], null, null, (r) => r.bannerClicks + r.textClicks)
ok(small.lo == null && /fewer than/.test(small.note), 'too few groups: no interval, says so')

// Guardrail
const gsc = { baseline: {}, pilot: {} }
for (const gp of Object.keys(AFF_BANNER_GROUPS)) { gsc.baseline[gp] = { clicks: 100 }; gsc.pilot[gp] = { clicks: 80 } }
for (const gp of AFF_BANNER_CONTROLS) { gsc.baseline[gp] = { clicks: 100 }; gsc.pilot[gp] = { clicks: 100 } }
const g = run(world({ effectA: 1, effectB: 1 }), { gsc }).guardrail
ok(g && Math.abs(g.relativeChange + 0.2) < 1e-9 && g.flag, 'guardrail flags a 20% organic click loss on treated groups')

// CLI end to end
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'aff-report-'))
const wd = world({ effectA: 16, effectB: 24 })
fs.writeFileSync(path.join(tmp, 'in.json'), JSON.stringify({ ...wd, breakdowns: { vendor: { Amazon: 70, Newegg: 20, 'B&H': 10 }, category: { gpu: 60, 'cloud-gpu': 40 }, device: { desktop: 55, mobile: 45 } }, gsc }))
execFileSync('node', [path.join(ROOT, 'scripts/aff-banner-report.mjs'), '--input', path.join(tmp, 'in.json'), '--out', path.join(tmp, 'r.md'), '--merchants', path.join(tmp, 'm.md'), '--reps', '200'], { stdio: 'pipe' })
const md = fs.readFileSync(path.join(tmp, 'r.md'), 'utf8'), mm = fs.readFileSync(path.join(tmp, 'm.md'), 'utf8')
ok(/with the uncensored page/.test(md) && /without the uncensored page/.test(md), 'report shows results with and without the uncensored page')
ok(/Incremental outbound/.test(md) && /Cannibalization/.test(md) && /guardrail/i.test(md), 'report has the headline, cannibalization and guardrail sections')
ok(/\| Amazon \| 70 \| 70\.00% \|/.test(mm) && /Network/.test(mm), 'merchant sheet lists clicks and share with empty programme-term columns')
let exit = 0
try { execFileSync('node', [path.join(ROOT, 'scripts/aff-banner-report.mjs'), '--umami', '--launch', '2026-12-01'], { env: { ...process.env, UMAMI_API_KEY: '' }, stdio: 'pipe' }) } catch (e) { exit = e.status; ok(/UMAMI_API_KEY is not set/.test(String(e.stderr)), 'umami mode fails loudly without the key') }
ok(exit !== 0, 'umami mode exits non-zero without the key')
if (failed) { console.error(`${failed} test(s) failed`); process.exit(1) }
console.log('all affiliate-banner report tests passed')
