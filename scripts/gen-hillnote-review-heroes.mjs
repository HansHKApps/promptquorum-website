#!/usr/bin/env node
// Hero generator for hillnote-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/hillnote.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'hillnote-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ["Local-first Markdown notes","Ollama and Apple Intelligence","Free plan, paid yearly tiers"], price: "Price", priceV: "Free + paid", lic: "Licence", licV: "Not stated", plat: "Platforms", platV: "Mac, Win, iOS, Android", footer: "PromptQuorum Guide" },
  de: { hl: ["Lokale Markdown-Notizen","Ollama und Apple Intelligence","Gratis-Tarif, bezahlte Jahrestarife"], price: "Preis", priceV: "Gratis + Bezahlt", lic: "Lizenz", licV: "Nicht angegeben", plat: "Plattformen", platV: "Mac, Win, iOS, Android", footer: "PromptQuorum-Leitfaden" },
  fr: { hl: ["Notes Markdown locales","Ollama et Apple Intelligence","Offre gratuite, offres annuelles"], price: "Prix", priceV: "Gratuit + payant", lic: "Licence", licV: "Non indiquée", plat: "Plateformes", platV: "Mac, Win, iOS, Android", footer: "Guide PromptQuorum" },
  es: { hl: ["Notas Markdown locales","Ollama y Apple Intelligence","Plan gratis, planes anuales"], price: "Precio", priceV: "Gratis + de pago", lic: "Licencia", licV: "No indicada", plat: "Plataformas", platV: "Mac, Win, iOS, Android", footer: "Guía de PromptQuorum" },
  ja: { hl: ["ローカルMarkdownノート","Ollama対応の端末内AI","無料プラン、有料は年額"], price: "価格", priceV: "無料＋有料", lic: "ライセンス", licV: "記載なし", plat: "対応プラットフォーム", platV: "Mac、Win、iOS、Android", footer: "PromptQuorumガイド" },
  zh: { hl: ["本地 Markdown 笔记","本地 AI：Ollama","免费版，付费按年"], price: "价格", priceV: "免费 + 付费", lic: "许可证", licV: "未标明", plat: "支持平台", platV: "Mac、Win、iOS、Android", footer: "PromptQuorum 指南" },
  pt: { hl: ["Notas Markdown locais","Ollama e Apple Intelligence","Plano grátis, planos anuais"], price: "Preço", priceV: "Grátis + pago", lic: "Licença", licV: "Não indicada", plat: "Plataformas", platV: "Mac, Win, iOS, Android", footer: "Guia PromptQuorum" },
  ar: { hl: ["ملاحظات Markdown محلية","Ollama وApple Intelligence","خطة مجانية وخطط سنوية"], price: "السعر", priceV: "مجاني + مدفوع", lic: "الترخيص", licV: "غير مذكور", plat: "المنصات", platV: "Mac وWin وiOS وAndroid", footer: "دليل PromptQuorum" },
  ko: { hl: ["로컬 Markdown 노트","기기 내 AI 지원","무료 플랜, 유료는 연간"], price: "가격", priceV: "무료 + 유료", lic: "라이선스", licV: "명시 없음", plat: "플랫폼", platV: "Mac, Win, iOS, Android", footer: "PromptQuorum 가이드" },
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
