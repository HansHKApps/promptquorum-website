#!/usr/bin/env node
// Hero generator for zeno-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/zeno.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'zeno-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Private AI workspace for your Mac", "Bundled 35B model, offline", "Free, no per-token cost"], "price": "Price", "priceV": "Free", "lic": "Source", "licV": "Closed source", "plat": "Platforms", "platV": "Mac", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Privater KI-Arbeitsplatz für den Mac", "Eingebautes 35B-Modell, offline", "Gratis, keine Kosten pro Token"], "price": "Preis", "priceV": "Gratis", "lic": "Quellcode", "licV": "Closed Source", "plat": "Plattformen", "platV": "Mac", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Espace de travail IA privé pour Mac", "Modèle 35B intégré, hors ligne", "Gratuit, sans coût par jeton"], "price": "Prix", "priceV": "Gratuit", "lic": "Code source", "licV": "Fermé", "plat": "Plateformes", "platV": "Mac", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Espacio de IA privado para tu Mac", "Modelo 35B incluido, sin conexión", "Gratis, sin coste por token"], "price": "Precio", "priceV": "Gratis", "lic": "Código", "licV": "Cerrado", "plat": "Plataformas", "platV": "Mac", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Espaço de IA privado para o Mac", "Modelo 35B embutido, offline", "Grátis, sem custo por token"], "price": "Preço", "priceV": "Grátis", "lic": "Código", "licV": "Fechado", "plat": "Plataformas", "platV": "Mac", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["Mac向けプライベートAI", "35Bモデル同梱、オフライン", "無料、トークン課金なし"], "price": "価格", "priceV": "無料", "lic": "ソース", "licV": "クローズド", "plat": "対応プラットフォーム", "platV": "Mac", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["Mac 上的私有 AI 工作区", "内置 35B 模型，可离线", "免费，无按 token 计费"], "price": "价格", "priceV": "免费", "lic": "源代码", "licV": "闭源", "plat": "支持平台", "platV": "Mac", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["مساحة ذكاء اصطناعي خاصة لجهاز Mac", "نموذج 35B مدمج ودون اتصال", "مجاني ودون رسوم لكل رمز"], "price": "السعر", "priceV": "مجاني", "lic": "الشيفرة", "licV": "مغلقة المصدر", "plat": "المنصات", "platV": "Mac", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["Mac용 프라이빗 AI", "35B 모델 내장, 오프라인", "무료, 토큰 과금 없음"], "price": "가격", "priceV": "무료", "lic": "소스", "licV": "비공개", "plat": "플랫폼", "platV": "Mac", "footer": "PromptQuorum 가이드"},
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
