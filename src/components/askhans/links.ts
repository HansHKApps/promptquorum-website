// Links the assistant put into its answers (markdown [title](url) to promptquorum.com pages) — shown in the
// side panel as "matching your question", newest answer first. Only the site's own pages qualify.

import type { ChatMsg } from './types'

export interface RelatedLink {
  title: string
  /** site-relative path (with locale prefix as the answer wrote it) */
  href: string
  /** true = taken from the latest answer; false = from an earlier answer (shown greyed out) */
  current: boolean
}

const MD_LINK = /\[([^\]\n]{1,120})\]\((https?:\/\/(?:www\.)?promptquorum\.com)?(\/[^)\s]*)\)/g

function toRelative(path: string): string {
  return path.replace(/[.,;:!?]+$/, '')
}

/** Related links of one conversation: latest answer first, de-duplicated by path, at most `max`. */
export function relatedLinks(messages: ChatMsg[], max = 6): RelatedLink[] {
  const seen = new Set<string>()
  const out: RelatedLink[] = []
  let latest = -1
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i]
    if (m.role === 'assistant' && !m.error && m.content) {
      latest = i
      break
    }
  }
  for (let i = messages.length - 1; i >= 0 && out.length < max; i--) {
    const m = messages[i]
    if (m.role !== 'assistant' || m.error || !m.content) continue
    for (const match of m.content.matchAll(MD_LINK)) {
      const href = toRelative(match[3])
      const key = href.split('#')[0].split('?')[0]
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ title: match[1].trim(), href, current: i === latest })
      if (out.length >= max) break
    }
  }
  return out
}
