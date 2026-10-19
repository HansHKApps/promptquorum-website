#!/usr/bin/env node
// One-off hero generator for secret-ai-review (all 9 locales).
// Sparse Discover poster: localized article title + 3 short highlights + price/platform facts
// (price and platforms from src/lib/power-local-llm/apps/secret-ai.ts; license and hardware are
// not stated by the app, so they are omitted).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'secret-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const L = {
  en: { hl: ['Private AI chat on-device', 'Characters, Skills and MCP', 'Free tier, paid plans'], price: 'Price', priceV: 'Freemium', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Privater KI-Chat auf dem Gerät', 'Charaktere, Skills und MCP', 'Gratis-Stufe, Bezahlpläne'], price: 'Preis', priceV: 'Freemium', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["Chat IA privé sur l'appareil", 'Personnages, Skills et MCP', 'Offre gratuite, formules payantes'], price: 'Prix', priceV: 'Freemium', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de IA privado en el dispositivo', 'Personajes, Skills y MCP', 'Nivel gratis, planes de pago'], price: 'Precio', priceV: 'Freemium', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['端末内で私的AIチャット', 'キャラ・Skills・MCP対応', '無料枠と有料プラン'], price: '価格', priceV: '基本無料', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['设备端私密 AI 聊天', '角色、Skills 与 MCP', '免费版与付费方案'], price: '价格', priceV: '免费增值', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de IA privado no aparelho', 'Personagens, Skills e MCP', 'Nível grátis, planos pagos'], price: 'Preço', priceV: 'Freemium', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['دردشة ذكاء اصطناعي خاصة على الجهاز', 'شخصيات وSkills وMCP', 'مستوى مجاني وخطط مدفوعة'], price: 'السعر', priceV: 'مجاني جزئيًا', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['기기 내 프라이빗 AI 채팅', '캐릭터·Skills·MCP 지원', '무료 티어와 유료 플랜'], price: '가격', priceV: '부분 유료', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
}

const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

async function main() {
  let generated = 0
  const failures = []
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  for (const lang of Object.keys(L)) {
    if (only && !only.includes(lang)) continue
    const block = article[lang]
    if (!block) {
      failures.push({ lang, error: 'no locale block in article' })
      continue
    }
    const t = L[lang]
    const spec = {
      lang,
      title: stripMd(block.title),
      highlights: t.hl,
      facts: [
        { label: t.price, value: t.priceV, tone: 'amber' },
        { label: t.plat, value: 'iPhone, Android, Mac', tone: 'slate' },
      ],
      footer: t.footer,
    }
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${SLUG}-hero-${lang}.webp (${buf.length} -> ${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log(`\nGenerated: ${generated}/9, failed: ${failures.length}`)
  if (failures.length) process.exitCode = 1
}

main()
