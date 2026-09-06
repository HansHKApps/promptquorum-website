// LLaVA Review: The Foundational Open-Source Vision-Language Model
// Slug: llava-review
// Companion to: local-vision-models-llava-ollama-2026.ts (multi-model vision comparison hub),
// ollama-vision-models-review.ts (practical Ollama vision guide), and top-open-source-models-ollama.ts

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-en.webp',
    title: 'LLaVA Review (2026): The Research Model That Started Local Vision AI',
    seoTitle: 'LLaVA Review 2026: The Original Local Vision-Language Model',
    intro:
      'LLaVA (Large Language and Vision Assistant) is the open-source vision-language model that established how most local multimodal AI is built today: a vision encoder feeding into a text-generating LLM. Created by researchers at the University of Wisconsin-Madison, Microsoft Research, and Columbia University, and distributed on [GitHub](https://github.com/haotian-liu/LLaVA) and via the [Ollama library](https://ollama.com/library/llava), it can now be run in a single command (`ollama run llava`). This review covers what LLaVA actually is, real installation and usage commands, its two-layer license (Apache-2.0 code plus base-model-dependent weight licenses), and where it now sits against newer local vision models — the honest picture for 2026.',
    metaDescription:
      'LLaVA review: the foundational open-source vision-language model from UW-Madison and Microsoft Research. Real Ollama commands, its Apache-2.0-plus-base-model license, and how it compares to newer local VLMs in 2026.',
    twitterDescription:
      'LLaVA review 2026: the research model that established the vision-encoder-plus-LLM pattern most local multimodal AI still follows. Real ollama run commands, the Apache-2.0-plus-base-model-license nuance, and an honest look at how it stacks up against newer options.',
    audience:
      'Developers evaluating local, self-hosted vision-language models who want to understand LLaVA\'s history, its actual licensing structure, and whether to use it or a newer model for a new project in 2026.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA review',
    targetKeywords: [
      'llava review',
      'llava ollama',
      'llava license',
      'llava vs qwen2.5-vl',
      'run llava locally',
      'llava vision model',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) is an open-source vision-language model that pairs a vision encoder with a text-generating LLM to answer questions about images.** Created by researchers at the University of Wisconsin-Madison, Microsoft Research, and Columbia University, it is distributed on [GitHub](https://github.com/haotian-liu/LLaVA) and, more commonly today, run through [Ollama](https://ollama.com/library/llava) (`ollama run llava`). Its code is licensed under **Apache-2.0**, but the pre-trained checkpoints depend on the license of whichever base LLM they were fine-tuned from (Vicuna, which itself carries the Llama 2 community license) — a nuance worth understanding before commercial use. For a broader comparison across current local vision models, see PromptQuorum\'s [local vision models guide](/power-local-llm/local-vision-models-llava-ollama-2026).',
    quickAnswerTop: {
      en: {
        question: 'What is LLaVA and is it still worth using in 2026?',
        answer:
          'LLaVA is worth using if you want the vision-language model with the largest community, the most tutorials, and the simplest path to running local image understanding — `ollama pull llava` and you have a working multimodal assistant in one command. It established the architecture pattern (a CLIP-based vision encoder projected into an LLM\'s embedding space) that most local vision-language models still use. Its code is Apache-2.0, a permissive license that allows commercial use, but its pre-trained checkpoints are fine-tuned from Vicuna, which is itself built on Meta\'s Llama 2, so the checkpoint\'s use is also governed by the Llama 2 community license — a distinct condition layered on top of the Apache-2.0 code grant. On raw capability, LLaVA is no longer the strongest local option: its GitHub repository has had no commits since May 2024, and newer models like Qwen2.5-VL, Llama 3.2 Vision, and MiniCPM-V outperform it on document OCR, chart reading, and multilingual text. Choose LLaVA for its ease of setup, community support, and broad tutorial coverage; choose a newer model if OCR accuracy or non-English text is your priority.',
        bullets: [
          'Created by researchers at UW-Madison, Microsoft Research, and Columbia University; NeurIPS 2023 oral presentation.',
          'Code license: Apache-2.0. Pre-trained checkpoints are fine-tuned from Vicuna, which carries the Llama 2 community license.',
          'Runs via `ollama pull llava` (7B, 13B, or 34B) — the most common way to use it today, alongside the original repo\'s own Python inference scripts.',
          'Established the vision-encoder-plus-LLM pattern most local vision-language models still follow.',
          'No commits to the official GitHub repository since May 11, 2024; 25,000+ stars, not archived.',
          'Newer models (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) outperform it on document OCR, charts, and multilingual text as of 2026.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: From a Research Paper to a Local AI Standard', anchor: 'history' },
      { label: 'What LLaVA Actually Does', anchor: 'what-it-does' },
      { label: 'Install and Run LLaVA: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Cost', anchor: 'license-cost' },
      { label: 'What LLaVA Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to LLaVA', anchor: 'alternatives' },
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
            text: 'LLaVA is the open-source vision-language model from UW-Madison, Microsoft Research, and Columbia University that established the vision-encoder-plus-LLM architecture most local multimodal AI still uses, licensed under Apache-2.0 for the code with Llama-2-derived license terms on its pre-trained checkpoints, and now runnable in one command via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'It is a free AI model that can look at a picture and answer questions about it — the research project that proved this could work well and cheaply, now most easily run by typing `ollama run llava` and pointing it at an image file.',
          },
        ],
        items: [
          'Vision-language model combining a CLIP vision encoder with a Vicuna (Llama 2-based) text decoder.',
          'Code license: Apache-2.0. Pre-trained checkpoints inherit the Llama 2 community license via their Vicuna base.',
          'Runs via `ollama pull llava` in three sizes: 7B, 13B, and 34B.',
          'No commits to the official GitHub repository since May 11, 2024; 25,000+ stars, not archived.',
          'Established the architecture pattern used by most subsequent local vision-language models.',
          'Newer models (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) now outperform it on OCR, charts, and multilingual documents.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LLaVA\'s original project page states its data, code, and checkpoints are "intended and licensed for research use only," which predates and is stricter than the Apache-2.0 license later applied to the GitHub repository\'s code. Read both the GitHub LICENSE file and the project page before commercial use — see the License and Cost section below.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: From a Research Paper to a Local AI Standard',
        content: [
          '**LLaVA was created by Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee**, researchers affiliated with the University of Wisconsin-Madison, Microsoft Research, and Columbia University, and introduced in the 2023 paper "Visual Instruction Tuning," accepted as a NeurIPS 2023 oral presentation.',
          '**The paper\'s core idea was to generate multimodal instruction-following training data using GPT-4, then use that data to teach an open-source vision encoder and language model to follow visual instructions** — describing images, answering questions about them, and reasoning about visual content in a conversational format, at a fraction of the training cost of building a proprietary multimodal model from scratch.',
          '**LLaVA-1.5, released in October 2023, achieved state-of-the-art results on 11 benchmarks with only simple modifications to the original architecture** — mainly a higher-capacity vision-language connector and academic-task-oriented training data — while training in about one day on 8 A100 GPUs, according to the project\'s own page.',
          '**LLaVA-NeXT (also called LLaVA-1.6), released in January 2024, added support for higher-resolution image input via dynamic patching** (up to 672×672, or 336×1344 for wide/tall images), along with improved OCR and visual reasoning, and support for additional base LLMs beyond Vicuna.',
          '**The public [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) GitHub repository has accumulated over 25,000 stars**, and is not marked archived — but PromptQuorum found no commits to its main branch since May 11, 2024, based on the project\'s own public commit history. This is consistent with a university research release that accomplished its goal (establishing and popularizing the architecture) rather than an ongoing commercial product.',
        ],
        faqs: [
          {
            q: 'Who created LLaVA?',
            a: 'LLaVA was created by Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee, researchers affiliated with the University of Wisconsin-Madison, Microsoft Research, and Columbia University, and introduced in the 2023 paper "Visual Instruction Tuning," a NeurIPS 2023 oral presentation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What LLaVA Actually Does',
        content: [
          'LLaVA connects a vision encoder to a large language model so the combined system can accept an image and text prompt together, then generate a natural-language response about the image — answering questions, describing scenes, reading visible text, and reasoning about visual content conversationally.',
        ],
        items: [
          '**CLIP encoder plus LLM decoder.** LLaVA uses a CLIP ViT-L/14 vision encoder to convert an image into a sequence of visual features, projects those features into the same embedding space as the language model\'s text tokens via a connector module, and feeds the combined sequence into a Vicuna (Llama 2-based) or, in later versions, Mistral or other base LLM to generate a response.',
          '**Visual instruction tuning.** Instead of training on raw image-caption pairs, LLaVA was fine-tuned on LLaVA-Instruct-150K, a dataset of multi-turn visual conversations generated by prompting GPT-4 with image captions and object-detection annotations — teaching the model to follow open-ended visual instructions rather than just generate captions.',
          '**Three model sizes via Ollama.** The Ollama library packages LLaVA in 7B (4.7 GB), 13B (8.0 GB), and 34B (20 GB) sizes — larger models generally produce more detailed and accurate descriptions at the cost of more VRAM and slower inference.',
          '**LLaVA-1.6 (LLaVA-NeXT) resolution improvements.** The current version supported through Ollama and the official repository handles higher input resolutions via dynamic patching, which noticeably improves text-reading and fine-detail tasks compared to the original 2023 release.',
          '**English-centric training.** LLaVA-Instruct-150K and the underlying benchmarks it was evaluated on are predominantly English-language, so out-of-the-box performance on non-English text within images is weaker than models specifically trained on multilingual document data.',
        ],
        note: 'LLaVA is best understood as the reference implementation of a now-common architecture, not a single fixed product — later community and commercial models (Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V) follow a similar vision-encoder-plus-LLM pattern with updated training data and higher-resolution encoders.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Install and Run LLaVA: Step by Step',
        content: 'This walkthrough covers the fastest, most common path (Ollama) and notes the original repository\'s own path for reference.',
        numberedItems: [
          {
            title: 'Install Ollama.',
            whyItMatters: 'Download and install [Ollama](https://ollama.com) for macOS, Linux, or Windows. This is the officially listed way to run LLaVA per its [Ollama library page](https://ollama.com/library/llava), and takes under two minutes.',
          },
          {
            title: 'Pull a LLaVA model size.',
            whyItMatters: 'Run `ollama pull llava` for the default 7B model (~4.7 GB), or `ollama pull llava:13b` (~8.0 GB) or `ollama pull llava:34b` (~20 GB) for higher quality at the cost of more VRAM and disk space.',
          },
          {
            title: 'Run it with an image from the CLI.',
            whyItMatters: 'Run `ollama run llava "describe this image: ./photo.jpg"`, referencing a local image file path directly in the prompt text — no separate flag is required.',
          },
          {
            title: '(Alternative) Use the original repository for research-grade control.',
            whyItMatters: 'Clone [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA), install its `requirements.txt`, and download a checkpoint from Hugging Face for full access to training scripts, evaluation harnesses, and the Gradio web demo — useful for research or fine-tuning, but a meaningfully higher setup bar than Ollama.',
          },
          {
            title: '(Optional) Call it programmatically via the Ollama API.',
            whyItMatters: 'POST to `http://localhost:11434/api/generate` with the image as a base64-encoded string in an `images` array, or use the official `ollama` Python or JavaScript library — see the code example below.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'These examples use Ollama\'s documented CLI syntax and HTTP API — the primary supported way to run LLaVA today.',
        ],
        codeBlock: `# Install and pull the model
# (download Ollama from https://ollama.com first)
ollama pull llava

# CLI: describe an image by referencing its file path in the prompt
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API (documented in Ollama's own docs/api.md) ---
# /api/generate with a base64-encoded image
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# /api/chat with a base64-encoded image (multi-turn conversations)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python example using the official ollama library ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'The `images` field accepts base64-encoded image data for the raw HTTP API, documented in [Ollama\'s api.md](https://github.com/ollama/ollama/blob/main/docs/api.md); the official Python and JavaScript libraries accept a file path directly and handle the encoding for you, as shown above.',
        items: [
          '**Referencing a file path in the CLI prompt is enough** — Ollama detects the `.jpg`/`.png` path and attaches the image automatically; no separate `--image` flag exists.',
          '**Larger model sizes cost more VRAM and time.** The 7B model is the fastest and lowest-VRAM option; use 13B or 34B when description accuracy matters more than speed.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Cost',
        content: [
          '**LLaVA\'s code, in the [official GitHub repository](https://github.com/haotian-liu/LLaVA), is licensed under Apache-2.0**, confirmed via the repository\'s LICENSE file and its GitHub-reported license metadata. Apache-2.0 is a permissive license: you may use, modify, and redistribute the code, including commercially, with attribution and a patent grant, and minimal other restriction.',
          '**The pre-trained checkpoints are a different story: they inherit conditions from their base LLM.** The officially released LLaVA checkpoints are fine-tuned from Vicuna, an instruction-tuned chatbot itself built on Meta\'s Llama 2, and the project\'s own documentation states that users "must comply with all terms and conditions" of the original licenses — specifically naming the license terms of Llama 2, Vicuna, CLIP, and the OpenAI terms of use (because GPT-4 was used to generate the training data). This means the checkpoint\'s permitted use is governed by the Llama 2 community license\'s terms (including its acceptable-use restrictions and the requirement that very large commercial deployments obtain a separate license from Meta), not by Apache-2.0 alone.',
          '**LLaVA\'s original project page (a separate site from the GitHub repository) adds a stricter, older statement:** it describes the "data, code, and checkpoint" as "intended and licensed for research use only," and separately notes the training dataset\'s CC BY-NC 4.0 (non-commercial) designation. This predates, and is stricter than, the Apache-2.0 code license now shown on GitHub — a genuinely confusing combination of statements from the same project across two different pages, which is itself worth flagging rather than picking whichever statement is most convenient.',
          'None of this is legal advice. Before shipping LLaVA — or any fine-tuned checkpoint built on it — in a commercial product, read the GitHub LICENSE file, the project page\'s stated terms, the Llama 2 community license, and consult a lawyer for your specific base model and deployment.',
        ],
        faqs: [
          {
            q: 'What license does LLaVA use?',
            a: 'LLaVA\'s code on GitHub is licensed under Apache-2.0, a permissive license that allows commercial use. Its officially released pre-trained checkpoints are fine-tuned from Vicuna (built on Meta\'s Llama 2), so their use is also governed by the Llama 2 community license\'s terms. The project\'s separate homepage additionally describes the data, code, and checkpoints as intended for research use only, and the training dataset as CC BY-NC 4.0 (non-commercial) — a stricter, older statement that predates the GitHub Apache-2.0 license. This is not legal advice; read all of the above yourself before commercial use of a specific checkpoint.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What LLaVA Is Not Good For',
        content: [
          'LLaVA remains a genuinely useful, well-documented model, but it is not the strongest choice for every vision task in 2026. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Text-only tasks.** LLaVA is a vision-language model; for a pure text conversation with no image involved, use a dedicated text LLM (through Ollama or otherwise) — running a multimodal model for text-only chat wastes the VRAM its vision encoder occupies for no benefit.',
          '**Needing the strongest available local OCR or document understanding.** As of 2026, models released after LLaVA-NeXT — MiniCPM-V, Qwen2.5-VL, and Llama 3.2 Vision — outperform it on document OCR, tables, and structured extraction, per PromptQuorum\'s [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026). LLaVA\'s vision encoder was designed and trained before this generation of higher-resolution, document-focused training data existed.',
          '**Reading non-English text in images.** LLaVA-Instruct-150K and the model\'s core training data are predominantly English. For Chinese, Japanese, Korean, or other non-Latin-script document OCR, a model trained specifically on multilingual document corpora (Qwen2.5-VL) will meaningfully outperform it.',
          '**Precise numeric extraction from charts and graphs.** Like essentially every local vision-language model in 2026, LLaVA is unreliable at reading exact values off complex charts — verify any extracted numbers against the source data regardless of which model you use.',
          '**Assuming ongoing active development.** With no commits to the official repository since May 11, 2024, do not expect new features, bug fixes, or newer checkpoints from the original project — Ollama\'s own multimodal engine updates and newer model families have effectively superseded it as the actively developed option.',
          '**A single, simple license story.** Because the code (Apache-2.0) and the officially released checkpoints (Apache-2.0 plus inherited Llama 2 community license terms, plus a stricter research-only statement on the project\'s separate homepage) are governed by three overlapping, not fully aligned statements, LLaVA does not offer the one-line license clarity that a project like Bark (fully MIT, no extra conditions) does.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to LLaVA',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (via Ollama)',
            'Best fit': 'Best general local image Q&A quality; 11B and 90B sizes',
            'License': 'Llama 3.2 community license',
          },
          {
            'Tool': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (via Ollama)',
            'Best fit': 'Strongest local OCR and multilingual document understanding',
            'License': 'Qwen license (Apache-2.0 for smaller sizes)',
          },
          {
            'Tool': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (via Ollama)',
            'Best fit': 'High document-OCR accuracy at low (~6 GB) VRAM',
            'License': 'Apache-2.0-derived (OpenBMB)',
          },
          {
            'Tool': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'Best fit': 'Open research VLM with strong document/OCR benchmarks, not yet packaged for Ollama',
            'License': 'Apache-2.0 (base-model terms apply to the Llama3 variant)',
          },
          {
            'Tool': 'Cloud VLM APIs (GPT-4o, Claude, Gemini vision)',
            'Best fit': 'Highest available multimodal capability, no local hardware needed',
            'License': 'Proprietary (paid API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is LLaVA?',
            a: 'LLaVA (Large Language and Vision Assistant) is an open-source vision-language model created by researchers at the University of Wisconsin-Madison, Microsoft Research, and Columbia University that combines a vision encoder with a large language model to answer questions about images, introduced in the 2023 paper "Visual Instruction Tuning."',
          },
          {
            q: 'Can I use LLaVA commercially?',
            a: 'LLaVA\'s code on GitHub is licensed under Apache-2.0, which permits commercial use. However, its officially released pre-trained checkpoints are fine-tuned from Vicuna, built on Meta\'s Llama 2, so their use is also governed by the Llama 2 community license\'s terms. A separate project homepage additionally describes the data, code, and checkpoints as research-use-only and the training data as non-commercial (CC BY-NC 4.0) — an older, stricter statement than the GitHub license. This is not legal advice; read all applicable licenses before commercial deployment of a specific checkpoint.',
          },
          {
            q: 'How do I run LLaVA?',
            a: 'The most common way is via Ollama: install Ollama, run `ollama pull llava`, then `ollama run llava "describe this image: ./photo.jpg"`. The original repository also offers its own Python inference scripts and a Gradio demo for research-grade control.',
          },
          {
            q: 'What is the difference between LLaVA, LLaVA-1.5, and LLaVA-NeXT (LLaVA-1.6)?',
            a: 'LLaVA (2023) was the original architecture. LLaVA-1.5 (October 2023) improved benchmark results with a higher-capacity connector and better training data. LLaVA-NeXT, also called LLaVA-1.6 (January 2024), added higher-resolution image input via dynamic patching and improved OCR and visual reasoning. The version distributed through Ollama and the current GitHub repository reflects the LLaVA-1.6/NeXT improvements.',
          },
          {
            q: 'Is LLaVA still actively maintained?',
            a: 'The official GitHub repository is not marked archived, but PromptQuorum found no commits since May 11, 2024. Treat it as a completed research release rather than actively developed software — newer models and Ollama\'s own multimodal engine updates have largely superseded it for new projects.',
          },
          {
            q: 'How does LLaVA compare to newer models like Qwen2.5-VL or Llama 3.2 Vision?',
            a: 'LLaVA established the architecture these newer models also use, but as of 2026 it is outperformed by Qwen2.5-VL and Llama 3.2 Vision on document OCR, chart reading, and (for Qwen2.5-VL specifically) non-English text, per PromptQuorum\'s local vision models comparison. LLaVA remains relevant for its ease of setup, large community, and extensive tutorial coverage.',
          },
          {
            q: 'Does Ollama actually support running LLaVA?',
            a: 'Yes — `ollama run llava` is an officially listed model on the [Ollama library](https://ollama.com/library/llava), available in 7B, 13B, and 34B sizes, and is one of the most common ways people run LLaVA today, alongside the original repository\'s own inference scripts.',
          },
          {
            q: 'What hardware do I need to run LLaVA?',
            a: 'The 7B model requires roughly 4.7 GB of disk space and can run on a GPU with 6-8 GB of VRAM (or CPU, more slowly); the 13B and 34B models need proportionally more VRAM and disk space for better description quality.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LLaVA earned its place in local AI history: it proved that a modest vision encoder connected to an open-source LLM, fine-tuned on GPT-4-generated instruction data, could deliver genuinely useful image understanding without a proprietary training budget — and the vision-encoder-plus-LLM pattern it established is still how most local multimodal models work today. Its code license (Apache-2.0) is permissive, but its officially released checkpoints carry Llama-2-derived terms through their Vicuna base, plus an older, stricter research-only statement on the project\'s separate homepage — read all three before commercial use. On raw 2026 capability, LLaVA is no longer the strongest local vision model: no commits since May 2024, and newer options like Qwen2.5-VL, Llama 3.2 Vision, and MiniCPM-V outperform it on OCR, charts, and multilingual documents. If you want the easiest setup, the largest community, and the most existing tutorials, `ollama run llava` remains a genuinely good starting point. If document accuracy or non-English text matters, pair this review with PromptQuorum\'s [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026) and [Ollama vision models guide](/power-local-llm/ollama-vision-models-review) before choosing a model.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLaVA on GitHub](https://github.com/haotian-liu/LLaVA) — the official repository: README, LICENSE, install instructions, and commit history.',
          '["Visual Instruction Tuning" paper (NeurIPS 2023)](https://llava-vl.github.io/) — the project homepage with paper links, licensing statements, and version history.',
          '[LLaVA on Ollama](https://ollama.com/library/llava) — the officially listed model page: sizes, description, and library metadata.',
          '[Ollama API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — the documented `/api/generate` and `/api/chat` request/response shape for multimodal models.',
          '[Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama Multimodal Setup](/power-local-llm/local-vision-models-llava-ollama-2026) — PromptQuorum\'s broader comparison across current local vision models.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama Multimodal Setup](/power-local-llm/local-vision-models-llava-ollama-2026) — the multi-model comparison hub this review complements with LLaVA-specific depth.',
          '[Ollama Vision Models: A Practical Guide](/power-local-llm/ollama-vision-models-review) — a focused how-to on running vision-capable models specifically through Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA Review (2026): The Research Model That Started Local Vision AI',
      description:
        'LLaVA review: the foundational open-source vision-language model from UW-Madison and Microsoft Research. Real Ollama commands, its Apache-2.0-plus-base-model license, and how it compares to newer local VLMs in 2026.',
      url: 'https://promptquorum.com/power-local-llm/llava-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, self-hosted vision-language models' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Multimodal AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA Review (2026)', item: 'https://promptquorum.com/power-local-llm/llava-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-de.webp',
    title: 'LLaVA im Test (2026): Das Forschungsmodell, das lokale Vision-KI begründete',
    seoTitle: 'LLaVA im Test 2026: Das erste lokale Vision-Language-Modell',
    intro:
      'LLaVA (Large Language and Vision Assistant) ist das quelloffene Vision-Language-Modell, das die heute übliche Architektur für lokale multimodale KI begründet hat: ein Vision-Encoder, der in ein textgenerierendes LLM einspeist. Entwickelt von Forschern der University of Wisconsin-Madison, Microsoft Research und Columbia University, verbreitet auf [GitHub](https://github.com/haotian-liu/LLaVA) und über die [Ollama-Bibliothek](https://ollama.com/library/llava), lässt es sich heute mit einem einzigen Befehl starten (`ollama run llava`). Dieser Test behandelt, was LLaVA tatsächlich ist, echte Installations- und Nutzungsbefehle, seine zweischichtige Lizenz (Apache-2.0-Code plus basismodellabhängige Gewichtslizenzen) und wo es 2026 im Vergleich zu neueren lokalen Vision-Modellen steht.',
    metaDescription:
      'LLaVA im Test: das grundlegende Open-Source-Vision-Language-Modell von UW-Madison und Microsoft Research. Echte Ollama-Befehle, die Apache-2.0-plus-Basismodell-Lizenz und der Vergleich mit neueren lokalen VLMs 2026.',
    twitterDescription:
      'LLaVA im Test 2026: das Forschungsmodell, das das Muster Vision-Encoder-plus-LLM begründete, dem die meiste lokale multimodale KI noch folgt. Echte ollama-run-Befehle, die Apache-2.0-plus-Basismodell-Lizenznuance und ein ehrlicher Vergleich mit neueren Optionen.',
    audience:
      'Entwickler, die lokale, selbst gehostete Vision-Language-Modelle evaluieren und LLaVAs Geschichte, seine tatsächliche Lizenzstruktur und die Frage verstehen wollen, ob sie es oder ein neueres Modell für ein neues Projekt 2026 verwenden sollten.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA im Test',
    targetKeywords: [
      'llava test',
      'llava ollama',
      'llava lizenz',
      'llava vs qwen2.5-vl',
      'llava lokal ausführen',
      'llava vision modell',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) ist ein quelloffenes Vision-Language-Modell, das einen Vision-Encoder mit einem textgenerierenden LLM kombiniert, um Fragen zu Bildern zu beantworten.** Entwickelt von Forschern der University of Wisconsin-Madison, Microsoft Research und Columbia University, wird es auf [GitHub](https://github.com/haotian-liu/LLaVA) verbreitet und heute meist über [Ollama](https://ollama.com/library/llava) ausgeführt (`ollama run llava`). Sein Code steht unter **Apache-2.0**, doch die vortrainierten Checkpoints hängen von der Lizenz des jeweiligen Basis-LLM ab, mit dem sie feinabgestimmt wurden (Vicuna, das selbst die Llama-2-Community-Lizenz trägt) — eine Nuance, die vor kommerzieller Nutzung verstanden werden sollte. Für einen breiteren Vergleich aktueller lokaler Vision-Modelle siehe PromptQuorums [Leitfaden zu lokalen Vision-Modellen](/de/power-local-llm/local-vision-models-llava-ollama-2026).',
    quickAnswerTop: {
      en: {
        question: 'Was ist LLaVA und lohnt es sich 2026 noch?',
        answer:
          'LLaVA lohnt sich, wenn Sie das Vision-Language-Modell mit der größten Community, den meisten Tutorials und dem einfachsten Weg zu lokalem Bildverständnis wollen — `ollama pull llava` und Sie haben mit einem Befehl einen funktionierenden multimodalen Assistenten. Es begründete das Architekturmuster (ein CLIP-basierter Vision-Encoder, projiziert in den Embedding-Raum eines LLM), dem die meisten lokalen Vision-Language-Modelle noch folgen. Sein Code steht unter Apache-2.0, einer freizügigen Lizenz, die kommerzielle Nutzung erlaubt, doch seine vortrainierten Checkpoints sind aus Vicuna feinabgestimmt, das selbst auf Metas Llama 2 aufbaut — die Nutzung des Checkpoints unterliegt daher zusätzlich der Llama-2-Community-Lizenz, einer eigenständigen Bedingung zusätzlich zur Apache-2.0-Codelizenz. Bei der reinen Fähigkeit ist LLaVA nicht mehr die stärkste lokale Option: Sein GitHub-Repository hat seit Mai 2024 keine Commits mehr erhalten, und neuere Modelle wie Qwen2.5-VL, Llama 3.2 Vision und MiniCPM-V übertreffen es bei Dokument-OCR, Diagrammlesen und mehrsprachigem Text. Wählen Sie LLaVA wegen der einfachen Einrichtung, Community-Unterstützung und breiten Tutorial-Abdeckung; wählen Sie ein neueres Modell, wenn OCR-Genauigkeit oder nicht-englischer Text Priorität haben.',
        bullets: [
          'Entwickelt von Forschern der UW-Madison, Microsoft Research und Columbia University; NeurIPS-2023-Oral-Präsentation.',
          'Code-Lizenz: Apache-2.0. Vortrainierte Checkpoints sind aus Vicuna feinabgestimmt, das die Llama-2-Community-Lizenz trägt.',
          'Läuft über `ollama pull llava` (7B, 13B oder 34B) — heute der gängigste Weg, es zu nutzen, neben den eigenen Python-Inferenzskripten des Originalrepositorys.',
          'Begründete das Muster Vision-Encoder-plus-LLM, dem die meisten lokalen Vision-Language-Modelle noch folgen.',
          'Keine Commits im offiziellen GitHub-Repository seit dem 11. Mai 2024; über 25.000 Sterne, nicht archiviert.',
          'Neuere Modelle (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) übertreffen es 2026 bei Dokument-OCR, Diagrammen und mehrsprachigem Text.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Von einem Forschungspapier zum lokalen KI-Standard', anchor: 'history' },
      { label: 'Was LLaVA tatsächlich tut', anchor: 'what-it-does' },
      { label: 'LLaVA installieren und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Nutzungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und Kosten', anchor: 'license-cost' },
      { label: 'Wofür LLaVA nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu LLaVA', anchor: 'alternatives' },
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
            text: 'LLaVA ist das quelloffene Vision-Language-Modell von UW-Madison, Microsoft Research und Columbia University, das die Architektur Vision-Encoder-plus-LLM begründete, der die meiste lokale multimodale KI noch folgt, lizenziert unter Apache-2.0 für den Code mit von Llama 2 abgeleiteten Lizenzbedingungen für die vortrainierten Checkpoints, heute mit einem Befehl über Ollama ausführbar.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein kostenloses KI-Modell, das ein Bild betrachten und Fragen dazu beantworten kann — das Forschungsprojekt, das bewies, dass dies gut und günstig funktionieren kann, heute am einfachsten ausführbar, indem man `ollama run llava` eintippt und auf eine Bilddatei verweist.',
          },
        ],
        items: [
          'Vision-Language-Modell, das einen CLIP-Vision-Encoder mit einem Vicuna-Textdecoder (basierend auf Llama 2) kombiniert.',
          'Code-Lizenz: Apache-2.0. Vortrainierte Checkpoints erben die Llama-2-Community-Lizenz über ihre Vicuna-Basis.',
          'Läuft über `ollama pull llava` in drei Größen: 7B, 13B und 34B.',
          'Keine Commits im offiziellen GitHub-Repository seit dem 11. Mai 2024; über 25.000 Sterne, nicht archiviert.',
          'Begründete das Architekturmuster, das die meisten nachfolgenden lokalen Vision-Language-Modelle verwenden.',
          'Neuere Modelle (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) übertreffen es inzwischen bei OCR, Diagrammen und mehrsprachigen Dokumenten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LLaVAs ursprüngliche Projektseite erklärt Daten, Code und Checkpoints als „nur für die Forschungsnutzung bestimmt und lizenziert" — das ist älter und strenger als die Apache-2.0-Lizenz, die später auf den Code im GitHub-Repository angewendet wurde. Lesen Sie sowohl die GitHub-LICENSE-Datei als auch die Projektseite vor kommerzieller Nutzung — siehe Abschnitt Lizenz und Kosten unten.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Von einem Forschungspapier zum lokalen KI-Standard',
        content: [
          '**LLaVA wurde von Haotian Liu, Chunyuan Li, Qingyang Wu und Yong Jae Lee entwickelt**, Forschern mit Zugehörigkeit zur University of Wisconsin-Madison, Microsoft Research und Columbia University, und im Paper „Visual Instruction Tuning" von 2023 vorgestellt, akzeptiert als NeurIPS-2023-Oral-Präsentation.',
          '**Die Kernidee des Papers war, multimodale Instruction-Following-Trainingsdaten mit GPT-4 zu generieren** und diese Daten dann zu nutzen, um einem quelloffenen Vision-Encoder und Sprachmodell beizubringen, visuellen Anweisungen zu folgen — Bilder zu beschreiben, Fragen dazu zu beantworten und über visuelle Inhalte im Gesprächsformat nachzudenken, zu einem Bruchteil der Trainingskosten eines proprietären multimodalen Modells von Grund auf.',
          '**LLaVA-1.5, veröffentlicht im Oktober 2023, erzielte State-of-the-Art-Ergebnisse auf 11 Benchmarks mit nur einfachen Modifikationen der ursprünglichen Architektur** — hauptsächlich ein leistungsfähigerer Vision-Language-Connector und akademisch ausgerichtete Trainingsdaten — bei einer Trainingszeit von etwa einem Tag auf 8 A100-GPUs, laut der eigenen Projektseite.',
          '**LLaVA-NeXT (auch LLaVA-1.6 genannt), veröffentlicht im Januar 2024, fügte Unterstützung für höher aufgelöste Bildeingaben über dynamisches Patching hinzu** (bis zu 672×672 oder 336×1344 für breite/hohe Bilder), zusammen mit verbesserter OCR und visuellem Schlussfolgern sowie Unterstützung für weitere Basis-LLMs jenseits von Vicuna.',
          '**Das öffentliche [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)-GitHub-Repository hat über 25.000 Sterne angesammelt** und ist nicht als archiviert markiert — doch PromptQuorum fand keine Commits im Hauptzweig seit dem 11. Mai 2024, basierend auf der eigenen öffentlichen Commit-Historie des Projekts. Dies entspricht einer universitären Forschungsveröffentlichung, die ihr Ziel erreicht hat (die Architektur zu etablieren und zu popularisieren), statt einem laufenden kommerziellen Produkt.',
        ],
        faqs: [
          {
            q: 'Wer hat LLaVA entwickelt?',
            a: 'LLaVA wurde von Haotian Liu, Chunyuan Li, Qingyang Wu und Yong Jae Lee entwickelt, Forschern mit Zugehörigkeit zur University of Wisconsin-Madison, Microsoft Research und Columbia University, und im Paper „Visual Instruction Tuning" von 2023 vorgestellt, einer NeurIPS-2023-Oral-Präsentation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was LLaVA tatsächlich tut',
        content: [
          'LLaVA verbindet einen Vision-Encoder mit einem großen Sprachmodell, sodass das kombinierte System ein Bild und einen Textprompt gemeinsam entgegennehmen und daraufhin eine natürlichsprachliche Antwort zum Bild erzeugen kann — Fragen beantworten, Szenen beschreiben, sichtbaren Text lesen und im Gesprächsformat über visuelle Inhalte nachdenken.',
        ],
        items: [
          '**CLIP-Encoder plus LLM-Decoder.** LLaVA nutzt einen CLIP-ViT-L/14-Vision-Encoder, um ein Bild in eine Sequenz visueller Merkmale umzuwandeln, projiziert diese Merkmale über ein Connector-Modul in denselben Embedding-Raum wie die Text-Tokens des Sprachmodells und speist die kombinierte Sequenz in ein Vicuna-Modell (basierend auf Llama 2) oder, in späteren Versionen, Mistral oder ein anderes Basis-LLM, um eine Antwort zu erzeugen.',
          '**Visual Instruction Tuning.** Statt auf rohen Bild-Beschriftung-Paaren zu trainieren, wurde LLaVA auf LLaVA-Instruct-150K feinabgestimmt, einem Datensatz mehrstufiger visueller Konversationen, die durch Prompting von GPT-4 mit Bildbeschriftungen und Objekterkennungsannotationen generiert wurden — was dem Modell beibringt, offenen visuellen Anweisungen zu folgen, statt nur Bildunterschriften zu generieren.',
          '**Drei Modellgrößen über Ollama.** Die Ollama-Bibliothek verpackt LLaVA in den Größen 7B (4,7 GB), 13B (8,0 GB) und 34B (20 GB) — größere Modelle erzeugen im Allgemeinen detailliertere und genauere Beschreibungen, auf Kosten von mehr VRAM und langsamerer Inferenz.',
          '**LLaVA-1.6-(LLaVA-NeXT)-Auflösungsverbesserungen.** Die aktuelle, über Ollama und das offizielle Repository unterstützte Version verarbeitet höhere Eingabeauflösungen über dynamisches Patching, was Textlese- und Feindetailaufgaben im Vergleich zur ursprünglichen Version von 2023 merklich verbessert.',
          '**Englischzentriertes Training.** LLaVA-Instruct-150K und die zugrunde liegenden Benchmarks, gegen die es evaluiert wurde, sind überwiegend englischsprachig, sodass die Leistung bei nicht-englischem Text in Bildern out-of-the-box schwächer ist als bei Modellen, die speziell auf mehrsprachigen Dokumentdaten trainiert wurden.',
        ],
        note: 'LLaVA versteht sich am besten als Referenzimplementierung einer heute verbreiteten Architektur, nicht als einzelnes festes Produkt — spätere Community- und kommerzielle Modelle (Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V) folgen einem ähnlichen Muster aus Vision-Encoder plus LLM, mit aktualisierten Trainingsdaten und höher auflösenden Encodern.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'LLaVA installieren und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung behandelt den schnellsten, gängigsten Weg (Ollama) und verweist auf den eigenen Weg des Originalrepositorys als Referenz.',
        numberedItems: [
          {
            title: 'Ollama installieren.',
            whyItMatters: 'Laden Sie [Ollama](https://ollama.com) für macOS, Linux oder Windows herunter und installieren Sie es. Dies ist der offiziell aufgeführte Weg, LLaVA laut seiner [Ollama-Bibliotheksseite](https://ollama.com/library/llava) auszuführen, und dauert unter zwei Minuten.',
          },
          {
            title: 'Eine LLaVA-Modellgröße herunterladen.',
            whyItMatters: 'Führen Sie `ollama pull llava` für das Standardmodell 7B (~4,7 GB) aus, oder `ollama pull llava:13b` (~8,0 GB) beziehungsweise `ollama pull llava:34b` (~20 GB) für höhere Qualität auf Kosten von mehr VRAM und Speicherplatz.',
          },
          {
            title: 'Mit einem Bild über die CLI ausführen.',
            whyItMatters: 'Führen Sie `ollama run llava "describe this image: ./photo.jpg"` aus und verweisen Sie dabei direkt im Prompttext auf einen lokalen Bilddateipfad — es ist kein separates Flag erforderlich.',
          },
          {
            title: '(Alternative) Das Originalrepository für forschungsgerechte Kontrolle nutzen.',
            whyItMatters: 'Klonen Sie [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA), installieren Sie dessen `requirements.txt` und laden Sie einen Checkpoint von Hugging Face herunter, für vollen Zugriff auf Trainingsskripte, Evaluierungs-Frameworks und die Gradio-Web-Demo — nützlich für Forschung oder Feinabstimmung, aber eine deutlich höhere Einstiegshürde als Ollama.',
          },
          {
            title: '(Optional) Programmatisch über die Ollama-API aufrufen.',
            whyItMatters: 'Senden Sie eine POST-Anfrage an `http://localhost:11434/api/generate` mit dem Bild als Base64-kodiertem String in einem `images`-Array, oder nutzen Sie die offizielle `ollama`-Python- oder JavaScript-Bibliothek — siehe Codebeispiel unten.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Nutzungsbeispiele',
        content: [
          'Diese Beispiele verwenden die dokumentierte CLI-Syntax und HTTP-API von Ollama — den primären unterstützten Weg, LLaVA heute auszuführen.',
        ],
        codeBlock: `# Installieren und das Modell herunterladen
# (zuerst Ollama von https://ollama.com herunterladen)
ollama pull llava

# CLI: ein Bild beschreiben, indem der Dateipfad im Prompt referenziert wird
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP-API (dokumentiert in Ollamas eigener docs/api.md) ---
# /api/generate mit einem Base64-kodierten Bild
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-kodierte Bilddaten>"]
}'

# /api/chat mit einem Base64-kodierten Bild (mehrstufige Konversationen)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-kodierte Bilddaten>"] }
  ]
}'

# --- Python-Beispiel mit der offiziellen ollama-Bibliothek ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'Das Feld `images` akzeptiert Base64-kodierte Bilddaten für die rohe HTTP-API, dokumentiert in [Ollamas api.md](https://github.com/ollama/ollama/blob/main/docs/api.md); die offiziellen Python- und JavaScript-Bibliotheken akzeptieren direkt einen Dateipfad und übernehmen die Kodierung für Sie, wie oben gezeigt.',
        items: [
          '**Das Referenzieren eines Dateipfads im CLI-Prompt genügt** — Ollama erkennt den `.jpg`/`.png`-Pfad und hängt das Bild automatisch an; es gibt kein separates `--image`-Flag.',
          '**Größere Modellgrößen kosten mehr VRAM und Zeit.** Das 7B-Modell ist die schnellste Option mit dem geringsten VRAM-Bedarf; nutzen Sie 13B oder 34B, wenn die Beschreibungsgenauigkeit wichtiger ist als die Geschwindigkeit.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und Kosten',
        content: [
          '**LLaVAs Code im [offiziellen GitHub-Repository](https://github.com/haotian-liu/LLaVA) steht unter Apache-2.0**, bestätigt über die LICENSE-Datei des Repositorys und dessen von GitHub gemeldete Lizenzmetadaten. Apache-2.0 ist eine freizügige Lizenz: Sie dürfen den Code nutzen, verändern und weitergeben, auch kommerziell, mit Namensnennung und einer Patentgewährung, sowie minimalen weiteren Einschränkungen.',
          '**Die vortrainierten Checkpoints sind eine andere Geschichte: Sie erben Bedingungen von ihrem Basis-LLM.** Die offiziell veröffentlichten LLaVA-Checkpoints sind aus Vicuna feinabgestimmt, einem instruction-getunten Chatbot, der selbst auf Metas Llama 2 aufbaut, und die eigene Dokumentation des Projekts erklärt, dass Nutzer „alle Bedingungen" der ursprünglichen Lizenzen einhalten müssen — konkret benannt werden die Lizenzbedingungen von Llama 2, Vicuna, CLIP und die OpenAI-Nutzungsbedingungen (da GPT-4 zur Generierung der Trainingsdaten verwendet wurde). Das bedeutet: Die erlaubte Nutzung des Checkpoints unterliegt den Bedingungen der Llama-2-Community-Lizenz (einschließlich ihrer Einschränkungen zur zulässigen Nutzung und der Anforderung, dass sehr große kommerzielle Deployments eine separate Lizenz von Meta benötigen), nicht allein Apache-2.0.',
          '**LLaVAs ursprüngliche Projektseite (eine von GitHub getrennte Website) fügt eine strengere, ältere Aussage hinzu:** Sie beschreibt „Daten, Code und Checkpoint" als „nur für die Forschungsnutzung bestimmt und lizenziert" und weist separat auf die CC-BY-NC-4.0-Kennzeichnung (nicht-kommerziell) des Trainingsdatensatzes hin. Dies ist älter und strenger als die jetzt auf GitHub gezeigte Apache-2.0-Codelizenz — eine tatsächlich verwirrende Kombination von Aussagen desselben Projekts auf zwei unterschiedlichen Seiten, die es wert ist, benannt zu werden, statt sich einfach die bequemste Aussage herauszusuchen.',
          'Nichts davon ist Rechtsberatung. Lesen Sie vor dem Einsatz von LLaVA — oder jedem darauf aufbauenden feinabgestimmten Checkpoint — in einem kommerziellen Produkt die GitHub-LICENSE-Datei, die auf der Projektseite genannten Bedingungen, die Llama-2-Community-Lizenz, und konsultieren Sie einen Anwalt für Ihr spezifisches Basismodell und Deployment.',
        ],
        faqs: [
          {
            q: 'Welche Lizenz verwendet LLaVA?',
            a: 'LLaVAs Code auf GitHub steht unter Apache-2.0, einer freizügigen Lizenz, die kommerzielle Nutzung erlaubt. Seine offiziell veröffentlichten vortrainierten Checkpoints sind aus Vicuna feinabgestimmt (basierend auf Metas Llama 2), sodass ihre Nutzung zusätzlich der Llama-2-Community-Lizenz unterliegt. Die separate Projekt-Homepage beschreibt zudem Daten, Code und Checkpoints als nur für die Forschungsnutzung bestimmt und den Trainingsdatensatz als CC BY-NC 4.0 (nicht-kommerziell) — eine strengere, ältere Aussage, die der GitHub-Apache-2.0-Lizenz vorausgeht. Dies ist keine Rechtsberatung; lesen Sie alles oben Genannte selbst, bevor Sie einen bestimmten Checkpoint kommerziell nutzen.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür LLaVA nicht geeignet ist',
        content: [
          'LLaVA bleibt ein wirklich nützliches, gut dokumentiertes Modell, ist jedoch 2026 nicht mehr die stärkste Wahl für jede Vision-Aufgabe. Es ist das falsche Werkzeug für die folgenden Situationen:',
        ],
        items: [
          '**Reine Textaufgaben.** LLaVA ist ein Vision-Language-Modell; für ein reines Textgespräch ohne Bildbeteiligung nutzen Sie ein dediziertes Text-LLM (über Ollama oder anderweitig) — ein multimodales Modell für reinen Textchat auszuführen verschwendet den VRAM, den sein Vision-Encoder ohne jeden Nutzen belegt.',
          '**Bedarf an der stärksten verfügbaren lokalen OCR oder Dokumentenverständnis.** Stand 2026 übertreffen Modelle, die nach LLaVA-NeXT veröffentlicht wurden — MiniCPM-V, Qwen2.5-VL und Llama 3.2 Vision — es bei Dokument-OCR, Tabellen und strukturierter Extraktion, laut PromptQuorums [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026). LLaVAs Vision-Encoder wurde entwickelt und trainiert, bevor diese Generation höher auflösender, dokumentenfokussierter Trainingsdaten existierte.',
          '**Lesen von nicht-englischem Text in Bildern.** LLaVA-Instruct-150K und die Kern-Trainingsdaten des Modells sind überwiegend englisch. Für chinesische, japanische, koreanische oder andere nicht-lateinische Dokument-OCR wird ein speziell auf mehrsprachigen Dokumentkorpora trainiertes Modell (Qwen2.5-VL) es merklich übertreffen.',
          '**Präzise numerische Extraktion aus Diagrammen und Grafiken.** Wie im Grunde jedes lokale Vision-Language-Modell 2026 ist LLaVA unzuverlässig beim Ablesen exakter Werte aus komplexen Diagrammen — überprüfen Sie extrahierte Zahlen stets gegen die Quelldaten, unabhängig davon, welches Modell Sie verwenden.',
          '**Annahme laufender aktiver Weiterentwicklung.** Ohne Commits im offiziellen Repository seit dem 11. Mai 2024 sollten Sie keine neuen Funktionen, Fehlerbehebungen oder neueren Checkpoints vom Originalprojekt erwarten — Ollamas eigene Multimodal-Engine-Updates und neuere Modellfamilien haben es als aktiv entwickelte Option faktisch abgelöst.',
          '**Eine einzige, einfache Lizenzgeschichte.** Da der Code (Apache-2.0) und die offiziell veröffentlichten Checkpoints (Apache-2.0 plus geerbte Llama-2-Community-Lizenzbedingungen, plus eine strengere Nur-Forschung-Aussage auf der separaten Projekt-Homepage) durch drei überlappende, nicht vollständig übereinstimmende Aussagen geregelt sind, bietet LLaVA nicht die einzeilige Lizenzklarheit, die ein Projekt wie Bark (vollständig MIT, keine Zusatzbedingungen) bietet.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu LLaVA',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (über Ollama)',
            'Am besten für': 'Beste allgemeine lokale Bild-Q&A-Qualität; Größen 11B und 90B',
            'Lizenz': 'Llama-3.2-Community-Lizenz',
          },
          {
            'Tool': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (über Ollama)',
            'Am besten für': 'Stärkste lokale OCR und mehrsprachiges Dokumentenverständnis',
            'Lizenz': 'Qwen-Lizenz (Apache-2.0 für kleinere Größen)',
          },
          {
            'Tool': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (über Ollama)',
            'Am besten für': 'Hohe Dokument-OCR-Genauigkeit bei niedrigem (~6 GB) VRAM',
            'Lizenz': 'Apache-2.0-abgeleitet (OpenBMB)',
          },
          {
            'Tool': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'Am besten für': 'Offenes Forschungs-VLM mit starken Dokument-/OCR-Benchmarks, noch nicht für Ollama verpackt',
            'Lizenz': 'Apache-2.0 (Basismodellbedingungen gelten für die Llama3-Variante)',
          },
          {
            'Tool': 'Cloud-VLM-APIs (GPT-4o, Claude, Gemini Vision)',
            'Am besten für': 'Höchste verfügbare multimodale Fähigkeit, keine lokale Hardware nötig',
            'Lizenz': 'Proprietär (kostenpflichtige API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist LLaVA?',
            a: 'LLaVA (Large Language and Vision Assistant) ist ein quelloffenes Vision-Language-Modell von Forschern der University of Wisconsin-Madison, Microsoft Research und Columbia University, das einen Vision-Encoder mit einem großen Sprachmodell kombiniert, um Fragen zu Bildern zu beantworten, vorgestellt im Paper „Visual Instruction Tuning" von 2023.',
          },
          {
            q: 'Darf ich LLaVA kommerziell nutzen?',
            a: 'LLaVAs Code auf GitHub steht unter Apache-2.0, was kommerzielle Nutzung erlaubt. Seine offiziell veröffentlichten vortrainierten Checkpoints sind jedoch aus Vicuna feinabgestimmt, das auf Metas Llama 2 aufbaut, sodass ihre Nutzung zusätzlich der Llama-2-Community-Lizenz unterliegt. Eine separate Projekt-Homepage beschreibt zudem Daten, Code und Checkpoints als nur für die Forschungsnutzung und die Trainingsdaten als nicht-kommerziell (CC BY-NC 4.0) — eine ältere, strengere Aussage als die GitHub-Lizenz. Dies ist keine Rechtsberatung; lesen Sie alle geltenden Lizenzen vor kommerziellem Einsatz eines bestimmten Checkpoints.',
          },
          {
            q: 'Wie führe ich LLaVA aus?',
            a: 'Der gängigste Weg ist über Ollama: Ollama installieren, `ollama pull llava` ausführen, dann `ollama run llava "describe this image: ./photo.jpg"`. Das Originalrepository bietet zudem eigene Python-Inferenzskripte und eine Gradio-Demo für forschungsgerechte Kontrolle.',
          },
          {
            q: 'Was ist der Unterschied zwischen LLaVA, LLaVA-1.5 und LLaVA-NeXT (LLaVA-1.6)?',
            a: 'LLaVA (2023) war die ursprüngliche Architektur. LLaVA-1.5 (Oktober 2023) verbesserte die Benchmark-Ergebnisse mit einem leistungsfähigeren Connector und besseren Trainingsdaten. LLaVA-NeXT, auch LLaVA-1.6 genannt (Januar 2024), fügte höher aufgelöste Bildeingaben über dynamisches Patching hinzu und verbesserte OCR und visuelles Schlussfolgern. Die über Ollama und das aktuelle GitHub-Repository verbreitete Version spiegelt die Verbesserungen von LLaVA-1.6/NeXT wider.',
          },
          {
            q: 'Wird LLaVA noch aktiv gepflegt?',
            a: 'Das offizielle GitHub-Repository ist nicht als archiviert markiert, doch PromptQuorum fand keine Commits seit dem 11. Mai 2024. Behandeln Sie es als abgeschlossene Forschungsveröffentlichung statt als aktiv entwickelte Software — neuere Modelle und Ollamas eigene Multimodal-Engine-Updates haben es für neue Projekte weitgehend abgelöst.',
          },
          {
            q: 'Wie schneidet LLaVA im Vergleich zu neueren Modellen wie Qwen2.5-VL oder Llama 3.2 Vision ab?',
            a: 'LLaVA begründete die Architektur, der auch diese neueren Modelle folgen, wird jedoch Stand 2026 von Qwen2.5-VL und Llama 3.2 Vision bei Dokument-OCR, Diagrammlesen und (speziell für Qwen2.5-VL) nicht-englischem Text übertroffen, laut PromptQuorums Vergleich lokaler Vision-Modelle. LLaVA bleibt relevant wegen seiner einfachen Einrichtung, großen Community und umfangreichen Tutorial-Abdeckung.',
          },
          {
            q: 'Unterstützt Ollama tatsächlich das Ausführen von LLaVA?',
            a: 'Ja — `ollama run llava` ist ein offiziell aufgeführtes Modell in der [Ollama-Bibliothek](https://ollama.com/library/llava), verfügbar in den Größen 7B, 13B und 34B, und ist heute einer der gängigsten Wege, LLaVA auszuführen, neben den eigenen Inferenzskripten des Originalrepositorys.',
          },
          {
            q: 'Welche Hardware benötige ich, um LLaVA auszuführen?',
            a: 'Das 7B-Modell benötigt etwa 4,7 GB Speicherplatz und läuft auf einer GPU mit 6-8 GB VRAM (oder auf der CPU, langsamer); die Modelle 13B und 34B benötigen proportional mehr VRAM und Speicherplatz für bessere Beschreibungsqualität.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LLaVA hat sich seinen Platz in der Geschichte der lokalen KI verdient: Es bewies, dass ein bescheidener, mit einem quelloffenen LLM verbundener Vision-Encoder, feinabgestimmt auf von GPT-4 generierten Instruktionsdaten, echtes nützliches Bildverständnis liefern konnte, ohne ein proprietäres Trainingsbudget — und das Muster Vision-Encoder-plus-LLM, das es begründete, ist immer noch die Basis der meisten lokalen multimodalen Modelle. Seine Codelizenz (Apache-2.0) ist freizügig, doch seine offiziell veröffentlichten Checkpoints tragen über ihre Vicuna-Basis von Llama 2 abgeleitete Bedingungen, plus eine ältere, strengere Nur-Forschung-Aussage auf der separaten Projekt-Homepage — lesen Sie alle drei vor kommerzieller Nutzung. Bei der reinen Fähigkeit 2026 ist LLaVA nicht mehr das stärkste lokale Vision-Modell: keine Commits seit Mai 2024, und neuere Optionen wie Qwen2.5-VL, Llama 3.2 Vision und MiniCPM-V übertreffen es bei OCR, Diagrammen und mehrsprachigen Dokumenten. Wenn Sie die einfachste Einrichtung, die größte Community und die meisten vorhandenen Tutorials wollen, bleibt `ollama run llava` ein wirklich guter Ausgangspunkt. Wenn Dokumentgenauigkeit oder nicht-englischer Text wichtig sind, kombinieren Sie diesen Test mit PromptQuorums [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026) und [Leitfaden zu Ollama-Vision-Modellen](/de/power-local-llm/ollama-vision-models-review), bevor Sie ein Modell wählen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LLaVA auf GitHub](https://github.com/haotian-liu/LLaVA) — das offizielle Repository: README, LICENSE, Installationsanleitung und Commit-Historie.',
          '["Visual Instruction Tuning"-Paper (NeurIPS 2023)](https://llava-vl.github.io/) — die Projekt-Homepage mit Paper-Links, Lizenzaussagen und Versionsgeschichte.',
          '[LLaVA auf Ollama](https://ollama.com/library/llava) — die offiziell aufgeführte Modellseite: Größen, Beschreibung und Bibliotheksmetadaten.',
          '[Ollama-API-Dokumentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — die dokumentierte Form der `/api/generate`- und `/api/chat`-Anfragen/Antworten für multimodale Modelle.',
          '[Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama-Multimodal-Setup](/de/power-local-llm/local-vision-models-llava-ollama-2026) — PromptQuorums breiterer Vergleich aktueller lokaler Vision-Modelle.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama-Multimodal-Setup](/de/power-local-llm/local-vision-models-llava-ollama-2026) — der Vergleichs-Hub mehrerer Modelle, den dieser Test mit LLaVA-spezifischer Tiefe ergänzt.',
          '[Ollama-Vision-Modelle: Ein praktischer Leitfaden](/de/power-local-llm/ollama-vision-models-review) — eine fokussierte Anleitung zum Ausführen von Vision-Modellen speziell über Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA im Test (2026): Das Forschungsmodell, das lokale Vision-KI begründete',
      description:
        'LLaVA im Test: das grundlegende Open-Source-Vision-Language-Modell von UW-Madison und Microsoft Research. Echte Ollama-Befehle, die Apache-2.0-plus-Basismodell-Lizenz und der Vergleich mit neueren lokalen VLMs 2026.',
      url: 'https://promptquorum.com/de/power-local-llm/llava-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, selbst gehostete Vision-Language-Modelle evaluieren' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'Vision-Language-Modell' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Multimodale KI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/llava-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-fr.webp',
    title: 'LLaVA : avis (2026) — le modèle de recherche à l\'origine de l\'IA visuelle locale',
    seoTitle: 'LLaVA : avis 2026 — le premier modèle vision-langage local',
    intro:
      'LLaVA (Large Language and Vision Assistant) est le modèle vision-langage open source qui a établi la manière dont la plupart des IA multimodales locales sont construites aujourd\'hui : un encodeur visuel alimentant un LLM générateur de texte. Créé par des chercheurs de l\'université du Wisconsin-Madison, de Microsoft Research et de l\'université Columbia, distribué sur [GitHub](https://github.com/haotian-liu/LLaVA) et via la [bibliothèque Ollama](https://ollama.com/library/llava), il peut désormais être exécuté en une seule commande (`ollama run llava`). Cet avis couvre ce qu\'est réellement LLaVA, de vraies commandes d\'installation et d\'utilisation, sa licence à deux niveaux (code Apache-2.0 plus licences de poids dépendantes du modèle de base), et sa place actuelle face aux modèles de vision locaux plus récents — le tableau honnête pour 2026.',
    metaDescription:
      'Avis LLaVA : le modèle vision-langage open source fondateur de l\'UW-Madison et de Microsoft Research. Vraies commandes Ollama, sa licence Apache-2.0 plus modèle de base, et sa comparaison aux VLM locaux plus récents en 2026.',
    twitterDescription:
      'Avis LLaVA 2026 : le modèle de recherche qui a établi le schéma encodeur-visuel-plus-LLM que suit encore la plupart de l\'IA multimodale locale. Vraies commandes ollama run, la nuance de licence Apache-2.0 plus modèle de base, et un regard honnête sur sa place face aux options plus récentes.',
    audience:
      'Développeurs évaluant des modèles vision-langage locaux et auto-hébergés qui veulent comprendre l\'histoire de LLaVA, sa structure de licence réelle, et s\'il faut l\'utiliser ou opter pour un modèle plus récent pour un nouveau projet en 2026.',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA avis',
    targetKeywords: [
      'llava avis',
      'llava ollama',
      'llava licence',
      'llava vs qwen2.5-vl',
      'exécuter llava localement',
      'llava modèle vision',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) est un modèle vision-langage open source qui associe un encodeur visuel à un LLM générateur de texte pour répondre à des questions sur des images.** Créé par des chercheurs de l\'université du Wisconsin-Madison, de Microsoft Research et de l\'université Columbia, il est distribué sur [GitHub](https://github.com/haotian-liu/LLaVA) et, plus couramment aujourd\'hui, exécuté via [Ollama](https://ollama.com/library/llava) (`ollama run llava`). Son code est sous licence **Apache-2.0**, mais les checkpoints pré-entraînés dépendent de la licence du LLM de base sur lequel ils ont été affinés (Vicuna, qui porte lui-même la licence communautaire Llama 2) — une nuance à comprendre avant tout usage commercial. Pour une comparaison plus large des modèles de vision locaux actuels, voir le [guide des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que LLaVA et vaut-il encore le coup en 2026 ?',
        answer:
          'LLaVA vaut le coup si vous voulez le modèle vision-langage avec la plus grande communauté, le plus de tutoriels, et le chemin le plus simple vers la compréhension d\'image locale — `ollama pull llava` et vous avez un assistant multimodal fonctionnel en une commande. Il a établi le schéma architectural (un encodeur visuel basé sur CLIP projeté dans l\'espace d\'embedding d\'un LLM) que suivent encore la plupart des modèles vision-langage locaux. Son code est sous Apache-2.0, une licence permissive qui autorise l\'usage commercial, mais ses checkpoints pré-entraînés sont affinés à partir de Vicuna, lui-même construit sur Llama 2 de Meta, donc l\'usage du checkpoint est aussi régi par la licence communautaire Llama 2 — une condition distincte qui s\'ajoute à la concession de code Apache-2.0. En capacité brute, LLaVA n\'est plus l\'option locale la plus performante : son dépôt GitHub n\'a reçu aucun commit depuis mai 2024, et des modèles plus récents comme Qwen2.5-VL, Llama 3.2 Vision et MiniCPM-V le surpassent sur l\'OCR de documents, la lecture de graphiques et le texte multilingue. Choisissez LLaVA pour sa facilité d\'installation, son soutien communautaire et sa large couverture de tutoriels ; choisissez un modèle plus récent si la précision OCR ou le texte non anglais est votre priorité.',
        bullets: [
          'Créé par des chercheurs de l\'UW-Madison, de Microsoft Research et de l\'université Columbia ; présentation orale à NeurIPS 2023.',
          'Licence du code : Apache-2.0. Les checkpoints pré-entraînés sont affinés à partir de Vicuna, qui porte la licence communautaire Llama 2.',
          'S\'exécute via `ollama pull llava` (7B, 13B ou 34B) — le moyen le plus courant de l\'utiliser aujourd\'hui, aux côtés des scripts d\'inférence Python du dépôt d\'origine.',
          'A établi le schéma encodeur-visuel-plus-LLM que suivent encore la plupart des modèles vision-langage locaux.',
          'Aucun commit sur le dépôt GitHub officiel depuis le 11 mai 2024 ; plus de 25 000 étoiles, non archivé.',
          'Des modèles plus récents (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) le surpassent en 2026 sur l\'OCR de documents, les graphiques et le texte multilingue.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : d\'un article de recherche à une référence de l\'IA locale', anchor: 'history' },
      { label: 'Ce que fait réellement LLaVA', anchor: 'what-it-does' },
      { label: 'Installer et exécuter LLaVA : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et coût', anchor: 'license-cost' },
      { label: 'Pour quoi LLaVA n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à LLaVA', anchor: 'alternatives' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
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
            text: 'LLaVA est le modèle vision-langage open source de l\'UW-Madison, de Microsoft Research et de l\'université Columbia qui a établi l\'architecture encodeur-visuel-plus-LLM que suit encore la plupart de l\'IA multimodale locale, sous licence Apache-2.0 pour le code avec des conditions de licence dérivées de Llama 2 pour les checkpoints pré-entraînés, désormais exécutable en une commande via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un modèle d\'IA gratuit capable de regarder une image et de répondre à des questions à son sujet — le projet de recherche qui a prouvé que cela pouvait bien fonctionner et à moindre coût, aujourd\'hui exécutable le plus simplement en tapant `ollama run llava` et en pointant vers un fichier image.',
          },
        ],
        items: [
          'Modèle vision-langage combinant un encodeur visuel CLIP avec un décodeur texte Vicuna (basé sur Llama 2).',
          'Licence du code : Apache-2.0. Les checkpoints pré-entraînés héritent de la licence communautaire Llama 2 via leur base Vicuna.',
          'S\'exécute via `ollama pull llava` en trois tailles : 7B, 13B et 34B.',
          'Aucun commit sur le dépôt GitHub officiel depuis le 11 mai 2024 ; plus de 25 000 étoiles, non archivé.',
          'A établi le schéma architectural utilisé par la plupart des modèles vision-langage locaux ultérieurs.',
          'Des modèles plus récents (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) le surpassent désormais sur l\'OCR, les graphiques et les documents multilingues.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La page d\'origine du projet LLaVA indique que ses données, code et checkpoints sont « destinés et sous licence pour un usage de recherche uniquement », une affirmation antérieure et plus stricte que la licence Apache-2.0 appliquée ensuite au code du dépôt GitHub. Lisez à la fois le fichier LICENSE de GitHub et la page du projet avant tout usage commercial — voir la section Licence et coût ci-dessous.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : d\'un article de recherche à une référence de l\'IA locale',
        content: [
          '**LLaVA a été créé par Haotian Liu, Chunyuan Li, Qingyang Wu et Yong Jae Lee**, chercheurs affiliés à l\'université du Wisconsin-Madison, à Microsoft Research et à l\'université Columbia, et présenté dans l\'article de 2023 « Visual Instruction Tuning », accepté en présentation orale à NeurIPS 2023.',
          '**L\'idée centrale de l\'article était de générer des données d\'entraînement multimodales de suivi d\'instructions en utilisant GPT-4**, puis d\'utiliser ces données pour apprendre à un encodeur visuel et un modèle de langage open source à suivre des instructions visuelles — décrire des images, répondre à des questions à leur sujet et raisonner sur du contenu visuel dans un format conversationnel, pour une fraction du coût d\'entraînement d\'un modèle multimodal propriétaire construit de zéro.',
          '**LLaVA-1.5, sorti en octobre 2023, a atteint des résultats à l\'état de l\'art sur 11 benchmarks avec seulement de simples modifications de l\'architecture d\'origine** — principalement un connecteur vision-langage plus performant et des données d\'entraînement orientées tâches académiques — tout en s\'entraînant en environ une journée sur 8 GPU A100, selon la page du projet.',
          '**LLaVA-NeXT (aussi appelé LLaVA-1.6), sorti en janvier 2024, a ajouté la prise en charge d\'entrées d\'image en plus haute résolution via un découpage dynamique** (jusqu\'à 672×672, ou 336×1344 pour les images larges/hautes), avec une OCR et un raisonnement visuel améliorés, ainsi que la prise en charge de LLM de base supplémentaires au-delà de Vicuna.',
          '**Le dépôt GitHub public [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) a accumulé plus de 25 000 étoiles**, et n\'est pas marqué comme archivé — mais PromptQuorum n\'a trouvé aucun commit sur sa branche principale depuis le 11 mai 2024, d\'après l\'historique public des commits du projet. Cela correspond à une publication de recherche universitaire ayant atteint son objectif (établir et populariser l\'architecture) plutôt qu\'à un produit commercial en développement continu.',
        ],
        faqs: [
          {
            q: 'Qui a créé LLaVA ?',
            a: 'LLaVA a été créé par Haotian Liu, Chunyuan Li, Qingyang Wu et Yong Jae Lee, chercheurs affiliés à l\'université du Wisconsin-Madison, à Microsoft Research et à l\'université Columbia, et présenté dans l\'article de 2023 « Visual Instruction Tuning », une présentation orale à NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que fait réellement LLaVA',
        content: [
          'LLaVA connecte un encodeur visuel à un grand modèle de langage afin que le système combiné puisse accepter une image et un prompt textuel ensemble, puis générer une réponse en langage naturel à propos de l\'image — répondre à des questions, décrire des scènes, lire du texte visible et raisonner sur du contenu visuel de manière conversationnelle.',
        ],
        items: [
          '**Encodeur CLIP plus décodeur LLM.** LLaVA utilise un encodeur visuel CLIP ViT-L/14 pour convertir une image en une séquence de caractéristiques visuelles, projette ces caractéristiques dans le même espace d\'embedding que les tokens texte du modèle de langage via un module connecteur, et alimente la séquence combinée dans un modèle Vicuna (basé sur Llama 2) ou, dans les versions ultérieures, Mistral ou un autre LLM de base pour générer une réponse.',
          '**Instruction tuning visuel.** Plutôt que de s\'entraîner sur des paires image-légende brutes, LLaVA a été affiné sur LLaVA-Instruct-150K, un ensemble de conversations visuelles multi-tours générées en sollicitant GPT-4 avec des légendes d\'images et des annotations de détection d\'objets — apprenant au modèle à suivre des instructions visuelles ouvertes plutôt que de simplement générer des légendes.',
          '**Trois tailles de modèle via Ollama.** La bibliothèque Ollama propose LLaVA en tailles 7B (4,7 Go), 13B (8,0 Go) et 34B (20 Go) — les modèles plus grands produisent généralement des descriptions plus détaillées et précises, au prix de plus de VRAM et d\'une inférence plus lente.',
          '**Améliorations de résolution de LLaVA-1.6 (LLaVA-NeXT).** La version actuelle prise en charge via Ollama et le dépôt officiel gère des résolutions d\'entrée plus élevées via un découpage dynamique, ce qui améliore sensiblement les tâches de lecture de texte et de détail fin par rapport à la version d\'origine de 2023.',
          '**Entraînement centré sur l\'anglais.** LLaVA-Instruct-150K et les benchmarks sous-jacents sur lesquels il a été évalué sont majoritairement en anglais, donc la performance sur du texte non anglais dans les images est plus faible d\'emblée que celle de modèles spécifiquement entraînés sur des données documentaires multilingues.',
        ],
        note: 'LLaVA se comprend mieux comme l\'implémentation de référence d\'une architecture désormais courante, pas comme un produit unique et figé — les modèles communautaires et commerciaux ultérieurs (Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V) suivent un schéma similaire d\'encodeur visuel plus LLM, avec des données d\'entraînement actualisées et des encodeurs à plus haute résolution.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Installer et exécuter LLaVA : étape par étape',
        content: 'Ce guide couvre le chemin le plus rapide et le plus courant (Ollama) et mentionne pour référence le chemin propre au dépôt d\'origine.',
        numberedItems: [
          {
            title: 'Installer Ollama.',
            whyItMatters: 'Téléchargez et installez [Ollama](https://ollama.com) pour macOS, Linux ou Windows. C\'est le moyen officiellement listé d\'exécuter LLaVA selon sa [page de bibliothèque Ollama](https://ollama.com/library/llava), et cela prend moins de deux minutes.',
          },
          {
            title: 'Télécharger une taille de modèle LLaVA.',
            whyItMatters: 'Exécutez `ollama pull llava` pour le modèle 7B par défaut (~4,7 Go), ou `ollama pull llava:13b` (~8,0 Go) ou `ollama pull llava:34b` (~20 Go) pour une meilleure qualité au prix de plus de VRAM et d\'espace disque.',
          },
          {
            title: 'L\'exécuter avec une image depuis la CLI.',
            whyItMatters: 'Exécutez `ollama run llava "describe this image: ./photo.jpg"`, en référençant directement un chemin de fichier image local dans le texte du prompt — aucun indicateur séparé n\'est requis.',
          },
          {
            title: '(Alternative) Utiliser le dépôt d\'origine pour un contrôle de niveau recherche.',
            whyItMatters: 'Clonez [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA), installez son `requirements.txt`, et téléchargez un checkpoint depuis Hugging Face pour un accès complet aux scripts d\'entraînement, aux harnais d\'évaluation et à la démo web Gradio — utile pour la recherche ou l\'affinage, mais une barrière d\'installation nettement plus élevée qu\'Ollama.',
          },
          {
            title: '(Optionnel) L\'appeler par programmation via l\'API Ollama.',
            whyItMatters: 'Envoyez une requête POST à `http://localhost:11434/api/generate` avec l\'image encodée en base64 dans un tableau `images`, ou utilisez la bibliothèque officielle Python ou JavaScript `ollama` — voir l\'exemple de code ci-dessous.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Ces exemples utilisent la syntaxe CLI documentée d\'Ollama et son API HTTP — le moyen principal et pris en charge d\'exécuter LLaVA aujourd\'hui.',
        ],
        codeBlock: `# Installer et télécharger le modèle
# (téléchargez d'abord Ollama depuis https://ollama.com)
ollama pull llava

# CLI : décrire une image en référençant son chemin de fichier dans le prompt
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP (documentée dans le docs/api.md propre à Ollama) ---
# /api/generate avec une image encodée en base64
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<données image encodées en base64>"]
}'

# /api/chat avec une image encodée en base64 (conversations multi-tours)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<données image encodées en base64>"] }
  ]
}'

# --- Exemple Python avec la bibliothèque officielle ollama ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'Le champ `images` accepte des données image encodées en base64 pour l\'API HTTP brute, documentée dans [le api.md d\'Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) ; les bibliothèques officielles Python et JavaScript acceptent directement un chemin de fichier et gèrent l\'encodage pour vous, comme montré ci-dessus.',
        items: [
          '**Référencer un chemin de fichier dans le prompt CLI suffit** — Ollama détecte le chemin `.jpg`/`.png` et attache l\'image automatiquement ; il n\'existe pas d\'indicateur `--image` séparé.',
          '**Les tailles de modèle plus grandes coûtent plus de VRAM et de temps.** Le modèle 7B est l\'option la plus rapide et la moins gourmande en VRAM ; utilisez 13B ou 34B lorsque la précision de description importe plus que la vitesse.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et coût',
        content: [
          '**Le code de LLaVA, dans le [dépôt GitHub officiel](https://github.com/haotian-liu/LLaVA), est sous licence Apache-2.0**, confirmé via le fichier LICENSE du dépôt et ses métadonnées de licence rapportées par GitHub. Apache-2.0 est une licence permissive : vous pouvez utiliser, modifier et redistribuer le code, y compris commercialement, avec attribution et une concession de brevet, et une restriction minimale supplémentaire.',
          '**Les checkpoints pré-entraînés, c\'est une autre histoire : ils héritent de conditions de leur LLM de base.** Les checkpoints LLaVA officiellement publiés sont affinés à partir de Vicuna, un chatbot instruction-tuné lui-même construit sur Llama 2 de Meta, et la documentation propre du projet indique que les utilisateurs « doivent se conformer à toutes les conditions » des licences d\'origine — nommant spécifiquement les conditions de licence de Llama 2, Vicuna, CLIP, et les conditions d\'utilisation d\'OpenAI (car GPT-4 a été utilisé pour générer les données d\'entraînement). Cela signifie que l\'usage autorisé du checkpoint est régi par les conditions de la licence communautaire Llama 2 (y compris ses restrictions d\'usage acceptable et l\'exigence que les très grands déploiements commerciaux obtiennent une licence séparée de Meta), pas uniquement par Apache-2.0.',
          '**La page d\'origine du projet LLaVA (un site distinct du dépôt GitHub) ajoute une affirmation plus stricte et plus ancienne :** elle décrit les « données, le code et le checkpoint » comme « destinés et sous licence pour un usage de recherche uniquement », et note séparément la désignation CC BY-NC 4.0 (non commerciale) du jeu de données d\'entraînement. Cela précède, et est plus strict que, la licence de code Apache-2.0 désormais affichée sur GitHub — une combinaison véritablement déroutante d\'affirmations du même projet sur deux pages différentes, qu\'il vaut la peine de signaler plutôt que de choisir celle qui arrange le plus.',
          'Rien de tout cela n\'est un conseil juridique. Avant de déployer LLaVA — ou tout checkpoint affiné construit dessus — dans un produit commercial, lisez le fichier LICENSE de GitHub, les conditions énoncées sur la page du projet, la licence communautaire Llama 2, et consultez un avocat pour votre modèle de base et déploiement spécifiques.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise LLaVA ?',
            a: 'Le code de LLaVA sur GitHub est sous licence Apache-2.0, une licence permissive qui autorise l\'usage commercial. Ses checkpoints pré-entraînés officiellement publiés sont affinés à partir de Vicuna (construit sur Llama 2 de Meta), donc leur usage est aussi régi par les conditions de la licence communautaire Llama 2. La page d\'accueil distincte du projet décrit en outre les données, le code et les checkpoints comme destinés à un usage de recherche uniquement, et le jeu de données d\'entraînement comme CC BY-NC 4.0 (non commercial) — une affirmation plus ancienne et plus stricte que la licence GitHub. Ceci n\'est pas un conseil juridique ; lisez tout ce qui précède vous-même avant tout usage commercial d\'un checkpoint spécifique.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi LLaVA n\'est pas adapté',
        content: [
          'LLaVA reste un modèle véritablement utile et bien documenté, mais ce n\'est plus le choix le plus performant pour toute tâche de vision en 2026. C\'est le mauvais outil pour les situations suivantes :',
        ],
        items: [
          '**Les tâches purement textuelles.** LLaVA est un modèle vision-langage ; pour une conversation textuelle pure sans image impliquée, utilisez un LLM textuel dédié (via Ollama ou autrement) — exécuter un modèle multimodal pour un chat purement textuel gaspille le VRAM occupé par son encodeur visuel sans aucun bénéfice.',
          '**Avoir besoin de l\'OCR ou de la compréhension documentaire locale la plus performante disponible.** En 2026, les modèles sortis après LLaVA-NeXT — MiniCPM-V, Qwen2.5-VL et Llama 3.2 Vision — le surpassent sur l\'OCR de documents, les tableaux et l\'extraction structurée, selon la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum. L\'encodeur visuel de LLaVA a été conçu et entraîné avant que cette génération de données d\'entraînement en plus haute résolution et axées documents n\'existe.',
          '**Lire du texte non anglais dans des images.** LLaVA-Instruct-150K et les données d\'entraînement de base du modèle sont majoritairement en anglais. Pour l\'OCR de documents en chinois, japonais, coréen ou autre écriture non latine, un modèle spécifiquement entraîné sur des corpus documentaires multilingues (Qwen2.5-VL) le surpassera sensiblement.',
          '**L\'extraction numérique précise de graphiques et de diagrammes.** Comme pratiquement tous les modèles vision-langage locaux en 2026, LLaVA n\'est pas fiable pour lire des valeurs exactes sur des graphiques complexes — vérifiez tout chiffre extrait par rapport aux données source, quel que soit le modèle utilisé.',
          '**Supposer un développement actif continu.** Sans commit sur le dépôt officiel depuis le 11 mai 2024, n\'attendez pas de nouvelles fonctionnalités, corrections de bugs ou checkpoints plus récents du projet d\'origine — les propres mises à jour du moteur multimodal d\'Ollama et les familles de modèles plus récentes l\'ont effectivement supplanté comme option activement développée.',
          '**Une histoire de licence unique et simple.** Comme le code (Apache-2.0) et les checkpoints officiellement publiés (Apache-2.0 plus conditions héritées de la licence communautaire Llama 2, plus une affirmation plus stricte de recherche uniquement sur la page d\'accueil distincte du projet) sont régis par trois affirmations qui se chevauchent sans être pleinement alignées, LLaVA n\'offre pas la clarté de licence en une ligne qu\'offre un projet comme Bark (entièrement MIT, sans condition supplémentaire).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à LLaVA',
        itemHeadings: true,
        columns: ['Outil', 'Idéal pour', 'Licence'],
        rows: [
          {
            'Outil': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (via Ollama)',
            'Idéal pour': 'Meilleure qualité générale de Q&R image locale ; tailles 11B et 90B',
            'Licence': 'Licence communautaire Llama 3.2',
          },
          {
            'Outil': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (via Ollama)',
            'Idéal pour': 'OCR locale et compréhension documentaire multilingue les plus performantes',
            'Licence': 'Licence Qwen (Apache-2.0 pour les petites tailles)',
          },
          {
            'Outil': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (via Ollama)',
            'Idéal pour': 'Haute précision d\'OCR documentaire à faible VRAM (~6 Go)',
            'Licence': 'Dérivée d\'Apache-2.0 (OpenBMB)',
          },
          {
            'Outil': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'Idéal pour': 'VLM de recherche ouvert avec de solides benchmarks documents/OCR, pas encore packagé pour Ollama',
            'Licence': 'Apache-2.0 (conditions du modèle de base pour la variante Llama3)',
          },
          {
            'Outil': 'API VLM cloud (GPT-4o, Claude, Gemini Vision)',
            'Idéal pour': 'Capacité multimodale la plus élevée disponible, aucun matériel local requis',
            'Licence': 'Propriétaire (API payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que LLaVA ?',
            a: 'LLaVA (Large Language and Vision Assistant) est un modèle vision-langage open source créé par des chercheurs de l\'université du Wisconsin-Madison, de Microsoft Research et de l\'université Columbia, qui combine un encodeur visuel avec un grand modèle de langage pour répondre à des questions sur des images, présenté dans l\'article de 2023 « Visual Instruction Tuning ».',
          },
          {
            q: 'Puis-je utiliser LLaVA commercialement ?',
            a: 'Le code de LLaVA sur GitHub est sous licence Apache-2.0, qui autorise l\'usage commercial. Cependant, ses checkpoints pré-entraînés officiellement publiés sont affinés à partir de Vicuna, construit sur Llama 2 de Meta, donc leur usage est aussi régi par les conditions de la licence communautaire Llama 2. Une page d\'accueil distincte du projet décrit en outre les données, le code et les checkpoints comme destinés à la recherche uniquement, et les données d\'entraînement comme non commerciales (CC BY-NC 4.0) — une affirmation plus ancienne et plus stricte que la licence GitHub. Ceci n\'est pas un conseil juridique ; lisez toutes les licences applicables avant tout déploiement commercial d\'un checkpoint spécifique.',
          },
          {
            q: 'Comment exécuter LLaVA ?',
            a: 'Le moyen le plus courant est via Ollama : installez Ollama, exécutez `ollama pull llava`, puis `ollama run llava "describe this image: ./photo.jpg"`. Le dépôt d\'origine propose aussi ses propres scripts d\'inférence Python et une démo Gradio pour un contrôle de niveau recherche.',
          },
          {
            q: 'Quelle est la différence entre LLaVA, LLaVA-1.5 et LLaVA-NeXT (LLaVA-1.6) ?',
            a: 'LLaVA (2023) était l\'architecture d\'origine. LLaVA-1.5 (octobre 2023) a amélioré les résultats de benchmark avec un connecteur plus performant et de meilleures données d\'entraînement. LLaVA-NeXT, aussi appelé LLaVA-1.6 (janvier 2024), a ajouté des entrées d\'image en plus haute résolution via un découpage dynamique et amélioré l\'OCR et le raisonnement visuel. La version distribuée via Ollama et le dépôt GitHub actuel reflète les améliorations de LLaVA-1.6/NeXT.',
          },
          {
            q: 'LLaVA est-il encore activement maintenu ?',
            a: 'Le dépôt GitHub officiel n\'est pas marqué comme archivé, mais PromptQuorum n\'a trouvé aucun commit depuis le 11 mai 2024. Traitez-le comme une publication de recherche achevée plutôt que comme un logiciel activement développé — des modèles plus récents et les propres mises à jour du moteur multimodal d\'Ollama l\'ont largement supplanté pour de nouveaux projets.',
          },
          {
            q: 'Comment LLaVA se compare-t-il à des modèles plus récents comme Qwen2.5-VL ou Llama 3.2 Vision ?',
            a: 'LLaVA a établi l\'architecture que ces modèles plus récents suivent aussi, mais en 2026 il est surpassé par Qwen2.5-VL et Llama 3.2 Vision sur l\'OCR de documents, la lecture de graphiques et (spécifiquement pour Qwen2.5-VL) le texte non anglais, selon la comparaison des modèles de vision locaux de PromptQuorum. LLaVA reste pertinent pour sa facilité d\'installation, sa grande communauté et sa couverture de tutoriels étendue.',
          },
          {
            q: 'Ollama prend-il réellement en charge l\'exécution de LLaVA ?',
            a: 'Oui — `ollama run llava` est un modèle officiellement listé dans la [bibliothèque Ollama](https://ollama.com/library/llava), disponible en tailles 7B, 13B et 34B, et c\'est aujourd\'hui l\'un des moyens les plus courants d\'exécuter LLaVA, aux côtés des propres scripts d\'inférence du dépôt d\'origine.',
          },
          {
            q: 'De quel matériel ai-je besoin pour exécuter LLaVA ?',
            a: 'Le modèle 7B nécessite environ 4,7 Go d\'espace disque et peut fonctionner sur un GPU avec 6-8 Go de VRAM (ou sur CPU, plus lentement) ; les modèles 13B et 34B nécessitent proportionnellement plus de VRAM et d\'espace disque pour une meilleure qualité de description.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LLaVA a gagné sa place dans l\'histoire de l\'IA locale : il a prouvé qu\'un encodeur visuel modeste connecté à un LLM open source, affiné sur des données d\'instruction générées par GPT-4, pouvait offrir une compréhension d\'image réellement utile sans budget d\'entraînement propriétaire — et le schéma encodeur-visuel-plus-LLM qu\'il a établi est toujours la base de la plupart des modèles multimodaux locaux. Sa licence de code (Apache-2.0) est permissive, mais ses checkpoints officiellement publiés portent des conditions dérivées de Llama 2 via leur base Vicuna, plus une affirmation plus ancienne et plus stricte de recherche uniquement sur la page d\'accueil distincte du projet — lisez les trois avant tout usage commercial. En capacité brute en 2026, LLaVA n\'est plus le modèle de vision local le plus performant : aucun commit depuis mai 2024, et des options plus récentes comme Qwen2.5-VL, Llama 3.2 Vision et MiniCPM-V le surpassent sur l\'OCR, les graphiques et les documents multilingues. Si vous voulez l\'installation la plus simple, la plus grande communauté et le plus de tutoriels existants, `ollama run llava` reste un très bon point de départ. Si la précision documentaire ou le texte non anglais compte, combinez cet avis avec la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026) et le [guide des modèles de vision Ollama](/fr/power-local-llm/ollama-vision-models-review) de PromptQuorum avant de choisir un modèle.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLaVA sur GitHub](https://github.com/haotian-liu/LLaVA) — le dépôt officiel : README, LICENSE, instructions d\'installation et historique des commits.',
          '[Article « Visual Instruction Tuning » (NeurIPS 2023)](https://llava-vl.github.io/) — la page d\'accueil du projet avec liens vers l\'article, affirmations de licence et historique des versions.',
          '[LLaVA sur Ollama](https://ollama.com/library/llava) — la page de modèle officiellement listée : tailles, description et métadonnées de bibliothèque.',
          '[Documentation de l\'API Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — la forme documentée des requêtes/réponses `/api/generate` et `/api/chat` pour les modèles multimodaux.',
          '[Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen3-VL & configuration multimodale Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — la comparaison plus large de PromptQuorum des modèles de vision locaux actuels.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen3-VL & configuration multimodale Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — le hub de comparaison multi-modèles que cet avis complète avec une profondeur spécifique à LLaVA.',
          '[Modèles de vision Ollama : un guide pratique](/fr/power-local-llm/ollama-vision-models-review) — un guide pratique centré sur l\'exécution de modèles de vision spécifiquement via Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA : avis (2026) — le modèle de recherche à l\'origine de l\'IA visuelle locale',
      description:
        'Avis LLaVA : le modèle vision-langage open source fondateur de l\'UW-Madison et de Microsoft Research. Vraies commandes Ollama, sa licence Apache-2.0 plus modèle de base, et sa comparaison aux VLM locaux plus récents en 2026.',
      url: 'https://promptquorum.com/fr/power-local-llm/llava-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des modèles vision-langage locaux et auto-hébergés' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'Modèle vision-langage' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'IA multimodale' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA : avis (2026)', item: 'https://promptquorum.com/fr/power-local-llm/llava-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-es.webp',
    title: 'LLaVA: análisis (2026) — el modelo de investigación que inició la IA visual local',
    seoTitle: 'LLaVA: análisis 2026 — el primer modelo visión-lenguaje local',
    intro:
      'LLaVA (Large Language and Vision Assistant) es el modelo visión-lenguaje de código abierto que estableció cómo se construye hoy la mayoría de la IA multimodal local: un codificador visual que alimenta a un LLM generador de texto. Creado por investigadores de la Universidad de Wisconsin-Madison, Microsoft Research y la Universidad de Columbia, y distribuido en [GitHub](https://github.com/haotian-liu/LLaVA) y a través de la [biblioteca de Ollama](https://ollama.com/library/llava), ahora se puede ejecutar con un solo comando (`ollama run llava`). Este análisis cubre qué es realmente LLaVA, comandos reales de instalación y uso, su licencia de dos niveles (código Apache-2.0 más licencias de pesos dependientes del modelo base), y dónde se sitúa hoy frente a modelos de visión locales más recientes — el panorama honesto para 2026.',
    metaDescription:
      'Análisis de LLaVA: el modelo visión-lenguaje de código abierto fundacional de la UW-Madison y Microsoft Research. Comandos reales de Ollama, su licencia Apache-2.0 más modelo base, y su comparación con VLMs locales más recientes en 2026.',
    twitterDescription:
      'Análisis de LLaVA 2026: el modelo de investigación que estableció el patrón codificador-visual-más-LLM que sigue la mayoría de la IA multimodal local. Comandos reales de ollama run, el matiz de licencia Apache-2.0 más modelo base, y una mirada honesta a cómo se compara con opciones más recientes.',
    audience:
      'Desarrolladores que evalúan modelos visión-lenguaje locales y autoalojados que quieren entender la historia de LLaVA, su estructura de licencia real, y si usarlo o elegir un modelo más reciente para un nuevo proyecto en 2026.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA análisis',
    targetKeywords: [
      'llava análisis',
      'llava ollama',
      'llava licencia',
      'llava vs qwen2.5-vl',
      'ejecutar llava localmente',
      'llava modelo de visión',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) es un modelo visión-lenguaje de código abierto que combina un codificador visual con un LLM generador de texto para responder preguntas sobre imágenes.** Creado por investigadores de la Universidad de Wisconsin-Madison, Microsoft Research y la Universidad de Columbia, se distribuye en [GitHub](https://github.com/haotian-liu/LLaVA) y, más comúnmente hoy, se ejecuta mediante [Ollama](https://ollama.com/library/llava) (`ollama run llava`). Su código tiene licencia **Apache-2.0**, pero los checkpoints preentrenados dependen de la licencia del LLM base a partir del cual fueron ajustados (Vicuna, que a su vez lleva la licencia comunitaria de Llama 2) — un matiz que conviene entender antes de un uso comercial. Para una comparación más amplia de los modelos de visión locales actuales, consulta la [guía de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es LLaVA y sigue valiendo la pena en 2026?',
        answer:
          'LLaVA vale la pena si quieres el modelo visión-lenguaje con la comunidad más grande, la mayor cantidad de tutoriales y el camino más simple hacia la comprensión de imágenes local — `ollama pull llava` y tienes un asistente multimodal funcional en un comando. Estableció el patrón arquitectónico (un codificador visual basado en CLIP proyectado en el espacio de embeddings de un LLM) que aún siguen la mayoría de los modelos visión-lenguaje locales. Su código es Apache-2.0, una licencia permisiva que permite el uso comercial, pero sus checkpoints preentrenados están ajustados a partir de Vicuna, construido a su vez sobre Llama 2 de Meta, por lo que el uso del checkpoint también se rige por la licencia comunitaria de Llama 2 — una condición distinta que se suma a la concesión de código Apache-2.0. En capacidad pura, LLaVA ya no es la opción local más fuerte: su repositorio de GitHub no ha tenido commits desde mayo de 2024, y modelos más recientes como Qwen2.5-VL, Llama 3.2 Vision y MiniCPM-V lo superan en OCR de documentos, lectura de gráficos y texto multilingüe. Elige LLaVA por su facilidad de instalación, apoyo comunitario y amplia cobertura de tutoriales; elige un modelo más reciente si la precisión de OCR o el texto no inglés es tu prioridad.',
        bullets: [
          'Creado por investigadores de la UW-Madison, Microsoft Research y la Universidad de Columbia; presentación oral en NeurIPS 2023.',
          'Licencia del código: Apache-2.0. Los checkpoints preentrenados están ajustados a partir de Vicuna, que lleva la licencia comunitaria de Llama 2.',
          'Se ejecuta mediante `ollama pull llava` (7B, 13B o 34B) — la forma más común de usarlo hoy, junto a los propios scripts de inferencia en Python del repositorio original.',
          'Estableció el patrón codificador-visual-más-LLM que aún siguen la mayoría de los modelos visión-lenguaje locales.',
          'Sin commits en el repositorio oficial de GitHub desde el 11 de mayo de 2024; más de 25.000 estrellas, no archivado.',
          'Modelos más recientes (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) lo superan en 2026 en OCR de documentos, gráficos y texto multilingüe.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: de un artículo de investigación a un estándar de IA local', anchor: 'history' },
      { label: 'Qué hace realmente LLaVA', anchor: 'what-it-does' },
      { label: 'Instalar y ejecutar LLaVA: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y costo', anchor: 'license-cost' },
      { label: 'Para qué no es bueno LLaVA', anchor: 'limitations' },
      { label: 'Alternativas a LLaVA', anchor: 'alternatives' },
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
            text: 'LLaVA es el modelo visión-lenguaje de código abierto de la UW-Madison, Microsoft Research y la Universidad de Columbia que estableció la arquitectura codificador-visual-más-LLM que aún usa la mayoría de la IA multimodal local, con licencia Apache-2.0 para el código y condiciones de licencia derivadas de Llama 2 para los checkpoints preentrenados, ejecutable hoy con un solo comando mediante Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Es un modelo de IA gratuito que puede mirar una imagen y responder preguntas sobre ella — el proyecto de investigación que demostró que esto podía funcionar bien y de forma económica, hoy ejecutable de la forma más simple escribiendo `ollama run llava` y apuntando a un archivo de imagen.',
          },
        ],
        items: [
          'Modelo visión-lenguaje que combina un codificador visual CLIP con un decodificador de texto Vicuna (basado en Llama 2).',
          'Licencia del código: Apache-2.0. Los checkpoints preentrenados heredan la licencia comunitaria de Llama 2 a través de su base Vicuna.',
          'Se ejecuta mediante `ollama pull llava` en tres tamaños: 7B, 13B y 34B.',
          'Sin commits en el repositorio oficial de GitHub desde el 11 de mayo de 2024; más de 25.000 estrellas, no archivado.',
          'Estableció el patrón arquitectónico que usan la mayoría de los modelos visión-lenguaje locales posteriores.',
          'Modelos más recientes (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) ahora lo superan en OCR, gráficos y documentos multilingües.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La página original del proyecto LLaVA indica que sus datos, código y checkpoint están "destinados y con licencia solo para uso de investigación", una afirmación anterior y más estricta que la licencia Apache-2.0 aplicada después al código del repositorio de GitHub. Lee tanto el archivo LICENSE de GitHub como la página del proyecto antes de un uso comercial — ver la sección Licencia y costo más abajo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: de un artículo de investigación a un estándar de IA local',
        content: [
          '**LLaVA fue creado por Haotian Liu, Chunyuan Li, Qingyang Wu y Yong Jae Lee**, investigadores afiliados a la Universidad de Wisconsin-Madison, Microsoft Research y la Universidad de Columbia, y presentado en el artículo de 2023 "Visual Instruction Tuning", aceptado como presentación oral en NeurIPS 2023.',
          '**La idea central del artículo fue generar datos de entrenamiento multimodales de seguimiento de instrucciones usando GPT-4**, y luego usar esos datos para enseñar a un codificador visual y un modelo de lenguaje de código abierto a seguir instrucciones visuales — describir imágenes, responder preguntas sobre ellas y razonar sobre contenido visual en formato conversacional, a una fracción del costo de entrenamiento de construir un modelo multimodal propietario desde cero.',
          '**LLaVA-1.5, lanzado en octubre de 2023, logró resultados de vanguardia en 11 benchmarks con solo modificaciones simples a la arquitectura original** — principalmente un conector visión-lenguaje de mayor capacidad y datos de entrenamiento orientados a tareas académicas — mientras se entrenaba en aproximadamente un día en 8 GPU A100, según la propia página del proyecto.',
          '**LLaVA-NeXT (también llamado LLaVA-1.6), lanzado en enero de 2024, añadió soporte para entrada de imágenes de mayor resolución mediante parcheo dinámico** (hasta 672×672, o 336×1344 para imágenes anchas/altas), junto con OCR y razonamiento visual mejorados, y soporte para LLMs base adicionales más allá de Vicuna.',
          '**El repositorio público de GitHub [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) ha acumulado más de 25.000 estrellas**, y no está marcado como archivado — pero PromptQuorum no encontró commits en su rama principal desde el 11 de mayo de 2024, según el historial público de commits del propio proyecto. Esto es consistente con una publicación de investigación universitaria que cumplió su objetivo (establecer y popularizar la arquitectura) en lugar de un producto comercial en desarrollo continuo.',
        ],
        faqs: [
          {
            q: '¿Quién creó LLaVA?',
            a: 'LLaVA fue creado por Haotian Liu, Chunyuan Li, Qingyang Wu y Yong Jae Lee, investigadores afiliados a la Universidad de Wisconsin-Madison, Microsoft Research y la Universidad de Columbia, y presentado en el artículo de 2023 "Visual Instruction Tuning", una presentación oral en NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente LLaVA',
        content: [
          'LLaVA conecta un codificador visual con un modelo de lenguaje grande para que el sistema combinado pueda aceptar una imagen y un prompt de texto juntos, y luego generar una respuesta en lenguaje natural sobre la imagen — respondiendo preguntas, describiendo escenas, leyendo texto visible y razonando sobre contenido visual de forma conversacional.',
        ],
        items: [
          '**Codificador CLIP más decodificador LLM.** LLaVA usa un codificador visual CLIP ViT-L/14 para convertir una imagen en una secuencia de características visuales, proyecta esas características en el mismo espacio de embeddings que los tokens de texto del modelo de lenguaje mediante un módulo conector, y alimenta la secuencia combinada a un modelo Vicuna (basado en Llama 2) o, en versiones posteriores, Mistral u otro LLM base para generar una respuesta.',
          '**Ajuste por instrucciones visuales.** En lugar de entrenar con pares imagen-descripción crudos, LLaVA fue ajustado con LLaVA-Instruct-150K, un conjunto de datos de conversaciones visuales multi-turno generadas al pedirle a GPT-4 descripciones de imágenes y anotaciones de detección de objetos — enseñando al modelo a seguir instrucciones visuales abiertas en lugar de solo generar descripciones.',
          '**Tres tamaños de modelo mediante Ollama.** La biblioteca de Ollama empaqueta LLaVA en tamaños 7B (4,7 GB), 13B (8,0 GB) y 34B (20 GB) — los modelos más grandes generalmente producen descripciones más detalladas y precisas, a costa de más VRAM e inferencia más lenta.',
          '**Mejoras de resolución de LLaVA-1.6 (LLaVA-NeXT).** La versión actual soportada mediante Ollama y el repositorio oficial maneja resoluciones de entrada más altas mediante parcheo dinámico, lo que mejora notablemente las tareas de lectura de texto y detalle fino en comparación con la versión original de 2023.',
          '**Entrenamiento centrado en inglés.** LLaVA-Instruct-150K y los benchmarks subyacentes con los que fue evaluado son predominantemente en inglés, por lo que el rendimiento en texto no inglés dentro de imágenes es más débil de fábrica que en modelos entrenados específicamente con datos documentales multilingües.',
        ],
        note: 'LLaVA se entiende mejor como la implementación de referencia de una arquitectura ahora común, no como un producto único y fijo — modelos comunitarios y comerciales posteriores (Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V) siguen un patrón similar de codificador visual más LLM, con datos de entrenamiento actualizados y codificadores de mayor resolución.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar y ejecutar LLaVA: paso a paso',
        content: 'Esta guía cubre el camino más rápido y común (Ollama) y menciona el propio camino del repositorio original como referencia.',
        numberedItems: [
          {
            title: 'Instalar Ollama.',
            whyItMatters: 'Descarga e instala [Ollama](https://ollama.com) para macOS, Linux o Windows. Esta es la forma oficialmente listada de ejecutar LLaVA según su [página en la biblioteca de Ollama](https://ollama.com/library/llava), y toma menos de dos minutos.',
          },
          {
            title: 'Descargar un tamaño de modelo LLaVA.',
            whyItMatters: 'Ejecuta `ollama pull llava` para el modelo predeterminado de 7B (~4,7 GB), o `ollama pull llava:13b` (~8,0 GB) o `ollama pull llava:34b` (~20 GB) para mayor calidad a costa de más VRAM y espacio en disco.',
          },
          {
            title: 'Ejecutarlo con una imagen desde la CLI.',
            whyItMatters: 'Ejecuta `ollama run llava "describe this image: ./photo.jpg"`, referenciando directamente una ruta de archivo de imagen local en el texto del prompt — no se requiere una bandera separada.',
          },
          {
            title: '(Alternativa) Usar el repositorio original para control de nivel de investigación.',
            whyItMatters: 'Clona [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA), instala su `requirements.txt`, y descarga un checkpoint desde Hugging Face para acceso completo a scripts de entrenamiento, arneses de evaluación y la demo web de Gradio — útil para investigación o ajuste fino, pero una barrera de instalación notablemente más alta que Ollama.',
          },
          {
            title: '(Opcional) Llamarlo programáticamente mediante la API de Ollama.',
            whyItMatters: 'Envía una solicitud POST a `http://localhost:11434/api/generate` con la imagen como una cadena codificada en base64 en un arreglo `images`, o usa la biblioteca oficial de Python o JavaScript `ollama` — ver el ejemplo de código a continuación.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Estos ejemplos usan la sintaxis CLI documentada de Ollama y su API HTTP — la forma principal y compatible de ejecutar LLaVA hoy.',
        ],
        codeBlock: `# Instalar y descargar el modelo
# (descarga primero Ollama desde https://ollama.com)
ollama pull llava

# CLI: describir una imagen referenciando su ruta de archivo en el prompt
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP (documentada en el docs/api.md propio de Ollama) ---
# /api/generate con una imagen codificada en base64
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<datos de imagen codificados en base64>"]
}'

# /api/chat con una imagen codificada en base64 (conversaciones multi-turno)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<datos de imagen codificados en base64>"] }
  ]
}'

# --- Ejemplo en Python usando la biblioteca oficial ollama ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'El campo `images` acepta datos de imagen codificados en base64 para la API HTTP en bruto, documentada en el [api.md de Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md); las bibliotecas oficiales de Python y JavaScript aceptan directamente una ruta de archivo y manejan la codificación por ti, como se muestra arriba.',
        items: [
          '**Referenciar una ruta de archivo en el prompt de la CLI es suficiente** — Ollama detecta la ruta `.jpg`/`.png` y adjunta la imagen automáticamente; no existe una bandera `--image` separada.',
          '**Los tamaños de modelo más grandes cuestan más VRAM y tiempo.** El modelo 7B es la opción más rápida y con menor consumo de VRAM; usa 13B o 34B cuando la precisión de la descripción importe más que la velocidad.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y costo',
        content: [
          '**El código de LLaVA, en el [repositorio oficial de GitHub](https://github.com/haotian-liu/LLaVA), tiene licencia Apache-2.0**, confirmado mediante el archivo LICENSE del repositorio y sus metadatos de licencia reportados por GitHub. Apache-2.0 es una licencia permisiva: puedes usar, modificar y redistribuir el código, incluso comercialmente, con atribución y una concesión de patente, y una restricción mínima adicional.',
          '**Los checkpoints preentrenados son otra historia: heredan condiciones de su LLM base.** Los checkpoints de LLaVA publicados oficialmente están ajustados a partir de Vicuna, un chatbot ajustado por instrucciones construido a su vez sobre Llama 2 de Meta, y la propia documentación del proyecto indica que los usuarios "deben cumplir con todos los términos y condiciones" de las licencias originales — nombrando específicamente los términos de licencia de Llama 2, Vicuna, CLIP, y los términos de uso de OpenAI (porque GPT-4 se usó para generar los datos de entrenamiento). Esto significa que el uso permitido del checkpoint se rige por los términos de la licencia comunitaria de Llama 2 (incluidas sus restricciones de uso aceptable y el requisito de que los despliegues comerciales muy grandes obtengan una licencia separada de Meta), no solo por Apache-2.0.',
          '**La página original del proyecto LLaVA (un sitio separado del repositorio de GitHub) añade una afirmación más estricta y más antigua:** describe los "datos, código y checkpoint" como "destinados y con licencia solo para uso de investigación", y señala por separado la designación CC BY-NC 4.0 (no comercial) del conjunto de datos de entrenamiento. Esto es anterior, y más estricto, que la licencia de código Apache-2.0 mostrada ahora en GitHub — una combinación genuinamente confusa de afirmaciones del mismo proyecto en dos páginas diferentes, que vale la pena señalar en lugar de elegir la que resulte más conveniente.',
          'Nada de esto es asesoría legal. Antes de lanzar LLaVA — o cualquier checkpoint ajustado construido sobre él — en un producto comercial, lee el archivo LICENSE de GitHub, los términos indicados en la página del proyecto, la licencia comunitaria de Llama 2, y consulta a un abogado para tu modelo base y despliegue específicos.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa LLaVA?',
            a: 'El código de LLaVA en GitHub tiene licencia Apache-2.0, una licencia permisiva que permite el uso comercial. Sus checkpoints preentrenados publicados oficialmente están ajustados a partir de Vicuna (construido sobre Llama 2 de Meta), por lo que su uso también se rige por los términos de la licencia comunitaria de Llama 2. Una página de inicio separada del proyecto describe además los datos, el código y los checkpoints como destinados solo a investigación, y los datos de entrenamiento como no comerciales (CC BY-NC 4.0) — una afirmación más antigua y estricta que la licencia de GitHub. Esto no es asesoría legal; lee todo lo anterior tú mismo antes del uso comercial de un checkpoint específico.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no es bueno LLaVA',
        content: [
          'LLaVA sigue siendo un modelo genuinamente útil y bien documentado, pero ya no es la opción más potente para toda tarea de visión en 2026. Es la herramienta equivocada para las siguientes situaciones:',
        ],
        items: [
          '**Tareas puramente de texto.** LLaVA es un modelo visión-lenguaje; para una conversación puramente textual sin imagen involucrada, usa un LLM de texto dedicado (mediante Ollama o de otra forma) — ejecutar un modelo multimodal para chat solo de texto desperdicia el VRAM que ocupa su codificador visual sin ningún beneficio.',
          '**Necesitar la OCR o comprensión documental local más potente disponible.** A partir de 2026, modelos lanzados después de LLaVA-NeXT — MiniCPM-V, Qwen2.5-VL y Llama 3.2 Vision — lo superan en OCR de documentos, tablas y extracción estructurada, según la [comparación de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum. El codificador visual de LLaVA fue diseñado y entrenado antes de que existiera esta generación de datos de entrenamiento de mayor resolución y enfocados en documentos.',
          '**Leer texto no inglés en imágenes.** LLaVA-Instruct-150K y los datos de entrenamiento centrales del modelo son predominantemente en inglés. Para OCR de documentos en chino, japonés, coreano u otra escritura no latina, un modelo entrenado específicamente en corpus documentales multilingües (Qwen2.5-VL) lo superará notablemente.',
          '**Extracción numérica precisa de gráficos y diagramas.** Como prácticamente todos los modelos visión-lenguaje locales en 2026, LLaVA no es confiable para leer valores exactos en gráficos complejos — verifica cualquier número extraído contra los datos de origen, sin importar qué modelo uses.',
          '**Asumir un desarrollo activo continuo.** Sin commits en el repositorio oficial desde el 11 de mayo de 2024, no esperes nuevas funciones, correcciones de errores o checkpoints más recientes del proyecto original — las propias actualizaciones del motor multimodal de Ollama y familias de modelos más recientes lo han sustituido efectivamente como la opción activamente desarrollada.',
          '**Una historia de licencia única y simple.** Como el código (Apache-2.0) y los checkpoints publicados oficialmente (Apache-2.0 más términos heredados de la licencia comunitaria de Llama 2, más una afirmación más estricta de solo investigación en la página de inicio separada del proyecto) se rigen por tres afirmaciones superpuestas no totalmente alineadas, LLaVA no ofrece la claridad de licencia de una línea que ofrece un proyecto como Bark (completamente MIT, sin condiciones adicionales).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a LLaVA',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (vía Ollama)',
            'Mejor para': 'Mejor calidad general de Q&A de imágenes local; tamaños 11B y 90B',
            'Licencia': 'Licencia comunitaria de Llama 3.2',
          },
          {
            'Herramienta': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (vía Ollama)',
            'Mejor para': 'OCR local y comprensión documental multilingüe más potentes',
            'Licencia': 'Licencia Qwen (Apache-2.0 para tamaños menores)',
          },
          {
            'Herramienta': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (vía Ollama)',
            'Mejor para': 'Alta precisión de OCR documental con bajo (~6 GB) VRAM',
            'Licencia': 'Derivada de Apache-2.0 (OpenBMB)',
          },
          {
            'Herramienta': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'Mejor para': 'VLM de investigación abierto con sólidos benchmarks de documentos/OCR, aún no empaquetado para Ollama',
            'Licencia': 'Apache-2.0 (aplican términos del modelo base para la variante Llama3)',
          },
          {
            'Herramienta': 'APIs VLM en la nube (GPT-4o, Claude, Gemini Vision)',
            'Mejor para': 'La mayor capacidad multimodal disponible, sin hardware local necesario',
            'Licencia': 'Propietaria (API de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es LLaVA?',
            a: 'LLaVA (Large Language and Vision Assistant) es un modelo visión-lenguaje de código abierto creado por investigadores de la Universidad de Wisconsin-Madison, Microsoft Research y la Universidad de Columbia, que combina un codificador visual con un modelo de lenguaje grande para responder preguntas sobre imágenes, presentado en el artículo de 2023 "Visual Instruction Tuning".',
          },
          {
            q: '¿Puedo usar LLaVA comercialmente?',
            a: 'El código de LLaVA en GitHub tiene licencia Apache-2.0, que permite el uso comercial. Sin embargo, sus checkpoints preentrenados publicados oficialmente están ajustados a partir de Vicuna, construido sobre Llama 2 de Meta, por lo que su uso también se rige por los términos de la licencia comunitaria de Llama 2. Una página de inicio separada del proyecto describe además los datos, el código y los checkpoints como destinados solo a investigación, y los datos de entrenamiento como no comerciales (CC BY-NC 4.0) — una afirmación más antigua y estricta que la licencia de GitHub. Esto no es asesoría legal; lee todas las licencias aplicables antes de cualquier despliegue comercial de un checkpoint específico.',
          },
          {
            q: '¿Cómo ejecuto LLaVA?',
            a: 'La forma más común es mediante Ollama: instala Ollama, ejecuta `ollama pull llava`, luego `ollama run llava "describe this image: ./photo.jpg"`. El repositorio original también ofrece sus propios scripts de inferencia en Python y una demo de Gradio para control de nivel de investigación.',
          },
          {
            q: '¿Cuál es la diferencia entre LLaVA, LLaVA-1.5 y LLaVA-NeXT (LLaVA-1.6)?',
            a: 'LLaVA (2023) fue la arquitectura original. LLaVA-1.5 (octubre de 2023) mejoró los resultados de benchmark con un conector de mayor capacidad y mejores datos de entrenamiento. LLaVA-NeXT, también llamado LLaVA-1.6 (enero de 2024), añadió entrada de imágenes de mayor resolución mediante parcheo dinámico y mejoró la OCR y el razonamiento visual. La versión distribuida mediante Ollama y el repositorio actual de GitHub refleja las mejoras de LLaVA-1.6/NeXT.',
          },
          {
            q: '¿Sigue LLaVA activamente mantenido?',
            a: 'El repositorio oficial de GitHub no está marcado como archivado, pero PromptQuorum no encontró commits desde el 11 de mayo de 2024. Trátalo como una publicación de investigación completada en lugar de software activamente desarrollado — modelos más recientes y las propias actualizaciones del motor multimodal de Ollama lo han sustituido en gran medida para nuevos proyectos.',
          },
          {
            q: '¿Cómo se compara LLaVA con modelos más recientes como Qwen2.5-VL o Llama 3.2 Vision?',
            a: 'LLaVA estableció la arquitectura que también siguen estos modelos más recientes, pero a partir de 2026 es superado por Qwen2.5-VL y Llama 3.2 Vision en OCR de documentos, lectura de gráficos y (específicamente para Qwen2.5-VL) texto no inglés, según la comparación de modelos de visión locales de PromptQuorum. LLaVA sigue siendo relevante por su facilidad de instalación, gran comunidad y amplia cobertura de tutoriales.',
          },
          {
            q: '¿Realmente soporta Ollama la ejecución de LLaVA?',
            a: 'Sí — `ollama run llava` es un modelo oficialmente listado en la [biblioteca de Ollama](https://ollama.com/library/llava), disponible en tamaños 7B, 13B y 34B, y es una de las formas más comunes de ejecutar LLaVA hoy, junto a los propios scripts de inferencia del repositorio original.',
          },
          {
            q: '¿Qué hardware necesito para ejecutar LLaVA?',
            a: 'El modelo 7B requiere aproximadamente 4,7 GB de espacio en disco y puede ejecutarse en una GPU con 6-8 GB de VRAM (o en CPU, más lentamente); los modelos 13B y 34B necesitan proporcionalmente más VRAM y espacio en disco para mejor calidad de descripción.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LLaVA se ganó su lugar en la historia de la IA local: demostró que un codificador visual modesto conectado a un LLM de código abierto, ajustado con datos de instrucción generados por GPT-4, podía ofrecer una comprensión de imágenes genuinamente útil sin un presupuesto de entrenamiento propietario — y el patrón codificador-visual-más-LLM que estableció sigue siendo la base de la mayoría de los modelos multimodales locales hoy. Su licencia de código (Apache-2.0) es permisiva, pero sus checkpoints publicados oficialmente llevan términos derivados de Llama 2 a través de su base Vicuna, más una afirmación más antigua y estricta de solo investigación en la página de inicio separada del proyecto — lee las tres antes de cualquier uso comercial. En capacidad pura para 2026, LLaVA ya no es el modelo de visión local más potente: sin commits desde mayo de 2024, y opciones más recientes como Qwen2.5-VL, Llama 3.2 Vision y MiniCPM-V lo superan en OCR, gráficos y documentos multilingües. Si quieres la instalación más simple, la comunidad más grande y la mayor cantidad de tutoriales existentes, `ollama run llava` sigue siendo un punto de partida genuinamente bueno. Si la precisión documental o el texto no inglés importa, combina este análisis con la [comparación de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026) y la [guía de modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review) de PromptQuorum antes de elegir un modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LLaVA en GitHub](https://github.com/haotian-liu/LLaVA) — el repositorio oficial: README, LICENSE, instrucciones de instalación e historial de commits.',
          '[Artículo "Visual Instruction Tuning" (NeurIPS 2023)](https://llava-vl.github.io/) — la página de inicio del proyecto con enlaces al artículo, afirmaciones de licencia e historial de versiones.',
          '[LLaVA en Ollama](https://ollama.com/library/llava) — la página del modelo oficialmente listada: tamaños, descripción y metadatos de la biblioteca.',
          '[Documentación de la API de Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — la forma documentada de las solicitudes/respuestas `/api/generate` y `/api/chat` para modelos multimodales.',
          '[Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL y configuración multimodal de Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026) — la comparación más amplia de PromptQuorum de los modelos de visión locales actuales.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL y configuración multimodal de Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026) — el hub de comparación multi-modelo que este análisis complementa con profundidad específica de LLaVA.',
          '[Modelos de visión de Ollama: una guía práctica](/es/power-local-llm/ollama-vision-models-review) — una guía práctica enfocada en ejecutar modelos de visión específicamente mediante Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA: análisis (2026) — el modelo de investigación que inició la IA visual local',
      description:
        'Análisis de LLaVA: el modelo visión-lenguaje de código abierto fundacional de la UW-Madison y Microsoft Research. Comandos reales de Ollama, su licencia Apache-2.0 más modelo base, y su comparación con VLMs locales más recientes en 2026.',
      url: 'https://promptquorum.com/es/power-local-llm/llava-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan modelos visión-lenguaje locales y autoalojados' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'Modelo visión-lenguaje' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'IA multimodal' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA: análisis (2026)', item: 'https://promptquorum.com/es/power-local-llm/llava-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-ja.webp',
    title: 'LLaVAレビュー(2026):ローカルビジョンAIの原点となった研究モデル',
    seoTitle: 'LLaVAレビュー2026:最初のローカルビジョン言語モデル',
    intro:
      'LLaVA(Large Language and Vision Assistant)は、今日ほとんどのローカルマルチモーダルAIが採用する構築方法——ビジョンエンコーダーをテキスト生成LLMに接続する方式——を確立したオープンソースのビジョン言語モデルです。ウィスコンシン大学マディソン校、Microsoft Research、コロンビア大学の研究者によって開発され、[GitHub](https://github.com/haotian-liu/LLaVA)と[Ollamaライブラリ](https://ollama.com/library/llava)経由で配布されており、現在は一つのコマンド(`ollama run llava`)で実行できます。このレビューでは、LLaVAが実際に何であるか、実際のインストールと使用コマンド、その二層構造のライセンス(Apache-2.0のコードとベースモデル依存の重みライセンス)、そして2026年時点で新しいローカルビジョンモデルと比較してどこに位置するかを、正直に解説します。',
    metaDescription:
      'LLaVAレビュー:UW-MadisonとMicrosoft Researchによる基盤的オープンソースビジョン言語モデル。実際のOllamaコマンド、Apache-2.0とベースモデルのライセンス、2026年の新しいローカルVLMとの比較。',
    twitterDescription:
      'LLaVAレビュー2026:多くのローカルマルチモーダルAIが今も従うビジョンエンコーダー+LLMのパターンを確立した研究モデル。実際のollama runコマンド、Apache-2.0とベースモデルライセンスの微妙な違い、そして新しい選択肢との正直な比較。',
    audience:
      'ローカルでセルフホストするビジョン言語モデルを評価する開発者で、LLaVAの歴史、実際のライセンス構造、そして2026年の新規プロジェクトでこれを使うべきか新しいモデルを選ぶべきかを理解したい人向け。',
    readTime: '13分で読めます',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVAレビュー',
    targetKeywords: [
      'llava レビュー',
      'llava ollama',
      'llava ライセンス',
      'llava vs qwen2.5-vl',
      'llava ローカル実行',
      'llava ビジョンモデル',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA(Large Language and Vision Assistant)は、ビジョンエンコーダーとテキスト生成LLMを組み合わせて画像に関する質問に答えるオープンソースのビジョン言語モデルです。** ウィスコンシン大学マディソン校、Microsoft Research、コロンビア大学の研究者によって開発され、[GitHub](https://github.com/haotian-liu/LLaVA)で配布され、現在はより一般的に[Ollama](https://ollama.com/library/llava)経由で実行されます(`ollama run llava`)。コードは**Apache-2.0**ライセンスですが、事前学習済みチェックポイントはファインチューニング元のベースLLM(Vicuna、これ自体がLlama 2コミュニティライセンスを持つ)のライセンスに依存します——商用利用前に理解しておくべき微妙な点です。現在のローカルビジョンモデル全体のより広範な比較については、PromptQuorumの[ローカルビジョンモデルガイド](/ja/power-local-llm/local-vision-models-llava-ollama-2026)をご覧ください。',
    quickAnswerTop: {
      en: {
        question: 'LLaVAとは何か、2026年でも使う価値はあるか?',
        answer:
          'LLaVAは、最大のコミュニティ、最多のチュートリアル、そして最もシンプルなローカル画像理解への道を持つビジョン言語モデルが欲しい場合に価値があります——`ollama pull llava`とすれば、一つのコマンドで動作するマルチモーダルアシスタントが手に入ります。LLaVAは、ほとんどのローカルビジョン言語モデルが今も従うアーキテクチャパターン(CLIPベースのビジョンエンコーダーをLLMの埋め込み空間に投影する方式)を確立しました。コードはApache-2.0で、これは商用利用を許可する寛容なライセンスですが、事前学習済みチェックポイントはVicunaからファインチューニングされており、Vicuna自体がMetaのLlama 2上に構築されているため、チェックポイントの利用はLlama 2コミュニティライセンスにも従います——これはApache-2.0のコード付与に加わる独立した条件です。生の性能では、LLaVAはもはや最強のローカル選択肢ではありません。GitHubリポジトリは2024年5月以降コミットがなく、Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-Vといった新しいモデルが、文書OCR、グラフ読み取り、多言語テキストで上回っています。セットアップの容易さ、コミュニティサポート、幅広いチュートリアルのためにLLaVAを選び、OCR精度や非英語テキストが優先事項であれば新しいモデルを選んでください。',
        bullets: [
          'UW-Madison、Microsoft Research、コロンビア大学の研究者によって開発され、NeurIPS 2023でオーラル発表。',
          'コードライセンス:Apache-2.0。事前学習済みチェックポイントはLlama 2コミュニティライセンスを持つVicunaからファインチューニング。',
          '`ollama pull llava`(7B、13B、34B)で実行可能——オリジナルリポジトリ自体のPython推論スクリプトと並んで、今日最も一般的な利用方法。',
          'ほとんどのローカルビジョン言語モデルが今も従うビジョンエンコーダー+LLMのパターンを確立。',
          '2024年5月11日以降、公式GitHubリポジトリにコミットなし。25,000以上のスター、アーカイブされていない。',
          '新しいモデル(Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-V)は2026年時点で文書OCR、グラフ、多言語テキストで上回る。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:研究論文からローカルAIの標準へ', anchor: 'history' },
      { label: 'LLaVAが実際に行うこと', anchor: 'what-it-does' },
      { label: 'LLaVAのインストールと実行:ステップバイステップ', anchor: 'install-walkthrough' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスと費用', anchor: 'license-cost' },
      { label: 'LLaVAが向いていない用途', anchor: 'limitations' },
      { label: 'LLaVAの代替案', anchor: 'alternatives' },
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
            text: 'LLaVAはUW-Madison、Microsoft Research、コロンビア大学によるオープンソースのビジョン言語モデルで、多くのローカルマルチモーダルAIが今も使うビジョンエンコーダー+LLMのアーキテクチャを確立し、コードはApache-2.0、事前学習済みチェックポイントはLlama 2由来のライセンス条件を持ち、現在はOllama経由で一つのコマンドで実行可能です。',
          },
          {
            type: 'plain-terms',
            text: '画像を見て質問に答えられる無料のAIモデルです——これがうまく安価に機能することを証明した研究プロジェクトで、今では`ollama run llava`と入力し、画像ファイルを指定するだけで最も簡単に実行できます。',
          },
        ],
        items: [
          'CLIPビジョンエンコーダーとVicuna(Llama 2ベース)のテキストデコーダーを組み合わせたビジョン言語モデル。',
          'コードライセンス:Apache-2.0。事前学習済みチェックポイントは、Vicunaのベースを通じてLlama 2コミュニティライセンスを継承。',
          '`ollama pull llava`で3つのサイズ(7B、13B、34B)を実行可能。',
          '2024年5月11日以降、公式GitHubリポジトリにコミットなし。25,000以上のスター、アーカイブされていない。',
          'その後の多くのローカルビジョン言語モデルが使用するアーキテクチャパターンを確立。',
          '新しいモデル(Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-V)は、OCR、グラフ、多言語文書で今や上回る。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LLaVAのオリジナルプロジェクトページには、データ・コード・チェックポイントは「研究利用のみを目的としライセンスされている」と記載されており、これはGitHubリポジトリのコードに後から適用されたApache-2.0ライセンスより古く、厳格な内容です。商用利用前にGitHubのLICENSEファイルとプロジェクトページの両方を読んでください——下記の「ライセンスと費用」セクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:研究論文からローカルAIの標準へ',
        content: [
          '**LLaVAは、ウィスコンシン大学マディソン校、Microsoft Research、コロンビア大学に所属するHaotian Liu、Chunyuan Li、Qingyang Wu、Yong Jae Leeによって開発され**、2023年の論文「Visual Instruction Tuning」で発表され、NeurIPS 2023でオーラル発表として採択されました。',
          '**論文の中核となるアイデアは、GPT-4を使ってマルチモーダルな指示追従の訓練データを生成し**、そのデータを使ってオープンソースのビジョンエンコーダーと言語モデルに視覚的な指示に従うことを教える——画像を説明し、それに関する質問に答え、会話形式で視覚的な内容について推論する——というもので、プロプライエタリなマルチモーダルモデルをゼロから構築する訓練コストのごく一部で実現しました。',
          '**2023年10月にリリースされたLLaVA-1.5は、元のアーキテクチャへの単純な変更だけで11のベンチマークで最先端の結果を達成しました**——主に、より高性能なビジョン言語コネクターと学術タスク志向の訓練データによるもので、プロジェクト自身のページによれば、8基のA100 GPUで約1日でトレーニングされました。',
          '**2024年1月にリリースされたLLaVA-NeXT(LLaVA-1.6とも呼ばれる)は、動的パッチングによる高解像度画像入力のサポートを追加しました**(672×672、または横長/縦長の画像には336×1344まで)。OCRと視覚的推論の改善に加え、Vicunaを超えた追加のベースLLMのサポートも加わりました。',
          '**公開されている[haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)のGitHubリポジトリは25,000以上のスターを集めています**が、アーカイブとしてマークされてはいません——しかしPromptQuorumは、プロジェクト自身の公開コミット履歴に基づき、メインブランチへのコミットが2024年5月11日以降ないことを確認しました。これは、継続的な商用製品というより、目標(アーキテクチャの確立と普及)を達成した大学の研究成果としての公開に一致します。',
        ],
        faqs: [
          {
            q: 'LLaVAを開発したのは誰ですか?',
            a: 'LLaVAは、ウィスコンシン大学マディソン校、Microsoft Research、コロンビア大学に所属するHaotian Liu、Chunyuan Li、Qingyang Wu、Yong Jae Leeによって開発され、2023年の論文「Visual Instruction Tuning」で発表され、NeurIPS 2023でオーラル発表として採択されました。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'LLaVAが実際に行うこと',
        content: [
          'LLaVAはビジョンエンコーダーを大規模言語モデルに接続し、組み合わされたシステムが画像とテキストプロンプトを一緒に受け取り、画像に関する自然言語の応答を生成できるようにします——質問への回答、シーンの説明、表示されているテキストの読み取り、そして視覚的な内容についての会話形式の推論を行います。',
        ],
        items: [
          '**CLIPエンコーダーとLLMデコーダー。** LLaVAはCLIP ViT-L/14ビジョンエンコーダーを使って画像を視覚的特徴のシーケンスに変換し、コネクターモジュールを介してこれらの特徴を言語モデルのテキストトークンと同じ埋め込み空間に投影し、結合されたシーケンスをVicuna(Llama 2ベース)、あるいは後のバージョンではMistralなど他のベースLLMに供給して応答を生成します。',
          '**ビジュアル指示チューニング。** 生の画像・キャプションペアで訓練する代わりに、LLaVAはLLaVA-Instruct-150Kでファインチューニングされました。これは、GPT-4に画像キャプションと物体検出のアノテーションを与えてプロンプトすることで生成された、複数ターンの視覚的会話データセットです——モデルに単にキャプションを生成するのではなく、オープンエンドな視覚的指示に従うことを教えます。',
          '**Ollama経由の3つのモデルサイズ。** Ollamaライブラリは、LLaVAを7B(4.7GB)、13B(8.0GB)、34B(20GB)のサイズでパッケージしています——一般的に大きなモデルほど詳細で正確な説明を生成しますが、VRAMをより多く消費し、推論も遅くなります。',
          '**LLaVA-1.6(LLaVA-NeXT)の解像度改善。** Ollamaと公式リポジトリを通じてサポートされている現行バージョンは、動的パッチングによってより高い入力解像度に対応しており、2023年のオリジナルリリースと比較してテキスト読み取りと細部のタスクが顕著に改善されています。',
          '**英語中心のトレーニング。** LLaVA-Instruct-150Kと評価対象となった基礎ベンチマークは主に英語であるため、画像内の非英語テキストに対する初期状態でのパフォーマンスは、多言語文書データで特別に訓練されたモデルよりも弱くなります。',
        ],
        note: 'LLaVAは、単一の固定された製品というより、今では一般的になったアーキテクチャのリファレンス実装として理解するのが最も適切です——後続のコミュニティおよび商用モデル(Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V)は、更新された訓練データとより高解像度のエンコーダーを備えた、ビジョンエンコーダー+LLMという同様のパターンに従っています。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'LLaVAのインストールと実行:ステップバイステップ',
        content: 'このウォークスルーでは、最も速く一般的な方法(Ollama)を扱い、参考としてオリジナルリポジトリ自体の方法にも触れます。',
        numberedItems: [
          {
            title: 'Ollamaをインストールする。',
            whyItMatters: 'macOS、Linux、Windows向けに[Ollama](https://ollama.com)をダウンロードしてインストールします。これは[Ollamaライブラリページ](https://ollama.com/library/llava)によれば、LLaVAを実行する公式に記載された方法であり、2分もかかりません。',
          },
          {
            title: 'LLaVAのモデルサイズをダウンロードする。',
            whyItMatters: 'デフォルトの7Bモデル(~4.7GB)には`ollama pull llava`を実行するか、より高い品質を求める場合は`ollama pull llava:13b`(~8.0GB)または`ollama pull llava:34b`(~20GB)を実行してください。ただし、より多くのVRAMとディスク容量が必要になります。',
          },
          {
            title: 'CLIから画像を指定して実行する。',
            whyItMatters: '`ollama run llava "describe this image: ./photo.jpg"`を実行し、プロンプトテキスト内で直接ローカルの画像ファイルパスを参照します——別途フラグは不要です。',
          },
          {
            title: '(代替案)研究レベルの制御にはオリジナルリポジトリを使用する。',
            whyItMatters: '[haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)をクローンし、`requirements.txt`をインストールして、Hugging Faceからチェックポイントをダウンロードすれば、トレーニングスクリプト、評価ハーネス、Gradio Webデモへの完全なアクセスが得られます——研究やファインチューニングには有用ですが、Ollamaよりはるかにセットアップのハードルが高くなります。',
          },
          {
            title: '(オプション)Ollama API経由でプログラムから呼び出す。',
            whyItMatters: '`images`配列にBase64エンコードされた文字列として画像を含め、`http://localhost:11434/api/generate`にPOSTするか、公式の`ollama` PythonまたはJavaScriptライブラリを使用します——下記のコード例を参照。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          'これらの例は、Ollamaのドキュメント化されたCLI構文とHTTP APIを使用しています——今日LLaVAを実行するための主要なサポート方法です。',
        ],
        codeBlock: `# インストールしてモデルをダウンロード
# (まず https://ollama.com からOllamaをダウンロード)
ollama pull llava

# CLI:プロンプト内でファイルパスを参照して画像を説明する
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API(Ollama自身のdocs/api.mdで文書化) ---
# Base64エンコードされた画像を使った /api/generate
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<Base64エンコードされた画像データ>"]
}'

# Base64エンコードされた画像を使った /api/chat(複数ターンの会話)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<Base64エンコードされた画像データ>"] }
  ]
}'

# --- 公式ollamaライブラリを使ったPython例 ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: '`images`フィールドは、[Ollamaのapi.md](https://github.com/ollama/ollama/blob/main/docs/api.md)に文書化されている生のHTTP API用にBase64エンコードされた画像データを受け付けます。公式のPythonおよびJavaScriptライブラリは上記のようにファイルパスを直接受け付け、エンコードを代わりに処理します。',
        items: [
          '**CLIプロンプト内でファイルパスを参照するだけで十分です** — Ollamaは`.jpg`/`.png`パスを検出し、自動的に画像を添付します。個別の`--image`フラグは存在しません。',
          '**大きなモデルサイズはより多くのVRAMと時間を要します。** 7Bモデルは最速で最もVRAM消費の少ない選択肢です。説明の正確さが速度よりも重要な場合は13Bまたは34Bを使用してください。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスと費用',
        content: [
          '**[公式GitHubリポジトリ](https://github.com/haotian-liu/LLaVA)にあるLLaVAのコードはApache-2.0ライセンスです**。これはリポジトリのLICENSEファイルとGitHubが報告するライセンスメタデータによって確認されています。Apache-2.0は寛容なライセンスであり、帰属表示と特許付与を伴い、それ以外の制限はほとんどなく、商用利用を含めてコードを使用・改変・再配布できます。',
          '**事前学習済みチェックポイントは事情が異なります:ベースLLMから条件を継承します。** 公式にリリースされているLLaVAのチェックポイントは、それ自体がMetaのLlama 2上に構築された指示チューニング済みチャットボットであるVicunaからファインチューニングされており、プロジェクト自身のドキュメントは、ユーザーが元のライセンスの「すべての条件」に従わなければならないと述べています——具体的には、Llama 2、Vicuna、CLIPのライセンス条件、そしてOpenAIの利用規約(GPT-4が訓練データの生成に使用されたため)が挙げられています。これはつまり、チェックポイントの許可された利用はApache-2.0だけでなく、Llama 2コミュニティライセンスの条件(許容される利用の制限や、非常に大規模な商用展開がMetaから別途ライセンスを取得する必要があるという要件を含む)によっても規定されるということです。',
          '**LLaVAのオリジナルプロジェクトページ(GitHubリポジトリとは別のサイト)は、より厳格で古い記述を追加しています:** 「データ、コード、チェックポイント」は「研究利用のみを目的としライセンスされている」と説明し、別途、訓練データセットのCC BY-NC 4.0(非商用)指定にも言及しています。これはGitHubで現在示されているApache-2.0のコードライセンスより古く、より厳格なものです——同一プロジェクトの2つの異なるページにまたがる、実際に紛らわしい記述の組み合わせであり、都合の良い方を選ぶのではなく、その点自体を指摘する価値があります。',
          'これらはいずれも法的助言ではありません。LLaVA——またはそれを基にファインチューニングされたチェックポイント——を商用製品で出荷する前に、GitHubのLICENSEファイル、プロジェクトページに記載された条件、Llama 2コミュニティライセンスを読み、具体的なベースモデルと展開について弁護士に相談してください。',
        ],
        faqs: [
          {
            q: 'LLaVAはどのライセンスを使用していますか?',
            a: 'GitHub上のLLaVAのコードはApache-2.0ライセンスであり、商用利用を許可する寛容なライセンスです。ただし、公式にリリースされている事前学習済みチェックポイントは、MetaのLlama 2上に構築されたVicunaからファインチューニングされているため、その利用はLlama 2コミュニティライセンスの条件にも従います。プロジェクトの別のホームページでは、さらにデータ・コード・チェックポイントは研究利用のみを目的とし、訓練データは非商用(CC BY-NC 4.0)であると説明されています——これはGitHubのライセンスより古く厳格な記述です。これは法的助言ではありません。特定のチェックポイントを商用利用する前に、これらすべてをご自身でお読みください。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'LLaVAが向いていない用途',
        content: [
          'LLaVAは本当に有用で、よく文書化されたモデルであり続けていますが、2026年のあらゆるビジョンタスクに最適な選択肢ではもはやありません。以下の状況では不向きなツールです:',
        ],
        items: [
          '**テキストのみのタスク。** LLaVAはビジョン言語モデルです。画像を伴わない純粋なテキスト会話には、専用のテキストLLM(Ollama経由でもそれ以外でも)を使用してください——テキストのみのチャットにマルチモーダルモデルを実行することは、ビジョンエンコーダーが占有するVRAMを、何の利益もなく無駄にすることになります。',
          '**利用可能な最強のローカルOCRや文書理解が必要な場合。** 2026年時点で、LLaVA-NeXT以降にリリースされたモデル——MiniCPM-V、Qwen2.5-VL、Llama 3.2 Vision——は、PromptQuorumの[ローカルビジョンモデル比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)によれば、文書OCR、表、構造化された抽出でLLaVAを上回っています。LLaVAのビジョンエンコーダーは、この世代の高解像度で文書に焦点を当てた訓練データが存在する前に設計・訓練されました。',
          '**画像内の非英語テキストを読む場合。** LLaVA-Instruct-150Kとモデルの中核となる訓練データは主に英語です。中国語、日本語、韓国語、その他の非ラテン文字の文書OCRには、多言語文書コーパスで特別に訓練されたモデル(Qwen2.5-VL)が顕著に優れています。',
          '**グラフや図表からの正確な数値抽出。** 2026年時点のほぼすべてのローカルビジョン言語モデルと同様、LLaVAは複雑なグラフから正確な値を読み取ることに関して信頼性がありません——使用するモデルにかかわらず、抽出された数値は元のデータと照合してください。',
          '**継続的な積極的開発を前提とすること。** 公式リポジトリには2024年5月11日以降コミットがないため、オリジナルプロジェクトから新機能、バグ修正、新しいチェックポイントが提供されると期待しないでください——Ollama自身のマルチモーダルエンジンの更新と新しいモデルファミリーが、事実上、積極的に開発されている選択肢としてこれに取って代わりました。',
          '**単一のシンプルなライセンスの物語。** コード(Apache-2.0)と公式にリリースされたチェックポイント(Apache-2.0に加え、継承されたLlama 2コミュニティライセンス条件、さらにプロジェクトの別のホームページにあるより厳格な研究専用の記述)が、3つの重複しながらも完全には一致しない記述によって規定されているため、LLaVAはBarkのようなプロジェクト(完全にMITで追加条件なし)が提供するような一行で済むライセンスの明快さを提供しません。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'LLaVAの代替案',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision)(Ollama経由)',
            '最適な用途': '最高の一般的なローカル画像Q&A品質。11Bと90Bサイズ',
            'ライセンス': 'Llama 3.2コミュニティライセンス',
          },
          {
            'ツール': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl)(Ollama経由)',
            '最適な用途': '最強のローカルOCRと多言語文書理解',
            'ライセンス': 'Qwenライセンス(小規模サイズはApache-2.0)',
          },
          {
            'ツール': '[MiniCPM-V](https://ollama.com/library/minicpm-v)(Ollama経由)',
            '最適な用途': '低VRAM(~6GB)での高い文書OCR精度',
            'ライセンス': 'Apache-2.0派生(OpenBMB)',
          },
          {
            'ツール': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(Hugging Face)',
            '最適な用途': '文書/OCRベンチマークに強いオープンな研究用VLM。まだOllama向けにパッケージ化されていない',
            'ライセンス': 'Apache-2.0(Llama3バリアントにはベースモデルの条件が適用)',
          },
          {
            'ツール': 'クラウドVLM API(GPT-4o、Claude、Gemini Vision)',
            '最適な用途': '利用可能な最高のマルチモーダル性能、ローカルハードウェア不要',
            'ライセンス': 'プロプライエタリ(有料API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LLaVAとは何ですか?',
            a: 'LLaVA(Large Language and Vision Assistant)は、ウィスコンシン大学マディソン校、Microsoft Research、コロンビア大学の研究者によって開発されたオープンソースのビジョン言語モデルで、ビジョンエンコーダーと大規模言語モデルを組み合わせて画像に関する質問に答えます。2023年の論文「Visual Instruction Tuning」で発表されました。',
          },
          {
            q: 'LLaVAを商用利用できますか?',
            a: 'GitHub上のLLaVAのコードはApache-2.0ライセンスであり、商用利用を許可しています。ただし、公式にリリースされている事前学習済みチェックポイントは、MetaのLlama 2上に構築されたVicunaからファインチューニングされているため、その利用はLlama 2コミュニティライセンスの条件にも従います。プロジェクトの別のホームページでは、データ・コード・チェックポイントは研究利用のみを目的とし、訓練データは非商用(CC BY-NC 4.0)であるとも説明されています——これはGitHubのライセンスより古く厳格な記述です。これは法的助言ではありません。特定のチェックポイントを商用展開する前に、適用されるすべてのライセンスをお読みください。',
          },
          {
            q: 'LLaVAはどのように実行しますか?',
            a: '最も一般的な方法はOllama経由です:Ollamaをインストールし、`ollama pull llava`を実行し、次に`ollama run llava "describe this image: ./photo.jpg"`を実行します。オリジナルリポジトリも、研究レベルの制御のために独自のPython推論スクリプトとGradioデモを提供しています。',
          },
          {
            q: 'LLaVA、LLaVA-1.5、LLaVA-NeXT(LLaVA-1.6)の違いは何ですか?',
            a: 'LLaVA(2023年)は元のアーキテクチャでした。LLaVA-1.5(2023年10月)は、より高性能なコネクターと優れた訓練データによりベンチマーク結果を改善しました。LLaVA-NeXT、別名LLaVA-1.6(2024年1月)は、動的パッチングによる高解像度画像入力を追加し、OCRと視覚的推論を改善しました。Ollamaと現在のGitHubリポジトリを通じて配布されているバージョンは、LLaVA-1.6/NeXTの改善を反映しています。',
          },
          {
            q: 'LLaVAはまだ積極的にメンテナンスされていますか?',
            a: '公式GitHubリポジトリはアーカイブとしてマークされていませんが、PromptQuorumは2024年5月11日以降のコミットを確認できませんでした。これは積極的に開発されているソフトウェアではなく、完成した研究成果として扱ってください——新しいモデルとOllama自身のマルチモーダルエンジンの更新が、新規プロジェクトにおいてこれを大きく置き換えています。',
          },
          {
            q: 'LLaVAはQwen2.5-VLやLlama 3.2 Visionといった新しいモデルとどう比較されますか?',
            a: 'LLaVAはこれらの新しいモデルも従うアーキテクチャを確立しましたが、2026年時点では、PromptQuorumのローカルビジョンモデル比較によれば、文書OCR、グラフ読み取り、そして(特にQwen2.5-VLについて)非英語テキストにおいてQwen2.5-VLとLlama 3.2 Visionに劣ります。LLaVAは、セットアップの容易さ、大きなコミュニティ、豊富なチュートリアルの蓄積という点で依然として重要です。',
          },
          {
            q: 'Ollamaは実際にLLaVAの実行をサポートしていますか?',
            a: 'はい——`ollama run llava`は[Ollamaライブラリ](https://ollama.com/library/llava)に公式にリストされているモデルで、7B、13B、34Bのサイズで利用可能であり、オリジナルリポジトリ自体の推論スクリプトと並んで、今日LLaVAを実行する最も一般的な方法の一つです。',
          },
          {
            q: 'LLaVAを実行するにはどのようなハードウェアが必要ですか?',
            a: '7Bモデルはディスク容量約4.7GBを必要とし、6-8GBのVRAMを持つGPU(またはCPU、より低速)で実行できます。13Bと34Bのモデルは、より良い説明品質のために、それに比例してより多くのVRAMとディスク容量を必要とします。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LLaVAはローカルAIの歴史において自らの地位を確立しました:GPT-4が生成した指示データでファインチューニングされた、控えめなビジョンエンコーダーとオープンソースLLMの組み合わせが、プロプライエタリな訓練予算なしで本当に有用な画像理解を提供できることを証明したのです——そして、それが確立したビジョンエンコーダー+LLMのパターンは、今でも多くのローカルマルチモーダルモデルの動作方式です。コードライセンス(Apache-2.0)は寛容ですが、公式にリリースされているチェックポイントは、Vicunaのベースを通じてLlama 2由来の条件を持ち、さらにプロジェクトの別のホームページにはより古く厳格な研究専用の記述があります——商用利用前にこの3つすべてを読んでください。2026年の純粋な性能では、LLaVAはもはや最強のローカルビジョンモデルではありません:2024年5月以降コミットがなく、Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-Vといった新しい選択肢が、OCR、グラフ、多言語文書で上回っています。最も簡単なセットアップ、最大のコミュニティ、最も豊富な既存のチュートリアルが欲しいなら、`ollama run llava`は今でも本当に良い出発点です。文書の精度や非英語テキストが重要であれば、モデルを選ぶ前に、このレビューをPromptQuorumの[ローカルビジョンモデル比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)と[Ollamaビジョンモデルガイド](/ja/power-local-llm/ollama-vision-models-review)と組み合わせてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のLLaVA](https://github.com/haotian-liu/LLaVA) — 公式リポジトリ:README、LICENSE、インストール手順、コミット履歴。',
          '[「Visual Instruction Tuning」論文(NeurIPS 2023)](https://llava-vl.github.io/) — 論文へのリンク、ライセンスに関する記述、バージョン履歴を含むプロジェクトのホームページ。',
          '[Ollama上のLLaVA](https://ollama.com/library/llava) — 公式にリストされているモデルページ:サイズ、説明、ライブラリのメタデータ。',
          '[Ollama APIドキュメント](https://github.com/ollama/ollama/blob/main/docs/api.md) — マルチモーダルモデル向けの`/api/generate`と`/api/chat`のリクエスト/レスポンス形式を文書化したもの。',
          '[ローカルビジョンモデル2026:LLaVA、Llama 3.2 Vision、Qwen3-VL & Ollamaマルチモーダルセットアップ](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — PromptQuorumの現行ローカルビジョンモデル全体を対象とした、より広範な比較。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルビジョンモデル2026:LLaVA、Llama 3.2 Vision、Qwen3-VL & Ollamaマルチモーダルセットアップ](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — このレビューがLLaVA固有の深さで補完する、複数モデル比較のハブ記事。',
          '[Ollamaビジョンモデル:実践ガイド](/ja/power-local-llm/ollama-vision-models-review) — Ollama経由でビジョン対応モデルを実行することに特化した実践的なハウツー。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVAレビュー(2026):ローカルビジョンAIの原点となった研究モデル',
      description:
        'LLaVAレビュー:UW-MadisonとMicrosoft Researchによる基盤的オープンソースビジョン言語モデル。実際のOllamaコマンド、Apache-2.0とベースモデルのライセンス、2026年の新しいローカルVLMとの比較。',
      url: 'https://promptquorum.com/ja/power-local-llm/llava-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルでセルフホストするビジョン言語モデルを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'ビジョン言語モデル' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'マルチモーダルAI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVAレビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/llava-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-pt.webp',
    title: 'LLaVA: análise (2026) — o modelo de pesquisa que iniciou a IA visual local',
    seoTitle: 'LLaVA: análise 2026 — o primeiro modelo visão-linguagem local',
    intro:
      'LLaVA (Large Language and Vision Assistant) é o modelo visão-linguagem de código aberto que estabeleceu como a maioria da IA multimodal local é construída hoje: um codificador visual alimentando um LLM gerador de texto. Criado por pesquisadores da Universidade de Wisconsin-Madison, Microsoft Research e Universidade Columbia, e distribuído no [GitHub](https://github.com/haotian-liu/LLaVA) e via [biblioteca do Ollama](https://ollama.com/library/llava), agora pode ser executado com um único comando (`ollama run llava`). Esta análise cobre o que o LLaVA realmente é, comandos reais de instalação e uso, sua licença de duas camadas (código Apache-2.0 mais licenças de pesos dependentes do modelo base), e onde ele se posiciona hoje frente a modelos de visão locais mais recentes — o panorama honesto para 2026.',
    metaDescription:
      'Análise do LLaVA: o modelo visão-linguagem de código aberto fundacional da UW-Madison e Microsoft Research. Comandos reais do Ollama, sua licença Apache-2.0 mais modelo base, e comparação com VLMs locais mais recentes em 2026.',
    twitterDescription:
      'Análise do LLaVA 2026: o modelo de pesquisa que estabeleceu o padrão codificador-visual-mais-LLM que a maioria da IA multimodal local ainda segue. Comandos reais de ollama run, a nuance da licença Apache-2.0 mais modelo base, e um olhar honesto sobre como ele se compara a opções mais recentes.',
    audience:
      'Desenvolvedores avaliando modelos visão-linguagem locais e auto-hospedados que querem entender a história do LLaVA, sua estrutura de licenciamento real, e se devem usá-lo ou escolher um modelo mais recente para um novo projeto em 2026.',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA análise',
    targetKeywords: [
      'llava análise',
      'llava ollama',
      'llava licença',
      'llava vs qwen2.5-vl',
      'executar llava localmente',
      'llava modelo de visão',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) é um modelo visão-linguagem de código aberto que combina um codificador visual com um LLM gerador de texto para responder perguntas sobre imagens.** Criado por pesquisadores da Universidade de Wisconsin-Madison, Microsoft Research e Universidade Columbia, é distribuído no [GitHub](https://github.com/haotian-liu/LLaVA) e, mais comumente hoje, executado via [Ollama](https://ollama.com/library/llava) (`ollama run llava`). Seu código tem licença **Apache-2.0**, mas os checkpoints pré-treinados dependem da licença do LLM base a partir do qual foram ajustados (Vicuna, que por sua vez carrega a licença comunitária do Llama 2) — uma nuance que vale entender antes do uso comercial. Para uma comparação mais ampla dos modelos de visão locais atuais, veja o [guia de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026) da PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o LLaVA e ainda vale a pena em 2026?',
        answer:
          'O LLaVA vale a pena se você quer o modelo visão-linguagem com a maior comunidade, mais tutoriais e o caminho mais simples para compreensão de imagem local — `ollama pull llava` e você tem um assistente multimodal funcional em um comando. Ele estabeleceu o padrão arquitetônico (um codificador visual baseado em CLIP projetado no espaço de embeddings de um LLM) que a maioria dos modelos visão-linguagem locais ainda segue. Seu código é Apache-2.0, uma licença permissiva que permite uso comercial, mas seus checkpoints pré-treinados são ajustados a partir do Vicuna, construído sobre o Llama 2 da Meta, então o uso do checkpoint também é regido pela licença comunitária do Llama 2 — uma condição distinta que se soma à concessão de código Apache-2.0. Em capacidade bruta, o LLaVA já não é a opção local mais forte: seu repositório GitHub não recebe commits desde maio de 2024, e modelos mais recentes como Qwen2.5-VL, Llama 3.2 Vision e MiniCPM-V o superam em OCR de documentos, leitura de gráficos e texto multilíngue. Escolha o LLaVA pela facilidade de instalação, suporte da comunidade e ampla cobertura de tutoriais; escolha um modelo mais recente se precisão de OCR ou texto não inglês forem sua prioridade.',
        bullets: [
          'Criado por pesquisadores da UW-Madison, Microsoft Research e Universidade Columbia; apresentação oral na NeurIPS 2023.',
          'Licença do código: Apache-2.0. Os checkpoints pré-treinados são ajustados a partir do Vicuna, que carrega a licença comunitária do Llama 2.',
          'Executa via `ollama pull llava` (7B, 13B ou 34B) — a forma mais comum de usá-lo hoje, ao lado dos próprios scripts de inferência em Python do repositório original.',
          'Estabeleceu o padrão codificador-visual-mais-LLM que a maioria dos modelos visão-linguagem locais ainda segue.',
          'Sem commits no repositório oficial do GitHub desde 11 de maio de 2024; mais de 25.000 estrelas, não arquivado.',
          'Modelos mais recentes (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) o superam em 2026 em OCR de documentos, gráficos e texto multilíngue.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'História: de um artigo de pesquisa a um padrão de IA local', anchor: 'history' },
      { label: 'O que o LLaVA realmente faz', anchor: 'what-it-does' },
      { label: 'Instalar e executar o LLaVA: passo a passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos reais de uso', anchor: 'usage-examples' },
      { label: 'Licença e custo', anchor: 'license-cost' },
      { label: 'Para que o LLaVA não é bom', anchor: 'limitations' },
      { label: 'Alternativas ao LLaVA', anchor: 'alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O LLaVA é o modelo visão-linguagem de código aberto da UW-Madison, Microsoft Research e Universidade Columbia que estabeleceu a arquitetura codificador-visual-mais-LLM que a maioria da IA multimodal local ainda usa, licenciado sob Apache-2.0 para o código com condições de licença derivadas do Llama 2 para os checkpoints pré-treinados, agora executável com um único comando via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'É um modelo de IA gratuito que consegue olhar para uma imagem e responder perguntas sobre ela — o projeto de pesquisa que provou que isso podia funcionar bem e de forma barata, hoje mais facilmente executado digitando `ollama run llava` e apontando para um arquivo de imagem.',
          },
        ],
        items: [
          'Modelo visão-linguagem que combina um codificador visual CLIP com um decodificador de texto Vicuna (baseado no Llama 2).',
          'Licença do código: Apache-2.0. Os checkpoints pré-treinados herdam a licença comunitária do Llama 2 através de sua base Vicuna.',
          'Executa via `ollama pull llava` em três tamanhos: 7B, 13B e 34B.',
          'Sem commits no repositório oficial do GitHub desde 11 de maio de 2024; mais de 25.000 estrelas, não arquivado.',
          'Estabeleceu o padrão arquitetônico usado pela maioria dos modelos visão-linguagem locais posteriores.',
          'Modelos mais recentes (Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V) agora o superam em OCR, gráficos e documentos multilíngues.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A página original do projeto LLaVA declara que seus dados, código e checkpoint são "destinados e licenciados apenas para uso de pesquisa", uma declaração anterior e mais rígida do que a licença Apache-2.0 aplicada depois ao código do repositório GitHub. Leia tanto o arquivo LICENSE do GitHub quanto a página do projeto antes do uso comercial — veja a seção Licença e custo abaixo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: de um artigo de pesquisa a um padrão de IA local',
        content: [
          '**O LLaVA foi criado por Haotian Liu, Chunyuan Li, Qingyang Wu e Yong Jae Lee**, pesquisadores afiliados à Universidade de Wisconsin-Madison, Microsoft Research e Universidade Columbia, e apresentado no artigo de 2023 "Visual Instruction Tuning", aceito como apresentação oral na NeurIPS 2023.',
          '**A ideia central do artigo foi gerar dados de treinamento multimodais de seguimento de instruções usando o GPT-4**, e então usar esses dados para ensinar um codificador visual e um modelo de linguagem de código aberto a seguir instruções visuais — descrever imagens, responder perguntas sobre elas e raciocinar sobre conteúdo visual em formato conversacional, a uma fração do custo de treinamento de construir um modelo multimodal proprietário do zero.',
          '**O LLaVA-1.5, lançado em outubro de 2023, alcançou resultados de estado da arte em 11 benchmarks com apenas modificações simples na arquitetura original** — principalmente um conector visão-linguagem de maior capacidade e dados de treinamento orientados a tarefas acadêmicas — enquanto treinava em cerca de um dia em 8 GPUs A100, segundo a própria página do projeto.',
          '**O LLaVA-NeXT (também chamado LLaVA-1.6), lançado em janeiro de 2024, adicionou suporte para entrada de imagem em maior resolução via patching dinâmico** (até 672×672, ou 336×1344 para imagens largas/altas), junto com OCR e raciocínio visual melhorados, e suporte para LLMs base adicionais além do Vicuna.',
          '**O repositório público [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) no GitHub acumulou mais de 25.000 estrelas**, e não está marcado como arquivado — mas a PromptQuorum não encontrou commits em sua branch principal desde 11 de maio de 2024, com base no histórico público de commits do próprio projeto. Isso é consistente com um lançamento de pesquisa universitária que cumpriu seu objetivo (estabelecer e popularizar a arquitetura) em vez de um produto comercial em desenvolvimento contínuo.',
        ],
        faqs: [
          {
            q: 'Quem criou o LLaVA?',
            a: 'O LLaVA foi criado por Haotian Liu, Chunyuan Li, Qingyang Wu e Yong Jae Lee, pesquisadores afiliados à Universidade de Wisconsin-Madison, Microsoft Research e Universidade Columbia, e apresentado no artigo de 2023 "Visual Instruction Tuning", uma apresentação oral na NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o LLaVA realmente faz',
        content: [
          'O LLaVA conecta um codificador visual a um grande modelo de linguagem para que o sistema combinado possa aceitar uma imagem e um prompt de texto juntos, e então gerar uma resposta em linguagem natural sobre a imagem — respondendo perguntas, descrevendo cenas, lendo texto visível e raciocinando sobre conteúdo visual de forma conversacional.',
        ],
        items: [
          '**Codificador CLIP mais decodificador LLM.** O LLaVA usa um codificador visual CLIP ViT-L/14 para converter uma imagem em uma sequência de características visuais, projeta essas características no mesmo espaço de embeddings dos tokens de texto do modelo de linguagem via um módulo conector, e alimenta a sequência combinada em um modelo Vicuna (baseado no Llama 2) ou, em versões posteriores, Mistral ou outro LLM base para gerar uma resposta.',
          '**Ajuste por instruções visuais.** Em vez de treinar com pares brutos de imagem-legenda, o LLaVA foi ajustado no LLaVA-Instruct-150K, um conjunto de dados de conversas visuais multi-turno geradas ao solicitar ao GPT-4 legendas de imagens e anotações de detecção de objetos — ensinando o modelo a seguir instruções visuais abertas em vez de apenas gerar legendas.',
          '**Três tamanhos de modelo via Ollama.** A biblioteca do Ollama empacota o LLaVA nos tamanhos 7B (4,7 GB), 13B (8,0 GB) e 34B (20 GB) — modelos maiores geralmente produzem descrições mais detalhadas e precisas, ao custo de mais VRAM e inferência mais lenta.',
          '**Melhorias de resolução do LLaVA-1.6 (LLaVA-NeXT).** A versão atual suportada via Ollama e o repositório oficial lida com resoluções de entrada mais altas via patching dinâmico, o que melhora sensivelmente as tarefas de leitura de texto e detalhes finos em comparação com a versão original de 2023.',
          '**Treinamento centrado em inglês.** O LLaVA-Instruct-150K e os benchmarks subjacentes usados para avaliá-lo são predominantemente em inglês, então o desempenho em texto não inglês dentro de imagens é mais fraco de fábrica do que em modelos treinados especificamente com dados de documentos multilíngues.',
        ],
        note: 'O LLaVA é melhor compreendido como a implementação de referência de uma arquitetura agora comum, não como um único produto fixo — modelos comunitários e comerciais posteriores (Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V) seguem um padrão semelhante de codificador visual mais LLM, com dados de treinamento atualizados e codificadores de maior resolução.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar e executar o LLaVA: passo a passo',
        content: 'Este guia cobre o caminho mais rápido e comum (Ollama) e menciona o próprio caminho do repositório original como referência.',
        numberedItems: [
          {
            title: 'Instalar o Ollama.',
            whyItMatters: 'Baixe e instale o [Ollama](https://ollama.com) para macOS, Linux ou Windows. Esta é a forma oficialmente listada de executar o LLaVA segundo sua [página na biblioteca do Ollama](https://ollama.com/library/llava), e leva menos de dois minutos.',
          },
          {
            title: 'Baixar um tamanho de modelo LLaVA.',
            whyItMatters: 'Execute `ollama pull llava` para o modelo padrão de 7B (~4,7 GB), ou `ollama pull llava:13b` (~8,0 GB) ou `ollama pull llava:34b` (~20 GB) para maior qualidade ao custo de mais VRAM e espaço em disco.',
          },
          {
            title: 'Executá-lo com uma imagem a partir da CLI.',
            whyItMatters: 'Execute `ollama run llava "describe this image: ./photo.jpg"`, referenciando diretamente um caminho de arquivo de imagem local no texto do prompt — nenhuma flag separada é necessária.',
          },
          {
            title: '(Alternativa) Usar o repositório original para controle de nível de pesquisa.',
            whyItMatters: 'Clone [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA), instale seu `requirements.txt`, e baixe um checkpoint do Hugging Face para acesso completo a scripts de treinamento, ferramentas de avaliação e a demo web Gradio — útil para pesquisa ou ajuste fino, mas uma barreira de instalação sensivelmente maior do que o Ollama.',
          },
          {
            title: '(Opcional) Chamá-lo programaticamente via API do Ollama.',
            whyItMatters: 'Envie uma requisição POST para `http://localhost:11434/api/generate` com a imagem como uma string codificada em base64 em um array `images`, ou use a biblioteca oficial `ollama` em Python ou JavaScript — veja o exemplo de código abaixo.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos reais de uso',
        content: [
          'Estes exemplos usam a sintaxe CLI documentada do Ollama e sua API HTTP — a forma principal e suportada de executar o LLaVA hoje.',
        ],
        codeBlock: `# Instalar e baixar o modelo
# (baixe primeiro o Ollama de https://ollama.com)
ollama pull llava

# CLI: descrever uma imagem referenciando seu caminho de arquivo no prompt
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP (documentada no docs/api.md do próprio Ollama) ---
# /api/generate com uma imagem codificada em base64
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<dados de imagem codificados em base64>"]
}'

# /api/chat com uma imagem codificada em base64 (conversas multi-turno)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<dados de imagem codificados em base64>"] }
  ]
}'

# --- Exemplo em Python usando a biblioteca oficial ollama ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'O campo `images` aceita dados de imagem codificados em base64 para a API HTTP bruta, documentada no [api.md do Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md); as bibliotecas oficiais de Python e JavaScript aceitam diretamente um caminho de arquivo e cuidam da codificação para você, como mostrado acima.',
        items: [
          '**Referenciar um caminho de arquivo no prompt da CLI já é suficiente** — o Ollama detecta o caminho `.jpg`/`.png` e anexa a imagem automaticamente; não existe uma flag `--image` separada.',
          '**Tamanhos de modelo maiores custam mais VRAM e tempo.** O modelo 7B é a opção mais rápida e com menor consumo de VRAM; use 13B ou 34B quando a precisão da descrição importar mais do que a velocidade.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e custo',
        content: [
          '**O código do LLaVA, no [repositório oficial do GitHub](https://github.com/haotian-liu/LLaVA), tem licença Apache-2.0**, confirmado pelo arquivo LICENSE do repositório e seus metadados de licença reportados pelo GitHub. A Apache-2.0 é uma licença permissiva: você pode usar, modificar e redistribuir o código, incluindo comercialmente, com atribuição e concessão de patente, e restrição mínima adicional.',
          '**Os checkpoints pré-treinados são outra história: herdam condições de seu LLM base.** Os checkpoints do LLaVA oficialmente lançados são ajustados a partir do Vicuna, um chatbot ajustado por instruções construído sobre o Llama 2 da Meta, e a própria documentação do projeto declara que os usuários "devem cumprir todos os termos e condições" das licenças originais — nomeando especificamente os termos de licença do Llama 2, Vicuna, CLIP, e os termos de uso da OpenAI (porque o GPT-4 foi usado para gerar os dados de treinamento). Isso significa que o uso permitido do checkpoint é regido pelos termos da licença comunitária do Llama 2 (incluindo suas restrições de uso aceitável e a exigência de que implantações comerciais muito grandes obtenham uma licença separada da Meta), não apenas pela Apache-2.0.',
          '**A página original do projeto LLaVA (um site separado do repositório GitHub) adiciona uma declaração mais rígida e mais antiga:** descreve os "dados, código e checkpoint" como "destinados e licenciados apenas para uso de pesquisa", e observa separadamente a designação CC BY-NC 4.0 (não comercial) do conjunto de dados de treinamento. Isso antecede, e é mais rígido do que, a licença de código Apache-2.0 agora mostrada no GitHub — uma combinação genuinamente confusa de declarações do mesmo projeto em duas páginas diferentes, que vale a pena sinalizar em vez de simplesmente escolher a mais conveniente.',
          'Nada disso é aconselhamento jurídico. Antes de lançar o LLaVA — ou qualquer checkpoint ajustado construído sobre ele — em um produto comercial, leia o arquivo LICENSE do GitHub, os termos indicados na página do projeto, a licença comunitária do Llama 2, e consulte um advogado para seu modelo base e implantação específicos.',
        ],
        faqs: [
          {
            q: 'Qual licença o LLaVA usa?',
            a: 'O código do LLaVA no GitHub tem licença Apache-2.0, uma licença permissiva que permite uso comercial. Seus checkpoints pré-treinados oficialmente lançados são ajustados a partir do Vicuna (construído sobre o Llama 2 da Meta), então seu uso também é regido pelos termos da licença comunitária do Llama 2. Uma página inicial separada do projeto descreve ainda os dados, código e checkpoints como destinados apenas à pesquisa, e os dados de treinamento como não comerciais (CC BY-NC 4.0) — uma declaração mais antiga e rígida do que a licença do GitHub. Isso não é aconselhamento jurídico; leia tudo isso você mesmo antes do uso comercial de um checkpoint específico.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o LLaVA não é bom',
        content: [
          'O LLaVA continua sendo um modelo genuinamente útil e bem documentado, mas não é mais a escolha mais forte para toda tarefa de visão em 2026. É a ferramenta errada para as seguintes situações:',
        ],
        items: [
          '**Tarefas puramente de texto.** O LLaVA é um modelo visão-linguagem; para uma conversa puramente textual sem imagem envolvida, use um LLM de texto dedicado (via Ollama ou de outra forma) — executar um modelo multimodal para chat apenas de texto desperdiça a VRAM que seu codificador visual ocupa sem nenhum benefício.',
          '**Precisar da OCR ou compreensão de documentos local mais forte disponível.** Em 2026, modelos lançados após o LLaVA-NeXT — MiniCPM-V, Qwen2.5-VL e Llama 3.2 Vision — o superam em OCR de documentos, tabelas e extração estruturada, segundo a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026) da PromptQuorum. O codificador visual do LLaVA foi projetado e treinado antes de existir esta geração de dados de treinamento de maior resolução e focados em documentos.',
          '**Ler texto não inglês em imagens.** O LLaVA-Instruct-150K e os dados de treinamento centrais do modelo são predominantemente em inglês. Para OCR de documentos em chinês, japonês, coreano ou outra escrita não latina, um modelo especificamente treinado em corpora de documentos multilíngues (Qwen2.5-VL) o superará sensivelmente.',
          '**Extração numérica precisa de gráficos e diagramas.** Como praticamente todos os modelos visão-linguagem locais em 2026, o LLaVA não é confiável para ler valores exatos em gráficos complexos — verifique quaisquer números extraídos contra os dados de origem, independentemente do modelo usado.',
          '**Assumir desenvolvimento ativo contínuo.** Sem commits no repositório oficial desde 11 de maio de 2024, não espere novos recursos, correções de bugs ou checkpoints mais recentes do projeto original — as próprias atualizações do motor multimodal do Ollama e famílias de modelos mais recentes o substituíram efetivamente como a opção ativamente desenvolvida.',
          '**Uma história de licença única e simples.** Como o código (Apache-2.0) e os checkpoints oficialmente lançados (Apache-2.0 mais termos herdados da licença comunitária do Llama 2, mais uma declaração mais rígida de uso apenas para pesquisa na página inicial separada do projeto) são regidos por três declarações sobrepostas não totalmente alinhadas, o LLaVA não oferece a clareza de licença de uma linha que um projeto como o Bark (totalmente MIT, sem condições extras) oferece.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao LLaVA',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor para', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (via Ollama)',
            'Melhor para': 'Melhor qualidade geral de Q&A de imagem local; tamanhos 11B e 90B',
            'Licença': 'Licença comunitária do Llama 3.2',
          },
          {
            'Ferramenta': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (via Ollama)',
            'Melhor para': 'OCR local e compreensão de documentos multilíngue mais fortes',
            'Licença': 'Licença Qwen (Apache-2.0 para tamanhos menores)',
          },
          {
            'Ferramenta': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (via Ollama)',
            'Melhor para': 'Alta precisão de OCR documental com baixo VRAM (~6 GB)',
            'Licença': 'Derivada da Apache-2.0 (OpenBMB)',
          },
          {
            'Ferramenta': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'Melhor para': 'VLM de pesquisa aberto com fortes benchmarks de documentos/OCR, ainda não empacotado para o Ollama',
            'Licença': 'Apache-2.0 (termos do modelo base aplicam-se à variante Llama3)',
          },
          {
            'Ferramenta': 'APIs VLM na nuvem (GPT-4o, Claude, Gemini Vision)',
            'Melhor para': 'A maior capacidade multimodal disponível, sem necessidade de hardware local',
            'Licença': 'Proprietária (API paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o LLaVA?',
            a: 'O LLaVA (Large Language and Vision Assistant) é um modelo visão-linguagem de código aberto criado por pesquisadores da Universidade de Wisconsin-Madison, Microsoft Research e Universidade Columbia, que combina um codificador visual com um grande modelo de linguagem para responder perguntas sobre imagens, apresentado no artigo de 2023 "Visual Instruction Tuning".',
          },
          {
            q: 'Posso usar o LLaVA comercialmente?',
            a: 'O código do LLaVA no GitHub tem licença Apache-2.0, que permite uso comercial. No entanto, seus checkpoints pré-treinados oficialmente lançados são ajustados a partir do Vicuna, construído sobre o Llama 2 da Meta, então seu uso também é regido pelos termos da licença comunitária do Llama 2. Uma página inicial separada do projeto descreve ainda os dados, código e checkpoints como destinados apenas à pesquisa, e os dados de treinamento como não comerciais (CC BY-NC 4.0) — uma declaração mais antiga e rígida do que a licença do GitHub. Isso não é aconselhamento jurídico; leia todas as licenças aplicáveis antes de qualquer implantação comercial de um checkpoint específico.',
          },
          {
            q: 'Como executo o LLaVA?',
            a: 'A forma mais comum é via Ollama: instale o Ollama, execute `ollama pull llava`, depois `ollama run llava "describe this image: ./photo.jpg"`. O repositório original também oferece seus próprios scripts de inferência em Python e uma demo Gradio para controle de nível de pesquisa.',
          },
          {
            q: 'Qual é a diferença entre LLaVA, LLaVA-1.5 e LLaVA-NeXT (LLaVA-1.6)?',
            a: 'O LLaVA (2023) foi a arquitetura original. O LLaVA-1.5 (outubro de 2023) melhorou os resultados de benchmark com um conector de maior capacidade e melhores dados de treinamento. O LLaVA-NeXT, também chamado LLaVA-1.6 (janeiro de 2024), adicionou entrada de imagem em maior resolução via patching dinâmico e melhorou a OCR e o raciocínio visual. A versão distribuída via Ollama e o repositório GitHub atual reflete as melhorias do LLaVA-1.6/NeXT.',
          },
          {
            q: 'O LLaVA ainda é ativamente mantido?',
            a: 'O repositório oficial do GitHub não está marcado como arquivado, mas a PromptQuorum não encontrou commits desde 11 de maio de 2024. Trate-o como um lançamento de pesquisa concluído em vez de software ativamente desenvolvido — modelos mais recentes e as próprias atualizações do motor multimodal do Ollama o substituíram amplamente para novos projetos.',
          },
          {
            q: 'Como o LLaVA se compara a modelos mais recentes como Qwen2.5-VL ou Llama 3.2 Vision?',
            a: 'O LLaVA estabeleceu a arquitetura que esses modelos mais recentes também seguem, mas a partir de 2026 ele é superado pelo Qwen2.5-VL e Llama 3.2 Vision em OCR de documentos, leitura de gráficos e (especificamente para o Qwen2.5-VL) texto não inglês, segundo a comparação de modelos de visão locais da PromptQuorum. O LLaVA continua relevante por sua facilidade de instalação, grande comunidade e ampla cobertura de tutoriais.',
          },
          {
            q: 'O Ollama realmente suporta executar o LLaVA?',
            a: 'Sim — `ollama run llava` é um modelo oficialmente listado na [biblioteca do Ollama](https://ollama.com/library/llava), disponível nos tamanhos 7B, 13B e 34B, e é uma das formas mais comuns de executar o LLaVA hoje, ao lado dos próprios scripts de inferência do repositório original.',
          },
          {
            q: 'Que hardware preciso para executar o LLaVA?',
            a: 'O modelo 7B requer cerca de 4,7 GB de espaço em disco e pode rodar em uma GPU com 6-8 GB de VRAM (ou CPU, mais lentamente); os modelos 13B e 34B precisam proporcionalmente de mais VRAM e espaço em disco para melhor qualidade de descrição.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LLaVA conquistou seu lugar na história da IA local: provou que um codificador visual modesto conectado a um LLM de código aberto, ajustado com dados de instrução gerados pelo GPT-4, podia entregar uma compreensão de imagem genuinamente útil sem um orçamento de treinamento proprietário — e o padrão codificador-visual-mais-LLM que estabeleceu ainda é a base da maioria dos modelos multimodais locais hoje. Sua licença de código (Apache-2.0) é permissiva, mas seus checkpoints oficialmente lançados carregam termos derivados do Llama 2 através de sua base Vicuna, mais uma declaração mais antiga e rígida de uso apenas para pesquisa na página inicial separada do projeto — leia as três antes de qualquer uso comercial. Em capacidade bruta para 2026, o LLaVA já não é o modelo de visão local mais forte: sem commits desde maio de 2024, e opções mais recentes como Qwen2.5-VL, Llama 3.2 Vision e MiniCPM-V o superam em OCR, gráficos e documentos multilíngues. Se você quer a instalação mais simples, a maior comunidade e mais tutoriais existentes, `ollama run llava` continua sendo um ponto de partida genuinamente bom. Se a precisão documental ou o texto não inglês importam, combine esta análise com a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026) e o [guia de modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review) da PromptQuorum antes de escolher um modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LLaVA no GitHub](https://github.com/haotian-liu/LLaVA) — o repositório oficial: README, LICENSE, instruções de instalação e histórico de commits.',
          '[Artigo "Visual Instruction Tuning" (NeurIPS 2023)](https://llava-vl.github.io/) — a página inicial do projeto com links para o artigo, declarações de licença e histórico de versões.',
          '[LLaVA no Ollama](https://ollama.com/library/llava) — a página do modelo oficialmente listada: tamanhos, descrição e metadados da biblioteca.',
          '[Documentação da API do Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — a forma documentada das requisições/respostas `/api/generate` e `/api/chat` para modelos multimodais.',
          '[Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & configuração multimodal do Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — a comparação mais ampla da PromptQuorum dos modelos de visão locais atuais.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & configuração multimodal do Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — o hub de comparação multi-modelo que esta análise complementa com profundidade específica sobre o LLaVA.',
          '[Modelos de visão do Ollama: um guia prático](/pt/power-local-llm/ollama-vision-models-review) — um guia prático focado em executar modelos de visão especificamente via Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA: análise (2026) — o modelo de pesquisa que iniciou a IA visual local',
      description:
        'Análise do LLaVA: o modelo visão-linguagem de código aberto fundacional da UW-Madison e Microsoft Research. Comandos reais do Ollama, sua licença Apache-2.0 mais modelo base, e comparação com VLMs locais mais recentes em 2026.',
      url: 'https://promptquorum.com/pt/power-local-llm/llava-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando modelos visão-linguagem locais e auto-hospedados' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'Modelo visão-linguagem' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'IA multimodal' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA: análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/llava-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-ar.webp',
    title: 'مراجعة LLaVA (2026): النموذج البحثي الذي أطلق الذكاء الاصطناعي البصري المحلي',
    seoTitle: 'مراجعة LLaVA 2026: أول نموذج رؤية-لغة محلي',
    intro:
      'LLaVA (Large Language and Vision Assistant) هو نموذج الرؤية-اللغة مفتوح المصدر الذي أرسى الطريقة التي يُبنى بها معظم الذكاء الاصطناعي المتعدد الوسائط محليًا اليوم: مشفِّر بصري يغذي نموذجًا لغويًا كبيرًا مولِّدًا للنص. طوّره باحثون من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا، ويُوزَّع على [GitHub](https://github.com/haotian-liu/LLaVA) وعبر [مكتبة Ollama](https://ollama.com/library/llava)، ويمكن الآن تشغيله بأمر واحد (`ollama run llava`). تتناول هذه المراجعة ما هو LLaVA فعليًا، وأوامر تثبيت واستخدام حقيقية، ورخصته ذات الطبقتين (كود بموجب Apache-2.0 بالإضافة إلى رخص أوزان تعتمد على النموذج الأساسي)، وموقعه اليوم مقارنة بنماذج الرؤية المحلية الأحدث — الصورة الصادقة لعام 2026.',
    metaDescription:
      'مراجعة LLaVA: نموذج الرؤية-اللغة التأسيسي مفتوح المصدر من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش. أوامر Ollama حقيقية، رخصة Apache-2.0 بالإضافة إلى النموذج الأساسي، ومقارنته بنماذج VLM المحلية الأحدث في 2026.',
    twitterDescription:
      'مراجعة LLaVA 2026: النموذج البحثي الذي أرسى نمط مشفِّر بصري بالإضافة إلى نموذج لغوي كبير الذي لا يزال يتبعه معظم الذكاء الاصطناعي المتعدد الوسائط المحلي. أوامر ollama run حقيقية، الفارق الدقيق في رخصة Apache-2.0 بالإضافة إلى النموذج الأساسي، ونظرة صادقة على مكانته مقارنة بالخيارات الأحدث.',
    audience:
      'مطورون يقيّمون نماذج الرؤية-اللغة المحلية والمُستضافة ذاتيًا ويريدون فهم تاريخ LLaVA وبنيته الترخيصية الفعلية، وما إذا كان يجب استخدامه أو اختيار نموذج أحدث لمشروع جديد في 2026.',
    readTime: '13 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة LLaVA',
    targetKeywords: [
      'مراجعة llava',
      'llava ollama',
      'رخصة llava',
      'llava مقابل qwen2.5-vl',
      'تشغيل llava محليًا',
      'نموذج رؤية llava',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA (Large Language and Vision Assistant) هو نموذج رؤية-لغة مفتوح المصدر يجمع بين مشفِّر بصري ونموذج لغوي كبير مولِّد للنص للإجابة عن أسئلة حول الصور.** طوّره باحثون من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا، ويُوزَّع على [GitHub](https://github.com/haotian-liu/LLaVA)، ويُشغَّل اليوم بشكل أكثر شيوعًا عبر [Ollama](https://ollama.com/library/llava) (`ollama run llava`). شيفرته مرخّصة بموجب **Apache-2.0**، لكن الأوزان المُدرَّبة مسبقًا تعتمد على رخصة النموذج اللغوي الأساسي الذي جرى ضبطها الدقيق انطلاقًا منه (Vicuna، الذي يحمل بدوره رخصة Llama 2 المجتمعية) — فارق دقيق يستحق الفهم قبل الاستخدام التجاري. لمقارنة أوسع لنماذج الرؤية المحلية الحالية، راجع [دليل نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو LLaVA وهل لا يزال يستحق الاستخدام في 2026؟',
        answer:
          'يستحق LLaVA الاستخدام إذا كنت تريد نموذج رؤية-لغة يملك أكبر مجتمع وأكثر الدروس التعليمية وأبسط طريق نحو فهم الصور محليًا — `ollama pull llava` وستحصل على مساعد متعدد الوسائط يعمل بأمر واحد. أرسى نمط البنية المعمارية (مشفِّر بصري قائم على CLIP يُسقَط في فضاء تضمين نموذج لغوي كبير) الذي لا يزال يتبعه معظم نماذج الرؤية-اللغة المحلية. شيفرته بموجب Apache-2.0، وهي رخصة متساهلة تسمح بالاستخدام التجاري، لكن أوزانه المُدرَّبة مسبقًا مضبوطة دقيقًا انطلاقًا من Vicuna، المبني بدوره على Llama 2 من Meta، لذا يخضع استخدام الأوزان أيضًا لرخصة Llama 2 المجتمعية — شرط منفصل يُضاف إلى منح شيفرة Apache-2.0. من حيث القدرة الخام، لم يعد LLaVA الخيار المحلي الأقوى: لم يشهد مستودعه على GitHub أي التزام منذ مايو 2024، وتتفوق عليه نماذج أحدث مثل Qwen2.5-VL وLlama 3.2 Vision وMiniCPM-V في استخراج نصوص المستندات وقراءة المخططات والنصوص متعددة اللغات. اختر LLaVA لسهولة تثبيته ودعم مجتمعه الكبير وتغطيته الواسعة بالدروس؛ واختر نموذجًا أحدث إذا كانت دقة استخراج النصوص أو النصوص غير الإنجليزية أولويتك.',
        bullets: [
          'طوّره باحثون من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا؛ عرض شفهي في NeurIPS 2023.',
          'رخصة الشيفرة: Apache-2.0. الأوزان المُدرَّبة مسبقًا مضبوطة دقيقًا انطلاقًا من Vicuna الذي يحمل رخصة Llama 2 المجتمعية.',
          'يعمل عبر `ollama pull llava` (7B أو 13B أو 34B) — الطريقة الأكثر شيوعًا لاستخدامه اليوم، إلى جانب سكريبتات الاستدلال الخاصة بلغة Python في المستودع الأصلي.',
          'أرسى نمط مشفِّر بصري بالإضافة إلى نموذج لغوي كبير الذي لا يزال يتبعه معظم نماذج الرؤية-اللغة المحلية.',
          'لا التزامات في مستودع GitHub الرسمي منذ 11 مايو 2024؛ أكثر من 25,000 نجمة، غير مؤرشف.',
          'تتفوق عليه النماذج الأحدث (Qwen2.5-VL وLlama 3.2 Vision وMiniCPM-V) في 2026 على استخراج نصوص المستندات والمخططات والنصوص متعددة اللغات.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: من ورقة بحثية إلى معيار للذكاء الاصطناعي المحلي', anchor: 'history' },
      { label: 'ما الذي يفعله LLaVA فعليًا', anchor: 'what-it-does' },
      { label: 'تثبيت وتشغيل LLaVA: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الترخيص والتكلفة', anchor: 'license-cost' },
      { label: 'ما لا يصلح له LLaVA', anchor: 'limitations' },
      { label: 'بدائل LLaVA', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLaVA هو نموذج الرؤية-اللغة مفتوح المصدر من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا الذي أرسى بنية مشفِّر بصري بالإضافة إلى نموذج لغوي كبير التي لا يزال يستخدمها معظم الذكاء الاصطناعي المتعدد الوسائط المحلي، مرخّص بموجب Apache-2.0 للشيفرة مع شروط ترخيص مشتقة من Llama 2 للأوزان المُدرَّبة مسبقًا، ويمكن تشغيله الآن بأمر واحد عبر Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'إنه نموذج ذكاء اصطناعي مجاني يستطيع النظر إلى صورة والإجابة عن أسئلة حولها — المشروع البحثي الذي أثبت أن هذا يمكن أن يعمل بشكل جيد وبتكلفة زهيدة، ويمكن تشغيله اليوم بأبسط طريقة بكتابة `ollama run llava` والإشارة إلى ملف صورة.',
          },
        ],
        items: [
          'نموذج رؤية-لغة يجمع بين مشفِّر بصري CLIP ومفكك ترميز نصي Vicuna (قائم على Llama 2).',
          'رخصة الشيفرة: Apache-2.0. الأوزان المُدرَّبة مسبقًا ترث رخصة Llama 2 المجتمعية عبر أساسها Vicuna.',
          'يعمل عبر `ollama pull llava` بثلاثة أحجام: 7B و13B و34B.',
          'لا التزامات في مستودع GitHub الرسمي منذ 11 مايو 2024؛ أكثر من 25,000 نجمة، غير مؤرشف.',
          'أرسى نمط البنية المعمارية الذي تستخدمه معظم نماذج الرؤية-اللغة المحلية اللاحقة.',
          'تتفوق عليه النماذج الأحدث (Qwen2.5-VL وLlama 3.2 Vision وMiniCPM-V) الآن على استخراج النصوص والمخططات والمستندات متعددة اللغات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تنص صفحة مشروع LLaVA الأصلية على أن بياناته وشيفرته ونقطة التحقق منه "مخصصة ومرخّصة للاستخدام البحثي فقط"، وهو تصريح أقدم وأكثر صرامة من رخصة Apache-2.0 التي طُبِّقت لاحقًا على شيفرة مستودع GitHub. اقرأ ملف LICENSE على GitHub وصفحة المشروع كلاهما قبل الاستخدام التجاري — انظر قسم الترخيص والتكلفة أدناه.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: من ورقة بحثية إلى معيار للذكاء الاصطناعي المحلي',
        content: [
          '**طوّر LLaVA كل من Haotian Liu وChunyuan Li وQingyang Wu وYong Jae Lee**، وهم باحثون منتسبون إلى جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا، وقُدِّم في ورقة عام 2023 بعنوان "Visual Instruction Tuning"، التي قُبِلت كعرض شفهي في NeurIPS 2023.',
          '**كانت الفكرة الأساسية للورقة هي توليد بيانات تدريب متعددة الوسائط لاتباع التعليمات باستخدام GPT-4**، ثم استخدام هذه البيانات لتعليم مشفِّر بصري ونموذج لغوي مفتوحَي المصدر اتباع التعليمات البصرية — وصف الصور والإجابة عن أسئلة حولها والاستدلال حول المحتوى البصري بصيغة حوارية، بجزء بسيط من تكلفة تدريب بناء نموذج متعدد الوسائط مملوك من الصفر.',
          '**حقق LLaVA-1.5، الذي صدر في أكتوبر 2023، نتائج متطورة على 11 معيارًا قياسيًا بمجرد تعديلات بسيطة على البنية الأصلية** — بشكل أساسي موصل رؤية-لغة أعلى قدرة وبيانات تدريب موجهة نحو المهام الأكاديمية — أثناء التدريب في نحو يوم واحد على 8 وحدات معالجة رسومية A100، وفقًا لصفحة المشروع نفسها.',
          '**أضاف LLaVA-NeXT (المعروف أيضًا باسم LLaVA-1.6)، الذي صدر في يناير 2024، دعمًا لإدخال صور بدقة أعلى عبر التصحيح الديناميكي** (حتى 672×672، أو 336×1344 للصور العريضة/الطويلة)، إلى جانب تحسين استخراج النصوص والاستدلال البصري، ودعم نماذج لغوية أساسية إضافية تتجاوز Vicuna.',
          '**تجمَّع لمستودع [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) العام على GitHub أكثر من 25,000 نجمة**، وهو غير مؤرشف — لكن PromptQuorum لم تجد أي التزامات على فرعه الرئيسي منذ 11 مايو 2024، استنادًا إلى سجل الالتزامات العام للمشروع نفسه. يتوافق هذا مع إصدار بحثي جامعي حقق هدفه (إرساء البنية وتعميمها) بدلًا من منتج تجاري قيد التطوير المستمر.',
        ],
        faqs: [
          {
            q: 'من طوّر LLaVA؟',
            a: 'طوّر LLaVA كل من Haotian Liu وChunyuan Li وQingyang Wu وYong Jae Lee، وهم باحثون منتسبون إلى جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا، وقُدِّم في ورقة عام 2023 بعنوان "Visual Instruction Tuning"، وهي عرض شفهي في NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله LLaVA فعليًا',
        content: [
          'يربط LLaVA مشفِّرًا بصريًا بنموذج لغوي كبير بحيث يمكن للنظام المدمج قبول صورة وموجِّه نصي معًا، ثم توليد استجابة بلغة طبيعية حول الصورة — الإجابة عن الأسئلة، ووصف المشاهد، وقراءة النص المرئي، والاستدلال حول المحتوى البصري بصيغة حوارية.',
        ],
        items: [
          '**مشفِّر CLIP بالإضافة إلى مفكك ترميز نموذج لغوي كبير.** يستخدم LLaVA مشفِّرًا بصريًا CLIP ViT-L/14 لتحويل صورة إلى سلسلة من السمات البصرية، ويُسقِط هذه السمات في نفس فضاء تضمين رموز نص النموذج اللغوي عبر وحدة موصل، ويغذي التسلسل المدمج إلى نموذج Vicuna (قائم على Llama 2) أو، في الإصدارات اللاحقة، Mistral أو نموذج لغوي أساسي آخر لتوليد استجابة.',
          '**الضبط الدقيق بالتعليمات البصرية.** بدلًا من التدريب على أزواج صورة-تعليق خام، خضع LLaVA لضبط دقيق على مجموعة بيانات LLaVA-Instruct-150K، وهي محادثات بصرية متعددة الأدوار وُلِّدت عبر توجيه GPT-4 بتعليقات الصور وتوصيفات الكشف عن الأشياء — ما يعلّم النموذج اتباع تعليمات بصرية مفتوحة بدلًا من مجرد توليد التعليقات.',
          '**ثلاثة أحجام للنموذج عبر Ollama.** تُعبِّئ مكتبة Ollama LLaVA بأحجام 7B (4.7 جيجابايت) و13B (8.0 جيجابايت) و34B (20 جيجابايت) — تنتج النماذج الأكبر عمومًا أوصافًا أكثر تفصيلًا ودقة، على حساب المزيد من ذاكرة VRAM واستدلال أبطأ.',
          '**تحسينات الدقة في LLaVA-1.6 (LLaVA-NeXT).** تتعامل النسخة الحالية المدعومة عبر Ollama والمستودع الرسمي مع دقات إدخال أعلى عبر التصحيح الديناميكي، ما يحسّن بشكل ملحوظ مهام قراءة النصوص والتفاصيل الدقيقة مقارنة بالإصدار الأصلي لعام 2023.',
          '**تدريب يتمحور حول الإنجليزية.** إن LLaVA-Instruct-150K والمعايير القياسية الأساسية التي جرى تقييمه عليها هي بمعظمها باللغة الإنجليزية، لذا فإن الأداء على النصوص غير الإنجليزية داخل الصور أضعف جاهزيًا مقارنة بالنماذج المدرَّبة خصيصًا على بيانات مستندات متعددة اللغات.',
        ],
        note: 'يُفهَم LLaVA على أفضل وجه كتنفيذ مرجعي لبنية شائعة الآن، وليس كمنتج واحد ثابت — تتبع النماذج المجتمعية والتجارية اللاحقة (Llama 3.2 Vision وQwen2.5-VL وMiniCPM-V) نمطًا مشابهًا من مشفِّر بصري بالإضافة إلى نموذج لغوي كبير، مع بيانات تدريب مُحدَّثة ومشفِّرات بدقة أعلى.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تثبيت وتشغيل LLaVA: خطوة بخطوة',
        content: 'يغطي هذا الدليل أسرع طريق وأكثرها شيوعًا (Ollama) ويشير إلى طريق المستودع الأصلي نفسه للرجوع إليه.',
        numberedItems: [
          {
            title: 'تثبيت Ollama.',
            whyItMatters: 'نزّل وثبّت [Ollama](https://ollama.com) لأنظمة macOS وLinux وWindows. هذه هي الطريقة المدرَجة رسميًا لتشغيل LLaVA وفقًا [لصفحته في مكتبة Ollama](https://ollama.com/library/llava)، وتستغرق أقل من دقيقتين.',
          },
          {
            title: 'تنزيل حجم نموذج LLaVA.',
            whyItMatters: 'شغّل `ollama pull llava` للنموذج الافتراضي 7B (~4.7 جيجابايت)، أو `ollama pull llava:13b` (~8.0 جيجابايت) أو `ollama pull llava:34b` (~20 جيجابايت) لجودة أعلى على حساب المزيد من ذاكرة VRAM ومساحة القرص.',
          },
          {
            title: 'تشغيله بصورة من واجهة سطر الأوامر.',
            whyItMatters: 'شغّل `ollama run llava "describe this image: ./photo.jpg"`، مع الإشارة مباشرة إلى مسار ملف صورة محلي في نص الموجِّه — لا حاجة إلى علامة منفصلة.',
          },
          {
            title: '(بديل) استخدام المستودع الأصلي للتحكم على مستوى البحث.',
            whyItMatters: 'استنسخ [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)، وثبّت ملف `requirements.txt` الخاص به، ونزّل نقطة تحقق من Hugging Face للوصول الكامل إلى سكريبتات التدريب وأدوات التقييم وعرض Gradio التوضيحي على الويب — مفيد للبحث أو الضبط الدقيق، لكنه يمثل عتبة تثبيت أعلى بكثير من Ollama.',
          },
          {
            title: '(اختياري) استدعاؤه برمجيًا عبر واجهة برمجة تطبيقات Ollama.',
            whyItMatters: 'أرسل طلب POST إلى `http://localhost:11434/api/generate` مع الصورة كسلسلة مُرمَّزة بترميز base64 ضمن مصفوفة `images`، أو استخدم مكتبة `ollama` الرسمية للغة Python أو JavaScript — انظر مثال الشيفرة أدناه.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'تستخدم هذه الأمثلة صيغة واجهة سطر الأوامر الموثَّقة في Ollama وواجهة برمجة تطبيقات HTTP الخاصة به — الطريقة الأساسية المدعومة لتشغيل LLaVA اليوم.',
        ],
        codeBlock: `# التثبيت وتنزيل النموذج
# (نزّل Ollama أولًا من https://ollama.com)
ollama pull llava

# واجهة سطر الأوامر: وصف صورة بالإشارة إلى مسار ملفها في الموجِّه
ollama run llava "describe this image: ./photo.jpg"

# --- واجهة برمجة تطبيقات HTTP (موثَّقة في docs/api.md الخاص بـ Ollama) ---
# /api/generate بصورة مُرمَّزة بترميز base64
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<بيانات صورة مُرمَّزة بترميز base64>"]
}'

# /api/chat بصورة مُرمَّزة بترميز base64 (محادثات متعددة الأدوار)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<بيانات صورة مُرمَّزة بترميز base64>"] }
  ]
}'

# --- مثال بلغة Python باستخدام مكتبة ollama الرسمية ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: 'يقبل حقل `images` بيانات صورة مُرمَّزة بترميز base64 لواجهة برمجة تطبيقات HTTP الأولية، الموثَّقة في [ملف api.md الخاص بـ Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md)؛ تقبل مكتبتا Python وJavaScript الرسميتان مسار ملف مباشرة وتتوليان الترميز نيابة عنك، كما هو موضح أعلاه.',
        items: [
          '**تكفي الإشارة إلى مسار ملف في موجِّه واجهة سطر الأوامر** — يكتشف Ollama مسار `.jpg`/`.png` ويرفق الصورة تلقائيًا؛ لا توجد علامة `--image` منفصلة.',
          '**تكلف أحجام النماذج الأكبر المزيد من ذاكرة VRAM والوقت.** نموذج 7B هو الخيار الأسرع والأقل استهلاكًا لذاكرة VRAM؛ استخدم 13B أو 34B عندما تكون دقة الوصف أهم من السرعة.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الترخيص والتكلفة',
        content: [
          '**شيفرة LLaVA، في [المستودع الرسمي على GitHub](https://github.com/haotian-liu/LLaVA)، مرخّصة بموجب Apache-2.0**، وهو ما تأكد من خلال ملف LICENSE في المستودع وبيانات الترخيص الوصفية التي يبلّغ عنها GitHub. رخصة Apache-2.0 متساهلة: يمكنك استخدام الشيفرة وتعديلها وإعادة توزيعها، بما في ذلك تجاريًا، مع الإشارة إلى المصدر ومنح براءة اختراع، وبقيود إضافية طفيفة.',
          '**الأوزان المُدرَّبة مسبقًا قصة مختلفة: فهي ترث شروطًا من نموذجها اللغوي الأساسي.** الأوزان الرسمية المُصدَرة لـ LLaVA مضبوطة دقيقًا انطلاقًا من Vicuna، وهو روبوت محادثة مضبوط بالتعليمات مبني بدوره على Llama 2 من Meta، وتنص وثائق المشروع نفسه على أن المستخدمين "يجب أن يمتثلوا لجميع الشروط والأحكام" الخاصة بالرخص الأصلية — وتحديدًا شروط ترخيص Llama 2 وVicuna وCLIP، وشروط استخدام OpenAI (لأن GPT-4 استُخدم لتوليد بيانات التدريب). هذا يعني أن الاستخدام المسموح به للأوزان يخضع لشروط رخصة Llama 2 المجتمعية (بما في ذلك قيودها على الاستخدام المقبول واشتراط حصول عمليات النشر التجارية الكبيرة جدًا على رخصة منفصلة من Meta)، وليس فقط لرخصة Apache-2.0.',
          '**تضيف صفحة مشروع LLaVA الأصلية (موقع منفصل عن مستودع GitHub) تصريحًا أكثر صرامة وأقدم:** فهي تصف "البيانات والشيفرة ونقطة التحقق" بأنها "مخصصة ومرخّصة للاستخدام البحثي فقط"، وتشير بشكل منفصل إلى تصنيف CC BY-NC 4.0 (غير التجاري) لمجموعة بيانات التدريب. هذا يسبق رخصة شيفرة Apache-2.0 المعروضة الآن على GitHub وهو أكثر صرامة منها — وهو مزيج مربك فعليًا من تصريحات المشروع نفسه عبر صفحتين مختلفتين، يستحق الإشارة إليه بدلًا من اختيار التصريح الأكثر ملاءمة.',
          'لا شيء من هذا يُعد استشارة قانونية. قبل شحن LLaVA — أو أي نقطة تحقق مضبوطة دقيقًا مبنية عليه — في منتج تجاري، اقرأ ملف LICENSE على GitHub، والشروط المذكورة في صفحة المشروع، ورخصة Llama 2 المجتمعية، واستشر محاميًا بشأن نموذجك الأساسي المحدد وطريقة نشرك.',
        ],
        faqs: [
          {
            q: 'ما الرخصة التي يستخدمها LLaVA؟',
            a: 'شيفرة LLaVA على GitHub مرخّصة بموجب Apache-2.0، وهي رخصة متساهلة تسمح بالاستخدام التجاري. غير أن أوزانه المُدرَّبة مسبقًا المُصدَرة رسميًا مضبوطة دقيقًا انطلاقًا من Vicuna (المبني على Llama 2 من Meta)، لذا يخضع استخدامها أيضًا لشروط رخصة Llama 2 المجتمعية. تصف صفحة رئيسية منفصلة للمشروع أيضًا البيانات والشيفرة ونقاط التحقق بأنها مخصصة للاستخدام البحثي فقط، وبيانات التدريب بأنها غير تجارية (CC BY-NC 4.0) — تصريح أقدم وأكثر صرامة من رخصة GitHub. هذا ليس استشارة قانونية؛ اقرأ كل ما سبق بنفسك قبل الاستخدام التجاري لنقطة تحقق محددة.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له LLaVA',
        content: [
          'يظل LLaVA نموذجًا مفيدًا فعليًا وموثَّقًا جيدًا، لكنه لم يعد الخيار الأقوى لكل مهمة رؤية في 2026. إنه الأداة الخاطئة للحالات التالية:',
        ],
        items: [
          '**المهام النصية فقط.** LLaVA نموذج رؤية-لغة؛ لمحادثة نصية بحتة دون إشراك صورة، استخدم نموذجًا لغويًا نصيًا مخصصًا (عبر Ollama أو غيره) — تشغيل نموذج متعدد الوسائط لمحادثة نصية فقط يهدر ذاكرة VRAM التي يشغلها مشفِّره البصري دون أي فائدة.',
          '**الحاجة إلى أقوى استخراج نصوص أو فهم مستندات محلي متاح.** اعتبارًا من 2026، تتفوق عليه النماذج التي صدرت بعد LLaVA-NeXT — MiniCPM-V وQwen2.5-VL وLlama 3.2 Vision — في استخراج نصوص المستندات والجداول والاستخراج المُهيكَل، وفقًا لـ[مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026) من PromptQuorum. صُمِّم مشفِّر LLaVA البصري ودُرِّب قبل وجود هذا الجيل من بيانات التدريب عالية الدقة المركّزة على المستندات.',
          '**قراءة نصوص غير إنجليزية في الصور.** إن LLaVA-Instruct-150K وبيانات التدريب الأساسية للنموذج بمعظمها باللغة الإنجليزية. لاستخراج نصوص مستندات صينية أو يابانية أو كورية أو غيرها من الكتابات غير اللاتينية، سيتفوق عليه بوضوح نموذج مدرَّب خصيصًا على مجموعات بيانات مستندات متعددة اللغات (Qwen2.5-VL).',
          '**الاستخراج الرقمي الدقيق من المخططات والرسوم البيانية.** مثل جميع نماذج الرؤية-اللغة المحلية تقريبًا في 2026، لا يُعتمَد على LLaVA في قراءة قيم دقيقة من مخططات معقدة — تحقق من أي أرقام مستخرجة مقابل البيانات المصدرية بغض النظر عن النموذج المستخدم.',
          '**افتراض تطوير نشط مستمر.** بدون التزامات في المستودع الرسمي منذ 11 مايو 2024، لا تتوقع ميزات جديدة أو إصلاحات أخطاء أو نقاط تحقق أحدث من المشروع الأصلي — لقد حلّت محله فعليًا تحديثات محرك Ollama متعدد الوسائط الخاصة به وعائلات النماذج الأحدث كخيار قيد التطوير النشط.',
          '**قصة ترخيص واحدة وبسيطة.** بما أن الشيفرة (Apache-2.0) والأوزان المُصدَرة رسميًا (Apache-2.0 بالإضافة إلى شروط رخصة Llama 2 المجتمعية الموروثة، بالإضافة إلى تصريح أكثر صرامة للاستخدام البحثي فقط على الصفحة الرئيسية المنفصلة للمشروع) تخضع لثلاثة تصريحات متداخلة غير متطابقة تمامًا، لا يقدّم LLaVA وضوح الترخيص في سطر واحد الذي يقدّمه مشروع مثل Bark (المرخّص بالكامل بموجب MIT، دون شروط إضافية).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل LLaVA',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision) (عبر Ollama)',
            'الأنسب لـ': 'أفضل جودة عامة للإجابة عن أسئلة الصور محليًا؛ أحجام 11B و90B',
            'الرخصة': 'رخصة Llama 3.2 المجتمعية',
          },
          {
            'الأداة': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl) (عبر Ollama)',
            'الأنسب لـ': 'أقوى استخراج نصوص محلي وفهم مستندات متعدد اللغات',
            'الرخصة': 'رخصة Qwen (Apache-2.0 للأحجام الأصغر)',
          },
          {
            'الأداة': '[MiniCPM-V](https://ollama.com/library/minicpm-v) (عبر Ollama)',
            'الأنسب لـ': 'دقة عالية في استخراج نصوص المستندات بذاكرة VRAM منخفضة (~6 جيجابايت)',
            'الرخصة': 'مشتقة من Apache-2.0 (OpenBMB)',
          },
          {
            'الأداة': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3) (Hugging Face)',
            'الأنسب لـ': 'نموذج VLM بحثي مفتوح بمعايير قوية للمستندات/استخراج النصوص، لم يُعبَّأ بعد لـ Ollama',
            'الرخصة': 'Apache-2.0 (تطبَّق شروط النموذج الأساسي على نسخة Llama3)',
          },
          {
            'الأداة': 'واجهات برمجة تطبيقات VLM السحابية (GPT-4o وClaude وGemini Vision)',
            'الأنسب لـ': 'أعلى قدرة متعددة الوسائط متاحة، دون الحاجة إلى عتاد محلي',
            'الرخصة': 'مملوكة (واجهة برمجة تطبيقات مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو LLaVA؟',
            a: 'LLaVA (Large Language and Vision Assistant) هو نموذج رؤية-لغة مفتوح المصدر طوّره باحثون من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا، يجمع بين مشفِّر بصري ونموذج لغوي كبير للإجابة عن أسئلة حول الصور، وقُدِّم في ورقة عام 2023 بعنوان "Visual Instruction Tuning".',
          },
          {
            q: 'هل يمكنني استخدام LLaVA تجاريًا؟',
            a: 'شيفرة LLaVA على GitHub مرخّصة بموجب Apache-2.0، التي تسمح بالاستخدام التجاري. لكن أوزانه المُدرَّبة مسبقًا المُصدَرة رسميًا مضبوطة دقيقًا انطلاقًا من Vicuna (المبني على Llama 2 من Meta)، لذا يخضع استخدامها أيضًا لشروط رخصة Llama 2 المجتمعية. تصف صفحة رئيسية منفصلة للمشروع أيضًا البيانات والشيفرة ونقاط التحقق بأنها للبحث فقط، وبيانات التدريب بأنها غير تجارية (CC BY-NC 4.0) — تصريح أقدم وأكثر صرامة من رخصة GitHub. هذا ليس استشارة قانونية؛ اقرأ جميع الرخص المعمول بها قبل أي نشر تجاري لنقطة تحقق محددة.',
          },
          {
            q: 'كيف أشغّل LLaVA؟',
            a: 'الطريقة الأكثر شيوعًا هي عبر Ollama: ثبّت Ollama، شغّل `ollama pull llava`، ثم `ollama run llava "describe this image: ./photo.jpg"`. يوفر المستودع الأصلي أيضًا سكريبتات استدلال خاصة بلغة Python وعرض Gradio توضيحيًا للتحكم على مستوى البحث.',
          },
          {
            q: 'ما الفرق بين LLaVA وLLaVA-1.5 وLLaVA-NeXT (LLaVA-1.6)؟',
            a: 'كان LLaVA (2023) هو البنية الأصلية. حسّن LLaVA-1.5 (أكتوبر 2023) نتائج المعايير القياسية بموصل أعلى قدرة وبيانات تدريب أفضل. أضاف LLaVA-NeXT، المعروف أيضًا باسم LLaVA-1.6 (يناير 2024)، إدخال صور بدقة أعلى عبر التصحيح الديناميكي وحسّن استخراج النصوص والاستدلال البصري. تعكس النسخة الموزَّعة عبر Ollama ومستودع GitHub الحالي تحسينات LLaVA-1.6/NeXT.',
          },
          {
            q: 'هل لا يزال LLaVA يخضع لصيانة نشطة؟',
            a: 'مستودع GitHub الرسمي غير مؤرشف، لكن PromptQuorum لم تجد أي التزامات منذ 11 مايو 2024. تعامل معه كإصدار بحثي مكتمل وليس برمجية قيد التطوير النشط — لقد حلّت محله إلى حد كبير النماذج الأحدث وتحديثات محرك Ollama متعدد الوسائط الخاصة به بالنسبة للمشاريع الجديدة.',
          },
          {
            q: 'كيف يقارن LLaVA بنماذج أحدث مثل Qwen2.5-VL أو Llama 3.2 Vision؟',
            a: 'أرسى LLaVA البنية التي تتبعها أيضًا هذه النماذج الأحدث، لكن اعتبارًا من 2026 تتفوق عليه Qwen2.5-VL وLlama 3.2 Vision في استخراج نصوص المستندات وقراءة المخططات و(تحديدًا بالنسبة لـ Qwen2.5-VL) النصوص غير الإنجليزية، وفقًا لمقارنة نماذج الرؤية المحلية من PromptQuorum. يظل LLaVA ذا أهمية بفضل سهولة تثبيته ومجتمعه الكبير وتغطيته الواسعة بالدروس التعليمية.',
          },
          {
            q: 'هل يدعم Ollama فعليًا تشغيل LLaVA؟',
            a: 'نعم — `ollama run llava` نموذج مدرَج رسميًا في [مكتبة Ollama](https://ollama.com/library/llava)، متاح بأحجام 7B و13B و34B، وهو إحدى أكثر الطرق شيوعًا لتشغيل LLaVA اليوم، إلى جانب سكريبتات الاستدلال الخاصة بالمستودع الأصلي.',
          },
          {
            q: 'ما العتاد الذي أحتاجه لتشغيل LLaVA؟',
            a: 'يتطلب نموذج 7B نحو 4.7 جيجابايت من مساحة القرص ويمكن تشغيله على وحدة معالجة رسومية بذاكرة VRAM تبلغ 6-8 جيجابايت (أو على وحدة المعالجة المركزية، بشكل أبطأ)؛ تحتاج نماذج 13B و34B إلى ذاكرة VRAM ومساحة قرص أكبر تناسبيًا للحصول على جودة وصف أفضل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'حصل LLaVA على مكانته في تاريخ الذكاء الاصطناعي المحلي: أثبت أن مشفِّرًا بصريًا متواضعًا متصلًا بنموذج لغوي كبير مفتوح المصدر، مضبوطًا دقيقًا على بيانات تعليمات وُلِّدت بواسطة GPT-4، يمكنه تقديم فهم صور مفيد فعليًا دون ميزانية تدريب مملوكة — ولا يزال نمط مشفِّر بصري بالإضافة إلى نموذج لغوي كبير الذي أرساه أساس معظم النماذج المتعددة الوسائط المحلية اليوم. رخصة شيفرته (Apache-2.0) متساهلة، لكن أوزانه المُصدَرة رسميًا تحمل شروطًا مشتقة من Llama 2 عبر أساسها Vicuna، بالإضافة إلى تصريح أقدم وأكثر صرامة للاستخدام البحثي فقط على الصفحة الرئيسية المنفصلة للمشروع — اقرأ الثلاثة جميعًا قبل أي استخدام تجاري. من حيث القدرة الخام لعام 2026، لم يعد LLaVA نموذج الرؤية المحلي الأقوى: لا التزامات منذ مايو 2024، وتتفوق عليه خيارات أحدث مثل Qwen2.5-VL وLlama 3.2 Vision وMiniCPM-V في استخراج النصوص والمخططات والمستندات متعددة اللغات. إذا كنت تريد أبسط تثبيت وأكبر مجتمع وأكثر الدروس التعليمية المتاحة، يظل `ollama run llava` نقطة انطلاق جيدة فعليًا. إذا كانت دقة المستندات أو النصوص غير الإنجليزية مهمة، اجمع بين هذه المراجعة و[مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026) و[دليل نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review) من PromptQuorum قبل اختيار نموذج.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LLaVA على GitHub](https://github.com/haotian-liu/LLaVA) — المستودع الرسمي: README وLICENSE وتعليمات التثبيت وسجل الالتزامات.',
          '[ورقة "Visual Instruction Tuning" (NeurIPS 2023)](https://llava-vl.github.io/) — الصفحة الرئيسية للمشروع مع روابط الورقة وتصريحات الترخيص وتاريخ الإصدارات.',
          '[LLaVA على Ollama](https://ollama.com/library/llava) — صفحة النموذج المدرَجة رسميًا: الأحجام والوصف والبيانات الوصفية للمكتبة.',
          '[وثائق واجهة برمجة تطبيقات Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — الصيغة الموثَّقة لطلبات/استجابات `/api/generate` و`/api/chat` للنماذج متعددة الوسائط.',
          '[نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وQwen3-VL وإعداد Ollama متعدد الوسائط](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — مقارنة PromptQuorum الأوسع لنماذج الرؤية المحلية الحالية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وQwen3-VL وإعداد Ollama متعدد الوسائط](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — مركز مقارنة متعدد النماذج تكمِّله هذه المراجعة بتعمق خاص بـ LLaVA.',
          '[نماذج رؤية Ollama: دليل عملي](/ar/power-local-llm/ollama-vision-models-review) — دليل عملي مركّز على تشغيل نماذج الرؤية تحديدًا عبر Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة LLaVA (2026): النموذج البحثي الذي أطلق الذكاء الاصطناعي البصري المحلي',
      description:
        'مراجعة LLaVA: نموذج الرؤية-اللغة التأسيسي مفتوح المصدر من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش. أوامر Ollama حقيقية، رخصة Apache-2.0 بالإضافة إلى النموذج الأساسي، ومقارنته بنماذج VLM المحلية الأحدث في 2026.',
      url: 'https://promptquorum.com/ar/power-local-llm/llava-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون يقيّمون نماذج الرؤية-اللغة المحلية والمُستضافة ذاتيًا' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: 'نموذج رؤية-لغة' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'الذكاء الاصطناعي متعدد الوسائط' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة LLaVA (2026)', item: 'https://promptquorum.com/ar/power-local-llm/llava-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-zh.webp',
    title: 'LLaVA评测(2026):开启本地视觉AI的研究模型',
    seoTitle: 'LLaVA评测2026:第一个本地视觉语言模型',
    intro:
      'LLaVA(Large Language and Vision Assistant)是开源视觉语言模型,确立了当今大多数本地多模态AI的构建方式:视觉编码器输入到生成文本的LLM中。由威斯康星大学麦迪逊分校、微软研究院和哥伦比亚大学的研究人员创建,发布于[GitHub](https://github.com/haotian-liu/LLaVA)并通过[Ollama库](https://ollama.com/library/llava)分发,现在只需一条命令即可运行(`ollama run llava`)。本评测介绍LLaVA的实际功能、真实的安装和使用命令、其双层许可证(Apache-2.0代码加基础模型相关的权重许可证),以及它在2026年相较于更新的本地视觉模型所处的位置——真实全貌。',
    metaDescription:
      'LLaVA评测:来自UW-Madison和微软研究院的基础性开源视觉语言模型。真实的Ollama命令、Apache-2.0加基础模型许可证,以及与2026年更新的本地VLM的比较。',
    twitterDescription:
      'LLaVA评测2026:确立了大多数本地多模态AI至今仍在遵循的视觉编码器加LLM模式的研究模型。真实的ollama run命令、Apache-2.0加基础模型许可证的细微差别,以及与更新选项的诚实对比。',
    audience:
      '正在评估本地自托管视觉语言模型的开发者,希望了解LLaVA的历史、其真实的许可证结构,以及在2026年新项目中应使用它还是选择更新的模型。',
    readTime: '13分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA评测',
    targetKeywords: [
      'llava 评测',
      'llava ollama',
      'llava 许可证',
      'llava vs qwen2.5-vl',
      'llava 本地运行',
      'llava 视觉模型',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA(Large Language and Vision Assistant)是一个开源视觉语言模型,将视觉编码器与生成文本的LLM结合起来回答关于图像的问题。** 由威斯康星大学麦迪逊分校、微软研究院和哥伦比亚大学的研究人员创建,发布于[GitHub](https://github.com/haotian-liu/LLaVA),如今更常通过[Ollama](https://ollama.com/library/llava)运行(`ollama run llava`)。其代码采用**Apache-2.0**许可证,但预训练检查点依赖于其微调所用基础LLM的许可证(Vicuna,而Vicuna本身携带Llama 2社区许可证)——这是商业使用前值得理解的细微差别。有关当前本地视觉模型更广泛的比较,请参阅PromptQuorum的[本地视觉模型指南](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。',
    quickAnswerTop: {
      en: {
        question: 'LLaVA是什么,2026年还值得使用吗?',
        answer:
          '如果你想要拥有最大社区、最多教程以及通向本地图像理解最简单路径的视觉语言模型,LLaVA值得使用——`ollama pull llava`,一条命令就能获得一个可用的多模态助手。它确立了大多数本地视觉语言模型至今仍在遵循的架构模式(基于CLIP的视觉编码器投影到LLM的嵌入空间)。其代码采用Apache-2.0,这是一个允许商业使用的宽松许可证,但其预训练检查点是从Vicuna微调而来,而Vicuna本身构建于Meta的Llama 2之上,因此检查点的使用也受Llama 2社区许可证约束——这是叠加在Apache-2.0代码授权之上的独立条件。在原始能力方面,LLaVA已不再是最强的本地选项:其GitHub仓库自2024年5月以来没有任何提交,而Qwen2.5-VL、Llama 3.2 Vision和MiniCPM-V等更新的模型在文档OCR、图表阅读和多语言文本方面已经超越了它。如果你看重易于安装、社区支持以及广泛的教程覆盖,可以选择LLaVA;如果OCR精度或非英语文本是你的优先考虑,则应选择更新的模型。',
        bullets: [
          '由UW-Madison、微软研究院和哥伦比亚大学的研究人员创建;NeurIPS 2023口头报告。',
          '代码许可证:Apache-2.0。预训练检查点从携带Llama 2社区许可证的Vicuna微调而来。',
          '通过`ollama pull llava`(7B、13B或34B)运行——如今使用它的最常见方式,与原始仓库自身的Python推理脚本并存。',
          '确立了大多数本地视觉语言模型至今仍在遵循的视觉编码器加LLM模式。',
          '官方GitHub仓库自2024年5月11日起无任何提交;超过25,000颗星,未被归档。',
          '截至2026年,更新的模型(Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-V)在文档OCR、图表和多语言文本方面已超越它。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '历史:从一篇研究论文到本地AI的标准', anchor: 'history' },
      { label: 'LLaVA的实际功能', anchor: 'what-it-does' },
      { label: '安装和运行LLaVA:分步指南', anchor: 'install-walkthrough' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与费用', anchor: 'license-cost' },
      { label: 'LLaVA不适合做什么', anchor: 'limitations' },
      { label: 'LLaVA的替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
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
            text: 'LLaVA是来自UW-Madison、微软研究院和哥伦比亚大学的开源视觉语言模型,确立了大多数本地多模态AI至今仍在使用的视觉编码器加LLM架构,代码采用Apache-2.0许可证,预训练检查点带有源自Llama 2的许可证条件,如今可通过Ollama用一条命令运行。',
          },
          {
            type: 'plain-terms',
            text: '这是一个可以查看图像并回答相关问题的免费AI模型——这个研究项目证明了这种方式可以运作良好且成本低廉,如今最简单的运行方式是输入`ollama run llava`并指定一个图像文件。',
          },
        ],
        items: [
          '结合CLIP视觉编码器与Vicuna(基于Llama 2)文本解码器的视觉语言模型。',
          '代码许可证:Apache-2.0。预训练检查点通过其Vicuna基础继承Llama 2社区许可证。',
          '通过`ollama pull llava`以三种尺寸运行:7B、13B和34B。',
          '官方GitHub仓库自2024年5月11日起无任何提交;超过25,000颗星,未被归档。',
          '确立了大多数后续本地视觉语言模型所使用的架构模式。',
          '更新的模型(Qwen2.5-VL、Llama 3.2 Vision、MiniCPM-V)如今在OCR、图表和多语言文档方面已超越它。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LLaVA的原始项目页面声明其数据、代码和检查点"仅供研究使用并据此授权",这一声明早于且比后来应用于GitHub仓库代码的Apache-2.0许可证更为严格。商业使用前请同时阅读GitHub的LICENSE文件和项目页面——参见下方的许可证与费用部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:从一篇研究论文到本地AI的标准',
        content: [
          '**LLaVA由Haotian Liu、Chunyuan Li、Qingyang Wu和Yong Jae Lee创建**,他们是隶属于威斯康星大学麦迪逊分校、微软研究院和哥伦比亚大学的研究人员,发表于2023年论文《Visual Instruction Tuning》,并被NeurIPS 2023接收为口头报告。',
          '**该论文的核心理念是使用GPT-4生成多模态指令跟随训练数据**,然后利用这些数据教导一个开源视觉编码器和语言模型遵循视觉指令——描述图像、回答有关图像的问题,并以对话形式对视觉内容进行推理,训练成本仅为从零构建专有多模态模型的一小部分。',
          '**LLaVA-1.5于2023年10月发布,仅通过对原始架构的简单修改就在11个基准测试上取得了最先进的结果**——主要是更高容量的视觉语言连接器和面向学术任务的训练数据——根据项目自身的页面,训练在8块A100 GPU上耗时约一天。',
          '**LLaVA-NeXT(也称LLaVA-1.6)于2024年1月发布,通过动态分块增加了对更高分辨率图像输入的支持**(最高可达672×672,宽/高图像则可达336×1344),同时改进了OCR和视觉推理能力,并支持了Vicuna之外的其他基础LLM。',
          '**公开的[haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)GitHub仓库已积累超过25,000颗星**,且未被标记为归档——但根据项目自身公开的提交历史,PromptQuorum发现其主分支自2024年5月11日起没有任何提交。这与一个已实现其目标(确立并推广该架构)的大学研究成果相符,而非一个持续商业开发的产品。',
        ],
        faqs: [
          {
            q: 'LLaVA是谁创建的?',
            a: 'LLaVA由Haotian Liu、Chunyuan Li、Qingyang Wu和Yong Jae Lee创建,他们是隶属于威斯康星大学麦迪逊分校、微软研究院和哥伦比亚大学的研究人员,发表于2023年论文《Visual Instruction Tuning》,并被NeurIPS 2023接收为口头报告。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'LLaVA的实际功能',
        content: [
          'LLaVA将视觉编码器连接到大型语言模型,使组合系统能够同时接受图像和文本提示,然后生成关于该图像的自然语言回应——回答问题、描述场景、读取可见文本,并以对话方式对视觉内容进行推理。',
        ],
        items: [
          '**CLIP编码器加LLM解码器。** LLaVA使用CLIP ViT-L/14视觉编码器将图像转换为一系列视觉特征,通过连接器模块将这些特征投影到与语言模型文本词元相同的嵌入空间,并将组合序列输入Vicuna(基于Llama 2)或在后续版本中输入Mistral或其他基础LLM以生成回应。',
          '**视觉指令微调。** LLaVA没有在原始的图像-标题对上进行训练,而是在LLaVA-Instruct-150K上进行了微调,这是一个通过向GPT-4提供图像标题和目标检测标注生成的多轮视觉对话数据集——教会模型遵循开放式视觉指令,而不仅仅是生成标题。',
          '**通过Ollama提供三种模型尺寸。** Ollama库将LLaVA打包为7B(4.7 GB)、13B(8.0 GB)和34B(20 GB)三种尺寸——通常更大的模型能产生更详细、更准确的描述,但代价是更多的VRAM消耗和更慢的推理速度。',
          '**LLaVA-1.6(LLaVA-NeXT)的分辨率改进。** 通过Ollama和官方仓库支持的当前版本通过动态分块处理更高的输入分辨率,与2023年的原始版本相比,在文本阅读和细节任务方面有明显改善。',
          '**以英语为中心的训练。** LLaVA-Instruct-150K以及用于评估该模型的基础基准测试主要为英语,因此对图像中非英语文本的开箱即用表现,弱于专门在多语言文档数据上训练的模型。',
        ],
        note: '理解LLaVA的最佳方式是将其视为如今已很常见的一种架构的参考实现,而非单一的固定产品——后续的社区和商业模型(Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V)遵循类似的视觉编码器加LLM模式,采用更新的训练数据和更高分辨率的编码器。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '安装和运行LLaVA:分步指南',
        content: '本指南涵盖最快、最常见的方式(Ollama),并提及原始仓库自身的方式以供参考。',
        numberedItems: [
          {
            title: '安装Ollama。',
            whyItMatters: '为macOS、Linux或Windows下载并安装[Ollama](https://ollama.com)。根据其[Ollama库页面](https://ollama.com/library/llava),这是官方列出的运行LLaVA的方式,耗时不到两分钟。',
          },
          {
            title: '下载LLaVA的模型尺寸。',
            whyItMatters: '运行`ollama pull llava`以获取默认的7B模型(约4.7 GB),或运行`ollama pull llava:13b`(约8.0 GB)或`ollama pull llava:34b`(约20 GB)以获得更高质量,但代价是更多的VRAM和磁盘空间。',
          },
          {
            title: '从CLI结合图像运行。',
            whyItMatters: '运行`ollama run llava "describe this image: ./photo.jpg"`,直接在提示文本中引用本地图像文件路径——无需单独的标志。',
          },
          {
            title: '(替代方案)使用原始仓库获得研究级控制。',
            whyItMatters: '克隆[haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA),安装其`requirements.txt`,并从Hugging Face下载检查点,以完全访问训练脚本、评估工具和Gradio网页演示——适用于研究或微调,但安装门槛明显高于Ollama。',
          },
          {
            title: '(可选)通过Ollama API以编程方式调用。',
            whyItMatters: '向`http://localhost:11434/api/generate`发送POST请求,将图像作为Base64编码的字符串放入`images`数组中,或使用官方的`ollama` Python或JavaScript库——参见下方的代码示例。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '这些示例使用Ollama的文档化CLI语法和HTTP API——这是当今运行LLaVA的主要支持方式。',
        ],
        codeBlock: `# 安装并下载模型
# (先从 https://ollama.com 下载Ollama)
ollama pull llava

# CLI:通过在提示中引用文件路径来描述图像
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API(记录于Ollama自身的docs/api.md中) ---
# 使用Base64编码图像的 /api/generate
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<Base64编码的图像数据>"]
}'

# 使用Base64编码图像的 /api/chat(多轮对话)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<Base64编码的图像数据>"] }
  ]
}'

# --- 使用官方ollama库的Python示例 ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: '`images`字段接受用于原始HTTP API的Base64编码图像数据,记录于[Ollama的api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)中;官方的Python和JavaScript库直接接受文件路径,并如上所示为你处理编码。',
        items: [
          '**在CLI提示中引用文件路径即可** —— Ollama会检测`.jpg`/`.png`路径并自动附加图像;没有单独的`--image`标志。',
          '**更大的模型尺寸会消耗更多的VRAM和时间。** 7B模型是速度最快、VRAM消耗最低的选项;当描述准确性比速度更重要时,请使用13B或34B。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与费用',
        content: [
          '**LLaVA在[官方GitHub仓库](https://github.com/haotian-liu/LLaVA)中的代码采用Apache-2.0许可证**,这通过仓库的LICENSE文件及GitHub报告的许可证元数据得到确认。Apache-2.0是一种宽松的许可证:你可以使用、修改和再分发该代码,包括商业用途,只需附带署名和专利授权,且几乎没有其他限制。',
          '**预训练检查点则是另一回事:它们继承了其基础LLM的条件。** 官方发布的LLaVA检查点是从Vicuna微调而来,而Vicuna本身是一个基于Meta的Llama 2构建的指令微调聊天机器人,项目自身的文档声明用户"必须遵守"原始许可证的"所有条款和条件"——具体列出了Llama 2、Vicuna、CLIP的许可证条款,以及OpenAI的使用条款(因为GPT-4被用于生成训练数据)。这意味着检查点的允许使用受Llama 2社区许可证条款约束(包括其可接受使用限制,以及要求非常大规模的商业部署需从Meta获得单独许可证),而不仅仅是Apache-2.0。',
          '**LLaVA的原始项目页面(与GitHub仓库不同的网站)添加了一项更严格、更古老的声明:** 它将"数据、代码和检查点"描述为"仅供研究使用并据此授权",并另外指出训练数据集的CC BY-NC 4.0(非商业性)标注。这早于且比GitHub上现在展示的Apache-2.0代码许可证更为严格——这是同一项目在两个不同页面上真正令人困惑的声明组合,值得指出而非挑选最方便的一个来采信。',
          '以上均不构成法律建议。在将LLaVA——或基于它微调的任何检查点——投入商业产品前,请阅读GitHub的LICENSE文件、项目页面上列出的条款、Llama 2社区许可证,并就你的具体基础模型和部署方式咨询律师。',
        ],
        faqs: [
          {
            q: 'LLaVA采用什么许可证?',
            a: 'LLaVA在GitHub上的代码采用Apache-2.0许可证,该许可证允许商业使用。然而,其官方发布的预训练检查点是从Vicuna(构建于Meta的Llama 2之上)微调而来,因此其使用也受Llama 2社区许可证条款的约束。项目一个独立的主页还将数据、代码和检查点描述为仅供研究使用,将训练数据描述为非商业性质(CC BY-NC 4.0)——这是比GitHub许可证更古老、更严格的声明。这不构成法律建议;在商业使用特定检查点之前,请自行阅读以上全部内容。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'LLaVA不适合做什么',
        content: [
          'LLaVA仍然是一个真正有用、文档完善的模型,但在2026年它已不再是每一项视觉任务的最强选择。以下情况不适合使用它:',
        ],
        items: [
          '**纯文本任务。** LLaVA是一个视觉语言模型;对于不涉及图像的纯文本对话,请使用专用的文本LLM(通过Ollama或其他方式)——运行多模态模型进行纯文本聊天会浪费其视觉编码器占用的VRAM,却没有任何好处。',
          '**需要现有最强的本地OCR或文档理解能力。** 截至2026年,根据PromptQuorum的[本地视觉模型比较](/zh/power-local-llm/local-vision-models-llava-ollama-2026),LLaVA-NeXT之后发布的模型——MiniCPM-V、Qwen2.5-VL和Llama 3.2 Vision——在文档OCR、表格和结构化提取方面已超越LLaVA。LLaVA的视觉编码器是在这一代高分辨率、以文档为重点的训练数据出现之前设计和训练的。',
          '**读取图像中的非英语文本。** LLaVA-Instruct-150K以及该模型的核心训练数据主要为英语。对于中文、日文、韩文或其他非拉丁文字的文档OCR,专门在多语言文档语料库上训练的模型(Qwen2.5-VL)将明显优于它。',
          '**从图表和图形中精确提取数字。** 与2026年几乎所有本地视觉语言模型一样,LLaVA在从复杂图表中读取精确数值方面并不可靠——无论使用哪个模型,都应将提取的任何数字与源数据进行核对。',
          '**假设持续的积极开发。** 由于官方仓库自2024年5月11日起没有任何提交,不要指望原始项目会提供新功能、错误修复或更新的检查点——Ollama自身的多模态引擎更新和更新的模型系列实际上已将其取代为积极开发的选项。',
          '**单一、简单的许可证说法。** 由于代码(Apache-2.0)和官方发布的检查点(Apache-2.0加继承的Llama 2社区许可证条款,再加上项目独立主页上更严格的仅限研究声明)受三项重叠但不完全一致的声明约束,LLaVA无法提供像Bark(完全MIT,无额外条件)那样一行即可说清的许可证清晰度。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'LLaVA的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合', '许可证'],
        rows: [
          {
            '工具': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision)(通过Ollama)',
            '最适合': '最佳的通用本地图像问答质量;11B和90B两种尺寸',
            '许可证': 'Llama 3.2社区许可证',
          },
          {
            '工具': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl)(通过Ollama)',
            '最适合': '最强的本地OCR和多语言文档理解',
            '许可证': 'Qwen许可证(较小尺寸为Apache-2.0)',
          },
          {
            '工具': '[MiniCPM-V](https://ollama.com/library/minicpm-v)(通过Ollama)',
            '最适合': '在低VRAM(约6 GB)下实现高文档OCR精度',
            '许可证': '衍生自Apache-2.0(OpenBMB)',
          },
          {
            '工具': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(Hugging Face)',
            '最适合': '拥有强大文档/OCR基准的开放研究型VLM,尚未打包用于Ollama',
            '许可证': 'Apache-2.0(Llama3变体适用基础模型条款)',
          },
          {
            '工具': '云端VLM API(GPT-4o、Claude、Gemini Vision)',
            '最适合': '可用的最高多模态能力,无需本地硬件',
            '许可证': '专有(付费API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LLaVA是什么?',
            a: 'LLaVA(Large Language and Vision Assistant)是一个开源视觉语言模型,由威斯康星大学麦迪逊分校、微软研究院和哥伦比亚大学的研究人员创建,结合视觉编码器与大型语言模型来回答关于图像的问题,发表于2023年论文《Visual Instruction Tuning》。',
          },
          {
            q: '我可以将LLaVA用于商业用途吗?',
            a: 'LLaVA在GitHub上的代码采用Apache-2.0许可证,允许商业使用。然而,其官方发布的预训练检查点是从Vicuna(构建于Meta的Llama 2之上)微调而来,因此其使用也受Llama 2社区许可证条款的约束。项目一个独立的主页还将数据、代码和检查点描述为仅供研究使用,将训练数据描述为非商业性质(CC BY-NC 4.0)——这是比GitHub许可证更古老、更严格的声明。这不构成法律建议;在商业部署特定检查点之前,请阅读所有适用的许可证。',
          },
          {
            q: '如何运行LLaVA?',
            a: '最常见的方式是通过Ollama:安装Ollama,运行`ollama pull llava`,然后运行`ollama run llava "describe this image: ./photo.jpg"`。原始仓库也提供了自己的Python推理脚本和Gradio演示,以实现研究级控制。',
          },
          {
            q: 'LLaVA、LLaVA-1.5和LLaVA-NeXT(LLaVA-1.6)之间有什么区别?',
            a: 'LLaVA(2023年)是最初的架构。LLaVA-1.5(2023年10月)通过更高容量的连接器和更好的训练数据改进了基准测试结果。LLaVA-NeXT,也称LLaVA-1.6(2024年1月),通过动态分块增加了更高分辨率的图像输入,并改进了OCR和视觉推理。通过Ollama和当前GitHub仓库分发的版本反映了LLaVA-1.6/NeXT的改进。',
          },
          {
            q: 'LLaVA仍在积极维护吗?',
            a: '官方GitHub仓库未被标记为归档,但PromptQuorum没有发现自2024年5月11日以来的任何提交。请将其视为已完成的研究成果,而非积极开发的软件——更新的模型以及Ollama自身多模态引擎的更新,已在很大程度上取代了它,成为新项目的选择。',
          },
          {
            q: 'LLaVA与Qwen2.5-VL或Llama 3.2 Vision等更新模型相比如何?',
            a: 'LLaVA确立了这些更新模型也在遵循的架构,但根据PromptQuorum的本地视觉模型比较,截至2026年,它在文档OCR、图表阅读方面已被Qwen2.5-VL和Llama 3.2 Vision超越,(特别是针对Qwen2.5-VL)在非英语文本方面也是如此。LLaVA因其易于安装、庞大的社区和广泛的教程覆盖而仍然具有相关性。',
          },
          {
            q: 'Ollama真的支持运行LLaVA吗?',
            a: '是的——`ollama run llava`是[Ollama库](https://ollama.com/library/llava)中官方列出的模型,提供7B、13B和34B三种尺寸,是如今运行LLaVA最常见的方式之一,与原始仓库自身的推理脚本并存。',
          },
          {
            q: '运行LLaVA需要什么硬件?',
            a: '7B模型大约需要4.7 GB的磁盘空间,可在6-8 GB VRAM的GPU上运行(或在CPU上运行,速度较慢);13B和34B模型需要相应更多的VRAM和磁盘空间,以获得更好的描述质量。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LLaVA在本地AI历史上赢得了自己的一席之地:它证明了一个连接到开源LLM的适度视觉编码器,在GPT-4生成的指令数据上进行微调后,能够在没有专有训练预算的情况下提供真正有用的图像理解——而它所确立的视觉编码器加LLM模式,至今仍是大多数本地多模态模型的运作基础。其代码许可证(Apache-2.0)是宽松的,但其官方发布的检查点通过其Vicuna基础携带了源自Llama 2的条款,再加上项目独立主页上更古老、更严格的仅限研究声明——在任何商业使用前请阅读全部三者。就2026年的原始能力而言,LLaVA已不再是最强的本地视觉模型:自2024年5月以来没有任何提交,而Qwen2.5-VL、Llama 3.2 Vision和MiniCPM-V等更新的选项在OCR、图表和多语言文档方面已超越它。如果你想要最简单的安装、最大的社区以及最多的现有教程,`ollama run llava`仍然是一个真正不错的起点。如果文档准确性或非英语文本很重要,请在选择模型前,将本评测与PromptQuorum的[本地视觉模型比较](/zh/power-local-llm/local-vision-models-llava-ollama-2026)和[Ollama视觉模型指南](/zh/power-local-llm/ollama-vision-models-review)结合参考。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub上的LLaVA](https://github.com/haotian-liu/LLaVA) —— 官方仓库:README、LICENSE、安装说明和提交历史。',
          '[《Visual Instruction Tuning》论文(NeurIPS 2023)](https://llava-vl.github.io/) —— 项目主页,包含论文链接、许可证声明和版本历史。',
          '[Ollama上的LLaVA](https://ollama.com/library/llava) —— 官方列出的模型页面:尺寸、描述和库元数据。',
          '[Ollama API文档](https://github.com/ollama/ollama/blob/main/docs/api.md) —— 记录了多模态模型`/api/generate`和`/api/chat`请求/响应格式的文档。',
          '[本地视觉模型2026:LLaVA、Llama 3.2 Vision、Qwen3-VL与Ollama多模态设置](/zh/power-local-llm/local-vision-models-llava-ollama-2026) —— PromptQuorum对当前本地视觉模型更广泛的比较。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地视觉模型2026:LLaVA、Llama 3.2 Vision、Qwen3-VL与Ollama多模态设置](/zh/power-local-llm/local-vision-models-llava-ollama-2026) —— 本评测以LLaVA专属深度补充的多模型比较中心。',
          '[Ollama视觉模型:实用指南](/zh/power-local-llm/ollama-vision-models-review) —— 专注于通过Ollama运行视觉模型的实用操作指南。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA评测(2026):开启本地视觉AI的研究模型',
      description:
        'LLaVA评测:来自UW-Madison和微软研究院的基础性开源视觉语言模型。真实的Ollama命令、Apache-2.0加基础模型许可证,以及与2026年更新的本地VLM的比较。',
      url: 'https://promptquorum.com/zh/power-local-llm/llava-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地自托管视觉语言模型的开发者' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: '视觉语言模型' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: '多模态AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/llava-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/llava-review-hero-ko.webp',
    title: 'LLaVA 리뷰(2026): 로컬 비전 AI의 시작을 연 연구 모델',
    seoTitle: 'LLaVA 리뷰 2026: 최초의 로컬 비전-언어 모델',
    intro:
      'LLaVA(Large Language and Vision Assistant)는 오늘날 대부분의 로컬 멀티모달 AI가 구축되는 방식——비전 인코더가 텍스트 생성 LLM에 입력되는 방식——을 확립한 오픈소스 비전-언어 모델입니다. 위스콘신-매디슨 대학교, Microsoft Research, 컬럼비아 대학교의 연구진이 개발했으며, [GitHub](https://github.com/haotian-liu/LLaVA)와 [Ollama 라이브러리](https://ollama.com/library/llava)를 통해 배포되며, 이제는 명령어 하나(`ollama run llava`)로 실행할 수 있습니다. 이 리뷰에서는 LLaVA가 실제로 무엇인지, 실제 설치 및 사용 명령어, 이중 계층 라이선스(Apache-2.0 코드와 기본 모델에 따라 달라지는 가중치 라이선스), 그리고 2026년 기준 더 새로운 로컬 비전 모델과 비교했을 때 어디에 위치하는지를 솔직하게 다룹니다.',
    metaDescription:
      'LLaVA 리뷰: UW-Madison과 Microsoft Research의 기초적인 오픈소스 비전-언어 모델. 실제 Ollama 명령어, Apache-2.0과 기본 모델 라이선스, 그리고 2026년 더 새로운 로컬 VLM과의 비교.',
    twitterDescription:
      'LLaVA 리뷰 2026: 대부분의 로컬 멀티모달 AI가 여전히 따르는 비전 인코더 플러스 LLM 패턴을 확립한 연구 모델. 실제 ollama run 명령어, Apache-2.0과 기본 모델 라이선스의 미묘한 차이, 그리고 더 새로운 옵션과의 솔직한 비교.',
    audience:
      '로컬 자체 호스팅 비전-언어 모델을 평가하는 개발자로, LLaVA의 역사와 실제 라이선스 구조를 이해하고, 2026년 신규 프로젝트에서 이를 사용해야 할지 아니면 더 새로운 모델을 선택해야 할지 알고자 하는 사람.',
    readTime: '13분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLaVA 리뷰',
    targetKeywords: [
      'llava 리뷰',
      'llava ollama',
      'llava 라이선스',
      'llava vs qwen2.5-vl',
      'llava 로컬 실행',
      'llava 비전 모델',
      'ollama run llava',
      'llava 1.6',
    ],
    current_models_mentioned: ['LLaVA', 'LLaVA-1.5', 'LLaVA-NeXT', 'Qwen2.5-VL', 'Llama 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**LLaVA(Large Language and Vision Assistant)는 비전 인코더와 텍스트 생성 LLM을 결합해 이미지에 관한 질문에 답하는 오픈소스 비전-언어 모델입니다.** 위스콘신-매디슨 대학교, Microsoft Research, 컬럼비아 대학교의 연구진이 개발했으며, [GitHub](https://github.com/haotian-liu/LLaVA)에 배포되고, 오늘날에는 더 일반적으로 [Ollama](https://ollama.com/library/llava)를 통해 실행됩니다(`ollama run llava`). 코드는 **Apache-2.0** 라이선스이지만, 사전 학습된 체크포인트는 미세 조정에 사용된 기본 LLM(자체적으로 Llama 2 커뮤니티 라이선스를 가진 Vicuna)의 라이선스에 따라 달라집니다——상업적 사용 전에 이해해야 할 미묘한 차이입니다. 현재 로컬 비전 모델 전반에 대한 더 폭넓은 비교는 PromptQuorum의 [로컬 비전 모델 가이드](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참고하세요.',
    quickAnswerTop: {
      en: {
        question: 'LLaVA란 무엇이며 2026년에도 사용할 가치가 있습니까?',
        answer:
          'LLaVA는 가장 큰 커뮤니티, 가장 많은 튜토리얼, 그리고 로컬 이미지 이해로 가는 가장 간단한 경로를 가진 비전-언어 모델을 원한다면 사용할 가치가 있습니다——`ollama pull llava` 한 번이면 명령어 하나로 작동하는 멀티모달 어시스턴트를 얻을 수 있습니다. LLaVA는 대부분의 로컬 비전-언어 모델이 여전히 따르는 아키텍처 패턴(LLM의 임베딩 공간에 투영되는 CLIP 기반 비전 인코더)을 확립했습니다. 코드는 Apache-2.0으로, 상업적 사용을 허용하는 관대한 라이선스이지만, 사전 학습된 체크포인트는 Meta의 Llama 2 위에 구축된 Vicuna로부터 미세 조정되었기 때문에, 체크포인트의 사용은 Llama 2 커뮤니티 라이선스에도 지배받습니다——이는 Apache-2.0 코드 부여에 추가되는 별개의 조건입니다. 순수한 성능 면에서 LLaVA는 더 이상 가장 강력한 로컬 옵션이 아닙니다. GitHub 저장소는 2024년 5월 이후 커밋이 없으며, Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V 같은 더 새로운 모델들이 문서 OCR, 차트 읽기, 다국어 텍스트에서 이를 능가합니다. 설치의 용이성, 커뮤니티 지원, 폭넓은 튜토리얼 커버리지를 위해서는 LLaVA를 선택하고, OCR 정확도나 비영어 텍스트가 우선순위라면 더 새로운 모델을 선택하세요.',
        bullets: [
          'UW-Madison, Microsoft Research, 컬럼비아 대학교의 연구진이 개발; NeurIPS 2023 구두 발표.',
          '코드 라이선스: Apache-2.0. 사전 학습된 체크포인트는 Llama 2 커뮤니티 라이선스를 가진 Vicuna로부터 미세 조정됨.',
          '`ollama pull llava`(7B, 13B, 34B)로 실행 가능——원본 저장소 자체의 Python 추론 스크립트와 더불어 오늘날 가장 일반적인 사용 방법.',
          '대부분의 로컬 비전-언어 모델이 여전히 따르는 비전 인코더 플러스 LLM 패턴을 확립.',
          '공식 GitHub 저장소는 2024년 5월 11일 이후 커밋 없음; 25,000개 이상의 스타, 아카이브되지 않음.',
          '더 새로운 모델(Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V)이 2026년 기준 문서 OCR, 차트, 다국어 텍스트에서 이를 능가.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: 연구 논문에서 로컬 AI 표준으로', anchor: 'history' },
      { label: 'LLaVA가 실제로 하는 일', anchor: 'what-it-does' },
      { label: 'LLaVA 설치 및 실행: 단계별 안내', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스와 비용', anchor: 'license-cost' },
      { label: 'LLaVA가 적합하지 않은 용도', anchor: 'limitations' },
      { label: 'LLaVA의 대안', anchor: 'alternatives' },
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
            text: 'LLaVA는 UW-Madison, Microsoft Research, 컬럼비아 대학교의 오픈소스 비전-언어 모델로, 대부분의 로컬 멀티모달 AI가 여전히 사용하는 비전 인코더 플러스 LLM 아키텍처를 확립했으며, 코드는 Apache-2.0, 사전 학습된 체크포인트는 Llama 2에서 파생된 라이선스 조건을 가지고 있고, 이제는 Ollama를 통해 명령어 하나로 실행할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '이미지를 보고 그에 관한 질문에 답할 수 있는 무료 AI 모델입니다——이것이 잘, 그리고 저렴하게 작동할 수 있음을 증명한 연구 프로젝트로, 오늘날 가장 간단하게는 `ollama run llava`를 입력하고 이미지 파일을 지정하는 것만으로 실행할 수 있습니다.',
          },
        ],
        items: [
          'CLIP 비전 인코더와 Vicuna(Llama 2 기반) 텍스트 디코더를 결합한 비전-언어 모델.',
          '코드 라이선스: Apache-2.0. 사전 학습된 체크포인트는 Vicuna 기반을 통해 Llama 2 커뮤니티 라이선스를 상속.',
          '`ollama pull llava`로 세 가지 크기(7B, 13B, 34B)로 실행 가능.',
          '공식 GitHub 저장소는 2024년 5월 11일 이후 커밋 없음; 25,000개 이상의 스타, 아카이브되지 않음.',
          '이후 대부분의 로컬 비전-언어 모델이 사용하는 아키텍처 패턴을 확립.',
          '더 새로운 모델(Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V)이 이제 OCR, 차트, 다국어 문서에서 이를 능가.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LLaVA의 원래 프로젝트 페이지는 데이터, 코드, 체크포인트가 "연구 목적으로만 의도되었고 그렇게 라이선스가 부여되었다"고 명시하고 있으며, 이는 이후 GitHub 저장소의 코드에 적용된 Apache-2.0 라이선스보다 더 오래되고 더 엄격한 내용입니다. 상업적 사용 전에 GitHub의 LICENSE 파일과 프로젝트 페이지를 모두 읽어보세요——아래 라이선스와 비용 섹션을 참조하세요.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: 연구 논문에서 로컬 AI 표준으로',
        content: [
          '**LLaVA는 위스콘신-매디슨 대학교, Microsoft Research, 컬럼비아 대학교에 소속된 Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee가 개발했으며**, 2023년 논문 "Visual Instruction Tuning"에서 소개되었고 NeurIPS 2023 구두 발표로 채택되었습니다.',
          '**논문의 핵심 아이디어는 GPT-4를 사용해 멀티모달 지시 따르기 훈련 데이터를 생성한 다음**, 이 데이터를 사용해 오픈소스 비전 인코더와 언어 모델이 시각적 지시를 따르도록 가르치는 것이었습니다——이미지를 설명하고, 그에 관한 질문에 답하며, 대화 형식으로 시각적 콘텐츠에 대해 추론하도록——이는 처음부터 독점 멀티모달 모델을 구축하는 훈련 비용의 극히 일부만으로 가능했습니다.',
          '**2023년 10월에 출시된 LLaVA-1.5는 원래 아키텍처에 대한 단순한 수정만으로 11개 벤치마크에서 최첨단 결과를 달성했습니다**——주로 더 높은 용량의 비전-언어 커넥터와 학술 작업 지향적인 훈련 데이터로——프로젝트 자체 페이지에 따르면 8개의 A100 GPU에서 약 하루 만에 훈련되었습니다.',
          '**2024년 1월에 출시된 LLaVA-NeXT(LLaVA-1.6이라고도 함)는 동적 패칭을 통해 더 높은 해상도의 이미지 입력 지원을 추가했으며**(최대 672×672, 또는 가로/세로가 긴 이미지의 경우 336×1344), OCR 및 시각적 추론 개선과 함께 Vicuna를 넘어선 추가 기본 LLM 지원도 추가되었습니다.',
          '**공개된 [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) GitHub 저장소는 25,000개 이상의 스타를 모았으며**, 아카이브로 표시되어 있지는 않지만——PromptQuorum은 프로젝트 자체의 공개 커밋 이력을 기준으로 메인 브랜치에 2024년 5월 11일 이후 커밋이 없음을 확인했습니다. 이는 지속적인 상업 제품이라기보다는 목표(아키텍처의 확립과 대중화)를 달성한 대학 연구 발표와 일치합니다.',
        ],
        faqs: [
          {
            q: 'LLaVA는 누가 개발했나요?',
            a: 'LLaVA는 위스콘신-매디슨 대학교, Microsoft Research, 컬럼비아 대학교에 소속된 Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee가 개발했으며, 2023년 논문 "Visual Instruction Tuning"에서 소개되었고 NeurIPS 2023 구두 발표로 채택되었습니다.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'LLaVA가 실제로 하는 일',
        content: [
          'LLaVA는 비전 인코더를 대형 언어 모델에 연결하여 결합된 시스템이 이미지와 텍스트 프롬프트를 함께 받아들이고, 그 이미지에 관한 자연어 응답을 생성할 수 있도록 합니다——질문에 답하고, 장면을 설명하고, 보이는 텍스트를 읽고, 시각적 콘텐츠에 대해 대화 형식으로 추론합니다.',
        ],
        items: [
          '**CLIP 인코더 플러스 LLM 디코더.** LLaVA는 CLIP ViT-L/14 비전 인코더를 사용해 이미지를 일련의 시각적 특징으로 변환하고, 커넥터 모듈을 통해 이 특징들을 언어 모델의 텍스트 토큰과 동일한 임베딩 공간에 투영한 다음, 결합된 시퀀스를 Vicuna(Llama 2 기반) 또는 이후 버전에서는 Mistral이나 다른 기본 LLM에 입력하여 응답을 생성합니다.',
          '**시각적 지시 튜닝.** 원시 이미지-캡션 쌍으로 훈련하는 대신, LLaVA는 LLaVA-Instruct-150K에서 미세 조정되었습니다. 이는 GPT-4에 이미지 캡션과 객체 감지 주석을 제시하여 생성한 다중 턴 시각 대화 데이터셋입니다——모델에게 단순히 캡션을 생성하는 것이 아니라 개방형 시각적 지시를 따르도록 가르칩니다.',
          '**Ollama를 통한 세 가지 모델 크기.** Ollama 라이브러리는 LLaVA를 7B(4.7GB), 13B(8.0GB), 34B(20GB) 크기로 패키징합니다——일반적으로 더 큰 모델일수록 더 상세하고 정확한 설명을 생성하지만, 더 많은 VRAM과 더 느린 추론을 대가로 합니다.',
          '**LLaVA-1.6(LLaVA-NeXT)의 해상도 개선.** Ollama와 공식 저장소를 통해 지원되는 현재 버전은 동적 패칭을 통해 더 높은 입력 해상도를 처리하며, 2023년 원본 릴리스에 비해 텍스트 읽기 및 세부 사항 작업이 눈에 띄게 향상되었습니다.',
          '**영어 중심 훈련.** LLaVA-Instruct-150K와 이를 평가하는 데 사용된 기본 벤치마크는 대부분 영어이므로, 이미지 내 비영어 텍스트에 대한 기본 성능은 다국어 문서 데이터로 특별히 훈련된 모델보다 약합니다.',
        ],
        note: 'LLaVA는 단일 고정 제품이라기보다는 이제는 흔해진 아키텍처의 참조 구현으로 이해하는 것이 가장 적절합니다——이후 커뮤니티 및 상업용 모델(Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V)은 업데이트된 훈련 데이터와 더 높은 해상도의 인코더를 갖춘, 비전 인코더 플러스 LLM이라는 유사한 패턴을 따릅니다.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'LLaVA 설치 및 실행: 단계별 안내',
        content: '이 안내서는 가장 빠르고 일반적인 경로(Ollama)를 다루며, 참고용으로 원본 저장소 자체의 경로도 언급합니다.',
        numberedItems: [
          {
            title: 'Ollama를 설치합니다.',
            whyItMatters: 'macOS, Linux, Windows용 [Ollama](https://ollama.com)를 다운로드하여 설치합니다. 이는 [Ollama 라이브러리 페이지](https://ollama.com/library/llava)에 따르면 LLaVA를 실행하는 공식적으로 명시된 방법이며, 2분도 채 걸리지 않습니다.',
          },
          {
            title: 'LLaVA 모델 크기를 다운로드합니다.',
            whyItMatters: '기본 7B 모델(~4.7GB)을 위해 `ollama pull llava`를 실행하거나, 더 높은 품질을 원하지만 더 많은 VRAM과 디스크 공간을 감수할 경우 `ollama pull llava:13b`(~8.0GB) 또는 `ollama pull llava:34b`(~20GB)를 실행합니다.',
          },
          {
            title: 'CLI에서 이미지와 함께 실행합니다.',
            whyItMatters: '`ollama run llava "describe this image: ./photo.jpg"`를 실행하여 프롬프트 텍스트 내에서 로컬 이미지 파일 경로를 직접 참조합니다——별도의 플래그가 필요하지 않습니다.',
          },
          {
            title: '(대안) 연구 수준의 제어를 위해 원본 저장소를 사용합니다.',
            whyItMatters: '[haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA)를 클론하고, `requirements.txt`를 설치하고, Hugging Face에서 체크포인트를 다운로드하여 훈련 스크립트, 평가 도구, Gradio 웹 데모에 완전히 접근합니다——연구나 미세 조정에는 유용하지만 Ollama보다 훨씬 높은 설치 장벽입니다.',
          },
          {
            title: '(선택 사항) Ollama API를 통해 프로그래밍 방식으로 호출합니다.',
            whyItMatters: '`images` 배열에 Base64로 인코딩된 문자열로 이미지를 담아 `http://localhost:11434/api/generate`에 POST 요청을 보내거나, 공식 `ollama` Python 또는 JavaScript 라이브러리를 사용합니다——아래 코드 예시를 참조하세요.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '이 예시들은 Ollama의 문서화된 CLI 구문과 HTTP API를 사용합니다——오늘날 LLaVA를 실행하는 주요 지원 방법입니다.',
        ],
        codeBlock: `# 설치 및 모델 다운로드
# (먼저 https://ollama.com 에서 Ollama를 다운로드하세요)
ollama pull llava

# CLI: 프롬프트에서 파일 경로를 참조하여 이미지 설명
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API(Ollama 자체 docs/api.md에 문서화됨) ---
# Base64로 인코딩된 이미지를 사용하는 /api/generate
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<Base64로 인코딩된 이미지 데이터>"]
}'

# Base64로 인코딩된 이미지를 사용하는 /api/chat(다중 턴 대화)
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<Base64로 인코딩된 이미지 데이터>"] }
  ]
}'

# --- 공식 ollama 라이브러리를 사용한 Python 예시 ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])`,
        codeLanguage: 'bash',
        note: '`images` 필드는 [Ollama의 api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)에 문서화된 원시 HTTP API를 위해 Base64로 인코딩된 이미지 데이터를 받아들입니다. 공식 Python 및 JavaScript 라이브러리는 위에 표시된 것처럼 파일 경로를 직접 받아 인코딩을 대신 처리해줍니다.',
        items: [
          '**CLI 프롬프트에서 파일 경로를 참조하는 것만으로 충분합니다** — Ollama가 `.jpg`/`.png` 경로를 감지해 자동으로 이미지를 첨부합니다. 별도의 `--image` 플래그는 없습니다.',
          '**더 큰 모델 크기는 더 많은 VRAM과 시간을 소모합니다.** 7B 모델은 가장 빠르고 VRAM 소비가 가장 적은 옵션입니다. 설명 정확도가 속도보다 더 중요할 때는 13B 또는 34B를 사용하세요.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스와 비용',
        content: [
          '**[공식 GitHub 저장소](https://github.com/haotian-liu/LLaVA)에 있는 LLaVA의 코드는 Apache-2.0 라이선스를 따릅니다**. 이는 저장소의 LICENSE 파일과 GitHub가 보고하는 라이선스 메타데이터를 통해 확인됩니다. Apache-2.0은 관대한 라이선스로, 저작자 표시와 특허 부여를 조건으로 하며 그 외에는 최소한의 제한만으로 코드를 상업적 용도를 포함해 사용, 수정, 재배포할 수 있습니다.',
          '**사전 학습된 체크포인트는 이야기가 다릅니다: 기본 LLM으로부터 조건을 상속받습니다.** 공식적으로 발표된 LLaVA 체크포인트는 Meta의 Llama 2 위에 구축된 지시 튜닝 챗봇인 Vicuna로부터 미세 조정되었으며, 프로젝트 자체 문서에는 사용자가 원본 라이선스의 "모든 조건"을 준수해야 한다고 명시되어 있습니다——구체적으로 Llama 2, Vicuna, CLIP의 라이선스 조건과 OpenAI의 이용 약관(GPT-4가 훈련 데이터 생성에 사용되었기 때문)을 언급합니다. 이는 체크포인트의 허용된 사용이 Apache-2.0뿐만 아니라 Llama 2 커뮤니티 라이선스의 조건(허용되는 사용에 대한 제한 및 매우 대규모의 상업적 배포는 Meta로부터 별도 라이선스를 취득해야 한다는 요건 포함)에도 지배받는다는 것을 의미합니다.',
          '**LLaVA의 원래 프로젝트 페이지(GitHub 저장소와는 별개의 사이트)는 더 엄격하고 오래된 명시를 추가합니다:** "데이터, 코드, 체크포인트"를 "연구 목적으로만 의도되었고 그렇게 라이선스가 부여되었다"고 설명하며, 별도로 훈련 데이터셋의 CC BY-NC 4.0(비상업적) 지정도 언급합니다. 이는 GitHub에 현재 표시된 Apache-2.0 코드 라이선스보다 앞서 있고 더 엄격합니다——같은 프로젝트가 서로 다른 두 페이지에서 보이는 진정으로 혼란스러운 명시의 조합으로, 가장 편리한 것을 골라 취하기보다는 이 점 자체를 짚어볼 가치가 있습니다.',
          '이 중 어느 것도 법률 자문이 아닙니다. LLaVA——또는 이를 기반으로 미세 조정된 체크포인트——를 상업 제품에 출시하기 전에, GitHub의 LICENSE 파일, 프로젝트 페이지에 명시된 조건, Llama 2 커뮤니티 라이선스를 읽고, 특정 기본 모델과 배포 방식에 대해 변호사와 상담하세요.',
        ],
        faqs: [
          {
            q: 'LLaVA는 어떤 라이선스를 사용하나요?',
            a: 'GitHub의 LLaVA 코드는 상업적 사용을 허용하는 관대한 라이선스인 Apache-2.0을 따릅니다. 그러나 공식적으로 발표된 사전 학습된 체크포인트는 Meta의 Llama 2 위에 구축된 Vicuna로부터 미세 조정되었기 때문에, 그 사용은 Llama 2 커뮤니티 라이선스의 조건에도 지배받습니다. 프로젝트의 별개의 홈페이지는 또한 데이터, 코드, 체크포인트를 연구 목적으로만 사용하도록 의도되었다고 설명하고, 훈련 데이터를 비상업적(CC BY-NC 4.0)이라고 설명합니다——이는 GitHub 라이선스보다 더 오래되고 엄격한 명시입니다. 이는 법률 자문이 아닙니다. 특정 체크포인트를 상업적으로 사용하기 전에 위 내용을 모두 직접 읽어보세요.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'LLaVA가 적합하지 않은 용도',
        content: [
          'LLaVA는 여전히 진정으로 유용하고 잘 문서화된 모델이지만, 2026년 기준으로는 모든 비전 작업에서 더 이상 가장 강력한 선택은 아닙니다. 다음과 같은 상황에는 적합하지 않은 도구입니다:',
        ],
        items: [
          '**순수 텍스트 작업.** LLaVA는 비전-언어 모델입니다. 이미지가 관련되지 않은 순수 텍스트 대화에는 전용 텍스트 LLM(Ollama를 통하거나 다른 방식으로)을 사용하세요——텍스트 전용 채팅에 멀티모달 모델을 실행하면 아무런 이득 없이 비전 인코더가 차지하는 VRAM만 낭비하게 됩니다.',
          '**이용 가능한 가장 강력한 로컬 OCR이나 문서 이해가 필요한 경우.** 2026년 기준, LLaVA-NeXT 이후에 출시된 모델——MiniCPM-V, Qwen2.5-VL, Llama 3.2 Vision——은 PromptQuorum의 [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)에 따르면 문서 OCR, 표, 구조화된 추출에서 LLaVA를 능가합니다. LLaVA의 비전 인코더는 이 세대의 고해상도, 문서 중심 훈련 데이터가 존재하기 전에 설계되고 훈련되었습니다.',
          '**이미지 속 비영어 텍스트 읽기.** LLaVA-Instruct-150K와 모델의 핵심 훈련 데이터는 대부분 영어입니다. 중국어, 일본어, 한국어 또는 기타 비라틴 문자 문서 OCR의 경우, 다국어 문서 코퍼스로 특별히 훈련된 모델(Qwen2.5-VL)이 눈에 띄게 더 우수한 성능을 보입니다.',
          '**차트와 그래프에서의 정밀한 수치 추출.** 2026년 기준 거의 모든 로컬 비전-언어 모델과 마찬가지로, LLaVA는 복잡한 차트에서 정확한 값을 읽는 데 신뢰할 수 없습니다——사용하는 모델과 관계없이 추출된 수치는 항상 원본 데이터와 대조하여 확인하세요.',
          '**지속적인 활발한 개발을 가정하는 것.** 공식 저장소에 2024년 5월 11일 이후 커밋이 없으므로, 원본 프로젝트로부터 새로운 기능, 버그 수정, 또는 더 최신 체크포인트를 기대하지 마세요——Ollama 자체의 멀티모달 엔진 업데이트와 더 새로운 모델 계열이 사실상 활발하게 개발되는 옵션으로서 이를 대체했습니다.',
          '**단일하고 간단한 라이선스 설명.** 코드(Apache-2.0)와 공식적으로 발표된 체크포인트(Apache-2.0에 더해 상속된 Llama 2 커뮤니티 라이선스 조건, 그리고 프로젝트의 별개 홈페이지에 있는 더 엄격한 연구 전용 명시)가 완전히 정렬되지 않는 세 가지 중첩된 명시에 의해 지배되기 때문에, LLaVA는 Bark(완전히 MIT, 추가 조건 없음) 같은 프로젝트가 제공하는 한 줄로 정리되는 라이선스 명확성을 제공하지 않습니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'LLaVA의 대안',
        itemHeadings: true,
        columns: ['도구', '최적 용도', '라이선스'],
        rows: [
          {
            '도구': '[Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision)(Ollama 경유)',
            '최적 용도': '최고의 일반적인 로컬 이미지 질의응답 품질; 11B 및 90B 크기',
            '라이선스': 'Llama 3.2 커뮤니티 라이선스',
          },
          {
            '도구': '[Qwen2.5-VL](https://ollama.com/library/qwen2.5vl)(Ollama 경유)',
            '최적 용도': '가장 강력한 로컬 OCR 및 다국어 문서 이해',
            '라이선스': 'Qwen 라이선스(작은 크기는 Apache-2.0)',
          },
          {
            '도구': '[MiniCPM-V](https://ollama.com/library/minicpm-v)(Ollama 경유)',
            '최적 용도': '낮은(~6GB) VRAM에서 높은 문서 OCR 정확도',
            '라이선스': 'Apache-2.0 파생(OpenBMB)',
          },
          {
            '도구': '[Idefics3](https://huggingface.co/HuggingFaceM4/Idefics3-8B-Llama3)(Hugging Face)',
            '최적 용도': '강력한 문서/OCR 벤치마크를 갖춘 개방형 연구용 VLM, 아직 Ollama용으로 패키징되지 않음',
            '라이선스': 'Apache-2.0(Llama3 변형에는 기본 모델 조건 적용)',
          },
          {
            '도구': '클라우드 VLM API(GPT-4o, Claude, Gemini Vision)',
            '최적 용도': '이용 가능한 최고의 멀티모달 성능, 로컬 하드웨어 불필요',
            '라이선스': '독점(유료 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LLaVA란 무엇인가요?',
            a: 'LLaVA(Large Language and Vision Assistant)는 위스콘신-매디슨 대학교, Microsoft Research, 컬럼비아 대학교의 연구진이 만든 오픈소스 비전-언어 모델로, 비전 인코더와 대형 언어 모델을 결합해 이미지에 관한 질문에 답하며, 2023년 논문 "Visual Instruction Tuning"에서 소개되었습니다.',
          },
          {
            q: 'LLaVA를 상업적으로 사용할 수 있나요?',
            a: 'GitHub의 LLaVA 코드는 상업적 사용을 허용하는 Apache-2.0 라이선스를 따릅니다. 그러나 공식적으로 발표된 사전 학습된 체크포인트는 Meta의 Llama 2 위에 구축된 Vicuna로부터 미세 조정되었기 때문에, 그 사용은 Llama 2 커뮤니티 라이선스의 조건에도 지배받습니다. 프로젝트의 별개의 홈페이지는 또한 데이터, 코드, 체크포인트를 연구 목적으로만 사용하도록 설명하고, 훈련 데이터를 비상업적(CC BY-NC 4.0)이라고 설명합니다——이는 GitHub 라이선스보다 더 오래되고 엄격한 명시입니다. 이는 법률 자문이 아닙니다. 특정 체크포인트를 상업적으로 배포하기 전에 적용 가능한 모든 라이선스를 읽어보세요.',
          },
          {
            q: 'LLaVA는 어떻게 실행하나요?',
            a: '가장 일반적인 방법은 Ollama를 통하는 것입니다: Ollama를 설치하고, `ollama pull llava`를 실행한 다음, `ollama run llava "describe this image: ./photo.jpg"`를 실행합니다. 원본 저장소도 연구 수준의 제어를 위해 자체 Python 추론 스크립트와 Gradio 데모를 제공합니다.',
          },
          {
            q: 'LLaVA, LLaVA-1.5, LLaVA-NeXT(LLaVA-1.6)의 차이는 무엇인가요?',
            a: 'LLaVA(2023년)는 원래 아키텍처였습니다. LLaVA-1.5(2023년 10월)는 더 높은 용량의 커넥터와 더 나은 훈련 데이터로 벤치마크 결과를 개선했습니다. LLaVA-NeXT, 즉 LLaVA-1.6(2024년 1월)은 동적 패칭을 통해 더 높은 해상도의 이미지 입력을 추가하고 OCR과 시각적 추론을 개선했습니다. Ollama와 현재 GitHub 저장소를 통해 배포되는 버전은 LLaVA-1.6/NeXT의 개선 사항을 반영합니다.',
          },
          {
            q: 'LLaVA는 여전히 활발하게 유지보수되고 있나요?',
            a: '공식 GitHub 저장소는 아카이브로 표시되어 있지 않지만, PromptQuorum은 2024년 5월 11일 이후 커밋을 발견하지 못했습니다. 이를 활발하게 개발되는 소프트웨어가 아니라 완료된 연구 발표로 취급하세요——더 새로운 모델과 Ollama 자체의 멀티모달 엔진 업데이트가 신규 프로젝트에서 이를 대체로 대체했습니다.',
          },
          {
            q: 'LLaVA는 Qwen2.5-VL이나 Llama 3.2 Vision 같은 더 새로운 모델과 비교해 어떤가요?',
            a: 'LLaVA는 이러한 더 새로운 모델들도 따르는 아키텍처를 확립했지만, PromptQuorum의 로컬 비전 모델 비교에 따르면 2026년 기준으로는 문서 OCR, 차트 읽기, (특히 Qwen2.5-VL의 경우) 비영어 텍스트에서 Qwen2.5-VL과 Llama 3.2 Vision에 뒤처집니다. LLaVA는 설치의 용이성, 큰 커뮤니티, 광범위한 튜토리얼 커버리지로 여전히 유의미합니다.',
          },
          {
            q: 'Ollama가 실제로 LLaVA 실행을 지원하나요?',
            a: '예——`ollama run llava`는 [Ollama 라이브러리](https://ollama.com/library/llava)에 공식적으로 등재된 모델로, 7B, 13B, 34B 크기로 제공되며, 원본 저장소 자체의 추론 스크립트와 더불어 오늘날 LLaVA를 실행하는 가장 일반적인 방법 중 하나입니다.',
          },
          {
            q: 'LLaVA를 실행하려면 어떤 하드웨어가 필요한가요?',
            a: '7B 모델은 약 4.7GB의 디스크 공간이 필요하며 6-8GB VRAM을 가진 GPU(또는 CPU, 더 느림)에서 실행할 수 있습니다. 13B와 34B 모델은 더 나은 설명 품질을 위해 비례적으로 더 많은 VRAM과 디스크 공간이 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LLaVA는 로컬 AI 역사에서 자신의 자리를 확보했습니다: GPT-4가 생성한 지시 데이터로 미세 조정된, 오픈소스 LLM에 연결된 소박한 비전 인코더가 독점적인 훈련 예산 없이도 진정으로 유용한 이미지 이해를 제공할 수 있음을 증명했으며——그것이 확립한 비전 인코더 플러스 LLM 패턴은 오늘날에도 여전히 대부분의 로컬 멀티모달 모델의 작동 기반입니다. 코드 라이선스(Apache-2.0)는 관대하지만, 공식적으로 발표된 체크포인트는 Vicuna 기반을 통해 Llama 2에서 파생된 조건을 지니고 있고, 프로젝트의 별개 홈페이지에는 더 오래되고 엄격한 연구 전용 명시가 추가로 있습니다——상업적 사용 전에 이 세 가지를 모두 읽어보세요. 2026년 순수 성능 면에서 LLaVA는 더 이상 가장 강력한 로컬 비전 모델이 아닙니다: 2024년 5월 이후 커밋이 없으며, Qwen2.5-VL, Llama 3.2 Vision, MiniCPM-V 같은 더 새로운 옵션들이 OCR, 차트, 다국어 문서에서 이를 능가합니다. 가장 간단한 설치, 가장 큰 커뮤니티, 가장 많은 기존 튜토리얼을 원한다면 `ollama run llava`는 여전히 진정으로 좋은 출발점입니다. 문서 정확도나 비영어 텍스트가 중요하다면, 모델을 선택하기 전에 이 리뷰를 PromptQuorum의 [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)와 [Ollama 비전 모델 가이드](/ko/power-local-llm/ollama-vision-models-review)와 함께 참고하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 LLaVA](https://github.com/haotian-liu/LLaVA) — 공식 저장소: README, LICENSE, 설치 안내, 커밋 이력.',
          '["Visual Instruction Tuning" 논문(NeurIPS 2023)](https://llava-vl.github.io/) — 논문 링크, 라이선스 명시, 버전 이력이 포함된 프로젝트 홈페이지.',
          '[Ollama의 LLaVA](https://ollama.com/library/llava) — 공식적으로 등재된 모델 페이지: 크기, 설명, 라이브러리 메타데이터.',
          '[Ollama API 문서](https://github.com/ollama/ollama/blob/main/docs/api.md) — 멀티모달 모델을 위한 `/api/generate` 및 `/api/chat` 요청/응답 형식이 문서화된 자료.',
          '[로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama 멀티모달 설정](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 현재 로컬 비전 모델 전반에 대한 PromptQuorum의 더 폭넓은 비교.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama 멀티모달 설정](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 이 리뷰가 LLaVA 특화 깊이로 보완하는 다중 모델 비교 허브.',
          '[Ollama 비전 모델: 실용 가이드](/ko/power-local-llm/ollama-vision-models-review) — Ollama를 통해 비전 지원 모델을 실행하는 데 초점을 맞춘 실용적인 사용법 안내.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLaVA 리뷰(2026): 로컬 비전 AI의 시작을 연 연구 모델',
      description:
        'LLaVA 리뷰: UW-Madison과 Microsoft Research의 기초적인 오픈소스 비전-언어 모델. 실제 Ollama 명령어, Apache-2.0과 기본 모델 라이선스, 그리고 2026년 더 새로운 로컬 VLM과의 비교.',
      url: 'https://promptquorum.com/ko/power-local-llm/llava-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 자체 호스팅 비전-언어 모델을 평가하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'LLaVA' },
        { '@type': 'Thing', name: '비전-언어 모델' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: '멀티모달 AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/llava-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLaVA 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/llava-review' },
      ],
    },
  },
}
