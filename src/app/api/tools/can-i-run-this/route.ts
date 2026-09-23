// Thin adapter over the same getAppDetails()/hardwareFit()/summarize() the
// MCP server's get_app_details tool uses — both import from
// src/lib/power-local-llm/app-search.ts directly (see that file's header
// comment for why this bypasses src/lib/mcp/tools.ts, which re-exports the
// same functions but also pulls in the full multi-cluster content graph as
// a side effect of import). Unlike search_apps (which drops 'too-demanding'
// matches from its results), this route deliberately surfaces
// 'too-demanding' — a single named app can get a real "no" verdict here,
// not just a filtered-out silence.

import { NextResponse } from 'next/server'
import { getAppDetails, hardwareFit, summarize, AppNotFoundError, DIRECTORY_DISCLAIMER } from '@/lib/power-local-llm/app-search'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function parseNumber(value: string | null): number | undefined {
  if (!value) return undefined
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : undefined
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  if (!slug) {
    return NextResponse.json({ error: 'Missing required "slug" parameter.' }, { status: 400 })
  }

  const ramGb = parseNumber(searchParams.get('ramGb'))
  const vramGb = parseNumber(searchParams.get('vramGb'))

  try {
    const app = getAppDetails({ slug })
    const fit = hardwareFit(app, ramGb, vramGb)
    return NextResponse.json(
      { result: summarize(app, fit), disclaimer: DIRECTORY_DISCLAIMER },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
    )
  } catch (err) {
    if (err instanceof AppNotFoundError) {
      return NextResponse.json({ error: err.message }, { status: 404 })
    }
    throw err
  }
}
