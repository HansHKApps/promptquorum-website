#!/usr/bin/env node
// Hero generator for sablate-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/sablate.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3438  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Sablate Review: Subtitles and Burn-In for Windows and Mac', highlights: ['Whisper on your PC, per its maker', 'Free tier, Pro $29 once', 'Windows and Mac only'],
    facts: [{ label: 'Platforms', value: 'Windows, Mac', tone: 'slate' }, { label: 'Price', value: 'Free tier, Pro $29 once', tone: 'emerald' }, { label: 'License', value: 'Proprietary', tone: 'slate' }, { label: 'Version', value: '1.0.2', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Sablate Rezension: Untertitel und Einbrennen für Windows und Mac', highlights: ['Whisper auf Ihrem Rechner, laut Hersteller', 'Gratis-Tarif, Pro 29 $ einmalig', 'Nur Windows und Mac'],
    facts: [{ label: 'Plattformen', value: 'Windows, Mac', tone: 'slate' }, { label: 'Preis', value: 'Gratis-Tarif, Pro 29 $ einmalig', tone: 'emerald' }, { label: 'Lizenz', value: 'Proprietär', tone: 'slate' }, { label: 'Version', value: '1.0.2', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Sablate : sous-titres et incrustation pour Windows et Mac', highlights: ['Whisper sur votre ordinateur, selon l’éditeur', 'Offre gratuite, Pro 29 $ une fois', 'Windows et Mac seulement'],
    facts: [{ label: 'Plateformes', value: 'Windows, Mac', tone: 'slate' }, { label: 'Prix', value: 'Gratuit, Pro 29 $ une fois', tone: 'emerald' }, { label: 'Licence', value: 'Propriétaire', tone: 'slate' }, { label: 'Version', value: '1.0.2', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Sablate: subtítulos e incrustación para Windows y Mac', highlights: ['Whisper en tu ordenador, según el fabricante', 'Plan gratis, Pro 29 $ una vez', 'Solo Windows y Mac'],
    facts: [{ label: 'Plataformas', value: 'Windows, Mac', tone: 'slate' }, { label: 'Precio', value: 'Gratis, Pro 29 $ una vez', tone: 'emerald' }, { label: 'Licencia', value: 'Propietaria', tone: 'slate' }, { label: 'Versión', value: '1.0.2', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Sablateレビュー：WindowsとMac向け字幕と焼き込み', highlights: ['Whisperを手元のPCで実行（開発元による）', '無料プランあり・Proは29ドル買い切り', 'WindowsとMacのみ'],
    facts: [{ label: '対応', value: 'Windows・Mac', tone: 'slate' }, { label: '価格', value: '無料プラン／Pro 29ドル買い切り', tone: 'emerald' }, { label: 'ライセンス', value: 'プロプライエタリ', tone: 'slate' }, { label: 'バージョン', value: '1.0.2', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Sablate评测：适用于Windows和Mac的字幕与烧录', highlights: ['Whisper在你的电脑上运行（据开发者称）', '有免费方案，Pro一次性$29', '仅限Windows和Mac'],
    facts: [{ label: '平台', value: 'Windows、Mac', tone: 'slate' }, { label: '价格', value: '免费方案；Pro 一次性 $29', tone: 'emerald' }, { label: '许可证', value: '专有', tone: 'slate' }, { label: '版本', value: '1.0.2', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Sablate: legendas e gravação no vídeo para Windows e Mac', highlights: ['Whisper no seu computador, segundo o fabricante', 'Plano grátis, Pro US$ 29 uma vez', 'Só Windows e Mac'],
    facts: [{ label: 'Plataformas', value: 'Windows, Mac', tone: 'slate' }, { label: 'Preço', value: 'Grátis, Pro US$ 29 uma vez', tone: 'emerald' }, { label: 'Licença', value: 'Proprietária', tone: 'slate' }, { label: 'Versão', value: '1.0.2', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Sablate: ترجمة نصية ودمجها في الفيديو لأجهزة Windows و Mac', highlights: ['Whisper على حاسوبك بحسب مطوّره', 'خطة مجانية و Pro بـ 29 دولارًا مرة واحدة', 'Windows و Mac فقط'],
    facts: [{ label: 'المنصات', value: 'Windows و Mac', tone: 'slate' }, { label: 'السعر', value: 'مجاني، و Pro بـ 29 دولارًا مرة واحدة', tone: 'emerald' }, { label: 'الترخيص', value: 'مملوك', tone: 'slate' }, { label: 'الإصدار', value: '1.0.2', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Sablate 리뷰: Windows·Mac용 자막과 영상 삽입', highlights: ['Whisper를 내 컴퓨터에서 실행(개발사 설명)', '무료 플랜, Pro는 $29 일회성', 'Windows와 Mac만 지원'],
    facts: [{ label: '플랫폼', value: 'Windows, Mac', tone: 'slate' }, { label: '가격', value: '무료 플랜, Pro $29 일회성', tone: 'emerald' }, { label: '라이선스', value: '독점', tone: 'slate' }, { label: '버전', value: '1.0.2', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `sablate-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `sablate-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`  ${webpPath}`)
      generated++
    } catch (e) {
      console.error(`FAILED ${lang}:`, e.message)
    }
  }
  console.log(`done: ${generated}`)
}
main()
