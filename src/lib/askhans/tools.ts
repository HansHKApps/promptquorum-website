// Ask Hans — tools handed to Claude. They call the same functions as the public MCP server
// (src/app/api/mcp/route.ts) in-process, so answers match what MCP clients see.
// Deliberately NOT exposed: the MCP session tools (start, set_consent, my_profile, forget_me,
// set_language) — Ask Hans has its own consent notice and stores nothing per person.

import { z } from 'zod'
import type Anthropic from '@anthropic-ai/sdk'
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
import { getPage, listPages, PageNotFoundError } from '@/lib/mcp/pages'
import { ASK_HANS_CATEGORIES, isCategoryKey } from './categories'
import { withConfidence } from './confidence'
import { ASK_HANS_LIMITS } from './config'
import { normalizePagePath } from './paths'
import { topicsFromToolInput, topicsFromToolResult, mergeTopics, type AnswerTopics } from './topics'

const OS = z.enum(['mac', 'win', 'linux', 'ios', 'ipados', 'watchos', 'android', 'web'])
const LANG = z.string().optional().describe('Ignored: the answer language is fixed by the visitor\'s message')

interface ToolDef {
  description: string
  schema: z.ZodObject<z.ZodRawShape>
  run: (args: never, ctx: ToolContext) => unknown
}

export interface ToolContext {
  lang: string
}

