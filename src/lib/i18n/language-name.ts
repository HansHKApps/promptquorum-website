import { toOutputLocale } from '@/lib/i18n/constants'

const FALLBACK_EN: Record<string, string> = {
  en: 'English', de: 'German', fr: 'French', ja: 'Japanese', zh: 'Chinese', es: 'Spanish',
  pt: 'Portuguese', ar: 'Arabic', ko: 'Korean', it: 'Italian', ru: 'Russian', fa: 'Persian (Farsi)',
  sq: 'Albanian', nl: 'Dutch', pl: 'Polish', tr: 'Turkish', hi: 'Hindi', uk: 'Ukrainian',
}

/**
 * Full language name for an ISO 639-1 code, in the viewer's language.
 * Falls back to an English name, then to the uppercased raw code for unknown values.
 */
export function languageName(code: string, viewerLang: string): string {
  const c = code.trim().toLowerCase()
  if (!c) return code
  try {
    const name = new Intl.DisplayNames([toOutputLocale(viewerLang)], { type: 'language' }).of(c)
    if (name && name.toLowerCase() !== c) {
      const base = c === 'fa' && viewerLang === 'en' ? 'Persian (Farsi)' : name
      return base.charAt(0).toLocaleUpperCase(toOutputLocale(viewerLang)) + base.slice(1)
    }
  } catch {
    // invalid code or unsupported runtime: fall through
  }
  return FALLBACK_EN[c] ?? code.toUpperCase()
}
