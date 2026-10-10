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
import { ResourceTemplate } from '@modelcontextprotocol/server'
import { Ratelimit } from '@upstash/ratelimit'
import { z } from 'zod'
import { redis } from '@/lib/redis'
import {
  searchPromptquorum,
  getArticle,
  listClusters,
  getAppDetails,
  explainLicense,
  searchApps,
  listCategories,
  compareApps,
  getLatest,
  findRelatedContent,
  ArticleNotFoundError,
  AppNotFoundError,
  COMPARE_CRITERIA,
} from '@/lib/mcp/tools'
import {
  findBestApps,
  checkHardwareCompatibility,
  estimateVramTool,
  recommendStack,
  findLocalAlternative,
  getAppAlternatives,
  getHandsOnTestFindings,
} from '@/lib/mcp/directory-tools'
import { STACK_RECIPES } from '@/lib/power-local-llm/stacks'
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

// Known "not found / bad input" errors become a structured isError result the
// model can act on (with did-you-mean suggestions) instead of a protocol error.
function run(toolName: McpToolName, fn: () => unknown) {
  return withUsageTracking(toolName, () => {
    try {
      return jsonResult(fn())
    } catch (err) {
      if (err instanceof AppNotFoundError || err instanceof ArticleNotFoundError) return errorResult(err.message)
      throw err
    }
  })
}

