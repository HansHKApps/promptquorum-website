#!/usr/bin/env node
// Hero generator for localhosted-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/localhosted.ts (platform, price, license). A website: no version.
// Needs the dev server: npx next dev --webpack --port 3448  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3448'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const F = (p, pv, pr, prv, l, lv) => [
  { label: p, value: pv, tone: 'slate' },
  { label: pr, value: prv, tone: 'emerald' },
  { label: l, value: lv, tone: 'slate' },
]

const SPECS = {
  en: { title: 'Localhosted Review: Web Directory of Local and Self-Hosted AI Tools', highlights: ['1,800+ local AI tools listed', 'Paid listings and ads exist', 'Free to browse'], facts: F('Platform', 'Web browser', 'Price', 'Free', 'License', 'Closed source'), footer: 'PromptQuorum Guide' },
  de: { title: 'Localhosted-Rezension: Web-Verzeichnis lokaler und selbst gehosteter KI-Tools', highlights: ['Über 1.800 lokale KI-Tools', 'Bezahlte Einträge und Werbung', 'Kostenlos nutzbar'], facts: F('Plattform', 'Webbrowser', 'Preis', 'Kostenlos', 'Lizenz', 'Closed Source'), footer: 'PromptQuorum-Leitfaden' },
  fr: { title: "Test de Localhosted : annuaire web d'outils d'IA locaux et auto-hébergés", highlights: ['Plus de 1 800 outils d’IA locaux', 'Fiches payantes et publicités', 'Gratuit à consulter'], facts: F('Plateforme', 'Navigateur web', 'Prix', 'Gratuit', 'Licence', 'Code fermé'), footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Localhosted: directorio web de herramientas de IA locales y autoalojadas', highlights: ['Más de 1.800 herramientas de IA', 'Hay fichas de pago y anuncios', 'Gratis para consultar'], facts: F('Plataforma', 'Navegador web', 'Precio', 'Gratis', 'Licencia', 'Código cerrado'), footer: 'Guía de PromptQuorum' },
  ja: { title: 'Localhostedレビュー：ローカル／セルフホスト型AIツールのWebディレクトリ', highlights: ['AIツール1,800件以上', '有料掲載と広告あり', '閲覧は無料'], facts: F('プラットフォーム', 'Webブラウザ', '価格', '無料', 'ライセンス', 'クローズドソース'), footer: 'PromptQuorumガイド' },
  zh: { title: 'Localhosted 评测：本地与自托管 AI 工具网页目录', highlights: ['收录1,800多款AI工具', '含付费收录与广告', '免费浏览'], facts: F('平台', '网页浏览器', '价格', '免费', '许可证', '闭源'), footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Localhosted: diretório web de ferramentas de IA locais e auto-hospedadas', highlights: ['Mais de 1.800 ferramentas de IA', 'Há listagens pagas e anúncios', 'Gratuito para consultar'], facts: F('Plataforma', 'Navegador web', 'Preço', 'Grátis', 'Licença', 'Código fechado'), footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Localhosted: دليل ويب لأدوات الذكاء الاصطناعي المحلية والمستضافة ذاتيًا', highlights: ['أكثر من 1800 أداة ذكاء اصطناعي', 'توجد قوائم مدفوعة وإعلانات', 'التصفح مجاني'], facts: F('المنصة', 'متصفح الويب', 'السعر', 'مجاني', 'الترخيص', 'مغلق المصدر'), footer: 'دليل PromptQuorum' },
  ko: { title: 'Localhosted 리뷰: 로컬·셀프호스팅 AI 도구 웹 디렉터리', highlights: ['AI 도구 1,800개 이상', '유료 등재와 광고 있음', '무료로 둘러보기'], facts: F('플랫폼', '웹 브라우저', '가격', '무료', '라이선스', '비공개 소스'), footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `localhosted-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `localhosted-review-hero-${lang}.png`)
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
