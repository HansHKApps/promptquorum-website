import type { Metadata } from 'next'
import { HUB_PATH, NEXT_ISSUE_ISO } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { pageMetadata } from '@/components/state-of-local-ai/shared'
import { HubView } from '@/components/state-of-local-ai/HubView'

export const dynamic = 'force-static'
export const revalidate = 86400

export function generateMetadata(): Metadata {
  const t = SOLA_STRINGS.en
  return pageMetadata({ title: `${t.series} | ${t.hubTitleSuffix}`, description: t.hubDescription, path: HUB_PATH, hreflang: true })
}

export default function HubPage() {
  return <HubView lang="en" />
}
