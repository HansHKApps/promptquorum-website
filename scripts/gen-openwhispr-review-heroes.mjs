#!/usr/bin/env node
// Hero generator for openwhispr-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/openwhispr.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3471'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openwhispr-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Dictation and meeting notes', 'Local or cloud speech models', 'Free local dictation, MIT'], price: 'Price', priceV: 'Free + paid plans', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'Win, Mac, Linux, iPhone', footer: 'PromptQuorum Guide' },
  de: { hl: ['Diktat und Meeting-Notizen', 'Lokale oder Cloud-Sprachmodelle', 'Lokales Diktat gratis, MIT'], price: 'Preis', priceV: 'Gratis + Bezahltarife', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'Win, Mac, Linux, iPhone', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Dictée et notes de réunion', 'Voix locale ou cloud', 'Dictée locale gratuite, MIT'], price: 'Prix', priceV: 'Gratuit + offres payantes', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'Win, Mac, Linux, iPhone', footer: 'Guide PromptQuorum' },
  es: { hl: ['Dictado y notas de reuniones', 'Voz local o en la nube', 'Dictado local gratis, MIT'], price: 'Precio', priceV: 'Gratis + planes de pago', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'Win, Mac, Linux, iPhone', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['音声入力と会議メモ', 'ローカルかクラウドを選択', 'ローカル入力は無料、MIT'], price: '価格', priceV: '無料＋有料プラン', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'Win/Mac/Linux/iPhone', footer: 'PromptQuorumガイド' },
  zh: { hl: ['语音听写与会议笔记', '本地或云端语音模型', '本地听写免费，MIT'], price: '价格', priceV: '免费 + 付费套餐', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'Win/Mac/Linux/iPhone', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Ditado e notas de reuniões', 'Voz local ou na nuvem', 'Ditado local grátis, MIT'], price: 'Preço', priceV: 'Grátis + planos pagos', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'Win, Mac, Linux, iPhone', footer: 'Guia PromptQuorum' },
  ar: { hl: ['إملاء وملاحظات اجتماعات', 'نماذج كلام محلية أو سحابية', 'الإملاء المحلي مجاني، MIT'], price: 'السعر', priceV: 'مجاني + خطط مدفوعة', lic: 'الرخصة', licV: 'MIT', plat: 'المنصات', platV: 'Win وMac وLinux وiPhone', footer: 'دليل PromptQuorum' },
  ko: { hl: ['받아쓰기와 회의 노트', '로컬 또는 클라우드 음성', '로컬 받아쓰기 무료, MIT'], price: '가격', priceV: '무료 + 유료 요금제', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'Win/Mac/Linux/iPhone', footer: 'PromptQuorum 가이드' },
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
