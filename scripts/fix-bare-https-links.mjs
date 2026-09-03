#!/usr/bin/env node
// One-off codemod: wrap bare "https://..." citation URLs in prose as markdown
// links "[url-without-protocol](https://...)". Companion to
// fix-bare-domain-links.mjs (which handled the "(domain.tld)" parenthetical
// case) — this handles the "**Source.** https://url -- description" style
// bare-URL citations found in Sources sections and inline references.
//
// Deliberately excludes:
//   - localhost / 127.0.0.1 (example server addresses, not real links)
//   - shell/code-command lines (curl, wget, git clone, npm/npx/pip/docker,
//     -fsSL, api key / base_url assignments, ollama pull/run, xinference)
//   - schema/JSON-LD key lines (url:, sameAs, @context, item:, logo:,
//     publisher, mainEntityOfPage, itemListElement, contentUrl)
//   - URLs already inside a markdown link (either the "[url" label half or
//     the "](url" target half)
//
// Usage: node scripts/fix-bare-https-links.mjs [--write] [path...]
import fs from 'fs'
import path from 'path'

const WRITE = process.argv.includes('--write')
const globArgs = process.argv.slice(2).filter((a) => a !== '--write')

const DEFAULT_DIRS = [
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

const files = (globArgs.length ? globArgs : DEFAULT_DIRS).flatMap((d) =>
  fs.existsSync(d) && fs.statSync(d).isDirectory() ? listTsFiles(d) : [d]
)

const SCHEMA_LINE = /'url'\s*:|"url"\s*:|(?<![a-zA-Z])url\s*:|sameAs|@context|'item'\s*:|"item"\s*:|'logo'\s*:|publisher|mainEntityOfPage|itemListElement|contentUrl|'Link'\s*:|"Link"\s*:|الرابط|링크/
const CODE_LINE = /curl |wget |git clone|bash -c|-fsSL|npm install|npm run|npx |pip install|pip3 install|docker run|docker exec|api_key\s*=|base_url\s*=|API_BASE\s*=|API_KEY\s*=|ollama pull|ollama run|xinference-local|python -m|apt install|apt-get install|brew install|codeBlock/i
const URL_RE = /https?:\/\/[a-zA-Z0-9./_%#?=&:~-]+/g

let totalFiles = 0
let totalWrapped = 0
const touchedFiles = []

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  let fileWrapped = 0

  const newLines = lines.map((line) => {
    if (SCHEMA_LINE.test(line)) return line
    if (CODE_LINE.test(line)) return line
    if (/localhost|127\.0\.0\.1/.test(line)) return line
    if (!/['"]/.test(line)) return line

    let result = ''
    let lastIndex = 0
    let m
    URL_RE.lastIndex = 0
    while ((m = URL_RE.exec(line)) !== null) {
      const start = m.index
      let full = m[0]
      const before2 = line.slice(Math.max(0, start - 2), start)
      const before1 = line.slice(Math.max(0, start - 1), start)
      if (before2 === '](') continue // already a link target
      if (before1 === '[') continue // already a link label

      // Strip trailing sentence/citation punctuation from the URL itself,
      // re-attach it after the closing markdown syntax.
      let trailing = ''
      const trailingMatch = full.match(/[.,;:!?"')\]]+$/)
      if (trailingMatch) {
        trailing = trailingMatch[0]
        full = full.slice(0, full.length - trailing.length)
      }
      if (!full || full === 'https://' || full === 'http://') {
        result += line.slice(lastIndex, start + m[0].length)
        lastIndex = start + m[0].length
        continue
      }

      const label = full.replace(/^https?:\/\//, '')
      result += line.slice(lastIndex, start)
      result += `[${label}](${full})${trailing}`
      lastIndex = start + m[0].length
      fileWrapped++
    }
    result += line.slice(lastIndex)
    return result
  })

  if (fileWrapped > 0) {
    totalFiles++
    totalWrapped += fileWrapped
    touchedFiles.push({ file, count: fileWrapped })
    if (WRITE) fs.writeFileSync(file, newLines.join('\n'))
  }
}

console.log(`${WRITE ? 'Wrote' : 'Would wrap'} ${totalWrapped} bare https:// reference(s) across ${totalFiles} file(s).`)
for (const { file, count } of touchedFiles) {
  console.log(`  ${count.toString().padStart(3)}  ${file}`)
}
