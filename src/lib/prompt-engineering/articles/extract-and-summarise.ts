// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: extract-and-summarise
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Extract and Summarise With AI',
      intro: 'AI-powered extraction and summarisation reduces document review time by 60—80% while achieving hallucination rates as low as 0.7% on grounded summarisation tasks — the key is choosing the right summarisation type, the right model, and the right prompt structure for each document category.',
      publishDate: '2026-03-23',
      seoTitle: 'How to Extract and Summarize Documents with AI Prompts 2026',
      metaDescription: 'Best prompting techniques for accurate document extraction and summarization using local LLMs and cloud models.',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      aboutTopics: ['Document summarisation', 'NotebookLM', 'LLM hallucination'],
      howToName: 'How to Use Iterative Summarisation',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Extract and Summarise With AI',
        description: 'AI document summarisation cuts review time by 60—80% with 0.7% hallucination rates. Learn extractive vs abstractive approaches, which models to use, and how to structure prompts for faithful outputs.',
        datePublished: '2026-03-23',
        dateModified: '2026-03-23',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          url: 'https://www.promptquorum.com/about',
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
        keywords: ['AI summarisation', 'document extraction', 'abstractive summarisation', 'extractive summarisation', 'NotebookLM', 'Claude', 'hallucination rates', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
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
              text: 'Extractive summarisation copies sentences directly from the source document without modification — factual errors are structurally impossible because no new text is generated. Abstractive summarisation uses LLMs to generate new paraphrased sentences that condense information — producing more readable output but with hallucination rates of 0.7—14% depending on the model and task. Use extractive for legal and compliance documents; use abstractive for executive summaries and research synthesis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI model hallucinates least when summarising documents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On Vectara\'s HHEM benchmark — the standard faithfulness test for document summarisation across 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) achieved the lowest hallucination rate at 0.7% as of 2025. Four models now achieve sub-1% rates on grounded summarisation. These rates apply only to source-grounded tasks; open-domain factual recall produces rates of 3—33% across the same models.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many pages can AI summarisation tools process at once?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This depends on the model\'s context window. GPT-4o (OpenAI) handles approximately 100 standard pages per session (128k token limit). Claude 4.6 Sonnet (Anthropic) handles approximately 160 pages (200k tokens). Gemini 2.5 Pro (Google DeepMind) handles approximately 800 pages (1M tokens). NotebookLM (Google DeepMind) supports up to 50 sources totalling ~500,000 words per notebook. For larger corpora, document chunking is required.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is NotebookLM or Claude better for document summarisation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'They serve different needs. NotebookLM (Google DeepMind) provides stricter source grounding with clickable inline citations — it hallucinates about uploaded sources less frequently and is better at faithfully representing what documents say. Claude 4.6 Sonnet (Anthropic) produces more nuanced analysis, excels at synthesising across multiple documents, and identifies non-obvious connections — but occasionally blends source content with general training knowledge in ways that can be subtly misleading. Use NotebookLM for precision; use Claude for insight.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I prevent AI from hallucinating in my summaries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Four techniques reduce hallucination in summarisation tasks: (1) instruct the model explicitly — "summarise only from the document below; do not add external knowledge"; (2) set Temperature (T) to 0.0—0.1 for maximum determinism; (3) use a faithfulness check — ask the model to list every claim in its summary and identify its source sentence; (4) cross-check with a second model — when GPT-4o and Claude 4.6 Sonnet agree on a specific fact, the probability of shared hallucination is statistically near-zero.',
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Which AI Model to Use', 'description': 'Comparing NotebookLM, Claude, GPT-4o, and Gemini for summarisation tasks' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Prompt Structure for Extraction', 'description': 'How to write structured prompts that prevent hallucination and ensure accuracy' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Reducing AI Hallucinations', 'description': 'Temperature settings, faithfulness checks, and multi-model verification' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Tools and Workflows', 'description': 'Using NotebookLM, Scholarcy, Elicit, and custom extraction pipelines' },
        ],
      },
      sections: {
        definition: {
          title: 'The Two Summarisation Types: Which One to Use',
          content: [
            '**Extractive summarisation copies sentences directly from the source; abstractive summarisation generates new sentences that paraphrase and condense — the two approaches trade factual precision against readability and compression.**',
            'Extractive summarisation — used by tools like Scholarcy — ranks sentences by keyword frequency, position, and information density, then reproduces the top-scoring sentences without modification. Because no new text is generated, factual errors are structurally impossible: the output is always a subset of the source. Abstractive summarisation — used by GPT-4o (OpenAI), Claude 4.6 Sonnet (Anthropic), and Gemini 2.5 Pro (Google DeepMind) — generates new text that synthesises and paraphrases, producing more readable output at the cost of a higher hallucination risk.',
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
              'Hallucination Risk': '0.7—14% depending on model and task',
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
          blockquote: 'A 2025 arXiv study benchmarking summarisation approaches across financial news articles found that extractive methods (Lead-1, MatchSum) establish strong baselines for short, well-structured texts — but abstractive LLMs outperform them for complex financial documents when fine-tuned on domain-specific data. Fine-tuned GPT-4o-mini achieved a BERTScore of 0.619 vs. Lead-1\'s 0.588 on the same benchmark. In one sentence: Use extractive summarisation when you cannot afford a factual error; use abstractive summarisation when you need the output to be readable and usable without further editing.',
        },
        toolComparison: {
          title: 'Which AI Model to Use for Summarisation',
          content: [
            '**NotebookLM (Google DeepMind) leads for source-grounded, cited summarisation of uploaded documents; Claude 4.6 Sonnet (Anthropic) leads for synthesis, cross-document analysis, and complex reasoning; GPT-4o (OpenAI) leads for fast, flexible general-purpose summarisation.**',
            'On Vectara\'s Hughes Hallucination Evaluation Model (HHEM) — the standard benchmark for document summarisation faithfulness, tested across 831 documents per model — the top performers in 2025 were:',
            'These rates represent a 96% improvement from 2021, when the best models scored 21.8% hallucination rates on the same task. However, these numbers apply only to grounded summarisation — where the model is anchored to a source document. Open-domain factual recall produces hallucination rates of 3—33% across the same models.',
          ],
          items: [
            '**Gemini-2.0-Flash-001 (Google DeepMind):** 0.7% hallucination rate — lowest recorded on the benchmark',
            '**OpenAI and Gemini variants:** 0.8—1.5% hallucination rate cluster',
            '**Overall top models:** 4 models now achieve sub-1% rates on grounded summarisation tasks',
          ],
        },
        toolTable: {
          title: 'Summarisation Tool Comparison',
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
              Tool: 'GPT-4o (OpenAI)',
              'Context Limit': '128K tokens (~100 pages)',
              'Citation Quality': 'Moderate; requires explicit instruction',
              'Best Use Case': 'General documents, fast summaries',
            },
            {
              Tool: 'Gemini 2.5 Pro (Google DeepMind)',
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
            '**Tested in PromptQuorum — 25 document summarisation prompts dispatched across three models:** Claude 4.6 Sonnet produced the most analytically complete summaries (identifying implications and connections between documents) in 20 of 25 cases. GPT-4o produced the most concise, immediately usable summaries in 18 of 25 cases. Gemini 2.5 Pro was the only model that could process all 25 documents in full without context truncation, as several exceeded 80,000 tokens.',
          ],
        },
        promptStructure: {
          title: 'How to Write Extraction and Summarisation Prompts',
          content: [
            '**A structured summarisation prompt — one that specifies the document type, output format, length constraint, and explicit instruction to flag unverifiable claims — produces directly usable outputs; an unstructured prompt produces a generic paragraph that misses critical information.**',
            'The most common prompt engineering failure in summarisation is treating "summarise this" as a complete instruction. Every assumption the model makes about length, format, perspective, and level of detail is a potential mismatch with what you actually need.',
          ],
        },
        promptFramework: {
          title: 'The Five-Component Extraction Prompt',
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
          title: '[Good Prompt Example]',
          blockquote: 'You are a financial analyst. Summarise the attached Q3 earnings report using only information in the document — do not add external context. Structure the output as: [Revenue & Margins], [Segment Performance], [Guidance Changes], [Key Risks]. Maximum 250 words. Flag any figure that contradicts an earlier statement in the same document with [DISCREPANCY].',
          content: [
            'The structured prompt produces a document directly usable in a briefing. The open prompt produces a narrative paragraph that omits segment data, buries guidance changes, and requires 30 minutes of restructuring.',
          ],
        },
        chunking: {
          title: 'Chunking for Long Documents',
          content: [
            '**For documents exceeding the model\'s context window, chunking — splitting the document into segments of 500—2,000 tokens, summarising each chunk, then synthesising the chunk summaries — preserves information that would otherwise be truncated or degraded.**',
            'The four chunking methods, ordered by reliability for structured documents:',
            'For documents with clear section structures (legal contracts, annual reports, academic papers), thematic chunking produces the most coherent final synthesis. For unstructured documents (email threads, transcripts), paragraph-based chunking at 500-token intervals is the recommended default.',
          ],
          items: [
            '**Thematic chunking** — divide by section headings or topic breaks; highest semantic coherence per chunk',
            '**Paragraph-based chunking** — split at paragraph boundaries; preserves context better than sentence splitting',
            '**Fixed token limit** — chunks at a defined token count (e.g., every 1,000 tokens); consistent but may split mid-argument',
            '**Sentence-based chunking** — maximum granularity; most computationally intensive',
          ],
        },
        iterativeSummarisation: {
          title: 'Iterative Summarisation for Accuracy',
          content: [
            'Iterative summarisation — generating an initial summary, then refining it with a second targeted prompt — improves factual completeness and reduces omissions. The two-step structure:',
          ],
          numberedItems: [
            '**Initial prompt:** "Summarise the key arguments, data points, and conclusions from the document. Flag anything you are uncertain about."',
            '**Refinement prompt:** "Review your summary. Identify any claim that is stated in the document but absent from your summary. Add those claims now."',
          ],
        },
        hallucinationAnalysis: {
          title: 'Hallucination in Summarisation: What the Numbers Show',
          content: [
            '**Grounded summarisation hallucination rates have dropped 96% since 2021 — from 21.8% to 0.7% for the best models — but a 2025 mathematical proof confirmed that hallucinations cannot be fully eliminated under current LLM architectures.**',
            'The architecture reason is fundamental: LLMs generate statistically probable next tokens based on pattern matching across training data, not by retrieving verified facts. Even when given a source document, a model occasionally "blends" source content with training knowledge in a way that produces a plausible but unfaithful sentence — what researchers call a "mixed context hallucination."',
            'The failure modes in AI summarisation, ordered by frequency:',
          ],
          items: [
            '**Mixed context hallucination** — model combines facts from the source with facts from training data, producing a sentence that is partially correct and partially fabricated',
            '**Missing information** — model omits key claims from the source that were present in less prominent positions',
            '**Factual inconsistency** — model contradicts a specific figure or date from the source document',
            '**Irrelevant information** — model adds context from training data not present in the source',
          ],
          blockquote: 'A 2025 Nature-published framework (Liu et al.) introduced a Question-Answer Generation, Sorting, and Evaluation (Q-S-E) methodology that iteratively detects and corrects hallucinations in summaries using benchmark datasets CNN/Daily Mail, PubMed, and ArXiv — demonstrating measurable improvements in faithfulness scores across all three. PromptQuorum\'s multi-model dispatch addresses this directly: sending the same document to GPT-4o (OpenAI), Claude 4.6 Sonnet (Anthropic), and Gemini 2.5 Pro simultaneously and comparing outputs identifies the passages where models disagree — which are statistically the highest-risk passages for hallucination.',
        },
        evaluationMetrics: {
          title: 'Summarisation Evaluation Metrics',
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
          title: 'Global and Regional Context',
          content: [
            'European enterprises processing documents under GDPR cannot send sensitive content to external API endpoints without compliance review. Mistral AI (France) provides locally deployable models — Mistral Large and Mistral Small — that perform abstractive summarisation entirely on-premise, with zero data leaving the organisation\'s infrastructure, satisfying EU data residency requirements under Article 46 of GDPR.',
            'Chinese enterprises increasingly use **Qwen 2.5** (Alibaba) and **DeepSeek V3** for document extraction tasks across Chinese-language corpora. Both models tokenise Chinese characters (CJK scripts) at a more efficient ratio than Western-trained models — a 10,000-character Chinese document consumes roughly 40% fewer tokens in Qwen 2.5 than in GPT-4o, making large-scale Chinese document processing significantly cheaper. China\'s Interim Measures for Generative AI (2023) require AI-generated summaries used in official contexts to be labelled as AI-generated.',
            'Japanese enterprises operating under METI data governance guidelines frequently deploy **Ollama** with LLaMA 3.1 models for local document summarisation. LLaMA 3.1 7B requires 8GB RAM for local inference and produces zero external API calls — meeting strict data residency requirements for sensitive legal and financial documents.',
          ],
        },
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Use extractive summarisation for legal, compliance, and exact-wording documents; use abstractive LLM summarisation for research synthesis and executive outputs',
            'Gemini-2.0-Flash-001 achieves 0.7% hallucination rate on grounded summarisation — the best-performing model on Vectara\'s HHEM benchmark across 831 documents',
            'NotebookLM (Google DeepMind) provides the most reliable source-grounded summarisation with clickable inline citations; Claude 4.6 Sonnet leads for cross-document synthesis and complex analysis',
            'Grounded summarisation hallucination rates fell 96% from 2021 to 2025 — but a 2025 mathematical proof confirmed hallucinations cannot be fully eliminated under current LLM architectures',
            'For documents exceeding context window limits, thematic chunking (by section/topic) produces the most coherent final synthesis',
            'Claude 4.6 Sonnet handles ~160 pages per session (200k tokens); Gemini 2.5 Pro handles ~800 pages (1M tokens) — context limits determine which model is practical for large document sets',
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the foundational principles behind structured AI instructions',
            '[AI-Powered Research](/prompt-engineering/ai-powered-research) — how to combine extraction tools with multi-source verification workflows',
            '[AI Limitations — What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — specific techniques for grounding AI outputs in verified source content',
          ],
        },
        howToStart: {
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
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between extractive and abstractive AI summarisation?',
              a: 'Extractive summarisation copies sentences directly from the source document without modification — factual errors are structurally impossible because no new text is generated. Abstractive summarisation uses LLMs to generate new paraphrased sentences that condense information — producing more readable output but with hallucination rates of 0.7—14% depending on the model and task. Use extractive for legal and compliance documents; use abstractive for executive summaries and research synthesis.',
            },
            {
              q: 'Which AI model hallucinates least when summarising documents?',
              a: 'On Vectara\'s HHEM benchmark — the standard faithfulness test for document summarisation across 831 documents — Gemini-2.0-Flash-001 (Google DeepMind) achieved the lowest hallucination rate at 0.7% as of 2025. Four models now achieve sub-1% rates on grounded summarisation. These rates apply only to source-grounded tasks; open-domain factual recall produces rates of 3—33% across the same models.',
            },
            {
              q: 'How many pages can AI summarisation tools process at once?',
              a: 'This depends on the model\'s context window. GPT-4o (OpenAI) handles approximately 100 standard pages per session (128k token limit). Claude 4.6 Sonnet (Anthropic) handles approximately 160 pages (200k tokens). Gemini 2.5 Pro (Google DeepMind) handles approximately 800 pages (1M tokens). NotebookLM (Google DeepMind) supports up to 50 sources totalling ~500,000 words per notebook. For larger corpora, document chunking is required.',
            },
            {
              q: 'Is NotebookLM or Claude better for document summarisation?',
              a: 'They serve different needs. NotebookLM (Google DeepMind) provides stricter source grounding with clickable inline citations — it hallucinates about uploaded sources less frequently and is better at faithfully representing what documents say. Claude 4.6 Sonnet (Anthropic) produces more nuanced analysis, excels at synthesising across multiple documents, and identifies non-obvious connections — but occasionally blends source content with general training knowledge in ways that can be subtly misleading. Use NotebookLM for precision; use Claude for insight.',
            },
            {
              q: 'How do I prevent AI from hallucinating in my summaries?',
              a: 'Four techniques reduce hallucination in summarisation tasks: (1) instruct the model explicitly — "summarise only from the document below; do not add external knowledge"; (2) set Temperature (T) to 0.0—0.1 for maximum determinism; (3) use a faithfulness check — ask the model to list every claim in its summary and identify its source sentence; (4) cross-check with a second model — when GPT-4o and Claude 4.6 Sonnet agree on a specific fact, the probability of shared hallucination is statistically near-zero.',
            },
            {
              q: 'What is document chunking and when should I use it?',
              a: 'Chunking splits a document into segments (typically 500–2,000 tokens), summarises each segment separately, then synthesises the chunk summaries into a final output. Use it when your document exceeds the model context window — roughly 100 pages for GPT-4o (128k tokens), 160 pages for Claude 4.6 Sonnet (200k tokens), or 800 pages for Gemini 2.5 Pro (1M tokens). For structured documents (legal contracts, annual reports), thematic chunking by section headings produces the most coherent final synthesis. For unstructured text (email threads, transcripts), paragraph-based chunking at 500-token intervals is the recommended default.',
            },
            {
              q: 'What are ROUGE and BERTScore, and which metric should I use to evaluate AI summaries?',
              a: 'ROUGE measures n-gram overlap between a generated summary and a reference — useful for benchmarking but blind to semantic meaning and factual accuracy. BERTScore uses cosine similarity between BERT embeddings, capturing semantic similarity rather than exact word matches. For production document workflows, neither is sufficient alone: use faithfulness metrics such as HHEM (Vectara) or FaithJudge to measure whether the summary contains only claims supported by the source document. Combine HHEM faithfulness scoring with a completeness check for the most reliable quality signal.',
            },
            {
              q: 'Can AI summarisation tools handle documents in languages other than English?',
              a: 'Yes, with important caveats. Mistral AI models (France) handle French and European languages natively and can be deployed locally for GDPR compliance. Qwen 2.5 (Alibaba) tokenises Chinese characters at roughly 40% fewer tokens than GPT-4o — making large-scale Chinese document processing significantly cheaper. LLaMA 3.1 models deployed via Ollama support multilingual summarisation while keeping data fully on-premise, satisfying data residency requirements for Japanese enterprises under METI guidelines. English-first models (GPT-4o, Claude 4.6 Sonnet) also handle multilingual documents but with slightly higher error rates on non-Latin scripts.',
            },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            '[Liu et al., 2025. "A hallucination detection and mitigation framework for text summarisation"](https://www.nature.com/articles/s41598-025-31075-1) — introduces Q-S-E methodology for iterative hallucination correction across CNN/DailyMail, PubMed, and ArXiv benchmarks',
            '[Vectara HHEM Leaderboard, 2025. "Hughes Hallucination Evaluation Model — Document Summarisation Faithfulness Rankings"](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) — tested 100+ LLMs across 831 documents; Gemini-2.0-Flash at 0.7% hallucination rate',
            '[SEI/CMU, 2025. "Evaluating LLMs for Text Summarisation: An Introduction"](https://www.sei.cmu.edu/blog/evaluating-llms-for-text-summarization-introduction/) — framework for accuracy, faithfulness, compression, and efficiency evaluation',
          ],
        },
      },
    },
    de: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
    fr: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
    ja: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
  };
