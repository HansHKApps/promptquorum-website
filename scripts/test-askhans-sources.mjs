#!/usr/bin/env node
// Ask Hans must link every PromptQuorum page its answer drew on (owner rule 2026-11-01).
import { createJiti } from 'jiti'
const root = process.cwd()
const jiti = createJiti(root + '/x.js', { alias: { '@': root + '/src' }, interopDefault: true })
const { missingSourcesMarkdown: m } = await jiti.import(root + '/src/lib/askhans/sources')
let fail = 0
const check = (ok, name) => { if (!ok) { fail++; console.error('FAIL ' + name) } else console.log('PASS ' + name) }
const pages = { '/local-llms/how-much-vram-for-llms': 'How much VRAM for local LLMs', '/local-llms/ollama': 'Ollama guide', '/directory': 'Directory' }
const no = 'On an M5 Mac, unified memory decides what you can run. Rough guide from the VRAM sizing article.'
const en = m(no, 'Which LLM on M5 Mac?', pages, 'en')
check(en.includes('[How much VRAM for local LLMs](/local-llms/how-much-vram-for-llms)') && !en.includes('/directory'), 'unlinked answer gets the matching source (en, no prefix)')
check(m(no, 'q', pages, 'de').includes('(/de/local-llms/how-much-vram-for-llms)') && m(no, 'q', pages, 'de').includes('Quellen:'), 'de gets prefix + label')
check(m('See [VRAM](https://www.promptquorum.com/de/local-llms/how-much-vram-for-llms).', 'q', pages, 'de') === '', 'already linked (other locale prefix) -> nothing added')
check(m(no, 'q', {}, 'en') === '', 'no tool pages -> nothing')
check(m('', 'q', pages, 'en') === '', 'empty answer -> nothing')
check(m('Etwas ganz anderes.', 'q', pages, 'en').includes('How much VRAM'), 'no word match -> first page as fallback')
process.exit(fail ? 1 : 0)
