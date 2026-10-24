#!/usr/bin/env node
// Hero generator for kernelai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/kernelai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'kernelai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['53 open AI models on your phone', 'Chat offline, no account', 'Free on iPhone and Android'], price: 'Price', priceV: 'Free', lic: 'Source', licV: 'Closed source', plat: 'Platforms', platV: 'iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['53 offene KI-Modelle auf dem Handy', 'Offline chatten, ohne Konto', 'Gratis für iPhone und Android'], price: 'Preis', priceV: 'Gratis', lic: 'Quellcode', licV: 'Closed Source', plat: 'Plattformen', platV: 'iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['53 modèles IA ouverts sur le téléphone', 'Chat hors ligne, sans compte', 'Gratuit sur iPhone et Android'], price: 'Prix', priceV: 'Gratuit', lic: 'Code source', licV: 'Fermé', plat: 'Plateformes', platV: 'iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['53 modelos de IA abiertos en el móvil', 'Chat sin conexión ni cuenta', 'Gratis en iPhone y Android'], price: 'Precio', priceV: 'Gratis', lic: 'Código', licV: 'Cerrado', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内で動く53のAIモデル', 'アカウント不要でオフライン', 'iPhoneもAndroidも無料'], price: '価格', priceV: '無料', lic: 'ソース', licV: 'クローズド', plat: '対応プラットフォーム', platV: 'iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['手机运行 53 个 AI 模型', '无需账号，离线聊天', 'iPhone 和 Android 免费'], price: '价格', priceV: '免费', lic: '源代码', licV: '闭源', plat: '支持平台', platV: 'iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['53 modelos de IA abertos no celular', 'Chat offline, sem conta', 'Grátis no iPhone e Android'], price: 'Preço', priceV: 'Grátis', lic: 'Código', licV: 'Fechado', plat: 'Plataformas', platV: 'iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['53 نموذج ذكاء اصطناعي على هاتفك', 'دردشة بلا إنترنت وبلا حساب', 'مجاني على iPhone و Android'], price: 'السعر', priceV: 'مجاني', lic: 'الشيفرة', licV: 'مغلقة المصدر', plat: 'المنصات', platV: 'iOS و Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['휴대폰에서 AI 모델 53개', '계정 없이 오프라인 채팅', 'iPhone·Android 무료'], price: '가격', priceV: '무료', lic: '소스', licV: '비공개', plat: '플랫폼', platV: 'iOS, Android', footer: 'PromptQuorum 가이드' },
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
