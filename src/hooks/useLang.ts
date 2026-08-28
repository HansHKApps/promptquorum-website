'use client'

import { useState, useEffect } from 'react'

export type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const VALID_LANGS: Lang[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const PATH_LOCALE_RE = /^\/(de|fr|ja|zh|es|pt|ar|ko)(\/|$)/

/**
 * Returns the current language. Path-prefix locales (/de/, /fr/, /ja/, /zh/) take
 * priority over the ?lang= query param — path-prefix-routed clusters render server-side
 * off the URL, so the client must agree with what the server already rendered.
 *
 * Defaults to 'en' on server/static render so all content is pre-rendered as English.
 * After hydration, reads window.location and updates on popstate events.
 */
export function useLang(initialLang?: Lang): Lang {
  const [lang, setLang] = useState<Lang>(initialLang ?? 'en')

  useEffect(() => {
    const read = () => {
      let newLang: Lang = 'en'

      // Path-prefix wins: /de/foo → 'de' regardless of query string
      const pathMatch = window.location.pathname.match(PATH_LOCALE_RE)
      if (pathMatch) {
        newLang = pathMatch[1] as Lang
      } else {
        const params = new URLSearchParams(window.location.search)
        const rawLang = params.get('lang')

        // Treat ?lang=en same as no lang param. The URL cleanup itself is deferred to the
        // effect below — calling history.replaceState() here ran it inside the hydration
        // pass, racing usePathname and producing React hydration errors (#418).
        if (rawLang === 'en') {
          newLang = 'en'
        } else if (rawLang && VALID_LANGS.includes(rawLang as Lang)) {
          newLang = rawLang as Lang
        }
      }

      // Only update state if language has changed (prevents hydration mismatch on mobile)
      setLang(prevLang => (newLang !== prevLang ? newLang : prevLang))
    }

    read()
    window.addEventListener('popstate', read)
    return () => window.removeEventListener('popstate', read)
  }, [])

  // Legacy `?lang=` URL cleanup, in its own effect after the one above so the rewrite
  // never happens during the hydration commit (that raced usePathname and produced
  // React hydration errors).
  //
  // `?lang=en` is simply stripped. A non-English `?lang=xx` used to be honoured by
  // swapping the rendered content client-side, which only worked because the page
  // shipped all nine locale blocks to the browser. Now that the payload is narrowed to
  // the rendered locale (src/lib/narrowArticleData.ts), send the reader to the real
  // path-prefixed URL instead — they get the server-rendered translation, the correct
  // <html lang>, and the canonical URL, rather than a client-side approximation.
  useEffect(() => {
    const { pathname, search, hash } = window.location
    if (pathname.match(PATH_LOCALE_RE)) return

    const raw = new URLSearchParams(search).get('lang')
    if (!raw) return

    if (raw === 'en') {
      window.history.replaceState({}, '', pathname + hash)
      return
    }
    if (!VALID_LANGS.includes(raw as Lang)) return

    window.location.replace(`/${raw}${pathname}${hash}`)
  }, [])

  return lang
}
