// PromptQuorum Academy — Course Documentation data (SPEC 12.3): the evidence behind the certificate. Pure functions,
// browser-safe. The PDF itself is drawn in src/components/academy/documentation-pdf.ts.
// Not included: tutor chat history (may contain personal data). Time per question is not recorded in v1.

import type { CertificateModel } from './certificate'
import { correctIndexOf, countingFinal } from './scoring'
import type { Programme, Question, QuizQuestion, QuizResult } from './types'

export interface DocQuestion {
  prompt: string
  options: string[]
  /** -1 = "not sure" / unanswered */
  chosen: number
  correctIndex: number | null
  right: boolean
  explanation: string
  topic: string
}

/** A written answer (format free / explain) graded by AI: what was asked, what the learner wrote, the credit (0, 0.5 or 1). */
export interface DocOpenQuestion {
  prompt: string
  topic: string
  answer: string
  credit: number
  modelAnswer: string
}

export interface DocAttempt {
  /** lesson number (1-based) for a lesson quiz, 0 for the final test */
  lesson: number
  lessonTitle?: string
  attemptNumber: number
  takenAt: string
  correct: number
  total: number
  /** this attempt is the one the certificate counts */
  passing: boolean
  questions: DocQuestion[]
  /** written-format attempt: graded written answers (questions is empty then) */
  openQuestions: DocOpenQuestion[]
}

export interface DocModel {
  cert: CertificateModel
  number?: number
  /** the programme language as a display name */
  languageName: string
  attemptsCount: number
  objectives: string[]
  /** the learner's original request: level, planned time, test format */
  request: { selfLevel: Programme['selfLevel']; availableMinutes: number; testFormat: NonNullable<Programme['testFormat']>; choiceOptions: number }
  /** per objective: the 1-based numbers and titles of the lessons that serve it */
  objectiveLessons: { number: number; title: string }[][]
  lessons: { title: string; estimatedMinutes: number; recordedMinutes: number }[]
  totals: { estimatedMinutes: number; recordedMinutes: number }
  diagnostic: DocQuestion[]
  attempts: DocAttempt[]
  lessonsText: { title: string; objectives: string[]; sections: { heading: string; body: string }[]; furtherReading: { title: string; url: string }[] }[]
}

function toDocQuestions(questions: (Question | QuizQuestion)[], answers: Record<string, number>): DocQuestion[] {
  return questions.map((q) => {
    const correctIndex = correctIndexOf(q) ?? null
    const chosen = answers[q.id] ?? -1
    const explanation = 'reveal' in q ? (q.reveal?.explanationCorrect ?? '') : (q as Question).explanationCorrect
    return { prompt: q.prompt, options: q.options, chosen, correctIndex, right: correctIndex !== null && chosen === correctIndex, explanation, topic: q.topic }
  })
}

function toDocOpen(r: QuizResult): DocOpenQuestion[] {
  return (r.openQuestions ?? []).map((q) => ({ prompt: q.prompt, topic: q.topic, answer: r.openAnswers?.[q.id] ?? '', credit: q.reveal?.credit ?? 0, modelAnswer: q.reveal?.modelAnswer ?? '' }))
}

function toAttempt(r: QuizResult, lesson: number, lessonTitle: string | undefined, attemptNumber: number, passing: boolean): DocAttempt {
  return { lesson, lessonTitle, attemptNumber, takenAt: r.takenAt, correct: r.correct, total: r.total, passing, questions: toDocQuestions(r.questions ?? [], r.answers), openQuestions: toDocOpen(r) }
}

/** `cert` is the model already built for the certificate, so both files carry the same ID and issue date. */
export function documentationModel(p: Programme, cert: CertificateModel, languageName: string, number?: number): DocModel {
  const final = countingFinal(p)
  const finals = p.progress.finalAttempts ?? (p.progress.finalResult ? [p.progress.finalResult] : [])
  const attempts: DocAttempt[] = []
  p.lessons.forEach((l, i) => {
    const r = p.progress.quizResults.find((x) => x.quizId === l.id)
    if (r) attempts.push(toAttempt(r, i + 1, l.title, 1, false))
  })
  finals.forEach((r, i) => attempts.push(toAttempt(r, 0, undefined, i + 1, r === final)))
  return {
    cert,
    number,
    languageName,
    attemptsCount: finals.length,
    objectives: p.objectives,
    request: { selfLevel: p.selfLevel, availableMinutes: p.availableMinutes, testFormat: p.testFormat ?? 'choice', choiceOptions: p.choiceOptions ?? 3 },
    objectiveLessons: p.objectives.map((_, oi) => p.lessons.flatMap((l, li) => (l.objectiveIds.includes(oi) ? [{ number: li + 1, title: l.title }] : []))),
    lessons: p.lessons.map((l) => ({ title: l.title, estimatedMinutes: l.estimatedMinutes, recordedMinutes: Math.round((p.progress.lessonSeconds?.[l.id] ?? 0) / 60) })),
    totals: {
      estimatedMinutes: p.lessons.reduce((a, l) => a + l.estimatedMinutes, 0),
      recordedMinutes: p.lessons.reduce((a, l) => a + Math.round((p.progress.lessonSeconds?.[l.id] ?? 0) / 60), 0),
    },
    diagnostic: toDocQuestions(p.diagnostic.questions, p.diagnostic.answers),
    attempts,
    lessonsText: p.lessons.map((l) => ({ title: l.title, objectives: l.objectiveIds.map((i) => p.objectives[i]).filter(Boolean), sections: l.sections, furtherReading: l.furtherReading.map((r) => ({ title: r.title, url: r.url })) })),
  }
}
