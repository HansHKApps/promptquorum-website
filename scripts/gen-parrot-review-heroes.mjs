#!/usr/bin/env node
// Hero generator for parrot-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/parrot.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'Parrot Review: Free Offline Text-to-Speech That Reads Selected Text Aloud',
    highlights: ['Reads selected text aloud', 'Runs offline on your CPU', 'Free, MIT'],
    facts: [
      { label: 'Platforms', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Price', value: 'Free', tone: 'emerald' },
      { label: 'License', value: 'MIT', tone: 'slate' },
      { label: 'Version', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Parrot Rezension: Kostenlose Offline-Sprachausgabe für markierten Text',
    highlights: ['Liest markierten Text vor', 'Läuft offline auf der CPU', 'Kostenlos, MIT'],
    facts: [
      { label: 'Plattformen', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preis', value: 'Kostenlos', tone: 'emerald' },
      { label: 'Lizenz', value: 'MIT', tone: 'slate' },
      { label: 'Version', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test de Parrot : synthèse vocale gratuite et hors ligne pour le texte sélectionné',
    highlights: ['Lit le texte sélectionné', 'Fonctionne hors ligne sur le CPU', 'Gratuit, MIT'],
    facts: [
      { label: 'Plateformes', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Prix', value: 'Gratuit', tone: 'emerald' },
      { label: 'Licence', value: 'MIT', tone: 'slate' },
      { label: 'Version', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de Parrot: texto a voz gratuito y sin conexión para el texto seleccionado',
    highlights: ['Lee en voz alta el texto seleccionado', 'Funciona sin conexión con la CPU', 'Gratis, MIT'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Precio', value: 'Gratis', tone: 'emerald' },
      { label: 'Licencia', value: 'MIT', tone: 'slate' },
      { label: 'Versión', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Parrotレビュー：選択したテキストを読み上げる無料のオフライン音声合成アプリ',
    highlights: ['選択テキストを読み上げ', 'CPUでオフライン動作', '無料・MIT'],
    facts: [
      { label: '対応', value: 'Windows・macOS・Linux', tone: 'slate' },
      { label: '価格', value: '無料', tone: 'emerald' },
      { label: 'ライセンス', value: 'MIT', tone: 'slate' },
      { label: 'バージョン', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Parrot评测：免费离线朗读选中文本的文字转语音应用',
    highlights: ['朗读选中的文本', '在CPU上离线运行', '免费，MIT'],
    facts: [
      { label: '平台', value: 'Windows、macOS、Linux', tone: 'slate' },
      { label: '价格', value: '免费', tone: 'emerald' },
      { label: '许可证', value: 'MIT', tone: 'slate' },
      { label: '版本', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do Parrot: texto para voz gratuito e offline para o texto selecionado',
    highlights: ['Lê o texto selecionado', 'Roda offline na CPU', 'Grátis, MIT'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preço', value: 'Grátis', tone: 'emerald' },
      { label: 'Licença', value: 'MIT', tone: 'slate' },
      { label: 'Versão', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Parrot: تحويل نص إلى كلام مجاني ودون اتصال للنص المحدد',
    highlights: ['يقرأ النص المحدد بصوت عالٍ', 'يعمل دون اتصال على CPU', 'مجاني بترخيص MIT'],
    facts: [
      { label: 'المنصات', value: 'Windows وmacOS وLinux', tone: 'slate' },
      { label: 'السعر', value: 'مجاني', tone: 'emerald' },
      { label: 'الترخيص', value: 'MIT', tone: 'slate' },
      { label: 'الإصدار', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Parrot 리뷰: 선택한 텍스트를 읽어 주는 무료 오프라인 음성 합성 앱',
    highlights: ['선택한 텍스트를 읽어 줌', 'CPU에서 오프라인 실행', '무료, MIT'],
    facts: [
      { label: '플랫폼', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: '가격', value: '무료', tone: 'emerald' },
      { label: '라이선스', value: 'MIT', tone: 'slate' },
      { label: '버전', value: '26.2.4', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `parrot-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `parrot-review-hero-${lang}.png`)
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
