// Local AI App Directory — Docling (layer: document parsing / extraction library for RAG and LLM pipelines)
// Added 2026-11-15. Facts read 2026-11-15 from github.com/DS4SD/docling (README, LICENSE, GitHub API repo + releases/latest)
// and ds4sd.github.io/docling (documentation). Not tested hands-on.
// WHAT: open-source document parser by IBM Research; PDF, DOCX, PPTX, XLSX, HTML, EPUB, images (PNG/JPEG/TIFF), LaTeX and more in,
// Markdown / JSON (with bounding boxes) / HTML / DocLang / DocTags / WebVTT out; library + CLI + REST API server.
// MCP: README "Connect to any agent using the MCP server" — MCP server is included.
// MAKER: GitHub org DS4SD = IBM Research; IBM Corp maintains the project. IBM Corp privacy policy at ibm.com/privacy names New York/USA.
// LICENSE: MIT (GitHub API spdx_id + LICENSE file, 2026-11-15).
// PRICE = free: fully open-source, no paid tier.
// LOCALITY = local: no cloud required; models downloaded from Hugging Face on first run, cached locally thereafter.
// HARDWARE: no RAM or VRAM figure published in README; GPU optional for layout model but not required; not stated clearly.
// PLATFORMS: Python 3.10+, x86_64 and arm64, README 2026-11-15; mac/linux/win via PyPI.
// RELEASES: v2.150.1 published 2026-11-14 (GitHub Releases API); repo pushed 2026-11-15.
// HQ FLAG: hqCountry 'US' (IBM Corp, maintainer org DS4SD = IBM Research; IBM Corp privacy policy at ibm.com/privacy names New York/USA),
// hqCountrySource 'https://www.ibm.com/privacy'.
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from README:
//   inputFormats  'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images'
//   outputFormats 'Markdown', 'JSON', 'HTML', 'DocLang', 'DocTags'
//   ocr true       <- README: "Extensive OCR support for scanned PDFs and images"
//   tableExtraction true <- README: "table structure" understanding
//   boundingBoxes true   <- DoclingDocument JSON carries bbox per element, ds4sd.github.io/docling
//   languageBindings 1   <- Python only (also CLI and API server but not language bindings)
//   mcp true       <- README: "Connect to any agent using the MCP server"
// verdict: omitted (the review carries the verdict). Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'docling',
  name: 'Docling',
  categories: ['ocr-document-parsing', 'sdks-libraries'],
  interfaces: ['library', 'cli'], // pip install docling installs the Python library and CLI; REST API server also available, README 2026-11-15
  locality: 'local', // no cloud required; models from Hugging Face cached locally on first run
  platforms: ['linux', 'mac', 'win'], // Python 3.10+, x86_64 and arm64, PyPI; README 2026-11-15
  worksWith: ['LangChain', 'LlamaIndex', 'Haystack'], // README mentions these integrations, 2026-11-15
  engine: 'library',
  license: 'MIT', // GitHub API spdx_id + LICENSE file, 2026-11-15
  price: 'free', // fully open-source, no paid tier
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM/VRAM figure published; GPU optional for layout model, not stated clearly
  stars: 70611, // github.com/DS4SD/docling, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'ds4sd.github.io/docling',
  storeLinks: {
    web: 'https://ds4sd.github.io/docling',
    github: 'https://github.com/DS4SD/docling',
  },
  installEffort: 'one-command',
  installEvidence: 'README (read 2026-11-15): pip install docling, Python 3.10+; no Java dependency; models downloaded from Hugging Face on first run, cached locally thereafter. GitHub Releases v2.150.1 ships only source/wheel via PyPI, no GUI installer.',
  hqCountry: 'US', // IBM Corp, DS4SD = IBM Research; IBM Corp privacy policy at ibm.com/privacy names New York/USA, 2026-11-15
  hqCountrySource: 'https://www.ibm.com/privacy',
  tagline: {
    en: 'Open-source document parser by IBM Research that converts PDF, DOCX, PPTX and more into structured Markdown, JSON and HTML with bounding boxes and OCR; runs fully locally with an MCP server for agent use',
    de: 'Von IBM Research entwickelter Open-Source-Dokumenten-Parser, der PDF, DOCX, PPTX und weitere Formate in strukturiertes Markdown, JSON und HTML mit Begrenzungsrahmen und OCR umwandelt; läuft vollständig lokal mit einem MCP-Server',
    fr: 'Analyseur de documents open source d\u2019IBM Research qui convertit PDF, DOCX, PPTX et d\u2019autres formats en Markdown structuré, JSON et HTML avec cadres de délimitation et OCR ; fonctionne entièrement en local avec un serveur MCP',
    ja: 'IBM Researchによるオープンソースのドキュメントパーサー。PDF、DOCX、PPTXなどを構造化されたMarkdown・JSON・HTMLにバウンディングボックス付きで変換。OCR対応・MCPサーバー搭載でフルローカル動作',
    zh: 'IBM Research 开发的开源文档解析器，可将 PDF、DOCX、PPTX 等转换为带边界框的结构化 Markdown、JSON 和 HTML，支持 OCR，完全本地运行，内置 MCP 服务器',
    es: 'Analizador de documentos de código abierto de IBM Research que convierte PDF, DOCX, PPTX y otros formatos en Markdown estructurado, JSON y HTML con cuadros delimitadores y OCR; funciona totalmente en local con servidor MCP',
    pt: 'Analisador de documentos de código aberto da IBM Research que converte PDF, DOCX, PPTX e mais em Markdown estruturado, JSON e HTML com caixas delimitadoras e OCR; roda totalmente local com servidor MCP',
    ar: 'محلّل مستندات مفتوح المصدر من IBM Research يحوّل PDF وDOCX وPPTX وغيرها إلى Markdown منظم وJSON وHTML مع مربعات إحاطة وOCR؛ يعمل محليًا بالكامل مع خادم MCP',
    ko: 'IBM Research의 오픈소스 문서 파서로, PDF·DOCX·PPTX 등을 경계 상자 포함 구조화 Markdown·JSON·HTML로 변환하며 OCR 지원, MCP 서버 탑재로 완전 로컬 실행',
  },
  reviewSlug: 'docling-review',
  pqReview: {
    date: '2026-11-15',
    version: 'v2.150.1',
    versionSourceUrl: 'https://github.com/DS4SD/docling/releases/tag/v2.150.1',
  },
  compare: { inputFormats: 'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images', outputFormats: ['Markdown', 'JSON', 'HTML', 'DocLang', 'DocTags'], ocr: true, tableExtraction: true, boundingBoxes: true, languageBindings: 1, mcp: true }, // verified 2026-11-15 from README and ds4sd.github.io/docling, see header
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-15', // GitHub API: pushed_at 2026-11-15 (latest release v2.150.1 on 2026-11-14), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/DS4SD/docling',
}
