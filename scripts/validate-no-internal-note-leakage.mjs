#!/usr/bin/env node
// scripts/validate-no-internal-note-leakage.mjs
//
// Prebuild check: flags any template-literal interpolation (`${...}`) inside
// article content that pulls from a data-module field whose name signals
// internal/audit-trail text rather than reader-facing prose — e.g. a field
// named *Note, *note, *Comment, *comment, *Flag, *flag.
//
// Origin: the balcony-solar cluster build (2026-07-02) shipped exactly this
// defect twice. `COUNTRY_DATA`'s Germany entry has fields like
// `registrationRequired` and `powerLimitNote` written in a verification-note
// style ("confirmed still the sole registration step... re-confirmed unchanged
// since the May 2024 reform") for the data module's OWN audit trail. Two
// articles (BSOL-08, BSOL-13) interpolated those fields directly as bolded
// H2-opener sentences, producing prose that reads as internal commentary, not
// an article. A third, worse instance (BSOL-12) interpolated
// `US_FEDERAL_CERTIFICATION.note` and `US_STATE_COUNT_NOTE` — fields that
// literally contained author instructions ("Do not describe any specific
// product as...") and an internal slug reference ("BSOL-12 next_refresh_due
// is +60 days..."). None of this was caught by TypeScript (the interpolation
// type-checks fine — a string is a string) or by reading the code structure;
// it only surfaced when the actual rendered output was inspected by hand.
// This script automates that inspection so it doesn't depend on remembering
// to do it manually.
//
// What it does NOT flag (by design): interpolating a short, concrete VALUE
// (a wattage number, a date, a boolean-derived string) is fine and is in fact
// the correct pattern — it's what keeps a shared data module properly "wired"
// so a future correction propagates without a manual prose edit. The signal
// this script keys on is the FIELD NAME, not interpolation itself: a field
// literally named `...Note`/`...Comment`/`...Flag` is presumptively
// audit-trail text (full sentences meant for a future data-maintainer), not a
// standalone value meant to sit inside a hand-written sentence.
//
// Run: node scripts/validate-no-internal-note-leakage.mjs

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Confirmed zero findings across all 385 scanned files as of 2026-07-02 —
// blocking mode is safe. If this ever needs to go back to warn-only while a
// backlog is triaged, flip to false (see validate-internal-links.mjs for the
// precedent on how that transition works).
const BLOCK_ON_FINDINGS = true

// Directories to scan. Add new content clusters here as they're created.
const SCAN_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
]

// Field-name suffixes that signal internal/audit-trail text. Case-insensitive,
// matched as a property-access suffix inside a `${...}` expression, e.g.
// `${de.powerLimitNote}`, `${c.legalStatusNote}`, `${X.note}`.
const INTERNAL_FIELD_PATTERN = /\$\{[^}]*\.([A-Za-z0-9_]*(?:[Nn]ote|[Cc]omment|[Ff]lag))\}/g

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (entry.isFile() && full.endsWith('.ts')) out.push(full)
  }
  return out
}

const findings = []
let filesScanned = 0

for (const dir of SCAN_DIRS) {
  const files = walk(path.join(ROOT, dir))
  for (const file of files) {
    filesScanned++
    const rel = path.relative(ROOT, file)
    const src = fs.readFileSync(file, 'utf8')
    const lines = src.split('\n')
    lines.forEach((line, idx) => {
      let m
      INTERNAL_FIELD_PATTERN.lastIndex = 0
      while ((m = INTERNAL_FIELD_PATTERN.exec(line))) {
        findings.push({ file: rel, line: idx + 1, field: m[1], snippet: line.trim().slice(0, 140) })
      }
    })
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log('🕵️  Internal-note-leakage check (article prose pulling audit-trail fields)')
console.log(`   files scanned: ${filesScanned}`)

if (findings.length === 0) {
  console.log('✅ No interpolations of *Note/*Comment/*Flag-named fields found in article prose.')
  process.exit(0)
}

const byFile = {}
for (const f of findings) (byFile[f.file] ||= []).push(f)
console.log(`\n⚠️  ${findings.length} suspicious interpolation(s) across ${Object.keys(byFile).length} file(s):\n`)
for (const [file, items] of Object.entries(byFile)) {
  console.log(`  ${file}`)
  for (const it of items) {
    console.log(`    L${it.line} → pulls ".${it.field}" — verify this reads as natural prose, not an audit note`)
    console.log(`      ${it.snippet}`)
  }
}
console.log('\n  Fix: replace the full-note interpolation with a hand-written sentence that')
console.log('  interpolates only the concrete VALUE (a number, a date) if one exists — see')
console.log('  src/lib/balcony-solar/articles/balkonkraftwerk-germany-rules.ts for the pattern.')

if (BLOCK_ON_FINDINGS) {
  console.log('\n❌ Build blocked: suspicious interpolations above.')
  process.exit(1)
} else {
  console.log('\n⚠️  WARN mode (non-blocking). Set BLOCK_ON_FINDINGS=true once existing findings are triaged.')
  process.exit(0)
}
