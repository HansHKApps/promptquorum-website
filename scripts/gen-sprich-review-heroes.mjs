#!/usr/bin/env node
// Hero generator for sprich-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/sprich.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Sprich Review: German-Made Mac Dictation App for Apple Silicon', highlights: ['Transcribes on your Mac, per the maker', 'German first, 57 languages claimed', 'Free plan, Pro or Lifetime'],
    facts: [{ label: 'Platforms', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Price', value: 'Free, Pro 8 €/month', tone: 'emerald' }, { label: 'License', value: 'Not stated', tone: 'slate' }, { label: 'Version', value: '2.2.4', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Sprich Rezension: Diktier-App aus Deutschland für Apple-Silicon-Macs', highlights: ['Transkription auf dem Mac, laut Hersteller', 'Zuerst Deutsch, 57 Sprachen genannt', 'Gratis, Pro oder Lifetime'],
    facts: [{ label: 'Plattformen', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Preis', value: 'Gratis, Pro 8 €/Monat', tone: 'emerald' }, { label: 'Lizenz', value: 'Nicht angegeben', tone: 'slate' }, { label: 'Version', value: '2.2.4', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Sprich : application de dictée allemande pour Mac Apple Silicon', highlights: ['Transcrit sur votre Mac, selon l’éditeur', 'Allemand d’abord, 57 langues annoncées', 'Gratuit, Pro ou Lifetime'],
    facts: [{ label: 'Plateformes', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Prix', value: 'Gratuit, Pro 8 €/mois', tone: 'emerald' }, { label: 'Licence', value: 'Non indiquée', tone: 'slate' }, { label: 'Version', value: '2.2.4', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Sprich: app de dictado alemana para Mac con Apple Silicon', highlights: ['Transcribe en tu Mac, según el desarrollador', 'Primero alemán, 57 idiomas indicados', 'Gratis, Pro o Lifetime'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Precio', value: 'Gratis, Pro 8 €/mes', tone: 'emerald' }, { label: 'Licencia', value: 'No indicada', tone: 'slate' }, { label: 'Versión', value: '2.2.4', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Sprichレビュー：Apple Silicon搭載Mac向けドイツ製音声入力アプリ', highlights: ['Mac上で文字起こし（開発元談）', 'ドイツ語中心、57言語と記載', '無料・Pro・Lifetime'],
    facts: [{ label: '対応', value: 'Mac（Apple Silicon）', tone: 'slate' }, { label: '価格', value: '無料、Pro月8ユーロ', tone: 'emerald' }, { label: 'ライセンス', value: '記載なし', tone: 'slate' }, { label: 'バージョン', value: '2.2.4', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Sprich评测：适用于 Apple Silicon Mac 的德国听写应用', highlights: ['据开发者称在Mac上转写', '德语优先，称支持57种语言', '免费、Pro或Lifetime'],
    facts: [{ label: '平台', value: 'Mac（Apple Silicon）', tone: 'slate' }, { label: '价格', value: '免费，Pro每月8欧元', tone: 'emerald' }, { label: '许可证', value: '未说明', tone: 'slate' }, { label: '版本', value: '2.2.4', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Sprich: app de ditado alemão para Mac com Apple Silicon', highlights: ['Transcreve no seu Mac, diz o desenvolvedor', 'Primeiro alemão, 57 idiomas citados', 'Grátis, Pro ou Lifetime'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Preço', value: 'Grátis, Pro 8 €/mês', tone: 'emerald' }, { label: 'Licença', value: 'Não informada', tone: 'slate' }, { label: 'Versão', value: '2.2.4', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Sprich: تطبيق إملاء ألماني لأجهزة Mac بمعالج Apple Silicon', highlights: ['يحوّل الكلام على Mac بحسب المطوّر', 'الألمانية أولًا و57 لغة مذكورة', 'مجاني أو Pro أو Lifetime'],
    facts: [{ label: 'المنصات', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'السعر', value: 'مجاني، Pro بـ 8 يورو شهريًا', tone: 'emerald' }, { label: 'الترخيص', value: 'غير مذكور', tone: 'slate' }, { label: 'الإصدار', value: '2.2.4', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Sprich 리뷰: Apple Silicon Mac용 독일산 받아쓰기 앱', highlights: ['개발사 설명: Mac에서 변환', '독일어 우선, 57개 언어 표기', '무료·Pro·Lifetime'],
    facts: [{ label: '플랫폼', value: 'Mac(Apple Silicon)', tone: 'slate' }, { label: '가격', value: '무료, Pro 월 8유로', tone: 'emerald' }, { label: '라이선스', value: '표기 없음', tone: 'slate' }, { label: '버전', value: '2.2.4', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `sprich-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `sprich-review-hero-${lang}.png`)
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
