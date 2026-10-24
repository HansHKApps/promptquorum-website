#!/usr/bin/env node
// Hero generator for ente-photos-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/ente-photos.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3436'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ente-photos-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Encrypted photo backup', 'Face and magic search on-device', 'Free to 10 GB, then paid'], price: 'Price', priceV: 'Free 10 GB + plans', lic: 'Source', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'iOS, Android, desktop', footer: 'PromptQuorum Guide' },
  de: { hl: ['Verschlüsselte Foto-Sicherung', 'Gesichts- und Magic Search lokal', 'Gratis bis 10 GB, dann Abo'], price: 'Preis', priceV: 'Gratis 10 GB + Tarife', lic: 'Quellcode', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'iOS, Android, Desktop', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Sauvegarde photo chiffrée', 'Visages et recherche en local', 'Gratuit jusqu’à 10 Go'], price: 'Prix', priceV: 'Gratuit 10 Go + forfaits', lic: 'Code source', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'iOS, Android, bureau', footer: 'Guide PromptQuorum' },
  es: { hl: ['Copia de fotos cifrada', 'Rostros y búsqueda en local', 'Gratis hasta 10 GB'], price: 'Precio', priceV: 'Gratis 10 GB + planes', lic: 'Código', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'iOS, Android, escritorio', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['暗号化された写真バックアップ', '顔認識と検索は端末内', '10 GBまで無料'], price: '価格', priceV: '10 GB無料＋有料プラン', lic: 'ソース', licV: 'AGPL-3.0', plat: '対応プラットフォーム', platV: 'iOS、Android、PC', footer: 'PromptQuorumガイド' },
  zh: { hl: ['加密照片备份', '人脸与搜索在本机运行', '10 GB 内免费'], price: '价格', priceV: '10 GB 免费 + 付费', lic: '源代码', licV: 'AGPL-3.0', plat: '支持平台', platV: 'iOS、Android、桌面', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Backup de fotos criptografado', 'Rostos e busca no aparelho', 'Grátis até 10 GB'], price: 'Preço', priceV: 'Grátis 10 GB + planos', lic: 'Código', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'iOS, Android, desktop', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نسخ احتياطي مشفّر للصور', 'الوجوه والبحث على الجهاز', 'مجاني حتى 10 GB'], price: 'السعر', priceV: 'مجاني 10 GB + خطط', lic: 'الشيفرة', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'iOS وAndroid وسطح المكتب', footer: 'دليل PromptQuorum' },
  ko: { hl: ['암호화된 사진 백업', '얼굴·검색은 기기에서', '10 GB까지 무료'], price: '가격', priceV: '10 GB 무료 + 요금제', lic: '소스', licV: 'AGPL-3.0', plat: '플랫폼', platV: 'iOS, Android, 데스크톱', footer: 'PromptQuorum 가이드' },
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
