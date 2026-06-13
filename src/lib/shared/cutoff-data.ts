/**
 * Verified AI model knowledge cutoff data.
 * Single source of truth — both ai-model-knowledge-cutoff-dates (Bite) and
 * knowledge-cutoffs-and-geo (PE long-form) import from here.
 * Update once; both articles re-render automatically.
 *
 * Verification policy:
 *  - cutoffDate: primary source only (model card, official docs, technical report).
 *    If unverified, value is 'Not publicly disclosed'.
 *  - sourceUrl: direct link to the primary source used to verify cutoffDate.
 *  - hasLiveSearch: whether the model searches the live web BY DEFAULT for end users.
 *    Tool-use integrations that must be explicitly wired are NOT counted as "default on".
 *
 * Last fact-checked: 2026-06-12
 */

export type SearchLayer =
  | 'Bing'
  | 'Google'
  | 'X (Twitter)'
  | 'Brave / Web'
  | 'Web-native'
  | 'Tool-use only'
  | 'None';

export type Deployment = 'Cloud only' | 'Local only' | 'Both';
export type License = 'Open weights' | 'Proprietary';

export interface ModelCutoffEntry {
  modelName: string;
  vendor: string;
  /** 'YYYY-MM' for verified dates, 'Not publicly disclosed' otherwise */
  cutoffDate: string;
  cutoffVerified: boolean;
  /** true = live web search ON by default for end users (not opt-in / API tool) */
  hasLiveSearchDefault: boolean;
  searchLayer: SearchLayer;
  searchNote?: string;
  license: License;
  deployment: Deployment;
  sourceUrl: string;
  sourceNote?: string;
}

// ─── CLOUD MODELS ─────────────────────────────────────────────────────────────

export const CLOUD_MODELS: ModelCutoffEntry[] = [
  {
    modelName: 'Claude Opus 4.8 / Sonnet 4.6',
    vendor: 'Anthropic',
    cutoffDate: '2025-08',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'Tool-use only',
    searchNote:
      'Web search is available as an opt-in tool for API developers; not enabled by default in Claude.ai free/pro tiers without explicit activation.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search-tool',
    sourceNote: 'Training data cutoff confirmed via Anthropic model documentation.',
  },
  {
    modelName: 'ChatGPT / GPT-4o',
    vendor: 'OpenAI',
    cutoffDate: '2023-10',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'ChatGPT (the product) searches Bing by default in paid plans. GPT-4o via the raw API has no search access; cutoff is Oct 2023.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.openai.com/docs/models/gpt-4o',
    sourceNote: 'Knowledge cutoff date per OpenAI model card.',
  },
  {
    modelName: 'Gemini 2.5 Pro',
    vendor: 'Google',
    cutoffDate: '2025-01',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Google',
    searchNote:
      'Google Search grounding is on by default in Gemini apps and available via Vertex AI Grounding API.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.googleblog.com/en/introducing-gemma3/',
    sourceNote: 'January 2025 cutoff per Google developer documentation for Gemini 3 family.',
  },
  {
    modelName: 'Grok 3',
    vendor: 'xAI',
    cutoffDate: '2024-11',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'X (Twitter)',
    searchNote:
      'Grok on X.com searches X (Twitter) posts in real time by default. DeepSearch is an opt-in deeper web search mode.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.x.ai/developers/models',
    sourceNote: 'November 2024 cutoff per xAI model documentation.',
  },
  {
    modelName: 'Mistral Large 3',
    vendor: 'Mistral AI',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'No built-in search in Mistral Large via la Plateforme API.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12',
    sourceNote: 'Cutoff not stated in official model card as of June 2026.',
  },
  {
    modelName: 'DeepSeek-V3 / R1',
    vendor: 'DeepSeek',
    cutoffDate: '2024-07',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'DeepSeek chat does not offer live web search by default; knowledge cutoff is a hard limit.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://arxiv.org/pdf/2501.12948',
    sourceNote: 'July 2024 cutoff per DeepSeek-V3 technical report.',
  },
];

// ─── LOCAL / OPEN-WEIGHT MODELS ───────────────────────────────────────────────

export const LOCAL_MODELS: ModelCutoffEntry[] = [
  {
    modelName: 'Llama 4 Scout / Llama 3.3 70B',
    vendor: 'Meta',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'Open-weight model. No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://ai.meta.com/blog/meta-llama-3-1/',
    sourceNote:
      'Meta does not publish exact training data cutoff dates in official model cards as of June 2026.',
  },
  {
    modelName: 'Qwen3 14B / Qwen2.5 72B',
    vendor: 'Alibaba',
    cutoffDate: '2023-12',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight model. No search layer. December 2023 cutoff verified for Qwen2.5; Qwen3 cutoff not publicly disclosed.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://arxiv.org/pdf/2412.15115',
    sourceNote: 'December 2023 cutoff per Qwen2.5 technical report (arxiv 2412.15115).',
  },
  {
    modelName: 'Mistral Small 3 / Mistral 7B',
    vendor: 'Mistral AI',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight models. No search layer. Cutoff is a hard limit when run locally via Ollama or LM Studio.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://mistral.ai/news/announcing-mistral-7b/',
    sourceNote: 'Cutoff not stated in official Mistral release posts as of June 2026.',
  },
  {
    modelName: 'DeepSeek-V3 (open weights)',
    vendor: 'DeepSeek',
    cutoffDate: '2024-07',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight variant of DeepSeek-V3. No search layer. July 2024 is a hard knowledge limit.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://arxiv.org/pdf/2501.12948',
    sourceNote: 'July 2024 cutoff per DeepSeek-V3 technical report.',
  },
  {
    modelName: 'Gemma 3 27B',
    vendor: 'Google',
    cutoffDate: '2024-08',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight model from Google. No search layer. August 2024 is a hard knowledge limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://developers.googleblog.com/en/introducing-gemma3/',
    sourceNote: 'August 2024 cutoff per Google developer blog introducing Gemma 3.',
  },
  {
    modelName: 'Phi-4',
    vendor: 'Microsoft',
    cutoffDate: '2024-06',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight model from Microsoft. No search layer. June 2024 is a hard knowledge limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://www.microsoft.com/en-us/research/publication/phi-4-technical-report/',
    sourceNote: 'June 2024 cutoff per Microsoft Research Phi-4 technical report.',
  },
];

// ─── COMBINED EXPORT ─────────────────────────────────────────────────────────

export const ALL_MODELS: ModelCutoffEntry[] = [...CLOUD_MODELS, ...LOCAL_MODELS];

/** Last date all entries above were fact-checked against primary sources. */
export const CUTOFF_DATA_LAST_VERIFIED = '2026-06-12';
