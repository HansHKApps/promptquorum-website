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
const { detectLang: d } = await jiti.import(root + '/src/lib/askhans/detect-lang')
check(d('Welche App passt für meinen Mac mit 24 GB?', 'en') === 'de', 'German question on an English page -> de')
check(d('Quelle application pour mon ordinateur ?', 'en') === 'fr', 'French question -> fr')
check(d('¿Qué app puedo usar en mi Mac?', 'de') === 'es', 'Spanish question -> es')
check(d('Qual app posso usar no meu computador?', 'en') === 'pt', 'Portuguese question -> pt')
check(d('我的电脑应该用哪个本地模型？', 'en') === 'zh', 'Chinese -> zh')
check(d('私のMacに合うアプリは？', 'en') === 'ja', 'Japanese -> ja')
check(d('내 컴퓨터에 맞는 앱은?', 'en') === 'ko', 'Korean -> ko')
check(d('ما هو أفضل تطبيق لجهازي؟', 'en') === 'ar', 'Arabic -> ar')
check(d('Which app fits my Mac with 24 GB?', 'de') === 'en', 'English question on a German page -> en')
check(d('Ollama', 'de') === 'de', 'bare product name -> page language')
process.exit(fail ? 1 : 0)
