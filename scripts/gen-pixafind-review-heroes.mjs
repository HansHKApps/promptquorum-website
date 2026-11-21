#!/usr/bin/env node
// Hero generator for pixafind-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/pixafind.ts. Needs the dev server: npx next dev --webpack --port 3438 (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3438'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const T = ['slate', 'emerald', 'slate', 'amber']
const mk = (facts) => facts.map(([label, value], i) => ({ label, value, tone: T[i] }))

const SPECS = {
  "en": {
    "title": "PixaFind Review: Local AI Search for Your Files and Photos",
    "highlights": [
      "Finds files by meaning",
      "Free tier, paid Pro",
      "Windows, Mac and Linux"
    ],
    "facts": [
      [
        "Platforms",
        "Windows, Mac, Linux"
      ],
      [
        "Price",
        "Free tier, Pro from $8/month"
      ],
      [
        "License",
        "Proprietary"
      ],
      [
        "Version",
        "0.7.40"
      ]
    ],
    "footer": "PromptQuorum Guide"
  },
  "de": {
    "title": "PixaFind Rezension: Lokale KI-Suche für Ihre Dateien und Fotos",
    "highlights": [
      "Dateien nach Bedeutung finden",
      "Gratis-Tarif, Pro kostenpflichtig",
      "Windows, Mac und Linux"
    ],
    "facts": [
      [
        "Plattformen",
        "Windows, Mac, Linux"
      ],
      [
        "Preis",
        "Gratis-Tarif, Pro ab 8 $/Monat"
      ],
      [
        "Lizenz",
        "Proprietär"
      ],
      [
        "Version",
        "0.7.40"
      ]
    ],
    "footer": "PromptQuorum-Leitfaden"
  },
  "fr": {
    "title": "Test de PixaFind : recherche IA locale pour vos fichiers et photos",
    "highlights": [
      "Cherche vos fichiers par le sens",
      "Offre gratuite, Pro payant",
      "Windows, Mac et Linux"
    ],
    "facts": [
      [
        "Plateformes",
        "Windows, Mac, Linux"
      ],
      [
        "Prix",
        "Gratuit, Pro dès 8 $/mois"
      ],
      [
        "Licence",
        "Propriétaire"
      ],
      [
        "Version",
        "0.7.40"
      ]
    ],
    "footer": "Guide PromptQuorum"
  },
  "ja": {
    "title": "PixaFind レビュー：ファイルと写真を探すローカルAI検索アプリ",
    "highlights": [
      "意味でファイルを検索",
      "無料枠あり、Proは有料",
      "Windows・Mac・Linux"
    ],
    "facts": [
      [
        "対応",
        "Windows・Mac・Linux"
      ],
      [
        "価格",
        "無料枠あり、Proは月8ドルから"
      ],
      [
        "ライセンス",
        "プロプライエタリ"
      ],
      [
        "バージョン",
        "0.7.40"
      ]
    ],
    "footer": "PromptQuorumガイド"
  },
  "zh": {
    "title": "PixaFind评测：按含义搜索文件和照片的本地AI工具",
    "highlights": [
      "按含义找文件和照片",
      "免费版，Pro付费",
      "Windows、Mac和Linux"
    ],
    "facts": [
      [
        "平台",
        "Windows、Mac、Linux"
      ],
      [
        "价格",
        "免费版，Pro每月8美元起"
      ],
      [
        "许可证",
        "专有"
      ],
      [
        "版本",
        "0.7.40"
      ]
    ],
    "footer": "PromptQuorum 指南"
  },
  "es": {
    "title": "Reseña de PixaFind: búsqueda con IA local para tus archivos y fotos",
    "highlights": [
      "Busca por significado, no por nombre",
      "Modelos en tu PC, según el fabricante",
      "Plan gratis, Pro de pago"
    ],
    "facts": [
      [
        "Plataformas",
        "Windows, Mac, Linux"
      ],
      [
        "Precio",
        "Plan gratis, Pro desde $8/mes"
      ],
      [
        "Licencia",
        "Propietaria"
      ],
      [
        "Versión",
        "0.7.40"
      ]
    ],
    "footer": "Guía de PromptQuorum"
  },
  "pt": {
    "title": "Análise do PixaFind: busca com IA local para seus arquivos e fotos",
    "highlights": [
      "Busca arquivos pelo significado",
      "Plano grátis, Pro pago",
      "Windows, Mac e Linux"
    ],
    "facts": [
      [
        "Plataformas",
        "Windows, Mac, Linux"
      ],
      [
        "Preço",
        "Plano grátis, Pro a partir de US$ 8/mês"
      ],
      [
        "Licença",
        "Proprietária"
      ],
      [
        "Versão",
        "0.7.40"
      ]
    ],
    "footer": "Guia PromptQuorum"
  },
  "ar": {
    "title": "مراجعة PixaFind: بحث بالذكاء الاصطناعي المحلي في ملفاتك وصورك",
    "highlights": [
      "يبحث بحسب المعنى لا الاسم",
      "النماذج على حاسوبك بحسب المطوّر",
      "نسخة مجانية وخطط مدفوعة"
    ],
    "facts": [
      [
        "المنصات",
        "Windows وMac وLinux"
      ],
      [
        "السعر",
        "مجاني وPro من 8 دولارات شهريًا"
      ],
      [
        "الترخيص",
        "مملوك"
      ],
      [
        "الإصدار",
        "0.7.40"
      ]
    ],
    "footer": "دليل PromptQuorum"
  },
  "ko": {
    "title": "PixaFind 리뷰: 파일과 사진을 위한 로컬 AI 검색",
    "highlights": [
      "의미로 파일 검색",
      "무료 플랜, 유료 Pro",
      "Windows·Mac·Linux"
    ],
    "facts": [
      [
        "플랫폼",
        "Windows, Mac, Linux"
      ],
      [
        "가격",
        "무료 플랜, Pro 월 8달러부터"
      ],
      [
        "라이선스",
        "독점"
      ],
      [
        "버전",
        "0.7.40"
      ]
    ],
    "footer": "PromptQuorum 가이드"
  }
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `pixafind-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, title: spec.title, highlights: spec.highlights, facts: mk(spec.facts), footer: spec.footer }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `pixafind-review-hero-${lang}.png`)
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
