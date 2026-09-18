// Local AI App Directory — web-search-mcp (layer: MCP tool server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "web-search-mcp" is a generic name shared by many unrelated
// MCP servers (pranavms13/web-search-mcp, guhcostan/web-search-mcp,
// sydasif/web-search-mcp, etc). This entry is github.com/mrkrsl/web-search-mcp,
// chosen specifically because its README frames it as built "for use with
// Local LLMs" (explicit LM Studio and LibreChat integration docs), matching
// this directory's local-AI focus more directly than the other candidates.
// Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'web-search-mcp',
  name: 'web-search-mcp',
  categories: ['agent-frameworks'],
  interfaces: ['cli', 'plugin'],
  locality: 'hybrid', // self-hosted MCP server, but it fetches live results from external search engines rather than running fully offline, verified 2026-09-18
  platforms: ['mac', 'win', 'linux'], // README: requires Node.js 18+/npm 8+, documents install paths for all three OSes, verified 2026-09-18
  worksWith: ['LM Studio', 'LibreChat'], // explicitly documented integrations, verified 2026-09-18
  engine: 'external', // proxies to Google/DuckDuckGo/Bing-style web search rather than running any model itself, verified 2026-09-18
  license: 'MIT', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // no ML inference of its own — a search/content-fetch tool called by whichever local LLM connects to it, verified 2026-09-18
  stars: 1100, // github.com/mrkrsl/web-search-mcp — GitHub's UI shows only the rounded "1.1k" badge (>1,000 stars), exact integer not available without authenticated API access, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent'],
  url: 'github.com/mrkrsl/web-search-mcp',
  tagline: {
    en: 'Locally hosted MCP server that gives local LLMs in tools like LM Studio real web search and page-content access.',
    de: 'Lokal gehosteter MCP-Server, der lokalen LLMs in Tools wie LM Studio echten Websuche- und Seiteninhaltszugriff verschafft.',
    fr: 'Serveur MCP hébergé localement qui donne aux LLM locaux dans des outils comme LM Studio un accès réel à la recherche web et au contenu des pages.',
    ja: 'LM Studioなどのツール内のローカルLLMに、実際のWeb検索とページ内容へのアクセスを提供するローカルホスト型MCPサーバー。',
    zh: '本地托管的MCP服务器，为LM Studio等工具中的本地大模型提供真实的网络搜索和网页内容访问能力。',
    es: 'Servidor MCP alojado localmente que otorga a los LLM locales en herramientas como LM Studio acceso real a la búsqueda web y al contenido de páginas.',
    pt: 'Servidor MCP hospedado localmente que dá a LLMs locais em ferramentas como o LM Studio acesso real a buscas na web e ao conteúdo de páginas.',
    ar: 'خادم MCP مستضاف محليًا يمنح نماذج اللغة المحلية في أدوات مثل LM Studio وصولاً حقيقيًا للبحث على الويب ومحتوى الصفحات.',
    ko: 'LM Studio 같은 도구의 로컬 LLM에 실제 웹 검색과 페이지 콘텐츠 접근 기능을 제공하는 로컬 호스팅 MCP 서버.',
  },
  mcpSupport: true, // it is an MCP server by definition — README: "A TypeScript MCP (Model Context Protocol) server", verified 2026-09-18
  lastVerifiedDate: '2026-09-18',
}
