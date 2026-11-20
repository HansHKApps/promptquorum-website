// PromptQuorum Academy — the programme language. One of the nine site languages (plain code) or any other
// language the learner names ("custom:<code>:<rtl 0|1>:<English name>"). The model writes all learning content in
// that language; the interface stays in the page language. Browser-safe: no server imports.

import { ALL_LANGS, getLangDir, type Lang } from '@/lib/i18n/constants'

/** English names for prompts (the model writes in this language). */
export const PROMPT_LANGUAGE: Record<Lang, string> = {
  en: 'American English (US spelling, e.g. program, color, license)',
  de: 'German (formal "Sie")',
  fr: 'French (formal "vous")',
  ja: 'Japanese (polite です/ます form)',
  zh: 'Simplified Chinese',
  es: 'neutral Spanish ("tú")',
  pt: 'Brazilian Portuguese ("você")',
  ar: 'Modern Standard Arabic (technical terms in Latin script)',
  ko: 'Korean (formal 합쇼체)',
}

const CUSTOM = /^custom:([a-z]{2,3}(?:-[A-Za-z0-9]{2,8})?):([01]):([\p{L}\p{M} .'()-]{2,40})$/u

export function isSiteLang(s: string): s is Lang {
  return (ALL_LANGS as readonly string[]).includes(s)
}

export function isValidProgrammeLanguage(s: string): boolean {
  return isSiteLang(s) || CUSTOM.test(s)
}

/** Builds the stored value from a checked language (see /api/academy/language). */
export function customLanguage(code: string, rtl: boolean, name: string): string {
  return `custom:${code}:${rtl ? 1 : 0}:${name.trim()}`
}

export function parseCustomLanguage(s: string): { code: string; rtl: boolean; name: string } | null {
  const m = CUSTOM.exec(s)
  return m ? { code: m[1], rtl: m[2] === '1', name: m[3] } : null
}

/** What goes into a prompt after "Language:". The name is validated text, never free input. */
export function promptLanguage(s: string): string {
  if (isSiteLang(s)) return PROMPT_LANGUAGE[s]
  const c = parseCustomLanguage(s)
  return c ? `${c.name} (use natural, correct ${c.name}; keep established technical terms in Latin script where that is normal)` : 'English'
}

/** Short display name for UI (English name for custom languages, native name for site languages is added by callers). */
export function languageDisplayName(s: string): string {
  return parseCustomLanguage(s)?.name ?? s
}

/** BCP-47 code for the `lang` attribute. */
export function htmlLangOf(s: string): string {
  return parseCustomLanguage(s)?.code ?? s
}

export function langDirOf(s: string): 'ltr' | 'rtl' {
  const c = parseCustomLanguage(s)
  return c ? (c.rtl ? 'rtl' : 'ltr') : getLangDir(s as Lang)
}

/** The site language used for PromptQuorum searches and article links: the programme language if the site has it, else English. */
export function siteLangOf(s: string): Lang {
  return isSiteLang(s) ? s : 'en'
}

/** Languages written without word spaces: lesson length is counted in characters / 2 (see lessonLength). */
export function isCjk(s: string): boolean {
  const code = htmlLangOf(s)
  return code === 'ja' || code === 'zh' || code.startsWith('zh-') || code === 'ko' || code === 'th'
}
