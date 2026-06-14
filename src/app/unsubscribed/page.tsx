import type { Metadata } from 'next'
import { UnsubscribedClient } from '@/components/UnsubscribedClient'

export const metadata: Metadata = {
  title: 'Unsubscribed — PromptQuorum',
  description: 'You have been unsubscribed from PromptQuorum emails.',
  robots: { index: false, follow: false },
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function UnsubscribedPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const status = (sp?.status as string) || 'ok'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as 'en' | 'de' | 'fr' | 'ja' | 'zh'
  const selectedStatus = (['ok', 'invalid', 'error'].includes(status) ? status : 'ok') as 'ok' | 'invalid' | 'error'

  return <UnsubscribedClient lang={selectedLang} status={selectedStatus} />
}
