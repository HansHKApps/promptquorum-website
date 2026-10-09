import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateAlternates } from '@/lib/hreflang'
import { getHandsOnTest } from '@/lib/hands-on-tests'
import { HANDS_ON_TEST_SLUGS } from '@/lib/hands-on-tests/links'
import { buildImageObject } from '@/lib/imageObjectSchema'
import { HandsOnTestView } from '@/components/hands-on-test/HandsOnTestView'

const LANG = 'en' as const
const BASE = 'https://www.promptquorum.com'

export const dynamic = 'force-static'
export const revalidate = 86400

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return HANDS_ON_TEST_SLUGS.map((slug) => ({ slug }))
}

function pathFor(slug: string) {
  return `/hands-on-tests/${slug}`
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const test = getHandsOnTest(slug)
  if (!test) return {}
  const title = test.title
  const description = test.dek
  return {
    title,
    description,
    // Scaffold stage: noindex until the open items are confirmed and the indexing flip is approved.
    robots: { index: false, follow: false },
    alternates: generateAlternates(pathFor(slug), LANG, true, ['en']),
    openGraph: { title, description, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'article', siteName: 'PromptQuorum' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function HandsOnTestPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const test = getHandsOnTest(slug)
  if (!test) notFound()

  const url = `${BASE}${pathFor(slug)}`
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
        inLanguage: LANG,
        datePublished: test.started,
        dateModified: test.started,
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
