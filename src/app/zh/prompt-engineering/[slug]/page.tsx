import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { PEArticleJsonLd } from '@/lib/prompt-engineering/jsonld'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]
  const lang = 'zh'

  if (!key) return notFound()

  const article = peContent[key][lang] ?? peContent[key]['en']
  if (!article) return notFound()

  const VALID_LANGS_META = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
  const availableLangsForMeta = VALID_LANGS_META.filter(l => {
    const c = peContent[key]?.[l]
    return Boolean(c) && Object.keys(c?.sections ?? {}).length > 0
  })

  const canonicalUrl = `https://www.promptquorum.com/zh/prompt-engineering/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${lang}`
  const hasTranslation = Boolean(article) && Object.keys(article.sections ?? {}).length > 0

  const pageTitle = (article.seoTitle ?? article.title) ?? ''
  const metaDesc = (article as any).metaDescription ?? article.intro

  return {
    title: pageTitle.length <= 45 ? `${pageTitle} | PromptQuorum` : pageTitle,
    description: metaDesc,
    alternates: generateAlternates(`/prompt-engineering/${slug}`, lang, hasTranslation, availableLangsForMeta, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: ogImageUrl, width: 1200, height: 675, alt: article.title }],
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

export default async function ZhPromptEngineeringArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]

  if (!key) notFound()

  const article = peContent[key]['zh'] ?? peContent[key]['en']
  if (!article) notFound()

  return (
    <>
      <PEArticleJsonLd slug={slug} articleKey={key} lang="zh" />
      <PromptEngineeringPostClient
        slug={slug}
        initialLang="zh"
      />
    </>
  )
}
