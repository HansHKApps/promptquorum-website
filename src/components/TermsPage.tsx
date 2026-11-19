// Terms of Use — one server page shared by the 9 locale routes (/terms, /de/terms, …). Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, getLangDir, ogLocale, toOutputLocale, type Lang } from '@/lib/i18n/constants'
import { TERMS, TERMS_UPDATED } from '@/lib/terms/content'

const SITE = 'https://www.promptquorum.com'
const path = (lang: Lang) => (lang === 'en' ? '/terms' : `/${lang}/terms`)

export function termsMetadata(lang: Lang): Metadata {
  const t = TERMS[lang]
  return {
    title: `${t.title} | PromptQuorum`,
    description: t.metaDescription,
    alternates: generateAlternates('/terms', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: { title: t.title, description: t.metaDescription, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'website', siteName: 'PromptQuorum', ...ogLocale(lang) },
    twitter: { card: 'summary_large_image', title: t.title, description: t.metaDescription },
  }
}

export function TermsPage({ lang }: { lang: Lang }) {
  const t = TERMS[lang]
  const prefix = lang === 'en' ? '' : `/${lang}`
  const url = `${SITE}${path(lang)}`
  return (
    <div lang={toOutputLocale(lang)} dir={getLangDir(lang)} className="min-h-screen bg-white pt-28 pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="mt-2 text-sm text-gray-500">
            {t.updatedLabel}: {formatDisplayDate(TERMS_UPDATED, lang)}
          </p>
          <p className="mt-4 text-gray-700">{t.intro}</p>
        </div>
        <div className="space-y-8 text-sm leading-relaxed text-gray-700">
          {t.sections.map((s, i) => (
            <section key={s.h}>
              <h2 className="mb-2 text-base font-semibold text-gray-900">
                {i + 1}. {s.h}
              </h2>
              <p>{s.p}</p>
            </section>
          ))}
          <p>
            <a href={`${prefix}/privacy`} className="text-purple-700 underline underline-offset-2">
              {t.links.privacy}
            </a>
            {' · '}
            <a href="/impressum" className="text-purple-700 underline underline-offset-2">
              {t.links.impressum}
            </a>
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'WebPage', '@id': url, url, name: t.title, description: t.metaDescription, inLanguage: toOutputLocale(lang), dateModified: TERMS_UPDATED, isPartOf: { '@type': 'WebSite', url: SITE } },
              { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'PromptQuorum', item: SITE }, { '@type': 'ListItem', position: 2, name: t.title, item: url }] },
            ],
          }),
        }}
      />
    </div>
  )
}
