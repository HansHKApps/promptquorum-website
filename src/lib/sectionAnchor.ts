/**
 * Shared anchor-id generation for article sections, FAQ items and glossary terms.
 *
 * Why this exists: every post client used to inline its own `[^a-z0-9]+` slugifier.
 * That regex strips *all* Japanese, Chinese, Korean and Arabic text, so a localized
 * section title collapsed to an empty string and the section rendered with no `id`
 * at all — making every table-of-contents link on those locales a dead click.
 * The copies had also drifted (some trimmed leading/trailing dashes, some did not),
 * so a link and its target could slugify the same text differently.
 *
 * `\p{Letter}`/`\p{Number}` with the `u` flag keeps non-Latin scripts intact, which
 * is valid in an id and works fine in a URL fragment (browsers percent-encode it).
 */

const NON_WORD = /[^\p{Letter}\p{Number}]+/gu
const EDGE_DASHES = /^-+|-+$/g

/** Slugify arbitrary text into an anchor-safe id fragment. Returns '' if nothing survives. */
export function slugifyAnchor(text: string): string {
  return text.toLowerCase().replace(NON_WORD, '-').replace(EDGE_DASHES, '')
}

/**
 * Resolve the DOM id for an article section.
 *
 * Precedence: the authored `id` always wins — it is what `toc[].anchor` is written
 * against. Only fall back to slugifying the title, and only fall back to the section
 * key when even that yields nothing, so the element is never rendered id-less.
 */
export function slugifySectionId(
  section: { id?: string; title?: string; isTldr?: boolean },
  fallbackKey?: string
): string | undefined {
  if (section.id) return section.id
  if (section.isTldr) return 'key-takeaways'

  const fromTitle = section.title ? slugifyAnchor(section.title) : ''
  if (fromTitle) return fromTitle

  return fallbackKey ? `section-${slugifyAnchor(fallbackKey) || 'unnamed'}` : undefined
}

/** Anchor id for a glossary term. Used for both the link and its target — keep them in sync. */
export function slugifyTermId(term: string): string {
  return `term-${slugifyAnchor(term)}`
}
