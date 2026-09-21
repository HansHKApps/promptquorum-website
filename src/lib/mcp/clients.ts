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
  launchPrompt: string
  // Web clients only: builds a link that opens the client with the prompt pre-filled.
  openWithPrompt?: (prompt: string) => string
  lastVerified: string | null
}

export const MCP_CLIENTS: McpClientOnboarding[] = [
  {
    id: 'claude',
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
    launchPrompt:
      'Use the PromptQuorum connector to recommend a local AI app. Ask me what I want to do and about my device, OS and RAM/VRAM, then suggest 2–3 apps with download links and caveats.',
    openWithPrompt: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    lastVerified: null,
  },
  {
    id: 'lm-studio',
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
    launchPrompt:
      'Use the promptquorum tools to recommend a local AI app. Ask me what I want to do and about my device, OS and RAM/VRAM, then suggest 2–3 apps with download links and caveats.',
    lastVerified: null,
  },
  {
    id: 'ollama',
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
    launchPrompt:
      'Use the promptquorum tools to recommend a local AI app. Ask me what I want to do and about my device, OS and RAM/VRAM, then suggest 2–3 apps with download links and caveats.',
    lastVerified: null,
  },
]
