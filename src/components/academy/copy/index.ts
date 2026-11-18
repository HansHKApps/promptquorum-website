// PromptQuorum Academy — UI texts in all nine site languages. Server pages pick the copy with the page's own
// language and hand it to the client component, so crawlers see the right language in the HTML.

import type { AcademyLang } from '@/lib/academy/types'
import { copy as ar } from './ar'
import { copy as de } from './de'
import { copy as en } from './en'
import { copy as es } from './es'
import { copy as fr } from './fr'
import { copy as ja } from './ja'
import { copy as ko } from './ko'
import { copy as pt } from './pt'
import { copy as zh } from './zh'
import type { AcademyCopy } from './types'

export type { AcademyCopy } from './types'

export const ACADEMY_COPY: Record<AcademyLang, AcademyCopy> = { en, de, fr, ja, zh, es, pt, ar, ko }

/** Native names in the language selector; never translated. */
export const ACADEMY_LANGUAGE_NAMES: Record<AcademyLang, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  pt: 'Português (Brasil)',
  ar: 'العربية',
  ko: '한국어',
}
