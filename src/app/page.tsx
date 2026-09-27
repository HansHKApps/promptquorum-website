import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { ConfirmedToast } from '@/components/ConfirmedToast'
import { Home as HomeHub } from '@/components/home/Home'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  const selectedLang = 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', selectedLang, true, undefined, [...PATH_PREFIX_LANGS]),
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

export default async function Home() {
  // English gets the new dynamic homepage (11-block hub, no hero/Features/
  // How-It-Works/FAQ — see src/components/home/Home.tsx). The 8 other
  // locales get the same hub, fully translated, via their own
  // src/app/{lang}/page.tsx route files. `src/middleware.ts` already
  // redirects any `?lang=XX` (non-en) request to the proper path-prefixed
  // route with a 308 before Next.js routing ever reaches this file, so
  // this root route only ever needs to render the English hub.
  return (
    <>
      <ConfirmedToast />
      <HomeHub lang="en" />
    </>
  )
}
