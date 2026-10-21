#!/usr/bin/env node
// Hero generator for surfsense-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/surfsense.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'surfsense-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Private AI agent for your files', 'Runs on your own computer', 'No account needed'], price: 'Price', priceV: 'Free app', lic: 'License', licV: 'Apache-2.0', plat: 'Platforms', platV: 'Win · Mac · Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Privater KI-Agent für Ihre Dateien', 'Läuft auf dem eigenen Rechner', 'Kein Konto nötig'], price: 'Preis', priceV: 'Kostenlose App', lic: 'Lizenz', licV: 'Apache-2.0', plat: 'Plattformen', platV: 'Win · Mac · Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA privé pour vos fichiers', 'Tourne sur votre ordinateur', 'Aucun compte requis'], price: 'Prix', priceV: 'App gratuite', lic: 'Licence', licV: 'Apache-2.0', plat: 'Plateformes', platV: 'Win · Mac · Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente de IA privado para tus archivos', 'Se ejecuta en tu equipo', 'Sin cuenta'], price: 'Precio', priceV: 'App gratuita', lic: 'Licencia', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ファイル用のプライベートAI', '自分のPC上で動作', 'アカウント不要'], price: '価格', priceV: 'アプリは無料', lic: 'ライセンス', licV: 'Apache-2.0', plat: '対応プラットフォーム', platV: 'Win · Mac · Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['文件专属私密 AI 智能体', '在你自己的电脑上运行', '无需账号'], price: '价格', priceV: '应用免费', lic: '许可证', licV: 'Apache-2.0', plat: '支持平台', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente de IA privado para seus arquivos', 'Roda no seu computador', 'Sem conta'], price: 'Preço', priceV: 'App gratuito', lic: 'Licença', licV: 'Apache-2.0', plat: 'Plataformas', platV: 'Win · Mac · Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي خاص لملفاتك', 'يعمل على جهازك', 'دون حساب'], price: 'السعر', priceV: 'التطبيق مجاني', lic: 'الترخيص', licV: 'Apache-2.0', plat: 'المنصات', platV: 'Win · Mac · Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['내 파일을 위한 프라이빗 AI', '내 컴퓨터에서 실행', '계정 불필요'], price: '가격', priceV: '앱 무료', lic: '라이선스', licV: 'Apache-2.0', plat: '플랫폼', platV: 'Win · Mac · Linux', footer: 'PromptQuorum 가이드' },
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
