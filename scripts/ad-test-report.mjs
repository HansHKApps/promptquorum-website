#!/usr/bin/env node
// "Are the page views real?" report: our counter against GSC and Umami (docs/ad-display-test.md).
//   npm run adtest:report -- --counter counter.json --gsc gsc.json [--umami 12345] [--out report.md]
import { readFileSync, writeFileSync } from 'node:fs'
import { analyse, renderReport } from './lib/ad-test-report-core.mjs'

const args = process.argv.slice(2)
const opt = (name) => {
  const i = args.indexOf(name)
  return i === -1 ? undefined : args[i + 1]
}
const json = (name) => {
  const file = opt(name)
  if (!file) {
    console.error('usage: npm run adtest:report -- --counter counter.json --gsc gsc.json [--umami 12345] [--out report.md]')
    process.exit(1)
  }
  return JSON.parse(readFileSync(file, 'utf8'))
}
const umami = opt('--umami') === undefined ? null : Number(opt('--umami'))
if (umami !== null && !(Number.isInteger(umami) && umami > 0)) {
  console.error('--umami must be the page view count as a whole number')
  process.exit(1)
}
const pages = new Set(['uncensored-local-llm-creative-writing-ethics', 'uncensored-llm-models'])
const report = renderReport(analyse({ counter: json('--counter'), gsc: json('--gsc'), pages, umami }))
const out = opt('--out')
if (out) writeFileSync(out, report)
else console.log(report)
