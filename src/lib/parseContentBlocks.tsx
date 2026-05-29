export type ContentBlock =
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'p'; text: string }

export function parseContentBlocks(content: string | string[]): ContentBlock[] {
  const strings = Array.isArray(content) ? content : [content]
  const blocks: ContentBlock[] = []

  for (const str of strings) {
    const chunks = str.split(/\n\n+/)
    for (const chunk of chunks) {
      const trimmed = chunk.trim()
      if (!trimmed) continue

      if (trimmed.startsWith('### ')) {
        blocks.push({ type: 'h3', text: trimmed.slice(4) })
      } else {
        const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean)
        const allBullets = lines.length > 0 && lines.every(l => l.startsWith('- '))
        if (allBullets) {
          blocks.push({ type: 'ul', items: lines.map(l => l.slice(2)) })
        } else {
          blocks.push({ type: 'p', text: trimmed.replace(/\n/g, ' ') })
        }
      }
    }
  }
  return blocks
}
