import type { Language } from '@/lib/blog/blogContent'
import type { FounderParagraphs, FounderText } from './apps/types'

export function founderText(value: FounderText, lang: Language): string {
  if (typeof value === 'string') return value
  return value[lang] ?? value.en ?? ''
}

export function founderParagraphs(value: FounderParagraphs | undefined, lang: Language): string[] | null {
  if (!value) return null
  if (Array.isArray(value)) return value
  return value[lang] ?? value.en ?? null
}
