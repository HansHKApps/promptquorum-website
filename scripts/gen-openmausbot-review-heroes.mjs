#!/usr/bin/env node
// Hero generator for openmausbot-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/openmausbot.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'openmausbot-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '22,000+' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Team of AI bots in a chat app','Cloud agents by default','Local models can connect'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'Apache 2.0', plat: 'Platforms', platV: 'Mac / Win / Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Team aus KI-Bots in einer Chat-App','Standardmäßig Cloud-Agenten','Lokale Modelle anbindbar'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'Apache 2.0', plat: 'Plattformen', platV: 'Mac / Win / Linux', footer: 'PromptQuorum Ratgeber' },
  fr: { hl: ['Équipe de bots IA en chat','Agents cloud par défaut','Modèles locaux connectables'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'Apache 2.0', plat: 'Plateformes', platV: 'Mac / Win / Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Equipo de bots de IA en un chat','Agentes en la nube por defecto','Se pueden conectar modelos locales'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Mac / Win / Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['チャットで動くAIボットのチーム','標準はクラウドのエージェント','ローカルモデルも接続可能'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'Apache 2.0', plat: '対応OS', platV: 'Mac / Win / Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['聊天应用里的 AI 机器人团队','默认使用云端智能体','可接入本地模型'], price: '价格', priceV: '免费', lic: '许可证', licV: 'Apache 2.0', plat: '平台', platV: 'Mac / Win / Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Equipe de bots de IA em um chat','Agentes na nuvem por padrão','Modelos locais podem ser conectados'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'Apache 2.0', plat: 'Plataformas', platV: 'Mac / Win / Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['فريق روبوتات ذكاء اصطناعي في تطبيق دردشة','وكلاء سحابيون افتراضيًا','يمكن ربط نماذج محلية'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'Apache 2.0', plat: 'المنصات', platV: 'Mac / Win / Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['채팅 앱 속 AI 봇 팀','기본은 클라우드 에이전트','로컬 모델 연결 가능'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'Apache 2.0', plat: '플랫폼', platV: 'Mac / Win / Linux', footer: 'PromptQuorum 가이드' },
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
