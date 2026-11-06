// Power Mode exports — a tiny markdown block parser shared by the Word and PDF writers, so every export
// is built from the same report text as the in-window view. Handles what the report prompt produces:
// ## headings, paragraphs, bullet / numbered lists, GFM tables, **bold**, *italic*, `code`, [text](url).

export type Inline = { t: 'text' | 'b' | 'i' | 'code'; text: string } | { t: 'link'; text: string; href: string }

export type Block =
  | { k: 'h'; level: 1 | 2 | 3; text: string }
  | { k: 'p'; text: string }
  | { k: 'ul'; items: string[] }
  | { k: 'ol'; items: string[] }
  | { k: 'table'; head: string[]; rows: string[][] }

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g

/** Only http(s) and site-relative links become links; everything else is shown as text. */
export function safeHref(href: string, origin = 'https://www.promptquorum.com'): string | null {
  if (href.startsWith('/') && !href.startsWith('//')) return `${origin}${href}`
  try {
    const u = new URL(href)
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null
  } catch {
    return null
  }
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = []
  let last = 0
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0
    if (idx > last) out.push({ t: 'text', text: text.slice(last, idx) })
    const tok = m[0]
    if (tok.startsWith('**')) out.push({ t: 'b', text: tok.slice(2, -2) })
    else if (tok.startsWith('`')) out.push({ t: 'code', text: tok.slice(1, -1) })
    else if (tok.startsWith('[')) {
      const mm = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(tok)
      const href = mm ? safeHref(mm[2]) : null
      out.push(mm && href ? { t: 'link', text: mm[1], href } : { t: 'text', text: mm ? mm[1] : tok })
    } else out.push({ t: 'i', text: tok.slice(1, -1) })
    last = idx + tok.length
  }
  if (last < text.length) out.push({ t: 'text', text: text.slice(last) })
  return out
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l)
const isTableSep = (l: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l)
const cells = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
const UL = /^\s*[-*•]\s+/
const OL = /^\s*\d+[.)]\s+/

export function parseBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = cells(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && isTableRow(lines[i])) rows.push(cells(lines[i++]))
      blocks.push({ k: 'table', head, rows })
      continue
    }
    if (UL.test(line) || OL.test(line)) {
      const ordered = OL.test(line)
      const re = ordered ? OL : UL
      const items: string[] = []
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].replace(re, ''))
      blocks.push({ k: ordered ? 'ol' : 'ul', items })
      continue
    }
    const h = /^(#{1,4})\s+(.*)$/.exec(line)
    if (h) {
      blocks.push({ k: 'h', level: Math.min(h[1].length, 3) as 1 | 2 | 3, text: h[2] })
      i++
      continue
    }
    const para: string[] = []
    while (i < lines.length && lines[i].trim() && !UL.test(lines[i]) && !OL.test(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !(isTableRow(lines[i]) && i + 1 < lines.length && isTableSep(lines[i + 1]))) para.push(lines[i++])
    blocks.push({ k: 'p', text: para.join(' ') })
  }
  return blocks
}
