#!/usr/bin/env node
// Promo pilot report: reach, CTR, open rate, usage per click / per view, and the headline number: incremental adoption =
// usage events per 1,000 page views on treatment pages minus matched control pages, in the pilot window AND in the
// 28 days before launch (so a difference that existed before the slots is visible). Intervals: bootstrap over matched
// page-group pairs. Winner rule: see scripts/lib/promo-report-core.mjs (analyse).
//
// Inputs (pick one):
//   --input file.json   normalized counts: {"pilot":{"pageviews":{"/path":n},"events":{"promo_view":{"/path":n},...}},
//                       "baseline":{...same shape...}}   (events keyed by their `page` / `source_page` prop)
//   --umami             read the counts from the Umami Cloud API. Needs env UMAMI_API_KEY (+ optional UMAMI_WEBSITE_ID,
//                       UMAMI_API_URL). UNVERIFIED against the live API: no API key was available when this was written.
// Options: --launch YYYY-MM-DD (default 2026-11-07) --end YYYY-MM-DD (default today, capped at launch+21d)
//          --baseline-days 28  --min-views 1000  --min-clicks 20  --out report.md  --json out.json  --reps 2000
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'
import { analyse, localeTable, groupMetrics, USAGE_EVENT } from './lib/promo-report-core.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? d : (process.argv[i + 1]?.startsWith('--') || process.argv[i + 1] == null ? true : process.argv[i + 1]) }
const day = (d) => new Date(d + 'T00:00:00Z')
const iso = (d) => d.toISOString().slice(0, 10)
const addDays = (d, n) => new Date(d.getTime() + n * 86400000)

const launch = String(arg('launch', '2026-11-07'))
const today = iso(new Date())
const endCap = iso(addDays(day(launch), 21))
const end = String(arg('end', today < endCap ? today : endCap))
const baseDays = Number(arg('baseline-days', 28))
const baseStart = iso(addDays(day(launch), -baseDays)), baseEnd = iso(addDays(day(launch), -1))
const minViews = Number(arg('min-views', 1000)), minClicks = Number(arg('min-clicks', 20)), reps = Number(arg('reps', 2000))

