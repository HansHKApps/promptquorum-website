#!/usr/bin/env node
// Hero generator for fullmoon-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/fullmoon.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'fullmoon-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Free offline AI chat on Apple MLX', 'iPhone, iPad and Mac', 'No release since January 2025'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kostenloser Offline-KI-Chat mit Apple MLX', 'iPhone, iPad und Mac', 'Kein Release seit Januar 2025'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'iPhone, iPad, Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA gratuit hors ligne, Apple MLX', 'iPhone, iPad et Mac', 'Aucune version depuis janv. 2025'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'iPhone, iPad, Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA gratis sin conexión (MLX)', 'iPhone, iPad y Mac', 'Sin versiones desde enero 2025'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['無料のオフラインAIチャット', 'iPhone・iPad・Mac', '2025年1月以降リリースなし'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'iPhone・iPad・Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['免费离线 AI 聊天', 'iPhone、iPad、Mac', '2025年1月后无新版本'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'iPhone、iPad、Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA grátis offline com MLX', 'iPhone, iPad e Mac', 'Sem versões desde jan. 2025'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'iPhone, iPad, Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي مجانية دون اتصال', 'iPhone وiPad وMac', 'بلا إصدارات منذ يناير 2025'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'iPhone وiPad وMac', footer: 'دليل PromptQuorum' },
  ko: { hl: ['무료 오프라인 AI 채팅', 'iPhone·iPad·Mac', '2025년 초 이후 릴리스 없음'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'iPhone·iPad·Mac', footer: 'PromptQuorum 가이드' },
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
