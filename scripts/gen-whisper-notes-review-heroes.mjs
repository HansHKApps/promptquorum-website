#!/usr/bin/env node
// Hero generator for whisper-notes-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/whisper-notes.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'Whisper Notes Review: Offline Speech-to-Text for iPhone, iPad and Mac',
    highlights: ['Transcribes offline on your device', 'Speaker labels, no cloud', '$7.99 once'],
    facts: [
      { label: 'Platforms', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Price', value: '$7.99 once', tone: 'emerald' },
      { label: 'License', value: 'Proprietary', tone: 'slate' },
      { label: 'Version', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Whisper Notes Rezension: Offline-Spracherkennung für iPhone, iPad und Mac',
    highlights: ['Transkribiert offline auf dem Gerät', 'Sprecherzuordnung, keine Cloud', '8,99 € einmalig'],
    facts: [
      { label: 'Plattformen', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Preis', value: '8,99 € einmalig', tone: 'emerald' },
      { label: 'Lizenz', value: 'Proprietär', tone: 'slate' },
      { label: 'Version', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test de Whisper Notes : reconnaissance vocale hors ligne pour iPhone, iPad et Mac',
    highlights: ['Transcrit hors ligne sur l’appareil', 'Locuteurs, sans cloud', '8,99 € une fois'],
    facts: [
      { label: 'Plateformes', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Prix', value: '8,99 € une fois', tone: 'emerald' },
      { label: 'Licence', value: 'Propriétaire', tone: 'slate' },
      { label: 'Version', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de Whisper Notes: voz a texto sin conexión para iPhone, iPad y Mac',
    highlights: ['Transcribe sin conexión en el dispositivo', 'Hablantes, sin nube', '8,99 € una vez'],
    facts: [
      { label: 'Plataformas', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Precio', value: '8,99 € una vez', tone: 'emerald' },
      { label: 'Licencia', value: 'Propietaria', tone: 'slate' },
      { label: 'Versión', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Whisper Notesレビュー：iPhone・iPad・Mac向けのオフライン音声認識アプリ',
    highlights: ['端末内でオフライン文字起こし', '話者ラベル、クラウド不要', '800円の買い切り'],
    facts: [
      { label: '対応', value: 'iPhone・iPad・Mac', tone: 'slate' },
      { label: '価格', value: '800円の買い切り', tone: 'emerald' },
      { label: 'ライセンス', value: 'プロプライエタリ', tone: 'slate' },
      { label: 'バージョン', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Whisper Notes评测：适用于iPhone、iPad和Mac的离线语音转文字应用',
    highlights: ['在设备上离线转录', '说话人标注，无需云端', '一次性7.99美元'],
    facts: [
      { label: '平台', value: 'iPhone、iPad、Mac', tone: 'slate' },
      { label: '价格', value: '一次性7.99美元', tone: 'emerald' },
      { label: '许可证', value: '专有', tone: 'slate' },
      { label: '版本', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do Whisper Notes: voz para texto offline para iPhone, iPad e Mac',
    highlights: ['Transcreve offline no dispositivo', 'Falantes, sem nuvem', 'R$ 19,90 uma vez'],
    facts: [
      { label: 'Plataformas', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Preço', value: 'R$ 19,90 uma vez', tone: 'emerald' },
      { label: 'Licença', value: 'Proprietária', tone: 'slate' },
      { label: 'Versão', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Whisper Notes: تحويل الكلام إلى نص دون اتصال لأجهزة iPhone وiPad وMac',
    highlights: ['ينسخ دون اتصال على جهازك', 'تمييز المتحدثين دون سحابة', '7.99 دولار لمرة واحدة'],
    facts: [
      { label: 'المنصات', value: 'iPhone وiPad وMac', tone: 'slate' },
      { label: 'السعر', value: '7.99 دولار لمرة واحدة', tone: 'emerald' },
      { label: 'الترخيص', value: 'مملوك', tone: 'slate' },
      { label: 'الإصدار', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Whisper Notes 리뷰: iPhone, iPad, Mac용 오프라인 음성 인식 앱',
    highlights: ['기기에서 오프라인 전사', '화자 구분, 클라우드 없음', '6,000원 일회성'],
    facts: [
      { label: '플랫폼', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: '가격', value: '6,000원 일회성', tone: 'emerald' },
      { label: '라이선스', value: '독점', tone: 'slate' },
      { label: '버전', value: '1.8.8', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `whisper-notes-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `whisper-notes-review-hero-${lang}.png`)
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
