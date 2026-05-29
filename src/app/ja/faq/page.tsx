import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function JaFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="ja" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'ja',
            mainEntity: [
              { '@type': 'Question', name: 'PromptQuorumは無料ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、無料でご利用いただけます。独自のAPIキーを持ち込むか、ローカルLLMを使用するか、テスト用の無料バックエンドサービスをお試しいただけます。' } },
              { '@type': 'Question', name: 'プライバシーはどう機能しますか？', acceptedAnswer: { '@type': 'Answer', text: 'データの行き先はあなたが決めます。LM StudioやOllamaですべてローカルに保つか、独自のAPIキーを使用してください。テレメトリーなし、追跡なし、データ収集なし — 匿名の使用統計さえも収集しません。' } },
              { '@type': 'Question', name: 'どのAIプロバイダーがサポートされていますか？', acceptedAnswer: { '@type': 'Answer', text: '25以上のAIプロバイダーが含まれています：OpenAI（GPT-4、GPT-4o）、Anthropic（Claude）、Google Gemini、Grok、DeepSeek、Mistral、Cohere、Together AI、Groq、OpenRouter、そすべてのローカルプロバイダー（Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、KoboldCpp、vLLM、oobabooga、およびOpenAI互換エンドポイント）。' } },
              { '@type': 'Question', name: 'どのプラットフォームで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorumはデスクトップアプリ（Mac、Windows via Electron）から始まり、ウェブアプリ、そしてモバイル（iOS・Android via Capacitor）へと展開します。ローカルLLMで完全オフライン動作します。' } },
              { '@type': 'Question', name: 'PromptQuorumの何が違うのですか？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorumはプロンプトの全ライフサイクルをカバーする唯一のツールです：9つのフレームワークによる構造化された作成、AI駆動の反復最適化、25以上のAIサービスへのワンクリック配信、マルチモデルコンセンサス分析 — すべてデータがデバイスから出ることなく実行されます。' } },
              { '@type': 'Question', name: '利用制限はありますか？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum側からの制限はありません。利用はAPIキーまたはローカルLLMのリソースにのみ依存します。' } },
              { '@type': 'Question', name: 'プロンプトエンジニアリングとは何ですか？なぜ重要なのですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングとは、AIモデルへの入力をより正確で有用な出力が得られるよう設計する実践です。よく構造化されたプロンプトはAI出力品質を25〜45%向上させます。PromptQuorumは9つの組み込みフレームワークでこれを自動化します — 専門知識は不要です。' } },
              { '@type': 'Question', name: 'PromptQuorumはどのようにプロンプトを最適化しますか？', acceptedAnswer: { '@type': 'Answer', text: '接続されたLLMがフレームワークの生のフィールドを精密なプロンプトに変換します。その後、8つのワンクリック改善（簡潔にする・詳細を拡張・ステップに分解・簡略化・具体性向上・マルチエキスパート相談・品質コントロール追加・カスタム指示）で反復的に改善できます。すべてのステップがバージョン履歴に保存されます。' } },
              { '@type': 'Question', name: 'PromptQuorumにはどのようなプロンプトフレームワークが組み込まれていますか？', acceptedAnswer: { '@type': 'Answer', text: '9つのフレームワークが含まれています：Single Prompt Line、APE、CRAFT、CO-STAR（シンガポールGPT-4コンテスト優勝）、SPECS、RISEN、TRACE、Google Prompt、RTF。さらに2つの完全カスタムフレームワークを作成できます。' } },
              { '@type': 'Question', name: 'CO-STARフレームワークとは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'CO-STARはContext（文脈）、Objective（目標）、Style（スタイル）、Tone（トーン）、Audience（対象者）、Response（回答形式）の略です。シンガポールGPT-4プロンプトエンジニアリングコンテストで優勝し、ビジネスコミュニケーションやマーケティングに最適です。' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.promptquorum.com/ja' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/ja/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
