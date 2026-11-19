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
  /** saved progress found in this browser; receives the subject */
  savedFound: (subject: string) => string
  continueSaved: string
  saveProgressLabel: string
  saveProgressHint: string
  /** short label on AI-generated content (lessons, quizzes, explanations) */
  aiLabel: string
  ageNotice: string
  personalDataWarning: string
  /** "9 min lessons + 8 min test": receives lesson minutes and test minutes */
  testSplit: (lessonMinutes: number, testMinutes: number) => string
  startNew: string
  storageBlocked: string
  loading: string

  // Window (floating tool window like Ask Hans)
  tagline: string
  windowClose: string
  windowMaximize: string
  windowRestore: string
  /** tooltip / accessible name of the floating launcher pill */
  launcherTitle: string
  /** button on the /academy page that opens the window */
  openAcademy: string
  /** usage counter on the entrance page */
  programmesCreated: (n: number) => string

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

  // Quizzes and results
  lessonQuizTitle: (n: number) => string
  finalTestTitle: string
  preparingQuiz: string
  correctFeedback: string
  wrongFeedback: string
  nextQuestion: string
  seeResult: string
  quizScore: (correct: number, total: number) => string
  continueLessons: string
  continueQuiz: string
  startFinalTest: string
  seeResults: string
  resultsTitle: string
  overallScore: (percent: number) => string
  passedText: (mark: number) => string
  notPassedText: (mark: number) => string
  topicScores: string
  weakTopic: string
  weakTopicsHint: string
  reviewAnswers: string
  yourAnswer: string
  correctAnswer: string
  retakeFinal: string
  attemptOf: (n: number) => string
  downloadCertificate: string
  certNameLabel: string
  certNameHint: string
  certNeedName: string
  certNeedLessons: (done: number, total: number) => string
  certNeedQuizzes: string
  certCreating: string
  certError: string
  /** printed on the PDF, in the programme language */
  cert: {
    title: string
    awardedTo: string
    nameNote: string
    forProgramme: string
    objectives: string
    topics: string
    started: string
    completed: string
    learningTime: string
    tests: string
    overall: string
    topicScores: string
    passed: (mark: number) => string
    id: string
    issued: string
    /** mandatory statement (SPEC 10): learning certificate, not an externally accredited qualification */
    disclaimer: string
    aiNote: string
    notFor: string
    idNote: string
  }

  // Privacy strip
  privacyNote: string
  deleteData: string
  deleteConfirm: string
  dataDeleted: string
}
