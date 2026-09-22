import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { AboutPageContent } from '@/components/AboutPageContent'

export const dynamic = 'force-static'
export const revalidate = 86400

const LANG = 'ko' as const

export async function generateMetadata(): Promise<Metadata> {
  const t = translations[LANG]
  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function AboutPage() {
  return <AboutPageContent lang={LANG} />
}
