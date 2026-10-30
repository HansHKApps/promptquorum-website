#!/usr/bin/env node
// Hero generator for tgpt-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) from src/lib/power-local-llm/apps/tgpt.ts and the review's own platform table.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3000'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'tgpt-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, (id) =>
  id.includes('app-facts') ? { starsFor: () => () => '' } : {},
)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI chat in your terminal', 'No login, no API key', 'Not ChatGPT: open source'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'GPLv3', plat: 'Platforms', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Chat im Terminal', 'Kein Login, kein API-Key', 'Nicht ChatGPT: Open Source'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'GPLv3', plat: 'Plattformen', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA dans le terminal', 'Sans connexion ni clé API', 'Pas ChatGPT : open source'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'GPLv3', plat: 'Plateformes', platV: 'Linux, macOS, Windows', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat con IA en la terminal', 'Sin login ni clave API', 'No es ChatGPT: código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'GPLv3', plat: 'Plataformas', platV: 'Linux, macOS, Windows', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ターミナルで使うAIチャット', 'ログインもAPIキーも不要', 'ChatGPTではない'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'GPLv3', plat: '対応プラットフォーム', platV: 'Linux, macOS, Windows', footer: 'PromptQuorumガイド' },
  zh: { hl: ['终端里的 AI 聊天', '无需登录和 API 密钥', '不是 ChatGPT'], price: '价格', priceV: '免费', lic: '许可证', licV: 'GPLv3', plat: '支持平台', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat com IA no terminal', 'Sem login nem chave de API', 'Não é o ChatGPT: open source'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'GPLv3', plat: 'Plataformas', platV: 'Linux, macOS, Windows', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي في الطرفية', 'دون تسجيل دخول أو مفتاح API', 'ليس ChatGPT: مفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'GPLv3', plat: 'المنصات', platV: 'Linux, macOS, Windows', footer: 'دليل PromptQuorum' },
  ko: { hl: ['터미널에서 쓰는 AI 채팅', '로그인·API 키 불필요', 'ChatGPT가 아닙니다'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'GPLv3', plat: '플랫폼', platV: 'Linux, macOS, Windows', footer: 'PromptQuorum 가이드' },
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
