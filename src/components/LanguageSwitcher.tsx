'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Language } from '../translations'

interface LanguageSwitcherProps {
  initialLang?: Language
}

export function LanguageSwitcher({ initialLang }: LanguageSwitcherProps) {
  const currentLang = useLang(initialLang) as Language
  const [isOpen, setIsOpen] = useState(false)

  const languageNames: Record<Language, Record<Language, string>> = {
    en: { en: 'English', de: 'German', fr: 'French', ja: 'Japanese', zh: 'Chinese' },
    de: { en: 'Englisch', de: 'Deutsch', fr: 'Französisch', ja: 'Japanisch', zh: 'Chinesisch' },
    fr: { en: 'Anglais', de: 'Allemand', fr: 'Français', ja: 'Japonais', zh: 'Chinois' },
    ja: { en: '英語', de: 'ドイツ語', fr: 'フランス語', ja: '日本語', zh: '中国語' },
    zh: { en: '英文', de: '德文', fr: '法文', ja: '日文', zh: '中文' },
  }

  const languageCodes: { code: Language; flag: string }[] = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'ja', flag: '🇯🇵' },
    { code: 'zh', flag: '🇨🇳' },
  ]

  const current = languageCodes.find(l => l.code === currentLang) || languageCodes[0]

  const handleLanguageChange = (lang: Language) => {
    window.umami?.track('language_switch', { from_lang: currentLang, to_lang: lang })
    document.cookie = `pq_lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
    // Path-prefix-routed clusters for ALL non-EN langs (e.g. power-local-llm).
    // Keep in sync with PATH_LOCALE_CLUSTERS in src/middleware.ts.
    const PATH_LOCALE_CLUSTERS = ['power-local-llm', 'prompt-bites']

    // Path-prefix-routed clusters for all non-EN languages (JA, ZH, DE, FR).
    // Keep in sync with PATH_PREFIX_LANG_CLUSTERS in src/middleware.ts.
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

    const pathname = window.location.pathname

    // --- Check 1: All-langs path-prefix cluster (e.g. power-local-llm) ---
    // Match: /<cluster> or /<cluster>/... or /<lang>/<cluster> or /<lang>/<cluster>/...
    const clusterMatch = pathname.match(
      new RegExp(`^(?:/(de|fr|ja|zh))?/(${PATH_LOCALE_CLUSTERS.join('|')})(/.*)?$`)
    )
    if (clusterMatch) {
      const cluster = clusterMatch[2]
      const rest = clusterMatch[3] ?? ''
      const targetPath = lang === 'en' ? `/${cluster}${rest}` : `/${lang}/${cluster}${rest}`
      const target = new URL(targetPath, window.location.origin)
      target.search = ''
      target.hash = window.location.hash
      window.location.href = target.toString()
      return
    }

    // --- Check 2: Path-prefix-lang cluster (all non-EN: JA/ZH/DE/FR) ---
    // Two sub-cases:
    //   A. Currently at /<lang>/<cluster>/... → handle all language switches from a path-prefix path
    //   B. Currently at /<cluster>/... → handle switch TO any language
    const pathPrefixLangClusterMatch = pathname.match(
      new RegExp(`^(?:/(de|fr|ja|zh))?/(${PATH_PREFIX_LANG_CLUSTERS.join('|')})(/.*)?$`)
    )

    if (pathPrefixLangClusterMatch) {
      const cluster = pathPrefixLangClusterMatch[2]
      const rest = pathPrefixLangClusterMatch[3] ?? ''

      if (lang === 'en') {
        // Any origin → English: strip language prefix if present, drop ?lang=
        const target = new URL(`/${cluster}${rest}`, window.location.origin)
        target.search = ''
        target.hash = window.location.hash
        window.location.href = target.toString()
        return
      }

      // Any origin → non-EN (JA/ZH/DE/FR): path-navigate to /<lang>/<cluster>/<rest>
      const target = new URL(`/${lang}/${cluster}${rest}`, window.location.origin)
      target.search = ''
      target.hash = window.location.hash
      window.location.href = target.toString()
      return
    }

    // --- Check 3: Home page (/, /de, /de/, /fr, /fr/, /ja, /ja/, /zh, /zh/) ---
    // Handle home page path-prefix for all non-EN languages.
    const isHome = pathname === '/' || pathname === '/de' || pathname === '/de/' || pathname === '/fr' || pathname === '/fr/' || pathname === '/ja' || pathname === '/ja/' || pathname === '/zh' || pathname === '/zh/'
    if (isHome) {
      if (lang === 'en') {
        window.location.href = window.location.origin + '/'
        return
      }
      window.location.href = window.location.origin + `/${lang}`
      return
    }

    // --- Default: query-string-routed clusters ---
    // mutate ?lang= and stay client-side via pushState.
    const url = new URL(window.location.href)
    if (lang === 'en') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', lang)
    }
    window.history.pushState({}, '', url.toString())
    window.dispatchEvent(new PopStateEvent('popstate'))
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors text-sm"
      >
        <span>{current.flag}</span>
        <span className="text-text-secondary">{current.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
          {languageCodes.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 ${currentLang === lang.code ? 'bg-primary/5 text-primary' : 'text-text-primary'}`}
            >
              <span>{lang.flag}</span>
              <span>{languageNames[currentLang][lang.code]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
