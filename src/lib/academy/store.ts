// PromptQuorum Academy — browser storage. One JSON object under ACADEMY_STORAGE_KEY with a version field.
// Storage can be missing or throw (private mode, blocked site data): every access is wrapped and the tool keeps
// working in memory. Nothing here is ever sent to a server.

import { z } from 'zod'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { ACADEMY_MINUTE_OPTIONS, ACADEMY_STORAGE_KEY, ACADEMY_SUBJECT_MAX_CHARS } from './config'
import { ACADEMY_VIEWS, LEVELS, TEST_MODES, type AcademyLang, type AcademyState, type SetupDraft } from './types'

export const ACADEMY_STATE_VERSION = 1 as const

/** Minimal storage surface, so tests can pass a fake instead of window.localStorage. */
export interface KeyValueStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

const draftSchema = z.object({
  subject: z.string().max(ACADEMY_SUBJECT_MAX_CHARS),
  availableMinutes: z.number().int().refine((n) => (ACADEMY_MINUTE_OPTIONS as readonly number[]).includes(n)),
  selfLevel: z.enum(LEVELS),
  testMode: z.enum(TEST_MODES),
  language: z.enum(ALL_LANGS),
  updatedAt: z.string(),
})

const viewSchema = z.enum(ACADEMY_VIEWS)

const questionSchema = z.object({
  id: z.string(),
  topic: z.string(),
  kind: z.enum(['diagnostic', 'lesson', 'final']),
  prompt: z.string(),
  options: z.tuple([z.string(), z.string(), z.string()]),
  correctIndex: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  explanationCorrect: z.string(),
  explanationWrong: z.array(z.string().optional().nullable()).length(3),
})

const quickCheckSchema = z.object({
  forSubject: z.string(),
  subjectTitle: z.string(),
  questions: z.array(questionSchema),
  answers: z.record(z.string(), z.number().int()),
})

export function emptyAcademyState(): AcademyState {
  return { version: ACADEMY_STATE_VERSION, view: 'setup' }
}

/**
 * Turns whatever is stored into a valid current-version state. Unknown versions and unreadable data start fresh
 * instead of crashing; a broken draft is dropped on its own. The programme passes through untouched until
 * Phase 2 adds its schema.
 */
export function migrateAcademyState(raw: unknown): AcademyState {
  if (!raw || typeof raw !== 'object') return emptyAcademyState()
  const r = raw as { version?: unknown; view?: unknown; draft?: unknown; quickCheck?: unknown; programme?: unknown }
  if (r.version !== ACADEMY_STATE_VERSION) return emptyAcademyState()
  const state = emptyAcademyState()
  const draft = draftSchema.safeParse(r.draft)
  if (draft.success) state.draft = draft.data
  const quickCheck = quickCheckSchema.safeParse(r.quickCheck)
  if (quickCheck.success) state.quickCheck = quickCheck.data as AcademyState['quickCheck']
  const programme = r.programme as AcademyState['programme'] | undefined
  if (programme && typeof programme === 'object' && Array.isArray(programme.lessons) && Array.isArray(programme.objectives)) state.programme = programme
  // A screen needs the data it shows; otherwise fall back to setup.
  const view = viewSchema.safeParse(r.view)
  if (view.success) {
    const ok = view.data === 'setup' || (view.data === 'diagnostic' && state.draft) || ((view.data === 'programme' || view.data === 'lesson') && state.programme)
    if (ok) state.view = view.data
  }
  return state
}

function browserStorage(): KeyValueStorage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage
  } catch {
    return null
  }
}

export function loadAcademyState(storage: KeyValueStorage | null = browserStorage()): AcademyState {
  if (!storage) return emptyAcademyState()
  try {
    const text = storage.getItem(ACADEMY_STORAGE_KEY)
    return text ? migrateAcademyState(JSON.parse(text)) : emptyAcademyState()
  } catch {
    return emptyAcademyState()
  }
}

/** False when the browser refused the write (the tool then tells the learner progress is not saved). */
export function saveAcademyState(state: AcademyState, storage: KeyValueStorage | null = browserStorage()): boolean {
  if (!storage) return false
  try {
    storage.setItem(ACADEMY_STORAGE_KEY, JSON.stringify(state))
    return true
  } catch {
    return false
  }
}

/** "Delete my data": removes everything Academy stored in this browser. */
export function clearAcademyState(storage: KeyValueStorage | null = browserStorage()): boolean {
  if (!storage) return false
  try {
    storage.removeItem(ACADEMY_STORAGE_KEY)
    return true
  } catch {
    return false
  }
}

export function defaultDraft(language: AcademyLang): SetupDraft {
  return { subject: '', availableMinutes: 60, selfLevel: 'beginner', testMode: 'final', language, updatedAt: new Date(0).toISOString() }
}
