#!/usr/bin/env node
// Hero generator for minutes-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/minutes.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'minutes-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Meetings saved as Markdown files', 'MCP clients can search them', 'Free, MIT licensed'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Runs on', platV: 'Mac, Windows, Linux CLI', footer: 'PromptQuorum Guide' },
  de: { hl: ['Meetings als Markdown-Dateien', 'MCP-Clients können sie durchsuchen', 'Kostenlos, MIT-lizenziert'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Läuft auf', platV: 'Mac, Windows, Linux-CLI', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Réunions en fichiers Markdown', 'Consultables par les clients MCP', 'Gratuit, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Fonctionne sur', platV: 'Mac, Windows, CLI Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Reuniones en archivos Markdown', 'Los clientes MCP pueden buscarlas', 'Gratis, licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Funciona en', platV: 'Mac, Windows, CLI de Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['会議をMarkdownで保存', 'MCPクライアントが検索', '無料・MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '動作環境', platV: 'Mac、Windows、Linux CLI', footer: 'PromptQuorumガイド' },
  zh: { hl: ['会议保存为 Markdown', 'MCP 客户端可检索', '免费，MIT 许可证'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '运行于', platV: 'Mac、Windows、Linux CLI', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Reuniões em arquivos Markdown', 'Clientes MCP podem pesquisá-las', 'Grátis, licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Roda em', platV: 'Mac, Windows, CLI do Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['اجتماعات بصيغة ملفات Markdown', 'عملاء MCP يبحثون فيها', 'مجاني برخصة MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'يعمل على', platV: 'Mac وWindows وLinux CLI', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Markdown으로 회의 저장', 'MCP 클라이언트가 검색', '무료, MIT 라이선스'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '실행 환경', platV: 'Mac, Windows, Linux CLI', footer: 'PromptQuorum 가이드' },
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
