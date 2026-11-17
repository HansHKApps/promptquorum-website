#!/usr/bin/env node
// Hero generator for conduit-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts (price, license, platforms) from apps/conduit.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3444'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'conduit-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Open WebUI client for iPhone and Android', 'Also Ollama, OpenRouter, Hermes', 'GPL-3.0, voice calls, widgets'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'GPL-3.0', plat: 'Platforms', platV: 'iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Open-WebUI-Client für iPhone und Android', 'Auch Ollama, OpenRouter, Hermes', 'GPL-3.0, Sprachanrufe, Widgets'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'GPL-3.0', plat: 'Plattformen', platV: 'iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Client Open WebUI pour iPhone et Android', 'Aussi Ollama, OpenRouter, Hermes', 'GPL-3.0, appels vocaux, widgets'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'GPL-3.0', plat: 'Plateformes', platV: 'iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Cliente Open WebUI para iPhone y Android', 'También Ollama, OpenRouter, Hermes', 'GPL-3.0, llamadas de voz, widgets'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Open WebUI用スマホアプリ', 'OllamaやHermesにも接続', 'GPL-3.0、音声通話対応'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'GPL-3.0', plat: '対応プラットフォーム', platV: 'iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Open WebUI 手机客户端', '兼容 Ollama 与 Hermes', 'GPL-3.0，支持语音通话'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'GPL-3.0', plat: '支持平台', platV: 'iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Cliente Open WebUI para iPhone e Android', 'Também Ollama, OpenRouter, Hermes', 'GPL-3.0, chamadas de voz, widgets'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'GPL-3.0', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['عميل Open WebUI لـ iPhone وAndroid', 'يدعم أيضًا Ollama وOpenRouter وHermes', 'GPL-3.0 ومكالمات صوتية وأدوات'], price: 'السعر', priceV: 'مجاني + مدفوع', lic: 'الترخيص', licV: 'GPL-3.0', plat: 'المنصات', platV: 'iOS وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Open WebUI용 모바일 앱', 'Ollama·Hermes도 연결', 'GPL-3.0, 음성 통화'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'GPL-3.0', plat: '플랫폼', platV: 'iOS, Android', footer: 'PromptQuorum 가이드' },
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
