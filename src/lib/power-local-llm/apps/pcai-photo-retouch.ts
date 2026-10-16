// Local AI App Directory — pcAI Photo Retouch (category: editing-upscaling; layer: mobile + desktop)
// Added 2026-10-16 at the operator's request (App Store listing id6751140211).
// Verified on 2026-10-16 against: the App Store listing on the German, US, Japanese, Brazilian, Korean, Spanish and French
// storefronts (title "Lokale KI Foto Retusche: pcAI" on /de, "Local AI Photo Retouch: pcAI" on /us /jp /br /kr /es /fr; developer
// "维 艾" / copyright "aiwei"; free with in-app purchases; v1.1.0 dated "20 Feb." (no year shown; version history 1.0.2 = 04.11.2025,
// so 20 Feb 2026, matching the privacy policy's "effective February 20, 2026"); iOS/iPadOS 16.0+, macOS 12.0+, visionOS 1.0+; 34.9 MB;
// English/German/Simplified Chinese; 4+; no ratings yet; developer-declared "no data collected", not verified by Apple), the developer's
// pages at apps.h53d.xyz (detail, support, policy; the github.io support/policy URLs linked from the App Store now only show a
// "moved" notice pointing there), and the developer's privacy policy ("does not collect, store, or transmit any personal data",
// "never upload your images", no advertising/analytics SDKs or third-party AI services).
// Per-storefront in-app purchase prices (Pro Light / Pro Infinity / Starry Night Style): US $0.99 / $3.99 / $1.99, DE+ES+FR EUR
// 0,99 / 3,99 / 1,99, JP JPY 150 / 600 / 300, BR R$ 6,90 / 24,90 / 12,90, KR KRW 1,100 / 5,500 / 3,300; the Chinese storefront
// returned 404 (app not offered there). The listing mentions subscription features but does not map them to the three purchases.
// The Core ML / Neural Engine claim comes from the developer's detail page; no model or architecture is named anywhere.
// No source repository or license text found. Name variants: DE storefront title, "Local AI Photo Retouch: pcAI", and the
// developer site's "pcAI Photo Retouch".

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pcai-photo-retouch',
  name: 'pcAI Photo Retouch',
  categories: ['editing-upscaling'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // developer-declared: on-device only, no uploads, works offline (listing + policy); not independently verified
  platforms: ['ios', 'mac'], // iPhone/iPad/Vision Pro run the iOS build; Mac App Store build needs macOS 12+
  worksWith: null,
  engine: 'builtin', // bundles its own on-device model run through Core ML / Neural Engine per the developer's detail page; model not named
  license: 'Not stated', // no repository or license text found
  price: 'freemium', // free to install; Pro Light, Pro Infinity and Starry Night Style are in-app purchases
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // only OS floors stated (iOS 16 / macOS 12); no RAM or chip requirement
  stars: null, // no public repository
  addedDate: '2026-10-16',
  status: 'listed',
  uses: ['image', 'phone'],
  url: 'apps.h53d.xyz', // developer's own site; the app page is storeLinks.web
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/id6751140211',
    web: 'https://apps.h53d.xyz/apps/pcai-photo-retouch/detail.html',
  },
  installEffort: 'installer',
  installEvidence:
    'App Store listing id6751140211 checked 2026-10-16 (de/us/jp/br/kr/es/fr storefronts): standard App Store install on iPhone, iPad, Mac and Apple Vision, 34.9 MB, v1.1.0; no terminal step.',
  tagline: {
    en: 'Free-to-install iPhone, iPad and Mac photo retouching app that restores old photos and applies art styles with an on-device AI; no update since February 2026',
    de: 'Kostenlos installierbare Foto-Retusche-App für iPhone, iPad und Mac, die alte Fotos restauriert und Kunststile mit einer KI auf dem Gerät anwendet; seit Februar 2026 ohne Update',
    fr: "Application de retouche photo pour iPhone, iPad et Mac, gratuite à installer, qui restaure les vieilles photos et applique des styles artistiques avec une IA sur l'appareil ; sans mise à jour depuis février 2026",
    ja: '端末内AIで古い写真の修復やアートスタイル変換を行う、無料でインストールできるiPhone・iPad・Mac向け写真レタッチアプリ。2026年2月以降は更新なし',
    zh: '可免费安装的iPhone、iPad和Mac照片修图应用，用设备端AI修复老照片并应用艺术风格；自2026年2月起未更新',
    es: 'App de retoque fotográfico para iPhone, iPad y Mac, gratuita de instalar, que restaura fotos antiguas y aplica estilos artísticos con una IA en el dispositivo; sin actualizaciones desde febrero de 2026',
    pt: 'App de retoque de fotos para iPhone, iPad e Mac, gratuito para instalar, que restaura fotos antigas e aplica estilos artísticos com uma IA no aparelho; sem atualização desde fevereiro de 2026',
    ar: 'تطبيق لتنقيح الصور على iPhone وiPad وMac، مجاني التثبيت، يرمّم الصور القديمة ويطبّق أنماطًا فنية بذكاء اصطناعي على الجهاز؛ دون تحديث منذ فبراير 2026',
    ko: '기기 내 AI로 오래된 사진을 복원하고 아트 스타일을 적용하는, 무료로 설치할 수 있는 iPhone·iPad·Mac 사진 보정 앱. 2026년 2월 이후 업데이트 없음',
  },
  lastVerifiedDate: '2026-10-16',
  lastUpstreamUpdate: '2026-02-20', // App Store version history (v1.1.0 "20 Feb."), year from the version list and the policy date, read 2026-10-16
  lastUpstreamUpdateSource: 'https://apps.apple.com/de/app/lokale-ki-foto-retusche-pcai/id6751140211',
  reviewSlug: 'pcai-photo-retouch-review',
  pqReview: {
    date: '2026-10-16',
    version: '1.1.0',
    versionSourceUrl: 'https://apps.apple.com/de/app/lokale-ki-foto-retusche-pcai/id6751140211',
  },
  verdict:
    'Best for iPhone and Mac owners who want a simple, offline photo-restoring and art-style app and accept a closed-source tool by one publisher; limited by no update since 20 February 2026, an unnamed model, in-app purchases whose contents the listing does not map, and no ratings yet',
}
