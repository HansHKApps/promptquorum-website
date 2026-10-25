#!/usr/bin/env node
// Hero generator for llama-app-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/llama-app.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'llama-app-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local models on Mac and Windows', 'From the llama.cpp team', 'Free, with a local API'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac, Windows 11', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale Modelle auf Mac und Windows', 'Vom llama.cpp-Team', 'Gratis, mit lokaler API'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac, Windows 11', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles locaux sur Mac et Windows', "De l'équipe llama.cpp", 'Gratuit, avec API locale'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac, Windows 11', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos locales en Mac y Windows', 'Del equipo de llama.cpp', 'Gratis, con API local'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows 11', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['MacとWindowsでローカルAI', 'llama.cppチーム製', '無料、ローカルAPI付き'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac、Windows 11', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在 Mac 和 Windows 本地运行', '出自 llama.cpp 团队', '免费，带本地 API'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac、Windows 11', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos locais no Mac e Windows', 'Da equipe do llama.cpp', 'Grátis, com API local'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows 11', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج محلية على Mac وWindows', 'من فريق llama.cpp', 'مجاني مع API محلية'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Mac وWindows 11', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Mac·Windows에서 로컬 모델', 'llama.cpp 팀이 제작', '무료, 로컬 API 제공'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac, Windows 11', footer: 'PromptQuorum 가이드' },
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
