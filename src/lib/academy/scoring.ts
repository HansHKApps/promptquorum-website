// PromptQuorum Academy — scoring (docs/academy/SPEC.md 8). Pure functions, run in the browser.
// Overall score = all correct answers of the scored quizzes / all scored questions, rounded. Quick-check
// questions never count. Pass = 70% or more. "none": no score. "final": the final test only.
// "per_lesson_and_final": every lesson quiz plus the final test, pooled.

import type { OpenQuestion, Programme, Question, QuizQuestion, QuizResult } from './types'

export const PASS_MARK = 70

/** The correct option of a question: from the server's verdict (`reveal`), or from a full question (tests, quick check). */
export function correctIndexOf(q: Question | QuizQuestion): number | undefined {
  return 'correctIndex' in q ? q.correctIndex : q.reveal?.correctIndex
}

export function scoreQuiz(quizId: string, questions: (Question | QuizQuestion)[], answers: Record<string, number>): QuizResult {
  const byTopic: QuizResult['byTopic'] = {}
  let correct = 0
  for (const q of questions) {
    const t = (byTopic[q.topic] ??= { correct: 0, total: 0 })
    t.total++
    if (answers[q.id] === correctIndexOf(q)) {
      t.correct++
      correct++
    }
  }
  return { quizId, answers, correct, total: questions.length, byTopic, takenAt: new Date().toISOString() }
}

/**
 * Result of a written-format quiz (free / explain). Every graded answer earns 0, 0.5 or 1 point (grade.ts), so
 * `correct` can end in .5 and the rest of the scoring (pooling, per-topic, pass mark) works unchanged.
 * Unanswered or ungraded questions count as 0.
 */
export function scoreOpenQuiz(quizId: string, questions: OpenQuestion[], answers: Record<string, string>): QuizResult {
  const byTopic: QuizResult['byTopic'] = {}
  let correct = 0
  for (const q of questions) {
    const t = (byTopic[q.topic] ??= { correct: 0, total: 0 })
    t.total++
    const credit = q.reveal?.credit ?? 0
    t.correct += credit
    correct += credit
  }
  return { quizId, answers: {}, correct, total: questions.length, byTopic, takenAt: new Date().toISOString(), openQuestions: questions, openAnswers: answers }
}

export interface ProgrammeScore {
  percent: number
  correct: number
  total: number
  passed: boolean
  byTopic: { topic: string; correct: number; total: number; percent: number; weak: boolean }[]
}

/** The final-test result that counts: the first passing attempt, else the latest one (SPEC 8 retakes). */
export function countingFinal(p: Programme): QuizResult | undefined {
  const attempts = p.progress.finalAttempts ?? (p.progress.finalResult ? [p.progress.finalResult] : [])
  return attempts.find((a) => a.total > 0 && (a.correct / a.total) * 100 >= PASS_MARK) ?? attempts[attempts.length - 1]
}

export function programmeScore(p: Programme): ProgrammeScore | null {
  if (p.testMode === 'none') return null
  const final = countingFinal(p)
  if (!final) return null
  const scored: QuizResult[] = p.testMode === 'final' ? [final] : [...p.progress.quizResults.filter((r) => r.quizId.startsWith('lesson-')), final]
  const topics = new Map<string, { correct: number; total: number }>()
  let correct = 0
  let total = 0
  for (const r of scored) {
    correct += r.correct
    total += r.total
    for (const [t, v] of Object.entries(r.byTopic)) {
      const acc = topics.get(t) ?? { correct: 0, total: 0 }
      acc.correct += v.correct
      acc.total += v.total
      topics.set(t, acc)
    }
  }
  const percent = total ? Math.round((correct / total) * 100) : 0
  return {
    percent,
    correct,
    total,
    passed: total > 0 && percent >= PASS_MARK,
    byTopic: [...topics].map(([topic, v]) => {
      const pc = v.total ? Math.round((v.correct / v.total) * 100) : 0
      return { topic, ...v, percent: pc, weak: pc < PASS_MARK }
    }),
  }
}

/** SPEC 9: completed = all lessons done, required tests taken, pass mark reached (or no tests chosen). */
export function isCompleted(p: Programme): boolean {
  const lessonsDone = p.lessons.every((l) => p.progress.lessonStatus[l.id] === 'done')
  if (!lessonsDone) return false
  if (p.testMode === 'none') return true
  if (p.testMode === 'per_lesson_and_final' && !p.lessons.every((l) => p.progress.quizResults.some((r) => r.quizId === l.id))) return false
  return programmeScore(p)?.passed ?? false
}
