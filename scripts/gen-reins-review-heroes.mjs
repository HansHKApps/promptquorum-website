#!/usr/bin/env node
// Hero generator for reins-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/reins.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'reins-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Ollama and LM Studio on your iPhone', 'Runs MLX models on the device', 'Free, optional Pro plans'], price: 'Price', priceV: 'Free + Pro', lic: 'Source', licV: 'Closed (v2)', plat: 'Platforms', platV: 'iPhone, iPad', footer: 'PromptQuorum Guide' },
  de: { hl: ['Ollama und LM Studio auf dem iPhone', 'Führt MLX-Modelle auf dem Gerät aus', 'Gratis, optionale Pro-Tarife'], price: 'Preis', priceV: 'Gratis + Pro', lic: 'Quellcode', licV: 'Closed (v2)', plat: 'Plattformen', platV: 'iPhone, iPad', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Ollama et LM Studio sur iPhone', 'Exécute des modèles MLX sur l’appareil', 'Gratuit, formules Pro en option'], price: 'Prix', priceV: 'Gratuit + Pro', lic: 'Code source', licV: 'Fermé (v2)', plat: 'Plateformes', platV: 'iPhone, iPad', footer: 'Guide PromptQuorum' },
  es: { hl: ['Ollama y LM Studio en tu iPhone', 'Ejecuta modelos MLX en el dispositivo', 'Gratis, planes Pro opcionales'], price: 'Precio', priceV: 'Gratis + Pro', lic: 'Código', licV: 'Cerrado (v2)', plat: 'Plataformas', platV: 'iPhone, iPad', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhoneでOllamaとLM Studio', '端末上でMLXモデルを実行', '無料、Proは任意'], price: '価格', priceV: '無料＋Pro', lic: 'ソース', licV: '非公開(v2)', plat: '対応プラットフォーム', platV: 'iPhone、iPad', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在 iPhone 上用 Ollama 和 LM Studio', '设备上运行 MLX 模型', '免费，Pro 可选'], price: '价格', priceV: '免费 + Pro', lic: '源代码', licV: '闭源(v2)', plat: '支持平台', platV: 'iPhone、iPad', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Ollama e LM Studio no iPhone', 'Executa modelos MLX no aparelho', 'Grátis, planos Pro opcionais'], price: 'Preço', priceV: 'Grátis + Pro', lic: 'Código', licV: 'Fechado (v2)', plat: 'Plataformas', platV: 'iPhone, iPad', footer: 'Guia PromptQuorum' },
  ar: { hl: ['Ollama وLM Studio على iPhone', 'يشغّل نماذج MLX على الجهاز', 'مجاني وخطط Pro اختيارية'], price: 'السعر', priceV: 'مجاني + Pro', lic: 'الشيفرة', licV: 'مغلقة (v2)', plat: 'المنصات', platV: 'iPhone وiPad', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone에서 Ollama·LM Studio', '기기에서 MLX 모델 실행', '무료, Pro는 선택'], price: '가격', priceV: '무료 + Pro', lic: '소스', licV: '비공개(v2)', plat: '플랫폼', platV: 'iPhone, iPad', footer: 'PromptQuorum 가이드' },
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
