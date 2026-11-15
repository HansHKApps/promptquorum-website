// Local AI App Directory — OpenDataLoader PDF (layer: document parsing / extraction library for RAG and LLM pipelines, plus PDF accessibility auto-tagging)
// Added 2026-11-15 on request. Facts read 2026-11-15 from opendataloader.org (home), github.com/opendataloader-project/opendataloader-pdf
// (README, LICENSE, GitHub API repo + releases/latest, .github/workflows) and PyPI (opendataloader-pdf 2.5.22). Not tested hands-on.
// WHAT: open-source PDF parser; PDF in, JSON (bounding boxes, heading levels, fonts) / Markdown / HTML / annotated PDF out; library + CLI + SDKs
// (Python, Node.js, Java). Not a desktop app, not hosted. PDF only: Word/Excel/PowerPoint are not processed.
// MAKER: GitHub org opendataloader-project, footer "© 2026 OpenDataLoader". Accessibility work "developed with Hancom and Dual Lab (veraPDF
// developers)" per the homepage. NOT "made by Hancom". Which legal entity maintains the project is UNVERIFIED.
// LICENSE: Apache-2.0 (GitHub API spdx_id + LICENSE file); releases before 2.0 were MPL 2.0 (README).
// PRICE = freemium: Core, Audit and Auto-tag are free; an enterprise tier (PDF/UA export, visual editing studio) has no published price
// (requests via opendataloader.org/contact). "Hancom Data Loader" is a separate planned enterprise product ("Coming Soon"), not part of the core.
// LOCALITY = local: README "100% locally", "No API calls, no data transmission"; homepage "No API keys, no cloud". Caveat: hybrid mode
// (AI backend, OCR) starts a local HybridServer on 127.0.0.1 but can be pointed at any remote URL with --hybrid-url, then data goes where the
// user points it. Telemetry: no statement found = UNVERIFIED.
// HARDWARE: README says no GPU required (CPU is the baseline); NVIDIA Nemotron OCR is an optional Linux x86_64 + CUDA extra. No RAM figure published.
// PLATFORMS: the project publishes no OS list. Verified: PyPI classifier "Operating System :: OS Independent", runtime = Java 11+ JVM + Python 3.11+
// (PyPI requires_python >=3.11; README says 3.11+; the quick-start page says 3.10+, a published conflict), CI workflows all run on ubuntu-latest.
// Apple Vision OCR (ocrmac) is macOS-only. mac/win/linux are listed on the strength of the JVM/Python packaging, not on a stated support matrix.
// RELEASES: v2.5.22 published 2026-11-12 (GitHub Releases API; PyPI uploaded the same day); cadence about every 2-4 days; repo pushed 2026-11-14.
// Release assets: only opendataloader-pdf-cli-2.5.22.zip, no GUI installer, no store listing. Docker is shown on the homepage but not in the
// README and no image was found: UNVERIFIED, not stated.
// HQ FLAG: OWNER DECISION 2026-11-15, hqCountry 'KR' (South Korea), based on the privacy policy linked in the site footer
// (accounts.hancom.com/policy/privacy/current/en, renders only with JavaScript): its "Rights and Interests Infringement and Protection" section
// refers users to Korean bodies (Personal Information Dispute Mediation Committee kopico.go.kr, KISA privacy.kisa.or.kr, Supreme Prosecutors'
// Office, National Police Agency cyber bureau).
// BENCHMARKS: homepage/README claim "#1 in benchmarks" (self-published, opendataloader-bench; the #1 claim holds only for hybrid mode).
// Never presented as a PromptQuorum measurement.
// compare/verdict: omitted on purpose. There is no comparison segment for ocr-document-parsing (compare-schema.ts) and the tile is not placed in
// rag-frameworks, so no category comparison attributes apply. Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'opendataloader-pdf',
  name: 'OpenDataLoader PDF',
  categories: ['ocr-document-parsing', 'sdks-libraries'],
  interfaces: ['library', 'cli'], // Python/Node.js/Java SDKs plus the `opendataloader-pdf` CLI installed by the pip package, README 2026-11-15
  locality: 'local', // parsing runs on the local JVM, README "100% locally / no data transmission"; hybrid mode can be pointed at a remote --hybrid-url by the user
  platforms: ['linux', 'mac', 'win'], // not stated by the project; PyPI "OS Independent" + JVM/Python runtime, CI on Ubuntu only (see header), checked 2026-11-15
  worksWith: ['LangChain', 'Docling', 'veraPDF'], // README: langchain-opendataloader-pdf loader; hybrid default backend docling-fast; auto-tagging validated with veraPDF
  engine: 'library',
  license: 'Apache-2.0', // GitHub API spdx_id + LICENSE file, 2026-11-15 (versions before 2.0 were MPL 2.0)
  price: 'freemium', // Core/Audit/Auto-tag free; enterprise tier (PDF/UA export, editing studio) unpriced, contact form only
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // README: no GPU required; no RAM figure published; optional Nemotron OCR needs Linux x86_64 + CUDA
  stars: 30304, // github.com/opendataloader-project/opendataloader-pdf, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'opendataloader.org',
  storeLinks: {
    web: 'https://opendataloader.org',
    github: 'https://github.com/opendataloader-project/opendataloader-pdf',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README (read 2026-11-15): "Requires Java 11+ and Python 3.11+", run `java -version` first and install a JDK from Adoptium if missing, then `pip install -U opendataloader-pdf` (also installs the opendataloader-pdf CLI); other routes npm @opendataloader/pdf and Maven org.opendataloader:opendataloader-pdf-core; hybrid mode needs `pip install "opendataloader-pdf[hybrid]"` and a model download. GitHub Releases v2.5.22 ships only opendataloader-pdf-cli-2.5.22.zip, no GUI installer, no store listing',
  hqCountry: 'KR', // owner decision 2026-11-15, see header
  hqCountrySource: 'https://accounts.hancom.com/policy/privacy/current/en',
  tagline: {
    en: 'Open-source PDF parser that turns PDFs into structured JSON, Markdown and HTML with bounding boxes for RAG and LLM pipelines, runs locally and also auto-tags PDFs for accessibility',
    de: 'Quelloffener PDF-Parser, der PDFs in strukturiertes JSON, Markdown und HTML mit Begrenzungsrahmen für RAG- und LLM-Pipelines umwandelt, lokal läuft und PDFs auch für die Barrierefreiheit automatisch taggt',
    fr: 'Analyseur PDF open source qui convertit les PDF en JSON structuré, Markdown et HTML avec cadres de délimitation pour les pipelines RAG et LLM, s’exécute en local et balise aussi automatiquement les PDF pour l’accessibilité',
    ja: 'PDFをRAGやLLMパイプライン向けに、バウンディングボックス付きの構造化JSON・Markdown・HTMLへ変換するオープンソースのPDFパーサー。ローカルで動作し、アクセシビリティ用のPDF自動タグ付けにも対応',
    zh: '开源 PDF 解析器，可将 PDF 转换为带边界框的结构化 JSON、Markdown 和 HTML，供 RAG 与 LLM 管道使用，在本地运行，还能为 PDF 自动添加无障碍标签',
    es: 'Analizador de PDF de código abierto que convierte los PDF en JSON estructurado, Markdown y HTML con cuadros delimitadores para pipelines de RAG y LLM, se ejecuta en local y además etiqueta automáticamente los PDF para la accesibilidad',
    pt: 'Analisador de PDF de código aberto que converte PDFs em JSON estruturado, Markdown e HTML com caixas delimitadoras para pipelines de RAG e LLM, roda localmente e também etiqueta automaticamente PDFs para acessibilidade',
    ar: 'محلّل PDF مفتوح المصدر يحوّل ملفات PDF إلى JSON منظم وMarkdown وHTML مع مربعات إحاطة لخطوط RAG وLLM، ويعمل محليًا، كما يضيف وسوم إمكانية الوصول إلى ملفات PDF تلقائيًا',
    ko: 'RAG 및 LLM 파이프라인용으로 PDF를 경계 상자가 포함된 구조화 JSON, Markdown, HTML로 변환하는 오픈소스 PDF 파서로, 로컬에서 실행되며 접근성을 위한 PDF 자동 태깅도 지원',
  },
  reviewSlug: 'opendataloader-pdf-review',
  pqReview: {
    date: '2026-11-15',
    version: '2.5.22',
    versionSourceUrl: 'https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22',
  },
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-14', // GitHub API: pushed_at 2026-11-14T21:11Z (latest release v2.5.22 on 2026-11-12), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/opendataloader-project/opendataloader-pdf',
}
