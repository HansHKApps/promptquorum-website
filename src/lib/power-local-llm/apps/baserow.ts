// Local AI App Directory — Baserow (layer: no-code database / AI field)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Baserow is primarily a no-code database/app builder; it qualifies for this
// directory on its AI field feature, which self-hosted instances can point
// at Ollama for fully local inference (confirmed in Baserow's own docs, not
// just OpenAI/Anthropic cloud keys) — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'baserow',
  name: 'Baserow',
  categories: ['workflow-node-builders'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'], // self-hosted via Docker on any OS, or used as a web app, verified 2026-09-18
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API', 'OpenRouter', 'Mistral'],
  engine: 'external',
  license: 'MIT (Baserow Open Source Edition core; premium/enterprise directories under separate licenses)', // verified from the repo's own LICENSE file 2026-09-18
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // Baserow itself is a database/app server; AI field inference runs on whichever provider (including local Ollama) the user configures, verified 2026-09-18
  stars: 5933, // github.com/baserow/baserow, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs', 'build', 'agent'],
  url: 'github.com/baserow/baserow',
  tagline: {
    en: 'Self-hosted no-code database and app builder whose AI field can run on a local Ollama model instead of a cloud API',
    de: 'Selbst gehosteter No-Code-Datenbank- und App-Builder, dessen KI-Feld statt einer Cloud-API auch auf einem lokalen Ollama-Modell laufen kann',
    fr: "Constructeur de bases de données et d'applications no-code auto-hébergé dont le champ IA peut s'exécuter sur un modèle Ollama local au lieu d'une API cloud",
    ja: 'AIフィールドをクラウドAPIの代わりにローカルOllamaモデルで実行できる、セルフホスト型ノーコードデータベース＆アプリビルダー',
    zh: '自托管无代码数据库与应用构建工具，其AI字段可运行在本地Ollama模型上，无需依赖云端API',
    es: 'Creador de bases de datos y aplicaciones sin código autoalojado cuyo campo de IA puede ejecutarse en un modelo Ollama local en vez de una API en la nube',
    pt: 'Construtor de bancos de dados e aplicativos no-code auto-hospedado cujo campo de IA pode rodar em um modelo Ollama local em vez de uma API na nuvem',
    ar: 'أداة بناء قواعد بيانات وتطبيقات بلا كود مستضافة ذاتيًا يمكن لحقل الذكاء الاصطناعي فيها العمل على نموذج Ollama محلي بدلًا من واجهة سحابية',
    ko: 'AI 필드를 클라우드 API 대신 로컬 Ollama 모델로 실행할 수 있는 셀프호스팅 노코드 데이터베이스 및 앱 빌더',
  },
  reviewSlug: 'baserow-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: '2.3.4', versionSourceUrl: 'https://github.com/baserow/baserow/releases/tag/2.3.4' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { dockerDeploy: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
