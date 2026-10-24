#!/usr/bin/env node
// Hero generator for zero1llm-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/zero1llm.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'zero1llm-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local chat app for open models', 'Web search and browser control', 'Free plan, Windows and Mac'], price: 'Price', priceV: 'Free plan', lic: 'License', licV: 'Not stated', plat: 'Platforms', platV: 'Win · Mac (Apple Silicon)', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokale Chat-App für offene Modelle', 'Websuche und Browsersteuerung', 'Gratis-Tarif, Windows und Mac'], price: 'Preis', priceV: 'Gratis-Tarif', lic: 'Lizenz', licV: 'Nicht angegeben', plat: 'Plattformen', platV: 'Win · Mac (Apple Silicon)', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Appli de chat locale, modèles ouverts', 'Recherche web et contrôle du navigateur', 'Offre gratuite, Windows et Mac'], price: 'Prix', priceV: 'Offre gratuite', lic: 'Licence', licV: 'Non indiquée', plat: 'Plateformes', platV: 'Win · Mac (Apple Silicon)', footer: 'Guide PromptQuorum' },
  es: { hl: ['App de chat local para modelos abiertos', 'Búsqueda web y control del navegador', 'Plan gratis, Windows y Mac'], price: 'Precio', priceV: 'Plan gratis', lic: 'Licencia', licV: 'No indicada', plat: 'Plataformas', platV: 'Win · Mac (Apple Silicon)', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['オープンモデル向けローカルチャット', 'Web検索とブラウザ操作', '無料プラン・Windows / Mac'], price: '価格', priceV: '無料プランあり', lic: 'ライセンス', licV: '記載なし', plat: '対応プラットフォーム', platV: 'Win · Mac (Apple Silicon)', footer: 'PromptQuorumガイド' },
  zh: { hl: ['面向开源模型的本地聊天应用', '网页搜索与浏览器控制', '免费方案，Windows 与 Mac'], price: '价格', priceV: '有免费方案', lic: '许可证', licV: '未说明', plat: '支持平台', platV: 'Win · Mac (Apple Silicon)', footer: 'PromptQuorum 指南' },
  pt: { hl: ['App de chat local para modelos abertos', 'Busca na web e controle do navegador', 'Plano grátis, Windows e Mac'], price: 'Preço', priceV: 'Plano grátis', lic: 'Licença', licV: 'Não informada', plat: 'Plataformas', platV: 'Win · Mac (Apple Silicon)', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تطبيق دردشة محلي للنماذج المفتوحة', 'بحث على الويب وتحكم بالمتصفح', 'خطة مجانية وإصدارات لنظامين'], price: 'السعر', priceV: 'خطة مجانية', lic: 'الترخيص', licV: 'غير مذكور', plat: 'المنصات', platV: 'Win · Mac (Apple Silicon)', footer: 'دليل PromptQuorum' },
  ko: { hl: ['오픈 모델용 로컬 채팅 앱', '웹 검색과 브라우저 제어', '무료 플랜, Windows·Mac'], price: '가격', priceV: '무료 플랜', lic: '라이선스', licV: '명시 없음', plat: '플랫폼', platV: 'Win · Mac (Apple Silicon)', footer: 'PromptQuorum 가이드' },
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
