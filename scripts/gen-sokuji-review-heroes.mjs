#!/usr/bin/env node
// Hero generator for sokuji-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/sokuji.ts.
// No highlight states an unattributed "runs on your device" claim (the review attributes that to the maker).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'sokuji-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

// Arabic poster headline: shortened from the article title so no line starts or ends on a stranded particle/construct word.
const AR_POSTER_TITLE = 'مراجعة Sokuji: ترجمة صوتية فورية للاجتماعات والمكالمات'

const L = {
  en: { hl: ['Live two-way speech translation', 'Desktop app plus Chrome and Edge', 'Free, open source (AGPL-3.0)'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Runs on', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'PromptQuorum Guide' },
  de: { hl: ['Live-Übersetzung in beide Richtungen', 'Desktop-App plus Chrome und Edge', 'Kostenlos, quelloffen (AGPL-3.0)'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Läuft auf', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Traduction vocale dans les deux sens', 'Appli de bureau, Chrome et Edge', 'Gratuit, code source ouvert'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Fonctionne sur', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'Guide PromptQuorum' },
  es: { hl: ['Traducción de voz en ambos sentidos', 'App de escritorio, Chrome y Edge', 'Gratis y de código abierto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Funciona en', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['双方向リアルタイム音声翻訳', 'デスクトップと拡張機能', '無料・オープンソース'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '動作環境', platV: 'Windows、macOS、Linux、Chrome、Edge', footer: 'PromptQuorumガイド' },
  zh: { hl: ['双向实时语音翻译', '桌面应用和浏览器扩展', '免费开源 AGPL-3.0'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '运行于', platV: 'Windows、macOS、Linux、Chrome、Edge', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Tradução de voz nos dois sentidos', 'App de desktop, Chrome e Edge', 'Grátis e de código aberto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Roda em', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ترجمة صوتية فورية في الاتجاهين', 'تطبيق سطح المكتب وإضافة المتصفح', 'مجاني ومفتوح المصدر'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'AGPL-3.0', plat: 'يعمل على', platV: 'Windows وmacOS وLinux وChrome وEdge', footer: 'دليل PromptQuorum' },
  ko: { hl: ['양방향 실시간 음성 번역', '데스크톱 앱과 확장 프로그램', '무료 오픈소스 앱'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '실행 환경', platV: 'Windows, macOS, Linux, Chrome, Edge', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: AR_POSTER_TITLE && lang === 'ar' ? AR_POSTER_TITLE : stripMd(article[lang].title),
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