const OS_ENUM = z.enum(['mac', 'win', 'linux', 'ios', 'android', 'web'])
const SERVER_VERSION = '2.0.0'
const SITE = 'https://www.promptquorum.com'
const mdResource = (uri: URL, text: string) => ({ contents: [{ uri: uri.href, mimeType: 'text/markdown', text }] })
const jsonResource = (uri: URL, data: unknown) => ({ contents: [{ uri: uri.href, mimeType: 'application/json', text: JSON.stringify(data, null, 2) }] })
const userPrompt = (text: string) => ({ messages: [{ role: 'user' as const, content: { type: 'text' as const, text } }] })

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      'search_promptquorum',
      {
        title: 'Search PromptQuorum',
        description:
          'Free-text search across PromptQuorum\'s local-LLM guides, prompt-engineering articles, reviews and software directory. Returns titles, short descriptions, and URLs — call get_article for full content. Use this for "how do I…" and "what is…" questions; for choosing an app use find_best_apps or search_apps instead. Example: {"query":"run Llama on a Mac","limit":5}.',
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
        description:
          'Fetch full directory data (license, hardware requirements, platforms, price, stars, URL) for one tool in the Local LLM Software Directory. Unknown slugs return "did you mean" suggestions. Example: {"slug":"ollama"}. Includes real URLs (url, article, relatedArticles, categoryGuide, directoryUrl) — your answer MUST render each of these as a clickable link. "dataVerifiedAt"/"listingFreshness" show how recently PromptQuorum checked this listing, separate from the tool\'s own release history.',
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
          'List the valid category, use-case and OS values that search_apps accepts, each with a "count" of listed apps and up to 3 "exampleApps" — use these to pick a plausible category instead of guessing one blind, and to check a category actually has listings before recommending it. Call this first when helping a user pick a local-AI app, so follow-up questions use real filter values.',
        inputSchema: z.object({}),
      },
      async () => withUsageTracking('list_categories', () => jsonResult(listCategories()))
    )

    server.registerTool(
      'search_apps',
      {
        title: 'Recommend local-AI apps from the directory',
        description:
          'Find apps in the Local LLM Software Directory matching what the user wants to do and their hardware. Answers only from curated directory data. Ask the user for their goal, OS and RAM/VRAM first, then present at most the top 2-3 results in your answer even though "limit" (default 5, max 15) may return more — use "offset" to page through the rest of "totalMatches" if the user wants alternatives. "hardwareFit: unknown" means unverified, not confirmed to fit — do not present it as a match. A zero-match response has no "results" but includes a "scope" field describing what this directory does and does not cover, plus "suggestedCategories" — use those instead of just reporting "no results." Every result includes real URLs (downloadUrl, article, directoryUrl, categoryGuide) and a "whyMatched" reason — your answer MUST render each URL as a clickable link, never mention an app without linking it, and always relay the disclaimer.',
        inputSchema: z.object({
          query: z.string().optional().describe('Free-text goal, e.g. "image generation" or "chat with PDFs"'),
          category: z.string().optional().describe('Category or group key from list_categories, e.g. "image-generation" or "voice-audio"'),
          useCase: z.enum(['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']).optional(),
          os: z.enum(['mac', 'win', 'linux', 'ios', 'android', 'web']).optional().describe("User's operating system"),
          ramGb: z.number().min(0).optional().describe("User's system RAM in GB; apps needing more are excluded"),
          vramGb: z.number().min(0).optional().describe("User's GPU VRAM in GB (unified memory counts on Apple Silicon); apps needing more are excluded"),
          price: z.enum(['free', 'freemium', 'paid']).optional(),
          worksWith: z.string().optional().describe('Filter by an integration/backend the app works with, e.g. "Ollama", "LM Studio", "llama.cpp", "MCP". Matches case-insensitively/substring.'),
          installEffort: z.enum(['installer', 'one-command', 'terminal-setup', 'hosted']).optional().describe('Only apps whose verified easiest install path is this. installer = download and run; one-command = single terminal command; terminal-setup = multi-step terminal; hosted = nothing to install.'),
          locality: z.enum(['local', 'hybrid', 'cloud']).optional().describe('local = runs fully on the user\'s machine (offline-capable); hybrid = local plus cloud options; cloud = hosted.'),
          mcpSupport: z.boolean().optional().describe('true = only apps with documented MCP support'),
          license: z.string().optional().describe('Case-insensitive substring of the license string, e.g. "MIT", "Apache", "GPL"'),
          sortBy: z.enum(['stars', 'recent', 'easiest']).optional().describe('Ordering when no free-text query is given: stars (default; reviewed apps first), recent (newest listing first), easiest (simplest install first).'),
          limit: z.number().int().min(1).max(15).optional().describe('Max results per page, default 5'),
          offset: z.number().int().min(0).optional().describe('Results to skip, for paging past "limit" through "totalMatches". Default 0.'),
        }),
      },
      async (args) => withUsageTracking('search_apps', () => jsonResult(searchApps(args)))
    )

    server.registerTool(
      'compare_apps',
      {
        title: 'Compare local-AI apps side by side',
        description:
          'Compare 2-5 apps from the Local LLM Software Directory: returns a criteria matrix (price, license, platforms, RAM/VRAM, install effort, locality, use cases, MCP support, popularity), per-need leaders in "bestFor" (easiest install, lightest hardware, cheapest, …) — never one universal winner — plus a short "summary". Cells that say "not researched" mean unknown, not negative. Call after find_best_apps/search_apps has produced a shortlist; use slugs from those results. Example: {"slugs":["ollama","lm-studio","jan"],"criteria":["price","installEffort","ramGb"]}. Every app includes real URLs — your answer MUST render each as a clickable link.',
        inputSchema: z.object({
          slugs: z.array(z.string()).min(2).max(5).describe('2-5 directory slugs to compare, e.g. ["ollama", "lm-studio"]'),
          criteria: z.array(z.enum(COMPARE_CRITERIA)).optional().describe('Limit the matrix to these criteria. Default: all.'),
        }),
      },
      async (args) => run('compare_apps', () => compareApps(args))
    )

    server.registerTool(
      'explain_license',
      {
        title: 'Explain a software license',
        description:
          'Explain the core rule of an open-source/source-available license string (e.g. "AGPL-3.0", "Apache 2.0", "MIT") in plain language. Pass useCase to get a rule of thumb for a concrete scenario (commercial use, modifying, redistributing a modified build, hosting as a service, embedding in a product). Distinguishes the app license from model licenses; general information, not legal advice. Take the license string from get_app_details. Example: {"licenseString":"AGPL-3.0","useCase":"host-as-service"}.',
        inputSchema: z.object({
          licenseString: z.string().describe('Raw license string, e.g. "AGPL-3.0" or "Apache 2.0"'),
          useCase: z.enum(['commercial-use', 'modify', 'redistribute-modified', 'host-as-service', 'embed-in-product']).optional().describe('Scenario to evaluate the license against'),
        }),
      },
      async (args) => withUsageTracking('explain_license', () => jsonResult(explainLicense(args)))
    )

    server.registerTool(
      'find_best_apps',
      {
        title: 'Find the best local-AI apps for a goal and machine',
        description:
          'Start here when a user describes what they want in plain words ("chat with my PDFs on a 24 GB Mac without the terminal"). Returns a ranked shortlist with reasons ("whyMatched"), honest "tradeoffs", hardware fit, install effort and links, plus "missingInfo" listing what to ask the user to sharpen the answer. Ask for goal, OS and RAM/VRAM first when missing. Lower-level filtering is search_apps. Example: {"goal":"chat with PDFs","os":"mac","ramGb":24,"experience":"beginner","offlineOnly":true}.',
        inputSchema: z.object({
          goal: z.string().min(2).describe('What the user wants to do, in their words'),
          os: OS_ENUM.optional(),
          ramGb: z.number().min(0).optional().describe('System RAM in GB (unified memory on Apple Silicon)'),
          vramGb: z.number().min(0).optional().describe('GPU VRAM in GB, if a discrete GPU'),
          experience: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('beginner prefers installers over terminal setups'),
          offlineOnly: z.boolean().optional().describe('true = only apps that run fully locally'),
          freeOnly: z.boolean().optional(),
          limit: z.number().int().min(1).max(8).optional().describe('Default 3'),
        }),
      },
      async (args) => run('find_best_apps', () => findBestApps(args))
    )

    server.registerTool(
      'check_hardware_compatibility',
      {
        title: 'Will this app (and model) run on my computer?',
        description:
          'Answer "can I run X on my machine?" for one directory app: platform support, the app\'s researched RAM/VRAM requirement, and optionally whether a specific model size/quantization fits (an estimate, labelled as such). Returns fits / too-demanding / unknown with the reason, plus lighter alternatives when it does not fit. "unknown" = not verified, never "will work". Example: {"slug":"comfyui","os":"win","vramGb":8} or {"slug":"ollama","os":"mac","ramGb":16,"modelBillions":14,"quantization":"Q4"}.',
        inputSchema: z.object({
          slug: z.string().describe('Directory slug, e.g. "ollama"'),
          os: OS_ENUM.optional(),
          ramGb: z.number().min(0).optional(),
          vramGb: z.number().min(0).optional(),
          modelBillions: z.number().min(0.1).max(2000).optional().describe('Model size in billions of parameters, e.g. 8 for an 8B model'),
          quantization: z.string().optional().describe('FP16, Q8, Q6, Q5, Q4 (default), Q3 or Q2'),
          contextLength: z.string().optional().describe('Context window, e.g. "8K" (default 4K)'),
        }),
      },
      async (args) => run('check_hardware_compatibility', () => checkHardwareCompatibility(args))
    )

    server.registerTool(
      'recommend_stack',
      {
        title: 'Recommend a multi-app local-AI stack',
        description:
          'Recommend a ready-made combination of apps (e.g. Ollama + Open WebUI + AnythingLLM) for a goal, filtered by hardware and OS, with each app\'s links and the stack\'s hardware floor. Use when the user needs several tools working together rather than one app. Stacks come from PromptQuorum\'s "Common Real-World Stacks". Example: {"goal":"coding assistant","ramGb":32,"vramGb":12}.',
        inputSchema: z.object({
          goal: z.string().min(2).describe('e.g. "document chat", "coding", "voice assistant", "image generation", "team server"'),
          os: OS_ENUM.optional(),
          ramGb: z.number().min(0).optional(),
          vramGb: z.number().min(0).optional(),
          limit: z.number().int().min(1).max(6).optional().describe('Default 3'),
        }),
      },
      async (args) => run('recommend_stack', () => recommendStack(args))
    )

    server.registerTool(
      'estimate_vram',
      {
        title: 'Estimate VRAM/memory for a model',
        description:
          'Estimate the GPU/unified memory a model needs from its size, quantization and context length (the same math as PromptQuorum\'s VRAM calculator). Optionally pass availableGb to get fits / tight / exceeds and a quantization that would fit. The result is a rule-of-thumb estimate, not a benchmark, and says nothing about speed. Example: {"modelBillions":32,"quantization":"Q4","contextLength":"8K","availableGb":24}.',
        inputSchema: z.object({
          modelBillions: z.number().min(0.1).max(2000).describe('Parameters in billions, e.g. 8, 14, 70'),
          quantization: z.string().optional().describe('FP16, Q8, Q6, Q5, Q4 (default), Q3, Q2'),
          contextLength: z.string().optional().describe('Context window like "4K", "8K", "32K", "128K" (default 4K)'),
          batchSize: z.number().int().min(1).max(8).optional().describe('Parallel requests, default 1'),
          availableGb: z.number().min(0).optional().describe('Memory the user has, to get a fit verdict'),
        }),
      },
      async (args) => run('estimate_vram', () => estimateVramTool(args))
    )

    server.registerTool(
      'find_local_alternative',
      {
        title: 'Find a local alternative to a cloud AI tool',
        description:
          'Given a cloud AI product (e.g. "Midjourney", "ElevenLabs", "DALL-E"), return curated local alternatives ranked closest/similar/partial, with the honest gap note. Covers image-generation and voice/audio cloud tools; for other cloud tools the response says so and falls back to a directory text search. Example: {"cloudApp":"ElevenLabs"}.',
        inputSchema: z.object({
          cloudApp: z.string().min(2).describe('Name of the cloud product, e.g. "Midjourney"'),
        }),
      },
      async (args) => run('find_local_alternative', () => findLocalAlternative(args))
    )

    server.registerTool(
      'get_app_alternatives',
      {
        title: 'Find alternatives to a directory app',
        description:
          'Find similar apps to one the user already knows (same primary category, ranked by shared use cases), optionally restricted to free apps, an OS, their hardware, or easier installs. Use when an app is too hard, too expensive, archived or incompatible. Example: {"slug":"comfyui","easierInstall":true,"os":"mac"}.',
        inputSchema: z.object({
          slug: z.string().describe('Directory slug of the app to find alternatives for'),
          os: OS_ENUM.optional(),
          freeOnly: z.boolean().optional(),
          easierInstall: z.boolean().optional().describe('true = sort simplest install first'),
          ramGb: z.number().min(0).optional(),
          vramGb: z.number().min(0).optional(),
          limit: z.number().int().min(1).max(10).optional().describe('Default 5'),
        }),
      },
      async (args) => run('get_app_alternatives', () => getAppAlternatives(args))
    )

    server.registerTool(
      'get_latest',
      {
        title: 'What\'s new on PromptQuorum',
        description:
          'Recently added directory apps, recently updated articles and published hands-on tests, newest first, each with its date and URL. Use for "what\'s new" questions or to find fresh content on a topic area. Example: {"type":"apps","limit":10,"since":"2026-09-01"}.',
        inputSchema: z.object({
          type: z.enum(['all', 'apps', 'articles', 'hands-on']).optional().describe('Default all'),
          limit: z.number().int().min(1).max(30).optional().describe('Default 10'),
          since: z.string().optional().describe('ISO date YYYY-MM-DD; only items on or after it'),
          cluster: z.string().optional().describe('Restrict articles to one cluster, e.g. "power-local-llm"'),
        }),
      },
      async (args) => withUsageTracking('get_latest', () => jsonResult(getLatest(args)))
    )

    server.registerTool(
      'get_hands_on_test',
      {
        title: 'Get PromptQuorum hands-on test findings',
        description:
          'Structured findings from PromptQuorum\'s own hands-on tests of apps: verdict, scores, findings with evidence labels (observed / measured / vendor-claim / tester-view), tester errors and memory-fit data. Call without a slug to list which apps have been tested. If an app was not tested the response says so — never describe untested apps as tested. Example: {"slug":"draw-things"}.',
        inputSchema: z.object({
          slug: z.string().optional().describe('Directory slug; omit to list tested apps'),
        }),
      },
      async (args) => run('get_hands_on_test', () => getHandsOnTestFindings(args))
    )

    server.registerTool(
      'find_related_content',
      {
        title: 'Find reviews, guides and tests related to an app or topic',
        description:
          'Collect PromptQuorum\'s own material for an app (review, hands-on test, comparison guide, setup/install articles) or a free-text topic. Use after recommending an app so the user can read the full review or setup guide. Example: {"app":"open-webui"} or {"topic":"run a local model offline on Windows","lang":"de"}.',
        inputSchema: z.object({
          app: z.string().optional().describe('Directory slug'),
          topic: z.string().optional().describe('Free-text topic when no app is given'),
          lang: z.string().optional().describe('Language code (en, de, fr, ja, zh, es, pt, ar, ko)'),
          limit: z.number().int().min(1).max(20).optional(),
        }),
      },
      async (args) => run('find_related_content', () => findRelatedContent(args))
    )

    // --- Resources: stable reference data a host can load without tool calls ---
    server.registerResource(
      'categories',
      'promptquorum://categories',
      { title: 'Directory categories, use cases and operating systems', description: 'Valid filter values for search_apps with app counts per category.', mimeType: 'application/json' },
      async (uri) => jsonResource(uri, listCategories())
    )

    server.registerResource(
      'stacks',
      'promptquorum://stacks',
      { title: 'Common real-world local-AI stacks', description: 'Goal → app combination → hardware floor, with directory slugs.', mimeType: 'application/json' },
      async (uri) => jsonResource(uri, STACK_RECIPES)
    )

    server.registerResource(
      'methodology',
      'promptquorum://methodology',
      { title: 'How to read PromptQuorum directory data', description: 'What verified, unknown and estimate mean in directory and tool results.', mimeType: 'text/markdown' },
      async (uri) =>
        mdResource(
          uri,
          [
            '# How to read PromptQuorum data',
            '',
            '- **Directory data is editorial.** It is curated by PromptQuorum, may be outdated, and download links are not verified. Check the official source before installing.',
            '- **null / "not researched" means unknown**, never "no" and never "fits".',
            '- **hardwareFit** is "fits" only when a researched requirement was compared with the hardware you gave; "unknown" means not verified; "too-demanding" means a researched requirement exceeds it.',
            '- **VRAM/model figures are estimates** (rule of thumb with a 25% margin), not benchmarks.',
            '- **Hands-on tests** carry evidence labels: observed / measured are from the test; vendor-claim was not verified by us; tester-view is opinion. Untested apps are reported as untested.',
            '- **Licenses**: the app\'s license differs from the model\'s license. Explanations are not legal advice.',
            `- Full documentation: ${SITE}/mcp`,
          ].join('\n')
        )
    )

    server.registerResource(
      'app',
      new ResourceTemplate('promptquorum://app/{slug}', { list: undefined }),
      { title: 'Directory app entry', description: 'Full directory record for one app, by slug.', mimeType: 'application/json' },
      async (uri, variables) => jsonResource(uri, getAppDetails({ slug: String(variables.slug) }))
    )

    server.registerResource(
      'article',
      new ResourceTemplate('promptquorum://article/{cluster}/{slug}', { list: undefined }),
      { title: 'PromptQuorum article', description: 'Full article content (English) by cluster and slug.', mimeType: 'application/json' },
      async (uri, variables) => jsonResource(uri, getArticle({ cluster: String(variables.cluster), slug: String(variables.slug) }))
    )

    // --- Prompts: reusable user journeys the host can offer as templates ---
    server.registerPrompt(
      'recommend_local_ai_stack',
      {
        title: 'Recommend a local AI stack for my hardware',
        description: 'Guide the assistant to ask about hardware and goal, then recommend a stack with PromptQuorum data.',
        argsSchema: z.object({
          goal: z.string().describe('What you want to do, e.g. "chat with my PDFs"'),
          hardware: z.string().optional().describe('e.g. "MacBook Pro M3, 24 GB" or "Windows, RTX 3060 12 GB, 32 GB RAM"'),
        }),
      },
      ({ goal, hardware }) =>
        userPrompt(
          `I want to: ${goal}.${hardware ? ` My hardware: ${hardware}.` : ''}\n\nUsing the PromptQuorum MCP server: if my OS or RAM/VRAM is missing, ask me first. Then call recommend_stack and find_best_apps, check the top pick with check_hardware_compatibility, and answer with: one best pick, at most two alternatives, the hardware floor, trade-offs, and links to each app and its review. Treat "unknown" fit as unverified and say so.`
        )
    )

    server.registerPrompt(
      'compare_local_ai_tools',
      {
        title: 'Compare local AI tools for a use case',
        description: 'Compare 2-5 named apps for a specific need using the directory matrix.',
        argsSchema: z.object({
          apps: z.string().describe('Comma-separated app names, e.g. "Ollama, LM Studio, Jan"'),
          useCase: z.string().describe('What you will use them for, e.g. "coding"'),
        }),
      },
      ({ apps, useCase }) =>
        userPrompt(
          `Compare these local AI apps for ${useCase}: ${apps}.\n\nResolve each name to a directory slug with search_apps, call compare_apps, then recommend per need (not one universal winner). Call out "not researched" cells as unknowns and link each app and its review.`
        )
    )

    server.registerPrompt(
      'find_offline_alternative',
      {
        title: 'Find a fully offline alternative to a cloud tool',
        description: 'Find local alternatives to a cloud AI product and be honest about the gaps.',
        argsSchema: z.object({ cloudApp: z.string().describe('The cloud product, e.g. "Midjourney"') }),
      },
      ({ cloudApp }) =>
        userPrompt(
          `Find local, offline alternatives to ${cloudApp}. Use find_local_alternative; if there is no curated mapping, say so and use search_apps with locality "local". State the gap note and never claim equal output quality. Link each alternative.`
        )
    )

    server.registerPrompt(
      'check_commercial_license',
      {
        title: 'Check whether I can use an app commercially',
        description: 'Explain the license implications of using a local AI app in a business or product.',
        argsSchema: z.object({
          app: z.string().describe('App name or slug'),
          scenario: z.string().describe('e.g. "use internally at my company" or "embed in the product we sell"'),
        }),
      },
      ({ app, scenario }) =>
        userPrompt(
          `I want to use ${app} to: ${scenario}.\n\nCall get_app_details for the license string, then explain_license with the closest useCase. Separate the app license from any model license, say which parts you could not verify, and finish with the reminder that this is general information, not legal advice.`
        )
    )
  },
  {
    serverInfo: { name: 'promptquorum', version: SERVER_VERSION },
  }
)

