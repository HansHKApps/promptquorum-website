#!/usr/bin/env node
// Hero generator for ramen-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/ramen.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ramen-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Every chat saved to disk", "Long-chat speedup, vendor data", "Free plan, one-line install"], price: "Price", priceV: "Free plan", lic: "Licence", licV: "Proprietary", plat: "Platforms", platV: "Mac, Win, Linux", footer: "PromptQuorum Guide" },
  de: { hl: ["Jeder Chat auf der Festplatte", "Tempo bei langen Chats (Herstellerdaten)", "Gratis-Tarif, Ein-Zeilen-Install"], price: "Preis", priceV: "Gratis-Tarif", lic: "Lizenz", licV: "Proprietär", plat: "Plattformen", platV: "Mac, Win, Linux", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Chaque chat sauvegardé", "Longs chats accélérés (données éditeur)", "Offre gratuite, install en une ligne"], price: "Prix", priceV: "Offre gratuite", lic: "Licence", licV: "Propriétaire", plat: "Plateformes", platV: "Mac, Win, Linux", footer: "Guide PromptQuorum" },
  es: { hl: ["Cada chat guardado en disco", "Chats largos más rápidos (datos del autor)", "Plan gratis, instalación de una línea"], price: "Precio", priceV: "Plan gratis", lic: "Licencia", licV: "Propietaria", plat: "Plataformas", platV: "Mac, Win, Linux", footer: "Guía de PromptQuorum" },
  ja: { hl: ["全チャットをディスク保存", "長いチャット高速化（公式値）", "無料プラン、1行で導入"], price: "価格", priceV: "無料プランあり", lic: "ライセンス", licV: "独自仕様", plat: "対応プラットフォーム", platV: "Mac、Win、Linux", footer: "PromptQuorumガイド" },
  zh: { hl: ["每次聊天存入磁盘", "长对话提速（厂商数据）", "免费方案，一行安装"], price: "价格", priceV: "有免费方案", lic: "许可证", licV: "专有", plat: "支持平台", platV: "Mac、Win、Linux", footer: "PromptQuorum 指南" },
  pt: { hl: ["Cada chat salvo em disco", "Chats longos mais rápidos (dados do criador)", "Plano grátis, instalação em uma linha"], price: "Preço", priceV: "Plano grátis", lic: "Licença", licV: "Proprietária", plat: "Plataformas", platV: "Mac, Win, Linux", footer: "Guia PromptQuorum" },
  ar: { hl: ["كل محادثة محفوظة على القرص", "تسريع المحادثات الطويلة (بيانات الشركة)", "خطة مجانية وتثبيت بسطر واحد"], price: "السعر", priceV: "خطة مجانية", lic: "الترخيص", licV: "مملوك", plat: "المنصات", platV: "Mac وWin وLinux", footer: "دليل PromptQuorum" },
  ko: { hl: ["모든 채팅을 디스크에 저장", "긴 채팅 가속(제조사 자료)", "무료 플랜, 한 줄 설치"], price: "가격", priceV: "무료 플랜", lic: "라이선스", licV: "독점", plat: "플랫폼", platV: "Mac, Win, Linux", footer: "PromptQuorum 가이드" },
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
