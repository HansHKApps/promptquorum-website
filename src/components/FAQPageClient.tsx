'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import Link from 'next/link'
import { FAQAccordion } from './FAQAccordion'

const T = {
  en: {
    h1: 'Privacy-First Local Workflow — FAQs',
    subtitle: 'Everything you need to know about PromptQuorum, pricing, privacy, and getting started.',
    ctaH2: 'Ready to Transform Your Prompts?',
    ctaDesc: 'Join the waitlist and be the first to know when we launch. Early access members get exclusive features and priority support.',
    ctaBtn: 'Join Waitlist',
    back: '← Back to Home',
  },
  de: {
    h1: 'Datenschutz-First-Workflow — Häufige Fragen',
    subtitle: 'Alles, was Sie über PromptQuorum, Preise, Datenschutz und den Einstieg wissen müssen.',
    ctaH2: 'Bereit, Ihre Prompts zu transformieren?',
    ctaDesc: 'Tragen Sie sich in die Warteliste ein und erfahren Sie als Erster, wenn wir starten. Frühzeitige Mitglieder erhalten exklusive Funktionen und vorrangigen Support.',
    ctaBtn: 'Warteliste beitreten',
    back: '← Zurück zur Startseite',
  },
  fr: {
    h1: 'Workflow local axé sur la confidentialité — FAQ',
    subtitle: 'Tout ce que vous devez savoir sur PromptQuorum, les tarifs, la confidentialité et les premiers pas.',
    ctaH2: 'Prêt à transformer vos prompts ?',
    ctaDesc: 'Rejoignez la liste d\'attente et soyez le premier informé du lancement. Les membres en accès anticipé bénéficient de fonctionnalités exclusives et d\'un support prioritaire.',
    ctaBtn: 'Rejoindre la liste d\'attente',
    back: '← Retour à l\'accueil',
  },
  ja: {
    h1: 'プライバシー優先のローカルワークフロー — よくある質問',
    subtitle: 'PromptQuorum、料金、プライバシー、使い始め方について知っておくべきことすべて。',
    ctaH2: 'プロンプトを変革する準備はできましたか？',
    ctaDesc: 'ウェイトリストに参加して、ローンチ時にいち早くお知らせを受け取りましょう。早期アクセスメンバーは限定機能と優先サポートを利用できます。',
    ctaBtn: 'ウェイトリストに参加',
    back: '← ホームに戻る',
  },
  zh: {
    h1: '隐私优先的本地工作流程 — 常见问题',
    subtitle: '关于 PromptQuorum、定价、隐私和入门您需要了解的一切。',
    ctaH2: '准备好改变您的提示词了吗？',
    ctaDesc: '加入候补名单，第一时间获知我们的发布消息。早期成员可获得专属功能和优先支持。',
    ctaBtn: '加入候补名单',
    back: '← 返回首页',
  },
}

function FAQContent() {
  const lang = useLang()
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

export function FAQPageClient() {
  return <FAQContent />
}
