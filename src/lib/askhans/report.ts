// Ask Hans — usage report for the public /askhans page and for scripts. Same windows as the MCP report
// (today, yesterday, last 7 days, last 30 days, all time). Reads the anonymous per-day counters only:
//   askhans:day:<date>   total_opens / total_requests / total_answers (all visitors) and, for visitors who agreed
//                        to the anonymous statistics: q:<category>, app:<slug>, dircat:<key>, tool:<name>, lang:<xx>
// Never contains names, IPs or question text. A Redis outage yields an all-zero report (same contract as
// getMcpUsageSnapshot), so the page never fails because of it.

import { redis } from '@/lib/redis'
import { getAskHansTotals } from './totals'
import { REPORT_DAYS, lastNDaysUtc, rankRows, windowsOf, zeroCounts } from '@/lib/usage/report-types'
import type { ReportRow, ReportWindow, UsageReportBase, WindowCounts } from '@/lib/usage/report-types'

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
  }
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
      for (const w of wins) {
        opensWin[w] += opens
        answersWin[w] += answers
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
    report.sampled = sampled
    report.sampledOf = sampledOf
    for (const bucket of Object.values(prefixes)) report[bucket] = rankRows(rows[bucket])
  } catch (err) {
    console.error('[askhans] report failed', err instanceof Error ? err.message : err)
    return emptyReport(dates)
  }
  return report
}
