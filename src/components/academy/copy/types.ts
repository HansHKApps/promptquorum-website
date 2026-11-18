// PromptQuorum Academy — the shape of one language's UI texts. en.ts is the source; the other eight are
// translations of it (docs/geo-translation.md per-language rules). Keys are code-side identifiers: never translate them.

import type { Level, TestMode } from '@/lib/academy/types'
import type { AcademyTopicHub } from '@/lib/academy/topics'

export interface AcademyCopy {
  // Page (server-rendered, indexable)
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  howTitle: string
  /** exactly 7 steps: Choose, Diagnose, Personalize, Learn, Interact, Test, Certify */
  steps: { name: string; text: string }[]
  disclaimer: string
  /** labels for the content hubs offered as subjects */
  hubs: Record<AcademyTopicHub, string>

  // Setup screen
  subjectLabel: string
  subjectPlaceholder: string
  subjectError: string
  suggestions: string
  timeLegend: string
  /** "90 min", "2 h": receives minutes, returns the button label */
  minutes: (m: number) => string
  levelLegend: string
  levels: Record<Level, { label: string; hint: string }>
  testsLegend: string
  tests: Record<TestMode, { label: string; hint: string }>
  languageLabel: string
  submit: string
  restored: string
  startNew: string
  storageBlocked: string
  loading: string

  // Quick check
  diagnosticTitle: string
  diagnosticIntro: string
  /** "Question 2 of 6" */
  questionOf: (i: number, n: number) => string
  notSure: string
  preparingQuestions: string
  preparingProgramme: string
  changeSetup: string

  // Errors (shown with a retry button)
  errorGeneric: string
  errorRate: string
  errorUnsupported: string
  errorUnavailable: string
  retry: string

  // Programme overview
  programmeTitle: string
  objectivesTitle: string
  lessonsTitle: string
  recapBadge: string
  testPlanNone: string
  testPlanFinal: (finalQuestions: number) => string
  testPlanPerLesson: (lessonQuestions: number, finalQuestions: number) => string
  /** receives the formatted duration, e.g. "1 h" or "90 min" */
  totalTime: (duration: string) => string
  startLesson: string
  startOver: string
  continueLesson: (n: number) => string
  statusDone: string
  /** receives the formatted duration */
  timeSpent: (duration: string) => string
  lessonsDoneTitle: string
  testsComing: string
  programmeComplete: string

  // Lesson screen
  lessonOf: (i: number, n: number) => string
  preparingLesson: string
  lessonObjectives: string
  backToProgramme: string
  doneNext: string
  doneLast: string
  furtherReading: string
  fromPromptQuorum: string

  // Privacy strip
  privacyNote: string
  deleteData: string
  deleteConfirm: string
  dataDeleted: string
}
