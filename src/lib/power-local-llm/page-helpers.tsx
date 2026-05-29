// Shared server-side rendering helpers for the Power Local LLM cluster.
// Both the EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/) call into here so
// the metadata + JSON-LD + page JSX logic lives in exactly one place.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { PowerLocalLLMPostClient } from '@/components/PowerLocalLLMPostClient'
import { powerLLMContent } from './content'
import { POWER_LLM_SLUG_TO_KEY } from './slugs'
import { POWER_LLM_CATEGORIES } from './categories'
import { powerLLMAlternates, powerLLMHubPath, powerLLMArticlePath } from './metadata-helpers'
import { POWER_LLM_BRIEFS, type ArticleBrief } from './briefs'
import { isPowerLLMArticlePublished, isPowerLLMHubPublished } from './published'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新' }
import { getPowerLLMGeoEntities } from '@/lib/geo-schema'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar'

const HOME_LABEL: Partial<Record<Lang, string>> = {
  en: 'Home',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  zh: '主页',
}

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

const COMING_SOON_COPY: Partial<Record<Lang, { badge: string; bodyArticle: string; bodyHub: string; back: string }>> = {
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
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
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
          url: (article as any).heroImage
            ? `${BASE}${(article as any).heroImage}`
            : `${BASE}/api/og/${slug}?lang=${lang}`,
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
      images: [`${BASE}/api/og/${slug}?lang=${lang}`],
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
      sameAs: [
        'https://www.linkedin.com/in/hanskuepper/',
        'https://x.com/HansKuepperAPPs',
        'https://github.com/HansHKApps',
        'https://bsky.app/profile/hhkbluesky.bsky.social',
      ],
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

  // Prefer heroImage when available, fall back to OG API route
  if ((article as any).heroImage) {
    ;(articleSchema as any).image = {
      '@type': 'ImageObject',
      url: `${BASE}${(article as any).heroImage}`,
      width: 1200,
      height: 630,
    }
  }

  // Inject GEO Schema Matrix entities
  const geoAbout = getPowerLLMGeoEntities((article as any).theme ?? '', lang)
  if (geoAbout.length > 0) {
    (articleSchema as any).about = geoAbout
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: `${BASE}${powerLLMHubPath(lang)}` },
      { '@type': 'ListItem', position: 3, name: article.title ?? slugToTitle(slug), item: canonicalUrl },
    ],
  }

  const faqEntries = Object.values(article.sections).flatMap((s) => s.faqs ?? [])
  const quickAnswerTopEntry = (article as any).quickAnswerTop?.[lang]
  const allFaqEntries = [
    ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema =
    article.faqSchema ??
    (allFaqEntries.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFaqEntries.map((f) => ({
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
          step: howToSection.numberedItems!.map((step, i) => {
            const rawText = typeof step === 'string' ? step : `${step.title}: ${step.whyItMatters}`
            const cleanText = rawText.replace(/\*\*/g, '')
            const colonIdx = cleanText.indexOf(':')
            const name = typeof step !== 'string'
              ? step.title
              : colonIdx > 0 && colonIdx < 80
                ? cleanText.slice(0, colonIdx).trim()
                : cleanText.slice(0, 80).trim()
            return {
              '@type': 'HowToStep',
              position: i + 1,
              name,
              text: cleanText,
            }
          }),
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
  const titleByLang: Partial<Record<Lang, string>> = {
    en: 'Power Local LLM: Run AI Apps Privately on Your Own Hardware (2026)',
    de: 'Power Local LLM: KI-Apps privat auf eigener Hardware ausführen (2026)',
    fr: 'Power Local LLM: Exécuter des applications IA privées sur votre matériel (2026)',
    ja: 'Power Local LLM: AI アプリを自分のハードウェアでプライベート実行 (2026)',
    zh: 'Power Local LLM：在自己的硬件上私密运行 AI 应用（2026）',
  }
  const descByLang: Partial<Record<Lang, string>> = {
    en: 'Stop paying for SaaS AI tools. Run coding assistants, RAG systems, agents, and creative apps fully offline with local LLMs. 35 guides, tested workflows, 2026 stack.',
    de: 'Hör auf, für SaaS-KI-Tools zu zahlen. Führe Coding-Assistenten, RAG-Systeme, Agenten und kreative Apps vollständig offline mit lokalen LLMs aus.',
    fr: 'Arrêtez de payer pour des outils IA SaaS. Exécutez des assistants de code, RAG, agents et applications créatives hors ligne avec des LLMs locaux.',
    ja: 'SaaS AI ツールへの支払いを止めましょう。コーディングアシスタント、RAG、エージェント、創作アプリをローカル LLM で完全オフラインで実行。',
    zh: '停止为 SaaS AI 工具付费。使用本地 LLM 完全离线运行编码助手、RAG 系统、代理和创意应用。',
  }

  const isPublished = isPowerLLMHubPublished(lang)

  return {
    title: truncateTitle((titleByLang[lang] ?? titleByLang["en"])!),
    description: (descByLang[lang] ?? descByLang["en"])!,
    alternates: powerLLMAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: titleByLang[lang],
      description: (descByLang[lang] ?? descByLang["en"])!,
      url: `${BASE}${powerLLMHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: titleByLang[lang],
      description: (descByLang[lang] ?? descByLang["en"])!,
    },
  } satisfies Metadata
}

export async function buildHubPageElement(lang: Lang) {
  if (lang === 'en' || lang === 'de' || lang === 'fr' || lang === 'ja' || lang === 'zh') {
    return renderLocalizedHub(lang as 'en' | 'de' | 'fr' | 'ja' | 'zh')
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
  const copy = (COMING_SOON_COPY[lang] ?? COMING_SOON_COPY['en'])!
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
      'apple-mlx-vs-nvidia-cuda-local-llm-2026',
      'deepseek-vs-qwen-local-comparison-2026',
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
      'qwen-local-deployment-complete-guide-2026',
      'best-workstation-build-local-ai-2026',
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
      'best-rag-tools-for-business-documents-2026',
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
      'best-local-llm-ide-plugins-2026',
      'deepseek-vs-qwen-coding-local-2026',
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
      'local-ai-behind-firewall-offline-2026',
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
      'wechat-bot-local-llm-personal-assistant-2026',
      'wechat-local-llm-integration-2026',
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

const HUB_THEME_TEXT_FR: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: 'Aperçu & Référence',
    question: 'Aperçu & Référence : Par Où Commencer dans l\'Écosystème des LLMs Locaux ?',
    description: 'Un annuaire de tous les outils LLM locaux — runtimes, applications de bureau, interfaces web, assistants de codage, systèmes RAG, frameworks d\'agents, outils vocaux/multimodaux, mobile et plugins de productivité. La carte « ce qui existe » avant de vous engager sur un stack.',
  },
  {
    badge: 'Applications de Bureau Les Plus Simples',
    question: 'Applications de Bureau Les Plus Simples : Quelle Application IA Locale Devriez-vous Installer en Premier ?',
    description: 'Applications de type ChatGPT que vous téléchargez et exécutez. Pas de terminal requis. Meilleur point d\'entrée pour les débutants. LM Studio, Jan et GPT4All testés côte à côte pour la vitesse, l\'UX et la confidentialité.',
  },
  {
    badge: 'RAG & Chat de Documents',
    question: 'RAG & Chat de Documents : Comment Parlez-vous Localement à Vos Propres PDFs ?',
    description: 'Bases de connaissances personnelles qui ne quittent jamais votre appareil. AnythingLLM, PrivateGPT et Open WebUI testés sur des corpus réels. Choix de modèles d\'embedding pour le contenu juridique, de recherche et technique.',
  },
  {
    badge: 'Assistants de Codage',
    question: 'Assistants de Codage : Un LLM Local Peut-il Vraiment Remplacer GitHub Copilot ?',
    description: 'Continue.dev, Cline, Aider et Qwen3-Coder benchmarkés contre GitHub Copilot sur de vrais projets Next.js, Python et Rust. Calculs de coûts, guides de configuration et évaluations honnêtes des écarts de qualité.',
  },
  {
    badge: 'Agents IA Locaux & Tool-Calling',
    question: 'Agents IA Locaux & Tool-Calling : Quels Workflows Fonctionnent Vraiment Sans le Cloud ?',
    description: 'MCP, tool-calling, agents autonomes — la frontière 2026. Rapports honnêtes sur ce qui fonctionne fiablement (et ce qui échoue encore). Remplacez Zapier par des agents auto-hébergés et des modèles conformes à l\'UE.',
  },
  {
    badge: 'Créatif & Roleplay',
    question: 'Créatif & Roleplay : Quels Modèles Locaux Écrivent Comme un Humain ?',
    description: 'Fiction, dialogues, worldbuilding, scénarios — testés sur 50+ prompts créatifs. SillyTavern vs Agnai vs RisuAI pour le travail de personnage. Avis honnête sur les modèles non censurés pour l\'écriture créative légitime.',
  },
  {
    badge: 'LLMs Mobiles & Edge',
    question: 'LLMs Mobiles & Edge : Pouvez-vous Vraiment Exécuter une IA Réelle Hors Ligne sur un Téléphone ?',
    description: 'iPhone, Android, iPad, Pixel — testés sur de vrais appareils en 2026. Phi-4 Mini, Gemma 3 4B, SmolLM benchmarkés pour la vitesse et la qualité. Assistants vocaux et pipelines hors ligne basés sur Whisper.',
  },
  {
    badge: 'Productivité & Outils de Connaissance',
    question: 'Productivité : Comment Intégrez-vous l\'IA Locale dans Votre Workflow Quotidien ?',
    description: 'Intégrations Obsidian, Logseq et Joplin. Automatisation des emails et des calendriers. Remplacez Grammarly et Notion AI par des modèles locaux. Stack complet de base de connaissances personnelle pour 10 000+ entrées.',
  },
  {
    badge: 'Voix, Parole & Multimodal',
    question: 'Voix & Multimodal : Comment Construire un Pipeline Complet de Parole et de Vision Hors Ligne ?',
    description: 'Reconnaissance vocale locale avec whisper.cpp et faster-whisper. Synthèse vocale locale avec Piper, Coqui et XTTS v2. Modèles de vision (LLaVA, Llama 3.2 Vision) via Ollama. Assistants vocaux hors ligne complets et pipelines multimodaux — pas de microphone cloud.',
  },
]

// JA theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_JA: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: '概要 & リファレンス',
    question: '概要 & リファレンス：ローカルLLMエコシステムのどこから始めますか？',
    description: 'すべてのローカルLLMツールのディレクトリ — ランタイム、デスクトップアプリ、Web UI、コーディングアシスタント、RAGシステム、エージェントフレームワーク、音声/マルチモーダル、モバイル、生産性プラグイン。スタックにコミットする前の「何が存在するか」マップ。',
  },
  {
    badge: '最も簡単なデスクトップアプリ',
    question: '最も簡単なデスクトップアプリ：最初にインストールすべきローカルAIアプリはどれですか？',
    description: 'ChatGPT風アプリをダウンロードして実行。ターミナルは不要です。初心者向けの最適な入口。LM Studio、Jan、GPT4Allを速度、UX、プライバシーについて並べて比較。',
  },
  {
    badge: 'RAG & ドキュメントチャット',
    question: 'RAG & ドキュメントチャット：あなた独自のPDFをローカルでチャットするにはどうしますか？',
    description: 'デバイスを離れない個人知識ベース。AnythingLLM、PrivateGPT、Open WebUIを実際のコーパスでテスト。法律、研究、技術コンテンツ向けの埋め込みモデルピック。',
  },
  {
    badge: 'コーディングアシスタント',
    question: 'コーディングアシスタント：ローカルLLMは本当にGitHub Copilotを置き換えることができるか？',
    description: 'Continue.dev、Cline、Aider、Qwen3-Coderを実際のNext.js、Python、RustプロジェクトでGitHub Copilotとベンチマーク。コスト計算、セットアップガイド、品質ギャップについての誠実な判定。',
  },
  {
    badge: 'ローカルAIエージェント & ツール呼び出し',
    question: 'ローカルAIエージェント & ツール呼び出し：クラウドなしで実際に機能するワークフローはどれですか？',
    description: 'MCP、ツール呼び出し、自律エージェント — 2026年のフロンティア。何が確実に実行され、何がまだ失敗しているかについての誠実なレポート。ZapierをセルフホストエージェントとEU準拠パターンで置き換える。',
  },
  {
    badge: 'クリエイティブ & ロールプレイ',
    question: 'クリエイティブ & ロールプレイ：どのローカルモデルが人間のように書きますか？',
    description: 'フィクション、対話、世界観構築、脚本 — 50以上のクリエイティブプロンプトでテスト。キャラクター作成用のSillyTavern vs Agnai vs RisuAI。正当なクリエイティブライティングのための検閲されていないモデルについての誠実な意見。',
  },
  {
    badge: 'モバイル & エッジLLM',
    question: 'モバイル & エッジLLM：スマートフォンで本当にオフラインAIを実行できますか？',
    description: 'iPhone、Android、iPad、Pixel — 2026年の実デバイスでテスト。Phi-4 Mini、Gemma 3 4B、SmolLMを速度と品質についてベンチマーク。音声アシスタントとWhisperベースのオフラインパイプライン。',
  },
  {
    badge: '生産性 & ナレッジツール',
    question: '生産性：ローカルAIを日々のワークフローにどのように組み込みますか？',
    description: 'Obsidian、Logseq、Joplin統合。メール/カレンダー自動化。Grammarly と Notion AI をローカルモデルで置き換える。10,000以上のアイテムに対応する完全なパーソナルナレッジベーススタック。',
  },
  {
    badge: '音声、スピーチ & マルチモーダル',
    question: '音声 & マルチモーダル：完全にオフラインの音声とビジョンパイプラインをどのように構築しますか？',
    description: 'whisper.cpp と faster-whisper によるローカル音声認識。Piper、Coqui、XTTS v2 によるローカル音声合成。LLaVA、Llama 3.2 Vision via Ollama などのビジョンモデル。完全なオフライン音声アシスタント構築とマルチモーダルパイプライン — クラウドマイクは不要。',
  },
]

// ZH theme text — same index order as HUB_THEMES
const HUB_THEME_TEXT_ZH: Array<{ badge: string; question: string; description: string }> = [
  {
    badge: '概览 & 参考',
    question: '概览 & 参考：在本地LLM生态系统中从何处开始？',
    description: '所有值得了解的本地LLM工具目录 — 运行时、桌面应用、Web UI、编码助手、RAG系统、代理框架、语音/多模态、移动和生产力插件。确定堆栈之前的"存在什么"地图。',
  },
  {
    badge: '最简单的桌面应用',
    question: '最简单的桌面应用：您应该首先安装哪个本地AI应用？',
    description: '您下载并运行的ChatGPT风应用。无需终端。初学者的最佳入门点。LM Studio、Jan和GPT4All在速度、用户体验和隐私方面并排测试。',
  },
  {
    badge: 'RAG & 文档对话',
    question: 'RAG & 文档对话：您如何在本地与自己的PDF进行交谈？',
    description: '永不离开设备的个人知识库。AnythingLLM、PrivateGPT和Open WebUI在真实语料库中测试。法律、研究和技术内容的嵌入模型选择。',
  },
  {
    badge: '编码助手',
    question: '编码助手：本地LLM真的能替代GitHub Copilot吗？',
    description: 'Continue.dev、Cline、Aider和Qwen3-Coder在真实Next.js、Python和Rust项目上与GitHub Copilot基准。成本计算、设置指南和对质量差距的诚实评价。',
  },
  {
    badge: '本地AI代理 & 工具调用',
    question: '本地AI代理 & 工具调用：哪些工作流在没有云的情况下真正有效？',
    description: 'MCP、工具调用、自主代理 — 2026年前沿。诚实报告什么可靠运行（什么仍然失败）。用自托管代理和欧盟合规模式替代Zapier。',
  },
  {
    badge: '创意 & 角色扮演',
    question: '创意 & 角色扮演：哪些本地模型写得像人类？',
    description: '虚构、对话、世界构建、剧本 — 在50多个创意提示上测试。SillyTavern vs Agnai vs RisuAI用于角色创作。关于正当创意写作未审查模型的诚实看法。',
  },
  {
    badge: '移动 & 边缘LLM',
    question: '移动 & 边缘LLM：您能在手机上真正离线运行真正的AI吗？',
    description: 'iPhone、Android、iPad、Pixel — 在2026年真实设备上测试。Phi-4 Mini、Gemma 3 4B、SmolLM在速度和质量上的基准。语音助手和基于Whisper的离线管道。',
  },
  {
    badge: '生产力 & 知识工具',
    question: '生产力：您如何将本地AI集成到日常工作流程中？',
    description: 'Obsidian、Logseq、Joplin集成。电子邮件/日历自动化。用本地模型替代Grammarly和Notion AI。10,000+项目的完整个人知识库堆栈。',
  },
  {
    badge: '语音、语言 & 多模态',
    question: '语音 & 多模态：您如何构建完全离线的语音和视觉管道？',
    description: '使用whisper.cpp和faster-whisper的本地STT。使用Piper、Coqui和XTTS v2的本地TTS。LLaVA、Llama 3.2 Vision via Ollama等视觉模型。完整离线语音助手构建和多模态管道 — 无云麦克风。',
  },
]

type HubHeroL10n = { h1: string; intro: string; introBold: string; keyTakeaways: string[] }

const HUB_HERO_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh', HubHeroL10n> = {
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
  fr: {
    h1: 'Power Local LLM — Créez une Stack IA Privée Qui Remplace Vos Abonnements SaaS',
    intro: 'Les LLMs locaux ne sont plus de simples chatbots. En 2026, ils tournent dans votre éditeur de code, interrogent vos documents privés, automatisent les workflows et remplacent les outils que vous payez mensuellement.',
    introBold: 'Si vous pouvez exécuter Ollama ou LM Studio, vous remplacez 5 à 10 abonnements SaaS d\'ici la fin du mois.',
    keyTakeaways: [
      'L\'écosystème des LLMs locaux en 2026 = outils de chat, systèmes RAG, agents de codage, applications créatives, inférence mobile et agents de tool-calling.',
      'Points d\'entrée recommandés : LM Studio (débutants), Ollama + Open WebUI (équilibre), Continue.dev (développeurs).',
      'Plus grand changement 2026 : les harnesses de codage agentic remplacent les factures cloud de 200 $/mois.',
      'Les LLMs mobiles et edge sont le segment à plus forte croissance — sur téléphones, tablettes et NPUs.',
      'Confidentialité, arbitrage des coûts et fiabilité hors ligne sont les trois forces motrices de l\'adoption.',
    ],
  },
  ja: {
    h1: 'Power Local LLM — SaaS料金を削減するプライベートAIスタックを構築',
    intro: 'ローカルLLMはもはやチャットボットに限った話ではありません。2026年は、コードエディタ内で実行され、プライベートドキュメントをクエリし、ワークフローを自動化し、月単位で支払っているツールを置き換えています。',
    introBold: 'OllamaまたはLM Studioを実行できれば、月末までに5～10のSaaSサブスクリプションを削減できます。',
    keyTakeaways: [
      '2026年のローカルLLMエコシステム = チャットツール、RAGシステム、コーディングエージェント、クリエイティブアプリ、モバイル推論、ツール呼び出しエージェント。',
      '推奨エントリーポイント: LM Studio（初心者向け）、Ollama + Open WebUI（バランス型）、Continue.dev（開発者向け）。',
      '2026年最大の変化: エージェントティックコーディングハーネスが月額200ドルのクラウドAPI料金を削減。',
      'モバイルおよびエッジLLMが最も急速に成長しているセグメント — スマートフォン、タブレット、NPUで実行。',
      'プライバシー、コスト裁定取引、オフライン信頼性が導入を推進する3つの力。',
    ],
  },
  zh: {
    h1: 'Power Local LLM — 构建私有AI堆栈，替代您的SaaS订阅费用',
    intro: '本地LLM已不仅仅是聊天机器人。2026年它们在您的代码编辑器内运行、查询您的私有文档、自动化工作流程，并替代您当前按月支付的工具。',
    introBold: '如果您可以运行Ollama或LM Studio，可以在本月底前替代5～10个SaaS订阅。',
    keyTakeaways: [
      '2026年本地LLM生态 = 聊天工具、RAG系统、编码代理、创意应用、移动推理、工具调用代理。',
      '最佳入门点：LM Studio（初学者）、Ollama + Open WebUI（均衡）、Continue.dev（编码者）。',
      '2026年最大转变：代理编码框架替代$200/月的云API账单。',
      '移动和边缘LLM增长最快 — 在手机、平板和NPU上运行。',
      '隐私、成本优化和离线可靠性推动采用的三股力量。',
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

const HUB_LABELS_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh', HubLabelsL10n> = {
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
  fr: {
    faqHeading: 'Questions Fréquemment Posées',
    keyTakeawaysLabel: 'Points Clés',
    lastUpdatedLabel: 'Dernière mise à jour :',
    relatedReadingHeading: 'Lectures Complémentaires',
    relatedReadingLinks: [
      { href: '/fr/local-llms/local-llm-hardware-guide-2026', label: 'Guide Matériel LLM Local 2026' },
      { href: '/fr/local-llms/best-local-llms-2026', label: 'Meilleurs LLMs Locaux en 2026' },
      { href: '/fr/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/fr/prompt-engineering/rag-explained', label: 'RAG Expliqué' },
    ],
  },
  ja: {
    faqHeading: 'よくある質問',
    keyTakeawaysLabel: '重要ポイント',
    lastUpdatedLabel: '最終更新:',
    relatedReadingHeading: '関連リソース',
    relatedReadingLinks: [
      { href: '/ja/local-llms/local-llm-hardware-guide-2026', label: 'ローカルLLMハードウェアガイド2026' },
      { href: '/ja/local-llms/best-local-llms-2026', label: '2026年最高のローカルLLM' },
      { href: '/ja/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/ja/prompt-engineering/rag-explained', label: 'RAG解説' },
    ],
  },
  zh: {
    faqHeading: '常见问题',
    keyTakeawaysLabel: '关键要点',
    lastUpdatedLabel: '最后更新:',
    relatedReadingHeading: '相关阅读',
    relatedReadingLinks: [
      { href: '/zh/local-llms/local-llm-hardware-guide-2026', label: '本地LLM硬件指南2026' },
      { href: '/zh/local-llms/best-local-llms-2026', label: '2026年最佳本地LLM' },
      { href: '/zh/local-llms/llamacpp-vs-ollama-vs-vllm', label: 'llama.cpp vs Ollama vs vLLM' },
      { href: '/zh/prompt-engineering/rag-explained', label: 'RAG详解' },
    ],
  },
}

const HUB_FAQS_L10N: Record<'en' | 'de' | 'fr' | 'ja' | 'zh', HubFaq[]> = {
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
  fr: [
    { q: 'Qu\'est-ce qu\'un LLM local et en quoi est-ce différent de ChatGPT ?', a: 'Un LLM local s\'exécute entièrement sur votre matériel — téléphone, laptop, ordinateur de bureau ou serveur — sans envoyer vos prompts à aucun service cloud. ChatGPT s\'exécute sur les serveurs OpenAI et y envoie vos prompts. Les LLMs locaux sont privés, fonctionnent hors ligne et n\'ont aucun coût par token ; ChatGPT est plus rapide sur les sujets rares et ne nécessite aucune configuration.' },
    { q: 'Ai-je besoin d\'un ordinateur puissant pour exécuter des LLMs locaux ?', a: 'Non. 4 Go de RAM et un GPU intégré suffisent pour les petits modèles comme Phi-4 Mini ou Gemma 3 4B. 16 Go de RAM et un GPU milieu de gamme (RTX 3060 12 Go ou M3 Pro) couvrent la plupart des workflows quotidiens. Les utilisateurs avancés veulent 24+ Go de VRAM.' },
    { q: 'Les LLMs locaux sont-ils aussi bons que ChatGPT ou Claude ?', a: 'Pour les tâches quotidiennes (chat, résumé, code courant), l\'écart est de 5 à 15 % en 2026. Pour le raisonnement de pointe et les connaissances très obscures, les modèles cloud gardent une longueur d\'avance. Le compromis coût-qualité favorise le local pour la plupart des utilisateurs ayant des données privées ou sensibles.' },
    { q: 'Puis-je exécuter des LLMs locaux sur mon téléphone ?', a: 'Oui. Des applications comme LLM Farm et Private LLM exécutent Phi-4 Mini et Gemma 3 4B sur iPhone 16+ et les appareils Android phares. Les performances sont de 8 à 15 tokens/sec — utilisable pour le chat, la rédaction de brouillons et les références hors ligne.' },
    { q: 'Combien coûte l\'exécution d\'un LLM local ?', a: 'Après le matériel, le coût marginal n\'est que l\'électricité — généralement 1 à 3 $/mois pour une utilisation modérée. L\'investissement matériel varie de 0 $ (laptop existant) à env. 2 000 $ pour une configuration haut de gamme. Par rapport aux abonnements SaaS de 20 à 200 $/mois, l\'amortissement est généralement de 8 à 24 mois.' },
    { q: 'Mes données sont-elles vraiment privées quand j\'utilise des LLMs locaux ?', a: 'Oui — en supposant que l\'application ne télémètre pas les prompts, ce que la plupart ne font pas. Vérifiable via des applications open source (Jan, GPT4All, Ollama) où vous pouvez vérifier le trafic réseau. Le fichier de modèle lui-même n\'« appelle pas à la maison » — il n\'est que des poids sur disque.' },
    { q: 'Quelle est l\'application LLM local la plus simple pour les débutants ?', a: 'GPT4All a l\'installation la plus simple (un clic, s\'exécute avec 8 Go de RAM). LM Studio offre le plus de fonctionnalités. Jan est le meilleur pour la confidentialité. Consultez la comparaison dédiée LM Studio vs Jan vs GPT4All pour les benchmarks de chacun.' },
    { q: 'Les LLMs locaux peuvent-ils remplacer mon assistant de codage ?', a: 'Oui. Continue.dev + Ollama + Qwen3-Coder atteint 90 à 95 % de la qualité de GitHub Copilot sur le travail TypeScript et Python quotidien, avec une confidentialité totale du code. La configuration requise est RTX 3060 12 Go ou M3 Pro+ Mac.' },
    { q: 'Les LLMs locaux fonctionnent-ils complètement hors ligne ?', a: 'Oui — une fois le modèle téléchargé, toute l\'inférence est locale. Utile pour les voyages, les réseaux restreints, les environnements sécurisés et partout où Internet n\'est pas fiable.' },
    { q: 'Quelle stack LLM local est la meilleure pour les entreprises de l\'UE ?', a: 'Pour la conformité RGPD/Loi sur l\'IA de l\'UE : Ollama ou vLLM s\'exécutant sur du matériel dédié, associés à Jan (UI), Continue.dev (codage) et AnythingLLM (RAG). Tout open source, tout auditable, tout sur site. Mistral Large est une alternative hébergée en UE solide pour les configurations hybrides.' },
  ],
  ja: [
    { q: 'ローカルLLMとは何か、ChatGPTとどう違うのか？', a: 'ローカルLLMはあなた自身のハードウェア（スマートフォン、ノートパソコン、デスクトップ、またはサーバー）で完全に実行され、プロンプトをクラウドサービスに送信しません。ChatGPTはOpenAIのサーバーで実行され、プロンプトをそこに送信します。ローカルLLMはプライベート、オフラインで動作、トークンごとのコスト無し。ChatGPTは稀なトピックでは高速で、セットアップは不要です。' },
    { q: 'ローカルLLMを実行するには強力なコンピュータが必要か？', a: 'いいえ。4 GB RAMと統合GPUでPhi-4 MiniやGemma 3 4Bなどの小さなモデルで十分です。16 GB RAMとミッドレンジGPU（RTX 3060 12 GBまたはM3 Pro）は、ほとんどの日常的なワークフローをカバーしています。ハイエンドユーザーは24+ GB VRAMを望みます。' },
    { q: 'ローカルLLMはChatGPTやClaudeと同じくらい優れているか？', a: '日常的なタスク（チャット、要約、一般的なコード）では、2026年のギャップは5～15％です。フロンティア推論と非常にニッチな知識では、クラウドモデルがまだ主導しています。プライベートまたは機密データを扱うほとんどのユーザーにとって、コスト対品質のトレードオフはローカルが有利です。' },
    { q: 'スマートフォンでローカルLLMを実行できるか？', a: 'はい。LLM FarmやPrivate LLMなどのアプリはiPhone 16+およびフラッグシップAndroidデバイスでPhi-4 MiniとGemma 3 4Bを実行します。パフォーマンスは毎秒8～15トークン。チャット、ドラフト作成、オフラインリファレンスに利用可能です。' },
    { q: 'ローカルLLM実行コストはいくらか？', a: 'ハードウェア後、限界コストは電気代だけです。通常、中程度の使用で月々$1～3。ハードウェア投資は既存ラップトップ$0から高性能ビルド約$2,000までです。月々$20～200のSaaS購読と比較して、回収期間は通常8～24ヶ月です。' },
    { q: 'ローカルLLM使用時、データは本当にプライベートか？', a: 'はい。アプリがプロンプトをテレメトリーしないと仮定した場合（ほとんどがそうしません）。Jan、GPT4All、Ollama などのオープンソースアプリでネットワークトラフィックを監査して確認できます。モデルファイル自体は「本国に電話」しません。単にディスク上の重みです。' },
    { q: '初心者向けで最も簡単なローカルLLMアプリは？', a: 'GPT4Allは最もシンプルなインストール（ワンクリック、8 GB RAMで実行）です。LM Studioは最も機能が豊富です。Janはプライバシーに最適です。各ベンチマークはLM Studio vs Jan vs GPT4All比較をご覧ください。' },
    { q: 'ローカルLLMはコーディングアシスタントを置き換えられるか？', a: 'はい。Continue.dev + Ollama + Qwen3-Coderは日常のTypeScriptおよびPython作業でGitHub Copilot品質の90～95％に達し、完全なコードプライバシーです。必要なハードウェア：RTX 3060 12 GBまたはM3 Pro+ Mac。' },
    { q: 'ローカルLLMは完全にオフラインで動作するか？', a: 'はい。モデルがダウンロードされると、すべての推論はローカルです。旅行、制限されたネットワーク、セキュアな環境、インターネットが不安定な場所に有用です。' },
    { q: 'EUの企業に最適なローカルLLMスタックは？', a: 'GDPR/EU AI Act準拠：Ollama またはvLLMを専用ハードウェアで実行し、Jan（UI）、Continue.dev（コーディング）、AnythingLLM（RAG）と組み合わせ。すべてオープンソース、すべて監査可能、すべてオンプレミス。Mistral Largeはハイブリッドセットアップの強力なEUホストオプションです。' },
  ],
  zh: [
    { q: '什么是本地LLM，它与ChatGPT有什么不同？', a: '本地LLM完全在您自己的硬件（手机、笔记本电脑、台式电脑或服务器）上运行，不会将提示发送给任何云服务。ChatGPT在OpenAI服务器上运行并将您的提示发送给它们。本地LLM是私有的、离线工作的、无按令牌费用的；ChatGPT在罕见主题上更快，无需设置。' },
    { q: '运行本地LLM需要强大的计算机吗？', a: '不需要。4 GB RAM和集成GPU足以运行小型模型，如Phi-4 Mini或Gemma 3 4B。16 GB RAM和中档GPU（RTX 3060 12 GB或M3 Pro）覆盖大多数日常工作流。高级用户需要24+ GB VRAM。' },
    { q: '本地LLM与ChatGPT或Claude一样好吗？', a: '对于日常任务（聊天、摘要、常见代码），2026年差距为5～15％。对于前沿推理和非常深奥的知识，云模型仍然领先。对于拥有私人或敏感数据的大多数用户，成本与质量的权衡更倾向于本地。' },
    { q: '我能在手机上运行本地LLM吗？', a: '可以。LLM Farm和Private LLM等应用程序在iPhone 16+和旗舰Android设备上运行Phi-4 Mini和Gemma 3 4B。性能为每秒8～15个令牌，可用于聊天、起草和离线参考。' },
    { q: '运行本地LLM的成本是多少？', a: '硬件之后，边际成本仅为电力，通常中等使用每月$1～3。硬件投资范围从$0（现有笔记本电脑）到约$2,000（高端配置）。与月费$20～200的SaaS订阅相比，回本期通常为8～24个月。' },
    { q: '使用本地LLM时，我的数据真的是私人的吗？', a: '是的，假设应用程序不会发送遥测提示（大多数应用程序不会）。可通过开源应用程序（Jan、GPT4All、Ollama）验证，您可在其中审计网络流量。模型文件本身不会"回家"，它只是磁盘上的权重。' },
    { q: '对初学者来说最简单的本地LLM应用是什么？', a: 'GPT4All安装最简单（一键点击，8 GB RAM运行）。LM Studio功能最丰富。Jan最好用于隐私。请参阅LM Studio vs Jan vs GPT4All专项对比了解每个应用的基准。' },
    { q: '本地LLM能否替代我的编码助手？', a: '可以。Continue.dev + Ollama + Qwen3-Coder在日常TypeScript和Python工作中达到GitHub Copilot质量的90～95％，具有完整的代码隐私。硬件要求为RTX 3060 12 GB或M3 Pro+ Mac。' },
    { q: '本地LLM能完全离线工作吗？', a: '可以。下载模型后，所有推理都在本地进行。适用于旅行、受限网络、安全环境以及任何互联网不可靠的地方。' },
    { q: '欧盟企业的最佳本地LLM堆栈是什么？', a: '满足GDPR/欧盟AI法案合规性：在专用硬件上运行Ollama或vLLM，结合Jan（UI）、Continue.dev（编码）和AnythingLLM（RAG）。全部开源、全部可审计、全部本地部署。Mistral Large是混合设置的强有力的欧盟托管替代方案。' },
  ],
}

function PowerArticleCard({ slug, dot, lang }: { slug: string; dot: string; lang: 'en' | 'de' | 'fr' | 'ja' | 'zh' }) {
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

  const publishDate = powerLLMContent[slug]?.['en']?.publishDate
  const dateModified = powerLLMContent[slug]?.['en']?.dateModified
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div className={`relative h-full transition-all rounded-xl ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}`}>
      {showNew && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {NEW_LABEL[lang] ?? NEW_LABEL['en']}
        </span>
      )}
      {showUpdated && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-amber-500 border-2 border-amber-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {UPDATED_LABEL[lang] ?? UPDATED_LABEL['en']}
        </span>
      )}
      <Link
        href={powerLLMArticlePath(lang, slug)}
        className={`flex items-start gap-3 bg-card rounded-xl p-4 h-full transition-colors group ${showNew ? 'border-2 border-emerald-400 hover:border-emerald-500' : showUpdated ? 'border-2 border-amber-400 hover:border-amber-500' : 'border border-primary/15 hover:border-primary/50 hover:bg-primary/5'}`}
      >
        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
        <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
          {title}
        </span>
      </Link>
    </div>
  )
}

function renderLocalizedHub(lang: 'en' | 'de' | 'fr' | 'ja' | 'zh') {
  const lastUpdated = '2026-05-07'
  const hero = HUB_HERO_L10N[lang]
  const faqs = HUB_FAQS_L10N[lang]
  const labels = HUB_LABELS_L10N[lang]
  const dateLocale = lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US'

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
    inLanguage: lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
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

          {/* Recently Published — auto-surfaced articles with publishDate within 15 days */}
          {(() => {
            const RECENT_HEADING: Record<string, string> = {
              en: 'New This Month', de: 'Neu diesen Monat', fr: 'Nouveautés du mois', ja: '今月の新着', zh: '本月新増',
            }
            const RECENT_SUB: Record<string, string> = {
              en: 'Just published — disappears from this spot after 14 days',
              de: 'Gerade veröffentlicht — verschwindet nach 14 Tagen',
              fr: 'Vient de paraître — disparaît de cet emplacement après 14 jours',
              ja: '公開されたばかり — 14日後にここから消えます',
              zh: '刚刚发布 — 14天后从此处消失',
            }
            const recentSlugs = Object.entries(powerLLMContent)
              .filter(([slug, content]) => isNewArticle(content?.['en']?.publishDate) && isPowerLLMArticlePublished(slug, 'en'))
              .map(([slug]) => slug)
            if (recentSlugs.length === 0) return null
            return (
              <section className="mb-16 border-2 border-emerald-400/40 rounded-2xl p-6 bg-emerald-50/30">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-black text-emerald-800 tracking-tight">
                    {RECENT_HEADING[lang] ?? RECENT_HEADING['en']}
                  </h2>
                  <span className="text-xs font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-sm rounded px-2.5 py-1">
                    {recentSlugs.length}
                  </span>
                </div>
                <p className="text-xs text-emerald-700/70 mb-5">{RECENT_SUB[lang] ?? RECENT_SUB['en']}</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {recentSlugs.map(slug => (
                    <PowerArticleCard key={slug} slug={slug} dot="bg-emerald-400" lang={lang} />
                  ))}
                </div>
              </section>
            )
          })()}

          {/* Themed sections — one per category */}
          {HUB_THEMES.map((theme, idx) => {
            const themeText = lang === 'de' ? HUB_THEME_TEXT_DE[idx] : lang === 'fr' ? HUB_THEME_TEXT_FR[idx] : lang === 'ja' ? HUB_THEME_TEXT_JA[idx] : lang === 'zh' ? HUB_THEME_TEXT_ZH[idx] : theme
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
