#!/usr/bin/env node
// Hero generator for nekoni-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/nekoni.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3444'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'nekoni-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Your own AI agent, at home', 'Chat from iPhone or browser', 'Free, MIT, one-line install'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac, Linux, iPhone', footer: 'PromptQuorum Guide' },
  de: { hl: ['Ihr eigener KI-Agent zu Hause', 'Chat per iPhone oder Browser', 'Gratis, MIT, ein Befehl'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac, Linux, iPhone', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Votre agent IA, chez vous', 'Chat via iPhone ou navigateur', 'Gratuit, MIT, une commande'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac, Linux, iPhone', footer: 'Guide PromptQuorum' },
  es: { hl: ['Tu propio agente de IA en casa', 'Chat desde iPhone o navegador', 'Gratis, MIT, un solo comando'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Linux, iPhone', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['自宅で動く自分のAIエージェント', 'iPhoneやブラウザでチャット', '無料・MIT・コマンド1つ'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac、Linux、iPhone', footer: 'PromptQuorumガイド' },
  zh: { hl: ['家里运行你自己的 AI 智能体', '用 iPhone 或浏览器对话', '免费、MIT、一条命令'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac、Linux、iPhone', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Seu próprio agente de IA em casa', 'Chat pelo iPhone ou navegador', 'Grátis, MIT, um só comando'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Linux, iPhone', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي خاص في منزلك', 'تحدّث من iPhone أو المتصفح', 'مجاني، MIT، أمر واحد'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Mac وLinux وiPhone', footer: 'دليل PromptQuorum' },
  ko: { hl: ['집에서 돌리는 나만의 AI 에이전트', 'iPhone·브라우저로 대화', '무료, MIT, 명령 한 줄'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac, Linux, iPhone', footer: 'PromptQuorum 가이드' },
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
