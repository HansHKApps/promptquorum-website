// Shared server-side rendering helpers for the Smart Home cluster.
// The EN and locale-prefixed app routes (/de/, /fr/, /ja/, /zh/, /es/, /pt/) all call
// into here so the metadata + JSON-LD + page JSX logic lives in exactly one place.
//
// Mirrors the architecture of src/lib/power-local-llm/page-helpers.tsx:
//   - path-based locales (NOT ?lang=) via metadata-helpers.ts
//   - noindex contract driven by published.ts (every page noindex until launch)
//   - auto-generated TechArticle + BreadcrumbList + FAQPage + HowTo + ItemList schema
//   - Coming-Soon fallback for any slug without authored content
//
// SCAFFOLD STATE (Phase 1): articles-barrel.ts is empty, so every article route renders
// Coming Soon and the hub renders the category grid with placeholder links. Content lands
// in Phase 2; translations + the noindex flip happen in Phase 3.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { truncateTitle } from '@/lib/utils'
import { SmartHomePostClient } from '@/components/SmartHomePostClient'
import { smartHomeContent } from './content'
import { SMART_HOME_SLUG_TO_KEY } from './slugs'
import { SMART_HOME_CATEGORIES } from './categories'
import { smartHomeAlternates, smartHomeHubPath, smartHomeArticlePath } from './metadata-helpers'
import { isSmartHomeArticlePublished, isSmartHomeHubPublished } from './published'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar'

const HOME_LABEL: Partial<Record<Lang, string>> = {
  en: 'Home',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  zh: '主页',
  es: 'Inicio',
  pt: 'Início',
  ar: 'الرئيسية',
}

const HUB_LABEL = 'Smart Home'

const SLUG_ACRONYMS: Record<string, string> = {
  ai: 'AI',
  llm: 'LLM',
  llms: 'LLMs',
  gdpr: 'GDPR',
  pc: 'PC',
  tts: 'TTS',
  stt: 'STT',
  nvr: 'NVR',
  x10: 'X10',
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
    bodyArticle: 'This Smart Home guide is being prepared. Explore the English version of the Smart Home hub in the meantime.',
    bodyHub: 'The Smart Home hub will be available in this language soon. Explore the English version below.',
    back: '← View English version',
  },
  de: {
    badge: 'Bald verfügbar',
    bodyArticle: 'Dieser Smart-Home-Leitfaden wird vorbereitet. Erkunden Sie in der Zwischenzeit die englische Version des Smart-Home-Hubs.',
    bodyHub: 'Der Smart-Home-Hub ist bald in dieser Sprache verfügbar. Sehen Sie sich unten die englische Version an.',
    back: '← Englische Version ansehen',
  },
  fr: {
    badge: 'Bientôt disponible',
    bodyArticle: 'Ce guide Smart Home est en cours de préparation. Explorez la version anglaise du hub Smart Home en attendant.',
    bodyHub: 'Le hub Smart Home sera bientôt disponible dans cette langue. Consultez la version anglaise ci-dessous.',
    back: '← Voir la version anglaise',
  },
  ja: {
    badge: '近日公開',
    bodyArticle: 'このスマートホームガイドは準備中です。その間、スマートホームハブの英語版をご覧ください。',
    bodyHub: 'スマートホームハブはまもなくこの言語でご利用いただけます。以下の英語版をご覧ください。',
    back: '← 英語版を表示',
  },
  zh: {
    badge: '即将推出',
    bodyArticle: '本智能家居指南正在准备中。请同时浏览智能家居中心的英文版。',
    bodyHub: '智能家居中心即将推出此语言版本。请查看以下的英文版。',
    back: '← 查看英文版',
  },
  es: {
    badge: 'Próximamente',
    bodyArticle: 'Esta guía de Smart Home está en preparación. Explora la versión en inglés del centro Smart Home mientras tanto.',
    bodyHub: 'El centro Smart Home estará disponible en este idioma pronto. Consulta la versión en inglés a continuación.',
    back: '← Ver versión en inglés',
  },
  pt: {
    badge: 'Em breve',
    bodyArticle: 'Este guia de Smart Home está em preparação. Explore a versão em inglês do hub Smart Home enquanto isso.',
    bodyHub: 'O hub Smart Home estará disponível neste idioma em breve. Confira a versão em inglês abaixo.',
    back: '← Ver versão em inglês',
  },
  ar: {
    badge: 'قريباً',
    bodyArticle: 'يجري إعداد دليل المنزل الذكي هذا. استكشف النسخة الإنجليزية من مركز المنزل الذكي في هذه الأثناء.',
    bodyHub: 'سيتوفر مركز المنزل الذكي بهذه اللغة قريباً. استكشف النسخة الإنجليزية أدناه.',
    back: '← عرض النسخة الإنجليزية',
  },
}

