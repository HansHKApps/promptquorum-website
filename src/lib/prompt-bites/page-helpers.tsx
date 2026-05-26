// Server-side rendering helpers for the Prompt Bites cluster.
// All 5-language route wrappers call into here — metadata + JSON-LD + JSX in one place.
// All pages are noindex/nofollow in Phase 1 (PROMPT_BITES_PUBLISHED_SLUGS is empty).

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PromptBitesPostClient } from '@/components/PromptBitesPostClient'
import { PromptBitesHubClient } from '@/components/PromptBitesHubClient'
import { promptBitesContent } from './articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from './slugs'
import { isPromptBitePublished, isPromptBitesHubPublished, PROMPT_BITES_PUBLISHED_SLUGS } from './published'
import { promptBitesAlternates, promptBitesHubPath, promptBitesArticlePath } from './metadata-helpers'

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const HOME_LABEL: Record<Lang, string> = {
  en: 'Home',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  zh: '主页',
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
    inLanguage: lang,
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
      <PromptBitesPostClient slug={slug} lang={lang} />
    </>
  )
}

// ─── HUB PAGE ────────────────────────────────────────────────────────────────

export async function buildHubMetadata(lang: Lang): Promise<Metadata> {
  const count = PROMPT_BITES_PUBLISHED_SLUGS.size
  const titleByLang: Record<Lang, string> = {
    en: `Local LLM Quick Reference: VRAM, Ollama Models & GPU Picks — ${count} Answers | PromptQuorum`,
    de: `Lokale LLM Kurzreferenz: VRAM, Ollama-Modelle & GPU-Empfehlungen — ${count} Antworten | PromptQuorum`,
    fr: `Référence rapide LLM local : VRAM, modèles Ollama et choix GPU — ${count} réponses | PromptQuorum`,
    ja: `ローカルLLMクイックリファレンス：VRAM・Ollamaモデル・GPU選び — ${count}の回答 | PromptQuorum`,
    zh: `本地LLM快速参考：VRAM、Ollama模型与GPU选择 — ${count}个解答 | PromptQuorum`,
  }
  const descByLang: Record<Lang, string> = {
    en: `Local LLM quick reference guide: VRAM tiers for ${count} models (2026), quantization basics, Ollama vs LM Studio, hardware picks, and setup tips. Complete answers for running models locally.`,
    de: `Lokale LLM Kurzreferenzanleitung: VRAM-Stufen für ${count} Modelle (2026), Quantisierungsgrundlagen, Ollama gegen LM Studio, Hardware-Empfehlungen und Setup-Tipps.`,
    fr: `Guide de référence rapide LLM local : niveaux VRAM pour ${count} modèles (2026), bases de quantification, Ollama vs LM Studio, choix matériels et conseils de configuration.`,
    ja: `ローカルLLMクイックリファレンスガイド：${count}モデルのVRAMティア（2026年）、量化の基礎、OllamaとLM Studio、ハードウェア選択、セットアップのコツ。`,
    zh: `本地LLM快速参考指南：${count}款模型的显存级别（2026年）、量化基础、Ollama与LM Studio对比、硬件推荐和设置技巧。`,
  }

  const isPublished = isPromptBitesHubPublished(lang)

  return {
    title: truncateTitle(titleByLang[lang]),
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
    inLanguage: lang,
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
      <PromptBitesHubClient lang={lang} />
    </>
  )
}
