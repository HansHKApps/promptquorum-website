// POST /api/academy/grade — grades one written answer (formats "free" and "explain") against the hidden rubric inside
// the sealed token. Returns the credit (0, 0.5 or 1), short feedback, which key points were covered or missed, and the
// model answer. One small model call; an empty answer ("not sure") needs none. Nothing is stored; the answer text is
// never logged.

import type { NextRequest } from 'next/server'
import { gradeAnswer } from '@/lib/academy/grade'
import { ACADEMY_TIMEOUT_MS, academyClient, academyError, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { OPEN_ANSWER_MAX_CHARS, gradeRequestSchema } from '@/lib/academy/schemas'
import { openOpenKey } from '@/lib/academy/seal'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'grade', schema: gradeRequestSchema, requests: 200, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const key = openOpenKey(guard.body.sealed)
    if (!key) return academyError('invalid_input', 400)
    if (guard.body.answer.length > OPEN_ANSWER_MAX_CHARS[key.format]) return academyError('invalid_input', 400)
    return academyJson(await gradeAnswer(academyClient(), key, guard.body.answer, AbortSignal.timeout(ACADEMY_TIMEOUT_MS)))
  } catch (err) {
    return academyFailure('grade', err)
  }
}
