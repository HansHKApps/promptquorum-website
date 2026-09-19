import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

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

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">主要機能の概要</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9つのプロンプトエンジニアリングフレームワーク（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google、RTF）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">25以上のクラウドモデルへの同時ディスパッチ（GPT-4o、Claude、Gemini、DeepSeek など）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">4つのカテゴリ（統合、比較、品質、選択）にわたる13のクォーラムコンセンサス分析タイプ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">1つのモデルのみ、またはコンセンサスと矛盾する主張にフラグを立てるハルシネーション検出</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">ローカルLLMサポート：Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、vLLM、OpenAI互換エンドポイント</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">プライバシー優先：完全なオフライン実行、登録不要、デバイスから何も送信されない</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">すべてのディスパッチされたモデルのリアルタイム回答の並べて比較</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">8つの改善テクニックによる自動プロンプト最適化でより良いAI出力を実現</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">プロンプト最適化</h3>
                <p className="text-text-secondary">8つの改善テクニックでプロンプトを自動的に改良・最適化します。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">マルチモデル配信</h3>
                <p className="text-text-secondary">ChatGPT・Claude・Geminiなど25以上のモデルへ同時並列でプロンプトを送信。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">クォーラムスコアリング</h3>
                <p className="text-text-secondary">モデル間のコンセンサス回答を信頼スコアで発見。ハルシネーションを即座に検出。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">瞬時比較</h3>
                <p className="text-text-secondary">数秒で並べて回答を確認。ブラウザタブ間の手動テスト不要。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">プライバシー優先</h3>
                <p className="text-text-secondary">ローカル実行オプション。登録不要。プロンプトを完全にコントロール。</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="ja" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">最適化結果をどのように確認しますか?</h3>
              <p className="text-text-secondary mb-6">最適化されたプロンプトの品質評価・バージョン履歴・改善提案を確認できます。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="ja" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">バージョン管理</h4>
                  <p className="text-text-secondary text-sm">プロンプトのすべての変更履歴を追跡。いつでも以前のバージョンに戻したり、分岐させて異なる最適化パスを試したりできます。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">品質インサイト</h4>
                  <p className="text-text-secondary text-sm">プロンプトがなぜ改善されたのかを正確に理解。強みと改善点について詳細なフィードバックを得られます。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">スマートリファインメント</h4>
                  <p className="text-text-secondary text-sm">ワンクリックの改善を適用して、プロンプトを簡潔・明確・プロフェッショナル・詳細にできます。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">クォーラム — マルチモデルコンセンサスとは?</h3>
              <p className="text-text-secondary mb-6">25以上のAIモデルから回答を収集し、コンセンサスパターンを分析し、異なる視点からの洞察を統合します。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="ja" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">回答を収集</h4>
                  <p className="text-text-secondary text-sm">ChatGPT、Claude、Geminiなど25以上のモデルでプロンプトを実行。多様な視点と回答を即座に取得。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">パターンを分析</h4>
                  <p className="text-text-secondary text-sm">すべてのモデルが同意する点（コンセンサス）、異なる点、そしてどの回答が用途に最も適しているかを特定。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">洞察を統合</h4>
                  <p className="text-text-secondary text-sm">複数モデルの強みを組み合わせて、より良い回答を作成。結果を複数フォーマットでエクスポートしてさらに活用。</p>
                </div>
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
