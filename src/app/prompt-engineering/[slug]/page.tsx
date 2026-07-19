import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent, type PEArticle } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { themes } from '@/lib/prompt-engineering/themes'
import { LEARNING_PATHS, TRENDING_TERMS_2026 } from '@/lib/prompt-engineering/learningPaths'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { truncateTitle } from '@/lib/utils'
import { PEArticleJsonLd } from '@/lib/prompt-engineering/jsonld'

export const dynamic = 'force-static'
export const revalidate = 86400

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
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
  lora: 'LoRA',
  vllm: 'vLLM',
}

// Look up the human-readable title for a slug from the themes data
function getTitleForSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Validate and fix itemListSchema to ensure all ListItems have a 'name' property
function ensureItemListSchemaValid(schema: any): any {
  if (!schema || schema['@type'] !== 'ItemList' || !Array.isArray(schema.itemListElement)) {
    return schema
  }

  const fixed = { ...schema }
  fixed.itemListElement = schema.itemListElement.map((item: any) => {
    // If item has nested item.name but no top-level name, copy it up
    if (!item.name && item.item?.name) {
      return { ...item, name: item.item.name }
    }
    return item
  })

  return fixed
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(PE_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  // Noindex pages (placeholders)
  const NOINDEX_SLUGS = new Set(['prompt-engineering-glossary', 'the-single-step-prompt-method'])
  if (NOINDEX_SLUGS.has(slug)) {
    return {
      title: `${getTitleForSlug(slug)} — PromptQuorum`,
      description: 'Coming soon. This article is currently under development.',
      robots: 'noindex, follow',
    }
  }

  // Article not written yet — still return basic metadata
  if (!peContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Prompt Engineering hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  // Type B stub: content entry exists but EN sections are empty
  const enContent = peContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Prompt Engineering hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const selectedLang = 'en' as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = (peContent[key][selectedLang] || peContent[key]['en'])!
  const translationObj = peContent[key][selectedLang] as any
  const hasTranslation =
    Boolean(translationObj) && Object.keys(translationObj.sections ?? {}).length > 0

  // Framework pages: redirect to /frameworks/ canonical URL
  const FRAMEWORK_SLUG_MAP: Record<string, string> = {
    'craft-framework': '/frameworks/craft',
    'trace-framework': '/frameworks/trace',
    'risen-framework': '/frameworks/risen',
    'rtf-framework': '/frameworks/rtf',
    'co-star-framework': '/frameworks/co-star',
  }
  const canonicalPath = FRAMEWORK_SLUG_MAP[slug] ?? `/prompt-engineering/${slug}`
  const canonicalUrl = `https://www.promptquorum.com${canonicalPath}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${selectedLang}`

  // Use seoTitle if available for better SERP display, otherwise use article title
  const pageTitle = (article as PEArticle & { seoTitle?: string }).seoTitle ?? article.title ?? ''
  // Use metaDescription for base metadata when available, otherwise fall back to intro
  const metaDesc = (article as PEArticle & { metaDescription?: string }).metaDescription ?? article.intro

  // Glossary-specific overrides for maximum CTR + keyword density
  const isGlossary = slug === 'prompt-engineering-glossary'
  const finalDesc = isGlossary
    ? 'Essential glossary: 100 prompt engineering terms with definitions, real-world examples, and 400+ citations. Core concepts, agents, safety, RAG, evaluation. Free beta.'
    : metaDesc
  // og-glossary-mindmap-2026.png (a custom mindmap infographic) was never produced —
  // fall back to the standard per-article generator route until one is created.
  const finalOgImage = ogImageUrl
  const finalTitle = isGlossary
    ? 'Prompt Engineering Glossary: 100 Terms Defined for 2026'
    : pageTitle

  // Per-surface metadata: og and twitter can have distinct values
  const ogTitle = (article as PEArticle & { ogTitle?: string }).ogTitle ?? finalTitle
  const ogDesc = (article as PEArticle & { ogDescription?: string }).ogDescription ?? finalDesc
  const twTitle = (article as PEArticle & { twitterTitle?: string }).twitterTitle ?? ogTitle
  const twDesc = (article as PEArticle & { twitterDescription?: string }).twitterDescription ?? ogDesc

  // Compute available languages for this article (only include langs with actual translations)
  const VALID_LANGS_META = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
  const availableLangsForMeta = VALID_LANGS_META.filter(lang => {
    const c = peContent[key]?.[lang]
    return Boolean(c) && Object.keys(c?.sections ?? {}).length > 0
  })

  return {
    title: truncateTitle(finalTitle.length <= 45 ? `${finalTitle} | PromptQuorum` : finalTitle),
    description: finalDesc,
    ...(isGlossary && {
      keywords: ['prompt engineering glossary', 'AI terms', 'LLM glossary', 'Chain-of-Thought', 'RAG definition', 'prompt injection', 'function calling', 'few-shot prompting', 'temperature AI', 'context window'],
    }),
    alternates: generateAlternates(canonicalPath, selectedLang, hasTranslation, availableLangsForMeta, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: isGlossary ? 'Prompt Engineering Glossary: 100 Essential Terms (2026)' : ogTitle,
      description: isGlossary ? 'Essential glossary: 100 prompt engineering terms with definitions, real-world examples, and 400+ citations. Core concepts, agents, safety, RAG, evaluation. Free beta.' : ogDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: finalOgImage, width: 1200, height: 675, alt: isGlossary ? 'Prompt Engineering Glossary Mind Map 2026 — 100 Essential Terms' : article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? ((article as any).lastFactChecked as string | undefined)?.substring(0, 10) ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: isGlossary ? 'Prompt Engineering Glossary (100 Terms)' : twTitle,
      description: isGlossary ? 'Chain-of-Thought • RAG • Few-shot • Agents • Temperature • Token Limits. 100 searchable, cited, expert definitions.' : twDesc,
      images: [finalOgImage],
    },
  }
}

export default async function PromptEngineeringArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]

  if (!key) notFound()

  // Article not written yet — show coming soon page
  if (!peContent[key]) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Prompt Engineering hub.
          </p>
          <Link
            href="/prompt-engineering"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Prompt Engineering
          </Link>
        </div>
      </div>
    )
  }

  const selectedLang = 'en' as const

  return (
    <>
      <PEArticleJsonLd slug={slug} articleKey={key} lang={selectedLang} />
      <PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />
    </>
  )
}
