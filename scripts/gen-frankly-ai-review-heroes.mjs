#!/usr/bin/env node
// Hero generator for frankly-ai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/frankly-ai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3457'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'frankly-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['On-device AI chat for iPhone', 'No account, task personas', 'Closed source, free download'], price: 'Price', priceV: 'Free + Pro', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iOS, iPadOS', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Chat auf dem iPhone', 'Ohne Konto, Aufgaben-Personas', 'Nicht quelloffen, gratis laden'], price: 'Preis', priceV: 'Gratis + Pro', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS, iPadOS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA local sur iPhone', 'Sans compte, personas par tâche', 'Code fermé, gratuit'], price: 'Prix', priceV: 'Gratuit + Pro', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iOS, iPadOS', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA local en iPhone', 'Sin cuenta, personas por tarea', 'Código cerrado, gratis'], price: 'Precio', priceV: 'Gratis + Pro', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iOS, iPadOS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone端末内AIチャット', 'アカウント不要・ペルソナ', 'ソース非公開・無料DL'], price: '価格', priceV: '無料+Pro', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iOS・iPadOS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 设备端 AI 聊天', '无需账号，任务角色', '闭源，免费下载'], price: '价格', priceV: '免费 + Pro', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iOS、iPadOS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA local no iPhone', 'Sem conta, personas por tarefa', 'Código fechado, grátis'], price: 'Preço', priceV: 'Grátis + Pro', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iOS, iPadOS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي على iPhone', 'بلا حساب وبشخصيات للمهام', 'مغلق المصدر وتنزيل مجاني'], price: 'السعر', priceV: 'مجاني + Pro', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iOS، iPadOS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone 온디바이스 AI 채팅', '계정 없음, 작업별 페르소나', '클로즈드 소스, 무료'], price: '가격', priceV: '무료 + Pro', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', platV: 'iOS, iPadOS', footer: 'PromptQuorum 가이드' },
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
