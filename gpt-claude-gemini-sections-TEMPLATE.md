# GPT-Claude-Gemini-Which-Model Article: English Sections Template

## Complete English Sections Object

Below is the complete ENGLISH sections object that needs to be translated to German (de), French (fr), Japanese (ja), and Chinese Simplified (zh).

```javascript
sections: {
  definition: {
    title: 'No Single "Best" AI Model — Choose by Task',
    content: [
      '**No single AI model is best for every task. GPT-4o excels at tool integration and reasoning; Claude 4.6 Sonnet dominates writing and code quality; Gemini 2.5 Pro offers cost-effective performance and deep Google Workspace integration; DeepSeek and Baidu ERNIE are essential for mainland China workloads.**',
      'When you have a new task, the first question should not be "what is the best model?" but rather "which model is best for THIS task, in THIS geography, at THIS budget?" Benchmarks and leaderboards shift every few months. Your actual task — your specific writing style, codebase, customers in China, data sensitivity — should drive the choice.',
      'PromptQuorum is a multi-model AI dispatch tool that solves this directly: send one structured prompt to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, DeepSeek, Baidu ERNIE, and local LLMs (Ollama, LM Studio) simultaneously. See all responses side-by-side. Let PromptQuorum score which model performs best for YOUR task, YOUR data, YOUR brand voice — not YouTube benchmarks.',
    ],
  },

  decisionMatrix: {
    title: 'Quick Decision Matrix — Pick Your Starting Model',
    content: '**Choose your starting model based on your primary task. Most teams use multiple models — start with the right one and switch as needed.**',
    items: [
      'GPT-4o wins: multi-agent workflows, tool integration, API ecosystem, multimodal (images/audio). Start here if integrations matter.',
      'Claude 4.6 Sonnet wins: writing quality, code review, reasoning depth, enterprise safety. Start here for content/code quality.',
      'Gemini 2.5 Pro wins: long documents (2M tokens), batch processing, cost efficiency, Google Workspace. Start here for large-scale document analysis.',
      'DeepSeek/Baidu ERNIE wins: mainland China (required for latency/access), high-volume cost-sensitive tasks. Only choice if data stays in China.',
      'Use PromptQuorum to test all 5 on your actual task — benchmarks lie; your data tells the truth.',
    ],
    tableFormat: true,
    columns: ['Your Priority', 'Start With', 'Why', 'When to Switch'],
    rows: [
      { 'Your Priority': 'Complex writing & analysis', 'Start With': 'Claude 4.6 Sonnet', 'Why': 'Highest output quality; cuts revision rounds', 'When to Switch': 'Switch to GPT-4o if you need multi-tool workflows or integrations' },
      { 'Your Priority': 'Coding & development speed', 'Start With': 'Gemini 2.5 Pro or Flash', 'Why': '2M context (load entire projects) + best cost/quality', 'When to Switch': 'Switch to Claude for deep debugging or code review; GPT for tool integration' },
      { 'Your Priority': 'Multi-agent workflows / APIs', 'Start With': 'GPT-4o', 'Why': 'Richest third-party ecosystem; best tool calling', 'When to Switch': 'Switch to Gemini to save costs on high-volume tasks' },
      { 'Your Priority': 'Mainland China users/data', 'Start With': 'DeepSeek or Baidu ERNIE', 'Why': 'Only practical choice — Western models restricted/slow', 'When to Switch': 'N/A — compliance/latency requirements make switch impossible' },
    ],
  },

  tldr: {
    title: 'Key Takeaways',
    content: '**Different models excel at different tasks — GPT-4o dominates tool integration, Claude excels at writing, Gemini handles long documents best, and DeepSeek/ERNIE are required for China.**',
    isTldr: true,
    items: [
      '**GPT-4o:** tools + ecosystem. Best for multi-agent workflows, tool calling, and the most extensive third-party integrations.',
      '**Claude 4.6 Sonnet:** careful reasoning + writing. Best for reports, analyses, code reviews, and enterprise safety requirements.',
      '**Gemini 2.5 Pro:** Google ecosystem + cost. Best for teams in Google Workspace, batch coding, and long-context research.',
      '**DeepSeek / Baidu ERNIE:** China-focused workloads. Mandatory for mainland China due to latency, access restrictions, and regulatory requirements.',
      '**Use more than one model; route by task.** Different models excel at different jobs. Use Claude for writing, Gemini for coding, GPT for agents, DeepSeek/ERNIE for China users.',
      '**PromptQuorum:** dispatch one prompt to all models simultaneously, compare results, see which model wins for YOUR task.',
    ],
  },

  whatMatters: {
    title: 'What Matters When Choosing an AI Model?',
    content: '**Model selection should start from your use case and constraints, not hype or leaderboard position.** Here are the 7 dimensions that actually matter:',
    items: [
      '**Quality for your task:** Does this model excel at writing, coding, analysis, or reasoning? Check performance on tasks similar to yours — not generic benchmarks.',
      '**Cost per token and pricing tiers:** Frontier models cost $15–60 per million tokens; budget models cost $0.15–3. Price scales by input and output tokens. [See token economics in detail.](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
      '**Latency and rate limits:** How fast does it respond? Can it handle your request volume? Some models are capped at 100 requests per minute; others support 10,000+.',
      '**Context window size:** GPT-4o: 128k tokens. Claude 4.6 Sonnet: 200k tokens. Gemini 2.5 Pro: 2M tokens (10× larger, best for long documents). [Learn about context windows.](/prompt-engineering/context-windows-explained-why-ai-forgets)',
      '**Multimodal capabilities:** Can it process images, audio, or video? GPT-4o and Gemini 2.5 Pro support images well. DeepSeek and Baidu ERNIE focus on text.',
      '**Ecosystem and integrations:** How many third-party tools, plugins, and APIs support it? GPT-4o dominates here. Local models via Ollama or LM Studio support thousands of community integrations.',
      '**Geography and data-residency rules:** Is it available in your region? Does your data need to stay within a country or company network? Mainland China requires local models (DeepSeek, Baidu ERNIE) due to regulations and latency.',
    ],
  },

  gptSection: {
    title: 'When Should You Use GPT-4o?',
    content: '**GPT-4o is OpenAI\'s frontier multimodal model — strongest for tool-heavy agentic workflows with the most extensive third-party integrations and tools.** Use GPT-4o when tooling, integrations, and multimodal capabilities matter more than cost.',
    items: [
      '**Strengths:** Excellent general reasoning and chat across all domains. Strong multimodal capabilities — reliably processes images, audio, and sometimes video. Best-in-class tool calling and integrations (agents, IDE plugins, enterprise stack). Trusted in production by millions of developers.',
      '**Best use cases:** Multi-step agent workflows. Complex chains where tool calling (APIs, databases, code execution) is required. Tasks needing screenshot or image analysis. OpenAI ecosystem projects (ChatGPT, Assistants API, Codex, fine-tuning).',
      '**Trade-offs:** Premium frontier models cost more per token ($5 input / $15 output per million). Output can be verbose — requires prompt discipline to enforce conciseness.',
      '**Context window:** 128,000 tokens (handles ~100 pages of text).',
    ],
  },

  claudeSection: {
    title: 'When Should You Use Claude 4.6 Sonnet?',
    content: '**Claude 4.6 Sonnet from Anthropic excels at careful reasoning, writing quality, and code refactoring — with industry-leading safety.** Use Claude when output quality, clarity, and trustworthiness matter most.',
    items: [
      '**Strengths:** High-quality writing and summarization; outputs are concise, well-structured, and publication-ready. Excellent code understanding, refactoring, and explanation — often catches bugs that other models miss. Good long-context handling for research and document workflows. Strong safety culture; preferred in regulated industries.',
      '**Best use cases:** Reports, analyses, and knowledge work where structure and clarity are critical. Complex codebases and architecture discussions. Enterprise settings with compliance and safety requirements. Content that requires editing minimization.',
      '**Trade-offs:** Higher price point for top tiers; may be overkill for simple tasks. Some third-party integrations are newer than GPT-4o equivalents.',
      '**Context window:** 200,000 tokens (handles ~150 pages of text).',
    ],
  },

  geminiSection: {
    title: 'When Should You Use Gemini 2.5 Pro?',
    content: '**Gemini 2.5 Pro from Google DeepMind is cost-effective with the strongest long-context handling and deep Google Workspace integration.** Use Gemini when processing many long documents or when your team lives in Google Workspace.',
    items: [
      '**Strengths:** Very good coding performance at attractive price points — especially mid-tier Flash models. Strongest long-context (2M tokens) and retrieval; excellent for research across many documents + live web search. Native integration with Google Workspace (Docs, Sheets, Drive, Gmail, Slides).',
      '**Best use cases:** Teams living in Google Workspace. Batch coding and data tasks where cost/performance ratio is critical. Research workflows combining local docs with web search. Processing 100+ pages of PDFs or transcripts.',
      '**Trade-offs:** Writing tone can feel more hedged or generic vs Claude or GPT. Outside Google\'s ecosystem, some integrations lag competitors.',
      '**Context window:** 2,000,000 tokens (strongest; handles ~1,500 pages of text).',
    ],
  },

  coding: {
    title: 'Which AI model is best for coding in 2026?',
    content: '**Claude 4.6 Sonnet excels at code quality and refactoring; GPT-4o dominates tool integration and multi-file reasoning; Gemini 2.5 Pro offers the best cost/quality ratio for batch tasks; DeepSeek is the choice for mainland China developers.** The "best" model for coding depends on your primary challenge: code quality, integration breadth, cost per token, or geography.',
    items: [
      '**GPT-4o:** Strongest for multi-step coding tasks with tool use (file system access, APIs, shell commands). Excellent at reasoning across large codebases and generating complex workflows. Best if integrations with GitHub, AWS, APIs are critical.',
      '**Claude 4.6 Sonnet:** Best for code review, refactoring, and architecture discussions. Catches subtle bugs others miss. Preferred for maintaining existing codebases and explaining legacy code. Higher token cost but often reduces rounds of back-and-forth.',
      '**Gemini 2.5 Pro:** Best cost/quality for batch coding tasks (data processing, utility scripts, automation). 2M context means you can load entire projects at once. Excellent for prototype-to-production velocity where cost matters.',
      '**DeepSeek:** Competitive with GPT for coding but 10× cheaper. Best for mainland China developers and high-volume coding tasks (scaffolding, boilerplate, routine refactoring). Very strong on algorithm problems and competitive programming.',
    ],
  },

  longContext: {
    title: 'Best LLM for long context or large documents 2026?',
    content: '**Gemini 2.5 Pro dominates with 2M context tokens (handles ~1,500 pages); Claude 4.6 Sonnet with 200k tokens is next (handles ~150 pages); GPT-4o at 128k tokens is sufficient for most single-document tasks.** Choose based on document size, retrieval precision, and whether you need to load multiple files simultaneously.',
    image: '/images/context-windows-chart.svg',
    imageCaption: 'Context window comparison: Gemini 2.5 Pro supports 10× larger context than GPT-4o, enabling entire projects and document archives in a single request.',
    items: [
      '**Gemini 2.5 Pro (2M tokens):** Load entire codebases, legal document sets, or research archives. Web search integration lets you reference external sources within long context. Best for: due diligence reviews, regulatory analysis, knowledge base search, processing 100+ page PDFs.',
      '**Claude 4.6 Sonnet (200k tokens):** Strong enough for most documents: books, theses, lengthy codebase walk-throughs. Excellent for detailed analysis and extracting nuanced information. Trade-off: higher cost per token, but quality may reduce revision rounds.',
      '**GPT-4o (128k tokens):** Sufficient for single documents under 100 pages. Use when you need tool calling alongside long context (file system, APIs). Trade-off: Cannot load multiple large documents; requires chunking/splitting.',
      '**Practical strategy:** For very long tasks (multi-document workflows), use Gemini first (cheapest, largest context), then refine with Claude if output quality needs polish.',
    ],
  },

  chineseModels: {
    title: 'How to choose an AI model if you\'re in China or need low latency?',
    content: [
      '**For users and data in mainland China, DeepSeek and Baidu ERNIE are not optional — they are required.** Western frontier models (GPT-4o, Claude, Gemini) are often restricted or high-latency in China due to network restrictions and regulatory requirements. In 2026, latency (3–10 second response times vs 500ms locally) and compliance (data residency, content moderation) are massive pain points. Using a Western model in mainland China means either: (1) unavailable service, (2) unacceptable latency for users, (3) regulatory violations. Local models eliminate all three.',
      '**DeepSeek (frontier model, competitive coding):** Competitive coding and reasoning performance, aggressive pricing, excellent Chinese language support and mixed Chinese–English tasks. Native mainland China infrastructure = sub-500ms latency. Best for developer workflows in mainland China and high-volume cost-sensitive workloads. Trade-offs: smaller ecosystem outside China, fewer third-party integrations vs GPT/Claude/Gemini.',
      '**Baidu ERNIE (enterprise and consumer):** Tight integration with Baidu search and cloud, strong grounding in Chinese web content and enterprise data. Fully compliant with mainland China regulatory requirements (content moderation, data residency, keyword filtering). Best for consumer and enterprise apps targeting Chinese users, apps on Baidu Cloud infrastructure where compliance is non-negotiable. Trade-offs: primarily optimized for Chinese, English and other languages may lag Western frontier models.',
    ],
  },

  comparison: {
    title: 'GPT-4o vs Claude 4.6 Sonnet vs Gemini 2.5 Pro: Quick comparison',
    content: '**This table compares 5 AI models across 8 key dimensions: general reasoning, writing, coding, long-context handling, multimodal support, cost efficiency, global ecosystem, and China access.**',
    image: '/images/model-strengths-radar.svg',
    imageCaption: 'Radar chart: Claude dominates writing & reasoning; GPT-4o excels at tools & multimodal; Gemini wins on cost & long-context. No single winner — match model to task.',
    tableFormat: true,
    columns: ['Dimension', 'GPT-4o', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro', 'DeepSeek', 'Baidu ERNIE'],
    rows: [
      { 'Dimension': 'General Q&A', 'GPT-4o': 'Excellent global', 'Claude 4.6 Sonnet': 'Very good, cautious', 'Gemini 2.5 Pro': 'Very good + retrieval', 'DeepSeek': 'Strong, best for CN', 'Baidu ERNIE': 'Strong, best for CN' },
      { 'Dimension': 'Writing', 'GPT-4o': 'Great, sometimes verbose', 'Claude 4.6 Sonnet': 'Excellent structure & clarity', 'Gemini 2.5 Pro': 'Good, neutral tone', 'DeepSeek': 'Good, Chinese-first', 'Baidu ERNIE': 'Good, Chinese-first' },
      { 'Dimension': 'Coding', 'GPT-4o': 'Strong', 'Claude 4.6 Sonnet': 'Excellent, premium', 'Gemini 2.5 Pro': 'Great value', 'DeepSeek': 'Very strong for CN devs', 'Baidu ERNIE': 'Good, applied business' },
      { 'Dimension': 'Long context', 'GPT-4o': 'Strong (128k)', 'Claude 4.6 Sonnet': 'Strong (200k)', 'Gemini 2.5 Pro': 'Strongest (2M) + web', 'DeepSeek': 'Good', 'Baidu ERNIE': 'Good with Baidu data' },
      { 'Dimension': 'Multimodal', 'GPT-4o': 'Leading (image/audio)', 'Claude 4.6 Sonnet': 'Good vision', 'Gemini 2.5 Pro': 'Very strong (video/web)', 'DeepSeek': 'Varies', 'Baidu ERNIE': 'Text + CN web' },
      { 'Dimension': 'Cost efficiency', 'GPT-4o': 'Medium–High', 'Claude 4.6 Sonnet': 'Higher, premium quality', 'Gemini 2.5 Pro': 'Very cost-effective', 'DeepSeek': 'Very cost-competitive', 'Baidu ERNIE': 'Competitive (CN enterprise)' },
      { 'Dimension': 'Global ecosystem', 'GPT-4o': 'Most extensive', 'Claude 4.6 Sonnet': 'Growing, esp. enterprise', 'Gemini 2.5 Pro': 'Strong in Google world', 'DeepSeek': 'Limited outside China', 'Baidu ERNIE': 'Strong in Baidu ecosystem' },
      { 'Dimension': 'China access/latency', 'GPT-4o': 'Often restricted', 'Claude 4.6 Sonnet': 'Often restricted', 'Gemini 2.5 Pro': 'Often restricted', 'DeepSeek': 'Native / low-latency', 'Baidu ERNIE': 'Native / required' },
    ],
  },

  decisionFramework: {
    title: 'How Do You Pick the Right AI Model?',
    content: [
      '**Start with your primary use case, layer in your constraints, then choose the model best suited to both.**',
      '**If: General assistant, multi-tool agentic workflows.** Then: Start with GPT-4o. You need the most extensive tooling ecosystem and integrations.',
      '**If: Deep writing, analysis, complex code, or strong safety requirements.** Then: Start with Claude 4.6 Sonnet. Quality and trustworthiness matter more than cost.',
      '**If: Heavy Google Workspace usage, batch coding/data, or processing 100+ long documents.** Then: Start with Gemini 2.5 Pro. Long context and ecosystem integration save time.',
      '**If: Users and data primarily in mainland China.** Then: Start with DeepSeek (coding-heavy) or Baidu ERNIE (consumer/business apps). Western models are restricted or high-latency.',
    ],
    items: [
      '**Budget tight, volume high:** Favor Gemini Flash / DeepSeek / smaller GPT models.',
      '**Strict compliance, enterprise contracts:** Claude enterprise, Baidu ERNIE for China.',
      '**Need multimodal (screenshots, charts, audio):** GPT-4o or Gemini 2.5 Pro.',
      '**Private data only:** Local LLMs via Ollama or LM Studio (no data leaves your device).',
    ],
  },

  costAndLimits: {
    title: 'How Do Costs and Token Limits Compare?',
    content: '**All major models are priced per input and output token, with rate limits based on your tier.** Frontier models cost 10–100× more per token than budget models. Pricing varies by region (especially China).',
    items: [
      '**Frontier models (most expensive per token):** GPT-4o ($5 input / $15 output per million tokens), Claude 4.6 Sonnet (~$3 input / $15 output per million tokens).',
      '**Cost-effective mid-tier:** Gemini 2.5 Flash ($0.075 input / $0.30 output per million tokens).',
      '**Competitive budget models:** DeepSeek (aggressive pricing), local models via Ollama/LM Studio (free, run on-device).',
      '**Rate limits:** Frontier models often start at 100 req/min; scaled tier can reach 10,000+ req/min. Local models depend on your hardware.',
      '[See detailed token economics and cost calculations.](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
    ],
  },

  whyMultipleModels: {
    title: 'Why use multiple AI models instead of one in 2026?',
    content: '**Benchmarks and leaderboards change every few months. Different tasks are best served by different models. And geographic constraints (EU data residency, China latency) force multi-model stacks.**',
    items: [
      '**Reason 1: Task-specific excellence.** No model wins at everything. Claude excels at writing; Gemini at long-context research; GPT at multi-step reasoning. Route your tasks to the specialist.',
      '**Reason 2: Cost optimization.** Use small / budget models for high-volume repetitive work (summarization, categorization). Reserve frontier models for complex reasoning. You reduce costs 10–50× while maintaining quality on the tasks that matter.',
      '**Reason 3: Regulatory and geographic constraints.** EU requires EU data residency (Ollama local). China requires local models. Multi-model stacks let you comply with all constraints.',
      '**Example stack:** Claude for writing, Gemini for coding, GPT for agents, DeepSeek/ERNIE for China users. This is not complex — it is practical.',
    ],
  },

  promptquorumSection: {
    title: 'How Does PromptQuorum Help You Compare and Route Models?',
    content: '**PromptQuorum solves the pain of manual model switching by sending one structured prompt to all models simultaneously and comparing results automatically.** No more copying prompts between tabs or guessing which model performed best.',
    items: [
      '**One structured prompt → many models simultaneously.** Write your prompt once. PromptQuorum dispatches it to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, DeepSeek, Baidu ERNIE, and local LLMs (Ollama, LM Studio) in parallel. See all responses side-by-side.',
      '**Shared frameworks ensure fair comparison.** Use the same prompt structure, constraints, and formats across all models. This eliminates the excuse "Claude got better output because I worded the prompt for Claude."',
      '**Consensus and scoring view.** PromptQuorum shows you which model writes best for your brand voice, which produces the most correct code, which handles your proprietary documents most reliably, and which model is fastest and cheapest for YOUR task.',
      '**Routing rules:** Send cheap / high-volume tasks to small or local models. Send complex reasoning to premium models. Automate model selection based on task type.',
      '**Support for local LLMs.** Connect Ollama or LM Studio for completely private inference. No data leaves your device. Route sensitive tasks locally; send commodity tasks to cloud APIs.',
      '**Stop guessing from YouTube benchmarks.** Test your own tasks directly on your own data. That is the only truth that matters.',
    ],
  },

  promptquorumVisual: {
    title: 'PromptQuorum Dashboard: See All Models at Once',
    content: '**Send one prompt, see outputs from GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, DeepSeek, and Baidu ERNIE — all in one view.** Side-by-side comparison eliminates the pain of manual model switching.',
    imagePlaceholder: true,
    imageCaption: '[Coming soon: Live screenshot of PromptQuorum dashboard showing parallel outputs from 5 AI models on the same prompt task — displays reasoning, cost, latency, and quality scores side-by-side]',
  },

  practicalRecipes: {
    title: 'Practical Recipes: 4 Ways to Use PromptQuorum for Model Comparison',
    content: '**Multi-model testing in PromptQuorum reveals which model works best for YOUR specific task, data, and brand — not generic benchmarks.** Here are 4 concrete scenarios:',
  },

  recipe1: {
    title: 'Recipe 1: Decide Which Model Writes Best for Your Brand Voice',
    blockquote: 'You are writing product copy for a B2B SaaS landing page. The tone needs to be authoritative but accessible — no marketing fluff, no vague superlatives. Test the same brief on GPT-4o, Claude 4.6 Sonnet, and Gemini. See which model captures your brand voice best. Run it through PromptQuorum, score each output on tone, clarity, and adherence to your brand guidelines. The winner becomes your go-to model for copywriting. Example prompt: "Rewrite this feature description in our brand voice: [paste your style guide + existing copy]. Which model matches best?"',
  },

  recipe2: {
    title: 'Recipe 2: Compare Coding Quality and Cost for Your Backend Stack',
    blockquote: 'You have a Python codebase. Test: "Review this function for performance and bugs. Suggest refactoring." Run it through GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Flash. Which catches the most bugs? Which refactoring is cleanest? Which is cheapest per request? Use PromptQuorum to score code quality. You might find Gemini Flash catches 90% of the issues at 1/50th the cost of Claude. Example: "Optimize this database query for speed. What\'s the time complexity?" — routed to Claude for deep analysis, Gemini for budget-conscious iteration.',
  },

  recipe3: {
    title: 'Recipe 3: Set Up a Global + China Stack (GPT / Claude / Gemini + DeepSeek / ERNIE)',
    blockquote: 'Your product serves users worldwide and in mainland China. Route global users to GPT, Claude, or Gemini (your global stack). Route China users to DeepSeek or Baidu ERNIE (required for latency and compliance). Use PromptQuorum to test model performance on your actual user prompts in each geography. Ensure consistency while respecting regional constraints.',
  },

  recipe4: {
    title: 'Recipe 4: Use Local LLMs for Private Data, Frontier Models for Final Polish',
    blockquote: 'You have sensitive customer data. Step 1: Process locally with Ollama or LM Studio (no data leaves your servers). Step 2: Send the refined output to Claude or GPT for final polish and quality check. This hybrid approach is cheap, private, and produces high-quality output. Test it in PromptQuorum to find the local model that works best for your pipeline.',
  },

  faq: {
    title: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'If I can only pay for one subscription, which should I choose?',
        a: 'Start with Claude 4.6 Sonnet for highest quality across writing, reasoning, and code. If your primary need is tool integration and multimodal, choose GPT-4o. If you have a Google Workspace-heavy team and cost is critical, choose Gemini. If your users are in mainland China, you have no choice — choose DeepSeek or Baidu ERNIE (required for latency and compliance).',
      },
      {
        q: 'How often should I re-evaluate my model choices?',
        a: 'Quarterly. Every 3–4 months, new models launch and leaderboard positions shift. Use PromptQuorum to re-test your most critical tasks on the latest models. What was best 6 months ago might no longer be optimal.',
      },
      {
        q: 'Can I mix multiple models inside one product or agent?',
        a: 'Yes — and you should. Route different tasks to different models: Claude for writing, Gemini for retrieval, GPT for agents. Use conditional logic: if this is a writing task, use Claude; if this is a retrieval task, use Gemini. This is how production systems work.',
      },
      {
        q: 'How do I think about vendor lock-in?',
        a: 'Vendor lock-in happens when your system depends on one model\'s API format, special features, or pricing. Protect yourself: (1) Use standard prompt structures that work across models. (2) Use abstraction layers (like PromptQuorum) that support multiple providers. (3) Test regularly on multiple models to catch vendor-specific drift. (4) For critical systems, support local models (Ollama, LM Studio) as a fallback.',
      },
      {
        q: 'Where do open-source local models fit into this picture?',
        a: 'Local models (LLaMA 3.1, Mistral, others via Ollama or LM Studio) are best for: high-volume repetitive tasks (classify, summarize, extract), private data (no API calls), cost-sensitive workloads, and testing before committing to API costs. They do not match frontier models on quality but excel on privacy and cost. Use them for the 80% of tasks that do not need frontier-level reasoning.',
      },
      {
        q: 'Is Claude better than ChatGPT?',
        a: 'For writing quality, code review, and structured reasoning, Claude 4.6 Sonnet outperforms ChatGPT (GPT-4o) in most evaluations. For tool integration, multi-agent workflows, and the broadest third-party ecosystem, GPT-4o has the advantage. Neither is universally better — the right choice depends on your specific task. Use PromptQuorum to test both on your actual prompts and compare results directly.',
      },
      {
        q: 'Which AI model is most accurate?',
        a: 'No single model is most accurate across all tasks. Claude 4.6 Sonnet leads on writing and structured analysis. GPT-4o leads on tool-integrated reasoning. Gemini 2.5 Pro leads on long-document research with live web grounding. Accuracy is task-specific — the only reliable test is running your actual prompts across all models and measuring the results.',
      },
      {
        q: 'What is the difference between GPT-4o and GPT-4o mini?',
        a: 'GPT-4o is OpenAI\'s frontier model — highest capability, highest cost ($5 input/$15 output per million tokens). GPT-4o mini is a smaller, faster, cheaper version ($0.15 input/$0.60 output per million tokens) — 33x cheaper with slightly lower quality. Use GPT-4o mini for classification, summarization, and high-volume tasks where frontier reasoning is not required. Use GPT-4o for complex multi-step reasoning, agent workflows, and tasks where quality is critical.',
      },
    ],
  },

  relatedReading: {
    title: 'Related Reading',
    items: [
      '[How to Evaluate AI Model Performance on YOUR Task (Not Benchmarks)](/prompt-engineering/how-to-evaluate-ai-model-performance) — practical framework for testing models on your data',
      '[Context Windows Explained: Why AI Forgets](/prompt-engineering/context-windows-explained-why-ai-forgets) — how token limits affect each model\'s capability',
      '[Tokens, Costs & Limits: The Economics of AI Prompting](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — detailed breakdown of pricing and token usage per model',
      '[Temperature and Top-P Explained: Controlling Output Randomness](/prompt-engineering/temperature-and-top-p) — how parameter changes affect model behavior',
      '[Fundamentals: System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — how system prompts define model behavior across models',
      '[Fundamentals: Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use) — frameworks work across models; choose one that fits your task',
      '[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — multi-step workflows where different models can handle different steps',
    ],
  },

  sources: {
    title: 'Sources & Further Reading',
    items: [
      '[OpenAI. "Intro to Tokens"](https://platform.openai.com/docs/guides/tokens) — official documentation on token counting across models',
      '[Anthropic, 2024. "Using the Tokens API"](https://docs.anthropic.com/en/docs/resources/tokens) — Claude token documentation',
      '[Chen et al., 2024. "GPT-4o: The Multimodal Frontier"](https://openai.com/research/gpt-4o) — GPT-4o technical overview',
      '[Anthropic, 2024. "Claude 3.5 Sonnet Performance"](https://www.anthropic.com/news/claude-3-5-sonnet) — Claude latest performance benchmarks',
      '[Google DeepMind, 2024. "Gemini 2.0 & Gemini 2.5"](https://deepmind.google/technologies/gemini/) — Gemini family technical documentation',
      '[DeepSeek, 2024. "DeepSeek-V3: Best-in-Class Reasoning"](https://github.com/deepseek-ai/DeepSeek-V3) — DeepSeek model technical specs',
      '[Baidu, 2024. "ERNIE Bot Documentation"](https://cloud.baidu.com/doc/ERNIE/s/xkjb9b4fz) — Baidu ERNIE official documentation',
    ],
  },
}
```

