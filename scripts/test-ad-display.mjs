#!/usr/bin/env node
// Checks of the ad display test: test pages are untouched by the other experiments, and the report math.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { analyse, renderReport, simulateRevenue, CREATIVES, POSITIONS } from './lib/ad-test-report-core.mjs'

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8')
const config = read('src/lib/ad-test/config.ts')
const slugs = [...config.matchAll(/'\/power-local-llm\/([a-z0-9-]+)'/g)].map((m) => m[1])
assert.equal(slugs.length, 2, 'two test pages')

// not a slot page or control of the promo pilot (PILOT_EXCLUDED lines are fine), not in the affiliate banner pilot
const pilot = read('src/lib/promo/pilot.ts')
const groups = pilot.slice(pilot.indexOf('export const PILOT_GROUPS'))
const banners = read('src/lib/affiliate-banners/assignment.ts').split('\n').filter((l) => !l.trim().startsWith('//')).join('\n')
for (const s of slugs) {
  assert.ok(!groups.includes(`'${s}'`), `${s} is in the promo pilot`)
  assert.ok(!banners.includes(`/${s}'`) && !banners.includes(`'${s}'`), `${s} has an affiliate banner`)
}

// the concept's example: 10,000 page views, 8,500 displayed, CPM 3 = 25.50
assert.equal(simulateRevenue({ pageviews: 10000, adsPerPage: 0.85, fillRate: 1, cpm: 3 }).toFixed(2), '25.50')

const cells = (byPos) => Object.fromEntries(POSITIONS.flatMap((p, i) => CREATIVES.map((c) => [`${p}:${c}`, byPos[i]])))
const counts = { days: 30, measureShare: 0.25, pageviews: 16000, requests: 4000, impressions: cells([1000, 600, 200]), clicks: cells([10, 6, 2]) }
const a = analyse(counts)
assert.equal(a.coverage, 1)
assert.deepEqual(a.positions.map((r) => r.rate), [0.75, 0.45, 0.15])
assert.equal(a.displayRate.toFixed(2), '0.45')
assert.deepEqual(a.perPage.map((p) => p.displayed.toFixed(2)), ['0.75', '1.20', '1.35'])
assert.equal(a.positions[0].ctr.toFixed(4), '0.0025') // 30 clicks / (3000 / 0.25)
assert.ok(renderReport(a).includes('NOT revenue'))
assert.throws(() => analyse({ ...counts, impressions: { 'P4:mcp': 1 } }), /unknown cell/)
assert.throws(() => analyse({ ...counts, requests: 100 }), /only 100 requests/)
console.log('ad display test: all checks passed')
