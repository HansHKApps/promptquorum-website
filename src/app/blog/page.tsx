import type { Metadata } from 'next'
import { BlogIndexClient } from '@/components/BlogIndexClient'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Prompt Engineering Guides: AI Models, Optimization & Local LLM Techniques | PromptQuorum',
  description: 'Prompt engineering guides covering multi-model dispatch, hallucination detection, RAG, local LLMs, and AI model comparison. 12 research-backed articles for AI developers.',
  alternates: generateAlternates('/blog'),
  openGraph: {
    title: 'Prompt Engineering Guides | PromptQuorum',
    description: "Still testing one AI model at a time? These guides show you how to compare responses across 25+ models, catch hallucinations, and write prompts that actually work in production.",
    images: [{ url: '/og-image.png', alt: 'PromptQuorum Blog — Prompt Engineering Guides' }],
    type: 'website',
    siteName: 'PromptQuorum',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Prompt engineering guides 📚 → multi-model dispatch, hallucination detection, RAG. 12 articles for AI developers. Free.',
  },
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
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
