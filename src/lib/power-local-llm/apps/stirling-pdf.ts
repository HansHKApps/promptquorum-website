// Local AI App Directory — Stirling PDF: open-core PDF toolkit (desktop app, self-hosted server, API)
// Added 2026-11-16 from an EXTERNAL research package (app_research.py, research-2026-11-16/packages/stirling-pdf), accepted as is for a process test.
// Package facts (maker pages, GitHub, search notes) were NOT re-verified by PromptQuorum in this run, except where noted below.
// Package last update: 2026-11-15 (GitHub last commit); latest release 3.3.0 dated 2026-11-05. 3-month stale warning is OFF.
// Licence: MIT with exceptions (LICENSE says app/proprietary/, app/saas/ and engine/ carry separate licences; the engine/ clause was truncated in the package).
// Not verified in the package: price amounts/tiers, RAM/GPU/disk/Java requirements, AI model + OCR engine, telemetry in the current version, account requirement, hosted service.
// Mapping notes (package -> ToolRecord): categories/platforms were free text in the package and are mapped by hand; interfaces, locality, engine, worksWith, uses and hardware were
// not in the package and are the minimum honest values (see inline comments).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stirling-pdf',
  name: 'Stirling PDF',
  categories: ['ocr-document-parsing'], // package: "PDF editor", "Document processing", "Self-hosted" (free text) -> closest repo key
  interfaces: ['desktop', 'web'], // not in package; desktop installers + browser UI served by the self-hosted server
  locality: 'local', // maker claim only: editor runs on your machine or server; AI-feature data flow not documented (package: unverified)
  platforms: ['win', 'mac', 'linux', 'selfhosted', 'web'], // package: Windows, macOS, Linux, Docker, Kubernetes, Web (self-hosted)
  worksWith: [], // not in package
  engine: 'builtin', // not in package; ships its own processing engine
  license: 'MIT with exceptions (open-core; some directories under separate licenses)',
  price: 'freemium', // package price.model "open-core": free for individual use per the site, paid Server Plan / Enterprise with no published prices
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // package: RAM, GPU, disk, Java version not stated
  stars: 96675, // package value; refresh with npm run refresh-app-stars
  addedDate: '2026-11-16',
  status: 'listed',
  uses: ['docs'], // not in package
  url: 'stirlingpdf.com',
  storeLinks: {
    web: 'https://www.stirlingpdf.com',
    github: 'https://github.com/Stirling-Tools/Stirling-PDF',
  },
  installEffort: 'installer',
  installEvidence: 'Package: release assets include .msi, setup .exe, .dmg, .deb, .rpm and .AppImage; Docker is a single command but needs Docker installed. Not re-checked by PromptQuorum.',
  installOn: ['win', 'mac', 'linux'],
  tagline: {
    en: 'Open-core PDF toolkit that edits, converts, OCRs, redacts and batch-processes PDFs on the desktop, on a self-hosted server or through an API.',
    de: "Open-Core-PDF-Toolkit, das PDFs auf dem Desktop, auf einem selbst gehosteten Server oder per API bearbeitet, konvertiert, per OCR erkennt, schwärzt und stapelweise verarbeitet.",
    fr: "Boîte à outils PDF open-core qui modifie, convertit, passe à l'OCR, caviarde et traite par lots des PDF sur poste, sur un serveur auto-hébergé ou via une API.",
    ja: "デスクトップ、セルフホストサーバー、APIで、PDFの編集、変換、OCR、墨消し、一括処理ができるオープンコアのPDFツールキットです。",
    zh: "开放核心 PDF 工具包，可在桌面、自托管服务器或通过 API 编辑、转换、OCR、涂黑脱敏并批量处理 PDF。",
    es: "Kit de herramientas PDF open-core que edita, convierte, aplica OCR, censura y procesa PDF por lotes en el escritorio, en un servidor autoalojado o mediante una API.",
    pt: "Kit de ferramentas PDF open-core que edita, converte, aplica OCR, oculta dados sensíveis (redação) e processa PDFs em lote no desktop, em um servidor próprio ou via API.",
    ar: "مجموعة أدوات PDF مفتوحة النواة (open-core) تحرّر ملفات PDF وتحوّلها وتطبّق عليها OCR وتحجب بياناتها وتعالجها دفعة واحدة على سطح المكتب أو على خادم مستضاف ذاتياً أو عبر API.",
    ko: "데스크톱, 셀프 호스팅 서버, API에서 PDF를 편집·변환·OCR·가림 처리·일괄 처리하는 오픈코어 PDF 툴킷입니다.",
  },
  hqCountry: 'US', // package value; source says "U.S. company" (see hqCountrySource), package also lists HQ as unverified (mailbox address only)
  hqCountrySource: 'https://www.stirling.com/legal/privacy-policy',
  reviewSlug: 'stirling-pdf-review',
  pqReview: {
    date: '2026-11-16',
    version: '3.3.0',
    versionSourceUrl: 'https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0',
  },
  lastVerifiedDate: '2026-11-16',
  lastUpstreamUpdate: '2026-11-15', // package: GitHub last commit
  lastUpstreamUpdateSource: 'https://github.com/Stirling-Tools/Stirling-PDF',
}
