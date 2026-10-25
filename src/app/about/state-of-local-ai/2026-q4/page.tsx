import type { Metadata } from 'next'
import { getIssue, issuePath } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { pageMetadata } from '@/components/state-of-local-ai/shared'
import { IssueView } from '@/components/state-of-local-ai/IssueView'

export const dynamic = 'force-static'
export const revalidate = 86400

const issue = getIssue('2026-q4')!

export function generateMetadata(): Metadata {
  const text = SOLA_STRINGS.en.issues[issue.slug]
  return pageMetadata({ title: text.seoTitle, description: text.metaDescription, path: issuePath(issue), ogTitle: text.title, hreflang: true })
}

export default function IssuePage() {
  return <IssueView slug={issue.slug} lang="en" />
}
