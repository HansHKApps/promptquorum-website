// PromptQuorum Academy — zod schemas for (a) what the model must return and (b) what the browser may send.
// Model outputs go through structured outputs (output_config.format via zodOutputFormat); constraints the API
// cannot express (array lengths, number ranges) are checked again here in code (docs/academy/SPEC.md 7.1).

import { z } from 'zod'
import { isValidProgrammeLanguage } from './language'
import { ACADEMY_MINUTE_OPTIONS, ACADEMY_SUBJECT_MAX_CHARS, ACADEMY_SUBJECT_MIN_CHARS } from './config'
import { LEVELS, OPEN_FORMATS, TEST_FORMATS, TEST_MODES } from './types'

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

const languageSchema = z.string().max(80).refine(isValidProgrammeLanguage)
const subject = z.string().trim().min(ACADEMY_SUBJECT_MIN_CHARS).max(ACADEMY_SUBJECT_MAX_CHARS)
const minutes = z.number().int().refine((n) => (ACADEMY_MINUTE_OPTIONS as readonly number[]).includes(n))

export const diagnosticRequestSchema = z.object({
  subject,
  availableMinutes: minutes,
  selfLevel: z.enum(LEVELS),
  language: languageSchema,
})
export type DiagnosticRequest = z.infer<typeof diagnosticRequestSchema>

export const programmeRequestSchema = z.object({
  subject,
  availableMinutes: minutes,
  selfLevel: z.enum(LEVELS),
  testMode: z.enum(TEST_MODES),
  /** how tests ask; only used to budget answering time. Absent = multiple choice. */
  testFormat: z.enum(TEST_FORMATS).optional(),
  language: languageSchema,
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
  followUpQuestions: z
    .array(z.string())
    .describe('Exactly 3 short questions (under 15 words each) a learner might ask the tutor next about this lesson, written as the learner would ask them'),
})
export type LessonOutput = z.infer<typeof lessonOutputSchema>

export const lessonRequestSchema = z.object({
  subject,
  language: languageSchema,
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

// ---------------------------------------------------------------------------------------------- quizzes (Phase 4)

export const quizOutputSchema = z.object({
  questions: z.array(generatedQuestionSchema).describe('The requested number of questions, spread over the requested topics'),
})
export type QuizOutput = z.infer<typeof quizOutputSchema>

/** The verifier's answers: one per question, by number, choosing option 1, 2 or 3 (or 0 if none is defensible). */
export const verifyOutputSchema = z.object({
  answers: z.array(z.object({ n: z.number().int(), choice: z.number().int().describe('1, 2 or 3; 0 if no option is clearly correct') })),
})
export type VerifyOutput = z.infer<typeof verifyOutputSchema>

const sourceText = z.string().max(4000)

export const quizRequestSchema = z.object({
  kind: z.enum(['lesson', 'final']),
  subject,
  language: languageSchema,
  selfLevel: z.enum(LEVELS),
  availableMinutes: minutes,
  /** lesson quiz: one entry (that lesson); final test: every lesson, trimmed text */
  lessons: z
    .array(z.object({ title: z.string().max(200), topic: z.string().min(1).max(80), text: sourceText }))
    .min(1)
    .max(12),
  objectives: z.array(z.string().max(300)).max(8),
})
export type QuizRequest = z.infer<typeof quizRequestSchema>

// ------------------------------------------------------------------------------------------ answer check (F6)

export const answerRequestSchema = z.object({
  sealed: z.string().min(20).max(4000),
  /** option index 0-2, or -1 for "not sure" */
  choice: z.number().int().min(-1).max(2),
})
export type AnswerRequest = z.infer<typeof answerRequestSchema>

// ------------------------------------------------------------------- open formats: free text / explain (new)

/** One open question as the model writes it. keyPoints are the hidden rubric; modelAnswer is shown after grading. */
export const generatedOpenQuestionSchema = z.object({
  topic: z.string().describe('Short topic label (2-5 words); copy the exact topic label of the lesson the question is about'),
  prompt: z.string().describe('The question or task the learner answers in writing'),
  keyPoints: z.array(z.string()).describe('The hidden rubric: the distinct ideas a correct answer contains, each one short sentence stating a single idea from the source text'),
  modelAnswer: z.string().describe('A short model answer built only from the key points and the source text'),
})
export type GeneratedOpenQuestion = z.infer<typeof generatedOpenQuestionSchema>

export const openQuizOutputSchema = z.object({
  questions: z.array(generatedOpenQuestionSchema).describe('The requested number of open questions, spread over the requested topics'),
})
export type OpenQuizOutput = z.infer<typeof openQuizOutputSchema>

/** The checker's verdict per open question: answerable from the source text, and every key point supported by it. */
export const openVerifyOutputSchema = z.object({
  checks: z.array(
    z.object({
      n: z.number().int(),
      answerable: z.boolean().describe('true if the question can be answered from the source texts alone'),
      supported: z.array(z.boolean()).describe('one entry per key point, in order: true if the source texts state or directly imply it'),
    }),
  ),
})
export type OpenVerifyOutput = z.infer<typeof openVerifyOutputSchema>

export const openQuizRequestSchema = quizRequestSchema.extend({ format: z.enum(OPEN_FORMATS) })
export type OpenQuizRequest = z.infer<typeof openQuizRequestSchema>

/** What the grader returns: which key points the answer covers, in rubric order, plus short feedback. */
export const gradeOutputSchema = z.object({
  covered: z.array(z.boolean()).describe('one entry per key point, in order: true if the learner answer clearly expresses that idea'),
  contradicts: z.boolean().describe('true if the learner answer states something that contradicts a key point'),
  feedback: z.string().describe('1-2 sentences to the learner: what was good and what was missing, without repeating the whole model answer'),
})
export type GradeOutput = z.infer<typeof gradeOutputSchema>

export const OPEN_ANSWER_MAX_CHARS: Record<'free' | 'explain', number> = { free: 600, explain: 1500 }

export const gradeRequestSchema = z.object({
  sealed: z.string().min(20).max(8000),
  /** the learner's written answer; empty = "not sure" (scores 0 without a model call) */
  answer: z.string().max(OPEN_ANSWER_MAX_CHARS.explain),
})
export type GradeRequest = z.infer<typeof gradeRequestSchema>
