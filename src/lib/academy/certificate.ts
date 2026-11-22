// PromptQuorum Academy — certificate data (docs/academy/SPEC.md section 10, QA audit F5). Pure functions, browser-safe.
// The certificate is created in the browser only; the learner's name never reaches a server.

import { learningRecord } from './record'
import { countingFinal, isCompleted, PASS_MARK, programmeScore } from './scoring'
import type { Programme } from './types'

/** Crockford-style base32 without I, L, O, U: no look-alike characters in an ID someone may read out. */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

/** `PQA-YYYY-` + 10 crypto-random base32 characters. A reference label, not a verifiable record (SPEC 10). */
export function newCertificateId(now: Date = new Date(), random: (n: number) => Uint8Array = (n) => crypto.getRandomValues(new Uint8Array(n))): string {
  const bytes = random(10)
  let tail = ''
  for (const b of bytes) tail += ALPHABET[b % 32]
  return `PQA-${now.getUTCFullYear()}-${tail}`
}

export const CERTIFICATE_ID_PATTERN = /^PQA-\d{4}-[0-9A-HJKMNP-TV-Z]{10}$/

export const NAME_MIN_CHARS = 2
export const NAME_MAX_CHARS = 80

/** Why the download is not possible yet; null = ready. The UI always shows the matching reason. */
export type CertificateBlocker =
  | { code: 'name' }
  | { code: 'lessons'; done: number; total: number }
  | { code: 'quizzes' }
  | { code: 'notPassed' }

export function certificateBlocker(p: Programme, name: string): CertificateBlocker | null {
  const score = programmeScore(p)
  if (!score || !score.passed) return { code: 'notPassed' }
  const done = p.lessons.filter((l) => p.progress.lessonStatus[l.id] === 'done').length
  if (done < p.lessons.length) return { code: 'lessons', done, total: p.lessons.length }
  if (p.testMode === 'per_lesson_and_final' && !p.lessons.every((l) => p.progress.quizResults.some((r) => r.quizId === l.id))) return { code: 'quizzes' }
  if (!isCompleted(p)) return { code: 'notPassed' }
  if (name.trim().length < NAME_MIN_CHARS) return { code: 'name' }
  return null
}

/** `PromptQuorum-Academy-Course-Documentation-<subject-slug>-<ID>.pdf` (SPEC 12.1). */
export function documentationFilename(subject: string, id: string, extra?: { name?: string; completedAt?: string }): string {
  return certificateFilename(subject, id, extra).replace('-Certificate-', '-Course-Documentation-')
}

export interface CertificateModel {
  id: string
  name: string
  subject: string
  objectives: string[]
  topics: string[]
  startedAt: string
  completedAt: string
  issuedAt: string
  /** active learning minutes recorded in the browser */
  learningMinutes: number
  /** start to completion in seconds, breaks included */
  totalSeconds: number
  testMode: Programme['testMode']
  percent: number
  passMark: number
  correct: number
  total: number
  /** part of the counted score came from written answers graded by AI (formats free / explain): the PDFs must say so */
  usesWrittenAnswers: boolean
  byTopic: { topic: string; percent: number; correct: number; total: number }[]
}

/** Everything printed on the certificate. Throws if the programme does not qualify (callers check the blocker first). */
export function certificateModel(p: Programme, name: string, now: Date = new Date()): CertificateModel {
  const score = programmeScore(p)
  const final = countingFinal(p)
  if (!score || !final || !isCompleted(p)) throw new Error('certificate: programme is not completed')
  const issuedAt = p.certificate?.issuedAt ?? now.toISOString()
  return {
    id: p.certificate?.id ?? newCertificateId(now),
    name: name.trim().slice(0, NAME_MAX_CHARS),
    subject: p.subject,
    objectives: p.objectives,
    topics: [...new Set(p.lessons.map((l) => l.topic))],
    startedAt: p.progress.startedAt,
    completedAt: p.progress.completedAt ?? final.takenAt,
    issuedAt,
    learningMinutes: Math.max(1, Math.round(p.progress.secondsSpent / 60)),
    totalSeconds: learningRecord(p).totalSeconds,
    testMode: p.testMode,
    percent: score.percent,
    passMark: PASS_MARK,
    correct: score.correct,
    total: score.total,
    usesWrittenAnswers: [final, ...(p.testMode === 'per_lesson_and_final' ? p.progress.quizResults : [])].some((r) => (r.openQuestions?.length ?? 0) > 0),
    byTopic: score.byTopic.map(({ topic, percent, correct, total }) => ({ topic, percent, correct, total })),
  }
}

function slugOf(text: string, max: number): string {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/g, '')
}

/** Local calendar date of an ISO timestamp as YYYY-MM-DD ('' if unreadable). */
function fileDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/**
 * `PromptQuorum-Academy-Certificate-<subject-slug>[-<learner-name>][-<YYYY-MM-DD course finished>]-<ID>.pdf` (SPEC 10).
 * Non-Latin subjects fall back to "programme"; a name with no Latin letters is left out. The name is only used for the
 * file name on the learner's own computer.
 */
export function certificateFilename(subject: string, id: string, extra?: { name?: string; completedAt?: string }): string {
  const parts = [slugOf(subject, 40) || 'programme', slugOf(extra?.name ?? '', 30), extra?.completedAt ? fileDate(extra.completedAt) : '']
  return `PromptQuorum-Academy-Certificate-${parts.filter(Boolean).join('-')}-${id}.pdf`
}
