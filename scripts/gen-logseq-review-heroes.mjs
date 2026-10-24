#!/usr/bin/env node
// Hero generator for logseq-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/logseq.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'logseq-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local-first notes, open source', 'Optional MCP server for AI tools', 'Free app, paid Sync add-on'], price: 'Price', priceV: 'Free + Sync', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'Desktop, web, mobile', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale Notizen, quelloffen', 'Optionaler MCP-Server für KI', 'Gratis-App, Sync kostenpflichtig'], price: 'Preis', priceV: 'Gratis + Sync', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'Desktop, Web, Mobil', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Notes locales, open source', 'Serveur MCP optionnel pour l’IA', 'App gratuite, Sync payant'], price: 'Prix', priceV: 'Gratuit + Sync', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'Bureau, web, mobile', footer: 'Guide PromptQuorum' },
  es: { hl: ['Notas locales, código abierto', 'Servidor MCP opcional para IA', 'App gratis, Sync de pago'], price: 'Precio', priceV: 'Gratis + Sync', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Escritorio, web, móvil', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ローカル保存のオープンソース', 'AI向けの任意MCPサーバー', 'アプリ無料、Syncは有料'], price: '価格', priceV: '無料＋Sync', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: 'PC・ウェブ・モバイル', footer: 'PromptQuorumガイド' },
  zh: { hl: ['本地优先的开源笔记', '可选 MCP 服务器连接 AI', '应用免费，Sync 付费'], price: '价格', priceV: '免费 + Sync', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', platV: '桌面、网页、移动', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Notas locais, código aberto', 'Servidor MCP opcional para IA', 'App grátis, Sync pago'], price: 'Preço', priceV: 'Grátis + Sync', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Desktop, web, mobile', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ملاحظات محلية مفتوحة المصدر', 'خادم MCP اختياري للذكاء', 'التطبيق مجاني وSync مدفوع'], price: 'السعر', priceV: 'مجاني + Sync', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'سطح المكتب والويب والجوال', footer: 'دليل PromptQuorum' },
  ko: { hl: ['로컬 우선 오픈소스 노트', 'AI용 선택형 MCP 서버', '앱 무료, Sync는 유료'], price: '가격', priceV: '무료 + Sync', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: '데스크톱·웹·모바일', footer: 'PromptQuorum 가이드' },
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
