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
    en: '{{count}} quick answers: VRAM requirements, Ollama vs LM Studio, quantization levels, best GPUs under $600, and local LLM setup tips for developers and hobbyists.',
    de: '{{count}} Antworten: VRAM-Anforderungen, Ollama vs LM Studio, Quantisierung, beste GPUs unter 600 €, und praktische Setup-Tipps für lokale LLMs.',
    fr: '{{count}} réponses: VRAM, Ollama vs LM Studio, quantification, meilleures GPU sous 600 €, conseils pratiques de configuration pour LLM local.',
    ja: '{{count}}の質問への回答：VRAM要件、Ollama vs LM Studio、量化レベル、600ドル以下のGPU、ローカルLLM設定のコツと実用的なアドバイス。',
    zh: '{{count}}个问题的答案：VRAM要求、Ollama vs LM Studio、量化级别、600美元以下的最佳GPU、本地LLM配置技巧和实用建议。',
    es: '{{count}} respuestas: VRAM, Ollama vs LM Studio, cuantización, mejores GPU bajo $600, y consejos prácticos de configuración para LLM local.',
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
