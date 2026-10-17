#!/usr/bin/env node
// Hero generator for pixlstash-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/pixlstash.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'PixlStash Review: Self-Hosted Image Library Manager with Local AI Tagging',
    highlights: ['AI models run on your machine', 'Face and semantic search', 'Free, GPL-3.0'],
    facts: [
      { label: 'Platforms', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Price', value: 'Free', tone: 'emerald' },
      { label: 'License', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'PixlStash Rezension: Selbst gehosteter Bildbibliotheks-Manager mit lokaler KI-Verschlagwortung',
    highlights: ['KI-Modelle laufen lokal', 'Gesichts- und semantische Suche', 'Kostenlos, GPL-3.0'],
    facts: [
      { label: 'Plattformen', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preis', value: 'Kostenlos', tone: 'emerald' },
      { label: 'Lizenz', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test de PixlStash : gestionnaire de bibliothèque d’images auto-hébergé avec étiquetage IA local',
    highlights: ['Modèles d’IA exécutés en local', 'Recherche par visage et sémantique', 'Gratuit, GPL-3.0'],
    facts: [
      { label: 'Plateformes', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Prix', value: 'Gratuit', tone: 'emerald' },
      { label: 'Licence', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Version', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de PixlStash: gestor de bibliotecas de imágenes autoalojado con etiquetado de IA local',
    highlights: ['Modelos de IA en tu equipo', 'Búsqueda facial y semántica', 'Gratis, GPL-3.0'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Precio', value: 'Gratis', tone: 'emerald' },
      { label: 'Licencia', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Versión', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'PixlStashレビュー：ローカルAIでタグ付けするセルフホスト型画像ライブラリ管理ツール',
    highlights: ['AIモデルはローカルで動作', '顔・意味検索に対応', '無料・GPL-3.0'],
    facts: [
      { label: '対応', value: 'Windows・macOS・Linux', tone: 'slate' },
      { label: '価格', value: '無料', tone: 'emerald' },
      { label: 'ライセンス', value: 'GPL-3.0', tone: 'slate' },
      { label: 'バージョン', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'PixlStash评测：支持本地AI打标签的自托管图像库管理工具',
    highlights: ['AI模型在本机运行', '支持人脸与语义搜索', '免费，GPL-3.0'],
    facts: [
      { label: '平台', value: 'Windows、macOS、Linux', tone: 'slate' },
      { label: '价格', value: '免费', tone: 'emerald' },
      { label: '许可证', value: 'GPL-3.0', tone: 'slate' },
      { label: '版本', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do PixlStash: gerenciador de biblioteca de imagens auto-hospedado com marcação por IA local',
    highlights: ['Modelos de IA rodam no seu PC', 'Busca facial e semântica', 'Grátis, GPL-3.0'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preço', value: 'Grátis', tone: 'emerald' },
      { label: 'Licença', value: 'GPL-3.0', tone: 'slate' },
      { label: 'Versão', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة PixlStash: مدير مكتبة صور مستضاف ذاتيًا مع وسم بالذكاء الاصطناعي المحلي',
    highlights: ['نماذج الذكاء الاصطناعي تعمل محليًا', 'بحث بالوجه وبحث دلالي', 'مجاني، GPL-3.0'],
    facts: [
      { label: 'المنصات', value: 'Windows وmacOS وLinux', tone: 'slate' },
      { label: 'السعر', value: 'مجاني', tone: 'emerald' },
      { label: 'الترخيص', value: 'GPL-3.0', tone: 'slate' },
      { label: 'الإصدار', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'PixlStash 리뷰: 로컬 AI로 태깅하는 셀프호스팅 이미지 라이브러리 관리 도구',
    highlights: ['AI 모델이 내 PC에서 실행', '얼굴·시맨틱 검색', '무료, GPL-3.0'],
    facts: [
      { label: '플랫폼', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: '가격', value: '무료', tone: 'emerald' },
      { label: '라이선스', value: 'GPL-3.0', tone: 'slate' },
      { label: '버전', value: '1.11.5', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `pixlstash-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `pixlstash-review-hero-${lang}.png`)
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
