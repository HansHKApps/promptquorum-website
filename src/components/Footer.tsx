'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { CookieSettingsLink } from './CookieSettingsLink'
import type { Language } from '@/lib/geo-schema'

// Icons (minimal set for footer)
const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)
const Twitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)
const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)
const Discord = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.933 13.041a8.8 8.8 0 0 1-.817 4.438 8.356 8.356 0 0 1-7.078-.25 10.709 10.709 0 0 1-3.12-2.695 8.235 8.235 0 0 1-.697-3.127 8.391 8.391 0 0 1 .262-2.4l.445-.891a.459.459 0 0 0-.121-.515.457.457 0 0 0-.501-.269l-1.532.777a8.071 8.071 0 0 0-3.035-1.092 11.037 11.037 0 0 0-2.928.11L2.217 7.223a.459.459 0 0 0-.498.412.457.457 0 0 0 .193.51l1.358 1.358a8.6 8.6 0 0 0 1.674 2.867 8.086 8.086 0 0 0-.035 3.004.456.456 0 0 0 .333.371l1.477.616a.458.458 0 0 1 .234.65l-.51 1.477a.458.458 0 0 1-.456.288A8.328 8.328 0 0 0 8.4 20.8a8.694 8.694 0 0 0 5.053 1.567c2.35 0 4.564-.687 6.38-1.92a8.145 8.145 0 0 0 2.437-3.465.458.458 0 0 1 .647-.13l1.584.792a.458.458 0 0 1 .234.65l-.511 1.478a.458.458 0 0 1-.456.287zM8.02 15.278c-.99 0-1.82-.36-2.495-1.073a3.402 3.402 0 0 1-.87-2.263c.022-.086.044-.173.044-.264 0-1.035.806-1.866 1.79-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51zm7.072 0c-.99 0-1.808-.358-2.48-1.067a3.4 3.4 0 0 1-.868-2.263c.022-.084.044-.173.044-.264 0-1.035.805-1.866 1.789-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51z"/></svg>
)
const YouTube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
)
const Substack = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
)

const ACTIVE_LANGS: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
]

const FOOTER_COPY: Record<Language, Record<string, string>> = {
  en: {
    copyright: '© 2026 PromptQuorum. All rights reserved.',
    worldwide: '🌍 Available worldwide',
    about: 'About',
    frameworks: 'Frameworks',
    privacy: 'Privacy Policy',
    impressum: 'Impressum',
    contact: 'hello@promptquorum.com',
  },
  de: {
    copyright: '© 2026 PromptQuorum. Alle Rechte vorbehalten.',
    worldwide: '🌍 Weltweit verfügbar',
    about: 'Über uns',
    frameworks: 'Frameworks',
    privacy: 'Datenschutzerklärung',
    impressum: 'Impressum',
    contact: 'hello@promptquorum.com',
  },
  fr: {
    copyright: '© 2026 PromptQuorum. Tous droits réservés.',
    worldwide: '🌍 Disponible mondialement',
    about: 'À propos',
    frameworks: 'Frameworks',
    privacy: 'Politique de confidentialité',
    impressum: 'Mentions légales',
    contact: 'hello@promptquorum.com',
  },
  ja: {
    copyright: '© 2026 PromptQuorum. すべての権利を保有しています。',
    worldwide: '🌍 世界中で利用可能',
    about: 'について',
    frameworks: 'Frameworks',
    privacy: 'プライバシーポリシー',
    impressum: '法務',
    contact: 'hello@promptquorum.com',
  },
  zh: {
    copyright: '© 2026 PromptQuorum. 版权所有。',
    worldwide: '🌍 全球可用',
    about: '关于',
    frameworks: 'Frameworks',
    privacy: '隐私政策',
    impressum: '法律声明',
    contact: 'hello@promptquorum.com',
  },
  es: {
    copyright: '© 2026 PromptQuorum. Todos los derechos reservados.',
    worldwide: '🌍 Disponible en todo el mundo',
    about: 'Acerca de',
    frameworks: 'Frameworks',
    privacy: 'Política de privacidad',
    impressum: 'Aviso legal',
    contact: 'hello@promptquorum.com',
  },
  pt: {
    copyright: '© 2026 PromptQuorum. Todos os direitos reservados.',
    worldwide: '🌍 Disponível em todo o mundo',
    about: 'Sobre',
    frameworks: 'Frameworks',
    privacy: 'Política de Privacidade',
    impressum: 'Aviso Legal',
    contact: 'hello@promptquorum.com',
  },
  ar: {
    copyright: '© 2026 PromptQuorum. جميع الحقوق محفوظة.',
    worldwide: '🌍 متاح في جميع أنحاء العالم',
    about: 'حول',
    frameworks: 'Frameworks',
    privacy: 'سياسة الخصوصية',
    impressum: 'الإشعار القانوني',
    contact: 'hello@promptquorum.com',
  },
  ko: {
    copyright: '© 2026 PromptQuorum. 모든 권리 보유.',
    worldwide: '🌍 전 세계 이용 가능',
    about: '소개',
    frameworks: '프레임워크',
    privacy: '개인 정보 처리 방침',
    impressum: '법적 고지',
    contact: 'hello@promptquorum.com',
  },
}

