#!/usr/bin/env node
// Hero generator for lm-mini-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/lm-mini.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'lm-mini-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['On-device and home-server AI', 'iPhone, iPad and Mac', 'Closed source, free download'], price: 'Price', priceV: 'Free + purchases', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iOS, iPadOS, macOS', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI auf dem Gerät und am Heimserver', 'iPhone, iPad und Mac', 'Nicht quelloffen, kostenloser Download'], price: 'Preis', priceV: 'Gratis + Käufe', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS, iPadOS, macOS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA sur l’appareil et sur serveur perso', 'iPhone, iPad et Mac', 'Code fermé, téléchargement gratuit'], price: 'Prix', priceV: 'Gratuit + achats', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iOS, iPadOS, macOS', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA en el dispositivo y en tu servidor', 'iPhone, iPad y Mac', 'Código cerrado, descarga gratuita'], price: 'Precio', priceV: 'Gratis + compras', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iOS, iPadOS, macOS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内AIと自宅サーバーAI', 'iPhone・iPad・Mac対応', 'ソース非公開・無料DL'], price: '価格', priceV: '無料+課金', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iOS・iPadOS・macOS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['设备端与家用服务器 AI', '支持 iPhone、iPad 和 Mac', '闭源，免费下载'], price: '价格', priceV: '免费 + 内购', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iOS、iPadOS、macOS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA no aparelho e em servidor próprio', 'iPhone, iPad e Mac', 'Código fechado, download grátis'], price: 'Preço', priceV: 'Grátis + compras', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iOS, iPadOS, macOS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء اصطناعي على الجهاز وخادمك', 'iPhone، iPad، Mac', 'مغلق المصدر وتنزيل مجاني'], price: 'السعر', priceV: 'مجاني + مشتريات', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iOS، iPadOS، macOS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기 내·홈 서버 AI', 'iPhone·iPad·Mac 지원', '클로즈드 소스, 무료 다운로드'], price: '가격', priceV: '무료 + 앱 내 구입', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', platV: 'iOS, iPadOS, macOS', footer: 'PromptQuorum 가이드' },
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
