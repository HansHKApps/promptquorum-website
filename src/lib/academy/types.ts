// PromptQuorum Academy — client-side data model (docs/academy/SPEC.md section 6).
// Everything here lives in the visitor's browser only; the server stores nothing about learners.

import type { Lang } from '@/lib/i18n/constants'

export type AcademyLang = Lang

export const LEVELS = ['beginner', 'some', 'experienced'] as const
export type Level = (typeof LEVELS)[number]

export const TEST_MODES = ['none', 'final', 'per_lesson_and_final'] as const
export type TestMode = (typeof TEST_MODES)[number]

/**
 * HOW a test asks (TEST_MODES says WHEN it is taken). The learner picks a default at setup and can change it when
 * a quiz or the final test opens. choice = three-answer multiple choice (answer key sealed on the server);
 * free = a short written answer; explain = the learner explains a concept in their own words.
 * free and explain are graded by AI against a hidden rubric of key points (open-quiz.ts, grade.ts).
 */
export const TEST_FORMATS = ['choice', 'free', 'explain'] as const
export type TestFormat = (typeof TEST_FORMATS)[number]
export const OPEN_FORMATS = ['free', 'explain'] as const
export type OpenFormat = (typeof OPEN_FORMATS)[number]

/** What the learner enters on the setup screen before a programme exists. */
export interface SetupDraft {
  subject: string
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  /** default test format; stored drafts from before this existed load as 'choice' */
  testFormat: TestFormat
  /** a site-language code, or a custom language (src/lib/academy/language.ts) */
  language: string
  /** opt-in "Save my progress in this browser"; false = nothing is written to localStorage (F3) */
  saveProgress: boolean
  updatedAt: string
}

export interface Question {
  id: string
  topic: string
  kind: 'diagnostic' | 'lesson' | 'final'
  prompt: string
  options: [string, string, string]
  correctIndex: 0 | 1 | 2
  explanationCorrect: string
  explanationWrong: [string?, string?, string?]
}

/**
 * A lesson-quiz or final-test question as the browser holds it (QA audit F6): the correct answer and the
 * explanations stay on the server until the question is answered. `sealed` is the opaque key the server checks;
 * `reveal` is filled from the server's verdict after the learner answered.
 */
export interface QuizQuestion extends Omit<Question, 'correctIndex' | 'explanationCorrect' | 'explanationWrong'> {
  sealed: string
  reveal?: { correctIndex: 0 | 1 | 2; explanationCorrect: string; explanationChosen?: string | null }
}

/** What the server reveals after an open answer was graded. `credit` is 0, 0.5 or 1. */
export interface OpenReveal {
  credit: 0 | 0.5 | 1
  feedback: string
  covered: string[]
  missed: string[]
  modelAnswer: string
}

/**
 * A free-text or explain-the-concept question as the browser holds it. The rubric (key points) and the model answer
 * stay on the server inside `sealed` until the answer was graded (same idea as QuizQuestion).
 */
export interface OpenQuestion {
  id: string
  topic: string
  kind: 'lesson' | 'final'
  format: OpenFormat
  prompt: string
  sealed: string
  reveal?: OpenReveal
}

export interface QuizResult {
  quizId: string
  answers: Record<string, number>
  /** number of correct answers; with open formats each answer earns 0, 0.5 or 1, so this can end in .5 */
  correct: number
  total: number
  byTopic: Record<string, { correct: number; total: number }>
  takenAt: string
  /** the questions of this attempt, for the per-question review */
  questions?: QuizQuestion[]
  /** open-format attempt: questions with their graded reveal, and what the learner wrote (browser only) */
  openQuestions?: OpenQuestion[]
  openAnswers?: Record<string, string>
}

export interface Lesson {
  id: string
  title: string
  topic: string
  estimatedMinutes: number
  objectiveIds: number[]
  /** true when the quick check showed the learner already knows this topic: a short recap only */
  recap?: boolean
  /** empty until the lesson is generated on first open (Phase 3) */
  sections: { heading: string; body: string }[]
  furtherReading: { title: string; url: string; source: 'promptquorum' | 'external' }[]
  /** three suggested tutor questions, generated with the lesson (tutor function 5) */
  followUpQuestions?: string[]
  quiz?: Question[]
}

export interface Programme {
  id: string
  createdAt: string
  language: string
  subject: string
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  /** default format for tests; absent in programmes stored before formats existed = 'choice' */
  testFormat?: TestFormat
  /** answers: question id -> chosen option index (-1 = "not sure") */
  diagnostic: { questions: Question[]; answers: Record<string, number>; gaps: string[]; estimatedLevel: Level }
  objectives: string[]
  lessons: Lesson[]
  testPlan: { finalQuestions: number; lessonQuizQuestions: number; testMinutes: number }
  finalTest?: QuizQuestion[]
  progress: {
    currentLesson: number
    lessonStatus: Record<string, 'todo' | 'viewed' | 'done'>
    quizResults: QuizResult[]
    finalResult?: QuizResult
    /** every final-test attempt in order (retakes, SPEC 8) */
    finalAttempts?: QuizResult[]
    /** quiz in progress: id is a lesson id or "final"; answers by question id */
    activeQuiz?: {
      quizId: string
      questions: QuizQuestion[]
      answers: Record<string, number>
      /** chosen when the test opens; undefined = the format picker is still showing (or a quiz stored before formats = choice) */
      format?: TestFormat
      /** open formats: questions and what was written so far, by question id */
      openQuestions?: OpenQuestion[]
      openAnswers?: Record<string, string>
    }
    /** tutor use for the caps (SPEC 8.5): rephrase buttons count 0.5; `perLesson` is keyed by lesson id or "final" */
    tutor?: { used: number; perLesson: Record<string, number> }
    secondsSpent: number
    /** active seconds per lesson id (capped, SPEC 6.1) */
    lessonSeconds?: Record<string, number>
    startedAt: string
    completedAt?: string
  }
  certificate?: { id: string; learnerName: string; issuedAt: string; /** registered for online verification: the sequential number */ number?: number }
}

/** Screens of the Academy tool. They are views inside /academy, not separate URLs (like the Ask Hans window). */
export const ACADEMY_VIEWS = ['setup', 'diagnostic', 'programme', 'lesson', 'quiz', 'results'] as const
export type AcademyView = (typeof ACADEMY_VIEWS)[number]

/** The quick check in progress (before a programme exists). */
export interface QuickCheck {
  /** the draft it was generated for; a changed setup throws it away */
  forSubject: string
  subjectTitle: string
  questions: Question[]
  /** question id -> chosen option index, -1 = "not sure" */
  answers: Record<string, number>
}

/** Root object stored under ACADEMY_STORAGE_KEY. */
export interface AcademyState {
  version: 1
  view: AcademyView
  draft?: SetupDraft
  quickCheck?: QuickCheck
  programme?: Programme
}

/** A suggested subject on the setup screen (built on the server from the directory and content hubs). */
export interface TopicSuggestion {
  key: string
  label: string
  hint?: string
}
