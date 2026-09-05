// Local AI App Directory — exo (layer: runtime)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "no explicit last-update date found" — resolved: repo pushed
// 2026-08-25, well within the 6-month window.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'exo',
  name: 'exo',
  categories: ['inference-engines'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 47260, // github.com/exo-explore/exo, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['serve'],
  url: 'exolabs.net',
  tagline: {
    en: 'Distributed inference — run large models by pooling compute across multiple everyday devices',
    de: 'Verteilte Inferenz – große Modelle ausführen, indem Rechenleistung mehrerer alltäglicher Geräte gebündelt wird',
    fr: 'Inférence distribuée — exécutez de grands modèles en regroupant la puissance de calcul de plusieurs appareils du quotidien',
    ja: '分散推論 — 複数の日常的なデバイスの計算能力をプールして大規模モデルを実行',
    zh: '分布式推理——通过汇集多台日常设备的算力来运行大型模型',
    es: 'Inferencia distribuida: ejecuta modelos grandes agrupando la potencia de cómputo de varios dispositivos cotidianos',
    pt: 'Inferência distribuída — execute modelos grandes agrupando o poder de computação de vários dispositivos do dia a dia',
    ar: 'استدلال موزّع — شغّل نماذج كبيرة عبر تجميع قدرة المعالجة من عدة أجهزة يومية',
    ko: '분산 추론 — 여러 일상 기기의 컴퓨팅 파워를 모아 대형 모델을 실행',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
