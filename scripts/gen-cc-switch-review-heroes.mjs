#!/usr/bin/env node
// Hero generator for cc-switch-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/cc-switch.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'cc-switch-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => 'N' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const P = 'Windows · macOS · Linux'
const L = {
  en: { hl: ['MIT-licensed open-source code', 'One-click API provider switching', 'Local routing and failover'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: P, footer: 'PromptQuorum Guide' },
  de: { hl: ['Quelloffen unter MIT-Lizenz', 'API-Anbieter per Klick wechseln', 'Lokales Routing und Failover'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: P, footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Open source sous licence MIT', 'Changez de fournisseur en un clic', 'Routage local et basculement'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: P, footer: 'Guide PromptQuorum' },
  es: { hl: ['Código abierto con licencia MIT', 'Cambia de proveedor con un clic', 'Enrutamiento local y failover'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: P, footer: 'Guía de PromptQuorum' },
  ja: { hl: ['MITライセンスのOSS', 'ワンクリックでAPI切替', 'ローカルルーティング対応'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: P, footer: 'PromptQuorumガイド' },
  zh: { hl: ['MIT 许可的开源代码', '一键切换 API 服务商', '本地路由与故障转移'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: P, footer: 'PromptQuorum 指南' },
  pt: { hl: ['Código aberto sob licença MIT', 'Troque de provedor com um clique', 'Roteamento local e failover'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: P, footer: 'Guia PromptQuorum' },
  ar: { hl: ['شفرة مفتوحة برخصة MIT', 'تبديل مزوّد API بنقرة', 'توجيه محلي وتبديل تلقائي'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: P, footer: 'دليل PromptQuorum' },
  ko: { hl: ['MIT 라이선스 오픈소스', '한 번에 API 제공업체 전환', '로컬 라우팅과 장애 조치'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: P, footer: 'PromptQuorum 가이드' },
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
