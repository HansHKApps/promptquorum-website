#!/usr/bin/env node
// Hero generator for openclient-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/openclient.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openclient-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const PLAT = 'iPhone · iPad · Mac'
const L = {
  en: { hl: ['Native iPhone, iPad, Mac client', 'Your Ollama or LiteLLM server', 'Free, open source (AGPL)'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Nativer Client für iPhone, iPad, Mac', 'Ihr Ollama- oder LiteLLM-Server', 'Kostenlos, quelloffen (AGPL)'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Client natif iPhone, iPad, Mac', 'Votre serveur Ollama ou LiteLLM', 'Gratuit, open source (AGPL)'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Cliente nativo para iPhone, iPad, Mac', 'Tu servidor Ollama o LiteLLM', 'Gratis, código abierto (AGPL)'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone・iPad・Mac対応', 'OllamaとLiteLLM対応', '無料・AGPL公開'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone、iPad、Mac 原生', '连接你的 Ollama 服务器', '免费开源（AGPL）'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Cliente nativo para iPhone, iPad, Mac', 'Seu servidor Ollama ou LiteLLM', 'Grátis, código aberto (AGPL)'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['عميل أصلي لـ iPhone وiPad وMac', 'خادم Ollama أو LiteLLM الخاص بك', 'مجاني ومفتوح المصدر (AGPL)'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Apple 네이티브 클라이언트', 'Ollama 서버에 연결', '무료 오픈소스 (AGPL)'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: PLAT },
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
