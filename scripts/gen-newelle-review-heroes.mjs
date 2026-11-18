#!/usr/bin/env node
// Hero generator for newelle-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/newelle.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'newelle-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI assistant for Linux desktops', 'Local models, voice, MCP', 'Free and open source, GPL-3.0'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'GPL-3.0', plat: 'Runs on', platV: 'Linux (Flatpak)', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Assistent für Linux', 'Lokale Modelle, Sprache, MCP', 'Kostenlos und Open Source, GPL-3.0'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'GPL-3.0', plat: 'Läuft auf', platV: 'Linux (Flatpak)', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Assistant IA pour Linux', 'Modèles locaux, voix, MCP', 'Gratuit et open source, GPL-3.0'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'GPL-3.0', plat: 'Fonctionne sur', platV: 'Linux (Flatpak)', footer: 'Guide PromptQuorum' },
  es: { hl: ['Asistente de IA para Linux', 'Modelos locales, voz y MCP', 'Gratis y de código abierto, GPL-3.0'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'GPL-3.0', plat: 'Funciona en', platV: 'Linux (Flatpak)', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Linux向けAIアシスタント', 'ローカルモデル、音声、MCP', '無料のオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'GPL-3.0', plat: '動作環境', platV: 'Linux（Flatpak）', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Linux AI 助手', '本地模型、语音、MCP', '免费开源，GPL-3.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'GPL-3.0', plat: '运行于', platV: 'Linux（Flatpak）', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Assistente de IA para Linux', 'Modelos locais, voz e MCP', 'Grátis e de código aberto, GPL-3.0'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'GPL-3.0', plat: 'Roda em', platV: 'Linux (Flatpak)', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مساعد ذكاء اصطناعي لنظام Linux', 'نماذج محلية، صوت، MCP', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'GPL-3.0', plat: 'يعمل على', platV: 'Linux (Flatpak)', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Linux용 AI 어시스턴트', '로컬 모델, 음성, MCP', '무료 오픈소스, GPL-3.0'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'GPL-3.0', plat: '실행 환경', platV: 'Linux(Flatpak)', footer: 'PromptQuorum 가이드' },
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
