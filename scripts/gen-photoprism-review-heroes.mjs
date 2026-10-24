#!/usr/bin/env node
// Hero generator for photoprism-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/photoprism.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3452'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'photoprism-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Self-hosted photo library', 'AI labels and faces on your server', 'Free Community edition'], price: 'Price', priceV: 'Free + paid', lic: 'License', licV: 'AGPL-3.0', plat: 'Setup', platV: 'Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Selbst gehostete Fotobibliothek', 'KI-Labels und Gesichter lokal', 'Community-Edition gratis'], price: 'Preis', priceV: 'Gratis + Abo', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Einrichtung', platV: 'Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Bibliothèque photo auto-hébergée', 'Étiquettes IA et visages en local', 'Édition Community gratuite'], price: 'Prix', priceV: 'Gratuit + payant', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Installation', platV: 'Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Biblioteca de fotos autoalojada', 'Etiquetas IA y caras en local', 'Edición Community gratis'], price: 'Precio', priceV: 'Gratis + de pago', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Instalación', platV: 'Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['セルフホスト型の写真ライブラリ', 'AIラベルと顔認識をローカルで', 'Community版は無料'], price: '価格', priceV: '無料＋有料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '導入', platV: 'Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['自托管照片库', 'AI 标签与人脸识别在本地', 'Community 版免费'], price: '价格', priceV: '免费 + 付费', lic: '许可证', licV: 'AGPL-3.0', plat: '部署', platV: 'Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Biblioteca de fotos auto-hospedada', 'Etiquetas IA e rostos locais', 'Edição Community grátis'], price: 'Preço', priceV: 'Grátis + pago', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Instalação', platV: 'Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مكتبة صور ذاتية الاستضافة', 'تصنيف ووجوه بالذكاء الاصطناعي محليًا', 'نسخة Community مجانية'], price: 'السعر', priceV: 'مجاني + مدفوع', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'الإعداد', platV: 'Docker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['셀프 호스팅 사진 라이브러리', 'AI 라벨링·얼굴 인식을 로컬로', 'Community 에디션 무료'], price: '가격', priceV: '무료 + 유료', lic: '라이선스', licV: 'AGPL-3.0', plat: '설치', platV: 'Docker', footer: 'PromptQuorum 가이드' },
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
