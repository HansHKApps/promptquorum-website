/**
 * Builds a markdown "briefing" about the current page for pasting into an AI chat.
 * Reads the live DOM (#main) at click time: outline, text, links, images.
 * Section headings stay English on purpose (every model reads them); only the
 * task paragraph is localized (see AiDiscussBar COPY).
 */

const SKIP_SELECTOR = 'script,style,noscript,button,svg,nav,[aria-hidden="true"],[hidden]'
const BLOCK_TAGS = new Set(['P', 'DIV', 'SECTION', 'ARTICLE', 'UL', 'OL', 'TABLE', 'TR', 'BLOCKQUOTE', 'DETAILS', 'FIGURE', 'ASIDE', 'HEADER', 'FOOTER'])

function abs(href: string): string | null {
  try {
    return new URL(href, window.location.origin).href
  } catch {
    return null
  }
}

const clean = (s: string) => s.replace(/\s+/g, ' ').trim()

/** Walks an element tree and returns markdown-ish lines. */
function toLines(root: Element): string[] {
  const lines: string[] = []
  const walk = (el: Element) => {
    if (el.matches(SKIP_SELECTOR)) return
    const tag = el.tagName
    if (/^H[1-6]$/.test(tag)) {
      const text = clean(el.textContent ?? '')
      if (text) lines.push('', `${'#'.repeat(Math.min(Number(tag[1]) + 1, 6))} ${text}`)
      return
    }
    if (tag === 'LI') {
      const text = clean(el.textContent ?? '')
      if (text) lines.push(`- ${text}`)
      return
    }
    if (tag === 'TR') {
      const cells = Array.from(el.children).map((c) => clean(c.textContent ?? ''))
      if (cells.some(Boolean)) lines.push(`| ${cells.join(' | ')} |`)
      return
    }
    const hasBlockChild = Array.from(el.children).some((c) => BLOCK_TAGS.has(c.tagName) || /^H[1-6]$/.test(c.tagName) || c.tagName === 'LI')
    if (hasBlockChild || BLOCK_TAGS.has(tag)) {
      if (!hasBlockChild) {
        const text = clean(el.textContent ?? '')
        if (text) lines.push(text)
        return
      }
      Array.from(el.children).forEach(walk)
      return
    }
    const text = clean(el.textContent ?? '')
    if (text) lines.push(text)
  }
  walk(root)
  return lines
}

function collectLinks(main: Element) {
  const seen = new Set<string>()
  const internal: string[] = []
  const external: string[] = []
  main.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
    const href = a.getAttribute('href') ?? ''
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) return
    const url = abs(href)
    if (!url || seen.has(url)) return
    seen.add(url)
    const text = clean(a.textContent ?? '') || clean(a.getAttribute('aria-label') ?? '') || url
    const line = `- [${text}](${url})`
    ;(new URL(url).hostname.endsWith('promptquorum.com') || new URL(url).origin === window.location.origin ? internal : external).push(line)
  })
  return { internal, external }
}

function collectImages(main: Element): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  main.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    let src = img.currentSrc || img.getAttribute('src') || ''
    if (src.includes('/_next/image')) {
      try {
        src = new URL(src, window.location.origin).searchParams.get('url') ?? src
      } catch {
        /* keep src */
      }
    }
    const url = abs(src)
    if (!url || url.startsWith('data:') || seen.has(url)) return
    seen.add(url)
    out.push(`- ${clean(img.alt) || 'image'} — ${url}`)
  })
  return out
}

export function buildBriefing(task: string, lang: string): string {
  const main = document.getElementById('main')
  const title = document.title
  const url = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? window.location.href
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''
  const origin = 'https://www.promptquorum.com'

  const headings = main
    ? Array.from(main.querySelectorAll('h1,h2,h3')).filter((h) => !h.closest(SKIP_SELECTOR)).map((h) => `${'  '.repeat(Number(h.tagName[1]) - 1)}- ${clean(h.textContent ?? '')}`)
    : []
  const content = main ? toLines(main).join('\n').replace(/\n{3,}/g, '\n\n').trim() : ''
  const { internal, external } = main ? collectLinks(main) : { internal: [], external: [] }
  const images = main ? collectImages(main) : []

  const parts: string[] = [
    `# Briefing: ${title}`,
    `Source: ${url}\nLanguage: ${lang}\nSite: PromptQuorum (promptquorum.com)`,
    `## Your task\n${task}`,
    `## About this page\n${description || '(no description)'}`,
    `## Outline\n${headings.join('\n') || '(none)'}`,
    `## Content\n${content}`,
    `## Links on this page\n### Internal (PromptQuorum)\n${internal.join('\n') || '(none)'}\n\n### External\n${external.join('\n') || '(none)'}`,
    `## Images\n${images.join('\n') || '(none)'}`,
    `## Look up more on PromptQuorum\n- Site index for AIs: ${origin}/llms.txt\n- Search index (JSON): ${origin}/api/search-index/${lang}\n- MCP server (if your chat supports MCP): ${origin}/api/mcp — tools: search_promptquorum, get_article, search_apps`,
  ]
  return parts.join('\n\n')
}

export function briefingFilename(): string {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '').replace(/[^a-z0-9]+/gi, '-') || 'home'
  return `promptquorum-${slug}-briefing.md`
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
  const href = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = href
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(href), 1000)
}
