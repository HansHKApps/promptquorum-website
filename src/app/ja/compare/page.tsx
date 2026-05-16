import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, ['ja', 'zh', 'de']),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function JaComparePage() {
  return (
    <>
      <ComparePageClient initialLang="ja" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/ja/compare',
                'url': 'https://www.promptquorum.com/ja/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare simultaneous dispatch, consensus scoring, local LLM support, and API key control in 2026.',
                'inLanguage': 'ja',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com/ja' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Compare', 'item': 'https://www.promptquorum.com/ja/compare' },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
