#!/usr/bin/env node
// Hero generator for asiden-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/asiden.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'asiden-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  "en": {
    "hl": [
      "Windows 11 AI desktop companion",
      "Local on NVIDIA GPU, optional cloud",
      "Early access, one-off price"
    ],
    "price": "Price",
    "priceV": "$10 once",
    "lic": "License",
    "licV": "Closed source",
    "plat": "Platforms",
    "platV": "Windows 11",
    "footer": "PromptQuorum Guide"
  },
  "de": {
    "hl": [
      "KI-Desktop-Begleiter für Windows 11",
      "Lokal auf NVIDIA-GPU, optional Cloud",
      "Early Access, Einmalpreis"
    ],
    "price": "Preis",
    "priceV": "10 $ einmalig",
    "lic": "Lizenz",
    "licV": "Closed Source",
    "plat": "Plattformen",
    "platV": "Windows 11",
    "footer": "PromptQuorum-Leitfaden"
  },
  "fr": {
    "hl": [
      "Compagnon IA de bureau Windows 11",
      "Local sur GPU NVIDIA, cloud en option",
      "Accès anticipé, prix unique"
    ],
    "price": "Prix",
    "priceV": "10 $ en une fois",
    "lic": "Licence",
    "licV": "Code fermé",
    "plat": "Plateformes",
    "platV": "Windows 11",
    "footer": "Guide PromptQuorum"
  },
  "es": {
    "hl": [
      "Compañero IA de escritorio para Windows 11",
      "Local en GPU NVIDIA, nube opcional",
      "Acceso anticipado, pago único"
    ],
    "price": "Precio",
    "priceV": "10 $ una vez",
    "lic": "Licencia",
    "licV": "Código cerrado",
    "plat": "Plataformas",
    "platV": "Windows 11",
    "footer": "Guía de PromptQuorum"
  },
  "ja": {
    "hl": [
      "Windows 11向けAIデスクトップ相棒",
      "NVIDIA GPUでローカル動作",
      "アーリーアクセス・買い切り"
    ],
    "price": "価格",
    "priceV": "買い切り10ドル",
    "lic": "ライセンス",
    "licV": "クローズドソース",
    "plat": "対応プラットフォーム",
    "platV": "Windows 11",
    "footer": "PromptQuorumガイド"
  },
  "zh": {
    "hl": [
      "Windows 11 AI 桌面伴侣",
      "NVIDIA 显卡本地运行",
      "抢先体验，一次性买断"
    ],
    "price": "价格",
    "priceV": "一次性 $10",
    "lic": "许可证",
    "licV": "闭源",
    "plat": "支持平台",
    "platV": "Windows 11",
    "footer": "PromptQuorum 指南"
  },
  "pt": {
    "hl": [
      "Companheiro de IA para Windows 11",
      "Local em GPU NVIDIA, nuvem opcional",
      "Acesso antecipado, preço único"
    ],
    "price": "Preço",
    "priceV": "US$ 10 uma vez",
    "lic": "Licença",
    "licV": "Código fechado",
    "plat": "Plataformas",
    "platV": "Windows 11",
    "footer": "Guia PromptQuorum"
  },
  "ar": {
    "hl": [
      "رفيق ذكاء اصطناعي لـ Windows 11",
      "محلي على بطاقة NVIDIA وسحابة اختيارية",
      "وصول مبكر وسعر لمرة واحدة"
    ],
    "price": "السعر",
    "priceV": "10 دولارات مرة واحدة",
    "lic": "الترخيص",
    "licV": "مغلق المصدر",
    "plat": "المنصات",
    "platV": "Windows 11",
    "footer": "دليل PromptQuorum"
  },
  "ko": {
    "hl": [
      "Windows 11 AI 데스크톱 컴패니언",
      "NVIDIA GPU에서 로컬 실행",
      "얼리 액세스, 1회 구매"
    ],
    "price": "가격",
    "priceV": "1회 10달러",
    "lic": "라이선스",
    "licV": "클로즈드 소스",
    "plat": "플랫폼",
    "platV": "Windows 11",
    "footer": "PromptQuorum 가이드"
  }
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
