// Local AI App Directory — Ente Photos (layer: end-to-end encrypted photo backup with on-device face recognition and natural-language search)
// Added 2026-10-24 at the operator's request. No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-24 against: ente.com (homepage, plans, FAQ), ente.com/download (desktop v1.7.30), ente.com/privacy (last updated 2026-10-16),
// ente.com/architecture, the Ente Help pages (machine learning, magic search, face recognition, Detect Text, security and privacy FAQ — read from
// docs/docs/photos in the ente-io/ente repo), the source code on main (rust/crates/ml/src/models.rs and assets.rs: face detection/embedding, MobileCLIP S2,
// models downloaded from models.ente.com), GitHub Releases tag photos-v1.3.66 (published 2026-10-21), the App Store listing id1542026904
// (iTunes lookup API: v1.3.66, currentVersionReleaseDate 2026-10-21, first release 2020-12-02, free, iOS 15.1+, 242.6 MB, seller Ente Technologies, Inc.)
// and the Google Play listing io.ente.photos ("Updated on Oct 19, 2026").
// Last upstream update: 2026-10-21 (GitHub release photos-v1.3.66 / App Store v1.3.66) → NOT stale (3-month rule).
// Repo licence: AGPL-3.0 (GitHub API licence of the ente-io/ente monorepo; the desktop repo ente-io/photos-desktop is AGPL-3.0 too).
// `stars` stays null on purpose: the stars belong to the whole Ente monorepo (Photos, Auth, Locker, Ensu), not to Photos alone.
// Prices: free 10 GB; paid plans in USD as shown on ente.com (50 GB $2.49/month, 200 GB $4.99, 1000 GB $9.99, 2000 GB $19.99). Per-storefront App Store
// plan prices were NOT checked (in-app purchases are not in the iTunes lookup API) and nothing was FX-converted.
// Conflicts between sources, stated in the review rather than resolved: the homepage lists album sharing and public links in the free plan while the
// security FAQ says only paid plans can share albums; the privacy policy lists Anthropic, OpenAI and xAI under "Research and documentation" without saying
// what data they receive; the source code lists dog/cat face and body models that the help pages do not describe.
// Sibling product: Ensu (separate tile and review). On-device OCR ("Detect Text") is documented for the iOS and Android apps → compare.ocr = true.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ente-photos',
  name: 'Ente Photos',
  categories: ['vision-ocr'],
  interfaces: ['mobile', 'desktop', 'web'],
  locality: 'hybrid', // photos are stored end-to-end encrypted in Ente's cloud; face recognition, magic search and OCR run on the device (help pages, 2026-10-24)
  platforms: ['ios', 'android', 'mac', 'win', 'linux'], // plus a web app (photos.ente.com) that has no machine-learning features, not claimed as a platform here
  worksWith: ['Google Photos', 'Apple Photos', 'Amazon Photos'], // migration guides in the Ente Help pages
  engine: 'builtin', // face detection/embedding and MobileCLIP S2 ONNX models in the open-source code, downloaded in-app (about 300 MB per the help pages)
  license: 'AGPL-3.0', // repository licence of ente-io/ente per GitHub
  price: 'freemium', // 10 GB free; paid storage plans from $2.49/month on ente.com
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // no RAM requirement stated; help pages suggest disabling local indexing on phones with 4-6 GB RAM and large libraries
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['image', 'phone'],
  url: 'ente.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id1542026904',
    googlePlay: 'https://play.google.com/store/apps/details?id=io.ente.photos',
    github: 'https://github.com/ente-io/ente',
    web: 'https://ente.com',
  },
  installEffort: 'installer',
  installEvidence: 'ente.com/download and GitHub Releases checked 2026-10-24: App Store (id1542026904, iOS 15.1+), Google Play (io.ente.photos), F-Droid, ente-photos-v1.3.66.apk; desktop v1.7.30 ente-1.7.30-universal.dmg, ente-1.7.30.exe, .AppImage/.deb/.rpm and Flathub; machine-learning models download in-app after opt-in',
  tagline: {
    en: 'Open-source, end-to-end encrypted photo backup whose optional face recognition and natural-language search run on your phone or computer',
    de: 'Quelloffene, Ende-zu-Ende-verschlüsselte Foto-Sicherung, deren optionale Gesichtserkennung und Suche in natürlicher Sprache auf Smartphone oder Computer laufen',
    fr: 'Sauvegarde de photos open source et chiffrée de bout en bout, dont la reconnaissance faciale et la recherche en langage naturel, optionnelles, s\'exécutent sur votre téléphone ou ordinateur',
    ja: 'オープンソースのエンドツーエンド暗号化フォトバックアップ。任意で使える顔認識と自然言語検索は、スマートフォンやパソコン上で実行されます',
    zh: '开源的端到端加密照片备份应用，可选的人脸识别和自然语言搜索在手机或电脑上本地运行',
    es: 'Copia de seguridad de fotos de código abierto y cifrada de extremo a extremo, cuyo reconocimiento facial y búsqueda en lenguaje natural, opcionales, se ejecutan en tu móvil u ordenador',
    pt: 'Backup de fotos de código aberto e com criptografia de ponta a ponta, cujo reconhecimento facial e busca em linguagem natural, opcionais, rodam no seu celular ou computador',
    ar: 'نسخ احتياطي مفتوح المصدر للصور بتشفير من طرف إلى طرف، يعمل التعرف على الوجوه والبحث بلغة طبيعية فيه (وهما اختياريان) على هاتفك أو حاسوبك',
    ko: '오픈소스 종단 간 암호화 사진 백업 앱으로, 선택 기능인 얼굴 인식과 자연어 검색은 스마트폰이나 컴퓨터에서 실행됩니다',
  },
  reviewSlug: 'ente-photos-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.3.66',
    versionSourceUrl: 'https://github.com/ente-io/ente/releases/tag/photos-v1.3.66',
  },
  // Comparison attributes: each value taken from the project's own help pages on 2026-10-24; a missing key = not stated there, never false.
  compare: { ocr: true }, // Detect Text: on-device OCR on iOS and Android (help page "Detect Text (OCR)")
  verdict: 'Best for people who want an encrypted cloud photo library with optional face and natural-language search done on their own devices; limited by the need to back photos up to Ente first, a mobile-or-desktop-only AI layer, store prices and encryption claims PromptQuorum could not check, and no hands-on testing.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-21', // GitHub release photos-v1.3.66 published 2026-10-21T14:53Z; App Store v1.3.66 released 2026-10-21; read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/ente-io/ente/releases/tag/photos-v1.3.66',
}
