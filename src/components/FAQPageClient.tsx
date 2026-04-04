'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import Link from 'next/link'
import { FAQAccordion } from './FAQAccordion'

const T = {
  en: {
    h1: 'PromptQuorum FAQ: Frameworks, Privacy, AI Models & Getting Started',
    subtitle: 'Everything you need to know about PromptQuorum, pricing, privacy, and getting started.',
    ctaH2: 'Join the Waitlist for Early Access',
    ctaDesc: 'Early access includes lifetime premium features and priority support. Be among the first to try PromptQuorum when it launches.',
    ctaBtn: 'Join Waitlist',
    back: '← Back to Home',
  },
  de: {
    h1: 'PromptQuorum FAQ: Frameworks, Datenschutz, KI-Modelle & Erste Schritte',
    subtitle: 'Alles, was Sie über PromptQuorum, Preise, Datenschutz und den Einstieg wissen müssen.',
    ctaH2: 'Warteliste für frühen Zugang beitreten',
    ctaDesc: 'Früher Zugang umfasst lebenslange Premium-Funktionen und vorrangigen Support. Gehören Sie zu den Ersten, die PromptQuorum ausprobieren können.',
    ctaBtn: 'Warteliste beitreten',
    back: '← Zurück zur Startseite',
  },
  fr: {
    h1: 'FAQ PromptQuorum: Frameworks, Confidentialité, Modèles IA et Premiers Pas',
    subtitle: 'Tout ce que vous devez savoir sur PromptQuorum, les tarifs, la confidentialité et les premiers pas.',
    ctaH2: 'Rejoindre la liste d\'attente pour un accès anticipé',
    ctaDesc: 'L\'accès anticipé inclut des fonctionnalités premium à vie et un support prioritaire. Soyez parmi les premiers à essayer PromptQuorum.',
    ctaBtn: 'Rejoindre la liste d\'attente',
    back: '← Retour à l\'accueil',
  },
  ja: {
    h1: 'PromptQuorum FAQ: フレームワーク、プライバシー、AIモデル、はじめ方',
    subtitle: 'PromptQuorum、料金、プライバシー、使い始め方について知っておくべきことすべて。',
    ctaH2: '早期アクセスのウェイトリストに参加',
    ctaDesc: '早期アクセスは生涯プレミアム機能と優先サポートを含みます。PromptQuorum のローンチ時にいち早く試した最初のユーザーの一員になりましょう。',
    ctaBtn: 'ウェイトリストに参加',
    back: '← ホームに戻る',
  },
  zh: {
    h1: 'PromptQuorum FAQ: 框架、隐私、AI 模型与入门指南',
    subtitle: '关于 PromptQuorum、定价、隐私和入门您需要了解的一切。',
    ctaH2: '加入早期访问候补名单',
    ctaDesc: '早期访问包括终身高级功能和优先支持。成为首批尝试 PromptQuorum 的用户之一。',
    ctaBtn: '加入候补名单',
    back: '← 返回首页',
  },
}

function FAQContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)
  const t = T[lang] ?? T.en

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.h1}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <FAQAccordion lang={lang} />

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.ctaH2}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            {t.ctaBtn}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
            {t.back}
          </Link>
        </div>
      </div>
    </main>
  )
}

export function FAQPageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <FAQContent initialLang={initialLang} />
}
