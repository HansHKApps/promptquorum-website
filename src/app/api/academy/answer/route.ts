// POST /api/academy/answer — checks one answer of a lesson quiz or the final test (QA audit F6).
// The browser sends the sealed key it received with the question plus the option it chose; the server returns
// correct / incorrect and the explanations. No model call, no storage.

import type { NextRequest } from 'next/server'
import { academyError, academyGuard, academyJson } from '@/lib/academy/route'
import { answerRequestSchema } from '@/lib/academy/schemas'
import { judgeAnswer, openAnswerKey } from '@/lib/academy/seal'

export const runtime = 'nodejs'

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'answer', schema: answerRequestSchema, requests: 400, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const key = openAnswerKey(guard.body.sealed)
    if (!key) return academyError('invalid_input', 400)
    return academyJson(judgeAnswer(key, guard.body.choice))
  } catch {
    return academyError('unavailable', 503)
  }
}
