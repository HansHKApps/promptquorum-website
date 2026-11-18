#!/usr/bin/env node
// Hero generator for nativ-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/nativ.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'nativ-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local AI for Mac, built on MLX', 'Chat, images and dictation', 'Free and open source, MIT'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Runs on', platV: 'Mac (Apple Silicon)', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale KI für den Mac mit MLX', 'Chat, Bilder und Diktat', 'Kostenlos und Open Source, MIT'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Läuft auf', platV: 'Mac (Apple Silicon)', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA locale pour Mac avec MLX', 'Chat, images et dictée', 'Gratuit et open source, MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Fonctionne sur', platV: 'Mac (Apple Silicon)', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA local para Mac con MLX', 'Chat, imágenes y dictado', 'Gratis y de código abierto, MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Funciona en', platV: 'Mac (Apple Silicon)', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Mac向けローカルAI（MLX）', 'チャット、画像、音声入力', '無料のオープンソース、MIT'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '動作環境', platV: 'Mac（Apple Silicon）', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Mac 本地 AI，基于 MLX', '对话、图像和听写', '免费开源，MIT 许可'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '运行于', platV: 'Mac（Apple Silicon）', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA local para Mac com MLX', 'Chat, imagens e ditado', 'Grátis e de código aberto, MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Roda em', platV: 'Mac (Apple Silicon)', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء محلي لـ Mac بتقنية MLX', 'دردشة وصور وإملاء', 'مجاني ومفتوح المصدر، MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'يعمل على', platV: 'Mac (Apple Silicon)', footer: 'دليل PromptQuorum' },
  ko: { hl: ['MLX 기반 Mac 로컬 AI', '채팅, 이미지, 받아쓰기', '무료 오픈소스, MIT'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '실행 환경', platV: 'Mac(Apple Silicon)', footer: 'PromptQuorum 가이드' },
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
