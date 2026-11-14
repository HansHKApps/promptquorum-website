import { Fragment } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { PARTNERS_EMAIL, partnersContent } from '@/lib/partners/content'
import { MESSAGE_TIERS } from '@/lib/partners/stats-config'
import { getUmamiStat } from '@/lib/partners/umami'
import { getGscCountries, getGscStat } from '@/lib/partners/gsc'
import { alpha3ToAlpha2, hasFlag } from '@/lib/partners/countries'

const SITE = 'https://www.promptquorum.com'
const LINK = 'text-purple-600 hover:underline'

// Gregorian calendar and Latin digits are forced so the shown date matches the Umami / GSC UI
// (the default ar-SA locale would print a Hijri date).
const INTL_LOCALE: Record<Language, string> = {
  en: 'en-US-u-ca-gregory',
  de: 'de-DE-u-ca-gregory',
  fr: 'fr-FR-u-ca-gregory',
  ja: 'ja-JP-u-ca-gregory',
  zh: 'zh-CN-u-ca-gregory',
  es: 'es-ES-u-ca-gregory',
  pt: 'pt-BR-u-ca-gregory',
  ar: 'ar-u-ca-gregory-nu-latn',
  ko: 'ko-KR-u-ca-gregory',
}

function langPrefix(lang: Language): string {
  return lang === 'en' ? '' : `/${lang}`
}

function formatDay(iso: string, lang: Language): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(INTL_LOCALE[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatWindowEnd(iso: string, lang: Language): string {
  const d = new Date(iso)
  const date = d.toLocaleDateString(INTL_LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
  const time = d.toLocaleTimeString(INTL_LOCALE[lang], { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' })
  return `${date}, ${time}`
}

function withEmail(text: string) {
  return text.split('{email}').map((part, i, arr) => (
    <Fragment key={i}>
      {part}
      {i < arr.length - 1 && (
        <a href={`mailto:${PARTNERS_EMAIL}`} className={LINK}>
          {PARTNERS_EMAIL}
        </a>
      )}
    </Fragment>
  ))
}

function Counter({ value, label, detail, dir }: { value: string; label: string; detail: string | null; dir: 'ltr' | 'rtl' }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 min-h-[9rem]" dir={dir}>
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-gray-900 tabular-nums" dir="ltr" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
        {value}
      </p>
      {detail && <p className="mt-2 text-xs text-gray-500">{detail}</p>}
    </div>
  )
}

export async function PartnersPage({ lang }: { lang: Language }) {
  const c = partnersContent[lang]
  const prefix = langPrefix(lang)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const numLocale = INTL_LOCALE[lang]

  const [umami, gsc, countries] = await Promise.all([getUmamiStat(), getGscStat(), getGscCountries()])

  const tier = [...MESSAGE_TIERS].sort((a, b) => b.minViews - a.minViews).find(t => (umami?.pageviews ?? 0) >= t.minViews)
  const message = c.stats.messages[tier?.key ?? 'neutral']
  // A counter whose API failed is hidden silently (never shown as 0); no data at all hides the section.
  const hasData = Boolean(umami || gsc)

  // Country list: names come from the browser/Node locale data, flags from /public/flags.
  const regionNames = new Intl.DisplayNames([INTL_LOCALE[lang]], { type: 'region' })
  const pct = new Intl.NumberFormat(INTL_LOCALE[lang], { style: 'percent', maximumFractionDigits: 1 })
  const countryRows = (countries?.rows ?? []).map(r => {
    const code2 = alpha3ToAlpha2(r.code3)
    let name = r.code3.toUpperCase()
    try {
      if (code2) name = regionNames.of(code2.toUpperCase()) ?? name
    } catch {
      /* keep the code */
    }
    return { ...r, code2, name, flag: code2 && hasFlag(code2) ? code2 : null }
  })
  const maxClicks = Math.max(1, ...countryRows.map(r => r.clicks))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.home, item: `${SITE}${prefix || '/'}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `${SITE}${prefix}/partners` },
    ],
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-24" dir={dir}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-gray-400 mb-4">
            <a href={prefix || '/'} className="hover:text-purple-600 transition-colors">{c.home}</a>
            <span className="mx-2">/</span>
            <span>{c.breadcrumb}</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-900">{c.h1}</h1>
          <p className="mt-2 text-sm text-gray-500">{c.subtitle}</p>
        </div>

        <div className="space-y-12 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">{c.partners.heading}</h2>
            <p>{c.partners.intro}</p>
            <p className="mt-3">{withEmail(c.partners.contact)}</p>

            <div className="mt-5 rounded-lg border-2 border-amber-400 bg-amber-50 p-5" role="note">
              <h3 className="text-sm font-semibold text-amber-900">{c.partners.disclaimerTitle}</h3>
              <p className="mt-1 font-medium text-amber-900">{c.partners.disclaimer}</p>
            </div>

            <h3 className="mt-6 text-sm font-semibold text-gray-900">{c.partners.openHeading}</h3>
            <ul className="mt-2 list-disc ps-5 space-y-1">
              {c.partners.open.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">{c.advertising.heading}</h2>
            <p>{withEmail(c.advertising.text)}</p>
          </section>

          {hasData && (
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">{c.stats.heading}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {umami && (
                  <Counter
                    dir={dir}
                    label={c.stats.viewsLabel}
                    value={umami.pageviews.toLocaleString(numLocale)}
                    detail={c.stats.viewsWindow.replace('{hours}', String(umami.windowHours)).replace('{end}', formatWindowEnd(umami.windowEnd, lang))}
                  />
                )}
                {gsc && (
                  <Counter
                    dir={dir}
                    label={c.stats.gscLabel.replace('{date}', formatDay(gsc.date, lang))}
                    value={gsc.clicks.toLocaleString(numLocale)}
                    detail={null}
                  />
                )}
              </div>
              <p className="mt-4">{message}</p>

              {countries && countryRows.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-900">{c.stats.countries.heading}</h3>
                  <ol className="mt-3 space-y-1.5">
                    {countryRows.map(r => (
                      <li key={r.code3} className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-center gap-x-3">
                        {r.flag ? (
                          <img src={`/flags/${r.flag}.svg`} width={24} height={18} alt="" loading="lazy" className="h-[18px] w-6 rounded-[2px] border border-gray-200 object-cover" />
                        ) : (
                          <span aria-hidden="true" className="h-[18px] w-6" />
                        )}
                        <span className="relative min-w-0">
                          <span aria-hidden="true" className="absolute inset-y-0 start-0 rounded-sm bg-purple-100" style={{ width: `${Math.max(2, (r.clicks / maxClicks) * 100)}%` }} />
                          <span className="relative block truncate px-2 py-0.5">{r.name}</span>
                        </span>
                        <span className="tabular-nums text-xs text-gray-600" dir="ltr">
                          {r.clicks.toLocaleString(numLocale)} · {pct.format(r.clicks / countries.total)}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-xs text-gray-500">
                    {c.stats.countries.note
                      .replace('{n}', String(countryRows.length))
                      .replace('{from}', formatDay(countries.from, lang))
                      .replace('{to}', formatDay(countries.to, lang))}
                  </p>
                </div>
              )}
              <p className="mt-3 text-xs text-gray-500">
                {c.stats.source}. {c.stats.gscNote}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
