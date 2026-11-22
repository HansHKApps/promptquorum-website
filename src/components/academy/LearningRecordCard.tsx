'use client'

// PromptQuorum Academy — "Your learning record" on the results screen: total time, active time, time away, sessions,
// where the active time went and how many questions were answered. Computed from the stored programme in this browser.

import { formatPoints } from '@/lib/academy/format-points'
import { formatDuration, learningRecord } from '@/lib/academy/record'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { toOutputLocale } from '@/lib/i18n/constants'
import { RECORD_COPY } from './copy/record'

export function LearningRecordCard({ programme, lang }: { programme: Programme; lang: AcademyLang }) {
  const R = RECORD_COPY[lang]
  const rec = learningRecord(programme)
  const dur = (s: number) => formatDuration(s, toOutputLocale(lang))
  const rows: [string, string][] = [
    [R.totalTime, dur(rec.totalSeconds)],
    [R.activeTime, dur(rec.activeSeconds)],
    [R.awayTime, dur(rec.awaySeconds)],
    [R.sessions, String(rec.sessions)],
    [R.inLessons, dur(rec.lessonsActiveSeconds)],
    ...(rec.testsActiveSeconds > 0 ? ([[R.inTests, dur(rec.testsActiveSeconds)]] as [string, string][]) : []),
    ...(rec.secondsPerQuestion !== null ? ([[R.perQuestion, dur(rec.secondsPerQuestion)]] as [string, string][]) : []),
    [R.tutor, formatPoints(rec.tutorRequests, lang)],
  ]
  const stages = [
    { label: R.quickCheck, st: rec.quickCheck },
    { label: R.lessonQuizzes, st: rec.lessonQuizzes },
    { label: R.finalTest, st: rec.finalTests },
  ].filter((s) => s.st.asked > 0)
  return (
    <div>
      <h3 className="font-medium text-gray-900">{R.title}</h3>
      <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-gray-700">{k}</dt>
            <dd className="font-medium text-gray-900 sm:text-end">{v}</dd>
          </div>
        ))}
      </dl>
      {stages.length > 0 && (
        <>
          <h4 className="mt-4 text-sm font-medium text-gray-900">{R.answersTitle}</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            {stages.map(({ label, st }) => (
              <li key={label}>
                {label}: {R.answeredOf(st.answered, st.asked)}
                {st.correct !== null && ` · ${R.correctN(formatPoints(st.correct, lang))}`}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-3 text-xs text-gray-600">{R.rule}</p>
    </div>
  )
}
