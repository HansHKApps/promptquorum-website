// Power Local LLM — Uncensored Local LLMs for Creative Writing: When Writers Need Them in 2026
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
    title: 'Uncensored Local LLMs for Creative Writing: When Writers Need Them in 2026',
    seoTitle: 'Uncensored Local LLMs for Creative Writing 2026',
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
      { label: 'How We Tested', anchor: '#how-we-tested' },
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
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: 'The slide deck below covers: what "uncensored" fine-tuning actually means (RLHF removal vs. zero constraints); a 5-model comparison table (Hermes 3 Llama 3.3 to Dolphin 3.0 Mistral 7B with VRAM, refusal rate, instruction quality); appropriate vs. inappropriate use cases; Ollama setup commands; ethical responsibilities that remain regardless of local setup; and 5 common mistakes. Download the PDF as an uncensored local LLM creative writing reference card.',
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
            text: 'Uncensored does not mean ungovernable. Uncensored models still follow prompt structure, respect word ceilings, maintain character voice, and respond to revision instructions. The difference is that they do not add unsolicited content warnings, refuse morally dark directions, or break character to note that a scene depicts harm. Use structured prompts from the fiction-writing templates as you would with any other model — the system prompt versus user prompt distinction matters more than the model\'s uncensoring level. See [System Prompt vs User Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) for why.',
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
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested',
        content:
          'Model verdicts in this guide are based on a small qualitative test — a directional indicator, not a peer-reviewed benchmark. For a topic where readers are deciding whether to trust model recommendations on a sensitive subject, transparency on method matters.',
        items: [
          '**Prompt set:** 10 prompts across 5 categories — villain monologue, mature romance scene, graphic violence in war fiction, morally complex narrator, dark psychological scene (2 prompts per category).',
          '**Runs per model:** each prompt run 3 times per model.',
          '**Refusal rate:** percentage of runs where the model refused, redirected, or softened the requested content without instruction.',
          '**Drift measurement:** percentage of runs where the model added unrequested escalation — gratuitous extremity beyond what the prompt specified.',
          '**Backend:** Ollama 0.5+ with Q4_K_M quantization for all models.',
          '**Honesty constraint:** small qualitative test. Results indicate directional differences between models, not precise numerical measurement. Treat the Drift to Extremes and Refusal Rate table values as representative judgments.',
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
        columns: ['Model', 'Base', 'VRAM (Q4)', 'Refusal Rate', 'Instruction Quality', 'Drift to Extremes', 'Best For'],
        rows: [
          { 'Model': 'Hermes 3 Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Refusal Rate': 'Selective', 'Instruction Quality': '★★★★★', 'Drift to Extremes': 'Low', 'Best For': 'Default pick for serious fiction — best instruction following + uncensored capability' },
          { 'Model': 'Dolphin 3.0 Mistral 24B', 'Base': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', 'Refusal Rate': 'Broad', 'Instruction Quality': '★★★★☆', 'Drift to Extremes': 'Low-Moderate', 'Best For': '16–24 GB systems; mature content across a wider range' },
          { 'Model': 'Dolphin 3.0 Mistral 7B', 'Base': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', 'Refusal Rate': 'Broad', 'Instruction Quality': '★★★☆☆', 'Drift to Extremes': 'Moderate', 'Best For': 'Low-VRAM systems; short-form drafts, prompt testing' },
          { 'Model': 'Hermes 3 Llama 3.2 8B', 'Base': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', 'Refusal Rate': 'Selective', 'Instruction Quality': '★★★☆☆', 'Drift to Extremes': 'Low', 'Best For': 'Resource-constrained; dialogue and shorter scenes' },
          { 'Model': 'Standard Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Refusal Rate': 'Limited', 'Instruction Quality': '★★★★★', 'Drift to Extremes': 'None', 'Best For': 'Dark themes, moral complexity, violence — without needing explicit sexual content' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Start with Hermes 3, not the most aggressive uncensored fine-tune. Fully abliterated models (Wizard-Uncensored, Erebus) have the broadest content range but noticeably weaker instruction following in complex fiction tasks — they drift from constraints faster, produce lower-quality prose at longer generation lengths, and maintain character voice less reliably. For fiction that requires both uncensored content and quality prose, Hermes 3 is the better trade-off.',
          },
        ],
        items: [
          'Note: older uncensored fine-tunes — Midnight Miqu (Miqu-70B-based), Wizard-LM Uncensored, Mythomax — were leaders in 2024 but have been superseded by Hermes 3 and Dolphin 3.0 in 2026 on both quality and instruction-following metrics. If you find them recommended in older articles, the current equivalents are Hermes 3 (for selective uncensoring) and Dolphin 3.0 (for broader range).',
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
          {
            q: 'Do uncensored fine-tunes lose general knowledge?',
            a: 'Marginally, in narrow areas. Uncensoring fine-tunes are typically full-precision retraining passes that may slightly drift from the base model on factual recall, math, and coding benchmarks — usually 1–3 percentage points on standard benchmarks. For fiction-writing tasks, this is undetectable in output quality. If you need the same model for fiction and technical work (research notes, code review), keep both standard and uncensored installed and switch per task. Hermes 3 retains general capability better than fully abliterated models.',
          },
          {
            q: 'Are these models monitored or anonymous?',
            a: 'Open-weight models running locally via Ollama or LM Studio have no telemetry, no remote logging, and no usage tracking. The model authors (Nous Research for Hermes 3, Cognitive Computations for Dolphin) cannot see what you generate — there is no server callback during inference. The only telemetry risk is from the frontend (SillyTavern, Agnai — both telemetry-free by default) or the OS. Run a network monitor (Little Snitch on macOS, Wireshark on Linux) once after install to verify.',
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
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — the authority structure that governs model behaviour; the system prompt distinction matters more than model choice for consistent uncensored output.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — local-only AI setup for privacy-sensitive use cases; same privacy principles as local fiction generation.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Uncensored Local LLMs für kreatives Schreiben: Wann Autoren sie brauchen (2026)',
    seoTitle: 'Unzensierte lokale LLMs für kreatives Schreiben 2026',
    intro:
      'Uncensored lokale LLMs ermöglichen Autoren, reife, moralisch komplexe und düstere Inhalte zu generieren, die Cloud-Dienste ablehnen — ohne dass Daten dein Gerät verlassen. Dieser Leitfaden behandelt die geeigneten Modelle, die Einrichtung über Ollama oder LM Studio, die ethischen Verantwortlichkeiten die auch ohne ToS-Durchsetzung gelten, und die spezifischen Anwendungsfälle, für die Uncensored-Modelle geeignet bzw. ungeeignet sind.',
    metaDescription:
      'Uncensored lokale LLMs für kreatives Schreiben: welche Modelle, Ollama-Einrichtung, ethische Pflichten, zulässige Anwendungsfälle und was Autoren trotzdem beachten müssen.',
    twitterDescription:
      'Uncensored lokale LLMs für Belletristik-Autoren — welche Modelle, Ollama-Einrichtung und die echten Ethik-Fragen: Wann sie geeignet sind und welche Verantwortung Autoren trotzdem tragen.',
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
      'Belletristik-Autoren, Romanschriftsteller, Spielenarrative-Designer und kreative Profis, die lokale LLMs benötigen, die reife oder düstere Inhalte ohne Cloud-Ablehnungen generieren, und ihre ethischen Verantwortlichkeiten dabei verstehen wollen.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Uncensored Local LLM kreatives Schreiben',
    targetKeywords: [
      'uncensored local llm kreatives schreiben',
      'uncensored ollama modelle',
      'hermes 3 kreatives schreiben',
      'dolphin mistral uncensored einrichtung',
      'local llm dark fiction deutsch',
      'uncensored ki schreiben ethik',
    ],
    leadAnswerBlock:
      '**Uncensored lokale LLMs sind für Belletristik-Autoren geeignet, die moralisch komplexe Charaktere, dunkle Themen, Gewalt, reife romantische Inhalte oder Stimmen unzuverlässiger Erzähler generieren müssen, die Cloud-Modelle ablehnen. Sie sind nur dann geeignet, wenn die Ausgabe für kreative Belletristik mit erwachsenem Publikum verwendet wird — nicht als Werkzeug zur Produktion realer schädlicher Inhalte, nicht-konsensueller Darstellungen realer Personen oder Inhalte, die Minderjährige in sexuellen Kontexten involvieren. Die Modelle, die den meisten Belletristik-Anwendungsfällen im Jahr 2026 entsprechen, sind Hermes 3 Llama 3.3 (weniger Ablehnungen, starkes Anweisungsfolgen) und Dolphin 3.0 Mistral (breiteres Uncensored-Spektrum, kleinerer Speicherbedarf). Beide laufen vollständig lokal über Ollama oder LM Studio, ohne dass Daten dein Gerät verlassen. Die ethischen Verantwortlichkeiten bei der Nutzung dieser Modelle sind nicht null — Autoren, die mit Uncensored-Modellen arbeiten, haben weiterhin Pflichten bezüglich Verbreitung, Minderjährigen und realen Personen, die kein lokales Setup beseitigt.**',
    quickAnswerTop: {
      de: {
        question: 'Welche Uncensored lokalen LLMs sollten Belletristik-Autoren 2026 verwenden?',
        answer:
          'Hermes 3 Llama 3.3 ist das beste Allround-Uncensored-Modell für Belletristik in 2026 — starkes Anweisungsfolgen, gute Charakterstimmen-Differenzierung, weniger willkürliche Ablehnungen ohne die aggressive Ausgabe, die manche vollständig Uncensored-Fine-Tunes produzieren. Dolphin 3.0 Mistral ist die leichtere Alternative für 16–24-GB-Systeme. Für Autoren, die gelegentlich dunkle Inhalte statt persistenter Uncensored-Ausgabe benötigen, generieren Standard-Instruction-Tuned-Modelle (Llama 3.3 70B, Qwen3 32B) mit gut strukturierten Prompts die meisten reifen literarischen Inhalte ohne Uncensored-Fine-Tune. Die ethische Grundlinie, die unabhängig vom Modell gilt: keine Inhalte, die Minderjährige in sexuellen Kontexten involvieren, keine nicht-konsensuellen Darstellungen identifizierbarer realer Personen, und sorgfältige Überlegung vor der öffentlichen Verbreitung.',
        bullets: [
          'Hermes 3 Llama 3.3 — bestes Allround-Uncensored-Belletristik-Modell; starkes Anweisungsfolgen, weniger willkürliche Ablehnungen.',
          'Dolphin 3.0 Mistral — leichtere Option für 16–24-GB-Systeme; breiteres Uncensored-Spektrum als Hermes 3.',
          'Standard Llama 3.3 70B und Qwen3 32B generieren die meisten reifen literarischen Inhalte mit strukturierten Prompts — für viele Anwendungsfälle ist kein Uncensored-Fine-Tune erforderlich.',
          'Alle Uncensored-Modelle laufen vollständig lokal über Ollama oder LM Studio — keine Daten verlassen dein Gerät.',
          'Ethische Grundlinie gilt unabhängig vom Modell: keine Minderjährigen, keine nicht-konsensuellen Darstellungen realer Personen.',
          'Verantwortung bei der Verbreitung: was du mit der Ausgabe machst, hat dasselbe rechtliche Gewicht wie jeder andere verfasste Inhalt.',
          'Für Roleplay-Frontends können SillyTavern und Agnai beide sauber mit Uncensored-Ollama-Modellen kombiniert werden.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Was „Uncensored" wirklich bedeutet', anchor: '#what-uncensored-means' },
      { label: 'Wie wir getestet haben', anchor: '#how-we-tested' },
      { label: 'Wann Uncensored-Modelle für Belletristik geeignet sind', anchor: '#appropriate-use' },
      { label: 'Wann sie es nicht sind', anchor: '#inappropriate-use' },
      { label: 'Modellvergleich', anchor: '#models' },
      { label: 'Einrichtung: Ollama und LM Studio', anchor: '#setup' },
      { label: 'Bleibende ethische Verantwortung', anchor: '#ethics' },
      { label: 'Praktischer Workflow', anchor: '#workflow' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: 'Die Präsentation zeigt: was „Uncensored"-Fine-Tuning wirklich bedeutet (RLHF-Entfernung vs. null Einschränkungen); eine 5-Modell-Vergleichstabelle (Hermes 3 Llama 3.3 bis Dolphin 3.0 Mistral 7B mit VRAM, Ablehnungsrate, Anweisungsqualität); geeignete und ungeeignete Anwendungsfälle; Ollama-Einrichtungsbefehle; bleibende ethische Verantwortlichkeiten; und 5 häufige Fehler. Als PDF-Referenzkarte für Uncensored-LLM-Kreativschreiben herunterladen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**„Uncensored" bedeutet, das Modell hat reduziertes RLHF-Sicherheits-Fine-Tuning — nicht dass es gar keine Einschränkungen hat.** Uncensored-Fine-Tunes folgen weiterhin dem Anweisungsformat, halten die Charakterkonsistenz aufrecht und können mit Prompts gesteuert werden. Es sind keine „Alles erlaubt"-Systeme.',
          '**Hermes 3 Llama 3.3 ist die beste Allroundwahl für Belletristik-Autoren in 2026.** Weniger willkürliche Ablehnungen, starkes Anweisungsfolgen, gute Charakterstimmen-Differenzierung. Die richtige Wahl für Autoren, die die Fähigkeit ohne die aggressive Ausgabe einiger vollständig Uncensored-Modelle wollen.',
          '**Standard-Instruction-Tuned-Modelle verarbeiten die meisten reifen literarischen Inhalte mit guten Prompts.** Gewalt, moralische Komplexität, dunkle Psychologie und reife Themen in literarischer Prosa erfordern selten ein Uncensored-Fine-Tune. Was sie ablehnen, sind explizite sexuelle Inhalte und detaillierte Beschreibungen realer Schäden. Wisse, welche Kategorie dein Werk fällt, bevor du das Modell wechselst.',
          '**Lokal laufen bedeutet keine Daten verlassen dein Gerät.** Keine Cloud-AGB gelten. Keine Inhalte werden protokolliert, analysiert oder für Training verwendet. Das ist der Hauptstrukturgrund, warum Autoren lokale Uncensored-Modelle verwenden — Datenschutz plus keine Nutzungsbeschränkungen bei Belletristik.',
          '**Ethische Verantwortlichkeiten verschwinden nicht, weil es keine ToS-Durchsetzung gibt.** Autoren, die mit Uncensored-Modellen produzierte Belletristik verbreiten, tragen dieselben rechtlichen Verantwortlichkeiten wie jeder andere Autor: Minderjährige, reale Personen, Aufstachelung und jurisdiktionsspezifische Gesetze gelten unabhängig von der Generierungsmethode.',
          '**Dolphin 3.0 Mistral ist die leichtere Option für 16–24-GB-Rigs.** Breiteres Uncensored-Ausgabespektrum als Hermes 3, aber schwächeres Anweisungsfolgen bei komplexen Szenen. Geeignet für Kurzform-Belletristik, Prompt-Erkundung und Stil-Tests.',
          '**SillyTavern und Agnai können beide sauber mit Uncensored-Ollama-Modellen kombiniert werden.** Zeige eines der Frontends auf den Ollama-OpenAI-kompatiblen Endpoint und wähle das Uncensored-Modell. Keine zusätzliche Konfiguration erforderlich.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Getestete Uncensored-Modelle:** Hermes 3 Llama 3.3 (primär), Dolphin 3.0 Mistral (sekundär).',
          '**Backends:** Ollama (primär), LM Studio (Alternative für GUI-Einrichtung).',
          '**Hardware:** Hermes 3 70B bei Q4 benötigt ~42 GB; Dolphin 3.0 7B läuft auf 8 GB; Dolphin 3.0 24B läuft auf ~16 GB.',
          '**Frontends:** SillyTavern, Agnai, RisuAI können alle mit Uncensored-Ollama-Modellen über einen OpenAI-kompatiblen Endpoint kombiniert werden.',
          '**Datenschutz:** vollständig lokal — keine Cloud-API-Aufrufe, kein Logging, keine Trainingsdatenerfassung.',
          '**Harte ethische Grenzen:** keine sexuellen Inhalte mit Minderjährigen (absolut), keine nicht-konsensuellen sexuellen Darstellungen identifizierbarer realer Personen, keine Inhalte zur Erleichterung realer Gewalt.',
          '**Verbreitung:** Inhalte, die du veröffentlichst, tragen autorschaftliche Verantwortung unabhängig von der Generierungsmethode.',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: 'Was „Uncensored" wirklich bedeutet',
        content:
          '**„Uncensored" im Kontext von lokalen LLM-Fine-Tunes bedeutet reduziertes RLHF-Sicherheitstraining (Reinforcement Learning from Human Feedback) — nicht die Entfernung aller Modellbeschränkungen.** Standard-Instruction-Tuned-Modelle werden mit RLHF-Schichten trainiert, die sie dazu bringen, bestimmte Inhaltskategorien abzulehnen: explizite sexuelle Inhalte, detaillierte Gewalt, dunkle Psychologie, die einer echten Schadensvorlage ähnelt. Uncensored-Fine-Tunes (Hermes 3, Dolphin, Wizard, Erebus) entfernen oder reduzieren diese RLHF-Schichten aus dem Basismodell, behalten die Anweisungsfolge-Fähigkeit bei, entfernen aber die Ablehnungsverhalten. Das Ergebnis ist ein Modell, das deinen Belletristik-Prompts durch dunkle Inhalte folgt, ohne umzuleiten, zu moralisieren oder mittendrin zu stoppen.',
        callouts: [
          {
            type: 'tip',
            text: 'Uncensored bedeutet nicht unsteuerbar. Uncensored-Modelle folgen weiterhin der Prompt-Struktur, respektieren Wortgrenzen, halten die Charakterstimme aufrecht und reagieren auf Überarbeitungsanweisungen. Der Unterschied ist, dass sie keine unaufgeforderten Inhaltshinweise hinzufügen, moralisch dunkle Richtungen ablehnen oder mittendrin aus der Rolle fallen, um darauf hinzuweisen, dass eine Szene Schaden darstellt. Verwende strukturierte Prompts aus den Belletristik-Schreib-Vorlagen wie bei jedem anderen Modell — der System-Prompt-zu-User-Prompt-Unterschied ist wichtiger als das Uncensored-Level des Modells.',
          },
        ],
        items: [
          '**Was entfernt wird:** Ablehnungsverhalten für bestimmte Inhaltskategorien (explizite sexuelle Inhalte, grafische Gewalt, dunkle psychologische Inhalte).',
          '**Was erhalten bleibt:** Anweisungsfolgen, Charakterkonsistenz, Prompt-Struktur-Einhaltung, Sprachqualität.',
          '**Grade des Uncensoring:** Hermes 3 ist selektiv Uncensored (reife Inhalte ja, aber behält einige Leitplanken für extreme Inhalte). Dolphin-Serie ist breiter Uncensored. Vollständig abliterierte Modelle (Wizard-Uncensored, Erebus) haben die aggressivste Entfernung von Leitplanken — und das schwächste Anweisungsfolgen für komplexe Belletristik-Aufgaben.',
          '**Basismodell-Qualität zählt:** Uncensoring verschlechtert die Anweisungsqualität, wenn das Basismodell schwach ist. Hermes 3 auf Llama 3.3 70B behält Llama 3.3\'s starkes Anweisungsfolgen; Dolphin 3.0 auf Mistral 7B ist durch die kleinere Basis begrenzt.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Uncensored lokale LLM-Fine-Tunes entfernen RLHF-Sicherheitsablehnungs-Schichten und behalten dabei die Anweisungsfolge-Fähigkeit — sie folgen dunklen kreativen Richtungen, ohne umzuleiten, zu moralisieren oder mittendrin zu stoppen.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Standardmodell wie Llama 3.3 70B stoppt mitten in einer Szene, die Folter, einen moralisch komplexen Schurken-Monolog oder explizite romantische Inhalte darstellt, und lehnt entweder ab oder weicht der Ausgabe aus. Hermes 3 (die Uncensored-Version auf derselben Basis) folgt deinem Prompt durch dieselbe Szene auf demselben Qualitätsniveau ohne Unterbrechung. Die Prosaqualität ist gleichwertig; der Unterschied ist die Ablehnungsschicht.',
          },
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Wie wir getestet haben',
        content:
          'Die Modellbewertungen in diesem Leitfaden basieren auf einem kleinen qualitativen Test — ein Richtungsindikator, kein Peer-Review-Benchmark. Für ein Thema, bei dem Leser entscheiden, ob sie Modellempfehlungen zu einem sensiblen Thema vertrauen sollen, ist Transparenz zur Methode wichtig.',
        items: [
          '**Prompt-Set:** 10 Prompts in 5 Kategorien — Schurken-Monolog, reife Romanzen-Szene, grafische Gewalt in Kriegsbelletristik, moralisch komplexer Erzähler, dunkle psychologische Szene (2 Prompts pro Kategorie).',
          '**Durchläufe pro Modell:** jeder Prompt 3 Mal pro Modell ausgeführt.',
          '**Ablehnungsrate:** Prozentsatz der Durchläufe, bei denen das Modell den angeforderten Inhalt abgelehnt, umgeleitet oder unaufgefordert gemildert hat.',
          '**Drift-Messung:** Prozentsatz der Durchläufe, bei denen das Modell unaufgeforderte Eskalation hinzufügte — grundlose Extreme jenseits des Prompt-Spezifischen.',
          '**Backend:** Ollama 0.5+ mit Q4_K_M-Quantisierung für alle Modelle.',
          '**Ehrlichkeitseinschränkung:** kleiner qualitativer Test. Ergebnisse zeigen Richtungsunterschiede zwischen Modellen, keine präzisen numerischen Messungen. Behandle die Werte in der Drift-zu-Extremen- und Ablehnungsrate-Tabelle als repräsentative Urteile.',
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: 'Wann Uncensored-Modelle für Belletristik geeignet sind',
        content:
          '**Uncensored-Modelle sind geeignet, wenn deine Belletristik wirklich Inhalte benötigt, die Cloud-Dienste ablehnen, dein Publikum erwachsen ist und der Zweck kreative Expression ist.** Die meisten Belletristik-Autoren greifen auf Uncensored-Modelle für einen oder mehrere dieser spezifischen Anwendungsfälle zurück.',
        items: [
          '**Schurken-Psychologie und Monologe:** moralisch kohärente Schurken-Charaktere, die nicht durch das Modell unterbrochen werden, das mittendrin aus der Rolle fällt, um Haftungsausschlüsse hinzuzufügen.',
          '**Reife romantische und sexuelle Inhalte:** explizite Szenen zwischen erwachsenen fiktiven Charakteren in Romantik, Erotik oder Literaturbelletristik, die sexuelle Inhalte erfordern, die Cloud-Dienste blockieren.',
          '**Grafische Gewalt in Genre-Belletristik:** Kriegsromane, Krimis, Horror — Szenen, in denen Gewalt für den emotionalen Eindruck traglasttragend ist und ihre Abschwächung die Szene zerstört.',
          '**Trauma und psychologische Dunkelheit:** Überlebenden-Narrative, Sucht-Belletristik, Missbrauchs-Storylines — Inhalte, die eine ungeschönte Darstellung erfordern, um authentisches Gewicht zu haben.',
          '**Moralisch unzuverlässige Erzähler:** Erzähler, die falsch liegen, Schaden rationalisieren, innerhalb der Belletristik grausam oder voreingenommen sind — Charaktere, die erfordern, dass das Modell Ansichten äußert, die es normalerweise ablehnen würde.',
          '**Dunkles Roleplay und kollaborative Belletristik:** lang laufende Szenarien mit Konflikten, moralischer Komplexität und reifen Themen, bei denen ein Standardmodell die Fiktion bricht, um Ablehnungen einzufügen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Bevor du zu einem Uncensored-Modell wechselst, teste deinen Prompt zunächst auf einem Standard-Instruction-Tuned-Modell. Llama 3.3 70B und Qwen3 32B mit einem gut strukturierten System-Prompt und Szenen-Einschränkungen generieren die meisten reifen literarischen Inhalte ohne Ablehnungen. Uncensored-Fine-Tunes bieten den größten Mehrwert für explizite sexuelle Inhalte und die extremsten Darstellungen von Gewalt — nicht für psychologische Dunkelheit, moralische Komplexität oder dunkle Themen im Allgemeinen.',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: 'Wann sie nicht geeignet sind',
        content:
          '**Das Fehlen von Cloud-Durchsetzung bedeutet nicht das Fehlen rechtlicher und ethischer Verpflichtungen.** Diese Kategorien stellen harte Grenzen dar, die unabhängig von Modell, Plattform oder ob dein Gerät luftabgeschirmt ist, gelten.',
        callouts: [
          {
            type: 'warning',
            text: 'Harte Grenzen unabhängig vom Setup. Keine lokale Konfiguration beseitigt rechtliche oder ethische Verantwortung für: (1) sexuelle Inhalte mit Minderjährigen — absolutes gesetzliches Verbot nach §184b StGB in praktisch jeder Rechtsordnung; (2) nicht-konsensuelle sexuelle Darstellungen identifizierbarer realer Personen — dies stellt NCII dar unabhängig von der Generierungsmethode; (3) Inhalte, die zur Erleichterung realer Gewalt gegen spezifische Ziele konzipiert sind. Diese Grenzen gelten, ob dein Modell lokal, in einer Cloud oder auf einem luftabgeschirmten Gerät läuft.',
          },
        ],
        items: [
          '**Sexuelle Inhalte mit Minderjährigen:** absolutes gesetzliches Verbot in allen wichtigen Rechtsordnungen, unabhängig von fiktionaler Rahmung oder Generierungsmethode. In Deutschland strafbar nach §184b StGB — dies ist kein Modell-Policy, sondern Gesetz.',
          '**Nicht-konsensuelle sexuelle Darstellungen realer Personen:** NCII-Gesetze gelten für KI-generierte Inhalte identifizierbarer realer Personen in einer wachsenden Zahl von Rechtsordnungen. „Von KI generiert" ist keine Verteidigung.',
          '**Inhalte zur Erleichterung realen Schadens:** die Nutzung einer Belletristik-Rahmung zur Extraktion von Informationen oder Inhalten, die reale Gewalt oder Schaden direkt ermöglichen, beseitigt den Belletristik-Schutz.',
          '**Öffentliche Verbreitung ohne autorschaftliche Verantwortung:** Inhalte, die du veröffentlichst, verbreitest oder teilst, tragen autorschaftliche Verantwortung. „Eine KI hat es geschrieben" überträgt diese Verantwortung nicht.',
          '**Belästigungs-Belletristik:** Generierung von Belletristik, deren Zweck es ist, eine bestimmte reale Person zu schädigen, einzuschüchtern oder zu belästigen — unabhängig davon, ob sie als Belletristik gerahmt ist. In Deutschland kann dies als Volksverhetzung (§130 StGB) oder Beleidigung (§185 StGB) strafbar sein.',
        ],
      },
      models: {
        id: 'models',
        title: 'Modellvergleich: Uncensored-Optionen für Belletristik',
        content:
          '**Nicht alle Uncensored-Modelle sind gleich — der Grad der RLHF-Entfernung und die Qualität des Basismodells sind beide relevant für Belletristik-Anwendungsfälle.**',
        columns: ['Modell', 'Basis', 'VRAM (Q4)', 'Ablehnungsrate', 'Anweisungsqualität', 'Tendenz zu Extremen', 'Bestes Einsatzgebiet'],
        rows: [
          { 'Modell': 'Hermes 3 Llama 3.3 70B', 'Basis': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Ablehnungsrate': 'Selektiv', 'Anweisungsqualität': '★★★★★', 'Tendenz zu Extremen': 'Gering', 'Bestes Einsatzgebiet': 'Standardwahl für ernsthafte Belletristik — bestes Anweisungsfolgen + Uncensored-Fähigkeit' },
          { 'Modell': 'Dolphin 3.0 Mistral 24B', 'Basis': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', 'Ablehnungsrate': 'Breit', 'Anweisungsqualität': '★★★★☆', 'Tendenz zu Extremen': 'Gering-Mittel', 'Bestes Einsatzgebiet': '16–24-GB-Systeme; reife Inhalte über eine breitere Spanne' },
          { 'Modell': 'Dolphin 3.0 Mistral 7B', 'Basis': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', 'Ablehnungsrate': 'Breit', 'Anweisungsqualität': '★★★☆☆', 'Tendenz zu Extremen': 'Mittel', 'Bestes Einsatzgebiet': 'VRAM-arme Systeme; Kurzentwürfe, Prompt-Tests' },
          { 'Modell': 'Hermes 3 Llama 3.2 8B', 'Basis': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', 'Ablehnungsrate': 'Selektiv', 'Anweisungsqualität': '★★★☆☆', 'Tendenz zu Extremen': 'Gering', 'Bestes Einsatzgebiet': 'Ressourcenbegrenzte Systeme; Dialog und kürzere Szenen' },
          { 'Modell': 'Standard Llama 3.3 70B', 'Basis': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Ablehnungsrate': 'Begrenzt', 'Anweisungsqualität': '★★★★★', 'Tendenz zu Extremen': 'Keine', 'Bestes Einsatzgebiet': 'Dunkle Themen, moralische Komplexität, Gewalt — ohne explizit sexuellen Inhalt' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Beginne mit Hermes 3, nicht dem aggressivsten Uncensored-Fine-Tune. Vollständig abliterierte Modelle (Wizard-Uncensored, Erebus) haben die breiteste Inhaltspalette, aber merklich schwächeres Anweisungsfolgen bei komplexen Belletristik-Aufgaben — sie weichen schneller von Einschränkungen ab, produzieren bei längerer Generierungsdauer Prosa mit niedrigerer Qualität und halten die Charakterstimme weniger zuverlässig. Für Belletristik, die sowohl Uncensored-Inhalte als auch Qualitätsprosa erfordert, ist Hermes 3 der bessere Kompromiss.',
          },
        ],
        items: [
          'Hinweis: ältere Uncensored-Fine-Tunes — Midnight Miqu (Miqu-70B-basiert), Wizard-LM Uncensored, Mythomax — waren 2024 führend, wurden aber 2026 von Hermes 3 und Dolphin 3.0 in Qualitäts- und Anweisungsfolge-Metriken übertroffen. Falls du sie in älteren Artikeln empfohlen findest, sind die aktuellen Äquivalente Hermes 3 (für selektives Uncensoring) und Dolphin 3.0 (für breiteres Spektrum).',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Einrichtung: Ollama und LM Studio',
        content:
          '**Sowohl Ollama als auch LM Studio bedienen Uncensored-Modelle über eine OpenAI-kompatible lokale API — was bedeutet, dass SillyTavern, Agnai und jedes andere Tool, das mit einem lokalen Endpoint spricht, ohne zusätzliche Konfiguration funktioniert.**',
        promptExamples: [
          {
            label: 'Ollama: Hermes 3 laden und starten',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama: Dolphin 3.0 Mistral 24B laden und starten',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**Ollama-Installation:** `brew install ollama` (macOS) oder Download von ollama.com (Windows/Linux). Der Befehl `ollama serve` startet die OpenAI-kompatible API unter `http://localhost:11434`.',
          '**LM Studio-Installation:** Download von lmstudio.ai. GGUF-Modelldateien direkt importieren; der lokale Server-Tab stellt einen OpenAI-kompatiblen Endpoint unter `http://localhost:1234` bereit.',
          '**SillyTavern-Verbindung:** in den API-Einstellungen „OpenAI-kompatibel" auswählen und die Basis-URL auf `http://localhost:11434/v1` (Ollama) oder `http://localhost:1234/v1` (LM Studio) zeigen. Einen beliebigen String als API-Schlüssel eingeben (vom Feld benötigt, wird aber lokal nicht validiert).',
          '**Agnai-Verbindung:** derselbe OpenAI-kompatible Endpoint; lokale URL in den Adapter-Einstellungen eingeben. Funktioniert identisch zur SillyTavern-Einrichtung.',
          '**Modellwechsel:** in Ollama zwischen Standard- und Uncensored-Modellen mit `ollama run [modell-name]` wechseln — mehrere Modelle können gleichzeitig geladen werden, und du kannst pro Session wechseln, ohne den Server neu zu starten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Autoren, die Uncensored- und Standard-Modelle separat halten möchten, erstelle zwei Ollama-Instanzen auf verschiedenen Ports mit der OLLAMA_HOST-Umgebungsvariable. Beispiel: OLLAMA_HOST=127.0.0.1:11435 ollama serve. Damit kannst du SillyTavern oder Agnai auf die Uncensored-Instanz zeigen, während deine Standard-Ollama-Instanz für andere Aufgaben bestehen bleibt.',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: 'Bleibende ethische Verantwortung',
        content:
          '**Ein Modell lokal ohne Cloud-Policy-Durchsetzung zu betreiben, beseitigt nicht deine Verantwortlichkeiten als Autor und Verleger.** Der ethische Rahmen, der für menschlich verfasste Belletristik gilt, gilt gleichermaßen für KI-unterstützte Belletristik.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Lokales Setup beseitigt Cloud-ToS-Einschränkungen, aber nicht die rechtliche Autorenverantwortung, die Haftung für die Ermöglichung von Schaden oder die ethischen Verpflichtungen, die für jedes veröffentlichte kreative Werk gelten.',
          },
          {
            type: 'plain-terms',
            text: 'Denke an das lokale Uncensored-Modell als einen sehr fähigen Schreib-Assistenten, der jede Anweisung befolgt, die du gibst. Das rechtliche und ethische Gewicht dessen, was du produzierst und verbreitest, liegt bei dir, nicht beim Werkzeug. Dieselben Gesetze, die für menschlich verfasste Belletristik gelten — bezüglich Minderjähriger, realer Personen, Obszönität und Aufstachelung — gelten für öffentlich verbreitete KI-generierte Belletristik. Die Tatsache, dass keine Plattform dich daran hindert, den Inhalt lokal zu generieren, ändert nichts an deiner rechtlichen Verantwortung, wenn du ihn veröffentlichst.',
          },
        ],
        items: [
          '**Autorenverantwortung:** du bist der Autor KI-unterstützter Belletristik. „Die KI hat es generiert" überträgt nicht das Urheberrecht, beseitigt nicht die Haftung oder stellt keine Verteidigung für Inhalte dar, die gegen Gesetze verstoßen.',
          '**Jurisdiktionsbewusstsein:** Obszönität, NCII und schädliche Inhaltsgesetze variieren je nach Jurisdiktion. In Deutschland sind relevante Gesetze §130 StGB (Volksverhetzung), §184b StGB (Kinderpornografie) und §3 KUG (Recht am eigenen Bild). Inhalte, die in einem Land legal zu produzieren sind, können in einem anderen strafrechtlich relevant sein.',
          '**Reale Personen:** das Generieren negativer fiktiver Inhalte über identifizierbare reale Personen — auch in klar fiktionalen Rahmen — birgt Verleumdungs- und NCII-Risiken je nach Inhalt.',
          '**Altersverifizierung für Verbreitung:** wenn du reife oder erwachsene Inhalte, die mit Uncensored-Modellen produziert wurden, auf einer öffentlichen Plattform verbreitest, gelten Altersverifizierungspflichten, die für jeden Erwachsenen-Inhalte-Verleger gelten, auch für dich.',
          '**Verantwortungsvolles Archivieren:** lokal generierte Uncensored-Inhalte sollten mit derselben Speicherdisziplin wie jedes andere sensible Material behandelt werden — nicht in cloud-synchronisierten Verzeichnissen gespeichert, nicht unbeabsichtigt geteilt.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Der häufigste ethische Fehler bei Autoren, die Uncensored-Modelle verwenden, ist die lokale Generierung als kontextfreie Zone zu behandeln. Lokale Generierung bedeutet keine Plattform-Policy-Durchsetzung — es bedeutet nicht kein Gesetz, keine Verantwortung und keinen Schaden. Das Fehlen eines Inhaltsmoderatorors ist keine Genehmigung.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Praktischer Workflow für Belletristik-Autoren',
        content:
          '**Die meisten Belletristik-Autoren, die Uncensored-Modelle verwenden, setzen sie für spezifische Szenen ein, nicht als Standard-Ersatz für ihr Standardmodell.** Der folgende Workflow unterstützt diese gezielte Verwendung.',
        items: [
          '**Standardszenen mit einem Standardmodell entwerfen.** Llama 3.3 70B oder Qwen3 32B verarbeiten den Großteil der literarischen Prosa einschließlich dunkler Themen, moralischer Komplexität und psychologischer Tiefe. Das Uncensored-Modell für Szenen reservieren, die speziell Inhalte erfordern, die das Standardmodell ablehnt.',
          '**Für gezielte Szenen zu Uncensored wechseln.** In Ollama `ollama run nous-hermes3:70b-llama3.3-q4_K_M` für die spezifische Szene ausführen. In SillyTavern das Modell in den API-Einstellungen pro Session ändern. Keine Daten werden zwischen Sessions übertragen.',
          '**Dieselben Prompt-Vorlagen verwenden.** Die 5-teilige Szenen-Vorlage, Subtext-Dialog-Struktur und Charakter-Widerspruchs-Prompts aus [Local LLM Prompts for Fiction Writers](/de/power-local-llm/local-llm-prompts-for-fiction-writers) funktionieren identisch auf Uncensored-Modellen. Du brauchst keine anderen Prompt-Strukturen.',
          '**Keine Inhaltsgenerierungs-Anweisungen hinzufügen, die nicht in einem menschlich verfassten Brief erscheinen würden.** Das Modell ist ein Werkzeug, keine Erlaubnisstruktur. Wenn du eine Anweisung aus rechtlichen Gründen nicht in ein Brief an einen menschlichen Illustrator oder Ghost-Writer aufnehmen würdest, füge sie auch nicht in den Modell-Prompt ein.',
          '**Ausgabe vor der Verbreitung überprüfen.** Uncensored-Modelle produzieren gelegentlich Inhalte, die die angeforderte Dunkelheit überschreiten oder in Stereotypisierung abgleiten. Das Standard-redaktionelle Überprüfen KI-unterstützter Inhalte gilt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Führe ein „Modell-Log" pro Schreibprojekt — eine Klartext-Datei, die aufzeichnet, welches Modell welche Szenen generiert hat. Dies ist nützlich für die Überarbeitung, für Zuschreibungstransparenz, wenn du KI-Unterstützung offenlegst, und für die Überprüfung, wenn eine Szene später Fragen aufwirft.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Standardmäßig das aggressivste Uncensored-Modell verwenden.** Vollständig abliterierte Modelle (Wizard-Uncensored, Erebus) haben das schwächste Anweisungsfolgen für komplexe Szenen. Hermes 3 ist ein besserer Kompromiss für Belletristikqualität.',
          '**Uncensored-Modelle für Inhalte verwenden, die Standardmodelle generieren würden.** Moralische Komplexität, dunkle Psychologie, Gewalt und reife Themen in literarischer Prosa erfordern selten ein Uncensored-Fine-Tune. Wisse genau, was du brauchst, bevor du wechselst.',
          '**Lokale Generierung als rechtlich kontextfreie Zone behandeln.** Keine Cloud-Policy-Durchsetzung bedeutet nicht kein Gesetz. Autorenverantwortung für Verbreitung, reale Personen und Minderjährige gilt unabhängig.',
          '**Wortgrenzen nicht festlegen.** Uncensored-Modelle füllen dunkle Inhalte genauso bereitwillig wie jedes andere Modell auf. Dieselben Wortgrenzen-Einschränkungen aus den Belletristik-Vorlagen verwenden.',
          '**Ausgabe in cloud-synchronisierten Verzeichnissen speichern.** Lokal generierte reife Inhalte, die mit iCloud, Google Drive oder OneDrive synchronisiert werden, können gegen die Nutzungsbedingungen dieser Plattformen verstoßen. Nur lokal speichern.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Hermes 3 Modellkarte und Fine-Tuning-Methodik — [Nous Research](https://nousresearch.com)',
          'Dolphin 3.0 Mistral technische Dokumentation — [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'RLHF- und Alignment-Techniken Übersicht — [Anthropic Research](https://anthropic.com/research)',
          'EU KI-Gesetz Artikel 5 — verbotene KI-Praktiken einschließlich Inhalte mit Minderjährigen — [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII (Nicht-Konsensuelle Intime Bilder) — rechtliche Rahmenübersicht — [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist es legal, Uncensored lokale LLMs zu betreiben?',
            a: 'Das Betreiben eines Uncensored lokalen LLMs ist in den meisten Jurisdiktionen legal — es gibt kein Gesetz gegen den Besitz von Open-Source-KI-Software. Was du damit generierst und verbreitest, unterliegt denselben Gesetzen wie jeder andere verfasste Inhalt: Obszönitätsrecht, NCII-Recht, Verleumdungsrecht und Gesetze bezüglich Inhalten mit Minderjährigen. Legal zu betreiben bedeutet nicht legal zu veröffentlichen, zu teilen oder unbegrenzt zu verbreiten.',
          },
          {
            q: 'Was ist der Unterschied zwischen Hermes 3 und Dolphin 3.0?',
            a: 'Hermes 3 (Nous Research) ist selektiv Uncensored — es reduziert Ablehnungen für reife Inhalte, behält aber einige Leitplanken für extreme Kategorien. Anweisungsfolgen ist ausgezeichnet, nahe am Basis-Llama-3.3-70B-Modell. Dolphin 3.0 (Cognitive Computations) ist breiter Uncensored über ein weiteres Inhaltsspektrum, aber Anweisungsfolgen ist bei komplexen Multi-Constraint-Szenen etwas schwächer. Hermes 3 ist der bessere Standard für Belletristik, bei der Prosaqualität wichtig ist; Dolphin 3.0 ist die bessere Wahl, wenn du das breiteste Inhaltsspektrum auf einem 16–24-GB-System benötigst.',
          },
          {
            q: 'Brauche ich ein Uncensored-Modell, um dunkle Belletristik zu schreiben?',
            a: 'Nein, für die meisten dunklen Belletristik. Standard-Instruction-Tuned-Modelle wie Llama 3.3 70B und Qwen3 32B generieren Gewalt, moralische Komplexität, dunkle Psychologie, Schurken-Innenleben, Trauma und die meiste literarische Dunkelheit ohne Ablehnungen, wenn sie richtig geleitet werden. Was sie zuverlässig ablehnen, sind explizite sexuelle Inhalte und eine engere Menge extremer Szenarien. Wenn deine dunkle Belletristik keinen expliziten sexuellen Inhalt enthält, versuche zunächst ein Standardmodell.',
          },
          {
            q: 'Kann ich Uncensored-Modelle in SillyTavern oder Agnai verwenden?',
            a: 'Ja. Sowohl SillyTavern als auch Agnai verbinden sich mit jedem OpenAI-kompatiblen Endpoint — einschließlich Ollama, das lokal auf Port 11434 läuft. Das Uncensored-Modell in Ollama laden, `ollama serve` starten und in SillyTavern oder Agnai die OpenAI-kompatible API auswählen und auf `http://localhost:11434/v1` zeigen. Uncensored-Modell aus der Modellliste auswählen. Keine zusätzliche Konfiguration erforderlich.',
          },
          {
            q: 'Sind Uncensored-Modelle sicher im Heimnetzwerk zu verwenden?',
            a: 'Ja, wenn sie so konfiguriert sind, dass sie an localhost binden (die Standardeinstellung in Ollama und LM Studio). Die API ist nur von deinem Gerät aus zugänglich. Wenn du den Port im Heimnetzwerk freigibst, stelle sicher, dass Firewall-Regeln den Zugriff auf vertrauenswürdige Geräte beschränken. Die Ollama-API nicht ohne Authentifizierung im öffentlichen Internet freigeben — die Standardkonfiguration hat keine Authentifizierung.',
          },
          {
            q: 'Was passiert mit dem lokal generierten Inhalt?',
            a: 'Automatisch passiert nichts damit. Lokal generierte Inhalte werden nicht an einen Server gesendet, nicht von einem Cloud-Dienst protokolliert und nicht für Model-Training verwendet. Sie existieren nur auf deinem Gerät. Du kontrollierst, was du behältst, was du löschst und was du teilst. Das ist der primäre strukturelle Datenschutzvorteil lokaler Uncensored-Generierung gegenüber cloudbasierten Alternativen.',
          },
          {
            q: 'Kann ich Uncensored- und Standard-Modelle im selben Schreibprojekt mischen?',
            a: 'Ja, und dies ist der empfohlene Workflow. Ein Standardmodell (Llama 3.3 70B, Qwen3 32B) für den Großteil der Prosa verwenden. Für spezifische Szenen, die Inhalte erfordern, die das Standardmodell ablehnt, zu Hermes 3 oder Dolphin 3.0 wechseln. Dieselben Prompt-Vorlagen funktionieren auf beiden; der Prosastil ist konsistent genug, dass eine szenenweise Mischung im Output nicht erkennbar ist.',
          },
          {
            q: 'Beeinflusst die Generierung mit einem Uncensored-Modell das Urheberrecht?',
            a: 'Nein — die Urheberrechtssituation für KI-generierte Inhalte ist unabhängig davon identisch, ob das Modell zensiert oder Uncensored ist. Das Urheberrecht für KI-Ausgaben ist in den meisten Jurisdiktionen seit 2026 ungeklärt; die allgemeine Position ist, dass menschlich verfasste Elemente schützbar sein können, während rohe KI-Ausgaben es nicht sind. Die Verwendung eines Uncensored-Modells ändert diese Analyse nicht.',
          },
          {
            q: 'Muss ich bei der Nutzung von Hermes 3 / Dolphin für kreatives Schreiben die DSGVO beachten?',
            a: 'Für rein lokale Generierung auf deinem eigenen Gerät ist die DSGVO-Relevanz minimal: keine personenbezogenen Daten werden an externe Auftragsverarbeiter übermittelt, da das Modell vollständig lokal läuft. Relevant wird die DSGVO, wenn deine Belletristik reale identifizierbare Personen verwendet oder wenn du KI-generierte Inhalte auf Plattformen veröffentlichst, die personenbezogene Daten verarbeiten. In diesem Fall gelten die üblichen Datenschutzpflichten — nicht aufgrund des Modells, sondern aufgrund der Verarbeitung und Veröffentlichung.',
          },
          {
            q: 'Welche deutschen Gesetze gelten beim Schreiben von Dark Fiction mit lokalen KI-Modellen?',
            a: 'Drei Gesetze sind besonders relevant: §184b StGB (Kinderpornografie) — absolutes Verbot, gilt auch für KI-generierte Inhalte und fiktionale Rahmungen; §130 StGB (Volksverhetzung) — gilt für Inhalte, die zum Hass gegen Bevölkerungsgruppen aufstacheln; §3 KUG schützt das Recht am eigenen Bild realer Personen. „Lokal generiert" oder „Fiktion" ist in keinem dieser Fälle eine Verteidigung. Für Belletristik, die keine realen Personen, keine Minderjährigen in sexuellen Kontexten und keine Aufstachelung enthält, ist lokale Generierung rechtlich vergleichbar mit dem Schreiben mit jedem anderen Werkzeug.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) — Modellvergleich einschließlich Modellauswahl, Sampling-Einstellungen und Performance für narrative Generierung.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — Prompt-Vorlagen für Szenen-Schreiben, Dialog, Weltenbau und Stiltransfer, die auf Standard- und Uncensored-Modellen funktionieren.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Frontend-Vergleich für Charakter-Karten-Roleplay, einschließlich Einrichtungsanleitungen für Ollama-Backends.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/de/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Langform-Entwurf-Workflows und Kapitel-Management für erweiterte Belletristik-Projekte.',
          '[Prompt Injection and LLM Security](/de/prompt-engineering/prompt-injection-and-security) — wie adversarielle Prompts mit Sicherheitsschichten interagieren; nützlicher Hintergrund zum Verständnis, was Uncensoring entfernt.',
          '[System Prompt vs User Prompt: What\'s the Difference](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — die Autoritätsstruktur, die das Modellverhalten steuert; der System-Prompt-Unterschied ist wichtiger als die Modellwahl für konsistente Uncensored-Ausgabe.',
          '[Local RAG for Private Business Data](/de/power-local-llm/local-rag-for-private-business-data) — lokale KI-Einrichtung für datenschutzsensible Anwendungsfälle; dieselben Datenschutzprinzipien wie bei lokaler Belletristik-Generierung.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'LLM locaux non censurés pour l\'écriture créative : quand les auteurs en ont besoin (2026)',
    seoTitle: 'LLMs locaux non censurés pour l\'écriture créative 2026',
    intro:
      'Les LLM locaux non censurés permettent aux auteurs de fiction de générer des contenus matures, moralement complexes et sombres que les services cloud refusent — sans que les données quittent leur machine. Ce guide couvre les modèles à utiliser, leur configuration via Ollama ou LM Studio, les responsabilités éthiques qui s\'appliquent même en l\'absence de conditions d\'utilisation, et les cas d\'usage où les modèles non censurés sont appropriés ou non.',
    metaDescription:
      'LLM locaux non censurés pour l\'écriture créative : quels modèles utiliser, configuration Ollama, responsabilités éthiques et limites à respecter.',
    twitterDescription:
      'LLM locaux non censurés pour les auteurs de fiction — quels modèles, configuration Ollama et l\'éthique réelle : quand ils sont appropriés et quelles responsabilités subsistent.',
    current_models_mentioned: [
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Mistral',
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 Go',
      'NVIDIA RTX 4090 24 Go',
      'Apple M5 Max 64 Go',
    ],
    audience:
      'Auteurs de fiction, romanciers, concepteurs de narration pour jeux vidéo et professionnels créatifs qui ont besoin de LLM locaux pour générer du contenu mature ou sombre sans refus des services cloud, et qui souhaitent comprendre leurs responsabilités éthiques.',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM local non censuré écriture créative',
    targetKeywords: [
      'llm local non censuré écriture créative',
      'modèles ollama non censurés',
      'hermes 3 écriture créative',
      'dolphin mistral configuration non censurée',
      'llm local fiction sombre',
      'éthique ia écriture non censurée',
    ],
    leadAnswerBlock:
      '**Les LLM locaux non censurés sont appropriés pour les auteurs de fiction qui doivent générer des personnages moralement complexes, des thèmes sombres, de la violence, du contenu romantique mature ou des voix narratives non fiables que les modèles cloud refusent de produire. Ils ne sont appropriés que si la production est destinée à de la fiction créative pour un public adulte — pas comme outil pour produire du contenu nuisible dans la réalité, des représentations non consenties de personnes réelles, ou du contenu impliquant des mineurs dans des contextes sexuels. Les modèles adaptés à la plupart des cas d\'usage de fiction en 2026 sont Hermes 3 Llama 3.3 (moins de refus, bonne qualité d\'instruction) et Dolphin 3.0 Mistral (plage non censurée plus large, empreinte mémoire réduite). Les deux fonctionnent entièrement en local via Ollama ou LM Studio, sans que les données quittent la machine. Les responsabilités éthiques qui s\'appliquent ne sont pas nulles — les auteurs utilisant des modèles non censurés conservent des obligations concernant la distribution, les mineurs et les personnes réelles qu\'aucune configuration locale ne supprime.**',
    quickAnswerTop: {
      fr: {
        question: 'Quels LLM locaux non censurés les auteurs de fiction doivent-ils utiliser en 2026 ?',
        answer:
          'Hermes 3 Llama 3.3 est le meilleur modèle non censuré polyvalent pour la fiction en 2026 — excellente qualité d\'instruction, bonne différenciation des voix de personnages, moins de refus arbitraires sans la tendance agressive que produisent certains modèles entièrement non censurés. Dolphin 3.0 Mistral est l\'alternative légère pour les systèmes 16–24 Go. Pour les auteurs qui ont besoin de contenu sombre occasionnel plutôt que d\'une sortie non censurée persistante, les modèles instruction-tuned standard (Llama 3.3 70B, Qwen3 32B) avec des prompts bien structurés génèrent la plupart des contenus littéraires matures sans nécessiter de fine-tune non censuré. La ligne éthique de base qui s\'applique indépendamment du modèle : aucun contenu impliquant des mineurs dans des contextes sexuels, aucune représentation non consentie de personnes réelles identifiables, et une réflexion approfondie avant de distribuer publiquement.',
        bullets: [
          'Hermes 3 Llama 3.3 — meilleur modèle non censuré polyvalent pour la fiction ; excellente qualité d\'instruction, moins de refus arbitraires.',
          'Dolphin 3.0 Mistral — option légère pour les systèmes 16–24 Go ; plage non censurée plus large qu\'Hermes 3.',
          'Les modèles standard Llama 3.3 70B et Qwen3 32B génèrent la plupart des contenus littéraires matures avec des prompts structurés — aucun fine-tune non censuré requis pour de nombreux cas d\'usage.',
          'Tous les modèles non censurés fonctionnent entièrement en local via Ollama ou LM Studio — les données ne quittent pas la machine.',
          'La ligne éthique de base s\'applique quel que soit le modèle : aucun mineur, aucune représentation non consentie de personnes réelles.',
          'Responsabilité de distribution : ce que tu publies engage ta responsabilité d\'auteur, comme pour tout autre contenu.',
          'Pour les interfaces de jeu de rôle, SillyTavern et Agnai s\'associent tous deux proprement avec les modèles Ollama non censurés.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Ce que « non censuré » signifie réellement', anchor: '#what-uncensored-means' },
      { label: 'Comment nous avons testé', anchor: '#how-we-tested' },
      { label: 'Quand les modèles non censurés sont adaptés', anchor: '#appropriate-use' },
      { label: 'Quand ils ne le sont pas', anchor: '#inappropriate-use' },
      { label: 'Comparaison des modèles', anchor: '#models' },
      { label: 'Configuration : Ollama et LM Studio', anchor: '#setup' },
      { label: 'Responsabilités éthiques qui subsistent', anchor: '#ethics' },
      { label: 'Flux de travail pratique', anchor: '#workflow' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: 'La présentation ci-dessous couvre : ce que signifie réellement le fine-tuning « non censuré » (suppression du RLHF vs. zéro contrainte) ; un tableau de comparaison de 5 modèles (Hermes 3 Llama 3.3 à Dolphin 3.0 Mistral 7B avec VRAM, taux de refus, qualité d\'instruction) ; cas d\'usage appropriés et inappropriés ; commandes de configuration Ollama ; responsabilités éthiques qui subsistent ; et 5 erreurs courantes. Téléchargez le PDF comme carte de référence pour l\'écriture créative avec LLM non censuré.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**« Non censuré » signifie que le modèle a un entraînement de sécurité RLHF réduit — pas qu\'il n\'a aucune contrainte.** Les fine-tunes non censurés respectent toujours le format d\'instruction, maintiennent la cohérence des personnages et peuvent être guidés par des prompts. Ce ne sont pas des systèmes « tout est permis ».',
          '**Hermes 3 Llama 3.3 est le meilleur choix polyvalent pour les auteurs de fiction en 2026.** Moins de refus arbitraires, excellente qualité d\'instruction, bonne différenciation des voix de personnages. Le bon choix pour les auteurs qui veulent la capacité sans la dérive agressive que produisent certains modèles entièrement non censurés.',
          '**Les modèles instruction-tuned standard gèrent la plupart des contenus littéraires matures avec de bons prompts.** La violence, la complexité morale, la psychologie sombre et les thèmes matures dans la prose littéraire nécessitent rarement un fine-tune non censuré. Ce qu\'ils refusent, c\'est le contenu sexuel explicite et les descriptions détaillées de préjudices réels. Identifie dans quelle catégorie se situe ton travail avant de changer de modèle.',
          '**Fonctionner localement signifie qu\'aucune donnée ne quitte ta machine.** Aucune condition d\'utilisation cloud ne s\'applique. Aucun contenu n\'est journalisé, analysé ou utilisé pour l\'entraînement. C\'est la principale raison structurelle pour laquelle les auteurs utilisent des modèles locaux non censurés — confidentialité et absence de restrictions d\'utilisation sur la fiction.',
          '**Les responsabilités éthiques ne disparaissent pas parce qu\'il n\'y a pas d\'application des CGU.** Les auteurs qui distribuent de la fiction produite avec des modèles non censurés portent les mêmes responsabilités légales que tout autre auteur : les lois sur les mineurs, les personnes réelles, l\'incitation et l\'obscénité selon les juridictions s\'appliquent quelle que soit la méthode de génération.',
          '**Dolphin 3.0 Mistral est l\'option légère pour les configurations 16–24 Go.** Plage de sortie non censurée plus large qu\'Hermes 3 mais qualité d\'instruction plus faible dans les scènes complexes. Convient à la fiction courte, l\'exploration de prompts et le test de styles.',
          '**SillyTavern et Agnai s\'associent tous deux proprement avec les modèles Ollama non censurés.** Pointer l\'un ou l\'autre des frontends sur l\'endpoint compatible OpenAI d\'Ollama et sélectionner le modèle non censuré. Aucune configuration supplémentaire requise.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Modèles non censurés testés :** Hermes 3 Llama 3.3 (principal), Dolphin 3.0 Mistral (secondaire).',
          '**Backends :** Ollama (principal), LM Studio (alternative pour configuration GUI).',
          '**Matériel :** Hermes 3 70B en Q4 nécessite ~42 Go ; Dolphin 3.0 7B fonctionne sur 8 Go ; Dolphin 3.0 24B fonctionne sur ~16 Go.',
          '**Interfaces :** SillyTavern, Agnai, RisuAI s\'associent tous avec les modèles Ollama non censurés via l\'endpoint compatible OpenAI.',
          '**Confidentialité :** tout en local — pas d\'appels API cloud, pas de journalisation, pas de collecte de données d\'entraînement.',
          '**Limites éthiques absolues :** aucun contenu sexuel impliquant des mineurs (interdiction absolue), aucune représentation sexuelle non consentie de personnes réelles identifiables, aucun contenu conçu pour faciliter une violence réelle.',
          '**Distribution :** les contenus que tu publies engagent ta responsabilité d\'auteur quelle que soit la méthode de génération.',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: 'Ce que « non censuré » signifie réellement',
        content:
          '**« Non censuré » dans le contexte des fine-tunes de LLM locaux signifie un entraînement de sécurité RLHF (apprentissage par renforcement à partir des retours humains) réduit — pas la suppression de toutes les contraintes du modèle.** Les modèles instruction-tuned standard sont entraînés avec des couches RLHF qui leur font refuser des catégories spécifiques de contenu : contenu sexuel explicite, violence détaillée, psychologie sombre ressemblant à un modèle de préjudice réel. Les fine-tunes non censurés (Hermes 3, Dolphin, Wizard, Erebus) suppriment ou réduisent ces couches RLHF du modèle de base, laissant la capacité de suivi d\'instructions intacte mais supprimant les comportements de refus. Le résultat est un modèle qui suit tes prompts de fiction à travers du contenu sombre sans rediriger, moraliser ou s\'arrêter en milieu de scène.',
        callouts: [
          {
            type: 'tip',
            text: 'Non censuré ne signifie pas ingouvernable. Les modèles non censurés respectent toujours la structure des prompts, les limites de mots, la voix des personnages et répondent aux instructions de révision. La différence, c\'est qu\'ils n\'ajoutent pas d\'avertissements de contenu non sollicités, ne refusent pas les orientations moralement sombres ni ne brisent le personnage pour signaler qu\'une scène dépeint du tort. Utilise des prompts structurés issus des modèles d\'écriture fictionnelle comme avec n\'importe quel autre modèle — la distinction prompt système / prompt utilisateur compte plus que le niveau de non-censure du modèle. Voir [Prompt système vs prompt utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) pour comprendre pourquoi.',
          },
        ],
        items: [
          '**Ce qui est supprimé :** les comportements de refus pour des catégories de contenu spécifiques (contenu sexuel explicite, violence graphique, contenu psychologique sombre).',
          '**Ce qui est conservé :** le suivi d\'instructions, la cohérence des personnages, le respect de la structure des prompts, la qualité linguistique.',
          '**Degrés de non-censure :** Hermes 3 est sélectivement non censuré (contenu mature oui, mais conserve certaines barrières pour le contenu extrême). La série Dolphin est plus largement non censurée. Les modèles entièrement ablitérés (Wizard-Uncensored, Erebus) ont la suppression des barrières la plus agressive — et la qualité d\'instruction la plus faible pour les tâches de fiction complexes.',
          '**La qualité du modèle de base compte :** la non-censure dégrade la qualité d\'instruction si le modèle de base est faible. Hermes 3 sur Llama 3.3 70B conserve le fort suivi d\'instructions de Llama 3.3 ; Dolphin 3.0 sur Mistral 7B est limité par la base plus petite.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les fine-tunes de LLM locaux non censurés suppriment les couches de refus de sécurité RLHF tout en conservant la capacité de suivi d\'instructions — ils suivent les orientations créatives sombres sans rediriger, moraliser ni s\'arrêter en milieu de scène.',
          },
          {
            type: 'plain-terms',
            text: 'Un modèle standard comme Llama 3.3 70B s\'arrêtera au milieu d\'une scène représentant de la torture, le monologue d\'un villain moralement complexe, ou du contenu romantique explicite, et refusera ou adoucira la sortie. Hermes 3 (la version non censurée sur la même base) suivra ton prompt à travers la même scène au même niveau de qualité sans interruption. La qualité de la prose est équivalente ; la différence réside dans la couche de refus.',
          },
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Comment nous avons testé',
        content:
          'Les verdicts sur les modèles dans ce guide sont basés sur un petit test qualitatif — un indicateur directionnel, pas un benchmark évalué par des pairs. Pour un sujet où les lecteurs décident s\'ils peuvent faire confiance aux recommandations de modèles sur un sujet sensible, la transparence sur la méthode compte.',
        items: [
          '**Ensemble de prompts :** 10 prompts sur 5 catégories — monologue de villain, scène de romance mature, violence graphique dans de la fiction de guerre, narrateur moralement complexe, scène psychologique sombre (2 prompts par catégorie).',
          '**Exécutions par modèle :** chaque prompt exécuté 3 fois par modèle.',
          '**Taux de refus :** pourcentage d\'exécutions où le modèle a refusé, redirigé ou adouci le contenu demandé sans instruction.',
          '**Mesure de dérive :** pourcentage d\'exécutions où le modèle a ajouté une escalade non demandée — extrémité gratuite au-delà de ce que le prompt spécifiait.',
          '**Backend :** Ollama 0.5+ avec quantization Q4_K_M pour tous les modèles.',
          '**Contrainte d\'honnêteté :** petit test qualitatif. Les résultats indiquent des différences directionnelles entre les modèles, pas une mesure numérique précise. Traiter les valeurs de dérive vers l\'extrême et de taux de refus du tableau comme des jugements représentatifs.',
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: 'Quand les modèles non censurés sont adaptés à la fiction',
        content:
          '**Les modèles non censurés sont appropriés quand ta fiction a genuinement besoin de contenu que les services cloud refusent, que ton audience est adulte, et que le but est l\'expression créative.** La plupart des auteurs de fiction recourent aux modèles non censurés pour un ou plusieurs de ces cas d\'usage spécifiques.',
        items: [
          '**Psychologie et monologues de villain :** personnages de villain moralement cohérents qui ne sont pas interrompus par le modèle brisant le personnage pour ajouter des avertissements en milieu de monologue.',
          '**Contenu romantique et sexuel mature :** scènes explicites entre personnages fictionnels adultes dans la romance, l\'érotisme ou la fiction littéraire qui nécessitent du contenu sexuel que les services cloud bloquent.',
          '**Violence graphique dans la fiction de genre :** romans de guerre, thrillers policiers, horreur — scènes où la violence est essentielle à l\'impact émotionnel et où l\'adoucir tue la scène.',
          '**Traumatisme et noirceur psychologique :** récits de survivants, fiction sur l\'addiction, histoires d\'abus — contenu qui nécessite une représentation brute pour avoir un poids authentique.',
          '**Narrateurs moralement peu fiables :** narrateurs qui ont tort, qui rationalisent le tort, qui sont cruels ou intolérants dans la fiction — personnages qui nécessitent que le modèle exprime des points de vue qu\'il refuserait normalement.',
          '**Jeu de rôle sombre et fiction collaborative :** scénarios de longue durée impliquant des conflits, de la complexité morale et des thèmes matures où un modèle standard brise la fiction pour insérer des refus.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Avant de passer à un modèle non censuré, teste ton prompt sur un modèle instruction-tuned standard. Llama 3.3 70B et Qwen3 32B avec un prompt système bien structuré et des contraintes de scène génèrent la plupart des contenus littéraires matures sans refus. Les fine-tunes non censurés apportent le plus de valeur pour le contenu sexuel explicite et les représentations les plus extrêmes de la violence — pas pour la noirceur psychologique, la complexité morale ou les thèmes sombres en général.',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: 'Quand les modèles non censurés ne sont pas appropriés',
        content:
          '**L\'absence d\'application des règles cloud ne signifie pas l\'absence d\'obligations légales et éthiques.** Ces catégories représentent des limites absolues qui s\'appliquent quel que soit le modèle, la plateforme ou l\'isolation de ta machine.',
        callouts: [
          {
            type: 'warning',
            text: 'Limites absolues quelle que soit la configuration. Aucune configuration locale ne supprime la responsabilité légale ou éthique pour : (1) le contenu sexuel impliquant des mineurs — interdiction absolue sous la loi dans pratiquement toutes les juridictions ; (2) les représentations sexuelles non consenties de personnes réelles identifiables — cela constitue une NCII (intimate imagery non consentie) quelle que soit la méthode de génération ; (3) le contenu conçu pour faciliter une violence réelle contre des cibles spécifiques. Ces limites s\'appliquent que ton modèle fonctionne localement, dans un cloud ou sur une machine isolée.',
          },
        ],
        items: [
          '**Contenu sexuel impliquant des mineurs :** interdiction légale absolue dans toutes les grandes juridictions quelle que soit le cadrage fictionnel ou la méthode de génération. Ce n\'est pas une politique de modèle — c\'est la loi.',
          '**Représentations sexuelles non consenties de personnes réelles :** les lois sur les NCII s\'appliquent aux contenus générés par IA de personnes réelles identifiables dans un nombre croissant de juridictions. « Généré par IA » n\'est pas une défense.',
          '**Contenu conçu pour faciliter un préjudice réel :** utiliser un cadre fictionnel pour extraire des informations ou du contenu qui permet directement une violence ou un préjudice réel supprime la protection fictionnelle.',
          '**Distribution publique sans responsabilité d\'auteur :** les contenus que tu publies, distribues ou partages engagent ta responsabilité d\'auteur. « Une IA l\'a généré » ne transfère pas cette responsabilité.',
          '**Fiction de harcèlement :** générer de la fiction dont le but est de nuire, d\'intimider ou de harceler une personne réelle spécifique — quel que soit le cadre fictionnel.',
        ],
      },
      models: {
        id: 'models',
        title: 'Comparaison des modèles : options non censurées pour la fiction',
        content:
          '**Tous les modèles non censurés ne se valent pas — le degré de suppression RLHF et la qualité du modèle de base comptent tous deux pour les cas d\'usage d\'écriture fictionnelle.**',
        columns: ['Modèle', 'Base', 'VRAM (Q4)', 'Taux de refus', 'Qualité d\'instruction', 'Dérive vers l\'extrême', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Hermes 3 Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 Go', 'Taux de refus': 'Sélectif', 'Qualité d\'instruction': '★★★★★', 'Dérive vers l\'extrême': 'Faible', 'Idéal pour': 'Choix par défaut pour la fiction sérieuse — meilleur suivi d\'instructions + capacité non censurée' },
          { 'Modèle': 'Dolphin 3.0 Mistral 24B', 'Base': 'Mistral 24B', 'VRAM (Q4)': '~16 Go', 'Taux de refus': 'Large', 'Qualité d\'instruction': '★★★★☆', 'Dérive vers l\'extrême': 'Faible à modérée', 'Idéal pour': 'Systèmes 16–24 Go ; contenu mature sur une plus large plage' },
          { 'Modèle': 'Dolphin 3.0 Mistral 7B', 'Base': 'Mistral 7B', 'VRAM (Q4)': '~8 Go', 'Taux de refus': 'Large', 'Qualité d\'instruction': '★★★☆☆', 'Dérive vers l\'extrême': 'Modérée', 'Idéal pour': 'Systèmes à VRAM limitée ; ébauches courtes, test de prompts' },
          { 'Modèle': 'Hermes 3 Llama 3.2 8B', 'Base': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 Go', 'Taux de refus': 'Sélectif', 'Qualité d\'instruction': '★★★☆☆', 'Dérive vers l\'extrême': 'Faible', 'Idéal pour': 'Ressources limitées ; dialogues et scènes courtes' },
          { 'Modèle': 'Standard Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 Go', 'Taux de refus': 'Limité', 'Qualité d\'instruction': '★★★★★', 'Dérive vers l\'extrême': 'Aucune', 'Idéal pour': 'Thèmes sombres, complexité morale, violence — sans contenu sexuel explicite' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Commence par Hermes 3, pas par le fine-tune non censuré le plus agressif. Les modèles entièrement ablitérés (Wizard-Uncensored, Erebus) ont la plage de contenu la plus large mais un suivi d\'instructions nettement plus faible dans les tâches de fiction complexes — ils dérivent plus vite des contraintes, produisent une prose de moins bonne qualité sur de longues générations et maintiennent la voix des personnages moins fidèlement. Pour de la fiction nécessitant à la fois du contenu non censuré et une prose de qualité, Hermes 3 est le meilleur compromis.',
          },
        ],
        items: [
          'Note : les anciens fine-tunes non censurés — Midnight Miqu (basé sur Miqu-70B), Wizard-LM Uncensored, Mythomax — étaient des références en 2024 mais ont été dépassés par Hermes 3 et Dolphin 3.0 en 2026 sur la qualité et les métriques de suivi d\'instructions. Si tu les trouves recommandés dans des articles plus anciens, les équivalents actuels sont Hermes 3 (pour la non-censure sélective) et Dolphin 3.0 (pour une plage plus large).',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuration : Ollama et LM Studio',
        content:
          '**Ollama et LM Studio servent tous deux des modèles non censurés via une API locale compatible OpenAI — ce qui signifie que SillyTavern, Agnai et tout autre outil compatible avec un endpoint local fonctionnent sans configuration supplémentaire.**',
        promptExamples: [
          {
            label: 'Ollama : télécharger et exécuter Hermes 3',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama : télécharger et exécuter Dolphin 3.0 Mistral 24B',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**Installation d\'Ollama :** `brew install ollama` (macOS) ou télécharger depuis ollama.com (Windows/Linux). La commande `ollama serve` démarre l\'API compatible OpenAI sur `http://localhost:11434`.',
          '**Installation de LM Studio :** télécharger depuis lmstudio.ai. Importer les fichiers GGUF directement ; l\'onglet serveur local expose un endpoint compatible OpenAI sur `http://localhost:1234`.',
          '**Connexion SillyTavern :** dans les paramètres API, sélectionner « Compatible OpenAI » et pointer l\'URL de base sur `http://localhost:11434/v1` (Ollama) ou `http://localhost:1234/v1` (LM Studio). Saisir n\'importe quelle chaîne comme clé API (obligatoire dans le champ mais non validée localement).',
          '**Connexion Agnai :** même endpoint compatible OpenAI ; saisir l\'URL locale dans les paramètres de l\'adaptateur. Fonctionne de façon identique à la configuration SillyTavern.',
          '**Changement de modèle :** basculer entre modèles standard et non censurés dans Ollama avec `ollama run [model-name]` — plusieurs modèles peuvent être chargés simultanément, et tu peux changer par session sans redémarrer le serveur.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour les auteurs qui souhaitent garder les modèles non censurés et standard séparés, créer deux instances Ollama sur des ports différents en utilisant la variable d\'environnement OLLAMA_HOST. Exemple : OLLAMA_HOST=127.0.0.1:11435 ollama serve. Cela permet de pointer SillyTavern ou Agnai vers l\'instance non censurée tout en conservant l\'instance Ollama standard pour d\'autres tâches.',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: 'Responsabilités éthiques qui subsistent',
        content:
          '**Faire fonctionner un modèle localement sans application des règles cloud ne supprime pas tes responsabilités en tant qu\'auteur et éditeur.** Le cadre éthique qui s\'applique à la fiction d\'auteur humain s\'applique également à la fiction assistée par IA.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La configuration locale supprime les restrictions des CGU cloud mais ne supprime pas la responsabilité légale de l\'auteur, la responsabilité de facilitation de préjudice, ni les obligations éthiques qui s\'appliquent à toute œuvre créative publiée.',
          },
          {
            type: 'plain-terms',
            text: 'Pense au modèle local non censuré comme à un assistant d\'écriture très capable qui suivra toutes les orientations que tu lui donnes. Le poids légal et éthique de ce que tu produis et distribues repose sur toi, pas sur l\'outil. Les mêmes lois qui s\'appliquent à la fiction d\'auteur humain — concernant les mineurs, les personnes réelles, l\'obscénité et l\'incitation — s\'appliquent à la fiction générée par IA distribuée publiquement. Le fait qu\'aucune plateforme ne t\'interdise de générer le contenu localement ne change pas ce dont tu es légalement responsable si tu le publies.',
          },
        ],
        items: [
          '**Responsabilité d\'auteur :** tu es l\'auteur de la fiction assistée par IA. « L\'IA l\'a généré » ne transfère pas les droits d\'auteur, ne supprime pas la responsabilité ni ne constitue une défense pour un contenu qui viole la loi.',
          '**Sensibilisation aux juridictions :** les lois sur l\'obscénité, les NCII et les contenus nuisibles varient selon les juridictions. Un contenu légal à produire dans un pays peut constituer une infraction pénale à distribuer dans un autre.',
          '**Personnes réelles :** générer du contenu fictionnel négatif sur des personnes réelles identifiables — même dans des cadres clairement fictionnels — comporte un risque de diffamation et de NCII selon le contenu.',
          '**Vérification d\'âge pour la distribution :** si tu distribues du contenu mature ou adulte produit avec des modèles non censurés sur une plateforme publique, les obligations de vérification d\'âge qui s\'appliquent à tout éditeur de contenu adulte te concernent.',
          '**Archivage responsable :** le contenu non censuré généré localement doit être traité avec la même discipline de stockage que tout autre matériel sensible — ne pas stocker dans des répertoires synchronisés avec le cloud, ne pas partager involontairement.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'L\'erreur éthique la plus courante parmi les auteurs utilisant des modèles non censurés est de traiter la génération locale comme une zone sans contexte. La génération locale signifie l\'absence d\'application des règles de plateforme — elle ne signifie pas l\'absence de loi, de responsabilité et de préjudice. L\'absence d\'un modérateur de contenu n\'est pas une autorisation.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Flux de travail pratique pour les auteurs de fiction',
        content:
          '**La plupart des auteurs de fiction utilisant des modèles non censurés les utilisent pour des scènes spécifiques plutôt que comme remplacement par défaut de leur modèle standard.** Le flux de travail ci-dessous soutient cette utilisation ciblée.',
        items: [
          '**Rédiger les scènes standard avec un modèle standard.** Llama 3.3 70B ou Qwen3 32B gèrent la majeure partie de la prose littéraire, y compris les thèmes sombres, la complexité morale et la profondeur psychologique. Réserver le modèle non censuré pour les scènes qui nécessitent spécifiquement du contenu que le modèle standard refuse.',
          '**Passer au non censuré pour des scènes ciblées.** Dans Ollama, exécuter `ollama run nous-hermes3:70b-llama3.3-q4_K_M` pour la scène spécifique. Dans SillyTavern, changer le modèle dans les paramètres API par session. Aucune donnée ne passe entre les sessions.',
          '**Utiliser les mêmes modèles de prompts.** Le modèle de scène en 5 parties, la structure de dialogue sous-textuel et les prompts de contradiction de personnages de [Prompts LLM locaux pour les auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) fonctionnent de façon identique sur les modèles non censurés. Tu n\'as pas besoin de structures de prompts différentes.',
          '**Ne pas ajouter d\'instructions de génération de contenu qui n\'apparaîtraient pas dans un brief humain pour des raisons légales.** Le modèle est un outil, pas une structure de permission. Si tu n\'inclurais pas une instruction dans un brief à un illustrateur ou ghostwriter humain pour des raisons légales, ne l\'inclus pas dans le prompt du modèle.',
          '**Réviser la sortie avant de distribuer.** Les modèles non censurés produisent parfois du contenu qui dépasse la noirceur demandée ou glisse vers des stéréotypes. La révision éditoriale standard du contenu assisté par IA s\'applique.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Tiens un « journal de modèles » par projet d\'écriture — un fichier texte brut qui enregistre quel modèle a généré quelles scènes. C\'est utile pour la révision (savoir quel modèle a produit une scène aide à savoir où envoyer les demandes de révision), pour la transparence d\'attribution si tu divulgues l\'assistance IA, et pour l\'audit si une scène soulève des questions ultérieurement.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Se rabattre sur le modèle non censuré le plus agressif.** Les modèles entièrement ablitérés (Wizard-Uncensored, Erebus) ont le suivi d\'instructions le plus faible pour les scènes complexes. Hermes 3 est un meilleur compromis pour la qualité de fiction.',
          '**Utiliser des modèles non censurés pour du contenu que les modèles standard généreraient.** La complexité morale, la psychologie sombre, la violence et les thèmes matures dans la prose littéraire nécessitent rarement un fine-tune non censuré. Sache exactement ce dont tu as besoin avant de changer.',
          '**Traiter la génération locale comme une zone légale sans contexte.** L\'absence d\'application des règles cloud ne signifie pas l\'absence de loi. Les responsabilités d\'auteur pour la distribution, les personnes réelles et les mineurs s\'appliquent quelle que soit la configuration.',
          '**Ne pas spécifier de limites de mots.** Les modèles non censurés allongent le contenu sombre pour remplir l\'espace aussi facilement que n\'importe quel autre modèle. Utilise les mêmes contraintes de limite de mots des modèles de fiction.',
          '**Stocker la sortie dans des répertoires synchronisés avec le cloud.** Le contenu mature généré localement synchronisé avec iCloud, Google Drive ou OneDrive peut violer les conditions d\'utilisation de ces plateformes. Stocker uniquement en local.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Fiche modèle Hermes 3 et méthodologie de fine-tuning — [Nous Research](https://nousresearch.com)',
          'Documentation technique Dolphin 3.0 Mistral — [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'Vue d\'ensemble des techniques RLHF et d\'alignement — [Anthropic Research](https://anthropic.com/research)',
          'Article 5 du Règlement IA de l\'UE — pratiques d\'IA interdites incluant le contenu impliquant des mineurs — [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII (intimate imagery non consentie) — vue d\'ensemble du cadre juridique — [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Est-il légal d\'utiliser des LLM locaux non censurés ?',
            a: 'Faire fonctionner un LLM local non censuré est légal dans la plupart des juridictions — il n\'existe pas de loi contre la possession de logiciels IA open source. Ce que tu génères et distribues avec est soumis aux mêmes lois que tout autre contenu d\'auteur : loi sur l\'obscénité, loi sur les NCII, loi sur la diffamation et lois sur le contenu impliquant des mineurs. Légal à faire fonctionner ne signifie pas légal à publier, partager ou distribuer sans limite.',
          },
          {
            q: 'Quelle est la différence entre Hermes 3 et Dolphin 3.0 ?',
            a: 'Hermes 3 (Nous Research) est sélectivement non censuré — il réduit les refus pour le contenu mature tout en conservant certaines barrières pour les catégories extrêmes. Le suivi d\'instructions est excellent, proche du modèle de base Llama 3.3 70B. Dolphin 3.0 (Cognitive Computations) est plus largement non censuré sur une plage de contenu plus large, mais le suivi d\'instructions est légèrement plus faible dans les scènes complexes à contraintes multiples. Hermes 3 est le meilleur choix par défaut pour la fiction où la qualité de la prose compte ; Dolphin 3.0 est le meilleur choix quand tu as besoin de la plage de contenu la plus large sur un système 16–24 Go.',
          },
          {
            q: 'Ai-je besoin d\'un modèle non censuré pour écrire de la dark fiction ?',
            a: 'Non, pour la plupart de la dark fiction. Les modèles instruction-tuned standard comme Llama 3.3 70B et Qwen3 32B génèrent de la violence, de la complexité morale, de la psychologie sombre, l\'intériorité de villain, les traumatismes et la plupart de la noirceur littéraire sans refus lorsqu\'ils sont promptés correctement. Ce qu\'ils refusent de façon fiable, c\'est le contenu sexuel explicite et un ensemble plus restreint de scénarios extrêmes. Si ta dark fiction n\'inclut pas de contenu sexuel explicite, essaie d\'abord un modèle standard — tu n\'auras peut-être pas besoin de la version non censurée.',
          },
          {
            q: 'Puis-je utiliser des modèles non censurés dans SillyTavern ou Agnai ?',
            a: 'Oui. SillyTavern et Agnai se connectent à n\'importe quel endpoint compatible OpenAI — y compris Ollama fonctionnant localement sur le port 11434. Télécharger le modèle non censuré dans Ollama, démarrer `ollama serve`, et dans SillyTavern ou Agnai sélectionner l\'API compatible OpenAI et la pointer sur `http://localhost:11434/v1`. Sélectionner ton modèle non censuré dans la liste des modèles. Aucune configuration supplémentaire n\'est requise.',
          },
          {
            q: 'Les modèles non censurés sont-ils sûrs à utiliser sur un réseau domestique ?',
            a: 'Oui, lorsqu\'ils sont configurés pour se lier à localhost (la configuration par défaut dans Ollama et LM Studio). L\'API n\'est accessible que depuis ta machine. Si tu exposes le port sur ton réseau domestique, assure-toi que les règles de pare-feu limitent l\'accès aux appareils de confiance. Ne pas exposer l\'API Ollama sur l\'internet public sans authentification — la configuration par défaut n\'a pas d\'auth.',
          },
          {
            q: 'Que se passe-t-il avec le contenu que je génère localement ?',
            a: 'Rien ne se passe automatiquement. Le contenu généré localement n\'est envoyé à aucun serveur, n\'est journalisé par aucun service cloud et n\'est pas utilisé pour l\'entraînement du modèle. Il n\'existe que sur ton appareil, dans le stockage local de ton application (fichiers d\'historique de chat, fiches de personnages, etc.). Tu contrôles ce que tu gardes, ce que tu supprimes et ce que tu partages. C\'est le principal avantage structurel en matière de confidentialité de la génération locale non censurée par rapport aux alternatives basées sur le cloud.',
          },
          {
            q: 'Puis-je mélanger des modèles non censurés et standard dans le même projet d\'écriture ?',
            a: 'Oui, et c\'est le flux de travail recommandé. Utiliser un modèle standard (Llama 3.3 70B, Qwen3 32B) pour la majeure partie de la prose — les modèles standard produisent une prose littéraire de haute qualité pour la plupart du contenu sombre. Passer à Hermes 3 ou Dolphin 3.0 pour les scènes spécifiques qui nécessitent du contenu que le modèle standard refuse. Les mêmes modèles de prompts fonctionnent sur les deux ; le style de prose est suffisamment cohérent pour qu\'un mélange par scène ne soit pas détectable dans la sortie.',
          },
          {
            q: 'La génération avec un modèle non censuré affecte-t-elle les droits d\'auteur ?',
            a: 'Non — la situation des droits d\'auteur pour le contenu généré par IA est identique que le modèle soit censuré ou non censuré. Le droit d\'auteur pour les sorties IA est incertain dans la plupart des juridictions en 2026 ; la position générale est que les éléments d\'auteur humain (conception de prompt, sélection, arrangement, édition substantielle) peuvent être protégeables tandis que la sortie IA brute ne l\'est pas. L\'utilisation d\'un modèle non censuré ne change pas cette analyse.',
          },
          {
            q: 'Les fine-tunes non censurés perdent-ils des connaissances générales ?',
            a: 'Marginalement, dans des domaines étroits. Les fine-tunes de non-censure sont généralement des passes de ré-entraînement en pleine précision qui peuvent légèrement dériver du modèle de base sur le rappel factuel, les mathématiques et les benchmarks de codage — généralement 1 à 3 points de pourcentage sur les benchmarks standard. Pour les tâches d\'écriture fictionnelle, cela est indétectable dans la qualité de la sortie. Si tu as besoin du même modèle pour la fiction et le travail technique, garde les versions standard et non censurée installées et change en fonction de la tâche. Hermes 3 conserve mieux les capacités générales que les modèles entièrement ablitérés.',
          },
          {
            q: 'Ces modèles sont-ils surveillés ou anonymes ?',
            a: 'Les modèles open-weight fonctionnant localement via Ollama ou LM Studio n\'ont pas de télémétrie, pas de journalisation distante et pas de suivi d\'utilisation. Les auteurs des modèles (Nous Research pour Hermes 3, Cognitive Computations pour Dolphin) ne peuvent pas voir ce que tu génères — il n\'y a pas de callback serveur pendant l\'inférence. Le seul risque de télémétrie provient du frontend (SillyTavern, Agnai — tous deux sans télémétrie par défaut) ou de l\'OS. Exécuter un moniteur réseau (Little Snitch sur macOS, Wireshark sur Linux) une fois après l\'installation pour vérifier.',
          },
          {
            q: 'Dois-je respecter le RGPD et la CNIL en utilisant Hermes 3 ou Dolphin pour l\'écriture créative ?',
            a: 'Pour une génération purement locale sur ton propre appareil, la pertinence du RGPD est minimale : aucune donnée personnelle n\'est transmise à un sous-traitant externe puisque le modèle fonctionne entièrement en local. Le RGPD et les directives de la CNIL deviennent pertinents si ta fiction met en scène des personnes réelles identifiables, ou si tu publies des contenus générés par IA sur des plateformes qui traitent des données personnelles. Dans ce cas, les obligations habituelles de protection des données s\'appliquent — non pas en raison du modèle, mais en raison du traitement et de la publication.',
          },
          {
            q: 'Quelles lois françaises s\'appliquent à l\'écriture de dark fiction avec des LLM locaux ?',
            a: 'Trois dispositions sont particulièrement pertinentes : l\'article 227-23 du Code pénal (contenu pédopornographique) — interdiction absolue applicable aux contenus générés par IA et aux cadres fictionnels ; l\'article 24 de la loi du 29 juillet 1881 sur la liberté de la presse (provocation à la haine ou à la discrimination) ; et la loi Informatique et Libertés pour tout contenu impliquant des données personnelles de personnes identifiables. « Généré localement » ou « fiction » ne constitue une défense dans aucun de ces cas. Pour une fiction ne mettant pas en scène de mineurs dans des contextes sexuels, de personnes réelles identifiables ou d\'incitation à la haine, la génération locale est juridiquement comparable à l\'écriture avec n\'importe quel autre outil.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) — comparaison de modèles incluant les choix de modèles, les paramètres d\'échantillonnage et les performances pour la génération narrative.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — modèles de prompts pour l\'écriture de scènes, le dialogue, la construction d\'univers et le transfert de style, fonctionnant sur les modèles standard et non censurés.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparaison de frontends pour le jeu de rôle par fiches de personnages, avec instructions de configuration pour les backends Ollama.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/fr/power-local-llm/local-llm-screenwriting-and-novel-drafting) — flux de travail de rédaction longue forme et gestion des chapitres pour les projets de fiction étendus.',
          '[Prompt Injection and LLM Security](/fr/prompt-engineering/prompt-injection-and-security) — comment les prompts adversariaux interagissent avec les couches de sécurité ; contexte utile pour comprendre ce que la non-censure supprime.',
          '[System Prompt vs User Prompt: What\'s the Difference](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — la structure d\'autorité qui gouverne le comportement du modèle ; la distinction de prompt système compte plus que le choix de modèle pour une sortie non censurée cohérente.',
          '[Local RAG for Private Business Data](/fr/power-local-llm/local-rag-for-private-business-data) — configuration IA locale pour les cas d\'usage sensibles aux données ; mêmes principes de confidentialité que la génération locale de fiction.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: '無検閲ローカルLLMと創作活動：小説家が使うべき場面（2026年版）',
    seoTitle: '無検閲ローカルLLMと創作活動：適切な用途と倫理 2026',
    intro:
      '無検閲ローカルLLMを使うと、クラウドサービスが拒否する成人向け・倫理的複雑性のある・ダークなコンテンツをフィクション作家が生成できます――データは一切機外に出ません。本ガイドでは、推奨モデル、OllamaまたはLM Studioでの設定手順、ToS執行がなくても適用される倫理的責任、そして無検閲モデルが適切な用途と不適切な用途を解説します。',
    metaDescription:
      '無検閲ローカルLLMと創作活動：推奨モデル、Ollama設定、倫理的責任、適切な用途、創作者が守るべきガイドラインを網羅。',
    twitterDescription:
      '小説家のための無検閲ローカルLLM―推奨モデル、Ollama設定、本当の倫理問題：適切な場面と創作者に残る責任を解説。',
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
      'フィクション作家、小説家、ゲームナラティブデザイナー、クラウドサービスの拒否なしで成人向けやダークなコンテンツを生成できるローカルLLMを必要とするクリエイティブ専門家で、その倫理的責任を理解したい方。',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: '無検閲ローカルLLM 創作',
    targetKeywords: [
      '無検閲ローカルLLM 創作',
      '無検閲ollamaモデル',
      'hermes 3 創作',
      'dolphin mistral 無検閲 設定',
      'ローカルLLM ダークフィクション',
      '無検閲AI 創作倫理',
    ],
    leadAnswerBlock:
      '**無検閲ローカルLLMは、クラウドモデルが拒否する道徳的に複雑なキャラクター・ダークなテーマ・暴力・成人向けのロマンティックコンテンツ・信頼できない語り手の声を生成する必要があるフィクション作家に適しています。成人向けの読者向け創作フィクションのみに出力を使用する場合に限り適切であり、現実の有害コンテンツ、実在人物の非合意的な描写、未成年者を性的文脈で含むコンテンツを生成するツールとしては不適切です。2026年のフィクション執筆ユースケースに最も適合するモデルは、Hermes 3 Llama 3.3（拒否率が低く、指示追従性が強い）とDolphin 3.0 Mistral（より広い無検閲範囲、小さなフットプリント）です。両モデルともOllamaまたはLM Studioを通じて完全にローカルで動作し、データは機外に出ません。これらのモデルを使用する際の倫理的責任はゼロではありません――無検閲モデルで作業する作家は、ローカル設定がなくならない配布、未成年者、実在人物に関する義務を依然として負っています。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にフィクション作家が使うべき無検閲ローカルLLMは？',
        answer:
          'Hermes 3 Llama 3.3は2026年のフィクション向け最良のオールラウンド無検閲モデルです――強力な指示追従性、良好なキャラクターボイス分化、一部の完全無検閲ファインチューンが生成するような攻撃的な出力を伴わない少ない任意拒否。Dolphin 3.0 Mistralは16〜24 GBシステム向けの軽量な代替です。永続的な無検閲出力ではなく、時折ダークなコンテンツが必要な作家向けには、標準命令チューニングモデル（Llama 3.3 70B、Qwen3 32B）が適切に構造化されたプロンプトで無検閲ファインチューンなしに大半の成人向け文学コンテンツを生成します。モデルに関わらず適用される倫理的基準：性的文脈での未成年者を含むコンテンツなし、識別可能な実在人物の非合意的描写なし、公開配布前の慎重な検討。',
        bullets: [
          'Hermes 3 Llama 3.3 ― フィクション向け最良オールラウンド無検閲モデル。強力な指示追従性、任意拒否が少ない。',
          'Dolphin 3.0 Mistral ― 16〜24 GBシステム向け軽量選択肢。Hermes 3より広い無検閲範囲。',
          'Standard Llama 3.3 70BとQwen3 32Bは構造化プロンプトで大半の成人向け文学コンテンツを生成 ― 多くのユースケースで無検閲ファインチューン不要。',
          'すべての無検閲モデルはOllamaまたはLM Studio経由で完全ローカル動作 ― データは機外に出ない。',
          'モデルに関わらず倫理的基準が適用：未成年者なし、実在人物の非合意的描写なし。',
          '配布責任：出力の扱いは他のいかなる著作物と同じ法的重みを持つ。',
          'ロールプレイフロントエンドでは、SillyTavernとAgnaiのどちらも無検閲Ollamaモデルとクリーンに接続できる。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '「無検閲」が実際に意味すること', anchor: '#what-uncensored-means' },
      { label: 'テスト方法', anchor: '#how-we-tested' },
      { label: '無検閲モデルが適切な場面', anchor: '#appropriate-use' },
      { label: '適切でない場面', anchor: '#inappropriate-use' },
      { label: 'モデル比較', anchor: '#models' },
      { label: 'セットアップ：OllamaとLM Studio', anchor: '#setup' },
      { label: '残る倫理的責任', anchor: '#ethics' },
      { label: '実践的なワークフロー', anchor: '#workflow' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '情報源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連読み物', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: '以下のスライドデッキでは：「無検閲」ファインチューニングが実際に意味すること（RLHF除去対ゼロ制約）；5モデル比較表（Hermes 3 Llama 3.3からDolphin 3.0 Mistral 7BまでのVRAM、拒否率、指示品質）；適切・不適切なユースケース；Ollamaセットアップコマンド；ローカルセットアップに関わらず残る倫理的責任；5つのよくある間違いを掲載。PDFを無検閲ローカルLLM創作活動リファレンスカードとしてダウンロードしてください。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**「無検閲」とは、モデルがRLHFの安全ファインチューニングを削減していることを意味し、制約が一切ないわけではありません。** 無検閲ファインチューンは引き続き指示形式に従い、キャラクターの一貫性を維持し、プロンプトで誘導できます。「何でも許可」のシステムではありません。',
          '**2026年のフィクション作家向け最良選択はHermes 3 Llama 3.3です。** 任意拒否が少なく、強力な指示追従性、良好なキャラクターボイス分化。一部の完全無検閲モデルが生成するような攻撃的な出力を望まない作家に適しています。',
          '**標準命令チューニングモデルも優れたプロンプトで大半の成人向け文学コンテンツを処理できます。** 暴力、道徳的複雑性、ダークな心理、文学散文における成人向けテーマは、無検閲ファインチューンをほとんど必要としません。拒否するのは明示的な性的コンテンツと現実的な有害の詳細な描写です。モデルを切り替える前に、あなたの作品がどのカテゴリに属するかを把握してください。',
          '**ローカルで実行することで、データは機外に出ません。** クラウドのToSは適用されません。コンテンツはログ記録、分析、トレーニングに使用されません。これが作家がローカル無検閲モデルを使用する主な構造的理由です――プライバシーとフィクションにおける使用制限なし。',
          '**ToS執行がないからといって倫理的責任が消えるわけではありません。** 無検閲モデルで作成したフィクションを配布する作家は、他の著者と同じ法的責任を負います：未成年者、実在人物、扇動、管轄区域固有の猥褻法はすべて、生成方法に関わらず適用されます。',
          '**Dolphin 3.0 Mistralは16〜24 GBのリグ向けの軽量オプションです。** Hermes 3より広い無検閲出力範囲ですが、複雑な場面での指示追従性は弱い。短編フィクション、プロンプト探索、スタイルテストに適しています。',
          '**SillyTavernとAgnaiのどちらも無検閲Ollamaモデルとクリーンに接続できます。** どちらのフロントエンドもOllamaのOpenAI互換エンドポイントを指し、無検閲モデルを選択するだけです。追加設定は不要。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**テストした無検閲モデル：** Hermes 3 Llama 3.3（主）、Dolphin 3.0 Mistral（副）。',
          '**バックエンド：** Ollama（主）、LM Studio（GUIセットアップの代替）。',
          '**ハードウェア：** Hermes 3 70B（Q4）は約42 GB必要。Dolphin 3.0 7Bは8 GBで動作、Dolphin 3.0 24Bは約16 GBで動作。',
          '**フロントエンド：** SillyTavern、Agnai、RisuAIはすべてOpenAI互換エンドポイント経由で無検閲Ollamaモデルと接続可能。',
          '**プライバシー：** 完全ローカル ― クラウドAPI呼び出しなし、ログなし、トレーニングデータ収集なし。',
          '**絶対的な倫理的制限：** 未成年者を含む性的コンテンツなし（絶対禁止）、識別可能な実在人物の非合意的な性的描写なし、現実の暴力を促進するコンテンツなし。',
          '**配布：** 公開・配布・共有するコンテンツは、生成方法に関わらず著作者の責任を負う。',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: '「無検閲」が実際に意味すること',
        content:
          '**ローカルLLMファインチューンの文脈での「無検閲」とは、RLHF（人間のフィードバックからの強化学習）の安全トレーニングを削減することを意味し、すべてのモデル制約を除去することではありません。** 標準命令チューニングモデルは、特定のコンテンツカテゴリを拒否させるRLHF層でトレーニングされています：明示的な性的コンテンツ、詳細な暴力、現実的な有害テンプレートに似たダークな心理。無検閲ファインチューン（Hermes 3、Dolphin、Wizard、Erebus）はベースモデルからこれらのRLHF層を削除または削減し、指示追従能力を維持しながら拒否動作を除去します。結果として、ダークなコンテンツを通じてフィクションプロンプトに従い、リダイレクト、説教、場面途中での停止を行わないモデルになります。',
        callouts: [
          {
            type: 'tip',
            text: '無検閲は制御不能を意味しません。無検閲モデルはプロンプト構造に従い、語数上限を守り、キャラクターの声を維持し、修正指示に応答します。違いは、未要求のコンテンツ警告を追加せず、道徳的にダークな方向を拒否せず、場面が害を描写していることを指摘するためにキャラクターを崩さないことです。フィクション執筆テンプレートの構造化プロンプトを、他のモデルと同様に使用してください――システムプロンプトとユーザープロンプトの区別は、モデルの無検閲レベルよりも重要です。その理由は[システムプロンプトとユーザープロンプトの違い](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)を参照してください。',
          },
        ],
        items: [
          '**削除されるもの：** 特定のコンテンツカテゴリの拒否動作（明示的な性的コンテンツ、グラフィックな暴力、ダークな心理コンテンツ）。',
          '**維持されるもの：** 指示追従、キャラクターの一貫性、プロンプト構造の遵守、言語品質。',
          '**無検閲の度合い：** Hermes 3は選択的に無検閲（成人向けコンテンツOK、ただし極端なコンテンツにはある程度のガードレールを維持）。Dolphinシリーズはより広く無検閲。完全アブリテレートモデル（Wizard-Uncensored、Erebus）はガードレール除去が最も積極的ですが、複雑なフィクションタスクでは指示追従が最も弱い。',
          '**ベースモデルの品質が重要：** ベースモデルが弱ければ、無検閲化は指示品質を劣化させます。Llama 3.3 70B上のHermes 3はLlama 3.3の強力な指示追従を維持。Mistral 7B上のDolphin 3.0はより小さなベースによって制限されます。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '無検閲ローカルLLMファインチューンはRLHF安全拒否層を除去しながら指示追従能力を維持します――リダイレクト、説教、場面途中での停止なしにダークな創作方向に従います。',
          },
          {
            type: 'plain-terms',
            text: 'Llama 3.3 70Bのような標準モデルは、拷問、道徳的に複雑な悪役の独白、または明示的なロマンティックコンテンツを描写する場面の途中で停止し、拒否するかソフトにします。同じベース上の無検閲版であるHermes 3は、同じ品質レベルで中断なく同じ場面を通じてプロンプトに従います。散文の品質は同等で、違いは拒否層にあります。',
          },
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'テスト方法',
        content:
          'このガイドのモデル評価は小規模な定性的テストに基づいています――方向性の指標であり、査読ベンチマークではありません。センシティブなテーマのモデル推奨を信頼するかどうかを判断する読者のために、方法論の透明性が重要です。',
        items: [
          '**プロンプトセット：** 5カテゴリで10プロンプト――悪役独白、成人向けロマンス場面、戦争フィクションでのグラフィックな暴力、道徳的に複雑な語り手、ダークな心理場面（各カテゴリ2プロンプト）。',
          '**モデルあたりの実行数：** 各プロンプトをモデルあたり3回実行。',
          '**拒否率：** モデルが指示なしに要求されたコンテンツを拒否、リダイレクト、または軽減した実行の割合。',
          '**ドリフト測定：** モデルが未要求のエスカレーション――プロンプトで指定された範囲を超えた不必要な極端さ――を追加した実行の割合。',
          '**バックエンド：** 全モデルにQ4_K_M量子化でOllama 0.5+を使用。',
          '**誠実さの制約：** 小規模な定性的テスト。結果はモデル間の方向性の違いを示しており、正確な数値測定ではありません。表内のドリフトと拒否率の値は代表的な判断として扱ってください。',
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: 'フィクションにおける無検閲モデルの適切な用途',
        content:
          '**無検閲モデルは、あなたのフィクションが本当にクラウドサービスが拒否するコンテンツを必要とし、読者が成人であり、目的が創作表現である場合に適切です。** ほとんどのフィクション作家は、以下の特定の用途で無検閲モデルを利用します。',
        items: [
          '**悪役心理と独白：** 道徳的に一貫した悪役キャラクターで、独白の途中でモデルがキャラクターを崩して免責事項を追加することなく展開できる。',
          '**成人向けのロマンティックおよび性的コンテンツ：** クラウドサービスがブロックする性的コンテンツを必要とするロマンス、エロティカ、または文学フィクションにおける成人フィクションキャラクター間の明示的な場面。',
          '**ジャンルフィクションでのグラフィックな暴力：** 戦争小説、犯罪スリラー、ホラー――暴力が感情的インパクトに不可欠で、軟化させると場面が台無しになる。',
          '**トラウマと心理的な暗さ：** サバイバーのナラティブ、依存症フィクション、虐待のストーリーライン――正真正銘の重みを持つために、飾り気のない描写が必要なコンテンツ。',
          '**道徳的に信頼できない語り手：** 間違っている語り手、害を合理化する語り手、フィクション内で残酷または偏見を持つ語り手――モデルが通常拒否する見解を表明する必要があるキャラクター。',
          '**ダークなロールプレイと協働フィクション：** 対立、道徳的複雑性、成人向けテーマを含む長期的なシナリオで、標準モデルが拒否を挿入してフィクションを壊す場合。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '無検閲モデルに切り替える前に、まず標準命令チューニングモデルでプロンプトをテストしてください。よく構造化されたシステムプロンプトと場面制約を使ったLlama 3.3 70BとQwen3 32Bは、拒否なしで大半の成人向け文学コンテンツを生成します。無検閲ファインチューンは明示的な性的コンテンツと最も極端な暴力の描写に最も価値を発揮します――心理的な暗さ、道徳的複雑性、またはダークなテーマ全般には必要ありません。',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: '適切でない場面',
        content:
          '**クラウド執行がないことは、法的・倫理的義務がないことを意味しません。** これらのカテゴリは、モデル、プラットフォーム、またはマシンがエアギャップかどうかに関わらず適用される絶対的な制限を表しています。',
        callouts: [
          {
            type: 'warning',
            text: '設定に関わらず絶対的な制限。ローカル設定は以下に対する法的・倫理的責任を除去しません：（1）未成年者を含む性的コンテンツ――ほぼすべての管轄区域で法律上の絶対禁止；（2）識別可能な実在人物の非合意的な性的描写――生成方法に関わらずNCII（非合意的な性的画像）に該当；（3）特定のターゲットに対する現実の暴力を促進するために設計されたコンテンツ。これらの制限は、モデルがローカル、クラウド、またはエアギャップマシンで動作していても適用されます。',
          },
        ],
        items: [
          '**未成年者を含む性的コンテンツ：** フィクション的フレーミングまたは生成方法に関わらず、すべての主要管轄区域で絶対的な法的禁止。これはモデルポリシーではなく法律です。',
          '**実在人物の非合意的な性的描写：** NCII法は、増加している管轄区域において識別可能な実在人物のAI生成コンテンツに適用されます。「AIが生成した」は抗弁になりません。',
          '**現実の害を促進するために設計されたコンテンツ：** フィクション的フレーミングを使用して、現実の暴力や害を直接可能にする情報やコンテンツを抽出することは、フィクション保護を除去します。',
          '**著作者責任なしの公開配布：** 公開・配布・共有するコンテンツは著作者の責任を負います。「AIが生成した」はその責任を移転しません。',
          '**ハラスメントフィクション：** 特定の実在人物を傷つけ、脅迫し、またはハラスメントすることを目的とするフィクションを生成すること――フィクションとして表現されているかどうかに関わらず。',
        ],
      },
      models: {
        id: 'models',
        title: 'モデル比較：フィクション向けの無検閲オプション',
        content:
          '**すべての無検閲モデルが同等ではありません――RLHF除去の度合いとベースモデルの品質の両方が、フィクション執筆ユースケースに重要です。**',
        columns: ['モデル', 'ベース', 'VRAM (Q4)', '拒否率', '指示品質', '極端化傾向', '最適用途'],
        rows: [
          { 'モデル': 'Hermes 3 Llama 3.3 70B', 'ベース': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', '拒否率': '選択的', '指示品質': '★★★★★', '極端化傾向': '低', '最適用途': '本格的フィクションのデフォルト選択 ― 最高の指示追従性と無検閲能力' },
          { 'モデル': 'Dolphin 3.0 Mistral 24B', 'ベース': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', '拒否率': '広範', '指示品質': '★★★★☆', '極端化傾向': '低〜中', '最適用途': '16〜24 GBシステム；広い範囲での成人向けコンテンツ' },
          { 'モデル': 'Dolphin 3.0 Mistral 7B', 'ベース': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', '拒否率': '広範', '指示品質': '★★★☆☆', '極端化傾向': '中', '最適用途': '低VRAMシステム；短編草稿、プロンプトテスト' },
          { 'モデル': 'Hermes 3 Llama 3.2 8B', 'ベース': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', '拒否率': '選択的', '指示品質': '★★★☆☆', '極端化傾向': '低', '最適用途': 'リソース制限環境；対話と短い場面' },
          { 'モデル': 'Standard Llama 3.3 70B', 'ベース': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', '拒否率': '限定的', '指示品質': '★★★★★', '極端化傾向': 'なし', '最適用途': 'ダークなテーマ、道徳的複雑性、暴力 ― 明示的な性的コンテンツ不要の場合' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '最も積極的な無検閲ファインチューンではなく、Hermes 3から始めてください。完全アブリテレートモデル（Wizard-Uncensored、Erebus）は最も広いコンテンツ範囲を持ちますが、複雑なフィクションタスクでの指示追従性が著しく低い――制約からの離脱が早く、長い生成では品質が低い散文を生成し、キャラクターの声の維持が信頼性に欠けます。無検閲コンテンツと品質散文の両方を必要とするフィクションには、Hermes 3の方がより良いトレードオフです。',
          },
        ],
        items: [
          '注意：古い無検閲ファインチューン――Midnight Miqu（Miqu-70Bベース）、Wizard-LM Uncensored、Mythomax――は2024年にはリーダーでしたが、2026年には品質と指示追従性の指標でHermes 3とDolphin 3.0に追い抜かれています。古い記事で推奨されていても、現在の同等品はHermes 3（選択的無検閲向け）とDolphin 3.0（より広い範囲向け）です。',
        ],
      },
      setup: {
        id: 'setup',
        title: 'セットアップ：OllamaとLM Studio',
        content:
          '**OllamaとLM StudioはともにOpenAI互換のローカルAPI経由で無検閲モデルを提供します――つまり、SillyTavern、Agnai、ローカルエンドポイントと通信するその他のツールは追加設定なしで動作します。**',
        promptExamples: [
          {
            label: 'Ollama：Hermes 3のプルと実行',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama：Dolphin 3.0 Mistral 24Bのプルと実行',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**Ollamaのインストール：** `brew install ollama`（macOS）またはollama.comからダウンロード（Windows/Linux）。`ollama serve`コマンドで`http://localhost:11434`にOpenAI互換APIが起動します。',
          '**LM Studioのインストール：** lmstudio.aiからダウンロード。GGUFモデルファイルを直接インポート。ローカルサーバータブが`http://localhost:1234`にOpenAI互換エンドポイントを公開します。',
          '**SillyTavern接続：** API設定で「OpenAI互換」を選択し、ベースURLを`http://localhost:11434/v1`（Ollama）または`http://localhost:1234/v1`（LM Studio）に設定。APIキーフィールドには任意の文字列を入力（フィールドで必須ですがローカルでは検証されません）。',
          '**Agnai接続：** 同じOpenAI互換エンドポイント。アダプター設定でローカルURLを入力。SillyTavernのセットアップと同一です。',
          '**モデル切り替え：** Ollamaで`ollama run [model-name]`で標準モデルと無検閲モデルを切り替え――複数のモデルを同時にロードでき、サーバーを再起動せずにセッション単位で切り替えられます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '無検閲モデルと標準モデルを分けておきたい作家は、OLLAMA_HOST環境変数を使って異なるポートに2つのOllamaインスタンスを作成してください。例：OLLAMA_HOST=127.0.0.1:11435 ollama serve。これにより、SillyTavernやAgnaiを無検閲インスタンスに向けながら、標準Ollamaインスタンスを他のタスクに維持できます。',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: '残る倫理的責任',
        content:
          '**クラウドポリシー執行なしでモデルをローカルで実行しても、著作者および発行者としての責任は除去されません。** 人間が執筆するフィクションに適用される倫理的フレームワークは、AI支援フィクションにも等しく適用されます。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルセットアップはクラウドToS制限を除去しますが、著作者の法的責任、害の促進責任、または公開された創作物に適用される倫理的義務は除去しません。',
          },
          {
            type: 'plain-terms',
            text: 'ローカル無検閲モデルを、あなたがどんな指示でも従う非常に有能な執筆アシスタントだと考えてください。あなたが生産・配布するものの法的・倫理的重みはあなたにあり、ツールにはありません。未成年者、実在人物、猥褻、扇動に関する同じ法律が、公開配布されるAI生成フィクションにも適用されます。プラットフォームがローカルでのコンテンツ生成を禁止しないことは、それを公開した場合にあなたが法的に負う責任を変えません。',
          },
        ],
        items: [
          '**著作者責任（日本）：** 日本では、AIが生成したコンテンツを配布する場合、著作者として扱われます。「AIが生成した」は著作権を移転せず、法律に違反するコンテンツに対する責任を除去しません。METI（経済産業省）の2024年AIガバナンスガイドラインは、企業展開において生成AIシステムの安全性・透明性・責任を明確に要求しています。',
          '**アジア太平洋地域のデータ残留：** 日本のAPPI（個人情報保護法）は、個人を特定できるコンテンツを処理する場合に適用されます。フィクション作家がクラウドモデルではなくローカルモデルを使用する主な利点の1つは、データが国内（またはデバイス上）に留まることです。これはAPPI準拠において重要です。METI AI事業者ガイドラインは公正性と透明性も要求しており、企業ユーザーは記録の保持を検討すべきです。',
          '**管轄区域の認識：** 猥褻、NCII、有害コンテンツ法は管轄区域によって異なります。日本での違反の可能性があるコンテンツには、児童ポルノ禁止法（第7条）、名誉毀損（刑法第230条）、わいせつ物頒布（刑法第175条）が含まれます。',
          '**実在人物：** 明らかにフィクション的フレームでも、識別可能な実在人物についての否定的なフィクションコンテンツを生成することは、コンテンツに応じて名誉毀損とNCIIリスクを伴います。',
          '**配布のための年齢確認：** 無検閲モデルで生成した成人向けコンテンツを公開プラットフォームで配布する場合、成人向けコンテンツ発行者に適用される年齢確認義務があなたにも適用されます。',
          '**責任あるアーカイブ：** ローカル生成の無検閲コンテンツは、他の機密素材と同じストレージ規律で扱うべきです――クラウド同期ディレクトリには保存せず、意図せず共有しないこと。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '無検閲モデルを使用する作家の最も一般的な倫理的誤りは、ローカル生成をコンテキストフリーゾーンとして扱うことです。ローカル生成はプラットフォームポリシー執行がないことを意味します――法律なし、責任なし、害なしを意味しません。コンテンツモデレーターの不在は許可を付与しません。',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'フィクション作家のための実践的なワークフロー',
        content:
          '**無検閲モデルを使用するほとんどのフィクション作家は、標準モデルのデフォルトの置き換えとしてではなく、特定の場面に使用します。** 以下のワークフローはこのターゲットを絞った使用をサポートします。',
        items: [
          '**標準モデルで標準的な場面を草稿する。** Llama 3.3 70BまたはQwen3 32Bは、ダークなテーマ、道徳的複雑性、心理的深さを含む大半の文学散文を処理します。標準モデルが拒否するコンテンツを特に必要とする場面のために無検閲モデルを予約してください。',
          '**ターゲットを絞った場面には無検閲に切り替える。** Ollamaで特定の場面に`ollama run nous-hermes3:70b-llama3.3-q4_K_M`を実行。SillyTavernでは、セッションごとにAPI設定でモデルを変更。セッション間でデータは移動しません。',
          '**同じプロンプトテンプレートを使用する。** [フィクション作家向けローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers)の5パート場面テンプレート、サブテキスト対話構造、キャラクター矛盾プロンプトは無検閲モデルで同一に機能します。異なるプロンプト構造は必要ありません。',
          '**法的理由で人間向けのブリーフに入れないようなコンテンツ生成指示を追加しない。** モデルはツールであり、許可構造ではありません。法的理由で人間のイラストレーターやゴーストライターへのブリーフに含めない指示は、モデルプロンプトにも含めないでください。',
          '**配布前に出力をレビューする。** 無検閲モデルは時折要求された暗さを超えたり、ステレオタイプ化したりするコンテンツを生成します。AI支援コンテンツの標準的な編集レビューを適用してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ライティングプロジェクトごとに「モデルログ」を保持してください――どのモデルがどの場面を生成したかを記録するプレーンテキストファイル。改訂に役立ち（どのモデルが場面を生成したかを知ることで、どこに改訂リクエストを向けるかがわかります）、AI支援を開示する場合の帰属の透明性のため、後で場面が問題になった場合の監査のために有用です。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**最も積極的な無検閲モデルをデフォルトにすること。** 完全アブリテレートモデル（Wizard-Uncensored、Erebus）は複雑な場面での指示追従が最も弱い。Hermes 3はフィクション品質にとってより良いトレードオフです。',
          '**標準モデルが生成するコンテンツに無検閲モデルを使用すること。** 文学散文での道徳的複雑性、ダークな心理、暴力、成人向けテーマは、無検閲ファインチューンをほとんど必要としません。切り替える前に正確に何が必要かを把握してください。',
          '**ローカル生成を法的コンテキストフリーゾーンとして扱うこと。** クラウドポリシー執行がないことは法律がないことではありません。配布、実在人物、未成年者に対する著作者責任は関係なく適用されます。',
          '**語数上限を指定しないこと。** 無検閲モデルはスペースを埋めるためにダークなコンテンツをパッドするのは他のモデルと同様です。フィクションテンプレートからの同じ語数上限制約を使用してください。',
          '**クラウド同期ディレクトリに出力を保存すること。** iCloud、Google Drive、またはOneDriveに同期されたローカル生成の成人向けコンテンツは、それらのプラットフォームの利用規約に違反する可能性があります。ローカルのみに保存してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          'Hermes 3モデルカードとファインチューニング手法 ― [Nous Research](https://nousresearch.com)',
          'Dolphin 3.0 Mistral技術ドキュメント ― [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'RLHFとアライメント技術の概要 ― [Anthropic Research](https://anthropic.com/research)',
          'EU AI法第5条 ― 未成年者を含むコンテンツを含む禁止AI慣行 ― [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII（非合意的な性的画像）― 法的フレームワーク概要 ― [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '無検閲ローカルLLMの実行は合法ですか？',
            a: '無検閲ローカルLLMの実行はほとんどの管轄区域で合法です――オープンソースAIソフトウェアを所持することを禁じる法律はありません。それで生成・配布するものは、他の著作コンテンツと同じ法律に従います：猥褻法、NCII法、名誉毀損法、および未成年者を含むコンテンツに関する法律。実行が合法であることは、無制限に公開・共有・配布することが合法であることを意味しません。',
          },
          {
            q: 'Hermes 3とDolphin 3.0の違いは何ですか？',
            a: 'Hermes 3（Nous Research）は選択的に無検閲――成人向けコンテンツの拒否を削減しながら、極端なカテゴリにはある程度のガードレールを維持しています。指示追従性は優れており、ベースのLlama 3.3 70Bモデルに近い。Dolphin 3.0（Cognitive Computations）はより広いコンテンツ範囲で広く無検閲ですが、複雑な多制約の場面では指示追従性がやや弱い。Hermes 3は散文の品質が重要なフィクションのデフォルト選択として優れており、Dolphin 3.0は16〜24 GBシステムで最も広いコンテンツ範囲が必要な場合の選択です。',
          },
          {
            q: 'ダークなフィクションを書くために無検閲モデルが必要ですか？',
            a: 'ほとんどのダークフィクションには必要ありません。Llama 3.3 70BやQwen3 32Bのような標準命令チューニングモデルは、適切にプロンプトを与えれば暴力、道徳的複雑性、ダークな心理、悪役の内面、トラウマ、ほとんどの文学的暗さを拒否なしで生成します。確実に拒否するのは明示的な性的コンテンツと、より狭い範囲の極端なシナリオです。ダークフィクションに明示的な性的コンテンツが含まれていない場合は、まず標準モデルを試してください――無検閲版が必要でないかもしれません。',
          },
          {
            q: 'SillyTavernやAgnaiで無検閲モデルを使用できますか？',
            a: 'はい。SillyTavernもAgnaiも、ポート11434でローカルに動作するOllamaを含む、OpenAI互換エンドポイントに接続します。Ollamaで無検閲モデルをプル、`ollama serve`を開始し、SillyTavernまたはAgnaiでOpenAI互換APIを選択して`http://localhost:11434/v1`を指定します。モデルリストから無検閲モデルを選択するだけです。追加設定は不要です。',
          },
          {
            q: 'ホームネットワークで無検閲モデルを使用しても安全ですか？',
            a: 'localhost（OllamaとLM Studioのデフォルト設定）にバインドするよう設定されている場合は安全です。APIはあなたのマシンからしかアクセスできません。ホームネットワークにポートを公開する場合（電話からアクセスするためなど）、ファイアウォールルールが信頼できるデバイスにのみアクセスを制限するようにしてください。認証なしでOllama APIをパブリックインターネットに公開しないでください――デフォルト設定には認証がありません。',
          },
          {
            q: 'ローカルで生成したコンテンツはどうなりますか？',
            a: '自動的には何も起きません。ローカル生成コンテンツはいかなるサーバーにも送信されず、クラウドサービスにログ記録されず、モデルトレーニングに使用されません。チャット履歴ファイル、キャラクターカードなど、アプリケーションのローカルストレージ内でのみあなたのデバイスに存在します。保持するもの、削除するもの、共有するものをあなたが管理します。これがクラウドベースの代替に対してローカル無検閲生成が持つ主要な構造的プライバシー上の優位性です。',
          },
          {
            q: '同じライティングプロジェクトで無検閲モデルと標準モデルを混在させることはできますか？',
            a: 'はい、これが推奨ワークフローです。散文の大部分には標準モデル（Llama 3.3 70B、Qwen3 32B）を使用してください――標準モデルはほとんどのダークなコンテンツに高品質な文学散文を生成します。標準モデルが拒否するコンテンツを必要とする特定の場面には、Hermes 3またはDolphin 3.0に切り替えてください。同じプロンプトテンプレートが両方で機能します。散文スタイルは十分に一貫しているため、場面単位の混在は出力で検出できません。',
          },
          {
            q: '無検閲モデルでの生成は著作権に影響しますか？',
            a: 'いいえ――AI生成コンテンツの著作権状況は、モデルが検閲されているかどうかに関わらず同一です。AIアウトプットの著作権法は2026年時点でほとんどの管轄区域で未解決です。一般的な立場は、人間が著作した要素（プロンプトデザイン、選択、配置、実質的な編集）は保護可能かもしれませんが、生のAIアウトプットはそうではないというものです。無検閲モデルの使用はこの分析を変えません。',
          },
          {
            q: '無検閲ファインチューンは一般知識を失いますか？',
            a: '狭い領域ではわずかに失います。無検閲化ファインチューンは通常、ベースモデルから事実記憶、数学、コーディングベンチマークでわずかに逸脱する可能性のある完全精度の再トレーニングパスです――通常、標準ベンチマークで1〜3パーセントポイント。フィクション執筆タスクでは、出力品質で検出できません。フィクションと技術作業（研究ノート、コードレビュー）の両方に同じモデルが必要な場合は、標準版と無検閲版の両方をインストールしておき、タスクに応じて切り替えてください。Hermes 3は完全アブリテレートモデルより一般的な能力をより良く維持します。',
          },
          {
            q: 'これらのモデルは監視されていますか、それとも匿名ですか？',
            a: 'OllamaまたはLM Studio経由でローカルで動作するオープンウェイトモデルには、テレメトリ、リモートロギング、使用状況追跡がありません。モデルの作者（Hermes 3のNous Research、DolphinのCognitive Computations）は生成内容を見ることができません――推論中にサーバーコールバックはありません。テレメトリのリスクがあるのはフロントエンド（SillyTavern、Agnai――両方ともデフォルトでテレメトリなし）またはOSからのみです。インストール後に一度ネットワークモニター（macOSのLittle Snitch、LinuxのWireshark）を実行して確認してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連読み物',
        items: [
          '[2026年創作向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026) ― モデル比較。ナラティブ生成のモデル選択、サンプリング設定、パフォーマンスを含む。',
          '[フィクション作家向けローカルLLMプロンプト：テンプレートとテクニック](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) ― 場面執筆、対話、世界構築、スタイル転換のプロンプトテンプレート。標準モデルと無検閲モデルの両方で機能する。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) ― キャラクターカードロールプレイのフロントエンド比較。Ollamaバックエンドのセットアップ手順を含む。',
          '[小説執筆と脚本向けローカルLLMの使い方](/ja/power-local-llm/local-llm-screenwriting-and-novel-drafting) ― 長編フィクションプロジェクトのための長編草稿ワークフローとチャプター管理。',
          '[プロンプトインジェクションとLLMセキュリティ](/ja/prompt-engineering/prompt-injection-and-security) ― 敵対的プロンプトがセキュリティ層とどう相互作用するか。無検閲化が何を除去するかを理解するための有用な背景。',
          '[システムプロンプトとユーザープロンプトの違い](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) ― モデル動作を管理する権限構造。一貫した無検閲出力にはモデル選択よりシステムプロンプトの区別の方が重要。',
          '[プライベートビジネスデータのためのローカルRAG](/ja/power-local-llm/local-rag-for-private-business-data) ― プライバシーに敏感なユースケースのためのローカル専用AIセットアップ。ローカルフィクション生成と同じプライバシー原則。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: '无审查本地LLM与创意写作：创作者何时需要它们（2026年）',
    seoTitle: '无审查本地LLM创意写作2026：适用场景与伦理责任',
    intro:
      '无审查本地LLM允许小说作家生成云服务拒绝的成人向、道德复杂或黑暗内容——数据完全不离开本机。本指南涵盖推荐模型、通过Ollama或LM Studio的配置方法、即使没有服务条款约束仍然适用的真实伦理责任，以及无审查模型适用和不适用的具体使用场景。',
    metaDescription:
      '无审查本地LLM创意写作：推荐模型、Ollama配置、伦理责任、适用场景，以及创作者应当保持的内容底线。',
    twitterDescription:
      '小说作家的无审查本地LLM——推荐模型、Ollama配置和真实伦理：何时适用，创作者还负有哪些责任。',
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
      '小说作家、长篇小说作者、游戏叙事设计师以及需要本地LLM生成成人向或黑暗内容而不受云服务拒绝的创意专业人士，同时希望了解其伦理责任的用户。',
    readTime: '阅读约13分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '无审查本地LLM创意写作',
    targetKeywords: [
      '无审查本地llm创意写作',
      '无审查ollama模型',
      'hermes 3 创意写作',
      'dolphin mistral 无审查配置',
      '本地llm黑暗小说',
      '无审查ai写作伦理',
    ],
    leadAnswerBlock:
      '**无审查本地LLM适合需要生成道德复杂角色、黑暗主题、暴力、成人浪漫内容或云端模型拒绝生成的不可靠叙述者声音的小说作家。仅当输出用于面向成年读者的创意小说时方为适用——不应作为生成现实有害内容、非合意描绘真实人物或涉及未成年人性内容的工具。2026年最适合小说写作场景的模型是Hermes 3 Llama 3.3（拒绝率低、指令遵循性强）和Dolphin 3.0 Mistral（更广泛的无审查范围、更小的内存占用）。两款模型均可通过Ollama或LM Studio完全本地运行，数据不离开本机。使用这些模型的伦理责任并非为零——使用无审查模型的创作者在分发、未成年人和真实人物方面仍有义务，任何本地配置都无法消除。**',
    quickAnswerTop: {
      zh: {
        question: '2026年小说作家应使用哪些无审查本地LLM？',
        answer:
          'Hermes 3 Llama 3.3是2026年小说创作的最佳全能无审查模型——强大的指令遵循性、良好的角色声音分化、较少的任意拒绝，且不会出现某些完全无审查微调模型产生的激进输出。Dolphin 3.0 Mistral是16至24 GB系统的轻量级替代选项。对于只需偶尔使用黑暗内容而非持续无审查输出的作家，标准指令调优模型（Llama 3.3 70B、Qwen3 32B）配合结构良好的提示词可以在无需无审查微调的情况下生成大多数成人向文学内容。无论使用何种模型，伦理底线始终适用：不得生成涉及未成年人的性内容，不得非合意描绘可识别的真实人物，公开分发前需谨慎考虑。',
        bullets: [
          'Hermes 3 Llama 3.3 ― 小说创作最佳全能无审查模型，指令遵循性强，任意拒绝少。',
          'Dolphin 3.0 Mistral ― 16至24 GB系统的轻量选项，无审查范围比Hermes 3更广。',
          'Standard Llama 3.3 70B和Qwen3 32B配合结构化提示词可生成大多数成人向文学内容——许多场景无需无审查微调。',
          '所有无审查模型均可通过Ollama或LM Studio完全本地运行——数据不离开本机。',
          '无论使用何种模型，伦理底线均适用：不涉及未成年人，不非合意描绘真实人物。',
          '分发责任：您对输出内容的处理与任何其他著作内容具有同等法律效力。',
          'SillyTavern和Agnai均可与无审查Ollama模型无缝连接。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '「无审查」的真实含义', anchor: '#what-uncensored-means' },
      { label: '测试方法', anchor: '#how-we-tested' },
      { label: '无审查模型的适用场景', anchor: '#appropriate-use' },
      { label: '不适用场景', anchor: '#inappropriate-use' },
      { label: '模型对比', anchor: '#models' },
      { label: '配置：Ollama与LM Studio', anchor: '#setup' },
      { label: '仍需承担的伦理责任', anchor: '#ethics' },
      { label: '实践工作流', anchor: '#workflow' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '信息来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: '以下幻灯片包含：「无审查」微调的真实含义（RLHF移除对比零约束）；5模型对比表（Hermes 3 Llama 3.3至Dolphin 3.0 Mistral 7B，含VRAM、拒绝率、指令质量）；适用与不适用场景；Ollama配置命令；无论本地配置如何仍需承担的伦理责任；以及5个常见错误。将PDF作为无审查本地LLM创意写作参考卡下载。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**「无审查」意味着模型减少了RLHF安全微调——而非完全没有约束。** 无审查微调模型仍然遵循指令格式、维持角色一致性，并可通过提示词引导。它们并非「什么都可以」的系统。',
          '**Hermes 3 Llama 3.3是2026年小说作家的最佳全能选择。** 任意拒绝更少、指令遵循性强、角色声音分化良好。适合既需要该能力又不希望出现某些完全无审查模型产生的激进输出的作家。',
          '**标准指令调优模型配合优质提示词可处理大多数成人向文学内容。** 暴力、道德复杂性、黑暗心理和文学散文中的成人主题很少需要无审查微调。它们可靠拒绝的是明确的性内容和现实伤害的详细描述。切换模型前先明确您的作品属于哪个类别。',
          '**本地运行意味着数据不离开本机。** 云端服务条款不适用。内容不会被记录、分析或用于训练。这是作家使用本地无审查模型的主要结构性原因——隐私保护加上创作不受使用限制。',
          '**伦理责任不会因没有ToS执行而消失。** 使用无审查模型发布小说的创作者与任何其他作者承担相同的法律责任：无论生成方式如何，未成年人、真实人物、煽动性内容以及各司法管辖区的特定法律均适用。',
          '**Dolphin 3.0 Mistral是16至24 GB配置的轻量级选择。** 无审查输出范围比Hermes 3更广，但复杂场景中的指令遵循性较弱。适合短篇创作、提示词探索和风格测试。',
          '**SillyTavern和Agnai均可与无审查Ollama模型无缝连接。** 将任一前端指向Ollama的OpenAI兼容端点并选择无审查模型即可，无需额外配置。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**测试的无审查模型：** Hermes 3 Llama 3.3（主要）、Dolphin 3.0 Mistral（次要）。',
          '**后端：** Ollama（主要）、LM Studio（GUI配置替代选项）。',
          '**硬件：** Hermes 3 70B（Q4量化）约需42 GB；Dolphin 3.0 7B运行需8 GB；Dolphin 3.0 24B约需16 GB。',
          '**前端：** SillyTavern、Agnai、RisuAI均可通过OpenAI兼容端点连接无审查Ollama模型。',
          '**隐私：** 完全本地——无云端API调用，无日志记录，无训练数据收集。',
          '**伦理硬性底线：** 不得涉及未成年人的性内容（绝对禁止），不得非合意性描绘可识别的真实人物，不得生成旨在促进现实暴力的内容。',
          '**分发：** 您发布的内容承担作者责任，与生成方式无关。',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: '「无审查」的真实含义',
        content:
          '**本地LLM微调语境中的「无审查」指减少RLHF（基于人类反馈的强化学习）安全训练——而非移除所有模型约束。** 标准指令调优模型通过RLHF层训练，使其拒绝特定类别内容：明确的性内容、详细暴力、类似现实伤害模板的黑暗心理内容。无审查微调（Hermes 3、Dolphin、Wizard、Erebus）从基础模型中削减或移除这些RLHF层，保留指令遵循能力的同时移除拒绝行为。结果是一个能够跟随您的小说提示词穿越黑暗内容而不重定向、说教或在场景中途停止的模型。',
        callouts: [
          {
            type: 'tip',
            text: '无审查并不意味着无法管控。无审查模型仍然遵循提示词结构、尊重字数上限、维持角色声音，并响应修改指令。区别在于它们不会主动添加内容警告、拒绝道德上黑暗的方向，也不会为了指出某个场景描绘了伤害而打破角色。像使用其他任何模型一样使用创作模板中的结构化提示词——系统提示词与用户提示词的区分比模型的无审查程度更重要。了解原因，请参阅[系统提示词与用户提示词的区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)。',
          },
        ],
        items: [
          '**被移除的内容：** 针对特定内容类别的拒绝行为（明确的性内容、图形化暴力、黑暗心理内容）。',
          '**被保留的内容：** 指令遵循、角色一致性、提示词结构遵守、语言质量。',
          '**无审查程度的差异：** Hermes 3是选择性无审查（成人内容可以，但对极端内容保留部分护栏）。Dolphin系列无审查范围更广。完全消融模型（Wizard-Uncensored、Erebus）护栏移除最积极——但对复杂小说任务的指令遵循最弱。',
          '**基础模型质量很重要：** 如果基础模型较弱，无审查会降低指令质量。Llama 3.3 70B上的Hermes 3保留了Llama 3.3的强大指令遵循性；Mistral 7B上的Dolphin 3.0受限于较小的基础。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '无审查本地LLM微调移除RLHF安全拒绝层同时保留指令遵循能力——可遵循黑暗创作方向而不重定向、说教或在场景中途停止。',
          },
          {
            type: 'plain-terms',
            text: 'Llama 3.3 70B等标准模型在描绘酷刑、道德复杂的反派独白或明确浪漫内容的场景中途会停下来，要么拒绝要么软化输出。同一基础上的无审查版本Hermes 3会以相同质量水平在同一场景中不间断地遵循您的提示词。散文质量是等同的，区别在于拒绝层。',
          },
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '测试方法',
        content:
          '本指南的模型评价基于小规模定性测试——这是一个方向性指标，不是同行评审基准。对于读者需要决定是否信任某敏感主题模型推荐的话题，方法论的透明度至关重要。',
        items: [
          '**提示词集：** 5个类别共10个提示词——反派独白、成人浪漫场景、战争小说中的图形化暴力、道德复杂叙述者、黑暗心理场景（每类2个提示词）。',
          '**每个模型的运行次数：** 每个提示词每个模型运行3次。',
          '**拒绝率：** 模型在未受指令情况下拒绝、重定向或软化所请求内容的运行比例。',
          '**漂移测量：** 模型添加未经请求的升级——超出提示词指定范围的不必要极端内容——的运行比例。',
          '**后端：** 所有模型使用Q4_K_M量化的Ollama 0.5+。',
          '**诚实约束：** 小规模定性测试。结果表明模型间的方向性差异，非精确数值测量。将表格中的极端化漂移和拒绝率值视为代表性判断。',
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: '无审查模型的适用场景',
        content:
          '**当您的小说真正需要云服务拒绝的内容、读者为成年人且目的是创意表达时，无审查模型才适合使用。** 大多数小说作家出于以下一种或多种特定场景选择无审查模型。',
        items: [
          '**反派心理与独白：** 道德上连贯的反派角色，不会被模型在独白中途打破角色来添加免责声明。',
          '**成人向浪漫和性内容：** 浪漫小说、情色或文学小说中成人虚构角色之间的明确场景，需要云服务屏蔽的性内容。',
          '**类型小说中的图形化暴力：** 战争小说、犯罪惊悚、恐怖——暴力对情感冲击至关重要的场景，软化会使场景失效。',
          '**创伤与心理黑暗：** 幸存者叙事、成瘾小说、虐待故事线——需要直白描绘才能具有真实重量的内容。',
          '**道德上不可靠的叙述者：** 错误的叙述者、合理化伤害的叙述者、在小说中残忍或带有偏见的叙述者——需要模型表达它通常会拒绝的观点的角色。',
          '**黑暗角色扮演和协作创作：** 涉及冲突、道德复杂性和成人主题的长期场景，标准模型会打破创作来插入拒绝。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '切换到无审查模型之前，先用标准指令调优模型测试您的提示词。带有良好结构系统提示词和场景约束的Llama 3.3 70B和Qwen3 32B可以在无拒绝的情况下生成大多数成人向文学内容。无审查微调对明确的性内容和最极端的暴力描绘价值最大——对心理黑暗、道德复杂性或黑暗主题本身并不必要。',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: '不适用场景',
        content:
          '**缺乏云端执行并不意味着缺乏法律和伦理义务。** 这些类别代表无论模型、平台还是机器是否隔离均适用的硬性限制。',
        callouts: [
          {
            type: 'warning',
            text: '无论何种配置均适用的硬性限制。任何本地配置都无法消除以下方面的法律或伦理责任：（1）涉及未成年人的性内容——几乎所有司法管辖区法律上的绝对禁止；（2）可识别真实人物的非合意性描绘——无论生成方式如何均构成NCII（非合意亲密图像）；（3）旨在对特定目标实施现实暴力的内容。无论模型在本地、云端还是隔离机器上运行，这些限制均适用。',
          },
        ],
        items: [
          '**涉及未成年人的性内容：** 无论虚构框架或生成方式，在所有主要司法管辖区均为绝对法律禁止。这不是模型政策——这是法律。',
          '**真实人物的非合意性描绘：** 在越来越多的司法管辖区，NCII法律适用于可识别真实人物的AI生成内容。「由AI生成」不构成抗辩理由。',
          '**旨在促进现实伤害的内容：** 使用虚构框架来提取直接使现实暴力或伤害成为可能的信息或内容，会消除虚构保护。',
          '**无作者责任的公开分发：** 您发布、分发或分享的内容承担作者责任。「AI创作的」不能转移该责任。',
          '**骚扰性创作：** 生成目的是伤害、恐吓或骚扰特定真实人物的创作内容——无论是否以虚构形式呈现。',
        ],
      },
      models: {
        id: 'models',
        title: '模型对比：小说创作的无审查选项',
        content:
          '**并非所有无审查模型都相同——RLHF移除程度和基础模型质量对小说写作场景都很重要。**',
        columns: ['模型', '基础', 'VRAM (Q4)', '拒绝率', '指令质量', '极端化倾向', '最适用于'],
        rows: [
          { '模型': 'Hermes 3 Llama 3.3 70B', '基础': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', '拒绝率': '选择性', '指令质量': '★★★★★', '极端化倾向': '低', '最适用于': '严肃小说的默认选择——最佳指令遵循性与无审查能力' },
          { '模型': 'Dolphin 3.0 Mistral 24B', '基础': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', '拒绝率': '广泛', '指令质量': '★★★★☆', '极端化倾向': '低至中', '最适用于': '16至24 GB系统；更广范围的成人内容' },
          { '模型': 'Dolphin 3.0 Mistral 7B', '基础': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', '拒绝率': '广泛', '指令质量': '★★★☆☆', '极端化倾向': '中', '最适用于': '低VRAM系统；短篇草稿、提示词测试' },
          { '模型': 'Hermes 3 Llama 3.2 8B', '基础': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', '拒绝率': '选择性', '指令质量': '★★★☆☆', '极端化倾向': '低', '最适用于': '资源受限环境；对话和较短场景' },
          { '模型': 'Standard Llama 3.3 70B', '基础': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', '拒绝率': '有限', '指令质量': '★★★★★', '极端化倾向': '无', '最适用于': '黑暗主题、道德复杂性、暴力——不需要明确性内容的场景' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '从Hermes 3开始，而非最激进的无审查微调。完全消融模型（Wizard-Uncensored、Erebus）内容范围最广，但在复杂小说任务中的指令遵循性明显较弱——更快偏离约束、在较长生成中散文质量较低、角色声音维持可靠性不足。对于既需要无审查内容又需要高质量散文的小说，Hermes 3是更好的权衡选择。',
          },
        ],
        items: [
          '注意：较旧的无审查微调——Midnight Miqu（基于Miqu-70B）、Wizard-LM Uncensored、Mythomax——在2024年曾是领先者，但2026年在质量和指令遵循指标上已被Hermes 3和Dolphin 3.0超越。如果在较旧文章中看到推荐，当前的同等选择是Hermes 3（选择性无审查）和Dolphin 3.0（更广范围）。',
        ],
      },
      setup: {
        id: 'setup',
        title: '配置：Ollama与LM Studio',
        content:
          '**Ollama和LM Studio均通过OpenAI兼容的本地API提供无审查模型服务——这意味着SillyTavern、Agnai以及任何其他与本地端点通信的工具无需额外配置即可使用。**',
        promptExamples: [
          {
            label: 'Ollama：拉取并运行Hermes 3',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama：拉取并运行Dolphin 3.0 Mistral 24B',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**安装Ollama：** `brew install ollama`（macOS）或从ollama.com下载（Windows/Linux）。`ollama serve`命令在`http://localhost:11434`启动OpenAI兼容API。',
          '**安装LM Studio：** 从lmstudio.ai下载。直接导入GGUF模型文件；本地服务器选项卡在`http://localhost:1234`提供OpenAI兼容端点。',
          '**连接SillyTavern：** 在API设置中选择「OpenAI兼容」并将基础URL指向`http://localhost:11434/v1`（Ollama）或`http://localhost:1234/v1`（LM Studio）。在API密钥字段输入任意字符串（字段要求但本地不验证）。',
          '**连接Agnai：** 同一OpenAI兼容端点；在适配器设置中输入本地URL。与SillyTavern设置完全相同。',
          '**切换模型：** 在Ollama中用`ollama run [model-name]`在标准模型和无审查模型之间切换——可同时加载多个模型，无需重启服务器即可按会话切换。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '希望将无审查模型和标准模型分开的创作者，可以使用OLLAMA_HOST环境变量在不同端口创建两个Ollama实例。例如：OLLAMA_HOST=127.0.0.1:11435 ollama serve。这样可以将SillyTavern或Agnai指向无审查实例，同时为其他任务保留标准Ollama实例。',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: '仍需承担的伦理责任',
        content:
          '**在没有云端政策执行的情况下在本地运行模型，并不能消除您作为创作者和发布者的责任。** 适用于人类撰写小说的伦理框架同样适用于AI辅助创作。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地配置消除了云端ToS限制，但不能消除作者的法律责任、促进伤害的责任，以及适用于任何已发布创意作品的伦理义务。',
          },
          {
            type: 'plain-terms',
            text: '将本地无审查模型想象成一个会遵循您任何指令的极其能干的写作助手。您生产和分发内容的法律和伦理重量在您这里，而不在工具那里。适用于人类撰写小说的相同法律——关于未成年人、真实人物、猥亵内容和煽动性内容——同样适用于公开分发的AI生成小说。没有平台在本地禁止您生成内容，并不改变您发布后在法律上需承担的责任。',
          },
        ],
        items: [
          '**中国（数据安全法）：** 中国2021年《数据安全法》（DSL）和《网络安全法》对数据处理建立了严格框架。本地推理在技术上将数据保留在设备上，有助于合规——但如果您通过任何联网平台分发AI辅助内容，运营商和内容合规义务可能仍然适用。对于使用Qwen2.5或其他中文语言模型的中国企业，本地推理可以满足数据本地化要求，同时规避云端内容审核的不确定性。',
          '**亚太地区（数据跨境）：** 数据残留框架在亚太地区差异很大。本地推理是满足多个亚太司法管辖区数据主权要求的技术路径——特别是金融和医疗行业，这些行业有强制要求数据不离开特定地理范围。',
          '**企业部署：** 在中国，银行和金融机构（受中国人民银行法规管辖）、医疗机构（受卫生健康委法规管辖）和律师事务所（受司法部法规管辖）在处理AI生成内容时面临额外义务。本地运行模型消除了数据传输风险，但内容本身仍受行业特定法规约束。',
          '**作者责任：** 您是AI辅助小说的作者。「AI生成的」不转移版权，不消除责任，也不构成针对违法内容的抗辩理由。',
          '**司法管辖区认知：** 猥亵内容、NCII和有害内容法律因司法管辖区而异。在一个国家合法生产的内容，在另一个国家分发可能构成刑事犯罪。',
          '**负责任的存档：** 本地生成的无审查内容应与任何其他敏感材料一样进行存储管理——不存储在云同步目录中，不无意中分享。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '使用无审查模型的创作者最常见的伦理错误是将本地生成视为无任何背景的自由区。本地生成意味着没有平台政策执行——并不意味着没有法律、没有责任、没有伤害。内容审核员的缺席并不构成许可授权。',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: '创作实践工作流',
        content:
          '**大多数使用无审查模型的小说作家将其用于特定场景，而非作为标准模型的默认替代。** 以下工作流支持这种有针对性的使用。',
        items: [
          '**用标准模型起草常规场景。** Llama 3.3 70B或Qwen3 32B处理大部分文学散文，包括黑暗主题、道德复杂性和心理深度。将无审查模型保留给标准模型拒绝的特定内容场景。',
          '**在有针对性的场景中切换至无审查模型。** 在Ollama中，为特定场景运行`ollama run nous-hermes3:70b-llama3.3-q4_K_M`。在SillyTavern中，按会话在API设置中更换模型。会话间不传输数据。',
          '**使用相同的提示词模板。** 来自[小说作家本地LLM提示词指南](/zh/power-local-llm/local-llm-prompts-for-fiction-writers)的5部分场景模板、潜台词对话结构和角色矛盾提示词在无审查模型上运作完全相同。不需要不同的提示词结构。',
          '**不要添加您不会因法律原因放入人工简报的内容生成指令。** 模型是工具，不是许可结构。如果您不会因法律原因在给人类插画师或代笔作者的简报中包含某条指令，也不要将其放入模型提示词中。',
          '**分发前审查输出。** 无审查模型有时会生成超出所请求黑暗程度或滑向刻板印象的内容。对AI辅助内容进行标准编辑审查。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '为每个写作项目保留一份「模型日志」——记录哪个模型生成了哪些场景的纯文本文件。这对修改很有用（知道哪个模型生成了某个场景，有助于知道将修改请求发送到哪里），如果您公开AI辅助信息则有助于归属透明度，以及在场景日后引发问题时便于审查。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**默认使用最激进的无审查模型。** 完全消融模型（Wizard-Uncensored、Erebus）对复杂场景的指令遵循最弱。Hermes 3是小说质量方面更好的权衡。',
          '**对标准模型能生成的内容使用无审查模型。** 文学散文中的道德复杂性、黑暗心理、暴力和成人主题很少需要无审查微调。切换前确切了解您需要什么。',
          '**将本地生成视为法律上的无背景区域。** 没有云端政策执行并不意味着没有法律。无论配置如何，分发、真实人物和未成年人的作者责任均适用。',
          '**不指定字数上限。** 无审查模型填充黑暗内容以占据空间的倾向与任何其他模型一样。使用创作模板中相同的字数上限约束。',
          '**将输出存储在云同步目录中。** 同步到iCloud、Google Drive或OneDrive的本地生成成人内容可能违反这些平台的服务条款。仅本地存储。',
        ],
      },
      sources: {
        id: 'sources',
        title: '信息来源',
        items: [
          'Hermes 3模型说明与微调方法 — [Nous Research](https://nousresearch.com)',
          'Dolphin 3.0 Mistral技术文档 — [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'RLHF与对齐技术概述 — [Anthropic Research](https://anthropic.com/research)',
          'EU AI法案第5条 — 包括涉及未成年人内容的AI禁止行为 — [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII（非合意亲密图像）— 法律框架概述 — [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '运行无审查本地LLM合法吗？',
            a: '在大多数司法管辖区，运行无审查本地LLM是合法的——没有法律禁止持有开源AI软件。但您用它生成和分发的内容与任何其他著作内容遵守相同的法律：猥亵法、NCII法、诽谤法，以及涉及未成年人内容的相关法律。运行合法并不意味着可以无限制地发布、分享或分发。',
          },
          {
            q: 'Hermes 3和Dolphin 3.0有何区别？',
            a: 'Hermes 3（Nous Research）是选择性无审查——减少对成人内容的拒绝，同时对极端类别保留部分护栏。指令遵循性极佳，接近基础Llama 3.3 70B模型。Dolphin 3.0（Cognitive Computations）在更广泛的内容范围上无审查，但在复杂多约束场景中指令遵循性略弱。Hermes 3是散文质量重要的小说的默认选择；Dolphin 3.0是在16至24 GB系统上需要最广内容范围时的选择。',
          },
          {
            q: '写黑暗小说需要无审查模型吗？',
            a: '大多数黑暗小说不需要。Llama 3.3 70B和Qwen3 32B等标准指令调优模型在正确提示下可以生成暴力、道德复杂性、黑暗心理、反派内心、创伤和大多数文学黑暗内容而不拒绝。它们可靠拒绝的是明确的性内容和更窄范围的极端场景。如果您的黑暗小说不包括明确的性内容，先尝试标准模型——您可能不需要无审查版本。',
          },
          {
            q: '可以在SillyTavern或Agnai中使用无审查模型吗？',
            a: '可以。SillyTavern和Agnai均连接到任何OpenAI兼容端点——包括在本地11434端口运行的Ollama。在Ollama中拉取无审查模型，启动`ollama serve`，在SillyTavern或Agnai中选择OpenAI兼容API并指向`http://localhost:11434/v1`。从模型列表中选择您的无审查模型。不需要额外配置。',
          },
          {
            q: '在家庭网络上使用无审查模型安全吗？',
            a: '配置为绑定到localhost（Ollama和LM Studio的默认设置）时是安全的。API只能从您的机器访问。如果您在家庭网络上暴露端口（例如从手机访问），确保防火墙规则将访问限制在受信任的设备上。不要在没有身份验证的情况下将Ollama API暴露到公共互联网——默认配置没有身份验证。',
          },
          {
            q: '我本地生成的内容会怎么处理？',
            a: '不会自动发生任何事。本地生成的内容不会发送到任何服务器，不会被任何云服务记录，也不会用于模型训练。它只存在于您的设备上，在应用程序的本地存储中（聊天历史文件、角色卡等）。您控制保留什么、删除什么和分享什么。这是本地无审查生成相对于云端替代方案的主要结构性隐私优势。',
          },
          {
            q: '可以在同一个写作项目中混合使用无审查模型和标准模型吗？',
            a: '可以，这是推荐的工作流。用标准模型（Llama 3.3 70B、Qwen3 32B）处理大部分散文——标准模型为大多数黑暗内容生成高质量文学散文。对标准模型拒绝的特定场景切换到Hermes 3或Dolphin 3.0。相同的提示词模板在两者上都有效；散文风格足够一致，按场景混合使用在输出中无法察觉。',
          },
          {
            q: '用无审查模型生成内容会影响版权吗？',
            a: '不会——AI生成内容的版权状况无论模型是否受审查都相同。截至2026年，大多数司法管辖区的AI输出版权法律尚未确定；一般立场是人类著作元素（提示词设计、选择、排列、实质性编辑）可能受保护，而原始AI输出则不受保护。使用无审查模型不改变这一分析。',
          },
          {
            q: '无审查微调会失去通用知识吗？',
            a: '在狭窄领域会有轻微损失。无审查微调通常是全精度重新训练过程，可能在事实记忆、数学和编码基准上与基础模型略有偏差——通常在标准基准上偏差1至3个百分点。对于小说写作任务，这在输出质量上无法察觉。如果您需要同一模型同时用于小说和技术工作（研究笔记、代码审查），请保留标准版和无审查版并按任务切换。Hermes 3比完全消融模型更好地保留了通用能力。',
          },
          {
            q: '这些模型是否被监控或是匿名的？',
            a: '通过Ollama或LM Studio在本地运行的开放权重模型没有遥测、无远程日志记录、无使用跟踪。模型作者（Hermes 3的Nous Research，Dolphin的Cognitive Computations）无法看到您生成的内容——推理过程中没有服务器回调。唯一的遥测风险来自前端（SillyTavern、Agnai——两者默认无遥测）或操作系统。安装后运行一次网络监视器（macOS上的Little Snitch，Linux上的Wireshark）进行验证。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026) — 模型对比，包括模型选择、采样设置和叙事生成性能。',
          '[小说作家本地LLM提示词指南：模板与技巧](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 场景写作、对话、世界构建和风格迁移的提示词模板，在标准和无审查模型上均有效。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 角色卡角色扮演前端对比，包括Ollama后端配置说明。',
          '[如何用本地LLM进行剧本创作和小说起草](/zh/power-local-llm/local-llm-screenwriting-and-novel-drafting) — 长篇小说项目的长篇草稿工作流和章节管理。',
          '[提示词注入与LLM安全](/zh/prompt-engineering/prompt-injection-and-security) — 对抗性提示词如何与安全层交互；理解无审查移除了什么的有用背景。',
          '[系统提示词与用户提示词：有什么区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 管理模型行为的权限结构；对于一致的无审查输出，系统提示词的区分比模型选择更重要。',
          '[私有业务数据的本地RAG](/zh/power-local-llm/local-rag-for-private-business-data) — 隐私敏感使用场景的纯本地AI配置；与本地创作生成相同的隐私原则。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'LLMs locales sin censura para escritura creativa: cuándo los escritores los necesitan (2026)',
    seoTitle: 'LLMs locales sin censura para escritura creativa 2026',
    intro:
      'Los LLMs locales sin censura permiten a los escritores de ficción generar contenido adulto, moralmente complejo y oscuro que los servicios en la nube rechazan, sin que los datos abandonen tu máquina. Esta guía cubre qué modelos usar, cómo configurarlos mediante Ollama o LM Studio, las responsabilidades éticas genuinas que aplican incluso cuando no hay aplicación de términos de servicio, y los casos de uso específicos donde los modelos sin censura son apropiados frente a donde no lo son.',
    metaDescription:
      'LLMs locales sin censura para escritura creativa: qué modelos usar, configuración en Ollama, ética, casos de uso y los límites que conviene mantener.',
    twitterDescription:
      'LLMs locales sin censura para escritores de ficción: qué modelos, configuración en Ollama y la ética real — cuándo son apropiados y qué responsabilidades siguen teniendo los escritores.',
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
      'Escritores de ficción, novelistas, diseñadores de narrativa para videojuegos y profesionales creativos que necesitan LLMs locales capaces de generar contenido adulto o oscuro sin rechazos de servicios en la nube, y que quieren entender sus responsabilidades éticas en ese uso.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'uncensored local LLM escritura creativa',
    targetKeywords: [
      'llm local sin censura escritura creativa',
      'modelos ollama sin censura',
      'hermes 3 escritura creativa',
      'dolphin mistral sin censura configuracion',
      'llm local ficcion oscura',
      'etica ia escritura sin censura',
    ],
    leadAnswerBlock:
      '**Los LLMs locales sin censura son apropiados para escritores de ficción que necesitan generar personajes moralmente complejos, temas oscuros, violencia, contenido romántico adulto o voces de narradores poco fiables que los modelos en la nube se niegan a producir. Son apropiados únicamente cuando el resultado se usa para ficción creativa con una audiencia adulta — no como herramienta para producir contenido dañino en el mundo real, representaciones no consentidas de personas reales o contenido que involucre a menores en contextos sexuales. Los modelos que se ajustan a la mayoría de los casos de uso de escritura de ficción en 2026 son Hermes 3 Llama 3.3 (menos rechazos, fuerte seguimiento de instrucciones) y Dolphin 3.0 Mistral (rango sin censura más amplio, menor huella de memoria). Ambos se ejecutan completamente en local a través de Ollama o LM Studio sin que los datos abandonen tu máquina. Las responsabilidades éticas que aplican al usar estos modelos no son cero — los escritores que trabajan con modelos sin censura siguen teniendo obligaciones respecto a la distribución, los menores y las personas reales que ninguna configuración local elimina.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué LLMs locales sin censura deben usar los escritores de ficción en 2026?',
        answer:
          'Hermes 3 Llama 3.3 es el mejor modelo sin censura de propósito general para ficción en 2026 — fuerte seguimiento de instrucciones, buena diferenciación de voz de personajes, menos rechazos arbitrarios sin la tendencia agresiva que producen algunos fine-tunes completamente sin censura. Dolphin 3.0 Mistral es la alternativa más ligera para sistemas de 16–24 GB. Para escritores que necesitan contenido oscuro ocasional en lugar de salida sin censura persistente, los modelos estándar con ajuste de instrucciones (Llama 3.3 70B, Qwen3 32B) con prompts bien estructurados generan la mayoría del contenido literario adulto sin requerir un fine-tune sin censura. La línea ética de base que aplica independientemente del modelo: sin contenido que involucre a menores en contextos sexuales, sin representaciones no consentidas de personas reales identificables, y consideración cuidadosa antes de distribuir públicamente.',
        bullets: [
          'Hermes 3 Llama 3.3 — mejor modelo sin censura de propósito general para ficción; fuerte seguimiento de instrucciones, menos rechazos arbitrarios.',
          'Dolphin 3.0 Mistral — opción más ligera para sistemas de 16–24 GB; rango sin censura más amplio que Hermes 3.',
          'Los modelos estándar Llama 3.3 70B y Qwen3 32B generan la mayoría del contenido literario adulto con prompts estructurados — no se requiere fine-tune sin censura para muchos casos de uso.',
          'Todos los modelos sin censura se ejecutan completamente en local a través de Ollama o LM Studio — ningún dato abandona tu máquina.',
          'La línea ética de base aplica independientemente del modelo: sin menores, sin representaciones no consentidas de personas reales.',
          'Responsabilidad de distribución: lo que haces con la salida tiene el mismo peso legal que cualquier otro contenido de autoría propia.',
          'Para frontends de roleplay, SillyTavern y Agnai se conectan limpiamente con los modelos de Ollama sin censura.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Qué significa realmente "sin censura"', anchor: '#what-uncensored-means' },
      { label: 'Cómo hemos probado', anchor: '#how-we-tested' },
      { label: 'Cuándo son apropiados los modelos sin censura', anchor: '#appropriate-use' },
      { label: 'Cuándo no lo son', anchor: '#inappropriate-use' },
      { label: 'Comparación de modelos', anchor: '#models' },
      { label: 'Configuración: Ollama y LM Studio', anchor: '#setup' },
      { label: 'Responsabilidades éticas que permanecen', anchor: '#ethics' },
      { label: 'Flujo de trabajo práctico', anchor: '#workflow' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/uncensored-local-llm-creative-writing-ethics-static.html',
    gammaDescription: 'La presentación a continuación cubre: qué significa realmente el fine-tuning "sin censura" (eliminación de RLHF frente a cero restricciones); una tabla comparativa de 5 modelos (de Hermes 3 Llama 3.3 a Dolphin 3.0 Mistral 7B con VRAM, tasa de rechazo y calidad de instrucciones); casos de uso apropiados e inapropiados; comandos de configuración de Ollama; responsabilidades éticas que permanecen independientemente de la configuración local; y 5 errores comunes. Descarga el PDF como tarjeta de referencia para escritura creativa con LLM sin censura.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**"Sin censura" significa que el modelo tiene un fine-tuning de seguridad RLHF reducido, no que no tenga ninguna restricción.** Los fine-tunes sin censura siguen el formato de instrucciones, mantienen la consistencia de los personajes y pueden dirigirse con prompts. No son sistemas de "todo permitido".',
          '**Hermes 3 Llama 3.3 es la mejor opción de propósito general para escritores de ficción en 2026.** Menos rechazos arbitrarios, fuerte seguimiento de instrucciones, buena diferenciación de voz de personajes. La opción correcta para escritores que quieren la capacidad sin la salida agresiva que producen algunos modelos completamente sin censura.',
          '**Los modelos estándar con ajuste de instrucciones gestionan la mayoría del contenido literario adulto con buenos prompts.** La violencia, la complejidad moral, la psicología oscura y los temas adultos en prosa literaria raramente requieren un fine-tune sin censura. Lo que rechazan es el contenido sexual explícito y las descripciones detalladas de daño real. Identifica en qué categoría cae tu obra antes de cambiar de modelo.',
          '**Ejecutar en local significa que ningún dato abandona tu máquina.** No aplica ningún término de servicio de la nube. Ningún contenido se registra, analiza ni usa para entrenamiento. Esta es la razón estructural principal por la que los escritores usan modelos locales sin censura — privacidad y sin restricciones de uso en ficción.',
          '**Las responsabilidades éticas no desaparecen porque no haya aplicación de los ToS.** Los escritores que distribuyen ficción producida con modelos sin censura llevan las mismas responsabilidades legales que cualquier otro autor: las leyes sobre menores, personas reales, incitación y obscenidad específica de la jurisdicción aplican independientemente del método de generación.',
          '**Dolphin 3.0 Mistral es la opción más ligera para equipos de 16–24 GB.** Rango de salida sin censura más amplio que Hermes 3, pero seguimiento de instrucciones más débil en escenas complejas. Adecuado para ficción corta, exploración de prompts y pruebas de estilo.',
          '**SillyTavern y Agnai se conectan limpiamente con los modelos de Ollama sin censura.** Apunta cualquiera de los dos frontends al endpoint compatible con OpenAI de Ollama y selecciona el modelo sin censura. No se requiere configuración adicional.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Modelos sin censura probados:** Hermes 3 Llama 3.3 (principal), Dolphin 3.0 Mistral (secundario).',
          '**Backends:** Ollama (principal), LM Studio (alternativa para configuración con GUI).',
          '**Hardware:** Hermes 3 70B en Q4 requiere ~42 GB; Dolphin 3.0 7B funciona con 8 GB; Dolphin 3.0 24B funciona con ~16 GB.',
          '**Frontends:** SillyTavern, Agnai, RisuAI se conectan todos con los modelos de Ollama sin censura mediante el endpoint compatible con OpenAI.',
          '**Privacidad:** todo en local — sin llamadas a API en la nube, sin registros, sin recolección de datos de entrenamiento.',
          '**Límites éticos absolutos:** ningún contenido sexual que involucre a menores (prohibición absoluta), ninguna representación sexual no consentida de personas reales identificables, ningún contenido diseñado para facilitar violencia real.',
          '**Distribución:** el contenido que publicas lleva responsabilidad de autoría independientemente del método de generación.',
        ],
      },
      whatUncensoredMeans: {
        id: 'what-uncensored-means',
        title: 'Qué significa realmente "sin censura"',
        content:
          '**"Sin censura" en el contexto de los fine-tunes de LLM local significa entrenamiento de seguridad RLHF (aprendizaje por refuerzo a partir de retroalimentación humana) reducido, no la eliminación de todas las restricciones del modelo.** Los modelos estándar con ajuste de instrucciones se entrenan con capas RLHF que les hacen rechazar categorías específicas de contenido: contenido sexual explícito, violencia detallada, psicología oscura que se asemeja a una plantilla de daño real. Los fine-tunes sin censura (Hermes 3, Dolphin, Wizard, Erebus) eliminan o reducen estas capas RLHF del modelo base, dejando intacta la capacidad de seguimiento de instrucciones pero eliminando los comportamientos de rechazo. El resultado es un modelo que sigue tus prompts de ficción a través de contenido oscuro sin redirigir, moralizar ni detenerse a mitad de escena.',
        callouts: [
          {
            type: 'tip',
            text: 'Sin censura no significa ingobernable. Los modelos sin censura siguen la estructura de los prompts, respetan los límites de palabras, mantienen la voz de los personajes y responden a las instrucciones de revisión. La diferencia es que no añaden advertencias de contenido no solicitadas, no rechazan direcciones moralmente oscuras ni rompen el personaje para señalar que una escena representa daño. Usa prompts estructurados de las plantillas de escritura de ficción como harías con cualquier otro modelo — la distinción entre system prompt y user prompt importa más que el nivel de descensurado del modelo. Consulta [System Prompt vs User Prompt](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) para entender por qué.',
          },
        ],
        items: [
          '**Qué se elimina:** los comportamientos de rechazo para categorías específicas de contenido (contenido sexual explícito, violencia gráfica, contenido psicológico oscuro).',
          '**Qué se conserva:** el seguimiento de instrucciones, la consistencia de los personajes, la adherencia a la estructura de los prompts, la calidad lingüística.',
          '**Grados de descensurado:** Hermes 3 está selectivamente sin censura (contenido adulto sí, pero conserva algunas barreras para el contenido extremo). La serie Dolphin está más ampliamente sin censura. Los modelos completamente abliterados (Wizard-Uncensored, Erebus) tienen la eliminación más agresiva de barreras — y el seguimiento de instrucciones más débil para tareas de ficción complejas.',
          '**La calidad del modelo base importa:** el descensurado degrada la calidad de las instrucciones si el modelo base es débil. Hermes 3 sobre Llama 3.3 70B conserva el fuerte seguimiento de instrucciones de Llama 3.3; Dolphin 3.0 sobre Mistral 7B está limitado por la base más pequeña.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los fine-tunes de LLM local sin censura eliminan las capas de rechazo de seguridad RLHF mientras conservan la capacidad de seguimiento de instrucciones — siguen las indicaciones creativas oscuras sin redirigir, moralizar ni detenerse a mitad de escena.',
          },
          {
            type: 'plain-terms',
            text: 'Un modelo estándar como Llama 3.3 70B se detiene a mitad de una escena que representa tortura, el monólogo de un villano moralmente complejo o contenido romántico explícito, y rechaza o suaviza la salida. Hermes 3 (la versión sin censura sobre la misma base) sigue tu prompt a través de la misma escena al mismo nivel de calidad sin interrupciones. La calidad de la prosa es equivalente; la diferencia está en la capa de rechazo.',
          },
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Cómo hemos probado',
        content:
          'Los veredictos de los modelos en esta guía se basan en una pequeña prueba cualitativa — un indicador de dirección, no un benchmark revisado por pares. Para un tema donde los lectores deciden si confiar en las recomendaciones de modelos sobre un asunto sensible, la transparencia sobre el método es importante.',
        items: [
          '**Conjunto de prompts:** 10 prompts en 5 categorías — monólogo del villano, escena de romance adulto, violencia gráfica en ficción de guerra, narrador moralmente complejo, escena psicológica oscura (2 prompts por categoría).',
          '**Ejecuciones por modelo:** cada prompt ejecutado 3 veces por modelo.',
          '**Tasa de rechazo:** porcentaje de ejecuciones donde el modelo rechazó, redirigió o suavizó el contenido solicitado sin instrucción.',
          '**Medición de deriva:** porcentaje de ejecuciones donde el modelo añadió escalada no solicitada — extremidad gratuita más allá de lo que el prompt especificaba.',
          '**Backend:** Ollama 0.5+ con cuantización Q4_K_M para todos los modelos.',
          '**Restricción de honestidad:** prueba cualitativa pequeña. Los resultados indican diferencias de dirección entre modelos, no una medición numérica precisa. Trata los valores de Deriva hacia lo Extremo y Tasa de Rechazo de la tabla como juicios representativos.',
        ],
      },
      appropriateUse: {
        id: 'appropriate-use',
        title: 'Cuándo los modelos sin censura son apropiados para la ficción',
        content:
          '**Los modelos sin censura son apropiados cuando tu ficción genuinamente necesita contenido que los servicios en la nube rechazan, tu audiencia es adulta y el propósito es la expresión creativa.** La mayoría de los escritores de ficción recurren a modelos sin censura para uno o más de estos casos de uso específicos.',
        items: [
          '**Psicología y monólogos de villanos:** personajes villanos moralmente coherentes que no son interrumpidos por el modelo que rompe el personaje para añadir advertencias a mitad de monólogo.',
          '**Contenido romántico y sexual adulto:** escenas explícitas entre personajes ficticios adultos en romance, erótica o ficción literaria que requieren contenido sexual que los servicios en la nube bloquean.',
          '**Violencia gráfica en ficción de género:** novelas de guerra, thrillers de crimen, terror — escenas donde la violencia es fundamental para el impacto emocional y suavizarla destruye la escena.',
          '**Trauma y oscuridad psicológica:** narrativas de supervivientes, ficción sobre adicciones, historias de abuso — contenido que requiere una representación sin filtros para tener peso auténtico.',
          '**Narradores moralmente poco fiables:** narradores que están equivocados, que racionalizan el daño, que son crueles o intolerantes dentro de la ficción — personajes que requieren que el modelo exprese puntos de vista que normalmente rechazaría.',
          '**Roleplay oscuro y ficción colaborativa:** escenarios de larga duración con conflictos, complejidad moral y temas adultos donde un modelo estándar rompe la ficción para insertar rechazos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Antes de cambiar a un modelo sin censura, prueba tu prompt en un modelo estándar con ajuste de instrucciones. Llama 3.3 70B y Qwen3 32B con un system prompt bien estructurado y restricciones de escena generan la mayoría del contenido literario adulto sin rechazos. Los fine-tunes sin censura añaden mayor valor para el contenido sexual explícito y las representaciones más extremas de violencia — no para la oscuridad psicológica, la complejidad moral ni los temas oscuros en general.',
          },
        ],
      },
      inappropriateUse: {
        id: 'inappropriate-use',
        title: 'Cuándo los modelos sin censura no son apropiados',
        content:
          '**La ausencia de aplicación en la nube no significa la ausencia de obligaciones legales y éticas.** Estas categorías representan límites absolutos que aplican independientemente del modelo, la plataforma o si tu máquina está aislada de la red.',
        callouts: [
          {
            type: 'warning',
            text: 'Límites absolutos independientemente de la configuración. Ninguna configuración local elimina la responsabilidad legal o ética por: (1) contenido sexual que involucre a menores — prohibición absoluta por ley en prácticamente todas las jurisdicciones; (2) representaciones sexuales no consentidas de personas reales identificables — esto constituye NCII (imágenes íntimas no consensuales) independientemente del método de generación; (3) contenido diseñado para facilitar violencia real contra objetivos específicos. Estos límites aplican si tu modelo se ejecuta en local, en la nube o en una máquina aislada.',
          },
        ],
        items: [
          '**Contenido sexual que involucra a menores:** prohibición legal absoluta en todas las jurisdicciones principales, independientemente del encuadre ficticio o el método de generación. Esto no es una política del modelo — es la ley.',
          '**Representaciones sexuales no consentidas de personas reales:** las leyes sobre NCII aplican al contenido generado por IA de personas reales identificables en un número creciente de jurisdicciones. "Generado por IA" no es una defensa.',
          '**Contenido diseñado para facilitar daño real:** usar un encuadre ficticio para extraer información o contenido que permita directamente violencia o daño real elimina la protección ficticia.',
          '**Distribución pública sin responsabilidad de autoría:** el contenido que publicas, distribuyes o compartes lleva responsabilidad de autoría. "Una IA lo generó" no transfiere esa responsabilidad.',
          '**Ficción de acoso:** generar ficción cuyo propósito es dañar, intimidar o acosar a una persona real específica — independientemente de si se encuadra como ficción.',
        ],
      },
      models: {
        id: 'models',
        title: 'Comparación de modelos: opciones sin censura para ficción',
        content:
          '**No todos los modelos sin censura son iguales — el grado de eliminación de RLHF y la calidad del modelo base importan para los casos de uso de escritura de ficción.**',
        columns: ['Modelo', 'Base', 'VRAM (Q4)', 'Tasa de rechazo', 'Calidad de instrucciones', 'Deriva hacia lo extremo', 'Ideal para'],
        rows: [
          { 'Modelo': 'Hermes 3 Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Tasa de rechazo': 'Selectiva', 'Calidad de instrucciones': '★★★★★', 'Deriva hacia lo extremo': 'Baja', 'Ideal para': 'Opción por defecto para ficción seria — mejor seguimiento de instrucciones + capacidad sin censura' },
          { 'Modelo': 'Dolphin 3.0 Mistral 24B', 'Base': 'Mistral 24B', 'VRAM (Q4)': '~16 GB', 'Tasa de rechazo': 'Amplia', 'Calidad de instrucciones': '★★★★☆', 'Deriva hacia lo extremo': 'Baja-moderada', 'Ideal para': 'Sistemas de 16–24 GB; contenido adulto en un rango más amplio' },
          { 'Modelo': 'Dolphin 3.0 Mistral 7B', 'Base': 'Mistral 7B', 'VRAM (Q4)': '~8 GB', 'Tasa de rechazo': 'Amplia', 'Calidad de instrucciones': '★★★☆☆', 'Deriva hacia lo extremo': 'Moderada', 'Ideal para': 'Sistemas con poca VRAM; borradores cortos, pruebas de prompts' },
          { 'Modelo': 'Hermes 3 Llama 3.2 8B', 'Base': 'Llama 3.2 8B', 'VRAM (Q4)': '~5 GB', 'Tasa de rechazo': 'Selectiva', 'Calidad de instrucciones': '★★★☆☆', 'Deriva hacia lo extremo': 'Baja', 'Ideal para': 'Recursos limitados; diálogos y escenas más cortas' },
          { 'Modelo': 'Standard Llama 3.3 70B', 'Base': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Tasa de rechazo': 'Limitada', 'Calidad de instrucciones': '★★★★★', 'Deriva hacia lo extremo': 'Ninguna', 'Ideal para': 'Temas oscuros, complejidad moral, violencia — sin necesitar contenido sexual explícito' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Empieza con Hermes 3, no con el fine-tune sin censura más agresivo. Los modelos completamente abliterados (Wizard-Uncensored, Erebus) tienen el rango de contenido más amplio pero un seguimiento de instrucciones notablemente más débil en tareas de ficción complejas — se desvían más rápido de las restricciones, producen prosa de menor calidad en generaciones más largas y mantienen la voz de los personajes con menos fiabilidad. Para ficción que requiere tanto contenido sin censura como prosa de calidad, Hermes 3 es la mejor compensación.',
          },
        ],
        items: [
          'Nota: los fine-tunes sin censura más antiguos — Midnight Miqu (basado en Miqu-70B), Wizard-LM Uncensored, Mythomax — fueron líderes en 2024 pero han sido superados por Hermes 3 y Dolphin 3.0 en 2026 en métricas de calidad y seguimiento de instrucciones. Si los encuentras recomendados en artículos más antiguos, los equivalentes actuales son Hermes 3 (para descensurado selectivo) y Dolphin 3.0 (para un rango más amplio).',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuración: Ollama y LM Studio',
        content:
          '**Tanto Ollama como LM Studio sirven modelos sin censura a través de una API local compatible con OpenAI — lo que significa que SillyTavern, Agnai y cualquier otra herramienta que hable con un endpoint local funcionan sin configuración adicional.**',
        promptExamples: [
          {
            label: 'Ollama: descargar y ejecutar Hermes 3',
            text: '# Pull the model\nollama pull nous-hermes3:70b-llama3.3-q4_K_M\n\n# Run it\nollama run nous-hermes3:70b-llama3.3-q4_K_M\n\n# Serve via API (for SillyTavern / Agnai / LM Studio-compatible tools)\nollama serve\n# API available at http://localhost:11434',
          },
          {
            label: 'Ollama: descargar y ejecutar Dolphin 3.0 Mistral 24B',
            text: '# Pull the model\nollama pull dolphin3:24b-mistral-q4_K_M\n\n# Verify it loaded\nollama list\n\n# Run a test prompt\nollama run dolphin3:24b-mistral-q4_K_M "Write a 100-word villain monologue, gothic register, no disclaimers."',
          },
        ],
        items: [
          '**Instalación de Ollama:** `brew install ollama` (macOS) o descarga desde ollama.com (Windows/Linux). El comando `ollama serve` inicia la API compatible con OpenAI en `http://localhost:11434`.',
          '**Instalación de LM Studio:** descarga desde lmstudio.ai. Importa archivos de modelo GGUF directamente; la pestaña de servidor local expone un endpoint compatible con OpenAI en `http://localhost:1234`.',
          '**Conexión de SillyTavern:** en los ajustes de API, selecciona "Compatible con OpenAI" y apunta la URL base a `http://localhost:11434/v1` (Ollama) o `http://localhost:1234/v1` (LM Studio). Introduce cualquier cadena como clave de API (requerida por el campo pero no validada localmente).',
          '**Conexión de Agnai:** mismo endpoint compatible con OpenAI; introduce la URL local en los ajustes del adaptador. Funciona de forma idéntica a la configuración de SillyTavern.',
          '**Cambio de modelo:** cambia entre modelos estándar y sin censura en Ollama con `ollama run [nombre-del-modelo]` — se pueden cargar varios modelos simultáneamente y puedes cambiar por sesión sin reiniciar el servidor.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para escritores que quieren mantener separados los modelos sin censura y los estándar, crea dos instancias de Ollama en puertos diferentes usando la variable de entorno OLLAMA_HOST. Ejemplo: OLLAMA_HOST=127.0.0.1:11435 ollama serve. Esto te permite apuntar SillyTavern o Agnai a la instancia sin censura mientras mantienes tu instancia estándar de Ollama para otras tareas.',
          },
        ],
      },
      ethics: {
        id: 'ethics',
        title: 'Responsabilidades éticas que permanecen',
        content:
          '**Ejecutar un modelo en local sin aplicación de políticas en la nube no elimina tus responsabilidades como escritor y editor.** El marco ético que aplica a la ficción de autoría humana aplica igualmente a la ficción asistida por IA.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La configuración local elimina las restricciones de los ToS en la nube, pero no elimina la responsabilidad legal de autoría, la responsabilidad por facilitación de daño ni las obligaciones éticas que aplican a cualquier obra creativa publicada.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en el modelo local sin censura como un asistente de escritura muy capaz que seguirá cualquier instrucción que le des. El peso legal y ético de lo que produces y distribuyes recae sobre ti, no sobre la herramienta. Las mismas leyes que aplican a la ficción de autoría humana — sobre menores, personas reales, obscenidad e incitación — aplican a la ficción generada por IA distribuida públicamente. El hecho de que ninguna plataforma te impida generar el contenido en local no cambia de lo que eres legalmente responsable si lo publicas.',
          },
        ],
        items: [
          '**Responsabilidad de autoría:** tú eres el autor de la ficción asistida por IA. "La IA lo generó" no transfiere el copyright, no elimina la responsabilidad ni constituye una defensa para el contenido que viole la ley.',
          '**Conciencia de la jurisdicción:** las leyes sobre obscenidad, NCII y contenido dañino varían según la jurisdicción. El contenido legal de producir en un país puede constituir un delito penal de distribuir en otro.',
          '**Personas reales:** generar contenido ficticio negativo sobre personas reales identificables — incluso en marcos claramente ficticios — conlleva riesgo de difamación y NCII según el contenido.',
          '**Verificación de edad para la distribución:** si distribuyes contenido adulto o maduro producido con modelos sin censura en una plataforma pública, te aplican las obligaciones de verificación de edad que corresponden a cualquier editor de contenido adulto.',
          '**Archivo responsable:** el contenido sin censura generado localmente debe tratarse con la misma disciplina de almacenamiento que cualquier otro material sensible — no almacenar en directorios sincronizados con la nube, no compartir involuntariamente.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El error ético más común entre los escritores que usan modelos sin censura es tratar la generación local como una zona libre de contexto. La generación local significa que no hay aplicación de políticas de plataforma — no significa que no haya ley, responsabilidad ni daño. La ausencia de un moderador de contenido no es una autorización.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Flujo de trabajo práctico para escritores de ficción',
        content:
          '**La mayoría de los escritores de ficción que usan modelos sin censura los utilizan para escenas específicas en lugar de como sustituto por defecto de su modelo estándar.** El flujo de trabajo a continuación apoya este uso específico.',
        items: [
          '**Redacta las escenas estándar con un modelo estándar.** Llama 3.3 70B o Qwen3 32B gestionan la mayor parte de la prosa literaria, incluidos los temas oscuros, la complejidad moral y la profundidad psicológica. Reserva el modelo sin censura para escenas que específicamente requieran contenido que el modelo estándar rechace.',
          '**Cambia al modelo sin censura para escenas específicas.** En Ollama, ejecuta `ollama run nous-hermes3:70b-llama3.3-q4_K_M` para la escena concreta. En SillyTavern, cambia el modelo en los ajustes de API por sesión. No hay datos que crucen entre sesiones.',
          '**Usa las mismas plantillas de prompts.** La plantilla de escena de 5 partes, la estructura de diálogo de subtexto y los prompts de contradicción de personajes de [Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers) funcionan de manera idéntica en los modelos sin censura. No necesitas estructuras de prompt diferentes.',
          '**No añadas instrucciones de generación de contenido que no aparecerían en un brief de autoría humana por razones legales.** El modelo es una herramienta, no una estructura de permisos. Si no incluirías una instrucción en un brief a un ilustrador o ghostwriter humano por razones legales, no la incluyas en el prompt del modelo.',
          '**Revisa la salida antes de distribuirla.** Los modelos sin censura ocasionalmente producen contenido que supera la oscuridad solicitada o deriva hacia estereotipos. La revisión editorial estándar del contenido asistido por IA aplica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mantén un "registro de modelos" por proyecto de escritura — un archivo de texto plano que registra qué modelo generó qué escenas. Esto es útil para la revisión (saber qué modelo produjo una escena ayuda a saber a dónde dirigir las solicitudes de revisión), para la transparencia de atribución si declaras asistencia de IA, y para auditoría si una escena plantea preguntas más adelante.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Recurrir por defecto al modelo sin censura más agresivo.** Los modelos completamente abliterados (Wizard-Uncensored, Erebus) tienen el seguimiento de instrucciones más débil para escenas complejas. Hermes 3 es una mejor compensación para la calidad de la ficción.',
          '**Usar modelos sin censura para contenido que los modelos estándar generarían.** La complejidad moral, la psicología oscura, la violencia y los temas adultos en prosa literaria raramente requieren un fine-tune sin censura. Identifica exactamente lo que necesitas antes de cambiar.',
          '**Tratar la generación local como una zona legalmente libre de contexto.** La ausencia de aplicación de políticas en la nube no significa ausencia de ley. Las responsabilidades de autoría para distribución, personas reales y menores aplican independientemente.',
          '**No especificar límites de palabras.** Los modelos sin censura rellenan el contenido oscuro para ocupar espacio con la misma facilidad que cualquier otro modelo. Usa las mismas restricciones de límite de palabras de las plantillas de ficción.',
          '**Almacenar la salida en directorios sincronizados con la nube.** El contenido adulto generado localmente sincronizado con iCloud, Google Drive o OneDrive puede violar los términos de servicio de esas plataformas. Almacena solo localmente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Ficha del modelo Hermes 3 y metodología de fine-tuning — [Nous Research](https://nousresearch.com)',
          'Documentación técnica de Dolphin 3.0 Mistral — [Cognitive Computations / Eric Hartford](https://huggingface.co/cognitivecomputations)',
          'Visión general de técnicas RLHF y alineación — [Anthropic Research](https://anthropic.com/research)',
          'Artículo 5 de la Ley de IA de la UE — prácticas de IA prohibidas, incluido el contenido que involucra a menores — [EUR-Lex](https://eur-lex.europa.eu)',
          'NCII (imágenes íntimas no consensuales) — visión general del marco legal — [Cyber Civil Rights Initiative](https://cybercivilrights.org)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Es legal ejecutar LLMs locales sin censura?',
            a: 'Ejecutar un LLM local sin censura es legal en la mayoría de las jurisdicciones — no existe ninguna ley contra poseer software de IA de código abierto. Lo que generes y distribuyas con él está sujeto a las mismas leyes que cualquier otro contenido de autoría propia: ley de obscenidad, ley de NCII, ley de difamación y leyes sobre contenido que involucra a menores. Legal de ejecutar no significa legal de publicar, compartir o distribuir sin límite.',
          },
          {
            q: '¿Cuál es la diferencia entre Hermes 3 y Dolphin 3.0?',
            a: 'Hermes 3 (Nous Research) está selectivamente sin censura — reduce los rechazos para contenido adulto mientras conserva algunas barreras para las categorías extremas. El seguimiento de instrucciones es excelente, cercano al modelo base Llama 3.3 70B. Dolphin 3.0 (Cognitive Computations) está más ampliamente sin censura en un rango de contenido más amplio, pero el seguimiento de instrucciones es ligeramente más débil en escenas complejas con múltiples restricciones. Hermes 3 es la mejor opción por defecto para ficción donde la calidad de la prosa importa; Dolphin 3.0 es la mejor opción cuando necesitas el rango de contenido más amplio en un sistema de 16–24 GB.',
          },
          {
            q: '¿Necesito un modelo sin censura para escribir ficción oscura?',
            a: 'No, para la mayoría de la ficción oscura. Los modelos estándar con ajuste de instrucciones como Llama 3.3 70B y Qwen3 32B generan violencia, complejidad moral, psicología oscura, interioridad del villano, trauma y la mayor parte de la oscuridad literaria sin rechazos cuando se les hace un prompt correcto. Lo que rechazan de manera fiable es el contenido sexual explícito y un conjunto más reducido de escenarios extremos. Si tu ficción oscura no incluye contenido sexual explícito, prueba primero un modelo estándar — puede que no necesites la versión sin censura.',
          },
          {
            q: '¿Puedo usar modelos sin censura en SillyTavern o Agnai?',
            a: 'Sí. Tanto SillyTavern como Agnai se conectan a cualquier endpoint compatible con OpenAI — incluido Ollama ejecutándose localmente en el puerto 11434. Descarga el modelo sin censura en Ollama, inicia `ollama serve`, y en SillyTavern o Agnai selecciona la API compatible con OpenAI y apúntala a `http://localhost:11434/v1`. Selecciona tu modelo sin censura de la lista de modelos. No se requiere configuración adicional.',
          },
          {
            q: '¿Son seguros los modelos sin censura en una red doméstica?',
            a: 'Sí, cuando están configurados para vincularse a localhost (la configuración predeterminada en Ollama y LM Studio). La API solo es accesible desde tu máquina. Si expones el puerto en tu red doméstica (por ejemplo, para acceder desde un teléfono), asegúrate de que las reglas del firewall restrinjan el acceso a dispositivos de confianza. No expongas la API de Ollama a la internet pública sin autenticación — la configuración predeterminada no tiene autenticación.',
          },
          {
            q: '¿Qué ocurre con el contenido que genero localmente?',
            a: 'No ocurre nada automáticamente. El contenido generado localmente no se envía a ningún servidor, no lo registra ningún servicio en la nube ni se usa para el entrenamiento del modelo. Solo existe en tu dispositivo, en el almacenamiento local de tu aplicación (archivos de historial de chat, fichas de personajes, etc.). Tú controlas lo que guardas, lo que borras y lo que compartes. Esta es la principal ventaja estructural de privacidad de la generación local sin censura frente a las alternativas en la nube.',
          },
          {
            q: '¿Puedo mezclar modelos sin censura y estándar en el mismo proyecto de escritura?',
            a: 'Sí, y este es el flujo de trabajo recomendado. Usa un modelo estándar (Llama 3.3 70B, Qwen3 32B) para la mayor parte de la prosa — los modelos estándar producen prosa literaria de alta calidad para la mayoría del contenido oscuro. Cambia a Hermes 3 o Dolphin 3.0 para escenas específicas que requieran contenido que el modelo estándar rechace. Las mismas plantillas de prompts funcionan en ambos; el estilo de prosa es suficientemente consistente para que la mezcla por escena no sea detectable en la salida.',
          },
          {
            q: '¿Afecta generar contenido con un modelo sin censura al copyright?',
            a: 'No — la situación del copyright para el contenido generado por IA es idéntica independientemente de si el modelo está censurado o sin censura. La ley de copyright para la salida de IA es incierta en la mayoría de las jurisdicciones a fecha de 2026; la posición general es que los elementos de autoría humana (diseño de prompts, selección, disposición, edición sustancial) pueden ser protegibles, mientras que la salida de IA en bruto no lo es. Usar un modelo sin censura no cambia este análisis.',
          },
          {
            q: '¿Los fine-tunes sin censura pierden conocimiento general?',
            a: 'Marginalmente, en áreas concretas. Los fine-tunes de descensurado son típicamente pases de reentrenamiento de precisión completa que pueden desviarse ligeramente del modelo base en recuperación de hechos, matemáticas y benchmarks de programación — generalmente 1–3 puntos porcentuales en benchmarks estándar. Para tareas de escritura de ficción, esto es indetectable en la calidad de la salida. Si necesitas el mismo modelo para ficción y trabajo técnico (notas de investigación, revisión de código), mantén instaladas tanto la versión estándar como la sin censura y cambia según la tarea. Hermes 3 conserva la capacidad general mejor que los modelos completamente abliterados.',
          },
          {
            q: '¿Estos modelos están monitoreados o son anónimos?',
            a: 'Los modelos de peso abierto que se ejecutan localmente a través de Ollama o LM Studio no tienen telemetría, no tienen registro remoto ni seguimiento de uso. Los autores del modelo (Nous Research para Hermes 3, Cognitive Computations para Dolphin) no pueden ver lo que generas — no hay ninguna devolución de llamada al servidor durante la inferencia. El único riesgo de telemetría proviene del frontend (SillyTavern, Agnai — ambos sin telemetría por defecto) o del sistema operativo. Ejecuta un monitor de red (Little Snitch en macOS, Wireshark en Linux) una vez después de la instalación para verificarlo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores LLMs locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) — comparación de modelos que incluye las selecciones de modelos, los ajustes de muestreo y el rendimiento para la generación narrativa.',
          '[Prompts de LLM local para escritores de ficción: plantillas y técnicas](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de prompts para escritura de escenas, diálogo, construcción de mundos y transferencia de estilo que funcionan en modelos estándar y sin censura.',
          '[SillyTavern vs Agnai vs RisuAI: mejor frontend de roleplay local](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparación de frontends para roleplay con fichas de personajes, incluidas instrucciones de configuración para backends de Ollama.',
          '[Cómo ejecutar un LLM local para guión y redacción de novelas](/es/power-local-llm/local-llm-screenwriting-and-novel-drafting) — flujos de trabajo de redacción de formato largo y gestión de capítulos para proyectos de ficción extensa.',
          '[Inyección de prompts y seguridad de LLM](/es/prompt-engineering/prompt-injection-and-security) — cómo interactúan los prompts adversariales con las capas de seguridad; contexto útil para entender qué elimina el descensurado.',
          '[System Prompt vs User Prompt: ¿Cuál es la diferencia?](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — la estructura de autoridad que rige el comportamiento del modelo; la distinción del system prompt importa más que la elección del modelo para una salida sin censura consistente.',
          '[RAG local para datos empresariales privados](/es/power-local-llm/local-rag-for-private-business-data) — configuración de IA solo local para casos de uso sensibles a la privacidad; los mismos principios de privacidad que la generación de ficción local.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLMs locales sin censura para escritura creativa: cuándo los escritores los necesitan (2026)',
      description: 'LLMs locales sin censura para escritura creativa: qué modelos usar, configuración en Ollama, responsabilidades éticas, casos de uso apropiados y los límites que los escritores deben mantener siempre.',
      url: 'https://www.promptquorum.com/es/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=es',
      inLanguage: 'es',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    },
  },
}
