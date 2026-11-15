// Local AI App Directory — Marker (layer: document parsing / PDF-to-Markdown conversion library)
// Added 2026-11-15. Facts read 2026-11-15 from github.com/VikParuchuri/marker (README, LICENSE, GitHub API repo + releases/latest)
// and datalab.to. Not tested hands-on.
// WHAT: open-source PDF-to-Markdown converter; PDF, PPTX, DOCX, XLSX, HTML, EPUB, images in,
// Markdown / JSON / HTML / chunks out; uses Surya VLM for OCR; library + CLI.
// MAKER: Vik Paruchuri (VikParuchuri on GitHub); datalab.to is the associated hosted API service.
// LICENSE: Apache-2.0 (GitHub API spdx_id + LICENSE file, 2026-11-15).
// PRICE = freemium: local is free and open-source; datalab.to hosted API offers 5000 free pages/month.
// LOCALITY = hybrid: runs fully locally AND has a hosted API at datalab.to.
// HARDWARE: GPU optional; Surya VLM can use GPU or CPU; no RAM/VRAM figure published.
// PLATFORMS: Python 3.10+, PyTorch required; mac/linux/win via PyPI.
// RELEASES: v2.2.0 published 2026-11-12 (GitHub Releases API); repo pushed 2026-11-14.
// HQ FLAG: NOT SET — Datalab is described as "applied document intelligence R&D lab, Manhattan NY"
// per datalab.to, but no primary-source privacy policy URL with governing law or data authority was confirmed;
// left unset per owner rule 2026-11-15.
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from README:
//   inputFormats  'PDF, PPTX, DOCX, XLSX, HTML, EPUB, images'
//   outputFormats 'Markdown', 'JSON', 'HTML', 'chunks'
//   ocr true       <- README: Surya VLM for OCR
//   tableExtraction true <- README: TableConverter
//   boundingBoxes true   <- README: JSON output includes layout coordinates
//   languageBindings 1   <- Python only
//   mcp OMITTED: not mentioned in README
// verdict: omitted (the review carries the verdict). Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'marker',
  name: 'Marker',
  categories: ['ocr-document-parsing'],
  interfaces: ['library', 'cli'], // pip install marker-pdf installs the Python library and CLI, README 2026-11-15
  locality: 'hybrid', // runs fully locally AND has hosted API at datalab.to (5000 free pages/month)
  platforms: ['linux', 'mac', 'win'], // Python 3.10+, PyTorch required; PyPI; README 2026-11-15
  worksWith: [],
  engine: 'library',
  license: 'Apache-2.0', // GitHub API spdx_id + LICENSE file, 2026-11-15
  price: 'freemium', // local is free; datalab.to hosted offers 5000 free pages/month
  hardware: { ramGb: null, vramGb: null, cpuOnly: false }, // GPU optional; Surya VLM can use GPU or CPU; no RAM/VRAM figure published
  stars: 40925, // github.com/VikParuchuri/marker, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'datalab.to',
  storeLinks: {
    web: 'https://datalab.to',
    github: 'https://github.com/VikParuchuri/marker',
  },
  installEffort: 'one-command',
  installEvidence: 'README (read 2026-11-15): pip install marker-pdf; Python 3.10+; PyTorch required. No GUI installer. Hosted API available at datalab.to (5000 free pages/month).',
  // hqCountry not set: Datalab described as "applied document intelligence R&D lab, Manhattan NY" per datalab.to,
  // but no primary-source privacy policy URL with governing law or national authorities confirmed; left unset per owner rule 2026-11-15
  tagline: {
    en: 'Open-source PDF-to-Markdown converter that also handles DOCX, PPTX, EPUB and images; outputs Markdown, JSON and HTML with table and layout preservation; runs locally or via the hosted Datalab API',
    de: 'Open-Source-Konverter von PDF zu Markdown, der auch DOCX, PPTX, EPUB und Bilder verarbeitet; gibt Markdown, JSON und HTML mit Tabellen- und Layouterhalt aus; läuft lokal oder über die gehostete Datalab-API',
    fr: 'Convertisseur open source PDF vers Markdown gérant aussi DOCX, PPTX, EPUB et images ; produit Markdown, JSON et HTML avec conservation des tableaux et de la mise en page ; fonctionne en local ou via l\u2019API Datalab hébergée',
    ja: 'PDF→Markdown変換のオープンソースツール。DOCX・PPTX・EPUB・画像にも対応し、表とレイアウトを保持したMarkdown・JSON・HTMLを出力。ローカル実行またはDatalab APIを利用可能',
    zh: '开源 PDF 转 Markdown 工具，兼容 DOCX、PPTX、EPUB 和图片，输出保留表格和布局的 Markdown、JSON 和 HTML，支持本地运行或托管 Datalab API',
    es: 'Conversor de código abierto de PDF a Markdown que también procesa DOCX, PPTX, EPUB e imágenes; genera Markdown, JSON y HTML preservando tablas y maquetación; se ejecuta localmente o mediante la API alojada de Datalab',
    pt: 'Conversor de código aberto de PDF para Markdown que também processa DOCX, PPTX, EPUB e imagens; gera Markdown, JSON e HTML preservando tabelas e layout; roda localmente ou via API hospedada Datalab',
    ar: 'محوّل مفتوح المصدر من PDF إلى Markdown يعالج أيضًا DOCX وPPTX وEPUB والصور؛ يُخرج Markdown وJSON وHTML مع الحفاظ على الجداول والتخطيط؛ يعمل محليًا أو عبر Datalab API المُستضافة',
    ko: 'DOCX·PPTX·EPUB·이미지도 처리하는 오픈소스 PDF→Markdown 변환기; 표와 레이아웃을 유지한 Markdown·JSON·HTML 출력; 로컬 실행 또는 Datalab 호스팅 API 사용 가능',
  },
  reviewSlug: 'marker-review',
  pqReview: {
    date: '2026-11-15',
    version: 'v2.2.0',
    versionSourceUrl: 'https://github.com/VikParuchuri/marker/releases/tag/v2.2.0',
  },
  compare: { inputFormats: 'PDF, PPTX, DOCX, XLSX, HTML, EPUB, images', outputFormats: ['Markdown', 'JSON', 'HTML', 'chunks'], ocr: true, tableExtraction: true, boundingBoxes: true, languageBindings: 1 }, // verified 2026-11-15 from README, see header
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-14', // GitHub API: pushed_at 2026-11-14 (latest release v2.2.0 on 2026-11-12), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/VikParuchuri/marker',
}
