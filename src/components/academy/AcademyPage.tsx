// PromptQuorum Academy — server-rendered page shared by all 9 locale routes (/academy, /de/academy, …).
// Same pattern as /askhans: one tiny page.tsx per locale calls these two functions. 404 while ACADEMY_ENABLED is off.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ACADEMY_PATH, academyEnabled } from '@/lib/academy/config'
import type { AcademyLang } from '@/lib/academy/types'
import { generateAlternates } from '@/lib/hreflang'
import { AppLink as Link } from '@/components/AppLink'
import { HUB_TONES } from '@/components/hub-template/palette'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { PATH_PREFIX_LANGS, getLangDir, ogLocale, toOutputLocale } from '@/lib/i18n/constants'
import { t as tTools } from '@/components/tools/tools-i18n'
import { getAcademyTotals } from '@/lib/academy/usage'
import { TERMS } from '@/lib/terms/content'
import { OpenAcademyButton } from './OpenAcademyButton'
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

export async function AcademyPage({ lang }: { lang: AcademyLang }) {
  if (!academyEnabled()) notFound()
  const tx = ACADEMY_COPY[lang]
  const url = `${SITE}${localizedPath(lang)}`
  const totals = await getAcademyTotals()
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const tone = HUB_TONES.violet
  const homeHref = lang === 'en' ? '/' : `/${lang}`
  const prefix = lang === 'en' ? '' : `/${lang}`
  const stats: [string, number][] = [
    [tx.statProgrammes, totals.programmes],
    [tx.statLessons, totals.lessons],
    [tx.statTests, totals.tests],
    [tx.statCertificates, totals.certificates],
    [tx.reg.statRegistered, totals.certificatesRegistered],
  ]

  // Same structure as the Ask Hans page (AskHansBlock): hero with explanation + open button next to a card of
  // anonymous counters, then the "how it works" section. The tool itself is the window (AcademyRoot).
  return (
    <div lang={toOutputLocale(lang)} dir={getLangDir(lang)} className="min-h-screen bg-white text-text-primary">
      <section id="academy" aria-labelledby="academy-h1" className={`border-b ${tone.tint} ${tone.edge}`}>
        <div className="mx-auto w-full max-w-[1180px] px-5 pb-12 pt-24 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">
            <Link href={homeHref} className="hover:underline">
              {tTools('breadcrumbHome', lang)}
            </Link>
            <span aria-hidden="true"> &nbsp;/&nbsp; </span>
            <span aria-current="page">Academy</span>
          </nav>
          <div className="flex flex-wrap items-stretch gap-8">
            <div className="min-w-0 flex-[1_1_520px]">
              <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${tone.solidBorder} ${tone.ink}`}>Academy</span>
              <h1 id="academy-h1" className="mb-3 mt-3.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {tx.h1}
              </h1>
              <p className="mb-4 max-w-[640px] text-base leading-relaxed text-text-primary">{tx.intro}</p>
              <ul className="mb-5 max-w-[640px] list-disc space-y-1.5 ps-5 text-base leading-relaxed text-text-primary">
                {tx.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <OpenAcademyButton label={tx.openAcademy} className={`rounded-[10px] px-6 py-3.5 text-[17px] font-extrabold text-white transition-transform hover:-translate-y-0.5 ${tone.solid}`} />
                <span className="text-[13px] text-text-secondary">{tx.ageNotice}</span>
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_320px]">
              <div className={`box-border rounded-2xl border bg-white p-5 lg:self-start ${tone.edge}`}>
                <div className="mb-3.5 text-[13px] font-bold">{tx.statsHeading}</div>
                <dl className="grid grid-cols-2 gap-3">
                  {stats.map(([label, n]) => (
                    <div key={label}>
                      <dd className="text-3xl font-extrabold tabular-nums">{fmt(n)}</dd>
                      <dt className="text-xs font-medium text-text-secondary">{label}</dt>
                    </div>
                  ))}
                </dl>
                <p className="mt-3.5 text-xs font-medium text-text-secondary">
                  {totals.since ? `${tx.statsSince} ${formatDisplayDate(totals.since, lang)}. ` : ''}
                  {tx.statsNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="academy-how" className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
        <h2 id="academy-how" className="text-2xl font-bold tracking-tight">
          {tx.howTitle}
        </h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tx.steps.map((s, i) => (
            <li key={s.name} className={`flex gap-3 rounded-2xl border bg-white p-4 ${tone.edge}`}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">{i + 1}</span>
              <span className="text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">{s.name}.</span> <span className="text-gray-700">{s.text}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-[760px] text-sm text-text-secondary">{tx.disclaimer}</p>
        <p className="mt-2 text-sm text-text-secondary">
          <Link href={`${prefix}/terms`} className="underline underline-offset-2">
            {TERMS[lang].title}
          </Link>
          {' · '}
          <Link href={`${prefix}/privacy`} className="underline underline-offset-2">
            {TERMS[lang].links.privacy}
          </Link>
        </p>
      </section>
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
