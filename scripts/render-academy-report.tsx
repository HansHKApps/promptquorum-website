// Smoke test: renders the Academy usage report with sample data in all nine languages and checks the key labels.
// Run: npx -y tsx@4.21.0 scripts/render-academy-report.tsx
import { renderToStaticMarkup } from 'react-dom/server'
import { AcademyReport } from '../src/components/academy/AcademyReport'
import { ACADEMY_REPORT_COPY } from '../src/components/academy/copy/report'
import { zeroCounts, lastNDaysUtc } from '../src/lib/usage/report-types'
import type { AcademyReport as Data } from '../src/lib/academy/report'
import type { AcademyLang } from '../src/lib/academy/types'

const c = (n: number) => ({ today: n, yesterday: n, last7: n * 3, last30: n * 9 })
const dates = lastNDaysUtc(30)
const data: Data = {
  generatedAt: new Date().toISOString(),
  since: '2026-11-01',
  breakdownSince: '2026-11-22',
  headline: [{ key: 'programme', win: c(2), all: 40 }, { key: 'lesson', win: c(5), all: 120 }, { key: 'test', win: c(1), all: 20 }, { key: 'certificate', win: c(1), all: 9 }],
  days: dates.map((date, i) => ({ date, count: i % 7 })),
  langs: [{ key: 'de', counts: c(3), allTime: 30 }, { key: 'other', counts: c(1), allTime: 4 }, { key: 'ar', counts: c(1), allTime: 2 }],
  levels: [{ key: 'beginner', counts: c(2), allTime: 20 }],
  minutes: [{ key: '30', counts: c(2), allTime: 20 }, { key: '90', counts: c(1), allTime: 5 }],
  modes: [{ key: 'final', counts: c(1), allTime: 5 }],
  ratings: {
    lesson: { stars: [1, 2, 3, 4, 5].map((n) => c(n)), allStars: [1, 2, 3, 4, 5] },
    programme: { stars: [1, 2, 3, 4, 5].map(() => zeroCounts()), allStars: [0, 0, 0, 0, 0] },
  },
  tutor: { messages: c(2), up: c(1), down: zeroCounts(), allMessages: 30, allUp: 10, allDown: 1 },
  actions: [{ key: 'share:certificate', counts: c(1), allTime: 3 }],
  engagement: { sessions: c(4), duration: { lt30: c(1), '30-120': c(1), '120-300': c(1), '300-900': c(1), gt900: zeroCounts() } },
}

let failed = 0
for (const lang of Object.keys(ACADEMY_REPORT_COPY) as AcademyLang[]) {
  const html = renderToStaticMarkup(<AcademyReport lang={lang} report={data} />).replaceAll('&#x27;', "'")
  const rc = ACADEMY_REPORT_COPY[lang]
  const ok = html.includes(rc.heading) && html.includes(rc.timeHeading) && html.includes('★★★★★') && html.includes(rc.langOther) && html.includes(rc.actions['share:certificate'])
  console.log(`${ok ? 'PASS' : 'FAIL'} academy report renders in ${lang} (${html.length} chars)`)
  if (!ok) failed++
}
if (failed) process.exit(1)
