#!/usr/bin/env node
// Hero generator for openwork-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/openwork.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openwork-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Free desktop AI agent for your files', 'Your keys or local models via Ollama', 'Desktop app MIT, team features separate'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'MIT (desktop app)', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kostenloser Desktop-KI-Agent für Ihre Dateien', 'Eigene Schlüssel oder Ollama lokal', 'Desktop-App MIT, Team-Funktionen separat'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'MIT (Desktop-App)', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA de bureau gratuit pour vos fichiers', 'Vos clés ou modèles locaux via Ollama', 'Appli MIT, fonctions équipe à part'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'MIT (appli de bureau)', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente de IA de escritorio gratis', 'Tus claves o modelos locales con Ollama', 'App MIT, funciones de equipo aparte'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'MIT (app de escritorio)', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['手元のファイルで動く無料AIエージェント', '自分のキーかOllamaのローカルモデル', 'アプリはMIT、チーム機能は別'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'MIT（デスクトップ版）', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['处理本地文件的免费 AI 智能体', '自带密钥或 Ollama 本地模型', '桌面应用 MIT，团队功能另计'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'MIT（桌面应用）', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente de IA de desktop gratuito', 'Suas chaves ou modelos locais via Ollama', 'App MIT, recursos de equipe à parte'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'MIT (app de desktop)', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي مجاني لملفاتك', 'مفاتيحك أو نماذج محلية عبر Ollama', 'التطبيق MIT وميزات الفرق منفصلة'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'MIT (التطبيق المكتبي)', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['내 파일에서 작동하는 무료 AI 에이전트', '내 키 또는 Ollama 로컬 모델', '앱은 MIT, 팀 기능은 별도'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'MIT(데스크톱 앱)', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
