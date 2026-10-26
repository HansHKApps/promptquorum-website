// Local AI App Directory — Localhosted (layer: web directory / catalogue of local and self-hosted AI tools)
// Added 2026-10-26 on Hans's request (link from logotyper.com, the portfolio of the designer-developer behind Localhosted, UTM source localhosted.com).
// Facts verified on 2026-10-26 against localhosted.com (home, /about, /privacy, /advertise). Not hands-on tested by PromptQuorum.
// This is NOT a local AI app: it is a website that catalogues tools, and a direct neighbour/competitor of this directory. It is listed
// because readers compare directories; locality 'cloud' is the honest label (nothing runs on the reader's machine). 'model-hubs' is the
// closest existing sub-category (a hub readers use to discover things to run locally) — it holds software listings, not model weights.
// The operator is only named as "Eugene, the designer and developer behind Localhosted" in a sponsored slot and on logotyper.com.
// No version number, release page or public source repository exists, so pqReview.version and lastUpstreamUpdate stay unset (unknown, never "none").

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localhosted',
  name: 'Localhosted',
  categories: ['model-hubs'],
  interfaces: ['web'],
  locality: 'cloud', // a hosted website; nothing is installed or run locally — privacy policy: Google Analytics, Plausible, Resend, Revinel ads, Neon DB in the US (2026-10-26)
  platforms: ['web'],
  worksWith: [],
  engine: 'builtin', // self-contained website, no AI model for the reader to run; /about says AI helps draft summaries before publication
  license: 'Closed source', // no repository or licence stated; each listed tool carries its own licence
  price: 'free', // browsing is free; the site sells ad slots (US$5–25 per day) and Premium/sponsored listings — /advertise and /about, 2026-10-26
  hardware: { ramGb: null, vramGb: null, cpuOnly: null },
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['serve'],
  url: 'localhosted.com',
  storeLinks: {
    web: 'https://localhosted.com/',
  },
  installEffort: 'hosted',
  installEvidence: 'Website only, opens in the browser; no download, app-store listing or repository found on localhosted.com (home, /about) — checked 2026-10-26',
  tagline: {
    en: 'Web directory of 1,800+ local and self-hosted AI tools with collections, alternatives and video guides',
    de: 'Web-Verzeichnis mit über 1.800 lokalen und selbst gehosteten KI-Tools samt Sammlungen, Alternativen und Videoanleitungen',
    fr: 'Annuaire web de plus de 1 800 outils d’IA locaux et auto-hébergés, avec collections, alternatives et guides vidéo',
    ja: 'ローカル／セルフホスト型AIツール1,800件以上を掲載するWebディレクトリ。コレクション、代替ツール、動画ガイド付き',
    zh: '收录1,800多款本地与自托管AI工具的网页目录，含精选合集、替代方案和视频指南',
    es: 'Directorio web de más de 1.800 herramientas de IA locales y autoalojadas, con colecciones, alternativas y guías en vídeo',
    pt: 'Diretório web com mais de 1.800 ferramentas de IA locais e auto-hospedadas, com coleções, alternativas e guias em vídeo',
    ar: 'دليل ويب يضم أكثر من 1800 أداة ذكاء اصطناعي محلية ومستضافة ذاتيًا مع مجموعات وبدائل وأدلة فيديو',
    ko: '로컬·셀프호스팅 AI 도구 1,800개 이상을 모은 웹 디렉터리, 컬렉션·대안·영상 가이드 제공',
  },
  reviewSlug: 'localhosted-review', // dedicated PromptQuorum review
  lastVerifiedDate: '2026-10-26',
}
