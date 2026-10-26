// Local AI App Directory — Laria (LARIA - Local AI Assistant) (layer: mobile / Android)
// Added 2026-10-26 on request (Google Play link com.mick.genai.laria). Verified on 2026-10-26 against: the Google Play listing
// (developer "MiCK Software", France; "Updated on Oct 23, 2026"; 1K+ downloads; 2.9 stars from 89 reviews; Teen rating
// "Diverse Content: Discretion Advised"; Productivity; paid install button $4.99 on the US storefront; Data safety "No data
// collected", data not encrypted, data cannot be deleted, and a line saying the app may share Location with third parties —
// contradicts the other lines, reported as-is in the review), the developer's own product page mick-software.com/main/laria.html
// (model zoo, endpoints) and the developer's privacy notice mick-software.com/main/privacy-notice.html ("no data is collected when
// using a local model"). No source repository found => closed source. The Play web page shows no version number, so `pqReview`
// is NOT set (nothing verifiable to put in `version`). The embedded Play page data shows API level 27 / "8.1" as the minimum
// Android version; the visible page text does not state it, so the review does not repeat it.
// Storefront prices read 2026-10-26 via Play JSON-LD with hl/gl set: US $4.99, DE 4.49 EUR, FR 2.90 EUR, ES 2.90 EUR, JP 790 JPY,
// BR R$ 10,99, KR 1,200 KRW, SA 16 SAR (ZH/AR text uses the US USD price per docs/geo-translation.md).
// Last upstream update 2026-10-23 (3 days before today) => no stale warning.
// Not hands-on tested by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'laria',
  name: 'Laria',
  categories: ['general-chat-clients', 'image-generation'],
  interfaces: ['mobile'],
  locality: 'hybrid', // listing + developer privacy notice: downloadable local models run on the phone (no data collected with a local model); optional cloud providers and custom endpoints send prompts out
  platforms: ['android'], // Google Play only; no iOS or desktop build found on the developer's site
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'OpenAI-compatible servers', 'OpenRouter'], // endpoint list from the developer's product page (also Gemini, OpenAI, Anthropic, xAI, vLLM, LocalAI, Home Assistant, OpenClaw)
  engine: 'both', // downloadable on-device models (model zoo with LiteRT, ONNX and GGUF builds named by the developer) plus optional online providers and private endpoints
  license: 'Closed source', // no public source repository found
  price: 'paid', // $4.99 on the US Play storefront (paid install, no free tier shown); in-app purchases or ads are not labelled on the listing
  hardware: null, // no RAM/storage requirement stated; the listing says performance depends on the device
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['phone', 'chat', 'image', 'audio'],
  url: 'mick-software.com/main/laria.html', // developer's official product page; Play listing is in storeLinks
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.mick.genai.laria',
    web: 'https://mick-software.com/main/laria.html',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.mick.genai.laria (paid install, $4.99 US storefront, updated 2026-10-23), developer page mick-software.com/main/laria.html "Download on Play Store", read 2026-10-26',
  installOn: ['android'],
  tagline: {
    en: 'Paid Android assistant with downloadable on-device models, customizable AI identities, image tools and optional cloud providers',
    de: 'Kostenpflichtiger Android-Assistent mit herunterladbaren On-Device-Modellen, anpassbaren KI-Identitäten, Bildwerkzeugen und optionalen Cloud-Anbietern',
    fr: 'Assistant Android payant avec modèles locaux téléchargeables, identités IA personnalisables, outils d’image et fournisseurs cloud optionnels',
    ja: 'ダウンロード可能なオンデバイスモデル、カスタマイズ可能なAIアイデンティティ、画像ツール、任意のクラウドプロバイダーを備えた有料のAndroidアシスタント',
    zh: '付费 Android 助手，支持可下载的本地模型、可自定义的 AI 身份、图像工具和可选的云端服务商',
    es: 'Asistente de pago para Android con modelos locales descargables, identidades de IA personalizables, herramientas de imagen y proveedores en la nube opcionales',
    pt: 'Assistente pago para Android com modelos locais baixáveis, identidades de IA personalizáveis, ferramentas de imagem e provedores na nuvem opcionais',
    ar: 'مساعد مدفوع لنظام Android مع نماذج محلية قابلة للتنزيل وهويات ذكاء اصطناعي قابلة للتخصيص وأدوات للصور ومزودين سحابيين اختياريين',
    ko: '다운로드 가능한 온디바이스 모델, 맞춤형 AI 아이덴티티, 이미지 도구, 선택형 클라우드 제공업체를 갖춘 유료 Android 어시스턴트',
  },
  // Comparison attributes (mobile-chat segment), read from the Play description and developer page on 2026-10-26:
  // offline = "Private offline AI chat" with downloadable local models; modelDownloads = "local model downloads" managed in-app;
  // visionInput = attached images for compatible multimodal models; voice = voice settings / TTS per identity.
  // importModels is not stated — left unset, never false.
  compare: { offline: true, modelDownloads: true, visionInput: true, voice: true },
  reviewSlug: 'laria-review',
  verdict: 'Worth a look for Android users who want a paid, recently updated assistant that mixes downloadable on-device models with optional cloud providers, and who accept a closed-source app with a low user rating (2.9 from 89 reviews) and crash reports on some phones.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-23', // Google Play "Updated on Oct 23, 2026"
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.mick.genai.laria',
}
