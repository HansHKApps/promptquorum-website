import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { partnersContent } from '@/lib/partners/content'
import { PartnersPage } from '@/components/PartnersPage'

// Live counters refresh at most hourly (Umami 1 h, Search Console 6 h via the fetch cache).
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const c = partnersContent.es
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: generateAlternates('/partners', 'es', true, undefined, [...PATH_PREFIX_LANGS]),
    robots: { index: true, follow: true },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
      ...ogLocale('es'),
    },
    twitter: {
      card: 'summary_large_image',
      title: c.metaTitle,
      description: c.metaDescription,
    },
  }
}

export default function EsPartnersPage() {
  return <PartnersPage lang="es" />
}
