// Thin adapter over the exact same searchApps() the MCP server's search_apps
// tool uses — both import it from src/lib/power-local-llm/app-search.ts (see
// that file's header comment for why this imports it directly rather than
// via src/lib/mcp/tools.ts, which re-exports the same function but also
// pulls in the full multi-cluster content graph as a side effect of import).

import { NextResponse } from 'next/server'
import { searchApps } from '@/lib/power-local-llm/app-search'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function parseNumber(value: string | null): number | undefined {
  if (!value) return undefined
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : undefined
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const result = searchApps({
    os: searchParams.get('os') || undefined,
    ramGb: parseNumber(searchParams.get('ramGb')),
    vramGb: parseNumber(searchParams.get('vramGb')),
    category: searchParams.get('category') || undefined,
    useCase: searchParams.get('useCase') || undefined,
    limit: parseNumber(searchParams.get('limit')) ?? 8,
  })

  return NextResponse.json(result, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
