#!/usr/bin/env node
// Hero generator for labelme-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/labelme.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3455'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'labelme-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Image annotation with offline AI drafts', 'Plain JSON files beside your images', 'Open-source package or paid app'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'GPL-3.0 package', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Bildannotation mit Offline-KI-Entwürfen', 'Einfache JSON-Dateien neben den Bildern', 'Open-Source-Paket oder Bezahl-App'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'GPL-3.0-Paket', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Annotation d\'images avec brouillons d\'IA hors ligne', 'Fichiers JSON simples près des images', 'Paquet open source ou appli payante'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Paquet GPL-3.0', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Anotación de imágenes con IA sin conexión', 'Archivos JSON sencillos junto a las imágenes', 'Paquete abierto o app de pago'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Paquete GPL-3.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オフラインAIで画像に下書き', '画像の横に単純なJSON保存', 'オープンソース版と有料アプリ'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'GPL-3.0パッケージ', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['离线 AI 生成标注草稿', '图像旁保存普通 JSON', '开源包或付费应用'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'GPL-3.0 包', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Anotação de imagens com IA offline', 'Arquivos JSON simples ao lado das imagens', 'Pacote aberto ou app pago'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Pacote GPL-3.0', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تعليق الصور بمسودات ذكاء اصطناعي محلية', 'ملفات JSON بسيطة بجانب الصور', 'حزمة مفتوحة أو تطبيق مدفوع'], price: 'السعر', priceV: 'مجاني + تطبيق مدفوع', lic: 'الترخيص', licV: 'حزمة GPL-3.0', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오프라인 AI로 이미지 초안 작성', '이미지 옆에 일반 JSON 저장', '오픈소스 패키지와 유료 앱'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'GPL-3.0 패키지', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
