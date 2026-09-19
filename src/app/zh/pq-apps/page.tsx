import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

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
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">价格</div>
                  <div className="text-text-primary font-medium">免费。使用你自己的API密钥。</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">隐私模式</div>
                  <div className="text-text-primary font-medium">BYOM——零服务器传输</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">支持的AI模型</div>
                  <div className="text-text-primary font-medium">25+云端模型 + 通过Ollama无限使用本地模型</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">提示词框架</div>
                  <div className="text-text-primary font-medium">内置9种 + 2个自定义槽位</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Quorum分析类型</div>
                  <div className="text-text-primary font-medium">13种，包括幻觉检测</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">离线支持</div>
                  <div className="text-text-primary font-medium">完全支持——通过Ollama、LM Studio、Jan AI</div>
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
