// Local AI App Directory — Home Generative Agent (HGA): LangGraph agent integration for Home Assistant (layer: smart-home agent)
// Added 2026-11-01 on request (link: Home Assistant Community thread, utm_source=localhosted.com). Facts verified 2026-11-01 against:
// the GitHub repo goruck/home-generative-agent (README, docs/installation.md, docs/configuration.md; GitHub API: MIT licence, repo
// description, homepage field = the Home Assistant Community thread), GitHub Releases (latest stable v3.44.10 published 2026-10-23, asset
// home_generative_agent.zip; newer pre-release v3.45.0-beta.5 of 2026-10-28 ignored) and the Community thread community.home-assistant.io/t/…/864923.
// The thread's opening post still shows v3.20.2 (July 2026 update) — outdated; GitHub is the source for the version.
// MAKER: Lindo St Angel (GitHub user goruck, a personal account; thread author "lindos"). No company, no pricing, no separate product website:
// the repo's homepage field points to the Community thread, so that thread is the tile `url`. No privacy policy found.
// LOCALITY = hybrid: HGA is the agent layer inside Home Assistant; models come from providers you configure — Edge (Ollama, OpenAI-compatible
// servers such as vLLM/llama.cpp/LiteLLM) or Cloud (OpenAI, Gemini, Anthropic). README: "including fully local, so no data has to leave your home".
// Optional external pieces: face-service (face recognition), Speaches (local STT/TTS). Not tested hands-on.
// Install effort: HACS click-install, but the Quick Start needs the PostgreSQL+pgvector HA app (Home Assistant OS or Supervised only), a restart,
// a model provider and a Setup run => several services, rated terminal-setup like Home Assistant Assist.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'home-generative-agent',
  name: 'Home Generative Agent',
  categories: ['smart-home-ai', 'personal-assistants'],
  interfaces: ['plugin', 'web'], // Home Assistant custom integration (HACS), used through Home Assistant's Assist panel and voice pipelines
  locality: 'hybrid', // fully local with Ollama or an OpenAI-compatible server is documented; OpenAI, Gemini and Anthropic are cloud options
  platforms: ['selfhosted'], // runs inside a Home Assistant install; the bundled database app needs Home Assistant OS or Supervised
  worksWith: ['Home Assistant', 'Ollama', 'vLLM', 'llama.cpp', 'LiteLLM', 'OpenAI', 'Gemini', 'Anthropic', 'Speaches', 'MCP', 'LangGraph'],
  engine: 'external', // no inference in-process
  license: 'MIT',
  price: 'free', // software is free; cloud providers bill you directly
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs recommend Ollama models (gpt-oss, qwen3:8b, qwen3-vl:8b) but give no minimum RAM/VRAM
  stars: 371, // github.com/goruck/home-generative-agent, GitHub API 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923',
  storeLinks: {
    web: 'https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923',
    github: 'https://github.com/goruck/home-generative-agent',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README Quick Start + docs/installation.md read 2026-11-01: (1) install the PostgreSQL with pgvector app (Home Assistant OS or Supervised only), (2) install via HACS (in the default HACS repository), (3) restart Home Assistant, (4) add the integration, (5) add a model provider (Edge or Cloud), (6) run Setup (Basic/Advanced), (7) select it as the conversation agent. Manual install from the GitHub Releases asset home_generative_agent.zip is also documented. No double-click installer; several services to set up',
  tagline: {
    en: 'LangGraph agent for Home Assistant: talk to your home, write automations in plain language, analyse cameras; Ollama or cloud models',
    de: 'LangGraph-Agent für Home Assistant: mit dem Haus sprechen, Automationen in Alltagssprache schreiben, Kameras analysieren; Ollama oder Cloud-Modelle',
    fr: 'Agent LangGraph pour Home Assistant : parlez à votre maison, créez des automatisations en langage courant, analysez les caméras ; Ollama ou modèles cloud',
    ja: 'Home Assistant向けLangGraphエージェント。家と会話し、自然な言葉でオートメーションを作成、カメラ映像を解析。Ollamaまたはクラウドモデルに対応',
    zh: '面向 Home Assistant 的 LangGraph 智能体：与家居对话、用自然语言编写自动化、分析摄像头；支持 Ollama 或云端模型',
    es: 'Agente LangGraph para Home Assistant: habla con tu casa, crea automatizaciones en lenguaje natural y analiza cámaras; Ollama o modelos en la nube',
    pt: 'Agente LangGraph para o Home Assistant: converse com sua casa, crie automações em linguagem natural e analise câmeras; Ollama ou modelos na nuvem',
    ar: 'وكيل LangGraph لـ Home Assistant: تحدّث مع منزلك، واكتب الأتمتة بلغة عادية، وحلّل الكاميرات؛ يدعم Ollama أو النماذج السحابية',
    ko: 'Home Assistant용 LangGraph 에이전트: 집과 대화하고, 일상 언어로 자동화를 만들고, 카메라를 분석합니다. Ollama 또는 클라우드 모델 지원',
  },
  mcpSupport: true, // README: extra tools can be added "through an MCP server or an integration that registers a Home Assistant LLM API"
  reviewSlug: 'home-generative-agent-review',
  pqReview: {
    date: '2026-11-01',
    version: '3.44.10',
    versionSourceUrl: 'https://github.com/goruck/home-generative-agent/releases/tag/v3.44.10',
  },
  verdict: 'Best for existing Home Assistant users who want an LLM agent that can control entities, write automations and watch cameras, and who accept a multi-step setup (database app, model provider) and that camera and prompt data go wherever the chosen model provider runs.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-11-01', // GitHub API: default-branch push 2026-11-01T19:08Z (latest stable release v3.44.10 on 2026-10-23), read 2026-11-01
  lastUpstreamUpdateSource: 'https://github.com/goruck/home-generative-agent',
}
