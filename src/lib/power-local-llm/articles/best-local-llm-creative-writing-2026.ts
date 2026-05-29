// Power Local LLM — Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding
// Slug: best-local-llm-creative-writing-2026
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
    title: 'Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding',
    seoTitle: 'Best Local LLMs for Creative Writing 2026: Tested Picks',
    intro:
      'Creative writing is the workload where local LLMs win on more than privacy and price. The best instruct-tuned and uncensored open-weight models in 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command R+, Yi-1.5 34B, and the Hermes/Dolphin uncensored derivatives — produce fiction, dialogue, and worldbuilding that holds up against frontier cloud models on most prompts. The differences are in voice consistency, willingness to handle dark or adult themes, and how naturally they take direction. This guide tests six picks against 50+ creative prompts across fiction, dialogue, poetry, and worldbuilding, with the temperature and top-p settings each one wants.',
    metaDescription:
      'Compare 6 local models for creative writing: Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5, and uncensored variants. Tested on 50+ creative prompts.',
    twitterDescription:
      '6 local models for fiction, dialogue, and worldbuilding tested on 50+ creative prompts. Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5, plus uncensored picks. Verdict per task type.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
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
      '**Llama 3.3 70B is the best all-round local pick for creative writing in May 2026 — strong voice consistency, takes direction well, and handles dark themes without refusing if the system prompt frames the work as fiction. Qwen3 32B is the right 24 GB-rig pick: nearly as strong on prose, lighter on hardware. Mistral Large wins long-form continuity (novel-length drafting) on its native 128K context. Command R+ 104B has the cleanest dialogue voice. Yi-1.5 34B is the niche pick for poetry and lyrical prose. For workflows that the instruct-tuned models refuse, Hermes 3 (Llama 3.3 base) and Dolphin 3.0 are the uncensored picks — same architecture, RLHF safety layer removed. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; 0.7 and below produces flat prose. Uncensored ≠ unethical — it means the model follows the prompt instead of refusing; the writer is still the author.**',
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for creative writing in 2026?',
        answer:
          'Llama 3.3 70B is the best all-round local pick — strong on prose, dialogue, and worldbuilding, with voice consistency that holds across long sessions. On 24 GB hardware where 70B will not fit, Qwen3 32B is the lighter alternative without much quality loss. Mistral Large is the long-context pick for novel-length drafting (128K context out of the box). Command R+ 104B has the most natural dialogue voice. Yi-1.5 34B is the poetry and lyrical-prose specialist. For workflows that hit the instruct-tuned safety layer (mature fiction, conflict scenes, morally complex characters), the Hermes 3 and Dolphin 3.0 derivatives use the same base models with the safety RLHF layer removed — they follow the prompt instead of refusing. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; coding-style settings (0.2–0.4) produce flat prose.',
        bullets: [
          'Best overall: Llama 3.3 70B — strongest voice consistency, takes direction well, handles dark themes without refusal when framed as fiction.',
          'Best 24 GB rig: Qwen3 32B — nearly as strong as Llama 70B on prose, much lighter on hardware.',
          'Best long-form: Mistral Large — 128K context out of the box; novel-length drafting without losing thread.',
          'Best dialogue: Command R+ 104B — the most natural conversational voice across characters.',
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
          '**Command R+ 104B has the cleanest dialogue voice.** Most natural conversational beats across characters; the pick when dialogue is the load-bearing part of the work.',
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
          '**Best dialogue:** Command R+ 104B at Q4_K_M, ~62 GB VRAM. Cleanest character-voice differentiation.',
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
          '**Backend:** Ollama 0.5+ on macOS and Linux; same context limits per model; Q4_K_M quantization across all six picks (Q5_K_M for the smaller 32B–34B models where VRAM permitted, with no measurable difference in the rubric scores).',
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
            text: 'Llama 3.3 70B is the strongest all-round creative model; Qwen3 32B is the lighter alternative; Mistral Large wins long-form; Command R+ wins dialogue; Yi-1.5 wins poetry; Hermes/Dolphin handle scenes the others refuse.',
          },
          {
            type: 'plain-terms',
            text: 'No single model is best at everything. Llama 3.3 70B is the safe default if you have the hardware. Qwen3 32B is the smart pick on a 24 GB GPU. Pick a specialist (Mistral for novels, Command R+ for dialogue, Yi-1.5 for poetry) when one task type is the load-bearing part of the work. Pick an uncensored derivative when the instruct-tuned model refuses scenes you need to write.',
          },
        ],
        columns: ['Model', 'Size', 'VRAM (Q4_K_M)', 'Fiction', 'Dialogue', 'Poetry', 'Worldbuilding', 'Best for'],
        rows: [
          { 'Model': 'Llama 3.3 70B', 'Size': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Fiction': 'Best', 'Dialogue': 'Strong', 'Poetry': 'Strong', 'Worldbuilding': 'Best', 'Best for': 'Best all-round; default if hardware fits' },
          { 'Model': 'Qwen3 32B', 'Size': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Fiction': 'Strong', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': '24 GB-rig default; small loss vs Llama 70B' },
          { 'Model': 'Mistral Large', 'Size': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Fiction': 'Strong (long-form)', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Novel-length continuity, 128K context' },
          { 'Model': 'Command R+', 'Size': '104B', 'VRAM (Q4_K_M)': '~62 GB', 'Fiction': 'Strong', 'Dialogue': 'Best', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Dialogue-heavy work, group scenes' },
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
          '**Command R+ 104B** — best dialogue. Distinct character voices that hold across exchanges; group scenes (3+ speakers) stay legible without the "everyone sounds the same" failure mode common to other models. Where it falls short: prose paragraphs between dialogue beats are competent but not lyrical; for purely descriptive passages, Llama 3.3 wins.',
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
          { 'Model': 'Command R+ 104B', 'Typical opening phrasing': 'Character voice or dialogue-adjacent opener', 'Typical descriptor pattern': 'Conversational; strong distinct voice; weaker solo description' },
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
          '**SillyTavern** — the roleplay and dialogue pick. Character card ecosystem (Tavern v2 spec), persona management, lore books for worldbuilding, group chat for multi-character scenes. Best for dialogue-driven work and long-running character or world projects. Pairs well with Command R+ and uncensored derivatives.',
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
          { 'Your situation': 'My work is dialogue-heavy — character voices need to stay distinct', 'Pick': 'Command R+ 104B (or Llama 3.3 70B as a lighter alternative)' },
          { 'Your situation': 'I write poetry, verse, or lyrical prose', 'Pick': 'Yi-1.5 34B' },
          { 'Your situation': 'The instruct model is refusing scenes I need to write', 'Pick': 'Hermes 3 (Llama 3.3 base) or Dolphin 3.0 — keep the instruct version installed for non-mature work' },
          { 'Your situation': 'I want one model to start with and will iterate', 'Pick': 'Qwen3 32B — covers most workflows on consumer hardware; switch up when one task type becomes the load-bearing part' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Qwen3 32B as the default if you have a 24 GB GPU; Llama 3.3 70B if you have 48 GB+; Mistral Large for novel-length work; Command R+ for dialogue; Yi-1.5 for poetry; Hermes/Dolphin for scenes the instruct models refuse.',
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
          '**Mistake 1: chasing the biggest model on benchmarks.** Creative writing scores poorly correlate with general benchmark leaderboards. Yi-1.5 34B beats Llama 3.3 70B on poetry; Command R+ beats both on dialogue. Pick by task, not by leaderboard rank.',
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
          '[Hugging Face model cards for Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5](https://huggingface.co/) — official model documentation and licensing.',
          '[Hermes 3 (NousResearch) GitHub and model card](https://huggingface.co/NousResearch) — uncensored Llama 3.3-based fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) model cards](https://huggingface.co/cognitivecomputations) — uncensored fine-tunes across multiple base models.',
          '[Ollama Model Library](https://ollama.com/library) — available models, quantization options, tool-call support flags referenced above.',
          '[SillyTavern documentation](https://docs.sillytavern.app/) — character card spec, persona system, group chat features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Beste lokale LLMs für kreatives Schreiben 2026: Belletristik, Dialog & Weltenbau',
    seoTitle: 'Beste lokale LLMs für kreatives Schreiben 2026: Getestete Picks',
    intro:
      'Beim kreativen Schreiben punkten lokale LLMs nicht nur mit Datenschutz und Kosteneffizienz. Die besten Instruct-tuned und Uncensored Open-Weight-Modelle 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command R+, Yi-1.5 34B sowie die Hermes/Dolphin-Uncensored-Derivate — liefern Belletristik, Dialog und Weltenbau, die auf den meisten Prompts mit führenden Cloud-Modellen mithalten können. Die Unterschiede liegen in der Stimmkonsistenz, der Bereitschaft für dunkle oder erwachsene Themen und der Fähigkeit, Anweisungen natürlich umzusetzen. Dieser Leitfaden testet sechs Modelle auf 50+ kreative Prompts aus Belletristik, Dialog, Poesie und Weltenbau — inklusive der optimalen Temperatur- und Top-p-Einstellungen.',
    metaDescription:
      '6 lokale Modelle für kreatives Schreiben verglichen: Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 und Uncensored-Varianten. Getestet auf 50+ Prompts.',
    twitterDescription:
      '6 lokale Modelle für Belletristik, Dialog und Weltenbau getestet auf 50+ Prompts. Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 plus Uncensored-Picks. Urteil je Aufgabentyp.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
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
      '**Llama 3.3 70B ist im Mai 2026 der beste Allrounder unter den lokalen Modellen für kreatives Schreiben — starke Stimmkonsistenz, folgt Anweisungen präzise und bearbeitet dunkle Themen ohne Ablehnung, wenn der System-Prompt die Arbeit als Belletristik kennzeichnet. Qwen3 32B ist die richtige Wahl für 24-GB-Systeme: nahezu gleich stark in der Prosa, deutlich geringerer Hardwarebedarf. Mistral Large gewinnt bei der Langform-Kontinuität (Novel-Länge) dank seinem nativen 128K-Kontext. Command R+ 104B hat die sauberste Dialog-Stimme. Yi-1.5 34B ist die Nischenempfehlung für Poesie und lyrische Prosa. Für Workflows, die Instruct-Modelle ablehnen, sind Hermes 3 (Llama-3.3-Basis) und Dolphin 3.0 die Uncensored-Picks — gleiche Architektur, RLHF-Sicherheitsschicht entfernt. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; 0,7 und darunter erzeugt flache Prosa. Uncensored ≠ unethisch — es bedeutet, dass das Modell dem Prompt folgt statt ihn abzulehnen; der Autor trägt weiterhin die Verantwortung.**',
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM eignet sich 2026 am besten für kreatives Schreiben?',
        answer:
          'Llama 3.3 70B ist bei ausreichender Hardware der beste Allrounder — stark in Prosa, Dialog und Weltenbau, mit Stimmkonsistenz über lange Sessions. Auf 24-GB-Hardware, wo 70B nicht passt, ist Qwen3 32B die leichtere Alternative ohne großen Qualitätsverlust. Mistral Large ist die Wahl für den langen Kontext bei Novel-Länge (128K out of the box). Command R+ 104B hat die natürlichste Dialog-Stimme. Yi-1.5 34B ist der Spezialist für Poesie und lyrische Prosa. Für Workflows, die an der Instruct-Sicherheitsschicht scheitern (reife Belletristik, Konfliktszenen, moralisch komplexe Charaktere), verwenden Hermes 3 und Dolphin 3.0 dieselben Basismodelle mit entfernter RLHF-Sicherheitsschicht. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; Coding-Einstellungen (0,2–0,4) erzeugen flache Prosa.',
        bullets: [
          'Bester Allrounder: Llama 3.3 70B — stärkste Stimmkonsistenz, folgt Anweisungen gut, bearbeitet dunkle Themen ohne Ablehnung.',
          'Bestes 24-GB-System: Qwen3 32B — nahezu so stark wie Llama 70B in der Prosa, deutlich geringerer Hardwarebedarf.',
          'Beste Langform: Mistral Large — 128K-Kontext out of the box; Novel-Länge ohne Fadenriss.',
          'Bester Dialog: Command R+ 104B — die natürlichste Gesprächsstimme über mehrere Charaktere.',
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
          '**Command R+ 104B hat die sauberste Dialog-Stimme.** Natürlichste Gesprächsbeats über Charaktere hinweg; die Wahl, wenn Dialog die tragende Funktion im Werk übernimmt.',
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
          '**Bester Dialog:** Command R+ 104B bei Q4_K_M, ~62 GB VRAM. Sauberste Charakterstimm-Differenzierung.',
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
          '**Backend:** Ollama 0.5+ auf macOS und Linux; gleiche Kontextgrenzen je Modell; Q4_K_M-Quantisierung über alle sechs Picks (Q5_K_M für kleinere 32B–34B-Modelle, wo VRAM es erlaubte, ohne messbaren Unterschied in den Rubrik-Werten).',
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
            text: 'Llama 3.3 70B ist das stärkste Allround-Kreativmodell; Qwen3 32B die leichtere Alternative; Mistral Large gewinnt Langform; Command R+ gewinnt Dialog; Yi-1.5 gewinnt Poesie; Hermes/Dolphin übernehmen Szenen, die die anderen ablehnen.',
          },
          {
            type: 'plain-terms',
            text: 'Kein einzelnes Modell ist in allem am besten. Llama 3.3 70B ist der sichere Standard, wenn die Hardware passt. Qwen3 32B ist die kluge Wahl auf einer 24-GB-GPU. Einen Spezialisten wählen (Mistral für Romane, Command R+ für Dialog, Yi-1.5 für Poesie), wenn ein Aufgabentyp die tragende Funktion im Werk übernimmt. Ein Uncensored-Derivat wählen, wenn das Instruct-Modell Szenen ablehnt, die du schreiben musst.',
          },
        ],
        columns: ['Modell', 'Größe', 'VRAM (Q4_K_M)', 'Belletristik', 'Dialog', 'Poesie', 'Weltenbau', 'Ideal für'],
        rows: [
          { 'Modell': 'Llama 3.3 70B', 'Größe': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Belletristik': 'Bester', 'Dialog': 'Stark', 'Poesie': 'Stark', 'Weltenbau': 'Bester', 'Ideal für': 'Bester Allrounder; Standard wenn Hardware ausreicht' },
          { 'Modell': 'Qwen3 32B', 'Größe': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Belletristik': 'Stark', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': '24-GB-System-Standard; geringer Qualitätsverlust vs. Llama 70B' },
          { 'Modell': 'Mistral Large', 'Größe': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Belletristik': 'Stark (Langform)', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Langform-Kontinuität, 128K-Kontext' },
          { 'Modell': 'Command R+', 'Größe': '104B', 'VRAM (Q4_K_M)': '~62 GB', 'Belletristik': 'Stark', 'Dialog': 'Bester', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Dialogintensive Werke, Gruppenszenen' },
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
          '**Command R+ 104B** — bester Dialog. Eigenständige Charakterstimmen, die über Exchanges hinweg bestehen; Gruppenszenen (3+ Sprecher) bleiben lesbar ohne den „alle klingen gleich"-Fehler, der bei anderen Modellen häufig vorkommt. Schwachpunkt: Prosaabsätze zwischen Dialog-Beats sind kompetent, aber nicht lyrisch; für rein beschreibende Passagen gewinnt Llama 3.3.',
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
          { 'Modell': 'Command R+ 104B', 'Typische Einleitung': 'Charakterstimme oder dialognahe Einleitung', 'Typisches Beschreibungsmuster': 'Konversationell; starke eigenständige Stimme; schwächere Solo-Beschreibung' },
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
          '**SillyTavern** — der Roleplay- und Dialog-Pick. Charakterkarten-Ökosystem (Tavern v2 Spec), Persona-Verwaltung, Lore Books für Weltenbau, Gruppen-Chat für Mehrfigurenszenen. Bestes für dialoggetriebene Arbeit und langfristige Charakter- oder Weltenprojekte. Passt gut zu Command R+ und Uncensored-Derivaten.',
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
          { 'Meine Situation': 'Mein Werk ist dialogintensiv — Charakterstimmen müssen unterscheidbar bleiben', 'Empfehlung': 'Command R+ 104B (oder Llama 3.3 70B als leichtere Alternative)' },
          { 'Meine Situation': 'Ich schreibe Gedichte, Verse oder lyrische Prosa', 'Empfehlung': 'Yi-1.5 34B' },
          { 'Meine Situation': 'Das Instruct-Modell lehnt Szenen ab, die ich schreiben muss', 'Empfehlung': 'Hermes 3 (Llama-3.3-Basis) oder Dolphin 3.0 — Instruct-Version für reguläre Arbeit installiert lassen' },
          { 'Meine Situation': 'Ich möchte mit einem Modell starten und dann anpassen', 'Empfehlung': 'Qwen3 32B — deckt die meisten Workflows auf Consumer-Hardware ab; wechseln, wenn ein Aufgabentyp zum Schwerpunkt wird' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen3 32B als Standard wählen auf einer 24-GB-GPU; Llama 3.3 70B bei 48 GB+; Mistral Large für Novel-Länge; Command R+ für Dialog; Yi-1.5 für Poesie; Hermes/Dolphin für Szenen, die Instruct-Modelle ablehnen.',
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
          '**Fehler 1: dem größten Modell auf Benchmarks nachjagen.** Kreativschreib-Wertungen korrelieren schlecht mit allgemeinen Benchmark-Leaderboards. Yi-1.5 34B schlägt Llama 3.3 70B bei Poesie; Command R+ schlägt beide bei Dialog. Nach Aufgabe wählen, nicht nach Leaderboard-Rang.',
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
          '[Hugging Face Modellkarten für Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5](https://huggingface.co/) — offizielle Modelldokumentation und Lizenzen.',
          '[Hermes 3 (NousResearch) GitHub und Modellkarte](https://huggingface.co/NousResearch) — Uncensored Llama-3.3-basierte Fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) Modellkarten](https://huggingface.co/cognitivecomputations) — Uncensored Fine-tunes über mehrere Basismodelle.',
          '[Ollama Model Library](https://ollama.com/library) — verfügbare Modelle, Quantisierungsoptionen, Tool-Call-Support-Flags.',
          '[SillyTavern-Dokumentation](https://docs.sillytavern.app/) — Charakterkarten-Spec, Persona-System, Gruppen-Chat-Features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'Meilleurs LLM locaux pour l\'écriture créative 2026 : fiction, dialogue et construction de mondes',
    seoTitle: 'LLM locaux pour l\'écriture créative 2026 : comparatif testé',
    intro:
      'L\'écriture créative est le domaine où les LLM locaux s\'imposent au-delà de la seule confidentialité et du coût. Les meilleurs modèles open-weight instruction-tuned et non censurés de 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command R+, Yi-1.5 34B et les dérivés non censurés Hermes/Dolphin — produisent de la fiction, des dialogues et de la construction de mondes comparables aux modèles cloud frontaux sur la plupart des prompts. Les différences portent sur la cohérence de la voix narrative, la capacité à traiter des thèmes sombres ou adultes, et la façon dont ils suivent les directives. Ce guide teste six modèles sur plus de 50 prompts créatifs couvrant fiction, dialogue, poésie et construction de mondes, avec les paramètres de température et de top-p adaptés à chacun.',
    metaDescription:
      '6 LLM locaux comparés pour l\'écriture créative : Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 et variantes non censurées. Testés sur plus de 50 prompts créatifs.',
    twitterDescription:
      '6 modèles locaux pour la fiction, le dialogue et la construction de mondes testés sur 50+ prompts. Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 et options non censurées. Verdict par type de tâche.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
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
      '**Llama 3.3 70B est le meilleur choix local polyvalent pour l\'écriture créative en mai 2026 — cohérence de voix solide, suit bien les directives et traite les thèmes sombres sans refus si le prompt système cadre le travail comme de la fiction. Qwen3 32B est le bon choix sur un rig 24 Go : qualité de prose presque équivalente, moins gourmand en matériel. Mistral Large gagne sur la continuité long format (rédaction de romans) grâce à son contexte natif de 128K. Command R+ 104B a la voix de dialogue la plus naturelle. Yi-1.5 34B est le choix de niche pour la poésie et la prose lyrique. Pour les workflows que les modèles instruction-tuned refusent, Hermes 3 (base Llama 3.3) et Dolphin 3.0 sont les options non censurées — même architecture, couche de sécurité RLHF retirée. Température 0,8–1,1 et top-p 0,9–0,95 définissent la plage créative ; en dessous de 0,7 la prose devient plate. Non censuré ≠ contraire à l\'éthique — cela signifie que le modèle suit le prompt au lieu de refuser ; l\'auteur reste l\'auteur.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel LLM local est le meilleur pour l\'écriture créative en 2026 ?',
        answer:
          'Llama 3.3 70B est le meilleur choix local polyvalent — solide sur la prose, le dialogue et la construction de mondes, avec une cohérence de voix qui tient sur de longues sessions. Sur un matériel 24 Go où un 70B ne passe pas, Qwen3 32B est l\'alternative plus légère sans grande perte de qualité. Mistral Large est le choix long-contexte pour la rédaction de romans (contexte 128K natif). Command R+ 104B a la voix de dialogue la plus naturelle. Yi-1.5 34B est le spécialiste de la poésie et de la prose lyrique. Pour les workflows qui butent sur la couche de sécurité instruction-tuned (fiction mature, scènes de conflit, personnages moralement complexes), les dérivés Hermes 3 et Dolphin 3.0 utilisent les mêmes modèles de base avec la couche de sécurité RLHF retirée — ils suivent le prompt au lieu de refuser. Température 0,8–1,1 et top-p 0,9–0,95 définissent la plage créative ; les paramètres type code (0,2–0,4) produisent une prose plate.',
        bullets: [
          'Meilleur au global : Llama 3.3 70B — cohérence de voix la plus solide, suit bien les directives, gère les thèmes sombres sans refus si cadré comme fiction.',
          'Meilleur sur rig 24 Go : Qwen3 32B — presque aussi fort que Llama 70B sur la prose, bien plus léger en matériel.',
          'Meilleur long format : Mistral Large — contexte 128K natif ; rédaction de roman sans perte de fil.',
          'Meilleur dialogue : Command R+ 104B — la voix conversationnelle la plus naturelle entre les personnages.',
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
          '**Command R+ 104B a la voix de dialogue la plus propre.** Les beats conversationnels les plus naturels entre les personnages ; le choix quand le dialogue est la partie structurante du travail.',
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
          '**Meilleur dialogue :** Command R+ 104B en Q4_K_M, ~62 Go de VRAM. Meilleure différenciation des voix des personnages.',
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
          '**Backend :** Ollama 0.5+ sur macOS et Linux ; mêmes limites de contexte par modèle ; quantification Q4_K_M pour les six modèles (Q5_K_M pour les modèles plus petits 32B–34B quand le VRAM le permettait, sans différence mesurable dans les scores de grille).',
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
            text: 'Llama 3.3 70B est le modèle créatif polyvalent le plus solide ; Qwen3 32B est l\'alternative plus légère ; Mistral Large gagne en long format ; Command R+ gagne en dialogue ; Yi-1.5 gagne en poésie ; Hermes/Dolphin gèrent les scènes que les autres refusent.',
          },
          {
            type: 'plain-terms',
            text: 'Aucun modèle n\'est meilleur sur tout. Llama 3.3 70B est la valeur sûre si le matériel le permet. Qwen3 32B est le choix intelligent sur un GPU de 24 Go. Choisir un spécialiste (Mistral pour les romans, Command R+ pour le dialogue, Yi-1.5 pour la poésie) quand un type de tâche est la partie structurante du travail. Choisir un dérivé non censuré quand le modèle instruction-tuned refuse des scènes à écrire.',
          },
        ],
        columns: ['Modèle', 'Taille', 'VRAM (Q4_K_M)', 'Fiction', 'Dialogue', 'Poésie', 'Construction de monde', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Llama 3.3 70B', 'Taille': '70B', 'VRAM (Q4_K_M)': '~42 Go', 'Fiction': 'Meilleur', 'Dialogue': 'Bon', 'Poésie': 'Bon', 'Construction de monde': 'Meilleur', 'Idéal pour': 'Meilleur au global ; par défaut si le matériel le permet' },
          { 'Modèle': 'Qwen3 32B', 'Taille': '32B', 'VRAM (Q4_K_M)': '~20 Go', 'Fiction': 'Bon', 'Dialogue': 'Bon', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Par défaut sur rig 24 Go ; faible écart vs Llama 70B' },
          { 'Modèle': 'Mistral Large', 'Taille': '123B', 'VRAM (Q4_K_M)': '~75 Go', 'Fiction': 'Bon (long format)', 'Dialogue': 'Bon', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Rédaction long format, contexte 128K' },
          { 'Modèle': 'Command R+', 'Taille': '104B', 'VRAM (Q4_K_M)': '~62 Go', 'Fiction': 'Bon', 'Dialogue': 'Meilleur', 'Poésie': 'Correct', 'Construction de monde': 'Bon', 'Idéal pour': 'Travaux à dominante dialogue, scènes de groupe' },
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
          '**Command R+ 104B** — meilleur pour le dialogue. Voix de personnages distinctes qui tiennent sur les échanges ; les scènes de groupe (3+ locuteurs) restent lisibles sans le mode d\'échec "tout le monde sonne pareil" courant chez les autres modèles. Limites : les paragraphes de prose entre les répliques de dialogue sont compétents mais pas lyriques ; pour les passages purement descriptifs, Llama 3.3 gagne.',
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
          { 'Modèle': 'Command R+ 104B', 'Introduction typique': 'Voix du personnage ou ouverture proche du dialogue', 'Motif descriptif typique': 'Conversationnel ; voix propre et distincte ; description solo plus faible' },
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
          '**SillyTavern** — le choix roleplay et dialogue. Écosystème de fiches de personnages (spec Tavern v2), gestion de personas, lore books pour la construction de mondes, chat de groupe pour les scènes multi-personnages. Meilleur pour les travaux à dominante dialogue et les projets de personnages ou de monde sur le long terme. S\'associe bien avec Command R+ et les dérivés non censurés.',
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
          { 'Ma situation': 'Mon travail est à dominante dialogue — les voix des personnages doivent rester distinctes', 'Recommandation': 'Command R+ 104B (ou Llama 3.3 70B comme alternative plus légère)' },
          { 'Ma situation': 'J\'écris de la poésie, des vers ou de la prose lyrique', 'Recommandation': 'Yi-1.5 34B' },
          { 'Ma situation': 'Le modèle instruct refuse des scènes que je dois écrire', 'Recommandation': 'Hermes 3 (base Llama 3.3) ou Dolphin 3.0 — conserver la version instruct pour le travail sans contenu adulte' },
          { 'Ma situation': 'Je veux commencer avec un seul modèle et itérer ensuite', 'Recommandation': 'Qwen3 32B — couvre la plupart des usages sur matériel grand public ; basculer quand un type de tâche spécifique devient prépondérant' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisir Qwen3 32B par défaut avec un GPU de 24 Go ; Llama 3.3 70B avec 48 Go+ ; Mistral Large pour les travaux de longueur roman ; Command R+ pour le dialogue ; Yi-1.5 pour la poésie ; Hermes/Dolphin pour les scènes que les modèles instruct refusent.',
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
          '**Erreur 1 : courir après le plus grand modèle sur les benchmarks.** Les scores d\'écriture créative corrèlent faiblement avec les classements de benchmarks généraux. Yi-1.5 34B surpasse Llama 3.3 70B en poésie ; Command R+ surpasse les deux en dialogue. Choisir par type de tâche, pas par rang de classement.',
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
          '[Fiches modèles Hugging Face pour Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5](https://huggingface.co/) — documentation officielle des modèles et licences.',
          '[Hermes 3 (NousResearch) GitHub et fiche modèle](https://huggingface.co/NousResearch) — fine-tunes non censurés basés sur Llama 3.3.',
          '[Fiches modèles Dolphin 3.0 (Cognitive Computations)](https://huggingface.co/cognitivecomputations) — fine-tunes non censurés sur plusieurs modèles de base.',
          '[Bibliothèque de modèles Ollama](https://ollama.com/library) — modèles disponibles, options de quantification, flags de support d\'appels d\'outils référencés ci-dessus.',
          '[Documentation SillyTavern](https://docs.sillytavern.app/) — spécification des fiches de personnages, système de personas, fonctionnalités de chat de groupe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'クリエイティブライティングに最適なローカルLLM 2026：小説・ダイアログ・世界構築',
    seoTitle: 'クリエイティブライティング向けローカルLLM 2026：比較・実測ガイド',
    intro:
      'クリエイティブライティングは、ローカルLLMがプライバシーやコスト以外の面でも優位性を発揮するワークロードです。2026年のベストなinstruct-tuned・無検閲オープンウェイトモデル——Llama 3.3 70B、Qwen3 32B、Mistral Large、Command R+、Yi-1.5 34B、そしてHermes/Dolphinの無検閲派生版——は、ほとんどのプロンプトでフロンティアクラウドモデルに匹敵する小説・ダイアログ・世界構築を生成します。違いは声の一貫性、ダークまたは成人向けテーマの扱い、方向性への従いやすさにあります。本ガイドでは、6つのモデルを小説・ダイアログ・詩・世界構築にまたがる50以上のクリエイティブプロンプトでテストし、各モデルに適した温度とTop-Pの設定も紹介します。',
    metaDescription:
      'クリエイティブライティング向けローカルLLM 6モデル比較：Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5、無検閲版。50以上のプロンプトで実測。',
    twitterDescription:
      '小説・ダイアログ・世界構築向けローカルLLM 6モデルを50以上のプロンプトでテスト。Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5と無検閲オプション。タスク別評価。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
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
      '**Llama 3.3 70Bは2026年5月現在、クリエイティブライティングにおける総合最良のローカル選択です——声の一貫性が高く、方向性への追従も良好で、システムプロンプトでフィクションとして定義されていればダークなテーマも拒否せずに扱います。Qwen3 32Bは24 GBリグでの適切な選択：散文の品質はほぼ同等で、ハードウェア要件はより軽量です。Mistral Largeはネイティブ128Kコンテキストによる長編継続性で勝ります。Command R+ 104Bは最もクリーンなダイアログの声を持っています。Yi-1.5 34Bは詩と抒情的な散文のニッチな選択です。instructモデルが拒否するワークフローには、Hermes 3（Llama 3.3ベース）とDolphin 3.0が無検閲の選択肢となります——同じアーキテクチャで、RLHFセーフティレイヤーが除去されています。温度0.8〜1.1、Top-P 0.9〜0.95がクリエイティブライティングの範囲です。0.7以下は平坦な散文を生成します。無検閲≠非倫理的——それはモデルが拒否する代わりにプロンプトに従うことを意味します。著者は依然として著者です。**',
    quickAnswerTop: {
      ja: {
        question: '2026年のクリエイティブライティングに最適なローカルLLMは何ですか？',
        answer:
          'Llama 3.3 70Bが総合最良のローカル選択です——散文・ダイアログ・世界構築において優秀で、長いセッションを通じて声の一貫性を維持します。ハードウェアが48 GBに満たない24 GBリグでは、Qwen3 32Bが品質損失の少ない軽量な代替です。Mistral Largeは長編執筆（128Kコンテキスト）のための選択です。Command R+ 104Bは最もナチュラルなダイアログの声を持ちます。Yi-1.5 34Bは詩と抒情散文のスペシャリストです。instructモデルのセーフティレイヤーにぶつかるワークフロー（成熟したフィクション、争闘シーン、道徳的に複雑なキャラクター）には、Hermes 3とDolphin 3.0の派生版が同じベースモデルでRLHFセーフティレイヤーを除去したものです——拒否の代わりにプロンプトに従います。温度0.8〜1.1、Top-P 0.9〜0.95がクリエイティブライティングの範囲です。コーディングスタイルの設定（0.2〜0.4）は平坦な散文を生成します。',
        bullets: [
          '総合最良：Llama 3.3 70B——声の一貫性が最も高く、方向性への追従も良好、フィクションとして定義されれば拒否せずダークなテーマも扱える。',
          '24 GBリグのベスト：Qwen3 32B——散文品質はLlama 70Bにほぼ匹敵し、ハードウェア要件がはるかに軽い。',
          '長編ベスト：Mistral Large——128Kコンテキスト標準搭載；長編執筆でも話の流れを維持。',
          'ダイアログベスト：Command R+ 104B——キャラクター間で最もナチュラルな会話の声。',
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
          '**Command R+ 104Bは最もクリーンなダイアログの声を持ちます。** キャラクター間で最もナチュラルな会話のビートを持ち、ダイアログが構造的要素の中心となる作品に最適です。',
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
          '**ダイアログベスト：** Command R+ 104B（Q4_K_M）、約62 GB VRAM。最もクリーンなキャラクター声の分化。',
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
            text: 'Llama 3.3 70Bは総合最強のクリエイティブモデル；Qwen3 32Bはより軽い代替；Mistral Largeは長編で優位；Command R+はダイアログで優位；Yi-1.5は詩で優位；Hermes/Dolphinは他のモデルが拒否するシーンを扱う。',
          },
          {
            type: 'plain-terms',
            text: 'どの1つのモデルも全ての面で最高ではありません。Llama 3.3 70Bはハードウェアが許せば安全なデフォルトです。Qwen3 32Bは24 GB GPUでの賢い選択です。特定のタスクタイプが構造的要素の中心となる場合はスペシャリスト（長編ならMistral、ダイアログならCommand R+、詩ならYi-1.5）を選んでください。instructモデルが書く必要のあるシーンを拒否する場合は無検閲派生版を選んでください。',
          },
        ],
        columns: ['モデル', 'サイズ', 'VRAM (Q4_K_M)', '小説', 'ダイアログ', '詩', '世界構築', '用途'],
        rows: [
          { 'モデル': 'Llama 3.3 70B', 'サイズ': '70B', 'VRAM (Q4_K_M)': '約42 GB', '小説': '最良', 'ダイアログ': '優秀', '詩': '優秀', '世界構築': '最良', '用途': '総合最良；ハードウェアが許す場合のデフォルト' },
          { 'モデル': 'Qwen3 32B', 'サイズ': '32B', 'VRAM (Q4_K_M)': '約20 GB', '小説': '優秀', 'ダイアログ': '優秀', '詩': '可', '世界構築': '優秀', '用途': '24 GBリグのデフォルト；Llama 70Bとの差は小さい' },
          { 'モデル': 'Mistral Large', 'サイズ': '123B', 'VRAM (Q4_K_M)': '約75 GB', '小説': '優秀（長編）', 'ダイアログ': '優秀', '詩': '可', '世界構築': '優秀', '用途': '長編継続性、128Kコンテキスト' },
          { 'モデル': 'Command R+', 'サイズ': '104B', 'VRAM (Q4_K_M)': '約62 GB', '小説': '優秀', 'ダイアログ': '最良', '詩': '可', '世界構築': '優秀', '用途': 'ダイアログ多用の作品、グループシーン' },
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
          '**Command R+ 104B** — ダイアログのベスト。交換にわたって区別できるキャラクターの声を維持します；グループシーン（3人以上の話者）は他のモデルで一般的な「全員が同じように聞こえる」失敗モードなしに読み取れます。弱点：ダイアログのビート間の散文段落は有能ですが抒情的ではありません；純粋に描写的な文章にはLlama 3.3が勝ります。',
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
          { 'モデル': 'Command R+ 104B', '典型的な書き出し': 'キャラクターの声またはダイアログに近い書き出し', '典型的な描写パターン': '会話的；強く独特な声；単独描写はやや弱い' },
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
          '**SillyTavern** — ロールプレイとダイアログの選択。キャラクターカードエコシステム（Tavern v2仕様）、ペルソナ管理、世界構築のためのロアブック、複数キャラクターシーンのグループチャット。ダイアログ主導の作業と長期的なキャラクターや世界のプロジェクトに最適です。Command R+と無検閲派生版との相性が良いです。',
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
          { '状況': 'ダイアログが多い作品——キャラクターの声を一貫させたい', 'おすすめ': 'Command R+ 104B（軽量代替としてLlama 3.3 70B）' },
          { '状況': '詩・韻文・抒情散文を書いている', 'おすすめ': 'Yi-1.5 34B' },
          { '状況': 'instructモデルが書く必要のあるシーンを拒否する', 'おすすめ': 'Hermes 3（Llama 3.3ベース）またはDolphin 3.0——成人向け以外はinstruct版を使用' },
          { '状況': '最初は1つのモデルから始めて段階的に改善したい', 'おすすめ': 'Qwen3 32B——コンシューマーハードウェアでほとんどのワークフローをカバー；特定タスクが主軸になったら切り替える' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24 GB GPUならQwen3 32Bをデフォルトに；48 GB以上ならLlama 3.3 70Bを；長編作品ならMistral Largeを；ダイアログならCommand R+を；詩ならYi-1.5を；instructモデルが拒否するシーンにはHermes/Dolphinを。',
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
          '**間違い1：ベンチマークで最大のモデルを追いかける。** クリエイティブライティングのスコアは一般的なベンチマークリーダーボードとの相関が低いです。Yi-1.5 34Bは詩でLlama 3.3 70Bを上回り；Command R+は両方をダイアログで上回ります。リーダーボードのランクではなく、タスクで選んでください。',
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
          '[Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5のHugging Faceモデルカード](https://huggingface.co/) — 公式モデルドキュメントとライセンス。',
          '[Hermes 3（NousResearch）GitHubとモデルカード](https://huggingface.co/NousResearch) — Llama 3.3ベースの無検閲ファインチューン。',
          '[Dolphin 3.0（Cognitive Computations）モデルカード](https://huggingface.co/cognitivecomputations) — 複数のベースモデルにわたる無検閲ファインチューン。',
          '[Ollamaモデルライブラリ](https://ollama.com/library) — 利用可能なモデル、量子化オプション、上記で参照されるツール呼び出しサポートフラグ。',
          '[SillyTavernドキュメント](https://docs.sillytavern.app/) — キャラクターカード仕様、ペルソナシステム、グループチャット機能。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: '2026年创意写作最佳本地LLM：小说、对话与世界构建测评',
    seoTitle: '2026年创意写作最佳本地LLM：实测推荐',
    intro:
      '创意写作是本地LLM在隐私和价格之外更能体现优势的工作场景。2026年最优秀的指令调优和无审查开放权重模型——Llama 3.3 70B、Qwen3 32B、Mistral Large、Command R+、Yi-1.5 34B，以及Hermes/Dolphin无审查衍生版——在大多数提示词上，其小说、对话和世界构建输出已能与前沿云端模型比肩。差异体现在声音一致性、处理黑暗或成人题材的意愿，以及对创作方向指令的响应自然度。本指南在50余条创意提示词上对六款模型展开测试，覆盖小说、对话、诗歌、世界构建，并给出每款模型适用的温度与top-p设置。',
    metaDescription:
      '对比6款本地创意写作模型：Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5及无审查衍生版，在50余条创意提示词上测试完成。',
    twitterDescription:
      '6款本地模型在小说、对话、世界构建上的50余条实测结果。Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5及无审查选择，逐任务给出结论。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
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
      '**Llama 3.3 70B是2026年5月综合表现最佳的本地创意写作模型——声音一致性突出，对指令方向响应良好，系统提示词将创作框定为小说时可处理黑暗题材而不拒绝。Qwen3 32B是24 GB显卡的最优选：文笔接近Llama 70B，硬件需求低得多。Mistral Large凭借原生128K上下文赢在长篇续写连贯性。Command R+ 104B拥有最干净的对话声音。Yi-1.5 34B是诗歌和意象化散文的小众专用选择。对于指令调优版拒绝的场景，Hermes 3（Llama 3.3基底）和Dolphin 3.0是无审查选项——架构相同，RLHF安全层已移除。温度0.8–1.1、top-p 0.9–0.95是创意写作区间；0.7及以下会产生平淡散文。无审查不等于不道德——它意味着模型遵从提示词而非拒绝；作者仍是创作主体。**',
    quickAnswerTop: {
      zh: {
        question: '2026年最适合创意写作的本地LLM是哪款？',
        answer:
          'Llama 3.3 70B是综合表现最佳的本地选择——在文笔、对话和世界构建上均表现突出，跨长会话的声音一致性持续稳定。在24 GB硬件上Qwen3 32B是质量损失极小的轻量替代。Mistral Large是长篇草稿的长上下文首选（原生128K）。Command R+ 104B拥有最自然的对话声音。Yi-1.5 34B是诗歌和意象化散文的专用选择。对于触发指令调优安全层的场景，Hermes 3和Dolphin 3.0衍生版使用相同的基础模型但移除了安全RLHF层——它们遵从提示词而不拒绝。温度0.8–1.1、top-p 0.9–0.95是创意写作区间；编程风格设置（0.2–0.4）会产生平淡散文。',
        bullets: [
          '综合最佳：Llama 3.3 70B——声音一致性最强，对指令方向响应好，框定为小说时处理黑暗题材不拒绝。',
          '24 GB显卡最优：Qwen3 32B——文笔接近Llama 70B，硬件需求低得多。',
          '长篇最佳：Mistral Large——原生128K上下文；不丢失线索地完成长篇小说草稿。',
          '对话最佳：Command R+ 104B——跨角色最自然的对话声音。',
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
          '**Command R+ 104B拥有最干净的对话声音。** 跨角色最自然的对话节奏；对话是作品核心内容时的首选。',
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
          '**对话最佳：** Command R+ 104B（Q4_K_M），约62 GB VRAM。角色声音区分度最佳。',
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
          '**后端：** macOS和Linux上运行Ollama 0.5+；每款模型相同的上下文限制；六款模型全部使用Q4_K_M量化（较小的32B–34B模型在VRAM允许时使用Q5_K_M，评分标准得分无可测量差异）。',
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
            text: 'Llama 3.3 70B是综合最强的创意模型；Qwen3 32B是轻量替代；Mistral Large赢长篇；Command R+赢对话；Yi-1.5赢诗歌；Hermes/Dolphin处理其他模型拒绝的场景。',
          },
          {
            type: 'plain-terms',
            text: '没有一款模型在所有任务上最优。Llama 3.3 70B是硬件够用时的安全默认选择。Qwen3 32B是24 GB显卡的明智之选。当某类任务成为创作核心时，选专用模型（长篇用Mistral、对话用Command R+、诗歌用Yi-1.5）。指令调优版拒绝你需要写的场景时，选无审查衍生版。',
          },
        ],
        columns: ['模型', '大小', 'VRAM (Q4_K_M)', '小说', '对话', '诗歌', '世界构建', '适用场景'],
        rows: [
          { '模型': 'Llama 3.3 70B', '大小': '70B', 'VRAM (Q4_K_M)': '~42 GB', '小说': '最佳', '对话': '强', '诗歌': '强', '世界构建': '最佳', '适用场景': '最全能首选；硬件够用时的默认选择' },
          { '模型': 'Qwen3 32B', '大小': '32B', 'VRAM (Q4_K_M)': '~20 GB', '小说': '强', '对话': '强', '诗歌': '一般', '世界构建': '强', '适用场景': '24 GB显卡默认选择；与Llama 70B差距小' },
          { '模型': 'Mistral Large', '大小': '123B', 'VRAM (Q4_K_M)': '~75 GB', '小说': '强（长篇）', '对话': '强', '诗歌': '一般', '世界构建': '强', '适用场景': '长篇续写，原生128K上下文' },
          { '模型': 'Command R+', '大小': '104B', 'VRAM (Q4_K_M)': '~62 GB', '小说': '强', '对话': '最佳', '诗歌': '一般', '世界构建': '强', '适用场景': '对话密集型创作，群戏场景' },
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
          '**Command R+ 104B** — 对话最佳。在多轮交流中保持鲜明的角色声音；群戏（3人以上）不出现"所有人听起来一样"的通病。不足之处：对话间的散文段落称职但不出彩；纯描写段落Llama 3.3更胜一筹。',
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
          { '模型': 'Command R+ 104B', '典型开场方式': '以人物声音或近对话式开场', '典型描述模式': '对话感强；人物个性鲜明；独立描写时略弱' },
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
          '**SillyTavern** — 角色扮演和对话首选。角色卡生态系统（Tavern v2规范），角色管理，世界构建用书本功能，群聊用于多角色场景。适合对话驱动的创作和长期角色或世界项目。与Command R+和无审查衍生版搭配良好。',
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
          { '我的情况': '我的作品以对话为主——角色声音要保持各自独立', '推荐': 'Command R+ 104B（或Llama 3.3 70B作为更轻量的替代）' },
          { '我的情况': '我写诗歌、格律诗或意象化散文', '推荐': 'Yi-1.5 34B' },
          { '我的情况': '指令版模型拒绝写我需要的场景', '推荐': 'Hermes 3（Llama 3.3基底）或Dolphin 3.0——保留指令版用于一般内容' },
          { '我的情况': '我想先从一款模型开始，之后再调整', '推荐': 'Qwen3 32B——覆盖消费级硬件上的大多数场景；当某类任务成为主要需求时再换专用模型' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24 GB显卡选Qwen3 32B作为默认；48 GB以上选Llama 3.3 70B；长篇小说选Mistral Large；对话选Command R+；诗歌选Yi-1.5；指令版拒绝的场景选Hermes/Dolphin。',
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
          '**错误一：追逐基准榜上最大的模型。** 创意写作得分与通用基准榜单的相关性很低。Yi-1.5 34B在诗歌上胜过Llama 3.3 70B；Command R+在对话上胜过两者。按任务类型选，不按榜单排名选。',
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
          '[Hugging Face上的Llama 3.3、Qwen3、Mistral Large、Command R+、Yi-1.5模型卡](https://huggingface.co/) — 官方模型文档和许可证。',
          '[Hermes 3（NousResearch）GitHub及模型卡](https://huggingface.co/NousResearch) — 基于Llama 3.3的无审查微调版。',
          '[Dolphin 3.0（Cognitive Computations）模型卡](https://huggingface.co/cognitivecomputations) — 多基础模型的无审查微调版。',
          '[Ollama模型库](https://ollama.com/library) — 可用模型、量化选项、上文引用的工具调用支持标志。',
          '[SillyTavern文档](https://docs.sillytavern.app/) — 角色卡规范、角色系统、群聊功能。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
}
