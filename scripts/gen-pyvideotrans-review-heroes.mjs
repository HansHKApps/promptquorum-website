#!/usr/bin/env node
// Hero generator for pyvideotrans-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/pyvideotrans.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3441'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'pyvideotrans-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '100K+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Video translation and AI dubbing", "Subtitles, voices, one pipeline", "Local or cloud engines"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "GPL-3.0", "plat": "Platforms", "platV": "Win/Mac/Linux", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Videoübersetzung und KI-Vertonung", "Untertitel und Stimmen, ein Ablauf", "Lokale oder Cloud-Engines"], "price": "Preis", "priceV": "Gratis", "lic": "Lizenz", "licV": "GPL-3.0", "plat": "Plattformen", "platV": "Win/Mac/Linux", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Traduction vidéo et doublage IA", "Sous-titres et voix en une chaîne", "Moteurs locaux ou cloud"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "GPL-3.0", "plat": "Plateformes", "platV": "Win/Mac/Linux", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Traducción de vídeo y doblaje con IA", "Subtítulos y voces en un flujo", "Motores locales o en la nube"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "GPL-3.0", "plat": "Plataformas", "platV": "Win/Mac/Linux", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Tradução de vídeo e dublagem com IA", "Legendas e vozes em um só fluxo", "Mecanismos locais ou na nuvem"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "GPL-3.0", "plat": "Plataformas", "platV": "Win/Mac/Linux", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["動画翻訳とAI吹き替え", "字幕と音声を一括処理", "ローカルかクラウドで"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "GPL-3.0", "plat": "対応OS", "platV": "Win/Mac/Linux", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["视频翻译与AI配音", "字幕和配音一个流程", "本地或云端引擎"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "GPL-3.0", "plat": "支持平台", "platV": "Win/Mac/Linux", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["ترجمة الفيديو والدبلجة بالذكاء الاصطناعي", "ترجمات وأصوات في مسار واحد", "محركات محلية أو سحابية"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "GPL-3.0", "plat": "المنصات", "platV": "Win/Mac/Linux", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["영상 번역과 AI 더빙", "자막과 음성을 한 번에", "로컬 또는 클라우드 엔진"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "GPL-3.0", "plat": "플랫폼", "platV": "Win/Mac/Linux", "footer": "PromptQuorum 가이드"},
}

// Hero-only title shortenings so CJK/Arabic headlines wrap on word boundaries (the article titles stay unchanged).
const TITLE_OVERRIDE = {
  ja: 'pyVideoTrans レビュー： 動画翻訳とAI吹き替え',
  zh: 'pyVideoTrans 评测：视频翻译与 AI 配音',
  ko: 'pyVideoTrans 리뷰: 영상 번역과 AI 더빙',
  ar: 'مراجعة pyVideoTrans، ترجمة الفيديو والدبلجة بالذكاء الاصطناعي',
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
