'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { LanguageSwitcherWrapper } from './LanguageSwitcherWrapper'
import { SearchTrigger } from './search/SearchTrigger'
import { useWaitlist } from '@/context/WaitlistContext'
import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Language } from '../translations'

const NAV_LABELS: Record<string, Record<string, string>> = {
  compare: {
    en: 'Compare Tools',
    de: 'Tools vergleichen',
    fr: 'Comparer les outils',
    ja: 'ツール比較',
    zh: '工具对比',
    es: 'Comparar herramientas',
    pt: 'Comparar ferramentas', // VERIFY
    ko: '도구 비교',
    ar: 'مقارنة الأدوات',
  },
  features: {
    en: 'Features',
    de: 'Funktionen',
    fr: 'Fonctionnalités',
    ja: '機能',
    zh: '功能',
    es: 'Características',
    pt: 'Recursos', // VERIFY
    ko: '기능',
    ar: 'الميزات',
  },
  howItWorks: {
    en: 'How It Works',
    de: 'So funktioniert es',
    fr: 'Comment ça marche',
    ja: '使い方',
    zh: '使用说明',
    es: 'Cómo funciona',
    pt: 'Como funciona', // VERIFY
    ko: '작동 방식',
    ar: 'كيف يعمل',
  },
  faq: {
    en: 'FAQ',
    de: 'FAQ',
    fr: 'FAQ',
    ja: 'よくある質問',
    zh: '常见问题',
    es: 'FAQ',
    pt: 'FAQ', // VERIFY
    ko: 'FAQ',
    ar: 'الأسئلة الشائعة',
  },
  blog: {
    en: 'Blog',
    de: 'Blog',
    fr: 'Blog',
    ja: 'ブログ',
    zh: '博客',
    es: 'Blog',
    pt: 'Blog', // VERIFY
    ko: '블로그',
    ar: 'المدونة',
  },
  promptEngineering: {
    en: 'Prompt Engineering',
    de: 'Prompt Engineering',
    fr: 'Prompt Engineering',
    ja: 'プロンプト設計',
    zh: '提示词工程',
    es: 'Prompt Engineering',
    pt: 'Prompt Engineering', // VERIFY
    ko: '프롬프트 엔지니어링',
    ar: 'هندسة التعليمات',
  },
  localLlms: {
    en: 'Local LLMs',
    de: 'Lokale LLMs',
    fr: 'LLMs locaux',
    ja: 'ローカルLLM',
    zh: '本地LLM',
    es: 'LLMs locales',
    pt: 'LLMs locais', // VERIFY
    ko: '로컬 LLM',
    ar: 'نماذج محلية',
  },
  powerLocalLlm: {
    en: 'Power Local LLM',
    de: 'Lokale LLMs Pro',
    fr: 'LLM locaux avancés',
    ja: 'ローカルLLM活用',
    zh: '本地LLM进阶',
    es: 'LLM locales avanzados',
    pt: 'LLMs locais avançados',
    ko: '로컬 LLM 활용',
    ar: 'نماذج محلية متقدمة',
  },
  promptBites: {
    en: 'Prompt Bites',
    de: 'Prompt-Häppchen',
    fr: 'Prompts en bref',
    ja: 'プロンプト早わかり',
    zh: '提示词速答',
    es: 'Prompts en breve',
    pt: 'Prompts em resumo',
    ko: '프롬프트 한입',
    ar: 'تعليمات سريعة',
  },
  smartHome: {
    // Labels match the term each locale's cluster content uses (not machine-translated).
    en: 'Smart Home',
    de: 'Smart Home',
    fr: 'Maison connectée',
    ja: 'スマートホーム',
    zh: '智能家居',
    es: 'Smart Home',
    pt: 'Casa inteligente',
    ko: '스마트 홈',
    ar: 'المنزل الذكي',
  },
  balconySolar: {
    // Labels match the primary term used in each locale's cluster articles.
    en: 'Balcony Solar',
    de: 'Balkonkraftwerk',
    fr: 'Solaire balcon',
    ja: 'ベランダ太陽光',
    zh: '阳台光伏',
    es: 'Solar de balcón',
    pt: 'Solar de varanda',
    ko: '베란다 태양광',
    ar: 'طاقة شمسية للشرفة',
  },
  waitlist: {
    en: 'Try Beta',
    de: 'Beta testen',
    fr: 'Essayer la bêta',
    ja: 'ベータを試す',
    zh: '试用测试版',
    es: 'Probar la beta',
    pt: 'Testar a Beta',
    ko: '베타 체험',
    ar: 'جرّب النسخة التجريبية',
  },
  skipToMain: {
    en: 'Skip to main content',
    de: 'Zum Hauptinhalt springen',
    fr: 'Aller au contenu principal',
    ja: 'メインコンテンツへスキップ',
    zh: '跳转到主要内容',
    es: 'Ir al contenido principal',
    pt: 'Pular para o conteúdo principal', // VERIFY
    ko: '본문으로 건너뛰기',
    ar: 'تخطى إلى المحتوى الرئيسي',
  },
}

