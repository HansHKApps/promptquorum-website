import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'pt'
  const t = translations[lang]

  return {
    title: t.howItWorksMetaTitle,
    description: t.howItWorksMetaDescription,
    alternates: generateAlternates('/how-it-works', lang, true, undefined, [...PATH_PREFIX_LANGS]),
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

export default async function EsHowItWorksPage() {
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Cómo funciona PromptQuorum — Escribir, Optimizar, Enviar, Quorum',
      'url': 'https://www.promptquorum.com/pt/how-it-works',
      'inLanguage': 'pt',
      'description': 'Guía completa del flujo de trabajo de 4 etapas de PromptQuorum: escritura estructurada de prompts con 9 frameworks, optimización impulsada por LLM, envío con un clic a 25+ servicios de IA y análisis Quorum multi-modelo.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Cómo funciona', 'item': 'https://www.promptquorum.com/pt/how-it-works' },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang="pt" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
