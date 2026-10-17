// Aggregate, PII-free call counters for the MCP server (src/app/api/mcp/
// route.ts). Answers "is anyone using this" — not "who is using it": no IP,
// no user agent, no identifiers of any kind are recorded, only per-tool and
// global counts. Read back via src/app/api/mcp-status/route.ts.

import { unstable_cache } from 'next/cache'
import { redis } from '@/lib/redis'

export const MCP_TOOL_NAMES = [
  'search_promptquorum',
  'get_article',
  'list_clusters',
  'get_app_details',
  'explain_license',
  'search_apps',
  'list_categories',
  'compare_apps',
  'find_best_apps',
  'check_hardware_compatibility',
  'recommend_stack',
  'estimate_vram',
  'find_local_alternative',
  'get_app_alternatives',
  'get_latest',
  'get_hands_on_test',
  'find_related_content',
  'start',
  'set_consent',
  'forget_me',
  'my_profile',
  'set_language',
] as const
export type McpToolName = (typeof MCP_TOOL_NAMES)[number]

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Fire-and-forget-safe: a Redis outage must never break a tool response, so
 * every failure here is swallowed (and logged) rather than thrown.
 */
export async function recordMcpCall(toolName: McpToolName): Promise<void> {
  try {
    await Promise.all([
      redis.incr('mcp:calls:total'),
      redis.incr(`mcp:calls:${toolName}:total`),
      redis.incr(`mcp:calls:${toolName}:${todayUtc()}`),
    ])
  } catch (err) {
    console.error('[mcp usage] failed to record call', toolName, err)
  }
}

export const TREND_DAYS = 30

export interface UsageSnapshot {
  total: number
  byTool: Record<McpToolName, number>
  today: Record<McpToolName, number>
  /** Calls per tool over the last 7 / 30 UTC days, today included. */
  last7: Record<McpToolName, number>
  last30: Record<McpToolName, number>
  /** Total calls per UTC day, oldest first, ending today (TREND_DAYS entries). */
  days: { date: string; calls: number }[]
  generatedAt: string
}

function lastNDaysUtc(n: number): string[] {
  const now = Date.now()
  return Array.from({ length: n }, (_, i) => new Date(now - (n - 1 - i) * 86_400_000).toISOString().slice(0, 10))
}

/**
 * Same swallow-on-failure contract as recordMcpCall: a Redis outage (or, as
 * happens during a local build with no Upstash env vars configured) must
 * never break a page that renders this snapshot — including the homepage's
 * force-static build, which would otherwise fail the entire `next build`.
 * Callers get an all-zero snapshot instead of a thrown error.
 */
export async function getMcpUsageSnapshot(): Promise<UsageSnapshot> {
  const zeroed = Object.fromEntries(MCP_TOOL_NAMES.map((t) => [t, 0])) as Record<McpToolName, number>
  const fallback: UsageSnapshot = {
    total: 0,
    byTool: { ...zeroed },
    today: { ...zeroed },
    last7: { ...zeroed },
    last30: { ...zeroed },
    days: lastNDaysUtc(TREND_DAYS).map((date) => ({ date, calls: 0 })),
    generatedAt: new Date().toISOString(),
  }

  try {
    const dates = lastNDaysUtc(TREND_DAYS)
    const today = dates[dates.length - 1]
    // One MGET: the lifetime keys, then one daily key per tool per day. The
    // daily keys are the same ones recordMcpCall has always written, so the
    // trend needs no new recording and no new data about anyone.
    const keys = [
      'mcp:calls:total',
      ...MCP_TOOL_NAMES.map((t) => `mcp:calls:${t}:total`),
      ...MCP_TOOL_NAMES.flatMap((t) => dates.map((d) => `mcp:calls:${t}:${d}`)),
    ]
    const values = await redis.mget<(number | null)[]>(...keys)

    const total = Number(values[0] ?? 0)
    const byTool = {} as Record<McpToolName, number>
    const todayByTool = {} as Record<McpToolName, number>
    const last7 = {} as Record<McpToolName, number>
    const last30 = {} as Record<McpToolName, number>
    const dayTotals = dates.map(() => 0)
    const dailyBase = 1 + MCP_TOOL_NAMES.length
    MCP_TOOL_NAMES.forEach((t, i) => {
      byTool[t] = Number(values[1 + i] ?? 0)
      let w7 = 0
      let w30 = 0
      dates.forEach((_, d) => {
        const n = Number(values[dailyBase + i * dates.length + d] ?? 0)
        dayTotals[d] += n
        w30 += n
        if (d >= dates.length - 7) w7 += n
        if (dates[d] === today) todayByTool[t] = n
      })
      last7[t] = w7
      last30[t] = w30
    })

    return {
      total,
      byTool,
      today: todayByTool,
      last7,
      last30,
      days: dates.map((date, i) => ({ date, calls: dayTotals[i] })),
      generatedAt: fallback.generatedAt,
    }
  } catch (err) {
    console.error('[mcp usage] failed to read snapshot', err)
    return fallback
  }
}

/**
 * Same data as getMcpUsageSnapshot(), wrapped in Next's unstable_cache so it
 * can be read from a `force-static`/ISR page (the homepage's By-the-Numbers
 * block, across all 9 locales) without forcing that page dynamic.
 *
 * Why this is necessary, not just an optimization: @upstash/redis's REST
 * client issues its request via `fetch(..., { cache: 'no-store' })`. Called
 * directly from a statically-rendered route, Next.js's dynamic-API bailout
 * fires the instant that fetch is reached — before getMcpUsageSnapshot's own
 * try/catch ever runs — so catching the resulting error server-side does
 * NOT undo the bailout; the whole route still renders dynamically. That
 * silently turned every non-EN locale homepage from `○ static` into
 * `ƒ dynamic` in a real build once this was wired in directly (confirmed via
 * `next build` route summary), undoing the ISR caching fix those routes
 * already relied on. Routing the same Redis read through unstable_cache
 * keeps the fetch inside Next's own cache boundary, so the homepage stays
 * static/ISR while still refreshing the number once a day (matching the
 * homepage's own `revalidate = 86400`). The live, always-fresh number
 * still belongs on the `force-dynamic` /mcp-stats page, which should call
 * getMcpUsageSnapshot() directly instead.
 */
export const getMcpUsageSnapshotCached = unstable_cache(getMcpUsageSnapshot, ['mcp-usage-snapshot'], {
  revalidate: 86400,
  tags: ['mcp-usage'],
})
