import type { Metadata } from 'next'
import { translations } from '@/translations'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { buildPEHubData } from '@/lib/prompt-engineering/hub-data'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang]

  return {
    title: t.promptEngineeringHubTitle,
    description: t.promptEngineeringHubDescription,
    alternates: generateAlternates('/prompt-engineering', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubOgDescription ?? t.promptEngineeringHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubTwitterDescription ?? t.promptEngineeringHubDescription,
    },
  }
}

export default async function EsPromptEngineeringPage() {
  const { titlesMap, articleLevels, datesMap } = buildPEHubData('es')

  return <PromptEngineeringHub initialLang="es" titlesMap={titlesMap} articleLevels={articleLevels} datesMap={datesMap} />
}
