import type { Metadata } from 'next'
import type { Language } from '@/lib/blog/blogContent'
import { SITE, SERIES, HUB_PATH, PRESS_CONTACT, LICENSE_NAME, LICENSE_URL, issuePath, type Issue } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, ogLocale } from '@/lib/i18n/constants'
import { CopyButton } from './CopyButton'
import { formatDisplayDate } from '@/lib/formatDisplayDate'

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
export function ReuseBox({ issue, lang = 'en' }: { issue: Issue; lang?: Language }) {
  const t = SOLA_STRINGS[lang]
  const x = t.extras
  const url = `${SITE}${localePath(issuePath(issue), lang)}`
  const linkText = `${t.series}, ${t.reportLabel} (${issue.quarter}) – PromptQuorum`
  const html = `<a href="${url}">${linkText}</a>`
  return (
    <section id="reuse" aria-labelledby="reuse-h" className={`${CARD} my-8`}>
      <h2 id="reuse-h" className="!mt-0 !text-xl">{x.reuseTitle}</h2>
      <p>
        {x.reuseA}
        <a href={LICENSE_URL} rel="license noopener" target="_blank">{LICENSE_NAME}</a>
        {x.reuseB}<b>{x.reuseBold}</b>{x.reuseC}
      </p>
      <p className="text-sm text-text-muted">{x.reuseNote.replace('{date}', formatDisplayDate(issue.isoDate, lang))}</p>
      <div className="space-y-3">
        <div>
          <p className="!mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">{x.reuseLinkLabel}</p>
          <p className="!mb-1 flex flex-wrap items-center gap-2"><code className="select-all break-all" dir="ltr">{url}</code><CopyButton text={url} label={x.copyUrl} doneLabel={x.copied} /></p>
        </div>
        <div>
          <p className="!mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">{x.reuseHtmlLabel}</p>
          <p className="!mb-1 flex flex-wrap items-center gap-2"><code className="select-all break-all" dir="ltr">{html}</code><CopyButton text={html} label={x.copyHtml} doneLabel={x.copied} /></p>
        </div>
      </div>
      <p className="!mb-0 mt-3 text-sm">
        {x.reuseContactA}<a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a>{x.reuseContactB}
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
export function PressKit({ issue, evidencePath, lang = 'en' }: { issue: Issue; evidencePath: string; lang?: Language }) {
  const t = SOLA_STRINGS[lang]
  const x = t.extras
  const text = t.issues[issue.slug]
  const stats = issue.press.stats.map((st, i) => ({ ...text.pressStats[i], ids: st.ids }))
  return (
    <details id="press" className="evidence-all">
      <summary>
        <span>
          <span className="ev-title">{x.pressTitle}</span>
          <span className="ev-sub">{x.pressSub}</span>
        </span>
        <span className="ev-chev" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l4 4 4-4" /></svg></span>
      </summary>
      <div className="ev-body">
        <h3 className="!mt-0">{x.keyFigures}</h3>
        <ul className="!list-none !ml-0 space-y-3">
          {stats.map((s) => (
            <li key={s.figure}>
              <b className="text-text-primary">{s.figure}</b> {s.text}{' '}
              <span className="text-sm text-text-muted">
                {x.sourcePrefix} {s.source}{' '}
                <sup className="cite" dir="ltr">[{s.ids.map((id, i) => (<span key={id}>{i > 0 && ', '}<a href={`${evidencePath}#${id}`}>{id}</a></span>))}]</sup>
              </span>
            </li>
          ))}
        </ul>
        <h3>{x.quotesToCopy}</h3>
        {text.pressQuotes.map((q) => (<blockquote key={q} className="select-all">{q}</blockquote>))}
        <h3>{x.authorAndMethod}</h3>
        <p>{text.pressAuthor}</p>
        <p>{text.pressMethod}</p>
        <p className="!mb-0 text-sm">
          <a href="#reuse">{x.linkFree}</a> · <a href="#cite-h">{x.linkCite}</a> · <a href={issue.files.reportPdf} download>{x.linkReportPdf}</a> · <a href={issue.files.appendixPdf} download>{x.linkAppendixPdf}</a> · <a href={issue.files.claims} download>{x.linkClaimsCsv}</a> · <a href={issue.files.sources} download>{x.linkSourcesCsv}</a> · <a href={evidencePath}>{x.linkFullEvidence}</a> · {t.pressContactLabel} <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a>
        </p>
      </div>
    </details>
  )
}
