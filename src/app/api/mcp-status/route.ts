// Unauthenticated but unlisted (no nav link, not in the sitemap) status
// endpoint for the MCP server's aggregate, PII-free call counters. See
// src/lib/mcp/usage.ts for what is and isn't recorded.

import { NextResponse } from 'next/server'
import { getMcpUsageSnapshot } from '@/lib/mcp/usage'

// Must never be cached — this reflects live counter state. The actual
// no-store Cache-Control comes from next.config.ts's headers() (config-level
// headers win over anything set here, and the repo's own /api/og and
// /build-info.json overrides already establish that as the pattern) —
// force-dynamic here just stops Next from trying to prerender this route
// as static output in the first place.
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(await getMcpUsageSnapshot())
}
