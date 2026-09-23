// Aggregate, PII-free call counters for the MCP server (src/app/api/mcp/
// route.ts). Answers "is anyone using this" — not "who is using it": no IP,
// no user agent, no identifiers of any kind are recorded, only per-tool and
// global counts. Read back via src/app/api/mcp-status/route.ts.

import { unstable_cache } from 'next/cache'
import { redis } from '@/lib/redis'

const MCP_TOOL_NAMES = ['search_promptquorum', 'get_article', 'list_clusters', 'get_app_details', 'explain_license', 'search_apps', 'list_categories', 'compare_apps'] as const
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

export interface UsageSnapshot {
  total: number
  byTool: Record<McpToolName, number>
  today: Record<McpToolName, number>
  generatedAt: string
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
  const fallback: UsageSnapshot = { total: 0, byTool: { ...zeroed }, today: { ...zeroed }, generatedAt: new Date().toISOString() }

  try {
    const today = todayUtc()
    const keys = [
      'mcp:calls:total',
      ...MCP_TOOL_NAMES.map((t) => `mcp:calls:${t}:total`),
      ...MCP_TOOL_NAMES.map((t) => `mcp:calls:${t}:${today}`),
    ]
    const values = await redis.mget<(number | null)[]>(...keys)

    const total = Number(values[0] ?? 0)
    const byTool = {} as Record<McpToolName, number>
    const todayByTool = {} as Record<McpToolName, number>
    MCP_TOOL_NAMES.forEach((t, i) => {
      byTool[t] = Number(values[1 + i] ?? 0)
      todayByTool[t] = Number(values[1 + MCP_TOOL_NAMES.length + i] ?? 0)
    })

    return { total, byTool, today: todayByTool, generatedAt: fallback.generatedAt }
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
