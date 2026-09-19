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
            <h2 className="text-2xl font-bold text-text-primary mb-2">使い方</h2>
            <p className="text-text-secondary mb-3">4段階のワークフロー：構造化されたプロンプトを書き、自分のLLMで最適化し、25以上のAIサービスに送信し、すべての回答をコンセンサスのために分析します。</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              すべてブラウザ内で動作 — PromptQuorumのサーバーがあなたのプロンプトやAPIキーを見ることは一切ありません
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">作成</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">プロンプトを構造化する</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">9つの組み込みプロンプトエンジニアリングフレームワークから選択するか、独自のものを作成します。各フレームワークは、タスクに適したフィールドをガイドします。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — 素早い非構造化プロンプト</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — シンガポールGPT-4コンテスト優勝</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — 逐次ステップのエンタープライズタスク</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Few-Shotの例が必要な場合</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF + カスタムスロット×2</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      フレームワークウィザードが、あなたの目標を質問することで最適なものを選ぶのを助けます。
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">最適化</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">自分のLLMで改善する</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">接続されたLLMがフレームワークの生のフィールドを精密なプロンプトに変換します。その後、8つのワンクリック改善で繰り返し改善できます — プロンプトエンジニアリングの専門知識は不要です。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>スマートTemperature — 事実的・バランス・クリエイティブな意図を自動検出</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>バージョン履歴 — すべての改善を保存、いつでも元に戻せる</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>品質評価 — 具体的な改善提案付き1〜5星評価</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>ティーチングモード — 各変更がなぜ行われたかを正確に説明</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>簡潔にする・詳細を拡張・ステップに分解・簡略化・品質コントロール追加…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>カスタム指示 — 平易な言葉でのフリーテキスト改善</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      あなたのLLM。あなたのAPIキー。PromptQuorumのサーバーを通過するものは何もありません。
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">送信</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">すべてのAIに一度に送信</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">最適化されたプロンプトをワンクリックで複数のAIサービスに送信します。PromptQuorumはURLを通じて各送信先にプロンプトを事前にロードします — コピー&ペースト不要。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>自動送信: ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>コピー&ペースト: Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexityは即座に実行 — 到着時にプロンプトが自動送信</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>リストにないAIサービス用のカスタムURLスロット×2</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>送信前にLLMを通じたオプションの最終強化パス</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>合計25以上の送信先</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      すべてのブラウザタブが並列で開きます。1分以内にすべての回答を収集。
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">クォーラム</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">すべてのAIが同意することを見つける</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">回答をPromptQuorumに貼り付けます。分析タイプを選択します。LLMがすべての回答を読み、重要なことを合成します。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>コンセンサスサマリー — すべてのモデルにわたる共通テーマと合意</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>矛盾検出 — モデルが不一致だった箇所を明示的にフラグ</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>ハルシネーション検出 — 潜在的に偽りの主張をフラグ</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>信頼スコアリング — モデルごとの確信度</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>ベスト回答選択 — 最も強力な単一回答を選択</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>加重マージ — すべてのベストを合成したハイブリッド回答を生成</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      5つのモデルが回答に同意する場合、1つのモデルが単独で答える場合よりも信頼性がはるかに高くなります。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9つの組み込みプロンプトフレームワーク</h3>
              <p className="text-text-secondary mb-6">各フレームワークは入力を異なる方法で構造化します。フレームワークウィザードが選択を助けます — または完全にカスタムなフレームワークを2つ作成できます。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">フレームワーク</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">フィールド</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">最適な用途</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">素早い非構造化プロンプト</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">シンプルな3フィールドブリッジ</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">クリエイティブライティング、汎用</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">ビジネスコミュニケーション、マーケティング</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">分析と調査</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">エンタープライズ逐次タスク</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">例が必要な場合</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">ビジネス・プロフェッショナルタスク</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">ミニマル — 最も影響力のある3フィールド</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13種類のQuorum分析タイプ</h3>
              <p className="text-text-secondary mb-6">自由に組み合わせ。2つまたはすべての13を同時に実行。各分析はPromptQuorumサーバーではなく、接続されたLLMで実行されます。</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">合成</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      コンセンサスサマリー
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      加重マージ
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      原子的事実抽出
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">比較</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      オーバーラップマッピング
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      矛盾検出
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      信頼スコアリング
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">品質</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      完全性チェック
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      ハルシネーション検出
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      冗長性除去
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">推奨</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      ベスト回答選択
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      マルチモデルアンサンブル
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      論争フラグ
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">結果を6つの形式でエクスポート</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">複数の形式 → .zipアーカイブとしてダウンロード。フォルダ選択にはFile System Access API（Chrome/Edge/Safari 16+）。</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">主要な概念</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">マルチモデル・ディスパッチ</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">1つのプロンプトを1クリックで25以上のAIモデルに同時送信。PromptQuorumはURLを通じて各送信先にプロンプトを事前にロード — コピー&ペースト不要、すべてのタブが並列で開きます。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Quorum分析</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">複数のAIモデルの回答を構造的に比較し、コンセンサス、矛盾、信頼度を特定。PromptQuorumはハルシネーション検出やベスト回答選択を含む13種類の分析タイプを提供。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">コンセンサス・スコアリング</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">複数のモデル回答間の一致度から導出される信頼性評価。コンセンサスが高いほど信頼性が高い。コンセンサスが低い場合は不確実性や潜在的ハルシネーションを示します。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">ハルシネーション検出</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">1つまたは少数のモデルにしか現れない事実的主張を特定し、潜在的なAI捏造を示す。5以上の独立したモデルとの相互参照により、未検出ハルシネーション率が大幅に低下。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — 自分のモデルを持ち込む</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">自分のAPIキーをAIプロバイダーに直接接続。キーはブラウザのlocalStorageにのみ保存され、プロバイダーに直接接続 — PromptQuorumのサーバーが認証情報を受信・送信することは一切ありません。</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">自分のモデルを持ち込む（BYOM）</h3>
              <p className="text-text-secondary mb-6">PromptQuorumは独自のキーでLLMを呼び出すことはありません。すべての呼び出しはブラウザから選択したプロバイダーに直接送られます。APIキーはブラウザのlocalStorageに保存 — PromptQuorumサーバーには決して送信されません。</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">クラウドAPI（自分のキーを持参）</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">ローカル（APIキー不要）</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">テレメトリーなし</h3>
                  <p className="text-text-secondary text-sm">分析なし、追跡なし、データ収集なし。匿名の使用統計さえも。</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">登録不要</h3>
                  <p className="text-text-secondary text-sm">アカウント不要。メール不要。サインイン不要。アプリを開いてすぐに作業開始。</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">ローカルで動作</h3>
                  <p className="text-text-secondary text-sm">ElectronによるデスクトップApp、CapacitorによるモバイルApp。ローカルLLMで完全オフライン動作。</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">テスト方法</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">PromptQuorumの記事に記載されたパフォーマンス数値は、PromptQuorumを使った管理された配信セッションに基づいています。具体的な数値（プロンプト品質スコア、温度比較、ベンチマーク数値）が引用されている場合、それは編集部によるテストまたは公開ベンチマークデータを反映しており、明示的に記載がない限りPromptQuorum独自の計測値ではありません。</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  プロンプト配信：PromptQuorumのワンクリック配信で指定モデルに同時送信
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  サンプルサイズ：編集部テストは別段の記載がない限り各条件につき最低30プロンプトを使用
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  評価：回答は最低2名の独立した評価者がブラインドレビューで採点
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  サードパーティベンチマーク（HumanEval、SWE-bench、MBPP）：公式モデル論文またはコミュニティリーダーボードから取得、評価日を各記事に記載
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  ローカルモデルテスト：記事に記載の量子化レベルでコンシューマーハードウェア上で実行
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  開示：PromptQuorum内部テストが引用される場合、記事本文内に「Tested in PromptQuorum」と明記
                </li>
              </ul>
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>精度に関する注意事項：</strong>
               機能と価格情報は2026年3月に各製品の公開ドキュメントに基づいて確認されました。製品は頻繁に変更されます — 意思決定前に各ベンダーに直接現在の機能を確認してください。このページの情報が不正確または時代遅れだと思われる場合は、
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">お問い合わせ</a>
              ください。迅速に修正します。この比較はPromptQuorumが制作しており、市場参加者としての当社の視点を反映しています。
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">マルチLLM比較ツールとは？</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">マルチLLM比較ツールは、同じプロンプトを複数の大規模言語モデルに同時に送信し、応答を並べて表示するツールです — GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Largeなど — タブを切り替えたり入力を繰り返したりせずに、AIシステム間の推論、精度、スタイルの違いを評価できます。</p>
              </div>
              <p className="text-text-secondary mb-3">2026年、すべてのタスクで権威あるAIモデルは存在しません。GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proはそれぞれ異なるトレーニングデータ、アーキテクチャの偏り、推論の強みを持っています。1つのモデルで正しく見える回答が、別のモデルでは否定、制限、または大幅に拡張される場合があります。</p>
              <p className="text-text-secondary">ここで比較する5つのツールは、現在利用可能な主要なアプローチを代表しています：コンシューマープラットフォーム（QuoraのPoe）、コミュニティベンチマーク（LM Arena）、開発者評価スイート（OpenMark）、統合マルチモデルワークスペース（AiZolo）、コンセンサススコアリングプラットフォーム（PromptQuorum）。それぞれ異なるワークフローに対応しています。</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">5つのマルチLLMツールの主な違いは何ですか？</h3>
              <p className="text-text-secondary mb-4">以下の表は、プロフェッショナルなマルチLLMワークフローに最も重要な機能 — 同時ディスパッチ、コンセンサススコアリング、ローカルLLMサポート、APIキー制御、価格設定 — で5つのツールを比較しています。</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">ツール</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">同時ディスパッチ</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">コンセンサススコアリング</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">ローカルLLM</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">APIキー制御</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">価格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Your keys</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free beta</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Sequential / limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free / $19.99/mo</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 2 models only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Human voting only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Parallel</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Deterministic scoring</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free tier / credits</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">From $9.90/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ あり · ~ 部分的 · ✗ なし · 2026年3月の公開ドキュメントに基づく。価格と機能は変更される場合があります — 各ベンダーに確認してください。この比較はPromptQuorumが制作しています。</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">最適：開発者＆パワーユーザー</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">ベータ · 2026年4月</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">APIキー必須</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorumは、同時プロンプトディスパッチと自動コンセンサススコアリングを組み合わせた、レビューされたツールの中で唯一のツールです。</strong> プロンプトを入力し、モデルを選択（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large、ローカル実行モデル）すると、PromptQuorumがすべてに並列ディスパッチします。その後、Quorum Verdictがモデルが同意する箇所、相違する箇所、およびそれらのパターンが回答の信頼性にとって何を意味するかを分析します。</p>
