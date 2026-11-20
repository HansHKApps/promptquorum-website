// PromptQuorum Academy — points can end in .5 (written answers earn 0, 0.5 or 1). German writes a decimal comma
// (docs/geo-translation.md, DE rule); fr/es/pt/ja/zh/ko/ar keep the dot in numbers like these. Browser-safe.

import type { AcademyLang } from './types'

export function formatPoints(n: number, lang: AcademyLang): string {
  const s = String(n)
  return lang === 'de' ? s.replace('.', ',') : s
}
