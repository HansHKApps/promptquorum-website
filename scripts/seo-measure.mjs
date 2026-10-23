#!/usr/bin/env node
/**
 * Measure SEO changes against the change log (src/data/seo-changelog.json).
 *
 * Closes the loop that docs/CTR_OPTIMIZATION.md left open: for every logged change that has a
 * baseline, compare the baseline with a fresh GSC export and say, with a significance test,
 * whether CTR moved — and whether position moved enough to explain it.
 *
 *   npm run seo:measure -- --status
 *       Which logged changes are due for a T+14 / T+28 re-pull, overdue, or already measured.
 *
 *   npm run seo:measure -- --export pages.csv --exported 2026-11-07 [--window 28d] [--write]
 *       Compare each baselined entry with its row in a GSC "Pages" export
 *       (Performance on Search → Pages → Export). Add --queries-export queries.csv
 *       to also report each entry's target queries (set with seo:log --queries).
 *       --write stores the result on the entry (entry.results[]).
 *
 * Export formats accepted: GSC "Pages" CSV (Top pages, Clicks, CTR, Impressions, Position) or the
 * repo's docs/seo-tracking baseline CSVs (window, slug, locale, url, clicks, impressions, ...).
 * With the repo format use --window to choose the rows (28d or 3mo).
 *
 * How to read the verdict (and its limits):
 *   - Two-proportion z-test on CTR (clicks/impressions). |z| >= 1.96 is "significant".
 *     It tests sampling noise only. It does not remove seasonality, deploy batching, or other
 *     changes made to the same page in the same window.
 *   - Fewer than --min-impr (default 100) impressions on either side: "insufficient data".
 *   - Position moved by more than 1.5: the CTR change is flagged as rank-driven, not snippet-driven.
 *   - Baselines of different window lengths are compared per day (impressions/day), and the
 *     baseline window is "assumed 28d" when the period text does not say.
 *   - Entries without deployedAt use the log date as the start and are marked approximate.
 *   - A page missing from a top-1000 export is NOT zero: it is reported as "not in export".
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CHANGELOG_PATH = path.join(__dirname, '..', 'src/data/seo-changelog.json')

const argv = process.argv.slice(2)
const val = (n) => {
  const eq = argv.find((a) => a.startsWith(`--${n}=`))
  if (eq) return eq.slice(n.length + 3)
  const i = argv.indexOf(`--${n}`)
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : undefined
}
const has = (n) => argv.includes(`--${n}`)

const today = new Date().toISOString().slice(0, 10)
const exportedOn = val('exported') ?? today
const windowLabel = val('window') ?? '28d'
const minImpr = Number(val('min-impr') ?? 100)
const write = has('write')

const dayMs = 86400000
const daysBetween = (a, b) => Math.round((new Date(`${b}T00:00:00Z`) - new Date(`${a}T00:00:00Z`)) / dayMs)
const addDays = (d, n) => new Date(new Date(`${d}T00:00:00Z`).getTime() + n * dayMs).toISOString().slice(0, 10)
const pct = (x) => (x == null ? '—' : `${(x * 100).toFixed(2)}%`)
const slugOf = (s) => s.replace(/\/$/, '')

function csvLine(line) {
  const out = []
  let cur = '', q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (c === '"') q = false; else cur += c }
    else if (c === '"') q = true
    else if (c === ',' || c === '\t') { out.push(cur); cur = '' }
    else cur += c
  }
  out.push(cur)
  return out
}
function readCsv(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter((l) => l.trim())
  const head = csvLine(lines[0]).map((h) => h.trim().toLowerCase())
  return { head, rows: lines.slice(1).map(csvLine) }
}
const num = (v) => (v === undefined || v === '' || /not in top/i.test(v) ? null : Number(String(v).replace('%', '').replace(/,/g, '')))

function readPages(file) {
  const { head, rows } = readCsv(file)
  const col = (re) => head.findIndex((h) => re.test(h))
  const cUrl = col(/^url$/) >= 0 ? col(/^url$/) : col(/^(top pages|page|pages)$/)
  const cClicks = col(/^clicks$/), cImpr = col(/^impressions$/), cPos = col(/^position$/), cWin = col(/^window$/)
  if (cUrl < 0 || cClicks < 0 || cImpr < 0) throw new Error(`${file}: need page/url, clicks, impressions columns (got: ${head.join(', ')})`)
  const map = new Map()
  for (const r of rows) {
    if (cWin >= 0 && r[cWin]?.trim() !== windowLabel) continue
    let p = r[cUrl]?.trim()
    if (!p) continue
    try { p = new URL(p).pathname } catch { /* already a path */ }
    const clicks = num(r[cClicks]), impressions = num(r[cImpr])
    if (clicks == null || impressions == null) continue
    map.set(slugOf(p), { clicks, impressions, position: cPos >= 0 ? num(r[cPos]) : null })
  }
  if (!map.size) throw new Error(`${file}: no usable rows${cWin >= 0 ? ` for window "${windowLabel}"` : ''}`)
  return map
}
function readQueries(file) {
  const { head, rows } = readCsv(file)
  const col = (re) => head.findIndex((h) => re.test(h))
  const cq = col(/^(query|top queries|queries)$/), cc = col(/^clicks$/), ci = col(/^impressions$/), cp = col(/^position$/), cw = col(/^window$/)
  if (cq < 0) throw new Error(`${file}: no query column`)
  const map = new Map()
  for (const r of rows) {
    if (cw >= 0 && r[cw]?.trim() !== windowLabel) continue
    map.set(r[cq].trim().toLowerCase(), { clicks: num(r[cc]), impressions: num(r[ci]), position: num(r[cp]) })
  }
  return map
}

