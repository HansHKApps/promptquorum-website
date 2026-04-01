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

export default function BlogPage() {
  return <BlogIndexClient />
}
