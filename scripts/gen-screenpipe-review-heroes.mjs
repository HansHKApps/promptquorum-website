#!/usr/bin/env node
// Hero generator for screenpipe-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/screenpipe.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3444'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'screenpipe-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Records screen and audio locally', 'Search via timeline, REST API, MCP', 'Commercial license, not OSI open source'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Source-available', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Zeichnet Bildschirm und Audio lokal auf', 'Suche per Zeitleiste, REST-API, MCP', 'Kommerzielle Lizenz, kein OSI-Open-Source'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Source-available', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Enregistre écran et audio en local', 'Recherche par chronologie, API REST, MCP', 'Licence commerciale, pas open source OSI'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Code disponible', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Graba pantalla y audio en local', 'Búsqueda por línea de tiempo, API REST, MCP', 'Licencia comercial, no código abierto OSI'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Código disponible', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['画面と音声をローカルで記録', 'タイムラインとMCPで検索', '商用ライセンス、OSI非認定'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'ソース公開型', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在本地录制屏幕和音频', '时间线、API、MCP 检索', '商业许可证，非 OSI 开源'], price: '价格', priceV: '免费增值', lic: '许可证', licV: '源码可见', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Grava tela e áudio localmente', 'Busca por linha do tempo, API REST, MCP', 'Licença comercial, não código aberto OSI'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Código disponível', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يسجّل الشاشة والصوت محليًا', 'بحث عبر خط زمني أو واجهة API أو MCP', 'ترخيص تجاري وليس مفتوح المصدر وفق OSI'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'الشيفرة متاحة', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['화면과 오디오를 로컬에 녹화', '타임라인·API·MCP로 검색', '상용 라이선스, OSI 비인증'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: '소스 공개형', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
