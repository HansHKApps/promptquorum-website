#!/usr/bin/env node
// Hero generator for mylio-photos-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/mylio-photos.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'mylio-photos-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['One library on all devices','AI search, faces, text','Free download, paid plans'], price: 'Price', priceV: 'Free + plans', lic: 'License', licV: 'Closed source', plat: 'Platforms', platV: 'Win, Mac, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['Eine Bibliothek, alle Geräte','KI-Suche, Gesichter, Text','Gratis laden, Tarife zahlen'], price: 'Preis', priceV: 'Gratis + Tarife', lic: 'Lizenz', licV: 'Nicht quelloffen', plat: 'Plattformen', platV: 'Win, Mac, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Une photothèque, tous vos appareils','Recherche IA, visages, texte','Gratuit, offres payantes'], price: 'Prix', priceV: 'Gratuit + offres', lic: 'Licence', licV: 'Code fermé', plat: 'Plateformes', platV: 'Win, Mac, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Una biblioteca, todos tus dispositivos','Búsqueda IA, caras, texto','Gratis y planes de pago'], price: 'Precio', priceV: 'Gratis + planes', lic: 'Licencia', licV: 'Código cerrado', plat: 'Plataformas', platV: 'Win, Mac, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['全端末で1つのライブラリ','AI検索・顔・文字','無料DL、有料プランあり'], price: '価格', priceV: '無料＋プラン', lic: 'ライセンス', licV: 'クローズド', plat: '対応OS', platV: 'Win, Mac, iOS, Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['所有设备共用一个照片库','AI 搜索、人脸、文字','免费下载，付费方案'], price: '价格', priceV: '免费 + 方案', lic: '许可证', licV: '闭源', plat: '平台', platV: 'Win, Mac, iOS, Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Uma biblioteca, todos os dispositivos','Busca IA, rostos, texto','Download grátis, planos pagos'], price: 'Preço', priceV: 'Grátis + planos', lic: 'Licença', licV: 'Código fechado', plat: 'Plataformas', platV: 'Win, Mac, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['مكتبة واحدة لكل أجهزتك','بحث ذكي ووجوه ونص','تنزيل مجاني وخطط مدفوعة'], price: 'السعر', priceV: 'مجاني + خطط', lic: 'الرخصة', licV: 'مغلق المصدر', plat: 'المنصات', platV: 'Win, Mac, iOS, Android', footer: 'دليل PromptQuorum' },
  ko: { hl: ['모든 기기에 하나의 라이브러리','AI 검색·얼굴·텍스트','무료 다운로드, 유료 요금제'], price: '가격', priceV: '무료 + 요금제', lic: '라이선스', licV: '비공개 소스', plat: '플랫폼', platV: 'Win, Mac, iOS, Android', footer: 'PromptQuorum 가이드' },
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
