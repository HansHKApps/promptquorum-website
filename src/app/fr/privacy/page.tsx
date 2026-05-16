import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PrivacyPageClient } from '@/components/PrivacyPageClient'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'fr'
  const t = translations[lang]

  return {
    title: t.privacyPageTitle,
    description: t.privacyMetaDescription || 'Privacy Policy for PromptQuorum',
    alternates: generateAlternates('/privacy', lang, true, undefined, ['de', 'zh', 'de']),
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

export default async function FrPrivacyPage() {
  return <PrivacyPageClient initialLang="ja" />
}
