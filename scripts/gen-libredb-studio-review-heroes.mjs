#!/usr/bin/env node
// Hero generator for libredb-studio-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/libredb-studio.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'libredb-studio-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['41 databases, one browser tab', 'Optional AI on local Ollama', 'Free, MIT license'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Web · Win · Mac · Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['41 Datenbanken, ein Browser-Tab', 'Optionale KI mit lokalem Ollama', 'Kostenlos, MIT-Lizenz'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Web · Win · Mac · Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['41 bases de données, un onglet', 'IA facultative avec Ollama local', 'Gratuit, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Web · Win · Mac · Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['41 bases de datos, una pestaña', 'IA opcional con Ollama local', 'Gratis, licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Web · Win · Mac · Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['41のDBを1つのブラウザタブで', 'ローカルOllamaで使える任意のAI', '無料・MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Web · Win · Mac · Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['一个标签页连接41种数据库', '可选AI，支持本地 Ollama', '免费，MIT 许可证'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Web · Win · Mac · Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['41 bancos de dados, uma aba', 'IA opcional com Ollama local', 'Grátis, licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Web · Win · Mac · Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['41 قاعدة بيانات في تبويب واحد', 'ذكاء اصطناعي اختياري مع Ollama محلي', 'مجاني، ترخيص MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Web · Win · Mac · Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['브라우저 탭 하나로 41개 DB', '로컬 Ollama로 쓰는 선택형 AI', '무료, MIT 라이선스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Web · Win · Mac · Linux', footer: 'PromptQuorum 가이드' },
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
