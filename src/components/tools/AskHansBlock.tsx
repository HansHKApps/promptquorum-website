// Ask Hans page body (/askhans, all 9 locales): what it is, a button to open it, its aggregated usage totals and
// the usage report. Shown only while Ask Hans is switched on (ASK_HANS_ENABLED). Totals come from
// src/lib/askhans/totals.ts, the report from src/lib/askhans/report.ts.

import type { Language } from '@/lib/blog/blogContent'
import { toOutputLocale } from '@/lib/i18n/constants'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { getAskHansTotals } from '@/lib/askhans/totals'
import { getAskHansReport } from '@/lib/askhans/report'
import { HUB_TONES } from '@/components/hub-template/palette'
import { AskHansOpenButton } from './AskHansOpenButton'
import { AskHansReport } from './AskHansReport'
import { AppLink as Link } from '@/components/AppLink'
import { t as tTools } from './tools-i18n'
import { tAsk } from './ask-hans-block-i18n'
import { AskHansDocs } from './AskHansDocs'

export async function AskHansBlock({ lang }: { lang: Language }) {
  if (process.env.ASK_HANS_ENABLED !== 'true') return null
  const [totals, report] = await Promise.all([getAskHansTotals(), getAskHansReport()])
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const points = [tAsk('point1', lang), tAsk('point2', lang), tAsk('point3', lang)]
  const tone = HUB_TONES.violet
  const homeHref = lang === 'en' ? '/' : `/${lang}`

  return (
    <>
    <section id="ask-hans" aria-labelledby="ask-hans-heading" className={`border-b ${tone.tint} ${tone.edge}`}>
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-12 pt-24 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">
          <Link href={homeHref} className="hover:underline">{tTools('breadcrumbHome', lang)}</Link>
          <span aria-hidden="true"> &nbsp;/&nbsp; </span>
          <span aria-current="page">{tAsk('eyebrow', lang)}</span>
        </nav>
        <div className="flex flex-wrap items-stretch gap-8">
          <div className="min-w-0 flex-[1_1_520px]">
            <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${tone.solidBorder} ${tone.ink}`}>{tAsk('eyebrow', lang)}</span>
            <h1 id="ask-hans-heading" className="mb-3 mt-3.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{tAsk('title', lang)}</h1>
            <p className="mb-4 max-w-[640px] text-base leading-relaxed text-text-primary">{tAsk('body', lang)}</p>
            <ul className="mb-5 max-w-[640px] list-disc space-y-1.5 ps-5 text-base leading-relaxed text-text-primary">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <AskHansOpenButton
                label={tAsk('open', lang)}
                className={`rounded-[10px] px-6 py-3.5 text-[17px] font-extrabold text-white transition-transform hover:-translate-y-0.5 ${tone.solid}`}
              />
              <span className="text-[13px] text-text-secondary">{tAsk('devNote', lang)}</span>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_320px]">
            <div className={`box-border rounded-2xl border bg-white p-5 lg:self-start ${tone.edge}`}>
              <div className="mb-3.5 text-[13px] font-bold">{tAsk('statsHeading', lang)}</div>
              <dl className="grid grid-cols-2 gap-3">
                <div>
                  <dd className="text-3xl font-extrabold tabular-nums">{fmt(totals.answers)}</dd>
                  <dt className="text-xs font-medium text-text-secondary">{tAsk('statAnswers', lang)}</dt>
                </div>
                <div>
                  <dd className="text-3xl font-extrabold tabular-nums">{fmt(totals.opens)}</dd>
                  <dt className="text-xs font-medium text-text-secondary">{tAsk('statOpens', lang)}</dt>
                </div>
              </dl>
              <p className="mt-3.5 text-xs font-medium text-text-secondary">
                {totals.since ? `${tAsk('since', lang)} ${formatDisplayDate(totals.since, lang)}. ` : ''}
                {tAsk('statsNote', lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AskHansDocs lang={lang} />
    <section id="usage" className="scroll-mt-20 border-t border-border bg-hub-cyan-tint">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
        <AskHansReport lang={lang} report={report} />
      </div>
    </section>
    </>
  )
}
