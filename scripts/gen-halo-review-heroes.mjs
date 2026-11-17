#!/usr/bin/env node
// Hero generator for halo-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/halo.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3449'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'halo-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '1,000+' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Desktop AI workstation, MIT license', 'Chat, coding agents, AI browser', 'Digital Humans, remote access'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Desktop-KI-Arbeitsstation, MIT-Lizenz', 'Chat, Coding-Agenten, KI-Browser', 'Digital Humans, Fernzugriff'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Poste IA de bureau, licence MIT', 'Chat, agents de code, navigateur IA', 'Digital Humans, accès à distance'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Estación de IA de escritorio, MIT', 'Chat, agentes de código, navegador IA', 'Digital Humans, acceso remoto'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['デスクトップAI、MIT', 'チャットとコーディング', 'Digital Humansと遠隔操作'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['桌面 AI 工作站，MIT', '聊天、编程智能体、浏览器', 'Digital Humans 与远程访问'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Estação de IA para desktop, MIT', 'Chat, agentes de código, navegador IA', 'Digital Humans, acesso remoto'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['محطة ذكاء اصطناعي لسطح المكتب', 'دردشة ووكلاء برمجة ومتصفح ذكي', 'Digital Humans ووصول عن بُعد'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['데스크톱 AI 워크스테이션', '채팅, 코딩 에이전트, 브라우저', 'Digital Humans, 원격 접속'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
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
