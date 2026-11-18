#!/usr/bin/env node
// Hero generator for inbox-zero-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/inbox-zero.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3454'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'inbox-zero-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

// Arabic: the hero renderer cannot reorder Latin names around the Arabic conjunction, so the hero uses 'Gmail / Outlook'.
const iso = (t) => t.replace('Gmail وOutlook', 'Gmail / Outlook')

const L = {
  en: { hl: ['Sorts your inbox with AI rules', 'Drafts replies in your tone', 'Works with Gmail and Outlook'], price: 'Price', priceV: '7-day trial', lic: 'License', licV: 'AGPL-3.0*', plat: 'Platforms', platV: 'Web, Gmail, Outlook', footer: 'PromptQuorum Guide' },
  de: { hl: ['Sortiert den Posteingang per KI-Regeln', 'Entwirft Antworten in Ihrem Ton', 'Für Gmail und Outlook'], price: 'Preis', priceV: '7 Tage testen', lic: 'Lizenz', licV: 'AGPL-3.0*', plat: 'Plattformen', platV: 'Web, Gmail, Outlook', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ["Trie la boîte de réception avec l'IA", 'Rédige des réponses dans votre ton', 'Pour Gmail et Outlook'], price: 'Prix', priceV: 'Essai de 7 jours', lic: 'Licence', licV: 'AGPL-3.0*', plat: 'Plateformes', platV: 'Web, Gmail, Outlook', footer: 'Guide PromptQuorum' },
  es: { hl: ['Ordena tu bandeja con reglas de IA', 'Redacta respuestas con tu tono', 'Para Gmail y Outlook'], price: 'Precio', priceV: 'Prueba de 7 días', lic: 'Licencia', licV: 'AGPL-3.0*', plat: 'Plataformas', platV: 'Web, Gmail, Outlook', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['AIルールで受信箱を整理', 'あなたの口調で返信を下書き', 'GmailとOutlookに対応'], price: '価格', priceV: '7日間トライアル', lic: 'ライセンス', licV: 'AGPL-3.0*', plat: '対応プラットフォーム', platV: 'Web/Gmail/Outlook', footer: 'PromptQuorumガイド' },
  zh: { hl: ['用 AI 规则整理收件箱', '按你的语气起草回复', '支持 Gmail 和 Outlook'], price: '价格', priceV: '7 天试用', lic: '许可证', licV: 'AGPL-3.0*', plat: '支持平台', platV: 'Web/Gmail/Outlook', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Organiza a caixa com regras de IA', 'Rascunha respostas no seu tom', 'Para Gmail e Outlook'], price: 'Preço', priceV: 'Teste de 7 dias', lic: 'Licença', licV: 'AGPL-3.0*', plat: 'Plataformas', platV: 'Web, Gmail, Outlook', footer: 'Guia PromptQuorum' },
  ar: { hl: ['ترتيب البريد بقواعد الذكاء الاصطناعي', 'صياغة ردود بأسلوبك', 'يعمل مع Gmail / Outlook'], price: 'السعر', priceV: 'تجربة 7 أيام', lic: 'الرخصة', licV: 'AGPL-3.0*', plat: 'المنصات', platV: 'Web وGmail وOutlook', footer: 'دليل PromptQuorum' },
  ko: { hl: ['AI 규칙으로 받은편지함 정리', '내 말투로 답장 초안 작성', 'Gmail·Outlook 지원'], price: '가격', priceV: '7일 체험', lic: '라이선스', licV: 'AGPL-3.0*', plat: '플랫폼', platV: 'Web, Gmail, Outlook', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: iso(stripMd(article[lang].title)),
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
