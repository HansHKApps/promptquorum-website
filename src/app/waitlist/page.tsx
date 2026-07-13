import type { Metadata } from 'next'
import { WaitlistModalOpener } from '@/components/WaitlistModalOpener'
import { WaitlistPageContent } from '@/components/WaitlistPageContent'
import { WAITLIST_INVITE_COPY } from '@/lib/waitlistInviteCopy'
import type { Lang } from '@/hooks/useLang'

const VALID_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const selectedLang = (VALID_LANGS.includes(lang) ? lang : 'en') as Lang
  const t = WAITLIST_INVITE_COPY[selectedLang]

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: false },
  }
}

export default async function WaitlistPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const selectedLang = (VALID_LANGS.includes(lang) ? lang : 'en') as Lang

  return (
    <>
      <WaitlistPageContent initialLang={selectedLang} />
      <WaitlistModalOpener />
    </>
  )
}
