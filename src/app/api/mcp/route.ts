// Public, read-only, unauthenticated MCP server exposing PromptQuorum's
// content (all 7 clusters) and local-LLM software directory to any
// MCP-compatible client (Claude, or any other client speaking the open MCP
// protocol) over Streamable HTTP. Stateless — every call is a pure read
// against data the site already builds, so no session store is needed.
//
// This route stays a thin adapter: all actual logic lives in
// src/lib/mcp/tools.ts, matching how src/app/api/search-index/[lang]/
// route.ts delegates to buildAllSearchEntries() rather than holding logic
// itself.

import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'
import {
  searchPromptquorum,
  getArticle,
  listClusters,
  getAppDetails,
  explainLicense,
  ArticleNotFoundError,
  AppNotFoundError,
} from '@/lib/mcp/tools'
import { recordMcpCall, type McpToolName } from '@/lib/mcp/usage'

export const runtime = 'nodejs'

function jsonResult(data: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }] }
}

function errorResult(message: string) {
  return { content: [{ type: 'text' as const, text: message }], isError: true }
}

async function withUsageTracking<T>(toolName: McpToolName, fn: () => T): Promise<T> {
  await recordMcpCall(toolName)
  return fn()
}

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      'search_promptquorum',
      {
        title: 'Search PromptQuorum',
        description:
          'Search PromptQuorum\'s local-LLM guides, prompt-engineering articles, and software directory. Returns titles, short descriptions, and URLs — call get_article for full content.',
        inputSchema: z.object({
          query: z.string().describe('Search query, e.g. "run Llama on a Mac" or "vector database"'),
          lang: z.string().optional().describe('Language code (en, de, fr, ja, zh, es, pt, ar, ko). Defaults to all languages if omitted.'),
          cluster: z
            .string()
            .optional()
            .describe('Restrict to one cluster: local-llms, prompt-engineering, power-local-llm, prompt-bites, smart-home, balcony-solar, blog'),
          limit: z.number().int().min(1).max(25).optional().describe('Max results, default 10'),
        }),
      },
      async (args) => withUsageTracking('search_promptquorum', () => jsonResult(searchPromptquorum(args)))
    )

    server.registerTool(
      'get_article',
      {
        title: 'Get PromptQuorum article',
        description: 'Fetch the full content of one PromptQuorum article by cluster + slug (from a search_promptquorum result URL).',
        inputSchema: z.object({
          cluster: z.string().describe('Cluster the article belongs to, e.g. "local-llms" or "power-local-llm"'),
          slug: z.string().describe('URL slug of the article'),
          lang: z.string().optional().describe('Language code, defaults to en'),
        }),
      },
      async (args) =>
        withUsageTracking('get_article', () => {
          try {
            return jsonResult(getArticle(args))
          } catch (err) {
            if (err instanceof ArticleNotFoundError) return errorResult(err.message)
            throw err
          }
        })
    )

    server.registerTool(
      'list_clusters',
      {
        title: 'List PromptQuorum content clusters',
        description: 'List every content section on PromptQuorum (local-llms, prompt-engineering, power-local-llm, etc.) with a short description of each.',
        inputSchema: z.object({}),
      },
      async () => withUsageTracking('list_clusters', () => jsonResult(listClusters()))
    )

    server.registerTool(
      'get_app_details',
      {
        title: 'Get local-LLM software directory entry',
        description: 'Fetch full directory data (license, hardware requirements, platforms, price, stars, URL) for one tool in the Local LLM Software Directory.',
        inputSchema: z.object({
          slug: z.string().describe('Directory slug of the tool, e.g. "ollama" or "litellm"'),
        }),
      },
      async (args) =>
        withUsageTracking('get_app_details', () => {
          try {
            return jsonResult(getAppDetails(args))
          } catch (err) {
            if (err instanceof AppNotFoundError) return errorResult(err.message)
            throw err
          }
        })
    )

    server.registerTool(
      'explain_license',
      {
        title: 'Explain a software license',
        description: 'Explain the core rule of an open-source/source-available license string (e.g. "AGPL-3.0", "Apache 2.0", "MIT") in plain language.',
        inputSchema: z.object({
          licenseString: z.string().describe('Raw license string, e.g. "AGPL-3.0" or "Apache 2.0"'),
        }),
      },
      async (args) => withUsageTracking('explain_license', () => jsonResult(explainLicense(args)))
    )
  },
  {
    serverInfo: { name: 'promptquorum', version: '1.0.0' },
  }
)

export { handler as GET, handler as POST }
