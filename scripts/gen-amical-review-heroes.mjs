#!/usr/bin/env node
// Hero generator for amical-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/amical.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3435  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Amical Review: Free Open-Source Dictation for Mac and Windows', highlights: ['Whisper runs on your computer', 'Free and MIT-licensed', 'Mac and Windows only'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows', tone: 'slate' }, { label: 'Price', value: 'Free local, Premium $7/month', tone: 'emerald' }, { label: 'License', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.13.0', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Amical Rezension: Kostenloses Open-Source-Diktat für Mac und Windows', highlights: ['Whisper läuft auf Ihrem Rechner', 'Kostenlos, MIT-Lizenz', 'Nur Mac und Windows'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preis', value: 'Lokal gratis, Premium 7 $/Monat', tone: 'emerald' }, { label: 'Lizenz', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.13.0', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test d’Amical : dictée open source gratuite pour Mac et Windows', highlights: ['Whisper tourne sur votre ordinateur', 'Gratuit, licence MIT', 'Mac et Windows seulement'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows', tone: 'slate' }, { label: 'Prix', value: 'Local gratuit, Premium 7 $/mois', tone: 'emerald' }, { label: 'Licence', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.13.0', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Amical: dictado gratuito de código abierto para Mac y Windows', highlights: ['Whisper en tu ordenador', 'Gratis, licencia MIT', 'Solo Mac y Windows'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Precio', value: 'Local gratis, Premium $7/mes', tone: 'emerald' }, { label: 'Licencia', value: 'MIT', tone: 'slate' }, { label: 'Versión', value: '1.13.0', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Amicalレビュー：MacとWindows向け無料オープンソース音声入力', highlights: ['Whisperを手元のPCで実行', '無料・MITライセンス', 'MacとWindowsのみ'],
    facts: [{ label: '対応', value: 'Mac・Windows', tone: 'slate' }, { label: '価格', value: 'ローカル無料／Premium月$7', tone: 'emerald' }, { label: 'ライセンス', value: 'MIT', tone: 'slate' }, { label: 'バージョン', value: '1.13.0', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Amical评测：适用于Mac和Windows的免费开源听写应用', highlights: ['Whisper在你的电脑上运行', '免费、MIT许可证', '仅限Mac和Windows'],
    facts: [{ label: '平台', value: 'Mac、Windows', tone: 'slate' }, { label: '价格', value: '本地免费，Premium每月$7', tone: 'emerald' }, { label: '许可证', value: 'MIT', tone: 'slate' }, { label: '版本', value: '1.13.0', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Amical: ditado gratuito de código aberto para Mac e Windows', highlights: ['Whisper roda no seu computador', 'Grátis, licença MIT', 'Só Mac e Windows'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preço', value: 'Local grátis, Premium US$ 7/mês', tone: 'emerald' }, { label: 'Licença', value: 'MIT', tone: 'slate' }, { label: 'Versão', value: '1.13.0', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Amical: إملاء صوتي مجاني ومفتوح المصدر لأجهزة Mac وWindows', highlights: ['Whisper يعمل على حاسوبك', 'مجاني بترخيص MIT', 'Mac وWindows فقط'],
    facts: [{ label: 'المنصات', value: 'Mac وWindows', tone: 'slate' }, { label: 'السعر', value: 'محلي مجاني، Premium بـ 7 دولارات شهريًا', tone: 'emerald' }, { label: 'الترخيص', value: 'MIT', tone: 'slate' }, { label: 'الإصدار', value: '1.13.0', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Amical 리뷰: Mac·Windows용 무료 오픈소스 받아쓰기 앱', highlights: ['Whisper를 내 컴퓨터에서 실행', '무료, MIT 라이선스', 'Mac과 Windows만 지원'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows', tone: 'slate' }, { label: '가격', value: '로컬 무료, Premium 월 $7', tone: 'emerald' }, { label: '라이선스', value: 'MIT', tone: 'slate' }, { label: '버전', value: '1.13.0', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `amical-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `amical-review-hero-${lang}.png`)
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
