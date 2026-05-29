import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang]

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

export default async function EsFeaturesPage() {
  return (
    <>
      <FeaturesPageClient initialLang="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Características de PromptQuorum — Prompt Engineering, Envío Multi-Modelo, Análisis Quorum',
              'url': 'https://www.promptquorum.com/es/features',
              'description': 'Explora las características de PromptQuorum: 9 frameworks de prompt, optimización de IA, envío a 25+ servicios de IA, análisis de consenso multi-modelo, detección de alucinaciones, soporte de LLM local y privacidad total.',
              'inLanguage': 'es',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Características', 'item': 'https://www.promptquorum.com/es/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
