/**
 * Builds a markdown "briefing" about the current page for pasting into an AI chat.
 * Reads the live DOM (#main) at click time: outline, text, links, images.
 * Section headings stay English on purpose (every model reads them); only the
 * task paragraph is localized (see AiDiscussBar COPY).
 */

const SKIP_SELECTOR = 'script,style,noscript,button,svg,nav,[aria-hidden="true"],[hidden]'
const BLOCK_TAGS = new Set(['P', 'DIV', 'SECTION', 'ARTICLE', 'UL', 'OL', 'TABLE', 'TR', 'BLOCKQUOTE', 'DETAILS', 'FIGURE', 'ASIDE', 'HEADER', 'FOOTER'])

// Directory/hub pages (hundreds of tool cards) can otherwise produce a
// briefing tens of thousands of characters long — well past what most AI
// chat inputs accept for a pasted message. Perplexity's own search box in
// particular rejects pastes around ~2,000 characters. Each platform button
// in AiDiscussBar passes its own real-world paste limit here (see PLATFORMS
// in that file); task/description/outline always survive untouched, and the
// Content/Links/Images sections — the ones that actually balloon — share
// whatever budget is left.
const DEFAULT_MAX_CHARS = 20000
const AVG_LINK_LINE_CHARS = 90

function truncateContent(text: string, max: number): string {
  if (text.length <= max) return text
  return `${text.slice(0, Math.max(max, 0)).trimEnd()}\n\n[Content truncated — the full page has more. See "Look up more on PromptQuorum" below.]`
}

function truncateLinks(lines: string[], max: number): string[] {
  if (lines.length <= max) return lines
  const shown = lines.slice(0, Math.max(max, 0))
  shown.push(`- …and ${lines.length - shown.length} more — see the site index at /llms.txt or the search index below.`)
  return shown
}

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
      if (text) lines.push('', `${'#'.repeat(Math.min(Number(tag[1]) + 2, 6))} ${text}`)
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

/**
 * @param maxChars Target ceiling for the whole assembled briefing, tuned to
 * the destination AI's real paste/input limit (see PLATFORMS in
 * AiDiscussBar.tsx). Defaults to a generous cap for the file download and
 * platforms with no tight limit. Task/about/footer are fixed-size and
 * always kept in full; Outline, Content, Links and Images — the sections
 * that scale with page size and can balloon on directory/hub pages with
 * hundreds of headings or links — share whatever budget is left.
 */
export function buildBriefing(task: string, lang: string, maxChars: number = DEFAULT_MAX_CHARS): string {
  const main = document.getElementById('main')
  const title = document.title
  const url = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? window.location.href
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''
  const origin = 'https://www.promptquorum.com'

  const headingsRaw = main
    ? Array.from(main.querySelectorAll('h1,h2,h3')).filter((h) => !h.closest(SKIP_SELECTOR)).map((h) => `${'  '.repeat(Number(h.tagName[1]) - 1)}- ${clean(h.textContent ?? '')}`)
    : []
  const rawContent = main ? toLines(main).join('\n').replace(/\n{3,}/g, '\n\n').trim() : ''
  const { internal: internalRaw, external: externalRaw } = main ? collectLinks(main) : { internal: [], external: [] }
  const imagesRaw = main ? collectImages(main) : []

  const header = `# Briefing: ${title}`
  const sourceLine = `Source: ${url}\nLanguage: ${lang}\nSite: PromptQuorum (promptquorum.com)`
  const taskSection = `## Your task\n${task}`
  const aboutSection = `## About this page\n${description || '(no description)'}`
  const footerSection = `## Look up more on PromptQuorum\n- Site index for AIs: ${origin}/llms.txt\n- Search index (JSON): ${origin}/api/search-index/${lang}\n- MCP server (if your chat supports MCP): ${origin}/api/mcp — tools: search_promptquorum, get_article, search_apps`

  // Fixed-size sections always survive in full; everything else — Outline,
  // Content, Links, Images — shares whatever budget is left after them.
  const coreLength = [header, sourceLine, taskSection, aboutSection, footerSection].join('\n\n').length
  const sectionLabelOverhead = '## Outline\n'.length + '## Content\n'.length + '## Links on this page\n### Internal (PromptQuorum)\n\n\n### External\n'.length + '## Images\n'.length
  const buildAt = (budget: number) => {
    const b = Math.max(budget, 0)
    const outlineBudget = Math.round(b * 0.15)
    const contentBudget = Math.round(b * 0.45)
    const linksBudget = Math.round(b * 0.3)
    const imagesBudget = b - outlineBudget - contentBudget - linksBudget
    const outlineMax = Math.max(1, Math.floor(outlineBudget / AVG_LINK_LINE_CHARS))
    const linksPerGroup = Math.max(1, Math.floor(linksBudget / 2 / AVG_LINK_LINE_CHARS))
    const imagesMax = Math.max(1, Math.floor(imagesBudget / AVG_LINK_LINE_CHARS))

    const headings = truncateLinks(headingsRaw, outlineMax)
    const content = truncateContent(rawContent, contentBudget)
    const internal = truncateLinks(internalRaw, linksPerGroup)
    const external = truncateLinks(externalRaw, linksPerGroup)
    const images = truncateLinks(imagesRaw, imagesMax)

    const parts: string[] = [
      header,
      sourceLine,
      taskSection,
      aboutSection,
      `## Outline\n${headings.join('\n') || '(none)'}`,
      `## Content\n${content}`,
      `## Links on this page\n### Internal (PromptQuorum)\n${internal.join('\n') || '(none)'}\n\n### External\n${external.join('\n') || '(none)'}`,
      `## Images\n${images.join('\n') || '(none)'}`,
      footerSection,
    ]
    return parts.join('\n\n')
  }

  const budget = maxChars - coreLength - sectionLabelOverhead
  let result = buildAt(budget)
  // The "and N more" notes and per-group minimums can push the result a
  // little past budget; shrink once more with the actual overshoot
  // subtracted.
  if (result.length > maxChars) {
    result = buildAt(budget - (result.length - maxChars))
  }
  // Last-resort hard slice — only reached on a very tight platform cap
  // combined with a very long task/description. Slices the body only and
  // always re-appends the footer in full, so the "Look up more on
  // PromptQuorum" links (the reader's way to get what got cut) survive
  // rather than being the thing that gets chopped off mid-word.
  if (result.length > maxChars) {
    const note = '\n\n[Content truncated to fit this AI\'s paste limit — see "Look up more on PromptQuorum" below.]'
    const footerBlock = `\n\n${footerSection}`
    const keepBudget = Math.max(maxChars - footerBlock.length - note.length, 0)
    result = `${result.slice(0, keepBudget).trimEnd()}${note}${footerBlock}`
  }
  return result
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
