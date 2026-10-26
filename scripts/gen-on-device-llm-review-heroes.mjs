#!/usr/bin/env node
// Hero generator for on-device-llm-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/on-device-llm.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'on-device-llm-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Offline chat on Android', 'Import your own GGUF models', 'Optional local API'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Offline-Chat auf Android', 'Eigene GGUF-Modelle importieren', 'Optionale lokale API'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat hors ligne sur Android', 'Importez vos modèles GGUF', 'API locale en option'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat sin conexión en Android', 'Importa tus modelos GGUF', 'API local opcional'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Androidでオフラインチャット', '自分のGGUFを読み込み', '任意のローカルAPI'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['Android 离线聊天', '可导入自己的 GGUF', '可选本地 API'], price: '价格', priceV: '免费', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat offline no Android', 'Importe seus modelos GGUF', 'API local opcional'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة دون اتصال على Android', 'استورد نماذج GGUF الخاصة بك', 'واجهة API محلية اختيارية'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Android 오프라인 채팅', '내 GGUF 모델 가져오기', '선택형 로컬 API'], price: '가격', priceV: '무료', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Android', footer: 'PromptQuorum 가이드' },
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
