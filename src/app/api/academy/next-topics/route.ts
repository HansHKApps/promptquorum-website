// POST /api/academy/next-topics — three topics adjacent to a finished program, for the results page.
// Stateless: nothing about the learner is stored. Logs token usage and failure reasons only.

import type { NextRequest } from 'next/server'
import { generateNextTopics } from '@/lib/academy/next-topics'
import { ACADEMY_TIMEOUT_MS, academyClient, academyFailure, academyGuard, academyJson } from '@/lib/academy/route'
import { nextTopicsRequestSchema } from '@/lib/academy/schemas'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'next-topics', schema: nextTopicsRequestSchema, requests: 10, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    return academyJson({ topics: await generateNextTopics(academyClient(), guard.body, AbortSignal.timeout(ACADEMY_TIMEOUT_MS)) })
  } catch (err) {
    return academyFailure('next-topics', err)
  }
}
