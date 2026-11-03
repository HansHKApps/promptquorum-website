// Ask Hans — usage report for the public /askhans page and for scripts. Same windows as the MCP report
// (today, yesterday, last 7 days, last 30 days, all time). Reads the anonymous per-day counters only:
//   askhans:day:<date>   total_opens / total_requests / total_answers (all visitors) and, for visitors who agreed
//                        to the anonymous statistics: q:<category>, app:<slug>, dircat:<key>, tool:<name>, lang:<xx>
// Never contains names, IPs or question text. A Redis outage yields an all-zero report (same contract as
// getMcpUsageSnapshot), so the page never fails because of it.

import { redis } from '@/lib/redis'
import { getAskHansTotals } from './totals'

export const REPORT_DAYS = 30
const TOP_ROWS = 12

export type ReportWindow = 'today' | 'yesterday' | 'last7' | 'last30'
export type WindowCounts = Record<ReportWindow, number>

export interface ReportRow {
  key: string
  counts: WindowCounts
}

export interface AskHansReport {
  generatedAt: string
  since: string | null
  /** all visitors, no consent needed */
  totals: { opens: number; requests: number; answers: number }
  windows: { opens: WindowCounts; answers: WindowCounts }
  /** answers per UTC day, oldest first, ending today */
  days: { date: string; answers: number }[]
  /** visitors who agreed to the anonymous statistics: how many questions they asked, per window */
  sampled: WindowCounts
  /** breakdowns, busiest (last 30 days) first; sample = consenting visitors only */
  categories: ReportRow[]
  apps: ReportRow[]
  dirCats: ReportRow[]
  tools: ReportRow[]
  langs: ReportRow[]
}

const zero = (): WindowCounts => ({ today: 0, yesterday: 0, last7: 0, last30: 0 })

function lastNDaysUtc(n: number): string[] {
  const now = Date.now()
  return Array.from({ length: n }, (_, i) => new Date(now - (n - 1 - i) * 86_400_000).toISOString().slice(0, 10))
}

function emptyReport(dates: string[]): AskHansReport {
  return {
    generatedAt: new Date().toISOString(),
    since: null,
    totals: { opens: 0, requests: 0, answers: 0 },
    windows: { opens: zero(), answers: zero() },
    days: dates.map((date) => ({ date, answers: 0 })),
    sampled: zero(),
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

    const last = dates.length - 1
    const windowsOf = (i: number): ReportWindow[] => {
      const w: ReportWindow[] = ['last30']
      if (i === last) w.push('today')
      if (i === last - 1) w.push('yesterday')
      if (i > last - 7) w.push('last7')
      return w
    }
    const prefixes = { 'q:': 'categories', 'app:': 'apps', 'dircat:': 'dirCats', 'tool:': 'tools', 'lang:': 'langs' } as const
    const rows: Record<string, Map<string, WindowCounts>> = { categories: new Map(), apps: new Map(), dirCats: new Map(), tools: new Map(), langs: new Map() }

    perDay.forEach((h, i) => {
      const day = h ?? {}
      const wins = windowsOf(i)
      const opens = Number(day.total_opens ?? 0) || 0
      const answers = Number(day.total_answers ?? 0) || 0
      report.days[i].answers = answers
      for (const w of wins) {
        report.windows.opens[w] += opens
        report.windows.answers[w] += answers
      }
      for (const [field, raw] of Object.entries(day)) {
        const n = Number(raw) || 0
        if (!n) continue
        for (const [prefix, bucket] of Object.entries(prefixes)) {
          if (!field.startsWith(prefix)) continue
          const key = field.slice(prefix.length)
          const m = rows[bucket]
          const counts = m.get(key) ?? zero()
          for (const w of wins) counts[w] += n
          m.set(key, counts)
          if (prefix === 'q:') for (const w of wins) report.sampled[w] += n
        }
      }
    })

    for (const bucket of Object.values(prefixes)) {
      report[bucket] = [...rows[bucket]]
        .map(([key, counts]) => ({ key, counts }))
        .sort((a, b) => b.counts.last30 - a.counts.last30 || b.counts.last7 - a.counts.last7 || a.key.localeCompare(b.key))
        .slice(0, TOP_ROWS)
    }
  } catch (err) {
    console.error('[askhans] report failed', err instanceof Error ? err.message : err)
    return emptyReport(dates)
  }
  return report
}
