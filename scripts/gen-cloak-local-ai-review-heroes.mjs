#!/usr/bin/env node
// Hero generator for cloak-local-ai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/cloak-local-ai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3446'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'cloak-local-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline AI chat for iPhone and Mac', 'Model downloaded once, then on-device', 'Paid once, no account'], price: 'Price', priceV: '$1.99 once', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iOS 18+, macOS 26+', footer: 'PromptQuorum Guide' },
  de: { hl: ['Offline-KI-Chat für iPhone und Mac', 'Modell einmal laden, dann auf dem Gerät', 'Einmalkauf, kein Konto'], price: 'Preis', priceV: '1,99 € einmalig', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS 18+, macOS 26+', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat IA hors ligne iPhone et Mac', 'Modèle téléchargé une fois, puis local', 'Achat unique, sans compte'], price: 'Prix', priceV: '1,99 € une fois', lic: 'Licence', licV: 'Source fermée', plat: 'Plateformes', platV: 'iOS 18+, macOS 26+', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA sin conexión en iPhone y Mac', 'Modelo descargado una vez, luego local', 'Pago único, sin cuenta'], price: 'Precio', priceV: '1,99 € una vez', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iOS 18+, macOS 26+', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhoneとMacのオフラインAIチャット', 'モデルは一度DL、その後は端末内', '買い切り・アカウント不要'], price: '価格', priceV: '¥300 買い切り', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iOS 18以降、macOS 26以降', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 和 Mac 离线 AI 聊天', '模型下载一次，之后在设备上运行', '一次性付费，无需账号'], price: '价格', priceV: '$1.99 一次性', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iOS 18+、macOS 26+', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA offline no iPhone e Mac', 'Modelo baixado uma vez, depois local', 'Pagamento único, sem conta'], price: 'Preço', priceV: 'R$ 12,90 uma vez', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iOS 18+, macOS 26+', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي دون اتصال', 'نموذج يُنزَّل مرة ثم يعمل محليًا', 'شراء لمرة واحدة بلا حساب'], price: 'السعر', priceV: '$1.99 مرة واحدة', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iOS 18+ وmacOS 26+', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone·Mac 오프라인 AI 채팅', '모델은 한 번 다운로드 후 기기에서', '1회 구매, 계정 불필요'], price: '가격', priceV: '₩3,300 1회 구매', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'iOS 18 이상, macOS 26 이상', footer: 'PromptQuorum 가이드' },
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
