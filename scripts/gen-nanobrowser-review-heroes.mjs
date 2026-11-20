#!/usr/bin/env node
// Hero generator for nanobrowser-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/nanobrowser.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'nanobrowser-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

// Arabic: a Latin name directly before a colon scrambles in the hero renderer, so the hero title drops the colon.
const iso = (t) => t.replace('مراجعة Nanobrowser: وكيل متصفح مجاني ومفتوح المصدر بالذكاء الاصطناعي لمتصفحي Chrome وEdge', 'مراجعة وكيل المتصفح المفتوح المصدر Nanobrowser').replace('Nanobrowser 리뷰: Chrome·Edge용 무료 오픈소스 AI 브라우저 에이전트', 'Nanobrowser 리뷰')

const L = {
  en: { hl: ['AI agent in the browser side panel', 'Free Apache-2.0 extension', 'Works with local Ollama'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'Chrome, Edge', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Agent in der Browser-Seitenleiste', 'Kostenlos, Apache-2.0', 'Mit lokalem Ollama nutzbar'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'Chrome, Edge', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA dans le panneau latéral', 'Gratuit, Apache-2.0', 'Compatible Ollama local'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'Chrome, Edge', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente de IA en el panel lateral', 'Gratis, Apache-2.0', 'Funciona con Ollama local'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Chrome, Edge', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['サイドパネルでAIが作業', '無料・Apache-2.0', 'ローカルOllamaも利用可'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: '対応環境', platV: 'Chrome、Edge', footer: 'PromptQuorumガイド' },
  zh: { hl: ['侧边栏中的 AI 智能体', '免费，Apache-2.0', '可搭配本地 Ollama'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: 'Chrome、Edge', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente de IA no painel lateral', 'Grátis, Apache-2.0', 'Funciona com Ollama local'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Chrome, Edge', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي في اللوحة الجانبية', 'مجاني برخصة Apache-2.0', 'ممكن مع Ollama محلي'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'Apache-2.0', plat: 'المنصات', platV: 'Chrome وEdge', footer: 'دليل PromptQuorum' },
  ko: { hl: ['사이드 패널의 AI 에이전트', '무료, Apache-2.0', '로컬 Ollama 사용 가능'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: 'Chrome, Edge', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: iso(stripMd(article[lang].title)),
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
