#!/usr/bin/env node
// Hero generator for open-llm-vtuber-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/open-llm-vtuber.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'open-llm-vtuber-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Talk to an AI with a Live2D avatar', 'Self-hosted, local or cloud parts', 'No update since February'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Win, Mac, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Sprach-KI mit Live2D-Avatar', 'Selbst gehostet, lokal oder Cloud', 'Seit Februar kein Update'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Win, Mac, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['IA vocale avec avatar Live2D', 'Auto-hébergé, local ou cloud', 'Aucune mise à jour depuis février'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Win, Mac, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['IA de voz con avatar Live2D', 'Autoalojado, local o en la nube', 'Sin actualizaciones desde febrero'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Win, Mac, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['Live2Dアバターと声で会話', '自前ホスト、ローカルかクラウド', '2月以降は更新なし'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Win/Mac/Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['与 Live2D 形象语音对话', '自托管，本地或云端', '2月起未更新'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Win/Mac/Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['IA de voz com avatar Live2D', 'Auto-hospedado, local ou nuvem', 'Sem atualização desde fevereiro'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Win, Mac, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ذكاء صوتي مع شخصية Live2D', 'ذاتي الاستضافة، محلي أو سحابي', 'لا تحديث منذ فبراير'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Win وMac وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['Live2D 아바타와 음성 대화', '자체 호스팅, 로컬·클라우드', '2월 이후 업데이트 없음'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Win, Mac, Linux', footer: 'PromptQuorum 가이드' },
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
