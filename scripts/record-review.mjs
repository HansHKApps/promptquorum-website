#!/usr/bin/env node
// Appends one entry to data/review-ledger.json — an audit trail of registry
// refresh cycles and baseline burn-down passes. Nothing else in this repo
// reads this file yet; it exists so "when was this last actually reviewed"
// has an answer that isn't a guess. See docs/MODEL_REGISTRY_REFRESH.md.
//
// Usage:
//   node scripts/record-review.mjs --action <refresh|baseline-write|baseline-burndown|catalog-refresh> \
//     --summary "..." [--branch <branch-name>]
//   (both `--action=refresh` and `--action refresh` work)
//
// Does not itself run any validation — call this after you've verified the
// action manually. Recording a review you didn't do defeats the purpose.

import fs from 'fs'
import { execSync } from 'child_process'

const LEDGER_PATH = 'data/review-ledger.json'
const VALID_ACTIONS = ['refresh', 'baseline-write', 'baseline-burndown', 'catalog-refresh']

const args = process.argv.slice(2)
// Accepts both `--name=value` and `--name value` (the skill documents the second form).
function getArg(name) {
  const flag = `--${name}=`
  const eq = args.find((a) => a.startsWith(flag))
  if (eq) return eq.slice(flag.length)
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : undefined
}

const action = getArg('action')
const summary = getArg('summary')
const branch = getArg('branch') ?? execSync('git branch --show-current', { encoding: 'utf8' }).trim()

if (!action || !VALID_ACTIONS.includes(action)) {
  console.error(`--action is required and must be one of: ${VALID_ACTIONS.join(', ')}`)
  process.exit(1)
}
if (!summary) {
  console.error('--summary is required (what did this review actually verify?)')
  process.exit(1)
}

let ledger
try {
  ledger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'))
} catch {
  ledger = { entries: [] }
}

ledger.entries.push({ date: new Date().toISOString().slice(0, 10), action, summary, branch })

fs.writeFileSync(LEDGER_PATH, JSON.stringify(ledger, null, 2) + '\n')
console.log(`Recorded "${action}" review to ${LEDGER_PATH} (${ledger.entries.length} total entries)`)
