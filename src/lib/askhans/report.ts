// Ask Hans — usage report for the public /askhans page and for scripts. Same windows as the MCP report
// (today, yesterday, last 7 days, last 30 days, all time). Reads the anonymous per-day counters only:
//   askhans:day:<date>   total_opens / total_requests / total_answers (all visitors) and, for visitors who agreed
//                        to the anonymous statistics: q:<category>, app:<slug>, dircat:<key>, tool:<name>, lang:<xx>
// Never contains names, IPs or question text. A Redis outage yields an all-zero report (same contract as
// getMcpUsageSnapshot), so the page never fails because of it.

import { redis } from '@/lib/redis'
import { getAskHansTotals } from './totals'
import { REPORT_DAYS, lastNDaysUtc, rankRows, windowsOf, zeroCounts } from '@/lib/usage/report-types'
import type { EngagementStats, FeedbackStats, ReportRow, ReportWindow, UsageReportBase, WindowCounts } from '@/lib/usage/report-types'
import { DURATION_BUCKETS } from './engagement'

export { REPORT_DAYS }
export type { ReportWindow, WindowCounts, ReportRow }

export interface AskHansReport extends UsageReportBase {
  /** all visitors, no consent needed */
  totals: { opens: number; requests: number; answers: number }
}

function emptyReport(dates: string[]): AskHansReport {
  return {
    generatedAt: new Date().toISOString(),
    since: null,
    breakdownSince: null,
    totals: { opens: 0, requests: 0, answers: 0 },
    headline: [
      { key: 'answers', win: zeroCounts(), all: 0 },
      { key: 'opens', win: zeroCounts(), all: 0 },
    ],
    days: dates.map((date) => ({ date, count: 0 })),
    sampled: zeroCounts(),
    sampledOf: zeroCounts(),
    categories: [],
    apps: [],
    dirCats: [],
    tools: [],
    langs: [],
    feedback: { count: zeroCounts(), sum: zeroCounts(), low: zeroCounts(), mail: zeroCounts(), all: { count: 0, sum: 0, low: 0, mail: 0 } },
    engagement: emptyEngagement(),
  }
}

function emptyEngagement(): EngagementStats {
  return { sessions: zeroCounts(), returning: zeroCounts(), duration: Object.fromEntries(DURATION_BUCKETS.map((b) => [b, zeroCounts()])), promoShown: zeroCounts() }
}

const RATING_KEEP_DAYS = 400 // matches the day-key TTL in /api/ask/feedback

const num = (v: unknown) => Number(v ?? 0) || 0
const lowOf = (h: Record<string, string | number>) => num(h['rating:1']) + num(h['rating:2']) + num(h['rating:3'])

/** Lifetime rating counters: sum the day hashes older than the report window (up to the day-key TTL, from the day counting began). */
async function olderRatings(since: string | null, firstWindowDay: string): Promise<{ count: number; sum: number; low: number; mail: number }> {
  const out = { count: 0, sum: 0, low: 0, mail: 0 }
  if (!since || since >= firstWindowDay) return out
  const start = Date.parse(`${since}T00:00:00Z`)
  const end = Date.parse(`${firstWindowDay}T00:00:00Z`)
  const n = Math.min(RATING_KEEP_DAYS, Math.round((end - start) / 86_400_000))
  if (n <= 0) return out
  const pipe = redis.pipeline()
  for (let i = 1; i <= n; i++) pipe.hmget(`askhans:day:${new Date(end - i * 86_400_000).toISOString().slice(0, 10)}`, 'rating_count', 'rating_sum', 'rating:1', 'rating:2', 'rating:3', 'fb_mail')
  const rows = await pipe.exec<(Record<string, string | number> | null)[]>()
  for (const r of rows) {
    if (!r) continue
    out.count += num(r.rating_count)
    out.sum += num(r.rating_sum)
    out.low += num(r['rating:1']) + num(r['rating:2']) + num(r['rating:3'])
    out.mail += num(r.fb_mail)
  }
  return out
}

