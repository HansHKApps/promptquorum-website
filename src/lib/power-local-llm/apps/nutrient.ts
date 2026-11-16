// Local AI App Directory — Nutrient (layer: commercial PDF SDK for viewing, editing, signing, OCR and data extraction)
// Added 2026-11-15. Facts read 2026-11-15 from nutrient.io, nutrient.io/sdk, and nutrient.io/legal. Not tested hands-on.
// WHAT: commercial multi-platform PDF SDK; iOS/Swift, Android/Java/Kotlin, .NET, Java, Python, Node.js, JavaScript/Web (WebAssembly),
// React Native, Flutter; also Document Engine (self-hosted Docker container). PDF in/out; OCR; signed documents; data extraction.
// MCP: not mentioned in SDK docs or website, 2026-11-15.
// MAKER: Nutrient; primary legal entity at "4509 Creedmoor Road, Suite 503, Raleigh, NC 27612, USA" (legal page 2026-11-15);
// also Austria, France, UK entities listed on the same page.
// LICENSE: Commercial (proprietary, closed-source; no open-source repo).
// PRICE = paid: commercial license required; trial available.
// LOCALITY = hybrid: native SDKs fully local; Document Engine is self-hosted Docker; also optional cloud API.
// HARDWARE: not stated.
// PLATFORMS: iOS, Android, Mac, Windows, Linux (via Document Engine Docker), plus Web (WebAssembly); SDK docs 2026-11-15.
// RELEASES: commercial product; no public release dates found from a primary source — lastUpstreamUpdate left unset.
// HQ FLAG: hqCountry 'US' — primary entity at "4509 Creedmoor Road, Suite 503, Raleigh, NC 27612, USA" per nutrient.io/legal (2026-11-15).
// compare (added 2026-11-15, segment 'document-parsing' in compare-schema.ts), every value read 2026-11-15 from nutrient.io/sdk:
//   inputFormats  'PDF, DOCX, images'
//   outputFormats 'PDF', 'Data'
//   ocr true       <- OCR feature documented in SDK
//   tableExtraction and boundingBoxes omitted — not stated in primary sources
//   languageBindings 8 — iOS/Swift, Android/Java/Kotlin, .NET, Java, Python, Node.js, JavaScript/Web, React Native/Flutter
// No reviewSlug or pqReview — no review article written yet.
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
  price: 'paid', // commercial license required; trial available
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // not stated
  stars: null, // commercial product; no open-source repo
  addedDate: '2026-11-15',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'nutrient.io',
  storeLinks: {
    web: 'https://www.nutrient.io',
  },
  installEffort: 'terminal-setup', // install method varies by platform (npm, NuGet, CocoaPods, Maven, pip); Document Engine is Docker
  installEvidence: 'nutrient.io/sdk (read 2026-11-15): commercial SDK, install varies by platform (npm, NuGet, CocoaPods, Maven, pip). Document Engine is a Docker container. No single install command. Trial available.',
  hqCountry: 'US', // primary entity at "4509 Creedmoor Road, Suite 503, Raleigh, NC 27612, USA" per nutrient.io/legal (2026-11-15)
  hqCountrySource: 'https://www.nutrient.io/legal/',
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
  compare: { inputFormats: 'PDF, DOCX, images', outputFormats: ['PDF', 'Data'], ocr: true, languageBindings: 8 }, // verified 2026-11-15 from nutrient.io/sdk; tableExtraction and boundingBoxes not stated, see header
  lastVerifiedDate: '2026-11-15',
}
