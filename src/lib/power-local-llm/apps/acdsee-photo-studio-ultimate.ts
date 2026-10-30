// Local AI App Directory — ACDSee Photo Studio Ultimate 2027: Windows photo manager and editor; most AI features run on your PC, the four generative tools use ACDSee's cloud
// (layer: desktop app, Images & Video / Editing & upscaling + Vision & OCR)
// Added 2026-10-30 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-30 against: acdsee.com/en/photo-studio/AI ("The core AI-driven features in ACDSee operate locally"; AI Keywords, Face Detection and Recognition, Image Similarity,
// Super-Resolution, Denoise, Sky Replacement, Face Edit, AI masking, AI Actions are local; "Generative AI features use cloud processing": AI Image Generation, Generative Fill, Generative Edit,
// AI Remove; cloud prompts/images "encrypted" and not stored per that page), acdsee.com/en/products/photo-studio-ultimate/ (build 20.0.0.4660, 2026/09/16, 778 MB, Windows 10 64-bit / 11,
// 8 GB RAM min / 16 GB rec, DirectX 12 GPU with 2 GB VRAM min / 4 GB rec, 5 GB disk, activation needs email + internet, Mac not supported, 30-day money-back guarantee, loyalty discount),
// .../buy/ ($179.99 perpetual licence, 1 device, free updates; ACDSee 365 Complete $9.99/month or $99.99/year, up to 5 devices, personal use) and the German/French buy pages (209,99 EUR incl. VAT),
// acdsee.com/en/free-trials/ (15-day trial), .../thank-you/ (2,000 AI credits mentioned for the trial), the release notes page acuw20en (single entry: build 20.0.0.4660, 2026/09/16),
// acdsee.com/en/privacy-policy/ (dated 19 January 2026; licence/update connection data to ACDInTouch/acdID; crash data kept up to 30 days; no statement about photo uploads) and the
// Fstoppers launch article of 2026-09-21 (CTO: every other AI feature runs locally; generative requests go through ACDSee servers and are deleted a week later; says the price includes 20,000 credits).
// Last upstream update: 2026-09-16 (build 20.0.0.4660 release notes) -> 44 days before 2026-10-30 -> NOT stale (3-month rule); crosses 90 days on 2026-12-15.
// Not verified and NOT claimed: whether the app works offline after activation, which AI models are used, speed/quality, the software's interface languages, credit price per generative operation
// (the Fstoppers "20,000 credits included" conflicts with a third-party price tracker saying the bonus ended with the presale; the buy page lists no credits), "never stored" (AI page) vs "deleted after a week" (Fstoppers).
// Prices: USD from the English store; EUR 209.99 from the German and French stores. The Japanese and Spanish storefronts showed only the 2026 edition, so no local figure is quoted for them. No affiliate links.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'acdsee-photo-studio-ultimate',
  name: 'ACDSee Photo Studio Ultimate 2027',
  categories: ['editing-upscaling', 'vision-ocr'],
  interfaces: ['desktop'], // Windows desktop program; a separate product, Photo Studio for Mac, exists
  locality: 'hybrid', // ACDSee: core AI features run locally; AI Image Generation, Generative Fill, Generative Edit and AI Remove use ACDSee's cloud
  platforms: ['win'], // Windows 10 (64-bit) and Windows 11; Mac not supported by this product (product page, 2026-10-30)
  worksWith: ['Windows 10', 'Windows 11', 'ACDSee Mobile Sync (iPhone, Android)', 'ACDSee 365 Cloud'], // product page
  engine: 'builtin', // the AI ships inside the program; ACDSee does not name the models
  license: 'Closed source', // proprietary commercial software
  price: 'paid', // perpetual licence $179.99 (EUR 209.99 incl. VAT on the DE/FR stores) or the ACDSee 365 subscription; 15-day trial
  hardware: { ramGb: 8, vramGb: 2, cpuOnly: false }, // product page: 8 GB RAM minimum (16 GB recommended), DirectX 12 GPU with 2 GB VRAM minimum (4 GB recommended)
  stars: null, // no public repository
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image'],
  url: 'acdsee.com',
  storeLinks: {
    web: 'https://www.acdsee.com/en/products/photo-studio-ultimate/',
  },
  installEffort: 'installer',
  installOn: ['win'],
  installEvidence: 'acdsee.com product page and release notes checked 2026-10-30: a Windows .exe installer (acdsee-photo-studio-ultimate-2027-0-0-4660-win-en.exe, 778 MB, build 20.0.0.4660 dated 2026/09/16) plus a 15-day trial download; activation needs a valid email address and an internet connection; no Mac or Linux build of this product',
  tagline: {
    en: 'Windows photo manager and RAW editor whose face detection, keywording, masking and upscaling run on your PC, while the four generative tools use ACDSee\'s cloud; perpetual licence, 15-day trial',
    de: 'Foto-Manager und RAW-Editor für Windows: Gesichtserkennung, Verschlagwortung, Masken und Hochskalierung laufen auf Ihrem PC, die vier generativen Werkzeuge nutzen die Cloud von ACDSee; Dauerlizenz, 15 Tage testen',
    fr: 'Gestionnaire de photos et éditeur RAW pour Windows : détection des visages, mots-clés, masques et agrandissement s’exécutent sur votre PC, tandis que les quatre outils génératifs passent par le cloud d’ACDSee ; licence perpétuelle, essai de 15 jours',
    ja: 'Windows向けの写真管理・RAW編集ソフト。顔検出、キーワード付け、マスク、拡大はお使いのPC上で動作し、生成AIの4機能はACDSeeのクラウドを使用します。永続ライセンスで15日間の試用版があります',
    zh: '适用于 Windows 的照片管理与 RAW 编辑软件，人脸检测、关键词、蒙版和放大在你的电脑上运行，四项生成式工具则使用 ACDSee 的云端；永久许可，提供 15 天试用',
    es: 'Gestor de fotos y editor RAW para Windows: la detección de caras, las palabras clave, las máscaras y el escalado se ejecutan en tu PC, mientras que las cuatro herramientas generativas usan la nube de ACDSee; licencia perpetua y prueba de 15 días',
    pt: 'Gerenciador de fotos e editor RAW para Windows: detecção de rostos, palavras-chave, máscaras e ampliação rodam no seu PC, enquanto as quatro ferramentas generativas usam a nuvem da ACDSee; licença perpétua e teste de 15 dias',
    ar: 'برنامج لإدارة الصور ومحرر RAW على Windows: يعمل اكتشاف الوجوه والكلمات المفتاحية والأقنعة والتكبير على حاسوبك، بينما تستخدم أدوات التوليد الأربع سحابة ACDSee؛ ترخيص دائم وتجربة 15 يومًا',
    ko: 'Windows용 사진 관리·RAW 편집 소프트웨어로, 얼굴 감지·키워드·마스크·확대는 내 PC에서 실행되고 생성형 도구 4가지는 ACDSee 클라우드를 사용합니다. 영구 라이선스에 15일 체험판을 제공합니다',
  },
  reviewSlug: 'acdsee-photo-studio-ultimate-review',
  pqReview: {
    date: '2026-10-30',
    version: '20.0.0.4660', // ACDSee Photo Studio Ultimate 2027, release notes entry dated 2026/09/16
    versionSourceUrl: 'https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/',
  },
  verdict:
    'Best for Windows photographers who want one program for cataloguing, RAW editing and layers with AI keywording, face recognition, masking and upscaling that ACDSee says run on the PC, and who accept a perpetual licence at $179.99. Limits: closed source, Windows only, activation needs an email address and internet, the four generative tools (image generation, Generative Fill, Generative Edit, AI Remove) use ACDSee\'s cloud, credit terms are unclear, and PromptQuorum did not test anything hands-on.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-09-16', // release notes, build 20.0.0.4660 (single entry), read 2026-10-30
  lastUpstreamUpdateSource: 'https://www.acdsee.com/en/support/photo-studio-ultimate/release-notes/acuw20en/',
}
