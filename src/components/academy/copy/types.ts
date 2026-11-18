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

  // Quick check (Phase 1 placeholder)
  diagnosticTitle: string
  diagnosticComing: string
  summarySubject: string
  summaryTime: string
  summaryLevel: string
  summaryTests: string
  summaryLanguage: string
  changeSetup: string

  // Privacy strip
  privacyNote: string
  deleteData: string
  deleteConfirm: string
  dataDeleted: string
}
