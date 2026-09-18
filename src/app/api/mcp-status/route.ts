// Unauthenticated but unlisted (no nav link, not in the sitemap) status
// endpoint for the MCP server's aggregate, PII-free call counters. See
// src/lib/mcp/usage.ts for what is and isn't recorded.

import { NextResponse } from 'next/server'
import { getMcpUsageSnapshot } from '@/lib/mcp/usage'

// Must never be cached — this reflects live counter state. Per Vercel's own
// docs (Cache-Control in Next.js App Router), the reliable mechanism is the
// Response object's own headers, not next.config.ts alone — the earlier
// next.config.ts override (still present, harmless as a backup) did not
// take effect against real production for this dynamic route, confirmed by
// testing against the live URL, not just local `next start`.
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(await getMcpUsageSnapshot(), {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
    },
  })
}
