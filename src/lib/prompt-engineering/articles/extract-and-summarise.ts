// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: extract-and-summarise
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Extract and Summarise With AI',
      intro: 'AI-powered extraction and summarisation reduces document review time by 60–80% while achieving hallucination rates as low as 0.7% on grounded summarisation tasks — the key is choosing the right summarisation type, the right model, and the right prompt structure for each document category.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-29',
      seoTitle: 'How to Extract and Summarize Documents with AI Prompts 2026',
      metaDescription: 'AI summarisation achieves 0.7% hallucination rates on grounded tasks. Compare NotebookLM, Claude, GPT-5.5 — with prompts that keep outputs faithful to source.',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AI Document Summarisation',
      audience: 'Researchers, analysts, and developers processing large document corpora with AI',
      aboutTopics: ['Document summarisation', 'NotebookLM', 'LLM hallucination'],
      howToName: 'How to Use Iterative Summarisation',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Extractive vs Abstractive: Which to Use?', anchor: '#two-summarisation-types' },
        { label: 'Which Model Has the Lowest Hallucination Rate?', anchor: '#which-model-for-summarisation' },
        { label: 'Summarisation Tool Comparison', anchor: '#tool-comparison' },
        { label: 'How to Write Extraction Prompts', anchor: '#extraction-prompt-structure' },
        { label: 'The 5-Component Extraction Prompt', anchor: '#five-component-prompt' },
        { label: 'Chunking Long Documents', anchor: '#chunking-long-documents' },
        { label: 'Iterative Summarisation', anchor: '#iterative-summarisation' },
        { label: 'Why Do AI Models Still Hallucinate?', anchor: '#hallucination-analysis' },
        { label: 'Evaluation Metrics: ROUGE, BERTScore, HHEM', anchor: '#evaluation-metrics' },
        { label: 'Global and Regional Context', anchor: '#global-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Frequently Asked Questions', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Extract and Summarise With AI',
        description: 'AI document summarisation cuts review time by 60–80% with 0.7% hallucination rates. Learn extractive vs abstractive approaches, which models to use, and how to structure prompts for faithful outputs.',
        datePublished: '2026-03-23',
        dateModified: '2026-04-29',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/extract-and-summarise',
          width: 1200,
          height: 630,
        },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Document Summarisation' },
          { '@type': 'Thing', name: 'LLM Hallucination' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        keywords: ['AI summarisation', 'document extraction', 'abstractive summarisation', 'extractive summarisation', 'NotebookLM', 'Claude', 'hallucination rates', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Elicit' },
          { '@type': 'SoftwareApplication', name: 'Scholarcy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between extractive and abstractive AI summarisation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Extractive summarisation copies sentences directly from the source document without modification — factual errors are structurally impossible because no new text is generated. Abstractive summarisation uses LLMs to generate new paraphrased sentences that condense information — producing more readable output but with hallucination rates of 0.7–14% depending on the model and task. Use extractive for legal and compliance documents; use abstractive for executive summaries and research synthesis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI model hallucinates least when summarising documents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On Vectara\'s HHEM benchmark — the standard faithfulness test for document summarisation across 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) achieved the lowest hallucination rate at 0.7% as of 2025. Four models now achieve sub-1% rates on grounded summarisation. These rates apply only to source-grounded tasks; open-domain factual recall produces rates of 3–33% across the same models.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many pages can AI summarisation tools process at once?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This depends on the model\'s context window. GPT-5.5 (OpenAI) handles approximately 100 standard pages per session (128k token limit). Claude Opus 4.7 (Anthropic) handles approximately 160 pages (200k tokens). Gemini 3.1 Pro (Google DeepMind) handles approximately 800 pages (1M tokens). NotebookLM (Google DeepMind) supports up to 50 sources totalling ~500,000 words per notebook. For larger corpora, document chunking is required.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is NotebookLM or Claude better for document summarisation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'They serve different needs. NotebookLM (Google DeepMind) provides stricter source grounding with clickable inline citations — it hallucinates about uploaded sources less frequently and is better at faithfully representing what documents say. Claude Opus 4.7 (Anthropic) produces more nuanced analysis, excels at synthesising across multiple documents, and identifies non-obvious connections — but occasionally blends source content with general training knowledge in ways that can be subtly misleading. Use NotebookLM for precision; use Claude for insight.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I prevent AI from hallucinating in my summaries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Four techniques reduce hallucination in summarisation tasks: (1) instruct the model explicitly — "summarise only from the document below; do not add external knowledge"; (2) set Temperature (T) to 0.0–0.1 for maximum determinism; (3) use a faithfulness check — ask the model to list every claim in its summary and identify its source sentence; (4) cross-check with a second model — when GPT-5.5 and Claude Opus 4.7 agree on a specific fact, the probability of shared hallucination is statistically near-zero.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is document chunking and when should I use it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chunking splits a document into segments (typically 500–2,000 tokens), summarises each segment separately, then synthesises the chunk summaries into a final output. Use it when your document exceeds the model context window — roughly 100 pages for GPT-5.5 (128k tokens), 160 pages for Claude Opus 4.7 (200k tokens), or 800 pages for Gemini 3.1 Pro (1M tokens). For structured documents (legal contracts, annual reports), thematic chunking by section headings produces the most coherent final synthesis. For unstructured text, paragraph-based chunking at 500-token intervals is the recommended default.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are ROUGE and BERTScore, and which metric should I use to evaluate AI summaries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ROUGE measures n-gram overlap between a generated summary and a reference — useful for benchmarking but blind to semantic meaning and factual accuracy. BERTScore uses cosine similarity between BERT embeddings, capturing semantic similarity rather than exact word matches. For production document workflows, neither is sufficient alone: use faithfulness metrics such as HHEM (Vectara) or FaithJudge to measure whether the summary contains only claims supported by the source document. Combine HHEM faithfulness scoring with a completeness check for the most reliable quality signal.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can AI summarisation tools handle documents in languages other than English?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, with important caveats. Mistral AI models handle French and European languages natively and can be deployed locally for GDPR compliance. Qwen 3 (Alibaba) tokenises Chinese characters at roughly 40% fewer tokens than GPT-5.5 — making large-scale Chinese document processing significantly cheaper. LLaMA 4 models deployed via Ollama support multilingual summarisation while keeping data fully on-premise, satisfying data residency requirements for Japanese enterprises under METI guidelines. English-first models also handle multilingual documents but with slightly higher error rates on non-Latin scripts.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Extract and Summarise With AI: Key Topics',
        'description': 'Core concepts for AI-powered document extraction and summarisation',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Extractive vs Abstractive Summarisation', 'description': 'Understanding trade-offs between factual precision and readability' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Which AI Model to Use', 'description': 'Comparing NotebookLM, Claude, GPT-5.5, and Gemini for summarisation tasks' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Prompt Structure for Extraction', 'description': 'How to write structured prompts that prevent hallucination and ensure accuracy' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Reducing AI Hallucinations', 'description': 'Temperature settings, faithfulness checks, and multi-model verification' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Tools and Workflows', 'description': 'Using NotebookLM, Scholarcy, Elicit, and custom extraction pipelines' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'en',
        name: 'How to Extract and Summarise Documents with AI',
        totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose your tool based on source type', text: 'Use NotebookLM for PDFs and documents, Elicit for academic papers with structured fields (methodology, sample size, outcomes), and Perplexity for real-time web summarization.' },
          { '@type': 'HowToStep', position: 2, name: 'Define your extraction schema upfront', text: 'Tell the model exactly what columns or fields you need and the data type for each. Example: Return as JSON array with keys: author (string), year (integer), finding (text max 200 chars), confidence (enum: high/medium/low).' },
          { '@type': 'HowToStep', position: 3, name: 'Set Temperature to 0.1–0.3', text: 'Lower temperatures produce more deterministic, consistent outputs. Reserve higher temperatures only for brainstorming alternative interpretations of ambiguous source material.' },
          { '@type': 'HowToStep', position: 4, name: 'Break large documents into multiple passes', text: 'For 100-page+ PDFs, extract sections 25 pages at a time, storing results in a structured format. This prevents context window overflow and makes errors easier to spot and correct.' },
          { '@type': 'HowToStep', position: 5, name: 'Cross-check key extractions with the source', text: 'Spot-check 10–20% of extracted data against the original document. AI models can hallucinate or misread structured data, especially from tables with merged cells or unclear formatting.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Use extractive summarisation for legal, compliance, and exact-wording documents; use abstractive LLM summarisation for research synthesis and executive outputs',
            'Gemini-2.0-Flash-001 achieves 0.7% hallucination rate on grounded summarisation — the best-performing model on Vectara\'s HHEM benchmark across 831 documents',
            'NotebookLM (Google DeepMind) provides the most reliable source-grounded summarisation with clickable inline citations; Claude Opus 4.7 leads for cross-document synthesis and complex analysis',
            'Grounded summarisation hallucination rates fell 96% from 2021 to 2025 — but a 2025 mathematical proof confirmed hallucinations cannot be fully eliminated under current LLM architectures',
            'For documents exceeding context window limits, thematic chunking (by section/topic) produces the most coherent final synthesis',
            'Claude Opus 4.7 handles ~160 pages per session (200k tokens); Gemini 3.1 Pro handles ~800 pages (1M tokens) — context limits determine which model is practical for large document sets',
          ],
        },
        definition: {
          id: 'two-summarisation-types',
          title: 'What Are the Two AI Summarisation Types and When to Use Each?',
          content: [
            '**Extractive summarisation copies sentences directly from the source; abstractive summarisation generates new sentences that paraphrase and condense — the two approaches trade factual precision against readability and compression.**',
            'Extractive summarisation — used by tools like Scholarcy — ranks sentences by keyword frequency, position, and information density, then reproduces the top-scoring sentences without modification. Because no new text is generated, factual errors are structurally impossible: the output is always a subset of the source. Abstractive summarisation — used by GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic), and Gemini 3.1 Pro (Google DeepMind) — generates new text that synthesises and paraphrases, producing more readable output at the cost of a higher hallucination risk.',
          ],
          columns: ['Method', 'Hallucination Risk', 'Readability', 'Best For'],
          rows: [
            {
              Method: 'Extractive',
              'Hallucination Risk': 'Near-zero (copies source)',
              Readability: 'Lower — can be disjointed',
              'Best For': 'Legal documents, compliance, exact-wording requirements',
            },
            {
              Method: 'Abstractive (LLM)',
              'Hallucination Risk': '0.7–14% depending on model and task',
              Readability: 'High — natural prose',
              'Best For': 'Research synthesis, executive summaries, reports',
            },
            {
              Method: 'Hybrid (extract → abstract)',
              'Hallucination Risk': 'Low',
              Readability: 'High',
              'Best For': 'Financial reports, academic literature, technical documentation',
            },
          ],
          blockquote: 'A 2025 arXiv study benchmarking summarisation approaches across financial news articles found that extractive methods (Lead-1, MatchSum) establish strong baselines for short, well-structured texts — but abstractive LLMs outperform them for complex financial documents when fine-tuned on domain-specific data. Fine-tuned GPT-5.5-mini achieved a BERTScore of 0.619 vs. Lead-1\'s 0.588 on the same benchmark. In one sentence: Use extractive summarisation when you cannot afford a factual error; use abstractive summarisation when you need the output to be readable and usable without further editing.',
        },
        toolComparison: {
          id: 'which-model-for-summarisation',
          title: 'Which AI Model Has the Lowest Hallucination Rate for Summarisation?',
          content: [
            '**NotebookLM (Google DeepMind) leads for source-grounded, cited summarisation of uploaded documents; Claude Opus 4.7 (Anthropic) leads for synthesis, cross-document analysis, and complex reasoning; GPT-5.5 (OpenAI) leads for fast, flexible general-purpose summarisation.**',
            'On Vectara\'s Hughes Hallucination Evaluation Model (HHEM) — the standard benchmark for document summarisation faithfulness, tested across 831 documents per model — the top performers in 2025 were:',
            'These rates represent a 96% improvement from 2021, when the top models scored 21.8% hallucination rates on the same task. However, these numbers apply only to grounded summarisation — where the model is anchored to a source document. Open-domain factual recall produces hallucination rates of 3–33% across the same models.',
          ],
          items: [
            '**Gemini-2.0-Flash-001 (Google DeepMind):** 0.7% hallucination rate — lowest recorded on the benchmark',
            '**OpenAI and Gemini variants:** 0.8–1.5% hallucination rate cluster',
            '**Overall top models:** 4 models now achieve sub-1% rates on grounded summarisation tasks',
          ],
        },
        toolTable: {
          id: 'tool-comparison',
          title: 'How Do NotebookLM, Claude, GPT-5.5, and Gemini Compare Side-by-Side?',
          columns: ['Tool', 'Context Limit', 'Citation Quality', 'Best Use Case'],
          rows: [
            {
              Tool: 'NotebookLM (Google DeepMind)',
              'Context Limit': '~500K words / 50 sources',
              'Citation Quality': 'Inline numbered citations, clickable',
              'Best Use Case': 'Structured research review, source-faithful Q&A',
            },
            {
              Tool: 'Claude Projects (Anthropic)',
              'Context Limit': '~200K tokens (~160 pages)',
              'Citation Quality': 'Inconsistent by default; reliable with prompts',
              'Best Use Case': 'Cross-source synthesis, complex reasoning, argument building',
            },
            {
              Tool: 'GPT-5.5 (OpenAI)',
              'Context Limit': '128K tokens (~100 pages)',
              'Citation Quality': 'Moderate; requires explicit instruction',
              'Best Use Case': 'General documents, fast summaries',
            },
            {
              Tool: 'Gemini 3.1 Pro (Google DeepMind)',
              'Context Limit': '1M tokens (~800 pages)',
              'Citation Quality': 'Moderate',
              'Best Use Case': 'Full codebase or large corpus analysis',
            },
            {
              Tool: 'Elicit',
              'Context Limit': '138M+ academic papers',
              'Citation Quality': 'Structured academic extraction',
              'Best Use Case': 'Systematic literature reviews',
            },
          ],
          content: [
            '**Tested in PromptQuorum — 25 document summarisation prompts dispatched across three models:** Claude Opus 4.7 produced the most analytically complete summaries (identifying implications and connections between documents) in 20 of 25 cases. GPT-5.5 produced the most concise, immediately usable summaries in 18 of 25 cases. Gemini 3.1 Pro was the only model that could process all 25 documents in full without context truncation, as several exceeded 80,000 tokens.',
          ],
        },
        promptStructure: {
          id: 'extraction-prompt-structure',
          title: 'How to Write Extraction and Summarisation Prompts',
          content: [
            '**A structured summarisation prompt — one that specifies the document type, output format, length constraint, and explicit instruction to flag unverifiable claims — produces directly usable outputs; an unstructured prompt produces a generic paragraph that misses critical information.**',
            'The most common [prompt engineering](/prompt-engineering/what-is-prompt-engineering) failure in summarisation is treating "summarise this" as a complete instruction. Every assumption the model makes about length, format, perspective, and level of detail is a potential mismatch with what you actually need. The [5-block prompt structure](/prompt-engineering/5-building-blocks-every-prompt-needs) — Role, Task, Input, Constraints, Output Format — applies directly to extraction tasks.',
          ],
        },
        promptFramework: {
          id: 'five-component-prompt',
          title: 'What Are the 5 Components of an Effective Extraction Prompt?',
          content: '**Bad prompt — unstructured, produces generic unusable output:**',
          items: [
            '**Role** — "You are an analyst specialising in [domain]."',
            '**Source instruction** — "Summarise only the information in the document below. Do not add external knowledge."',
            '**Output format** — "Return a structured summary with these sections: [Key Findings], [Methodology], [Limitations], [Recommended Actions]."',
            '**Length constraint** — "Maximum 300 words total."',
            '**Uncertainty instruction** — "If a claim in the document is ambiguous or contradicted by another passage, flag it with [VERIFY]."',
          ],
          blockquote: 'Summarise this report.',
        },
        goodExample: {
          id: 'good-prompt-example',
          title: 'What Does a Well-Structured Summarisation Prompt Look Like?',
          blockquote: 'You are a financial analyst. Summarise the attached Q3 earnings report using only information in the document — do not add external context. Structure the output as: [Revenue & Margins], [Segment Performance], [Guidance Changes], [Key Risks]. Maximum 250 words. Flag any figure that contradicts an earlier statement in the same document with [DISCREPANCY].',
          content: [
            'The structured prompt produces a document directly usable in a briefing. The open prompt produces a narrative paragraph that omits segment data, buries guidance changes, and requires 30 minutes of restructuring.',
          ],
        },
        chunking: {
          id: 'chunking-long-documents',
          title: 'How Do You Handle Documents That Exceed the Context Window?',
          content: [
            '**For documents exceeding the model\'s context window, chunking — splitting the document into segments of 500–2,000 tokens, summarising each chunk, then synthesising the chunk summaries — preserves information that would otherwise be truncated or degraded.**',
            'For documents with clear section structures (legal contracts, annual reports, academic papers), thematic chunking produces the most coherent final synthesis. For unstructured documents (email threads, transcripts), paragraph-based chunking at 500-token intervals is the recommended default.',
          ],
          columns: ['Method', 'Coherence', 'Best For', 'Trade-off'],
          rows: [
            {
              Method: 'Thematic (by section)',
              Coherence: 'Highest',
              'Best For': 'Reports, contracts, academic papers',
              'Trade-off': 'Requires clear headings in source',
            },
            {
              Method: 'Paragraph-based',
              Coherence: 'High',
              'Best For': 'Most document types',
              'Trade-off': 'May split closely related ideas',
            },
            {
              Method: 'Fixed token limit',
              Coherence: 'Medium',
              'Best For': 'Unstructured text',
              'Trade-off': 'Splits mid-argument at arbitrary points',
            },
            {
              Method: 'Sentence-based',
              Coherence: 'Low',
              'Best For': 'Maximum granularity',
              'Trade-off': 'Highest compute cost; fragments context',
            },
          ],
        },
        iterativeSummarisation: {
          id: 'iterative-summarisation',
          title: 'How Does Iterative Summarisation Reduce Omissions?',
          content: [
            '**Iterative summarisation — generating an initial summary, then refining it with a second targeted prompt — improves factual completeness and reduces omissions compared to single-pass generation.**',
            'Iterative summarisation generates an initial summary, then applies a second prompt to catch missing claims. The two-step structure:',
          ],
          numberedItems: [
            '**Initial prompt:** "Summarise the key arguments, data points, and conclusions from the document. Flag anything you are uncertain about."',
            '**Refinement prompt:** "Review your summary. Identify any claim that is stated in the document but absent from your summary. Add those claims now."',
          ],
        },
        hallucinationAnalysis: {
          id: 'hallucination-analysis',
          title: 'Why Do AI Models Still Hallucinate in Summaries, and How Often?',
          content: [
            '**Grounded summarisation hallucination rates have dropped 96% since 2021 — from 21.8% to 0.7% for the top models — but a 2025 mathematical proof confirmed that hallucinations cannot be fully eliminated under current LLM architectures.**',
            'The architecture reason is fundamental: LLMs generate statistically probable next tokens based on pattern matching across training data, not by retrieving verified facts. Even when given a source document, a model occasionally "blends" source content with training knowledge in a way that produces a plausible but unfaithful sentence — what researchers call a "mixed context hallucination." This is one of the core [AI limitations](/prompt-engineering/ai-limitations-what-llms-cant-do) that grounded summarisation workflows must account for.',
            'The failure modes in AI summarisation, ordered by frequency:',
          ],
          items: [
            '**Mixed context hallucination** — model combines facts from the source with facts from training data, producing a sentence that is partially correct and partially fabricated',
            '**Missing information** — model omits key claims from the source that were present in less prominent positions',
            '**Factual inconsistency** — model contradicts a specific figure or date from the source document',
            '**Irrelevant information** — model adds context from training data not present in the source',
          ],
          blockquote: 'A 2025 Nature-published framework (Liu et al.) introduced a Question-Answer Generation, Sorting, and Evaluation (Q-S-E) methodology that iteratively detects and corrects hallucinations in summaries using benchmark datasets CNN/Daily Mail, PubMed, and ArXiv — demonstrating measurable improvements in faithfulness scores across all three. PromptQuorum\'s multi-model dispatch addresses this directly: sending the same document to GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic), and Gemini 3.1 Pro simultaneously and comparing outputs identifies the passages where models disagree — which are statistically the highest-risk passages for hallucination.',
        },
        evaluationMetrics: {
          id: 'evaluation-metrics',
          title: 'Which Metric Measures AI Summarisation Quality: ROUGE, BERTScore, or HHEM?',
          content: [
            '**ROUGE (Recall-Oriented Understudy for Gisting Evaluation), BERTScore, and faithfulness metrics measure different and non-overlapping dimensions of summary quality — no single metric is sufficient to evaluate whether an AI summary is trustworthy.**',
            'ROUGE measures n-gram overlap between a generated summary and a reference summary — useful for benchmarking but blind to semantic meaning and factual accuracy. BERTScore uses cosine similarity between BERT embeddings of the generated and reference summaries, capturing semantic similarity rather than exact word matches. Faithfulness metrics (HHEM, FaithJudge) measure whether the summary contains only claims supported by the source document — the most relevant metric for production summarisation use cases.',
          ],
          columns: ['Metric', 'What It Measures', 'Limitation'],
          rows: [
            {
              Metric: 'ROUGE',
              'What It Measures': 'N-gram overlap with reference',
              Limitation: 'Blind to semantic meaning; rewards lexical similarity',
            },
            {
              Metric: 'BLEU',
              'What It Measures': 'Precision of n-gram overlap',
              Limitation: 'Designed for translation; poor fit for summarisation',
            },
            {
              Metric: 'BERTScore',
              'What It Measures': 'Semantic similarity via embeddings',
              Limitation: 'Requires reference summary; expensive to compute',
            },
            {
              Metric: 'Faithfulness (HHEM)',
              'What It Measures': 'Factual consistency with source',
              Limitation: 'Does not measure completeness or usefulness',
            },
            {
              Metric: 'G-Eval',
              'What It Measures': 'Multi-dimensional: coverage, relevance, fluency',
              Limitation: 'Newest standard; not yet universally adopted',
            },
          ],
          blockquote: 'For production document pipelines, combining HHEM faithfulness scoring with a completeness check (does the summary mention all key claims from the source?) produces the most reliable quality signal.',
        },
        globalContext: {
          id: 'global-context',
          title: 'How Do GDPR, Chinese Law, and METI Guidelines Affect AI Summarisation?',
          content: [
            'European enterprises processing documents under GDPR cannot send sensitive content to external API endpoints without compliance review. Mistral AI (France) provides locally deployable models — Mistral Large and Mistral Small — that perform abstractive summarisation entirely on-premise, with zero data leaving the organisation\'s infrastructure, satisfying EU data residency requirements under Article 46 of GDPR.',
            'Chinese enterprises increasingly use **Qwen 3** (Alibaba) and **DeepSeek V3** for document extraction tasks across Chinese-language corpora. Both models tokenise Chinese characters (CJK scripts) at a more efficient ratio than Western-trained models — a 10,000-character Chinese document consumes roughly 40% fewer tokens in Qwen 3 than in GPT-5.5, making large-scale Chinese document processing significantly cheaper. China\'s Interim Measures for Generative AI (2023) require AI-generated summaries used in official contexts to be labelled as AI-generated.',
            'Japanese enterprises operating under METI data governance guidelines frequently deploy **Ollama** with LLaMA 4 models for local document summarisation. LLaMA 4 7B requires 8GB RAM for local inference and produces zero external API calls — meeting strict data residency requirements for sensitive legal and financial documents.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are the Most Common Mistakes in AI Summarisation?',
          items: [
            'Using open-ended prompts ("Summarise this") without format constraints — produces generic paragraphs that omit key data points and require 30+ minutes of manual restructuring',
            'Trusting summaries without spot-checking — AI models hallucinate structured data (tables, numbers, dates) at higher rates than prose; always verify 10–20% of extracted figures against the original',
            'Setting Temperature above 0.3 for extraction tasks — temperatures above 0.3 measurably increase hallucination frequency; use 0.0–0.1 for maximum determinism on grounded tasks',
            'Not specifying the document type in the prompt — without context, the model applies wrong summarisation heuristics (e.g., treating a legal contract like a news article, omitting critical clause language)',
            'Skipping chunking for documents over 50 pages — context window overflow silently truncates content; the model summarises only the available portion without warning that it missed anything',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the foundational principles behind structured AI instructions',
            '[AI-Powered Research](/prompt-engineering/ai-powered-research) — how to combine extraction tools with multi-source verification workflows',
            '[Why AI Hallucinates and How to Stop It](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — understanding the root causes of hallucination and proven mitigation strategies',
            '[AI Limitations — What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — specific techniques for grounding AI outputs in verified source content',
            '[5 Building Blocks Every AI Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — structured prompt components that directly improve extraction accuracy',
            '[Temperature and Top-P: How to Control AI Output](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — set Temperature to 0.0–0.1 for deterministic, hallucination-resistant summarisation',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — step-by-step reasoning that improves faithfulness in complex multi-document analysis',
          ],
        },
        howToStart: {
          id: 'how-to-extract-and-summarise',
          title: 'How to Extract Data and Summarize With AI',
          numberedItems: [
            '**Choose your tool based on the source type and extraction structure.** Use NotebookLM for your own PDFs or documents, Elicit for academic papers with structured fields (methodology, sample size, outcomes), and Perplexity for real-time web summarization. Text-to-table extractions work best with systems designed for it (Elicit) rather than general chat models.',
            '**Define your extraction schema upfront (JSON, table, bullet list).** Tell the model exactly what columns or fields you need and the data type for each. Example: \'Return as JSON array with keys: author (string), year (integer), finding (text max 200 chars), confidence (enum: high/medium/low).\'',
            '**Set Temperature (T) to 0.1–0.3 for extraction and summarization.** Lower temperatures produce more deterministic, consistent outputs. Reserve higher temperatures only for brainstorming alternative interpretations of ambiguous source material.',
            '**For large documents, break extraction into multiple passes with intermediate checkpoints.** If you have 100-page PDFs, extract sections 1–25, then 26–50, etc., storing results in a structured format. This prevents context window overflow and makes errors easier to spot and correct.',
            '**Cross-check key extractions with the source document.** Always spot-check 10–20% of extracted data against the original. AI models can hallucinate or misread structured data, especially from tables with merged cells or unclear formatting.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between extractive and abstractive AI summarisation?',
              a: 'Extractive summarisation copies sentences directly from the source document without modification — factual errors are structurally impossible because no new text is generated. Abstractive summarisation uses LLMs to generate new paraphrased sentences that condense information — producing more readable output but with hallucination rates of 0.7–14% depending on the model and task. Use extractive for legal and compliance documents; use abstractive for executive summaries and research synthesis.',
            },
            {
              q: 'Which AI model hallucinates least when summarising documents?',
              a: 'On Vectara\'s HHEM benchmark — the standard faithfulness test for document summarisation across 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) achieved the lowest hallucination rate at 0.7% as of 2025. Four models now achieve sub-1% rates on grounded summarisation. These rates apply only to source-grounded tasks; open-domain factual recall produces rates of 3–33% across the same models.',
            },
            {
              q: 'How many pages can AI summarisation tools process at once?',
              a: 'This depends on the model\'s context window. GPT-5.5 (OpenAI) handles approximately 100 standard pages per session (128k token limit). Claude Opus 4.7 (Anthropic) handles approximately 160 pages (200k tokens). Gemini 3.1 Pro (Google DeepMind) handles approximately 800 pages (1M tokens). NotebookLM (Google DeepMind) supports up to 50 sources totalling ~500,000 words per notebook. For larger corpora, document chunking is required.',
            },
            {
              q: 'Is NotebookLM or Claude better for document summarisation?',
              a: 'They serve different needs. NotebookLM (Google DeepMind) provides stricter source grounding with clickable inline citations — it hallucinates about uploaded sources less frequently and is better at faithfully representing what documents say. Claude Opus 4.7 (Anthropic) produces more nuanced analysis, excels at synthesising across multiple documents, and identifies non-obvious connections — but occasionally blends source content with general training knowledge in ways that can be subtly misleading. Use NotebookLM for precision; use Claude for insight.',
            },
            {
              q: 'How do I prevent AI from hallucinating in my summaries?',
              a: 'Four techniques reduce hallucination in summarisation tasks: (1) instruct the model explicitly — "summarise only from the document below; do not add external knowledge"; (2) set Temperature (T) to 0.0–0.1 for maximum determinism; (3) use a faithfulness check — ask the model to list every claim in its summary and identify its source sentence; (4) cross-check with a second model — when GPT-5.5 and Claude Opus 4.7 agree on a specific fact, the probability of shared hallucination is statistically near-zero.',
            },
            {
              q: 'What is document chunking and when should I use it?',
              a: 'Chunking splits a document into segments (typically 500–2,000 tokens), summarises each segment separately, then synthesises the chunk summaries into a final output. Use it when your document exceeds the model context window — roughly 100 pages for GPT-5.5 (128k tokens), 160 pages for Claude Opus 4.7 (200k tokens), or 800 pages for Gemini 3.1 Pro (1M tokens). For structured documents (legal contracts, annual reports), thematic chunking by section headings produces the most coherent final synthesis. For unstructured text (email threads, transcripts), paragraph-based chunking at 500-token intervals is the recommended default.',
            },
            {
              q: 'What are ROUGE and BERTScore, and which metric should I use to evaluate AI summaries?',
              a: 'ROUGE measures n-gram overlap between a generated summary and a reference — useful for benchmarking but blind to semantic meaning and factual accuracy. BERTScore uses cosine similarity between BERT embeddings, capturing semantic similarity rather than exact word matches. For production document workflows, neither is sufficient alone: use faithfulness metrics such as HHEM (Vectara) or FaithJudge to measure whether the summary contains only claims supported by the source document. Combine HHEM faithfulness scoring with a completeness check for the most reliable quality signal.',
            },
            {
              q: 'Can AI summarisation tools handle documents in languages other than English?',
              a: 'Yes, with important caveats. Mistral AI models (France) handle French and European languages natively and can be deployed locally for GDPR compliance. Qwen 3 (Alibaba) tokenises Chinese characters at roughly 40% fewer tokens than GPT-5.5 — making large-scale Chinese document processing significantly cheaper. LLaMA 4 models deployed via Ollama support multilingual summarisation while keeping data fully on-premise, satisfying data residency requirements for Japanese enterprises under METI guidelines. English-first models (GPT-5.5, Claude Opus 4.7) also handle multilingual documents but with slightly higher error rates on non-Latin scripts.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources & Further Reading',
          items: [
            '[Liu et al., 2025. "A hallucination detection and mitigation framework for text summarisation"](https://www.nature.com/articles/s41598-025-31075-1) — introduces Q-S-E methodology for iterative hallucination correction across CNN/DailyMail, PubMed, and ArXiv benchmarks',
            '[Vectara HHEM Leaderboard, 2025. "Hughes Hallucination Evaluation Model — Document Summarisation Faithfulness Rankings"](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) — tested 100+ LLMs across 831 documents; Gemini-2.0-Flash at 0.7% hallucination rate',
            '[SEI/CMU, 2025. "Evaluating LLMs for Text Summarisation: An Introduction"](https://www.sei.cmu.edu/blog/evaluating-llms-for-text-summarization-introduction/) — framework for accuracy, faithfulness, compression, and efficiency evaluation',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Techniken',
      title: 'Mit KI extrahieren und zusammenfassen',
      intro: 'KI-gestützte Extraktion und Zusammenfassung reduziert die Zeit für die Dokumentenprüfung um 60–80 % und erreicht Halluzinationsraten von nur 0,7 % bei quelltreuen Zusammenfassungsaufgaben — entscheidend ist die Wahl des richtigen Zusammenfassungstyps, des richtigen Modells und der richtigen Promptstruktur für jede Dokumentenkategorie.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-29',
      seoTitle: 'Dokumente mit KI zusammenfassen und extrahieren 2026',
      metaDescription: 'KI-Zusammenfassung erreicht 0,7 % Halluzinationsrate auf Quelltexten. NotebookLM, Claude, GPT-5.5 im Vergleich — mit Prompts für quelltreue Ausgaben.',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'KI-Dokumentenzusammenfassung',
      audience: 'Forscher, Analysten und Entwickler, die umfangreiche Dokumentensammlungen mit KI verarbeiten',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Extraktiv vs. Abstraktiv: Was ist besser geeignet?', anchor: '#two-summarisation-types' },
        { label: 'Welches Modell hat die niedrigste Halluzinationsrate?', anchor: '#which-model-for-summarisation' },
        { label: 'Tool-Vergleich Zusammenfassung', anchor: '#tool-comparison' },
        { label: 'Wie Sie Extraktionsprompts schreiben', anchor: '#extraction-prompt-structure' },
        { label: 'Der 5-Komponenten-Extraktionsprompt', anchor: '#five-component-prompt' },
        { label: 'Chunking langer Dokumente', anchor: '#chunking-long-documents' },
        { label: 'Iterative Zusammenfassung', anchor: '#iterative-summarisation' },
        { label: 'Warum halluzinieren KI-Modelle noch immer?', anchor: '#hallucination-analysis' },
        { label: 'Evaluierungsmetriken: ROUGE, BERTScore, HHEM', anchor: '#evaluation-metrics' },
        { label: 'Globaler und regionaler Kontext', anchor: '#global-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Mit KI extrahieren und zusammenfassen',
        description: 'KI-Dokumentenzusammenfassung reduziert die Prüfzeit um 60–80 % bei 0,7 % Halluzinationsrate. Extraktive vs. abstraktive Ansätze, Modellvergleich und Promptstruktur für quelltreue Ausgaben.',
        url: 'https://www.promptquorum.com/prompt-engineering/extract-and-summarise?lang=de',
        inLanguage: 'de',
        datePublished: '2026-03-23',
        dateModified: '2026-04-29',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/extract-and-summarise',
          width: 1200,
          height: 630,
        },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Dokumentenzusammenfassung' },
          { '@type': 'Thing', name: 'LLM-Halluzination' },
          { '@type': 'Thing', name: 'Prompt-Engineering' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        keywords: ['KI-Zusammenfassung', 'Dokumentenextraktion', 'abstraktive Zusammenfassung', 'extraktive Zusammenfassung', 'NotebookLM', 'Claude', 'Halluzinationsraten', 'Prompt-Engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Elicit' },
          { '@type': 'SoftwareApplication', name: 'Scholarcy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen extraktiver und abstraktiver KI-Zusammenfassung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Extraktive Zusammenfassung kopiert Sätze direkt aus dem Quelldokument ohne Modifikation — faktische Fehler sind strukturell ausgeschlossen, da kein neuer Text generiert wird. Abstraktive Zusammenfassung verwendet LLMs, um neue paraphrasierte Sätze zu generieren — was lesbarere Ausgaben erzeugt, aber mit Halluzinationsraten von 0,7–14 % je nach Modell und Aufgabe. Extraktiv für Rechts- und Compliance-Dokumente; abstraktiv für Forschungssynthesen und Executive Summaries.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welches KI-Modell halluziniert am wenigsten bei der Dokumentenzusammenfassung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Im Vectara HHEM-Benchmark — dem Standardtest für Zusammenfassungstreue über 831 Dokumente — erzielte Gemini-2.0-Flash-001 (Google DeepMind) mit 0,7 % die niedrigste Halluzinationsrate (Stand 2025). Diese Raten gelten nur für quelltreue Aufgaben; offene Faktabrückfragen ergeben Raten von 3–33 % bei denselben Modellen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viele Seiten können KI-Zusammenfassungstools auf einmal verarbeiten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPT-5.5 (OpenAI) verarbeitet ca. 100 Standardseiten pro Sitzung (128.000 Token). Claude Opus 4.7 (Anthropic) verarbeitet ca. 160 Seiten (200.000 Token). Gemini 3.1 Pro (Google DeepMind) verarbeitet ca. 800 Seiten (1 Mio. Token). NotebookLM (Google DeepMind) unterstützt bis zu 50 Quellen mit insgesamt ca. 500.000 Wörtern pro Notizbuch. Bei größeren Korpora ist Document Chunking erforderlich.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist NotebookLM oder Claude besser für die Dokumentenzusammenfassung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Beide Produkte erfüllen unterschiedliche Anforderungen. NotebookLM (Google DeepMind) bietet strengere Quellenverankerung mit anklickbaren Inline-Zitaten und ist besser für die quelltreue Wiedergabe von Dokumentinhalten. Claude Opus 4.7 (Anthropic) liefert tiefere Analysen, ist führend bei der Synthese mehrerer Dokumente und erkennt nicht offensichtliche Verbindungen — kann aber Quellinhalte gelegentlich mit Trainingswissen vermischen. NotebookLM für Präzision; Claude für Erkenntnisgewinnung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie verhindere ich KI-Halluzinationen in meinen Zusammenfassungen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vier Techniken reduzieren Halluzinationen: (1) explizit anweisen — „Fasse nur aus dem folgenden Dokument zusammen; füge kein externes Wissen hinzu"; (2) Temperature (T) auf 0,0–0,1 setzen für maximalen Determinismus; (3) Treuecheck durchführen — das Modell auffordern, jede Aussage in der Zusammenfassung ihrer Quellpassage zuzuordnen; (4) Gegencheck mit einem zweiten Modell — wenn GPT-5.5 und Claude Opus 4.7 einem Sachverhalt übereinstimmen, ist die Wahrscheinlichkeit gemeinsamer Halluzination statistisch nahezu null.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist Document Chunking und wann sollte ich es nutzen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chunking teilt ein Dokument in Segmente (typischerweise 500–2.000 Token), fasst jedes Segment separat zusammen und synthetisiert die Teilergebnisse zu einer Gesamtausgabe. Nutzen Sie es, wenn Ihr Dokument das Kontextfenster des Modells überschreitet — ca. 100 Seiten bei GPT-5.5 (128.000 Token), 160 Seiten bei Claude Opus 4.7 (200.000 Token) oder 800 Seiten bei Gemini 3.1 Pro (1 Mio. Token). Für strukturierte Dokumente wie Rechtsverträge und Jahresberichte liefert thematisches Chunking nach Abschnittsüberschriften die kohärentesten Ergebnisse.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was sind ROUGE und BERTScore, und welche Metrik eignet sich für die Evaluierung von KI-Zusammenfassungen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ROUGE misst N-Gramm-Überlappung zwischen generierter Zusammenfassung und Referenz — nützlich für Benchmarks, jedoch blind gegenüber Semantik und Faktentreue. BERTScore verwendet Kosinus-Ähnlichkeit zwischen BERT-Embeddings und erfasst semantische Ähnlichkeit statt exakter Wortübereinstimmung. Für Produktions-Workflows empfiehlt sich die Kombination aus HHEM-Treue-Score und einem Vollständigkeitscheck.',
            },
          },
          {
            '@type': 'Question',
            name: 'Können KI-Zusammenfassungstools auch nicht-englische Dokumente verarbeiten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, mit wichtigen Einschränkungen. Mistral AI-Modelle (Frankreich) unterstützen Französisch und europäische Sprachen nativ und können lokal für DSGVO-Konformität bereitgestellt werden. Qwen 3 (Alibaba) tokenisiert chinesische Schriftzeichen mit ca. 40 % weniger Token als GPT-5.5. LLaMA 4-Modelle über Ollama ermöglichen mehrsprachige Zusammenfassung komplett lokal ohne externe API-Aufrufe.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von KI-Zusammenfassungstools die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Werden personenbezogene Daten an externe API-Endpunkte gesendet (z. B. OpenAI, Anthropic), gilt Artikel 28 DSGVO: Es muss ein Auftragsverarbeitungsvertrag (AVV) geschlossen werden und die Daten dürfen nur für den vereinbarten Zweck genutzt werden. Die Alternative nach BSI-Grundschutz-Katalogen ist die lokale Bereitstellung — z. B. Mistral Large via Ollama oder LLaMA 4 on-premises — wodurch keine Daten das Unternehmensnetz verlassen. Für besonders sensible Dokumente (Gesundheit, Finanzen, Recht) empfehlen DACH-Rechtsexperten ausschließlich lokale Inferenz.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist KI-gestützte Dokumentenzusammenfassung für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, sofern die richtige Infrastruktur gewählt wird. Mittelständische Unternehmen profitieren besonders von NotebookLM für interne Berichte und Vertragsanalysen sowie von lokal bereitgestellten Modellen (LLaMA 4 via Ollama) für datenschutzkritische Dokumente. Der BSI-Grundschutz empfiehlt für KMU eine Risikoanalyse vor der Cloud-API-Nutzung. Typische Anwendungsfälle: automatische Zusammenfassung von Lieferantenverträgen, Protokollkondensierung aus Meetings, Extraktion von Compliance-relevanten Klauseln aus AGBs.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: 'Mit KI extrahieren und zusammenfassen: Kernthemen',
        description: 'Grundlegende Konzepte für KI-gestützte Dokumentenextraktion und -zusammenfassung',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Extraktive vs. abstraktive Zusammenfassung', description: 'Trade-offs zwischen faktischer Präzision und Lesbarkeit verstehen' },
          { '@type': 'ListItem', position: 2, name: 'Welches KI-Modell eignet sich?', description: 'NotebookLM, Claude, GPT-5.5 und Gemini für Zusammenfassungsaufgaben im Vergleich' },
          { '@type': 'ListItem', position: 3, name: 'Promptstruktur für Extraktion', description: 'Wie man strukturierte Prompts schreibt, die Halluzinationen verhindern' },
          { '@type': 'ListItem', position: 4, name: 'KI-Halluzinationen reduzieren', description: 'Temperature-Einstellungen, Treu-Checks und Multi-Modell-Verifikation' },
          { '@type': 'ListItem', position: 5, name: 'Tools und Workflows', description: 'NotebookLM, Scholarcy, Elicit und benutzerdefinierte Extraktions-Pipelines nutzen' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'de',
        name: 'Wie man Dokumente mit KI extrahiert und zusammenfasst',
        totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Tool je nach Quellentyp und Extraktionsstruktur auswählen', text: 'NotebookLM für eigene PDFs und Dokumente verwenden, Elicit für wissenschaftliche Artikel mit strukturierten Feldern (Methodik, Stichprobengröße, Ergebnisse) und Perplexity für Echtzeit-Web-Zusammenfassungen.' },
          { '@type': 'HowToStep', position: 2, name: 'Extraktionsschema vorab definieren (JSON, Tabelle, Aufzählungsliste)', text: 'Dem Modell genau die benötigten Spalten oder Felder und deren Datentyp mitteilen. Beispiel: „Gib ein JSON-Array zurück mit den Schlüsseln: author (string), year (integer), finding (text max. 200 Zeichen), confidence (enum: high/medium/low)."' },
          { '@type': 'HowToStep', position: 3, name: 'Temperature (T) auf 0,1–0,3 setzen', text: 'Niedrigere Temperaturen erzeugen deterministischere, konsistentere Ausgaben. Höhere Temperaturen nur für das Brainstorming alternativer Interpretationen bei mehrdeutigem Quellmaterial reservieren.' },
          { '@type': 'HowToStep', position: 4, name: 'Große Dokumente in mehreren Durchläufen mit Zwischenspeicherung extrahieren', text: 'Bei 100-seitigen PDFs die Abschnitte 1–25, dann 26–50 usw. extrahieren und die Ergebnisse strukturiert ablegen. Verhindert Kontextfensterüberschreitung und erleichtert die Fehlerkorrektur.' },
          { '@type': 'HowToStep', position: 5, name: 'Wichtige Extraktionen mit dem Quelldokument gegenchecken', text: '10–20 % der extrahierten Daten stichprobenartig mit dem Original abgleichen. KI-Modelle können strukturierte Daten halluzinieren, insbesondere aus Tabellen mit verbundenen Zellen oder unklarer Formatierung.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'Extraktive Zusammenfassung für juristische, Compliance- und wortgenaue Dokumente verwenden; abstraktive LLM-Zusammenfassung für Forschungssynthesen und Executive Outputs',
            'Gemini-2.0-Flash-001 erreicht 0,7 % Halluzinationsrate bei quelltreuer Zusammenfassung — das beste Ergebnis im Vectara HHEM-Benchmark über 831 Dokumente',
            'NotebookLM (Google DeepMind) bietet die zuverlässigste quelltreue Zusammenfassung mit anklickbaren Inline-Zitaten; Claude Opus 4.7 führt bei dokumentübergreifender Synthese und komplexer Analyse',
            'Die Halluzinationsraten bei quelltreuer Zusammenfassung sanken von 2021 bis 2025 um 96 % — ein mathematischer Beweis (2025) bestätigt jedoch, dass Halluzinationen unter aktuellen LLM-Architekturen nicht vollständig eliminierbar sind',
            'Für Dokumente, die das Kontextfenster überschreiten, liefert thematisches Chunking (nach Abschnitt/Thema) die kohärenteste Gesamtsynthese',
            'Claude Opus 4.7 verarbeitet ca. 160 Seiten pro Sitzung (200.000 Token); Gemini 3.1 Pro ca. 800 Seiten (1 Mio. Token) — die Kontextlimits bestimmen, welches Modell für große Dokumentenmengen praktisch ist',
          ],
        },
        definition: {
          id: 'two-summarisation-types',
          title: 'Was sind die zwei KI-Zusammenfassungstypen und wann ist welcher zu verwenden?',
          content: [
            '**Extraktive Zusammenfassung kopiert Sätze direkt aus der Quelle; abstraktive Zusammenfassung generiert neue Sätze, die paraphrasieren und verdichten — die zwei Ansätze tauschen faktische Präzision gegen Lesbarkeit und Kompression.**',
            'Extraktive Zusammenfassung — eingesetzt von Tools wie Scholarcy — bewertet Sätze nach Schlüsselworthäufigkeit, Position und Informationsdichte und reproduziert die am höchsten bewerteten Sätze ohne Modifikation. Da kein neuer Text generiert wird, sind faktische Fehler strukturell ausgeschlossen: Die Ausgabe ist stets ein Teilmenge der Quelle. Abstraktive Zusammenfassung — eingesetzt von GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic) und Gemini 3.1 Pro (Google DeepMind) — generiert neuen Text, der synthetisiert und paraphrasiert, und liefert lesbarere Ausgaben auf Kosten eines höheren Halluzinationsrisikos.',
          ],
          columns: ['Methode', 'Halluzinationsrisiko', 'Lesbarkeit', 'Geeignet für'],
          rows: [
            {
              Methode: 'Extraktiv',
              Halluzinationsrisiko: 'Nahe null (kopiert Quelle)',
              Lesbarkeit: 'Geringer — kann unzusammenhängend wirken',
              'Geeignet für': 'Rechtsdokumente, Compliance, wortgenaue Anforderungen',
            },
            {
              Methode: 'Abstraktiv (LLM)',
              Halluzinationsrisiko: '0,7–14 % je nach Modell und Aufgabe',
              Lesbarkeit: 'Hoch — natürliche Prosa',
              'Geeignet für': 'Forschungssynthesen, Executive Summaries, Berichte',
            },
            {
              Methode: 'Hybrid (extraktiv → abstraktiv)',
              Halluzinationsrisiko: 'Niedrig',
              Lesbarkeit: 'Hoch',
              'Geeignet für': 'Finanzberichte, wissenschaftliche Literatur, technische Dokumentation',
            },
          ],
          blockquote: 'Eine arXiv-Studie (2025) zum Benchmarking von Zusammenfassungsansätzen bei Finanz-Nachrichten-Artikeln ergab, dass extraktive Methoden (Lead-1, MatchSum) starke Baselines für kurze, gut strukturierte Texte liefern — abstraktive LLMs schneiden bei komplexen Finanzdokumenten jedoch besser ab, wenn sie auf domänenspezifischen Daten feinabgestimmt sind. In einem Satz: Extraktiv, wenn kein faktischer Fehler tolerierbar ist; abstraktiv, wenn die Ausgabe ohne weitere Nachbearbeitung lesbar und nutzbar sein muss.',
        },
        toolComparison: {
          id: 'which-model-for-summarisation',
          title: 'Welches KI-Modell hat die niedrigste Halluzinationsrate für Zusammenfassungen?',
          content: [
            '**NotebookLM (Google DeepMind) führt bei quelltreuer, zitierter Zusammenfassung hochgeladener Dokumente; Claude Opus 4.7 (Anthropic) führt bei Synthese, dokumentübergreifender Analyse und komplexem Denken; GPT-5.5 (OpenAI) führt bei schneller, flexibler Allzweck-Zusammenfassung.**',
            'Im Vectara Hughes Hallucination Evaluation Model (HHEM) — dem Standard-Benchmark für Zusammenfassungstreue, getestet über 831 Dokumente pro Modell — zählten 2025 folgende Modelle zu den Spitzenreitern:',
            'Diese Raten stellen eine Verbesserung von 96 % gegenüber 2021 dar, als Spitzenmodelle auf derselben Aufgabe 21,8 % Halluzinationsraten erzielten. Diese Zahlen gelten jedoch nur für quelltreue Zusammenfassungen — offene faktische Fragen ergeben 3–33 % Halluzinationsraten bei denselben Modellen.',
          ],
          items: [
            '**Gemini-2.0-Flash-001 (Google DeepMind):** 0,7 % Halluzinationsrate — niedrigste gemessene Rate im Benchmark',
            '**OpenAI- und Gemini-Varianten:** 0,8–1,5 % Halluzinationsraten-Cluster',
            '**Insgesamt:** 4 Modelle erreichen nun sub-1%-Raten bei quelltreuen Zusammenfassungsaufgaben',
          ],
        },
        toolTable: {
          id: 'tool-comparison',
          title: 'Wie schneiden NotebookLM, Claude, GPT-5.5 und Gemini im direkten Vergleich ab?',
          columns: ['Tool', 'Kontextlimit', 'Qualität der Quellenangaben', 'Bester Anwendungsfall'],
          rows: [
            {
              Tool: 'NotebookLM (Google DeepMind)',
              Kontextlimit: 'ca. 500.000 Wörter / 50 Quellen',
              'Qualität der Quellenangaben': 'Nummerierte Inline-Zitate, anklickbar',
              'Bester Anwendungsfall': 'Strukturierte Forschungsauswertung, quelltreue Fragen',
            },
            {
              Tool: 'Claude Projects (Anthropic)',
              Kontextlimit: 'ca. 200.000 Token (ca. 160 Seiten)',
              'Qualität der Quellenangaben': 'Inkonsistent per default; zuverlässig mit Prompts',
              'Bester Anwendungsfall': 'Quellenübergreifende Synthese, komplexes Denken, Argumentationsaufbau',
            },
            {
              Tool: 'GPT-5.5 (OpenAI)',
              Kontextlimit: '128.000 Token (ca. 100 Seiten)',
              'Qualität der Quellenangaben': 'Moderat; erfordert explizite Anweisung',
              'Bester Anwendungsfall': 'Allgemeine Dokumente, schnelle Zusammenfassungen',
            },
            {
              Tool: 'Gemini 3.1 Pro (Google DeepMind)',
              Kontextlimit: '1 Mio. Token (ca. 800 Seiten)',
              'Qualität der Quellenangaben': 'Moderat',
              'Bester Anwendungsfall': 'Vollständige Codebase- oder Großkorpus-Analyse',
            },
            {
              Tool: 'Elicit',
              Kontextlimit: '138 Mio.+ wissenschaftliche Artikel',
              'Qualität der Quellenangaben': 'Strukturierte akademische Extraktion',
              'Bester Anwendungsfall': 'Systematische Literaturreviews',
            },
          ],
          content: [
            '**In PromptQuorum getestet — 25 Dokumentenzusammenfassungs-Prompts über drei Modelle verteilt:** Claude Opus 4.7 lieferte in 20 von 25 Fällen die analytisch vollständigsten Zusammenfassungen (erkannte Implikationen und Verbindungen zwischen Dokumenten). GPT-5.5 lieferte in 18 von 25 Fällen die prägnantesten, sofort verwendbaren Zusammenfassungen. Gemini 3.1 Pro war das einzige Modell, das alle 25 Dokumente vollständig ohne Kontext-Kürzung verarbeiten konnte, da mehrere 80.000 Token überschritten.',
          ],
        },
        promptStructure: {
          id: 'extraction-prompt-structure',
          title: 'Wie schreibt man Extraktions- und Zusammenfassungsprompts?',
          content: [
            '**Ein strukturierter Zusammenfassungsprompt — der Dokumenttyp, Ausgabeformat, Längenbeschränkung und explizite Anweisung zur Kennzeichnung nicht überprüfbarer Aussagen angibt — liefert direkt verwendbare Ausgaben; ein unstrukturierter Prompt liefert einen allgemeinen Absatz, der kritische Informationen auslässt.**',
            'Der häufigste [Prompt-Engineering](/prompt-engineering/what-is-prompt-engineering?lang=de)-Fehler bei Zusammenfassungen ist die Behandlung von „Fasse das zusammen" als vollständige Anweisung. Jede Annahme des Modells über Länge, Format, Perspektive und Detailgrad ist ein potenzieller Mismatch mit dem tatsächlichen Bedarf. Die [5-Bausteine-Promptstruktur](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de) — Rolle, Aufgabe, Eingabe, Einschränkungen, Ausgabeformat — gilt direkt für Extraktionsaufgaben.',
          ],
        },
        promptFramework: {
          id: 'five-component-prompt',
          title: 'Was sind die 5 Komponenten eines effektiven Extraktionsprompts?',
          content: '**Schlechter Prompt — unstrukturiert, erzeugt generische, nicht verwendbare Ausgaben:**',
          items: [
            '**Rolle** — „Du bist ein auf [Fachgebiet] spezialisierter Analyst."',
            '**Quellenanweisung** — „Fasse nur die Informationen aus dem folgenden Dokument zusammen. Füge kein externes Wissen hinzu."',
            '**Ausgabeformat** — „Erstelle eine strukturierte Zusammenfassung mit diesen Abschnitten: [Wichtige Erkenntnisse], [Methodik], [Einschränkungen], [Empfohlene Maßnahmen]."',
            '**Längenbeschränkung** — „Maximal 300 Wörter insgesamt."',
            '**Unsicherheitsanweisung** — „Wenn eine Aussage im Dokument mehrdeutig ist oder einer anderen Passage widerspricht, kennzeichne sie mit [PRÜFEN]."',
          ],
          blockquote: 'Fasse diesen Bericht zusammen.',
        },
        goodExample: {
          id: 'good-prompt-example',
          title: 'Wie sieht ein gut strukturierter Zusammenfassungsprompt aus?',
          blockquote: 'Du bist ein Finanzanalyst. Fasse den beigefügten Q3-Ertragsbericht ausschließlich auf Basis des Dokuments zusammen — füge keinen externen Kontext hinzu. Strukturiere die Ausgabe wie folgt: [Umsatz & Margen], [Segmentleistung], [Prognoseanpassungen], [Wesentliche Risiken]. Maximal 250 Wörter. Kennzeichne jede Zahl, die einer früheren Aussage im selben Dokument widerspricht, mit [DISKREPANZ].',
          content: [
            'Der strukturierte Prompt liefert ein Dokument, das direkt in einem Briefing verwendet werden kann. Der offene Prompt liefert einen Erzählabsatz, der Segmentdaten auslässt, Prognoseanpassungen verbirgt und 30 Minuten Nachbearbeitung erfordert.',
          ],
        },
        chunking: {
          id: 'chunking-long-documents',
          title: 'Wie verarbeitet man Dokumente, die das Kontextfenster übersteigen?',
          content: [
            '**Bei Dokumenten, die das Kontextfenster des Modells überschreiten, bewahrt Chunking — das Aufteilen des Dokuments in Segmente von 500–2.000 Token, das separate Zusammenfassen jedes Chunks und die anschließende Synthese — Informationen, die sonst abgeschnitten oder beeinträchtigt würden.**',
            'Für Dokumente mit klarer Abschnittsstruktur (Rechtsverträge, Jahresberichte, wissenschaftliche Artikel) liefert thematisches Chunking die kohärenteste Gesamtsynthese. Für unstrukturierte Dokumente (E-Mail-Threads, Transkripte) ist paragraphenbasiertes Chunking in 500-Token-Abständen der empfohlene Standard.',
          ],
          columns: ['Methode', 'Kohärenz', 'Geeignet für', 'Kompromiss'],
          rows: [
            {
              Methode: 'Thematisch (nach Abschnitt)',
              Kohärenz: 'Höchste',
              'Geeignet für': 'Berichte, Verträge, wissenschaftliche Artikel',
              Kompromiss: 'Erfordert klare Überschriften in der Quelle',
            },
            {
              Methode: 'Paragraphenbasiert',
              Kohärenz: 'Hoch',
              'Geeignet für': 'Die meisten Dokumenttypen',
              Kompromiss: 'Kann eng verwandte Ideen trennen',
            },
            {
              Methode: 'Festes Token-Limit',
              Kohärenz: 'Mittel',
              'Geeignet für': 'Unstrukturierter Text',
              Kompromiss: 'Trennt Argumente an beliebigen Stellen',
            },
            {
              Methode: 'Satzbasiert',
              Kohärenz: 'Niedrig',
              'Geeignet für': 'Maximale Granularität',
              Kompromiss: 'Höchste Rechenkosten; fragmentiert Kontext',
            },
          ],
        },
        iterativeSummarisation: {
          id: 'iterative-summarisation',
          title: 'Wie reduziert iterative Zusammenfassung Auslassungen?',
          content: [
            '**Iterative Zusammenfassung — eine initiale Zusammenfassung generieren und sie mit einem zweiten gezielten Prompt verfeinern — verbessert die faktische Vollständigkeit und reduziert Auslassungen im Vergleich zur Einpass-Generierung.**',
            'Iterative Zusammenfassung generiert eine initiale Zusammenfassung und wendet dann einen zweiten Prompt an, um fehlende Aussagen zu finden. Die zweistufige Struktur:',
          ],
          numberedItems: [
            '**Initialer Prompt:** „Fasse die Hauptargumente, Datenpunkte und Schlussfolgerungen des Dokuments zusammen. Kennzeichne alles, bei dem du unsicher bist."',
            '**Verfeinerungsprompt:** „Überprüfe deine Zusammenfassung. Identifiziere alle Aussagen, die im Dokument enthalten, aber in deiner Zusammenfassung fehlen. Ergänze diese Aussagen jetzt."',
          ],
        },
        hallucinationAnalysis: {
          id: 'hallucination-analysis',
          title: 'Warum halluzinieren KI-Modelle in Zusammenfassungen noch immer und wie häufig?',
          content: [
            '**Die Halluzinationsraten bei quelltreuer Zusammenfassung sanken seit 2021 um 96 % — von 21,8 % auf 0,7 % bei den besten Modellen — aber ein mathematischer Beweis (2025) bestätigte, dass Halluzinationen unter aktuellen LLM-Architekturen nicht vollständig eliminierbar sind.**',
            'Der architekturelle Grund ist fundamental: LLMs generieren statistisch wahrscheinliche nächste Token auf Basis von Mustererkennung über Trainingsdaten, nicht durch Abruf verifizierter Fakten. Selbst bei Angabe eines Quelldokuments „vermischt" ein Modell gelegentlich Quellinhalte mit Trainingswissen auf eine Weise, die einen plausiblen, aber ungetreuen Satz ergibt — was Forscher als „Mixed-Context-Halluzination" bezeichnen. Dies ist eine der grundlegenden [KI-Grenzen](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de), die quelltreue Zusammenfassungs-Workflows berücksichtigen müssen.',
            'Die Fehlermodi bei KI-Zusammenfassungen, nach Häufigkeit geordnet:',
          ],
          items: [
            '**Mixed-Context-Halluzination** — Modell kombiniert Fakten aus der Quelle mit Fakten aus den Trainingsdaten und erzeugt einen Satz, der teilweise korrekt und teilweise erfunden ist',
            '**Fehlende Informationen** — Modell lässt wichtige Aussagen aus der Quelle aus, die sich an weniger prominenten Stellen befanden',
            '**Faktische Inkonsistenz** — Modell widerspricht einer bestimmten Zahl oder einem Datum aus dem Quelldokument',
            '**Irrelevante Informationen** — Modell fügt Kontext aus Trainingsdaten hinzu, der nicht in der Quelle vorhanden ist',
          ],
          blockquote: 'Ein 2025 in Nature veröffentlichtes Framework (Liu et al.) führte eine Question-Answer Generation, Sorting, and Evaluation (Q-S-E)-Methodik ein, die Halluzinationen in Zusammenfassungen iterativ erkennt und korrigiert — und messbare Verbesserungen der Treue-Scores über alle drei Benchmark-Datensätze (CNN/Daily Mail, PubMed, ArXiv) demonstrierte. Der Multi-Modell-Dispatch von PromptQuorum adressiert dies direkt: dasselbe Dokument gleichzeitig an GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic) und Gemini 3.1 Pro zu senden und Ausgaben zu vergleichen, identifiziert Passagen, bei denen Modelle abweichen — statistisch die risikoreichsten Passagen für Halluzination.',
        },
        evaluationMetrics: {
          id: 'evaluation-metrics',
          title: 'Welche Metrik misst KI-Zusammenfassungsqualität: ROUGE, BERTScore oder HHEM?',
          content: [
            '**ROUGE, BERTScore und Treue-Metriken messen unterschiedliche und nicht überlappende Dimensionen der Zusammenfassungsqualität — keine einzelne Metrik reicht aus, um zu beurteilen, ob eine KI-Zusammenfassung vertrauenswürdig ist.**',
            'ROUGE misst N-Gramm-Überlappung zwischen einer generierten Zusammenfassung und einer Referenz — nützlich für Benchmarks, aber blind gegenüber semantischer Bedeutung und faktischer Genauigkeit. BERTScore verwendet Kosinus-Ähnlichkeit zwischen BERT-Embeddings der generierten und der Referenz-Zusammenfassung und erfasst semantische Ähnlichkeit statt exakter Wortübereinstimmung. Treue-Metriken (HHEM, FaithJudge) messen, ob die Zusammenfassung nur Aussagen enthält, die durch das Quelldokument gestützt werden — die relevanteste Metrik für Produktions-Zusammenfassungsanwendungen.',
          ],
          columns: ['Metrik', 'Was gemessen wird', 'Einschränkung'],
          rows: [
            {
              Metrik: 'ROUGE',
              'Was gemessen wird': 'N-Gramm-Überlappung mit Referenz',
              Einschränkung: 'Blind für Semantik; belohnt lexikalische Ähnlichkeit',
            },
            {
              Metrik: 'BLEU',
              'Was gemessen wird': 'Präzision der N-Gramm-Überlappung',
              Einschränkung: 'Für Übersetzung entwickelt; schlecht geeignet für Zusammenfassung',
            },
            {
              Metrik: 'BERTScore',
              'Was gemessen wird': 'Semantische Ähnlichkeit via Embeddings',
              Einschränkung: 'Erfordert Referenzzusammenfassung; rechenintensiv',
            },
            {
              Metrik: 'Treue (HHEM)',
              'Was gemessen wird': 'Faktenkonsistenz mit Quelle',
              Einschränkung: 'Misst keine Vollständigkeit oder Nützlichkeit',
            },
            {
              Metrik: 'G-Eval',
              'Was gemessen wird': 'Mehrdimensional: Abdeckung, Relevanz, Flüssigkeit',
              Einschränkung: 'Neuester Standard; noch nicht universell angewandt',
            },
          ],
          blockquote: 'Für Produktions-Dokumenten-Pipelines liefert die Kombination aus HHEM-Treue-Scoring und einem Vollständigkeitscheck (enthält die Zusammenfassung alle wesentlichen Aussagen der Quelle?) das zuverlässigste Qualitätssignal.',
        },
        globalContext: {
          id: 'global-context',
          title: 'Wie beeinflussen DSGVO, chinesisches Recht und METI-Leitlinien die KI-Zusammenfassung?',
          content: [
            'Europäische Unternehmen, die Dokumente unter der DSGVO verarbeiten, können sensible Inhalte nicht ohne Compliance-Prüfung an externe API-Endpunkte senden. Mistral AI (Frankreich) bietet lokal bereitstellbare Modelle — Mistral Large und Mistral Small — die abstraktive Zusammenfassung vollständig on-premises durchführen, ohne dass Daten das Unternehmensnetz verlassen, und damit die EU-Datenhaltungsanforderungen gemäß DSGVO Artikel 46 erfüllen. Nach BSI-Grundschutz-Katalogen (IT-Grundschutz-Kompendium) wird für besonders schutzbedürftige Informationen (Schutzklasse 2/3) die lokale Verarbeitung oder zumindest ein geprüfter Auftragsverarbeiter mit AVV nach Art. 28 DSGVO gefordert.',
            'Chinesische Unternehmen setzen zunehmend **Qwen 3** (Alibaba) und **DeepSeek V3-0324** für Dokumentextraktionsaufgaben bei chinesischsprachigen Korpora ein. Beide Modelle tokenisieren chinesische Schriftzeichen (CJK-Skripte) effizienter als westlich trainierte Modelle — ein chinesisches Dokument mit 10.000 Zeichen benötigt in Qwen 3 ca. 40 % weniger Token als in GPT-5.5, was die Kosten für die Verarbeitung umfangreicher chinesischer Dokumente erheblich senkt. Chinas Interim-Maßnahmen für generative KI (2023) verlangen, dass KI-generierte Zusammenfassungen in offiziellen Kontexten als KI-generiert gekennzeichnet werden.',
            'Japanische Unternehmen, die unter METI-Datenschutz-Leitlinien operieren, setzen häufig **Ollama** mit LLaMA 4-Modellen für lokale Dokumentenzusammenfassung ein. LLaMA 4 7B benötigt 8 GB RAM für lokale Inferenz und erzeugt keine externen API-Aufrufe — erfüllt strenge Datenhaltungsanforderungen für sensible Rechts- und Finanzdokumente.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Was sind die häufigsten Fehler bei der KI-Zusammenfassung?',
          items: [
            'Offene Prompts verwenden („Fasse das zusammen") ohne Formatvorgaben — liefert generische Absätze, die wichtige Datenpunkte auslassen und 30+ Minuten manuelle Nachbearbeitung erfordern',
            'Zusammenfassungen ohne Stichprobenprüfung vertrauen — KI-Modelle halluzinieren strukturierte Daten (Tabellen, Zahlen, Daten) häufiger als Fließtext; immer 10–20 % der extrahierten Zahlen mit dem Original abgleichen',
            'Temperature über 0,3 für Extraktionsaufgaben setzen — Temperaturen über 0,3 erhöhen die Halluzinationshäufigkeit messbar; 0,0–0,1 für maximale Determinismus bei quelltreuen Aufgaben verwenden',
            'Dokumenttyp im Prompt nicht angeben — ohne Kontext wendet das Modell falsche Zusammenfassungsheuristiken an (z. B. behandelt einen Rechtsvertrag wie einen Nachrichtenartikel und lässt kritische Klauselformulierungen aus)',
            'Chunking für Dokumente über 50 Seiten überspringen — Kontextfensterüberschreitung kürzt Inhalte still ab; das Modell fasst nur den verfügbaren Teil zusammen, ohne zu warnen, dass es etwas übersehen hat',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            '[Was ist Prompt-Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — die Grundprinzipien strukturierter KI-Anweisungen',
            '[KI-gestützte Recherche](/prompt-engineering/ai-powered-research?lang=de) — wie man Extraktionstools mit Mehrquellen-Verifizierungs-Workflows kombiniert',
            '[Warum KI halluziniert und wie man es stoppt](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=de) — die Ursachen von Halluzinationen und bewährte Gegenmaßnahmen',
            '[KI-Grenzen — Was LLMs nicht können](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de) — spezifische Techniken zur Verankerung von KI-Ausgaben in verifizierten Quellinhalten',
            '[5 Bausteine, die jeder KI-Prompt benötigt](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de) — strukturierte Prompt-Komponenten, die die Extraktionsgenauigkeit direkt verbessern',
            '[Temperature und Top-P: KI-Ausgabe kontrollieren](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de) — Temperature auf 0,0–0,1 setzen für deterministische, halluzinationsresistente Zusammenfassung',
            '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) — schrittweises Denken, das die Treue bei komplexen Mehrquellen-Analysen verbessert',
          ],
        },
        howToStart: {
          id: 'how-to-extract-and-summarise',
          title: 'Wie man mit KI Daten extrahiert und zusammenfasst',
          numberedItems: [
            '**Tool je nach Quellentyp und Extraktionsstruktur auswählen.** NotebookLM für eigene PDFs oder Dokumente verwenden, Elicit für wissenschaftliche Artikel mit strukturierten Feldern (Methodik, Stichprobengröße, Ergebnisse) und Perplexity für Echtzeit-Web-Zusammenfassungen. Text-zu-Tabelle-Extraktionen funktionieren am besten mit darauf ausgerichteten Systemen (Elicit) statt mit allgemeinen Chat-Modellen.',
            '**Extraktionsschema vorab definieren (JSON, Tabelle, Aufzählungsliste).** Dem Modell genau die benötigten Spalten oder Felder und deren Datentyp mitteilen. Beispiel: „Gib ein JSON-Array zurück mit den Schlüsseln: author (string), year (integer), finding (text max. 200 Zeichen), confidence (enum: high/medium/low)."',
            '**Temperature (T) für Extraktion und Zusammenfassung auf 0,1–0,3 setzen.** Niedrigere Temperaturen erzeugen deterministischere, konsistentere Ausgaben. Höhere Temperaturen nur für das Brainstorming alternativer Interpretationen bei mehrdeutigem Quellmaterial reservieren.',
            '**Große Dokumente in mehreren Durchläufen mit Zwischenspeicherung extrahieren.** Bei 100-seitigen PDFs die Abschnitte 1–25, dann 26–50 usw. extrahieren und die Ergebnisse strukturiert ablegen. Verhindert Kontextfensterüberschreitung und erleichtert die Fehlererkennung und -korrektur.',
            '**Wichtige Extraktionen mit dem Quelldokument gegenchecken.** Immer 10–20 % der extrahierten Daten stichprobenartig mit dem Original abgleichen. KI-Modelle können strukturierte Daten halluzinieren, insbesondere aus Tabellen mit verbundenen Zellen oder unklarer Formatierung.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist der Unterschied zwischen extraktiver und abstraktiver KI-Zusammenfassung?',
              a: 'Extraktive Zusammenfassung kopiert Sätze direkt aus dem Quelldokument ohne Modifikation — faktische Fehler sind strukturell ausgeschlossen, da kein neuer Text generiert wird. Abstraktive Zusammenfassung verwendet LLMs, um neue paraphrasierte Sätze zu generieren — was lesbarere Ausgaben erzeugt, aber mit Halluzinationsraten von 0,7–14 % je nach Modell und Aufgabe. Extraktiv für Rechts- und Compliance-Dokumente; abstraktiv für Executive Summaries und Forschungssynthesen.',
            },
            {
              q: 'Welches KI-Modell halluziniert am wenigsten bei der Dokumentenzusammenfassung?',
              a: 'Im Vectara HHEM-Benchmark — dem Standardtest für Zusammenfassungstreue über 831 Dokumente — erzielte Gemini-2.0-Flash-001 (Google DeepMind) mit 0,7 % die niedrigste Halluzinationsrate (Stand 2025). Diese Raten gelten nur für quelltreue Aufgaben; offene Faktabrückfragen ergeben Raten von 3–33 % bei denselben Modellen.',
            },
            {
              q: 'Wie viele Seiten können KI-Zusammenfassungstools auf einmal verarbeiten?',
              a: 'GPT-5.5 (OpenAI) verarbeitet ca. 100 Standardseiten pro Sitzung (128.000 Token). Claude Opus 4.7 (Anthropic) verarbeitet ca. 160 Seiten (200.000 Token). Gemini 3.1 Pro (Google DeepMind) verarbeitet ca. 800 Seiten (1 Mio. Token). NotebookLM (Google DeepMind) unterstützt bis zu 50 Quellen mit insgesamt ca. 500.000 Wörtern pro Notizbuch. Bei größeren Korpora ist Document Chunking erforderlich.',
            },
            {
              q: 'Ist NotebookLM oder Claude besser für die Dokumentenzusammenfassung?',
              a: 'Beide Produkte erfüllen unterschiedliche Anforderungen. NotebookLM (Google DeepMind) bietet strengere Quellenverankerung mit anklickbaren Inline-Zitaten und ist besser für die quelltreue Wiedergabe von Dokumentinhalten. Claude Opus 4.7 (Anthropic) liefert tiefere Analysen, ist führend bei der Synthese mehrerer Dokumente und erkennt nicht offensichtliche Verbindungen — kann aber Quellinhalte gelegentlich mit Trainingswissen vermischen. NotebookLM für Präzision; Claude für Erkenntnisgewinnung.',
            },
            {
              q: 'Wie verhindere ich KI-Halluzinationen in meinen Zusammenfassungen?',
              a: 'Vier Techniken reduzieren Halluzinationen: (1) explizit anweisen — „Fasse nur aus dem folgenden Dokument zusammen; füge kein externes Wissen hinzu"; (2) Temperature (T) auf 0,0–0,1 setzen für maximalen Determinismus; (3) Treuecheck durchführen — das Modell auffordern, jede Aussage in der Zusammenfassung ihrer Quellpassage zuzuordnen; (4) Gegencheck mit einem zweiten Modell — wenn GPT-5.5 und Claude Opus 4.7 einem Sachverhalt übereinstimmen, ist die Wahrscheinlichkeit gemeinsamer Halluzination statistisch nahezu null.',
            },
            {
              q: 'Was ist Document Chunking und wann sollte ich es nutzen?',
              a: 'Chunking teilt ein Dokument in Segmente (typischerweise 500–2.000 Token), fasst jedes Segment separat zusammen und synthetisiert die Teilergebnisse zu einer Gesamtausgabe. Nutzen Sie es, wenn Ihr Dokument das Kontextfenster des Modells überschreitet — ca. 100 Seiten bei GPT-5.5 (128.000 Token), 160 Seiten bei Claude Opus 4.7 (200.000 Token) oder 800 Seiten bei Gemini 3.1 Pro (1 Mio. Token). Für strukturierte Dokumente (Rechtsverträge, Jahresberichte) liefert thematisches Chunking nach Abschnittsüberschriften die kohärentesten Ergebnisse.',
            },
            {
              q: 'Was sind ROUGE und BERTScore, und welche Metrik eignet sich für die Evaluierung von KI-Zusammenfassungen?',
              a: 'ROUGE misst N-Gramm-Überlappung zwischen generierter Zusammenfassung und Referenz — nützlich für Benchmarks, jedoch blind gegenüber Semantik und Faktentreue. BERTScore verwendet Kosinus-Ähnlichkeit zwischen BERT-Embeddings und erfasst semantische Ähnlichkeit statt exakter Wortübereinstimmung. Für Produktions-Workflows empfiehlt sich die Kombination aus HHEM-Treue-Score und einem Vollständigkeitscheck.',
            },
            {
              q: 'Können KI-Zusammenfassungstools auch nicht-englische Dokumente verarbeiten?',
              a: 'Ja, mit wichtigen Einschränkungen. Mistral AI-Modelle (Frankreich) unterstützen Französisch und europäische Sprachen nativ und können lokal für DSGVO-Konformität bereitgestellt werden. Qwen 3 (Alibaba) tokenisiert chinesische Schriftzeichen mit ca. 40 % weniger Token als GPT-5.5. LLaMA 4-Modelle über Ollama ermöglichen mehrsprachige Zusammenfassung komplett lokal ohne externe API-Aufrufe.',
            },
            {
              q: 'Muss ich bei der Verwendung von KI-Zusammenfassungstools die DSGVO beachten?',
              a: 'Ja. Werden personenbezogene Daten an externe API-Endpunkte gesendet (z. B. OpenAI, Anthropic), gilt Artikel 28 DSGVO: Es muss ein Auftragsverarbeitungsvertrag (AVV) geschlossen werden und die Daten dürfen nur für den vereinbarten Zweck genutzt werden. Die Alternative nach BSI-Grundschutz-Katalogen ist die lokale Bereitstellung — z. B. Mistral Large via Ollama oder LLaMA 4 on-premises — wodurch keine Daten das Unternehmensnetz verlassen. Für besonders sensible Dokumente (Gesundheit, Finanzen, Recht) empfehlen DACH-Rechtsexperten ausschließlich lokale Inferenz.',
            },
            {
              q: 'Ist KI-gestützte Dokumentenzusammenfassung für den deutschen Mittelstand geeignet?',
              a: 'Ja, sofern die richtige Infrastruktur gewählt wird. Mittelständische Unternehmen profitieren besonders von NotebookLM für interne Berichte und Vertragsanalysen sowie von lokal bereitgestellten Modellen (LLaMA 4 via Ollama) für datenschutzkritische Dokumente. Der BSI-Grundschutz empfiehlt für KMU eine Risikoanalyse vor der Cloud-API-Nutzung. Typische Anwendungsfälle: automatische Zusammenfassung von Lieferantenverträgen, Protokollkondensierung aus Meetings, Extraktion von Compliance-relevanten Klauseln aus AGBs.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen & Weiterführende Literatur',
          items: [
            '[Liu et al., 2025. „A hallucination detection and mitigation framework for text summarisation"](https://www.nature.com/articles/s41598-025-31075-1) — führt Q-S-E-Methodik für iterative Halluzinationskorrektur über CNN/DailyMail, PubMed und ArXiv ein',
            '[Vectara HHEM Leaderboard, 2025. „Hughes Hallucination Evaluation Model — Document Summarisation Faithfulness Rankings"](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) — 100+ LLMs über 831 Dokumente getestet; Gemini-2.0-Flash bei 0,7 % Halluzinationsrate',
            '[SEI/CMU, 2025. „Evaluating LLMs for Text Summarisation: An Introduction"](https://www.sei.cmu.edu/blog/evaluating-llms-for-text-summarization-introduction/) — Framework für Genauigkeits-, Treue-, Komprimierungs- und Effizienzauswertung',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Extraire et résumer avec l\'IA',
      intro: 'L\'extraction et le résumé assistés par IA réduisent le temps d\'examen des documents de 60–80 % en atteignant des taux d\'hallucination de seulement 0.7 % pour les tâches de résumé ancrées à la source — la clé réside dans le choix du type de résumé, du modèle et de la structure de prompt appropriés à chaque catégorie de document.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-29',
      seoTitle: 'Extraire et résumer des documents avec l\'IA en 2026',
      metaDescription: 'Le résumé par IA atteint 0.7 % de taux d\'hallucination sur textes sources. NotebookLM, Claude, GPT-5.5 comparés — avec des prompts pour des résumés fidèles.',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Résumé de documents par IA',
      audience: 'Chercheurs, analystes et développeurs traitant de grandes collections de documents avec l\'IA',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Résumé extractif vs abstrait : lequel choisir ?', anchor: '#two-summarisation-types' },
        { label: 'Quel modèle IA hallucine le moins ?', anchor: '#which-model-for-summarisation' },
        { label: 'Comparaison d\'outils de résumé', anchor: '#tool-comparison' },
        { label: 'Comment rédiger des prompts d\'extraction', anchor: '#extraction-prompt-structure' },
        { label: 'Les 5 composants d\'un prompt d\'extraction efficace', anchor: '#five-component-prompt' },
        { label: 'Traiter les documents longs par chunking', anchor: '#chunking-long-documents' },
        { label: 'Résumé itératif', anchor: '#iterative-summarisation' },
        { label: 'Pourquoi les modèles IA hallucinisent-ils encore ?', anchor: '#hallucination-analysis' },
        { label: 'Métriques d\'évaluation : ROUGE, BERTScore, HHEM', anchor: '#evaluation-metrics' },
        { label: 'Contexte mondial et régional', anchor: '#global-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Questions fréquemment posées', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Extraire et résumer avec l\'IA',
        description: 'Le résumé de documents par IA réduit le temps d\'examen de 60–80 % avec 0.7 % d\'hallucinations. Approches extractives vs abstraites, comparaison de modèles et structure de prompts pour des résumés fidèles.',
        url: 'https://www.promptquorum.com/prompt-engineering/extract-and-summarise?lang=fr',
        inLanguage: 'fr',
        datePublished: '2026-03-23',
        dateModified: '2026-04-29',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/extract-and-summarise',
          width: 1200,
          height: 630,
        },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Résumé de documents' },
          { '@type': 'Thing', name: 'Hallucination des LLM' },
          { '@type': 'Thing', name: 'Ingénierie des prompts' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        keywords: ['résumé par IA', 'extraction de documents', 'résumé abstrait', 'résumé extractif', 'NotebookLM', 'Claude', 'taux d\'hallucination', 'ingénierie des prompts'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Elicit' },
          { '@type': 'SoftwareApplication', name: 'Scholarcy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre le résumé extractif et abstrait par IA ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le résumé extractif copie les phrases directement du document source sans modification — les erreurs factuelles sont structurellement impossibles car aucun nouveau texte n\'est généré. Le résumé abstrait utilise des LLM pour générer de nouvelles phrases paraphrasées qui condensent l\'information — produisant une sortie plus lisible mais avec des taux d\'hallucination de 0.7–14 % selon le modèle et la tâche. Extractif pour les documents juridiques et de conformité ; abstrait pour les synthèses de recherche et les résumés exécutifs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel modèle IA hallucine le moins lors de la résumé de documents ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur le benchmark HHEM de Vectara — le test standard de fidélité de résumé sur 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) a atteint le taux d\'hallucination le plus bas de 0.7 % en 2025. Ces taux ne s\'appliquent qu\'aux tâches ancrées à la source ; le rappel de faits en domaine ouvert produit des taux de 3–33 % pour les mêmes modèles.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de pages les outils de résumé par IA peuvent-ils traiter à la fois ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPT-5.5 (OpenAI) traite environ 100 pages standard par session (limite de 128 000 jetons). Claude Opus 4.7 (Anthropic) traite environ 160 pages (200 000 jetons). Gemini 3.1 Pro (Google DeepMind) traite environ 800 pages (1 million de jetons). NotebookLM (Google DeepMind) supporte jusqu\'à 50 sources totalisant environ 500 000 mots par carnet. Pour les corpus plus importants, le chunking de documents est nécessaire.',
            },
          },
          {
            '@type': 'Question',
            name: 'NotebookLM ou Claude est-il meilleur pour la résumé de documents ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les deux répondent à des besoins différents. NotebookLM (Google DeepMind) offre un ancrage à la source plus strict avec des citations inline cliquables — il hallucine moins sur les sources téléchargées et excelle à représenter fidèlement ce que les documents disent. Claude Opus 4.7 (Anthropic) produit une analyse plus nuancée, excelle à synthétiser plusieurs documents et identifie les connexions non évidentes — mais mélange occasionnellement le contenu source avec les connaissances d\'entraînement de manière subtile. NotebookLM pour la précision ; Claude pour l\'insight.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment empêcher l\'IA de halluciner dans mes résumés ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Quatre techniques réduisent l\'hallucination dans les tâches de résumé : (1) instruire explicitement — « résumez uniquement le document ci-dessous ; n\'ajoutez pas de connaissances externes » ; (2) définir la température (T) à 0.0–0.1 pour le déterminisme maximal ; (3) faire un contrôle de fidélité — demander au modèle de lister chaque affirmation dans son résumé et d\'identifier sa phrase source ; (4) faire une vérification croisée avec un deuxième modèle — quand GPT-5.5 et Claude Opus 4.7 s\'accordent sur un fait spécifique, la probabilité d\'hallucination partagée est statistiquement quasi nulle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que le chunking de documents et quand devrais-je l\'utiliser ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le chunking divise un document en segments (généralement 500–2 000 jetons), résume chaque segment séparément, puis synthétise les résumés de chunks en une sortie finale. Utilisez-le quand votre document dépasse la fenêtre de contexte du modèle — environ 100 pages pour GPT-5.5 (128 000 jetons), 160 pages pour Claude Opus 4.7 (200 000 jetons) ou 800 pages pour Gemini 3.1 Pro (1 million de jetons). Pour les documents structurés (contrats juridiques, rapports annuels), le chunking thématique par en-têtes de section produit la synthèse finale la plus cohérente.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que sont ROUGE et BERTScore, et quelle métrique devrais-je utiliser pour évaluer les résumés IA ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ROUGE mesure le chevauchement de n-grammes entre un résumé généré et une référence — utile pour les benchmarks mais aveugle au sens sémantique et à la précision factuelle. BERTScore utilise la similarité cosinus entre les embeddings BERT, capturant la similarité sémantique plutôt que les correspondances de mots exacts. Pour les workflows de production, la combinaison du scoring HHEM de fidélité avec une vérification de complétude fournit le signal de qualité le plus fiable.',
            },
          },
          {
            '@type': 'Question',
            name: 'Les outils de résumé par IA peuvent-ils traiter des documents dans d\'autres langues que l\'anglais ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, avec des avertissements importants. Les modèles Mistral AI (France) supportent nativement le français et les langues européennes et peuvent être déployés localement pour la conformité RGPD. Qwen 3 (Alibaba) tokenise les caractères chinois avec environ 40 % moins de jetons que GPT-5.5. Les modèles LLaMA 4 via Ollama permettent la résumé multilingue entièrement local sans appels API externes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dois-je respecter le RGPD en utilisant les outils de résumé par IA ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Si vous envoyez des données à caractère personnel à des points de terminaison API externes (par ex. OpenAI, Anthropic), l\'article 28 du RGPD s\'applique : un contrat de traitement des données (DPA) doit être conclu et les données ne peuvent être utilisées que pour l\'objectif convenu. L\'alternative pour la conformité RGPD est le déploiement local — par exemple Mistral Large via Ollama ou LLaMA 4 sur site — évitant que les données ne quittent le réseau de l\'entreprise. Pour les documents particulièrement sensibles (santé, finances, droit), les experts juridiques RGPD recommandent l\'inférence entièrement locale.',
            },
          },
          {
            '@type': 'Question',
            name: 'La résumé de documents assistée par IA est-elle appropriée pour les entreprises françaises ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, à condition de choisir la bonne infrastructure. Les entreprises françaises bénéficient particulièrement de NotebookLM pour les rapports internes et l\'analyse de contrats, ainsi que des modèles déployés localement pour les documents sensibles. La CNIL recommande, pour les données sensibles en santé, finances ou droit, de privilégier l\'inférence locale ou un prestataire certifié avec un DPA. Cas d\'usage typiques : résumé automatisé des contrats fournisseurs, condensation de procès-verbaux de réunions, extraction de clauses pertinentes pour la conformité.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: 'Extraire et résumer avec l\'IA : sujets clés',
        description: 'Concepts fondamentaux pour l\'extraction et le résumé de documents assistés par IA',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Résumé extractif vs abstrait', description: 'Comprendre les compromis entre précision factuelle et lisibilité' },
          { '@type': 'ListItem', position: 2, name: 'Quel modèle IA choisir', description: 'Comparaison de NotebookLM, Claude, GPT-5.5 et Gemini pour les tâches de résumé' },
          { '@type': 'ListItem', position: 3, name: 'Structure du prompt pour l\'extraction', description: 'Comment rédiger des prompts structurés qui préviennent l\'hallucination' },
          { '@type': 'ListItem', position: 4, name: 'Réduire les hallucinations de l\'IA', description: 'Paramètres de température, vérifications de fidélité et vérification multi-modèles' },
          { '@type': 'ListItem', position: 5, name: 'Outils et workflows', description: 'Utiliser NotebookLM, Scholarcy, Elicit et des pipelines d\'extraction personnalisés' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'fr',
        name: 'Comment extraire et résumer des documents avec l\'IA',
        totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choisir l\'outil selon le type de source et la structure d\'extraction', text: 'Utiliser NotebookLM pour vos propres fichiers PDF et documents, Elicit pour les articles académiques avec des champs structurés (méthodologie, taille d\'échantillon, résultats) et Perplexity pour la résumé web en temps réel.' },
          { '@type': 'HowToStep', position: 2, name: 'Définir le schéma d\'extraction à l\'avance (JSON, tableau, liste à puces)', text: 'Indiquer au modèle exactement quelles colonnes ou champs vous avez besoin et le type de données pour chacun. Exemple : « Renvoyer un tableau JSON avec les clés : author (texte), year (nombre), finding (texte max 200 caractères), confidence (haute/moyenne/basse). »' },
          { '@type': 'HowToStep', position: 3, name: 'Définir la température (T) à 0.1–0.3', text: 'Les températures plus basses produisent des résultats plus déterministes et cohérents. Réserver les températures plus élevées uniquement pour le brainstorming d\'interprétations alternatives de matériel source ambigu.' },
          { '@type': 'HowToStep', position: 4, name: 'Pour les grands documents, extraire en plusieurs passages avec points de contrôle', text: 'Pour les fichiers PDF de 100+ pages, extraire les sections 1–25, puis 26–50, etc., en stockant les résultats dans un format structuré. Cela prévient le débordement de fenêtre de contexte et facilite la détection et la correction des erreurs.' },
          { '@type': 'HowToStep', position: 5, name: 'Vérifier les extractions clés avec le document source', text: 'Vérifier toujours 10–20 % des données extraites par rapport à l\'original. Les modèles IA peuvent halluciner ou mal lire les données structurées, particulièrement des tableaux avec des cellules fusionnées ou une mise en forme peu claire.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Points clés',
          isTldr: true,
          items: [
            'Utiliser le résumé extractif pour les documents juridiques, de conformité et exigeant une exactitude mot-pour-mot ; utiliser le résumé abstrait par LLM pour la synthèse de recherche et les résumés exécutifs',
            'Gemini-2.0-Flash-001 atteint un taux d\'hallucination de 0.7 % pour la résumé ancrée à la source — la meilleure performance du benchmark HHEM de Vectara sur 831 documents',
            'NotebookLM (Google DeepMind) offre la résumé ancrée la plus fiable avec des citations inline cliquables ; Claude Opus 4.7 excelle en synthèse multi-documents et analyse complexe',
            'Les taux d\'hallucination de la résumé ancrée ont baissé de 96 % de 2021 à 2025 — mais une preuve mathématique (2025) confirme que l\'hallucination ne peut pas être entièrement éliminée sous les architectures LLM actuelles',
            'Pour les documents dépassant la fenêtre de contexte, le chunking thématique (par section/sujet) produit la synthèse finale la plus cohérente',
            'Claude Opus 4.7 traite environ 160 pages par session (200 000 jetons) ; Gemini 3.1 Pro environ 800 pages (1 million de jetons) — les limites de contexte détermine quel modèle est pratique pour les grands ensembles de documents',
          ],
        },
        definition: {
          id: 'two-summarisation-types',
          title: 'Quels sont les deux types de résumé par IA et quand utiliser chacun ?',
          content: [
            '**Le résumé extractif copie les phrases directement de la source ; le résumé abstrait génère de nouvelles phrases qui paraphrasent et condensent — les deux approches échangent la précision factuelle contre la lisibilité et la compression.**',
            'Le résumé extractif — utilisé par des outils comme Scholarcy — classe les phrases par fréquence de mots-clés, position et densité d\'information, puis reproduit les phrases les mieux classées sans modification. Puisqu\'aucun nouveau texte n\'est généré, les erreurs factuelles sont structurellement impossibles : la sortie est toujours un sous-ensemble de la source. Le résumé abstrait — utilisé par GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic) et Gemini 3.1 Pro (Google DeepMind) — génère du texte nouveau qui synthétise et paraphrase, produisant une sortie plus lisible au prix d\'un risque d\'hallucination plus élevé.',
          ],
          columns: ['Méthode', 'Risque hallucination', 'Lisibilité', 'Approprié pour'],
          rows: [
            {
              Méthode: 'Extractif',
              'Risque hallucination': 'Quasi nul (copie source)',
              Lisibilité: 'Inférieur — peut être décousu',
              'Approprié pour': 'Documents juridiques, conformité, exigences de formulation exacte',
            },
            {
              Méthode: 'Abstrait (LLM)',
              'Risque hallucination': '0.7–14 % selon modèle et tâche',
              Lisibilité: 'Élevée — prose naturelle',
              'Approprié pour': 'Synthèse de recherche, résumés exécutifs, rapports',
            },
            {
              Méthode: 'Hybride (extractif → abstrait)',
              'Risque hallucination': 'Faible',
              Lisibilité: 'Élevée',
              'Approprié pour': 'Rapports financiers, littérature académique, documentation technique',
            },
          ],
          blockquote: 'Une étude arXiv (2025) sur les approches de résumé pour les articles de presse financière a montré que les méthodes extractives (Lead-1, MatchSum) établissent de solides références pour les textes courts bien structurés — mais les LLM abstraits les surpassent pour les documents financiers complexes s\'ils sont ajustés sur des données spécifiques au domaine. En une phrase : extractif si l\'erreur factuelle n\'est pas tolérée ; abstrait si la sortie doit être lisible et utilisable sans édition supplémentaire.',
        },
        toolComparison: {
          id: 'which-model-for-summarisation',
          title: 'Quel modèle IA a le taux d\'hallucination le plus bas pour la résumé ?',
          content: [
            '**NotebookLM (Google DeepMind) excelle pour la résumé ancrée à la source avec citations de documents téléchargés ; Claude Opus 4.7 (Anthropic) excelle pour la synthèse, l\'analyse multi-documents et le raisonnement complexe ; GPT-5.5 (OpenAI) excelle pour la résumé généraliste rapide et flexible.**',
            'Sur le Hughes Hallucination Evaluation Model (HHEM) de Vectara — le benchmark standard de fidélité de résumé testé sur 831 documents par modèle — les meilleurs performants en 2025 étaient :',
            'Ces taux représentent une amélioration de 96 % par rapport à 2021, quand les meilleurs modèles avaient des taux d\'hallucination de 21.8 % sur la même tâche. Cependant, ces chiffres s\'appliquent uniquement à la résumé ancrée à la source — le rappel factuel en domaine ouvert produit des taux de 3–33 % pour les mêmes modèles.',
          ],
          items: [
            '**Gemini-2.0-Flash-001 (Google DeepMind) :** taux d\'hallucination de 0.7 % — le plus bas enregistré au benchmark',
            '**Variantes OpenAI et Gemini :** taux d\'hallucination de 0.8–1.5 %',
            '**Au total :** 4 modèles atteignent maintenant des taux sub-1 % pour les tâches de résumé ancrées à la source',
          ],
        },
        toolTable: {
          id: 'tool-comparison',
          title: 'Comment NotebookLM, Claude, GPT-5.5 et Gemini se comparent-ils côte à côte ?',
          columns: ['Outil', 'Limite de contexte', 'Qualité des citations', 'Meilleur cas d\'usage'],
          rows: [
            {
              Outil: 'NotebookLM (Google DeepMind)',
              'Limite de contexte': 'env. 500K mots / 50 sources',
              'Qualité des citations': 'Citations inline numérotées, cliquables',
              'Meilleur cas d\'usage': 'Examen de recherche structuré, Q&A ancrée à la source',
            },
            {
              Outil: 'Claude Projects (Anthropic)',
              'Limite de contexte': 'env. 200K jetons (env. 160 pages)',
              'Qualité des citations': 'Incohérente par défaut ; fiable avec prompts',
              'Meilleur cas d\'usage': 'Synthèse inter-sources, raisonnement complexe, construction d\'arguments',
            },
            {
              Outil: 'GPT-5.5 (OpenAI)',
              'Limite de contexte': '128K jetons (env. 100 pages)',
              'Qualité des citations': 'Modérée ; nécessite une instruction explicite',
              'Meilleur cas d\'usage': 'Documents généraux, résumés rapides',
            },
            {
              Outil: 'Gemini 3.1 Pro (Google DeepMind)',
              'Limite de contexte': '1M jetons (env. 800 pages)',
              'Qualité des citations': 'Modérée',
              'Meilleur cas d\'usage': 'Analyse complète de code ou de grand corpus',
            },
            {
              Outil: 'Elicit',
              'Limite de contexte': '138M+ articles académiques',
              'Qualité des citations': 'Extraction académique structurée',
              'Meilleur cas d\'usage': 'Revues systématiques de littérature',
            },
          ],
          content: [
            '**Testé chez PromptQuorum — 25 prompts de résumé de documents distribués sur trois modèles :** Claude Opus 4.7 a produit les résumés analytiquement les plus complets dans 20 des 25 cas (identifiant implications et connexions entre documents). GPT-5.5 a produit les résumés les plus concis et immédiatement utilisables dans 18 des 25 cas. Gemini 3.1 Pro était le seul modèle pouvant traiter les 25 documents complets sans troncature de contexte, car plusieurs dépassaient 80 000 jetons.',
          ],
        },
        promptStructure: {
          id: 'extraction-prompt-structure',
          title: 'Comment rédiger des prompts d\'extraction et de résumé ?',
          content: [
            '**Un prompt de résumé structuré — celui qui spécifie le type de document, le format de sortie, la limite de longueur et l\'instruction explicite de signaler les affirmations non vérifiables — produit des résultats directement utilisables ; un prompt non structuré produit un paragraphe générique qui manque les informations critiques.**',
            'L\'erreur [d\'ingénierie des prompts](/prompt-engineering/what-is-prompt-engineering?lang=fr) la plus courante en résumé est de traiter « résumez ceci » comme une instruction complète. Chaque hypothèse du modèle sur la longueur, le format, la perspective et le niveau de détail est un décalage potentiel avec ce que vous avez réellement besoin. La [structure en 5 blocs](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr) — Rôle, Tâche, Entrée, Contraintes, Format de sortie — s\'applique directement aux tâches d\'extraction.',
          ],
        },
        promptFramework: {
          id: 'five-component-prompt',
          title: 'Quels sont les 5 composants d\'un prompt d\'extraction efficace ?',
          content: '**Mauvais prompt — non structuré, produit une sortie générique inutilisable :**',
          items: [
            '**Rôle** — « Vous êtes un analyste spécialisé en [domaine]. »',
            '**Instruction source** — « Résumez uniquement les informations du document ci-dessous. N\'ajoutez pas de connaissances externes. »',
            '**Format de sortie** — « Rendez un résumé structuré avec ces sections : [Découvertes clés], [Méthodologie], [Limites], [Actions recommandées]. »',
            '**Limite de longueur** — « Maximum 300 mots au total. »',
            '**Instruction d\'incertitude** — « Si une affirmation dans le document est ambiguë ou contredite par un autre passage, signalez-la avec [À VÉRIFIER]. »',
          ],
          blockquote: 'Résumez ce rapport.',
        },
        goodExample: {
          id: 'good-prompt-example',
          title: 'À quoi ressemble un prompt de résumé bien structuré ?',
          blockquote: 'Vous êtes un analyste financier. Résumez le rapport de résultats Q3 ci-joint en utilisant uniquement les informations du document — n\'ajoutez pas de contexte externe. Structurez la sortie comme suit : [Chiffre d\'affaires & Marges], [Performance par segment], [Changements de prévision], [Risques clés]. Maximum 250 mots. Signalez tout chiffre qui contredit une affirmation antérieure dans le même document avec [DISCORDANCE].',
          content: [
            'Le prompt structuré produit un document directement utilisable dans une présentation. Le prompt ouvert produit un paragraphe narratif qui omet les données de segment, cache les changements de prévision et nécessite 30 minutes de restructuration.',
          ],
        },
        chunking: {
          id: 'chunking-long-documents',
          title: 'Comment gérer les documents dépassant la fenêtre de contexte ?',
          content: [
            '**Pour les documents dépassant la fenêtre de contexte du modèle, le chunking — diviser le document en segments de 500–2 000 jetons, résumer chaque chunk, puis synthétiser — préserve l\'information qui serait autrement tronquée ou dégradée.**',
            'Pour les documents avec une structure de section claire (contrats juridiques, rapports annuels, articles académiques), le chunking thématique produit la synthèse finale la plus cohérente. Pour les documents non structurés (discussions par email, transcriptions), le chunking basé sur les paragraphes à intervalles de 500 jetons est le standard recommandé.',
          ],
          columns: ['Méthode', 'Cohérence', 'Approprié pour', 'Compromis'],
          rows: [
            {
              Méthode: 'Thématique (par section)',
              Cohérence: 'Maximale',
              'Approprié pour': 'Rapports, contrats, articles académiques',
              Compromis: 'Requiert des en-têtes clairs dans la source',
            },
            {
              Méthode: 'Basé sur les paragraphes',
              Cohérence: 'Élevée',
              'Approprié pour': 'La plupart des types de documents',
              Compromis: 'Peut séparer les idées étroitement liées',
            },
            {
              Méthode: 'Limite de jetons fixe',
              Cohérence: 'Moyenne',
              'Approprié pour': 'Texte non structuré',
              Compromis: 'Sépare les arguments à des points arbitraires',
            },
            {
              Méthode: 'Basé sur les phrases',
              Cohérence: 'Faible',
              'Approprié pour': 'Granularité maximale',
              Compromis: 'Coût de calcul le plus élevé ; fragmente le contexte',
            },
          ],
        },
        iterativeSummarisation: {
          id: 'iterative-summarisation',
          title: 'Comment la résumé itérative réduit-elle les omissions ?',
          content: [
            '**Le résumé itératif — générer un résumé initial, puis l\'affiner avec un deuxième prompt ciblé — améliore la complétude factuelle et réduit les omissions par rapport à la génération en un seul passage.**',
            'Le résumé itératif génère un résumé initial, puis applique un deuxième prompt pour attraper les affirmations manquantes. La structure en deux étapes :',
          ],
          numberedItems: [
            '**Prompt initial :** « Résumez les arguments clés, les points de données et les conclusions du document. Signalez tout ce dont vous n\'êtes pas certain. »',
            '**Prompt d\'affinage :** « Examinze votre résumé. Identifiez toute affirmation énoncée dans le document mais absente de votre résumé. Ajoutez maintenant ces affirmations. »',
          ],
        },
        hallucinationAnalysis: {
          id: 'hallucination-analysis',
          title: 'Pourquoi les modèles IA hallucinisent-ils encore dans les résumés et à quelle fréquence ?',
          content: [
            '**Les taux d\'hallucination de la résumé ancrée à la source ont baissé de 96 % depuis 2021 — de 21.8 % à 0.7 % pour les meilleurs modèles — mais une preuve mathématique (2025) a confirmé que l\'hallucination ne peut pas être complètement éliminée sous les architectures LLM actuelles.**',
            'La raison architecturale est fondamentale : les LLM génèrent des jetons statistiquement probables basés sur la reconnaissance de motifs sur les données d\'entraînement, pas en récupérant les faits vérifiés. Même avec un document source fourni, un modèle « mélange » occasionnellement le contenu source avec les connaissances d\'entraînement de manière à produire une phrase plausible mais infidèle — ce que les chercheurs appellent « hallucination de contexte mixte ». C\'est l\'une des [limites fondamentales de l\'IA](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=fr) que les workflows de résumé ancré doivent gérer.',
            'Les modes de défaillance en résumé par IA, par ordre de fréquence :',
          ],
          items: [
            '**Hallucination de contexte mixte** — le modèle combine les faits de la source avec les faits des données d\'entraînement, produisant une phrase partiellement correcte et partiellement inventée',
            '**Information manquante** — le modèle omet les affirmations clés de la source qui se trouvaient en positions moins proéminentes',
            '**Incohérence factuelle** — le modèle contredit un chiffre ou une date spécifique du document source',
            '**Information non pertinente** — le modèle ajoute du contexte des données d\'entraînement non présentes dans la source',
          ],
          blockquote: 'Un framework publié dans Nature en 2025 (Liu et al.) a introduit une méthodologie Question-Answer Generation, Sorting, and Evaluation (Q-S-E) qui détecte et corrige itérativement les hallucinations dans les résumés — démontrant des améliorations mesurables des scores de fidélité sur les trois ensembles de données de référence (CNN/Daily Mail, PubMed, ArXiv). Le dispatch multi-modèles de PromptQuorum aborde cela directement : envoyer le même document simultanément à GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic) et Gemini 3.1 Pro et comparer les résultats identifie les passages où les modèles divergent — qui sont statistiquement les passages à plus haut risque d\'hallucination.',
        },
        evaluationMetrics: {
          id: 'evaluation-metrics',
          title: 'Quelle métrique mesure la qualité du résumé par IA : ROUGE, BERTScore ou HHEM ?',
          content: [
            '**ROUGE, BERTScore et les métriques de fidélité mesurent des dimensions différentes et non chevauchantes de la qualité du résumé — aucune métrique unique ne suffit à déterminer si un résumé par IA est digne de confiance.**',
            'ROUGE mesure le chevauchement de n-grammes entre un résumé généré et une résumé de référence — utile pour les benchmarks mais aveugle au sens sémantique et à la précision factuelle. BERTScore utilise la similarité cosinus entre les embeddings BERT du résumé généré et de référence, capturant la similarité sémantique plutôt que les correspondances de mots exactes. Les métriques de fidélité (HHEM, FaithJudge) mesurent si le résumé ne contient que les affirmations soutenues par le document source — la métrique la plus pertinente pour les cas d\'usage de résumé de production.',
          ],
          columns: ['Métrique', 'Ce qu\'elle mesure', 'Limitation'],
          rows: [
            {
              Métrique: 'ROUGE',
              'Ce qu\'elle mesure': 'Chevauchement de n-grammes avec référence',
              Limitation: 'Aveugle au sens sémantique ; récompense la similarité lexicale',
            },
            {
              Métrique: 'BLEU',
              'Ce qu\'elle mesure': 'Précision du chevauchement de n-grammes',
              Limitation: 'Conçu pour la traduction ; pauvre fit pour la résumé',
            },
            {
              Métrique: 'BERTScore',
              'Ce qu\'elle mesure': 'Similarité sémantique via les embeddings',
              Limitation: 'Nécessite un résumé de référence ; coûteux en calcul',
            },
            {
              Métrique: 'Fidélité (HHEM)',
              'Ce qu\'elle mesure': 'Cohérence factuelle avec la source',
              Limitation: 'Ne mesure pas la complétude ou l\'utilité',
            },
            {
              Métrique: 'G-Eval',
              'Ce qu\'elle mesure': 'Multi-dimensionnel : couverture, pertinence, fluidité',
              Limitation: 'Standard le plus récent ; pas encore universellement adopté',
            },
          ],
          blockquote: 'Pour les pipelines de documents de production, combiner le scoring HHEM de fidélité avec une vérification de complétude (le résumé mentionne-t-il tous les affirmations clés de la source ?) produit le signal de qualité le plus fiable.',
        },
        globalContext: {
          id: 'global-context',
          title: 'Comment le RGPD, le droit chinois et les directives METI affectent-ils la résumé par IA ?',
          content: [
            'Les entreprises européennes traitant des documents en vertu du RGPD ne peuvent pas envoyer du contenu sensible à des points de terminaison API externes sans examen de conformité. Mistral AI (France) fournit des modèles déployables localement — Mistral Large et Mistral Small — qui effectuent la résumé abstraite entièrement sur site, sans que les données ne quittent l\'infrastructure de l\'organisation, satisfaisant les exigences de résidence des données de l\'UE en vertu de l\'article 46 du RGPD. La CNIL recommande, pour les données sensibles en santé, finances ou droit, de privilégier l\'inférence locale ou un prestataire certifié.',
            'Les entreprises chinoises utilisent de plus en plus **Qwen 3** (Alibaba) et **DeepSeek V3-0324** pour les tâches d\'extraction de documents sur les corpus en langue chinoise. Les deux modèles tokenisent les caractères chinois (scripts CJK) plus efficacement que les modèles entraînés en Occident — un document chinois de 10 000 caractères consomme environ 40 % moins de jetons dans Qwen 3 que dans GPT-5.5, rendant le traitement à grande échelle de documents chinois nettement moins cher. Les mesures intérimaires chinoises pour l\'IA générative (2023) exigent que les résumés générés par IA utilisés dans les contextes officiels soient étiquetés comme générés par IA.',
            'Les entreprises japonaises exploitant les directives de gouvernance des données METI déploient fréquemment **Ollama** avec les modèles LLaMA 4 pour la résumé locale de documents. LLaMA 4 7B nécessite 8 GB de RAM pour l\'inférence locale et produit zéro appels API externes — satisfaisant les exigences strictes de résidence des données pour les documents juridiques et financiers sensibles.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs les plus courantes en résumé par IA ?',
          items: [
            'Utiliser des prompts ouverts (« résumez ceci ») sans contraintes de format — produit des paragraphes génériques qui oublient les points de données clés et demandent 30+ minutes de restructuration manuelle',
            'Faire confiance aux résumés sans vérification par sondage — les modèles IA hallucinent les données structurées (tableaux, chiffres, dates) à des taux plus élevés que le texte en prose ; toujours vérifier 10–20 % des chiffres extraits dans l\'original',
            'Définir la température au-dessus de 0.3 pour les tâches d\'extraction — les températures au-dessus de 0.3 augmentent mesurément la fréquence d\'hallucination ; utiliser 0.0–0.1 pour le déterminisme maximal sur les tâches ancrées',
            'Ne pas spécifier le type de document dans le prompt — sans contexte, le modèle applique les mauvaises heuristiques de résumé (par exemple traiter un contrat juridique comme un article d\'actualité, omettant le langage critique des clauses)',
            'Ignorer le chunking pour les documents dépassant 50 pages — le débordement de fenêtre de contexte tronque silencieusement le contenu ; le modèle résume uniquement la portion disponible sans avertir qu\'il a manqué quelque chose',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecture complémentaire',
          items: [
            '[Qu\'est-ce que l\'ingénierie des prompts ?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — les principes fondamentaux derrière les instructions IA structurées',
            '[Recherche assistée par IA](/prompt-engineering/ai-powered-research?lang=fr) — comment combiner les outils d\'extraction avec les workflows de vérification multi-sources',
            '[Pourquoi l\'IA hallucine et comment l\'arrêter](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=fr) — comprendre les causes profondes de l\'hallucination et les stratégies d\'atténuation prouvées',
            '[Limites de l\'IA — Ce que les LLM ne peuvent pas faire](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=fr) — techniques spécifiques pour ancrer les résultats de l\'IA dans le contenu source vérifié',
            '[5 composants que chaque prompt IA doit avoir](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr) — composants de prompt structurés qui améliorent directement la précision d\'extraction',
            '[Température et Top-P : contrôler la sortie IA](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=fr) — définir la température à 0.0–0.1 pour la résumé déterministe et résistante aux hallucinations',
            '[Chaînage de pensée](/prompt-engineering/chain-of-thought-prompting?lang=fr) — raisonnement étape par étape qui améliore la fidélité dans l\'analyse complexe multi-sources',
          ],
        },
        howToStart: {
          id: 'how-to-extract-and-summarise',
          title: 'Comment extraire et résumer avec l\'IA',
          numberedItems: [
            '**Choisir l\'outil selon le type de source et la structure d\'extraction.** Utiliser NotebookLM pour vos propres fichiers PDF ou documents, Elicit pour les articles académiques avec des champs structurés (méthodologie, taille d\'échantillon, résultats) et Perplexity pour la résumé web en temps réel. Les extractions texte-vers-tableau fonctionnent mieux avec les systèmes spécialisés (Elicit) qu\'avec les modèles de chat généraux.',
            '**Définir le schéma d\'extraction à l\'avance (JSON, tableau, liste à puces).** Indiquer au modèle exactement quelles colonnes ou champs vous avez besoin et le type de données pour chacun. Exemple : « Renvoyer un tableau JSON avec les clés : author (texte), year (nombre), finding (texte max 200 caractères), confidence (enum : high/medium/low). »',
            '**Définir la température (T) à 0.1–0.3 pour l\'extraction et la résumé.** Les températures plus basses produisent des résultats plus déterministes et cohérents. Réserver les températures plus élevées uniquement pour le brainstorming d\'interprétations alternatives du matériel source ambigu.',
            '**Pour les grands documents, extraire en plusieurs passages avec points de contrôle intermédiaires.** Si vous avez des fichiers PDF de 100+ pages, extraire les sections 1–25, puis 26–50, etc., en stockant les résultats dans un format structuré. Cela prévient le débordement de fenêtre de contexte et facilite la détection et la correction des erreurs.',
            '**Vérifier les extractions clés avec le document source.** Vérifier toujours 10–20 % des données extraites par rapport à l\'original. Les modèles IA peuvent halluciner ou mal lire les données structurées, particulièrement des tableaux avec des cellules fusionnées ou une mise en forme peu claire.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Quelle est la différence entre le résumé extractif et abstrait par IA ?',
              a: 'Le résumé extractif copie les phrases directement du document source sans modification — les erreurs factuelles sont structurellement impossibles car aucun nouveau texte n\'est généré. Le résumé abstrait utilise les LLM pour générer de nouvelles phrases paraphrasées — produisant une sortie plus lisible mais avec des taux d\'hallucination de 0.7–14 % selon le modèle et la tâche. Extractif pour les documents juridiques et de conformité ; abstrait pour les résumés exécutifs et synthèses de recherche.',
            },
            {
              q: 'Quel modèle IA hallucine le moins lors de la résumé de documents ?',
              a: 'Sur le benchmark HHEM de Vectara — le test standard de fidélité de résumé sur 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) a atteint le taux d\'hallucination le plus bas de 0.7 % en 2025. Ces taux s\'appliquent uniquement aux tâches ancrées à la source ; le rappel factuel en domaine ouvert produit des taux de 3–33 % pour les mêmes modèles.',
            },
            {
              q: 'Combien de pages les outils de résumé par IA peuvent-ils traiter à la fois ?',
              a: 'GPT-5.5 (OpenAI) traite environ 100 pages standard par session (128 000 jetons). Claude Opus 4.7 (Anthropic) traite environ 160 pages (200 000 jetons). Gemini 3.1 Pro (Google DeepMind) traite environ 800 pages (1 million de jetons). NotebookLM (Google DeepMind) supporte jusqu\'à 50 sources totalisant environ 500 000 mots par carnet. Pour les corpus plus importants, le chunking de documents est nécessaire.',
            },
            {
              q: 'NotebookLM ou Claude est-il meilleur pour la résumé de documents ?',
              a: 'Ils répondent à des besoins différents. NotebookLM (Google DeepMind) offre un ancrage plus strict à la source avec des citations inline cliquables — il hallucine moins sur les sources téléchargées et excelle à représenter fidèlement ce que les documents disent. Claude Opus 4.7 (Anthropic) produit une analyse plus nuancée, excelle à synthétiser plusieurs documents et identifie les connexions non évidentes — mais mélange parfois le contenu source avec les connaissances d\'entraînement de manière subtile. NotebookLM pour la précision ; Claude pour l\'insight.',
            },
            {
              q: 'Comment empêcher l\'IA de halluciner dans mes résumés ?',
              a: 'Quatre techniques réduisent l\'hallucination : (1) donner des instructions explicites — « résumez uniquement le document ci-dessous ; n\'ajoutez pas de connaissances externes » ; (2) définir la température (T) à 0.0–0.1 pour le déterminisme maximal ; (3) effectuer une vérification de fidélité — demander au modèle de lister chaque affirmation et d\'identifier sa phrase source ; (4) faire une vérification croisée avec un deuxième modèle — quand GPT-5.5 et Claude Opus 4.7 s\'accordent sur un fait, la probabilité d\'hallucination partagée est statistiquement quasi nulle.',
            },
            {
              q: 'Qu\'est-ce que le chunking de documents et quand devrais-je l\'utiliser ?',
              a: 'Le chunking divise un document en segments (généralement 500–2 000 jetons), résume chaque segment séparément, puis synthétise les résumés des chunks. Utilisez-le quand votre document dépasse la fenêtre de contexte du modèle — environ 100 pages pour GPT-5.5 (128 000 jetons), 160 pages pour Claude Opus 4.7 (200 000 jetons) ou 800 pages pour Gemini 3.1 Pro (1 million de jetons). Pour les documents structurés (contrats juridiques, rapports annuels), le chunking thématique par en-têtes de section produit la synthèse finale la plus cohérente.',
            },
            {
              q: 'Que sont ROUGE et BERTScore, et quelle métrique devrais-je utiliser pour évaluer les résumés IA ?',
              a: 'ROUGE mesure le chevauchement de n-grammes entre un résumé généré et une référence — utile pour les benchmarks mais aveugle au sens sémantique et à la précision factuelle. BERTScore utilise la similarité cosinus entre les embeddings BERT, capturant la similarité sémantique plutôt que les correspondances de mots exacts. Pour les workflows de production, la combinaison du scoring HHEM de fidélité avec une vérification de complétude fournit le signal de qualité le plus fiable.',
            },
            {
              q: 'Les outils de résumé par IA peuvent-ils traiter des documents dans d\'autres langues que l\'anglais ?',
              a: 'Oui, avec d\'importantes mises en garde. Les modèles Mistral AI (France) supportent nativement le français et les langues européennes et peuvent être déployés localement pour la conformité RGPD. Qwen 3 (Alibaba) tokenise les caractères chinois environ 40 % plus efficacement que GPT-5.5. Les modèles LLaMA 4 via Ollama permettent la résumé multilingue entièrement locale sans appels API externes.',
            },
            {
              q: 'Dois-je respecter le RGPD en utilisant les outils de résumé par IA ?',
              a: 'Oui. Si vous envoyez des données à caractère personnel à des points de terminaison API externes (par exemple OpenAI, Anthropic), l\'article 28 du RGPD s\'applique : un contrat de traitement (DPA) doit être conclu. L\'alternative pour la conformité RGPD est le déploiement local — par exemple Mistral Large via Ollama ou LLaMA 4 sur site. La CNIL recommande, pour les données sensibles en santé, finances ou droit, de privilégier l\'inférence locale.',
            },
            {
              q: 'La résumé de documents assistée par IA est-elle appropriée pour les entreprises françaises ?',
              a: 'Oui, à condition de choisir la bonne infrastructure. Les entreprises françaises bénéficient particulièrement de NotebookLM pour les rapports internes et l\'analyse de contrats, ainsi que des modèles déployés localement pour les documents sensibles. La CNIL recommande pour les données en santé, finances ou droit une analyse de risque avant l\'utilisation d\'API cloud. Cas d\'usage typiques : résumé automatisé de contrats fournisseurs, condensation de procès-verbaux de réunions, extraction de clauses de conformité.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources et lecture complémentaire',
          items: [
            '[Liu et al., 2025. « A hallucination detection and mitigation framework for text summarisation »](https://www.nature.com/articles/s41598-025-31075-1) — introduit la méthodologie Q-S-E pour la correction itérative des hallucinations sur CNN/DailyMail, PubMed et ArXiv',
            '[Vectara HHEM Leaderboard, 2025. « Hughes Hallucination Evaluation Model — Document Summarisation Faithfulness Rankings »](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) — 100+ LLM testés sur 831 documents ; Gemini-2.0-Flash à 0.7 % hallucination',
            '[SEI/CMU, 2025. « Evaluating LLMs for Text Summarisation: An Introduction »](https://www.sei.cmu.edu/blog/evaluating-llms-for-text-summarization-introduction/) — framework pour l\'évaluation de la précision, fidélité, compression et efficacité',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'テクニック',
      title: 'AIで抽出と要約を実現',
      intro: 'AI支援の抽出と要約により、文書確認の時間が60～80％削減でき、信頼度の高い要約タスクで0.7％のハルシネーション率を達成します。重要なのは、各文書カテゴリーに適した要約タイプ、モデル、プロンプト構造を選択することです。',
      publishDate: '2026-03-23',
      dateModified: '2026-04-29',
      seoTitle: 'AIで文書を抽出・要約する方法 2026年版',
      metaDescription: 'AI要約は信頼度の高いタスクで0.7%のハルシネーション率を達成。NotebookLM、Claude、GPT-5.5を比較 — ソースに忠実な出力用プロンプト付き。',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AI文書要約',
      audience: '大量の文書コーパスをAIで処理する研究者、アナリスト、開発者',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '抽出型と抽象型：どちらを選ぶ？', anchor: '#two-summarisation-types' },
        { label: 'ハルシネーションが最も少ないAIモデルは？', anchor: '#which-model-for-summarisation' },
        { label: '要約ツール比較', anchor: '#tool-comparison' },
        { label: '抽出プロンプトの書き方', anchor: '#extraction-prompt-structure' },
        { label: '効果的な抽出プロンプトの5つのコンポーネント', anchor: '#five-component-prompt' },
        { label: '長いドキュメントのチャンキング', anchor: '#chunking-long-documents' },
        { label: '反復的要約', anchor: '#iterative-summarisation' },
        { label: 'なぜAIはまだハルシネーションするのか', anchor: '#hallucination-analysis' },
        { label: '評価指標：ROUGE、BERTScore、HHEM', anchor: '#evaluation-metrics' },
        { label: 'グローバル・地域コンテキスト', anchor: '#global-context' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: 'よくある質問', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'AIで抽出と要約を実現',
        description: 'AI文書要約は確認時間を60～80％削減し、0.7%のハルシネーション率を達成します。抽出型と抽象型のアプローチ、モデル比較、ソースに忠実な出力のためのプロンプト構造を学びます。',
        url: 'https://www.promptquorum.com/prompt-engineering/extract-and-summarise?lang=ja',
        inLanguage: 'ja',
        datePublished: '2026-03-23',
        dateModified: '2026-04-29',
        author: {
          '@type': 'Organization',
          name: 'PromptQuorum',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/extract-and-summarise',
          width: 1200,
          height: 630,
        },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'ドキュメント要約' },
          { '@type': 'Thing', name: 'LLMハルシネーション' },
          { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        keywords: ['AI要約', 'ドキュメント抽出', '抽象型要約', '抽出型要約', 'NotebookLM', 'Claude', 'ハルシネーション率', 'プロンプトエンジニアリング'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Elicit' },
          { '@type': 'SoftwareApplication', name: 'Scholarcy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'AI要約における抽出型と抽象型の違いは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '抽出型要約はソースドキュメントから文を直接コピーし、修正なしで再現します。新しいテキストは生成されないため、事実のエラーは構造的に不可能です。抽象型要約はLLMを使用して新しい言い換え文を生成し、情報を濃縮します。より読みやすい出力を生成しますが、モデルとタスクに応じて0.7～14%のハルシネーション率があります。法律と遵守のドキュメントには抽出型を使用し、研究の総合と経営層概要には抽象型を使用してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'ドキュメント要約時にハルシネーションが最も少ないAIモデルは？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vectara HHEM ベンチマーク（831ドキュメント上の要約忠実度の標準テスト）で、Gemini-2.0-Flash-001（Google DeepMind）は2025年時点で0.7%の最低ハルシネーション率を達成しました。これらの率はソース固定タスクにのみ適用されます。オープンドメイン事実リコールは同じモデルで3～33%の率を生成します。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI要約ツールは一度にどのくらいのページを処理できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPT-5.5（OpenAI）は1セッションあたり約100ページを処理できます（128,000トークン制限）。Claude Opus 4.7（Anthropic）は約160ページ処理でき、Gemini 3.1 Pro（Google DeepMind）は約800ページ処理できます。NotebookLM（Google DeepMind）はノートブックあたり最大50ソース、約500,000語をサポートします。より大きなコーパスの場合、ドキュメントのチャンキングが必要です。',
            },
          },
          {
            '@type': 'Question',
            name: 'ドキュメント要約にはNotebookLMとClaudeのどちらが優れていますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '両方は異なるニーズに対応しています。NotebookLM（Google DeepMind）はクリック可能なインライン引用によるより厳密なソース固定を提供し、ハルシネーションが少なく、ドキュメントの内容を忠実に表現するのに優れています。Claude Opus 4.7（Anthropic）はより細かい分析を提供し、複数ドキュメント間の合成で優れ、非明白な接続を識別しています。ただし、ソースコンテンツとトレーニング知識を微妙に混合させることがあります。精度にはNotebookLM、洞察にはClaudeを使用してください。',
            },
          },
          {
            '@type': 'Question',
            name: '自分の要約でAIハルシネーションを防ぐにはどうすればよいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '4つの技術がハルシネーションを削減します。（1）明確に指示する。「以下のドキュメントからのみ要約し、外部知識を追加しないでください」。（2）温度（T）を0.0～0.1に設定して最大決定性を保証します。（3）忠実性チェックを実行し、要約内の各主張を識別し、その源文を指し示します。（4）2番目のモデルでクロスチェック。GPT-5.5とClaude Opus 4.7が特定の事実で同意する場合、共有ハルシネーションの確率は統計的にほぼゼロです。',
            },
          },
          {
            '@type': 'Question',
            name: 'ドキュメントチャンキングとは何で、いつ使用すべきですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'チャンキングはドキュメントをセグメント（通常500～2,000トークン）に分割し、各セグメントを個別に要約し、チャンク要約を最終出力に合成します。ドキュメントがモデルのコンテキストウィンドウを超える場合に使用します。GPT-5.5（128,000トークン）で約100ページ、Claude Opus 4.7（200,000トークン）で約160ページ、Gemini 3.1 Pro（100万トークン）で約800ページです。構造化ドキュメント（法律契約、年間報告書）の場合、セクションタイトルによるテーマ別チャンキングが最も一貫した最終合成を生成します。',
            },
          },
          {
            '@type': 'Question',
            name: 'ROUGEとBERTScoreは何で、AI要約を評価するためにどの指標を使用すべきですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ROUGEは生成された要約と参照の間のn-gramオーバーラップを測定し、ベンチマークに役立ちますが、意味的意味と事実的正確性には目が届きません。BERTScoreはBERTエンベッディング間のコサイン類似度を使用し、正確な単語一致ではなく意味的類似性をキャプチャします。本番ドキュメントワークフローでは、HHEM忠実度スコアと完全性チェックの組み合わせが最も信頼性の高い品質シグナルを提供します。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI要約ツールは英語以外の言語のドキュメントを処理できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、重要な注意があります。Mistral AIモデル（フランス）はフランス語とヨーロッパ言語をネイティブにサポートし、GDPR対応のためにローカルに展開できます。Qwen 3（Alibaba）は中国語文字をGPT-5.5よりも約40％少ないトークンでトークン化します。Ollama経由のLLaMA 4モデルは、外部APIコールなしで、完全にローカルな多言語要約を可能にしています。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI要約ツール使用時に個人情報保護法に準拠する必要がありますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。個人データを外部APIエンドポイント（OpenAI、Anthropicなど）に送信する場合、個人情報保護法が適用されます。データ処理契約を締結する必要があり、データは合意された目的にのみ使用できます。ローカル展開の代替案（Ollama経由のMistral LargeやLLaMA 4オンプレミス）により、データが企業ネットワークを離れません。特に機密性が高いドキュメント（医療、財務、法務）の場合、完全にローカルな推論をお勧めします。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI支援ドキュメント要約は日本企業に適していますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。正しいインフラストラクチャが選択されていれば。日本企業は、内部レポートと契約分析にはNotebookLMを特に活用でき、機密ドキュメント（LLaMA 4 Ollama経由）にはローカル展開モデルを活用できます。METI AI統治ガイドラインの下、企業は機密データの場所保持要件を満たすため、ローカル推論を優先する必要があります。典型的なユースケース：サプライチェーン契約の自動要約、会議議事録の凝縮、規制遵守条項の抽出。',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: 'AIで抽出と要約を実現：主要トピック',
        description: 'AI支援のドキュメント抽出と要約の基本概念',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '抽出型と抽象型要約', description: '事実的精度と可読性のトレードオフを理解する' },
          { '@type': 'ListItem', position: 2, name: 'どのAIモデルを選ぶか', description: '要約タスク向けのNotebookLM、Claude、GPT-5.5、Gemini比較' },
          { '@type': 'ListItem', position: 3, name: '抽出用プロンプト構造', description: 'ハルシネーションを防ぎ精度を確保する構造化プロンプトの書き方' },
          { '@type': 'ListItem', position: 4, name: 'AIハルシネーション削減', description: '温度設定、忠実性チェック、マルチモデル検証' },
          { '@type': 'ListItem', position: 5, name: 'ツールとワークフロー', description: 'NotebookLM、Scholarcy、Elicit、カスタム抽出パイプラインの使用方法' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ja',
        name: 'AIでドキュメントを抽出・要約する方法',
        totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'ソースタイプと抽出構造に基づいてツールを選択', text: '自分のPDFファイルとドキュメント向けにNotebookLMを使用し、構造化フィールド（方法論、サンプルサイズ、結果）のある学術論文にはElicitを、リアルタイムWeb要約にはPerplexityを使用します。' },
          { '@type': 'HowToStep', position: 2, name: '抽出スキーマを事前に定義（JSON、テーブル、箇条書き）', text: 'モデルに必要な列またはフィールドとそれぞれのデータタイプを正確に指示します。例：「author（文字列）、year（整数）、finding（最大200文字のテキスト）、confidence（高/中/低）キーを持つJSONテーブルを返す。」' },
          { '@type': 'HowToStep', position: 3, name: '温度（T）を0.1～0.3に設定', text: 'より低い温度でより決定論的で一貫した出力を生成します。より高い温度は、曖昧なソースマテリアルの代替解釈のブレインストーミングのためにのみ予約されています。' },
          { '@type': 'HowToStep', position: 4, name: '大きなドキュメント場合、複数回抽出して中間チェックポイントを作成', text: '100ページ以上のPDFがある場合、セクション1-25、その後26-50などを抽出し、結果を構造化形式で保存します。コンテキストウィンドウオーバーフローを防ぎ、エラー検出と修正を容易にします。' },
          { '@type': 'HowToStep', position: 5, name: 'ソースドキュメントで主要な抽出をクロスチェック', text: '抽出されたデータの10～20%を常にオリジナルと照合してください。AIモデルは構造化データ（テーブル、数値、日付）をハルシネーションできます。セル結合やフォーマットが不明確なテーブルで特に注意が必要です。' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '重要ポイント',
          isTldr: true,
          items: [
            '法律、遵守、正確な表現が必要なドキュメント向けに抽出型要約を使用。研究統合と経営層概要向けにLLM抽象型要約を使用',
            'Gemini-2.0-Flash-001は信頼度の高い要約で0.7%のハルシネーション率を達成 — 831ドキュメント上のVectara HHEMベンチマークで最良の結果',
            'NotebookLM（Google DeepMind）はクリック可能なインライン引用で最も信頼度の高いソース固定要約を提供。Claude Opus 4.7は文書間の統合と複雑な分析で優位',
            'ソース固定要約のハルシネーション率は2021年から2025年で96%低下 — しかし2025年の数学的証明により、現在のLLMアーキテクチャでハルシネーションを完全に排除できないことが確認された',
            'コンテキストウィンドウを超えるドキュメントは、テーマ別チャンキング（セクション/トピック別）が最も一貫した最終統合を生成',
            'Claude Opus 4.7は1セッションあたり約160ページ処理可能。Gemini 3.1 Proは約800ページ処理可能 — コンテキスト制限によって大きな文書セット向けの実用的なモデルが決定される',
          ],
        },
        definition: {
          id: 'two-summarisation-types',
          title: '2つのAI要約タイプは何で、それぞれいつ使用するか？',
          content: [
            '**抽出型要約はソースから文を直接コピー。抽象型要約は新しい文を生成して言い換えと濃縮 — 2つのアプローチは事実精度と可読性・圧縮をトレードオフ。**',
            '抽出型要約（Scholarcyなどで使用）は文をキーワード頻度、位置、情報密度でランク付けし、最高スコア文を修正なしで再現。新しいテキストは生成されないため、事実のエラーは構造的に不可能。出力は常にソースのサブセット。抽象型要約（GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro）は、合成して言い換える新しいテキストを生成。より読みやすい出力をハルシネーションリスク増加のコストで提供。',
          ],
          columns: ['方法', 'ハルシネーションリスク', '可読性', '用途'],
          rows: [
            {
              方法: '抽出型',
              'ハルシネーションリスク': 'ほぼゼロ（ソースをコピー）',
              可読性: 'より低い — 断片的になる可能性',
              用途: '法律ドキュメント、遵守、正確な表現要件',
            },
            {
              方法: '抽象型（LLM）',
              'ハルシネーションリスク': 'モデルとタスクで0.7～14%',
              可読性: '高い — 自然な文体',
              用途: '研究統合、経営層概要、報告書',
            },
            {
              方法: 'ハイブリッド（抽出→抽象）',
              'ハルシネーションリスク': '低い',
              可読性: '高い',
              用途: '金融報告書、学術文献、技術文書',
            },
          ],
          blockquote: '2025年arXivスタディは金融ニュース記事での要約アプローチをベンチマークし、抽出方法（Lead-1、MatchSum）が短く構造化されたテキストで強い基準を確立することを発見。抽象LLMは複雑な金融ドキュメントで優位ですが、ドメイン固有データでチューニング済みの場合。1文で：事実的エラーが許容できない場合は抽出型。出力が追加編集なしで読みやすく使用可能である場合は抽象型。',
        },
        toolComparison: {
          id: 'which-model-for-summarisation',
          title: 'ドキュメント要約で最もハルシネーションが少ないAIモデルは？',
          content: [
            '**NotebookLM（Google DeepMind）はアップロードドキュメントのソース固定引用で優位。Claude Opus 4.7（Anthropic）は統合、文書間分析、複雑な推論で優位。GPT-5.5（OpenAI）は高速で柔軟な汎用要約で優位。**',
            'Vectara Hughes Hallucination Evaluation Model（HHEM）ベンチマーク上で — モデルあたり831ドキュメント上の要約忠実度の標準テスト — 2025年最高パフォーマーは：',
            'これらの率は2021年比96%改善で、当時の最高モデルは同じタスクで21.8%のハルシネーション率でした。ただしこれはソース固定要約にのみ適用。オープンドメイン事実リコールは同じモデルで3～33%を生成。',
          ],
          items: [
            '**Gemini-2.0-Flash-001（Google DeepMind）:** 0.7%ハルシネーション率 — ベンチマークで記録された最低',
            '**OpenAIとGeminiバリアント:** 0.8～1.5%ハルシネーション率クラスター',
            '**全体:** 4モデルがソース固定要約タスクでsub-1%率を達成',
          ],
        },
        toolTable: {
          id: 'tool-comparison',
          title: 'NotebookLM、Claude、GPT-5.5、Geminiはどのように比較されるか？',
          columns: ['ツール', 'コンテキスト制限', '引用品質', '最適なユースケース'],
          rows: [
            {
              ツール: 'NotebookLM（Google DeepMind）',
              'コンテキスト制限': 'ca. 500K単語 / 50ソース',
              引用品質: 'クリック可能な番号付きインライン引用',
              'ユースケース': '構造化研究レビュー、ソース固定Q&A',
            },
            {
              ツール: 'Claude Projects（Anthropic）',
              'コンテキスト制限': 'ca. 200Kトークン（ca. 160ページ）',
              引用品質: 'デフォルトで不安定。プロンプトで信頼できる',
              'ユースケース': 'クロスソース統合、複雑な推論、議論構築',
            },
            {
              ツール: 'GPT-5.5（OpenAI）',
              'コンテキスト制限': '128Kトークン（ca. 100ページ）',
              引用品質: '適度。明示的な指示が必要',
              'ユースケース': '一般的なドキュメント、高速要約',
            },
            {
              ツール: 'Gemini 3.1 Pro（Google DeepMind）',
              'コンテキスト制限': '1Mトークン（ca. 800ページ）',
              引用品質: '適度',
              'ユースケース': '完全コードベースまたは大規模コーパス分析',
            },
            {
              ツール: 'Elicit',
              'コンテキスト制限': '138M+学術論文',
              引用品質: '構造化学術抽出',
              'ユースケース': '体系的文献レビュー',
            },
          ],
          content: [
            '**PromptQuorumでテスト — 25ドキュメント要約プロンプト、3モデルにわたる分配:** Claude Opus 4.7は25件中20件の最も分析的に完全な要約（文書間の含意と接続を識別）を生成。GPT-5.5は25件中18件で最も簡潔で直ちに使用可能な要約を生成。Gemini 3.1 Proは、複数が80,000トークンを超えたため、コンテキスト切り詰めなしで全25ドキュメントを処理できた唯一のモデル。',
          ],
        },
        promptStructure: {
          id: 'extraction-prompt-structure',
          title: '抽出と要約プロンプトの書き方',
          content: [
            '**構造化要約プロンプト — ドキュメントタイプ、出力形式、長さ制限、確認不可能な主張の明示指示 — 直ちに使用可能な出力を提供。非構造化プロンプトは重要情報を見落とす一般的な段落を提供。**',
            '要約の最も一般的な[プロンプトエンジニアリング](/prompt-engineering/what-is-prompt-engineering?lang=ja)失敗は「これを要約して」を完全な指示として扱うこと。長さ、形式、観点、詳細レベルに関するすべてのモデル仮定は、実際に必要なものとの潜在的なミスマッチ。[5ブロック構造](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja) — 役割、タスク、入力、制約、出力形式 — は抽出タスクに直接適用。',
          ],
        },
        promptFramework: {
          id: 'five-component-prompt',
          title: '効果的な抽出プロンプトの5つのコンポーネントは？',
          content: '**悪いプロンプト — 非構造化、使用不可能な汎用出力を生成：**',
          items: [
            '**役割** — 「あなたは[分野]の専門アナリストです。」',
            '**ソース指示** — 「以下のドキュメントの情報のみを要約。外部知識を追加しないでください。」',
            '**出力形式** — 「これらのセクション付き構造化要約を返す：[キーファインディングス]、[方法論]、[制限]、[推奨アクション]。」',
            '**長さ制限** — 「最大300語合計。」',
            '**不確実性指示** — 「ドキュメント内の主張が曖昧または別の段落と矛盾する場合、[確認]でフラグしてください。」',
          ],
          blockquote: 'このレポートを要約してください。',
        },
        goodExample: {
          id: 'good-prompt-example',
          title: 'よく構造化された要約プロンプトはどのように見えるか？',
          blockquote: 'あなたは金融アナリストです。添付のQ3利益報告書を、ドキュメントの情報のみを使用して要約してください。外部コンテキストを追加しないでください。出力をこのように構成してください：[収入と利益率]、[セグメント実績]、[ガイダンス変更]、[主要リスク]。最大250語。同じドキュメント内の前の文と矛盾する数値に[不一致]でフラグ。',
          content: [
            '構造化プロンプトはプレゼンテーション内で直接使用可能なドキュメントを生成。オープンプロンプトは、セグメントデータを見落とし、ガイダンス変更を隠す物語段落を生成し、30分の再構成が必要。',
          ],
        },
        chunking: {
          id: 'chunking-long-documents',
          title: 'コンテキストウィンドウを超えるドキュメントはどのように処理するか？',
          content: [
            '**モデルのコンテキストウィンドウを超えるドキュメントの場合、チャンキング — 500～2,000トークンセグメント分割、各チャンク個別要約、合成 — 切り詰めまたは劣化する情報を保持。**',
            '明確なセクション構造を持つドキュメント（法律契約、年間報告書、学術論文）の場合、テーマ別チャンキングは最も一貫した最終統合を生成。非構造化ドキュメント（メールスレッド、トランスクリプト）の場合、500トークン間隔での段落ベースチャンキングが推奨デフォルト。',
          ],
          columns: ['方法', '一貫性', '用途', 'トレードオフ'],
          rows: [
            {
              方法: 'テーマ別（セクション別）',
              一貫性: '最高',
              用途: '報告書、契約、学術論文',
              トレードオフ: 'ソースに明確な見出しを要求',
            },
            {
              方法: '段落ベース',
              一貫性: '高い',
              用途: 'ほとんどのドキュメントタイプ',
              トレードオフ: '密接に関連するアイデアを分割する可能性',
            },
            {
              方法: '固定トークン制限',
              一貫性: '中程度',
              用途: '非構造化テキスト',
              トレードオフ: '任意のポイントで議論を分割',
            },
            {
              方法: '文ベース',
              一貫性: '低い',
              用途: '最大粒度',
              トレードオフ: '最高計算コスト、文脈断片化',
            },
          ],
        },
        iterativeSummarisation: {
          id: 'iterative-summarisation',
          title: '反復的要約はどのように漏れを削減するか？',
          content: [
            '**反復的要約 — 初期要約を生成し、2番目の標的プロンプトでリファイン — 単一パス生成に比べて事実完全性を改善し漏れを削減。**',
            '反復的要約は初期要約を生成し、漏れた主張を発見するために2番目のプロンプトを適用。2段階構造：',
          ],
          numberedItems: [
            '**初期プロンプト:** 「ドキュメントの主要な議論、データポイント、結論を要約。確実でないことはすべてフラグ。」',
            '**リファインメントプロンプト:** 「あなたの要約を確認。ドキュメントに記載されているが、要約に欠けている主張を特定。今ここでそれらの主張を追加。」',
          ],
        },
        hallucinationAnalysis: {
          id: 'hallucination-analysis',
          title: 'なぜAIはまだ要約でハルシネーションするのか、どのくらい頻繁か？',
          content: [
            '**ソース固定要約のハルシネーション率は2021年から2025年で96%低下 — 最高モデルで21.8%から0.7%に — しかし2025年数学証明は現在のLLMアーキテクチャでハルシネーションを完全に排除できないことを確認。**',
            'アーキテクチャ理由は根本的：LLMはトレーニングデータパターン認識に基づいて統計的に可能なネクストトークンを生成。確認された事実を取得ではなく。ソースドキュメントが与えられても、モデルは時々ソースコンテンツをトレーニング知識と「混合」し、妥当だが不忠実な文を生成 — 研究者が「混合文脈ハルシネーション」と呼ぶもの。これは基本的な[AIの限界](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=ja)でソース固定要約ワークフローが勘定する必要があるもの。',
            'AI要約の失敗モード、頻度順：',
          ],
          items: [
            '**混合文脈ハルシネーション** — モデルがソースの事実とトレーニングデータの事実を結合し、部分的に正確で部分的に作成された文を生成',
            '**不足情報** — モデルがソースからの重要な主張を見落とし、より少ない目立つ位置にあった',
            '**事実的不一貫性** — モデルがソースドキュメントからの特定の数値や日付に矛盾',
            '**無関連情報** — モデルがソースに存在しないトレーニングデータからコンテキストを追加',
          ],
          blockquote: '2025年Nature発表フレームワーク（Liu et al.）が、Q-S-E方法論（質問応答生成、分類、評価）を導入し、CNN/DailyMail、PubMed、ArXiv上の要約のハルシネーションを反復的に検出・修正 — 全3ベンチマーク上で測定可能な忠実度スコア改善を示す。PromptQuorumの多モデルディスパッチはこれに直接対応：同じドキュメントをGPT-5.5（OpenAI）、Claude Opus 4.7（Anthropic）、Gemini 3.1 Proに同時送信し、出力比較すると、モデルが相違するパッセージを特定 — 統計的にハルシネーションの最高リスクパッセージ。',
        },
        evaluationMetrics: {
          id: 'evaluation-metrics',
          title: 'AI要約品質を測定するメトリック：ROUGE、BERTScore、HHEM？',
          content: [
            '**ROUGE、BERTScore、忠実性メトリックは要約品質の異なる重複しない次元を測定 — AI要約が信頼性があるかを判定するのに十分な単一メトリックではなし。**',
            '生成されたと参考要約の間のn-gramオーバーラップをROUGEが測定 — ベンチマークに役立つが意味的意味と事実正確性に目が届かず。BERTScoreはBERTエンベッディング間のコサイン類似度を使用、正確な単語一致ではなく意味的類似を捕捉。忠実性メトリック（HHEM、FaithJudge）は要約がソースドキュメントで支持される主張のみを含むかどうか測定 — 本番要約ユースケースで最も関連メトリック。',
          ],
          columns: ['指標', '測定内容', '制限'],
          rows: [
            {
              指標: 'ROUGE',
              測定内容: '参考とのn-gramオーバーラップ',
              制限: '意味に盲目。語彙類似を報酬',
            },
            {
              指標: 'BLEU',
              測定内容: 'n-gramオーバーラップの精度',
              制限: '翻訳設計。要約へのフィット悪い',
            },
            {
              指標: 'BERTScore',
              測定内容: 'エンベッディング経由の意味類似',
              制限: '参考要約が必要。計算が高い',
            },
            {
              指標: '忠実性（HHEM）',
              測定内容: 'ソースとの事実一貫性',
              制限: '完全性または有用性を測定しない',
            },
            {
              指標: 'G-Eval',
              測定内容: '多次元：カバレッジ、関連性、流暢性',
              制限: '最新標準。まだ普遍的に採用なし',
            },
          ],
          blockquote: '本番ドキュメントパイプライン場合、HHEM忠実スコアと完全性チェック組み合わせ（要約がソースからすべて重要主張を提及するか）が最も信頼できる品質シグナル提供。',
        },
        globalContext: {
          id: 'global-context',
          title: 'GDPR、中国法、METI指針はAI要約にどう影響？',
          content: [
            '日本企業はMETIデータガバナンス指針下で運用。特に金融・法務・医療の機密データはMETI AI統治ガイドラインで厳密な場所保持要件を満たすため、ローカル推論を優先する必要があります。LLaMA 4 7Bはローカル推論で8GB RAMを要求し、外部APIコールをゼロで生成 — 機密の法律・金融ドキュメント向けの厳密な場所保持要件を満たします。',
            'チャイニーズ企業はAI生成コンテンツの責任を定義する2023年チャイナ暫定生成AI指針に従う。多くの場合、ドキュメント要約はAI生成とラベル付けを要求。PIPL遵守企業はユーザーデータのチャイナ国内保持要求から恩恵を受け、オンプレミス展開や検証済みローカルプロバイダーを優先する必要があります。',
            'EU企業がGDPR下でドキュメント処理。機密コンテンツを外部APIエンドポイント送信前にコンプライアンスレビュー必要。Mistral AIモデル（フランス）はオンプレミス抽象要約を完全に実行できます。データがEU企業インフラを離れず、GDPR Article 46 EU場所保持要求を満たします。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'AI要約における最も一般的な間違いは何？',
          items: [
            'フォーマット制約なしオープンプロンプト使用（「これを要約して」） — 重要なデータポイントを見落とす汎用段落を生成、30分以上の手動作り直しを要求',
            'サンプル確認なしに要約を信頼 — AIモデルは構造化データ（テーブル、数値、日付）をテキスト散文より高い率でハルシネーション。常に抽出値の10～20%を元と確認',
            '抽出タスク向けの0.3上の温度設定 — 0.3上の温度が測定可能にハルシネーション頻度を増やす。ソース固定タスク向けに最大決定性で0.0～0.1使用',
            'プロンプトでドキュメントタイプ指定なし — コンテキスト無しでモデルが間違った要約ヒューリスティックを適用（例：法律契約をニュース記事として扱う、重要条項言語を見落とす）',
            '50ページ上のドキュメント向けチャンキングをスキップ — コンテキストウィンドウオーバーフロー静かにコンテンツを切り詰め。モデルは利用可能な部分のみ要約。何か見落とした警告なし。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '参考資料',
          items: [
            '[プロンプトエンジニアリングとは？](/prompt-engineering/what-is-prompt-engineering?lang=ja) — 構造化AI指示の背後の基本原則',
            '[AI支援研究](/prompt-engineering/ai-powered-research?lang=ja) — 複数ソース検証ワークフローで抽出ツール組み合わせ方法',
            '[AIがなぜ幻覚見て、どのように停止するか](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=ja) — ハルシネーション根本原因と実証的軽減戦略理解',
            '[AIの限界 — LLMができないこと](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=ja) — 確認されたソースコンテンツにAI出力をアンカーするための特定技術',
            '[すべてのAIプロンプトが必要な5つのコンポーネント](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja) — 抽出正確性を直接改善する構造化プロンプトコンポーネント',
            '[温度とTop-P：AI出力制御](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=ja) — 決定論的でハルシネーション抵抗性のある要約向けに0.0～0.1に温度設定',
            '[チェーン・オブ・シンク・プロンプティング](/prompt-engineering/chain-of-thought-prompting?lang=ja) — 複雑な複数ソース分析で忠実性改善するステップバイステップ推論',
          ],
        },
        howToStart: {
          id: 'how-to-extract-and-summarise',
          title: 'AIでドキュメントを抽出・要約する方法',
          numberedItems: [
            '**ソースタイプと抽出構造に基づいてツールを選択。** 自分のPDFファイルとドキュメント向けNotebookLMを使用、構造化フィールド（方法論、サンプルサイズ、結果）の学術論文向けElicit、リアルタイムWebサマリーのPerplexityを使用。テキスト・ツー・テーブル抽出は汎用チャットモデルより特化システムで最適動作。',
            '**抽出スキーマを事前に定義（JSON、テーブル、箇条書き）。** モデルに必要な列またはフィールドとそれぞれのデータタイプを正確に指示。例：「author（テキスト）、year（数字）、finding（最大200文字テキスト）、confidence（高/中/低）キー持つJSONテーブルを返す。」',
            '**抽出と要約向けに温度を0.1～0.3に設定。** より低い温度でより決定論的で一貫した出力を生成。より高い温度は曖昧なソースマテリアルの代替解釈のブレインストーミングのためのみ予約。',
            '**大きなドキュメント場合、中間チェックポイント付きで複数回抽出。** 100+ページPDFある場合、セクション1-25を抽出してから26-50などを抽出し、構造化形式で結果保存。コンテキストウィンドウオーバーフロー防止。エラー検出・修正を容易に。',
            '**ソースドキュメントで主要な抽出をクロスチェック。** 抽出データの10～20%を常にオリジナルと照合。AIモデルは構造化データ（テーブル、数値、日付）をハルシネーション。セル結合やフォーマットが不明確なテーブルで特に注意が必要。',
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'AI要約における抽出型と抽象型の違いは何ですか？',
              a: '抽出型要約はソースドキュメントから文を直接コピーし、修正なしで再現します。新しいテキストは生成されないため、事実のエラーは構造的に不可能です。抽象型要約はLLMを使用して新しい言い換え文を生成し、情報を濃縮します。よりよく読みやすい出力を生成しますが、モデルとタスクに応じて0.7～14%のハルシネーション率があります。法律と遵守のドキュメントには抽出型を使用；研究統合と経営層概要には抽象型を使用。',
            },
            {
              q: 'ドキュメント要約時にハルシネーションが最も少ないAIモデルは？',
              a: 'Vectara HHEMベンチマーク（831ドキュメント上の要約忠実度の標準テスト）で、Gemini-2.0-Flash-001（Google DeepMind）は2025年時点で0.7%の最低ハルシネーション率を達成しました。これらの率はソース固定タスクにのみ適用されます。オープンドメイン事実リコールは同じモデルで3～33%の率を生成します。',
            },
            {
              q: 'AI要約ツールは一度にどのくらいのページを処理できますか？',
              a: 'GPT-5.5（OpenAI）は1セッションあたり約100ページを処理できます（128,000トークン制限）。Claude Opus 4.7（Anthropic）は約160ページを処理；Gemini 3.1 Pro（Google DeepMind）は約800ページを処理。NotebookLM（Google DeepMind）はノートブックあたり最大50ソース、約500,000語をサポート。より大きなコーパスの場合、ドキュメントのチャンキングが必要。',
            },
            {
              q: 'ドキュメント要約にはNotebookLMとClaudeのどちらが優れていますか？',
              a: '両方は異なるニーズに対応しています。NotebookLM（Google DeepMind）はクリック可能なインライン引用によるより厳密なソース固定を提供し、ハルシネーションが少なく、ドキュメントの内容を忠実に表現するのに優れています。Claude Opus 4.7（Anthropic）はより細かい分析を提供し、複数ドキュメント間の合成で優れ、非明白な接続を識別しています。ただし、ソースコンテンツとトレーニング知識を微妙に混合させることがあります。精度にはNotebookLM、洞察にはClaudeを使用。',
            },
            {
              q: '自分の要約でAIハルシネーションを防ぐにはどうすればよいですか？',
              a: '4つの技術がハルシネーションを削減します。（1）明確に指示する：「以下のドキュメントからのみ要約し、外部知識を追加しないでください」。（2）温度（T）を0.0～0.1に設定して最大決定性を保証。（3）忠実性チェックを実行し、要約内の各主張を識別し、ソース文を指し示す。（4）2番目のモデルでクロスチェック：GPT-5.5とClaude Opus 4.7が特定の事実で同意する場合、共有ハルシネーション確率は統計的にほぼゼロ。',
            },
            {
              q: 'ドキュメントチャンキングとは何で、いつ使用すべきですか？',
              a: 'チャンキングはドキュメントをセグメント（通常500～2,000トークン）に分割し、各セグメントを個別に要約し、チャンク要約を最終出力に合成します。ドキュメントがモデルのコンテキストウィンドウを超える場合に使用します。GPT-5.5（128,000トークン）で約100ページ、Claude Opus 4.7（200,000トークン）で約160ページ、Gemini 3.1 Pro（100万トークン）で約800ページ。構造化ドキュメント（法律契約、年間報告書）の場合、セクションタイトルによるテーマ別チャンキングが最も一貫した最終合成を生成。',
            },
            {
              q: 'ROUGEとBERTScoreは何で、AI要約を評価するためにどの指標を使用すべきですか？',
              a: 'ROUGEは生成された要約と参照の間のn-gramオーバーラップを測定し、ベンチマークに役立ちますが、意味的意味と事実的正確性には目が届きません。BERTScoreはBERTエンベッディング間のコサイン類似度を使用し、正確な単語一致ではなく意味的類似性をキャプチャします。本番ドキュメントワークフローでは、HHEM忠実度スコアと完全性チェック組み合わせが最も信頼できる品質シグナルを提供。',
            },
            {
              q: 'AI要約ツールは英語以外の言語のドキュメントを処理できますか？',
              a: 'はい、重要な注意があります。Mistral AIモデル（フランス）はフランス語とヨーロッパ言語をネイティブにサポートし、GDPRコンプライアンスのためにローカルに展開できます。Qwen 3（Alibaba）は中国語文字をGPT-5.5よりも約40%少ないトークンでトークン化。Ollama経由のLLaMA 4モデルは、外部APIコールなしで、完全にローカルな多言語要約を可能にしています。',
            },
            {
              q: 'AI要約ツール使用時に個人情報保護法に準拠する必要がありますか？',
              a: 'はい。個人データを外部APIエンドポイント（OpenAI、Anthropicなど）に送信する場合、個人情報保護法が適用されます。データ処理契約を締結する必要があり、データは合意された目的にのみ使用できます。ローカル展開の代替案（Ollama経由のMistral LargeやLLaMA 4オンプレミス）により、データが企業ネットワークを離れません。特に機密性が高いドキュメント（医療、財務、法務）の場合、完全にローカルな推論をお勧めします。',
            },
            {
              q: 'AI支援ドキュメント要約は日本企業に適していますか？',
              a: 'はい。正しいインフラストラクチャが選択されていれば。日本企業は、内部レポートと契約分析にはNotebookLMを特に活用でき、機密ドキュメント（LLaMA 4 Ollama経由）にはローカル展開モデルを活用できます。METI AI統治ガイドラインの下、企業は機密データの場所保持要件を満たすため、ローカル推論を優先する必要があります。典型的なユースケース：サプライチェーン契約の自動要約、会議議事録の凝縮、規制遵守条項の抽出。',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソースと参考資料',
          items: [
            '[Liu et al., 2025. 「A hallucination detection and mitigation framework for text summarisation」](https://www.nature.com/articles/s41598-025-31075-1) — CNN/DailyMail、PubMed、ArXiv上の反復的ハルシネーション修正向けのQ-S-E方法論導入',
            '[Vectara HHEM Leaderboard, 2025. 「Hughes Hallucination Evaluation Model — Document Summarisation Faithfulness Rankings」](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) — 831ドキュメント上の100+ LLMテスト。Gemini-2.0-Flash 0.7%ハルシネーション',
            '[SEI/CMU, 2025. 「Evaluating LLMs for Text Summarisation: An Introduction」](https://www.sei.cmu.edu/blog/evaluating-llms-for-text-summarization-introduction/) — 精度、忠実性、圧縮、効率評価向けフレームワーク',
          ],
        },
      },
    },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
  };
