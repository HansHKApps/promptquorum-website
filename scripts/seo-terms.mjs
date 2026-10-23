/**
 * Shared term matching for the SEO scripts (query-coverage.mjs, check-page-seo-gate.mjs).
 *
 * Lexical, not semantic: a term "hits" a text when it is a whole token, or (for terms of 5+ characters
 * and CJK bigrams) a substring. Latin scripts get light plural handling; ja/zh/ko are compared as
 * character bigrams per whitespace-separated word. Synonyms are not matched.
 */

export const STOP = {
  en: 'a an and are as at be best by can do does for from how i in is it of on or the to vs versus what which who why with your you my 2024 2025'.split(' '),
  de: 'der die das ein eine einen und oder für mit von zu im in ist wie was wo welche bester beste bestes auf den dem des'.split(' '),
  fr: 'le la les un une des et ou pour avec de du en est comment quel quelle quels meilleur sur au aux'.split(' '),
  es: 'el la los las un una unos y o para con de del en es como cual mejor mejores sobre al'.split(' '),
  pt: 'o a os as um uma e ou para com de do da em é como qual melhor melhores sobre ao'.split(' '),
}
export const stopFor = (loc) => new Set(STOP[loc] ?? [])

export const CJK = new Set(['ja', 'zh', 'ko'])
export const isCjkChar = (c) => /[぀-ヿ㐀-鿿가-힯]/.test(c)
export const norm = (s) => s.normalize('NFKC').toLowerCase().replace(/[-_./]/g, ' ').replace(/\s+/g, ' ').trim()

export function keyTerms(query, loc) {
  const q = norm(query)
  if (CJK.has(loc) || [...q].some(isCjkChar)) {
    // Bigrams per whitespace-separated word, so no bigram spans two words.
    const grams = []
    for (const word of q.split(/\s+/).filter(Boolean)) {
      const chars = [...word]
      if (chars.length <= 2) grams.push(word)
      else for (let i = 0; i < chars.length - 1; i++) grams.push(chars[i] + chars[i + 1])
    }
    return [...new Set(grams)]
  }
  const stop = stopFor(loc)
  const stem = (t) => (loc === 'en' && t.length > 3 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t)
  const terms = q.split(/[^\p{L}\p{N}]+/u).filter(Boolean).filter((t) => !stop.has(t)).map(stem)
  return [...new Set(terms.length ? terms : q.split(/[^\p{L}\p{N}]+/u).filter(Boolean))]
}

export const field = (text) => {
  const n = norm(text ?? '')
  return { raw: text ?? '', n, tokens: new Set(n.split(/[^\p{L}\p{N}]+/u).filter(Boolean)) }
}

export const hit = (term, f) => {
  if (!f.n) return false
  if (f.tokens.has(term) || f.tokens.has(`${term}s`)) return true
  return (term.length >= 5 || [...term].some(isCjkChar)) && f.n.includes(term)
}
