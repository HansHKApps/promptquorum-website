'use client'

import { useLang } from '@/hooks/useLang'
import { translations } from '@/translations'
import type { Language } from '@/translations'

interface LangLinksBarProps {
  cluster: string
  slug: string
  availableLangs: string[]
  initialLang?: Language
}

export function LangLinksBar({ cluster, slug, availableLangs, initialLang }: LangLinksBarProps) {
  const currentLang = useLang(initialLang) as Language

  const languages: { code: Language; flag: string }[] = [
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

  const buildHref = (lang: Language): string => {
    const isAvailable = availableLangs.includes(lang)
    const basePath = slug ? `${cluster}/${slug}` : cluster

    if (lang === 'en') {
      return isAvailable ? `/${basePath}` : `/${cluster}`
    }

    return isAvailable ? `/${lang}/${basePath}` : `/${lang}/${cluster}`
  }

  return (
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm text-text-secondary">{translations[currentLang as keyof typeof translations].readIn}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {languages.map(({ code, flag }) => {
          const href = buildHref(code)
          const isActive = currentLang === code
          return (
            <a
              key={code}
              href={href}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text-primary hover:bg-gray-200'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span>{flag}</span>
              <span className="uppercase">{code}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
