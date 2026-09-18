// Local AI App Directory — Local Deep Research (layer: agent / research)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'local-deep-research',
  name: 'Local Deep Research',
  categories: ['autonomous-agents', 'local-search'],
  interfaces: ['web', 'cli', 'library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp', 'OpenAI API', 'Google', 'Anthropic API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // agentic research loop that calls out to a local (Ollama/llama.cpp) or cloud LLM the user configures — no fixed inference footprint of its own, verified 2026-09-18
  stars: 9103, // github.com/LearningCircuit/local-deep-research, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'docs'],
  url: 'github.com/LearningCircuit/local-deep-research',
  tagline: {
    en: 'Self-hosted deep-research agent that runs multi-step, cited research across arXiv, PubMed, the web, and your own documents on local or cloud LLMs',
    de: 'Selbst gehosteter Deep-Research-Agent für mehrstufige, zitierte Recherchen über arXiv, PubMed, das Web und eigene Dokumente mit lokalen oder Cloud-LLMs',
    fr: 'Agent de recherche approfondie auto-hébergé qui mène des recherches citées en plusieurs étapes sur arXiv, PubMed, le web et vos propres documents avec des LLM locaux ou cloud',
    ja: 'arXiv、PubMed、Web、自分のドキュメントを横断し、ローカルまたはクラウドLLMで引用付きの多段階調査を行うセルフホスト型リサーチエージェント',
    zh: '自托管深度研究智能体，可在arXiv、PubMed、网络及自有文档上使用本地或云端LLM进行多步骤、带引用的研究',
    es: 'Agente de investigación profunda autoalojado que realiza investigaciones citadas de varios pasos en arXiv, PubMed, la web y tus propios documentos con LLM locales o en la nube',
    pt: 'Agente de pesquisa profunda auto-hospedado que realiza pesquisas citadas em várias etapas em arXiv, PubMed, na web e nos seus próprios documentos com LLMs locais ou na nuvem',
    ar: 'وكيل بحث معمّق مستضاف ذاتيًا يجري أبحاثًا موثقة متعددة الخطوات عبر arXiv وPubMed والويب ومستنداتك الخاصة باستخدام نماذج لغوية محلية أو سحابية',
    ko: 'arXiv, PubMed, 웹, 자체 문서를 아우르며 로컬 또는 클라우드 LLM으로 다단계 인용 리서치를 수행하는 셀프호스팅 딥리서치 에이전트',
  },
  reviewSlug: 'local-deep-research-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
