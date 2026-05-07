// Shared server-side rendering helpers for the Power Local LLM cluster.
// Both the EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/) call into here so
// the metadata + JSON-LD + page JSX logic lives in exactly one place.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PowerLocalLLMPostClient } from '@/components/PowerLocalLLMPostClient'
import { powerLLMContent } from './content'
import { POWER_LLM_SLUG_TO_KEY } from './slugs'
import { POWER_LLM_CATEGORIES } from './categories'
import { powerLLMAlternates, powerLLMHubPath, powerLLMArticlePath } from './metadata-helpers'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  apis: 'APIs',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  mcp: 'MCP',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => SLUG_ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

const COMING_SOON_COPY: Record<Lang, { badge: string; bodyArticle: string; bodyHub: string; back: string }> = {
  en: {
    badge: 'Coming Soon',
    bodyArticle: 'This article is being prepared. Explore the English version of the Power Local LLM hub in the meantime.',
    bodyHub: 'The Power Local LLM hub will be available in this language soon. Explore the English version below.',
    back: '← View English version',
  },
  de: {
    badge: 'Bald verfügbar',
    bodyArticle: 'Dieser Artikel wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Power Local LLM Hubs.',
    bodyHub: 'Der Power Local LLM Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.',
    back: '← Englische Version ansehen',
  },
  fr: {
    badge: 'Bientôt disponible',
    bodyArticle: 'Cet article est en cours de préparation. Explorez la version anglaise du Power Local LLM Hub en attendant.',
    bodyHub: 'Le Power Local LLM Hub sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.',
    back: '← Voir la version anglaise',
  },
  ja: {
    badge: '近日公開',
    bodyArticle: 'この記事は準備中です。その間、Power Local LLM ハブの英語版をご覧ください。',
    bodyHub: 'Power Local LLM ハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。',
    back: '← 英語版を表示',
  },
  zh: {
    badge: '即将推出',
    bodyArticle: '本文正在准备中。请同时浏览 Power Local LLM 中心的英文版。',
    bodyHub: 'Power Local LLM 中心即将推出此语言版本。请查看以下的英文版。',
    back: '← 查看英文版',
  },
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(POWER_LLM_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = POWER_LLM_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = powerLLMContent[key]
  const hasEnContent = !!articleData?.['en'] && Object.keys(articleData['en']?.sections ?? {}).length > 0
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    article?.intro ??
    'A guide in the Power Local LLM cluster from PromptQuorum.'

  return {
    title: baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle,
    description: desc,
    alternates: powerLLMAlternates(lang, slug),
    robots: { index: false, follow: true },
    openGraph: {
      title: article?.title ?? fallbackTitle,
      description: desc,
      url: `${BASE}${powerLLMArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [
        {
          url: `${BASE}/api/og/${slug}?lang=${lang}`,
          width: 1200,
          height: 630,
          alt: article?.title ?? fallbackTitle,
        },
      ],
      publishedTime: article?.publishDate,
      modifiedTime: article?.dateModified ?? article?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: article?.title ?? fallbackTitle,
      description: (article as any)?.twitterDescription ?? desc,
    },
    other: {
      // Hard-belt-and-braces noindex for crawlers that ignore the metadata API
      'robots-cluster': 'noindex, follow',
    },
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = POWER_LLM_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = powerLLMContent[key]
  const enArticle = articleData?.['en']
  const hasEnContent = !!enArticle && Object.keys(enArticle.sections ?? {}).length > 0

  // Coming-soon when: slug exists in registry, but no EN content yet OR target lang has no translation.
  if (!hasEnContent) {
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const langArticle = articleData?.[lang]
  const hasLangContent = !!langArticle && Object.keys(langArticle.sections ?? {}).length > 0

  if (!hasLangContent) {
    // Render coming-soon for non-EN locales until translations land. EN is guaranteed above.
    if (lang !== 'en') {
      return renderComingSoon({ slug, lang, kind: 'article' })
    }
  }

  const article = (langArticle ?? enArticle)!
  const canonicalUrl = `${BASE}${powerLLMArticlePath(lang, slug)}`

  // ─── Schemas (Article + Breadcrumb + FAQ + HowTo) ──
  const llmEdLevel = (article as any).educationalLevel ?? (enArticle as any)?.educationalLevel
  const llmLevelMap: Record<string, string> = {
    Beginner: 'Beginner',
    Intermediate: 'Intermediate',
    Advanced: 'Expert',
    Technical: 'Expert',
  }
  const proficiencyLevel = llmEdLevel ? llmLevelMap[llmEdLevel] ?? llmEdLevel : undefined

  const articleSchema = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
    url: canonicalUrl,
    ...(proficiencyLevel && { proficiencyLevel }),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
    },
    isPartOf: {
      '@type': 'WebPage',
      name: 'Power Local LLM Guide',
      url: `${BASE}${powerLLMHubPath(lang)}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}${powerLLMHubPath(lang)}` },
      { '@type': 'ListItem', position: 3, name: article.title ?? slugToTitle(slug), item: canonicalUrl },
    ],
  }

  const faqEntries = Object.values(article.sections).flatMap((s) => s.faqs ?? [])
  const faqSchema =
    article.faqSchema ??
    (faqEntries.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqEntries.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null)

  const howToSection = Object.values(article.sections).find(
    (s) => s.numberedItems && s.numberedItems.length > 0
  )
  const howToSchema =
    article.howToSchema ??
    (howToSection
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: article.title,
          description: article.intro,
          step: howToSection.numberedItems!.map((step, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            text: step,
          })),
        }
      : null)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      <PowerLocalLLMPostClient slug={slug} lang={lang} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const titleByLang: Record<Lang, string> = {
    en: 'Power Local LLM: Run AI Apps Privately on Your Own Hardware (2026)',
    de: 'Power Local LLM: KI-Apps privat auf eigener Hardware ausführen (2026)',
    fr: 'Power Local LLM: Exécuter des applications IA privées sur votre matériel (2026)',
    ja: 'Power Local LLM: AI アプリを自分のハードウェアでプライベート実行 (2026)',
    zh: 'Power Local LLM：在自己的硬件上私密运行 AI 应用（2026）',
  }
  const descByLang: Record<Lang, string> = {
    en: 'Stop paying for SaaS AI tools. Run coding assistants, RAG systems, agents, and creative apps fully offline with local LLMs. 35 guides, tested workflows, 2026 stack.',
    de: 'Hör auf, für SaaS-KI-Tools zu zahlen. Führe Coding-Assistenten, RAG-Systeme, Agenten und kreative Apps vollständig offline mit lokalen LLMs aus.',
    fr: 'Arrêtez de payer pour des outils IA SaaS. Exécutez des assistants de code, RAG, agents et applications créatives hors ligne avec des LLMs locaux.',
    ja: 'SaaS AI ツールへの支払いを止めましょう。コーディングアシスタント、RAG、エージェント、創作アプリをローカル LLM で完全オフラインで実行。',
    zh: '停止为 SaaS AI 工具付费。使用本地 LLM 完全离线运行编码助手、RAG 系统、代理和创意应用。',
  }

  return {
    title: titleByLang[lang],
    description: descByLang[lang],
    alternates: powerLLMAlternates(lang),
    robots: { index: false, follow: true },
    openGraph: {
      title: titleByLang[lang],
      description: descByLang[lang],
      url: `${BASE}${powerLLMHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: titleByLang[lang],
      description: descByLang[lang],
    },
  } satisfies Metadata
}

export async function buildHubPageElement(lang: Lang) {
  if (lang !== 'en') {
    return renderComingSoon({ lang, kind: 'hub' })
  }
  return renderEnglishHub()
}

// ─── COMING SOON RENDERER ─────────────────────────────────────────────────

function renderComingSoon({ slug, lang, kind }: { slug?: string; lang: Lang; kind: 'article' | 'hub' }) {
  const copy = COMING_SOON_COPY[lang]
  const title = slug ? slugToTitle(slug) : 'Power Local LLM'
  const enHref = slug ? powerLLMArticlePath('en', slug) : powerLLMHubPath('en')
  const body = kind === 'article' ? copy.bodyArticle : copy.bodyHub
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
          {copy.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">{body}</p>
        <Link
          href={enHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          {copy.back}
        </Link>
      </div>
    </div>
  )
}

// ─── ENGLISH HUB CONTENT ──────────────────────────────────────────────────

function renderEnglishHub() {
  const lastUpdated = '2026-05-07'

  // FAQ schema for the hub
  const hubFaqs = [
    { q: 'What is a local LLM and how is it different from ChatGPT?', a: 'A local LLM runs entirely on your own hardware — phone, laptop, desktop, or server — without sending prompts to any cloud service. ChatGPT runs on OpenAI servers and sends your prompts there. Local LLMs are private, work offline, and have no per-token cost; ChatGPT is faster on rare topics and requires no setup.' },
    { q: 'Do I need a powerful computer to run local LLMs?', a: 'No. 4 GB RAM and an integrated GPU is enough for small models like Phi-4 Mini or Gemma 3 4B. 16 GB RAM and a midrange GPU (RTX 3060 12 GB or M3 Pro) covers most everyday workflows. Heavy power users want 24+ GB VRAM.' },
    { q: 'Are local LLMs as good as ChatGPT or Claude?', a: 'For everyday tasks (chat, summarization, common code) the gap is 5-15% in 2026. For frontier reasoning and very obscure knowledge, cloud models still lead. The cost-quality trade-off favors local for most users with private or sensitive data.' },
    { q: 'Can I run local LLMs on my phone?', a: 'Yes. Apps like LLM Farm and Private LLM run Phi-4 Mini and Gemma 3 4B on iPhone 16+ and flagship Android devices. Performance is 8-15 tokens/sec — usable for chat, draft writing, and offline reference.' },
    { q: 'How much does it cost to run a local LLM?', a: 'After hardware, marginal cost is just electricity — usually $1-3/month for moderate use. The hardware investment ranges from $0 (existing laptop) to ~$2,000 for a high-end build. Compared to $20-200/month SaaS subscriptions, payback is typically 8-24 months.' },
    { q: 'Is my data really private when using local LLMs?', a: 'Yes — assuming the app does not telemeter prompts, which most do not. Verifiable via open-source apps (Jan, GPT4All, Ollama) where you can audit network traffic. The model file itself does not "phone home" — it is just weights on disk.' },
    { q: 'What is the easiest local LLM app for beginners?', a: 'GPT4All has the simplest install (one click, runs on 8 GB RAM). LM Studio is the most feature-rich. Jan is best for privacy. See the dedicated LM Studio vs Jan vs GPT4All comparison for benchmarks on each.' },
    { q: 'Can local LLMs replace my coding assistant?', a: 'Yes. Continue.dev + Ollama + Qwen3-Coder reaches 90-95% of GitHub Copilot quality on everyday TypeScript and Python work, with full code privacy. Hardware requirements are RTX 3060 12 GB or M3 Pro+ Mac.' },
    { q: 'Do local LLMs work offline completely?', a: 'Yes — once the model is downloaded, all inference is local. Useful for travel, restricted networks, secure environments, and anywhere internet is unreliable.' },
    { q: 'Which local LLM stack is best for businesses in the EU?', a: 'For GDPR/EU AI Act compliance: Ollama or vLLM running on dedicated hardware, paired with Jan (UI), Continue.dev (coding), and AnythingLLM (RAG). All open source, all auditable, all on-prem. Mistral Large is a strong EU-hosted alternative for hybrid setups.' },
  ]

  const hubFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hubFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const hubBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}/power-local-llm` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumbSchema) }} />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary font-medium">Power Local LLM</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-4">
              Hub · Last updated {lastUpdated}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Power Local LLM — Build a Private AI Stack That Replaces Your SaaS Bills
            </h1>
            <div className="text-lg text-text-secondary leading-relaxed space-y-4">
              <p>
                Local LLMs are no longer just chatbots. In 2026 they run inside your code editor, query your private documents, automate workflows, and replace tools you currently pay monthly for. This cluster covers the apps, agents, and workflows that turn a local model into a complete personal AI stack.
              </p>
              <p className="font-semibold text-text-primary">
                If you can run Ollama or LM Studio, you can replace 5-10 SaaS subscriptions before the end of this month.
              </p>
            </div>
          </header>

          {/* TLDR */}
          <section className="mb-12 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
            <h2 className="text-lg font-bold text-emerald-900 mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-emerald-900">
              <li>• Local LLM ecosystem in 2026 = chat tools, RAG systems, coding agents, creative apps, mobile inference, and tool-calling agents.</li>
              <li>• Best entry points: LM Studio (beginners), Ollama + Open WebUI (balance), Continue.dev (coders).</li>
              <li>• The biggest 2026 shift: agentic coding harnesses replacing $200/month cloud API bills.</li>
              <li>• Mobile/edge LLMs are the fastest-growing segment — running on phones, tablets, NPUs.</li>
              <li>• Privacy, cost arbitrage, and offline reliability are the three forces driving adoption.</li>
            </ul>
          </section>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Browse by Category</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {POWER_LLM_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-5 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-text-primary mb-2">{cat.titleEn}</h3>
                  <p className="text-sm text-text-secondary mb-3">{cat.descriptionEn}</p>
                  <ul className="space-y-1 text-sm">
                    {cat.articleSlugs.map((slug) => {
                      const hasContent =
                        !!powerLLMContent[slug]?.['en'] &&
                        Object.keys(powerLLMContent[slug]?.['en']?.sections ?? {}).length > 0
                      return (
                        <li key={slug}>
                          <Link
                            href={powerLLMArticlePath('en', slug)}
                            className={hasContent ? 'text-primary hover:underline' : 'text-gray-400'}
                          >
                            {slugToTitle(slug)}
                            {!hasContent && ' (coming soon)'}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Decision matrix */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Where Should You Start?</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary border-b border-gray-200">Your situation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary border-b border-gray-200">Start here</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Total beginner, want ChatGPT replacement</td><td className="px-4 py-3 font-medium">Easiest Desktop Apps</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Want to chat with my documents</td><td className="px-4 py-3 font-medium">RAG &amp; Document Chat</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Developer, replace cloud coding tools</td><td className="px-4 py-3 font-medium">Coding Assistants</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Want to automate multi-step tasks</td><td className="px-4 py-3 font-medium">Local AI Agents</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Creative writing or roleplay</td><td className="px-4 py-3 font-medium">Creative &amp; Roleplay</td></tr>
                  <tr className="border-b border-gray-100"><td className="px-4 py-3">Want AI on my phone/tablet</td><td className="px-4 py-3 font-medium">Mobile &amp; Edge LLMs</td></tr>
                  <tr><td className="px-4 py-3">Improve my note-taking workflow</td><td className="px-4 py-3 font-medium">Productivity Tools</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why local AI */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Why Local AI in 2026?</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Privacy.</strong> GDPR, EU AI Act, and data sovereignty rules push EU and German businesses toward on-premises inference. Local LLMs do not transmit prompts, conversations, or proprietary code to any third party.
              </p>
              <p>
                <strong className="text-text-primary">Cost.</strong> Cloud API prices continue to rise as demand outpaces supply. Local inference is essentially free after hardware — typical electricity cost for moderate use is $1-3/month versus $20-200/month for SaaS subscriptions.
              </p>
              <p>
                <strong className="text-text-primary">Performance.</strong> 8B-class models in 2026 outperform 70B-class models from 2025 thanks to better training data and quantization. The hardware bar to run useful local AI keeps dropping.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {hubFaqs.map((f, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-4 group">
                  <summary className="cursor-pointer font-semibold text-text-primary group-open:mb-3">{f.q}</summary>
                  <p className="text-text-secondary leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-text-primary mb-4">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/local-llms/local-llm-hardware-guide-2026" className="text-primary hover:underline">Local LLM Hardware Guide 2026</Link></li>
              <li><Link href="/local-llms/best-local-llms-2026" className="text-primary hover:underline">Best Local LLMs in 2026</Link></li>
              <li><Link href="/local-llms/llamacpp-vs-ollama-vs-vllm" className="text-primary hover:underline">llama.cpp vs Ollama vs vLLM</Link></li>
              <li><Link href="/prompt-engineering/rag-explained" className="text-primary hover:underline">RAG Explained</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
