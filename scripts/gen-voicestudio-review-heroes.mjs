#!/usr/bin/env node
// Hero generator for voicestudio-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/voicestudio.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3455'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'voicestudio-review'
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
  en: {"hl": ["Clone and design voices locally", "Dub video, dictate, transcribe", "Local API, CLI and MCP"], "price": "Price", "priceV": "Free + Pro", "lic": "License", "licV": "AGPL-3.0", "plat": "Platforms", "platV": "Mac/Win/Linux", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Stimmen lokal klonen und gestalten", "Video-Dubbing, Diktat, Transkription", "Lokale API, CLI und MCP"], "price": "Preis", "priceV": "Gratis + Pro", "lic": "Lizenz", "licV": "AGPL-3.0", "plat": "Plattformen", "platV": "Mac/Win/Linux", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Cloner et concevoir des voix en local", "Doublage vidéo, dictée, transcription", "API locale, CLI et MCP"], "price": "Prix", "priceV": "Gratuit + Pro", "lic": "Licence", "licV": "AGPL-3.0", "plat": "Plateformes", "platV": "Mac/Win/Linux", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Clona y diseña voces en local", "Doblaje de vídeo, dictado, transcripción", "API local, CLI y MCP"], "price": "Precio", "priceV": "Gratis + Pro", "lic": "Licencia", "licV": "AGPL-3.0", "plat": "Plataformas", "platV": "Mac/Win/Linux", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Clone e crie vozes localmente", "Dublagem de vídeo, ditado, transcrição", "API local, CLI e MCP"], "price": "Preço", "priceV": "Grátis + Pro", "lic": "Licença", "licV": "AGPL-3.0", "plat": "Plataformas", "platV": "Mac/Win/Linux", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["声のクローンをローカルで", "動画吹き替えと文字起こし", "ローカルAPI・CLI・MCP"], "price": "価格", "priceV": "無料+Pro", "lic": "ライセンス", "licV": "AGPL-3.0", "plat": "対応OS", "platV": "Mac/Win/Linux", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["本地克隆与设计声音", "视频配音、听写、转写", "本地API、CLI、MCP"], "price": "价格", "priceV": "免费+Pro", "lic": "许可证", "licV": "AGPL-3.0", "plat": "支持平台", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["استنساخ الأصوات وتصميمها محليًا", "دبلجة الفيديو والإملاء والنسخ", "API محلية ودعم MCP"], "price": "السعر", "priceV": "مجاني + Pro", "lic": "الرخصة", "licV": "AGPL-3.0", "plat": "المنصات", "platV": "Mac/Win/Linux", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["목소리를 로컬에서 복제·디자인", "영상 더빙, 받아쓰기, 전사", "로컬 API, CLI, MCP"], "price": "가격", "priceV": "무료+Pro", "lic": "라이선스", "licV": "AGPL-3.0", "plat": "플랫폼", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 가이드"},
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
