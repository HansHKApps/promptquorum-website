// Ask Hans — language of the visitor's question. The page language says which site version the visitor is on,
// but a German question on an English page must still get German answers, German link titles and /de/ links.
// Cheap heuristic for the nine site languages: script ranges for CJK/Hangul/Arabic, stop-word scoring for the
// Latin-script ones. Returns `fallback` (the page language) when the text is too short or ambiguous.

export const ASK_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
export type AskLangCode = (typeof ASK_LANGS)[number]

const STOP: Record<'en' | 'de' | 'fr' | 'es' | 'pt', string[]> = {
  en: ['the', 'and', 'what', 'which', 'how', 'is', 'are', 'for', 'with', 'can', 'do', 'does', 'my', 'i', 'to', 'of', 'best', 'on', 'in', 'you', 'this', 'that', 'should', 'need'],
  de: ['der', 'die', 'das', 'und', 'ist', 'sind', 'ich', 'mein', 'meine', 'wie', 'was', 'welche', 'welcher', 'für', 'mit', 'nicht', 'kann', 'gibt', 'auf', 'ein', 'eine', 'zu', 'von', 'brauche', 'läuft', 'auch', 'oder', 'wer', 'wo', 'warum'],
  fr: ['le', 'la', 'les', 'des', 'une', 'est', 'sont', 'je', 'mon', 'ma', 'quel', 'quelle', 'quels', 'comment', 'pour', 'avec', 'pas', 'sur', 'dans', 'peut', 'et', 'du', 'que', 'qui', 'ordinateur', 'mes'],
  es: ['el', 'la', 'los', 'las', 'una', 'es', 'son', 'yo', 'mi', 'mis', 'cuál', 'cuáles', 'cómo', 'para', 'con', 'qué', 'puedo', 'puede', 'en', 'del', 'por', 'quiero', 'necesito', 'tengo'],
  pt: ['o', 'os', 'as', 'uma', 'é', 'são', 'eu', 'meu', 'minha', 'qual', 'quais', 'como', 'para', 'com', 'não', 'posso', 'pode', 'em', 'do', 'da', 'você', 'preciso', 'tenho', 'quero', 'um'],
}
const STOP_SETS = Object.fromEntries(Object.entries(STOP).map(([k, v]) => [k, new Set(v)])) as Record<keyof typeof STOP, Set<string>>

/** Characters that only occur in one of the Latin-script languages: small extra evidence. */
const MARKS: { lang: keyof typeof STOP; re: RegExp }[] = [
  { lang: 'de', re: /[äöüß]/i },
  { lang: 'fr', re: /[àâçèêëîïôùûœ]/i },
  { lang: 'es', re: /[ñ¿¡]/i },
  { lang: 'pt', re: /[ãõ]/i },
]

function isAskLang(v: string): v is AskLangCode {
  return (ASK_LANGS as readonly string[]).includes(v)
}

export function detectLang(text: string, fallback: string): AskLangCode {
  const base: AskLangCode = isAskLang(fallback) ? fallback : 'en'
  const t = text.trim()
  if (!t) return base

  const count = (re: RegExp) => (t.match(re) ?? []).length
  const hangul = count(/[가-힯ᄀ-ᇿ]/g)
  const kana = count(/[぀-ヿ]/g)
  const han = count(/[一-鿿]/g)
  const arabic = count(/[؀-ۿ]/g)
  const letters = count(/\p{L}/gu) || 1

  if (hangul / letters > 0.3) return 'ko'
  if (kana > 0 && (kana + han) / letters > 0.3) return 'ja'
  if (han / letters > 0.3) return 'zh'
  if (arabic / letters > 0.3) return 'ar'

  const words = t.toLowerCase().match(/[\p{L}']+/gu) ?? []
  if (words.length === 0) return base
  const scores: Record<keyof typeof STOP, number> = { en: 0, de: 0, fr: 0, es: 0, pt: 0 }
  for (const w of words) {
    for (const l of Object.keys(STOP_SETS) as (keyof typeof STOP)[]) if (STOP_SETS[l].has(w)) scores[l]++
  }
  for (const { lang, re } of MARKS) if (re.test(t)) scores[lang] += 1.5

  const ranked = (Object.entries(scores) as [keyof typeof STOP, number][]).sort((a, b) => b[1] - a[1])
  const [bestLang, best] = ranked[0]
  const second = ranked[1][1]
  // Needs real evidence and a clear lead; otherwise the page language decides (a bare product name, for example).
  if (best >= 2 && best - second >= 1) return bestLang
  if (best >= 1 && second === 0 && words.length <= 3) return bestLang
  return base
}