function windowDays(period) {
  if (!period) return { days: 28, assumed: true }
  const range = period.match(/(\d{4}-\d{2}-\d{2})\s*to\s*(\d{4}-\d{2}-\d{2})/)
  if (range) return { days: daysBetween(range[1], range[2]) + 1, assumed: false }
  if (/90/.test(period) || /3\s*mo/i.test(period)) return { days: 90, assumed: false }
  const d = period.match(/(\d+)\s*d/i)
  if (d) return { days: Number(d[1]), assumed: false }
  return { days: 28, assumed: true }
}

function zTest(c1, n1, c2, n2) {
  const p1 = c1 / n1, p2 = c2 / n2, p = (c1 + c2) / (n1 + n2)
  const se = Math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2))
  return se === 0 ? 0 : (p2 - p1) / se
}

const data = JSON.parse(fs.readFileSync(CHANGELOG_PATH, 'utf8'))
const startOf = (e) => (e.deployedAt === null ? null : e.deployedAt ?? e.date.slice(0, 10))
const approx = (e) => e.deployedAt === undefined

// ---------------- status ----------------
if (has('status')) {
  const measurable = data.filter((e) => e.baseline && e.baseline.impressions > 0)
  const rows = []
  let legacy = 0
  for (const e of measurable) {
    const start = startOf(e)
    if (start === null) { rows.push({ e, state: 'PENDING DEPLOY', t14: '—', t28: '—' }); continue }
    const age = daysBetween(start, today)
    if (approx(e) && age > 45) { legacy++; continue }
    const t14 = addDays(start, 14), t28 = addDays(start, 28)
    const done = (e.results ?? []).map((r) => r.tPlus)
    let state
    if (done.includes('T+28')) state = 'measured T+28'
    else if (age >= 28) state = age > 35 ? 'T+28 OVERDUE' : 'T+28 DUE'
    else if (age >= 14) state = done.includes('T+14') ? 'T+14 measured, T+28 pending' : age > 21 ? 'T+14 OVERDUE' : 'T+14 DUE'
    else state = `wait (${14 - age}d to T+14)`
    rows.push({ e, state, t14, t28 })
  }
  console.log(`\nSEO measurement status (${today})`)
  console.log(`${measurable.length} logged changes have a baseline; ${legacy} older entries without a recorded deploy date are not listed.\n`)
  if (rows.length) {
    console.log('| Page | Logged | Live (start) | T+14 | T+28 | State | Target queries |')
    console.log('|---|---|---|---|---|---|---|')
    for (const { e, state, t14, t28 } of rows.sort((a, b) => a.e.date.localeCompare(b.e.date))) {
      console.log(`| ${e.slug} | ${e.date.slice(0, 10)} | ${startOf(e) ?? '—'}${approx(e) ? ' (approx)' : ''} | ${t14} | ${t28} | ${state} | ${e.queries?.length ?? 0} |`)
    }
  }
  const pend = data.filter((e) => e.deployedAt === null).length
  if (pend) console.log(`\n${pend} entr${pend === 1 ? 'y is' : 'ies are'} merged but not marked live: npm run seo:log -- --mark-deployed --all-pending --date YYYY-MM-DD`)
  process.exit(0)
}

