// Local AI App Directory — Unstructured (layer: document ETL / extraction library for RAG and LLM pipelines)
// Added 2026-11-15. Facts read 2026-11-15 from github.com/Unstructured-IO/unstructured (README, GitHub API repo + releases),
// and unstructured.io (website, privacy policy). Not tested hands-on.
// WHAT: open-source document ETL library; PDF, DOCX, PPTX, HTML, XML, emails (EML/MSG), images, plain text and more in;
// structured JSON elements / plain text out; OCR via Tesseract, table extraction; core library fully local/free.
// MCP: not mentioned in README or docs, 2026-11-15.
// MAKER: Unstructured Technologies, Inc., 901 H St, Ste 120, Sacramento CA 95814, USA (privacy policy 2026-11-15).
// LICENSE: Apache-2.0 (GitHub API spdx_id + LICENSE, 2026-11-15).
// PRICE = freemium: local library is free and open-source; optional paid Transform API cloud service.
// LOCALITY = hybrid: core library fully local; optional cloud Transform API available.
// HARDWARE: no RAM/VRAM figure stated in README; not stated.
// PLATFORMS: Python only; Docker or native Python; Linux/Mac/Windows supported; README 2026-11-15.
// RELEASES: 0.27.37 published 2026-11-06 (GitHub Releases); repo pushed 2026-11-14.
// HQ FLAG: hqCountry 'US' — Unstructured Technologies, Inc., 901 H St, Ste 120, Sacramento CA 95814, USA,
// per privacy policy at unstructured.io/privacy-policy (read 2026-11-15).
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from README:
//   inputFormats  'PDF, DOCX, PPTX, HTML, emails, images +more'
//   outputFormats 'JSON', 'Text'
//   ocr true       <- README: Tesseract integration for OCR
//   tableExtraction true <- README comparison table: table extraction supported in open-source version
//   boundingBoxes false  <- not explicitly mentioned in README
//   languageBindings 1   <- Python only
// verdict: omitted (the review carries the verdict). Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'unstructured',
  name: 'Unstructured',
  categories: ['ocr-document-parsing', 'sdks-libraries'],
  interfaces: ['library', 'cli'], // pip install unstructured; Docker image also available; README 2026-11-15
  locality: 'hybrid', // core library fully local/free; optional paid Transform API cloud service
  platforms: ['linux', 'mac', 'win'], // Docker or native Python; README 2026-11-15
  worksWith: ['LangChain', 'LlamaIndex'], // README mentions these integrations, 2026-11-15
  engine: 'library',
  license: 'Apache-2.0', // GitHub API spdx_id + LICENSE, 2026-11-15
  price: 'freemium', // local library free; cloud Transform API is paid
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // not stated in README
  stars: 15743, // github.com/Unstructured-IO/unstructured, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'unstructured.io',
  storeLinks: {
    web: 'https://unstructured.io',
    github: 'https://github.com/Unstructured-IO/unstructured',
  },
  installEffort: 'terminal-setup', // pip install unstructured works for basic use; full functionality needs Tesseract, Poppler, LibreOffice separately
  installEvidence: 'README (read 2026-11-15): pip install unstructured; full functionality needs Tesseract, Poppler, and LibreOffice installed separately; Docker image available. No GUI installer.',
  hqCountry: 'US', // Unstructured Technologies, Inc., 901 H St, Ste 120, Sacramento CA 95814, USA; privacy policy 2026-11-15
  hqCountrySource: 'https://unstructured.io/privacy-policy',
  tagline: {
    en: 'Open-source document ETL library that partitions PDF, DOCX, HTML, emails and images into structured JSON elements with OCR and table extraction; runs locally for free, with an optional paid cloud API',
    de: 'Open-Source-ETL-Bibliothek, die PDF, DOCX, HTML, E-Mails und Bilder in strukturierte JSON-Elemente mit OCR und Tabellenextraktion aufteilt; kostenlos lokal ausführbar, mit optionaler kostenpflichtiger Cloud-API',
    fr: 'Bibliothèque ETL open source qui décompose PDF, DOCX, HTML, e-mails et images en éléments JSON structurés avec OCR et extraction de tableaux\u00a0; fonctionne gratuitement en local, avec une API cloud payante en option',
    ja: 'PDF・DOCX・HTML・メール・画像を構造化JSON要素に分割するオープンソースのETLライブラリ。OCRと表抽出に対応し、無料でローカル実行可能。オプションで有料クラウドAPIも利用可能',
    zh: '开源文档 ETL 库，可将 PDF、DOCX、HTML、电子邮件和图片分割为结构化 JSON 元素，支持 OCR 和表格提取；本地免费运行，可选付费云 API',
    es: 'Biblioteca ETL de código abierto que divide PDF, DOCX, HTML, correos electrónicos e imágenes en elementos JSON estructurados con OCR y extracción de tablas; ejecutable localmente de forma gratuita, con una API cloud de pago opcional',
    pt: 'Biblioteca ETL de código aberto que particiona PDF, DOCX, HTML, e-mails e imagens em elementos JSON estruturados com OCR e extração de tabelas; roda localmente de graça, com API cloud opcional paga',
    ar: 'مكتبة ETL مفتوحة المصدر تُقسّم PDF وDOCX وHTML والبريد الإلكتروني والصور إلى عناصر JSON منظمة مع OCR واستخراج الجداول؛ تعمل محليًا مجانًا مع API سحابي اختياري مدفوع',
    ko: 'PDF·DOCX·HTML·이메일·이미지를 구조화 JSON 요소로 분할하는 오픈소스 ETL 라이브러리; OCR 및 표 추출 지원, 로컬 무료 실행, 선택적 유료 클라우드 API 제공',
  },
  reviewSlug: 'unstructured-review',
  pqReview: {
    date: '2026-11-15',
    version: '0.27.37',
    versionSourceUrl: 'https://github.com/Unstructured-IO/unstructured/releases/tag/0.27.37',
  },
  compare: { inputFormats: 'PDF, DOCX, PPTX, HTML, emails, images +more', outputFormats: ['JSON', 'Text'], ocr: true, tableExtraction: true, boundingBoxes: false, languageBindings: 1 }, // verified 2026-11-15 from README, see header
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-14', // GitHub API: pushed_at 2026-11-14 (latest release 0.27.37 on 2026-11-06), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/Unstructured-IO/unstructured',
}
