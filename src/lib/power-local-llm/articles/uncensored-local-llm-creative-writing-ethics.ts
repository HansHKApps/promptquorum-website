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
    seoTitle: 'Uncensored Local LLMs for Creative Writing: When and Why 2026',
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
    seoTitle: 'Uncensored Local LLMs für kreatives Schreiben 2026: Wann und warum',
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
          '**Dieselben Prompt-Vorlagen verwenden.** Die 5-teilige Szenen-Vorlage, Subtext-Dialog-Struktur und Charakter-Widerspruchs-Prompts aus [Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=de) funktionieren identisch auf Uncensored-Modellen. Du brauchst keine anderen Prompt-Strukturen.',
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
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de) — Modellvergleich einschließlich Modellauswahl, Sampling-Einstellungen und Performance für narrative Generierung.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=de) — Prompt-Vorlagen für Szenen-Schreiben, Dialog, Weltenbau und Stiltransfer, die auf Standard- und Uncensored-Modellen funktionieren.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=de) — Frontend-Vergleich für Charakter-Karten-Roleplay, einschließlich Einrichtungsanleitungen für Ollama-Backends.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=de) — Langform-Entwurf-Workflows und Kapitel-Management für erweiterte Belletristik-Projekte.',
          '[Prompt Injection and LLM Security](/prompt-engineering/prompt-injection-and-security?lang=de) — wie adversarielle Prompts mit Sicherheitsschichten interagieren; nützlicher Hintergrund zum Verständnis, was Uncensoring entfernt.',
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de) — die Autoritätsstruktur, die das Modellverhalten steuert; der System-Prompt-Unterschied ist wichtiger als die Modellwahl für konsistente Uncensored-Ausgabe.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data?lang=de) — lokale KI-Einrichtung für datenschutzsensible Anwendungsfälle; dieselben Datenschutzprinzipien wie bei lokaler Belletristik-Generierung.',
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
    seoTitle: 'LLM locaux non censurés pour l\'écriture créative 2026',
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
            text: 'Non censuré ne signifie pas ingouvernable. Les modèles non censurés respectent toujours la structure des prompts, les limites de mots, la voix des personnages et répondent aux instructions de révision. La différence, c\'est qu\'ils n\'ajoutent pas d\'avertissements de contenu non sollicités, ne refusent pas les orientations moralement sombres ni ne brisent le personnage pour signaler qu\'une scène dépeint du tort. Utilise des prompts structurés issus des modèles d\'écriture fictionnelle comme avec n\'importe quel autre modèle — la distinction prompt système / prompt utilisateur compte plus que le niveau de non-censure du modèle. Voir [Prompt système vs prompt utilisateur](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr) pour comprendre pourquoi.',
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
          '**Utiliser les mêmes modèles de prompts.** Le modèle de scène en 5 parties, la structure de dialogue sous-textuel et les prompts de contradiction de personnages de [Prompts LLM locaux pour les auteurs de fiction](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=fr) fonctionnent de façon identique sur les modèles non censurés. Tu n\'as pas besoin de structures de prompts différentes.',
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
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) — comparaison de modèles incluant les choix de modèles, les paramètres d\'échantillonnage et les performances pour la génération narrative.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=fr) — modèles de prompts pour l\'écriture de scènes, le dialogue, la construction d\'univers et le transfert de style, fonctionnant sur les modèles standard et non censurés.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=fr) — comparaison de frontends pour le jeu de rôle par fiches de personnages, avec instructions de configuration pour les backends Ollama.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=fr) — flux de travail de rédaction longue forme et gestion des chapitres pour les projets de fiction étendus.',
          '[Prompt Injection and LLM Security](/prompt-engineering/prompt-injection-and-security?lang=fr) — comment les prompts adversariaux interagissent avec les couches de sécurité ; contexte utile pour comprendre ce que la non-censure supprime.',
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr) — la structure d\'autorité qui gouverne le comportement du modèle ; la distinction de prompt système compte plus que le choix de modèle pour une sortie non censurée cohérente.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data?lang=fr) — configuration IA locale pour les cas d\'usage sensibles aux données ; mêmes principes de confidentialité que la génération locale de fiction.',
        ],
      },
    },
  },
}
