#!/usr/bin/env node
// Hero generator for searxng-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/searxng.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3436'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'searxng-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Self-hosted search for local LLMs', 'JSON results for Open WebUI', 'Free, AGPL-3.0, runs in Docker'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Setup', platV: 'Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Selbst gehostete Suche für lokale LLMs', 'JSON-Ergebnisse für Open WebUI', 'Gratis, AGPL-3.0, läuft in Docker'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Einrichtung', platV: 'Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Recherche auto-hébergée pour LLM locaux', 'Résultats JSON pour Open WebUI', 'Gratuit, AGPL-3.0, via Docker'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Installation', platV: 'Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Búsqueda autoalojada para LLM locales', 'Resultados JSON para Open WebUI', 'Gratis, AGPL-3.0, con Docker'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Instalación', platV: 'Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['セルフホスト型の検索基盤', 'JSONで検索結果を返す', '無料、AGPL-3.0'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '導入', platV: 'Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['本地大模型的自托管搜索', '以 JSON 返回结果', '免费，AGPL-3.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '部署', platV: 'Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Busca auto-hospedada para LLMs locais', 'Resultados JSON para o Open WebUI', 'Grátis, AGPL-3.0, roda no Docker'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Instalação', platV: 'Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['بحث مستضاف ذاتيًا لنماذج LLM المحلية', 'نتائج JSON لـ Open WebUI', 'مجاني وAGPL-3.0 ويعمل في Docker'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'الإعداد', platV: 'Docker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['로컬 LLM용 검색 백엔드', 'JSON으로 결과 반환', '무료, AGPL-3.0'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '설치', platV: 'Docker', footer: 'PromptQuorum 가이드' },
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
