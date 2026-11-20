// POST /api/academy/register — opt-in registration of a certificate for online verification (SPEC 12.6).
// Stored in Redis (one hash per certificate, decided 2026-11-20: Redis for the test phase): certificate ID, sequential
// number, issue date, score, pass status, active learning time, subject, language, test mode and the SHA-256 of the
// Course Documentation PDF. Never stored: name, answers, lessons, tutor chat, IP, email. The score and time come from
// the learner's browser and are not independently calculated; the verification page says so.
// Registering the same ID again returns the existing number and creates no second record (a repeated call may add the
// documentation hash once).

import type { NextRequest } from 'next/server'
import { z } from 'zod'
import { CERTIFICATE_ID_PATTERN } from '@/lib/academy/certificate'
import { TEST_MODES } from '@/lib/academy/types'
import { isValidProgrammeLanguage } from '@/lib/academy/language'
import { academyError, academyGuard, academyJson } from '@/lib/academy/route'
import { redis } from '@/lib/redis'
import { CERT_SEQ_KEY } from '@/lib/academy/usage'

export const runtime = 'nodejs'

const certKey = (id: string) => `academy:cert:${id}`

const requestSchema = z.object({
  id: z.string().regex(CERTIFICATE_ID_PATTERN),
  issuedAt: z.string().datetime(),
  percent: z.number().int().min(70).max(100),
  minutes: z.number().int().min(1).max(5000),
  subject: z.string().trim().min(2).max(120),
  language: z.string().max(80).refine(isValidProgrammeLanguage),
  testMode: z.enum(TEST_MODES),
  /** SHA-256 of the Course Documentation PDF. Sent in a second call, because the PDF shows the number this call returns. */
  hash: z.string().regex(/^[0-9a-f]{64}$/).optional(),
})

/** No links, addresses or markup in the stored subject: the verification page shows it to strangers. */
const SUBJECT_BLOCKED = /https?:\/\/|www\.|@|[<>]/i

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'register', schema: requestSchema, requests: 10, window: '1 h', metered: false })
  if ('response' in guard) return guard.response
  const b = guard.body
  if (SUBJECT_BLOCKED.test(b.subject)) return academyError('invalid_input', 422)
  const issued = Date.parse(b.issuedAt)
  if (Number.isNaN(issued) || Math.abs(Date.now() - issued) > 3 * 86_400_000) return academyError('invalid_input', 422)
  try {
    const existing = await redis.hget<number | string>(certKey(b.id), 'number')
    if (existing) {
      // Second call: store the documentation fingerprint once, never overwrite it.
      if (b.hash) await redis.hsetnx(certKey(b.id), 'hash', b.hash)
      return academyJson({ number: Number(existing), existing: true })
    }
    const number = await redis.incr(CERT_SEQ_KEY)
    // hsetnx on the number field makes a racing duplicate register lose cleanly and return the winner's number.
    const won = await redis.hsetnx(certKey(b.id), 'number', number)
    if (!won) return academyJson({ number: Number(await redis.hget(certKey(b.id), 'number')), existing: true })
    await redis.hset(certKey(b.id), {
      issuedAt: b.issuedAt,
      percent: b.percent,
      passed: 1,
      minutes: b.minutes,
      subject: b.subject,
      language: b.language,
      testMode: b.testMode,
      ...(b.hash ? { hash: b.hash } : {}),
      createdAt: new Date().toISOString(),
    })
    return academyJson({ number, existing: false })
  } catch (err) {
    console.error('[academy] register failed', err instanceof Error ? err.message : err)
    return academyError('failed', 500)
  }
}
