import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { buildImageObject } from '@/lib/imageObjectSchema'
import { HandsOnTestView } from '@/components/hands-on-test/HandsOnTestView'
import { getHandsOnTest } from './index'
import { appSlugFromHandsOnUrlSlug, handsOnTestUrlSlug } from './links'

const BASE = 'https://www.promptquorum.com'

/** Slugs for generateStaticParams on /power-local-llm/[slug]. */
export function getHandsOnStaticParams(slugs: readonly string[]) {
  return slugs.map((appSlug) => ({ slug: handsOnTestUrlSlug(appSlug) }))
}

function pathFor(urlSlug: string) {
  return `/power-local-llm/${urlSlug}`
}

/** Returns null when `urlSlug` is not a hands-on test, so the caller falls through to the article builders. */
export function buildHandsOnTestMetadata(urlSlug: string): Metadata | null {
  const appSlug = appSlugFromHandsOnUrlSlug(urlSlug)
  const test = appSlug ? getHandsOnTest(appSlug) : null
  if (!test) return null
  return {
    title: test.title,
    description: test.dek,
    robots: { index: true, follow: true },
    alternates: generateAlternates(pathFor(urlSlug), 'en', true, ['en']),
    openGraph: { title: test.title, description: test.dek, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'article', siteName: 'PromptQuorum' },
    twitter: { card: 'summary_large_image', title: test.title, description: test.dek },
  }
}

export function buildHandsOnTestPageElement(urlSlug: string) {
  const appSlug = appSlugFromHandsOnUrlSlug(urlSlug)
  const test = appSlug ? getHandsOnTest(appSlug) : null
  if (!test || !appSlug) return null

  const url = `${BASE}${pathFor(urlSlug)}`
  const hero = test.images.find((i) => i.role === 'hero')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        url,
        headline: test.title,
        description: test.dek,
        inLanguage: 'en',
        datePublished: test.published,
        dateModified: test.published,
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: BASE },
        about: { '@id': `${url}#app` },
        ...(hero && { image: buildImageObject(`/images/${hero.file}`, { caption: hero.caption }) }),
        associatedMedia: test.images.map((i) => buildImageObject(`/images/${i.file}`, { caption: i.caption })),
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}#app`,
        name: test.app.name,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'macOS',
        publisher: { '@type': 'Organization', name: test.app.vendor },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Directory', item: `${BASE}/directory` },
          { '@type': 'ListItem', position: 3, name: `${test.app.name} hands-on test`, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <main dir="ltr" className="min-h-screen bg-surface pb-20 pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <HandsOnTestView test={test} />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
