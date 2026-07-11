import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { DownloadClient } from '@/components/DownloadClient'
import type { Lang } from '@/hooks/useLang'

export const dynamic = 'force-static'
export const revalidate = 86400

const VALID_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const selectedLang = VALID_LANGS.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    robots: 'noindex, follow',
    alternates: generateAlternates('/download', selectedLang),
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

export default async function DownloadPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const selectedLang = VALID_LANGS.includes(lang) ? lang : 'en'

  return <DownloadClient initialLang={selectedLang as Lang} />
}
