#!/usr/bin/env node
// Hero generator for univocal-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/univocal.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3462  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3462'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Univocal Review: Read-Aloud and Dictation on Your Mac', highlights: ['Reads aloud and dictates', 'Runs on your Mac, per its maker', 'Apple silicon only'],
    facts: [{ label: 'Platforms', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'Price', value: '$39 once', tone: 'emerald' }, { label: 'License', value: 'Proprietary', tone: 'slate' }, { label: 'Version', value: '0.3.33', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Univocal Rezension: Vorlesen und Diktieren auf dem Mac', highlights: ['Liest vor und diktiert', 'Läuft laut Hersteller auf Ihrem Mac', 'Nur Apple Silicon'],
    facts: [{ label: 'Plattformen', value: 'Mac (Apple Silicon)', tone: 'slate' }, { label: 'Preis', value: '39 $ einmalig', tone: 'emerald' }, { label: 'Lizenz', value: 'Proprietär', tone: 'slate' }, { label: 'Version', value: '0.3.33', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test d’Univocal : lecture à voix haute et dictée sur Mac', highlights: ['Lit à voix haute et dicte', 'Tourne sur votre Mac, selon l’éditeur', 'Apple silicon uniquement'],
    facts: [{ label: 'Plateformes', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'Prix', value: '39 $ en une fois', tone: 'emerald' }, { label: 'Licence', value: 'Propriétaire', tone: 'slate' }, { label: 'Version', value: '0.3.33', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Univocal: lectura en voz alta y dictado en Mac', highlights: ['Lee en voz alta y dicta', 'Funciona en tu Mac, según el autor', 'Solo Apple silicon'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'Precio', value: '$39 pago único', tone: 'emerald' }, { label: 'Licencia', value: 'Propietaria', tone: 'slate' }, { label: 'Versión', value: '0.3.33', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Univocalレビュー：Macで読み上げと音声入力', highlights: ['読み上げと音声入力', '開発元によればMac上で処理', 'Apple siliconのみ'],
    facts: [{ label: '対応', value: 'Mac（Apple silicon）', tone: 'slate' }, { label: '価格', value: '買い切り$39', tone: 'emerald' }, { label: 'ライセンス', value: '独自', tone: 'slate' }, { label: 'バージョン', value: '0.3.33', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Univocal评测：Mac上的朗读与听写应用', highlights: ['朗读并听写', '据开发者称在你的Mac上运行', '仅限Apple芯片'],
    facts: [{ label: '平台', value: 'Mac（Apple芯片）', tone: 'slate' }, { label: '价格', value: '一次性$39', tone: 'emerald' }, { label: '许可证', value: '专有', tone: 'slate' }, { label: '版本', value: '0.3.33', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Univocal: leitura em voz alta e ditado no Mac', highlights: ['Lê em voz alta e dita', 'Roda no seu Mac, segundo o autor', 'Só Apple silicon'],
    facts: [{ label: 'Plataformas', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'Preço', value: 'US$ 39 uma vez', tone: 'emerald' }, { label: 'Licença', value: 'Proprietária', tone: 'slate' }, { label: 'Versão', value: '0.3.33', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Univocal: القراءة بصوت عالٍ والإملاء على Mac', highlights: ['يقرأ بصوت عالٍ ويُملي', 'يعمل على Mac بحسب المطوّر', 'Apple silicon فقط'],
    facts: [{ label: 'المنصات', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: 'السعر', value: '39 دولارًا لمرة واحدة', tone: 'emerald' }, { label: 'الترخيص', value: 'مملوك', tone: 'slate' }, { label: 'الإصدار', value: '0.3.33', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Univocal 리뷰: Mac 소리 내어 읽기와 받아쓰기 앱', highlights: ['읽어 주고 받아쓰기', '개발사 설명상 Mac에서 처리', 'Apple silicon 전용'],
    facts: [{ label: '플랫폼', value: 'Mac (Apple silicon)', tone: 'slate' }, { label: '가격', value: '1회 $39', tone: 'emerald' }, { label: '라이선스', value: '독점', tone: 'slate' }, { label: '버전', value: '0.3.33', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `univocal-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `univocal-review-hero-${lang}.png`)
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
