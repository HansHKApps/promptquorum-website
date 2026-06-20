#!/usr/bin/env node
/**
 * Applies FSI/PDI bidi isolation to Latin/digit runs in the ar: locale block's
 * snippet fields (title, seoTitle, metaDescription, twitterDescription).
 *
 * Only touches top-level metadata fields — stops before sections: {} so body
 * content is never modified. Does not touch any other locale block.
 *
 * Usage:
 *   node scripts/geo/codemod-ar-bidi.mjs --dry-run [files...]
 *   node scripts/geo/codemod-ar-bidi.mjs --apply  [files...]
 *
 * If no files given, globs all article .ts files across the four clusters.
 */

import { readFileSync, writeFileSync } from 'fs'
import fg from 'fast-glob'
import { isolateLTR } from './isolate-ltr.mjs'

const CLUSTERS = [
  'src/lib/local-llms/articles/*.ts',
  'src/lib/prompt-engineering/articles/*.ts',
  'src/lib/power-local-llm/articles/*.ts',
  'src/lib/prompt-bites/articles/*.ts',
  'src/lib/smart-home/articles/*.ts',
]

// Only these fields at the TOP LEVEL of the ar: block (before sections:) are touched.
const SNIPPET_FIELDS = new Set(['title', 'seoTitle', 'metaDescription', 'twitterDescription'])

/** Process one file. Returns { changed, changes, newContent } */
function processFile(content) {
  const lines = content.split('\n')
  const newLines = []
  const changes = []

  let inArBlock = false
  let braceDepth = 0
  let inSections = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (!inArBlock) {
      // Detect `  ar: {` at any indentation level (but must be a locale-level key)
      if (/^\s+ar:\s*\{/.test(line)) {
        inArBlock = true
        braceDepth = 1
        inSections = false
        newLines.push(line)
        continue
      }
      newLines.push(line)
      continue
    }

    // Track depth BEFORE this line (so we know if the line is a direct child)
    const depthBefore = braceDepth

    // Count braces on this line to update depth
    for (const ch of line) {
      if (ch === '{') braceDepth++
      else if (ch === '}') braceDepth--
    }

    // If we fell back to 0, ar block is closed
    if (braceDepth <= 0) {
      inArBlock = false
      inSections = false
      newLines.push(line)
      continue
    }

    // Only process direct children of ar: (depthBefore === 1)
    if (depthBefore === 1 && !inSections) {
      // Once we hit sections: stop fixing top-level fields
      if (/^\s+sections:\s*\{/.test(line)) {
        inSections = true
        newLines.push(line)
        continue
      }

      // Match: <indent><fieldName>: '<value>'<optional comma/comment>
      const m = line.match(/^(\s+)(title|seoTitle|metaDescription|twitterDescription):\s*(['"])(.*)\3(,?\s*)$/)
      if (m) {
        const [, indent, field, quote, value, tail] = m
        const newValue = isolateLTR(value)
        if (newValue !== value) {
          changes.push({ lineNum: i + 1, field, before: value, after: newValue })
          newLines.push(`${indent}${field}: ${quote}${newValue}${quote}${tail}`)
          continue
        }
      }
    }

    newLines.push(line)
  }

  return { changed: changes.length > 0, changes, newContent: newLines.join('\n') }
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run') || !args.includes('--apply')
  const fileArgs = args.filter(a => !a.startsWith('--'))

  let files
  if (fileArgs.length > 0) {
    files = fileArgs
  } else {
    files = (await Promise.all(CLUSTERS.map(p => fg(p)))).flat()
  }

  let totalChanged = 0, totalFiles = 0

  for (const filepath of files.sort()) {
    let content
    try {
      content = readFileSync(filepath, 'utf-8')
    } catch {
      console.error(`SKIP (unreadable): ${filepath}`)
      continue
    }

    const { changed, changes, newContent } = processFile(content)
    if (!changed) continue

    totalFiles++
    totalChanged += changes.length

    if (dryRun) {
      console.log(`\n── ${filepath}`)
      for (const c of changes) {
        console.log(`  L${c.lineNum} [${c.field}]`)
        console.log(`    BEFORE: ${JSON.stringify(c.before)}`)
        console.log(`    AFTER:  ${JSON.stringify(c.after)}`)
      }
    } else {
      writeFileSync(filepath, newContent, 'utf-8')
      console.log(`PATCHED (${changes.length} fields): ${filepath}`)
    }
  }

  const mode = dryRun ? 'DRY-RUN' : 'APPLIED'
  console.log(`\n[${mode}] ${totalFiles} files / ${totalChanged} field changes`)
  if (dryRun) console.log('Re-run with --apply to write changes.')
}

main().catch(e => { console.error(e); process.exit(1) })
