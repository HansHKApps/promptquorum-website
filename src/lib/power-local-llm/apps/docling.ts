// Local AI App Directory — Docling (layer: document parsing / extraction library for RAG and LLM pipelines)
// Added 2026-11-15. Facts read 2026-11-15 from github.com/docling-project/docling (README, LICENSE, GitHub API repo + releases/latest; org moved from DS4SD, re-verified 2026-11-16)
// and docling-project.github.io/docling (documentation). Not tested hands-on.
// WHAT: open-source document parser started by IBM Research Zurich, hosted by the LF AI & Data Foundation; PDF, DOCX, PPTX, XLSX, HTML, EPUB, images (PNG/JPEG/TIFF), LaTeX and more in,
// Markdown / JSON (with bounding boxes) / HTML / DocLang / DocTags / WebVTT out; library + CLI + REST API server.
// MCP: README "Connect to any agent using the MCP server" — MCP is the separate docling-mcp package (uvx --from=docling-mcp docling-mcp-server), docs https://docling-project.github.io/docling/usage/mcp/.
// MAKER: repo github.com/docling-project/docling, a project hosted by the LF AI & Data Foundation; started by the AI for knowledge team at IBM Research Zurich (re-verified 2026-11-16).
// LICENSE: MIT (GitHub API spdx_id + LICENSE file, 2026-11-15).
// PRICE = free: fully open-source, no paid tier.
// LOCALITY = local: no cloud required; models downloaded from Hugging Face on first run, cached locally thereafter.
// HARDWARE: no RAM or VRAM figure published in README; GPU optional for layout model but not required; not stated clearly.
// PLATFORMS: Python 3.10+, x86_64 and arm64, README 2026-11-15; mac/linux/win via PyPI.
// RELEASES: v2.150.1 published 2026-11-14 (GitHub Releases API); repo pushed 2026-11-15.
// HQ FLAG: none (removed 2026-11-16). The project sits under docling-project / LF AI & Data Foundation; ibm.com/privacy is not a valid basis for a project HQ country.
// Leave hqCountry / hqCountrySource unset unless a primary source states a clear HQ country.
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from README:
//   inputFormats  'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images'
//   outputFormats 'Markdown', 'JSON', 'HTML', 'DocLang', 'DocTags'
//   ocr true       <- README: "Extensive OCR support for scanned PDFs and images"
//   tableExtraction true <- README: "table structure" understanding
//   boundingBoxes true   <- DoclingDocument JSON carries bbox per element, docling-project.github.io/docling
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
  stars: 70611, // github.com/docling-project/docling, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'docling-project.github.io/docling',
  storeLinks: {
    web: 'https://docling-project.github.io/docling',
    github: 'https://github.com/docling-project/docling',
  },
  installEffort: 'one-command',
  installEvidence: 'README (read 2026-11-15): pip install docling, Python 3.10+; no Java dependency; models downloaded from Hugging Face on first run, cached locally thereafter. GitHub Releases v2.150.1 ships only source/wheel via PyPI, no GUI installer.',
  tagline: {
    en: 'Open-source document parser started by IBM Research and hosted by the LF AI & Data Foundation that converts PDF, DOCX, PPTX and more into structured Markdown, JSON and HTML with bounding boxes and OCR; parses on your machine, with MCP via the separate docling-mcp package',
    de: 'Von IBM Research gestarteter, von der LF AI & Data Foundation gehosteter Open-Source-Dokumenten-Parser, der PDF, DOCX, PPTX und weitere Formate in strukturiertes Markdown, JSON und HTML mit Begrenzungsrahmen und OCR umwandelt; verarbeitet lokal, MCP über das separate Paket docling-mcp',
    fr: 'Analyseur de documents open source lancé par IBM Research et hébergé par la LF AI & Data Foundation, qui convertit PDF, DOCX, PPTX et d\u2019autres formats en Markdown structuré, JSON et HTML avec cadres de délimitation et OCR ; traite les documents en local, MCP via le paquet séparé docling-mcp',
    ja: 'IBM Research が開始し LF AI & Data Foundation がホストするオープンソースのドキュメントパーサー。PDF、DOCX、PPTXなどを構造化されたMarkdown・JSON・HTMLにバウンディングボックス付きで変換。OCR対応、ローカルで処理、MCPは別パッケージ docling-mcp で提供',
    zh: 'IBM Research 发起、LF AI & Data Foundation 托管的开源文档解析器，可将 PDF、DOCX、PPTX 等转换为带边界框的结构化 Markdown、JSON 和 HTML，支持 OCR，在本机处理文档，MCP 通过独立软件包 docling-mcp 提供',
    es: 'Analizador de documentos de código abierto iniciado por IBM Research y alojado por la LF AI & Data Foundation, que convierte PDF, DOCX, PPTX y otros formatos en Markdown estructurado, JSON y HTML con cuadros delimitadores y OCR; procesa en local, MCP mediante el paquete aparte docling-mcp',
    pt: 'Analisador de documentos de código aberto iniciado pela IBM Research e hospedado pela LF AI & Data Foundation, que converte PDF, DOCX, PPTX e mais em Markdown estruturado, JSON e HTML com caixas delimitadoras e OCR; processa localmente, MCP pelo pacote separado docling-mcp',
    ar: 'محلّل مستندات مفتوح المصدر بدأته IBM Research وتستضيفه LF AI & Data Foundation، يحوّل PDF وDOCX وPPTX وغيرها إلى Markdown منظم وJSON وHTML مع مربعات إحاطة وOCR؛ يعالج المستندات محليًا، وMCP عبر الحزمة المنفصلة docling-mcp',
    ko: 'IBM Research가 시작하고 LF AI & Data Foundation이 호스팅하는 오픈소스 문서 파서로, PDF·DOCX·PPTX 등을 경계 상자 포함 구조화 Markdown·JSON·HTML로 변환하며 OCR 지원, 로컬에서 처리하며 MCP는 별도 패키지 docling-mcp로 제공',
  },
  reviewSlug: 'docling-review',
  pqReview: {
    date: '2026-11-15',
    version: 'v2.150.1',
    versionSourceUrl: 'https://github.com/docling-project/docling/releases/tag/v2.150.1',
  },
  compare: { inputFormats: 'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images', outputFormats: ['Markdown', 'JSON', 'HTML', 'DocLang', 'DocTags'], ocr: true, tableExtraction: true, boundingBoxes: true, languageBindings: 1, mcp: true }, // verified 2026-11-15 from README and docling-project.github.io/docling, see header
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-15', // GitHub API: pushed_at 2026-11-15 (latest release v2.150.1 on 2026-11-14), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/docling-project/docling',
}
