import type { Metadata } from 'next'
import type { Language } from '@/lib/blog/blogContent'
import { generateAlternates } from '@/lib/hreflang'
import { getLangDir, toOutputLocale } from '@/lib/i18n/constants'
import { buildImageObject } from '@/lib/imageObjectSchema'
import { HandsOnTestView } from '@/components/hands-on-test/HandsOnTestView'
import { LangLinksBar } from '@/components/LangLinksBar'
import { getHandsOnTest } from './index'
import { appSlugFromHandsOnUrlSlug, handsOnTestLangs, handsOnTestUrlSlug } from './links'

const BASE = 'https://www.promptquorum.com'

/** Arabic data carries invisible bidi isolates (U+2066/U+2069) for on-page display; keep them out of <head> and JSON-LD. */
const plain = (s: string) => s.replace(/[\u2066\u2069]/g, '')

/** Slugs for generateStaticParams on /power-local-llm/[slug]. */
export function getHandsOnStaticParams(slugs: readonly string[]) {
  return slugs.map((appSlug) => ({ slug: handsOnTestUrlSlug(appSlug) }))
}

function pathFor(urlSlug: string) {
  return `/power-local-llm/${urlSlug}`
}

function localizedPath(urlSlug: string, lang: Language) {
  return lang === 'en' ? pathFor(urlSlug) : `/${lang}${pathFor(urlSlug)}`
}

/**
 * Returns null when `urlSlug` is not a hands-on test, or the test has no `lang` version,
 * so the caller falls through to the article builders (which 404 an unknown slug).
 */
export function buildHandsOnTestMetadata(urlSlug: string, lang: Language = 'en'): Metadata | null {
  const appSlug = appSlugFromHandsOnUrlSlug(urlSlug)
  const test = appSlug ? getHandsOnTest(appSlug, lang) : null
  if (!appSlug || !test) return null
  const url = `${BASE}${localizedPath(urlSlug, lang)}`
  const title = plain(test.seo.title)
  const description = plain(test.seo.description)
  return {
    title,
    description,
    // Hands-on tests are always indexable; scripts/validate-hands-on-tests.mjs rejects an 'index' field.
    robots: { index: true, follow: true },
    alternates: generateAlternates(pathFor(urlSlug), lang, true, [...handsOnTestLangs(appSlug)]),
    openGraph: { title, description, url, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'article', siteName: 'PromptQuorum' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function buildHandsOnTestPageElement(urlSlug: string, lang: Language = 'en') {
  const appSlug = appSlugFromHandsOnUrlSlug(urlSlug)
  const test = appSlug ? getHandsOnTest(appSlug, lang) : null
  if (!test || !appSlug) return null

  const prefix = lang === 'en' ? '' : `/${lang}`
  const url = `${BASE}${localizedPath(urlSlug, lang)}`
  const hero = test.images.find((i) => i.role === 'hero')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        url,
        headline: plain(test.title),
        description: plain(test.seo.description),
        inLanguage: toOutputLocale(lang),
        datePublished: test.published,
        dateModified: test.published,
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: BASE },
        about: { '@id': `${url}#app` },
        ...(hero && { image: buildImageObject(`/images/${hero.file}`, { caption: plain(hero.caption) }) }),
        associatedMedia: test.images.map((i) => buildImageObject(`/images/${i.file}`, { caption: plain(i.caption) })),
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}#app`,
        name: test.app.name,
        applicationCategory: /image/i.test(test.app.category) ? 'MultimediaApplication' : 'UtilitiesApplication',
        ...(/macos/i.test(test.app.platform) && { operatingSystem: 'macOS' }),
        // A vendor that was not recorded must not be published as an organisation name.
        ...(!/^not recorded/i.test(test.app.vendor) && { publisher: { '@type': 'Organization', name: test.app.vendor } }),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: toOutputLocale(lang),
        mainEntity: test.faq.map(([q, a]) => ({
          '@type': 'Question',
          name: plain(q),
          acceptedAnswer: { '@type': 'Answer', text: plain(a) },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: plain(test.ui.crumb_home), item: prefix ? `${BASE}${prefix}` : BASE },
          { '@type': 'ListItem', position: 2, name: plain(test.ui.crumb_directory), item: `${BASE}${prefix}/directory` },
          { '@type': 'ListItem', position: 3, name: plain(test.ui.crumb_test.replace('{app}', test.app.name)), item: url },
        ],
      },
    ],
  }

  return (
    <>
      <main dir={getLangDir(lang)} lang={toOutputLocale(lang)} className="min-h-screen bg-surface pb-20 pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <LangLinksBar cluster="power-local-llm" slug={urlSlug} availableLangs={[...handsOnTestLangs(appSlug)]} initialLang={lang} />
          <HandsOnTestView test={test} lang={lang} />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
