'use client'

import Link from 'next/link'
import { LanguageSwitcherWrapper } from './LanguageSwitcherWrapper'
import { useWaitlist } from '@/context/WaitlistContext'
import { useState } from 'react'
import { useLang } from '@/hooks/useLang'

const NAV_LABELS: Record<string, Record<string, string>> = {
  compare: {
    en: 'Compare Models',
    de: 'Modelle vergleichen',
    fr: 'Comparer les modèles',
    ja: 'モデル比較',
    zh: '模型对比',
  },
  features: {
    en: 'Features',
    de: 'Funktionen',
    fr: 'Fonctionnalités',
    ja: '機能',
    zh: '功能',
  },
  howItWorks: {
    en: 'How It Works',
    de: 'So funktioniert es',
    fr: 'Comment ça marche',
    ja: '使い方',
    zh: '使用说明',
  },
  faq: {
    en: 'FAQ',
    de: 'FAQ',
    fr: 'FAQ',
    ja: 'よくある質問',
    zh: '常见问题',
  },
  blog: {
    en: 'Blog',
    de: 'Blog',
    fr: 'Blog',
    ja: 'ブログ',
    zh: '博客',
  },
  waitlist: {
    en: 'Waitlist',
    de: 'Warteliste',
    fr: 'Liste d\'attente',
    ja: '順番待ちリスト',
    zh: '候补名单',
  },
}

function t(key: string, lang: string) {
  return NAV_LABELS[key]?.[lang] ?? NAV_LABELS[key]?.['en'] ?? key
}

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

function HeaderInner() {
  const { openWaitlist } = useWaitlist()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lang = useLang()

  const handleWaitlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    openWaitlist()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={navHref('/', lang)} className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="PromptQuorum" className="w-9 h-9 flex-shrink-0" />
          <span className="font-semibold text-gray-900 whitespace-nowrap">PromptQuorum</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-6">
          <Link href={navHref('/compare', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('compare', lang)}</Link>
          <Link href={navHref('/features', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('features', lang)}</Link>
          <Link href={navHref('/how-it-works', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('howItWorks', lang)}</Link>
          <Link href={navHref('/faq', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('faq', lang)}</Link>
          <Link href={navHref('/blog', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('blog', lang)}</Link>
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
          >
            {t('waitlist', lang)}
          </a>
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcherWrapper />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-3 space-y-2">
          <Link
            href={navHref('/compare', lang)}
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('compare', lang)}
          </Link>
          <Link
            href={navHref('/features', lang)}
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('features', lang)}
          </Link>
          <Link
            href={navHref('/how-it-works', lang)}
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('howItWorks', lang)}
          </Link>
          <Link
            href={navHref('/faq', lang)}
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('faq', lang)}
          </Link>
          <Link
            href={navHref('/blog', lang)}
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('blog', lang)}
          </Link>
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className="block px-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors"
          >
            {t('waitlist', lang)}
          </a>
        </div>
      )}
    </header>
  )
}

export function HeaderClient() {
  return <HeaderInner />
}
