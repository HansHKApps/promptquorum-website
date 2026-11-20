// GET /api/academy/ratings-summary — public read-only aggregate of the anonymous star ratings (counts, distribution,
// averages; lesson and programme ratings separate). Cached for an hour. No individual rating, text or identifier exists.
// The public display needs the open-ratings notice and the "How our ratings work" page first (docs/academy/NOT-DONE.md).

import { readAcademyRatings } from '@/lib/academy/usage'
import { academyEnabled } from '@/lib/academy/config'

export const runtime = 'nodejs'
export const revalidate = 3600

export async function GET(): Promise<Response> {
  if (!academyEnabled()) return new Response(null, { status: 404 })
  return Response.json(await readAcademyRatings(), { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600' } })
}
