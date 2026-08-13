import { NextResponse } from 'next/server'
import { SUPPORTED_LANGS } from '@/components/search/search-utils'
import { buildAllSearchEntries } from '@/lib/search/build-search-entries'

// Per-locale search index, e.g. /api/search-index/de. All 9 locales are
// pre-rendered at build time via generateStaticParams, so this is fully
// static/cacheable rather than computed per-request.

export const dynamic = 'force-static'

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang: requestedLang } = await params

  // Unknown locale segment: 404, matching how the rest of the site handles an
  // unrecognized locale prefix (e.g. /xx/local-llms has no matching route).
  if (!(SUPPORTED_LANGS as readonly string[]).includes(requestedLang)) {
    return new NextResponse('Not Found', { status: 404 })
  }
  const lang = requestedLang as (typeof SUPPORTED_LANGS)[number]

  const entries = buildAllSearchEntries().filter((e) => e.lang === lang)

  return NextResponse.json(entries, {
    headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600' },
  })
}
