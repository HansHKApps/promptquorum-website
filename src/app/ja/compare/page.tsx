import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, ['ja', 'zh', 'de', 'fr']),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function JaComparePage() {
  return (
    <>
      <ComparePageClient initialLang="ja" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/ja/compare',
                'url': 'https://www.promptquorum.com/ja/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare simultaneous dispatch, consensus scoring, local LLM support, and API key control in 2026.',
                'inLanguage': 'ja',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://www.promptquorum.com/ja' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Compare', 'item': 'https://www.promptquorum.com/ja/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': '複数の LLM に同じプロンプトを同時に送信して比較するのに最適なツールは何ですか？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum は、同時プロンプト配信と自動コンセンサス分析を組み合わせた唯一のツールです。複数の応答を並べて表示するだけでなく、モデル間で一致する箇所と相違する箇所を示す評価が得られます。Poe と AiZolo はマルチモデル アクセスを提供していますが、コンセンサス スコアリングは行いません。LM Arena は自動化された分析ではなく人間投票を使用しています。OpenMark は個別のプロンプトをスコアリングしていますが、モデル間のコンセンサス評価は生成しません。機能情報は 2026 年 3 月の公開ドキュメンテーションに基づいています。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Ollama や LM Studio などのローカル LLM をサポートするマルチ LLM ツールはどれですか？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum はこのページで紹介されているツールの中で、Ollama と LM Studio を通じたローカル LLM 推論をサポートする唯一のツールです。つまり、機密性の高いプロンプトはマシンの外に出ません。2026 年 3 月時点の公開ドキュメンテーションに基づいて、Poe、LM Arena、OpenMark、AiZolo はクラウド専用サービスです。各ツールの現在の機能をベンダーに直接確認してから判断してください。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'マルチ LLM ツールのコンセンサス スコアリングとは何ですか？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'コンセンサス スコアリングは、複数の AI モデルが特定のプロンプトにどの程度合意しているかを自動分析するものです。PromptQuorum の Quorum Verdict は、デプロイされたすべてのモデル間の合意をスコアリングし、相違点を特定し、その相違点の意味を説明します。高いコンセンサス スコアは、モデル アーキテクチャ全体で回答が信頼できることを示しています。低いコンセンサス スコアは不確実性を示し、さらなる調査が必要な場合があります。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'PromptQuorum と Poe の違いは何ですか？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Quora が所有する Poe は、アクセスと会話に焦点を当てたマルチモデル チャット プラットフォームです。PromptQuorum はプロンプト評価とコンセンサス スコアリングに焦点を当てたマルチ LLM ディスパッチと分析ツールです。Poe ではモデル間を切り替えるか、一度に 2 つを比較できます。PromptQuorum は選択されたすべてのモデルに同時にディスパッチし、自動的にどこで同意するかを分析します。これはカジュアル チャットではなく、パワー ユーザーと開発者向けに設計された基本的に異なるワークフローです。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'PromptQuorum を使用するために独自の API キーが必要ですか？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'はい。PromptQuorum は OpenAI、Anthropic、Google、Mistral などのプロバイダーから独自の API キーをもたらすユーザー向けに設計されています。これにより、データは自分の管理下に置かれ、使用は商用条件下に置かれ、コストは透過的になります。また、Ollama と LM Studio を通じたローカル LLM サポートも有効にされているため、完全にプライベートな推論を好むユーザーに対応できます。',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