// ---------------- compare ----------------
const exportFile = val('export')
if (!exportFile) {
  console.error('usage: seo-measure.mjs --status | --export <pages.csv> [--exported YYYY-MM-DD] [--window 28d|3mo] [--queries-export q.csv] [--min-impr N] [--write]')
  process.exit(2)
}
const pages = readPages(exportFile)
const queryMap = val('queries-export') ? readQueries(val('queries-export')) : null

console.log(`\nSEO measurement vs export ${path.basename(exportFile)} (exported ${exportedOn}, window ${windowLabel}, ${pages.size} pages)`)
const results = []
const skipped = { noBaseline: 0, pending: 0, tooEarly: 0, notInExport: [], sameSlug: 0 }
const seenSlug = new Map()
const changesPerSlug = data.reduce((m, e) => (e.baseline?.impressions > 0 && m.set(e.slug, (m.get(e.slug) ?? 0) + 1), m), new Map())

for (const e of [...data].sort((a, b) => a.date.localeCompare(b.date))) {
  if (!e.baseline || !(e.baseline.impressions > 0)) { skipped.noBaseline++; continue }
  // Several logged changes on one page share the same after-data; measure the first, flag the rest.
  if (seenSlug.has(e.slug)) { skipped.sameSlug++; continue }
  seenSlug.set(e.slug, e.id)
  const start = startOf(e)
  if (start === null) { skipped.pending++; continue }
  const age = daysBetween(start, exportedOn)
  if (age < 14) { skipped.tooEarly++; continue }
  const tPlus = age >= 28 ? 'T+28' : 'T+14'
  const now = pages.get(slugOf(e.slug))
  if (!now) { skipped.notInExport.push(e.slug); continue }
  const b = e.baseline
  const bw = windowDays(b.period)
  const nowDays = Number.isFinite(Number(windowLabel.replace(/\D/g, ''))) && /d$/.test(windowLabel) ? Number(windowLabel.replace(/\D/g, '')) : windowLabel === '3mo' ? 90 : 28
  const flags = []
  if (approx(e)) flags.push('start date approximate (no deploy date logged)')
  if (bw.assumed) flags.push('baseline window assumed 28d')
  if (bw.days !== nowDays) flags.push(`window mismatch ${bw.days}d vs ${nowDays}d — compare per-day`)
  if (!b.position) flags.push('no baseline position')
  if (changesPerSlug.get(e.slug) > 1) flags.push(`${changesPerSlug.get(e.slug)} logged changes on this page — effects not separable; first change measured`)

  const bCtr = b.clicks / b.impressions
  const nCtr = now.clicks / now.impressions
  let verdict, z = null
  if (Math.min(b.impressions, now.impressions) < minImpr) verdict = 'insufficient data'
  else {
    z = zTest(b.clicks, b.impressions, now.clicks, now.impressions)
    verdict = Math.abs(z) < 1.96 ? 'no significant change' : z > 0 ? 'CTR improved' : 'CTR declined'
  }
  const dPos = b.position && now.position != null ? now.position - b.position : null
  if (dPos != null && Math.abs(dPos) > 1.5) flags.push(`position moved ${dPos > 0 ? '+' : ''}${dPos.toFixed(1)} (${dPos < 0 ? 'better' : 'worse'}) — CTR change may be rank-driven`)

  const qres = (e.queries ?? []).map((q) => ({ query: q, ...(queryMap?.get(q.toLowerCase()) ?? { clicks: null, impressions: null, position: null }), found: Boolean(queryMap?.get(q.toLowerCase())) }))
  results.push({
    e, tPlus, verdict, flags, qres,
    r: {
      measuredAt: exportedOn, window: windowLabel, tPlus,
      clicks: now.clicks, impressions: now.impressions, ctr: Number(nCtr.toFixed(5)), position: now.position,
      ctrDeltaPp: Number(((nCtr - bCtr) * 100).toFixed(2)), z: z == null ? null : Number(z.toFixed(2)), verdict,
      ...(flags.length ? { flags } : {}),
    },
    bCtr, nCtr, b, now, dPos, bw, nowDays,
  })
}

