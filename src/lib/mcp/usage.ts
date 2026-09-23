// Aggregate, PII-free call counters for the MCP server (src/app/api/mcp/
// route.ts). Answers "is anyone using this" — not "who is using it": no IP,
// no user agent, no identifiers of any kind are recorded, only per-tool and
// global counts. Read back via src/app/api/mcp-status/route.ts.

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

export async function getMcpUsageSnapshot(): Promise<UsageSnapshot> {
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

  return { total, byTool, today: todayByTool, generatedAt: new Date().toISOString() }
}
