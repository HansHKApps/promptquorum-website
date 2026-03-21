import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { themes } from '@/lib/prompt-engineering/themes'

// Look up the human-readable title for a slug from the themes data
function getTitleForSlug(slug: string): string {
  for (const theme of themes) {
    const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
    if (keys.includes(slug)) {
      // Title is stored in PromptEngineeringHub ARTICLE_TITLES — use slug as fallback
      return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    }
  }
  return slug
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

  // Article not written yet — still return basic metadata
  if (!peContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Prompt Engineering hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

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
