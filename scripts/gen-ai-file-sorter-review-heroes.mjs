#!/usr/bin/env node
// Hero generator for ai-file-sorter-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights + facts
// (price, license, platforms) taken from src/lib/power-local-llm/apps/ai-file-sorter.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ai-file-sorter-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Renames and sorts messy files','Local model or your own API key','Nothing moves until you approve'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'AGPL-3.0', plat: 'Platforms', platV: 'Win / Mac / Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Benennt und sortiert Dateien um','Lokales Modell oder eigener API-Schlüssel','Nichts bewegt sich ohne Freigabe'], price: 'Preis', priceV: 'Gratis', lic: 'Lizenz', licV: 'AGPL-3.0', plat: 'Plattformen', platV: 'Win / Mac / Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Renomme et trie les fichiers','Modèle local ou votre clé API','Rien ne bouge sans votre accord'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'AGPL-3.0', plat: 'Plateformes', platV: 'Win / Mac / Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Renombra y ordena archivos','Modelo local o tu clave API','Nada se mueve sin tu aprobación'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['ファイルを改名して整理','ローカルモデルか自分のAPIキー','承認するまで何も動かない'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'AGPL-3.0', plat: '対応OS', platV: 'Win / Mac / Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['重命名并整理杂乱文件','本地模型或自己的 API 密钥','确认前不会移动任何文件'], price: '价格', priceV: '免费', lic: '许可证', licV: 'AGPL-3.0', plat: '平台', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Renomeia e organiza arquivos','Modelo local ou sua chave de API','Nada se move sem sua aprovação'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'AGPL-3.0', plat: 'Plataformas', platV: 'Win / Mac / Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['يعيد تسمية الملفات ويفرزها','نموذج محلي أو مفتاح API الخاص بك','لا شيء يتحرك دون موافقتك'], price: 'السعر', priceV: 'مجاني', lic: 'الرخصة', licV: 'AGPL-3.0', plat: 'المنصات', platV: 'Win / Mac / Linux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['파일 이름 변경과 정리','로컬 모델 또는 내 API 키','승인 전에는 아무것도 이동 안 함'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'AGPL-3.0', plat: '플랫폼', platV: 'Win / Mac / Linux', footer: 'PromptQuorum 가이드' },
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
