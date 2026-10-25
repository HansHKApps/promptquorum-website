import type { Metadata } from 'next'
import {
  SITE, SERIES, HUB_PATH, PRESS_CONTACT, LICENSE_URL, getIssue, issuePath, evidencePath, loadFragment,
} from '@/lib/state-of-local-ai/issues'
import { Breadcrumb, JsonLd, Kicker, Hero, Lede, crumbSchema, pageMetadata, CARD, CiteBox, ReuseBox, PressKit, hubCrumbs } from '@/components/state-of-local-ai/shared'
import { EvidenceController } from '@/components/state-of-local-ai/EvidenceController'

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
    license: LICENSE_URL,
    creditText: `Kuepper, H. ${SERIES}, Report ${String(issue.number).padStart(2, '0')}. PromptQuorum`,
    copyrightHolder: { '@id': `${SITE}/#organization` },
    isPartOf: { '@type': 'CreativeWorkSeries', name: SERIES, url: `${SITE}${HUB_PATH}` },
  }
  return (
    <div className="sola">
      <JsonLd data={article} />
      <JsonLd data={crumbSchema(crumbs, issuePath(issue))} />
      <EvidenceController evidencePathname={ev} />
      <Hero>
        <Breadcrumb crumbs={crumbs} />
        <Kicker issue={issue} />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4">{issue.title}</h1>
        <Lede>{issue.subtitle}</Lede>
        <p className="text-sm text-text-muted">
          By <a href="/about">Hans Kuepper</a>, PromptQuorum · {issue.displayDate} · Data cut-off {issue.dataCutOff} · Version {issue.version}
        </p>
        <p className="flex flex-wrap gap-3 mt-4 no-print">
          <a href={issue.files.reportPdf} download className="sola-btn inline-block rounded-lg bg-hub-violet px-4 py-2 text-sm font-semibold hover:opacity-90">Download report (PDF)</a>
          <a href={issue.files.appendixPdf} download className="inline-block rounded-lg border border-hub-violet-edge bg-white px-4 py-2 text-sm font-semibold hover:bg-hub-violet-tint">Download appendix with all evidence (PDF)</a>
        </p>
        <p className="mt-4 text-sm no-print"><b>Free to quote and reuse with credit and a link</b> · <a href="#reuse">How to link</a> · <a href="#press">Press kit</a> · <a href="#cite-h">Cite</a></p>
      </Hero>
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="max-w-3xl mx-auto">
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
          <PressKit issue={issue} evidencePath={ev} />
        </div>

        <div className="prose-body" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'article') }} />

        <div className="max-w-5xl mx-auto mt-10">
          <details id="evidence" className="evidence-all">
            <summary>
              <span>
                <span className="ev-title">Full evidence and addenda</span>
                <span className="ev-sub">Every method note, calculation, assumption box, table, the claim register and all numbered sources. Opens right here, no download needed.</span>
              </span>
              <span className="ev-chev" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l4 4 4-4" /></svg></span>
            </summary>
            <div className="ev-body">
              <div className="evidence" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'evidence') }} />
            </div>
          </details>
        </div>

        <div className="max-w-3xl mx-auto">
          <ReuseBox issue={issue} />
          <CiteBox issue={issue} />

          <section aria-labelledby="about-h" className="mb-8">
            <h2 id="about-h" className="!mt-0">About this report</h2>
            <p>{issue.disclosure}</p>
            <p><a href="/about">Hans Kuepper</a> is the founder of PromptQuorum, based in Frankfurt, with more than 30 years of consulting and general management experience.</p>
            <p>The method, labels, assumptions and sources are in the <a href="#evidence">full evidence section</a> above, which also exists as a <a href={ev}>separate page</a>.</p>
            <p>Press contact: <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a></p>
          </section>

          <section aria-labelledby="links-h" className="mb-8 no-print">
            <h2 id="links-h" className="!mt-0">Evidence and downloads</h2>
            <ul>
              <li><a href="#reuse">Free to quote and reuse (licence and link)</a></li>
              <li><a href={ev}>Evidence file as a separate page</a></li>
              <li><a href={issue.files.reportPdf} download>Report (PDF)</a></li>
              <li><a href={issue.files.appendixPdf} download>Appendix with all evidence (PDF)</a></li>
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
