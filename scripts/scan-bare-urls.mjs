#!/usr/bin/env node
// Diagnostic scanner (read-only): finds bare "https://..." URLs in prose that
// are NOT already wrapped as markdown links "](https://...)" and are NOT on
// an obvious schema/JSON-LD key line. Prints file:line + context for manual
// review before writing a fix script.
import fs from 'fs'
import path from 'path'

const DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
  'src/lib/blog',
]

function listTsFiles(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...listTsFiles(p))
    else if (entry.name.endsWith('.ts')) out.push(p)
  }
  return out
}

const SCHEMA_LINE = /'url'\s*:|"url"\s*:|(?<![a-zA-Z])url\s*:|sameAs|@context|publisher|logo\s*:|mainEntityOfPage|'website'\s*:|itemListElement/
const URL_RE = /https?:\/\/[a-zA-Z0-9./_%#?=&:~-]+/g

const files = DIRS.flatMap((d) => (fs.existsSync(d) ? listTsFiles(d) : []))
let total = 0
const hits = []

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, idx) => {
    if (SCHEMA_LINE.test(line)) return
    URL_RE.lastIndex = 0
    let m
    while ((m = URL_RE.exec(line)) !== null) {
      const start = m.index
      const before2 = line.slice(Math.max(0, start - 2), start)
      if (before2 === '](') continue // already a proper markdown link target
      total++
      hits.push({ file, lineNo: idx + 1, snippet: line.trim().slice(0, 160) })
    }
  })
}

console.log(`Total bare https:// matches outside schema-lines and outside existing markdown links: ${total}`)
console.log(`Across ${new Set(hits.map((h) => h.file)).size} files`)
console.log('')
for (const h of hits) {
  console.log(`${h.file}:${h.lineNo}  ${h.snippet}`)
}
