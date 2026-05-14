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
import { isPowerLLMArticlePublished, isPowerLLMHubPublished } from './published'

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

  const isPublished = isPowerLLMArticlePublished(slug, lang)

  return {
    title: baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle,
    description: desc,
    alternates: powerLLMAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
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
    ...(isPublished
      ? {}
      : {
          other: {
            // Hard-belt-and-braces noindex for crawlers that ignore the metadata API
            'robots-cluster': 'noindex, follow',
          },
        }),
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

  const mdUrlRe = /\[.*?\]\((https?:\/\/[^)]+)\)/
  const itemListSchemas = Object.values(article.sections)
    .filter((s) => s.rows && s.rows.length > 0 && s.columns?.includes('Link'))
    .map((s) => ({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: s.title ?? article.title,
      itemListElement: s.rows!.map((row, i) => {
        const urlMatch = (row['Link'] ?? '').match(mdUrlRe)
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: (row['Tool'] ?? '').replace(/\*\*/g, '').trim(),
            ...(urlMatch && { url: urlMatch[1] }),
            description: row['Description'] ?? '',
          },
        }
      }),
    }))

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
      {itemListSchemas.map((schema, i) => (
        <script key={`itemlist-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
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

  const isPublished = isPowerLLMHubPublished(lang)

  return {
    title: titleByLang[lang],
    description: descByLang[lang],
    alternates: powerLLMAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
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
  if (lang === 'en' || lang === 'de') {
    return renderLocalizedHub(lang)
  }
  return renderComingSoon({ lang, kind: 'hub' })
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
    id: 'overview-reference',
    badge: 'Overview & Reference',
    question: 'Overview & Reference: Where Do You Start in the Local LLM Ecosystem?',
    description: 'A directory of every local-LLM tool worth knowing — runtimes, desktop apps, web UIs, coding assistants, RAG systems, agent frameworks, voice/multimodal, mobile, and productivity plugins. The "what exists" map before you commit to a stack.',
    colorBadge: 'bg-slate-50 text-slate-700 border-slate-200',
    colorDot: 'bg-slate-400',
    slugs: [
      'local-llm-software-directory-2026',
    ],
  },
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
    badge: 'Local AI Agents & Tool Use',
    question: 'Local AI Agents & Tool Use: Which Workflows Actually Work Without the Cloud?',
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
  {
    id: 'voice-speech-multimodal',
    badge: 'Voice, Speech & Multimodal',
    question: 'Voice, Speech & Multimodal: How Do You Build a Fully Offline Voice and Vision Pipeline?',
    description: 'Local STT with whisper.cpp and faster-whisper. Local TTS with Piper, Coqui, and XTTS v2. Vision models (LLaVA, Llama 3.2 Vision) via Ollama. Full offline voice assistant builds and multimodal pipelines — no cloud microphone required.',
    colorBadge: 'bg-violet-50 text-violet-700 border-violet-200',
    colorDot: 'bg-violet-400',
    slugs: [
      'local-whisper-stt-comparison-2026',
      'local-vision-models-llava-ollama-2026',
      'local-tts-voice-cloning-piper-coqui-xtts',
      'build-local-voice-assistant-2026',
      'local-multimodal-pipeline-voice-vision-text',
    ],
  },
]

// ─── LOCALIZED HUB CONTENT ────────────────────────────────────────────────

type HubFaq = { q: string; a: string }

// DE theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_DE: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Übersicht & Referenz',
    question: 'Übersicht & Referenz: Wo starten Sie im lokalen LLM-Ökosystem?',
    description: 'Ein Verzeichnis aller lokalen LLM-Tools — Runtimes, Desktop-Apps, Web-UIs, Coding-Assistenten, RAG-Systeme, Agenten-Frameworks, Sprach- und Multimodal-Tools, Mobile und Produktivitäts-Plugins. Die „Was gibt es"-Karte, bevor Sie sich für einen Stack entscheiden.',
  },
  {
    badge: 'Einfachste Desktop-Apps',
    question: 'Einfachste Desktop-Apps: Welche lokale KI-App sollten Sie zuerst installieren?',
    description: 'ChatGPT-ähnliche Apps, die Sie herunterladen und direkt starten. Kein Terminal erforderlich. Bester Einstiegspunkt für Einsteiger. LM Studio, Jan und GPT4All im direkten Vergleich für Geschwindigkeit, Benutzerfreundlichkeit und Datenschutz.',
  },
  {
    badge: 'RAG & Dokument-Chat',
    question: 'RAG & Dokument-Chat: Wie sprechen Sie lokal mit Ihren eigenen PDFs?',
    description: 'Persönliche Wissensdatenbanken, die Ihr Gerät nie verlassen. AnythingLLM, PrivateGPT und Open WebUI an echten Korpora getestet. Embedding-Modell-Empfehlungen für rechtliche, wissenschaftliche und technische Inhalte.',
  },
  {
    badge: 'Coding-Assistenten',
    question: 'Coding-Assistenten: Kann ein lokales LLM wirklich GitHub Copilot ersetzen?',
    description: 'Continue.dev, Cline, Aider und Qwen3-Coder im Benchmark gegen GitHub Copilot an echten Next.js-, Python- und Rust-Projekten. Kostenrechnung, Setup-Anleitungen und ehrliche Einschätzungen zu Qualitätsunterschieden.',
  },
  {
    badge: 'Lokale KI-Agenten & Tool-Nutzung',
    question: 'Lokale KI-Agenten & Tool-Nutzung: Welche Workflows funktionieren wirklich ohne die Cloud?',
    description: 'MCP, Tool-Calling, autonome Agenten — die Grenze von 2026. Ehrliche Berichte darüber, was zuverlässig läuft (und was noch scheitert). Zapier durch selbst gehostete Agenten ersetzen und EU-konforme Muster.',
  },
  {
    badge: 'Kreativ & Roleplay',
    question: 'Kreativ & Roleplay: Welche lokalen Modelle schreiben wie ein Mensch?',
    description: 'Fiktion, Dialoge, Weltenbau, Drehbücher — an über 50 kreativen Prompts getestet. SillyTavern vs. Agnai vs. RisuAI für Charakterarbeit. Die ehrliche Einschätzung zu unzensierten Modellen für legitimes kreatives Schreiben.',
  },
  {
    badge: 'Mobile & Edge LLMs',
    question: 'Mobile & Edge LLMs: Kann man auf dem Smartphone echte KI offline betreiben?',
    description: 'iPhone, Android, iPad, Pixel — an echten Geräten in 2026 getestet. Phi-4 Mini, Gemma 3 4B, SmolLM im Benchmark für Geschwindigkeit und Qualität. Sprachassistenten und Whisper-basierte Offline-Pipelines.',
  },
  {
    badge: 'Produktivität & Wissenswerkzeuge',
    question: 'Produktivität: Wie integrieren Sie lokale KI in Ihren Arbeitsalltag?',
    description: 'Obsidian-, Logseq- und Joplin-Integrationen. E-Mail- und Kalender-Automatisierung. Grammarly und Notion AI durch lokale Modelle ersetzen. Der vollständige Personal-Knowledge-Base-Stack für über 10.000 Einträge.',
  },
  {
    badge: 'Sprache, Spracheingabe & Multimodal',
    question: 'Sprache & Multimodal: Wie bauen Sie eine vollständig offline betriebene Sprach- und Vision-Pipeline?',
    description: 'Lokale Spracherkennung mit whisper.cpp und faster-whisper. Lokale Sprachsynthese mit Piper, Coqui und XTTS v2. Vision-Modelle (LLaVA, Llama 3.2 Vision) via Ollama. Vollständige Offline-Sprachassistenten und multimodale Pipelines — ohne Cloud-Mikrofon.',
  },
]

type HubHeroL10n = { h1: string; intro: string; introBold: string; keyTakeaways: string[] }

const HUB_HERO_L10N: Record<'en' | 'de', HubHeroL10n> = {
  en: {
    h1: 'Power Local LLM — Build a Private AI Stack That Replaces Your SaaS Bills',
    intro: 'Local LLMs are no longer just chatbots. In 2026 they run inside your code editor, query your private documents, automate workflows, and replace tools you currently pay monthly for.',
    introBold: 'If you can run Ollama or LM Studio, you can replace 5-10 SaaS subscriptions before the end of this month.',
    keyTakeaways: [
      'Local LLM ecosystem in 2026 = chat tools, RAG systems, coding agents, creative apps, mobile inference, and tool-calling agents.',
      'Best entry points: LM Studio (beginners), Ollama + Open WebUI (balance), Continue.dev (coders).',
      'The biggest 2026 shift: agentic coding harnesses replacing $200/month cloud API bills.',
      'Mobile and edge LLMs are the fastest-growing segment — running on phones, tablets, and NPUs.',
      'Privacy, cost arbitrage, and offline reliability are the three forces driving adoption.',
    ],
  },
  de: {
    h1: 'Power Local LLM — Bauen Sie einen privaten KI-Stack, der Ihre SaaS-Abonnements ersetzt',
    intro: 'Lokale LLMs sind längst mehr als Chatbots. 2026 laufen sie in Ihrem Code-Editor, durchsuchen private Dokumente, automatisieren Workflows und ersetzen Tools, für die Sie monatlich zahlen.',
    introBold: 'Wer Ollama oder LM Studio betreiben kann, ersetzt in diesem Monat fünf bis zehn SaaS-Abonnements.',
    keyTakeaways: [
      'Das lokale LLM-Ökosystem 2026: Chat-Tools, RAG-Systeme, Coding-Agenten, kreative Apps, mobile Inferenz und Tool-Calling-Agenten.',
      'Beste Einstiegspunkte: LM Studio (Einsteiger), Ollama + Open WebUI (ausgewogen), Continue.dev (Entwickler).',
      'Größter Wandel 2026: Agentenbasierte Coding-Harnesses ersetzen Cloud-API-Kosten von 200 €/Monat.',
      'Mobile und Edge-LLMs sind das am schnellsten wachsende Segment — auf Smartphones, Tablets und NPUs.',
      'Datenschutz, Kostenersparnis und Offline-Zuverlässigkeit sind die drei treibenden Kräfte der Verbreitung.',
    ],
  },
}

type HubLabelsL10n = {
  faqHeading: string
  keyTakeawaysLabel: string
  lastUpdatedLabel: string
  relatedReadingHeading: string
  relatedReadingLinks: Array<{ href: string; label: string }>
}

const HUB_LABELS_L10N: Record<'en' | 'de', HubLabelsL10n> = {
  en: {
    faqHeading: 'Frequently Asked Questions',
    keyTakeawaysLabel: 'Key Takeaways',
    lastUpdatedLabel: 'Last updated:',
    relatedReadingHeading: 'Related Reading',
    relatedReadingLinks: [
      { href: '/local-llms/local-llm-hardware-guide-2026', label: 'Local LLM Hardware Guide 2026' },
      { href: '/local-llms/best-local-llms-2026', label: 'Best Local LLMs in 2026' },
      { href: '/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/prompt-engineering/rag-explained', label: 'RAG Explained' },
    ],
  },
  de: {
    faqHeading: 'Häufig gestellte Fragen',
    keyTakeawaysLabel: 'Wichtigste Erkenntnisse',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    relatedReadingHeading: 'Weiterführende Literatur',
    relatedReadingLinks: [
      { href: '/local-llms/local-llm-hardware-guide-2026?lang=de', label: 'Lokale LLM-Hardware-Guide 2026' },
      { href: '/local-llms/best-local-llms-2026?lang=de', label: 'Die besten lokalen LLMs 2026' },
      { href: '/local-llms/llamacpp-vs-ollama-vs-vllm?lang=de', label: 'llama.cpp vs. Ollama vs. vLLM' },
      { href: '/prompt-engineering/rag-explained?lang=de', label: 'RAG erklärt' },
    ],
  },
}

const HUB_FAQS_L10N: Record<'en' | 'de', HubFaq[]> = {
  en: [
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
  ],
  de: [
    { q: 'Was ist ein lokales LLM und worin unterscheidet es sich von ChatGPT?', a: 'Ein lokales LLM läuft vollständig auf Ihrer eigenen Hardware — Smartphone, Laptop, Desktop oder Server — ohne Prompts an einen Cloud-Dienst zu senden. ChatGPT läuft auf OpenAI-Servern und überträgt Ihre Eingaben dorthin. Lokale LLMs sind privat, funktionieren offline und verursachen keine Kosten pro Token; ChatGPT ist bei seltenen Themen schneller und erfordert keine Einrichtung.' },
    { q: 'Benötige ich einen leistungsstarken Computer für lokale LLMs?', a: 'Nein. 4 GB RAM und eine integrierte GPU reichen für kleine Modelle wie Phi-4 Mini oder Gemma 3 4B. 16 GB RAM und eine mittelklassige GPU (RTX 3060 12 GB oder M3 Pro) decken die meisten Alltagsworkflows ab. Power-User benötigen 24+ GB VRAM.' },
    { q: 'Sind lokale LLMs so gut wie ChatGPT oder Claude?', a: 'Für Alltagsaufgaben (Chat, Zusammenfassung, gängiger Code) beträgt der Unterschied 2026 5–15 %. Bei Frontier-Reasoning und sehr obskurem Wissen liegen Cloud-Modelle noch vorn. Das Kosten-Qualitäts-Verhältnis spricht für lokale Modelle bei den meisten Nutzern mit privaten oder sensiblen Daten.' },
    { q: 'Kann ich lokale LLMs auf meinem Smartphone nutzen?', a: 'Ja. Apps wie LLM Farm und Private LLM führen Phi-4 Mini und Gemma 3 4B auf iPhone 16+ und aktuellen Android-Flaggschiffen aus. Die Leistung beträgt 8–15 Tokens/Sek. — nutzbar für Chat, Entwürfe und Offline-Nachschlagewerke.' },
    { q: 'Was kostet der Betrieb eines lokalen LLMs?', a: 'Nach der Hardware-Investition fallen nur Stromkosten an — meist 1–3 €/Monat bei moderater Nutzung. Die Hardware-Investition reicht von 0 € (vorhandener Laptop) bis ca. 1.999 € für einen High-End-Build. Im Vergleich zu SaaS-Abonnements von 20–200 €/Monat ist die Amortisation typischerweise in 8–24 Monaten erreicht.' },
    { q: 'Sind meine Daten bei lokalen LLMs wirklich privat?', a: 'Ja — vorausgesetzt, die App sendet keine Prompts per Telemetrie, was die meisten nicht tun. Überprüfbar mit Open-Source-Apps (Jan, GPT4All, Ollama), bei denen Sie den Netzwerkverkehr auditieren können. Die Modelldatei selbst sendet keine Daten — sie sind lediglich Gewichte auf der Festplatte.' },
    { q: 'Welche lokale LLM-App ist am einfachsten für Einsteiger?', a: 'GPT4All hat die einfachste Installation (ein Klick, läuft mit 8 GB RAM). LM Studio bietet den größten Funktionsumfang. Jan ist die beste Wahl für Datenschutz. Einen Vergleich mit Benchmarks finden Sie im Artikel LM Studio vs. Jan vs. GPT4All.' },
    { q: 'Können lokale LLMs meinen Coding-Assistenten ersetzen?', a: 'Ja. Continue.dev + Ollama + Qwen3-Coder erreicht 90–95 % der GitHub-Copilot-Qualität bei alltäglichen TypeScript- und Python-Aufgaben — mit vollständiger Code-Privatsphäre. Hardware-Anforderungen: RTX 3060 12 GB oder M3 Pro+ Mac.' },
    { q: 'Funktionieren lokale LLMs vollständig offline?', a: 'Ja — sobald das Modell heruntergeladen ist, findet die gesamte Inferenz lokal statt. Nützlich für Reisen, eingeschränkte Netzwerke, sichere Umgebungen und überall dort, wo das Internet unzuverlässig ist.' },
    { q: 'Welcher lokale LLM-Stack eignet sich am besten für Unternehmen in der EU?', a: 'Für DSGVO- und EU-KI-Gesetz-Konformität: Ollama oder vLLM auf dedizierter Hardware, kombiniert mit Jan (UI), Continue.dev (Coding) und AnythingLLM (RAG). Alles Open Source, alles auditierbar, alles On-Premises. Mistral Large ist eine starke EU-gehostete Alternative für hybride Setups.' },
    { q: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?', a: 'Ja, grundsätzlich. Da lokale LLMs alle Daten ausschließlich auf Ihrer eigenen Hardware verarbeiten, erfüllen Sie automatisch die Anforderungen der DSGVO-Artikel 5 (Datensparsamkeit) und Artikel 25 (Datenschutz durch Technikgestaltung). Im Gegensatz zu Cloud-LLMs müssen Sie keinen Auftragsverarbeitungsvertrag (AVV) gemäß Artikel 28 mit einem US-amerikanischen Anbieter abschließen. Für Unternehmen empfehlen sich Open-Source-Runtimes (Ollama, vLLM) in Kombination mit den BSI-Grundschutz-Katalogen, um interne IT-Sicherheitsanforderungen vollständig zu erfüllen. Ein Datenschutz-Audit ist dennoch ratsam, wenn personenbezogene Daten verarbeitet werden.' },
    { q: 'Sind lokale LLMs für den deutschen Mittelstand geeignet?', a: 'Ja, besonders für mittelständische Unternehmen mit strengen Datenschutz- oder Compliance-Anforderungen. Lokale LLMs bieten Datensouveränität ohne laufende SaaS-Kosten, was die Amortisation in 8–18 Monaten ermöglicht. Empfohlener Stack für den Mittelstand: Ollama als Runtime, Jan oder Open WebUI als Benutzeroberfläche, AnythingLLM für Dokument-RAG und Continue.dev für die Softwareentwicklung. Für unternehmenskritische Anwendungen empfiehlt das BSI (Bundesamt für Sicherheit in der Informationstechnik) den Einsatz von On-Premises-Modellen in Übereinstimmung mit dem BSI-Grundschutz-Kompendium.' },
  ],
}

function PowerArticleCard({ slug, dot, lang }: { slug: string; dot: string; lang: 'en' | 'de' }) {
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
      href={powerLLMArticlePath(lang, slug)}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
        {title}
      </span>
    </Link>
  )
}

function renderLocalizedHub(lang: 'en' | 'de') {
  const lastUpdated = '2026-05-07'
  const hero = HUB_HERO_L10N[lang]
  const faqs = HUB_FAQS_L10N[lang]
  const labels = HUB_LABELS_L10N[lang]
  const dateLocale = lang === 'de' ? 'de-DE' : 'en-US'

  const hubFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}${powerLLMHubPath(lang)}` },
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
            <p className="text-xs text-text-secondary mb-4">{labels.lastUpdatedLabel} <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString(dateLocale, { month: 'long', year: 'numeric' })}</time></p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              {hero.h1}
            </h1>
            <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
              {hero.intro} <strong>{hero.introBold}</strong>
            </p>

            {/* Key Takeaways */}
            <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{labels.keyTakeawaysLabel}</p>
              <ul className="space-y-2">
                {hero.keyTakeaways.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Themed sections — one per category */}
          {HUB_THEMES.map((theme, idx) => {
            const themeText = lang === 'de' ? HUB_THEME_TEXT_DE[idx] : theme
            return (
              <section key={theme.id} id={theme.id} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${theme.colorBadge}`}>
                    {themeText.badge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{themeText.question}</h2>
                <p className="text-text-secondary text-sm mb-6 max-w-2xl">{themeText.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {theme.slugs.map((slug) => (
                    <PowerArticleCard key={slug} slug={slug} dot={theme.colorDot} lang={lang} />
                  ))}
                </div>
              </section>
            )
          })}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.faqHeading}</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="border border-primary/15 rounded-xl p-4 group bg-card">
                  <summary className="cursor-pointer font-semibold text-text-primary group-open:mb-3">{f.q}</summary>
                  <p className="text-text-secondary leading-relaxed text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="border-t border-primary/15 pt-8">
            <h2 className="text-lg font-bold text-text-primary mb-4">{labels.relatedReadingHeading}</h2>
            <ul className="space-y-2 text-sm">
              {labels.relatedReadingLinks.map((link, i) => (
                <li key={i}><Link href={link.href} className="text-primary hover:underline">{link.label}</Link></li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </>
  )
}
