import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Extract lang from query params
  const url = request.nextUrl
  const lang = url.searchParams.get('lang') || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  // Add lang as header for layout.tsx to read
  response.headers.set('x-selected-lang', selectedLang)

  return response
}

// Run middleware on all routes
export const config = {
  matcher: '/:path*',
}
