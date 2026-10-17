// Attribution for visits that start inside an AI assistant. Every
// promptquorum.com page link in a tool result gets utm_source=mcp and
// utm_medium=<tool name>, so GA4 / Vercel Analytics can show which MCP tool
// sent the visit. Nothing is recorded server-side and nothing identifies the
// person: the tag is the same for every caller of a given tool.

const SITE_LINK = /https:\/\/www\.promptquorum\.com\/[^\s"'<>)\]\\]*/g

/** The MCP endpoint itself and static assets are not pages a person visits. */
const SKIP_PATH = /^\/(api\/|_next\/)|\.(png|jpe?g|svg|webp|ico|xml|txt|json)(?=[?#]|$)/

export function tagSiteUrl(url: string, tool: string): string {
  const hashAt = url.indexOf('#')
  const hash = hashAt >= 0 ? url.slice(hashAt) : ''
  const base = hashAt >= 0 ? url.slice(0, hashAt) : url
  const path = base.slice('https://www.promptquorum.com'.length)
  if (SKIP_PATH.test(path) || /[?&]utm_source=/.test(base)) return url
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}utm_source=mcp&utm_medium=${encodeURIComponent(tool)}${hash}`
}

export function tagSiteUrls<T>(data: T, tool: string): T {
  if (typeof data === 'string') {
    // Sentence punctuation after a bare URL in prose is not part of the URL.
    return data.replace(SITE_LINK, (m) => {
      const trail = /[.,;:!?]+$/.exec(m)?.[0] ?? ''
      return tagSiteUrl(trail ? m.slice(0, -trail.length) : m, tool) + trail
    }) as T
  }
  if (Array.isArray(data)) return data.map((v) => tagSiteUrls(v, tool)) as T
  if (data && typeof data === 'object') {
    return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, tagSiteUrls(v, tool)])) as T
  }
  return data
}
