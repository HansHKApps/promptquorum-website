import type { Metadata } from 'next'
import { WaitlistModalOpener } from '@/components/WaitlistModalOpener'
import { WaitlistPageContent } from '@/components/WaitlistPageContent'
import { WAITLIST_INVITE_COPY } from '@/lib/waitlistInviteCopy'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import type { Lang } from '@/hooks/useLang'

const LANG: Lang = 'fr'

export async function generateMetadata(): Promise<Metadata> {
  const t = WAITLIST_INVITE_COPY[LANG]

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: false },
    alternates: generateAlternates('/waitlist', LANG, true, undefined, [...PATH_PREFIX_LANGS]),
  }
}

export default function FrWaitlistPage() {
  return (
    <>
      <WaitlistPageContent initialLang={LANG} />
      <WaitlistModalOpener />
    </>
  )
}
