import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, [...PATH_PREFIX_LANGS]),
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

export default async function EsComparePage() {
  return (
    <>
      <ComparePageClient initialLang="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/es/compare',
                'url': 'https://www.promptquorum.com/es/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Herramientas multi-LLM comparadas (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compara envío simultáneo, puntuación de consenso, soporte de LLM local y control de clave de API en 2026.',
                'inLanguage': 'es',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Comparar', 'item': 'https://www.promptquorum.com/es/compare' },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