<p className="text-text-secondary mb-3 leading-relaxed">ローカルLLMサポートが決定的な機能です。OllamaとLM Studioの統合により、PromptQuorumはローカルで実行されるモデル（LLaMA 3.1 7Bは8GB RAM、13Bは16GB必要）をディスパッチに含めるため、機密プロンプトがマシンから離れることはありません。法律専門家、医療従事者、金融アナリスト、独自コードを扱う開発者にとって、これは選択肢ではなく必須要件です。</p>
<p className="text-text-secondary leading-relaxed">PromptQuorumはOpenAI、Anthropic、Google、Mistralの独自APIキーを持ち込む必要があります。これにより、データはあなたの管理下に置かれ、コストは透明で、使用は各プロバイダーとの独自の商業条件に結び付けられます。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">PromptQuorumを使うべきユーザーは？</h4>
              <p className="text-text-secondary mb-8">PromptQuorumは、本番パイプラインに統合するモデルを評価する開発者、調査結果のクロスモデル検証が必要な研究者、サードパーティサーバーに送信できない機密情報を扱う専門家向けに設計されています。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最適：カジュアル/コンシューマー利用</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">無料 / 月$19.99</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS、Android、Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">数百万ユーザー</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Quoraが開発したPoeは、1つのインターフェースからGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Llama、Grok、数千のユーザー作成ボットにアクセスできる最大のマルチモデルAIプラットフォームです。</strong> APIキーを管理せずに複数のAIモデルに簡単にアクセスしたいユーザーに最適です。</p>
