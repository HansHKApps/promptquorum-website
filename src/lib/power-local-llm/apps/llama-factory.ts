// Local AI App Directory — LLaMA-Factory (layer: fine-tuning)
// Added per directory-add-5-apps sweep — one of the top standalone tools
// missing from a user-supplied app list cross-check (2026-09-14).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llama-factory',
  name: 'LLaMA-Factory',
  categories: ['fine-tuning-lora'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: 16, cpuOnly: false }, // per github.com/hiyouga/LlamaFactory docs: CPU training is supported but impractical; LoRA fine-tuning a 7B model documented at ~16 GB VRAM, as low as ~4 GB with 2-bit QLoRA, verified 2026-09-14
  stars: 74751,
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['build'],
  url: 'github.com/hiyouga/LlamaFactory',
  tagline: {
    en: 'Fine-tune 100+ open LLMs with LoRA, QLoRA, or full training via web UI or CLI',
    de: '100+ offene LLMs per LoRA, QLoRA oder vollständigem Training feinabstimmen — über Web-UI oder CLI',
    fr: 'Affinez plus de 100 LLM ouverts avec LoRA, QLoRA ou un entraînement complet, via interface web ou CLI',
    ja: '100以上のオープンLLMをLoRA・QLoRA・フル学習でファインチューニング（Web UIまたはCLI）',
    zh: '通过Web界面或命令行，用LoRA、QLoRA或全量训练微调100多个开源LLM',
    es: 'Ajusta más de 100 LLM abiertos con LoRA, QLoRA o entrenamiento completo, vía interfaz web o CLI',
    pt: 'Ajuste mais de 100 LLMs abertos com LoRA, QLoRA ou treinamento completo, via interface web ou CLI',
    ar: 'ضبط أكثر من 100 نموذج لغوي مفتوح باستخدام LoRA أو QLoRA أو التدريب الكامل، عبر واجهة ويب أو CLI',
    ko: '웹 UI 또는 CLI로 100개 이상의 오픈 LLM을 LoRA, QLoRA, 전체 학습으로 파인튜닝',
  },
  reviewSlug: 'llama-factory-review',
  pqReview: { date: '2026-09-20', version: 'v0.9.5', versionSourceUrl: 'https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.5' },
  lastVerifiedDate: '2026-09-14',
}
