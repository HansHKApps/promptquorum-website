import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { DownloadClient } from '@/components/DownloadClient'
import type { Lang } from '@/hooks/useLang'

export const dynamic = 'force-static'
export const revalidate = 86400

const LANG: Lang = 'es'

export async function generateMetadata(): Promise<Metadata> {
  const t = translations[LANG]

  return {
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    robots: 'noindex, follow',
    alternates: generateAlternates('/download', LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
    },
  }
}

export default function EsDownloadPage() {
  return <DownloadClient initialLang={LANG} />
}
