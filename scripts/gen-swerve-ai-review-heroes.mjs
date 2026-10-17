#!/usr/bin/env node
// Generate the 9 localized hero images for swerve-ai-review (FeatureAppPost).
// Title/bullets come straight from each locale block of the article so the hero
// never drifts from the page copy; the facts strip (price, license, platforms) comes from the
// Oscilla/Tina ToolRecords. Hardware chip = depends on the model (tile sets variesByModel: true, no numeric floor).
// Needs the dev server: npx next dev --webpack --port 3447
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const ts = require('typescript')

const BASE = 'http://localhost:3447'
const SLUG = 'swerve-ai-review'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}
// Strings reused from src/components/local-ai-directory/directory-i18n.ts (priceFree, detailLicense, detailPlatforms)
const T = {
  hwRam: { en: 'Min. {n} GB RAM', de: 'Mind. {n} GB RAM', fr: '{n} Go de RAM min.', ja: '最低{n}GBのRAM', zh: '最低{n}GB内存', es: 'Mín. {n} GB de RAM', pt: 'Mín. {n} GB de RAM', ar: 'الحد الأدنى {n} جيجابايت رام', ko: '최소 {n}GB RAM' },
  priceFree: { en: 'Free', de: 'Kostenlos', fr: 'Gratuit', ja: '無料', zh: '免费', es: 'Gratis', pt: 'Grátis', ar: 'مجاني', ko: '무료' },
  license: { en: 'License', de: 'Lizenz', fr: 'Licence', ja: 'ライセンス', zh: '许可证', es: 'Licencia', pt: 'Licença', ar: 'الترخيص', ko: '라이선스' },
  platforms: { en: 'Platforms', de: 'Plattformen', fr: 'Plateformes', ja: '対応プラットフォーム', zh: '支持平台', es: 'Plataformas', pt: 'Plataformas', ar: 'المنصات', ko: '플랫폼' },
  priceFreemium: { en: 'Free + paid tier', de: 'Kostenlos + kostenpflichtige Stufe', fr: 'Gratuit + offre payante', ja: '無料＋有料プラン', zh: '免费+付费版', es: 'Gratis + plan de pago', pt: 'Grátis + plano pago', ar: 'مجاني + خطة مدفوعة', ko: '무료 + 유료 요금제' },
  hardware: { en: 'Hardware', de: 'Hardware', fr: 'Matériel', ja: 'ハードウェア', zh: '硬件', es: 'Hardware', pt: 'Hardware', ar: 'العتاد', ko: '하드웨어' },
  varies: { en: 'Depends on the model you run', de: 'Hängt vom verwendeten Modell ab', fr: 'Dépend du modèle utilisé', ja: '実行するモデルによって異なります', zh: '取决于运行的模型', es: 'Depende del modelo que uses', pt: 'Depende do modelo usado', ar: 'يعتمد على النموذج الذي تشغّله', ko: '실행하는 모델에 따라 다름' },
  price: { en: 'Price', de: 'Preis', fr: 'Prix', ja: '価格', zh: '价格', es: 'Precio', pt: 'Preço', ar: 'السعر', ko: '가격' },
}

const LICENSE = { en: 'Closed source', de: 'Nicht quelloffen', fr: 'Code non public', ja: 'クローズドソース', zh: '闭源', es: 'Código cerrado', pt: 'Código fechado', ar: 'مغلق المصدر', ko: '비공개 소스' }
// Hand-written poster highlights (<= 7 words, <= 16 chars for ja/zh/ko), taken from each locale's own quickAnswerTop bullets.
const H = {
  en: ['500,000+ community characters', 'Branch any story message', 'Cloud service, not local'],
  de: ['500.000+ Community-Charaktere', 'Jede Story-Nachricht verzweigen', 'Cloud-Dienst, nicht lokal'],
  fr: ['500 000+ personnages communautaires', 'Embranchement depuis tout message', 'Service cloud, pas local'],
  ja: ['50万体超のキャラ', 'どのメッセージからも分岐', 'クラウド型でローカルではない'],
  zh: ['50万+社区角色', '任意消息均可分支', '云端服务，非本地'],
  es: ['500.000+ personajes de la comunidad', 'Ramifica desde cualquier mensaje', 'Servicio en la nube, no local'],
  pt: ['500.000+ personagens da comunidade', 'Ramifique a partir de qualquer mensagem', 'Serviço na nuvem, não local'],
  ar: ['أكثر من 500,000 شخصية', 'تفرّع من أي رسالة', 'خدمة سحابية وليست محلية'],
  ko: ['커뮤니티 캐릭터 50만+', '어떤 메시지에서든 분기', '클라우드 서비스, 로컬 아님'],
}

function loadArticle() {
  const src = fs.readFileSync(path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`), 'utf8')
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const m = { exports: {} }
  new Function('module', 'exports', 'require', js)(m, m.exports, () => ({}))
  return m.exports.article
}

const strip = (s) => s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

async function generateOne(article, lang) {
  const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
  const block = article[lang]
  if (!block) throw new Error(`no ${lang} block`)
  const highlights = H[lang]
  const body = {
    lang,
    title: block.title,
    subtitle: '',
    highlights,
    facts: [
      { label: T.price[lang], value: T.priceFreemium[lang], tone: 'emerald' },
      { label: T.license[lang], value: LICENSE[lang], tone: 'slate' },
      { label: T.platforms[lang], value: 'iPhone', tone: 'violet' },
    ],
    footer: FOOTER[lang],
  }
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
  fs.writeFileSync(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)
  console.log(`OK ${SLUG}-hero-${lang}.webp (${fs.statSync(webpPath).size} bytes)`)
}

const article = loadArticle()
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
let failed = 0
for (const lang of langs) {
  try { await generateOne(article, lang) } catch (e) { failed++; console.error(`FAIL ${lang}: ${e.message}`) }
}
if (failed) process.exitCode = 1
