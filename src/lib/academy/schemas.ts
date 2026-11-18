// PromptQuorum Academy — zod schemas for (a) what the model must return and (b) what the browser may send.
// Model outputs go through structured outputs (output_config.format via zodOutputFormat); constraints the API
// cannot express (array lengths, number ranges) are checked again here in code (docs/academy/SPEC.md 7.1).

import { z } from 'zod'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { ACADEMY_MINUTE_OPTIONS, ACADEMY_SUBJECT_MAX_CHARS, ACADEMY_SUBJECT_MIN_CHARS } from './config'
import { LEVELS, TEST_MODES } from './types'

// ---------------------------------------------------------------------------------------------- model outputs

/** One three-answer question as the model writes it. The correct answer is ALWAYS options[0]; code shuffles. */
export const generatedQuestionSchema = z.object({
  topic: z.string().describe('Short topic label (2-5 words) this question checks; reuse the same label for questions on the same topic'),
  prompt: z.string().describe('The question. Tests understanding (why / when / which), not recall of a term'),
  correct: z.string().describe('The one correct answer'),
  wrong: z.array(z.string()).describe('Exactly two plausible but clearly wrong answers'),
  explanationCorrect: z.string().describe('1-2 sentences: why the correct answer is correct'),
  explanationWrong: z.array(z.string()).describe('Exactly two short reasons, in the same order as `wrong`'),
})
export type GeneratedQuestion = z.infer<typeof generatedQuestionSchema>

export const diagnosticOutputSchema = z.object({
  subjectSupported: z
    .boolean()
    .describe('true if the subject is about AI, software, computer hardware, smart home, home energy/solar or closely related technology'),
  subjectTitle: z.string().describe('The subject as a short, clean title in the programme language'),
  questions: z.array(generatedQuestionSchema).describe('Diagnostic questions, from basic to advanced; empty if subjectSupported is false'),
})
export type DiagnosticOutput = z.infer<typeof diagnosticOutputSchema>

export const programmeOutputSchema = z.object({
  objectives: z.array(z.string()).describe('3 to 8 learning objectives, each one sentence starting with a verb'),
  lessons: z
    .array(
      z.object({
        title: z.string(),
        topic: z.string().describe('Short topic label (2-5 words), used for per-topic scores'),
        estimatedMinutes: z.number().int().describe('Reading time in whole minutes'),
        objectiveIds: z.array(z.number().int()).describe('0-based indexes into objectives that this lesson serves (at least one)'),
        recap: z.boolean().describe('true when the learner already knows this topic and the lesson is only a short recap'),
      }),
    )
    .describe('3 to 12 lessons in learning order'),
})
export type ProgrammeOutput = z.infer<typeof programmeOutputSchema>

// ------------------------------------------------------------------------------------------- request bodies

const subject = z.string().trim().min(ACADEMY_SUBJECT_MIN_CHARS).max(ACADEMY_SUBJECT_MAX_CHARS)
const minutes = z.number().int().refine((n) => (ACADEMY_MINUTE_OPTIONS as readonly number[]).includes(n))

export const diagnosticRequestSchema = z.object({
  subject,
  availableMinutes: minutes,
  selfLevel: z.enum(LEVELS),
  language: z.enum(ALL_LANGS),
})
export type DiagnosticRequest = z.infer<typeof diagnosticRequestSchema>

export const programmeRequestSchema = z.object({
  subject,
  availableMinutes: minutes,
  selfLevel: z.enum(LEVELS),
  testMode: z.enum(TEST_MODES),
  language: z.enum(ALL_LANGS),
  /** Only the per-topic summary of the quick check is sent, never the individual answers. */
  diagnostic: z.object({
    estimatedLevel: z.enum(LEVELS),
    gaps: z.array(z.string().max(80)).max(12),
    known: z.array(z.string().max(80)).max(12),
  }),
})
export type ProgrammeRequest = z.infer<typeof programmeRequestSchema>

// -------------------------------------------------------------------------------------------- lessons (Phase 3)

export const lessonOutputSchema = z.object({
  sections: z
    .array(z.object({ heading: z.string(), body: z.string().describe('Markdown: short paragraphs, lists, **bold**. No links, no URLs, no headings') }))
    .describe('3 to 6 short sections in teaching order'),
  furtherReading: z
    .array(z.object({ ref: z.number().int().describe('Number of a PromptQuorum page from <material>') }))
    .describe('0 to 3 pages from <material> that are worth reading next; empty if none fits'),
})
export type LessonOutput = z.infer<typeof lessonOutputSchema>

export const lessonRequestSchema = z.object({
  subject,
  language: z.enum(ALL_LANGS),
  selfLevel: z.enum(LEVELS),
  objectives: z.array(z.string().max(300)).min(1).max(8),
  lesson: z.object({
    title: z.string().min(1).max(200),
    topic: z.string().min(1).max(80),
    estimatedMinutes: z.number().int().min(1).max(120),
    objectiveIds: z.array(z.number().int().min(0).max(7)).max(8),
    recap: z.boolean().optional(),
  }),
  index: z.number().int().min(0).max(11),
  /** titles of the other lessons, so this one does not repeat them */
  otherTitles: z.array(z.string().max(200)).max(12),
})
export type LessonRequest = z.infer<typeof lessonRequestSchema>
