#!/usr/bin/env node
// Hero generator for picoclaw-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/picoclaw.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'picoclaw-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Small AI agent in Go', 'Works with Ollama and vLLM', 'Free, MIT licence'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Linux, Mac, Win, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kleiner KI-Agent in Go', 'Läuft mit Ollama und vLLM', 'Gratis, MIT-Lizenz'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Linux, Mac, Win, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Petit agent IA en Go', 'Compatible Ollama et vLLM', 'Gratuit, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Linux, Mac, Win, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Pequeño agente de IA en Go', 'Funciona con Ollama y vLLM', 'Gratis, licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Linux, Mac, Win, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Go製の小型AIエージェント', 'OllamaとvLLMに対応', '無料、MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Linux、Mac、Win、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Go 编写的小型 AI 智能体', '支持 Ollama 和 vLLM', '免费，MIT 许可'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Linux、Mac、Win、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Pequeno agente de IA em Go', 'Funciona com Ollama e vLLM', 'Grátis, licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Linux, Mac, Win, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي صغير بلغة Go', 'يعمل مع Ollama وvLLM', 'مجاني، ترخيص MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Linux وMac وWin وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Go로 만든 소형 AI 에이전트', 'Ollama·vLLM 지원', '무료, MIT 라이선스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Linux, Mac, Win, Android', footer: 'PromptQuorum 가이드' },
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
