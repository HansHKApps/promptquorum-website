#!/usr/bin/env node
// Hero generator for subtitle-edit-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/subtitle-edit.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'subtitle-edit-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Transcribe with local Whisper', 'Translate with Ollama or LM Studio', 'Free, open-source subtitle editor'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Transkription mit lokalem Whisper', 'Übersetzen mit Ollama oder LM Studio', 'Kostenloser Open-Source-Untertiteleditor'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Transcrire avec Whisper en local', 'Traduire avec Ollama ou LM Studio', 'Éditeur de sous-titres libre et gratuit'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Windows, macOS, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Transcribe con Whisper en local', 'Traduce con Ollama o LM Studio', 'Editor de subtítulos gratis y abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ローカルWhisper文字起こし', 'ローカルLLMで自動翻訳', '無料のMIT字幕エディタ'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Windows・macOS・Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['用本地 Whisper 转写', '本地大模型自动翻译', '免费开源字幕编辑器'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Windows、macOS、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Transcreva com Whisper local', 'Traduza com Ollama ou LM Studio', 'Editor de legendas grátis e aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Windows, macOS, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تفريغ صوتي بـ Whisper محلي', 'ترجمة عبر Ollama أو LM Studio', 'محرّر ترجمات مجاني ومفتوح'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Windows وmacOS وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['로컬 Whisper로 전사', '로컬 LLM으로 자동 번역', '무료 오픈소스 자막 편집기'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Windows, macOS, Linux', footer: 'PromptQuorum 가이드' },
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
