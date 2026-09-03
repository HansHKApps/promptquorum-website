import type { Metadata } from 'next'
import { translations } from '@/translations'
import { EnterpriseAiHub } from '@/components/EnterpriseAiHub'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { buildEnterpriseAiHubData } from '@/lib/enterprise-ai/hub-data'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'en'
  const t = translations[lang]

  return {
    title: t.enterpriseAiHubTitle,
    description: t.enterpriseAiHubDescription,
    alternates: generateAlternates('/enterprise-ai', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.enterpriseAiHubTitle,
      description: t.enterpriseAiHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.enterpriseAiHubTitle,
      description: t.enterpriseAiHubDescription,
    },
  }
}

export default async function EnterpriseAiPage() {
  return <EnterpriseAiHub initialLang="en" {...buildEnterpriseAiHubData('en')} />
}
