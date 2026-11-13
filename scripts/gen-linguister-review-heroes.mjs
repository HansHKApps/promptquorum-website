#!/usr/bin/env node
// Hero generator for linguister-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/linguister.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3461  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Linguist Review: Open-Source Browser Translator With Offline Mode', highlights: ['Cloud translation by default', 'Offline Bergamot on your device', 'Free, open source'],
    facts: [{ label: 'Platforms', value: 'Chrome, Firefox', tone: 'slate' }, { label: 'Price', value: 'Free', tone: 'emerald' }, { label: 'License', value: 'Open source', tone: 'slate' }, { label: 'Version', value: '7.1.0', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Linguist Rezension: Open-Source-Browserübersetzer mit Offline-Modus', highlights: ['Standardmäßig Cloud-Übersetzung', 'Bergamot offline auf Ihrem Gerät', 'Kostenlos, Open Source'],
    facts: [{ label: 'Plattformen', value: 'Chrome, Firefox', tone: 'slate' }, { label: 'Preis', value: 'Kostenlos', tone: 'emerald' }, { label: 'Lizenz', value: 'Open Source', tone: 'slate' }, { label: 'Version', value: '7.1.0', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de Linguist : traducteur open source avec mode hors ligne', highlights: ['Traduction cloud par défaut', 'Bergamot hors ligne sur votre appareil', 'Gratuit, open source'],
    facts: [{ label: 'Plateformes', value: 'Chrome, Firefox', tone: 'slate' }, { label: 'Prix', value: 'Gratuit', tone: 'emerald' }, { label: 'Licence', value: 'Open source', tone: 'slate' }, { label: 'Version', value: '7.1.0', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Linguist: traductor de código abierto con modo sin conexión', highlights: ['Traducción en la nube por defecto', 'Bergamot sin conexión en tu dispositivo', 'Gratis, código abierto'],
    facts: [{ label: 'Plataformas', value: 'Chrome, Firefox', tone: 'slate' }, { label: 'Precio', value: 'Gratis', tone: 'emerald' }, { label: 'Licencia', value: 'Código abierto', tone: 'slate' }, { label: 'Versión', value: '7.1.0', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Linguistレビュー：オフライン対応のオープンソース翻訳拡張', highlights: ['既定はクラウド翻訳', 'Bergamotで端末内オフライン翻訳', '無料・オープンソース'],
    facts: [{ label: '対応', value: 'Chrome・Firefox', tone: 'slate' }, { label: '価格', value: '無料', tone: 'emerald' }, { label: 'ライセンス', value: 'オープンソース', tone: 'slate' }, { label: 'バージョン', value: '7.1.0', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Linguist评测：带离线模式的开源浏览器翻译扩展', highlights: ['默认使用云端翻译', 'Bergamot在设备上离线翻译', '免费、开源'],
    facts: [{ label: '平台', value: 'Chrome、Firefox', tone: 'slate' }, { label: '价格', value: '免费', tone: 'emerald' }, { label: '许可证', value: '开源', tone: 'slate' }, { label: '版本', value: '7.1.0', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Linguist: tradutor de código aberto com modo offline', highlights: ['Tradução na nuvem por padrão', 'Bergamot offline no seu dispositivo', 'Grátis, código aberto'],
    facts: [{ label: 'Plataformas', value: 'Chrome, Firefox', tone: 'slate' }, { label: 'Preço', value: 'Grátis', tone: 'emerald' }, { label: 'Licença', value: 'Código aberto', tone: 'slate' }, { label: 'Versão', value: '7.1.0', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Linguist: مترجم مفتوح المصدر للمتصفح مع وضع دون اتصال', highlights: ['الترجمة السحابية افتراضيًا', 'Bergamot دون اتصال على جهازك', 'مجاني ومفتوح المصدر'],
    facts: [{ label: 'المنصات', value: 'Chrome وFirefox', tone: 'slate' }, { label: 'السعر', value: 'مجاني', tone: 'emerald' }, { label: 'الترخيص', value: 'مفتوح المصدر', tone: 'slate' }, { label: 'الإصدار', value: '7.1.0', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Linguist 리뷰: 오프라인 모드를 갖춘 오픈 소스 번역 확장', highlights: ['기본은 클라우드 번역', 'Bergamot으로 기기에서 오프라인 번역', '무료, 오픈 소스'],
    facts: [{ label: '플랫폼', value: 'Chrome, Firefox', tone: 'slate' }, { label: '가격', value: '무료', tone: 'emerald' }, { label: '라이선스', value: '오픈 소스', tone: 'slate' }, { label: '버전', value: '7.1.0', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `linguister-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `linguister-review-hero-${lang}.png`)
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
