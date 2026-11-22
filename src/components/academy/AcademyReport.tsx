// Academy usage report on /academy: same layout as the Ask Hans report (UsageReportView): headline counters over
// today / yesterday / 7 days / 30 days / all time, a 30-day chart, star ratings (lessons and programs separately,
// with the distribution), time in Academy, AI-tutor use, languages, setup choices and sharing actions.
// Data: src/lib/academy/report.ts. Plain server component, no chart library. Anonymous totals only.

import type { Language } from '@/lib/blog/blogContent'
import type { AcademyLang } from '@/lib/academy/types'
import type { AcademyRatingKind, AcademyReport as AcademyReportData } from '@/lib/academy/report'
import type { ReportWindow, WindowCounts } from '@/lib/usage/report-types'
import { toOutputLocale } from '@/lib/i18n/constants'
import { languageName } from '@/lib/i18n/language-name'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { DURATION_BUCKETS, DURATION_MIDPOINT_S, type DurationBucket } from '@/lib/askhans/engagement'
import { HUB_TONES } from '@/components/hub-template/palette'
import { tAsk, type AskUiKey } from '@/components/tools/ask-hans-block-i18n'
import { t as tMcp } from '@/components/tools/mcp-stats-i18n'
import { Bars, BreakdownTable } from '@/components/tools/UsageReportView'
import { ACADEMY_COPY } from './copy'
import { ACADEMY_REPORT_COPY } from './copy/report'

const WINDOWS: { key: ReportWindow; label: (lang: Language) => string }[] = [
  { key: 'today', label: (l) => tAsk('colToday', l) },
  { key: 'yesterday', label: (l) => tAsk('colYesterday', l) },
  { key: 'last7', label: (l) => tMcp('tableLast7', l) },
  { key: 'last30', label: (l) => tMcp('tableLast30', l) },
]

const DURATION_LABEL: Record<DurationBucket, AskUiKey> = { lt30: 'engDurLt30', '30-120': 'engDur30', '120-300': 'engDur120', '300-900': 'engDur300', gt900: 'engDurGt900' }

interface CardRow {
  label: string
  win: (w: ReportWindow) => string
  all?: string
}

