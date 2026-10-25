import type { Metadata } from 'next'
import { SITE, SERIES, HUB_PATH, type Issue, kicker } from '@/lib/state-of-local-ai/issues'

export const NOINDEX: Metadata['robots'] = { index: false, follow: true }

export function pageMetadata(opts: { title: string; description: string; path: string; ogTitle?: string }): Metadata {
  return {
    title: { absolute: opts.title },
    description: opts.description,
    robots: NOINDEX,
    alternates: { canonical: `${SITE}${opts.path}` },
    openGraph: {
      title: opts.ogTitle ?? opts.title,
      description: opts.description,
      url: `${SITE}${opts.path}`,
      type: 'article',
      siteName: 'PromptQuorum',
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title: opts.ogTitle ?? opts.title, description: opts.description },
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export type Crumb = { name: string; path?: string }

export function crumbSchema(crumbs: Crumb[], selfPath: string) {
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

export const hubCrumbs = (): Crumb[] => [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: SERIES, path: HUB_PATH },
]

export function Kicker({ issue }: { issue: Issue }) {
  return <p className="inline-block rounded-full border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-hub-violet-ink mb-4">{kicker(issue)}</p>
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

export function CiteBox({ issue }: { issue: Issue }) {
  return (
    <section aria-labelledby="cite-h" className={`${CARD} my-8`}>
      <h2 id="cite-h" className="!mt-0 !text-xl">Cite this report</h2>
      <p className="!mb-0 text-text-secondary text-base select-all">{issue.citeAs}</p>
    </section>
  )
}
