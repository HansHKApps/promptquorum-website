#!/usr/bin/env node
// Hero generator for compass-local-ai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/compass-local-ai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3446'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'compass-local-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['On-device AI chat for iPhone', 'Apple Intelligence and OCR', 'Free, optional web search'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Not stated', plat: 'Platforms', platV: 'iOS 26+', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Chat auf dem iPhone-Gerät', 'Apple Intelligence und OCR', 'Gratis, Websuche optional'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'Nicht angegeben', plat: 'Plattformen', platV: 'iOS 26+', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA sur l’iPhone même', 'Apple Intelligence et OCR', 'Gratuit, recherche web en option'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Non précisée', plat: 'Plateformes', platV: 'iOS 26+', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA en el iPhone', 'Apple Intelligence y OCR', 'Gratis, búsqueda web opcional'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'No indicada', plat: 'Plataformas', platV: 'iOS 26+', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone端末内のAIチャット', 'Apple IntelligenceとOCR', '無料・Web検索は任意'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: '記載なし', plat: '対応プラットフォーム', platV: 'iOS 26以降', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 设备端 AI 聊天', 'Apple Intelligence 与 OCR', '免费,网页搜索可选'], price: '价格', priceV: '免费', lic: '许可证', licV: '未说明', plat: '支持平台', platV: 'iOS 26+', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA no iPhone', 'Apple Intelligence e OCR', 'Grátis, busca na web opcional'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Não informada', plat: 'Plataformas', platV: 'iOS 26+', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي على iPhone', 'Apple Intelligence وOCR', 'مجاني وبحث ويب اختياري'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'غير مذكور', plat: 'المنصات', platV: 'iOS 26+', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone 기기 내 AI 채팅', 'Apple Intelligence와 OCR', '무료, 웹 검색은 선택'], price: '가격', priceV: '무료', lic: '라이선스', licV: '명시 없음', plat: '플랫폼', platV: 'iOS 26 이상', footer: 'PromptQuorum 가이드' },
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
