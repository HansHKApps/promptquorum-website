// GET /api/askhans/totals — public read-only aggregate for the homepage "By the numbers" tile. The homepage is
// statically generated, so its Ask Hans number is frozen at build time; the tile fetches this live total instead.
// Only the answers total (same read as the /askhans page). No identifier, no text, no IP.

import { getAskHansTotals } from '@/lib/askhans/totals'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(): Promise<Response> {
  if (process.env.ASK_HANS_ENABLED !== 'true') return new Response(null, { status: 404 })
  const { answers } = await getAskHansTotals()
  return Response.json({ answers }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
}
