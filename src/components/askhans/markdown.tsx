// Minimal, safe markdown for Ask Hans answers: paragraphs, lists, GFM tables, **bold**, *italic*,
// `code`, [text](url) and bare URLs. Builds React nodes only (no raw HTML), and only http(s) or
// site-relative links are made clickable.

import { CopyButton } from './CopyButton'
import type { ReactNode } from 'react'

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s<>)\]]+|\*[^*\s][^*]*\*)/g

function safeHref(href: string): string | null {
  if (href.startsWith('/') && !href.startsWith('//')) return href
  try {
    const u = new URL(href)
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null
  } catch {
    return null
  }
}

function isInternal(href: string): boolean {
  return href.startsWith('/') || /^https?:\/\/(www\.)?promptquorum\.com(\/|$)/.test(href)
}

function link(text: string, href: string, key: string): ReactNode {
  const safe = safeHref(href)
  if (!safe) return text
  const internal = isInternal(safe)
  return (
    <a
      key={key}
      href={safe}
      className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
      {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer nofollow' })}
    >
      {text}
    </a>
  )
}

function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(INLINE)) {
    const idx = m.index ?? 0
    if (idx > last) out.push(text.slice(last, idx))
    const tok = m[0]
    const key = `${keyPrefix}-${i++}`
    if (tok.startsWith('**')) out.push(<strong key={key}>{tok.slice(2, -2)}</strong>)
    else if (tok.startsWith('`')) out.push(<code key={key} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">{tok.slice(1, -1)}</code>)
    else if (tok.startsWith('[')) {
      const mm = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(tok)
      out.push(mm ? link(mm[1], mm[2], key) : tok)
    } else if (tok.startsWith('http')) {
      const trail = /[.,;:!?]+$/.exec(tok)?.[0] ?? ''
      const url = trail ? tok.slice(0, -trail.length) : tok
      out.push(link(url, url, key))
      if (trail) out.push(trail)
    } else out.push(<em key={key}>{tok.slice(1, -1)}</em>)
    last = idx + tok.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l)
const isTableSep = (l: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l)
const cells = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())

export function Markdown({ text }: { text: string }) {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const blocks: ReactNode[] = []
  let i = 0
  let b = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    // table
    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = cells(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && isTableRow(lines[i])) rows.push(cells(lines[i++]))
      const tableMd = [head, head.map(() => '---'), ...rows].map((r) => `| ${r.join(' | ')} |`).join('\n')
      blocks.push(
        <div key={`b${b++}`} className="my-2">
        <div className="flex justify-end">
          <CopyButton md={tableMd} />
        </div>
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead className="bg-muted">
              <tr>{head.map((h, c) => <th key={c} className="px-2 py-1.5 font-semibold">{inline(h, `h${c}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-t border-border align-top">
                  {r.map((c, ci) => <td key={ci} className="px-2 py-1.5">{inline(c, `r${ri}c${ci}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>,
      )
      continue
    }
    // lists
    const ul = /^\s*[-*•]\s+/
    const ol = /^\s*\d+[.)]\s+/
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line)
      const items: string[] = []
      while (i < lines.length && (ordered ? ol : ul).test(lines[i])) items.push(lines[i++].replace(ordered ? ol : ul, ''))
      const Tag = ordered ? 'ol' : 'ul'
      blocks.push(
        <Tag key={`b${b++}`} className={`my-1.5 ml-5 space-y-0.5 ${ordered ? 'list-decimal' : 'list-disc'}`}>
          {items.map((it, k) => <li key={k}>{inline(it, `li${k}`)}</li>)}
        </Tag>,
      )
      continue
    }
    // heading → bold paragraph
    const h = /^#{1,4}\s+(.*)$/.exec(line)
    if (h) {
      blocks.push(<p key={`b${b++}`} className="mt-2 font-semibold">{inline(h[1], 'h')}</p>)
      i++
      continue
    }
    // paragraph (consecutive non-special lines)
    const para: string[] = []
    while (i < lines.length && lines[i].trim() && !ul.test(lines[i]) && !ol.test(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !(isTableRow(lines[i]) && i + 1 < lines.length && isTableSep(lines[i + 1]))) para.push(lines[i++])
    blocks.push(<p key={`b${b++}`} className="my-1.5">{inline(para.join('\n'), `p${b}`)}</p>)
  }
  return <div className="break-words">{blocks}</div>
}
