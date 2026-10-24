#!/usr/bin/env node
// Hero generator for murmur-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/murmur.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'murmur-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI music composed on your iPhone', 'Scores your photos and videos', 'Free, one-time Pro unlock'], price: 'Price', priceV: 'Free + Pro', lic: 'Source', licV: 'Closed source', plat: 'Platforms', platV: 'iPhone', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Musik direkt auf dem iPhone', 'Vertont Fotos und Videos', 'Gratis, einmaliges Pro-Upgrade'], price: 'Preis', priceV: 'Gratis + Pro', lic: 'Quellcode', licV: 'Closed Source', plat: 'Plattformen', platV: 'iPhone', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Musique IA créée sur votre iPhone', 'Met en musique photos et vidéos', 'Gratuit, Pro en achat unique'], price: 'Prix', priceV: 'Gratuit + Pro', lic: 'Code source', licV: 'Fermé', plat: 'Plateformes', platV: 'iPhone', footer: 'Guide PromptQuorum' },
  es: { hl: ['Música IA creada en tu iPhone', 'Pone música a fotos y vídeos', 'Gratis, Pro con pago único'], price: 'Precio', priceV: 'Gratis + Pro', lic: 'Código', licV: 'Cerrado', plat: 'Plataformas', platV: 'iPhone', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone内で作曲するAI音楽', '写真や動画にBGMを付与', '無料、Proは買い切り'], price: '価格', priceV: '無料＋Pro', lic: 'ソース', licV: 'クローズド', plat: '対応プラットフォーム', platV: 'iPhone', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在 iPhone 本机生成 AI 音乐', '为照片和视频配乐', '免费，Pro 一次性买断'], price: '价格', priceV: '免费 + Pro', lic: '源代码', licV: '闭源', plat: '支持平台', platV: 'iPhone', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Música IA criada no seu iPhone', 'Põe trilha em fotos e vídeos', 'Grátis, Pro em compra única'], price: 'Preço', priceV: 'Grátis + Pro', lic: 'Código', licV: 'Fechado', plat: 'Plataformas', platV: 'iPhone', footer: 'Guia PromptQuorum' },
  ar: { hl: ['موسيقى بالذكاء الاصطناعي على iPhone', 'موسيقى لصورك ومقاطعك', 'مجاني وPro بدفعة واحدة'], price: 'السعر', priceV: 'مجاني + Pro', lic: 'الشيفرة', licV: 'مغلقة المصدر', plat: 'المنصات', platV: 'iPhone', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone에서 만드는 AI 음악', '사진·영상에 음악 입히기', '무료, Pro는 1회 구매'], price: '가격', priceV: '무료 + Pro', lic: '소스', licV: '비공개', plat: '플랫폼', platV: 'iPhone', footer: 'PromptQuorum 가이드' },
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
