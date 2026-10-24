#!/usr/bin/env node
// Hero generator for buzz-captions-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/buzz-captions.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'buzz-captions-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline Whisper transcription', 'Subtitles in SRT and VTT', 'Free and open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Offline-Transkription mit Whisper', 'Untertitel als SRT und VTT', 'Gratis und Open Source'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Transcription Whisper hors ligne', 'Sous-titres SRT et VTT', 'Gratuit et libre'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Windows, macOS, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Transcripción Whisper sin conexión', 'Subtítulos SRT y VTT', 'Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Whisperでオフライン文字起こし', 'SRT・VTT字幕を書き出し', '無料のオープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Windows, macOS, Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Whisper 离线转录', '导出 SRT 和 VTT 字幕', '免费开源'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Transcrição Whisper offline', 'Legendas SRT e VTT', 'Grátis e de código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نسخ Whisper دون اتصال', 'ترجمات SRT وVTT', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Windows وmacOS وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Whisper 오프라인 받아쓰기', 'SRT·VTT 자막 내보내기', '무료 오픈소스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum 가이드' },
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
