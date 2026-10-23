import type { Metadata } from 'next'
import { translations } from '@/translations'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { buildLLMHubData } from '@/lib/local-llms/hub-data'
import { generateLocalLlmsJsonLd } from '@/lib/local-llms/schema'
import { LocalLlmsHubTemplate, usesLocalLlmsHubTemplate } from '@/lib/local-llms/hub-template'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

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
  const hubData = buildLLMHubData('ko')
  const jsonLd = generateLocalLlmsJsonLd('ko', 'https://www.promptquorum.com/ko/local-llms', '/ko')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {usesLocalLlmsHubTemplate('ko') ? <LocalLlmsHubTemplate lang="ko" {...hubData} /> : <LocalLLMsHub initialLang="ko" {...hubData} />}
    </>
  )
}
