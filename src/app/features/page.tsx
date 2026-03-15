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
  return (
    <>
      <FeaturesPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'PromptQuorum Features — Prompt Engineering, Multi-Model Dispatch, Quorum Analysis',
              'url': 'https://www.promptquorum.com/features',
              'description': 'Explore PromptQuorum features: 9 prompt frameworks, AI optimization, dispatch to 25+ AI services, multi-model consensus analysis, hallucination detection, local LLM support, and full privacy.',
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
                { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://www.promptquorum.com/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