if (results.length) {
  console.log('\n| Page | T+ | CTR before → after | Δ pp | z | Pos before → after | Impr/day before → after | Verdict |')
  console.log('|---|---|---|---:|---:|---|---|---|')
  for (const x of results.sort((a, b) => a.e.slug.localeCompare(b.e.slug))) {
    console.log(`| ${x.e.slug} | ${x.tPlus} | ${pct(x.bCtr)} → ${pct(x.nCtr)} | ${x.r.ctrDeltaPp} | ${x.r.z ?? '—'} | ${x.b.position || '—'} → ${x.now.position ?? '—'} | ${(x.b.impressions / x.bw.days).toFixed(1)} → ${(x.now.impressions / x.nowDays).toFixed(1)} | ${x.verdict} |`)
  }
  const flagged = results.filter((x) => x.flags.length)
  if (flagged.length) {
    console.log('\nCaveats per entry:')
    for (const x of flagged) console.log(`  - ${x.e.slug}: ${x.flags.join('; ')}`)
  }
  const withQ = results.filter((x) => x.qres.length)
  if (withQ.length) {
    console.log(`\nTarget queries${queryMap ? '' : ' (no --queries-export given: current values not shown)'}:`)
    for (const x of withQ) for (const q of x.qres) {
      console.log(`  - ${x.e.slug} · "${q.query}": ${q.found ? `${q.clicks} clicks / ${q.impressions} impr, pos ${q.position}` : queryMap ? 'not in queries export (below cut-off, not zero)' : '—'}`)
    }
    console.log('  Note: query baselines were not stored for older entries, so queries show current values only.')
  }
  const tally = results.reduce((a, x) => ((a[x.verdict] = (a[x.verdict] ?? 0) + 1), a), {})
  console.log('\nSummary:', Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(' · '))
} else {
  console.log('\nNo entry was due and present in this export.')
}
console.log(`Skipped: ${skipped.noBaseline} without baseline · ${skipped.pending} merged but not marked live · ${skipped.tooEarly} younger than 14 days · ${skipped.sameSlug} repeat changes on an already-listed page · ${skipped.notInExport.length} not in export (below the export cut-off — not zero)`)

if (write && results.length) {
  let added = 0
  for (const x of results) {
    const entry = data.find((e) => e.id === x.e.id)
    entry.results ??= []
    if (entry.results.some((r) => r.measuredAt === x.r.measuredAt && r.window === x.r.window)) continue
    entry.results.push({ ...x.r, ...(x.qres.length ? { queries: x.qres.map(({ query, clicks, impressions, position, found }) => ({ query, clicks, impressions, position, found })) } : {}) })
    added++
  }
  fs.writeFileSync(CHANGELOG_PATH, JSON.stringify(data, null, 2))
  console.log(`\n✓ ${added} result(s) written to src/data/seo-changelog.json`)
} else if (!write && results.length) {
  console.log('\n(dry run — add --write to store results on the entries)')
}
