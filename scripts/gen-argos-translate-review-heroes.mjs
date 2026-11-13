#!/usr/bin/env node
// Hero generator for argos-translate-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/argos-translate.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3458  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3458'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Argos Translate Review: Free Offline Translation for Python and the Command Line', highlights: ['Translates on your own computer', 'Free and MIT-licensed', 'Terminal install, no installer'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Price', value: 'Free', tone: 'emerald' }, { label: 'License', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.11.0', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Argos Translate Rezension: Kostenlose Offline-Übersetzung für Python und die Kommandozeile', highlights: ['Übersetzt auf Ihrem Rechner', 'Kostenlos, MIT-Lizenz', 'Terminal-Installation'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preis', value: 'Kostenlos', tone: 'emerald' }, { label: 'Lizenz', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.11.0', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test d’Argos Translate : traduction hors ligne gratuite pour Python et la ligne de commande', highlights: ['Traduit sur votre ordinateur', 'Gratuit, licence MIT', 'Installation par terminal'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Prix', value: 'Gratuit', tone: 'emerald' }, { label: 'Licence', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '1.11.0', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de Argos Translate: traducción sin conexión gratuita para Python y la línea de comandos', highlights: ['Traduce en tu ordenador', 'Gratis, licencia MIT', 'Instalación por terminal'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Precio', value: 'Gratis', tone: 'emerald' }, { label: 'Licencia', value: 'MIT', tone: 'slate' }, { label: 'Versión', value: '1.11.0', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Argos Translateレビュー：Pythonとコマンドラインでのオフライン無料翻訳', highlights: ['お使いのPC上で翻訳', '無料・MITライセンス', 'ターミナルでインストール'],
    facts: [{ label: '対応', value: 'Mac・Windows・Linux', tone: 'slate' }, { label: '価格', value: '無料', tone: 'emerald' }, { label: 'ライセンス', value: 'MIT', tone: 'slate' }, { label: 'バージョン', value: '1.11.0', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Argos Translate评测：适用于Python和命令行的免费离线翻译', highlights: ['在你的电脑上翻译', '免费、MIT许可证', '终端安装'],
    facts: [{ label: '平台', value: 'Mac、Windows、Linux', tone: 'slate' }, { label: '价格', value: '免费', tone: 'emerald' }, { label: '许可证', value: 'MIT', tone: 'slate' }, { label: '版本', value: '1.11.0', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do Argos Translate: tradução offline gratuita para Python e linha de comando', highlights: ['Traduz no seu computador', 'Grátis, licença MIT', 'Instalação pelo terminal'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preço', value: 'Grátis', tone: 'emerald' }, { label: 'Licença', value: 'MIT', tone: 'slate' }, { label: 'Versão', value: '1.11.0', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Argos Translate: ترجمة مجانية دون اتصال لـ Python وسطر الأوامر', highlights: ['يترجم على حاسوبك', 'مجاني بترخيص MIT', 'تثبيت عبر الطرفية'],
    facts: [{ label: 'المنصات', value: 'Mac وWindows وLinux', tone: 'slate' }, { label: 'السعر', value: 'مجاني', tone: 'emerald' }, { label: 'الترخيص', value: 'MIT', tone: 'slate' }, { label: 'الإصدار', value: '1.11.0', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Argos Translate 리뷰: Python과 명령줄용 무료 오프라인 번역', highlights: ['내 컴퓨터에서 번역', '무료, MIT 라이선스', '터미널로 설치'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: '가격', value: '무료', tone: 'emerald' }, { label: '라이선스', value: 'MIT', tone: 'slate' }, { label: '버전', value: '1.11.0', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `argos-translate-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `argos-translate-review-hero-${lang}.png`)
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
