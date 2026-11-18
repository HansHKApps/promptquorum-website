#!/usr/bin/env node
// Hero generator for solomd-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/solomd.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'solomd-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Markdown notes with local AI chat', 'MCP server for Claude and Cursor', 'Free and open source, 5 platforms'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Runs on', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Markdown-Notizen mit lokalem KI-Chat', 'MCP-Server für Claude und Cursor', 'Kostenlos, Open Source, 5 Plattformen'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Läuft auf', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Notes Markdown avec chat IA local', 'Serveur MCP pour Claude et Cursor', 'Gratuit, open source, 5 plateformes'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Fonctionne sur', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Notas Markdown con chat de IA local', 'Servidor MCP para Claude y Cursor', 'Gratis, código abierto, 5 plataformas'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Funciona en', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ローカルAIチャット付きノート', 'MCPサーバーを同梱', '無料のオープンソース、5環境'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '動作環境', platV: 'Mac、Windows、Linux、iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['带本地 AI 对话的笔记', '内置 MCP 服务器', '免费开源，支持 5 个平台'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '运行于', platV: 'Mac、Windows、Linux、iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Notas Markdown com chat de IA local', 'Servidor MCP para Claude e Cursor', 'Grátis, código aberto, 5 plataformas'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Roda em', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { heroTitle: 'مراجعة SoloMD — ملاحظات Markdown مجانية بذكاء اصطناعي محلي', hl: ['ملاحظات Markdown مع دردشة ذكاء محلية', 'خادم MCP مرفق للعملاء', 'مجاني ومفتوح المصدر، 5 منصات'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'يعمل على', platV: 'Mac وWindows وLinux وiOS وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['로컬 AI 채팅 노트', 'MCP 서버 포함', '무료 오픈소스, 5개 플랫폼'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '실행 환경', platV: 'Mac, Windows, Linux, iOS, Android', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    // ar: a shorter, hand-broken title (no colon, no orphan Latin word); the stored title wraps badly in the RTL poster layout.
    title: t.heroTitle || stripMd(article[lang].title),
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
