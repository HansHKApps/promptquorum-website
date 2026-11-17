#!/usr/bin/env node
// Hero generator for skales-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/skales.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3450'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'skales-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '2,000+' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['AI agent app for desktop and phone', 'Your own key, trial or local models', 'Proprietary, free up to two people'], price: 'Price', priceV: 'Free (up to 2 people)', lic: 'License', licV: 'Proprietary', plat: 'Platforms', platV: 'Win, Mac, Linux, iOS, Android', footer: 'PromptQuorum Guide' },
  de: { hl: ['KI-Agent-App für Desktop und Handy', 'Eigener Schlüssel, Test oder lokal', 'Proprietär, frei bis zwei Personen'], price: 'Preis', priceV: 'Kostenlos (bis 2 Personen)', lic: 'Lizenz', licV: 'Proprietär', plat: 'Plattformen', platV: 'Win, Mac, Linux, iOS, Android', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Agent IA pour ordinateur et mobile', 'Votre clé, un essai ou en local', 'Propriétaire, gratuit jusqu\'à deux'], price: 'Prix', priceV: 'Gratuit (jusqu\'à 2 personnes)', lic: 'Licence', licV: 'Propriétaire', plat: 'Plateformes', platV: 'Win, Mac, Linux, iOS, Android', footer: 'Guide PromptQuorum' },
  es: { hl: ['Agente de IA para escritorio y móvil', 'Tu clave, una prueba o en local', 'Propietario, gratis hasta dos personas'], price: 'Precio', priceV: 'Gratis (hasta 2 personas)', lic: 'Licencia', licV: 'Propietaria', plat: 'Plataformas', platV: 'Win, Mac, Linux, iOS, Android', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['デスクトップとスマホのAIエージェント', '自分のキー・試用・ローカル', '独自ライセンス、2人まで無料'], price: '価格', priceV: '無料（2人まで）', lic: 'ライセンス', licV: '独自ライセンス', plat: '対応プラットフォーム', platV: 'Win、Mac、Linux、iOS、Android', footer: 'PromptQuorumガイド' },
  zh: { hl: ['桌面和手机端 AI 智能体', '自带密钥、试用或本地模型', '专有许可，两人以内免费'], price: '价格', priceV: '免费（两人以内）', lic: '许可证', licV: '专有许可', plat: '支持平台', platV: 'Win、Mac、Linux、iOS、Android', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Agente de IA para desktop e celular', 'Sua chave, teste ou local', 'Proprietário, grátis até duas pessoas'], price: 'Preço', priceV: 'Grátis (até 2 pessoas)', lic: 'Licença', licV: 'Proprietária', plat: 'Plataformas', platV: 'Win, Mac, Linux, iOS, Android', footer: 'Guia PromptQuorum' },
  ar: { hl: ['وكيل ذكاء اصطناعي للحاسوب والهاتف', 'مفتاحك أو تجربة أو نموذج محلي', 'ترخيص مملوك ومجاني لشخصين'], price: 'السعر', priceV: 'مجاني (حتى شخصين)', lic: 'الترخيص', licV: 'مملوك', plat: 'المنصات', platV: 'Windows وMac وLinux وiOS وAndroid', footer: 'دليل PromptQuorum' },
  ko: { hl: ['데스크톱·휴대폰 AI 에이전트 앱', '내 키·체험·로컬 모델', '독점 라이선스, 2인까지 무료'], price: '가격', priceV: '무료(2인까지)', lic: '라이선스', licV: '독점', plat: '플랫폼', platV: 'Win, Mac, Linux, iOS, Android', footer: 'PromptQuorum 가이드' },
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
