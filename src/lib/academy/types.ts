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
}

export interface Lesson {
  id: string
  title: string
  topic: string
  estimatedMinutes: number
  objectiveIds: number[]
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
  diagnostic: { questions: Question[]; answers: Record<string, string>; gaps: string[]; estimatedLevel: Level }
  objectives: string[]
  lessons: Lesson[]
  finalTest?: Question[]
  progress: {
    currentLesson: number
    lessonStatus: Record<string, 'todo' | 'viewed' | 'done'>
    quizResults: QuizResult[]
    finalResult?: QuizResult
    secondsSpent: number
    startedAt: string
    completedAt?: string
  }
  certificate?: { id: string; learnerName: string; issuedAt: string }
}

/** Screens of the Academy tool. They are views inside /academy, not separate URLs (like the Ask Hans window). */
export type AcademyView = 'setup' | 'diagnostic'

/** Root object stored under ACADEMY_STORAGE_KEY. */
export interface AcademyState {
  version: 1
  view: AcademyView
  draft?: SetupDraft
  programme?: Programme
}

/** A suggested subject on the setup screen (built on the server from the directory and content hubs). */
export interface TopicSuggestion {
  key: string
  label: string
  hint?: string
}
