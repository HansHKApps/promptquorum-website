// POST /api/academy/quiz — a lesson quiz or the final test, every question verified (docs/academy/SPEC.md 7.4, 7.5).
// One route for both kinds (SPEC 7 lists /api/final-test separately; same engine, `kind` selects size and scope).
// Stateless. The correct answers never leave the server in the clear: each question carries a sealed key and is
// checked by POST /api/academy/answer (QA audit F6). Nothing about the learner is stored.

import type { NextRequest } from 'next/server'
import { QuizShortError, generateQuiz } from '@/lib/academy/quiz'
import { ACADEMY_TIMEOUT_MS, academyClient, academyError, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { quizRequestSchema } from '@/lib/academy/schemas'
import { toClientQuestion } from '@/lib/academy/seal'

export const runtime = 'nodejs'
// Up to two generation rounds plus two verification calls.
export const maxDuration = 120

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'quiz', schema: quizRequestSchema, requests: 20, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const { questions } = await generateQuiz(academyClient(), guard.body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS * 2))
    return academyJson({ questions: questions.map((q) => toClientQuestion(q)) })
  } catch (err) {
    if (err instanceof QuizShortError) {
      console.error('[academy] quiz too short after verification', err.got, err.wanted)
      return academyError('generation', 502)
    }
    return academyFailure('quiz', err)
  }
}
