#!/usr/bin/env node
// Hero generator for browser-use-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/browser-use.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3452'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'browser-use-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

// Arabic: a Latin name directly before a colon scrambles in the hero renderer, so the hero title drops the colon.
const iso = (t) => t.replace('مراجعة Browser Use: وكيل متصفح بالذكاء الاصطناعي مفتوح المصدر لـ Python', 'مراجعة وكيل المتصفح مفتوح المصدر Browser Use')

const L = {
  en: { hl: ['AI drives a real browser', 'Free MIT-licensed Python library', 'Local Ollama model possible'], price: 'Price', priceV: 'Free + paid cloud', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Python, CLI, cloud', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI steuert einen echten Browser', 'Kostenlose Python-Bibliothek, MIT', 'Lokales Ollama-Modell möglich'], price: 'Preis', priceV: 'Gratis + Cloud', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Python, CLI, Cloud', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Une IA pilote un vrai navigateur', 'Bibliothèque Python gratuite, MIT', 'Modèle Ollama local possible'], price: 'Prix', priceV: 'Gratuit + cloud', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Python, CLI, cloud', footer: 'Guide PromptQuorum' },
  es: { hl: ['La IA maneja un navegador real', 'Biblioteca Python gratuita, MIT', 'Posible con Ollama local'], price: 'Precio', priceV: 'Gratis + nube', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Python, CLI, nube', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['AIが実際のブラウザを操作', '無料のMIT Pythonライブラリ', 'ローカルOllamaも利用可'], price: '価格', priceV: '無料＋有料クラウド', lic: 'ライセンス', licV: 'MIT', plat: '対応環境', platV: 'Python/CLI/クラウド', footer: 'PromptQuorumガイド' },
  zh: { hl: ['AI 操控真实浏览器', '免费 MIT 许可 Python 库', '可搭配本地 Ollama'], price: '价格', priceV: '免费＋付费云端', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Python/CLI/云端', footer: 'PromptQuorum 指南' },
  pt: { hl: ['A IA controla um navegador real', 'Biblioteca Python grátis, MIT', 'Possível com Ollama local'], price: 'Preço', priceV: 'Grátis + nuvem', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Python, CLI, nuvem', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء اصطناعي يشغّل متصفحًا حقيقيًا', 'مكتبة Python مجانية برخصة MIT', 'ممكن مع Ollama محلي'], price: 'السعر', priceV: 'مجاني + سحابة', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Python وCLI وسحابة', footer: 'دليل PromptQuorum' },
  ko: { hl: ['AI가 실제 브라우저를 조작', '무료 MIT Python 라이브러리', '로컬 Ollama 사용 가능'], price: '가격', priceV: '무료 + 유료 클라우드', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Python, CLI, 클라우드', footer: 'PromptQuorum 가이드' },
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
