// Local AI App Directory — OpenRAG (layer: RAG platform / document search with a chat interface)
// Added 2026-10-23. Facts verified 2026-10-23 against github.com/langflow-ai/openrag (README, LICENSE, release v0.8.0
// published 2026-10-01, Apache-2.0) and docs.openr.ag (quickstart, install options, troubleshooting, configuration reference).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openrag',
  name: 'OpenRAG',
  categories: ['rag-frameworks', 'document-pdf-chat'],
  interfaces: ['web', 'cli'], // browser UI for chat and knowledge, terminal UI (TUI) to install and run the services
  locality: 'hybrid', // OpenAI is the default provider; Ollama is supported for local models, and documents are parsed by a local Docling container, docs.openr.ag, verified 2026-10-23
  platforms: ['mac', 'linux', 'win'], // Windows only inside WSL (docs.openr.ag/install-options); no native Windows install
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'], // also IBM watsonx.ai, per the configuration reference
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: null, variesByModel: true }, // docs.openr.ag/support/troubleshoot: 8 GB minimum recommended RAM, 50 GB free disk; gpt-oss:20b needs 16 GB for local Ollama
  stars: 4657, // github.com/langflow-ai/openrag, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['docs', 'agent', 'build'],
  url: 'openr.ag',
  storeLinks: {
    github: 'https://github.com/langflow-ai/openrag',
    web: 'https://www.openr.ag',
  },
  installEffort: 'one-command',
  installEvidence: 'docs.openr.ag/quickstart: "uvx --python 3.13 openrag" starts a terminal UI that installs the services (Docker or Podman is installed if missing); Windows only inside WSL; no installer or desktop build on the GitHub release v0.8.0 (assets: openrag-0.8.0-py3-none-any.whl and .tar.gz); verified 2026-10-23',
  installOn: ['mac', 'linux'],
  tagline: {
    en: 'Open-source agentic RAG platform that bundles Langflow, OpenSearch and Docling into one package for searching and chatting with your documents',
    de: 'Open-Source-Plattform für agentisches RAG, die Langflow, OpenSearch und Docling in einem Paket bündelt, um Ihre Dokumente zu durchsuchen und mit ihnen zu chatten',
    fr: 'Plateforme RAG agentique open source qui réunit Langflow, OpenSearch et Docling dans un seul paquet pour rechercher dans vos documents et dialoguer avec eux',
    ja: 'Langflow・OpenSearch・Doclingを1つのパッケージにまとめた、文書検索とチャットのためのオープンソースのエージェント型RAGプラットフォーム',
    zh: '开源的智能体 RAG 平台，将 Langflow、OpenSearch 和 Docling 打包在一起，用于检索文档并与文档对话',
    es: 'Plataforma RAG agéntica de código abierto que reúne Langflow, OpenSearch y Docling en un solo paquete para buscar en tus documentos y chatear con ellos',
    pt: 'Plataforma RAG agêntica de código aberto que reúne Langflow, OpenSearch e Docling em um único pacote para pesquisar seus documentos e conversar com eles',
    ar: 'منصة RAG وكيلية مفتوحة المصدر تجمع Langflow وOpenSearch وDocling في حزمة واحدة للبحث في مستنداتك والدردشة معها',
    ko: 'Langflow, OpenSearch, Docling을 하나의 패키지로 묶어 문서를 검색하고 대화할 수 있는 오픈소스 에이전틱 RAG 플랫폼',
  },
  mcpSupport: true, // docs.openr.ag/what-is-openrag: MCP server integration via the embedded Langflow editor
  // Comparison attributes, each verified against docs.openr.ag and the GitHub README on 2026-10-23; apiServer is not
  // stated for a local server on the pages checked (only SDKs), so it stays unset (not stated, never false).
  compare: { visualBuilder: true, localLlm: true, agents: true, dockerDeploy: true },
  reviewSlug: 'openrag-review',
  pqReview: {
    date: '2026-10-23',
    version: '0.8.0',
    versionSourceUrl: 'https://github.com/langflow-ai/openrag/releases',
  },
  verdict: 'Best for developers who want a ready-wired, Apache-2.0 RAG stack (Langflow, OpenSearch, Docling) with a chat UI and are happy to run containers through a terminal setup; limited by the Docker/Podman and 50 GB disk needs, WSL-only Windows support and a default OpenAI path.',
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-23', // GitHub API: last push 2026-10-23, latest release v0.8.0 published 2026-10-01, read 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/langflow-ai/openrag',
}