// ─── ARTICLE PAGE ───────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(SMART_HOME_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = SMART_HOME_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = smartHomeContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    article?.intro ??
    'A guide in the Smart Home cluster from PromptQuorum.'

  const isPublished = isSmartHomeArticlePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle.length <= 45 ? `${baseTitle} | PromptQuorum` : baseTitle),
    description: desc,
    alternates: smartHomeAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title: article?.title ?? fallbackTitle,
      description: desc,
      url: `${BASE}${smartHomeArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [
        {
          url: (article as any)?.heroImage
            ? `${BASE}${(article as any).heroImage}`
            : `${BASE}/api/og/${slug}?lang=${lang}`,
          width: 1200,
          height: 630,
          alt: article?.title ?? fallbackTitle,
        },
      ],
      publishedTime: article?.publishDate,
      modifiedTime: (article as any)?.dateModified ?? article?.publishDate,
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
            // Belt-and-braces noindex for crawlers that ignore the metadata API.
            'robots-cluster': 'noindex, follow',
          },
        }),
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = SMART_HOME_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = smartHomeContent[key]
  const enArticle = articleData?.['en']
  const hasEnContent = !!enArticle && Object.keys(enArticle.sections ?? {}).length > 0

  // Coming-soon when: slug exists in registry, but no EN content yet.
  if (!hasEnContent) {
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const langArticle = articleData?.[lang]
  const hasLangContent = !!langArticle && Object.keys(langArticle.sections ?? {}).length > 0

  if (!hasLangContent && lang !== 'en') {
    // Render coming-soon for non-EN locales until translations land. EN is guaranteed above.
    return renderComingSoon({ slug, lang, kind: 'article' })
  }

  const article = (langArticle ?? enArticle)!
  const canonicalUrl = `${BASE}${smartHomeArticlePath(lang, slug)}`

  // ─── Schemas (TechArticle + Breadcrumb + FAQ + HowTo + ItemList) ──
  const articleSchema = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
    url: canonicalUrl,
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
      name: 'Smart Home Guide',
      url: `${BASE}${smartHomeHubPath(lang)}`,
    },
  }

  if ((article as any).heroImage) {
    ;(articleSchema as any).image = {
      '@type': 'ImageObject',
      url: `${BASE}${(article as any).heroImage}`,
      width: 1200,
      height: 630,
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: lang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: HUB_LABEL, item: `${BASE}${smartHomeHubPath(lang)}` },
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
            const name =
              typeof step !== 'string'
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
            '@type': 'Thing',
            name: (row['Device'] ?? row['Tool'] ?? '').replace(/\*\*/g, '').trim(),
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
      <SmartHomePostClient slug={slug} lang={lang} />
    </>
  )
}

// ─── HUB PAGE ──────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const title = 'Smart Home, Run Locally: Private Home Automation on a Local LLM (2026)'
  const desc =
    'Run your smart home on your own hardware, not the cloud. Home Assistant, Matter local control, fully local voice assistants, and Ollama-driven AI automation. 25 guides.'

  const isPublished = isSmartHomeHubPublished(lang)

  return {
    title: truncateTitle(title),
    description: desc,
    alternates: smartHomeAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: true },
    openGraph: {
      title,
      description: desc,
      url: `${BASE}${smartHomeHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title,
      description: desc,
    },
    ...(isPublished
      ? {}
      : { other: { 'robots-cluster': 'noindex, follow' } }),
  } satisfies Metadata
}

// Per-category visual + copy. Mirrors HUB_THEMES in power-local-llm/page-helpers.tsx:
// colored badge → question H2 → 2-col card grid. Colors match THEME_COLORS in
// SmartHomePostClient.tsx so article badges match the hub category badge.
const HUB_THEMES: Array<{ id: string; badge: string; description: string; colorBadge: string; colorDot: string; slugs: string[] }> =
  SMART_HOME_CATEGORIES.map((cat) => {
    const palette: Record<string, { colorBadge: string; colorDot: string }> = {
      foundations:          { colorBadge: 'bg-slate-50 text-slate-700 border-slate-200',     colorDot: 'bg-slate-400' },
      'local-first':        { colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200', colorDot: 'bg-emerald-400' },
      'local-ai':           { colorBadge: 'bg-violet-50 text-violet-700 border-violet-200',   colorDot: 'bg-violet-400' },
      'decision-comparison': { colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',     colorDot: 'bg-amber-400' },
    }
    return {
      id: cat.id,
      badge: cat.titleEn,
      description: cat.descriptionEn,
      ...palette[cat.id],
      slugs: cat.articleSlugs,
    }
  })

function renderHub(lang: Lang) {
  const hubTitle = 'Run Your Smart Home on a Local LLM, Not the Cloud'
  const hubIntro =
    'A local-first smart home runs entirely on your own hardware: no cloud dependence, works offline, full privacy. These 25 guides cover the stack — Home Assistant, Matter and Thread, local voice (Whisper, Piper, Wyoming), and an Ollama-driven local LLM as the brain of your home.'

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-6">
          Smart Home
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-5">{hubTitle}</h1>
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-14">{hubIntro}</p>

        <div className="space-y-14">
          {HUB_THEMES.map((theme) => (
            <section key={theme.id}>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-3 ${theme.colorBadge}`}>
                {theme.badge}
              </span>
              <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">{theme.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {theme.slugs.map((slug) => (
                  <Link
                    key={slug}
                    href={smartHomeArticlePath(lang, slug)}
                    className="group flex items-start gap-3 border border-primary/15 bg-card rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${theme.colorDot}`} />
                    <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                      {slugToTitle(slug)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function buildHubPageElement(lang: Lang) {
  return renderHub(lang)
}

// ─── COMING SOON RENDERER ─────────────────────────────────────────────────

function renderComingSoon({ slug, lang, kind }: { slug?: string; lang: Lang; kind: 'article' | 'hub' }) {
  const copy = (COMING_SOON_COPY[lang] ?? COMING_SOON_COPY['en'])!
  const title = slug ? slugToTitle(slug) : HUB_LABEL
  const enHref = slug ? smartHomeArticlePath('en', slug) : smartHomeHubPath('en')
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
