// Server-side rendering helpers for the Prompt Bites cluster.
// All 5-language route wrappers call into here — metadata + JSON-LD + JSX in one place.
// All pages are noindex/nofollow in Phase 1 (PROMPT_BITES_PUBLISHED_SLUGS is empty).

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { truncateTitle } from '@/lib/utils'
import { PromptBitesPostClient } from '@/components/PromptBitesPostClient'
import { PromptBitesHubClient } from '@/components/PromptBitesHubClient'
import { promptBitesContent } from './articles-barrel'
import { buildPromptBitesHubData } from './hub-data'
import { PROMPT_BITES_SLUG_TO_KEY } from './slugs'
import { isPromptBitePublished, isPromptBitesHubPublished, PROMPT_BITES_PUBLISHED_SLUGS } from './published'
import { promptBitesAlternates, promptBitesHubPath, promptBitesArticlePath } from './metadata-helpers'
import { getHubMetadata } from './hub-metadata'
import { toOutputLocale } from '@/lib/i18n/constants'
import { buildArticleImageObject } from '@/lib/imageObjectSchema'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const HOME_LABEL: Partial<Record<Lang, string>> = {
  en: 'Home',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  zh: '主页',
  es: 'Inicio',
  pt: 'Início',
  ar: 'الرئيسية',
  ko: '홈',
}

const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs', llm: 'LLM', ai: 'AI', api: 'API', apis: 'APIs',
  gpu: 'GPU', cpu: 'CPU', vram: 'VRAM', ram: 'RAM', rag: 'RAG',
  moe: 'MoE', pc: 'PC',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => SLUG_ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

// ─── ARTICLE PAGE ────────────────────────────────────────────────────────────

export function getArticleStaticParams() {
  return Object.keys(PROMPT_BITES_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function buildArticleMetadata(slug: string, lang: Lang): Promise<Metadata> {
  const key = PROMPT_BITES_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const articleData = promptBitesContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']

  const fallbackTitle = slugToTitle(slug)
  const baseTitle = (article as any)?.seoTitle ?? article?.title ?? fallbackTitle
  const desc =
    (article as any)?.metaDescription ??
    'A quick answer from PromptQuorum.'

  const isPublished = isPromptBitePublished(slug, lang)

  return {
    title: truncateTitle(baseTitle),
    description: desc,
    alternates: promptBitesAlternates(lang, slug),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: false },
    openGraph: {
      title: article?.title ?? fallbackTitle,
      description: desc,
      url: `${BASE}${promptBitesArticlePath(lang, slug)}`,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: `${BASE}/api/og/${slug}?lang=${lang}`, width: 1200, height: 675, alt: article?.title ?? fallbackTitle }],
      publishedTime: article?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: article?.title ?? fallbackTitle,
      description: desc,
      images: [`${BASE}/api/og/${slug}?lang=${lang}`],
    },
  } satisfies Metadata
}

export async function buildArticlePageElement(slug: string, lang: Lang) {
  const key = PROMPT_BITES_SLUG_TO_KEY[slug]
  if (!key) notFound()

  const articleData = promptBitesContent[key]
  const article = articleData?.[lang] ?? articleData?.['en']
  if (!article) notFound()

  const canonicalUrl = `${BASE}${promptBitesArticlePath(lang, slug)}`
  const quickAnswerEntry = (article as any).quickAnswerTop?.[lang]

  const edLevel = (article as any).educationalLevel as string | undefined
  const levelMap: Record<string, string> = {
    Beginner: 'Beginner',
    Intermediate: 'Intermediate',
    Advanced: 'Expert',
    Technical: 'Expert',
  }
  const proficiencyLevel = edLevel ? (levelMap[edLevel] ?? edLevel) : undefined

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: (article as any).metaDescription ?? '',
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    image: buildArticleImageObject(article as { heroImage?: string }, slug, lang),
    ...(proficiencyLevel && { proficiencyLevel }),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/about',
      sameAs: [
        'https://www.linkedin.com/in/hanskuepper/',
        'https://x.com/HansKuepperAPPs',
        'https://github.com/HansHKApps',
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
      name: 'Prompt Bites',
      url: `${BASE}${promptBitesHubPath(lang)}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: `${BASE}${promptBitesHubPath(lang)}` },
      { '@type': 'ListItem', position: 3, name: article.title ?? slugToTitle(slug), item: canonicalUrl },
    ],
  }

  const faqEntries = Object.values(article.sections ?? {}).flatMap((s) => (s as any).faqs ?? [])
  const allFaqEntries = [
    ...(quickAnswerEntry ? [{ q: quickAnswerEntry.question, a: quickAnswerEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema = allFaqEntries.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqEntries.map((f: any) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.prompt-bite-h1', '.prompt-bite-answer'],
    },
    url: canonicalUrl,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <PromptBitesPostClient
        slug={slug}
        lang={lang}
        articleData={articleData!}
        siblingTitles={resolveSiblingTitles((article as any).siblingBites, lang)}
      />
    </>
  )
}

// Resolves each sibling-bite slug to its localized title server-side, so the
// client component never needs the full promptBitesContent barrel just to
// render a handful of "related bites" link labels.
function resolveSiblingTitles(siblingBites: string[] | undefined, lang: Lang): Record<string, string> | undefined {
  if (!siblingBites || siblingBites.length === 0) return undefined
  const titles: Record<string, string> = {}
  for (const sibSlug of siblingBites) {
    const sibKey = PROMPT_BITES_SLUG_TO_KEY[sibSlug]
    const sibArticleData = sibKey ? promptBitesContent[sibKey] : undefined
    const sibArticle = sibArticleData?.[lang] ?? sibArticleData?.['en']
    titles[sibSlug] = sibArticle?.title ?? sibSlug
  }
  return titles
}

// ─── HUB PAGE ────────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const count = PROMPT_BITES_PUBLISHED_SLUGS.size
  const metadata = getHubMetadata(count)
  const titleByLang = metadata.titles
  const descByLang = metadata.descriptions

  const isPublished = isPromptBitesHubPublished(lang)

  return {
    title: truncateTitle((titleByLang[lang] ?? titleByLang["en"])!),
    description: (descByLang[lang] ?? descByLang["en"])!,
    alternates: promptBitesAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: false },
    openGraph: {
      title: titleByLang[lang],
      description: (descByLang[lang] ?? descByLang["en"])!,
      url: `${BASE}${promptBitesHubPath(lang)}`,
      type: 'website',
      siteName: 'PromptQuorum',
      images: [{ url: `${BASE}/images/prompt-bites-hub-overview-hero-${lang}.webp`, width: 1200, height: 675, alt: titleByLang[lang] ?? titleByLang['en']! }],
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
  const hubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Prompt Bites',
    description: 'Short-answer guides for local LLM users from PromptQuorum.',
    url: `${BASE}${promptBitesHubPath(lang)}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: `${BASE}${promptBitesHubPath(lang)}` },
    ],
  }

  // Build FAQPage schema from all 30 prompt bites
  const faqEntries: Array<{ q: string; a: string }> = []
  Object.entries(promptBitesContent).forEach(([, articleData]) => {
    const article = articleData?.[lang] ?? articleData?.['en']
    const quickAnswer = (article as any)?.quickAnswerTop?.[lang] ?? (article as any)?.quickAnswerTop?.['en']
    if (quickAnswer?.question && quickAnswer?.answer) {
      faqEntries.push({ q: quickAnswer.question, a: quickAnswer.answer })
    }
  })

  const faqSchema = faqEntries.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntries.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <PromptBitesHubClient lang={lang} {...buildPromptBitesHubData(lang)} />
    </>
  )
}
