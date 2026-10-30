#!/usr/bin/env node
// Hero generator for tonfotos-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/tonfotos.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'tonfotos-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local face recognition, per its maker','Duplicates and family tree','Free tier, perpetual licences'], price: 'Price', priceV: 'Free + $59', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Win / Mac / Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Gesichtserkennung laut Hersteller lokal','Duplikate und Stammbaum','Gratis-Version, unbefristete Lizenzen'], price: 'Preis', priceV: 'Gratis + 59 $', lic: 'Lizenz', licV: 'Nicht quelloffen', plat: 'Plattformen', platV: 'Win / Mac / Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Reconnaissance faciale locale selon l’éditeur','Doublons et arbre généalogique','Version gratuite, licences perpétuelles'], price: 'Prix', priceV: 'Gratuit + 59 $', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Win / Mac / Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Reconocimiento facial local, según el fabricante','Duplicados y árbol genealógico','Versión gratuita y licencias perpetuas'], price: 'Precio', priceV: 'Gratis + 59 $', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['開発元によれば顔認識はローカル','重複削除と家系図','無料版と買い切り版'], price: '価格', priceV: '無料＋59ドル', lic: 'ライセンス', licV: 'クローズド', plat: '対応OS', platV: 'Win / Mac / Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['据开发者称人脸识别在本地','去重和家谱','免费版加永久授权'], price: '价格', priceV: '免费 + $59', lic: '许可证', licV: '闭源', plat: '平台', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Reconhecimento facial local, segundo o fabricante','Duplicatas e árvore genealógica','Versão grátis e licenças perpétuas'], price: 'Preço', priceV: 'Grátis + US$ 59', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تعرّف محلي على الوجوه بحسب المطوّر','المكررات وشجرة العائلة','نسخة مجانية وتراخيص دائمة'], price: 'السعر', priceV: 'مجاني + 59 $', lic: 'الرخصة', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Win / Mac / Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['개발사 주장 로컬 얼굴 인식','중복 제거와 가계도','무료 버전과 영구 라이선스'], price: '가격', priceV: '무료 + 59달러', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 가이드' },
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