/** One table card: rows over the four windows, optionally with an all-time column. */
function WindowCard({ heading, rows, lang, note, empty }: { heading: string; rows: CardRow[]; lang: Language; note?: string; empty?: string }) {
  const tone = HUB_TONES.violet
  const showAll = rows.some((r) => r.all !== undefined)
  return (
    <div className={`min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
      <h3 className="px-4 pb-1 pt-4 text-[15px] font-bold">{heading}</h3>
      {empty ? (
        <p className="px-4 pb-4 pt-1 text-sm text-text-muted">{empty}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className={`${tone.tint} ${tone.ink}`}>
                <th scope="col" className="px-4 py-2"><span className="sr-only">{heading}</span></th>
                {WINDOWS.map((w) => (
                  <th key={w.key} scope="col" className="px-3 py-2 text-end font-bold">{w.label(lang)}</th>
                ))}
                {showAll && <th scope="col" className="px-3 py-2 text-end font-bold">{tAsk('colAllTime', lang)}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="px-4 py-2 text-start font-semibold">{r.label}</th>
                  {WINDOWS.map((w) => (
                    <td key={w.key} className="px-3 py-2 text-end tabular-nums">{r.win(w.key)}</td>
                  ))}
                  {showAll && <td className="px-3 py-2 text-end font-bold tabular-nums">{r.all ?? ''}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {note && <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-text-secondary">{note}</p>}
    </div>
  )
}

function ratingRows(kind: AcademyRatingKind, lang: Language): CardRow[] {
  const loc = toOutputLocale(lang)
  const fmt = (n: number) => n.toLocaleString(loc)
  const avg = (sum: number, count: number) => (count ? (sum / count).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '–')
  const countIn = (w: ReportWindow) => kind.stars.reduce((n, c) => n + c[w], 0)
  const sumIn = (w: ReportWindow) => kind.stars.reduce((n, c, i) => n + c[w] * (i + 1), 0)
  const allCount = kind.allStars.reduce((a, b) => a + b, 0)
  const allSum = kind.allStars.reduce((a, c, i) => a + c * (i + 1), 0)
  const rows: CardRow[] = [
    { label: tAsk('ratingCount', lang), win: (w) => fmt(countIn(w)), all: fmt(allCount) },
    { label: tAsk('ratingAvg', lang), win: (w) => avg(sumIn(w), countIn(w)), all: avg(allSum, allCount) },
  ]
  for (let s = 5; s >= 1; s--) rows.push({ label: '★'.repeat(s), win: (w) => fmt(kind.stars[s - 1][w]), all: fmt(kind.allStars[s - 1]) })
  return rows
}

export function AcademyReport({ lang, report }: { lang: AcademyLang; report: AcademyReportData }) {
  const loc = toOutputLocale(lang)
  const fmt = (n: number) => n.toLocaleString(loc)
  const tone = HUB_TONES.violet
  const tx = ACADEMY_COPY[lang]
  const rc = ACADEMY_REPORT_COPY[lang]
  const headLabel = { programme: tx.statProgrammes, lesson: tx.statLessons, test: tx.statTests, certificate: tx.statCertificates } as const
  const count = (c: WindowCounts, w: ReportWindow) => fmt(c[w])
  const eng = report.engagement
  const avgTime = (w: ReportWindow) => {
    const total = eng.sessions[w]
    if (!total) return '–'
    const secs = DURATION_BUCKETS.reduce((n, b) => n + eng.duration[b][w] * DURATION_MIDPOINT_S[b], 0) / total
    return `${Math.floor(secs / 60).toLocaleString(loc)}:${String(Math.round(secs % 60)).padStart(2, '0')}`
  }
  const ratingsNone = (k: AcademyRatingKind) => k.allStars.every((n) => n === 0) && k.stars.every((c) => c.last30 === 0)
  const lessonDays = report.days
  const timeRows: CardRow[] = [
    { label: rc.timeSessions, win: (w) => count(eng.sessions, w) },
    { label: rc.timeAvg, win: avgTime },
    ...DURATION_BUCKETS.map((b) => ({ label: `${tAsk('engDurHeading', lang)}: ${tAsk(DURATION_LABEL[b], lang)}`, win: (w: ReportWindow) => count(eng.duration[b], w) })),
  ]
  const tutor = report.tutor
  const tutorRows: CardRow[] = [
    { label: rc.tutorMessages, win: (w) => count(tutor.messages, w), all: fmt(tutor.allMessages) },
    { label: rc.tutorUp, win: (w) => count(tutor.up, w), all: fmt(tutor.allUp) },
    { label: rc.tutorDown, win: (w) => count(tutor.down, w), all: fmt(tutor.allDown) },
  ]

  return (
    <section id="academy-report" aria-labelledby="academy-report-heading" className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
      <h2 id="academy-report-heading" className="text-2xl font-bold tracking-tight">{rc.heading}</h2>
      <p className="mb-5 mt-1.5 max-w-[720px] text-sm leading-relaxed text-text-secondary">{rc.intro}</p>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className={`min-w-0 rounded-[14px] border bg-white ${tone.edge}`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className={`${tone.tint} ${tone.ink}`}>
                  <th scope="col" className="px-4 py-2.5"><span className="sr-only">{rc.heading}</span></th>
                  {WINDOWS.map((w) => (
                    <th key={w.key} scope="col" className="px-3 py-2.5 text-end font-bold">{w.label(lang)}</th>
                  ))}
                  <th scope="col" className="px-3 py-2.5 text-end font-bold">{tAsk('colAllTime', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {report.headline.map((r) => (
                  <tr key={r.key} className="border-t border-border">
                    <th scope="row" className="px-4 py-3 text-start font-semibold">{headLabel[r.key]}</th>
                    {WINDOWS.map((w) => (
                      <td key={w.key} className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.win[w.key])}</td>
                    ))}
                    <td className="px-3 py-3 text-end text-lg font-bold tabular-nums">{fmt(r.all)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`min-w-0 rounded-[14px] border bg-white p-4 ${tone.edge}`}>
          <Bars days={lessonDays} label={rc.chartLabel} barTone="text-hub-violet" />
          <div dir="ltr" className="mt-1 flex justify-between text-xs text-text-muted">
            <span>{lessonDays[0]?.date}</span>
            <span>{lessonDays[lessonDays.length - 1]?.date}</span>
          </div>
          <div className="mt-2 text-xs font-medium text-text-secondary">{rc.chartLabel}</div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <WindowCard heading={rc.ratingLessonHeading} rows={ratingRows(report.ratings.lesson, lang)} lang={lang} empty={ratingsNone(report.ratings.lesson) ? rc.ratingNone : undefined} note={rc.ratingNote} />
        <WindowCard heading={rc.ratingProgrammeHeading} rows={ratingRows(report.ratings.programme, lang)} lang={lang} empty={ratingsNone(report.ratings.programme) ? rc.ratingNone : undefined} note={rc.ratingNote} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <WindowCard heading={rc.timeHeading} rows={timeRows} lang={lang} empty={eng.sessions.last30 === 0 ? tAsk('noData', lang) : undefined} note={rc.timeNote} />
        <WindowCard heading={rc.tutorHeading} rows={tutorRows} lang={lang} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <BreakdownTable heading={rc.langsHeading} firstCol={rc.langsHeading} rows={report.langs} label={(k) => (k === 'other' ? rc.langOther : languageName(k, lang))} lang={lang} />
        <BreakdownTable heading={rc.levelsHeading} firstCol={rc.levelsHeading} rows={report.levels} label={(k) => (tx.levels as Record<string, { label: string }>)[k]?.label ?? k} lang={lang} />
        <BreakdownTable heading={rc.minutesHeading} firstCol={rc.minutesHeading} rows={report.minutes} label={(k) => tx.minutes(Number(k))} lang={lang} />
        <BreakdownTable heading={rc.modesHeading} firstCol={rc.modesHeading} rows={report.modes} label={(k) => (tx.tests as Record<string, { label: string }>)[k]?.label ?? k} lang={lang} />
        <BreakdownTable heading={rc.actionsHeading} firstCol={rc.actionsHeading} rows={report.actions} label={(k) => rc.actions[k] ?? k} lang={lang} />
      </div>

      <p className="mt-4 max-w-[720px] text-xs leading-relaxed text-text-secondary">
        {report.breakdownSince ? `${tAsk('since', lang)} ${formatDisplayDate(report.breakdownSince, lang)}. ` : ''}
        {rc.note}
      </p>
    </section>
  )
}
