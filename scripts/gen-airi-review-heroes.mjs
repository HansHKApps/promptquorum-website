#!/usr/bin/env node
// Hero generator for airi-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/airi.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3454'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'airi-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Voice chat with Live2D or VRM characters', 'Free and MIT-licensed', 'Bring your own model provider'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Web, Win, Mac, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Sprachchat mit Live2D- und VRM-Figuren', 'Kostenlos, MIT-Lizenz', 'Eigenen Modellanbieter anbinden'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Web, Win, Mac, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Chat vocal avec personnages Live2D et VRM', 'Gratuit, licence MIT', 'Branchez votre fournisseur de modèle'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Web, Win, Mac, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Chat de voz con personajes Live2D y VRM', 'Gratis, licencia MIT', 'Conecta tu proveedor de modelo'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Web, Win, Mac, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['音声チャットとLive2D/VRM', '無料のMITライセンス', '好きなモデルを接続'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Web/Win/Mac/Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['语音聊天加 Live2D/VRM', '免费，MIT 许可证', '自选模型提供商'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Web/Win/Mac/Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Chat de voz com personagens Live2D e VRM', 'Grátis, licença MIT', 'Conecte seu provedor de modelo'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Web, Win, Mac, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['محادثة صوتية مع شخصيات Live2D وVRM', 'مجاني بترخيص MIT', 'اربط مزوّد النموذج الذي تريده'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Web وWin وMac وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['음성 채팅과 Live2D·VRM', '무료, MIT 라이선스', '원하는 모델 연결'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Web, Win, Mac, Linux', footer: 'PromptQuorum 가이드' },
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
