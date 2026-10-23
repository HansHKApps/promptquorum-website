#!/usr/bin/env node
// Unit test for splitBidiRuns (src/lib/hero/bidi-runs.ts).
import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
const src = fs.readFileSync(path.join(process.cwd(), 'src/lib/hero/bidi-runs.ts'), 'utf8')
const js = ts.transpileModule(src, { compilerOptions: { module: 1, target: 99 } }).outputText
const m = { exports: {} }
new Function('module', 'exports', js)(m, m.exports)
const f = (s) => m.exports.splitBidiRuns(s).map((r) => `${r.dir}:${r.text}`)
const cases = [
  ['pure Arabic', 'أسرع النماذج المحلية', ['rtl:أسرع', 'rtl:النماذج', 'rtl:المحلية']],
  ['one Latin word', 'مقابل GPU للنماذج', ['rtl:مقابل', 'ltr:GPU', 'rtl:للنماذج']],
  ['multi-word Latin + range', 'على ذاكرة 4 GB Qwen3 1.7B ~25–40 tok/s', ['rtl:على', 'rtl:ذاكرة', 'ltr:4 GB Qwen3 1.7B ~25–40 tok/s']],
  ['colon after Arabic', 'المعالج فقط: ~10–25 tok/s', ['rtl:المعالج', 'rtl:فقط:', 'ltr:~10–25 tok/s']],
  ['colon after Latin', 'GPU: منفصل', ['ltr:GPU', 'rtl::', 'rtl:منفصل']],
  ['trailing Latin', 'شغّل الأمر ollama run qwen3:1.7b', ['rtl:شغّل', 'rtl:الأمر', 'ltr:ollama run qwen3:1.7b']],
  ['leading Latin', 'Qwen3 1.7B على ذاكرة 4 GB', ['ltr:Qwen3 1.7B', 'rtl:على', 'rtl:ذاكرة', 'ltr:4 GB']],
  ['symbol before number', 'أسرع عادةً ×5–10', ['rtl:أسرع', 'rtl:عادةً', 'ltr:×5–10']],
]
for (const [name, input, want] of cases) { assert.deepStrictEqual(f(input), want, name); console.log('ok', name) }
console.log('all passed')
