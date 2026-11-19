// PromptQuorum Academy — evaluation of the quick check. Runs in the browser (no server imports here):
// it turns the learner's answers into the per-topic summary that is the only part sent to /api/academy/programme.

import type { Level, Question } from './types'

export interface DiagnosticSummary {
  estimatedLevel: Level
  /** topics with at least one wrong answer */
  gaps: string[]
  /** topics answered fully correctly */
  known: string[]
  correct: number
  total: number
}

/** answers: question id -> chosen option index. Unanswered questions count as wrong. */
export function summarizeDiagnostic(questions: Question[], answers: Record<string, number>): DiagnosticSummary {
  const byTopic = new Map<string, { correct: number; total: number }>()
  let correct = 0
  for (const q of questions) {
    const t = byTopic.get(q.topic) ?? { correct: 0, total: 0 }
    t.total++
    if (answers[q.id] === q.correctIndex) {
      t.correct++
      correct++
    }
    byTopic.set(q.topic, t)
  }
  const gaps = [...byTopic].filter(([, t]) => t.correct < t.total).map(([k]) => k)
  const known = [...byTopic].filter(([, t]) => t.correct === t.total).map(([k]) => k)
  const share = questions.length ? correct / questions.length : 0
  const estimatedLevel: Level = share < 0.4 ? 'beginner' : share < 0.75 ? 'some' : 'experienced'
  return { estimatedLevel, gaps, known, correct, total: questions.length }
}

