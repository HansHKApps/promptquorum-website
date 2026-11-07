// Server-safe map of the nine Power Mode copies (index.ts is a client module: it carries the useAskLang hook).
// Used by the public /askhans page to show the same process names the window shows.

import type { Language } from '@/lib/blog/blogContent'
import { copy as ar } from './ar'
import { copy as de } from './de'
import { copy as en } from './en'
import { copy as es } from './es'
import { copy as fr } from './fr'
import { copy as ja } from './ja'
import { copy as ko } from './ko'
import { copy as pt } from './pt'
import { copy as zh } from './zh'

export const POWER_COPY: Record<Language, typeof en> = { en, de, fr, ja, zh, es, pt, ar, ko }
