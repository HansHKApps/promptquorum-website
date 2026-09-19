import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'PromptQuorumアプリの仕組み：内蔵フレームワークでプロンプトを作成し、25以上のAIモデルに送信、Quorum分析で結果を比較。',
    alternates: generateAlternates('/pq-apps', 'ja', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'PromptQuorumアプリの仕組み：内蔵フレームワークでプロンプトを作成し、25以上のAIモデルに送信、Quorum分析で結果を比較。',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'PromptQuorumアプリの仕組み：内蔵フレームワークでプロンプトを作成し、25以上のAIモデルに送信、Quorum分析で結果を比較。',
    },
  }
}

export default function JaPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/ja/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'PromptQuorumアプリの仕組み：内蔵フレームワークでプロンプトを作成し、25以上のAIモデルに送信、Quorum分析で結果を比較。',
              'inLanguage': 'ja',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://www.promptquorum.com/ja' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/ja/pq-apps' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16 text-center">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">PQ Apps</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              どこで作業してもPromptQuorum
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              1つのプロンプトを25以上のAIモデルに同時送信 — ローカルLLM対応とマルチモデル合意分析を、すべてブラウザから。
            </p>
            <Link
              href="/ja/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              ベータを試す
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">使い方</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">構造化プロンプトを作成</div>
                <div className="text-sm text-text-secondary">9つの内蔵フレームワーク（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google Prompt、RTF、Single Prompt Line）のいずれかから始めます。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">自分のLLMで最適化</div>
                <div className="text-sm text-text-secondary">送信前に、接続済みのLLMでプロンプトの構造や表現を任意に改善できます。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">25以上のAIモデルに送信</div>
                <div className="text-sm text-text-secondary">ワンクリックですべての送信先を並行して開きます — GPT-4o、Claude、Gemini、Grok、DeepSeek、Mistralなど、さらにOllama経由のローカルモデルも。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Quorum分析を実行</div>
                <div className="text-sm text-text-secondary">13種類の分析で回答を比較 — ハルシネーション検出、矛盾検出、コンセンサス要約など。</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">機能</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">料金</div>
                  <div className="text-text-primary font-medium">無料。独自のAPIキーを使用。</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">プライバシーモデル</div>
                  <div className="text-text-primary font-medium">BYOM — サーバー送信なし</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">対応AIモデル</div>
                  <div className="text-text-primary font-medium">クラウド25以上 + Ollama経由で無制限のローカルモデル</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">プロンプトフレームワーク</div>
                  <div className="text-text-primary font-medium">内蔵9種 + カスタム2枠</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Quorum分析タイプ</div>
                  <div className="text-text-primary font-medium">ハルシネーション検出を含む13種</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">オフライン対応</div>
                  <div className="text-text-primary font-medium">完全対応 — Ollama、LM Studio、Jan AI経由</div>
                </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">ツール比較</h2>
            <p className="text-text-secondary mb-4">PromptQuorumが他のAIプロンプトツールとどう違うかをご覧ください。</p>
            <Link href="/ja/compare" className="text-primary hover:text-primary/80 font-medium">
              詳細な比較を見る →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/ja/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              ベータを試す
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
