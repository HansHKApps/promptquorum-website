// Links the assistant put into its answers (markdown [title](url) to promptquorum.com pages) — shown in the
// side panel as "matching your question", newest answer first. Only the site's own pages qualify.
// The card title is the page's real title from the tool result when we have it; otherwise the link text,
// unless that is generic ("Read the full review", "hier", ...), in which case it is built from the URL.

import { normalizePagePath } from '@/lib/askhans/paths'
import type { ChatMsg } from './types'

export interface RelatedLink {
  title: string
  /** site-relative path (with locale prefix as the answer wrote it) */
  href: string
}

const MD_LINK = /\[([^\]\n]{1,120})\]\((https?:\/\/(?:www\.)?promptquorum\.com)?(\/[^)\s]*)\)/g

const GENERIC = /^(?:read|see|view|open|more|full|click|here|link|details?|learn|visit|mehr|weiter|hier|lesen|ansehen|öffnen|voir|lire|plus|ici|ver|leer|más|aqui|saiba|ler|here\b)/i

function isGeneric(text: string): boolean {
  const t = text.trim()
  return t.length < 4 || (GENERIC.test(t) && t.split(/\s+/).length <= 6)
}

const SPECIAL_WORDS: Record<string, string> = { llm: 'LLM', llms: 'LLMs', ai: 'AI', pc: 'PC', pcs: 'PCs', gpu: 'GPU', gpus: 'GPUs', tts: 'TTS', rag: 'RAG', mcp: 'MCP', ocr: 'OCR', vs: 'vs', ios: 'iOS', macos: 'macOS' }
const SMALL_WORDS = new Set(['a', 'an', 'and', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with', 'vs'])

function titleFromPath(path: string): string {
  const slug = normalizePagePath(path).split('/').filter(Boolean).pop() ?? ''
  return slug
    .split('-')
    .filter(Boolean)
    .map((w, i) => SPECIAL_WORDS[w] ?? (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

function toRelative(path: string): string {
  return path.replace(/[.,;:!?]+$/, '')
}

/** Related links of one conversation: latest answer first, de-duplicated by page, at most `max`. */
export function relatedLinks(messages: ChatMsg[], max = 6): RelatedLink[] {
  const seen = new Set<string>()
  const out: RelatedLink[] = []
  for (let i = messages.length - 1; i >= 0 && out.length < max; i--) {
    const m = messages[i]
    if (m.role !== 'assistant' || m.error || !m.content) continue
    for (const match of m.content.matchAll(MD_LINK)) {
      const href = toRelative(match[3])
      const key = normalizePagePath(href)
      if (seen.has(key)) continue
      seen.add(key)
      const text = match[1].trim()
      const known = m.linkTitles?.[key]
      const title = known ?? (isGeneric(text) ? titleFromPath(href) : text)
      out.push({ title, href })
      if (out.length >= max) break
    }
  }
  return out
}
