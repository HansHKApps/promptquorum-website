#!/usr/bin/env node
// Hero generator for krita-ai-diffusion-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/krita-ai-diffusion.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'krita-ai-diffusion-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI fill inside Krita', 'Local GPU or cloud', 'Free plugin, GPL-3.0'], price: 'Price', priceV: 'Free plugin', lic: 'License', licV: 'GPL-3.0', plat: 'Platforms', platV: 'Win, Mac, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Füllung in Krita', 'Lokale GPU oder Cloud', 'Gratis-Plugin, GPL-3.0'], price: 'Preis', priceV: 'Gratis-Plugin', lic: 'Lizenz', licV: 'GPL-3.0', plat: 'Plattformen', platV: 'Win, Mac, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Remplissage IA dans Krita', 'GPU local ou cloud', 'Plugin gratuit, GPL-3.0'], price: 'Prix', priceV: 'Plugin gratuit', lic: 'Licence', licV: 'GPL-3.0', plat: 'Plateformes', platV: 'Win, Mac, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Relleno con IA en Krita', 'GPU local o nube', 'Plugin gratis, GPL-3.0'], price: 'Precio', priceV: 'Plugin gratis', lic: 'Licencia', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'Win, Mac, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Kritaで生成塗りつぶし', 'ローカルGPUかクラウド', '無料、GPL-3.0'], price: '価格', priceV: 'プラグイン無料', lic: 'ライセンス', licV: 'GPL-3.0', plat: '対応プラットフォーム', platV: 'Win/Mac/Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Krita 内 AI 填充', '本地 GPU 或云端', '免费，GPL-3.0'], price: '价格', priceV: '插件免费', lic: '许可证', licV: 'GPL-3.0', plat: '支持平台', platV: 'Win/Mac/Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Preenchimento IA no Krita', 'GPU local ou nuvem', 'Plugin grátis, GPL-3.0'], price: 'Preço', priceV: 'Plugin grátis', lic: 'Licença', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'Win, Mac, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تعبئة بالذكاء الاصطناعي في Krita', 'GPU محلية أو سحابة', 'إضافة مجانية، GPL-3.0'], price: 'السعر', priceV: 'إضافة مجانية', lic: 'الرخصة', licV: 'GPL-3.0', plat: 'المنصات', platV: 'Win وMac وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Krita에서 AI 채우기', '로컬 GPU 또는 클라우드', '무료, GPL-3.0'], price: '가격', priceV: '플러그인 무료', lic: '라이선스', licV: 'GPL-3.0', plat: '플랫폼', platV: 'Win/Mac/Linux', footer: 'PromptQuorum 가이드' },
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
