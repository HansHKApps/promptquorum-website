#!/usr/bin/env node
// Hero generator for chaterminal-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/chaterminal.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3432'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'chaterminal-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Models on your phone', 'OpenAI-style API server', 'Ads and in-app purchases'], price: 'Price', priceV: 'Free with ads', lic: 'License', licV: 'Closed source', plat: 'Platforms', footer: 'PromptQuorum Guide' },
  de: { hl: ['Modelle auf dem Telefon', 'API-Server im OpenAI-Stil', 'Werbung und In-App-Käufe'], price: 'Preis', priceV: 'Kostenlos mit Werbung', lic: 'Lizenz', licV: 'Closed Source', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Modèles sur le téléphone', 'Serveur d’API style OpenAI', 'Publicités et achats intégrés'], price: 'Prix', priceV: 'Gratuit avec publicités', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', footer: 'Guide PromptQuorum' },
  es: { hl: ['Modelos en tu teléfono', 'Servidor de API estilo OpenAI', 'Anuncios y compras integradas'], price: 'Precio', priceV: 'Gratis con anuncios', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['スマホでモデルを実行', 'OpenAI風APIサーバー', '広告とアプリ内課金'], price: '価格', priceV: '無料（広告あり）', lic: 'ライセンス', licV: 'クローズドソース', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド' },
  zh: { hl: ['在手机上运行模型', 'OpenAI 风格 API 服务器', '含广告和应用内购买'], price: '价格', priceV: '免费（含广告）', lic: '许可证', licV: '闭源', plat: '支持平台', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Modelos no seu celular', 'Servidor de API estilo OpenAI', 'Anúncios e compras no app'], price: 'Preço', priceV: 'Grátis com anúncios', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', footer: 'Guia PromptQuorum' },
  ar: { hl: ['نماذج على هاتفك', 'خادم API بنمط OpenAI', 'إعلانات ومشتريات داخل التطبيق'], price: 'السعر', priceV: 'مجاني مع إعلانات', lic: 'الترخيص', licV: 'مغلق المصدر', plat: 'المنصات', footer: 'دليل PromptQuorum' },
  ko: { hl: ['휴대폰에서 모델 실행', 'OpenAI 방식 API 서버', '광고와 인앱 구매'], price: '가격', priceV: '무료(광고 포함)', lic: '라이선스', licV: '클로즈드 소스', plat: '플랫폼', footer: 'PromptQuorum 가이드' },
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
      { label: t.plat, value: 'Android' },
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
