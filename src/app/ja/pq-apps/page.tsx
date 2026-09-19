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
