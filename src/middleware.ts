import { NextRequest, NextResponse } from 'next/server'

// Clusters routed via path-prefix locales for ALL non-EN langs (separate src/app/{de,fr,ja,zh}/<cluster>/ trees).
// Keep in sync with PATH_LOCALE_CLUSTERS in src/components/LanguageSwitcher.tsx,
// NOINDEX_PATH_PREFIXES in src/app/layout.tsx, and EXCLUDED_PATH_PREFIXES in src/app/sitemap.ts.
const PATH_LOCALE_CLUSTERS = ['power-local-llm']

// Clusters routed via /ja/ path-prefix for Japanese ONLY.
// DE/FR/ZH continue to use ?lang= on these paths.
// Keep in sync with JA_ONLY_LOCALE_CLUSTERS in src/components/LanguageSwitcher.tsx.
const JA_ONLY_LOCALE_CLUSTERS = [
  'prompt-engineering',
  'local-llms',
  'blog',
  'frameworks',
  'compare',
  'features',
  'how-it-works',
  'faq',
  'about',
  'privacy',
]

const PATH_LOCALE_RE = new RegExp(`^/(de|fr|ja|zh)(/|$)`)
const CLUSTER_PATH_RE = new RegExp(
  `^(?:/(de|fr|ja|zh))?/(${PATH_LOCALE_CLUSTERS.join('|')})(/|$)`
)
// Matches /ja/<jaOnlyCluster>/... or /<jaOnlyCluster>/... (without a locale prefix)
const JA_CLUSTER_PATH_RE = new RegExp(
  `^(?:/ja)?/(${JA_ONLY_LOCALE_CLUSTERS.join('|')})(/|$)`
)
// Matches /ja/<jaOnlyCluster>/... (already prefixed — used to detect already-migrated URLs)
const JA_PREFIXED_CLUSTER_RE = new RegExp(
  `^/ja/(${JA_ONLY_LOCALE_CLUSTERS.join('|')})(/|$)`
)

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  const VALID_NON_EN_LANGS = ['de', 'fr', 'ja', 'zh']
  const langParam = url.searchParams.get('lang')
  const isApiRoute = url.pathname.startsWith('/api/')
  const isCronRoute = url.pathname.startsWith('/cron/')

  // FIX 0: PE framework slugs → /frameworks/ canonical URL
  // These articles declare /frameworks/X as canonical but are also indexed via /prompt-engineering/X
  // causing "Duplicate without user-selected canonical" in GSC. Redirect to canonical.
  const PE_FRAMEWORK_REDIRECTS: Record<string, string> = {
    '/prompt-engineering/trace-framework': '/frameworks/trace',
    '/prompt-engineering/craft-framework': '/frameworks/craft',
    '/prompt-engineering/risen-framework': '/frameworks/risen',
    '/prompt-engineering/rtf-framework': '/frameworks/rtf',
    '/prompt-engineering/co-star-framework': '/frameworks/co-star',
  }
  const frameworkRedirect = PE_FRAMEWORK_REDIRECTS[url.pathname]
  if (frameworkRedirect && !isApiRoute && !isCronRoute) {
    const redirectUrl = url.clone()
    redirectUrl.pathname = frameworkRedirect
    console.log(`[Middleware] 301 redirect (PE framework→canonical): ${url.toString()} -> ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // FIX 3: Special case for ?lang=jp (country code) → 301 to ?lang=ja (language code)
  if (langParam === 'jp' && !isApiRoute && !isCronRoute) {
    const redirectUrl = url.clone()
    redirectUrl.searchParams.set('lang', 'ja')
    console.log(`[Middleware] 301 redirect (jp→ja): ${url.toString()} -> ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // PATH_LOCALE_CLUSTERS (all langs): rewrite legacy ?lang= links to path prefix.
  // /power-local-llm/foo?lang=de → /de/power-local-llm/foo
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

  // JA_ONLY_LOCALE_CLUSTERS: redirect ?lang=ja to /ja/ path prefix.
  // Only JA — DE/FR/ZH stay on ?lang= for these clusters.
  // Handles:
  //   /blog/slug?lang=ja          → /ja/blog/slug
  //   /compare?lang=ja            → /ja/compare
  //   /?lang=ja                   → /ja  (home page special case)
  if (langParam === 'ja' && !isApiRoute && !isCronRoute) {
    const alreadyJaPrefixed = JA_PREFIXED_CLUSTER_RE.test(url.pathname)
    const isHome = url.pathname === '/' || url.pathname === ''

    if (isHome) {
      // Home: /?lang=ja → /ja
      const redirectUrl = url.clone()
      redirectUrl.pathname = '/ja'
      redirectUrl.searchParams.delete('lang')
      console.log(`[Middleware] 301 redirect (home ?lang=ja→/ja): ${url.toString()} -> ${redirectUrl.toString()}`)
      return NextResponse.redirect(redirectUrl, 301)
    }

    const onJaOnlyCluster = JA_CLUSTER_PATH_RE.test(url.pathname)
    if (onJaOnlyCluster && !alreadyJaPrefixed) {
      // Cluster path: /blog/slug?lang=ja → /ja/blog/slug
      const redirectUrl = url.clone()
      redirectUrl.pathname = `/ja${url.pathname}`
      redirectUrl.searchParams.delete('lang')
      console.log(`[Middleware] 301 redirect (ja-only cluster ?lang=ja→/ja/): ${url.toString()} -> ${redirectUrl.toString()}`)
      return NextResponse.redirect(redirectUrl, 301)
    }
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
