import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'zh'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true),
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

export default function ZhAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/zh/about',
              'name': '关于 PromptQuorum',
              'description': 'PromptQuorum 是由 Hans Kuepper 开发的注重隐私的多模型 AI 调度与共识工具。',
              'inLanguage': 'zh',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/zh/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/zh/about',
              'jobTitle': '创始人兼开发者',
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
                { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://www.promptquorum.com/zh' },
                { '@type': 'ListItem', 'position': 2, 'name': '关于我们', 'item': 'https://www.promptquorum.com/zh/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">关于我们</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              为需要信任 AI 答案的人而构建。
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum 是一款多模型 AI 调度与共识工具。一个提示词发送给每个模型。
              一个您真正可以信任的裁决。
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">开发者</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">创始人兼开发者，PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">背景</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans 居住在德国巴登-符腾堡州海德堡附近的克莱希高地区。
                    他是一位多语言独立开发者，能流利使用德语、英语、法语和俄语。
                    在过去二十年里，他在欧洲、亚洲等地区的20多个国家生活和工作，
                    与分布式团队合作，为全球用户构建工具。
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">为什么是 PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum 源于一个简单的痛点：当您需要可靠的答案时，
                    仅查询一个 AI 模型是不够的。不同模型以不同方式产生幻觉，
                    犯不同类型的错误，在不同类型的推理上各有优劣。
                    真相在于交叉点——当五个独立模型对一个答案达成一致时，
                    其可信度远高于单个模型单独回答的情况。
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    在构建 PromptQuorum 之前，Hans 花了多年时间从事企业级 AI 工作流，
                    反复看到同一个问题：团队和组织将单个模型的输出用于高风险决策——
                    招聘决定、医学研究摘要、法律分析、风险评估——
                    没有任何验证层或共识机制。高风险决策值得更好的工具。
                    PromptQuorum 就是他一直希望存在的那个工具。
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">理念</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans 认为，隐私和用户自主权在 AI 工具中应是不可妥协的。
                    PromptQuorum 建立在一个简单原则之上：您的提示词、API 密钥和回答属于您。
                    该工具促进 AI 模型间的共识与比较，但没有任何内容通过 PromptQuorum 的服务器传输。
                    您掌控一切。
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">PromptQuorum 存在的原因</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                每个主要 AI 模型都会产生幻觉。GPT-4o、Claude、Gemini——它们都会捏造事实、
                遗漏上下文，并给出听起来自信却错误的回答。区别在于<em>哪些</em>事实
                各自出错，以及<em>何时</em>出错。
              </p>
              <p>
                当五个独立模型对一个答案达成一致时，五个模型都捏造了同一个具体细节的概率，
                远低于单个模型单独回答的情况。
                共识是可靠性的信号。PromptQuorum 让收集这个信号变得简单。
              </p>
              <p>
                第二个问题是隐私。大多数 AI 工具会通过自己的服务器路由您的提示词。
                PromptQuorum 不会这样做。您的 API 密钥直接从浏览器连接到您选择的提供商。
                没有任何内容经过 PromptQuorum 基础设施——不是您的提示词，
                不是您的 API 密钥，也不是您的回答。
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">产品</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: '发布时间', value: 'Beta 版 — 2026年7月' },
                { label: '定价', value: '免费。带上您自己的 API 密钥。' },
                { label: '隐私模式', value: 'BYOM — 零服务器传输' },
                { label: '支持的 AI 模型', value: '25+ 云端 + 通过 Ollama 无限本地模型' },
                { label: '提示词框架', value: '9 个内置 + 2 个自定义槽位' },
                { label: 'Quorum 分析类型', value: '13 种，包含幻觉检测' },
                { label: '离线支持', value: '完整支持 — 通过 Ollama、LM Studio、Jan AI' },
                { label: '是否需要注册', value: '无需注册。打开应用即可开始。' },
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">联系我们</h2>
            <p className="text-text-secondary mb-4">
              媒体咨询、合作提案或反馈：
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
            <Link href="/zh" className="text-primary hover:text-primary/80 font-medium text-sm">← 首页</Link>
            <Link href="/zh/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">工作原理</Link>
            <Link href="/zh/compare" className="text-primary hover:text-primary/80 font-medium text-sm">比较工具</Link>
            <Link href="/zh/blog" className="text-primary hover:text-primary/80 font-medium text-sm">博客</Link>
          </div>

        </div>
      </div>
    </>
  )
}
