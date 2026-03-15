import type { Metadata } from 'next'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'

export const metadata: Metadata = {
  title: 'Features | PromptQuorum',
  description: 'Smart AI prompt optimization features including frameworks, multi-AI dispatch, quorum comparison, and local LLM support.',
  alternates: {
    canonical: 'https://www.promptquorum.com/features',
  },
}

export default function FeaturesPage() {
  return <FeaturesPageClient />
}
