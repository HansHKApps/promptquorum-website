#!/usr/bin/env node
// Hero generator for fluidvoice-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/fluidvoice.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3471'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'fluidvoice-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Hotkey dictation for your Mac', 'Local models, optional cloud AI', 'Free and open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'GPL-3.0', plat: 'Platforms', platV: 'macOS', footer: 'PromptQuorum Guide' },
  de: { hl: ['Diktat per Tastenkürzel für den Mac', 'Lokale Modelle, Cloud-KI optional', 'Kostenlos und quelloffen'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'GPL-3.0', plat: 'Plattformen', platV: 'macOS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Dictée par raccourci pour Mac', 'Modèles locaux, IA cloud facultative', 'Gratuit et open source'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'GPL-3.0', plat: 'Plateformes', platV: 'macOS', footer: 'Guide PromptQuorum' },
  es: { hl: ['Dictado con atajo para tu Mac', 'Modelos locales, IA en la nube opcional', 'Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'macOS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Mac向けホットキー音声入力', 'ローカルモデル、クラウドは任意', '無料のオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'GPL-3.0', plat: '対応プラットフォーム', platV: 'macOS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Mac 快捷键听写', '本地模型，云端 AI 可选', '免费且开源'], price: '价格', priceV: '免费', lic: '许可证', licV: 'GPL-3.0', plat: '支持平台', platV: 'macOS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Ditado por atalho para o seu Mac', 'Modelos locais, IA na nuvem opcional', 'Grátis e de código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'macOS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['إملاء باختصار لوحة المفاتيح لـ Mac', 'نماذج محلية وذكاء سحابي اختياري', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'GPL-3.0', plat: 'المنصات', platV: 'macOS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Mac용 단축키 받아쓰기', '로컬 모델, 선택형 클라우드', '무료 오픈소스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'GPL-3.0', plat: '플랫폼', platV: 'macOS', footer: 'PromptQuorum 가이드' },
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
