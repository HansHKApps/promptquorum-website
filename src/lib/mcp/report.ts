// MCP usage report for /mcp-stats: the same shape and windows as the Ask Hans report (today, yesterday, last 7
// days, last 30 days, all time), built from the per-tool daily counters (usage.ts) and the per-day app / category /
// language counters (usage-dimensions.ts). A Redis outage yields an all-zero report, never an error.

import { redis } from '@/lib/redis'
import { MCP_TOOL_NAMES } from './usage'
import { REPORT_DAYS, lastNDaysUtc, rankRows, windowsOf, zeroCounts } from '@/lib/usage/report-types'
import type { ReportRow, UsageReportBase, WindowCounts } from '@/lib/usage/report-types'

export type McpReport = UsageReportBase

function empty(dates: string[]): McpReport {
  return {
    generatedAt: new Date().toISOString(),
    since: null,
    breakdownSince: null,
    headline: [
      { key: 'calls', win: zeroCounts(), all: 0 },
      { key: 'starts', win: zeroCounts(), all: 0 },
    ],
    days: dates.map((date) => ({ date, count: 0 })),
    sampled: null,
    sampledOf: null,
    categories: [],
    apps: [],
    dirCats: [],
    tools: MCP_TOOL_NAMES.map((key) => ({ key, counts: zeroCounts(), allTime: 0 })),
    langs: [],
  }
}

export async function getMcpReport(): Promise<McpReport> {
  const dates = lastNDaysUtc(REPORT_DAYS)
  const report = empty(dates)
  try {
    const toolKeys = [
      'mcp:calls:total',
      'mcp:dims:since',
      ...MCP_TOOL_NAMES.map((t) => `mcp:calls:${t}:total`),
      ...MCP_TOOL_NAMES.flatMap((t) => dates.map((d) => `mcp:calls:${t}:${d}`)),
    ]
    const pipe = redis.pipeline()
    for (const d of dates) pipe.hgetall(`mcp:day:${d}`)
    const [values, perDay] = await Promise.all([
      redis.mget<(number | string | null)[]>(...toolKeys),
      pipe.exec<(Record<string, string | number> | null)[]>(),
    ])

    const total = Number(values[0] ?? 0) || 0
    report.breakdownSince = typeof values[1] === 'string' ? values[1] : null
    const calls = zeroCounts()
    const starts = zeroCounts()
    const toolRows: ReportRow[] = []
    const base = 2 + MCP_TOOL_NAMES.length
    MCP_TOOL_NAMES.forEach((tool, ti) => {
      const counts = zeroCounts()
      dates.forEach((_, d) => {
        const n = Number(values[base + ti * dates.length + d] ?? 0) || 0
        report.days[d].count += n
        for (const w of windowsOf(d, dates.length)) {
          counts[w] += n
          calls[w] += n
          if (tool === 'start') starts[w] += n
        }
      })
      toolRows.push({ key: tool, counts, allTime: Number(values[2 + ti] ?? 0) || 0 })
    })
    report.headline = [
      { key: 'calls', win: calls, all: total },
      { key: 'starts', win: starts, all: toolRows.find((r) => r.key === 'start')?.allTime ?? 0 },
    ]
    report.tools = toolRows.sort((a, b) => b.counts.last30 - a.counts.last30 || (b.allTime ?? 0) - (a.allTime ?? 0) || a.key.localeCompare(b.key))

    const prefixes = { 'app:': 'apps', 'dircat:': 'dirCats', 'lang:': 'langs' } as const
    const rows: Record<string, Map<string, WindowCounts>> = { apps: new Map(), dirCats: new Map(), langs: new Map() }
    perDay.forEach((h, i) => {
      const wins = windowsOf(i, dates.length)
      for (const [field, raw] of Object.entries(h ?? {})) {
        const n = Number(raw) || 0
        if (!n) continue
        for (const [prefix, bucket] of Object.entries(prefixes)) {
          if (!field.startsWith(prefix)) continue
          const key = field.slice(prefix.length)
          const counts = rows[bucket].get(key) ?? zeroCounts()
          for (const w of wins) counts[w] += n
          rows[bucket].set(key, counts)
        }
      }
    })
    for (const bucket of Object.values(prefixes)) report[bucket] = rankRows(rows[bucket])
  } catch (err) {
    console.error('[mcp usage] failed to read report', err instanceof Error ? err.message : err)
    return empty(dates)
  }
  return report
}