const TOOLS: Record<string, ToolDef> = {
  search_promptquorum: {
    description:
      'Free-text search across PromptQuorum guides, prompt-engineering articles, reviews and the software directory. Returns titles, short descriptions and URLs. For choosing an app use find_best_apps or search_apps instead.',
    schema: z.object({
      query: z.string(),
      lang: LANG,
      cluster: z.string().optional().describe('local-llms, prompt-engineering, power-local-llm, prompt-bites, smart-home, balcony-solar'),
      limit: z.number().int().min(1).max(10).optional(),
    }),
    run: (a: { query: string; lang?: string; cluster?: string; limit?: number }, c) =>
      searchPromptquorum({ ...a, lang: c.lang, limit: a.limit ?? 5 }),
  },
  get_article: {
    description: 'Full content of one PromptQuorum article by cluster + slug (taken from a search result URL). The result carries the article url: link it whenever you use its content.',
    schema: z.object({ cluster: z.string(), slug: z.string(), lang: LANG }),
    run: (a: { cluster: string; slug: string; lang?: string }, c) => {
      const res = getArticle({ ...a, lang: c.lang })
      // getArticle returns no URL; without one the model cannot link the article it just read from.
      const prefix = res.lang === 'en' ? '' : `/${res.lang}`
      const title = typeof res.article.title === 'string' ? res.article.title : res.slug
      return { ...res, title, url: `https://www.promptquorum.com${prefix}/${res.cluster}/${res.slug}` }
    },
  },
  list_pages: {
    description: 'List the pages of promptquorum.com that are not articles (home page, About, PromptQuorum app page, Security, Privacy, Impressum, frameworks, tool pages, section hubs) with URL and short description.',
    schema: z.object({ lang: LANG }),
    run: (_a: { lang?: string }, c) => listPages({ lang: c.lang }),
  },
  get_page: {
    description:
      'Read the text of one page that is not an article, by path from list_pages, e.g. "/" (home page), "/about", "/pq-apps", "/security", "/privacy", "/mcp-stats", "/askhans". Use it for questions about the site itself: what the home or About page says, who runs PromptQuorum, privacy, security. Link the page when you use it.',
    schema: z.object({ path: z.string(), lang: LANG }),
    run: async (a: { path: string; lang?: string }, c) => getPage({ path: a.path, lang: c.lang }),
  },
  list_clusters: {
    description: 'List every content section of PromptQuorum with a short description.',
    schema: z.object({}),
    run: () => listClusters(),
  },
  get_app_details: {
    description: 'Directory data (license, hardware needs, platforms, price, URLs) for one app. Unknown slugs return suggestions.',
    schema: z.object({ slug: z.string() }),
    run: (a: { slug: string }) => getAppDetails(a),
  },
  list_categories: {
    description: 'Valid category/use-case/OS values for search_apps, with listing counts and example apps.',
    schema: z.object({}),
    run: () => listCategories(),
  },
  search_apps: {
    description:
      'Find apps in the Local LLM Software Directory by goal, OS and hardware. Present at most the top 2-3 results. "hardwareFit: unknown" means unverified, not a match. Render URLs as links.',
    schema: z.object({
      query: z.string().optional(),
      category: z.string().optional(),
      useCase: z.enum(['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']).optional(),
      os: OS.optional(),
      ramGb: z.number().min(0).optional(),
      vramGb: z.number().min(0).optional(),
      price: z.enum(['free', 'freemium', 'paid']).optional(),
      worksWith: z.string().optional(),
      installEffort: z.enum(['installer', 'one-command', 'terminal-setup', 'hosted']).optional(),
      locality: z.enum(['local', 'hybrid', 'cloud']).optional(),
      mcpSupport: z.boolean().optional(),
      exposesApi: z.boolean().optional(),
      runsOn: z.enum(['selfhosted', 'rpi']).optional(),
      license: z.string().optional(),
      sortBy: z.enum(['stars', 'recent', 'easiest']).optional(),
      limit: z.number().int().min(1).max(8).optional(),
      offset: z.number().int().min(0).optional(),
    }),
    run: (a: Parameters<typeof searchApps>[0]) => searchApps(a),
  },
  compare_apps: {
    description: 'Compare 2-5 directory apps side by side (price, license, platforms, RAM/VRAM, install effort, locality). Use slugs from earlier results.',
    schema: z.object({
      slugs: z.array(z.string()).min(2).max(5),
      criteria: z.array(z.enum(COMPARE_CRITERIA)).optional(),
    }),
    run: (a: Parameters<typeof compareApps>[0]) => compareApps(a),
  },
  explain_license: {
    description: 'Plain-language explanation of a software license string (e.g. "AGPL-3.0"), optionally for a use case. General information, not legal advice.',
    schema: z.object({
      licenseString: z.string(),
      useCase: z.enum(['commercial-use', 'modify', 'redistribute-modified', 'host-as-service', 'embed-in-product']).optional(),
    }),
    run: (a: Parameters<typeof explainLicense>[0]) => explainLicense(a),
  },
  find_best_apps: {
    description:
      'Start here when a visitor describes a goal in plain words. Ranked shortlist with reasons, trade-offs, hardware fit, install effort and links, plus "missingInfo" to ask the visitor.',
    schema: z.object({
      goal: z.string().min(2),
      os: OS.optional(),
      ramGb: z.number().min(0).optional(),
      vramGb: z.number().min(0).optional(),
      experience: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
      offlineOnly: z.boolean().optional(),
      freeOnly: z.boolean().optional(),
      limit: z.number().int().min(1).max(5).optional(),
    }),
    run: (a: Parameters<typeof findBestApps>[0]) => findBestApps(a),
  },
  check_hardware_compatibility: {
    description: 'Will this directory app (and optionally a model size) run on the visitor\'s machine? Returns fits / too-demanding / unknown with the reason. "unknown" is never "will work".',
    schema: z.object({
      slug: z.string(),
      os: OS.optional(),
      ramGb: z.number().min(0).optional(),
      vramGb: z.number().min(0).optional(),
      modelBillions: z.number().min(0.1).max(2000).optional(),
      quantization: z.string().optional(),
      contextLength: z.string().optional(),
    }),
    run: (a: Parameters<typeof checkHardwareCompatibility>[0]) => checkHardwareCompatibility(a),
  },
  recommend_stack: {
    description: 'Recommend a combination of apps (e.g. Ollama + Open WebUI) for a goal, filtered by hardware and OS.',
    schema: z.object({
      goal: z.string().min(2),
      os: OS.optional(),
      ramGb: z.number().min(0).optional(),
      vramGb: z.number().min(0).optional(),
      limit: z.number().int().min(1).max(4).optional(),
    }),
    run: (a: Parameters<typeof recommendStack>[0]) => recommendStack(a),
  },
  estimate_vram: {
    description: 'Rule-of-thumb GPU/unified memory estimate for a model (size, quantization, context). Optionally pass availableGb for a fit verdict (on a Mac pass total unified memory with os "mac"; 8 GB is deducted for macOS). Not a benchmark.',
    schema: z.object({
      modelBillions: z.number().min(0.1).max(2000),
      quantization: z.string().optional(),
      contextLength: z.string().optional(),
      batchSize: z.number().int().min(1).max(8).optional(),
      availableGb: z.number().min(0).optional(),
      os: z.enum(['mac', 'other']).optional(),
    }),
    run: (a: Parameters<typeof estimateVramTool>[0]) => estimateVramTool(a),
  },
  find_local_alternative: {
    description: 'Local alternatives to a cloud AI product (e.g. "Midjourney", "ElevenLabs"), with the honest gap note.',
    schema: z.object({ cloudApp: z.string().min(2) }),
    run: (a: { cloudApp: string }) => findLocalAlternative(a),
  },
  get_app_alternatives: {
    description: 'Similar apps to one the visitor already knows, optionally free-only, per OS, hardware or easier install.',
    schema: z.object({
      slug: z.string(),
      os: OS.optional(),
      freeOnly: z.boolean().optional(),
      easierInstall: z.boolean().optional(),
      ramGb: z.number().min(0).optional(),
      vramGb: z.number().min(0).optional(),
      limit: z.number().int().min(1).max(6).optional(),
    }),
    run: (a: Parameters<typeof getAppAlternatives>[0]) => getAppAlternatives(a),
  },
  get_latest: {
    description: 'Recently added apps, updated articles and hands-on tests, newest first.',
    schema: z.object({
      type: z.enum(['all', 'apps', 'articles', 'hands-on']).optional(),
      limit: z.number().int().min(1).max(15).optional(),
      since: z.string().optional().describe('ISO date YYYY-MM-DD'),
      cluster: z.string().optional(),
      lang: LANG,
    }),
    run: (a: Parameters<typeof getLatest>[0], c) => getLatest({ ...a, lang: c.lang }),
  },
  get_hands_on_test: {
    description: 'PromptQuorum\'s own hands-on test findings for an app. Without slug, lists tested apps. Never describe untested apps as tested.',
    schema: z.object({ slug: z.string().optional() }),
    run: (a: { slug?: string }) => getHandsOnTestFindings(a),
  },
  find_related_content: {
    description: 'PromptQuorum\'s own material (review, hands-on test, comparison, setup guides) for an app slug or a free-text topic.',
    schema: z.object({
      app: z.string().optional(),
      topic: z.string().optional(),
      lang: LANG,
      limit: z.number().int().min(1).max(10).optional(),
    }),
    run: (a: { app?: string; topic?: string; lang?: string; limit?: number }, c) => findRelatedContent({ ...a, lang: c.lang }),
  },
}

