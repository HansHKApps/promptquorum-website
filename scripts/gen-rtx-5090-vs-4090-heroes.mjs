#!/usr/bin/env node
// Regenerate the 18 localized images (speed hero + cost-per-tok/s) for rtx-5090-vs-rtx-4090-local-llm.
// Risk-gate fix: old images carried unsourced 70B tok/s, "40-50% faster", old prices and $/M-token figures.
// New text uses only the page's sourced figures (llama.cpp #15013 7B Q4_0 tg128; InsiderLLM tracker 2026-10-15).
// Needs the dev server: npx next dev --webpack --port 3077
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3077'
const PREFIX = 'rtx-5090-vs-rtx-4090-local-llm'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const ARTICLE = fs.readFileSync('src/lib/local-llms/articles/rtx-5090-vs-rtx-4090-local-llm.ts', 'utf-8')
const ORDER = ['en', 'es', 'ar', 'de', 'fr', 'ja', 'zh', 'pt', 'ko']
const TITLES = [...ARTICLE.matchAll(/^ {6}title: '((?:[^'\\]|\\.)*)'/gm)].map((m) => m[1].replace(/\\'/g, "'"))
if (TITLES.length !== 9) throw new Error('expected 9 titles, got ' + TITLES.length)
const SPEED_TITLE = Object.fromEntries(ORDER.map((l, i) => [l, TITLES[i]]))

const S = {
  en: ['RTX 5090: 290.0 tok/s', 'RTX 4090: 186.2 tok/s', 'Dev-reported 7B Q4_0: ~56% faster'],
  de: ['RTX 5090: 290,0 Token/s', 'RTX 4090: 186,2 Token/s', 'Gemeldet, 7B Q4_0: ~56% schneller'],
  fr: ['RTX 5090 : 290.0 tok/s', 'RTX 4090 : 186.2 tok/s', 'Rapporté, 7B Q4_0 : ~56% plus rapide'],
  es: ['RTX 5090: 290.0 tok/s', 'RTX 4090: 186.2 tok/s', 'Reportado, 7B Q4_0: ~56% más rápida'],
  pt: ['RTX 5090: 290.0 tok/s', 'RTX 4090: 186.2 tok/s', 'Relatado, 7B Q4_0: ~56% mais rápida'],
  ja: ['5090 290.0 tok/s', '4090 186.2 tok/s', '開発者報告・約56%高速'],
  zh: ['5090 290.0 tok/s', '4090 186.2 tok/s', '开发者上报·约快56%'],
  ko: ['5090 290.0 tok/s', '4090 186.2 tok/s', '개발자 보고·약 56% 빠름'],
  ar: ['⁨RTX 5090⁩: ⁨290.0 tok/s⁩', '⁨RTX 4090⁩: ⁨186.2 tok/s⁩', 'أسرع بنحو ⁨56%⁩ (نتائج المطورين)'],
}
const SF = {
  en: 'Developer-reported llama.cpp results', de: 'Von Entwicklern gemeldet, llama.cpp',
  fr: 'llama.cpp, résultats rapportés', es: 'llama.cpp, datos de desarrolladores',
  pt: 'llama.cpp, dados de desenvolvedores', ja: '開発者報告のllama.cpp結果',
  zh: '开发者上报的llama.cpp结果', ko: '개발자 보고 llama.cpp 결과',
  ar: 'نتائج ⁨llama.cpp⁩ من المطورين',
}
const CT = {
  en: 'Card Price per tok/s', de: 'Kartenpreis pro Token/s', fr: 'Prix de la carte par tok/s',
  es: 'Precio de la tarjeta por tok/s', pt: 'Preço da placa por tok/s', ja: '1 tok/sあたりのカード価格',
  zh: '每tok/s的显卡价格', ko: 'tok/s당 카드 가격', ar: 'سعر البطاقة لكل ⁨tok/s⁩',
}
const C = {
  en: ['Used RTX 4090: ~$14-16', 'New RTX 5090: ~$16', 'InsiderLLM, updated 2026-10-15'],
  de: ['Gebrauchte RTX 4090: ~$14-16', 'Neue RTX 5090: ~$16', 'InsiderLLM, aktualisiert 2026-10-15'],
  fr: ["RTX 4090 d'occasion : ~$14-16", 'RTX 5090 neuve : ~$16', 'InsiderLLM, mis à jour 2026-10-15'],
  es: ['RTX 4090 usada: ~$14-16', 'RTX 5090 nueva: ~$16', 'InsiderLLM, actualizado 2026-10-15'],
  pt: ['RTX 4090 usada: ~$14-16', 'RTX 5090 nova: ~$16', 'InsiderLLM, atualizado 2026-10-15'],
  ja: ['中古4090: 約$14-16', '新品5090: 約$16', '出典: InsiderLLM'],
  zh: ['二手4090: 约$14-16', '全新5090: 约$16', '来源: InsiderLLM'],
  ko: ['중고 4090: 약 $14-16', '신품 5090: 약 $16', '출처: InsiderLLM'],
  ar: ['⁨RTX 4090⁩ مستعملة: ⁨~$14-16⁩', '⁨RTX 5090⁩ جديدة: ⁨~$16⁩', 'تحديث ⁨InsiderLLM⁩ في ⁨2026-10-15⁩'],
}
const CF = {
  en: 'Llama 2 7B Q4_0, price / tok/s', de: 'Llama 2 7B Q4_0, Preis / Token/s', fr: 'Llama 2 7B Q4_0, prix / tok/s',
  es: 'Llama 2 7B Q4_0, precio / tok/s', pt: 'Llama 2 7B Q4_0, preço / tok/s',
  ja: 'InsiderLLM 2026-10-15更新 / 7B Q4_0', zh: 'InsiderLLM 2026-10-15更新 / 7B Q4_0', ko: 'InsiderLLM 2026-10-15 업데이트 / 7B Q4_0',
  ar: '⁨Llama 2 7B Q4_0⁩',
}

async function gen(lang, kind, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, subtitle: '', ...spec }) })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const png = path.join(IMAGES_DIR, `${PREFIX}-${kind}-hero-${lang}.png`)
  const webp = path.join(IMAGES_DIR, `${PREFIX}-${kind}-hero-${lang}.webp`)
  fs.writeFileSync(png, buf)
  await sharp(png).webp({ lossless: true, effort: 6 }).toFile(webp)
  fs.unlinkSync(png)
  console.log(`OK ${path.basename(webp)} (${fs.statSync(webp).size} bytes)`)
}
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ORDER
let failed = 0
for (const lang of langs) {
  try {
    await gen(lang, 'speed-comparison', { title: SPEED_TITLE[lang], highlights: S[lang], footer: SF[lang] })
    await gen(lang, 'cost-per-token', { title: CT[lang], highlights: C[lang], footer: CF[lang] })
  } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
