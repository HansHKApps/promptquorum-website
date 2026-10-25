import type { Metadata } from 'next'
import { getIssue, issuePath, evidencePath, loadFragment, HUB_PATH, SERIES, SITE, LICENSE_NAME, LICENSE_URL } from '@/lib/state-of-local-ai/issues'
import { Breadcrumb, JsonLd, Hero, Lede, crumbSchema, pageMetadata, hubCrumbs } from '@/components/state-of-local-ai/shared'

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
    index: false, // English-only duplicate of the evidence section inside the report page
  })
}

export default function EvidencePage() {
  const crumbs = [...hubCrumbs(), { name: issue.label, path: issuePath(issue) }, { name: 'Evidence file' }]
  return (
    <div className="sola">
      <JsonLd data={crumbSchema(crumbs, evidencePath(issue))} />
      <Hero narrow={false}>
        <Breadcrumb crumbs={crumbs} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">{TITLE}</h1>
        <Lede>The same findings with labels, calculations, assumption boxes, a claim register and sources. Cite from here.</Lede>
        <p className="text-sm text-text-muted">{SERIES} · {issue.label} · {issue.quarter} · <a href={issuePath(issue)}>Read the report</a></p>
      </Hero>
      <div className="container mx-auto px-4 pt-10 pb-16 max-w-5xl">
        <div className="evidence" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'evidence') }} />
        <p className="mt-10 max-w-3xl mx-auto text-sm text-text-muted">
          Free to quote and reuse under <a href={LICENSE_URL} rel="license noopener" target="_blank">{LICENSE_NAME}</a>: credit Hans Kuepper and PromptQuorum, link to{' '}
          <a href={issuePath(issue)}>{`${SITE}${issuePath(issue)}`}</a> and say if you changed anything. Third-party sources stay under their owners&apos; terms.
        </p>
        <section aria-labelledby="dl-h" className="mt-6 max-w-3xl mx-auto no-print">
          <h2 id="dl-h">Downloads</h2>
          <ul>
            <li><a href={issue.files.appendixPdf} download>Appendix with all evidence (PDF)</a></li>
            <li><a href={issue.files.reportPdf} download>Report (PDF)</a></li>
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
