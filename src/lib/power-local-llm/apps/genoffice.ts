// Local AI App Directory — GenOffice by Genspark (layer: desktop office suite with a built-in AI agent)
// Added 2026-11-20 on the site owner's request (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-20: genoffice.ai (homepage, FAQ, download buttons), GitHub repo genspark-ai/genoffice (README, PRIVACY.md, LICENSE, ee/README.md),
// GitHub API (repo, releases, commits), release v0.13.615, and the Genspark terms linked from the genoffice.ai footer (https://www.genspark.ai/terms).
// Notes:
// - Locality = 'hybrid': documents are opened, edited, saved and PDF-converted on the machine; every AI call goes to the provider you pick (Genspark sign-in proxy
//   or your own key). README: "custom slot for any OpenAI-compatible endpoint (base URL + key), including local model servers" — so a local model server is
//   possible in principle, but the README does not name Ollama or LM Studio, its FAQ says the AI features need a network connection, and PromptQuorum has not
//   tried a local model with it. Not 'local': the default and documented AI paths are cloud providers.
// - License: Apache 2.0 for the repository; the ee/ folder (currently only a README and a license) is under the GenOffice Enterprise License.
// - Price: the apps are free ("no paid tier for the apps themselves", README FAQ); AI uses Genspark credits or your own provider key (credit pricing not read).
// - Install: GitHub release v0.13.615 (2026-11-19) ships arm64 and Intel .dmg, Windows x64 and arm64 setup .exe, .AppImage, .deb and .rpm; the website offers the
//   same per OS. README says the macOS and Windows installers are signed. => installer tier.
// - HQ country US: the Terms of Service linked from the genoffice.ai footer (Genspark Inc., "a wholly owned subsidiary of MainFunc") say they are governed by
//   the laws of the State of California, venue San Francisco County. The genoffice.ai site has no privacy/imprint page of its own (/privacy, /terms, /about,
//   /contact return 404); the repo PRIVACY.md names no country; the Genspark privacy policy returned HTTP 403 and could not be read.
// - Analytics: official packaged builds send limited GA4 usage events by default (opt-out in Settings > General), per PRIVACY.md.
// - Version: v0.13.615, the latest GitHub release (2026-11-19).
// Last upstream update: 2026-11-19 (GitHub API: latest release v0.13.615 published 2026-11-19T14:12Z and last push 2026-11-19T14:12Z) -> NOT stale (3-month rule).
// Category/segment: filed under writing-email + presentation-generation + document-pdf-chat; no COMPARE_SEGMENTS segment matches these (the document-chat
// segment is about chat over documents, not office editing), so there is no `compare` block.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'genoffice',
  name: 'GenOffice',
  categories: ['writing-email', 'presentation-generation', 'document-pdf-chat'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // files stay on the machine; AI calls go to the provider you choose (Genspark proxy or your own key); a local OpenAI-compatible server is possible per README but untested
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Claude Code', 'Codex', 'Cursor', 'OpenAI', 'Anthropic Claude', 'Google Gemini', 'OpenRouter'],
  engine: 'external', // no bundled model: Genspark sign-in proxy, bring-your-own API key, or any OpenAI-compatible endpoint
  license: 'Apache 2.0 (ee/: Enterprise License)', // README: Apache-2.0 except the ee/ directory, reserved for future enterprise modules
  price: 'free', // apps free per README FAQ; AI uses Genspark credits or your own provider key (credit prices not read)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM/GPU figure stated; AI runs at the provider unless you point it at your own server
  stars: 12668, // GitHub API read 2026-11-20
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['docs', 'agent'],
  url: 'genoffice.ai',
  storeLinks: {
    github: 'https://github.com/genspark-ai/genoffice',
    web: 'https://genoffice.ai',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-20 GitHub release v0.13.615 (published 2026-11-19) listed GenOffice-0.13.615-arm64.dmg, GenOffice-0.13.615.dmg (Intel), GenOfficeSetup-v0.13.615-x64.exe, GenOfficeSetup-v0.13.615-arm64.exe, GenOffice-0.13.615.AppImage, genoffice_0.13.615_amd64.deb and genoffice-0.13.615.x86_64.rpm; genoffice.ai offered Download for Mac, Windows and Linux buttons; the README says the macOS and Windows installers are signed.',
  tagline: {
    en: 'Free, open-source desktop office suite that opens and saves real Word, Excel and PowerPoint files, with a built-in AI agent that needs Genspark credits or your own API key (editing is local, the AI calls are not by default).',
    de: 'Kostenlose, quelloffene Desktop-Office-Suite, die echte Word-, Excel- und PowerPoint-Dateien öffnet und speichert, mit eingebautem KI-Agenten über Genspark-Credits oder Ihren eigenen API-Schlüssel (Bearbeitung lokal, KI-Aufrufe standardmäßig nicht).',
    fr: 'Suite bureautique de bureau gratuite et open source qui ouvre et enregistre de vrais fichiers Word, Excel et PowerPoint, avec un agent IA intégré utilisant des crédits Genspark ou votre propre clé API (édition locale, appels IA non locaux par défaut).',
    ja: 'WordやExcel、PowerPointの実ファイルを開いて保存できる無料のオープンソースのデスクトップオフィススイート。AIエージェント内蔵で、Gensparkクレジットか自分のAPIキーを使います（編集はローカル、AI呼び出しは標準ではローカルではありません）。',
    zh: '免费开源的桌面办公套件，可打开并保存真实的 Word、Excel 和 PowerPoint 文件，内置 AI 智能体，使用 Genspark 积分或您自己的 API 密钥（编辑在本地完成，AI 调用默认不在本地）。',
    es: 'Suite ofimática de escritorio gratuita y de código abierto que abre y guarda archivos reales de Word, Excel y PowerPoint, con un agente de IA integrado que usa créditos de Genspark o tu propia clave de API (edición local; las llamadas de IA no lo son por defecto).',
    pt: 'Suíte de escritório para desktop gratuita e de código aberto que abre e salva arquivos reais do Word, Excel e PowerPoint, com um agente de IA integrado que usa créditos do Genspark ou sua própria chave de API (edição local; as chamadas de IA não são locais por padrão).',
    ar: 'حزمة مكتبية مجانية ومفتوحة المصدر لسطح المكتب تفتح ملفات Word وExcel وPowerPoint الحقيقية وتحفظها، مع وكيل ذكاء اصطناعي مدمج يستخدم رصيد Genspark أو مفتاح API الخاص بك (التحرير محلي، أما استدعاءات الذكاء الاصطناعي فليست محلية افتراضيًا).',
    ko: 'Word, Excel, PowerPoint 실제 파일을 열고 저장하는 무료 오픈소스 데스크톱 오피스 제품군으로, Genspark 크레딧 또는 자체 API 키를 쓰는 AI 에이전트가 내장되어 있습니다(편집은 로컬, AI 호출은 기본적으로 로컬이 아닙니다).',
  },
  reviewSlug: 'genoffice-review',
  mcpSupport: true, // README: `genoffice mcp` stdio server (29 tools) plus a local HTTP MCP server inside the app
  pqReview: {
    date: '2026-11-20',
    version: '0.13.615',
    versionSourceUrl: 'https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://www.genspark.ai/terms',
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-19', // GitHub API read 2026-11-20: latest release v0.13.615 published 2026-11-19T14:12Z, last push 2026-11-19T14:12Z
  lastUpstreamUpdateSource: 'https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615 (release and last push 2026-11-19)',
}
