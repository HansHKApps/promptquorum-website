'use client'

// Ask Hans — UI texts in all nine site languages. `useAskCopy()` picks the language of the page the
// visitor is on; the chat itself answers in whatever language the visitor writes (see system-prompt.ts).

import { useLang } from '@/hooks/useLang'
import { copy as ar } from './ar'
import { copy as de } from './de'
import { copy as en } from './en'
import { copy as es } from './es'
import { copy as fr } from './fr'
import { copy as ja } from './ja'
import { copy as ko } from './ko'
import { copy as pt } from './pt'
import { copy as zh } from './zh'
import type { AskCopy, AskLang } from './types'

export type { AskCopy, AskLang } from './types'

export const ASK_COPY: Record<AskLang, AskCopy> = { en, de, fr, ja, zh, es, pt, ar, ko }

/** Address that receives feedback mails (mailto link in the window header and the star-rating mails). */
export const ASK_HANS_CONTACT_EMAIL = 'hello@promptquorum.com'

export function useAskLang(): AskLang {
  return useLang()
}

export function useAskCopy(): AskCopy {
  return ASK_COPY[useAskLang()]
}

/** `/de/power-local-llm/x` → the same page in `lang` (English has no prefix). The category list stores German paths. */
export function localizeAskPath(url: string, lang: AskLang): string {
  const neutral = url.replace(/^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/, '') || '/'
  if (lang === 'en') return neutral
  return neutral === '/' ? `/${lang}` : `/${lang}${neutral}`
}
