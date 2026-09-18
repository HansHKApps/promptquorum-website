// Local AI App Directory — LoRAX / lorax (layer: run-serve — multi-LoRA inference server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/predibase/lorax ("LoRA eXchange"), the
// multi-LoRA inference server that serves thousands of fine-tuned adapters on
// a single base model — not the unrelated NASA-adjacent "lorax" trademark or
// any Dr. Seuss-themed project — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lorax',
  name: 'LoRAX',
  categories: ['inference-engines', 'fine-tuning-lora'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'],
  worksWith: ['HuggingFace', 'PEFT', 'Ludwig', 'Docker'],
  engine: 'both', // built-in inference server forked from HuggingFace text-generation-inference, that also dynamically loads external LoRA adapters from HuggingFace/Predibase/filesystem at request time
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // requires an Nvidia GPU, Ampere generation or above, CUDA 11.8+ — exact VRAM floor depends entirely on the base model + number of concurrently loaded adapters, verified 2026-09-18
  stars: 3832, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'github.com/predibase/lorax',
  tagline: {
    en: 'Self-hosted inference server that serves thousands of fine-tuned LoRA adapters on a single GPU without a per-adapter cost',
    de: 'Selbst gehosteter Inferenz-Server, der Tausende feingetunte LoRA-Adapter auf einer einzigen GPU bereitstellt, ohne Kosten pro Adapter',
    fr: 'Serveur d’inférence auto-hébergé qui sert des milliers d’adaptateurs LoRA finement ajustés sur un seul GPU sans coût par adaptateur',
    ja: 'アダプター単位のコストをかけずに、1台のGPUで数千のファインチューニング済みLoRAアダプターを提供するセルフホスト型推論サーバー',
    zh: '自托管推理服务器，可在单张GPU上服务数千个微调LoRA适配器，且无需为每个适配器单独付费',
    es: 'Servidor de inferencia autoalojado que sirve miles de adaptadores LoRA ajustados en una sola GPU sin coste por adaptador',
    pt: 'Servidor de inferência auto-hospedado que serve milhares de adaptadores LoRA ajustados em uma única GPU sem custo por adaptador',
    ar: 'خادم استدلال مستضاف ذاتيًا يخدم آلاف محولات LoRA المضبوطة على وحدة معالجة رسومات واحدة دون تكلفة لكل محول',
    ko: '어댑터당 비용 없이 단일 GPU에서 수천 개의 파인튜닝된 LoRA 어댑터를 서빙하는 셀프호스팅 추론 서버',
  },
  reviewSlug: 'lorax-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
