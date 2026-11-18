#!/usr/bin/env node
// Hero generator for open-paper-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/open-paper.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'open-paper-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '500+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Hosted AI workspace for papers", "Cited answers, no hallucinated quotes", "Free Base plan, no card needed"], "price": "Price", "priceV": "Free+", "lic": "License", "licV": "AGPL-3.0", "plat": "Platform", "platV": "Web", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Gehostete KI für Fachartikel", "Antworten mit Quellenangabe", "Gratis Base-Plan, keine Karte"], "price": "Preis", "priceV": "Gratis+", "lic": "Lizenz", "licV": "AGPL-3.0", "plat": "Plattform", "platV": "Web", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["IA hébergée pour vos articles", "Réponses sourcées et citées", "Palier Base gratuit, sans CB"], "price": "Prix", "priceV": "Gratuit+", "lic": "Licence", "licV": "AGPL-3.0", "plat": "Plateforme", "platV": "Web", "footer": "Guide PromptQuorum"},
  es: {"hl": ["IA alojada para tus artículos", "Respuestas citadas con fuente", "Plan Base gratis, sin tarjeta"], "price": "Precio", "priceV": "Gratis+", "lic": "Licencia", "licV": "AGPL-3.0", "plat": "Plataforma", "platV": "Web", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["IA hospedada para seus artigos", "Respostas citadas com fonte", "Plano Base grátis, sem cartão"], "price": "Preço", "priceV": "Grátis+", "lic": "Licença", "licV": "AGPL-3.0", "plat": "Plataforma", "platV": "Web", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["論文向けホスト型AI", "出典付きの引用回答", "無料Baseプラン、カード不要"], "price": "価格", "priceV": "無料+", "lic": "ライセンス", "licV": "AGPL-3.0", "plat": "プラットフォーム", "platV": "Web", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["面向论文的托管AI", "带引用来源的回答", "免费Base套餐，无需信用卡"], "price": "价格", "priceV": "免费+", "lic": "许可证", "licV": "AGPL-3.0", "plat": "平台", "platV": "Web", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["ذكاء اصطناعي مستضاف للأوراق", "إجابات مع الاستشهاد بالمصدر", "خطة Base مجانية دون بطاقة"], "price": "السعر", "priceV": "مجاني+", "lic": "الرخصة", "licV": "AGPL-3.0", "plat": "المنصة", "platV": "Web", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["논문용 호스팅 AI", "출처 인용 답변 제공", "무료 Base 플랜, 카드 불필요"], "price": "가격", "priceV": "무료+", "lic": "라이선스", "licV": "AGPL-3.0", "plat": "플랫폼", "platV": "Web", "footer": "PromptQuorum 가이드"},
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
