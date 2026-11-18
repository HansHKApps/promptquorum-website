// PromptQuorum Academy — client-side data model (docs/academy/SPEC.md section 6).
// Everything here lives in the visitor's browser only; the server stores nothing about learners.

import type { Lang } from '@/lib/i18n/constants'

export type AcademyLang = Lang

export const LEVELS = ['beginner', 'some', 'experienced'] as const
export type Level = (typeof LEVELS)[number]

export const TEST_MODES = ['none', 'final', 'per_lesson_and_final'] as const
export type TestMode = (typeof TEST_MODES)[number]

/** What the learner enters on the setup screen before a programme exists. */
export interface SetupDraft {
  subject: string
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  language: AcademyLang
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

export interface QuizResult {
  quizId: string
  answers: Record<string, number>
  correct: number
  total: number
  byTopic: Record<string, { correct: number; total: number }>
  takenAt: string
  /** the questions of this attempt, for the per-question review */
  questions?: Question[]
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
  quiz?: Question[]
}

export interface Programme {
  id: string
  createdAt: string
  language: AcademyLang
  subject: string
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  /** answers: question id -> chosen option index (-1 = "not sure") */
  diagnostic: { questions: Question[]; answers: Record<string, number>; gaps: string[]; estimatedLevel: Level }
  objectives: string[]
  lessons: Lesson[]
  testPlan: { finalQuestions: number; lessonQuizQuestions: number; testMinutes: number }
  finalTest?: Question[]
  progress: {
    currentLesson: number
    lessonStatus: Record<string, 'todo' | 'viewed' | 'done'>
    quizResults: QuizResult[]
    finalResult?: QuizResult
    /** every final-test attempt in order (retakes, SPEC 8) */
    finalAttempts?: QuizResult[]
    /** quiz in progress: id is a lesson id or "final"; answers by question id */
    activeQuiz?: { quizId: string; questions: Question[]; answers: Record<string, number> }
    secondsSpent: number
    /** active seconds per lesson id (capped, SPEC 6.1) */
    lessonSeconds?: Record<string, number>
    startedAt: string
    completedAt?: string
  }
  certificate?: { id: string; learnerName: string; issuedAt: string }
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
