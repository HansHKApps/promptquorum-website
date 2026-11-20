// POST /api/academy/programme — programme structure from subject, time, level and the quick-check summary
// (docs/academy/SPEC.md 5.3, 7.3). Stateless: nothing about the learner is stored. Lessons are generated later,
// one at a time, when the learner opens them (Phase 3).

import type { NextRequest } from 'next/server'
import { LESSON_QUIZ_SIZE, finalTestSize, generateProgramme, testMinutes } from '@/lib/academy/programme'
import { ACADEMY_TIMEOUT_MS, academyClient, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { programmeRequestSchema } from '@/lib/academy/schemas'
import { recordAcademyProgramme } from '@/lib/academy/usage'
import { recordDemand } from '@/lib/academy/demand-store'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'programme', schema: programmeRequestSchema, requests: 10, window: '1 h' })
  if ('response' in guard) return guard.response
  const body = guard.body
  try {
    const { programme } = await generateProgramme(academyClient(), body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS))
    await recordAcademyProgramme()
    await recordDemand('programme', { subject: body.subject, language: body.language, level: body.selfLevel, minutes: body.availableMinutes, testMode: body.testMode })
    return academyJson({
      objectives: programme.objectives,
      lessons: programme.lessons,
      testPlan: {
        finalQuestions: body.testMode === 'none' ? 0 : finalTestSize(body.availableMinutes),
        lessonQuizQuestions: body.testMode === 'per_lesson_and_final' ? LESSON_QUIZ_SIZE : 0,
        testMinutes: Math.round(testMinutes(body.testMode, body.availableMinutes, programme.lessons.length)),
      },
    })
  } catch (err) {
    return academyFailure('programme', err)
  }
}
