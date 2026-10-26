#!/usr/bin/env node
// Hero generator for castmates-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (RAM, price, license, platforms) taken from src/lib/power-local-llm/apps/castmates.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'castmates-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Chats run on your iPhone', '35 ready-made characters', 'No account needed'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Closed source', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Chats laufen auf dem iPhone', '35 fertige Charaktere', 'Kein Konto nötig'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chats sur votre iPhone', '35 personnages prêts', 'Aucun compte requis'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chats en tu iPhone', '35 personajes listos', 'Sin cuenta'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone上で会話を生成', '35体のキャラクター', 'アカウント不要'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['聊天在 iPhone 上运行', '内置 35 个角色', '无需账号'], price: '价格', priceV: '免费增值', lic: '许可证', licV: '闭源', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chats no seu iPhone', '35 personagens prontos', 'Sem conta'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['الدردشة على iPhone', '35 شخصية جاهزة', 'دون حساب'], price: 'السعر', priceV: 'مجاني جزئيًا', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone에서 채팅 실행', '기본 캐릭터 35종', '계정 불필요'], price: '가격', priceV: '부분 무료', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: 'iOS' },
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
