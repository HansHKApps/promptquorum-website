#!/usr/bin/env node
// Report + revenue simulator of the ad display test. Counts are typed in from Umami (docs/ad-display-test.md).
//   npm run adtest:report -- --input counts.json [--adblock 0.2] [--out report.md]
import { readFileSync, writeFileSync } from 'node:fs'
import { analyse, renderReport } from './lib/ad-test-report-core.mjs'

const args = process.argv.slice(2)
const opt = (name) => {
  const i = args.indexOf(name)
  return i === -1 ? undefined : args[i + 1]
}
const input = opt('--input')
if (!input) {
  console.error('usage: npm run adtest:report -- --input counts.json [--adblock 0.2] [--out report.md]')
  process.exit(1)
}
const adblock = Number(opt('--adblock') ?? 0)
if (!(adblock >= 0 && adblock < 1)) {
  console.error('--adblock must be a share from 0 to below 1, e.g. 0.2')
  process.exit(1)
}
const report = renderReport(analyse(JSON.parse(readFileSync(input, 'utf8'))), { adblock })
const out = opt('--out')
if (out) writeFileSync(out, report)
else console.log(report)
