import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { EnterpriseAiPostClient } from '@/components/EnterpriseAiPostClient'
import { enterpriseAiContent } from '@/lib/enterprise-ai/articles-barrel'
import { ENTERPRISE_AI_SLUG_TO_KEY } from '@/lib/enterprise-ai/slugs'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { EnterpriseAiArticleJsonLd } from '@/lib/enterprise-ai/jsonld'
import { narrowArticleData } from '@/lib/narrowArticleData'

export const dynamic = 'force-static'
export const revalidate = 86400

const SLUG_ACRONYMS: Record<string, string> = {
  ai: 'AI', llm: 'LLM', llms: 'LLMs', gdpr: 'GDPR', pipl: 'PIPL', pdpl: 'PDPL',
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
  return Object.keys(ENTERPRISE_AI_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = ENTERPRISE_AI_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  const enContent = enterpriseAiContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Enterprise AI hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const selectedLang = 'en' as const
  const article = enterpriseAiContent[key][selectedLang] ?? enterpriseAiContent[key]['en']
  if (!article) return notFound()

  const VALID_LANGS_META = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
  const availableLangsForMeta = VALID_LANGS_META.filter(lang => {
    const c = enterpriseAiContent[key]?.[lang]
    return Boolean(c) && Object.keys(c?.sections ?? {}).length > 0
  })

  const canonicalUrl = `https://www.promptquorum.com/enterprise-ai/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${selectedLang}`
  const hasTranslation = availableLangsForMeta.length > 1

  const pageTitle = (article.seoTitle ?? article.title) ?? ''
  const metaDesc = article.metaDescription ?? article.intro

  return {
    title: pageTitle.length <= 45 ? `${pageTitle} | PromptQuorum` : pageTitle,
    description: metaDesc,
    alternates: generateAlternates(`/enterprise-ai/${slug}`, selectedLang, hasTranslation, availableLangsForMeta, [...PATH_PREFIX_LANGS]),
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
      description: metaDesc,
      images: [ogImageUrl],
    },
  }
}

export default async function EnterpriseAiArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = ENTERPRISE_AI_SLUG_TO_KEY[slug]
  if (!key) notFound()

  if (!enterpriseAiContent[key] || Object.keys(enterpriseAiContent[key]?.en?.sections ?? {}).length === 0) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Enterprise AI hub.
          </p>
          <Link
            href="/enterprise-ai"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Enterprise AI
          </Link>
        </div>
      </div>
    )
  }

  const selectedLang = 'en' as const

  return (
    <>
      <EnterpriseAiArticleJsonLd slug={slug} articleKey={key} lang={selectedLang} />
      <EnterpriseAiPostClient slug={slug} initialLang={selectedLang} {...narrowArticleData(enterpriseAiContent[key], selectedLang)} />
    </>
  )
}