export function Footer({ lang = 'en' }: { lang?: Language }) {
  const t = FOOTER_COPY[lang] || FOOTER_COPY['en']
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const NON_EN_LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar'] as const

  // Roots that are path-prefix routed for all non-EN langs (/de/<path>, …).
  // Keep in sync with PATH_LOCALE_CLUSTERS + PATH_PREFIX_LANG_CLUSTERS in src/middleware.ts.
  const PATH_PREFIX_ROOTS = [
    'power-local-llm', 'prompt-bites', 'smart-home',
    'prompt-engineering', 'local-llms', 'blog', 'frameworks',
    'compare', 'features', 'how-it-works', 'faq', 'about', 'privacy',
  ]

  const hrefFor = (code: Language) => {
    let basePath = pathname
    let wasPathPrefixed = false
    for (const lang of NON_EN_LANGS) {
      if (pathname === `/${lang}`) {
        basePath = '/'
        wasPathPrefixed = true
        break
      }
      if (pathname.startsWith(`/${lang}/`)) {
        basePath = pathname.slice(`/${lang}`.length)
        wasPathPrefixed = true
        break
      }
    }

    if (code === 'en') {
      const params = new URLSearchParams(searchParams)
      params.delete('lang')
      const qs = params.toString()
      return qs ? `${basePath}?${qs}` : basePath
    }

    // Path-prefix routing: home and any path under a path-prefix-routed root resolve to
    // /<lang>/<path> (subdirectory), mirroring the in-article "Read in:" links — never ?lang=.
    const isPathPrefixRouted =
      basePath === '/' ||
      PATH_PREFIX_ROOTS.some((c) => basePath === `/${c}` || basePath.startsWith(`/${c}/`))
    if (wasPathPrefixed || isPathPrefixRouted) {
      return `/${code}${basePath}`
    }

    // Legacy fallback for English-only/static paths that have no /<lang>/ route.
    const params = new URLSearchParams(searchParams)
    params.set('lang', code)
    return `${basePath}?${params.toString()}`
  }

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8" width={32} height={32} />
            <span className="font-semibold text-text-primary">PromptQuorum</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on GitHub" className="text-text-muted hover:text-primary transition-colors">
              <Github />
            </a>
            <a href="https://x.com/HansKuepperAPPs" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on X (Twitter)" className="text-text-muted hover:text-primary transition-colors">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/company/promptquorum" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on LinkedIn" className="text-text-muted hover:text-primary transition-colors">
              <Linkedin />
            </a>
            <a href="https://discord.com/channels/1482063293509271724/1482063418113396736" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum Discord community" className="text-text-muted hover:text-primary transition-colors">
              <Discord />
            </a>
            <a href="https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on YouTube" className="text-text-muted hover:text-primary transition-colors">
              <YouTube />
            </a>
            <a href="https://substack.com/@promptquorum" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on Substack" className="text-text-muted hover:text-primary transition-colors">
              <Substack />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-3 text-text-muted text-sm">
          <div>{t.copyright}</div>
          <div className="flex items-center justify-center gap-2">
            <span>{t.worldwide}</span>
            <span>•</span>
            <span className="flex flex-wrap gap-x-1 justify-center">
              {ACTIVE_LANGS.map((l, i) => (
                <span key={l.code}>
                  {i > 0 && <span className="text-gray-300 mx-0.5">,</span>}
                  <a
                    href={hrefFor(l.code)}
                    className={l.code === lang ? 'font-semibold text-text-primary' : 'hover:text-primary transition-colors'}
                    aria-current={l.code === lang ? 'page' : undefined}
                  >
                    {l.label}
                  </a>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            <a href="/about" className="hover:text-primary transition-colors">{t.about}</a>
            <span aria-hidden="true">•</span>
            <a href="/frameworks" className="hover:text-primary transition-colors">{t.frameworks}</a>
            <span aria-hidden="true">•</span>
            <a href="/privacy" className="hover:text-primary transition-colors">{t.privacy}</a>
            <span aria-hidden="true">•</span>
            <a href="/impressum" className="hover:text-primary transition-colors">{t.impressum}</a>
            <span aria-hidden="true">•</span>
            <CookieSettingsLink lang={lang} />
            <span aria-hidden="true">•</span>
            <a href="mailto:hello@promptquorum.com" className="hover:text-primary transition-colors">{t.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
