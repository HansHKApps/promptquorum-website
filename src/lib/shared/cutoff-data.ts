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
 * Last fact-checked: 2026-11-20
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
    modelName: 'Claude Opus 5.5',
    vendor: 'Anthropic',
    cutoffDate: '2026-06',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'Tool-use only',
    searchNote:
      'Anthropic publishes a reliable knowledge cutoff (June 2026) separate from the broader training cutoff. Tool-based web access; does not browse by default.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
    sourceNote: 'Reliable knowledge cutoff and training data cutoff both June 2026 per Anthropic model overview (re-checked 2026-11-20); supersedes Claude Opus 5.',
  },
  {
    modelName: 'Claude Fable 5.2 / Sonnet 5.5 / Haiku 5.5',
    vendor: 'Anthropic',
    cutoffDate: '2026-06',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'Tool-use only',
    searchNote:
      'Same June 2026 reliable knowledge cutoff as Claude Opus 5.5. Tool-based web access; does not browse by default.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
    sourceNote: 'Anthropic model overview (checked 2026-11-20) lists a reliable knowledge cutoff of June 2026 for Claude Fable 5.2, Claude Sonnet 5.5 and Claude Haiku 5.5, the same as Claude Opus 5.5.',
  },
  {
    modelName: 'Claude Opus 5 (previous generation)',
    vendor: 'Anthropic',
    cutoffDate: '2026-05',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'Tool-use only',
    searchNote:
      'Anthropic publishes two dates: reliable knowledge cutoff (May 2026) vs broader training cutoff. Tool-based web access; does not browse by default.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
    sourceNote: 'Reliable knowledge cutoff May 2026 per Anthropic model overview; superseded by Claude Opus 5.5 and now listed as a legacy model.',
  },
  {
    modelName: 'GPT-6.2 Astra (ChatGPT)',
    vendor: 'OpenAI',
    cutoffDate: '2026-05',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing in the ChatGPT product, triggered by model or user. Supersedes GPT-6 Astra; released alongside GPT-6.2 Sol.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'Knowledge cutoff May 18, 2026 for GPT-6.2 Astra per OpenAI model documentation (checked 2026-11-20; released Nov 17, 2026).',
  },
  {
    modelName: 'GPT-6.2 Sol (ChatGPT)',
    vendor: 'OpenAI',
    cutoffDate: '2026-06',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing in the ChatGPT product, triggered by model or user. Supersedes GPT-6.1 Sol; released alongside GPT-6.2 Astra. GPT-6 Luna (cost-optimized tier) is unaffected by this release and keeps its May 2026 cutoff.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'Knowledge cutoff June 1, 2026 for GPT-6.2 Sol per OpenAI model documentation (checked 2026-11-20; released Nov 17, 2026 with GPT-6.2 Astra).',
  },
  {
    modelName: 'GPT-6.1 Terra (ChatGPT)',
    vendor: 'OpenAI',
    cutoffDate: '2026-06',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing in the ChatGPT product, triggered by model or user. OpenAI positions Terra as the faster, efficient tier for visual reasoning and computer use; the API lists web search among its supported tools.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'Knowledge cutoff June 1, 2026 for GPT-6.1 Terra per OpenAI model documentation (checked 2026-11-20).',
  },
  {
    modelName: 'GPT-6 Luna (ChatGPT)',
    vendor: 'OpenAI',
    cutoffDate: '2026-05',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing in the ChatGPT product, triggered by model or user. OpenAI positions Luna for cost-sensitive, high-volume workloads; it is not superseded by GPT-6.2.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'Knowledge cutoff May 18, 2026 for GPT-6 Luna per OpenAI model documentation (checked 2026-11-20).',
  },
  {
    modelName: 'GPT-6 Astra / GPT-6.1 Sol (previous generation)',
    vendor: 'OpenAI',
    cutoffDate: '2026-04',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing in the ChatGPT product, triggered by model or user. GPT-6 Luna (cost-optimized tier) has a May 2026 cutoff and is not superseded by this release. The GPT-6 family superseded GPT-5.6; GPT-6 Astra and GPT-6.1 Sol are now themselves superseded by GPT-6.2 Astra and GPT-6.2 Sol.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'April 2026 knowledge cutoff for GPT-6 Astra and GPT-6.1 Sol per OpenAI model documentation (checked 2026-10-18); superseded 2026-11-17 by GPT-6.2 Astra and GPT-6.2 Sol.',
  },
  {
    modelName: 'GPT-5.6 (previous generation)',
    vendor: 'OpenAI',
    cutoffDate: '2026-02',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Bing',
    searchNote:
      'Live web via Bing, triggered by model or user. The GPT-5.6 family shares a Feb 2026 training cutoff and has been superseded by the GPT-6 family on OpenAI\'s models page.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    sourceNote: 'Feb 16, 2026 cutoff per OpenAI model documentation for the GPT-5.6 family; superseded by GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna.',
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
    modelName: 'Gemini 4 (Argon / Carbon / Hydrogen / Neon)',
    vendor: 'Google',
    cutoffDate: '2026-03',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'Google',
    searchNote:
      'Google Search grounding is available across the Gemini apps and Vertex AI (carried over from the Gemini 3.x entry; not separately re-verified for the Gemini 4 models).',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://deepmind.google/models/model-cards/gemini-4-neon/',
    sourceNote: 'The Google DeepMind model cards for Gemini 4 Argon (published Oct 13, 2026), Carbon (Nov 10), Hydrogen (Nov 12) and Neon (Nov 18) each state a knowledge cutoff of March 2026, with the caveat that knowledge may be less current in some domains (checked 2026-11-20). Gemini 4 Neon is the most recent release.',
  },
  {
    modelName: 'Gemini 3.1 Pro (previous generation)',
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
    sourceNote: 'Jan 2025 cutoff for Gemini 3.x generation per Google documentation; superseded by the Gemini 4 models.',
  },
  {
    modelName: 'Grok 4.7',
    vendor: 'xAI',
    cutoffDate: '2026-05',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'X (Twitter)',
    searchNote:
      'The consumer grok.com app searches the web and X live by default. The API is opt-in: Web Search and X Search must be enabled as explicit server-side tools, and without them the model is limited to its training cutoff.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.x.ai/developers/models',
    sourceNote: 'May 2026 knowledge cutoff for Grok 4.7 per xAI developer documentation (checked 2026-10-18); supersedes Grok 4.6.',
  },
  {
    modelName: 'Grok 4.6 (previous generation)',
    vendor: 'xAI',
    cutoffDate: '2026-02',
    cutoffVerified: true,
    hasLiveSearchDefault: true,
    searchLayer: 'X (Twitter)',
    searchNote:
      'The consumer grok.com app searches the web and X live by default. The API is opt-in: Web Search and X Search must be enabled as explicit server-side tools, and without them the model is limited to its Feb 2026 training cutoff.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.x.ai/developers/models',
    sourceNote: 'Feb 1, 2026 cutoff for Grok 4.6 per xAI developer documentation; superseded by Grok 4.7.',
  },
  {
    modelName: 'Mistral Large 4',
    vendor: 'Mistral AI',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'No built-in search in Mistral Large via la Plateforme API.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://docs.mistral.ai/models/overview',
    sourceNote: 'Mistral Large 4 (v26.10) is listed as current alongside Mistral Small 4 (v26.03); no knowledge cutoff is stated on Mistral\'s models overview (checked 2026-11-20).',
  },
  {
    modelName: 'Mistral Large 3 (previous generation)',
    vendor: 'Mistral AI',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'No built-in search in Mistral Large via la Plateforme API.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12',
    sourceNote: 'Cutoff not stated in official model card; superseded by Mistral Large 4.',
  },
  {
    modelName: 'DeepSeek-V4',
    vendor: 'DeepSeek',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'DeepSeek API models have no default live web search; knowledge cutoff is a hard limit.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://api-docs.deepseek.com/quick_start/pricing',
    sourceNote: 'DeepSeek\'s pricing page (checked 2026-11-20) lists DeepSeek-V4.1-Flash-1017 and DeepSeek-V4-Pro-0813 and states no knowledge cutoff.',
  },
  {
    modelName: 'DeepSeek-V3 / R1 (previous generation)',
    vendor: 'DeepSeek',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'DeepSeek chat does not offer live web search by default; knowledge cutoff is a hard limit.',
    license: 'Proprietary',
    deployment: 'Cloud only',
    sourceUrl: 'https://arxiv.org/abs/2412.19437',
    sourceNote: 'The DeepSeek-V3 technical report states no knowledge cutoff (checked 2026-10-19).',
  },
];

