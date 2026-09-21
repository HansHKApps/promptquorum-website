// Unauthenticated but unlisted (no nav link, not in the sitemap) human-readable
// view of the same aggregate, PII-free MCP call counters served as JSON at
// src/app/api/mcp-status/route.ts. Both read src/lib/mcp/usage.ts directly —
// this page calls the same getter rather than fetching its own JSON endpoint,
// since it's already a server component with no need for a network hop.

import type { Metadata } from 'next'
import { getMcpUsageSnapshot, type McpToolName } from '@/lib/mcp/usage'

export const metadata: Metadata = {
  title: 'MCP Server Stats — PromptQuorum',
  description: 'Live usage counters for the PromptQuorum MCP server.',
  robots: { index: false, follow: false },
}

// Must never be cached — this reflects live counter state, same reasoning as
// the JSON endpoint at src/app/api/mcp-status/route.ts.
export const dynamic = 'force-dynamic'

const TOOL_LABELS: Record<McpToolName, string> = {
  search_promptquorum: 'search_promptquorum',
  get_article: 'get_article',
  list_clusters: 'list_clusters',
  get_app_details: 'get_app_details',
  explain_license: 'explain_license',
  search_apps: 'search_apps',
  list_categories: 'list_categories',
}

export default async function McpStatsPage() {
  const snapshot = await getMcpUsageSnapshot()
  const tools = Object.keys(TOOL_LABELS) as McpToolName[]

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">MCP Server Stats</h1>
      <p className="mt-2 text-sm text-slate-500">
        Live, PII-free call counters for{' '}
        <code className="rounded bg-slate-100 px-1 py-0.5">https://www.promptquorum.com/api/mcp</code>. Generated{' '}
        {new Date(snapshot.generatedAt).toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' })} UTC.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 p-4">
        <div className="text-sm text-slate-500">Total calls, all time</div>
        <div className="mt-1 text-3xl font-semibold text-slate-900">{snapshot.total}</div>
      </div>

      <table className="mt-8 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-500">
            <th className="py-2 font-medium">Tool</th>
            <th className="py-2 font-medium">Total calls</th>
            <th className="py-2 font-medium">Calls today (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool} className="border-b border-slate-100">
              <td className="py-2 font-mono text-slate-800">{TOOL_LABELS[tool]}</td>
              <td className="py-2 text-slate-800">{snapshot.byTool[tool]}</td>
              <td className="py-2 text-slate-800">{snapshot.today[tool]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8 text-xs text-slate-400">
        Raw JSON: <code className="rounded bg-slate-100 px-1 py-0.5">/api/mcp-status</code>
      </p>
    </main>
  )
}
