import type { Metadata } from 'next'
import { BlogIndexClient } from '@/components/BlogIndexClient'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Blog & Educational Resources | PromptQuorum',
  description: 'Master prompt engineering, AI model comparison, and optimization techniques. Research-backed articles for AI power users.',
  alternates: generateAlternates('/blog'),
  openGraph: {
    title: 'Blog & Educational Resources | PromptQuorum',
    description: 'Master prompt engineering, AI model comparison, and optimization techniques.',
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

  return <BlogIndexClient initialLang={selectedLang as any} />
}
