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
      const l = params.get('lang') as Lang
      setLang(VALID_LANGS.includes(l) ? l : (initialLang ?? 'en'))
    }
    read()
    window.addEventListener('popstate', read)
    return () => window.removeEventListener('popstate', read)
  }, [initialLang])

  return lang
}
