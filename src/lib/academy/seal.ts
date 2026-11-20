// PromptQuorum Academy — sealed answer keys (QA audit F6). The browser must never hold a quiz's correct answer or
// explanations before the question is answered. The server encrypts them into an opaque per-question token
// (AES-256-GCM); the browser sends the token back with the chosen option and gets the verdict. Stateless: nothing
// is stored on the server. Server-only (node:crypto).

import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto'
import type { OpenFormat, Question } from './types'

export interface AnswerKey {
  /** question id the key belongs to (binds the token to one question) */
  id: string
  correctIndex: 0 | 1 | 2
  explanationCorrect: string
  explanationWrong: (string | null)[]
}

/** What the server sends the browser for a quiz question: no key, no explanations, plus the sealed key. */
export type ClientQuestion = Omit<Question, 'correctIndex' | 'explanationCorrect' | 'explanationWrong'> & { sealed: string }

export interface AnswerVerdict {
  correct: boolean
  correctIndex: 0 | 1 | 2
  explanationCorrect: string
  /** the reason the chosen answer is wrong (null when correct, "not sure" or missing) */
  explanationChosen: string | null
}

function sealKey(secret?: string): Buffer {
  const s = secret ?? process.env.ACADEMY_SEAL_SECRET ?? process.env.IP_HASH_SALT ?? process.env.ACADEMY_ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY
  if (!s) {
    if (process.env.NODE_ENV === 'production') throw new Error('academy: no secret available to seal answer keys')
    return createHash('sha256').update('academy-seal|dev-only').digest()
  }
  return createHash('sha256').update(`academy-seal|${s}`).digest()
}

export function sealAnswerKey(key: AnswerKey, secret?: string): string {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', sealKey(secret), iv)
  const body = Buffer.concat([cipher.update(JSON.stringify(key), 'utf8'), cipher.final()])
  return Buffer.concat([iv, cipher.getAuthTag(), body]).toString('base64url')
}

/** Returns null for a token that is malformed, tampered with or sealed with another secret. */
export function openAnswerKey(token: string, secret?: string): AnswerKey | null {
  try {
    const raw = Buffer.from(token, 'base64url')
    if (raw.length < 29) return null
    const decipher = createDecipheriv('aes-256-gcm', sealKey(secret), raw.subarray(0, 12))
    decipher.setAuthTag(raw.subarray(12, 28))
    const json = Buffer.concat([decipher.update(raw.subarray(28)), decipher.final()]).toString('utf8')
    const k = JSON.parse(json) as AnswerKey
    return typeof k.id === 'string' && [0, 1, 2].includes(k.correctIndex) ? k : null
  } catch {
    return null
  }
}

/** Strips the key from a full question and seals it. */
export function toClientQuestion(q: Question, secret?: string): ClientQuestion {
  const { correctIndex, explanationCorrect, explanationWrong, ...rest } = q
  const sealed = sealAnswerKey({ id: q.id, correctIndex, explanationCorrect, explanationWrong: [0, 1, 2].map((i) => explanationWrong[i] ?? null) }, secret)
  return { ...rest, sealed }
}

/** choice: option index 0-2, or -1 for "not sure". */
export function judgeAnswer(key: AnswerKey, choice: number): AnswerVerdict {
  const correct = choice === key.correctIndex
  return {
    correct,
    correctIndex: key.correctIndex,
    explanationCorrect: key.explanationCorrect,
    explanationChosen: !correct && choice >= 0 && choice <= 2 ? (key.explanationWrong[choice] ?? null) : null,
  }
}

// ------------------------------------------------------------------------------------ open questions (new)
// Same idea for free-text / explain questions: prompt, rubric and model answer stay on the server inside an
// encrypted token; the browser returns the token with the written answer and the server grades it. The prompt is
// sealed too, so the browser cannot swap the question the grader sees. Tokens carry t:'open', so a multiple-choice
// token cannot be used for grading and the other way round.

export interface OpenAnswerKey {
  t: 'open'
  id: string
  format: OpenFormat
  prompt: string
  keyPoints: string[]
  modelAnswer: string
  /** programme language: grader feedback is written in it */
  language: string
}

export type ClientOpenQuestion = { id: string; topic: string; kind: 'lesson' | 'final'; format: OpenFormat; prompt: string; sealed: string }

export function sealOpenKey(key: OpenAnswerKey, secret?: string): string {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', sealKey(secret), iv)
  const body = Buffer.concat([cipher.update(JSON.stringify(key), 'utf8'), cipher.final()])
  return Buffer.concat([iv, cipher.getAuthTag(), body]).toString('base64url')
}

/** Returns null for a token that is malformed, tampered with, sealed with another secret or not an open-question token. */
export function openOpenKey(token: string, secret?: string): OpenAnswerKey | null {
  try {
    const raw = Buffer.from(token, 'base64url')
    if (raw.length < 29) return null
    const decipher = createDecipheriv('aes-256-gcm', sealKey(secret), raw.subarray(0, 12))
    decipher.setAuthTag(raw.subarray(12, 28))
    const k = JSON.parse(Buffer.concat([decipher.update(raw.subarray(28)), decipher.final()]).toString('utf8')) as OpenAnswerKey
    const ok = k.t === 'open' && typeof k.id === 'string' && typeof k.prompt === 'string' && Array.isArray(k.keyPoints) && k.keyPoints.length > 0
    return ok ? k : null
  } catch {
    return null
  }
}
