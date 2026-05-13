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
}
