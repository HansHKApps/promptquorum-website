// Shared shape + helpers for the public usage reports on /askhans and /mcp-stats. Both pages show the same
// windows (today, yesterday, last 7 days, last 30 days, all time), the same 30-day chart and the same kind of
// breakdown tables (tools, apps, directory categories, languages), so they share one view component
// (src/components/tools/UsageReportView.tsx) and one data shape. Anonymous counters only.

export const REPORT_DAYS = 30
export const TOP_ROWS = 12

export type ReportWindow = 'today' | 'yesterday' | 'last7' | 'last30'
export type WindowCounts = Record<ReportWindow, number>

export interface ReportRow {
  key: string
  counts: WindowCounts
  /** lifetime count, only where a lifetime counter exists (MCP tools) */
  allTime?: number
}

/** Ask Hans star-rating feedback (anonymous counters). `mail` = visitors who pressed "write an email" in the low-rating pop-up. */
export interface FeedbackStats {
  count: WindowCounts
  sum: WindowCounts
  /** ratings of 1-3 stars */
  low: WindowCounts
  mail: WindowCounts
  all: { count: number; sum: number; low: number; mail: number }
}

/** Ask Hans engagement (consent "Yes" only): use sessions, how many were return visits, time in the tool per bucket. */
export interface EngagementStats {
  sessions: WindowCounts
  returning: WindowCounts
  /** sessions per active-time bucket (see src/lib/askhans/engagement.ts for the bucket names) */
  duration: Record<string, WindowCounts>
  /** sessions per window with the "promo card shown" counter, for reference */
  promoShown: WindowCounts
}

export interface UsageReportBase {
  generatedAt: string
  /** ISO date (UTC) the all-visitor totals started, or null */
  since: string | null
  /** ISO date (UTC) the breakdown tables started, or null */
  breakdownSince: string | null
  /** headline counters per window plus lifetime */
  headline: { key: 'answers' | 'opens' | 'calls' | 'starts' | 'power'; win: WindowCounts; all: number }[]
  /** the first headline counter per UTC day, oldest first, ending today */
  days: { date: string; count: number }[]
  /** consent sample (Ask Hans only): questions of visitors who agreed to statistics, and the all-visitor answers over the same days */
  sampled: WindowCounts | null
  sampledOf: WindowCounts | null
  categories: ReportRow[]
  apps: ReportRow[]
  dirCats: ReportRow[]
  tools: ReportRow[]
  langs: ReportRow[]
  /** Ask Hans only: Power Mode reports per process (all visitors) */
  powerProcesses?: ReportRow[]
  /** Ask Hans only: Power Mode report exports per format (consent "Yes" only) */
  powerExports?: ReportRow[]
  /** Ask Hans only */
  feedback?: FeedbackStats
  /** Ask Hans only */
  engagement?: EngagementStats
}

export const zeroCounts = (): WindowCounts => ({ today: 0, yesterday: 0, last7: 0, last30: 0 })

export function lastNDaysUtc(n: number): string[] {
  const now = Date.now()
  return Array.from({ length: n }, (_, i) => new Date(now - (n - 1 - i) * 86_400_000).toISOString().slice(0, 10))
}

/** Which windows day index `i` (0 = oldest, dates.length-1 = today) belongs to. */
export function windowsOf(i: number, length: number): ReportWindow[] {
  const last = length - 1
  const w: ReportWindow[] = ['last30']
  if (i === last) w.push('today')
  if (i === last - 1) w.push('yesterday')
  if (i > last - 7) w.push('last7')
  return w
}

export function rankRows(m: Map<string, WindowCounts>, limit = TOP_ROWS): ReportRow[] {
  return [...m]
    .map(([key, counts]) => ({ key, counts }))
    .sort((a, b) => b.counts.last30 - a.counts.last30 || b.counts.last7 - a.counts.last7 || a.key.localeCompare(b.key))
    .slice(0, limit)
}
