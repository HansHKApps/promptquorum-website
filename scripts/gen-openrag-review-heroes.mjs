#!/usr/bin/env node
// Hero generator for openrag-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/openrag.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openrag-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Ready-made RAG stack for your documents', 'Langflow + OpenSearch + Docling', 'One uvx command to start'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'Mac · Linux · WSL', footer: 'PromptQuorum Guide' },
  de: { hl: ['Fertiger RAG-Stack für Ihre Dokumente', 'Langflow + OpenSearch + Docling', 'Start mit einem uvx-Befehl'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'Mac · Linux · WSL', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Pile RAG prête pour vos documents', 'Langflow + OpenSearch + Docling', 'Une commande uvx pour démarrer'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'Mac · Linux · WSL', footer: 'Guide PromptQuorum' },
  es: { hl: ['Stack RAG listo para tus documentos', 'Langflow + OpenSearch + Docling', 'Un comando uvx para empezar'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Mac · Linux · WSL', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['文書向けの完成済みRAG基盤', 'Langflow＋OpenSearch＋Docling', 'uvxコマンド1つで起動'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: '対応プラットフォーム', platV: 'Mac · Linux · WSL', footer: 'PromptQuorumガイド' },
  zh: { hl: ['为文档准备的现成 RAG 套件', 'Langflow + OpenSearch + Docling', '一条 uvx 命令即可启动'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: 'Mac · Linux · WSL', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Stack RAG pronto para seus documentos', 'Langflow + OpenSearch + Docling', 'Um comando uvx para começar'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Mac · Linux · WSL', footer: 'Guia PromptQuorum' },
  ar: { hl: ['حزمة RAG جاهزة لمستنداتك', 'Langflow + OpenSearch + Docling', 'أمر uvx واحد للبدء'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'Apache-2.0', plat: 'المنصات', platV: 'Mac · Linux · WSL', footer: 'دليل PromptQuorum' },
  ko: { hl: ['내 문서를 위한 완성형 RAG 스택', 'Langflow + OpenSearch + Docling', 'uvx 명령 하나로 시작'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: 'Mac · Linux · WSL', footer: 'PromptQuorum 가이드' },
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
