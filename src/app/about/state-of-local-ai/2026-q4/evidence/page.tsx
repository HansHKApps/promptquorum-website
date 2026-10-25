import type { Metadata } from 'next'
import { getIssue, issuePath, evidencePath, loadFragment, HUB_PATH, SERIES } from '@/lib/state-of-local-ai/issues'
import { Breadcrumb, JsonLd, crumbSchema, pageMetadata, hubCrumbs } from '@/components/state-of-local-ai/shared'

export const dynamic = 'force-static'
export const revalidate = 86400

const issue = getIssue('2026-q4')!
const TITLE = `Evidence file: ${issue.title}`

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: `${TITLE} | State of Local AI ${issue.label}`,
    description: 'The same findings with labels, calculations, assumption boxes, a claim register and sources. Cite from here.',
    path: evidencePath(issue),
    ogTitle: TITLE,
  })
}

export default function EvidencePage() {
  const crumbs = [...hubCrumbs(), { name: issue.label, path: issuePath(issue) }, { name: 'Evidence file' }]
  return (
    <div className="sola">
      <JsonLd data={crumbSchema(crumbs, evidencePath(issue))} />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <Breadcrumb crumbs={crumbs} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-3">{TITLE}</h1>
        <p className="text-lg text-text-secondary mb-2">The same findings with labels, calculations, assumption boxes, a claim register and sources. Cite from here.</p>
        <p className="text-sm text-text-muted mb-4">{SERIES} · {issue.label} · {issue.quarter} · <a href={issuePath(issue)}>Read the report</a></p>
        <div className="evidence" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'evidence') }} />
        <section aria-labelledby="dl-h" className="mt-10 max-w-3xl mx-auto no-print">
          <h2 id="dl-h">Downloads</h2>
          <ul>
            <li><a href={issue.files.claims} download>Claim register (claims.csv)</a></li>
            <li><a href={issue.files.sources} download>Sources (sources.csv)</a></li>
            <li><a href={issue.files.sourcesJson} download>Sources (sources.json)</a></li>
            <li><a href={HUB_PATH}>Back to {SERIES}</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
