// POST /api/academy/open-quiz — a lesson quiz or the final test in a written format ("free" or "explain").
// Same engine rules as /api/academy/quiz: questions come from the lesson text, every question is verified by a second
// call, ~30% extra are generated. The rubric and model answer stay on the server inside a sealed token; the browser
// sends the token and the written answer to /api/academy/grade. Stateless; nothing about the learner is stored.

import type { NextRequest } from 'next/server'
import { QuizShortError } from '@/lib/academy/quiz'
import { generateOpenQuiz, toClientOpen } from '@/lib/academy/openquiz'
import { ACADEMY_TIMEOUT_MS, academyClient, academyError, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { openQuizRequestSchema } from '@/lib/academy/schemas'
import { recordAcademy } from '@/lib/academy/usage'
import { recordDemand } from '@/lib/academy/demand-store'

export const runtime = 'nodejs'
export const maxDuration = 120

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'open-quiz', schema: openQuizRequestSchema, requests: 20, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const { questions } = await generateOpenQuiz(academyClient(), guard.body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS * 2))
    if (guard.body.kind === 'final') {
      await recordAcademy('test')
      await recordDemand('test', { subject: guard.body.subject, language: guard.body.language })
    }
    return academyJson({ questions: questions.map((q) => toClientOpen(q, guard.body.language)) })
  } catch (err) {
    if (err instanceof QuizShortError) {
      console.error('[academy] open quiz too short after verification', err.got, err.wanted)
      return academyError('generation', 502)
    }
    return academyFailure('open-quiz', err)
  }
}
