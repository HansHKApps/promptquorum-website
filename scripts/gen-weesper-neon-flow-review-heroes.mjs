#!/usr/bin/env node
// Hero generator for weesper-neon-flow-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/weesper-neon-flow.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3461  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Weesper Neon Flow Review: Offline Dictation for Mac and Windows', highlights: ['Whisper runs on your computer', 'Paid, closed source', 'Mac and Windows only'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows', tone: 'slate' }, { label: 'Price', value: '5 EUR/month or 99 EUR once', tone: 'emerald' }, { label: 'License', value: 'Proprietary', tone: 'slate' }, { label: 'Version', value: '1.8.12', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Weesper Neon Flow Rezension: Offline-Diktat für Mac und Windows', highlights: ['Whisper läuft auf Ihrem Rechner', 'Kostenpflichtig, Closed Source', 'Nur Mac und Windows'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preis', value: '5 €/Monat oder 99 € einmalig', tone: 'emerald' }, { label: 'Lizenz', value: 'Proprietär', tone: 'slate' }, { label: 'Version', value: '1.8.12', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Weesper Neon Flow : dictée hors ligne pour Mac et Windows', highlights: ['Whisper tourne sur votre ordinateur', 'Payant, code fermé', 'Mac et Windows seulement'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows', tone: 'slate' }, { label: 'Prix', value: '5 €/mois ou 99 € une fois', tone: 'emerald' }, { label: 'Licence', value: 'Propriétaire', tone: 'slate' }, { label: 'Version', value: '1.8.12', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Weesper Neon Flow: dictado sin conexión para Mac y Windows', highlights: ['Whisper en tu ordenador', 'De pago, código cerrado', 'Solo Mac y Windows'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Precio', value: '5 €/mes o 99 € una vez', tone: 'emerald' }, { label: 'Licencia', value: 'Propietaria', tone: 'slate' }, { label: 'Versión', value: '1.8.12', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Weesper Neon Flowレビュー：MacとWindows向けオフライン音声入力', highlights: ['Whisperを手元のPCで実行', '有料・クローズドソース', 'MacとWindowsのみ'],
    facts: [{ label: '対応', value: 'Mac・Windows', tone: 'slate' }, { label: '価格', value: '月5ユーロ／99ユーロ買い切り', tone: 'emerald' }, { label: 'ライセンス', value: 'プロプライエタリ', tone: 'slate' }, { label: 'バージョン', value: '1.8.12', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Weesper Neon Flow评测：适用于Mac和Windows的离线听写应用', highlights: ['Whisper在你的电脑上运行', '付费、闭源', '仅限Mac和Windows'],
    facts: [{ label: '平台', value: 'Mac、Windows', tone: 'slate' }, { label: '价格', value: '每月5欧元或一次性99欧元', tone: 'emerald' }, { label: '许可证', value: '专有', tone: 'slate' }, { label: '版本', value: '1.8.12', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Weesper Neon Flow: ditado offline para Mac e Windows', highlights: ['Whisper roda no seu computador', 'Pago, código fechado', 'Só Mac e Windows'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preço', value: '5 €/mês ou 99 € uma vez', tone: 'emerald' }, { label: 'Licença', value: 'Proprietária', tone: 'slate' }, { label: 'Versão', value: '1.8.12', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Weesper Neon Flow: إملاء صوتي دون اتصال لأجهزة Mac وWindows', highlights: ['Whisper يعمل على حاسوبك', 'مدفوع ومغلق المصدر', 'Mac وWindows فقط'],
    facts: [{ label: 'المنصات', value: 'Mac وWindows', tone: 'slate' }, { label: 'السعر', value: '5 يورو شهريًا أو 99 يورو مرة واحدة', tone: 'emerald' }, { label: 'الترخيص', value: 'مملوك', tone: 'slate' }, { label: 'الإصدار', value: '1.8.12', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Weesper Neon Flow 리뷰: Mac·Windows용 오프라인 받아쓰기 앱', highlights: ['Whisper를 내 컴퓨터에서 실행', '유료, 비공개 소스', 'Mac과 Windows만 지원'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows', tone: 'slate' }, { label: '가격', value: '월 5유로 또는 99유로 일회성', tone: 'emerald' }, { label: '라이선스', value: '독점', tone: 'slate' }, { label: '버전', value: '1.8.12', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `weesper-neon-flow-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `weesper-neon-flow-review-hero-${lang}.png`)
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
