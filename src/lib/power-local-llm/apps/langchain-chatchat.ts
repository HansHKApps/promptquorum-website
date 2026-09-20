// Local AI App Directory — Langchain-Chatchat (layer: RAG chat)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Formerly named langchain-ChatGLM; renamed Langchain-Chatchat — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'langchain-chatchat',
  name: 'Langchain-Chatchat',
  categories: ['rag-frameworks', 'document-pdf-chat'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid', // built for local knowledge-base RAG but supports pluggable local (ChatGLM, Qwen, Llama) or cloud-API backends, verified 2026-09-18
  platforms: ['linux', 'mac', 'win'],
  worksWith: ['Ollama', 'Xinference', 'OpenAI API'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 38644, // github.com/chatchat-space/Langchain-Chatchat, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'github.com/chatchat-space/Langchain-Chatchat',
  tagline: {
    en: 'Local knowledge-base RAG and agent app built on LangChain, working with local models like ChatGLM and Qwen or cloud APIs',
    de: 'RAG- und Agenten-App für lokale Wissensdatenbanken auf Basis von LangChain, kompatibel mit lokalen Modellen wie ChatGLM und Qwen oder Cloud-APIs',
    fr: 'Application RAG et agent basée sur LangChain pour bases de connaissances locales, compatible avec des modèles locaux comme ChatGLM et Qwen ou des API cloud',
    ja: 'LangChainをベースにしたローカルナレッジベースRAG＆エージェントアプリ。ChatGLMやQwenなどのローカルモデルやクラウドAPIに対応',
    zh: '基于LangChain的本地知识库RAG与智能体应用，可对接ChatGLM、Qwen等本地模型或云端API',
    es: 'Aplicación RAG y de agentes basada en LangChain para bases de conocimiento locales, compatible con modelos locales como ChatGLM y Qwen o APIs en la nube',
    pt: 'Aplicativo RAG e de agentes baseado em LangChain para bases de conhecimento locais, compatível com modelos locais como ChatGLM e Qwen ou APIs de nuvem',
    ar: 'تطبيق RAG ووكلاء لقاعدة معرفة محلية مبني على LangChain، يعمل مع نماذج محلية مثل ChatGLM وQwen أو واجهات برمجة سحابية',
    ko: 'LangChain 기반의 로컬 지식베이스 RAG·에이전트 앱으로, ChatGLM·Qwen 같은 로컬 모델이나 클라우드 API와 함께 사용 가능',
  },
  reviewSlug: 'langchain-chatchat-review', // dedicated PromptQuorum review — added 2026-09-18
  pqReview: { date: '2026-09-20', version: 'v0.3.1', versionSourceUrl: 'https://github.com/chatchat-space/Langchain-Chatchat/releases/tag/v0.3.1' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, agents: true, multiVector: true, dockerDeploy: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
