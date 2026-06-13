import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocalLLMsPostClient } from '@/components/LocalLLMsPostClient'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

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
  const lang = 'zh'

  if (!key) return notFound()

  if (!llmContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const enContent = llmContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  if (COMING_SOON_SLUGS.has(slug)) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const article = llmContent[key][lang] ?? llmContent[key]['en']
  if (!article) return notFound()

  const VALID_LANGS_META = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
  const availableLangsForMeta = VALID_LANGS_META.filter(l => {
    const c = llmContent[key]?.[l]
    return Boolean(c) && Object.keys(c?.sections ?? {}).length > 0
  })

  const canonicalUrl = `https://www.promptquorum.com/zh/local-llms/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${lang}`
  const hasTranslation = Boolean(article) && Object.keys(article.sections ?? {}).length > 0

  const pageTitle = (article.seoTitle ?? article.title) ?? ''
  const metaDesc = (article as any).metaDescription ?? article.intro

  return {
    title: pageTitle.length <= 45 ? `${pageTitle} | PromptQuorum` : pageTitle,
    description: metaDesc,
    alternates: generateAlternates(`/local-llms/${slug}`, lang, hasTranslation, availableLangsForMeta, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: pageTitle,
      description: (article as any).twitterDescription ?? metaDesc,
    },
  }
}

export default async function ZhLocalLLMsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = LLM_SLUG_TO_KEY[slug]

  if (!key) notFound()

  if (!llmContent[key]) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-600 mb-8">This article is coming soon. Explore our Local LLMs hub in the meantime.</p>
        </div>
      </div>
    )
  }

  const article = llmContent[key]['zh'] ?? llmContent[key]['en']
  if (!article) notFound()

  const canonicalUrlCN = `https://www.promptquorum.com/zh/local-llms/${slug}`

  // Schema for Chinese breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: '本地LLM', item: 'https://www.promptquorum.com/local-llms' },
      { '@type': 'ListItem', position: 3, name: article.title ?? (article as any).seoTitle ?? slug, item: canonicalUrlCN },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocalLLMsPostClient
        slug={slug}
        initialLang="zh"
      />
    </>
  )
}
