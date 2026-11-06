// Shared usage report for /askhans and /mcp-stats: headline counters (today, yesterday, 7 days, 30 days, all time),
// a 30-day chart and breakdown tables (topics, apps, directory categories, tools, languages) over the same windows.
// Data: src/lib/askhans/report.ts and src/lib/mcp/report.ts (same shape, src/lib/usage/report-types.ts).
// Plain server component, no chart library.

import type { Language } from '@/lib/blog/blogContent'
import { toOutputLocale } from '@/lib/i18n/constants'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import { ASK_HANS_CATEGORIES } from '@/lib/askhans/categories'
import type { EngagementStats, FeedbackStats, ReportRow, ReportWindow, UsageReportBase } from '@/lib/usage/report-types'
import { DURATION_BUCKETS, DURATION_MIDPOINT_S, type DurationBucket } from '@/lib/askhans/engagement'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
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

function Bars({ days, label, barTone }: { days: UsageReportBase['days']; label: string; barTone: string }) {
  const max = Math.max(1, ...days.map((d) => d.count))
  const barW = 10
  const gap = 4
  const height = 96
  const width = days.length * (barW + gap) - gap
  return (
    <svg role="img" aria-label={label} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className={`h-28 w-full ${barTone}`}>
      {days.map((d, i) => {
        const h = d.count === 0 ? 1 : Math.max(2, (d.count / max) * height)
        return (
          <rect key={d.date} x={i * (barW + gap)} y={height - h} width={barW} height={h} rx={1} fill="currentColor" opacity={d.count === 0 ? 0.25 : 0.85}>
            <title>{`${d.date}: ${d.count.toLocaleString()}`}</title>
          </rect>
        )
      })}
    </svg>
  )
}

