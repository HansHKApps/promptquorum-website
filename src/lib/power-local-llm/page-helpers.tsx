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
import { POWER_LLM_BRIEFS, type ArticleBrief } from './briefs'

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
    const brief = POWER_LLM_BRIEFS[slug]
    if (lang === 'en' && brief) {
      return renderArticleBrief({ slug, brief })
    }
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

// ─── EDITORIAL BRIEF RENDERER ─────────────────────────────────────────────
// Renders the writing brief for an EN article slug that has been registered but
// not yet authored. Replaced by full article content as articles are written.

function isClusterSlug(ref: string): boolean {
  return !ref.startsWith('/') && ref in POWER_LLM_SLUG_TO_KEY
}

function refHref(ref: string): string {
  if (ref.startsWith('/')) return ref
  if (isClusterSlug(ref)) return powerLLMArticlePath('en', ref)
  return ref
}

function refLabel(ref: string): string {
  if (ref.startsWith('/')) return ref
  if (isClusterSlug(ref)) {
    return powerLLMContent[ref]?.['en']?.title ?? slugToTitle(ref)
  }
  return ref
}

function renderArticleBrief({ slug, brief }: { slug: string; brief: ArticleBrief }) {
  const hubHref = powerLLMHubPath('en')
  const hasTable = !!brief.structure.headers && !!brief.structure.rows && brief.structure.rows.length > 0

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Status banner — distinct from Coming Soon's primary-blue badge */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-50 border border-amber-200 text-amber-800">
            Editorial Brief
          </span>
          <p className="text-xs text-text-secondary mt-3">
            Internal writing scaffold. The full article publishes within 2 days.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{brief.title}</h1>

        <blockquote className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-10 text-text-secondary italic">
          {brief.meta}
        </blockquote>

        {/* Type / SERP / CTR — three short metadata rows */}
        <section className="border border-primary/15 bg-card rounded-xl p-5 mb-8 space-y-3">
          <div className="text-sm">
            <span className="font-semibold text-text-primary">Article type:</span>{' '}
            <span className="text-text-secondary">{brief.articleType}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-text-primary">SERP intent:</span>{' '}
            <span className="text-text-secondary">{brief.serpIntent}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-text-primary">CTR rule:</span>{' '}
            <span className="text-text-secondary">{brief.ctrRule}</span>
          </div>
        </section>

        {/* Writing brief */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">Writing brief</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4">
            <p className="text-text-secondary leading-relaxed">{brief.writingBrief}</p>
          </div>
        </section>

        {/* Structure */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">{brief.structure.label}</h2>

          {hasTable && (
            <div className="overflow-x-auto border border-primary/15 rounded-xl">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/5">
                    {brief.structure.headers!.map((h, i) => (
                      <th
                        key={i}
                        className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {brief.structure.rows!.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="border border-primary/15 px-3 py-2 text-text-secondary align-top"
                        >
                          {cell || <span className="text-text-secondary/40">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {brief.structure.notes && (
            <pre className="border border-primary/15 bg-card rounded-xl p-5 text-sm text-text-secondary whitespace-pre-wrap font-sans leading-relaxed">
              {brief.structure.notes}
            </pre>
          )}
        </section>

        {/* Internal links (cluster) */}
        {brief.internalLinks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-3">Internal links (cluster)</h2>
            <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-3">
              {brief.internalLinks.map((l, i) => (
                <li key={i} className="text-sm">
                  <Link
                    href={refHref(l.ref)}
                    className="font-medium text-primary hover:underline break-words"
                  >
                    {refLabel(l.ref)}
                  </Link>
                  <span className="text-text-secondary"> — {l.reasoning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* External links (other site clusters) */}
        {brief.externalLinks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-3">External links (on-site)</h2>
            <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-3">
              {brief.externalLinks.map((l, i) => (
                <li key={i} className="text-sm">
                  <Link href={l.url} className="font-medium text-primary hover:underline break-words">
                    {l.url}
                  </Link>
                  <span className="text-text-secondary"> — {l.reasoning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ seeds */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-3">FAQ topic seeds</h2>
          <ul className="border border-primary/15 bg-card rounded-xl p-5 space-y-2 list-disc list-inside marker:text-primary">
            {brief.faqSeeds.map((q, i) => (
              <li key={i} className="text-sm text-text-secondary">{q}</li>
            ))}
          </ul>
        </section>

        {/* Mobile angle */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text-primary mb-3">Mobile angle</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4">
            <p className="text-sm text-text-secondary leading-relaxed">{brief.mobileAngle}</p>
          </div>
        </section>

        {/* Slug + back link */}
        <div className="border-t border-primary/15 pt-8 flex items-center justify-between gap-4 flex-wrap">
          <code className="text-xs text-text-secondary bg-primary/5 border border-primary/15 px-2 py-1 rounded">
            /power-local-llm/{slug}
          </code>
          <Link
            href={hubHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Power Local LLM hub
          </Link>
        </div>
      </div>
    </div>
  )
}

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

// Per-category visual + copy. Mirrors the pattern in /src/components/LocalLLMsHub.tsx
// (THEME_LABELS / THEME_DESCRIPTIONS / THEME_COLORS) so the three cluster hubs share
// the same shape: colored badge → question H2 → 2-col card grid.
const HUB_THEMES: Array<{
  id: string
  badge: string
  question: string
  description: string
  colorBadge: string
  colorDot: string
  slugs: string[]
}> = [
  {
    id: 'easiest-desktop-apps',
    badge: 'Easiest Desktop Apps',
    question: 'Easiest Desktop Apps: Which Local AI App Should You Install First?',
    description: 'ChatGPT-like apps you download and run. No terminal required. Best entry point for beginners. LM Studio, Jan, and GPT4All tested side-by-side for speed, UX, and privacy.',
    colorBadge: 'bg-blue-50 text-blue-700 border-blue-200',
    colorDot: 'bg-blue-400',
    slugs: [
      'lm-studio-vs-jan-vs-gpt4all-2026',
      'easiest-local-ai-app-windows-mac-linux',
      'local-ai-app-non-technical-users',
      'best-local-ai-app-low-end-pc',
      'local-ai-app-with-built-in-rag',
    ],
  },
  {
    id: 'rag-document-chat',
    badge: 'RAG & Document Chat',
    question: 'RAG & Document Chat: How Do You Talk to Your Own PDFs Locally?',
    description: 'Personal knowledge bases that never leave your device. AnythingLLM, PrivateGPT, and Open WebUI tested on real corpora. Embedding-model picks for legal, research, and technical content.',
    colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    colorDot: 'bg-emerald-400',
    slugs: [
      'anythingllm-vs-privategpt-vs-openwebui-rag',
      'local-rag-on-your-pdfs-step-by-step',
      'best-embedding-models-local-rag-2026',
      'chat-with-1000-pdfs-locally',
      'local-rag-for-private-business-data',
    ],
  },
  {
    id: 'coding-assistants',
    badge: 'Coding Assistants',
    question: 'Coding Assistants: Can a Local LLM Really Replace GitHub Copilot?',
    description: 'Continue.dev, Cline, Aider, and Qwen3-Coder benchmarked against GitHub Copilot on real Next.js, Python, and Rust projects. Cost math, setup walkthroughs, and honest verdicts on quality gaps.',
    colorBadge: 'bg-purple-50 text-purple-700 border-purple-200',
    colorDot: 'bg-purple-400',
    slugs: [
      'replace-github-copilot-with-local-llm',
      'continue-dev-vs-cline-vs-aider-local',
      'best-local-coding-models-2026',
      'local-coding-llm-without-internet',
      'local-llm-code-review-ci-cd',
    ],
  },
  {
    id: 'local-ai-agents',
    badge: 'Local AI Agents',
    question: 'Local AI Agents: Which Workflows Actually Work Without the Cloud?',
    description: 'MCP, tool calling, autonomous agents — the 2026 frontier. Honest reports on what runs reliably (and what still fails). Replacing Zapier with self-hosted agents and EU-compliance patterns.',
    colorBadge: 'bg-orange-50 text-orange-700 border-orange-200',
    colorDot: 'bg-orange-400',
    slugs: [
      'local-ai-agents-with-mcp-2026',
      'best-local-models-tool-calling-2026',
      'autonomous-local-agents-actually-work',
      'replace-zapier-with-local-ai-agents',
      'local-ai-agents-business-workflows-eu-compliance',
    ],
  },
  {
    id: 'creative-roleplay',
    badge: 'Creative & Roleplay',
    question: 'Creative & Roleplay: Which Local Models Write Like a Human?',
    description: 'Fiction, dialogue, worldbuilding, screenplays — tested on 50+ creative prompts. SillyTavern vs Agnai vs RisuAI for character work. The honest take on uncensored models for legitimate creative writing.',
    colorBadge: 'bg-rose-50 text-rose-700 border-rose-200',
    colorDot: 'bg-rose-400',
    slugs: [
      'best-local-llm-creative-writing-2026',
      'sillytavern-vs-agnai-vs-risuai-roleplay',
      'local-llm-prompts-for-fiction-writers',
      'uncensored-local-llm-creative-writing-ethics',
      'local-llm-screenwriting-and-novel-drafting',
    ],
  },
  {
    id: 'mobile-edge-llms',
    badge: 'Mobile & Edge LLMs',
    question: 'Mobile & Edge LLMs: Can You Run Real AI Offline on Your Phone?',
    description: 'iPhone, Android, iPad, Pixel — tested on real devices in 2026. Phi-4 Mini, Gemma 3 4B, SmolLM benchmarked for speed and quality. Voice assistants and Whisper-based offline pipelines.',
    colorBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    colorDot: 'bg-cyan-400',
    slugs: [
      'best-local-llm-apps-iphone-2026',
      'best-local-llm-apps-android-2026',
      'run-ai-on-tablet-ipad-android',
      'mobile-llm-models-phi4-gemma-smollm',
      'voice-assistant-local-mobile-offline',
    ],
  },
  {
    id: 'productivity-tools',
    badge: 'Productivity & Knowledge Tools',
    question: 'Productivity Tools: How Do You Plug Local AI into Your Daily Workflow?',
    description: 'Obsidian, Logseq, Joplin integrations. Email/calendar automation. Replace Grammarly and Notion AI with local models. The full personal-knowledge-base stack for 10,000+ items.',
    colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',
    colorDot: 'bg-amber-400',
    slugs: [
      'local-llm-with-obsidian-2026',
      'local-llm-with-logseq-and-joplin',
      'local-llm-personal-knowledge-base-2026',
      'local-llm-email-and-calendar-automation',
      'replace-grammarly-notion-ai-with-local',
    ],
  },
]

function PowerArticleCard({ slug, dot }: { slug: string; dot: string }) {
  const hasContent =
    !!powerLLMContent[slug]?.['en'] &&
    Object.keys(powerLLMContent[slug]?.['en']?.sections ?? {}).length > 0
  const brief = POWER_LLM_BRIEFS[slug]
  const linkable = hasContent || !!brief
  const title =
    powerLLMContent[slug]?.['en']?.title ?? brief?.title ?? slugToTitle(slug)

  if (!linkable) {
    return (
      <div className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl p-4 opacity-50 cursor-default select-none">
        <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-gray-300" />
        <span className="text-text-secondary text-sm font-medium leading-snug flex-1">
          {title}
          <span className="ml-2 text-xs font-normal opacity-60">· soon</span>
        </span>
      </div>
    )
  }

  return (
    <Link
      href={powerLLMArticlePath('en', slug)}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
        {title}
      </span>
    </Link>
  )
}

function renderEnglishHub() {
  const lastUpdated = '2026-05-07'

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

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Power Local LLM</p>
            <p className="text-xs text-text-secondary mb-4">Updated <time dateTime={lastUpdated}>May 2026</time></p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Power Local LLM — Build a Private AI Stack That Replaces Your SaaS Bills
            </h1>
            <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
              Local LLMs are no longer just chatbots. In 2026 they run inside your code editor, query your private documents, automate workflows, and replace tools you currently pay monthly for. <strong>If you can run Ollama or LM Studio, you can replace 5-10 SaaS subscriptions before the end of this month.</strong>
            </p>

            {/* Key Takeaways */}
            <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Key Takeaways</p>
              <ul className="space-y-2">
                {[
                  'Local LLM ecosystem in 2026 = chat tools, RAG systems, coding agents, creative apps, mobile inference, and tool-calling agents.',
                  'Best entry points: LM Studio (beginners), Ollama + Open WebUI (balance), Continue.dev (coders).',
                  'The biggest 2026 shift: agentic coding harnesses replacing $200/month cloud API bills.',
                  'Mobile and edge LLMs are the fastest-growing segment — running on phones, tablets, and NPUs.',
                  'Privacy, cost arbitrage, and offline reliability are the three forces driving adoption.',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Themed sections — one per category, mirroring /local-llms hub layout */}
          {HUB_THEMES.map((theme) => (
            <section key={theme.id} id={theme.id} className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${theme.colorBadge}`}>
                  {theme.badge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{theme.question}</h2>
              <p className="text-text-secondary text-sm mb-6 max-w-2xl">{theme.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {theme.slugs.map((slug) => (
                  <PowerArticleCard key={slug} slug={slug} dot={theme.colorDot} />
                ))}
              </div>
            </section>
          ))}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {hubFaqs.map((f, i) => (
                <details key={i} className="border border-primary/15 rounded-xl p-4 group bg-card">
                  <summary className="cursor-pointer font-semibold text-text-primary group-open:mb-3">{f.q}</summary>
                  <p className="text-text-secondary leading-relaxed text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section className="border-t border-primary/15 pt-8">
            <h2 className="text-lg font-bold text-text-primary mb-4">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/local-llms/local-llm-hardware-guide-2026" className="text-primary hover:underline">Local LLM Hardware Guide 2026</Link></li>
              <li><Link href="/local-llms/best-local-llms-2026" className="text-primary hover:underline">Best Local LLMs in 2026</Link></li>
              <li><Link href="/local-llms/llamacpp-vs-ollama-vs-vllm" className="text-primary hover:underline">llama.cpp vs Ollama vs vLLM</Link></li>
              <li><Link href="/prompt-engineering/rag-explained" className="text-primary hover:underline">RAG Explained</Link></li>
            </ul>
          </section>

        </div>
      </div>
    </>
  )
}
