import type { Metadata } from 'next'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'

export const metadata: Metadata = {
  title: 'How PromptQuorum Works | Write, Optimize, Dispatch, Quorum',
  description: 'PromptQuorum is a prompt engineering assistant and multi-model consensus tool. Write prompts with 9 frameworks, optimize with your own LLM, dispatch to 25+ AI services, and analyze consensus across all responses.',
  alternates: {
    canonical: 'https://www.promptquorum.com/how-it-works',
  },
}

export default function HowItWorksPage() {
  return <HowItWorksPageClient />
}
