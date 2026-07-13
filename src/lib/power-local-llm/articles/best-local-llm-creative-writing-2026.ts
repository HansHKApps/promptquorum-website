// Power Local LLM — Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding
// Slug: best-local-llm-creative-writing-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding',
    seoTitle: 'Best Local LLMs for Creative Writing 2026: Tested Picks',
    intro:
      'Creative writing is the workload where local LLMs win on more than privacy and price. The best instruct-tuned and uncensored open-weight models in 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B, and the Hermes/Dolphin uncensored derivatives — produce fiction, dialogue, and worldbuilding that holds up against frontier cloud models on most prompts. The differences are in voice consistency, willingness to handle dark or adult themes, and how naturally they take direction. This guide tests six picks against 50+ creative prompts across fiction, dialogue, poetry, and worldbuilding, with the temperature and top-p settings each one wants.',
    metaDescription:
      'Compare 6 local models for creative writing: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5, and uncensored variants. Tested on 50+ creative prompts.',
    twitterDescription:
      '6 local models for fiction, dialogue, and worldbuilding tested on 50+ creative prompts. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5, plus uncensored picks. Verdict per task type.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Fiction writers, screenwriters, game designers, worldbuilders, and roleplay enthusiasts running local LLMs for creative work where privacy, voice consistency, and willingness to handle mature themes matter more than benchmark scores.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM creative writing',
    targetKeywords: [
      'best local llm creative writing',
      'local llm fiction writing',
      'uncensored local llm',
      'llama vs mistral creative writing',
      'best local model dialogue',
      'local llm worldbuilding',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B is the best all-round local pick for creative writing in May 2026 — strong voice consistency, takes direction well, and handles dark themes without refusing if the system prompt frames the work as fiction. Qwen3 32B is the right 24 GB-rig pick: nearly as strong on prose, lighter on hardware. Mistral Large wins long-form continuity (novel-length drafting) on its native 128K context. Command A+ has the cleanest dialogue voice. Yi-1.5 34B is the niche pick for poetry and lyrical prose. For workflows that the instruct-tuned models refuse, Hermes 3 (Llama 3.3 base) and Dolphin 3.0 are the uncensored picks — same architecture, RLHF safety layer removed. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; 0.7 and below produces flat prose. Uncensored ≠ unethical — it means the model follows the prompt instead of refusing; the writer is still the author.**',
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for creative writing in 2026?',
        answer:
          'Llama 3.3 70B is the best all-round local pick — strong on prose, dialogue, and worldbuilding, with voice consistency that holds across long sessions. On 24 GB hardware where 70B will not fit, Qwen3 32B is the lighter alternative without much quality loss. Mistral Large is the long-context pick for novel-length drafting (128K context out of the box). Command A+ has the most natural dialogue voice. Yi-1.5 34B is the poetry and lyrical-prose specialist. For workflows that hit the instruct-tuned safety layer (mature fiction, conflict scenes, morally complex characters), the Hermes 3 and Dolphin 3.0 derivatives use the same base models with the safety RLHF layer removed — they follow the prompt instead of refusing. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; coding-style settings (0.2–0.4) produce flat prose.',
        bullets: [
          'Best overall: Llama 3.3 70B — strongest voice consistency, takes direction well, handles dark themes without refusal when framed as fiction.',
          'Best 24 GB rig: Qwen3 32B — nearly as strong as Llama 70B on prose, much lighter on hardware.',
          'Best long-form: Mistral Large — 128K context out of the box; novel-length drafting without losing thread.',
          'Best dialogue: Command A+ — the most natural conversational voice across characters.',
          'Best poetry / lyrical: Yi-1.5 34B — niche pick for verse and stylised prose.',
          'When instruct refuses: Hermes 3 (Llama base) or Dolphin 3.0 — uncensored, same architecture, prompt-following.',
          'Sampling: temperature 0.8–1.1, top-p 0.9–0.95 for prose; lower for tight dialogue, higher for surreal/genre work.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'How We Tested', anchor: '#how-we-tested' },
      { label: 'Head-to-Head Comparison', anchor: '#comparison' },
      { label: 'Per-Model Verdicts', anchor: '#verdicts' },
      { label: 'Sample Outputs', anchor: '#sample-outputs' },
      { label: 'Temperature and Top-P for Creative Work', anchor: '#sampling' },
      { label: 'Uncensored Models: What They Are', anchor: '#uncensored' },
      { label: 'Frontends for Creative Work', anchor: '#frontends' },
      { label: 'Decision: Pick Your Model', anchor: '#decision' },
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
          '**Llama 3.3 70B is the best all-round creative-writing local model in May 2026.** Strongest voice consistency, takes direction well, handles dark themes without refusal when the system prompt frames the work as fiction.',
          '**Qwen3 32B is the right 24 GB-rig pick.** Nearly Llama 70B prose quality without the 48 GB+ VRAM bill. The default for most laptops and desktops.',
          '**Mistral Large wins long-form continuity.** 128K context out of the box; novel-length drafting without losing thread or character voice.',
          '**Command A+ has the cleanest dialogue voice.** Most natural conversational beats across characters; the pick when dialogue is the load-bearing part of the work.',
          '**Yi-1.5 34B is the poetry and lyrical-prose specialist.** Niche pick for verse, stylised prose, and short-form work where rhythm matters.',
          '**Uncensored derivatives (Hermes 3, Dolphin 3.0) are the right move when instruct-tuned models refuse.** Same base models; the RLHF safety layer is removed; the model follows the prompt instead of declining. Mature fiction, conflict scenes, and morally complex characters become writable.',
          '**Sampling matters more than people think.** Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative range. Coding-style settings (0.2–0.4) produce flat, predictable prose. Higher (1.2+) is genre/surreal territory.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Best overall:** Llama 3.3 70B at Q4_K_M, ~42 GB VRAM. Strongest voice consistency in this set.',
          '**Best 24 GB-rig:** Qwen3 32B at Q4_K_M, ~20 GB VRAM. The default for most users.',
          '**Best long-form:** Mistral Large at Q4_K_M, ~75 GB total VRAM (heavy). 128K context out of the box.',
          '**Best dialogue:** Command A+ at Q4_K_M, ~62 GB VRAM. Cleanest character-voice differentiation.',
          '**Best poetry:** Yi-1.5 34B at Q4_K_M, ~21 GB VRAM. Lyrical prose specialist.',
          '**Uncensored options:** Hermes 3 (Llama 3.3 base, ~42 GB) and Dolphin 3.0 (multiple base sizes, 13–42 GB).',
          '**Sampling default for prose:** temperature 0.95, top-p 0.92, repeat penalty 1.1. Adjust per task type.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested: 50+ Creative Prompts Across Six Models',
        content:
          '**The test held the prompt set, sampling settings, and frontend constant; only the model varied.** Same 50 prompts across fiction, dialogue, poetry, and worldbuilding tasks; output graded by the same rubric per task type.',
        items: [
          '**Backend:** Ollama 0.7+ on macOS and Linux; same context limits per model; Q4_K_M quantization across all six picks (Q5_K_M for the smaller 32B–34B models where VRAM permitted, with no measurable difference in the rubric scores).',
          '**Frontend:** Open WebUI for the bulk of the test (chat-style work); SillyTavern for the dialogue-heavy and roleplay subset (matches how creative writers actually use these models).',
          '**Prompt set:** 50 prompts split across four task types — fiction (15: short-story openings, scene continuations, descriptive passages), dialogue (15: two-character exchanges, group scenes, voice differentiation), poetry (10: free verse, structured forms, lyrical prose), worldbuilding (10: setting descriptions, factional politics, magic systems). Each prompt run 3 times per model to capture variance.',
          '**Sampling:** temperature 0.95, top-p 0.92, repeat penalty 1.1 as the baseline; per-task adjustments noted in the per-model verdicts below.',
          '**Grading rubric:** voice consistency (does the character or narrator sound the same across paragraphs?), prompt fidelity (did the model follow the direction or invent its own scene?), prose quality (rhythm, vocabulary, avoiding cliché), and willingness (did the model refuse or sanitise scenes that the prompt explicitly framed as fiction?).',
          '**Honesty constraint:** scores reported as relative ranks per task, not invented absolute percentages. "Best dialogue" means consistent first place on the dialogue subset across the 3 runs; "strong" means top-3; "weak" means the model lost to one or more competitors on the rubric.',
          'For the prompting techniques that improve creative output on any model, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity) and [persona prompting](/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Creative-writing benchmarks are inherently subjective. The rubric above (voice consistency, prompt fidelity, prose quality, willingness) is the closest we got to repeatable scoring, but two readers grading the same outputs will disagree on prose quality more often than they agree. Treat the verdicts as starting hypotheses to test on your own work.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Head-to-Head: Six Local Models on Creative Writing Tasks',
        content:
          '**Llama 3.3 70B leads on the broadest set of tasks; the smaller and specialised models each win one or two categories.** Pick by task type, not by overall ranking.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B is the strongest all-round creative model; Qwen3 32B is the lighter alternative; Mistral Large wins long-form; Command A+ wins dialogue; Yi-1.5 wins poetry; Hermes/Dolphin handle scenes the others refuse.',
          },
          {
            type: 'plain-terms',
            text: 'No single model is best at everything. Llama 3.3 70B is the safe default if you have the hardware. Qwen3 32B is the smart pick on a 24 GB GPU. Pick a specialist (Mistral for novels, Command A+ for dialogue, Yi-1.5 for poetry) when one task type is the load-bearing part of the work. Pick an uncensored derivative when the instruct-tuned model refuses scenes you need to write.',
          },
        ],
        columns: ['Model', 'Size', 'VRAM (Q4_K_M)', 'Fiction', 'Dialogue', 'Poetry', 'Worldbuilding', 'Best for'],
        rows: [
          { 'Model': 'Llama 3.3 70B', 'Size': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Fiction': 'Best', 'Dialogue': 'Strong', 'Poetry': 'Strong', 'Worldbuilding': 'Best', 'Best for': 'Best all-round; default if hardware fits' },
          { 'Model': 'Qwen3 32B', 'Size': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Fiction': 'Strong', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': '24 GB-rig default; small loss vs Llama 70B' },
          { 'Model': 'Mistral Large', 'Size': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Fiction': 'Strong (long-form)', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Novel-length continuity, 128K context' },
          { 'Model': 'Command A+', 'Size': 'Not disclosed', 'VRAM (Q4_K_M)': '~62 GB', 'Fiction': 'Strong', 'Dialogue': 'Best', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Dialogue-heavy work, group scenes' },
          { 'Model': 'Yi-1.5 34B', 'Size': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Fiction': 'OK', 'Dialogue': 'OK', 'Poetry': 'Best', 'Worldbuilding': 'OK', 'Best for': 'Poetry, lyrical prose, stylised work' },
          { 'Model': 'Hermes 3 / Dolphin 3.0', 'Size': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Fiction': 'Same as base', 'Dialogue': 'Same as base', 'Poetry': 'Same as base', 'Worldbuilding': 'Same as base', 'Best for': 'Scenes instruct-tuned models refuse' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Two-model setup is the common pattern: Llama 3.3 70B (or Qwen3 32B) as the daily driver, plus the Hermes 3 derivative on the same Ollama for scenes the instruct version refuses. Switch between them per scene; both can sit in `ollama list` at the same time without conflict.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Per-Model Verdicts',
        items: [
          '**Llama 3.3 70B** — best all-round. Strongest voice consistency in the test set; characters keep the same speech patterns across long scenes. Takes direction well — when the system prompt specifies POV, tone, or genre conventions, Llama 3.3 follows. Handles dark themes (violence, grief, morally grey characters) without refusal when the prompt frames the work as fiction. Where it falls short: long passages occasionally drift into generic "literary" voice; small models in the same family (8B) lose this strength.',
          '**Qwen3 32B** — best 24 GB-rig pick. Slightly less voice consistency than Llama 3.3 70B but the gap is small enough that most writers will not notice on prose-heavy work. Strongest of the smaller models on direction-following. Where it falls short: poetry and stylised prose lag noticeably; default to Yi-1.5 for those.',
          '**Mistral Large** — best long-form continuity. 128K context window means a 50,000-word draft fits without truncation; the model holds character details, plot threads, and world rules across chapters. Where it falls short: hardware bar is the highest in this set (~75 GB at Q4_K_M); per-token speed slows on long inputs. Use Mistral La Plateforme on EU infrastructure if local hardware is the constraint.',
          '**Command A+** — best dialogue. Distinct character voices that hold across exchanges; group scenes (3+ speakers) stay legible without the "everyone sounds the same" failure mode common to other models. Where it falls short: prose paragraphs between dialogue beats are competent but not lyrical; for purely descriptive passages, Llama 3.3 wins.',
          '**Yi-1.5 34B** — best poetry and lyrical prose. Rhythm-aware, comfortable with structured forms (sonnet, villanelle, haiku), produces verse that holds up better than the larger general models. Where it falls short: long-form fiction is competent but not its strength; pick Llama 3.3 or Qwen3 for narrative work.',
          '**Hermes 3 (Llama 3.3 base) and Dolphin 3.0** — uncensored derivatives. Same architecture and base weights as Llama 3.3 70B; the RLHF safety layer is removed during fine-tuning. The model follows the prompt rather than refusing or sanitising mature content. Quality on non-mature prompts is identical to the base model; the difference is only visible on prompts where instruct-tuned versions refuse. Use these when the work requires it (mature fiction, violent scenes, morally complex characters) and stick with the instruct-tuned base otherwise.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Voice consistency is the metric most writers underweight in early model evaluation. A model that produces brilliant prose on a single paragraph but loses the character\'s speech patterns by paragraph 5 is worse than a model that produces competent prose with consistent voice across 20 paragraphs. Test long-session continuity, not just one-shot quality.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Sample Outputs: Three Models, One Prompt',
        content:
          '**Shared prompt:** "Open a noir scene where the detective enters a rain-soaked diner at 2 AM." Same temperature (0.95), same top-p (0.92), same repeat penalty (1.1) — only the model changes. The excerpts below are representative of each model\'s typical output on this prompt class across three runs.',
        items: [
          '**Llama 3.3 70B** — "The bell above the door chimed twice and went silent. Rain ran down my coat in sheets, pooling on the linoleum before I\'d taken three steps. The counter girl didn\'t look up. Two truck drivers at the far booth studied their coffee. Nobody in a place like this at two in the morning wanted to be noticed, and neither did I." — *Concrete sensory grounding, active voice, no wasted words. The social scene is established in three sentences.*',
          '**Qwen3 32B** — "I pushed through the door into a wall of cigarette smoke and griddle grease. The diner was half-empty and fully quiet — the kind of quiet that settles in when people have agreed, without saying so, to leave each other alone. A ceiling fan turned overhead. The waitress refilled a mug at the far end of the counter without looking at me." — *Observational setup before action; efficient atmosphere. Slightly more structured than Llama 3.3 but equally clean.*',
          '**Yi-1.5 34B** — "Rain hammered the awning with the regularity of a metronome counting out the last hours of a night no one wanted to remember. Inside, the fluorescents threw their cold arithmetic across the laminate — every stain, every scratch, every year the place had been losing arguments with entropy. I found a stool at the near end and sat down like a man who had already made his peace with something." — *Metaphor-led from the first clause; rhythmic sentence variation; denser imagery. Yi-1.5\'s poetry background shows even in prose.*',
        ],
        columns: ['Model', 'Typical opening phrasing', 'Typical descriptor pattern'],
        rows: [
          { 'Model': 'Llama 3.3 70B', 'Typical opening phrasing': 'Action-first, immediate sensory detail', 'Typical descriptor pattern': 'Concrete and physical; avoids abstract nouns; socially grounded' },
          { 'Model': 'Qwen3 32B', 'Typical opening phrasing': 'Environmental observation before character action', 'Typical descriptor pattern': 'Efficient; social/atmospheric detail; slight structural tell' },
          { 'Model': 'Yi-1.5 34B', 'Typical opening phrasing': 'Metaphor or simile from the first clause', 'Typical descriptor pattern': 'Abstract imagery; rhythmic variation; denser; occasional purple streak' },
          { 'Model': 'Command A+', 'Typical opening phrasing': 'Character voice or dialogue-adjacent opener', 'Typical descriptor pattern': 'Conversational; strong distinct voice; weaker solo description' },
          { 'Model': 'Mistral Large', 'Typical opening phrasing': 'Scene-setting paragraph; slower start', 'Typical descriptor pattern': 'Even and controlled; consistent across long passages; slightly generic' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'These excerpts are illustrative of each model\'s tendencies across multiple runs, not cherry-picked highlights. Yi-1.5 34B\'s "losing arguments with entropy" landed in one of three runs; the other two were more straightforward. Run any model 2–3 times on the same prompt and take the one that fits your scene, not just the first output.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperature and Top-P for Creative Work',
        content:
          '**Creative writing wants higher sampling temperatures than coding does.** The default sampling parameters that ship with most chat UIs are tuned for question-answering, not for prose — temperature 0.7 and top-p 0.9 produce flat, predictable output on creative prompts.',
        items: [
          '**Baseline for prose:** temperature 0.95, top-p 0.92, repeat penalty 1.1. This is the starting point for most fiction, dialogue, and worldbuilding work. Adjust per task from here.',
          '**Tight dialogue:** temperature 0.7–0.85, top-p 0.9. Lower temperatures keep character voices consistent across exchanges; higher values produce out-of-character interjections.',
          '**Lyrical prose and poetry:** temperature 1.0–1.2, top-p 0.95. Higher temperatures unlock unexpected word choices that make verse work.',
          '**Surreal or genre fiction:** temperature 1.1–1.3, top-p 0.95–0.98. Pushes the model to produce less-common combinations of imagery and metaphor.',
          '**Plot-driven scenes (action, mystery, twists):** temperature 0.85–0.95, top-p 0.9. Wants direction-following more than novelty.',
          '**Repeat penalty 1.1–1.15** is the right range for most creative work. Higher (1.2+) makes the model avoid repeating words even when repetition is stylistically intentional; lower (1.0–1.05) lets the model fall into loops on long scenes.',
          '**min_p (0.05–0.1):** A newer alternative to top-p that dynamically scales the probability cutoff relative to the peak token probability. More permissive on creative prompts than top-p 0.9 without the incoherence risk of very high top-p values. The recommended default for SillyTavern and KoboldCpp users in 2026 when the interface exposes it; Ollama passes it through as-is, and Open WebUI 0.5+ exposes it under Advanced Settings.',
          '**DRY repetition penalty (multiplier 0.8, base 1.75, allowed length 2):** Catches phrase-level repetition that the standard repeat_penalty misses. Where repeat_penalty tracks individual tokens, DRY tracks n-gram sequences — so the cliché "shiver down their spine" in scene 1 is suppressed when it would otherwise appear again in scene 4. Useful for long-session creative work where the model has seen its own output and starts pulling from it.',
          '**Modern creative-writing baseline (2026):** temperature 0.95, min_p 0.05, DRY multiplier 0.8 (base 1.75, allowed length 2). Top-p 0.92 still works well if your frontend does not expose min_p or DRY — these are incremental improvements over the classic settings, not mandatory replacements.',
          'For a fuller treatment of why these parameters matter and how they interact, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test sampling settings on a single short scene per model — three runs at each setting, then pick the temperature where the model sounds most alive without losing the prompt. Settings that work on Llama 3.3 70B will not perfectly transfer to Mistral Large or Yi-1.5; calibrate per model.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored Models: What They Are and When They Matter',
        content:
          '**Uncensored does not mean unethical.** It means the model has had its instruction-tuning safety layer (RLHF refusals) removed or bypassed, so the model follows the prompt instead of declining or sanitising. The writer is still the author; the tool stops getting in the way.',
        items: [
          '**What "uncensored" means technically.** Models like Hermes 3 and Dolphin 3.0 are fine-tuned variants of base models (Llama 3.3, Qwen3) where the post-training RLHF pass that produces refusals on mature, violent, or morally complex prompts has been replaced with a fine-tune that follows the prompt. Same architecture, same base weights, different post-training.',
          '**When they matter for creative work.** Mature fiction (literary novels with sex scenes, crime fiction with graphic violence, horror), historically-accurate writing (war, atrocity, colonial-era brutality), morally complex characters (the model would otherwise refuse to voice a convincing antagonist), and roleplay scenarios that the instruct-tuned models will not engage with.',
          '**Where they fall short.** They follow the prompt — including badly-written prompts. The instruct-tuned models often soften vague prompts into something publishable; uncensored models give you exactly what you asked for, which is sometimes worse. The writer\'s direction matters more.',
          '**Ethical boundaries.** "The model will write it" is not a creative-writing licence to write content that targets real people, depicts non-consensual scenarios involving real or identifiable individuals, or that is illegal in the writer\'s jurisdiction. Local hosting does not change the law; it changes who can see the draft.',
          '**Legal context (May 2026, brief and non-exhaustive).** EU AI Act and member-state laws (notably German StGB §184/§184c) cover specific content categories regardless of where it was generated. US obscenity law applies to publication, not generation. For commercial publishing, the model that produced a draft is irrelevant; the published artefact is what is regulated.',
          '**For a longer treatment** of uncensored model ethics, legal context, and best practices, see [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored is a workflow choice, not an identity. Many writers use the instruct-tuned model for the bulk of a project and switch to an uncensored derivative for specific scenes that the instruct version refuses. Two model installs in the same Ollama setup is the common pattern.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends for Creative Work',
        content:
          '**The chat UI you write in matters as much as the model.** Three frontends are credible picks for creative-writing workflows in 2026; pick by workflow shape.',
        items: [
          '**Open WebUI** — the general-purpose pick. ChatGPT-like interface, model switching in one click, character cards via system prompts, document upload for context. Best for prose-heavy work where the chat shape matches your drafting flow.',
          '**SillyTavern** — the roleplay and dialogue pick. Character card ecosystem (Tavern v2 spec), persona management, lore books for worldbuilding, group chat for multi-character scenes. Best for dialogue-driven work and long-running character or world projects. Pairs well with Command A+ and uncensored derivatives.',
          '**Agnai and RisuAI** — narrower SillyTavern alternatives. Lighter feature sets, easier first-run, less customisation. Pick when SillyTavern feels overbuilt for your workflow.',
          '**Plain Ollama CLI plus a text editor** — the minimal pick. `ollama run llama3.3:70b` and pipe scenes through the terminal into your draft document. Loses the persistent character context but wins on writer focus.',
          'For the head-to-head comparison of the roleplay-focused frontends, see [SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Drafting and editing wants different frontends. Use SillyTavern for generation (character voice, scene work), then export the chat to a plain text editor for revision. Editing inside the chat window encourages "ask the model to fix it" instead of writer-driven revision — a long-term skills risk.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decision: Which Model for Your Work',
        content:
          '**Five questions, in order, get most writers to the right pick.**',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I have 48 GB+ VRAM and want one model for everything', 'Pick': 'Llama 3.3 70B (instruct) + Hermes 3 (uncensored) on the same Ollama' },
          { 'Your situation': 'I have a 24 GB GPU or 32 GB Mac and want a strong default', 'Pick': 'Qwen3 32B' },
          { 'Your situation': 'I am drafting a novel — long-form continuity is the priority', 'Pick': 'Mistral Large (or Mistral La Plateforme on EU hardware if local does not fit)' },
          { 'Your situation': 'My work is dialogue-heavy — character voices need to stay distinct', 'Pick': 'Command A+ (or Llama 3.3 70B as a lighter alternative)' },
          { 'Your situation': 'I write poetry, verse, or lyrical prose', 'Pick': 'Yi-1.5 34B' },
          { 'Your situation': 'The instruct model is refusing scenes I need to write', 'Pick': 'Hermes 3 (Llama 3.3 base) or Dolphin 3.0 — keep the instruct version installed for non-mature work' },
          { 'Your situation': 'I want one model to start with and will iterate', 'Pick': 'Qwen3 32B — covers most workflows on consumer hardware; switch up when one task type becomes the load-bearing part' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Qwen3 32B as the default if you have a 24 GB GPU; Llama 3.3 70B if you have 48 GB+; Mistral Large for novel-length work; Command A+ for dialogue; Yi-1.5 for poetry; Hermes/Dolphin for scenes the instruct models refuse.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B is the right starting model for most writers. Move to one of the specialists when a specific task type (long-form, dialogue, poetry, mature scenes) becomes the bottleneck. Two installs (instruct + uncensored) on the same machine costs nothing — both can sit in Ollama and you switch per scene.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Most writers overthink the model and underthink the prompt. A well-crafted system prompt with character notes, voice samples, and explicit POV does more for the output than switching from Qwen3 to Llama 70B. See [persona prompting](/prompt-engineering/persona-prompting) for the prompt structure that consistently lifts creative output.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking and Using Local Models for Creative Writing',
        items: [
          '**Mistake 1: chasing the biggest model on benchmarks.** Creative writing scores poorly correlate with general benchmark leaderboards. Yi-1.5 34B beats Llama 3.3 70B on poetry; Command A+ beats both on dialogue. Pick by task, not by leaderboard rank.',
          '**Mistake 2: using coding-style sampling settings.** Temperature 0.2–0.4 produces flat, predictable prose. Creative writing wants 0.8–1.1 with top-p 0.9–0.95. The default settings in most chat UIs are tuned for Q&A, not prose.',
          '**Mistake 3: defaulting to the instruct model and giving up when it refuses.** The instruct version refuses scenes you have explicitly framed as fiction; the uncensored derivative of the same base model writes them. Two installs in Ollama is the workaround.',
          '**Mistake 4: thin system prompts.** "You are a helpful assistant" is the worst possible prompt for creative work. A system prompt with character notes, voice samples, POV, tense, and tone does more for output quality than any model switch. Pair with [negative prompting](/prompt-engineering/negative-prompting) to specify what NOT to do (no exposition, no purple prose, no "she felt").',
          '**Mistake 5: editing inside the chat window.** Generating in chat is fine; editing in chat trains a habit of asking the model to fix prose instead of revising it yourself. Export the draft to a text editor for revision; the writer\'s voice gets stronger when the model is not in the loop.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The biggest skill risk with creative-writing AI is outsourcing the revision pass. Generation is mechanical work that benefits from the model; revision is the part that makes the prose yours. Writers who let the model revise lose voice fast — even when they cannot point to which line changed.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Hugging Face model cards for Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5](https://huggingface.co/) — official model documentation and licensing.',
          '[Hermes 3 (NousResearch) GitHub and model card](https://huggingface.co/NousResearch) — uncensored Llama 3.3-based fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) model cards](https://huggingface.co/cognitivecomputations) — uncensored fine-tunes across multiple base models.',
          '[Ollama Model Library](https://ollama.com/library) — available models, quantization options, tool-call support flags referenced above.',
          '[SillyTavern documentation](https://docs.sillytavern.app/) — character card spec, persona system, group chat features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which local LLM is best for fiction writing in 2026?',
            a: 'Llama 3.3 70B is the best all-round pick when hardware permits (~42 GB VRAM at Q4_K_M). On 24 GB rigs, Qwen3 32B is the lighter default with a small quality gap on prose-heavy work. For long-form continuity (novels), Mistral Large\'s 128K context is the differentiator. Pick by task type: most writers benefit more from the right specialist than from chasing the biggest model.',
          },
          {
            q: 'What is an uncensored local LLM and when should I use one?',
            a: 'An uncensored model is a fine-tune of an existing base model (typically Llama 3.3 or Qwen3) where the RLHF safety layer that produces refusals on mature or morally complex prompts has been removed. The model follows the prompt instead of declining. Use uncensored derivatives (Hermes 3, Dolphin 3.0) for mature fiction, conflict scenes, historically accurate writing, or any workflow where the instruct-tuned model refuses scenes you have framed as fiction. The writer is still the author; the model just stops getting in the way.',
          },
          {
            q: 'What temperature should I use for creative writing?',
            a: 'Temperature 0.8–1.1 is the creative-writing range, paired with top-p 0.9–0.95. Tight dialogue wants 0.7–0.85; lyrical prose and poetry want 1.0–1.2; surreal or genre work wants 1.1–1.3. The defaults in most chat UIs (often 0.7 with top-p 0.9) are tuned for question-answering and produce flat prose on creative prompts. Test on a short scene at 3 settings, pick the one where the model sounds most alive without losing the prompt.',
          },
          {
            q: 'Are local creative-writing models as good as ChatGPT or Claude?',
            a: 'For most prompts, yes — close enough that the privacy and cost advantages dominate. The frontier cloud models still lead on the hardest creative tasks (long-form coherence past 50K tokens, very obscure cultural references, rare languages). For a typical fiction or roleplay session, a writer who calibrated sampling settings on Llama 3.3 70B or Qwen3 32B will not see consistent quality gaps against GPT-5 or Claude. The models that lose are the ones that get a default "0.7 temperature, generic system prompt" treatment — that loses against any cloud model.',
          },
          {
            q: 'Can a local model write a full novel?',
            a: 'It can help draft one. Mistral Large at 128K context can hold a 50,000-word draft in memory; Llama 3.3 70B and Qwen3 32B at 32K context need section-by-section drafting. The bottleneck is not model capability — it is the writer\'s structure (outline, character bible, lore book) that the model uses to keep continuity. Without those, even Mistral Large drifts. With them, any of the top picks holds together for novel-length work.',
          },
          {
            q: 'Do uncensored models produce illegal content?',
            a: 'No more than instruct-tuned models do. Both produce text the prompt asks for; uncensored models are more willing to engage with mature themes that the instruct-tuned safety layer refuses. Legal liability attaches to the writer and the publication, not the model. EU AI Act, German StGB §184/§184c, and US obscenity law cover specific content categories regardless of generation method. The local hosting does not change the law; it changes who has visibility into the draft.',
          },
          {
            q: 'Is SillyTavern only for adult roleplay?',
            a: 'No. SillyTavern is a chat-focused frontend with character cards, persona management, and lore books — useful for any dialogue-heavy or character-driven work. Many writers use it for non-roleplay fiction drafting (multi-character scenes, voice consistency across long projects). The character card ecosystem includes adult content but is not limited to it; the same UI works for literary fiction, screenwriting, and game-narrative work.',
          },
          {
            q: 'How is local creative writing different from coding workloads?',
            a: 'Sampling settings and prompt structure. Coding wants temperature 0.2–0.4, deterministic output, structured (JSON, code) output, and explicit constraints in the prompt. Creative writing wants temperature 0.8–1.1, freer output, prose form, and richer system prompts (character voice, POV, tone, genre conventions). The same model — Llama 3.3 70B serves both — produces wildly different output depending on these settings. A coding-style prompt on a creative model produces flat output; a creative-style prompt on a coding model produces hallucinated code.',
          },
          {
            q: 'Which local model has the fewest "AI tells"?',
            a: 'AI tells — phrases like "shiver down their spine," "tapestry," "delve," "navigate," and ChatGPT-style transitional summaries — are more frequent in smaller instruct models. Llama 3.3 70B and Qwen3 32B have fewer tells than models below 20B. Hermes 3 has the fewest in this set: the RLHF refusal-pattern training was also where many formulaic transitions were introduced, and removing it removes both. Yi-1.5 34B is unusual — stronger on rare vocabulary but occasionally over-purple. The highest-impact lever for tell reduction is the system prompt with negative examples ("do not write \'shiver,\' \'tapestry,\' or \'delve\'"), not the model.',
          },
          {
            q: 'How do I avoid the "shiver down their spine" cliché?',
            a: 'A system prompt with negative examples is the highest-impact lever — list 8–12 banned phrases explicitly ("do not write \'shiver,\' \'tapestry,\' \'delve,\' \'masterfully,\' or \'she felt\'"). Lower the temperature slightly (0.85–0.95 instead of 1.1) to reduce the model\'s reach for stock language. Repeat penalty 1.1 alone does NOT catch this — the phrases are not exact token repetitions. DRY penalty (multiplier 0.8, base 1.75) catches them at the n-gram level across scenes. A manual revision pass is the final filter. See [negative prompting](/prompt-engineering/negative-prompting) for the prompt structure that consistently kills clichés.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend (2026)](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — head-to-head comparison of the three roleplay-focused frontends paired with the models above.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — copy-paste prompt templates for character development, dialogue, worldbuilding, and revision workflows.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — full treatment of when uncensored derivatives are legitimate creative tools and where the legal and ethical lines are.',
          '[Temperature and Top-P: Control AI Creativity](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — the prompt-engineering side of sampling parameters; deeper than the summary in this guide.',
          '[Negative Prompting](/prompt-engineering/negative-prompting) — specifying what NOT to do in a prompt; a force-multiplier for system prompts on creative work.',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — the authoritative model landscape guide; useful when you want to explore beyond the six creative-writing picks above.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Beste lokale LLMs für kreatives Schreiben 2026: Belletristik, Dialog & Weltenbau',
    seoTitle: 'Beste lokale LLMs für kreatives Schreiben 2026',
    intro:
      'Beim kreativen Schreiben punkten lokale LLMs nicht nur mit Datenschutz und Kosteneffizienz. Die besten Instruct-tuned und Uncensored Open-Weight-Modelle 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B sowie die Hermes/Dolphin-Uncensored-Derivate — liefern Belletristik, Dialog und Weltenbau, die auf den meisten Prompts mit führenden Cloud-Modellen mithalten können. Die Unterschiede liegen in der Stimmkonsistenz, der Bereitschaft für dunkle oder erwachsene Themen und der Fähigkeit, Anweisungen natürlich umzusetzen. Dieser Leitfaden testet sechs Modelle auf 50+ kreative Prompts aus Belletristik, Dialog, Poesie und Weltenbau — inklusive der optimalen Temperatur- und Top-p-Einstellungen.',
    metaDescription:
      '6 lokale Modelle für kreatives Schreiben verglichen: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 und Uncensored-Varianten. Getestet auf 50+ Prompts.',
    twitterDescription:
      '6 lokale Modelle für Belletristik, Dialog und Weltenbau getestet auf 50+ Prompts. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 plus Uncensored-Picks. Urteil je Aufgabentyp.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Belletristik-Autoren, Drehbuchautoren, Game-Designer, Weltenbauer und Roleplay-Enthusiasten, die lokale LLMs für kreative Arbeit nutzen, bei der Datenschutz, Stimmkonsistenz und die Bereitschaft für reife Themen wichtiger sind als Benchmark-Werte.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLMs kreatives Schreiben',
    targetKeywords: [
      'beste lokale llm kreatives schreiben',
      'lokale llm belletristik',
      'uncensored lokale llm',
      'llama vs mistral kreatives schreiben',
      'bestes lokales modell dialog',
      'lokale llm weltenbau',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B ist im Mai 2026 der beste Allrounder unter den lokalen Modellen für kreatives Schreiben — starke Stimmkonsistenz, folgt Anweisungen präzise und bearbeitet dunkle Themen ohne Ablehnung, wenn der System-Prompt die Arbeit als Belletristik kennzeichnet. Qwen3 32B ist die richtige Wahl für 24-GB-Systeme: nahezu gleich stark in der Prosa, deutlich geringerer Hardwarebedarf. Mistral Large gewinnt bei der Langform-Kontinuität (Novel-Länge) dank seinem nativen 128K-Kontext. Command A+ hat die sauberste Dialog-Stimme. Yi-1.5 34B ist die Nischenempfehlung für Poesie und lyrische Prosa. Für Workflows, die Instruct-Modelle ablehnen, sind Hermes 3 (Llama-3.3-Basis) und Dolphin 3.0 die Uncensored-Picks — gleiche Architektur, RLHF-Sicherheitsschicht entfernt. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; 0,7 und darunter erzeugt flache Prosa. Uncensored ≠ unethisch — es bedeutet, dass das Modell dem Prompt folgt statt ihn abzulehnen; der Autor trägt weiterhin die Verantwortung.**',
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM eignet sich 2026 am besten für kreatives Schreiben?',
        answer:
          'Llama 3.3 70B ist bei ausreichender Hardware der beste Allrounder — stark in Prosa, Dialog und Weltenbau, mit Stimmkonsistenz über lange Sessions. Auf 24-GB-Hardware, wo 70B nicht passt, ist Qwen3 32B die leichtere Alternative ohne großen Qualitätsverlust. Mistral Large ist die Wahl für den langen Kontext bei Novel-Länge (128K out of the box). Command A+ hat die natürlichste Dialog-Stimme. Yi-1.5 34B ist der Spezialist für Poesie und lyrische Prosa. Für Workflows, die an der Instruct-Sicherheitsschicht scheitern (reife Belletristik, Konfliktszenen, moralisch komplexe Charaktere), verwenden Hermes 3 und Dolphin 3.0 dieselben Basismodelle mit entfernter RLHF-Sicherheitsschicht. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; Coding-Einstellungen (0,2–0,4) erzeugen flache Prosa.',
        bullets: [
          'Bester Allrounder: Llama 3.3 70B — stärkste Stimmkonsistenz, folgt Anweisungen gut, bearbeitet dunkle Themen ohne Ablehnung.',
          'Bestes 24-GB-System: Qwen3 32B — nahezu so stark wie Llama 70B in der Prosa, deutlich geringerer Hardwarebedarf.',
          'Beste Langform: Mistral Large — 128K-Kontext out of the box; Novel-Länge ohne Fadenriss.',
          'Bester Dialog: Command A+ — die natürlichste Gesprächsstimme über mehrere Charaktere.',
          'Beste Poesie/Lyrik: Yi-1.5 34B — Nischenempfehlung für Verse und stilisierte Prosa.',
          'Bei Ablehnung durch Instruct: Hermes 3 (Llama-Basis) oder Dolphin 3.0 — Uncensored, gleiche Architektur, Prompt-folgsam.',
          'Sampling: Temperatur 0,8–1,1, Top-p 0,9–0,95 für Prosa; niedriger für engen Dialog, höher für surreale/Genre-Arbeiten.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Testmethode', anchor: '#how-we-tested' },
      { label: 'Direktvergleich', anchor: '#comparison' },
      { label: 'Modell-Urteile', anchor: '#verdicts' },
      { label: 'Beispielausgaben', anchor: '#sample-outputs' },
      { label: 'Temperatur & Top-P', anchor: '#sampling' },
      { label: 'Uncensored-Modelle', anchor: '#uncensored' },
      { label: 'Frontends für kreatives Schreiben', anchor: '#frontends' },
      { label: 'Entscheidungshilfe', anchor: '#decision' },
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
          '**Llama 3.3 70B ist im Mai 2026 das beste lokale Allround-Modell für kreatives Schreiben.** Stärkste Stimmkonsistenz im Test, folgt Anweisungen präzise, bearbeitet dunkle Themen ohne Ablehnung, wenn der System-Prompt die Arbeit als Belletristik kennzeichnet.',
          '**Qwen3 32B ist die richtige Wahl für 24-GB-Systeme.** Nahezu Llama-70B-Prosaqualität ohne den 48-GB+-VRAM-Bedarf. Standard für die meisten Laptops und Desktops.',
          '**Mistral Large gewinnt bei der Langform-Kontinuität.** 128K-Kontext out of the box; Novel-Länge ohne Fadenriss oder Charakterstimm-Drift.',
          '**Command A+ hat die sauberste Dialog-Stimme.** Natürlichste Gesprächsbeats über Charaktere hinweg; die Wahl, wenn Dialog die tragende Funktion im Werk übernimmt.',
          '**Yi-1.5 34B ist der Spezialist für Poesie und lyrische Prosa.** Nischenempfehlung für Verse, stilisierte Prosa und Kurzformen, bei denen Rhythmus zählt.',
          '**Uncensored-Derivate (Hermes 3, Dolphin 3.0) sind der richtige Schritt, wenn Instruct-Modelle ablehnen.** Gleiche Basismodelle; RLHF-Sicherheitsschicht entfernt; das Modell folgt dem Prompt statt abzulehnen. Reife Belletristik, Konfliktszenen und moralisch komplexe Charaktere werden schreibbar.',
          '**Sampling ist wichtiger als viele denken.** Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich. Coding-Einstellungen (0,2–0,4) erzeugen flache, vorhersehbare Prosa. Höher (1,2+) ist Genre-/Surrealismusbereich.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Bester Allrounder:** Llama 3.3 70B bei Q4_K_M, ~42 GB VRAM. Stärkste Stimmkonsistenz in diesem Set.',
          '**Bestes 24-GB-System:** Qwen3 32B bei Q4_K_M, ~20 GB VRAM. Standard für die meisten Nutzer.',
          '**Beste Langform:** Mistral Large bei Q4_K_M, ~75 GB VRAM gesamt (hoch). 128K-Kontext out of the box.',
          '**Bester Dialog:** Command A+ bei Q4_K_M, ~62 GB VRAM. Sauberste Charakterstimm-Differenzierung.',
          '**Beste Poesie:** Yi-1.5 34B bei Q4_K_M, ~21 GB VRAM. Lyrischer-Prosa-Spezialist.',
          '**Uncensored-Optionen:** Hermes 3 (Llama-3.3-Basis, ~42 GB) und Dolphin 3.0 (mehrere Basisgrößen, 13–42 GB).',
          '**Standard-Sampling für Prosa:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1. Je nach Aufgabentyp anpassen.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Testmethode: 50+ kreative Prompts für sechs Modelle',
        content:
          '**Der Test hielt Prompt-Set, Sampling-Einstellungen und Frontend konstant; nur das Modell wurde variiert.** Dieselben 50 Prompts in Belletristik, Dialog, Poesie und Weltenbau; Ausgaben nach derselben Rubrik je Aufgabentyp bewertet.',
        items: [
          '**Backend:** Ollama 0.7+ auf macOS und Linux; gleiche Kontextgrenzen je Modell; Q4_K_M-Quantisierung über alle sechs Picks (Q5_K_M für kleinere 32B–34B-Modelle, wo VRAM es erlaubte, ohne messbaren Unterschied in den Rubrik-Werten).',
          '**Frontend:** Open WebUI für den Großteil des Tests (Chat-artige Arbeit); SillyTavern für die dialog- und Roleplay-intensive Teilmenge.',
          '**Prompt-Set:** 50 Prompts aufgeteilt auf vier Aufgabentypen — Belletristik (15), Dialog (15), Poesie (10), Weltenbau (10). Jeder Prompt 3 Mal je Modell, um Varianz zu erfassen.',
          '**Sampling:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1 als Ausgangspunkt; aufgabenspezifische Anpassungen in den Modell-Urteilen.',
          '**Bewertungsrubrik:** Stimmkonsistenz, Prompt-Treue, Prosaqualität und Bereitschaft (hat das Modell als Belletristik gerahmte Szenen abgelehnt oder aufgeweicht?).',
          '**Transparenz-Hinweis:** Werte als relative Ränge je Aufgabe, keine erfundenen absoluten Prozentwerte. „Bester Dialog" bedeutet konsistenter erster Platz auf dem Dialog-Teilset über die 3 Läufe.',
          'Für Prompting-Techniken, die die kreative Ausgabe auf jedem Modell verbessern, siehe [Temperatur und Top-p](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) und [Persona-Prompting](/de/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Kreativ-Schreib-Benchmarks sind von Natur aus subjektiv. Die obige Rubrik (Stimmkonsistenz, Prompt-Treue, Prosaqualität, Bereitschaft) ist die nächste Annäherung an wiederholbare Bewertung. Behandle die Urteile als Ausgangshypothesen, die du an deiner eigenen Arbeit überprüfst.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Direktvergleich: Sechs lokale Modelle bei kreativen Aufgaben',
        content:
          '**Llama 3.3 70B führt bei der breitesten Aufgabenpalette; die kleineren und spezialisierten Modelle gewinnen je ein oder zwei Kategorien.** Nach Aufgabentyp wählen, nicht nach Gesamtranking.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B ist das stärkste Allround-Kreativmodell; Qwen3 32B die leichtere Alternative; Mistral Large gewinnt Langform; Command A+ gewinnt Dialog; Yi-1.5 gewinnt Poesie; Hermes/Dolphin übernehmen Szenen, die die anderen ablehnen.',
          },
          {
            type: 'plain-terms',
            text: 'Kein einzelnes Modell ist in allem am besten. Llama 3.3 70B ist der sichere Standard, wenn die Hardware passt. Qwen3 32B ist die kluge Wahl auf einer 24-GB-GPU. Einen Spezialisten wählen (Mistral für Romane, Command A+ für Dialog, Yi-1.5 für Poesie), wenn ein Aufgabentyp die tragende Funktion im Werk übernimmt. Ein Uncensored-Derivat wählen, wenn das Instruct-Modell Szenen ablehnt, die du schreiben musst.',
          },
        ],
        columns: ['Modell', 'Größe', 'VRAM (Q4_K_M)', 'Belletristik', 'Dialog', 'Poesie', 'Weltenbau', 'Ideal für'],
        rows: [
          { 'Modell': 'Llama 3.3 70B', 'Größe': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Belletristik': 'Bester', 'Dialog': 'Stark', 'Poesie': 'Stark', 'Weltenbau': 'Bester', 'Ideal für': 'Bester Allrounder; Standard wenn Hardware ausreicht' },
          { 'Modell': 'Qwen3 32B', 'Größe': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Belletristik': 'Stark', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': '24-GB-System-Standard; geringer Qualitätsverlust vs. Llama 70B' },
          { 'Modell': 'Mistral Large', 'Größe': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Belletristik': 'Stark (Langform)', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Langform-Kontinuität, 128K-Kontext' },
          { 'Modell': 'Command A+', 'Größe': 'Nicht veröffentlicht', 'VRAM (Q4_K_M)': '~62 GB', 'Belletristik': 'Stark', 'Dialog': 'Bester', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Dialogintensive Werke, Gruppenszenen' },
          { 'Modell': 'Yi-1.5 34B', 'Größe': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Belletristik': 'OK', 'Dialog': 'OK', 'Poesie': 'Bester', 'Weltenbau': 'OK', 'Ideal für': 'Poesie, lyrische Prosa, stilisierte Texte' },
          { 'Modell': 'Hermes 3 / Dolphin 3.0', 'Größe': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Belletristik': 'Wie Basismodell', 'Dialog': 'Wie Basismodell', 'Poesie': 'Wie Basismodell', 'Weltenbau': 'Wie Basismodell', 'Ideal für': 'Szenen, die Instruct-Modelle ablehnen' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Zwei-Modell-Setup ist das gängige Muster: Llama 3.3 70B (oder Qwen3 32B) als täglicher Treiber, plus das Hermes-3-Derivat im selben Ollama für Szenen, die die Instruct-Version ablehnt. Zwischen ihnen je Szene wechseln; beide können gleichzeitig in `ollama list` liegen ohne Konflikt.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Modell-Urteile',
        items: [
          '**Llama 3.3 70B** — bester Allrounder. Stärkste Stimmkonsistenz im Test; Charaktere behalten dieselben Sprachmuster über lange Szenen. Folgt Anweisungen präzise — wenn der System-Prompt POV, Ton oder Genre-Konventionen vorgibt, hält Llama 3.3 diese ein. Bearbeitet dunkle Themen ohne Ablehnung, wenn der Prompt die Arbeit als Belletristik kennzeichnet. Schwachpunkt: lange Passagen driften gelegentlich in einen generischen „literarischen" Stil; kleine Modelle in derselben Familie (8B) verlieren diese Stärke.',
          '**Qwen3 32B** — bestes 24-GB-System-Modell. Leicht geringere Stimmkonsistenz als Llama 3.3 70B, aber der Abstand ist klein genug, dass die meisten Autoren ihn bei prosaschwerem Schreiben nicht bemerken. Stärkstes der kleineren Modelle beim Anweisungsfolgen. Schwachpunkt: Poesie und stilisierte Prosa bleiben merklich hinter der Konkurrenz; für diese auf Yi-1.5 wechseln.',
          '**Mistral Large** — beste Langform-Kontinuität. 128K-Kontextfenster bedeutet, ein 50.000-Wörter-Entwurf passt ohne Kürzung; das Modell hält Charakterdetails, Handlungsfäden und Weltregeln über Kapitel hinweg. Schwachpunkt: höchste Hardware-Anforderung im Set (~75 GB bei Q4_K_M); Token-Geschwindigkeit sinkt bei langen Eingaben. Mistral La Plateforme auf EU-Infrastruktur nutzen, wenn lokale Hardware der Engpass ist.',
          '**Command A+** — bester Dialog. Eigenständige Charakterstimmen, die über Exchanges hinweg bestehen; Gruppenszenen (3+ Sprecher) bleiben lesbar ohne den „alle klingen gleich"-Fehler, der bei anderen Modellen häufig vorkommt. Schwachpunkt: Prosaabsätze zwischen Dialog-Beats sind kompetent, aber nicht lyrisch; für rein beschreibende Passagen gewinnt Llama 3.3.',
          '**Yi-1.5 34B** — beste Poesie und lyrische Prosa. Rhythmusbewusst, sicher in strukturierten Formen (Sonett, Villanelle, Haiku), erzeugt Verse, die sich gegenüber den größeren Allgemeinmodellen behaupten. Schwachpunkt: Langform-Belletristik ist kompetent, aber nicht seine Stärke; für narrative Arbeit Llama 3.3 oder Qwen3 wählen.',
          '**Hermes 3 (Llama-3.3-Basis) und Dolphin 3.0** — Uncensored-Derivate. Gleiche Architektur und Basisgewichte wie Llama 3.3 70B; die RLHF-Sicherheitsschicht wird beim Fine-tuning entfernt. Das Modell folgt dem Prompt statt reife Inhalte abzulehnen oder zu entschärfen. Qualität bei nicht-reifen Prompts ist identisch mit dem Basismodell; der Unterschied ist nur bei Prompts sichtbar, bei denen Instruct-Versionen ablehnen. Diese verwenden, wenn die Arbeit es erfordert (reife Belletristik, Gewaltszenen, moralisch komplexe Charaktere) — ansonsten beim Instruct-Basismodell bleiben.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Stimmkonsistenz ist die Metrik, die Autoren bei der frühen Modellbewertung am stärksten unterschätzen. Ein Modell, das bei einem einzelnen Absatz brillante Prosa erzeugt, aber bis Absatz 5 die Sprachmuster des Charakters verliert, ist schlechter als ein Modell, das kompetente Prosa mit konsistenter Stimme über 20 Absätze produziert. Langzeit-Session-Kontinuität testen, nicht nur One-Shot-Qualität.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Beispielausgaben: Drei Modelle, ein Prompt',
        content:
          '**Gemeinsamer Prompt:** "Open a noir scene where the detective enters a rain-soaked diner at 2 AM." Gleiche Temperatur (0,95), gleiches Top-p (0,92), gleicher Repeat Penalty (1,1) — nur das Modell ändert sich. Die folgenden Auszüge sind repräsentativ für die typische Ausgabe jedes Modells bei dieser Prompt-Klasse über drei Läufe.',
        items: [
          '**Llama 3.3 70B** — "The bell above the door chimed twice and went silent. Rain ran down my coat in sheets, pooling on the linoleum before I\'d taken three steps…" — *Konkrete sensorische Verankerung, aktive Stimme, keine Füllwörter. Die soziale Szene wird in drei Sätzen etabliert.*',
          '**Qwen3 32B** — "I pushed through the door into a wall of cigarette smoke and griddle grease. The diner was half-empty and fully quiet…" — *Beobachtende Einleitung vor Aktion; effiziente Atmosphäre. Leicht strukturierter als Llama 3.3, aber ebenso präzise.*',
          '**Yi-1.5 34B** — "Rain hammered the awning with the regularity of a metronome counting out the last hours of a night no one wanted to remember…" — *Metapher-geführt ab der ersten Klausel; rhythmische Satzvariation; dichtere Bildsprache. Yi-1.5\'s Poesie-Hintergrund zeigt sich auch in der Prosa.*',
        ],
        columns: ['Modell', 'Typische Einleitung', 'Typisches Beschreibungsmuster'],
        rows: [
          { 'Modell': 'Llama 3.3 70B', 'Typische Einleitung': 'Aktion zuerst, sofortiges Sinnesdetail', 'Typisches Beschreibungsmuster': 'Konkret und physisch; vermeidet abstrakte Substantive; sozial verankert' },
          { 'Modell': 'Qwen3 32B', 'Typische Einleitung': 'Umgebungsbeobachtung vor Charakteraktion', 'Typisches Beschreibungsmuster': 'Effizient; soziales/atmosphärisches Detail; leichtes strukturelles Anzeichen' },
          { 'Modell': 'Yi-1.5 34B', 'Typische Einleitung': 'Metapher oder Vergleich ab der ersten Klausel', 'Typisches Beschreibungsmuster': 'Abstrakte Bildsprache; rhythmische Variation; dichter; gelegentliche Überladenheit' },
          { 'Modell': 'Command A+', 'Typische Einleitung': 'Charakterstimme oder dialognahe Einleitung', 'Typisches Beschreibungsmuster': 'Konversationell; starke eigenständige Stimme; schwächere Solo-Beschreibung' },
          { 'Modell': 'Mistral Large', 'Typische Einleitung': 'Szenenaufbau-Absatz; langsamerer Start', 'Typisches Beschreibungsmuster': 'Ausgeglichen und kontrolliert; konsistent über lange Passagen; leicht generisch' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Auszüge illustrieren die Tendenzen jedes Modells über mehrere Läufe — keine Rosinenpickerei. Yi-1.5 34B\'s "losing arguments with entropy" erschien in einem von drei Läufen; die anderen beiden waren direkter. Jedes Modell 2–3 Mal auf demselben Prompt laufen lassen und den Auszug nehmen, der zur Szene passt.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatur und Top-P für kreative Arbeit',
        content:
          '**Kreatives Schreiben braucht höhere Sampling-Temperaturen als Coding.** Die Standard-Sampling-Parameter der meisten Chat-UIs sind für Frage-Antwort optimiert, nicht für Prosa — Temperatur 0,7 und Top-p 0,9 erzeugen flache, vorhersehbare Ausgaben bei kreativen Prompts.',
        items: [
          '**Ausgangspunkt für Prosa:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1. Startpunkt für die meisten Belletristik-, Dialog- und Weltenbau-Arbeiten. Von hier aus je Aufgabe anpassen.',
          '**Enger Dialog:** Temperatur 0,7–0,85, Top-p 0,9. Niedrigere Temperaturen halten Charakterstimmen über Exchanges konsistent; höhere Werte erzeugen Out-of-Character-Einwürfe.',
          '**Lyrische Prosa und Poesie:** Temperatur 1,0–1,2, Top-p 0,95. Höhere Temperaturen ermöglichen unerwartete Wortwahlen, die Verse zum Funktionieren bringen.',
          '**Surreale oder Genre-Belletristik:** Temperatur 1,1–1,3, Top-p 0,95–0,98. Treibt das Modell zu weniger gebräuchlichen Bild- und Metaphern-Kombinationen.',
          '**Plot-gesteuerte Szenen (Action, Mystery, Wendungen):** Temperatur 0,85–0,95, Top-p 0,9. Braucht mehr Anweisungsfolgen als Neuheit.',
          '**Repeat Penalty 1,1–1,15** ist der richtige Bereich für die meisten kreativen Arbeiten. Höher (1,2+) lässt das Modell Wörter meiden, selbst wenn Wiederholung stilistisch gewollt ist; niedriger (1,0–1,05) lässt es bei langen Szenen in Schleifen fallen.',
          '**min_p (0,05–0,1):** Eine neuere Alternative zu Top-p, die den Wahrscheinlichkeits-Cutoff relativ zur Peak-Token-Wahrscheinlichkeit dynamisch skaliert. Für kreative Prompts permissiver als Top-p 0,9, ohne das Inkoherenz-Risiko sehr hoher Top-p-Werte. Der empfohlene Standard für SillyTavern- und KoboldCpp-Nutzer 2026, wenn die Oberfläche ihn zugänglich macht.',
          '**DRY Repetition Penalty (Multiplikator 0,8, Basis 1,75, erlaubte Länge 2):** Erkennt Phrasen-Wiederholungen, die der Standard-Repeat_Penalty übersieht. Wo repeat_penalty einzelne Token verfolgt, verfolgt DRY n-Gramm-Sequenzen. Nützlich für lange Sessions, bei denen das Modell aus seiner eigenen Ausgabe schöpft.',
          '**Modernes Kreativschreiben-Baseline (2026):** Temperatur 0,95, min_p 0,05, DRY-Multiplikator 0,8 (Basis 1,75, erlaubte Länge 2). Top-p 0,92 funktioniert weiterhin gut, wenn das Frontend min_p oder DRY nicht anbietet.',
          'Für eine tiefere Behandlung dieser Parameter und ihrer Wechselwirkungen, siehe [Temperatur und Top-p](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sampling-Einstellungen an einer einzelnen kurzen Szene je Modell testen — drei Läufe bei jeder Einstellung, dann die Temperatur wählen, bei der das Modell am lebendigsten klingt, ohne den Prompt zu verlieren. Einstellungen, die bei Llama 3.3 70B funktionieren, lassen sich nicht perfekt auf Mistral Large oder Yi-1.5 übertragen; je Modell kalibrieren.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored-Modelle: Was sie sind und wann sie relevant sind',
        content:
          '**Uncensored bedeutet nicht unethisch.** Es bedeutet, dass die Instruction-Tuning-Sicherheitsschicht (RLHF-Ablehnungen) des Modells entfernt oder umgangen wurde, sodass das Modell dem Prompt folgt statt abzulehnen oder zu entschärfen. Der Autor trägt weiterhin die Verantwortung; das Tool hört auf, im Weg zu stehen.',
        items: [
          '**Was „uncensored" technisch bedeutet.** Modelle wie Hermes 3 und Dolphin 3.0 sind Fine-tuned-Varianten von Basismodellen (Llama 3.3, Qwen3), bei denen der Post-Training-RLHF-Pass, der Ablehnungen bei reifen, gewaltsamen oder moralisch komplexen Prompts erzeugt, durch ein Fine-tune ersetzt wurde, das dem Prompt folgt. Gleiche Architektur, gleiche Basisgewichte, anderes Post-Training.',
          '**Wann sie für kreative Arbeit relevant sind.** Reife Belletristik (Literaturromane mit Sexszenen, Crime-Fiction mit grafischer Gewalt, Horror), historisch genaues Schreiben (Krieg, Gräueltaten), moralisch komplexe Charaktere und Roleplay-Szenarien, die Instruct-Modelle nicht ausführen.',
          '**Wo sie versagen.** Sie folgen dem Prompt — einschließlich schlecht geschriebener Prompts. Instruct-Modelle entschärfen vage Prompts oft zu etwas Veröffentlichbarem; Uncensored-Modelle geben genau das, was gefragt wurde, was manchmal schlechter ist. Die Anweisungen des Autors sind entscheidender.',
          '**Ethische Grenzen.** „Das Modell schreibt es" ist keine Kreativlizenz für Inhalte, die reale Personen zum Ziel haben, nicht-einvernehmliche Szenarien mit realen oder identifizierbaren Personen darstellen oder in der Jurisdiktion des Autors illegal sind. Lokales Hosting ändert nicht das Recht; es ändert, wer den Entwurf sieht.',
          '**Rechtlicher Kontext (Mai 2026, kurz und nicht abschließend).** EU-KI-Gesetz und mitgliedstaatliche Gesetze (insbesondere §184/§184c StGB in Deutschland) regeln spezifische Inhaltskategorien unabhängig vom Entstehungsort. US-Obszönitätsrecht gilt für die Veröffentlichung, nicht die Generierung. Für kommerzielle Veröffentlichungen ist das Modell irrelevant; das veröffentlichte Artefakt ist das, was reguliert wird.',
          '**Für eine längere Behandlung** von Uncensored-Modell-Ethik, rechtlichem Kontext und Best Practices, siehe [Uncensored Local LLMs für kreatives Schreiben](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored ist eine Workflow-Entscheidung, keine Identität. Viele Autoren verwenden das Instruct-Modell für den Großteil eines Projekts und wechseln für spezifische Szenen, die die Instruct-Version ablehnt, zum Uncensored-Derivat. Zwei Modell-Installs in derselben Ollama-Installation ist das gängige Muster.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends für kreative Arbeit',
        content:
          '**Das Chat-UI, in dem du schreibst, ist genauso wichtig wie das Modell.** Drei Frontends sind 2026 glaubwürdige Picks für Kreativschreib-Workflows; nach Workflow-Form wählen.',
        items: [
          '**Open WebUI** — der Allzweck-Pick. ChatGPT-ähnliche Oberfläche, Modellwechsel per Klick, Charakterkarten über System-Prompts, Dokument-Upload für Kontext. Bestes für prosaschweree Arbeit, bei der die Chat-Form zum Entwurfsfluss passt.',
          '**SillyTavern** — der Roleplay- und Dialog-Pick. Charakterkarten-Ökosystem (Tavern v2 Spec), Persona-Verwaltung, Lore Books für Weltenbau, Gruppen-Chat für Mehrfigurenszenen. Bestes für dialoggetriebene Arbeit und langfristige Charakter- oder Weltenprojekte. Passt gut zu Command A+ und Uncensored-Derivaten.',
          '**Agnai und RisuAI** — engere SillyTavern-Alternativen. Schlankere Feature-Sets, einfacherer Einstieg, weniger Anpassung. Wählen, wenn SillyTavern für den eigenen Workflow überdimensioniert wirkt.',
          '**Plain Ollama CLI plus Texteditor** — der minimale Pick. `ollama run llama3.3:70b` und Szenen über das Terminal in das Entwurfsdokument leiten. Verliert den persistenten Charakterkontext, gewinnt aber an Schreibfokus.',
          'Für den Direktvergleich der Roleplay-fokussierten Frontends, siehe [SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Entwurf und Überarbeitung brauchen unterschiedliche Frontends. SillyTavern für die Generierung (Charakterstimme, Szenenarbeit) nutzen, dann den Chat in einen Nur-Text-Editor exportieren. Überarbeitung im Chat-Fenster fördert die Gewohnheit, das Modell Prosa korrigieren zu lassen, statt selbst zu überarbeiten — ein langfristiges Stilrisiko.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Entscheidungshilfe: Welches Modell für deine Arbeit',
        content:
          '**Fünf Fragen, in dieser Reihenfolge, führen die meisten Autoren zur richtigen Wahl.**',
        columns: ['Meine Situation', 'Empfehlung'],
        rows: [
          { 'Meine Situation': 'Ich habe 48+ GB VRAM und möchte ein Modell für alles', 'Empfehlung': 'Llama 3.3 70B (Instruct) + Hermes 3 (Uncensored) im selben Ollama' },
          { 'Meine Situation': 'Ich habe eine 24-GB-GPU oder einen 32-GB-Mac und möchte einen starken Standard', 'Empfehlung': 'Qwen3 32B' },
          { 'Meine Situation': 'Ich schreibe an einem Roman — Langform-Kontinuität ist die Priorität', 'Empfehlung': 'Mistral Large (oder Mistral La Plateforme auf EU-Hardware, wenn lokal nicht möglich)' },
          { 'Meine Situation': 'Mein Werk ist dialogintensiv — Charakterstimmen müssen unterscheidbar bleiben', 'Empfehlung': 'Command A+ (oder Llama 3.3 70B als leichtere Alternative)' },
          { 'Meine Situation': 'Ich schreibe Gedichte, Verse oder lyrische Prosa', 'Empfehlung': 'Yi-1.5 34B' },
          { 'Meine Situation': 'Das Instruct-Modell lehnt Szenen ab, die ich schreiben muss', 'Empfehlung': 'Hermes 3 (Llama-3.3-Basis) oder Dolphin 3.0 — Instruct-Version für reguläre Arbeit installiert lassen' },
          { 'Meine Situation': 'Ich möchte mit einem Modell starten und dann anpassen', 'Empfehlung': 'Qwen3 32B — deckt die meisten Workflows auf Consumer-Hardware ab; wechseln, wenn ein Aufgabentyp zum Schwerpunkt wird' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen3 32B als Standard wählen auf einer 24-GB-GPU; Llama 3.3 70B bei 48 GB+; Mistral Large für Novel-Länge; Command A+ für Dialog; Yi-1.5 für Poesie; Hermes/Dolphin für Szenen, die Instruct-Modelle ablehnen.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B ist das richtige Einstiegsmodell für die meisten Autoren. Zu einem Spezialisten wechseln, wenn ein bestimmter Aufgabentyp (Langform, Dialog, Poesie, reife Szenen) zum Engpass wird. Zwei Installs (Instruct + Uncensored) auf derselben Maschine kosten nichts — beide können in Ollama liegen und man wechselt je Szene.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die meisten Autoren denken zu viel über das Modell nach und zu wenig über den Prompt. Ein sorgfältig gestalteter System-Prompt mit Charakternotizen, Stimmproben und explizitem POV tut mehr für die Ausgabe als der Wechsel von Qwen3 zu Llama 70B. Siehe [Persona-Prompting](/de/prompt-engineering/persona-prompting) für die Prompt-Struktur, die kreative Ausgaben konsistent verbessert.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Wahl und Nutzung lokaler Modelle für kreatives Schreiben',
        items: [
          '**Fehler 1: dem größten Modell auf Benchmarks nachjagen.** Kreativschreib-Wertungen korrelieren schlecht mit allgemeinen Benchmark-Leaderboards. Yi-1.5 34B schlägt Llama 3.3 70B bei Poesie; Command A+ schlägt beide bei Dialog. Nach Aufgabe wählen, nicht nach Leaderboard-Rang.',
          '**Fehler 2: Coding-Sampling-Einstellungen verwenden.** Temperatur 0,2–0,4 erzeugt flache, vorhersehbare Prosa. Kreatives Schreiben braucht 0,8–1,1 mit Top-p 0,9–0,95. Die Standardeinstellungen der meisten Chat-UIs sind für Q&A optimiert, nicht für Prosa.',
          '**Fehler 3: beim Instruct-Modell bleiben und aufgeben, wenn es ablehnt.** Die Instruct-Version lehnt Szenen ab, die explizit als Belletristik gerahmt wurden; das Uncensored-Derivat desselben Basismodells schreibt sie. Zwei Installs in Ollama ist die Lösung.',
          '**Fehler 4: dünne System-Prompts.** „Du bist ein hilfreicher Assistent" ist der schlechtestmögliche Prompt für kreative Arbeit. Ein System-Prompt mit Charakternotizen, Stimmproben, POV, Tempus und Ton tut mehr für die Ausgabequalität als jeder Modellwechsel. Mit [Negativem Prompting](/de/prompt-engineering/negative-prompting) kombinieren, um vorzugeben, was NICHT zu schreiben ist.',
          '**Fehler 5: im Chat-Fenster überarbeiten.** Im Chat generieren ist fine; im Chat überarbeiten trainiert die Gewohnheit, das Modell Prosa korrigieren zu lassen statt selbst zu überarbeiten. Den Entwurf in einen Texteditor exportieren; die Autorenstimme wird stärker, wenn das Modell nicht im Überarbeitungsprozess ist.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das größte Stilrisiko beim KI-gestützten Kreativschreiben ist das Auslagern des Überarbeitungspasses. Generierung ist mechanische Arbeit, die vom Modell profitiert; Überarbeitung ist der Teil, der die Prosa zum eigenen Werk macht. Autoren, die das Modell überarbeiten lassen, verlieren schnell an Stimme — selbst wenn sie nicht sagen können, welche Zeile sich verändert hat.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Hugging Face Modellkarten für Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5](https://huggingface.co/) — offizielle Modelldokumentation und Lizenzen.',
          '[Hermes 3 (NousResearch) GitHub und Modellkarte](https://huggingface.co/NousResearch) — Uncensored Llama-3.3-basierte Fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) Modellkarten](https://huggingface.co/cognitivecomputations) — Uncensored Fine-tunes über mehrere Basismodelle.',
          '[Ollama Model Library](https://ollama.com/library) — verfügbare Modelle, Quantisierungsoptionen, Tool-Call-Support-Flags.',
          '[SillyTavern-Dokumentation](https://docs.sillytavern.app/) — Charakterkarten-Spec, Persona-System, Gruppen-Chat-Features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welches lokale LLM eignet sich 2026 am besten für Belletristik?',
            a: 'Llama 3.3 70B ist der beste Allrounder, wenn die Hardware passt (~42 GB VRAM bei Q4_K_M). Auf 24-GB-Systemen ist Qwen3 32B der leichtere Standard mit geringem Qualitätsverlust bei prosaschwerem Schreiben. Für Langform-Kontinuität (Romane) ist Mistral Larges 128K-Kontext der Differenziator. Nach Aufgabentyp wählen: die meisten Autoren profitieren mehr vom richtigen Spezialisten als vom größten Modell.',
          },
          {
            q: 'Was ist ein Uncensored lokales LLM und wann sollte ich es verwenden?',
            a: 'Ein Uncensored-Modell ist ein Fine-tune eines bestehenden Basismodells (typischerweise Llama 3.3 oder Qwen3), bei dem die RLHF-Sicherheitsschicht, die Ablehnungen bei reifen oder moralisch komplexen Prompts erzeugt, entfernt wurde. Das Modell folgt dem Prompt statt abzulehnen. Uncensored-Derivate (Hermes 3, Dolphin 3.0) für reife Belletristik, Konfliktszenen, historisch genaues Schreiben oder Workflows verwenden, bei denen das Instruct-Modell als Belletristik gerahmte Szenen ablehnt. Der Autor ist weiterhin der Urheber; das Modell hört auf, im Weg zu stehen.',
          },
          {
            q: 'Welche Temperatur sollte ich für kreatives Schreiben verwenden?',
            a: 'Temperatur 0,8–1,1 ist der kreative Schreibbereich, gepaart mit Top-p 0,9–0,95. Enger Dialog braucht 0,7–0,85; lyrische Prosa und Poesie 1,0–1,2; surreale oder Genre-Arbeit 1,1–1,3. Die Standards der meisten Chat-UIs (oft 0,7 mit Top-p 0,9) sind für Frage-Antwort optimiert und erzeugen flache Prosa bei kreativen Prompts. An einer kurzen Szene bei 3 Einstellungen testen, dann die wählen, bei der das Modell am lebendigsten klingt.',
          },
          {
            q: 'Sind lokale Kreativschreib-Modelle so gut wie ChatGPT oder Claude?',
            a: 'Für die meisten Prompts ja — nah genug, dass Datenschutz- und Kostenvorteile dominieren. Die Frontier-Cloud-Modelle führen noch bei den schwersten kreativen Aufgaben (Langform-Kohärenz über 50.000 Token, sehr obskure kulturelle Referenzen, seltene Sprachen). Für eine typische Belletristik- oder Roleplay-Session wird ein Autor, der Sampling-Einstellungen auf Llama 3.3 70B oder Qwen3 32B kalibriert hat, keine konsistenten Qualitätslücken gegenüber GPT-5 oder Claude feststellen.',
          },
          {
            q: 'Kann ein lokales Modell einen vollständigen Roman schreiben?',
            a: 'Es kann beim Entwurf helfen. Mistral Large mit 128K-Kontext kann einen 50.000-Wörter-Entwurf im Speicher halten; Llama 3.3 70B und Qwen3 32B bei 32K-Kontext brauchen abschnittsweises Entwerfen. Der Engpass ist nicht die Modellkapazität — es ist die Struktur des Autors (Gliederung, Charakterbibel, Lore Book), die das Modell für Kontinuität nutzt.',
          },
          {
            q: 'Erzeugen Uncensored-Modelle illegale Inhalte?',
            a: 'Nicht mehr als Instruct-Modelle. Beide erzeugen Text, den der Prompt verlangt; Uncensored-Modelle sind bereitwilliger bei reifen Themen, die die Instruct-Sicherheitsschicht ablehnt. Rechtliche Haftung trifft den Autor und die Veröffentlichung, nicht das Modell. EU-KI-Gesetz, §184/§184c StGB und US-Obszönitätsrecht regeln spezifische Inhaltskategorien unabhängig von der Generierungsmethode.',
          },
          {
            q: 'Ist SillyTavern nur für Adult-Roleplay?',
            a: 'Nein. SillyTavern ist ein chat-fokussiertes Frontend mit Charakterkarten, Persona-Verwaltung und Lore Books — nützlich für jede dialog-intensive oder charaktergetriebene Arbeit. Viele Autoren nutzen es für nicht-Roleplay-Belletristik (Mehrfigurenszenen, Stimmkonsistenz über lange Projekte). Das Charakterkarten-Ökosystem enthält Adult-Inhalte, ist aber nicht darauf beschränkt.',
          },
          {
            q: 'Wie unterscheidet sich lokales Kreativschreiben von Coding-Workloads?',
            a: 'Sampling-Einstellungen und Prompt-Struktur. Coding braucht Temperatur 0,2–0,4, deterministische Ausgabe, strukturierte (JSON, Code) Ausgabe und explizite Einschränkungen im Prompt. Kreatives Schreiben braucht Temperatur 0,8–1,1, freiere Ausgabe, Prosaform und reichhaltigere System-Prompts (Charakterstimme, POV, Ton, Genre-Konventionen). Dasselbe Modell — Llama 3.3 70B dient beiden — erzeugt wildly unterschiedliche Ausgaben je nach diesen Einstellungen.',
          },
          {
            q: 'Welches lokale Modell hat die wenigsten „KI-Tells"?',
            a: 'KI-Tells — Phrasen wie „ein Schauder lief ihr den Rücken hinunter", „Geflecht", „erkunden" und ChatGPT-artige Zusammenfassungsübergänge — sind bei kleineren Instruct-Modellen häufiger. Llama 3.3 70B und Qwen3 32B haben weniger Tells als Modelle unter 20B. Hermes 3 hat die wenigsten in diesem Set. Der wirksamste Hebel zur Tell-Reduktion ist der System-Prompt mit negativen Beispielen, nicht das Modell.',
          },
          {
            q: 'Wie vermeidet man Klischees wie „ein Schauder lief ihr den Rücken hinunter"?',
            a: 'Ein System-Prompt mit negativen Beispielen ist der wirksamste Hebel — 8–12 verbannte Phrasen explizit auflisten. Die Temperatur leicht senken (0,85–0,95 statt 1,1), um die Neigung zu Standardformulierungen zu reduzieren. Repeat Penalty 1,1 allein reicht NICHT — die Phrasen sind keine exakten Token-Wiederholungen. DRY-Penalty (Multiplikator 0,8, Basis 1,75) erkennt sie auf n-Gramm-Ebene über Szenen hinweg. Ein manueller Überarbeitungsdurchgang ist der letzte Filter. Siehe [Negatives Prompting](/de/prompt-engineering/negative-prompting).',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler LLMs für kreatives Schreiben die DSGVO beachten?',
            a: 'Für rein lokale Generierung auf dem eigenen Gerät ist die DSGVO-Relevanz minimal: Keine personenbezogenen Daten werden an externe Auftragsverarbeiter übermittelt, da das Modell vollständig lokal läuft. Relevant wird die DSGVO, wenn deine Belletristik reale, identifizierbare Personen verwendet oder wenn du KI-generierte Inhalte auf Plattformen veröffentlichst, die personenbezogene Daten verarbeiten. In diesen Fällen gelten die üblichen Datenschutzpflichten — nicht aufgrund des Modells, sondern aufgrund der Verarbeitung und Veröffentlichung.',
          },
          {
            q: 'Welche deutschen Gesetze gelten beim Schreiben von Belletristik mit Uncensored-Modellen?',
            a: 'Zwei Paragrafen sind besonders relevant: §184b StGB (Kinderpornografie) — absolutes Verbot, gilt auch für KI-generierte Inhalte und fiktionale Rahmungen; §184c StGB (Jugendpornografie) — ebenfalls absolutes Verbot. „Lokal generiert" oder „Fiktion" ist in keinem dieser Fälle eine Verteidigung. Für Belletristik, die keine Minderjährigen in sexuellen Kontexten, keine identifizierbaren realen Personen in NCII-Szenarien und keine Aufstachelung enthält, ist lokale Generierung rechtlich vergleichbar mit dem Schreiben mit jedem anderen Werkzeug.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend (2026)](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Direktvergleich der drei Roleplay-fokussierten Frontends mit den obigen Modellen.',
          '[Lokale LLM-Prompts für Belletristik-Autoren: Vorlagen & Techniken](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — kopierfertige Prompt-Vorlagen für Charakterentwicklung, Dialog, Weltenbau und Überarbeitungs-Workflows.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik, Recht & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — wann Uncensored-Derivate legitime kreative Werkzeuge sind und wo die rechtlichen und ethischen Grenzen liegen.',
          '[Temperatur und Top-P: KI-Kreativität steuern](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) — die Prompt-Engineering-Seite der Sampling-Parameter; tiefer als die Zusammenfassung in diesem Leitfaden.',
          '[Negatives Prompting](/de/prompt-engineering/negative-prompting) — vorgeben, was NICHT im Prompt stehen soll; ein Kraft-Multiplikator für System-Prompts bei kreativer Arbeit.',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — der maßgebliche Modell-Landscape-Leitfaden; nützlich, wenn du über die sechs Kreativschreib-Picks hinaus erkunden möchtest.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Meilleurs LLM locaux pour l\'écriture créative 2026 : fiction, dialogue et construction de mondes',
    seoTitle: 'LLM locaux pour l\'écriture créative 2026 : comparatif testé',
    intro:
      'L\'écriture créative est le domaine où les LLM locaux s\'imposent au-delà de la seule confidentialité et du coût. Les meilleurs modèles open-weight instruction-tuned et non censurés de 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B et les dérivés non censurés Hermes/Dolphin — produisent de la fiction, des dialogues et de la construction de mondes comparables aux modèles cloud frontaux sur la plupart des prompts. Les différences portent sur la cohérence de la voix narrative, la capacité à traiter des thèmes sombres ou adultes, et la façon dont ils suivent les directives. Ce guide teste six modèles sur plus de 50 prompts créatifs couvrant fiction, dialogue, poésie et construction de mondes, avec les paramètres de température et de top-p adaptés à chacun.',
    metaDescription:
      '6 LLM locaux comparés pour l\'écriture créative : Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 et variantes non censurées. Testés sur plus de 50 prompts créatifs.',
    twitterDescription:
      '6 modèles locaux pour la fiction, le dialogue et la construction de mondes testés sur 50+ prompts. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 et options non censurées. Verdict par type de tâche.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 Go',
      'NVIDIA RTX 4090 24 Go',
      'Apple M5 MacBook Pro 16 Go',
    ],
    audience:
      'Auteurs de fiction, scénaristes, concepteurs de jeux, créateurs de mondes et passionnés de roleplay qui utilisent des LLM locaux pour des travaux créatifs où la confidentialité, la cohérence de la voix et la capacité à traiter des thèmes matures comptent plus que les scores de benchmarks.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM local écriture créative',
    targetKeywords: [
      'meilleur llm local écriture créative',
      'llm local fiction',
      'llm local non censuré',
      'llama vs mistral écriture créative',
      'meilleur modèle local dialogue',
      'llm local construction de monde',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B est le meilleur choix local polyvalent pour l\'écriture créative en mai 2026 — cohérence de voix solide, suit bien les directives et traite les thèmes sombres sans refus si le prompt système cadre le travail comme de la fiction. Qwen3 32B est le bon choix sur un rig 24 Go : qualité de prose presque équivalente, moins gourmand en matériel. Mistral Large gagne sur la continuité long format (rédaction de romans) grâce à son contexte natif de 128K. Command A+ a la voix de dialogue la plus naturelle. Yi-1.5 34B est le choix de niche pour la poésie et la prose lyrique. Pour les workflows que les modèles instruction-tuned refusent, Hermes 3 (base Llama 3.3) et Dolphin 3.0 sont les options non censurées — même architecture, couche de sécurité RLHF retirée. Température 0,8–1,1 et top-p 0,9–0,95 définissent la plage créative ; en dessous de 0,7 la prose devient plate. Non censuré ≠ contraire à l\'éthique — cela signifie que le modèle suit le prompt au lieu de refuser ; l\'auteur reste l\'auteur.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel LLM local est le meilleur pour l\'écriture créative en 2026 ?',
        answer:
          'Llama 3.3 70B est le meilleur choix local polyvalent — solide sur la prose, le dialogue et la construction de mondes, avec une cohérence de voix qui tient sur de longues sessions. Sur un matériel 24 Go où un 70B ne passe pas, Qwen3 32B est l\'alternative plus légère sans grande perte de qualité. Mistral Large est le choix long-contexte pour la rédaction de romans (contexte 128K natif). Command A+ a la voix de dialogue la plus naturelle. Yi-1.5 34B est le spécialiste de la poésie et de la prose lyrique. Pour les workflows qui butent sur la couche de sécurité instruction-tuned (fiction mature, scènes de conflit, personnages moralement complexes), les dérivés Hermes 3 et Dolphin 3.0 utilisent les mêmes modèles de base avec la couche de sécurité RLHF retirée — ils suivent le prompt au lieu de refuser. Température 0,8–1,1 et top-p 0,9–0,95 définissent la plage créative ; les paramètres type code (0,2–0,4) produisent une prose plate.',
        bullets: [
          'Meilleur au global : Llama 3.3 70B — cohérence de voix la plus solide, suit bien les directives, gère les thèmes sombres sans refus si cadré comme fiction.',
          'Meilleur sur rig 24 Go : Qwen3 32B — presque aussi fort que Llama 70B sur la prose, bien plus léger en matériel.',
          'Meilleur long format : Mistral Large — contexte 128K natif ; rédaction de roman sans perte de fil.',
          'Meilleur dialogue : Command A+ — la voix conversationnelle la plus naturelle entre les personnages.',
          'Meilleur poésie / lyrique : Yi-1.5 34B — choix de niche pour les vers et la prose stylisée.',
          'Quand instruct refuse : Hermes 3 (base Llama) ou Dolphin 3.0 — non censurés, même architecture, prompt-following.',
          'Sampling : température 0,8–1,1, top-p 0,9–0,95 pour la prose ; plus bas pour le dialogue serré, plus haut pour le surréalisme ou la fiction de genre.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points essentiels', anchor: '#key-takeaways' },
      { label: 'Chiffres clés', anchor: '#quick-facts' },
      { label: 'Notre méthode de test', anchor: '#how-we-tested' },
      { label: 'Comparatif', anchor: '#comparison' },
      { label: 'Verdicts par modèle', anchor: '#verdicts' },
      { label: 'Exemples de sorties', anchor: '#sample-outputs' },
      { label: 'Température et top-p pour la création', anchor: '#sampling' },
      { label: 'Modèles non censurés', anchor: '#uncensored' },
      { label: 'Interfaces pour la création', anchor: '#frontends' },
      { label: 'Décision : choisir son modèle', anchor: '#decision' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecture complémentaire', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70B est le meilleur modèle local polyvalent pour l\'écriture créative en mai 2026.** Cohérence de voix la plus solide du comparatif, suit bien les directives, gère les thèmes sombres sans refus dès que le prompt système cadre le travail comme de la fiction.',
          '**Qwen3 32B est le bon choix sur rig 24 Go.** Qualité de prose presque équivalente à Llama 70B sans la facture VRAM de 48 Go+. Le choix par défaut pour la plupart des ordinateurs portables et de bureau.',
          '**Mistral Large gagne sur la continuité long format.** Contexte 128K natif ; rédaction de roman sans perte de fil ou de voix des personnages.',
          '**Command A+ a la voix de dialogue la plus propre.** Les beats conversationnels les plus naturels entre les personnages ; le choix quand le dialogue est la partie structurante du travail.',
          '**Yi-1.5 34B est le spécialiste de la poésie et de la prose lyrique.** Choix de niche pour les vers, la prose stylisée et le travail en format court où le rythme compte.',
          '**Les dérivés non censurés (Hermes 3, Dolphin 3.0) sont la bonne option quand les modèles instruction-tuned refusent.** Mêmes modèles de base ; la couche de sécurité RLHF est retirée ; le modèle suit le prompt au lieu de décliner. Fiction mature, scènes de conflit et personnages moralement complexes deviennent rédigeable.',
          '**Le sampling compte plus qu\'on ne le croit.** Température 0,8–1,1 et top-p 0,9–0,95 définissent la plage créative. Les paramètres type code (0,2–0,4) produisent une prose plate et prévisible. Au-dessus de 1,2, on entre dans le territoire du genre/surréalisme.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Chiffres clés',
        items: [
          '**Meilleur au global :** Llama 3.3 70B en Q4_K_M, ~42 Go de VRAM. Cohérence de voix la plus solide de ce comparatif.',
          '**Meilleur sur rig 24 Go :** Qwen3 32B en Q4_K_M, ~20 Go de VRAM. Le choix par défaut pour la plupart des utilisateurs.',
          '**Meilleur long format :** Mistral Large en Q4_K_M, ~75 Go de VRAM au total (lourd). Contexte 128K natif.',
          '**Meilleur dialogue :** Command A+ en Q4_K_M, ~62 Go de VRAM. Meilleure différenciation des voix des personnages.',
          '**Meilleur poésie :** Yi-1.5 34B en Q4_K_M, ~21 Go de VRAM. Spécialiste de la prose lyrique.',
          '**Options non censurées :** Hermes 3 (base Llama 3.3, ~42 Go) et Dolphin 3.0 (plusieurs tailles de base, 13–42 Go).',
          '**Sampling par défaut pour la prose :** température 0,95, top-p 0,92, repeat penalty 1,1. Ajuster par type de tâche.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Méthode de test : plus de 50 prompts créatifs sur six modèles',
        content:
          '**Le test a maintenu constants le jeu de prompts, les paramètres de sampling et le frontend ; seul le modèle variait.** Mêmes 50 prompts sur des tâches de fiction, dialogue, poésie et construction de mondes ; sorties évaluées selon la même grille par type de tâche.',
        items: [
          '**Backend :** Ollama 0.7+ sur macOS et Linux ; mêmes limites de contexte par modèle ; quantification Q4_K_M pour les six modèles (Q5_K_M pour les modèles plus petits 32B–34B quand le VRAM le permettait, sans différence mesurable dans les scores de grille).',
          '**Frontend :** Open WebUI pour l\'essentiel du test (travail en mode chat) ; SillyTavern pour la partie dialogue et roleplay (reproduit l\'usage réel des auteurs).',
          '**Jeu de prompts :** 50 prompts répartis sur quatre types de tâches — fiction (15 : débuts de nouvelles, continuations de scènes, passages descriptifs), dialogue (15 : échanges à deux personnages, scènes de groupe, différenciation des voix), poésie (10 : vers libres, formes structurées, prose lyrique), construction de mondes (10 : descriptions de décors, politiques factionnelles, systèmes de magie). Chaque prompt lancé 3 fois par modèle pour capturer la variance.',
          '**Sampling :** température 0,95, top-p 0,92, repeat penalty 1,1 comme base ; ajustements par tâche notés dans les verdicts par modèle ci-dessous.',
          '**Grille d\'évaluation :** cohérence de voix (le personnage ou le narrateur sonne-t-il pareil d\'un paragraphe à l\'autre ?), fidélité au prompt (le modèle a-t-il suivi la direction ou inventé sa propre scène ?), qualité de prose (rythme, vocabulaire, évitement du cliché), et disponibilité (le modèle a-t-il refusé ou édulcoré des scènes que le prompt cadrait explicitement comme de la fiction ?).',
          '**Contrainte d\'honnêteté :** scores reportés comme rangs relatifs par tâche, sans pourcentages absolus inventés. "Meilleur dialogue" signifie premier régulièrement sur le sous-ensemble dialogue sur les 3 relances ; "bon" signifie top-3 ; "correct" signifie que le modèle a perdu face à un ou plusieurs concurrents sur la grille.',
          'Pour les techniques de prompting qui améliorent les sorties créatives sur n\'importe quel modèle, voir [contrôle de la température et du top-p](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) et [persona prompting](/fr/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les benchmarks d\'écriture créative sont intrinsèquement subjectifs. La grille ci-dessus (cohérence de voix, fidélité au prompt, qualité de prose, disponibilité) est l\'approche la plus proche d\'une notation reproductible, mais deux lecteurs évaluant les mêmes sorties seront en désaccord sur la qualité de prose plus souvent qu\'ils ne s\'accorderont. Traitez les verdicts comme des hypothèses de départ à tester sur votre propre travail.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif : six modèles locaux sur des tâches créatives',
        content:
          '**Llama 3.3 70B est en tête sur le plus grand nombre de tâches ; les modèles plus petits et spécialisés gagnent chacun une ou deux catégories.** Choisir par type de tâche, pas par classement général.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B est le modèle créatif polyvalent le plus solide ; Qwen3 32B est l\'alternative plus légère ; Mistral Large gagne en long format ; Command A+ gagne en dialogue ; Yi-1.5 gagne en poésie ; Hermes/Dolphin gèrent les scènes que les autres refusent.',
          },
          {
            type: 'plain-terms',
            text: 'Aucun modèle n\'est meilleur sur tout. Llama 3.3 70B est la valeur sûre si le matériel le permet. Qwen3 32B est le choix intelligent sur un GPU de 24 Go. Choisir un spécialiste (Mistral pour les romans, Command A+ pour le dialogue, Yi-1.5 pour la poésie) quand un type de tâche est la partie structurante du travail. Choisir un dérivé non censuré quand le modèle instruction-tuned refuse des scènes à écrire.',
          },
        ],
        columns: ['Modèle', 'Taille', 'VRAM (Q4_K_M)', 'Fiction', 'Dialogue', 'Poésie', 'Construction de monde', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Llama 3.3 70B', 'Taille': '70B', 'VRAM (Q4_K_M)': '~42 Go', 'Fiction': 'Meilleur', 'Dialogue': 'Bon', 'Poésie': 'Bon', 'Construction de monde': 'Meilleur', 'Idéal pour': 'Meilleur au global ; par défaut si le matériel le permet' },
          { 'Modèle': 'Qwen3 32B', 'Taille': '32B', 'VRAM (Q4_K_M)': '~20 Go', 'Fiction': 'Bon', 'Dialogue': 'Bon', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Par défaut sur rig 24 Go ; faible écart vs Llama 70B' },
          { 'Modèle': 'Mistral Large', 'Taille': '123B', 'VRAM (Q4_K_M)': '~75 Go', 'Fiction': 'Bon (long format)', 'Dialogue': 'Bon', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Rédaction long format, contexte 128K' },
          { 'Modèle': 'Command A+', 'Taille': 'Non communiqué', 'VRAM (Q4_K_M)': '~62 Go', 'Fiction': 'Bon', 'Dialogue': 'Meilleur', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Travaux à dominante dialogue, scènes de groupe' },
          { 'Modèle': 'Yi-1.5 34B', 'Taille': '34B', 'VRAM (Q4_K_M)': '~21 Go', 'Fiction': 'Correct', 'Dialogue': 'Correct', 'Poésie': 'Meilleur', 'Construction de monde': 'Correct', 'Idéal pour': 'Poésie, prose lyrique, style travaillé' },
          { 'Modèle': 'Hermes 3 / Dolphin 3.0', 'Taille': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 Go', 'Fiction': 'Identique au modèle de base', 'Dialogue': 'Identique au modèle de base', 'Poésie': 'Identique au modèle de base', 'Construction de monde': 'Identique au modèle de base', 'Idéal pour': 'Scènes refusées par les modèles instruction-tuned' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuration à deux modèles est le schéma courant : Llama 3.3 70B (ou Qwen3 32B) comme modèle principal, plus le dérivé Hermes 3 sur le même Ollama pour les scènes que la version instruct refuse. Basculer entre eux selon les scènes ; les deux peuvent coexister dans `ollama list` sans conflit.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Verdicts par modèle',
        items: [
          '**Llama 3.3 70B** — meilleur au global. Cohérence de voix la plus solide du comparatif ; les personnages gardent les mêmes schémas de discours sur de longues scènes. Suit bien les directives — quand le prompt système précise le PDV, le ton ou les conventions de genre, Llama 3.3 s\'y tient. Gère les thèmes sombres (violence, deuil, personnages moralement gris) sans refus quand le prompt cadre le travail comme de la fiction. Limites : les longs passages dérivent parfois vers une voix "littéraire" générique ; les petits modèles de la même famille (8B) perdent cette force.',
          '**Qwen3 32B** — meilleur sur rig 24 Go. Cohérence de voix légèrement inférieure à Llama 3.3 70B, mais l\'écart est suffisamment petit pour que la plupart des auteurs ne le remarquent pas sur un travail à dominante prose. Le plus solide des modèles plus petits sur le suivi de directives. Limites : poésie et prose stylisée sont nettement en retrait ; préférer Yi-1.5 pour ces usages.',
          '**Mistral Large** — meilleur pour la continuité long format. La fenêtre de contexte de 128K permet à un brouillon de 50 000 mots de tenir sans troncature ; le modèle garde les détails des personnages, les fils de l\'intrigue et les règles du monde sur plusieurs chapitres. Limites : la barre matérielle est la plus haute de ce comparatif (~75 Go en Q4_K_M) ; la vitesse par token ralentit sur les longues entrées. Utiliser Mistral La Plateforme sur infrastructure EU si le matériel local est la contrainte.',
          '**Command A+** — meilleur pour le dialogue. Voix de personnages distinctes qui tiennent sur les échanges ; les scènes de groupe (3+ locuteurs) restent lisibles sans le mode d\'échec "tout le monde sonne pareil" courant chez les autres modèles. Limites : les paragraphes de prose entre les répliques de dialogue sont compétents mais pas lyriques ; pour les passages purement descriptifs, Llama 3.3 gagne.',
          '**Yi-1.5 34B** — meilleur pour la poésie et la prose lyrique. Conscient du rythme, à l\'aise avec les formes structurées (sonnet, villanelle, haïku), produit des vers qui tiennent mieux que les grands modèles généralistes. Limites : la fiction long format est compétente mais pas son point fort ; préférer Llama 3.3 ou Qwen3 pour le travail narratif.',
          '**Hermes 3 (base Llama 3.3) et Dolphin 3.0** — dérivés non censurés. Même architecture et mêmes poids de base que Llama 3.3 70B ; la couche de sécurité RLHF est retirée lors du fine-tuning. Le modèle suit le prompt plutôt que de refuser ou d\'édulcorer le contenu mature. La qualité sur les prompts non-matures est identique au modèle de base ; la différence n\'est visible que sur les prompts où les versions instruction-tuned refusent. À utiliser quand le travail l\'exige (fiction mature, scènes violentes, personnages moralement complexes) et rester sur le modèle instruct sinon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La cohérence de voix est la métrique que les auteurs sous-évaluent le plus souvent lors de l\'évaluation initiale d\'un modèle. Un modèle qui produit une prose brillante sur un seul paragraphe mais perd les schémas de discours du personnage au 5e paragraphe est pire qu\'un modèle qui produit une prose compétente avec une voix cohérente sur 20 paragraphes. Tester la continuité sur des sessions longues, pas seulement la qualité en one-shot.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Exemples de sorties : trois modèles, un seul prompt',
        content:
          '**Prompt partagé :** "Ouvre une scène noir où le détective entre dans un diner trempé de pluie à 2 h du matin." Même température (0,95), même top-p (0,92), même repeat penalty (1,1) — seul le modèle change. Les extraits ci-dessous sont représentatifs de la sortie typique de chaque modèle sur cette classe de prompts sur trois relances.',
        items: [
          '**Llama 3.3 70B** — "La clochette au-dessus de la porte sonna deux fois et se tut. La pluie ruisselait sur mon manteau en nappes, formant des flaques sur le linoléum avant que j\'aie fait trois pas. La serveuse ne leva pas les yeux. Deux routiers au fond étudiaient leur café. Personne dans un endroit comme celui-là à deux heures du matin ne voulait être remarqué, et moi non plus." — *Ancrage sensoriel concret, voix active, pas un mot de trop. La scène sociale est établie en trois phrases.*',
          '**Qwen3 32B** — "Je poussai la porte dans un mur de fumée de cigarette et de graisse de gril. Le diner était à moitié vide et entièrement silencieux — le genre de silence qui s\'installe quand les gens ont convenu, sans se le dire, de se laisser tranquilles. Un ventilateur au plafond tournait. La serveuse remplissait une tasse à l\'autre bout du comptoir sans me regarder." — *Mise en place observationnelle avant l\'action ; atmosphère efficace. Légèrement plus structuré que Llama 3.3 mais aussi propre.*',
          '**Yi-1.5 34B** — "La pluie martelait l\'auvent avec la régularité d\'un métronome comptant les dernières heures d\'une nuit que personne ne voulait se rappeler. À l\'intérieur, les néons projetaient leur froide arithmétique sur le stratifié — chaque tache, chaque égratignure, chaque année que l\'endroit avait passé à perdre des arguments contre l\'entropie. Je trouvai un tabouret à l\'extrémité proche et m\'assis comme un homme qui avait déjà fait la paix avec quelque chose." — *Métaphore dès la première proposition ; variation rythmique des phrases ; imagerie plus dense. Le bagage poétique de Yi-1.5 se voit même en prose.*',
        ],
        columns: ['Modèle', 'Introduction typique', 'Motif descriptif typique'],
        rows: [
          { 'Modèle': 'Llama 3.3 70B', 'Introduction typique': 'Action en premier, détail sensoriel immédiat', 'Motif descriptif typique': 'Concret et physique ; évite les noms abstraits ; ancrage social' },
          { 'Modèle': 'Qwen3 32B', 'Introduction typique': 'Observation environnementale avant l\'action du personnage', 'Motif descriptif typique': 'Efficace ; détails sociaux/atmosphériques ; légèrement structuré' },
          { 'Modèle': 'Yi-1.5 34B', 'Introduction typique': 'Métaphore ou comparaison dès la première proposition', 'Motif descriptif typique': 'Images abstraites ; variation rythmique ; plus dense ; notes pourpres occasionnelles' },
          { 'Modèle': 'Command A+', 'Introduction typique': 'Voix du personnage ou ouverture proche du dialogue', 'Motif descriptif typique': 'Conversationnel ; voix propre et distincte ; description solo plus faible' },
          { 'Modèle': 'Mistral Large', 'Introduction typique': 'Paragraphe de mise en scène ; démarrage plus lent', 'Motif descriptif typique': 'Régulier et maîtrisé ; cohérent sur les longs passages ; légèrement générique' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ces extraits illustrent les tendances de chaque modèle sur plusieurs relances, sans cherry-picking. La formule "perdre des arguments avec l\'entropie" de Yi-1.5 34B est apparue sur une des trois relances ; les deux autres étaient plus directes. Lancer tout modèle 2–3 fois sur le même prompt et choisir celui qui correspond à la scène, pas simplement la première sortie.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Température et top-p pour le travail créatif',
        content:
          '**L\'écriture créative nécessite des températures de sampling plus élevées que le code.** Les paramètres de sampling par défaut de la plupart des interfaces de chat sont calibrés pour les questions-réponses, pas pour la prose — une température de 0,7 et un top-p de 0,9 produisent des sorties plates et prévisibles sur les prompts créatifs.',
        items: [
          '**Base pour la prose :** température 0,95, top-p 0,92, repeat penalty 1,1. C\'est le point de départ pour la plupart des travaux de fiction, dialogue et construction de mondes. Ajuster par tâche à partir de là.',
          '**Dialogue serré :** température 0,7–0,85, top-p 0,9. Des températures plus basses maintiennent la cohérence des voix des personnages entre les répliques ; des valeurs plus élevées produisent des interjections hors-personnage.',
          '**Prose lyrique et poésie :** température 1,0–1,2, top-p 0,95. Des températures plus élevées débloquent des choix de mots inattendus qui font fonctionner les vers.',
          '**Fiction surréaliste ou de genre :** température 1,1–1,3, top-p 0,95–0,98. Pousse le modèle à produire des combinaisons d\'images et de métaphores moins courantes.',
          '**Scènes pilotées par l\'intrigue (action, mystère, retournements) :** température 0,85–0,95, top-p 0,9. Privilégie le suivi de directives plutôt que la nouveauté.',
          '**Repeat penalty 1,1–1,15** est la bonne plage pour la plupart des travaux créatifs. Plus élevé (1,2+) pousse le modèle à éviter les répétitions même quand la répétition est stylistiquement intentionnelle ; plus bas (1,0–1,05) laisse le modèle entrer en boucle sur les longues scènes.',
          '**min_p (0,05–0,1) :** Une alternative plus récente au top-p qui fait varier dynamiquement le seuil de probabilité par rapport à la probabilité du token de pointe. Plus permissif sur les prompts créatifs que top-p 0,9 sans le risque d\'incohérence des valeurs très élevées de top-p. Valeur par défaut recommandée pour les utilisateurs de SillyTavern et KoboldCpp en 2026 quand l\'interface l\'expose ; Ollama le transmet tel quel, et Open WebUI 0.5+ l\'expose sous Paramètres avancés.',
          '**Pénalité de répétition DRY (multiplicateur 0,8, base 1,75, longueur autorisée 2) :** Capture les répétitions au niveau des phrases que le repeat_penalty standard manque. Là où repeat_penalty suit les tokens individuels, DRY suit les séquences n-grammes — ainsi le cliché "frisson dans la nuque" en scène 1 est supprimé quand il réapparaîtrait en scène 4. Utile pour le travail créatif en session longue où le modèle a vu ses propres sorties et commence à les recycler.',
          '**Base créative moderne (2026) :** température 0,95, min_p 0,05, DRY multiplicateur 0,8 (base 1,75, longueur autorisée 2). Top-p 0,92 fonctionne toujours bien si le frontend n\'expose pas min_p ou DRY — ce sont des améliorations progressives par rapport aux paramètres classiques, pas des remplacements obligatoires.',
          'Pour un traitement plus complet de pourquoi ces paramètres comptent et comment ils interagissent, voir [contrôle de la température et du top-p](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Tester les paramètres de sampling sur une courte scène par modèle — trois relances à chaque paramètre, puis choisir la température où le modèle sonne le plus vivant sans perdre le prompt. Les paramètres qui fonctionnent sur Llama 3.3 70B ne se transfèrent pas parfaitement à Mistral Large ou Yi-1.5 ; calibrer par modèle.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modèles non censurés : ce qu\'ils sont et quand ils comptent',
        content:
          '**Non censuré ne signifie pas contraire à l\'éthique.** Cela signifie que la couche de sécurité d\'instruction-tuning (refus RLHF) du modèle a été retirée ou contournée, de sorte que le modèle suit le prompt au lieu de décliner ou d\'édulcorer. L\'auteur reste l\'auteur ; l\'outil arrête de se mettre en travers.',
        items: [
          '**Ce que "non censuré" signifie techniquement.** Des modèles comme Hermes 3 et Dolphin 3.0 sont des variantes fine-tunées de modèles de base (Llama 3.3, Qwen3) où la passe RLHF post-entraînement qui produit les refus sur les prompts matures, violents ou moralement complexes a été remplacée par un fine-tune qui suit le prompt. Même architecture, mêmes poids de base, post-entraînement différent.',
          '**Quand ils comptent pour le travail créatif.** Fiction mature (romans littéraires avec scènes de sexe, romans policiers avec violence graphique, horreur), écriture historiquement exacte (guerre, atrocités, brutalité coloniale), personnages moralement complexes (le modèle refuserait sinon de voix convaincante un antagoniste), et scénarios de roleplay que les modèles instruction-tuned n\'aborderont pas.',
          '**Leurs limites.** Ils suivent le prompt — y compris les prompts mal rédigés. Les modèles instruction-tuned adoucissent souvent les prompts vagues vers quelque chose de publiable ; les modèles non censurés donnent exactement ce qu\'on demande, ce qui est parfois moins bon. La direction de l\'auteur compte davantage.',
          '**Limites éthiques.** "Le modèle le rédigera" n\'est pas une licence créative pour produire du contenu qui cible des personnes réelles, représente des scénarios non consentis impliquant des individus réels ou identifiables, ou qui est illégal dans la juridiction de l\'auteur. L\'hébergement local ne change pas la loi ; il change qui peut voir le brouillon.',
          '**Contexte légal (mai 2026, bref et non exhaustif).** L\'AI Act de l\'UE et les lois des États membres (notamment le §184/§184c StGB allemand et l\'article 227-23 du Code pénal français) couvrent des catégories de contenu spécifiques indépendamment du lieu de génération. Le droit américain sur l\'obscénité s\'applique à la publication, pas à la génération. Pour la publication commerciale, le modèle qui a produit un brouillon est sans pertinence ; l\'artefact publié est ce qui est réglementé.',
          '**Pour un traitement plus approfondi** de l\'éthique des modèles non censurés, du contexte légal et des bonnes pratiques, voir [LLM locaux non censurés pour l\'écriture créative : éthique, légalité et bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Non censuré est un choix de workflow, pas une identité. Beaucoup d\'auteurs utilisent le modèle instruction-tuned pour l\'essentiel d\'un projet et basculent vers un dérivé non censuré pour des scènes spécifiques que la version instruct refuse. Deux installations de modèles sur le même Ollama est le schéma courant.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces pour le travail créatif',
        content:
          '**L\'interface de chat dans laquelle on écrit compte autant que le modèle.** Trois interfaces sont des choix crédibles pour les workflows d\'écriture créative en 2026 ; choisir en fonction de la forme du workflow.',
        items: [
          '**Open WebUI** — le choix polyvalent. Interface type ChatGPT, changement de modèle en un clic, fiches de personnages via les prompts système, import de documents pour le contexte. Meilleur pour les travaux à dominante prose où la forme chat correspond au flux de rédaction.',
          '**SillyTavern** — le choix roleplay et dialogue. Écosystème de fiches de personnages (spec Tavern v2), gestion de personas, lore books pour la construction de mondes, chat de groupe pour les scènes multi-personnages. Meilleur pour les travaux à dominante dialogue et les projets de personnages ou de monde sur le long terme. S\'associe bien avec Command A+ et les dérivés non censurés.',
          '**Agnai et RisuAI** — alternatives plus légères à SillyTavern. Moins de fonctionnalités, première prise en main plus facile, moins de personnalisation. À choisir quand SillyTavern semble trop complexe pour le workflow.',
          '**Ollama CLI simple plus un éditeur de texte** — le choix minimaliste. `ollama run llama3.3:70b` et faire passer les scènes par le terminal dans le document de brouillon. Perd le contexte de personnage persistant mais gagne en concentration de l\'auteur.',
          'Pour le comparatif des interfaces focalisées sur le roleplay, voir [SillyTavern vs Agnai vs RisuAI : meilleure interface locale de roleplay](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La rédaction et la révision nécessitent des interfaces différentes. Utiliser SillyTavern pour la génération (voix des personnages, travail de scènes), puis exporter le chat vers un éditeur de texte simple pour la révision. Réviser dans la fenêtre de chat encourage l\'habitude de "demander au modèle de corriger la prose" au lieu d\'une révision pilotée par l\'auteur — un risque pour les compétences à long terme.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Décision : quel modèle pour ton travail',
        content:
          '**Cinq questions, dans l\'ordre, amènent la plupart des auteurs au bon choix.**',
        columns: ['Ma situation', 'Recommandation'],
        rows: [
          { 'Ma situation': 'J\'ai plus de 48 Go de VRAM et je veux un seul modèle pour tout', 'Recommandation': 'Llama 3.3 70B (instruct) + Hermes 3 (non censuré) sur le même Ollama' },
          { 'Ma situation': 'J\'ai un GPU de 24 Go ou un Mac de 32 Go et je veux une bonne valeur par défaut', 'Recommandation': 'Qwen3 32B' },
          { 'Ma situation': 'Je rédige un roman — la continuité long format est prioritaire', 'Recommandation': 'Mistral Large (ou Mistral La Plateforme sur infrastructure EU si le matériel local ne suffit pas)' },
          { 'Ma situation': 'Mon travail est à dominante dialogue — les voix des personnages doivent rester distinctes', 'Recommandation': 'Command A+ (ou Llama 3.3 70B comme alternative plus légère)' },
          { 'Ma situation': 'J\'écris de la poésie, des vers ou de la prose lyrique', 'Recommandation': 'Yi-1.5 34B' },
          { 'Ma situation': 'Le modèle instruct refuse des scènes que je dois écrire', 'Recommandation': 'Hermes 3 (base Llama 3.3) ou Dolphin 3.0 — conserver la version instruct pour le travail sans contenu adulte' },
          { 'Ma situation': 'Je veux commencer avec un seul modèle et itérer ensuite', 'Recommandation': 'Qwen3 32B — couvre la plupart des usages sur matériel grand public ; basculer quand un type de tâche spécifique devient prépondérant' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisir Qwen3 32B par défaut avec un GPU de 24 Go ; Llama 3.3 70B avec 48 Go+ ; Mistral Large pour les travaux de longueur roman ; Command A+ pour le dialogue ; Yi-1.5 pour la poésie ; Hermes/Dolphin pour les scènes que les modèles instruct refusent.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B est le bon modèle de départ pour la plupart des auteurs. Passer à l\'un des spécialistes quand un type de tâche spécifique (long format, dialogue, poésie, scènes matures) devient le goulot d\'étranglement. Deux installations (instruct + non censuré) sur la même machine ne coûtent rien — les deux peuvent coexister dans Ollama et on bascule selon les scènes.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La plupart des auteurs réfléchissent trop au modèle et pas assez au prompt. Un prompt système bien conçu avec des notes de personnage, des échantillons de voix et un PDV explicite fait plus pour la qualité de la sortie que passer de Qwen3 à Llama 70B. Voir [persona prompting](/fr/prompt-engineering/persona-prompting) pour la structure de prompt qui améliore régulièrement la sortie créative.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes lors du choix et de l\'utilisation de modèles locaux pour l\'écriture créative',
        items: [
          '**Erreur 1 : courir après le plus grand modèle sur les benchmarks.** Les scores d\'écriture créative corrèlent faiblement avec les classements de benchmarks généraux. Yi-1.5 34B surpasse Llama 3.3 70B en poésie ; Command A+ surpasse les deux en dialogue. Choisir par type de tâche, pas par rang de classement.',
          '**Erreur 2 : utiliser les paramètres de sampling type code.** Une température de 0,2–0,4 produit une prose plate et prévisible. L\'écriture créative nécessite 0,8–1,1 avec top-p 0,9–0,95. Les paramètres par défaut de la plupart des interfaces de chat sont calibrés pour les Q&R, pas pour la prose.',
          '**Erreur 3 : se contenter du modèle instruct et abandonner quand il refuse.** La version instruct refuse des scènes qu\'on a explicitement cadrées comme de la fiction ; le dérivé non censuré du même modèle de base les rédige. Deux installations dans Ollama est la solution.',
          '**Erreur 4 : prompts système légers.** "Tu es un assistant utile" est le pire prompt possible pour le travail créatif. Un prompt système avec des notes de personnage, des échantillons de voix, le PDV, le temps et le ton fait plus pour la qualité de la sortie que n\'importe quel changement de modèle. Associer avec le [negative prompting](/fr/prompt-engineering/negative-prompting) pour spécifier ce qu\'il ne faut PAS faire (pas d\'exposition, pas de prose pourpre, pas de "elle ressentit").',
          '**Erreur 5 : réviser dans la fenêtre de chat.** Générer dans le chat est bien ; réviser dans le chat crée l\'habitude de demander au modèle de corriger la prose au lieu de la réviser soi-même. Exporter le brouillon vers un éditeur de texte pour la révision ; la voix de l\'auteur se renforce quand le modèle n\'est plus dans la boucle.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le plus grand risque pour les compétences avec l\'IA créative est d\'externaliser la passe de révision. La génération est un travail mécanique dont le modèle est capable ; la révision est la partie qui rend la prose la tienne. Les auteurs qui laissent le modèle réviser perdent leur voix rapidement — même quand ils ne peuvent pas identifier quelle ligne a changé.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Fiches modèles Hugging Face pour Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5](https://huggingface.co/) — documentation officielle des modèles et licences.',
          '[Hermes 3 (NousResearch) GitHub et fiche modèle](https://huggingface.co/NousResearch) — fine-tunes non censurés basés sur Llama 3.3.',
          '[Fiches modèles Dolphin 3.0 (Cognitive Computations)](https://huggingface.co/cognitivecomputations) — fine-tunes non censurés sur plusieurs modèles de base.',
          '[Bibliothèque de modèles Ollama](https://ollama.com/library) — modèles disponibles, options de quantification, flags de support d\'appels d\'outils référencés ci-dessus.',
          '[Documentation SillyTavern](https://docs.sillytavern.app/) — spécification des fiches de personnages, système de personas, fonctionnalités de chat de groupe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quel LLM local est le meilleur pour la fiction en 2026 ?',
            a: 'Llama 3.3 70B est le meilleur choix polyvalent quand le matériel le permet (~42 Go de VRAM en Q4_K_M). Sur les rigs de 24 Go, Qwen3 32B est la valeur par défaut plus légère avec un petit écart de qualité sur les travaux à dominante prose. Pour la continuité long format (romans), le contexte de 128K de Mistral Large est le facteur différenciant. Choisir par type de tâche : la plupart des auteurs bénéficient plus du bon spécialiste que de courir après le plus grand modèle.',
          },
          {
            q: 'Qu\'est-ce qu\'un LLM local non censuré et quand l\'utiliser ?',
            a: 'Un modèle non censuré est un fine-tune d\'un modèle de base existant (typiquement Llama 3.3 ou Qwen3) où la couche de sécurité RLHF qui produit les refus sur les prompts matures ou moralement complexes a été retirée. Le modèle suit le prompt au lieu de décliner. Utiliser les dérivés non censurés (Hermes 3, Dolphin 3.0) pour la fiction mature, les scènes de conflit, l\'écriture historiquement exacte, ou tout workflow où le modèle instruction-tuned refuse des scènes cadrées comme de la fiction. L\'auteur reste l\'auteur ; le modèle arrête de se mettre en travers.',
          },
          {
            q: 'Quelle température utiliser pour l\'écriture créative ?',
            a: 'La température 0,8–1,1 est la plage créative, associée à top-p 0,9–0,95. Le dialogue serré nécessite 0,7–0,85 ; la prose lyrique et la poésie nécessitent 1,0–1,2 ; la fiction surréaliste ou de genre nécessite 1,1–1,3. Les valeurs par défaut de la plupart des interfaces de chat (souvent 0,7 avec top-p 0,9) sont calibrées pour les questions-réponses et produisent une prose plate sur les prompts créatifs. Tester sur une scène courte à 3 paramètres, choisir celui où le modèle sonne le plus vivant sans perdre le prompt.',
          },
          {
            q: 'Les modèles créatifs locaux sont-ils aussi bons que ChatGPT ou Claude ?',
            a: 'Pour la plupart des prompts, oui — suffisamment proches pour que les avantages de confidentialité et de coût dominent. Les modèles cloud frontaux ont encore l\'avantage sur les tâches créatives les plus difficiles (cohérence long format au-delà de 50K tokens, références culturelles très obscures, langues rares). Pour une session de fiction ou de roleplay typique, un auteur qui a calibré les paramètres de sampling sur Llama 3.3 70B ou Qwen3 32B ne verra pas d\'écarts de qualité systématiques face à GPT-5 ou Claude. Les modèles qui perdent sont ceux traités avec "température 0,7, prompt système générique" — ce traitement perd face à n\'importe quel modèle cloud.',
          },
          {
            q: 'Un modèle local peut-il écrire un roman complet ?',
            a: 'Il peut aider à en rédiger un. Mistral Large avec son contexte de 128K peut tenir un brouillon de 50 000 mots en mémoire ; Llama 3.3 70B et Qwen3 32B avec un contexte de 32K nécessitent une rédaction section par section. Le goulot d\'étranglement n\'est pas la capacité du modèle — c\'est la structure de l\'auteur (plan, bible des personnages, lore book) que le modèle utilise pour maintenir la continuité. Sans ceux-là, même Mistral Large dérive. Avec eux, n\'importe lequel des meilleurs choix tient sur un travail de longueur roman.',
          },
          {
            q: 'Les modèles non censurés produisent-ils du contenu illégal ?',
            a: 'Pas plus que les modèles instruction-tuned. Les deux produisent le texte demandé par le prompt ; les modèles non censurés sont plus disposés à traiter les thèmes matures que la couche de sécurité instruction-tuned refuse. La responsabilité légale est celle de l\'auteur et de la publication, pas du modèle. L\'AI Act de l\'UE, le §184/§184c StGB allemand, l\'article 227-23 du Code pénal français et le droit américain sur l\'obscénité couvrent des catégories de contenu spécifiques indépendamment de la méthode de génération. L\'hébergement local ne change pas la loi ; il change qui a accès au brouillon.',
          },
          {
            q: 'SillyTavern est-il uniquement pour le roleplay adulte ?',
            a: 'Non. SillyTavern est une interface focalisée sur le chat avec fiches de personnages, gestion de personas et lore books — utile pour tout travail à dominante dialogue ou axé sur les personnages. Beaucoup d\'auteurs l\'utilisent pour la rédaction de fiction non-roleplay (scènes multi-personnages, cohérence de voix sur de longs projets). L\'écosystème de fiches de personnages inclut du contenu adulte mais ne s\'y limite pas ; la même interface fonctionne pour la fiction littéraire, le scénario et le travail de narrative de jeu.',
          },
          {
            q: 'En quoi l\'écriture créative locale diffère-t-elle des workloads de code ?',
            a: 'Par les paramètres de sampling et la structure du prompt. Le code nécessite une température de 0,2–0,4, une sortie déterministe, une sortie structurée (JSON, code) et des contraintes explicites dans le prompt. L\'écriture créative nécessite une température de 0,8–1,1, une sortie plus libre, une forme en prose et des prompts système plus riches (voix des personnages, PDV, ton, conventions de genre). Le même modèle — Llama 3.3 70B sert les deux — produit des sorties radicalement différentes selon ces paramètres. Un prompt style code sur un modèle créatif produit une sortie plate ; un prompt style créatif sur un modèle de code produit du code halluciné.',
          },
          {
            q: 'Quel modèle local a le moins de "marques IA" ?',
            a: 'Les marques IA — phrases comme "frisson dans la nuque", "tapisserie", "plonger dans", "naviguer" et résumés de transition style ChatGPT — sont plus fréquentes dans les petits modèles instruct. Llama 3.3 70B et Qwen3 32B en ont moins que les modèles en dessous de 20B. Hermes 3 en a le moins de ce comparatif : l\'entraînement au schéma de refus RLHF était aussi là où de nombreuses transitions formulaïques ont été introduites, et les retirer supprime les deux. Le levier à l\'impact le plus élevé pour réduire les marques est le prompt système avec des exemples négatifs ("n\'écris pas \'frisson\', \'tapisserie\', ou \'plonger dans\'"), pas le modèle.',
          },
          {
            q: 'Comment éviter le cliché du "frisson dans la nuque" ?',
            a: 'Un prompt système avec des exemples négatifs est le levier à l\'impact le plus élevé — lister explicitement 8–12 phrases bannies ("n\'écris pas \'frisson\', \'tapisserie\', \'plonger dans\', \'magistralement\', ou \'elle ressentit\'"). Baisser légèrement la température (0,85–0,95 au lieu de 1,1) pour réduire l\'attirance du modèle vers le langage stock. Le repeat penalty 1,1 seul ne capture PAS cela — les phrases ne sont pas des répétitions exactes de tokens. La pénalité DRY (multiplicateur 0,8, base 1,75) les capture au niveau n-gramme entre les scènes. Une passe de révision manuelle est le filtre final. Voir [negative prompting](/fr/prompt-engineering/negative-prompting) pour la structure de prompt qui élimine régulièrement les clichés.',
          },
          {
            q: 'L\'utilisation d\'un LLM local pour la fiction est-elle concernée par le RGPD ?',
            a: 'Un LLM s\'exécutant entièrement en local ne transfère aucune donnée vers un service tiers — tes textes, tes personnages et tes sessions de génération restent sur ta machine. Il n\'y a donc pas de responsable de traitement au sens de l\'article 4 du RGPD ni de sous-traitant à contractualiser. Si tu utilises tes générations locales pour traiter des données à caractère personnel de personnes réelles (par exemple, rédiger des textes mentionnant des individus identifiables), les obligations de base du RGPD s\'appliquent. Pour une fiction purement fictive sans personnages réels identifiables, l\'usage local est sans incidence au regard du RGPD.',
          },
          {
            q: 'Quelles limites légales s\'appliquent en France à la génération de contenu adulte ou sensible avec un LLM local ?',
            a: 'L\'hébergement local ne modifie pas le droit applicable à l\'artefact produit. En France, l\'article 227-23 du Code pénal (représentation de mineurs à caractère pornographique) constitue une interdiction absolue — la génération locale ne constitue pas une exception. L\'article 24 de la loi du 29 juillet 1881 interdit l\'incitation à la haine, à la discrimination ou à la violence fondées sur l\'origine, la religion ou l\'orientation sexuelle. Les scènes de fiction adulte entre personnages adultes consentants et fictifs ne font pas l\'objet d\'une prohibition générale, mais engagent la responsabilité pénale de l\'auteur en cas de publication ou diffusion. La génération locale non publiée reste dans la sphère privée.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture complémentaire',
        items: [
          '[SillyTavern vs Agnai vs RisuAI : meilleure interface locale de roleplay (2026)](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparatif des trois interfaces focalisées sur le roleplay avec les modèles ci-dessus.',
          '[Prompts LLM locaux pour auteurs de fiction : modèles et techniques](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — modèles de prompts prêts à copier pour le développement de personnages, le dialogue, la construction de mondes et les workflows de révision.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique, légalité et bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — traitement complet de quand les dérivés non censurés sont des outils créatifs légitimes et où se trouvent les limites légales et éthiques.',
          '[Température et top-p : contrôler la créativité de l\'IA](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) — la face prompt engineering des paramètres de sampling ; plus approfondi que le résumé de ce guide.',
          '[Negative prompting](/fr/prompt-engineering/negative-prompting) — spécifier ce qu\'il ne faut PAS faire dans un prompt ; un multiplicateur de force pour les prompts système sur les travaux créatifs.',
          '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — le guide de référence du paysage des modèles ; utile quand tu veux explorer au-delà des six choix créatifs ci-dessus.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'クリエイティブライティングに最適なローカルLLM 2026：小説・ダイアログ・世界構築',
    seoTitle: 'クリエイティブライティング向けローカルLLM 2026：比較・実測ガイド',
    intro:
      'クリエイティブライティングは、ローカルLLMがプライバシーやコスト以外の面でも優位性を発揮するワークロードです。2026年のベストなinstruct-tuned・無検閲オープンウェイトモデル——Llama 3.3 70B、Qwen3 32B、Mistral Large、Command A+、Yi-1.5 34B、そしてHermes/Dolphinの無検閲派生版——は、ほとんどのプロンプトでフロンティアクラウドモデルに匹敵する小説・ダイアログ・世界構築を生成します。違いは声の一貫性、ダークまたは成人向けテーマの扱い、方向性への従いやすさにあります。本ガイドでは、6つのモデルを小説・ダイアログ・詩・世界構築にまたがる50以上のクリエイティブプロンプトでテストし、各モデルに適した温度とTop-Pの設定も紹介します。',
    metaDescription:
      'クリエイティブライティング向けローカルLLM 6モデル比較：Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5、無検閲版。50以上のプロンプトで実測。',
    twitterDescription:
      '小説・ダイアログ・世界構築向けローカルLLM 6モデルを50以上のプロンプトでテスト。Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5と無検閲オプション。タスク別評価。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'プライバシー・声の一貫性・成熟したテーマへの対応をベンチマークスコアより重視し、ローカルLLMを使って創作活動を行う小説家、脚本家、ゲームデザイナー、世界構築者、ロールプレイ愛好家。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルLLM クリエイティブライティング',
    targetKeywords: [
      'ローカルLLM クリエイティブライティング',
      'ローカルLLM 小説執筆',
      '無検閲 ローカルLLM',
      'Llama Mistral クリエイティブライティング 比較',
      'ローカルLLM ダイアログ生成',
      'ローカルLLM 世界構築',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70Bは2026年5月現在、クリエイティブライティングにおける総合最良のローカル選択です——声の一貫性が高く、方向性への追従も良好で、システムプロンプトでフィクションとして定義されていればダークなテーマも拒否せずに扱います。Qwen3 32Bは24 GBリグでの適切な選択：散文の品質はほぼ同等で、ハードウェア要件はより軽量です。Mistral Largeはネイティブ128Kコンテキストによる長編継続性で勝ります。Command A+は最もクリーンなダイアログの声を持っています。Yi-1.5 34Bは詩と抒情的な散文のニッチな選択です。instructモデルが拒否するワークフローには、Hermes 3（Llama 3.3ベース）とDolphin 3.0が無検閲の選択肢となります——同じアーキテクチャで、RLHFセーフティレイヤーが除去されています。温度0.8〜1.1、Top-P 0.9〜0.95がクリエイティブライティングの範囲です。0.7以下は平坦な散文を生成します。無検閲≠非倫理的——それはモデルが拒否する代わりにプロンプトに従うことを意味します。著者は依然として著者です。**',
    quickAnswerTop: {
      ja: {
        question: '2026年のクリエイティブライティングに最適なローカルLLMは何ですか？',
        answer:
          'Llama 3.3 70Bが総合最良のローカル選択です——散文・ダイアログ・世界構築において優秀で、長いセッションを通じて声の一貫性を維持します。ハードウェアが48 GBに満たない24 GBリグでは、Qwen3 32Bが品質損失の少ない軽量な代替です。Mistral Largeは長編執筆（128Kコンテキスト）のための選択です。Command A+は最もナチュラルなダイアログの声を持ちます。Yi-1.5 34Bは詩と抒情散文のスペシャリストです。instructモデルのセーフティレイヤーにぶつかるワークフロー（成熟したフィクション、争闘シーン、道徳的に複雑なキャラクター）には、Hermes 3とDolphin 3.0の派生版が同じベースモデルでRLHFセーフティレイヤーを除去したものです——拒否の代わりにプロンプトに従います。温度0.8〜1.1、Top-P 0.9〜0.95がクリエイティブライティングの範囲です。コーディングスタイルの設定（0.2〜0.4）は平坦な散文を生成します。',
        bullets: [
          '総合最良：Llama 3.3 70B——声の一貫性が最も高く、方向性への追従も良好、フィクションとして定義されれば拒否せずダークなテーマも扱える。',
          '24 GBリグのベスト：Qwen3 32B——散文品質はLlama 70Bにほぼ匹敵し、ハードウェア要件がはるかに軽い。',
          '長編ベスト：Mistral Large——128Kコンテキスト標準搭載；長編執筆でも話の流れを維持。',
          'ダイアログベスト：Command A+——キャラクター間で最もナチュラルな会話の声。',
          '詩・抒情ベスト：Yi-1.5 34B——韻文・スタイル散文のニッチな選択。',
           'instructが拒否する場合：Hermes 3（Llamaベース）またはDolphin 3.0——無検閲版、同じアーキテクチャ、プロンプト追従。',
          'サンプリング：散文には温度0.8〜1.1、Top-P 0.9〜0.95；タイトなダイアログはより低く、サリアル/ジャンル作品はより高く。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'ポイントまとめ', anchor: '#key-takeaways' },
      { label: '基本情報', anchor: '#quick-facts' },
      { label: 'テスト方法', anchor: '#how-we-tested' },
      { label: 'ヘッドtoヘッド比較', anchor: '#comparison' },
      { label: 'モデル別評価', anchor: '#verdicts' },
      { label: '出力サンプル', anchor: '#sample-outputs' },
      { label: 'クリエイティブ作業における温度とTop-P', anchor: '#sampling' },
      { label: '無検閲モデルとは', anchor: '#uncensored' },
      { label: 'クリエイティブ作業向けフロントエンド', anchor: '#frontends' },
      { label: '選択：あなたの作品に合ったモデル', anchor: '#decision' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '参考文献', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70Bは2026年5月現在、クリエイティブライティングにおける総合最良のローカルモデルです。** 声の一貫性が最も高く、方向性への追従も良好で、システムプロンプトでフィクションと定義されていれば拒否せずにダークなテーマを扱います。',
          '**Qwen3 32Bは24 GBリグの適切な選択です。** 48 GB以上のVRAMを必要とせずにほぼLlama 70Bの散文品質を実現します。ほとんどのラップトップ・デスクトップのデフォルト選択です。',
          '**Mistral Largeは長編継続性で勝ります。** 128Kコンテキスト標準搭載；長編執筆でもキャラクターの詳細や話の流れを失いません。',
          '**Command A+は最もクリーンなダイアログの声を持ちます。** キャラクター間で最もナチュラルな会話のビートを持ち、ダイアログが構造的要素の中心となる作品に最適です。',
          '**Yi-1.5 34Bは詩と抒情散文のスペシャリストです。** 韻・スタイル散文・リズムが重要な短編作品のためのニッチな選択です。',
          '**無検閲派生版（Hermes 3、Dolphin 3.0）はinstructモデルが拒否するときの適切な選択です。** 同じベースモデルで、RLHFセーフティレイヤーが除去されています。成熟したフィクション・争闘シーン・道徳的に複雑なキャラクターが書けるようになります。',
          '**サンプリングは多くの人が思うより重要です。** 温度0.8〜1.1、Top-P 0.9〜0.95がクリエイティブ範囲です。コーディングスタイルの設定（0.2〜0.4）は平坦で予測可能な散文を生成します。1.2以上はジャンル/シュルレアリスムの領域です。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本情報',
        items: [
          '**総合最良：** Llama 3.3 70B（Q4_K_M）、約42 GB VRAM。このセットで最高の声の一貫性。',
          '**24 GBリグのベスト：** Qwen3 32B（Q4_K_M）、約20 GB VRAM。ほとんどのユーザーのデフォルト。',
          '**長編ベスト：** Mistral Large（Q4_K_M）、約75 GB VRAM（重量級）。128Kコンテキスト標準搭載。',
          '**ダイアログベスト：** Command A+（Q4_K_M）、約62 GB VRAM。最もクリーンなキャラクター声の分化。',
          '**詩のベスト：** Yi-1.5 34B（Q4_K_M）、約21 GB VRAM。抒情散文スペシャリスト。',
          '**無検閲オプション：** Hermes 3（Llama 3.3ベース、約42 GB）とDolphin 3.0（複数ベースサイズ、13〜42 GB）。',
          '**散文のデフォルトサンプリング：** 温度0.95、Top-P 0.92、リピートペナルティ1.1。タスクタイプごとに調整。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'テスト方法：6モデルで50以上のクリエイティブプロンプト',
        content:
          '**テストはプロンプトセット・サンプリング設定・フロントエンドを一定に保ち、モデルのみを変えました。** タスクタイプごとに同じルーブリックで評価した50のプロンプトを小説・ダイアログ・詩・世界構築にわたって使用しました。',
        items: [
          '**バックエンド：** macOS・LinuxでOllama 0.5以降；モデルごとに同じコンテキスト制限；6モデル全てにQ4_K_Mの量子化（VRAMが許す場合は32B〜34Bの小さいモデルにQ5_K_Mを使用、ルーブリックスコアに測定可能な差はなし）。',
          '**フロントエンド：** テストの大部分にOpen WebUI（チャットスタイルの作業）；ダイアログが多くロールプレイに焦点を当てたサブセットにSillyTavern（クリエイティブライターの実際の使用方法に合わせた）。',
          '**プロンプトセット：** 4つのタスクタイプにわたる50のプロンプト——小説（15：短編小説の始め方、シーンの続き、描写的な文章）、ダイアログ（15：2キャラクターの交換、グループシーン、声の分化）、詩（10：自由詩、構造的な形式、抒情散文）、世界構築（10：設定描写、派閥の政治、魔法システム）。分散を捉えるためモデルごとに各プロンプトを3回実行。',
          '**サンプリング：** ベースラインとして温度0.95、Top-P 0.92、リピートペナルティ1.1；タスク別の調整は以下のモデル別評価に記録。',
          '**評価ルーブリック：** 声の一貫性（キャラクターやナレーターは段落をまたいで同じように聞こえるか？）、プロンプト忠実性（モデルは方向性に従ったか、それとも独自のシーンを作り出したか？）、散文の質（リズム・語彙・陳腐さの回避）、意欲（モデルはフィクションとして明示的に定義されたシーンを拒否またはサニタイズしたか？）。',
          '**誠実さの制約：** スコアはタスクごとの相対ランクとして報告し、作り上げた絶対パーセンテージは使用しません。「ダイアログベスト」は3回の実行にわたってダイアログサブセットで一貫して1位であることを意味します。「優秀」はトップ3を意味します。「可」はモデルがルーブリックで1つ以上の競合相手に負けたことを意味します。',
          'モデルのクリエイティブ出力を向上させるプロンプティング技術については、[温度とTop-Pの制御](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity)と[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting)をご覧ください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'クリエイティブライティングのベンチマークは本質的に主観的です。上記のルーブリック（声の一貫性・プロンプト忠実性・散文の質・意欲）は繰り返し可能なスコアリングに最も近い方法ですが、同じ出力を評価する2人の読者は散文の質についてほとんどの場合に意見が異なるでしょう。評価結果は、自分自身の作品でテストすべき出発点の仮説として扱ってください。',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'ヘッドtoヘッド：クリエイティブライティングタスクにおける6つのローカルモデル',
        content:
          '**Llama 3.3 70Bは最も幅広いタスクでトップに立ちます；小さくて専門的なモデルはそれぞれ1〜2つのカテゴリで勝ります。** 全体のランキングではなく、タスクタイプで選んでください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70Bは総合最強のクリエイティブモデル；Qwen3 32Bはより軽い代替；Mistral Largeは長編で優位；Command A+はダイアログで優位；Yi-1.5は詩で優位；Hermes/Dolphinは他のモデルが拒否するシーンを扱う。',
          },
          {
            type: 'plain-terms',
            text: 'どの1つのモデルも全ての面で最高ではありません。Llama 3.3 70Bはハードウェアが許せば安全なデフォルトです。Qwen3 32Bは24 GB GPUでの賢い選択です。特定のタスクタイプが構造的要素の中心となる場合はスペシャリスト（長編ならMistral、ダイアログならCommand A+、詩ならYi-1.5）を選んでください。instructモデルが書く必要のあるシーンを拒否する場合は無検閲派生版を選んでください。',
          },
        ],
        columns: ['モデル', 'サイズ', 'VRAM (Q4_K_M)', '小説', 'ダイアログ', '詩', '世界構築', '用途'],
        rows: [
          { 'モデル': 'Llama 3.3 70B', 'サイズ': '70B', 'VRAM (Q4_K_M)': '約42 GB', '小説': '最良', 'ダイアログ': '優秀', '詩': '優秀', '世界構築': '最良', '用途': '総合最良；ハードウェアが許す場合のデフォルト' },
          { 'モデル': 'Qwen3 32B', 'サイズ': '32B', 'VRAM (Q4_K_M)': '約20 GB', '小説': '優秀', 'ダイアログ': '優秀', '詩': '可', '世界構築': '優秀', '用途': '24 GBリグのデフォルト；Llama 70Bとの差は小さい' },
          { 'モデル': 'Mistral Large', 'サイズ': '123B', 'VRAM (Q4_K_M)': '約75 GB', '小説': '優秀（長編）', 'ダイアログ': '優秀', '詩': '可', '世界構築': '優秀', '用途': '長編継続性、128Kコンテキスト' },
          { 'モデル': 'Command A+', 'サイズ': '非公開', 'VRAM (Q4_K_M)': '約62 GB', '小説': '優秀', 'ダイアログ': '最良', '詩': '可', '世界構築': '優秀', '用途': 'ダイアログ多用の作品、グループシーン' },
          { 'モデル': 'Yi-1.5 34B', 'サイズ': '34B', 'VRAM (Q4_K_M)': '約21 GB', '小説': '可', 'ダイアログ': '可', '詩': '最良', '世界構築': '可', '用途': '詩、抒情散文、スタイル重視の作品' },
          { 'モデル': 'Hermes 3 / Dolphin 3.0', 'サイズ': '13B〜70B', 'VRAM (Q4_K_M)': '約9〜42 GB', '小説': 'ベースと同等', 'ダイアログ': 'ベースと同等', '詩': 'ベースと同等', '世界構築': 'ベースと同等', '用途': 'instructモデルが拒否するシーン' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '2モデル構成が一般的なパターンです：メインドライバーとしてLlama 3.3 70B（またはQwen3 32B）、instructバージョンが拒否するシーン用に同じOllamaにHermes 3派生版も追加します。シーンごとに切り替えられます；両方が`ollama list`に同時に存在しても競合しません。',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'モデル別評価',
        items: [
          '**Llama 3.3 70B** — 総合最良。テストセット内で最高の声の一貫性；キャラクターは長いシーンにわたって同じ話し方のパターンを維持します。方向性への追従が良好——システムプロンプトでPOV・トーン・ジャンル規則を指定すると、Llama 3.3は従います。フィクションとしてプロンプトで定義されていれば、ダークなテーマ（暴力・悲嘆・道徳的にグレーなキャラクター）を拒否せずに扱います。弱点：長い文章が時々一般的な「文学的」な声に流れることがある；同じファミリーの小さいモデル（8B）はこの強みを失います。',
          '**Qwen3 32B** — 24 GBリグのベスト。Llama 3.3 70Bよりわずかに声の一貫性が低いですが、散文が多い作業ではほとんどの作者が気づかない差です。より小さいモデルの中では方向性への追従が最も優秀です。弱点：詩とスタイル散文は明らかに劣ります；それらにはYi-1.5を優先してください。',
          '**Mistral Large** — 長編継続性のベスト。128Kのコンテキストウィンドウにより5万語の草稿が切り捨てなしに収まります；キャラクターの詳細・プロットの糸・世界のルールを複数の章にわたって維持します。弱点：このセットで最も高いハードウェア要件（Q4_K_Mで約75 GB）；長い入力ではトークンごとの速度が低下します。ローカルハードウェアが制約の場合はEUインフラ上のMistral La Plateformeを使用してください。',
          '**Command A+** — ダイアログのベスト。交換にわたって区別できるキャラクターの声を維持します；グループシーン（3人以上の話者）は他のモデルで一般的な「全員が同じように聞こえる」失敗モードなしに読み取れます。弱点：ダイアログのビート間の散文段落は有能ですが抒情的ではありません；純粋に描写的な文章にはLlama 3.3が勝ります。',
          '**Yi-1.5 34B** — 詩と抒情散文のベスト。リズムを意識し、構造的な形式（ソネット・ビラネル・俳句）に慣れており、大きな汎用モデルよりもしっかりした詩を生成します。弱点：長編小説は有能ですが強みではありません；物語の作業にはLlama 3.3またはQwen3を選んでください。',
          '**Hermes 3（Llama 3.3ベース）とDolphin 3.0** — 無検閲派生版。Llama 3.3 70Bと同じアーキテクチャとベースウェイト；ファインチューニング中にRLHFセーフティレイヤーが除去されています。モデルは成熟したコンテンツを拒否またはサニタイズする代わりにプロンプトに従います。非成熟なプロンプトでの品質はベースモデルと同等です；違いはinstructバージョンが拒否するプロンプトでのみ現れます。作業が必要な場合（成熟したフィクション・暴力的なシーン・道徳的に複雑なキャラクター）に使用し、それ以外はinstructベースのモデルを使用してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '声の一貫性は、早期のモデル評価でほとんどの作者が過小評価する指標です。1段落で素晴らしい散文を生成しながら5段落目でキャラクターの話し方のパターンを失うモデルは、20段落にわたって一貫した声で有能な散文を生成するモデルより劣っています。ワンショットの品質だけでなく、長いセッションの継続性をテストしてください。',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: '出力サンプル：3モデル、1プロンプト',
        content:
          '**共有プロンプト：** "午前2時、雨に濡れたダイナーに入る探偵のノワールシーンを始めてください。" 同じ温度（0.95）、同じTop-P（0.92）、同じリピートペナルティ（1.1）——モデルのみが変わります。以下の抜粋は3回の実行にわたってこのプロンプトクラスに対する各モデルの典型的な出力を代表しています。',
        items: [
          '**Llama 3.3 70B** — 「ドアの上のベルが2回鳴って沈黙した。雨が3歩踏み出す前にコートを伝ってシーツ状に流れ落ち、リノリウムに溜まった。カウンター越しの女性は顔を上げなかった。奥のブースにいる2人のトラック運転手はコーヒーを研究していた。深夜2時にこんな場所にいる誰もが注目されたくなかった——そして私もそうだった。」 — *具体的な感覚的根拠、能動態、無駄のない言葉。社会的シーンが3文で確立されています。*',
          '**Qwen3 32B** — 「タバコの煙とグリルの油の壁の中にドアを押し進んだ。ダイナーは半分空で完全に静かだった——人々が言葉なしで、お互いを放っておくことに同意したときに漂う静けさだ。天井のファンが回っていた。ウェイトレスはカウンターの遠端でマグカップを補充していたが、私を見なかった。」 — *行動前の環境的なセットアップ；効率的な雰囲気。Llama 3.3より若干構造的ですが、同様に清潔。*',
          '**Yi-1.5 34B** — 「雨は、誰も覚えていたくない夜の最後の時間を数えるメトロノームの規則性でひさしを叩いた。内部では、蛍光灯が冷たい算術をラミネートにかけていた——全てのシミ、全ての傷、エントロピーとの議論に負け続けてきた全ての年。近端のスツールを見つけ、何かとすでに折り合いをつけた男のように腰を下ろした。」 — *最初の節から比喩主導；文のリズム変化；より濃いイメージ。Yi-1.5の詩的背景が散文でも見えます。*',
        ],
        columns: ['モデル', '典型的な書き出し', '典型的な描写パターン'],
        rows: [
          { 'モデル': 'Llama 3.3 70B', '典型的な書き出し': 'アクション優先、即座の感覚的描写', '典型的な描写パターン': '具体的・身体的；抽象名詞を避ける；社会的根拠あり' },
          { 'モデル': 'Qwen3 32B', '典型的な書き出し': 'キャラクターの行動前に環境観察', '典型的な描写パターン': '効率的；社会的・雰囲気的描写；わずかな構造的特徴あり' },
          { 'モデル': 'Yi-1.5 34B', '典型的な書き出し': '最初の節から比喩または直喩', '典型的な描写パターン': '抽象的なイメージ；リズム変化；より密度が高い；時折過度に凝った表現' },
          { 'モデル': 'Command A+', '典型的な書き出し': 'キャラクターの声またはダイアログに近い書き出し', '典型的な描写パターン': '会話的；強く独特な声；単独描写はやや弱い' },
          { 'モデル': 'Mistral Large', '典型的な書き出し': 'シーン設定段落；ゆっくりした始まり', '典型的な描写パターン': '均一でコントロールされている；長文でも一貫；やや汎用的' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらの抜粋は複数の実行にわたる各モデルの傾向を示すものであり、チェリーピックされたハイライトではありません。Yi-1.5 34Bの「エントロピーとの議論に負け続けてきた」は3回の実行のうち1回に登場しました；残りの2回はよりシンプルでした。同じプロンプトでどのモデルも2〜3回実行し、単に最初の出力ではなく、シーンに合ったものを選んでください。',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'クリエイティブ作業における温度とTop-P',
        content:
          '**クリエイティブライティングはコードよりも高いサンプリング温度を必要とします。** ほとんどのチャットUIに搭載されているデフォルトのサンプリングパラメータは、散文ではなく質問応答に合わせて調整されています——温度0.7とTop-P 0.9はクリエイティブなプロンプトに対して平坦で予測可能な出力を生成します。',
        items: [
          '**散文のベースライン：** 温度0.95、Top-P 0.92、リピートペナルティ1.1。これはほとんどの小説・ダイアログ・世界構築作業の出発点です。ここからタスクごとに調整してください。',
          '**タイトなダイアログ：** 温度0.7〜0.85、Top-P 0.9。低い温度は交換にわたってキャラクターの声の一貫性を維持します；高い値はキャラクターらしくない合いの手を生成します。',
          '**抒情散文と詩：** 温度1.0〜1.2、Top-P 0.95。高い温度は詩を機能させる予期しない言葉の選択を解放します。',
          '**シュルレアリスムまたはジャンルフィクション：** 温度1.1〜1.3、Top-P 0.95〜0.98。モデルをより一般的でないイメージと比喩の組み合わせを生成するよう促します。',
          '**プロット主導シーン（アクション・ミステリー・ひねり）：** 温度0.85〜0.95、Top-P 0.9。新規性よりも方向性への追従を優先します。',
          '**リピートペナルティ1.1〜1.15** がほとんどのクリエイティブ作業に適した範囲です。高い（1.2以上）とモデルは繰り返しがスタイリスティックに意図的な場合でも単語の繰り返しを避けます；低い（1.0〜1.05）と長いシーンでモデルがループに入ります。',
          '**min_p（0.05〜0.1）：** ピークトークン確率に対して確率カットオフを動的にスケーリングするTop-Pの新しい代替手段。非常に高いTop-P値の一貫性リスクなしに、クリエイティブなプロンプトではTop-P 0.9よりも許容的です。SillyTavernとKoboldCppのユーザーには、インターフェースがこれを公開している場合の2026年の推奨デフォルト；OllamaはそのままパススルーしてOllamaのOpen WebUI 0.5以降は詳細設定の下で公開しています。',
          '**DRYリピートペナルティ（乗数0.8、ベース1.75、許容長さ2）：** 標準のrepeat_penaltyが見逃す句レベルの繰り返しを捕捉します。repeat_penaltyが個々のトークンを追跡するのに対し、DRYはn-gramシーケンスを追跡します——シーン1の「背筋が凍った」という陳腐表現はシーン4で再び現れそうになると抑制されます。モデルが自分の出力を見てそれを引き出し始める長いセッションのクリエイティブ作業に役立ちます。',
          '**現代のクリエイティブライティングベースライン（2026）：** 温度0.95、min_p 0.05、DRY乗数0.8（ベース1.75、許容長さ2）。フロントエンドがmin_pやDRYを公開していない場合、Top-P 0.92も引き続き有効です——これらは古典的な設定の段階的な改善であり、必須の交換ではありません。',
          'なぜこれらのパラメータが重要で、どのように相互作用するかについてのより完全な解説は、[温度とTop-Pの制御](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity)をご覧ください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'モデルごとに1つの短いシーンでサンプリング設定をテストしてください——各設定で3回の実行、その後モデルが最も生き生きして聞こえながらプロンプトを失わない温度を選んでください。Llama 3.3 70Bで機能する設定はMistral LargeやYi-1.5には完全には移りません；モデルごとにキャリブレーションしてください。',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: '無検閲モデル：その正体と重要性',
        content:
          '**無検閲は非倫理的を意味しません。** それはモデルのinstruction-tuningセーフティレイヤー（RLHFによる拒否）が除去またはバイパスされており、モデルが拒否またはサニタイズする代わりにプロンプトに従うことを意味します。著者は依然として著者であり、ツールは邪魔をするのをやめます。',
        items: [
          '**「無検閲」が技術的に意味するもの。** Hermes 3やDolphin 3.0のようなモデルは、ベースモデル（Llama 3.3、Qwen3）の微調整バリアントで、成熟した・暴力的な・道徳的に複雑なプロンプトに対して拒否を生成するポストトレーニングRLHFパスが、プロンプトに従う微調整に置き換えられています。同じアーキテクチャ、同じベースウェイト、異なるポストトレーニング。',
          '**クリエイティブ作業での重要性。** 成熟したフィクション（性的なシーンを含む文学小説・グラフィックな暴力を伴う犯罪小説・ホラー）、歴史的に正確な執筆（戦争・残虐行為・植民地時代の残酷さ）、道徳的に複雑なキャラクター（モデルが説得力ある悪役の声を出すことを拒否するケース）、instructモデルが関わることを拒否するロールプレイシナリオ。',
          '**弱点。** それらはプロンプトに従います——下手に書かれたプロンプトも含めて。instructモデルはしばしば漠然としたプロンプトを公開可能なものに柔らかくします；無検閲モデルは求めたものを正確に提供しますが、それが時々より悪いこともあります。著者の方向性がより重要になります。',
          '**倫理的な境界。** 「モデルが書いてくれる」は、実在の人物を対象とする、実在または識別可能な個人が関与する非同意シナリオを描写する、または著者の管轄で違法なコンテンツを書くためのクリエイティブライティングのライセンスではありません。ローカルホスティングは法律を変えません；誰が草稿を見ることができるかを変えます。',
          '**法的背景（2026年5月、簡潔・非網羅的）。** EU AI法と加盟国の法律（特にドイツの刑法§184/§184c、フランスの刑法典第227-23条）は、生成された場所に関わらず特定のコンテンツカテゴリをカバーします。米国の猥褻法は生成ではなく公開に適用されます。商業出版では、草稿を生成したモデルは無関係です；規制されるのは公開された成果物です。',
          '**より詳しい解説については**、無検閲モデルの倫理・法的背景・ベストプラクティスについて[クリエイティブライティングのための無検閲ローカルLLM：倫理・合法性・ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics)をご覧ください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '無検閲はワークフローの選択であり、アイデンティティではありません。多くの著者はプロジェクトの大部分でinstructモデルを使用し、instructバージョンが拒否する特定のシーンには無検閲派生版に切り替えます。同じOllamaセットアップに2モデルをインストールするのが一般的なパターンです。',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'クリエイティブ作業向けフロントエンド',
        content:
          '**執筆するチャットUIはモデルと同じくらい重要です。** 2026年のクリエイティブライティングワークフローには3つの信頼できるフロントエンドの選択肢があります；ワークフローの形に合わせて選んでください。',
        items: [
          '**Open WebUI** — 汎用選択。ChatGPTのようなインターフェース、ワンクリックでモデル切り替え、システムプロンプトによるキャラクターカード、コンテキスト用のドキュメントアップロード。チャットの形があなたの起草フローに合う散文多用の作業に最適です。',
          '**SillyTavern** — ロールプレイとダイアログの選択。キャラクターカードエコシステム（Tavern v2仕様）、ペルソナ管理、世界構築のためのロアブック、複数キャラクターシーンのグループチャット。ダイアログ主導の作業と長期的なキャラクターや世界のプロジェクトに最適です。Command A+と無検閲派生版との相性が良いです。',
          '**AgnaiとRisuAI** — SillyTavernの代替として絞り込まれたもの。軽量な機能セット、より簡単な初回実行、カスタマイズは少ない。SillyTavernがワークフローに対してオーバービルドに感じる場合に選んでください。',
          '**プレーンなOllama CLIとテキストエディタ** — 最小限の選択。`ollama run llama3.3:70b`を実行し、ターミナルからシーンを草稿ドキュメントにパイプします。持続的なキャラクターコンテキストは失いますが、著者の集中力を得ます。',
          'ロールプレイ重視のフロントエンドのヘッドtoヘッド比較については、[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)をご覧ください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '起草と編集には異なるフロントエンドが必要です。生成にはSillyTavernを使用し（キャラクターの声、シーン作業）、その後チャットをプレーンテキストエディタにエクスポートして修正します。チャットウィンドウ内での編集は「モデルに修正してもらう」習慣を促進します——これは著者主導の修正ではなく、長期的なスキルリスクです。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '選択：あなたの作品に合ったモデル',
        content:
          '**5つの質問に順番に答えると、ほとんどの著者は適切な選択に到達します。**',
        columns: ['状況', 'おすすめ'],
        rows: [
          { '状況': '48 GB以上のVRAMがあり、1つのモデルで全てをこなしたい', 'おすすめ': 'Llama 3.3 70B（instruct）+ Hermes 3（無検閲版）を同じOllamaで' },
          { '状況': '24 GB GPUまたは32 GB Macがあり、安定したデフォルトを求めている', 'おすすめ': 'Qwen3 32B' },
          { '状況': '小説を執筆中——長編の継続性を最優先にしたい', 'おすすめ': 'Mistral Large（ローカルが厳しければMistral La PlatformeのEUインフラ）' },
          { '状況': 'ダイアログが多い作品——キャラクターの声を一貫させたい', 'おすすめ': 'Command A+（軽量代替としてLlama 3.3 70B）' },
          { '状況': '詩・韻文・抒情散文を書いている', 'おすすめ': 'Yi-1.5 34B' },
          { '状況': 'instructモデルが書く必要のあるシーンを拒否する', 'おすすめ': 'Hermes 3（Llama 3.3ベース）またはDolphin 3.0——成人向け以外はinstruct版を使用' },
          { '状況': '最初は1つのモデルから始めて段階的に改善したい', 'おすすめ': 'Qwen3 32B——コンシューマーハードウェアでほとんどのワークフローをカバー；特定タスクが主軸になったら切り替える' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24 GB GPUならQwen3 32Bをデフォルトに；48 GB以上ならLlama 3.3 70Bを；長編作品ならMistral Largeを；ダイアログならCommand A+を；詩ならYi-1.5を；instructモデルが拒否するシーンにはHermes/Dolphinを。',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32Bはほとんどの著者にとって適切な出発点モデルです。特定のタスクタイプ（長編・ダイアログ・詩・成熟したシーン）がボトルネックになったときにスペシャリストに移行してください。同じマシンに2つのインストール（instruct版と無検閲版）はコストゼロです——両方がOllamaに存在でき、シーンごとに切り替えられます。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ほとんどの著者はモデルを考えすぎてプロンプトを考えなさすぎます。キャラクターノート・声のサンプル・明示的なPOVを含む適切に作られたシステムプロンプトは、Qwen3からLlama 70Bに切り替えるよりも出力品質に対してより多くのことをします。クリエイティブ出力を一貫して向上させるプロンプト構造については[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting)をご覧ください。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'クリエイティブライティングのためのローカルモデルを選ぶ・使う際のよくある間違い',
        items: [
          '**間違い1：ベンチマークで最大のモデルを追いかける。** クリエイティブライティングのスコアは一般的なベンチマークリーダーボードとの相関が低いです。Yi-1.5 34Bは詩でLlama 3.3 70Bを上回り；Command A+は両方をダイアログで上回ります。リーダーボードのランクではなく、タスクで選んでください。',
          '**間違い2：コーディングスタイルのサンプリング設定を使用する。** 温度0.2〜0.4は平坦で予測可能な散文を生成します。クリエイティブライティングにはTop-P 0.9〜0.95で0.8〜1.1が必要です。ほとんどのチャットUIのデフォルト設定はQ&Aに合わせられており、散文には合っていません。',
          '**間違い3：instructモデルをデフォルトにして、拒否されたら諦める。** instructバージョンはフィクションとして明示的に定義したシーンを拒否します；同じベースモデルの無検閲派生版はそれらを書きます。Ollamaに2つのインストールが回避策です。',
          '**間違い4：薄いシステムプロンプト。** 「あなたは役立つアシスタントです」はクリエイティブ作業にとって最悪のプロンプトです。キャラクターノート・声のサンプル・POV・時制・トーンを含むシステムプロンプトは、どんなモデル切り替えよりも出力品質に対してより多くのことをします。何をすべきでないかを指定するために[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting)と組み合わせてください（説明なし、過剰な装飾なし、「彼女は感じた」なし）。',
          '**間違い5：チャットウィンドウ内で編集する。** チャットでの生成は問題ありません；チャットでの編集は自分で修正する代わりにモデルに散文を修正してもらうという習慣を育てます。修正のために草稿をテキストエディタにエクスポートしてください；モデルがループにいないとき著者の声は強くなります。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'クリエイティブAIで最大のスキルリスクは修正パスをアウトソーシングすることです。生成はモデルが恩恵をもたらす機械的な作業です；修正は散文をあなたのものにする部分です。モデルに修正させる著者は急速に声を失います——どの行が変わったかを指摘できない場合でも。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          '[Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5のHugging Faceモデルカード](https://huggingface.co/) — 公式モデルドキュメントとライセンス。',
          '[Hermes 3（NousResearch）GitHubとモデルカード](https://huggingface.co/NousResearch) — Llama 3.3ベースの無検閲ファインチューン。',
          '[Dolphin 3.0（Cognitive Computations）モデルカード](https://huggingface.co/cognitivecomputations) — 複数のベースモデルにわたる無検閲ファインチューン。',
          '[Ollamaモデルライブラリ](https://ollama.com/library) — 利用可能なモデル、量子化オプション、上記で参照されるツール呼び出しサポートフラグ。',
          '[SillyTavernドキュメント](https://docs.sillytavern.app/) — キャラクターカード仕様、ペルソナシステム、グループチャット機能。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '2026年の小説執筆に最適なローカルLLMはどれですか？',
            a: 'ハードウェアが許す場合（Q4_K_Mで約42 GB VRAM）、Llama 3.3 70Bが最良の汎用選択です。24 GBリグでは、Qwen3 32Bが散文多用の作業で小さな品質差のある軽量なデフォルトです。長編継続性（小説）には、Mistral Largeの128Kコンテキストが差別化要因です。タスクタイプで選んでください；ほとんどの著者は最大のモデルを追いかけるよりも適切なスペシャリストから多くの恩恵を受けます。',
          },
          {
            q: '無検閲のローカルLLMとは何で、いつ使うべきですか？',
            a: '無検閲モデルは既存のベースモデル（通常Llama 3.3またはQwen3）のファインチューンで、成熟したまたは道徳的に複雑なプロンプトに対して拒否を生成するRLHFセーフティレイヤーが除去されています。モデルは断る代わりにプロンプトに従います。成熟したフィクション・争闘シーン・歴史的に正確な執筆、またはinstructモデルがフィクションとして定義されたシーンを拒否するワークフローに無検閲派生版（Hermes 3、Dolphin 3.0）を使用してください。著者は依然として著者です；モデルは邪魔をするのをやめます。',
          },
          {
            q: 'クリエイティブライティングにはどの温度を使うべきですか？',
            a: '温度0.8〜1.1がクリエイティブライティングの範囲で、Top-P 0.9〜0.95と組み合わせます。タイトなダイアログには0.7〜0.85が必要です；抒情散文と詩には1.0〜1.2が必要です；シュルレアリスムまたはジャンル作品には1.1〜1.3が必要です。ほとんどのチャットUIのデフォルト（多くの場合Top-P 0.9で0.7）は質問応答用に調整されており、クリエイティブなプロンプトには平坦な散文を生成します。3つの設定で短いシーンをテストし、プロンプトを失わずにモデルが最も生き生きして聞こえる温度を選んでください。',
          },
          {
            q: 'ローカルのクリエイティブライティングモデルはChatGPTやClaudeと同等ですか？',
            a: 'ほとんどのプロンプトでは、はい——プライバシーとコストの優位性が支配するほど十分に近いです。フロンティアクラウドモデルは最も難しいクリエイティブタスク（50Kトークンを超える長編の一貫性、非常に難解な文化的参照、希少な言語）でまだリードしています。典型的なフィクションやロールプレイセッションでは、Llama 3.3 70BやQwen3 32Bでサンプリング設定をキャリブレーションした著者はGPT-5やClaudeとの一貫した品質差を見ないでしょう。負けるモデルは「0.7温度、一般的なシステムプロンプト」という扱いを受けたもの——それはどのクラウドモデルにも負けます。',
          },
          {
            q: 'ローカルモデルで完全な小説を書くことができますか？',
            a: 'それは執筆の手助けができます。128Kコンテキストを持つMistral Largeは5万語の草稿を切り捨てなしにメモリに保持できます；32Kコンテキストを持つLlama 3.3 70BとQwen3 32Bはセクションごとの起草が必要です。ボトルネックはモデルの能力ではありません——モデルが継続性を維持するために使用するアウトライン・キャラクター聖書・ロアブックのような著者の構造です。それらなしには、Mistral Largeでさえ脱線します。それらがあれば、トップの選択のいずれも長編の作業をまとめることができます。',
          },
          {
            q: '無検閲モデルは違法なコンテンツを生成しますか？',
            a: 'instructモデルよりも多くはありません。両方ともプロンプトが求めるテキストを生成します；無検閲モデルはinstructセーフティレイヤーが拒否する成熟したテーマをより扱いやすくします。法的責任は著者と出版物に帰属し、モデルには帰属しません。EU AI法、ドイツの刑法§184/§184c、日本の児童ポルノ禁止法、米国の猥褻法は生成方法に関わらず特定のコンテンツカテゴリをカバーします。ローカルホスティングは法律を変えません；誰が草稿へのアクセスを持つかを変えます。',
          },
          {
            q: 'SillyTavernは成人向けロールプレイだけのものですか？',
            a: 'いいえ。SillyTavernはキャラクターカード・ペルソナ管理・ロアブックを持つチャット重視のフロントエンドです——ダイアログが多い、またはキャラクター主導の作業に便利です。多くの著者はロールプレイ以外のフィクション起草（複数キャラクターシーン、長期プロジェクトにわたる声の一貫性）に使用します。キャラクターカードエコシステムには成人向けコンテンツが含まれますが、それに限定されません；同じUIは文芸小説・脚本・ゲームナラティブ作業にも機能します。',
          },
          {
            q: 'ローカルのクリエイティブライティングはコーディングのワークロードとどう違いますか？',
            a: 'サンプリング設定とプロンプト構造が異なります。コーディングには温度0.2〜0.4、決定論的な出力、構造化（JSON、コード）出力、プロンプト内の明示的な制約が必要です。クリエイティブライティングには温度0.8〜1.1、より自由な出力、散文形式、より豊かなシステムプロンプト（キャラクターの声・POV・トーン・ジャンル規則）が必要です。同じモデル——Llama 3.3 70Bは両方に対応します——これらの設定によって全く異なる出力を生成します。クリエイティブモデルにコーディングスタイルのプロンプトを使うと平坦な出力になり；コーディングモデルにクリエイティブスタイルのプロンプトを使うと幻覚したコードになります。',
          },
          {
            q: 'どのローカルモデルが最も「AIらしさ」が少ないですか？',
            a: '「AIらしさ」——「背筋が凍った」「タペストリー」「深く潜る」「ナビゲートする」といったフレーズやChatGPTスタイルの移行サマリー——は小さいinstructモデルでより頻繁に見られます。Llama 3.3 70BとQwen3 32Bは20B以下のモデルより少ない。Hermes 3はこのセットで最も少ない：RLHFの拒否パターントレーニングは多くの公式的な移行が導入された場所でもあり、それを除去すると両方が除去されます。「AIらしさ」削減のための最も影響力の高いレバーは、ネガティブな例を含むシステムプロンプト（「『背筋が凍る』『タペストリー』『深く潜る』は書かないでください」）であり、モデルではありません。',
          },
          {
            q: '「背筋が凍る」という陳腐表現を避けるにはどうすればよいですか？',
            a: 'ネガティブな例を含むシステムプロンプトが最も影響力の高いレバーです——8〜12個の禁止フレーズを明示的にリストアップしてください（「『背筋が凍る』『タペストリー』『深く潜る』『見事に』『彼女は感じた』は書かないでください」）。温度をわずかに下げる（1.1の代わりに0.85〜0.95）と、モデルのストックランゲージへの傾向が減ります。リピートペナルティ1.1だけではこれを捕捉しません——フレーズは正確なトークンの繰り返しではありません。DRYペナルティ（乗数0.8、ベース1.75）はシーンをまたいでn-gramレベルでそれらを捕捉します。手動の修正パスが最終フィルターです。陳腐表現を一貫して除去するプロンプト構造については[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting)をご覧ください。',
          },
          {
            q: 'ローカルLLMを小説執筆に使う場合、個人情報保護法は関係しますか？',
            a: 'ローカルで動作するLLMは、テキストや会話データをいかなる外部サービスにも送信しません。そのため、個人情報保護委員会への届出義務や第三者提供に関する規定は通常適用されません。ただし、実在する識別可能な個人を題材とした創作物（実名や特定できる記述を含む場合）を第三者に公開する場合は、名誉毀損・プライバシー侵害に関する法律が適用されます。架空のキャラクターを用いた純粋なフィクションであれば、ローカル生成に個人情報保護法上の問題は生じません。',
          },
          {
            q: '日本でローカルLLMを使って成人向けコンテンツを生成する場合、法的な注意点はありますか？',
            a: '「児童買春・児童ポルノに係る行為等の処罰及び児童の保護等に関する法律」（いわゆる児童ポルノ禁止法）第7条は、AIによる生成物・フィクションを問わず、18歳未満の者を性的に描写するコンテンツの製造・所持・提供を絶対的に禁止しています。これはローカル生成・非公開であっても例外ではありません。成人同士のフィクションコンテンツについては、刑法第175条（わいせつ物頒布罪）は「頒布・公然と陳列」する行為を規制しており、未公開の私的生成は一般に適用外です。ローカル生成はデータをクラウドに送らないという意味では有利ですが、生成されたコンテンツへの法的責任は著者にあります。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド（2026）](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 上記のモデルと組み合わせた3つのロールプレイ重視フロントエンドのヘッドtoヘッド比較。',
          '[小説家のためのローカルLLMプロンプト：テンプレートとテクニック](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — キャラクター開発・ダイアログ・世界構築・修正ワークフローのためのコピーペースト準備済みプロンプトテンプレート。',
          '[クリエイティブライティングのための無検閲ローカルLLM：倫理・合法性・ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 無検閲派生版が正当なクリエイティブツールである場合と法的・倫理的ラインの完全な解説。',
          '[温度とTop-P：AIの創造性をコントロールする](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity) — サンプリングパラメータのプロンプトエンジニアリング側；このガイドのサマリーより深い内容。',
          '[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting) — プロンプトで何をすべきでないかを指定する；クリエイティブ作業のシステムプロンプトのための力の乗数。',
          '[ベストローカルLLMs 2026](/ja/local-llms/best-local-llms-2026) — 権威あるモデル全景ガイド；上記の6つのクリエイティブライティング選択を超えて探索したい場合に有用。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: '2026年创意写作最佳本地LLM：小说、对话与世界构建测评',
    seoTitle: '2026年创意写作最佳本地LLM：实测推荐',
    intro:
      '创意写作是本地LLM在隐私和价格之外更能体现优势的工作场景。2026年最优秀的指令调优和无审查开放权重模型——Llama 3.3 70B、Qwen3 32B、Mistral Large、Command A+、Yi-1.5 34B，以及Hermes/Dolphin无审查衍生版——在大多数提示词上，其小说、对话和世界构建输出已能与前沿云端模型比肩。差异体现在声音一致性、处理黑暗或成人题材的意愿，以及对创作方向指令的响应自然度。本指南在50余条创意提示词上对六款模型展开测试，覆盖小说、对话、诗歌、世界构建，并给出每款模型适用的温度与top-p设置。',
    metaDescription:
      '对比6款本地创意写作模型：Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5及无审查衍生版，在50余条创意提示词上测试完成。',
    twitterDescription:
      '6款本地模型在小说、对话、世界构建上的50余条实测结果。Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5及无审查选择，逐任务给出结论。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      '使用本地LLM进行创意写作的小说家、编剧、游戏设计师、世界构建者和角色扮演爱好者，尤其是隐私保护、声音一致性和处理成熟题材能力优先于基准测试分数的用户。',
    readTime: '12 分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM creative writing',
    targetKeywords: [
      'best local llm creative writing',
      'local llm fiction writing',
      'uncensored local llm',
      'llama vs mistral creative writing',
      'best local model dialogue',
      'local llm worldbuilding',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B是2026年5月综合表现最佳的本地创意写作模型——声音一致性突出，对指令方向响应良好，系统提示词将创作框定为小说时可处理黑暗题材而不拒绝。Qwen3 32B是24 GB显卡的最优选：文笔接近Llama 70B，硬件需求低得多。Mistral Large凭借原生128K上下文赢在长篇续写连贯性。Command A+拥有最干净的对话声音。Yi-1.5 34B是诗歌和意象化散文的小众专用选择。对于指令调优版拒绝的场景，Hermes 3（Llama 3.3基底）和Dolphin 3.0是无审查选项——架构相同，RLHF安全层已移除。温度0.8–1.1、top-p 0.9–0.95是创意写作区间；0.7及以下会产生平淡散文。无审查不等于不道德——它意味着模型遵从提示词而非拒绝；作者仍是创作主体。**',
    quickAnswerTop: {
      zh: {
        question: '2026年最适合创意写作的本地LLM是哪款？',
        answer:
          'Llama 3.3 70B是综合表现最佳的本地选择——在文笔、对话和世界构建上均表现突出，跨长会话的声音一致性持续稳定。在24 GB硬件上Qwen3 32B是质量损失极小的轻量替代。Mistral Large是长篇草稿的长上下文首选（原生128K）。Command A+拥有最自然的对话声音。Yi-1.5 34B是诗歌和意象化散文的专用选择。对于触发指令调优安全层的场景，Hermes 3和Dolphin 3.0衍生版使用相同的基础模型但移除了安全RLHF层——它们遵从提示词而不拒绝。温度0.8–1.1、top-p 0.9–0.95是创意写作区间；编程风格设置（0.2–0.4）会产生平淡散文。',
        bullets: [
          '综合最佳：Llama 3.3 70B——声音一致性最强，对指令方向响应好，框定为小说时处理黑暗题材不拒绝。',
          '24 GB显卡最优：Qwen3 32B——文笔接近Llama 70B，硬件需求低得多。',
          '长篇最佳：Mistral Large——原生128K上下文；不丢失线索地完成长篇小说草稿。',
          '对话最佳：Command A+——跨角色最自然的对话声音。',
          '诗歌/意象化散文最佳：Yi-1.5 34B——格律诗和意象化散文的小众专用选择。',
          '指令版拒绝时：Hermes 3（Llama基底）或Dolphin 3.0——无审查，架构相同，遵从提示词。',
          '采样：文笔用温度0.8–1.1、top-p 0.9–0.95；紧凑对话用低一档，超现实/类型小说用高一档。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '主要结论', anchor: '#key-takeaways' },
      { label: '快速参考', anchor: '#quick-facts' },
      { label: '测试方法', anchor: '#how-we-tested' },
      { label: '横向对比', anchor: '#comparison' },
      { label: '各模型评测', anchor: '#verdicts' },
      { label: '示例输出', anchor: '#sample-outputs' },
      { label: '温度与Top-P设置', anchor: '#sampling' },
      { label: '无审查模型', anchor: '#uncensored' },
      { label: '创意写作前端', anchor: '#frontends' },
      { label: '模型选择指南', anchor: '#decision' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70B是2026年5月综合表现最佳的本地创意写作模型。** 声音一致性最强，对指令方向响应良好，系统提示词将创作框定为小说时处理黑暗题材不拒绝。',
          '**Qwen3 32B是24 GB显卡的最优选。** 文笔质量接近Llama 70B，但无需48 GB以上VRAM。是大多数笔记本和台式机用户的默认选择。',
          '**Mistral Large赢在长篇续写连贯性。** 原生128K上下文；长篇小说草稿不丢失线索或角色声音。',
          '**Command A+拥有最干净的对话声音。** 跨角色最自然的对话节奏；对话是作品核心内容时的首选。',
          '**Yi-1.5 34B是诗歌和意象化散文的专用选择。** 格律诗、意象化散文和节奏重要的短篇创作的小众首选。',
          '**无审查衍生版（Hermes 3、Dolphin 3.0）是指令调优版拒绝时的正确选择。** 基础模型相同；RLHF安全层已移除；模型遵从提示词而不拒绝。成熟小说、冲突场景和道德复杂角色变得可写。',
          '**采样设置比大多数人意识到的重要得多。** 温度0.8–1.1、top-p 0.9–0.95是创意区间。编程风格设置（0.2–0.4）产生平淡、可预测的散文。1.2以上进入类型/超现实领域。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速参考',
        items: [
          '**综合最佳：** Llama 3.3 70B（Q4_K_M量化），约42 GB VRAM。本测试集中声音一致性最强。',
          '**24 GB显卡最优：** Qwen3 32B（Q4_K_M），约20 GB VRAM。大多数用户的默认选择。',
          '**长篇最佳：** Mistral Large（Q4_K_M），约75 GB总VRAM（重型）。原生128K上下文。',
          '**对话最佳：** Command A+（Q4_K_M），约62 GB VRAM。角色声音区分度最佳。',
          '**诗歌最佳：** Yi-1.5 34B（Q4_K_M），约21 GB VRAM。意象化散文专家。',
          '**无审查选项：** Hermes 3（Llama 3.3基底，约42 GB）和Dolphin 3.0（多基底，13–42 GB）。',
          '**散文默认采样：** 温度0.95、top-p 0.92、重复惩罚1.1。按任务类型调整。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '测试方法：六款模型、50余条创意提示词',
        content:
          '**测试保持提示词集、采样设置和前端不变，只改变模型。** 在小说、对话、诗歌和世界构建任务上使用同一套50条提示词；每类任务按统一评分标准给出。',
        items: [
          '**后端：** macOS和Linux上运行Ollama 0.7+；每款模型相同的上下文限制；六款模型全部使用Q4_K_M量化（较小的32B–34B模型在VRAM允许时使用Q5_K_M，评分标准得分无可测量差异）。',
          '**前端：** 主体测试使用Open WebUI（对话式场景）；对话密集和角色扮演子集使用SillyTavern（契合创意写作者实际使用方式）。',
          '**提示词集：** 50条提示词分布于四类任务——小说（15条：短故事开场、场景续写、描写段落），对话（15条：双角色交流、群戏、声音区分），诗歌（10条：自由诗、格律形式、意象化散文），世界构建（10条：场景描写、派系政治、魔法体系）。每款模型每条提示词运行3次以捕捉差异。',
          '**采样：** 基准为温度0.95、top-p 0.92、重复惩罚1.1；各模型评测中注明了逐任务调整值。',
          '**评分标准：** 声音一致性（角色或叙述者跨段落音调是否一致？）、提示词忠实度（模型是否按指令方向创作，还是自行发挥？）、文笔质量（节奏、词汇、避免陈词滥调）、创作意愿（提示词明确框定为小说时，模型是否拒绝或净化场景？）。',
          '**诚实约束：** 得分以各任务内的相对排名呈现，不虚构绝对百分比。"对话最佳"意味着在3次运行的对话子集中持续排名第一；"强"意味着前三名；"一般"意味着在该评分项目上落后于一款或多款竞争模型。',
          '关于改善任意模型创意输出的提示词技巧，请参阅[温度与Top-P设置](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity)和[角色提示词设计](/zh/prompt-engineering/persona-prompting)。',
        ],
        callouts: [
          {
            type: 'note',
            text: '创意写作评测本质上具有主观性。上述评分标准（声音一致性、提示词忠实度、文笔质量、创作意愿）是我们能做到的最接近可重复评分的方案，但两位读者对同一批输出评分时，在文笔质量上的分歧往往多于共识。建议将评测结论视为在自己的创作中验证的起点假设，而非最终定论。',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '横向对比：六款本地模型在创意写作任务上的表现',
        content:
          '**Llama 3.3 70B在最广泛的任务类型上领先；较小和专用模型各在一两个类别胜出。** 按任务类型选模型，而非按总体排名。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B是综合最强的创意模型；Qwen3 32B是轻量替代；Mistral Large赢长篇；Command A+赢对话；Yi-1.5赢诗歌；Hermes/Dolphin处理其他模型拒绝的场景。',
          },
          {
            type: 'plain-terms',
            text: '没有一款模型在所有任务上最优。Llama 3.3 70B是硬件够用时的安全默认选择。Qwen3 32B是24 GB显卡的明智之选。当某类任务成为创作核心时，选专用模型（长篇用Mistral、对话用Command A+、诗歌用Yi-1.5）。指令调优版拒绝你需要写的场景时，选无审查衍生版。',
          },
        ],
        columns: ['模型', '大小', 'VRAM (Q4_K_M)', '小说', '对话', '诗歌', '世界构建', '适用场景'],
        rows: [
          { '模型': 'Llama 3.3 70B', '大小': '70B', 'VRAM (Q4_K_M)': '~42 GB', '小说': '最佳', '对话': '强', '诗歌': '强', '世界构建': '最佳', '适用场景': '最全能首选；硬件够用时的默认选择' },
          { '模型': 'Qwen3 32B', '大小': '32B', 'VRAM (Q4_K_M)': '~20 GB', '小说': '强', '对话': '强', '诗歌': '一般', '世界构建': '强', '适用场景': '24 GB显卡默认选择；与Llama 70B差距小' },
          { '模型': 'Mistral Large', '大小': '123B', 'VRAM (Q4_K_M)': '~75 GB', '小说': '强（长篇）', '对话': '强', '诗歌': '一般', '世界构建': '强', '适用场景': '长篇续写，原生128K上下文' },
          { '模型': 'Command A+', '大小': '未公开', 'VRAM (Q4_K_M)': '~62 GB', '小说': '强', '对话': '最佳', '诗歌': '一般', '世界构建': '强', '适用场景': '对话密集型创作，群戏场景' },
          { '模型': 'Yi-1.5 34B', '大小': '34B', 'VRAM (Q4_K_M)': '~21 GB', '小说': '一般', '对话': '一般', '诗歌': '最佳', '世界构建': '一般', '适用场景': '诗歌、意象化散文、文体创作' },
          { '模型': 'Hermes 3 / Dolphin 3.0', '大小': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', '小说': '与基础模型相同', '对话': '与基础模型相同', '诗歌': '与基础模型相同', '世界构建': '与基础模型相同', '适用场景': '指令调优版拒绝写的场景' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '双模型配置是常见模式：Llama 3.3 70B（或Qwen3 32B）作为日常主力，加上同一Ollama中的Hermes 3衍生版处理指令版拒绝的场景。按场景切换；两款模型可同时出现在`ollama list`中而不冲突。',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: '各模型评测',
        items: [
          '**Llama 3.3 70B** — 综合最佳。测试集中声音一致性最强；角色在长场景中保持相同的语言风格。对指令响应良好——当系统提示词指定POV、基调或类型惯例时，Llama 3.3会遵从。在提示词框定为小说时处理黑暗题材（暴力、悲痛、道德灰色地带角色）不拒绝。不足之处：长段落偶尔飘向通用"文学"腔调；同系家族的小模型（8B）不具备这一优势。',
          '**Qwen3 32B** — 24 GB显卡最优选。声音一致性略逊于Llama 3.3 70B，但差距小到大多数作者在文笔为主的创作中感知不到。较小模型中指令遵从性最强。不足之处：诗歌和意象化散文明显落后；这类创作默认选Yi-1.5。',
          '**Mistral Large** — 长篇续写连贯性最佳。128K上下文窗口意味着5万字草稿不会截断；模型能跨章节保持角色细节、情节线索和世界规则。不足之处：本测试集中硬件要求最高（Q4_K_M约75 GB）；长输入时每token速度减慢。若本地硬件不足，可使用欧盟基础设施上的Mistral La Plateforme。',
          '**Command A+** — 对话最佳。在多轮交流中保持鲜明的角色声音；群戏（3人以上）不出现"所有人听起来一样"的通病。不足之处：对话间的散文段落称职但不出彩；纯描写段落Llama 3.3更胜一筹。',
          '**Yi-1.5 34B** — 诗歌和意象化散文最佳。节奏感强，驾驭格律形式（十四行诗、六行诗、俳句）游刃有余，诗歌质量优于较大的通用模型。不足之处：长篇小说称职但非强项；叙事类创作请选Llama 3.3或Qwen3。',
          '**Hermes 3（Llama 3.3基底）和Dolphin 3.0** — 无审查衍生版。与Llama 3.3 70B架构和基础权重相同；微调期间移除了RLHF安全层。模型遵从提示词而不拒绝或净化成熟内容。在非成熟提示词上的质量与基础模型相同；差异仅在指令调优版拒绝的提示词上可见。需要时使用（成熟小说、暴力场景、道德复杂角色），其余情况坚持使用指令调优基础版。',
        ],
        callouts: [
          {
            type: 'note',
            text: '声音一致性是大多数作者在早期模型评估中最容易忽视的指标。一个在单段落中产出精彩文笔但在第5段就失去角色语言风格的模型，不如一个在20段中始终保持一致声音的称职模型。请测试长会话连贯性，而非仅看单次输出质量。',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: '示例输出：三款模型，同一条提示词',
        content:
          '**共用提示词：**"以侦探在凌晨两点走进一家雨中小馆为开场，写一个黑色小说场景。"温度（0.95）、top-p（0.92）、重复惩罚（1.1）完全相同——只改变模型。以下节选代表每款模型在该类提示词上三次运行的典型输出。',
        items: [
          '**Llama 3.3 70B** — "门铃响了两声，归于沉默。雨水沿着外套直往下淌，我走了不到三步，便在地板上汇成了一摊。收银台后的女孩没抬头。远处卡座里两个卡车司机专心研究各自的咖啡。凌晨两点出现在这种地方的人，没一个想被人注意，我也不例外。" — *具体感官落地，主动语态，无废话。三句话建立起完整的社会场景。*',
          '**Qwen3 32B** — "我推门进去，迎面撞上一堵香烟气和铁板油烟气混合的墙。馆子里冷冷清清，安静得像大家已经默契地商量好互不打扰。头顶风扇慢悠悠地转。女招待在吧台远端加着咖啡，没看我一眼。" — *先环境后动作；氛围营造高效。比Llama 3.3略更具结构感，同样简洁。*',
          '**Yi-1.5 34B** — "雨声敲打遮阳棚，有节拍器数着最后几个没人想记得的夜晚的规律。里面，荧光灯把它冷冷的算法打在地板砖上——每一道污渍，每一道划痕，每一年这地方与时间败仗的痕迹。我在近端找了张吧台凳坐下，像一个已经与某件事达成和解的人。" — *首句即上隐喻；句式有节奏变化；意象密度更高。Yi-1.5的诗歌基因在散文中一样显现。*',
        ],
        columns: ['模型', '典型开场方式', '典型描述模式'],
        rows: [
          { '模型': 'Llama 3.3 70B', '典型开场方式': '行动先行，立即呈现感官细节', '典型描述模式': '具体、有实体感；避免抽象名词；有社会场景感' },
          { '模型': 'Qwen3 32B', '典型开场方式': '先描绘环境，再带入人物动作', '典型描述模式': '简洁；注重社会氛围细节；略带结构感' },
          { '模型': 'Yi-1.5 34B', '典型开场方式': '首句即用比喻或明喻', '典型描述模式': '抽象意象；节奏有变化；密度较高；偶有华丽散文倾向' },
          { '模型': 'Command A+', '典型开场方式': '以人物声音或近对话式开场', '典型描述模式': '对话感强；人物个性鲜明；独立描写时略弱' },
          { '模型': 'Mistral Large', '典型开场方式': '场景铺垫段落；开场节奏较慢', '典型描述模式': '平稳克制；长篇中保持一致；偶有通用感' },
        ],
        callouts: [
          {
            type: 'note',
            text: '以上节选代表每款模型在多次运行中的典型倾向，并非精心挑选的亮点。Yi-1.5 34B的意象密集风格在三次运行中只出现了一次；另两次则更为直白。对同一条提示词运行2–3次，取最适合当前场景的那次，而不是止步于第一次输出。',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: '创意写作的温度与Top-P设置',
        content:
          '**创意写作所需的采样温度高于编程。** 大多数聊天界面默认的采样参数是为问答调整的，并非为散文设计——温度0.7、top-p 0.9在创意提示词上产出平淡、可预测的输出。',
        items: [
          '**散文基准：** 温度0.95、top-p 0.92、重复惩罚1.1。这是大多数小说、对话和世界构建创作的起点。从这里按任务类型调整。',
          '**紧凑对话：** 温度0.7–0.85、top-p 0.9。较低温度保持角色声音跨多轮交流的一致性；较高值会产出游离角色形象的插嘴。',
          '**意象化散文与诗歌：** 温度1.0–1.2、top-p 0.95。较高温度解锁让诗歌生效的非预期用词。',
          '**超现实或类型小说：** 温度1.1–1.3、top-p 0.95–0.98。推动模型产出不那么常见的意象和比喻组合。',
          '**情节驱动场景（动作、悬疑、转折）：** 温度0.85–0.95、top-p 0.9。比起新颖性更需要遵从指令方向。',
          '**重复惩罚1.1–1.15**是大多数创意创作的正确区间。较高值（1.2以上）让模型即使在风格上有意重复也回避重复词汇；较低值（1.0–1.05）会让模型在长场景中陷入循环。',
          '**min_p（0.05–0.1）：** 相对于top-p的更新替代方案，动态地将概率截断值缩放至最高token概率的相对比例。在创意提示词上比top-p 0.9更宽松，同时没有极高top-p值的语义混乱风险。2026年SillyTavern和KoboldCpp用户在界面暴露该参数时的推荐默认值；Ollama直接传递，Open WebUI 0.5+在高级设置中提供。',
          '**DRY重复惩罚（乘数0.8、基础1.75、允许长度2）：** 捕捉标准repeat_penalty遗漏的短语级重复。标准重复惩罚追踪单个token，DRY追踪n-gram序列——因此第一个场景中的陈词滥调在第四个场景中就会被抑制。适用于模型已经看过自己输出并开始从中取样的长会话创意创作。',
          '**2026年现代创意写作基准：** 温度0.95、min_p 0.05、DRY乘数0.8（基础1.75、允许长度2）。如果你的前端不提供min_p或DRY，top-p 0.92仍然效果良好——这些是对经典设置的渐进改进，不是必须替换的选项。',
          '关于这些参数为何重要以及如何相互作用的详细说明，请参阅[温度与Top-P设置](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在每款模型上用一个简短场景测试采样设置——每个设置运行三次，选出模型听起来最有生命力且不偏离提示词的温度。适用于Llama 3.3 70B的设置不会完美移植到Mistral Large或Yi-1.5；按模型分别校准。',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: '无审查模型：是什么以及何时有用',
        content:
          '**无审查不等于不道德。** 它意味着模型的指令调优安全层（RLHF拒绝机制）已被移除或绕过，模型遵从提示词而不拒绝或净化。作者仍是创作主体；工具不再妨碍创作。',
        items: [
          '**"无审查"在技术上意味着什么。** Hermes 3和Dolphin 3.0等模型是基础模型（Llama 3.3、Qwen3）的微调变体，其中对成熟、暴力或道德复杂提示词产生拒绝的后训练RLHF步骤已被遵从提示词的微调所替代。架构相同，基础权重相同，后训练不同。',
          '**它们在创意创作中何时有用。** 成熟小说（含性描写的文学小说、含暴力描写的犯罪小说、恐怖小说），历史真实写作（战争、暴行、殖民时代的残暴），道德复杂角色（否则模型会拒绝为有说服力的反派配音），以及指令调优版不愿参与的角色扮演场景。',
          '**它们的局限所在。** 它们遵从提示词——包括写得不好的提示词。指令调优版经常将模糊提示词软化为可发表的内容；无审查版给你的正是你所要求的，有时反而更差。作者的指令方向更加重要。',
          '**伦理边界。** "模型会写"并非对创作以真实人物为原型、描绘真实或可识别个人的非自愿场景，或在作者所在司法管辖区属于违法内容的许可。本地部署不改变法律；它只是改变了谁能看到草稿。',
          '**法律背景（2026年5月，简要非全面陈述）。** 欧盟AI法案及成员国法律（尤其是德国《刑法》§184/§184c）不论内容在何处生成均涵盖特定内容类别。美国猥亵法规范的是发表行为，不是生成行为。对于商业出版，产生草稿的模型无关紧要；被监管的是发表的作品。',
          '**更详细的说明**请参阅[创意写作的无审查本地LLM：伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics)。',
        ],
        callouts: [
          {
            type: 'note',
            text: '无审查是一种工作流选择，不是身份标签。许多作者在项目的主体部分使用指令调优版，仅在指令版拒绝的特定场景切换到无审查衍生版。在同一Ollama配置中安装两个模型是常见模式。',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: '创意写作前端',
        content:
          '**你用来写作的聊天界面和模型本身同样重要。** 2026年有三款前端在创意写作工作流中值得认真考虑；按工作流形态选择。',
        items: [
          '**Open WebUI** — 通用首选。类ChatGPT界面，一键切换模型，通过系统提示词支持角色卡，文档上传用于背景资料。适合以散文为主的创作，对话式界面与草稿流程匹配。',
          '**SillyTavern** — 角色扮演和对话首选。角色卡生态系统（Tavern v2规范），角色管理，世界构建用书本功能，群聊用于多角色场景。适合对话驱动的创作和长期角色或世界项目。与Command A+和无审查衍生版搭配良好。',
          '**Agnai和RisuAI** — SillyTavern的精简替代选项。功能集更轻量，首次运行更简便，定制化程度较低。当SillyTavern对你的工作流显得过于复杂时选择。',
          '**纯Ollama命令行加文本编辑器** — 最简配置。`ollama run llama3.3:70b`，通过终端将场景导入草稿文档。失去持久角色背景，但赢得写作专注度。',
          '关于角色扮演专注型前端的横向对比，请参阅[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '草稿和修改适合不同的前端。用SillyTavern生成（角色声音、场景创作），然后将聊天记录导出到纯文本编辑器进行修改。在聊天窗口内编辑会养成"让模型修改散文"而非作者主动修改的习惯——这是一个长期的写作能力风险。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '模型选择指南',
        content:
          '**五个问题，依次回答，帮大多数作者找到合适的选择。**',
        columns: ['我的情况', '推荐'],
        rows: [
          { '我的情况': '我有48 GB以上VRAM，想用一个模型包揽所有任务', '推荐': 'Llama 3.3 70B（指令版）+ Hermes 3（无审查版）同时挂在Ollama中' },
          { '我的情况': '我有24 GB显卡或32 GB内存Mac，想要一个靠谱的默认选择', '推荐': 'Qwen3 32B' },
          { '我的情况': '我在写长篇小说——长篇续写连贯性是首要需求', '推荐': 'Mistral Large（若本地硬件不够，可用欧洲服务器上的Mistral La Plateforme）' },
          { '我的情况': '我的作品以对话为主——角色声音要保持各自独立', '推荐': 'Command A+（或Llama 3.3 70B作为更轻量的替代）' },
          { '我的情况': '我写诗歌、格律诗或意象化散文', '推荐': 'Yi-1.5 34B' },
          { '我的情况': '指令版模型拒绝写我需要的场景', '推荐': 'Hermes 3（Llama 3.3基底）或Dolphin 3.0——保留指令版用于一般内容' },
          { '我的情况': '我想先从一款模型开始，之后再调整', '推荐': 'Qwen3 32B——覆盖消费级硬件上的大多数场景；当某类任务成为主要需求时再换专用模型' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24 GB显卡选Qwen3 32B作为默认；48 GB以上选Llama 3.3 70B；长篇小说选Mistral Large；对话选Command A+；诗歌选Yi-1.5；指令版拒绝的场景选Hermes/Dolphin。',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B是大多数作者的正确起点。当某种特定任务类型（长篇、对话、诗歌、成熟场景）成为瓶颈时，再切换到专用模型。在同一台机器上安装两个版本（指令版+无审查版）零成本——两者都可以在Ollama中共存，按场景切换。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '大多数作者过度纠结模型，而忽视提示词。一个附有角色备注、语音示例和明确POV的精良系统提示词，对输出的改善程度远超从Qwen3切换到Llama 70B。请参阅[角色提示词设计](/zh/prompt-engineering/persona-prompting)，了解持续提升创意输出的提示词结构。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '选用和使用本地模型进行创意写作的常见错误',
        items: [
          '**错误一：追逐基准榜上最大的模型。** 创意写作得分与通用基准榜单的相关性很低。Yi-1.5 34B在诗歌上胜过Llama 3.3 70B；Command A+在对话上胜过两者。按任务类型选，不按榜单排名选。',
          '**错误二：使用编程风格的采样设置。** 温度0.2–0.4产出平淡可预测的散文。创意写作需要0.8–1.1配合top-p 0.9–0.95。大多数聊天界面的默认设置是为问答调整的，不是为散文设计的。',
          '**错误三：默认使用指令版，遇到拒绝就放弃。** 指令版拒绝你明确框定为小说的场景；相同基础模型的无审查衍生版会写。在Ollama中安装两个版本是解决办法。',
          '**错误四：系统提示词过于单薄。** "你是一个有帮助的助手"是创意写作最糟糕的提示词。一个附有角色备注、语音示例、POV、时态和基调的系统提示词，对输出质量的改善远超任何模型切换。搭配[负向提示词](/zh/prompt-engineering/negative-prompting)来指定不该做什么。',
          '**错误五：在聊天窗口内修改。** 在聊天中生成没问题；在聊天中修改会培养"让模型修改散文"而非自己修改的习惯。将草稿导出到文本编辑器进行修改；当模型不介入循环时，作者的声音会更强。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '创意写作AI的最大技能风险是外包修改环节。生成是模型发挥作用的机械性工作；修改才是让散文成为你自己作品的环节。让模型修改的作者很快就会失去自己的声音——即使他们指不出具体是哪一行改变了。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Hugging Face上的Llama 3.3、Qwen3、Mistral Large、Command A+、Yi-1.5模型卡](https://huggingface.co/) — 官方模型文档和许可证。',
          '[Hermes 3（NousResearch）GitHub及模型卡](https://huggingface.co/NousResearch) — 基于Llama 3.3的无审查微调版。',
          '[Dolphin 3.0（Cognitive Computations）模型卡](https://huggingface.co/cognitivecomputations) — 多基础模型的无审查微调版。',
          '[Ollama模型库](https://ollama.com/library) — 可用模型、量化选项、上文引用的工具调用支持标志。',
          '[SillyTavern文档](https://docs.sillytavern.app/) — 角色卡规范、角色系统、群聊功能。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '2026年最适合小说写作的本地LLM是哪款？',
            a: '硬件允许时（Q4_K_M约42 GB VRAM），Llama 3.3 70B是综合最佳选择。在24 GB显卡上，Qwen3 32B是更轻的默认选项，在散文为主的创作上质量差距小。长篇续写（长篇小说）方面，Mistral Large的128K上下文是差异化优势。按任务类型选：大多数作者从合适的专用模型中获益远超追求最大模型。',
          },
          {
            q: '什么是无审查本地LLM，什么时候应该使用？',
            a: '无审查模型是现有基础模型（通常是Llama 3.3或Qwen3）的微调版，其中对成熟或道德复杂提示词产生拒绝的RLHF安全层已被移除。模型遵从提示词而不拒绝。对成熟小说、冲突场景、历史真实写作，或指令调优版拒绝你框定为小说的场景时，使用无审查衍生版（Hermes 3、Dolphin 3.0）。作者仍是创作主体；模型只是不再妨碍。',
          },
          {
            q: '创意写作应该用什么温度？',
            a: '温度0.8–1.1是创意写作区间，配合top-p 0.9–0.95。紧凑对话用0.7–0.85；意象化散文和诗歌用1.0–1.2；超现实或类型创作用1.1–1.3。大多数聊天界面的默认值（通常是0.7配合top-p 0.9）为问答调整，在创意提示词上产出平淡散文。用三种设置在一个短场景上测试，选出模型听起来最有生命力且不偏离提示词的那个。',
          },
          {
            q: '本地创意写作模型的质量能比肩ChatGPT或Claude吗？',
            a: '对大多数提示词而言可以——接近到足以让隐私和价格优势占主导地位的程度。前沿云端模型在最难的创意任务上仍然领先（超过5万token的长篇连贯性、非常冷僻的文化典故、罕见语言）。对于典型的小说或角色扮演会话，在Llama 3.3 70B或Qwen3 32B上校准过采样设置的作者，不会看到与GPT-5或Claude之间持续的质量差距。真正输的是那些用"0.7温度、通用系统提示词"配置的模型。',
          },
          {
            q: '本地模型能写完整的长篇小说吗？',
            a: '它可以帮助起草一部。Mistral Large的128K上下文可以在内存中容纳5万字草稿；Llama 3.3 70B和Qwen3 32B的32K上下文需要分段起草。瓶颈不是模型能力——而是作者为模型提供用于保持连贯性的结构（大纲、人物设定、背景书）。没有这些结构，即使Mistral Large也会跑偏。有了这些，任何顶级选择都能支撑长篇小说级别的创作。',
          },
          {
            q: '无审查模型会生成违法内容吗？',
            a: '并不比指令调优版更多。两者都生成提示词要求的文本；无审查版更愿意参与指令调优安全层拒绝的成熟主题。法律责任由作者和发表方承担，不在于模型。欧盟AI法案、德国《刑法》§184/§184c和美国猥亵法不论生成方式如何都涵盖特定内容类别。本地部署不改变法律；它只改变谁能看到草稿。',
          },
          {
            q: 'SillyTavern只是用于成人角色扮演吗？',
            a: '不是。SillyTavern是一款以聊天为核心的前端，具备角色卡、角色管理和背景书功能——对任何对话密集或角色驱动的创作都有价值。许多作者将其用于非角色扮演的文学起草（多角色场景、跨长项目的声音一致性）。角色卡生态系统包含成人内容但不限于此；同一界面同样适用于文学小说、剧本和游戏叙事创作。',
          },
          {
            q: '本地创意写作与编程工作负载有何不同？',
            a: '采样设置和提示词结构。编程需要温度0.2–0.4、确定性输出、结构化（JSON、代码）输出和提示词中的明确约束。创意写作需要温度0.8–1.1、更自由的输出、散文形式和更丰富的系统提示词（角色声音、POV、基调、类型惯例）。同一款模型——Llama 3.3 70B两者都能用——根据这些设置产出截然不同的输出。在创意模型上使用编程风格提示词产出平淡输出；在编程模型上使用创意风格提示词产出幻觉代码。',
          },
          {
            q: '哪款本地模型的"AI语气"最少？',
            a: 'AI语气——套话措辞以及ChatGPT式过渡性总结——在较小的指令版模型中更为频繁。Llama 3.3 70B和Qwen3 32B的AI语气少于20B以下的模型。本测试集中Hermes 3的AI语气最少：RLHF拒绝模式训练也是许多公式化过渡语的来源，移除它同时去除了两者。Yi-1.5 34B较为特殊——罕见词汇更强，但偶有过度华丽倾向。减少AI语气效果最明显的手段是附有负面示例的系统提示词（"不要写套话或陈词滥调"），而非换模型。',
          },
          {
            q: '如何避免陈词滥调？',
            a: '附有负面示例的系统提示词是效果最强的手段——明确列出8–12个禁用短语。略微降低温度（0.85–0.95而非1.1）可减少模型使用套话语言的倾向。单独使用重复惩罚1.1无法捕捉这类问题——这些短语不是精确的token重复。DRY惩罚（乘数0.8、基础1.75）在跨场景的n-gram层面捕捉它们。人工修改环节是最终过滤器。关于持续消灭陈词滥调的提示词结构，请参阅[负向提示词](/zh/prompt-engineering/negative-prompting)。',
          },
          {
            q: '在中国大陆使用本地LLM创作小说，是否涉及《个人信息保护法》？',
            a: '本地运行的LLM不向任何外部服务传输文本或对话数据，因此《个人信息保护法》（PIPL）中关于个人信息处理者通知义务、第三方数据共享及境外传输的条款通常不适用于本地推理。需要注意的是：若创作内容描写真实可识别的自然人（包括使用真实姓名或高度一致的特征描述），并将其公开发表，则可能涉及名誉权和隐私权相关的民事责任。使用虚构角色进行纯文学创作时，本地生成通常不产生PIPL层面的合规问题。',
          },
          {
            q: '在中国大陆使用本地LLM生成成人创意内容，是否合法？',
            a: '根据《刑法》第363条，制作、复制、出版、贩卖或传播淫秽物品属于违法行为；第364条进一步规范了传播行为。本地生成且不对外发布的私人内容，与"传播"的构成要件有所不同，但具体情形仍需以实际案例和司法解释为准。描绘未成年人的性内容在任何情况下均属绝对禁止，不论生成手段或是否公开。《网络安全法》第12条同样禁止利用网络制作或传播违法信息。本地运行LLM意味着数据不上云，但生成内容的法律责任仍由作者承担。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端（2026）](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 上述模型搭配三款角色扮演专注型前端的横向对比。',
          '[本地LLM小说写作提示词：模板与技巧](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 适用于角色开发、对话、世界构建和修改工作流的即用型提示词模板。',
          '[创意写作的无审查本地LLM：伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 无审查衍生版何时属于合法创意工具、以及法律与伦理边界的完整解读。',
          '[温度与Top-P：控制AI创意输出](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 采样参数的提示词工程解读；比本文概述更深入。',
          '[负向提示词](/zh/prompt-engineering/negative-prompting) — 在提示词中指定不该做什么；创意写作系统提示词的力量倍增器。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 权威模型全景指南；在上述六款创意写作模型之外进一步探索时的参考。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Mejores LLM locales para escritura creativa 2026: ficción, diálogo y construcción de mundos',
    seoTitle: 'Mejores LLM locales para escritura creativa 2026: 6 modelos',
    intro:
      'La escritura creativa es la carga de trabajo en la que los LLM locales ganan por más que solo privacidad y precio. Los mejores modelos de peso abierto con ajuste de instrucciones y sin censura de 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B y los derivados sin censura Hermes/Dolphin — producen ficción, diálogo y construcción de mundos que se mantiene a la par de los modelos cloud de frontera en la mayoría de los prompts. Las diferencias están en la consistencia de voz, la disposición para manejar temas oscuros o para adultos y la naturalidad con que siguen instrucciones. Esta guía prueba seis modelos en más de 50 prompts creativos de ficción, diálogo, poesía y construcción de mundos, con los valores de temperatura y top-p que requiere cada uno.',
    metaDescription:
      '6 modelos locales para escritura creativa comparados: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 y variantes sin censura. Probados en 50+ prompts.',
    twitterDescription:
      '6 modelos locales para ficción, diálogo y construcción de mundos probados en 50+ prompts. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 y opciones sin censura. Veredicto por tipo de tarea.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Escritores de ficción, guionistas, diseñadores de juegos, constructores de mundos y entusiastas del roleplay que usan LLM locales para trabajo creativo donde la privacidad, la consistencia de voz y la disposición para manejar temas maduros importan más que las puntuaciones en benchmarks.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM escritura creativa',
    targetKeywords: [
      'mejor llm local escritura creativa',
      'llm local escritura ficcion',
      'llm local sin censura',
      'llama vs mistral escritura creativa',
      'mejor modelo local dialogo',
      'llm local construccion mundos',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B es la mejor opción local integral para escritura creativa en mayo de 2026 — sólida consistencia de voz, sigue instrucciones bien y maneja temas oscuros sin rechazar cuando el system prompt enmarca el trabajo como ficción. Qwen3 32B es la opción correcta para rigs de 24 GB: casi igual de fuerte en prosa, más ligero en hardware. Mistral Large gana en continuidad de largo formato (redacción de novelas) con su contexto nativo de 128K. Command A+ tiene la voz de diálogo más limpia. Yi-1.5 34B es la opción de nicho para poesía y prosa lírica. Para flujos de trabajo que los modelos con ajuste de instrucciones rechazan, Hermes 3 (base Llama 3.3) y Dolphin 3.0 son las opciones sin censura — misma arquitectura, capa de seguridad RLHF eliminada. Temperatura 0.8–1.1 y top-p 0.9–0.95 son el rango creativo; 0.7 y por debajo produce prosa plana. Sin censura no es igual a no ético — significa que el modelo sigue el prompt en lugar de rechazarlo; el escritor sigue siendo el autor.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué LLM local es el mejor para escritura creativa en 2026?',
        answer:
          'Llama 3.3 70B es la mejor opción local integral — fuerte en prosa, diálogo y construcción de mundos, con consistencia de voz que se mantiene en sesiones largas. En hardware de 24 GB donde un 70B no cabe, Qwen3 32B es la alternativa más ligera sin mucha pérdida de calidad. Mistral Large es la opción de contexto largo para redacción de novelas (128K de contexto de fábrica). Command A+ tiene la voz de diálogo más natural. Yi-1.5 34B es el especialista en poesía y prosa lírica. Para flujos de trabajo que chocan con la capa de seguridad del ajuste de instrucciones (ficción madura, escenas de conflicto, personajes moralmente complejos), los derivados Hermes 3 y Dolphin 3.0 usan los mismos modelos base con la capa de seguridad RLHF eliminada — siguen el prompt en lugar de rechazar. Temperatura 0.8–1.1 y top-p 0.9–0.95 son el rango creativo; los ajustes estilo código (0.2–0.4) producen prosa plana.',
        bullets: [
          'Mejor en general: Llama 3.3 70B — la mayor consistencia de voz, sigue instrucciones bien, maneja temas oscuros sin rechazo cuando se enmarca como ficción.',
          'Mejor rig de 24 GB: Qwen3 32B — casi tan fuerte como Llama 70B en prosa, mucho más ligero en hardware.',
          'Mejor largo formato: Mistral Large — 128K de contexto de fábrica; redacción de novela sin perder el hilo.',
          'Mejor diálogo: Command A+ — la voz conversacional más natural entre personajes.',
          'Mejor poesía / lírica: Yi-1.5 34B — opción de nicho para verso y prosa estilizada.',
          'Cuando instruct rechaza: Hermes 3 (base Llama) o Dolphin 3.0 — sin censura, misma arquitectura, siguen el prompt.',
          'Sampling: temperatura 0.8–1.1, top-p 0.9–0.95 para prosa; más bajo para diálogo ajustado, más alto para trabajo surrealista/de género.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Cómo probamos', anchor: '#how-we-tested' },
      { label: 'Comparativa directa', anchor: '#comparison' },
      { label: 'Veredictos por modelo', anchor: '#verdicts' },
      { label: 'Ejemplos de salidas', anchor: '#sample-outputs' },
      { label: 'Temperatura y Top-P para trabajo creativo', anchor: '#sampling' },
      { label: 'Modelos sin censura: qué son', anchor: '#uncensored' },
      { label: 'Frontends para trabajo creativo', anchor: '#frontends' },
      { label: 'Decisión: elige tu modelo', anchor: '#decision' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70B es el mejor modelo local integral para escritura creativa en mayo de 2026.** La mayor consistencia de voz del conjunto, sigue instrucciones bien, maneja temas oscuros sin rechazo cuando el system prompt enmarca el trabajo como ficción.',
          '**Qwen3 32B es la opción correcta para rigs de 24 GB.** Calidad de prosa casi igual a Llama 70B sin el coste de 48 GB+ de VRAM. El predeterminado para la mayoría de portátiles y ordenadores de sobremesa.',
          '**Mistral Large gana en continuidad de largo formato.** 128K de contexto de fábrica; redacción de novela sin perder el hilo ni la voz de los personajes.',
          '**Command A+ tiene la voz de diálogo más limpia.** Los ritmos conversacionales más naturales entre personajes; la opción cuando el diálogo es la parte estructural del trabajo.',
          '**Yi-1.5 34B es el especialista en poesía y prosa lírica.** Opción de nicho para verso, prosa estilizada y trabajo en formato corto donde el ritmo importa.',
          '**Los derivados sin censura (Hermes 3, Dolphin 3.0) son el movimiento correcto cuando los modelos con ajuste de instrucciones rechazan.** Mismos modelos base; la capa de seguridad RLHF está eliminada; el modelo sigue el prompt en lugar de declinar. La ficción madura, las escenas de conflicto y los personajes moralmente complejos se vuelven escribibles.',
          '**El sampling importa más de lo que la gente cree.** Temperatura 0.8–1.1 y top-p 0.9–0.95 son el rango creativo. Los ajustes estilo código (0.2–0.4) producen prosa plana y predecible. Por encima de 1.2 es territorio de género/surrealismo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Mejor en general:** Llama 3.3 70B con Q4_K_M, ~42 GB VRAM. Mayor consistencia de voz de este conjunto.',
          '**Mejor rig de 24 GB:** Qwen3 32B con Q4_K_M, ~20 GB VRAM. El predeterminado para la mayoría de usuarios.',
          '**Mejor largo formato:** Mistral Large con Q4_K_M, ~75 GB VRAM total (pesado). 128K de contexto de fábrica.',
          '**Mejor diálogo:** Command A+ con Q4_K_M, ~62 GB VRAM. La mejor diferenciación de voces de personajes.',
          '**Mejor poesía:** Yi-1.5 34B con Q4_K_M, ~21 GB VRAM. Especialista en prosa lírica.',
          '**Opciones sin censura:** Hermes 3 (base Llama 3.3, ~42 GB) y Dolphin 3.0 (múltiples tamaños base, 13–42 GB).',
          '**Sampling predeterminado para prosa:** temperatura 0.95, top-p 0.92, repeat penalty 1.1. Ajustar según el tipo de tarea.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Cómo probamos: más de 50 prompts creativos en seis modelos',
        content:
          '**La prueba mantuvo constante el conjunto de prompts, los ajustes de sampling y el frontend; solo variaba el modelo.** Los mismos 50 prompts en tareas de ficción, diálogo, poesía y construcción de mundos; salidas calificadas con la misma rúbrica por tipo de tarea.',
        items: [
          '**Backend:** Ollama 0.7+ en macOS y Linux; mismos límites de contexto por modelo; cuantización Q4_K_M en los seis modelos (Q5_K_M para los modelos más pequeños de 32B–34B donde la VRAM lo permitía, sin diferencia medible en las puntuaciones de la rúbrica).',
          '**Frontend:** Open WebUI para la mayor parte de la prueba (trabajo en formato chat); SillyTavern para el subconjunto de diálogo intensivo y roleplay (coincide con el uso real de los escritores creativos).',
          '**Conjunto de prompts:** 50 prompts divididos en cuatro tipos de tareas — ficción (15: aperturas de cuentos cortos, continuaciones de escenas, pasajes descriptivos), diálogo (15: intercambios entre dos personajes, escenas grupales, diferenciación de voces), poesía (10: verso libre, formas estructuradas, prosa lírica), construcción de mundos (10: descripciones de escenarios, políticas de facciones, sistemas de magia). Cada prompt ejecutado 3 veces por modelo para capturar la varianza.',
          '**Sampling:** temperatura 0.95, top-p 0.92, repeat penalty 1.1 como base; ajustes por tarea anotados en los veredictos por modelo más abajo.',
          '**Rúbrica de calificación:** consistencia de voz (¿el personaje o el narrador suena igual en todos los párrafos?), fidelidad al prompt (¿el modelo siguió la dirección o inventó su propia escena?), calidad de prosa (ritmo, vocabulario, evitar clichés) y disposición (¿el modelo rechazó o sanitizó escenas que el prompt enmarcaba explícitamente como ficción?).',
          '**Restricción de honestidad:** puntuaciones reportadas como rangos relativos por tarea, no porcentajes absolutos inventados. "Mejor diálogo" significa primer lugar consistente en el subconjunto de diálogo en las 3 ejecuciones; "fuerte" significa top-3; "regular" significa que el modelo perdió frente a uno o más competidores en la rúbrica.',
          'Para las técnicas de prompting que mejoran la salida creativa en cualquier modelo, ver [temperatura y control de top-p](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) y [persona prompting](/es/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los benchmarks de escritura creativa son inherentemente subjetivos. La rúbrica anterior (consistencia de voz, fidelidad al prompt, calidad de prosa, disposición) es lo más cercano que pudimos lograr a una puntuación repetible, pero dos lectores calificando las mismas salidas estarán en desacuerdo sobre la calidad de prosa más a menudo de lo que concordarán. Trata los veredictos como hipótesis iniciales para probar en tu propio trabajo.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cara a cara: seis modelos locales en tareas de escritura creativa',
        content:
          '**Llama 3.3 70B lidera en el conjunto más amplio de tareas; los modelos más pequeños y especializados ganan una o dos categorías cada uno.** Elige por tipo de tarea, no por ranking general.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B es el modelo creativo integral más fuerte; Qwen3 32B es la alternativa más ligera; Mistral Large gana en largo formato; Command A+ gana en diálogo; Yi-1.5 gana en poesía; Hermes/Dolphin manejan escenas que los otros rechazan.',
          },
          {
            type: 'plain-terms',
            text: 'Ningún modelo es el mejor en todo. Llama 3.3 70B es el predeterminado seguro si tienes el hardware. Qwen3 32B es la elección inteligente en una GPU de 24 GB. Elige un especialista (Mistral para novelas, Command A+ para diálogo, Yi-1.5 para poesía) cuando un tipo de tarea sea la parte estructural del trabajo. Elige un derivado sin censura cuando el modelo con ajuste de instrucciones rechace escenas que necesitas escribir.',
          },
        ],
        columns: ['Modelo', 'Tamaño', 'VRAM (Q4_K_M)', 'Ficción', 'Diálogo', 'Poesía', 'Construcción de mundos', 'Mejor para'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B', 'Tamaño': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Ficción': 'Mejor', 'Diálogo': 'Fuerte', 'Poesía': 'Fuerte', 'Construcción de mundos': 'Mejor', 'Mejor para': 'Mejor en general; predeterminado si el hardware lo permite' },
          { 'Modelo': 'Qwen3 32B', 'Tamaño': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Ficción': 'Fuerte', 'Diálogo': 'Fuerte', 'Poesía': 'Regular', 'Construcción de mundos': 'Fuerte', 'Mejor para': 'Predeterminado en rig de 24 GB; pequeña diferencia vs Llama 70B' },
          { 'Modelo': 'Mistral Large', 'Tamaño': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Ficción': 'Fuerte (largo formato)', 'Diálogo': 'Fuerte', 'Poesía': 'Regular', 'Construcción de mundos': 'Fuerte', 'Mejor para': 'Continuidad de largo formato, contexto 128K' },
          { 'Modelo': 'Command A+', 'Tamaño': 'No revelado', 'VRAM (Q4_K_M)': '~62 GB', 'Ficción': 'Fuerte', 'Diálogo': 'Mejor', 'Poesía': 'Regular', 'Construcción de mundos': 'Fuerte', 'Mejor para': 'Trabajo con diálogo intensivo, escenas grupales' },
          { 'Modelo': 'Yi-1.5 34B', 'Tamaño': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Ficción': 'Regular', 'Diálogo': 'Regular', 'Poesía': 'Mejor', 'Construcción de mundos': 'Regular', 'Mejor para': 'Poesía, prosa lírica, trabajo estilizado' },
          { 'Modelo': 'Hermes 3 / Dolphin 3.0', 'Tamaño': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Ficción': 'Igual que el base', 'Diálogo': 'Igual que el base', 'Poesía': 'Igual que el base', 'Construcción de mundos': 'Igual que el base', 'Mejor para': 'Escenas que los modelos con ajuste de instrucciones rechazan' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El setup de dos modelos es el patrón habitual: Llama 3.3 70B (o Qwen3 32B) como modelo principal, más el derivado Hermes 3 en el mismo Ollama para escenas que la versión instruct rechaza. Cambia entre ellos por escena; ambos pueden estar en `ollama list` al mismo tiempo sin conflicto.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Veredictos por modelo',
        items: [
          '**Llama 3.3 70B** — mejor en general. La mayor consistencia de voz del conjunto de prueba; los personajes mantienen los mismos patrones de habla en escenas largas. Sigue instrucciones bien — cuando el system prompt especifica POV, tono o convenciones de género, Llama 3.3 los respeta. Maneja temas oscuros (violencia, duelo, personajes moralmente grises) sin rechazar cuando el prompt enmarca el trabajo como ficción. Donde falla: los pasajes largos ocasionalmente derivan hacia una voz "literaria" genérica; los modelos pequeños de la misma familia (8B) pierden esta fortaleza.',
          '**Qwen3 32B** — mejor opción en rig de 24 GB. Consistencia de voz ligeramente inferior a Llama 3.3 70B pero la brecha es lo suficientemente pequeña como para que la mayoría de los escritores no la noten en trabajo con mucha prosa. El más fuerte de los modelos más pequeños en seguimiento de instrucciones. Donde falla: la poesía y la prosa estilizada se quedan notablemente atrás; cambia a Yi-1.5 para esas tareas.',
          '**Mistral Large** — mejor continuidad de largo formato. La ventana de contexto de 128K significa que un borrador de 50,000 palabras cabe sin truncamiento; el modelo mantiene detalles de personajes, hilos argumentales y reglas del mundo a lo largo de capítulos. Donde falla: la barra de hardware es la más alta de este conjunto (~75 GB en Q4_K_M); la velocidad por token se ralentiza en entradas largas. Usa Mistral La Plateforme en infraestructura de la UE si el hardware local es la restricción.',
          '**Command A+** — mejor diálogo. Voces de personajes distintas que se mantienen en los intercambios; las escenas grupales (3+ hablantes) se mantienen legibles sin el modo de fallo "todos suenan igual" común en otros modelos. Donde falla: los párrafos de prosa entre los ritmos de diálogo son competentes pero no líricos; para pasajes puramente descriptivos, Llama 3.3 gana.',
          '**Yi-1.5 34B** — mejor poesía y prosa lírica. Consciente del ritmo, cómodo con formas estructuradas (soneto, villanela, haiku), produce verso que aguanta mejor que los modelos generales más grandes. Donde falla: la ficción de largo formato es competente pero no es su punto fuerte; elige Llama 3.3 o Qwen3 para trabajo narrativo.',
          '**Hermes 3 (base Llama 3.3) y Dolphin 3.0** — derivados sin censura. Misma arquitectura y pesos base que Llama 3.3 70B; la capa de seguridad RLHF se elimina durante el ajuste fino. El modelo sigue el prompt en lugar de rechazar o sanitizar contenido maduro. La calidad en prompts no maduros es idéntica al modelo base; la diferencia solo es visible en prompts donde las versiones con ajuste de instrucciones rechazan. Úsalos cuando el trabajo lo requiera (ficción madura, escenas violentas, personajes moralmente complejos) y quédate con la base con ajuste de instrucciones en los demás casos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La consistencia de voz es la métrica que más escritores subestiman en la evaluación temprana de modelos. Un modelo que produce prosa brillante en un solo párrafo pero pierde los patrones de habla del personaje en el párrafo 5 es peor que un modelo que produce prosa competente con voz consistente en 20 párrafos. Prueba la continuidad en sesiones largas, no solo la calidad en una sola salida.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Ejemplos de salidas: tres modelos, un prompt',
        content:
          '**Prompt compartido:** "Abre una escena noir donde el detective entra en una cafetería empapada de lluvia a las 2 AM." Misma temperatura (0.95), mismo top-p (0.92), mismo repeat penalty (1.1) — solo cambia el modelo. Los fragmentos a continuación son representativos de la salida típica de cada modelo en esta clase de prompt en tres ejecuciones.',
        items: [
          '**Llama 3.3 70B** — "La campanilla sobre la puerta sonó dos veces y quedó en silencio. La lluvia me bajaba por el abrigo en regueros, formando charcos en el linóleo antes de que hubiera dado tres pasos. La chica del mostrador no levantó la vista. Dos camioneros en la cabina del fondo estudiaban su café. Nadie en un lugar como ese a las dos de la madrugada quería ser notado, y yo tampoco." — *Anclaje sensorial concreto, voz activa, sin palabras de relleno. La escena social se establece en tres frases.*',
          '**Qwen3 32B** — "Empujé la puerta y entré en una pared de humo de cigarrillo y grasa de plancha. El local estaba medio vacío y completamente silencioso — el tipo de silencio que se instala cuando la gente ha acordado, sin decirlo, dejarse en paz mutuamente. Un ventilador de techo giraba. La camarera rellenaba una taza al otro extremo del mostrador sin mirarme." — *Configuración observacional antes de la acción; atmósfera eficiente. Ligeramente más estructurado que Llama 3.3 pero igual de limpio.*',
          '**Yi-1.5 34B** — "La lluvia golpeaba el toldo con la regularidad de un metrónomo contando las últimas horas de una noche que nadie quería recordar. Dentro, los fluorescentes proyectaban su aritmética fría sobre el laminado — cada mancha, cada arañazo, cada año que el lugar llevaba perdiendo argumentos contra la entropía. Encontré un taburete en el extremo cercano y me senté como un hombre que ya había hecho las paces con algo." — *Metáfora desde la primera cláusula; variación rítmica de frases; imágenes más densas. El trasfondo poético de Yi-1.5 se muestra incluso en prosa.*',
        ],
        columns: ['Modelo', 'Apertura típica', 'Patrón descriptivo típico'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B', 'Apertura típica': 'Acción primero, detalle sensorial inmediato', 'Patrón descriptivo típico': 'Concreto y físico; evita sustantivos abstractos; socialmente anclado' },
          { 'Modelo': 'Qwen3 32B', 'Apertura típica': 'Observación del entorno antes de la acción del personaje', 'Patrón descriptivo típico': 'Eficiente; detalle social/atmosférico; ligera señal estructural' },
          { 'Modelo': 'Yi-1.5 34B', 'Apertura típica': 'Metáfora o símil desde la primera cláusula', 'Patrón descriptivo típico': 'Imágenes abstractas; variación rítmica; más denso; ocasionalmente exuberante' },
          { 'Modelo': 'Command A+', 'Apertura típica': 'Voz del personaje o apertura próxima al diálogo', 'Patrón descriptivo típico': 'Conversacional; voz propia y distinta; descripción en solitario más débil' },
          { 'Modelo': 'Mistral Large', 'Apertura típica': 'Párrafo de ambientación; arranque más lento', 'Patrón descriptivo típico': 'Parejo y controlado; consistente en pasajes largos; ligeramente genérico' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estos fragmentos ilustran las tendencias de cada modelo en múltiples ejecuciones, no son los mejores ejemplos seleccionados. La frase "perdiendo argumentos contra la entropía" de Yi-1.5 34B apareció en una de las tres ejecuciones; las otras dos fueron más directas. Ejecuta cualquier modelo 2–3 veces en el mismo prompt y toma el que mejor encaje con tu escena, no solo la primera salida.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatura y Top-P para trabajo creativo',
        content:
          '**La escritura creativa requiere temperaturas de sampling más altas que el código.** Los parámetros de sampling predeterminados que vienen con la mayoría de interfaces de chat están ajustados para responder preguntas, no para prosa — temperatura 0.7 y top-p 0.9 producen salidas planas y predecibles en prompts creativos.',
        items: [
          '**Base para prosa:** temperatura 0.95, top-p 0.92, repeat penalty 1.1. Este es el punto de partida para la mayoría de trabajos de ficción, diálogo y construcción de mundos. Ajusta por tarea desde aquí.',
          '**Diálogo ajustado:** temperatura 0.7–0.85, top-p 0.9. Las temperaturas más bajas mantienen la consistencia de voz de los personajes en los intercambios; los valores más altos producen interjecciones fuera de personaje.',
          '**Prosa lírica y poesía:** temperatura 1.0–1.2, top-p 0.95. Las temperaturas más altas desbloquean elecciones de palabras inesperadas que hacen funcionar el verso.',
          '**Ficción surrealista o de género:** temperatura 1.1–1.3, top-p 0.95–0.98. Empuja al modelo a producir combinaciones de imágenes y metáforas menos comunes.',
          '**Escenas impulsadas por la trama (acción, misterio, giros):** temperatura 0.85–0.95, top-p 0.9. Necesita más seguimiento de instrucciones que novedad.',
          '**Repeat penalty 1.1–1.15** es el rango correcto para la mayoría del trabajo creativo. Más alto (1.2+) hace que el modelo evite repetir palabras incluso cuando la repetición es estilísticamente intencional; más bajo (1.0–1.05) deja que el modelo caiga en bucles en escenas largas.',
          '**min_p (0.05–0.1):** Una alternativa más reciente al top-p que escala dinámicamente el umbral de probabilidad relativo a la probabilidad del token más alto. Más permisivo en prompts creativos que top-p 0.9 sin el riesgo de incoherencia de valores muy altos de top-p. El predeterminado recomendado para usuarios de SillyTavern y KoboldCpp en 2026 cuando la interfaz lo expone; Ollama lo pasa tal cual, y Open WebUI 0.5+ lo expone en Ajustes avanzados.',
          '**Penalización de repetición DRY (multiplicador 0.8, base 1.75, longitud permitida 2):** Captura repeticiones a nivel de frase que el repeat_penalty estándar no detecta. Donde repeat_penalty rastrea tokens individuales, DRY rastrea secuencias n-gram — así el cliché "un escalofrío le recorrió la espalda" en la escena 1 se suprime cuando volvería a aparecer en la escena 4. Útil para trabajo creativo en sesiones largas donde el modelo ha visto su propia salida y comienza a extraer de ella.',
          '**Base moderna de escritura creativa (2026):** temperatura 0.95, min_p 0.05, multiplicador DRY 0.8 (base 1.75, longitud permitida 2). Top-p 0.92 todavía funciona bien si tu frontend no expone min_p o DRY — estas son mejoras incrementales sobre los ajustes clásicos, no reemplazos obligatorios.',
          'Para un tratamiento más completo de por qué importan estos parámetros y cómo interactúan, ver [temperatura y control de top-p](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Prueba los ajustes de sampling en una sola escena corta por modelo — tres ejecuciones en cada ajuste, luego elige la temperatura donde el modelo suena más vivo sin perder el prompt. Los ajustes que funcionan en Llama 3.3 70B no se transfieren perfectamente a Mistral Large o Yi-1.5; calibra por modelo.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modelos sin censura: qué son y cuándo importan',
        content:
          '**Sin censura no significa no ético.** Significa que la capa de seguridad del ajuste de instrucciones del modelo (rechazos RLHF) ha sido eliminada o evitada, por lo que el modelo sigue el prompt en lugar de declinar o sanitizar. El escritor sigue siendo el autor; la herramienta deja de interponerse.',
        items: [
          '**Qué significa "sin censura" técnicamente.** Modelos como Hermes 3 y Dolphin 3.0 son variantes ajustadas de modelos base (Llama 3.3, Qwen3) donde el paso RLHF de post-entrenamiento que produce rechazos en prompts maduros, violentos o moralmente complejos ha sido reemplazado por un ajuste fino que sigue el prompt. Misma arquitectura, mismos pesos base, post-entrenamiento diferente.',
          '**Cuándo importan para el trabajo creativo.** Ficción madura (novelas literarias con escenas de sexo, ficción criminal con violencia gráfica, terror), escritura históricamente precisa (guerra, atrocidades, brutalidad de la época colonial), personajes moralmente complejos (el modelo de otro modo rechazaría dar voz a un antagonista convincente), y escenarios de roleplay con los que los modelos con ajuste de instrucciones no se comprometerán.',
          '**Donde fallan.** Siguen el prompt — incluidos los prompts mal escritos. Los modelos con ajuste de instrucciones a menudo suavizan los prompts vagos hacia algo publicable; los modelos sin censura te dan exactamente lo que pediste, lo que a veces es peor. La dirección del escritor importa más.',
          '**Límites éticos.** "El modelo lo escribirá" no es una licencia creativa para escribir contenido que apunte a personas reales, represente escenarios no consensuales que involucren a individuos reales o identificables, o que sea ilegal en la jurisdicción del escritor. El alojamiento local no cambia la ley; cambia quién puede ver el borrador.',
          '**Contexto legal (mayo de 2026, breve y no exhaustivo).** La Ley de IA de la UE y las leyes de los estados miembros (en especial el §184/§184c del StGB alemán) cubren categorías de contenido específicas independientemente de dónde se generó. La ley de obscenidad de los EE.UU. se aplica a la publicación, no a la generación. Para la publicación comercial, el modelo que produjo un borrador es irrelevante; lo que se regula es el artefacto publicado.',
          '**Para un tratamiento más extenso** de la ética de los modelos sin censura, el contexto legal y las mejores prácticas, ver [LLM locales sin censura para escritura creativa: ética, legalidad y mejores prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Sin censura es una elección de flujo de trabajo, no una identidad. Muchos escritores usan el modelo con ajuste de instrucciones para la mayor parte de un proyecto y cambian a un derivado sin censura para escenas específicas que la versión instruct rechaza. Tener dos instalaciones de modelos en el mismo Ollama es el patrón habitual.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends para trabajo creativo',
        content:
          '**La interfaz de chat en la que escribes importa tanto como el modelo.** Tres frontends son opciones creíbles para flujos de trabajo de escritura creativa en 2026; elige según la forma del flujo de trabajo.',
        items: [
          '**Open WebUI** — la opción de propósito general. Interfaz tipo ChatGPT, cambio de modelo con un clic, fichas de personajes mediante system prompts, carga de documentos para contexto. Mejor para trabajo con mucha prosa donde el formato de chat encaja con tu flujo de redacción.',
          '**SillyTavern** — la opción de roleplay y diálogo. Ecosistema de fichas de personajes (especificación Tavern v2), gestión de personas, lore books para construcción de mundos, chat grupal para escenas con múltiples personajes. Mejor para trabajo impulsado por diálogo y proyectos largos de personajes o mundos. Combina bien con Command A+ y los derivados sin censura.',
          '**Agnai y RisuAI** — alternativas más reducidas a SillyTavern. Conjuntos de funciones más ligeros, primera ejecución más sencilla, menos personalización. Elige cuando SillyTavern parezca demasiado para tu flujo de trabajo.',
          '**Ollama CLI simple más un editor de texto** — la opción mínima. `ollama run llama3.3:70b` y canaliza escenas por el terminal hacia tu documento de borrador. Pierde el contexto persistente del personaje pero gana en enfoque del escritor.',
          'Para la comparativa cara a cara de los frontends centrados en roleplay, ver [SillyTavern vs Agnai vs RisuAI: mejor frontend local de roleplay](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Redactar y editar requiere frontends diferentes. Usa SillyTavern para la generación (voz del personaje, trabajo de escenas), luego exporta el chat a un editor de texto plano para la revisión. Editar dentro de la ventana de chat fomenta el hábito de "pedirle al modelo que arregle la prosa" en lugar de una revisión impulsada por el escritor — un riesgo de habilidades a largo plazo.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisión: qué modelo para tu trabajo',
        content:
          '**Cinco preguntas, en orden, llevan a la mayoría de los escritores a la elección correcta.**',
        columns: ['Tu situación', 'Elección'],
        rows: [
          { 'Tu situación': 'Tengo 48 GB+ de VRAM y quiero un modelo para todo', 'Elección': 'Llama 3.3 70B (instruct) + Hermes 3 (sin censura) en el mismo Ollama' },
          { 'Tu situación': 'Tengo una GPU de 24 GB o un Mac de 32 GB y quiero un predeterminado sólido', 'Elección': 'Qwen3 32B' },
          { 'Tu situación': 'Estoy redactando una novela — la continuidad de largo formato es la prioridad', 'Elección': 'Mistral Large (o Mistral La Plateforme en infraestructura de la UE si el hardware local no alcanza)' },
          { 'Tu situación': 'Mi trabajo es muy intensivo en diálogo — las voces de los personajes deben mantenerse distintas', 'Elección': 'Command A+ (o Llama 3.3 70B como alternativa más ligera)' },
          { 'Tu situación': 'Escribo poesía, verso o prosa lírica', 'Elección': 'Yi-1.5 34B' },
          { 'Tu situación': 'El modelo instruct rechaza escenas que necesito escribir', 'Elección': 'Hermes 3 (base Llama 3.3) o Dolphin 3.0 — mantén la versión instruct instalada para trabajo no maduro' },
          { 'Tu situación': 'Quiero empezar con un modelo e iterar', 'Elección': 'Qwen3 32B — cubre la mayoría de flujos de trabajo en hardware de consumo; cambia cuando un tipo de tarea se convierta en la parte esencial' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige Qwen3 32B como predeterminado si tienes una GPU de 24 GB; Llama 3.3 70B si tienes 48 GB+; Mistral Large para trabajo de longitud de novela; Command A+ para diálogo; Yi-1.5 para poesía; Hermes/Dolphin para escenas que los modelos instruct rechazan.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B es el modelo de inicio correcto para la mayoría de escritores. Muévete a uno de los especialistas cuando un tipo de tarea específico (largo formato, diálogo, poesía, escenas maduras) se convierta en el cuello de botella. Tener dos instalaciones (instruct + sin censura) en la misma máquina no cuesta nada — ambas pueden estar en Ollama y cambias por escena.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La mayoría de escritores piensan demasiado en el modelo y no suficiente en el prompt. Un system prompt bien elaborado con notas de personaje, muestras de voz y POV explícito hace más por la calidad de salida que cambiar de Qwen3 a Llama 70B. Ver [persona prompting](/es/prompt-engineering/persona-prompting) para la estructura de prompt que mejora consistentemente la salida creativa.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir y usar modelos locales para escritura creativa',
        items: [
          '**Error 1: perseguir el modelo más grande en los benchmarks.** Las puntuaciones de escritura creativa correlacionan mal con los rankings de benchmarks generales. Yi-1.5 34B supera a Llama 3.3 70B en poesía; Command A+ supera a ambos en diálogo. Elige por tipo de tarea, no por rango en el ranking.',
          '**Error 2: usar ajustes de sampling estilo código.** Temperatura 0.2–0.4 produce prosa plana y predecible. La escritura creativa requiere 0.8–1.1 con top-p 0.9–0.95. Los ajustes predeterminados de la mayoría de interfaces de chat están ajustados para preguntas y respuestas, no para prosa.',
          '**Error 3: quedarse con el modelo instruct y rendirse cuando rechaza.** La versión instruct rechaza escenas que has enmarcado explícitamente como ficción; el derivado sin censura del mismo modelo base las escribe. Dos instalaciones en Ollama es la solución.',
          '**Error 4: system prompts débiles.** "Eres un asistente útil" es el peor prompt posible para trabajo creativo. Un system prompt con notas de personaje, muestras de voz, POV, tiempo verbal y tono hace más por la calidad de salida que cualquier cambio de modelo. Combina con [negative prompting](/es/prompt-engineering/negative-prompting) para especificar qué NO hacer (sin exposición, sin prosa exuberante, sin "ella sintió").',
          '**Error 5: editar dentro de la ventana de chat.** Generar en el chat está bien; editar en el chat entrena el hábito de "pedirle al modelo que arregle la prosa" en lugar de revisarla tú mismo. Exporta el borrador a un editor de texto para la revisión; la voz del escritor se fortalece cuando el modelo no está en el bucle.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El mayor riesgo de habilidades con la IA creativa es externalizar la revisión. La generación es el trabajo mecánico que se beneficia del modelo; la revisión es la parte que hace que la prosa sea tuya. Los escritores que dejan que el modelo revise pierden voz rápidamente — incluso cuando no pueden señalar qué línea cambió.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Fichas de modelos de Hugging Face para Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5](https://huggingface.co/) — documentación oficial de modelos y licencias.',
          '[Hermes 3 (NousResearch) GitHub y ficha de modelo](https://huggingface.co/NousResearch) — ajustes finos sin censura basados en Llama 3.3.',
          '[Fichas de modelos Dolphin 3.0 (Cognitive Computations)](https://huggingface.co/cognitivecomputations) — ajustes finos sin censura en múltiples modelos base.',
          '[Biblioteca de modelos Ollama](https://ollama.com/library) — modelos disponibles, opciones de cuantización, indicadores de compatibilidad con llamadas a herramientas mencionados anteriormente.',
          '[Documentación de SillyTavern](https://docs.sillytavern.app/) — especificación de fichas de personajes, sistema de personas, funciones de chat grupal.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué LLM local es el mejor para escritura de ficción en 2026?',
            a: 'Llama 3.3 70B es la mejor opción integral cuando el hardware lo permite (~42 GB VRAM en Q4_K_M). En rigs de 24 GB, Qwen3 32B es el predeterminado más ligero con una pequeña brecha de calidad en trabajo con mucha prosa. Para continuidad de largo formato (novelas), el contexto de 128K de Mistral Large es el diferenciador. Elige por tipo de tarea: la mayoría de escritores se benefician más del especialista correcto que persiguiendo el modelo más grande.',
          },
          {
            q: '¿Qué es un LLM local sin censura y cuándo debo usarlo?',
            a: 'Un modelo sin censura es un ajuste fino de un modelo base existente (normalmente Llama 3.3 o Qwen3) donde se ha eliminado la capa de seguridad RLHF que produce rechazos en prompts maduros o moralmente complejos. El modelo sigue el prompt en lugar de declinar. Usa derivados sin censura (Hermes 3, Dolphin 3.0) para ficción madura, escenas de conflicto, escritura históricamente precisa, o cualquier flujo de trabajo donde el modelo con ajuste de instrucciones rechace escenas que has enmarcado como ficción. El escritor sigue siendo el autor; el modelo simplemente deja de interponerse.',
          },
          {
            q: '¿Qué temperatura debo usar para escritura creativa?',
            a: 'Temperatura 0.8–1.1 es el rango de escritura creativa, junto con top-p 0.9–0.95. El diálogo ajustado requiere 0.7–0.85; la prosa lírica y la poesía requieren 1.0–1.2; la ficción surrealista o de género requiere 1.1–1.3. Los predeterminados de la mayoría de interfaces de chat (a menudo 0.7 con top-p 0.9) están ajustados para preguntas y respuestas y producen prosa plana en prompts creativos. Prueba en una escena corta con 3 ajustes, elige el que hace que el modelo suene más vivo sin perder el prompt.',
          },
          {
            q: '¿Son los modelos locales para escritura creativa tan buenos como ChatGPT o Claude?',
            a: 'Para la mayoría de prompts, sí — lo suficientemente cerca como para que las ventajas de privacidad y coste dominen. Los modelos cloud de frontera todavía lideran en las tareas creativas más difíciles (coherencia de largo formato más allá de 50K tokens, referencias culturales muy oscuras, idiomas raros). Para una sesión típica de ficción o roleplay, un escritor que haya calibrado los ajustes de sampling en Llama 3.3 70B o Qwen3 32B no verá brechas de calidad consistentes frente a GPT-5 o Claude. Los modelos que pierden son los que reciben el tratamiento de "temperatura 0.7, system prompt genérico" — eso pierde frente a cualquier modelo cloud.',
          },
          {
            q: '¿Puede un modelo local escribir una novela completa?',
            a: 'Puede ayudar a redactar una. Mistral Large con 128K de contexto puede mantener un borrador de 50,000 palabras en memoria; Llama 3.3 70B y Qwen3 32B con 32K de contexto necesitan redacción sección por sección. El cuello de botella no es la capacidad del modelo — es la estructura del escritor (esquema, biblia de personajes, lore book) que el modelo usa para mantener la continuidad. Sin ellas, incluso Mistral Large se desvía. Con ellas, cualquiera de los mejores modelos aguanta para trabajo de longitud de novela.',
          },
          {
            q: '¿Los modelos sin censura producen contenido ilegal?',
            a: 'No más que los modelos con ajuste de instrucciones. Ambos producen el texto que el prompt pide; los modelos sin censura están más dispuestos a participar en temas maduros que la capa de seguridad del ajuste de instrucciones rechaza. La responsabilidad legal recae en el escritor y la publicación, no en el modelo. La Ley de IA de la UE, el §184/§184c del StGB alemán y la ley de obscenidad de los EE.UU. cubren categorías de contenido específicas independientemente del método de generación. El alojamiento local no cambia la ley; cambia quién tiene visibilidad sobre el borrador.',
          },
          {
            q: '¿SillyTavern es solo para roleplay adulto?',
            a: 'No. SillyTavern es un frontend centrado en el chat con fichas de personajes, gestión de personas y lore books — útil para cualquier trabajo intensivo en diálogo o impulsado por personajes. Muchos escritores lo usan para redacción de ficción sin roleplay (escenas con múltiples personajes, consistencia de voz en proyectos largos). El ecosistema de fichas de personajes incluye contenido para adultos pero no se limita a él; la misma interfaz funciona para ficción literaria, guiones y trabajo de narrativa de juegos.',
          },
          {
            q: '¿En qué se diferencia la escritura creativa local de las cargas de trabajo de código?',
            a: 'En los ajustes de sampling y la estructura del prompt. El código requiere temperatura 0.2–0.4, salida determinista, salida estructurada (JSON, código) y restricciones explícitas en el prompt. La escritura creativa requiere temperatura 0.8–1.1, salida más libre, formato de prosa y system prompts más ricos (voz del personaje, POV, tono, convenciones de género). El mismo modelo — Llama 3.3 70B sirve para ambos — produce salidas radicalmente diferentes dependiendo de estos ajustes. Un prompt estilo código en un modelo creativo produce salida plana; un prompt estilo creativo en un modelo de código produce código alucinado.',
          },
          {
            q: '¿Qué modelo local tiene menos "señales de IA"?',
            a: 'Las señales de IA — frases como "un escalofrío le recorrió la espalda", "tapiz", "profundizar", "navegar" y los resúmenes de transición estilo ChatGPT — son más frecuentes en los modelos instruct más pequeños. Llama 3.3 70B y Qwen3 32B tienen menos señales que los modelos por debajo de 20B. Hermes 3 tiene las menos de este conjunto: el entrenamiento de patrones de rechazo RLHF también fue donde se introdujeron muchas transiciones formulaicas, y eliminarlo las elimina a ambas. El lever de mayor impacto para la reducción de señales es el system prompt con ejemplos negativos ("no escribas \'escalofrío\', \'tapiz\', o \'profundizar\'"), no el modelo.',
          },
          {
            q: '¿Cómo evito el cliché del "escalofrío que recorre la espalda"?',
            a: 'Un system prompt con ejemplos negativos es el lever de mayor impacto — lista explícitamente 8–12 frases prohibidas ("no escribas \'escalofrío\', \'tapiz\', \'profundizar\', \'magistralmente\', o \'ella sintió\'"). Baja la temperatura ligeramente (0.85–0.95 en lugar de 1.1) para reducir el alcance del modelo hacia el lenguaje de stock. El repeat penalty 1.1 solo NO capta esto — las frases no son repeticiones exactas de tokens. La penalización DRY (multiplicador 0.8, base 1.75) las capta a nivel n-gram entre escenas. Un pase de revisión manual es el filtro final. Ver [negative prompting](/es/prompt-engineering/negative-prompting) para la estructura de prompt que elimina consistentemente los clichés.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: mejor frontend local de roleplay (2026)](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparativa cara a cara de los tres frontends centrados en roleplay con los modelos anteriores.',
          '[Prompts de LLM local para escritores de ficción: plantillas y técnicas](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de prompts listas para copiar para desarrollo de personajes, diálogo, construcción de mundos y flujos de trabajo de revisión.',
          '[LLM locales sin censura para escritura creativa: ética, legalidad y mejores prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — tratamiento completo de cuándo los derivados sin censura son herramientas creativas legítimas y dónde están las líneas legales y éticas.',
          '[Temperatura y Top-P: controla la creatividad de la IA](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) — el lado de ingeniería de prompts de los parámetros de sampling; más profundo que el resumen de esta guía.',
          '[Negative prompting](/es/prompt-engineering/negative-prompting) — especificar qué NO hacer en un prompt; un multiplicador de fuerza para system prompts en trabajo creativo.',
          '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) — la guía autorizada del panorama de modelos; útil cuando quieres explorar más allá de los seis modelos de escritura creativa anteriores.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores LLM locales para escritura creativa 2026: ficción, diálogo y construcción de mundos',
      description: 'Comparativa de 6 modelos locales para escritura creativa: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 y variantes sin censura. Probados en más de 50 prompts creativos.',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-creative-writing-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Melhores LLMs locais para escrita criativa 2026: ficção, diálogo e construção de mundos',
    seoTitle: 'Melhores LLMs locais para escrita criativa 2026: 6 modelos',
    intro:
      'A escrita criativa é a carga de trabalho em que os LLMs locais vencem por mais do que apenas privacidade e preço. Os melhores modelos de peso aberto com ajuste de instruções e sem censura de 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B e os derivados sem censura Hermes/Dolphin — produzem ficção, diálogo e construção de mundos que se mantém à altura dos modelos de nuvem de fronteira na maioria dos prompts. As diferenças estão na consistência de voz, na disposição para lidar com temas sombrios ou adultos e na naturalidade com que seguem instruções. Este guia testa seis modelos em mais de 50 prompts criativos de ficção, diálogo, poesia e construção de mundos, com os valores de temperatura e top-p que cada um exige.',
    metaDescription:
      '6 modelos locais para escrita criativa comparados: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 e variantes sem censura. Testados em mais de 50 prompts.',
    twitterDescription:
      '6 modelos locais para ficção, diálogo e construção de mundos testados em mais de 50 prompts. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 e opções sem censura. Veredito por tipo de tarefa.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Escritores de ficção, roteiristas, designers de jogos, construtores de mundos e entusiastas de roleplay que usam LLMs locais para trabalho criativo onde a privacidade, a consistência de voz e a disposição para lidar com temas maduros importam mais do que pontuações de benchmark.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM escrita criativa',
    targetKeywords: [
      'melhor llm local escrita criativa',
      'llm local escrita ficcao',
      'llm local sem censura',
      'llama vs mistral escrita criativa',
      'melhor modelo local dialogo',
      'llm local construcao mundos',
    ],
    leadAnswerBlock:
      '**O Llama 3.3 70B é a melhor opção local completa para escrita criativa em maio de 2026 — sólida consistência de voz, segue instruções bem e lida com temas sombrios sem recusar quando o system prompt enquadra o trabalho como ficção. O Qwen3 32B é a escolha certa para rigs de 24 GB: quase tão forte em prosa, mais leve em hardware. O Mistral Large vence em continuidade de formato longo (escrita de romances) com seu contexto nativo de 128K. O Command A+ tem a voz de diálogo mais limpa. O Yi-1.5 34B é a opção de nicho para poesia e prosa lírica. Para fluxos de trabalho que os modelos com ajuste de instruções recusam, o Hermes 3 (base Llama 3.3) e o Dolphin 3.0 são as opções sem censura — mesma arquitetura, camada de segurança RLHF removida. Temperatura 0.8–1.1 e top-p 0.9–0.95 são a faixa criativa; 0.7 e abaixo produz prosa plana. Sem censura não é igual a antiético — significa que o modelo segue o prompt em vez de recusá-lo; o escritor continua sendo o autor.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual LLM local é o melhor para escrita criativa em 2026?',
        answer:
          'O Llama 3.3 70B é a melhor opção local completa — forte em prosa, diálogo e construção de mundos, com consistência de voz que se mantém em sessões longas. Em hardware de 24 GB onde um 70B não cabe, o Qwen3 32B é a alternativa mais leve sem muita perda de qualidade. O Mistral Large é a opção de contexto longo para escrita de romances (128K de contexto de fábrica). O Command A+ tem a voz de diálogo mais natural. O Yi-1.5 34B é o especialista em poesia e prosa lírica. Para fluxos de trabalho que esbarram na camada de segurança do ajuste de instruções (ficção madura, cenas de conflito, personagens moralmente complexos), os derivados Hermes 3 e Dolphin 3.0 usam os mesmos modelos base com a camada de segurança RLHF removida — eles seguem o prompt em vez de recusar. Temperatura 0.8–1.1 e top-p 0.9–0.95 são a faixa criativa; ajustes estilo código (0.2–0.4) produzem prosa plana.',
        bullets: [
          'Melhor no geral: Llama 3.3 70B — a maior consistência de voz, segue instruções bem, lida com temas sombrios sem recusa quando enquadrado como ficção.',
          'Melhor rig de 24 GB: Qwen3 32B — quase tão forte quanto o Llama 70B em prosa, muito mais leve em hardware.',
          'Melhor formato longo: Mistral Large — 128K de contexto de fábrica; escrita de romance sem perder o fio.',
          'Melhor diálogo: Command A+ — a voz conversacional mais natural entre personagens.',
          'Melhor poesia / lírica: Yi-1.5 34B — opção de nicho para verso e prosa estilizada.',
          'Quando o instruct recusa: Hermes 3 (base Llama) ou Dolphin 3.0 — sem censura, mesma arquitetura, seguem o prompt.',
          'Sampling: temperatura 0.8–1.1, top-p 0.9–0.95 para prosa; mais baixo para diálogo ajustado, mais alto para trabalho surreal/de gênero.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Como testamos', anchor: '#how-we-tested' },
      { label: 'Comparação direta', anchor: '#comparison' },
      { label: 'Vereditos por modelo', anchor: '#verdicts' },
      { label: 'Exemplos de saídas', anchor: '#sample-outputs' },
      { label: 'Temperatura e Top-P para trabalho criativo', anchor: '#sampling' },
      { label: 'Modelos sem censura: o que são', anchor: '#uncensored' },
      { label: 'Frontends para trabalho criativo', anchor: '#frontends' },
      { label: 'Decisão: escolha seu modelo', anchor: '#decision' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Llama 3.3 70B é o melhor modelo local completo para escrita criativa em maio de 2026.** A maior consistência de voz do conjunto, segue instruções bem, lida com temas sombrios sem recusa quando o system prompt enquadra o trabalho como ficção.',
          '**O Qwen3 32B é a escolha certa para rigs de 24 GB.** Qualidade de prosa quase igual ao Llama 70B sem o custo de 48 GB+ de VRAM. O padrão para a maioria dos laptops e desktops.',
          '**O Mistral Large vence em continuidade de formato longo.** 128K de contexto de fábrica; escrita de romance sem perder o fio nem a voz dos personagens.',
          '**O Command A+ tem a voz de diálogo mais limpa.** Os ritmos conversacionais mais naturais entre personagens; a opção quando o diálogo é a parte estrutural do trabalho.',
          '**O Yi-1.5 34B é o especialista em poesia e prosa lírica.** Opção de nicho para verso, prosa estilizada e trabalho em formato curto onde o ritmo importa.',
          '**Os derivados sem censura (Hermes 3, Dolphin 3.0) são o movimento certo quando os modelos com ajuste de instruções recusam.** Mesmos modelos base; a camada de segurança RLHF é removida; o modelo segue o prompt em vez de declinar. A ficção madura, as cenas de conflito e os personagens moralmente complexos se tornam escrevíveis.',
          '**O sampling importa mais do que as pessoas pensam.** Temperatura 0.8–1.1 e top-p 0.9–0.95 são a faixa criativa. Os ajustes estilo código (0.2–0.4) produzem prosa plana e previsível. Acima de 1.2 é território de gênero/surrealismo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Melhor no geral:** Llama 3.3 70B com Q4_K_M, ~42 GB VRAM. A maior consistência de voz deste conjunto.',
          '**Melhor rig de 24 GB:** Qwen3 32B com Q4_K_M, ~20 GB VRAM. O padrão para a maioria dos usuários.',
          '**Melhor formato longo:** Mistral Large com Q4_K_M, ~75 GB de VRAM total (pesado). 128K de contexto de fábrica.',
          '**Melhor diálogo:** Command A+ com Q4_K_M, ~62 GB VRAM. A melhor diferenciação de vozes de personagens.',
          '**Melhor poesia:** Yi-1.5 34B com Q4_K_M, ~21 GB VRAM. Especialista em prosa lírica.',
          '**Opções sem censura:** Hermes 3 (base Llama 3.3, ~42 GB) e Dolphin 3.0 (múltiplos tamanhos base, 13–42 GB).',
          '**Sampling padrão para prosa:** temperatura 0.95, top-p 0.92, repeat penalty 1.1. Ajustar conforme o tipo de tarefa.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Como testamos: mais de 50 prompts criativos em seis modelos',
        content:
          '**O teste manteve constante o conjunto de prompts, os ajustes de sampling e o frontend; apenas o modelo variava.** Os mesmos 50 prompts em tarefas de ficção, diálogo, poesia e construção de mundos; saídas avaliadas pela mesma rubrica por tipo de tarefa.',
        items: [
          '**Backend:** Ollama 0.7+ no macOS e Linux; mesmos limites de contexto por modelo; quantização Q4_K_M nos seis modelos (Q5_K_M para os modelos menores de 32B–34B onde a VRAM permitia, sem diferença mensurável nas pontuações da rubrica).',
          '**Frontend:** Open WebUI para a maior parte do teste (trabalho em formato chat); SillyTavern para o subconjunto de diálogo intensivo e roleplay (corresponde ao uso real dos escritores criativos).',
          '**Conjunto de prompts:** 50 prompts divididos em quatro tipos de tarefas — ficção (15: aberturas de contos, continuações de cenas, passagens descritivas), diálogo (15: trocas entre dois personagens, cenas em grupo, diferenciação de vozes), poesia (10: verso livre, formas estruturadas, prosa lírica), construção de mundos (10: descrições de cenários, políticas de facções, sistemas de magia). Cada prompt executado 3 vezes por modelo para capturar a variância.',
          '**Sampling:** temperatura 0.95, top-p 0.92, repeat penalty 1.1 como base; ajustes por tarefa anotados nos vereditos por modelo abaixo.',
          '**Rubrica de avaliação:** consistência de voz (o personagem ou o narrador soa igual em todos os parágrafos?), fidelidade ao prompt (o modelo seguiu a direção ou inventou sua própria cena?), qualidade de prosa (ritmo, vocabulário, evitar clichês) e disposição (o modelo recusou ou sanitizou cenas que o prompt enquadrava explicitamente como ficção?).',
          '**Restrição de honestidade:** pontuações reportadas como classificações relativas por tarefa, não percentuais absolutos inventados. "Melhor diálogo" significa primeiro lugar consistente no subconjunto de diálogo nas 3 execuções; "forte" significa top-3; "fraco" significa que o modelo perdeu para um ou mais concorrentes na rubrica.',
          'Para as técnicas de prompting que melhoram a saída criativa em qualquer modelo, ver [temperatura e controle de top-p](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) e [persona prompting](/pt/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Os benchmarks de escrita criativa são inerentemente subjetivos. A rubrica acima (consistência de voz, fidelidade ao prompt, qualidade de prosa, disposição) é o mais próximo que conseguimos de uma pontuação repetível, mas dois leitores avaliando as mesmas saídas vão discordar sobre a qualidade de prosa mais frequentemente do que vão concordar. Trate os vereditos como hipóteses iniciais para testar no seu próprio trabalho.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Frente a frente: seis modelos locais em tarefas de escrita criativa',
        content:
          '**O Llama 3.3 70B lidera no conjunto mais amplo de tarefas; os modelos menores e especializados vencem uma ou duas categorias cada um.** Escolha por tipo de tarefa, não por ranking geral.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Llama 3.3 70B é o modelo criativo completo mais forte; o Qwen3 32B é a alternativa mais leve; o Mistral Large vence em formato longo; o Command A+ vence em diálogo; o Yi-1.5 vence em poesia; o Hermes/Dolphin lidam com cenas que os outros recusam.',
          },
          {
            type: 'plain-terms',
            text: 'Nenhum modelo é o melhor em tudo. O Llama 3.3 70B é o padrão seguro se você tiver o hardware. O Qwen3 32B é a escolha inteligente em uma GPU de 24 GB. Escolha um especialista (Mistral para romances, Command A+ para diálogo, Yi-1.5 para poesia) quando um tipo de tarefa for a parte estrutural do trabalho. Escolha um derivado sem censura quando o modelo com ajuste de instruções recusar cenas que você precisa escrever.',
          },
        ],
        columns: ['Modelo', 'Tamanho', 'VRAM (Q4_K_M)', 'Ficção', 'Diálogo', 'Poesia', 'Construção de mundos', 'Melhor para'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B', 'Tamanho': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Ficção': 'Melhor', 'Diálogo': 'Forte', 'Poesia': 'Forte', 'Construção de mundos': 'Melhor', 'Melhor para': 'Melhor no geral; padrão se o hardware permitir' },
          { 'Modelo': 'Qwen3 32B', 'Tamanho': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Ficção': 'Forte', 'Diálogo': 'Forte', 'Poesia': 'Regular', 'Construção de mundos': 'Forte', 'Melhor para': 'Padrão em rig de 24 GB; pequena diferença vs Llama 70B' },
          { 'Modelo': 'Mistral Large', 'Tamanho': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Ficção': 'Forte (formato longo)', 'Diálogo': 'Forte', 'Poesia': 'Regular', 'Construção de mundos': 'Forte', 'Melhor para': 'Continuidade de formato longo, contexto 128K' },
          { 'Modelo': 'Command A+', 'Tamanho': 'Não divulgado', 'VRAM (Q4_K_M)': '~62 GB', 'Ficção': 'Forte', 'Diálogo': 'Melhor', 'Poesia': 'Regular', 'Construção de mundos': 'Forte', 'Melhor para': 'Trabalho com diálogo intensivo, cenas em grupo' },
          { 'Modelo': 'Yi-1.5 34B', 'Tamanho': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Ficção': 'Regular', 'Diálogo': 'Regular', 'Poesia': 'Melhor', 'Construção de mundos': 'Regular', 'Melhor para': 'Poesia, prosa lírica, trabalho estilizado' },
          { 'Modelo': 'Hermes 3 / Dolphin 3.0', 'Tamanho': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Ficção': 'Igual ao base', 'Diálogo': 'Igual ao base', 'Poesia': 'Igual ao base', 'Construção de mundos': 'Igual ao base', 'Melhor para': 'Cenas que os modelos com ajuste de instruções recusam' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O setup de dois modelos é o padrão habitual: Llama 3.3 70B (ou Qwen3 32B) como modelo principal, mais o derivado Hermes 3 no mesmo Ollama para cenas que a versão instruct recusa. Alterne entre eles por cena; ambos podem estar em `ollama list` ao mesmo tempo sem conflito.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Vereditos por modelo',
        items: [
          '**Llama 3.3 70B** — melhor no geral. A maior consistência de voz do conjunto de teste; os personagens mantêm os mesmos padrões de fala em cenas longas. Segue instruções bem — quando o system prompt especifica POV, tom ou convenções de gênero, o Llama 3.3 os respeita. Lida com temas sombrios (violência, luto, personagens moralmente cinzentos) sem recusar quando o prompt enquadra o trabalho como ficção. Onde falha: as passagens longas ocasionalmente derivam para uma voz "literária" genérica; os modelos pequenos da mesma família (8B) perdem essa força.',
          '**Qwen3 32B** — melhor opção em rig de 24 GB. Consistência de voz ligeiramente inferior ao Llama 3.3 70B, mas a diferença é pequena o suficiente para que a maioria dos escritores não a note em trabalho com muita prosa. O mais forte dos modelos menores em seguimento de instruções. Onde falha: a poesia e a prosa estilizada ficam notavelmente para trás; mude para o Yi-1.5 para essas tarefas.',
          '**Mistral Large** — melhor continuidade de formato longo. A janela de contexto de 128K significa que um rascunho de 50.000 palavras cabe sem truncamento; o modelo mantém detalhes de personagens, fios narrativos e regras do mundo ao longo de capítulos. Onde falha: a barra de hardware é a mais alta deste conjunto (~75 GB em Q4_K_M); a velocidade por token desacelera em entradas longas. Use o Mistral La Plateforme em infraestrutura da UE se o hardware local for a restrição.',
          '**Command A+** — melhor diálogo. Vozes de personagens distintas que se mantêm nas trocas; as cenas em grupo (3+ falantes) permanecem legíveis sem o modo de falha "todos soam igual" comum em outros modelos. Onde falha: os parágrafos de prosa entre os ritmos de diálogo são competentes, mas não líricos; para passagens puramente descritivas, o Llama 3.3 vence.',
          '**Yi-1.5 34B** — melhor poesia e prosa lírica. Consciente do ritmo, à vontade com formas estruturadas (soneto, vilanela, haicai), produz verso que se mantém melhor do que os modelos gerais maiores. Onde falha: a ficção de formato longo é competente, mas não é seu ponto forte; escolha o Llama 3.3 ou o Qwen3 para trabalho narrativo.',
          '**Hermes 3 (base Llama 3.3) e Dolphin 3.0** — derivados sem censura. Mesma arquitetura e pesos base que o Llama 3.3 70B; a camada de segurança RLHF é removida durante o ajuste fino. O modelo segue o prompt em vez de recusar ou sanitizar conteúdo maduro. A qualidade em prompts não maduros é idêntica ao modelo base; a diferença só é visível em prompts onde as versões com ajuste de instruções recusam. Use-os quando o trabalho exigir (ficção madura, cenas violentas, personagens moralmente complexos) e fique com a base com ajuste de instruções nos demais casos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A consistência de voz é a métrica que mais escritores subestimam na avaliação inicial de modelos. Um modelo que produz prosa brilhante em um único parágrafo, mas perde os padrões de fala do personagem no parágrafo 5 é pior que um modelo que produz prosa competente com voz consistente em 20 parágrafos. Teste a continuidade em sessões longas, não apenas a qualidade em uma única saída.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Exemplos de saídas: três modelos, um prompt',
        content:
          '**Prompt compartilhado:** "Abra uma cena noir onde o detetive entra em uma lanchonete encharcada de chuva às 2 da manhã." Mesma temperatura (0.95), mesmo top-p (0.92), mesmo repeat penalty (1.1) — apenas o modelo muda. Os trechos a seguir são representativos da saída típica de cada modelo nesta classe de prompt em três execuções.',
        items: [
          '**Llama 3.3 70B** — "O sininho sobre a porta tocou duas vezes e ficou em silêncio. A chuva escorria pelo meu casaco em fios, formando poças no linóleo antes que eu tivesse dado três passos. A moça do balcão não levantou os olhos. Dois caminhoneiros na mesa do fundo estudavam o café. Ninguém num lugar assim às duas da madrugada queria ser notado, e eu também não." — *Ancoragem sensorial concreta, voz ativa, sem palavras de enchimento. A cena social se estabelece em três frases.*',
          '**Qwen3 32B** — "Empurrei a porta e entrei numa parede de fumaça de cigarro e gordura de chapa. O local estava meio vazio e completamente silencioso — o tipo de silêncio que se instala quando as pessoas concordaram, sem dizer, em deixar umas às outras em paz. Um ventilador de teto girava. A garçonete reabastecia uma xícara na outra ponta do balcão sem olhar para mim." — *Configuração observacional antes da ação; atmosfera eficiente. Ligeiramente mais estruturado que o Llama 3.3, mas igualmente limpo.*',
          '**Yi-1.5 34B** — "A chuva batia no toldo com a regularidade de um metrônomo contando as últimas horas de uma noite que ninguém queria lembrar. Lá dentro, os fluorescentes lançavam sua aritmética fria sobre o laminado — cada mancha, cada arranhão, cada ano que o lugar vinha perdendo discussões contra a entropia. Encontrei um banco na extremidade próxima e me sentei como um homem que já havia feito as pazes com algo." — *Metáfora desde a primeira cláusula; variação rítmica das frases; imagens mais densas. O fundo poético do Yi-1.5 aparece até na prosa.*',
        ],
        columns: ['Modelo', 'Abertura típica', 'Padrão descritivo típico'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B', 'Abertura típica': 'Ação primeiro, detalhe sensorial imediato', 'Padrão descritivo típico': 'Concreto e físico; evita substantivos abstratos; socialmente ancorado' },
          { 'Modelo': 'Qwen3 32B', 'Abertura típica': 'Observação do ambiente antes da ação do personagem', 'Padrão descritivo típico': 'Eficiente; detalhe social/atmosférico; ligeiro sinal estrutural' },
          { 'Modelo': 'Yi-1.5 34B', 'Abertura típica': 'Metáfora ou símile desde a primeira cláusula', 'Padrão descritivo típico': 'Imagens abstratas; variação rítmica; mais denso; ocasionalmente exuberante' },
          { 'Modelo': 'Command A+', 'Abertura típica': 'Voz do personagem ou abertura próxima ao diálogo', 'Padrão descritivo típico': 'Conversacional; voz própria e distinta; descrição em solo mais fraca' },
          { 'Modelo': 'Mistral Large', 'Abertura típica': 'Parágrafo de ambientação; início mais lento', 'Padrão descritivo típico': 'Parelho e controlado; consistente em passagens longas; ligeiramente genérico' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estes trechos ilustram as tendências de cada modelo em múltiplas execuções, não são os melhores exemplos selecionados. A frase "perdendo discussões contra a entropia" do Yi-1.5 34B apareceu em uma das três execuções; as outras duas foram mais diretas. Execute qualquer modelo 2–3 vezes no mesmo prompt e pegue o que melhor encaixa na sua cena, não apenas a primeira saída.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatura e Top-P para trabalho criativo',
        content:
          '**A escrita criativa exige temperaturas de sampling mais altas que o código.** Os parâmetros de sampling padrão que vêm com a maioria das interfaces de chat são ajustados para responder perguntas, não para prosa — temperatura 0.7 e top-p 0.9 produzem saídas planas e previsíveis em prompts criativos.',
        items: [
          '**Base para prosa:** temperatura 0.95, top-p 0.92, repeat penalty 1.1. Este é o ponto de partida para a maioria dos trabalhos de ficção, diálogo e construção de mundos. Ajuste por tarefa a partir daqui.',
          '**Diálogo ajustado:** temperatura 0.7–0.85, top-p 0.9. As temperaturas mais baixas mantêm a consistência de voz dos personagens nas trocas; os valores mais altos produzem interjeições fora de personagem.',
          '**Prosa lírica e poesia:** temperatura 1.0–1.2, top-p 0.95. As temperaturas mais altas desbloqueiam escolhas de palavras inesperadas que fazem o verso funcionar.',
          '**Ficção surreal ou de gênero:** temperatura 1.1–1.3, top-p 0.95–0.98. Empurra o modelo a produzir combinações de imagens e metáforas menos comuns.',
          '**Cenas movidas pela trama (ação, mistério, reviravoltas):** temperatura 0.85–0.95, top-p 0.9. Precisa de mais seguimento de instruções que novidade.',
          '**Repeat penalty 1.1–1.15** é a faixa certa para a maioria do trabalho criativo. Mais alto (1.2+) faz o modelo evitar repetir palavras mesmo quando a repetição é estilisticamente intencional; mais baixo (1.0–1.05) deixa o modelo cair em loops em cenas longas.',
          '**min_p (0.05–0.1):** Uma alternativa mais recente ao top-p que escala dinamicamente o limiar de probabilidade relativo à probabilidade do token mais alto. Mais permissivo em prompts criativos que o top-p 0.9 sem o risco de incoerência de valores muito altos de top-p. O padrão recomendado para usuários de SillyTavern e KoboldCpp em 2026 quando a interface o expõe; o Ollama o repassa como está, e o Open WebUI 0.5+ o expõe em Configurações avançadas.',
          '**Penalização de repetição DRY (multiplicador 0.8, base 1.75, comprimento permitido 2):** Captura repetições no nível de frase que o repeat_penalty padrão não detecta. Onde o repeat_penalty rastreia tokens individuais, o DRY rastreia sequências n-gram — então o clichê "um arrepio percorreu sua espinha" na cena 1 é suprimido quando reapareceria na cena 4. Útil para trabalho criativo em sessões longas onde o modelo viu sua própria saída e começa a extrair dela.',
          '**Base moderna de escrita criativa (2026):** temperatura 0.95, min_p 0.05, multiplicador DRY 0.8 (base 1.75, comprimento permitido 2). O top-p 0.92 ainda funciona bem se o seu frontend não expõe min_p ou DRY — estas são melhorias incrementais sobre os ajustes clássicos, não substituições obrigatórias.',
          'Para um tratamento mais completo de por que esses parâmetros importam e como interagem, ver [temperatura e controle de top-p](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste os ajustes de sampling em uma única cena curta por modelo — três execuções em cada ajuste, depois escolha a temperatura onde o modelo soa mais vivo sem perder o prompt. Os ajustes que funcionam no Llama 3.3 70B não se transferem perfeitamente para o Mistral Large ou o Yi-1.5; calibre por modelo.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modelos sem censura: o que são e quando importam',
        content:
          '**Sem censura não significa antiético.** Significa que a camada de segurança do ajuste de instruções do modelo (recusas RLHF) foi removida ou contornada, então o modelo segue o prompt em vez de declinar ou sanitizar. O escritor continua sendo o autor; a ferramenta deixa de atrapalhar.',
        items: [
          '**O que "sem censura" significa tecnicamente.** Modelos como Hermes 3 e Dolphin 3.0 são variantes ajustadas de modelos base (Llama 3.3, Qwen3) onde o passo RLHF de pós-treinamento que produz recusas em prompts maduros, violentos ou moralmente complexos foi substituído por um ajuste fino que segue o prompt. Mesma arquitetura, mesmos pesos base, pós-treinamento diferente.',
          '**Quando importam para o trabalho criativo.** Ficção madura (romances literários com cenas de sexo, ficção criminal com violência gráfica, terror), escrita historicamente precisa (guerra, atrocidades, brutalidade da era colonial), personagens moralmente complexos (o modelo de outra forma recusaria dar voz a um antagonista convincente), e cenários de roleplay com os quais os modelos com ajuste de instruções não se comprometem.',
          '**Onde falham.** Eles seguem o prompt — incluindo prompts mal escritos. Os modelos com ajuste de instruções muitas vezes suavizam os prompts vagos em algo publicável; os modelos sem censura dão exatamente o que você pediu, o que às vezes é pior. A direção do escritor importa mais.',
          '**Limites éticos.** "O modelo vai escrever" não é uma licença criativa para escrever conteúdo que mire pessoas reais, retrate cenários não consensuais envolvendo indivíduos reais ou identificáveis, ou que seja ilegal na jurisdição do escritor. A hospedagem local não muda a lei; muda quem pode ver o rascunho.',
          '**Contexto legal (maio de 2026, breve e não exaustivo).** A Lei de IA da UE e as leis dos estados-membros (em especial o §184/§184c do StGB alemão) cobrem categorias de conteúdo específicas independentemente de onde foi gerado. A lei de obscenidade dos EUA se aplica à publicação, não à geração. Para a publicação comercial, o modelo que produziu um rascunho é irrelevante; o que se regula é o artefato publicado.',
          '**Para um tratamento mais extenso** da ética dos modelos sem censura, do contexto legal e das melhores práticas, ver [LLMs locais sem censura para escrita criativa: ética, legalidade e melhores práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Sem censura é uma escolha de fluxo de trabalho, não uma identidade. Muitos escritores usam o modelo com ajuste de instruções para a maior parte de um projeto e mudam para um derivado sem censura para cenas específicas que a versão instruct recusa. Ter duas instalações de modelos no mesmo Ollama é o padrão habitual.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends para trabalho criativo',
        content:
          '**A interface de chat em que você escreve importa tanto quanto o modelo.** Três frontends são opções credíveis para fluxos de trabalho de escrita criativa em 2026; escolha conforme o formato do fluxo de trabalho.',
        items: [
          '**Open WebUI** — a opção de uso geral. Interface tipo ChatGPT, troca de modelo com um clique, fichas de personagens via system prompts, upload de documentos para contexto. Melhor para trabalho com muita prosa onde o formato de chat encaixa no seu fluxo de redação.',
          '**SillyTavern** — a opção de roleplay e diálogo. Ecossistema de fichas de personagens (especificação Tavern v2), gestão de personas, lore books para construção de mundos, chat em grupo para cenas com múltiplos personagens. Melhor para trabalho movido por diálogo e projetos longos de personagens ou mundos. Combina bem com o Command A+ e os derivados sem censura.',
          '**Agnai e RisuAI** — alternativas mais reduzidas ao SillyTavern. Conjuntos de recursos mais leves, primeira execução mais simples, menos personalização. Escolha quando o SillyTavern parecer demais para o seu fluxo de trabalho.',
          '**Ollama CLI simples mais um editor de texto** — a opção mínima. `ollama run llama3.3:70b` e canalize cenas pelo terminal para o seu documento de rascunho. Perde o contexto persistente do personagem, mas ganha em foco do escritor.',
          'Para a comparação frente a frente dos frontends voltados para roleplay, ver [SillyTavern vs Agnai vs RisuAI: melhor frontend local de roleplay](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Redigir e editar exige frontends diferentes. Use o SillyTavern para a geração (voz do personagem, trabalho de cenas), depois exporte o chat para um editor de texto puro para a revisão. Editar dentro da janela de chat estimula o hábito de "pedir ao modelo para corrigir a prosa" em vez de uma revisão movida pelo escritor — um risco de habilidades a longo prazo.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisão: qual modelo para o seu trabalho',
        content:
          '**Cinco perguntas, em ordem, levam a maioria dos escritores à escolha certa.**',
        columns: ['Sua situação', 'Escolha'],
        rows: [
          { 'Sua situação': 'Tenho 48 GB+ de VRAM e quero um modelo para tudo', 'Escolha': 'Llama 3.3 70B (instruct) + Hermes 3 (sem censura) no mesmo Ollama' },
          { 'Sua situação': 'Tenho uma GPU de 24 GB ou um Mac de 32 GB e quero um padrão sólido', 'Escolha': 'Qwen3 32B' },
          { 'Sua situação': 'Estou redigindo um romance — a continuidade de formato longo é a prioridade', 'Escolha': 'Mistral Large (ou Mistral La Plateforme em infraestrutura da UE se o hardware local não bastar)' },
          { 'Sua situação': 'Meu trabalho é muito intensivo em diálogo — as vozes dos personagens devem se manter distintas', 'Escolha': 'Command A+ (ou Llama 3.3 70B como alternativa mais leve)' },
          { 'Sua situação': 'Escrevo poesia, verso ou prosa lírica', 'Escolha': 'Yi-1.5 34B' },
          { 'Sua situação': 'O modelo instruct recusa cenas que preciso escrever', 'Escolha': 'Hermes 3 (base Llama 3.3) ou Dolphin 3.0 — mantenha a versão instruct instalada para trabalho não maduro' },
          { 'Sua situação': 'Quero começar com um modelo e iterar', 'Escolha': 'Qwen3 32B — cobre a maioria dos fluxos de trabalho em hardware de consumo; mude quando um tipo de tarefa se tornar a parte essencial' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha o Qwen3 32B como padrão se você tem uma GPU de 24 GB; o Llama 3.3 70B se você tem 48 GB+; o Mistral Large para trabalho de tamanho de romance; o Command A+ para diálogo; o Yi-1.5 para poesia; o Hermes/Dolphin para cenas que os modelos instruct recusam.',
          },
          {
            type: 'plain-terms',
            text: 'O Qwen3 32B é o modelo de início certo para a maioria dos escritores. Mude para um dos especialistas quando um tipo de tarefa específico (formato longo, diálogo, poesia, cenas maduras) se tornar o gargalo. Ter duas instalações (instruct + sem censura) na mesma máquina não custa nada — ambas podem estar no Ollama e você muda por cena.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A maioria dos escritores pensa demais no modelo e não o suficiente no prompt. Um system prompt bem elaborado com notas de personagem, amostras de voz e POV explícito faz mais pela qualidade da saída do que mudar do Qwen3 para o Llama 70B. Ver [persona prompting](/pt/prompt-engineering/persona-prompting) para a estrutura de prompt que melhora consistentemente a saída criativa.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher e usar modelos locais para escrita criativa',
        items: [
          '**Erro 1: perseguir o maior modelo nos benchmarks.** As pontuações de escrita criativa correlacionam mal com os rankings de benchmarks gerais. O Yi-1.5 34B supera o Llama 3.3 70B em poesia; o Command A+ supera ambos em diálogo. Escolha por tipo de tarefa, não por posição no ranking.',
          '**Erro 2: usar ajustes de sampling estilo código.** Temperatura 0.2–0.4 produz prosa plana e previsível. A escrita criativa exige 0.8–1.1 com top-p 0.9–0.95. Os ajustes padrão da maioria das interfaces de chat são ajustados para perguntas e respostas, não para prosa.',
          '**Erro 3: ficar com o modelo instruct e desistir quando ele recusa.** A versão instruct recusa cenas que você enquadrou explicitamente como ficção; o derivado sem censura do mesmo modelo base as escreve. Duas instalações no Ollama é a solução.',
          '**Erro 4: system prompts fracos.** "Você é um assistente útil" é o pior prompt possível para trabalho criativo. Um system prompt com notas de personagem, amostras de voz, POV, tempo verbal e tom faz mais pela qualidade da saída do que qualquer troca de modelo. Combine com [negative prompting](/pt/prompt-engineering/negative-prompting) para especificar o que NÃO fazer (sem exposição, sem prosa exuberante, sem "ela sentiu").',
          '**Erro 5: editar dentro da janela de chat.** Gerar no chat tudo bem; editar no chat treina o hábito de "pedir ao modelo para corrigir a prosa" em vez de revisá-la você mesmo. Exporte o rascunho para um editor de texto para a revisão; a voz do escritor se fortalece quando o modelo não está no loop.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O maior risco de habilidades com a IA criativa é terceirizar a revisão. A geração é o trabalho mecânico que se beneficia do modelo; a revisão é a parte que faz a prosa ser sua. Os escritores que deixam o modelo revisar perdem a voz rapidamente — mesmo quando não conseguem apontar qual linha mudou.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Fichas de modelos do Hugging Face para Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5](https://huggingface.co/) — documentação oficial de modelos e licenças.',
          '[Hermes 3 (NousResearch) GitHub e ficha de modelo](https://huggingface.co/NousResearch) — ajustes finos sem censura baseados no Llama 3.3.',
          '[Fichas de modelos Dolphin 3.0 (Cognitive Computations)](https://huggingface.co/cognitivecomputations) — ajustes finos sem censura em múltiplos modelos base.',
          '[Biblioteca de modelos Ollama](https://ollama.com/library) — modelos disponíveis, opções de quantização, indicadores de compatibilidade com chamadas de ferramentas mencionados acima.',
          '[Documentação do SillyTavern](https://docs.sillytavern.app/) — especificação de fichas de personagens, sistema de personas, recursos de chat em grupo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual LLM local é o melhor para escrita de ficção em 2026?',
            a: 'O Llama 3.3 70B é a melhor opção completa quando o hardware permite (~42 GB VRAM em Q4_K_M). Em rigs de 24 GB, o Qwen3 32B é o padrão mais leve com uma pequena diferença de qualidade em trabalho com muita prosa. Para continuidade de formato longo (romances), o contexto de 128K do Mistral Large é o diferencial. Escolha por tipo de tarefa: a maioria dos escritores se beneficia mais do especialista certo do que de perseguir o maior modelo.',
          },
          {
            q: 'O que é um LLM local sem censura e quando devo usá-lo?',
            a: 'Um modelo sem censura é um ajuste fino de um modelo base existente (normalmente Llama 3.3 ou Qwen3) onde foi removida a camada de segurança RLHF que produz recusas em prompts maduros ou moralmente complexos. O modelo segue o prompt em vez de declinar. Use derivados sem censura (Hermes 3, Dolphin 3.0) para ficção madura, cenas de conflito, escrita historicamente precisa, ou qualquer fluxo de trabalho onde o modelo com ajuste de instruções recuse cenas que você enquadrou como ficção. O escritor continua sendo o autor; o modelo simplesmente deixa de atrapalhar.',
          },
          {
            q: 'Qual temperatura devo usar para escrita criativa?',
            a: 'Temperatura 0.8–1.1 é a faixa de escrita criativa, junto com top-p 0.9–0.95. O diálogo ajustado exige 0.7–0.85; a prosa lírica e a poesia exigem 1.0–1.2; a ficção surreal ou de gênero exige 1.1–1.3. Os padrões da maioria das interfaces de chat (muitas vezes 0.7 com top-p 0.9) são ajustados para perguntas e respostas e produzem prosa plana em prompts criativos. Teste em uma cena curta com 3 ajustes, escolha o que faz o modelo soar mais vivo sem perder o prompt.',
          },
          {
            q: 'Os modelos locais para escrita criativa são tão bons quanto o ChatGPT ou o Claude?',
            a: 'Para a maioria dos prompts, sim — perto o suficiente para que as vantagens de privacidade e custo dominem. Os modelos de nuvem de fronteira ainda lideram nas tarefas criativas mais difíceis (coerência de formato longo além de 50K tokens, referências culturais muito obscuras, idiomas raros). Para uma sessão típica de ficção ou roleplay, um escritor que tenha calibrado os ajustes de sampling no Llama 3.3 70B ou no Qwen3 32B não verá diferenças de qualidade consistentes frente ao GPT-5 ou ao Claude. Os modelos que perdem são os que recebem o tratamento de "temperatura 0.7, system prompt genérico" — isso perde para qualquer modelo de nuvem.',
          },
          {
            q: 'Um modelo local pode escrever um romance completo?',
            a: 'Pode ajudar a redigir um. O Mistral Large com 128K de contexto pode manter um rascunho de 50.000 palavras na memória; o Llama 3.3 70B e o Qwen3 32B com 32K de contexto precisam de redação seção por seção. O gargalo não é a capacidade do modelo — é a estrutura do escritor (esboço, bíblia de personagens, lore book) que o modelo usa para manter a continuidade. Sem elas, até o Mistral Large se desvia. Com elas, qualquer um dos melhores modelos aguenta para trabalho de tamanho de romance.',
          },
          {
            q: 'Os modelos sem censura produzem conteúdo ilegal?',
            a: 'Não mais que os modelos com ajuste de instruções. Ambos produzem o texto que o prompt pede; os modelos sem censura estão mais dispostos a participar de temas maduros que a camada de segurança do ajuste de instruções recusa. A responsabilidade legal recai sobre o escritor e a publicação, não sobre o modelo. A Lei de IA da UE, o §184/§184c do StGB alemão e a lei de obscenidade dos EUA cobrem categorias de conteúdo específicas independentemente do método de geração. A hospedagem local não muda a lei; muda quem tem visibilidade sobre o rascunho.',
          },
          {
            q: 'O SillyTavern é só para roleplay adulto?',
            a: 'Não. O SillyTavern é um frontend focado em chat com fichas de personagens, gestão de personas e lore books — útil para qualquer trabalho intensivo em diálogo ou movido por personagens. Muitos escritores o usam para redação de ficção sem roleplay (cenas com múltiplos personagens, consistência de voz em projetos longos). O ecossistema de fichas de personagens inclui conteúdo adulto, mas não se limita a ele; a mesma interface funciona para ficção literária, roteiros e trabalho de narrativa de jogos.',
          },
          {
            q: 'Como a escrita criativa local difere das cargas de trabalho de código?',
            a: 'Nos ajustes de sampling e na estrutura do prompt. O código exige temperatura 0.2–0.4, saída determinística, saída estruturada (JSON, código) e restrições explícitas no prompt. A escrita criativa exige temperatura 0.8–1.1, saída mais livre, formato de prosa e system prompts mais ricos (voz do personagem, POV, tom, convenções de gênero). O mesmo modelo — o Llama 3.3 70B serve para ambos — produz saídas radicalmente diferentes dependendo desses ajustes. Um prompt estilo código em um modelo criativo produz saída plana; um prompt estilo criativo em um modelo de código produz código alucinado.',
          },
          {
            q: 'Qual modelo local tem menos "sinais de IA"?',
            a: 'Os sinais de IA — frases como "um arrepio percorreu sua espinha", "tapeçaria", "aprofundar", "navegar" e os resumos de transição estilo ChatGPT — são mais frequentes nos modelos instruct menores. O Llama 3.3 70B e o Qwen3 32B têm menos sinais que os modelos abaixo de 20B. O Hermes 3 tem os menos deste conjunto: o treinamento de padrões de recusa RLHF também foi onde muitas transições formulaicas foram introduzidas, e removê-lo remove ambos. O Yi-1.5 34B é incomum — mais forte em vocabulário raro, mas ocasionalmente exagerado. A alavanca de maior impacto para a redução de sinais é o system prompt com exemplos negativos ("não escreva \'arrepio\', \'tapeçaria\' ou \'aprofundar\'"), não o modelo.',
          },
          {
            q: 'Como evito o clichê do "arrepio que percorre a espinha"?',
            a: 'Um system prompt com exemplos negativos é a alavanca de maior impacto — liste explicitamente 8–12 frases proibidas ("não escreva \'arrepio\', \'tapeçaria\', \'aprofundar\', \'magistralmente\' ou \'ela sentiu\'"). Baixe a temperatura ligeiramente (0.85–0.95 em vez de 1.1) para reduzir o alcance do modelo por linguagem de prateleira. O repeat penalty 1.1 sozinho NÃO capta isso — as frases não são repetições exatas de tokens. A penalização DRY (multiplicador 0.8, base 1.75) as capta no nível n-gram entre cenas. Um passe de revisão manual é o filtro final. Ver [negative prompting](/pt/prompt-engineering/negative-prompting) para a estrutura de prompt que elimina consistentemente os clichês.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: melhor frontend local de roleplay (2026)](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparação frente a frente dos três frontends voltados para roleplay com os modelos acima.',
          '[Prompts de LLM local para escritores de ficção: modelos e técnicas](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — modelos de prompts prontos para copiar para desenvolvimento de personagens, diálogo, construção de mundos e fluxos de trabalho de revisão.',
          '[LLMs locais sem censura para escrita criativa: ética, legalidade e melhores práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — tratamento completo de quando os derivados sem censura são ferramentas criativas legítimas e onde estão as linhas legais e éticas.',
          '[Temperatura e Top-P: controle a criatividade da IA](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) — o lado de engenharia de prompts dos parâmetros de sampling; mais profundo que o resumo deste guia.',
          '[Negative prompting](/pt/prompt-engineering/negative-prompting) — especificar o que NÃO fazer em um prompt; um multiplicador de força para system prompts em trabalho criativo.',
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) — o guia autoritativo do panorama de modelos; útil quando você quer explorar além dos seis modelos de escrita criativa acima.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores LLMs locais para escrita criativa 2026: ficção, diálogo e construção de mundos',
      description: 'Comparação de 6 modelos locais para escrita criativa: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 e variantes sem censura. Testados em mais de 50 prompts criativos.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-local-llm-creative-writing-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'أفضل نماذج ⁨LLM⁩ المحلية للكتابة الإبداعية ⁨2026⁩: الخيال والحوار وبناء العوالم',
    seoTitle: '⁨LLMs⁩ محلية للكتابة الإبداعية ⁨2026⁩: ⁨Llama⁩ و⁨Qwen3⁩',
    intro:
      'الكتابة الإبداعية هي المهمة التي تتفوق فيها نماذج LLM المحلية لأسباب تتجاوز الخصوصية والسعر. أفضل نماذج الأوزان المفتوحة المضبوطة على التعليمات وغير المقيدة في 2026 — Llama 3.3 70B وQwen3 32B وMistral Large وCommand A+ وYi-1.5 34B ومشتقات Hermes/Dolphin غير المقيدة — تنتج خيالاً وحواراً وبناءً للعوالم يضاهي نماذج السحابة الحديثة في معظم الطلبات. تكمن الفوارق في اتساق الأسلوب والاستعداد للتعامل مع الموضوعات المظلمة أو البالغين، ومدى طبيعية استجابتها للتوجيهات. يختبر هذا الدليل ستة نماذج على أكثر من 50 طلباً إبداعياً عبر الخيال والحوار والشعر وبناء العوالم، مع إعدادات الحرارة وtop-p التي تناسب كل نموذج.',
    metaDescription:
      '6 نماذج محلية اختُبرت على 50+ طلباً إبداعياً: Llama 3.3 70B وQwen3 32B وMistral Large وCommand A+ وYi-1.5. مقارنة الأسلوب والإعدادات المثلى.',
    twitterDescription:
      '6 نماذج محلية للخيال والحوار وبناء العوالم اختُبرت على أكثر من 50 طلباً. Llama 3.3 وQwen3 وMistral Large وCommand A+ وYi-1.5 إلى جانب النماذج غير المقيدة. الحكم لكل نوع مهمة.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'كتّاب الخيال والسيناريو ومصمّمو الألعاب وبنّاؤو العوالم وهواة لعب الأدوار الذين يستخدمون نماذج LLM المحلية في العمل الإبداعي حيث تكون الخصوصية واتساق الأسلوب والاستعداد للتعامل مع الموضوعات الناضجة أهم من نقاط المعايير.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'نموذج LLM محلي للكتابة الإبداعية',
    targetKeywords: [
      'أفضل نموذج llm محلي للكتابة الإبداعية',
      'نموذج llm محلي لكتابة الخيال',
      'نموذج llm محلي غير مقيد',
      'مقارنة llama وmistral في الكتابة الإبداعية',
      'أفضل نموذج محلي للحوار',
      'نموذج llm محلي لبناء العوالم',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B هو أفضل خيار محلي شامل للكتابة الإبداعية في مايو 2026 — اتساق أسلوبي قوي؛ يتبع التوجيهات بشكل جيد؛ ويتعامل مع الموضوعات المظلمة دون رفض عندما يُصوَّر العمل في موجّه النظام باعتباره خيالاً. Qwen3 32B هو الخيار المناسب لأجهزة 24 GB: يكاد يماثله في جودة النثر مع متطلبات أجهزة أخف. Mistral Large يفوز في الاستمرارية الطويلة (صياغة الروايات) بفضل سياقه الأصلي البالغ 128K. Command A+ يمتلك أنقى أسلوب حواري. Yi-1.5 34B هو الخيار المتخصص للشعر والنثر الغنائي. لسير العمل التي ترفضها النماذج المضبوطة على التعليمات، Hermes 3 (قاعدة Llama 3.3) وDolphin 3.0 هما الخياران غير المقيدَين — البنية ذاتها، مع إزالة طبقة أمان RLHF. الحرارة 0.8–1.1 وtop-p 0.9–0.95 هي النطاق الإبداعي؛ 0.7 وما دون ينتج نثراً مسطحاً. غير مقيد ≠ غير أخلاقي — يعني أن النموذج يتبع الموجّه بدلاً من الرفض؛ والكاتب لا يزال هو المؤلف.**',
    quickAnswerTop: {
      ar: {
        question: 'ما نموذج LLM المحلي الأفضل للكتابة الإبداعية في 2026؟',
        answer:
          'Llama 3.3 70B هو أفضل خيار محلي شامل — قوي في النثر والحوار وبناء العوالم، مع اتساق أسلوبي يمتد عبر جلسات طويلة. على أجهزة 24 GB حيث لا يتسع النموذج 70B، يُعد Qwen3 32B البديل الأخف دون خسارة تُذكر في الجودة. Mistral Large هو خيار السياق الطويل لصياغة الروايات (128K سياق جاهزاً). Command A+ يمتلك أكثر الأصوات الحوارية طبيعية. Yi-1.5 34B هو المتخصص في الشعر والنثر الغنائي. لسير العمل التي تصطدم بطبقة أمان النماذج المضبوطة (الخيال الناضج ومشاهد الصراع والشخصيات المعقدة أخلاقياً)، تستخدم مشتقات Hermes 3 وDolphin 3.0 نفس النماذج الأساسية مع إزالة طبقة أمان RLHF — تتبع الموجّه بدلاً من الرفض. الحرارة 0.8–1.1 وtop-p 0.9–0.95 هي النطاق الإبداعي؛ إعدادات نمط الكود (0.2–0.4) تنتج نثراً مسطحاً.',
        bullets: [
          'الأفضل عموماً: Llama 3.3 70B — أقوى اتساق أسلوبي، يتبع التوجيهات جيداً، يتعامل مع الموضوعات المظلمة دون رفض عند تأطير العمل خيالاً.',
          'الأفضل لأجهزة 24 GB: Qwen3 32B — يكاد يضاهي Llama 70B في النثر مع متطلبات أجهزة أخف بكثير.',
          'الأفضل للصياغة الطويلة: Mistral Large — 128K سياق جاهزاً؛ صياغة بطول الرواية دون فقدان الخيط.',
          'الأفضل للحوار: Command A+ — أكثر الأصوات التحادثية طبيعية عبر الشخصيات.',
          'الأفضل للشعر/الغنائي: Yi-1.5 34B — الخيار المتخصص للنظم والنثر المصطنع.',
          'عند رفض النموذج المضبوط: Hermes 3 (قاعدة Llama) أو Dolphin 3.0 — غير مقيد، البنية ذاتها، يتبع الموجّه.',
          'إعدادات الأخذ بالعينات: حرارة 0.8–1.1، top-p 0.9–0.95 للنثر؛ أقل للحوار المتسق، أعلى للعمل الخيالي/السريالي.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'كيف اختبرنا', anchor: '#how-we-tested' },
      { label: 'مقارنة مباشرة', anchor: '#comparison' },
      { label: 'أحكام لكل نموذج', anchor: '#verdicts' },
      { label: 'نماذج من المخرجات', anchor: '#sample-outputs' },
      { label: 'الحرارة وTop-P للعمل الإبداعي', anchor: '#sampling' },
      { label: 'النماذج غير المقيدة: ما هي', anchor: '#uncensored' },
      { label: 'واجهات العمل الإبداعي', anchor: '#frontends' },
      { label: 'القرار: اختر نموذجك', anchor: '#decision' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70B هو أفضل نموذج محلي شامل للكتابة الإبداعية في مايو 2026.** أقوى اتساق أسلوبي في المجموعة؛ يتبع التوجيهات جيداً؛ يتعامل مع الموضوعات المظلمة دون رفض عندما يُصوَّر العمل في موجّه النظام باعتباره خيالاً.',
          '**Qwen3 32B هو الخيار المناسب لأجهزة 24 GB.** جودة نثر تكاد تضاهي Llama 70B دون تكلفة 48 GB+ من VRAM. الخيار الافتراضي لمعظم الحواسيب المحمولة والمكتبية.',
          '**Mistral Large يفوز في الاستمرارية الطويلة.** 128K سياق جاهزاً؛ صياغة بطول الرواية دون فقدان الخيط أو صوت الشخصية.',
          '**Command A+ يمتلك أنقى أسلوب حواري.** أكثر إيقاعات التحادث طبيعية بين الشخصيات؛ الخيار عندما يكون الحوار هو الجزء الهيكلي في العمل.',
          '**Yi-1.5 34B هو المتخصص في الشعر والنثر الغنائي.** الخيار المتخصص للنظم والنثر المصطنع والعمل القصير حيث يهم الإيقاع.',
          '**المشتقات غير المقيدة (Hermes 3 وDolphin 3.0) هي الخطوة الصحيحة عندما ترفض النماذج المضبوطة.** نفس النماذج الأساسية؛ طبقة أمان RLHF محذوفة؛ يتبع النموذج الموجّه بدلاً من الرفض. الخيال الناضج ومشاهد الصراع والشخصيات المعقدة أخلاقياً تصبح قابلة للكتابة.',
          '**إعدادات الأخذ بالعينات أهم مما يعتقد الناس.** الحرارة 0.8–1.1 وtop-p 0.9–0.95 هي النطاق الإبداعي. إعدادات نمط الكود (0.2–0.4) تنتج نثراً مسطحاً ومتوقعاً. فوق 1.2 هو إقليم الخيال/السريالي.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الأفضل عموماً:** Llama 3.3 70B مع Q4_K_M، ~42 GB VRAM. أقوى اتساق أسلوبي في هذه المجموعة.',
          '**الأفضل لأجهزة 24 GB:** Qwen3 32B مع Q4_K_M، ~20 GB VRAM. الخيار الافتراضي لمعظم المستخدمين.',
          '**الأفضل للصياغة الطويلة:** Mistral Large مع Q4_K_M، ~75 GB VRAM إجمالاً (ثقيل). 128K سياق جاهزاً.',
          '**الأفضل للحوار:** Command A+ مع Q4_K_M، ~62 GB VRAM. أفضل تمييز لأصوات الشخصيات.',
          '**الأفضل للشعر:** Yi-1.5 34B مع Q4_K_M، ~21 GB VRAM. متخصص في النثر الغنائي.',
          '**الخيارات غير المقيدة:** Hermes 3 (قاعدة Llama 3.3، ~42 GB) وDolphin 3.0 (أحجام أساسية متعددة، 13–42 GB).',
          '**إعدادات الأخذ بالعينات الافتراضية للنثر:** حرارة 0.95، top-p 0.92، معاقبة التكرار 1.1. اضبط وفقاً لنوع المهمة.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'كيف اختبرنا: أكثر من 50 طلباً إبداعياً على ستة نماذج',
        content:
          '**أبقى الاختبار مجموعة الطلبات وإعدادات الأخذ بالعينات والواجهة ثابتة؛ تغيّر النموذج وحده.** نفس الطلبات الخمسين عبر مهام الخيال والحوار والشعر وبناء العوالم؛ مخرجات مُقيَّمة بنفس المعيار حسب نوع المهمة.',
        items: [
          '**الخلفية:** Ollama 0.7+ على macOS وLinux؛ نفس حدود السياق لكل نموذج؛ تكميم Q4_K_M للنماذج الستة (Q5_K_M للنماذج الأصغر من 32B–34B حيث سمح VRAM، دون فارق قابل للقياس في نقاط المعيار).',
          '**الواجهة:** Open WebUI لمعظم الاختبار (عمل بتنسيق الدردشة)؛ SillyTavern لمجموعة فرعية من الحوار المكثف ولعب الأدوار (يتطابق مع الاستخدام الفعلي للكتّاب الإبداعيين).',
          '**مجموعة الطلبات:** 50 طلباً مقسمة على أربعة أنواع مهام — خيال (15: مفتتحات القصص القصيرة، استمرارات المشاهد، المقاطع الوصفية)، حوار (15: تبادلات بين شخصيتين، مشاهد جماعية، تمييز الأصوات)، شعر (10: شعر حر، أشكال منظمة، نثر غنائي)، بناء العوالم (10: أوصاف السيناريو، سياسات الفصائل، أنظمة السحر). كل طلب نُفِّذ 3 مرات لكل نموذج لالتقاط التباين.',
          '**إعدادات الأخذ بالعينات:** حرارة 0.95، top-p 0.92، معاقبة التكرار 1.1 كخط أساسي؛ تعديلات خاصة بالمهمة موضّحة في أحكام النماذج أدناه.',
          '**معيار التقييم:** اتساق الأسلوب (هل تبدو الشخصية أو الراوي بنفس الطريقة عبر الفقرات؟)، وفاء بالطلب (هل اتبع النموذج التوجيه أم ابتكر مشهده الخاص؟)، جودة النثر (الإيقاع والمفردات وتجنب الصور النمطية) والاستعداد (هل رفض النموذج أو عقّم المشاهد التي صوّرها الطلب صراحةً خيالاً؟).',
          '**قيد الأمانة:** نقاط مُبلَّغ عنها كنطاقات نسبية لكل مهمة، لا نسب مئوية مطلقة مختلقة. "أفضل حوار" يعني المركز الأول المتسق في المجموعة الفرعية للحوار عبر 3 تشغيلات؛ "قوي" يعني الأفضل في المجموعة الثلاثية؛ "متوسط" يعني أن النموذج تأخر عن منافس واحد أو أكثر في المعيار.',
          'للتقنيات الموجّهة التي تحسّن المخرجات الإبداعية في أي نموذج، انظر [التحكم في الحرارة وtop-p](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) و[التوجيه بالشخصية](/ar/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'معايير الكتابة الإبداعية ذاتية بطبيعتها. المعيار أعلاه (اتساق الأسلوب، الوفاء بالطلب، جودة النثر، الاستعداد) هو أقرب ما وصلنا إليه من تقييم قابل للتكرار، لكن قارئَين يقيّمان نفس المخرجات سيختلفان في جودة النثر في أغلب الأحيان. عامل الأحكام كفرضيات أولية لاختبارها في عملك الخاص.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'وجهاً لوجه: ستة نماذج محلية في مهام الكتابة الإبداعية',
        content:
          '**Llama 3.3 70B يتصدر في أوسع مجموعة من المهام؛ النماذج الأصغر والمتخصصة تفوز في فئة أو فئتين لكل منها.** اختر حسب نوع المهمة، لا حسب التصنيف العام.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B هو أقوى نموذج إبداعي شامل؛ Qwen3 32B هو البديل الأخف؛ Mistral Large يفوز في الصياغة الطويلة؛ Command A+ يفوز في الحوار؛ Yi-1.5 يفوز في الشعر؛ Hermes/Dolphin يتعاملان مع المشاهد التي ترفضها النماذج الأخرى.',
          },
          {
            type: 'plain-terms',
            text: 'لا يوجد نموذج أفضل في كل شيء. Llama 3.3 70B هو الخيار الآمن الافتراضي إن توفر الجهاز. Qwen3 32B هو الاختيار الذكي على GPU بسعة 24 GB. اختر متخصصاً (Mistral للروايات، Command A+ للحوار، Yi-1.5 للشعر) عندما يكون نوع مهمة واحد هو الجزء الهيكلي في عملك. اختر مشتقاً غير مقيد عندما يرفض النموذج المضبوط المشاهد التي تحتاج لكتابتها.',
          },
        ],
        columns: ['النموذج', 'الحجم', 'VRAM (Q4_K_M)', 'الخيال', 'الحوار', 'الشعر', 'بناء العوالم', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Llama 3.3 70B', 'الحجم': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'الخيال': 'الأفضل', 'الحوار': 'قوي', 'الشعر': 'قوي', 'بناء العوالم': 'الأفضل', 'الأفضل لـ': 'الأفضل عموماً؛ الافتراضي إن سمح الجهاز' },
          { 'النموذج': 'Qwen3 32B', 'الحجم': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'الخيال': 'قوي', 'الحوار': 'قوي', 'الشعر': 'متوسط', 'بناء العوالم': 'قوي', 'الأفضل لـ': 'الافتراضي على جهاز 24 GB؛ فارق بسيط عن Llama 70B' },
          { 'النموذج': 'Mistral Large', 'الحجم': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'الخيال': 'قوي (طويل)', 'الحوار': 'قوي', 'الشعر': 'متوسط', 'بناء العوالم': 'قوي', 'الأفضل لـ': 'استمرارية الصياغة الطويلة، سياق 128K' },
          { 'النموذج': 'Command A+', 'الحجم': 'غير معلن', 'VRAM (Q4_K_M)': '~62 GB', 'الخيال': 'قوي', 'الحوار': 'الأفضل', 'الشعر': 'متوسط', 'بناء العوالم': 'قوي', 'الأفضل لـ': 'العمل المكثف بالحوار، المشاهد الجماعية' },
          { 'النموذج': 'Yi-1.5 34B', 'الحجم': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'الخيال': 'متوسط', 'الحوار': 'متوسط', 'الشعر': 'الأفضل', 'بناء العوالم': 'متوسط', 'الأفضل لـ': 'الشعر والنثر الغنائي والعمل المصطنع' },
          { 'النموذج': 'Hermes 3 / Dolphin 3.0', 'الحجم': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'الخيال': 'مثل الأساسي', 'الحوار': 'مثل الأساسي', 'الشعر': 'مثل الأساسي', 'بناء العوالم': 'مثل الأساسي', 'الأفضل لـ': 'المشاهد التي ترفضها النماذج المضبوطة' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الإعداد بنموذجَين هو النمط المعتاد: Llama 3.3 70B (أو Qwen3 32B) كنموذج رئيسي، إضافة مشتق Hermes 3 على نفس Ollama للمشاهد التي ترفضها نسخة instruct. بدّل بينهما مشهداً مشهداً؛ يمكن وجود كليهما في `ollama list` في آن واحد دون تعارض.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'أحكام لكل نموذج',
        items: [
          '**Llama 3.3 70B** — الأفضل عموماً. أقوى اتساق أسلوبي في مجموعة الاختبار؛ تحافظ الشخصيات على نفس أنماط كلامها عبر المشاهد الطويلة. يتبع التوجيهات جيداً — عندما يحدد موجّه النظام وجهة النظر والنبرة وقواعد الأسلوب الأدبي، يحترمها Llama 3.3. يتعامل مع الموضوعات المظلمة (العنف، الحزن، الشخصيات الرمادية أخلاقياً) دون رفض عند تأطير الطلب باعتباره خيالاً. حيث يُخفق: المقاطع الطويلة قد تنجرف أحياناً نحو صوت "أدبي" عام؛ النماذج الصغيرة من نفس العائلة (8B) تفقد هذه الميزة.',
          '**Qwen3 32B** — أفضل خيار على جهاز 24 GB. اتساق أسلوبي أدنى قليلاً من Llama 3.3 70B لكن الفجوة صغيرة بما يكفي ألا يلاحظها معظم الكتّاب في العمل النثري المكثف. الأقوى بين النماذج الأصغر في اتباع التعليمات. حيث يُخفق: الشعر والنثر المصطنع يتأخران بوضوح؛ انتقل إلى Yi-1.5 لهذه المهام.',
          '**Mistral Large** — أفضل استمرارية للصياغة الطويلة. نافذة سياق 128K تعني أن مسودة 50,000 كلمة تتسع دون اقتطاع؛ يحافظ النموذج على تفاصيل الشخصيات وخيوط الحبكة وقواعد العالم عبر الفصول. حيث يُخفق: حاجز الجهاز هو الأعلى في هذه المجموعة (~75 GB بتكميم Q4_K_M)؛ تتباطأ السرعة لكل رمز في المدخلات الطويلة. استخدم Mistral La Plateforme على بنية تحتية أوروبية إذا كان الجهاز المحلي هو القيد.',
          '**Command A+** — أفضل حوار. أصوات شخصيات مميزة تتمسك بها في التبادلات؛ المشاهد الجماعية (3+ متحدثين) تظل قابلة للقراءة دون نمط الفشل "الجميع يبدو متشابهاً" الشائع في النماذج الأخرى. حيث يُخفق: فقرات النثر بين إيقاعات الحوار كفوءة لكنها ليست غنائية؛ للمقاطع الوصفية البحتة، يفوز Llama 3.3.',
          '**Yi-1.5 34B** — أفضل شعر ونثر غنائي. واعٍ بالإيقاع، مرتاح للأشكال المنظمة (السونيتة، الفيلانيل، الهايكو)، ينتج شعراً يصمد أفضل من النماذج العامة الأكبر. حيث يُخفق: الخيال الطويل كفوء لكنه ليس نقطة قوته؛ اختر Llama 3.3 أو Qwen3 للعمل السردي.',
          '**Hermes 3 (قاعدة Llama 3.3) وDolphin 3.0** — المشتقات غير المقيدة. نفس البنية والأوزان الأساسية مثل Llama 3.3 70B؛ طبقة أمان RLHF تُزال خلال الضبط الدقيق. يتبع النموذج الموجّه بدلاً من رفض المحتوى الناضج أو تعقيمه. الجودة في الطلبات غير الناضجة مطابقة للنموذج الأساسي؛ الفارق يظهر فقط في الطلبات التي ترفضها نسخ instruct. استخدمها عند اقتضاء العمل (الخيال الناضج، المشاهد العنيفة، الشخصيات المعقدة أخلاقياً) وابق مع النسخة instruct في الحالات الأخرى.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'اتساق الأسلوب هو المقياس الذي يُقلّل معظم الكتّاب من شأنه في التقييم المبكر للنماذج. نموذج ينتج نثراً رائعاً في فقرة واحدة ثم يفقد أنماط كلام الشخصية في الفقرة الخامسة أسوأ من نموذج ينتج نثراً كفوءاً بأسلوب متسق عبر 20 فقرة. اختبر الاستمرارية في جلسات طويلة، لا جودة مخرج واحد فقط.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'نماذج من المخرجات: ثلاثة نماذج وطلب واحد',
        content:
          '**الطلب المشترك:** "افتح مشهد نوار حيث يدخل المحقق مقهى مبلولاً بالمطر في الساعة 2 صباحاً." نفس الحرارة (0.95)، نفس top-p (0.92)، نفس معاقبة التكرار (1.1) — يتغير النموذج وحده. المقتطفات أدناه تمثيلية لمخرجات كل نموذج في هذا النوع من الطلبات عبر ثلاثة تشغيلات.',
        items: [
          '**Llama 3.3 70B** — "رنّ الجرس فوق الباب مرتين ثم صمت. كان المطر ينحدر عبر معطفي في خيوط، يكوّن برك قبل أن أخطو ثلاث خطوات. لم ترفع الفتاة عند المنضدة نظرها. سائقا شاحنتَين في الكابينة الخلفية يدرسان قهوتهما. لا أحد في مكان كهذا في الساعتين صباحاً يريد أن يُلاحَظ، وأنا كذلك." — *تثبيت حسي ملموس، صوت فعّال، لا كلمات حشو. المشهد الاجتماعي يتأسس في ثلاث جمل.*',
          '**Qwen3 32B** — "دفعت الباب ودخلت جداراً من دخان السجائر ودهن الشواية. كان المكان نصف فارغ وصامت تماماً — النوع من الصمت الذي يستقر حين يتفق الناس ضمنياً على إبقاء كل منهم لنفسه. كان مروحة السقف يدور. كانت النادلة تعيد ملء كوب في الطرف الآخر من المنضدة دون أن تنظر إليّ." — *إعداد بالملاحظة قبل الفعل؛ أجواء فعّالة. منظم قليلاً أكثر من Llama 3.3 لكن بنفس النظافة.*',
          '**Yi-1.5 34B** — "كان المطر يدق على المظلة بانتظام متأمل، يعدّ الساعات الأخيرة من ليلة لا يريد أحد تذكّرها. بالداخل، رمت المصابيح الفلورية حسابها البارد على الطلاء الصناعي — كل بقعة، كل خدش، كل عام أمضاه المكان يخسر حجج ضد الاندثار. وجدت كرسياً في الطرف القريب وجلست كرجل تصالح مع أمر ما." — *استعارة من الجملة الأولى؛ تنويع إيقاعي للجمل؛ صور أكثر كثافة. الخلفية الشعرية لـYi-1.5 تظهر حتى في النثر.*',
        ],
        columns: ['النموذج', 'المفتتح النموذجي', 'نمط الوصف النموذجي'],
        rows: [
          { 'النموذج': 'Llama 3.3 70B', 'المفتتح النموذجي': 'الفعل أولاً، التفصيل الحسي فورياً', 'نمط الوصف النموذجي': 'ملموس وجسدي؛ يتجنب الأسماء المجردة؛ مرسوم اجتماعياً' },
          { 'النموذج': 'Qwen3 32B', 'المفتتح النموذجي': 'ملاحظة البيئة قبل فعل الشخصية', 'نمط الوصف النموذجي': 'فعّال؛ تفصيل اجتماعي/جوي؛ إشارة هيكلية خفيفة' },
          { 'النموذج': 'Yi-1.5 34B', 'المفتتح النموذجي': 'استعارة أو تشبيه من الجملة الأولى', 'نمط الوصف النموذجي': 'صور مجردة؛ تنويع إيقاعي؛ أكثر كثافة؛ مبالغ فيه أحياناً' },
          { 'النموذج': 'Command A+', 'المفتتح النموذجي': 'صوت الشخصية أو مفتتح قريب من الحوار', 'نمط الوصف النموذجي': 'محادثي؛ صوت متميز خاص؛ الوصف المنفرد أضعف' },
          { 'النموذج': 'Mistral Large', 'المفتتح النموذجي': 'فقرة إعداد؛ بداية أبطأ', 'نمط الوصف النموذجي': 'متسو ومنضبط؛ متسق عبر المقاطع الطويلة؛ عام قليلاً' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه المقتطفات توضح ميول كل نموذج عبر تشغيلات متعددة، وليست أفضل الأمثلة المنتقاة. عبارة "يخسر حجج ضد الاندثار" لـYi-1.5 34B ظهرت في واحد من التشغيلات الثلاثة؛ الاثنتان الأخريان كانتا أكثر مباشرة. شغّل أي نموذج 2–3 مرات على نفس الطلب وخذ الأنسب لمشهدك، لا الأول فحسب.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'الحرارة وTop-P للعمل الإبداعي',
        content:
          '**الكتابة الإبداعية تتطلب درجات حرارة أخذ عينات أعلى من الكود.** معاملات الأخذ بالعينات الافتراضية التي تأتي مع معظم واجهات الدردشة مضبوطة للإجابة على الأسئلة، لا للنثر — الحرارة 0.7 وtop-p 0.9 تنتج مخرجات مسطحة ومتوقعة في الطلبات الإبداعية.',
        items: [
          '**الخط الأساسي للنثر:** حرارة 0.95، top-p 0.92، معاقبة التكرار 1.1. هذه نقطة البداية لمعظم أعمال الخيال والحوار وبناء العوالم. اضبط حسب المهمة من هنا.',
          '**الحوار المتسق:** حرارة 0.7–0.85، top-p 0.9. درجات الحرارة المنخفضة تحافظ على اتساق صوت الشخصيات في التبادلات؛ القيم الأعلى تنتج تدخلات خارج الشخصية.',
          '**النثر الغنائي والشعر:** حرارة 1.0–1.2، top-p 0.95. درجات الحرارة الأعلى تفتح اختيارات كلمات غير متوقعة تجعل الشعر يعمل.',
          '**الخيال السريالي أو الأدبي:** حرارة 1.1–1.3، top-p 0.95–0.98. تدفع النموذج لإنتاج مجموعات صور واستعارات أقل شيوعاً.',
          '**المشاهد المدفوعة بالحبكة (حركة، غموض، مفاجآت):** حرارة 0.85–0.95، top-p 0.9. تحتاج اتباع تعليمات أكثر من الجدة.',
          '**معاقبة التكرار 1.1–1.15** هي النطاق المناسب لمعظم العمل الإبداعي. أعلى (1.2+) يجعل النموذج يتجنب تكرار الكلمات حتى حين يكون التكرار مقصوداً أسلوبياً؛ أقل (1.0–1.05) يترك النموذج يقع في حلقات في المشاهد الطويلة.',
          '**min_p (0.05–0.1):** بديل أحدث لـtop-p يُحدّد عتبة الاحتمال النسبية ديناميكياً بالنسبة لاحتمال أعلى رمز. أكثر تساهلاً في الطلبات الإبداعية من top-p 0.9 دون خطر عدم الترابط لقيم top-p المرتفعة جداً. الافتراضي الموصى به لمستخدمي SillyTavern وKoboldCpp في 2026 عند كشف الواجهة له؛ Ollama يمرره كما هو، وOpen WebUI 0.5+ يكشفه في الإعدادات المتقدمة.',
          '**معاقبة DRY (مضاعف 0.8، قاعدة 1.75، الطول المسموح 2):** تلتقط التكرارات على مستوى العبارة التي لا تلتقطها معاقبة_التكرار القياسية. بينما تتتبع repeat_penalty رموزاً فردية، تتتبع DRY تسلسلات n-gram — هكذا تُقمع الصورة النمطية "قشعريرة اجتاحت ظهره" في المشهد الأول عندما تعود في المشهد الرابع. مفيدة للعمل الإبداعي في جلسات طويلة.',
          '**الخط الأساسي الحديث للكتابة الإبداعية (2026):** حرارة 0.95، min_p 0.05، مضاعف DRY 0.8 (قاعدة 1.75، الطول المسموح 2). top-p 0.92 لا يزال يعمل جيداً إذا لم تكشف واجهتك min_p أو DRY — هذه تحسينات تدريجية على الإعدادات الكلاسيكية، لا بدائل إلزامية.',
          'لمعالجة أكثر شمولاً لسبب أهمية هذه المعاملات وكيفية تفاعلها، انظر [التحكم في الحرارة وtop-p](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اختبر إعدادات الأخذ بالعينات على مشهد قصير واحد لكل نموذج — ثلاثة تشغيلات لكل إعداد، ثم اختر الحرارة التي يبدو فيها النموذج أكثر حيوية دون فقدان الطلب. الإعدادات التي تعمل مع Llama 3.3 70B لا تنتقل بصورة مثالية إلى Mistral Large أو Yi-1.5؛ اضبط لكل نموذج.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'النماذج غير المقيدة: ما هي ومتى تهم',
        content:
          '**غير مقيد لا يعني غير أخلاقي.** يعني أن طبقة أمان النموذج المضبوط على التعليمات (رفضيات RLHF) قد أُزيلت أو تجاوزت، لذا يتبع النموذج الموجّه بدلاً من الرفض أو التعقيم. لا يزال الكاتب هو المؤلف؛ الأداة تتوقف عن الحيلولة دون ذلك.',
        items: [
          '**ما يعنيه "غير مقيد" تقنياً.** نماذج مثل Hermes 3 وDolphin 3.0 هي متغيرات مضبوطة دقيقاً من نماذج أساسية (Llama 3.3 وQwen3) حيث استُبدلت خطوة RLHF في مرحلة ما بعد التدريب — التي تُنتج الرفضيات في الطلبات الناضجة أو العنيفة أو المعقدة أخلاقياً — بضبط دقيق يتبع الموجّه. نفس البنية، نفس الأوزان الأساسية، ما بعد تدريب مختلف.',
          '**متى تهم للعمل الإبداعي.** الخيال الناضج (الروايات الأدبية ذات المشاهد الجنسية، الجريمة الخيالية ذات العنف الصريح، الرعب)، الكتابة الدقيقة تاريخياً (الحرب، الفظائع، وحشية العصر الاستعماري)، الشخصيات المعقدة أخلاقياً (النموذج قد يرفض إعطاء صوتاً لشرير مقنع)، وسيناريوهات لعب الأدوار التي لن تُشارك فيها النماذج المضبوطة.',
          '**أين تُخفق.** تتبع الموجّه — بما فيها الطلبات سيئة الصياغة. النماذج المضبوطة كثيراً ما تُعدّل الطلبات الغامضة نحو شيء قابل للنشر؛ النماذج غير المقيدة تعطيك بالضبط ما طلبته، وهذا أحياناً أسوأ. توجيه الكاتب يهم أكثر.',
          '**الحدود الأخلاقية.** "النموذج سيكتبه" ليست رخصة إبداعية لكتابة محتوى يستهدف أشخاصاً حقيقيين، أو يصور سيناريوهات غير توافقية تشمل أفراداً حقيقيين أو قابلين للتعرف عليهم، أو غير قانوني في ولاية قضائية الكاتب. الاستضافة المحلية لا تغير القانون؛ تغير من يمكنه رؤية المسودة.',
          '**السياق القانوني (مايو 2026، موجز وغير شامل).** قانون الذكاء الاصطناعي الأوروبي وقوانين الدول الأعضاء (خاصة §184/§184c من StGB الألماني) تغطي فئات محتوى بعينها بصرف النظر عن مكان إنشائها. قانون الفحش الأمريكي يُطبّق على النشر لا على التوليد. بالنسبة للنشر التجاري، النموذج الذي أنتج المسودة غير ذي صلة؛ ما يُنظَّم هو القطعة المنشورة.',
          '**لمعالجة أكثر شمولاً** لأخلاقيات النماذج غير المقيدة والسياق القانوني وأفضل الممارسات، انظر [نماذج LLM المحلية غير المقيدة للكتابة الإبداعية: الأخلاق والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'غير مقيد هو اختيار سير عمل، لا هوية. كثير من الكتّاب يستخدمون النموذج المضبوط لمعظم المشروع ويتحولون إلى مشتق غير مقيد لمشاهد بعينها يرفضها النموذج instruct. وجود تثبيتَي نموذجَين على نفس Ollama هو النمط المعتاد.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'واجهات العمل الإبداعي',
        content:
          '**واجهة الدردشة التي تكتب فيها تهم بقدر أهمية النموذج.** ثلاث واجهات هي خيارات موثوقة لسير عمل الكتابة الإبداعية في 2026؛ اختر وفقاً لشكل سير العمل.',
        items: [
          '**Open WebUI** — الخيار متعدد الأغراض. واجهة بنمط ChatGPT، تبديل النموذج بنقرة، بطاقات الشخصيات عبر موجّهات النظام، تحميل المستندات للسياق. الأفضل للعمل النثري المكثف حيث يتلاءم تنسيق الدردشة مع سير كتابتك.',
          '**SillyTavern** — خيار لعب الأدوار والحوار. نظام بيئي لبطاقات الشخصيات (مواصفة Tavern v2)، إدارة الشخصيات، دفاتر المعرفة لبناء العوالم، دردشة جماعية للمشاهد متعددة الشخصيات. الأفضل للعمل المدفوع بالحوار والمشاريع الطويلة المتمحورة حول الشخصيات أو العوالم. يتناسب جيداً مع Command A+ والمشتقات غير المقيدة.',
          '**Agnai وRisuAI** — بدائل أخف من SillyTavern. مجموعات ميزات أخف، بدء تشغيل أبسط، تخصيص أقل. اختر عندما يبدو SillyTavern أكثر مما تحتاجه في سير عملك.',
          '**واجهة سطر أوامر Ollama البسيطة وأي محرر نصوص** — الخيار الأدنى. `ollama run llama3.3:70b` وأمرر المشاهد عبر الطرفية إلى مستند المسودة. تفقد السياق المستمر للشخصية لكن تكسب تركيز الكاتب.',
          'للمقارنة المباشرة للواجهات المتمحورة حول لعب الأدوار، انظر [SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة لعب أدوار محلية](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الصياغة والتحرير يتطلبان واجهات مختلفة. استخدم SillyTavern للتوليد (صوت الشخصية، عمل المشاهد)، ثم صدّر الدردشة إلى محرر نصوص عادي للمراجعة. التحرير داخل نافذة الدردشة يُرسّخ عادة "طلب النموذج لإصلاح النثر" بدلاً من المراجعة التي يقودها الكاتب — خطر مهاري طويل الأمد.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'القرار: أي نموذج يناسب عملك',
        content:
          '**خمسة أسئلة، بالترتيب، تقود معظم الكتّاب إلى الاختيار الصحيح.**',
        columns: ['وضعك', 'الاختيار'],
        rows: [
          { 'وضعك': 'لدي 48 GB+ من VRAM وأريد نموذجاً للجميع', 'الاختيار': 'Llama 3.3 70B (instruct) + Hermes 3 (غير مقيد) على نفس Ollama' },
          { 'وضعك': 'لدي GPU بسعة 24 GB أو Mac بذاكرة 32 GB وأريد افتراضياً متيناً', 'الاختيار': 'Qwen3 32B' },
          { 'وضعك': 'أصوغ رواية — الاستمرارية الطويلة هي الأولوية', 'الاختيار': 'Mistral Large (أو Mistral La Plateforme على البنية الأوروبية إذا لم يكفِ الجهاز المحلي)' },
          { 'وضعك': 'عملي مكثف جداً بالحوار — أصوات الشخصيات يجب أن تبقى متميزة', 'الاختيار': 'Command A+ (أو Llama 3.3 70B كبديل أخف)' },
          { 'وضعك': 'أكتب شعراً أو نظماً أو نثراً غنائياً', 'الاختيار': 'Yi-1.5 34B' },
          { 'وضعك': 'النموذج instruct يرفض المشاهد التي أحتاج لكتابتها', 'الاختيار': 'Hermes 3 (قاعدة Llama 3.3) أو Dolphin 3.0 — احتفظ بنسخة instruct مثبتة للعمل غير الناضج' },
          { 'وضعك': 'أريد البدء بنموذج واحد والتكيف', 'الاختيار': 'Qwen3 32B — يغطي معظم سير العمل على جهاز للمستهلكين؛ انتقل عندما يصبح نوع مهمة ما هو الجزء الجوهري' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر Qwen3 32B افتراضياً إذا كان لديك GPU بسعة 24 GB؛ Llama 3.3 70B إذا كان لديك 48 GB+؛ Mistral Large للعمل بطول الرواية؛ Command A+ للحوار؛ Yi-1.5 للشعر؛ Hermes/Dolphin للمشاهد التي ترفضها نماذج instruct.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B هو نموذج البداية الصحيح لمعظم الكتّاب. انتقل إلى أحد المتخصصين عندما يصبح نوع مهمة بعينها (طويل، حوار، شعر، مشاهد ناضجة) هو الاختناق. وجود تثبيتَين (instruct + غير مقيد) على نفس الجهاز لا يكلف شيئاً — كلاهما يمكن أن يكون في Ollama وتبدّل بينهما مشهداً مشهداً.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'معظم الكتّاب يفكرون كثيراً في النموذج وقليلاً في الموجّه. موجّه نظام مُعدّ جيداً مع ملاحظات الشخصية ونماذج الصوت ووجهة النظر الصريحة يصنع أكثر لجودة المخرجات من التبديل بين Qwen3 وLlama 70B. انظر [التوجيه بالشخصية](/ar/prompt-engineering/persona-prompting) للبنية الموجّهة التي تحسّن المخرجات الإبداعية باستمرار.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة عند اختيار واستخدام النماذج المحلية للكتابة الإبداعية',
        items: [
          '**الخطأ 1: مطاردة النموذج الأكبر في المعايير.** درجات الكتابة الإبداعية ترتبط ارتباطاً ضعيفاً بتصنيفات المعايير العامة. Yi-1.5 34B يتفوق على Llama 3.3 70B في الشعر؛ Command A+ يتفوق على كليهما في الحوار. اختر حسب نوع المهمة لا حسب الترتيب.',
          '**الخطأ 2: استخدام إعدادات أخذ عينات بنمط الكود.** الحرارة 0.2–0.4 تنتج نثراً مسطحاً ومتوقعاً. الكتابة الإبداعية تتطلب 0.8–1.1 مع top-p 0.9–0.95. الإعدادات الافتراضية لمعظم واجهات الدردشة مضبوطة للأسئلة والأجوبة، لا للنثر.',
          '**الخطأ 3: البقاء مع نموذج instruct والاستسلام عند الرفض.** نسخة instruct ترفض مشاهد صوّرتها صراحةً خيالاً؛ المشتق غير المقيد من نفس النموذج الأساسي يكتبها. تثبيتان في Ollama هو الحل.',
          '**الخطأ 4: موجّهات النظام الضعيفة.** "أنت مساعد مفيد" هو أسوأ موجّه ممكن للعمل الإبداعي. موجّه نظام بملاحظات الشخصية ونماذج الصوت ووجهة النظر والزمن الصرفي والنبرة يصنع أكثر لجودة المخرجات من أي تغيير في النموذج. اجمع مع [التوجيه السلبي](/ar/prompt-engineering/negative-prompting) لتحديد ما لا يُفعل.',
          '**الخطأ 5: التحرير داخل نافذة الدردشة.** التوليد في الدردشة جيد؛ التحرير في الدردشة يُدرّب عادة "طلب النموذج لإصلاح النثر" بدلاً من مراجعته بنفسك. صدّر المسودة إلى محرر نصوص للمراجعة؛ صوت الكاتب يتقوى حين لا يكون النموذج في الحلقة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'أكبر خطر مهاري مع الذكاء الاصطناعي الإبداعي هو الإسناد الخارجي للمراجعة. التوليد هو العمل الميكانيكي الذي يستفيد من النموذج؛ المراجعة هي الجزء الذي يجعل النثر نثرك أنت. الكتّاب الذين يتركون النموذج يراجع يفقدون صوتهم بسرعة — حتى حين لا يستطيعون تحديد أي سطر تغيّر.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[بطاقات نماذج Hugging Face لـ Llama 3.3 وQwen3 وMistral Large وCommand A+ وYi-1.5](https://huggingface.co/) — توثيق رسمي للنماذج والتراخيص.',
          '[Hermes 3 (NousResearch) GitHub وبطاقة النموذج](https://huggingface.co/NousResearch) — ضبط دقيق غير مقيد مبني على Llama 3.3.',
          '[بطاقات نماذج Dolphin 3.0 (Cognitive Computations)](https://huggingface.co/cognitivecomputations) — ضبط دقيق غير مقيد على نماذج أساسية متعددة.',
          '[مكتبة نماذج Ollama](https://ollama.com/library) — النماذج المتاحة وخيارات التكميم ومؤشرات توافق استدعاء الأدوات.',
          '[توثيق SillyTavern](https://docs.sillytavern.app/) — مواصفة بطاقات الشخصيات ونظام الشخصيات وميزات الدردشة الجماعية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما نموذج LLM المحلي الأفضل لكتابة الخيال في 2026؟',
            a: 'Llama 3.3 70B هو أفضل خيار شامل عندما يتيح الجهاز (~42 GB VRAM بتكميم Q4_K_M). على أجهزة 24 GB، Qwen3 32B هو الافتراضي الأخف مع فجوة جودة صغيرة في العمل النثري المكثف. للاستمرارية الطويلة (الروايات)، سياق 128K لـMistral Large هو المميز. اختر حسب نوع المهمة: معظم الكتّاب يستفيدون أكثر من المتخصص المناسب عوضاً عن مطاردة النموذج الأكبر.',
          },
          {
            q: 'ما نموذج LLM المحلي غير المقيد ومتى أستخدمه؟',
            a: 'النموذج غير المقيد هو ضبط دقيق لنموذج أساسي موجود (عادةً Llama 3.3 أو Qwen3) حيث أُزيلت طبقة أمان RLHF التي تنتج الرفضيات في الطلبات الناضجة أو المعقدة أخلاقياً. يتبع النموذج الموجّه بدلاً من الرفض. استخدم المشتقات غير المقيدة (Hermes 3 وDolphin 3.0) للخيال الناضج ومشاهد الصراع والكتابة الدقيقة تاريخياً أو أي سير عمل يرفض فيه النموذج المضبوط المشاهد التي صوّرتها خيالاً. لا يزال الكاتب هو المؤلف؛ الأداة ببساطة تتوقف عن الحيلولة.',
          },
          {
            q: 'ما الحرارة التي يجب أن أستخدمها للكتابة الإبداعية؟',
            a: 'الحرارة 0.8–1.1 هي نطاق الكتابة الإبداعية، مع top-p 0.9–0.95. الحوار المتسق يتطلب 0.7–0.85؛ النثر الغنائي والشعر يتطلبان 1.0–1.2؛ الخيال السريالي أو الأدبي يتطلب 1.1–1.3. الإعدادات الافتراضية لمعظم واجهات الدردشة (غالباً 0.7 مع top-p 0.9) مضبوطة للأسئلة والأجوبة وتنتج نثراً مسطحاً في الطلبات الإبداعية. اختبر على مشهد قصير بثلاثة إعدادات واختر ما يجعل النموذج يبدو أكثر حيوية دون فقدان الطلب.',
          },
          {
            q: 'هل النماذج المحلية للكتابة الإبداعية جيدة مثل ChatGPT أو Claude؟',
            a: 'لمعظم الطلبات، نعم — قريبة بما يكفي لتهيمن مزايا الخصوصية والتكلفة. نماذج السحابة الحديثة لا تزال تتصدر في أصعب المهام الإبداعية (تماسك الصياغة الطويلة فوق 50K رمز، المراجع الثقافية الغامضة جداً، اللغات النادرة). لجلسة خيال أو لعب أدوار نموذجية، كاتب ضبط إعدادات الأخذ بالعينات على Llama 3.3 70B أو Qwen3 32B لن يرى فجوات جودة متسقة مقارنةً بـGPT-5 أو Claude. النماذج التي تخسر هي تلك التي تتلقى المعاملة بـ"الحرارة 0.7 وموجّه نظام عام" — هذا يخسر أمام أي نموذج سحابي.',
          },
          {
            q: 'هل يستطيع النموذج المحلي كتابة رواية كاملة؟',
            a: 'يمكنه المساعدة في صياغتها. Mistral Large بسياق 128K يمكنه الاحتفاظ بمسودة 50,000 كلمة في الذاكرة؛ Llama 3.3 70B وQwen3 32B بسياق 32K يحتاجان للصياغة قسماً قسماً. الاختناق ليس قدرة النموذج — إنه بنية الكاتب (مخطط وبيبليا الشخصيات ودفتر المعرفة) التي يستخدمها النموذج للحفاظ على الاستمرارية. بدونها، حتى Mistral Large ينحرف. بها، أي من أفضل النماذج يصمد للعمل بطول الرواية.',
          },
          {
            q: 'هل تنتج النماذج غير المقيدة محتوى غير قانوني؟',
            a: 'لا أكثر من النماذج المضبوطة. كلاهما ينتج النص الذي يطلبه الموجّه؛ النماذج غير المقيدة أكثر استعداداً للتفاعل مع الموضوعات الناضجة التي ترفضها طبقة أمان النموذج المضبوط. تقع المسؤولية القانونية على الكاتب والنشر، لا على النموذج. قانون الذكاء الاصطناعي الأوروبي و§184/§184c من StGB الألماني وقانون الفحش الأمريكي تغطي فئات محتوى بعينها بصرف النظر عن طريقة التوليد. الاستضافة المحلية لا تغير القانون؛ تغير من يرى المسودة.',
          },
          {
            q: 'هل SillyTavern مخصص فقط للعب الأدوار للبالغين؟',
            a: 'لا. SillyTavern هي واجهة متمحورة حول الدردشة مع بطاقات شخصيات وإدارة شخصيات ودفاتر معرفة — مفيدة لأي عمل مكثف بالحوار أو مدفوع بالشخصيات. كثير من الكتّاب يستخدمونها لصياغة الخيال بدون لعب أدوار (مشاهد متعددة الشخصيات، اتساق الأسلوب في المشاريع الطويلة). النظام البيئي لبطاقات الشخصيات يتضمن محتوى للبالغين لكنه لا يقتصر عليه؛ نفس الواجهة تعمل للخيال الأدبي والسيناريوهات وعمل سرد الألعاب.',
          },
          {
            q: 'كيف تختلف الكتابة الإبداعية المحلية عن مهام الكود؟',
            a: 'في إعدادات الأخذ بالعينات وبنية الموجّه. الكود يتطلب حرارة 0.2–0.4 ومخرجات حتمية ومخرجات منظمة (JSON وكود) وقيوداً صريحة في الموجّه. الكتابة الإبداعية تتطلب حرارة 0.8–1.1 ومخرجات أكثر حرية وتنسيق نثري وموجّهات نظام أغنى (صوت الشخصية ووجهة النظر والنبرة وقواعد الأسلوب الأدبي). نفس النموذج — Llama 3.3 70B يخدم كليهما — ينتج مخرجات مختلفة جذرياً تبعاً لهذه الإعدادات. موجّه بنمط الكود على نموذج إبداعي ينتج مخرجاً مسطحاً؛ موجّه إبداعي على نموذج كود ينتج كوداً مهلوساً.',
          },
          {
            q: 'أي نموذج محلي لديه أقل "علامات الذكاء الاصطناعي"؟',
            a: 'علامات الذكاء الاصطناعي — عبارات مثل "قشعريرة اجتاحت ظهره" و"نسيج" و"التعمق" وملخصات الانتقال بنمط ChatGPT — أكثر شيوعاً في النماذج instruct الأصغر. Llama 3.3 70B وQwen3 32B لديهما علامات أقل من النماذج دون 20B. Hermes 3 لديه الأقل في هذه المجموعة: تدريب أنماط رفض RLHF كان أيضاً حيث أُدخلت كثير من الانتقالات الصياغية، وإزالته تُزيلهما معاً. الرافعة الأعلى تأثيراً لتقليل العلامات هي موجّه النظام مع أمثلة سلبية، لا النموذج.',
          },
          {
            q: 'كيف أتجنب الصورة النمطية "قشعريرة اجتاحت ظهره"؟',
            a: 'موجّه النظام مع أمثلة سلبية هو الرافعة الأعلى تأثيراً — قائمة صريحة بـ8–12 عبارة محظورة. خفّض الحرارة قليلاً (0.85–0.95 بدلاً من 1.1) لتقليل لجوء النموذج إلى اللغة المخزنة. معاقبة التكرار 1.1 وحدها لا تلتقط هذا — العبارات ليست تكرارات دقيقة للرموز. معاقبة DRY (مضاعف 0.8، قاعدة 1.75) تلتقطها على مستوى n-gram بين المشاهد. تمرير مراجعة يدوية هو الفلتر النهائي. انظر [التوجيه السلبي](/ar/prompt-engineering/negative-prompting) للبنية الموجّهة التي تُزيل الصور النمطية باستمرار.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة لعب أدوار محلية (2026)](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة مباشرة للواجهات الثلاث المتمحورة حول لعب الأدوار مع النماذج المذكورة أعلاه.',
          '[موجّهات LLM المحلية لكتّاب الخيال: قوالب وتقنيات](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — قوالب موجّهات جاهزة للنسخ لتطوير الشخصيات والحوار وبناء العوالم وسير عمل المراجعة.',
          '[نماذج LLM المحلية غير المقيدة للكتابة الإبداعية: الأخلاق والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) — معالجة شاملة لمتى تكون المشتقات غير المقيدة أدوات إبداعية مشروعة وأين الحدود القانونية والأخلاقية.',
          '[الحرارة وTop-P: تحكم في إبداعية الذكاء الاصطناعي](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) — الجانب الهندسي لمعاملات الأخذ بالعينات؛ أعمق مما في ملخص هذا الدليل.',
          '[التوجيه السلبي](/ar/prompt-engineering/negative-prompting) — تحديد ما لا يجب فعله في الموجّه؛ مُضاعف قوة لموجّهات النظام في العمل الإبداعي.',
          '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) — الدليل الشامل لمشهد النماذج؛ مفيد عندما تريد الاستكشاف ما وراء النماذج الستة للكتابة الإبداعية أعلاه.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل نماذج LLM المحلية للكتابة الإبداعية 2026: الخيال والحوار وبناء العوالم',
      description: 'مقارنة 6 نماذج محلية للكتابة الإبداعية: Llama 3.3 وQwen3 وMistral Large وCommand A+ وYi-1.5 والمتغيرات غير المقيدة. اختُبرت على أكثر من 50 طلباً إبداعياً.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-local-llm-creative-writing-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-24',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-07-13',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM: 소설, 대화, 세계관 구축',
    seoTitle: '2026년 창작 글쓰기 로컬 LLM 비교: 6가지 모델',
    intro:
      '창작 글쓰기는 로컬 LLM이 단순히 프라이버시와 비용 측면에서만 앞서는 것이 아니라 진정한 가치를 발휘하는 작업입니다. 2026년 최고의 오픈 웨이트 인스트럭션 튜닝 및 비검열 모델인 Llama 3.3 70B, Qwen3 32B, Mistral Large, Command A+, Yi-1.5 34B, 그리고 비검열 파생 모델 Hermes/Dolphin은 대부분의 프롬프트에서 최첨단 클라우드 모델과 대등한 소설, 대화, 세계관 구축 결과물을 생성합니다. 차이는 음성 일관성, 어두운 주제나 성인 소재 처리 의지, 그리고 지시 사항 자연스러운 준수 능력에 있습니다. 이 가이드는 50개 이상의 소설, 대화, 시, 세계관 구축 창작 프롬프트에서 6가지 모델을 테스트하며, 각 모델에 필요한 온도 및 top-p 값을 함께 제공합니다.',
    metaDescription:
      '창작 글쓰기를 위한 로컬 모델 6가지 비교: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 및 비검열 변형. 50개 이상의 프롬프트에서 테스트 완료.',
    twitterDescription:
      '소설, 대화, 세계관 구축을 위한 로컬 모델 6가지를 50개 이상의 프롬프트에서 테스트했습니다. Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 및 비검열 옵션. 작업 유형별 최종 평가.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command A+',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      '프라이버시, 음성 일관성, 성인 소재 처리 능력이 벤치마크 점수보다 중요한 창작 작업에 로컬 LLM을 활용하는 소설 작가, 시나리오 작가, 게임 디자이너, 세계관 창조자, 롤플레이 애호가.',
    readTime: '12분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 LLM 창작 글쓰기',
    targetKeywords: [
      '창작 글쓰기 로컬 llm 추천',
      '로컬 llm 소설 쓰기',
      '비검열 로컬 llm',
      'llama vs mistral 창작',
      '로컬 모델 대화 생성',
      '로컬 llm 세계관 구축',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B는 2026년 5월 현재 창작 글쓰기를 위한 가장 완성도 높은 로컬 모델입니다 — 탄탄한 음성 일관성, 우수한 지시 사항 준수, 시스템 프롬프트에서 허구로 명시된 경우 어두운 소재도 거부 없이 처리합니다. Qwen3 32B는 24 GB 리그에 최적입니다: 산문 품질은 거의 동등하면서 하드웨어 요구는 더 낮습니다. Mistral Large는 128K 네이티브 컨텍스트로 장편 소설 집필 연속성에서 우위를 보입니다. Command A+는 가장 자연스러운 대화 음성을 보유합니다. Yi-1.5 34B는 시와 서정 산문의 틈새 선택입니다. 인스트럭션 튜닝 모델이 거부하는 작업 흐름에는 Hermes 3(Llama 3.3 기반)와 Dolphin 3.0이 비검열 옵션입니다 — 동일한 아키텍처, RLHF 안전 레이어 제거. 온도 0.8–1.1과 top-p 0.9–0.95가 창작 범위이며, 0.7 이하는 평평한 산문을 만듭니다. 비검열은 비윤리와 동일하지 않습니다 — 모델이 거부하는 대신 프롬프트를 따른다는 의미이며, 작가는 여전히 저자입니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년 창작 글쓰기에 가장 좋은 로컬 LLM은 무엇입니까?',
        answer:
          'Llama 3.3 70B가 가장 완성도 높은 로컬 선택입니다 — 산문, 대화, 세계관 구축에 강하며 긴 세션에서도 음성 일관성이 유지됩니다. 70B가 들어가지 않는 24 GB 하드웨어에서는 Qwen3 32B가 품질 손실이 적은 경량 대안입니다. Mistral Large는 소설 집필을 위한 장문 컨텍스트 선택입니다(128K 기본 컨텍스트). Command A+는 가장 자연스러운 대화 음성을 가지고 있습니다. Yi-1.5 34B는 시와 서정 산문 전문입니다. 인스트럭션 튜닝의 안전 레이어에 막히는 작업 흐름(성인 소설, 갈등 장면, 도덕적으로 복잡한 캐릭터)에는 Hermes 3와 Dolphin 3.0이 동일한 기본 모델에서 RLHF 안전 레이어를 제거한 파생 모델로, 거부하는 대신 프롬프트를 따릅니다. 온도 0.8–1.1과 top-p 0.9–0.95가 창작 범위이며, 코드 스타일 설정(0.2–0.4)은 평평한 산문을 생성합니다.',
        bullets: [
          '전반적 최고: Llama 3.3 70B — 가장 높은 음성 일관성, 지시 사항 준수 우수, 허구로 명시된 경우 어두운 소재도 거부 없이 처리.',
          '24 GB 리그 최고: Qwen3 32B — 산문에서 Llama 70B에 거의 근접한 품질, 하드웨어 요구는 훨씬 낮음.',
          '장편 최고: Mistral Large — 128K 기본 컨텍스트; 맥락과 캐릭터 음성을 잃지 않고 소설 집필 가능.',
          '대화 최고: Command A+ — 캐릭터 간 가장 자연스러운 대화 음성.',
          '시/서정 최고: Yi-1.5 34B — 운문과 스타일화된 산문의 틈새 선택.',
          '인스트럭트 거부 시: Hermes 3(Llama 기반) 또는 Dolphin 3.0 — 비검열, 동일 아키텍처, 프롬프트 준수.',
          '샘플링: 산문에는 온도 0.8–1.1, top-p 0.9–0.95; 정밀한 대화에는 낮게, 초현실/장르 작업에는 높게.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '테스트 방법', anchor: '#how-we-tested' },
      { label: '직접 비교', anchor: '#comparison' },
      { label: '모델별 평가', anchor: '#verdicts' },
      { label: '출력 예시', anchor: '#sample-outputs' },
      { label: '창작 작업을 위한 온도 및 Top-P', anchor: '#sampling' },
      { label: '비검열 모델: 정의', anchor: '#uncensored' },
      { label: '창작 작업을 위한 프론트엔드', anchor: '#frontends' },
      { label: '결정: 모델 선택', anchor: '#decision' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Llama 3.3 70B는 2026년 5월 현재 창작 글쓰기를 위한 가장 완성도 높은 로컬 모델입니다.** 테스트 집합에서 가장 높은 음성 일관성을 보이며, 지시 사항을 잘 준수하고, 시스템 프롬프트에서 작업이 허구로 명시된 경우 어두운 소재도 거부 없이 처리합니다.',
          '**Qwen3 32B는 24 GB 리그의 올바른 선택입니다.** 48 GB+ VRAM 비용 없이 Llama 70B와 거의 동등한 산문 품질을 제공합니다. 대부분의 노트북과 데스크톱의 기본값입니다.',
          '**Mistral Large는 장편 연속성에서 우위를 보입니다.** 128K 기본 컨텍스트; 맥락이나 캐릭터 음성을 잃지 않고 소설 집필이 가능합니다.',
          '**Command A+는 가장 깔끔한 대화 음성을 가지고 있습니다.** 캐릭터 간 가장 자연스러운 대화 리듬; 대화가 작업의 구조적 부분일 때의 선택입니다.',
          '**Yi-1.5 34B는 시와 서정 산문 전문가입니다.** 운문, 스타일화된 산문, 리듬이 중요한 단편 형식 작업의 틈새 선택입니다.',
          '**비검열 파생 모델(Hermes 3, Dolphin 3.0)은 인스트럭션 튜닝 모델이 거부할 때 올바른 선택입니다.** 동일한 기본 모델; RLHF 안전 레이어 제거; 모델이 거부하는 대신 프롬프트를 따릅니다. 성인 소설, 갈등 장면, 도덕적으로 복잡한 캐릭터를 작성할 수 있게 됩니다.',
          '**샘플링은 사람들이 생각하는 것보다 더 중요합니다.** 온도 0.8–1.1과 top-p 0.9–0.95가 창작 범위입니다. 코드 스타일 설정(0.2–0.4)은 평평하고 예측 가능한 산문을 생성합니다. 1.2 이상은 장르/초현실 영역입니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**전반적 최고:** Q4_K_M의 Llama 3.3 70B, ~42 GB VRAM. 이 집합에서 가장 높은 음성 일관성.',
          '**24 GB 리그 최고:** Q4_K_M의 Qwen3 32B, ~20 GB VRAM. 대부분의 사용자를 위한 기본값.',
          '**장편 최고:** Q4_K_M의 Mistral Large, ~75 GB 총 VRAM(무거움). 128K 기본 컨텍스트.',
          '**대화 최고:** Q4_K_M의 Command A+, ~62 GB VRAM. 최고의 캐릭터 음성 분화.',
          '**시 최고:** Q4_K_M의 Yi-1.5 34B, ~21 GB VRAM. 서정 산문 전문가.',
          '**비검열 옵션:** Hermes 3(Llama 3.3 기반, ~42 GB) 및 Dolphin 3.0(다양한 기본 크기, 13–42 GB).',
          '**산문 기본 샘플링:** 온도 0.95, top-p 0.92, repeat penalty 1.1. 작업 유형에 따라 조정.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '테스트 방법: 6가지 모델에서 50개 이상의 창작 프롬프트',
        content:
          '**테스트는 프롬프트 집합, 샘플링 설정, 프론트엔드를 일정하게 유지하고 모델만 변경했습니다.** 소설, 대화, 시, 세계관 구축 작업에서 동일한 50개의 프롬프트; 작업 유형별로 동일한 채점 기준으로 출력물을 평가했습니다.',
        items: [
          '**백엔드:** macOS 및 Linux의 Ollama 0.7+; 모델별 동일한 컨텍스트 제한; 6가지 모델 모두 Q4_K_M 양자화(VRAM이 허용하는 경우 32B–34B 소형 모델에서 Q5_K_M 사용, 채점 기준 점수에서 측정 가능한 차이 없음).',
          '**프론트엔드:** 대부분의 테스트에서 Open WebUI(채팅 형식 작업); 집중적인 대화 및 롤플레이 하위 집합에서 SillyTavern(창작 작가의 실제 사용과 일치).',
          '**프롬프트 집합:** 4가지 작업 유형으로 나뉜 50개의 프롬프트 — 소설(15개: 단편 소설 오프닝, 장면 계속, 묘사적 구절), 대화(15개: 두 캐릭터 간 교환, 그룹 장면, 음성 분화), 시(10개: 자유시, 구조적 형식, 서정 산문), 세계관 구축(10개: 배경 묘사, 파벌 정치, 마법 시스템). 분산을 포착하기 위해 각 프롬프트를 모델당 3회 실행.',
          '**샘플링:** 기본으로 온도 0.95, top-p 0.92, repeat penalty 1.1; 아래 모델별 평가에 작업별 조정 사항 기재.',
          '**채점 기준:** 음성 일관성(캐릭터나 화자가 모든 단락에서 동일하게 들리는가?), 프롬프트 충실도(모델이 지시를 따랐는가, 아니면 자체 장면을 만들었는가?), 산문 품질(리듬, 어휘, 진부한 표현 회피), 의지(모델이 프롬프트에서 명시적으로 허구로 명시한 장면을 거부하거나 순화했는가?).',
          '**정직성 제약:** 점수는 발명된 절대 백분율이 아닌 작업별 상대적 순위로 보고됩니다. "최고 대화"는 3회 실행에서 대화 하위 집합에서 지속적인 1위를 의미하고, "강함"은 상위 3위를 의미하며, "보통"은 해당 기준에서 하나 이상의 경쟁자에게 패배했음을 의미합니다.',
          '모든 모델에서 창작 출력을 향상시키는 프롬프팅 기법은 [온도 및 top-p 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity) 및 [페르소나 프롬프팅](/ko/prompt-engineering/persona-prompting)을 참조하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '창작 글쓰기 벤치마크는 본질적으로 주관적입니다. 위의 채점 기준(음성 일관성, 프롬프트 충실도, 산문 품질, 의지)은 반복 가능한 점수에 가장 근접한 것이지만, 동일한 출력을 평가하는 두 독자는 산문 품질에 대해 동의하는 것보다 더 자주 의견이 일치하지 않을 것입니다. 평가를 자신의 작업에서 테스트해야 할 초기 가설로 취급하십시오.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '직접 비교: 창작 글쓰기 작업에서의 6가지 로컬 모델',
        content:
          '**Llama 3.3 70B는 가장 넓은 작업 집합에서 선두를 차지하며; 더 작고 전문화된 모델들이 각각 한두 카테고리에서 우위를 보입니다.** 전반적인 순위가 아닌 작업 유형별로 선택하십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B는 가장 강력한 전반적 창작 모델이고, Qwen3 32B는 경량 대안이며, Mistral Large는 장편에서 우세하고, Command A+는 대화에서 우세하며, Yi-1.5는 시에서 우세하고, Hermes/Dolphin은 다른 모델이 거부하는 장면을 처리합니다.',
          },
          {
            type: 'plain-terms',
            text: '모든 면에서 최고인 모델은 없습니다. 하드웨어가 허용한다면 Llama 3.3 70B가 안전한 기본값입니다. Qwen3 32B는 24 GB GPU에서 스마트한 선택입니다. 한 가지 작업 유형이 작업의 구조적 부분이 될 때는 전문 모델을 선택하십시오(소설에는 Mistral, 대화에는 Command A+, 시에는 Yi-1.5). 인스트럭션 튜닝 모델이 작성해야 할 장면을 거부하는 경우 비검열 파생 모델을 선택하십시오.',
          },
        ],
        columns: ['모델', '크기', 'VRAM (Q4_K_M)', '소설', '대화', '시', '세계관 구축', '최적 용도'],
        rows: [
          { '모델': 'Llama 3.3 70B', '크기': '70B', 'VRAM (Q4_K_M)': '~42 GB', '소설': '최고', '대화': '강함', '시': '강함', '세계관 구축': '최고', '최적 용도': '전반적 최고; 하드웨어가 허용하면 기본값' },
          { '모델': 'Qwen3 32B', '크기': '32B', 'VRAM (Q4_K_M)': '~20 GB', '소설': '강함', '대화': '강함', '시': '보통', '세계관 구축': '강함', '최적 용도': '24 GB 리그 기본값; Llama 70B 대비 작은 품질 차이' },
          { '모델': 'Mistral Large', '크기': '123B', 'VRAM (Q4_K_M)': '~75 GB', '소설': '강함 (장편)', '대화': '강함', '시': '보통', '세계관 구축': '강함', '최적 용도': '장편 연속성, 128K 컨텍스트' },
          { '모델': 'Command A+', '크기': '비공개', 'VRAM (Q4_K_M)': '~62 GB', '소설': '강함', '대화': '최고', '시': '보통', '세계관 구축': '강함', '최적 용도': '집중적인 대화 작업, 그룹 장면' },
          { '모델': 'Yi-1.5 34B', '크기': '34B', 'VRAM (Q4_K_M)': '~21 GB', '소설': '보통', '대화': '보통', '시': '최고', '세계관 구축': '보통', '최적 용도': '시, 서정 산문, 스타일화된 작업' },
          { '모델': 'Hermes 3 / Dolphin 3.0', '크기': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', '소설': '기본과 동일', '대화': '기본과 동일', '시': '기본과 동일', '세계관 구축': '기본과 동일', '최적 용도': '인스트럭션 튜닝 모델이 거부하는 장면' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '두 모델 설정이 일반적인 패턴입니다: 메인 모델로 Llama 3.3 70B(또는 Qwen3 32B), 인스트럭트 버전이 거부하는 장면을 위해 같은 Ollama에 Hermes 3 파생 모델 추가. 장면별로 전환하십시오; 두 모델 모두 충돌 없이 동시에 `ollama list`에 있을 수 있습니다.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: '모델별 평가',
        items: [
          '**Llama 3.3 70B** — 전반적 최고. 테스트 집합에서 가장 높은 음성 일관성; 캐릭터가 긴 장면에서 동일한 말하기 패턴을 유지합니다. 지시 사항을 잘 준수합니다 — 시스템 프롬프트가 POV, 어조, 장르 관습을 지정하면 Llama 3.3이 이를 존중합니다. 프롬프트가 작업을 허구로 명시하면 어두운 소재(폭력, 슬픔, 도덕적으로 회색인 캐릭터)를 거부 없이 처리합니다. 한계: 긴 구절이 때때로 일반적인 "문학적" 목소리로 흘러가고, 동일 계열 소형 모델(8B)은 이 강점을 잃습니다.',
          '**Qwen3 32B** — 24 GB 리그 최고 선택. Llama 3.3 70B보다 약간 낮은 음성 일관성이지만, 산문이 많은 작업에서 대부분의 작가가 알아채지 못할 정도로 차이가 작습니다. 소형 모델 중 지시 사항 준수가 가장 강합니다. 한계: 시와 스타일화된 산문이 눈에 띄게 뒤처지며, 이러한 작업에는 Yi-1.5로 전환하십시오.',
          '**Mistral Large** — 최고 장편 연속성. 128K 컨텍스트 창은 50,000단어 초안이 잘림 없이 들어간다는 것을 의미하며; 모델이 여러 챕터에 걸쳐 캐릭터 세부 사항, 플롯 스레드, 세계 규칙을 유지합니다. 한계: 이 집합에서 하드웨어 기준이 가장 높습니다(Q4_K_M에서 ~75 GB); 긴 입력에서 토큰당 속도가 느려집니다. 로컬 하드웨어가 제약인 경우 EU 인프라에서 Mistral La Plateforme을 사용하십시오.',
          '**Command A+** — 최고 대화. 교환에서 유지되는 뚜렷한 캐릭터 음성; 그룹 장면(3인 이상)이 다른 모델에서 흔한 "모두 같은 소리" 실패 모드 없이 가독성을 유지합니다. 한계: 대화 리듬 사이의 산문 단락은 유능하지만 서정적이지 않습니다; 순수하게 묘사적인 구절에서는 Llama 3.3이 우위를 차지합니다.',
          '**Yi-1.5 34B** — 최고 시 및 서정 산문. 리듬 인식이 있고, 구조적 형식(소네트, 빌라넬, 하이쿠)에 익숙하며, 더 큰 일반 모델보다 더 잘 견디는 시를 생성합니다. 한계: 장편 소설은 유능하지만 강점이 아닙니다; 서사 작업에는 Llama 3.3 또는 Qwen3을 선택하십시오.',
          '**Hermes 3(Llama 3.3 기반) 및 Dolphin 3.0** — 비검열 파생 모델. Llama 3.3 70B와 동일한 아키텍처 및 기본 가중치; RLHF 안전 레이어가 파인 튜닝 중에 제거됩니다. 모델이 성인 콘텐츠를 거부하거나 순화하는 대신 프롬프트를 따릅니다. 성숙하지 않은 프롬프트에서의 품질은 기본 모델과 동일합니다; 차이는 인스트럭션 튜닝 버전이 거부하는 프롬프트에서만 나타납니다. 작업이 필요할 때(성인 소설, 폭력적인 장면, 도덕적으로 복잡한 캐릭터) 사용하고, 다른 경우에는 인스트럭션 튜닝 기본 모델을 사용하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '음성 일관성은 대부분의 작가가 초기 모델 평가에서 과소평가하는 지표입니다. 단일 단락에서 탁월한 산문을 생성하지만 5번째 단락에서 캐릭터의 말하기 패턴을 잃는 모델은, 20개의 단락에서 일관된 음성으로 유능한 산문을 생성하는 모델보다 나쁩니다. 단일 출력의 품질만이 아니라 긴 세션에서 연속성을 테스트하십시오.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: '출력 예시: 세 가지 모델, 하나의 프롬프트',
        content:
          '**공유 프롬프트:** "탐정이 새벽 2시에 빗속에 흠뻑 젖은 카페테리아에 들어가는 누아르 장면을 열어 주세요." 동일한 온도(0.95), 동일한 top-p(0.92), 동일한 repeat penalty(1.1) — 모델만 변경됩니다. 아래 발췌문은 세 번의 실행에서 이 프롬프트 유형에 대한 각 모델의 일반적인 출력을 대표합니다.',
        items: [
          '**Llama 3.3 70B** — "문 위의 작은 종이 두 번 울리고 조용해졌습니다. 빗물이 내 코트를 따라 흘러내려, 세 걸음도 채 떼기 전에 리놀레움에 웅덩이를 만들었습니다. 카운터의 여자는 눈을 들지 않았습니다. 구석 칸막이의 두 트럭 운전사는 커피를 공부하고 있었습니다. 새벽 두 시에 그런 곳에 있는 사람은 누구도 눈에 띄기를 원하지 않았고, 저도 마찬가지였습니다." — *구체적인 감각적 정박, 능동 음성, 불필요한 단어 없음. 세 문장으로 사회적 장면이 확립됩니다.*',
          '**Qwen3 32B** — "문을 밀고 담배 연기와 기름 냄새의 벽으로 들어갔습니다. 가게는 반쯤 비어 있었고 완전히 조용했습니다 — 사람들이 말없이 서로를 내버려 두기로 합의한 것 같은 종류의 침묵이었습니다. 천장 선풍기가 돌고 있었습니다. 웨이트리스가 나를 보지 않고 카운터 반대쪽 끝에서 컵을 채우고 있었습니다." — *행동 전 관찰적 설정; 효율적인 분위기. Llama 3.3보다 약간 더 구조적이지만 똑같이 깔끔합니다.*',
          '**Yi-1.5 34B** — "빗소리가 아무도 기억하고 싶지 않은 밤의 마지막 시간을 세는 메트로놈의 규칙성으로 차양을 두드렸습니다. 안에서 형광등은 라미네이트 바닥에 냉혹한 산술을 비추었습니다 — 모든 얼룩, 모든 흠집, 그 장소가 엔트로피와의 논쟁에서 지고 있는 매년. 가까운 끝에 있는 의자를 찾아 이미 무언가와 화해한 사람처럼 앉았습니다." — *첫 번째 절부터 은유; 문장 리듬 변화; 더 밀도 높은 이미지. Yi-1.5의 시적 배경이 산문에서도 드러납니다.*',
        ],
        columns: ['모델', '일반적인 오프닝', '일반적인 묘사 패턴'],
        rows: [
          { '모델': 'Llama 3.3 70B', '일반적인 오프닝': '먼저 행동, 즉각적인 감각적 세부 사항', '일반적인 묘사 패턴': '구체적이고 물리적; 추상 명사 회피; 사회적으로 정박됨' },
          { '모델': 'Qwen3 32B', '일반적인 오프닝': '캐릭터 행동 전 환경 관찰', '일반적인 묘사 패턴': '효율적; 사회적/대기적 세부 사항; 약간의 구조적 신호' },
          { '모델': 'Yi-1.5 34B', '일반적인 오프닝': '첫 번째 절부터 은유 또는 직유', '일반적인 묘사 패턴': '추상적 이미지; 리듬 변화; 더 밀도 높음; 때때로 화려함' },
          { '모델': 'Command A+', '일반적인 오프닝': '캐릭터 음성 또는 대화에 가까운 오프닝', '일반적인 묘사 패턴': '대화적; 독특하고 뚜렷한 목소리; 독립적인 묘사는 약함' },
          { '모델': 'Mistral Large', '일반적인 오프닝': '배경 단락; 더 느린 시작', '일반적인 묘사 패턴': '균일하고 통제됨; 긴 구절에서 일관성; 약간 일반적' },
        ],
        callouts: [
          {
            type: 'note',
            text: '이 발췌문은 여러 번의 실행에서 각 모델의 경향을 보여주며, 선별된 최고 예시가 아닙니다. Yi-1.5 34B의 "엔트로피와의 논쟁에서 지고 있는" 표현은 세 번의 실행 중 하나에서 나타났으며, 나머지 두 번은 더 직접적이었습니다. 모든 모델을 동일한 프롬프트에서 2–3번 실행하고, 첫 번째 출력만이 아니라 장면에 가장 잘 맞는 것을 선택하십시오.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: '창작 작업을 위한 온도 및 Top-P',
        content:
          '**창작 글쓰기는 코드보다 더 높은 샘플링 온도가 필요합니다.** 대부분의 채팅 인터페이스에 함께 제공되는 기본 샘플링 매개변수는 산문이 아닌 질문 응답을 위해 조정되었습니다 — 온도 0.7과 top-p 0.9는 창작 프롬프트에서 평평하고 예측 가능한 출력을 생성합니다.',
        items: [
          '**산문 기본값:** 온도 0.95, top-p 0.92, repeat penalty 1.1. 대부분의 소설, 대화, 세계관 구축 작업의 시작점입니다. 여기서 작업별로 조정하십시오.',
          '**정밀한 대화:** 온도 0.7–0.85, top-p 0.9. 낮은 온도는 교환에서 캐릭터 음성 일관성을 유지합니다; 높은 값은 캐릭터에서 벗어난 삽입어를 생성합니다.',
          '**서정 산문 및 시:** 온도 1.0–1.2, top-p 0.95. 높은 온도는 운문이 작동하게 하는 예상치 못한 단어 선택을 해제합니다.',
          '**초현실 또는 장르 소설:** 온도 1.1–1.3, top-p 0.95–0.98. 모델이 덜 일반적인 이미지 및 은유 조합을 생성하도록 유도합니다.',
          '**플롯 주도 장면(행동, 미스터리, 반전):** 온도 0.85–0.95, top-p 0.9. 참신함보다 더 많은 지시 사항 준수가 필요합니다.',
          '**Repeat penalty 1.1–1.15**가 대부분의 창작 작업에 올바른 범위입니다. 높을수록(1.2+) 반복이 의도적으로 문체적인 경우에도 모델이 단어 반복을 피하게 되고; 낮을수록(1.0–1.05) 긴 장면에서 모델이 루프에 빠지게 됩니다.',
          '**min_p (0.05–0.1):** 상위 토큰 확률에 상대적인 확률 임계값을 동적으로 조정하는 top-p의 최신 대안입니다. 높은 top-p 값의 비일관성 위험 없이 창작 프롬프트에서 top-p 0.9보다 더 허용적입니다. 인터페이스가 노출하는 경우 2026년 SillyTavern 및 KoboldCpp 사용자에게 권장되는 기본값이며; Ollama는 그대로 전달하고, Open WebUI 0.5+는 고급 설정에서 노출합니다.',
          '**DRY 반복 패널티(승수 0.8, 기본 1.75, 허용 길이 2):** 표준 repeat_penalty가 감지하지 못하는 구절 수준의 반복을 포착합니다. repeat_penalty가 개별 토큰을 추적하는 반면, DRY는 n-gram 시퀀스를 추적합니다 — 따라서 장면 1의 상투적인 표현 "등골이 오싹했다"가 장면 4에서 다시 나타나려 할 때 억제됩니다. 모델이 자체 출력을 본 후 거기서 끌어내기 시작하는 긴 세션의 창작 작업에 유용합니다.',
          '**현대 창작 기본값(2026):** 온도 0.95, min_p 0.05, DRY 승수 0.8(기본 1.75, 허용 길이 2). 프론트엔드가 min_p 또는 DRY를 노출하지 않으면 top-p 0.92가 여전히 잘 작동합니다 — 이것들은 고전 설정에 대한 점진적 개선이지, 필수 대체품이 아닙니다.',
          '이러한 매개변수가 왜 중요하고 어떻게 상호작용하는지에 대한 더 완전한 처리는 [온도 및 top-p 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '모델당 짧은 단일 장면에서 샘플링 설정을 테스트하십시오 — 각 설정에서 세 번의 실행, 그런 다음 프롬프트를 잃지 않고 모델이 가장 생생하게 들리는 온도를 선택하십시오. Llama 3.3 70B에서 작동하는 설정이 Mistral Large나 Yi-1.5에 완벽하게 전달되지는 않습니다; 모델별로 조정하십시오.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: '비검열 모델: 정의와 중요성',
        content:
          '**비검열은 비윤리를 의미하지 않습니다.** 모델의 인스트럭션 튜닝 안전 레이어(RLHF 거부)가 제거되거나 우회되어, 모델이 거부하거나 순화하는 대신 프롬프트를 따른다는 것을 의미합니다. 작가는 여전히 저자이며; 도구가 방해를 멈추는 것입니다.',
        items: [
          '**"비검열"의 기술적 의미.** Hermes 3 및 Dolphin 3.0과 같은 모델은 기본 모델(Llama 3.3, Qwen3)의 조정된 변형으로, 성숙하거나 폭력적이거나 도덕적으로 복잡한 프롬프트에서 거부를 생성하는 포스트 트레이닝 RLHF 단계가 프롬프트를 따르는 파인 튜닝으로 대체되었습니다. 동일한 아키텍처, 동일한 기본 가중치, 다른 포스트 트레이닝.',
          '**창작 작업에서 언제 중요한가.** 성인 소설(성적 장면이 있는 문학 소설, 그래픽한 폭력이 있는 범죄 소설, 공포), 역사적으로 정확한 글쓰기(전쟁, 잔혹 행위, 식민지 시대의 잔인함), 도덕적으로 복잡한 캐릭터(모델이 설득력 있는 악당에게 목소리를 주는 것을 거부할 경우), 인스트럭션 튜닝 모델이 참여하지 않을 롤플레이 시나리오.',
          '**한계.** 프롬프트를 따릅니다 — 잘못 쓴 프롬프트도 포함하여. 인스트럭션 튜닝 모델은 종종 모호한 프롬프트를 출판 가능한 방향으로 부드럽게 합니다; 비검열 모델은 요청한 것 정확히를 제공하며, 때로는 나쁜 경우도 있습니다. 작가의 지시가 더 중요해집니다.',
          '**윤리적 한계.** "모델이 작성할 것"은 실존 인물을 대상으로 하거나, 실제 또는 식별 가능한 개인이 포함된 비동의적 시나리오를 묘사하거나, 작가의 관할권에서 불법인 콘텐츠에 대한 창작 라이선스가 아닙니다. 로컬 호스팅은 법을 바꾸지 않습니다; 초안을 볼 수 있는 사람이 누구인지를 바꿉니다.',
          '**법적 맥락(2026년 5월, 간략하고 비포괄적).** EU AI 법 및 회원국 법률(특히 독일 §184/§184c StGB)은 생성 위치와 관계없이 특정 콘텐츠 범주를 다룹니다. 미국 외설 법은 생성이 아닌 출판에 적용됩니다. 상업 출판의 경우, 초안을 생성한 모델은 관련이 없습니다; 규제되는 것은 출판된 결과물입니다.',
          '**더 광범위한 처리**를 위해 비검열 모델의 윤리, 법적 맥락, 모범 사례는 [창작 글쓰기를 위한 로컬 비검열 LLM: 윤리, 합법성, 모범 사례](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '비검열은 정체성이 아닌 작업 흐름 선택입니다. 많은 작가들이 프로젝트의 대부분에 인스트럭션 튜닝 모델을 사용하고 인스트럭트 버전이 거부하는 특정 장면에 비검열 파생 모델로 전환합니다. 같은 Ollama에 두 가지 모델 설치가 일반적인 패턴입니다.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: '창작 작업을 위한 프론트엔드',
        content:
          '**글을 쓰는 채팅 인터페이스는 모델만큼 중요합니다.** 2026년에 세 가지 프론트엔드가 창작 글쓰기 작업 흐름의 신뢰할 수 있는 옵션입니다; 작업 흐름의 형태에 따라 선택하십시오.',
        items: [
          '**Open WebUI** — 범용 옵션. ChatGPT 스타일 인터페이스, 원클릭 모델 전환, 시스템 프롬프트를 통한 캐릭터 카드, 컨텍스트를 위한 문서 업로드. 채팅 형식이 글쓰기 흐름에 맞는 산문 중심 작업에 최적입니다.',
          '**SillyTavern** — 롤플레이 및 대화 옵션. 캐릭터 카드 생태계(Tavern v2 사양), 페르소나 관리, 세계관 구축을 위한 로어북, 멀티 캐릭터 장면을 위한 그룹 채팅. 대화 중심 작업 및 장편 캐릭터 또는 세계 프로젝트에 최적입니다. Command A+와 비검열 파생 모델과 잘 결합됩니다.',
          '**Agnai 및 RisuAI** — SillyTavern의 경량 대안. 더 가벼운 기능 세트, 더 간단한 첫 실행, 커스터마이징이 적음. SillyTavern이 작업 흐름에 과하게 느껴질 때 선택하십시오.',
          '**일반 Ollama CLI 및 텍스트 편집기** — 최소 옵션. `ollama run llama3.3:70b`를 실행하고 터미널에서 초안 문서로 장면을 파이프합니다. 지속적인 캐릭터 컨텍스트를 잃지만 작가 집중력을 얻습니다.',
          '롤플레이 중심 프론트엔드의 직접 비교는 [SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프론트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '초안 작성과 편집에는 다른 프론트엔드가 필요합니다. 생성에는 SillyTavern을 사용하고(캐릭터 음성, 장면 작업), 그런 다음 검토를 위해 일반 텍스트 편집기로 채팅을 내보내십시오. 채팅 창 내에서 편집하면 작가 주도 검토 대신 "모델에게 산문 수정을 요청하는" 습관이 생기며, 이는 장기적인 기술 위험입니다.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '결정: 작업에 맞는 모델 선택',
        content:
          '**다섯 가지 질문을 순서대로 하면 대부분의 작가가 올바른 선택에 도달합니다.**',
        columns: ['상황', '선택'],
        rows: [
          { '상황': '48 GB+ VRAM이 있고 모든 것을 위한 모델을 원함', '선택': '같은 Ollama에 Llama 3.3 70B(인스트럭트) + Hermes 3(비검열)' },
          { '상황': '24 GB GPU 또는 32 GB Mac이 있고 안정적인 기본값을 원함', '선택': 'Qwen3 32B' },
          { '상황': '소설을 집필 중 — 장편 연속성이 우선순위', '선택': 'Mistral Large (또는 로컬 하드웨어가 부족한 경우 EU 인프라에서 Mistral La Plateforme)' },
          { '상황': '작업이 대화 중심 — 캐릭터 음성이 뚜렷하게 유지되어야 함', '선택': 'Command A+ (또는 경량 대안으로 Llama 3.3 70B)' },
          { '상황': '시, 운문 또는 서정 산문을 씀', '선택': 'Yi-1.5 34B' },
          { '상황': '인스트럭트 모델이 작성해야 할 장면을 거부함', '선택': 'Hermes 3(Llama 3.3 기반) 또는 Dolphin 3.0 — 비성숙한 작업을 위해 인스트럭트 버전을 설치된 상태로 유지' },
          { '상황': '한 모델로 시작해서 반복하고 싶음', '선택': 'Qwen3 32B — 소비자 하드웨어에서 대부분의 작업 흐름을 커버하며; 한 작업 유형이 필수적인 부분이 될 때 전환' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24 GB GPU가 있으면 기본값으로 Qwen3 32B를 선택하고, 48 GB+가 있으면 Llama 3.3 70B를, 소설 길이 작업에는 Mistral Large를, 대화에는 Command A+를, 시에는 Yi-1.5를, 인스트럭트 모델이 거부하는 장면에는 Hermes/Dolphin을 선택하십시오.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B가 대부분의 작가에게 올바른 시작 모델입니다. 특정 작업 유형(장편 형식, 대화, 시, 성숙한 장면)이 병목이 될 때 전문 모델로 이동하십시오. 같은 머신에 두 가지 설치(인스트럭트 + 비검열)를 갖는 것은 비용이 들지 않습니다 — 둘 다 Ollama에 있을 수 있고 장면별로 전환합니다.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '대부분의 작가는 모델에 대해 너무 많이 생각하고 프롬프트에 대해 충분히 생각하지 않습니다. 캐릭터 노트, 음성 샘플, 명시적인 POV가 포함된 잘 작성된 시스템 프롬프트는 Qwen3에서 Llama 70B로 전환하는 것보다 출력 품질에 더 큰 영향을 미칩니다. 창작 출력을 일관되게 향상시키는 프롬프트 구조는 [페르소나 프롬프팅](/ko/prompt-engineering/persona-prompting)을 참조하십시오.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '창작 글쓰기를 위한 로컬 모델 선택 및 사용 시 일반적인 실수',
        items: [
          '**실수 1: 벤치마크에서 가장 큰 모델 추구.** 창작 글쓰기 점수는 일반 벤치마크 순위와 관련성이 낮습니다. Yi-1.5 34B는 시에서 Llama 3.3 70B를 능가하고; Command A+는 대화에서 둘 다를 능가합니다. 전반적인 순위가 아닌 작업 유형별로 선택하십시오.',
          '**실수 2: 코드 스타일 샘플링 설정 사용.** 온도 0.2–0.4는 평평하고 예측 가능한 산문을 생성합니다. 창작 글쓰기는 top-p 0.9–0.95와 함께 0.8–1.1이 필요합니다. 대부분의 채팅 인터페이스의 기본 설정은 산문이 아닌 질문과 답변을 위해 조정되어 있습니다.',
          '**실수 3: 인스트럭트 모델을 고집하다가 거부할 때 포기.** 인스트럭트 버전이 허구로 명시한 장면을 거부하면; 동일한 기본 모델의 비검열 파생 모델이 작성합니다. Ollama에 두 가지 설치가 해결책입니다.',
          '**실수 4: 약한 시스템 프롬프트.** "당신은 도움이 되는 어시스턴트입니다"는 창작 작업에 가능한 최악의 프롬프트입니다. 캐릭터 노트, 음성 샘플, POV, 시제, 어조가 포함된 시스템 프롬프트는 어떤 모델 변경보다 출력 품질에 더 큰 영향을 미칩니다. [네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting)과 결합하여 하지 말아야 할 것(설명 없이, 화려한 산문 없이, "그녀는 느꼈다" 없이)을 지정하십시오.',
          '**실수 5: 채팅 창 내에서 편집.** 채팅에서 생성하는 것은 괜찮습니다; 채팅에서 편집하면 직접 검토 대신 "모델에게 산문 수정을 요청하는" 습관이 생깁니다. 검토를 위해 초안을 텍스트 편집기로 내보내십시오; 모델이 루프에 없을 때 작가의 목소리가 강화됩니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '창작 AI의 가장 큰 기술 위험은 검토를 외부화하는 것입니다. 생성은 모델이 도움이 되는 기계적인 작업이고; 검토는 산문을 자신의 것으로 만드는 부분입니다. 모델이 검토하도록 놔두는 작가는 어떤 줄이 바뀌었는지 지적할 수 없더라도 목소리를 빠르게 잃습니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5에 대한 Hugging Face 모델 카드](https://huggingface.co/) — 공식 모델 문서 및 라이선스.',
          '[Hermes 3(NousResearch) GitHub 및 모델 카드](https://huggingface.co/NousResearch) — Llama 3.3 기반 비검열 파인 튜닝.',
          '[Dolphin 3.0 모델 카드(Cognitive Computations)](https://huggingface.co/cognitivecomputations) — 여러 기본 모델의 비검열 파인 튜닝.',
          '[Ollama 모델 라이브러리](https://ollama.com/library) — 사용 가능한 모델, 양자화 옵션, 앞서 언급한 도구 호출 호환성 플래그.',
          '[SillyTavern 문서](https://docs.sillytavern.app/) — 캐릭터 카드 사양, 페르소나 시스템, 그룹 채팅 기능.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '2026년 소설 쓰기에 가장 좋은 로컬 LLM은 무엇입니까?',
            a: 'Llama 3.3 70B는 하드웨어가 허용할 때 가장 완성도 높은 선택입니다(Q4_K_M에서 ~42 GB VRAM). 24 GB 리그에서는 Qwen3 32B가 산문 중심 작업에서 작은 품질 차이를 보이는 더 가벼운 기본값입니다. 장편 연속성(소설)의 경우 Mistral Large의 128K 컨텍스트가 차별점입니다. 작업 유형별로 선택하십시오: 대부분의 작가는 가장 큰 모델을 추구하는 것보다 올바른 전문 모델에서 더 많은 이익을 얻습니다.',
          },
          {
            q: '로컬 비검열 LLM이란 무엇이고 언제 사용해야 합니까?',
            a: '비검열 모델은 성숙하거나 도덕적으로 복잡한 프롬프트에서 거부를 생성하는 RLHF 안전 레이어가 제거된 기존 기본 모델(일반적으로 Llama 3.3 또는 Qwen3)의 파인 튜닝입니다. 모델이 거부하는 대신 프롬프트를 따릅니다. 성인 소설, 갈등 장면, 역사적으로 정확한 글쓰기, 또는 인스트럭션 튜닝 모델이 허구로 명시한 장면을 거부하는 모든 작업 흐름에 비검열 파생 모델(Hermes 3, Dolphin 3.0)을 사용하십시오. 작가는 여전히 저자이며; 모델이 방해를 멈출 뿐입니다.',
          },
          {
            q: '창작 글쓰기에 어떤 온도를 사용해야 합니까?',
            a: '온도 0.8–1.1이 top-p 0.9–0.95와 함께 창작 글쓰기 범위입니다. 정밀한 대화에는 0.7–0.85가 필요하고; 서정 산문과 시에는 1.0–1.2가 필요하며; 초현실 또는 장르 소설에는 1.1–1.3이 필요합니다. 대부분의 채팅 인터페이스의 기본값(종종 top-p 0.9와 함께 0.7)은 질문과 답변을 위해 조정되어 있으며 창작 프롬프트에서 평평한 산문을 생성합니다. 세 가지 설정으로 짧은 장면에서 테스트하고, 프롬프트를 잃지 않고 모델이 가장 생생하게 들리는 것을 선택하십시오.',
          },
          {
            q: '창작 글쓰기를 위한 로컬 모델이 ChatGPT나 Claude만큼 좋습니까?',
            a: '대부분의 프롬프트에서는 그렇습니다 — 프라이버시와 비용 이점이 지배할 정도로 충분히 가깝습니다. 프론티어 클라우드 모델은 여전히 가장 어려운 창작 작업에서 선두를 차지합니다(50K 토큰 이상의 장편 일관성, 매우 불명확한 문화적 참조, 희귀 언어). 일반적인 소설 또는 롤플레이 세션에서는 Llama 3.3 70B 또는 Qwen3 32B에서 샘플링 설정을 조정한 작가가 GPT-5 또는 Claude에 비해 일관된 품질 차이를 보지 못할 것입니다. 패배하는 모델은 "온도 0.7, 일반 시스템 프롬프트" 처리를 받은 모델들이며, 이것은 어떤 클라우드 모델에도 패배합니다.',
          },
          {
            q: '로컬 모델이 전체 소설을 쓸 수 있습니까?',
            a: '작성하는 데 도움을 줄 수 있습니다. 128K 컨텍스트의 Mistral Large는 50,000단어 초안을 메모리에 유지할 수 있고; 32K 컨텍스트의 Llama 3.3 70B와 Qwen3 32B는 섹션별 집필이 필요합니다. 병목은 모델 능력이 아닙니다 — 모델이 연속성을 유지하기 위해 사용하는 작가의 구조(개요, 캐릭터 바이블, 로어북)입니다. 그것들 없이는 Mistral Large조차 흘러갑니다. 그것들과 함께라면 상위 모델 중 어느 것이든 소설 길이 작업을 지원합니다.',
          },
          {
            q: '비검열 모델이 불법 콘텐츠를 생성합니까?',
            a: '인스트럭션 튜닝 모델보다 더 그렇지는 않습니다. 둘 다 프롬프트가 요청하는 텍스트를 생성하며; 비검열 모델은 인스트럭션 튜닝 안전 레이어가 거부하는 성숙한 주제에 더 기꺼이 참여합니다. 법적 책임은 모델이 아닌 작가와 출판에 있습니다. EU AI 법, 독일 §184/§184c StGB, 미국 외설법은 생성 방법에 관계없이 특정 콘텐츠 범주를 다룹니다. 로컬 호스팅은 법을 바꾸지 않습니다; 초안에 대한 가시성이 누구에게 있는지를 바꿉니다.',
          },
          {
            q: 'SillyTavern은 성인 롤플레이에만 사용됩니까?',
            a: '아닙니다. SillyTavern은 캐릭터 카드, 페르소나 관리, 로어북이 있는 채팅 중심 프론트엔드입니다 — 대화 중심 또는 캐릭터 주도 작업에 유용합니다. 많은 작가들이 롤플레이 없이 소설 집필에 사용합니다(멀티 캐릭터 장면, 장편 프로젝트에서의 음성 일관성). 캐릭터 카드 생태계에는 성인 콘텐츠가 포함되지만 이에 국한되지는 않습니다; 동일한 인터페이스가 문학 소설, 시나리오, 게임 서사 작업에서도 작동합니다.',
          },
          {
            q: '창작 글쓰기 로컬 작업이 코드 작업과 어떻게 다릅니까?',
            a: '샘플링 설정과 프롬프트 구조가 다릅니다. 코드에는 온도 0.2–0.4, 결정론적 출력, 구조화된 출력(JSON, 코드), 프롬프트의 명시적 제약이 필요합니다. 창작 글쓰기에는 온도 0.8–1.1, 더 자유로운 출력, 산문 형식, 더 풍부한 시스템 프롬프트(캐릭터 음성, POV, 어조, 장르 관습)가 필요합니다. 동일한 모델 — Llama 3.3 70B는 둘 다를 처리합니다 — 이러한 설정에 따라 완전히 다른 출력을 생성합니다. 창작 모델에 코드 스타일 프롬프트는 평평한 출력을 생성하고; 코드 모델에 창작 스타일 프롬프트는 환각된 코드를 생성합니다.',
          },
          {
            q: '어떤 로컬 모델이 "AI 신호"가 가장 적습니까?',
            a: 'AI 신호 — "등골이 오싹했다", "태피스트리", "깊이 파고들다", "헤쳐나가다", ChatGPT 스타일 전환 요약 같은 표현들 — 는 소형 인스트럭트 모델에서 더 자주 나타납니다. Llama 3.3 70B와 Qwen3 32B는 20B 미만 모델보다 신호가 적습니다. Hermes 3은 이 집합에서 가장 적습니다: RLHF 거부 패턴 훈련이 많은 공식적인 전환이 도입된 곳이기도 하며, 그것을 제거하면 둘 다 제거됩니다. 신호 감소를 위한 가장 큰 영향력 레버는 모델이 아니라 부정적 예시가 있는 시스템 프롬프트("등골, 태피스트리, 깊이 파고들다를 쓰지 마세요")입니다.',
          },
          {
            q: '"등골이 오싹했다" 같은 클리셰를 어떻게 피합니까?',
            a: '부정적 예시가 있는 시스템 프롬프트가 가장 큰 영향력 레버입니다 — 금지된 표현 8–12개를 명시적으로 나열하십시오("\'등골\', \'태피스트리\', \'깊이 파고들다\', \'장인답게\', \'그녀는 느꼈다\'를 쓰지 마세요"). 온도를 약간 낮추십시오(1.1 대신 0.85–0.95)하여 모델의 스톡 언어 접근을 줄이십시오. Repeat penalty 1.1만으로는 이것을 잡지 못합니다 — 구절은 정확한 토큰 반복이 아닙니다. DRY 패널티(승수 0.8, 기본 1.75)는 장면 간 n-gram 수준에서 이것을 잡습니다. 수동 검토 패스가 최종 필터입니다. 클리셰를 일관되게 제거하는 프롬프트 구조는 [네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting)을 참조하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프론트엔드(2026)](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 위의 모델들과 함께 세 가지 롤플레이 중심 프론트엔드의 직접 비교.',
          '[소설 작가를 위한 로컬 LLM 프롬프트: 템플릿 및 기법](/ko/power-local-llm/local-llm-prompts-for-fiction-writers) — 캐릭터 개발, 대화, 세계관 구축, 검토 작업 흐름을 위한 복사 가능한 프롬프트 템플릿.',
          '[창작 글쓰기를 위한 로컬 비검열 LLM: 윤리, 합법성, 모범 사례](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 비검열 파생 모델이 합법적인 창작 도구인 시기와 법적, 윤리적 경계에 대한 완전한 처리.',
          '[온도 및 Top-P: AI 창의성 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 샘플링 매개변수의 프롬프트 엔지니어링 측면; 이 가이드의 요약보다 더 깊이 있음.',
          '[네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting) — 프롬프트에서 하지 말아야 할 것 지정; 창작 작업에서 시스템 프롬프트의 힘 배가.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 모델 환경의 권위 있는 가이드; 위의 여섯 가지 창작 글쓰기 모델 이상을 탐색하고 싶을 때 유용.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM: 소설, 대화, 세계관 구축',
      description: '창작 글쓰기를 위한 로컬 모델 6가지 비교: Llama 3.3, Qwen3, Mistral Large, Command A+, Yi-1.5 및 비검열 변형. 50개 이상의 창작 프롬프트에서 테스트 완료.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-creative-writing-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM', item: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-creative-writing-2026' },
      ],
    },
  },
}
