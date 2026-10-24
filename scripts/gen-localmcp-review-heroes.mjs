#!/usr/bin/env node
// Hero generator for localmcp-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platform) taken from src/lib/power-local-llm/apps/localmcp.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'localmcp-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Local MCP server for your Mac', 'Mail, Calendar, Notes for your AI', 'Pay once, approve per source'], price: 'Price', priceV: '$3.99', lic: 'License', licV: 'Proprietary', plat: 'Platform', platV: 'macOS 15+', footer: 'PromptQuorum Guide' },
  de: { hl: ['Lokaler MCP-Server für Ihren Mac', 'Mail, Kalender, Notizen für Ihre KI', 'Einmal zahlen, je Quelle freigeben'], price: 'Preis', priceV: '4,99 €', lic: 'Lizenz', licV: 'Proprietär', plat: 'Plattform', platV: 'macOS 15+', footer: 'PromptQuorum-Leitfaden' },
  es: { hl: ['Servidor MCP local para tu Mac', 'Mail, Calendario, Notas para tu IA', 'Pago único, permiso por fuente'], price: 'Precio', priceV: '4,99 €', lic: 'Licencia', licV: 'Propietaria', plat: 'Plataforma', platV: 'macOS 15+', footer: 'Guía de PromptQuorum' },
  fr: { hl: ['Serveur MCP local pour votre Mac', 'Mail, Calendrier, Notes pour votre IA', 'Un seul achat, accès par source'], price: 'Prix', priceV: '4,99 €', lic: 'Licence', licV: 'Propriétaire', plat: 'Plateforme', platV: 'macOS 15+', footer: 'Guide PromptQuorum' },
  ja: { hl: ['Mac向けローカルMCPサーバー', 'メール・予定・メモをAIへ', '買い切り、ソースごとに許可'], price: '価格', priceV: '¥600', lic: 'ライセンス', licV: 'プロプライエタリ', plat: '対応', platV: 'macOS 15以降', footer: 'PromptQuorumガイド' },
  pt: { hl: ['Servidor MCP local para o seu Mac', 'Mail, Calendário, Notas para sua IA', 'Pague uma vez, aprove por fonte'], price: 'Preço', priceV: 'R$ 24,90', lic: 'Licença', licV: 'Proprietária', plat: 'Plataforma', platV: 'macOS 15+', footer: 'Guia PromptQuorum' },
  ar: { hl: ['خادم MCP محلي لجهاز Mac', 'بريدك وتقويمك وملاحظاتك للذكاء الاصطناعي', 'ادفع مرة، ووافق لكل مصدر'], price: 'السعر', priceV: '3.99 دولارًا', lic: 'الترخيص', licV: 'مملوك', plat: 'المنصة', platV: 'macOS 15+', footer: 'دليل PromptQuorum' },
  zh: { hl: ['Mac 本地 MCP 服务器', '邮件日历备忘录交给 AI', '一次购买，按来源授权'], price: '价格', priceV: '$3.99', lic: '许可证', licV: '专有', plat: '平台', platV: 'macOS 15+', footer: 'PromptQuorum 指南' },
  ko: { hl: ['Mac용 로컬 MCP 서버', '메일·캘린더·메모를 AI에게', '한 번 결제, 소스별 승인'], price: '가격', priceV: '₩6,600', lic: '라이선스', licV: '독점', plat: '플랫폼', platV: 'macOS 15+', footer: 'PromptQuorum 가이드' },
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
