'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Language } from '../translations'
import { LOCALE_ROUTED_ROOTS } from '@/lib/i18n/constants'

interface LanguageSwitcherProps {
  initialLang?: Language
}

export function LanguageSwitcher({ initialLang }: LanguageSwitcherProps) {
  const currentLang = useLang(initialLang) as Language
  const [isOpen, setIsOpen] = useState(false)

  const languageNames: Record<Language, Record<Language, string>> = {
    en: { en: 'English', de: 'German', fr: 'French', ja: 'Japanese', zh: 'Chinese', es: 'Spanish', pt: 'Portuguese (Brazil)', ar: 'Arabic', ko: 'Korean' },
    de: { en: 'Englisch', de: 'Deutsch', fr: 'Französisch', ja: 'Japanisch', zh: 'Chinesisch', es: 'Spanisch', pt: 'Portugiesisch (Brasilien)', ar: 'Arabisch', ko: 'Koreanisch' },
    fr: { en: 'Anglais', de: 'Allemand', fr: 'Français', ja: 'Japonais', zh: 'Chinois', es: 'Espagnol', pt: 'Portugais (Brésil)', ar: 'Arabe', ko: 'Coréen' },
    ja: { en: '英語', de: 'ドイツ語', fr: 'フランス語', ja: '日本語', zh: '中国語', es: 'スペイン語', pt: 'ポルトガル語（ブラジル）', ar: 'アラビア語', ko: '韓国語' },
    zh: { en: '英文', de: '德文', fr: '法文', ja: '日文', zh: '中文', es: '西班牙文', pt: '葡萄牙文（巴西）', ar: '阿拉伯文', ko: '韓文' },
    es: { en: 'Inglés', de: 'Alemán', fr: 'Francés', ja: 'Japonés', zh: 'Chino', es: 'Español', pt: 'Portugués (Brasil)', ar: 'Árabe', ko: 'Coreano' },
    pt: { en: 'Inglês', de: 'Alemão', fr: 'Francês', ja: 'Japonês', zh: 'Chinês', es: 'Espanhol', pt: 'Português (Brasil)', ar: 'Árabe', ko: 'Coreano' },
    ar: { en: 'الإنجليزية', de: 'الألمانية', fr: 'الفرنسية', ja: 'اليابانية', zh: 'الصينية', es: 'الإسبانية', pt: 'البرتغالية (البرازيل)', ar: 'العربية', ko: '한국어' },
    ko: { en: 'English', de: 'Deutsch', fr: 'Français', ja: '日本語', zh: '中文', es: 'Español', pt: 'Português (Brasil)', ar: 'العربية', ko: '한국어' },
  }

  const languageCodes: { code: Language; flag: string; comingSoon?: boolean }[] = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'ja', flag: '🇯🇵' },
    { code: 'zh', flag: '🇨🇳' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'pt', flag: '🇧🇷' },
    { code: 'ar', flag: '🇸🇦' },
    { code: 'ko', flag: '🇰🇷' },
  ]

  const current = languageCodes.find(l => l.code === currentLang) || languageCodes[0]

  const handleLanguageChange = (lang: Language) => {
    window.umami?.track('language_switch', { from_lang: currentLang, to_lang: lang })
    document.cookie = `pq_lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`

    // Strip any existing locale prefix to get the canonical (English-shaped) path.
    const pathname = window.location.pathname
    const localeMatch = pathname.match(/^\/(de|fr|ja|zh|es|pt|ar|ko)(\/|$)/)
    const basePath = localeMatch ? pathname.slice(localeMatch[1].length + 1) || '/' : pathname

    // Only path-prefix-navigate for the home page and roots that actually have a /<lang>/
    // route folder (LOCALE_ROUTED_ROOTS — single source of truth, no more duplicated,
    // drifting cluster arrays). Everything else (/author, /impressum, /image-license, …) has
    // no localized variant, so switching language there just sets the cookie/preference and
    // stays put — never a ?lang= fallback (deprecated, see CLAUDE.md) and never a blind
    // path-prefix that would 404.
    const rootSegment = basePath === '/' ? null : basePath.split('/')[1]
    const isLocaleRouted = basePath === '/' || (rootSegment !== null && (LOCALE_ROUTED_ROOTS as readonly string[]).includes(rootSegment))
    if (!isLocaleRouted) {
      setIsOpen(false)
      return
    }

    const targetPath = lang === 'en' ? basePath : `/${lang}${basePath === '/' ? '' : basePath}`
    const target = new URL(targetPath, window.location.origin)
    target.search = ''
    target.hash = window.location.hash
    window.location.href = target.toString()
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
              {lang.comingSoon && (
                <span className="ml-auto text-xs text-gray-400">soon</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
