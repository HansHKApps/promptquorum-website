// "Ask Hans" block at the top of /mcp-stats (all 9 locales): what it is, how it relates to the MCP tools, a button
// to open it, and its aggregated usage totals. Shown only while Ask Hans is switched on (ASK_HANS_ENABLED).
// Later this moves to its own Ask Hans page with a statistics page; the totals come from src/lib/askhans/totals.ts.

import type { Language } from '@/lib/blog/blogContent'
import { toOutputLocale } from '@/lib/i18n/constants'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { getAskHansTotals } from '@/lib/askhans/totals'
import { HUB_TONES } from '@/components/hub-template/palette'
import { AskHansOpenButton } from './AskHansOpenButton'
import { tAsk } from './ask-hans-block-i18n'

export async function AskHansBlock({ lang }: { lang: Language }) {
  if (process.env.ASK_HANS_ENABLED !== 'true') return null
  const totals = await getAskHansTotals()
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const points = [tAsk('point1', lang), tAsk('point2', lang), tAsk('point3', lang)]
  const tone = HUB_TONES.violet

  return (
    <section id="ask-hans" aria-labelledby="ask-hans-heading" className={`border-b ${tone.tint} ${tone.edge}`}>
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-stretch gap-8">
          <div className="min-w-0 flex-[1_1_520px]">
            <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${tone.solidBorder} ${tone.ink}`}>{tAsk('eyebrow', lang)}</span>
            <h2 id="ask-hans-heading" className="mb-3 mt-3.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{tAsk('title', lang)}</h2>
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
  )
}
