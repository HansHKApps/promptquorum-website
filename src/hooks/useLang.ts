'use client'

import { useState, useEffect } from 'react'

export type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar'

const VALID_LANGS: Lang[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar']
const PATH_LOCALE_RE = /^\/(de|fr|ja|zh|es|pt|ar)(\/|$)/

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

        // Treat ?lang=en same as no lang param (redirect to base URL)
        if (rawLang === 'en' && typeof window !== 'undefined') {
          const newUrl = window.location.pathname + window.location.hash
          window.history.replaceState({}, '', newUrl)
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

  return lang
}
