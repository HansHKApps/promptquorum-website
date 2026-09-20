import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { ConfirmedToast } from '@/components/ConfirmedToast'
import { Home } from '@/components/home/Home'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

export default async function JaHome() {
  return (
    <>
      <ConfirmedToast />
      <Home lang="ja" />
    </>
  )
}
