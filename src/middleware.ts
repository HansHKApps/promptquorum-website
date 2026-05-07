import { NextRequest, NextResponse } from 'next/server'

// Clusters routed via path-prefix locales (separate src/app/{de,fr,ja,zh}/<cluster>/ trees).
// Keep in sync with PATH_LOCALE_CLUSTERS in src/components/LanguageSwitcher.tsx,
// NOINDEX_PATH_PREFIXES in src/app/layout.tsx, and EXCLUDED_PATH_PREFIXES in src/app/sitemap.ts.
const PATH_LOCALE_CLUSTERS = ['power-local-llm']
const PATH_LOCALE_RE = new RegExp(`^/(de|fr|ja|zh)(/|$)`)
const CLUSTER_PATH_RE = new RegExp(
  `^(?:/(de|fr|ja|zh))?/(${PATH_LOCALE_CLUSTERS.join('|')})(/|$)`
)

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  const VALID_NON_EN_LANGS = ['de', 'fr', 'ja', 'zh']
  const langParam = url.searchParams.get('lang')
  const isApiRoute = url.pathname.startsWith('/api/')
  const isCronRoute = url.pathname.startsWith('/cron/')

  // FIX 3: Special case for ?lang=jp (country code) → 301 to ?lang=ja (language code)
  if (langParam === 'jp' && !isApiRoute && !isCronRoute) {
    const redirectUrl = url.clone()
    redirectUrl.searchParams.set('lang', 'ja')
    console.log(`[Middleware] 301 redirect (jp→ja): ${url.toString()} -> ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Path-prefix cluster + ?lang=<non-en>: rewrite legacy/shared links from
  // /power-local-llm/foo?lang=de to /de/power-local-llm/foo (and strip the query).
  // Only fires when the path is NOT already locale-prefixed.
  const clusterMatch = url.pathname.match(CLUSTER_PATH_RE)
  const onClusterPath = !!clusterMatch
  const alreadyLocalePrefixed = !!clusterMatch?.[1]
  if (
    onClusterPath &&
    !alreadyLocalePrefixed &&
    langParam &&
    VALID_NON_EN_LANGS.includes(langParam) &&
    !isApiRoute &&
    !isCronRoute
  ) {
    const redirectUrl = url.clone()
    redirectUrl.pathname = `/${langParam}${url.pathname}`
    redirectUrl.searchParams.delete('lang')
    console.log(`[Middleware] 301 redirect (cluster ?lang=→/lang/): ${url.toString()} -> ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // FIX 1 & 2: 301-redirect ?lang=en, ?lang= (empty), or other invalid langs to the bare URL.
  // English is served at the default path; any non-translatable lang param duplicates the
  // canonical URL and triggers GSC "Duplicate without user-selected canonical".
  // Skip API routes — the OG image generator depends on an explicit ?lang=en.
  if (langParam !== null && !VALID_NON_EN_LANGS.includes(langParam) && !isApiRoute && !isCronRoute) {
    const redirectUrl = url.clone()
    redirectUrl.searchParams.delete('lang')
    console.log(`[Middleware] 301 redirect (remove lang): ${url.toString()} -> ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  const response = NextResponse.next()

  // Resolve selected language: path prefix wins over ?lang= query param.
  // The path-prefix takes priority because path-prefix-routed clusters render server-side
  // off the URL, not the query string — the <html lang="..."> attribute must match.
  const pathLocale = url.pathname.match(PATH_LOCALE_RE)?.[1]
  const lang = url.searchParams.get('lang') || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = pathLocale ?? (validLangs.includes(lang) ? lang : 'en')

  // Add lang as header for layout.tsx to read
  response.headers.set('x-selected-lang', selectedLang)

  // Add pathname + query string (without lang param) as header for hreflang links
  const pathnameWithoutLang = url.pathname + (url.search ? url.search.replace(/\?lang=[^&]*&?|&lang=[^&]*/g, '').replace(/\?$/, '') : '')
  response.headers.set('x-pathname', pathnameWithoutLang)

  return response
}

// Run middleware on all routes
export const config = {
  matcher: '/:path*',
}
