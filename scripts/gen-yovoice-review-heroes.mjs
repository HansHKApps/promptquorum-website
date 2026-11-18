#!/usr/bin/env node
// Hero generator for yovoice-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts (price, license, platforms) from apps/yovoice.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'yovoice-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Speech, voice cloning, AI music', 'Runs locally, CLI and MCP', 'Apache-2.0, free'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Sprache, Stimmklonen, KI-Musik', 'Läuft lokal, CLI und MCP', 'Apache-2.0, kostenlos'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Voix, clonage vocal, musique IA', 'Local, avec CLI et MCP', 'Apache-2.0, gratuit'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Voz, clonación de voz, música IA', 'Local, con CLI y MCP', 'Apache-2.0, gratis'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['音声・声のクローン・AI音楽', 'ローカル実行、CLIとMCP', 'Apache-2.0、無料'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['语音、声音克隆、AI 音乐', '本地运行，含 CLI 与 MCP', 'Apache-2.0，免费'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Voz, clonagem de voz, música IA', 'Local, com CLI e MCP', 'Apache-2.0, gratuito'], price: 'Preço', priceV: 'Gratuito', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['كلام واستنساخ صوت وموسيقى بالذكاء الاصطناعي', 'يعمل محليًا مع CLI وMCP', 'Apache-2.0 ومجاني'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'Apache-2.0', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['음성·음성 복제·AI 음악', '로컬 실행, CLI·MCP', 'Apache-2.0, 무료'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
