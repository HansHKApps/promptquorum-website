// Local AI App Directory — Nutrient (layer: commercial PDF SDK for viewing, editing, signing, OCR and data extraction)
// Added 2026-11-15. Facts read 2026-11-15 from nutrient.io, nutrient.io/sdk, and nutrient.io/legal. Not tested hands-on.
// WHAT: commercial multi-platform PDF SDK; iOS/Swift, Android/Java/Kotlin, .NET, Java, Python, Node.js, JavaScript/Web (WebAssembly),
// React Native, Flutter; also Document Engine (self-hosted Docker container). PDF in/out; OCR; signed documents; data extraction.
// MCP (2026-11-17): hosted MCP server (account needed) + Document Engine MCP server + local Web SDK docs MCP (guides/web/mcp-server, stdio, no account; does NOT parse docs).
// Qualified (account / docs-only) => `mcp` left OUT of compare; explained in the review.
// ALSO (2026-11-17): free PDF-to-Markdown CLI (github.com/PSPDFKit/pdf-to-markdown, npm @pspdfkit/pdf-to-markdown 0.6.0 2026-09-28, proprietary 'Nutrient PDF to Markdown License';
// Standard = free, offline; Vision = scans, needs sign-in, per page) and macOS app Nutrient Extract Studio (DMG, Apple silicon, macOS Tahoe 26.4+, HTTP 200 ~142 MB checked 2026-11-17).
// MAKER: Nutrient; primary legal entity at "4509 Creedmoor Road, Suite 503, Raleigh, NC 27612, USA" (legal page 2026-11-15);
// also Austria, France, UK entities listed on the same page.
// LICENSE: Commercial (proprietary, closed-source; no open-source repo).
// PRICE = paid: commercial license required; trial available.
// LOCALITY = hybrid: native SDKs fully local; Document Engine is self-hosted Docker; also optional cloud API.
// HARDWARE: not stated.
// PLATFORMS: iOS, Android, Mac, Windows, Linux (via Document Engine Docker), plus Web (WebAssembly); SDK docs 2026-11-15.
// RELEASES (re-verified 2026-11-17 from the official per-SDK changelogs, nutrient.io/guides/<sdk>/changelog.md): Java 2.1.14, .NET 14.4.12 and Python 1.0.14 on 2026-11-15;
// iOS 27.2.0 2026-11-11; Android 12.1.0 2026-11-10; Web SDK 1.25.0 2026-11-02 (= npm @nutrient-sdk/viewer, same date); Document Engine 1.20.0 2026-10-29; Node.js 1.3.0 2026-02-05;
// Flutter 6.0.0 2026-08-04; React Native 4.5.1 2026-08-31. pqReview.version = Web SDK 1.25.0 (flagship, dated); lastUpstreamUpdate = newest = 2026-11-15.
// HQ FLAG: hqCountry 'US' kept as set 2026-11-15 (legal page lists Nutrient, 4509 Creedmoor Road, Suite 503, Raleigh, NC 27612, USA first, representative Jonathan D. Rhyne).
// CONFLICT found 2026-11-17, OWNER DECISION PENDING: the same legal page also lists PSPDFKit GmbH d/b/a Nutrient, Kaiserstrasse 117/17, 1070 Vienna, Austria; the privacy policy says
// 'the controller is PSPDFKit GmbH, Kaiserstrasse 117/17, 1070 Vienna, Austria' (Nutrient API) and the CLI licence is 'between PSPDFKit GmbH, doing business as Nutrient' and you.
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from nutrient.io/sdk:
//   RE-VERIFIED 2026-11-17 (nutrient-review.ts is the source text):
//   inputFormats  'PDF, images, Office files'  <- CLI reads PDFs; Data Extraction API 'PDFs, scans, images, Office files, and Excel workbooks' (nutrient.io/llms.txt); Document Engine converts Office to PDF
//   outputFormats Markdown, JSON, Text, PDF    <- CLI guide: 'convert PDFs to Markdown or plain text'; Data Extraction: structured JSON; Document Engine OCR: searchable PDF/A
//   ocr true                                   <- guides/document-engine/ocr.md, guides/web/ocr.md
//   tableExtraction true                       <- CLI guide: 'Create Markdown with headings, lists, tables, and reading order.'
//   boundingBoxes omitted                      <- described for the Data Extraction product only (paid), not for the free CLI
//   languageBindings omitted                   <- vendor lists platforms, not a count of programming languages; any count would be our inference
//   mcp omitted                                <- qualified (account / docs-only), see MCP above
// verdict: omitted. stars: null (commercial, no open-source repo).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nutrient',
  name: 'Nutrient',
  categories: ['ocr-document-parsing'],
  interfaces: ['library'], // commercial SDK for embedding in apps; Document Engine is a self-hosted web service
  locality: 'hybrid', // native SDKs fully local; Document Engine is self-hosted Docker; also optional cloud API
  platforms: ['ios', 'android', 'mac', 'win', 'linux'], // iOS, Android, Mac, Windows, Linux (Docker); also Web (WebAssembly); SDK docs 2026-11-15
  worksWith: [],
  engine: 'library',
  license: 'Commercial', // proprietary, closed-source; commercial license required
  price: 'freemium', // SDKs by quote (30-day evaluation); cloud APIs usage-based with $5 free per month; CLI Standard mode free (nutrient.io/pricing, sdk/pricing, 2026-11-17)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // not stated
  stars: null, // commercial product; no open-source repo
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'nutrient.io',
  storeLinks: {
    web: 'https://www.nutrient.io',
  },
  installEffort: 'installer', // easiest official path = Nutrient Extract Studio DMG for Apple silicon Macs; every other route is terminal/developer setup
  installOn: ['mac'],
  installEvidence: 'nutrient.io/api/data-extraction-api/macos-desktop-app (read 2026-11-17): "Download the DMG installer, install the app, and sign in through the browser. A free Nutrient account is enough."; Apple silicon, macOS Tahoe 26.4 or later; DMG at extract-studio.cdn.nutrient.io returned HTTP 200 (~142 MB). Other routes: npm install -g @pspdfkit/pdf-to-markdown, SDK package managers, Document Engine container.',
  hqCountry: 'US', // OWNER DECISION 2026-11-18: sources conflict (impressum lists the US entity first; privacy policy and CLI licence name PSPDFKit GmbH d/b/a Nutrient, Vienna, Austria); owner chose US
  hqCountrySource: 'https://www.nutrient.io/legal/impressum/',
  tagline: {
    en: 'Commercial multi-platform PDF SDK for viewing, editing, signing, OCR and data extraction; supports iOS, Android, Web (WebAssembly), .NET, Java, Python, Node.js and self-hosted Document Engine deployment',
    de: 'Kommerzielles Multiplattform-PDF-SDK für Anzeige, Bearbeitung, Signierung, OCR und Datenextraktion; unterstützt iOS, Android, Web (WebAssembly), .NET, Java, Python, Node.js und selbst gehostetes Document Engine Deployment',
    fr: "SDK PDF commercial multiplateforme pour la visualisation, l\u2019édition, la signature, l\u2019OCR et l\u2019extraction de données\u00a0; prend en charge iOS, Android, Web (WebAssembly), .NET, Java, Python, Node.js et le déploiement Document Engine auto-hébergé",
    ja: '表示・編集・署名・OCR・データ抽出に対応する商用マルチプラットフォームPDF SDK。iOS・Android・Web（WebAssembly）・.NET・Java・Python・Node.jsとセルフホスト型Document Engineをサポート',
    zh: '支持 iOS、Android、Web（WebAssembly）、.NET、Java、Python、Node.js 及自托管 Document Engine 的商业多平台 PDF SDK，提供查看、编辑、签名、OCR 和数据提取功能',
    es: 'SDK PDF comercial multiplataforma para visualización, edición, firma, OCR y extracción de datos; compatible con iOS, Android, Web (WebAssembly), .NET, Java, Python, Node.js y despliegue auto-alojado de Document Engine',
    pt: 'SDK PDF comercial multiplataforma para visualização, edição, assinatura, OCR e extração de dados; suporta iOS, Android, Web (WebAssembly), .NET, Java, Python, Node.js e implantação auto-hospedada do Document Engine',
    ar: 'SDK PDF تجاري متعدد المنصات للعرض والتحرير والتوقيع وOCR واستخراج البيانات؛ يدعم iOS وAndroid وWeb (WebAssembly) و.NET وJava وPython وNode.js ونشر Document Engine الذاتي',
    ko: 'iOS·Android·Web(WebAssembly)·.NET·Java·Python·Node.js 및 자체 호스팅 Document Engine을 지원하는 상용 멀티플랫폼 PDF SDK; 보기·편집·서명·OCR·데이터 추출 기능 제공',
  },
  reviewSlug: 'nutrient-review',
  pqReview: {
    date: '2026-11-17',
    version: '1.25.0',
    versionSourceUrl: 'https://www.nutrient.io/guides/web/changelog/',
  },
  compare: { inputFormats: 'PDF, images, Office files', outputFormats: ['Markdown', 'JSON', 'Text', 'PDF'], ocr: true, tableExtraction: true }, // re-verified 2026-11-17, see header
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-15', // official changelogs: Java 2.1.14, .NET 14.4.12, Python 1.0.14 all 15 Nov 2026 (read 2026-11-17)
  lastUpstreamUpdateSource: 'https://www.nutrient.io/guides/java/changelog/',
}
