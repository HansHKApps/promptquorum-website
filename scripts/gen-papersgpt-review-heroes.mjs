#!/usr/bin/env node
// Hero generator for papersgpt-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/papersgpt.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'papersgpt-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Chat with PDFs inside Zotero', 'Whole-library search, local models', 'MCP server for Claude and Cursor'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'AGPL-3.0', plat: 'Works in', platV: 'Zotero 7-10', footer: 'PromptQuorum Guide' },
  de: { hl: ['Mit PDFs in Zotero chatten', 'Bibliothekssuche, lokale Modelle', 'MCP-Server für Claude und Cursor'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Läuft in', platV: 'Zotero 7-10', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Discutez avec vos PDF dans Zotero', 'Recherche globale, modèles locaux', 'Serveur MCP pour Claude et Cursor'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Fonctionne dans', platV: 'Zotero 7-10', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chatea con PDF dentro de Zotero', 'Búsqueda global, modelos locales', 'Servidor MCP para Claude y Cursor'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Funciona en', platV: 'Zotero 7-10', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ZoteroでPDFとチャット', '全体検索とローカルモデル', 'MCPサーバー付き'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '動作環境', platV: 'Zotero 7-10', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Zotero 内 PDF 对话', '整库搜索与本地模型', '附带 MCP 服务器'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'AGPL-3.0', plat: '运行于', platV: 'Zotero 7-10', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Converse com PDFs no Zotero', 'Busca global, modelos locais', 'Servidor MCP para Claude e Cursor'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Funciona no', platV: 'Zotero 7-10', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة مع PDF والبحث في المكتبة', 'نماذج سحابية أو محلية', 'خادم MCP لـ Claude و Cursor'], price: 'السعر', priceV: 'مجاني جزئيًا', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'يعمل في', platV: 'Zotero 7-10', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Zotero PDF 대화', '전체 검색과 로컬 모델', 'MCP 서버 포함'], price: '가격', priceV: '무료+유료', lic: '라이선스', licV: 'AGPL-3.0', plat: '실행 환경', platV: 'Zotero 7-10', footer: 'PromptQuorum 가이드' },
}

// Arabic poster: hand-set title so the 2-line wrap breaks at phrase boundaries (no dangling preposition / one-word second line),
// and the Latin names are separated from the Arabic conjunction ("Claude و Cursor") because Satori reverses a mixed word like "وCursor".
const HERO_TITLE = { ar: 'مراجعة PapersGPT: إضافة ذكاء اصطناعي لمكتبة Zotero للدردشة مع ملفات PDF والبحث' }

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: HERO_TITLE[lang] ?? stripMd(article[lang].title),
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
