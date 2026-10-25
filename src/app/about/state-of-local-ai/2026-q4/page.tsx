import type { Metadata } from 'next'
import {
  SITE, SERIES, HUB_PATH, PRESS_CONTACT, getIssue, issuePath, evidencePath, loadFragment,
} from '@/lib/state-of-local-ai/issues'
import { Breadcrumb, JsonLd, Kicker, crumbSchema, pageMetadata, CARD, CiteBox, hubCrumbs } from '@/components/state-of-local-ai/shared'

export const dynamic = 'force-static'
export const revalidate = 86400

const issue = getIssue('2026-q4')!

export function generateMetadata(): Metadata {
  return pageMetadata({ title: issue.seoTitle, description: issue.metaDescription, path: issuePath(issue), ogTitle: issue.title })
}

export default function IssuePage() {
  const crumbs = [...hubCrumbs(), { name: issue.label }]
  const ev = evidencePath(issue)
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: issue.title,
    description: issue.metaDescription,
    inLanguage: 'en',
    datePublished: issue.datePublished,
    dateModified: issue.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${issuePath(issue)}` },
    image: `${SITE}${issuePath(issue)}/opengraph-image`,
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: `${SITE}/about` },
    publisher: { '@id': `${SITE}/#organization` },
    isPartOf: { '@type': 'CreativeWorkSeries', name: SERIES, url: `${SITE}${HUB_PATH}` },
  }
  return (
    <div className="sola">
      <JsonLd data={article} />
      <JsonLd data={crumbSchema(crumbs, issuePath(issue))} />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb crumbs={crumbs} />
          <Kicker issue={issue} />
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">{issue.title}</h1>
          <p className="text-xl text-text-secondary leading-snug mb-3">{issue.subtitle}</p>
          <p className="text-sm text-text-muted mb-8">
            By Hans Kuepper, PromptQuorum · {issue.displayDate} · Data cut-off {issue.dataCutOff} · Version {issue.version}
          </p>

          <section aria-labelledby="kf-h" className={`${CARD} mb-10`}>
            <h2 id="kf-h" className="!mt-0 !text-xl">Key findings</h2>
            <ol className="!ml-5 space-y-2 text-base">
              {issue.keyFindings.map((k) => (
                <li key={k.text}>
                  {k.text}{' '}
                  <sup className="cite">[{k.sources.map((s, i) => (<span key={s}>{i > 0 && ', '}<a href={`${ev}#${s}`}>{s}</a></span>))}]</sup>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="prose-body" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'article') }} />

        <div className="max-w-3xl mx-auto mt-10">
          <CiteBox issue={issue} />

          <section aria-labelledby="about-h" className="mb-8">
            <h2 id="about-h" className="!mt-0">About this report</h2>
            <p>{issue.disclosure}</p>
            <p><a href="/about">Hans Kuepper</a> is the founder of PromptQuorum, based in Frankfurt, with more than 30 years of consulting and general management experience.</p>
            <p>The method, labels, assumptions and sources are in the <a href={ev}>evidence file</a>.</p>
            <p>Press contact: <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a></p>
          </section>

          <section aria-labelledby="links-h" className="mb-8 no-print">
            <h2 id="links-h" className="!mt-0">Evidence and downloads</h2>
            <ul>
              <li><a href={ev}>Evidence file</a></li>
              <li><a href={issue.files.claims} download>Claim register (claims.csv)</a></li>
              <li><a href={issue.files.sources} download>Sources (sources.csv)</a></li>
              <li><a href={issue.files.sourcesJson} download>Sources (sources.json)</a></li>
              <li><a href={HUB_PATH}>Back to {SERIES}</a></li>
            </ul>
          </section>

          <section aria-labelledby="corr-h">
            <h2 id="corr-h" className="!mt-0">Corrections and updates</h2>
            <ul>
              {issue.corrections.map((c) => (<li key={c.date + c.text}>{c.date}: {c.text}</li>))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
