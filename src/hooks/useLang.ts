'use client'

import { useState, useEffect } from 'react'

export type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const VALID_LANGS: Lang[] = ['en', 'de', 'fr', 'ja', 'zh']

/**
 * Returns the current language from the ?lang= query param.
 * Defaults to 'en' on server/static render so all content is pre-rendered as English.
 * After hydration, reads window.location.search and updates on popstate events.
 */
export function useLang(initialLang?: Lang): Lang {
  const [lang, setLang] = useState<Lang>(initialLang ?? 'en')

  useEffect(() => {
    const read = () => {
      const params = new URLSearchParams(window.location.search)
      const rawLang = params.get('lang')

      // Treat ?lang=en same as no lang param (redirect to base URL)
      if (rawLang === 'en' && typeof window !== 'undefined') {
        const newUrl = window.location.pathname + window.location.hash
        window.history.replaceState({}, '', newUrl)
        setLang('en')
        return
      }

      // For other languages, validate and set
      if (rawLang && VALID_LANGS.includes(rawLang as Lang)) {
        setLang(rawLang as Lang)
      } else {
        setLang('en')
      }
    }
    read()
    window.addEventListener('popstate', read)
    return () => window.removeEventListener('popstate', read)
  }, [initialLang])

  return lang
}
