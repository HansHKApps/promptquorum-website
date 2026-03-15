import type { Metadata } from 'next'
import { ComparePageClient } from '@/components/ComparePageClient'

export const metadata: Metadata = {
  title: 'Send One Prompt to ChatGPT, Claude & Gemini Simultaneously | PromptQuorum',
  description: 'Dispatch any prompt to ChatGPT, Claude, Gemini and 25+ AI models at once. See every response side-by-side, run consensus scoring, detect hallucinations, and extract the best answer — without switching tabs.',
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
  return (
    <>
      <ComparePageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'AI Model Comparison Tool — ChatGPT vs Claude vs Gemini',
              'url': 'https://www.promptquorum.com/compare',
              'description': 'Compare ChatGPT, Claude, Gemini, and 25+ AI models on the same prompt. See side-by-side responses, detect hallucinations, and find consensus answers with PromptQuorum.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              'about': {
                '@type': 'SoftwareApplication',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Compare AI Models', 'item': 'https://www.promptquorum.com/compare' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
