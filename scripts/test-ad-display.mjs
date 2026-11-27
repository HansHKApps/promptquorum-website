#!/usr/bin/env node
// Checks of the ad display test: test pages are untouched by the other experiments, and the report math.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { analyse, renderReport } from './lib/ad-test-report-core.mjs'

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

// report: three measurements, same days only
const [cw] = slugs
const url = (prefix) => `https://www.promptquorum.com${prefix}/power-local-llm/${cw}`
const gsc = { rows: [
  { keys: ['2026-12-01', url('')], clicks: 100, impressions: 2000 },
  { keys: ['2026-12-01', url('/de')], clicks: 20, impressions: 300 },
  { keys: ['2026-12-02', url('')], clicks: 500, impressions: 9000 }, // counter gap: must be left out
  { keys: ['2026-12-01', 'https://www.promptquorum.com/power-local-llm/other-page'], clicks: 999, impressions: 999 },
] }
const f = (event, source, locale) => `${event}|${source}|${locale}|${cw}`
const counter = { days: {
  '2026-12-01': { [f('load', 'google', 'en')]: 80, [f('load', 'google', 'de')]: 16, [f('load', 'direct', 'en')]: 30, [f('load', 'auto', 'en')]: 7,
    [f('first', 'google', 'en')]: 60, [f('human', 'google', 'en')]: 48, [f('ad:P1:ask-hans', 'google', 'en')]: 60, [f('ad:P2:directory', 'direct', 'en')]: 12,
    [f('ad:P1:academy', 'auto', 'en')]: 5, [f('click:P1:ask-hans', 'google', 'en')]: 2 },
  '2026-12-02': {},
} }
const a = analyse({ counter, gsc, pages: new Set(slugs), umami: 200 })
assert.deepEqual(a.dates, ['2026-12-01'])
assert.equal(a.excluded.length, 1)
assert.deepEqual(
  [a.total.gscClicks, a.total.gscImpressions, a.total.googleLoads, a.total.loads, a.total.googleShownViews, a.total.googleHumanViews, a.total.adsShown, a.total.clicks, a.total.automatedLoads],
  [120, 2300, 96, 126, 60, 48, 72, 2, 7],
)
const text = renderReport(a)
assert.ok(text.includes('| Our counter: page views arriving from Google | 96 | 80% |'))
assert.ok(text.includes('| Our counter: page views | 126 | 63% |'))
assert.ok(text.includes('CHECK:'))
assert.throws(() => analyse({ counter, gsc: { rows: [{ keys: [url(''), '2026-12-01'] }] }, pages: new Set(slugs) }), /in that order/)

// the browser and server lists: source detection and the GSC day
const { classifySource, pacificDay, AUTOMATED_UA, PV_EVENTS } = await import('../src/lib/ad-test/events.ts')
const host = 'www.promptquorum.com'
assert.equal(classifySource('https://www.google.com/', 'navigate', host), 'google')
assert.equal(classifySource('https://www.google.co.jp/', 'navigate', host), 'google')
assert.equal(classifySource('android-app://com.google.android.googlequicksearchbox/', 'navigate', host), 'google')
assert.equal(classifySource('https://mail.google.com/', 'navigate', host), 'site')
assert.equal(classifySource('https://google.evil.example/', 'navigate', host), 'site')
assert.equal(classifySource('https://www.bing.com/', 'navigate', host), 'search')
assert.equal(classifySource('https://www.google.com/', 'reload', host), 'repeat')
assert.equal(classifySource('', 'navigate', host), 'direct')
assert.equal(classifySource('https://promptquorum.com/x', 'navigate', host), 'internal')
assert.equal(pacificDay(new Date('2026-12-02T07:30:00Z')), '2026-12-01')
assert.ok(AUTOMATED_UA.test('Mozilla/5.0 (compatible; Googlebot/2.1)'))
assert.ok(!AUTOMATED_UA.test('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/140 Safari/537.36'))
assert.equal(PV_EVENTS.size, 21)
console.log('ad display test: all checks passed')
