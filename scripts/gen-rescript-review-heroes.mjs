#!/usr/bin/env node
// Hero generator for rescript-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/rescript.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'rescript-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Delete words, cut the footage', 'Whisper word-level transcripts', 'Free for noncommercial use'], price: 'Price', priceV: 'Free, noncommercial', lic: 'License', licV: 'PolyForm NC', plat: 'Runs on', platV: 'Mac, Windows, Linux, web', footer: 'PromptQuorum Guide' },
  de: { hl: ['Wörter löschen, Video schneiden', 'Whisper-Transkript, wortgenau', 'Gratis für nicht kommerzielle Nutzung'], price: 'Preis', priceV: 'Gratis, nicht kommerziell', lic: 'Lizenz', licV: 'PolyForm NC', plat: 'Läuft auf', platV: 'Mac, Windows, Linux, Web', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Supprimez des mots, coupez la vidéo', 'Transcription Whisper au mot près', 'Gratuit hors usage commercial'], price: 'Prix', priceV: 'Gratuit, non commercial', lic: 'Licence', licV: 'PolyForm NC', plat: 'Fonctionne sur', platV: 'Mac, Windows, Linux, web', footer: 'Guide PromptQuorum' },
  es: { hl: ['Borra palabras, corta el vídeo', 'Transcripción Whisper palabra a palabra', 'Gratis para uso no comercial'], price: 'Precio', priceV: 'Gratis, no comercial', lic: 'Licencia', licV: 'PolyForm NC', plat: 'Funciona en', platV: 'Mac, Windows, Linux, web', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['単語を消して動画をカット', 'Whisper文字起こし', '非商用は無料'], price: '価格', priceV: '無料（非商用）', lic: 'ライセンス', licV: 'PolyForm NC', plat: '動作環境', platV: 'Mac、Windows、Linux、Web', footer: 'PromptQuorumガイド' },
  zh: { hl: ['删除文字即可剪视频', 'Whisper 逐词转写', '非商业使用免费'], price: '价格', priceV: '免费（非商业）', lic: '许可证', licV: 'PolyForm NC', plat: '运行于', platV: 'Mac、Windows、Linux、Web', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Apague palavras, corte o vídeo', 'Transcrição Whisper palavra a palavra', 'Grátis para uso não comercial'], price: 'Preço', priceV: 'Grátis, não comercial', lic: 'Licença', licV: 'PolyForm NC', plat: 'Roda em', platV: 'Mac, Windows, Linux, web', footer: 'Guia PromptQuorum' },
  ar: { hl: ['احذف الكلمات لقصّ الفيديو', 'تفريغ Whisper كلمةً كلمة', 'مجاني للاستخدام غير التجاري'], price: 'السعر', priceV: 'مجاني، غير تجاري', lic: 'الترخيص', licV: 'PolyForm NC', plat: 'يعمل على', platV: 'Mac وWindows وLinux والويب', footer: 'دليل PromptQuorum' },
  ko: { hl: ['단어 삭제로 영상 편집', 'Whisper 단어별 전사', '비상업적 이용 무료'], price: '가격', priceV: '무료(비상업적)', lic: '라이선스', licV: 'PolyForm NC', plat: '실행 환경', platV: 'Mac, Windows, Linux, 웹', footer: 'PromptQuorum 가이드' },
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
