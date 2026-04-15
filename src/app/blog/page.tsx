import type { Metadata } from 'next'
import { BlogIndexClient } from '@/components/BlogIndexClient'
import { generateAlternates } from '@/lib/hreflang'
import { translations } from '@/translations'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: `${t.blogTitle} | PromptQuorum`,
    description: t.blogSubtitle,
    alternates: generateAlternates('/blog', selectedLang),
    openGraph: {
      title: `${t.blogTitle} | PromptQuorum`,
      description: t.blogSubtitle,
      images: [{ url: '/og-image.png', alt: `${t.blogTitle} — PromptQuorum Blog` }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.blogTitle,
      description: t.blogSubtitle,
    },
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Prompt Engineering Guides',
        url: 'https://www.promptquorum.com/blog',
        description: '12 research-backed articles on prompt engineering, multi-model AI dispatch, hallucination detection, RAG, local LLMs, and AI model optimization for developers.',
        isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promptquorum.com/blog' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogIndexClient initialLang={selectedLang as any} />
    </>
  )
}
