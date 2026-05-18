// Server-side rendering helpers for the Prompt Bites cluster.
// All 5-language route wrappers call into here — metadata + JSON-LD + JSX in one place.
// All pages are noindex/nofollow in Phase 1 (PROMPT_BITES_PUBLISHED_SLUGS is empty).

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PromptBitesPostClient } from '@/components/PromptBitesPostClient'
import { PromptBitesHubClient } from '@/components/PromptBitesHubClient'
import { promptBitesContent } from './articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from './slugs'
import { isPromptBitePublished, isPromptBitesHubPublished } from './published'
import { promptBitesAlternates, promptBitesHubPath, promptBitesArticlePath } from './metadata-helpers'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

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
    title: baseTitle,
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
      images: [{ url: `${BASE}/api/og/${slug}?lang=${lang}`, width: 1200, height: 630, alt: article?.title ?? fallbackTitle }],
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: (article as any).metaDescription ?? '',
    datePublished: article.publishDate,
    url: canonicalUrl,
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
      name: 'Prompt Bites',
      url: `${BASE}${promptBitesHubPath(lang)}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
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
      <PromptBitesPostClient slug={slug} lang={lang} />
    </>
  )
}

// ─── HUB PAGE ────────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const titleByLang: Record<Lang, string> = {
    en: 'Prompt Bites: Quick Answers to Local LLM Questions | PromptQuorum',
    de: 'Prompt Bites: Schnelle Antworten zu lokalen LLMs | PromptQuorum',
    fr: 'Prompt Bites: Réponses rapides aux questions LLM locales | PromptQuorum',
    ja: 'Prompt Bites: ローカルLLMに関するクイック回答 | PromptQuorum',
    zh: 'Prompt Bites: 本地LLM问题快速解答 | PromptQuorum',
  }
  const descByLang: Record<Lang, string> = {
    en: '30 short-answer guides for local LLM users. VRAM requirements, Ollama model picks, hardware comparisons, and tool setup tips — answered in 60 seconds or less.',
    de: '30 Kurz-Antworten für lokale LLM-Nutzer. VRAM-Anforderungen, Ollama-Modellauswahl, Hardware-Vergleiche und Tool-Setup-Tipps.',
    fr: '30 guides de réponses courtes pour les utilisateurs de LLM locaux. Exigences VRAM, sélection de modèles Ollama, comparaisons matérielles et conseils de configuration.',
    ja: 'ローカルLLMユーザー向け30本のショートアンサーガイド。VRAM要件、Ollamaモデル選択、ハードウェア比較、ツールセットアップのヒント。',
    zh: '本地LLM用户的30个短答案指南。VRAM要求、Ollama模型选择、硬件比较和工具设置技巧。',
  }

  const isPublished = isPromptBitesHubPublished(lang)

  return {
    title: titleByLang[lang],
    description: descByLang[lang],
    alternates: promptBitesAlternates(lang),
    robots: isPublished
      ? { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
      : { index: false, follow: false },
    openGraph: {
      title: titleByLang[lang],
      description: descByLang[lang],
      url: `${BASE}${promptBitesHubPath(lang)}`,
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
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: `${BASE}${promptBitesHubPath(lang)}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PromptBitesHubClient lang={lang} />
    </>
  )
}
