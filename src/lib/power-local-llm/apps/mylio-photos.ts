// Local AI App Directory — Mylio Photos: multi-device photo, video and document library with SmartTag search, face recognition and OCR that Mylio says run on your own devices
// (layer: desktop + mobile app, Images & Video / Vision & OCR + Local search)
// Added 2026-10-30 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-30 against: mylio.com (home, download page: Mylio_x64.msix, Mylio_arm64.msix, Mylio.dmg, App Store and Google Play links; sign-up page: Individual/Duo/Family,
// "Free Trial + Gift", 30-day money-back guarantee), support.mylio.com/change-log-and-release-notes (page "Updated October 24, 2026"; 24.8 - 7905 Windows-only on 2026-10-08, 24.8 - 7904 on
// 2026-10-06, 7902 on 2026-08-11, 7901 on 2026-07-28; builds macOS/iOS 7904, Windows/Android 7905) and support.mylio.com/version-24-release-notes (Dynamic Search, SmartTags, "privately scanned on
// your own devices", OCR models in 24.7 build 7878, Learn Panel "GPT-powered chat", Mylio Drive+ powered by Backblaze and encrypted), the US App Store listing id908787435 (seller MyLo Development, LLC,
// v24.8.7904 "Oct 6", free with in-app purchases, 202.8 MB, iOS/iPadOS 13.0+, visionOS 1.0+, English only; "every one of our AI tools runs exclusively on your local devices"), the DE/ES/FR/JP/KR/BR
// storefronts (Mylio Premium monthly/yearly: US $25.00/$239.99, DE/ES/FR EUR 29,00/249,99, JP 4,000/40,000 yen, KR 33,000/349,000 won, BR R$ 129,90/R$ 1.199,90), the privacy policy
// (mylio.com/privacy, "last revised on, and effective as of, 14 May 2018", no AI wording), the 2023 launch release (news.mylio.com, 30 August 2023) and the 2024 price post (inspire.mylio.com).
// Last upstream update: 2026-10-08 (Windows 7905 / Android 7905 per support.mylio.com change log) -> 22 days before 2026-10-30 -> NOT stale (3-month rule).
// Locality is NOT verified, hence 'hybrid': AI is stated local by the vendor (App Store + home page), but the Learn Panel GPT chat has no stated location and Mylio Drive+ / Shared Albums use Mylio
// servers. A third-party claim that search is "powered by Gemini" appears on no Mylio page and is NOT used. The Google Play listing could not be read (data-safety label and Android prices not covered).
// Free plan: release notes mention a "Free Mylio Photos plan", the current sign-up page lists only paid plans with a free trial -> price 'freemium' with the scope stated as unverified in the review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mylio-photos',
  name: 'Mylio Photos',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['desktop', 'mobile'], // Windows/macOS installers plus iOS/iPadOS and Android apps, synced through a Mylio account
  locality: 'hybrid', // vendor: "every one of our AI tools runs exclusively on your local devices" and "run AI locally, no internet needed"; Learn Panel GPT chat location unstated; Mylio Drive+ and Shared Albums use Mylio servers
  platforms: ['mac', 'win', 'ios', 'ipados', 'android'], // mylio.com/download: Mylio.dmg, Mylio_x64.msix, Mylio_arm64.msix, App Store, Google Play
  worksWith: ['Apple Photos library', 'FamilySearch', 'S3-compatible NAS devices', 'Backblaze (Mylio Drive+ storage)'], // 24.x release notes
  engine: 'builtin', // SmartTag, face and OCR models ship inside the app; Mylio names no models
  license: 'Closed source', // proprietary commercial software, no public repository
  price: 'freemium', // free download; paid Individual/Duo/Family subscription (US App Store "Mylio Premium" $25.00/month, $239.99/year) with a free trial; what the free plan includes today is not stated
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // Mylio publishes no RAM, GPU or disk requirement in the sources read
  stars: null, // no public repository
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image'],
  url: 'mylio.com',
  storeLinks: {
    web: 'https://mylio.com/download/',
    appStore: 'https://apps.apple.com/us/app/mylio-photos/id908787435',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.myliollc.mylio',
  },
  installEffort: 'installer',
  installEvidence: 'mylio.com/download checked 2026-10-30: direct links Mylio_x64.msix and Mylio_arm64.msix (Windows), Mylio.dmg (macOS), App Store id908787435 (iOS/iPadOS) and Google Play com.myliollc.mylio (Android); the main "Download now" button points to "#"; the files were not downloaded or HEAD-checked; a Mylio account is used to sync devices',
  tagline: {
    en: 'Photo, video and document library for Windows, Mac, iPhone and Android with SmartTag search, face and text recognition that Mylio says run on your own devices; free download, paid subscription plans',
    de: 'Foto-, Video- und Dokumentenbibliothek für Windows, Mac, iPhone und Android mit SmartTag-Suche sowie Gesichts- und Texterkennung, die laut Mylio auf Ihren eigenen Geräten laufen; kostenloser Download, bezahlte Abo-Tarife',
    fr: 'Bibliothèque de photos, vidéos et documents pour Windows, Mac, iPhone et Android avec recherche SmartTag et reconnaissance des visages et du texte qui, selon Mylio, s’exécutent sur vos appareils ; téléchargement gratuit, offres payantes par abonnement',
    ja: 'Windows・Mac・iPhone・Android向けの写真・動画・書類ライブラリ。SmartTag検索、顔認識、文字認識はMylioによれば自分の端末上で動作し、ダウンロードは無料、有料プランはサブスクリプション制です',
    zh: '适用于 Windows、Mac、iPhone 和 Android 的照片、视频和文档库，SmartTag 搜索、人脸和文字识别据 Mylio 称在你自己的设备上运行；下载免费，付费方案为订阅制',
    es: 'Biblioteca de fotos, vídeos y documentos para Windows, Mac, iPhone y Android con búsqueda SmartTag y reconocimiento de caras y texto que, según Mylio, se ejecutan en tus propios dispositivos; descarga gratuita y planes de pago por suscripción',
    pt: 'Biblioteca de fotos, vídeos e documentos para Windows, Mac, iPhone e Android com busca SmartTag e reconhecimento de rostos e de texto que, segundo a Mylio, rodam nos seus próprios dispositivos; download gratuito e planos pagos por assinatura',
    ar: 'مكتبة للصور والفيديو والمستندات على Windows وMac وiPhone وAndroid مع بحث SmartTag والتعرف على الوجوه والنص التي تقول Mylio إنها تعمل على أجهزتك؛ تنزيل مجاني وخطط مدفوعة بالاشتراك',
    ko: 'Windows·Mac·iPhone·Android용 사진·동영상·문서 라이브러리로, SmartTag 검색과 얼굴·텍스트 인식이 Mylio에 따르면 내 기기에서 실행되며 다운로드는 무료, 유료 요금제는 구독 방식입니다',
  },
  compare: { ocr: true }, // 24.7 release notes (build 7878, 2025-12-17): "Implemented new OCR Models across all operating systems"; Dynamic Search results include OCR data
  reviewSlug: 'mylio-photos-review',
  pqReview: {
    date: '2026-10-30',
    version: '24.8',
    versionSourceUrl: 'https://support.mylio.com/change-log-and-release-notes',
  },
  verdict:
    'Best for people with photos on several phones, computers and drives who want one synced library with SmartTag, face and text search that Mylio says runs on their own devices; limited by closed source, the on-device claim being the vendor\'s own, an unstated location for the Learn Panel GPT chat, a 2018 privacy policy that does not mention AI, optional cloud storage and shared albums that use Mylio servers, an unclear free plan, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-08', // support.mylio.com change log: 24.8 - 7905 (Windows and Android builds), updated October 8, 2026
  lastUpstreamUpdateSource: 'https://support.mylio.com/change-log-and-release-notes',
}
