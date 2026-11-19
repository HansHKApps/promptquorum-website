#!/usr/bin/env node
// Hero generator for humla-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/humla.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3454'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'humla-review'
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
  en: {"hl": ["Records calls without a bot", "Local Whisper + Ollama offline", "Free & open source, Mac only"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "MIT", "plat": "Platform", "platV": "Mac", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Nimmt Calls ohne Bot auf", "Whisper + Ollama offline", "Kostenlos, quelloffen, nur Mac"], "price": "Preis", "priceV": "Kostenlos", "lic": "Lizenz", "licV": "MIT", "plat": "Plattform", "platV": "Mac", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Enregistre sans robot", "Whisper + Ollama hors ligne", "Gratuit, open source, Mac"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "MIT", "plat": "Plateforme", "platV": "Mac", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Graba llamadas sin bot", "Whisper + Ollama sin conexión", "Gratis, código abierto, Mac"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "MIT", "plat": "Plataforma", "platV": "Mac", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Grava chamadas sem bot", "Whisper + Ollama offline", "Grátis, código aberto, Mac"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "MIT", "plat": "Plataforma", "platV": "Mac", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["ボットなしで通話を録音", "完全オフライン動作も可", "無料・OSS、Mac専用"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "MIT", "plat": "プラットフォーム", "platV": "Mac", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["无需机器人即可录音", "可完全离线运行", "免费开源，仅限Mac"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "MIT", "plat": "平台", "platV": "Mac", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["يسجّل المكالمات بلا بوت", "Whisper وOllama دون إنترنت", "مجاني ومفتوح، لـ Mac فقط"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "MIT", "plat": "المنصة", "platV": "Mac", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["봇 없이 통화 녹음", "완전 오프라인 가능", "무료 오픈소스, Mac 전용"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "MIT", "plat": "플랫폼", "platV": "Mac", "footer": "PromptQuorum 가이드"},
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
