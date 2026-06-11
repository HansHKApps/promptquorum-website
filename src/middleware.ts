import { NextRequest, NextResponse } from 'next/server'

function detectLangFromHeader(acceptLanguage: string, supported: string[]): string | null {
  return acceptLanguage
    .split(',')
    .map(p => { const [tag, q] = p.trim().split(';q='); return { lang: tag.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1.0 } })
    .sort((a, b) => b.q - a.q)
    .map(p => p.lang)
    .find(l => supported.includes(l)) ?? null
}

const PATH_LOCALE_RE = new RegExp(`^/(de|fr|ja|zh|es|pt|ar)(/|$)`)

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  const VALID_NON_EN_LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar']
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

  // LANG PARAM REDIRECT: convert any ?lang=XX URL to the canonical subdirectory form.
  // ?lang=en or unrecognised lang → strip param, stay at current path.
  // ?lang=jp normalised to ja (country-code alias).
  // 'ar' is excluded from valid non-EN langs (page tree not yet live).
  // Returns 308 (permanent, method-preserving).
  if (langParam !== null && !isApiRoute && !isCronRoute) {
    const LANG_ALIASES: Record<string, string> = { jp: 'ja' }
    const resolvedLang = LANG_ALIASES[langParam] ?? langParam
    const pathHasLangPrefix = PATH_LOCALE_RE.test(url.pathname)

    // Build remaining query string without the lang param
    const newParams = new URLSearchParams(url.search)
    newParams.delete('lang')
    const remainingQuery = newParams.toString()
    const querySuffix = remainingQuery ? `?${remainingQuery}` : ''

    let target: string
    if (pathHasLangPrefix) {
      // Path already locale-prefixed (e.g., /de/about?lang=de) — drop stale param, trust the path
      target = url.pathname + querySuffix
    } else if (VALID_NON_EN_LANGS.includes(resolvedLang)) {
      // Valid non-EN lang, unlocalized path — add the lang prefix
      const cleanPathname = url.pathname === '/' ? '' : url.pathname
      target = `/${resolvedLang}${cleanPathname}${querySuffix}`
    } else {
      // EN or unrecognized lang — strip the param, keep the path
      target = url.pathname + querySuffix
    }

    console.log(`[Middleware] 308 redirect (?lang=${langParam}→canonical): ${url.toString()} -> ${target}`)
    return NextResponse.redirect(new URL(target, url.origin), 308)
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
