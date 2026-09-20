// Local AI App Directory — claude-code-local (layer: run-serve — MLX Anthropic-API server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: many repos share this exact name; this is
// github.com/nicedreamzapp/claude-code-local (3.3k stars, 625 forks, the
// original — jinzaizhichi/claude-code-local is a zero-star fork of it, not a
// separate project). Runs Claude Code entirely on-device against local MLX
// models on Apple Silicon via an MLX-native Anthropic-API-compatible server —
// verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'claude-code-local',
  name: 'claude-code-local',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: ['Claude Code'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // Apple Silicon unified memory, MLX-native — README offers several bundled model options from smaller 30B-class up to a 122B-class model, so the real floor depends entirely on which one is loaded, verified 2026-09-18
  stars: 3314, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['code', 'serve'],
  url: 'github.com/nicedreamzapp/claude-code-local',
  tagline: {
    en: 'MLX-native local server that lets Claude Code run 100% on-device on Apple Silicon, no cloud or API fees',
    de: 'MLX-native lokale Server-Lösung, mit der Claude Code zu 100% auf dem Gerät unter Apple Silicon läuft — ohne Cloud oder API-Gebühren',
    fr: 'Serveur local natif MLX qui permet à Claude Code de fonctionner à 100% sur l’appareil sous Apple Silicon, sans cloud ni frais d’API',
    ja: 'Claude CodeをApple Silicon上で100%オンデバイス実行できる、クラウドやAPI費用不要のMLXネイティブなローカルサーバー',
    zh: 'MLX原生本地服务器，让Claude Code在Apple Silicon设备上100%本地运行，无需云端或API费用',
    es: 'Servidor local nativo de MLX que permite ejecutar Claude Code 100% en el dispositivo con Apple Silicon, sin nube ni tarifas de API',
    pt: 'Servidor local nativo em MLX que permite executar o Claude Code 100% no dispositivo com Apple Silicon, sem nuvem nem taxas de API',
    ar: 'خادم محلي أصلي لـ MLX يتيح تشغيل Claude Code بالكامل على الجهاز عبر شرائح Apple Silicon، دون سحابة أو رسوم API',
    ko: 'Apple Silicon 기기에서 Claude Code를 클라우드나 API 비용 없이 100% 온디바이스로 실행할 수 있게 해주는 MLX 네이티브 로컬 서버',
  },
  reviewSlug: 'claude-code-local-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v0.3.0', versionSourceUrl: 'https://github.com/nicedreamzapp/claude-code-local/releases/tag/v0.3.0' },
  lastVerifiedDate: '2026-09-18',
}
