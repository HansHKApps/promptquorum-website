import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // 301-redirect ?lang=en to the bare URL: English is served at the default path, so
  // ?lang=en duplicates the canonical URL and triggers GSC "Duplicate without user-selected
  // canonical". Skip API routes — the OG image generator depends on an explicit ?lang=en.
  if (url.searchParams.get('lang') === 'en' && !url.pathname.startsWith('/api/')) {
    const redirectUrl = url.clone()
    redirectUrl.searchParams.delete('lang')
    return NextResponse.redirect(redirectUrl, 301)
  }

  const response = NextResponse.next()

  // Extract lang from query params
  const lang = url.searchParams.get('lang') || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

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
