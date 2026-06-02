import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { PrivacyPageClient } from '@/components/PrivacyPageClient'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'pt'
  const t = translations[lang]

  return {
    title: t.privacyPageTitle,
    description: t.privacyMetaDescription || 'Privacy Policy for PromptQuorum',
    alternates: generateAlternates('/privacy', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.privacyPageTitle,
      description: t.privacyMetaDescription || 'Privacy Policy for PromptQuorum',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.privacyPageTitle,
      description: t.privacyMetaDescription || 'Privacy Policy for PromptQuorum',
    },
  }
}

export default async function EsPrivacyPage() {
  return <PrivacyPageClient initialLang="pt" />
}
