import type { Metadata } from 'next'
import { ComparePageClient } from '@/components/ComparePageClient'

export const metadata: Metadata = {
  title: 'AI Model Comparison Tool | ChatGPT vs Claude vs Gemini | PromptQuorum',
  description: 'Compare ChatGPT, Claude, Gemini, and 25+ AI models on the same prompt. See side-by-side responses, detect hallucinations, find consensus answers with PromptQuorum.',
  alternates: {
    canonical: 'https://www.promptquorum.com/compare',
  },
  openGraph: {
    title: 'AI Model Comparison Tool | PromptQuorum',
    description: 'Compare 25+ AI models side-by-side on the same prompt.',
    url: 'https://www.promptquorum.com/compare',
    type: 'website',
  },
}

export default function ComparePage() {
  return <ComparePageClient />
}
