// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llms-for-coding-workflows
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: 'Local LLMs For Coding Workflows: Code Generation, Review, and Testing',
      seoTitle: 'Local LLMs for Coding 2026: Qwen2.5-Coder 92% HumanEval',
      intro: 'Local LLMs can assist with coding: generating boilerplate, reviewing code, writing tests, and explaining functions. As of April 2026, models like Qwen2.5-Coder 32B and CodeLlama 34B achieve 72-92.7% accuracy on HumanEval benchmarks. Speed is slower than cloud (2-5 sec per response), but you keep code private.',
      metaDescription: 'Qwen2.5-Coder 32B: 92.7% HumanEval, runs on 24 GB VRAM. Qwen2.5-Coder 7B: 72% on 5 GB. Code generation, review, and test writing with Ollama + VS Code. Full benchmark table.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-24',
      leadAnswerBlock: '**Local LLMs can assist with coding: generating boilerplate, reviewing code, writing tests, and explaining functions. As of April 2026, models like Qwen2.5-Coder 32B (92.7% HumanEval) and CodeLlama 34B (75% HumanEval) achieve state-of-the-art accuracy on programming benchmarks.**',
      audience: 'Developers setting up local coding AI on consumer hardware',
      readTime: '11 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'coding with local LLMs',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Best Coding Models', anchor: '#best-models' },
        { label: 'Code Generation', anchor: '#code-generation' },
        { label: 'Code Review Workflows', anchor: '#code-review' },
        { label: 'Test Generation', anchor: '#test-generation' },
        { label: 'IDE Integration', anchor: '#ide-integration' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/local-llms-for-coding-workflows-static.html',
      gammaDescription: 'The slide deck below covers: best local coding models (Qwen2.5-Coder 92.7%, CodeLlama 75%), code generation with prompt engineering, code review workflows, test generation, VS Code/Cursor IDE integration, and common mistakes to avoid. Download the PDF as a local coding AI reference card.',
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Best coding models (2026):** Qwen2.5-Coder 32B (92.7% HumanEval), Qwen2.5-Coder 7B (72% HumanEval), CodeLlama 34B (75%).',
            '**Speed:** 2-5 seconds per code suggestion. Fast enough for development, slower than GitHub Copilot (~300ms).',
            '**Privacy:** Code never leaves your machine. Critical for proprietary codebases.',
            '**Use cases:** Boilerplate generation, code review, test writing, documentation. Not suitable for complex architectural decisions.',
            'As of April 2026, local coding AI is practical for solo developers and small teams.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Which Models Work Best for Local Coding?',
          content: [
            '**The best local coding models balance accuracy, speed, and memory usage. Qwen2.5-Coder 32B leads in accuracy (92.7%), while Qwen2.5-Coder 7B offers the best speed/quality balance.**',
          ],
          callouts: [
            { type: 'tip', text: '**Pro Tip:** Start with Qwen2.5-Coder 7B if you have 4–6 GB VRAM (72% accuracy). For maximum accuracy, use Qwen2.5-Coder 32B on 24 GB+ VRAM (92.7% accuracy). CodeLlama 34B is a solid 75% accuracy middle ground.' },
          ],
          rows: [
            { 'Model': 'Qwen2.5-Coder 32B', 'HumanEval': '92.7%', 'VRAM': '22 GB', 'Speed': 'Slow (3-5 sec)', 'Best For': 'Maximum accuracy' },
            { 'Model': 'CodeLlama 34B', 'HumanEval': '75%', 'VRAM': '22 GB', 'Speed': 'Slow (3-5 sec)', 'Best For': 'High quality, multimodal' },
            { 'Model': 'Qwen2.5-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', 'Speed': 'Very fast', 'Best For': 'Speed/quality balance' },
            { 'Model': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Speed': 'Very fast', 'Best For': 'Tiny, efficient' },
          ],
          columns: ['Model', 'HumanEval %', 'VRAM', 'Inference Speed', 'Best For'],
        },
        codeGeneration: {
          id: 'code-generation',
          title: 'How Do You Generate Code With Local LLMs?',
          content: [
            '**Provide function signature + docstring, and let the model generate implementation. Code quality depends heavily on prompt context.**',
          ],
          callouts: [
            { type: 'insight', text: '📍 **Key Insight:** Function signatures matter more than prose. Include types, docstrings, and example input/output to guide the model.' },
          ],
          codeBlock: '# Prompt design for code generation\nprompt = """\nImplement the following function:\n\ndef merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]:\n    \\"\\"\"\n    Merge two sorted arrays into a single sorted array.\n    Args:\n        arr1: First sorted array\n        arr2: Second sorted array\n    Returns:\n        Merged sorted array\n    \\"\\"\"\n    # Implementation:\n"""\n\n# Model outputs implementation\n# Expected: Two-pointer merge algorithm',
          codeLanguage: 'python',
          promptExamples: [
            { label: '❌ Bad Prompt', text: 'Generate code for merging arrays' },
            { label: '✅ Good Prompt', text: 'Implement merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int] using a two-pointer algorithm. Docstring: Merge two sorted arrays into a single sorted array.' },
          ],
          image: '/images/local-llms-for-coding-workflows-generation-workflow-en.svg',
          imageCaption: 'Code generation workflow: write detailed prompt with function signature and docstring → send to Qwen2.5-Coder or CodeLlama 7B model → model generates implementation → review code for bugs → integrate into application. All 5 steps essential.',
        },
        codeReview: {
          id: 'code-review',
          title: 'How Do You Review Code With Local LLMs?',
          content: [
            '**Prompt the model to review code for bugs, style, and performance. Local models excel at catching common mistakes but struggle with architectural decisions.**',
          ],
          callouts: [
            { type: 'warning', text: '⚠️ **Warning:** Local models understand individual functions, not system architecture. Use for lint-like checks, not design review.' },
          ],
          items: [
            'Prompt: "Review this code for bugs, security issues, and performance." + code snippet.',
            'Model identifies: unused variables, potential None errors, inefficient loops.',
            'Limitations: Cannot understand complex domain logic or architectural patterns.',
          ],
        },
        testGeneration: {
          id: 'test-generation',
          title: 'How Do You Generate Tests?',
          content: [
            '**Feed the function code to the model with a prompt for unit tests. Include edge cases and error conditions in your prompt.**',
          ],
          callouts: [
            { type: 'practice', text: '🛠️ **Best Practice:** Request tests covering normal cases, edge cases, and error cases. Example: "Write pytest tests with 3 normal, 3 edge, 2 error cases."' },
          ],
          codeBlock: '# Prompt for test generation\nprompt = """\nWrite comprehensive unit tests for this function:\n\n[function code]\n\nGenerate tests covering:\n- Normal cases\n- Edge cases\n- Error cases\n\nUse pytest format:\n\"\"\"\n\n# Model generates test_* functions with assertions',
          codeLanguage: 'python',
        },
        ideIntegration: {
          id: 'ide-integration',
          title: 'How Do You Set Up IDE Integration?',
          content: [
            '**Use [VS Code with Continue.dev](/local-llms/local-llms-with-vscode-cursor) or switch to the Cursor editor for native local LLM support. Both allow inline code suggestions triggered by keyboard shortcuts.**',
          ],
          callouts: [
            { type: 'note', text: '📌 **Note:** Continue.dev requires running Ollama locally. Cursor editor (based on VS Code) has built-in Ollama support — no extra setup needed.' },
          ],
          items: [
            'VS Code + Continue.dev: Install extension, point to local Ollama server (http://localhost:11434).',
            'Cursor editor: Built-in support for Ollama. No setup required.',
            'Inline completions: Ctrl+Shift+\\\\ (VS Code) or Cmd+Shift+\\\\ (Mac) triggers local LLM suggestion.',
          ],
          image: '/images/local-llms-for-coding-workflows-ide-setup-en.svg',
          imageCaption: 'IDE integration setup: Install Ollama (ollama.ai) → Install Continue.dev VS Code extension → Configure localhost:11434 → Select Qwen2.5-Coder 7B model → Use Ctrl+Shift+\\ to trigger inline suggestions. 3-step setup complete.',
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are Common Mistakes?',
          items: [
            '**Trusting generated code without review.** Generated code can have bugs. Always review.',
            '**Using models too small.** Qwen2.5-Coder 7B is minimum for practical coding. 3B models produce poor code.',
            '**Not providing context.** Code quality depends on prompt context. Provide function signature, types, docstrings.',
            '**Expecting it to understand architecture.** Local models understand individual functions, not system design.',
            '**Not using a coding-specific model.** General-purpose models (Llama 3.1 8B, Mistral 7B) score 15–25% lower on HumanEval than coding models (Qwen2.5-Coder 7B: 72% vs Llama 3.1 8B: 55%). Always use a model trained specifically for code. In Ollama: `ollama pull qwen2.5-coder:7b` — not `ollama pull llama3.1:8b` for coding tasks.',
          ],
          image: '/images/local-llms-for-coding-workflows-mistakes-en.svg',
          imageCaption: 'Common coding mistakes vs best practices: avoid 3B models (poor accuracy), use Qwen2.5-Coder 7B minimum (72% HumanEval). Set iteration limits (10-20), always review code, use coding-specific models—not general Mistral or Llama.',
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Which local LLM is best for coding in 2026?',
              a: 'Qwen2.5-Coder 32B (92.7% HumanEval) for maximum quality on 24 GB VRAM. Qwen2.5-Coder 7B (72%) for speed on 5 GB VRAM. For MacBook users with Apple Silicon: Qwen2.5-Coder 7B via Ollama runs at 30–60 tok/sec on M1 Pro+.',
            },
            {
              q: 'How does Qwen2.5-Coder 32B compare to GitHub Copilot?',
              a: 'Qwen2.5-Coder 32B scores 92.7% on HumanEval — within 2% of Copilot\'s GPT-5.2 backend (~94%). Speed: local is 2–5 seconds per suggestion vs Copilot\'s ~300ms (cloud advantage). Quality is near-parity. Privacy: local keeps code on-device. Cost: local is $0/month after hardware; Copilot is $19/month ($228/year).',
            },
            {
              q: 'Can I use a local coding LLM in VS Code?',
              a: 'Yes — install the Continue.dev extension (free, open source). Configure it to connect to Ollama at localhost:11434. Inline completions trigger with Tab or Ctrl+Shift+\\\\. Continue.dev supports Qwen2.5-Coder, DeepSeek-Coder, and all Ollama models.',
            },
            {
              q: 'Is Copilot or local LLM better for a proprietary codebase?',
              a: 'Local LLM. With Copilot, your code is sent to Microsoft/OpenAI servers for inference. With a local model on Ollama, code never leaves your machine. For regulated industries (finance, healthcare, defense), local is the only compliant option. Quality gap is ~2% on HumanEval — minimal.',
            },
            {
              q: 'How much VRAM do I need for a local coding LLM?',
              a: 'Minimum: 5 GB VRAM for Qwen2.5-Coder 7B Q4. Recommended: 8 GB for comfortable 7B inference. Premium: 24 GB for Qwen2.5-Coder 32B (best quality). RTX 4060 Ti (8 GB) runs 7B models. RTX 4070 (12 GB) runs 14–16B models. RTX 4090/5090 (24–32 GB) runs 32B models.',
            },
            {
              q: 'Does local coding LLM support autocomplete like Copilot?',
              a: 'Yes — via Continue.dev or Cursor editor. Both support fill-in-the-middle (FIM) mode where the model sees code above and below the cursor and generates the middle. Qwen2.5-Coder 7B supports FIM natively. Response time: 1–3 seconds on GPU (vs Copilot\'s 200–300ms cloud).',
            },
            {
              q: 'Can I fine-tune a coding model on my codebase?',
              a: 'Yes — use LoRA/QLoRA with Unsloth. Prepare 500+ code examples from your codebase in instruction format (input: function signature + docstring, output: implementation). Fine-tuning Qwen2.5-Coder 7B takes 1–2 hours on 8 GB VRAM. Typical accuracy improvement: 10–15% on your specific code patterns.',
            },
            {
              q: 'Which coding LLM supports the most programming languages?',
              a: 'Qwen2.5-Coder 32B and DeepSeek-Coder-V2 both support 90+ languages including Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash, and Ruby. CodeLlama is strongest on Python and C++. For niche languages (Haskell, Erlang, Elixir), Qwen2.5-Coder 32B has the broadest coverage.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLMs With VS Code and Cursor](/local-llms/local-llms-with-vscode-cursor) — Detailed setup guide for both IDEs',
            '[Prompt Engineering Guide](/prompt-engineering) — Master prompting techniques to improve code generation',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) — Detailed benchmarks and model comparisons',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — GPU requirements and cost analysis',
            '[Local RAG for Code Search](/local-llms/local-rag-2026) — Search existing code with semantic understanding',
            '[Private Local AI For Business](/local-llms/private-local-ai-for-business) — Enterprise deployment and compliance',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[HumanEval Benchmark](https://github.com/openai/human-eval) — Official code generation benchmark from OpenAI',
            '[Qwen2.5-Coder Model Card](https://github.com/QwenLM/Qwen2.5-Coder) — Qwen2.5-Coder model specs and evaluation results',
            '[Continue.dev IDE Extension](https://continue.dev) — Open-source IDE support for local and cloud LLMs',
            'Local LLMs excel at code generation, but code quality depends on prompt quality. Learn coding-specific prompt techniques: [write better code with AI](https://www.promptquorum.com/prompt-engineering/write-better-code-with-ai) covers testing, review, and iteration.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLMs for Coding Workflows 2026: Qwen2.5-Coder 92% HumanEval',
        'description': 'Local coding models (Qwen2.5-Coder 32B: 92.7% HumanEval, CodeLlama 34B: 75% HumanEval) generate, review, and test code privately without cloud APIs. Complete setup guides for VS Code and Cursor.',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-for-coding-workflows',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-24',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'url': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5-Coder 32B' },
          { '@type': 'Thing', 'name': 'Local code generation' },
          { '@type': 'Thing', 'name': 'HumanEval benchmark' },
          { '@type': 'Thing', 'name': 'Continue.dev VS Code' },
          { '@type': 'Thing', 'name': 'Ollama code generation' },
        ],
        'audience': { '@type': 'Audience', 'audienceType': 'Developers setting up local coding AI on consumer hardware' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Which local LLM is best for coding in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B (92.7% HumanEval) for maximum quality on 24 GB VRAM. Qwen2.5-Coder 7B (72%) for speed on 5 GB VRAM. For MacBook: Qwen2.5-Coder 7B runs at 30–60 tok/sec on M1 Pro+.' } },
          { '@type': 'Question', 'name': 'How does Qwen2.5-Coder 32B compare to GitHub Copilot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B scores 92.7% on HumanEval — within 2% of Copilot\'s backend (~94%). Speed: local is 2–5 seconds vs Copilot\'s ~300ms. Quality is near-parity. Cost: local $0/month after hardware; Copilot $228/year.' } },
          { '@type': 'Question', 'name': 'Can I use a local coding LLM in VS Code?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — install Continue.dev (free, open source). Configure to connect to Ollama at localhost:11434. Tab or Ctrl+Shift+\\\\ triggers suggestions. Works with all Ollama models.' } },
          { '@type': 'Question', 'name': 'Is Copilot or local LLM better for a proprietary codebase?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Local LLM. With Copilot, code is sent to Microsoft/OpenAI servers. Local keeps code on-device. For regulated industries (finance, healthcare, defense), local is the only compliant option.' } },
          { '@type': 'Question', 'name': 'How much VRAM do I need for a local coding LLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum: 5 GB for Qwen2.5-Coder 7B Q4. Recommended: 8 GB. Premium: 24 GB for Qwen2.5-Coder 32B. RTX 4060 Ti (8 GB) runs 7B. RTX 4070 (12 GB) runs 14–16B. RTX 4090 (24 GB) runs 32B.' } },
          { '@type': 'Question', 'name': 'Does local coding LLM support autocomplete like Copilot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — via Continue.dev or Cursor editor. Both support fill-in-the-middle (FIM) where model sees code above/below cursor. Qwen2.5-Coder 7B supports FIM natively. Response: 1–3 sec on GPU vs Copilot\'s 200–300ms.' } },
          { '@type': 'Question', 'name': 'Can I fine-tune a coding model on my codebase?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — use LoRA/QLoRA with Unsloth. Prepare 500+ examples in instruction format. Fine-tuning Qwen2.5-Coder 7B takes 1–2 hours on 8 GB VRAM. Typical accuracy gain: 10–15%.' } },
          { '@type': 'Question', 'name': 'Which coding LLM supports the most programming languages?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B and DeepSeek-Coder-V2 both support 90+ languages: Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash, Ruby. Best for niche languages: Qwen2.5-Coder 32B.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Best Local Coding LLMs by HumanEval Score 2026',
        'numberOfItems': 6,
        'inLanguage': 'en',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen2.5-Coder 32B', 'description': '92.7% HumanEval. 22 GB VRAM Q4. Best local coding model. ollama pull qwen2.5-coder:32b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'CodeLlama 34B', 'description': '75% HumanEval. 22 GB VRAM Q4. Legacy Llama-based coding model.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Qwen2.5-Coder 7B', 'description': '72% HumanEval. 4.7 GB VRAM Q4. Fastest balanced coding model. ollama pull qwen2.5-coder:7b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek-Coder-V2 16B', 'description': '79% HumanEval. 10 GB VRAM Q4. Strong multi-language support.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mistral 7B', 'description': '61% HumanEval. 4.5 GB VRAM Q4. Lightweight, EU GDPR compliant.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Phi-4 Mini 3.8B', 'description': '58% HumanEval. 2.5 GB VRAM Q4. Ultra-light for quick suggestions.' },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Fortgeschrittene Techniken',
      title: 'Lokale LLMs für Programmier-Workflows: Code-Generierung, Überprüfung und Tests',
      seoTitle: 'Beste lokale Programmiermodelle 2026: 72–92,7% Genauigkeit',
      intro: 'Lokale LLMs können beim Programmieren helfen: Boilerplate generieren, Code überprüfen, Tests schreiben und Funktionen erklären. Ab April 2026 erreichen Modelle wie Qwen2.5-Coder 32B und CodeLlama 34B 72–92,7% Genauigkeit auf HumanEval-Benchmarks. Die Geschwindigkeit ist langsamer als Cloud-Lösungen (2–5 Sekunden pro Antwort), aber Ihr Code bleibt privat.',
      metaDescription: 'Lokale Kodierungsmodelle (Qwen2.5-Coder, CodeLlama) erreichen 72–92,7% HumanEval-Genauigkeit. Generieren, überprüfen und testen Sie Code privat ohne Cloud-APIs. Setup-Anleitungen für VS Code und Cursor.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-24',
      leadAnswerBlock: '**Lokale LLMs können beim Programmieren helfen: Boilerplate generieren, Code überprüfen, Tests schreiben und Funktionen erklären. Ab April 2026 erreichen Modelle wie Qwen2.5-Coder 32B (92,7% HumanEval) und CodeLlama 34B (75% HumanEval) moderne Genauigkeit auf Programmierungs-Benchmarks.**',
      audience: 'Entwickler, die lokale Programmier-KI auf Consumer-Hardware einrichten',
      readTime: '11 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Programmieren mit lokalen LLMs',
      toc: [
        { label: 'Wichtigste Punkte', anchor: '#key-takeaways' },
        { label: 'Beste Programmiermodelle', anchor: '#best-models' },
        { label: 'Code-Generierung', anchor: '#code-generation' },
        { label: 'Code-Überprüfungs-Workflows', anchor: '#code-review' },
        { label: 'Test-Generierung', anchor: '#test-generation' },
        { label: 'IDE-Integration', anchor: '#ide-integration' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
        { label: 'Verwandte Ressourcen', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/local-llms-for-coding-workflows-static.html',
      gammaDescription: 'Das Foliendeck unten behandelt: beste lokale Programmiermodelle (Qwen2.5-Coder 92,7%, CodeLlama 75%), Code-Generierung mit Prompt Engineering, Code-Review-Workflows, Test-Generierung, VS Code/Cursor IDE-Integration und häufige Fehler. PDF als lokale Programmier-KI-Referenzkarte herunterladen.',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Beste Programmiermodelle (2026):** Qwen2.5-Coder 32B (92,7% HumanEval), Qwen2.5-Coder 7B (72% HumanEval), CodeLlama 34B (75%).',
            '**Geschwindigkeit:** 2–5 Sekunden pro Code-Vorschlag. Schnell genug für die Entwicklung, langsamer als GitHub Copilot (~300ms).',
            '**Datenschutz:** Code verlässt Ihren Computer nie. Kritisch für proprietäre Codebasen.',
            '**Anwendungsfälle:** Boilerplate-Generierung, Code-Überprüfung, Test-Schreiben, Dokumentation. Nicht für komplexe Architektur-Entscheidungen geeignet.',
            'Ab April 2026 ist lokale Programmier-KI praktisch für Solo-Entwickler und kleine Teams.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Welche Modelle funktionieren am besten für lokales Programmieren?',
          content: [
            '**Die besten lokalen Programmiermodelle bieten Genauigkeit, Geschwindigkeit und Speichereffizienz. Qwen2.5-Coder 32B führt bei der Genauigkeit (92,7%), während Qwen2.5-Coder 7B die beste Geschwindigkeit/Qualität-Balance bietet.**',
          ],
          callouts: [
            { type: 'tip', text: '**Profi-Tipp:** Beginnen Sie mit Qwen2.5-Coder 7B, wenn Sie 4–6 GB VRAM haben (72% Genauigkeit). Für maximale Genauigkeit nutzen Sie Qwen2.5-Coder 32B auf 24 GB+ VRAM (92,7% Genauigkeit). CodeLlama 34B ist ein solider 75%-Mittelweg.' },
          ],
          rows: [
            { 'Modell': 'Qwen2.5-Coder 32B', 'HumanEval': '92,7%', 'VRAM': '22 GB', 'Geschwindigkeit': 'Langsam (3–5 Sek.)', 'Am besten für': 'Maximale Genauigkeit' },
            { 'Modell': 'CodeLlama 34B', 'HumanEval': '75%', 'VRAM': '22 GB', 'Geschwindigkeit': 'Langsam (3–5 Sek.)', 'Am besten für': 'Hohe Qualität' },
            { 'Modell': 'Qwen2.5-Coder 7B', 'HumanEval': '72%', 'VRAM': '4,7 GB', 'Geschwindigkeit': 'Sehr schnell', 'Am besten für': 'Geschwindigkeit/Qualität-Balance' },
            { 'Modell': 'DeepSeek-Coder 6,7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Geschwindigkeit': 'Sehr schnell', 'Am besten für': 'Kleine und effiziente Modelle' },
          ],
          columns: ['Modell', 'HumanEval %', 'VRAM', 'Inferenz-Geschwindigkeit', 'Am besten für'],
        },
        codeGeneration: {
          id: 'code-generation',
          title: 'Wie generiert man Code mit lokalen LLMs?',
          content: [
            '**Stellen Sie eine Funktionssignatur + Docstring bereit und lassen Sie das Modell die Implementierung generieren. Die Code-Qualität hängt stark vom Prompt-Kontext ab.**',
          ],
          callouts: [
            { type: 'insight', text: '📍 **Wichtiger Hinweis:** Funktionssignaturen sind wichtiger als Prosa. Fügen Sie Typen, Docstrings und Beispiel-Ein-/Ausgaben ein, um das Modell zu lenken.' },
          ],
          codeBlock: '# Prompt-Design für Code-Generierung\nprompt = """\nImplementieren Sie die folgende Funktion:\n\ndef merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]:\n    \\"\\"\"\n    Merge two sorted arrays into a single sorted array.\n    Args:\n        arr1: First sorted array\n        arr2: Second sorted array\n    Returns:\n        Merged sorted array\n    \\"\\"\"\n    # Implementation:\n"""\n\n# Model outputs implementation\n# Expected: Two-pointer merge algorithm',
          codeLanguage: 'python',
          promptExamples: [
            { label: '❌ Schlechter Prompt', text: 'Generieren Sie Code zum Zusammenführen von Arrays' },
            { label: '✅ Guter Prompt', text: 'Implementieren Sie merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int] mit einem Zwei-Zeiger-Algorithmus. Docstring: Merge two sorted arrays into a single sorted array.' },
          ],
        },
        codeReview: {
          id: 'code-review',
          title: 'Wie überprüft man Code mit lokalen LLMs?',
          content: [
            '**Fordern Sie das Modell auf, Code auf Fehler, Stil und Leistung zu überprüfen. Lokale Modelle sind gut bei der Erkennung häufiger Fehler, kämpfen aber mit Architektur-Entscheidungen.**',
          ],
          callouts: [
            { type: 'warning', text: '⚠️ **Warnung:** Lokale Modelle verstehen einzelne Funktionen, nicht Systemarchitektur. Verwenden Sie sie für Lint-ähnliche Checks, nicht für Design-Überprüfungen.' },
          ],
          items: [
            'Prompt: "Überprüfen Sie diesen Code auf Fehler, Sicherheitsprobleme und Leistung." + Code-Snippet.',
            'Modell identifiziert: Ungenutzte Variablen, potenzielle None-Fehler, ineffiziente Schleifen.',
            'Einschränkungen: Kann komplexe Domänenlogik oder Architekturmuster nicht verstehen.',
          ],
        },
        testGeneration: {
          id: 'test-generation',
          title: 'Wie generiert man Tests?',
          content: [
            '**Geben Sie den Funktionscode dem Modell mit einem Prompt für Unit-Tests. Binden Sie Edge Cases und Fehlerbedingungen in Ihren Prompt ein.**',
          ],
          callouts: [
            { type: 'practice', text: '🛠️ **Best Practice:** Fordern Sie Tests an, die Normal-, Edge- und Fehlerfälle abdecken. Beispiel: "Schreiben Sie pytest-Tests mit 3 normalen, 3 Edge-, 2 Fehlerfällen."' },
          ],
          codeBlock: '# Prompt für Test-Generierung\nprompt = """\nSchreiben Sie umfassende Unit-Tests für diese Funktion:\n\n[function code]\n\nGenerieren Sie Tests für:\n- Normal cases\n- Edge cases\n- Error cases\n\nVerwenden Sie pytest-Format:\n"""\n\n# Model generates test_* functions with assertions',
          codeLanguage: 'python',
        },
        ideIntegration: {
          id: 'ide-integration',
          title: 'Wie richten Sie die IDE-Integration ein?',
          content: [
            '**Verwenden Sie [VS Code mit Continue.dev](/local-llms/local-llms-with-vscode-cursor?lang=de) oder wechseln Sie zum Cursor-Editor für native Unterstützung lokaler LLMs. Beide ermöglichen Inline-Code-Vorschläge, die mit Tastaturbefehlen ausgelöst werden.**',
          ],
          callouts: [
            { type: 'note', text: '📌 **Hinweis:** Continue.dev erfordert einen lokal laufenden Ollama-Server. Der Cursor-Editor (auf VS Code basierend) hat eine eingebaute Ollama-Unterstützung — kein zusätzliches Setup erforderlich.' },
          ],
          items: [
            'VS Code + Continue.dev: Installieren Sie die Erweiterung und weisen Sie sie auf den lokalen Ollama-Server hin (http://localhost:11434).',
            'Cursor-Editor: Eingebaute Unterstützung für Ollama. Kein Setup erforderlich.',
            'Inline-Vervollständigungen: Ctrl+Shift+\\\\ (VS Code) oder Cmd+Shift+\\\\ (Mac) löst einen lokalen LLM-Vorschlag aus.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Welche häufigen Fehler gibt es?',
          items: [
            '**Generiertem Code ohne Überprüfung vertrauen.** Generierter Code kann Fehler enthalten. Überprüfen Sie immer.',
            '**Zu kleine Modelle verwenden.** Qwen2.5-Coder 7B ist das Minimum für praktisches Programmieren. 3B-Modelle produzieren schlechten Code.',
            '**Keine Kontextinformationen bereitstellen.** Code-Qualität hängt vom Prompt-Kontext ab. Stellen Sie eine Funktionssignatur, Typen und Docstrings bereit.',
            '**Erwartungen an das Verständnis von Architektur.** Lokale Modelle verstehen einzelne Funktionen, nicht Systemdesign.',
            '**Kein Programmierungsmodell verwenden.** Allzweck-Modelle (Llama 3.1 8B, Mistral 7B) erzielen 15–25% niedrigere Ergebnisse auf HumanEval als Programmierungsmodelle (Qwen2.5-Coder 7B: 72% vs. Llama 3.1 8B: 55%). Nutzen Sie immer ein Modell, das speziell für Code trainiert wurde. In Ollama: `ollama pull qwen2.5-coder:7b` — nicht `ollama pull llama3.1:8b` für Programmierungsaufgaben.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Welches lokale LLM ist 2026 am besten für Programmieren?',
              a: 'Qwen2.5-Coder 32B (92,7% HumanEval) für maximale Qualität auf 24 GB VRAM. Qwen2.5-Coder 7B (72%) für Geschwindigkeit auf 5 GB VRAM. Für MacBook-Nutzer mit Apple Silicon: Qwen2.5-Coder 7B läuft via Ollama mit 30–60 Token/sec auf M1 Pro+.',
            },
            {
              q: 'Wie vergleicht sich Qwen2.5-Coder 32B mit GitHub Copilot?',
              a: 'Qwen2.5-Coder 32B erreicht 92,7% auf HumanEval — innerhalb von 2% von Copilots GPT-5.2-Backend (~94%). Geschwindigkeit: lokal 2–5 Sekunden vs. Copilots ~300ms (Cloud-Vorteil). Qualität ist nahezu gleichwertig. Datenschutz: lokal hält Code auf dem Gerät. Kosten: lokal 0 €/Monat nach Hardware; Copilot ca. 188 €/Jahr.',
            },
            {
              q: 'Kann ich ein lokales Programmierungsmodell in VS Code verwenden?',
              a: 'Ja — installieren Sie die Continue.dev-Erweiterung (kostenlos, Open Source). Konfigurieren Sie sie für die Verbindung zu Ollama auf localhost:11434. Inline-Vervollständigungen werden durch Tab oder Ctrl+Shift+\\\\ ausgelöst. Continue.dev unterstützt Qwen2.5-Coder, DeepSeek-Coder und alle Ollama-Modelle.',
            },
            {
              q: 'Ist Copilot oder ein lokales LLM besser für eine proprietäre Codebasis?',
              a: 'Lokales LLM. Bei Copilot wird Ihr Code an Microsoft/OpenAI-Server für Inferenz gesendet. Bei einem lokalen Modell auf Ollama verlässt Code nie Ihren Computer. Für regulierte Industrien (Finanz, Gesundheit, Verteidigung) ist lokal die einzige konforme Option. Der Qualitätsgap ist ~2% auf HumanEval — minimal.',
            },
            {
              q: 'Wie viel VRAM benötige ich für ein lokales Programmierungsmodell?',
              a: 'Minimum: 5 GB VRAM für Qwen2.5-Coder 7B Q4. Empfohlen: 8 GB für komfortable 7B-Inferenz. Premium: 24 GB für Qwen2.5-Coder 32B (beste Qualität). RTX 4060 Ti (8 GB) führt 7B-Modelle aus. RTX 4070 (12 GB) führt 14–16B-Modelle aus. RTX 4090/5090 (24–32 GB) führt 32B-Modelle aus.',
            },
            {
              q: 'Unterstützt ein lokales Programmierungsmodell Autovervollständigung wie Copilot?',
              a: 'Ja — via Continue.dev oder Cursor-Editor. Beide unterstützen den FIM-Modus (Fill-In-The-Middle), bei dem das Modell Code oben und unten des Cursors sieht und die Mitte generiert. Qwen2.5-Coder 7B unterstützt FIM nativ. Antwortzeit: 1–3 Sekunden auf GPU (vs. Copilots 200–300ms Cloud).',
            },
            {
              q: 'Kann ich ein Programmierungsmodell auf meiner Codebasis fein abstimmen?',
              a: 'Ja — nutzen Sie LoRA/QLoRA mit Unsloth. Bereiten Sie 500+ Code-Beispiele aus Ihrer Codebasis in Anweisungsformat vor (Eingabe: Funktionssignatur + Docstring, Ausgabe: Implementierung). Das Fein-Abstimmen von Qwen2.5-Coder 7B dauert 1–2 Stunden auf 8 GB VRAM. Typische Genauigkeitssteigerung: 10–15% bei Ihren spezifischen Code-Mustern.',
            },
            {
              q: 'Welches Programmierungsmodell unterstützt die meisten Programmiersprachen?',
              a: 'Qwen2.5-Coder 32B und DeepSeek-Coder-V2 unterstützen beide 90+ Sprachen, darunter Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash und Ruby. CodeLlama ist am stärksten bei Python und C++. Für Nischensprachen (Haskell, Erlang, Elixir) hat Qwen2.5-Coder 32B die umfassendste Unterstützung.',
            },
            {
              q: 'Muss ich die DSGVO bei der Verwendung von lokalen Programmierungsmodellen beachten?',
              a: 'Ja, aber lokale Modelle helfen bei der DSGVO-Konformität. Nach DSGVO-Artikel 28 und 32 müssen Sie Sicherheitsmaßnahmen implementieren. Lokale Ausführung auf Ihren Systemen erfüllt Anforderungen an Datenschutz nach dem aktuellen Stand der Technik und BSI-Grundschutz-Kataloge. Cloud-APIs (OpenAI, Microsoft) erfordern Datenverarbeitungsverträge. Lokale Systeme reduzieren Datentransfer-Risiken.',
            },
            {
              q: 'Sind lokale Programmierungsmodelle für den deutschen Mittelstand geeignet?',
              a: 'Ja. Für KMUs und Mittelstand-Unternehmen bieten lokale Modelle Vorteile: keine Cloud-Abhängigkeit, Compliance mit BSI-Grundschutz-Katalogen, kostengünstig nach der Erstinvestition (keine laufenden API-Gebühren). Qwen2.5-Coder 7B auf einer RTX 4070 (ca. 329 €) oder als lokaler Service in bestehenden IT-Infrastrukturen. Ideal für Softwareentwicklung, Wartung und Code-Überprüfung in Unternehmen mit Daten-Sensibilität.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Verwandte Ressourcen',
          items: [
            '[Lokale LLMs mit VS Code und Cursor](/local-llms/local-llms-with-vscode-cursor?lang=de) — Detaillierte Setup-Anleitung für beide IDEs',
            '[Prompt-Engineering-Anleitung](/prompt-engineering?lang=de) — Beherrschen Sie Prompt-Techniken, um die Code-Generierung zu verbessern',
            '[Beste lokale LLMs für Programmieren](/local-llms/best-local-llms-for-coding?lang=de) — Detaillierte Benchmarks und Modellvergleiche',
            '[Lokaler LLM-Hardware-Leitfaden 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — GPU-Anforderungen und Kostenanalyse',
            '[Lokale RAG zur Code-Suche](/local-llms/local-rag-2026?lang=de) — Durchsuchen Sie bestehenden Code mit semantischem Verständnis',
            '[Private lokale KI für Business](/local-llms/private-local-ai-for-business?lang=de) — Enterprise-Bereitstellung und Compliance',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[HumanEval-Benchmark](https://github.com/openai/human-eval) — Offizieller Code-Generierungs-Benchmark von OpenAI',
            '[Qwen2.5-Coder-Modellkarte](https://github.com/QwenLM/Qwen2.5-Coder) — Qwen2.5-Coder-Modellspezifikationen und Evaluierungsergebnisse',
            '[Continue.dev-IDE-Erweiterung](https://continue.dev) — Open-Source-IDE-Unterstützung für lokale und Cloud-LLMs',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lokale LLMs für Programmier-Workflows 2026: Qwen2.5-Coder 92% HumanEval',
        'description': 'Lokale Programmierungsmodelle (Qwen2.5-Coder 32B: 92,7% HumanEval, CodeLlama 34B: 75% HumanEval) generieren, überprüfen und testen Code privat ohne Cloud-APIs. Komplette Setup-Anleitungen für VS Code und Cursor.',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-for-coding-workflows?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-24',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'url': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5-Coder 32B' },
          { '@type': 'Thing', 'name': 'Lokale Code-Generierung' },
          { '@type': 'Thing', 'name': 'HumanEval-Benchmark' },
          { '@type': 'Thing', 'name': 'Continue.dev VS Code' },
          { '@type': 'Thing', 'name': 'Ollama Code-Generierung' },
        ],
        'audience': { '@type': 'Audience', 'audienceType': 'Entwickler, die lokale Programmier-KI auf Consumer-Hardware einrichten' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Welches lokale LLM ist 2026 am besten für Programmieren?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B (92,7% HumanEval) für maximale Qualität auf 24 GB VRAM. Qwen2.5-Coder 7B (72%) für Geschwindigkeit auf 5 GB VRAM. Für MacBook: Qwen2.5-Coder 7B mit 30–60 Token/sec auf M1 Pro+.' } },
          { '@type': 'Question', 'name': 'Wie vergleicht sich Qwen2.5-Coder 32B mit GitHub Copilot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B erreicht 92,7% auf HumanEval — innerhalb von 2% von Copilots Backend (~94%). Geschwindigkeit: lokal 2–5 Sekunden vs. Copilots ~300ms. Qualität ist nahezu gleichwertig. Kosten: lokal 0 €/Monat nach Hardware; Copilot ca. 188 €/Jahr.' } },
          { '@type': 'Question', 'name': 'Kann ich ein lokales Programmierungsmodell in VS Code verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja — installieren Sie Continue.dev (kostenlos, Open Source). Konfigurieren Sie es für Ollama auf localhost:11434. Tab oder Ctrl+Shift+\\\\ löst Vorschläge aus. Funktioniert mit allen Ollama-Modellen.' } },
          { '@type': 'Question', 'name': 'Ist Copilot oder ein lokales LLM besser für eine proprietäre Codebasis?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Lokales LLM. Bei Copilot wird Code an Microsoft/OpenAI-Server gesendet. Lokal bleibt Code auf Ihrem Gerät. Für regulierte Industrien (Finanz, Gesundheit, Verteidigung) ist lokal die einzige konforme Option.' } },
          { '@type': 'Question', 'name': 'Wie viel VRAM benötige ich für ein lokales Programmierungsmodell?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum: 5 GB für Qwen2.5-Coder 7B Q4. Empfohlen: 8 GB. Premium: 24 GB für Qwen2.5-Coder 32B. RTX 4060 Ti (8 GB) für 7B. RTX 4070 (12 GB) für 14–16B. RTX 4090 (24 GB) für 32B.' } },
          { '@type': 'Question', 'name': 'Unterstützt ein lokales Programmierungsmodell Autovervollständigung wie Copilot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja — via Continue.dev oder Cursor-Editor. Beide unterstützen FIM (Fill-In-The-Middle), bei dem das Modell Code oben/unten sieht. Qwen2.5-Coder 7B unterstützt FIM nativ. Antwortzeit: 1–3 Sekunden auf GPU vs. Copilots 200–300ms.' } },
          { '@type': 'Question', 'name': 'Kann ich ein Programmierungsmodell auf meiner Codebasis fein abstimmen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja — nutzen Sie LoRA/QLoRA mit Unsloth. Bereiten Sie 500+ Beispiele in Anweisungsformat vor. Fein-Abstimmung von Qwen2.5-Coder 7B dauert 1–2 Stunden auf 8 GB VRAM. Typische Steigerung: 10–15%.' } },
          { '@type': 'Question', 'name': 'Welches Programmierungsmodell unterstützt die meisten Programmiersprachen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B und DeepSeek-Coder-V2 unterstützen 90+ Sprachen: Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash, Ruby. Für Nischensprachen: Qwen2.5-Coder 32B am besten.' } },
          { '@type': 'Question', 'name': 'Muss ich die DSGVO bei der Verwendung von lokalen Programmierungsmodellen beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, aber lokale Modelle helfen bei der DSGVO-Konformität. Nach Artikel 28 und 32 implementieren Sie Sicherheitsmaßnahmen. Lokale Ausführung erfüllt BSI-Grundschutz-Kataloge. Cloud-APIs erfordern Datenverarbeitungsverträge. Lokal reduzieren Sie Datentransfer-Risiken.' } },
          { '@type': 'Question', 'name': 'Sind lokale Programmierungsmodelle für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. KMUs erhalten: keine Cloud-Abhängigkeit, BSI-Grundschutz-Konformität, kostengünstig nach Erstinvestition. Qwen2.5-Coder 7B auf RTX 4070 (ca. 329 €) oder als lokaler Service. Ideal für Softwareentwicklung, Wartung und Code-Überprüfung mit Daten-Sensibilität.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Beste lokale Programmier-LLMs nach HumanEval-Score 2026',
        'numberOfItems': 6,
        'inLanguage': 'de',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen2.5-Coder 32B', 'description': '92,7% HumanEval. 22 GB VRAM Q4. Bestes lokales Programmierungsmodell. ollama pull qwen2.5-coder:32b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'CodeLlama 34B', 'description': '75% HumanEval. 22 GB VRAM Q4. Legacy Llama-basiertes Programmierungsmodell.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Qwen2.5-Coder 7B', 'description': '72% HumanEval. 4,7 GB VRAM Q4. Schnellstes ausgewogenes Programmierungsmodell. ollama pull qwen2.5-coder:7b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek-Coder-V2 16B', 'description': '79% HumanEval. 10 GB VRAM Q4. Starke Mehrsprachunterstützung.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mistral 7B', 'description': '61% HumanEval. 4,5 GB VRAM Q4. Leichtgewicht, EU DSGVO-konform.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Phi-4 Mini 3,8B', 'description': '58% HumanEval. 2,5 GB VRAM Q4. Ultra-light für schnelle Vorschläge.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques avancées',
      title: 'LLMs locaux pour les workflows de programmation : génération, examen et test de code',
      seoTitle: 'Modèles IA locaux pour le code 2026 : Qwen2.5-Coder 92% HumanEval',
      intro: 'Les LLMs locaux peuvent vous aider en programmation : générer du boilerplate, examiner le code, écrire des tests et expliquer les fonctions. En avril 2026, des modèles comme Qwen2.5-Coder 32B et CodeLlama 34B atteignent 72–92,7% de précision sur les benchmarks HumanEval. La vitesse est plus lente que le cloud (2–5 secondes par réponse), mais votre code reste privé.',
      metaDescription: 'Modèles de programmation locaux (Qwen2.5-Coder, CodeLlama) atteignent 72–92,7% de précision HumanEval. Générez, examinez et testez le code en privé sans APIs cloud. Guides complets pour VS Code et Cursor.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-24',
      leadAnswerBlock: '**Les LLMs locaux peuvent vous aider en programmation : générer du boilerplate, examiner le code, écrire des tests et expliquer les fonctions. En avril 2026, des modèles comme Qwen2.5-Coder 32B (92,7% HumanEval) et CodeLlama 34B (75% HumanEval) atteignent une précision de pointe sur les benchmarks de programmation.**',
      audience: 'Développeurs configurant l\'IA de programmation locale sur du matériel grand public',
      readTime: '11 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'programmer avec des LLMs locaux',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Meilleurs modèles de programmation', anchor: '#best-models' },
        { label: 'Génération de code', anchor: '#code-generation' },
        { label: 'Workflows d\'examen de code', anchor: '#code-review' },
        { label: 'Génération de tests', anchor: '#test-generation' },
        { label: 'Intégration IDE', anchor: '#ide-integration' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Foire aux questions', anchor: '#faq' },
        { label: 'Lecture associée', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/local-llms-for-coding-workflows-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : les meilleurs modèles de programmation locale (Qwen2.5-Coder 92,7%, CodeLlama 75%), la génération de code avec l\'ingénierie des prompts, les workflows d\'examen de code, la génération de tests, l\'intégration IDE VS Code/Cursor et les erreurs courantes. Télécharger le PDF comme carte de référence pour l\'IA locale.',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Meilleurs modèles de programmation (2026) :** Qwen2.5-Coder 32B (92,7% HumanEval), Qwen2.5-Coder 7B (72% HumanEval), CodeLlama 34B (75%).',
            '**Vitesse :** 2–5 secondes par suggestion de code. Assez rapide pour le développement, plus lent que GitHub Copilot (~300ms).',
            '**Confidentialité :** Le code ne quitte jamais votre machine. Critique pour les bases de code propriétaires.',
            '**Cas d\'usage :** Génération de boilerplate, examen de code, rédaction de tests, documentation. Inadapté pour les décisions architecturales complexes.',
            'En avril 2026, l\'IA de programmation locale est pratique pour les développeurs indépendants et les petites équipes.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Quels modèles fonctionnent le mieux pour la programmation locale ?',
          content: [
            '**Les meilleurs modèles de programmation locaux équilibrent la précision, la vitesse et l\'efficacité mémoire. Qwen2.5-Coder 32B excelle en précision (92,7%), tandis que Qwen2.5-Coder 7B offre le meilleur équilibre vitesse/qualité.**',
          ],
          callouts: [
            { type: 'tip', text: '**Conseil Pro :** Commencez avec Qwen2.5-Coder 7B si vous avez 4–6 GB de VRAM (72% de précision). Pour une précision maximale, utilisez Qwen2.5-Coder 32B sur 24 GB+ de VRAM (92,7% de précision). CodeLlama 34B offre un bon compromis à 75%.' },
          ],
          rows: [
            { 'Modèle': 'Qwen2.5-Coder 32B', 'HumanEval': '92,7%', 'VRAM': '22 GB', 'Vitesse': 'Lente (3–5 sec)', 'Meilleur pour': 'Précision maximale' },
            { 'Modèle': 'CodeLlama 34B', 'HumanEval': '75%', 'VRAM': '22 GB', 'Vitesse': 'Lente (3–5 sec)', 'Meilleur pour': 'Haute qualité' },
            { 'Modèle': 'Qwen2.5-Coder 7B', 'HumanEval': '72%', 'VRAM': '4,7 GB', 'Vitesse': 'Très rapide', 'Meilleur pour': 'Équilibre vitesse/qualité' },
            { 'Modèle': 'DeepSeek-Coder 6,7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Vitesse': 'Très rapide', 'Meilleur pour': 'Modèles petits et efficaces' },
          ],
          columns: ['Modèle', 'HumanEval %', 'VRAM', 'Vitesse d\'inférence', 'Meilleur pour'],
        },
        codeGeneration: {
          id: 'code-generation',
          title: 'Comment générer du code avec des LLMs locaux ?',
          content: [
            '**Fournissez une signature de fonction + docstring, et laissez le modèle générer l\'implémentation. La qualité du code dépend fortement du contexte du prompt.**',
          ],
          callouts: [
            { type: 'insight', text: '📍 **Point clé :** Les signatures de fonction comptent plus que le texte libre. Incluez les types, les docstrings et les exemples d\'entrée/sortie pour guider le modèle.' },
          ],
          codeBlock: '# Design de prompt pour la génération de code\nprompt = """\nImplémentez la fonction suivante:\n\ndef merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]:\n    \\"\\"\"\n    Merge two sorted arrays into a single sorted array.\n    Args:\n        arr1: First sorted array\n        arr2: Second sorted array\n    Returns:\n        Merged sorted array\n    \\"\\"\"\n    # Implementation:\n"""\n\n# Model outputs implementation\n# Expected: Two-pointer merge algorithm',
          codeLanguage: 'python',
          promptExamples: [
            { label: '❌ Mauvais prompt', text: 'Générer du code pour fusionner des tableaux' },
            { label: '✅ Bon prompt', text: 'Implémentez merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int] en utilisant un algorithme à deux pointeurs. Docstring: Fusionner deux tableaux triés dans un seul tableau trié.' },
          ],
        },
        codeReview: {
          id: 'code-review',
          title: 'Comment examiner le code avec des LLMs locaux ?',
          content: [
            '**Demandez au modèle d\'examiner le code pour les bugs, le style et la performance. Les modèles locaux excellent à détecter les erreurs courantes mais échouent avec les décisions architecturales.**',
          ],
          callouts: [
            { type: 'warning', text: '⚠️ **Avertissement :** Les modèles locaux comprennent les fonctions individuelles, pas l\'architecture système. Utilisez-les pour des vérifications de type lint, pas pour l\'examen de conception.' },
          ],
          items: [
            'Prompt : "Examinez ce code pour les bugs, les problèmes de sécurité et la performance." + snippet de code.',
            'Le modèle identifie : variables inutilisées, erreurs None potentielles, boucles inefficaces.',
            'Limitations : Ne peut pas comprendre la logique métier complexe ou les modèles architecturaux.',
          ],
        },
        testGeneration: {
          id: 'test-generation',
          title: 'Comment générer des tests ?',
          content: [
            '**Fournissez le code de la fonction au modèle avec un prompt pour les tests unitaires. Incluez les cas limites et les conditions d\'erreur dans votre prompt.**',
          ],
          callouts: [
            { type: 'practice', text: '🛠️ **Bonne pratique :** Demandez des tests couvrant les cas normaux, les cas limites et les cas d\'erreur. Exemple : "Écrivez des tests pytest avec 3 cas normaux, 3 cas limites, 2 cas d\'erreur."' },
          ],
          codeBlock: '# Prompt pour la génération de tests\nprompt = """\nÉcrivez des tests unitaires complets pour cette fonction :\n\n[function code]\n\nGénérez des tests couvrant :\n- Normal cases\n- Edge cases\n- Error cases\n\nUtilisez le format pytest :\n"""\n\n# Model generates test_* functions with assertions',
          codeLanguage: 'python',
        },
        ideIntegration: {
          id: 'ide-integration',
          title: 'Comment configurer l\'intégration IDE ?',
          content: [
            '**Utilisez [VS Code avec Continue.dev](/local-llms/local-llms-with-vscode-cursor?lang=fr) ou passez à l\'éditeur Cursor pour le support natif des LLMs locaux. Les deux permettent des suggestions de code en ligne déclenchées par des raccourcis clavier.**',
          ],
          callouts: [
            { type: 'note', text: '📌 **Note :** Continue.dev nécessite un serveur Ollama en local. L\'éditeur Cursor (basé sur VS Code) dispose d\'un support Ollama intégré — aucune configuration supplémentaire requise.' },
          ],
          items: [
            'VS Code + Continue.dev : Installez l\'extension et pointez-la vers le serveur Ollama local (http://localhost:11434).',
            'Éditeur Cursor : Support intégré pour Ollama. Aucune configuration requise.',
            'Complétions en ligne : Ctrl+Maj+\\\\ (VS Code) ou Cmd+Maj+\\\\ (Mac) déclenche une suggestion LLM locale.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs courantes ?',
          items: [
            '**Faire confiance au code généré sans examen.** Le code généré peut contenir des bugs. Examinez toujours.',
            '**Utiliser des modèles trop petits.** Qwen2.5-Coder 7B est le minimum pour la programmation pratique. Les modèles 3B produisent du code médiocre.',
            '**Ne pas fournir de contexte.** La qualité du code dépend du contexte du prompt. Fournissez la signature de fonction, les types, les docstrings.',
            '**S\'attendre à une compréhension architecturale.** Les modèles locaux comprennent les fonctions individuelles, pas la conception système.',
            '**Ne pas utiliser un modèle spécialisé en programmation.** Les modèles polyvalents (Llama 3.1 8B, Mistral 7B) obtiennent 15–25% de moins sur HumanEval que les modèles de programmation (Qwen2.5-Coder 7B : 72% vs Llama 3.1 8B : 55%). Utilisez toujours un modèle entraîné spécifiquement pour le code. Dans Ollama : `ollama pull qwen2.5-coder:7b` — pas `ollama pull llama3.1:8b` pour les tâches de programmation.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Foire aux questions',
          faqs: [
            {
              q: 'Quel est le meilleur LLM local pour la programmation en 2026 ?',
              a: 'Qwen2.5-Coder 32B (92,7% HumanEval) pour la qualité maximale sur 24 GB de VRAM. Qwen2.5-Coder 7B (72%) pour la vitesse sur 5 GB de VRAM. Pour les utilisateurs de MacBook avec Apple Silicon : Qwen2.5-Coder 7B s\'exécute via Ollama à 30–60 tokens/sec sur M1 Pro+.',
            },
            {
              q: 'Comment Qwen2.5-Coder 32B se compare-t-il à GitHub Copilot ?',
              a: 'Qwen2.5-Coder 32B obtient 92,7% sur HumanEval — à 2% du backend de Copilot (~94%). Vitesse : local 2–5 secondes vs Copilot ~300ms (avantage cloud). Qualité quasi-équivalente. Confidentialité : local garde le code sur l\'appareil. Coût : local env. 188 €/an après matériel ; Copilot env. 188 €/an.',
            },
            {
              q: 'Puis-je utiliser un LLM de programmation local dans VS Code ?',
              a: 'Oui — installez l\'extension Continue.dev (gratuite, open source). Configurez-la pour se connecter à Ollama sur localhost:11434. Les complétions en ligne se déclenchent avec Tab ou Ctrl+Maj+\\\\. Continue.dev supporte Qwen2.5-Coder, DeepSeek-Coder et tous les modèles Ollama.',
            },
            {
              q: 'Copilot ou LLM local pour une base de code propriétaire ?',
              a: 'LLM local. Avec Copilot, votre code est envoyé aux serveurs Microsoft/OpenAI pour l\'inférence. Avec un modèle local sur Ollama, le code ne quitte jamais votre machine. Pour les secteurs réglementés (finance, santé, défense), local est la seule option conforme.',
            },
            {
              q: 'Combien de VRAM me faut-il pour un LLM de programmation local ?',
              a: 'Minimum : 5 GB de VRAM pour Qwen2.5-Coder 7B Q4. Recommandé : 8 GB pour l\'inférence 7B confortable. Premium : 24 GB pour Qwen2.5-Coder 32B (meilleure qualité). RTX 4060 Ti (8 GB) exécute les modèles 7B. RTX 4070 (12 GB) exécute les modèles 14–16B. RTX 4090 (24 GB) exécute les modèles 32B.',
            },
            {
              q: 'Un LLM de programmation local supporte-t-il l\'autocomplétion comme Copilot ?',
              a: 'Oui — via Continue.dev ou l\'éditeur Cursor. Les deux supportent le mode FIM (Fill-In-The-Middle) où le modèle voit le code au-dessus et au-dessous du curseur et génère le milieu. Qwen2.5-Coder 7B supporte FIM nativement. Temps de réponse : 1–3 secondes sur GPU vs Copilot 200–300ms.',
            },
            {
              q: 'Puis-je affiner un modèle de programmation sur ma base de code ?',
              a: 'Oui — utilisez LoRA/QLoRA avec Unsloth. Préparez 500+ exemples de code de votre base de code au format instruction (entrée : signature de fonction + docstring, sortie : implémentation). L\'affinage de Qwen2.5-Coder 7B prend 1–2 heures sur 8 GB de VRAM. Amélioration typique : 10–15%.',
            },
            {
              q: 'Quel LLM de programmation supporte le plus de langages ?',
              a: 'Qwen2.5-Coder 32B et DeepSeek-Coder-V2 supportent 90+ langages : Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash, Ruby. CodeLlama est le plus fort en Python et C++. Pour les langages de niche (Haskell, Erlang, Elixir), Qwen2.5-Coder 32B a la couverture la plus large.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecture associée',
          items: [
            '[LLMs locaux avec VS Code et Cursor](/local-llms/local-llms-with-vscode-cursor?lang=fr) — Guide de configuration détaillé pour les deux IDEs',
            '[Guide du Prompt Engineering](/prompt-engineering?lang=fr) — Maîtrisez les techniques de prompting pour améliorer la génération de code',
            '[Meilleurs LLMs locaux pour la programmation](/local-llms/best-local-llms-for-coding?lang=fr) — Benchmarks détaillés et comparaisons de modèles',
            '[Guide du matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) — Exigences GPU et analyse des coûts',
            '[RAG local pour la recherche de code](/local-llms/local-rag-2026?lang=fr) — Recherchez le code existant avec compréhension sémantique',
            '[IA locale privée pour les entreprises](/local-llms/private-local-ai-for-business?lang=fr) — Déploiement en entreprise et conformité',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Benchmark HumanEval](https://github.com/openai/human-eval) — Benchmark officiel de génération de code d\'OpenAI',
            '[Fiche modèle Qwen2.5-Coder](https://github.com/QwenLM/Qwen2.5-Coder) — Spécifications du modèle Qwen2.5-Coder et résultats d\'évaluation',
            '[Extension IDE Continue.dev](https://continue.dev) — Support IDE open source pour les LLMs locaux et cloud',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LLMs locaux pour les workflows de programmation 2026 : Qwen2.5-Coder 92% HumanEval',
        'description': 'Modèles de programmation locaux (Qwen2.5-Coder 32B: 92,7% HumanEval, CodeLlama 34B: 75% HumanEval) génèrent, examinent et testent le code en privé sans APIs cloud. Guides complets de configuration pour VS Code et Cursor.',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-for-coding-workflows?lang=fr',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-24',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'url': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5-Coder 32B' },
          { '@type': 'Thing', 'name': 'Génération de code local' },
          { '@type': 'Thing', 'name': 'Benchmark HumanEval' },
          { '@type': 'Thing', 'name': 'Continue.dev VS Code' },
          { '@type': 'Thing', 'name': 'Génération de code Ollama' },
        ],
        'audience': { '@type': 'Audience', 'audienceType': 'Développeurs configurant l\'IA de programmation locale sur du matériel grand public' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Quel est le meilleur LLM local pour la programmation en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B (92,7% HumanEval) pour la qualité maximale sur 24 GB de VRAM. Qwen2.5-Coder 7B (72%) pour la vitesse sur 5 GB de VRAM. Pour MacBook : Qwen2.5-Coder 7B à 30–60 tokens/sec sur M1 Pro+.' } },
          { '@type': 'Question', 'name': 'Comment Qwen2.5-Coder 32B se compare-t-il à GitHub Copilot ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B obtient 92,7% sur HumanEval — à 2% du backend de Copilot (~94%). Vitesse : local 2–5 secondes vs Copilot ~300ms. Qualité quasi-équivalente. Coût : local env. 188 €/an après matériel ; Copilot env. 188 €/an.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser un LLM de programmation local dans VS Code ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui — installez Continue.dev (gratuite, open source). Configurez-la pour Ollama sur localhost:11434. Tab ou Ctrl+Maj+\\\\ déclenche les suggestions. Fonctionne avec tous les modèles Ollama.' } },
          { '@type': 'Question', 'name': 'Copilot ou LLM local pour une base de code propriétaire ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'LLM local. Avec Copilot, le code est envoyé aux serveurs Microsoft/OpenAI. Local garde le code sur l\'appareil. Pour les secteurs réglementés (finance, santé, défense), local est la seule option conforme.' } },
          { '@type': 'Question', 'name': 'Combien de VRAM me faut-il pour un LLM de programmation local ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum : 5 GB pour Qwen2.5-Coder 7B Q4. Recommandé : 8 GB. Premium : 24 GB pour Qwen2.5-Coder 32B. RTX 4060 Ti (8 GB) pour 7B. RTX 4070 (12 GB) pour 14–16B. RTX 4090 (24 GB) pour 32B.' } },
          { '@type': 'Question', 'name': 'Un LLM de programmation local supporte-t-il l\'autocomplétion comme Copilot ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui — via Continue.dev ou Cursor. Les deux supportent FIM (Fill-In-The-Middle). Qwen2.5-Coder 7B supporte FIM nativement. Temps : 1–3 secondes sur GPU vs Copilot 200–300ms.' } },
          { '@type': 'Question', 'name': 'Puis-je affiner un modèle de programmation sur ma base de code ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui — utilisez LoRA/QLoRA avec Unsloth. Préparez 500+ exemples au format instruction. L\'affinage de Qwen2.5-Coder 7B prend 1–2 heures sur 8 GB de VRAM. Amélioration typique : 10–15%.' } },
          { '@type': 'Question', 'name': 'Quel LLM de programmation supporte le plus de langages ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B et DeepSeek-Coder-V2 supportent 90+ langages : Python, JavaScript, TypeScript, Rust, Go, Java, C++, SQL, Bash, Ruby. Pour les langages de niche : Qwen2.5-Coder 32B.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Meilleurs LLMs de programmation locaux par score HumanEval 2026',
        'numberOfItems': 6,
        'inLanguage': 'fr',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen2.5-Coder 32B', 'description': '92,7% HumanEval. 22 GB VRAM Q4. Meilleur modèle de programmation local. ollama pull qwen2.5-coder:32b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'CodeLlama 34B', 'description': '75% HumanEval. 22 GB VRAM Q4. Modèle de programmation Llama hérité.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Qwen2.5-Coder 7B', 'description': '72% HumanEval. 4,7 GB VRAM Q4. Modèle de programmation le plus rapide et équilibré. ollama pull qwen2.5-coder:7b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek-Coder-V2 16B', 'description': '79% HumanEval. 10 GB VRAM Q4. Support multilingue puissant.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mistral 7B', 'description': '61% HumanEval. 4,5 GB VRAM Q4. Léger, conforme au RGPD de l\'UE.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Phi-4 Mini 3,8B', 'description': '58% HumanEval. 2,5 GB VRAM Q4. Ultra-léger pour les suggestions rapides.' },
        ],
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: '高度なテクニック',
      title: 'ローカルLLMによるプログラミングワークフロー：コード生成、審査、テスト',
      seoTitle: 'ローカルAIプログラミング2026: Qwen2.5-Coder 92% HumanEval',
      intro: 'ローカルLLMはプログラミングを支援します：ボイラープレート生成、コード審査、テスト作成、関数説明。2026年4月時点で、Qwen2.5-Coder 32BやCodeLlama 34Bなどのモデルは、HumanEvalベンチマークで72～92.7%の精度を達成します。クラウド（2～5秒/応答）より遅いですが、コードはプライベートです。',
      metaDescription: 'ローカルプログラミングモデル（Qwen2.5-Coder 32B: 92.7%、CodeLlama 34B: 75%）はクラウドAPIなしでコード生成、審査、テストを行います。VS CodeとCursorの完全セットアップガイド。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-24',
      leadAnswerBlock: '**ローカルLLMはプログラミングを支援します：ボイラープレート生成、コード審査、テスト作成、関数説明。2026年4月時点で、Qwen2.5-Coder 32B（92.7% HumanEval）やCodeLlama 34B（75% HumanEval）などのモデルは、プログラミングベンチマークで最先端の精度を達成します。**',
      audience: 'コンシューマーハードウェア上でローカルプログラミングAIをセットアップしている開発者',
      readTime: '11分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'ローカルLLMでのプログラミング',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '最適なプログラミングモデル', anchor: '#best-models' },
        { label: 'コード生成', anchor: '#code-generation' },
        { label: 'コード審査ワークフロー', anchor: '#code-review' },
        { label: 'テスト生成', anchor: '#test-generation' },
        { label: 'IDE統合', anchor: '#ide-integration' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: '関連リソース', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/local-llms-for-coding-workflows-static.html',
      gammaDescription: '下のスライドデッキは以下をカバーしています：ベストローカルコーディングモデル（Qwen2.5-Coder 92.7%、CodeLlama 75%）、プロンプトエンジニアリングを使用したコード生成、コード審査ワークフロー、テスト生成、VS Code/Cursor IDE統合、よくある間違い。PDFをローカルコーディングAIリファレンスカードとしてダウンロード。',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**最適なプログラミングモデル（2026）：** Qwen2.5-Coder 32B（92.7% HumanEval）、Qwen2.5-Coder 7B（72% HumanEval）、CodeLlama 34B（75%）。',
            '**速度：** コード提案あたり2～5秒。開発に十分、GitHub Copilot（~300ms）より遅い。',
            '**プライバシー：** コードはマシンを離れません。proprietary codebaseに重要。',
            '**用途：** ボイラープレート生成、コード審査、テスト作成、ドキュメント。複雑なアーキテクチャ決定には不適切。',
            '2026年4月時点で、ローカルプログラミングAIはソロ開発者と小規模チームに実用的です。',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'ローカルプログラミングに最適なモデルは何か',
          content: [
            '**最適なローカルプログラミングモデルは、精度、速度、メモリ効率のバランスを取ります。Qwen2.5-Coder 32Bは精度で勝り（92.7%）、Qwen2.5-Coder 7Bは最高の速度/品質バランスを提供します。**',
          ],
          callouts: [
            { type: 'tip', text: '**Pro Tip：** 4～6 GB VRAMなら Qwen2.5-Coder 7Bから始めてください（72%精度）。最大精度が必要なら、24 GB+ VRAMで Qwen2.5-Coder 32B（92.7%精度）を使用してください。CodeLlama 34Bは75%の堅い中間選択肢です。' },
          ],
          rows: [
            { 'モデル': 'Qwen2.5-Coder 32B', 'HumanEval': '92.7%', 'VRAM': '22 GB', '速度': '遅い（3～5秒）', '最適用途': '最大精度' },
            { 'モデル': 'CodeLlama 34B', 'HumanEval': '75%', 'VRAM': '22 GB', '速度': '遅い（3～5秒）', '最適用途': '高品質' },
            { 'モデル': 'Qwen2.5-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', '速度': '非常に高速', '最適用途': '速度/品質バランス' },
            { 'モデル': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', '速度': '非常に高速', '最適用途': '小型で効率的' },
          ],
          columns: ['モデル', 'HumanEval %', 'VRAM', '推論速度', '最適用途'],
        },
        codeGeneration: {
          id: 'code-generation',
          title: 'ローカルLLMでコード生成を行う方法',
          content: [
            '**関数シグネチャ + docstringを提供し、モデルに実装を生成させます。コード品質はプロンプト文脈に大きく左右されます。**',
          ],
          callouts: [
            { type: 'insight', text: '📍 **重要：** 関数シグネチャはプロース以上に重要です。型、docstring、入出力例を含めてモデルを導いてください。' },
          ],
          codeBlock: '# コード生成のプロンプト設計\nprompt = """\n以下の関数を実装してください：\n\ndef merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]:\n    \\"\\"\"\n    Merge two sorted arrays into a single sorted array.\n    Args:\n        arr1: First sorted array\n        arr2: Second sorted array\n    Returns:\n        Merged sorted array\n    \\"\\"\"\n    # Implementation:\n"""\n\n# Model outputs implementation\n# Expected: Two-pointer merge algorithm',
          codeLanguage: 'python',
          promptExamples: [
            { label: '❌ 悪いプロンプト', text: '配列をマージするコードを生成してください' },
            { label: '✅ 良いプロンプト', text: 'merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]を二ポインタアルゴリズムで実装してください。Docstring: 2つのソート済み配列を1つのソート済み配列にマージします。' },
          ],
        },
        codeReview: {
          id: 'code-review',
          title: 'ローカルLLMでコード審査を行う方法',
          content: [
            '**モデルにバグ、スタイル、パフォーマンスのコード審査を指示します。ローカルモデルは一般的なミスはよく見つけますが、アーキテクチャ決定では苦しみます。**',
          ],
          callouts: [
            { type: 'warning', text: '⚠️ **警告：** ローカルモデルは個々の関数は理解しますが、システムアーキテクチャは理解しません。Lint的なチェックに使い、設計審査には不向きです。' },
          ],
          items: [
            'プロンプト：「このコードをバグ、セキュリティ問題、パフォーマンスで審査してください」+ コードスニペット。',
            'モデルが識別：未使用変数、潜在的Noneエラー、非効率なループ。',
            '制限：複雑なドメインロジックまたはアーキテクチャパターンは理解できません。',
          ],
        },
        testGeneration: {
          id: 'test-generation',
          title: 'テストを生成する方法',
          content: [
            '**関数コードをモデルに与え、ユニットテストのプロンプトを送ります。エッジケースとエラー条件をプロンプトに含めてください。**',
          ],
          callouts: [
            { type: 'practice', text: '🛠️ **Best Practice：** 通常、エッジ、エラーケースをカバーするテストを要求します。例：「3つの通常、3つのエッジ、2つのエラーケースでpytestテストを書いてください。」' },
          ],
          codeBlock: '# テスト生成のプロンプト\nprompt = """\nこの関数の包括的なユニットテストを書いてください：\n\n[function code]\n\n以下をカバーするテストを生成してください：\n- Normal cases\n- Edge cases\n- Error cases\n\nPytest形式を使用：\n"""\n\n# Model generates test_* functions with assertions',
          codeLanguage: 'python',
        },
        ideIntegration: {
          id: 'ide-integration',
          title: 'IDE統合をセットアップする方法',
          content: [
            '**[VS CodeとCursorを使用](/local-llms/local-llms-with-vscode-cursor?lang=ja)、またはローカルLLMネイティブサポートのためCursorエディタに切り替えます。両方とも、キーボードショートカットでトリガーされるインラインコード提案を許可します。**',
          ],
          callouts: [
            { type: 'note', text: '📌 **注：** Continue.devはローカル実行のOllamaサーバーが必要です。Cursorエディタ（VS Codeベース）にはビルトインOllama対応があります——追加セットアップ不要。' },
          ],
          items: [
            'VS Code + Continue.dev：拡張をインストール、ローカルOllamaサーバーを指す（http://localhost:11434）。',
            'Cursorエディタ：Ollama組み込みサポート。セットアップ不要。',
            'インライン補完：Ctrl+Shift+\\\\ (VS Code) またはCmd+Shift+\\\\ (Mac) でローカルLLM提案をトリガー。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'よくある間違いは何か',
          items: [
            '**審査なしで生成コードを信頼する。** 生成コードはバグを含む可能性があります。常に審査してください。',
            '**小さすぎるモデルを使用する。** Qwen2.5-Coder 7Bは実用的プログラミングの最小値です。3Bモデルは低質なコードを生成します。',
            '**文脈を提供しない。** コード品質はプロンプト文脈に依存します。関数シグネチャ、型、docstringを提供してください。',
            '**アーキテクチャ理解を期待する。** ローカルモデルは個々の関数は理解しますが、システム設計は理解しません。',
            '**プログラミング固有モデルを使わない。** 汎用モデル（Llama 3.1 8B、Mistral 7B）はプログラミングモデル（Qwen2.5-Coder 7B: 72% vs Llama 3.1 8B: 55%）より15～25%低いHumanEval結果を得ます。常にコード用に特別に訓練されたモデルを使用してください。Ollama：`ollama pull qwen2.5-coder:7b` — プログラミングタスクに `ollama pull llama3.1:8b` ではなく。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: '2026年のプログラミング向けベストローカルLLMは？',
              a: '24 GB VRAMで最大品質なら Qwen2.5-Coder 32B（92.7% HumanEval）。5 GB VRAMで速度ならQwen2.5-Coder 7B（72%）。MacBook Apple Silicon：Qwen2.5-Coder 7B via Ollama は M1 Pro+ で 30～60 tokens/sec で実行。',
            },
            {
              q: 'Qwen2.5-Coder 32BはGitHub Copilotとどう比較？',
              a: 'Qwen2.5-Coder 32BはHumanEvalで92.7%を得ます — Copilotバックエンド（~94%）の2%以内。速度：ローカル2～5秒 vs Copilot ~300ms（クラウド優位）。品質はほぼ同等。プライバシー：ローカルはコードをデバイスに保つ。費用：ローカル硬体後0円/月；Copilot 約¥37,200/年。',
            },
            {
              q: 'ローカルプログラミングLLMをVS Codeで使用できる？',
              a: 'はい——Continue.dev拡張をインストール（無料、オープンソース）。localhost:11434のOllamaに接続するよう設定。TabまたはCtrl+Shift+\\\\でインラインサジェストをトリガー。Continue.devはQwen2.5-Coder、DeepSeek-Coder、全Ollamaモデルをサポート。',
            },
            {
              q: 'proprietary codebaseにはCopilotまたはローカルLLMか',
              a: 'ローカルLLM。Copilotでは推論のためコードがMicrosoft/OpenAIサーバーに送られます。Ollama上のローカルモデルはコードがマシンを離れません。規制産業（金融、医療、防衛）ではローカルが唯一のコンプライアント選択肢。',
            },
            {
              q: 'ローカルプログラミングLLMに必要なVRAM量は',
              a: 'Minimum：Qwen2.5-Coder 7B Q4 向け5 GB VRAM。推奨：8 GB で快適な7B推論。Premium：24 GB で Qwen2.5-Coder 32B（最高品質）。RTX 4060 Ti（8 GB）は7Bを実行。RTX 4070（12 GB）は14～16Bを実行。RTX 4090（24 GB）は32Bを実行。',
            },
            {
              q: 'ローカルプログラミングLLMはCopilotのようなオートコンプリートをサポート',
              a: 'はい——Continue.devまたはCursorエディタ経由。両方ともFIM（Fill-In-The-Middle）モードをサポート、モデルはカーソル上下のコードを見て中間を生成。Qwen2.5-Coder 7Bはネイティブにサポート。応答時間：GPU上1～3秒 vs Copilot 200～300ms。',
            },
            {
              q: 'ローカルプログラミングモデルをcodebaseで微調整できる',
              a: 'はい——UnslothでLoRA/QLoRAを使用。codebaseから500+ 例を指示形式で準備（入力：関数シグネチャ + docstring、出力：実装）。8 GB VRAMで Qwen2.5-Coder 7B微調整は1～2時間。典型的精度改善：10～15%。',
            },
            {
              q: 'プログラミング言語をもっともサポートするプログラミングLLMは',
              a: 'Qwen2.5-Coder 32BとDeepSeek-Coder-V2はどちらも90+言語をサポート：Python、JavaScript、TypeScript、Rust、Go、Java、C++、SQL、Bash、Ruby。Niche言語（Haskell、Erlang、Elixir）：Qwen2.5-Coder 32B が最広範囲。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連リソース',
          items: [
            '[VS CodeとCursorでローカルLLM](/local-llms/local-llms-with-vscode-cursor?lang=ja) — 両IDE向けの詳細セットアップガイド',
            '[Prompt Engineering Guide](/prompt-engineering?lang=ja) — コード生成を改善するプロンプト技法をマスター',
            '[プログラミング向けベストローカルLLM](/local-llms/best-local-llms-for-coding?lang=ja) — 詳細なベンチマークとモデル比較',
            '[ローカルLLMハードウェアガイド2026](/local-llms/local-llm-hardware-guide-2026?lang=ja) — GPU要件とコスト分析',
            '[コード検索向けローカルRAG](/local-llms/local-rag-2026?lang=ja) — 意味的理解で既存コードを検索',
            '[ビジネス向けプライベートローカルAI](/local-llms/private-local-ai-for-business?lang=ja) — エンタープライズ展開とコンプライアンス',
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            '[HumanEvalベンチマーク](https://github.com/openai/human-eval) — OpenAI公式コード生成ベンチマーク',
            '[Qwen2.5-Coderモデルカード](https://github.com/QwenLM/Qwen2.5-Coder) — Qwen2.5-Coderモデル仕様と評価結果',
            '[Continue.dev IDE拡張](https://continue.dev) — ローカル/クラウドLLM向けオープンソースIDEサポート',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'ローカルLLMによるプログラミングワークフロー2026: Qwen2.5-Coder 92% HumanEval',
        'description': 'ローカルプログラミングモデル（Qwen2.5-Coder 32B: 92.7% HumanEval、CodeLlama 34B: 75% HumanEval）はクラウドAPIなしでコード生成、審査、テストを行います。VS CodeとCursorの完全セットアップガイド。',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-for-coding-workflows?lang=ja',
        'inLanguage': 'ja',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-24',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5-Coder 32B' },
          { '@type': 'Thing', 'name': 'ローカルコード生成' },
          { '@type': 'Thing', 'name': 'HumanEvalベンチマーク' },
          { '@type': 'Thing', 'name': 'Continue.dev VS Code' },
          { '@type': 'Thing', 'name': 'Ollamaコード生成' },
        ],
        'audience': { '@type': 'Audience', 'audienceType': 'コンシューマーハードウェア上でローカルプログラミングAIをセットアップしている開発者' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ja',
        'mainEntity': [
          { '@type': 'Question', 'name': '2026年のプログラミング向けベストローカルLLMは？', 'acceptedAnswer': { '@type': 'Answer', 'text': '24 GB VRAMで最大品質なら Qwen2.5-Coder 32B（92.7% HumanEval）。5 GB VRAMで速度なら Qwen2.5-Coder 7B（72%）。MacBook：M1 Pro+ で 30～60 tokens/sec。' } },
          { '@type': 'Question', 'name': 'Qwen2.5-Coder 32BはGitHub Copilotとどう比較？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32BはHumanEvalで92.7% — Copilotバックエンド（~94%）の2%以内。速度：ローカル2～5秒 vs Copilot ~300ms。品質ほぼ同等。費用：ローカル硬体後0円/月；Copilot 約¥37,200/年。' } },
          { '@type': 'Question', 'name': 'ローカルプログラミングLLMをVS Codeで使用できる？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい——Continue.dev拡張をインストール（無料、オープンソース）。localhost:11434のOllamaに接続。TabまたはCtrl+Shift+\\\\でトリガー。全Ollamaモデルをサポート。' } },
          { '@type': 'Question', 'name': 'proprietary codebaseにはCopilotまたはローカルLLMか', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ローカルLLM。Copilotではコードがサーバーに送られます。Ollama上のローカルモデルはコードがマシンを離れません。規制産業ではローカルが唯一のコンプライアント選択肢。' } },
          { '@type': 'Question', 'name': 'ローカルプログラミングLLMに必要なVRAM量は', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum：5 GB for Qwen2.5-Coder 7B Q4。推奨：8 GB。Premium：24 GB for Qwen2.5-Coder 32B。RTX 4060 Ti（8 GB）で7B。RTX 4070（12 GB）で14～16B。RTX 4090（24 GB）で32B。' } },
          { '@type': 'Question', 'name': 'ローカルプログラミングLLMはCopilotのようなオートコンプリートをサポート', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい——Continue.devまたはCursorエディタ経由。両方ともFIM（Fill-In-The-Middle）モード。Qwen2.5-Coder 7B ネイティブサポート。応答時間：GPU上1～3秒 vs Copilot 200～300ms。' } },
          { '@type': 'Question', 'name': 'ローカルプログラミングモデルをcodebaseで微調整できる', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい——UnslothでLoRA/QLoRA。codebaseから500+ 例を準備。8 GB VRAMで1～2時間。典型的精度改善：10～15%。' } },
          { '@type': 'Question', 'name': 'プログラミング言語をもっともサポートするプログラミングLLMは', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32BとDeepSeek-Coder-V2は90+言語をサポート：Python、JavaScript、TypeScript、Rust、Go、Java、C++、SQL、Bash、Ruby。最広範囲：Qwen2.5-Coder 32B。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'ローカルプログラミングLLMベスト（HumanEval スコア2026）',
        'numberOfItems': 6,
        'inLanguage': 'ja',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen2.5-Coder 32B', 'description': '92.7% HumanEval。22 GB VRAM Q4。最高のローカルプログラミングモデル。ollama pull qwen2.5-coder:32b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'CodeLlama 34B', 'description': '75% HumanEval。22 GB VRAM Q4。レガシーLlama ベースプログラミングモデル。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Qwen2.5-Coder 7B', 'description': '72% HumanEval。4.7 GB VRAM Q4。最速でバランスしたプログラミングモデル。ollama pull qwen2.5-coder:7b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek-Coder-V2 16B', 'description': '79% HumanEval。10 GB VRAM Q4。強力な多言語サポート。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mistral 7B', 'description': '61% HumanEval。4.5 GB VRAM Q4。軽量、EUデータ保護に対応。' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Phi-4 Mini 3.8B', 'description': '58% HumanEval。2.5 GB VRAM Q4。高速提案用超軽量。' },
        ],
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: '高级技巧',
      title: '本地LLM编程工作流：代码生成、审查和测试',
      seoTitle: '本地AI编程2026: Qwen2.5-Coder 92% HumanEval',
      intro: '本地LLM可协助编程：生成样板代码、审查代码、编写测试和解释函数。截至2026年4月，Qwen2.5-Coder 32B和CodeLlama 34B等模型在HumanEval基准上达到72-92.7%的精度。速度比云端慢（2-5秒/响应），但代码保持私密。',
      metaDescription: '本地编程模型（Qwen2.5-Coder 32B: 92.7%、CodeLlama 34B: 75%）无需云API即可生成、审查和测试代码。VS Code和Cursor完整设置指南。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-24',
      leadAnswerBlock: '**本地LLM可协助编程：生成样板代码、审查代码、编写测试和解释函数。截至2026年4月，Qwen2.5-Coder 32B（92.7% HumanEval）和CodeLlama 34B（75% HumanEval）等模型在编程基准上达到最先进的精度。**',
      audience: '在消费级硬件上建立本地编程AI的开发者',
      readTime: '阅读约11分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '使用本地LLM编程',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '最佳编程模型', anchor: '#best-models' },
        { label: '代码生成', anchor: '#code-generation' },
        { label: '代码审查工作流', anchor: '#code-review' },
        { label: '测试生成', anchor: '#test-generation' },
        { label: 'IDE集成', anchor: '#ide-integration' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/local-llms-for-coding-workflows-static.html',
      gammaDescription: '下面的幻灯片涵盖：最佳本地编程模型（Qwen2.5-Coder 92.7%、CodeLlama 75%）、使用提示工程的代码生成、代码审查工作流、测试生成、VS Code/Cursor IDE集成和常见错误。将PDF下载为本地编程AI参考卡。',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**最佳编程模型（2026）：** Qwen2.5-Coder 32B（92.7% HumanEval）、Qwen2.5-Coder 7B（72% HumanEval）、CodeLlama 34B（75%）。',
            '**速度：** 每个代码建议2-5秒。开发足够快，但比GitHub Copilot（~300ms）慢。',
            '**隐私：** 代码永不离开您的机器。对于专有代码库至关重要。',
            '**用例：** 样板生成、代码审查、测试编写、文档。不适合复杂的架构决策。',
            '截至2026年4月，本地编程AI对个人开发者和小型团队而言是实用的。',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: '本地编程的最佳模型是什么',
          content: [
            '**最好的本地编程模型在精度、速度和内存效率之间达到平衡。Qwen2.5-Coder 32B在精度上领先（92.7%），而Qwen2.5-Coder 7B提供最佳的速度/质量平衡。**',
          ],
          callouts: [
            { type: 'tip', text: '**专业提示：** 如果您有4-6 GB VRAM，从Qwen2.5-Coder 7B开始（72%精度）。为获得最大精度，在24 GB+ VRAM上使用Qwen2.5-Coder 32B（92.7%精度）。CodeLlama 34B是75%的可靠折中。' },
          ],
          rows: [
            { '模型': 'Qwen2.5-Coder 32B', 'HumanEval': '92.7%', 'VRAM': '22 GB', '速度': '慢（3-5秒）', '最佳用途': '最大精度' },
            { '模型': 'CodeLlama 34B', 'HumanEval': '75%', 'VRAM': '22 GB', '速度': '慢（3-5秒）', '最佳用途': '高质量' },
            { '模型': 'Qwen2.5-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', '速度': '非常快', '最佳用途': '速度/质量平衡' },
            { '模型': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', '速度': '非常快', '最佳用途': '小而高效' },
          ],
          columns: ['模型', 'HumanEval %', 'VRAM', '推理速度', '最佳用途'],
        },
        codeGeneration: {
          id: 'code-generation',
          title: '如何使用本地LLM生成代码',
          content: [
            '**提供函数签名+文档字符串，让模型生成实现。代码质量取决于提示上下文。**',
          ],
          callouts: [
            { type: 'insight', text: '📍 **关键点：** 函数签名比散文更重要。包括类型、文档字符串和输入/输出示例来引导模型。' },
          ],
          codeBlock: '# 代码生成的提示设计\nprompt = """\n实现以下函数：\n\ndef merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]:\n    \\"\\"\"\n    Merge two sorted arrays into a single sorted array.\n    Args:\n        arr1: First sorted array\n        arr2: Second sorted array\n    Returns:\n        Merged sorted array\n    \\"\\"\"\n    # Implementation:\n"""\n\n# Model outputs implementation\n# Expected: Two-pointer merge algorithm',
          codeLanguage: 'python',
          promptExamples: [
            { label: '❌ 不好的提示', text: '生成用于合并数组的代码' },
            { label: '✅ 好的提示', text: '使用双指针算法实现merge_sorted_arrays(arr1: List[int], arr2: List[int]) -> List[int]。文档字符串：将两个排序数组合并为单个排序数组。' },
          ],
        },
        codeReview: {
          id: 'code-review',
          title: '如何使用本地LLM审查代码',
          content: [
            '**指示模型审查代码中的bug、风格和性能问题。本地模型擅长捕捉常见错误但难以处理架构决策。**',
          ],
          callouts: [
            { type: 'warning', text: '⚠️ **警告：** 本地模型理解单个函数，而非系统架构。用于lint式检查，不适合设计审查。' },
          ],
          items: [
            '提示："审查此代码以查找bug、安全问题和性能。" + 代码片段。',
            '模型识别：未使用的变量、潜在的None错误、低效的循环。',
            '限制：无法理解复杂的域逻辑或架构模式。',
          ],
        },
        testGeneration: {
          id: 'test-generation',
          title: '如何生成测试',
          content: [
            '**向模型提供函数代码并请求单元测试。在提示中包含边界情况和错误条件。**',
          ],
          callouts: [
            { type: 'practice', text: '🛠️ **最佳实践：** 要求覆盖正常情况、边界情况和错误情况的测试。例如："用3个正常、3个边界、2个错误情况编写pytest测试。"' },
          ],
          codeBlock: '# 测试生成的提示\nprompt = """\n为此函数编写全面的单元测试：\n\n[function code]\n\n生成覆盖以下内容的测试：\n- Normal cases\n- Edge cases\n- Error cases\n\n使用pytest格式：\n"""\n\n# Model generates test_* functions with assertions',
          codeLanguage: 'python',
        },
        ideIntegration: {
          id: 'ide-integration',
          title: '如何设置IDE集成',
          content: [
            '**使用[VS Code和Cursor](/local-llms/local-llms-with-vscode-cursor?lang=zh)，或切换到Cursor编辑器以获得原生本地LLM支持。两者都允许由键盘快捷键触发的内联代码建议。**',
          ],
          callouts: [
            { type: 'note', text: '📌 **注：** Continue.dev需要在本地运行的Ollama服务器。Cursor编辑器（基于VS Code）具有内置的Ollama支持——无需额外设置。' },
          ],
          items: [
            'VS Code + Continue.dev：安装扩展，指向本地Ollama服务器（http://localhost:11434）。',
            'Cursor编辑器：Ollama的内置支持。无需设置。',
            '内联补全：Ctrl+Shift+\\\\ (VS Code) 或 Cmd+Shift+\\\\ (Mac) 触发本地LLM建议。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '常见错误是什么',
          items: [
            '**信任生成的代码而不审查。** 生成的代码可能有bug。始终审查。',
            '**使用太小的模型。** Qwen2.5-Coder 7B是实用编程的最小值。3B模型产生较差的代码。',
            '**不提供上下文。** 代码质量取决于提示上下文。提供函数签名、类型、文档字符串。',
            '**期望架构理解。** 本地模型理解单个函数，而非系统设计。',
            '**不使用编程特定模型。** 通用模型（Llama 3.1 8B、Mistral 7B）在HumanEval上比编程模型低15-25%（Qwen2.5-Coder 7B: 72% vs Llama 3.1 8B: 55%）。始终使用针对代码专门训练的模型。在Ollama中：`ollama pull qwen2.5-coder:7b` — 编程任务不要 `ollama pull llama3.1:8b`。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: '2026年编程的最佳本地LLM是什么？',
              a: '在24 GB VRAM上的最大质量为Qwen2.5-Coder 32B（92.7% HumanEval）。5 GB VRAM上的速度为Qwen2.5-Coder 7B（72%）。MacBook Apple Silicon：Qwen2.5-Coder 7B通过Ollama在M1 Pro+上以30-60个tokens/秒运行。',
            },
            {
              q: 'Qwen2.5-Coder 32B与GitHub Copilot相比如何？',
              a: 'Qwen2.5-Coder 32B在HumanEval上获得92.7% — 在Copilot的后端（~94%）的2%以内。速度：本地2-5秒 vs Copilot ~300ms（云优势）。质量基本相当。隐私：本地在设备上保留代码。成本：硬体后本地$0/月；Copilot $228/年。',
            },
            {
              q: '我能在VS Code中使用本地编程LLM吗？',
              a: '可以——安装Continue.dev扩展（免费、开源）。配置其连接到localhost:11434上的Ollama。使用Tab或Ctrl+Shift+\\\\触发内联建议。Continue.dev支持Qwen2.5-Coder、DeepSeek-Coder和所有Ollama模型。',
            },
            {
              q: '对于专有代码库，Copilot还是本地LLM更好？',
              a: '本地LLM。使用Copilot时，您的代码会被发送到Microsoft/OpenAI服务器进行推理。使用Ollama上的本地模型时，代码永不离开您的机器。对于受监管的行业（金融、医疗、防卫），本地是唯一的合规选择。',
            },
            {
              q: '本地编程LLM需要多少VRAM？',
              a: '最小：Qwen2.5-Coder 7B Q4需要5 GB VRAM。建议：8 GB以便舒适地进行7B推理。高级：24 GB用于Qwen2.5-Coder 32B（最佳质量）。RTX 4060 Ti（8 GB）运行7B。RTX 4070（12 GB）运行14-16B。RTX 4090（24 GB）运行32B。',
            },
            {
              q: '本地编程LLM像Copilot那样支持自动完成吗？',
              a: '是——通过Continue.dev或Cursor编辑器。两者都支持FIM（填充中间）模式，模型看到光标上方和下方的代码并生成中间部分。Qwen2.5-Coder 7B原生支持FIM。响应时间：GPU上1-3秒 vs Copilot 200-300ms。',
            },
            {
              q: '我可以在我的代码库上微调编程模型吗？',
              a: '可以——将LoRA/QLoRA与Unsloth一起使用。从您的代码库中准备500+个示例，采用指令格式（输入：函数签名+文档字符串，输出：实现）。在8 GB VRAM上微调Qwen2.5-Coder 7B需要1-2小时。典型精度改进：10-15%。',
            },
            {
              q: '哪个编程LLM支持最多编程语言？',
              a: 'Qwen2.5-Coder 32B和DeepSeek-Coder-V2都支持90+种语言：Python、JavaScript、TypeScript、Rust、Go、Java、C++、SQL、Bash、Ruby。CodeLlama在Python和C++上最强。对于小众语言（Haskell、Erlang、Elixir），Qwen2.5-Coder 32B覆盖范围最广。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[使用VS Code和Cursor的本地LLM](/local-llms/local-llms-with-vscode-cursor?lang=zh) — 两个IDE的详细设置指南',
            '[Prompt Engineering指南](/prompt-engineering?lang=zh) — 掌握提示技巧以改进代码生成',
            '[编程最佳本地LLM](/local-llms/best-local-llms-for-coding?lang=zh) — 详细的基准和模型比较',
            '[本地LLM硬件指南2026](/local-llms/local-llm-hardware-guide-2026?lang=zh) — GPU要求和成本分析',
            '[代码搜索本地RAG](/local-llms/local-rag-2026?lang=zh) — 使用语义理解搜索现有代码',
            '[业务本地私有AI](/local-llms/private-local-ai-for-business?lang=zh) — 企业部署和合规性',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[HumanEval基准](https://github.com/openai/human-eval) — OpenAI的官方代码生成基准',
            '[Qwen2.5-Coder模型卡](https://github.com/QwenLM/Qwen2.5-Coder) — Qwen2.5-Coder模型规格和评估结果',
            '[Continue.dev IDE扩展](https://continue.dev) — 本地和云端LLM的开源IDE支持',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM编程工作流2026: Qwen2.5-Coder 92% HumanEval',
        'description': '本地编程模型（Qwen2.5-Coder 32B: 92.7% HumanEval、CodeLlama 34B: 75% HumanEval）无需云API即可生成、审查和测试代码。VS Code和Cursor完整设置指南。',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-for-coding-workflows?lang=zh',
        'inLanguage': 'zh',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-24',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Qwen2.5-Coder 32B' },
          { '@type': 'Thing', 'name': '本地代码生成' },
          { '@type': 'Thing', 'name': 'HumanEval基准' },
          { '@type': 'Thing', 'name': 'Continue.dev VS Code' },
          { '@type': 'Thing', 'name': 'Ollama代码生成' },
        ],
        'audience': { '@type': 'Audience', 'audienceType': '在消费级硬件上建立本地编程AI的开发者' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'zh',
        'mainEntity': [
          { '@type': 'Question', 'name': '2026年编程的最佳本地LLM是什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在24 GB VRAM上的最大质量为Qwen2.5-Coder 32B（92.7% HumanEval）。5 GB VRAM上的速度为Qwen2.5-Coder 7B（72%）。MacBook：M1 Pro+上30-60个tokens/秒。' } },
          { '@type': 'Question', 'name': 'Qwen2.5-Coder 32B与GitHub Copilot相比如何？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B在HumanEval上获得92.7% — 在Copilot的后端（~94%）的2%以内。速度：本地2-5秒 vs Copilot ~300ms。质量基本相当。成本：本地硬体后$0/月；Copilot $228/年。' } },
          { '@type': 'Question', 'name': '我能在VS Code中使用本地编程LLM吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以——安装Continue.dev扩展（免费、开源）。配置其连接到localhost:11434上的Ollama。Tab或Ctrl+Shift+\\\\触发建议。支持所有Ollama模型。' } },
          { '@type': 'Question', 'name': '对于专有代码库，Copilot还是本地LLM更好？', 'acceptedAnswer': { '@type': 'Answer', 'text': '本地LLM。Copilot将代码发送到服务器。本地在设备上保留代码。受监管行业（金融、医疗、防卫）需要本地。' } },
          { '@type': 'Question', 'name': '本地编程LLM需要多少VRAM？', 'acceptedAnswer': { '@type': 'Answer', 'text': '最小：5 GB for Qwen2.5-Coder 7B Q4。建议：8 GB。高级：24 GB for Qwen2.5-Coder 32B。RTX 4060 Ti（8 GB）用于7B。RTX 4070（12 GB）用于14-16B。RTX 4090（24 GB）用于32B。' } },
          { '@type': 'Question', 'name': '本地编程LLM像Copilot那样支持自动完成吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是——通过Continue.dev或Cursor。两者都支持FIM（填充中间）。Qwen2.5-Coder 7B原生支持。响应时间：GPU上1-3秒 vs Copilot 200-300ms。' } },
          { '@type': 'Question', 'name': '我可以在我的代码库上微调编程模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以——使用LoRA/QLoRA与Unsloth。从代码库中准备500+个示例。8 GB VRAM上需要1-2小时。典型改进：10-15%。' } },
          { '@type': 'Question', 'name': '哪个编程LLM支持最多编程语言？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Qwen2.5-Coder 32B和DeepSeek-Coder-V2都支持90+种语言：Python、JavaScript、TypeScript、Rust、Go、Java、C++、SQL、Bash、Ruby。最广范围：Qwen2.5-Coder 32B。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '按HumanEval评分的最佳本地编程LLM 2026',
        'numberOfItems': 6,
        'inLanguage': 'zh',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen2.5-Coder 32B', 'description': '92.7% HumanEval。22 GB VRAM Q4。最佳本地编程模型。ollama pull qwen2.5-coder:32b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'CodeLlama 34B', 'description': '75% HumanEval。22 GB VRAM Q4。传统Llama基础编程模型。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Qwen2.5-Coder 7B', 'description': '72% HumanEval。4.7 GB VRAM Q4。最快且均衡的编程模型。ollama pull qwen2.5-coder:7b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek-Coder-V2 16B', 'description': '79% HumanEval。10 GB VRAM Q4。强大的多语言支持。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mistral 7B', 'description': '61% HumanEval。4.5 GB VRAM Q4。轻量级、符合EU数据保护。' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Phi-4 Mini 3.8B', 'description': '58% HumanEval。2.5 GB VRAM Q4。快速建议的超轻量级。' },
        ],
      },
    },
  };
