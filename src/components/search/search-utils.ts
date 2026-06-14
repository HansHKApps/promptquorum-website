export interface SearchEntry {
  id: string
  articleKey: string
  title: string
  description: string
  section: string
  hub: string
  level: string
  tags: string[]
  url: string
  lang: string
}

export const SUPPORTED_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
export type SearchLang = (typeof SUPPORTED_LANGS)[number]

export const GROUP_ORDER = [
  'prompt-engineering',
  'local-llms',
  'power-local-llm',
  'prompt-bites',
  'blog',
  'product',
]

export const HUB_LABELS: Record<string, string> = {
  'prompt-engineering': 'Prompt Engineering',
  'local-llms': 'Local LLMs',
  'power-local-llm': 'Power Local LLM',
  'prompt-bites': 'Prompt Bites',
  'blog': 'Blog',
  'product': 'PromptQuorum',
}

export const HUB_DOT_COLOR: Record<string, string> = {
  'prompt-engineering': 'bg-blue-500',
  'local-llms': 'bg-green-500',
  'power-local-llm': 'bg-emerald-600',
  'prompt-bites': 'bg-purple-500',
  'blog': 'bg-violet-600',
  'product': 'bg-amber-500',
}

export const LEVEL_PILL: Record<string, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-blue-100 text-blue-700',
  advanced: 'bg-purple-100 text-purple-700',
  technical: 'bg-purple-100 text-purple-700',
  all: 'bg-gray-100 text-gray-500',
}

export interface ResultGroup {
  hub: string
  section: string
  items: import('fuse.js').FuseResult<SearchEntry>[]
}

export function groupResults(
  results: import('fuse.js').FuseResult<SearchEntry>[],
): ResultGroup[] {
  const groups: Record<string, import('fuse.js').FuseResult<SearchEntry>[]> = {}

  for (const result of results) {
    const key = `${result.item.hub}|||${result.item.section}`
    if (!groups[key]) groups[key] = []
    groups[key].push(result)
  }

  return Object.entries(groups)
    .sort(([a], [b]) => {
      const aHub = a.split('|||')[0]
      const bHub = b.split('|||')[0]
      const aIdx = GROUP_ORDER.indexOf(aHub)
      const bIdx = GROUP_ORDER.indexOf(bHub)
      if (aIdx !== bIdx) return aIdx - bIdx
      return a.localeCompare(b)
    })
    .map(([key, items]) => {
      const [hub, section] = key.split('|||')
      return { hub, section, items: items.slice(0, 3) }
    })
}

export function applyHighlight(
  text: string,
  matches: ReadonlyArray<import('fuse.js').FuseResultMatch> | undefined,
  fieldName: string,
): Array<{ text: string; highlight: boolean }> {
  const fieldMatch = matches?.find((m) => m.key === fieldName)
  if (!fieldMatch?.indices?.length) return [{ text, highlight: false }]

  const parts: Array<{ text: string; highlight: boolean }> = []
  let last = 0
  const indices = [...fieldMatch.indices].sort((a, b) => a[0] - b[0])

  for (const [start, end] of indices) {
    if (start > last) parts.push({ text: text.slice(last, start), highlight: false })
    parts.push({ text: text.slice(start, end + 1), highlight: true })
    last = end + 1
  }
  if (last < text.length) parts.push({ text: text.slice(last), highlight: false })

  return parts
}
