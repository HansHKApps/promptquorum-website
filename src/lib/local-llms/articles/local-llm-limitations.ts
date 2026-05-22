// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-limitations
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Local LLM vs Cloud API: When to Use Each (2026 Trade-offs)',
      seoTitle: 'Local LLM vs Cloud: Privacy Wins, 10x Slower — 2026 Trade-offs',
      intro: 'Local LLMs—including Llama 3.x, Qwen2.5, and Mistral, deployed via Ollama, LM Studio, or llama.cpp—have six significant limitations compared to frontier cloud models: lower output quality on complex tasks, slower inference on consumer hardware, high hardware requirements for large models, lack of real-time information, lack of web access, and significant setup complexity relative to cloud APIs. As of April 2026, even the best local models lag OpenAI GPT-4o and Anthropic Claude 4.6 on multi-step reasoning. Understanding these limitations helps you decide when local inference is the right choice and when cloud APIs are better.',
      metaDescription: 'Local = 100% private, $0/token cost, but 10x slower + no real-time data. Cloud = 50–150 tok/sec, $0.01–0.05 per 1K tokens, web search built in. Full comparison table + decision guide. April 2026.',
      twitterDescription: 'Local LLM: 100% private, zero cost, but 10x slower than cloud. Cloud API: fast + smart, costs money. Compare by use case. Which should YOU use? April 2026.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Local LLMs cannot match frontier cloud models on reasoning, speed, and real-time data access due to hardware limits and training constraints.** They are best for private, offline, and cost-sensitive tasks, but not for high-accuracy or real-time applications.',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM limitations',
      toc: [
        { label: 'In One Sentence', anchor: '#in-one-sentence' },
        { label: 'In Plain Terms', anchor: '#in-plain-terms' },
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Decision: Local vs Cloud', anchor: '#quick-decision' },
        { label: 'Why Are Local LLMs Worse Than GPT-4o on Complex Tasks?', anchor: '#limitation-1-output-quality' },
        { label: 'How Fast Are Local LLMs Compared to Cloud APIs?', anchor: '#limitation-2-inference-speed' },
        { label: 'What Hardware Do You Need to Run Local LLMs?', anchor: '#limitation-3-hardware-requirements' },
        { label: 'Why Can\'t Local LLMs Access Real-Time Information?', anchor: '#limitation-4-no-real-time-info' },
        { label: 'How Hard Is It to Set Up and Maintain a Local LLM?', anchor: '#limitation-5-setup-complexity' },
        { label: 'How Large Is the Context Window of Local LLMs?', anchor: '#limitation-6-context-window' },
        { label: 'When NOT to Use Local LLMs', anchor: '#when-not-to-use' },
        { label: 'Best Local LLM by Use Case', anchor: '#best-choice' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'When Should You Use Cloud Instead?', anchor: '#when-to-use-cloud' },
        { label: 'Common Questions About Local LLM Limitations', anchor: '#faq' },
      ],
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Local LLM Limitations: 6 Key Gaps vs Cloud Models in 2026',
        description: 'Local LLMs trail GPT-4o by 10–20 points on reasoning benchmarks, require 16 GB+ RAM for 7B models, and have no web access. All 6 limitations with benchmark data and cloud vs local decision guidance.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/local-llm-limitations',
        inLanguage: 'en',
        proficiencyLevel: 'Beginner',
        about: [
          { '@type': 'Thing', name: 'Local LLMs' },
          { '@type': 'Thing', name: 'LLM Limitations' },
          { '@type': 'Thing', name: 'Cloud AI vs Local AI' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'LM Studio' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Should I use a local LLM or cloud API?',
            acceptedAnswer: { '@type': 'Answer', text: 'Local if privacy is critical. Cloud if speed or real-time data is critical. Unsure? Test both with PromptQuorum — dispatch one prompt to your local Ollama and 25+ cloud models simultaneously to compare quality on your specific task.' },
          },
          {
            '@type': 'Question',
            name: 'Is local LLM faster than cloud API?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Cloud APIs generate 80–150 tokens/sec. Local LLMs on CPU generate 10–25 tok/sec — 4–10× slower. GPU helps: NVIDIA RTX 4090 reaches 130–160 tok/sec, matching cloud, but costs $1,600+.' },
          },
          {
            '@type': 'Question',
            name: 'Is local LLM cheaper than cloud?',
            acceptedAnswer: { '@type': 'Answer', text: 'Depends on usage. Local costs $800–2,000 upfront hardware. Cloud costs $5–50/month. For light users (<100K tokens/month), cloud is cheaper. For heavy users (>10M tokens/month), local breaks even in 6–12 months.' },
          },
          {
            '@type': 'Question',
            name: 'When should you use a local LLM instead of cloud?',
            acceptedAnswer: { '@type': 'Answer', text: 'Use local when: data privacy is critical (no data leaves your device), you have adequate hardware (16+ GB RAM or 40+ GB for 70B models), you don\'t need real-time information, and setup complexity is acceptable. Use cloud when: speed is critical, real-time data access is needed, hardware is limited (<8 GB RAM), or you need frontier-level reasoning.' },
          },
          {
            '@type': 'Question',
            name: 'What are the main limitations of local LLMs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Six key limitations: (1) Lower quality on complex reasoning vs frontier cloud models, (2) 4–10× slower inference on consumer hardware, (3) High hardware requirements ($800–2,000 upfront), (4) No real-time information access (training cutoff date), (5) Setup complexity (20–40 minutes vs 5 minutes cloud), (6) Limited context window (4K–128K tokens locally vs 1M+ in cloud).' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'When to Use a Cloud API Instead of a Local LLM',
        numberOfItems: 6,
        inLanguage: 'en',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maximum output quality is required', description: 'Legal documents, complex code generation, advanced research analysis. Use GPT-4o or Claude 4.6 Sonnet.' },
          { '@type': 'ListItem', position: 2, name: 'Real-time information is needed', description: 'Current news, live data, URL retrieval. Local models have a training cutoff.' },
          { '@type': 'ListItem', position: 3, name: 'Setup time is a constraint', description: 'For a quick prototype or one-off task, a cloud API key is faster to get working than a local install.' },
          { '@type': 'ListItem', position: 4, name: 'Your hardware is limited', description: 'On a machine with 4-6 GB RAM, local inference is marginal. Cloud APIs produce better results with zero hardware strain.' },
          { '@type': 'ListItem', position: 5, name: 'Processing very long documents', description: '100K+ token contexts are slow locally. Cloud models handle this more practically.' },
          { '@type': 'ListItem', position: 6, name: 'Comparing local vs cloud side-by-side', description: 'Tools like PromptQuorum dispatch one prompt to your local Ollama model and 25+ cloud models simultaneously, letting you evaluate quality differences on your specific tasks before committing to either approach.' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-limitations-static.html',
      gammaDescription: 'Interactive 14-slide presentation comparing local LLMs vs cloud APIs. Learn the 6 key limitations: quality gap (10–20% below GPT-4o on reasoning), speed (10–25 tok/sec CPU vs 80–150 tok/sec cloud), hardware requirements (16 GB+ RAM minimum), no real-time data access, setup complexity (20–40 min vs 5 min cloud), and context window limits (4K–128K tokens). Includes benchmark tables, decision trees, and when-to-use guidance for Ollama, LM Studio, Llama 3.x, Qwen2.5, and Mistral models. Download the presentation as a PDF reference card.',
      sections: {
        inOneSentence: {
          id: 'in-one-sentence',
          title: 'In One Sentence',
          content: [
            'Local LLMs trade performance and real-time capability for privacy and cost control.',
          ],
        },
        inPlainTerms: {
          id: 'in-plain-terms',
          title: 'In Plain Terms',
          content: [
            '<strong>Local LLMs:</strong> Download a language model to your computer (Ollama, LM Studio). All data stays private. Downsides: slow, limited intelligence, complex setup.',
            '<strong>Cloud APIs (GPT-4o, Claude):</strong> Send text to a remote server, get response in < 1 sec. Fast and smart, but costs money (~$0.01 per 1,000 characters).',
            '<strong>Decision:</strong> Local for privacy & offline use. Cloud for speed & quality.'
          ],
        },
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Quality gap: local 7B models score 10-20 percentage points below GPT-4o on reasoning and coding benchmarks. The gap narrows significantly at 70B scale but requires 40-48 GB of RAM.',
            'Speed: CPU-only inference on a 7B model produces 10-25 tok/sec. Cloud APIs produce 50-200 tok/sec. Apple Silicon and NVIDIA GPUs close this gap for consumer hardware.',
            'No internet access: local models have a training cutoff date and cannot retrieve current information. Cloud models can use web search plugins.',
            'Setup overhead: a working local LLM requires 5-15 minutes of installation and periodic model management. Cloud APIs require only an API key.',
            'Context window: most practical local models support 4K-128K tokens. Some cloud models (Gemini 3.1 Pro) support 1M+ tokens -- currently impractical locally.',
          ],
        },
        quickDecision: {
          id: 'quick-decision',
          title: 'Should You Use a Local LLM or a Cloud Model?',
          content: [
            '**Use a local LLM if:**',
            '- You need data privacy (no data leaves your device)',
            '- You want zero API costs',
            '- Your tasks are simple (summarization, classification, Q&A)',
            '',
            '**Use a cloud model if:**',
            '- You need frontier-level reasoning (complex analysis, code generation)',
            '- You need real-time information access',
            '- You want the fastest possible inference speed',
            '',
            '**Fast decision rule:**',
            '- Privacy critical → always use local',
            '- Performance critical → always use cloud',
            '- Unsure → test both with [PromptQuorum](/) before committing',
          ],
        },
        quickDecisionMatrix: {
          id: 'decision-matrix',
          title: 'Quick Decision Matrix: Local LLM vs Cloud API',
          columns: ['Task', 'Local LLM', 'Cloud API', 'Winner'],
          rows: [
            { 'Task': 'Privacy-sensitive data', 'Local LLM': 'Data never leaves device', 'Cloud API': 'Sent to remote server (requires DPA)', 'Winner': '✅ Local' },
            { 'Task': 'Real-time chat (< 2 sec)', 'Local LLM': '5–10 sec (CPU)', 'Cloud API': '0.5–1 sec', 'Winner': '✅ Cloud' },
            { 'Task': 'Code generation', 'Local LLM': '45–55% HumanEval (7B)', 'Cloud API': '90% HumanEval (GPT-4o)', 'Winner': '✅ Cloud' },
            { 'Task': 'Document summarization', 'Local LLM': 'Capable (7B sufficient)', 'Cloud API': 'Capable + faster', 'Winner': '⚖️ Either' },
            { 'Task': 'Zero API cost', 'Local LLM': '$0/token (after hardware)', 'Cloud API': '$0.01–0.05 per 1K tokens', 'Winner': '✅ Local (high volume)' },
            { 'Task': 'Offline / no internet', 'Local LLM': 'Fully offline', 'Cloud API': 'Requires internet', 'Winner': '✅ Local' },
            { 'Task': 'Large context (100K+ tokens)', 'Local LLM': '4K–32K tokens max', 'Cloud API': '128K–200K tokens', 'Winner': '✅ Cloud' },
            { 'Task': 'Production SLA (99.9%)', 'Local LLM': 'No SLA (hardware can fail)', 'Cloud API': '99.9% uptime guaranteed', 'Winner': '✅ Cloud' },
          ],
        },
        decisionFlowchart: {
          id: 'decision-flowchart',
          title: '30-Second Decision Tree',
          content: [
            '**Q1: Is data privacy critical (legal, medical, confidential)?**',
            '- ✓ YES → **Use local.** Privacy is the primary advantage.',
            '- ✗ NO → Next question.',
            '',
            '**Q2: Do you need real-time information (news, prices, current events)?**',
            '- ✓ YES → **Use cloud.** Local models have training cutoff.',
            '- ✗ NO → Next question.',
            '',
            '**Q3: Can you afford 40+ GB of RAM or a $1,600+ GPU?**',
            '- ✓ YES → **Use local 70B.** Quality matches cloud, zero ongoing costs.',
            '- ✗ NO → **Use cloud.** More practical than underpowered local.',
            '',
            '**Q4: Still unsure?** [Test both with PromptQuorum](/).',
          ],
        },
        promptquorumCta: {
          id: 'test-both',
          title: 'Still Deciding? Test Before Committing',
          content: [
            'If you\'re torn between local and cloud for your specific task, use [PromptQuorum free](/) to:',
          ],
          items: [
            'Send one prompt to your local Ollama AND 25+ cloud models',
            'Compare output quality side-by-side',
            'See actual speed, cost, and quality differences on YOUR data',
            'Make the decision with real results, not theory',
          ],
        },
        qualityGap: {
          title: 'Why Are Local LLMs Worse Than GPT-4o on Complex Tasks?',
          content: [
            '**The most significant limitation of local LLMs is output quality on complex tasks.** Frontier cloud models -- OpenAI GPT-4o, Anthropic Claude 4.6 Sonnet, Google Gemini 3.1 Pro -- are trained on more data, with more compute, and with more sophisticated RLHF fine-tuning than any publicly available local model. Open-weight alternatives like Llama 3.3, Qwen2.5, and Mistral (deployed via Ollama, LM Studio, or llama.cpp) cannot match this scale.',
            'On MMLU (general knowledge), HumanEval (Python coding), and MATH benchmarks, frontier models score 85-92%. The best locally-runnable 70B models (Llama 3.3 70B, Qwen2.5 72B) score 75-85%. Consumer-friendly 7B models score 55-70%.',
            'The quality gap is task-dependent. For summarization, simple Q&A, translation, and code explanation, a 7B model produces results that are difficult to distinguish from GPT-4o in blind evaluations. The gap is widest on: complex multi-step reasoning, advanced mathematics, nuanced long-form writing, and tasks requiring current world knowledge.',
            'Local model limitations overlap with broader LLM constraints — hallucinations, reasoning failures, and knowledge cutoffs affect all models regardless of deployment. For the complete picture of what LLMs still cannot do reliably, see [AI limitations: what LLMs can\'t do](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do).',
          ],
          image: '/images/local-llm-limitations-quality-benchmarks-en.svg',
          imageCaption: 'Quality Gap: Benchmark Scores — Local 7B models score 10–20 points lower on reasoning and coding than GPT-4o',
          rows: [
            { 'Task Type': 'Simple Q&A', 'Local 7B': 'Adequate', 'Local 70B': 'Good', 'GPT-4o': 'Excellent' },
            { 'Task Type': 'Code explanation', 'Local 7B': 'Adequate', 'Local 70B': 'Good', 'GPT-4o': 'Excellent' },
            { 'Task Type': 'Multi-step reasoning', 'Local 7B': 'Poor', 'Local 70B': 'Adequate', 'GPT-4o': 'Excellent' },
            { 'Task Type': 'Advanced math', 'Local 7B': 'Poor', 'Local 70B': 'Adequate', 'GPT-4o': 'Good' },
            { 'Task Type': 'Long-form writing', 'Local 7B': 'Adequate', 'Local 70B': 'Good', 'GPT-4o': 'Excellent' },
            { 'Task Type': 'Current events', 'Local 7B': 'None (no internet)', 'Local 70B': 'None (no internet)', 'GPT-4o': 'Good (with browsing)' },
          ],
          columns: ['Task Type', 'Local 7B', 'Local 70B', 'GPT-4o'],
        },
        whenQualityMatters: {
          title: 'When Does Output Quality Matter?',
          decisionBlock: {
            title: 'When Does Output Quality Matter?',
            localIf: [
              'Your task is summarization, simple Q&A, or code review on existing code',
              'Quality differences do not impact business outcomes',
            ],
            cloudIf: [
              'Your task involves complex reasoning (legal analysis, financial modeling)',
              'Output quality directly affects revenue or customer experience',
            ],
            quick: [
              'Quality-critical tasks (legal, medical, finance) → use cloud',
              'Simple tasks matching the "Adequate" rows above → try local first',
            ],
          },
        },
        speed: {
          title: 'How Fast Are Local LLMs Compared to Cloud APIs?',
          content: [
            '**Cloud APIs process tokens on dedicated server hardware with NVIDIA H100 or A100 GPUs.** Consumer hardware -- even high-end laptops and desktop GPUs -- cannot match this throughput.',
            'GPT-4o generates approximately 80-150 tokens/sec under typical load. A local 7B model on a modern laptop CPU generates 10-25 tokens/sec -- 4-10× slower. On an NVIDIA RTX 4090 (the fastest consumer GPU), the same 7B model reaches 130-160 tokens/sec -- comparable to cloud speed, but the hardware costs $1,600+.',
            'For interactive chat use, the speed difference is noticeable but tolerable at 20+ tok/sec. For batch processing (summarizing hundreds of documents), the speed gap becomes a significant constraint.',
          ],
          image: '/images/local-llm-limitations-speed-comparison-en.svg',
          imageCaption: 'Speed: Local vs Cloud APIs — Local CPU produces 4–10× fewer tokens per second than cloud APIs',
        },
        whenSpeedMatters: {
          title: 'When Does Speed Matter?',
          decisionBlock: {
            title: 'When Does Speed Matter?',
            localIf: [
              'You are doing interactive chat and can tolerate 10–25 tok/sec',
              'You prioritize privacy over latency',
            ],
            cloudIf: [
              'You process large batches (100+ documents)',
              'You need <1 second responses consistently',
            ],
            quick: [
              'Interactive → local is fine',
              'High throughput → use cloud',
            ],
          },
        },
        hardware: {
          title: 'What Hardware Do You Need to Run Local LLMs?',
          content: [
            '**Running a capable local model (13B+) requires hardware that not every user has.** The minimum for a genuinely useful local LLM experience -- matching GPT-3.5 quality -- is 16 GB RAM and a modern CPU or Apple Silicon chip. This rules out roughly half of consumer laptops currently in use. For a detailed breakdown and VRAM calculations, see [Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026).',
            'Matching frontier model quality locally requires a 70B model, which demands 40-48 GB of RAM -- only available on high-end workstations or Mac Studio / Mac Pro with 64+ GB unified memory. If your hardware is constrained, cloud APIs provide better quality at lower setup cost.',
          ],
          image: '/images/local-llm-limitations-hardware-requirements-en.svg',
          imageCaption: 'Hardware Requirements by Model Size — 16 GB RAM minimum for usable 7B models · 40+ GB for frontier-quality 70B models',
          rows: [
            { 'Hardware': 'Basic laptop (8 GB RAM, CPU only)', 'Max Useful Model': '7B at Q4_K_M', 'Quality Equivalent': 'Below GPT-3.5' },
            { 'Hardware': 'Mid-range laptop (16 GB RAM)', 'Max Useful Model': '13B at Q4_K_M', 'Quality Equivalent': 'Roughly GPT-3.5' },
            { 'Hardware': 'Apple M3 Pro (18 GB)', 'Max Useful Model': '13B full quality', 'Quality Equivalent': 'GPT-3.5 to GPT-4 (task dependent)' },
            { 'Hardware': 'NVIDIA RTX 4090 (24 GB VRAM)', 'Max Useful Model': '34B at Q4_K_M', 'Quality Equivalent': 'Close to GPT-4' },
            { 'Hardware': 'Mac Studio M2 Ultra (192 GB)', 'Max Useful Model': '70B full quality', 'Quality Equivalent': 'Competitive with GPT-4o' },
          ],
          columns: ['Hardware', 'Max Useful Model', 'Quality Equivalent'],
        },
        whenHardwareMatters: {
          title: 'When Does Hardware Matter?',
          decisionBlock: {
            title: 'When Does Hardware Matter?',
            localIf: [
              'Your machine has 16+ GB RAM and a modern CPU or Apple Silicon',
              'You\'re willing to invest in a GPU like RTX 4090 or Mac Studio',
            ],
            cloudIf: [
              'Your machine has 4–8 GB RAM and you cannot upgrade',
              'You do not want to manage hardware maintenance and updates',
            ],
            quick: [
              '≤8 GB RAM → cloud is mandatory for good quality',
              '16 GB RAM → try a 7B local model',
              '40+ GB RAM → local 70B matches cloud quality',
            ],
          },
        },
        noInternet: {
          title: 'Why Can\'t Local LLMs Access Real-Time Information?',
          content: [
            '**Local LLMs have a training data cutoff.** They cannot access the internet, cannot retrieve current news, cannot check live prices or stock data, and cannot visit URLs. A model trained with a cutoff of early 2024 will not know about events after that date.',
            'Cloud models with browsing capabilities (GPT-4o with web search, Gemini with Google Search integration) can retrieve and cite current information. No consumer-grade local inference tool replicates this capability without significant additional infrastructure (RAG with a live web crawler).',
            'For tasks that require current information -- news summaries, recent product comparisons, live data analysis -- cloud APIs are the practical choice. See [Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis) for a full comparison.',
          ],
        },
        whenRealtimeMatters: {
          title: 'When Does Real-Time Information Matter?',
          decisionBlock: {
            title: 'When Does Real-Time Information Matter?',
            localIf: [
              'Your task uses only historical or internal data (company docs, codebases, archives)',
              'You can accept answers based on knowledge from early 2024 or earlier',
            ],
            cloudIf: [
              'You need current stock prices, weather, news, or market data',
              'Your task requires retrieving and citing recent articles or visiting URLs',
            ],
            quick: [
              'Need live data (news, prices) → cloud required',
              'Using private/historical data only → local is fine',
            ],
          },
        },
        setup: {
          title: 'How Hard Is It to Set Up and Maintain a Local LLM?',
          content: [
            '**A cloud API requires creating an account, generating an API key, and making an HTTP call -- typically 5-10 minutes total.** A local LLM requires installing an inference engine (like [Ollama](/local-llms/run-first-local-llm) or LM Studio), downloading a model file (2-50 GB), configuring GPU offloading, and troubleshooting driver issues. [Ollama](https://ollama.com/) reduces this to a single binary installation, simplifying the process compared to manual setup.',
            'Maintenance adds ongoing complexity: new model releases must be manually downloaded, inference tools require updates, and hardware compatibility issues arise with OS updates. For a user who wants to focus on using AI rather than managing infrastructure, cloud APIs have a dramatically lower operational burden.',
            'See [how to install Ollama](/local-llms/run-first-local-llm) for step-by-step instructions and [Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup) for fixes to the most common errors. For a full setup time comparison, see [Setup Time: Local vs Cloud](/local-llms/local-llm-limitations-setup-time-en.svg).',
          ],
          image: '/images/local-llm-limitations-setup-time-en.svg',
          imageCaption: 'Setup Time: Local vs Cloud — Local setup takes 20–40 minutes; cloud APIs are ready in 5 minutes',
        },
        whenSetupMatters: {
          title: 'When Does Setup Complexity Matter?',
          decisionBlock: {
            title: 'When Does Setup Complexity Matter?',
            localIf: [
              'You\'re comfortable with command-line tools and troubleshooting',
              'You have 30+ minutes for initial setup and ongoing maintenance',
            ],
            cloudIf: [
              'You want zero infrastructure management overhead',
              'You need to deploy for non-technical users without setup burden',
            ],
            quick: [
              'Non-technical user → cloud is mandatory',
              'Solo developer who likes tinkering → local is fine',
              'Production app for others → cloud eliminates maintenance',
            ],
          },
        },
        contextWindow: {
          title: 'How Large Is the Context Window of Local LLMs?',
          content: [
            '**Most practical local models support 4K-128K token context windows.** Google Gemini 3.1 Pro supports 1M tokens; OpenAI GPT-4o supports 128K tokens. While 128K is available locally (Llama 3.1, Qwen2.5), the inference speed for very long contexts degrades significantly -- processing a 100K token context on a 7B model may take several minutes on consumer hardware.',
            'For tasks involving very long documents (entire books, large codebases, hours of transcripts), cloud APIs with large context windows are more practical than local inference.',
          ],
        },
        whenContextMatters: {
          title: 'When Does Context Window Matter?',
          decisionBlock: {
            title: 'When Does Context Window Matter?',
            localIf: [
              'Your typical request is under 8K tokens (roughly a 6,000-word document)',
              'You can break larger documents into chunks and process separately',
            ],
            cloudIf: [
              'You need to process entire books, codebases (100K+ lines), or multi-hour transcripts in one request',
              'You want Gemini 3.1 Pro\'s 1M-token context for document analysis',
            ],
            quick: [
              '< 8K tokens → local is fine',
              '8K–128K tokens → local works but slow',
              '> 128K tokens → cloud or split the document',
            ],
          },
        },
        regionalContext: {
          title: 'Regional Considerations: Local vs Cloud LLMs by Geography',
          content: [
            '**EU (GDPR Compliance):** The EU General Data Protection Regulation (GDPR) Articles 44-50 restrict cross-border data transfers unless specific safeguards are in place. Local LLM inference satisfies GDPR Article 28 (data processing) by keeping all data within EU borders. This eliminates the need for Standard Contractual Clauses (SCCs) or adequacy decisions, making local LLM deployment a compliance advantage for companies handling sensitive EU citizen data.',
            '**Japan (METI AI Governance):** Japan\'s Ministry of Economy, Trade and Industry (METI) AI Governance Framework 2024 recommends local inference for enterprise AI systems to reduce data exposure risk and maintain operational sovereignty. Japanese enterprises in finance, healthcare, and government favor local LLM deployment for classified information.',
            '**China (Data Security Law):** China\'s 2021 Data Security Law mandates that data about Chinese citizens and entities remain processed within China. Cloud APIs operated by non-Chinese companies violate this requirement. Local LLM inference using open-source models (Llama, Qwen2.5) meets this requirement when deployed on Chinese-controlled infrastructure.',
          ],
        },
        whenCloud: {
          title: 'When Should You Use a Cloud API Instead of a Local LLM?',
          items: [
            '**Maximum output quality is required** -- legal documents, complex code generation, advanced research analysis. Use GPT-4o or Claude 4.6 Sonnet. For a full comparison, see [Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis).',
            '**Real-time information is needed** -- current news, live data, URL retrieval. Local models have a training cutoff.',
            '**Setup time is a constraint** -- for a quick prototype or one-off task, a cloud API key is faster to get working than a local install.',
            '**Your hardware is limited** -- on a machine with 4-6 GB RAM, local inference is marginal. Cloud APIs produce better results with zero hardware strain.',
            '**Processing very long documents** -- 100K+ token contexts are slow locally. Cloud models handle this more practically.',
            '**Comparing local vs cloud side-by-side**: Tools like [PromptQuorum](/) dispatch one prompt to your local Ollama model and 25+ cloud models simultaneously, letting you evaluate quality differences on your specific tasks before committing to either approach.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'When NOT to Use Local LLMs',
          content: [
            'Local LLMs are the wrong choice in these scenarios:',
            '',
            '**Complex multi-step reasoning** -- Your task requires breaking down a problem, using intermediate results, and iterating. Local 7B models fail on these tasks. Use GPT-4o or Claude 4.6 Sonnet instead.',
            '',
            '**Real-time information requirements** -- You need current news, live data feeds, or the ability to visit URLs. Local models have a training cutoff and no internet access. Cloud APIs with web search are required.',
            '',
            '**High-accuracy legal or medical tasks** -- Documents with legal, medical, or financial implications require frontier-level accuracy. A local model\'s 10-20 point benchmark gap could introduce costly errors.',
            '',
            '**Large-scale production deployments** -- You\'re building a consumer-facing product requiring 99.9% uptime. Local inference requires managing servers and updates yourself; cloud APIs provide SLAs and support.',
            '',
            '**Batch processing at scale** -- You\'re processing 1,000+ documents and speed matters. Cloud APIs process batches in minutes; local inference takes hours or days.',
          ],
        },
        bestChoice: {
          id: 'best-choice',
          title: '🏆 Best Local LLM by Use Case',
          content: [
            '- **Best for privacy and compliance** → Local LLM (Ollama + Llama 3.3 70B or Qwen2.5 7B)',
            '- **Best for reasoning and coding** → Cloud API (OpenAI GPT-4o or Anthropic Claude Opus 4.7)',
            '- **Best for speed with good quality** → Cloud API (OpenAI GPT-4o mini for 10× cheaper token cost)',
            '- **Best for cost at scale** → Local LLM (if you have the hardware; amortized cost approaches zero)',
            '- **Best for trying both approaches** → [PromptQuorum](/) (dispatch to both local and cloud, see the quality difference before choosing)',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Quick Facts: Local vs Cloud Metrics',
          columns: ['Metric', 'Local LLM (CPU)', 'Local LLM (GPU)', 'Cloud API'],
          rows: [
            { 'Metric': 'Speed', 'Local LLM (CPU)': '10–25 tokens/sec', 'Local LLM (GPU)': '50–130 tokens/sec', 'Cloud API': '80–150 tokens/sec' },
            { 'Metric': 'Quality Gap', 'Local LLM (CPU)': '~15–20% below GPT-4o', 'Local LLM (GPU)': '~5–10% below GPT-4o', 'Cloud API': 'Frontier level' },
            { 'Metric': 'RAM Required', 'Local LLM (CPU)': '16 GB (minimum)', 'Local LLM (GPU)': '24 GB VRAM (GPU)', 'Cloud API': 'None (cloud-managed)' },
            { 'Metric': 'Setup Time', 'Local LLM (CPU)': '20–40 minutes', 'Local LLM (GPU)': '30–60 minutes', 'Cloud API': '5 minutes' },
            { 'Metric': 'Context Window', 'Local LLM (CPU)': '4K–128K tokens', 'Local LLM (GPU)': '4K–128K tokens', 'Cloud API': '128K–1M+ tokens' },
            { 'Metric': 'Cost per Month', 'Local LLM (CPU)': '~$0 (hardware amortized)', 'Local LLM (GPU)': '$800–$3,000+ (hardware)', 'Cloud API': '$5–$50 (API)' },
            { 'Metric': 'Real-Time Data', 'Local LLM (CPU)': '❌ No internet access', 'Local LLM (GPU)': '❌ No internet access', 'Cloud API': '✅ Web search available' },
            { 'Metric': 'Maintenance', 'Local LLM (CPU)': 'Ongoing (updates, drivers)', 'Local LLM (GPU)': 'Ongoing (updates, drivers)', 'Cloud API': 'None (cloud-managed)' },
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Local LLM Limitations',
          faqs: [
            {
              q: 'Should I use a local LLM or cloud API?',
              a: 'Local if privacy is critical. Cloud if speed or real-time data is critical. Unsure? Test both with PromptQuorum — dispatch one prompt to your local Ollama and 25+ cloud models simultaneously to compare quality on your specific task.',
            },
            {
              q: 'Is local LLM faster than cloud API?',
              a: 'No. Cloud APIs generate 80–150 tokens/sec. Local LLMs on CPU generate 10–25 tok/sec — 4–10× slower. GPU helps: NVIDIA RTX 4090 reaches 130–160 tok/sec, matching cloud, but costs $1,600+.',
            },
            {
              q: 'Is local LLM cheaper than cloud?',
              a: 'Depends on usage. Local costs $800–2,000 upfront hardware. Cloud costs $5–50/month. For light users (<100K tokens/month), cloud is cheaper. For heavy users (>10M tokens/month), local breaks even in 6–12 months.',
            },
            {
              q: 'When should you use a local LLM instead of cloud?',
              a: 'Use local when: data privacy is critical (no data leaves your device), you have adequate hardware (16+ GB RAM or 40+ GB for 70B models), you don\'t need real-time information, and setup complexity is acceptable. Use cloud when: speed is critical, real-time data access is needed, hardware is limited (<8 GB RAM), or you need frontier-level reasoning.',
            },
            {
              q: 'What are the main limitations of local LLMs?',
              a: 'Six key limitations: (1) Lower quality on complex reasoning vs frontier cloud models, (2) 4–10× slower inference on consumer hardware, (3) High hardware requirements ($800–2,000 upfront), (4) No real-time information access (training cutoff date), (5) Setup complexity (20–40 minutes vs 5 minutes cloud), (6) Limited context window (4K–128K tokens locally vs 1M+ in cloud).',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[GPT-4o Technical Report](https://openai.com/gpt-4o/) -- Benchmark comparisons and capability analysis from OpenAI',
            '[Meta Llama 3.3 Model Card](https://www.llama.com/) -- Official performance metrics and limitations',
            '[Understanding Hallucination in LLMs](https://arxiv.org/abs/2110.01852) -- Academic research on model accuracy and error patterns',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes Regarding LLM Limitations',
          items: [
            '**Expecting 7B models to match GPT-4o:** They are 10–20% lower on reasoning. HumanEval: local 7B scores 45–55% vs GPT-4o\'s 90%. Use 70B locally or cloud for complex tasks.',
            '**Ignoring hardware limits:** 16 GB RAM is the minimum for useful models. Below that, quality degrades significantly. Check [hardware requirements](/local-llms/local-llm-hardware-guide-2026) before starting.',
            '**Assuming local = faster:** CPU inference is 4–10× slower (10–25 tok/sec vs 80–150 tok/sec cloud). Requires $1,600+ GPU to match cloud speed.',
            '**Underestimating setup time:** Local setup takes 20–40 minutes. Cloud is 5 minutes. Add ongoing maintenance (updates, drivers) to your local cost calculation.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Understand what local LLMs are and how they run on your hardware](/local-llms/what-are-local-llms) -- Core concepts, architecture, and key differences from cloud models',
            '[Compare local LLMs vs cloud APIs: when to use each approach](/local-llms/local-llms-vs-cloud-apis) -- Trade-off analysis, cost comparison, and decision guidance',
            '[Find the best beginner-friendly local LLM models for limited hardware](/local-llms/best-beginner-local-llm-models) -- Model recommendations, VRAM requirements, and setup options',
            '[Explore the best local LLMs available in 2026](/local-llms/best-local-llms-2026) -- Top models, benchmark scores, and performance comparisons',
          ],
        },
      },
    },
    de: {
      theme: 'Erste Schritte',
      title: 'Lokales LLM vs Cloud API: Wann welches verwenden (2026 Vergleich)',
      seoTitle: 'Lokales LLM vs Cloud: Datenschutz vs Geschwindigkeit 2026',
      intro: 'Lokale LLMs bieten Datenschutz und Kontrolle, haben aber erhebliche Leistungslücken. Erfahren Sie, welche 6 kritischen Grenzen lokale Modelle haben — und wann Sie Cloud-APIs stattdessen verwenden sollten.',
      metaDescription: 'Lokal = 100% Datenschutz, 0 Euro Kosten, 10x langsamer. Cloud = 50–150 Tokens/s, 0,01–0,05 Euro pro 1K Tokens, Web-Zugriff. Vergleichstabelle + Entscheidungshilfe. April 2026.',
      twitterDescription: 'Lokales LLM: datenschutzsicher, kostenlos, aber 10x langsamer. Cloud: schnell + intelligent, kostet Geld. Vergleich nach Anwendungsfall. April 2026.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Lokale LLMs können Frontier Cloud-Modelle beim Reasoning, der Geschwindigkeit und dem Echtzeit-Datenzugriff aufgrund von Hardware- und Trainingsabschränkungen nicht erreichen.** Sie eignen sich am besten für private, Offline- und kostensensitive Aufgaben, aber nicht für High-Accuracy oder Echtzeit-Anwendungen.',
      audience: 'Entwickler und Mittelstands-IT-Leiter, die zwischen lokalen und Cloud-LLMs entscheiden müssen',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Anfänger',
      primaryTerm: 'Grenzen von lokalen LLMs',
      toc: [
        { label: 'In einem Satz', anchor: '#in-one-sentence' },
        { label: 'In einfachen Worten', anchor: '#in-plain-terms' },
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Schnelle Entscheidung', anchor: '#quick-decision' },
        { label: 'Grenze 1: Geschwindigkeit', anchor: '#speed-limitations' },
        { label: 'Grenze 2: Qualität', anchor: '#quality-limitations' },
        { label: 'Grenze 3: Hardware', anchor: '#hardware-requirements' },
        { label: 'Grenze 4: Einrichtungszeit', anchor: '#setup-time' },
        { label: 'Grenze 5: Kontextfenster', anchor: '#context-window' },
        { label: 'Grenze 6: Keine Echtzeitgarantien', anchor: '#no-realtime-guarantees' },
        { label: 'Wann Sie KEINE lokalen Modelle verwenden sollten', anchor: '#when-not-to-use' },
        { label: 'Beste lokale LLMs nach Anwendungsfall', anchor: '#best-choice' },
        { label: 'Schnellübersicht', anchor: '#quick-facts' },
        { label: 'Häufig gestellte Fragen', anchor: '#faqs' },
        { label: 'Quellen und Links', anchor: '#sources' }
      ],
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Grenzen von lokalen LLMs: Was lokale Modelle nicht können (und wann Cloud stattdessen besser ist)',
        description: 'Lokale vs. Cloud-LLMs: 6 Grenzen (Geschwindigkeit, Qualität, Hardware). Entscheidungsbaum für Mittelstand und Unternehmen. Benchmarks + Kostenvergleich.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/local-llm-limitations?lang=de',
        inLanguage: 'de',
        about: [
          { '@type': 'Thing', 'name': 'Lokale LLMs' },
          { '@type': 'Thing', 'name': 'Cloud APIs' },
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' }
        ],
        mentions: [
          { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
          { '@type': 'SoftwareApplication', 'name': 'Claude 3.5 Sonnet (2024)' },
          { '@type': 'Thing', 'name': 'Llama 2' },
          { '@type': 'Thing', 'name': 'Mistral' }
        ],
        author: {
          '@type': 'Person',
          'name': 'Hans Kuepper'
        },
        publisher: {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Sind lokale LLMs langsamer als Cloud APIs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, lokale LLMs sind deutlich langsamer. CPU-Inferenz erzeugt 10–25 Token pro Sekunde, während Cloud APIs (GPT-4o) 80–150 Token pro Sekunde erreichen. Selbst mit GPU (RTX 4090) erreichen Sie nur 130–160 Token/s. Cloud ist 4–10× schneller für Echtzeitanwendungen.'
            }
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein 70B-Modell auf meinem Laptop ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. 70B-Modelle erfordern mindestens 40 GB RAM oder VRAM. Ein typischer Laptop mit 16 GB RAM kann höchstens ein 13B-Modell mit Komprimierung ausführen. Für 70B-Modelle benötigen Sie einen Mac Studio, einen Workstation oder Multi-GPU-Setup (Kosten: 3.300 €+).'
            }
          },
          {
            '@type': 'Question',
            name: 'Welche lokalen Modelle sind am besten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für 16 GB RAM: Llama 2 13B oder Mistral 7B (Qualität ≈ GPT-3.5). Für 40 GB RAM: Llama 3.3 70B oder Qwen 72B (Qualität ≈ GPT-4). Verwenden Sie Q4_K_M-Quantisierung für optimale Effizienz. Für beste Qualität nutzen Sie Cloud APIs (GPT-4o, Claude 3.5 Sonnet (2024)).'
            }
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein lokales Modell offline verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, das ist der Hauptvorteil. Nach dem Download läuft alles lokal — kein Internet notwendig. Aber der Download dauert 20–40 Minuten plus Einrichtung. Cloud APIs erfordern immer Internetverbindung, bieten aber automatische Updates und Verfügbarkeitsgarantien.'
            }
          },
          {
            '@type': 'Question',
            name: 'Was ist das maximale Kontextfenster für lokale Modelle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die meisten lokalen Modelle unterstützen 4K–32K Token Kontext. Llama 2 hat standardmäßig 4K, kann aber auf 32K erweitert werden. Cloud APIs bieten viel mehr: GPT-4o = 128K, Claude 3.5 Sonnet (2024) = 200K. Für große Dokumente ist Cloud besser.'
            }
          },
          {
            '@type': 'Question',
            name: 'Benötige ich eine GPU für lokale LLMs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein, aber eine GPU ist stark empfohlen. CPU-Inferenz ist 10–50× langsamer. Mit einer GPU (RTX 4090, RTX 4070) erreichen Sie 50–160 Token/s. Ohne GPU (reiner CPU): 10–25 Token/s, was für Echtzeit-Chat unbrauchbar ist.'
            }
          },
          {
            '@type': 'Question',
            name: 'Was kostet ein lokales Modell?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kostenlos zum Download und Ausführen (Ollama ist kostenlos). Hardware ist teuer: GPU (RTX 4090) = 2.310 €+, Mac Studio = 2.299 €+. Cloud APIs: $0,01–0,10 pro 1.000 Token. Für kleine bis mittlere Volumen ist Cloud günstiger; für hochfrequente Nutzung kann lokale Hardware rentabel sein.'
            }
          },
          {
            '@type': 'Question',
            name: 'Sollte ich Ollama oder LM Studio verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ollama ist CLI-basiert, schneller, einfacher zu automatisieren. LM Studio hat eine GUI, besser für Anfänger. Für Production und APIs: Ollama. Für explorative Experimente: LM Studio. Beide führen die gleichen Modelle aus (Llama, Mistral, Qwen).'
            }
          },
          {
            '@type': 'Question',
            name: 'Kann ich GPT-4o lokal ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein, OpenAI stellt GPT-4o-Gewichte nicht zur Verfügung. Sie können GPT-4o nur über die OpenAI API verwenden. Es gibt lokale Open-Source-Alternativen (Llama 3.3 70B, Qwen 72B), die ähnliche (aber nicht identische) Qualität bieten. Für garantierte GPT-4o-Qualität: Cloud API.'
            }
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert das Setup eines lokalen Modells?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Gesamtzeit: 20–40 Minuten. (1) Ollama/LM Studio installieren: 2–3 Min. (2) 7B-Modell herunterladen (4 GB): 5–10 Min. (3) GPU konfigurieren (optional, CUDA/Metal): 5–10 Min. Cloud APIs: 5 Minuten von Anfang bis zum ersten API-Aufruf.'
            }
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, besonders bei personenbezogenen Daten. DSGVO Artikel 28 (Datenverarbeitung) gilt auch für lokale LLMs, wenn Sie Kundendaten eingeben. Lokale Inferenz erfüllt Anforderungen der Datenneutralität besser als Cloud, aber: Sie müssen Datenschutzerklärungen aktualisieren, Datenfluss dokumentieren, und gegebenenfalls TOM (technische und organisatorische Maßnahmen) implementieren. BSI-Grundschutz-Kataloge empfehlen lokale Verarbeitung für Klassifizierung „INTERN" und höher.'
            }
          },
          {
            '@type': 'Question',
            name: 'Ist ein lokales Modell für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, mit Vorbehalten. Vorteil: Datenhoheit (DSGVO-konform, BSI-Grundschutz-Anforderungen). Nachteil: IT-Wartungsaufwand, Hardwarekosten, niedrigere Qualität. Empfehlung für Mittelstand: Ollama + Llama 2 13B auf einem lokalen Server oder dedizierten GPU für interne Textverarbeitung (Dokumente, E-Mails, Reports). Für kundengerichtete Anwendungen: Cloud APIs mit DPA (Datenverarbeitungsvertrag) sind sicherer und wartungsärmer.'
            }
          },
          {
            '@type': 'Question',
            name: 'Soll ich ein lokales LLM oder eine Cloud API verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lokales LLM, wenn Datenschutz kritisch ist. Cloud, wenn Geschwindigkeit oder aktuelle Informationen kritisch sind. Unsicher? Testen Sie beide mit PromptQuorum — senden Sie einen Prompt gleichzeitig an lokales Ollama und 25+ Cloud-Modelle, um die Qualität für Ihre spezifische Aufgabe zu vergleichen.'
            }
          },
          {
            '@type': 'Question',
            name: 'Ist lokales LLM schneller als Cloud API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Cloud APIs erzeugen 80–150 Token/s. Lokale LLMs auf CPU erzeugen 10–25 Token/s — 4–10× langsamer. GPU hilft: NVIDIA RTX 4090 erreicht 130–160 Token/s, entspricht Cloud, kostet aber 2.310 €+.'
            }
          },
          {
            '@type': 'Question',
            name: 'Ist lokales LLM günstiger als Cloud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hängt von der Nutzung ab. Lokal kostet 900–2.200 € Hardware-Vorlauf. Cloud kostet $5–50/Monat. Für leichte Nutzer (<100.000 Token/Monat) ist Cloud günstiger. Für schwere Nutzer (>10 Mio. Token/Monat) amortisiert sich lokal in 6–12 Monaten.'
            }
          },
          {
            '@type': 'Question',
            name: 'Wann sollte ich lokales LLM statt Cloud verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lokal verwenden wenn: Datenschutz kritisch (keine Daten verlassen das Gerät), ausreichend Hardware (16+ GB RAM oder 40+ GB für 70B), keine Echtzeitinformationen benötigt, und Setup-Komplexität akzeptabel. Cloud verwenden wenn: Geschwindigkeit kritisch, Echtzeit-Datenzugriff nötig, Hardware limitiert (<8 GB RAM), oder Frontier-Level-Reasoning benötigt.'
            }
          },
          {
            '@type': 'Question',
            name: 'Was sind die Hauptbeschränkungen von lokalen LLMs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sechs Hauptbeschränkungen: (1) Niedrigere Qualität bei komplexem Reasoning vs. Frontier-Cloud-Modelle, (2) 4–10× langsamere Inferenz auf Consumer-Hardware, (3) Hohe Hardware-Anforderungen (900–2.200 € Vorlauf), (4) Kein Zugriff auf Echtzeitinformation (Training-Cutoff), (5) Setup-Komplexität (20–40 Minuten vs. 5 Minuten Cloud), (6) Begrenztes Kontextfenster (4K–128K Token lokal vs. 1M+ in Cloud).'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Wann Sie Cloud APIs verwenden sollten',
        inLanguage: 'de',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Echtzeit-Chatbot',
            description: 'Nutzer erwarten < 2 Sekunden Antwortzeit. Cloud APIs liefern 4–10× schnellere Antworten.'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hochvolumen-Batch-Verarbeitung',
            description: '1.000+ Dokumente pro Tag. Cloud APIs skalieren automatisch; lokale GPU wird schnell zum Engpass.'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Produktion mit SLA-Anforderung',
            description: 'Verfügbarkeit 99,9%+. Cloud APIs garantieren SLA; lokale Hardware erfordert Redundanz (Kosten).'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Beste Ausgabequalität (Coding, Analyse)',
            description: 'GPT-4o und Claude 3.5 Sonnet (2024) schlagen lokale Modelle um 10–20 Punkte bei Benchmarks.'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Lange Kontextfenster',
            description: '100K+ Token. Cloud APIs (GPT-4o 128K, Claude 200K) verarbeiten große Dokumente; lokale Modelle begrenzt auf 4K–32K.'
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Kein IT-Personal für Wartung',
            description: 'Cloud APIs = null Wartung, automatische Updates. Lokale Modelle erfordern CUDA-Treiber, Firmware-Patches, Monitoring.'
          }
        ]
      },
      gammaEmbedUrl: '/presentations/local-llm-limitations-static.html',
      gammaDescription: 'Interaktive 14-Folien-Präsentation: Die 6 Grenzen von lokalen LLMs, Hardwareanforderungen (8–40 GB RAM), Geschwindigkeitsvergleich (10–25 Token/s CPU vs. 80–150 Token/s Cloud), Qualitätslücke (Benchmarks MMLU, HumanEval), Einrichtungszeit (20–40 Min lokal vs. 5 Min Cloud), Entscheidungsbaum (lokal vs. Cloud). Mit Printfunktion als PDF herunterladen.',
      sections: {
        inOneSentence: {
          title: 'In einem Satz',
          content: 'Lokale LLMs bieten Datenschutz, sind aber 4–10× langsamer, benötigen mindestens 16 GB Hardware und liefern niedrigere Qualität als Cloud APIs — verwenden Sie sie nur für Offline-Szenarien oder nicht-zeitkritische Batch-Verarbeitung.'
        },
        inPlainTerms: {
          title: 'In einfachen Worten',
          content: [
            '<strong>Lokale LLMs:</strong> Sie laden ein Sprachmodell auf Ihren Computer herunter (Ollama, LM Studio). Alle Daten bleiben privat. Nachteil: langsam, begrenzte Intelligenz, kompliziertes Setup.',
            '<strong>Cloud APIs (GPT-4o, Claude):</strong> Sie senden Text an einen Remote-Server, bekommen Antwort in < 1 Sekunde. Schnell und intelligent, aber kostet Geld (~$0,01 pro 1.000 Zeichen).',
            '<strong>Entscheidung:</strong> Lokal für Datenschutz & Offline-Nutzung. Cloud für Geschwindigkeit & Qualität.'
          ]
        },
        tldr: {
          isTldr: true,
          title: 'Wichtigste Erkenntnisse',
          content: [
            '✓ Lokale Modelle sind 4–10× langsamer (CPU: 10–25 Token/s vs. Cloud: 80–150 Token/s).',
            '✓ Qualitätslücke: 7B-Modelle liegen 10–20 Punkte unter GPT-4o bei MMLU und HumanEval Benchmarks.',
            '✓ Hardwareanforderung: Minimum 16 GB RAM für praktische Nutzung; 40 GB für beste Qualität (70B Modelle).',
            '✓ Einrichtungszeit: 20–40 Minuten lokal (Download + Konfiguration); Cloud APIs in 5 Minuten einsatzbereit.',
            '✓ Kontextfenster: Lokal 4K–32K; Cloud 128K–200K (GPT-4o, Claude). Cloud besser für lange Dokumente.',
            '✓ Beste Anwendungsfälle lokal: Datenschutz-kritische Aufgaben, Offline-Szenarien, nicht-zeitkritische Batch-Verarbeitung.',
            '✓ Beste Anwendungsfälle Cloud: Echtzeit-Chat, Hochvolumen-Batch, Produktion mit SLA, beste Ausgabequalität.'
          ]
        },
        quickDecision: {
          title: 'Schnelle Entscheidung: Lokal oder Cloud?',
          content: [
            '<strong>Verwenden Sie LOKAL, wenn:</strong>',
            '• Sie Daten nicht an Remote-Server senden dürfen (DSGVO, Datenschutz).',
            '• Sie Offline arbeiten müssen (kein Internet).',
            '• Sie Sicherheit vor Geschwindigkeit priorisieren.',
            '• Ihr Usecase nicht zeitkritisch ist (Batch-Analysen, Dokumentenverarbeitung).',
            '',
            '<strong>Verwenden Sie CLOUD, wenn:</strong>',
            '• Echtzeit-Performance kritisch ist (Chat, Live-Analyse).',
            '• Sie höchste Qualität benötigen (Coding, komplexe Reasoning).',
            '• Sie Hochvolumen-Anfragen verarbeiten (1.000+ Docs/Tag).',
            '• Sie nicht selbst Infrastruktur warten wollen (Zero-Wartung).',
            '• Sie lange Kontextfenster brauchen (100K+ Tokens).'
          ]
        },
        quickDecisionMatrix: {
          id: 'decision-matrix',
          title: 'Entscheidungsmatrix: Lokales LLM vs Cloud API',
          columns: ['Aufgabe', 'Lokales LLM', 'Cloud API', 'Empfehlung'],
          rows: [
            { 'Aufgabe': 'Datenschutzkritische Daten', 'Lokales LLM': 'Daten verlassen nie das Gerät', 'Cloud API': 'An Remote-Server gesendet (erfordert DPA)', 'Empfehlung': '✅ Lokal' },
            { 'Aufgabe': 'Echtzeit-Chat (< 2 Sekunden)', 'Lokales LLM': '5–10 Sekunden (CPU)', 'Cloud API': '0,5–1 Sekunde', 'Empfehlung': '✅ Cloud' },
            { 'Aufgabe': 'Code-Generierung', 'Lokales LLM': '45–55% HumanEval (7B)', 'Cloud API': '90% HumanEval (GPT-4o)', 'Empfehlung': '✅ Cloud' },
            { 'Aufgabe': 'Dokumentenzusammenfassung', 'Lokales LLM': 'Fähig (7B ausreichend)', 'Cloud API': 'Fähig + schneller', 'Empfehlung': '⚖️ Beide' },
            { 'Aufgabe': 'Null API-Kosten', 'Lokales LLM': '$0/Token (nach Hardware)', 'Cloud API': '$0,01–0,05 pro 1K Token', 'Empfehlung': '✅ Lokal (hohes Volumen)' },
            { 'Aufgabe': 'Offline/Kein Internet', 'Lokales LLM': 'Vollständig offline', 'Cloud API': 'Erfordert Internet', 'Empfehlung': '✅ Lokal' },
            { 'Aufgabe': 'Großer Kontext (100K+ Token)', 'Lokales LLM': '4K–32K Token Max', 'Cloud API': '128K–200K Token', 'Empfehlung': '✅ Cloud' },
            { 'Aufgabe': 'Produktions-SLA (99,9%)', 'Lokales LLM': 'Kein SLA (Hardware kann fehlschlagen)', 'Cloud API': '99,9% Verfügbarkeit garantiert', 'Empfehlung': '✅ Cloud' },
          ],
        },
        decisionFlowchart: {
          id: 'decision-flowchart',
          title: '30-Sekunden-Entscheidungsbaum',
          content: [
            '**F1: Ist Datenschutz kritisch (rechtlich, medizinisch, vertraulich)?**',
            '- ✓ JA → **Nutzen Sie lokal.** Datenschutz ist der primäre Vorteil.',
            '- ✗ NEIN → Nächste Frage.',
            '',
            '**F2: Benötigen Sie Echtzeit-Informationen (Nachrichten, Preise, aktuelle Ereignisse)?**',
            '- ✓ JA → **Nutzen Sie Cloud.** Lokale Modelle haben Stichtag-Limit.',
            '- ✗ NEIN → Nächste Frage.',
            '',
            '**F3: Können Sie sich 40+ GB RAM oder eine 2.310 €+ GPU leisten?**',
            '- ✓ JA → **Nutzen Sie lokales 70B.** Qualität entspricht Cloud, null fortlaufende Kosten.',
            '- ✗ NEIN → **Nutzen Sie Cloud.** Praktischer als schwaches Lokal-Setup.',
            '',
            '**F4: Immer noch unsicher?** [Testen Sie beide mit PromptQuorum](/?lang=de).',
          ],
        },
        promptquorumCta: {
          id: 'test-both',
          title: 'Immer noch unsicher? Testen Sie vorher',
          content: [
            'Wenn Sie zwischen Lokal und Cloud für Ihren spezifischen Task unsicher sind, nutzen Sie [PromptQuorum kostenlos](/?lang=de) um:',
          ],
          items: [
            'Ein Prompt gleichzeitig zu Ihrem lokalen Ollama und 25+ Cloud-Modellen senden',
            'Ausgabqualität Seite-an-Seite vergleichen',
            'Tatsächliche Geschwindigkeit, Kosten und Qualitätsunterschiede auf IHREN Daten sehen',
            'Mit echten Ergebnissen entscheiden, nicht mit Theorie',
          ],
        },
        qualityGap: {
          title: 'Grenze 2: Qualitätslücke — Lokale Modelle erreichen GPT-4o nicht',
          content: ['Lokale 7B-Modelle liegen bei Standard-Benchmarks (MMLU, HumanEval) 10–20 Punkte unter GPT-4o. Das klingt nicht viel, bedeutet in der Praxis aber: schwächeres Reasoning, häufigere Fehler bei Code und Mathe, weniger Nuancenverständnis.', 'Einschränkungen lokaler Modelle überschneiden sich mit allgemeinen LLM-Grenzen — Halluzinationen, Reasoning-Fehler und Wissens-Cutoffs betreffen alle Modelle unabhängig vom Deployment. Das vollständige Bild über das, was LLMs noch immer nicht zuverlässig können, bietet [KI-Einschränkungen: Was LLMs nicht können](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do).'],
          image: '/images/local-llm-limitations-quality-benchmarks-de.svg',
          columns: ['Modell', 'MMLU (allgemeines Wissen)', 'HumanEval (Python-Coding)'],
          rows: [
            { 'Modell': 'Lokal 7B', 'MMLU (allgemeines Wissen)': '62–68%', 'HumanEval (Python-Coding)': '45–55%' },
            { 'Modell': 'Lokal 70B', 'MMLU (allgemeines Wissen)': '75–80%', 'HumanEval (Python-Coding)': '65–75%' },
            { 'Modell': 'GPT-4o', 'MMLU (allgemeines Wissen)': '88,7%', 'HumanEval (Python-Coding)': '90,2%' }
          ]
        },
        whenQualityMatters: {
          title: 'Wann ist Qualität kritisch?',
          decisionBlock: {
            title: 'Wann ist Qualität kritisch?',
            localIf: [
              'Sie brauchen nur Textzusammenfassungen (robust)',
              'Sentiment-Analyse ist ausreichend (auch 7B zuverlässig)',
            ],
            cloudIf: [
              'Code-Generierung & Debugging (Fehlerquote bei lokal 7B: 35–45% vs. GPT-4o 10%)',
              'Finanzielle oder medizinische Analyse (Fehler sind teuer)',
            ],
            quick: [
              'Einfache Aufgaben → lokal OK',
              'Komplexes Reasoning → Cloud',
            ],
          }
        },
        speed: {
          title: 'Grenze 1: Geschwindigkeit — Lokale CPU ist 4–10× langsamer',
          content: 'Dies ist die größte praktische Limitation. Lokale CPUs erzeugen 10–25 Token pro Sekunde. Cloud APIs liefern 80–150 Token/s. Für Nutzer fühlt sich das wie: lokal = mehrere Sekunden Wartezeit pro Antwort; Cloud = sofortige Antwort < 1 Sekunde.',
          image: '/images/local-llm-limitations-speed-comparison-de.svg'
        },
        whenSpeedMatters: {
          title: 'Wann ist Geschwindigkeit kritisch?',
          decisionBlock: {
            title: 'Wann ist Geschwindigkeit kritisch?',
            localIf: [
              'Sie tun interaktiven Chat und können 10–25 Token/s tolerieren',
              'Datenschutz ist wichtiger als Latenz',
            ],
            cloudIf: [
              'Sie verarbeiten große Batches (100+ Dokumente)',
              'Sie brauchen < 1 Sekunde Antworten konsistent',
            ],
            quick: [
              'Interaktiv → lokal ist OK',
              'Hohes Durchsatz → Cloud',
            ],
          }
        },
        hardware: {
          title: 'Grenze 3: Hardware — 16–40 GB RAM minimum',
          content: 'Lokale Modelle brauchen RAM. Eine 7B-Quantisierung (Q4_K_M) benötigt ~4 GB; eine 70B benötigt ~40 GB. Dazu kommt OS, Systemspeicher, Kontextfenster = mindestens 16 GB RAM sind praktisches Minimum. Das ist teuer (GPU: 2.310 €+, Mac Studio: 2.299 €+).',
          image: '/images/local-llm-limitations-hardware-requirements-de.svg'
        },
        whenHardwareMatters: {
          title: 'Wann ist Hardware limitierend?',
          decisionBlock: {
            title: 'Wann ist Hardware limitierend?',
            localIf: [
              'Sie haben 16+ GB RAM',
              'Sie arbeiten mit 7B–13B Modellen',
            ],
            cloudIf: [
              'Sie haben nur 8 GB RAM (Laptop)',
              'Sie wollen > 13B-Modelle ausführen (Bedarf: 24–40 GB)',
              'Sie bedienen > 30 gleichzeitige Nutzer (nur mit GPU-Cluster skalierbar)',
            ],
            quick: [
              'Mid-range Hardware → lokal OK',
              'Begrenzte Hardware → Cloud',
            ],
          }
        },
        noInternet: {
          title: 'Grenze 6: Keine Verfügbarkeitsgarantien — Local ist fragil',
          content: 'Lokale LLMs garantieren keine Uptime. Wenn Ihr Laptop sich aufhängt, Ollama crasht oder der CUDA-Treiber Fehler macht: keine Hilfe, nur Downtime für Sie. Cloud APIs (OpenAI, Anthropic) garantieren 99,9% Verfügbarkeit (SLA). Für Production = Cloud besser.'
        },
        whenRealtimeMatters: {
          title: 'Wann ist Verfügbarkeit kritisch?',
          decisionBlock: {
            title: 'Wann ist Verfügbarkeit kritisch?',
            localIf: [
              'Interne Tools für 5–10 Nutzer',
              'Experimentation & Development',
            ],
            cloudIf: [
              'Produktionsanwendung mit Kundenabhängigkeit',
              'Finanztransaktionen oder Medizin-Apps',
              'Hochverfügbarkeit erforderlich (Ausfall teuer)',
            ],
            quick: [
              'Intern-only → lokal OK',
              'Production mit SLA → Cloud',
            ],
          }
        },
        contextWindow: {
          title: 'Grenze 5: Kontextfenster — Lokal maximal 32K vs. Cloud 128K–200K',
          content: 'Ein Kontextfenster ist die Länge des Gedächtnisses eines Modells. Lokale Modelle unterstützen typischerweise 4K–32K Token (~ 8K–64K Wörter). Cloud APIs bieten 128K–200K Token. Das bedeutet: Lokal können Sie max 50–80 Seiten Text auf einmal verarbeiten; Cloud kann ganze Bücher (> 300 Seiten) auf einmal analysieren.'
        },
        whenContextMatters: {
          title: 'Wann ist großes Kontextfenster wichtig?',
          decisionBlock: {
            title: 'Wann ist großes Kontextfenster wichtig?',
            localIf: [
              'Ein Paper oder Kapitel (< 20 Seiten) auf einmal',
              'Kurze Chat-Sessions (< 10 Nachrichten)',
            ],
            cloudIf: [
              'Ganzes Buch/Langdokumentation in einer Query',
              'Chat mit langer Unterhaltungshistorie (> 20 Nachrichten)',
              'RAG-System mit großem Dokument-Set',
            ],
            quick: [
              'Kleine Dokumente → lokal OK',
              'Große Kontexte → Cloud',
            ],
          }
        },
        setup: {
          title: 'Grenze 4: Einrichtungszeit — 20–40 Minuten lokal vs. 5 Minuten Cloud',
          content: 'Lokales Setup braucht Zeit: Ollama installieren (3 Min), Modell herunterladen (5–60 Min je nach Größe), GPU konfigurieren (5–10 Min). Cloud APIs: Email-Anmeldung (1 Min), API-Key kopieren (1 Min), erster API-Call (3 Min). Cloud gewinnt deutlich.',
          image: '/images/local-llm-limitations-setup-time-de.svg'
        },
        whenSetupMatters: {
          title: 'Wann ist schnelle Einrichtung wichtig?',
          decisionBlock: {
            title: 'Wann ist schnelle Einrichtung wichtig?',
            localIf: [
              'Setup einmal, dann lange Nutzung',
              'Interne IT-Team kann Infrastruktur aufbauen',
            ],
            cloudIf: [
              'Sie wollen heute noch produktiv werden',
              'Rapid Prototyping / Hackathon',
              'Minimale IT-Infrastruktur',
            ],
            quick: [
              'Langzeit-Projekt → lokal OK',
              'Schneller Start → Cloud',
            ],
          }
        },
        regionalContext: {
          title: 'Lokale vs. Cloud nach Compliance-Anforderung',
          content: [
            '<strong>EU / Deutschland (DSGVO, BSI-Grundschutz):</strong> Lokale Inferenz erfüllt DSGVO Artikel 28 (Datenverarbeitung) besser — Daten bleiben in-country. Pflichten: Datenschutzerklärung aktualisieren, Datenfluss dokumentieren, ggf. TOM (technische und organisatorische Maßnahmen) nach BSI-Grundschutz implementieren. Cloud APIs: Möglich mit DPA (Datenverarbeitungsvertrag) und Auftragsverarbeiter-Zertifizierung (z.B. OpenAI EU).',
            '<strong>Japan / APAC (METI AI Governance 2024):</strong> Japan fördert lokale und föderierte Modelle für Datenhoheit. Lokale Inferenz empfohlen für regulierte Industrien (Finanzen, Gesundheit). Cloud APIs: Mit lokalen Cache/Edge-Computing akzeptabel.',
            '<strong>China (Datensicherheitsgesetz 2021 + CAC Restriktionen):</strong> Alle Verarbeitung personenbezogener Daten muss in China stattfinden (Alibaba Cloud, Tencent Cloud, Huawei Cloud). Lokale LLMs auf lokaler Hardware empfohlen. Cloud APIs: Nur mit lokalisiertem Partner (z.B. Qwen über Alibaba).'
          ]
        },
        whenCloud: {
          title: 'Beste Anwendungsfälle für Cloud APIs',
          items: [
            '<strong>Echtzeit-Chatbot:</strong> Nutzer erwartet < 2 Sekunden Antwort. Lokal: 5–10 Sekunden (4–10× langsamer). Cloud: 0,5–1 Sekunde (4–10× schneller).',
            '<strong>Hochvolumen-Batch:</strong> 1.000+ Dokumente/Tag. Lokale GPU wird Engpass; Cloud skaliert automatisch mit Parallelisierung.',
            '<strong>Code-Generierung:</strong> GPT-4o hat 90% Coding-Akuranz; lokale 7B nur 45–55%. Für Production-Code: Cloud.',
            '<strong>Lange Dokumente (100K+ Tokens):</strong> GPT-4o 128K Kontext; Llama 2 maximal 32K. Cloud besser für ganze Bücher, Papers.',
            '<strong>Zero-Wartung:</strong> Cloud = automatische Updates, Patches, Monitoring. Lokal = Ihre IT muss CUDA-Treiber, Firmware, Uptime verwalten.',
            '<strong>Hohe Verfügbarkeit:</strong> Cloud bietet 99,9% SLA; lokal = fragil (Absturz = Downtime).'
          ]
        },
        whenNotToUse: {
          title: 'Wann Sie KEINE lokalen Modelle verwenden sollten',
          content: [
            '<strong>❌ Nicht lokal für Produktion ohne SLA-Backup:</strong> Wenn Ihr Service Kundendaten behandelt und Downtime kostet. Lokale Hardware crasht; Cloud hat Redundanz.',
            '<strong>❌ Nicht lokal für komplexes Coding:</strong> Fehlerquote lokal 7B = 35–45%, GPT-4o = 10%. Für Production-Code zu riskant.',
            '<strong>❌ Nicht lokal ohne IT-Team:</strong> Wenn Du allein Developer bist und keine Zeit für GPU-Setup / CUDA-Probleme. Cloud API ist schneller zum Produktiv-Status.',
            '<strong>❌ Nicht lokal wenn schnell > privat:</strong> Echtzeit-Chat braucht Cloud-Geschwindigkeit. Datenschutz kann kompromissen werden (mit DPA) wenn Performance kritisch ist.',
            '<strong>❌ Nicht lokal für > 30 gleichzeitige Nutzer:</strong> Eine Single GPU ist Engpass. Cloud skaliert horizontal (kosten, aber funktioniert). Lokal = Infrastruktur-Mega-Projekt.'
          ]
        },
        bestChoice: {
          title: 'Beste lokale LLMs nach Anwendungsfall',
          content: 'Für alle Anwendungsfälle: <strong>Verwenden Sie Ollama oder LM Studio</strong> (beide kostenlos, unterstützen identische Modelle).',
          columns: ['Anwendungsfall', '16 GB RAM', '40+ GB RAM', 'Empfehlung'],
          rows: [
            { 'Anwendungsfall': 'Allgemeines Wissen / Q&A', '16 GB RAM': 'Llama 2 13B', '40+ GB RAM': 'Llama 3.3 70B', 'Empfehlung': 'Lokal OK, oder Cloud für bessere Qualität' },
            { 'Anwendungsfall': 'Code-Assistent', '16 GB RAM': 'Mistral 7B', '40+ GB RAM': 'Codellama 34B', 'Empfehlung': 'Cloud besser (GPT-4o 90% Akuranz vs. 50%)' },
            { 'Anwendungsfall': 'Textgenerierung / Schreiben', '16 GB RAM': 'Mistral 7B, Qwen 7B', '40+ GB RAM': 'Llama 3.3 70B, Qwen 72B', 'Empfehlung': 'Lokal OK' },
            { 'Anwendungsfall': 'Datenschutz-kritische Verarbeitung', '16 GB RAM': 'Llama 2 13B (DSGVO OK)', '40+ GB RAM': 'Llama 3.3 70B (beste Qualität)', 'Empfehlung': 'Lokal empfohlen (privat + DSGVO konform)' },
            { 'Anwendungsfall': 'Chat-Assistenz (Echtzeit)', '16 GB RAM': 'Nicht empfohlen (zu langsam)', '40+ GB RAM': 'GPU erforderlich (RTX 4090)', 'Empfehlung': 'Cloud (GPT-4o, Claude) — 4–10× schneller' },
            { 'Anwendungsfall': 'Batch-Analyse (100+ Docs)', '16 GB RAM': 'Lokal ist OK, dauert Stunden', '40+ GB RAM': 'Lokal besser als Cloud (kein Kosten)', 'Empfehlung': 'Nachts lokal laufen lassen' }
          ]
        },
        quickFacts: {
          title: 'Schnellübersicht: Lokal vs. Cloud',
          columns: ['Kriterium', 'Lokal (Ollama/LM Studio)', 'Cloud (OpenAI/Anthropic)'],
          rows: [
            { 'Kriterium': 'Geschwindigkeit', 'Lokal (Ollama/LM Studio)': '10–160 Token/s (CPU/GPU)', 'Cloud (OpenAI/Anthropic)': '80–150 Token/s' },
            { 'Kriterium': 'Qualität (Benchmarks)', 'Lokal (Ollama/LM Studio)': '7B: 62–68% MMLU; 70B: 75–80%', 'Cloud (OpenAI/Anthropic)': 'GPT-4o: 88,7% MMLU' },
            { 'Kriterium': 'Hardware', 'Lokal (Ollama/LM Studio)': '16–40 GB RAM oder GPU', 'Cloud (OpenAI/Anthropic)': 'Keine Hardware nötig' },
            { 'Kriterium': 'Einrichtungszeit', 'Lokal (Ollama/LM Studio)': '20–40 Minuten', 'Cloud (OpenAI/Anthropic)': '5 Minuten' },
            { 'Kriterium': 'Datenschutz', 'Lokal (Ollama/LM Studio)': '100% privat (DSGVO-OK)', 'Cloud (OpenAI/Anthropic)': 'DPA erforderlich' },
            { 'Kriterium': 'Verfügbarkeit', 'Lokal (Ollama/LM Studio)': 'Keine SLA (fragil)', 'Cloud (OpenAI/Anthropic)': '99,9% SLA' },
            { 'Kriterium': 'Kosten', 'Lokal (Ollama/LM Studio)': 'GPU 2.310 €+ (einmalig)', 'Cloud (OpenAI/Anthropic)': '$0,01–0,10 pro 1K Token' },
            { 'Kriterium': 'Kontextfenster', 'Lokal (Ollama/LM Studio)': '4K–32K Token', 'Cloud (OpenAI/Anthropic)': '128K–200K Token' }
          ]
        },
        faqSection: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Sind lokale LLMs langsamer als Cloud APIs?',
              a: 'Ja, deutlich. CPU-Inferenz = 10–25 Token/s, Cloud = 80–150 Token/s. Für Echtzeit-Chat ist lokal zu langsam. Für Batch-Verarbeitung ist lokal OK.'
            },
            {
              q: 'Kann ich ein 70B-Modell auf meinem Laptop ausführen?',
              a: 'Nein. 70B-Modelle benötigen mindestens 40 GB RAM/VRAM. Ein typischer Laptop mit 16 GB kann maximal 13B-Modelle mit Quantisierung ausführen.'
            },
            {
              q: 'Welche lokalen Modelle sind am besten?',
              a: 'Llama 2 13B oder Mistral 7B für 16 GB RAM (≈ GPT-3.5). Llama 3.3 70B für 40 GB RAM (≈ GPT-4). Für beste Qualität: Cloud APIs (GPT-4o, Claude).'
            },
            {
              q: 'Kann ich lokal offline arbeiten?',
              a: 'Ja, das ist der Hauptvorteil. Nach Download läuft alles lokal ohne Internet. Cloud APIs brauchen immer Netzwerk.'
            },
            {
              q: 'Was ist das maximale Kontextfenster lokal?',
              a: 'Typischerweise 4K–32K Token. Cloud APIs bieten 128K–200K (GPT-4o, Claude). Für lange Dokumente ist Cloud besser.'
            },
            {
              q: 'Benötige ich eine GPU für lokale LLMs?',
              a: 'Nein, aber stark empfohlen. CPU = 10–25 Token/s (sehr langsam). GPU = 50–160 Token/s (nutzbar). Ohne GPU ist Echtzeit-Chat nicht praktikabel.'
            },
            {
              q: 'Was kostet ein lokales Modell?',
              a: 'Download kostenlos, Hardware teuer (2.310 €+ für GPU). Cloud: $0,01–0,10 pro 1.000 Token. Für kleine bis mittlere Volumen ist Cloud günstiger.'
            },
            {
              q: 'Ollama oder LM Studio?',
              a: 'Ollama = CLI, schneller, für Automation. LM Studio = GUI, für Anfänger. Beide führen dieselben Modelle aus.'
            },
            {
              q: 'Kann ich GPT-4o lokal ausführen?',
              a: 'Nein, OpenAI gibt Gewichte nicht frei. Lokale Alternativen (Llama 70B, Qwen 72B) sind ähnlich gut, aber nicht identisch.'
            },
            {
              q: 'Wie lange dauert das Setup eines lokalen Modells?',
              a: '20–40 Minuten (Ollama install + Model download + GPU config). Cloud: 5 Minuten. Cloud ist schneller zum Einstieg.'
            },
            {
              q: 'Soll ich ein lokales LLM oder eine Cloud API verwenden?',
              a: 'Lokales LLM, wenn Datenschutz kritisch ist. Cloud, wenn Geschwindigkeit oder aktuelle Informationen kritisch sind. Unsicher? Testen Sie beide mit PromptQuorum — senden Sie einen Prompt gleichzeitig an lokales Ollama und 25+ Cloud-Modelle, um die Qualität für Ihre spezifische Aufgabe zu vergleichen.'
            },
            {
              q: 'Ist lokales LLM schneller als Cloud API?',
              a: 'Nein. Cloud APIs erzeugen 80–150 Token/s. Lokale LLMs auf CPU erzeugen 10–25 Token/s — 4–10× langsamer. GPU hilft: NVIDIA RTX 4090 erreicht 130–160 Token/s, entspricht Cloud, kostet aber 2.310 €+.'
            },
            {
              q: 'Ist lokales LLM günstiger als Cloud?',
              a: 'Hängt von der Nutzung ab. Lokal kostet 900–2.200 € Hardware-Vorlauf. Cloud kostet $5–50/Monat. Für leichte Nutzer (<100.000 Token/Monat) ist Cloud günstiger. Für schwere Nutzer (>10 Mio. Token/Monat) amortisiert sich lokal in 6–12 Monaten.'
            },
            {
              q: 'Wann sollte ich lokales LLM statt Cloud verwenden?',
              a: 'Lokal verwenden wenn: Datenschutz kritisch (keine Daten verlassen das Gerät), ausreichend Hardware (16+ GB RAM oder 40+ GB für 70B), keine Echtzeitinformationen benötigt, und Setup-Komplexität akzeptabel. Cloud verwenden wenn: Geschwindigkeit kritisch, Echtzeit-Datenzugriff nötig, Hardware limitiert (<8 GB RAM), oder Frontier-Level-Reasoning benötigt.'
            },
            {
              q: 'Was sind die Hauptbeschränkungen von lokalen LLMs?',
              a: 'Sechs Hauptbeschränkungen: (1) Niedrigere Qualität bei komplexem Reasoning vs. Frontier-Cloud-Modelle, (2) 4–10× langsamere Inferenz auf Consumer-Hardware, (3) Hohe Hardware-Anforderungen (900–2.200 € Vorlauf), (4) Kein Zugriff auf Echtzeitinformation (Training-Cutoff), (5) Setup-Komplexität (20–40 Minuten vs. 5 Minuten Cloud), (6) Begrenztes Kontextfenster (4K–128K Token lokal vs. 1M+ in Cloud).'
            }
          ]
        },
        sources: {
          title: 'Quellen und Referenzen',
          items: [
            '[Ollama — Download & Installation](https://ollama.ai)',
            '[LM Studio — GUI für lokale LLMs](https://lmstudio.ai)',
            '[Llama 2 Model Card (Meta)](https://huggingface.co/meta-llama/Llama-2-70b)',
            '[HumanEval Benchmarks (OpenAI)](https://github.com/openai/human-eval)',
            '[MMLU Benchmark (AI2)](https://github.com/jair-bolt/mmlu)',
            '[OpenAI GPT-4o Technischer Report](https://openai.com/research/gpt-4)',
            '[Anthropic Claude 3.5 Model Card](https://www.anthropic.com/)',
            '[BSI-Grundschutz-Kataloge (Deutsches Bundesamt für Sicherheit)](https://www.bsi.bund.de)',
            '[DSGVO Compliance Guide für KI-Systeme (EU Parlament)](https://www.europarl.europa.eu)',
            '[China Data Security Law 2021 (CAC)](https://www.cac.gov.cn)'
          ]
        },
        commonMistakes: {
          title: 'Häufige Fehler bei lokalen LLMs',
          numberedItems: [
            '<strong>Falsche Quantisierung wählen:</strong> Q8 oder Q6 brauchen zu viel RAM. Verwenden Sie Q4_K_M (beste Balance) oder Q3_K_M (für < 16 GB).',
            '<strong>Zu kleine Modelle:</strong> 3B-Modelle sind praktisch nutzlos. Minimum: 7B. Besser: 13B.',
            '<strong>Keine GPU-Beschleunigung:</strong> CPU-Inferenz ist 50× langsamer. Selbst eine billige RTX 4060 lohnt sich.',
            '<strong>Anfangslatenzen ignorieren:</strong> Erstes Token braucht 2–5 Sekunden (Token Startup-Zeit). Nach dem ersten Token geht es schneller.',
            '<strong>Zu großes Kontextfenster:</strong> 32K Kontextfenster = 8× mehr Speicher. Starten Sie bei 4K–8K.',
            '<strong>Keine Docker/Containerisierung:</strong> Ollama mit Docker ist tragbar und wartbar. Native Installation = Treiber-Chaos.',
          ]
        },
        relatedReading: {
          title: 'Verwandte Artikel',
          items: [
            '[Wie viel VRAM brauche ich für lokale LLMs? (Hardware-Guide)](/local-llms/how-much-vram-local-llm?lang=de)',
            '[Ollama installieren: Schritt-für-Schritt-Anleitung](/local-llms/how-to-install-ollama?lang=de)',
            '[LM Studio vs. Ollama: Welches ist besser?](/local-llms/lm-studio-vs-ollama?lang=de)',
            '[Die besten lokalen Modelle 2026 im Vergleich](/local-llms/best-local-llm-models?lang=de)',
            '[Prompt Engineering für lokale LLMs (Techniken & Tricks)](/prompt-engineering/prompt-engineering-local-llms?lang=de)'
          ]
        }
      }
    },
    fr: {
      theme: 'Débuter',
      title: 'LLM Local vs API Cloud : Quand utiliser lequel (Comparatif 2026)',
      seoTitle: 'LLM Local vs Cloud : Gratuité vs Vitesse 2026',
      intro: 'Les LLMs locaux offrent la confidentialité et le contrôle, mais présentent des lacunes de performance considérables. Découvrez les 6 limitations critiques des modèles locaux — et quand utiliser Cloud APIs à la place.',
      metaDescription: 'Local = données 100% privées, 0 € par token, 10x plus lent. Cloud = 50–150 tokens/s, 0,01–0,05 € par 1K tokens, accès web. Tableau comparatif complet + guide décisionnel. Avril 2026.',
      twitterDescription: 'LLM local : données privées, gratuit, mais 10x plus lent. Cloud : rapide + intelligent, coûte de l\'argent. Comparaison par cas d\'usage. Avril 2026.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Les LLMs locaux ne peuvent pas égaler les modèles cloud frontier en raisonnement, vitesse et accès aux données en temps réel en raison des limites matérielles et des contraintes d\'entraînement.** Ils conviennent mieux aux tâches privées, hors ligne et sensibles au coût, mais pas pour les applications haute précision ou temps réel.',
      audience: 'Développeurs et directeurs IT de PME devant choisir entre LLMs locaux et Cloud APIs',
      readTime: '7 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'limitations des LLMs locaux',
      toc: [
        { label: 'En une phrase', anchor: '#in-one-sentence' },
        { label: 'En termes simples', anchor: '#in-plain-terms' },
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Décision rapide : local vs cloud', anchor: '#quick-decision' },
        { label: 'Limitation 1 : vitesse', anchor: '#speed-limitations' },
        { label: 'Limitation 2 : qualité', anchor: '#quality-limitations' },
        { label: 'Limitation 3 : matériel', anchor: '#hardware-requirements' },
        { label: 'Limitation 4 : temps de configuration', anchor: '#setup-time' },
        { label: 'Limitation 5 : fenêtre de contexte', anchor: '#context-window' },
        { label: 'Limitation 6 : pas de garanties temps réel', anchor: '#no-realtime-guarantees' },
        { label: 'Quand NE PAS utiliser les LLMs locaux', anchor: '#when-not-to-use' },
        { label: 'Meilleur LLM local par cas d\'usage', anchor: '#best-choice' },
        { label: 'Synthèse rapide', anchor: '#quick-facts' },
        { label: 'Questions fréquemment posées', anchor: '#faqs' },
        { label: 'Sources et références', anchor: '#sources' }
      ],
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Limitations des LLMs locaux : ce que les modèles locaux ne peuvent pas faire (et quand privilégier le cloud)',
        description: 'LLMs locaux vs cloud : 6 limitations (vitesse, qualité, matériel). Arbre décisionnel pour PME et entreprises. Benchmarks + comparaison de coûts.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/local-llm-limitations?lang=fr',
        inLanguage: 'fr',
        about: [
          { '@type': 'Thing', 'name': 'LLMs locaux' },
          { '@type': 'Thing', 'name': 'Cloud APIs' },
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' }
        ],
        mentions: [
          { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
          { '@type': 'SoftwareApplication', 'name': 'Claude 3.5 Sonnet (2024)' },
          { '@type': 'Thing', 'name': 'Llama 2' },
          { '@type': 'Thing', 'name': 'Mistral' }
        ],
        author: {
          '@type': 'Person',
          'name': 'Hans Kuepper'
        },
        publisher: {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Les LLMs locaux sont-ils plus lents que les Cloud APIs ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, considérablement. L\'inférence CPU génère 10–25 tokens par seconde, tandis que les Cloud APIs (GPT-4o) en génèrent 80–150. Même avec GPU (RTX 4090), vous n\'atteindrez que 130–160 tokens/s. Cloud est 4–10 fois plus rapide pour les applications temps réel.'
            }
          },
          {
            '@type': 'Question',
            name: 'Puis-je exécuter un modèle 70B sur mon portable ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Les modèles 70B exigent au minimum 40 GB RAM ou VRAM. Un portable typique avec 16 GB peut exécuter au maximum un modèle 13B comprimé. Pour les 70B, vous avez besoin d\'un Mac Studio, d\'une station de travail ou d\'une configuration multi-GPU (coût : 3.000 $+).'
            }
          },
          {
            '@type': 'Question',
            name: 'Quels sont les meilleurs LLMs locaux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour 16 GB RAM : Llama 2 13B ou Mistral 7B (qualité ≈ GPT-3.5). Pour 40 GB RAM : Llama 3.3 70B ou Qwen 72B (qualité ≈ GPT-4). Utilisez la quantification Q4_K_M pour une efficacité optimale. Pour la meilleure qualité : Cloud APIs (GPT-4o, Claude 3.5 Sonnet (2024)).'
            }
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser un modèle local hors ligne ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, c\'est l\'avantage principal. Après le téléchargement, tout fonctionne localement — pas d\'Internet requis. Cloud APIs nécessitent toujours une connexion réseau, mais offrent mises à jour automatiques et garanties de disponibilité.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quelle est la fenêtre de contexte maximale pour les LLMs locaux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La plupart des modèles locaux supportent 4K–32K tokens de contexte. Llama 2 a 4K par défaut, mais peut être étendu à 32K. Les Cloud APIs offrent bien plus : GPT-4o = 128K, Claude 3.5 Sonnet (2024) = 200K. Pour les gros documents, Cloud est mieux.'
            }
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin d\'un GPU pour les LLMs locaux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, mais vivement recommandé. L\'inférence CPU est 10–50 fois plus lente. Avec un GPU (RTX 4090, RTX 4070), vous atteignez 50–160 tokens/s. Sans GPU (CPU pur) : 10–25 tokens/s, impraticable pour le chat en temps réel.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quel est le coût d\'un LLM local ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Téléchargement gratuit et exécution gratuite (Ollama est gratuit). Matériel coûteux : GPU (RTX 4090) = 2 310 €+, Mac Studio = 2 095 €+. Cloud APIs : 0.01–0.10 $ par 1.000 tokens. Pour volumes petits à moyens, Cloud est moins cher.'
            }
          },
          {
            '@type': 'Question',
            name: 'Dois-je utiliser Ollama ou LM Studio ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ollama est basé CLI, plus rapide, plus facile à automatiser. LM Studio a une GUI, mieux pour les débutants. Pour production et APIs : Ollama. Pour expérimentation exploratoire : LM Studio. Les deux exécutent les mêmes modèles (Llama, Mistral, Qwen).'
            }
          },
          {
            '@type': 'Question',
            name: 'Puis-je exécuter GPT-4o localement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, OpenAI ne fournit pas les poids GPT-4o. Vous ne pouvez utiliser GPT-4o que via l\'API OpenAI. Il existe des alternatives open-source locales (Llama 3.3 70B, Qwen 72B) offrant qualité similaire (mais non identique). Pour qualité GPT-4o garantie : Cloud API.'
            }
          },
          {
            '@type': 'Question',
            name: 'Combien de temps prend la configuration d\'un LLM local ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Temps total : 20–40 minutes. (1) Installer Ollama/LM Studio : 2–3 min. (2) Télécharger modèle 7B (4 GB) : 5–10 min. (3) Configurer GPU (optionnel, CUDA/Metal) : 5–10 min. Cloud APIs : 5 minutes de début à premier appel API.'
            }
          },
          {
            '@type': 'Question',
            name: 'Dois-je utiliser un LLM local ou une Cloud API ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Local si la confidentialité est critique. Cloud si la vitesse ou les données en temps réel sont critiques. Incertain ? Testez les deux avec PromptQuorum — envoyez un prompt à votre Ollama local et 25+ modèles cloud simultanément pour comparer la qualité sur votre tâche spécifique.'
            }
          },
          {
            '@type': 'Question',
            name: 'Un LLM local est-il plus rapide qu\'une Cloud API ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Les APIs cloud génèrent 80–150 tokens/s. Les LLMs locaux sur CPU génèrent 10–25 tokens/s — 4–10× plus lents. Le GPU aide : NVIDIA RTX 4090 atteint 130–160 tokens/s, égale le cloud, mais coûte 2 310 €+.'
            }
          },
          {
            '@type': 'Question',
            name: 'Un LLM local est-il moins cher que le cloud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cela dépend de l\'utilisation. Local coûte 900–2 200 € matériel initial. Cloud coûte $5–50/mois. Pour les utilisateurs légers (<100K tokens/mois), cloud est moins cher. Pour les utilisateurs intensifs (>10M tokens/mois), local s\'amortit en 6–12 mois.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quand devrais-je utiliser un LLM local au lieu du cloud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilisez local quand : la confidentialité est critique (les données ne quittent jamais l\'appareil), vous avez du matériel adéquat (16+ GB RAM ou 40+ GB pour 70B), vous n\'avez pas besoin d\'information en temps réel, et la complexité de configuration est acceptable. Utilisez cloud quand : la vitesse est critique, l\'accès aux données en temps réel est nécessaire, le matériel est limité (<8 GB RAM), ou vous avez besoin de raisonnement frontier-level.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quelles sont les principales limitations des LLMs locaux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Six limitations principales : (1) Qualité inférieure en raisonnement complexe vs modèles cloud frontier, (2) Inférence 4–10× plus lente sur matériel client, (3) Exigences matérielles élevées (900–2.200 € initial), (4) Pas d\'accès aux informations en temps réel (date de coupure d\'entraînement), (5) Complexité de configuration (20–40 minutes vs 5 minutes cloud), (6) Fenêtre de contexte limitée (4K–128K tokens local vs 1M+ en cloud).'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Quand vous devez utiliser Cloud APIs',
        inLanguage: 'fr',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Chatbot temps réel',
            description: 'Les utilisateurs s\'attendent à < 2 secondes. Cloud APIs livrent 4–10 fois plus vite.'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Traitement batch haut volume',
            description: '1.000+ documents par jour. Cloud APIs échelonnent automatiquement ; GPU local devient vite goulot.'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Production avec exigence SLA',
            description: 'Disponibilité 99.9%+. Cloud APIs garantissent SLA ; matériel local nécessite redondance (coûteux).'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Meilleure qualité de sortie (code, analyse)',
            description: 'GPT-4o et Claude 3.5 Sonnet (2024) surpassent modèles locaux de 10–20 points en benchmarks.'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Longues fenêtres de contexte',
            description: '100K+ tokens. Cloud APIs (GPT-4o 128K, Claude 200K) traitent gros documents ; local limité 4K–32K.'
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Zéro maintenance IT',
            description: 'Cloud APIs = maintenance zéro, mises à jour auto. Modèles locaux nécessitent gestion drivers CUDA, patches firmware, monitoring.'
          }
        ]
      },
      gammaEmbedUrl: '/presentations/local-llm-limitations-static.html',
      gammaDescription: 'Présentation interactive 14 diapositives : les 6 limitations des LLMs locaux, exigences matériel (8–40 GB RAM), comparaison vitesse (10–25 tokens/s CPU vs. 80–150 tokens/s cloud), écart qualité (benchmarks MMLU, HumanEval), temps de configuration (20–40 min local vs. 5 min cloud), arbre décisionnel (local vs. cloud). Avec fonction impression pour télécharger en PDF.',
      sections: {
        inOneSentence: {
          title: 'En une phrase',
          content: 'Les LLMs locaux offrent la confidentialité mais sont 4–10 fois plus lents, exigent 16 GB minimum et offrent qualité inférieure à Cloud APIs — utilisez-les seulement pour scénarios hors ligne ou traitement batch non urgent.'
        },
        inPlainTerms: {
          title: 'En termes simples',
          content: [
            '<strong>LLMs locaux :</strong> Vous téléchargez un modèle de langage sur votre ordinateur (Ollama, LM Studio). Toutes les données restent privées. Inconvénients : lent, intelligence limitée, installation complexe.',
            '<strong>Cloud APIs (GPT-4o, Claude) :</strong> Vous envoyez du texte à un serveur distant, obtenez réponse en < 1 sec. Rapide et intelligent, mais coûte argent (~0.01 $ par 1.000 caractères).',
            '<strong>Décision :</strong> Local pour confidentialité & usage hors ligne. Cloud pour vitesse & qualité.'
          ]
        },
        tldr: {
          isTldr: true,
          title: 'Points clés',
          content: [
            '✓ Modèles locaux 4–10 fois plus lents (CPU : 10–25 tokens/s vs. cloud : 80–150 tokens/s).',
            '✓ Écart qualité : modèles 7B scored 10–20 points sous GPT-4o en benchmarks MMLU et HumanEval.',
            '✓ Exigence matériel : minimum 16 GB RAM pour usage pratique ; 40 GB pour meilleure qualité (modèles 70B).',
            '✓ Temps de configuration : 20–40 minutes local (téléchargement + config) ; cloud APIs prêtes en 5 minutes.',
            '✓ Fenêtre de contexte : local 4K–32K ; cloud 128K–200K (GPT-4o, Claude). Cloud mieux pour gros documents.',
            '✓ Meilleurs cas d\'usage local : tâches sensibles données, scénarios hors ligne, traitement batch non urgent.',
            '✓ Meilleurs cas d\'usage cloud : chat temps réel, batch haut volume, production avec SLA, meilleure qualité.'
          ]
        },
        quickDecision: {
          title: 'Décision rapide : local ou cloud ?',
          content: [
            '<strong>Utilisez LOCAL si :</strong>',
            '• Vous ne pouvez pas envoyer données à serveurs distants (confidentialité, RGPD).',
            '• Vous devez travailler hors ligne (pas Internet).',
            '• Vous priorisez sécurité sur vitesse.',
            '• Votre cas n\'est pas urgent (analyses batch, traitement documents).',
            '',
            '<strong>Utilisez CLOUD si :</strong>',
            '• Performance temps réel est critique (chat, analyse live).',
            '• Vous avez besoin meilleure qualité (code, raisonnement complexe).',
            '• Vous traitez volume haut (1.000+ docs/jour).',
            '• Vous ne voulez pas gérer infrastructure (zéro maintenance).',
            '• Vous avez besoin longues fenêtres contexte (100K+ tokens).'
          ]
        },
        quickDecisionMatrix: {
          id: 'decision-matrix',
          title: 'Matrice de décision rapide : LLM local vs API cloud',
          columns: ['Tâche', 'LLM local', 'API cloud', 'Gagnant'],
          rows: [
            { 'Tâche': 'Données sensibles confidentialité', 'LLM local': 'Données ne quittent pas l\'appareil', 'API cloud': 'Envoyées serveur distant (DPA requis)', 'Gagnant': '✅ Local' },
            { 'Tâche': 'Chat temps réel (< 2 sec)', 'LLM local': '5–10 sec (CPU)', 'API cloud': '0.5–1 sec', 'Gagnant': '✅ Cloud' },
            { 'Tâche': 'Génération code', 'LLM local': '45–55% HumanEval (7B)', 'API cloud': '90% HumanEval (GPT-4o)', 'Gagnant': '✅ Cloud' },
            { 'Tâche': 'Résumé documents', 'LLM local': 'Capable (7B suffisant)', 'API cloud': 'Capable + plus rapide', 'Gagnant': '⚖️ Soit' },
            { 'Tâche': 'Coût API zéro', 'LLM local': '$0/token (après hardware)', 'API cloud': '$0.01–0.05 par 1K tokens', 'Gagnant': '✅ Local (volume élevé)' },
            { 'Tâche': 'Offline / pas Internet', 'LLM local': 'Complètement offline', 'API cloud': 'Nécessite Internet', 'Gagnant': '✅ Local' },
            { 'Tâche': 'Grand contexte (100K+ tokens)', 'LLM local': '4K–32K tokens max', 'API cloud': '128K–200K tokens', 'Gagnant': '✅ Cloud' },
            { 'Tâche': 'SLA production (99.9%)', 'LLM local': 'Pas SLA (hardware risqué)', 'API cloud': '99.9% temps disponible garanti', 'Gagnant': '✅ Cloud' },
          ],
        },
        decisionFlowchart: {
          id: 'decision-flowchart',
          title: 'Arbre de décision 30 secondes',
          content: [
            '**Q1 : la confidentialité données est-elle critique (légal, médical, confidentiel) ?**',
            '- ✓ OUI → **Utilisez local.** Confidentialité est l\'avantage principal.',
            '- ✗ NON → Question suivante.',
            '',
            '**Q2 : Vous besoin informations temps réel (news, prix, événements courants) ?**',
            '- ✓ OUI → **Utilisez cloud.** Modèles locaux ont date limite entraînement.',
            '- ✗ NON → Question suivante.',
            '',
            '**Q3 : Vous pouvez vous permettre 40+ GB RAM ou 2 310 €+ GPU ?**',
            '- ✓ OUI → **Utilisez local 70B.** Qualité égale cloud, zéro coûts continus.',
            '- ✗ NON → **Utilisez cloud.** Plus pratique que local faible.',
            '',
            '**Q4 : Toujours incertain ?** [Testez les deux avec PromptQuorum](/?lang=fr).',
          ],
        },
        promptquorumCta: {
          id: 'test-both',
          title: 'Toujours indécis ? Testez avant de vous engager',
          content: [
            'Si vous êtes déchiré entre local et cloud pour votre tâche spécifique, utilisez [PromptQuorum gratuitement](/?lang=fr) pour:',
          ],
          items: [
            'Envoyer un prompt à la fois à votre Ollama local ET 25+ modèles cloud',
            'Comparer qualité output côte-à-côte',
            'Voir vraies différences vitesse, coût, qualité sur VOS données',
            'Décider avec résultats réels, pas théorie',
          ],
        },
        qualityGap: {
          title: 'Limitation 2 : écart de qualité — modèles locaux n\'atteignent pas GPT-4o',
          content: ['Modèles locaux 7B score 10–20 points sous GPT-4o sur benchmarks standard (MMLU, HumanEval). Cela semble peu, mais en pratique : raisonnement plus faible, erreurs plus fréquentes code et maths, compréhension moins nuancée.', 'Les limitations des modèles locaux recoupent les contraintes générales des LLM — hallucinations, échecs de raisonnement et coupures de connaissances affectent tous les modèles quel que soit le déploiement. Pour le tableau complet de ce que les LLM ne peuvent toujours pas faire de manière fiable, voir [limites de l\'IA : ce que les LLM ne peuvent pas faire](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do).'],
          image: '/images/local-llm-limitations-quality-benchmarks-fr.svg',
          columns: ['Modèle', 'MMLU (connaissance générale)', 'HumanEval (code Python)'],
          rows: [
            { 'Modèle': 'Local 7B', 'MMLU (connaissance générale)': '62–68%', 'HumanEval (code Python)': '45–55%' },
            { 'Modèle': 'Local 70B', 'MMLU (connaissance générale)': '75–80%', 'HumanEval (code Python)': '65–75%' },
            { 'Modèle': 'GPT-4o', 'MMLU (connaissance générale)': '88.7%', 'HumanEval (code Python)': '90.2%' }
          ]
        },
        whenQualityMatters: {
          title: 'Quand la qualité compte vraiment ?',
          decisionBlock: {
            title: 'Quand la qualité compte vraiment ?',
            localIf: [
              'Vous avez besoin résumés texte (robuste)',
              'Analyse sentiment suffisante (même 7B fiable)',
            ],
            cloudIf: [
              'Génération code & débogage (taux erreur local 7B : 35–45% vs. GPT-4o 10%)',
              'Analyse financière ou médicale (erreurs coûtent cher)',
              'Raisonnement complexe sur 3+ étapes',
            ],
            quick: [
              'Tâches simples → local OK',
              'Tâches complexes → Cloud',
            ],
          }
        },
        speed: {
          title: 'Limitation 1 : vitesse — CPU local 4–10 fois plus lent',
          content: 'C\'est la plus grande limitation pratique. CPUs locaux génèrent 10–25 tokens par sec. Cloud APIs livrent 80–150 tokens/s. Pour utilisateurs : local = plusieurs secondes attente par réponse ; cloud = réponse immédiate < 1 sec.',
          image: '/images/local-llm-limitations-speed-comparison-fr.svg'
        },
        whenSpeedMatters: {
          title: 'Quand la vitesse compte ?',
          decisionBlock: {
            title: 'Quand la vitesse compte ?',
            localIf: [
              'Vous faites chat interactif et tolérez 10–25 tokens/s',
              'Confidentialité prime sur latence',
            ],
            cloudIf: [
              'Vous traitez gros batches (100+ documents)',
              'Vous avez besoin réponses < 1 sec constamment',
            ],
            quick: [
              'Interactif → local OK',
              'Haut débit → Cloud',
            ],
          }
        },
        hardware: {
          title: 'Limitation 3 : matériel — 16–40 GB RAM minimum',
          content: 'Modèles locaux exigent RAM. Quantisation 7B (Q4_K_M) needs ~4 GB ; 70B en needs ~40 GB. Ajoutez OS, mémoire système, fenêtre contexte = minimum 16 GB RAM est pratique. C\'est cher (GPU : 2 310 €+, Mac Studio : 2 499 €+).',
          image: '/images/local-llm-limitations-hardware-requirements-fr.svg'
        },
        whenHardwareMatters: {
          title: 'Quand matériel est limitant ?',
          decisionBlock: {
            title: 'Quand matériel est limitant ?',
            localIf: [
              'Vous avez 16+ GB RAM',
              'Vous travaillez avec modèles 7B–13B',
            ],
            cloudIf: [
              'Vous avez seulement 8 GB RAM (portable)',
              'Vous voulez > modèles 13B (besoin : 24–40 GB)',
              'Vous servez > 30 utilisateurs simultanés (scale seulement multi-GPU)',
            ],
            quick: [
              'Matériel mid-range → local OK',
              'Matériel limité → Cloud',
            ],
          }
        },
        noInternet: {
          title: 'Limitation 6 : pas de garanties temps réel — local est fragile',
          content: 'LLMs locaux ne garantissent pas uptime. Si portable freeze, Ollama crash ou driver CUDA fail : aucune aide, juste downtime. Cloud APIs (OpenAI, Anthropic) garantissent 99.9% disponibilité (SLA). Pour production = cloud mieux.'
        },
        whenRealtimeMatters: {
          title: 'Quand disponibilité critique ?',
          decisionBlock: {
            title: 'Quand disponibilité critique ?',
            localIf: [
              'Outils internes pour 5–10 utilisateurs',
              'Expérimentation & développement',
            ],
            cloudIf: [
              'Application production avec dépendance client',
              'Transactions financières ou apps médical',
              'Haute disponibilité requise (downtime coûte)',
            ],
            quick: [
              'Interne-only → local OK',
              'Production avec SLA → Cloud',
            ],
          }
        },
        contextWindow: {
          title: 'Limitation 5 : fenêtre contexte — local max 32K vs. cloud 128K–200K',
          content: 'Fenêtre contexte = durée mémoire du modèle. Modèles locaux supportent typiquement 4K–32K tokens (~ 8K–64K mots). Cloud APIs offrent 128K–200K tokens. Cela signifie : local peut traiter max 50–80 pages texte simultanément ; cloud peut analyser livres entiers (> 300 pages) en une seule query.'
        },
        whenContextMatters: {
          title: 'Quand grande fenêtre contexte importante ?',
          decisionBlock: {
            title: 'Quand grande fenêtre contexte importante ?',
            localIf: [
              'Un paper ou chapitre (< 20 pages) à la fois',
              'Chat sessions courtes (< 10 messages)',
            ],
            cloudIf: [
              'Livre entier/documentation longue analyser en une query',
              'Chat avec longue historique conversation (> 20 messages)',
              'Système RAG avec gros ensemble documents',
            ],
            quick: [
              'Petit documents → local OK',
              'Grands contextes → Cloud',
            ],
          }
        },
        setup: {
          title: 'Limitation 4 : temps config — 20–40 min local vs. 5 min cloud',
          content: 'Setup local prend temps : installer Ollama (3 min), télécharger modèle (5–60 min selon taille), configurer GPU (5–10 min). Cloud APIs : email signup (1 min), copier API key (1 min), premier appel API (3 min). Cloud gagne nettement.',
          image: '/images/local-llm-limitations-setup-time-fr.svg'
        },
        whenSetupMatters: {
          title: 'Quand setup rapide important ?',
          decisionBlock: {
            title: 'Quand setup rapide important ?',
            localIf: [
              'Setup une fois, puis usage long terme',
              'Équipe IT interne peut construire infrastructure',
            ],
            cloudIf: [
              'Vous voulez être productif aujourd\'hui',
              'Prototypage rapide / hackathon',
              'Infrastructure IT minimale',
            ],
            quick: [
              'Projet long terme → local OK',
              'Début rapide → Cloud',
            ],
          }
        },
        regionalContext: {
          title: 'Local vs. cloud par exigence conformité',
          content: [
            '<strong>EU / France (RGPD, recommandations CNIL) :</strong> Inférence locale mieux répond RGPD article 28 (traitement données) — données restent in-country. Obligations : mettre à jour politique confidentialité, documenter flux données, possiblement implémenter TOM (mesures techniques et organisationnelles). Cloud APIs : possible avec DPA (accord traitement données) et certification sous-traitant. CNIL recommande inférence locale pour traitement données sensibles professionnelles (financières, médicales, juridiques).',
            '<strong>APAC / Japon (METI AI Governance 2024) :</strong> Japon promeut modèles locaux et fédérés pour data sovereignty. Inférence locale recommandée pour industries régulées (finance, santé). Cloud APIs : acceptable avec caching local/edge-computing.',
            '<strong>Chine (Data Security Law 2021 + restrictions CAC) :</strong> Tout traitement données personnelles doit rester en Chine (Alibaba Cloud, Tencent Cloud, Huawei Cloud). LLMs locaux sur matériel local recommandés. Cloud APIs : seulement avec partenaire localisé (ex : Qwen via Alibaba).'
          ]
        },
        whenCloud: {
          title: 'Meilleurs cas d\'usage pour Cloud APIs',
          items: [
            '<strong>Chatbot temps réel :</strong> Utilisateur attend < 2 sec. Local : 5–10 sec (4–10 fois plus lent). Cloud : 0.5–1 sec (4–10 fois plus rapide).',
            '<strong>Batch haut volume :</strong> 1.000+ docs/jour. GPU local devient goulot ; cloud scale automatiquement avec parallélisation.',
            '<strong>Génération code :</strong> GPT-4o = 90% coding accuracy ; local 7B seulement 45–55%. Pour code production : cloud.',
            '<strong>Longs documents (100K+ tokens) :</strong> GPT-4o 128K contexte ; Llama 2 max 32K. Cloud mieux pour livres entiers, papers.',
            '<strong>Zéro maintenance :</strong> Cloud = mises à jour auto, patches, monitoring. Local = votre IT doit gérer CUDA drivers, firmware, uptime.',
            '<strong>Haute disponibilité :</strong> Cloud offre 99.9% SLA ; local = fragile (crash = downtime).'
          ]
        },
        whenNotToUse: {
          title: 'Quand NE PAS utiliser modèles locaux',
          content: [
            '<strong>❌ Pas local pour production sans backup SLA :</strong> Si service traite données client et downtime coûte. Matériel local crash ; cloud redondance.',
            '<strong>❌ Pas local pour code complexe :</strong> Taux erreur local 7B = 35–45%, GPT-4o = 10%. Pour code production trop risqué.',
            '<strong>❌ Pas local sans équipe IT :</strong> Si vous seul dev et pas temps GPU setup/CUDA troubleshooting. Cloud API plus rapide productivité.',
            '<strong>❌ Pas local quand vitesse > confidentialité :</strong> Chat temps réel exige vitesse cloud. Confidentialité peut compromise (avec DPA) si perf critique.',
            '<strong>❌ Pas local pour > 30 utilisateurs simultanés :</strong> Single GPU = goulot. Cloud scale horizontal (coûteux mais fonctionne). Local = mega-projet infrastructure.'
          ]
        },
        bestChoice: {
          title: 'Meilleur LLM local par cas d\'usage',
          content: 'Pour tous cas : <strong>utilisez Ollama ou LM Studio</strong> (tous deux gratuits, supportent modèles identiques).',
          columns: ['Cas d\'usage', '16 GB RAM', '40+ GB RAM', 'Recommandation'],
          rows: [
            { 'Cas d\'usage': 'Connaissance générale / Q&A', '16 GB RAM': 'Llama 2 13B', '40+ GB RAM': 'Llama 3.3 70B', 'Recommandation': 'Local OK, ou cloud pour meilleure qualité' },
            { 'Cas d\'usage': 'Assistant code', '16 GB RAM': 'Mistral 7B', '40+ GB RAM': 'Codellama 34B', 'Recommandation': 'Cloud mieux (GPT-4o 90% vs. 50%)' },
            { 'Cas d\'usage': 'Génération texte / rédaction', '16 GB RAM': 'Mistral 7B, Qwen 7B', '40+ GB RAM': 'Llama 3.3 70B, Qwen 72B', 'Recommandation': 'Local OK' },
            { 'Cas d\'usage': 'Traitement données sensibles', '16 GB RAM': 'Llama 2 13B (RGPD OK)', '40+ GB RAM': 'Llama 3.3 70B (meilleure qualité)', 'Recommandation': 'Local recommandé (privé + RGPD conforme)' },
            { 'Cas d\'usage': 'Chat assistant (temps réel)', '16 GB RAM': 'Pas recommandé (trop lent)', '40+ GB RAM': 'GPU requis (RTX 4090)', 'Recommandation': 'Cloud (GPT-4o, Claude) — 4–10 fois plus rapide' },
            { 'Cas d\'usage': 'Batch analyse (100+ docs)', '16 GB RAM': 'Local OK, prend heures', '40+ GB RAM': 'Local mieux que cloud (pas coûts)', 'Recommandation': 'Lancer nuit localement' }
          ]
        },
        quickFacts: {
          title: 'Synthèse rapide : local vs. cloud',
          columns: ['Critère', 'Local (Ollama/LM Studio)', 'Cloud (OpenAI/Anthropic)'],
          rows: [
            { 'Critère': 'Vitesse', 'Local (Ollama/LM Studio)': '10–160 tokens/s (CPU/GPU)', 'Cloud (OpenAI/Anthropic)': '80–150 tokens/s' },
            { 'Critère': 'Qualité (benchmarks)', 'Local (Ollama/LM Studio)': '7B: 62–68% MMLU; 70B: 75–80%', 'Cloud (OpenAI/Anthropic)': 'GPT-4o: 88.7% MMLU' },
            { 'Critère': 'Matériel', 'Local (Ollama/LM Studio)': '16–40 GB RAM ou GPU', 'Cloud (OpenAI/Anthropic)': 'Pas matériel requis' },
            { 'Critère': 'Temps config', 'Local (Ollama/LM Studio)': '20–40 minutes', 'Cloud (OpenAI/Anthropic)': '5 minutes' },
            { 'Critère': 'Confidentialité', 'Local (Ollama/LM Studio)': '100% privé (RGPD OK)', 'Cloud (OpenAI/Anthropic)': 'DPA requis' },
            { 'Critère': 'Disponibilité', 'Local (Ollama/LM Studio)': 'Pas SLA (fragile)', 'Cloud (OpenAI/Anthropic)': '99.9% SLA' },
            { 'Critère': 'Coûts', 'Local (Ollama/LM Studio)': 'GPU 2 310 €+ (one-time)', 'Cloud (OpenAI/Anthropic)': '$0.01–0.10 par 1K tokens' },
            { 'Critère': 'Fenêtre contexte', 'Local (Ollama/LM Studio)': '4K–32K tokens', 'Cloud (OpenAI/Anthropic)': '128K–200K tokens' }
          ]
        },
        faqSection: {
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Les LLMs locaux sont-ils plus lents que Cloud APIs ?',
              a: 'Oui, beaucoup. CPU = 10–25 tokens/s, cloud = 80–150 tokens/s. Pour chat temps réel, local trop lent. Pour batch, local OK.'
            },
            {
              q: 'Puis-je exécuter modèle 70B sur mon portable ?',
              a: 'Non. Modèles 70B exigent 40 GB RAM/VRAM minimum. Portable 16 GB peut exécuter max modèles 13B comprimés.'
            },
            {
              q: 'Quels meilleurs LLMs locaux ?',
              a: 'Llama 2 13B ou Mistral 7B pour 16 GB (≈ GPT-3.5). Llama 3.3 70B pour 40 GB (≈ GPT-4). Pour meilleure qualité : Cloud APIs.'
            },
            {
              q: 'Puis-je utiliser local hors ligne ?',
              a: 'Oui, avantage principal. Après téléchargement, tout local sans Internet. Cloud APIs toujours besoin réseau.'
            },
            {
              q: 'Fenêtre contexte max local ?',
              a: 'Typiquement 4K–32K tokens. Cloud APIs offrent 128K–200K (GPT-4o, Claude). Cloud mieux pour gros documents.'
            },
            {
              q: 'Ai-je besoin GPU pour LLMs locaux ?',
              a: 'Non mais vivement recommandé. CPU = 10–25 tokens/s (très lent). GPU = 50–160 tokens/s (utilisable). Sans GPU, chat temps réel impratique.'
            },
            {
              q: 'Quel coût LLM local ?',
              a: 'Download gratuit, matériel cher (2 310 €+ GPU). Cloud : $0.01–0.10 par 1.000 tokens. Petits volumes, cloud moins cher.'
            },
            {
              q: 'Ollama ou LM Studio ?',
              a: 'Ollama = CLI, rapide, automation. LM Studio = GUI, débutants. Tous deux exécutent mêmes modèles.'
            },
            {
              q: 'Puis-je exécuter GPT-4o localement ?',
              a: 'Non, OpenAI ne fournit pas poids. Alternatives local (Llama 70B, Qwen 72B) similaires, non identiques.'
            },
            {
              q: 'Temps config LLM local ?',
              a: '20–40 min total (install + download + GPU config). Cloud : 5 min. Cloud plus rapide onboarding.'
            },
            {
              q: 'Dois-je utiliser un LLM local ou une Cloud API ?',
              a: 'Local si la confidentialité est critique. Cloud si la vitesse ou les données en temps réel sont critiques. Incertain ? Testez les deux avec PromptQuorum — envoyez un prompt à votre Ollama local et 25+ modèles cloud simultanément pour comparer la qualité sur votre tâche spécifique.'
            },
            {
              q: 'Un LLM local est-il plus rapide qu\'une Cloud API ?',
              a: 'Non. Les APIs cloud génèrent 80–150 tokens/s. Les LLMs locaux sur CPU génèrent 10–25 tokens/s — 4–10× plus lents. Le GPU aide : NVIDIA RTX 4090 atteint 130–160 tokens/s, égale le cloud, mais coûte 2 310 €+.'
            },
            {
              q: 'Un LLM local est-il moins cher que le cloud ?',
              a: 'Cela dépend de l\'utilisation. Local coûte 900–2 200 € matériel initial. Cloud coûte $5–50/mois. Pour les utilisateurs légers (<100K tokens/mois), cloud est moins cher. Pour les utilisateurs intensifs (>10M tokens/mois), local s\'amortit en 6–12 mois.'
            },
            {
              q: 'Quand devrais-je utiliser un LLM local au lieu du cloud ?',
              a: 'Utilisez local quand : la confidentialité est critique (les données ne quittent jamais l\'appareil), vous avez du matériel adéquat (16+ GB RAM ou 40+ GB pour 70B), vous n\'avez pas besoin d\'information en temps réel, et la complexité de configuration est acceptable. Utilisez cloud quand : la vitesse est critique, l\'accès aux données en temps réel est nécessaire, le matériel est limité (<8 GB RAM), ou vous avez besoin de raisonnement frontier-level.'
            },
            {
              q: 'Quelles sont les principales limitations des LLMs locaux ?',
              a: 'Six limitations principales : (1) Qualité inférieure en raisonnement complexe vs modèles cloud frontier, (2) Inférence 4–10× plus lente sur matériel client, (3) Exigences matérielles élevées (900–2.200 € initial), (4) Pas d\'accès aux informations en temps réel (date de coupure d\'entraînement), (5) Complexité de configuration (20–40 minutes vs 5 minutes cloud), (6) Fenêtre de contexte limitée (4K–128K tokens local vs 1M+ en cloud).'
            }
          ]
        },
        sources: {
          title: 'Sources et références',
          items: [
            '[Ollama — Téléchargement & Installation](https://ollama.ai)',
            '[LM Studio — GUI pour LLMs locaux](https://lmstudio.ai)',
            '[Llama 2 Model Card (Meta)](https://huggingface.co/meta-llama/Llama-2-70b)',
            '[HumanEval Benchmarks (OpenAI)](https://github.com/openai/human-eval)',
            '[MMLU Benchmark (AI2)](https://github.com/jair-bolt/mmlu)',
            '[OpenAI GPT-4o Technical Report](https://openai.com/research/gpt-4)',
            '[Anthropic Claude 3.5 Model Card](https://www.anthropic.com/)',
            '[Recommandations CNIL pour l\'IA](https://www.cnil.fr)',
            '[RGPD Guide de conformité (Commission EU)](https://www.edpb.europa.eu)',
            '[China Data Security Law 2021 (CAC)](https://www.cac.gov.cn)'
          ]
        },
        commonMistakes: {
          title: 'Erreurs courantes avec LLMs locaux',
          numberedItems: [
            '<strong>Mauvaise quantisation :</strong> Q8 ou Q6 exigent trop RAM. Utilisez Q4_K_M (meilleur équilibre) ou Q3_K_M (< 16 GB).',
            '<strong>Modèles trop petits :</strong> Modèles 3B pratiquement inutiles. Minimum : 7B. Mieux : 13B.',
            '<strong>Pas accélération GPU :</strong> CPU 50 fois plus lent. Même GPU bon marché (RTX 4060) vaut peine.',
            '<strong>Ignorer latences initiales :</strong> Premier token = 2–5 sec (startup time). Après, plus rapide.',
            '<strong>Fenêtre contexte trop grande :</strong> 32K contexte = 8 fois plus mémoire. Commencez 4K–8K.',
            '<strong>Pas Docker/conteneurisation :</strong> Ollama Docker portable et maintainable. Installation native = chaos drivers.'
          ]
        },
        relatedReading: {
          title: 'Articles connexes',
          items: [
            '[Combien VRAM pour LLMs locaux ? (Guide matériel)](/local-llms/how-much-vram-local-llm?lang=fr)',
            '[Installer Ollama : guide étape par étape](/local-llms/how-to-install-ollama?lang=fr)',
            '[LM Studio vs. Ollama : lequel choisir ?](/local-llms/lm-studio-vs-ollama?lang=fr)',
            '[Meilleurs modèles locaux 2026 comparés](/local-llms/best-local-llm-models?lang=fr)',
            '[Prompt Engineering pour LLMs locaux (techniques & astuces)](/prompt-engineering/prompt-engineering-local-llms?lang=fr)'
          ]
        }
      }
    },
    ja: {
      theme: '始める',
      title: 'ローカルLLM vs クラウドAPI：いつどちらを使うべきか（2026年比較）',
      seoTitle: 'ローカルLLM vs クラウド：プライバシー10倍、速度1/10（2026年比較）',
      intro: 'ローカルLLMはプライバシーと制御を提供しますが、パフォーマンスに大きなギャップがあります。ローカルモデルの6つの重大な限界と、いつCloud APIを使うべきかを学びましょう。',
      metaDescription: 'ローカル=100%プライバシー・無料・10倍遅い。クラウド=毎秒50–150トークン・1000トークン0.01–0.05ドル・ウェブ検索可。全比較表とAI使い分けガイド。2026年4月。',
      twitterDescription: 'ローカルLLM：完全プライベート・無料・遅い。クラウド：高速・スマート・有料。使い分け完全ガイド。2026年4月。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**ローカルLLMはハードウェアとトレーニングの制約により、推論、速度、リアルタイムデータアクセスでクラウド frontier モデルに匹敵しません。** プライベート、オフライン、コスト重視のタスクに最適ですが、高精度またはリアルタイムアプリケーションには向きません。',
      audience: 'ローカルLLMとCloud APIのどちらを選ぶか決める必要があるエンジニアと IT リーダー',
      readTime: '7分で読める',
      educationalLevel: '初級',
      primaryTerm: 'ローカルLLMの限界',
      toc: [
        { label: '1文で', anchor: '#in-one-sentence' },
        { label: '簡潔に説明', anchor: '#in-plain-terms' },
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '素早い判断：ローカル vs クラウド', anchor: '#quick-decision' },
        { label: '限界1：速度', anchor: '#speed-limitations' },
        { label: '限界2：品質', anchor: '#quality-limitations' },
        { label: '限界3：ハードウェア', anchor: '#hardware-requirements' },
        { label: '限界4：セットアップ時間', anchor: '#setup-time' },
        { label: '限界5：コンテキストウィンドウ', anchor: '#context-window' },
        { label: '限界6：リアルタイム保証なし', anchor: '#no-realtime-guarantees' },
        { label: 'ローカルLLMを使ってはいけない場合', anchor: '#when-not-to-use' },
        { label: '用途別ベストローカルLLM', anchor: '#best-choice' },
        { label: 'クイックファクト', anchor: '#quick-facts' },
        { label: 'よくある質問', anchor: '#faqs' },
        { label: 'リファレンス＆出典', anchor: '#sources' }
      ],
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ローカルLLMの限界：ローカルモデルができないこと（そしていつクラウドを使うべきか）',
        description: 'ローカルLLM vs クラウド：6つの限界（速度、品質、ハードウェア）。企業向け決定ツリー。ベンチマーク＋コスト比較。',
        datePublished: '2026-04-04',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/local-llm-limitations?lang=ja',
        inLanguage: 'ja',
        about: [
          { '@type': 'Thing', 'name': 'ローカルLLM' },
          { '@type': 'Thing', 'name': 'Cloud API' },
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' }
        ],
        mentions: [
          { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
          { '@type': 'SoftwareApplication', 'name': 'Claude 3.5 Sonnet (2024)' },
          { '@type': 'Thing', 'name': 'Llama 2' },
          { '@type': 'Thing', 'name': 'Mistral' }
        ],
        author: {
          '@type': 'Organization',
          'name': 'PromptQuorum'
        },
        publisher: {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ローカルLLMはCloud APIより遅いですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、かなり遅いです。CPU推論で毎秒10–25トークン生成します。Cloud API（GPT-4o）は80–150トークン/秒です。GPU（RTX 4090）でも130–160トークン/秒にしかなりません。クラウドは4–10倍高速です。'
            }
          },
          {
            '@type': 'Question',
            name: 'ノートパソコンで70Bモデルを実行できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。70Bモデルは最低40 GB RAM/VRAM が必要です。16 GBのノートパソコンは13Bモデルに圧縮しても実行できません。70Bモデルには Mac Studio、ワークステーション、または複数GPU設定（¥450,000+）が必要です。'
            }
          },
          {
            '@type': 'Question',
            name: 'ベストなローカルLLMはどれですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '16 GB RAM の場合 ： Llama 2 13B または Mistral 7B（品質 ≈ GPT-3.5）。40 GB RAM の場合 ： Llama 3.3 70B または Qwen 72B（品質 ≈ GPT-4）。最適な効率には Q4_K_M 量子化を使用します。最高品質：Cloud API（GPT-4o、Claude 3.5 Sonnet (2024)）。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルモデルをオフラインで使用できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、これが主な利点です。ダウンロード後、すべてローカルで実行 — インターネット不要。Cloud API は常にネットワーク接続が必要ですが、自動更新と可用性保証を提供します。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMの最大コンテキストウィンドウはいくつですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ほとんどのローカルモデルは 4K–32K トークンコンテキストをサポートします。Llama 2 はデフォルト 4K ですが 32K に拡張可能。Cloud API ははるかに大きい ： GPT-4o = 128K、Claude 3.5 Sonnet (2024) = 200K。大きなドキュメントはクラウドがより良いです。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMに GPU が必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ、でも強く推奨します。CPU推論は10–50倍遅い。GPU（RTX 4090、RTX 4070）で50–160トークン/秒に達します。GPU なし（CPU のみ）：10–25トークン/秒で、リアルタイムチャットに不実用的です。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMはいくら かかりますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '無料ダウンロード＆実行（Ollama は無料）。ハードウェア高い ： GPU（RTX 4090）= ¥270,000+、Mac Studio = ¥348,800+。Cloud API ： 1,000トークン当たり $0.01–0.10。小～中規模ボリューム、Cloud がお得です。'
            }
          },
          {
            '@type': 'Question',
            name: 'Ollama か LM Studio どちらを使いますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ollama は CLI ベース、高速、自動化しやすい。LM Studio は GUI、初心者向け。本番環境と API： Ollama。探索的実験 ： LM Studio。両方同じモデル実行（Llama、Mistral、Qwen）。'
            }
          },
          {
            '@type': 'Question',
            name: 'GPT-4o をローカルで実行できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ、OpenAI は GPT-4o ウェイトを提供していません。GPT-4o は OpenAI API 経由だけ。ローカルオープンソース代替案（Llama 3.3 70B、Qwen 72B）は同様の品質（非同一）。GPT-4o 品質保証：Cloud API。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMのセットアップに何分かかりますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '合計 ： 20–40分。(1) Ollama/LM Studio インストール ： 2–3分。(2) 7Bモデルダウンロード（4 GB） ： 5–10分。(3) GPU 設定（オプション、CUDA/Metal） ： 5–10分。Cloud API ： 最初のAPI呼び出しまで5分。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMそれともCloud APIを使うべき？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'プライバシーが重要ならローカル。速度またはリアルタイムデータが重要ならCloud。迷っていますか？PromptQuorumで両方テストしてください。1つのプロンプトをローカルOllamaと25+個のクラウドモデルに同時に送信して、特定のタスクで品質を比較します。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMはCloud APIより速いですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。Cloud API は毎秒80–150トークン生成します。ローカルLLMのCPUは毎秒10–25トークン生成 —4–10倍遅い。GPUが役立つ ： NVIDIA RTX 4090は毎秒130–160トークンに達し、クラウドと並びますが、¥270,000+費用です。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMはクラウドより安いですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '使用方法による。ローカルは¥120,000–300,000ハードウェア初期費用。クラウドは月$5–50。軽度ユーザー(<100Kトークン/月)はクラウドが安い。ヘビーユーザー(>1000万トークン/月)は6–12ヶ月でローカルが元を取ります。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMをクラウドの代わりに使うべき時は？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ローカル使用時 ：プライバシーが重要(デバイスからデータが出ない)、十分なハードウェア(16+ GB RAM または70B用40+ GB)がある、リアルタイム情報が不要、セットアップの複雑さが許容できる。クラウド使用時 ： 速度が重要、リアルタイムデータアクセスが必要、ハードウェアが制限(<8 GB RAM)、またはフロンティアレベルの推論が必要。'
            }
          },
          {
            '@type': 'Question',
            name: 'ローカルLLMの主な制限は何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '6つの主な制限 ： (1) フロンティアクラウドモデル対複雑な推論品質が低い、(2) コンシューマーハードウェアでの推論が4–10倍遅い、(3) ハードウェア要件が高い(¥120,000–300,000初期費用)、(4) リアルタイム情報アクセスなし(トレーニングカットオフ日)、(5) セットアップの複雑さ(クラウド5分対20–40分)、(6) コンテキストウィンドウが制限(ローカル4K–128Kトークン対クラウド1M+)。'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Cloud API を使うべき場合',
        inLanguage: 'ja',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'リアルタイムチャットボット',
            description: 'ユーザーは < 2秒応答を期待。Cloud API は4–10倍高速。'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '大量バッチ処理',
            description: '1,000+ドキュメント/日。Cloud はスケール自動；ローカルGPU はボトルネック。'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SLA付き本番運用',
            description: '99.9%+可用性。Cloud は SLA 保証；ローカルハードウェア冗長性要（コスト）。'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '最高品質出力（コード、分析）',
            description: 'GPT-4o と Claude 3.5 Sonnet (2024) はベンチマークで 10–20ポイント上。'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '長いコンテキストウィンドウ',
            description: '100K+トークン。Cloud（GPT-4o 128K、Claude 200K）は大きなドキュメント処理可；ローカルは 4K–32K 制限。'
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'メンテナンス不要',
            description: 'Cloud = メンテナンス0、自動更新。ローカルは CUDA ドライバ、ファームウェア、監視必要。'
          }
        ]
      },
      gammaEmbedUrl: '/presentations/local-llm-limitations-static.html',
      gammaDescription: '14スライドインタラクティブプレゼン ： ローカルLLMの6つの限界、ハードウェア要件（8–40 GB RAM）、速度比較（CPU 10–25トークン/秒 vs. クラウド 80–150トークン/秒）、品質ギャップ（MMLU、HumanEval ベンチマーク）、セットアップ時間（ローカル 20–40分 vs. クラウド5分）、判断ツリー（ローカル vs. クラウド）。PDF ダウンロード機能付き。',
      sections: {
        inOneSentence: {
          title: '1文で',
          content: 'ローカルLLMはプライバシー提供しますが4–10倍遅く、最低16 GBが必要で、Cloud API より品質低い — オフラインシナリオか緊急でないバッチ処理のみに使用してください。'
        },
        inPlainTerms: {
          title: '簡潔に説明',
          content: [
            '<strong>ローカルLLM ：</strong> 言語モデルをコンピュータにダウンロード（Ollama、LM Studio）。すべてのデータはプライベート。短所 ： 遅い、能力限定、セットアップ複雑。',
            '<strong>Cloud API（GPT-4o、Claude） ：</strong> テキストをリモートサーバーに送信、< 1秒で応答。高速で知的、でもコスト（~1,000文字あたり $0.01）。',
            '<strong>判断 ：</strong> ローカルはプライバシー＆オフライン。クラウドは速度＆品質。'
          ]
        },
        tldr: {
          isTldr: true,
          title: '重要ポイント',
          content: [
            '✓ ローカルモデル4–10倍遅い（CPU ： 10–25トークン/秒 vs. クラウド ： 80–150トークン/秒）。',
            '✓ 品質ギャップ ： 7Bモデルは MMLU、HumanEval ベンチマークで GPT-4o の10–20ポイント下。',
            '✓ ハードウェア要件 ： 実用最小16 GB RAM；最高品質は40 GB（70Bモデル）。',
            '✓ セットアップ時間 ： 20–40分ローカル（ダウンロード＋設定）；Cloud API は5分で準備完了。',
            '✓ コンテキストウィンドウ ： ローカル4K–32K；クラウド128K–200K（GPT-4o、Claude）。クラウドは大型ドキュメント対応。',
            '✓ ローカル最適用途 ： データ機密タスク、オフラインシナリオ、緊急でないバッチ。',
            '✓ クラウド最適用途 ： リアルタイムチャット、大量バッチ、SLA付き本番、最高品質。'
          ]
        },
        quickDecision: {
          title: '素早い判断：ローカル or クラウド？',
          content: [
            '<strong>ローカルを使う場合 ：</strong>',
            '• リモートサーバーにデータ送信できない（プライバシー、GDPR）。',
            '• オフラインで作業する必要（インターネットなし）。',
            '• セキュリティを速度より優先。',
            '• ユースケースは緊急でない（バッチ分析、ドキュメント処理）。',
            '',
            '<strong>クラウドを使う場合 ：</strong>',
            '• リアルタイムパフォーマンス重要（チャット、ライブ分析）。',
            '• 最高品質必要（コード、複雑な推論）。',
            '• 高ボリューム処理（1,000+ドキュメント/日）。',
            '• インフラ管理したくない（メンテナンス0）。',
            '• 長いコンテキストウィンドウ必要（100K+トークン）。'
          ]
        },
        quickDecisionMatrix: {
          id: 'decision-matrix',
          title: 'クイック判断マトリックス：ローカルLLM vs クラウドAPI',
          columns: ['タスク', 'ローカルLLM', 'クラウドAPI', '推奨'],
          rows: [
            { 'タスク': 'プライバシー・機密データ', 'ローカルLLM': 'デバイス内に留まる', 'クラウドAPI': 'リモートサーバーに送信（DPA必須）', '推奨': '✅ ローカル' },
            { 'タスク': 'リアルタイムチャット（< 2秒）', 'ローカルLLM': '5–10秒（CPU）', 'クラウドAPI': '0.5–1秒', '推奨': '✅ クラウド' },
            { 'タスク': 'コード生成', 'ローカルLLM': '45–55% HumanEval（7B）', 'クラウドAPI': '90% HumanEval（GPT-4o）', '推奨': '✅ クラウド' },
            { 'タスク': 'ドキュメント要約', 'ローカルLLM': '対応可能（7Bで十分）', 'クラウドAPI': '対応可能＋高速', '推奨': '⚖️ いずれでも可' },
            { 'タスク': 'ゼロAPI費用', 'ローカルLLM': '$0/トークン（ハード後）', 'クラウドAPI': '$0.01–0.05 per 1K tokens', '推奨': '✅ ローカル（高ボリューム）' },
            { 'タスク': 'オフライン/インターネットなし', 'ローカルLLM': '完全オフライン', 'クラウドAPI': 'インターネット必須', '推奨': '✅ ローカル' },
            { 'タスク': '大規模コンテキスト（100K+トークン）', 'ローカルLLM': '4K–32Kトークン上限', 'クラウドAPI': '128K–200Kトークン', '推奨': '✅ クラウド' },
            { 'タスク': '本番SLA（99.9%）', 'ローカルLLM': 'SLAなし（ハードウェア故障可）', 'クラウドAPI': '99.9%稼働時間保証', '推奨': '✅ クラウド' },
          ],
        },
        decisionFlowchart: {
          id: 'decision-flowchart',
          title: '30秒判断ツリー',
          content: [
            '**Q1：データプライバシー重要（法的、医療、機密）?**',
            '- ✓ YES → **ローカル使用.** プライバシーが主要利点。',
            '- ✗ NO → 次の質問へ。',
            '',
            '**Q2：リアルタイム情報必要（ニュース、価格、最新情報）?**',
            '- ✓ YES → **クラウド使用.** ローカルモデルは訓練カットオフある。',
            '- ✗ NO → 次の質問へ。',
            '',
            '**Q3：40+ GB RAM または ¥270,000+ GPU に余裕ある?**',
            '- ✓ YES → **ローカル70B使用.** 品質がクラウド相当、継続コスト$0。',
            '- ✗ NO → **クラウド使用.** パワー不足ローカルより実用的。',
            '',
            '**Q4：まだ迷っている?** [PromptQuorum両方テスト](/?lang=ja).',
          ],
        },
        promptquorumCta: {
          id: 'test-both',
          title: 'まだ迷っている?実行前にテストしてください',
          content: [
            'ローカルとクラウドのあなたの特定のタスク決定が難しい場合、[PromptQuorum無料](/?lang=ja)で使用して:',
          ],
          items: [
            'ローカルOllama AND 25+クラウドモデルに同時にpromptを送信',
            'output品質を並べて比較',
            'あなたのデータで実際の速度、コスト、品質差を見る',
            '理論ではなく実際の結果で決定する',
          ],
        },
        qualityGap: {
          title: '限界2：品質ギャップ — ローカルモデルは GPT-4o に及びません',
          content: ['ローカルの 7Bモデルは標準ベンチマーク（MMLU、HumanEval）で GPT-4o から10–20ポイント低い。少なく見えますが実際は ： 弱い推論、コード・数学エラー多い、微妙さの理解不足。', 'ローカルモデルの制約はより広いLLMの限界と重なります——ハルシネーション、推論の失敗、知識カットオフはデプロイ方法に関わらずすべてのモデルに影響します。LLMがいまだに確実にできないことの全体像は[AI制限：LLMにできないこと](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do)をご覧ください。'],
          image: '/images/local-llm-limitations-quality-benchmarks-ja.svg',
          columns: ['モデル', 'MMLU（一般知識）', 'HumanEval（Python コード）'],
          rows: [
            { 'モデル': 'Local 7B', 'MMLU（一般知識）': '62–68%', 'HumanEval（Python コード）': '45–55%' },
            { 'モデル': 'Local 70B', 'MMLU（一般知識）': '75–80%', 'HumanEval（Python コード）': '65–75%' },
            { 'モデル': 'GPT-4o', 'MMLU（一般知識）': '88.7%', 'HumanEval（Python コード）': '90.2%' }
          ]
        },
        whenQualityMatters: {
          title: '品質が本当に重要な場合',
          decisionBlock: {
            title: '品質が本当に重要な場合',
            localIf: [
              'テキスト要約が必要（堅牢）',
              'センチメント分析十分（7Bも信頼可）',
            ],
            cloudIf: [
              'コード生成＆デバッグ（ローカル 7B エラー率 35–45% vs. GPT-4o 10%）',
              '財務または医療分析（エラーは高い）',
              '3段階以上の複雑推論',
            ],
            quick: [
              'シンプルタスク → ローカルOK',
              '複雑タスク → Cloud',
            ],
          }
        },
        speed: {
          title: '限界1：速度 — ローカルCPUは4–10倍遅い',
          content: 'これが最大の実用的制約。ローカルCPU毎秒10–25トークン生成。Cloud API は80–150トークン/秒。ユーザー感覚 ： ローカル = 複数秒待機；クラウド = 即座 < 1秒。',
          image: '/images/local-llm-limitations-speed-comparison-ja.svg'
        },
        whenSpeedMatters: {
          title: '速度が重要な場合',
          decisionBlock: {
            title: '速度が重要な場合',
            localIf: [
              'インタラクティブチャットで 10–25トークン/秒許容',
              'プライバシーがレーテンシより優先',
            ],
            cloudIf: [
              '大量バッチ処理（100+ドキュメント）',
              '常に < 1秒応答が必要',
            ],
            quick: [
              'インタラクティブ → ローカルOK',
              '高スループット → Cloud',
            ],
          }
        },
        hardware: {
          title: '限界3：ハードウェア — 16–40 GB RAM 最小',
          content: 'ローカルモデルは RAM 必要。7B 量子化（Q4_K_M）は約4GB；70Bは約40GB。OS、システムメモリ、コンテキスト追加 = 最低16 GB RAM が実用的。高い（GPU ： ¥270,000+、Mac Studio ： ¥348,800+）。',
          image: '/images/local-llm-limitations-hardware-requirements-ja.svg'
        },
        whenHardwareMatters: {
          title: 'ハードウェアが制限要因の場合',
          decisionBlock: {
            title: 'ハードウェアが制限要因の場合',
            localIf: [
              '16+ GB RAM がある',
              '7B–13B モデルで作業',
            ],
            cloudIf: [
              '8 GB RAM のみ（ノートパソコン）',
              '> 13B モデル実行したい（24–40 GB 必要）',
              '> 30 同時ユーザー提供（マルチGPU必要）',
            ],
            quick: [
              'ミッドレンジハード → ローカルOK',
              'ハード制限 → Cloud',
            ],
          }
        },
        noInternet: {
          title: '限界6：リアルタイム保証なし — ローカルは脆弱',
          content: 'ローカルLLM は稼働時間を保証しません。ノートパソコン freeze、Ollama crash、CUDA ドライバ fail ： サポートなし、ダウンタイムのみ。Cloud API（OpenAI、Anthropic）は99.9%可用性（SLA）保証。本番 = クラウド勝ち。'
        },
        whenRealtimeMatters: {
          title: '可用性が重要な場合',
          decisionBlock: {
            title: '可用性が重要な場合',
            localIf: [
              '5–10ユーザー向け内部ツール',
              '実験＆開発',
            ],
            cloudIf: [
              '顧客依存本番アプリ',
              '金融取引または医療app',
              '高可用性必須（停止がコスト）',
            ],
            quick: [
              '内部のみ → ローカルOK',
              '本番SLA付き → Cloud',
            ],
          }
        },
        contextWindow: {
          title: '限界5：コンテキストウィンドウ — ローカル最大32K vs. クラウド128K–200K',
          content: 'コンテキストウィンドウ = モデルのメモリ長さ。ローカルモデルは通常4K–32Kトークン（約8K–64K単語）サポート。Cloud API は128K–200K。意味 ： ローカルは最大50–80ページテキスト一度に；クラウドは本丸全体（> 300ページ）一度に分析可。'
        },
        whenContextMatters: {
          title: '大きなコンテキストウィンドウが必要な場合',
          decisionBlock: {
            title: '大きなコンテキストウィンドウが必要な場合',
            localIf: [
              '1論文または章（< 20ページ）一度',
              'チャット短会話（< 10メッセージ）',
            ],
            cloudIf: [
              '本全体/長いドキュメント一度に分析',
              '長い会話歴（> 20メッセージ）',
              'RAGシステム大きいドキュメントセット',
            ],
            quick: [
              '小さいドキュメント → ローカルOK',
              '大きいコンテキスト → Cloud',
            ],
          }
        },
        setup: {
          title: '限界4：セットアップ時間 — 20–40分ローカル vs. 5分クラウド',
          content: 'ローカルセットアップに時間要 ： Ollama インストール（3分）、モデルダウンロード（5–60分、サイズによる）、GPU 設定（5–10分）。Cloud API ： メール登録（1分）、API キーコピー（1分）、最初の API 呼び出し（3分）。クラウド明らかに勝ち。',
          image: '/images/local-llm-limitations-setup-time-ja.svg'
        },
        whenSetupMatters: {
          title: 'セットアップ速度が重要な場合',
          decisionBlock: {
            title: 'セットアップ速度が重要な場合',
            localIf: [
              'セットアップ一度、長期使用',
              '内部IT チーム がインフラ構築可能',
            ],
            cloudIf: [
              'すぐに生産的になりたい',
              'ラピッドプロトタイピング/ハッカソン',
              '最小IT インフラ',
            ],
            quick: [
              'あと長期 → ローカルOK',
              'すぐに開始 → Cloud',
            ],
          }
        },
        regionalContext: {
          title: '地域別コンプライアンス : ローカル vs. クラウド',
          content: [
            '<strong>日本（METI AI Governance 2024）：</strong> 日本はデータ主権のための地元・連邦モデルを推進。金融、医療などの規制業界にはローカル推論推奨。Government 2024ガイドラインで明示的に AI ガバナンスサポート。Cloud API ： ローカルキャッシュ/エッジコンピューティングで許容。',
            '<strong>東アジア・APAC（データ越境規制）：</strong> 各地域でデータレジデンシー要件が異なる。マルチASDN/APAC準拠パターン。ローカル推論はほぼ常に許容されて且つ推奨される。',
            '<strong>グローバル（最高品質・スケール優先）：</strong> ローカルで最高品質が不可能な大規模アプリケーションはクラウドAPI（GPT-4o、Claude 3.5 Sonnet (2024)）推奨。'
          ]
        },
        whenCloud: {
          title: 'Cloud API の最適ユースケース',
          items: [
            '<strong>リアルタイムチャットボット ：</strong> ユーザーは < 2秒待機。ローカル ： 5–10秒（4–10倍遅い）。クラウド ： 0.5–1秒（4–10倍高速）。',
            '<strong>大量バッチ ：</strong> 1,000+ドキュメント/日。ローカルGPU がボトルネック；クラウド並列化で自動スケール。',
            '<strong>コード生成 ：</strong> GPT-4o = 90%コード精度；ローカル7B = 45–55%。本番コード ： クラウド。',
            '<strong>長いドキュメント（100K+トークン） ：</strong> GPT-4o 128K コンテキスト；Llama 2 最大32K。本全体、論文 ： クラウド。',
            '<strong>メンテナンス0 ：</strong> クラウド = 自動更新、パッチ、監視。ローカル = IT が CUDA ドライバ、ファームウェア、稼働時間管理。',
            '<strong>高可用性 ：</strong> クラウド99.9% SLA；ローカル = 脆弱（クラッシュ = ダウンタイム）。'
          ]
        },
        whenNotToUse: {
          title: 'ローカルLLMを使ってはいけない場合',
          content: [
            '<strong>❌ SLA バックアップなし本番に非ローカル ：</strong> サービスが顧客データ処理でダウンタイム = コスト。ローカルハードは落ちる；クラウド = 冗長。',
            '<strong>❌ 複雑コード非ローカル ：</strong> ローカル7B エラー率 = 35–45%、GPT-4o = 10%。本番コードへのリスク高い。',
            '<strong>❌ IT チームなし非ローカル ：</strong> 独りエンジニアで GPU セットアップ/CUDA トラブル時間ない。Cloud API が生産速い。',
            '<strong>❌ 速度 > プライバシーの場合非ローカル ：</strong> リアルタイムチャット = クラウド速度必須。プライバシー妥協可（DPA ）パフォーマンス重要なら。',
            '<strong>❌ > 30同時ユーザー非ローカル ：</strong> 単一GPU = ボトルネック。クラウド = 水平スケール（高いが機能）。ローカル = mega インフラプロジェクト。'
          ]
        },
        bestChoice: {
          title: '用途別ベストローカルLLM',
          content: 'すべての用途 ： <strong>Ollama または LM Studio を使用</strong>（両方無料、同じモデルサポート）。',
          columns: ['用途', '16 GB RAM', '40+ GB RAM', '推奨'],
          rows: [
            { '用途': '一般知識 / Q&A', '16 GB RAM': 'Llama 2 13B', '40+ GB RAM': 'Llama 3.3 70B', '推奨': 'ローカルOK、品質重視ならクラウド' },
            { '用途': 'コードアシスタント', '16 GB RAM': 'Mistral 7B', '40+ GB RAM': 'Codellama 34B', '推奨': 'クラウド勝ち（GPT-4o 90% vs. 50%）' },
            { '用途': 'テキスト生成/執筆', '16 GB RAM': 'Mistral 7B、Qwen 7B', '40+ GB RAM': 'Llama 3.3 70B、Qwen 72B', '推奨': 'ローカルOK' },
            { '用途': 'データ機密処理', '16 GB RAM': 'Llama 2 13B（GDPR OK）', '40+ GB RAM': 'Llama 3.3 70B（最高品質）', '推奨': 'ローカル推奨（プライベート＋GDPR準拠）' },
            { '用途': 'チャットアシスタント（リアルタイム）', '16 GB RAM': '非推奨（遅い）', '40+ GB RAM': 'GPU 必須（RTX 4090）', '推奨': 'クラウド（GPT-4o、Claude）— 4–10倍高速' },
            { '用途': 'バッチ分析（100+ドキュメント）', '16 GB RAM': 'ローカルOK、時間かかる', '40+ GB RAM': 'ローカル勝ち（クラウドコストなし）', '推奨': '夜間ローカル実行' }
          ]
        },
        quickFacts: {
          title: 'クイックファクト : ローカル vs. クラウド',
          columns: ['指標', 'Local（Ollama/LM Studio）', 'Cloud（OpenAI/Anthropic）'],
          rows: [
            { '指標': '速度', 'Local（Ollama/LM Studio）': '10–160 トークン/秒（CPU/GPU）', 'Cloud（OpenAI/Anthropic）': '80–150 トークン/秒' },
            { '指標': '品質（ベンチマーク）', 'Local（Ollama/LM Studio）': '7B: 62–68% MMLU；70B: 75–80%', 'Cloud（OpenAI/Anthropic）': 'GPT-4o: 88.7% MMLU' },
            { '指標': 'ハード', 'Local（Ollama/LM Studio）': '16–40 GB RAM または GPU', 'Cloud（OpenAI/Anthropic）': 'ハード不要' },
            { '指標': 'セットアップ時間', 'Local（Ollama/LM Studio）': '20–40分', 'Cloud（OpenAI/Anthropic）': '5分' },
            { '指標': 'プライバシー', 'Local（Ollama/LM Studio）': '100% プライベート（GDPR OK）', 'Cloud（OpenAI/Anthropic）': 'DPA 必須' },
            { '指標': '可用性', 'Local（Ollama/LM Studio）': 'SLA なし（脆弱）', 'Cloud（OpenAI/Anthropic）': '99.9% SLA' },
            { '指標': 'コスト', 'Local（Ollama/LM Studio）': 'GPU ¥270,000+（1回）', 'Cloud（OpenAI/Anthropic）': '$0.01–0.10 1K トークン単位' },
            { '指標': 'コンテキスト', 'Local（Ollama/LM Studio）': '4K–32K トークン', 'Cloud（OpenAI/Anthropic）': '128K–200K トークン' }
          ]
        },
        faqSection: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'ローカルLLMはCloud APIより遅いですか？',
              a: 'はい、かなり。CPU = 10–25トークン/秒、クラウド = 80–150トークン/秒。リアルタイムチャットはローカル遅い。バッチ処理はローカルOK。'
            },
            {
              q: 'ノートパソコンで70Bモデルは実行できますか？',
              a: 'いいえ。70Bモデルは40 GB RAM/VRAM 最小。16 GBノートパソコンは13Bモデル圧縮が限界。'
            },
            {
              q: 'ベストなローカルLLMはどれですか？',
              a: 'Llama 2 13B または Mistral 7B（16GB；≈GPT-3.5）。Llama 3.3 70B（40GB；≈GPT-4）。最高品質：Cloud API。'
            },
            {
              q: 'ローカルをオフラインで使用できますか？',
              a: 'はい、主な利点。ダウンロード後ローカル実行 — インターネット不要。Cloud API は常にネット必須。'
            },
            {
              q: 'ローカルコンテキスト最大サイズは？',
              a: 'ふつう4K–32Kトークン。クラウドAPI = 128K–200K（GPT-4o、Claude）。大きいドキュメントはクラウド。'
            },
            {
              q: 'ローカルLLMに GPU が必要ですか？',
              a: '不要ですが強く推奨。CPU = 10–25トークン/秒（とても遅い）。GPU = 50–160トークン/秒（使える）。リアルタイムチャット GPU 必須。'
            },
            {
              q: 'ローカルLLMはいくら かかりますか？',
              a: 'ダウンロード＆実行無料。ハード高い（GPU ¥270,000+）。Cloud： $0.01–0.10 / 1Kトークン。少量ボリュームはクラウド安い。'
            },
            {
              q: 'Ollama か LM Studio どちらですか？',
              a: 'Ollama = CLI、高速、自動化簡単。LM Studio = GUI、初級者。本番 = Ollama。試験 = LM Studio。同じモデル実行。'
            },
            {
              q: 'GPT-4o をローカルで実行できますか？',
              a: 'いいえ、OpenAI は重みを提供しません。GPT-4o は OpenAI API のみ。ローカル代替案（Llama 70B、Qwen 72B）似た、非同一。'
            },
            {
              q: 'ローカルLLMセットアップの時間は？',
              a: '20–40分合計。(1) インストール 2–3分。(2) ダウンロード 5–10分。(3) GPU 設定（オプション） 5–10分。Cloud ： 5分。'
            },
            {
              q: 'ローカルLLMそれともCloud APIを使うべき？',
              a: 'プライバシーが重要ならローカル。速度またはリアルタイムデータが重要ならCloud。迷っていますか？PromptQuorumで両方テストしてください。1つのプロンプトをローカルOllamaと25+個のクラウドモデルに同時に送信して、特定のタスクで品質を比較します。'
            },
            {
              q: 'ローカルLLMはCloud APIより速いですか？',
              a: 'いいえ。Cloud API は毎秒80–150トークン生成します。ローカルLLMのCPUは毎秒10–25トークン生成 —4–10倍遅い。GPUが役立つ ： NVIDIA RTX 4090は毎秒130–160トークンに達し、クラウドと並びますが、¥270,000+費用です。'
            },
            {
              q: 'ローカルLLMはクラウドより安いですか？',
              a: '使用方法による。ローカルは¥120,000–300,000ハードウェア初期費用。クラウドは月$5–50。軽度ユーザー(<100Kトークン/月)はクラウドが安い。ヘビーユーザー(>1000万トークン/月)は6–12ヶ月でローカルが元を取ります。'
            },
            {
              q: 'ローカルLLMをクラウドの代わりに使うべき時は？',
              a: 'ローカル使用時 ：プライバシーが重要(デバイスからデータが出ない)、十分なハードウェア(16+ GB RAM または70B用40+ GB)がある、リアルタイム情報が不要、セットアップの複雑さが許容できる。クラウド使用時 ： 速度が重要、リアルタイムデータアクセスが必要、ハードウェアが制限(<8 GB RAM)、またはフロンティアレベルの推論が必要。'
            },
            {
              q: 'ローカルLLMの主な制限は何ですか？',
              a: '6つの主な制限 ： (1) フロンティアクラウドモデル対複雑な推論品質が低い、(2) コンシューマーハードウェアでの推論が4–10倍遅い、(3) ハードウェア要件が高い(¥120,000–300,000初期費用)、(4) リアルタイム情報アクセスなし(トレーニングカットオフ日)、(5) セットアップの複雑さ(クラウド5分対20–40分)、(6) コンテキストウィンドウが制限(ローカル4K–128Kトークン対クラウド1M+)。'
            }
          ]
        },
        sources: {
          title: 'リファレンス＆出典',
          items: [
            '[Ollama — ダウンロード＆インストール](https://ollama.ai)',
            '[LM Studio — ローカルLLM用GUI](https://lmstudio.ai)',
            '[Llama 2 Model Card（Meta）](https://huggingface.co/meta-llama/Llama-2-70b)',
            '[HumanEval ベンチマーク（OpenAI）](https://github.com/openai/human-eval)',
            '[MMLU ベンチマーク（AI2）](https://github.com/jair-bolt/mmlu)',
            '[OpenAI GPT-4o テクニカルレポート](https://openai.com/research/gpt-4)',
            '[Anthropic Claude 3.5 Model Card](https://www.anthropic.com/)',
            '[METI AI ガバナンス 2024](https://www.meti.go.jp)',
            '[日本データ保護ガイドライン](https://www.ppc.go.jp)',
            '[APAC AI ポリシーフレームワーク](https://www.asean.org)'
          ]
        },
        commonMistakes: {
          title: 'ローカルLLMの一般的ミス',
          numberedItems: [
            '<strong>間違い量子化 ：</strong> Q8 または Q6 は RAM 多すぎ。Q4_K_M（最高バランス）または Q3_K_M（16GB未満）使用。',
            '<strong>モデル小さすぎ ：</strong> 3Bモデルは使い物にならない。最小 ： 7B。推奨 ： 13B。',
            '<strong>GPU 非加速 ：</strong> CPU は50倍遅い。安い GPU（RTX 4060）でも価値有り。',
            '<strong>初期レイテンシ無視 ：</strong> 最初のトークン = 2–5秒（スタート時間）。その後高速。',
            '<strong>コンテキストウィンドウ大き過ぎ ：</strong> 32K コンテキスト = 8倍メモリ。4K–8K から開始。',
            '<strong>Docker/コンテナ化なし ：</strong> Ollama Docker は可搬的＆保守性高。ネイティブインストール = ドライバ混乱。'
          ]
        },
        relatedReading: {
          title: '関連記事',
          items: [
            '[ローカルLLMに何VRAM必要？（ハードウェアガイド）](/local-llms/how-much-vram-local-llm?lang=ja)',
            '[Ollama インストール ： ステップバイステップガイド](/local-llms/how-to-install-ollama?lang=ja)',
            '[LM Studio vs. Ollama ： どちらを選ぶ？](/local-llms/lm-studio-vs-ollama?lang=ja)',
            '[2026最高ローカルモデル比較](/local-llms/best-local-llm-models?lang=ja)',
            '[ローカルLLM用プロンプトエンジニアリング（技法＆コツ）](/prompt-engineering/prompt-engineering-local-llms?lang=ja)'
          ]
        }
      }
    },
    zh: {
      theme: '入门',
      title: '本地LLM vs 云API：何时使用哪个（2026年权衡分析）',
      seoTitle: '本地LLM vs 云API：数据安全 vs 速度权衡（2026年）',
      intro: '本地LLM提供隐私和控制，但存在重大性能差距。了解本地模型的6个关键限制——以及何时应改用Cloud API。',
      metaDescription: '本地LLM=100%隐私、免费、速度慢10倍。云API=每秒50–150词元、1K词元0.01–0.05美元、支持网络搜索。完整对比表+选择指南。2026年4月。',
      twitterDescription: '本地LLM：数据安全、免费、较慢。云API：高速、强大、付费。按用途选择指南。2026年4月。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**由于硬件和训练限制，本地LLM在推理、速度和实时数据访问方面无法与云端frontier模型匹敌。** 它们最适合私密、离线和成本敏感的任务，但不适合高准确度或实时应用。',
      audience: '需要在本地LLM和Cloud API之间做出选择的开发人员和IT负责人',
      readTime: '阅读约7分钟',
      educationalLevel: '初级',
      primaryTerm: '本地LLM的限制',
      toc: [
        { label: '一句话说明', anchor: '#in-one-sentence' },
        { label: '简单来说', anchor: '#in-plain-terms' },
        { label: '要点总结', anchor: '#key-takeaways' },
        { label: '快速判断：本地vs云', anchor: '#quick-decision' },
        { label: '限制1：速度', anchor: '#speed-limitations' },
        { label: '限制2：质量', anchor: '#quality-limitations' },
        { label: '限制3：硬件', anchor: '#hardware-requirements' },
        { label: '限制4：设置时间', anchor: '#setup-time' },
        { label: '限制5：上下文窗口', anchor: '#context-window' },
        { label: '限制6：无实时保障', anchor: '#no-realtime-guarantees' },
        { label: '不应该使用本地LLM的情况', anchor: '#when-not-to-use' },
        { label: '按用途选择最佳本地LLM', anchor: '#best-choice' },
        { label: '快速对比', anchor: '#quick-facts' },
        { label: '常见问题', anchor: '#faqs' },
        { label: '参考和资源', anchor: '#sources' }
      ],
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '本地LLM的限制：本地模型无法做什么（以及何时应该使用云API）',
        description: '本地LLM vs 云：6个限制（速度、质量、硬件）。企业决策框架。基准测试+成本对比。',
        datePublished: '2026-04-04',
        dateModified: '2026-04-18',
        url: 'https://www.promptquorum.com/local-llms/local-llm-limitations?lang=zh',
        inLanguage: 'zh',
        about: [
          { '@type': 'Thing', 'name': '本地LLM' },
          { '@type': 'Thing', 'name': 'Cloud API' },
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' }
        ],
        mentions: [
          { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
          { '@type': 'SoftwareApplication', 'name': 'Claude 3.5 Sonnet (2024)' },
          { '@type': 'Thing', 'name': 'Llama 2' },
          { '@type': 'Thing', 'name': 'Mistral' }
        ],
        author: {
          '@type': 'Organization',
          'name': 'PromptQuorum'
        },
        publisher: {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          { '@type': 'Question', name: '本地LLM比Cloud API慢吗？', acceptedAnswer: { '@type': 'Answer', text: '是的，明显慢。CPU推理每秒生成10–25个token。Cloud API（GPT-4o）每秒生成80–150个token。即使用GPU（RTX 4090）也只能达到130–160 token/秒。云的速度快4–10倍。' } },
          { '@type': 'Question', name: '我能在笔记本电脑上运行70B模型吗？', acceptedAnswer: { '@type': 'Answer', text: '不能。70B模型至少需要40 GB RAM或VRAM。具有16 GB的笔记本电脑最多只能运行压缩的13B模型。70B模型需要Mac Studio、工作站或多GPU设置（成本：$3,000+）。' } },
          { '@type': 'Question', name: '最好的本地LLM是什么？', acceptedAnswer: { '@type': 'Answer', text: '16 GB RAM：Llama 2 13B或Mistral 7B（质量≈GPT-3.5）。40 GB RAM：Llama 3.3 70B或Qwen 72B（质量≈GPT-4）。使用Q4_K_M量子化以获得最佳效率。最高质量：Cloud API（GPT-4o、Claude 3.5 Sonnet (2024)）。' } },
          { '@type': 'Question', name: '我能离线使用本地模型吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，这是主要优势。下载后，一切在本地运行——不需要互联网。Cloud API始终需要网络连接，但提供自动更新和可用性保证。' } },
          { '@type': 'Question', name: '本地LLM的最大上下文窗口是多少？', acceptedAnswer: { '@type': 'Answer', text: '大多数本地模型支持4K–32K token上下文。Llama 2默认4K，但可扩展至32K。Cloud API提供更多：GPT-4o = 128K，Claude 3.5 Sonnet (2024) = 200K。大文档云更好。' } },
          { '@type': 'Question', name: '本地LLM需要GPU吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要，但强烈推荐。CPU推理慢10–50倍。带GPU（RTX 4090、RTX 4070）可达50–160 token/秒。仅CPU：10–25 token/秒，实时聊天不可行。' } },
          { '@type': 'Question', name: '本地LLM要花多少钱？', acceptedAnswer: { '@type': 'Answer', text: '免费下载和运行（Ollama免费）。硬件贵：GPU（RTX 4090）= $1,600+，Mac Studio = $2,000+。Cloud API：每1,000 token $0.01–0.10。小到中等规模的云更便宜。' } },
          { '@type': 'Question', name: '我应该用Ollama还是LM Studio？', acceptedAnswer: { '@type': 'Answer', text: 'Ollama是CLI，更快，易于自动化。LM Studio有GUI，适合初学者。生产和API：Ollama。探索性实验：LM Studio。两者运行相同的模型。' } },
          { '@type': 'Question', name: '我能在本地运行GPT-4o吗？', acceptedAnswer: { '@type': 'Answer', text: '不能，OpenAI不提供GPT-4o权重。GPT-4o仅通过OpenAI API提供。本地开源替代方案（Llama 3.3 70B、Qwen 72B）提供类似质量（非完全相同）。GPT-4o质量保证：Cloud API。' } },
          { '@type': 'Question', name: '设置本地LLM需要多长时间？', acceptedAnswer: { '@type': 'Answer', text: '总共20–40分钟。(1)安装Ollama/LM Studio：2–3分钟。(2)下载7B模型（4 GB）：5–10分钟。(3)配置GPU（可选，CUDA/Metal）：5–10分钟。Cloud API：从开始到第一次API调用5分钟。' } },
          {
            '@type': 'Question',
            name: '我应该使用本地LLM还是云API？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '如果隐私至关重要则使用本地。如果速度或实时数据至关重要则使用云。不确定？用PromptQuorum测试两者——同时将一个prompt发送到本地Ollama和25+个云模型，比较您特定任务的质量。'
            }
          },
          {
            '@type': 'Question',
            name: '本地LLM比云API快吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '不快。云API每秒生成80–150个token。本地LLM在CPU上每秒生成10–25个token——慢4–10倍。GPU帮助：NVIDIA RTX 4090达到每秒130–160个token，与云相当，但成本$1,600+。'
            }
          },
          {
            '@type': 'Question',
            name: '本地LLM比云便宜吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '取决于使用量。本地成本$800–2,000硬件初期费用。云成本月$5–50。轻度用户(<100K tokens/月)云更便宜。重度用户(>1000万tokens/月)本地在6–12个月内回本。'
            }
          },
          {
            '@type': 'Question',
            name: '何时应该使用本地LLM而不是云？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '使用本地时：隐私至关重要(数据不离开设备)、有足够硬件(16+ GB RAM或70B用40+ GB)、不需要实时信息、可接受设置复杂性。使用云时：速度至关重要、需要实时数据访问、硬件受限(<8 GB RAM)、或需要前沿级推理。'
            }
          },
          {
            '@type': 'Question',
            name: '本地LLM的主要限制是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '六个主要限制：(1)复杂推理对前沿云模型质量更低、(2)消费硬件推理慢4–10倍、(3)硬件要求高($800–2,000初期)、(4)无实时信息访问(训练截止日期)、(5)设置复杂性(20–40分钟对云5分钟)、(6)上下文窗口受限(本地4K–128K tokens对云1M+)。'
            }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '何时应使用Cloud API',
        inLanguage: 'zh',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '实时聊天机器人', description: '用户期望< 2秒响应。Cloud API快4–10倍。' },
          { '@type': 'ListItem', position: 2, name: '大批量处理', description: '1,000+文件/天。云自动扩展；本地GPU变成瓶颈。' },
          { '@type': 'ListItem', position: 3, name: '生产SLA要求', description: '99.9%+可用性。云保证SLA；本地硬件需要冗余（成本）。' },
          { '@type': 'ListItem', position: 4, name: '最高输出质量（代码、分析）', description: 'GPT-4o和Claude 3.5 Sonnet (2024)在基准测试中高10–20个百分点。' },
          { '@type': 'ListItem', position: 5, name: '长上下文窗口', description: '100K+token。Cloud API（GPT-4o 128K、Claude 200K）处理大型文件；本地限制4K–32K。' },
          { '@type': 'ListItem', position: 6, name: '无需维护', description: '云=零维护、自动更新。本地需要IT管理CUDA驱动、固件、监控。' }
        ]
      },
      gammaEmbedUrl: '/presentations/local-llm-limitations-static.html',
      gammaDescription: '14张幻灯片交互式演示文稿：本地LLM的6个限制、硬件要求（8–40 GB RAM）、速度对比（CPU 10–25 token/秒vs云80–150 token/秒）、质量差距（MMLU、HumanEval基准）、设置时间（本地20–40分钟vs云5分钟）、判断树（本地vs云）。包含PDF下载功能。',
      sections: {
        inOneSentence: {
          title: '一句话说明',
          content: '本地LLM提供隐私但速度慢4–10倍，需要最低16 GB硬件，质量低于Cloud API——仅用于离线场景或非紧急批处理。'
        },
        inPlainTerms: {
          title: '简单来说',
          content: [
            '<strong>本地LLM ：</strong> 将语言模型下载到电脑（Ollama、LM Studio）。所有数据保持私密。缺点：慢、能力有限、设置复杂。',
            '<strong>Cloud API（GPT-4o、Claude） ：</strong> 将文本发送到远程服务器，< 1秒获得响应。快速聪慧，但要花钱（约每1,000个字符$0.01）。',
            '<strong>决定 ：</strong> 本地用于隐私和离线。云用于速度和质量。'
          ]
        },
        tldr: {
          isTldr: true,
          title: '要点总结',
          content: [
            '✓ 本地模型慢4–10倍（CPU：10–25 token/秒vs云：80–150 token/秒）。',
            '✓ 质量差距：7B模型在MMLU和HumanEval基准上比GPT-4o低10–20分。',
            '✓ 硬件要求：可用最低16 GB RAM；最高质量40 GB（70B模型）。',
            '✓ 设置时间：本地20–40分钟（下载+配置）；云API 5分钟内准备就绪。',
            '✓ 上下文窗口：本地4K–32K；云128K–200K（GPT-4o、Claude）。云更好处理大文档。',
            '✓ 本地最佳用途：数据机密任务、离线场景、非紧急批处理。',
            '✓ 云最佳用途：实时聊天、大批量处理、生产SLA、最高质量。'
          ]
        },
        quickDecision: {
          title: '快速判断：本地或云？',
          content: [
            '<strong>使用本地当：</strong>',
            '• 不能将数据发送到远程服务器（隐私、数据法）。',
            '• 必须离线工作（无互联网）。',
            '• 安全性优先于速度。',
            '• 用例非紧急（批量分析、文件处理）。',
            '',
            '<strong>使用云当：</strong>',
            '• 实时性能关键（聊天、实时分析）。',
            '• 需要最高质量（代码、复杂推理）。',
            '• 处理高流量（1,000+文件/天）。',
            '• 不想管理基础设施（零维护）。',
            '• 需要长上下文窗口（100K+token）。'
          ]
        },
        quickDecisionMatrix: {
          id: 'decision-matrix',
          title: '快速判断矩阵：本地LLM vs 云API',
          columns: ['任务', '本地LLM', '云API', '推荐'],
          rows: [
            { '任务': '隐私敏感数据', '本地LLM': '数据不离开设备', '云API': '发送到远程服务器（需DPA）', '推荐': '✅ 本地' },
            { '任务': '实时聊天（< 2秒）', '本地LLM': '5–10秒（CPU）', '云API': '0.5–1秒', '推荐': '✅ 云' },
            { '任务': '代码生成', '本地LLM': '45–55% HumanEval（7B）', '云API': '90% HumanEval（GPT-4o）', '推荐': '✅ 云' },
            { '任务': '文档摘要', '本地LLM': '可行（7B足够）', '云API': '可行+更快', '推荐': '⚖️ 任一都行' },
            { '任务': '零API成本', '本地LLM': '$0/token（硬件后）', '云API': '每1K token $0.01–0.05', '推荐': '✅ 本地（高用量）' },
            { '任务': '离线/无互联网', '本地LLM': '完全离线', '云API': '需互联网', '推荐': '✅ 本地' },
            { '任务': '大上下文（100K+token）', '本地LLM': '4K–32K token限制', '云API': '128K–200K token', '推荐': '✅ 云' },
            { '任务': '生产SLA（99.9%）', '本地LLM': '无SLA（硬件可能失败）', '云API': '99.9%可用时间保证', '推荐': '✅ 云' },
          ],
        },
        decisionFlowchart: {
          id: 'decision-flowchart',
          title: '30秒决策树',
          content: [
            '**问题1：数据隐私是否关键（法律、医疗、保密）?**',
            '- ✓ 是 → **使用本地。** 隐私是主要优势。',
            '- ✗ 否 → 下一个问题。',
            '',
            '**问题2：您需要实时信息（新闻、价格、当前事件）吗?**',
            '- ✓ 是 → **使用云。** 本地模型有训练截止日期。',
            '- ✗ 否 → 下一个问题。',
            '',
            '**问题3：您能负担40+ GB RAM或$1,600+ GPU吗?**',
            '- ✓ 是 → **使用本地70B。** 质量与云相当，无持续成本。',
            '- ✗ 否 → **使用云。** 比低配本地更实用。',
            '',
            '**问题4：仍然不确定?** [用PromptQuorum测试两者](/?lang=zh)。',
          ],
        },
        promptquorumCta: {
          id: 'test-both',
          title: '还在犹豫？承诺前先测试',
          content: [
            '如果您为自己的特定任务在本地和云之间纠结，使用[PromptQuorum免费](/?lang=zh):',
          ],
          items: [
            '同时将一个提示发送到本地Ollama和25+个云模型',
            '并排比较输出质量',
            '在您的数据上看到实际的速度、成本和质量差异',
            '用真实结果而不是理论进行决策',
          ],
        },
        qualityGap: {
          title: '限制2：质量差距——本地模型赶不上GPT-4o',
          content: ['本地7B模型在标准基准（MMLU、HumanEval）上比GPT-4o低10–20分。听起来不多，但实际上：推理弱、代码和数学错误多、细微理解不足。', '本地模型的限制与更广泛的LLM约束重叠——幻觉、推理失败和知识截止影响所有模型，无论如何部署。了解LLM至今仍无法可靠完成的完整内容，请参阅[AI局限性：LLM不能做什么](https://www.promptquorum.com/prompt-engineering/ai-limitations-what-llms-cant-do)。'],
          image: '/images/local-llm-limitations-quality-benchmarks-zh.svg',
          columns: ['模型', 'MMLU（一般知识）', 'HumanEval（Python编码）'],
          rows: [
            { '模型': '本地7B', 'MMLU（一般知识）': '62–68%', 'HumanEval（Python编码）': '45–55%' },
            { '模型': '本地70B', 'MMLU（一般知识）': '75–80%', 'HumanEval（Python编码）': '65–75%' },
            { '模型': 'GPT-4o', 'MMLU（一般知识）': '88.7%', 'HumanEval（Python编码）': '90.2%' }
          ]
        },
        whenQualityMatters: {
          title: '质量真正重要的时候',
          decisionBlock: {
            title: '质量真正重要的时候',
            localIf: [
              '需要文本摘要（鲁棒）',
              '情感分析足够（7B也可靠）',
            ],
            cloudIf: [
              '代码生成和调试（本地7B错误率35–45% vs GPT-4o 10%）',
              '金融或医疗分析（错误很昂贵）',
              '3步以上复杂推理',
            ],
            quick: [
              '简单任务→本地OK',
              '复杂任务→云',
            ],
          }
        },
        speed: {
          title: '限制1：速度——本地CPU慢4–10倍',
          content: '这是最大的实际限制。本地CPU每秒生成10–25个token。Cloud API每秒80–150。用户感觉：本地=多秒等待；云=即刻< 1秒。',
          image: '/images/local-llm-limitations-speed-comparison-zh.svg'
        },
        whenSpeedMatters: {
          title: '速度重要的时候',
          decisionBlock: {
            title: '速度重要的时候',
            localIf: [
              '交互式聊天能容忍10–25 token/秒',
              '隐私优先于延迟',
            ],
            cloudIf: [
              '处理大批量（100+文件）',
              '需要< 1秒响应保持',
            ],
            quick: [
              '交互式→本地OK',
              '高吞吐→云',
            ],
          }
        },
        hardware: {
          title: '限制3：硬件——最低16–40 GB RAM',
          content: '本地模型需要RAM。7B量子化（Q4_K_M）约4GB；70B约40GB。加上OS、系统内存、上下文=最低16 GB RAM是可用。成本高（GPU：$1,600+、Mac Studio：$2,000+）。',
          image: '/images/local-llm-limitations-hardware-requirements-zh.svg'
        },
        whenHardwareMatters: {
          title: '硬件成为限制因素的时候',
          decisionBlock: {
            title: '硬件成为限制因素的时候',
            localIf: [
              '有16+ GB RAM',
              '使用7B–13B模型',
            ],
            cloudIf: [
              '仅8 GB RAM（笔记本）',
              '想运行> 13B模型（需24–40 GB）',
              '服务> 30同时用户（仅多GPU可扩展）',
            ],
            quick: [
              '中档硬件→本地OK',
              '硬件有限→云',
            ],
          }
        },
        noInternet: {
          title: '限制6：无实时保障——本地易崩溃',
          content: '本地LLM不保证运行时间。笔记本冻结、Ollama崩溃、CUDA驱动出错：无帮助，只有停机。Cloud API（OpenAI、Anthropic）保证99.9%可用性（SLA）。生产=云更好。'
        },
        whenRealtimeMatters: {
          title: '可用性关键的时候',
          decisionBlock: {
            title: '可用性关键的时候',
            localIf: [
              '5–10个用户的内部工具',
              '试验和开发',
            ],
            cloudIf: [
              '客户依赖的生产应用',
              '金融交易或医疗应用',
              '高可用性必需（停机很贵）',
            ],
            quick: [
              '内部仅用→本地OK',
              '生产SLA→云',
            ],
          }
        },
        contextWindow: {
          title: '限制5：上下文窗口——本地最多32K vs云128K–200K',
          content: '上下文窗口=模型记忆长度。本地模型通常支持4K–32K token（约8K–64K词）。Cloud API提供128K–200K。意思是：本地最多一次处理50–80页文本；云可一次分析整本书（> 300页）。'
        },
        whenContextMatters: {
          title: '大上下文窗口重要的时候',
          decisionBlock: {
            title: '大上下文窗口重要的时候',
            localIf: [
              '一篇论文或章节（< 20页）一次',
              '短聊天会话（< 10条消息）',
            ],
            cloudIf: [
              '整本书/长文档一次分析',
              '长对话历史（> 20条消息）',
              'RAG系统大文件集',
            ],
            quick: [
              '小文件→本地OK',
              '大上下文→云',
            ],
          }
        },
        setup: {
          title: '限制4：设置时间——本地20–40分钟vs云5分钟',
          content: '本地设置费时：安装Ollama（3分钟）、下载模型（5–60分钟，取决于大小）、配置GPU（5–10分钟）。Cloud API：邮件注册（1分钟）、复制API密钥（1分钟）、首次API调用（3分钟）。云明显赢。',
          image: '/images/local-llm-limitations-setup-time-zh.svg'
        },
        whenSetupMatters: {
          title: '快速设置重要的时候',
          decisionBlock: {
            title: '快速设置重要的时候',
            localIf: [
              '一次设置，长期使用',
              '内部IT团队能构建基础设施',
            ],
            cloudIf: [
              '今天想变得有生产力',
              '快速原型设计/黑客松',
              '最小IT基础设施',
            ],
            quick: [
              '长期项目→本地OK',
              '快速开始→云',
            ],
          }
        },
        regionalContext: {
          title: '按合规要求分类：本地vs云',
          content: [
            '<strong>中国（2021年数据安全法）：</strong> 所有个人数据处理必须在中国进行（阿里云、腾讯云、华为云）。本地LLM在本地硬件上推荐使用。强烈推荐Qwen2.5用于中国企业满足数据驻地要求。Cloud API仅能与本地合作伙伴（如通过阿里的Qwen）一起接受。',
            '<strong>亚太地区（数据跨境规制）：</strong> 各地区有不同的数据驻地要求。多个ASEAN/APAC合规模式。本地推理几乎总是允许且推荐的。用于金融、医疗、法律的企业部署：本地控制的数据处理关键。',
            '<strong>企业部署（金融、医疗、法律）：</strong> 大型企业（银行、医院、律师事务所）的监管合规：本地LLM提供最大安全保障。实施本地推理确保：数据主权、审计轨迹完整、行业标准合规（PCI-DSS、HIPAA、GDPR）。'
          ]
        },
        whenCloud: {
          title: 'Cloud API的最佳用例',
          items: [
            '<strong>实时聊天机器人：</strong> 用户期望< 2秒。本地：5–10秒（4–10倍慢）。云：0.5–1秒（4–10倍快）。',
            '<strong>大批量处理：</strong> 1,000+文件/天。本地GPU变瓶颈；云用并行处理自动扩展。',
            '<strong>代码生成：</strong> GPT-4o = 90%代码精度；本地7B = 45–55%。生产代码：云。',
            '<strong>长文件（100K+token）：</strong> GPT-4o 128K上下文；Llama 2最多32K。整本书、论文：云。',
            '<strong>零维护：</strong> 云=自动更新、补丁、监控。本地=IT管理CUDA驱动、固件、运行时间。',
            '<strong>高可用性：</strong> 云提供99.9% SLA；本地=脆弱（崩溃=停机）。'
          ]
        },
        whenNotToUse: {
          title: '不应该使用本地LLM的情况',
          content: [
            '<strong>❌ 生产无SLA备份时不用本地：</strong> 如果服务处理客户数据且停机很贵。本地硬件会崩溃；云有冗余。',
            '<strong>❌ 复杂代码不用本地：</strong> 本地7B错误率35–45%，GPT-4o = 10%。生产代码太危险。',
            '<strong>❌ 无IT团队时不用本地：</strong> 如果你是独自开发者且没时间GPU设置/CUDA故障排除。云API生产力更快。',
            '<strong>❌ 速度>隐私时不用本地：</strong> 实时聊天=云速度必需。隐私可妥协（用DPA）如果性能关键。',
            '<strong>❌ > 30同时用户不用本地：</strong> 单GPU=瓶颈。云=水平扩展（贵但能用）。本地=mega基础设施项目。'
          ]
        },
        bestChoice: {
          title: '按用途选择最佳本地LLM',
          content: '所有用途：<strong>使用Ollama或LM Studio</strong>（都免费、支持相同模型）。',
          columns: ['用途', '16 GB RAM', '40+ GB RAM', '建议'],
          rows: [
            { '用途': '一般知识/Q&A', '16 GB RAM': 'Llama 2 13B', '40+ GB RAM': 'Llama 3.3 70B', '建议': '本地OK，或云获更好质量' },
            { '用途': '代码助手', '16 GB RAM': 'Mistral 7B', '40+ GB RAM': 'Codellama 34B', '建议': '云赢（GPT-4o 90% vs 50%）' },
            { '用途': '文本生成/写作', '16 GB RAM': 'Mistral 7B、Qwen 7B', '40+ GB RAM': 'Llama 3.3 70B、Qwen 72B', '建议': '本地OK' },
            { '用途': '敏感数据处理', '16 GB RAM': 'Llama 2 13B（GDPR OK）', '40+ GB RAM': 'Llama 3.3 70B（最高质量）', '建议': '本地推荐（私密+合规）' },
            { '用途': '聊天助手（实时）', '16 GB RAM': '不推荐（太慢）', '40+ GB RAM': 'GPU必需（RTX 4090）', '建议': '云（GPT-4o、Claude）— 4–10倍快' },
            { '用途': '批量分析（100+文件）', '16 GB RAM': '本地OK、耗时', '40+ GB RAM': '本地赢（云无成本）', '建议': '夜间运行本地' }
          ]
        },
        quickFacts: {
          title: '快速对比：本地vs云',
          columns: ['指标', '本地（Ollama/LM Studio）', '云（OpenAI/Anthropic）'],
          rows: [
            { '指标': '速度', '本地（Ollama/LM Studio）': '10–160 token/秒（CPU/GPU）', '云（OpenAI/Anthropic）': '80–150 token/秒' },
            { '指标': '质量（基准）', '本地（Ollama/LM Studio）': '7B: 62–68% MMLU；70B: 75–80%', '云（OpenAI/Anthropic）': 'GPT-4o: 88.7% MMLU' },
            { '指标': '硬件', '本地（Ollama/LM Studio）': '16–40 GB RAM或GPU', '云（OpenAI/Anthropic）': '无需硬件' },
            { '指标': '设置时间', '本地（Ollama/LM Studio）': '20–40分钟', '云（OpenAI/Anthropic）': '5分钟' },
            { '指标': '隐私', '本地（Ollama/LM Studio）': '100%私密（GDPR OK）', '云（OpenAI/Anthropic）': '需DPA' },
            { '指标': '可用性', '本地（Ollama/LM Studio）': '无SLA（脆弱）', '云（OpenAI/Anthropic）': '99.9% SLA' },
            { '指标': '成本', '本地（Ollama/LM Studio）': 'GPU $1.600+（一次）', '云（OpenAI/Anthropic）': '每1K token $0.01–0.10' },
            { '指标': '上下文', '本地（Ollama/LM Studio）': '4K–32K token', '云（OpenAI/Anthropic）': '128K–200K token' }
          ]
        },
        faqSection: {
          title: '常见问题',
          faqs: [
            { q: '本地LLM比Cloud API慢吗？', a: '是的，明显。CPU = 10–25 token/秒，云= 80–150 token/秒。实时聊天本地太慢。批处理本地OK。' },
            { q: '我能在笔记本上运行70B模型吗？', a: '不能。70B需要40 GB RAM/VRAM最少。16 GB笔记本最多只能运行压缩13B。' },
            { q: '最好的本地LLM是什么？', a: 'Llama 2 13B或Mistral 7B（16GB；≈GPT-3.5）。Llama 3.3 70B（40GB；≈GPT-4）。最高质量：Cloud API。' },
            { q: '我能离线使用本地LLM吗？', a: '可以，主要优势。下载后本地运行——不需互联网。云API总是需网络。' },
            { q: '本地上下文最大多少？', a: '通常4K–32K token。云API = 128K–200K（GPT-4o、Claude）。大文件云更好。' },
            { q: '本地LLM需要GPU吗？', a: '不需但强烈推荐。CPU = 10–25 token/秒（太慢）。GPU = 50–160 token/秒（可用）。实时聊天GPU必需。' },
            { q: '本地LLM要花多少钱？', a: '下载运行免费。硬件贵（GPU ¥270,000+）。云：每1K token $0.01–0.10。小量云更便宜。' },
            { q: '用Ollama还是LM Studio？', a: 'Ollama = CLI、快速、易自动化。LM Studio = GUI、初学者。生产 = Ollama。试验 = LM Studio。两者运行相同模型。' },
            { q: '能在本地运行GPT-4o吗？', a: '不能，OpenAI不提供GPT-4o权重。GPT-4o只通过OpenAI API。本地替代方案（Llama 70B、Qwen 72B）相似、非完全相同。' },
            { q: '设置本地LLM需多久？', a: '总共20–40分钟。(1)安装2–3分钟。(2)下载5–10分钟。(3)GPU配置（可选）5–10分钟。云：5分钟。' },
            { q: '我应该使用本地LLM还是云API？', a: '如果隐私至关重要则使用本地。如果速度或实时数据至关重要则使用云。不确定？用PromptQuorum测试两者——同时将一个prompt发送到本地Ollama和25+个云模型，比较您特定任务的质量。' },
            { q: '本地LLM比云API快吗？', a: '不快。云API每秒生成80–150个token。本地LLM在CPU上每秒生成10–25个token——慢4–10倍。GPU帮助：NVIDIA RTX 4090达到每秒130–160个token，与云相当，但成本$1,600+。' },
            { q: '本地LLM比云便宜吗？', a: '取决于使用量。本地成本$800–2,000硬件初期费用。云成本月$5–50。轻度用户(<100K tokens/月)云更便宜。重度用户(>1000万tokens/月)本地在6–12个月内回本。' },
            { q: '何时应该使用本地LLM而不是云？', a: '使用本地时：隐私至关重要(数据不离开设备)、有足够硬件(16+ GB RAM或70B用40+ GB)、不需要实时信息、可接受设置复杂性。使用云时：速度至关重要、需要实时数据访问、硬件受限(<8 GB RAM)、或需要前沿级推理。' },
            { q: '本地LLM的主要限制是什么？', a: '六个主要限制：(1)复杂推理对前沿云模型质量更低、(2)消费硬件推理慢4–10倍、(3)硬件要求高($800–2,000初期)、(4)无实时信息访问(训练截止日期)、(5)设置复杂性(20–40分钟对云5分钟)、(6)上下文窗口受限(本地4K–128K tokens对云1M+)。' }
          ]
        },
        sources: {
          title: '参考和资源',
          items: [
            '[Ollama — 下载与安装](https://ollama.ai)',
            '[LM Studio — 本地LLM GUI](https://lmstudio.ai)',
            '[Llama 2 Model Card（Meta）](https://huggingface.co/meta-llama/Llama-2-70b)',
            '[HumanEval基准（OpenAI）](https://github.com/openai/human-eval)',
            '[MMLU基准（AI2）](https://github.com/jair-bolt/mmlu)',
            '[OpenAI GPT-4o技术报告](https://openai.com/research/gpt-4)',
            '[Anthropic Claude 3.5 Model Card](https://www.anthropic.com/)',
            '[中国数据安全法（2021）](https://www.cac.gov.cn)',
            '[阿里云LLM合规指南](https://www.aliyun.com)',
            '[Qwen API文档与合规](https://dashscope.aliyun.com)'
          ]
        },
        commonMistakes: {
          title: '本地LLM常见错误',
          numberedItems: [
            '<strong>错误量子化：</strong> Q8或Q6需要太多RAM。用Q4_K_M（最佳平衡）或Q3_K_M（< 16GB）。',
            '<strong>模型太小：</strong> 3B模型基本无用。最小：7B。更好：13B。',
            '<strong>无GPU加速：</strong> CPU慢50倍。即使便宜GPU（RTX 4060）也值得。',
            '<strong>忽视初始延迟：</strong> 首个token = 2–5秒（启动时间）。之后更快。',
            '<strong>上下文窗口太大：</strong> 32K上下文= 8倍内存。从4K–8K开始。',
            '<strong>无Docker容器化：</strong> Ollama Docker可移植且可维护。原生安装=驱动混乱。'
          ]
        },
        relatedReading: {
          title: '相关文章',
          items: [
            '[本地LLM需多少VRAM？（硬件指南）](/local-llms/how-much-vram-local-llm?lang=zh)',
            '[Ollama安装：分步指南](/local-llms/how-to-install-ollama?lang=zh)',
            '[LM Studio vs. Ollama：选哪个？](/local-llms/lm-studio-vs-ollama?lang=zh)',
            '[2026最佳本地模型对比](/local-llms/best-local-llm-models?lang=zh)',
            '[本地LLM提示工程（技巧和诀窍）](/prompt-engineering/prompt-engineering-local-llms?lang=zh)'
          ]
        }
      }
    },
  };