function BreakdownTable({ heading, firstCol, rows, label, mono, lang }: { heading: string; firstCol: string; rows: ReportRow[]; label: (key: string) => string; mono?: boolean; lang: Language }) {
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const tone = HUB_TONES.violet
  const showAll = rows.some((r) => r.allTime !== undefined)
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
                {showAll && <th scope="col" className="px-3 py-2 text-end font-bold">{tAsk('colAllTime', lang)}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="border-t border-border">
                  <td dir={mono ? 'ltr' : undefined} className={`px-4 py-2 text-start ${mono ? 'font-mono text-xs font-semibold' : ''}`}>{label(r.key)}</td>
                  {WINDOWS.map((w) => (
                    <td key={w.key} className={`px-3 py-2 text-end tabular-nums ${r.counts[w.key] === 0 ? 'text-text-muted' : 'text-text-primary'}`}>{fmt(r.counts[w.key])}</td>
                  ))}
                  {showAll && <td className={`px-3 py-2 text-end tabular-nums ${r.allTime ? 'text-text-primary' : 'text-text-muted'}`}>{fmt(r.allTime ?? 0)}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function RatingsCard({ feedback, lang }: { feedback: FeedbackStats; lang: Language }) {
  const loc = toOutputLocale(lang)
  const fmt = (n: number) => n.toLocaleString(loc)
  const avg = (sum: number, count: number) => (count ? (sum / count).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '–')
  const tone = HUB_TONES.violet
  const rows: { label: string; win: (w: ReportWindow) => string; all: string }[] = [
    { label: tAsk('ratingCount', lang), win: (w) => fmt(feedback.count[w]), all: fmt(feedback.all.count) },
    { label: tAsk('ratingAvg', lang), win: (w) => avg(feedback.sum[w], feedback.count[w]), all: avg(feedback.all.sum, feedback.all.count) },
    { label: tAsk('ratingLow', lang), win: (w) => fmt(feedback.low[w]), all: fmt(feedback.all.low) },
    { label: tAsk('ratingMail', lang), win: (w) => fmt(feedback.mail[w]), all: fmt(feedback.all.mail) },
  ]
  return (
    <div className={`mt-4 min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
      <h3 className="px-4 pb-1 pt-4 text-[15px] font-bold">{tAsk('ratingHeading', lang)}</h3>
      {feedback.all.count === 0 ? (
        <p className="px-4 pb-4 pt-1 text-sm text-text-muted">{tAsk('ratingNone', lang)}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className={`${tone.tint} ${tone.ink}`}>
                <th scope="col" className="px-4 py-2"><span className="sr-only">{tAsk('ratingHeading', lang)}</span></th>
                {WINDOWS.map((w) => (
                  <th key={w.key} scope="col" className="px-3 py-2 text-end font-bold">{w.label(lang)}</th>
                ))}
                <th scope="col" className="px-3 py-2 text-end font-bold">{tAsk('colAllTime', lang)}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="px-4 py-2 text-start font-semibold">{r.label}</th>
                  {WINDOWS.map((w) => (
                    <td key={w.key} className="px-3 py-2 text-end tabular-nums">{r.win(w.key)}</td>
                  ))}
                  <td className="px-3 py-2 text-end font-bold tabular-nums">{r.all}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-text-secondary">{tAsk('ratingNote', lang)}</p>
    </div>
  )
}

const DURATION_LABEL: Record<DurationBucket, AskUiKey> = { lt30: 'engDurLt30', '30-120': 'engDur30', '120-300': 'engDur120', '300-900': 'engDur300', gt900: 'engDurGt900' }

/** Ask Hans engagement: uses, share of return visits, average time and the time distribution (consent "Yes" only). */
function EngagementCard({ engagement, lang }: { engagement: EngagementStats; lang: Language }) {
  const loc = toOutputLocale(lang)
  const fmt = (n: number) => n.toLocaleString(loc)
  const tone = HUB_TONES.violet
  const pct = (part: number, whole: number) => (whole ? `${Math.round((part * 100) / whole).toLocaleString(loc)} %` : '–')
  const avg = (w: ReportWindow) => {
    const total = engagement.sessions[w]
    if (!total) return '–'
    const secs = DURATION_BUCKETS.reduce((n, b) => n + engagement.duration[b][w] * DURATION_MIDPOINT_S[b], 0) / total
    const m = Math.floor(secs / 60)
    const sec = Math.round(secs % 60)
    return `${m.toLocaleString(loc)}:${String(sec).padStart(2, '0')}`
  }
  const rows: { label: string; win: (w: ReportWindow) => string }[] = [
    { label: tAsk('engSessions', lang), win: (w) => fmt(engagement.sessions[w]) },
    { label: tAsk('engReturning', lang), win: (w) => fmt(engagement.returning[w]) },
    { label: tAsk('engReturningShare', lang), win: (w) => pct(engagement.returning[w], engagement.sessions[w]) },
    { label: tAsk('engAvg', lang), win: avg },
    { label: tAsk('engPromo', lang), win: (w) => fmt(engagement.promoShown[w]) },
    ...DURATION_BUCKETS.map((b) => ({ label: `${tAsk('engDurHeading', lang)}: ${tAsk(DURATION_LABEL[b], lang)}`, win: (w: ReportWindow) => fmt(engagement.duration[b][w]) })),
  ]
  return (
    <div className={`mt-4 min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
      <h3 className="px-4 pb-1 pt-4 text-[15px] font-bold">{tAsk('engHeading', lang)}</h3>
      {engagement.sessions.last30 === 0 && engagement.sessions.today === 0 ? (
        <p className="px-4 pb-4 pt-1 text-sm text-text-muted">{tAsk('noData', lang)}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className={`${tone.tint} ${tone.ink}`}>
                <th scope="col" className="px-4 py-2"><span className="sr-only">{tAsk('engHeading', lang)}</span></th>
                {WINDOWS.map((w) => (
                  <th key={w.key} scope="col" className="px-3 py-2 text-end font-bold">{w.label(lang)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="px-4 py-2 text-start font-semibold">{r.label}</th>
                  {WINDOWS.map((w) => (
                    <td key={w.key} className="px-3 py-2 text-end tabular-nums">{r.win(w.key)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-text-secondary">{tAsk('engNote', lang)}</p>
    </div>
  )
}

export type UsageReportKind = 'askhans' | 'mcp'

const HEADLINE_LABEL = { answers: 'statAnswers', opens: 'statOpens', calls: 'statCalls', starts: 'statStarts' } as const

export function UsageReportView({ lang, report, kind }: { lang: Language; report: UsageReportBase; kind: UsageReportKind }) {
  const fmt = (n: number) => n.toLocaleString(toOutputLocale(lang))
  const tone = kind === 'mcp' ? HUB_TONES.azure : HUB_TONES.violet
  const barTone = kind === 'mcp' ? 'text-hub-azure' : 'text-hub-violet'
  const mcp = kind === 'mcp'
  const topicLabel = (key: string) => {
    const c = TOPIC_LABEL.get(key)
    return c ? (lang === 'de' ? c.label_de : c.label_en) : key
  }
  const headingId = mcp ? 'mcp-usage-report-heading' : 'ask-hans-report-heading'

  return (
    <div className="mt-10">
      <h3 id={headingId} className="text-2xl font-bold tracking-tight">{tAsk(mcp ? 'mcpReportHeading' : 'reportHeading', lang)}</h3>
      <p className="mb-5 mt-1.5 max-w-[720px] text-sm leading-relaxed text-text-secondary">{tAsk(mcp ? 'mcpReportIntro' : 'reportIntro', lang)}</p>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className={`min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className={`${tone.tint} ${tone.ink}`}>
                  <th scope="col" className="px-4 py-2.5"><span className="sr-only">{tAsk(mcp ? 'mcpReportHeading' : 'reportHeading', lang)}</span></th>
                  {WINDOWS.map((w) => (
                    <th key={w.key} scope="col" className="px-3 py-2.5 text-end font-bold">{w.label(lang)}</th>
                  ))}
                  <th scope="col" className="px-3 py-2.5 text-end font-bold">{tAsk('colAllTime', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {report.headline.map((r) => (
                  <tr key={r.key} className="border-t border-border">
                    <th scope="row" className="px-4 py-3 text-start font-semibold">{tAsk(HEADLINE_LABEL[r.key], lang)}</th>
                    {WINDOWS.map((w) => (
                      <td key={w.key} className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.win[w.key])}</td>
                    ))}
                    <td className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.all)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {report.sampled && report.sampledOf && (
            <p className="border-t border-border px-4 py-2.5 text-xs text-text-secondary">
              {tAsk('sampleLabel', lang)}: <span dir="ltr" className="font-semibold tabular-nums">{fmt(report.sampled.last30)} / {fmt(report.sampledOf.last30)}</span> ({tMcp('tableLast30', lang)})
            </p>
          )}
        </div>

        <div className={`min-w-0 rounded-[14px] border bg-white p-4 ${tone.edge}`}>
          <Bars days={report.days} label={tAsk(mcp ? 'mcpChartLabel' : 'chartLabel', lang)} barTone={barTone} />
          <div dir="ltr" className="mt-1 flex justify-between text-xs text-text-muted">
            <span>{report.days[0]?.date}</span>
            <span>{report.days[report.days.length - 1]?.date}</span>
          </div>
          <div className="mt-2 text-xs font-medium text-text-secondary">{tAsk(mcp ? 'mcpChartLabel' : 'chartLabel', lang)}</div>
        </div>
      </div>

      {!mcp && report.feedback && <RatingsCard feedback={report.feedback} lang={lang} />}
      {!mcp && report.engagement && <EngagementCard engagement={report.engagement} lang={lang} />}

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {!mcp && <BreakdownTable heading={tAsk('topicsHeading', lang)} firstCol={tAsk('topicsHeading', lang)} rows={report.categories} label={topicLabel} lang={lang} />}
        <BreakdownTable heading={tAsk('toolsHeading', lang)} firstCol={tAsk('toolsHeading', lang)} rows={report.tools} label={(k) => k} mono lang={lang} />
        <BreakdownTable heading={tAsk('appsHeading', lang)} firstCol={tAsk('appsHeading', lang)} rows={report.apps} label={(k) => APP_NAME.get(k) ?? k} lang={lang} />
        <BreakdownTable
          heading={tAsk('dirCatsHeading', lang)}
          firstCol={tAsk('dirCatsHeading', lang)}
          rows={report.dirCats}
          label={(k) => CATEGORY_SUB_LABEL[k as CategorySubKey]?.[lang] ?? k}
          lang={lang}
        />
        <BreakdownTable heading={tAsk('langsHeading', lang)} firstCol={tAsk('langsHeading', lang)} rows={report.langs} label={(k) => k.toUpperCase()} mono lang={lang} />
      </div>
      <p className="mt-4 max-w-[720px] text-xs leading-relaxed text-text-secondary">
        {mcp && report.breakdownSince ? `${tAsk('since', lang)} ${formatDisplayDate(report.breakdownSince, lang)}. ` : ''}
        {tAsk(mcp ? 'mcpBreakdownNote' : 'breakdownNote', lang)}
      </p>
    </div>
  )
}
