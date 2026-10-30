#!/usr/bin/env node
// Hero generator for aiko-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/aiko.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3433  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'Aiko Review: On-Device Whisper Transcription for Mac and iPhone',
    highlights: ['Whisper runs on your device', 'No live text, no speaker labels', 'No update in 3+ months'],
    facts: [
      { label: 'Platforms', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: 'Price', value: '$24 once', tone: 'emerald' },
      { label: 'License', value: 'Proprietary', tone: 'slate' },
      { label: 'Version', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Aiko Rezension: Whisper-Transkription auf dem Gerät für Mac und iPhone',
    highlights: ['Whisper läuft auf dem Gerät', 'Kein Live-Text, keine Sprecher', 'Seit 3+ Monaten kein Update'],
    facts: [
      { label: 'Plattformen', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: 'Preis', value: '29 € einmalig', tone: 'emerald' },
      { label: 'Lizenz', value: 'Proprietär', tone: 'slate' },
      { label: 'Version', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: "Test d'Aiko : transcription Whisper sur l'appareil pour Mac et iPhone",
    highlights: ["Whisper tourne sur l'appareil", 'Ni direct ni locuteurs', 'Sans mise à jour depuis 3+ mois'],
    facts: [
      { label: 'Plateformes', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: 'Prix', value: '29 € une fois', tone: 'emerald' },
      { label: 'Licence', value: 'Propriétaire', tone: 'slate' },
      { label: 'Version', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de Aiko: transcripción Whisper en el dispositivo para Mac y iPhone',
    highlights: ['Whisper en tu dispositivo', 'Sin directo ni hablantes', 'Sin actualizar en 3+ meses'],
    facts: [
      { label: 'Plataformas', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: 'Precio', value: '29 € una vez', tone: 'emerald' },
      { label: 'Licencia', value: 'Propietaria', tone: 'slate' },
      { label: 'Versión', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Aikoレビュー：Mac・iPhone向けの端末内Whisper文字起こしアプリ',
    highlights: ['Whisperを端末内で実行', 'ライブ・話者ラベルなし', '3か月以上更新なし'],
    facts: [
      { label: '対応', value: 'Mac・iPhone・iPad', tone: 'slate' },
      { label: '価格', value: '4,000円の買い切り', tone: 'emerald' },
      { label: 'ライセンス', value: 'プロプライエタリ', tone: 'slate' },
      { label: 'バージョン', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Aiko评测：适用于Mac和iPhone的设备端Whisper转录应用',
    highlights: ['Whisper在设备上运行', '无实时转录，无说话人', '超三个月未更新'],
    facts: [
      { label: '平台', value: 'Mac、iPhone、iPad', tone: 'slate' },
      { label: '价格', value: '一次性24美元', tone: 'emerald' },
      { label: '许可证', value: '专有', tone: 'slate' },
      { label: '版本', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do Aiko: transcrição Whisper no aparelho para Mac e iPhone',
    highlights: ['Whisper roda no aparelho', 'Sem ao vivo nem falantes', 'Sem atualização há 3+ meses'],
    facts: [
      { label: 'Plataformas', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: 'Preço', value: 'R$ 149,90 uma vez', tone: 'emerald' },
      { label: 'Licença', value: 'Proprietária', tone: 'slate' },
      { label: 'Versão', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Aiko: تحويل الكلام إلى نص بنموذج Whisper على جهاز Mac وiPhone',
    highlights: ['Whisper يعمل على جهازك', 'لا مباشر ولا متحدثين', 'دون تحديث منذ 3+ أشهر'],
    facts: [
      { label: 'المنصات', value: 'Mac وiPhone وiPad', tone: 'slate' },
      { label: 'السعر', value: '24 دولارًا لمرة واحدة', tone: 'emerald' },
      { label: 'الترخيص', value: 'مملوك', tone: 'slate' },
      { label: 'الإصدار', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Aiko 리뷰: Mac·iPhone용 기기 내 Whisper 음성 전사 앱',
    highlights: ['기기에서 Whisper 실행', '실시간·화자 구분 없음', '3개월 넘게 업데이트 없음'],
    facts: [
      { label: '플랫폼', value: 'Mac, iPhone, iPad', tone: 'slate' },
      { label: '가격', value: '39,000원 일회성', tone: 'emerald' },
      { label: '라이선스', value: '독점', tone: 'slate' },
      { label: '버전', value: '1.11.0', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `aiko-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `aiko-review-hero-${lang}.png`)
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
