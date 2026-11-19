// PromptQuorum Academy — server-rendered page shared by all 9 locale routes (/academy, /de/academy, …).
// Same pattern as /askhans: one tiny page.tsx per locale calls these two functions. 404 while ACADEMY_ENABLED is off.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ACADEMY_PATH, academyEnabled } from '@/lib/academy/config'
import { buildAcademyTopics } from '@/lib/academy/topics'
import type { AcademyLang } from '@/lib/academy/types'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, getLangDir, ogLocale, toOutputLocale } from '@/lib/i18n/constants'
import { t as tTools } from '@/components/tools/tools-i18n'
import { AcademyApp } from './AcademyApp'
import { ACADEMY_COPY } from './copy'

const SITE = 'https://www.promptquorum.com'
const localizedPath = (lang: AcademyLang) => (lang === 'en' ? ACADEMY_PATH : `/${lang}${ACADEMY_PATH}`)

export function academyMetadata(lang: AcademyLang): Metadata {
  const tx = ACADEMY_COPY[lang]
  return {
    title: tx.metaTitle,
    description: tx.metaDescription,
    alternates: generateAlternates(ACADEMY_PATH, lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: { title: tx.metaTitle, description: tx.metaDescription, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'website', siteName: 'PromptQuorum', ...ogLocale(lang) },
    twitter: { card: 'summary_large_image', title: tx.metaTitle, description: tx.metaDescription, images: ['/og-image.png'] },
  }
}

export function AcademyPage({ lang }: { lang: AcademyLang }) {
  if (!academyEnabled()) notFound()
  const tx = ACADEMY_COPY[lang]
  const url = `${SITE}${localizedPath(lang)}`
  const topics = buildAcademyTopics(lang, tx.hubs)

  return (
    <div lang={toOutputLocale(lang)} dir={getLangDir(lang)} className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-8">
        <section aria-labelledby="academy-h1" className="min-w-0">
          <h1 id="academy-h1" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {tx.h1}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{tx.intro}</p>
          <div className="mt-6">
            <AcademyApp lang={lang} topics={topics} />
          </div>
        </section>
        <aside aria-labelledby="academy-how" className="min-w-0 self-start rounded-2xl border border-purple-100 bg-white p-5">
          <h2 id="academy-how" className="font-semibold text-gray-900">
            {tx.howTitle}
          </h2>
          <ol className="mt-3 space-y-3">
            {tx.steps.map((s, i) => (
              <li key={s.name} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">{i + 1}</span>
                <span className="text-sm">
                  <span className="font-medium text-gray-900">{s.name}.</span> <span className="text-gray-600">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-gray-500">{tx.disclaimer}</p>
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': url,
                url,
                name: tx.metaTitle,
                description: tx.metaDescription,
                inLanguage: toOutputLocale(lang),
                isPartOf: { '@type': 'WebSite', url: SITE },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: tTools('breadcrumbHome', lang), item: SITE },
                  { '@type': 'ListItem', position: 2, name: tx.h1, item: url },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  )
}
