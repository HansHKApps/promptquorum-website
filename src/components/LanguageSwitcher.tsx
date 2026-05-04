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
