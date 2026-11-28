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
/** How demanding the questions are (owner decision 2026-11-21). Set on the setup screen, changeable per test. */
export const TEST_DIFFICULTIES = ['easy', 'medium', 'hard'] as const
export type TestDifficulty = (typeof TEST_DIFFICULTIES)[number]
export const OPEN_FORMATS = ['free', 'explain'] as const
export type OpenFormat = (typeof OPEN_FORMATS)[number]

/**
 * The setup lines the learner must choose themselves, every time (owner decision 2026-11-22: a programme must never
 * start on values the learner did not pick). A line counts as chosen once the learner clicked it, or when the
 * opt-in "Remember these choices" filled it from the learner's own earlier choice.
 */
export const SETUP_FIELDS = ['time', 'level', 'tests', 'format', 'difficulty', 'options'] as const
export type SetupField = (typeof SETUP_FIELDS)[number]

/** What the learner enters on the setup screen before a programme exists. */
export interface SetupDraft {
  subject: string
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  /** default test format; stored drafts from before this existed load as 'choice' */
  testFormat: TestFormat
  /** question difficulty; stored drafts from before this existed load as 'medium' */
  testDifficulty: TestDifficulty
  /** a site-language code, or a custom language (src/lib/academy/language.ts) */
  language: string
  /** answer options per multiple-choice test question, 3 to 6; stored drafts from before this existed load as 3 */
  choiceOptions: number
  /** opt-in "Save my progress in this browser"; false = nothing is written to localStorage (F3) */
  saveProgress: boolean
  /** the lines the learner has chosen; undefined (a draft stored before this existed) = all chosen */
  picked?: SetupField[]
  updatedAt: string
}

export interface Question {
  id: string
  topic: string
  kind: 'diagnostic' | 'lesson' | 'final'
  prompt: string
  /** 3 to 6 answer options (3 for the quick check; the learner picks the count for tests) */
  options: string[]
  correctIndex: number
  explanationCorrect: string
  explanationWrong: (string | undefined)[]
}

/**
 * A lesson-quiz or final-test question as the browser holds it (QA audit F6): the correct answer and the
 * explanations stay on the server until the question is answered. `sealed` is the opaque key the server checks;
 * `reveal` is filled from the server's verdict after the learner answered.
 */
export interface QuizQuestion extends Omit<Question, 'correctIndex' | 'explanationCorrect' | 'explanationWrong'> {
  sealed: string
  reveal?: { correctIndex: number; explanationCorrect: string; explanationChosen?: string | null }
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
  /** one or two sentences on what the lesson covers, shown when the learner opens the topic on the overview; absent in older programmes */
  summary?: string
  /** the learner's own wish for this lesson (fine-tuning on the overview); stays in this browser until the lesson is requested */
  learnerNote?: string
  /** the learner pressed "Confirm" on the topic */
  confirmed?: boolean
  /** the note this lesson text was written with; differs from learnerNote = offer to rewrite the lesson */
  noteUsed?: string
  /** empty until the lesson is generated on first open (Phase 3) */
  sections: { heading: string; body: string }[]
  furtherReading: { title: string; url: string; source: 'promptquorum' | 'external' }[]
  /** three suggested tutor questions, generated with the lesson (tutor function 5) */
  followUpQuestions?: string[]
  quiz?: Question[]
}

/** One finished AI answer from the tutor or a section's magic wand, kept so it can be reread. Stays in this browser. */
export interface SavedAnswer {
  source: 'tutor' | 'wand'
  /** wand only: the lesson section the answer belongs to */
  sectionIndex?: number
  question: string
  answer: string
  sources?: { title: string; url: string; web?: boolean }[]
  at: string
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
  /** question difficulty; absent in programmes stored before this existed = 'medium' */
  testDifficulty?: TestDifficulty
  /** answer options per multiple-choice test question (3 to 6); absent = 3 */
  choiceOptions?: number
  /** answers: question id -> chosen option index (-1 = "not sure") */
  diagnostic: { questions: Question[]; answers: Record<string, number>; gaps: string[]; estimatedLevel: Level }
  objectives: string[]
  lessons: Lesson[]
  testPlan: { finalQuestions: number; lessonQuizQuestions: number; testMinutes: number }
  finalTest?: QuizQuestion[]
  /** free line under the lessons: a wish for the whole programme, handed to every lesson written after it was saved */
  freeWish?: string
  /** the learner's own notes per lesson section (magic wand), key `<lesson id>:<section index>`; stays in this browser */
  notes?: Record<string, string>
  /** saved AI answers by lesson id, for rereading; absent in programmes stored before they were saved */
  aiAnswers?: Record<string, SavedAnswer[]>
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
    /** active seconds in tests, keyed by quiz id (a lesson id or "final"); counted in `secondsSpent` too */
    testSeconds?: Record<string, number>
    /** working periods: a new one starts with the first action after more than a minute without one */
    sessions?: number
    startedAt: string
    completedAt?: string
  }
  certificate?: { id: string; learnerName: string; issuedAt: string; /** registered for online verification: the sequential number */ number?: number }
}

/** Screens of the Academy tool. They are views inside /academy, not separate URLs (like the Ask Hans window). */
export const ACADEMY_VIEWS = ['setup', 'diagnostic', 'programme', 'lesson', 'quiz', 'results', 'cabinet'] as const
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
