#!/usr/bin/env node
// Hero generator for openshorts-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/openshorts.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3455'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openshorts-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Open-source vertical clip maker', 'Self-host with Docker or hosted', 'Gemini picks moments by default'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'MIT (core app)', plat: 'Platforms', platV: 'Web, Docker', footer: 'PromptQuorum Guide' },
  de: { hl: ['Quelloffener Clip-Maker für Shorts', 'Docker selbst hosten oder Cloud', 'Gemini wählt Momente standardmäßig'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'MIT (Kern-App)', plat: 'Plattformen', platV: 'Web, Docker', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Générateur de clips open source', 'Auto-hébergé avec Docker ou cloud', 'Gemini choisit les moments par défaut'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'MIT (application)', plat: 'Plateformes', platV: 'Web, Docker', footer: 'Guide PromptQuorum' },
  es: { hl: ['Generador de clips de código abierto', 'Autoalójalo con Docker o en la nube', 'Gemini elige los momentos por defecto'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'MIT (app principal)', plat: 'Plataformas', platV: 'Web, Docker', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['縦型ショート用クリップ作成OSS', 'Dockerでセルフホスト可', '既定ではGeminiが場面を選定'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'MIT（コアアプリ）', plat: '対応プラットフォーム', platV: 'Web、Docker', footer: 'PromptQuorumガイド' },
  zh: { hl: ['开源竖屏短视频剪辑工具', '可用 Docker 自托管', '默认由 Gemini 挑选片段'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'MIT（核心应用）', plat: '支持平台', platV: 'Web、Docker', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Gerador de clipes de código aberto', 'Hospede com Docker ou use a nuvem', 'Gemini escolhe os momentos por padrão'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'MIT (app principal)', plat: 'Plataformas', platV: 'Web, Docker', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مقاطع رأسية بأداة مفتوحة المصدر', 'استضافة ذاتية عبر Docker أو سحابة', 'افتراضياً يختار Gemini اللحظات'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'MIT (التطبيق الأساسي)', plat: 'المنصات', platV: 'ويب، Docker', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오픈소스 세로 클립 제작 도구', 'Docker 자체 호스팅 가능', '기본 Gemini가 장면 선별'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'MIT(핵심 앱)', plat: '플랫폼', platV: '웹, Docker', footer: 'PromptQuorum 가이드' },
}

// Shorter poster titles where the full article title wraps badly (orphan CJK character, bidi colon spacing in Arabic).
const TITLE_OVERRIDE = {
  ja: 'OpenShortsレビュー：OSSのAIクリップ作成',
  ko: 'OpenShorts 리뷰: 오픈소스 AI 클립 제작',
  ar: 'مراجعة OpenShorts لقص المقاطع الرأسية بالذكاء الاصطناعي',
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: TITLE_OVERRIDE[lang] ?? stripMd(article[lang].title),
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
