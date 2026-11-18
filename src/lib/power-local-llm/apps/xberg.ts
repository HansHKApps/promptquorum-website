// Local AI App Directory — Xberg (layer: document-intelligence / extraction engine for LLM + RAG pipelines)
// Added 2026-10-30 on Hans's request (link: docs.xberg.io). Facts verified 2026-10-30 from docs.xberg.io,
// xberg.io, xberg.io/privacy, github.com/xberg-io/xberg (README, LICENSE, releases) via the GitHub API.
// Xberg is the rebrand of Kreuzberg (README: "the next iteration of Kreuzberg ... rebuilt and rebranded under a
// fresh v1 line"); the old kreuzberg-dev repo is the v4 LTS line. No Kreuzberg tile existed, so none was merged.
// Local by default (Rust core, CPU-only, runs in-process / CLI / Docker); URL ingestion needs the network and
// LLM/embedding features can use a local (Ollama, LM Studio, vLLM) or hosted provider. the MIT library is the free part.
// Offers re-read 2026-11-18: xberg.io/pricing lists only the free open-source libraries (MIT) and an invitation-only Design Partner programme
// (24-month locked pricing, pricing disclosed in the application conversation); docs.xberg.io still describes Xberg Pro (self-hosted single container) and
// Xberg Enterprise (distributed on Kubernetes), the home page calls Xberg Platform a managed backend. No price is published for any managed offer.
// HQ (read 2026-11-18, not set on the tile: existing tiles are backfilled later): imprint = Berlin, Germany; privacy policy cites GDPR and German law (§147 AO); no conflicting country.
// compare, document-parsing segment (added 2026-11-15; localLlm/ollama/mcp are the older agent-framework attributes, verified 2026-10-30).
// Read 2026-11-15 from the RAW README https://raw.githubusercontent.com/xberg-io/xberg/main/README.md, exact quotes:
//   inputFormats  <- "PDFs, Office, images, HTML, email, e-books, scientific publications" (README says 107 formats; the count is not typed here).
//   outputFormats <- "Plain text, Markdown, Djot, HTML, JSON tree, or Docling DocTags".
//   ocr true      <- "OCR on demand | Tesseract, PaddleOCR, Candle, or VLM backends".
//   tableExtraction true <- "get back clean text, tables, metadata, and structured data".
//   languageBindings 15  <- "15 language bindings".
//   mcp true      <- "MCP server" (Runs anywhere row).
//   boundingBoxes OMITTED on purpose: docs.xberg.io/llms-full.txt (Element-Based Output) says coordinates are "Only populated for **text elements**
//   when `pdf_options.hierarchy` is enabled with `include_bbox=True`. Table and image elements do not carry coordinates." = qualified, not a plain yes.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'xberg',
  name: 'Xberg',
  categories: ['ocr-document-parsing', 'sdks-libraries'],
  interfaces: ['library', 'cli', 'web'], // 15 language bindings, CLI (14 commands), REST API server, MCP server, Docker; WASM runs in the browser, verified 2026-10-30
  locality: 'local', // extraction, OCR, layout and ONNX embeddings run on the host CPU; network only for URL fetching or hosted LLM providers you choose, verified 2026-10-30
  platforms: ['web', 'linux', 'mac', 'win'], // prebuilt binaries for Linux (x86_64, aarch64), macOS (Apple Silicon fully, Intel partly) and Windows; WASM for browsers, verified 2026-10-30
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'MCP'], // README "Structured extraction ... via local (Ollama, LM Studio, vLLM) or hosted LLMs" + MCP server, verified 2026-10-30
  engine: 'library',
  license: 'MIT', // GitHub API + LICENSE file, verified 2026-10-30
  price: 'free', // MIT library is free; no price is published for any managed offer (pricing page: Design Partner programme, pricing disclosed on application), re-verified 2026-11-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // docs: "CPU by default, no GPU required"; ONNX features need AVX/AVX2 on x86_64, verified 2026-10-30
  stars: 9598, // github.com/xberg-io/xberg, GitHub API 2026-11-18
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['build', 'docs', 'agent'],
  url: 'xberg.io',
  storeLinks: {
    web: 'https://xberg.io',
    github: 'https://github.com/xberg-io/xberg',
  },
  installEffort: 'one-command', // see InstallEffortKey in ./types.ts
  installEvidence: 'docs.xberg.io/getting-started/installation: pip install xberg, npm install @xberg-io/xberg, brew install xberg-io/tap/xberg, Docker image ghcr.io/xberg-io/xberg; GitHub Releases (v1.4.0: 64 assets) ship only language-binding artifacts (NIF .so/.dll, PHP extensions), v1.4.1 lists no assets; no desktop installer. checked 2026-11-18',
  tagline: {
    en: 'Open-source Rust document-intelligence engine that turns PDFs, Office files, scans, audio, URLs and code into clean Markdown, tables and structured data, with 15 language bindings, a CLI, REST API and MCP server',
    de: 'Quelloffene Dokumentenintelligenz-Engine in Rust, die PDFs, Office-Dateien, Scans, Audio, URLs und Code in sauberes Markdown, Tabellen und strukturierte Daten umwandelt, mit 15 Sprachanbindungen, CLI, REST-API und MCP-Server',
    fr: "Moteur open source d'intelligence documentaire en Rust qui transforme PDF, fichiers Office, scans, audio, URL et code en Markdown propre, tableaux et données structurées, avec 15 liaisons de langage, une CLI, une API REST et un serveur MCP",
    ja: 'PDF・Officeファイル・スキャン・音声・URL・コードを、整ったMarkdownや表、構造化データに変換するオープンソースのRust製ドキュメントインテリジェンスエンジン。15言語のバインディング、CLI、REST API、MCPサーバーを備える',
    zh: '开源的 Rust 文档智能引擎，可将 PDF、Office 文件、扫描件、音频、URL 和代码转换为整洁的 Markdown、表格与结构化数据，提供 15 种语言绑定、CLI、REST API 和 MCP 服务器',
    es: 'Motor de inteligencia documental de código abierto en Rust que convierte PDF, archivos de Office, escaneos, audio, URL y código en Markdown limpio, tablas y datos estructurados, con 15 bindings de lenguaje, CLI, API REST y servidor MCP',
    pt: 'Mecanismo de inteligência documental de código aberto em Rust que converte PDFs, arquivos do Office, digitalizações, áudio, URLs e código em Markdown limpo, tabelas e dados estruturados, com 15 bindings de linguagem, CLI, API REST e servidor MCP',
    ar: 'محرك مفتوح المصدر مكتوب بلغة Rust لذكاء المستندات، يحوّل ملفات PDF وOffice والمسوحات الضوئية والصوت وعناوين URL والشيفرة البرمجية إلى Markdown نظيف وجداول وبيانات منظمة، مع 15 ربطًا للغات وواجهة CLI وREST API وخادم MCP',
    ko: 'PDF, Office 파일, 스캔본, 오디오, URL, 코드를 깔끔한 Markdown, 표, 구조화된 데이터로 변환하는 오픈소스 Rust 문서 인텔리전스 엔진으로, 15개 언어 바인딩, CLI, REST API, MCP 서버를 제공',
  },
  reviewSlug: 'xberg-review', // dedicated PromptQuorum review - added 2026-10-30
  pqReview: { date: '2026-11-18', version: 'v1.4.1', versionSourceUrl: 'https://github.com/xberg-io/xberg/releases/tag/v1.4.1' },
  mcpSupport: true, // built-in MCP server per README and docs.xberg.io, verified 2026-10-30
  compare: { localLlm: true, ollama: true, mcp: true, inputFormats: 'PDF, Office, images, HTML, email, e-books', outputFormats: ['Text', 'Markdown', 'Djot', 'HTML', 'JSON', 'DocTags'], ocr: true, tableExtraction: true, languageBindings: 15 }, // document-parsing values verified 2026-11-15 against the raw README, see header
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // GitHub API: latest release v1.4.1 published 2026-11-16; last push 2026-11-18T04:18:57Z (whichever is newer), read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/xberg-io/xberg',
}
