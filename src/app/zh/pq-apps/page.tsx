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
    description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
    alternates: generateAlternates('/pq-apps', 'zh', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
    },
  }
}

export default function ZhPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/zh/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
              'inLanguage': 'zh',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://www.promptquorum.com/zh' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/zh/pq-apps' },
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
              无论身在何处，尽享 PromptQuorum
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              一次输入，同时发送给25+款AI模型——支持本地LLM，并提供多模型共识分析，一切都在浏览器中完成。
            </p>
            <Link
              href="/zh/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              试用测试版
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">使用说明</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">撰写结构化提示词</div>
                <div className="text-sm text-text-secondary">从9种内置框架之一开始——CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google Prompt、RTF 或 Single Prompt Line。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">用你自己的LLM优化</div>
                <div className="text-sm text-text-secondary">在发送前，可选择通过已连接的LLM优化提示词的结构和措辞。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">发送给25+款AI模型</div>
                <div className="text-sm text-text-secondary">一键并行打开所有目标——GPT-4o、Claude、Gemini、Grok、DeepSeek、Mistral 等，还包括通过 Ollama 使用的本地模型。</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">运行Quorum分析</div>
                <div className="text-sm text-text-secondary">使用13种分析类型比较回答——幻觉检测、矛盾检测、共识摘要等。</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">功能</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">核心功能一览</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 种提示词工程框架（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google、RTF）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">同时分发到 25+ 个云模型（GPT-4o、Claude、Gemini、DeepSeek 等）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">4 个类别的 13 种 Quorum 共识分析类型（合成、比较、质量、选择）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">幻觉检测标记仅在一个模型中出现或与共识相矛盾的声明</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">本地 LLM 支持：Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、vLLM 及 OpenAI 兼容端点</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">隐私优先：完全离线执行、无需注册、数据不离开设备</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">所有分发模型的实时并行回答对比</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">自动提示词优化，包含 8 种改进技术以获得更好的 AI 输出</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">提示词优化</h3>
                <p className="text-text-secondary">通过 8 种经过验证的优化技术自动改进和优化您的提示词。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">多模型分发</h3>
                <p className="text-text-secondary">同时并行地在 ChatGPT、Claude、Gemini 及 25+ 个模型上运行提示词。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Quorum 评分</h3>
                <p className="text-text-secondary">通过置信度评分在各模型中找出共识答案。即时检测幻觉内容。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">即时对比</h3>
                <p className="text-text-secondary">几秒内并排查看所有回答。无需在浏览器标签间手动测试。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">隐私优先</h3>
                <p className="text-text-secondary">本地执行选项。无需注册。完全掌控您的提示词。</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="zh" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">如何查看优化结果?</h3>
              <p className="text-text-secondary mb-6">查看优化后提示词的质量评估、版本历史和改进建议。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="zh" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">版本控制</h4>
                  <p className="text-text-secondary text-sm">追踪提示词的所有迭代。随时恢复到之前的版本，或分支探索不同的优化路径。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">质量洞察</h4>
                  <p className="text-text-secondary text-sm">准确了解提示词为何得到改进。获得关于优点和待改进之处的详细反馈。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">智能优化</h4>
                  <p className="text-text-secondary text-sm">一键应用优化，使提示词更简洁、清晰、专业或更详细。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Quorum — 多模型共识是什么?</h3>
              <p className="text-text-secondary mb-6">收集 25+ 个 AI 模型的回答，分析共识模式，从不同视角综合洞察。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="zh" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">收集回答</h4>
                  <p className="text-text-secondary text-sm">在ChatGPT、Claude、Gemini及25+款其他模型上运行提示词，即时获得多样的视角和回答。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">分析模式</h4>
                  <p className="text-text-secondary text-sm">识别所有模型的共识、分歧之处，以及哪些回答最适合你的使用场景。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">综合洞察</h4>
                  <p className="text-text-secondary text-sm">结合多个模型的优势得出更好的答案，并以多种格式导出结果以供进一步使用。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">工具对比</h2>
            <p className="text-text-secondary mb-4">查看 PromptQuorum 与其他AI提示词工具的对比。</p>
            <Link href="/zh/compare" className="text-primary hover:text-primary/80 font-medium">
              查看完整对比 →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/zh/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              试用测试版
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
