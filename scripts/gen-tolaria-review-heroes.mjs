#!/usr/bin/env node
// Hero generator for tolaria-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/tolaria.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'tolaria-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Markdown notes as plain files', 'Built-in Git client', 'AI agents or local models'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Markdown-Notizen als Dateien', 'Eingebauter Git-Client', 'KI-Agenten oder lokale Modelle'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Notes Markdown en fichiers', 'Client Git intégré', 'Agents IA ou modèles locaux'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'Mac, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Notas Markdown como archivos', 'Cliente Git integrado', 'Agentes de IA o modelos locales'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Markdownノートをファイルで保存', 'Gitクライアントを内蔵', 'AIエージェントやローカルモデル'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: 'Mac、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Markdown 笔记以文件保存', '内置 Git 客户端', '接入 AI 智能体或本地模型'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '支持平台', platV: 'Mac、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Notas Markdown como arquivos', 'Cliente Git integrado', 'Agentes de IA ou modelos locais'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ملاحظات Markdown كملفات', 'عميل Git مدمج', 'وكلاء ذكاء اصطناعي أو نماذج محلية'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'Mac وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Markdown 노트를 파일로 보관', 'Git 클라이언트 내장', 'AI 에이전트·로컬 모델 연결'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
