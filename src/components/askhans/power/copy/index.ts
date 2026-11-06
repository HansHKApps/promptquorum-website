'use client'

// Ask Hans Power Mode — UI texts in all nine site languages, picked by the page language like the chat's.

import { useAskLang, type AskLang } from '../../copy'
import { copy as ar } from './ar'
import { copy as de } from './de'
import { copy as en } from './en'
import { copy as es } from './es'
import { copy as fr } from './fr'
import { copy as ja } from './ja'
import { copy as ko } from './ko'
import { copy as pt } from './pt'
import { copy as zh } from './zh'
import type { PowerCopy } from './types'

export type { PowerCopy } from './types'

export const POWER_COPY: Record<AskLang, PowerCopy> = { en, de, fr, ja, zh, es, pt, ar, ko }

export function usePowerCopy(): PowerCopy {
  return POWER_COPY[useAskLang()]
}
