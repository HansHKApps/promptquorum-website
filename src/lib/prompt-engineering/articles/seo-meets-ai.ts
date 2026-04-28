// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: seo-meets-ai
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      title: 'SEO Meets AI: How GEO Is Replacing the Old Playbook',
      intro: '**Generative Engine Optimization (GEO) is the practice of structuring content so AI search engines (ChatGPT, Perplexity, Gemini, Claude) cite it when synthesizing answers — replacing the traditional SEO goal of ranking among Google\'s blue links with a new goal of being named in the 2–7 sources an AI quotes per response.**\n\nGEO does not replace traditional SEO; it adds a second optimization layer for a search landscape where AI assistants handle over 40% of search interactions and nearly 60% of all searches now end without a single click.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28 against GPT-5, Claude 4.7 Opus, Gemini 3 Pro release data',
      readTime: '8 min read',

      seoTitle: 'SEO Meets AI 2026: How to Rank & Get Cited in AI Answers',

      metaDescription: 'Generative Engine Optimization (GEO) gets your content cited in AI answers from ChatGPT, Gemini, and Perplexity. Learn how GEO differs from SEO, why AI traffic converts 54% better, and optimization tactics for 2026.',

      educationalLevel: 'Beginner',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: Two Different Games', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Why AI Traffic Converts Differently', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'What Are the Technical Foundations of GEO?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'Which AI Crawlers Should You Unblock in robots.txt?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Content Structure: What AI Engines Actually Cite', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Bad vs. Good: A GEO-Compliant Rewrite', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'Does Traditional SEO Still Matter for GEO?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Which AI Platforms Dominate the Search Market?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'How Does GEO Differ Across Regions and Markets?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'How to Optimize Content for GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Common GEO Mistakes (And How to Fix Them)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Frequently Asked Questions', anchor: '#frequently-asked-questions' },
        { label: 'Sources & Further Reading', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'SEO Meets AI: How GEO Is Replacing the Old Playbook',
        description: 'Generative Engine Optimization (GEO) is how AI-powered search engines cite your content. Learn the difference between GEO and SEO, why AI traffic converts better, and the technical foundations for getting your content cited in ChatGPT, Perplexity, and Gemini.',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
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
          url: 'https://www.promptquorum.com/api/og/seo-meets-ai',
          width: 1200,
          height: 630,
        },
        keywords: ['GEO', 'SEO', 'generative engine optimization', 'AI search', 'ChatGPT search', 'Perplexity', 'Google AI Overviews', 'JSON-LD schema', 'AI citations'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between SEO and GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO (Search Engine Optimization) focuses on ranking pages in traditional search engine results like Google and Bing, where users choose from a list of blue links. GEO (Generative Engine Optimization) focuses on getting your content cited inside AI-generated answers from ChatGPT, Perplexity, Gemini, and Claude — where users receive one synthesized response rather than a list of options. Both are necessary: ranking in Google\'s top 10 increases the probability of being cited in Google AI Overviews by approximately 25%.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does AI search traffic convert better than organic search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For B2B companies, yes — significantly. A WebFX analysis of 2.3 billion sessions found AI-referred visitors converted at a 54.15% session rate vs. 45.23% for organic search. Ahrefs reported 23× higher conversion rates from AI search for its own site. For e-commerce, the evidence is mixed — SearchEngineLand\'s analysis of 973 e-commerce sites found AI search converted worse than organic. The conversion advantage is clearest for B2B and high-consideration purchases.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does schema markup improve AI citation rates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pages with correct JSON-LD schema markup earn up to 40% more rich-result impressions. Controlled testing found content with properly implemented structured data achieved citation rates 340% higher than identical unstructured content. However, a 2026 SearchAtlas study found that schema coverage alone does not consistently increase LLM citation frequency across OpenAI, Gemini, and Perplexity — content authority and answer-first structure remain stronger signals.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast is AI search growing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Generative AI traffic grew 796% from January 2024 to December 2025, with session conversions growing 6,432% in the same period. AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025. Despite this growth, AI search accounts for only 0.18% of total web sessions — organic and direct traffic still dominate at 63%. AI search traffic is projected to overtake traditional organic search within 2—4 years.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is SEO still relevant in the age of AI search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — traditional SEO is a prerequisite for GEO, not an alternative to it. Sites ranking in Google\'s top 10 have a 25% chance of being cited in AI Overviews; sites outside the top 10 have near-zero AI visibility through Google\'s platform. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals that boost traditional rankings also strengthen AI citation probability. The two disciplines share foundational requirements — the difference is that GEO adds answer-first structure, entity density, and schema markup as additional layers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What\'s the first step to optimize my content for GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start by auditing your current content through an AI lens: take 10 of your highest-traffic pages and query ChatGPT, Perplexity, and Google AI Overviews with questions related to your topic. Check whether your content is cited or recommended. This identifies gaps where you\'re not appearing in AI answers. From there, prioritize adding JSON-LD schema markup (Article and FAQPage are highest-impact), restructuring content to answer-first format, and adding FAQ sections that anticipate sub-questions AI systems decompose from broader user queries.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is llms.txt and do I need one?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt is an emerging standard (analogous to robots.txt) that lets you provide a structured site summary for AI models to ingest directly. It lives in your site root and signals which content is available for citation. As of April 2026, ChatGPT, Perplexity, and Claude all support llms.txt as a crawl hint. It is not required, but it accelerates AI indexing of your highest-value content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is GEO different from AEO (Answer Engine Optimization)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO and AEO are closely related but not identical. AEO focuses on optimizing for direct answer boxes and featured snippets in traditional search engines. GEO specifically targets generative AI engines (ChatGPT, Gemini, Perplexity, Claude) that synthesize answers from multiple sources using RAG pipelines. GEO requires answer-first structure, schema markup, and entity density — AEO techniques overlap significantly, but GEO adds the requirement of standalone, extractable paragraphs that can be cited out of context.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'SEO Meets AI: Key Topics',
        'description': 'Core concepts for understanding Generative Engine Optimization',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs SEO: Two Different Games', 'description': 'Understanding the differences between traditional SEO and Generative Engine Optimization' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Why AI Traffic Converts Differently', 'description': 'How AI-referred visitors convert at higher rates than organic search' },
          { '@type': 'ListItem', 'position': 3, 'name': 'The Technical Foundations of GEO', 'description': 'JSON-LD schema markup and its impact on AI citation rates' },
          { '@type': 'ListItem', 'position': 4, 'name': 'The AI Crawler Stack', 'description': 'Understanding GPTBot, ClaudeBot, PerplexityBot and llms.txt standards' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Content Structure and AI Citation', 'description': 'How answer-first structure, entity density, and formatting maximize AI citations' },
        ],
      },
      widgetEmbedUrl: '/widgets/seo-meets-ai-widget.html',
      widgetDescription: 'Interactive GEO audit guide: Answer 10 quick questions about your content structure, technical SEO, and AI platform readiness. Get a 0–10 readiness score, regional compliance guidance (DSGVO, CNIL, METI, Data Security Law), and a prioritized action plan with effort estimates for optimizing your content to rank and get cited in ChatGPT, Perplexity, Google AI Overviews, and Claude.',
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) gets content cited in AI-generated answers; SEO gets pages ranked in blue-link results — both are required in 2026',
            'AI traffic converts at a 54.15% session conversion rate vs. 45.23% for organic search — but accounts for just 0.18% of total sessions today',
            'Pages with JSON-LD schema markup earn up to 40% more rich-result impressions; structured data increases citation probability by up to 340% in controlled tests',
            'Ranking in Google\'s top 10 gives a 25% chance of appearing in Google AI Overviews — traditional SEO authority is a prerequisite for GEO visibility',
            'ChatGPT holds 59.70% of the AI search market — optimize for ChatGPT first, then Perplexity (100% source transparency) and Gemini',
            'List-based content receives 68% more AI citations than prose-heavy content; FAQ sections increase AI visibility by 45%',
            'AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025 — the channel is small but growing at unprecedented speed',
          ],
        },
        definition: {
          title: 'GEO vs. SEO: Two Different Games',
          content: [
            '**Traditional SEO earns a slot among 10 blue links; GEO earns a citation among the 2—7 sources an AI model typically names in a single synthesized answer.** The ranking signals, content formats, and success metrics are fundamentally different. Understanding how [AI systems work and their limitations](/prompt-engineering/ai-limitations-what-llms-cant-do) is essential to optimizing for GEO.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Pro Tip',
              text: 'Pages ranking in Google\'s top 10 have a 25% probability of appearing in Google AI Overviews. This means traditional SEO ranking position is a prerequisite for GEO visibility — not optional.',
            },
          ],
          columns: ['Aspect', 'Traditional SEO', 'Generative Engine Optimization (GEO)'],
          rows: [
            { Aspect: 'Primary goal', 'Traditional SEO': 'Rank #1—10 in Google/Bing', 'Generative Engine Optimization (GEO)': 'Get cited in AI-generated answers' },
            { Aspect: 'Target platforms', 'Traditional SEO': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { Aspect: 'Core success metric', 'Traditional SEO': 'Rankings, clicks, organic traffic', 'Generative Engine Optimization (GEO)': 'AI citations, brand mentions in AI responses' },
            { Aspect: 'Content approach', 'Traditional SEO': 'Keywords, backlinks, metadata', 'Generative Engine Optimization (GEO)': 'Entity-rich, structured, answer-first facts' },
            { Aspect: 'Time to results', 'Traditional SEO': '4—6 months', 'Generative Engine Optimization (GEO)': '6—12 months' },
            { Aspect: 'Conversion rate (B2B)', 'Traditional SEO': '~2.1% average', 'Generative Engine Optimization (GEO)': '~27% average for AI-referred visitors' },
          ],
          blockquote: 'Both SEO and GEO rely on the same fundamentals — clarity, authority, structured content, and user intent. The difference is that AI engines interpret those signals through entity recognition and semantic completeness rather than backlinks and click metrics. In one sentence: If traditional SEO was about winning a race to Page 1, GEO is about being the source an AI quotes when it already knows the answer.',
        },
        conversionAnalysis: {
          title: 'Why AI Traffic Converts Differently',
          content: [
            '**Visitors arriving from AI search engines convert at significantly higher rates than organic search visitors — because they arrive pre-informed, after the AI has already synthesized and compared options on their behalf.**',
            '**Note on metrics:** The studies below measure different things — session-level conversion rate (WebFX), goal-completion lift (Ahrefs), and B2B-specific conversion (SEMrush). These numbers are not directly comparable; each is sourced and labeled.',
            'A WebFX analysis of 2.3 billion site sessions (January 2024—December 2025) found:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: 'Conversion lift varies by industry. B2B sees 54% conversion rates from AI traffic vs 45% from organic. E-commerce sees the opposite: AI traffic converts worse. Test your own traffic to confirm the advantage applies to your sector.',
            },
          ],
          items: [
            'Generative AI traffic grew **796% in two years**',
            'AI-referred visitors converted at a **54.15% session conversion rate** vs. 45.23% for organic search',
            'AI traffic conversions grew **6,432% year-over-year** — faster than session growth, meaning a higher share of visitors are converting',
          ],
          blockquote: 'The conversion premium is especially pronounced in B2B. Ahrefs reported AI search tools converted at 23× the rate of organic search for its own site. SEMrush found AI search traffic converted at 4.4× the organic rate across a study of 500+ B2B topics. However, SearchEngineLand\'s analysis of 973 e-commerce websites found AI-referred visitors converted worse than organic — the advantage is task- and sector-dependent. **Tested in PromptQuorum — 25 brand visibility queries dispatched to three models:** GPT-5 (OpenAI), Claude 4.7 Opus (Anthropic), and Gemini 3 Pro (Google DeepMind) cited identical brand sources in 17 of 25 cases. In 8 cases, models cited different sources for the same query — confirming that AI citation is not deterministic and that appearing in training data across multiple authoritative contexts increases citation probability.',
        },
        technicalFoundations: {
          title: 'What Are the Technical Foundations of GEO?',
          content: [
            '**Pages with correct JSON-LD schema markup earn up to 40% more rich-result impressions than unmarked pages — and content with properly implemented structured data achieves citation rates up to 340% higher in controlled AI citation tests.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) is the schema format recommended by Google and the most AI-parseable structured data format. Placed in a `<script>` block in the page `<head>`, it decouples semantic labels from visible HTML — reducing implementation error rates by roughly 60% compared to inline Microdata or RDFa. When combined with [well-structured writing](/prompt-engineering/write-better-code-with-ai), schema markup becomes your GEO foundation.',
            'The most impactful schema types for AI citation, ordered by citation lift:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Key Point',
              text: 'A 2026 SearchAtlas study found that schema markup alone does not guarantee higher AI citation rates. Content authority and answer-first structure are stronger signals. Schema is foundational but not sufficient by itself.',
            },
          ],
          items: [
            '**Article / TechArticle** — establishes authorship, publication date, and topic category',
            '**FAQPage** — Q&A pairs extracted directly by AI answer engines',
            '**HowTo** — numbered steps preferred by AI for procedural queries',
            '**Organization** — entity recognition: who you are, what you do, your official URL',
            '**BreadcrumbList** — signals content hierarchy and topical depth',
          ],
          blockquote: 'One important caveat: a 2026 SearchAtlas study analyzing schema adoption vs. AI citation frequency across OpenAI, Gemini, and Perplexity found that higher schema coverage alone does not consistently produce higher LLM citation rates. Schema makes content easier to parse — but content authority, entity density, and answer-first structure remain the stronger citation signals.',
        },
        crawlerStack: {
          title: 'Which AI Crawlers Should You Unblock in robots.txt?',
          content: [
            '**AI search platforms use dedicated crawlers distinct from Googlebot. Ensure none are blocked in your `robots.txt`:**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: 'Add a dedicated `llms.txt` file to your site root. List your high-value content topics, update frequency, and data sources. This tells AI crawlers exactly what you want indexed for citation. Follow the emerging standard at https://llms.txt.',
            },
          ],
          items: [
            '**GPTBot** — OpenAI\'s crawler for ChatGPT search and training',
            '**ClaudeBot** — Anthropic\'s crawler for Claude AI',
            '**PerplexityBot** — Perplexity AI\'s web crawler',
            '**GoogleBot** — also feeds Google AI Overviews via Gemini',
          ],
          blockquote: 'The emerging `llms.txt` standard — analogous to `robots.txt` — lets you provide a structured site summary that AI models can ingest directly, signalling which content is available for citation and retrieval.',
        },
        contentStructure: {
          title: 'Content Structure: What AI Engines Actually Cite',
          content: [
            '**List-based content receives 68% more AI citations than paragraph-heavy alternatives; FAQ sections with structured Q&A blocks produce a 45% visibility increase in AI-generated responses.**',
            'AI engines use Retrieval-Augmented Generation (RAG) — they search an index first, retrieve matching passages, then synthesize an answer. This means your content must be citable at the paragraph or section level, not just at the page level. A single well-structured section can be extracted and cited without the AI consuming your entire page.',
            'The five content principles that maximize AI citation probability:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Retrieval-Augmented Generation (RAG) extracts and cites individual passages from your content, not entire pages — so structure matters more than word count.',
            },
            {
              type: 'in-plain-terms',
              text: 'Think of your content like a textbook. AI systems don\'t read cover-to-cover; they search for the answer to a specific question, pull out the relevant paragraph, cite it, and move on. A clear, standalone paragraph beats 5,000 words of prose.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: 'Vague marketing language ("powerful," "seamless," "revolutionary," "leading") is ignored by AI crawlers. Use specific facts: exact numbers, named entities, measurable claims. If you can\'t cite it, AI systems won\'t extract it.',
            },
          ],
          items: [
            '**Answer first** — put the direct answer in the first sentence of every section; AI crawlers sample the opening sentence of each heading. This is the core principle of [prompt engineering](/prompt-engineering/what-is-prompt-engineering) applied to written content',
            '**Entity density** — mention 5—7 named entities per article (product names, company names, technical terms, researcher names) to signal topical authority. This is how you tell AI systems your topic is authoritative and citable',
            '**Semantic completeness** — each section must answer its question without requiring context from other sections; AI extracts passages in isolation',
            '**Specific facts over vague claims** — exact numbers, dates, and named sources are cited; phrases like "leading solution" or "powerful tool" are ignored',
            '**Structured formatting** — tables and bullet lists are machine-readable; prose paragraphs require NLP parsing and are cited less frequently',
          ],
        },
        goodExample: {
          title: 'Bad vs. Good: A GEO-Compliant Rewrite',
          content: [
            '**Bad — zero-information prose (will not be cited):**',
            '> Our platform is a powerful, comprehensive solution that seamlessly integrates with leading AI tools to deliver industry-leading results.',
            'Every competitor could publish this unchanged. Zero entities, zero specific facts, zero verifiable claims — AI engines skip it entirely.',
            '**Good — entity-rich, fact-dense (citation-ready):**',
          ],
          blockquote: 'PromptQuorum dispatches one prompt to up to 25 AI models simultaneously — including GPT-5 (OpenAI), Claude 4.7 Opus (Anthropic), Gemini 3 Pro (Google DeepMind), and local models via Ollama — and returns all responses side-by-side for comparison.',
        },
        goodExampleExplanation: {
          content: [
            'Four named entities, one specific number (25), one verifiable function (side-by-side comparison). AI engines extract and attribute this immediately. PromptQuorum includes 9 built-in prompt frameworks (CO-STAR, CRAFT, RISEN, SPECS, TRACE, and four others) that help structure content to meet these GEO requirements directly inside the app.',
          ],
        },
        seoFoundation: {
          title: 'Does Traditional SEO Still Matter for GEO?',
          content: [
            '**If your website ranks in Google\'s top 10 blue links, you have a 25% chance of being cited as a source in Google AI Overviews — SEO authority feeds GEO visibility.**',
            'An analysis of 25,000 real user queries across AI search platforms found that traditional Google ranking position directly correlates with AI citation probability. Sites ranking #1 in traditional search appeared in AI Overviews 25% of the time — compared to near-zero for pages outside the top 10. Google AI Overviews uses Gemini to synthesize answers from the top-ranked documents for a query, making traditional ranking a prerequisite for AI inclusion.',
            'The hybrid SEO + GEO stack for 2026:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals boost both traditional search rankings and AI citation probability.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Pro Tip',
              text: 'Don\'t abandon SEO for GEO. They reinforce each other: improve Core Web Vitals (SEO) → rank higher → get cited in AI Overviews (GEO). E-E-A-T signals strengthen both. Optimize the full stack, not just one layer.',
            },
          ],
          columns: ['Layer', 'What to Do', 'Why'],
          rows: [
            {
              Layer: 'Technical SEO',
              'What to Do': 'Page speed, mobile, Core Web Vitals, canonical URLs',
              Why: 'GEO bots respect the same crawlability signals as Googlebot',
            },
            {
              Layer: 'Content SEO',
              'What to Do': 'E-E-A-T signals, author credentials, visible publication dates; [see how to write better content](/prompt-engineering/write-better-code-with-ai)',
              Why: 'AI engines favor content with explicit authority signals',
            },
            {
              Layer: 'Entity SEO',
              'What to Do': 'JSON-LD schema, knowledge graph optimization',
              Why: 'Machines build entity graphs; vague pages are skipped',
            },
            {
              Layer: 'GEO-specific',
              'What to Do': 'Answer-first structure, FAQ sections, llms.txt',
              Why: 'Optimizes for extraction by RAG pipelines',
            },
            {
              Layer: 'Citation building',
              'What to Do': 'Links from authoritative sources (arXiv, Reuters, official docs)',
              Why: 'AI models weight domains cited by other authoritative sources',
            },
          ],
        },
        platformBreakdown: {
          title: 'Which AI Platforms Dominate the Search Market?',
          content: [
            '**ChatGPT holds 59.70% of the generative AI search market; Microsoft Copilot follows at 14.40%; Google Gemini at 13.50% — making ChatGPT optimization the highest-leverage GEO investment for most content strategies.**',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Did You Know?',
              text: 'Perplexity AI provides source citations 100% of the time for factual queries—making it the most transparent AI search platform and the easiest for measuring citation success. Perplexity optimization best practices transfer directly to ChatGPT and Gemini.',
            },
          ],
          columns: ['Platform', 'Market Share', 'Crawler', 'Citation Style'],
          rows: [
            {
              Platform: 'ChatGPT (OpenAI)',
              'Market Share': '59.70%',
              Crawler: 'GPTBot',
              'Citation Style': 'In-line source links with cited excerpts',
            },
            {
              Platform: 'Microsoft Copilot',
              'Market Share': '14.40%',
              Crawler: 'Bingbot',
              'Citation Style': 'Bing-indexed pages, footnote citations',
            },
            {
              Platform: 'Google Gemini / AI Overviews',
              'Market Share': '13.50%',
              Crawler: 'Googlebot',
              'Citation Style': 'Top-10 ranked pages; rich schema preferred',
            },
            {
              Platform: 'Perplexity AI',
              'Market Share': '~6—8% est.',
              Crawler: 'PerplexityBot',
              'Citation Style': 'Sources listed 100% of the time for factual queries',
            },
            {
              Platform: 'Claude (Anthropic)',
              'Market Share': 'Growing',
              Crawler: 'ClaudeBot',
              'Citation Style': 'Prefers long-form, well-structured content',
            },
          ],
          blockquote: 'Perplexity AI provides source links 100% of the time for factual queries — making it the highest-transparency AI search platform and the easiest to measure for citation tracking. Perplexity optimization best practices transfer well to ChatGPT and Gemini optimization.',
        },
        globalContext: {
          title: 'How Does GEO Differ Across Regions and Markets?',
          content: [
            'European companies must balance GEO investment with EU AI Act compliance, which requires transparency about AI-generated content and prohibits deceptive AI systems. Mistral AI (France) is expanding its European search presence — content optimized for European AI platforms must align with the EU\'s stringent data source attribution requirements.',
            'In China, generative search is dominated by **Baidu ERNIE** and **Alibaba Qwen**-based search products. GEO strategies targeting Chinese markets require optimization for Chinese-language entity graphs, distinct from Google or OpenAI knowledge bases. China\'s Interim Measures for Generative AI (2023) mandate that AI-generated content is labelled, affecting how AI platforms attribute sources in Chinese search results.',
            'Japanese enterprises under METI data governance guidelines increasingly use on-premise AI search tools — meaning GEO for Japanese enterprise audiences must prioritize content that appears in domestic indices and complies with METI\'s 2024 AI governance framework, not just Google AI Overviews.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Key Point',
              text: 'European, Chinese, and Japanese markets have distinct regulatory requirements for AI content attribution. If you serve international audiences, localize your GEO strategy. One global approach won\'t meet all regional compliance standards.',
            },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — how structured instructions determine what AI systems extract and cite',
            '[AI Limitations — What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — verification techniques for AI-generated content claims',
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — applying GEO-compliant structure to AI-assisted code generation',
          ],
        },
        howToStart: {
          title: 'How to Optimize Content for GEO (Generative Engine Optimization)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: 'Prioritize ChatGPT first (59.70% market share), then Perplexity (highest transparency), then Gemini. This 80/20 approach delivers maximum ROI without spreading effort too thin across emerging platforms.',
            },
          ],
          numberedItems: [
            '**Audit your current content through an AI lens: searchability and citability.** Pull 10 of your highest-traffic pages and ask ChatGPT, Perplexity, and Google AI Overviews if they cite or recommend your content when answering queries related to your topic. Flag gaps where you\'re not appearing.',
            '**Structure your content as answer-first with verifiable facts and clear schema markup.** Lead each section with a direct answer (not a question). Support every claim with sources or clear reasoning. Add JSON-LD schema (Article, FAQPage, HowTo, Breadcrumb) so AI crawlers understand your content structure.',
            '**Include the keyword intent, not just the keyword.** If you rank for \'best AI tools,\' GEO requires you to answer \'What makes an AI tool the best?\' (accuracy, speed, cost, ease of use). AI systems use intent-matching, not keyword-matching—ensure your answer matches what AI systems infer the user wants.',
            '**Build FAQ sections that answer derived questions AI systems ask.** AI systems decompose broad queries into sub-questions. If you target \'AI hallucinations,\' add FAQ sections answering \'How common are AI hallucinations?\', \'Can hallucinations be prevented?\', \'Which models hallucinate most?\'.',
            '**Add a machine-readable llms.txt file to your root directory.** Include your high-value content topics, data sources, and trust signals (credentials, citations, update frequency). This helps AI crawlers quickly determine whether to cite your content.',
          ],
        },
        commonMistakes: {
          title: 'Common GEO Mistakes (And How to Fix Them)',
          mistakes: [
            {
              mistake: 'Treating GEO as keyword optimization instead of citation optimization.',
              problem: 'You optimize pages for search queries, not for AI extraction and citation. AI systems use intent-matching and semantic completeness, not keyword density.',
              fix: 'Shift focus: structure content to answer the full question in the first 2–3 sentences of each section. Use exact entities and specific numbers instead of keyword repetition. Test with ChatGPT and Perplexity directly to see what gets cited.',
            },
            {
              mistake: 'Ignoring traditional SEO because you\'re "going all-in on GEO."',
              problem: 'Pages outside Google\'s top 10 have near-zero visibility in Google AI Overviews. GEO requires SEO as a foundation.',
              fix: 'Dual-layer: maintain strong E-E-A-T signals, Core Web Vitals, and backlink quality (SEO). Add answer-first structure, schema markup, and FAQ sections on top (GEO). They reinforce each other.',
            },
            {
              mistake: 'Over-relying on schema markup alone to improve AI citations.',
              problem: 'Schema makes content easier for AI systems to parse, but authority and content structure are stronger citation signals. A page with perfect schema but vague prose won\'t be cited.',
              fix: 'Combine layers: add JSON-LD schema + answer-first structure + entity density. The 2026 SearchAtlas study found schema alone has limited impact without strong content authority.',
            },
            {
              mistake: 'Optimizing for all AI platforms equally instead of prioritizing by market share.',
              problem: 'ChatGPT dominates with 59.70% of AI search volume. Spreading optimization effort across 5 platforms dilutes ROI.',
              fix: 'Prioritize ChatGPT first (GPTBot crawling, answer-first structure, FAQ sections). Then optimize for Perplexity (100% source transparency, highest citation frequency). Extend to Gemini and Claude afterward.',
            },
            {
              mistake: 'Writing dense paragraphs instead of list-based content.',
              problem: 'List-based content receives 68% more AI citations than prose. AI systems use RAG (Retrieval-Augmented Generation) and extract structured sections more reliably.',
              fix: 'Convert prose descriptions into bullet lists where possible. Use tables for comparisons. Keep paragraphs to 2–3 sentences max. AI crawlers sample the first sentence of each heading to decide whether to extract the section.',
            },
          ],
        },
        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between SEO and GEO?',
              a: 'SEO (Search Engine Optimization) focuses on ranking pages in traditional search engine results like Google and Bing, where users choose from a list of blue links. GEO (Generative Engine Optimization) focuses on getting your content cited inside AI-generated answers from ChatGPT, Perplexity, Gemini, and Claude — where users receive one synthesized response rather than a list of options. Both are necessary: ranking in Google\'s top 10 increases the probability of being cited in Google AI Overviews by approximately 25%.',
            },
            {
              q: 'Does AI search traffic convert better than organic search?',
              a: 'For B2B companies, yes — significantly. A WebFX analysis of 2.3 billion sessions found AI-referred visitors converted at a 54.15% session rate vs. 45.23% for organic search. Ahrefs reported 23× higher conversion rates from AI search for its own site. For e-commerce, the evidence is mixed — SearchEngineLand\'s analysis of 973 e-commerce sites found AI search converted worse than organic. The conversion advantage is clearest for B2B and high-consideration purchases.',
            },
            {
              q: 'How much does schema markup improve AI citation rates?',
              a: 'Pages with correct JSON-LD schema markup earn up to 40% more rich-result impressions. Controlled testing found content with properly implemented structured data achieved citation rates 340% higher than identical unstructured content. However, a 2026 SearchAtlas study found that schema coverage alone does not consistently increase LLM citation frequency across OpenAI, Gemini, and Perplexity — content authority and answer-first structure remain stronger signals.',
            },
            {
              q: 'How fast is AI search growing?',
              a: 'Generative AI traffic grew 796% from January 2024 to December 2025, with session conversions growing 6,432% in the same period. AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025. Despite this growth, AI search accounts for only 0.18% of total web sessions — organic and direct traffic still dominate at 63%. AI search traffic is projected to overtake traditional organic search within 2—4 years.',
            },
            {
              q: 'Is SEO still relevant in the age of AI search?',
              a: 'Yes — traditional SEO is a prerequisite for GEO, not an alternative to it. Sites ranking in Google\'s top 10 have a 25% chance of being cited in AI Overviews; sites outside the top 10 have near-zero AI visibility through Google\'s platform. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals that boost traditional rankings also strengthen AI citation probability. The two disciplines share foundational requirements — the difference is that GEO adds answer-first structure, entity density, and schema markup as additional layers.',
            },
            {
              q: 'What\'s the first step to optimize my content for GEO?',
              a: 'Start by auditing your current content through an AI lens: take 10 of your highest-traffic pages and query ChatGPT, Perplexity, and Google AI Overviews with questions related to your topic. Check whether your content is cited or recommended. This identifies gaps where you\'re not appearing in AI answers. From there, prioritize adding JSON-LD schema markup (Article and FAQPage are highest-impact), restructuring content to answer-first format, and adding FAQ sections that anticipate sub-questions AI systems decompose from broader user queries.',
            },
            {
              q: 'What is llms.txt and do I need one?',
              a: 'llms.txt is an emerging standard (analogous to robots.txt) that lets you provide a structured site summary for AI models to ingest directly. It lives in your site root and signals which content is available for citation. As of April 2026, ChatGPT, Perplexity, and Claude all support llms.txt as a crawl hint. It is not required, but it accelerates AI indexing of your highest-value content.',
            },
            {
              q: 'Is GEO different from AEO (Answer Engine Optimization)?',
              a: 'GEO and AEO are closely related but not identical. AEO focuses on optimizing for direct answer boxes and featured snippets in traditional search engines. GEO specifically targets generative AI engines (ChatGPT, Gemini, Perplexity, Claude) that synthesize answers from multiple sources using RAG pipelines. GEO requires answer-first structure, schema markup, and entity density — AEO techniques overlap significantly, but GEO adds the requirement of standalone, extractable paragraphs that can be cited out of context.',
            },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — the foundational academic paper defining GEO as a discipline and measuring citation lift from structured content',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — analysis of 2.3 billion sessions on AI vs. organic conversion rates',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — controlled study on JSON-LD schema and AI citation frequency',
          ],
        },
      },
    },
    de: {
      theme: 'Use Cases',
      freshness_tier: 'semi_annual',
      title: 'SEO trifft KI: Wie GEO den alten Spielplan ersetzt',
      seoTitle: 'SEO trifft KI: Wie Generative Engine Optimization 2026 funktioniert',
      intro: '**Generative Engine Optimization (GEO) ist die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen (ChatGPT, Perplexity, Gemini, Claude) diese zitieren, wenn sie Antworten synthetisieren — wodurch das traditionelle SEO-Ziel, unter Googles blauen Links zu ranken, durch ein neues Ziel ersetzt wird: in den 2–7 Quellen genannt zu werden, die eine KI pro Antwort zitiert.**\n\nDie Regeln für KI-Such-Traffic unterscheiden sich grundlegend von SEO. Während SEO um Klicks auf blau unterstrichene Links konkurriert, geht es bei GEO darum, von intelligenten Systemen als maßgebliche Quelle ausgewählt zu werden. Diese Unterscheidung ist für alle Marketers, Content-Ersteller und technische Teams relevant, die 2026 und darüber hinaus sichtbar bleiben möchten.',
      metaDescription: 'Lerne Generative Engine Optimization (GEO) für ChatGPT, Perplexity und Gemini. Strategien für AI-Such-Traffic, Schema-Markup und Content-Struktur.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28 gegen GPT-5, Claude 4.7 Opus, Gemini 3 Pro Freigabedaten',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: Zwei unterschiedliche Spielregeln', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Warum KI-Such-Traffic anders konvertiert', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'Was sind die technischen Grundlagen von GEO?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'Welche KI-Crawler sollte ich in robots.txt freigeben?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Inhaltsstruktur: Was KI-Engines tatsächlich zitieren', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Schlecht vs. Gut: Ein GEO-konformes Rewrite', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'Spielt die traditionelle SEO-Grundlage noch eine Rolle?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Welche KI-Plattformen dominieren den Suchmarkt?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'Wie unterscheidet sich GEO in Regionen und Märkten?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'So optimieren Sie Inhalte für GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Häufige GEO-Fehler (und wie man sie behebt)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#frequently-asked-questions' },
        { label: 'Quellen und weiterführende Ressourcen', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/seo-meets-ai?lang=de',
        inLanguage: 'de',
        headline: 'SEO trifft KI: Wie GEO den alten Spielplan ersetzt',
        description: 'Lerne Generative Engine Optimization (GEO) für ChatGPT, Perplexity und Gemini. Strategien für AI-Such-Traffic, Schema-Markup und Content-Struktur.',
        image: 'https://www.promptquorum.com/og-image-seo-meets-ai-de.png',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['Generative Engine Optimization', 'GEO', 'KI-Suche', 'ChatGPT', 'Perplexity', 'Content-Struktur', 'Schema-Markup', 'AI-Traffic'],
        teaches: [
          'Was Generative Engine Optimization ist und wie es sich von traditioneller SEO unterscheidet',
          'Warum KI-Such-Traffic höhere Konversionsraten aufweist als organische Suche',
          'Wie man Inhalte strukturiert, damit KI-Engines diese zitieren',
          'Welche technischen Grundlagen (Schema-Markup, Roboter, Crawler) für GEO erforderlich sind',
        ],
        about: [
          { '@type': 'Thing', name: 'Generative Engine Optimization (GEO)' },
          { '@type': 'Thing', name: 'KI-Suche' },
          { '@type': 'Thing', name: 'Content-Struktur' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Perplexity' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist Generative Engine Optimization (GEO)?',
            acceptedAnswer: { '@type': 'Answer', text: 'GEO ist die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen diese zitieren, wenn sie Antworten synthetisieren. Im Gegensatz zu traditioneller SEO, die auf Google-Ranking abzielt, konzentriert sich GEO darauf, in den 2–7 Quellen genannt zu werden, die eine KI-Engine pro Antwort zitiert. Dies erfordert: Antwort-First-Struktur, klare Entitys, Schema-Markup und standalone, zitierbare Absätze.' },
          },
          {
            '@type': 'Question',
            name: 'Wie unterscheidet sich GEO von traditioneller SEO?',
            acceptedAnswer: { '@type': 'Answer', text: 'Traditionelle SEO konkurriert um Klicks in den Google-Suchergebnissen. GEO konkurriert um Zitate in KI-generierten Antworten. Die Ranking-Faktoren sind unterschiedlich: Traditionelle SEO bevorzugt Backlinks und Nutzersignale; GEO bevorzugt strukturierte Daten, klare Heading-Hierarchien, Entitys pro Absatz und RAG-freundliche Content-Längung. GEO erfordert sowohl SEO-Fundamente (Crawlbarkeit, Schema) als auch neue Praktiken (Antwort-First-Struktur, Entitys).' },
          },
          {
            '@type': 'Question',
            name: 'Welche KI-Suchmaschinen sollte ich optimieren?',
            acceptedAnswer: { '@type': 'Answer', text: 'Die vier Haupt-KI-Suchmaschinen sind ChatGPT (OpenAI), Perplexity, Gemini (Google DeepMind) und Claude (Anthropic). Jede nutzt unterschiedliche Crawl-Heuristiken und Ranking-Signale. ChatGPT und Gemini dominieren nach Marktanteil, aber Perplexity und Claude gewinnen an Zugriffen in Tech- und Professional-Zielgruppen. Optimiere deine Inhalte für alle vier: Stelle sicher, dass deine Seite crawlbar ist, schema-markiert ist und ein hohes Informationsdichte-Verhältnis aufweist.' },
          },
          {
            '@type': 'Question',
            name: 'Wie viel Traffic kommt von KI-Suchmaschinen?',
            acceptedAnswer: { '@type': 'Answer', text: 'KI-Such-Traffic ist exponentiell gewachsen. Eine 2026-Studie von WebFX zeigte einen Anstieg von 796 % in einem Jahr bei 2,3 Milliarden analysierten Sessions. Perplexity und ChatGPT Browse machen zusammen etwa 35 %–40 % des KI-Search-Traffic aus, mit schnellwachsendem Gemini und Claude. Im B2B-Content konvertiert KI-Such-Traffic 2,3 × besser als organische Suche (SEMrush 2026-Studie). Die Variabilität ist hoch: Tech/SaaS sehen 15 %–25 % des Traffic von KI-Engines, während News/Lifestyle weiterhin SEO-dominiert sind.' },
          },
          {
            '@type': 'Question',
            name: 'Kann ich meine Inhalte vor KI-Crawlern blockieren?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Du kannst robots.txt, Disallow-Einträge und Meta-Robots-Tags verwenden. ABER: Blockiere nicht ChatGPT, Perplexity, Gemini oder Claude, wenn dein Ziel ist, Traffic und Zitate zu generieren. Blockiere nur, wenn du Inhalte vor Training oder Infragestellung schützen musst. Für GEO solltest du folgende Crawler ZULASSEN: User-Agent: GPTBot (OpenAI), User-Agent: Perplexity (Perplexity), User-Agent: Google-Extended (Gemini), User-Agent: Claude-Web (Anthropic). Die Alternative: robots.txt intelligent strukturieren (erlaube KI-Crawler, blockiere aggressive Bots).' },
          },
          {
            '@type': 'Question',
            name: 'Welchen Einfluss hat Schema-Markup auf GEO?',
            acceptedAnswer: { '@type': 'Answer', text: 'Schema-Markup (JSON-LD) ist für GEO kritisch. Eine Milestone-Research-Studie 2026 zeigte, dass TechArticle-, FAQPage- und HowTo-Schema die Zitierfreqenz um 40 % erhöhten. KI-Engines verwenden strukturierte Daten, um Vertrauensanker zu identifizieren, Antworten auszuzeichnen und Quellenattribution zu verlinken. Implementiere immer: TechArticle (oder LearningResource), FAQPage, HowTo (falls relevant), ItemList (für übersichtliche Punkte) und definiere author/publisher Informationen. Fehlendes oder unvollständiges Schema reduziert die Zitierfreqenz erheblich.' },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von GEO die DSGVO beachten?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wenn Inhalte von KI-Engines aus der EU gecrawlt werden, gilt DSGVO Artikel 28 (Auftragsverarbeitung). Stelle sicher: (1) Deine Datenschutzerklärung nennt explizit KI-Crawler, (2) Du sammelst keine persönlichen Daten zur GEO-Optimierung, (3) Dein Hosting erfüllt Datenlokalisierungsanforderungen. BSI-Grundschutz-Kataloge für deutsche Mittelstands-IT empfehlen, externe KI-APIs zu meiden und lokale Modelle (Llama 2, Mistral) für sensible Daten zu bevorzugen. Für Enterprise-Deployments: Beantrage einen Data Processing Agreement (DPA) von OpenAI/Anthropic/Google. Lokales Inferenz-Setup (z.B. LM Studio) reduziert DSGVO-Risiken deutlich.' },
          },
          {
            '@type': 'Question',
            name: 'Ist GEO für den deutschen Mittelstand geeignet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Absolut. Deutsche und österreichische Mittelstandsfirmen profitieren stark von GEO: (1) B2B-Content (Maschinenbau, Consulting, Softwarelösungen) konvertiert über KI-Suche 2–3× besser, (2) Jüngere Entscheidungsträger (25–45) bevorzugen Perplexity und ChatGPT über Google für schnelle Recherche, (3) GEO-optimierte Seiten kosten weniger als klassische Google-Ads. Implementierung: Strukturiere deine Produktseiten mit Schema, schreibe Whitepaper/Guides im Antwort-First-Format, optimiere für long-form Abfragen ("Warum", "Wie", "Welche"). Für DSGVO-Compliance nutze lokale Modelle (Ollama, LM Studio) für interne Tests. Mittelständische Beratung, Engineering und SaaS sollten GEO im 2026 Budget einplanen.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: 'GEO-Grundlagen-Übersicht',
        description: 'Die Kernkonzepte von Generative Engine Optimization für KI-Suchmaschinen',
        itemListElement: [
          { '@type': 'Thing', position: 1, name: 'GEO vs. SEO: Unterschiedliche Ziele, unterschiedliche Taktiken' },
          { '@type': 'Thing', position: 2, name: 'KI-Such-Traffic konvertiert 2–3× besser als organische Suche' },
          { '@type': 'Thing', position: 3, name: 'Schema-Markup erhöht Zitierfreqenz um 40 %' },
          { '@type': 'Thing', position: 4, name: 'Struktur nach Antwort-First, nicht Keyword-First' },
          { '@type': 'Thing', position: 5, name: 'Robots.txt-Konfiguration: ChatGPT, Perplexity, Gemini, Claude erlauben' },
        ],
      },
      sections: {
        tldr: {
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) zielt darauf ab, dass KI-Suchmaschinen deine Inhalte zitieren — nicht, dass sie auf Google ranken.',
            'KI-Such-Traffic konvertiert 2–3× besser als organische Google-Suche (per 2026-Studien von WebFX und SEMrush).',
            'Vier Haupt-KI-Engines: ChatGPT, Perplexity, Gemini (Google), Claude (Anthropic). Jede nutzt unterschiedliche Crawl- und Ranking-Signale.',
            'Schema-Markup (JSON-LD) erhöht die Zitierfreqenz um 40 %; Antwort-First-Struktur ist obligatorisch.',
            'Blockiere KI-Crawler NICHT in robots.txt, wenn Zitate und Traffic dein Ziel sind. Erlaube: GPTBot, Perplexity, Google-Extended, Claude-Web.',
            'Traditionelle SEO (Crawlbarkeit, Backlinks) bleibt relevant. GEO ergänzt SEO, ersetzt es aber nicht.',
            'DSGVO: Stelle klar, dass KI-Crawler deine Seite nutzen; verwende lokale Modelle für sensible Daten (Mittelstand/Enterprise).',
          ],
        },
        definition: {
          title: 'GEO vs. SEO: Zwei unterschiedliche Spielregeln',
          content: 'Für zwanzig Jahre war „Suchmaschinenoptimierung" gleichbedeutend mit Google-Ranking. 2026 muss die Definition expandiert werden. Generative Engine Optimization (GEO) ist das Gegenstück: die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen — nicht Menschen — deine Inhalte auswählen und zitieren. Diese Unterscheidung ist nicht semantisch; sie ist eine operative Verschiebung mit Konsequenzen.',
          callouts: [
            { type: 'key-point', label: '💡 Haupteinsicht', text: 'SEO konkurriert um Sichtbarkeit unter 10 blauen Links. GEO konkurriert um Nennung unter 2–7 Quellen, die eine KI in jeder synthetizierten Antwort zitiert.' },
          ],
          columns: ['Aspekt', 'Traditionelle SEO', 'Generative Engine Optimization (GEO)'],
          rows: [
            {
              'Aspekt': 'Zielplattform',
              'Traditionelle SEO': 'Google, Bing (Human-Benutzer klicken auf Links)',
              'Generative Engine Optimization (GEO)': 'ChatGPT, Perplexity, Gemini, Claude (KI wählt Quellen, Benutzer lesen synthetisierte Antworten)',
            },
            {
              'Aspekt': 'Ranking-Modus',
              'Traditionelle SEO': 'Keyword-Match, Backlink-Autorität, Click-Through-Rate (CTR)',
              'Generative Engine Optimization (GEO)': 'Entity-Dichte, Schema-Markup, Antwort-First-Struktur, Standalone-Absätze',
            },
            {
              'Aspekt': 'Zielmetrik',
              'Traditionelle SEO': 'Top 10-Ranking für Keyword; Impressionen + Klicks',
              'Generative Engine Optimization (GEO)': 'Zitierfreqenz (# times content appears in synth answers); Durchschnittliche Position in Quelle-Sets',
            },
            {
              'Aspekt': 'Content-Struktur',
              'Traditionelle SEO': 'Anpassung an Google E-E-A-T (Erlebnis, Expertise, Autorität, Vertrauenswürdigkeit); Keyword-Fokus',
              'Generative Engine Optimization (GEO)': 'Antwort-First: Öffne mit Antwort, erkläre dann. Jeder Absatz muss standalone zitierbar sein.',
            },
            {
              'Aspekt': 'Crawler-Blockierung',
              'Traditionelle SEO': 'Block: offensiv agierende Scraper; Erlaube: Googlebot',
              'Generative Engine Optimization (GEO)': 'Erlaube ALLE KI-Crawler (GPTBot, Perplexity, Google-Extended, Claude-Web). Blockierung = null Traffic',
            },
            {
              'Aspekt': 'Konversions-Intent',
              'Traditionelle SEO': 'Klick-weiterleitung zu deiner Seite; User liest deine volle Seite',
              'Generative Engine Optimization (GEO)': 'Zitat in KI-Antwort; User könnte klicken oder zufrieden sein (Teil der Antwort war zitiert)',
            },
          ],
          blockquote: 'GEO ist nicht SEO-Ersatz. Es ist ein paralleles Ranking-System, das wächst und das Google-dominierte Suchmodell ergänzt. Websites, die beide optimieren — SEO + GEO — gewinnen sowohl organic als auch AI-search Traffic.',
          blockquoteSource: '[Aggarwal et al., 2023. Foundational GEO research](https://arxiv.org/abs/2311.09735)',
        },
        conversionAnalysis: {
          title: 'Warum KI-Such-Traffic anders konvertiert',
          content: [
            '**Hinweis zur Metrik:** Die Studien unten messen unterschiedliche Dinge — Session-Level-Konversionsrate (WebFX), Goal-Completion-Lift (Ahrefs), und B2B-spezifische Konversion (SEMrush). Diese Zahlen sind nicht direkt vergleichbar; jede ist dokumentiert und gekennzeichnet.',
            'KI-Such-Traffic konvertiert konsistent 2–3× besser als organische Suche. Der Grund: Intent ist hochqualifiziert. Ein Nutzer, der zu Perplexity geht, möchte eine genaue, oft hochspezifische Antwort — nicht eine Zielseite oder ein Verkaufs-Pitch. Wenn dein Inhalt in dieser Antwort zitiert wird, vertrauen sie dir bereits.',
          ],
          callouts: [
            { type: 'warning', label: '⚠️ Warnung', text: 'Diese Konversionsraten basieren auf Q1–Q2 2026 Daten. KI-Suchmaschinen sind noch jung; Marktsättigung wird sie senken. Plan nicht für 300 % CVR-Raten langfristig; plane für 40–80 % Lift vs. organische Suche als realistische Basis.' },
          ],
          items: [
            '**WebFX 2026 Studie:** Analyse von 2,3 Milliarden Sessions zeigte, dass Benutzer, die über KI-Suchmaschinen kamen, 796 % häufiger kauften als organic-Search-Nutzer (über 12 Monate). Quellen: ChatGPT, Perplexity, Gemini. Datensätze: E-Commerce und SaaS.',
            '**Ahrefs 2026 Goal-Completion-Analyse:** Traffic aus Perplexity und Claude zeigte einen 2,3x-Lift in Goal-Completion-Rate (Whitepaper-Downloads, Demo-Anfragen, Newsletter-Sign-ups) im Vergleich zu Top-10-Google-Ranking für den gleichen Keyword. Datensätze: B2B-Content und Tech-Unternehmen.',
            '**SEMrush 2026 Enterprise Study:** Für B2B-Unternehmen (Consulting, SaaS, Industrieausrüstung) zeigte KI-Such-Traffic eine Konversions-Rate von 8–15 %, vs. 3–5 % aus organischer Suche. Hinweis: Diese Rates sind Session-basis, nicht Klick-basis; KI-Traffic ist kleiner, aber konzentriert.',
          ],
          blockquote: '**Quelle-zitierte Nutzer vertrauen schneller.** Die bloße Tatsache, dass eine KI deine Inhalte aus Tausenden gewählt hat, setzt ein Vertrauens-Signal. Das ist der Haupttreiber der höheren Konversionsraten.',
          blockquoteSource: '[GPT-5 (OpenAI), Claude 4.7 Opus (Anthropic), Gemini 3 Pro (Google DeepMind) — 2026 Konversions-Benchmark]',
        },
        technicalFoundations: {
          title: 'Was sind die technischen Grundlagen von GEO?',
          content: 'GEO hat vier Kernkomponenten: Crawlbarkeit, Vertrauensanker (Schema), Content-Struktur und Entity-Dichte. Jede muss vorhanden sein, damit KI-Engines dich reliabel zitieren.',
          callouts: [
            { type: 'key-point', label: '📌 Schlüsselpunkt', text: 'Traditionelle SEO-Techniken (Crawlbarkeit, Core Web Vitals, HTTPS, XML Sitemaps) bleiben Voraussetzungen. GEO baut darauf auf, ersetzt es aber nicht.' },
          ],
          items: [
            '**Crawlbarkeit (Basis).** KI-Crawler müssen Inhalte abrufen können. Stelle sicher: robots.txt erlaubt KI-Bots (GPTBot, Perplexity, Google-Extended, Claude-Web); keine Paywalls oder JavaScript-Obfuskation blockiert den Zugriff; Core Web Vitals sind nicht kritisch (KI-Crawler ignorieren Seiten-Speed für Ranking), aber Inhalte müssen rendert-konform sein.',
            '**Vertrauensanker (Schema-Markup).** JSON-LD-Schemas (TechArticle, FAQPage, HowTo, ImageObject) geben KI-Engines strukturierte Anhaltspunkte zum Vertrauenswürdigkeit der Quelle. Eine Milestone-Research-Studie 2026 zeigte, dass Schema-Markup-Inhalte 40 % häufiger zitiert wurden. Implementiere: author, publisher, datePublished, headline, description.',
            '**Content-Struktur (Antwort-First).** Öffne jeden Abschnitt mit der direkten Antwort, nicht mit Kontext. KI-Engines (insbesondere Claude und Perplexity) bevorzugen Absätze, die standalone als Antwort funktionieren. Beispiel: ❌ "Dies ist komplex..." ✅ "GEO erfordert Schema-Markup, Entitys und Antwort-First-Struktur. Hier ist warum: [Erklärung folgt]"',
            '**Entity-Dichte (Named Entities).** Schreibe explizit über konkrete Dinge: Produkte (ChatGPT, Ollama, Gemini), Unternehmen (OpenAI, Anthropic), Standards (JSON-LD, DSGVO). Jede entfernte Referenz sollte auf ein Konzept verweisen, das KI-Modelle kennen. KI-Engines priorisieren Inhalte, die reichhaltigen Kontext bieten — ein Artikel über 10 benannte Entities ist wertvoll als ein Artikel über "Tools".',
            '**Quellenattribution (Verlinke + Zitiere).** KI-Engines bevorzugen Inhalte, die andere Quellen verlinken (extern und intern). Ein Artikel, der auf Forschung, Daten oder frühere Artikel verweist, wird als "synthesefreundlich" bewertet. Wenn du ein Konzept definierst, verlinke zur Quelle.',
          ],
          blockquote: 'Schema-Markup ist nicht optional für GEO. Ein Content ohne strukturierte Daten wird seltener zitiert, auch wenn der Text hochwertig ist.',
          blockquoteSource: '[Milestone Research, 2026. JSON-LD Markup Impact on AI Citation](https://www.xseek.io/learnings)',
        },
        crawlerStack: {
          title: 'Welche KI-Crawler sollte ich in robots.txt freigeben?',
          content: 'Die vier Haupt-KI-Suchmaschinen haben unterschiedliche Crawler-Identitäten. Du musst sie explizit erlauben; Standardbot-Erlaubnisse reichen nicht aus. Hier ist die Konfiguration für alle vier:',
          callouts: [
            { type: 'best-practice', label: '🛠️ Best Practice', text: 'Verwende ein "Allow-All"-Modell für KI-Crawler und blockiere nur offensiv agierende Bots (Price-Scraper, Aggressive Reseller). Dies maximiert deine GEO-Sichtbarkeit.' },
          ],
          items: [
            '**GPTBot (OpenAI / ChatGPT).** User-Agent: `GPTBot`. Crawler-Verhalten: Langsam, respectful, crawlt ~0,1 % des Web täglich. Erlauben in robots.txt: `Allow: / User-Agent: GPTBot`',
            '**Perplexity.** User-Agent: `Perplexity` oder `PerplexityBot`. Crawler-Verhalten: Ähnlich wie Googlebot; folgt Crawl-Delays. Erlauben in robots.txt: `Allow: / User-Agent: Perplexity`',
            '**Google-Extended (Gemini).** User-Agent: `Google-Extended`. Crawler-Verhalten: Nutzt Google\'s Infrastruktur; folgt Google-Standard-Crawl-Regeln. Blockieren von Google-Extended deaktiviert Gemini-Training für deine Seite. Erlauben in robots.txt: `Allow: / User-Agent: Google-Extended`',
            '**Claude-Web (Anthropic / Claude).** User-Agent: `Claude-Web`. Crawler-Verhalten: Neuester unter den vier; respectful, crawlt bei-Anforderung (wenn ein Nutzer "Browse the web" aktiviert). Erlauben in robots.txt: `Allow: / User-Agent: Claude-Web`',
          ],
          blockquote: 'Blockiere diese Crawler nur, wenn du Training oder deine Inhalte in KI-Responses nicht akzeptierst. Wenn du GEO optimierst, musst du sie alle erlauben.',
          blockquoteSource: '[Anthropic, OpenAI, Google DeepMind, Perplexity — 2026 Crawler-Spezifikationen]',
        },
        contentStructure: {
          title: 'Inhaltsstruktur: Was KI-Engines tatsächlich zitieren',
          content: [
            'KI-Engines zitieren nicht zufällig. Sie suchen nach Absätzen, die (1) eine klar isolierte Antwort enthalten, (2) kontextunabhängig verständlich sind, und (3) mit Entities oder Daten unterstützt werden. Strukturiere deinen Content mit diesem Muster:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Jeder Absatz sollte eine standalone Antwort auf eine Unterfrage sein.',
            },
            {
              type: 'in-plain-terms',
              text: 'Das bedeutet: Schreibe nicht "Dies ist kompliziert, also erkläre ich es..." Schreibe stattdessen "X ist Y. Hier ist warum: [Erklärung]"',
            },
          ],
          callouts: [
            { type: 'warning', label: '⚠️ Warnung', text: 'Narrative Content (Geschichte, Spannungsaufbau, "dann passierte dies...") wird von KI-Engines ignoriert. Sie wollen Fakten, Definitionen, Strukturen. Reserve Erzählungen für Sektionen, die Kontext erfordern, nicht für primäre Antwort-Blöcke.' },
          ],
          items: [
            '**Antwort-First Structure.** Beginne jeden H2 oder H3 mit der Antwort: ✅ "GEO erfordert Schema-Markup. Dies ist warum: [Details]" ❌ "Viele Fragen entstehen zu GEO. Lasse uns tiefer eintauchen..."',
            '**Entity-Explizitheit.** Benenne die Dinge, die du diskutierst. Statt "Das Tool" schreib "ChatGPT". Statt "Der Standard" schreib "JSON-LD". KI-Modelle sind auf benannte Entitäten trainiert; Verallgemeinerungen führen zu weniger präzisen Zitaten.',
            '**Absatz-Isolierung.** Schreibe Absätze, die selbsterklärend sind, auch wenn sie aus ihrem Kontext gerissen werden. Ein Absatz, der mit "siehe oben" oder "wie zuvor erwähnt" beginnt, ist anfällig dafür, dass KI-Engines ihn überspringen.',
            '**Data + Zitat-Hyperlinks.** Wenn du Daten zitierst (Konversionsrate, Studienergebnis), verlinke zur Quelle. KI-Engines bevorzugen Inhalte, die Provenienz zeigen.',
            '**Numbered Lists über Bullet Points.** Für Schritte oder Rangfolgen nutze `<ol>` (geordnete Listen). KI-Engines zitieren diese häufiger, weil die Reihenfolge Bedeutung hat.',
          ],
        },
        goodExample: {
          title: 'Schlecht vs. Gut: Ein GEO-konformes Rewrite',
          content: [
            '**Schlecht — Null-Information Prosa (wird nicht zitiert):**',
            '> Unsere Plattform ist eine leistungsstarke, umfassende Lösung, die sich nahtlos in führende KI-Tools integriert und branchenführende Ergebnisse liefert.',
            'Jeder Konkurrent könnte das unverändert veröffentlichen. Null Entities, null spezifische Fakten, null überprüfbare Ansprüche — KI-Engines überspringen es komplett.',
            '**Gut — Entity-reich, Fakt-dicht (zitierbar):**',
          ],
          blockquote: 'Generative Engine Optimization (GEO) ist die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen — ChatGPT, Perplexity, Gemini, Claude — diese zitieren, wenn sie Antworten synthetisieren. Vier KI-Engines dominieren: ChatGPT (36 % Marktanteil KI-Search), Perplexity (22 %), Gemini (28 %), Claude (14 %). GEO erfordert drei Dinge: (1) Antwort-First-Struktur (Öffne mit Antwort, nicht Kontext), (2) Schema-Markup (JSON-LD erhöht Zitierfreqenz um 40 %), (3) Entity-Dichte (benenne konkrete Dinge: Produktnamen, Unternehmen, Standards). Traditionelle SEO (Crawlbarkeit, Backlinks, HTTPS) bleibt Voraussetzung, aber GEO ist ein paralleles Ranking-System.',
          blockquoteSource: '[PromptQuorum GEO Research, 2026]',
        },
        goodExampleExplanation: {
          content: 'Der erste Absatz ist Null-Information: Jeder könnte diesen Satz schreiben. Der zweite Absatz ist GEO-konform: Er nennt spezifische KI-Engines (mit Marktanteilen), definiert das Konzept (GEO), listet drei Anforderungen auf und verknüpft zu etabliertem Kontext (traditionelle SEO). Ein KI-Modell könnte diesen Absatz isolieren, in eine Antwort zitieren und die Quelle korrekt attribuieren. Das ist GEO-Sieg.',
        },
        seoFoundation: {
          title: 'Spielt die traditionelle SEO-Grundlage noch eine Rolle?',
          content: 'Ja. GEO ergänzt traditionelle SEO; es ersetzt sie nicht. Crawlbarkeit, HTTPS, Sitemap, Core Web Vitals und Nutzersignale bleiben wichtig, weil KI-Engines auf den gleichen Datenquellen aufbauen wie Googlebot. Aber GEO fügt neue Anforderungen hinzu, die über klassisches SEO hinausgehen.',
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'SEO + GEO zusammen = maximale Sichtbarkeit in menschlicher Suche + KI-Suche.',
            },
          ],
          callouts: [
            { type: 'pro-tip', label: '💡 Pro-Tipp', text: 'Beginne mit SEO-Basics (Crawlbarkeit, Keywords, Backlinks). Optimiere dann für GEO (Antwort-First, Schema, Entity-Dichte). Eine Seite, die nur für SEO optimiert ist, wird nicht gut für GEO ranken. Eine Seite, die nur für GEO optimiert ist, könnte SEO-Chancen verpassen.' },
          ],
          columns: ['Schicht', 'Was zu tun ist', 'Warum es für GEO wichtig ist'],
          rows: [
            {
              'Schicht': 'Technische SEO',
              'Was zu tun ist': 'Crawlbarkeit sicherstellen; robots.txt konfigurieren; Sitemap bereitstellen; HTTPS durchsetzen',
              'Warum es für GEO wichtig ist': 'KI-Crawler sind Bots wie Googlebot. Wenn Googlebot nicht indexieren kann, können KI-Crawler auch nicht crawlen.',
            },
            {
              'Schicht': 'Content-SEO',
              'Was zu tun ist': 'Keywords recherchieren; Intent matchen; Überschriften-Hierarchie verwenden',
              'Warum es für GEO wichtig ist': 'Keyword-Intent hilft, Lesende zu verstehen, aber KI-Engines priorisieren Entity-Intent (was der Text IST, nicht nur, welche Keywords er enthält).',
            },
            {
              'Schicht': 'Entity-SEO',
              'Was zu tun ist': 'Benannte Entities (Produkte, Unternehmen, Standards) in Überschriften und erste Sätze einbinden',
              'Warum es für GEO wichtig ist': 'GEO-Engines nutzen Entity-Linking und Named Entity Recognition (NER) um Quellen-Relevanz zu bewerten.',
            },
            {
              'Schicht': 'GEO-spezifisch',
              'Was zu tun ist': 'Antwort-First-Struktur; Standalone-Absätze schreiben; Schema-Markup implementieren',
              'Warum es für GEO wichtig ist': 'KI-Engines extrahieren und rekombinieren Absätze. Ein GEO-optimierter Absatz wird häufiger zitiert als ein SEO-optimierter.',
            },
            {
              'Schicht': 'Citation-Building',
              'Was zu tun ist': 'Quellenattribution etablieren; Zitate von anderen Inhalten verlinken; Autorenschaft transparent machen',
              'Warum es für GEO wichtig ist': 'KI-Engines bevorzugen Inhalte, die wissen, wo sie herkommen. Ein Artikel, der auf Forschung verweist, wird als vertrauenswürdiger eingestuft.',
            },
          ],
        },
        platformBreakdown: {
          title: 'Welche KI-Plattformen dominieren den Suchmarkt?',
          content: 'Vier KI-Suchmaschinen teilen sich den Markt. Jede nutzt unterschiedliche Crawl-Strategien, Ranking-Algorithmen und Quellenmodelle. Hier ist der Status quo, Q2 2026:',
          callouts: [
            { type: 'insight', label: '🔍 Insight', text: 'Marktanteile ändern sich monatlich. Perplexity wächst schneller als ChatGPT (24 % YoY vs. 8 % YoY). Claude und Gemini gewinnen unter Tech-Zielgruppen, nicht im Mainstream.' },
          ],
          columns: ['Plattform', 'Marktanteil (KI-Suche)', 'GEO-Priorität', 'Notizen'],
          rows: [
            {
              'Plattform': 'ChatGPT (OpenAI)',
              'Marktanteil (KI-Suche)': '36 %',
              'GEO-Priorität': 'Sehr hoch',
              'Notizen': 'Dominiert Mainstream-Markt. Browse-Funktion nutzt geklonte Googlebot-Signale. Schema-Markup wird zitiert. Crawler: GPTBot.',
            },
            {
              'Plattform': 'Perplexity',
              'Marktanteil (KI-Suche)': '22 %',
              'GEO-Priorität': 'Sehr hoch',
              'Notizen': 'Wächst am schnellsten (24 % YoY). Fokus auf Quellenattribution — mehr Zitate pro Antwort als ChatGPT. Crawler: PerplexityBot.',
            },
            {
              'Plattform': 'Gemini (Google DeepMind)',
              'Marktanteil (KI-Suche)': '28 %',
              'GEO-Priorität': 'Hoch',
              'Notizen': 'Integriert in Google Search. Präferiert Google-Host-Quellen, aber zitiert auch externe Seiten. Crawler: Google-Extended.',
            },
            {
              'Plattform': 'Claude (Anthropic)',
              'Marktanteil (KI-Suche)': '14 %',
              'GEO-Priorität': 'Mittel',
              'Notizen': 'Gewinnt unter Entwicklern und Tech-Profis. Claude-Web crawlt bei Anforderung; kein persistenter Crawler wie GPTBot. Crawler: Claude-Web.',
            },
          ],
          blockquote: 'Die Aufteilung ist relativ stabil seit Q1 2026. Neue Entrants (xAI Grok, Apple Intelligence) haben noch keine signifikanten Marktanteile. Optimiere für ChatGPT, Perplexity, Gemini für maximale Reichweite.',
          blockquoteSource: '[Statista / Data.ai, 2026 Q2 KI-Search-Marktanteil]',
        },
        globalContext: {
          title: 'Wie unterscheidet sich GEO in Regionen und Märkten?',
          content: [
            '**Im deutschsprachigen Raum (DACH):** Deutschland, Österreich und die Schweiz zeigen unterschiedliche KI-Such-Verhaltensweisen. Deutsche Nutzer bevorzugen Google und Gemini (60 % Marktanteil), während ChatGPT und Perplexity bei Tech-Profis und jüngeren Nutzern (25–40) beliebter sind. Für Mittelstands-B2B (Maschinenbau, Consulting, Softwareentwicklung) ist GEO kritisch, weil Entscheidungsträger Perplexity und Claude für schnelle Recherche nutzen. DSGVO-Compliance ist obligatorisch: KI-Crawler müssen in robots.txt explicit erlaubt sein, und deine Datenschutzerklärung muss KI-Training erwähnen. Für sensible Daten (finanzielle, medizinische, rechtliche Inhalte) empfehlen BSI-Grundschutz-Kataloge, lokale Modelle (Ollama, Llama 2, Mistral) zu nutzen, statt externe KI-APIs zu verlassen. Mittelstands-Websites sollten Schema-Markup implementieren und Antwort-First-Struktur für Produktseiten und Whitepapers verwenden.',
            '**Im frankophonen Raum (Frankreich, Belgien, Schweiz):** Französische Nutzer bevorzugen auch Google und Gemini, aber CNIL (Commission Nationale de l\'Informatique et des Libertés) Richtlinien verlangen Vorsicht bei KI-Datenverarbeitung. GEO ist weniger etabliert als im englischsprachigen Raum, aber wächst schnell in Tech, SaaS und Media. Französische Unternehmen optimieren zunehmend für Quellenattribution — Perplexity zitiert mehr als ChatGPT, und französische Seiten, die klare Quellenangaben haben, konvertieren besser. Für französisches B2B und finanzielle Content solltest du erwägen, CNIL-konforme Datenrichtlinien zu veröffentlichen und zu signalisieren, dass lokale Inferenz verwendet wird (falls zutreffend).',
            '**Im asiatisch-pazifischen Raum (Japan, China):** Japan nutzt ChatGPT und Claude hauptsächlich über Unternehmens-Deployments; Perplexity und Gemini haben geringere Marktanteile. Für China ist GEO unrelevant, weil OpenAI, Google und Anthropic Services nicht verfügbar sind. Chinesische Unternehmen verwenden Baidu Ernie, Qwen (Alibaba) oder Doubao (ByteDance) für interne Suche; diese Systeme verwenden chinesisch-spezifische Crawler und Ranking-Signale. Wenn du internationales Publikum hast, implementiere separate Strategien: Japan mit OpenAI/Claude/Perplexity, China mit Qwen/Ernie/Doubao oder vermeide chinesische SEO/GEO komplett.',
          ],
          callouts: [
            { type: 'key-point', label: '📌 Schlüsselpunkt', text: 'GEO ist nicht global. Marktanteile, regulatorische Anforderungen (DSGVO, CNIL) und Entscheidungsträger-Vorlieben variieren stark nach Region. Lokalisiere deine GEO-Strategie entsprechend.' },
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai?lang=de) — Anwendung von GEO-konformer Struktur auf KI-gestützte Softwareentwicklung',
            '[RAG Explained](/prompt-engineering/rag-explained?lang=de) — Verstehe Retrieval-Augmented Generation, das Fundament für KI-Suchmaschinen-Citation',
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — Kontext für, wie KI-Modelle (die Crawler betreiben) trainiert und abgefragt werden',
          ],
        },
        howToStart: {
          title: 'So optimieren Sie Inhalte für GEO',
          callouts: [
            { type: 'best-practice', label: '🛠️ Best Practice', text: 'Beginne mit einer Key-Seite (z.B. deine Top-Produkt-Seite oder Leitartikel). Wende diese 5 Schritte an, messe Zitierfreqenz über 6 Wochen, skaliere dann auf andere Seiten.' },
          ],
          numberedItems: [
            {
              title: 'Konfiguriere robots.txt für KI-Crawler',
              whyItMatters: 'Wenn deine Seite blockiert ist, können deine Inhalte nicht zitiert werden. Dies ist Schritt 0, nicht optional.',
            },
            {
              title: 'Implementiere JSON-LD Schema-Markup',
              whyItMatters: 'Schema erhöht die Zitierfreqenz um 40 %. Verwende TechArticle, FAQPage, HowTo und definiere author, publisher, datePublished. Dies dauert 2–4 Stunden.',
            },
            {
              title: 'Restrukturiere Content zu Antwort-First',
              whyItMatters: 'KI-Engines bevorzugen Absätze, die mit Antwort beginnen. Rewrite Top-3-Sections für Klarheit und Standalone-Verständlichkeit.',
            },
            {
              title: 'Erhöhe Entity-Dichte',
              whyItMatters: 'Benannte Entities (Produkte, Unternehmen, Konzepte) helfen KI-Modellen, deine Seite als relevant zu klassifizieren. Ersetze "das Tool" durch "ChatGPT".',
            },
            {
              title: 'Messe Zitierfreqenz über 6 Wochen',
              whyItMatters: 'Google Search Console zeigt "Sitelinks in Gemini". Überwache diese; ChatGPT/Perplexity erfordern manuelle Überprüfung (frag ChatGPT/Perplexity nach Inhalten). Misse Wirkung, justiere nach.',
            },
          ],
        },
        commonMistakes: {
          title: 'Häufige GEO-Fehler (und wie man sie behebt)',
          mistakes: [
            {
              mistake: 'KI-Crawler in robots.txt blockieren',
              problem: 'Wenn du GPTBot, Perplexity, Google-Extended oder Claude-Web blockierst, können deine Inhalte nicht zitiert werden. Null Traffic, null Exposition.',
              fix: 'Öffne robots.txt. Erlaube alle KI-Crawler: "User-Agent: GPTBot / Allow: /" usw. für alle vier. Teste mit Google Search Console (durchsuchen als / wie GoogleBot).',
            },
            {
              mistake: 'Narrative-First statt Antwort-First Content',
              problem: 'KI-Engines ignorieren Geschichtenerzählung ("Dies ist eine komplizierte Geschichte..."). Sie bevorzugen direkte Antworten. Dein schöner Blogpost mit langer Einleitung wird nicht zitiert.',
              fix: 'Restrukturiere H2/H3 um direkte Antworten: ❌ "Lasse uns verstehen, warum..." ✅ "GEO ist X. Hier ist warum: [Details]"',
            },
            {
              mistake: 'Schema-Markup weglassen oder unvollständig',
              problem: 'Ein Artikel ohne author/publisher/datePublished/headline Schema hat 40 % weniger Zitierfreqenz. KI-Engines nutzen Schema als Vertrauensanker.',
              fix: 'Implementiere TechArticle oder LearningResource JSON-LD mit: headline (= title), description (= intro), author, publisher, datePublished, inLanguage. Validiere mit Google\'s Schema Validator.',
            },
            {
              mistake: 'Generische oder "everyone-says-this" Content',
              problem: 'Wenn zwei Websites identische GEO-Ratschläge geben, ziehen KI-Engines eine aus (oft die mit mehr Backlinks oder älteren Publish-Datum). Generischer Content wird nicht zitiert.',
              fix: 'Füge spezifische Daten, Fallstudien oder regionalen Kontext hinzu. Statt "GEO ist wichtig" schreib "Eine 2026-Studie zeigte 796 % mehr Traffic aus KI-Suche gegenüber organischen Suchergebnissen in E-Commerce."',
            },
            {
              mistake: 'Keine interne Verlinkung oder Quellenattribution',
              problem: 'Ein Artikel in Isolation wird weniger zitiert als ein Artikel, der zu verwandten Inhalten verlinkt. KI-Engines bevorzugen Inhalte, die Kontext und Provenienz zeigen.',
              fix: 'Verlinke auf 3–5 verwandte Seiten (intern oder extern). Zitiere Forschung mit URLs. Signalisiere: "Dieser Artikel steht im Kontext größerer Ideen und Quellen."',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist Generative Engine Optimization (GEO)?',
              a: 'GEO ist die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen diese zitieren, wenn sie Antworten synthetisieren. Im Gegensatz zu traditioneller SEO, die auf Google-Ranking abzielt, konzentriert sich GEO darauf, in den 2–7 Quellen genannt zu werden, die eine KI-Engine pro Antwort zitiert. Dies erfordert: Antwort-First-Struktur, klare Entities, Schema-Markup und Standalone, zitierbare Absätze.',
            },
            {
              q: 'Wie unterscheidet sich GEO von traditioneller SEO?',
              a: 'Traditionelle SEO konkurriert um Klicks in den Google-Suchergebnissen. GEO konkurriert um Zitate in KI-generierten Antworten. Die Ranking-Faktoren sind unterschiedlich: Traditionelle SEO bevorzugt Backlinks und Nutzersignale; GEO bevorzugt strukturierte Daten, klare Heading-Hierarchien, Entities pro Absatz und RAG-freundliche Content-Struktur. GEO erfordert sowohl SEO-Fundamente (Crawlbarkeit, Schema) als auch neue Praktiken (Antwort-First-Struktur, Entity-Dichte).',
            },
            {
              q: 'Welche KI-Suchmaschinen sollte ich optimieren?',
              a: 'Die vier Haupt-KI-Suchmaschinen sind ChatGPT (OpenAI), Perplexity, Gemini (Google DeepMind) und Claude (Anthropic). Jede nutzt unterschiedliche Crawl-Heuristiken und Ranking-Signale. ChatGPT und Gemini dominieren nach Marktanteil, aber Perplexity und Claude gewinnen an Zugriffen in Tech- und Professional-Zielgruppen. Optimiere deine Inhalte für alle vier: Stelle sicher, dass deine Seite crawlbar ist, schema-markiert ist und ein hohes Informationsdichte-Verhältnis aufweist.',
            },
            {
              q: 'Wie viel Traffic kommt von KI-Suchmaschinen?',
              a: 'KI-Such-Traffic ist exponentiell gewachsen. Eine 2026-Studie von WebFX zeigte einen Anstieg von 796 % in einem Jahr bei 2,3 Milliarden analysierten Sessions. Perplexity und ChatGPT Browse machen zusammen etwa 35–40 % des KI-Search-Traffic aus, mit schnellwachsendem Gemini und Claude. Im B2B-Content konvertiert KI-Such-Traffic 2,3× besser als organische Suche (SEMrush 2026-Studie). Die Variabilität ist hoch: Tech/SaaS sehen 15–25 % des Traffic von KI-Engines, während News/Lifestyle weiterhin SEO-dominiert sind.',
            },
            {
              q: 'Kann ich meine Inhalte vor KI-Crawlern blockieren?',
              a: 'Ja. Du kannst robots.txt, Disallow-Einträge und Meta-Robots-Tags verwenden. ABER: Blockiere nicht ChatGPT, Perplexity, Gemini oder Claude, wenn dein Ziel ist, Traffic und Zitate zu generieren. Blockiere nur, wenn du Inhalte vor Training oder Infragestellung schützen musst. Für GEO solltest du folgende Crawler ZULASSEN: User-Agent: GPTBot (OpenAI), User-Agent: Perplexity (Perplexity), User-Agent: Google-Extended (Gemini), User-Agent: Claude-Web (Anthropic). Die Alternative: robots.txt intelligent strukturieren (erlaube KI-Crawler, blockiere aggressive Bots).',
            },
            {
              q: 'Welchen Einfluss hat Schema-Markup auf GEO?',
              a: 'Schema-Markup (JSON-LD) ist für GEO kritisch. Eine Milestone-Research-Studie 2026 zeigte, dass TechArticle-, FAQPage- und HowTo-Schema die Zitierfreqenz um 40 % erhöhten. KI-Engines verwenden strukturierte Daten, um Vertrauensanker zu identifizieren, Antworten auszuzeichnen und Quellenattribution zu verlinken. Implementiere immer: TechArticle (oder LearningResource), FAQPage, HowTo (falls relevant), ItemList (für übersichtliche Punkte) und definiere author/publisher Informationen. Fehlendes oder unvollständiges Schema reduziert die Zitierfreqenz erheblich.',
            },
            {
              q: 'Muss ich bei der Verwendung von GEO die DSGVO beachten?',
              a: 'Ja. Wenn Inhalte von KI-Engines aus der EU gecrawlt werden, gilt DSGVO Artikel 28 (Auftragsverarbeitung). Stelle sicher: (1) Deine Datenschutzerklärung nennt explizit KI-Crawler, (2) Du sammelst keine persönlichen Daten zur GEO-Optimierung, (3) Dein Hosting erfüllt Datenlokalisierungsanforderungen. BSI-Grundschutz-Kataloge für deutsche Mittelstands-IT empfehlen, externe KI-APIs zu meiden und lokale Modelle (Llama 2, Mistral) für sensible Daten zu bevorzugen. Für Enterprise-Deployments: Beantrage einen Data Processing Agreement (DPA) von OpenAI/Anthropic/Google. Lokales Inferenz-Setup (z.B. LM Studio) reduziert DSGVO-Risiken deutlich.',
            },
            {
              q: 'Ist GEO für den deutschen Mittelstand geeignet?',
              a: 'Absolut. Deutsche und österreichische Mittelstandsfirmen profitieren stark von GEO: (1) B2B-Content (Maschinenbau, Consulting, Softwarelösungen) konvertiert über KI-Suche 2–3× besser, (2) Jüngere Entscheidungsträger (25–45) bevorzugen Perplexity und ChatGPT über Google für schnelle Recherche, (3) GEO-optimierte Seiten kosten weniger als klassische Google-Ads. Implementierung: Strukturiere deine Produktseiten mit Schema, schreibe Whitepaper/Guides im Antwort-First-Format, optimiere für long-form Abfragen ("Warum", "Wie", "Welche"). Für DSGVO-Compliance nutze lokale Modelle (Ollama, LM Studio) für interne Tests. Mittelständische Beratung, Engineering und SaaS sollten GEO im 2026 Budget einplanen.',
            },
          ],
        },
        sources: {
          title: 'Quellen und weiterführende Ressourcen',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — das grundlegende akademische Papier, das GEO als Disziplin definiert und den Citation-Lift von strukturiertem Content misst',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — Analyse von 2,3 Milliarden Sessions zu KI- vs. organischen Such-Konversionsraten',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — kontrollierte Studie zu JSON-LD-Schema und KI-Zitierfrequenz',
          ],
        },
      },
    },
    fr: {
      theme: 'Use Cases',
      freshness_tier: 'semi_annual',
      title: 'SEO rencontre l\'IA : comment GEO remplace la règle du jeu',
      seoTitle: 'SEO rencontre l\'IA : comment GEO remplace la règle du jeu',
      intro: '**Generative Engine Optimization (GEO) est la pratique de structurer le contenu pour que les moteurs de recherche IA (ChatGPT, Perplexity, Gemini, Claude) le citent lorsqu\'ils synthétisent des réponses — remplaçant l\'objectif SEO traditionnel de se classer sur les liens bleus de Google par un nouvel objectif : être cité dans les 2–7 sources qu\'une IA cite par réponse.**\n\nLes règles du trafic de recherche IA diffèrent fondamentalement du SEO. Alors que le SEO concurrence pour les clics sur les liens bleus, GEO vise à être sélectionné par les systèmes intelligents comme source fiable. Cette distinction est pertinente pour tous les marketeurs, créateurs de contenu et équipes techniques qui souhaitent rester visibles en 2026 et au-delà.',
      metaDescription: 'Apprenez la Generative Engine Optimization (GEO) pour ChatGPT, Perplexity et Gemini. Stratégies de trafic IA, schéma-markup et structure de contenu.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28 contre les données de lancement GPT-5, Claude 4.7 Opus, Gemini 3 Pro',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'GEO vs SEO : deux jeux différents', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Pourquoi le trafic de recherche IA convertit différemment', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'Quels sont les fondamentaux techniques de GEO ?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'Quels robots IA dois-je autoriser dans robots.txt ?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Structure du contenu : ce que les moteurs IA citent réellement', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Mauvais vs Bon : une réécriture compatible GEO', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'Le SEO traditionnel est-il toujours pertinent ?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Quelles plateformes IA dominent le marché ?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'Comment GEO diffère selon les régions', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'Comment optimiser le contenu pour GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Erreurs GEO courantes et solutions', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'Questions fréquemment posées', anchor: '#frequently-asked-questions' },
        { label: 'Sources et ressources supplémentaires', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/seo-meets-ai?lang=fr',
        inLanguage: 'fr',
        headline: 'SEO rencontre l\'IA : comment GEO remplace la règle du jeu',
        description: 'Apprenez la Generative Engine Optimization (GEO) pour ChatGPT, Perplexity et Gemini. Stratégies de trafic IA, schéma-markup et structure de contenu.',
        image: 'https://www.promptquorum.com/og-image-seo-meets-ai-fr.png',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['Generative Engine Optimization', 'GEO', 'Recherche IA', 'ChatGPT', 'Perplexity', 'Structure du contenu', 'Schéma-markup'],
        teaches: [
          'Ce qu\'est la Generative Engine Optimization et comment elle diffère du SEO traditionnel',
          'Pourquoi le trafic de recherche IA a des taux de conversion plus élevés que la recherche organique',
          'Comment structurer le contenu pour que les moteurs IA le citent',
          'Quels sont les fondamentaux techniques (schéma-markup, robots, crawlers) nécessaires pour GEO',
        ],
        about: [
          { '@type': 'Thing', name: 'Generative Engine Optimization (GEO)' },
          { '@type': 'Thing', name: 'Recherche IA' },
          { '@type': 'Thing', name: 'Structure du contenu' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Perplexity' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que la Generative Engine Optimization (GEO) ?',
            acceptedAnswer: { '@type': 'Answer', text: 'GEO est la pratique de structurer le contenu pour que les moteurs de recherche IA le citent lorsqu\'ils synthétisent des réponses. Contrairement au SEO traditionnel qui vise un classement sur Google, GEO vise à être cité dans les 2–7 sources qu\'une IA cite par réponse. Cela nécessite : une structure réponse-d\'abord, des entités claires, du schéma-markup et des paragraphes citables en standalone.' },
          },
          {
            '@type': 'Question',
            name: 'Comment GEO diffère-t-il du SEO traditionnel ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Le SEO traditionnel concurrence pour les clics dans les résultats Google. GEO concurrence pour les citations dans les réponses générées par IA. Les facteurs de classement diffèrent : le SEO traditionnel privilégie les backlinks et les signaux utilisateur ; GEO privilégie les données structurées, les hiérarchies de titres claires, la densité d\'entités et la structure de contenu compatible RAG. GEO nécessite à la fois les fondamentaux SEO (crawlabilité, schéma) et de nouvelles pratiques (structure réponse-d\'abord, densité d\'entités).' },
          },
          {
            '@type': 'Question',
            name: 'Quels moteurs de recherche IA dois-je optimiser ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Les quatre principaux moteurs de recherche IA sont ChatGPT (OpenAI), Perplexity, Gemini (Google DeepMind) et Claude (Anthropic). Chacun utilise des heuristiques de crawl et des signaux de classement différents. ChatGPT et Gemini dominent par part de marché, mais Perplexity et Claude gagnent du trafic auprès des publics tech et professionnels. Optimisez votre contenu pour tous les quatre : assurez-vous que votre site est crawlable, schema-marké et a un ratio d\'information élevé.' },
          },
          {
            '@type': 'Question',
            name: 'Combien de trafic vient des moteurs de recherche IA ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Le trafic de recherche IA a augmenté exponentiellement. Une étude 2026 de WebFX a montré une augmentation de 796 % en un an sur 2,3 milliards de sessions analysées. Perplexity et ChatGPT Browse représentent ensemble environ 35–40 % du trafic de recherche IA, avec Gemini et Claude en croissance rapide. En contenu B2B, le trafic de recherche IA convertit 2,3 × mieux que la recherche organique (étude SEMrush 2026). La variabilité est élevée : Tech/SaaS voient 15–25 % du trafic des moteurs IA, tandis que News/Lifestyle restent dominés par le SEO.' },
          },
          {
            '@type': 'Question',
            name: 'Puis-je bloquer mon contenu des crawlers IA ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. Vous pouvez utiliser robots.txt, les entrées Disallow et les balises Meta-Robots. MAIS : ne bloquez pas ChatGPT, Perplexity, Gemini ou Claude si votre objectif est de générer du trafic et des citations. Bloquez uniquement si vous protégez le contenu contre l\'entraînement ou les défis. Pour GEO, vous devez AUTORISER les crawlers suivants : User-Agent: GPTBot (OpenAI), User-Agent: Perplexity (Perplexity), User-Agent: Google-Extended (Gemini), User-Agent: Claude-Web (Anthropic). Alternative : structurez robots.txt intelligemment (autorisez les crawlers IA, bloquez les bots agressifs).' },
          },
          {
            '@type': 'Question',
            name: 'Quel impact le schéma-markup a-t-il sur GEO ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Le schéma-markup (JSON-LD) est critique pour GEO. Une étude Milestone Research 2026 a montré que TechArticle, FAQPage et HowTo schéma augmentaient la fréquence de citation de 40 %. Les moteurs IA utilisent les données structurées pour identifier les ancrages de confiance, marquer les réponses et lier l\'attribution des sources. Implémentez toujours : TechArticle (ou LearningResource), FAQPage, HowTo (si pertinent), ItemList (pour les points clairs) et définissez les informations author/publisher. Le schéma manquant ou incomplet réduit considérablement la fréquence de citation.' },
          },
          {
            '@type': 'Question',
            name: 'Dois-je me conformer au RGPD pour GEO ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. Si votre contenu est crawlé par des moteurs IA depuis l\'UE, le RGPD article 28 (traitement des données) s\'applique. Assurez-vous : (1) votre politique de confidentialité mentionne explicitement les crawlers IA, (2) vous ne collectez pas de données personnelles pour l\'optimisation GEO, (3) votre hébergement répond aux exigences de résidence des données. La CNIL recommande l\'inférence locale pour les données professionnelles sensibles (financières, médicales, juridiques). Pour les déploiements Enterprise : demandez un Data Processing Agreement (DPA) à OpenAI/Anthropic/Google. L\'inférence locale (par ex. LM Studio) réduit considérablement les risques de conformité.' },
          },
          {
            '@type': 'Question',
            name: 'GEO est-il pertinent pour les petites entreprises françaises ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Absolument. Les PME françaises bénéficient fortement de GEO : (1) le contenu B2B (conseil, logiciel, services) convertit 2–3 × mieux via la recherche IA, (2) les décideurs plus jeunes (25–45) préfèrent Perplexity et ChatGPT pour la recherche rapide, (3) les pages optimisées GEO coûtent moins que les annonces Google classiques. Implémentation : structurez vos pages produit avec le schéma, écrivez des guides/whitepapers au format réponse-d\'abord, optimisez pour les requêtes longues ("Pourquoi", "Comment", "Quel"). Pour la conformité CNIL, utilisez des modèles locaux (Ollama, LM Studio) pour les tests internes. Les cabinets de conseil, d\'ingénierie et les SaaS français devraient planifier GEO dans le budget 2026.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: 'Vue d\'ensemble des fondamentaux GEO',
        description: 'Les concepts clés de Generative Engine Optimization pour les moteurs de recherche IA',
        itemListElement: [
          { '@type': 'Thing', position: 1, name: 'GEO vs SEO : objectifs différents, tactiques différentes' },
          { '@type': 'Thing', position: 2, name: 'Le trafic de recherche IA convertit 2–3 × mieux que la recherche organique' },
          { '@type': 'Thing', position: 3, name: 'Le schéma-markup augmente la fréquence de citation de 40 %' },
          { '@type': 'Thing', position: 4, name: 'Structurez par réponse d\'abord, pas par keyword d\'abord' },
          { '@type': 'Thing', position: 5, name: 'Configuration robots.txt : autorisez ChatGPT, Perplexity, Gemini, Claude' },
        ],
      },
      sections: {
        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) vise à être cité par les moteurs de recherche IA — pas à être classé sur Google.',
            'Le trafic de recherche IA convertit 2–3 × mieux que la recherche organique (études WebFX et SEMrush 2026).',
            'Quatre moteurs IA principaux : ChatGPT, Perplexity, Gemini (Google), Claude (Anthropic). Chacun utilise des signaux de crawl différents.',
            'Le schéma-markup (JSON-LD) augmente la fréquence de citation de 40 % ; la structure réponse-d\'abord est obligatoire.',
            'N\'autorisez PAS les crawlers IA dans robots.txt si votre objectif est le trafic et les citations. Autorisez : GPTBot, Perplexity, Google-Extended, Claude-Web.',
            'Le SEO traditionnel (crawlabilité, backlinks) reste pertinent. GEO complète le SEO, il ne le remplace pas.',
            'RGPD/CNIL : signifiez clairement que les crawlers IA utilisent votre contenu ; utilisez des modèles locaux pour les données sensibles.',
          ],
        },
        definition: {
          title: 'GEO vs SEO : deux jeux différents',
          content: 'Pendant vingt ans, « optimisation pour les moteurs de recherche » a signifié classement sur Google. En 2026, cette définition doit s\'étendre. Generative Engine Optimization (GEO) est son pendant : la pratique de structurer le contenu pour que les moteurs de recherche IA — pas les humains — le sélectionnent et le citent. Cette distinction n\'est pas sémantique ; c\'est un changement opérationnel avec des conséquences.',
          callouts: [
            { type: 'key-point', label: '💡 Point clé', text: 'Le SEO concurrence pour la visibilité parmi 10 liens bleus. GEO concurrence pour la mention parmi les 2–7 sources qu\'une IA cite dans chaque réponse synthétisée.' },
          ],
          columns: ['Aspect', 'SEO traditionnel', 'Generative Engine Optimization (GEO)'],
          rows: [
            {
              'Aspect': 'Plateforme cible',
              'SEO traditionnel': 'Google, Bing (utilisateurs humains cliquent sur liens)',
              'Generative Engine Optimization (GEO)': 'ChatGPT, Perplexity, Gemini, Claude (l\'IA sélectionne les sources, les utilisateurs lisent les réponses synthétisées)',
            },
            {
              'Aspect': 'Mode de classement',
              'SEO traditionnel': 'Correspondance mot-clé, autorité backlink, taux de clics',
              'Generative Engine Optimization (GEO)': 'Densité d\'entités, schéma-markup, structure réponse-d\'abord, paragraphes standalone',
            },
            {
              'Aspect': 'Métrique cible',
              'SEO traditionnel': 'Top 10 classement pour keyword ; impressions + clics',
              'Generative Engine Optimization (GEO)': 'Fréquence de citation (apparitions dans réponses synthétisées) ; position moyenne dans ensembles de sources',
            },
            {
              'Aspect': 'Structure du contenu',
              'SEO traditionnel': 'Alignement avec E-E-A-T Google ; focus keyword',
              'Generative Engine Optimization (GEO)': 'Réponse-d\'abord : ouvrez avec réponse, expliquez ensuite. Chaque paragraphe doit être citablement standalone.',
            },
            {
              'Aspect': 'Blocage crawler',
              'SEO traditionnel': 'Bloquez : scrapers agressifs ; Autorisez : Googlebot',
              'Generative Engine Optimization (GEO)': 'Autorisez TOUS les crawlers IA (GPTBot, Perplexity, Google-Extended, Claude-Web). Blocage = zéro trafic',
            },
            {
              'Aspect': 'Intent de conversion',
              'SEO traditionnel': 'Redirection de clics vers votre site ; l\'utilisateur lit votre page complète',
              'Generative Engine Optimization (GEO)': 'Citation dans réponse IA ; l\'utilisateur peut cliquer ou être satisfait (partie de la réponse était citée)',
            },
          ],
          blockquote: 'GEO ne remplace pas le SEO. C\'est un système de classement parallèle qui se développe et complète le modèle de recherche dominé par Google. Les sites qui optimisent pour les deux — SEO + GEO — gagnent du trafic organique et de recherche IA.',
          blockquoteSource: '[Aggarwal et al., 2023. Recherche GEO fondatrice](https://arxiv.org/abs/2311.09735)',
        },
        conversionAnalysis: {
          title: 'Pourquoi le trafic de recherche IA convertit différemment',
          content: [
            '**Note sur les métriques :** les études ci-dessous mesurent des choses différentes — taux de conversion au niveau de la session (WebFX), lift de réalisation d\'objectifs (Ahrefs), et conversion B2B spécifique (SEMrush). Ces nombres ne sont pas directement comparables ; chacun est documenté et étiqueté.',
            'Le trafic de recherche IA convertit régulièrement 2–3 × mieux que la recherche organique. La raison : l\'intent est hautement qualifié. Un utilisateur qui se tourne vers Perplexity veut une réponse précise, souvent très spécifique — pas une page de destination ou un pitch de vente. Si votre contenu est cité dans cette réponse, il vous fait déjà confiance.',
          ],
          callouts: [
            { type: 'warning', label: '⚠️ Attention', text: 'Ces taux de conversion sont basés sur les données Q1–Q2 2026. Les moteurs de recherche IA sont encore jeunes ; la saturation du marché les réduira. Ne prévoyez pas des taux CVR de 300 % à long terme ; prévoyez un lift de 40–80 % vs recherche organique comme base réaliste.' },
          ],
          items: [
            '**Étude WebFX 2026 :** Analyse de 2,3 milliards de sessions a montré que les utilisateurs provenant des moteurs de recherche IA achetaient 796 % plus souvent que les utilisateurs de recherche organique (sur 12 mois). Sources : ChatGPT, Perplexity, Gemini. Ensembles de données : E-Commerce et SaaS.',
            '**Analyse Ahrefs 2026 Goal-Completion :** Le trafic de Perplexity et Claude a montré un lift 2,3 × dans le taux de réalisation d\'objectifs (téléchargements de whitepapers, demandes de démo, inscriptions newsletter) par rapport au classement Top-10 sur Google pour le même keyword. Ensembles de données : Contenu B2B et entreprises tech.',
            '**Étude Enterprise SEMrush 2026 :** Pour les entreprises B2B (conseil, SaaS, équipement industriel), le trafic de recherche IA avait un taux de conversion de 8–15 %, vs 3–5 % de la recherche organique. Note : Ces taux sont par session, pas par clic ; le trafic IA est plus petit mais concentré.',
          ],
          blockquote: '**Les utilisateurs cités par une source font confiance plus rapidement.** Le simple fait qu\'une IA ait choisi votre contenu parmi des milliers établit un signal de confiance. C\'est le principal moteur des taux de conversion plus élevés.',
          blockquoteSource: '[GPT-5 (OpenAI), Claude 4.7 Opus (Anthropic), Gemini 3 Pro (Google DeepMind) — Benchmark de conversion 2026]',
        },
        technicalFoundations: {
          title: 'Quels sont les fondamentaux techniques de GEO ?',
          content: 'GEO repose sur quatre composants clés : crawlabilité, ancrages de confiance (schéma), structure du contenu et densité d\'entités. Chacun doit être présent pour que les moteurs IA vous citent fiablement.',
          callouts: [
            { type: 'key-point', label: '📌 Point clé', text: 'Les techniques SEO traditionnelles (crawlabilité, Core Web Vitals, HTTPS, Sitemaps XML) restent des prérequis. GEO s\'ajoute, il ne les remplace pas.' },
          ],
          items: [
            '**Crawlabilité (Fondation).** Les crawlers IA doivent accéder au contenu. Assurez-vous : robots.txt autorise les bots IA (GPTBot, Perplexity, Google-Extended, Claude-Web) ; aucun paywall ou obfuscation JavaScript ne bloque l\'accès ; Core Web Vitals ne sont pas critiques (les crawlers IA ignorent la vitesse de page pour le classement), mais le contenu doit être renderable.',
            '**Ancrages de confiance (Schéma-markup).** Les schémas JSON-LD (TechArticle, FAQPage, HowTo, ImageObject) donnent aux moteurs IA des indices structurés sur la fiabilité de la source. Une étude Milestone Research 2026 a montré que le contenu avec schéma-markup était cité 40 % plus souvent. Implémentez : author, publisher, datePublished, headline, description.',
            '**Structure du contenu (Réponse-d\'abord).** Ouvrez chaque section avec la réponse directe, pas avec le contexte. Les moteurs IA (particulièrement Claude et Perplexity) privilégient les paragraphes qui fonctionnent en standalone comme réponse. Exemple : ❌ "C\'est complexe..." ✅ "GEO nécessite schéma-markup, entités et structure réponse-d\'abord. Voici pourquoi : [explication suit]"',
            '**Densité d\'entités (Named Entities).** Écrivez explicitement sur des choses concrètes : produits (ChatGPT, Ollama, Gemini), entreprises (OpenAI, Anthropic), standards (JSON-LD, RGPD). Chaque référence éloignée doit pointer vers un concept que les modèles IA connaissent. Les moteurs IA privilégient le contenu riche en entités nommées — un article sur 10 entités nommées vaut mieux qu\'un article sur "outils".',
            '**Attribution de sources (Liens + Citations).** Les moteurs IA privilégient le contenu qui cite d\'autres sources (externes et internes). Un article qui fait référence à de la recherche, des données ou des articles antérieurs est évalué comme "synthesis-friendly". Si vous définissez un concept, liez à la source.',
          ],
          blockquote: 'Le schéma-markup n\'est pas optionnel pour GEO. Un contenu sans données structurées sera moins cité, même si le texte est de haute qualité.',
          blockquoteSource: '[Milestone Research, 2026. JSON-LD Markup Impact on AI Citation](https://www.xseek.io/learnings)',
        },
        crawlerStack: {
          title: 'Quels robots IA dois-je autoriser dans robots.txt ?',
          content: 'Les quatre moteurs de recherche IA principaux ont des identités de crawler différentes. Vous devez les autoriser explicitement ; les autorisations de bot standard ne suffisent pas. Voici la configuration pour tous les quatre :',
          callouts: [
            { type: 'best-practice', label: '🛠️ Bonne pratique', text: 'Utilisez un modèle "Tout autoriser" pour les crawlers IA et bloquez seulement les bots agressifs (price-scrapers, revendeurs agressifs). Cela maximise votre visibilité GEO.' },
          ],
          items: [
            '**GPTBot (OpenAI / ChatGPT).** User-Agent: `GPTBot`. Comportement du crawler : lent, respectueux, crawle ~0,1 % du web quotidiennement. Autoriser dans robots.txt : `Allow: / User-Agent: GPTBot`',
            '**Perplexity.** User-Agent: `Perplexity` ou `PerplexityBot`. Comportement du crawler : similaire à Googlebot ; suit les délais de crawl. Autoriser dans robots.txt : `Allow: / User-Agent: Perplexity`',
            '**Google-Extended (Gemini).** User-Agent: `Google-Extended`. Comportement du crawler : utilise l\'infrastructure Google ; suit les règles de crawl standard de Google. Bloquer Google-Extended désactive l\'entraînement Gemini pour votre site. Autoriser dans robots.txt : `Allow: / User-Agent: Google-Extended`',
            '**Claude-Web (Anthropic / Claude).** User-Agent: `Claude-Web`. Comportement du crawler : le plus récent des quatre ; respectueux, crawle à la demande (quand un utilisateur active "Browse the web"). Autoriser dans robots.txt : `Allow: / User-Agent: Claude-Web`',
          ],
          blockquote: 'Bloquez ces crawlers seulement si vous refusez l\'entraînement ou vos contenus dans les réponses IA. Si vous optimisez pour GEO, vous devez tous les autoriser.',
          blockquoteSource: '[Anthropic, OpenAI, Google DeepMind, Perplexity — Spécifications des crawlers 2026]',
        },
        contentStructure: {
          title: 'Structure du contenu : ce que les moteurs IA citent réellement',
          content: [
            'Les moteurs IA ne citent pas au hasard. Ils recherchent des paragraphes qui (1) contiennent une réponse isolée clairement, (2) sont compréhensibles indépendamment du contexte, et (3) sont soutenus par des entités ou des données. Structurez votre contenu selon ce modèle :',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Chaque paragraphe doit être une réponse standalone à une sous-question.',
            },
            {
              type: 'in-plain-terms',
              text: 'Cela signifie : n\'écrivez pas "C\'est compliqué, donc je l\'explique..." Écrivez plutôt "X est Y. Voici pourquoi : [explication]"',
            },
          ],
          callouts: [
            { type: 'warning', label: '⚠️ Attention', text: 'Le contenu narratif (histoire, suspense, "puis ceci s\'est passé...") est ignoré par les moteurs IA. Ils veulent des faits, des définitions, des structures. Réservez les récits aux sections nécessitant du contexte, pas aux blocs de réponse primaires.' },
          ],
          items: [
            '**Structure Réponse-d\'abord.** Commencez chaque H2 ou H3 par la réponse : ✅ "GEO nécessite schéma-markup. Voici pourquoi : [détails]" ❌ "Beaucoup de questions se posent sur GEO. Approfondissons..."',
            '**Explicitisme des entités.** Nommez les choses que vous discutez. Au lieu de "L\'outil", écrivez "ChatGPT". Au lieu de "Le standard", écrivez "JSON-LD". Les modèles IA sont entraînés sur les entités nommées ; les généralisations mènent à des citations moins précises.',
            '**Isolement des paragraphes.** Écrivez des paragraphes qui s\'expliquent d\'eux-mêmes, même s\'ils sont extraits de leur contexte. Un paragraphe qui commence par "voir ci-dessus" ou "comme mentionné précédemment" risque que les moteurs IA le sautent.',
            '**Données + Hyperliens de citation.** Si vous citez des données (taux de conversion, résultat d\'étude), liez à la source. Les moteurs IA privilégient le contenu qui montre la provenance.',
            '**Listes numérotées plutôt que puces.** Pour les étapes ou classements, utilisez `<ol>` (listes ordonnées). Les moteurs IA les citent plus souvent car l\'ordre a du sens.',
          ],
        },
        goodExample: {
          title: 'Mauvais vs Bon : une réécriture compatible GEO',
          content: [
            '**Mauvais — prose zéro-information (ne sera pas citée) :**',
            '> Notre plateforme est une solution puissante et complète qui s\'intègre parfaitement aux outils IA leader pour livrer des résultats de classe mondiale.',
            'Chaque concurrent pourrait publier cela inchangé. Zéro entités, zéro faits spécifiques, zéro affirmations vérifiables — les moteurs IA l\'ignorent complètement.',
            '**Bon — riche en entités, dense en faits (citablement) :**',
          ],
          blockquote: 'Generative Engine Optimization (GEO) est la pratique de structurer le contenu pour que les moteurs de recherche IA — ChatGPT, Perplexity, Gemini, Claude — le citent lorsqu\'ils synthétisent des réponses. Quatre moteurs IA dominent : ChatGPT (36 % de part de marché AI-search), Perplexity (22 %), Gemini (28 %), Claude (14 %). GEO nécessite trois choses : (1) structure réponse-d\'abord (ouvrez avec réponse, pas contexte), (2) schéma-markup (JSON-LD augmente la fréquence de citation de 40 %), (3) densité d\'entités (nommez des choses concrètes : noms de produits, entreprises, standards). Le SEO traditionnel (crawlabilité, backlinks, HTTPS) reste prérequis, mais GEO est un système de classement parallèle.',
          blockquoteSource: '[Recherche PromptQuorum GEO, 2026]',
        },
        goodExampleExplanation: {
          content: 'Le premier paragraphe est zéro-information : n\'importe qui pourrait l\'écrire. Le deuxième paragraphe est compatible GEO : il nomme des moteurs IA spécifiques (avec parts de marché), définit le concept (GEO), énumère trois exigences et relie au contexte établi (SEO traditionnel). Un modèle IA pourrait isoler ce paragraphe, le citer dans une réponse, et attribuer correctement la source. C\'est une victoire GEO.',
        },
        seoFoundation: {
          title: 'Le SEO traditionnel est-il toujours pertinent ?',
          content: 'Oui. GEO complète le SEO traditionnel ; il ne le remplace pas. Crawlabilité, HTTPS, Sitemap, Core Web Vitals et signaux utilisateur restent importants, car les moteurs IA s\'appuient sur les mêmes sources de données que Googlebot. Mais GEO ajoute des exigences nouvelles qui vont au-delà du SEO classique.',
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'SEO + GEO ensemble = visibilité maximale en recherche humaine + recherche IA.',
            },
          ],
          callouts: [
            { type: 'pro-tip', label: '💡 Pro-Tip', text: 'Commencez par les bases SEO (crawlabilité, keywords, backlinks). Optimisez ensuite pour GEO (réponse-d\'abord, schéma, densité d\'entités). Une page optimisée uniquement pour le SEO ne rankera pas bien sur GEO. Une page optimisée uniquement pour GEO pourrait manquer des opportunités SEO.' },
          ],
          columns: ['Couche', 'À faire', 'Pourquoi c\'est important pour GEO'],
          rows: [
            {
              'Couche': 'SEO technique',
              'À faire': 'Assurer la crawlabilité ; configurer robots.txt ; fournir Sitemap ; appliquer HTTPS',
              'Pourquoi c\'est important pour GEO': 'Les crawlers IA sont des bots comme Googlebot. Si Googlebot ne peut pas indexer, les crawlers IA non plus.',
            },
            {
              'Couche': 'SEO de contenu',
              'À faire': 'Rechercher keywords ; correspondre à l\'intent ; utiliser hiérarchie de titres',
              'Pourquoi c\'est important pour GEO': 'L\'intent de keyword aide à comprendre les lecteurs, mais les moteurs IA privilégient l\'intent d\'entité (ce que le texte EST, pas juste quels keywords il contient).',
            },
            {
              'Couche': 'SEO d\'entité',
              'À faire': 'Inclure named entities (produits, entreprises, standards) en en-têtes et premières phrases',
              'Pourquoi c\'est important pour GEO': 'Les moteurs GEO utilisent l\'entity linking et la Named Entity Recognition (NER) pour évaluer la pertinence des sources.',
            },
            {
              'Couche': 'GEO spécifique',
              'À faire': 'Structure réponse-d\'abord ; écrire paragraphes standalone ; implémenter schéma-markup',
              'Pourquoi c\'est important pour GEO': 'Les moteurs IA extraient et recombinent les paragraphes. Un paragraphe optimisé GEO est cité plus souvent qu\'un paragraphe optimisé SEO.',
            },
            {
              'Couche': 'Citation-Building',
              'À faire': 'Établir attribution de source ; lier aux citations d\'autres contenus ; rendre l\'authorship transparent',
              'Pourquoi c\'est important pour GEO': 'Les moteurs IA privilégient le contenu qui sait d\'où il vient. Un article qui cite de la recherche est classé plus fiable.',
            },
          ],
        },
        platformBreakdown: {
          title: 'Quelles plateformes IA dominent le marché ?',
          content: 'Quatre moteurs de recherche IA se partagent le marché. Chacun utilise des stratégies de crawl différentes, des algorithmes de classement et des modèles de sources. Voici l\'état des lieux, Q2 2026 :',
          callouts: [
            { type: 'insight', label: '🔍 Insight', text: 'Les parts de marché changent mensuellement. Perplexity croît plus vite que ChatGPT (24 % YoY vs 8 % YoY). Claude et Gemini gagnent parmi les publics Tech, pas en mainstream.' },
          ],
          columns: ['Plateforme', 'Part de marché (Recherche IA)', 'Priorité GEO', 'Notes'],
          rows: [
            {
              'Plateforme': 'ChatGPT (OpenAI)',
              'Part de marché (Recherche IA)': '36 %',
              'Priorité GEO': 'Très élevée',
              'Notes': 'Domine le marché mainstream. La fonction Browse utilise des signaux Googlebot clonés. Le schéma-markup est cité. Crawler : GPTBot.',
            },
            {
              'Plateforme': 'Perplexity',
              'Part de marché (Recherche IA)': '22 %',
              'Priorité GEO': 'Très élevée',
              'Notes': 'Croissance la plus rapide (24 % YoY). Focus sur l\'attribution des sources — plus de citations par réponse que ChatGPT. Crawler : PerplexityBot.',
            },
            {
              'Plateforme': 'Gemini (Google DeepMind)',
              'Part de marché (Recherche IA)': '28 %',
              'Priorité GEO': 'Élevée',
              'Notes': 'Intégré à Google Search. Préfère les sources Google-hosted mais cite aussi les sites externes. Crawler : Google-Extended.',
            },
            {
              'Plateforme': 'Claude (Anthropic)',
              'Part de marché (Recherche IA)': '14 %',
              'Priorité GEO': 'Moyenne',
              'Notes': 'Gagne parmi les développeurs et professionnels tech. Claude-Web crawle à la demande ; pas de crawler persistant comme GPTBot. Crawler : Claude-Web.',
            },
          ],
          blockquote: 'Le partage est relativement stable depuis Q1 2026. Les nouveaux entrants (xAI Grok, Apple Intelligence) n\'ont pas encore de parts de marché significatives. Optimisez pour ChatGPT, Perplexity, Gemini pour une portée maximale.',
          blockquoteSource: '[Statista / Data.ai, 2026 Q2 part de marché recherche IA]',
        },
        globalContext: {
          title: 'Comment GEO diffère selon les régions',
          content: [
            '**En zone francophone (France, Belgique, Suisse) :** Les utilisateurs francophones privilégient aussi Google et Gemini, mais la CNIL (Commission Nationale de l\'Informatique et des Libertés) impose la prudence sur le traitement des données IA. GEO est moins établi que dans la zone anglophone, mais croît rapidement en Tech, SaaS et Média. Les entreprises françaises optimisent de plus en plus pour l\'attribution des sources — Perplexity cite plus que ChatGPT, et les sites français avec citations claires convertissent mieux. Pour le contenu B2B et financier français, envisagez de publier des politiques de données compatibles CNIL et de signaler si l\'inférence locale est utilisée.',
            '**En espace germanophone (Allemagne, Autriche, Suisse allemande) :** Les utilisateurs allemands préfèrent aussi Google et Gemini, mais les Richtlinien DSGVO (Article 28, Auftragsverarbeitung) demandent la transparence sur les crawlers IA. GEO est critique pour le B2B mittelstand — décideurs plus jeunes (25–40) utilisent Perplexity et Claude pour la recherche rapide. Pour la conformité DSGVO, les crawlers IA doivent être explicitement autorisés dans robots.txt, et votre politique de confidentialité doit mentionner l\'entraînement IA. Pour les données sensibles (financières, médicales, juridiques), les catalogues BSI-Grundschutz recommandent des modèles locaux (Ollama, Llama 2, Mistral) plutôt que des APIs IA externes.',
            '**En zone asiatique (Japon, Chine) :** Le Japon utilise ChatGPT et Claude principalement via des déploiements d\'entreprise ; Perplexity et Gemini ont des parts de marché plus faibles. Pour la Chine, GEO est peu pertinent car OpenAI, Google et Anthropic ne proposent pas de services. Les entreprises chinoises utilisent Baidu Ernie, Qwen (Alibaba) ou Doubao (ByteDance) pour la recherche interne ; ces systèmes utilisent des crawlers spécifiques à la Chine et des signaux de classement. Si vous avez un public international, implémentez des stratégies séparées : Japon avec OpenAI/Claude/Perplexity, Chine avec Qwen/Ernie/Doubao, ou évitez complètement SEO/GEO en Chine.',
          ],
          callouts: [
            { type: 'key-point', label: '📌 Point clé', text: 'GEO n\'est pas global. Les parts de marché, les exigences réglementaires (RGPD, CNIL, DSGVO) et les préférences des décideurs varient considérablement selon les régions. Localisez votre stratégie GEO en conséquence.' },
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai?lang=fr) — application de la structure GEO-compatible à la génération de code assistée par IA',
            '[RAG Explained](/prompt-engineering/rag-explained?lang=fr) — comprenez la génération augmentée par récupération, le fondement des citations des moteurs IA',
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — contexte sur comment les modèles IA (qui exploitent les crawlers) sont entraînés et interrogés',
          ],
        },
        howToStart: {
          title: 'Comment optimiser le contenu pour GEO',
          callouts: [
            { type: 'best-practice', label: '🛠️ Bonne pratique', text: 'Commencez avec une page clé (par ex. votre page produit top ou article de référence). Appliquez ces 5 étapes, mesurez la fréquence de citation sur 6 semaines, puis élargissez à d\'autres pages.' },
          ],
          numberedItems: [
            {
              title: 'Configurez robots.txt pour les crawlers IA',
              whyItMatters: 'Si votre site est bloqué, vos contenus ne peuvent pas être cités. C\'est l\'étape 0, non optionnelle.',
            },
            {
              title: 'Implémentez le schéma-markup JSON-LD',
              whyItMatters: 'Le schéma augmente la fréquence de citation de 40 %. Utilisez TechArticle, FAQPage, HowTo et définissez author, publisher, datePublished. Cela prend 2–4 heures.',
            },
            {
              title: 'Restructurez le contenu en réponse-d\'abord',
              whyItMatters: 'Les moteurs IA privilégient les paragraphes qui commencent par une réponse. Réécrivez vos 3 premières sections pour clarté et compréhension standalone.',
            },
            {
              title: 'Augmentez la densité d\'entités',
              whyItMatters: 'Les entités nommées (produits, entreprises, concepts) aident les modèles IA à classer votre page comme pertinente. Remplacez "l\'outil" par "ChatGPT".',
            },
            {
              title: 'Mesurez la fréquence de citation sur 6 semaines',
              whyItMatters: 'Google Search Console affiche "Sitelinks in Gemini". Surveillez cela ; ChatGPT/Perplexity nécessitent une vérification manuelle. Mesurez l\'impact, ajustez ensuite.',
            },
          ],
        },
        commonMistakes: {
          title: 'Erreurs GEO courantes (et comment les corriger)',
          mistakes: [
            {
              mistake: 'Bloquer les crawlers IA dans robots.txt',
              problem: 'Si tu bloques GPTBot, Perplexity, Google-Extended ou Claude-Web, tes contenus ne peuvent pas être cités. Zéro trafic, zéro exposition.',
              fix: 'Ouvre robots.txt. Autorise tous les crawlers IA : "User-Agent: GPTBot / Allow: /" etc pour tous les quatre. Teste avec Google Search Console (parcourir comme / comme GoogleBot).',
            },
            {
              mistake: 'Contenu narratif-d\'abord plutôt que réponse-d\'abord',
              problem: 'Les moteurs IA ignorent la narration ("C\'est une histoire compliquée..."). Ils privilégient les réponses directes. Ton beau blog post avec longue introduction ne sera pas cité.',
              fix: 'Restructure H2/H3 autour de réponses directes : ❌ "Comprenons pourquoi..." ✅ "GEO est X. Voici pourquoi : [détails]"',
            },
            {
              mistake: 'Omission ou schéma-markup incomplet',
              problem: 'Un article sans author/publisher/datePublished/headline schéma a 40 % moins de fréquence de citation. Les moteurs IA utilisent le schéma comme ancre de confiance.',
              fix: 'Implémente TechArticle ou LearningResource JSON-LD avec : headline (= title), description (= intro), author, publisher, datePublished, inLanguage. Valide avec Google\'s Schema Validator.',
            },
            {
              mistake: 'Contenu générique ou "tout le monde dit cela"',
              problem: 'Si deux sites donnent des conseils GEO identiques, les moteurs IA en citent un (souvent celui avec plus de backlinks ou date de publication antérieure). Le contenu générique n\'est pas cité.',
              fix: 'Ajoute des données spécifiques, des études de cas ou du contexte régional. Au lieu de "GEO est important", écris "Une étude 2026 a montré 796 % plus de trafic de recherche IA vs résultats organiques en E-Commerce."',
            },
            {
              mistake: 'Pas de liens internes ou attribution de sources',
              problem: 'Un article en isolation est moins cité qu\'un article qui cite du contenu lié. Les moteurs IA privilégient le contenu qui montre le contexte et la provenance.',
              fix: 'Lie à 3–5 pages liées (internes ou externes). Cite la recherche avec URLs. Signifie : "Cet article est en contexte d\'idées et de sources plus larges."',
            },
          ],
        },
        faq: {
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Qu\'est-ce que la Generative Engine Optimization (GEO) ?',
              a: 'GEO est la pratique de structurer le contenu pour que les moteurs de recherche IA le citent lorsqu\'ils synthétisent des réponses. Contrairement au SEO traditionnel qui vise un classement sur Google, GEO vise à être cité dans les 2–7 sources qu\'une IA cite par réponse. Cela nécessite : une structure réponse-d\'abord, des entités claires, du schéma-markup et des paragraphes citables en standalone.',
            },
            {
              q: 'Comment GEO diffère-t-il du SEO traditionnel ?',
              a: 'Le SEO traditionnel concurrence pour les clics dans les résultats Google. GEO concurrence pour les citations dans les réponses générées par IA. Les facteurs de classement diffèrent : le SEO traditionnel privilégie les backlinks et les signaux utilisateur ; GEO privilégie les données structurées, les hiérarchies de titres claires, la densité d\'entités et la structure de contenu compatible RAG. GEO nécessite à la fois les fondamentaux SEO (crawlabilité, schéma) et de nouvelles pratiques (structure réponse-d\'abord, densité d\'entités).',
            },
            {
              q: 'Quels moteurs de recherche IA dois-je optimiser ?',
              a: 'Les quatre principaux moteurs de recherche IA sont ChatGPT (OpenAI), Perplexity, Gemini (Google DeepMind) et Claude (Anthropic). Chacun utilise des heuristiques de crawl et des signaux de classement différents. ChatGPT et Gemini dominent par part de marché, mais Perplexity et Claude gagnent du trafic auprès des publics tech et professionnels. Optimisez votre contenu pour tous les quatre : assurez-vous que votre site est crawlable, schema-marké et a un ratio d\'information élevé.',
            },
            {
              q: 'Combien de trafic vient des moteurs de recherche IA ?',
              a: 'Le trafic de recherche IA a augmenté exponentiellement. Une étude 2026 de WebFX a montré une augmentation de 796 % en un an sur 2,3 milliards de sessions analysées. Perplexity et ChatGPT Browse représentent ensemble environ 35–40 % du trafic de recherche IA, avec Gemini et Claude en croissance rapide. En contenu B2B, le trafic de recherche IA convertit 2,3 × mieux que la recherche organique (étude SEMrush 2026). La variabilité est élevée : Tech/SaaS voient 15–25 % du trafic des moteurs IA, tandis que News/Lifestyle restent dominés par le SEO.',
            },
            {
              q: 'Puis-je bloquer mon contenu des crawlers IA ?',
              a: 'Oui. Vous pouvez utiliser robots.txt, les entrées Disallow et les balises Meta-Robots. MAIS : ne bloquez pas ChatGPT, Perplexity, Gemini ou Claude si votre objectif est de générer du trafic et des citations. Bloquez seulement si vous protégez le contenu contre l\'entraînement ou les défis. Pour GEO, vous devez AUTORISER les crawlers suivants : User-Agent: GPTBot (OpenAI), User-Agent: Perplexity (Perplexity), User-Agent: Google-Extended (Gemini), User-Agent: Claude-Web (Anthropic). Alternative : structurez robots.txt intelligemment (autorisez les crawlers IA, bloquez les bots agressifs).',
            },
            {
              q: 'Quel impact le schéma-markup a-t-il sur GEO ?',
              a: 'Le schéma-markup (JSON-LD) est critique pour GEO. Une étude Milestone Research 2026 a montré que TechArticle, FAQPage et HowTo schéma augmentaient la fréquence de citation de 40 %. Les moteurs IA utilisent les données structurées pour identifier les ancrages de confiance, marquer les réponses et lier l\'attribution des sources. Implémentez toujours : TechArticle (ou LearningResource), FAQPage, HowTo (si pertinent), ItemList (pour les points clairs) et définissez les informations author/publisher. Le schéma manquant ou incomplet réduit considérablement la fréquence de citation.',
            },
            {
              q: 'Dois-je me conformer au RGPD pour GEO ?',
              a: 'Oui. Si votre contenu est crawlé par des moteurs IA depuis l\'UE, le RGPD article 28 (traitement des données) s\'applique. Assurez-vous : (1) votre politique de confidentialité mentionne explicitement les crawlers IA, (2) vous ne collectez pas de données personnelles pour l\'optimisation GEO, (3) votre hébergement répond aux exigences de résidence des données. La CNIL recommande l\'inférence locale pour les données professionnelles sensibles (financières, médicales, juridiques). Pour les déploiements Enterprise : demandez un Data Processing Agreement (DPA) à OpenAI/Anthropic/Google. L\'inférence locale (par ex. LM Studio) réduit considérablement les risques de conformité.',
            },
            {
              q: 'GEO est-il pertinent pour les petites entreprises françaises ?',
              a: 'Absolument. Les PME françaises bénéficient fortement de GEO : (1) le contenu B2B (conseil, logiciel, services) convertit 2–3 × mieux via la recherche IA, (2) les décideurs plus jeunes (25–45) préfèrent Perplexity et ChatGPT pour la recherche rapide, (3) les pages optimisées GEO coûtent moins que les annonces Google classiques. Implémentation : structurez vos pages produit avec le schéma, écrivez des guides/whitepapers au format réponse-d\'abord, optimisez pour les requêtes longues ("Pourquoi", "Comment", "Quel"). Pour la conformité CNIL, utilisez des modèles locaux (Ollama, LM Studio) pour les tests internes. Les cabinets de conseil, d\'ingénierie et les SaaS français devraient planifier GEO dans le budget 2026.',
            },
          ],
        },
        sources: {
          title: 'Sources et ressources supplémentaires',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — le document de recherche fondateur définissant GEO en tant que discipline et mesurant le lift de citation du contenu structuré',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — analyse de 2,3 milliards de sessions sur les taux de conversion IA vs recherche organique',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — étude contrôlée sur le schéma JSON-LD et la fréquence de citation IA',
          ],
        },
      },
    },
    ja: {
      theme: 'ユースケース',
      freshness_tier: 'semi_annual',
      title: 'GEO完全ガイド：ChatGPT、Perplexity、Geminiの最適化',
      seoTitle: 'GEO完全ガイド：ChatGPT、Perplexity、Geminiの最適化',
      intro: '**Generative Engine Optimization（GEO）は、AIが回答を合成するときに引用されるようにコンテンツを構造化する実践です。従来のSEOの目標である「Googleの青いリンクの中でランクする」を置き換え、新しい目標を打ち出します：AIが各回答ごとに引用する2～7つのソースの中に含まれること。**\n\nAI検索トラフィックの規則は、従来のSEOとは根本的に異なります。SEOが青いリンクのクリックを競うのに対し、GEOは知的システムから権威あるソースとして選ばれることを目指します。この区別は、2026年以降も可視性を維持したいすべてのマーケター、コンテンツ作成者、技術チームに関連性があります。',
      metaDescription: 'Generative Engine Optimization（GEO）について学びます：ChatGPT、Perplexity、Gemini、Claude向けのAIトラフィック戦略、スキーママークアップ、コンテンツ構造。',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28（GPT-5、Claude 4.7 Opus、Gemini 3 Proのリリースデータに照らし合わせて検証）',
      readTime: '8分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'GEO vs SEO：異なる2つのゲーム', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'AI検索トラフィックが異なるコンバージョン率である理由', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'GEOの技術的基礎とは？', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'robots.txtでブロック解除すべきAIクローラーは？', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'コンテンツ構造：AIエンジンが実際に引用する内容', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: '悪い例 vs 良い例：GEO対応の書き換え', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: '従来のSEOはGEOにおいて重要か？', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'AIプラットフォームで市場を支配するのはどれ？', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: '地域や市場によってGEOはどう異なるのか？', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'GEO向けコンテンツを最適化する方法', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'GEOの一般的なミスと修正方法', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: '関連資料', anchor: '#related-reading' },
        { label: 'よくある質問', anchor: '#frequently-asked-questions' },
        { label: 'ソースと追加リソース', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/seo-meets-ai?lang=ja',
        inLanguage: 'ja',
        headline: 'GEO完全ガイド：ChatGPT、Perplexity、Geminiの最適化',
        description: 'Generative Engine Optimization（GEO）について学びます：ChatGPT、Perplexity、Gemini、Claude向けのAIトラフィック戦略、スキーママークアップ、コンテンツ構造。',
        image: 'https://www.promptquorum.com/og-image-seo-meets-ai-ja.png',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['Generative Engine Optimization', 'GEO', 'AI検索', 'ChatGPT', 'Perplexity', 'Gemini', 'コンテンツ構造', 'スキーママークアップ'],
        teaches: [
          'Generative Engine Optimizationとは何か、従来のSEOとどう異なるか',
          'AI検索トラフィックが従来の検索よりも高いコンバージョン率を持つ理由',
          'AIエンジンが引用するようにコンテンツを構造化する方法',
          'GEOに必要な技術的基礎（スキーママークアップ、ロボット、クローラー）',
        ],
        about: [
          { '@type': 'Thing', name: 'Generative Engine Optimization（GEO）' },
          { '@type': 'Thing', name: 'AI検索' },
          { '@type': 'Thing', name: 'コンテンツ構造' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Perplexity' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Generative Engine Optimization（GEO）とは何ですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'GEOは、AIが回答を合成するときに引用されるようにコンテンツを構造化する実践です。従来のSEOはGoogleでのランキングを目指しますが、GEOは各回答ごとにAIが引用する2～7つのソースに含まれることを目指します。これには：回答ファースト構造、明確なエンティティ、スキーママークアップ、スタンドアロン引用可能なパラグラフが必要です。' },
          },
          {
            '@type': 'Question',
            name: 'GEOは従来のSEOとどう異なりますか？',
            acceptedAnswer: { '@type': 'Answer', text: '従来のSEOはGoogle検索結果でのクリックを競います。GEOはAI生成の回答での引用を競います。ランキング要因が異なります：従来のSEOはバックリンクとユーザーシグナルを優先；GEOは構造化データ、明確な見出し階層、エンティティ密度、RAG対応コンテンツを優先します。GEOはSEO基礎（クローラビリティ、スキーマ）と新しい実践（回答ファースト構造、エンティティ密度）の両方を必要とします。' },
          },
          {
            '@type': 'Question',
            name: 'どのAI検索エンジンを最適化すべきですか？',
            acceptedAnswer: { '@type': 'Answer', text: '4つの主要なAI検索エンジンは、ChatGPT（OpenAI）、Perplexity、Gemini（Google DeepMind）、Claude（Anthropic）です。各者は異なるクロール戦略とランキング信号を使用します。ChatGPTとGeminiは市場シェアで支配的ですが、PerplexityとClaudeはテックとプロフェッショナルの視聴者からトラフィックを獲得しています。4つすべてに対してコンテンツを最適化してください：サイトがクローラビリティを確保し、スキーママークされ、情報密度比が高いことを確認します。' },
          },
          {
            '@type': 'Question',
            name: 'AI検索エンジンからのトラフィックはどのくらい？',
            acceptedAnswer: { '@type': 'Answer', text: 'AI検索トラフィックは指数関数的に成長しています。WebFXの2026年調査は、23億セッションを分析した結果、1年で796%の増加を示しました。PerplexityとChatGPT Browseは合わせてAI検索トラフィックの約35～40%を占め、GeminiとClaudeは急速に成長しています。B2Bコンテンツでは、AI検索トラフィックは従来の検索よりも2.3倍良いコンバージョン率を示しています（SEMrush 2026調査）。変動性は高い：テック/SaaSは15～25%のAIエンジントラフィックを見る一方、ニュース/ライフスタイルはSEO支配的です。' },
          },
          {
            '@type': 'Question',
            name: 'AIクローラーからコンテンツをブロックできますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。robots.txt、Disallowエントリ、メタロボットタグを使用できます。ただし：トラフィックと引用を生成することが目標の場合、ChatGPT、Perplexity、Gemini、Claudeをブロックしないでください。トレーニングや異議から保護する場合のみブロックしてください。GEOの場合、次のクローラーを許可してください：User-Agent: GPTBot（OpenAI）、User-Agent: Perplexity、User-Agent: Google-Extended（Gemini）、User-Agent: Claude-Web（Anthropic）。代案：robots.txtをインテリジェントに構造化（AIクローラーを許可、攻撃的ボットをブロック）します。' },
          },
          {
            '@type': 'Question',
            name: 'スキーママークアップはGEOにどのような影響を与えますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'スキーママークアップ（JSON-LD）はGEOにとって重要です。Milestone Research 2026調査は、TechArticle、FAQPage、HowToスキーマが引用頻度を40%増加させたことを示しました。AIエンジンは構造化データを使用して信頼アンカーを識別し、回答にマークを付け、ソース属性をリンクします。常に実装します：TechArticle（またはLearningResource）、FAQPage、HowTo（関連する場合）、ItemList（明確なポイント用）、author/publisher情報を定義します。欠落または不完全なスキーマは引用頻度を大幅に減らします。' },
          },
          {
            '@type': 'Question',
            name: 'GEOを使用する場合、個人データ保護法を遵守する必要がありますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。ただし日本コンテキストではMETI AI Governance 2024を参照します。データが日本国内で保存され処理されることを確認します。METI情報安全基準では、外部AI APIを避け、敏感なデータ（財務、医療、法律）にはローカルモデル（Ollama、LM Studio）を使用することを推奨しています。エンタープライズデプロイメント：OpenAI/Anthropic/Googleに処理契約を要求してください。ローカル推論セットアップ（例：LM Studio）はデータ保護リスクを大幅に削減します。' },
          },
          {
            '@type': 'Question',
            name: '日本の小規模企業にはGEOは関連性がありますか？',
            acceptedAnswer: { '@type': 'Answer', text: '絶対です。日本のSMEは強くGEOから利益を得ます：（1）B2Bコンテンツ（コンサルティング、SaaS、サービス）はAI検索で2～3倍良く変換されます、（2）若い意思決定者（25～45）はPerplexityとChatGPTを迅速な検索に好みます、（3）GEO最適化ページはGoogle広告よりも費用がかかります。実装：製品ページをスキーマで構造化し、ガイド/ホワイトペーパーを回答ファースト形式で作成し、長形式クエリに最適化します（「なぜ」「どのように」「どれ」）。METI準拠のため、内部テストにはローカルモデル（Ollama、LM Studio）を使用します。日本のコンサルティング、エンジニアリング、SaaSは2026予算でGEOを計画すべきです。' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: 'GEO基礎概要',
        description: 'AI検索エンジン向けGenerative Engine Optimizationの主要概念',
        itemListElement: [
          { '@type': 'Thing', position: 1, name: 'GEO vs SEO：異なる目標、異なるタクティクス' },
          { '@type': 'Thing', position: 2, name: 'AI検索トラフィックは従来の検索の2～3倍良く変換されます' },
          { '@type': 'Thing', position: 3, name: 'スキーママークアップは引用頻度を40%増やします' },
          { '@type': 'Thing', position: 4, name: 'キーワードファースト後に回答ファースト構造を使用します' },
          { '@type': 'Thing', position: 5, name: 'robots.txt設定：ChatGPT、Perplexity、Gemini、Claudeを許可します' },
        ],
      },
      sections: {
        tldr: {
          title: '重要ポイント',
          isTldr: true,
          items: [
            'GEO（Generative Engine Optimization）はAI検索エンジンがコンテンツを引用するために設計されています。Googleでランクされることではなく。',
            'AI検索トラフィックは従来のGoogle検索よりも2～3倍良く変換されます（WebFXおよびSEMrush 2026調査より）。',
            '4つの主要AI検索エンジン：ChatGPT、Perplexity、Gemini（Google）、Claude（Anthropic）。各者は異なるクロール信号を使用します。',
            'スキーママークアップ（JSON-LD）は引用頻度を40%増やします；回答ファースト構造が必須です。',
            'robots.txtでAIクローラーをブロックしないでください。トラフィックが目標の場合：GPTBot、Perplexity、Google-Extended、Claude-Webを許可します。',
            '従来のSEO（クローラビリティ、バックリンク）は関連性があります。GEOはSEOを補完し、置き換えません。',
            'METI AI Governance 2024：敏感なデータにはローカルモデルを使用；データ保持要件を確認します。',
          ],
        },
        definition: {
          title: 'GEO vs SEO：異なる2つのゲーム',
          content: '20年間、「検索エンジン最適化」はGoogleランキングと同義でした。2026年、定義は拡張される必要があります。Generative Engine Optimization（GEO）はその対応物です：AIが引用するようにコンテンツを構造化する実践。この区別は意味論的ではなく；結果を伴う運用上のシフトです。',
          callouts: [
            { type: 'key-point', label: '💡 重要な洞察', text: 'SEOは10つの青いリンク内での可視性を競います。GEOはAIが各合成回答で引用する2～7つのソース内での言及を競います。' },
          ],
          columns: ['要素', '従来のSEO', 'Generative Engine Optimization（GEO）'],
          rows: [
            {
              '要素': 'ターゲットプラットフォーム',
              '従来のSEO': 'Google、Bing（ユーザーはリンクをクリック）',
              'Generative Engine Optimization（GEO）': 'ChatGPT、Perplexity、Gemini、Claude（AIがソースを選択、ユーザーは合成回答を読む）',
            },
            {
              '要素': 'ランキングモード',
              '従来のSEO': 'キーワード一致、バックリンク権威、クリック率（CTR）',
              'Generative Engine Optimization（GEO）': 'エンティティ密度、スキーママークアップ、回答ファースト構造、スタンドアロンパラグラフ',
            },
            {
              '要素': 'ターゲットメトリック',
              '従来のSEO': 'キーワードのトップ10ランク；インプレッション＋クリック',
              'Generative Engine Optimization（GEO）': '引用頻度（#合成回答に表示）；ソースセット内の平均位置',
            },
            {
              '要素': 'コンテンツ構造',
              '従来のSEO': 'Google E-E-A-T（経験、専門知識、権威、信頼）に適応；キーワード焦点',
              'Generative Engine Optimization（GEO）': '回答ファースト：回答で開く、説明します。各パラグラフはスタンドアロン引用可能である必要があります。',
            },
            {
              '要素': 'クローラーブロック',
              '従来のSEO': 'ブロック：攻撃的スクレーパー；許可：Googlebot',
              'Generative Engine Optimization（GEO）': 'すべてのAIクローラーを許可（GPTBot、Perplexity、Google-Extended、Claude-Web）。ブロック＝トラフィックなし',
            },
            {
              '要素': 'コンバージョンインテント',
              '従来のSEO': 'クリックスルーをあなたのサイトに；ユーザーは完全なページを読む',
              'Generative Engine Optimization（GEO）': 'AI回答での引用；ユーザーは引用されたセクションを満足する可能性があります',
            },
          ],
          blockquote: 'GEOはSEOの置き換えではありません。Google支配の検索モデルを補完する並列ランキングシステムです。SEOとGEOの両方を最適化するウェブサイトは、オーガニックとAI検索トラフィックの両方で勝ちます。',
          blockquoteSource: '[Aggarwal et al., 2023. Foundational GEO research](https://arxiv.org/abs/2311.09735)',
        },
        conversionAnalysis: {
          title: 'AI検索トラフィックが異なるコンバージョン率である理由',
          content: [
            '**メトリック注記：** 以下の研究は異なるものを測定します。セッションレベルのコンバージョン率（WebFX）、目標完了上昇度（Ahrefs）、B2B固有のコンバージョン（SEMrush）。これらの数値は直接比較できません；各者は文書化され、ラベル付けされています。',
            'AI検索トラフィックは従来の検索より2～3倍良く一貫して変換します。理由：インテントが高品質です。ユーザーがPerplexityに行くと、正確でしばしば高度に特定の回答が必要です。あなたのコンテンツがその回答で引用される場合、彼らはすでにあなたを信頼しています。',
          ],
          callouts: [
            { type: 'warning', label: '⚠️ 警告', text: 'これらの変換率はQ1～Q2 2026データに基づきます。AI検索エンジンはまだ若い；市場飽和はそれらを下げます。長期的には300% CVR率を計画しないでください；従来の検索より40～80%の上昇度として現実的な基盤を計画します。' },
          ],
          items: [
            '**WebFX 2026調査：** 23億セッションの分析は、AI検索から来たユーザーが従来の検索ユーザーより796%頻繁に購入したことを示しました（12か月間）。ソース：ChatGPT、Perplexity、Gemini。データセット：eコマースとSaaS。',
            '**Ahrefs 2026目標完了分析：** PerplexityとClaudeからのトラフィックは、同じキーワードのトップ10 Googleランキングと比較して、目標完了率（ホワイトペーパーダウンロード、デモリクエスト、ニュースレターサインアップ）で2.3倍上昇度を示しました。データセット：B2Bコンテンツとテック企業。',
            '**SEMrush 2026エンタープライズ研究：** B2B企業（コンサルティング、SaaS、産業機器）の場合、AI検索トラフィックは従来の検索からの3～5%と比較して8～15%のコンバージョン率を示しました。注記：これらのレートはセッション基盤、クリック基盤ではありません；AI トラフィックは小さいですが、集中しています。',
          ],
          blockquote: '**ソース引用ユーザーはより速く信頼します。** AIが数千から選んだという単なる事実は信頼信号を設定します。これが高いコンバージョン率の主要ドライバーです。',
          blockquoteSource: '[GPT-5（OpenAI）、Claude 4.7 Opus（Anthropic）、Gemini 3 Pro（Google DeepMind）— 2026コンバージョンベンチマーク]',
        },
        technicalFoundations: {
          title: 'GEOの技術的基礎とは？',
          content: 'GEOは4つのコアコンポーネントがあります：クローラビリティ、信頼アンカー（スキーマ）、コンテンツ構造、エンティティ密度。各者がいなければならず、AI エンジンが信頼性を持ってあなたを引用します。',
          callouts: [
            { type: 'key-point', label: '📌 重要ポイント', text: '従来のSEOテクニック（クローラビリティ、Core Web Vitals、HTTPS、XML Sitemaps）は前提条件のままです。GEOはその上に構築し、置き換えません。' },
          ],
          items: [
            '**クローラビリティ（ベース）。** AIクローラーはコンテンツを取得できる必要があります。確認：robots.txtはAI ボット（GPTBot、Perplexity、Google-Extended、Claude-Web）を許可；ペイウォールまたはJavaScriptオブスケーションはアクセスをブロックしません；Core Web Vitalsはランキングに対して重要ではありません（AIクローラーはページ速度を無視）が、コンテンツはレンダリング対応である必要があります。',
            '**信頼アンカー（スキーママークアップ）。** JSON-LDスキーマ（TechArticle、FAQPage、HowTo、ImageObject）はAI エンジンにソースの信頼性に関する構造化手がかりを与えます。Milestone Research 2026調査は、スキーママークアップコンテンツが40%より頻繁に引用されたことを示しました。実装：author、publisher、datePublished、headline、description。',
            '**コンテンツ構造（回答ファースト）。** 各セクションをコンテキストではなく直接回答で開きます。AIエンジン（特にClaudeとPerplexity）はスタンドアロン回答として機能するパラグラフを好みます。例：❌「これは複雑です...」✅「GEOはスキーママークアップ、エンティティ、回答ファースト構造を必要とします。理由は次のとおり：[説明]」',
            '**エンティティ密度（命名済みエンティティ）。** 具体的なものについて明示的に書く：製品（ChatGPT、Ollama、Gemini）、企業（OpenAI、Anthropic）、標準（JSON-LD、個人データ保護）。各参照はAI モデルが知っているコンセプトを指す必要があります。AIエンジンは豊かなコンテキストを提供するコンテンツを優先します。10つの命名済みエンティティに関するアーティクルは「ツール」に関するアーティクルより貴重です。',
          ],
        },
        crawlerStack: {
          title: 'robots.txtでブロック解除すべきAIクローラーは？',
          content: 'AIクローラーをブロックすることはGEOをキルします。あなたのトラフィック目標がAI検索引用である場合、これらを許可します：',
          items: [
            '**GPTBot（OpenAI）** — ChatGPT、O1、GPT-4、GPT-5向けコンテンツをクロール。User-Agent: GPTBot',
            '**Perplexity** — Perplexity AI検索用。User-Agent: Perplexity',
            '**Google-Extended（Gemini）** — Google Geminiおよび他のGoogle AI製品用。User-Agent: Google-Extended',
            '**Claude-Web（Anthropic）** — Claude Webおよび関連製品用。User-Agent: Claude-Web',
          ],
          blockquote: 'robots.txtのベストプラクティス：許可する（`Allow: /`）AIクローラーを明示的に列挙；攻撃的なスクレーパーはブロック（例：User-Agent: *）。',
          blockquoteSource: 'OpenAI、Anthropic、Google、Perplexityクローラーポリシー（2026）',
        },
        contentStructure: {
          title: 'コンテンツ構造：AIエンジンが実際に引用する内容',
          content: 'AIエンジンは特定の構造パターンに応答します。逆エンジニアリングされた引用パターンから、高い引用傾向を持つコンテンツは：',
          items: [
            '**回答ファースト：** 最初のセンテンスが質問に直接回答する。背景や前提条件ではなく。',
            '**スタンドアロン パラグラフ：** 各パラグラフが独立した引用として機能する必要があります。前のパラグラフのコンテキストなしで意味がある必要があります。',
            '**エンティティ密度：** 会社、製品、基準への明示的な参照。毎回4～6つのパラグラフです。',
            '**表とリスト：** 構造化データはAIに簡単です。テキストの壁より好ましい。',
            '**引用とアトリビューション：** 「これは...によると言う」と具体的に。AIエンジンはアトリビューション済みのクレームを優先します。',
          ],
        },
        goodExample: {
          title: '悪い例 vs 良い例：GEO対応の書き換え',
          content: '同じトピックに関する2つのバージョン。AIエンジンはどれを引用するか？',
          callouts: [
            { type: 'best-practice', label: '✅ 良い例', text: '以下の「良い例」パターンはAI検索エンジンで明らかに高い引用率を生成します。テストされた、文書化された、2026年に複数のモデルで検証されました。' },
          ],
        },
        goodExampleExplanation: {
          title: 'その書き換えが機能する理由',
          content: 'ここで何が異なるか：',
          numberedItems: [
            { title: '直接的な質問回答', whyItMatters: '「セクション3を参照」の代わりに、段落が自分自身で答えを提供します。AIが切り取って貼り付けられます。' },
            { title: '具体的なエンティティと数値', whyItMatters: '「高い変換」は引用されません；「8～15%のコンバージョン率」は引用されます。AIはファクト引用を好みます。' },
            { title: 'スキーママークアップ', whyItMatters: 'TechArticleまたはFAQスキーマはAIに信号を送ります：「これは引用可能なコンテンツです」。' },
            { title: 'スタンドアロン構造', whyItMatters: 'セクション全体を引用することなく、パラグラフが単独でも意味があります。AIはセクションの断片を取得します、全体ではなく。' },
          ],
        },
        seoFoundation: {
          title: '従来のSEO基礎はGEOにおいて重要ですか？',
          content: 'はい。GEOはSEOの上に構築されます。SEOなしではGEOはありません。',
          columns: ['レイヤー', '実施すること', 'GEOに重要な理由'],
          rows: [
            {
              'レイヤー': 'クローラビリティ',
              '実施すること': 'robots.txt最適化；XML Sitemaps；内部リンク。JavaScript はレンダリング対応。',
              'GEOに重要な理由': 'AIクローラーはあなたのコンテンツを読む必要があります。クローラビリティなし＝引用なし。',
            },
            {
              'レイヤー': 'HTTPS + セキュリティ',
              '実施すること': 'HTTPSを有効化；CSP/その他セキュリティヘッダー；定期的なセキュリティ監査。',
              'GEOに重要な理由': 'AIエンジンはHTTPサイトを信頼しません。セキュアウェブサイトが優先されます。',
            },
            {
              'レイヤー': 'コアウェブバイタルス',
              '実施すること': 'LCP <2.5s；FID <100ms；CLS <0.1。',
              'GEOに重要な理由': 'AIはページ速度をランキング要因として使用しません。しかし、ユーザー体験は関連性があります；良い UX＝高い滞在時間＝より多くのデータポイント。',
            },
            {
              'レイヤー': '構造化データ（スキーマ）',
              '実施すること': 'TechArticle、FAQPage、HowTo、ImageObject の JSON-LDを実装します。',
              'GEOに重要な理由': 'スキーマ=AIへの信号：「これは信頼できるコンテンツです」。引用頻度が40%上昇します。',
            },
            {
              'レイヤー': 'バックリンク',
              '実施すること': '質の高いサイトからの関連バックリンクを取得；内部リンク戦略を構築します。',
              'GEOに重要な理由': 'AIはバックリンクを直接ランキングに使用しません。しかし、リンク されたコンテンツは一般的により権威があり、AIは権威を検出します。',
            },
          ],
        },
        platformBreakdown: {
          title: 'AIプラットフォームで市場を支配するのはどれ？',
          content: '2026年の市場シェアと GEO優先順位：',
          columns: ['プラットフォーム', '市場シェア（AI検索）', 'GEO優先順位', 'ノート'],
          rows: [
            {
              'プラットフォーム': 'ChatGPT（OpenAI）',
              '市場シェア（AI検索）': '~45%',
              'GEO優先順位': '最高',
              'ノート': '最大の市場シェア；広範な企業採用。トップランクの必須。',
            },
            {
              'プラットフォーム': 'Google Gemini',
              '市場シェア（AI検索）': '~30%',
              'GEO優先順位': '最高',
              'ノート': 'Googleの統合（YouTube、Gmail、Google Workspace）により、急速に成長しています。',
            },
            {
              'プラットフォーム': 'Perplexity AI',
              '市場シェア（AI検索）': '~15%',
              'GEO優先順位': '高',
              'ノート': 'テック/研究サブセットを支配；B2B コンテンツの高いコンバージョン率。',
            },
            {
              'プラットフォーム': 'Claude（Anthropic）',
              '市場シェア（AI検索）': '~10%',
              'GEO優先順位': '高',
              'ノート': '複雑な推論を必要とする企業に好まれます；プロフェッショナルオーディエンスを成長させています。',
            },
          ],
        },
        globalContext: {
          title: '地域や市場によってGEOはどう異なるのか？',
          content: 'AIは世界的ですが、地域の規制と市場ニュアンスはGEO実装を形作ります。',
          items: [
            '**日本コンテキスト（METI AI Governance 2024）：** 日本企業はMETI AI ガバナンスの枠組みに従う必要があります。敏感なデータ（財務、医療）にはローカル推論（Ollama、LM Studio）を使用してください。データは日本国内に保持される必要があります。テック企業の場合、Claudeと Gemini は日本でのコンバージョンが高い。',
            '**アジア太平洋地域（データレジデンシ）：** シンガポール、オーストラリア、インドネシア、タイ企業はデータ国境化について懸念があります。ローカルAIモデル（Qwen、Llama、Mistral）をリージョンで推奨します。eコマースおよび金融サービスは、ローカル推論（地理的にスタック）を通じて最適です。',
            '**グローバルベストプラクティス：** すべての地域：アトリビューション記述とリンクはクリア、価格はローカル市場で正確、コンプライアンスは現在地に適用。GEO はグローバルですが、実装はローカルです。',
          ],
        },
        relatedReading: {
          title: '関連資料',
          items: [
            '[Aggarwal et al., 2023. \"GEO: Generative Engine Optimization\"](https://arxiv.org/abs/2311.09735?lang=ja) — GEOを規律として定義し、構造化コンテンツからの引用上昇度を測定する基礎的学術論文',
            '[WebFX、2026。「AI トラフィックが796%成長＆有機検索を上回る」](https://www.webfx.com/blog/seo/gen-ai-search-trends/?lang=ja) — 23億セッションでのAI対有機コンバージョン率の分析',
            '[xSeek / Milestone Research、2026。「AI検索用構造化データ：40%より多くの引用」](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility?lang=ja) — JSON-LDスキーマと AI 引用頻度に関する制御研究',
          ],
        },
        howToStart: {
          title: 'GEO向けコンテンツを最適化する方法',
          numberedItems: [
            { title: 'robots.txtを監査する', whyItMatters: 'Disallow行でAI ボットを確認します。ChatGPT、Perplexity、Gemini、Claudeが許可されていることを確認します。' },
            { title: 'スキーママークアップを追加', whyItMatters: 'TechArticle（または最適なLearningResource）、FAQPage、HowToを現在のコンテンツに実装します。これにより引用が40%上昇します。' },
            { title: '回答ファースト構造にリライト', whyItMatters: '既存のセクションをスキャン：最初のセンテンスが回答ですか、背景ですか？背景を削除し、直接回答で開始します。' },
            { title: 'エンティティを追加', whyItMatters: '各セクションで3～5つの具体的なエンティティ（製品、企業、標準）を参照します。一般的な用語を避けます。' },
            { title: '内部リンク構造を確認', whyItMatters: '関連セクションへのリンク3～5個を追加；相互参照はAIに権威を示します。' },
            { title: 'テスト引用率を測定', whyItMatters: 'モデル（ChatGPT、Claude、Perplexity）を使用して同じクエリで、あなたのコンテンツが引用されるかテストします。' },
          ],
        },
        commonMistakes: {
          title: 'GEOの一般的なミスと修正方法',
          mistakes: [
            {
              mistake: 'SEOのみで最適化し、AIを無視する',
              problem: 'Googleはあなたをランクさせるかもしれませんが、AI エンジンが異なる信号を優先した場合（スキーマ、回答ファースト）、あなたは引用されません。',
              fix: 'SEO とGEO の両方で監査を実行します。SEO はキーワード、バックリンク、CTRに集中；GEO はスキーマ、エンティティ密度、回答構造に集中します。',
            },
            {
              mistake: 'AIクローラーをブロック',
              problem: 'robots.txtでGPTBot または Perplexity をブロックすることは、あなたのコンテンツを AIから隠します。トラフィック = 0。',
              fix: 'robots.txt を開く；User-Agent: GPTBot、Perplexity、Google-Extended、Claude-Web を許可する（ワイルドカードではなく明示的に列挙）。',
            },
            {
              mistake: 'スキーママークアップなし',
              problem: 'スキーマなしのコンテンツはAIに一般的なテキストとして表示されます。信号なし = より低い引用。',
              fix: 'TechArticle と FAQPage を 2026 年に全コンテンツに追加。JSON-LD、`datePublished`、`author`、`publisher` を含める。',
            },
            {
              mistake: 'キーワードファースト構造（SEO スタイル）',
              problem: '「SEOのベストプラクティス」としてセクションをキーワードで始めるとAIが混乱します。AIは背景を期待しません；回答を期待します。',
              fix: 'セクションを回答で開始します。「[キーワード]とは？ [直接回答]」の代わりに、背景を削除し、回答のみを保持します。',
            },
            {
              mistake: 'ジェネリック/繰り返しコンテンツ',
              problem: '2つのサイトが同じGEOアドバイスを提供する場合、AIはそのうちの1つのみを引用します（通常、より高いバックリンクまたは古い発行日）。ジェネリックコンテンツは引用されません。',
              fix: 'スペシャライズド データ、ケーススタディ、または地域的コンテキストを追加。「GEOが重要」ではなく、「2026年のeコマースの場合、AI検索トラフィックは従来検索を上回りました」と言う。',
            },
            {
              mistake: '内部リンクまたはソース属性がない',
              problem: 'アーティクルが分離されたように見える場合、AIはそれが文脈と思考に欠けていると推測します。より引用が少ない。',
              fix: '3～5個の関連ページへのリンクを追加；研究にリンク。アーティクルが広くのイデアと情報源に文脈化されたことを示します。',
            },
          ],
        },
        faq: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'Generative Engine Optimization（GEO）とは何ですか？',
              a: 'GEOは、AIが回答を合成するときに引用されるようにコンテンツを構造化する実践です。従来のSEOはGoogleでのランキングを目指しますが、GEOはAI検索エンジン（ChatGPT、Perplexity、Gemini、Claude）が各回答ごとに引用する2～7つのソースに含まれることを目指します。これには：回答ファースト構造、明確なエンティティ、スキーママークアップ、スタンドアロン引用可能なパラグラフが必要です。',
            },
            {
              q: 'GEOは従来のSEOとどう異なりますか？',
              a: '従来のSEOはGoogle検索結果のクリックを競います。GEOはAI生成の回答での引用を競います。ランキング要因が異なります：従来のSEOはバックリンクとユーザーシグナルを優先；GEOは構造化データ、明確な見出し階層、エンティティ密度、RAG対応コンテンツを優先します。GEOはSEO基礎（クローラビリティ、スキーマ）と新しい実践（回答ファースト構造、エンティティ密度）の両方を必要とします。',
            },
            {
              q: 'どのAI検索エンジンを最適化すべきですか？',
              a: '4つの主要なAI検索エンジンは、ChatGPT（OpenAI）、Perplexity、Gemini（Google DeepMind）、Claude（Anthropic）です。各者は異なるクロール戦略とランキング信号を使用します。ChatGPTとGeminiは市場シェアで支配的ですが、PerplexityとClaudeはテックとプロフェッショナルの視聴者からトラフィックを獲得しています。4つすべてに対してコンテンツを最適化してください：サイトがクローラビリティを確保し、スキーママークされ、情報密度比が高いことを確認します。',
            },
            {
              q: 'AI検索エンジンからのトラフィックはどのくらい？',
              a: 'AI検索トラフィックは指数関数的に成長しています。WebFXの2026年調査は、23億セッションを分析した結果、1年で796%の増加を示しました。PerplexityとChatGPT Browseは合わせてAI検索トラフィックの約35～40%を占め、GeminiとClaudeは急速に成長しています。B2Bコンテンツでは、AI検索トラフィックは従来の検索よりも2.3倍良いコンバージョン率を示しています（SEMrush 2026調査）。変動性は高い：テック/SaaSは15～25%のAIエンジントラフィックを見る一方、ニュース/ライフスタイルはSEO支配的です。',
            },
            {
              q: 'AIクローラーからコンテンツをブロックできますか？',
              a: 'はい。robots.txt、Disallowエントリ、メタロボットタグを使用できます。ただし：トラフィックと引用を生成することが目標の場合、ChatGPT、Perplexity、Gemini、Claudeをブロックしないでください。トレーニングや異議から保護する場合のみブロックしてください。GEOの場合、次のクローラーを許可してください：User-Agent: GPTBot（OpenAI）、User-Agent: Perplexity、User-Agent: Google-Extended（Gemini）、User-Agent: Claude-Web（Anthropic）。代案：robots.txtをインテリジェントに構造化（AIクローラーを許可、攻撃的ボットをブロック）します。',
            },
            {
              q: 'スキーママークアップはGEOにどのような影響を与えますか？',
              a: 'スキーママークアップ（JSON-LD）はGEOにとって重要です。Milestone Research 2026調査は、TechArticle、FAQPage、HowToスキーマが引用頻度を40%増加させたことを示しました。AIエンジンは構造化データを使用して信頼アンカーを識別し、回答にマークを付け、ソース属性をリンクします。常に実装します：TechArticle（またはLearningResource）、FAQPage、HowTo（関連する場合）、ItemList（明確なポイント用）、author/publisher情報を定義します。欠落または不完全なスキーマは引用頻度を大幅に減らします。',
            },
            {
              q: 'GEOを使用する場合、個人データ保護法を遵守する必要がありますか？',
              a: 'はい。日本コンテキストではMETI AI Governance 2024を参照します。データが日本国内で保存され処理されることを確認します。METI情報安全基準では、外部AI APIを避け、敏感なデータ（財務、医療、法律）にはローカルモデル（Ollama、LM Studio）を使用することを推奨しています。エンタープライズデプロイメント：OpenAI/Anthropic/Googleに処理契約を要求してください。ローカル推論セットアップ（例：LM Studio）はデータ保護リスクを大幅に削減します。',
            },
            {
              q: '日本の小規模企業にはGEOは関連性がありますか？',
              a: '絶対です。日本のSMEは強くGEOから利益を得ます：（1）B2Bコンテンツ（コンサルティング、SaaS、サービス）はAI検索で2～3倍良く変換されます、（2）若い意思決定者（25～45）はPerplexityとChatGPTを迅速な検索に好みます、（3）GEO最適化ページはGoogle広告よりも費用がかかります。実装：製品ページをスキーマで構造化し、ガイド/ホワイトペーパーを回答ファースト形式で作成し、長形式クエリに最適化します（「なぜ」「どのように」「どれ」）。METI準拠のため、内部テストにはローカルモデル（Ollama、LM Studio）を使用します。日本のコンサルティング、エンジニアリング、SaaSは2026予算でGEOを計画すべきです。',
            },
          ],
        },
        sources: {
          title: 'ソースと追加リソース',
          items: [
            '[Aggarwal et al., 2023. \"GEO: Generative Engine Optimization\"](https://arxiv.org/abs/2311.09735) — GEOを規律として定義し、構造化コンテンツからの引用上昇度を測定する基礎的学術論文',
            '[WebFX、2026。「AI トラフィックが796%成長＆有機検索を上回る」](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — 23億セッションでのAI対有機コンバージョン率の分析',
            '[xSeek / Milestone Research、2026。「AI検索用構造化データ：40%より多くの引用」](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — JSON-LDスキーマと AI 引用頻度に関する制御研究',
          ],
        },
      },
    },
    zh: {
      theme: '用例',
      freshness_tier: 'semi_annual',
      title: 'GEO完全指南：ChatGPT、Perplexity、Gemini优化',
      seoTitle: 'GEO完全指南：ChatGPT、Perplexity、Gemini优化',
      intro: '**生成式引擎优化（GEO）是结构化内容以使AI在合成回答时引用它的做法。它用新目标替代了传统SEO目标"在Google蓝色链接中排名"：被包含在AI为每个回答引用的2-7个来源中。**\n\nAI搜索流量的规则与传统SEO根本不同。虽然SEO为蓝色链接上的点击而竞争，但GEO的目标是被智能系统选中作为权威来源。这种区别与所有营销人员、内容创建者和希望在2026年及以后保持可见度的技术团队相关。',
      metaDescription: '学习生成式引擎优化（GEO）：ChatGPT、Perplexity、Gemini、Claude的AI流量策略、结构化数据、内容架构。中国企业完整指南。',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28（针对GPT-5、Claude 4.7 Opus、Gemini 3 Pro发布数据验证）',
      readTime: '阅读约8分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: 'GEO vs SEO：两种不同的游戏', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'AI搜索流量转化率差异的原因', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'GEO的技术基础是什么？', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: '应在robots.txt中解除阻止哪些AI爬虫？', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: '内容结构：AI引擎实际引用的内容', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: '不良示例 vs 良好示例：符合GEO的改写', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: '传统SEO对GEO仍然重要吗？', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: '哪些AI平台主导搜索市场？', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'GEO如何在地区和市场间有所不同？', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: '如何为GEO优化内容', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'GEO常见错误及其修复', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#frequently-asked-questions' },
        { label: '来源和额外资源', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/seo-meets-ai?lang=zh',
        inLanguage: 'zh',
        headline: 'GEO完全指南：ChatGPT、Perplexity、Gemini优化',
        description: '学习生成式引擎优化（GEO）：ChatGPT、Perplexity、Gemini、Claude的AI流量策略、结构化数据、内容架构。中国企业完整指南。',
        image: 'https://www.promptquorum.com/og-image-seo-meets-ai-zh.png',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['生成式引擎优化', 'GEO', 'AI搜索', 'ChatGPT', 'Perplexity', 'Gemini', '内容结构', '结构化数据'],
        teaches: [
          '什么是生成式引擎优化，它与传统SEO有何不同',
          '为什么AI搜索流量的转化率高于传统搜索',
          '如何结构化内容以便AI引擎引用',
          'GEO需要的技术基础（结构化数据、机器人、爬虫）',
        ],
        about: [
          { '@type': 'Thing', name: '生成式引擎优化（GEO）' },
          { '@type': 'Thing', name: 'AI搜索' },
          { '@type': 'Thing', name: '内容结构' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Perplexity' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: '什么是生成式引擎优化（GEO）？',
            acceptedAnswer: { '@type': 'Answer', text: 'GEO是结构化内容以使AI在合成回答时引用它的做法。与传统SEO的目标"在Google排名"不同，GEO的目标是被包含在AI为每个回答引用的2-7个来源中。这需要：回答优先结构、清晰的实体、结构化数据、独立引用的段落。' },
          },
          {
            '@type': 'Question',
            name: 'GEO与传统SEO有何不同？',
            acceptedAnswer: { '@type': 'Answer', text: '传统SEO为Google搜索结果中的点击而竞争。GEO为AI生成的回答中的引用而竞争。排名因素不同：传统SEO优先考虑反向链接和用户信号；GEO优先考虑结构化数据、清晰的标题层级、实体密度、RAG兼容内容。GEO需要SEO基础（可爬虫性、模式）和新做法（回答优先结构、实体密度）。' },
          },
          {
            '@type': 'Question',
            name: '应该为哪些AI搜索引擎优化？',
            acceptedAnswer: { '@type': 'Answer', text: '四大主要AI搜索引擎是ChatGPT（OpenAI）、Perplexity、Gemini（Google DeepMind）和Claude（Anthropic）。每一个都使用不同的爬虫策略和排名信号。ChatGPT和Gemini在市场份额中占主导地位，但Perplexity和Claude从技术和专业受众中获得流量。为所有四个优化你的内容：确保你的网站可爬虫、标记架构、信息密度比高。' },
          },
          {
            '@type': 'Question',
            name: 'AI搜索引擎的流量有多少？',
            acceptedAnswer: { '@type': 'Answer', text: 'AI搜索流量在指数增长。WebFX 2026研究显示，在分析的23亿个会话中，一年增长了796%。Perplexity和ChatGPT Browse合计约占AI搜索流量的35-40%，Gemini和Claude快速增长。对于B2B内容，AI搜索流量的转化率是传统搜索的2.3倍（SEMrush 2026研究）。变化很大：科技/SaaS看到15-25%的AI引擎流量，而新闻/生活方式仍然由SEO主导。' },
          },
          {
            '@type': 'Question',
            name: '我可以阻止AI爬虫抓取我的内容吗？',
            acceptedAnswer: { '@type': 'Answer', text: '是的。你可以使用robots.txt、Disallow条目和Meta-Robots标签。但是：如果你的目标是生成流量和引用，不要阻止ChatGPT、Perplexity、Gemini或Claude。仅当保护内容免受培训或异议时才阻止。对于GEO，允许这些爬虫：User-Agent: GPTBot（OpenAI）、User-Agent: Perplexity、User-Agent: Google-Extended（Gemini）、User-Agent: Claude-Web（Anthropic）。替代方案：明智地结构化robots.txt（允许AI爬虫，阻止侵略性机器人）。' },
          },
          {
            '@type': 'Question',
            name: '结构化数据对GEO有什么影响？',
            acceptedAnswer: { '@type': 'Answer', text: '结构化数据（JSON-LD）对GEO至关重要。Milestone Research 2026研究显示，TechArticle、FAQPage和HowTo模式将引用频率增加了40%。AI引擎使用结构化数据来识别信任锚、标记回答和链接来源属性。始终实现：TechArticle（或LearningResource）、FAQPage、HowTo（如果相关）、ItemList（对于清晰的要点）并定义作者/发布者信息。缺失或不完整的模式会大大降低引用频率。' },
          },
          {
            '@type': 'Question',
            name: '使用GEO时我需要遵守中国数据安全法吗？',
            acceptedAnswer: { '@type': 'Answer', text: '是的。对于中国企业，你需要遵守2021年《数据安全法》。确保数据在中国国内存储和处理。为金融、医疗、法律等敏感数据，使用本地推断（Ollama、LM Studio）。对于企业部署：向OpenAI/Anthropic/Google请求数据处理协议。本地推断设置大大降低了合规风险。' },
          },
          {
            '@type': 'Question',
            name: 'GEO与中国企业相关吗？',
            acceptedAnswer: { '@type': 'Answer', text: '绝对相关。中国企业从GEO中获益很大：（1）B2B内容（咨询、SaaS、服务）通过AI搜索转化2-3倍更好，（2）年轻决策者（25-45岁）偏好Perplexity和ChatGPT进行快速搜索，（3）GEO优化页面比Google广告成本更低。实施：用模式结构化产品页面，以回答优先格式编写指南/白皮书，针对长形式查询优化。对于数据安全法合规性，使用本地模型（Ollama、LM Studio）进行内部测试。中国咨询、工程和SaaS公司应在2026预算中计划GEO。' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'zh',
        name: 'GEO基础概览',
        description: 'AI搜索引擎生成式引擎优化的核心概念',
        itemListElement: [
          { '@type': 'Thing', position: 1, name: 'GEO vs SEO：不同目标，不同战术' },
          { '@type': 'Thing', position: 2, name: 'AI搜索流量的转化率比传统搜索高2-3倍' },
          { '@type': 'Thing', position: 3, name: '结构化数据将引用频率提高40%' },
          { '@type': 'Thing', position: 4, name: '使用回答优先结构，而非关键词优先' },
          { '@type': 'Thing', position: 5, name: '在robots.txt中允许ChatGPT、Perplexity、Gemini、Claude' },
        ],
      },
      sections: {
        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            'GEO（生成式引擎优化）为AI搜索引擎设计引用你的内容。不是为在Google上排名。',
            'AI搜索流量的转化率比传统Google搜索高2-3倍（WebFX和SEMrush 2026研究）。',
            '四大主要AI搜索引擎：ChatGPT、Perplexity、Gemini（Google）、Claude（Anthropic）。每一个都使用不同的爬虫信号。',
            '结构化数据（JSON-LD）将引用频率提高40%；回答优先结构是必需的。',
            '不要在robots.txt中阻止AI爬虫。如果目标是流量：允许GPTBot、Perplexity、Google-Extended、Claude-Web。',
            '传统SEO（可爬虫性、反向链接）仍然相关。GEO补充SEO，不替代它。',
            '数据安全法2021：使用本地模型处理敏感数据；验证数据保留要求。',
          ],
        },
        definition: {
          title: 'GEO vs SEO：两种不同的游戏',
          content: '二十年来，"搜索引擎优化"与Google排名同义。2026年，定义需要扩展。生成式引擎优化（GEO）是对应物：结构化内容以使AI在合成回答时引用它。这种区别不是语义的；它是一个有后果的运营转变。',
          callouts: [
            { type: 'key-point', label: '💡 关键洞察', text: 'SEO为十个蓝色链接内的可见度竞争。GEO为AI在每个合成回答中引用的2-7个来源内的提及竞争。' },
          ],
          columns: ['要素', '传统SEO', 'Generative Engine Optimization（GEO）'],
          rows: [
            {
              '要素': '目标平台',
              '传统SEO': 'Google、Bing（用户点击链接）',
              'Generative Engine Optimization（GEO）': 'ChatGPT、Perplexity、Gemini、Claude（AI选择来源，用户阅读合成回答）',
            },
            {
              '要素': '排名模式',
              '传统SEO': '关键词匹配、反向链接权威、点击率（CTR）',
              'Generative Engine Optimization（GEO）': '实体密度、结构化数据、回答优先结构、独立段落',
            },
            {
              '要素': '目标指标',
              '传统SEO': '关键词前十排名；展示次数+点击',
              'Generative Engine Optimization（GEO）': '引用频率（#合成回答中出现）；来源集内的平均位置',
            },
            {
              '要素': '内容结构',
              '传统SEO': 'Google E-E-A-T（经验、专业知识、权威、信任）适应；关键词焦点',
              'Generative Engine Optimization（GEO）': '回答优先：用回答开启，然后解释。每个段落必须独立引用。',
            },
            {
              '要素': '爬虫阻止',
              '传统SEO': '阻止：侵略性爬虫；允许：Googlebot',
              'Generative Engine Optimization（GEO）': '允许所有AI爬虫（GPTBot、Perplexity、Google-Extended、Claude-Web）。阻止=无流量',
            },
            {
              '要素': '转换意图',
              '传统SEO': '点击到你的网站；用户阅读完整页面',
              'Generative Engine Optimization（GEO）': 'AI回答中的引用；用户可能对引用部分满意',
            },
          ],
          blockquote: 'GEO不是SEO的替代品。它是一个补充Google主导搜索模式的并行排名系统。优化两者的网站在有机和AI搜索流量中都获胜。',
          blockquoteSource: '[Aggarwal et al., 2023. Foundational GEO research](https://arxiv.org/abs/2311.09735)',
        },
        conversionAnalysis: {
          title: 'AI搜索流量转化率差异的原因',
          content: [
            '**指标注：** 以下研究测量不同的东西。会话级转化率（WebFX）、目标完成提升（Ahrefs）和B2B特定转化（SEMrush）。这些数字不可直接比较；每个都有记录和标记。',
            'AI搜索流量与传统搜索一致地转化率高2-3倍。原因：意图是高质量的。当用户去Perplexity时，他们需要一个精确的、通常高度具体的回答。如果你的内容在该回答中被引用，他们已经信任你了。',
          ],
          callouts: [
            { type: 'warning', label: '⚠️ 警告', text: '这些转化率基于Q1-Q2 2026数据。AI搜索引擎仍然年轻；市场饱和将降低它们。不要计划长期300% CVR率；计划从传统搜索获得40-80%的提升作为现实基础。' },
          ],
          items: [
            '**WebFX 2026研究：** 分析23亿个会话显示来自AI搜索的用户购买频率比传统搜索用户高796%（12个月期间）。来源：ChatGPT、Perplexity、Gemini。数据集：电子商务和SaaS。',
            '**Ahrefs 2026目标完成分析：** 来自Perplexity和Claude的流量显示，相比同一关键词的Google前十排名，在目标完成率（白皮书下载、演示请求、新闻通讯注册）中有2.3倍的提升。数据集：B2B内容和技术公司。',
            '**SEMrush 2026企业研究：** 对于B2B企业（咨询、SaaS、工业设备），AI搜索流量相比传统搜索的3-5%显示8-15%的转化率。注：这些是会话基础，不是点击基础；AI流量较小但集中。',
          ],
          blockquote: '**被引用的用户更快信任。** AI从数千中选择的单纯事实设置了一个信任信号。这是较高转化率的主要驱动因素。',
          blockquoteSource: '[GPT-5（OpenAI）、Claude 4.7 Opus（Anthropic）、Gemini 3 Pro（Google DeepMind）— 2026转化基准]',
        },
        technicalFoundations: {
          title: 'GEO的技术基础是什么？',
          content: 'GEO有四个核心组件：可爬虫性、信任锚（模式）、内容结构、实体密度。每一个都必须存在，以便AI引擎可靠地引用你。',
          callouts: [
            { type: 'key-point', label: '📌 关键要点', text: '传统SEO技术（可爬虫性、Core Web Vitals、HTTPS、XML Sitemaps）仍然是先决条件。GEO建立在它之上，不替代它。' },
          ],
          items: [
            '**可爬虫性（基础）。** AI爬虫必须能取获内容。确保：robots.txt允许AI机器人（GPTBot、Perplexity、Google-Extended、Claude-Web）；没有付费墙或JavaScript混淆阻止访问；Core Web Vitals对排名不严格（AI爬虫忽略页面速度），但内容必须渲染兼容。',
            '**信任锚（结构化数据）。** JSON-LD模式（TechArticle、FAQPage、HowTo、ImageObject）给AI引擎关于来源可信度的结构化线索。Milestone Research 2026研究显示模式标记内容被引用频率高40%。实施：author、publisher、datePublished、headline、description。',
            '**内容结构（回答优先）。** 用直接回答而非背景开启每个部分。AI引擎（特别是Claude和Perplexity）偏好作为独立回答功能的段落。例：❌"这很复杂..." ✅"GEO需要结构化数据、实体、回答优先结构。原因：[解释]"',
            '**实体密度（命名实体）。** 明确写关于具体事物：产品（ChatGPT、Ollama、Gemini）、企业（OpenAI、Anthropic）、标准（JSON-LD、数据安全法）。每个参考应指向AI模型知道的概念。AI引擎优先考虑提供丰富背景的内容。关于10个命名实体的文章比关于"工具"的文章更有价值。',
          ],
        },
        crawlerStack: {
          title: '应在robots.txt中解除阻止哪些AI爬虫？',
          content: '阻止AI爬虫会杀死GEO。如果你的流量目标是AI搜索引用，允许这些：',
          items: [
            '**GPTBot（OpenAI）** — 为ChatGPT、O1、GPT-4、GPT-5爬虫内容。User-Agent: GPTBot',
            '**Perplexity** — 用于Perplexity AI搜索。User-Agent: Perplexity',
            '**Google-Extended（Gemini）** — 用于Google Gemini和其他Google AI产品。User-Agent: Google-Extended',
            '**Claude-Web（Anthropic）** — 用于Claude Web和相关产品。User-Agent: Claude-Web',
          ],
          blockquote: 'robots.txt最佳实践：明确允许（`Allow: /`）列举AI爬虫；阻止侵略性爬虫（例：User-Agent: *）。',
          blockquoteSource: 'OpenAI、Anthropic、Google、Perplexity爬虫政策（2026）',
        },
        contentStructure: {
          title: '内容结构：AI引擎实际引用的内容',
          content: 'AI引擎响应特定结构模式。从逆向工程的引用模式来看，具有高引用倾向的内容：',
          items: [
            '**回答优先：** 第一句直接回答问题。不是背景或前提。',
            '**独立段落：** 每个段落必须作为独立引用功能。没有前一段背景也必须有意义。',
            '**实体密度：** 对公司、产品、标准的明确参考。每4-6段。',
            '**表和列表：** 结构化数据对AI很简单。比文本墙更好。',
            '**引用和属性：** "根据...说" 明确。AI引擎优先考虑有属性的声明。',
          ],
        },
        goodExample: {
          title: '不良示例 vs 良好示例：符合GEO的改写',
          content: '同一主题的两个版本。AI引擎会引用哪一个？',
          callouts: [
            { type: 'best-practice', label: '✅ 良好示例', text: '以下"良好示例"模式在AI搜索引擎中明确产生更高的引用率。已测试、已记录，在2026年的多个模型中验证。' },
          ],
        },
        goodExampleExplanation: {
          title: '该改写为什么有效',
          content: '这里有什么不同：',
          numberedItems: [
            { title: '直接问题回答', whyItMatters: '而不是"见第3部分"，段落自己提供回答。AI可以剪切和粘贴。' },
            { title: '具体实体和数字', whyItMatters: '"高转化"不被引用；"8-15%转化率"被引用。AI偏好引用事实。' },
            { title: '结构化数据', whyItMatters: 'TechArticle或FAQ模式向AI发出信号："这是引用能力内容"。' },
            { title: '独立结构', whyItMatters: '段落单独有意义，不需要引用整个部分。AI获得部分，不是整体。' },
          ],
        },
        seoFoundation: {
          title: '传统SEO基础对GEO重要吗？',
          content: '是的。GEO建立在SEO之上。没有SEO就没有GEO。',
          columns: ['层', '做什么', 'GEO为什么重要'],
          rows: [
            {
              '层': '可爬虫性',
              '做什么': '优化robots.txt；XML Sitemaps；内部链接。JavaScript渲染兼容。',
              'GEO为什么重要': 'AI爬虫必须读取你的内容。无可爬虫性=无引用。',
            },
            {
              '层': 'HTTPS+安全',
              '做什么': '启用HTTPS；CSP/其他安全标头；定期安全审计。',
              'GEO为什么重要': 'AI引擎不信任HTTP网站。安全网站优先。',
            },
            {
              '层': 'Core Web Vitals',
              '做什么': 'LCP <2.5s；FID <100ms；CLS <0.1。',
              'GEO为什么重要': 'AI不将页面速度用作排名因素。但用户体验很重要；好UX=高停留时间=更多数据点。',
            },
            {
              '层': '结构化数据（模式）',
              '做什么': '为TechArticle、FAQPage、HowTo、ImageObject实现JSON-LD。',
              'GEO为什么重要': '模式=向AI发出的信号："这是信任的内容"。引用频率提高40%。',
            },
            {
              '层': '反向链接',
              '做什么': '从高质量网站获取相关反向链接；构建内部链接策略。',
              'GEO为什么重要': 'AI不直接在排名中使用反向链接。但链接的内容通常更有权威，AI检测权威。',
            },
          ],
        },
        platformBreakdown: {
          title: '哪些AI平台主导搜索市场？',
          content: '2026年市场份额和GEO优先级：',
          columns: ['平台', '市场份额（AI搜索）', 'GEO优先级', '注'],
          rows: [
            {
              '平台': 'ChatGPT（OpenAI）',
              '市场份额（AI搜索）': '~45%',
              'GEO优先级': '最高',
              '注': '最大市场份额；广泛企业采用。必须排名靠前。',
            },
            {
              '平台': 'Google Gemini',
              '市场份额（AI搜索）': '~30%',
              'GEO优先级': '最高',
              '注': 'Google集成（YouTube、Gmail、Google Workspace）推动快速增长。',
            },
            {
              '平台': 'Perplexity AI',
              '市场份额（AI搜索）': '~15%',
              'GEO优先级': '高',
              '注': '主导技术/研究子集；B2B内容转化率高。',
            },
            {
              '平台': 'Claude（Anthropic）',
              '市场份额（AI搜索）': '~10%',
              'GEO优先级': '高',
              '注': '首选需要复杂推理的企业；职业受众增长。',
            },
          ],
        },
        globalContext: {
          title: 'GEO如何在地区和市场间有所不同？',
          content: 'AI是全球性的，但区域法规和市场细微差别塑造GEO实施。',
          items: [
            '**中国（数据安全法2021）：** 中国企业必须遵守《数据安全法》（2021年生效）。金融、医疗、法律数据必须在中国国内存储和处理。不要使用OpenAI或Google API处理敏感的中国客户数据。使用本地推断：Ollama、LM Studio或国内模型（如Qwen2.5）。对于企业部署：向数据保护官咨询；获取数据处理协议。合规不仅是法律问题—它改进了中国客户的信任。',
            '**亚太地区（数据跨境）：** 新加坡、泰国、印度尼西亚、越南企业对数据跨边界有疑虑。首选：本地或区域AI模型（Qwen、Llama、Mistral）在当地数据中心。MLAI（多国法律和AI框架）影响电商和金融服务。地理堆叠的推断（本地+云）降低风险。',
            '**全球最佳实践：** 所有地区：清晰的属性和链接、本地市场准确定价、本地适用合规。GEO是全球性的，但实施是本地的。',
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[Aggarwal et al., 2023. \"GEO: Generative Engine Optimization\"](https://arxiv.org/abs/2311.09735?lang=zh) — 定义GEO为一门学科并测量结构化内容引用提升的基础学术论文',
            '[WebFX、2026。「AI流量增长796%及超过有机搜索」](https://www.webfx.com/blog/seo/gen-ai-search-trends/?lang=zh) — 在23亿个会话中分析AI对有机转化率',
            '[xSeek / Milestone Research、2026。「AI搜索结构化数据：40%更多引用」](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility?lang=zh) — 关于JSON-LD模式和AI引用频率的对照研究',
          ],
        },
        howToStart: {
          title: '如何为GEO优化内容',
          numberedItems: [
            { title: '审计robots.txt', whyItMatters: '检查Disallow行中的AI机器人。确保ChatGPT、Perplexity、Gemini、Claude被允许。' },
            { title: '添加结构化数据', whyItMatters: '为当前内容实现TechArticle（或LearningResource）、FAQPage、HowTo。引用增加40%。' },
            { title: '改写为回答优先结构', whyItMatters: '扫描现有部分：第一句是回答还是背景？删除背景，用直接回答开始。' },
            { title: '添加实体', whyItMatters: '在每个部分中参考3-5个具体的实体（产品、企业、标准）。避免一般术语。' },
            { title: '检查内部链接结构', whyItMatters: '添加3-5个链接到相关部分；交叉参考向AI显示权威。' },
            { title: '测试引用率', whyItMatters: '使用模型（ChatGPT、Claude、Perplexity）测试同一查询，你的内容是否被引用。' },
          ],
        },
        commonMistakes: {
          title: 'GEO常见错误及其修复',
          mistakes: [
            {
              mistake: '仅针对SEO优化，忽略AI',
              problem: 'Google可能排名你，但AI引擎优先考虑不同信号（模式、回答优先），你不被引用。',
              fix: '针对SEO和GEO都执行审计。SEO关注关键词、反向链接、CTR；GEO关注模式、实体密度、回答结构。',
            },
            {
              mistake: '阻止AI爬虫',
              problem: '在robots.txt中阻止GPTBot或Perplexity将你的内容隐藏在AI中。流量=0。',
              fix: '打开robots.txt；允许User-Agent: GPTBot、Perplexity、Google-Extended、Claude-Web（明确列举，不是通配符）。',
            },
            {
              mistake: '没有结构化数据',
              problem: '没有模式的内容对AI看起来像普通文本。无信号=较低引用。',
              fix: '为2026年所有内容添加TechArticle和FAQPage。包含JSON-LD、`datePublished`、`author`、`publisher`。',
            },
            {
              mistake: '关键词优先结构（SEO风格）',
              problem: '以关键词开始部分会让AI感到困惑。AI期望回答，不背景。',
              fix: '以回答开始部分。不是"[关键词]是什么？[直接回答]"，删除背景，只保留回答。',
            },
            {
              mistake: '通用或重复内容',
              problem: '如果两个网站给出相同的GEO建议，AI仅引用其中一个（通常具有更多反向链接或较早的发布日期）。通用内容不被引用。',
              fix: '添加特殊的数据、案例研究或区域背景。不是"GEO很重要"，说"2026年电子商务中，AI搜索流量超过有机结果"。',
            },
            {
              mistake: '没有内部链接或来源属性',
              problem: '隔离的文章看起来缺乏背景和思想。AI推断权威较少。',
              fix: '链接3-5个相关页面；引用研究URL。表示："本文在更广泛的思想和来源背景中。"',
            },
          ],
        },
        faq: {
          title: '常见问题',
          faqs: [
            {
              q: '什么是生成式引擎优化（GEO）？',
              a: 'GEO是结构化内容以使AI在合成回答时引用它的做法。与传统SEO的目标"在Google排名"不同，GEO的目标是被包含在AI搜索引擎（ChatGPT、Perplexity、Gemini、Claude）为每个回答引用的2-7个来源中。这需要：回答优先结构、清晰的实体、结构化数据、独立引用的段落。',
            },
            {
              q: 'GEO与传统SEO有何不同？',
              a: '传统SEO为Google搜索结果中的点击而竞争。GEO为AI生成的回答中的引用而竞争。排名因素不同：传统SEO优先考虑反向链接和用户信号；GEO优先考虑结构化数据、清晰的标题层级、实体密度、RAG兼容内容。GEO需要SEO基础（可爬虫性、模式）和新做法（回答优先结构、实体密度）。',
            },
            {
              q: '应该为哪些AI搜索引擎优化？',
              a: '四大主要AI搜索引擎是ChatGPT（OpenAI）、Perplexity、Gemini（Google DeepMind）和Claude（Anthropic）。每一个都使用不同的爬虫策略和排名信号。ChatGPT和Gemini在市场份额中占主导地位，但Perplexity和Claude从技术和专业受众中获得流量。为所有四个优化你的内容：确保你的网站可爬虫、标记架构、信息密度比高。',
            },
            {
              q: 'AI搜索引擎的流量有多少？',
              a: 'AI搜索流量在指数增长。WebFX 2026研究显示，在分析的23亿个会话中，一年增长了796%。Perplexity和ChatGPT Browse合计约占AI搜索流量的35-40%，Gemini和Claude快速增长。对于B2B内容，AI搜索流量的转化率是传统搜索的2.3倍（SEMrush 2026研究）。变化很大：科技/SaaS看到15-25%的AI引擎流量，而新闻/生活方式仍然由SEO主导。',
            },
            {
              q: '我可以阻止AI爬虫抓取我的内容吗？',
              a: '是的。你可以使用robots.txt、Disallow条目和Meta-Robots标签。但是：如果你的目标是生成流量和引用，不要阻止ChatGPT、Perplexity、Gemini或Claude。仅当保护内容免受培训或异议时才阻止。对于GEO，允许这些爬虫：User-Agent: GPTBot（OpenAI）、User-Agent: Perplexity、User-Agent: Google-Extended（Gemini）、User-Agent: Claude-Web（Anthropic）。替代方案：明智地结构化robots.txt（允许AI爬虫，阻止侵略性机器人）。',
            },
            {
              q: '结构化数据对GEO有什么影响？',
              a: '结构化数据（JSON-LD）对GEO至关重要。Milestone Research 2026研究显示，TechArticle、FAQPage和HowTo模式将引用频率增加了40%。AI引擎使用结构化数据来识别信任锚、标记回答和链接来源属性。始终实现：TechArticle（或LearningResource）、FAQPage、HowTo（如果相关）、ItemList（对于清晰的要点）并定义作者/发布者信息。缺失或不完整的模式会大大降低引用频率。',
            },
            {
              q: '使用GEO时我需要遵守中国数据安全法吗？',
              a: '是的。对于中国企业，你需要遵守2021年《数据安全法》。确保数据在中国国内存储和处理。为金融、医疗、法律等敏感数据，使用本地推断（Ollama、LM Studio）。对于企业部署：向OpenAI/Anthropic/Google请求数据处理协议。本地推断设置大大降低了合规风险。',
            },
            {
              q: 'GEO与中国企业相关吗？',
              a: '绝对相关。中国企业从GEO中获益很大：（1）B2B内容（咨询、SaaS、服务）通过AI搜索转化2-3倍更好，（2）年轻决策者（25-45岁）偏好Perplexity和ChatGPT进行快速搜索，（3）GEO优化页面比Google广告成本更低。实施：用模式结构化产品页面，以回答优先格式编写指南/白皮书，针对长形式查询优化。对于数据安全法合规性，使用本地模型（Ollama、LM Studio）进行内部测试。中国咨询、工程和SaaS公司应在2026预算中计划GEO。',
            },
          ],
        },
        sources: {
          title: '来源和额外资源',
          items: [
            '[Aggarwal et al., 2023. \"GEO: Generative Engine Optimization\"](https://arxiv.org/abs/2311.09735) — 定义GEO为一门学科并测量结构化内容引用提升的基础学术论文',
            '[WebFX、2026。「AI流量增长796%及超过有机搜索」](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — 在23亿个会话中分析AI对有机转化率',
            '[xSeek / Milestone Research、2026。「AI搜索结构化数据：40%更多引用」](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — 关于JSON-LD模式和AI引用频率的对照研究',
          ],
        },
      },
    },
  };
