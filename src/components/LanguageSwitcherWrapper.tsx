'use client'

import { LanguageSwitcher } from './LanguageSwitcher'
import type { Language } from '../translations'

interface LanguageSwitcherWrapperProps {
  initialLang?: Language
}

export function LanguageSwitcherWrapper({ initialLang }: LanguageSwitcherWrapperProps) {
  return <LanguageSwitcher initialLang={initialLang} />
}
