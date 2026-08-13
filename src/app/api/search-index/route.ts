import { NextResponse } from 'next/server'
import { buildAllSearchEntries } from '@/lib/search/build-search-entries'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.json(buildAllSearchEntries(), {
    headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600' },
  })
}
