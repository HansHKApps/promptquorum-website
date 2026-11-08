// Single source of truth for the site's author entity (Hans Kuepper).
//
// WHY (2026-11-08): the author was described in 6+ different ways: a Person with only a LinkedIn sameAs and no url
// on ~2,400 article objects, an Organization on ~700 more, three different @ids (/author/hans-kuepper,
// /about#founder, none), and urls pointing at /about or nowhere. E-E-A-T needs ONE identifiable person with a page.
//
// Canonical entity = the existing /author/hans-kuepper page. Rules:
//   * Never write an inline author object in a builder or article. Use authorPerson() / authorRef().
//   * sameAs lists ONLY URLs the site already emitted for the author. Do not add external links, Wikidata or
//     new profiles without the owner's explicit approval.
//   * Article data files still carry old inline author objects; normalizeAuthor() rewrites them at render time,
//     so the data files need no edit and cannot reintroduce a second author.

export const SITE_URL = 'https://www.promptquorum.com'
export const AUTHOR_NAME = 'Hans Kuepper'
export const AUTHOR_PATH = '/author/hans-kuepper'
export const AUTHOR_URL = `${SITE_URL}${AUTHOR_PATH}`
export const AUTHOR_ID = AUTHOR_URL
export const ORGANIZATION_ID = `${SITE_URL}/#organization`

/** Exactly the profile URLs the author page already published in its Person node (nothing new). */
export const AUTHOR_SAME_AS = [
  'https://www.linkedin.com/in/hanskuepper/',
  'https://x.com/HansKuepperAPPs',
  'https://github.com/HansHKApps',
  'https://substack.com/@promptquorum',
] as const

/** The full Person node. Embed it wherever an author/founder is named so the page's JSON-LD is self-contained. */
export function authorPerson() {
  return {
    '@type': 'Person' as const,
    '@id': AUTHOR_ID,
    name: AUTHOR_NAME,
    alternateName: 'Hans Küpper',
    url: AUTHOR_URL,
    jobTitle: 'Founder & Developer',
    description: 'Independent developer building privacy-first tools for the AI era. Founder of PromptQuorum.',
    image: `${SITE_URL}/images/hans-kuepper.jpg`,
    worksFor: { '@id': ORGANIZATION_ID },
    homeLocation: { '@type': 'Place' as const, name: 'Baden-Württemberg, Germany' },
    sameAs: [...AUTHOR_SAME_AS],
  }
}

/** A reference to the Person node. Only valid where the full node is in the same page (the layout graph has it). */
export function authorRef() {
  return { '@id': AUTHOR_ID }
}

const AUTHOR_NAMES = new Set(['Hans Kuepper', 'Hans Küpper', 'PromptQuorum'])
const MAX_DEPTH = 10

function isStaleAuthor(value: unknown): boolean {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const v = value as Record<string, unknown>
  const type = v['@type']
  if (type !== 'Person' && type !== 'Organization') return false
  return typeof v.name === 'string' && AUTHOR_NAMES.has(v.name)
}

/**
 * Returns the JSON-LD with every `author` that names Hans Kuepper or the PromptQuorum organization replaced by the
 * canonical Person. Copies only the objects on the path to a change; never mutates the (shared, imported) input.
 */
export function normalizeAuthor<T>(node: T, depth = 0): T {
  if (depth > MAX_DEPTH || node === null || typeof node !== 'object') return node
  if (Array.isArray(node)) {
    let changed = false
    const out = node.map((n) => {
      const r = normalizeAuthor(n, depth + 1)
      if (r !== n) changed = true
      return r
    })
    return (changed ? out : node) as T
  }
  const obj = node as Record<string, unknown>
  let out: Record<string, unknown> | null = null
  for (const [k, v] of Object.entries(obj)) {
    const next = k === 'author' && isStaleAuthor(v) ? authorPerson() : normalizeAuthor(v, depth + 1)
    if (next !== v) {
      out ??= { ...obj }
      out[k] = next
    }
  }
  return (out ?? obj) as T
}
