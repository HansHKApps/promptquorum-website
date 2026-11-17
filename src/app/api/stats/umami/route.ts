import { NextResponse } from 'next/server'
import { getUmamiStat } from '@/lib/partners/umami'

// Aggregate number only; no visitor-level data. Credentials stay server-side.
// Dynamic on purpose: a prerendered route would cache a failed lookup for hours.
export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await getUmamiStat()
  if (!data) return NextResponse.json({ available: false }, { headers: { 'Cache-Control': 'no-store' } })
  return NextResponse.json(
    { available: true, ...data },
    { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600' } },
  )
}
