// Unauthenticated but unlisted (no nav link, not in the sitemap) status
// endpoint for the MCP server's aggregate, PII-free call counters. See
// src/lib/mcp/usage.ts for what is and isn't recorded.

import { NextResponse } from 'next/server'
import { getMcpUsageSnapshot } from '@/lib/mcp/usage'

export async function GET() {
  return NextResponse.json(await getMcpUsageSnapshot())
}