<p className="text-text-secondary leading-relaxed">Poeは真の意味での同時ディスパッチを提供しません — ユーザーはすべてのモデルに並列でプロンプトをディスパッチするのではなく、モデルを切り替えるか2つを比較します。コンセンサススコアリングや応答一致の自動分析もありません。すべての推論はクラウドベースで、プライバシーに敏感なプロフェッショナルなユースケースには適しません。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum：主な違い</h4>
              <p className="text-text-secondary mb-8">Poeは、APIキー管理なしのカジュアルな探索、ボット発見、会話に優れています。PromptQuorumは、制御されたプロンプト評価、コンセンサス分析、ローカルLLMワークフローに優れています。根本的に異なるユースケースを対象としています：PoeはコンシューマープラットフォームでありPromptQuorumはプロフェッショナル評価ツールです。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最適：コミュニティベンチマーキング</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">無料</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Webのみ</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">人間投票システム</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena（旧Chatbot Arena）は、数百万の人間の好み投票から算出されたEloレーティングを持つ、最も引用されるAIモデルリーダーボードです。</strong> ユーザーはプロンプトを送信し、2つの匿名モデルのどちらがより良い回答を生成したかに投票します。</p>
<p className="text-text-secondary leading-relaxed">LM Arenaは2つのモデルを並べて表示し、人間の好み投票を収集します — 自動コンセンサス分析を提供せず、ローカルLLMをサポートせず、主要比較モードでの特定モデルの選択も許可しません。ワークフローツールではなく、ベンチマーキングプラットフォームです。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum：主な違い</h4>
              <p className="text-text-secondary mb-8">LM Arenaは業界全体の集約された人間の好みトレンドを理解するのに優れています。PromptQuorumは選択したモデル全体でのプロンプトを一貫した自動分析で評価するのに優れています。LM Arenaはコミュニティが何を好むかを教えてくれます；PromptQuorumはあなたが気にするすべてのモデルでプロンプトが何を生成するかを教えてくれます。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">最適：コスト/品質分析</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">無料ティア / クレジット</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100+モデル</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">決定論的スコアリング</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMarkは、100以上のAIモデルに対してプロンプトを同時に実行し、決定論的に結果をスコアリングする開発者向けベンチマーキングツールです — 同じプロンプトは常に同じランク出力を生成します。</strong> 品質スコアと並んで各モデルがプロンプトあたりの正確なコストを表示します。</p>
