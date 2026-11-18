#!/usr/bin/env node
// Hero generator for open-generative-ai-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/open-generative-ai.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'open-generative-ai-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Images, video and lip-sync in one studio', 'Cloud models via paid Muapi API', 'Optional local engines on desktop'], price: 'Price', priceV: 'Freemium', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'macOS, Windows, Linux, web', footer: 'PromptQuorum Guide' },
  de: { hl: ['Bild, Video und Lip-Sync in einem Studio', 'Cloud-Modelle über bezahlte Muapi-API', 'Optionale lokale Engines am Desktop'], price: 'Preis', priceV: 'Freemium', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'macOS, Windows, Linux, Web', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Image, vidéo et lip-sync dans un studio', 'Modèles cloud via l\'API Muapi payante', 'Moteurs locaux facultatifs sur bureau'], price: 'Prix', priceV: 'Freemium', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'macOS, Windows, Linux, web', footer: 'Guide PromptQuorum' },
  es: { hl: ['Imagen, vídeo y lip-sync en un estudio', 'Modelos en la nube con la API de pago de Muapi', 'Motores locales opcionales en escritorio'], price: 'Precio', priceV: 'Freemium', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux, web', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['画像・動画・リップシンクを1つに', '有料Muapi APIでクラウド利用', 'デスクトップはローカルも可'], price: '価格', priceV: 'フリーミアム', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux、Web', footer: 'PromptQuorumガイド' },
  zh: { hl: ['图像视频口型同步一体', '云端模型走付费 Muapi API', '桌面版可选本地引擎'], price: '价格', priceV: '免费增值', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'macOS、Windows、Linux、网页', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Imagem, vídeo e lip-sync em um estúdio', 'Modelos na nuvem pela API paga da Muapi', 'Mecanismos locais opcionais no desktop'], price: 'Preço', priceV: 'Freemium', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux, web', footer: 'Guia PromptQuorum' },
  ar: { hl: ['صور وفيديو ومزامنة شفاه في استوديو', 'نماذج سحابية عبر Muapi API المدفوعة', 'محركات محلية اختيارية على سطح المكتب'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'macOS وWindows وLinux وويب', footer: 'دليل PromptQuorum' },
  ko: { hl: ['이미지·영상·립싱크를 한곳에서', '유료 Muapi API로 클라우드 사용', '데스크톱은 로컬 엔진 선택'], price: '가격', priceV: '프리미엄', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'macOS, Windows, Linux, 웹', footer: 'PromptQuorum 가이드' },
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
