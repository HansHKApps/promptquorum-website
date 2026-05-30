// Prompt Bites Hub page metadata — optimizable by /geo-meta-optimizer
// All 8 languages must remain in sync. Interpolate {{count}} at runtime.

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar'

export interface HubMetadataConfig {
  titles: Partial<Record<Lang, string>>
  descriptions: Partial<Record<Lang, string>>
}

// Optimized: /geo-meta-optimizer pass on Prompt Bites hub — all 8 languages (May 2026)
// Format: {{count}} is replaced at runtime with PROMPT_BITES_PUBLISHED_SLUGS.size
export const HUB_METADATA: HubMetadataConfig = {
  titles: {
    en: 'Local LLM Tips: {{count}} Answers on VRAM, Ollama & GPUs',
    de: 'Lokale LLM Tipps: {{count}} Antworten zu VRAM, Ollama & GPUs',
    fr: 'Conseils LLM Local: {{count}} Réponses VRAM, Ollama & GPU',
    ja: 'ローカル LLM：{{count}} の VRAM・Ollama・GPU の質問と回答',
    zh: '本地 LLM：{{count}} 个 VRAM、Ollama 和 GPU 的问答',
    es: 'Consejos LLM Local: {{count}} Respuestas sobre VRAM, Ollama y GPU',
  },
  descriptions: {
    en: 'Quick answers to {{count}} local LLM questions: VRAM requirements, Ollama vs LM Studio, quantization basics, GPUs under $600, and proven setup tips for running models locally.',
    de: '{{count}} Antworten zu lokalen LLMs: VRAM-Anforderungen, Ollama vs LM Studio, Quantisierung, GPUs unter 600 €, und praktische Setup-Tipps.',
    fr: '{{count}} réponses sur les LLM locaux: VRAM, Ollama vs LM Studio, quantification, GPU sous 600 €, et conseils de configuration éprouvés.',
    ja: '{{count}}のローカルLLM質問への回答：VRAM要件、Ollama vs LM Studio、量化、600ドル以下のGPU、実証済みのセットアップのコツ。',
    zh: '{{count}}个本地LLM问题的答案：VRAM要求、Ollama vs LM Studio、量化、600美元以下的GPU、久经考验的设置技巧。',
    es: '{{count}} respuestas sobre LLM local: VRAM, Ollama vs LM Studio, cuantización, GPU bajo $600, y consejos de configuración comprobados.',
  },
}

export function getHubMetadata(count: number): HubMetadataConfig {
  const interpolate = (template: string) => template.replace(/\{\{count\}\}/g, count.toString())

  return {
    titles: Object.fromEntries(
      Object.entries(HUB_METADATA.titles).map(([lang, title]) => [lang, interpolate(title)])
    ) as Partial<Record<Lang, string>>,
    descriptions: Object.fromEntries(
      Object.entries(HUB_METADATA.descriptions).map(([lang, desc]) => [lang, interpolate(desc)])
    ) as Partial<Record<Lang, string>>,
  }
}
