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
  return (
    <>
      <HowItWorksPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'How PromptQuorum Works — Write, Optimize, Dispatch, Quorum',
              'url': 'https://www.promptquorum.com/how-it-works',
              'description': 'A complete guide to the PromptQuorum 4-stage workflow: structured prompt writing with 9 frameworks, LLM-powered optimization, one-click dispatch to 25+ AI services, and multi-model Quorum analysis.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'item': 'https://www.promptquorum.com/how-it-works' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