export async function getAskHansReport(): Promise<AskHansReport> {
  const dates = lastNDaysUtc(REPORT_DAYS)
  const report = emptyReport(dates)
  try {
    const pipe = redis.pipeline()
    for (const d of dates) pipe.hgetall(`askhans:day:${d}`)
    const [perDay, totals] = await Promise.all([pipe.exec<(Record<string, string | number> | null)[]>(), getAskHansTotals()])
    report.totals = { opens: totals.opens, requests: totals.requests, answers: totals.answers }
    report.since = totals.since
    report.breakdownSince = totals.since
    const answersWin = zeroCounts()
    const opensWin = zeroCounts()
    const sampled = zeroCounts()
    const sampledOf = zeroCounts()
    const eng = emptyEngagement()
    const fb: FeedbackStats = { count: zeroCounts(), sum: zeroCounts(), low: zeroCounts(), mail: zeroCounts(), all: { count: 0, sum: 0, low: 0, mail: 0 } }

    const prefixes = { 'q:': 'categories', 'app:': 'apps', 'dircat:': 'dirCats', 'tool:': 'tools', 'lang:': 'langs' } as const
    const rows: Record<string, Map<string, WindowCounts>> = { categories: new Map(), apps: new Map(), dirCats: new Map(), tools: new Map(), langs: new Map() }

    perDay.forEach((h, i) => {
      const day = h ?? {}
      const wins = windowsOf(i, dates.length)
      // The all-visitor totals only exist from `since`, and `since` itself is a partial day (the counter went live
      // mid-day) while the consent-based breakdowns started earlier. Both are therefore compared from the day after
      // `since` only, otherwise sampled questions could exceed answers in the same window.
      const inBreakdown = !totals.since || dates[i] > totals.since
      const opens = Number(day.total_opens ?? 0) || 0
      const answers = Number(day.total_answers ?? 0) || 0
      report.days[i].count = answers
      const rc = num(day.rating_count)
      const rs = num(day.rating_sum)
      const rl = lowOf(day)
      const rm = num(day.fb_mail)
      for (const w of wins) {
        fb.count[w] += rc
        fb.sum[w] += rs
        fb.low[w] += rl
        fb.mail[w] += rm
        opensWin[w] += opens
        answersWin[w] += answers
        eng.sessions[w] += num(day.sessions)
        eng.returning[w] += num(day['ret:back'])
        eng.promoShown[w] += num(day.promo_shown)
        for (const b of DURATION_BUCKETS) eng.duration[b][w] += num(day[`dur:${b}`])
      }
      if (!inBreakdown) return
      for (const w of wins) sampledOf[w] += answers
      for (const [field, raw] of Object.entries(day)) {
        const n = Number(raw) || 0
        if (!n) continue
        for (const [prefix, bucket] of Object.entries(prefixes)) {
          if (!field.startsWith(prefix)) continue
          const key = field.slice(prefix.length)
          const m = rows[bucket]
          const counts = m.get(key) ?? zeroCounts()
          for (const w of wins) counts[w] += n
          m.set(key, counts)
          if (prefix === 'q:') for (const w of wins) sampled[w] += n
        }
      }
    })

    report.headline = [
      { key: 'answers', win: answersWin, all: totals.answers },
      { key: 'opens', win: opensWin, all: totals.opens },
    ]
    const older = await olderRatings(totals.since, dates[0])
    fb.all = { count: fb.count.last30 + older.count, sum: fb.sum.last30 + older.sum, low: fb.low.last30 + older.low, mail: fb.mail.last30 + older.mail }
    report.feedback = fb
    report.engagement = eng
    report.sampled = sampled
    report.sampledOf = sampledOf
    for (const bucket of Object.values(prefixes)) report[bucket] = rankRows(rows[bucket])
  } catch (err) {
    console.error('[askhans] report failed', err instanceof Error ? err.message : err)
    return emptyReport(dates)
  }
  return report
}
