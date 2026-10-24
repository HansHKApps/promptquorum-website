#!/usr/bin/env node
// Hero generator for pocketllm-lite-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/pocketllm-lite.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3440'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'pocketllm-lite-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Android chat app, on-device or your server', 'Free, MIT-licensed, no account', 'Debug-signed APK builds'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Android-Chat auf dem Gerät oder Ihrem Server', 'Gratis, MIT-Lizenz, ohne Konto', 'APK mit Debug-Signatur'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat Android sur l’appareil ou votre serveur', 'Gratuit, licence MIT, sans compte', 'APK signés en débogage'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat Android en el móvil o tu servidor', 'Gratis, licencia MIT, sin cuenta', 'APK con firma de depuración'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['AndroidのAIチャット', '無料・MIT・登録不要', 'デバッグ署名APK'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Android 本地 AI 聊天', '免费、MIT、无需账号', '调试签名 APK'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat Android no aparelho ou no seu servidor', 'Grátis, licença MIT, sem conta', 'APK com assinatura de depuração'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة Android على الجهاز أو خادمك', 'مجاني، MIT، دون حساب', 'APK بتوقيع التصحيح'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Android 로컬 AI 채팅', '무료, MIT, 계정 불필요', '디버그 서명 APK'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Android', footer: 'PromptQuorum 가이드' },
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
