#!/usr/bin/env node
// Hero generator for transcriptionsuite-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/transcriptionsuite.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'TranscriptionSuite Review: Free Local Speech-to-Text with Speaker Labels',
    highlights: ['Transcribes on your own computer', 'Speaker labels and live mode', 'Free, GPL-3.0'],
    facts: [
      { label: 'Platforms', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Price', value: 'Free', tone: 'emerald' },
      { label: 'License', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'TranscriptionSuite Rezension: Kostenlose lokale Spracherkennung mit Sprecherzuordnung',
    highlights: ['Transkribiert auf Ihrem Rechner', 'Sprecherzuordnung und Live-Modus', 'Kostenlos, GPL-3.0'],
    facts: [
      { label: 'Plattformen', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preis', value: 'Kostenlos', tone: 'emerald' },
      { label: 'Lizenz', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test de TranscriptionSuite : reconnaissance vocale locale gratuite avec étiquettes de locuteurs',
    highlights: ['Transcrit sur votre ordinateur', 'Locuteurs et mode direct', 'Gratuit, GPL-3.0'],
    facts: [
      { label: 'Plateformes', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Prix', value: 'Gratuit', tone: 'emerald' },
      { label: 'Licence', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de TranscriptionSuite: voz a texto local y gratuito con etiquetas de hablante',
    highlights: ['Transcribe en tu propio equipo', 'Hablantes y modo en vivo', 'Gratis, GPL-3.0'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Precio', value: 'Gratis', tone: 'emerald' },
      { label: 'Licencia', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Versión', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'TranscriptionSuiteレビュー：話者ラベル付きの無料ローカル音声認識アプリ',
    highlights: ['自分のPCで文字起こし', '話者ラベルとライブモード', '無料・GPL-3.0'],
    facts: [
      { label: '対応', value: 'Windows・macOS・Linux', tone: 'slate' },
      { label: '価格', value: '無料', tone: 'emerald' },
      { label: 'ライセンス', value: 'GPL-3.0', tone: 'slate' },
      { label: 'バージョン', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'TranscriptionSuite评测：支持说话人标注的免费本地语音转文字应用',
    highlights: ['在你自己的电脑上转录', '说话人标注与实时模式', '免费，GPL-3.0'],
    facts: [
      { label: '平台', value: 'Windows、macOS、Linux', tone: 'slate' },
      { label: '价格', value: '免费', tone: 'emerald' },
      { label: '许可证', value: 'GPL-3.0', tone: 'slate' },
      { label: '版本', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do TranscriptionSuite: voz para texto local e gratuito com rótulos de falante',
    highlights: ['Transcreve no seu computador', 'Falantes e modo ao vivo', 'Grátis, GPL-3.0'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preço', value: 'Grátis', tone: 'emerald' },
      { label: 'Licença', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Versão', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة TranscriptionSuite: تحويل الكلام إلى نص محليًا ومجانًا مع تمييز المتحدثين',
    highlights: ['ينسخ على حاسوبك أنت', 'تمييز المتحدثين ووضع مباشر', 'مجاني بترخيص GPL-3.0'],
    facts: [
      { label: 'المنصات', value: 'Windows وmacOS وLinux', tone: 'slate' },
      { label: 'السعر', value: 'مجاني', tone: 'emerald' },
      { label: 'الترخيص', value: 'GPL-3.0', tone: 'slate' },
      { label: 'الإصدار', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'TranscriptionSuite 리뷰: 화자 구분을 지원하는 무료 로컬 음성 인식 앱',
    highlights: ['내 PC에서 전사', '화자 구분과 라이브 모드', '무료, GPL-3.0'],
    facts: [
      { label: '플랫폼', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: '가격', value: '무료', tone: 'emerald' },
      { label: '라이선스', value: 'GPL-3.0', tone: 'slate' },
      { label: '버전', value: '1.3.10', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `transcriptionsuite-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `transcriptionsuite-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${lang} (${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      process.exitCode = 1
    }
  }
  console.log(`Generated ${generated}/9`)
}
main()
