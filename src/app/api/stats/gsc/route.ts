import { NextResponse } from 'next/server'
import { getGscLastError, getGscStat } from '@/lib/partners/gsc'

// Aggregate number only; no visitor-level data. Credentials stay server-side.
// Dynamic on purpose: a prerendered route would cache a failed lookup for hours.
// The value itself is cached in memory (6 h) and at the CDN via Cache-Control below.
export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await getGscStat()
  if (!data) {
    return NextResponse.json({ available: false, reason: getGscLastError() }, { headers: { 'Cache-Control': 'no-store' } })
  }
  return NextResponse.json(
    { available: true, ...data },
    { headers: { 'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=21600' } },
  )
}
