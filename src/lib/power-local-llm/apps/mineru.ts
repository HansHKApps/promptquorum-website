// Local AI App Directory — MinerU (layer: document parsing / extraction library for RAG and LLM pipelines)
// Added 2026-11-15. Facts read 2026-11-15 from github.com/opendatalab/MinerU (README, LICENSE.md, GitHub API repo + releases).
// Not tested hands-on.
// WHAT: source-available document parser by OpenDataLab; PDF, DOCX, PPTX, XLSX, images, EPUB, HTML/MHTML, RTF, OFD,
// ODT/ODS/ODP, CSV/TSV in; Markdown / HTML / LaTeX / DOCX / EPUB / PDF out; cross-page table merging, bounding boxes, OCR.
// MCP: MinerU has an "agent skill" system but no explicit MCP protocol; mcp omitted from compare.
// MAKER: OpenDataLab (Shanghai AI Lab). No primary-source privacy policy with country confirmed at time of review — hqCountry left unset.
// LICENSE: MinerU Open Source License (LICENSE.md, re-read 2026-11-16): "licensed under Apache License 2.0 and subject to the additional terms below".
// Separate commercial licence required if you and your affiliates exceed 100 million MAU or USD 20 million total monthly revenue;
// online services built on MinerU must clearly indicate MinerU is used; non-compliance terminates the licence. Not plain Apache-2.0.
// PRICE = free below those thresholds: public source, no paid tier announced.
// LOCALITY = local: default is local; remote/cloud mode requires explicit config.
// HARDWARE: no RAM/VRAM figure in README; GPU auto-detected (Intel/AMD/NVIDIA/Apple Silicon), ~2–3× CPU speed; GPU optional.
// PLATFORMS: Python 3.11–3.14, x86_64 and arm64; mac/linux/win via PyPI; README 2026-11-15.
// RELEASES: tag 'mineru-4.2.2-released' → version v4.2.2, published 2026-11-13; repo pushed 2026-11-13.
// HQ FLAG: hqCountry unset — maintainer org opendatalab = Shanghai AI Lab (China = CN), but no primary-source privacy policy URL
// confirmed with country statement at time of review; left unset per owner rule 2026-11-15.
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from README:
//   inputFormats  'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images'
//   outputFormats 'Markdown', 'HTML', 'LaTeX', 'DOCX', 'EPUB'
//   ocr true       <- README: model-based OCR for scanned PDFs and images
//   tableExtraction true <- README: "cross-page table merging"
//   boundingBoxes true   <- README: "block-level locators for citation"
//   languageBindings 1   <- Python SDK; also HTTP API available (not a separate language binding)
// verdict: omitted (the review carries the verdict). Stars: GitHub API 2026-11-15 (see `stars`); never typed into article text (starsFor).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mineru',
  name: 'MinerU',
  categories: ['ocr-document-parsing'],
  interfaces: ['library', 'cli'], // pip install mineru installs Python SDK and CLI; HTTP API also available, README 2026-11-15
  locality: 'local', // default is local; remote/cloud requires explicit config
  platforms: ['linux', 'mac', 'win'], // Python 3.11–3.14, x86_64 and arm64, PyPI; README 2026-11-15
  worksWith: [],
  engine: 'library',
  license: 'MinerU Open Source License', // Apache 2.0-based with additional terms (LICENSE.md): commercial thresholds + attribution for online services
  price: 'free', // free below the licence thresholds; no paid tier
  hardware: { ramGb: null, vramGb: null, cpuOnly: false }, // no RAM/VRAM stated; GPU optional (auto-detected on Intel/AMD/NVIDIA/Apple Silicon)
  stars: 83699, // github.com/opendatalab/MinerU, GitHub API 2026-11-15
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'opendatalab.com',
  storeLinks: {
    web: 'https://opendatalab.com',
    github: 'https://github.com/opendatalab/MinerU',
  },
  installEffort: 'one-command',
  installEvidence: 'README (read 2026-11-15): pip install mineru; Python 3.11–3.14 required; virtual environment recommended. README does not describe a GUI installer.',
  tagline: {
    en: 'Document parser with public source code that converts PDF, DOCX, PPTX, EPUB, HTML and images into Markdown, HTML and LaTeX with cross-page table merging and OCR; supports GPU acceleration on all major platforms',
    de: 'Dokumenten-Parser mit einsehbarem Quellcode, der PDF, DOCX, PPTX, EPUB, HTML und Bilder in Markdown, HTML und LaTeX umwandelt; unterstützt seitenübergreifende Tabellenzusammenführung, OCR und GPU-Beschleunigung auf allen Hauptplattformen',
    fr: "Analyseur de documents au code source public qui convertit PDF, DOCX, PPTX, EPUB, HTML et images en Markdown, HTML et LaTeX avec fusion de tableaux inter-pages et OCR\u00a0; prend en charge l\u2019accélération GPU sur toutes les plateformes principales",
    ja: 'PDF・DOCX・PPTX・EPUB・HTML・画像をMarkdown・HTML・LaTeXに変換するソースコード公開のドキュメントパーサー。ページをまたぐ表の結合とOCRに対応し、主要プラットフォームでGPUアクセラレーションをサポート',
    zh: '源码公开的文档解析器，可将 PDF、DOCX、PPTX、EPUB、HTML 和图片转为 Markdown、HTML 和 LaTeX，支持跨页表格合并和 OCR，在所有主流平台上支持 GPU 加速',
    es: 'Analizador de documentos con código fuente público que convierte PDF, DOCX, PPTX, EPUB, HTML e imágenes a Markdown, HTML y LaTeX con fusión de tablas entre páginas y OCR; admite aceleración GPU en todas las plataformas principales',
    pt: 'Analisador de documentos com código-fonte público que converte PDF, DOCX, PPTX, EPUB, HTML e imagens em Markdown, HTML e LaTeX com fusão de tabelas entre páginas e OCR; suporta aceleração GPU em todas as principais plataformas',
    ar: 'محلّل مستندات بشيفرة مصدرية متاحة يحوّل PDF وDOCX وPPTX وEPUB وHTML والصور إلى Markdown وHTML وLaTeX مع دمج الجداول عبر الصفحات وOCR؛ يدعم تسريع GPU على جميع المنصات الرئيسية',
    ko: 'PDF·DOCX·PPTX·EPUB·HTML·이미지를 Markdown·HTML·LaTeX으로 변환하는 소스 공개 문서 파서; 페이지 걸친 표 병합 및 OCR 지원, 모든 주요 플랫폼에서 GPU 가속 지원',
  },
  reviewSlug: 'mineru-review',
  pqReview: {
    date: '2026-11-15',
    version: 'v4.2.2',
    versionSourceUrl: 'https://github.com/opendatalab/MinerU/releases/tag/mineru-4.2.2-released',
  },
  compare: { inputFormats: 'PDF, DOCX, PPTX, XLSX, HTML, EPUB, images', outputFormats: ['Markdown', 'HTML', 'LaTeX', 'DOCX', 'EPUB'], ocr: true, tableExtraction: true, boundingBoxes: true, languageBindings: 1 }, // verified 2026-11-15 from README, see header
  lastVerifiedDate: '2026-11-15',
  lastUpstreamUpdate: '2026-11-13', // GitHub API: pushed_at 2026-11-13 (latest release v4.2.2 on 2026-11-13), read 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/opendatalab/MinerU',
}
