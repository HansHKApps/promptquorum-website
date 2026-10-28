#!/usr/bin/env node
// Unit test for src/lib/outbound-utm.ts (source tag on outbound links; owner rule 2026-10-28).
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
const src = fs.readFileSync(path.join(process.cwd(), 'src/lib/outbound-utm.ts'), 'utf8')
const js = ts.transpileModule(src, { compilerOptions: { module: 1, target: 99 } }).outputText
const m = { exports: {} }
new Function('module', 'exports', js)(m, m.exports)
const { withUtm, shouldTagUrl, campaignForPath } = m.exports
let fail = 0
const eq = (got, want, name) => { if (got !== want) { fail++; console.error(`FAIL ${name}\n  got  ${got}\n  want ${want}`) } else console.log(`PASS ${name}`) }
const T = 'utm_source=promptquorum.com&utm_medium=referral&utm_campaign=directory'
const t = (u) => withUtm(u, { campaign: 'directory' })
eq(t('https://immich.app/'), `https://immich.app/?${T}`, 'plain site')
eq(t('https://immich.app'), `https://immich.app?${T}`, 'no path')
eq(t('https://x.io/a?b=1'), `https://x.io/a?b=1&${T}`, 'existing query appended')
eq(t('https://x.io/a#faq'), `https://x.io/a?${T}#faq`, 'fragment kept last')
eq(t('https://x.io/a?b=1#faq'), `https://x.io/a?b=1&${T}#faq`, 'query + fragment')
eq(t('https://x.io/a?utm_source=other'), 'https://x.io/a?utm_source=other', 'never overwrite existing utm')
eq(t(t('https://x.io/')), `https://x.io/?${T}`, 'idempotent')
for (const u of [
  'https://github.com/a/b', 'https://gist.github.com/x', 'https://apps.apple.com/app/id1', 'https://play.google.com/store/apps/details?id=a',
  'https://huggingface.co/x', 'https://en.wikipedia.org/wiki/X', 'https://arxiv.org/abs/1', 'https://eur-lex.europa.eu/x', 'https://www.nist.gov/x',
  'https://www.gov.uk/x', 'https://www.bsi.bund.de/x'.replace('bund.de', 'gov'), 'https://mit.edu/x', 'https://x.com/a', 'https://www.youtube.com/watch?v=1',
  'https://www.promptquorum.com/de/blog', 'https://promptquorum.com/', 'mailto:a@b.c', 'tel:123', '/relative', '#anchor', 'javascript:void(0)', 'not a url', 'https://localhost/x',
]) eq(withUtm(u, { campaign: 'x' }), u, `skip ${u}`)
for (const u of ['https://www.amazon.com/s?k=laptop+cooling+pad', 'https://www.amazon.de/dp/B0', 'https://amzn.to/abc', 'https://www.newegg.com/p/1', 'https://www.bhphotovideo.com/c/x', 'https://www.mindfactory.de/x', 'https://store.minisforum.com/x', 'https://www.microsoft.com/store/x'])
  eq(withUtm(u, { campaign: 'article' }).includes('utm_source=promptquorum.com&utm_medium=referral&utm_campaign=article'), true, `shop tagged ${u}`)
eq(withUtm('https://www.amazon.com/s?k=a+b', { campaign: 'article' }), 'https://www.amazon.com/s?k=a+b&utm_source=promptquorum.com&utm_medium=referral&utm_campaign=article', 'amazon query kept, tag appended')
eq(shouldTagUrl('https://learn.microsoft.com/x'), false, 'microsoft docs skipped')
eq(shouldTagUrl('https://notgithub.com/x'), true, 'lookalike host is not skipped')
eq(shouldTagUrl('https://evilpromptquorum.com/x'), true, 'lookalike of own host is tagged')
eq(campaignForPath('/power-local-llm/local-llm-software-directory'), 'directory', 'path directory')
eq(campaignForPath('/de/power-local-llm/immich-review'), 'app-review', 'path review, locale stripped')
eq(campaignForPath('/local-llms/best-local-llm-apps-compared'), 'comparison', 'path comparison')
eq(campaignForPath('/'), 'home', 'path home')
eq(campaignForPath('/local-llms/what-is-quantization'), 'article', 'path article')

// Wiring: the tagger must stay mounted in the root layout.
const layout = fs.readFileSync(path.join(process.cwd(), 'src/app/layout.tsx'), 'utf8')
eq(/<OutboundUtmTagger\s*\/>/.test(layout), true, 'OutboundUtmTagger mounted in layout')
const tagger = fs.readFileSync(path.join(process.cwd(), 'src/components/OutboundUtmTagger.tsx'), 'utf8')
eq(/affiliate/.test(src.replace(/\/\/.*$/gm, '')) || /affiliate/.test(tagger.replace(/\/\/.*$/gm, '')), false, 'no "affiliate" label in code (no programme)')
process.exit(fail ? 1 : 0)