function t(key: string, lang: string) {
  return NAV_LABELS[key]?.[lang] ?? NAV_LABELS[key]?.['en'] ?? key
}

function navHref(path: string, lang: string) {
  if (lang !== 'en') return path === '/' ? `/${lang}` : `/${lang}${path}`
  return path
}

// Path-prefix clusters use /lang/cluster instead of ?lang=XX.
function powerLocalLlmHref(lang: string) {
  return lang === 'en' ? '/power-local-llm' : `/${lang}/power-local-llm`
}

function promptBitesHref(lang: string) {
  return lang === 'en' ? '/prompt-bites' : `/${lang}/prompt-bites`
}

function smartHomeHref(lang: string) {
  return lang === 'en' ? '/smart-home' : `/${lang}/smart-home`
}

function balconySolarHref(lang: string) {
  return lang === 'en' ? '/balcony-solar' : `/${lang}/balcony-solar`
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-3 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow focus:outline focus:outline-2 focus:outline-purple-600"
      >
        {t('skipToMain', lang)}
      </a>
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link prefetch={false} href={navHref('/', lang)} className="flex items-center gap-2 flex-shrink-0">
          <Logo size={36} className="w-9 h-9 flex-shrink-0" />
          <span className="font-semibold text-gray-900 whitespace-nowrap">PromptQuorum</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-6">
          <Link prefetch={false} href={navHref('/compare', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('compare', lang)}</Link>
          <Link prefetch={false} href={navHref('/features', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('features', lang)}</Link>
          <Link prefetch={false} href={navHref('/how-it-works', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('howItWorks', lang)}</Link>
          <Link prefetch={false} href={navHref('/faq', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('faq', lang)}</Link>
          <Link prefetch={false} href={navHref('/blog', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('blog', lang)}</Link>
          <Link prefetch={false} href={navHref('/prompt-engineering', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('promptEngineering', lang)}</Link>
          <Link prefetch={false} href={navHref('/local-llms', lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('localLlms', lang)}</Link>
          <Link prefetch={false} href={powerLocalLlmHref(lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('powerLocalLlm', lang)}</Link>
          <Link prefetch={false} href={promptBitesHref(lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('promptBites', lang)}</Link>
          <Link prefetch={false} href={smartHomeHref(lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('smartHome', lang)}</Link>
          <Link prefetch={false} href={balconySolarHref(lang)} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">{t('balconySolar', lang)}</Link>
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
          >
            {t('waitlist', lang)}
          </a>
        </nav>

        {/* Search + Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <SearchTrigger />

          {/* Hide language switcher on screens below sm (640px), show on sm+ */}
          <div className="hidden sm:block">
            <LanguageSwitcherWrapper initialLang={lang as Language} />
          </div>

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
      <div
        className={`lg:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2 transition-opacity duration-150 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Language Selector in Mobile Menu */}
        <div className="sm:hidden mb-2 pb-2 border-b border-gray-200">
          <LanguageSwitcherWrapper initialLang={lang as Language} />
        </div>

        <Link prefetch={false}
          href={navHref('/compare', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('compare', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/features', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('features', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/how-it-works', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('howItWorks', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/faq', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('faq', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/blog', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('blog', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/prompt-engineering', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('promptEngineering', lang)}
        </Link>
        <Link prefetch={false}
          href={navHref('/local-llms', lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('localLlms', lang)}
        </Link>
        <Link prefetch={false}
          href={powerLocalLlmHref(lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('powerLocalLlm', lang)}
        </Link>
        <Link prefetch={false}
          href={promptBitesHref(lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('promptBites', lang)}
        </Link>
        <Link prefetch={false}
          href={smartHomeHref(lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('smartHome', lang)}
        </Link>
        <Link prefetch={false}
          href={balconySolarHref(lang)}
          className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('balconySolar', lang)}
        </Link>
        <a
          href="#waitlist"
          onClick={handleWaitlistClick}
          className="block px-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors"
        >
          {t('waitlist', lang)}
        </a>
      </div>
    </header>
  )
}

export function HeaderClient() {
  return <HeaderInner />
}
