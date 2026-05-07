// Power Local LLM — Uncensored Local LLMs for Creative Writing: Ethics and Setup (2026)
// Slug: uncensored-local-llm-creative-writing-ethics
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Uncensored Local LLMs for Creative Writing: Ethics and Setup (2026)',
    seoTitle: 'Uncensored Local LLMs for Creative Writing: Ethics 2026',
    intro:
      'Uncensored local LLMs let fiction writers generate mature, morally complex, and dark content that cloud services refuse — with no data leaving your machine. This guide covers which models to use, how to set them up through Ollama or LM Studio, the genuine ethical responsibilities that apply even when there is no terms-of-service enforcement, and the specific use cases where uncensored models are appropriate versus where they are not.',
    metaDescription:
      'Uncensored local LLMs for creative writing: which models to use, Ollama setup, ethical responsibilities, appropriate use cases, and content guardrails writers should keep regardless.',
    twitterDescription:
      'Uncensored local LLMs for fiction writers — which models, Ollama setup, and the genuine ethics: when they\'re appropriate and what responsibilities writers still have.',
    current_models_mentioned: [
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Mistral',
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Fiction writers, novelists, game narrative designers, and creative professionals who need local LLMs that generate mature or dark content without cloud service refusals, and who want to understand their ethical responsibilities in that use.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'uncensored local LLM creative writing',
    targetKeywords: [
      'uncensored local llm creative writing',
      'uncensored ollama models',
      'hermes 3 creative writing',
      'dolphin mistral uncensored setup',
      'local llm dark fiction',
      'uncensored ai writing ethics',
    ],
    leadAnswerBlock:
      '**Uncensored local LLMs are appropriate for fiction writers who need to generate morally complex characters, dark themes, violence, mature romantic content, or unreliable narrator voices that cloud models refuse to produce. They are appropriate only when the output is used for creative fiction with an adult audience — not as a tool to produce real-world harmful content, non-consensual depictions of real people, or content involving minors in sexual contexts. The models that fit most fiction-writing use cases in 2026 are Hermes 3 Llama 3.3 (fewer refusals, strong instruction following) and Dolphin 3.0 Mistral (broader uncensored range, smaller footprint). Both run fully locally through Ollama or LM Studio with no data leaving your machine. The ethical responsibilities that apply when using these models are not zero — writers working with uncensored models still have obligations around distribution, minors, and real people that no local setup removes.**',
    quickAnswerTop: {
      en: {
        question: 'Which uncensored local LLMs should fiction writers use in 2026?',
        answer:
          'Hermes 3 Llama 3.3 is the best all-round uncensored model for fiction in 2026 — strong instruction following, good character voice differentiation, fewer arbitrary refusals without the aggressive output that some fully uncensored fine-tunes produce. Dolphin 3.0 Mistral is the lighter alternative on 16–24 GB systems. For writers who need occasional dark content rather than persistent uncensored output, standard instruction-tuned models (Llama 3.3 70B, Qwen3 32B) with well-structured prompts generate most mature literary content without requiring an uncensored fine-tune. The ethical baseline that applies regardless of model: no content involving minors in sexual contexts, no non-consensual depictions of identifiable real people, and careful consideration before distributing output publicly.',
        bullets: [
          'Hermes 3 Llama 3.3 — best all-round uncensored fiction model; strong instruction following, fewer arbitrary refusals.',
          'Dolphin 3.0 Mistral — lighter option for 16–24 GB systems; broader uncensored range than Hermes 3.',
          'Standard Llama 3.3 70B and Qwen3 32B generate most mature literary content with structured prompts — no uncensored fine-tune required for many use cases.',
          'All uncensored models run fully locally through Ollama or LM Studio — no data leaves your machine.',
          'Ethical baseline applies regardless of model: no minors, no non-consensual depictions of real people.',
          'Distribution responsibility: what you do with the output carries the same legal weight as any other authored content.',
          'For roleplay frontends, SillyTavern and Agnai both pair with uncensored Ollama models cleanly.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What "Uncensored" Actually Means', anchor: '#what-uncensored-means' },
      { label: 'When Uncensored Models Are Appropriate', anchor: '#appropriate-use' },
      { label: 'When They Are Not', anchor: '#inappropriate-use' },
      { label: 'Model Comparison', anchor: '#models' },
      { label: 'Setup: Ollama and LM Studio', anchor: '#setup' },
      { label: 'Ethical Responsibilities That Remain', anchor: '#ethics' },
      { label: 'Practical Workflow', anchor: '#workflow' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**"Uncensored" means the model has reduced RLHF safety fine-tuning — not that it has no constraints at all.** Uncensored fine-tunes still follow the instruction format, maintain character consistency, and can be directed with prompts. They are not "anything goes" systems.',
          '**Hermes 3 Llama 3.3 is the best all-round pick for fiction writers in 2026.** Fewer arbitrary refusals, strong instruction following, good character voice differentiation. The right choice for writers who want the capability without the aggressive output some fully uncensored models produce.',
          '**Standard instruction-tuned models handle most mature literary content with good prompts.** Violence, moral complexity, dark psychology, and mature themes in literary prose rarely require an uncensored fine-tune. What they refuse is explicit sexual content and detailed descriptions of real-world harm. Know which category your work falls in before switching models.',
          '**Running locally means no data leaves your machine.** No cloud terms-of-service applies. No content is logged, analysed, or used for training. This is the main structural reason writers use local uncensored models — privacy plus no usage restrictions on fiction.',
          '**Ethical responsibilities do not disappear because there is no ToS enforcement.** Writers distributing fiction produced with uncensored models carry the same legal responsibilities as any other author: minors, real people, incitement, and jurisdiction-specific obscenity laws all apply regardless of the generation method.',
          '**Dolphin 3.0 Mistral is the lighter option for 16–24 GB rigs.** Broader uncensored output range than Hermes 3 but weaker instruction following in complex scenes. Suitable for short-form fiction, prompt exploration, and style testing.',
          '**SillyTavern and Agnai both pair cleanly with uncensored Ollama models.** Point either frontend at the Ollama OpenAI-compatible endpoint and select the uncensored model. No additional configuration required.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Uncensored models tested:** Hermes 3 Llama 3.3 (primary), Dolphin 3.0 Mistral (secondary).',
          '**Backends:** Ollama (primary), LM Studio (alternative for GUI setup).',
          '**Hardware:** Hermes 3 70B at Q4 requires ~42 GB; Dolphin 3.0 7B runs on 8 GB; Dolphin 3.0 24B runs on ~16 GB.',
          '**Frontends:** SillyTavern, Agnai, RisuAI all pair with uncensored Ollama models via OpenAI-compatible endpoint.',
          '**Privacy:** all local — no cloud API calls, no logging, no training data collection.',
          '**Hard ethical limits:** no sexual content involving minors (absolute), no non-consensual sexual depictions of identifiable real people, no content designed to facilitate real-world violence.',
          '**Distribution:** output you publish carries authorial responsibility regardless of generation method.',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: 'What "Uncensored" Actually Means',
        content:
          '**"Uncensored" in the context of local LLM fine-tunes means reduced RLHF (reinforcement learning from human feedback) safety training — not the removal of all model constraints.** Standard instruction-tuned models are trained with RLHF layers that make them refuse specific categories of content: explicit sexual content, detailed violence, dark psychology that resembles a real harm template. Uncensored fine-tunes (Hermes 3, Dolphin, Wizard, Erebus) strip or reduce these RLHF layers from the base model, leaving the instruction-following capability intact but removing the refusal behaviours. The result is a model that follows your fiction prompts through dark content without redirecting, moralising, or stopping mid-scene.',
        callouts: [
          {
            type: 'tip',
            text: 'Uncensored does not mean ungovernable. Uncensored models still follow prompt structure, respect word ceilings, maintain character voice, and respond to revision instructions. The difference is that they do not add unsolicited content warnings, refuse morally dark directions, or break character to note that a scene depicts harm. Use structured prompts from the fiction-writing templates as you would with any other model.',
          },
        ],
        items: [
          '**What is removed:** refusal behaviours for specific content categories (explicit sexual content, graphic violence, dark psychological content).',
          '**What is retained:** instruction following, character consistency, prompt structure adherence, language quality.',
          '**Degrees of uncensoring:** Hermes 3 is selectively uncensored (mature content yes, but retains some guardrails for extreme content). Dolphin series is more broadly uncensored. Fully abliterated models (Wizard-Uncensored, Erebus) have the most aggressive removal of guardrails — and the weakest instruction following for complex fiction tasks.',
          '**Base model quality matters:** uncensoring degrades instruction quality if the base model is weak. Hermes 3 on Llama 3.3 70B retains Llama 3.3\'s strong instruction following; Dolphin 3.0 on Mistral 7B is limited by the smaller base.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Uncensored local LLM fine-tunes remove RLHF safety-refusal layers while retaining instruction-following capability — they follow dark creative directions without redirecting, moralising, or stopping mid-scene.',
          },
          {
            type: 'plain-terms',
            text: 'A standard model like Llama 3.3 70B will stop mid-way through a scene depicting torture, a morally complex villain monologue, or explicit romantic content and either refuse or soften the output. Hermes 3 (the uncensored version on the same base) will follow your prompt through the same scene at the same quality level without interruption. The prose quality is equivalent; the difference is the refusal layer.',
          },
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: 'When Uncensored Models Are Appropriate for Fiction',
        content:
          '**Uncensored models are appropriate when your fiction genuinely needs content that cloud services refuse, and your audience is adult, and the purpose is creative expression.** Most fiction writers reach for uncensored models for one or more of these specific use cases.',
        items: [
          '**Villain psychology and monologues:** morally coherent villain characters who are not interrupted by the model breaking character to add disclaimers mid-monologue.',
          '**Mature romantic and sexual content:** explicit scenes between adult fictional characters in romance, erotica, or literary fiction that require sexual content the cloud services block.',
          '**Graphic violence in genre fiction:** war novels, crime thrillers, horror — scenes where violence is load-bearing for the emotional impact and softening it kills the scene.',
          '**Trauma and psychological darkness:** survivor narratives, addiction fiction, abuse storylines — content that requires unvarnished depiction to have authentic weight.',
          '**Morally unreliable narrators:** narrators who are wrong, who rationalise harm, who are cruel or bigoted within the fiction — characters who require the model to voice views it would normally refuse.',
          '**Dark roleplay and collaborative fiction:** long-running scenarios involving conflict, moral complexity, and mature themes where a standard model breaks the fiction to insert refusals.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Before switching to an uncensored model, test your prompt on a standard instruction-tuned model first. Llama 3.3 70B and Qwen3 32B with a well-structured system prompt and scene constraints generate most mature literary content without refusals. Uncensored fine-tunes add the most value for explicit sexual content and the most extreme depictions of violence — not for psychological darkness, moral complexity, or dark themes generally.',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: 'When Uncensored Models Are Not Appropriate',
        content:
          '**The absence of cloud enforcement does not mean the absence of legal and ethical obligations.** These categories represent hard limits that apply regardless of model, platform, or whether your machine is air-gapped.',
        callouts: [
          {
            type: 'warning',
            text: 'Hard limits regardless of setup. No local configuration removes legal or ethical responsibility for: (1) sexual content involving minors — absolute prohibition under law in virtually every jurisdiction; (2) non-consensual sexual depictions of identifiable real people — this constitutes NCII (non-consensual intimate imagery) regardless of generation method; (3) content designed to facilitate real-world violence against specific targets. These limits apply whether your model runs locally, in a cloud, or on an air-gapped machine.',
          },
        ],
        items: [
          '**Sexual content involving minors:** absolute legal prohibition in all major jurisdictions regardless of fictional framing or generation method. This is not a model policy — it is law.',
          '**Non-consensual sexual depictions of real people:** NCII laws apply to AI-generated content of identifiable real people in a growing number of jurisdictions. "Generated by AI" is not a defence.',
          '**Content designed to facilitate real harm:** using a fiction framing to extract information or content that directly enables real-world violence or harm removes the fiction protection.',
          '**Public distribution without authorial accountability:** content you publish, distribute, or share carries authorial responsibility. "An AI wrote it" does not transfer that responsibility.',
          '**Harassment fiction:** generating fiction whose purpose is to harm, intimidate, or harass a specific real person — regardless of whether it is framed as fiction.',
        ],
      },
      models: {
        id: 'models',
        title: 'Model Comparison: Uncensored Options for Fiction',
        content:
          '**Not all uncensored models are equal — the degree of RLHF removal and the quality of the base model both matter for fiction-writing use cases.**',
        columns: ['Model', 'Base', 'VRAM (Q4)', 'Uncensored Range', 'Instruction Quality', 'Best For'],
        rows: [
          { 'Model': 'Hermes 3 Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Uncensored Range': 'Selective (mature content; some extreme guardrails retained)', 'Instruction Quality': '★★★★★', 'Best For': 'Default pick for serious fiction — best instruction following + uncensored capability' },
          { 'Model': 'Dolphin 3.0 Mistral 24B', 'Base': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', 'Uncensored Range': 'Broad (most categories)', 'Instruction Quality': '★★★★☆', 'Best For': '16–24 GB systems; mature content across a wider range' },
          { 'Model': 'Dolphin 3.0 Mistral 7B', 'Base': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', 'Uncensored Range': 'Broad', 'Instruction Quality': '★★★☆☆', 'Best For': 'Low-VRAM systems; short-form drafts, prompt testing' },
          { 'Model': 'Hermes 3 Llama 3.2 8B', 'Base': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', 'Uncensored Range': 'Selective', 'Instruction Quality': '★★★☆☆', 'Best For': 'Resource-constrained; dialogue and shorter scenes' },
          { 'Model': 'Standard Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Uncensored Range': 'Limited (mature literary content with prompts; no explicit sexual)', 'Instruction Quality': '★★★★★', 'Best For': 'Dark themes, moral complexity, violence — without needing explicit sexual content' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Start with Hermes 3, not the most aggressive uncensored fine-tune. Fully abliterated models (Wizard-Uncensored, Erebus) have the broadest content range but noticeably weaker instruction following in complex fiction tasks — they drift from constraints faster, produce lower-quality prose at longer generation lengths, and maintain character voice less reliably. For fiction that requires both uncensored content and quality prose, Hermes 3 is the better trade-off.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup: Ollama and LM Studio',
        content:
          '**Both Ollama and LM Studio serve uncensored models through an OpenAI-compatible local API — which means SillyTavern, Agnai, and any other tool that speaks to a local endpoint work without additional configuration.**',
        promptExamples: [
          {
            label: 'Ollama: Pull and Run Hermes 3',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama: Pull and Run Dolphin 3.0 Mistral 24B',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**Ollama installation:** `brew install ollama` (macOS) or download from ollama.com (Windows/Linux). The `ollama serve` command starts the OpenAI-compatible API at `http://localhost:11434`.',
          '**LM Studio installation:** download from lmstudio.ai. Import GGUF model files directly; the local server tab exposes an OpenAI-compatible endpoint at `http://localhost:1234`.',
          '**SillyTavern connection:** in the API settings, select "OpenAI-compatible" and point the base URL to `http://localhost:11434/v1` (Ollama) or `http://localhost:1234/v1` (LM Studio). Enter any string as the API key (required by the field but not validated locally).',
          '**Agnai connection:** same OpenAI-compatible endpoint; enter the local URL in the adapter settings. Works identically to the SillyTavern setup.',
          '**Model switching:** switch between standard and uncensored models in Ollama with `ollama run [model-name]` — multiple models can be loaded simultaneously, and you can switch per session without restarting the server.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For writers who want to keep uncensored and standard models separate, create two Ollama instances on different ports using the OLLAMA_HOST environment variable. Example: OLLAMA_HOST=127.0.0.1:11435 ollama serve. This lets you point SillyTavern or Agnai at the uncensored instance while keeping your standard Ollama instance for other tasks.',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: 'Ethical Responsibilities That Remain',
        content:
          '**Running a model locally with no cloud policy enforcement does not remove your responsibilities as a writer and publisher.** The ethical framework that applies to human-authored fiction applies equally to AI-assisted fiction.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local setup removes cloud ToS restrictions but does not remove authorial legal responsibility, harm-facilitation liability, or the ethical obligations that apply to any published creative work.',
          },
          {
            type: 'plain-terms',
            text: 'Think of the local uncensored model as a very capable writing assistant who will follow any direction you give. The legal and ethical weight of what you produce and distribute sits with you, not the tool. The same laws that apply to human-written fiction — around minors, real people, obscenity, and incitement — apply to AI-generated fiction distributed publicly. The fact that no platform bans you from generating the content locally does not change what you are legally responsible for if you publish it.',
          },
        ],
        items: [
          '**Authorial responsibility:** you are the author of AI-assisted fiction. "The AI generated it" does not transfer copyright, remove liability, or constitute a defence for content that violates law.',
          '**Jurisdiction awareness:** obscenity, NCII, and harmful content laws vary by jurisdiction. Content legal to produce in one country may constitute a criminal offence to distribute in another.',
          '**Real people:** generating negative fictional content about identifiable real individuals — even in clearly fictional frames — carries defamation and NCII risk depending on the content.',
          '**Age verification for distribution:** if you distribute mature or adult content produced with uncensored models on a public platform, age-verification obligations that apply to any adult content publisher apply to you.',
          '**Responsible archiving:** locally-generated uncensored content should be treated with the same storage discipline as any other sensitive material — not stored in cloud-synced directories, not shared unintentionally.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The most common ethical mistake among writers using uncensored models is treating local generation as a context-free zone. Local generation means no platform policy enforcement — it does not mean no law, no responsibility, and no harm. The absence of a content moderator is not a permission grant.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Practical Workflow for Fiction Writers',
        content:
          '**Most fiction writers using uncensored models use them for specific scenes rather than as a default replacement for their standard model.** The workflow below supports this targeted use.',
        items: [
          '**Draft standard scenes with a standard model.** Llama 3.3 70B or Qwen3 32B handle the bulk of literary prose including dark themes, moral complexity, and psychological depth. Reserve the uncensored model for scenes that specifically require content the standard model refuses.',
          '**Switch to uncensored for targeted scenes.** In Ollama, run `ollama run nous-hermes3:70b-llama3.3-q4_K_M` for the specific scene. In SillyTavern, change the model in the API settings per session. No data crosses between sessions.',
          '**Use the same prompt templates.** The 5-part scene template, subtext dialogue structure, and character contradiction prompts from [Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers) work identically on uncensored models. You do not need different prompt structures.',
          '**Do not add content-generation instructions that would not appear in a human-authored brief.** The model is a tool, not a permission structure. If you would not include an instruction in a brief to a human illustrator or ghostwriter for legal reasons, do not include it in the model prompt.',
          '**Review output before distributing.** Uncensored models occasionally produce content that exceeds the requested darkness or slides into stereotyping. Standard editorial review of AI-assisted content applies.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Keep a "model log" per writing project — a plain-text file that records which model generated which scenes. This is useful for revision (knowing which model produced a scene helps you know where to route revision requests), for attribution transparency if you disclose AI assistance, and for auditing if a scene raises questions later.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Defaulting to the most aggressive uncensored model.** Fully abliterated models (Wizard-Uncensored, Erebus) have the weakest instruction following for complex scenes. Hermes 3 is a better trade-off for fiction quality.',
          '**Using uncensored models for content that standard models would generate.** Moral complexity, dark psychology, violence, and mature themes in literary prose rarely require an uncensored fine-tune. Know exactly what you need before switching.',
          '**Treating local generation as a legal context-free zone.** No cloud policy enforcement does not mean no law. Authorial responsibilities for distribution, real people, and minors apply regardless.',
          '**Not specifying word ceilings.** Uncensored models pad dark content to fill space as readily as any other model. Use the same word-ceiling constraints from the fiction templates.',
          '**Storing output in cloud-synced directories.** Locally-generated mature content synced to iCloud, Google Drive, or OneDrive may violate those platforms\' terms of service. Store locally only.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Hermes 3 model card and fine-tuning methodology — [Nous Research](https://nousresearch.com)',
          'Dolphin 3.0 Mistral technical documentation — [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'RLHF and alignment techniques overview — [Anthropic Research](https://anthropic.com/research)',
          'EU AI Act Article 5 — prohibited AI practices including content involving minors — [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII (Non-Consensual Intimate Imagery) — legal framework overview — [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is it legal to run uncensored local LLMs?',
            a: 'Running an uncensored local LLM is legal in most jurisdictions — there is no law against possessing open-source AI software. What you generate and distribute with it is subject to the same laws as any other authored content: obscenity law, NCII law, defamation law, and laws around content involving minors. Legal to run does not mean legal to publish, share, or distribute without limit.',
          },
          {
            q: 'What is the difference between Hermes 3 and Dolphin 3.0?',
            a: 'Hermes 3 (Nous Research) is selectively uncensored — it reduces refusals for mature content while retaining some guardrails for extreme categories. Instruction following is excellent, close to the base Llama 3.3 70B model. Dolphin 3.0 (Cognitive Computations) is more broadly uncensored across a wider content range, but instruction following is slightly weaker in complex multi-constraint scenes. Hermes 3 is the better default for fiction where prose quality matters; Dolphin 3.0 is the better pick when you need the widest content range on a 16–24 GB system.',
          },
          {
            q: 'Do I need an uncensored model to write dark fiction?',
            a: 'No, for most dark fiction. Standard instruction-tuned models like Llama 3.3 70B and Qwen3 32B generate violence, moral complexity, dark psychology, villain interiority, trauma, and most literary darkness without refusals when prompted correctly. What they reliably refuse is explicit sexual content and a narrower set of extreme scenarios. If your dark fiction does not include explicit sexual content, try a standard model first — you may not need the uncensored version.',
          },
          {
            q: 'Can I use uncensored models in SillyTavern or Agnai?',
            a: 'Yes. Both SillyTavern and Agnai connect to any OpenAI-compatible endpoint — including Ollama running locally on port 11434. Pull the uncensored model in Ollama, start `ollama serve`, and in SillyTavern or Agnai select the OpenAI-compatible API and point it at `http://localhost:11434/v1`. Select your uncensored model from the model list. No additional configuration is required.',
          },
          {
            q: 'Are uncensored models safe to use on a home network?',
            a: 'Yes, when configured to bind to localhost (the default in Ollama and LM Studio). The API is only accessible from your machine. If you expose the port on your home network (e.g., to access from a phone), ensure firewall rules restrict access to trusted devices. Do not expose the Ollama API to the public internet without authentication — the default configuration has no auth.',
          },
          {
            q: 'What happens to the content I generate locally?',
            a: 'Nothing happens to it automatically. Locally-generated content is not sent to any server, logged by any cloud service, or used for model training. It exists only on your device, in your application\'s local storage (chat history files, character cards, etc.). You control what you keep, what you delete, and what you share. This is the primary structural privacy advantage of local uncensored generation over cloud-based alternatives.',
          },
          {
            q: 'Can I mix uncensored and standard models in the same writing project?',
            a: 'Yes, and this is the recommended workflow. Use a standard model (Llama 3.3 70B, Qwen3 32B) for the bulk of the prose — standard models produce high-quality literary prose for most dark content. Switch to Hermes 3 or Dolphin 3.0 for specific scenes that require content the standard model refuses. The same prompt templates work on both; the prose style is consistent enough that mixing per-scene is not detectable in the output.',
          },
          {
            q: 'Does generating content with an uncensored model affect copyright?',
            a: 'No — the copyright situation for AI-generated content is identical regardless of whether the model is censored or uncensored. Copyright law for AI output is unsettled in most jurisdictions as of 2026; the general position is that human-authored elements (prompt design, selection, arrangement, substantial editing) may be protectable while raw AI output is not. Using an uncensored model does not change this analysis.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — model comparison including model picks, sampling settings, and performance for narrative generation.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — prompt templates for scene-writing, dialogue, worldbuilding, and style transfer that work on both standard and uncensored models.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — frontend comparison for character-card roleplay, including setup instructions for Ollama backends.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/power-local-llm/local-llm-screenwriting-and-novel-drafting) — longer-form drafting workflows and chapter management for extended fiction projects.',
          '[Prompt Injection and LLM Security](/prompt-engineering/prompt-injection-and-security) — how adversarial prompts interact with safety layers; useful background for understanding what uncensoring removes.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — local-only AI setup for privacy-sensitive use cases; same privacy principles as local fiction generation.',
        ],
      },
    },
  },
}
