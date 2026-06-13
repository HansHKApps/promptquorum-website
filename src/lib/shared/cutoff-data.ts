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
 * Last fact-checked: 2026-06-13
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
    modelName: 'Claude Opus 4.8',
    vendor: 'Anthropic',
    cutoffDate: '2026-01',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'Tool-use only',
    searchNote:
      'Anthropic publishes two dates: reliable knowledge cutoff (Jan 2026) vs broader training cutoff. Tool-based web access; does not browse by default.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://www.anthropic.com/claude/opus-4',
    sourceNote: 'Reliable knowledge cutoff Jan 2026 per Anthropic model overview (released May 28 2026).',
  },
  {
    modelName: 'GPT-5.5 (ChatGPT)',
    vendor: 'OpenAI',
    cutoffDate: '2025-08',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'GPT-4o legacy model cuts off Oct 2023. Live web via Bing, triggered by model or user. GPT-5.5 (GPT-5 series) training cutoff Aug 2025.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.openai.com/docs/models',
    sourceNote: 'GPT-5 series cutoff Aug 2025 per OpenAI model documentation (April 2026 release).',
  },
  {
    modelName: 'GPT-4o (legacy)',
    vendor: 'OpenAI',
    cutoffDate: '2023-10',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Legacy model still available via API. Oct 2023 cutoff; live Bing search available in ChatGPT product.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.openai.com/docs/models/gpt-4o',
    sourceNote: 'Knowledge cutoff date per OpenAI model card.',
  },
  {
    modelName: 'Gemini 3.1 Pro',
    vendor: 'Google',
    cutoffDate: '2025-01',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Google',
    searchNote:
      'Natively integrated with Google Search — effectively real-time despite the Jan 2025 training cutoff. Google Search grounding available in Gemini apps and Vertex AI.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://deepmind.google/models/gemini/pro/',
    sourceNote: 'Jan 2025 cutoff for Gemini 3.x generation per Google documentation (released Feb 2026).',
  },
  {
    modelName: 'Grok 4.3',
    vendor: 'xAI',
    cutoffDate: '2024-11',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'X (Twitter)',
    searchNote:
      'Real-time access to X (Twitter) and web search supplements the Nov 2024 training cutoff. DeepSearch is an opt-in broader web mode.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.x.ai/developers/models',
    sourceNote: 'Nov 2024 base cutoff for Grok 4 generation per xAI documentation (released April 2026).',
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
export const CUTOFF_DATA_LAST_VERIFIED = '2026-06-13';
