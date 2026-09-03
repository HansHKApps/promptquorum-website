#!/usr/bin/env node
// One-off codemod: wrap bare "(domain.tld[/path])" references in prose fields
// as markdown links "([domain.tld[/path]](https://domain.tld[/path]))".
//
// Scope: reader-facing prose in article content files. Deliberately narrow —
// only the parenthetical-bare-domain pattern (the one found live on
// cherry-studio-ai-desktop-client-2026.ts's TL;DR), not every bare URL on
// the site. Skips:
//   - lines that look like schema/JSON-LD fields (url:, sameAs, @context, Link:)
//   - matches already forming a markdown link ("](" immediately before)
//   - matches that are already a link's label ("[" immediately before)
//
// Usage: node scripts/fix-bare-domain-links.mjs [--write] [glob...]
// Without --write, prints a dry-run diff summary only.
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const WRITE = process.argv.includes('--write')
const globArgs = process.argv.slice(2).filter((a) => a !== '--write')

const DEFAULT_GLOBS = [
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

const files = (globArgs.length ? globArgs : DEFAULT_GLOBS).flatMap((d) =>
  fs.existsSync(d) && fs.statSync(d).isDirectory() ? listTsFiles(d) : [d]
)

const SCHEMA_LINE = /'url'\s*:|"url"\s*:|(?<![a-zA-Z])url\s*:|sameAs|@context|'Link'\s*:|"Link"\s*:|Ferramenta|الرابط|링크/
const DOMAIN_RE = /([a-zA-Z0-9][a-zA-Z0-9.-]*\.(?:com|ai|dev|io|app|org|net))((?:\/[a-zA-Z0-9._~:/?#=&%-]*)?)/g

let totalFiles = 0
let totalWrapped = 0
const touchedFiles = []

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8')
  const lines = src.split('\n')
  let fileWrapped = 0

  const newLines = lines.map((line) => {
    if (SCHEMA_LINE.test(line)) return line
    // Only touch lines that are inside a JS string literal-ish context —
    // approximate by requiring a quote character somewhere on the line.
    if (!/['"]/.test(line)) return line

    let result = ''
    let lastIndex = 0
    let m
    DOMAIN_RE.lastIndex = 0
    while ((m = DOMAIN_RE.exec(line)) !== null) {
      const start = m.index
      const full = m[0]
      const before2 = line.slice(Math.max(0, start - 2), start)
      const before1 = line.slice(Math.max(0, start - 1), start)
      // Already the target half of a markdown link: `](domain...)`
      if (before2 === '](') { continue }
      // Already the label half of a markdown link: `[domain...`
      if (before1 === '[') { continue }
      // Already prefixed with protocol: `://domain...` (leave full-URL case alone)
      if (line.slice(Math.max(0, start - 3), start) === '://') { continue }
      // Must be immediately preceded by '(' and followed by ')' to match the
      // reported pattern precisely (conservative — avoids wrapping bare
      // mid-sentence domains that need different surrounding punctuation).
      if (before1 !== '(') continue
      const after = line.slice(start + full.length, start + full.length + 1)
      if (after !== ')') continue

      result += line.slice(lastIndex, start)
      result += `[${full}](https://${full})`
      lastIndex = start + full.length
      fileWrapped++
    }
    result += line.slice(lastIndex)
    return result
  })

  if (fileWrapped > 0) {
    totalFiles++
    totalWrapped += fileWrapped
    touchedFiles.push({ file, count: fileWrapped })
    if (WRITE) {
      fs.writeFileSync(file, newLines.join('\n'))
    }
  }
}

console.log(`${WRITE ? 'Wrote' : 'Would wrap'} ${totalWrapped} bare-domain reference(s) across ${totalFiles} file(s).`)
for (const { file, count } of touchedFiles) {
  console.log(`  ${count.toString().padStart(3)}  ${file}`)
}
