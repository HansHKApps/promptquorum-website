// PromptQuorum Academy — turning generated questions into Question objects (docs/academy/SPEC.md 7.4).
// The model always puts the correct answer first; the position the learner sees is chosen here with a
// cryptographic random number, never by the model.

import { randomInt, randomUUID } from 'node:crypto'
import type { GeneratedQuestion } from './schemas'
import type { Question } from './types'

/** Problems with one generated question (empty = fine). Used by every quiz kind. */
export function questionProblems(q: GeneratedQuestion, i: number): string[] {
  const p: string[] = []
  const at = `questions.${i}`
  if (q.wrong.length !== 2) p.push(`${at}.wrong must have exactly 2 entries`)
  if (q.explanationWrong.length !== 2) p.push(`${at}.explanationWrong must have exactly 2 entries`)
  const options = [q.correct, ...q.wrong].map((o) => o.trim().toLowerCase())
  if (options.some((o) => !o)) p.push(`${at}: empty answer option`)
  if (new Set(options).size !== options.length) p.push(`${at}: answer options must all differ`)
  if (options.some((o) => /\b(all|none) of the above\b/.test(o))) p.push(`${at}: no "all/none of the above"`)
  if (!q.prompt.trim() || !q.explanationCorrect.trim() || !q.topic.trim()) p.push(`${at}: prompt, topic and explanationCorrect are required`)
  return p
}

/** `rand(n)` returns 0..n-1; injectable so tests can check the distribution. */
export function toQuestion(q: GeneratedQuestion, kind: Question['kind'], rand: (n: number) => number = (n) => randomInt(n)): Question {
  const correctIndex = rand(3) as 0 | 1 | 2
  const options: string[] = [q.wrong[0], q.wrong[1]]
  const explanationWrong: (string | undefined)[] = [q.explanationWrong[0], q.explanationWrong[1]]
  options.splice(correctIndex, 0, q.correct)
  explanationWrong.splice(correctIndex, 0, undefined)
  return {
    id: randomUUID(),
    topic: q.topic.trim(),
    kind,
    prompt: q.prompt.trim(),
    options: options as [string, string, string],
    correctIndex,
    explanationCorrect: q.explanationCorrect.trim(),
    explanationWrong: explanationWrong as [string?, string?, string?],
  }
}
