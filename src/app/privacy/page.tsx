import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { PrivacyPageClient } from '@/components/PrivacyPageClient'

export const dynamic = 'force-static'
export const revalidate = 86400

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  const selectedLang = 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.privacyPageTitle,
    description: t.privacyMetaDescription || 'Privacy Policy for PromptQuorum',
    alternates: generateAlternates('/privacy', selectedLang, true, undefined, [...PATH_PREFIX_LANGS]),
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

export default async function PrivacyPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as any

  return <PrivacyPageClient initialLang={selectedLang} />
}
