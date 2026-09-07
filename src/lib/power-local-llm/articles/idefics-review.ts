// Idefics Review: HuggingFace's Open Vision-Language Model Family (Idefics, Idefics2, Idefics3)
// Slug: idefics-review
// Companion to: llava-review.ts (comparable open VLM), ollama-vision-models-review.ts (Idefics is NOT
// in Ollama's library as of this review), local-vision-models-llava-ollama-2026.ts, apps/idefics.ts (directory entry)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-en.webp',
    title: 'Idefics Review (2026): HuggingFace\'s Open Vision-Language Models, Honestly Assessed',
    seoTitle: 'Idefics Review 2026: Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics is a family of open vision-language models built by the HuggingFace M4 team, explicitly designed as an open reproduction of DeepMind\'s Flamingo. The family has three generations — the original Idefics, Idefics2, and Idefics3 — and they are not interchangeable: they use different base language models, different licenses in practice, and very different hardware requirements. This review covers the real history, which version to actually use today, honest VRAM numbers, and where Idefics is not a good fit, especially for resource-constrained local setups. For a comparable open vision-language model with a larger existing user base, see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review); for running vision models specifically through Ollama (Idefics is not currently packaged for it), see the [Ollama vision models guide](/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'Idefics review 2026: HuggingFace\'s open vision-language model family. Idefics vs Idefics2 vs Idefics3 compared honestly — license nuances, real VRAM requirements, and which version to use today.',
    twitterDescription:
      'Idefics review 2026: HuggingFace M4\'s open vision-language model family, an explicit reproduction of DeepMind\'s Flamingo. Idefics vs Idefics2 vs Idefics3 — license nuances, honest VRAM numbers, and which one to actually use.',
    audience:
      'Developers and researchers evaluating open vision-language models who want an honest comparison of Idefics\' three generations, including license and hardware trade-offs, rather than marketing claims.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'idefics review',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'idefics license',
      'idefics vram requirements',
      'huggingface vision language model',
      'idefics vs llava',
      'flamingo open reproduction',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics is a family of open vision-language models from HuggingFace\'s M4 team, built as an explicit open reproduction of DeepMind\'s Flamingo.** There are three generations: the original Idefics (9B/80B, 2023), Idefics2 (8B, April 2024), and Idefics3 (8B, August 2024). For actual use today, Idefics3 is the current recommendation for most tasks — it substantially improves OCR, document understanding, and visual reasoning over Idefics2, which itself was "10x smaller" than the original Idefics at comparable performance. License is nuanced: Idefics2\'s Mistral-7B-v0.1 backbone keeps the whole stack Apache-2.0, while Idefics3\'s Llama-3.1-8B-Instruct backbone carries Meta\'s Llama 3.1 Community License terms alongside the Apache-2.0 tag on the model repository itself. Idefics is not currently packaged in [Ollama\'s library](https://ollama.com/library) — GGUF conversion has open compatibility issues as of this review. For a comparable open VLM with broader tooling support, see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review).',
    quickAnswerTop: {
      en: {
        question: 'What is Idefics and which version should I actually use — Idefics, Idefics2, or Idefics3?',
        answer:
          'Idefics is HuggingFace M4\'s family of open vision-language models, built explicitly as an open reproduction of DeepMind\'s Flamingo. Use Idefics3 (8B, released August 22, 2024) for most tasks today — it is the current generation with the strongest OCR, document understanding, and visual reasoning of the three. Idefics2 (8B, April 2024) remains relevant if a pure Apache-2.0 license with no Llama-derived terms matters to your use case, since its backbone is Mistral-7B-v0.1 rather than Llama 3.1. The original Idefics (9B/80B, 2023) is largely superseded — it is 10x larger than Idefics2 for comparable performance and carries a research-only license restriction inherited from the original LLaMA release. None of the three are currently packaged in Ollama\'s library.',
        bullets: [
          'Three generations exist: Idefics (2023, 9B/80B), Idefics2 (April 2024, 8B), Idefics3 (August 2024, 8B) — verified on their respective HuggingFace model cards.',
          'Idefics3 is the current recommendation for most tasks: strongest OCR and document understanding of the three.',
          'License nuance: Idefics2 (Mistral-7B backbone) is fully Apache-2.0; Idefics3 (Llama-3.1-8B-Instruct backbone) carries Meta\'s Llama 3.1 Community License terms in addition to the Apache-2.0 repository tag.',
          'The original Idefics carries a research-only license restriction from its LLaMA(1) backbone and is largely superseded.',
          'VRAM: Idefics2/3 need roughly 18-20 GB in float16 with flash-attention, or as little as 6-7 GB with aggressive quantization — this is heavier than LLaVA 7B or MiniCPM-V.',
          'Idefics is not currently packaged in Ollama\'s library; GGUF conversion has open compatibility issues as of this review.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: HuggingFace M4 and the Flamingo Reproduction', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3: What Actually Changed', anchor: 'versions' },
      { label: 'License Nuance: It Is Not Simply Apache-2.0', anchor: 'license' },
      { label: 'Real Usage Example: Transformers Library', anchor: 'usage-example' },
      { label: 'VRAM and Hardware Requirements', anchor: 'vram-guidance' },
      { label: 'What Idefics Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives and Competitors', anchor: 'alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics is HuggingFace M4\'s open reproduction of DeepMind\'s Flamingo, now in its third generation (Idefics3, 8B, August 2024), with meaningfully different licenses and VRAM needs across its three versions, and it is not currently packaged in Ollama\'s model library.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics is a family of AI models made by HuggingFace that can look at images and answer questions about them, similar to LLaVA — this review explains which of its three versions to actually use, what it costs in GPU memory, and where it falls short.',
          },
        ],
        items: [
          'Three generations exist: Idefics (2023), Idefics2 (April 2024), Idefics3 (August 2024) — each a distinct model, not a drop-in upgrade.',
          'Idefics3 is the current recommendation for most tasks; it improves substantially on OCR and document understanding over Idefics2.',
          'License is nuanced across generations: original Idefics has a research-only restriction; Idefics2 is fully Apache-2.0 (Mistral-7B backbone); Idefics3 carries Llama 3.1 Community License terms in addition to its Apache-2.0 repository tag (Llama-3.1-8B-Instruct backbone).',
          'VRAM: roughly 18-20 GB in float16 for Idefics2/3, or 6-7 GB with aggressive quantization — heavier than LLaVA 7B or MiniCPM-V.',
          'Not currently packaged in Ollama\'s library as of this review; open GitHub issues track GGUF conversion difficulties.',
          'Best fit: document-heavy OCR and multi-image reasoning tasks with adequate GPU memory, not resource-constrained or real-time local setups.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum verified these facts directly against the HuggingFace model cards for idefics-80b, idefics2-8b, and Idefics3-8B-Llama3, and against Ollama\'s library and GitHub issue tracker — see the Sources section for exact links.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: HuggingFace M4 and the Flamingo Reproduction',
        content: [
          '**The original [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) model card explicitly states it is "an open-access reproduction of Flamingo, a closed-source visual language model developed by DeepMind."** It was released by the HuggingFace M4 team in 2023 in two sizes, 9B and 80B parameters, combining a vision encoder with a LLaMA(1) language model backbone.',
          '**The original Idefics carries a mixed license, not a single permissive one.** Its vision encoder and the newly trained connecting parameters are released under MIT, but the LLaMA(1) language model backbone requires compliance with Meta\'s original research-only, non-commercial license for LLaMA. This makes the original Idefics unsuitable for commercial use in most cases, regardless of the MIT tag on parts of the stack.',
          '**Idefics2 (8B), released around April 2024**, replaced the LLaMA(1) backbone with [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) and paired it with a [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384) vision encoder. Because both parent models are Apache-2.0, Idefics2\'s own [model card](https://huggingface.co/HuggingFaceM4/idefics2-8b) states the full model is Apache-2.0 — resolving the original Idefics\' licensing problem. HuggingFace\'s own description credits Idefics2 with matching Idefics-80B\'s performance at roughly 10x smaller size, with meaningfully better OCR and document understanding.',
          '**Idefics3 (8B), released August 22, 2024**, kept the SigLIP vision encoder but switched the language backbone to [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). Its own [model card](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) demonstrates a substantial improvement over Idefics2, particularly in document understanding, OCR, and visual reasoning. It was added to Hugging Face Transformers in version 4.46.',
        ],
        faqs: [
          {
            q: 'Is Idefics a reproduction of DeepMind\'s Flamingo?',
            a: 'Yes. The original Idefics model card explicitly describes it as "an open-access reproduction of Flamingo, a closed-source visual language model developed by DeepMind." Idefics2 and Idefics3 are HuggingFace M4\'s subsequent, independently architected generations built on that same lineage.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3: What Actually Changed',
        content: [
          'The three generations are distinct models with different base architectures — not a single model with incremental version bumps. Here is what actually differs, verified against each model\'s own HuggingFace card.',
        ],
        itemHeadings: true,
        columns: ['Version', 'Released', 'Backbone', 'Notes'],
        rows: [
          {
            'Version': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'Released': '2023',
            'Backbone': 'LLaMA(1) + custom vision encoder',
            'Notes': 'Research-only license restriction from LLaMA(1); largely superseded',
          },
          {
            'Version': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'Released': 'April 2024',
            'Backbone': 'Mistral-7B-v0.1 + SigLIP',
            'Notes': 'Fully Apache-2.0; matches Idefics-80B at 10x smaller size',
          },
          {
            'Version': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'Released': 'August 22, 2024',
            'Backbone': 'Llama-3.1-8B-Instruct + SigLIP',
            'Notes': 'Best OCR/document understanding of the three; Llama 3.1 license terms apply',
          },
        ],
        note: 'PromptQuorum did not find a publicly confirmed "Idefics4" as of this review. Idefics3 is the newest generation and the current recommendation for most tasks.',
      },
      license: {
        id: 'license',
        title: 'License Nuance: It Is Not Simply Apache-2.0',
        content: [
          'PromptQuorum\'s directory listing for Idefics tags its license as "Apache 2.0" — that is accurate for the model repository and code, but incomplete for the practical licensing situation, similarly to how LLaVA\'s Apache-2.0 code license does not automatically extend to every base-model checkpoint.',
          '**Idefics2 is the cleanest case:** both its Mistral-7B-v0.1 language backbone and its SigLIP vision encoder are Apache-2.0, so the full model stack is genuinely Apache-2.0 with no additional terms.',
          '**Idefics3 is more nuanced.** Its own HuggingFace repository is tagged Apache-2.0, but its language backbone, Meta-Llama-3.1-8B-Instruct, is released under Meta\'s Llama 3.1 Community License — which includes an acceptable-use policy and a clause requiring a separate license from Meta if a downstream product exceeds 700 million monthly active users. Anyone deploying Idefics3 commercially at scale should read Meta\'s Llama 3.1 license terms directly, not just the Apache-2.0 tag on the Idefics3 repository.',
          '**The original Idefics is the most restrictive.** Its LLaMA(1) backbone carries Meta\'s original research-only, non-commercial license, which makes commercial use of the full 9B/80B model legally unclear at best and unavailable at worst — even though the vision encoder and connector weights are separately MIT-licensed.',
        ],
        faqs: [
          {
            q: 'Is Idefics free to use commercially?',
            a: 'It depends on which generation. Idefics2 is fully Apache-2.0 with no additional restrictions. Idefics3\'s own repository is Apache-2.0, but its Llama-3.1-8B-Instruct backbone carries Meta\'s Llama 3.1 Community License terms, including a separate-license requirement above 700 million monthly active users. The original Idefics carries a research-only, non-commercial restriction from its LLaMA(1) backbone.',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'Real Usage Example: Transformers Library',
        content: [
          'Idefics3 is used through Hugging Face Transformers\' `AutoModelForVision2Seq` and `AutoProcessor` classes, documented in [Transformers\' Idefics3 model docs](https://huggingface.co/docs/transformers/en/model_doc/idefics3). Transformers version 4.46 or later is required.',
        ],
        codeBlock: `# Requires transformers >= 4.46 (per Hugging Face's Idefics3 model docs)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'This example mirrors the pattern documented on Idefics3\'s own Hugging Face model card and Transformers\' Idefics3 documentation — verify against the current version of those pages before scripting a production integration, since the Transformers API can evolve between releases.',
        items: [
          '**No Ollama or llama.cpp path exists today.** Idefics runs through Transformers (or compatible inference servers like Text Generation Inference), not through GGUF-based runners.',
          '**Reducing the image resolution parameter can lower GPU memory use.** Idefics2/3\'s model cards document reducing the number of image sub-patches processed (referred to as `N` in Idefics3\'s documentation) as a way to trade some accuracy for lower VRAM.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM and Hardware Requirements',
        content: [
          'Idefics2 and Idefics3 are meaningfully heavier than comparably-sized LLaVA or MiniCPM-V checkpoints, largely because of how they process image resolution. These figures come directly from Idefics2\'s own model card, which documents its VRAM range explicitly; Idefics3 (same 8B parameter count and vision encoder) is expected to be similar, though PromptQuorum did not find an equally detailed published VRAM table for Idefics3 specifically.',
        ],
        columns: ['Configuration', 'Approx. VRAM', 'Notes'],
        rows: [
          { 'Configuration': 'float16 + flash-attention', 'Approx. VRAM': '~18-20 GB', 'Notes': 'Documented on Idefics2\'s model card as the standard configuration' },
          { 'Configuration': 'Without optimizations', 'Approx. VRAM': 'Up to ~55 GB peak', 'Notes': 'Idefics2\'s model card\'s upper bound for unoptimized inference' },
          { 'Configuration': 'Aggressive quantization', 'Approx. VRAM': '~6-7 GB', 'Notes': 'Lower bound documented on Idefics2\'s model card; expect an accuracy trade-off' },
          { 'Configuration': 'LLaVA 7B (for comparison)', 'Approx. VRAM': '~6-8 GB', 'Notes': 'See PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review)' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum did not run its own hardware benchmarks for this article; these figures are drawn from Idefics2\'s published model card. Idefics is genuinely heavier than LLaVA 7B or MiniCPM-V at comparable capability tiers — be honest with yourself about available VRAM before choosing it for a resource-constrained deployment.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What Idefics Is Not Good For',
        content: [
          'Idefics3 is a capable open vision-language model, but it is the wrong choice for the following situations:',
        ],
        items: [
          '**Resource-constrained local setups.** At roughly 18-20 GB VRAM in its standard float16 configuration, Idefics2/3 need meaningfully more GPU memory than LLaVA 7B (~6-8 GB) or MiniCPM-V (~5.5 GB). If your hardware budget is a single consumer GPU with 8 GB of VRAM or less, Idefics is not a realistic fit without aggressive quantization and an accepted accuracy trade-off.',
          '**Real-time or low-latency applications.** An 8B-parameter vision-language model that processes multiple image sub-patches per input is not built for the fastest possible response time. If latency is the priority, a smaller model like Moondream (1.8B) will respond faster, at reduced capability.',
          '**A drop-in Ollama or llama.cpp workflow.** Idefics is not currently packaged in Ollama\'s library, and GGUF conversion has open, unresolved compatibility issues tracked on Ollama\'s own GitHub. If your workflow depends on Ollama specifically, see PromptQuorum\'s [Ollama vision models guide](/power-local-llm/ollama-vision-models-review) for models that are actually pullable today.',
          '**Assuming a single, uniform license across versions.** Treating "Idefics" as one product with one license is a mistake — verify which generation you are deploying and read that specific model\'s license terms, particularly for Idefics3\'s Llama 3.1 Community License obligations at scale.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives and Competitors',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[LLaVA](/power-local-llm/llava-review)',
            'Best fit': 'Broader tooling support, including Ollama and llama.cpp packaging; lighter VRAM footprint at 7B',
            'License': 'Apache-2.0 (code); base-model-dependent for checkpoints',
          },
          {
            'Tool': '[Ollama\'s vision models](/power-local-llm/ollama-vision-models-review)',
            'Best fit': 'Simplest local setup via `ollama pull`/`ollama run`; Idefics is not among them as of this review',
            'License': 'Varies by model',
          },
          {
            'Tool': 'MLC Chat',
            'Best fit': 'Cross-platform on-device deployment; primarily text-focused as of this review — verify current vision support before relying on it',
            'License': 'Apache-2.0',
          },
          {
            'Tool': 'Cloud VLM APIs (GPT-4o, Claude, Gemini vision)',
            'Best fit': 'Highest available multimodal capability, no local hardware or setup needed',
            'License': 'Proprietary (paid API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Idefics?',
            a: 'Idefics is a family of open vision-language models built by HuggingFace\'s M4 team, explicitly designed as an open reproduction of DeepMind\'s Flamingo. It exists in three generations: the original Idefics (2023, 9B/80B), Idefics2 (April 2024, 8B), and Idefics3 (August 2024, 8B).',
          },
          {
            q: 'Which version of Idefics should I use — Idefics, Idefics2, or Idefics3?',
            a: 'Idefics3 for most tasks today — it has the strongest OCR and document understanding of the three. Idefics2 remains relevant if you specifically need a fully Apache-2.0 stack with no Llama-derived license terms. The original Idefics is largely superseded and carries a research-only license restriction.',
          },
          {
            q: 'Is Idefics fully open-source and free to use commercially?',
            a: 'It depends on the generation. Idefics2 is fully Apache-2.0. Idefics3\'s repository is tagged Apache-2.0, but its Llama-3.1-8B-Instruct backbone carries Meta\'s Llama 3.1 Community License terms, including obligations above 700 million monthly active users. The original Idefics has a research-only, non-commercial restriction from its LLaMA(1) backbone.',
          },
          {
            q: 'How much VRAM does Idefics need?',
            a: 'Idefics2 (and likely Idefics3, at the same 8B parameter count and vision encoder) needs roughly 18-20 GB of VRAM in the standard float16-with-flash-attention configuration documented on Idefics2\'s model card, or as little as 6-7 GB with aggressive quantization and an accuracy trade-off. This is meaningfully heavier than LLaVA 7B or MiniCPM-V.',
          },
          {
            q: 'Can I run Idefics through Ollama?',
            a: 'Not as of this review. Idefics is not currently packaged in Ollama\'s model library, and GGUF conversion has open compatibility issues tracked on Ollama\'s own GitHub repository. Idefics runs through Hugging Face Transformers instead.',
          },
          {
            q: 'Is Idefics based on DeepMind\'s Flamingo?',
            a: 'Idefics is explicitly described on its own model card as "an open-access reproduction of Flamingo, a closed-source visual language model developed by DeepMind." Idefics2 and Idefics3 are independently architected successors built by the same HuggingFace M4 team.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Idefics is a genuinely useful family of open vision-language models, and Idefics3 specifically holds up well for document-heavy OCR and multi-image reasoning work where its roughly 18-20 GB VRAM footprint is affordable. It is not, however, a drop-in replacement for lighter local vision models: it needs meaningfully more GPU memory than LLaVA 7B or MiniCPM-V, it has no Ollama or llama.cpp packaging as of this review, and its license situation genuinely differs by generation — Idefics2\'s clean Apache-2.0 stack is a different legal proposition from Idefics3\'s Llama 3.1 Community License obligations. Choose Idefics3 for document understanding and OCR quality when you have the GPU memory to spare; choose Idefics2 specifically if a pure Apache-2.0 stack matters; and choose LLaVA, via PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review), or one of the models in the [Ollama vision models guide](/power-local-llm/ollama-vision-models-review), for lighter local hardware or Ollama-based workflows.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Idefics-80B model card](https://huggingface.co/HuggingFaceM4/idefics-80b) — Flamingo reproduction statement, license structure, model sizes.',
          '[Idefics2-8b model card](https://huggingface.co/HuggingFaceM4/idefics2-8b) — base models, Apache-2.0 license, documented VRAM range.',
          '[Idefics3-8B-Llama3 model card](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — base model, license tag, release details.',
          '[Idefics3 Transformers documentation](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — usage example, minimum Transformers version.',
          '[Meta Llama 3.1 Community License](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — license terms inherited by Idefics3\'s language backbone.',
          '[Ollama GitHub issue #2183](https://github.com/ollama/ollama/issues/2183) and [issue #3677](https://github.com/ollama/ollama/issues/3677) — open feature requests confirming Idefics is not currently packaged in Ollama\'s library.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LLaVA Review (2026)](/power-local-llm/llava-review) — a comparable open vision-language model with broader tooling support.',
          '[Ollama Vision Models (2026)](/power-local-llm/ollama-vision-models-review) — which vision models are actually pullable through Ollama today.',
          '[Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama Multimodal Setup](/power-local-llm/local-vision-models-llava-ollama-2026) — a broader, task-by-task comparison across current local vision models.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Idefics Review (2026): HuggingFace\'s Open Vision-Language Models, Honestly Assessed',
      description:
        'Idefics review 2026: HuggingFace\'s open vision-language model family. Idefics vs Idefics2 vs Idefics3 compared honestly — license nuances, real VRAM requirements, and which version to use today.',
      url: 'https://promptquorum.com/power-local-llm/idefics-review',
      inLanguage: 'en',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and researchers evaluating open vision-language models' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Idefics Review (2026)', item: 'https://promptquorum.com/power-local-llm/idefics-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-de.webp',
    title: 'Idefics-Test (2026): HuggingFace\'s offene Vision-Language-Modelle, ehrlich bewertet',
    seoTitle: 'Idefics-Test 2026: Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics ist eine Familie offener Vision-Language-Modelle des HuggingFace-M4-Teams, die ausdrücklich als offene Nachbildung von DeepMinds Flamingo konzipiert wurde. Die Familie umfasst drei Generationen — das ursprüngliche Idefics, Idefics2 und Idefics3 — und diese sind nicht austauschbar: Sie nutzen unterschiedliche Basis-Sprachmodelle, in der Praxis unterschiedliche Lizenzen und sehr unterschiedliche Hardwareanforderungen. Dieser Test behandelt die tatsächliche Geschichte, welche Version heute wirklich zu verwenden ist, ehrliche VRAM-Zahlen und wo Idefics nicht passt, insbesondere für ressourcenbeschränkte lokale Setups. Für ein vergleichbares offenes Vision-Language-Modell mit größerer bestehender Nutzerbasis siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review); für das Ausführen von Vision-Modellen speziell über Ollama (Idefics ist derzeit nicht dafür verpackt) siehe den [Ollama-Vision-Modelle-Leitfaden](/de/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'Idefics-Test 2026: HuggingFace\'s offene Vision-Language-Modellfamilie. Idefics vs Idefics2 vs Idefics3 ehrlich verglichen — Lizenznuancen, echte VRAM-Anforderungen und welche Version heute zu nutzen ist.',
    twitterDescription:
      'Idefics-Test 2026: HuggingFace M4\'s offene Vision-Language-Modellfamilie, eine ausdrückliche Nachbildung von DeepMinds Flamingo. Idefics vs Idefics2 vs Idefics3 — Lizenznuancen, ehrliche VRAM-Zahlen und welches tatsächlich zu nutzen ist.',
    audience:
      'Entwickler und Forscher, die offene Vision-Language-Modelle bewerten und einen ehrlichen Vergleich der drei Idefics-Generationen suchen, einschließlich Lizenz- und Hardware-Kompromissen, statt Marketingaussagen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'idefics test',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'idefics lizenz',
      'idefics vram anforderungen',
      'huggingface vision language modell',
      'idefics vs llava',
      'flamingo offene nachbildung',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics ist eine Familie offener Vision-Language-Modelle des HuggingFace-M4-Teams, konzipiert als ausdrückliche offene Nachbildung von DeepMinds Flamingo.** Es gibt drei Generationen: das ursprüngliche Idefics (9B/80B, 2023), Idefics2 (8B, April 2024) und Idefics3 (8B, August 2024). Für die tatsächliche Nutzung heute ist Idefics3 für die meisten Aufgaben die aktuelle Empfehlung — es verbessert OCR, Dokumentenverständnis und visuelles Denken gegenüber Idefics2 erheblich, das selbst bei vergleichbarer Leistung "10-mal kleiner" als das ursprüngliche Idefics war. Die Lizenz ist nuanciert: Idefics2s Mistral-7B-v0.1-Basis hält den gesamten Stack unter Apache-2.0, während Idefics3s Llama-3.1-8B-Instruct-Basis neben dem Apache-2.0-Tag des Modell-Repositorys selbst die Bedingungen von Metas Llama-3.1-Community-Lizenz mit sich bringt. Idefics ist derzeit nicht in [Ollamas Bibliothek](https://ollama.com/library) verpackt — die GGUF-Konvertierung hat zum Zeitpunkt dieses Tests offene Kompatibilitätsprobleme. Für ein vergleichbares offenes VLM mit breiterer Tool-Unterstützung siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review).',
    quickAnswerTop: {
      en: {
        question: 'Was ist Idefics und welche Version sollte ich tatsächlich verwenden — Idefics, Idefics2 oder Idefics3?',
        answer:
          'Idefics ist HuggingFace M4s Familie offener Vision-Language-Modelle, ausdrücklich als offene Nachbildung von DeepMinds Flamingo konzipiert. Verwenden Sie heute für die meisten Aufgaben Idefics3 (8B, veröffentlicht am 22. August 2024) — es ist die aktuelle Generation mit dem stärksten OCR, Dokumentenverständnis und visuellen Denken der drei. Idefics2 (8B, April 2024) bleibt relevant, wenn eine reine Apache-2.0-Lizenz ohne von Llama abgeleitete Bedingungen für Ihren Anwendungsfall wichtig ist, da seine Basis Mistral-7B-v0.1 statt Llama 3.1 ist. Das ursprüngliche Idefics (9B/80B, 2023) ist weitgehend überholt — es ist 10-mal größer als Idefics2 bei vergleichbarer Leistung und trägt eine reine Forschungslizenzbeschränkung, die von der ursprünglichen LLaMA-Veröffentlichung geerbt wurde. Keines der drei ist derzeit in Ollamas Bibliothek verpackt.',
        bullets: [
          'Drei Generationen existieren: Idefics (2023, 9B/80B), Idefics2 (April 2024, 8B), Idefics3 (August 2024, 8B) — verifiziert anhand der jeweiligen HuggingFace-Modellkarten.',
          'Idefics3 ist heute die aktuelle Empfehlung für die meisten Aufgaben: stärkstes OCR und Dokumentenverständnis der drei.',
          'Lizenznuance: Idefics2 (Mistral-7B-Basis) ist vollständig Apache-2.0; Idefics3 (Llama-3.1-8B-Instruct-Basis) trägt zusätzlich zum Apache-2.0-Repository-Tag die Bedingungen von Metas Llama-3.1-Community-Lizenz.',
          'Das ursprüngliche Idefics trägt eine reine Forschungslizenzbeschränkung von seiner LLaMA(1)-Basis und ist weitgehend überholt.',
          'VRAM: Idefics2/3 benötigen etwa 18-20 GB in Float16 mit Flash-Attention, oder nur 6-7 GB mit aggressiver Quantisierung — das ist schwerer als LLaVA 7B oder MiniCPM-V.',
          'Idefics ist derzeit nicht in Ollamas Bibliothek verpackt; offene GitHub-Issues verfolgen Schwierigkeiten bei der GGUF-Konvertierung.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: HuggingFace M4 und die Flamingo-Nachbildung', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3: Was sich tatsächlich geändert hat', anchor: 'versions' },
      { label: 'Lizenznuance: Es ist nicht einfach Apache-2.0', anchor: 'license' },
      { label: 'Echtes Nutzungsbeispiel: Transformers-Bibliothek', anchor: 'usage-example' },
      { label: 'VRAM- und Hardwareanforderungen', anchor: 'vram-guidance' },
      { label: 'Wofür Idefics nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen und Wettbewerber', anchor: 'alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics ist HuggingFace M4s offene Nachbildung von DeepMinds Flamingo, mittlerweile in dritter Generation (Idefics3, 8B, August 2024), mit deutlich unterschiedlichen Lizenzen und VRAM-Anforderungen über seine drei Versionen hinweg, und derzeit nicht in Ollamas Modellbibliothek verpackt.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics ist eine Familie von KI-Modellen von HuggingFace, die Bilder betrachten und Fragen dazu beantworten können, ähnlich wie LLaVA — dieser Test erklärt, welche der drei Versionen tatsächlich zu verwenden ist, was sie an GPU-Speicher kostet und wo sie an ihre Grenzen stößt.',
          },
        ],
        items: [
          'Drei Generationen existieren: Idefics (2023), Idefics2 (April 2024), Idefics3 (August 2024) — jede ein eigenständiges Modell, kein einfaches Upgrade.',
          'Idefics3 ist heute die aktuelle Empfehlung für die meisten Aufgaben; es verbessert OCR und Dokumentenverständnis gegenüber Idefics2 erheblich.',
          'Die Lizenz ist über die Generationen hinweg nuanciert: das ursprüngliche Idefics hat eine reine Forschungsbeschränkung; Idefics2 ist vollständig Apache-2.0 (Mistral-7B-Basis); Idefics3 trägt zusätzlich zu seinem Apache-2.0-Repository-Tag die Bedingungen der Llama-3.1-Community-Lizenz (Llama-3.1-8B-Instruct-Basis).',
          'VRAM: etwa 18-20 GB in Float16 für Idefics2/3, oder 6-7 GB mit aggressiver Quantisierung — schwerer als LLaVA 7B oder MiniCPM-V.',
          'Zum Zeitpunkt dieses Tests nicht in Ollamas Bibliothek verpackt; offene GitHub-Issues verfolgen Schwierigkeiten bei der GGUF-Konvertierung.',
          'Am besten geeignet für: dokumentenlastige OCR- und Multi-Bild-Denkaufgaben mit ausreichendem GPU-Speicher, nicht für ressourcenbeschränkte oder Echtzeit-lokale Setups.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat diese Fakten direkt anhand der HuggingFace-Modellkarten für idefics-80b, idefics2-8b und Idefics3-8B-Llama3 sowie anhand von Ollamas Bibliothek und GitHub-Issue-Tracker überprüft — siehe den Abschnitt Quellen für genaue Links.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: HuggingFace M4 und die Flamingo-Nachbildung',
        content: [
          '**Die Modellkarte des ursprünglichen [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) besagt ausdrücklich, es handle sich um "eine offen zugängliche Nachbildung von Flamingo, einem von DeepMind entwickelten proprietären Vision-Language-Modell."** Es wurde 2023 vom HuggingFace-M4-Team in zwei Größen veröffentlicht, 9B und 80B Parameter, die einen Vision-Encoder mit einer LLaMA(1)-Sprachmodell-Basis kombinieren.',
          '**Das ursprüngliche Idefics trägt eine gemischte Lizenz, nicht eine einzige freizügige.** Sein Vision-Encoder und die neu trainierten Verbindungsparameter werden unter MIT veröffentlicht, doch die LLaMA(1)-Sprachmodell-Basis erfordert die Einhaltung von Metas ursprünglicher, reiner Forschungslizenz für LLaMA ohne kommerzielle Nutzung. Dies macht das ursprüngliche Idefics in den meisten Fällen ungeeignet für kommerzielle Nutzung, unabhängig vom MIT-Tag auf Teilen des Stacks.',
          '**Idefics2 (8B), veröffentlicht um April 2024**, ersetzte die LLaMA(1)-Basis durch [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) und kombinierte es mit einem [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384)-Vision-Encoder. Da beide Basismodelle Apache-2.0 sind, besagt Idefics2s eigene [Modellkarte](https://huggingface.co/HuggingFaceM4/idefics2-8b), dass das gesamte Modell Apache-2.0 ist — was das Lizenzproblem des ursprünglichen Idefics löst. HuggingFace selbst schreibt Idefics2 zu, die Leistung von Idefics-80B bei etwa 10-mal kleinerer Größe zu erreichen, mit deutlich besserem OCR und Dokumentenverständnis.',
          '**Idefics3 (8B), veröffentlicht am 22. August 2024**, behielt den SigLIP-Vision-Encoder bei, wechselte jedoch die Sprachbasis zu [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). Seine eigene [Modellkarte](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) zeigt eine deutliche Verbesserung gegenüber Idefics2, insbesondere bei Dokumentenverständnis, OCR und visuellem Denken. Es wurde in Version 4.46 zu Hugging Face Transformers hinzugefügt.',
        ],
        faqs: [
          {
            q: 'Ist Idefics eine Nachbildung von DeepMinds Flamingo?',
            a: 'Ja. Die Modellkarte des ursprünglichen Idefics beschreibt es ausdrücklich als "eine offen zugängliche Nachbildung von Flamingo, einem von DeepMind entwickelten proprietären Vision-Language-Modell." Idefics2 und Idefics3 sind nachfolgende, unabhängig architektierte Generationen von HuggingFace M4 auf derselben Abstammungslinie.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3: Was sich tatsächlich geändert hat',
        content: [
          'Die drei Generationen sind eigenständige Modelle mit unterschiedlichen Basisarchitekturen — kein einzelnes Modell mit schrittweisen Versionserhöhungen. Hier ist, was sich tatsächlich unterscheidet, verifiziert anhand der jeweiligen HuggingFace-Karte jedes Modells.',
        ],
        itemHeadings: true,
        columns: ['Version', 'Veröffentlicht', 'Basis', 'Hinweise'],
        rows: [
          {
            'Version': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'Veröffentlicht': '2023',
            'Basis': 'LLaMA(1) + eigener Vision-Encoder',
            'Hinweise': 'Reine Forschungslizenzbeschränkung von LLaMA(1); weitgehend überholt',
          },
          {
            'Version': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'Veröffentlicht': 'April 2024',
            'Basis': 'Mistral-7B-v0.1 + SigLIP',
            'Hinweise': 'Vollständig Apache-2.0; erreicht Idefics-80B bei 10-mal kleinerer Größe',
          },
          {
            'Version': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'Veröffentlicht': '22. August 2024',
            'Basis': 'Llama-3.1-8B-Instruct + SigLIP',
            'Hinweise': 'Bestes OCR/Dokumentenverständnis der drei; Llama-3.1-Lizenzbedingungen gelten',
          },
        ],
        note: 'PromptQuorum fand zum Zeitpunkt dieses Tests kein öffentlich bestätigtes "Idefics4". Idefics3 ist die neueste Generation und die aktuelle Empfehlung für die meisten Aufgaben.',
      },
      license: {
        id: 'license',
        title: 'Lizenznuance: Es ist nicht einfach Apache-2.0',
        content: [
          'PromptQuorums Verzeichniseintrag für Idefics kennzeichnet dessen Lizenz als "Apache 2.0" — das ist korrekt für das Modell-Repository und den Code, aber unvollständig für die praktische Lizenzsituation, ähnlich wie sich LLaVAs Apache-2.0-Codelizenz nicht automatisch auf jeden Basismodell-Checkpoint erstreckt.',
          '**Idefics2 ist der klarste Fall:** Sowohl seine Mistral-7B-v0.1-Sprachbasis als auch sein SigLIP-Vision-Encoder sind Apache-2.0, sodass der gesamte Modell-Stack tatsächlich Apache-2.0 ist, ohne zusätzliche Bedingungen.',
          '**Idefics3 ist nuancierter.** Sein eigenes HuggingFace-Repository ist als Apache-2.0 gekennzeichnet, doch seine Sprachbasis, Meta-Llama-3.1-8B-Instruct, wird unter Metas Llama-3.1-Community-Lizenz veröffentlicht — die eine Nutzungsrichtlinie und eine Klausel enthält, wonach ein separates Lizenzabkommen mit Meta erforderlich ist, falls ein nachgelagertes Produkt 700 Millionen monatliche aktive Nutzer überschreitet. Wer Idefics3 kommerziell in großem Maßstab einsetzt, sollte Metas Llama-3.1-Lizenzbedingungen direkt lesen, nicht nur das Apache-2.0-Tag im Idefics3-Repository.',
          '**Das ursprüngliche Idefics ist am restriktivsten.** Seine LLaMA(1)-Basis trägt Metas ursprüngliche, reine Forschungslizenz ohne kommerzielle Nutzung, wodurch die kommerzielle Nutzung des vollständigen 9B/80B-Modells rechtlich bestenfalls unklar und schlimmstenfalls unzulässig ist — auch wenn Vision-Encoder und Verbindungsgewichte separat unter MIT lizenziert sind.',
        ],
        faqs: [
          {
            q: 'Ist Idefics kostenlos für kommerzielle Nutzung?',
            a: 'Das hängt von der Generation ab. Idefics2 ist vollständig Apache-2.0 ohne zusätzliche Einschränkungen. Idefics3s eigenes Repository ist Apache-2.0, doch seine Llama-3.1-8B-Instruct-Basis trägt die Bedingungen von Metas Llama-3.1-Community-Lizenz, einschließlich einer Lizenzpflicht ab 700 Millionen monatlichen aktiven Nutzern. Das ursprüngliche Idefics trägt eine reine Forschungsbeschränkung ohne kommerzielle Nutzung von seiner LLaMA(1)-Basis.',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'Echtes Nutzungsbeispiel: Transformers-Bibliothek',
        content: [
          'Idefics3 wird über die Klassen `AutoModelForVision2Seq` und `AutoProcessor` von Hugging Face Transformers verwendet, dokumentiert in [Transformers\' Idefics3-Modelldokumentation](https://huggingface.co/docs/transformers/en/model_doc/idefics3). Transformers-Version 4.46 oder höher ist erforderlich.',
        ],
        codeBlock: `# Erfordert transformers >= 4.46 (gemäß Hugging Face's Idefics3-Modelldokumentation)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'Dieses Beispiel spiegelt das Muster wider, das auf Idefics3s eigener Hugging-Face-Modellkarte und in Transformers\' Idefics3-Dokumentation dokumentiert ist — überprüfen Sie es anhand der aktuellen Version dieser Seiten, bevor Sie eine Produktionsintegration skripten, da sich die Transformers-API zwischen Versionen ändern kann.',
        items: [
          '**Es gibt heute keinen Ollama- oder llama.cpp-Pfad.** Idefics läuft über Transformers (oder kompatible Inferenzserver wie Text Generation Inference), nicht über GGUF-basierte Runner.',
          '**Das Reduzieren des Bildauflösungsparameters kann den GPU-Speicherverbrauch senken.** Idefics2/3s Modellkarten dokumentieren das Reduzieren der Anzahl verarbeiteter Bild-Unterausschnitte (in Idefics3s Dokumentation als `N` bezeichnet) als Möglichkeit, etwas Genauigkeit gegen weniger VRAM einzutauschen.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM- und Hardwareanforderungen',
        content: [
          'Idefics2 und Idefics3 sind deutlich schwerer als vergleichbar große LLaVA- oder MiniCPM-V-Checkpoints, größtenteils aufgrund der Art, wie sie die Bildauflösung verarbeiten. Diese Zahlen stammen direkt aus Idefics2s eigener Modellkarte, die seinen VRAM-Bereich ausdrücklich dokumentiert; für Idefics3 (gleiche 8B-Parameterzahl und Vision-Encoder) wird ein ähnlicher Wert erwartet, obwohl PromptQuorum keine ebenso detaillierte veröffentlichte VRAM-Tabelle speziell für Idefics3 fand.',
        ],
        columns: ['Konfiguration', 'Ca. VRAM', 'Hinweise'],
        rows: [
          { 'Konfiguration': 'Float16 + Flash-Attention', 'Ca. VRAM': '~18-20 GB', 'Hinweise': 'Auf Idefics2s Modellkarte als Standardkonfiguration dokumentiert' },
          { 'Konfiguration': 'Ohne Optimierungen', 'Ca. VRAM': 'Bis zu ~55 GB Spitzenwert', 'Hinweise': 'Obergrenze auf Idefics2s Modellkarte für unoptimierte Inferenz' },
          { 'Konfiguration': 'Aggressive Quantisierung', 'Ca. VRAM': '~6-7 GB', 'Hinweise': 'Untergrenze auf Idefics2s Modellkarte dokumentiert; erwarten Sie einen Genauigkeitskompromiss' },
          { 'Konfiguration': 'LLaVA 7B (zum Vergleich)', 'Ca. VRAM': '~6-8 GB', 'Hinweise': 'Siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review)' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat für diesen Artikel keine eigenen Hardware-Benchmarks durchgeführt; diese Zahlen stammen aus Idefics2s veröffentlichter Modellkarte. Idefics ist bei vergleichbaren Fähigkeitsstufen tatsächlich schwerer als LLaVA 7B oder MiniCPM-V — seien Sie ehrlich zu sich selbst über verfügbares VRAM, bevor Sie es für eine ressourcenbeschränkte Bereitstellung wählen.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür Idefics nicht geeignet ist',
        content: [
          'Idefics3 ist ein leistungsfähiges offenes Vision-Language-Modell, aber die falsche Wahl für folgende Situationen:',
        ],
        items: [
          '**Ressourcenbeschränkte lokale Setups.** Mit etwa 18-20 GB VRAM in seiner Standard-Float16-Konfiguration benötigen Idefics2/3 deutlich mehr GPU-Speicher als LLaVA 7B (~6-8 GB) oder MiniCPM-V (~5,5 GB). Wenn Ihr Hardwarebudget eine einzelne Consumer-GPU mit 8 GB VRAM oder weniger ist, ist Idefics ohne aggressive Quantisierung und einen akzeptierten Genauigkeitskompromiss keine realistische Option.',
          '**Echtzeit- oder latenzarme Anwendungen.** Ein Vision-Language-Modell mit 8B Parametern, das mehrere Bild-Unterausschnitte pro Eingabe verarbeitet, ist nicht für die schnellstmögliche Reaktionszeit gebaut. Wenn Latenz Priorität hat, reagiert ein kleineres Modell wie Moondream (1,8B) schneller, bei reduzierter Fähigkeit.',
          '**Ein direkter Ollama- oder llama.cpp-Workflow.** Idefics ist derzeit nicht in Ollamas Bibliothek verpackt, und die GGUF-Konvertierung hat offene, ungelöste Kompatibilitätsprobleme, die auf Ollamas eigenem GitHub verfolgt werden. Wenn Ihr Workflow speziell auf Ollama basiert, siehe PromptQuorums [Ollama-Vision-Modelle-Leitfaden](/de/power-local-llm/ollama-vision-models-review) für Modelle, die heute tatsächlich abrufbar sind.',
          '**Die Annahme einer einzigen, einheitlichen Lizenz über alle Versionen hinweg.** "Idefics" als ein Produkt mit einer Lizenz zu behandeln, ist ein Fehler — überprüfen Sie, welche Generation Sie bereitstellen, und lesen Sie die spezifischen Lizenzbedingungen dieses Modells, insbesondere für Idefics3s Verpflichtungen aus der Llama-3.1-Community-Lizenz bei großem Maßstab.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen und Wettbewerber',
        itemHeadings: true,
        columns: ['Tool', 'Am besten geeignet', 'Lizenz'],
        rows: [
          {
            'Tool': '[LLaVA](/de/power-local-llm/llava-review)',
            'Am besten geeignet': 'Breitere Tool-Unterstützung, einschließlich Ollama- und llama.cpp-Verpackung; geringerer VRAM-Bedarf bei 7B',
            'Lizenz': 'Apache-2.0 (Code); basismodellabhängig für Checkpoints',
          },
          {
            'Tool': '[Ollamas Vision-Modelle](/de/power-local-llm/ollama-vision-models-review)',
            'Am besten geeignet': 'Einfachstes lokales Setup über `ollama pull`/`ollama run`; Idefics ist zum Zeitpunkt dieses Tests nicht darunter',
            'Lizenz': 'Je nach Modell unterschiedlich',
          },
          {
            'Tool': 'MLC Chat',
            'Am besten geeignet': 'Plattformübergreifende On-Device-Bereitstellung; zum Zeitpunkt dieses Tests hauptsächlich textfokussiert — aktuelle Vision-Unterstützung vor Verlass darauf überprüfen',
            'Lizenz': 'Apache-2.0',
          },
          {
            'Tool': 'Cloud-VLM-APIs (GPT-4o, Claude, Gemini Vision)',
            'Am besten geeignet': 'Höchste verfügbare Multimodal-Fähigkeit, keine lokale Hardware oder Einrichtung nötig',
            'Lizenz': 'Proprietär (kostenpflichtige API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Idefics?',
            a: 'Idefics ist eine Familie offener Vision-Language-Modelle des HuggingFace-M4-Teams, ausdrücklich als offene Nachbildung von DeepMinds Flamingo konzipiert. Es existiert in drei Generationen: das ursprüngliche Idefics (2023, 9B/80B), Idefics2 (April 2024, 8B) und Idefics3 (August 2024, 8B).',
          },
          {
            q: 'Welche Version von Idefics sollte ich verwenden — Idefics, Idefics2 oder Idefics3?',
            a: 'Idefics3 für die meisten Aufgaben heute — es hat das stärkste OCR und Dokumentenverständnis der drei. Idefics2 bleibt relevant, wenn Sie speziell einen vollständig Apache-2.0-lizenzierten Stack ohne von Llama abgeleitete Lizenzbedingungen benötigen. Das ursprüngliche Idefics ist weitgehend überholt und trägt eine reine Forschungslizenzbeschränkung.',
          },
          {
            q: 'Ist Idefics vollständig quelloffen und kostenlos für kommerzielle Nutzung?',
            a: 'Das hängt von der Generation ab. Idefics2 ist vollständig Apache-2.0. Idefics3s Repository ist als Apache-2.0 gekennzeichnet, doch seine Llama-3.1-8B-Instruct-Basis trägt die Bedingungen von Metas Llama-3.1-Community-Lizenz, einschließlich Verpflichtungen ab 700 Millionen monatlichen aktiven Nutzern. Das ursprüngliche Idefics hat eine reine Forschungsbeschränkung ohne kommerzielle Nutzung von seiner LLaMA(1)-Basis.',
          },
          {
            q: 'Wie viel VRAM benötigt Idefics?',
            a: 'Idefics2 (und wahrscheinlich Idefics3, bei gleicher 8B-Parameterzahl und gleichem Vision-Encoder) benötigt etwa 18-20 GB VRAM in der auf Idefics2s Modellkarte dokumentierten Standard-Float16-mit-Flash-Attention-Konfiguration, oder nur 6-7 GB mit aggressiver Quantisierung und einem Genauigkeitskompromiss. Das ist deutlich schwerer als LLaVA 7B oder MiniCPM-V.',
          },
          {
            q: 'Kann ich Idefics über Ollama ausführen?',
            a: 'Zum Zeitpunkt dieses Tests nicht. Idefics ist derzeit nicht in Ollamas Modellbibliothek verpackt, und die GGUF-Konvertierung hat offene Kompatibilitätsprobleme, die auf Ollamas eigenem GitHub-Repository verfolgt werden. Idefics läuft stattdessen über Hugging Face Transformers.',
          },
          {
            q: 'Basiert Idefics auf DeepMinds Flamingo?',
            a: 'Idefics wird auf seiner eigenen Modellkarte ausdrücklich als "eine offen zugängliche Nachbildung von Flamingo, einem von DeepMind entwickelten proprietären Vision-Language-Modell" beschrieben. Idefics2 und Idefics3 sind unabhängig architektierte Nachfolger desselben HuggingFace-M4-Teams.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Idefics ist eine tatsächlich nützliche Familie offener Vision-Language-Modelle, und Idefics3 hält sich speziell gut für dokumentenlastige OCR- und Multi-Bild-Denkaufgaben, bei denen sein VRAM-Bedarf von etwa 18-20 GB erschwinglich ist. Es ist jedoch kein direkter Ersatz für leichtere lokale Vision-Modelle: Es benötigt deutlich mehr GPU-Speicher als LLaVA 7B oder MiniCPM-V, hat zum Zeitpunkt dieses Tests keine Ollama- oder llama.cpp-Verpackung, und seine Lizenzsituation unterscheidet sich tatsächlich je nach Generation — Idefics2s sauberer Apache-2.0-Stack ist rechtlich etwas völlig anderes als Idefics3s Verpflichtungen aus der Llama-3.1-Community-Lizenz. Wählen Sie Idefics3 für Dokumentenverständnis und OCR-Qualität, wenn Sie den GPU-Speicher dafür haben; wählen Sie speziell Idefics2, wenn ein reiner Apache-2.0-Stack wichtig ist; und wählen Sie LLaVA, über PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review), oder eines der Modelle im [Ollama-Vision-Modelle-Leitfaden](/de/power-local-llm/ollama-vision-models-review), für leichtere lokale Hardware oder Ollama-basierte Workflows.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Idefics-80B-Modellkarte](https://huggingface.co/HuggingFaceM4/idefics-80b) — Flamingo-Nachbildungsaussage, Lizenzstruktur, Modellgrößen.',
          '[Idefics2-8b-Modellkarte](https://huggingface.co/HuggingFaceM4/idefics2-8b) — Basismodelle, Apache-2.0-Lizenz, dokumentierter VRAM-Bereich.',
          '[Idefics3-8B-Llama3-Modellkarte](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — Basismodell, Lizenz-Tag, Veröffentlichungsdetails.',
          '[Idefics3-Transformers-Dokumentation](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — Nutzungsbeispiel, minimale Transformers-Version.',
          '[Meta-Llama-3.1-Community-Lizenz](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — Lizenzbedingungen, die von Idefics3s Sprachbasis geerbt werden.',
          '[Ollama-GitHub-Issue #2183](https://github.com/ollama/ollama/issues/2183) und [Issue #3677](https://github.com/ollama/ollama/issues/3677) — offene Feature-Anfragen, die bestätigen, dass Idefics derzeit nicht in Ollamas Bibliothek verpackt ist.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LLaVA-Test (2026)](/de/power-local-llm/llava-review) — ein vergleichbares offenes Vision-Language-Modell mit breiterer Tool-Unterstützung.',
          '[Ollama-Vision-Modelle (2026)](/de/power-local-llm/ollama-vision-models-review) — welche Vision-Modelle heute tatsächlich über Ollama abrufbar sind.',
          '[Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama-Multimodal-Setup](/de/power-local-llm/local-vision-models-llava-ollama-2026) — ein breiterer, aufgabenbezogener Vergleich aktueller lokaler Vision-Modelle.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Idefics-Test (2026): HuggingFace\'s offene Vision-Language-Modelle, ehrlich bewertet',
      description:
        'Idefics-Test 2026: HuggingFace\'s offene Vision-Language-Modellfamilie. Idefics vs Idefics2 vs Idefics3 ehrlich verglichen — Lizenznuancen, echte VRAM-Anforderungen und welche Version heute zu nutzen ist.',
      url: 'https://promptquorum.com/de/power-local-llm/idefics-review',
      inLanguage: 'de',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler und Forscher, die offene Vision-Language-Modelle bewerten' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Idefics-Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/idefics-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-fr.webp',
    title: 'Avis sur Idefics (2026) : les modèles vision-langage ouverts de HuggingFace, évalués honnêtement',
    seoTitle: 'Avis Idefics 2026 : Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics est une famille de modèles vision-langage ouverts créée par l\'équipe M4 de HuggingFace, explicitement conçue comme une reproduction ouverte de Flamingo de DeepMind. La famille compte trois générations — l\'Idefics original, Idefics2 et Idefics3 — et elles ne sont pas interchangeables : elles utilisent des modèles de langage de base différents, des licences différentes en pratique, et des exigences matérielles très différentes. Cet avis couvre l\'histoire réelle, la version à utiliser réellement aujourd\'hui, des chiffres de VRAM honnêtes, et les cas où Idefics ne convient pas, notamment pour les configurations locales à ressources limitées. Pour un modèle vision-langage ouvert comparable avec une base d\'utilisateurs plus large, voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum ; pour exécuter des modèles de vision spécifiquement via Ollama (Idefics n\'y est pas actuellement packagé), voir le [guide des modèles de vision Ollama](/fr/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'Avis Idefics 2026 : la famille de modèles vision-langage ouverts de HuggingFace. Idefics vs Idefics2 vs Idefics3 comparés honnêtement — nuances de licence, exigences réelles en VRAM, et quelle version utiliser aujourd\'hui.',
    twitterDescription:
      'Avis Idefics 2026 : la famille de modèles vision-langage ouverts de HuggingFace M4, une reproduction explicite de Flamingo de DeepMind. Idefics vs Idefics2 vs Idefics3 — nuances de licence, chiffres VRAM honnêtes, et lequel utiliser réellement.',
    audience:
      'Développeurs et chercheurs évaluant des modèles vision-langage ouverts qui souhaitent une comparaison honnête des trois générations d\'Idefics, y compris les compromis de licence et de matériel, plutôt que des affirmations marketing.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'avis idefics',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'licence idefics',
      'idefics exigences vram',
      'modèle vision langage huggingface',
      'idefics vs llava',
      'reproduction ouverte flamingo',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics est une famille de modèles vision-langage ouverts de l\'équipe M4 de HuggingFace, conçue comme une reproduction ouverte explicite de Flamingo de DeepMind.** Il existe trois générations : l\'Idefics original (9B/80B, 2023), Idefics2 (8B, avril 2024) et Idefics3 (8B, août 2024). Pour une utilisation réelle aujourd\'hui, Idefics3 est la recommandation actuelle pour la plupart des tâches — il améliore substantiellement l\'OCR, la compréhension de documents et le raisonnement visuel par rapport à Idefics2, lui-même "10 fois plus petit" que l\'Idefics original à performance comparable. La licence est nuancée : le socle Mistral-7B-v0.1 d\'Idefics2 maintient l\'ensemble de la pile sous Apache-2.0, tandis que le socle Llama-3.1-8B-Instruct d\'Idefics3 comporte, en plus de l\'étiquette Apache-2.0 du dépôt du modèle, les conditions de la licence communautaire Llama 3.1 de Meta. Idefics n\'est actuellement pas packagé dans la [bibliothèque d\'Ollama](https://ollama.com/library) — la conversion GGUF présente des problèmes de compatibilité ouverts au moment de cet avis. Pour un VLM ouvert comparable avec un support d\'outils plus large, voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce qu\'Idefics et quelle version devrais-je réellement utiliser — Idefics, Idefics2 ou Idefics3 ?',
        answer:
          'Idefics est la famille de modèles vision-langage ouverts de HuggingFace M4, conçue explicitement comme une reproduction ouverte de Flamingo de DeepMind. Utilisez Idefics3 (8B, sorti le 22 août 2024) pour la plupart des tâches aujourd\'hui — c\'est la génération actuelle avec le meilleur OCR, la meilleure compréhension de documents et le meilleur raisonnement visuel des trois. Idefics2 (8B, avril 2024) reste pertinent si une licence purement Apache-2.0 sans conditions dérivées de Llama compte pour votre cas d\'usage, car son socle est Mistral-7B-v0.1 plutôt que Llama 3.1. L\'Idefics original (9B/80B, 2023) est largement dépassé — il est 10 fois plus volumineux qu\'Idefics2 à performance comparable et porte une restriction de licence réservée à la recherche héritée de la publication originale de LLaMA. Aucun des trois n\'est actuellement packagé dans la bibliothèque d\'Ollama.',
        bullets: [
          'Trois générations existent : Idefics (2023, 9B/80B), Idefics2 (avril 2024, 8B), Idefics3 (août 2024, 8B) — vérifiées sur leurs fiches de modèle HuggingFace respectives.',
          'Idefics3 est la recommandation actuelle pour la plupart des tâches : meilleur OCR et compréhension de documents des trois.',
          'Nuance de licence : Idefics2 (socle Mistral-7B) est entièrement Apache-2.0 ; Idefics3 (socle Llama-3.1-8B-Instruct) porte les conditions de la licence communautaire Llama 3.1 de Meta en plus de l\'étiquette Apache-2.0 du dépôt.',
          'L\'Idefics original porte une restriction de licence réservée à la recherche issue de son socle LLaMA(1) et est largement dépassé.',
          'VRAM : Idefics2/3 nécessitent environ 18 à 20 Go en float16 avec flash-attention, ou aussi peu que 6 à 7 Go avec une quantification agressive — plus lourd que LLaVA 7B ou MiniCPM-V.',
          'Idefics n\'est actuellement pas packagé dans la bibliothèque d\'Ollama ; des tickets GitHub ouverts suivent les difficultés de conversion GGUF.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : HuggingFace M4 et la reproduction de Flamingo', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3 : ce qui a vraiment changé', anchor: 'versions' },
      { label: 'Nuance de licence : ce n\'est pas simplement Apache-2.0', anchor: 'license' },
      { label: 'Exemple d\'utilisation réel : bibliothèque Transformers', anchor: 'usage-example' },
      { label: 'Exigences en VRAM et matériel', anchor: 'vram-guidance' },
      { label: 'Pour quoi Idefics n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives et concurrents', anchor: 'alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics est la reproduction ouverte de Flamingo de DeepMind par HuggingFace M4, désormais dans sa troisième génération (Idefics3, 8B, août 2024), avec des licences et des besoins en VRAM sensiblement différents selon ses trois versions, et n\'est actuellement pas packagé dans la bibliothèque de modèles d\'Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics est une famille de modèles d\'IA créés par HuggingFace capables de regarder des images et de répondre à des questions à leur sujet, comme LLaVA — cet avis explique laquelle de ses trois versions utiliser réellement, ce qu\'elle coûte en mémoire GPU, et ses limites.',
          },
        ],
        items: [
          'Trois générations existent : Idefics (2023), Idefics2 (avril 2024), Idefics3 (août 2024) — chacune un modèle distinct, pas une simple mise à jour.',
          'Idefics3 est la recommandation actuelle pour la plupart des tâches ; il améliore substantiellement l\'OCR et la compréhension de documents par rapport à Idefics2.',
          'La licence est nuancée selon les générations : l\'Idefics original a une restriction réservée à la recherche ; Idefics2 est entièrement Apache-2.0 (socle Mistral-7B) ; Idefics3 porte les conditions de la licence communautaire Llama 3.1 en plus de son étiquette Apache-2.0 (socle Llama-3.1-8B-Instruct).',
          'VRAM : environ 18-20 Go en float16 pour Idefics2/3, ou 6-7 Go avec une quantification agressive — plus lourd que LLaVA 7B ou MiniCPM-V.',
          'Non packagé dans la bibliothèque d\'Ollama au moment de cet avis ; des tickets GitHub ouverts suivent les difficultés de conversion GGUF.',
          'Le mieux adapté : tâches OCR intensives en documents et raisonnement multi-images avec suffisamment de mémoire GPU, pas les configurations locales à ressources limitées ou en temps réel.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum a vérifié ces faits directement sur les fiches de modèle HuggingFace d\'idefics-80b, idefics2-8b et Idefics3-8B-Llama3, ainsi que sur la bibliothèque d\'Ollama et son suivi de tickets GitHub — voir la section Sources pour les liens exacts.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : HuggingFace M4 et la reproduction de Flamingo',
        content: [
          '**La fiche de modèle de l\'[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) original indique explicitement qu\'il s\'agit d\'"une reproduction en accès ouvert de Flamingo, un modèle vision-langage propriétaire développé par DeepMind."** Il a été publié par l\'équipe M4 de HuggingFace en 2023 en deux tailles, 9B et 80B paramètres, combinant un encodeur visuel avec un socle de modèle de langage LLaMA(1).',
          '**L\'Idefics original porte une licence mixte, pas une seule licence permissive.** Son encodeur visuel et les paramètres de connexion nouvellement entraînés sont publiés sous MIT, mais le socle de modèle de langage LLaMA(1) exige le respect de la licence originale de Meta, réservée à la recherche et non commerciale, pour LLaMA. Cela rend l\'Idefics original inadapté à un usage commercial dans la plupart des cas, indépendamment de l\'étiquette MIT sur certaines parties de la pile.',
          '**Idefics2 (8B), sorti autour d\'avril 2024**, a remplacé le socle LLaMA(1) par [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) associé à un encodeur visuel [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384). Les deux modèles parents étant Apache-2.0, la [fiche de modèle](https://huggingface.co/HuggingFaceM4/idefics2-8b) d\'Idefics2 indique que le modèle complet est Apache-2.0 — résolvant le problème de licence de l\'Idefics original. HuggingFace crédite lui-même Idefics2 d\'égaler la performance d\'Idefics-80B pour une taille environ 10 fois plus petite, avec un OCR et une compréhension de documents nettement meilleurs.',
          '**Idefics3 (8B), sorti le 22 août 2024**, a conservé l\'encodeur visuel SigLIP mais a changé le socle de langage pour [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). Sa propre [fiche de modèle](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) démontre une amélioration substantielle par rapport à Idefics2, en particulier pour la compréhension de documents, l\'OCR et le raisonnement visuel. Il a été intégré à Hugging Face Transformers dans la version 4.46.',
        ],
        faqs: [
          {
            q: 'Idefics est-il une reproduction de Flamingo de DeepMind ?',
            a: 'Oui. La fiche de modèle de l\'Idefics original le décrit explicitement comme "une reproduction en accès ouvert de Flamingo, un modèle vision-langage propriétaire développé par DeepMind." Idefics2 et Idefics3 sont des générations ultérieures de HuggingFace M4, architecturées indépendamment mais issues de cette même filiation.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3 : ce qui a vraiment changé',
        content: [
          'Les trois générations sont des modèles distincts avec des architectures de base différentes — pas un seul modèle avec des mises à jour de version incrémentales. Voici ce qui diffère réellement, vérifié sur la fiche HuggingFace propre à chaque modèle.',
        ],
        itemHeadings: true,
        columns: ['Version', 'Sortie', 'Socle', 'Remarques'],
        rows: [
          {
            'Version': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'Sortie': '2023',
            'Socle': 'LLaMA(1) + encodeur visuel maison',
            'Remarques': 'Restriction de licence réservée à la recherche héritée de LLaMA(1) ; largement dépassé',
          },
          {
            'Version': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'Sortie': 'Avril 2024',
            'Socle': 'Mistral-7B-v0.1 + SigLIP',
            'Remarques': 'Entièrement Apache-2.0 ; égale Idefics-80B pour une taille 10 fois plus petite',
          },
          {
            'Version': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'Sortie': '22 août 2024',
            'Socle': 'Llama-3.1-8B-Instruct + SigLIP',
            'Remarques': 'Meilleur OCR/compréhension de documents des trois ; conditions de licence Llama 3.1 applicables',
          },
        ],
        note: 'PromptQuorum n\'a trouvé aucun "Idefics4" publiquement confirmé au moment de cet avis. Idefics3 est la génération la plus récente et la recommandation actuelle pour la plupart des tâches.',
      },
      license: {
        id: 'license',
        title: 'Nuance de licence : ce n\'est pas simplement Apache-2.0',
        content: [
          'Le répertoire de PromptQuorum étiquette la licence d\'Idefics comme "Apache 2.0" — c\'est exact pour le dépôt et le code du modèle, mais incomplet pour la situation de licence pratique, un peu comme la licence de code Apache-2.0 de LLaVA ne s\'étend pas automatiquement à chaque checkpoint de modèle de base.',
          '**Idefics2 est le cas le plus clair :** à la fois son socle de langage Mistral-7B-v0.1 et son encodeur visuel SigLIP sont Apache-2.0, donc l\'ensemble de la pile du modèle est réellement Apache-2.0, sans conditions supplémentaires.',
          '**Idefics3 est plus nuancé.** Son propre dépôt HuggingFace est étiqueté Apache-2.0, mais son socle de langage, Meta-Llama-3.1-8B-Instruct, est publié sous la licence communautaire Llama 3.1 de Meta — qui inclut une politique d\'usage acceptable et une clause exigeant une licence distincte de Meta si un produit en aval dépasse 700 millions d\'utilisateurs actifs mensuels. Quiconque déploie Idefics3 commercialement à grande échelle devrait lire directement les conditions de licence Llama 3.1 de Meta, pas seulement l\'étiquette Apache-2.0 du dépôt Idefics3.',
          '**L\'Idefics original est le plus restrictif.** Son socle LLaMA(1) porte la licence originale de Meta, réservée à la recherche et non commerciale, ce qui rend l\'usage commercial du modèle complet 9B/80B juridiquement incertain au mieux et impossible au pire — même si l\'encodeur visuel et les poids de connexion sont sous licence MIT séparée.',
        ],
        faqs: [
          {
            q: 'Idefics est-il gratuit pour un usage commercial ?',
            a: 'Cela dépend de la génération. Idefics2 est entièrement Apache-2.0 sans restriction supplémentaire. Le dépôt d\'Idefics3 est Apache-2.0, mais son socle Llama-3.1-8B-Instruct porte les conditions de la licence communautaire Llama 3.1 de Meta, y compris une obligation de licence distincte au-delà de 700 millions d\'utilisateurs actifs mensuels. L\'Idefics original porte une restriction réservée à la recherche, non commerciale, issue de son socle LLaMA(1).',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'Exemple d\'utilisation réel : bibliothèque Transformers',
        content: [
          'Idefics3 s\'utilise via les classes `AutoModelForVision2Seq` et `AutoProcessor` de Hugging Face Transformers, documentées dans la [documentation du modèle Idefics3 de Transformers](https://huggingface.co/docs/transformers/en/model_doc/idefics3). La version 4.46 ou ultérieure de Transformers est requise.',
        ],
        codeBlock: `# Nécessite transformers >= 4.46 (selon la documentation du modèle Idefics3 de Hugging Face)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'Cet exemple reprend le schéma documenté sur la propre fiche de modèle HuggingFace d\'Idefics3 et dans la documentation Idefics3 de Transformers — vérifiez-le par rapport à la version actuelle de ces pages avant de scripter une intégration en production, car l\'API Transformers peut évoluer entre les versions.',
        items: [
          '**Il n\'existe aujourd\'hui aucun chemin Ollama ou llama.cpp.** Idefics fonctionne via Transformers (ou des serveurs d\'inférence compatibles comme Text Generation Inference), pas via des exécuteurs basés sur GGUF.',
          '**Réduire le paramètre de résolution d\'image peut diminuer l\'usage de mémoire GPU.** Les fiches de modèle d\'Idefics2/3 documentent la réduction du nombre de sous-parcelles d\'image traitées (appelé `N` dans la documentation d\'Idefics3) comme moyen d\'échanger un peu de précision contre moins de VRAM.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Exigences en VRAM et matériel',
        content: [
          'Idefics2 et Idefics3 sont nettement plus lourds que des checkpoints LLaVA ou MiniCPM-V de taille comparable, en grande partie à cause de la façon dont ils traitent la résolution d\'image. Ces chiffres proviennent directement de la propre fiche de modèle d\'Idefics2, qui documente explicitement sa plage de VRAM ; Idefics3 (même nombre de 8B paramètres et même encodeur visuel) devrait être similaire, bien que PromptQuorum n\'ait pas trouvé de tableau VRAM publié aussi détaillé spécifiquement pour Idefics3.',
        ],
        columns: ['Configuration', 'VRAM approx.', 'Remarques'],
        rows: [
          { 'Configuration': 'float16 + flash-attention', 'VRAM approx.': '~18-20 Go', 'Remarques': 'Documenté sur la fiche de modèle d\'Idefics2 comme configuration standard' },
          { 'Configuration': 'Sans optimisations', 'VRAM approx.': 'Jusqu\'à ~55 Go au pic', 'Remarques': 'Borne supérieure de la fiche de modèle d\'Idefics2 pour une inférence non optimisée' },
          { 'Configuration': 'Quantification agressive', 'VRAM approx.': '~6-7 Go', 'Remarques': 'Borne inférieure documentée sur la fiche de modèle d\'Idefics2 ; attendez-vous à un compromis de précision' },
          { 'Configuration': 'LLaVA 7B (à titre de comparaison)', 'VRAM approx.': '~6-8 Go', 'Remarques': 'Voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a pas réalisé ses propres benchmarks matériels pour cet article ; ces chiffres proviennent de la fiche de modèle publiée d\'Idefics2. Idefics est réellement plus lourd que LLaVA 7B ou MiniCPM-V à niveaux de capacité comparables — soyez honnête avec vous-même sur la VRAM disponible avant de le choisir pour un déploiement à ressources limitées.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi Idefics n\'est pas adapté',
        content: [
          'Idefics3 est un modèle vision-langage ouvert compétent, mais c\'est le mauvais choix dans les situations suivantes :',
        ],
        items: [
          '**Configurations locales à ressources limitées.** Avec environ 18-20 Go de VRAM dans sa configuration standard float16, Idefics2/3 nécessitent nettement plus de mémoire GPU que LLaVA 7B (~6-8 Go) ou MiniCPM-V (~5,5 Go). Si votre budget matériel est un seul GPU grand public avec 8 Go de VRAM ou moins, Idefics n\'est pas une option réaliste sans quantification agressive et un compromis de précision accepté.',
          '**Applications en temps réel ou à faible latence.** Un modèle vision-langage de 8B paramètres qui traite plusieurs sous-parcelles d\'image par entrée n\'est pas conçu pour le temps de réponse le plus rapide possible. Si la latence est la priorité, un modèle plus petit comme Moondream (1,8B) répondra plus vite, avec une capacité réduite.',
          '**Un workflow direct Ollama ou llama.cpp.** Idefics n\'est actuellement pas packagé dans la bibliothèque d\'Ollama, et la conversion GGUF présente des problèmes de compatibilité ouverts et non résolus suivis sur le propre GitHub d\'Ollama. Si votre workflow dépend spécifiquement d\'Ollama, voir le [guide des modèles de vision Ollama](/fr/power-local-llm/ollama-vision-models-review) de PromptQuorum pour les modèles réellement téléchargeables aujourd\'hui.',
          '**Supposer une licence unique et uniforme entre les versions.** Traiter "Idefics" comme un seul produit avec une seule licence est une erreur — vérifiez quelle génération vous déployez et lisez les conditions de licence spécifiques de ce modèle, en particulier les obligations de la licence communautaire Llama 3.1 pour Idefics3 à grande échelle.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives et concurrents',
        itemHeadings: true,
        columns: ['Outil', 'Meilleur usage', 'Licence'],
        rows: [
          {
            'Outil': '[LLaVA](/fr/power-local-llm/llava-review)',
            'Meilleur usage': 'Support d\'outils plus large, y compris le packaging Ollama et llama.cpp ; empreinte VRAM plus légère à 7B',
            'Licence': 'Apache-2.0 (code) ; dépend du modèle de base pour les checkpoints',
          },
          {
            'Outil': '[Modèles de vision d\'Ollama](/fr/power-local-llm/ollama-vision-models-review)',
            'Meilleur usage': 'Configuration locale la plus simple via `ollama pull`/`ollama run` ; Idefics n\'en fait pas partie au moment de cet avis',
            'Licence': 'Varie selon le modèle',
          },
          {
            'Outil': 'MLC Chat',
            'Meilleur usage': 'Déploiement sur appareil multiplateforme ; principalement axé sur le texte au moment de cet avis — vérifiez le support vision actuel avant de vous y fier',
            'Licence': 'Apache-2.0',
          },
          {
            'Outil': 'API VLM cloud (GPT-4o, Claude, Gemini vision)',
            'Meilleur usage': 'Capacité multimodale disponible la plus élevée, aucun matériel ni configuration locale nécessaire',
            'Licence': 'Propriétaire (API payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'Idefics ?',
            a: 'Idefics est une famille de modèles vision-langage ouverts créée par l\'équipe M4 de HuggingFace, explicitement conçue comme une reproduction ouverte de Flamingo de DeepMind. Elle existe en trois générations : l\'Idefics original (2023, 9B/80B), Idefics2 (avril 2024, 8B) et Idefics3 (août 2024, 8B).',
          },
          {
            q: 'Quelle version d\'Idefics devrais-je utiliser — Idefics, Idefics2 ou Idefics3 ?',
            a: 'Idefics3 pour la plupart des tâches aujourd\'hui — il a le meilleur OCR et la meilleure compréhension de documents des trois. Idefics2 reste pertinent si vous avez spécifiquement besoin d\'une pile entièrement Apache-2.0 sans conditions dérivées de Llama. L\'Idefics original est largement dépassé et porte une restriction de licence réservée à la recherche.',
          },
          {
            q: 'Idefics est-il entièrement open source et gratuit pour un usage commercial ?',
            a: 'Cela dépend de la génération. Idefics2 est entièrement Apache-2.0. Le dépôt d\'Idefics3 est étiqueté Apache-2.0, mais son socle Llama-3.1-8B-Instruct porte les conditions de la licence communautaire Llama 3.1 de Meta, y compris des obligations au-delà de 700 millions d\'utilisateurs actifs mensuels. L\'Idefics original a une restriction réservée à la recherche, non commerciale, issue de son socle LLaMA(1).',
          },
          {
            q: 'De combien de VRAM Idefics a-t-il besoin ?',
            a: 'Idefics2 (et probablement Idefics3, avec le même nombre de 8B paramètres et le même encodeur visuel) nécessite environ 18-20 Go de VRAM dans la configuration standard float16 avec flash-attention documentée sur la fiche de modèle d\'Idefics2, ou aussi peu que 6-7 Go avec une quantification agressive et un compromis de précision. C\'est nettement plus lourd que LLaVA 7B ou MiniCPM-V.',
          },
          {
            q: 'Puis-je exécuter Idefics via Ollama ?',
            a: 'Pas au moment de cet avis. Idefics n\'est actuellement pas packagé dans la bibliothèque de modèles d\'Ollama, et la conversion GGUF présente des problèmes de compatibilité ouverts suivis sur le propre dépôt GitHub d\'Ollama. Idefics fonctionne plutôt via Hugging Face Transformers.',
          },
          {
            q: 'Idefics est-il basé sur Flamingo de DeepMind ?',
            a: 'Idefics est explicitement décrit sur sa propre fiche de modèle comme "une reproduction en accès ouvert de Flamingo, un modèle vision-langage propriétaire développé par DeepMind." Idefics2 et Idefics3 sont des successeurs architecturés indépendamment par la même équipe HuggingFace M4.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Idefics est une famille de modèles vision-langage ouverts réellement utile, et Idefics3 en particulier tient bien la route pour les tâches OCR intensives en documents et de raisonnement multi-images, là où son empreinte d\'environ 18-20 Go de VRAM est abordable. Ce n\'est cependant pas un remplacement direct pour des modèles de vision locaux plus légers : il nécessite nettement plus de mémoire GPU que LLaVA 7B ou MiniCPM-V, n\'a aucun packaging Ollama ou llama.cpp au moment de cet avis, et sa situation de licence diffère réellement selon la génération — la pile Apache-2.0 propre d\'Idefics2 est une proposition juridique différente des obligations de la licence communautaire Llama 3.1 d\'Idefics3. Choisissez Idefics3 pour la compréhension de documents et la qualité OCR quand vous disposez de la mémoire GPU nécessaire ; choisissez spécifiquement Idefics2 si une pile purement Apache-2.0 compte ; et choisissez LLaVA, via l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum, ou l\'un des modèles du [guide des modèles de vision Ollama](/fr/power-local-llm/ollama-vision-models-review), pour du matériel local plus léger ou des workflows basés sur Ollama.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Fiche de modèle Idefics-80B](https://huggingface.co/HuggingFaceM4/idefics-80b) — déclaration de reproduction de Flamingo, structure de licence, tailles de modèle.',
          '[Fiche de modèle Idefics2-8b](https://huggingface.co/HuggingFaceM4/idefics2-8b) — modèles de base, licence Apache-2.0, plage de VRAM documentée.',
          '[Fiche de modèle Idefics3-8B-Llama3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — modèle de base, étiquette de licence, détails de sortie.',
          '[Documentation Transformers d\'Idefics3](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — exemple d\'utilisation, version minimale de Transformers.',
          '[Licence communautaire Meta Llama 3.1](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — conditions de licence héritées par le socle de langage d\'Idefics3.',
          '[Ticket GitHub Ollama #2183](https://github.com/ollama/ollama/issues/2183) et [ticket #3677](https://github.com/ollama/ollama/issues/3677) — demandes de fonctionnalité ouvertes confirmant qu\'Idefics n\'est actuellement pas packagé dans la bibliothèque d\'Ollama.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis LLaVA (2026)](/fr/power-local-llm/llava-review) — un modèle vision-langage ouvert comparable avec un support d\'outils plus large.',
          '[Modèles de vision Ollama (2026)](/fr/power-local-llm/ollama-vision-models-review) — quels modèles de vision sont réellement téléchargeables via Ollama aujourd\'hui.',
          '[Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen3-VL & configuration multimodale Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — une comparaison plus large, tâche par tâche, des modèles de vision locaux actuels.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Avis sur Idefics (2026) : les modèles vision-langage ouverts de HuggingFace, évalués honnêtement',
      description:
        'Avis Idefics 2026 : la famille de modèles vision-langage ouverts de HuggingFace. Idefics vs Idefics2 vs Idefics3 comparés honnêtement — nuances de licence, exigences réelles en VRAM, et quelle version utiliser aujourd\'hui.',
      url: 'https://promptquorum.com/fr/power-local-llm/idefics-review',
      inLanguage: 'fr',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs et chercheurs évaluant des modèles vision-langage ouverts' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Avis sur Idefics (2026)', item: 'https://promptquorum.com/fr/power-local-llm/idefics-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-es.webp',
    title: 'Análisis de Idefics (2026): los modelos de visión-lenguaje abiertos de HuggingFace, evaluados con honestidad',
    seoTitle: 'Análisis de Idefics 2026: Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics es una familia de modelos de visión-lenguaje abiertos creada por el equipo M4 de HuggingFace, diseñada explícitamente como una reproducción abierta de Flamingo de DeepMind. La familia tiene tres generaciones — el Idefics original, Idefics2 e Idefics3 — y no son intercambiables: usan modelos de lenguaje base distintos, licencias distintas en la práctica y requisitos de hardware muy diferentes. Este análisis cubre la historia real, qué versión usar realmente hoy, cifras honestas de VRAM y dónde Idefics no encaja bien, especialmente en configuraciones locales con recursos limitados. Para un modelo de visión-lenguaje abierto comparable con una base de usuarios más amplia, consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum; para ejecutar modelos de visión específicamente mediante Ollama (Idefics no está empaquetado en él actualmente), consulta la [guía de modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'Análisis de Idefics 2026: la familia de modelos de visión-lenguaje abiertos de HuggingFace. Idefics vs Idefics2 vs Idefics3 comparados con honestidad — matices de licencia, requisitos reales de VRAM y qué versión usar hoy.',
    twitterDescription:
      'Análisis de Idefics 2026: la familia de modelos de visión-lenguaje abiertos de HuggingFace M4, una reproducción explícita de Flamingo de DeepMind. Idefics vs Idefics2 vs Idefics3 — matices de licencia, cifras honestas de VRAM y cuál usar realmente.',
    audience:
      'Desarrolladores e investigadores que evalúan modelos de visión-lenguaje abiertos y buscan una comparación honesta de las tres generaciones de Idefics, incluidos los compromisos de licencia y hardware, en lugar de afirmaciones de marketing.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'análisis idefics',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'licencia idefics',
      'requisitos vram idefics',
      'modelo visión lenguaje huggingface',
      'idefics vs llava',
      'reproducción abierta flamingo',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics es una familia de modelos de visión-lenguaje abiertos del equipo M4 de HuggingFace, creada como una reproducción abierta explícita de Flamingo de DeepMind.** Existen tres generaciones: el Idefics original (9B/80B, 2023), Idefics2 (8B, abril de 2024) e Idefics3 (8B, agosto de 2024). Para el uso real hoy, Idefics3 es la recomendación actual para la mayoría de las tareas — mejora sustancialmente el OCR, la comprensión de documentos y el razonamiento visual respecto a Idefics2, que a su vez era "10 veces más pequeño" que el Idefics original con un rendimiento comparable. La licencia tiene matices: la base Mistral-7B-v0.1 de Idefics2 mantiene toda la pila bajo Apache-2.0, mientras que la base Llama-3.1-8B-Instruct de Idefics3 conlleva, además de la etiqueta Apache-2.0 del propio repositorio del modelo, las condiciones de la licencia comunitaria Llama 3.1 de Meta. Idefics no está empaquetado actualmente en la [biblioteca de Ollama](https://ollama.com/library) — la conversión a GGUF presenta problemas de compatibilidad abiertos al momento de este análisis. Para un VLM abierto comparable con soporte de herramientas más amplio, consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es Idefics y qué versión debería usar realmente — Idefics, Idefics2 o Idefics3?',
        answer:
          'Idefics es la familia de modelos de visión-lenguaje abiertos de HuggingFace M4, creada explícitamente como una reproducción abierta de Flamingo de DeepMind. Usa Idefics3 (8B, publicado el 22 de agosto de 2024) para la mayoría de las tareas hoy — es la generación actual con el mejor OCR, comprensión de documentos y razonamiento visual de las tres. Idefics2 (8B, abril de 2024) sigue siendo relevante si una licencia puramente Apache-2.0 sin condiciones derivadas de Llama importa para tu caso de uso, ya que su base es Mistral-7B-v0.1 en lugar de Llama 3.1. El Idefics original (9B/80B, 2023) está en gran medida superado — es 10 veces más grande que Idefics2 con un rendimiento comparable y conlleva una restricción de licencia solo para investigación heredada de la publicación original de LLaMA. Ninguno de los tres está empaquetado actualmente en la biblioteca de Ollama.',
        bullets: [
          'Existen tres generaciones: Idefics (2023, 9B/80B), Idefics2 (abril de 2024, 8B), Idefics3 (agosto de 2024, 8B) — verificadas en sus respectivas fichas de modelo de HuggingFace.',
          'Idefics3 es la recomendación actual para la mayoría de las tareas: el mejor OCR y comprensión de documentos de los tres.',
          'Matiz de licencia: Idefics2 (base Mistral-7B) es totalmente Apache-2.0; Idefics3 (base Llama-3.1-8B-Instruct) conlleva las condiciones de la licencia comunitaria Llama 3.1 de Meta además de la etiqueta Apache-2.0 del repositorio.',
          'El Idefics original conlleva una restricción de licencia solo para investigación de su base LLaMA(1) y está en gran medida superado.',
          'VRAM: Idefics2/3 necesitan aproximadamente 18-20 GB en float16 con flash-attention, o tan solo 6-7 GB con cuantización agresiva — más pesado que LLaVA 7B o MiniCPM-V.',
          'Idefics no está empaquetado actualmente en la biblioteca de Ollama; hay tickets abiertos en GitHub que siguen las dificultades de conversión a GGUF.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: HuggingFace M4 y la reproducción de Flamingo', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3: qué cambió realmente', anchor: 'versions' },
      { label: 'Matiz de licencia: no es simplemente Apache-2.0', anchor: 'license' },
      { label: 'Ejemplo de uso real: biblioteca Transformers', anchor: 'usage-example' },
      { label: 'Requisitos de VRAM y hardware', anchor: 'vram-guidance' },
      { label: 'Para qué no es bueno Idefics', anchor: 'limitations' },
      { label: 'Alternativas y competidores', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics es la reproducción abierta de Flamingo de DeepMind de HuggingFace M4, ahora en su tercera generación (Idefics3, 8B, agosto de 2024), con licencias y necesidades de VRAM notablemente distintas entre sus tres versiones, y no está empaquetado actualmente en la biblioteca de modelos de Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics es una familia de modelos de IA creados por HuggingFace que pueden mirar imágenes y responder preguntas sobre ellas, similar a LLaVA — este análisis explica cuál de sus tres versiones usar realmente, cuánto cuesta en memoria de GPU y dónde se queda corto.',
          },
        ],
        items: [
          'Existen tres generaciones: Idefics (2023), Idefics2 (abril de 2024), Idefics3 (agosto de 2024) — cada una un modelo distinto, no una simple actualización.',
          'Idefics3 es la recomendación actual para la mayoría de las tareas; mejora sustancialmente el OCR y la comprensión de documentos respecto a Idefics2.',
          'La licencia tiene matices según la generación: el Idefics original tiene una restricción solo para investigación; Idefics2 es totalmente Apache-2.0 (base Mistral-7B); Idefics3 conlleva las condiciones de la licencia comunitaria Llama 3.1 además de su etiqueta Apache-2.0 (base Llama-3.1-8B-Instruct).',
          'VRAM: aproximadamente 18-20 GB en float16 para Idefics2/3, o 6-7 GB con cuantización agresiva — más pesado que LLaVA 7B o MiniCPM-V.',
          'No está empaquetado en la biblioteca de Ollama al momento de este análisis; hay tickets abiertos en GitHub que siguen las dificultades de conversión a GGUF.',
          'Mejor uso: tareas intensivas en OCR de documentos y razonamiento multi-imagen con memoria de GPU suficiente, no configuraciones locales con recursos limitados o en tiempo real.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum verificó estos datos directamente en las fichas de modelo de HuggingFace de idefics-80b, idefics2-8b e Idefics3-8B-Llama3, y en la biblioteca de Ollama y su seguimiento de tickets en GitHub — consulta la sección Fuentes para los enlaces exactos.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: HuggingFace M4 y la reproducción de Flamingo',
        content: [
          '**La ficha de modelo del [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) original indica explícitamente que es "una reproducción de acceso abierto de Flamingo, un modelo de visión-lenguaje propietario desarrollado por DeepMind."** Fue publicado por el equipo M4 de HuggingFace en 2023 en dos tamaños, 9B y 80B parámetros, combinando un codificador de visión con una base de modelo de lenguaje LLaMA(1).',
          '**El Idefics original conlleva una licencia mixta, no una única licencia permisiva.** Su codificador de visión y los parámetros de conexión recién entrenados se publican bajo MIT, pero la base de modelo de lenguaje LLaMA(1) exige cumplir con la licencia original de Meta, solo para investigación y no comercial, para LLaMA. Esto hace que el Idefics original no sea apto para uso comercial en la mayoría de los casos, independientemente de la etiqueta MIT en partes de la pila.',
          '**Idefics2 (8B), publicado alrededor de abril de 2024**, reemplazó la base LLaMA(1) por [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) y la combinó con un codificador de visión [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384). Como ambos modelos base son Apache-2.0, la propia [ficha de modelo](https://huggingface.co/HuggingFaceM4/idefics2-8b) de Idefics2 indica que el modelo completo es Apache-2.0 — resolviendo el problema de licencia del Idefics original. La propia HuggingFace atribuye a Idefics2 igualar el rendimiento de Idefics-80B con un tamaño aproximadamente 10 veces menor, con un OCR y una comprensión de documentos notablemente mejores.',
          '**Idefics3 (8B), publicado el 22 de agosto de 2024**, mantuvo el codificador de visión SigLIP pero cambió la base de lenguaje a [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). Su propia [ficha de modelo](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) demuestra una mejora sustancial respecto a Idefics2, particularmente en comprensión de documentos, OCR y razonamiento visual. Se añadió a Hugging Face Transformers en la versión 4.46.',
        ],
        faqs: [
          {
            q: '¿Idefics es una reproducción de Flamingo de DeepMind?',
            a: 'Sí. La ficha de modelo del Idefics original lo describe explícitamente como "una reproducción de acceso abierto de Flamingo, un modelo de visión-lenguaje propietario desarrollado por DeepMind." Idefics2 e Idefics3 son generaciones posteriores de HuggingFace M4, arquitectónicamente independientes pero dentro de la misma línea de origen.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3: qué cambió realmente',
        content: [
          'Las tres generaciones son modelos distintos con arquitecturas base diferentes — no un único modelo con incrementos de versión menores. Esto es lo que realmente difiere, verificado en la ficha de HuggingFace propia de cada modelo.',
        ],
        itemHeadings: true,
        columns: ['Versión', 'Publicado', 'Base', 'Notas'],
        rows: [
          {
            'Versión': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'Publicado': '2023',
            'Base': 'LLaMA(1) + codificador de visión propio',
            'Notas': 'Restricción de licencia solo para investigación heredada de LLaMA(1); en gran medida superado',
          },
          {
            'Versión': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'Publicado': 'Abril de 2024',
            'Base': 'Mistral-7B-v0.1 + SigLIP',
            'Notas': 'Totalmente Apache-2.0; iguala a Idefics-80B con un tamaño 10 veces menor',
          },
          {
            'Versión': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'Publicado': '22 de agosto de 2024',
            'Base': 'Llama-3.1-8B-Instruct + SigLIP',
            'Notas': 'Mejor OCR/comprensión de documentos de los tres; se aplican las condiciones de licencia de Llama 3.1',
          },
        ],
        note: 'PromptQuorum no encontró ningún "Idefics4" confirmado públicamente al momento de este análisis. Idefics3 es la generación más reciente y la recomendación actual para la mayoría de las tareas.',
      },
      license: {
        id: 'license',
        title: 'Matiz de licencia: no es simplemente Apache-2.0',
        content: [
          'El listado de directorio de PromptQuorum para Idefics etiqueta su licencia como "Apache 2.0" — esto es correcto para el repositorio y el código del modelo, pero incompleto para la situación de licencia práctica, de forma similar a cómo la licencia de código Apache-2.0 de LLaVA no se extiende automáticamente a cada checkpoint del modelo base.',
          '**Idefics2 es el caso más claro:** tanto su base de lenguaje Mistral-7B-v0.1 como su codificador de visión SigLIP son Apache-2.0, por lo que toda la pila del modelo es realmente Apache-2.0, sin condiciones adicionales.',
          '**Idefics3 tiene más matices.** Su propio repositorio de HuggingFace está etiquetado como Apache-2.0, pero su base de lenguaje, Meta-Llama-3.1-8B-Instruct, se publica bajo la licencia comunitaria Llama 3.1 de Meta — que incluye una política de uso aceptable y una cláusula que exige una licencia separada de Meta si un producto derivado supera los 700 millones de usuarios activos mensuales. Cualquiera que despliegue Idefics3 comercialmente a gran escala debería leer directamente las condiciones de la licencia Llama 3.1 de Meta, no solo la etiqueta Apache-2.0 del repositorio de Idefics3.',
          '**El Idefics original es el más restrictivo.** Su base LLaMA(1) conlleva la licencia original de Meta, solo para investigación y no comercial, lo que hace que el uso comercial del modelo completo de 9B/80B sea legalmente incierto en el mejor de los casos e inviable en el peor — aunque el codificador de visión y los pesos de conexión tengan licencia MIT por separado.',
        ],
        faqs: [
          {
            q: '¿Idefics es gratuito para uso comercial?',
            a: 'Depende de la generación. Idefics2 es totalmente Apache-2.0 sin restricciones adicionales. El repositorio de Idefics3 está etiquetado como Apache-2.0, pero su base Llama-3.1-8B-Instruct conlleva las condiciones de la licencia comunitaria Llama 3.1 de Meta, incluida una obligación de licencia separada por encima de los 700 millones de usuarios activos mensuales. El Idefics original conlleva una restricción solo para investigación, no comercial, de su base LLaMA(1).',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'Ejemplo de uso real: biblioteca Transformers',
        content: [
          'Idefics3 se usa mediante las clases `AutoModelForVision2Seq` y `AutoProcessor` de Hugging Face Transformers, documentadas en la [documentación del modelo Idefics3 de Transformers](https://huggingface.co/docs/transformers/en/model_doc/idefics3). Se requiere la versión 4.46 o posterior de Transformers.',
        ],
        codeBlock: `# Requiere transformers >= 4.46 (según la documentación del modelo Idefics3 de Hugging Face)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'Este ejemplo refleja el patrón documentado en la propia ficha de modelo de HuggingFace de Idefics3 y en la documentación de Idefics3 de Transformers — verifícalo con la versión actual de esas páginas antes de programar una integración de producción, ya que la API de Transformers puede evolucionar entre versiones.',
        items: [
          '**Hoy no existe una ruta de Ollama o llama.cpp.** Idefics funciona mediante Transformers (o servidores de inferencia compatibles como Text Generation Inference), no mediante ejecutores basados en GGUF.',
          '**Reducir el parámetro de resolución de imagen puede disminuir el uso de memoria de GPU.** Las fichas de modelo de Idefics2/3 documentan reducir el número de subparches de imagen procesados (denominado `N` en la documentación de Idefics3) como una forma de intercambiar algo de precisión por menos VRAM.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Requisitos de VRAM y hardware',
        content: [
          'Idefics2 e Idefics3 son notablemente más pesados que checkpoints de LLaVA o MiniCPM-V de tamaño comparable, en gran parte por cómo procesan la resolución de imagen. Estas cifras provienen directamente de la propia ficha de modelo de Idefics2, que documenta explícitamente su rango de VRAM; se espera que Idefics3 (con el mismo número de 8B parámetros y el mismo codificador de visión) sea similar, aunque PromptQuorum no encontró una tabla de VRAM publicada con el mismo nivel de detalle específicamente para Idefics3.',
        ],
        columns: ['Configuración', 'VRAM aprox.', 'Notas'],
        rows: [
          { 'Configuración': 'float16 + flash-attention', 'VRAM aprox.': '~18-20 GB', 'Notas': 'Documentado en la ficha de modelo de Idefics2 como configuración estándar' },
          { 'Configuración': 'Sin optimizaciones', 'VRAM aprox.': 'Hasta ~55 GB en pico', 'Notas': 'Límite superior de la ficha de modelo de Idefics2 para inferencia sin optimizar' },
          { 'Configuración': 'Cuantización agresiva', 'VRAM aprox.': '~6-7 GB', 'Notas': 'Límite inferior documentado en la ficha de modelo de Idefics2; espera un compromiso de precisión' },
          { 'Configuración': 'LLaVA 7B (para comparar)', 'VRAM aprox.': '~6-8 GB', 'Notas': 'Consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no realizó sus propias pruebas de hardware para este artículo; estas cifras provienen de la ficha de modelo publicada de Idefics2. Idefics es realmente más pesado que LLaVA 7B o MiniCPM-V en niveles de capacidad comparables — sé honesto contigo mismo sobre la VRAM disponible antes de elegirlo para un despliegue con recursos limitados.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no es bueno Idefics',
        content: [
          'Idefics3 es un modelo de visión-lenguaje abierto competente, pero es la elección equivocada en las siguientes situaciones:',
        ],
        items: [
          '**Configuraciones locales con recursos limitados.** Con aproximadamente 18-20 GB de VRAM en su configuración estándar float16, Idefics2/3 necesitan notablemente más memoria de GPU que LLaVA 7B (~6-8 GB) o MiniCPM-V (~5,5 GB). Si tu presupuesto de hardware es una sola GPU de consumo con 8 GB de VRAM o menos, Idefics no es una opción realista sin cuantización agresiva y un compromiso de precisión aceptado.',
          '**Aplicaciones en tiempo real o de baja latencia.** Un modelo de visión-lenguaje de 8B parámetros que procesa múltiples subparches de imagen por entrada no está pensado para el tiempo de respuesta más rápido posible. Si la latencia es la prioridad, un modelo más pequeño como Moondream (1,8B) responderá más rápido, con capacidad reducida.',
          '**Un flujo de trabajo directo con Ollama o llama.cpp.** Idefics no está empaquetado actualmente en la biblioteca de Ollama, y la conversión a GGUF presenta problemas de compatibilidad abiertos y sin resolver en el propio GitHub de Ollama. Si tu flujo de trabajo depende específicamente de Ollama, consulta la [guía de modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review) de PromptQuorum para modelos que realmente se pueden descargar hoy.',
          '**Asumir una licencia única y uniforme entre versiones.** Tratar "Idefics" como un solo producto con una sola licencia es un error — verifica qué generación estás desplegando y lee las condiciones de licencia específicas de ese modelo, en particular las obligaciones de la licencia comunitaria Llama 3.1 para Idefics3 a gran escala.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas y competidores',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor uso', 'Licencia'],
        rows: [
          {
            'Herramienta': '[LLaVA](/es/power-local-llm/llava-review)',
            'Mejor uso': 'Soporte de herramientas más amplio, incluido el empaquetado para Ollama y llama.cpp; huella de VRAM más ligera con 7B',
            'Licencia': 'Apache-2.0 (código); depende del modelo base para los checkpoints',
          },
          {
            'Herramienta': '[Modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review)',
            'Mejor uso': 'Configuración local más sencilla mediante `ollama pull`/`ollama run`; Idefics no está entre ellos al momento de este análisis',
            'Licencia': 'Varía según el modelo',
          },
          {
            'Herramienta': 'MLC Chat',
            'Mejor uso': 'Implementación en el dispositivo multiplataforma; centrada principalmente en texto al momento de este análisis — verifica el soporte de visión actual antes de depender de él',
            'Licencia': 'Apache-2.0',
          },
          {
            'Herramienta': 'APIs de VLM en la nube (GPT-4o, Claude, visión de Gemini)',
            'Mejor uso': 'La mayor capacidad multimodal disponible, sin necesidad de hardware ni configuración local',
            'Licencia': 'Propietaria (API de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Idefics?',
            a: 'Idefics es una familia de modelos de visión-lenguaje abiertos creada por el equipo M4 de HuggingFace, diseñada explícitamente como una reproducción abierta de Flamingo de DeepMind. Existe en tres generaciones: el Idefics original (2023, 9B/80B), Idefics2 (abril de 2024, 8B) e Idefics3 (agosto de 2024, 8B).',
          },
          {
            q: '¿Qué versión de Idefics debería usar — Idefics, Idefics2 o Idefics3?',
            a: 'Idefics3 para la mayoría de las tareas hoy — tiene el mejor OCR y comprensión de documentos de los tres. Idefics2 sigue siendo relevante si necesitas específicamente una pila totalmente Apache-2.0 sin condiciones derivadas de Llama. El Idefics original está en gran medida superado y conlleva una restricción de licencia solo para investigación.',
          },
          {
            q: '¿Idefics es completamente de código abierto y gratuito para uso comercial?',
            a: 'Depende de la generación. Idefics2 es totalmente Apache-2.0. El repositorio de Idefics3 está etiquetado como Apache-2.0, pero su base Llama-3.1-8B-Instruct conlleva las condiciones de la licencia comunitaria Llama 3.1 de Meta, incluidas obligaciones por encima de los 700 millones de usuarios activos mensuales. El Idefics original tiene una restricción solo para investigación, no comercial, de su base LLaMA(1).',
          },
          {
            q: '¿Cuánta VRAM necesita Idefics?',
            a: 'Idefics2 (y probablemente Idefics3, con el mismo número de 8B parámetros y el mismo codificador de visión) necesita aproximadamente 18-20 GB de VRAM en la configuración estándar float16 con flash-attention documentada en la ficha de modelo de Idefics2, o tan solo 6-7 GB con cuantización agresiva y un compromiso de precisión. Esto es notablemente más pesado que LLaVA 7B o MiniCPM-V.',
          },
          {
            q: '¿Puedo ejecutar Idefics mediante Ollama?',
            a: 'No al momento de este análisis. Idefics no está empaquetado actualmente en la biblioteca de modelos de Ollama, y la conversión a GGUF presenta problemas de compatibilidad abiertos en el propio repositorio de GitHub de Ollama. Idefics funciona en su lugar mediante Hugging Face Transformers.',
          },
          {
            q: '¿Idefics está basado en Flamingo de DeepMind?',
            a: 'Idefics se describe explícitamente en su propia ficha de modelo como "una reproducción de acceso abierto de Flamingo, un modelo de visión-lenguaje propietario desarrollado por DeepMind." Idefics2 e Idefics3 son sucesores arquitectónicamente independientes creados por el mismo equipo de HuggingFace M4.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Idefics es una familia de modelos de visión-lenguaje abiertos genuinamente útil, e Idefics3 en particular funciona bien para tareas intensivas en OCR de documentos y razonamiento multi-imagen donde su huella de aproximadamente 18-20 GB de VRAM es asequible. Sin embargo, no es un reemplazo directo para modelos de visión locales más ligeros: necesita notablemente más memoria de GPU que LLaVA 7B o MiniCPM-V, no tiene empaquetado para Ollama ni llama.cpp al momento de este análisis, y su situación de licencia difiere realmente según la generación — la pila Apache-2.0 limpia de Idefics2 es una propuesta legal distinta de las obligaciones de la licencia comunitaria Llama 3.1 de Idefics3. Elige Idefics3 para comprensión de documentos y calidad de OCR cuando dispongas de la memoria de GPU necesaria; elige específicamente Idefics2 si una pila puramente Apache-2.0 importa; y elige LLaVA, mediante el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum, o uno de los modelos de la [guía de modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review), para hardware local más ligero o flujos de trabajo basados en Ollama.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ficha de modelo Idefics-80B](https://huggingface.co/HuggingFaceM4/idefics-80b) — declaración de reproducción de Flamingo, estructura de licencia, tamaños de modelo.',
          '[Ficha de modelo Idefics2-8b](https://huggingface.co/HuggingFaceM4/idefics2-8b) — modelos base, licencia Apache-2.0, rango de VRAM documentado.',
          '[Ficha de modelo Idefics3-8B-Llama3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — modelo base, etiqueta de licencia, detalles de publicación.',
          '[Documentación de Transformers de Idefics3](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — ejemplo de uso, versión mínima de Transformers.',
          '[Licencia comunitaria Meta Llama 3.1](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — condiciones de licencia heredadas por la base de lenguaje de Idefics3.',
          '[Ticket de GitHub de Ollama #2183](https://github.com/ollama/ollama/issues/2183) y [ticket #3677](https://github.com/ollama/ollama/issues/3677) — solicitudes de funcionalidad abiertas que confirman que Idefics no está empaquetado actualmente en la biblioteca de Ollama.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de LLaVA (2026)](/es/power-local-llm/llava-review) — un modelo de visión-lenguaje abierto comparable con soporte de herramientas más amplio.',
          '[Modelos de visión de Ollama (2026)](/es/power-local-llm/ollama-vision-models-review) — qué modelos de visión son realmente descargables mediante Ollama hoy.',
          '[Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL y configuración multimodal de Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026) — una comparación más amplia, tarea por tarea, de los modelos de visión locales actuales.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análisis de Idefics (2026): los modelos de visión-lenguaje abiertos de HuggingFace, evaluados con honestidad',
      description:
        'Análisis de Idefics 2026: la familia de modelos de visión-lenguaje abiertos de HuggingFace. Idefics vs Idefics2 vs Idefics3 comparados con honestidad — matices de licencia, requisitos reales de VRAM y qué versión usar hoy.',
      url: 'https://promptquorum.com/es/power-local-llm/idefics-review',
      inLanguage: 'es',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores e investigadores que evalúan modelos de visión-lenguaje abiertos' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Análisis de Idefics (2026)', item: 'https://promptquorum.com/es/power-local-llm/idefics-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-ja.webp',
    title: 'Idefics レビュー(2026):HuggingFaceのオープンなビジョン言語モデルを正直に評価する',
    seoTitle: 'Idefics レビュー2026:Idefics vs Idefics2 vs Idefics3',
    intro:
      'IdeficsはHuggingFaceのM4チームが開発したオープンなビジョン言語モデルのファミリーであり、DeepMindのFlamingoのオープンな再現として明確に設計されている。このファミリーには3世代——オリジナルのIdefics、Idefics2、Idefics3——があり、互換性はない。それぞれ異なるベース言語モデルを使い、実務上のライセンスも異なり、ハードウェア要件も大きく異なる。本レビューでは実際の歴史、今日実際に使うべきバージョン、正直なVRAM数値、そして特にリソースの限られたローカル環境においてIdeficsが向いていない点を扱う。既存ユーザー基盤の大きい比較可能なオープンビジョン言語モデルについてはPromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を、Ollama経由でビジョンモデルを動かす方法(Idefics は現時点でOllama用にパッケージ化されていない)については[Ollamaビジョンモデルガイド](/ja/power-local-llm/ollama-vision-models-review)を参照してほしい。',
    metaDescription:
      'Idefics レビュー2026:HuggingFaceのオープンなビジョン言語モデルファミリー。Idefics vs Idefics2 vs Idefics3を正直に比較——ライセンスの注意点、実際のVRAM要件、今日使うべきバージョン。',
    twitterDescription:
      'Idefics レビュー2026:HuggingFace M4のオープンなビジョン言語モデルファミリー、DeepMindのFlamingoの明確な再現。Idefics vs Idefics2 vs Idefics3——ライセンスの注意点、正直なVRAM数値、実際に使うべきモデル。',
    audience:
      'オープンなビジョン言語モデルを評価している開発者や研究者で、マーケティング上の主張ではなく、ライセンスとハードウェアのトレードオフを含むIdeficsの3世代の正直な比較を求める人。',
    readTime: '11分で読めます',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'idefics レビュー',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'idefics ライセンス',
      'idefics vram 要件',
      'huggingface ビジョン言語モデル',
      'idefics vs llava',
      'flamingo オープン再現',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**IdeficsはHuggingFaceのM4チームによるオープンなビジョン言語モデルのファミリーであり、DeepMindのFlamingoの明確なオープン再現として構築された。** 3世代存在する:オリジナルのIdefics(9B/80B、2023年)、Idefics2(8B、2024年4月)、Idefics3(8B、2024年8月)。今日実際に使うなら、ほとんどのタスクにおいてIdefics3が現在の推奨だ——OCR、文書理解、視覚的推論の点でIdefics2を大幅に上回っており、そのIdefics2自体もオリジナルのIdeficsと同等の性能を保ちながら「10分の1のサイズ」だった。ライセンスには注意が必要だ:Idefics2のMistral-7B-v0.1というベースはスタック全体をApache-2.0に保つが、Idefics3のLlama-3.1-8B-Instructというベースは、モデルリポジトリ自体のApache-2.0タグに加えて、MetaのLlama 3.1コミュニティライセンスの条件も伴う。Ideficsは現時点で[Ollamaのライブラリ](https://ollama.com/library)にはパッケージ化されておらず——GGUF変換には本レビュー時点で未解決の互換性問題がある。より幅広いツール対応を持つ比較可能なオープンVLMについては、PromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を参照してほしい。',
    quickAnswerTop: {
      en: {
        question: 'Ideficsとは何か。実際にはIdefics、Idefics2、Idefics3のどれを使うべきか?',
        answer:
          'IdeficsはHuggingFace M4によるオープンなビジョン言語モデルのファミリーであり、DeepMindのFlamingoの明確なオープン再現として構築された。今日ほとんどのタスクにはIdefics3(8B、2024年8月22日リリース)を使うべきだ——3つの中で最も強力なOCR、文書理解、視覚的推論を持つ現行世代である。Idefics2(8B、2024年4月)は、Llama由来の条件を含まない純粋なApache-2.0ライセンスがユースケース上重要な場合には引き続き有効だ。そのベースがLlama 3.1ではなくMistral-7B-v0.1だからである。オリジナルのIdefics(9B/80B、2023年)は大部分が過去のものとなっている——Idefics2と同等の性能に対して10倍の大きさがあり、オリジナルのLLaMAリリースから受け継いだ研究専用のライセンス制限を伴う。3つのいずれも現時点でOllamaのライブラリにはパッケージ化されていない。',
        bullets: [
          '3世代が存在する:Idefics(2023年、9B/80B)、Idefics2(2024年4月、8B)、Idefics3(2024年8月、8B)——それぞれのHuggingFaceモデルカードで確認済み。',
          'Idefics3は今日ほとんどのタスクに対する現在の推奨:3つの中で最も強力なOCRと文書理解を持つ。',
          'ライセンスの注意点:Idefics2(Mistral-7Bベース)は完全にApache-2.0;Idefics3(Llama-3.1-8B-Instructベース)はリポジトリのApache-2.0タグに加えてMetaのLlama 3.1コミュニティライセンスの条件を伴う。',
          'オリジナルのIdeficsはLLaMA(1)ベースからの研究専用ライセンス制限を伴い、大部分が過去のものとなっている。',
          'VRAM:Idefics2/3はflash-attention付きfloat16で約18〜20GBが必要、または積極的な量子化で6〜7GB程度——LLaVA 7BやMiniCPM-Vより重い。',
          'Ideficsは現時点でOllamaのライブラリにはパッケージ化されていない;GGUF変換の困難さを追跡するGitHubの未解決issueが存在する。',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:HuggingFace M4とFlamingoの再現', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3:実際に何が変わったか', anchor: 'versions' },
      { label: 'ライセンスの注意点:単純なApache-2.0ではない', anchor: 'license' },
      { label: '実際の使用例:Transformersライブラリ', anchor: 'usage-example' },
      { label: 'VRAMとハードウェア要件', anchor: 'vram-guidance' },
      { label: 'Ideficsが向いていない用途', anchor: 'limitations' },
      { label: '代替ツールと競合', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IdeficsはHuggingFace M4によるDeepMindのFlamingoのオープン再現であり、現在は第3世代(Idefics3、8B、2024年8月)に達し、3つのバージョンでライセンスとVRAM要件が大きく異なり、現時点ではOllamaのモデルライブラリにパッケージ化されていない。',
          },
          {
            type: 'plain-terms',
            text: 'IdeficsはHuggingFaceが作った、画像を見てそれについての質問に答えられるAIモデルのファミリーで、LLaVAに似ている——本レビューでは3つのバージョンのうちどれを実際に使うべきか、GPUメモリのコスト、そして不足している点を説明する。',
          },
        ],
        items: [
          '3世代が存在する:Idefics(2023年)、Idefics2(2024年4月)、Idefics3(2024年8月)——それぞれ別個のモデルであり、単純なアップグレードではない。',
          'Idefics3は今日ほとんどのタスクに対する現在の推奨;Idefics2に比べOCRと文書理解を大幅に改善している。',
          '世代によってライセンスの性質が異なる:オリジナルのIdeficsは研究専用の制限を持つ;Idefics2は完全にApache-2.0(Mistral-7Bベース);Idefics3はApache-2.0のリポジトリタグに加えてLlama 3.1コミュニティライセンスの条件を伴う(Llama-3.1-8B-Instructベース)。',
          'VRAM:Idefics2/3はfloat16で約18〜20GB、または積極的な量子化で6〜7GB——LLaVA 7BやMiniCPM-Vより重い。',
          '本レビュー時点でOllamaのライブラリにはパッケージ化されていない;GGUF変換の困難さを追跡するGitHubの未解決issueが存在する。',
          '最も適した用途:十分なGPUメモリがある文書中心のOCRと複数画像の推論タスクであり、リソースの限られた環境やリアルタイム用途のローカルセットアップではない。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはこれらの事実を、idefics-80b、idefics2-8b、Idefics3-8B-Llama3のHuggingFaceモデルカード、およびOllamaのライブラリとGitHubのissueトラッカーに照らして直接確認した——正確なリンクは出典セクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:HuggingFace M4とFlamingoの再現',
        content: [
          '**オリジナルの[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)のモデルカードには、「DeepMindが開発したクローズドソースのビジョン言語モデルであるFlamingoのオープンアクセス再現」であると明確に記載されている。** これは2023年にHuggingFaceのM4チームによって、9Bと80Bという2つのサイズで公開され、ビジョンエンコーダーとLLaMA(1)言語モデルベースを組み合わせたものだ。',
          '**オリジナルのIdeficsは単一の寛容なライセンスではなく、混合ライセンスを伴う。** そのビジョンエンコーダーと新たに学習された接続パラメータはMITの下で公開されているが、LLaMA(1)言語モデルベースは、LLaMAに対するMetaのオリジナルの研究専用・非商用ライセンスの遵守を要求する。これにより、スタックの一部にMITタグが付いているにもかかわらず、オリジナルのIdeficsはほとんどの場合商用利用には適さない。',
          '**2024年4月頃にリリースされたIdefics2(8B)**は、LLaMA(1)ベースを[Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1)に置き換え、[SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384)ビジョンエンコーダーと組み合わせた。両方のベースモデルがApache-2.0であるため、Idefics2自身の[モデルカード](https://huggingface.co/HuggingFaceM4/idefics2-8b)には、モデル全体がApache-2.0であると記載されている——これによりオリジナルのIdeficsのライセンス問題が解決された。HuggingFace自身の説明によれば、Idefics2はIdefics-80Bとほぼ同等の性能を約10分の1のサイズで達成し、OCRと文書理解が大幅に向上している。',
          '**2024年8月22日にリリースされたIdefics3(8B)**は、SigLIPビジョンエンコーダーを維持しつつ、言語ベースを[Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)に切り替えた。その[モデルカード](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)には、特に文書理解、OCR、視覚的推論においてIdefics2を大幅に上回ることが示されている。Hugging Face Transformersのバージョン4.46で追加された。',
        ],
        faqs: [
          {
            q: 'IdeficsはDeepMindのFlamingoの再現なのか?',
            a: 'はい。オリジナルのIdeficsのモデルカードには、「DeepMindが開発したクローズドソースのビジョン言語モデルであるFlamingoのオープンアクセス再現」であると明確に記載されている。Idefics2とIdefics3は、同じ系譜の上で独立してアーキテクチャ設計された、HuggingFace M4によるその後の世代である。',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3:実際に何が変わったか',
        content: [
          '3世代は異なるベースアーキテクチャを持つ別個のモデルであり、段階的にバージョンが上がる単一モデルではない。以下は、各モデル自身のHuggingFaceカードに照らして確認した実際の相違点だ。',
        ],
        itemHeadings: true,
        columns: ['バージョン', 'リリース', 'ベース', '備考'],
        rows: [
          {
            'バージョン': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)(9B/80B)',
            'リリース': '2023年',
            'ベース': 'LLaMA(1) + 独自ビジョンエンコーダー',
            '備考': 'LLaMA(1)由来の研究専用ライセンス制限;大部分が過去のものとなっている',
          },
          {
            'バージョン': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b)(8B)',
            'リリース': '2024年4月',
            'ベース': 'Mistral-7B-v0.1 + SigLIP',
            '備考': '完全にApache-2.0;10分の1のサイズでIdefics-80Bに匹敵',
          },
          {
            'バージョン': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(8B)',
            'リリース': '2024年8月22日',
            'ベース': 'Llama-3.1-8B-Instruct + SigLIP',
            '備考': '3つの中で最良のOCR/文書理解;Llama 3.1のライセンス条件が適用される',
          },
        ],
        note: 'PromptQuorumは本レビュー時点で、公式に確認された「Idefics4」を発見できなかった。Idefics3が最新世代であり、ほとんどのタスクに対する現在の推奨である。',
      },
      license: {
        id: 'license',
        title: 'ライセンスの注意点:単純なApache-2.0ではない',
        content: [
          'PromptQuorumのディレクトリ掲載では、Ideficsのライセンスを「Apache 2.0」としている——これはモデルリポジトリとコードについては正確だが、実務上のライセンス状況としては不完全であり、LLaVAのApache-2.0コードライセンスがすべてのベースモデルチェックポイントに自動的に適用されるわけではないのと似ている。',
          '**Idefics2は最も明快なケースだ。** Mistral-7B-v0.1という言語ベースとSigLIPビジョンエンコーダーの両方がApache-2.0であるため、モデルスタック全体が追加条件なしで真にApache-2.0である。',
          '**Idefics3はより注意が必要だ。** HuggingFaceの自身のリポジトリはApache-2.0とタグ付けされているが、言語ベースであるMeta-Llama-3.1-8B-InstructはMetaのLlama 3.1コミュニティライセンスの下で公開されている——これには許容利用ポリシーと、下流製品が月間アクティブユーザー7億人を超える場合にMetaから別途ライセンスを取得する必要があるという条項が含まれる。Idefics3を大規模に商用展開する者は、Idefics3リポジトリのApache-2.0タグだけでなく、MetaのLlama 3.1のライセンス条項自体を直接読むべきだ。',
          '**オリジナルのIdeficsが最も制限的だ。** そのLLaMA(1)ベースはMetaのオリジナルの研究専用・非商用ライセンスを伴い、これにより9B/80Bのフルモデルの商用利用は、良くて法的に不明確、悪ければ利用不可となる——ビジョンエンコーダーと接続部の重みが別途MITライセンスであるにもかかわらずだ。',
        ],
        faqs: [
          {
            q: 'Ideficsは商用利用が無料か?',
            a: '世代によって異なる。Idefics2は追加制限なく完全にApache-2.0だ。Idefics3自身のリポジトリはApache-2.0だが、Llama-3.1-8B-InstructベースはMetaのLlama 3.1コミュニティライセンスの条件を伴い、月間アクティブユーザー7億人を超える場合は別途ライセンスが必要となる。オリジナルのIdeficsは、LLaMA(1)ベースからの研究専用・非商用の制限を伴う。',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: '実際の使用例:Transformersライブラリ',
        content: [
          'Idefics3はHugging Face Transformersの`AutoModelForVision2Seq`と`AutoProcessor`クラスを通じて使用され、[TransformersのIdefics3モデルドキュメント](https://huggingface.co/docs/transformers/en/model_doc/idefics3)に文書化されている。Transformersバージョン4.46以降が必要だ。',
        ],
        codeBlock: `# transformers >= 4.46 が必要(Hugging FaceのIdefics3モデルドキュメントによる)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'この例はIdefics3自身のHuggingFaceモデルカードとTransformersのIdefics3ドキュメントに文書化されたパターンを反映している——Transformers APIはリリース間で変わり得るため、本番連携をスクリプト化する前にこれらのページの最新版と照らし合わせて確認してほしい。',
        items: [
          '**今日、OllamaやllamaC.cppの経路は存在しない。** IdeficsはTransformers(またはText Generation Inferenceのような互換推論サーバー)を通じて動作し、GGUFベースのランナーは通じない。',
          '**画像解像度パラメータを下げるとGPUメモリ使用量を減らせる。** Idefics2/3のモデルカードには、処理する画像サブパッチの数を減らすこと(Idefics3のドキュメントでは`N`と呼ばれる)が、精度と引き換えにVRAMを減らす方法として文書化されている。',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAMとハードウェア要件',
        content: [
          'Idefics2とIdefics3は、主に画像解像度の処理方法により、同程度のサイズのLLaVAやMiniCPM-Vのチェックポイントより明確に重い。以下の数値はIdefics2自身のモデルカードから直接得たもので、そのVRAM範囲が明示的に文書化されている。Idefics3(同じ8Bパラメータ数と同じビジョンエンコーダー)も同様と予想されるが、PromptQuorumはIdefics3固有の同程度に詳細なVRAM表は見つけられなかった。',
        ],
        columns: ['構成', '概算VRAM', '備考'],
        rows: [
          { '構成': 'float16 + flash-attention', '概算VRAM': '約18〜20GB', '備考': 'Idefics2のモデルカードで標準構成として文書化' },
          { '構成': '最適化なし', '概算VRAM': 'ピーク時約55GBまで', '備考': 'Idefics2のモデルカードにおける最適化なし推論の上限' },
          { '構成': '積極的な量子化', '概算VRAM': '約6〜7GB', '備考': 'Idefics2のモデルカードで文書化された下限;精度とのトレードオフを想定' },
          { '構成': 'LLaVA 7B(比較用)', '概算VRAM': '約6〜8GB', '備考': 'PromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を参照' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumは本記事のために独自のハードウェアベンチマークを行っていない。これらの数値はIdefics2の公開モデルカードから引用したものだ。Ideficsは同程度の性能帯においてLLaVA 7BやMiniCPM-Vより実際に重い——リソースの限られた展開のために選ぶ前に、利用可能なVRAMについて自分自身に正直になってほしい。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ideficsが向いていない用途',
        content: [
          'Idefics3は有能なオープンビジョン言語モデルだが、以下の状況には向いていない。',
        ],
        items: [
          '**リソースの限られたローカル環境。** 標準のfloat16構成で約18〜20GBのVRAMを要するIdefics2/3は、LLaVA 7B(約6〜8GB)やMiniCPM-V(約5.5GB)より明確に多くのGPUメモリを必要とする。ハードウェア予算が8GB以下のVRAMを持つ単一のコンシューマーGPUであれば、積極的な量子化と精度低下の許容なしにIdeficsは現実的な選択肢ではない。',
          '**リアルタイムまたは低遅延のアプリケーション。** 入力ごとに複数の画像サブパッチを処理する8Bパラメータのビジョン言語モデルは、最速の応答時間のために作られたものではない。レイテンシが優先事項なら、Moondream(1.8B)のような小型モデルの方が、能力は落ちるがより高速に応答する。',
          '**OllamaやllamaC.cppにそのまま組み込むワークフロー。** Ideficsは現時点でOllamaのライブラリにパッケージ化されておらず、GGUF変換にはOllama自身のGitHubで追跡されている未解決の互換性問題がある。ワークフローが特にOllamaに依存している場合は、今日実際にpull可能なモデルについてPromptQuorumの[Ollamaビジョンモデルガイド](/ja/power-local-llm/ollama-vision-models-review)を参照してほしい。',
          '**バージョン間で単一の統一されたライセンスを想定すること。** 「Idefics」を単一のライセンスを持つ単一の製品として扱うのは誤りだ——どの世代を展開しているかを確認し、特にIdefics3の大規模利用時のLlama 3.1コミュニティライセンスの義務について、そのモデル固有のライセンス条項を読んでほしい。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '代替ツールと競合',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[LLaVA](/ja/power-local-llm/llava-review)',
            '最適な用途': 'OllamaやllamaC.cppのパッケージ化を含む、より幅広いツール対応;7Bでより軽いVRAMフットプリント',
            'ライセンス': 'Apache-2.0(コード);チェックポイントはベースモデル依存',
          },
          {
            'ツール': '[Ollamaのビジョンモデル](/ja/power-local-llm/ollama-vision-models-review)',
            '最適な用途': '`ollama pull`/`ollama run`による最も簡単なローカルセットアップ;本レビュー時点でIdeficsはその中に含まれない',
            'ライセンス': 'モデルにより異なる',
          },
          {
            'ツール': 'MLC Chat',
            '最適な用途': 'プラットフォーム横断のオンデバイス展開;本レビュー時点では主にテキスト中心——依存する前に現在のビジョン対応状況を確認',
            'ライセンス': 'Apache-2.0',
          },
          {
            'ツール': 'クラウドVLM API(GPT-4o、Claude、Geminiビジョン)',
            '最適な用途': '入手可能な中で最高のマルチモーダル性能、ローカルのハードウェアやセットアップ不要',
            'ライセンス': 'プロプライエタリ(有料API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ideficsとは何か?',
            a: 'IdeficsはHuggingFaceのM4チームが構築したオープンなビジョン言語モデルのファミリーであり、DeepMindのFlamingoの明確なオープン再現として設計された。3世代存在する:オリジナルのIdefics(2023年、9B/80B)、Idefics2(2024年4月、8B)、Idefics3(2024年8月、8B)。',
          },
          {
            q: 'Ideficsのどのバージョンを使うべきか——Idefics、Idefics2、Idefics3?',
            a: '今日ほとんどのタスクにはIdefics3を。3つの中で最も強力なOCRと文書理解を持つ。純粋にApache-2.0でLlama由来の条件を含まないスタックが特に必要な場合はIdefics2が引き続き有効だ。オリジナルのIdeficsは大部分が過去のものとなっており、研究専用のライセンス制限を伴う。',
          },
          {
            q: 'Ideficsは完全にオープンソースで、商用利用は無料か?',
            a: '世代によって異なる。Idefics2は完全にApache-2.0だ。Idefics3のリポジトリはApache-2.0とタグ付けされているが、Llama-3.1-8B-InstructベースはMetaのLlama 3.1コミュニティライセンスの条件を伴い、月間アクティブユーザー7億人を超える場合の義務も含む。オリジナルのIdeficsは、LLaMA(1)ベースからの研究専用・非商用の制限を持つ。',
          },
          {
            q: 'IdeficsにはどれくらいのVRAMが必要か?',
            a: 'Idefics2(そしておそらく同じ8Bパラメータ数と同じビジョンエンコーダーを持つIdefics3)は、Idefics2のモデルカードで文書化された標準のflash-attention付きfloat16構成で約18〜20GBのVRAMが必要、あるいは積極的な量子化と精度とのトレードオフを受け入れれば6〜7GB程度で済む。これはLLaVA 7BやMiniCPM-Vより明確に重い。',
          },
          {
            q: 'IdeficsをOllama経由で実行できるか?',
            a: '本レビュー時点ではできない。Ideficsは現時点でOllamaのモデルライブラリにパッケージ化されておらず、GGUF変換にはOllama自身のGitHubリポジトリで追跡されている未解決の互換性問題がある。IdeficsはHugging Face Transformersを通じて動作する。',
          },
          {
            q: 'IdeficsはDeepMindのFlamingoに基づいているのか?',
            a: 'Ideficsは自身のモデルカードで明確に「DeepMindが開発したクローズドソースのビジョン言語モデルであるFlamingoのオープンアクセス再現」と説明されている。Idefics2とIdefics3は、同じHuggingFace M4チームによって独立してアーキテクチャ設計された後継である。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Ideficsは本当に有用なオープンビジョン言語モデルのファミリーであり、特にIdefics3は約18〜20GBのVRAMフットプリントが許容できる場合、文書中心のOCRと複数画像の推論作業に十分対応できる。ただし、より軽量なローカルビジョンモデルの単純な代替ではない:LLaVA 7BやMiniCPM-Vより明確に多くのGPUメモリを必要とし、本レビュー時点でOllamaやllamaC.cppのパッケージ化がなく、そのライセンス状況は世代によって実際に異なる——Idefics2のクリーンなApache-2.0スタックは、Idefics3のLlama 3.1コミュニティライセンスの義務とは法的に別の話だ。GPUメモリに余裕があり、文書理解とOCR品質を求めるならIdefics3を選び、純粋なApache-2.0スタックが重要な場合は特にIdefics2を選び、より軽量なローカルハードウェアやOllamaベースのワークフローには、PromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)経由でLLaVAを、または[Ollamaビジョンモデルガイド](/ja/power-local-llm/ollama-vision-models-review)内のいずれかのモデルを選んでほしい。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Idefics-80Bモデルカード](https://huggingface.co/HuggingFaceM4/idefics-80b) — Flamingo再現の記述、ライセンス構造、モデルサイズ。',
          '[Idefics2-8bモデルカード](https://huggingface.co/HuggingFaceM4/idefics2-8b) — ベースモデル、Apache-2.0ライセンス、文書化されたVRAM範囲。',
          '[Idefics3-8B-Llama3モデルカード](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — ベースモデル、ライセンスタグ、リリース詳細。',
          '[Idefics3 Transformersドキュメント](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — 使用例、Transformersの最小バージョン。',
          '[Meta Llama 3.1コミュニティライセンス](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — Idefics3の言語ベースが継承するライセンス条項。',
          '[Ollama GitHub issue #2183](https://github.com/ollama/ollama/issues/2183) および [issue #3677](https://github.com/ollama/ollama/issues/3677) — Ideficsが現時点でOllamaのライブラリにパッケージ化されていないことを確認する未解決の機能リクエスト。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LLaVAレビュー(2026)](/ja/power-local-llm/llava-review) — より幅広いツール対応を持つ、比較可能なオープンビジョン言語モデル。',
          '[Ollamaビジョンモデル(2026)](/ja/power-local-llm/ollama-vision-models-review) — 今日Ollama経由で実際にpull可能なビジョンモデル。',
          '[ローカルビジョンモデル2026:LLaVA、Llama 3.2 Vision、Qwen3-VL & Ollamaマルチモーダルセットアップ](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — 現在のローカルビジョンモデルをタスク別に幅広く比較。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Idefics レビュー(2026):HuggingFaceのオープンなビジョン言語モデルを正直に評価する',
      description:
        'Idefics レビュー2026:HuggingFaceのオープンなビジョン言語モデルファミリー。Idefics vs Idefics2 vs Idefics3を正直に比較——ライセンスの注意点、実際のVRAM要件、今日使うべきバージョン。',
      url: 'https://promptquorum.com/ja/power-local-llm/idefics-review',
      inLanguage: 'ja',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'オープンなビジョン言語モデルを評価している開発者や研究者' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Idefics レビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/idefics-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-pt.webp',
    title: 'Análise do Idefics (2026): os modelos de visão-linguagem abertos da HuggingFace, avaliados com honestidade',
    seoTitle: 'Análise do Idefics 2026: Idefics vs Idefics2 vs Idefics3',
    intro:
      'O Idefics é uma família de modelos de visão-linguagem abertos criada pela equipe M4 da HuggingFace, projetada explicitamente como uma reprodução aberta do Flamingo, da DeepMind. A família tem três gerações — o Idefics original, o Idefics2 e o Idefics3 — e elas não são intercambiáveis: usam modelos de linguagem base diferentes, licenças diferentes na prática e requisitos de hardware muito diferentes. Esta análise cobre a história real, qual versão realmente usar hoje, números honestos de VRAM e onde o Idefics não é uma boa opção, especialmente para configurações locais com recursos limitados. Para um modelo de visão-linguagem aberto comparável com uma base de usuários maior, veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum; para rodar modelos de visão especificamente pelo Ollama (o Idefics não está atualmente empacotado para ele), veja o [guia de modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'Análise do Idefics 2026: a família de modelos de visão-linguagem abertos da HuggingFace. Idefics vs Idefics2 vs Idefics3 comparados com honestidade — nuances de licença, requisitos reais de VRAM e qual versão usar hoje.',
    twitterDescription:
      'Análise do Idefics 2026: a família de modelos de visão-linguagem abertos da HuggingFace M4, uma reprodução explícita do Flamingo da DeepMind. Idefics vs Idefics2 vs Idefics3 — nuances de licença, números honestos de VRAM e qual usar de fato.',
    audience:
      'Desenvolvedores e pesquisadores avaliando modelos de visão-linguagem abertos que querem uma comparação honesta das três gerações do Idefics, incluindo trade-offs de licença e hardware, em vez de alegações de marketing.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'análise idefics',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'licença idefics',
      'requisitos vram idefics',
      'modelo visão linguagem huggingface',
      'idefics vs llava',
      'reprodução aberta flamingo',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**O Idefics é uma família de modelos de visão-linguagem abertos da equipe M4 da HuggingFace, criada como uma reprodução aberta explícita do Flamingo da DeepMind.** Existem três gerações: o Idefics original (9B/80B, 2023), o Idefics2 (8B, abril de 2024) e o Idefics3 (8B, agosto de 2024). Para uso real hoje, o Idefics3 é a recomendação atual para a maioria das tarefas — melhora substancialmente o OCR, a compreensão de documentos e o raciocínio visual em relação ao Idefics2, que por sua vez era "10x menor" que o Idefics original com desempenho comparável. A licença tem nuances: a base Mistral-7B-v0.1 do Idefics2 mantém toda a pilha em Apache-2.0, enquanto a base Llama-3.1-8B-Instruct do Idefics3 traz, além da etiqueta Apache-2.0 do próprio repositório do modelo, as condições da Licença Comunitária Llama 3.1 da Meta. O Idefics não está atualmente empacotado na [biblioteca do Ollama](https://ollama.com/library) — a conversão para GGUF tem problemas de compatibilidade em aberto no momento desta análise. Para um VLM aberto comparável com suporte de ferramentas mais amplo, veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o Idefics e qual versão devo realmente usar — Idefics, Idefics2 ou Idefics3?',
        answer:
          'O Idefics é a família de modelos de visão-linguagem abertos da HuggingFace M4, criada explicitamente como uma reprodução aberta do Flamingo da DeepMind. Use o Idefics3 (8B, lançado em 22 de agosto de 2024) para a maioria das tarefas hoje — é a geração atual com o melhor OCR, compreensão de documentos e raciocínio visual dos três. O Idefics2 (8B, abril de 2024) continua relevante se uma licença puramente Apache-2.0, sem termos derivados do Llama, for importante para o seu caso de uso, já que sua base é o Mistral-7B-v0.1 em vez do Llama 3.1. O Idefics original (9B/80B, 2023) está em grande parte superado — é 10x maior que o Idefics2 com desempenho comparável e carrega uma restrição de licença apenas para pesquisa herdada do lançamento original do LLaMA. Nenhum dos três está atualmente empacotado na biblioteca do Ollama.',
        bullets: [
          'Existem três gerações: Idefics (2023, 9B/80B), Idefics2 (abril de 2024, 8B), Idefics3 (agosto de 2024, 8B) — verificadas nas respectivas fichas de modelo da HuggingFace.',
          'O Idefics3 é a recomendação atual para a maioria das tarefas: o melhor OCR e compreensão de documentos dos três.',
          'Nuance de licença: o Idefics2 (base Mistral-7B) é totalmente Apache-2.0; o Idefics3 (base Llama-3.1-8B-Instruct) traz as condições da Licença Comunitária Llama 3.1 da Meta, além da etiqueta Apache-2.0 do repositório.',
          'O Idefics original carrega uma restrição de licença apenas para pesquisa de sua base LLaMA(1) e está em grande parte superado.',
          'VRAM: o Idefics2/3 precisa de aproximadamente 18-20 GB em float16 com flash-attention, ou apenas 6-7 GB com quantização agressiva — mais pesado que o LLaVA 7B ou o MiniCPM-V.',
          'O Idefics não está atualmente empacotado na biblioteca do Ollama; issues abertas no GitHub acompanham dificuldades de conversão para GGUF.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Resposta Rápida', anchor: 'quick-answer' },
      { label: 'História: HuggingFace M4 e a Reprodução do Flamingo', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3: O Que Realmente Mudou', anchor: 'versions' },
      { label: 'Nuance de Licença: Não É Simplesmente Apache-2.0', anchor: 'license' },
      { label: 'Exemplo Real de Uso: Biblioteca Transformers', anchor: 'usage-example' },
      { label: 'Requisitos de VRAM e Hardware', anchor: 'vram-guidance' },
      { label: 'Para que o Idefics Não Serve', anchor: 'limitations' },
      { label: 'Alternativas e Concorrentes', anchor: 'alternatives' },
      { label: 'Perguntas Frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura Relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Idefics é a reprodução aberta da HuggingFace M4 do Flamingo da DeepMind, agora em sua terceira geração (Idefics3, 8B, agosto de 2024), com licenças e necessidades de VRAM notavelmente diferentes entre suas três versões, e não está atualmente empacotado na biblioteca de modelos do Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'O Idefics é uma família de modelos de IA feitos pela HuggingFace que conseguem olhar para imagens e responder perguntas sobre elas, semelhante ao LLaVA — esta análise explica qual das três versões realmente usar, quanto ela custa em memória de GPU e onde ela deixa a desejar.',
          },
        ],
        items: [
          'Existem três gerações: Idefics (2023), Idefics2 (abril de 2024), Idefics3 (agosto de 2024) — cada uma um modelo distinto, não uma simples atualização.',
          'O Idefics3 é a recomendação atual para a maioria das tarefas; melhora substancialmente o OCR e a compreensão de documentos em relação ao Idefics2.',
          'A licença tem nuances entre as gerações: o Idefics original tem uma restrição apenas para pesquisa; o Idefics2 é totalmente Apache-2.0 (base Mistral-7B); o Idefics3 traz as condições da Licença Comunitária Llama 3.1 além de sua etiqueta Apache-2.0 (base Llama-3.1-8B-Instruct).',
          'VRAM: aproximadamente 18-20 GB em float16 para o Idefics2/3, ou 6-7 GB com quantização agressiva — mais pesado que o LLaVA 7B ou o MiniCPM-V.',
          'Não empacotado na biblioteca do Ollama no momento desta análise; issues abertas no GitHub acompanham dificuldades de conversão para GGUF.',
          'Melhor uso: tarefas intensivas em OCR de documentos e raciocínio com múltiplas imagens, com memória de GPU suficiente, não configurações locais com recursos limitados ou em tempo real.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O PromptQuorum verificou esses fatos diretamente nas fichas de modelo da HuggingFace para idefics-80b, idefics2-8b e Idefics3-8B-Llama3, e na biblioteca do Ollama e seu rastreador de issues do GitHub — veja a seção Fontes para os links exatos.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: HuggingFace M4 e a Reprodução do Flamingo',
        content: [
          '**A ficha de modelo do [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) original afirma explicitamente que é "uma reprodução de acesso aberto do Flamingo, um modelo de visão-linguagem de código fechado desenvolvido pela DeepMind."** Foi lançado pela equipe M4 da HuggingFace em 2023, em dois tamanhos, 9B e 80B parâmetros, combinando um codificador de visão com uma base de modelo de linguagem LLaMA(1).',
          '**O Idefics original carrega uma licença mista, não uma única licença permissiva.** Seu codificador de visão e os parâmetros de conexão recém-treinados são lançados sob MIT, mas a base de modelo de linguagem LLaMA(1) exige conformidade com a licença original da Meta, apenas para pesquisa e não comercial, para o LLaMA. Isso torna o Idefics original inadequado para uso comercial na maioria dos casos, independentemente da etiqueta MIT em partes da pilha.',
          '**O Idefics2 (8B), lançado por volta de abril de 2024**, substituiu a base LLaMA(1) pelo [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) e o combinou com um codificador de visão [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384). Como ambos os modelos base são Apache-2.0, a própria [ficha de modelo](https://huggingface.co/HuggingFaceM4/idefics2-8b) do Idefics2 afirma que o modelo completo é Apache-2.0 — resolvendo o problema de licenciamento do Idefics original. A própria HuggingFace credita ao Idefics2 igualar o desempenho do Idefics-80B com um tamanho cerca de 10x menor, com OCR e compreensão de documentos notavelmente melhores.',
          '**O Idefics3 (8B), lançado em 22 de agosto de 2024**, manteve o codificador de visão SigLIP, mas trocou a base de linguagem para o [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). Sua própria [ficha de modelo](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) demonstra uma melhoria substancial em relação ao Idefics2, particularmente em compreensão de documentos, OCR e raciocínio visual. Foi adicionado ao Hugging Face Transformers na versão 4.46.',
        ],
        faqs: [
          {
            q: 'O Idefics é uma reprodução do Flamingo da DeepMind?',
            a: 'Sim. A ficha de modelo do Idefics original o descreve explicitamente como "uma reprodução de acesso aberto do Flamingo, um modelo de visão-linguagem de código fechado desenvolvido pela DeepMind." O Idefics2 e o Idefics3 são gerações subsequentes da HuggingFace M4, com arquitetura independente, mas dentro da mesma linhagem.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3: O Que Realmente Mudou',
        content: [
          'As três gerações são modelos distintos com arquiteturas base diferentes — não um único modelo com aumentos incrementais de versão. Aqui está o que realmente difere, verificado na ficha da HuggingFace de cada modelo.',
        ],
        itemHeadings: true,
        columns: ['Versão', 'Lançamento', 'Base', 'Notas'],
        rows: [
          {
            'Versão': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'Lançamento': '2023',
            'Base': 'LLaMA(1) + codificador de visão próprio',
            'Notas': 'Restrição de licença apenas para pesquisa herdada do LLaMA(1); em grande parte superado',
          },
          {
            'Versão': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'Lançamento': 'Abril de 2024',
            'Base': 'Mistral-7B-v0.1 + SigLIP',
            'Notas': 'Totalmente Apache-2.0; iguala o Idefics-80B com tamanho 10x menor',
          },
          {
            'Versão': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'Lançamento': '22 de agosto de 2024',
            'Base': 'Llama-3.1-8B-Instruct + SigLIP',
            'Notas': 'Melhor OCR/compreensão de documentos dos três; aplicam-se as condições de licença do Llama 3.1',
          },
        ],
        note: 'O PromptQuorum não encontrou nenhum "Idefics4" confirmado publicamente no momento desta análise. O Idefics3 é a geração mais recente e a recomendação atual para a maioria das tarefas.',
      },
      license: {
        id: 'license',
        title: 'Nuance de Licença: Não É Simplesmente Apache-2.0',
        content: [
          'O diretório do PromptQuorum marca a licença do Idefics como "Apache 2.0" — isso é correto para o repositório e o código do modelo, mas incompleto para a situação prática de licenciamento, de forma semelhante a como a licença Apache-2.0 do código do LLaVA não se estende automaticamente a cada checkpoint de modelo base.',
          '**O Idefics2 é o caso mais claro:** tanto sua base de linguagem Mistral-7B-v0.1 quanto seu codificador de visão SigLIP são Apache-2.0, então toda a pilha do modelo é genuinamente Apache-2.0, sem termos adicionais.',
          '**O Idefics3 é mais nuançado.** Seu próprio repositório na HuggingFace é marcado como Apache-2.0, mas sua base de linguagem, o Meta-Llama-3.1-8B-Instruct, é lançada sob a Licença Comunitária Llama 3.1 da Meta — que inclui uma política de uso aceitável e uma cláusula exigindo uma licença separada da Meta caso um produto derivado ultrapasse 700 milhões de usuários ativos mensais. Qualquer um que implante o Idefics3 comercialmente em grande escala deveria ler diretamente os termos da licença Llama 3.1 da Meta, não apenas a etiqueta Apache-2.0 no repositório do Idefics3.',
          '**O Idefics original é o mais restritivo.** Sua base LLaMA(1) carrega a licença original da Meta, apenas para pesquisa e não comercial, o que torna o uso comercial do modelo completo 9B/80B legalmente incerto na melhor das hipóteses e inviável na pior — mesmo que o codificador de visão e os pesos de conexão tenham licença MIT separada.',
        ],
        faqs: [
          {
            q: 'O Idefics é gratuito para uso comercial?',
            a: 'Depende da geração. O Idefics2 é totalmente Apache-2.0, sem restrições adicionais. O repositório do Idefics3 é etiquetado como Apache-2.0, mas sua base Llama-3.1-8B-Instruct carrega as condições da Licença Comunitária Llama 3.1 da Meta, incluindo uma exigência de licença separada acima de 700 milhões de usuários ativos mensais. O Idefics original carrega uma restrição apenas para pesquisa, não comercial, de sua base LLaMA(1).',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'Exemplo Real de Uso: Biblioteca Transformers',
        content: [
          'O Idefics3 é usado por meio das classes `AutoModelForVision2Seq` e `AutoProcessor` do Hugging Face Transformers, documentadas na [documentação do modelo Idefics3 do Transformers](https://huggingface.co/docs/transformers/en/model_doc/idefics3). É necessária a versão 4.46 ou posterior do Transformers.',
        ],
        codeBlock: `# Requer transformers >= 4.46 (conforme a documentação do modelo Idefics3 da Hugging Face)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'Este exemplo reflete o padrão documentado na própria ficha de modelo da HuggingFace do Idefics3 e na documentação do Idefics3 do Transformers — verifique com a versão atual dessas páginas antes de programar uma integração de produção, já que a API do Transformers pode evoluir entre versões.',
        items: [
          '**Hoje não existe um caminho para Ollama ou llama.cpp.** O Idefics roda por meio do Transformers (ou servidores de inferência compatíveis como o Text Generation Inference), não por meio de executores baseados em GGUF.',
          '**Reduzir o parâmetro de resolução de imagem pode diminuir o uso de memória de GPU.** As fichas de modelo do Idefics2/3 documentam a redução do número de sub-recortes de imagem processados (chamado de `N` na documentação do Idefics3) como forma de trocar um pouco de precisão por menos VRAM.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Requisitos de VRAM e Hardware',
        content: [
          'O Idefics2 e o Idefics3 são notavelmente mais pesados que checkpoints de LLaVA ou MiniCPM-V de tamanho comparável, em grande parte pela forma como processam a resolução de imagem. Esses números vêm diretamente da própria ficha de modelo do Idefics2, que documenta explicitamente sua faixa de VRAM; espera-se que o Idefics3 (mesma contagem de 8B parâmetros e mesmo codificador de visão) seja semelhante, embora o PromptQuorum não tenha encontrado uma tabela de VRAM publicada com o mesmo nível de detalhe especificamente para o Idefics3.',
        ],
        columns: ['Configuração', 'VRAM aprox.', 'Notas'],
        rows: [
          { 'Configuração': 'float16 + flash-attention', 'VRAM aprox.': '~18-20 GB', 'Notas': 'Documentado na ficha de modelo do Idefics2 como configuração padrão' },
          { 'Configuração': 'Sem otimizações', 'VRAM aprox.': 'Até ~55 GB no pico', 'Notas': 'Limite superior da ficha de modelo do Idefics2 para inferência não otimizada' },
          { 'Configuração': 'Quantização agressiva', 'VRAM aprox.': '~6-7 GB', 'Notas': 'Limite inferior documentado na ficha de modelo do Idefics2; espere uma perda de precisão' },
          { 'Configuração': 'LLaVA 7B (para comparação)', 'VRAM aprox.': '~6-8 GB', 'Notas': 'Veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'O PromptQuorum não realizou seus próprios testes de hardware para este artigo; esses números vêm da ficha de modelo publicada do Idefics2. O Idefics é genuinamente mais pesado que o LLaVA 7B ou o MiniCPM-V em níveis de capacidade comparáveis — seja honesto consigo mesmo sobre a VRAM disponível antes de escolhê-lo para uma implantação com recursos limitados.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o Idefics Não Serve',
        content: [
          'O Idefics3 é um modelo de visão-linguagem aberto competente, mas é a escolha errada nas seguintes situações:',
        ],
        items: [
          '**Configurações locais com recursos limitados.** Com aproximadamente 18-20 GB de VRAM em sua configuração padrão float16, o Idefics2/3 precisa de notavelmente mais memória de GPU que o LLaVA 7B (~6-8 GB) ou o MiniCPM-V (~5,5 GB). Se o seu orçamento de hardware é uma única GPU de consumidor com 8 GB de VRAM ou menos, o Idefics não é uma opção realista sem quantização agressiva e uma perda de precisão aceita.',
          '**Aplicações em tempo real ou de baixa latência.** Um modelo de visão-linguagem de 8B parâmetros que processa múltiplos sub-recortes de imagem por entrada não foi feito para o tempo de resposta mais rápido possível. Se a latência for a prioridade, um modelo menor como o Moondream (1,8B) responderá mais rápido, com capacidade reduzida.',
          '**Um fluxo de trabalho direto com Ollama ou llama.cpp.** O Idefics não está atualmente empacotado na biblioteca do Ollama, e a conversão para GGUF tem problemas de compatibilidade em aberto e não resolvidos, rastreados no próprio GitHub do Ollama. Se o seu fluxo de trabalho depende especificamente do Ollama, veja o [guia de modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review) do PromptQuorum para modelos que podem ser realmente baixados hoje.',
          '**Assumir uma licença única e uniforme entre as versões.** Tratar "Idefics" como um único produto com uma única licença é um erro — verifique qual geração você está implantando e leia os termos de licença específicos daquele modelo, particularmente as obrigações da Licença Comunitária Llama 3.1 do Idefics3 em grande escala.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas e Concorrentes',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor uso', 'Licença'],
        rows: [
          {
            'Ferramenta': '[LLaVA](/pt/power-local-llm/llava-review)',
            'Melhor uso': 'Suporte de ferramentas mais amplo, incluindo empacotamento para Ollama e llama.cpp; menor pegada de VRAM com 7B',
            'Licença': 'Apache-2.0 (código); depende do modelo base para os checkpoints',
          },
          {
            'Ferramenta': '[Modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review)',
            'Melhor uso': 'Configuração local mais simples via `ollama pull`/`ollama run`; o Idefics não está entre eles no momento desta análise',
            'Licença': 'Varia conforme o modelo',
          },
          {
            'Ferramenta': 'MLC Chat',
            'Melhor uso': 'Implantação no dispositivo multiplataforma; principalmente focado em texto no momento desta análise — verifique o suporte atual a visão antes de depender dele',
            'Licença': 'Apache-2.0',
          },
          {
            'Ferramenta': 'APIs de VLM em nuvem (GPT-4o, Claude, visão do Gemini)',
            'Melhor uso': 'A maior capacidade multimodal disponível, sem necessidade de hardware ou configuração local',
            'Licença': 'Proprietária (API paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O que é o Idefics?',
            a: 'O Idefics é uma família de modelos de visão-linguagem abertos criada pela equipe M4 da HuggingFace, projetada explicitamente como uma reprodução aberta do Flamingo da DeepMind. Existe em três gerações: o Idefics original (2023, 9B/80B), o Idefics2 (abril de 2024, 8B) e o Idefics3 (agosto de 2024, 8B).',
          },
          {
            q: 'Qual versão do Idefics devo usar — Idefics, Idefics2 ou Idefics3?',
            a: 'O Idefics3 para a maioria das tarefas hoje — tem o melhor OCR e compreensão de documentos dos três. O Idefics2 continua relevante se você precisa especificamente de uma pilha totalmente Apache-2.0, sem termos derivados do Llama. O Idefics original está em grande parte superado e carrega uma restrição de licença apenas para pesquisa.',
          },
          {
            q: 'O Idefics é totalmente open source e gratuito para uso comercial?',
            a: 'Depende da geração. O Idefics2 é totalmente Apache-2.0. O repositório do Idefics3 é etiquetado como Apache-2.0, mas sua base Llama-3.1-8B-Instruct carrega as condições da Licença Comunitária Llama 3.1 da Meta, incluindo obrigações acima de 700 milhões de usuários ativos mensais. O Idefics original tem uma restrição apenas para pesquisa, não comercial, de sua base LLaMA(1).',
          },
          {
            q: 'Quanta VRAM o Idefics precisa?',
            a: 'O Idefics2 (e provavelmente o Idefics3, com a mesma contagem de 8B parâmetros e o mesmo codificador de visão) precisa de aproximadamente 18-20 GB de VRAM na configuração padrão float16 com flash-attention documentada na ficha de modelo do Idefics2, ou apenas 6-7 GB com quantização agressiva e uma perda de precisão. Isso é notavelmente mais pesado que o LLaVA 7B ou o MiniCPM-V.',
          },
          {
            q: 'Posso rodar o Idefics pelo Ollama?',
            a: 'Não, no momento desta análise. O Idefics não está atualmente empacotado na biblioteca de modelos do Ollama, e a conversão para GGUF tem problemas de compatibilidade em aberto rastreados no próprio repositório GitHub do Ollama. O Idefics roda pelo Hugging Face Transformers em vez disso.',
          },
          {
            q: 'O Idefics é baseado no Flamingo da DeepMind?',
            a: 'O Idefics é explicitamente descrito em sua própria ficha de modelo como "uma reprodução de acesso aberto do Flamingo, um modelo de visão-linguagem de código fechado desenvolvido pela DeepMind." O Idefics2 e o Idefics3 são sucessores com arquitetura independente, criados pela mesma equipe HuggingFace M4.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Idefics é uma família de modelos de visão-linguagem abertos genuinamente útil, e o Idefics3 em particular se sai bem para trabalhos intensivos de OCR de documentos e raciocínio com múltiplas imagens, onde sua pegada de aproximadamente 18-20 GB de VRAM é acessível. No entanto, não é um substituto direto para modelos de visão locais mais leves: precisa de notavelmente mais memória de GPU que o LLaVA 7B ou o MiniCPM-V, não tem empacotamento para Ollama ou llama.cpp no momento desta análise, e sua situação de licença realmente difere por geração — a pilha Apache-2.0 limpa do Idefics2 é uma proposta legal diferente das obrigações da Licença Comunitária Llama 3.1 do Idefics3. Escolha o Idefics3 para compreensão de documentos e qualidade de OCR quando tiver memória de GPU de sobra; escolha especificamente o Idefics2 se uma pilha puramente Apache-2.0 for importante; e escolha o LLaVA, pela [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum, ou um dos modelos no [guia de modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review), para hardware local mais leve ou fluxos de trabalho baseados no Ollama.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ficha de modelo Idefics-80B](https://huggingface.co/HuggingFaceM4/idefics-80b) — declaração de reprodução do Flamingo, estrutura de licença, tamanhos de modelo.',
          '[Ficha de modelo Idefics2-8b](https://huggingface.co/HuggingFaceM4/idefics2-8b) — modelos base, licença Apache-2.0, faixa de VRAM documentada.',
          '[Ficha de modelo Idefics3-8B-Llama3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — modelo base, etiqueta de licença, detalhes de lançamento.',
          '[Documentação do Transformers para o Idefics3](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — exemplo de uso, versão mínima do Transformers.',
          '[Licença Comunitária Meta Llama 3.1](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — termos de licença herdados pela base de linguagem do Idefics3.',
          '[Issue #2183 do GitHub do Ollama](https://github.com/ollama/ollama/issues/2183) e [issue #3677](https://github.com/ollama/ollama/issues/3677) — solicitações de recurso em aberto confirmando que o Idefics não está atualmente empacotado na biblioteca do Ollama.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Análise do LLaVA (2026)](/pt/power-local-llm/llava-review) — um modelo de visão-linguagem aberto comparável com suporte de ferramentas mais amplo.',
          '[Modelos de Visão do Ollama (2026)](/pt/power-local-llm/ollama-vision-models-review) — quais modelos de visão são realmente baixáveis pelo Ollama hoje.',
          '[Modelos de Visão Locais 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Configuração Multimodal do Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — uma comparação mais ampla, tarefa por tarefa, entre os modelos de visão locais atuais.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análise do Idefics (2026): os modelos de visão-linguagem abertos da HuggingFace, avaliados com honestidade',
      description:
        'Análise do Idefics 2026: a família de modelos de visão-linguagem abertos da HuggingFace. Idefics vs Idefics2 vs Idefics3 comparados com honestidade — nuances de licença, requisitos reais de VRAM e qual versão usar hoje.',
      url: 'https://promptquorum.com/pt/power-local-llm/idefics-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores e pesquisadores avaliando modelos de visão-linguagem abertos' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Análise do Idefics (2026)', item: 'https://promptquorum.com/pt/power-local-llm/idefics-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-ar.webp',
    title: 'مراجعة Idefics (2026): نماذج الرؤية-اللغة المفتوحة من HuggingFace، بتقييم صريح',
    seoTitle: 'مراجعة Idefics 2026: Idefics مقابل Idefics2 مقابل Idefics3',
    intro:
      'Idefics هي عائلة من نماذج الرؤية-اللغة المفتوحة طورها فريق M4 التابع لـ HuggingFace، وصُممت صراحة بوصفها نسخة مفتوحة من Flamingo الخاص بـ DeepMind. تضم العائلة ثلاثة أجيال — Idefics الأصلي، وIdefics2، وIdefics3 — وهي غير قابلة للتبديل: تستخدم نماذج لغوية أساسية مختلفة، ورخصًا مختلفة من الناحية العملية، ومتطلبات عتاد مختلفة جدًا. تتناول هذه المراجعة التاريخ الفعلي، والإصدار الذي يجب استخدامه فعليًا اليوم، وأرقام VRAM الصادقة، والحالات التي لا يناسبها Idefics، خصوصًا في الإعدادات المحلية محدودة الموارد. للاطلاع على نموذج رؤية-لغة مفتوح مماثل بقاعدة مستخدمين أكبر، راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum؛ ولتشغيل نماذج الرؤية تحديدًا عبر Ollama (لم يُعبّأ Idefics له حاليًا)، راجع [دليل نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review).',
    metaDescription:
      'مراجعة Idefics 2026: عائلة نماذج الرؤية-اللغة المفتوحة من HuggingFace. مقارنة صريحة بين Idefics وIdefics2 وIdefics3 — فروق الترخيص الدقيقة، متطلبات VRAM الفعلية، والإصدار الذي يُستخدم اليوم.',
    twitterDescription:
      'مراجعة Idefics 2026: عائلة نماذج الرؤية-اللغة المفتوحة من HuggingFace M4، نسخة صريحة من Flamingo الخاص بـ DeepMind. Idefics مقابل Idefics2 مقابل Idefics3 — فروق الترخيص، أرقام VRAM الصادقة، وأيها يُستخدم فعليًا.',
    audience:
      'المطورون والباحثون الذين يقيّمون نماذج الرؤية-اللغة المفتوحة ويريدون مقارنة صريحة بين أجيال Idefics الثلاثة، بما في ذلك مقايضات الترخيص والعتاد، بدلًا من ادعاءات تسويقية.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'مراجعة idefics',
      'idefics مقابل idefics2',
      'idefics3 huggingface',
      'ترخيص idefics',
      'متطلبات vram idefics',
      'نموذج رؤية لغة huggingface',
      'idefics مقابل llava',
      'نسخة مفتوحة من flamingo',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics عائلة من نماذج الرؤية-اللغة المفتوحة من فريق M4 التابع لـ HuggingFace، بُنيت كنسخة مفتوحة صريحة من Flamingo الخاص بـ DeepMind.** توجد ثلاثة أجيال: Idefics الأصلي (9B/80B، 2023)، وIdefics2 (8B، أبريل 2024)، وIdefics3 (8B، أغسطس 2024). للاستخدام الفعلي اليوم، يُعد Idefics3 التوصية الحالية لمعظم المهام — فهو يحسّن بشكل كبير التعرف الضوئي على الحروف وفهم المستندات والاستدلال البصري مقارنة بـ Idefics2، الذي كان بدوره "أصغر بعشر مرات" من Idefics الأصلي بأداء مماثل. الترخيص دقيق: قاعدة Mistral-7B-v0.1 في Idefics2 تُبقي المكدس بأكمله تحت رخصة Apache-2.0، بينما تحمل قاعدة Llama-3.1-8B-Instruct في Idefics3، إلى جانب علامة Apache-2.0 على مستودع النموذج نفسه، شروط رخصة Llama 3.1 المجتمعية من Meta. لا يُعبّأ Idefics حاليًا في [مكتبة Ollama](https://ollama.com/library) — ولتحويل GGUF مشكلات توافق مفتوحة حتى وقت هذه المراجعة. للاطلاع على نموذج VLM مفتوح مماثل بدعم أدوات أوسع، راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو Idefics وأي إصدار يجب أن أستخدمه فعليًا — Idefics أم Idefics2 أم Idefics3؟',
        answer:
          'Idefics هي عائلة نماذج الرؤية-اللغة المفتوحة من HuggingFace M4، بُنيت صراحة كنسخة مفتوحة من Flamingo الخاص بـ DeepMind. استخدم Idefics3 (8B، صدر في 22 أغسطس 2024) لمعظم المهام اليوم — فهو الجيل الحالي بأقوى تعرف ضوئي على الحروف وفهم للمستندات واستدلال بصري بين الثلاثة. يظل Idefics2 (8B، أبريل 2024) مناسبًا إذا كانت الرخصة الخالصة Apache-2.0 دون شروط مشتقة من Llama مهمة لحالة استخدامك، إذ إن قاعدته هي Mistral-7B-v0.1 وليس Llama 3.1. أما Idefics الأصلي (9B/80B، 2023) فهو متجاوز إلى حد كبير — فهو أكبر بعشر مرات من Idefics2 بأداء مماثل ويحمل قيد ترخيص للأبحاث فقط موروثًا من إصدار LLaMA الأصلي. لا يُعبّأ أي من الثلاثة حاليًا في مكتبة Ollama.',
        bullets: [
          'توجد ثلاثة أجيال: Idefics (2023، 9B/80B)، وIdefics2 (أبريل 2024، 8B)، وIdefics3 (أغسطس 2024، 8B) — تم التحقق منها في بطاقات النماذج الخاصة بكل منها على HuggingFace.',
          'Idefics3 هو التوصية الحالية لمعظم المهام: أقوى تعرف ضوئي وفهم مستندات بين الثلاثة.',
          'فرق الترخيص: Idefics2 (قاعدة Mistral-7B) خاضع بالكامل لرخصة Apache-2.0؛ ويحمل Idefics3 (قاعدة Llama-3.1-8B-Instruct) شروط رخصة Llama 3.1 المجتمعية من Meta إلى جانب علامة Apache-2.0 على المستودع.',
          'يحمل Idefics الأصلي قيد ترخيص للأبحاث فقط من قاعدته LLaMA(1)، وهو متجاوز إلى حد كبير.',
          'VRAM: يحتاج Idefics2/3 نحو 18-20 غيغابايت بصيغة float16 مع flash-attention، أو 6-7 غيغابايت فقط مع التكميم القوي — وهذا أثقل من LLaVA 7B أو MiniCPM-V.',
          'لا يُعبّأ Idefics حاليًا في مكتبة Ollama؛ وتتابع طلبات GitHub المفتوحة صعوبات تحويل GGUF.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: HuggingFace M4 ونسخة Flamingo', anchor: 'history' },
      { label: 'Idefics مقابل Idefics2 مقابل Idefics3: ما الذي تغيّر فعليًا', anchor: 'versions' },
      { label: 'فرق الترخيص: ليس مجرد Apache-2.0', anchor: 'license' },
      { label: 'مثال استخدام حقيقي: مكتبة Transformers', anchor: 'usage-example' },
      { label: 'متطلبات VRAM والعتاد', anchor: 'vram-guidance' },
      { label: 'ما لا يصلح له Idefics', anchor: 'limitations' },
      { label: 'البدائل والمنافسون', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics هو نسخة HuggingFace M4 المفتوحة من Flamingo الخاص بـ DeepMind، وقد وصل الآن إلى جيله الثالث (Idefics3، 8B، أغسطس 2024)، مع اختلافات ملحوظة في الترخيص ومتطلبات VRAM بين إصداراته الثلاثة، وهو غير معبأ حاليًا في مكتبة نماذج Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics عائلة نماذج ذكاء اصطناعي من HuggingFace يمكنها النظر إلى الصور والإجابة عن أسئلة بشأنها، على غرار LLaVA — توضح هذه المراجعة أي الإصدارات الثلاثة يجب استخدامه فعليًا، وتكلفته من ذاكرة GPU، وأين يقصر.',
          },
        ],
        items: [
          'توجد ثلاثة أجيال: Idefics (2023)، وIdefics2 (أبريل 2024)، وIdefics3 (أغسطس 2024) — كل منها نموذج مستقل، وليس مجرد ترقية بسيطة.',
          'Idefics3 هو التوصية الحالية لمعظم المهام؛ ويحسّن بشكل كبير التعرف الضوئي وفهم المستندات مقارنة بـ Idefics2.',
          'الترخيص دقيق عبر الأجيال: يحمل Idefics الأصلي قيدًا للأبحاث فقط؛ وIdefics2 خاضع بالكامل لرخصة Apache-2.0 (قاعدة Mistral-7B)؛ ويحمل Idefics3 شروط رخصة Llama 3.1 المجتمعية إلى جانب علامة Apache-2.0 (قاعدة Llama-3.1-8B-Instruct).',
          'VRAM: نحو 18-20 غيغابايت بصيغة float16 لـ Idefics2/3، أو 6-7 غيغابايت مع التكميم القوي — أثقل من LLaVA 7B أو MiniCPM-V.',
          'غير معبأ في مكتبة Ollama حتى وقت هذه المراجعة؛ وتتابع طلبات GitHub المفتوحة صعوبات تحويل GGUF.',
          'الأنسب لـ: مهام التعرف الضوئي المكثفة على المستندات والاستدلال متعدد الصور مع ذاكرة GPU كافية، وليس الإعدادات المحلية محدودة الموارد أو الفورية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تحقق PromptQuorum من هذه الحقائق مباشرة من بطاقات نماذج HuggingFace الخاصة بـ idefics-80b وidefics2-8b وIdefics3-8B-Llama3، ومن مكتبة Ollama ومتتبع طلبات GitHub الخاص بها — راجع قسم المصادر للروابط الدقيقة.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: HuggingFace M4 ونسخة Flamingo',
        content: [
          '**تنص بطاقة نموذج [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) الأصلي صراحةً على أنه "نسخة مفتوحة الوصول من Flamingo، وهو نموذج رؤية-لغة مغلق المصدر طورته DeepMind."** أُصدر من قبل فريق M4 التابع لـ HuggingFace عام 2023 بحجمين، 9B و80B معلمة، يجمع بين مُرمّز رؤية وقاعدة نموذج لغوي LLaMA(1).',
          '**يحمل Idefics الأصلي رخصة مختلطة، وليست رخصة تساهلية واحدة.** يُطرح مُرمّز الرؤية ومعاملات الربط المُدرّبة حديثًا تحت رخصة MIT، لكن قاعدة النموذج اللغوي LLaMA(1) تتطلب الالتزام برخصة Meta الأصلية الخاصة بالأبحاث فقط وغير التجارية لـ LLaMA. هذا يجعل Idefics الأصلي غير مناسب للاستخدام التجاري في معظم الحالات، بصرف النظر عن علامة MIT على أجزاء من المكدس.',
          '**استبدل Idefics2 (8B)، الذي صدر حوالي أبريل 2024**، قاعدة LLaMA(1) بـ [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) وجمعه مع مُرمّز رؤية [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384). ولأن كلا النموذجين الأساسيين برخصة Apache-2.0، تنص [بطاقة نموذج](https://huggingface.co/HuggingFaceM4/idefics2-8b) Idefics2 نفسه على أن النموذج بأكمله برخصة Apache-2.0 — ما يحل مشكلة ترخيص Idefics الأصلي. تنسب HuggingFace نفسها إلى Idefics2 مطابقة أداء Idefics-80B بحجم أصغر بنحو عشر مرات، مع تعرف ضوئي وفهم مستندات أفضل بشكل ملحوظ.',
          '**احتفظ Idefics3 (8B)، الذي صدر في 22 أغسطس 2024**، بمُرمّز الرؤية SigLIP، لكنه بدّل القاعدة اللغوية إلى [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct). تُظهر [بطاقة نموذجه](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) الخاصة تحسنًا كبيرًا مقارنة بـ Idefics2، خصوصًا في فهم المستندات والتعرف الضوئي والاستدلال البصري. أُضيف إلى Hugging Face Transformers في الإصدار 4.46.',
        ],
        faqs: [
          {
            q: 'هل Idefics نسخة من Flamingo الخاص بـ DeepMind؟',
            a: 'نعم. تصف بطاقة نموذج Idefics الأصلي صراحةً بأنه "نسخة مفتوحة الوصول من Flamingo، وهو نموذج رؤية-لغة مغلق المصدر طورته DeepMind." وIdefics2 وIdefics3 أجيال لاحقة من HuggingFace M4، بُنيت بمعمارية مستقلة ضمن السلالة نفسها.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics مقابل Idefics2 مقابل Idefics3: ما الذي تغيّر فعليًا',
        content: [
          'الأجيال الثلاثة نماذج مستقلة بمعماريات أساسية مختلفة — وليست نموذجًا واحدًا بترقيات إصدار تدريجية. إليك ما يختلف فعليًا، تم التحقق منه في بطاقة HuggingFace الخاصة بكل نموذج.',
        ],
        itemHeadings: true,
        columns: ['الإصدار', 'الإصدار (تاريخ)', 'القاعدة', 'ملاحظات'],
        rows: [
          {
            'الإصدار': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b) (9B/80B)',
            'الإصدار (تاريخ)': '2023',
            'القاعدة': 'LLaMA(1) + مُرمّز رؤية مخصص',
            'ملاحظات': 'قيد ترخيص للأبحاث فقط موروث من LLaMA(1)؛ متجاوز إلى حد كبير',
          },
          {
            'الإصدار': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b) (8B)',
            'الإصدار (تاريخ)': 'أبريل 2024',
            'القاعدة': 'Mistral-7B-v0.1 + SigLIP',
            'ملاحظات': 'خاضع بالكامل لرخصة Apache-2.0؛ يطابق Idefics-80B بحجم أصغر بعشر مرات',
          },
          {
            'الإصدار': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (8B)',
            'الإصدار (تاريخ)': '22 أغسطس 2024',
            'القاعدة': 'Llama-3.1-8B-Instruct + SigLIP',
            'ملاحظات': 'أفضل تعرف ضوئي/فهم مستندات بين الثلاثة؛ تنطبق شروط ترخيص Llama 3.1',
          },
        ],
        note: 'لم يجد PromptQuorum أي "Idefics4" مؤكد علنًا حتى وقت هذه المراجعة. Idefics3 هو أحدث جيل والتوصية الحالية لمعظم المهام.',
      },
      license: {
        id: 'license',
        title: 'فرق الترخيص: ليس مجرد Apache-2.0',
        content: [
          'يضع دليل PromptQuorum علامة على ترخيص Idefics بأنه "Apache 2.0" — وهذا صحيح بالنسبة لمستودع النموذج والكود، لكنه غير مكتمل بالنسبة للوضع العملي للترخيص، على غرار كون رخصة كود LLaVA Apache-2.0 لا تمتد تلقائيًا إلى كل نقطة تفتيش نموذج أساسي.',
          '**Idefics2 هو الحالة الأوضح:** كل من قاعدته اللغوية Mistral-7B-v0.1 ومُرمّز الرؤية SigLIP برخصة Apache-2.0، لذا فإن مكدس النموذج بأكمله فعليًا برخصة Apache-2.0 دون شروط إضافية.',
          '**Idefics3 أكثر دقة.** مستودعه الخاص على HuggingFace موسوم بـ Apache-2.0، لكن قاعدته اللغوية، Meta-Llama-3.1-8B-Instruct، تُطرح تحت رخصة Llama 3.1 المجتمعية من Meta — التي تتضمن سياسة استخدام مقبول وبندًا يشترط الحصول على رخصة منفصلة من Meta إذا تجاوز منتج تابع 700 مليون مستخدم نشط شهريًا. على من ينشر Idefics3 تجاريًا على نطاق واسع قراءة شروط رخصة Llama 3.1 من Meta مباشرة، وليس فقط علامة Apache-2.0 في مستودع Idefics3.',
          '**Idefics الأصلي هو الأكثر تقييدًا.** تحمل قاعدته LLaMA(1) رخصة Meta الأصلية الخاصة بالأبحاث فقط وغير التجارية، ما يجعل الاستخدام التجاري للنموذج الكامل 9B/80B غير واضح قانونيًا في أفضل الأحوال وغير متاح في أسوئها — حتى لو كانت أوزان مُرمّز الرؤية والوصل مرخصة بشكل منفصل تحت MIT.',
        ],
        faqs: [
          {
            q: 'هل Idefics مجاني للاستخدام التجاري؟',
            a: 'يعتمد ذلك على الجيل. Idefics2 خاضع بالكامل لرخصة Apache-2.0 دون قيود إضافية. مستودع Idefics3 نفسه برخصة Apache-2.0، لكن قاعدته Llama-3.1-8B-Instruct تحمل شروط رخصة Llama 3.1 المجتمعية من Meta، بما في ذلك شرط ترخيص منفصل فوق 700 مليون مستخدم نشط شهريًا. يحمل Idefics الأصلي قيدًا للأبحاث فقط وغير تجاري من قاعدته LLaMA(1).',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: 'مثال استخدام حقيقي: مكتبة Transformers',
        content: [
          'يُستخدم Idefics3 عبر صنفي `AutoModelForVision2Seq` و`AutoProcessor` من Hugging Face Transformers، الموثقين في [وثائق نموذج Idefics3 الخاصة بـ Transformers](https://huggingface.co/docs/transformers/en/model_doc/idefics3). يلزم إصدار Transformers 4.46 أو أحدث.',
        ],
        codeBlock: `# يتطلب transformers >= 4.46 (وفق وثائق نموذج Idefics3 من Hugging Face)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: 'يعكس هذا المثال النمط الموثق في بطاقة نموذج Idefics3 نفسها على HuggingFace وفي وثائق Idefics3 الخاصة بـ Transformers — تحقق من الإصدار الحالي لهذه الصفحات قبل برمجة تكامل إنتاجي، لأن واجهة Transformers قد تتطور بين الإصدارات.',
        items: [
          '**لا يوجد اليوم مسار عبر Ollama أو llama.cpp.** يعمل Idefics عبر Transformers (أو خوادم استدلال متوافقة مثل Text Generation Inference)، وليس عبر مُشغّلات قائمة على GGUF.',
          '**تقليل معامل دقة الصورة يمكن أن يخفض استهلاك ذاكرة GPU.** توثق بطاقات نماذج Idefics2/3 تقليل عدد أجزاء الصورة الفرعية المعالجة (يُشار إليه بـ `N` في وثائق Idefics3) كوسيلة لمقايضة بعض الدقة مقابل VRAM أقل.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'متطلبات VRAM والعتاد',
        content: [
          'يُعد Idefics2 وIdefics3 أثقل بشكل ملحوظ من نقاط تفتيش LLaVA أو MiniCPM-V بحجم مماثل، ويرجع ذلك إلى حد كبير إلى طريقة معالجتهما لدقة الصورة. تأتي هذه الأرقام مباشرة من بطاقة نموذج Idefics2 نفسه، التي توثق نطاق VRAM الخاص به صراحة؛ ومن المتوقع أن يكون Idefics3 (بنفس عدد المعلمات 8B ونفس مُرمّز الرؤية) مشابهًا، رغم أن PromptQuorum لم يجد جدول VRAM منشورًا بنفس التفصيل خصيصًا لـ Idefics3.',
        ],
        columns: ['الإعداد', 'VRAM تقريبي', 'ملاحظات'],
        rows: [
          { 'الإعداد': 'float16 + flash-attention', 'VRAM تقريبي': '~18-20 غيغابايت', 'ملاحظات': 'موثق في بطاقة نموذج Idefics2 كإعداد قياسي' },
          { 'الإعداد': 'بدون تحسينات', 'VRAM تقريبي': 'حتى ~55 غيغابايت في الذروة', 'ملاحظات': 'الحد الأعلى في بطاقة نموذج Idefics2 للاستدلال غير المُحسَّن' },
          { 'الإعداد': 'تكميم قوي', 'VRAM تقريبي': '~6-7 غيغابايت', 'ملاحظات': 'الحد الأدنى الموثق في بطاقة نموذج Idefics2؛ توقع مقايضة في الدقة' },
          { 'الإعداد': 'LLaVA 7B (للمقارنة)', 'VRAM تقريبي': '~6-8 غيغابايت', 'ملاحظات': 'راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم يُجرِ PromptQuorum اختبارات عتاد خاصة به لهذا المقال؛ هذه الأرقام مأخوذة من بطاقة نموذج Idefics2 المنشورة. Idefics فعليًا أثقل من LLaVA 7B أو MiniCPM-V عند مستويات قدرة مماثلة — كن صريحًا مع نفسك بشأن VRAM المتاح قبل اختياره لنشر محدود الموارد.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له Idefics',
        content: [
          'Idefics3 نموذج رؤية-لغة مفتوح قادر، لكنه الخيار الخطأ في الحالات التالية:',
        ],
        items: [
          '**الإعدادات المحلية محدودة الموارد.** باستهلاك نحو 18-20 غيغابايت من VRAM في إعداده القياسي float16، يحتاج Idefics2/3 ذاكرة GPU أكثر بشكل ملحوظ من LLaVA 7B (~6-8 غيغابايت) أو MiniCPM-V (~5.5 غيغابايت). إذا كانت ميزانية العتاد لديك بطاقة رسوميات استهلاكية واحدة بـ 8 غيغابايت من VRAM أو أقل، فإن Idefics ليس خيارًا واقعيًا دون تكميم قوي وقبول مقايضة في الدقة.',
          '**تطبيقات الوقت الفعلي أو ذات زمن الاستجابة المنخفض.** نموذج رؤية-لغة بحجم 8B معلمة يعالج أجزاء صورة فرعية متعددة لكل إدخال لم يُبنَ لأسرع وقت استجابة ممكن. إذا كانت الأولوية للزمن، فسيستجيب نموذج أصغر مثل Moondream (1.8B) بسرعة أكبر، مع قدرة أقل.',
          '**سير عمل مباشر مع Ollama أو llama.cpp.** لا يُعبّأ Idefics حاليًا في مكتبة Ollama، ولتحويل GGUF مشكلات توافق مفتوحة وغير محلولة تُتابع على GitHub الخاص بـ Ollama نفسه. إذا كان سير عملك يعتمد على Ollama تحديدًا، راجع [دليل نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review) من PromptQuorum للنماذج القابلة للتنزيل فعليًا اليوم.',
          '**افتراض رخصة واحدة موحدة عبر الإصدارات.** التعامل مع "Idefics" كمنتج واحد برخصة واحدة خطأ — تحقق من الجيل الذي تنشره واقرأ شروط الترخيص الخاصة بذلك النموذج تحديدًا، خصوصًا التزامات رخصة Llama 3.1 المجتمعية لـ Idefics3 على نطاق واسع.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'البدائل والمنافسون',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[LLaVA](/ar/power-local-llm/llava-review)',
            'الأنسب لـ': 'دعم أدوات أوسع، بما في ذلك التعبئة لـ Ollama وllama.cpp؛ بصمة VRAM أخف عند 7B',
            'الرخصة': 'Apache-2.0 (الكود)؛ ويعتمد على النموذج الأساسي بالنسبة لنقاط التفتيش',
          },
          {
            'الأداة': '[نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review)',
            'الأنسب لـ': 'أبسط إعداد محلي عبر `ollama pull`/`ollama run`؛ لا يندرج Idefics ضمنها حتى وقت هذه المراجعة',
            'الرخصة': 'تختلف حسب النموذج',
          },
          {
            'الأداة': 'MLC Chat',
            'الأنسب لـ': 'نشر على الجهاز عبر منصات متعددة؛ مركّز بشكل أساسي على النص حتى وقت هذه المراجعة — تحقق من دعم الرؤية الحالي قبل الاعتماد عليه',
            'الرخصة': 'Apache-2.0',
          },
          {
            'الأداة': 'واجهات VLM السحابية (GPT-4o، Claude، رؤية Gemini)',
            'الأنسب لـ': 'أعلى قدرة متعددة الوسائط متاحة، دون الحاجة إلى عتاد أو إعداد محلي',
            'الرخصة': 'احتكارية (API مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Idefics؟',
            a: 'Idefics عائلة من نماذج الرؤية-اللغة المفتوحة طورها فريق M4 التابع لـ HuggingFace، صُممت صراحةً كنسخة مفتوحة من Flamingo الخاص بـ DeepMind. توجد ثلاثة أجيال: Idefics الأصلي (2023، 9B/80B)، وIdefics2 (أبريل 2024، 8B)، وIdefics3 (أغسطس 2024، 8B).',
          },
          {
            q: 'أي إصدار من Idefics يجب أن أستخدم — Idefics أم Idefics2 أم Idefics3؟',
            a: 'Idefics3 لمعظم المهام اليوم — فهو يملك أقوى تعرف ضوئي وفهم مستندات بين الثلاثة. يظل Idefics2 مناسبًا إذا كنت تحتاج تحديدًا إلى مكدس Apache-2.0 كامل دون شروط مشتقة من Llama. أما Idefics الأصلي فهو متجاوز إلى حد كبير ويحمل قيد ترخيص للأبحاث فقط.',
          },
          {
            q: 'هل Idefics مفتوح المصدر بالكامل ومجاني للاستخدام التجاري؟',
            a: 'يعتمد ذلك على الجيل. Idefics2 خاضع بالكامل لرخصة Apache-2.0. مستودع Idefics3 موسوم بـ Apache-2.0، لكن قاعدته Llama-3.1-8B-Instruct تحمل شروط رخصة Llama 3.1 المجتمعية من Meta، بما في ذلك التزامات فوق 700 مليون مستخدم نشط شهريًا. يحمل Idefics الأصلي قيدًا للأبحاث فقط وغير تجاري من قاعدته LLaMA(1).',
          },
          {
            q: 'كم من VRAM يحتاج Idefics؟',
            a: 'يحتاج Idefics2 (وعلى الأرجح Idefics3، بنفس عدد المعلمات 8B ونفس مُرمّز الرؤية) نحو 18-20 غيغابايت من VRAM في الإعداد القياسي float16 مع flash-attention الموثق في بطاقة نموذج Idefics2، أو 6-7 غيغابايت فقط مع تكميم قوي ومقايضة في الدقة. هذا أثقل بشكل ملحوظ من LLaVA 7B أو MiniCPM-V.',
          },
          {
            q: 'هل يمكنني تشغيل Idefics عبر Ollama؟',
            a: 'ليس حتى وقت هذه المراجعة. لا يُعبّأ Idefics حاليًا في مكتبة نماذج Ollama، ولتحويل GGUF مشكلات توافق مفتوحة تُتابع على مستودع GitHub الخاص بـ Ollama نفسه. يعمل Idefics بدلًا من ذلك عبر Hugging Face Transformers.',
          },
          {
            q: 'هل يستند Idefics إلى Flamingo الخاص بـ DeepMind؟',
            a: 'يُوصف Idefics صراحةً في بطاقة نموذجه الخاصة بأنه "نسخة مفتوحة الوصول من Flamingo، وهو نموذج رؤية-لغة مغلق المصدر طورته DeepMind." وIdefics2 وIdefics3 خلفان بمعمارية مستقلة من الفريق نفسه، M4 التابع لـ HuggingFace.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Idefics عائلة نماذج رؤية-لغة مفتوحة مفيدة فعليًا، ويصمد Idefics3 تحديدًا جيدًا في أعمال التعرف الضوئي المكثفة على المستندات والاستدلال متعدد الصور حيث تكون بصمته من نحو 18-20 غيغابايت من VRAM في المتناول. غير أنه ليس بديلًا مباشرًا لنماذج الرؤية المحلية الأخف: فهو يحتاج ذاكرة GPU أكثر بشكل ملحوظ من LLaVA 7B أو MiniCPM-V، ولا توجد له تعبئة لـ Ollama أو llama.cpp حتى وقت هذه المراجعة، ووضعه في الترخيص يختلف فعليًا حسب الجيل — فمكدس Apache-2.0 النظيف في Idefics2 اقتراح قانوني مختلف عن التزامات رخصة Llama 3.1 المجتمعية في Idefics3. اختر Idefics3 لفهم المستندات وجودة التعرف الضوئي عندما تتوفر لديك ذاكرة GPU كافية؛ واختر Idefics2 تحديدًا إذا كان مكدس Apache-2.0 الخالص مهمًا؛ واختر LLaVA، عبر [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum، أو أحد النماذج في [دليل نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review)، لعتاد محلي أخف أو سير عمل قائم على Ollama.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[بطاقة نموذج Idefics-80B](https://huggingface.co/HuggingFaceM4/idefics-80b) — بيان نسخة Flamingo، بنية الترخيص، أحجام النماذج.',
          '[بطاقة نموذج Idefics2-8b](https://huggingface.co/HuggingFaceM4/idefics2-8b) — النماذج الأساسية، رخصة Apache-2.0، نطاق VRAM الموثق.',
          '[بطاقة نموذج Idefics3-8B-Llama3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — النموذج الأساسي، علامة الترخيص، تفاصيل الإصدار.',
          '[وثائق Transformers الخاصة بـ Idefics3](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — مثال الاستخدام، الحد الأدنى لإصدار Transformers.',
          '[رخصة Meta Llama 3.1 المجتمعية](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — شروط الترخيص التي ترثها القاعدة اللغوية لـ Idefics3.',
          '[طلب GitHub رقم #2183 الخاص بـ Ollama](https://github.com/ollama/ollama/issues/2183) و[الطلب رقم #3677](https://github.com/ollama/ollama/issues/3677) — طلبات ميزات مفتوحة تؤكد أن Idefics غير معبأ حاليًا في مكتبة Ollama.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LLaVA (2026)](/ar/power-local-llm/llava-review) — نموذج رؤية-لغة مفتوح مماثل بدعم أدوات أوسع.',
          '[نماذج رؤية Ollama (2026)](/ar/power-local-llm/ollama-vision-models-review) — أي نماذج الرؤية القابلة للتنزيل فعليًا عبر Ollama اليوم.',
          '[نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وQwen3-VL وإعداد Ollama متعدد الوسائط](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — مقارنة أوسع حسب المهمة بين نماذج الرؤية المحلية الحالية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Idefics (2026): نماذج الرؤية-اللغة المفتوحة من HuggingFace، بتقييم صريح',
      description:
        'مراجعة Idefics 2026: عائلة نماذج الرؤية-اللغة المفتوحة من HuggingFace. مقارنة صريحة بين Idefics وIdefics2 وIdefics3 — فروق الترخيص الدقيقة، متطلبات VRAM الفعلية، والإصدار الذي يُستخدم اليوم.',
      url: 'https://promptquorum.com/ar/power-local-llm/idefics-review',
      inLanguage: 'ar',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون وباحثون يقيّمون نماذج الرؤية-اللغة المفتوحة' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة Idefics (2026)', item: 'https://promptquorum.com/ar/power-local-llm/idefics-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-zh.webp',
    title: 'Idefics评测(2026):HuggingFace开源视觉语言模型,诚实评估',
    seoTitle: 'Idefics评测2026:Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics是HuggingFace M4团队打造的一系列开源视觉语言模型,明确定位为对DeepMind Flamingo的开放复现。该系列包含三代——原始Idefics、Idefics2和Idefics3——它们并不能互相替代:使用不同的基座语言模型,实际许可证也不同,硬件需求差异也很大。本评测涵盖真实历史、今天究竟该用哪个版本、诚实的VRAM数据,以及Idefics不适合的场景,尤其是资源有限的本地环境。若想深入了解一个用户基础更广的类似开源视觉语言模型,请参阅PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review);若想专门通过Ollama运行视觉模型(Idefics目前并未为其打包),请参阅[Ollama视觉模型指南](/zh/power-local-llm/ollama-vision-models-review)。',
    metaDescription:
      'Idefics评测2026:HuggingFace的开源视觉语言模型系列。诚实比较Idefics与Idefics2与Idefics3——许可证细节、真实VRAM需求,以及今天该用哪个版本。',
    twitterDescription:
      'Idefics评测2026:HuggingFace M4的开源视觉语言模型系列,明确复现自DeepMind的Flamingo。Idefics vs Idefics2 vs Idefics3——许可证细节、诚实的VRAM数据,以及实际该用哪个。',
    audience:
      '正在评估开源视觉语言模型的开发者和研究人员,希望获得对Idefics三代模型的诚实比较,包括许可证与硬件方面的权衡,而非营销说辞。',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'idefics评测',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'idefics许可证',
      'idefics vram需求',
      'huggingface视觉语言模型',
      'idefics vs llava',
      'flamingo开源复现',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics是HuggingFace M4团队打造的一系列开源视觉语言模型,明确定位为对DeepMind Flamingo的开放复现。** 目前共有三代:原始Idefics(9B/80B,2023年)、Idefics2(8B,2024年4月)和Idefics3(8B,2024年8月)。就今天的实际使用而言,大多数任务的当前推荐是Idefics3——相较于Idefics2,它在OCR、文档理解和视觉推理方面有实质性提升,而Idefics2本身在性能相当的情况下比原始Idefics"小了10倍"。许可证方面有细微差别:Idefics2的Mistral-7B-v0.1基座让整个技术栈保持在Apache-2.0之下,而Idefics3的Llama-3.1-8B-Instruct基座除了模型仓库本身的Apache-2.0标签外,还附带了Meta的Llama 3.1社区许可条款。截至本次评测,Idefics尚未被打包进[Ollama的模型库](https://ollama.com/library)——其GGUF转换存在尚未解决的兼容性问题。若想了解工具生态更完善的类似开源VLM,请参阅PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)。',
    quickAnswerTop: {
      en: {
        question: 'Idefics是什么?我究竟应该使用Idefics、Idefics2还是Idefics3?',
        answer:
          'Idefics是HuggingFace M4打造的一系列开源视觉语言模型,明确定位为对DeepMind Flamingo的开放复现。今天大多数任务应使用Idefics3(8B,于2024年8月22日发布)——它是三者中OCR、文档理解和视觉推理能力最强的当前一代。如果你的使用场景特别看重不带Llama衍生条款的纯Apache-2.0许可证,Idefics2(8B,2024年4月)仍然适用,因为它的基座是Mistral-7B-v0.1而非Llama 3.1。原始Idefics(9B/80B,2023年)已在很大程度上被取代——在性能相当的情况下体积是Idefics2的10倍,并且继承了原始LLaMA发布时的仅限研究许可限制。三者目前都未被打包进Ollama的模型库。',
        bullets: [
          '存在三代模型:Idefics(2023年,9B/80B)、Idefics2(2024年4月,8B)、Idefics3(2024年8月,8B)——已在各自的HuggingFace模型卡上核实。',
          'Idefics3是目前大多数任务的推荐版本:三者中OCR和文档理解能力最强。',
          '许可证细节:Idefics2(Mistral-7B基座)完全采用Apache-2.0;Idefics3(Llama-3.1-8B-Instruct基座)除仓库的Apache-2.0标签外,还附带Meta的Llama 3.1社区许可条款。',
          '原始Idefics因其LLaMA(1)基座而带有仅限研究的许可限制,已在很大程度上被取代。',
          'VRAM:Idefics2/3在使用flash-attention的float16精度下大约需要18-20GB,若采用激进量化则低至6-7GB——比LLaVA 7B或MiniCPM-V更重。',
          'Idefics目前未被打包进Ollama的模型库;GitHub上有未解决的issue在跟踪GGUF转换的困难。',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '历史:HuggingFace M4与Flamingo复现', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3:究竟发生了哪些变化', anchor: 'versions' },
      { label: '许可证细节:并非简单的Apache-2.0', anchor: 'license' },
      { label: '真实使用示例:Transformers库', anchor: 'usage-example' },
      { label: 'VRAM与硬件要求', anchor: 'vram-guidance' },
      { label: 'Idefics不适合做什么', anchor: 'limitations' },
      { label: '替代方案与竞品', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics是HuggingFace M4对DeepMind Flamingo的开源复现,目前已发展到第三代(Idefics3,8B,2024年8月),其三个版本在许可证和VRAM需求上有明显差异,且目前尚未被打包进Ollama的模型库。',
          },
          {
            type: 'plain-terms',
            text: 'Idefics是HuggingFace打造的一系列AI模型,能够识别图像并回答关于图像的问题,类似于LLaVA——本评测说明了三个版本中哪个才是实际该用的、它对GPU显存的消耗,以及它的不足之处。',
          },
        ],
        items: [
          '存在三代模型:Idefics(2023年)、Idefics2(2024年4月)、Idefics3(2024年8月)——每一代都是独立的模型,而非简单的版本升级。',
          'Idefics3是目前大多数任务的推荐版本;相较于Idefics2,它在OCR和文档理解方面有实质性提升。',
          '许可证在各代之间存在细微差别:原始Idefics有仅限研究的限制;Idefics2完全采用Apache-2.0(Mistral-7B基座);Idefics3除了Apache-2.0仓库标签外,还附带Llama 3.1社区许可条款(Llama-3.1-8B-Instruct基座)。',
          'VRAM:Idefics2/3在float16下大约需要18-20GB,激进量化下为6-7GB——比LLaVA 7B或MiniCPM-V更重。',
          '截至本次评测,尚未被打包进Ollama的模型库;GitHub上有未解决的issue在跟踪GGUF转换的困难。',
          '最适合:拥有足够GPU显存的文档密集型OCR和多图推理任务,而非资源有限或实时性要求高的本地环境。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum直接依据idefics-80b、idefics2-8b和Idefics3-8B-Llama3的HuggingFace模型卡,以及Ollama的模型库和GitHub issue跟踪系统核实了这些事实——具体链接见资料来源部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:HuggingFace M4与Flamingo复现',
        content: [
          '**原始[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)的模型卡明确指出,它是"对Flamingo的开放访问复现,而Flamingo是DeepMind开发的闭源视觉语言模型。"** 该模型由HuggingFace M4团队于2023年发布,有9B和80B两种参数规模,将视觉编码器与LLaMA(1)语言模型基座结合。',
          '**原始Idefics采用的是混合许可证,而非单一的宽松许可证。** 其视觉编码器和新训练的连接参数以MIT协议发布,但LLaMA(1)语言模型基座要求遵守Meta针对LLaMA的原始许可证——仅限研究、非商用。这使得原始Idefics在大多数情况下都不适合商用,无论技术栈中部分组件是否标注了MIT。',
          '**大约于2024年4月发布的Idefics2(8B)**,用[Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1)取代了LLaMA(1)基座,并搭配[SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384)视觉编码器。由于两个基座模型均为Apache-2.0协议,Idefics2自己的[模型卡](https://huggingface.co/HuggingFaceM4/idefics2-8b)指出整个模型为Apache-2.0协议——解决了原始Idefics的许可证问题。HuggingFace自己也表示,Idefics2以约十分之一的体积达到了与Idefics-80B相当的性能,且OCR和文档理解能力明显更强。',
          '**于2024年8月22日发布的Idefics3(8B)**保留了SigLIP视觉编码器,但将语言基座换成了[Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)。其自己的[模型卡](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)显示,相较于Idefics2有实质性提升,尤其是在文档理解、OCR和视觉推理方面。它在Transformers 4.46版本中被加入Hugging Face Transformers库。',
        ],
        faqs: [
          {
            q: 'Idefics是DeepMind Flamingo的复现吗?',
            a: '是的。原始Idefics的模型卡明确将其描述为"对Flamingo的开放访问复现,而Flamingo是DeepMind开发的闭源视觉语言模型。"Idefics2和Idefics3是HuggingFace M4在同一血统上独立设计架构的后续版本。',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3:究竟发生了哪些变化',
        content: [
          '这三代是拥有不同基础架构的独立模型——而非一个模型的逐步版本升级。以下是依据每个模型自己的HuggingFace卡核实后的真实差异。',
        ],
        itemHeadings: true,
        columns: ['版本', '发布时间', '基座', '备注'],
        rows: [
          {
            '版本': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)(9B/80B)',
            '发布时间': '2023年',
            '基座': 'LLaMA(1) + 自研视觉编码器',
            '备注': '继承自LLaMA(1)的仅限研究许可限制;已在很大程度上被取代',
          },
          {
            '版本': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b)(8B)',
            '发布时间': '2024年4月',
            '基座': 'Mistral-7B-v0.1 + SigLIP',
            '备注': '完全采用Apache-2.0;以十分之一的体积达到Idefics-80B的水平',
          },
          {
            '版本': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(8B)',
            '发布时间': '2024年8月22日',
            '基座': 'Llama-3.1-8B-Instruct + SigLIP',
            '备注': '三者中OCR/文档理解能力最强;适用Llama 3.1许可条款',
          },
        ],
        note: '截至本次评测,PromptQuorum未发现任何经公开确认的"Idefics4"。Idefics3是最新一代,也是大多数任务目前的推荐版本。',
      },
      license: {
        id: 'license',
        title: '许可证细节:并非简单的Apache-2.0',
        content: [
          'PromptQuorum的目录条目将Idefics的许可证标注为"Apache 2.0"——这对模型仓库和代码本身而言是准确的,但对实际的许可证情况而言并不完整,这与LLaVA的Apache-2.0代码许可证并不会自动延伸到每个基座模型的权重文件是同样的道理。',
          '**Idefics2是最清晰的情况:** 其Mistral-7B-v0.1语言基座和SigLIP视觉编码器都是Apache-2.0协议,因此整个模型技术栈确实是Apache-2.0,没有附加条款。',
          '**Idefics3的情况更复杂。** 其自己的HuggingFace仓库标注为Apache-2.0,但其语言基座Meta-Llama-3.1-8B-Instruct是在Meta的Llama 3.1社区许可下发布的——该许可包含可接受使用政策,并有一条条款规定:若下游产品的月活跃用户超过7亿,则需向Meta单独申请许可。任何计划大规模商业部署Idefics3的人,都应直接阅读Meta的Llama 3.1许可条款,而不能只看Idefics3仓库上的Apache-2.0标签。',
          '**原始Idefics的限制最为严格。** 其LLaMA(1)基座带有Meta原始的仅限研究、非商用许可证,这使得完整的9B/80B模型的商业使用在法律上最好也是模糊不清,最坏则完全不可行——即便视觉编码器和连接层权重是单独以MIT协议授权的。',
        ],
        faqs: [
          {
            q: 'Idefics可以免费商用吗?',
            a: '这取决于具体的代际。Idefics2完全采用Apache-2.0,没有附加限制。Idefics3自己的仓库标注为Apache-2.0,但其Llama-3.1-8B-Instruct基座带有Meta的Llama 3.1社区许可条款,包括月活跃用户超过7亿时需单独申请许可的要求。原始Idefics因其LLaMA(1)基座而带有仅限研究、非商用的限制。',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: '真实使用示例:Transformers库',
        content: [
          'Idefics3通过Hugging Face Transformers的`AutoModelForVision2Seq`和`AutoProcessor`类使用,相关文档见[Transformers的Idefics3模型文档](https://huggingface.co/docs/transformers/en/model_doc/idefics3)。需要Transformers 4.46或更高版本。',
        ],
        codeBlock: `# 需要 transformers >= 4.46 (依据Hugging Face的Idefics3模型文档)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: '此示例反映了Idefics3自己的HuggingFace模型卡以及Transformers的Idefics3文档中所记录的模式——由于Transformers的API可能在不同版本间发生变化,在将其编写进生产集成脚本之前,请对照这些页面的当前版本进行核实。',
        items: [
          '**目前不存在Ollama或llama.cpp的运行路径。** Idefics通过Transformers(或Text Generation Inference等兼容推理服务器)运行,而非基于GGUF的运行工具。',
          '**降低图像分辨率参数可以减少GPU显存占用。** Idefics2/3的模型卡中记录了减少处理的图像子块数量(在Idefics3文档中称为`N`)作为以部分精度换取更低VRAM占用的方法。',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM与硬件要求',
        content: [
          'Idefics2和Idefics3明显比同等规模的LLaVA或MiniCPM-V模型权重更重,这在很大程度上是因为它们处理图像分辨率的方式。以下数据直接来自Idefics2自己的模型卡,该卡明确记录了其VRAM范围;由于Idefics3拥有相同的8B参数量和相同的视觉编码器,预计与之类似,不过PromptQuorum并未找到专门针对Idefics3的、同样详细的已发布VRAM表格。',
        ],
        columns: ['配置', '大致VRAM', '备注'],
        rows: [
          { '配置': 'float16 + flash-attention', '大致VRAM': '约18-20GB', '备注': 'Idefics2模型卡中记录的标准配置' },
          { '配置': '无优化', '大致VRAM': '峰值最高约55GB', '备注': 'Idefics2模型卡中未优化推理情况下的上限' },
          { '配置': '激进量化', '大致VRAM': '约6-7GB', '备注': 'Idefics2模型卡中记录的下限;预计会有精度损失' },
          { '配置': 'LLaVA 7B(用于比较)', '大致VRAM': '约6-8GB', '备注': '参见PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)' },
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是大致的下载/权重体积数据,并非实测的VRAM基准数据——PromptQuorum并未为本文进行自己的硬件测试。在相当的能力等级上,Idefics确实比LLaVA 7B或MiniCPM-V更重——在为资源有限的部署选择它之前,请如实评估自己可用的VRAM。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Idefics不适合做什么',
        content: [
          'Idefics3是一款能力出色的开源视觉语言模型,但在以下情况下并非合适的选择:',
        ],
        items: [
          '**资源有限的本地环境。** 在标准float16配置下大约需要18-20GB VRAM,Idefics2/3所需的GPU显存明显多于LLaVA 7B(约6-8GB)或MiniCPM-V(约5.5GB)。如果你的硬件预算只是一块8GB VRAM或更小的消费级GPU,若不接受激进量化和相应的精度损失,Idefics并非现实可行的选择。',
          '**实时或低延迟应用。** 一个每次输入需要处理多个图像子块的8B参数视觉语言模型,并非为最快响应时间而设计。如果延迟是首要考量,像Moondream(1.8B)这样更小的模型响应更快,但能力也更弱。',
          '**直接对接Ollama或llama.cpp的工作流。** Idefics目前未被打包进Ollama的模型库,其GGUF转换在Ollama自己的GitHub上存在尚未解决的开放兼容性问题。如果你的工作流特别依赖Ollama,请参阅PromptQuorum的[Ollama视觉模型指南](/zh/power-local-llm/ollama-vision-models-review),了解今天真正可以下载的模型。',
          '**假设各版本使用统一的单一许可证。** 把"Idefics"当作使用单一许可证的单一产品来看待是一个错误——请确认你部署的是哪一代,并阅读该模型具体的许可条款,尤其是Idefics3在大规模使用时的Llama 3.1社区许可义务。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '替代方案与竞品',
        itemHeadings: true,
        columns: ['工具', '最适合场景', '许可'],
        rows: [
          {
            '工具': '[LLaVA](/zh/power-local-llm/llava-review)',
            '最适合场景': '更广泛的工具支持,包括Ollama和llama.cpp的打包;7B规模下VRAM占用更轻',
            '许可': 'Apache-2.0(代码);权重文件的许可取决于基座模型',
          },
          {
            '工具': '[Ollama的视觉模型](/zh/power-local-llm/ollama-vision-models-review)',
            '最适合场景': '通过`ollama pull`/`ollama run`实现最简单的本地配置;截至本次评测,Idefics并不在其中',
            '许可': '因模型而异',
          },
          {
            '工具': 'MLC Chat',
            '最适合场景': '跨平台端侧部署;截至本次评测主要以文本为主——在依赖其完成视觉任务前请核实当前的视觉支持情况',
            '许可': 'Apache-2.0',
          },
          {
            '工具': '云端VLM API(GPT-4o、Claude、Gemini视觉)',
            '最适合场景': '可获得的最高多模态能力,无需本地硬件或配置',
            '许可': '专有(付费API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Idefics是什么?',
            a: 'Idefics是HuggingFace M4团队打造的一系列开源视觉语言模型,明确定位为对DeepMind Flamingo的开放复现。它有三代:原始Idefics(2023年,9B/80B)、Idefics2(2024年4月,8B)和Idefics3(2024年8月,8B)。',
          },
          {
            q: '我应该使用哪个版本的Idefics——Idefics、Idefics2还是Idefics3?',
            a: '今天大多数任务应使用Idefics3——它在三者中OCR和文档理解能力最强。如果你特别需要一个不含Llama衍生条款的完全Apache-2.0技术栈,Idefics2仍然适用。原始Idefics已在很大程度上被取代,并带有仅限研究的许可限制。',
          },
          {
            q: 'Idefics是否完全开源、可免费商用?',
            a: '这取决于具体的代际。Idefics2完全采用Apache-2.0。Idefics3的仓库标注为Apache-2.0,但其Llama-3.1-8B-Instruct基座带有Meta的Llama 3.1社区许可条款,包括月活跃用户超过7亿时的相关义务。原始Idefics因其LLaMA(1)基座而带有仅限研究、非商用的限制。',
          },
          {
            q: 'Idefics需要多少VRAM?',
            a: 'Idefics2(以及很可能拥有相同8B参数量和相同视觉编码器的Idefics3)在Idefics2模型卡中记录的标准float16加flash-attention配置下,大约需要18-20GB VRAM,若采用激进量化并接受精度损失,则可低至6-7GB。这明显比LLaVA 7B或MiniCPM-V更重。',
          },
          {
            q: '我可以通过Ollama运行Idefics吗?',
            a: '截至本次评测还不能。Idefics目前未被打包进Ollama的模型库,其GGUF转换在Ollama自己的GitHub仓库中存在尚未解决的兼容性问题。Idefics目前只能通过Hugging Face Transformers运行。',
          },
          {
            q: 'Idefics是基于DeepMind的Flamingo吗?',
            a: 'Idefics在其自己的模型卡中被明确描述为"对Flamingo的开放访问复现,而Flamingo是DeepMind开发的闭源视觉语言模型。"Idefics2和Idefics3是由同一个HuggingFace M4团队独立设计架构的后续版本。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Idefics是一系列真正有用的开源视觉语言模型,其中Idefics3在文档密集型OCR和多图推理工作中表现尤为出色,前提是能够承担其大约18-20GB的VRAM占用。不过,它并不能直接替代更轻量的本地视觉模型:它所需的GPU显存明显多于LLaVA 7B或MiniCPM-V,截至本次评测尚无Ollama或llama.cpp的打包支持,并且其许可证情况确实因代际而异——Idefics2简洁的Apache-2.0技术栈,与Idefics3所附带的Llama 3.1社区许可义务,在法律上是完全不同的两回事。当你有足够的GPU显存时,选择Idefics3以获得文档理解和OCR质量;当纯粹的Apache-2.0技术栈很重要时,特别选择Idefics2;而对于更轻量的本地硬件或基于Ollama的工作流,则可通过PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)选择LLaVA,或在[Ollama视觉模型指南](/zh/power-local-llm/ollama-vision-models-review)中选择其中一个模型。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Idefics-80B模型卡](https://huggingface.co/HuggingFaceM4/idefics-80b) —— Flamingo复现声明、许可证结构、模型规模。',
          '[Idefics2-8b模型卡](https://huggingface.co/HuggingFaceM4/idefics2-8b) —— 基座模型、Apache-2.0许可证、记录的VRAM范围。',
          '[Idefics3-8B-Llama3模型卡](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) —— 基座模型、许可证标签、发布细节。',
          '[Idefics3的Transformers文档](https://huggingface.co/docs/transformers/en/model_doc/idefics3) —— 使用示例、Transformers最低版本要求。',
          '[Meta Llama 3.1社区许可证](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) —— Idefics3语言基座所继承的许可条款。',
          '[Ollama GitHub issue #2183](https://github.com/ollama/ollama/issues/2183) 和 [issue #3677](https://github.com/ollama/ollama/issues/3677) —— 确认Idefics目前未被打包进Ollama模型库的开放功能请求。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LLaVA评测(2026)](/zh/power-local-llm/llava-review) —— 一款工具生态更完善的类似开源视觉语言模型。',
          '[Ollama视觉模型(2026)](/zh/power-local-llm/ollama-vision-models-review) —— 今天通过Ollama真正可以下载的视觉模型。',
          '[本地视觉模型2026:LLaVA、Llama 3.2 Vision、Qwen3-VL与Ollama多模态配置](/zh/power-local-llm/local-vision-models-llava-ollama-2026) —— 对当前本地视觉模型更广泛的按任务比较。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Idefics评测(2026):HuggingFace开源视觉语言模型,诚实评估',
      description:
        'Idefics评测2026:HuggingFace的开源视觉语言模型系列。诚实比较Idefics与Idefics2与Idefics3——许可证细节、真实VRAM需求,以及今天该用哪个版本。',
      url: 'https://promptquorum.com/zh/power-local-llm/idefics-review',
      inLanguage: 'zh',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估开源视觉语言模型的开发者和研究人员' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Idefics评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/idefics-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/idefics-review-hero-ko.webp',
    title: 'Idefics 리뷰(2026): HuggingFace의 오픈 비전-언어 모델, 솔직하게 평가하다',
    seoTitle: 'Idefics 리뷰 2026: Idefics vs Idefics2 vs Idefics3',
    intro:
      'Idefics는 HuggingFace M4 팀이 만든 오픈 비전-언어 모델 계열로, DeepMind의 Flamingo를 오픈소스로 재현한 것임을 명확히 표방한다. 이 계열에는 세 세대 — 원조 Idefics, Idefics2, Idefics3 — 가 있으며 서로 호환되지 않는다: 서로 다른 베이스 언어 모델을 사용하고, 실질적으로 다른 라이선스를 가지며, 하드웨어 요구 사항도 크게 다르다. 이 리뷰는 실제 역사, 오늘날 실제로 사용해야 할 버전, 솔직한 VRAM 수치, 그리고 특히 리소스가 제한된 로컬 환경에서 Idefics가 적합하지 않은 부분을 다룬다. 사용자 기반이 더 넓은 비슷한 오픈 비전-언어 모델을 알고 싶다면 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를, 특히 Ollama를 통해 비전 모델을 실행하는 방법(Idefics는 현재 여기에 패키징되어 있지 않음)은 [Ollama 비전 모델 가이드](/ko/power-local-llm/ollama-vision-models-review)를 참고하라.',
    metaDescription:
      'Idefics 리뷰 2026: HuggingFace의 오픈 비전-언어 모델 계열. Idefics vs Idefics2 vs Idefics3를 솔직하게 비교 — 라이선스 세부 사항, 실제 VRAM 요구 사항, 오늘 사용해야 할 버전.',
    twitterDescription:
      'Idefics 리뷰 2026: HuggingFace M4의 오픈 비전-언어 모델 계열, DeepMind의 Flamingo를 명시적으로 재현한 것. Idefics vs Idefics2 vs Idefics3 — 라이선스 세부 사항, 솔직한 VRAM 수치, 실제로 사용해야 할 모델.',
    audience:
      '오픈 비전-언어 모델을 평가 중이며, 마케팅 주장이 아니라 라이선스 및 하드웨어 트레이드오프를 포함한 Idefics 세 세대에 대한 솔직한 비교를 원하는 개발자와 연구자.',
    readTime: '11분 소요',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Idefics',
    targetKeywords: [
      'idefics 리뷰',
      'idefics vs idefics2',
      'idefics3 huggingface',
      'idefics 라이선스',
      'idefics vram 요구 사항',
      'huggingface 비전 언어 모델',
      'idefics vs llava',
      'flamingo 오픈 재현',
    ],
    current_models_mentioned: ['Idefics', 'Idefics2', 'Idefics3', 'LLaVA', 'Mistral-7B', 'Llama 3.1', 'SigLIP', 'Flamingo'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Idefics는 HuggingFace M4 팀의 오픈 비전-언어 모델 계열로, DeepMind의 Flamingo를 명시적으로 오픈소스 재현한 것으로 만들어졌다.** 세 세대가 존재한다: 원조 Idefics(9B/80B, 2023년), Idefics2(8B, 2024년 4월), Idefics3(8B, 2024년 8월). 오늘 실제로 사용한다면, 대부분의 작업에는 Idefics3가 현재 권장 사항이다 — Idefics2보다 OCR, 문서 이해, 시각적 추론이 상당히 개선되었으며, Idefics2 자체도 원조 Idefics 대비 비슷한 성능에서 "10배 더 작았다." 라이선스에는 세부 사항이 있다: Idefics2의 Mistral-7B-v0.1 베이스는 전체 스택을 Apache-2.0으로 유지하지만, Idefics3의 Llama-3.1-8B-Instruct 베이스는 모델 저장소 자체의 Apache-2.0 태그 외에 Meta의 Llama 3.1 커뮤니티 라이선스 조건도 함께 가진다. Idefics는 현재 [Ollama의 라이브러리](https://ollama.com/library)에 패키징되어 있지 않다 — GGUF 변환에는 본 리뷰 작성 시점 기준 미해결 호환성 문제가 있다. 도구 지원 범위가 더 넓은 비슷한 오픈 VLM은 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를 참고하라.',
    quickAnswerTop: {
      en: {
        question: 'Idefics란 무엇이며, 실제로 Idefics, Idefics2, Idefics3 중 무엇을 사용해야 하는가?',
        answer:
          'Idefics는 HuggingFace M4의 오픈 비전-언어 모델 계열로, DeepMind의 Flamingo를 명시적으로 오픈소스 재현한 것으로 만들어졌다. 오늘날 대부분의 작업에는 Idefics3(8B, 2024년 8월 22일 출시)를 사용하라 — 셋 중 OCR, 문서 이해, 시각적 추론이 가장 강력한 현재 세대다. Idefics2(8B, 2024년 4월)는 Llama 파생 조건이 없는 순수한 Apache-2.0 라이선스가 사용 사례에 중요하다면 여전히 유효하다. 그 베이스가 Llama 3.1이 아닌 Mistral-7B-v0.1이기 때문이다. 원조 Idefics(9B/80B, 2023년)는 대체로 낡은 버전이다 — Idefics2와 비슷한 성능에서 10배 더 크며, 원본 LLaMA 출시에서 물려받은 연구 전용 라이선스 제한을 가진다. 셋 중 어느 것도 현재 Ollama 라이브러리에 패키징되어 있지 않다.',
        bullets: [
          '세 세대가 존재한다: Idefics(2023년, 9B/80B), Idefics2(2024년 4월, 8B), Idefics3(2024년 8월, 8B) — 각 HuggingFace 모델 카드에서 확인됨.',
          'Idefics3가 대부분의 작업에서 현재 권장 사항: 셋 중 가장 강력한 OCR과 문서 이해 능력.',
          '라이선스 세부 사항: Idefics2(Mistral-7B 베이스)는 완전히 Apache-2.0; Idefics3(Llama-3.1-8B-Instruct 베이스)는 저장소의 Apache-2.0 태그 외에 Meta의 Llama 3.1 커뮤니티 라이선스 조건도 가진다.',
          '원조 Idefics는 LLaMA(1) 베이스로부터 물려받은 연구 전용 라이선스 제한을 가지며 대체로 낡은 버전이다.',
          'VRAM: Idefics2/3는 flash-attention을 사용한 float16에서 약 18-20GB, 공격적인 양자화 시 6-7GB 정도 필요 — LLaVA 7B나 MiniCPM-V보다 무겁다.',
          'Idefics는 현재 Ollama 라이브러리에 패키징되어 있지 않다; GGUF 변환의 어려움을 추적하는 GitHub 이슈가 열려 있다.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: HuggingFace M4와 Flamingo 재현', anchor: 'history' },
      { label: 'Idefics vs Idefics2 vs Idefics3: 실제로 무엇이 바뀌었나', anchor: 'versions' },
      { label: '라이선스 세부 사항: 단순한 Apache-2.0이 아니다', anchor: 'license' },
      { label: '실제 사용 예시: Transformers 라이브러리', anchor: 'usage-example' },
      { label: 'VRAM 및 하드웨어 요구 사항', anchor: 'vram-guidance' },
      { label: 'Idefics가 적합하지 않은 경우', anchor: 'limitations' },
      { label: '대안 및 경쟁 제품', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Idefics는 HuggingFace M4의 DeepMind Flamingo 오픈소스 재현물로, 현재 3세대(Idefics3, 8B, 2024년 8월)에 이르렀으며, 세 버전 간 라이선스와 VRAM 요구 사항이 눈에 띄게 다르고, 현재 Ollama의 모델 라이브러리에는 패키징되어 있지 않다.',
          },
          {
            type: 'plain-terms',
            text: 'Idefics는 HuggingFace가 만든 AI 모델 계열로, LLaVA와 마찬가지로 이미지를 보고 그에 관한 질문에 답할 수 있다 — 이 리뷰는 세 버전 중 실제로 무엇을 써야 하는지, GPU 메모리 비용은 얼마인지, 어디가 부족한지를 설명한다.',
          },
        ],
        items: [
          '세 세대가 존재한다: Idefics(2023년), Idefics2(2024년 4월), Idefics3(2024년 8월) — 각각 별개의 모델이며 단순 업그레이드가 아니다.',
          'Idefics3가 대부분의 작업에서 현재 권장 사항이며, Idefics2 대비 OCR과 문서 이해가 상당히 개선되었다.',
          '라이선스는 세대별로 세부 사항이 다르다: 원조 Idefics는 연구 전용 제한을 가짐; Idefics2는 완전히 Apache-2.0(Mistral-7B 베이스); Idefics3는 Apache-2.0 저장소 태그 외에 Llama 3.1 커뮤니티 라이선스 조건도 가짐(Llama-3.1-8B-Instruct 베이스).',
          'VRAM: Idefics2/3는 float16에서 약 18-20GB, 공격적인 양자화 시 6-7GB — LLaVA 7B나 MiniCPM-V보다 무겁다.',
          '본 리뷰 작성 시점 기준 Ollama 라이브러리에 패키징되어 있지 않다; GGUF 변환의 어려움을 추적하는 GitHub 이슈가 열려 있다.',
          '가장 적합한 용도: 충분한 GPU 메모리를 갖춘 문서 중심의 OCR과 다중 이미지 추론 작업이며, 리소스가 제한되거나 실시간성이 필요한 로컬 환경은 아니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 idefics-80b, idefics2-8b, Idefics3-8B-Llama3의 HuggingFace 모델 카드와 Ollama의 라이브러리 및 GitHub 이슈 트래커를 직접 대조하여 이 사실들을 확인했다 — 정확한 링크는 출처 섹션을 참고하라.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: HuggingFace M4와 Flamingo 재현',
        content: [
          '**원조 [Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)의 모델 카드는 이를 "DeepMind가 개발한 폐쇄형 비전-언어 모델인 Flamingo의 오픈 액세스 재현물"이라고 명시적으로 설명한다.** 2023년 HuggingFace M4 팀이 9B와 80B 두 가지 크기로 출시했으며, 비전 인코더와 LLaMA(1) 언어 모델 베이스를 결합했다.',
          '**원조 Idefics는 단일한 관대한 라이선스가 아니라 혼합된 라이선스를 가진다.** 비전 인코더와 새로 학습된 연결 파라미터는 MIT 라이선스로 공개되지만, LLaMA(1) 언어 모델 베이스는 LLaMA에 대한 Meta의 원래 연구 전용, 비상업적 라이선스 준수를 요구한다. 이 때문에 스택 일부에 MIT 태그가 붙어 있음에도 원조 Idefics는 대부분의 경우 상업적 사용에 적합하지 않다.',
          '**2024년 4월경 출시된 Idefics2(8B)**는 LLaMA(1) 베이스를 [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1)로 교체하고 [SigLIP](https://huggingface.co/google/siglip-so400m-patch14-384) 비전 인코더와 결합했다. 두 부모 모델이 모두 Apache-2.0이므로 Idefics2 자체의 [모델 카드](https://huggingface.co/HuggingFaceM4/idefics2-8b)는 전체 모델이 Apache-2.0이라고 명시한다 — 원조 Idefics의 라이선스 문제를 해결한 것이다. HuggingFace 자체 설명에 따르면 Idefics2는 약 10분의 1 크기로 Idefics-80B와 동등한 성능을 내며, OCR과 문서 이해가 눈에 띄게 개선되었다.',
          '**2024년 8월 22일 출시된 Idefics3(8B)**는 SigLIP 비전 인코더를 유지하되 언어 베이스를 [Meta-Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)로 전환했다. 자체 [모델 카드](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)는 특히 문서 이해, OCR, 시각적 추론에서 Idefics2 대비 상당한 개선을 보여준다. 이는 Hugging Face Transformers 4.46 버전에서 추가되었다.',
        ],
        faqs: [
          {
            q: 'Idefics는 DeepMind의 Flamingo를 재현한 것인가?',
            a: '그렇다. 원조 Idefics의 모델 카드는 이를 "DeepMind가 개발한 폐쇄형 비전-언어 모델인 Flamingo의 오픈 액세스 재현물"이라고 명시적으로 설명한다. Idefics2와 Idefics3는 같은 계보 위에서 독립적으로 아키텍처를 설계한 HuggingFace M4의 후속 세대다.',
          },
        ],
      },
      versions: {
        id: 'versions',
        title: 'Idefics vs Idefics2 vs Idefics3: 실제로 무엇이 바뀌었나',
        content: [
          '세 세대는 서로 다른 기반 아키텍처를 가진 별개의 모델이지, 점진적으로 버전이 올라가는 하나의 모델이 아니다. 각 모델 자체의 HuggingFace 카드를 기준으로 확인한 실제 차이는 다음과 같다.',
        ],
        itemHeadings: true,
        columns: ['버전', '출시', '베이스', '비고'],
        rows: [
          {
            '버전': '[Idefics](https://huggingface.co/HuggingFaceM4/idefics-80b)(9B/80B)',
            '출시': '2023년',
            '베이스': 'LLaMA(1) + 자체 비전 인코더',
            '비고': 'LLaMA(1)에서 물려받은 연구 전용 라이선스 제한; 대체로 낡은 버전',
          },
          {
            '버전': '[Idefics2](https://huggingface.co/HuggingFaceM4/idefics2-8b)(8B)',
            '출시': '2024년 4월',
            '베이스': 'Mistral-7B-v0.1 + SigLIP',
            '비고': '완전히 Apache-2.0; 10분의 1 크기로 Idefics-80B와 동등',
          },
          {
            '버전': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(8B)',
            '출시': '2024년 8월 22일',
            '베이스': 'Llama-3.1-8B-Instruct + SigLIP',
            '비고': '셋 중 최고의 OCR/문서 이해; Llama 3.1 라이선스 조건 적용',
          },
        ],
        note: 'PromptQuorum은 본 리뷰 작성 시점 기준 공개적으로 확인된 "Idefics4"를 찾지 못했다. Idefics3가 가장 최신 세대이며 대부분의 작업에서 현재 권장 사항이다.',
      },
      license: {
        id: 'license',
        title: '라이선스 세부 사항: 단순한 Apache-2.0이 아니다',
        content: [
          'PromptQuorum의 디렉터리 목록은 Idefics의 라이선스를 "Apache 2.0"으로 표시한다 — 이는 모델 저장소와 코드 자체에는 정확하지만, 실질적인 라이선스 상황에는 불완전하다. LLaVA의 Apache-2.0 코드 라이선스가 모든 베이스 모델 체크포인트에 자동으로 확장되지 않는 것과 비슷하다.',
          '**Idefics2가 가장 명확한 사례다.** 언어 베이스인 Mistral-7B-v0.1과 비전 인코더인 SigLIP 모두 Apache-2.0이므로, 전체 모델 스택이 추가 조건 없이 진정으로 Apache-2.0이다.',
          '**Idefics3는 더 세부적이다.** 자체 HuggingFace 저장소는 Apache-2.0으로 태그되어 있지만, 언어 베이스인 Meta-Llama-3.1-8B-Instruct는 Meta의 Llama 3.1 커뮤니티 라이선스 하에 공개된다 — 이는 수용 가능한 사용 정책과, 다운스트림 제품이 월간 활성 사용자 7억 명을 초과할 경우 Meta로부터 별도의 라이선스가 필요하다는 조항을 포함한다. Idefics3를 상업적으로 대규모 배포하는 누구든 Idefics3 저장소의 Apache-2.0 태그만이 아니라 Meta의 Llama 3.1 라이선스 조건을 직접 읽어야 한다.',
          '**원조 Idefics가 가장 제한적이다.** 그 LLaMA(1) 베이스는 Meta의 원래 연구 전용, 비상업적 라이선스를 가지며, 이는 비전 인코더와 연결 가중치가 별도로 MIT 라이선스임에도 불구하고 전체 9B/80B 모델의 상업적 사용을 법적으로 잘해야 불명확하게, 최악의 경우 불가능하게 만든다.',
        ],
        faqs: [
          {
            q: 'Idefics는 상업적으로 무료로 사용할 수 있는가?',
            a: '세대에 따라 다르다. Idefics2는 추가 제한 없이 완전히 Apache-2.0이다. Idefics3 자체 저장소는 Apache-2.0으로 태그되어 있지만, Llama-3.1-8B-Instruct 베이스는 월간 활성 사용자 7억 명 초과 시 별도 라이선스 요건을 포함한 Meta의 Llama 3.1 커뮤니티 라이선스 조건을 가진다. 원조 Idefics는 LLaMA(1) 베이스로부터 연구 전용, 비상업적 제한을 가진다.',
          },
        ],
      },
      usageExample: {
        id: 'usage-example',
        title: '실제 사용 예시: Transformers 라이브러리',
        content: [
          'Idefics3는 Hugging Face Transformers의 `AutoModelForVision2Seq`와 `AutoProcessor` 클래스를 통해 사용되며, [Transformers의 Idefics3 모델 문서](https://huggingface.co/docs/transformers/en/model_doc/idefics3)에 문서화되어 있다. Transformers 4.46 이상 버전이 필요하다.',
        ],
        codeBlock: `# transformers >= 4.46 필요 (Hugging Face의 Idefics3 모델 문서 기준)
# pip install transformers pillow torch

from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import torch

model_id = "HuggingFaceM4/Idefics3-8B-Llama3"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
).to("cuda")

image = Image.open("photo.jpg")

messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What is in this image?"},
        ],
    },
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=[image], return_tensors="pt").to("cuda")

generated_ids = model.generate(**inputs, max_new_tokens=200)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text[0])`,
        codeLanguage: 'python',
        note: '이 예시는 Idefics3 자체 HuggingFace 모델 카드와 Transformers의 Idefics3 문서에 문서화된 패턴을 반영한다 — Transformers API는 릴리스마다 변경될 수 있으므로, 프로덕션 연동을 스크립트화하기 전에 해당 페이지의 최신 버전과 대조해 확인하라.',
        items: [
          '**오늘날 Ollama나 llama.cpp 경로는 존재하지 않는다.** Idefics는 GGUF 기반 실행 도구가 아니라 Transformers(또는 Text Generation Inference 같은 호환 추론 서버)를 통해 실행된다.',
          '**이미지 해상도 매개변수를 줄이면 GPU 메모리 사용량을 낮출 수 있다.** Idefics2/3의 모델 카드는 처리되는 이미지 서브패치 수를 줄이는 것(Idefics3 문서에서 `N`으로 지칭)을 정확도와 VRAM을 맞바꾸는 방법으로 문서화하고 있다.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM 및 하드웨어 요구 사항',
        content: [
          'Idefics2와 Idefics3는 비슷한 규모의 LLaVA나 MiniCPM-V 체크포인트보다 눈에 띄게 무거운데, 이는 주로 이미지 해상도를 처리하는 방식 때문이다. 이 수치들은 Idefics2 자체의 모델 카드에서 직접 가져온 것으로, VRAM 범위를 명시적으로 문서화하고 있다. Idefics3(동일한 8B 파라미터 수와 동일한 비전 인코더)도 비슷할 것으로 예상되지만, PromptQuorum은 Idefics3에 특화된 동일한 수준의 상세한 VRAM 표는 찾지 못했다.',
        ],
        columns: ['구성', '대략적인 VRAM', '비고'],
        rows: [
          { '구성': 'float16 + flash-attention', '대략적인 VRAM': '약 18-20GB', '비고': 'Idefics2 모델 카드에 표준 구성으로 문서화됨' },
          { '구성': '최적화 없음', '대략적인 VRAM': '피크 시 최대 약 55GB', '비고': 'Idefics2 모델 카드의 비최적화 추론 상한선' },
          { '구성': '공격적인 양자화', '대략적인 VRAM': '약 6-7GB', '비고': 'Idefics2 모델 카드에 문서화된 하한선; 정확도 저하를 예상해야 함' },
          { '구성': 'LLaVA 7B(비교용)', '대략적인 VRAM': '약 6-8GB', '비고': 'PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review) 참고' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 이 글을 위해 자체 하드웨어 테스트를 진행하지 않았다; 이 수치는 Idefics2의 공개된 모델 카드에서 가져온 것이다. Idefics는 비슷한 능력 등급에서 LLaVA 7B나 MiniCPM-V보다 실제로 더 무겁다 — 리소스가 제한된 배포를 위해 선택하기 전에 사용 가능한 VRAM에 대해 스스로 정직해야 한다.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Idefics가 적합하지 않은 경우',
        content: [
          'Idefics3는 유능한 오픈 비전-언어 모델이지만, 다음과 같은 상황에는 잘못된 선택이다:',
        ],
        items: [
          '**리소스가 제한된 로컬 환경.** 표준 float16 구성에서 약 18-20GB VRAM이 필요한 Idefics2/3는 LLaVA 7B(약 6-8GB)나 MiniCPM-V(약 5.5GB)보다 눈에 띄게 많은 GPU 메모리가 필요하다. 하드웨어 예산이 VRAM 8GB 이하의 소비자용 GPU 한 대라면, 공격적인 양자화와 정확도 저하를 받아들이지 않는 한 Idefics는 현실적인 선택지가 아니다.',
          '**실시간 또는 저지연 애플리케이션.** 입력마다 여러 이미지 서브패치를 처리하는 8B 파라미터 비전-언어 모델은 가능한 한 빠른 응답 시간을 위해 만들어진 것이 아니다. 지연 시간이 우선순위라면 Moondream(1.8B) 같은 더 작은 모델이 능력은 떨어지지만 더 빠르게 응답한다.',
          '**Ollama나 llama.cpp에 바로 연결하는 워크플로우.** Idefics는 현재 Ollama 라이브러리에 패키징되어 있지 않으며, GGUF 변환에는 Ollama 자체 GitHub에서 추적되는 미해결 호환성 문제가 있다. 워크플로우가 특별히 Ollama에 의존한다면, 오늘 실제로 pull 가능한 모델에 대해서는 PromptQuorum의 [Ollama 비전 모델 가이드](/ko/power-local-llm/ollama-vision-models-review)를 참고하라.',
          '**버전 전반에 걸쳐 단일하고 균일한 라이선스를 가정하는 것.** "Idefics"를 단일 라이선스를 가진 단일 제품으로 취급하는 것은 실수다 — 배포하려는 것이 어떤 세대인지 확인하고, 특히 대규모 사용 시 Idefics3의 Llama 3.1 커뮤니티 라이선스 의무 사항 등 해당 모델의 구체적인 라이선스 조건을 읽어야 한다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '대안 및 경쟁 제품',
        itemHeadings: true,
        columns: ['도구', '가장 적합한 용도', '라이선스'],
        rows: [
          {
            '도구': '[LLaVA](/ko/power-local-llm/llava-review)',
            '가장 적합한 용도': 'Ollama 및 llama.cpp 패키징을 포함한 더 넓은 도구 지원; 7B에서 더 가벼운 VRAM 사용량',
            '라이선스': 'Apache-2.0(코드); 체크포인트는 베이스 모델에 따라 다름',
          },
          {
            '도구': '[Ollama의 비전 모델](/ko/power-local-llm/ollama-vision-models-review)',
            '가장 적합한 용도': '`ollama pull`/`ollama run`을 통한 가장 간단한 로컬 설정; 본 리뷰 작성 시점 기준 Idefics는 여기 포함되지 않음',
            '라이선스': '모델에 따라 다름',
          },
          {
            '도구': 'MLC Chat',
            '가장 적합한 용도': '여러 플랫폼에 걸친 온디바이스 배포; 본 리뷰 작성 시점 기준 주로 텍스트 중심 — 비전 작업에 의존하기 전에 최신 비전 지원 상태를 확인하라',
            '라이선스': 'Apache-2.0',
          },
          {
            '도구': '클라우드 VLM API(GPT-4o, Claude, Gemini 비전)',
            '가장 적합한 용도': '현재 이용 가능한 최고의 멀티모달 성능, 로컬 하드웨어나 설정 불필요',
            '라이선스': '독점(유료 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Idefics란 무엇인가?',
            a: 'Idefics는 HuggingFace M4 팀이 만든 오픈 비전-언어 모델 계열로, DeepMind의 Flamingo를 명시적으로 오픈소스 재현한 것으로 설계되었다. 세 세대로 존재한다: 원조 Idefics(2023년, 9B/80B), Idefics2(2024년 4월, 8B), Idefics3(2024년 8월, 8B).',
          },
          {
            q: 'Idefics, Idefics2, Idefics3 중 어떤 버전을 사용해야 하는가?',
            a: '오늘날 대부분의 작업에는 Idefics3를 사용하라 — 셋 중 가장 강력한 OCR과 문서 이해 능력을 가진다. Llama 파생 조건이 없는 완전한 Apache-2.0 스택이 특별히 필요하다면 Idefics2가 여전히 유효하다. 원조 Idefics는 대체로 낡은 버전이며 연구 전용 라이선스 제한을 가진다.',
          },
          {
            q: 'Idefics는 완전한 오픈소스이며 상업적으로 무료로 사용할 수 있는가?',
            a: '세대에 따라 다르다. Idefics2는 완전히 Apache-2.0이다. Idefics3의 저장소는 Apache-2.0으로 태그되어 있지만, Llama-3.1-8B-Instruct 베이스는 월간 활성 사용자 7억 명 초과 시의 의무 사항을 포함한 Meta의 Llama 3.1 커뮤니티 라이선스 조건을 가진다. 원조 Idefics는 LLaMA(1) 베이스로부터 연구 전용, 비상업적 제한을 가진다.',
          },
          {
            q: 'Idefics에는 얼마나 많은 VRAM이 필요한가?',
            a: 'Idefics2(그리고 동일한 8B 파라미터 수와 동일한 비전 인코더를 가진 것으로 추정되는 Idefics3)는 Idefics2 모델 카드에 문서화된 표준 flash-attention 포함 float16 구성에서 약 18-20GB의 VRAM이 필요하며, 공격적인 양자화와 정확도 저하를 받아들이면 6-7GB 정도로도 가능하다. 이는 LLaVA 7B나 MiniCPM-V보다 눈에 띄게 무겁다.',
          },
          {
            q: 'Idefics를 Ollama를 통해 실행할 수 있는가?',
            a: '본 리뷰 작성 시점 기준으로는 불가능하다. Idefics는 현재 Ollama의 모델 라이브러리에 패키징되어 있지 않으며, GGUF 변환에는 Ollama 자체 GitHub 저장소에서 추적되는 미해결 호환성 문제가 있다. Idefics는 대신 Hugging Face Transformers를 통해 실행된다.',
          },
          {
            q: 'Idefics는 DeepMind의 Flamingo를 기반으로 하는가?',
            a: 'Idefics는 자체 모델 카드에서 "DeepMind가 개발한 폐쇄형 비전-언어 모델인 Flamingo의 오픈 액세스 재현물"이라고 명시적으로 설명되어 있다. Idefics2와 Idefics3는 동일한 HuggingFace M4 팀이 독립적으로 아키텍처를 설계한 후속작이다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Idefics는 진정으로 유용한 오픈 비전-언어 모델 계열이며, 특히 Idefics3는 약 18-20GB의 VRAM 사용량이 감당 가능한 경우 문서 중심의 OCR과 다중 이미지 추론 작업에서 좋은 성능을 보인다. 다만 더 가벼운 로컬 비전 모델을 그대로 대체할 수는 없다: LLaVA 7B나 MiniCPM-V보다 눈에 띄게 많은 GPU 메모리가 필요하고, 본 리뷰 작성 시점 기준 Ollama나 llama.cpp 패키징이 없으며, 라이선스 상황도 세대별로 실제로 다르다 — Idefics2의 깔끔한 Apache-2.0 스택은 Idefics3의 Llama 3.1 커뮤니티 라이선스 의무 사항과는 법적으로 다른 제안이다. GPU 메모리에 여유가 있고 문서 이해와 OCR 품질을 원한다면 Idefics3를 선택하고, 순수한 Apache-2.0 스택이 중요하다면 특별히 Idefics2를 선택하며, 더 가벼운 로컬 하드웨어나 Ollama 기반 워크플로우에는 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를 통해 LLaVA를, 또는 [Ollama 비전 모델 가이드](/ko/power-local-llm/ollama-vision-models-review)의 모델 중 하나를 선택하라.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Idefics-80B 모델 카드](https://huggingface.co/HuggingFaceM4/idefics-80b) — Flamingo 재현 명시, 라이선스 구조, 모델 크기.',
          '[Idefics2-8b 모델 카드](https://huggingface.co/HuggingFaceM4/idefics2-8b) — 베이스 모델, Apache-2.0 라이선스, 문서화된 VRAM 범위.',
          '[Idefics3-8B-Llama3 모델 카드](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) — 베이스 모델, 라이선스 태그, 출시 세부 사항.',
          '[Idefics3 Transformers 문서](https://huggingface.co/docs/transformers/en/model_doc/idefics3) — 사용 예시, 최소 Transformers 버전.',
          '[Meta Llama 3.1 커뮤니티 라이선스](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — Idefics3의 언어 베이스가 물려받는 라이선스 조건.',
          '[Ollama GitHub 이슈 #2183](https://github.com/ollama/ollama/issues/2183) 및 [이슈 #3677](https://github.com/ollama/ollama/issues/3677) — Idefics가 현재 Ollama 라이브러리에 패키징되어 있지 않음을 확인하는 미해결 기능 요청.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[LLaVA 리뷰(2026)](/ko/power-local-llm/llava-review) — 도구 지원 범위가 더 넓은 비슷한 오픈 비전-언어 모델.',
          '[Ollama 비전 모델(2026)](/ko/power-local-llm/ollama-vision-models-review) — 오늘날 Ollama를 통해 실제로 pull 가능한 비전 모델.',
          '[로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama 멀티모달 설정](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 현재 로컬 비전 모델 전반을 작업별로 폭넓게 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Idefics 리뷰(2026): HuggingFace의 오픈 비전-언어 모델, 솔직하게 평가하다',
      description:
        'Idefics 리뷰 2026: HuggingFace의 오픈 비전-언어 모델 계열. Idefics vs Idefics2 vs Idefics3를 솔직하게 비교 — 라이선스 세부 사항, 실제 VRAM 요구 사항, 오늘 사용해야 할 버전.',
      url: 'https://promptquorum.com/ko/power-local-llm/idefics-review',
      inLanguage: 'ko',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '오픈 비전-언어 모델을 평가 중인 개발자와 연구자' },
      about: [
        { '@type': 'Thing', name: 'Idefics' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'HuggingFace' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/idefics-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Idefics 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/idefics-review' },
      ],
    },
  },
}
