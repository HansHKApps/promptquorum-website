#!/usr/bin/env node
// Hero generator for haplo-ai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/haplo-ai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'haplo-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Offline AI chat for iPhone and Mac", "Chat, images, no account", "Closed source, price varies"], price: "Price", priceV: "Purchase + Premium", lic: "License", licV: "Closed source", plat: "Platforms", platV: "iOS, iPadOS, macOS", footer: "PromptQuorum Guide" },
  de: { hl: ["Offline-KI-Chat für iPhone und Mac", "Chat, Bilder, ohne Konto", "Closed Source, Preis uneinheitlich"], price: "Preis", priceV: "Kauf + Premium", lic: "Lizenz", licV: "Closed Source", plat: "Plattformen", platV: "iOS, iPadOS, macOS", footer: "PromptQuorum-Leitfaden" },
  es: { hl: ["Chat de IA sin conexión en iPhone y Mac", "Chat e imágenes, sin cuenta", "Código cerrado, precio variable"], price: "Precio", priceV: "Compra + Premium", lic: "Licencia", licV: "Código cerrado", plat: "Plataformas", platV: "iOS, iPadOS, macOS", footer: "Guía de PromptQuorum" },
  fr: { hl: ["Chat IA hors ligne sur iPhone et Mac", "Chat et images, sans compte", "Code fermé, prix variable"], price: "Prix", priceV: "Achat + Premium", lic: "Licence", licV: "Code fermé", plat: "Plateformes", platV: "iOS, iPadOS, macOS", footer: "Guide PromptQuorum" },
  ja: { hl: ["iPhone・Macのオフラインチャット", "チャットと画像、アカウント不要", "ソース非公開、価格は要確認"], price: "価格", priceV: "購入＋Premium", lic: "ライセンス", licV: "クローズドソース", plat: "対応プラットフォーム", platV: "iOS・iPadOS・macOS", footer: "PromptQuorumガイド" },
  pt: { hl: ["Chat de IA offline no iPhone e Mac", "Chat e imagens, sem conta", "Código fechado, preço varia"], price: "Preço", priceV: "Compra + Premium", lic: "Licença", licV: "Código fechado", plat: "Plataformas", platV: "iOS, iPadOS, macOS", footer: "Guia PromptQuorum" },
  ar: { hl: ["دردشة ذكاء اصطناعي دون إنترنت", "دردشة وصور بلا حساب", "مغلق المصدر وسعر متباين"], price: "السعر", priceV: "شراء + Premium", lic: "الترخيص", licV: "مغلق المصدر", plat: "المنصات", platV: "iOS وiPadOS وmacOS", footer: "دليل PromptQuorum" },
  zh: { hl: ["iPhone 和 Mac 离线 AI 聊天", "聊天与图像，无需账号", "闭源，价格说法不一"], price: "价格", priceV: "购买 + Premium", lic: "许可证", licV: "闭源", plat: "支持平台", platV: "iOS、iPadOS、macOS", footer: "PromptQuorum 指南" },
  ko: { hl: ["iPhone·Mac 오프라인 AI 채팅", "채팅과 이미지, 계정 없음", "클로즈드 소스, 가격 상이"], price: "가격", priceV: "구매 + Premium", lic: "라이선스", licV: "클로즈드 소스", plat: "플랫폼", platV: "iOS, iPadOS, macOS", footer: "PromptQuorum 가이드" },
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
