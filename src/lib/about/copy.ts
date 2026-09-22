import type { Language } from '@/lib/blog/blogContent'
import type { AboutCopy } from './types'
import { en } from './copy.en'
import { de } from './copy.de'
import { fr } from './copy.fr'
import { ja } from './copy.ja'
import { zh } from './copy.zh'
import { es } from './copy.es'
import { pt } from './copy.pt'
import { ar } from './copy.ar'
import { ko } from './copy.ko'

export const ABOUT_COPY: Record<Language, AboutCopy> = { en, de, fr, ja, zh, es, pt, ar, ko }
