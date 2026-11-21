// PromptQuorum Academy — one structured generation with validation and a single retry (docs/academy/SPEC.md 7.1).
// The model answers through structured outputs (output_config.format from a zod schema); the result is then checked
// against the business rules in `validate`. On failure the request is repeated once with the problem appended;
// a second failure is reported to the caller, which shows the learner a friendly retry message.
// Logs token usage and failure reasons only, never learner text.

import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import type { z } from 'zod'

/** Same model family and default as Ask Hans; override with ACADEMY_MODEL. */
export const ACADEMY_DEFAULT_MODEL = 'claude-haiku-5-5'

export class AcademyGenerationError extends Error {
  constructor(
    message: string,
    readonly code: 'invalid' | 'refused' | 'truncated',
  ) {
    super(message)
  }
}

/** The part of the SDK client this module uses; tests pass a fake. */
export interface ParseClient {
  messages: { parse: Anthropic['messages']['parse'] }
}

export interface GenerateArgs<S extends z.ZodType> {
  client: ParseClient
  label: string
  system: string
  user: string
  schema: S
  maxTokens: number
  /** Business rules beyond the schema. Return problems (empty = valid) and optionally a cleaned value. */
  validate?: (value: z.infer<S>) => { problems: string[]; value?: z.infer<S> }
  /** After the second schema-valid answer still breaks a rule: repair it (return null if it cannot be repaired). */
  salvage?: (value: z.infer<S>) => z.infer<S> | null
  signal?: AbortSignal
}

export interface GenerateResult<T> {
  value: T
  attempts: number
  /** true when the value is a repaired version of an answer that broke a rule twice */
  salvaged: boolean
  usage: { input: number; output: number; cacheRead: number }
}

export async function generateStructured<S extends z.ZodType>(args: GenerateArgs<S>): Promise<GenerateResult<z.infer<S>>> {
  const model = process.env.ACADEMY_MODEL || ACADEMY_DEFAULT_MODEL
  const usage = { input: 0, output: 0, cacheRead: 0 }
  let feedback = ''
  let lastProblem = ''
  let lastSchemaValid: z.infer<S> | undefined
  let maxTokens = args.maxTokens

  for (let attempt = 1; attempt <= 2; attempt++) {
    const started = Date.now()
    let res: Awaited<ReturnType<typeof args.client.messages.parse>> | null = null
    try {
      res = await args.client.messages.parse(
        {
          model,
          max_tokens: maxTokens,
          // The system prompt is identical for every learner, so it is cached; per-request data is in the user turn.
          system: [{ type: 'text', text: args.system, cache_control: { type: 'ephemeral' } }],
          messages: [{ role: 'user', content: feedback ? `${args.user}\n\n${feedback}` : args.user }],
          output_config: { effort: 'medium', format: zodOutputFormat(args.schema) },
        },
        { signal: args.signal },
      )
    } catch (err) {
      // The SDK throws (instead of returning stop_reason "max_tokens") when the JSON was cut off mid-string. Thinking
      // tokens count toward max_tokens, so a long think leaves too little room for the text. Treat it as "cut off":
      // retry once with a larger budget. Anything else (timeouts, API errors) still propagates.
      if (!(err instanceof Error) || !/Failed to parse structured output/i.test(err.message)) throw err
    }
    if (res) {
      usage.input += res.usage?.input_tokens ?? 0
      usage.output += res.usage?.output_tokens ?? 0
      usage.cacheRead += res.usage?.cache_read_input_tokens ?? 0
    }

    let problems: string[]
    let value: z.infer<S> | undefined
    if (!res) {
      problems = ['The answer was cut off. Write shorter text so the whole JSON fits.']
      maxTokens = Math.min(Math.round(maxTokens * 1.6), 16000)
    } else if (res.stop_reason === 'refusal') {
      logUsage(args.label, model, attempt, usage, Date.now() - started, 'refused')
      throw new AcademyGenerationError(`${args.label}: refused`, 'refused')
    } else if (res.stop_reason === 'max_tokens') {
      problems = ['The answer was cut off. Write shorter text so the whole JSON fits.']
      maxTokens = Math.min(Math.round(maxTokens * 1.6), 16000)
    } else {
      // The SDK validates against the schema; parsed_output is null when that failed.
      const parsed = args.schema.safeParse(res.parsed_output)
      if (!parsed.success) {
        problems = parsed.error.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`)
      } else {
        lastSchemaValid = parsed.data
        const checked = args.validate?.(parsed.data) ?? { problems: [] }
        problems = checked.problems
        value = checked.value ?? parsed.data
      }
    }

    logUsage(args.label, model, attempt, usage, Date.now() - started, problems.length ? `invalid: ${problems.slice(0, 3).join(' | ')}` : 'ok')
    if (!problems.length && value !== undefined) return { value, attempts: attempt, salvaged: false, usage }
    lastProblem = problems.join('; ')
    feedback = `Your previous answer did not meet these requirements, fix them:\n- ${problems.slice(0, 8).join('\n- ')}`
  }

  if (args.salvage && lastSchemaValid !== undefined) {
    const repaired = args.salvage(lastSchemaValid)
    if (repaired !== null) {
      console.log('[academy] generation', JSON.stringify({ label: args.label, result: 'salvaged' }))
      return { value: repaired, attempts: 2, salvaged: true, usage }
    }
  }
  const code = /cut off/.test(lastProblem) ? 'truncated' : 'invalid'
  throw new AcademyGenerationError(`${args.label}: invalid after 2 attempts (${lastProblem.slice(0, 300)})`, code)
}

function logUsage(label: string, model: string, attempt: number, usage: GenerateResult<unknown>['usage'], ms: number, result: string) {
  // Operational metadata only (SPEC 11): no subject, no answers, no question text.
  console.log('[academy] generation', JSON.stringify({ label, model, attempt, ms, result: result.slice(0, 300), ...usage }))
}
