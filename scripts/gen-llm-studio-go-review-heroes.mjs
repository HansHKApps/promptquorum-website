#!/usr/bin/env node
// Hero generator for llm-studio-go-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/llm-studio-go.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'llm-studio-go-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Chat, voice, images and music', 'Runs on iPhone and iPad', 'Free, with ads'], price: 'Price', priceV: 'Free + ads', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iPhone · iPad', footer: 'PromptQuorum Guide' },
  de: { hl: ['Chat, Sprache, Bilder, Musik', 'Läuft auf iPhone und iPad', 'Kostenlos, mit Werbung'], price: 'Preis', priceV: 'Gratis + Werbung', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iPhone · iPad', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat, voix, images, musique', 'Sur iPhone et iPad', 'Gratuit, avec publicité'], price: 'Prix', priceV: 'Gratuit + pub', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iPhone · iPad', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat, voz, imágenes y música', 'En iPhone y iPad', 'Gratis, con anuncios'], price: 'Precio', priceV: 'Gratis + anuncios', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iPhone · iPad', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['チャット・音声・画像・音楽', 'iPhoneとiPadで動作', '無料・広告あり'], price: '価格', priceV: '無料（広告あり）', lic: 'ライセンス', licV: 'クローズド', plat: '対応プラットフォーム', platV: 'iPhone · iPad', footer: 'PromptQuorumガイド' },
  zh: { hl: ['聊天、语音、图像、音乐', '在 iPhone 和 iPad 运行', '免费，含广告'], price: '价格', priceV: '免费（含广告）', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iPhone · iPad', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat, voz, imagens e música', 'No iPhone e no iPad', 'Grátis, com anúncios'], price: 'Preço', priceV: 'Grátis + anúncios', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iPhone · iPad', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة وصوت وصور وموسيقى', 'على iPhone و iPad', 'مجاني، مع إعلانات'], price: 'السعر', priceV: 'مجاني + إعلانات', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iPhone · iPad', footer: 'دليل PromptQuorum' },
  ko: { hl: ['채팅·음성·이미지·음악', 'iPhone·iPad에서 실행', '무료, 광고 포함'], price: '가격', priceV: '무료 (광고)', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'iPhone · iPad', footer: 'PromptQuorum 가이드' },
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