export const SET_CATEGORY_TOOL = 'set_category'

/** Tool definitions for the Messages API. */
export function buildToolDefinitions(): Anthropic.Tool[] {
  const defs: Anthropic.Tool[] = Object.entries(TOOLS).map(([name, t]) => ({
    name,
    description: t.description,
    input_schema: z.toJSONSchema(t.schema, { target: 'draft-7' }) as Anthropic.Tool['input_schema'],
  }))
  defs.push({
    name: SET_CATEGORY_TOOL,
    description:
      'Call exactly once per answer with the one category key that best matches the topic of the visitor\'s question, or "default" if unsure or off-topic. Drives the picture and link cards next to the chat. Also pass `language`: the ISO 639-1 code (two lowercase letters, e.g. "ru", "it", "tr") of the language the visitor\'s latest message is written in, even when it is not one of the site languages.',
    input_schema: {
      type: 'object',
      properties: {
        key: { type: 'string', enum: ASK_HANS_CATEGORIES.map((c) => c.key) },
        language: { type: 'string', description: 'ISO 639-1 code of the language the visitor wrote in, e.g. ru, it, tr, de' },
      },
      required: ['key'],
    },
  })
  return defs
}

export interface ToolOutcome {
  content: string
  isError: boolean
  /** set when the call was set_category with a valid key */
  category?: string
  /** set when set_category carried a valid two-letter language code (the language the visitor wrote in) */
  language?: string
  /** page path → page title, taken from the tool result (used for descriptive link cards) */
  pages?: Record<string, string>
  /** whitelisted directory apps / categories this call looked up (see topics.ts) */
  topics?: AnswerTopics
}

/** Walks a tool result and collects {url, title|name} pairs of PromptQuorum pages. */
function collectPages(node: unknown, out: Record<string, string>, depth = 0): void {
  if (depth > 6 || !node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    for (const n of node) collectPages(n, out, depth + 1)
    return
  }
  const o = node as Record<string, unknown>
  const url = typeof o.url === 'string' ? o.url : null
  const title = typeof o.title === 'string' ? o.title : typeof o.name === 'string' ? o.name : null
  if (url && title && (url.startsWith('/') || /^https?:\/\/(?:www\.)?promptquorum\.com/i.test(url))) out[normalizePagePath(url)] = title.trim()
  for (const v of Object.values(o)) collectPages(v, out, depth + 1)
}

function truncate(text: string): string {
  const max = ASK_HANS_LIMITS.maxToolResultChars
  return text.length <= max ? text : `${text.slice(0, max)}\n…[truncated — ask a narrower question or use another tool for the rest]`
}

export async function runTool(name: string, input: unknown, ctx: ToolContext): Promise<ToolOutcome> {
  if (name === SET_CATEGORY_TOOL) {
    const args = input as { key?: unknown; language?: unknown } | null
    const valid = isCategoryKey(args?.key) ? args.key : 'default'
    const language = typeof args?.language === 'string' && /^[a-z]{2}$/i.test(args.language.trim()) ? args.language.trim().toLowerCase() : undefined
    return { content: `category set to ${valid}`, isError: false, category: valid, ...(language ? { language } : {}) }
  }
  const def = TOOLS[name]
  if (!def) return { content: `Unknown tool ${name}`, isError: true }
  const parsed = def.schema.safeParse(input)
  if (!parsed.success) return { content: `Invalid arguments: ${parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`, isError: true }
  try {
    const result = await (def.run as (a: unknown, c: ToolContext) => unknown)(parsed.data, ctx)
    const pages: Record<string, string> = {}
    collectPages(result, pages)
    const topics: AnswerTopics = { apps: [], dirCats: [] }
    mergeTopics(topics, topicsFromToolInput(parsed.data))
    mergeTopics(topics, topicsFromToolResult(name, result))
    return { content: truncate(JSON.stringify(withConfidence(result))), isError: false, topics, ...(Object.keys(pages).length ? { pages } : {}) }
  } catch (err) {
    if (err instanceof AppNotFoundError || err instanceof ArticleNotFoundError || err instanceof PageNotFoundError) return { content: err.message, isError: true }
    console.error('[askhans] tool failed', name, err)
    return { content: 'The tool failed. Answer from what you already know from PromptQuorum, or say you cannot.', isError: true }
  }
}
