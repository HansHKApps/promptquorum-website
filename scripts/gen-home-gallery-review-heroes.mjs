#!/usr/bin/env node
// Hero generator for home-gallery-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/home-gallery.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'home-gallery-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Browse and tag large photo folders','AI search calls a public API by default','Run your own API server to stay local'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Win / Mac / Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Große Fotoordner durchsuchen und taggen','KI-Suche nutzt standardmäßig eine öffentliche API','Eigener API-Server hält alles lokal'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Win / Mac / Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Parcourez et étiquetez de gros dossiers','La recherche IA appelle une API publique','Votre serveur d’API reste en local'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Win / Mac / Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Explora y etiqueta carpetas enormes','La búsqueda IA usa una API pública','Tu servidor de API la mantiene local'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['大量の写真を閲覧・タグ付け','AI検索は既定で公開API','自前APIサーバーでローカル化'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応OS', platV: 'Win / Mac / Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['浏览并标记大量照片','AI 搜索默认调用公共 API','自建 API 服务器保持本地'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '平台', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Navegue e etiquete pastas enormes','A busca IA usa uma API pública','Seu servidor de API mantém tudo local'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['تصفح وضع وسوم لمجلدات الصور الكبيرة','بحث الذكاء الاصطناعي يستخدم API عامة افتراضيًا','خادم API خاص بك يبقي كل شيء محليًا'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Win / Mac / Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['대용량 사진 폴더 탐색·태그','AI 검색은 기본 공개 API 호출','자체 API 서버로 로컬 유지'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 가이드' },
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
