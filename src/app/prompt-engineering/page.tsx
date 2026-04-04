import type { Metadata } from 'next'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Prompt Engineering Guide — 80 Articles on PromptQuorum',
  description: '80 comprehensive guides on prompt engineering: fundamentals, frameworks, techniques, tools, evaluation methods, team governance, and workflows for individuals and teams.',
  alternates: generateAlternates('/prompt-engineering'),
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com/prompt-engineering',
    siteName: 'PromptQuorum',
    title: 'Prompt Engineering Guide — 80 Articles on PromptQuorum',
    description: 'Fundamentals, frameworks, techniques, tools, evaluation, governance, and workflows for writing better AI prompts.',
    images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: 'PromptQuorum Prompt Engineering Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'Prompt Engineering Guide — 80 Articles',
    description: 'Fundamentals, frameworks, techniques, tools, evaluation, governance, and workflows for better AI prompts.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PromptEngineeringPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

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
      <PromptEngineeringHub initialLang={selectedLang as any} />
    </>
  )
}
