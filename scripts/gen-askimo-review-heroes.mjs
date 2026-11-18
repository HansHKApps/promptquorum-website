#!/usr/bin/env node
// Hero generator for askimo-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/askimo.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3445'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'askimo-review'
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
  en: {"hl": ["Local + cloud models, one app", "RAG over your files, offline", "Launches Claude Code, Codex CLI"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "AGPL-3.0", "plat": "Platforms", "platV": "Mac/Win/Linux", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Lokale + Cloud-Modelle, eine App", "RAG über eigene Dateien, offline", "Startet Claude Code, Codex CLI"], "price": "Preis", "priceV": "Gratis", "lic": "Lizenz", "licV": "AGPL-3.0", "plat": "Plattformen", "platV": "Mac/Win/Linux", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Modèles locaux + cloud, une app", "RAG sur vos fichiers, hors ligne", "Lance Claude Code, Codex CLI"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "AGPL-3.0", "plat": "Plateformes", "platV": "Mac/Win/Linux", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Modelos locales y en la nube", "RAG sobre tus archivos, sin conexión", "Lanza Claude Code, Codex CLI"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "AGPL-3.0", "plat": "Plataformas", "platV": "Mac/Win/Linux", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Modelos locais e em nuvem, um app", "RAG sobre seus arquivos, offline", "Inicia Claude Code, Codex CLI"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "AGPL-3.0", "plat": "Plataformas", "platV": "Mac/Win/Linux", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["ローカル+クラウド対応", "ファイルをRAG検索、オフライン", "Claude Code等を起動"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "AGPL-3.0", "plat": "対応OS", "platV": "Mac/Win/Linux", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["本地+云端模型，一个应用", "文件RAG检索，可离线", "可启动Claude Code等"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "AGPL-3.0", "plat": "支持平台", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["نماذج محلية وسحابية، تطبيق واحد", "بحث RAG في ملفاتك دون اتصال", "يشغّل Claude Code وغيرها"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "AGPL-3.0", "plat": "المنصات", "platV": "Mac/Win/Linux", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["로컬+클라우드 모델, 하나의 앱", "파일 RAG 검색, 오프라인", "Claude Code 등 실행"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "AGPL-3.0", "plat": "플랫폼", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 가이드"},
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
