#!/usr/bin/env node
// Hero generator for coil-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/coil.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3444'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'coil-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Router and worker models on-device', 'A receipt for every reply', 'Mac only, one-time price'], price: 'Price', priceV: '$14.99', lic: 'License', licV: 'Not stated', plat: 'Platforms', platV: 'Mac', footer: 'PromptQuorum Guide' },
  de: { hl: ['Router- und Worker-Modell auf dem Gerät', 'Beleg bei jeder Antwort', 'Nur Mac, Einmalpreis'], price: 'Preis', priceV: '17,99 €', lic: 'Lizenz', licV: 'Nicht angegeben', plat: 'Plattformen', platV: 'Mac', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Routeur et modèle de travail locaux', 'Un reçu pour chaque réponse', 'Mac seulement, prix unique'], price: 'Prix', priceV: '17,99 €', lic: 'Licence', licV: 'Non indiquée', plat: 'Plateformes', platV: 'Mac', footer: 'Guide PromptQuorum' },
  es: { hl: ['Enrutador y modelo local', 'Un recibo por cada respuesta', 'Solo Mac, pago único'], price: 'Precio', priceV: '17,99 €', lic: 'Licencia', licV: 'No indicada', plat: 'Plataformas', platV: 'Mac', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内でルーターとワーカー', '返信ごとにレシート', 'Mac専用・買い切り'], price: '価格', priceV: '¥2,500', lic: 'ライセンス', licV: '記載なし', plat: '対応プラットフォーム', platV: 'Mac', footer: 'PromptQuorumガイド' },
  zh: { hl: ['设备端路由与工作模型', '每条回复附回执', '仅限 Mac，一次性付费'], price: '价格', priceV: '$14.99', lic: '许可证', licV: '未标明', plat: '支持平台', platV: 'Mac', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Roteador e modelo no dispositivo', 'Um recibo por resposta', 'Só Mac, preço único'], price: 'Preço', priceV: 'R$ 99,90', lic: 'Licença', licV: 'Não informada', plat: 'Plataformas', platV: 'Mac', footer: 'Guia PromptQuorum' },
  ar: { hl: ['موجّه ونموذج عامل على الجهاز', 'إيصال مع كل رد', 'Mac فقط، سعر لمرة واحدة'], price: 'السعر', priceV: '$14.99', lic: 'الترخيص', licV: 'غير معلن', plat: 'المنصات', platV: 'Mac', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기 안의 라우터와 워커', '답변마다 영수증', 'Mac 전용, 일회성 구매'], price: '가격', priceV: '₩25,000', lic: '라이선스', licV: '명시 안 됨', plat: '플랫폼', platV: 'Mac', footer: 'PromptQuorum 가이드' },
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