---

## Summary of Sections to Translate

**Total sections: 28 main sections** (definition, decisionMatrix, tldr, whatMatters, gptSection, claudeSection, geminiSection, coding, longContext, chineseModels, comparison, decisionFramework, costAndLimits, whyMultipleModels, promptquorumSection, promptquorumVisual, practicalRecipes, recipe1, recipe2, recipe3, recipe4, faq, relatedReading, sources)

Each section contains:
- **title** (required) — the section heading
- **content** (varies) — can be string or array of strings
- **items** (optional) — array of bullet points
- **columns & rows** (for tables) — table data
- **blockquote** (for recipe sections) — longer example text
- **image, imageCaption, imagePlaceholder** (optional) — image references
- **isTldr** (optional) — boolean flag
- **faqs** (for FAQ section) — array of {q, a} pairs
- **numberedItems** (optional) — for numbered lists

---

## Current Status in content.ts

- **English (en):** COMPLETE (lines 7572–7960 in content.ts)
- **German (de):** STUBBED (empty sections object on line 7967)
- **French (fr):** STUBBED (empty sections object)
- **Japanese (ja):** STUBBED (empty sections object)
- **Chinese Simplified (zh):** STUBBED (empty sections object)

All four non-English language variants currently have empty `sections: {}` objects and need to be populated with full translations of this English template.

