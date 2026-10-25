import type { Metadata } from 'next'
import type { Language } from '@/lib/blog/blogContent'
import { SITE, SERIES, HUB_PATH, PRESS_CONTACT, LICENSE_NAME, LICENSE_URL, issuePath, type Issue } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { CopyButton } from './CopyButton'

/** Locale-prefixed path: English stays unprefixed. */
export const localePath = (path: string, lang: Language) => (lang === 'en' ? path : `/${lang}${path}`)

export const NOINDEX: Metadata['robots'] = { index: false, follow: true }

export function pageMetadata(opts: { title: string; description: string; path: string; ogTitle?: string; lang?: Language; hreflang?: boolean }): Metadata {
  const lang = opts.lang ?? 'en'
  const url = `${SITE}${localePath(opts.path, lang)}`
  return {
    title: { absolute: opts.title },
    description: opts.description,
    robots: NOINDEX,
    alternates: opts.hreflang ? generateAlternates(opts.path, lang, true, undefined, [...PATH_PREFIX_LANGS]) : { canonical: url },
    openGraph: {
      title: opts.ogTitle ?? opts.title,
      description: opts.description,
      url,
      type: 'article',
      siteName: 'PromptQuorum',
      ...(lang === 'en' ? {} : { images: [{ url: `${SITE}${opts.path}/opengraph-image` }] }),
      ...ogLocale(lang),
    },
    twitter: { card: 'summary_large_image', title: opts.ogTitle ?? opts.title, description: opts.description },
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export type Crumb = { name: string; path?: string }

export function crumbSchema(crumbs: Crumb[], selfPath: string) {
  // selfPath and crumb paths are already locale-resolved by the caller
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path ?? selfPath}`,
    })),
  }
}

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        {crumbs.map((c, i) => (
          <li key={c.name} className="flex gap-2">
            {c.path ? <a href={c.path} className="!no-underline hover:!underline underline-offset-2 !text-text-muted hover:!text-primary">{c.name}</a> : <span aria-current="page">{c.name}</span>}
            {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export const hubCrumbs = (lang: Language = 'en'): Crumb[] => {
  const t = SOLA_STRINGS[lang]
  return [
    { name: t.home, path: lang === 'en' ? '/' : `/${lang}` },
    { name: t.about, path: localePath('/about', lang) },
    { name: t.series, path: localePath(HUB_PATH, lang) },
  ]
}

export const kickerFor = (issue: Issue, lang: Language = 'en') => {
  const t = SOLA_STRINGS[lang]
  return `${t.series} · ${t.reportLabel.replace(/\d+/, String(issue.number).padStart(2, '0'))} · ${issue.quarter}`
}

export function Kicker({ issue, lang = 'en' }: { issue: Issue; lang?: Language }) {
  return <p className="inline-block rounded-full border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-hub-violet-ink mb-4">{kickerFor(issue, lang)}</p>
}

/** Tinted header band, the same violet-tint treatment as the site's article heroes. */
export function Hero({ children, narrow = true }: { children: React.ReactNode; narrow?: boolean }) {
  return (
    <div className="bg-hub-violet-tint border-b border-hub-violet-edge">
      <div className={`container mx-auto px-4 pt-24 pb-10 ${narrow ? 'max-w-3xl' : 'max-w-5xl'}`}>{children}</div>
    </div>
  )
}

/** Deck under the H1: violet rule on the left, like the lead answer on article pages. */
export function Lede({ children }: { children: React.ReactNode }) {
  return <p className="border-l-4 border-hub-violet pl-4 text-xl text-text-secondary leading-snug mb-4">{children}</p>
}

export const BTN = 'sola-btn inline-block rounded-lg bg-hub-violet px-5 py-2.5 text-sm font-semibold hover:opacity-90'
export const CARD = 'bg-white border border-hub-violet-edge rounded-xl p-6'

/** Plain-language permission to quote and reuse, plus a ready-made link for backlinks. */
export function ReuseBox({ issue }: { issue: Issue }) {
  const url = `${SITE}${issuePath(issue)}`
  const linkText = `${SERIES}, Report ${String(issue.number).padStart(2, '0')} (${issue.quarter}) – PromptQuorum`
  const html = `<a href="${url}">${linkText}</a>`
  return (
    <section id="reuse" aria-labelledby="reuse-h" className={`${CARD} my-8`}>
      <h2 id="reuse-h" className="!mt-0 !text-xl">Free to quote and reuse</h2>
      <p>
        You may quote any sentence or figure from this report, and reuse its charts and tables, in articles, newsletters, talks and social posts, without asking.
        This applies to the PDFs and CSV files as well. It is licensed under{' '}
        <a href={LICENSE_URL} rel="license noopener" target="_blank">{LICENSE_NAME}</a>.
        What we ask: name the author and PromptQuorum, <b>link to this page</b>, and say if you changed anything.
      </p>
      <p className="text-sm text-text-muted">
        This covers our own text, figures, charts and tables. The third-party sources behind the numbers (the [S…] references) stay under their owners&apos; terms; cite those at the source.
        Please quote figures with their source label and the data cut-off date ({issue.dataCutOff}), because the numbers change with each report.
      </p>
      <div className="space-y-3">
        <div>
          <p className="!mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Link to this report</p>
          <p className="!mb-1 flex flex-wrap items-center gap-2"><code className="select-all break-all" dir="ltr">{url}</code><CopyButton text={url} label="Copy URL" /></p>
        </div>
        <div>
          <p className="!mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">HTML link for your page</p>
          <p className="!mb-1 flex flex-wrap items-center gap-2"><code className="select-all break-all" dir="ltr">{html}</code><CopyButton text={html} label="Copy HTML" /></p>
        </div>
      </div>
      <p className="!mb-0 mt-3 text-sm">
        Questions, a quote check or a corrected number: <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a>. If you publish something based on this report, send us the link and we will list it here.
      </p>
    </section>
  )
}

export function CiteBox({ issue, lang = 'en' }: { issue: Issue; lang?: Language }) {
  if (lang !== 'en') {
    return (
      <section aria-labelledby="cite-h" className={`${CARD} my-8`}>
        <h2 id="cite-h" className="!mt-0 !text-xl">{SOLA_STRINGS[lang].citeThisReport}</h2>
        <p className="!mb-0 text-text-secondary text-base select-all">{issue.citeAs}</p>
      </section>
    )
  }
  const formats = [['APA', issue.citeApa], ['Chicago', issue.citeChicago], ['Plain text', issue.citeAs]]
  return (
    <section aria-labelledby="cite-h" className={`${CARD} my-8`}>
      <h2 id="cite-h" className="!mt-0 !text-xl">Cite this report</h2>
      <dl className="space-y-3 !mb-0">
        {formats.map(([name, text]) => (
          <div key={name}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">{name}</dt>
            <dd className="!ml-0 text-text-secondary text-base select-all">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/** Collapsed journalist view: quotable figures with source labels, ready-to-copy quotes, author and method. */
export function PressKit({ issue, evidencePath }: { issue: Issue; evidencePath: string }) {
  const { stats, quotes, author, method } = issue.press
  return (
    <details id="press" className="evidence-all">
      <summary>
        <span>
          <span className="ev-title">Press kit: key figures and quotes</span>
          <span className="ev-sub">For journalists: seven figures with exact source labels, copy-ready quotes, author and method.</span>
        </span>
        <span className="ev-chev" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l4 4 4-4" /></svg></span>
      </summary>
      <div className="ev-body">
        <h3 className="!mt-0">Key figures</h3>
        <ul className="!list-none !ml-0 space-y-3">
          {stats.map((s) => (
            <li key={s.figure}>
              <b className="text-text-primary">{s.figure}</b> {s.text}{' '}
              <span className="text-sm text-text-muted">
                Source: {s.source}{' '}
                <sup className="cite">[{s.ids.map((id, i) => (<span key={id}>{i > 0 && ', '}<a href={`${evidencePath}#${id}`}>{id}</a></span>))}]</sup>
              </span>
            </li>
          ))}
        </ul>
        <h3>Quotes to copy</h3>
        {quotes.map((q) => (<blockquote key={q} className="select-all">{q}</blockquote>))}
        <h3>About the author and method</h3>
        <p>{author}</p>
        <p>{method}</p>
        <p className="!mb-0 text-sm">
          <a href="#reuse">Free to quote and reuse</a> · <a href="#cite-h">Cite this report</a> · <a href={issue.files.reportPdf} download>Report (PDF)</a> · <a href={issue.files.appendixPdf} download>Appendix (PDF)</a> · <a href={issue.files.claims} download>Claim register (CSV)</a> · <a href={issue.files.sources} download>Sources (CSV)</a> · <a href={evidencePath}>Full evidence</a> · Press contact: <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a>
        </p>
      </div>
    </details>
  )
}
