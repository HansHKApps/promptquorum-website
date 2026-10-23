#!/usr/bin/env node
// Hero generator for mlx-audio-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/mlx-audio.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3472'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'mlx-audio-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Text-to-speech and transcription', 'Local OpenAI-style speech API', 'Free, MIT license'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac (Apple Silicon)', footer: 'PromptQuorum Guide' },
  de: { hl: ['Sprachausgabe und Transkription', 'Lokale Sprach-API im OpenAI-Stil', 'Kostenlos, MIT-Lizenz'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac (Apple Silicon)', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Synthèse vocale et transcription', 'API vocale locale type OpenAI', 'Gratuit, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac (Apple Silicon)', footer: 'Guide PromptQuorum' },
  es: { hl: ['Síntesis de voz y transcripción', 'API de voz local estilo OpenAI', 'Gratis, licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac (Apple Silicon)', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['音声合成と文字起こし', 'OpenAI互換のローカル音声API', '無料・MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac(Apple Silicon)', footer: 'PromptQuorumガイド' },
  zh: { hl: ['语音合成与语音识别', '本地 OpenAI 风格语音 API', '免费，MIT 许可证'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac(Apple 芯片)', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Síntese de voz e transcrição', 'API de voz local estilo OpenAI', 'Grátis, licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac (Apple Silicon)', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تحويل النص إلى كلام والتفريغ', 'واجهة كلام محلية بنمط OpenAI', 'مجاني، ترخيص MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Mac (Apple Silicon)', footer: 'دليل PromptQuorum' },
  ko: { hl: ['음성 합성과 음성 인식', 'OpenAI 호환 로컬 음성 API', '무료, MIT 라이선스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac (Apple 실리콘)', footer: 'PromptQuorum 가이드' },
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
