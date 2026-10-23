#!/usr/bin/env node
// Hero generator for obscurify-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/obscurify.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'obscurify-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Anonymous AI chat', 'No email needed', 'Optional local mode'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'GPL-3.0 clients', plat: 'Platforms', platV: 'Web, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Anonymer KI-Chat', 'Keine E-Mail nötig', 'Optionaler lokaler Modus'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'GPL-3.0 (Clients)', plat: 'Plattformen', platV: 'Web, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA anonyme', 'Sans e-mail', 'Mode local optionnel'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'GPL-3.0 (clients)', plat: 'Plateformes', platV: 'Web, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA anónimo', 'Sin correo', 'Modo local opcional'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'GPL-3.0 (clientes)', plat: 'Plataformas', platV: 'Web, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['匿名AIチャット', 'メール不要', '任意のローカルモード'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'GPL-3.0（クライアント）', plat: '対応プラットフォーム', platV: 'ウェブ、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['匿名 AI 聊天', '无需邮箱', '可选本地模式'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'GPL-3.0（客户端）', plat: '支持平台', platV: '网页、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA anônimo', 'Sem e-mail', 'Modo local opcional'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'GPL-3.0 (clientes)', plat: 'Plataformas', platV: 'Web, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي مجهولة', 'دون بريد إلكتروني', 'وضع محلي اختياري'], price: 'السعر', priceV: 'فريميوم', lic: 'الترخيص', licV: 'GPL-3.0 (العملاء)', plat: 'المنصات', platV: 'الويب، Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['익명 AI 채팅', '이메일 불필요', '선택형 로컬 모드'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'GPL-3.0(클라이언트)', plat: '플랫폼', platV: '웹, Android', footer: 'PromptQuorum 가이드' },
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
