import type { Metadata } from 'next'
import { ogLocale } from '@/lib/i18n/constants'
import { translations } from '@/translations'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'
import { buildLLMHubData } from '@/lib/local-llms/hub-data'
import { LocalLlmsHubTemplate, usesLocalLlmsHubTemplate } from '@/lib/local-llms/hub-template'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'zh'
  const t = translations[lang]

  return {
    title: t.localLlmsHubTitle,
    description: t.localLlmsHubDescription,
    alternates: generateAlternates('/local-llms', lang, true, undefined, ['zh']),
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

export default async function ZhLocalLLMsPage() {
  const hubData = buildLLMHubData('zh')
  if (usesLocalLlmsHubTemplate('zh')) return <LocalLlmsHubTemplate lang="zh" {...hubData} />
  return <LocalLLMsHub initialLang="zh" {...hubData} />
}
