import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'en'
  const t = translations['en' as keyof typeof translations]

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

export default async function KoHowItWorksPage() {
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Como funciona o PromptQuorum — Escrever, Otimizar, Enviar, Quorum',
      'url': 'https://www.promptquorum.com/ar/how-it-works',
      'inLanguage': 'ko',
      'description': 'Guia completo do fluxo de trabalho de 4 etapas do PromptQuorum: escrita estruturada de prompts com 9 frameworks, otimização impulsionada por LLM, envio com um clique para 25+ serviços de IA e análise Quorum multi-modelo.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/ar' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Como funciona', 'item': 'https://www.promptquorum.com/ar/how-it-works' },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
