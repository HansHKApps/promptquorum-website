import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'unsloth',
  name: 'Unsloth',
  categories: ['fine-tuning-lora'],
  interfaces: ['desktop', 'web', 'cli', 'library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'Claude Code', 'OpenAI', 'Anthropic'],
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // per github.com/unslothai/unsloth README: "Multi GPU setups, NVIDIA, AMD, Intel GPUs, CPUs and the Vulkan backend" are all supported, with claimed 2x faster training and 70% less VRAM vs. standard fine-tuning — no fixed RAM/VRAM floor since it scales with the model, method (LoRA/QLoRA/full fine-tune), and modality (LLM, diffusion, TTS, embedding) being trained; verified 2026-09-13
  stars: 76103,
  addedDate: '2026-09-13',
  status: 'listed',
  uses: ['build', 'serve'],
  url: 'github.com/unslothai/unsloth',
  tagline: {
    en: 'Free, open-source fine-tuning for LLMs, diffusion, TTS, and embedding models',
    de: 'Kostenloses Open-Source-Fine-Tuning für LLMs, Diffusionsmodelle, TTS und Embeddings',
    fr: 'Fine-tuning open source gratuit pour LLM, diffusion, TTS et embeddings',
    ja: 'LLM・拡散モデル・TTS・埋め込みモデル向けの無料オープンソースファインチューニング',
    zh: '面向LLM、扩散模型、TTS与嵌入模型的免费开源微调工具',
    es: 'Ajuste fino gratuito y de código abierto para LLM, difusión, TTS y embeddings',
    pt: 'Ajuste fino gratuito e de código aberto para LLMs, difusão, TTS e embeddings',
    ar: 'ضبط دقيق مجاني ومفتوح المصدر للنماذج اللغوية ونماذج الانتشار والتحويل النصي الصوتي والتضمينات',
    ko: 'LLM·디퓨전·TTS·임베딩 모델을 위한 무료 오픈소스 파인튜닝 도구',
  },
  reviewSlug: 'unsloth-review',
  lastVerifiedDate: '2026-09-13',
}
