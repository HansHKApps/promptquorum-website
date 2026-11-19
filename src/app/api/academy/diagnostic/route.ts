// POST /api/academy/diagnostic — quick-check questions for a subject (docs/academy/SPEC.md 5.2).
// Stateless: nothing about the learner is stored. Logs token usage and failure reasons only.

import type { NextRequest } from 'next/server'
import { generateDiagnostic } from '@/lib/academy/diagnostic'
import { ACADEMY_TIMEOUT_MS, academyClient, academyError, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { diagnosticRequestSchema } from '@/lib/academy/schemas'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'diagnostic', schema: diagnosticRequestSchema, requests: 10, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const result = await generateDiagnostic(academyClient(), guard.body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS))
    if (!result.supported) return academyError('unsupported_subject', 422)
    return academyJson({ subjectTitle: result.subjectTitle, questions: result.questions })
  } catch (err) {
    return academyFailure('diagnostic', err)
  }
}
