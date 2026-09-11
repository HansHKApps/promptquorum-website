#!/usr/bin/env node
// Regenerates src/lib/prompt-engineering/articleTitleIndex.ts from the actual
// per-locale `title:` field of every Prompt Engineering article file. This keeps
// the inline-link title lookup used by PromptEngineeringPostClient.tsx's
// renderInlineLinks() in sync with real article titles instead of a hand-maintained
// English-only string list that can silently drift from the content.
//
// Usage: node scripts/generate-pe-title-index.mjs > src/lib/prompt-engineering/articleTitleIndex.ts
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const BARREL = path.join(ROOT, 'src/lib/prompt-engineering/articles-barrel.ts')
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// Parse articles-barrel.ts to get { "slug" -> absolute file path } (same approach
// as scripts/generate-seo-registry.mjs).
function parseBarrel(barrelPath) {
  const content = fs.readFileSync(barrelPath, 'utf-8')
  const lines = content.split('\n')
  const importMap = {}
  for (const line of lines) {
    const m = line.match(/^import\s*\{\s*article\s+as\s+(a_\S+)\s*\}\s*from\s*['"]([^'"]+)['"]/)
    if (m) importMap[m[1]] = m[2]
  }
  const slugToVar = {}
  for (const line of lines) {
    const m = line.match(/^\s+"([^"]+)":\s+(a_[^,\s]+)/)
    if (m) slugToVar[m[1]] = m[2]
  }
  const slugToFile = {}
  const barrelDir = path.dirname(barrelPath)
  for (const [slug, varName] of Object.entries(slugToVar)) {
    const rel = importMap[varName]
    if (rel) slugToFile[slug] = path.resolve(barrelDir, rel + '.ts')
  }
  return slugToFile
}

// Extract the `title:` field for each locale block in a PE article file.
function extractTitles(filePath) {
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n')
  const result = {}
  const langLines = []
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^ {2,4}(en|de|fr|ja|zh|es|pt|ar|ko):\s*\{/)
    if (m) langLines.push({ lang: m[1], lineIndex: i })
  }
  for (let li = 0; li < langLines.length; li++) {
    const { lang, lineIndex } = langLines[li]
    const endLine = li + 1 < langLines.length ? langLines[li + 1].lineIndex : lines.length
    for (let i = lineIndex; i < endLine; i++) {
      const line = lines[i]
      const m = line.match(/^\s+title:\s*'((?:[^'\\]|\\.)*)'/) || line.match(/^\s+title:\s*"((?:[^"\\]|\\.)*)"/)
      if (m) {
        result[lang] = m[1].replace(/\\'/g, "'").replace(/\\"/g, '"')
        break
      }
    }
  }
  return result
}

function escapeSingleQuote(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const slugToFile = parseBarrel(BARREL)
const byLang = {}
for (const lang of LANGS) byLang[lang] = {}

for (const [slug, filePath] of Object.entries(slugToFile)) {
  if (!fs.existsSync(filePath)) continue
  const titles = extractTitles(filePath)
  for (const [lang, title] of Object.entries(titles)) {
    if (title) byLang[lang][title.trim()] = slug
  }
}

let out = ''
out += "import type { Language } from '@/lib/blog/blogContent'\n\n"
out += '// AUTO-GENERATED — do not hand-edit. Regenerate with:\n'
out += '//   node scripts/generate-pe-title-index.mjs > src/lib/prompt-engineering/articleTitleIndex.ts\n'
out += "// Maps each locale's exact article title text (as written in that locale's article\n"
out += '// file) to its slug, so inline body-text shortcodes like\n'
out += '// [Grundlagen: Was ist Prompt Engineering?] resolve using the real translated title\n'
out += '// instead of an English-only string match. Source of truth: the `title` field in each\n'
out += '// src/lib/prompt-engineering/articles/*.ts file, via articles-barrel.ts.\n'
out += 'export const ARTICLE_TITLES_BY_LANG: Partial<Record<Language, Record<string, string>>> = {\n'
for (const lang of LANGS) {
  const entries = Object.entries(byLang[lang]).sort((a, b) => a[1].localeCompare(b[1]))
  out += `  ${lang}: {\n`
  for (const [title, slug] of entries) {
    out += `    '${escapeSingleQuote(title)}': '${slug}',\n`
  }
  out += '  },\n'
}
out += '}\n'

process.stdout.write(out)
