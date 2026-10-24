#!/usr/bin/env node
// Hero generator for kruvo-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/lm-mini.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'kruvo-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Asks before it acts', 'Your API key or Ollama', 'Windows and macOS'], price: 'Price', priceV: 'Free + paid tiers', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Windows, macOS', footer: 'PromptQuorum Guide' },
  de: { hl: ['Fragt, bevor es handelt', 'Eigener API-Schlüssel oder Ollama', 'Windows und macOS'], price: 'Preis', priceV: 'Gratis + Bezahlstufen', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', platV: 'Windows, macOS', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Demande avant d’agir', 'Votre clé API ou Ollama', 'Windows et macOS'], price: 'Prix', priceV: 'Gratuit + offres payantes', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Windows, macOS', footer: 'Guide PromptQuorum' },
  es: { hl: ['Pregunta antes de actuar', 'Tu clave API u Ollama', 'Windows y macOS'], price: 'Precio', priceV: 'Gratis + planes de pago', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Windows, macOS', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['実行前に確認を求める', '自分のAPIキーかOllama', 'Windows・macOS対応'], price: '価格', priceV: '無料+有料プラン', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', platV: 'Windows・macOS', footer: 'PromptQuorumガイド' },
  zh: { hl: ['行动前先询问', '自备 API 密钥或 Ollama', '支持 Windows 和 macOS'], price: '价格', priceV: '免费 + 付费档位', lic: '许可证', licV: '闭源', plat: '支持平台', platV: 'Windows、macOS', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Pergunta antes de agir', 'Sua chave de API ou Ollama', 'Windows e macOS'], price: 'Preço', priceV: 'Grátis + planos pagos', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Windows, macOS', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يسأل قبل أن يتصرف', 'مفتاح API الخاص بك أو Ollama', 'Windows وmacOS'], price: 'السعر', priceV: 'مجاني + باقات مدفوعة', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Windows، macOS', footer: 'دليل PromptQuorum' },
  ko: { hl: ['실행 전에 먼저 묻습니다', '직접 API 키 또는 Ollama', 'Windows·macOS 지원'], price: '가격', priceV: '무료 + 유료 등급', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', platV: 'Windows, macOS', footer: 'PromptQuorum 가이드' },
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
