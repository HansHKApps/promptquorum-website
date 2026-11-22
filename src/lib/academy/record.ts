// PromptQuorum Academy — the learning record (what the learner did): total time, active time, time away, sessions,
// answers and tutor use. Pure functions, browser-safe, computed from the stored programme only. Nothing here is sent
// anywhere; the figures appear on the results screen, the certificate and the Course Documentation.
//
// Active time (SPEC 6.1): counted while the page is visible and the last action (click, key, scroll, touch) was less
// than a minute ago. After a minute without an action the learner counts as away until the next action.
// Total time: from the start of the programme to its completion (breaks and days away included).
// The quick check happens before the programme exists and is not part of either time.

import { countingFinal } from './scoring'
import type { Programme, QuizResult } from './types'

export interface StageAnswers {
  /** questions presented */
  asked: number
  /** questions with an answer (an option other than "not sure", or a non-empty written answer) */
  answered: number
  /** correct answers; null when the stage is not scored (quick check) */
  correct: number | null
}

export interface LearningRecord {
  totalSeconds: number
  activeSeconds: number
  /** total minus active, never below 0 */
  awaySeconds: number
  sessions: number
  lessonsActiveSeconds: number
  testsActiveSeconds: number
  quickCheck: StageAnswers
  lessonQuizzes: StageAnswers
  finalTests: StageAnswers
  finalAttempts: number
  /** average active seconds per question over all lesson quizzes and final tests; null when no test time was recorded */
  secondsPerQuestion: number | null
  tutorRequests: number
}

function stageOf(results: QuizResult[]): StageAnswers {
  let asked = 0
  let answered = 0
  let correct = 0
  for (const r of results) {
    asked += r.total
    correct += r.correct
    if (r.openQuestions?.length) answered += r.openQuestions.filter((q) => (r.openAnswers?.[q.id] ?? '').trim().length > 0).length
    else answered += Object.values(r.answers).filter((a) => a >= 0).length
  }
  return { asked, answered, correct }
}

export function learningRecord(p: Programme, now: Date = new Date()): LearningRecord {
  const start = Date.parse(p.progress.startedAt)
  const final = countingFinal(p)
  const end = p.progress.completedAt ? Date.parse(p.progress.completedAt) : final ? Date.parse(final.takenAt) : now.getTime()
  const totalSeconds = Number.isFinite(start) && Number.isFinite(end) ? Math.max(0, Math.round((end - start) / 1000)) : 0
  const activeSeconds = p.progress.secondsSpent
  const lessonsActiveSeconds = Object.values(p.progress.lessonSeconds ?? {}).reduce((a, b) => a + b, 0)
  const testsActiveSeconds = Object.values(p.progress.testSeconds ?? {}).reduce((a, b) => a + b, 0)
  const diag = p.diagnostic
  const quickCheck: StageAnswers = {
    asked: diag.questions.length,
    answered: diag.questions.filter((q) => (diag.answers[q.id] ?? -1) >= 0).length,
    correct: null,
  }
  const finals = p.progress.finalAttempts ?? (p.progress.finalResult ? [p.progress.finalResult] : [])
  const lessonQuizzes = stageOf(p.progress.quizResults)
  const finalTests = stageOf(finals)
  const testQuestions = lessonQuizzes.asked + finalTests.asked
  return {
    totalSeconds,
    activeSeconds,
    // Active time can exceed the wall clock only through a clock change; never show negative time away.
    awaySeconds: Math.max(0, totalSeconds - activeSeconds),
    sessions: p.progress.sessions ?? 0,
    lessonsActiveSeconds,
    testsActiveSeconds,
    quickCheck,
    lessonQuizzes,
    finalTests,
    finalAttempts: finals.length,
    secondsPerQuestion: testsActiveSeconds > 0 && testQuestions > 0 ? Math.round(testsActiveSeconds / testQuestions) : null,
    tutorRequests: p.progress.tutor?.used ?? 0,
  }
}

/** "2 d 3 h", "1 h 5 min", "12 min", "40 s" in the given locale (Intl unit formats, so no per-language strings). */
export function formatDuration(seconds: number, locale: string): string {
  const s = Math.max(0, Math.round(seconds))
  const unit = (n: number, u: 'day' | 'hour' | 'minute' | 'second') => new Intl.NumberFormat(locale, { style: 'unit', unit: u, unitDisplay: 'short' }).format(n)
  if (s < 60) return unit(s, 'second')
  const m = Math.round(s / 60)
  if (m < 60) return unit(m, 'minute')
  const h = Math.floor(m / 60)
  if (h < 24) return m % 60 ? `${unit(h, 'hour')} ${unit(m % 60, 'minute')}` : unit(h, 'hour')
  const d = Math.floor(h / 24)
  return h % 24 ? `${unit(d, 'day')} ${unit(h % 24, 'hour')}` : unit(d, 'day')
}
