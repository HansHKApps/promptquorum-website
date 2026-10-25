import type { Metadata } from 'next'
import {
  SITE, SERIES, HUB_PATH, NEXT_ISSUE, PRESS_CONTACT, ISSUES, LATEST, issuePath, evidencePath, kicker,
} from '@/lib/state-of-local-ai/issues'
import { Breadcrumb, JsonLd, crumbSchema, pageMetadata, CARD, BTN, CiteBox } from '@/components/state-of-local-ai/shared'

export const dynamic = 'force-static'
export const revalidate = 86400

const TITLE = `${SERIES} | PromptQuorum`
const DESC = 'A quarterly report on the state of local AI: sourced figures, hands-on tests, labelled assumptions and a claim register. Next issue: January 2027.'

export function generateMetadata(): Metadata {
  return pageMetadata({ title: TITLE, description: DESC, path: HUB_PATH })
}

export default function HubPage() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: SERIES }]
  return (
    <div className="sola">
      <JsonLd data={crumbSchema(crumbs, HUB_PATH)} />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <Breadcrumb crumbs={crumbs} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">{SERIES}</h1>
        <div className="text-lg text-text-secondary leading-relaxed space-y-3 mb-10">
          <p>The State of Local AI is a quarterly report on where local AI stands today. It is written from the author&rsquo;s experience building PromptQuorum and testing local-AI apps.</p>
          <p>Facts are labelled, sources are numbered, and assumptions name who makes them and what they rest on.</p>
          <p>Next issue: {NEXT_ISSUE}.</p>
        </div>

        <section aria-labelledby="latest-h" className={`${CARD} mb-10`}>
          <h2 id="latest-h" className="!mt-0 !text-sm uppercase tracking-wide text-text-muted">Latest report</h2>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hub-violet-ink !mb-1">{kicker(LATEST)}</p>
          <h3 className="!mt-0 !text-2xl !text-text-primary">{LATEST.title}</h3>
          <p className="text-text-secondary">{LATEST.subtitle}</p>
          <p className="text-sm text-text-muted">{LATEST.displayDate}</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2 !mb-0">
            <a href={issuePath(LATEST)} className={BTN}>Read the report</a>
            <a href={evidencePath(LATEST)}>Evidence file</a>
          </p>
        </section>

        <section aria-labelledby="archive-h" className="mb-10">
          <h2 id="archive-h" className="!mt-0">Archive</h2>
          <ul className="!list-none !ml-0 space-y-3">
            {ISSUES.map((i) => (
              <li key={i.slug}>
                <a href={issuePath(i)} className="font-semibold">{i.label} · {i.quarter}: {i.title}</a>
                <span className="text-text-muted text-sm"> · {i.displayDate}</span>
              </li>
            ))}
          </ul>
        </section>

        <CiteBox issue={LATEST} />

        <section aria-labelledby="press-h">
          <h2 id="press-h" className="!mt-0">Press contact</h2>
          <p><a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a></p>
        </section>
      </div>
    </div>
  )
}
