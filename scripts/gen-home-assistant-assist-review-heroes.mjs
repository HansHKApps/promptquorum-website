#!/usr/bin/env node
// Hero generator for home-assistant-assist-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/home-assistant-assist.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'home-assistant-assist-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local voice control for Home Assistant','Whisper, Piper and Ollama options','Free, Apache-2.0'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'Home Assistant OS', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale Sprachsteuerung für Home Assistant','Whisper, Piper und Ollama','Kostenlos, Apache-2.0'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'Home Assistant OS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Commande vocale locale pour Home Assistant','Whisper, Piper et Ollama','Gratuit, Apache-2.0'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'Home Assistant OS', footer: 'Guide PromptQuorum' },
  es: { hl: ['Control por voz local para Home Assistant','Whisper, Piper y Ollama','Gratis, Apache-2.0'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Home Assistant OS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ローカル音声操作','Ollama LLMにも対応','無料・Apache-2.0'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: 'プラットフォーム', platV: 'Home Assistant OS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['本地语音控制','支持 Ollama LLM','免费，Apache-2.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: 'Home Assistant OS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Controle por voz local no Home Assistant','Whisper, Piper e Ollama','Grátis, Apache-2.0'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Home Assistant OS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تحكم صوتي محلي في Home Assistant','Whisper وPiper وOllama','مجاني، Apache-2.0'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'Apache-2.0', plat: 'المنصات', platV: 'Home Assistant OS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['로컬 음성 제어','Ollama LLM 연동 가능','무료, Apache-2.0'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: 'Home Assistant OS', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: stripMd(article[lang].title),
    highlights: t.hl,
    facts: [
      { label: t.price, value: t.priceV },
      { label: t.lic, value: t.licV },
      { label: t.plat, value: t.platV },
    ],
    footer: t.footer,
  }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const png = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
    fs.writeFileSync(png, buf)
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`))
    fs.unlinkSync(png)
    console.log(`OK ${lang}`)
    generated++
  } catch (e) {
    console.error(`FAIL ${lang}: ${e.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
