import type { Metadata } from 'next'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'

export const metadata: Metadata = {
  title: 'Prompt Engineering Guide — PromptQuorum',
  description: 'Complete prompt engineering resource: fundamentals, frameworks (CRAFT, CO-STAR, APE), techniques (chain of thought, role prompting), and domain-specific guides for writing, coding, research, and more.',
  alternates: {
    canonical: 'https://www.promptquorum.com/prompt-engineering',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com/prompt-engineering',
    siteName: 'PromptQuorum',
    title: 'Prompt Engineering Guide — PromptQuorum',
    description: 'Fundamentals, frameworks, techniques, and domain-specific guides for writing better AI prompts.',
    images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: 'PromptQuorum Prompt Engineering Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'Prompt Engineering Guide — PromptQuorum',
    description: 'Fundamentals, frameworks, techniques, and domain guides for better AI prompts.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
}

export default function PromptEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Prompt Engineering Guide',
              'url': 'https://www.promptquorum.com/prompt-engineering',
              'description': 'Complete prompt engineering resource covering fundamentals, frameworks, techniques, and domain-specific guides.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Prompt Engineering', 'item': 'https://www.promptquorum.com/prompt-engineering' },
              ],
            },
          ]),
        }}
      />
      <PromptEngineeringHub />
    </>
  )
}
