import type { Metadata } from 'next'
import { translations } from '@/translations'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { buildLLMHubData } from '@/lib/local-llms/hub-data'
import { LocalLlmsHubTemplate, usesLocalLlmsHubTemplate } from '@/lib/local-llms/hub-template'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
  const t = translations[lang]

  return {
    title: t.localLlmsHubTitle,
    description: t.localLlmsHubDescription,
    alternates: generateAlternates('/local-llms', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.localLlmsHubTitle,
      description: t.localLlmsHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
      ...ogLocale(lang),
    },
    twitter: {
      card: 'summary_large_image',
      title: t.localLlmsHubTitle,
      description: t.localLlmsHubDescription,
    },
  }
}

export default async function EsLocalLLMsPage() {
  const hubData = buildLLMHubData('ar')
  if (usesLocalLlmsHubTemplate('ar')) return <LocalLlmsHubTemplate lang="ar" {...hubData} />
  return <LocalLLMsHub initialLang="ar" {...hubData} />
}
