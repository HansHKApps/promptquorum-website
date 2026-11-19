#!/usr/bin/env node
// Hero generator for orca-review (all 9 locales). Sparse poster: localized title + 3 hand-written
// highlights + facts (price, license, platforms) taken from src/lib/power-local-llm/apps/orca.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'orca-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
const stubRequire = () => ({ starsFor: () => () => '100,000+' })
new Function('module', 'exports', 'require', js)(mod, mod.exports, stubRequire)
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: {"hl": ["Parallel agents in git worktrees", "Diff review + mobile companion", "Free & open source, no own model"], "price": "Price", "priceV": "Free", "lic": "License", "licV": "MIT", "plat": "Platform", "platV": "Mac/Win/Linux", "footer": "PromptQuorum Guide"},
  de: {"hl": ["Parallele Agenten in Git-Worktrees", "Diff-Review + Mobile-App", "Kostenlos & quelloffen, kein Modell"], "price": "Preis", "priceV": "Kostenlos", "lic": "Lizenz", "licV": "MIT", "plat": "Plattform", "platV": "Mac/Win/Linux", "footer": "PromptQuorum-Leitfaden"},
  fr: {"hl": ["Agents parallèles en worktrees", "Revue de diff + appli mobile", "Gratuit, open source, sans modèle"], "price": "Prix", "priceV": "Gratuit", "lic": "Licence", "licV": "MIT", "plat": "Plateforme", "platV": "Mac/Win/Linux", "footer": "Guide PromptQuorum"},
  es: {"hl": ["Agentes en paralelo en worktrees", "Revisión de diffs + app móvil", "Gratis, código abierto, sin modelo"], "price": "Precio", "priceV": "Gratis", "lic": "Licencia", "licV": "MIT", "plat": "Plataforma", "platV": "Mac/Win/Linux", "footer": "Guía de PromptQuorum"},
  pt: {"hl": ["Agentes em paralelo em worktrees", "Revisão de diffs + app móvel", "Grátis, código aberto, sem modelo"], "price": "Preço", "priceV": "Grátis", "lic": "Licença", "licV": "MIT", "plat": "Plataforma", "platV": "Mac/Win/Linux", "footer": "Guia PromptQuorum"},
  ja: {"hl": ["worktreeで並列エージェント", "差分レビュー＋モバイルアプリ", "無料・OSS、独自モデルなし"], "price": "価格", "priceV": "無料", "lic": "ライセンス", "licV": "MIT", "plat": "プラットフォーム", "platV": "Mac/Win/Linux", "footer": "PromptQuorumガイド"},
  zh: {"hl": ["worktree 并行运行 Agent", "差异审查+移动应用", "免费开源，无自带模型"], "price": "价格", "priceV": "免费", "lic": "许可证", "licV": "MIT", "plat": "平台", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 指南"},
  ar: {"hl": ["وكلاء متوازون في worktrees", "مراجعة الفروق + تطبيق جوال", "مجاني ومفتوح، بلا نموذج"], "price": "السعر", "priceV": "مجاني", "lic": "الرخصة", "licV": "MIT", "plat": "المنصة", "platV": "Mac/Win/Linux", "footer": "دليل PromptQuorum"},
  ko: {"hl": ["worktree에서 에이전트 병렬 실행", "diff 리뷰+모바일 앱", "무료 오픈소스, 자체 모델 없음"], "price": "가격", "priceV": "무료", "lic": "라이선스", "licV": "MIT", "plat": "플랫폼", "platV": "Mac/Win/Linux", "footer": "PromptQuorum 가이드"},
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
