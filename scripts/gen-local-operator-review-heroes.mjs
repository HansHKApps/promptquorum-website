#!/usr/bin/env node
// Hero generator for local-operator-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/local-operator.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3440'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'local-operator-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI agent that runs code on your PC', 'Asks before it writes or runs', 'Free, MIT, local or hosted model'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Agent führt Code auf Ihrem PC aus', 'Fragt vor Schreiben und Ausführen', 'Gratis, MIT, lokales oder gehostetes Modell'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA qui exécute du code sur votre PC', 'Demande avant d’écrire ou d’exécuter', 'Gratuit, MIT, modèle local ou hébergé'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Mac, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente IA que ejecuta código en tu PC', 'Pregunta antes de escribir o ejecutar', 'Gratis, MIT, modelo local o alojado'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['PC上でコードを実行するAI', '書き込み前に必ず確認', '無料・MIT、ローカル/ホスト型'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Mac・Windows・Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在你电脑上运行代码的 AI', '写入或执行前先询问', '免费 MIT，本地或托管模型'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Mac、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente IA que roda código no seu PC', 'Pergunta antes de gravar ou rodar', 'Grátis, MIT, modelo local ou hospedado'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Mac, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي ينفذ الشيفرة على حاسوبك', 'يسأل قبل الكتابة أو التنفيذ', 'مجاني، MIT، نموذج محلي أو مستضاف'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Mac وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['내 PC에서 코드를 실행하는 AI', '쓰기·실행 전에 먼저 확인', '무료 MIT, 로컬/호스팅 모델'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Mac, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
