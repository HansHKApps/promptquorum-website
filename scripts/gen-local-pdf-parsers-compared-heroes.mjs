#!/usr/bin/env node
// Hero generator for local-pdf-parsers-compared (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + 3 facts. Run: HERO_BASE=http://localhost:3453 node scripts/gen-local-pdf-parsers-compared-heroes.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3453'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'local-pdf-parsers-compared'
const TITLES = {
  "en": "Local PDF Parsers Compared (2026): Docling, Marker, MinerU, OpenDataLoader PDF and More",
  "de": "Lokale PDF-Parser im Vergleich (2026): Docling, Marker, MinerU, OpenDataLoader PDF und mehr",
  "fr": "Analyseurs PDF locaux comparés (2026) : Docling, Marker, MinerU, OpenDataLoader PDF et plus",
  "ja": "ローカルPDFパーサー比較（2026）：Docling・Marker・MinerU・OpenDataLoader PDFほか",
  "zh": "本地 PDF 解析器对比（2026）：Docling、Marker、MinerU、OpenDataLoader PDF 等",
  "es": "Analizadores de PDF locales comparados (2026): Docling, Marker, MinerU, OpenDataLoader PDF y más",
  "pt": "Analisadores de PDF locais comparados (2026): Docling, Marker, MinerU, OpenDataLoader PDF e mais",
  "ar": "مقارنة محلّلات PDF المحلية (2026): Docling وMarker وMinerU وOpenDataLoader PDF وغيرها",
  "ko": "로컬 PDF 파서 비교(2026): Docling, Marker, MinerU, OpenDataLoader PDF 외"
}
const article = Object.fromEntries(Object.entries(TITLES).map(([k, v]) => [k, { title: v }]))
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  "en": {
    "hl": [
      "Formats, OCR and tables side by side",
      "Parsers, an editor and an SDK",
      "Licences taken from official docs"
    ],
    "facts": [
      {
        "label": "Tools",
        "value": "8"
      },
      {
        "label": "Source",
        "value": "Official docs"
      },
      {
        "label": "Benchmarks",
        "value": "None"
      }
    ],
    "footer": "PromptQuorum Guide"
  },
  "de": {
    "hl": [
      "Formate, OCR und Tabellen im Vergleich",
      "Parser, ein Editor und ein SDK",
      "Lizenzen aus offiziellen Docs"
    ],
    "facts": [
      {
        "label": "Tools",
        "value": "8"
      },
      {
        "label": "Quelle",
        "value": "Offizielle Docs"
      },
      {
        "label": "Benchmarks",
        "value": "Keine"
      }
    ],
    "footer": "PromptQuorum-Leitfaden"
  },
  "fr": {
    "hl": [
      "Formats, OCR et tableaux comparés",
      "Analyseurs, un éditeur et un SDK",
      "Licences issues des docs officielles"
    ],
    "facts": [
      {
        "label": "Outils",
        "value": "8"
      },
      {
        "label": "Source",
        "value": "Docs officielles"
      },
      {
        "label": "Benchmarks",
        "value": "Aucun"
      }
    ],
    "footer": "Guide PromptQuorum"
  },
  "ja": {
    "hl": [
      "形式・OCR・表を一覧比較",
      "パーサー・編集・SDK",
      "ライセンスは公式文書から"
    ],
    "facts": [
      {
        "label": "ツール数",
        "value": "8"
      },
      {
        "label": "情報源",
        "value": "公式ドキュメント"
      },
      {
        "label": "ベンチマーク",
        "value": "なし"
      }
    ],
    "footer": "PromptQuorumガイド"
  },
  "zh": {
    "hl": [
      "格式、OCR、表格并排对比",
      "解析器、编辑器与 SDK",
      "许可证取自官方文档"
    ],
    "facts": [
      {
        "label": "工具数",
        "value": "8"
      },
      {
        "label": "来源",
        "value": "官方文档"
      },
      {
        "label": "基准测试",
        "value": "无"
      }
    ],
    "footer": "PromptQuorum 指南"
  },
  "es": {
    "hl": [
      "Formatos, OCR y tablas comparados",
      "Analizadores, un editor y un SDK",
      "Licencias según docs oficiales"
    ],
    "facts": [
      {
        "label": "Herramientas",
        "value": "8"
      },
      {
        "label": "Fuente",
        "value": "Docs oficiales"
      },
      {
        "label": "Benchmarks",
        "value": "Ninguno"
      }
    ],
    "footer": "Guía de PromptQuorum"
  },
  "pt": {
    "hl": [
      "Formatos, OCR e tabelas comparados",
      "Analisadores, um editor e um SDK",
      "Licenças segundo docs oficiais"
    ],
    "facts": [
      {
        "label": "Ferramentas",
        "value": "8"
      },
      {
        "label": "Fonte",
        "value": "Docs oficiais"
      },
      {
        "label": "Benchmarks",
        "value": "Nenhum"
      }
    ],
    "footer": "Guia PromptQuorum"
  },
  "ar": {
    "hl": [
      "الصيغ والتعرّف الضوئي والجداول معًا",
      "محلّلات ومحرّر وحزمة SDK",
      "التراخيص من الوثائق الرسمية"
    ],
    "facts": [
      {
        "label": "الأدوات",
        "value": "8"
      },
      {
        "label": "المصدر",
        "value": "الوثائق الرسمية"
      },
      {
        "label": "اختبارات الأداء",
        "value": "لا يوجد"
      }
    ],
    "footer": "دليل PromptQuorum"
  },
  "ko": {
    "hl": [
      "형식·OCR·표를 한눈에 비교",
      "파서·편집기·SDK",
      "라이선스는 공식 문서 기준"
    ],
    "facts": [
      {
        "label": "도구 수",
        "value": "8"
      },
      {
        "label": "출처",
        "value": "공식 문서"
      },
      {
        "label": "벤치마크",
        "value": "없음"
      }
    ],
    "footer": "PromptQuorum 가이드"
  }
}

// Arabic poster: title without the product-name list (mixed Latin names break the RTL line order in the renderer).
let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: lang === 'ar' ? stripMd(article[lang].title).split(':')[0] : stripMd(article[lang].title),
    highlights: t.hl,
    facts: t.facts,
    footer: t.footer,
  }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const png = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
    fs.writeFileSync(png, buf)
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`))
    fs.unlinkSync(png)
    console.log(`OK ${lang}`)
    generated++
  } catch (e) {
    console.error(`FAIL ${lang}: ${e.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
