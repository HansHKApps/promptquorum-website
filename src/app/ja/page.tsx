import type { Metadata } from 'next'
import type { translations } from '@/translations'
import { getHomeMeta } from '@/lib/home/meta'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { ConfirmedToast } from '@/components/ConfirmedToast'
import { Home } from '@/components/home/Home'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const meta = getHomeMeta(lang as keyof typeof translations)

  return {
    title: meta.title,
    description: meta.description,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
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
