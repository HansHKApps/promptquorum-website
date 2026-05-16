import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.howItWorksMetaTitle,
    description: t.howItWorksMetaDescription,
    alternates: generateAlternates('/how-it-works', lang, true, undefined, ['ja', 'zh', 'de']),
    openGraph: {
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
    },
  }
}

export default async function JaHowItWorksPage() {
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'How PromptQuorum Works — Write, Optimize, Dispatch, Quorum',
      'url': 'https://www.promptquorum.com/ja/how-it-works',
      'inLanguage': 'ja',
      'description': 'A complete guide to the PromptQuorum 4-stage workflow: structured prompt writing with 9 frameworks, LLM-powered optimization, one-click dispatch to 25+ AI services, and multi-model Quorum analysis.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com/ja' },
        { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'item': 'https://www.promptquorum.com/ja/how-it-works' },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang="ja" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
