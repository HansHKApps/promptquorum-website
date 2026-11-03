// Ask Hans usage report on /askhans: the same windows as the MCP usage table (today, yesterday, 7 days, 30 days,
// all time) plus what was asked and researched (topics, apps, directory categories, tools, languages).
// Data: src/lib/askhans/report.ts. Plain server component, no chart library.

import type { Language } from '@/lib/blog/blogContent'
import { toOutputLocale } from '@/lib/i18n/constants'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import { ASK_HANS_CATEGORIES } from '@/lib/askhans/categories'
import type { AskHansReport, ReportRow, ReportWindow } from '@/lib/askhans/report'
import { HUB_TONES } from '@/components/hub-template/palette'
import { t as tMcp } from './mcp-stats-i18n'
import { tAsk, type AskUiKey } from './ask-hans-block-i18n'

const APP_NAME = new Map(localAiApps.map((a) => [a.slug, a.name]))
const TOPIC_LABEL = new Map(ASK_HANS_CATEGORIES.map((c) => [c.key, c]))

const WINDOWS: { key: ReportWindow; label: (lang: Language) => string }[] = [
  { key: 'today', label: (l) => tAsk('colToday', l) },
  { key: 'yesterday', label: (l) => tAsk('colYesterday', l) },
  { key: 'last7', label: (l) => tMcp('tableLast7', l) },
  { key: 'last30', label: (l) => tMcp('tableLast30', l) },
]

function Bars({ days, label }: { days: AskHansReport['days']; label: string }) {
  const max = Math.max(1, ...days.map((d) => d.answers))
  const barW = 10
  const gap = 4
  const height = 96
  const width = days.length * (barW + gap) - gap
  return (
    <svg role="img" aria-label={label} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="h-28 w-full text-hub-violet">
      {days.map((d, i) => {
        const h = d.answers === 0 ? 1 : Math.max(2, (d.answers / max) * height)
        return (
          <rect key={d.date} x={i * (barW + gap)} y={height - h} width={barW} height={h} rx={1} fill="currentColor" opacity={d.answers === 0 ? 0.25 : 0.85}>
            <title>{`${d.date}: ${d.answers.toLocaleString()}`}</title>
          </rect>
        )
      })}
    </svg>
  )
}

function BreakdownTable({ heading, firstCol, rows, label, mono, lang }: { heading: string; firstCol: string; rows: ReportRow[]; label: (key: string) => string; mono?: boolean; lang: Language }) {
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const tone = HUB_TONES.violet
  return (
    <div className={`min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
      <h3 className="px-4 pb-1 pt-4 text-[15px] font-bold">{heading}</h3>
      {rows.length === 0 ? (
        <p className="px-4 pb-4 pt-1 text-sm text-text-muted">{tAsk('noData', lang)}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className={`${tone.tint} ${tone.ink}`}>
                <th scope="col" className="px-4 py-2 text-start font-bold">{firstCol}</th>
                {WINDOWS.map((w) => (
                  <th key={w.key} scope="col" className="px-3 py-2 text-end font-bold">{w.label(lang)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="border-t border-border">
                  <td dir={mono ? 'ltr' : undefined} className={`px-4 py-2 text-start ${mono ? 'font-mono text-xs font-semibold' : ''}`}>{label(r.key)}</td>
                  {WINDOWS.map((w) => (
                    <td key={w.key} className={`px-3 py-2 text-end tabular-nums ${r.counts[w.key] === 0 ? 'text-text-muted' : 'text-text-primary'}`}>{fmt(r.counts[w.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export function AskHansReport({ lang, report }: { lang: Language; report: AskHansReport }) {
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const tone = HUB_TONES.violet
  const rows: { label: AskUiKey; win: Record<ReportWindow, number>; all: number }[] = [
    { label: 'statAnswers', win: report.windows.answers, all: report.totals.answers },
    { label: 'statOpens', win: report.windows.opens, all: report.totals.opens },
  ]
  const topicLabel = (key: string) => {
    const c = TOPIC_LABEL.get(key)
    return c ? (lang === 'de' ? c.label_de : c.label_en) : key
  }

  return (
    <div className="mt-10">
      <h3 id="ask-hans-report-heading" className="text-2xl font-bold tracking-tight">{tAsk('reportHeading', lang)}</h3>
      <p className="mb-5 mt-1.5 max-w-[720px] text-sm leading-relaxed text-text-secondary">{tAsk('reportIntro', lang)}</p>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className={`min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className={`${tone.tint} ${tone.ink}`}>
                  <th scope="col" className="px-4 py-2.5"><span className="sr-only">{tAsk('reportHeading', lang)}</span></th>
                  {WINDOWS.map((w) => (
                    <th key={w.key} scope="col" className="px-3 py-2.5 text-end font-bold">{w.label(lang)}</th>
                  ))}
                  <th scope="col" className="px-3 py-2.5 text-end font-bold">{tAsk('colAllTime', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-border">
                    <th scope="row" className="px-4 py-3 text-start font-semibold">{tAsk(r.label, lang)}</th>
                    {WINDOWS.map((w) => (
                      <td key={w.key} className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.win[w.key])}</td>
                    ))}
                    <td className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.all)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-border px-4 py-2.5 text-xs text-text-secondary">
            {tAsk('sampleLabel', lang)}: <span dir="ltr" className="font-semibold tabular-nums">{fmt(report.sampled.last30)} / {fmt(report.sampledOf.last30)}</span> ({tMcp('tableLast30', lang)})
          </p>
        </div>

        <div className={`min-w-0 rounded-[14px] border bg-white p-4 ${tone.edge}`}>
          <Bars days={report.days} label={tAsk('chartLabel', lang)} />
          <div dir="ltr" className="mt-1 flex justify-between text-xs text-text-muted">
            <span>{report.days[0]?.date}</span>
            <span>{report.days[report.days.length - 1]?.date}</span>
          </div>
          <div className="mt-2 text-xs font-medium text-text-secondary">{tAsk('chartLabel', lang)}</div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <BreakdownTable heading={tAsk('topicsHeading', lang)} firstCol={tAsk('topicsHeading', lang)} rows={report.categories} label={topicLabel} lang={lang} />
        <BreakdownTable heading={tAsk('appsHeading', lang)} firstCol={tAsk('appsHeading', lang)} rows={report.apps} label={(k) => APP_NAME.get(k) ?? k} lang={lang} />
        <BreakdownTable
          heading={tAsk('dirCatsHeading', lang)}
          firstCol={tAsk('dirCatsHeading', lang)}
          rows={report.dirCats}
          label={(k) => CATEGORY_SUB_LABEL[k as CategorySubKey]?.[lang] ?? k}
          lang={lang}
        />
        <BreakdownTable heading={tAsk('toolsHeading', lang)} firstCol={tAsk('toolsHeading', lang)} rows={report.tools} label={(k) => k} mono lang={lang} />
        <BreakdownTable heading={tAsk('langsHeading', lang)} firstCol={tAsk('langsHeading', lang)} rows={report.langs} label={(k) => k.toUpperCase()} mono lang={lang} />
      </div>
      <p className="mt-4 max-w-[720px] text-xs leading-relaxed text-text-secondary">{tAsk('breakdownNote', lang)}</p>
    </div>
  )
}
