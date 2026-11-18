#!/usr/bin/env node
// Hero generator for myagents-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/myagents.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3450'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'myagents-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '500+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Agent workbench + task scheduler", "Links your computers via AgentNet", "Free & open source, no local model"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "AGPL-3.0", "plat": "Platform", "platV": "Mac/Win", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Agent-Arbeitsbereich + Aufgabenplaner", "Verbindet Computer via AgentNet", "Kostenlos & quelloffen, kein lokales Modell"], "price": "Preis", "priceV": "Kostenlos", "lic": "Lizenz", "licV": "AGPL-3.0", "plat": "Plattform", "platV": "Mac/Win", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Agent + planificateur de tâches", "Relie vos PC via AgentNet", "Gratuit, open source, sans modèle local"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "AGPL-3.0", "plat": "Plateforme", "platV": "Mac/Win", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Agente + programador de tareas", "Conecta tus PC vía AgentNet", "Gratis, código abierto, sin modelo local"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "AGPL-3.0", "plat": "Plataforma", "platV": "Mac/Win", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Agente + agendador de tarefas", "Conecta seus PCs via AgentNet", "Grátis, código aberto, sem modelo local"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "AGPL-3.0", "plat": "Plataforma", "platV": "Mac/Win", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["Agent作業台＋タスク予約", "AgentNetでPCを接続", "無料・OSS、ローカルモデル不使用"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "AGPL-3.0", "plat": "プラットフォーム", "platV": "Mac/Win", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["Agent工作台+任务调度", "AgentNet连接多台电脑", "免费开源，无本地模型"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "AGPL-3.0", "plat": "平台", "platV": "Mac/Win", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["Agent + مجدول مهام", "يربط أجهزتك عبر AgentNet", "مجاني ومفتوح، بلا نموذج محلي"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "AGPL-3.0", "plat": "المنصة", "platV": "Mac/Win", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["에이전트+작업 스케줄러", "AgentNet으로 PC 연결", "무료 오픈소스, 로컬 모델 없음"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "AGPL-3.0", "plat": "플랫폼", "platV": "Mac/Win", "footer": "PromptQuorum 가이드"},
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
