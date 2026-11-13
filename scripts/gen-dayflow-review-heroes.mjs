#!/usr/bin/env node
// Hero generator for dayflow-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/dayflow.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3459  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3459'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Dayflow Review: Open-Source Mac Work Journal with Local AI', highlights: ['Analysis can run on your Mac', 'Free and MIT-licensed', 'Mac only, macOS 14+'],
    facts: [{ label: 'Platforms', value: 'Mac', tone: 'slate' }, { label: 'Price', value: 'Free, Pro $20/month', tone: 'emerald' }, { label: 'License', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '2.9.0', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Dayflow Rezension: Open-Source-Arbeitsjournal für den Mac mit lokaler KI', highlights: ['Analyse läuft auf Ihrem Mac', 'Kostenlos, MIT-Lizenz', 'Nur Mac, macOS 14+'],
    facts: [{ label: 'Plattformen', value: 'Mac', tone: 'slate' }, { label: 'Preis', value: 'Gratis, Pro 20 $/Monat', tone: 'emerald' }, { label: 'Lizenz', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '2.9.0', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Dayflow : journal de travail open source pour Mac avec IA locale', highlights: ['Analyse possible sur votre Mac', 'Gratuit, licence MIT', 'Mac seulement, macOS 14+'],
    facts: [{ label: 'Plateformes', value: 'Mac', tone: 'slate' }, { label: 'Prix', value: 'Gratuit, Pro 20 $/mois', tone: 'emerald' }, { label: 'Licence', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '2.9.0', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Dayflow: diario de trabajo de código abierto para Mac con IA local', highlights: ['Análisis posible en tu Mac', 'Gratis, licencia MIT', 'Solo Mac, macOS 14+'],
    facts: [{ label: 'Plataformas', value: 'Mac', tone: 'slate' }, { label: 'Precio', value: 'Gratis, Pro $20/mes', tone: 'emerald' }, { label: 'Licencia', value: 'MIT', tone: 'slate' }, { label: 'Versión', value: '2.9.0', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Dayflowレビュー：ローカルAI対応のMac向けオープンソース作業日誌', highlights: ['分析は手元のMacで実行可能', '無料・MITライセンス', 'Mac専用、macOS 14以降'],
    facts: [{ label: '対応', value: 'Mac', tone: 'slate' }, { label: '価格', value: '無料／Pro月$20', tone: 'emerald' }, { label: 'ライセンス', value: 'MIT', tone: 'slate' }, { label: 'バージョン', value: '2.9.0', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Dayflow评测：支持本地AI的Mac开源工作日志', highlights: ['分析可在你的Mac上运行', '免费、MIT许可证', '仅限Mac，macOS 14+'],
    facts: [{ label: '平台', value: 'Mac', tone: 'slate' }, { label: '价格', value: '免费，Pro每月$20', tone: 'emerald' }, { label: '许可证', value: 'MIT', tone: 'slate' }, { label: '版本', value: '2.9.0', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Dayflow: diário de trabalho de código aberto para Mac com IA local', highlights: ['Análise pode rodar no seu Mac', 'Grátis, licença MIT', 'Só Mac, macOS 14+'],
    facts: [{ label: 'Plataformas', value: 'Mac', tone: 'slate' }, { label: 'Preço', value: 'Grátis, Pro US$ 20/mês', tone: 'emerald' }, { label: 'Licença', value: 'MIT', tone: 'slate' }, { label: 'Versão', value: '2.9.0', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Dayflow: سجل عمل مفتوح المصدر لجهاز Mac مع ذكاء اصطناعي محلي', highlights: ['التحليل يعمل على جهاز Mac', 'مجاني بترخيص MIT', 'Mac فقط، macOS 14+'],
    facts: [{ label: 'المنصات', value: 'Mac', tone: 'slate' }, { label: 'السعر', value: 'مجاني، Pro بـ 20 دولارًا شهريًا', tone: 'emerald' }, { label: 'الترخيص', value: 'MIT', tone: 'slate' }, { label: 'الإصدار', value: '2.9.0', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Dayflow 리뷰: 로컬 AI를 지원하는 Mac용 오픈소스 업무 일지', highlights: ['분석을 내 Mac에서 실행 가능', '무료, MIT 라이선스', 'Mac 전용, macOS 14+'],
    facts: [{ label: '플랫폼', value: 'Mac', tone: 'slate' }, { label: '가격', value: '무료, Pro 월 $20', tone: 'emerald' }, { label: '라이선스', value: 'MIT', tone: 'slate' }, { label: '버전', value: '2.9.0', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `dayflow-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `dayflow-review-hero-${lang}.png`)
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
