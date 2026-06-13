import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.featuresMetaTitle,
    description: t.featuresMetaDescription,
    alternates: generateAlternates('/features', lang, true, undefined, [...PATH_PREFIX_LANGS]),
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

export default async function KoFeaturesPage() {
  return (
    <>
      <FeaturesPageClient initialLang="ko" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Recursos do PromptQuorum — Prompt Engineering, Envio Multi-Modelo, Análise Quorum',
              'url': 'https://www.promptquorum.com/ar/features',
              'description': 'Explore os recursos do PromptQuorum: 9 frameworks de prompt, otimização por IA, envio para 25+ serviços de IA, análise de consenso multi-modelo, detecção de alucinações, suporte a LLM local e privacidade total.',
              'inLanguage': 'ko',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/ar' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Recursos', 'item': 'https://www.promptquorum.com/ar/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
