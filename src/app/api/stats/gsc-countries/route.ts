import { NextResponse } from 'next/server'
import { getGscCountries, getGscLastError } from '@/lib/partners/gsc'

// Aggregate clicks per country only; no visitor-level data. Credentials stay server-side.
export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await getGscCountries()
  if (!data) {
    return NextResponse.json({ available: false, reason: getGscLastError() }, { headers: { 'Cache-Control': 'no-store' } })
  }
  return NextResponse.json(
    { available: true, ...data },
    { headers: { 'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=21600' } },
  )
}
