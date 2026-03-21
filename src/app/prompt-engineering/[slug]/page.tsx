import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(PE_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]
  if (!key || !peContent[key]) return notFound()

  const article = peContent[key]['en']
  const canonicalUrl = `https://www.promptquorum.com/prompt-engineering/${slug}`

  return {
    title: `${article.title} | PromptQuorum`,
    description: article.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${canonicalUrl}?lang=en`,
        de: `${canonicalUrl}?lang=de`,
        fr: `${canonicalUrl}?lang=fr`,
        ja: `${canonicalUrl}?lang=ja`,
        zh: `${canonicalUrl}?lang=zh`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.intro,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: article.title,
      description: article.intro,
    },
  }
}

export default async function PromptEngineeringArticlePage({ params }: PageProps) {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]

  if (!key || !peContent[key]) notFound()

  const article = peContent[key]['en']
  const canonicalUrl = `https://www.promptquorum.com/prompt-engineering/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.intro,
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
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
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: 'Prompt Engineering', item: 'https://www.promptquorum.com/prompt-engineering' },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PromptEngineeringPostClient slug={slug} />
    </>
  )
}
