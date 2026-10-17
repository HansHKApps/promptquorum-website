#!/usr/bin/env node
// Unit test for getAppActivity in src/components/local-ai-directory/staleness.ts
// (3-month "quiet" warning, 6-month grey "likely dead" tile; owner rule 2026-10-16).
// Also validates every tile's lastUpstreamUpdate: ISO date, not in the future, source URL present.
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
const src = fs.readFileSync(path.join(process.cwd(), 'src/components/local-ai-directory/staleness.ts'), 'utf8')
const js = ts.transpileModule(src, { compilerOptions: { module: 1, target: 99 } }).outputText
const m = { exports: {} }
new Function('module', 'exports', js)(m, m.exports)
const { getAppActivity: a } = m.exports
const NOW = Date.parse('2026-10-16')
const daysAgo = (n) => new Date(NOW - n * 86400000).toISOString().slice(0, 10)
let fail = 0
const eq = (got, want, name) => { if (got !== want) { fail++; console.error(`FAIL ${name}: got ${got}, want ${want}`) } else console.log(`PASS ${name}`) }
eq(a(undefined, NOW), 'unknown', 'unset -> unknown (no warning)')
eq(a('garbage', NOW), 'unknown', 'invalid -> unknown')
eq(a(daysAgo(10), NOW), 'active', '10 days -> active')
eq(a(daysAgo(90), NOW), 'active', '90 days -> still active')
eq(a(daysAgo(91), NOW), 'quiet', '91 days -> quiet')
eq(a(daysAgo(180), NOW), 'quiet', '180 days -> still quiet')
eq(a(daysAgo(181), NOW), 'dead', '181 days -> dead')

const dir = path.join(process.cwd(), 'src/lib/power-local-llm/apps')
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
  const s = fs.readFileSync(path.join(dir, f), 'utf8')
  const d = s.match(/^\s*lastUpstreamUpdate:\s*'([^']*)'/m)
  if (!d) continue
  const ok = /^\d{4}-\d{2}-\d{2}$/.test(d[1]) && !Number.isNaN(Date.parse(d[1])) && Date.parse(d[1]) <= Date.now()
  if (!ok) { fail++; console.error(`FAIL ${f}: bad lastUpstreamUpdate ${d[1]}`) }
  if (!/^\s*lastUpstreamUpdateSource:\s*'https?:\/\//m.test(s)) { fail++; console.error(`FAIL ${f}: lastUpstreamUpdate without lastUpstreamUpdateSource`) }
}
process.exit(fail ? 1 : 0)
