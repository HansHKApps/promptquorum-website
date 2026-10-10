// Local AI App Directory — Microsoft Agent Framework (category: agent-frameworks, with sdks-libraries)
// Added 2026-10-10 so its existing review (microsoft-agent-framework-review) has a directory entry; the review
// shipped 2026-09-06 without one, so its "View in the directory" link had nothing to point at.
// Facts: license and language support checked 2026-10-10 against github.com/microsoft/agent-framework (MIT license;
// Python and C#/.NET, Go maintained separately in microsoft/agent-framework-go); the review's own MCP, multi-agent
// and Ollama statements are cited from Microsoft's documentation there.
// Left unset on purpose: pqReview (the review pins no exact release version) and lastVerifiedDate.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'microsoft-agent-framework',
  name: 'Microsoft Agent Framework',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid', // runs against local models (Ollama) or cloud providers (Foundry, Azure OpenAI, OpenAI, Anthropic)
  platforms: ['mac', 'win', 'linux'], // Python/.NET SDK: runs wherever those runtimes do; neither the repo page nor the review lists OSes (same convention as the AutoGen tile)
  worksWith: ['Ollama'],
  engine: 'library',
  license: 'MIT',
  price: 'free', // SDK is free; model and Azure service usage is billed by the provider
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM/GPU floor documented; depends entirely on the model backend the user attaches
  stars: 14000, // github.com/microsoft/agent-framework showed "14.0k" on 2026-10-10 (rounded by GitHub, not an exact count)
  addedDate: '2026-10-10',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/microsoft/agent-framework',
  tagline: {
    en: "Microsoft's unified SDK for AI agents and multi-agent workflows",
    de: 'Microsofts einheitliches SDK für KI-Agenten und Multi-Agenten-Workflows',
    fr: "Le SDK unifié de Microsoft pour les agents IA et les workflows multi-agents",
    ja: 'AIエージェントとマルチエージェントワークフローのためのMicrosoft統合SDK',
    zh: 'Microsoft 面向 AI 智能体与多智能体工作流的统一 SDK',
    es: 'El SDK unificado de Microsoft para agentes de IA y flujos de trabajo multiagente',
    pt: 'O SDK unificado da Microsoft para agentes de IA e fluxos de trabalho multiagente',
    ar: 'حزمة تطوير Microsoft الموحّدة لوكلاء الذكاء الاصطناعي وسير العمل متعدد الوكلاء',
    ko: 'AI 에이전트와 멀티에이전트 워크플로를 위한 Microsoft 통합 SDK',
  },
  reviewSlug: 'microsoft-agent-framework-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes taken from the review's own statements (MCP client/server support, graph-based multi-agent
  // workflows, tool calling); a missing key = not stated, never false.
  compare: { mcp: true, multiAgent: true, toolCalling: true },
  lastVerifiedDate: null,
}
