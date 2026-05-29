export type ContentBlock =
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; lines: string[] }
  | { type: 'p'; text: string }

function isTableChunk(lines: string[]): boolean {
  return lines.length >= 2 && lines[0].startsWith('|') && lines[1].includes('|') && lines[1].includes('-')
}

export function parseContentBlocks(content: string | string[]): ContentBlock[] {
  // If content is an array, check whether it's a pure markdown table first
  if (Array.isArray(content)) {
    const nonEmpty = content.filter(l => l.trim())
    if (isTableChunk(nonEmpty)) {
      return [{ type: 'table', lines: content }]
    }
  }

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
        if (isTableChunk(lines)) {
          blocks.push({ type: 'table', lines })
        } else {
          const allBullets = lines.length > 0 && lines.every(l => l.startsWith('- '))
          if (allBullets) {
            blocks.push({ type: 'ul', items: lines.map(l => l.slice(2)) })
          } else {
            blocks.push({ type: 'p', text: trimmed.replace(/\n/g, ' ') })
          }
        }
      }
    }
  }
  return blocks
}
