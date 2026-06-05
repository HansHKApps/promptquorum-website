import { NextRequest, NextResponse } from 'next/server'

function detectLangFromHeader(acceptLanguage: string, supported: string[]): string | null {
  return acceptLanguage
    .split(',')
    .map(p => { const [tag, q] = p.trim().split(';q='); return { lang: tag.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1.0 } })
    .sort((a, b) => b.q - a.q)
    .map(p => p.lang)
    .find(l => supported.includes(l)) ?? null
}

// Clusters routed via path-prefix locales for ALL non-EN langs (separate src/app/{de,fr,ja,zh}/<cluster>/ trees).
// Keep in sync with PATH_LOCALE_CLUSTERS in src/components/LanguageSwitcher.tsx,
// NOINDEX_PATH_PREFIXES in src/app/layout.tsx, and EXCLUDED_PATH_PREFIXES in src/app/sitemap.ts.
const PATH_LOCALE_CLUSTERS = ['power-local-llm', 'prompt-bites', 'smart-home']

// Clusters routed via /ja/, /zh/, /de/, and /fr/ path-prefixes for Japanese, Chinese, German, and French.
// All non-EN languages now use path-prefix routing.
// Keep in sync with PATH_PREFIX_LANG_CLUSTERS in src/components/LanguageSwitcher.tsx.
const PATH_PREFIX_LANG_CLUSTERS = [
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

const PATH_LOCALE_RE = new RegExp(`^/(de|fr|ja|zh|es|pt|ar)(/|$)`)
const CLUSTER_PATH_RE = new RegExp(
  `^(?:/(de|fr|ja|zh|es|pt|ar))?/(${PATH_LOCALE_CLUSTERS.join('|')})(/|$)`
)
// Matches /ja/, /zh/, /de/, /fr/, /es/, /pt/, or /ar/ <pathPrefixLangCluster>/... or /<pathPrefixLangCluster>/... (without a locale prefix)
const PATH_PREFIX_LANG_CLUSTER_RE = new RegExp(
  `^(?:/(de|fr|ja|zh|es|pt|ar))?/(${PATH_PREFIX_LANG_CLUSTERS.join('|')})(/|$)`
)
// Matches /ja/, /zh/, /de/, /fr/, /es/, /pt/, or /ar/ <pathPrefixLangCluster>/... (already prefixed — used to detect already-migrated URLs)
const PATH_PREFIX_LANG_PREFIXED_RE = new RegExp(
  `^/(de|fr|ja|zh|es|pt|ar)/(${PATH_PREFIX_LANG_CLUSTERS.join('|')})(/|$)`
)

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // ar: excluded until /ar page tree exists. Re-add ar when /ar pages ship.
  const VALID_NON_EN_LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt']
  const langParam = url.searchParams.get('lang')
  const isApiRoute = url.pathname.startsWith('/api/')
  const isCronRoute = url.pathname.startsWith('/cron/')

  // First-party analytics proxy (Umami: /lib/s/script.js + /lib/s/api/send).
  // This path is rewritten to cloud.umami.is in next.config.ts to bypass ad blockers.
  // It must NEVER be touched by language redirects — a 302 on the /lib/s/api/send
  // event beacon sends it to /<lang>/lib/s/api/send (404) and the event is lost.
  // Unlike the Vercel (/api/data) and Clarity (/api/clarity) proxies, this lives
  // under /lib/ so it is not covered by the isApiRoute guard. Bail out early.
  if (url.pathname.startsWith('/lib/')) {
    return NextResponse.next()
  }

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

  // Auto-detect browser language on first visit (no cookie, no explicit lang selection).
  const pqLangCookie = request.cookies.get('pq_lang')?.value
  const pathLocaleEarly = url.pathname.match(PATH_LOCALE_RE)?.[1]
  // Also exclude any root-level file (*.txt, *.xml, *.json, *.html, etc.) so that
  // bot verification requests (Bing IndexNow key, BingSiteAuth.xml, robots.txt, etc.)
  // are never redirected by the Accept-Language auto-detect logic.
  const isStaticAsset = url.pathname.startsWith('/_next/') || url.pathname === '/favicon.ico' || /\.\w{1,10}$/.test(url.pathname)
  if (!pathLocaleEarly && !langParam && !pqLangCookie && !isApiRoute && !isCronRoute && !isStaticAsset) {
    const acceptLang = request.headers.get('accept-language') || ''
    const detected = detectLangFromHeader(acceptLang, VALID_NON_EN_LANGS)
    if (detected) {
      const redirectUrl = url.clone()
      redirectUrl.pathname = url.pathname === '/' ? `/${detected}` : `/${detected}${url.pathname}`
      redirectUrl.searchParams.delete('lang')
      const res = NextResponse.redirect(redirectUrl, 302)
      res.cookies.set('pq_lang', detected, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
      console.log(`[Middleware] 302 redirect (Accept-Language auto-detect ${detected}): ${url.toString()} -> ${redirectUrl.toString()}`)
      return res
    }
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

  // PATH_PREFIX_LANG_CLUSTERS: redirect ?lang=ja, ?lang=zh, ?lang=de, and ?lang=fr to /ja/, /zh/, /de/, and /fr/ path prefixes.
  // All non-EN languages now use path-prefix routing.
  // Handles:
  //   /blog/slug?lang=ja          → /ja/blog/slug
  //   /compare?lang=de            → /de/compare
  //   /?lang=fr                   → /fr  (home page special case)
  if (langParam !== null && VALID_NON_EN_LANGS.includes(langParam) && !isApiRoute && !isCronRoute) {
    const alreadyPrefixed = PATH_PREFIX_LANG_PREFIXED_RE.test(url.pathname)
    const isHome = url.pathname === '/' || url.pathname === ''

    if (isHome) {
      // Home: /?lang=ja → /ja, /?lang=zh → /zh
      const redirectUrl = url.clone()
      redirectUrl.pathname = `/${langParam}`
      redirectUrl.searchParams.delete('lang')
      console.log(`[Middleware] 301 redirect (home ?lang=${langParam}→/${langParam}): ${url.toString()} -> ${redirectUrl.toString()}`)
      return NextResponse.redirect(redirectUrl, 301)
    }

    const onPrefixLangCluster = PATH_PREFIX_LANG_CLUSTER_RE.test(url.pathname)
    if (onPrefixLangCluster && !alreadyPrefixed) {
      // Cluster path: /blog/slug?lang=ja → /ja/blog/slug, /blog/slug?lang=zh → /zh/blog/slug
      const redirectUrl = url.clone()
      redirectUrl.pathname = `/${langParam}${url.pathname}`
      redirectUrl.searchParams.delete('lang')
      console.log(`[Middleware] 301 redirect (prefix-lang cluster ?lang=${langParam}→/${langParam}/): ${url.toString()} -> ${redirectUrl.toString()}`)
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
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar']
  const selectedLang = pathLocale ?? (validLangs.includes(lang) ? lang : 'en')

  // Persist language choice in cookie so auto-detection only runs on first visit.
  const cookieLang = request.cookies.get('pq_lang')?.value
  if (selectedLang !== 'en' || !cookieLang) {
    response.cookies.set('pq_lang', selectedLang, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  }

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
