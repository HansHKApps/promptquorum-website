#!/usr/bin/env node
// Hero generator for cozyclay-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/cozyclay.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'cozyclay-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Free browser 3D previs for AI video', 'MCP server for Claude and Cursor', 'AGPL open source, no GPU needed'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'Browser, macOS, Windows', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kostenlose 3D-Previs im Browser', 'MCP-Server für Claude und Cursor', 'AGPL-Open-Source, keine GPU nötig'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'Browser, macOS, Windows', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Previs 3D gratuite dans le navigateur', 'Serveur MCP pour Claude et Cursor', 'Open source AGPL, sans GPU'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'Navigateur, macOS, Windows', footer: 'Guide PromptQuorum' },
  es: { hl: ['Previs 3D gratis en el navegador', 'Servidor MCP para Claude y Cursor', 'Código abierto AGPL, sin GPU'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Navegador, macOS, Windows', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ブラウザで動く無料3Dプリビズ', 'MCPサーバー付き', 'AGPL、GPU不要'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: 'ブラウザ、macOS、Windows', footer: 'PromptQuorumガイド' },
  zh: { hl: ['浏览器中的免费3D预演', '附带 MCP 服务器', 'AGPL 开源，无需 GPU'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', platV: '浏览器、macOS、Windows', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Previs 3D gratuita no navegador', 'Servidor MCP para Claude e Cursor', 'Código aberto AGPL, sem GPU'], price: 'Preço', priceV: 'Gratuito', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Navegador, macOS, Windows', footer: 'Guia PromptQuorum' },
  ar: { hl: ['معاينة ثلاثية الأبعاد مجانية في المتصفح', 'خادم MCP لـ Claude وCursor', 'مفتوح المصدر AGPL دون GPU'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'المتصفح وmacOS وWindows', footer: 'دليل PromptQuorum' },
  ko: { hl: ['브라우저 무료 3D 프리비즈', 'MCP 서버 포함', 'AGPL, GPU 불필요'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: '브라우저, macOS, Windows', footer: 'PromptQuorum 가이드' },
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
