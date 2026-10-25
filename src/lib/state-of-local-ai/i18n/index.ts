import type { Language } from '@/lib/blog/blogContent'
import type { SolaStrings } from './types'
import { en } from './en'
import { de } from './de'
import { fr } from './fr'
import { es } from './es'
import { pt } from './pt'
import { ja } from './ja'
import { zh } from './zh'
import { ar } from './ar'
import { ko } from './ko'

export const SOLA_STRINGS: Record<Language, SolaStrings> = { en, de, fr, es, pt, ja, zh, ar, ko }
