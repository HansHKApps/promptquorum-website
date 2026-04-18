'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import Link from 'next/link'
import { FAQAccordion } from './FAQAccordion'

const T = {
  en: {
    h1: 'PromptQuorum FAQ: Frameworks, Privacy, AI Models & Getting Started',
    subtitle: 'Everything you need to know about PromptQuorum, pricing, privacy, and getting started.',
    founderH2: 'About the Founder',
    founderTitle: 'Founder & Developer, PromptQuorum',
    founderBio: 'Hans Kuepper is an independent developer based in Baden-Württemberg, Germany, who speaks four languages and has worked in 20+ countries. He built PromptQuorum because teams need a verification layer for AI-generated answers — a way to detect when models hallucinate by comparing outputs across multiple models. Privacy is non-negotiable: your prompts and API keys never touch PromptQuorum servers.',
    ctaH2: 'Join the Waitlist for Early Access',
    ctaDesc: 'Early access includes lifetime premium features and priority support. Be among the first to try PromptQuorum when it launches.',
    ctaBtn: 'Join Waitlist',
    back: '← Back to Home',
  },
  de: {
    h1: 'PromptQuorum FAQ: Frameworks, Datenschutz, KI-Modelle & Erste Schritte',
    subtitle: 'Alles, was Sie über PromptQuorum, Preise, Datenschutz und den Einstieg wissen müssen.',
    founderH2: 'Über den Gründer',
    founderTitle: 'Gründer & Entwickler, PromptQuorum',
    founderBio: 'Hans Kuepper ist ein unabhängiger Entwickler aus Baden-Württemberg, Deutschland, der vier Sprachen spricht und in über 20 Ländern gelebt und gearbeitet hat. Er entwickelte PromptQuorum, weil Teams eine Verifikationsebene für KI-generierte Antworten benötigen — eine Möglichkeit, Halluzinationen zu erkennen, indem Ausgaben mehrerer Modelle verglichen werden. Datenschutz ist nicht verhandelbar: Ihre Prompts und API-Schlüssel berühren niemals PromptQuorum-Server.',
    ctaH2: 'Warteliste für frühen Zugang beitreten',
    ctaDesc: 'Früher Zugang umfasst lebenslange Premium-Funktionen und vorrangigen Support. Gehören Sie zu den Ersten, die PromptQuorum ausprobieren können.',
    ctaBtn: 'Warteliste beitreten',
    back: '← Zurück zur Startseite',
  },
  fr: {
    h1: 'FAQ PromptQuorum: Frameworks, Confidentialité, Modèles IA et Premiers Pas',
    subtitle: 'Tout ce que vous devez savoir sur PromptQuorum, les tarifs, la confidentialité et les premiers pas.',
    founderH2: 'À propos du fondateur',
    founderTitle: 'Fondateur & Développeur, PromptQuorum',
    founderBio: 'Hans Kuepper est un développeur indépendant basé en Bade-Wurtemberg, Allemagne, qui parle quatre langues et a travaillé dans plus de 20 pays. Il a créé PromptQuorum parce que les équipes ont besoin d\'une couche de vérification pour les réponses générées par l\'IA — un moyen de détecter les hallucinations en comparant les résultats de plusieurs modèles. La confidentialité est non-négociable : vos prompts et clés API ne passent jamais par les serveurs PromptQuorum.',
    ctaH2: 'Rejoindre la liste d\'attente pour un accès anticipé',
    ctaDesc: 'L\'accès anticipé inclut des fonctionnalités premium à vie et un support prioritaire. Soyez parmi les premiers à essayer PromptQuorum.',
    ctaBtn: 'Rejoindre la liste d\'attente',
    back: '← Retour à l\'accueil',
  },
  ja: {
    h1: 'PromptQuorum FAQ: フレームワーク、プライバシー、AIモデル、はじめ方',
    subtitle: 'PromptQuorum、料金、プライバシー、使い始め方について知っておくべきことすべて。',
    founderH2: '創設者について',
    founderTitle: '創設者 & 開発者、PromptQuorum',
    founderBio: 'ハンス・キュッパーはドイツのバーデン＝ヴュルテンベルク州を拠点とする独立系開発者で、4か国語を話し、20か国以上で生活・勤務経験があります。チームはAI生成の回答を検証する必要があると考え、複数のモデルの出力を比較することで幻覚を検出する方法としてPromptQuorumを構築しました。プライバシーは譲歩できません。あなたのプロンプトとAPIキーはPromptQuorumのサーバーを通過しません。',
    ctaH2: '早期アクセスのウェイトリストに参加',
    ctaDesc: '早期アクセスは生涯プレミアム機能と優先サポートを含みます。PromptQuorum のローンチ時にいち早く試した最初のユーザーの一員になりましょう。',
    ctaBtn: 'ウェイトリストに参加',
    back: '← ホームに戻る',
  },
  zh: {
    h1: 'PromptQuorum FAQ: 框架、隐私、AI 模型与入门指南',
    subtitle: '关于 PromptQuorum、定价、隐私和入门您需要了解的一切。',
    founderH2: '关于创始人',
    founderTitle: '创始人 & 开发者，PromptQuorum',
    founderBio: '汉斯·库佩尔是一位独立开发者，位于德国巴登-符腾堡州，会说四种语言，曾在20多个国家生活和工作。他创建PromptQuorum是因为团队需要一个验证层来确保AI生成的答案——通过比较多个模型的输出来检测幻觉。隐私不可妥协：您的提示和API密钥永远不会经过PromptQuorum的服务器。',
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

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.founderH2}</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/hans-kuepper.jpg"
                  alt="Hans Kuepper, Founder of PromptQuorum"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Hans Kuepper</h3>
                <p className="text-sm text-purple-600 font-medium mb-4">{t.founderTitle}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t.founderBio}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/hanskuepper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/HansKuepperAPPs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    About Page →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
