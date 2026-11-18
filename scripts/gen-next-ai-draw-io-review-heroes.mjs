#!/usr/bin/env node
// Hero generator for next-ai-draw-io-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/next-ai-draw-io.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3449'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'next-ai-draw-io-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Describe a diagram, AI draws it', 'Editable draw.io canvas', 'Web, desktop and MCP server'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'Web, macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Diagramm beschreiben, KI zeichnet', 'Bearbeitbare draw.io-Fläche', 'Web, Desktop und MCP-Server'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'Web, macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Décrivez un diagramme, l\'IA le dessine', 'Canevas draw.io modifiable', 'Web, bureau et serveur MCP'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'Web, macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Describe un diagrama, la IA lo dibuja', 'Lienzo draw.io editable', 'Web, escritorio y servidor MCP'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Web, macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['図を説明するとAIが描く', '編集可能なdraw.io', 'Web・デスクトップ・MCP'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: '対応プラットフォーム', platV: 'Web、macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['描述图表，AI 来绘制', '可编辑的 draw.io 画布', '网页、桌面和 MCP'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: '网页、macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Descreva um diagrama, a IA desenha', 'Tela draw.io editável', 'Web, desktop e servidor MCP'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Web, macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['صف المخطط ويرسمه الذكاء الاصطناعي', 'لوحة draw.io قابلة للتعديل', 'ويب وسطح مكتب وخادم MCP'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'Apache-2.0', plat: 'المنصات', platV: 'ويب وmacOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['설명하면 AI가 그려 줌', '편집 가능한 draw.io', '웹·데스크톱·MCP'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: '웹, macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