// ---- pilot definition (same file the site uses) ---------------------------------------------------------------
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { PILOT_GROUPS, PILOT_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
const groups = Object.entries(PILOT_GROUPS).map(([p, e]) => ({ path: p, placement: e.placement, target: e.target, control: PILOT_CONTROLS[p] ?? null }))
const paths = [...new Set(groups.flatMap((g) => [g.path, g.control].filter(Boolean)))]

// ---- data ---------------------------------------------------------------------------------------------------------
const EVENTS = [
  ['promo_view', 'page'], ['promo_click', 'page'], ['promo_open', 'page'],
  ['ask_hans_question', 'source_page'], ['power_report_started', 'source_page'], ['power_report_completed', 'source_page'], ['directory_app_view', 'source_page'],
]

async function fromUmami(startDate, endDate) {
  const key = process.env.UMAMI_API_KEY
  if (!key) throw new Error('UMAMI_API_KEY is not set. Create an API key in Umami Cloud (Settings > API keys) and add it as a secret.')
  const id = process.env.UMAMI_WEBSITE_ID || '1a0d1160-11ea-4882-a110-90fd9e5ebb75'
  const base = process.env.UMAMI_API_URL || 'https://api.umami.is/v1'
  const startAt = day(startDate).getTime(), endAt = day(endDate).getTime() + 86400000 - 1
  const get = async (p, q) => {
    const r = await fetch(`${base}/websites/${id}/${p}?${new URLSearchParams(q)}`, { headers: { 'x-umami-api-key': key, accept: 'application/json' } })
    if (!r.ok) throw new Error(`Umami API ${p} -> HTTP ${r.status}`)
    return r.json()
  }
  // ASSUMPTION (unverified): metrics type=path returns [{x: path, y: count}], event-data/values returns [{value, total}].
  const pv = {}
  for (const row of await get('metrics', { startAt, endAt, type: 'path', limit: 20000 })) pv[row.x] = row.y
  const events = {}
  for (const [name, prop] of EVENTS) {
    events[name] = {}
    let rows = []
    try { rows = await get('event-data/values', { startAt, endAt, eventName: name, propertyName: prop }) } catch (e) { events[name] = { __error: String(e) } ; continue }
    for (const r of rows) events[name][r.value] = r.total
  }
  return { pageviews: pv, events }
}

let pilot, baseline
if (arg('umami', false)) {
  pilot = await fromUmami(launch, end)
  baseline = await fromUmami(baseStart, baseEnd)
} else if (typeof arg('input', false) === 'string') {
  const j = JSON.parse(fs.readFileSync(String(arg('input')), 'utf8'))
  pilot = j.pilot; baseline = j.baseline ?? null
} else {
  console.error('Usage: promo-pilot-report.mjs --input counts.json | --umami   [--launch D --end D --out report.md]')
  process.exit(2)
}
for (const w of [pilot, baseline]) for (const [n, m] of Object.entries(w?.events ?? {})) if (m.__error) { console.error(`event ${n}: ${m.__error}`); delete w.events[n] }

// ---- analysis -----------------------------------------------------------------------------------------------------
const res = analyse({ groups, pilot, baseline, opts: { minViews, minClicks, reps } })
const f = (x, d = 2) => (x == null ? 'n/a' : x.toFixed(d))
const pct = (x) => (x == null ? 'n/a' : (x * 100).toFixed(2) + '%')
const ci = (c) => (!c ? 'n/a (no usage event)' : c.lo == null ? `${f(c.est)} (${c.note})` : `${f(c.est)} [${f(c.lo)}, ${f(c.hi)}] (n=${c.n} pairs)`)

const L = []
L.push(`# Promo pilot report`, '', `Pilot window: ${launch} to ${end}. Baseline: ${baseStart} to ${baseEnd} (${baseDays} days before launch). Generated ${today}.`, '',
  `Thresholds: at least ${minViews} views and ${minClicks} clicks per cell (MCP and Power Mode are judged pooled over placements). Intervals: 95% bootstrap over matched page-group pairs (${reps} resamples). Median CTR of eligible cells: ${pct(res.medianCtr)}.`, '',
  '## Cells (target / placement)', '',
  '| Cell | Groups (pairs) | Page views | Slot views | Clicks | Reach | CTR | Open rate | Usage / click | Usage / view | Verdict |', '|--|--|--|--|--|--|--|--|--|--|--|')
for (const c of res.cells) L.push(`| ${c.key} | ${c.groups} (${c.pairs}) | ${c.pv} | ${c.views} | ${c.clicks} | ${pct(c.reach)} | ${pct(c.ctr)} | ${pct(c.openRate)} | ${f(c.usagePerClick, 3)} | ${f(c.usagePerView, 4)} | ${c.verdict} |`)
L.push('', '## Headline: incremental adoption (usage events per 1,000 page views, treatment minus matched control)', '',
  '| Cell | Pilot window | 28 days before launch | Pilot minus before (difference in differences) |', '|--|--|--|--|')
for (const c of res.cells) L.push(`| ${c.key} | ${ci(c.incr)} | ${ci(c.incrBase)} | ${c.did ? `${f(c.did.est)} [${f(c.did.lo)}, ${f(c.did.hi)}] (n=${c.did.n})` : 'n/a'} |`)
L.push('', 'Usage event per product: Ask Hans = `ask_hans_question`, Power Mode = `power_report_started`, Directory = `directory_app_view`. MCP has no usage event on the site (MCP calls happen in the visitor\'s own AI): MCP is judged on reach and CTR only.', '',
  '## Per locale (cells with at least 100 slot views; the rest pooled)', '', '| Locale | Slot views | Clicks | CTR |', '|--|--|--|--|')
const lt = localeTable(groups, pilot)
for (const r of lt.rows.sort((a, b) => b.views - a.views)) L.push(`| ${r.locale} | ${r.views} | ${r.clicks} | ${pct(r.ctr)} |`)
L.push(`| other (${lt.other.locales.join(', ') || 'none'}) | ${lt.other.views} | ${lt.other.clicks} | ${pct(lt.other.views ? lt.other.clicks / lt.other.views : null)} |`)
const hubs = groups.filter((g) => !g.control)
L.push('', '## Hubs (no matched control: read as before/after)', '', '| Hub | Target | Page views | Slot views | Clicks | CTR | Usage / 1,000 pageviews (pilot) | Usage / 1,000 pageviews (before) |', '|--|--|--|--|--|--|--|--|')
for (const g of hubs) {
  const m = groupMetrics(pilot, g.path, g.target), b = baseline ? groupMetrics(baseline, g.path, g.target) : null
  L.push(`| ${g.path} | ${g.target} | ${m.pv} | ${m.views} | ${m.clicks} | ${pct(m.ctr)} | ${f(m.usagePer1000)} | ${f(b?.usagePer1000)} |`)
}
L.push('', '## Not in this report', '', '- Page health (engagement, Core Web Vitals) and SEO health (Search Console clicks/impressions, pilot vs control): check separately before scaling any winner.', '- Retention / first-touch tracking is deliberately not enabled (owner decision).', '- Verdicts are a screen, not proof: the cluster/target design confounds product with topic (see docs/promo-pilot.md).')
const md = L.join('\n') + '\n'
if (typeof arg('out', false) === 'string') fs.writeFileSync(String(arg('out')), md); else process.stdout.write(md)
if (typeof arg('json', false) === 'string') fs.writeFileSync(String(arg('json')), JSON.stringify(res, null, 1))