// mcp-handler doesn't let us pass response headers through its own options,
// and next.config.ts's headers() override for this path did not take effect
// against real production (confirmed by testing the live URL, not just
// `next start`) — Vercel's docs point at the Response object itself as the
// reliable mechanism, so wrap the handler to add it directly. Every call is
// a live tool invocation or protocol handshake; none of it is cacheable.
// Generous per-IP limit: this server stays public and free; the limit only
// protects against runaway loops and scraping. The IP is hashed into the
// limiter key by Upstash's sliding window and never stored with usage counters.
// A Redis outage must never take the server down, so failures fail open.
const mcpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(120, '1 m'),
  prefix: 'rl:mcp:ip',
})

async function rateLimited(request: Request): Promise<Response | null> {
  if (request.method !== 'POST') return null
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const { success, reset } = await mcpLimiter.limit(ip)
    if (success) return null
    const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000))
    return new Response(
      JSON.stringify({ jsonrpc: '2.0', error: { code: -32029, message: `Rate limit exceeded (120 requests/minute). Retry in ${retryAfter}s.` }, id: null }),
      { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': String(retryAfter), 'Cache-Control': 'no-store' } },
    )
  } catch (err) {
    console.error('[mcp ratelimit] failed open', err)
    return null
  }
}

async function withNoStore(request: Request): Promise<Response> {
  const limited = await rateLimited(request)
  if (limited) return limited
  const response = await handler(request)
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', 'no-store')
  headers.set('CDN-Cache-Control', 'no-store')
  headers.set('Vercel-CDN-Cache-Control', 'no-store')
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}

export { withNoStore as GET, withNoStore as POST }
