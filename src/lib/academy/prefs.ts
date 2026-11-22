// PromptQuorum Academy — opt-in "Remember these choices" (time, level, test settings). Browser only, never sent anywhere.
// Written only while the learner has ticked the box on the setup form; untick or "Delete my data" removes it.

import { ACADEMY_MINUTE_OPTIONS, ACADEMY_PREFS_KEY } from './config'
import { LEVELS, TEST_DIFFICULTIES, TEST_FORMATS, TEST_MODES, type Level, type TestDifficulty, type TestFormat, type TestMode } from './types'

export interface SetupPrefs {
  availableMinutes: number
  selfLevel: Level
  testMode: TestMode
  testFormat: TestFormat
  testDifficulty: TestDifficulty
  choiceOptions: number
}

const oneOf = <T extends string>(list: readonly T[], v: unknown): v is T => typeof v === 'string' && (list as readonly string[]).includes(v)

/** Validates what was stored; anything unexpected means "no preferences". */
export function parsePrefs(raw: unknown): SetupPrefs | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  if (typeof r.availableMinutes !== 'number' || !(ACADEMY_MINUTE_OPTIONS as readonly number[]).includes(r.availableMinutes)) return null
  if (!oneOf(LEVELS, r.selfLevel) || !oneOf(TEST_MODES, r.testMode) || !oneOf(TEST_FORMATS, r.testFormat) || !oneOf(TEST_DIFFICULTIES, r.testDifficulty)) return null
  const n = r.choiceOptions
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 3 || n > 6) return null
  return { availableMinutes: r.availableMinutes, selfLevel: r.selfLevel, testMode: r.testMode, testFormat: r.testFormat, testDifficulty: r.testDifficulty, choiceOptions: n }
}

export function loadPrefs(): SetupPrefs | null {
  try {
    const text = window.localStorage.getItem(ACADEMY_PREFS_KEY)
    return text ? parsePrefs(JSON.parse(text)) : null
  } catch {
    return null
  }
}

export function savePrefs(p: SetupPrefs): void {
  try {
    window.localStorage.setItem(ACADEMY_PREFS_KEY, JSON.stringify(p))
  } catch {
    /* storage blocked: the choices are simply not remembered */
  }
}

export function clearPrefs(): void {
  try {
    window.localStorage.removeItem(ACADEMY_PREFS_KEY)
  } catch {
    /* blocked */
  }
}
