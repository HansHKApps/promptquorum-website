import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LocalLLMsPostClient } from '@/components/LocalLLMsPostClient'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { llmThemes } from '@/lib/local-llms/themes'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { LocalLLMArticleJsonLd } from '@/lib/local-llms/jsonld'

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

function getTitleForSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(LLM_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = LLM_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  // Article not written yet
  if (!llmContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  // Type B stub: content entry exists but EN sections are empty
  const enContent = llmContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  // Coming soon by editorial decision (full content exists but not yet public)
  if (COMING_SOON_SLUGS.has(slug)) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const selectedLang = 'en' as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = llmContent[key][selectedLang] ?? llmContent[key]['en']
  if (!article) return notFound()

  // Compute available languages for this article (only include langs with actual translations)
  const VALID_LANGS_META = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
  const availableLangsForMeta = VALID_LANGS_META.filter(lang => {
    const c = llmContent[key]?.[lang]
    return Boolean(c) && Object.keys(c?.sections ?? {}).length > 0
  })

  const canonicalUrl = selectedLang === 'en'
    ? `https://www.promptquorum.com/local-llms/${slug}`
    : `https://www.promptquorum.com/${selectedLang}/local-llms/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${selectedLang}`
  const translationObj = llmContent[key][selectedLang] as any
  const hasTranslation =
    Boolean(translationObj) && Object.keys(translationObj.sections ?? {}).length > 0

  // Use seoTitle if available for better SERP display, otherwise use article title
  const pageTitle = (article.seoTitle ?? article.title) ?? ''
  // Use metaDescription for OG/Twitter when available, otherwise fall back to intro
  const metaDesc = (article as any).metaDescription ?? article.intro

  return {
    title: pageTitle.length <= 45 ? `${pageTitle} | PromptQuorum` : pageTitle,
    description: metaDesc,
    alternates: generateAlternates(`/local-llms/${slug}`, selectedLang, hasTranslation, availableLangsForMeta, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: ogImageUrl, width: 1200, height: 675, alt: article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? ((article as any).lastFactChecked as string | undefined)?.substring(0, 10) ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: pageTitle,
      description: (article as any).twitterDescription ?? metaDesc,
      images: [ogImageUrl],
    },
  }
}

export default async function LocalLLMsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = LLM_SLUG_TO_KEY[slug]

  if (!key) notFound()

  // Article not written yet — show coming soon page
  if (!llmContent[key]) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Local LLMs hub.
          </p>
          <Link
            href="/local-llms"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Local LLMs
          </Link>
        </div>
      </div>
    )
  }

  // Coming soon by editorial decision
  if (COMING_SOON_SLUGS.has(slug)) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Local LLMs hub.
          </p>
          <Link
            href="/local-llms"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Local LLMs
          </Link>
        </div>
      </div>
    )
  }

  const selectedLang = 'en' as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  return (
    <>
      <LocalLLMArticleJsonLd slug={slug} articleKey={key} lang={selectedLang} />
      <LocalLLMsPostClient slug={slug} initialLang={selectedLang} />
    </>
  )
}
