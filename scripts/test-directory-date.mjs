#!/usr/bin/env node
// Unit test for src/lib/power-local-llm/directory-date.ts (automatic directory "Last updated" date).
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
const src = fs.readFileSync(path.join(process.cwd(), 'src/lib/power-local-llm/directory-date.ts'), 'utf8')
const js = ts.transpileModule(src, { compilerOptions: { module: 1, target: 99 } }).outputText
const m = { exports: {} }
new Function('module', 'exports', js)(m, m.exports)
const { computeDirectoryDate: c, applyDirectoryDate: apply } = m.exports
const T = (...d) => d.map((x) => ({ addedDate: x }))
let fail = 0
const eq = (got, want, name) => { if (got !== want) { fail++; console.error(`FAIL ${name}: got ${got}, want ${want}`) } else console.log(`PASS ${name}`) }
eq(c('2026-10-05', T('2026-10-05', '2026-09-01', null)), '2026-10-05', 'no tools after baseline')
eq(c('2026-10-05', T('2026-10-06', '2026-10-06', '2026-10-07', '2026-10-08')), '2026-10-05', '4 new tools: unchanged')
eq(c('2026-10-05', T('2026-10-09', '2026-10-06', '2026-10-06', '2026-10-07', '2026-10-08')), '2026-10-09', '5 new tools: date of the 5th')
eq(c('2026-10-05', T(...Array(9).fill('2026-10-06'), '2026-10-07')), '2026-10-07', '10 new tools: date of the 10th')
eq(c('2026-10-05', T(...Array(9).fill('2026-10-06'))), '2026-10-06', '9 new tools: date of the 5th')
const blk = { en: { dateModified: '2026-10-05', schema: { dateModified: '2026-10-05' } }, de: { dateModified: '2026-10-05' } }
apply(blk, T('2026-10-06', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09'))
eq(JSON.stringify(blk), JSON.stringify({ en: { dateModified: '2026-10-09', schema: { dateModified: '2026-10-09' } }, de: { dateModified: '2026-10-09' } }), 'applies to top level and nested schema')
process.exit(fail ? 1 : 0)
