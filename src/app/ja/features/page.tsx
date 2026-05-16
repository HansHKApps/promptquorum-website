import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.featuresMetaTitle,
    description: t.featuresMetaDescription,
    alternates: generateAlternates('/features', lang, true, undefined, ['ja', 'zh', 'de']),
    openGraph: {
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
    },
  }
}

export default async function JaFeaturesPage() {
  return (
    <>
      <FeaturesPageClient initialLang="ja" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'PromptQuorum Features — Prompt Engineering, Multi-Model Dispatch, Quorum Analysis',
              'url': 'https://www.promptquorum.com/ja/features',
              'description': 'Explore PromptQuorum features: 9 prompt frameworks, AI optimization, dispatch to 25+ AI services, multi-model consensus analysis, hallucination detection, local LLM support, and full privacy.',
              'inLanguage': 'ja',
              'datePublished': '2026-04-05',
              'dateModified': '2026-04-05',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com/ja' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://www.promptquorum.com/ja/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
