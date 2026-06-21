import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function JaAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/ja/about',
              'name': 'PromptQuorumについて',
              'description': 'PromptQuorumはHans Kuepperが開発したプライバシー重視のマルチモデルAIディスパッチ＆コンセンサスツールです。',
              'inLanguage': 'ja',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/ja/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/ja/about',
              'jobTitle': '創業者・開発者',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://www.promptquorum.com/ja' },
                { '@type': 'ListItem', 'position': 2, 'name': '概要', 'item': 'https://www.promptquorum.com/ja/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">概要</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              AIの回答を信頼する必要がある人々のために構築されました。
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorumはマルチモデルAIディスパッチ＆コンセンサスツールです。すべてのモデルに1つのプロンプト。
              本当に信頼できる1つの評決。
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">開発者について</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">創業者・開発者、PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">経歴</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hansはドイツのバーデン＝ヴュルテンベルク州、ハイデルベルク近郊のクライヒガウに在住しています。
                    ドイツ語、英語、フランス語、ロシア語を流暢に話す多言語の独立系開発者です。
                    過去20年間にわたりヨーロッパ、アジアをはじめ世界20か国以上で生活・勤務し、
                    分散チームと協力しながらグローバルなユーザー向けのツールを開発してきました。
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">なぜPromptQuorumを作ったか</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorumはシンプルな不満から生まれました。信頼できる回答が必要なとき、
                    1つのAIモデルに問い合わせるだけでは不十分です。モデルによってハルシネーションの仕方が異なり、
                    犯すミスも、得意な推論のタイプも異なります。真実は重複する部分にあります——
                    5つの独立したモデルが同じ回答に合意したとき、1つのモデルだけが回答する場合よりも
                    信頼性が飛躍的に高まります。
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorumを構築する以前、Hansは企業のAIワークフローに長年携わり、同じ問題を繰り返し目にしました。
                    チームや組織が、採用決定、医療研究のサマリー、法的分析、リスク評価といった
                    高リスクな意思決定に単一モデルの出力をそのまま信頼し、
                    検証レイヤーもコンセンサスメカニズムも持たないという問題です。
                    高リスクな意思決定にはより良いものが必要です。PromptQuorumは彼が存在してほしかったツールです。
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">理念</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hansは、プライバシーとユーザーの自律性はAIツールにおいて譲れないものであると考えています。
                    PromptQuorumはシンプルな原則の上に構築されています。あなたのプロンプト、APIキー、回答はあなたのものです。
                    このツールはAIモデル間のコンセンサスと比較を容易にしますが、
                    PromptQuorumのサーバーを通過するものは何もありません。あなたがコントロールします。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/hanskuepper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/HansKuepperAPPs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://github.com/HansHKApps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@promptquorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      Substack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">PromptQuorumが存在する理由</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                すべての主要AIモデルはハルシネーションを起こします。GPT-4o、Claude、Gemini——どれも事実を捏造し、
                文脈を見落とし、自信たっぷりに聞こえる誤った回答を生成します。違いは、<em>どの</em>事実を
                誰が間違えるか、そして<em>いつ</em>かということです。
              </p>
              <p>
                5つの独立したモデルが同じ回答に合意したとき、5つすべてが同じ特定の詳細を捏造した確率は、
                1つのモデルだけが回答する場合よりも飛躍的に低くなります。
                コンセンサスは信頼性のシグナルです。PromptQuorumはそのシグナルを収集することを容易にします。
              </p>
              <p>
                2つ目の問題はプライバシーです。ほとんどのAIツールはプロンプトを自社のサーバーを通じてルーティングします。
                PromptQuorumはそうしません。あなたのAPIキーはブラウザから直接選択したプロバイダーに接続されます。
                PromptQuorumのインフラを通過するものは何もありません——あなたのプロンプトも、
                APIキーも、回答も。
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">製品概要</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'リリース', value: 'ベータ版 — 2026年7月' },
                { label: '料金', value: '無料。自分のAPIキーを持参。' },
                { label: 'プライバシーモデル', value: 'BYOM — サーバー転送なし' },
                { label: '対応AIモデル数', value: '25以上のクラウド + Ollama経由で無制限のローカル' },
                { label: 'プロンプトフレームワーク', value: '9種類内蔵 + カスタム2スロット' },
                { label: 'クォーラム分析タイプ', value: '13種類（ハルシネーション検出を含む）' },
                { label: 'オフラインサポート', value: '完全対応 — Ollama、LM Studio、Jan AI経由' },
                { label: '登録必須', value: 'なし。アプリを開いてすぐ開始。' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">お問い合わせ</h2>
            <p className="text-text-secondary mb-4">
              プレスに関するお問い合わせ、パートナーシップのご提案、フィードバックについては：
            </p>
            <a
              href="mailto:hello@promptquorum.com"
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@promptquorum.com
            </a>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/ja" className="text-primary hover:text-primary/80 font-medium text-sm">← ホーム</Link>
            <Link href="/ja/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">仕組み</Link>
            <Link href="/ja/compare" className="text-primary hover:text-primary/80 font-medium text-sm">ツールを比較</Link>
            <Link href="/ja/blog" className="text-primary hover:text-primary/80 font-medium text-sm">ブログ</Link>
          </div>

        </div>
      </div>
    </>
  )
}
