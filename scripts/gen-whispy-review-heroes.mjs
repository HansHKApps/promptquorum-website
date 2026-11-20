#!/usr/bin/env node
// Hero generator for whispy-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/whispy.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3453  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const T = ['slate', 'emerald', 'slate', 'amber']
const mk = (facts) => facts.map(([label, value], i) => ({ label, value, tone: T[i] }))

const SPECS = {
  en: { title: 'Whispy Review: Private Audio Transcription for Mac and Windows', highlights: ['Transcribes on your computer', 'Free core, paid Pro', 'Apple Silicon Mac and Windows'],
    facts: mk([['Platforms', 'Mac, Windows'], ['Price', 'Free core, Pro from $8/month'], ['License', 'Proprietary'], ['Version', '0.1.11']]), footer: 'PromptQuorum Guide' },
  de: { title: 'Whispy Rezension: Private Audio-Transkription für Mac und Windows', highlights: ['Transkribiert auf Ihrem Rechner', 'Gratis-Kern, Pro kostenpflichtig', 'Apple-Silicon-Mac und Windows'],
    facts: mk([['Plattformen', 'Mac, Windows'], ['Preis', 'Gratis-Kern, Pro ab 8 $/Monat'], ['Lizenz', 'Proprietär'], ['Version', '0.1.11']]), footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Whispy : transcription audio privée pour Mac et Windows', highlights: ['Transcrit sur votre ordinateur', 'Base gratuite, Pro payant', 'Mac Apple Silicon et Windows'],
    facts: mk([['Plateformes', 'Mac, Windows'], ['Prix', 'Base gratuite, Pro dès 8 $/mois'], ['Licence', 'Propriétaire'], ['Version', '0.1.11']]), footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Whispy: transcripción de audio privada para Mac y Windows', highlights: ['Transcribe en tu ordenador', 'Base gratis, Pro de pago', 'Mac Apple Silicon y Windows'],
    facts: mk([['Plataformas', 'Mac, Windows'], ['Precio', 'Base gratis, Pro desde $8/mes'], ['Licencia', 'Propietaria'], ['Versión', '0.1.11']]), footer: 'Guía de PromptQuorum' },
  ja: { title: 'Whispy レビュー：Mac・Windows向けプライベート文字起こしアプリ', highlights: ['お使いのPC上で文字起こし', '基本無料、Proは有料', 'Apple Silicon MacとWindows'],
    facts: mk([['対応', 'Mac・Windows'], ['価格', '基本無料、Proは月8ドルから'], ['ライセンス', 'プロプライエタリ'], ['バージョン', '0.1.11']]), footer: 'PromptQuorumガイド' },
  zh: { title: 'Whispy评测：适用于Mac和Windows的私密音频转录应用', highlights: ['在你的电脑上转录', '基础功能免费，Pro付费', 'Apple Silicon Mac和Windows'],
    facts: mk([['平台', 'Mac、Windows'], ['价格', '基础免费，Pro每月8美元起'], ['许可证', '专有'], ['版本', '0.1.11']]), footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Whispy: transcrição de áudio privada para Mac e Windows', highlights: ['Transcreve no seu computador', 'Base grátis, Pro pago', 'Mac Apple Silicon e Windows'],
    facts: mk([['Plataformas', 'Mac, Windows'], ['Preço', 'Base grátis, Pro a partir de US$ 8/mês'], ['Licença', 'Proprietária'], ['Versão', '0.1.11']]), footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Whispy: تفريغ صوتي خاص لأجهزة Mac وWindows', highlights: ['يفرّغ الصوت على حاسوبك', 'النسخة الأساسية مجانية وPro مدفوعة', 'Mac بمعالج Apple Silicon وWindows'],
    facts: mk([['المنصات', 'Mac وWindows'], ['السعر', 'أساسي مجاني وPro من 8 دولارات شهريًا'], ['الترخيص', 'مملوك'], ['الإصدار', '0.1.11']]), footer: 'دليل PromptQuorum' },
  ko: { title: 'Whispy 리뷰: Mac·Windows용 비공개 오디오 전사 앱', highlights: ['내 컴퓨터에서 전사', '기본 무료, Pro는 유료', 'Apple Silicon Mac과 Windows'],
    facts: mk([['플랫폼', 'Mac, Windows'], ['가격', '기본 무료, Pro 월 8달러부터'], ['라이선스', '독점'], ['버전', '0.1.11']]), footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `whispy-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `whispy-review-hero-${lang}.png`)
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
