// Single source of truth for the `start` task menu. The `start` tool renders it,
// and scripts/check-mcp-start.ts asserts that every tool named here exists in the
// registry and that no registered tool is missing from the menu (except the
// explicitly hidden ones below).

export interface MenuItem {
  id: number
  label: string
  examples: string[]
  /** Tools the assistant should use for this item (shown to the model, not the user). */
  tools: string[]
}

export const MENU: readonly MenuItem[] = [
  {
    id: 1,
    label: 'Find apps for my hardware',
    examples: ['I have 12 GB VRAM — what can I run for coding?'],
    tools: ['check_hardware_compatibility', 'find_best_apps', 'estimate_vram'],
  },
  {
    id: 2,
    label: 'Compare or replace an app',
    examples: ['Compare LM Studio and Jan', 'Local alternative to ChatGPT'],
    tools: ['compare_apps', 'get_app_alternatives', 'find_local_alternative'],
  },
  {
    id: 3,
    label: 'Build a complete stack',
    examples: ['Stack for private document chat on a laptop'],
    tools: ['recommend_stack'],
  },
  {
    id: 4,
    label: 'Check a license',
    examples: ['Can I use this commercially?'],
    tools: ['explain_license'],
  },
  {
    id: 5,
    label: 'Look up one app',
    examples: ['Tell me about Ollama'],
    tools: ['get_app_details', 'get_hands_on_test'],
  },
  {
    id: 6,
    label: 'Learn and read',
    examples: ['Best local coding models', "What's new?"],
    tools: ['search_promptquorum', 'get_article', 'find_related_content', 'list_clusters', 'get_latest'],
  },
  {
    id: 7,
    label: 'Browse the directory',
    examples: ['Show categories'],
    tools: ['list_categories', 'search_apps'],
  },
  {
    id: 8,
    label: 'My profile and privacy',
    examples: ['What do you store about me?', 'Forget me'],
    tools: ['my_profile', 'forget_me', 'set_consent'],
  },
  {
    id: 9,
    label: 'Change language',
    examples: ['Auf Deutsch, bitte'],
    tools: ['set_language'],
  },
]

/** Registered tools that are intentionally not a menu item. */
export const MENU_HIDDEN_TOOLS: readonly string[] = ['start']

/** Names of the tools introduced by the start flow. */
export const START_TOOL_NAMES = ['start', 'set_consent', 'forget_me', 'my_profile', 'set_language'] as const
