import { CATEGORY_GROUPS, CATEGORY_GROUP_LABEL, CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'

// Per-client onboarding data for the "Connect your AI" panel above the
// directory. One entry per client — adding a client is a data entry, not a
// code change. English only for v1.
//
// `lastVerified: null` means the connect steps were written from vendor docs
// but not yet tested by hand; the panel says so rather than implying testing.

export const MCP_SERVER_URL = 'https://www.promptquorum.com/api/mcp'

export interface McpClientOnboarding {
  id: string
  displayName: string
  tier: 'free' | 'paid'
  tierNote?: string
  difficulty: 'easy' | 'medium' | 'hard'
  connectionType: 'remote' | 'local-bridge'
  description: string
  connectSteps: string[]
  configSnippet?: string
  // How this client refers to the server's tools inside the prompt.
  toolRef: string
  // Web clients only: builds a link that opens the client with the prompt pre-filled.
  openWithPrompt?: (prompt: string) => string
  lastVerified: string | null
}

export const MCP_CLIENTS: McpClientOnboarding[] = [
  {
    id: 'claude',
    toolRef: 'the PromptQuorum connector',
    displayName: 'Claude',
    tier: 'paid',
    tierNote: 'Custom remote connectors need a paid Claude plan',
    difficulty: 'easy',
    connectionType: 'remote',
    description:
      "Connect Claude to PromptQuorum's app directory. Claude asks what you want to do and what hardware you have, then looks up matching apps in the directory and answers inside your own chat.",
    connectSteps: [
      'In Claude, open Settings → Connectors and choose Add custom connector.',
      `Name it "PromptQuorum" and paste the server URL: ${MCP_SERVER_URL}`,
      'Save. No sign-in is needed. Enable the connector in your chat.',
    ],
    openWithPrompt: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    lastVerified: null,
  },
  {
    id: 'lm-studio',
    toolRef: 'the promptquorum tools',
    displayName: 'LM Studio',
    tier: 'free',
    difficulty: 'medium',
    connectionType: 'remote',
    description:
      'LM Studio can act as an MCP host (since v0.3.17). Add PromptQuorum as a remote server and your local model can query the directory while you chat.',
    connectSteps: [
      'In LM Studio, open the Program tab and choose Install → Edit mcp.json.',
      'Add the entry below to the "mcpServers" object and save.',
      'Load a model that supports tool use, and switch the promptquorum server on.',
    ],
    configSnippet: JSON.stringify({ mcpServers: { promptquorum: { url: MCP_SERVER_URL } } }, null, 2),
    lastVerified: null,
  },
  {
    id: 'ollama',
    toolRef: 'the promptquorum tools',
    displayName: 'Ollama',
    tier: 'free',
    difficulty: 'medium',
    connectionType: 'local-bridge',
    description:
      'Ollama runs models but is not an MCP client itself, so you connect through a small open-source bridge such as MCPHost. The bridge lets your Ollama model call the PromptQuorum directory.',
    connectSteps: [
      'Install a bridge, for example MCPHost (github.com/mark3labs/mcphost), and pull a tool-capable model with Ollama.',
      'Create the config file below and point the bridge at it.',
      'Start the bridge with your Ollama model selected.',
    ],
    configSnippet: JSON.stringify({ mcpServers: { promptquorum: { type: 'remote', url: MCP_SERVER_URL } } }, null, 2),
    lastVerified: null,
  },
]

// Goals are the directory's own 7 category groups plus their subcategories,
// so the panel offers exactly what the directory and search_apps understand.
export const GOAL_GROUPS = CATEGORY_GROUPS.map((g) => ({
  id: g.key,
  label: CATEGORY_GROUP_LABEL[g.key],
  subs: g.subs.map((k) => ({ id: k, label: CATEGORY_SUB_LABEL[k].en })),
}))

export const OS_OPTIONS = [
  { id: 'mac', label: 'macOS' },
  { id: 'win', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
] as const

export const RAM_OPTIONS = [8, 16, 24, 32, 64, 128] as const

export interface SetupProfile {
  groupId: string
  subId: string // '' = any subcategory
  os: (typeof OS_OPTIONS)[number]['id']
  ramGb: number
}

// One self-contained prompt: the AI must act immediately instead of
// interviewing the user, because goal/OS/RAM are already collected here.
export function buildLaunchPrompt(client: McpClientOnboarding, profile: SetupProfile): string {
  const group = GOAL_GROUPS.find((g) => g.id === profile.groupId)!
  const sub = group.subs.find((x) => x.id === profile.subId)
  const categoryKey = sub ? sub.id : group.id
  const goalLabel = sub ? `${group.label} → ${sub.label}` : group.label
  const os = OS_OPTIONS.find((o) => o.id === profile.os)!
  return [
    `Recommend a local AI app for me using ${client.toolRef}. Do not ask me any questions first. Everything you need is below.`,
    '',
    `- What I want to do: ${goalLabel}`,
    `- Operating system: ${os.label}`,
    `- Memory (RAM / unified memory): ${profile.ramGb} GB`,
    '',
    `Now call search_apps with category "${categoryKey}", os "${profile.os}", ramGb ${profile.ramGb} (call list_categories first only if you need valid values), then answer with the best 2-3 apps: name, one-line why it fits, download link, a "Read the full article" link (the app's article.url, plus relatedArticles if present), and any caveat (hardware fit, price, license). Only use results from the tool, not your own memory. End with the tool's disclaimer. If the PromptQuorum tools are not available in this chat, say so in one sentence and stop.`,
  ].join('\n')
}
