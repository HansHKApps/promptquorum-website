// Ask Hans — rich copy and share helpers. An answer is copied (and shared) as formatted HTML plus a plain-text
// twin, always ending with a link to www.promptquorum.com. Relative links in answers become absolute so they
// still work once pasted into a mail or document.

export const SITE_URL = 'https://www.promptquorum.com'
const FOOTER_TEXT = 'Ask Hans · PromptQuorum'
/** Share URLs have length limits (mailto, wa.me): longer answers are cut before the footer. */
const SHARE_MAX_CHARS = 1500

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const abs = (u: string) => (u.startsWith('/') && !u.startsWith('//') ? `${SITE_URL}${u}` : u)
const safe = (u: string) => /^(https?:\/\/|\/(?!\/))/.test(u)

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s<>)\]]+|\*[^*\s][^*]*\*)/g

function inlineHtml(text: string): string {
  let out = ''
  let last = 0
  for (const m of text.matchAll(INLINE)) {
    const idx = m.index ?? 0
    out += esc(text.slice(last, idx))
    const tok = m[0]
    if (tok.startsWith('**')) out += `<strong>${esc(tok.slice(2, -2))}</strong>`
    else if (tok.startsWith('`')) out += `<code>${esc(tok.slice(1, -1))}</code>`
    else if (tok.startsWith('[')) {
      const mm = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(tok)
      out += mm && safe(mm[2]) ? `<a href="${esc(abs(mm[2]))}">${esc(mm[1])}</a>` : esc(tok)
    } else if (tok.startsWith('http')) {
      const trail = /[.,;:!?]+$/.exec(tok)?.[0] ?? ''
      const url = trail ? tok.slice(0, -trail.length) : tok
      out += `<a href="${esc(url)}">${esc(url)}</a>${esc(trail)}`
    } else out += `<em>${esc(tok.slice(1, -1))}</em>`
    last = idx + tok.length
  }
  return out + esc(text.slice(last))
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l)
const isTableSep = (l: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l)
const cells = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
const UL = /^\s*[-*•]\s+/
const OL = /^\s*\d+[.)]\s+/

const TD = 'border:1px solid #d1d5db;padding:4px 8px;text-align:left;vertical-align:top'

/** Markdown (the subset Ask Hans answers use) → HTML with inline styles, so mail clients and Word keep the look. */
export function mdToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
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
      out.push(
        `<table style="border-collapse:collapse;margin:8px 0"><thead><tr>${head.map((h) => `<th style="${TD};background:#f3f4f6">${inlineHtml(h)}</th>`).join('')}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td style="${TD}">${inlineHtml(c)}</td>`).join('')}</tr>`)
          .join('')}</tbody></table>`,
      )
      continue
    }
    if (UL.test(line) || OL.test(line)) {
      const ordered = OL.test(line)
      const re = ordered ? OL : UL
      const items: string[] = []
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].replace(re, ''))
      const tag = ordered ? 'ol' : 'ul'
      out.push(`<${tag}>${items.map((it) => `<li>${inlineHtml(it)}</li>`).join('')}</${tag}>`)
      continue
    }
    const h = /^#{1,4}\s+(.*)$/.exec(line)
    if (h) {
      out.push(`<p><strong>${inlineHtml(h[1])}</strong></p>`)
      i++
      continue
    }
    const para: string[] = []
    while (i < lines.length && lines[i].trim() && !UL.test(lines[i]) && !OL.test(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !(isTableRow(lines[i]) && i + 1 < lines.length && isTableSep(lines[i + 1]))) para.push(lines[i++])
    out.push(`<p>${para.map(inlineHtml).join('<br>')}</p>`)
  }
  return out.join('')
}

/** Markdown → readable plain text: marks removed, links as "title (url)", tables as tab-separated rows. */
export function mdToPlain(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const kept: string[] = []
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i]
    if (isTableRow(l) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      kept.push(cells(l).join('\t'))
      i += 1
      while (i + 1 < lines.length && isTableRow(lines[i + 1])) kept.push(cells(lines[++i]).join('\t'))
      continue
    }
    kept.push(l)
  }
  return kept
    .join('\n')
    .replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g, (_m, t: string, u: string) => (t.trim() === u.trim() ? abs(u) : `${t} (${abs(u)})`))
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,4}\s+/gm, '')
}

export interface RichPayload {
  html: string
  plain: string
}

/** HTML + plain version of an answer (or table), each ending with the promptquorum.com footer. */
export function richPayload(md: string): RichPayload {
  const footerHtml = `<p style="color:#555;font-size:12px;margin-top:12px">${FOOTER_TEXT} · <a href="${SITE_URL}">www.promptquorum.com</a></p>`
  return {
    html: `<div>${mdToHtml(md)}${footerHtml}</div>`,
    plain: `${mdToPlain(md).trim()}\n\n${FOOTER_TEXT} · ${SITE_URL}`,
  }
}

/** Plain text for share URLs: cut to a safe length, footer always kept. */
export function sharePlain(md: string): string {
  const body = mdToPlain(md).trim()
  const cut = body.length > SHARE_MAX_CHARS ? `${body.slice(0, SHARE_MAX_CHARS).replace(/\s+\S*$/, '')}…` : body
  return `${cut}\n\n${FOOTER_TEXT} · ${SITE_URL}`
}

export type ShareChannel = 'email' | 'whatsapp' | 'telegram'

export function shareHref(channel: ShareChannel, text: string, subject: string): string {
  const e = encodeURIComponent
  if (channel === 'email') return `mailto:?subject=${e(subject)}&body=${e(text)}`
  if (channel === 'whatsapp') return `https://wa.me/?text=${e(text)}`
  return `https://t.me/share/url?url=${e(SITE_URL)}&text=${e(text)}`
}

/** Writes HTML + plain to the clipboard; falls back to plain text only. Returns false if nothing worked. */
export async function writeRich(payload: RichPayload): Promise<boolean> {
  try {
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([payload.html], { type: 'text/html' }),
          'text/plain': new Blob([payload.plain], { type: 'text/plain' }),
        }),
      ])
      return true
    }
  } catch {
    // fall through to plain text
  }
  return writePlain(payload.plain)
}

export async function writePlain(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(ta)
    return ok
  }
}
