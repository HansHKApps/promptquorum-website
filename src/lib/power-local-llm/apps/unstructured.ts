// Local AI App Directory — Unstructured (layer: document ETL / extraction library for RAG and LLM pipelines)
// Added 2026-11-15; review (unstructured-review) written and tile re-verified 2026-11-17 from the raw GitHub README, GitHub API (repo, release, license),
// PyPI, docs.unstructured.io (open-source overview, partitioning, document elements, integrations) and unstructured.io (pricing, privacy policy, terms). Not tested hands-on.
// WHAT: open-source document ETL library; PDF, DOCX, PPTX, HTML, XML, emails (EML/MSG), images, plain text and more in;
// structured JSON elements / plain text out; OCR via Tesseract, table extraction; core library fully local/free.
// MCP: the README describes none for the library; the docs overview (2026-11-17) mentions the HOSTED Unstructured Transform MCP server (sends documents to Unstructured),
// so the `mcp` compare attribute is omitted (qualified claim, covered in the review).
// MAKER: Unstructured Technologies, Inc., 901 H St, Ste 120, Sacramento CA 95814, USA (privacy policy 2026-11-15).
// LICENSE: Apache-2.0 (GitHub API spdx_id + LICENSE, 2026-11-15).
// PRICE = freemium: local library is free and open-source; optional paid Transform API cloud service.
// LOCALITY = hybrid: core library fully local; optional cloud Transform API available.
// HARDWARE: no RAM/VRAM figure stated in README; not stated.
// PLATFORMS: Python only; Docker or native Python; Linux/Mac/Windows supported; README 2026-11-15.
// RELEASES: 0.27.37 published 2026-11-06 (GitHub Releases + PyPI, requires_python >=3.11,<3.14); repo pushed 2026-11-17 (GitHub API, read 2026-11-17).
// HQ FLAG: hqCountry 'US' — Unstructured Technologies, Inc., 901 H St, Ste 120, Sacramento CA 95814; the privacy policy says "We are headquartered in the United States",
// the website terms (unstructured.io/terms-and-conditions) are governed by California law (re-read 2026-11-17; no imprint page exists, no conflicting country anywhere).
// compare (re-verified 2026-11-17 against the raw README + docs.unstructured.io; unstated or qualified => key omitted, never "no"):
//   inputFormats  'PDF, DOCX, PPTX, HTML, emails, images +more'  <- README: "PDFs, HTML, Word docs, and many more"; `unstructured[docx,pptx]`; "Emails"
//   outputFormats 'JSON'   <- docs overview: "Transforms source documents into Unstructured's canonical JSON schema" (plain-text output is not stated, so not listed)
//   ocr true       <- README system dependency `tesseract-ocr` (images and PDFs); docs list an "OCR Languages" option
//   tableExtraction true <- docs file-type table: "Table Support" Yes for PDF/images + "Infer Table Structure" option
//   boundingBoxes  omitted <- docs say only "Some document types support location data ... usually ... bounding boxes" (qualified)
//   languageBindings 1   <- README: "Install the Python SDK"
//   mcp omitted    <- only the hosted Transform MCP server is documented
// verdict: omitted (the review carries the verdict). Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'unstructured',
  name: 'Unstructured',
  categories: ['ocr-document-parsing', 'sdks-libraries'],
  interfaces: ['library', 'cli'], // pip install unstructured; Docker image also available; README 2026-11-15
  locality: 'hybrid', // core library fully local/free; optional paid Transform API cloud service
  platforms: ['linux', 'mac', 'win'], // Docker or native Python; README 2026-11-15
  worksWith: ['LangChain', 'LlamaIndex'], // docs.unstructured.io/open-source/integrations lists both (staging functions), 2026-11-17
  engine: 'library',
  license: 'Apache-2.0', // GitHub API spdx_id + LICENSE, 2026-11-15
  price: 'freemium', // local library free; cloud Transform API is paid
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // not stated in README
  stars: 15759, // github.com/Unstructured-IO/unstructured, GitHub API 2026-11-17
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'unstructured.io',
  storeLinks: {
    web: 'https://unstructured.io',
    github: 'https://github.com/Unstructured-IO/unstructured',
  },
  installEffort: 'terminal-setup', // pip install unstructured works for basic use; full functionality needs Tesseract, Poppler, LibreOffice separately
  installEvidence: 'README (raw, read 2026-11-17): `pip install unstructured` only covers plain text, HTML, XML, JSON and email; `pip install "unstructured[all-docs]"` for all types plus system packages libmagic-dev, poppler-utils, tesseract-ocr and libreoffice; Docker image downloads.unstructured.io/unstructured-io/unstructured:latest. No GUI installer, no store listing.',
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
  compare: { inputFormats: 'PDF, DOCX, PPTX, HTML, emails, images +more', outputFormats: ['JSON'], ocr: true, tableExtraction: true, languageBindings: 1 }, // re-verified 2026-11-17 from README + docs, see header, see header
  reviewSlug: 'unstructured-review',
  pqReview: {
    date: '2026-11-17',
    version: '0.27.37',
    versionSourceUrl: 'https://github.com/Unstructured-IO/unstructured/releases/tag/0.27.37',
  },
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-17', // GitHub API: pushed_at 2026-11-17T19:54Z (latest release 0.27.37 on 2026-11-06), read 2026-11-17
  lastUpstreamUpdateSource: 'https://github.com/Unstructured-IO/unstructured',
}