<p className="text-text-secondary leading-relaxed">OpenMarkは幅広さ（100以上のモデル）とコスト透明性に強いですが、コンセンサス評定を生成しません — モデル間の合意パターンを分析するのではなく、各モデルを個別にスコアリングします。OllamaやLM Studio経由のローカルLLMはサポートしていません。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum：主な違い</h4>
              <p className="text-text-secondary mb-8">OpenMarkは「どの単一モデルがこのタスクに最も優れており、どのコストか？」という質問に答えます。PromptQuorumは「このプロンプトについてモデルはどれだけ同意しており、不一致は何を意味するか？」に答えます。どちらもAPIキーが必要；OpenMarkは100以上のモデルをサポート；PromptQuorumはローカルLLM推論とコンセンサススコアリングを独自に追加します。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最適：コンテンツチーム</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">月$9.90から</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o、Claude、Gemini、Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">プロンプトライブラリ</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZoloは、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Grokへの同時ディスパッチを並列表示するコンテンツクリエイターとマーケティングチーム向けの統合マルチモデルワークスペースです。</strong> 2026年3月時点では、プランは月$9.90から開始していました — aizolo.comで現在の価格を確認してください。</p>
<p className="text-text-secondary leading-relaxed">AiZoloはコンセンサススコアリングを提供しません — 応答を並べて表示しますが、分析はユーザーに任せます。ローカルLLMオプションなしで4つのクラウドモデルのみをサポートします。技術評価プラットフォームではなく、コンテンツ制作ワークフローツールです。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum：主な違い</h4>
              <p className="text-text-secondary mb-8">AiZoloは、日常的なマルチモデルライティングワークフローに手頃なワークスペースが必要なコンテンツチームに優れています。PromptQuorumは、自動コンセンサス分析、ローカルLLMプライバシー、オープンウェイトシステムを含む幅広いモデルセットへのAPIキー制御アクセスが必要なパワーユーザーに優れています。</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">どのマルチLLMツールを使うべきか？</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">PromptQuorumを選ぶ</span>
                  <span className="text-text-secondary"> モデル間のコンセンサススコアリング、プライバシーに敏感な作業のためのローカルLLMサポート、または独自のAPIキーを使った制御された評価ワークフローが必要な場合。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Poeを選ぶ</span>
                  <span className="text-text-secondary"> APIキー管理なしで、GPT-4o、Claude 4.6 Sonnet、Gemini、数千のボットへのカジュアルな会話や探索のための簡単なアクセスを希望する場合。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">LM Arenaを選ぶ</span>
                  <span className="text-text-secondary"> 業界全体のコミュニティ主導のモデル好みデータとEloランキングに貢献または研究したい場合。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">OpenMarkを選ぶ</span>
                  <span className="text-text-secondary"> 本番アプリケーション向けにモデルを選択している開発者で、100以上のモデルにわたる透明なコストデータと決定論的な品質スコアリングが必要な場合。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">AiZoloを選ぶ</span>
                  <span className="text-text-secondary"> 日常的なマルチモデルライティングワークフローのために、手頃で使いやすいワークスペースが必要なコンテンツクリエイターまたはマーケティングプロフェッショナルの場合。</span>
                </div>
              </div>
            </div>
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
