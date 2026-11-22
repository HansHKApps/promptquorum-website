// GET /api/academy/totals — public read-only aggregate for the homepage "By the numbers" tile. The homepage is
// statically generated, so its Academy number is frozen at build time; the tile fetches this live total instead.
// Only the programme total (same read as the /academy page, legacy key included). No identifier, no text, no IP.

import { getAcademyTotalsLive } from '@/lib/academy/usage'
import { academyEnabled } from '@/lib/academy/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(): Promise<Response> {
  if (!academyEnabled()) return new Response(null, { status: 404 })
  const { programmes } = await getAcademyTotalsLive()
  return Response.json({ programmes }, { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600' } })
}