// ─── LOCAL / OPEN-WEIGHT MODELS ───────────────────────────────────────────────

export const LOCAL_MODELS: ModelCutoffEntry[] = [
  {
    modelName: 'Llama 4 Scout',
    vendor: 'Meta',
    cutoffDate: '2024-08',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'Open-weight model. No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct',
    sourceNote: 'Pretraining data cutoff of August 2024 per the Llama 4 Scout model card (checked 2026-10-19).',
  },
  {
    modelName: 'Muse Glimmer 30B',
    vendor: 'Meta',
    cutoffDate: '2026-01',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'Open-weight model (about 30B parameters, Apache 2.0). No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://huggingface.co/meta-models/Muse-Glimmer-30B',
    sourceNote: 'Knowledge cutoff January 4, 2026 per the Muse Glimmer 30B model card (checked 2026-11-20); released August 2026. Published on Hugging Face under the "meta-models" organization, which the page labels as Meta.',
  },
  {
    modelName: 'Qwen3.8-27B / Qwen3 14B / Qwen2.5 72B',
    vendor: 'Alibaba',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight model. No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://arxiv.org/abs/2412.15115',
    sourceNote: 'Neither the Qwen2.5 technical report, the Qwen2.5-72B-Instruct model card nor the Qwen3.8-27B model card (Apache 2.0, released August 2026) states a knowledge cutoff (checked 2026-11-20).',
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
    modelName: 'DeepSeek-V4 (open weights)',
    vendor: 'DeepSeek',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'Open-weight model. No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://api-docs.deepseek.com/quick_start/pricing',
    sourceNote: 'No knowledge cutoff stated by DeepSeek (checked 2026-11-20).',
  },
  {
    modelName: 'DeepSeek-V3 (open weights, previous generation)',
    vendor: 'DeepSeek',
    cutoffDate: 'Not publicly disclosed',
    cutoffVerified: false,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight variant of DeepSeek-V3. No search layer. Cutoff is a hard limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://arxiv.org/abs/2412.19437',
    sourceNote: 'Neither the DeepSeek-V3 technical report nor the Hugging Face model card states a knowledge cutoff (checked 2026-10-19).',
  },
  {
    modelName: 'Gemma 4',
    vendor: 'Google',
    cutoffDate: '2025-01',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote: 'Open-weight model from Google. No search layer. January 2025 is a hard knowledge limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://huggingface.co/google/gemma-4-31b-it',
    sourceNote: 'January 2025 per the Gemma 4 model card ("a cutoff date of January 2025" for the pre-training dataset), checked 2026-11-20.',
  },
  {
    modelName: 'Gemma 3 27B (previous generation)',
    vendor: 'Google',
    cutoffDate: '2024-08',
    cutoffVerified: true,
    hasLiveSearchDefault: false,
    searchLayer: 'None',
    searchNote:
      'Open-weight model from Google. No search layer. August 2024 is a hard knowledge limit when run locally.',
    license: 'Open weights',
    deployment: 'Both',
    sourceUrl: 'https://ai.google.dev/gemma/docs/core/model_card_3',
    sourceNote: 'August 2024 cutoff per the Gemma 3 model card ("The knowledge cutoff date for the training data was August 2024"); superseded by Gemma 4.',
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
    sourceUrl: 'https://huggingface.co/microsoft/phi-4',
    sourceNote: 'June 2024 per the Phi-4 model card ("cutoff dates of June 2024 and earlier for publicly available data").',
  },
];

// ─── COMBINED EXPORT ─────────────────────────────────────────────────────────

export const ALL_MODELS: ModelCutoffEntry[] = [...CLOUD_MODELS, ...LOCAL_MODELS];

/** Last date all entries above were fact-checked against primary sources. */
export const CUTOFF_DATA_LAST_VERIFIED = '2026-11-20';
