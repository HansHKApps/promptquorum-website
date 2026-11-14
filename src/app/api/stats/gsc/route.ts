import { NextResponse } from 'next/server'
import { getGscStat } from '@/lib/partners/gsc'

// Aggregate number only; no visitor-level data. Credentials stay server-side.
export const revalidate = 21600

export async function GET() {
  const data = await getGscStat()
  if (!data) return NextResponse.json({ available: false }, { headers: { 'Cache-Control': 'public, s-maxage=300' } })
  return NextResponse.json(
    { available: true, ...data },
    { headers: { 'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=21600' } },
  )
}
