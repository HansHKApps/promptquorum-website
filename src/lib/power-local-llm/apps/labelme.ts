// Local AI App Directory — Labelme by Kentaro Wada (trading as Labelme.io) (layer: desktop image annotation with offline AI drafting)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: labelme.io (home, pricing, download, install guide, changelog, about), privacy policy, EULA, GitHub repository and README,
// GitHub API (license, pushed_at, releases), release v7.11.0.
// Notes:
// - Two forms: open-source Python package (GPL-3.0 per GitHub API and the EULA; pip install) and a paid standalone app under the maker's EULA
//   (trial 3 days, Pro $79 once incl. 1 year of updates, Pro Lifetime $249, Team $249/seat; USD per the pricing page, 2026-11-18).
//   license = 'GPL-3.0' is the repository/PyPI license; the app binary is under the EULA (stated in the review). price = 'freemium' (free package + trial/paid app).
// - locality = 'local': images/annotations are not uploaded (privacy policy); model weights download on first use. Connected AI agents may use cloud providers (review says so).
// - engine = 'builtin': SAM, SAM2, SAM3, EfficientSAM and YOLO-World run on the user's computer per the maker.
// - hardware: no RAM/GPU/disk requirement is stated anywhere (install guide says only "OS versions that are not EOL"), so all null.
// - HQ country JP: privacy policy says "We are based in Japan"; the EULA names Japanese law and Tokyo courts; operator is Kentaro Wada trading as Labelme.io.
// - Version 7.11.0: download page and GitHub release v7.11.0 (2026-11-14). GitHub Releases carry no assets; installers come from labelme.io.
// - No compare block: the directory has no data-labeling comparison segment (compare-schema.ts) and this is the only tile in that category.
// - Last upstream update: 2026-11-17 (GitHub pushed_at 2026-11-17T23:02Z; latest release 2026-11-14) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'labelme',
  name: 'Labelme',
  categories: ['data-labeling'],
  interfaces: ['desktop', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude', 'ChatGPT', 'Claude Code', 'Codex', 'Cursor'], // AI agents the maker lists for the Pro MCP connection
  engine: 'builtin',
  license: 'GPL-3.0', // source code and PyPI package; the paid standalone app is under the maker's EULA
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no requirement stated by the maker
  stars: 16336,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['image', 'agent'],
  url: 'labelme.io',
  storeLinks: {
    github: 'https://github.com/wkentaro/labelme',
    web: 'https://labelme.io',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 labelme.io/download offered a .dmg (Apple Silicon and Intel), a Microsoft Store listing, an .msi and a portable EXE (Windows x64) and an AppImage (Linux x64); version 7.11.0. The install guide says downloads need a sign-in and the app runs as a 3-day trial until a license key is entered. GitHub Releases list no assets. A pip route (pip install labelme, Python 3.12+) also exists.',
  tagline: {
    en: 'Desktop image annotation tool with offline AI drafting (SAM, SAM3, YOLO-World) that saves plain JSON files, as a free open-source package or a paid standalone app.',
    de: 'Desktop-Werkzeug zur Bildannotation mit Offline-KI-Entwürfen (SAM, SAM3, YOLO-World), das einfache JSON-Dateien speichert, als kostenloses Open-Source-Paket oder kostenpflichtige eigenständige App.',
    fr: 'Outil de bureau d\'annotation d\'images avec brouillons d\'IA hors ligne (SAM, SAM3, YOLO-World) qui enregistre de simples fichiers JSON, en paquet open source gratuit ou en application autonome payante.',
    ja: 'オフラインAIによる下書き（SAM、SAM3、YOLO-World）を備え、単純なJSONファイルに保存するデスクトップの画像アノテーションツール。無料のオープンソースパッケージと有料のスタンドアロンアプリがあります。',
    zh: '桌面图像标注工具，支持离线 AI 草稿（SAM、SAM3、YOLO-World），结果保存为普通 JSON 文件，提供免费开源包和付费独立应用两种形式。',
    es: 'Herramienta de escritorio de anotación de imágenes con borradores de IA sin conexión (SAM, SAM3, YOLO-World) que guarda archivos JSON sencillos, como paquete de código abierto gratuito o app independiente de pago.',
    pt: 'Ferramenta de desktop de anotação de imagens com rascunhos de IA offline (SAM, SAM3, YOLO-World) que salva arquivos JSON simples, como pacote de código aberto gratuito ou app independente pago.',
    ar: 'أداة سطح مكتب لتعليق الصور بمسودات ذكاء اصطناعي دون اتصال (SAM وSAM3 وYOLO-World) تحفظ ملفات JSON بسيطة، متاحة كحزمة مفتوحة المصدر مجانية أو كتطبيق مستقل مدفوع.',
    ko: '오프라인 AI 초안(SAM, SAM3, YOLO-World)을 제공하고 일반 JSON 파일로 저장하는 데스크톱 이미지 어노테이션 도구로, 무료 오픈소스 패키지와 유료 독립 실행형 앱이 있습니다.',
  },
  mcpSupport: true, // Pro app ships an MCP server for AI agents (pricing page, changelog 7.9.0)
  reviewSlug: 'labelme-review',
  pqReview: {
    date: '2026-11-18',
    version: '7.11.0',
    versionSourceUrl: 'https://github.com/wkentaro/labelme/releases/tag/v7.11.0',
  },
  hqCountry: 'JP',
  hqCountrySource: 'https://labelme.io/privacy-policy',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // GitHub pushed_at 2026-11-17T23:02Z (API, 2026-11-18); latest release v7.11.0 published 2026-11-14
  lastUpstreamUpdateSource: 'https://github.com/wkentaro/labelme (last commit 2026-11-17; latest release 2026-11-14)',
}
