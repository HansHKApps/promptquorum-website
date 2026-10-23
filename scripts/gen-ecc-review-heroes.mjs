#!/usr/bin/env node
// Hero generator for ecc-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/ecc.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3441'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ecc-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '280,000+' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Agents, skills, hooks, memory', 'For Claude Code and Codex', 'Free MIT toolkit'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Win · Mac · Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Agenten, Skills, Hooks, Memory', 'Für Claude Code und Codex', 'Kostenloses MIT-Toolkit'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Win · Mac · Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agents, skills, hooks, mémoire', 'Pour Claude Code et Codex', 'Outils gratuits, licence MIT'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Win · Mac · Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agentes, skills, hooks, memoria', 'Para Claude Code y Codex', 'Kit gratis con licencia MIT'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['エージェントとスキル', 'Claude Code・Codex向け', '無料・MITライセンス'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Win · Mac · Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['智能体、技能、钩子', '适用于 Claude Code 和 Codex', '免费 MIT 工具包'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agentes, skills, hooks, memória', 'Para Claude Code e Codex', 'Kit grátis com licença MIT'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['الوكلاء، المهارات، الخطافات', 'يعمل مع Claude Code', 'مجاني بترخيص MIT'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'Win · Mac · Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['에이전트·스킬·훅·메모리', 'Claude Code·Codex용', '무료 MIT 툴킷'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 가이드' },
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
