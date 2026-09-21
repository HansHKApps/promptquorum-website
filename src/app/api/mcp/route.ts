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
  searchApps,
  listCategories,
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
      'list_categories',
      {
        title: 'List directory categories, use cases and operating systems',
        description:
          'List the valid category, use-case and OS values that search_apps accepts. Call this first when helping a user pick a local-AI app, so follow-up questions use real filter values.',
        inputSchema: z.object({}),
      },
      async () => withUsageTracking('list_categories', () => jsonResult(listCategories()))
    )

    server.registerTool(
      'search_apps',
      {
        title: 'Recommend local-AI apps from the directory',
        description:
          'Find apps in the Local LLM Software Directory matching what the user wants to do and their hardware. Answers only from curated directory data. Ask the user for their goal, OS and RAM/VRAM first, then return the top 2-3 results with download links and caveats, and always relay the disclaimer.',
        inputSchema: z.object({
          query: z.string().optional().describe('Free-text goal, e.g. "image generation" or "chat with PDFs"'),
          category: z.string().optional().describe('Category or group key from list_categories, e.g. "image-generation" or "voice-audio"'),
          useCase: z.enum(['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']).optional(),
          os: z.enum(['mac', 'win', 'linux', 'ios', 'android', 'web']).optional().describe("User's operating system"),
          ramGb: z.number().min(0).optional().describe("User's system RAM in GB; apps needing more are excluded"),
          vramGb: z.number().min(0).optional().describe("User's GPU VRAM in GB (unified memory counts on Apple Silicon); apps needing more are excluded"),
          price: z.enum(['free', 'freemium', 'paid']).optional(),
          limit: z.number().int().min(1).max(15).optional().describe('Max results, default 5'),
        }),
      },
      async (args) => withUsageTracking('search_apps', () => jsonResult(searchApps(args)))
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

// mcp-handler doesn't let us pass response headers through its own options,
// and next.config.ts's headers() override for this path did not take effect
// against real production (confirmed by testing the live URL, not just
// `next start`) — Vercel's docs point at the Response object itself as the
// reliable mechanism, so wrap the handler to add it directly. Every call is
// a live tool invocation or protocol handshake; none of it is cacheable.
async function withNoStore(request: Request): Promise<Response> {
  const response = await handler(request)
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', 'no-store')
  headers.set('CDN-Cache-Control', 'no-store')
  headers.set('Vercel-CDN-Cache-Control', 'no-store')
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}

export { withNoStore as GET, withNoStore as POST }
