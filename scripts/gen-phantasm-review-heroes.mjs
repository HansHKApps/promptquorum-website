#!/usr/bin/env node
// Hero generator for phantasm-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/phantasm.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3460'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'phantasm-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Your own Ollama on your iPhone', 'Maker says: no account, no telemetry', 'Free, optional companion server'], price: 'Price', priceV: 'Free', lic: 'Source', licV: 'No licence file', plat: 'Platforms', platV: 'iPhone', footer: 'PromptQuorum Guide' },
  de: { hl: ['Ihr eigenes Ollama auf dem iPhone', 'Laut Entwickler: kein Konto, keine Telemetrie', 'Gratis, Begleitserver optional'], price: 'Preis', priceV: 'Gratis', lic: 'Quellcode', licV: 'Keine Lizenzdatei', plat: 'Plattformen', platV: 'iPhone', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Votre Ollama sur votre iPhone', 'Selon le développeur : ni compte, ni télémétrie', 'Gratuit, serveur complémentaire facultatif'], price: 'Prix', priceV: 'Gratuit', lic: 'Code source', licV: 'Sans fichier de licence', plat: 'Plateformes', platV: 'iPhone', footer: 'Guide PromptQuorum' },
  es: { hl: ['Tu propio Ollama en tu iPhone', 'Según el desarrollador: sin cuenta ni telemetría', 'Gratis, servidor complementario opcional'], price: 'Precio', priceV: 'Gratis', lic: 'Código', licV: 'Sin archivo de licencia', plat: 'Plataformas', platV: 'iPhone', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['iPhoneから自分のOllamaへ', '開発者談：アカウント・計測なし', '無料、補助サーバーは任意'], price: '価格', priceV: '無料', lic: 'ソース', licV: 'ライセンスなし', plat: '対応プラットフォーム', platV: 'iPhone', footer: 'PromptQuorumガイド' },
  zh: { hl: ['iPhone 连接你自己的 Ollama', '开发者称：无账号、无遥测', '免费，配套服务器可选'], price: '价格', priceV: '免费', lic: '源代码', licV: '无许可证文件', plat: '支持平台', platV: 'iPhone', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Seu próprio Ollama no iPhone', 'Segundo o desenvolvedor: sem conta nem telemetria', 'Grátis, servidor complementar opcional'], price: 'Preço', priceV: 'Grátis', lic: 'Código', licV: 'Sem arquivo de licença', plat: 'Plataformas', platV: 'iPhone', footer: 'Guia PromptQuorum' },
  ar: { hl: ['Ollama الخاص بك على iPhone', 'بلا حساب ولا قياس عن بُعد بحسب المطوّر', 'مجاني وخادم مساعد اختياري'], price: 'السعر', priceV: 'مجاني', lic: 'الشيفرة', licV: 'بلا ملف ترخيص', plat: 'المنصات', platV: 'iPhone', footer: 'دليل PromptQuorum' },
  ko: { hl: ['iPhone에서 나만의 Ollama로', '개발자 설명: 계정·수집 없음', '무료, 보조 서버는 선택'], price: '가격', priceV: '무료', lic: '소스', licV: '라이선스 파일 없음', plat: '플랫폼', platV: 'iPhone', footer: 'PromptQuorum 가이드' },
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
