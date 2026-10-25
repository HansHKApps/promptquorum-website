import type { Metadata } from 'next'
import { HUB_PATH } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { pageMetadata } from '@/components/state-of-local-ai/shared'
import { HubView } from '@/components/state-of-local-ai/HubView'

export const dynamic = 'force-static'
export const revalidate = 86400

const LANG = 'es' as const

export function generateMetadata(): Metadata {
  const t = SOLA_STRINGS[LANG]
  return pageMetadata({ title: `${t.series} | ${t.hubTitleSuffix}`, description: t.hubDescription, path: HUB_PATH, lang: LANG, hreflang: true })
}

export default function HubPage() {
  return <HubView lang={LANG} />
}
