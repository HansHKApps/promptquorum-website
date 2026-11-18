#!/usr/bin/env node
// Hero generator for dyad-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/dyad.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3452'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'dyad-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Builds web apps from prompts', 'Files stay on your computer', 'Your API keys or local models'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'Apache 2.0 + FSL', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Baut Web-Apps aus Prompts', 'Dateien bleiben auf Ihrem Rechner', 'Eigene API-Schlüssel oder lokale Modelle'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'Apache 2.0 + FSL', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Crée des apps web par prompts', 'Fichiers sur votre ordinateur', 'Vos clés API ou modèles locaux'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'Apache 2.0 + FSL', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Crea apps web con prompts', 'Archivos en tu ordenador', 'Tus claves de API o modelos locales'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'Apache 2.0 + FSL', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['プロンプトでWebアプリを作成', 'ファイルはPCに保存', '自分のAPIキーやローカルモデル'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'Apache 2.0 + FSL', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['用提示词构建 Web 应用', '文件保存在您的电脑上', '自备密钥或本地模型'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'Apache 2.0 + FSL', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Cria apps web com prompts', 'Arquivos no seu computador', 'Suas chaves de API ou modelos locais'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'Apache 2.0 + FSL', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يبني تطبيقات ويب من البرومبتات', 'الملفات تبقى على جهازك', 'مفاتيح API الخاصة بك أو نماذج محلية'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'Apache 2.0 + FSL', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['프롬프트로 웹 앱 제작', '파일은 내 컴퓨터에 저장', '자체 키 또는 로컬 모델'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'Apache 2.0 + FSL', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
