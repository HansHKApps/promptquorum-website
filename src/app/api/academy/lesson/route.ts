// POST /api/academy/lesson — one lesson, generated when the learner first opens it (docs/academy/SPEC.md 7.1, 7.2).
// The browser keeps the result in its stored programme, so each lesson is generated once per learner.
// Stateless: nothing about the learner is stored. Logs token usage and failure reasons only.

import type { NextRequest } from 'next/server'
import { generateLesson } from '@/lib/academy/lesson'
import { ACADEMY_TIMEOUT_MS, academyClient, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { lessonRequestSchema } from '@/lib/academy/schemas'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  // A 4-hour programme has up to 12 lessons; 40 per hour leaves room for retries without inviting bulk use.
  const guard = await academyGuard(req, { name: 'lesson', schema: lessonRequestSchema, requests: 40, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    const { sections, furtherReading } = await generateLesson(academyClient(), guard.body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS))
    return academyJson({ sections, furtherReading })
  } catch (err) {
    return academyFailure('lesson', err)
  }
}
