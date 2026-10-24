#!/usr/bin/env node
// Hero generator for localmindai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/localmindai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3440'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'localmindai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Free AI companion for iPhone', 'Chat, memory, documents on-device', 'Needs iOS 26 or later'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'iPhone · iPad', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kostenloser KI-Begleiter fürs iPhone', 'Chat, Gedächtnis, Dokumente lokal', 'Erfordert iOS 26 oder neuer'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'iPhone · iPad', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Compagnon IA gratuit pour iPhone', 'Chat, mémoire, documents en local', 'Exige iOS 26 ou plus récent'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'iPhone · iPad', footer: 'Guide PromptQuorum' },
  es: { hl: ['Compañero de IA gratis para iPhone', 'Chat, memoria y documentos locales', 'Requiere iOS 26 o posterior'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'iPhone · iPad', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhone向け無料AI相棒', '会話・記憶・資料を端末内で', 'iOS 26以降が必要'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'iPhone · iPad', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 免费 AI 伙伴', '聊天、记忆、文档在设备上', '需要 iOS 26 或更高'], price: '价格', priceV: '免费', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'iPhone · iPad', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Companheiro de IA grátis no iPhone', 'Chat, memória e documentos locais', 'Exige iOS 26 ou posterior'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'iPhone · iPad', footer: 'Guia PromptQuorum' },
  ar: { hl: ['رفيق ذكاء اصطناعي مجاني لـ iPhone', 'دردشة وذاكرة ومستندات على الجهاز', 'يتطلب iOS 26 أو أحدث'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'iPhone · iPad', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone용 무료 AI 컴패니언', '대화·기억·문서를 기기 안에서', 'iOS 26 이상 필요'], price: '가격', priceV: '무료', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', platV: 'iPhone · iPad', footer: 'PromptQuorum 가이드' },
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
