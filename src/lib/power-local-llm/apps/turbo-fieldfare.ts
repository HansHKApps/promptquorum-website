// Local AI App Directory — TurboFieldfare (layer: inference engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Several near-identical clones of this repo exist under other GitHub
// accounts with the same description; drumih/turbo-fieldfare is the
// original (earliest non-fork, highest star count) — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'turbo-fieldfare',
  name: 'TurboFieldfare',
  categories: ['inference-engines'],
  interfaces: ['desktop', 'cli'],
  locality: 'local',
  platforms: ['mac'], // Swift/Metal runtime built specifically for Apple Silicon M-series — verified 2026-09-18
  worksWith: ['Gemma'],
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: 2, vramGb: null, cpuOnly: false }, // documented target: Gemma 4 26B-A4B inference in ~2 GB unified memory on any M-series MacBook, verified 2026-09-18
  stars: 6768, // github.com/drumih/turbo-fieldfare, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'github.com/drumih/turbo-fieldfare',
  reviewSlug: 'turbo-fieldfare-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Native Swift and Metal runtime that runs Gemma 4 26B-A4B locally in about 2 GB of RAM on any M-series MacBook',
    de: 'Native Swift- und Metal-Laufzeitumgebung, die Gemma 4 26B-A4B lokal mit rund 2 GB RAM auf jedem M-Series-MacBook ausführt',
    fr: "Runtime natif Swift et Metal qui exécute Gemma 4 26B-A4B localement avec environ 2 Go de RAM sur tout MacBook série M",
    ja: 'あらゆるMシリーズMacBookで約2GBのRAMでGemma 4 26B-A4Bをローカル実行するネイティブSwift/Metalランタイム',
    zh: '原生Swift与Metal运行时，可在任意M系列MacBook上以约2GB内存本地运行Gemma 4 26B-A4B',
    es: 'Runtime nativo en Swift y Metal que ejecuta Gemma 4 26B-A4B localmente con unos 2 GB de RAM en cualquier MacBook serie M',
    pt: 'Runtime nativo em Swift e Metal que executa o Gemma 4 26B-A4B localmente com cerca de 2 GB de RAM em qualquer MacBook série M',
    ar: 'بيئة تشغيل أصلية بلغة Swift وMetal تُشغّل نموذج Gemma 4 26B-A4B محليًا باستخدام نحو 2 جيجابايت من الذاكرة على أي ماك بوك من سلسلة M',
    ko: '모든 M 시리즈 맥북에서 약 2GB RAM만으로 Gemma 4 26B-A4B를 로컬 실행하는 네이티브 Swift/Metal 런타임',
  },
  lastVerifiedDate: '2026-09-18',
}
