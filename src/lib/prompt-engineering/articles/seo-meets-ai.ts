// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: seo-meets-ai
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('seo-meets-ai');

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-en.webp',
      title: 'SEO Meets AI: How GEO Is Replacing the Old Playbook',
      intro: '**Generative Engine Optimization (GEO) is the practice of structuring content so AI search engines (ChatGPT, Perplexity, Gemini, Claude) cite it when synthesizing answers — replacing the traditional SEO goal of ranking among Google\'s blue links with a new goal of being named in the 2–7 sources an AI quotes per response.**\n\nGEO does not replace traditional SEO; it adds a second optimization layer for a search landscape where AI platforms still send under 1% of website traffic (0.32% in SE Ranking\'s 2026 data) but grew 796% in two years (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 against Google Search Central, OpenAI, Anthropic and Perplexity crawler documentation, SE Ranking (June 2026) and WebFX (March 2026)',
      readTime: '8 min read',

      seoTitle: 'SEO Meets AI: How GEO Gets Your Content Cited by ChatGPT (2026)',

      metaDescription: 'How to get cited by ChatGPT, Perplexity and Gemini: answer-first structure, AI crawlers in robots.txt, schema, and tracking AI citations in 2026.',

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
        { label: 'Which AI Platforms Send the Most Referral Traffic?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'How Does GEO Differ Across Regions and Markets?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'How to Optimize Content for GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'How Do You Track AI Citations?', anchor: '#how-to-track-ai-citations' },
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
        dateModified: '2026-11-02',
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
        image: buildOgImageObject(OG_SLUG, 'en'),
        keywords: ['GEO', 'SEO', 'generative engine optimization', 'AI search', 'get cited by ChatGPT', 'Perplexity', 'Google AI Overviews', 'JSON-LD schema', 'AI citations', 'AI crawlers'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
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
              text: 'SEO (Search Engine Optimization) focuses on ranking pages in traditional search engine results like Google and Bing, where users choose from a list of blue links. GEO (Generative Engine Optimization) focuses on getting your content cited inside AI-generated answers from ChatGPT, Perplexity, Gemini, and Claude — where users receive one synthesized response rather than a list of options. Both are necessary: Google states that a page only needs to be indexed and eligible to show a snippet to appear in AI Overviews and AI Mode, so classic SEO fundamentals remain the entry ticket.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does AI search traffic convert better than organic search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Somewhat on average, and by much more in some B2B cases. A WebFX analysis of 2.3 billion sessions found generative AI visitors completed a measurable action in 54.15% of sessions vs. 45.23% for organic search. Ahrefs reported 23× higher conversion rates from AI search for its own site. For e-commerce, the evidence is mixed — an analysis of 973 e-commerce sites reported by Practical Ecommerce found AI search converted worse than organic. The advantage is clearest for B2B and high-consideration purchases.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does schema markup improve AI citation rates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pages with correct JSON-LD schema markup earn up to 40% more rich-result impressions, according to one vendor study, but the evidence for a direct AI-citation lift is weak. A 2025 SearchAtlas study found that schema coverage alone does not consistently increase LLM citation frequency across OpenAI, Gemini, and Perplexity, and Google states that no special schema is required for AI Overviews or AI Mode. Use schema to describe the page accurately; content authority and answer-first structure remain the stronger signals.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast is AI search growing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Generative AI traffic grew 796% from January 2024 to December 2025, with session conversions growing 6,432% in the same period. AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025. Despite this growth, WebFX found that generative AI accounts for only 0.18% of total web sessions — direct (35.51%) and organic search (27.12%) still dominate. SE Ranking, tracking 101,574 websites from January 2025 to April 2026, measured AI platforms at 0.32% of total website traffic, with ChatGPT delivering 74.78% of that AI referral traffic.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is SEO still relevant in the age of AI search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — traditional SEO is the foundation for GEO, not an alternative to it. Google says a page must be indexed and snippet-eligible to appear in AI Overviews and AI Mode, with no extra technical requirements, so crawlability, indexing and content quality come first. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals that boost traditional rankings also strengthen AI citation probability. The two disciplines share foundational requirements — the difference is that GEO adds answer-first structure, entity density, and schema markup as additional layers.',
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
              text: 'llms.txt is a proposed convention (not a formal standard) for placing a markdown summary of your site in the site root so language models can read it. No major AI provider documents using it for crawling or citation, and Google states that you do not need new machine-readable files or AI text files to appear in AI Overviews or AI Mode. It is optional, cheap to add, and useful when a person pastes its URL into an assistant, but do not expect it to change citations on its own.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get my content cited by ChatGPT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Allow OpenAI\'s search crawler (OAI-SearchBot) in robots.txt, make sure the page is indexable, and write each section so it answers one question in its first sentence with a specific, sourced fact. ChatGPT cites passages, not whole pages, so standalone paragraphs, lists, tables and FAQ blocks are easier to quote than long prose. No technique guarantees a citation: ChatGPT chooses sources per query, and the same prompt can return different sources on different days.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I track whether AI engines cite my site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Combine three sources. First, Google Search Console: AI Overviews and AI Mode data is part of the Performance report totals, and since June 2026 a separate Search generative AI report shows impressions by page, country and device. Second, your analytics: filter referral traffic from chatgpt.com, perplexity.ai, gemini.google.com and claude.ai. Third, a fixed set of 10–20 prompts that you run on a schedule and log by hand or with a third-party monitoring tool. Treat single runs as anecdotes; citations vary between runs.',
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
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) gets content cited in AI-generated answers; SEO gets pages ranked in blue-link results — both are required in 2026',
            'AI traffic converts at a 54.15% session conversion rate vs. 45.23% for organic search (WebFX) — but accounts for just 0.18% of total sessions in that dataset and 0.32% in SE Ranking\'s',
            'Schema markup helps machines parse a page, but Google says AI Overviews and AI Mode need no special schema, and one 2026 study found no consistent citation lift from schema alone',
            'Google requires only that a page is indexed and snippet-eligible to appear in AI Overviews and AI Mode — classic SEO fundamentals remain the entry ticket',
            'ChatGPT delivers 74.78% of AI referral traffic (SE Ranking, 2026), ahead of Gemini (11.56%) and Perplexity (7.23%) — optimize for ChatGPT first',
            'Lists, tables and FAQ blocks are easier for AI systems to extract and quote than dense prose — structure each section to stand alone',
            'AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025 — the channel is small but growing at unprecedented speed',
            'Allow the search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot); GPTBot and ClaudeBot control training use, not search citations. llms.txt is optional — no major provider documents using it',
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
              text: 'Google states that a page needs only to be indexed and eligible to show a snippet to appear in AI Overviews and AI Mode. Crawlability, indexing and content quality are therefore the entry ticket for GEO visibility on Google — not optional.',
            },
          ],
          columns: ['Aspect', 'Traditional SEO', 'Generative Engine Optimization (GEO)'],
          rows: [
            { Aspect: 'Primary goal', 'Traditional SEO': 'Rank #1—10 in Google/Bing', 'Generative Engine Optimization (GEO)': 'Get cited in AI-generated answers' },
            { Aspect: 'Target platforms', 'Traditional SEO': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { Aspect: 'Core success metric', 'Traditional SEO': 'Rankings, clicks, organic traffic', 'Generative Engine Optimization (GEO)': 'AI citations, brand mentions in AI responses' },
            { Aspect: 'Content approach', 'Traditional SEO': 'Keywords, backlinks, metadata', 'Generative Engine Optimization (GEO)': 'Entity-rich, structured, answer-first facts' },
            { Aspect: 'Time to results', 'Traditional SEO': '4—6 months', 'Generative Engine Optimization (GEO)': '6—12 months' },
            { Aspect: 'Session conversion (WebFX)', 'Traditional SEO': '45.23% (organic)', 'Generative Engine Optimization (GEO)': '54.15% (generative AI)' },
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
              text: 'Conversion lift varies by industry. WebFX\'s cross-industry data shows 54.15% vs. 45.23% session conversion, while one e-commerce analysis found AI traffic converting worse than organic. Test your own traffic to confirm the advantage applies to your sector.',
            },
          ],
          items: [
            'Generative AI traffic grew **796% in two years**',
            'AI-referred visitors converted at a **54.15% session conversion rate** vs. 45.23% for organic search',
            'AI traffic conversions grew **6,432% year-over-year** — faster than session growth, meaning a higher share of visitors are converting',
          ],
          blockquote: 'The premium is larger in some B2B cases. Ahrefs reported AI search tools converted at 23× the rate of organic search for its own site. SEMrush found AI search traffic converted at 4.4× the organic rate across a study of 500+ B2B topics. However, an analysis of 973 e-commerce websites reported by Practical Ecommerce found AI-referred visitors converted worse than organic — the advantage is task- and sector-dependent. WebFX defines session conversion as a measurable action (form submission, download, quote request) within the same session, so the 54.15% and 45.23% figures are not purchase rates. AI citation is also not deterministic: the same question can return different sources from different models, and from the same model on different days.',
        },
        technicalFoundations: {
          title: 'What Are the Technical Foundations of GEO?',
          content: [
            '**Correct JSON-LD schema markup helps search engines and AI systems parse who wrote a page, what it answers and when it was updated — but it is not a citation switch: Google states that no special schema is needed to appear in AI Overviews or AI Mode.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) is the schema format recommended by Google and the most AI-parseable structured data format. Placed in a `<script>` block in the page `<head>`, it decouples semantic labels from visible HTML — which keeps it separate from the visible HTML and easier to maintain than inline Microdata or RDFa. When combined with [well-structured writing](/prompt-engineering/write-better-code-with-ai), schema markup becomes your GEO foundation.',
            'The schema types that describe a content page most accurately:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Key Point',
              text: 'A 2025 SearchAtlas study found that schema markup alone does not guarantee higher AI citation rates, and Google says structured data must match the visible page text. Content authority and answer-first structure are the stronger signals.',
            },
          ],
          items: [
            '**Article / TechArticle** — establishes authorship, publication date, and topic category',
            '**FAQPage** — Q&A pairs extracted directly by AI answer engines',
            '**HowTo** — numbered steps preferred by AI for procedural queries',
            '**Organization** — entity recognition: who you are, what you do, your official URL',
            '**BreadcrumbList** — signals content hierarchy and topical depth',
          ],
          blockquote: 'One important caveat: a 2025 SearchAtlas study analyzing schema adoption vs. AI citation frequency across OpenAI, Gemini, and Perplexity found that higher schema coverage alone does not consistently produce higher LLM citation rates. Schema makes content easier to parse — but content authority, entity density, and answer-first structure remain the stronger citation signals.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'Which AI Crawlers Should You Unblock in robots.txt?',
          content: [
            '**Each AI provider runs separate bots for search, training and user-requested fetches — allow the search bots if you want citations, and decide on the training bots separately.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: 'Check your `robots.txt` against the bot names below and test with the live file. An `llms.txt` file is optional: it is a proposed convention at [llmstxt.org](https://llmstxt.org), and no major AI provider documents using it for crawling or citation.',
            },
          ],
          items: [
            '**OAI-SearchBot** — OpenAI\'s crawler for ChatGPT search results; blocking it hides your site from ChatGPT search answers',
            '**GPTBot** — OpenAI\'s crawler for training generative models; blocking it does not remove you from ChatGPT search',
            '**ChatGPT-User** — fetches a page when a person asks ChatGPT about it; OpenAI says robots.txt rules may not apply to these user-initiated requests',
            '**Claude-SearchBot** and **Claude-User** — Anthropic\'s bots for search indexing and user-requested retrieval; **ClaudeBot** is the training crawler',
            '**PerplexityBot** — surfaces and links sites in Perplexity results and is not used for training; **Perplexity-User** handles user requests and generally ignores robots.txt',
            '**Googlebot** — the crawler behind Google Search indexing, which AI Overviews and AI Mode draw on; the **Google-Extended** token controls Gemini training and grounding, and does not affect Search inclusion or ranking',
          ],
          blockquote: 'Blocking a training bot (GPTBot, ClaudeBot, Google-Extended) is a separate decision from blocking a search bot. Avoid blocking by IP address: Anthropic notes that IP blocking can stop its bots from reading robots.txt at all.',
        },
        contentStructure: {
          title: 'Content Structure: What AI Engines Actually Cite',
          content: [
            '**Lists, tables and FAQ blocks are easier for AI systems to extract and quote than dense prose, because retrieval works on passages: a standalone, answer-first section can be cited without the rest of the page.**',
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
          blockquote: 'PromptQuorum dispatches one prompt to up to 25 AI models simultaneously — including GPT-5.6 (OpenAI), Claude Opus 5 (Anthropic), Gemini 3 Pro (Google DeepMind), and local models via Ollama — and returns all responses side-by-side for comparison.',
        },
        goodExampleExplanation: {
          content: [
            'Four named entities, one specific number (25), one verifiable function (side-by-side comparison). AI engines extract and attribute this immediately. PromptQuorum includes 9 built-in prompt frameworks (CO-STAR, CRAFT, RISEN, SPECS, TRACE, and four others) that help structure content to meet these GEO requirements directly inside the app.',
          ],
        },
        seoFoundation: {
          title: 'Does Traditional SEO Still Matter for GEO?',
          content: [
            '**Google AI Overviews and AI Mode draw on the same index as classic search: a page must be indexed and eligible to show a snippet, so SEO fundamentals feed GEO visibility.**',
            'Google\'s documentation on AI features states there are no additional requirements to appear in AI Overviews or AI Mode, and that no special optimization is needed beyond standard SEO best practices. Third-party studies find that pages already visible in classic results are cited more often, but those studies measure correlation, and the cited pages do not always match the top-10 results.',
            'The hybrid SEO + GEO stack:',
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
              Why: 'Trusted links may add authority; AI citation effect unproven',
            },
          ],
        },
        platformBreakdown: {
          title: 'Which AI Platforms Send the Most Referral Traffic?',
          content: [
            '**ChatGPT delivers 74.78% of AI referral traffic to websites; Gemini follows at 11.56%, Perplexity at 7.23%, Copilot at 3.51% and Claude at 2.62% (SE Ranking, 101,574 websites, January 2025–April 2026) — making ChatGPT the highest-leverage GEO target for most sites.**',
            'These are shares of visits that AI platforms send to websites, not shares of users or queries. Other trackers report different splits (StatCounter put ChatGPT at 78.16% in March 2026; a B2B-focused tracker put it at 62.6%), so treat the ranking as stable and the exact percentage as approximate.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Did You Know?',
              text: 'Perplexity shows its sources with every answer, which makes it the easiest platform for checking whether your content is cited. Together, AI platforms still send only 0.32% of total website traffic (SE Ranking, 2026), so keep classic search in your plan.',
            },
          ],
          columns: ['Platform', 'AI referral share', 'Search crawler', 'Citation Style'],
          rows: [
            {
              Platform: 'ChatGPT (OpenAI)',
              'AI referral share': '74.78%',
              'Search crawler': 'OAI-SearchBot',
              'Citation Style': 'In-line source links with cited excerpts',
            },
            {
              Platform: 'Microsoft Copilot',
              'AI referral share': '3.51%',
              'Search crawler': 'Bingbot',
              'Citation Style': 'Bing-indexed pages, footnote citations',
            },
            {
              Platform: 'Google Gemini / AI Overviews',
              'AI referral share': '11.56%',
              'Search crawler': 'Googlebot',
              'Citation Style': 'Pages indexed and snippet-eligible in Google Search',
            },
            {
              Platform: 'Perplexity AI',
              'AI referral share': '7.23%',
              'Search crawler': 'PerplexityBot',
              'Citation Style': 'Numbered source list with every answer',
            },
            {
              Platform: 'Claude (Anthropic)',
              'AI referral share': '2.62%',
              'Search crawler': 'Claude-SearchBot',
              'Citation Style': 'Cites sources when web search is enabled',
            },
          ],
          blockquote: 'Share data comes from SE Ranking (June 2026). Platform splits shift month to month, so re-check the figures before basing budget decisions on them.',
        },
        globalContext: {
          title: 'How Does GEO Differ Across Regions and Markets?',
          content: [
            'European companies must balance GEO investment with EU AI Act compliance, which requires transparency about AI-generated content and prohibits deceptive AI systems. Mistral AI (France) is expanding its European search presence — content optimized for European AI platforms must align with the EU\'s stringent data source attribution requirements.',
            'In China, generative search is dominated by **Baidu ERNIE** and **Alibaba Qwen**-based search products. GEO strategies targeting Chinese markets require optimization for Chinese-language entity graphs, distinct from Google or OpenAI knowledge bases. China\'s rules on generative AI, including the Interim Measures (2023) and the 2025 measures on labelling AI-generated content, require providers to label AI-generated content, which affects how Chinese platforms present sources.',
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
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'How Do You Track AI Citations?',
          content: [
            '**Track AI citations with three sources: Google Search Console for Google\'s AI features, referral traffic in your analytics for ChatGPT, Perplexity, Gemini and Claude, and a fixed prompt set you re-run on a schedule.**',
            'Since June 2026, Search Console includes a Search generative AI performance report with impressions in AI Overviews, AI Mode and Discover by page, country and device; the same data stays in the overall Performance report. It shows impressions, not the answer text, so it tells you where you appear, not why.',
          ],
          items: [
            '**Search Console** — open the generative AI report and note which pages gain impressions after a structure change',
            '**Analytics referrals** — segment visits from chatgpt.com, perplexity.ai, gemini.google.com and claude.ai; expect small numbers',
            '**Prompt set** — keep 10–20 questions your page should answer, run them weekly in each assistant, and log which URLs are named',
            '**Server logs** — count requests from OAI-SearchBot, Claude-SearchBot and PerplexityBot to confirm the pages are being fetched',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: 'AI answers vary between runs. One citation, or one missing citation, is an anecdote. Compare a prompt set over several weeks before concluding that a change worked.',
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
          id: 'how-to-optimize-content-for-geo',
          title: 'How to Optimize Content for GEO (Generative Engine Optimization)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: 'Prioritize ChatGPT first (74.78% of AI referral traffic), then Gemini and Perplexity. This 80/20 approach delivers the most return without spreading effort too thin across smaller platforms.',
            },
          ],
          numberedItems: [
            '**Audit your current content through an AI lens: searchability and citability.** Pull 10 of your highest-traffic pages and ask ChatGPT, Perplexity, and Google AI Overviews if they cite or recommend your content when answering queries related to your topic. Flag gaps where you\'re not appearing.',
            '**Structure your content as answer-first with verifiable facts and clear schema markup.** Lead each section with a direct answer (not a question). Support every claim with sources or clear reasoning. Add JSON-LD schema (Article, FAQPage, HowTo, Breadcrumb) so AI crawlers understand your content structure.',
            '**Include the keyword intent, not just the keyword.** If you rank for \'best AI tools,\' GEO requires you to answer \'What makes an AI tool the best?\' (accuracy, speed, cost, ease of use). AI systems use intent-matching, not keyword-matching—ensure your answer matches what AI systems infer the user wants.',
            '**Build FAQ sections that answer derived questions AI systems ask.** AI systems decompose broad queries into sub-questions. If you target \'AI hallucinations,\' add FAQ sections answering \'How common are AI hallucinations?\', \'Can hallucinations be prevented?\', \'Which models hallucinate most?\'.',
            '**Check your robots.txt and, optionally, add an llms.txt file.** Allow OAI-SearchBot, Claude-SearchBot, PerplexityBot and Googlebot. An llms.txt file is a proposed convention that no major AI provider documents using, so treat it as optional documentation, not a ranking lever.',
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
              problem: 'Pages that are not indexed or not snippet-eligible cannot appear in Google AI Overviews or AI Mode. GEO requires SEO as a foundation.',
              fix: 'Dual-layer: maintain strong E-E-A-T signals, Core Web Vitals, and backlink quality (SEO). Add answer-first structure, schema markup, and FAQ sections on top (GEO). They reinforce each other.',
            },
            {
              mistake: 'Over-relying on schema markup alone to improve AI citations.',
              problem: 'Schema makes content easier for AI systems to parse, but authority and content structure are stronger citation signals. A page with perfect schema but vague prose won\'t be cited.',
              fix: 'Combine layers: add JSON-LD schema + answer-first structure + entity density. The 2025 SearchAtlas study found schema alone has limited impact without strong content authority.',
            },
            {
              mistake: 'Optimizing for all AI platforms equally instead of prioritizing by market share.',
              problem: 'ChatGPT sends 74.78% of AI referral traffic. Spreading optimization effort across 5 platforms dilutes ROI.',
              fix: 'Prioritize ChatGPT first (OAI-SearchBot crawling, answer-first structure, FAQ sections). Then optimize for Gemini and Perplexity (which lists its sources with every answer). Extend to Claude afterward.',
            },
            {
              mistake: 'Writing dense paragraphs instead of list-based content.',
              problem: 'Dense prose is harder to quote than lists and tables. AI systems use RAG (Retrieval-Augmented Generation) and extract structured sections more reliably.',
              fix: 'Convert prose descriptions into bullet lists where possible. Use tables for comparisons. Keep paragraphs to 2–3 sentences max. AI crawlers sample the first sentence of each heading to decide whether to extract the section.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between SEO and GEO?',
              a: 'SEO (Search Engine Optimization) focuses on ranking pages in traditional search engine results like Google and Bing, where users choose from a list of blue links. GEO (Generative Engine Optimization) focuses on getting your content cited inside AI-generated answers from ChatGPT, Perplexity, Gemini, and Claude — where users receive one synthesized response rather than a list of options. Both are necessary: Google states that a page only needs to be indexed and eligible to show a snippet to appear in AI Overviews and AI Mode, so classic SEO fundamentals remain the entry ticket.',
            },
            {
              q: 'Does AI search traffic convert better than organic search?',
              a: 'Somewhat on average, and by much more in some B2B cases. A WebFX analysis of 2.3 billion sessions found generative AI visitors completed a measurable action in 54.15% of sessions vs. 45.23% for organic search. Ahrefs reported 23× higher conversion rates from AI search for its own site. For e-commerce, the evidence is mixed — an analysis of 973 e-commerce sites reported by Practical Ecommerce found AI search converted worse than organic. The advantage is clearest for B2B and high-consideration purchases.',
            },
            {
              q: 'How much does schema markup improve AI citation rates?',
              a: 'Pages with correct JSON-LD schema markup earn up to 40% more rich-result impressions, according to one vendor study, but the evidence for a direct AI-citation lift is weak. A 2025 SearchAtlas study found that schema coverage alone does not consistently increase LLM citation frequency across OpenAI, Gemini, and Perplexity, and Google states that no special schema is required for AI Overviews or AI Mode. Use schema to describe the page accurately; content authority and answer-first structure remain the stronger signals.',
            },
            {
              q: 'How fast is AI search growing?',
              a: 'Generative AI traffic grew 796% from January 2024 to December 2025, with session conversions growing 6,432% in the same period. AI-generated traffic to U.S. retail sites increased 4,700% year-over-year as of July 2025. Despite this growth, WebFX found that generative AI accounts for only 0.18% of total web sessions — direct (35.51%) and organic search (27.12%) still dominate. SE Ranking, tracking 101,574 websites from January 2025 to April 2026, measured AI platforms at 0.32% of total website traffic, with ChatGPT delivering 74.78% of that AI referral traffic.',
            },
            {
              q: 'Is SEO still relevant in the age of AI search?',
              a: 'Yes — traditional SEO is the foundation for GEO, not an alternative to it. Google says a page must be indexed and snippet-eligible to appear in AI Overviews and AI Mode, with no extra technical requirements, so crawlability, indexing and content quality come first. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals that boost traditional rankings also strengthen AI citation probability. The two disciplines share foundational requirements — the difference is that GEO adds answer-first structure, entity density, and schema markup as additional layers.',
            },
            {
              q: 'What\'s the first step to optimize my content for GEO?',
              a: 'Start by auditing your current content through an AI lens: take 10 of your highest-traffic pages and query ChatGPT, Perplexity, and Google AI Overviews with questions related to your topic. Check whether your content is cited or recommended. This identifies gaps where you\'re not appearing in AI answers. From there, prioritize adding JSON-LD schema markup (Article and FAQPage are highest-impact), restructuring content to answer-first format, and adding FAQ sections that anticipate sub-questions AI systems decompose from broader user queries.',
            },
            {
              q: 'What is llms.txt and do I need one?',
              a: 'llms.txt is a proposed convention (not a formal standard) for placing a markdown summary of your site in the site root so language models can read it. No major AI provider documents using it for crawling or citation, and Google states that you do not need new machine-readable files or AI text files to appear in AI Overviews or AI Mode. It is optional, cheap to add, and useful when a person pastes its URL into an assistant, but do not expect it to change citations on its own.',
            },
            {
              q: 'How do I get my content cited by ChatGPT?',
              a: 'Allow OpenAI\'s search crawler (OAI-SearchBot) in robots.txt, make sure the page is indexable, and write each section so it answers one question in its first sentence with a specific, sourced fact. ChatGPT cites passages, not whole pages, so standalone paragraphs, lists, tables and FAQ blocks are easier to quote than long prose. No technique guarantees a citation: ChatGPT chooses sources per query, and the same prompt can return different sources on different days.',
            },
            {
              q: 'How can I track whether AI engines cite my site?',
              a: 'Combine three sources. First, Google Search Console: AI Overviews and AI Mode data is part of the Performance report totals, and since June 2026 a separate Search generative AI report shows impressions by page, country and device. Second, your analytics: filter referral traffic from chatgpt.com, perplexity.ai, gemini.google.com and claude.ai. Third, a fixed set of 10–20 prompts that you run on a schedule and log by hand or with a third-party monitoring tool. Treat single runs as anecdotes; citations vary between runs.',
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
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — vendor study on JSON-LD schema and AI citation frequency',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — referral shares by AI platform across 101,574 websites, January 2025–April 2026',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — eligibility for AI Overviews and AI Mode, structured data and machine-readable files',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — impressions in AI Overviews, AI Mode and Discover',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot and ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User and Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot and Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — citation analysis of schema coverage across OpenAI, Gemini and Perplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — 4,700% year-over-year growth in AI traffic to U.S. retail sites, July 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — summary of the 973-site e-commerce conversion analysis',
          ],
        },
      },
    },
    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-de.webp',
      title: 'SEO trifft KI: Wie GEO das alte Regelwerk ersetzt',
      intro: '**Generative Engine Optimization (GEO) ist die Praxis, Inhalte so zu strukturieren, dass KI-Suchmaschinen (ChatGPT, Perplexity, Gemini, Claude) sie zitieren, wenn sie Antworten zusammenstellen — das klassische SEO-Ziel, unter Googles blauen Links zu ranken, wird dabei durch ein neues Ziel ergänzt: unter den 2–7 Quellen genannt zu werden, die eine KI pro Antwort zitiert.**\n\nGEO ersetzt klassisches SEO nicht, sondern fügt eine zweite Optimierungsebene hinzu: KI-Plattformen senden bislang weniger als 1 % des Website-Traffics (0,32 % in den Daten von SE Ranking 2026), sind aber in zwei Jahren um 796 % gewachsen (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 gegen die Crawler-Dokumentation von Google Search Central, OpenAI, Anthropic und Perplexity, SE Ranking (Juni 2026) und WebFX (März 2026)',
      readTime: '8 Min. Lesezeit',

      seoTitle: 'SEO trifft KI: So werden Sie von ChatGPT zitiert (2026)',

      metaDescription: 'So werden Sie von ChatGPT, Perplexity und Gemini zitiert: Antwort-zuerst-Struktur, KI-Crawler in der robots.txt, Schema und Zitate nachverfolgen (2026).',

      educationalLevel: 'Beginner',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: Zwei verschiedene Spiele', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Warum KI-Traffic anders konvertiert', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'Was sind die technischen Grundlagen von GEO?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'KI-Crawlbarkeit: Welche KI-Crawler sollten Sie in der robots.txt zulassen?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Inhaltsstruktur: Was KI-Systeme tatsächlich zitieren', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Schlecht vs. gut: Eine GEO-konforme Neufassung', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'Spielt klassisches SEO für GEO noch eine Rolle?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Welche KI-Plattformen senden den meisten Referral-Traffic?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'Wie unterscheidet sich GEO nach Regionen und Märkten?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'So optimieren Sie Inhalte für GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Wie lässt sich nachverfolgen, ob Ihre Seite in KI-Antworten zitiert wird?', anchor: '#how-to-track-ai-citations' },
        { label: 'Häufige GEO-Fehler (und wie Sie sie beheben)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Weiterführende Artikel', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#frequently-asked-questions' },
        { label: 'Quellen und weiterführende Literatur', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/de/prompt-engineering/seo-meets-ai',
        inLanguage: 'de',
        headline: 'SEO trifft KI: Wie GEO das alte Regelwerk ersetzt',
        description: 'Generative Engine Optimization (GEO) entscheidet, ob KI-Suchmaschinen Ihre Inhalte zitieren. Unterschied zwischen GEO und SEO, Konversion von KI-Traffic und die technischen Grundlagen, um von ChatGPT, Perplexity und Gemini zitiert zu werden.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
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
        image: buildOgImageObject(OG_SLUG, 'de'),
        keywords: ['GEO', 'SEO', 'Generative Engine Optimization', 'KI-Suche', 'von ChatGPT zitiert werden', 'Perplexity', 'Google AI Overviews', 'JSON-LD-Schema', 'KI-Zitate', 'KI-Crawler'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen SEO und GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO (Suchmaschinenoptimierung) zielt darauf, Seiten in den klassischen Ergebnissen von Google und Bing zu platzieren, wo Nutzer aus einer Liste blauer Links wählen. GEO (Generative Engine Optimization) zielt darauf, dass Ihre Inhalte in KI-generierten Antworten von ChatGPT, Perplexity, Gemini und Claude zitiert werden — dort erhalten Nutzer eine zusammengefasste Antwort statt einer Liste von Optionen. Beides ist nötig: Laut Google muss eine Seite nur indexiert und für Snippets zugelassen sein, um in AI Overviews und im AI Mode zu erscheinen, daher bleiben klassische SEO-Grundlagen die Eintrittskarte.',
            },
          },
          {
            '@type': 'Question',
            name: 'Konvertiert Traffic aus der KI-Suche besser als organische Suche?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Im Durchschnitt etwas besser, in manchen B2B-Fällen deutlich. Eine WebFX-Analyse von 2,3 Milliarden Sessions ergab, dass Besucher aus generativer KI in 54,15 % der Sessions eine messbare Aktion abschlossen, gegenüber 45,23 % bei organischer Suche. Ahrefs meldete für die eigene Website 23× höhere Konversionsraten aus der KI-Suche. Im E-Commerce ist die Lage gemischt — eine von Practical Ecommerce berichtete Analyse von 973 E-Commerce-Websites zeigte, dass die KI-Suche schlechter konvertierte als die organische Suche. Der Vorteil ist bei B2B und bei Käufen mit hohem Abwägungsaufwand am deutlichsten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hilft Schema-Markup dabei, von ChatGPT und Perplexity zitiert zu werden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seiten mit korrektem JSON-LD-Schema-Markup erzielen laut einer Studie eines Anbieters bis zu 40 % mehr Impressionen für Rich Results, ein direkter Zuwachs bei KI-Zitaten ist jedoch kaum belegt. Eine SearchAtlas-Studie von 2025 fand, dass Schema-Abdeckung allein die Zitierhäufigkeit in LLMs bei OpenAI, Gemini und Perplexity nicht durchgängig erhöht, und Google gibt an, dass für AI Overviews und den AI Mode kein spezielles Schema nötig ist. Nutzen Sie Schema, um die Seite korrekt zu beschreiben; inhaltliche Autorität und eine Antwort-zuerst-Struktur bleiben die stärkeren Signale.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell wächst die KI-Suche?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der Traffic aus generativer KI wuchs von Januar 2024 bis Dezember 2025 um 796 %, die Konversionen pro Session wuchsen im selben Zeitraum um 6.432 %. Der durch KI generierte Traffic zu US-Einzelhandelsseiten stieg bis Juli 2025 um 4.700 % im Jahresvergleich. Trotz dieses Wachstums macht generative KI laut WebFX nur 0,18 % aller Web-Sessions aus — direkter Traffic (35,51 %) und organische Suche (27,12 %) dominieren weiterhin. SE Ranking, das von Januar 2025 bis April 2026 101.574 Websites auswertete, maß den Anteil der KI-Plattformen am gesamten Website-Traffic mit 0,32 %, wobei ChatGPT 74,78 % dieses KI-Referral-Traffics lieferte.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist SEO im Zeitalter der KI-Suche noch relevant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja — klassisches SEO ist die Grundlage für GEO, keine Alternative dazu. Google erklärt, dass eine Seite indexiert und snippet-fähig sein muss, um in AI Overviews und im AI Mode zu erscheinen, ohne zusätzliche technische Anforderungen; Crawlbarkeit, Indexierung und Inhaltsqualität kommen also zuerst. E-E-A-T-Signale (Experience, Expertise, Authoritativeness, Trustworthiness), die klassische Rankings stärken, erhöhen auch die Wahrscheinlichkeit, zitiert zu werden. Beide Disziplinen teilen dieselben Grundanforderungen — der Unterschied: GEO ergänzt Antwort-zuerst-Struktur, Entitätsdichte und Schema-Markup als zusätzliche Ebenen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist der erste Schritt, um meine Inhalte für GEO zu optimieren?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prüfen Sie Ihre Inhalte zunächst mit den Augen einer KI: Nehmen Sie Ihre 10 meistbesuchten Seiten und stellen Sie ChatGPT, Perplexity und Google AI Overviews Fragen zu Ihrem Thema. Kontrollieren Sie, ob Ihre Inhalte zitiert oder empfohlen werden. So erkennen Sie Lücken, in denen Sie in KI-Antworten nicht auftauchen. Danach priorisieren Sie JSON-LD-Schema-Markup (Article und FAQPage haben die größte Wirkung), eine Antwort-zuerst-Struktur und FAQ-Abschnitte, die Teilfragen vorwegnehmen, in die KI-Systeme breitere Nutzeranfragen zerlegen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist llms.txt und brauche ich eine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt ist eine vorgeschlagene Konvention (kein formaler Standard), im Stammverzeichnis der Website eine Markdown-Zusammenfassung abzulegen, die Sprachmodelle lesen können. Kein großer KI-Anbieter dokumentiert die Nutzung für Crawling oder Zitate, und Google erklärt, dass Sie keine neuen maschinenlesbaren Dateien oder KI-Textdateien benötigen, um in AI Overviews oder im AI Mode zu erscheinen. Die Datei ist optional, schnell angelegt und nützlich, wenn jemand ihre URL in einen Assistenten einfügt — erwarten Sie aber nicht, dass sie allein Zitate verändert.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie sorge ich dafür, dass meine Inhalte von ChatGPT zitiert werden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lassen Sie den Such-Crawler von OpenAI (OAI-SearchBot) in der robots.txt zu, stellen Sie sicher, dass die Seite indexierbar ist, und schreiben Sie jeden Abschnitt so, dass er eine Frage im ersten Satz mit einem konkreten, belegten Fakt beantwortet. ChatGPT zitiert Passagen, nicht ganze Seiten; eigenständige Absätze, Listen, Tabellen und FAQ-Blöcke lassen sich leichter zitieren als lange Fließtexte. Keine Technik garantiert ein Zitat: ChatGPT wählt Quellen je Anfrage, und derselbe Prompt kann an verschiedenen Tagen unterschiedliche Quellen liefern.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie kann ich nachverfolgen, ob meine Seite in KI-generierten Antworten zitiert wird?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kombinieren Sie drei Quellen. Erstens die Google Search Console: Daten zu AI Overviews und AI Mode sind in den Summen des Leistungsberichts enthalten, und seit Juni 2026 zeigt ein eigener Bericht „Search generative AI“ die Impressionen nach Seite, Land und Gerät. Zweitens Ihre Analytics: Filtern Sie Referral-Traffic von chatgpt.com, perplexity.ai, gemini.google.com und claude.ai. Drittens ein fester Satz von 10–20 Prompts, den Sie regelmäßig ausführen und von Hand oder mit einem Monitoring-Tool eines Drittanbieters protokollieren. Behandeln Sie einzelne Durchläufe als Anekdoten; Zitate schwanken von Lauf zu Lauf.',
            },
          },
          {
            '@type': 'Question',
            name: 'Unterscheidet sich GEO von AEO (Answer Engine Optimization)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO und AEO sind eng verwandt, aber nicht identisch. AEO optimiert auf direkte Antwortboxen und Featured Snippets in klassischen Suchmaschinen. GEO richtet sich gezielt an generative KI-Systeme (ChatGPT, Gemini, Perplexity, Claude), die Antworten mithilfe von RAG-Pipelines aus mehreren Quellen zusammenstellen. GEO erfordert Antwort-zuerst-Struktur, Schema-Markup und Entitätsdichte — AEO-Techniken überschneiden sich stark damit, GEO verlangt aber zusätzlich eigenständige, extrahierbare Absätze, die auch aus dem Kontext gelöst zitiert werden können.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei GEO die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO selbst ist Inhaltsoptimierung und löst nicht automatisch DSGVO-Pflichten aus. Mit der robots.txt steuern Sie, welche KI-Crawler Ihre öffentlich abrufbaren Seiten lesen dürfen. Relevant wird die DSGVO vor allem dort, wo personenbezogene Daten im Spiel sind: etwa wenn Ihre Inhalte Namen oder Kundenzitate enthalten, wenn Server-Logs oder Analytics IP-Adressen und Besucherdaten erfassen oder wenn Sie Monitoring-Tools und KI-Assistenten einsetzen, in die personenbezogene Daten gelangen können. Prüfen Sie dann Rechtsgrundlage, Datenschutzerklärung und Verträge mit den Anbietern; bei Unsicherheit hilft Ihr Datenschutzbeauftragter. Dies ist keine Rechtsberatung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist GEO für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, denn der Einstieg ist ohne großes Budget möglich und baut auf vorhandenem SEO auf. Praktisches Vorgehen: Wählen Sie Ihre 10 wichtigsten Produkt-, Leistungs- und Ratgeberseiten, prüfen Sie die robots.txt auf die Such-Crawler (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot), formulieren Sie in jedem Abschnitt die Antwort im ersten Satz und ergänzen Sie FAQ-Blöcke. Kontrollieren Sie die Wirkung mit der Search Console, mit Referral-Traffic in Ihren Analytics und mit einem festen Prompt-Satz. Planen Sie realistisch: KI-Plattformen senden bislang nur 0,32 % des Website-Traffics, klassische Suche bleibt daher Ihr wichtigster Kanal.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        'name': 'SEO trifft KI: Zentrale Themen',
        'description': 'Kernkonzepte zum Verständnis von Generative Engine Optimization',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs. SEO: Zwei verschiedene Spiele', 'description': 'Die Unterschiede zwischen klassischem SEO und Generative Engine Optimization verstehen' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Warum KI-Traffic anders konvertiert', 'description': 'Wie aus der KI-Suche kommende Besucher häufiger konvertieren als Besucher der organischen Suche' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Die technischen Grundlagen von GEO', 'description': 'JSON-LD-Schema-Markup und seine Wirkung auf die Zitierhäufigkeit durch KI' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Der KI-Crawler-Stack', 'description': 'GPTBot, ClaudeBot, PerplexityBot und llms.txt im Überblick' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Inhaltsstruktur und KI-Zitate', 'description': 'Wie Antwort-zuerst-Struktur, Entitätsdichte und Formatierung die Zitierchancen erhöhen' },
        ],
      },
      widgetEmbedUrl: '/widgets/seo-meets-ai-widget.html',
      widgetDescription: 'Interaktiver GEO-Audit-Leitfaden: Beantworten Sie 10 schnelle Fragen zu Ihrer Inhaltsstruktur, Ihrem technischen SEO und Ihrer KI-Plattform-Bereitschaft. Erhalten Sie eine 0–10-Bereitschaftsbewertung, regionale Compliance-Hinweise (DSGVO, CNIL, METI, Datenschutzgesetz) und einen priorisierten Aktionsplan mit Aufwandsschätzungen zur Optimierung Ihrer Inhalte für ChatGPT, Perplexity, Google AI Overviews und Claude.',
      sections: {
        tldr: {
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) sorgt dafür, dass Inhalte in KI-generierten Antworten zitiert werden; SEO sorgt für Rankings in den Blue-Link-Ergebnissen — 2026 braucht es beides',
            'KI-Traffic erreicht eine Session-Konversionsrate von 54,15 % gegenüber 45,23 % bei organischer Suche (WebFX) — macht aber in diesem Datensatz nur 0,18 % aller Sessions aus, bei SE Ranking 0,32 %',
            'Schema-Markup hilft Maschinen, eine Seite zu verstehen, doch laut Google brauchen AI Overviews und der AI Mode kein spezielles Schema, und eine Studie von 2026 fand keinen durchgängigen Zitierzuwachs allein durch Schema',
            'Google verlangt nur, dass eine Seite indexiert und snippet-fähig ist, um in AI Overviews und im AI Mode zu erscheinen — klassische SEO-Grundlagen bleiben die Eintrittskarte',
            'ChatGPT liefert 74,78 % des KI-Referral-Traffics (SE Ranking, 2026), vor Gemini (11,56 %) und Perplexity (7,23 %) — optimieren Sie zuerst für ChatGPT',
            'Listen, Tabellen und FAQ-Blöcke lassen sich von KI-Systemen leichter extrahieren und zitieren als dichter Fließtext — gestalten Sie jeden Abschnitt eigenständig',
            'Der durch KI generierte Traffic zu US-Einzelhandelsseiten stieg bis Juli 2025 um 4.700 % im Jahresvergleich — der Kanal ist klein, wächst aber beispiellos schnell',
            'Lassen Sie die Such-Crawler zu (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot); GPTBot und ClaudeBot steuern die Nutzung für das Training, nicht die Zitate in der Suche. llms.txt ist optional — kein großer Anbieter dokumentiert die Nutzung',
          ],
        },
        definition: {
          id: 'geo-vs-seo-two-different-games',
          title: 'GEO vs. SEO: Zwei verschiedene Spiele',
          content: [
            '**Klassisches SEO erkämpft einen Platz unter 10 blauen Links; GEO erkämpft ein Zitat unter den 2–7 Quellen, die ein KI-Modell in einer zusammengestellten Antwort üblicherweise nennt.** Ranking-Signale, Inhaltsformate und Erfolgskennzahlen unterscheiden sich grundlegend. Wer versteht, wie [KI-Systeme funktionieren und wo ihre Grenzen liegen](/de/prompt-engineering/ai-limitations-what-llms-cant-do), kann GEO besser umsetzen.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Profi-Tipp',
              text: 'Laut Google muss eine Seite nur indexiert und für Snippets zugelassen sein, um in AI Overviews und im AI Mode zu erscheinen. Crawlbarkeit, Indexierung und Inhaltsqualität sind damit die Eintrittskarte für GEO-Sichtbarkeit bei Google — keine Kür.',
            },
          ],
          columns: ['Aspekt', 'Klassisches SEO', 'Generative Engine Optimization (GEO)'],
          rows: [
            { 'Aspekt': 'Primäres Ziel', 'Klassisches SEO': 'Platz 1–10 bei Google/Bing', 'Generative Engine Optimization (GEO)': 'In KI-generierten Antworten zitiert werden' },
            { 'Aspekt': 'Zielplattformen', 'Klassisches SEO': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { 'Aspekt': 'Zentrale Erfolgskennzahl', 'Klassisches SEO': 'Rankings, Klicks, organischer Traffic', 'Generative Engine Optimization (GEO)': 'KI-Zitate, Markennennungen in KI-Antworten' },
            { 'Aspekt': 'Inhaltlicher Ansatz', 'Klassisches SEO': 'Keywords, Backlinks, Metadaten', 'Generative Engine Optimization (GEO)': 'Entitätsreiche, strukturierte Fakten mit der Antwort zuerst' },
            { 'Aspekt': 'Zeit bis zu Ergebnissen', 'Klassisches SEO': '4–6 Monate', 'Generative Engine Optimization (GEO)': '6–12 Monate' },
            { 'Aspekt': 'Session-Konversion (WebFX)', 'Klassisches SEO': '45,23 % (organisch)', 'Generative Engine Optimization (GEO)': '54,15 % (generative KI)' },
          ],
          blockquote: 'SEO und GEO beruhen auf denselben Grundlagen — Klarheit, Autorität, strukturierte Inhalte und Nutzerintention. Der Unterschied: KI-Systeme deuten diese Signale über Entitätserkennung und semantische Vollständigkeit statt über Backlinks und Klickmetriken. In einem Satz: Wenn es bei klassischem SEO darum ging, das Rennen um Seite 1 zu gewinnen, dann geht es bei GEO darum, die Quelle zu sein, die eine KI zitiert, wenn sie die Antwort bereits kennt.',
        },
        conversionAnalysis: {
          id: 'why-ai-traffic-converts-differently',
          title: 'Warum KI-Traffic anders konvertiert',
          content: [
            '**Besucher aus KI-Suchmaschinen konvertieren deutlich häufiger als Besucher der organischen Suche — weil sie vorinformiert ankommen, nachdem die KI Optionen bereits für sie zusammengefasst und verglichen hat.**',
            '**Hinweis zu den Kennzahlen:** Die folgenden Studien messen Unterschiedliches — die Konversionsrate pro Session (WebFX), den Zuwachs bei Zielerreichungen (Ahrefs) und die B2B-spezifische Konversion (SEMrush). Die Zahlen sind nicht direkt vergleichbar; jede ist mit Quelle und Bezeichnung angegeben.',
            'Eine WebFX-Analyse von 2,3 Milliarden Website-Sessions (Januar 2024 bis Dezember 2025) ergab:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warnung',
              text: 'Der Konversionsvorteil unterscheidet sich je nach Branche. Die branchenübergreifenden Daten von WebFX zeigen 54,15 % gegenüber 45,23 % Session-Konversion, während eine E-Commerce-Analyse KI-Traffic fand, der schlechter konvertierte als organischer. Prüfen Sie mit Ihrem eigenen Traffic, ob der Vorteil für Ihre Branche gilt.',
            },
          ],
          items: [
            'Der Traffic aus generativer KI wuchs in zwei Jahren um **796 %**',
            'Besucher aus KI erreichten eine **Session-Konversionsrate von 54,15 %** gegenüber 45,23 % bei organischer Suche',
            'Die Konversionen aus KI-Traffic wuchsen im Jahresvergleich um **6.432 %** — schneller als die Sessions, ein höherer Anteil der Besucher konvertiert also',
          ],
          blockquote: 'In manchen B2B-Fällen ist der Vorsprung größer. Ahrefs meldete, dass KI-Suchwerkzeuge auf der eigenen Website mit der 23-fachen Rate der organischen Suche konvertierten. SEMrush fand, dass KI-Such-Traffic in einer Studie über mehr als 500 B2B-Themen mit der 4,4-fachen organischen Rate konvertierte. Eine von Practical Ecommerce berichtete Analyse von 973 E-Commerce-Websites ergab dagegen, dass aus KI kommende Besucher schlechter konvertierten als organische — der Vorteil hängt von Aufgabe und Branche ab. WebFX definiert Session-Konversion als messbare Aktion (Formularversand, Download, Angebotsanfrage) innerhalb derselben Session; die Werte 54,15 % und 45,23 % sind also keine Kaufquoten. KI-Zitate sind zudem nicht deterministisch: Dieselbe Frage kann bei verschiedenen Modellen und beim selben Modell an verschiedenen Tagen unterschiedliche Quellen liefern.',
        },
        technicalFoundations: {
          id: 'what-are-the-technical-foundations-of-geo',
          title: 'Was sind die technischen Grundlagen von GEO?',
          content: [
            '**Korrektes JSON-LD-Schema-Markup hilft Suchmaschinen und KI-Systemen zu erfassen, wer eine Seite verfasst hat, welche Frage sie beantwortet und wann sie aktualisiert wurde — es ist aber kein Zitierschalter: Laut Google ist kein spezielles Schema nötig, um in AI Overviews oder im AI Mode zu erscheinen.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) ist das von Google empfohlene Schema-Format und das am besten maschinenlesbare strukturierte Datenformat. In einem `<script>`-Block im `<head>` der Seite trennt es die semantischen Angaben vom sichtbaren HTML und lässt sich dadurch leichter pflegen als Inline-Microdata oder RDFa. In Kombination mit [gut strukturiertem Schreiben](/de/prompt-engineering/write-better-code-with-ai) wird Schema-Markup zu Ihrem GEO-Fundament.',
            'Die Schema-Typen, die eine Inhaltsseite am genauesten beschreiben:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Kernpunkt',
              text: 'Eine SearchAtlas-Studie von 2025 fand, dass Schema-Markup allein höhere KI-Zitierraten nicht garantiert, und laut Google müssen strukturierte Daten zum sichtbaren Seitentext passen. Inhaltliche Autorität und eine Antwort-zuerst-Struktur sind die stärkeren Signale.',
            },
          ],
          items: [
            '**Article / TechArticle** — legt Autorenschaft, Veröffentlichungsdatum und Themenkategorie fest',
            '**FAQPage** — Frage-Antwort-Paare, die KI-Antwortsysteme direkt auslesen',
            '**HowTo** — nummerierte Schritte, die KI bei Anleitungsfragen bevorzugt',
            '**Organization** — Entitätserkennung: wer Sie sind, was Sie tun, Ihre offizielle URL',
            '**BreadcrumbList** — zeigt die Inhaltshierarchie und thematische Tiefe',
          ],
          blockquote: 'Eine wichtige Einschränkung: Eine SearchAtlas-Studie von 2025, die Schema-Verbreitung und KI-Zitierhäufigkeit bei OpenAI, Gemini und Perplexity verglich, fand, dass eine höhere Schema-Abdeckung allein nicht durchgängig zu höheren Zitierraten in LLMs führt. Schema macht Inhalte leichter verständlich — inhaltliche Autorität, Entitätsdichte und eine Antwort-zuerst-Struktur bleiben jedoch die stärkeren Zitiersignale.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'KI-Crawlbarkeit: Welche KI-Crawler sollten Sie in der robots.txt zulassen?',
          content: [
            '**Jeder KI-Anbieter betreibt getrennte Bots für Suche, Training und nutzerausgelöste Abrufe — lassen Sie die Such-Bots zu, wenn Sie zitiert werden möchten, und entscheiden Sie über die Trainings-Bots getrennt.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Bewährte Praxis',
              text: 'Prüfen Sie Ihre `robots.txt` anhand der unten genannten Bot-Namen und testen Sie mit der Live-Datei. Eine `llms.txt` ist optional: Sie ist eine vorgeschlagene Konvention von [llmstxt.org](https://llmstxt.org), und kein großer KI-Anbieter dokumentiert ihre Nutzung für Crawling oder Zitate.',
            },
          ],
          items: [
            '**OAI-SearchBot** — Crawler von OpenAI für die Suchergebnisse in ChatGPT; wer ihn blockiert, macht seine Website in den ChatGPT-Suchantworten unsichtbar',
            '**GPTBot** — Crawler von OpenAI für das Training generativer Modelle; seine Blockade entfernt Sie nicht aus der ChatGPT-Suche',
            '**ChatGPT-User** — ruft eine Seite ab, wenn jemand ChatGPT danach fragt; laut OpenAI gelten robots.txt-Regeln für solche nutzerausgelösten Anfragen möglicherweise nicht',
            '**Claude-SearchBot** und **Claude-User** — Bots von Anthropic für die Suchindexierung und für nutzerausgelöste Abrufe; **ClaudeBot** ist der Trainings-Crawler',
            '**PerplexityBot** — zeigt Websites in den Perplexity-Ergebnissen an und verlinkt sie, wird nicht für das Training verwendet; **Perplexity-User** bearbeitet Nutzeranfragen und ignoriert robots.txt in der Regel',
            '**Googlebot** — der Crawler hinter der Google-Suchindexierung, auf der AI Overviews und der AI Mode aufbauen; das Token **Google-Extended** steuert Training und Grounding von Gemini und beeinflusst weder die Aufnahme in die Suche noch das Ranking',
          ],
          blockquote: 'Einen Trainings-Bot zu blockieren (GPTBot, ClaudeBot, Google-Extended) ist eine andere Entscheidung als die Blockade eines Such-Bots. Vermeiden Sie das Blockieren per IP-Adresse: Laut Anthropic kann eine IP-Sperre verhindern, dass dessen Bots die robots.txt überhaupt lesen.',
        },
        contentStructure: {
          id: 'content-structure-what-ai-engines-actually-cite',
          title: 'Inhaltsstruktur: Was KI-Systeme tatsächlich zitieren',
          content: [
            '**Listen, Tabellen und FAQ-Blöcke lassen sich von KI-Systemen leichter extrahieren und zitieren als dichter Fließtext, denn der Abruf arbeitet mit Passagen: Ein eigenständiger Abschnitt mit der Antwort zuerst kann zitiert werden, ohne dass der Rest der Seite gebraucht wird.**',
            'KI-Systeme nutzen Retrieval-Augmented Generation (RAG) — sie durchsuchen zuerst einen Index, rufen passende Passagen ab und erstellen daraus eine Antwort. Ihre Inhalte müssen daher auf Absatz- oder Abschnittsebene zitierbar sein, nicht nur auf Seitenebene. Ein einzelner gut strukturierter Abschnitt kann extrahiert und zitiert werden, ohne dass die KI Ihre gesamte Seite verarbeitet.',
            'Die fünf Inhaltsprinzipien, die die Wahrscheinlichkeit einer KI-Zitierung am stärksten erhöhen:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Retrieval-Augmented Generation (RAG) extrahiert und zitiert einzelne Passagen Ihrer Inhalte, nicht ganze Seiten — deshalb zählt die Struktur mehr als die Wortzahl.',
            },
            {
              type: 'in-plain-terms',
              text: 'Stellen Sie sich Ihre Inhalte wie ein Lehrbuch vor. KI-Systeme lesen nicht von vorn bis hinten; sie suchen die Antwort auf eine konkrete Frage, ziehen den passenden Absatz heraus, zitieren ihn und machen weiter. Ein klarer, eigenständiger Absatz schlägt 5.000 Wörter Fließtext.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warnung',
              text: 'Vage Werbesprache („leistungsstark“, „nahtlos“, „revolutionär“, „führend“) wird von KI-Crawlern ignoriert. Nutzen Sie konkrete Fakten: exakte Zahlen, benannte Entitäten, messbare Aussagen. Was Sie nicht belegen können, extrahieren KI-Systeme nicht.',
            },
          ],
          items: [
            '**Antwort zuerst** — setzen Sie die direkte Antwort in den ersten Satz jedes Abschnitts; KI-Crawler lesen den Eröffnungssatz unter jeder Überschrift an. Das ist das Kernprinzip des [Prompt Engineering](/de/prompt-engineering/what-is-prompt-engineering), angewandt auf geschriebene Inhalte',
            '**Entitätsdichte** — nennen Sie 5–7 benannte Entitäten pro Artikel (Produktnamen, Firmennamen, Fachbegriffe, Namen von Forschenden), um thematische Autorität zu signalisieren. So zeigen Sie KI-Systemen, dass Ihr Thema fundiert und zitierbar ist',
            '**Semantische Vollständigkeit** — jeder Abschnitt muss seine Frage beantworten, ohne Kontext aus anderen Abschnitten zu benötigen; KI extrahiert Passagen isoliert',
            '**Konkrete Fakten statt vager Behauptungen** — exakte Zahlen, Daten und benannte Quellen werden zitiert; Formulierungen wie „führende Lösung“ oder „leistungsstarkes Werkzeug“ werden ignoriert',
            '**Strukturierte Formatierung** — Tabellen und Aufzählungen sind maschinenlesbar; Fließtext erfordert NLP-Parsing und wird seltener zitiert',
          ],
        },
        goodExample: {
          id: 'bad-vs-good-a-geo-compliant-rewrite',
          title: 'Schlecht vs. gut: Eine GEO-konforme Neufassung',
          content: [
            '**Schlecht — Text ohne Informationsgehalt (wird nicht zitiert):**',
            '> Unsere Plattform ist eine leistungsstarke, umfassende Lösung, die sich nahtlos in führende KI-Werkzeuge integriert und branchenführende Ergebnisse liefert.',
            'Jeder Wettbewerber könnte diesen Satz unverändert veröffentlichen. Keine Entitäten, keine konkreten Fakten, keine überprüfbaren Aussagen — KI-Systeme überspringen ihn komplett.',
            '**Gut — entitätsreich und faktendicht (zitierfähig):**',
          ],
          blockquote: 'PromptQuorum sendet einen Prompt gleichzeitig an bis zu 25 KI-Modelle — darunter GPT-5.6 (OpenAI), Claude Opus 5 (Anthropic), Gemini 3 Pro (Google DeepMind) und lokale Modelle über Ollama — und zeigt alle Antworten zum Vergleich nebeneinander an.',
        },
        goodExampleExplanation: {
          content: [
            'Vier benannte Entitäten, eine konkrete Zahl (25), eine überprüfbare Funktion (Vergleich nebeneinander). KI-Systeme extrahieren und attribuieren so etwas sofort. PromptQuorum enthält 9 integrierte Prompt-Frameworks (CO-STAR, CRAFT, RISEN, SPECS, TRACE und vier weitere), mit denen sich Inhalte direkt in der App so strukturieren lassen, dass sie diese GEO-Anforderungen erfüllen.',
          ],
        },
        seoFoundation: {
          id: 'does-traditional-seo-still-matter-for-geo',
          title: 'Spielt klassisches SEO für GEO noch eine Rolle?',
          content: [
            '**Google AI Overviews und der AI Mode greifen auf denselben Index zu wie die klassische Suche: Eine Seite muss indexiert und für Snippets zugelassen sein, daher speisen SEO-Grundlagen die GEO-Sichtbarkeit.**',
            'Die Dokumentation von Google zu KI-Funktionen besagt, dass es keine zusätzlichen Anforderungen gibt, um in AI Overviews oder im AI Mode zu erscheinen, und dass über die üblichen SEO-Best-Practices hinaus keine besondere Optimierung nötig ist. Studien von Drittanbietern finden, dass Seiten, die in klassischen Ergebnissen bereits sichtbar sind, häufiger zitiert werden; diese Studien messen jedoch nur Korrelationen, und die zitierten Seiten entsprechen nicht immer den Top-10-Ergebnissen.',
            'Der hybride SEO-und-GEO-Stack:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'E-E-A-T-Signale (Experience, Expertise, Authoritativeness, Trustworthiness) stärken sowohl klassische Suchrankings als auch die Wahrscheinlichkeit, von KI zitiert zu werden.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Profi-Tipp',
              text: 'Geben Sie SEO nicht für GEO auf. Beides verstärkt sich gegenseitig: Core Web Vitals verbessern (SEO) → höher ranken → in AI Overviews zitiert werden (GEO). E-E-A-T-Signale stärken beide Seiten. Optimieren Sie den gesamten Stack, nicht nur eine Ebene.',
            },
          ],
          columns: ['Ebene', 'Was zu tun ist', 'Warum'],
          rows: [
            {
              'Ebene': 'Technisches SEO',
              'Was zu tun ist': 'Seitengeschwindigkeit, Mobilfreundlichkeit, Core Web Vitals, Canonical-URLs',
              'Warum': 'GEO-Bots beachten dieselben Crawlbarkeitssignale wie der Googlebot',
            },
            {
              'Ebene': 'Inhaltliches SEO',
              'Was zu tun ist': 'E-E-A-T-Signale, Autorenqualifikationen, sichtbare Veröffentlichungsdaten; [so schreiben Sie bessere Inhalte](/de/prompt-engineering/write-better-code-with-ai)',
              'Warum': 'KI-Systeme bevorzugen Inhalte mit eindeutigen Autoritätssignalen',
            },
            {
              'Ebene': 'Entitäts-SEO',
              'Was zu tun ist': 'JSON-LD-Schema, Knowledge-Graph-Optimierung',
              'Warum': 'Maschinen bauen Entitätsgraphen auf; vage Seiten werden übergangen',
            },
            {
              'Ebene': 'GEO-spezifisch',
              'Was zu tun ist': 'Antwort-zuerst-Struktur, FAQ-Abschnitte, llms.txt',
              'Warum': 'Optimiert für die Extraktion durch RAG-Pipelines',
            },
            {
              'Ebene': 'Zitate aufbauen',
              'Was zu tun ist': 'Links von maßgeblichen Quellen (arXiv, Reuters, offizielle Dokumentationen)',
              'Warum': 'Vertrauenswürdige Links stärken Autorität; KI-Wirkung unbelegt',
            },
          ],
        },
        platformBreakdown: {
          id: 'which-ai-platforms-dominate-the-search-market',
          title: 'Welche KI-Plattformen senden den meisten Referral-Traffic?',
          content: [
            '**ChatGPT liefert 74,78 % des KI-Referral-Traffics zu Websites; Gemini folgt mit 11,56 %, Perplexity mit 7,23 %, Copilot mit 3,51 % und Claude mit 2,62 % (SE Ranking, 101.574 Websites, Januar 2025 bis April 2026) — damit ist ChatGPT für die meisten Websites das wirkungsvollste GEO-Ziel.**',
            'Das sind Anteile der Besuche, die KI-Plattformen an Websites senden, keine Anteile an Nutzern oder Anfragen. Andere Tracker melden abweichende Verteilungen (StatCounter sah ChatGPT im März 2026 bei 78,16 %, ein B2B-orientierter Tracker bei 62,6 %); die Rangfolge gilt daher als stabil, der genaue Prozentwert nur als Näherung.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Wussten Sie schon?',
              text: 'Perplexity zeigt zu jeder Antwort seine Quellen an und ist damit die einfachste Plattform, um zu prüfen, ob Ihre Inhalte zitiert werden. Zusammen senden KI-Plattformen weiterhin nur 0,32 % des gesamten Website-Traffics (SE Ranking, 2026) — behalten Sie die klassische Suche also in Ihrem Plan.',
            },
          ],
          columns: ['Plattform', 'Anteil am KI-Referral', 'Such-Crawler', 'Zitierweise'],
          rows: [
            {
              'Plattform': 'ChatGPT (OpenAI)',
              'Anteil am KI-Referral': '74,78 %',
              'Such-Crawler': 'OAI-SearchBot',
              'Zitierweise': 'Quellenlinks im Text mit zitierten Auszügen',
            },
            {
              'Plattform': 'Microsoft Copilot',
              'Anteil am KI-Referral': '3,51 %',
              'Such-Crawler': 'Bingbot',
              'Zitierweise': 'Im Bing-Index erfasste Seiten, Zitate als Fußnoten',
            },
            {
              'Plattform': 'Google Gemini / AI Overviews',
              'Anteil am KI-Referral': '11,56 %',
              'Such-Crawler': 'Googlebot',
              'Zitierweise': 'In der Google-Suche indexierte und snippet-fähige Seiten',
            },
            {
              'Plattform': 'Perplexity AI',
              'Anteil am KI-Referral': '7,23 %',
              'Such-Crawler': 'PerplexityBot',
              'Zitierweise': 'Nummerierte Quellenliste zu jeder Antwort',
            },
            {
              'Plattform': 'Claude (Anthropic)',
              'Anteil am KI-Referral': '2,62 %',
              'Such-Crawler': 'Claude-SearchBot',
              'Zitierweise': 'Zitiert Quellen, wenn die Websuche aktiviert ist',
            },
          ],
          blockquote: 'Die Anteilsdaten stammen von SE Ranking (Juni 2026). Die Verteilung auf die Plattformen verschiebt sich von Monat zu Monat; prüfen Sie die Zahlen daher erneut, bevor Sie Budgetentscheidungen darauf stützen.',
        },
        globalContext: {
          id: 'how-does-geo-differ-across-regions-and-markets',
          title: 'Wie unterscheidet sich GEO nach Regionen und Märkten?',
          content: [
            'Europäische Unternehmen müssen GEO-Investitionen mit der Einhaltung des EU AI Act abwägen, der Transparenz bei KI-generierten Inhalten verlangt und täuschende KI-Systeme verbietet. Mistral AI (Frankreich) baut seine europäische Suchpräsenz aus — für europäische KI-Plattformen optimierte Inhalte müssen den strengen Anforderungen der EU an die Quellenangabe entsprechen.',
            'In China wird die generative Suche von Produkten auf Basis von **Baidu ERNIE** und **Alibaba Qwen** dominiert. GEO-Strategien für den chinesischen Markt erfordern eine Optimierung für chinesischsprachige Entitätsgraphen, die sich von den Wissensbasen von Google oder OpenAI unterscheiden. Chinas Vorschriften zu generativer KI, darunter die Interim Measures (2023) und die Maßnahmen von 2025 zur Kennzeichnung KI-generierter Inhalte, verpflichten Anbieter zur Kennzeichnung KI-generierter Inhalte, was beeinflusst, wie chinesische Plattformen Quellen darstellen.',
            'Japanische Unternehmen setzen unter den Daten-Governance-Leitlinien des METI zunehmend On-Premise-KI-Suchwerkzeuge ein — GEO für japanische Unternehmenszielgruppen muss daher Inhalte priorisieren, die in inländischen Indizes erscheinen und dem KI-Governance-Rahmen des METI von 2024 entsprechen, nicht nur in Google AI Overviews.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Kernpunkt',
              text: 'Europäische, chinesische und japanische Märkte haben unterschiedliche regulatorische Anforderungen an die Quellenangabe bei KI-Inhalten. Wenn Sie internationale Zielgruppen bedienen, lokalisieren Sie Ihre GEO-Strategie. Ein einheitlicher globaler Ansatz erfüllt nicht alle regionalen Compliance-Standards.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'Wie lässt sich nachverfolgen, ob Ihre Seite in KI-Antworten zitiert wird?',
          content: [
            '**KI-Zitate verfolgen Sie mit drei Quellen nach: der Google Search Console für Googles KI-Funktionen, dem Referral-Traffic in Ihren Analytics für ChatGPT, Perplexity, Gemini und Claude sowie einem festen Prompt-Satz, den Sie regelmäßig erneut ausführen.**',
            'Seit Juni 2026 enthält die Search Console einen Leistungsbericht „Search generative AI“ mit Impressionen in AI Overviews, AI Mode und Discover nach Seite, Land und Gerät; dieselben Daten bleiben im allgemeinen Leistungsbericht enthalten. Der Bericht zeigt Impressionen, nicht den Antworttext — er verrät also, wo Sie erscheinen, aber nicht, warum.',
          ],
          items: [
            '**Search Console** — öffnen Sie den Bericht zur generativen KI und notieren Sie, welche Seiten nach einer Strukturänderung Impressionen gewinnen',
            '**Referrals in den Analytics** — segmentieren Sie Besuche von chatgpt.com, perplexity.ai, gemini.google.com und claude.ai; rechnen Sie mit kleinen Zahlen',
            '**Prompt-Satz** — halten Sie 10–20 Fragen fest, die Ihre Seite beantworten sollte, führen Sie sie wöchentlich in jedem Assistenten aus und protokollieren Sie, welche URLs genannt werden',
            '**Server-Logs** — zählen Sie Anfragen von OAI-SearchBot, Claude-SearchBot und PerplexityBot, um zu bestätigen, dass die Seiten abgerufen werden',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warnung',
              text: 'KI-Antworten schwanken von Lauf zu Lauf. Ein Zitat oder ein fehlendes Zitat ist eine Anekdote. Vergleichen Sie einen Prompt-Satz über mehrere Wochen, bevor Sie schließen, dass eine Änderung gewirkt hat.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Was ist Prompt Engineering?](/de/prompt-engineering/what-is-prompt-engineering) — wie strukturierte Anweisungen bestimmen, was KI-Systeme extrahieren und zitieren',
            '[Grenzen von KI — Was LLMs nicht können](/de/prompt-engineering/ai-limitations-what-llms-cant-do) — Verifizierungstechniken für Aussagen in KI-generierten Inhalten',
            '[Besseren Code mit KI schreiben](/de/prompt-engineering/write-better-code-with-ai) — GEO-konforme Struktur bei KI-gestützter Codegenerierung anwenden',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'So optimieren Sie Inhalte für GEO (Generative Engine Optimization)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Bewährte Praxis',
              text: 'Priorisieren Sie zuerst ChatGPT (74,78 % des KI-Referral-Traffics), danach Gemini und Perplexity. Dieser 80/20-Ansatz bringt den größten Ertrag, ohne den Aufwand auf kleinere Plattformen zu verteilen.',
            },
          ],
          numberedItems: [
            '**Prüfen Sie Ihre Inhalte mit den Augen einer KI: Auffindbarkeit und Zitierbarkeit.** Nehmen Sie Ihre 10 meistbesuchten Seiten und fragen Sie ChatGPT, Perplexity und Google AI Overviews, ob sie Ihre Inhalte zitieren oder empfehlen, wenn sie Fragen zu Ihrem Thema beantworten. Markieren Sie Lücken, in denen Sie nicht erscheinen.',
            '**Strukturieren Sie Ihre Inhalte mit der Antwort zuerst, überprüfbaren Fakten und klarem Schema-Markup.** Beginnen Sie jeden Abschnitt mit einer direkten Antwort (nicht mit einer Frage). Belegen Sie jede Aussage mit Quellen oder einer nachvollziehbaren Begründung. Ergänzen Sie JSON-LD-Schema (Article, FAQPage, HowTo, Breadcrumb), damit KI-Crawler Ihre Inhaltsstruktur verstehen.',
            '**Berücksichtigen Sie die Suchintention, nicht nur das Keyword.** Wenn Sie für „beste KI-Tools“ ranken, verlangt GEO, dass Sie beantworten, „was ein KI-Tool zum besten macht“ (Genauigkeit, Geschwindigkeit, Kosten, Bedienbarkeit). KI-Systeme gleichen nach Intention ab, nicht nach Keyword — Ihre Antwort muss zu dem passen, was die KI als Wunsch der Nutzer ableitet.',
            '**Bauen Sie FAQ-Abschnitte, die abgeleitete Fragen beantworten, die KI-Systeme stellen.** KI-Systeme zerlegen breite Anfragen in Teilfragen. Wenn Sie „KI-Halluzinationen“ behandeln, ergänzen Sie FAQ-Abschnitte zu „Wie häufig sind KI-Halluzinationen?“, „Lassen sich Halluzinationen verhindern?“, „Welche Modelle halluzinieren am meisten?“.',
            '**Prüfen Sie Ihre robots.txt und legen Sie optional eine llms.txt an.** Lassen Sie OAI-SearchBot, Claude-SearchBot, PerplexityBot und Googlebot zu. Eine llms.txt ist eine vorgeschlagene Konvention, deren Nutzung kein großer KI-Anbieter dokumentiert — betrachten Sie sie als optionale Dokumentation, nicht als Ranking-Hebel.',
          ],
        },
        commonMistakes: {
          id: 'common-geo-mistakes-and-how-to-fix-them',
          title: 'Häufige GEO-Fehler (und wie Sie sie beheben)',
          mistakes: [
            {
              mistake: 'GEO als Keyword-Optimierung statt als Zitier-Optimierung behandeln.',
              problem: 'Sie optimieren Seiten für Suchanfragen, nicht für Extraktion und Zitierung durch KI. KI-Systeme arbeiten mit Intentionsabgleich und semantischer Vollständigkeit, nicht mit Keyword-Dichte.',
              fix: 'Ändern Sie den Fokus: Strukturieren Sie Inhalte so, dass die ersten 2–3 Sätze jedes Abschnitts die gesamte Frage beantworten. Nutzen Sie exakte Entitäten und konkrete Zahlen statt Keyword-Wiederholungen. Testen Sie direkt mit ChatGPT und Perplexity, was zitiert wird.',
            },
            {
              mistake: 'Klassisches SEO ignorieren, weil Sie „voll auf GEO setzen“.',
              problem: 'Seiten, die nicht indexiert oder nicht snippet-fähig sind, können nicht in Google AI Overviews oder im AI Mode erscheinen. GEO braucht SEO als Fundament.',
              fix: 'Zwei Ebenen: Halten Sie starke E-E-A-T-Signale, gute Core Web Vitals und hochwertige Backlinks (SEO). Ergänzen Sie darauf Antwort-zuerst-Struktur, Schema-Markup und FAQ-Abschnitte (GEO). Beides verstärkt sich gegenseitig.',
            },
            {
              mistake: 'Sich allein auf Schema-Markup verlassen, um KI-Zitate zu verbessern.',
              problem: 'Schema macht Inhalte für KI-Systeme leichter verständlich, doch Autorität und Inhaltsstruktur sind die stärkeren Zitiersignale. Eine Seite mit perfektem Schema, aber vagem Text wird nicht zitiert.',
              fix: 'Kombinieren Sie die Ebenen: JSON-LD-Schema + Antwort-zuerst-Struktur + Entitätsdichte. Die SearchAtlas-Studie von 2025 fand, dass Schema allein ohne starke inhaltliche Autorität nur begrenzte Wirkung hat.',
            },
            {
              mistake: 'Alle KI-Plattformen gleich behandeln, statt nach Marktanteil zu priorisieren.',
              problem: 'ChatGPT sendet 74,78 % des KI-Referral-Traffics. Den Optimierungsaufwand auf 5 Plattformen zu verteilen, verwässert den Ertrag.',
              fix: 'Priorisieren Sie zuerst ChatGPT (Crawling durch OAI-SearchBot, Antwort-zuerst-Struktur, FAQ-Abschnitte). Optimieren Sie danach für Gemini und Perplexity (das zu jeder Antwort seine Quellen auflistet). Erweitern Sie anschließend auf Claude.',
            },
            {
              mistake: 'Dichte Absätze statt listenbasierter Inhalte schreiben.',
              problem: 'Dichter Fließtext lässt sich schwerer zitieren als Listen und Tabellen. KI-Systeme nutzen RAG (Retrieval-Augmented Generation) und extrahieren strukturierte Abschnitte zuverlässiger.',
              fix: 'Wandeln Sie Beschreibungen im Fließtext möglichst in Aufzählungen um. Nutzen Sie Tabellen für Vergleiche. Halten Sie Absätze auf höchstens 2–3 Sätze. KI-Crawler lesen den ersten Satz unter jeder Überschrift an, um zu entscheiden, ob sie den Abschnitt extrahieren.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist der Unterschied zwischen SEO und GEO?',
              a: 'SEO (Suchmaschinenoptimierung) zielt darauf, Seiten in den klassischen Ergebnissen von Google und Bing zu platzieren, wo Nutzer aus einer Liste blauer Links wählen. GEO (Generative Engine Optimization) zielt darauf, dass Ihre Inhalte in KI-generierten Antworten von ChatGPT, Perplexity, Gemini und Claude zitiert werden — dort erhalten Nutzer eine zusammengefasste Antwort statt einer Liste von Optionen. Beides ist nötig: Laut Google muss eine Seite nur indexiert und für Snippets zugelassen sein, um in AI Overviews und im AI Mode zu erscheinen, daher bleiben klassische SEO-Grundlagen die Eintrittskarte.',
            },
            {
              q: 'Konvertiert Traffic aus der KI-Suche besser als organische Suche?',
              a: 'Im Durchschnitt etwas besser, in manchen B2B-Fällen deutlich. Eine WebFX-Analyse von 2,3 Milliarden Sessions ergab, dass Besucher aus generativer KI in 54,15 % der Sessions eine messbare Aktion abschlossen, gegenüber 45,23 % bei organischer Suche. Ahrefs meldete für die eigene Website 23× höhere Konversionsraten aus der KI-Suche. Im E-Commerce ist die Lage gemischt — eine von Practical Ecommerce berichtete Analyse von 973 E-Commerce-Websites zeigte, dass die KI-Suche schlechter konvertierte als die organische Suche. Der Vorteil ist bei B2B und bei Käufen mit hohem Abwägungsaufwand am deutlichsten.',
            },
            {
              q: 'Hilft Schema-Markup dabei, von ChatGPT und Perplexity zitiert zu werden?',
              a: 'Seiten mit korrektem JSON-LD-Schema-Markup erzielen laut einer Studie eines Anbieters bis zu 40 % mehr Impressionen für Rich Results, ein direkter Zuwachs bei KI-Zitaten ist jedoch kaum belegt. Eine SearchAtlas-Studie von 2025 fand, dass Schema-Abdeckung allein die Zitierhäufigkeit in LLMs bei OpenAI, Gemini und Perplexity nicht durchgängig erhöht, und Google gibt an, dass für AI Overviews und den AI Mode kein spezielles Schema nötig ist. Nutzen Sie Schema, um die Seite korrekt zu beschreiben; inhaltliche Autorität und eine Antwort-zuerst-Struktur bleiben die stärkeren Signale.',
            },
            {
              q: 'Wie schnell wächst die KI-Suche?',
              a: 'Der Traffic aus generativer KI wuchs von Januar 2024 bis Dezember 2025 um 796 %, die Konversionen pro Session wuchsen im selben Zeitraum um 6.432 %. Der durch KI generierte Traffic zu US-Einzelhandelsseiten stieg bis Juli 2025 um 4.700 % im Jahresvergleich. Trotz dieses Wachstums macht generative KI laut WebFX nur 0,18 % aller Web-Sessions aus — direkter Traffic (35,51 %) und organische Suche (27,12 %) dominieren weiterhin. SE Ranking, das von Januar 2025 bis April 2026 101.574 Websites auswertete, maß den Anteil der KI-Plattformen am gesamten Website-Traffic mit 0,32 %, wobei ChatGPT 74,78 % dieses KI-Referral-Traffics lieferte.',
            },
            {
              q: 'Ist SEO im Zeitalter der KI-Suche noch relevant?',
              a: 'Ja — klassisches SEO ist die Grundlage für GEO, keine Alternative dazu. Google erklärt, dass eine Seite indexiert und snippet-fähig sein muss, um in AI Overviews und im AI Mode zu erscheinen, ohne zusätzliche technische Anforderungen; Crawlbarkeit, Indexierung und Inhaltsqualität kommen also zuerst. E-E-A-T-Signale (Experience, Expertise, Authoritativeness, Trustworthiness), die klassische Rankings stärken, erhöhen auch die Wahrscheinlichkeit, zitiert zu werden. Beide Disziplinen teilen dieselben Grundanforderungen — der Unterschied: GEO ergänzt Antwort-zuerst-Struktur, Entitätsdichte und Schema-Markup als zusätzliche Ebenen.',
            },
            {
              q: 'Was ist der erste Schritt, um meine Inhalte für GEO zu optimieren?',
              a: 'Prüfen Sie Ihre Inhalte zunächst mit den Augen einer KI: Nehmen Sie Ihre 10 meistbesuchten Seiten und stellen Sie ChatGPT, Perplexity und Google AI Overviews Fragen zu Ihrem Thema. Kontrollieren Sie, ob Ihre Inhalte zitiert oder empfohlen werden. So erkennen Sie Lücken, in denen Sie in KI-Antworten nicht auftauchen. Danach priorisieren Sie JSON-LD-Schema-Markup (Article und FAQPage haben die größte Wirkung), eine Antwort-zuerst-Struktur und FAQ-Abschnitte, die Teilfragen vorwegnehmen, in die KI-Systeme breitere Nutzeranfragen zerlegen.',
            },
            {
              q: 'Was ist llms.txt und brauche ich eine?',
              a: 'llms.txt ist eine vorgeschlagene Konvention (kein formaler Standard), im Stammverzeichnis der Website eine Markdown-Zusammenfassung abzulegen, die Sprachmodelle lesen können. Kein großer KI-Anbieter dokumentiert die Nutzung für Crawling oder Zitate, und Google erklärt, dass Sie keine neuen maschinenlesbaren Dateien oder KI-Textdateien benötigen, um in AI Overviews oder im AI Mode zu erscheinen. Die Datei ist optional, schnell angelegt und nützlich, wenn jemand ihre URL in einen Assistenten einfügt — erwarten Sie aber nicht, dass sie allein Zitate verändert.',
            },
            {
              q: 'Wie sorge ich dafür, dass meine Inhalte von ChatGPT zitiert werden?',
              a: 'Lassen Sie den Such-Crawler von OpenAI (OAI-SearchBot) in der robots.txt zu, stellen Sie sicher, dass die Seite indexierbar ist, und schreiben Sie jeden Abschnitt so, dass er eine Frage im ersten Satz mit einem konkreten, belegten Fakt beantwortet. ChatGPT zitiert Passagen, nicht ganze Seiten; eigenständige Absätze, Listen, Tabellen und FAQ-Blöcke lassen sich leichter zitieren als lange Fließtexte. Keine Technik garantiert ein Zitat: ChatGPT wählt Quellen je Anfrage, und derselbe Prompt kann an verschiedenen Tagen unterschiedliche Quellen liefern.',
            },
            {
              q: 'Wie kann ich nachverfolgen, ob meine Seite in KI-generierten Antworten zitiert wird?',
              a: 'Kombinieren Sie drei Quellen. Erstens die Google Search Console: Daten zu AI Overviews und AI Mode sind in den Summen des Leistungsberichts enthalten, und seit Juni 2026 zeigt ein eigener Bericht „Search generative AI“ die Impressionen nach Seite, Land und Gerät. Zweitens Ihre Analytics: Filtern Sie Referral-Traffic von chatgpt.com, perplexity.ai, gemini.google.com und claude.ai. Drittens ein fester Satz von 10–20 Prompts, den Sie regelmäßig ausführen und von Hand oder mit einem Monitoring-Tool eines Drittanbieters protokollieren. Behandeln Sie einzelne Durchläufe als Anekdoten; Zitate schwanken von Lauf zu Lauf.',
            },
            {
              q: 'Unterscheidet sich GEO von AEO (Answer Engine Optimization)?',
              a: 'GEO und AEO sind eng verwandt, aber nicht identisch. AEO optimiert auf direkte Antwortboxen und Featured Snippets in klassischen Suchmaschinen. GEO richtet sich gezielt an generative KI-Systeme (ChatGPT, Gemini, Perplexity, Claude), die Antworten mithilfe von RAG-Pipelines aus mehreren Quellen zusammenstellen. GEO erfordert Antwort-zuerst-Struktur, Schema-Markup und Entitätsdichte — AEO-Techniken überschneiden sich stark damit, GEO verlangt aber zusätzlich eigenständige, extrahierbare Absätze, die auch aus dem Kontext gelöst zitiert werden können.',
            },
            {
              q: 'Muss ich bei GEO die DSGVO beachten?',
              a: 'GEO selbst ist Inhaltsoptimierung und löst nicht automatisch DSGVO-Pflichten aus. Mit der robots.txt steuern Sie, welche KI-Crawler Ihre öffentlich abrufbaren Seiten lesen dürfen. Relevant wird die DSGVO vor allem dort, wo personenbezogene Daten im Spiel sind: etwa wenn Ihre Inhalte Namen oder Kundenzitate enthalten, wenn Server-Logs oder Analytics IP-Adressen und Besucherdaten erfassen oder wenn Sie Monitoring-Tools und KI-Assistenten einsetzen, in die personenbezogene Daten gelangen können. Prüfen Sie dann Rechtsgrundlage, Datenschutzerklärung und Verträge mit den Anbietern; bei Unsicherheit hilft Ihr Datenschutzbeauftragter. Dies ist keine Rechtsberatung.',
            },
            {
              q: 'Ist GEO für den deutschen Mittelstand geeignet?',
              a: 'Ja, denn der Einstieg ist ohne großes Budget möglich und baut auf vorhandenem SEO auf. Praktisches Vorgehen: Wählen Sie Ihre 10 wichtigsten Produkt-, Leistungs- und Ratgeberseiten, prüfen Sie die robots.txt auf die Such-Crawler (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot), formulieren Sie in jedem Abschnitt die Antwort im ersten Satz und ergänzen Sie FAQ-Blöcke. Kontrollieren Sie die Wirkung mit der Search Console, mit Referral-Traffic in Ihren Analytics und mit einem festen Prompt-Satz. Planen Sie realistisch: KI-Plattformen senden bislang nur 0,32 % des Website-Traffics, klassische Suche bleibt daher Ihr wichtigster Kanal.',
            },
          ],
        },
        sources: {
          id: 'sources-further-reading',
          title: 'Quellen und weiterführende Literatur',
          items: [
            '[Aggarwal et al., 2023. „GEO: Generative Engine Optimization“](https://arxiv.org/abs/2311.09735) — die grundlegende wissenschaftliche Arbeit, die GEO als Disziplin definiert und den Zitierzuwachs durch strukturierte Inhalte misst',
            '[WebFX, 2026. „Study: AI Traffic Grew 796% & Out-Converts Organic Search“](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — Analyse von 2,3 Milliarden Sessions zu Konversionsraten von KI-Traffic im Vergleich zu organischem Traffic',
            '[xSeek / Milestone Research, 2026. „Structured Data for AI Search: 40% More Citations“](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — Anbieterstudie zu JSON-LD-Schema und KI-Zitierhäufigkeit',
            '[SE Ranking, 2026. „AI traffic grew 16x from 2024 to 2026“](https://seranking.com/blog/ai-traffic-research-study/) — Referral-Anteile nach KI-Plattform über 101.574 Websites, Januar 2025 bis April 2026',
            '[Google Search Central. „AI features and your website“](https://developers.google.com/search/docs/appearance/ai-features) — Voraussetzungen für AI Overviews und AI Mode, strukturierte Daten und maschinenlesbare Dateien',
            '[Google Search Central, 2026. „Search generative AI performance reports in Search Console“](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — Impressionen in AI Overviews, AI Mode und Discover',
            '[OpenAI. „Overview of OpenAI crawlers“](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot und ChatGPT-User',
            '[Anthropic Support. „Does Anthropic crawl data from the web?“](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User und Claude-SearchBot',
            '[Perplexity. „Perplexity crawlers“](https://docs.perplexity.ai/guides/bots) — PerplexityBot und Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — Zitationsanalyse der Schema-Abdeckung bei OpenAI, Gemini und Perplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — 4.700 % Jahreswachstum des KI-Traffics auf US-Handelsseiten, Juli 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — Zusammenfassung der Konversionsanalyse von 973 E-Commerce-Websites',
          ],
        },
      },
    },
    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-es.webp',
      title: 'SEO y la IA: cómo GEO está reemplazando el manual tradicional',
      intro: '**La Generative Engine Optimization (GEO) es la práctica de estructurar el contenido para que los motores de búsqueda con IA (ChatGPT, Perplexity, Gemini, Claude) lo citen al sintetizar respuestas — sustituye el objetivo clásico del SEO, posicionarse entre los enlaces azules de Google, por uno nuevo: ser nombrado en las 2–7 fuentes que una IA cita en cada respuesta.**\n\nGEO no reemplaza al SEO tradicional; añade una segunda capa de optimización para un panorama de búsqueda en el que las plataformas de IA todavía envían menos del 1% del tráfico de los sitios web (0.32% en los datos de 2026 de SE Ranking), pero crecieron un 796% en dos años (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 contra la documentación de crawlers de Google Search Central, OpenAI, Anthropic y Perplexity, SE Ranking (junio de 2026) y WebFX (marzo de 2026)',
      readTime: '8 min de lectura',

      seoTitle: 'SEO para ChatGPT: cómo GEO hace que citen tu contenido',

      metaDescription: 'Cómo ser citado por ChatGPT, Perplexity y Gemini: estructura respuesta-primero, crawlers de IA en robots.txt, schema y seguimiento de citas de IA en 2026.',

      educationalLevel: 'Beginner',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: dos juegos distintos', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Por qué el tráfico de IA convierte de otra manera', anchor: '#why-ai-traffic-converts-differently' },
        { label: '¿Cuáles son los fundamentos técnicos de GEO?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: '¿Qué crawlers de IA deberías desbloquear en robots.txt?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Estructura del contenido: qué fuentes citan realmente los motores de IA', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Mal vs. bien: una reescritura conforme a GEO', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: '¿Sigue importando el SEO tradicional para GEO?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: '¿Qué plataformas de IA envían más tráfico de referencia?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: '¿Cómo cambia GEO según la región y el mercado?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'Cómo optimizar el contenido para GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: '¿Cómo se hace el seguimiento de las citas de IA?', anchor: '#how-to-track-ai-citations' },
        { label: 'Errores comunes de GEO (y cómo corregirlos)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Lectura relacionada', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#frequently-asked-questions' },
        { label: 'Fuentes y lecturas adicionales', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/es/prompt-engineering/seo-meets-ai',
        inLanguage: 'es',
        headline: 'SEO y la IA: cómo GEO está reemplazando el manual tradicional',
        description: 'La Generative Engine Optimization (GEO) es la forma en que los motores de búsqueda con IA citan tu contenido. Aprende la diferencia entre GEO y SEO, por qué el tráfico de IA convierte mejor y los fundamentos técnicos para que ChatGPT, Perplexity y Gemini citen tu contenido.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
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
        image: buildOgImageObject(OG_SLUG, 'es'),
        keywords: ['GEO', 'SEO', 'generative engine optimization', 'búsqueda con IA', 'ser citado por ChatGPT', 'Perplexity', 'Google AI Overviews', 'JSON-LD schema', 'citas de IA', 'crawlers de IA'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre SEO y GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El SEO (Search Engine Optimization) se centra en posicionar páginas en los resultados de buscadores tradicionales como Google y Bing, donde el usuario elige entre una lista de enlaces azules. GEO (Generative Engine Optimization) se centra en lograr que tu contenido sea citado dentro de las respuestas generadas por ChatGPT, Perplexity, Gemini y Claude — donde el usuario recibe una sola respuesta sintetizada en lugar de una lista de opciones. Ambos son necesarios: Google indica que una página solo necesita estar indexada y ser apta para mostrar un snippet para aparecer en AI Overviews y AI Mode, por lo que los fundamentos del SEO clásico siguen siendo la entrada obligatoria.',
            },
          },
          {
            '@type': 'Question',
            name: '¿El tráfico de la búsqueda con IA convierte mejor que la búsqueda orgánica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En promedio algo mejor, y mucho mejor en algunos casos B2B. Un análisis de WebFX de 2.3 mil millones de sesiones encontró que los visitantes de IA generativa completaron una acción medible en el 54.15% de las sesiones frente al 45.23% de la búsqueda orgánica. Ahrefs informó de tasas de conversión 23× más altas desde la búsqueda con IA en su propio sitio. En e-commerce la evidencia es mixta: un análisis de 973 sitios de e-commerce recogido por Practical Ecommerce encontró que la búsqueda con IA convertía peor que la orgánica. La ventaja es más clara en B2B y en compras de alta consideración.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto mejora el marcado schema las tasas de citación de la IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Según un estudio de un proveedor, las páginas con marcado schema JSON-LD correcto obtienen hasta un 40% más de impresiones de resultados enriquecidos, pero la evidencia de un aumento directo de citas de IA es débil. Un estudio de SearchAtlas de 2025 encontró que la cobertura de schema por sí sola no aumenta de forma consistente la frecuencia de citas de LLM en OpenAI, Gemini y Perplexity, y Google indica que no se requiere ningún schema especial para AI Overviews ni AI Mode. Usa schema para describir la página con precisión; la autoridad del contenido y la estructura respuesta-primero siguen siendo las señales más fuertes.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué tan rápido crece la búsqueda con IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El tráfico de IA generativa creció un 796% entre enero de 2024 y diciembre de 2025, y las conversiones de sesión crecieron un 6,432% en el mismo período. El tráfico generado por IA hacia sitios minoristas de EE. UU. aumentó un 4,700% interanual a julio de 2025. A pesar de este crecimiento, WebFX encontró que la IA generativa representa solo el 0.18% de las sesiones web totales — el tráfico directo (35.51%) y la búsqueda orgánica (27.12%) siguen dominando. SE Ranking, que siguió 101,574 sitios web de enero de 2025 a abril de 2026, midió las plataformas de IA en el 0.32% del tráfico total de sitios web, y ChatGPT aportó el 74.78% de ese tráfico de referencia de IA.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Sigue siendo relevante el SEO en la era de la búsqueda con IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí — el SEO tradicional es la base de GEO, no una alternativa. Google indica que una página debe estar indexada y ser apta para snippet para aparecer en AI Overviews y AI Mode, sin requisitos técnicos adicionales, así que el rastreo, la indexación y la calidad del contenido van primero. Las señales E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) que mejoran el posicionamiento tradicional también aumentan la probabilidad de ser citado por la IA. Las dos disciplinas comparten requisitos básicos — la diferencia es que GEO añade estructura respuesta-primero, densidad de entidades y marcado schema como capas adicionales.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es el primer paso para optimizar mi contenido para GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Empieza auditando tu contenido actual con una mirada de IA: toma 10 de tus páginas con más tráfico y haz a ChatGPT, Perplexity y Google AI Overviews preguntas relacionadas con tu tema. Comprueba si tu contenido aparece citado o recomendado. Así identificas dónde no apareces en las respuestas de IA. A partir de ahí, prioriza añadir marcado schema JSON-LD (Article y FAQPage son los de mayor impacto), reestructurar el contenido en formato respuesta-primero y añadir secciones de preguntas frecuentes que anticipen las subpreguntas en que los sistemas de IA descomponen las consultas más amplias.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué es llms.txt y necesito uno?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt es una convención propuesta (no un estándar formal) para colocar en la raíz del sitio un resumen en markdown de tu web que los modelos de lenguaje puedan leer. Ningún proveedor de IA importante documenta que lo use para rastreo o citación, y Google indica que no necesitas archivos nuevos legibles por máquina ni archivos de texto para IA para aparecer en AI Overviews o AI Mode. Es opcional, barato de añadir y útil cuando alguien pega su URL en un asistente, pero no esperes que cambie las citas por sí solo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo consigo que ChatGPT cite mi contenido?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Permite el crawler de búsqueda de OpenAI (OAI-SearchBot) en robots.txt, asegúrate de que la página sea indexable y escribe cada sección de modo que responda una pregunta en su primera frase con un dato concreto y con fuente. ChatGPT cita pasajes, no páginas enteras, así que los párrafos independientes, las listas, las tablas y los bloques de preguntas frecuentes son más fáciles de citar que la prosa larga. Ninguna técnica garantiza una cita: ChatGPT elige las fuentes por consulta, y el mismo prompt puede devolver fuentes distintas en días distintos.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo puedo saber si los motores de IA citan mi sitio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Combina tres fuentes. Primero, Google Search Console: los datos de AI Overviews y AI Mode forman parte de los totales del informe de Rendimiento, y desde junio de 2026 un informe separado de Search generative AI muestra impresiones por página, país y dispositivo. Segundo, tu analítica: filtra el tráfico de referencia de chatgpt.com, perplexity.ai, gemini.google.com y claude.ai. Tercero, un conjunto fijo de 10–20 prompts que ejecutas con regularidad y registras a mano o con una herramienta de monitorización de terceros. Trata las ejecuciones individuales como anécdotas; las citas varían entre ejecuciones.',
            },
          },
          {
            '@type': 'Question',
            name: '¿GEO es distinto de AEO (Answer Engine Optimization)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO y AEO están muy relacionados, pero no son idénticos. AEO se centra en optimizar para los cuadros de respuesta directa y los featured snippets de los buscadores tradicionales. GEO apunta específicamente a los motores de IA generativa (ChatGPT, Gemini, Perplexity, Claude) que sintetizan respuestas a partir de varias fuentes mediante pipelines RAG. GEO requiere estructura respuesta-primero, marcado schema y densidad de entidades — las técnicas de AEO se solapan bastante, pero GEO añade el requisito de párrafos independientes y extraíbles que puedan citarse fuera de contexto.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'es',
        'name': 'SEO y la IA: temas clave',
        'description': 'Conceptos centrales para entender la Generative Engine Optimization',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs. SEO: dos juegos distintos', 'description': 'Las diferencias entre el SEO tradicional y la Generative Engine Optimization' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Por qué el tráfico de IA convierte de otra manera', 'description': 'Cómo los visitantes que llegan desde la IA convierten a tasas más altas que los de la búsqueda orgánica' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Los fundamentos técnicos de GEO', 'description': 'El marcado schema JSON-LD y su impacto en las tasas de citación de la IA' },
          { '@type': 'ListItem', 'position': 4, 'name': 'El stack de crawlers de IA', 'description': 'Cómo funcionan GPTBot, ClaudeBot, PerplexityBot y los estándares de llms.txt' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Estructura del contenido y citación de la IA', 'description': 'Cómo la estructura respuesta-primero, la densidad de entidades y el formato maximizan las citas de la IA' },
        ],
      },
      sections: {
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'GEO (Generative Engine Optimization) consigue que el contenido sea citado en respuestas generadas por IA; el SEO posiciona páginas en resultados de enlaces azules — ambos son necesarios en 2026',
            'El tráfico de IA convierte al 54.15% de sesiones frente al 45.23% de la búsqueda orgánica (WebFX) — pero representa solo el 0.18% de las sesiones totales en ese conjunto de datos y el 0.32% en el de SE Ranking',
            'El marcado schema ayuda a las máquinas a interpretar una página, pero Google indica que AI Overviews y AI Mode no necesitan ningún schema especial, y un estudio de 2026 no encontró un aumento consistente de citas solo por usar schema',
            'Google solo exige que la página esté indexada y sea apta para snippet para aparecer en AI Overviews y AI Mode — los fundamentos del SEO clásico siguen siendo la entrada obligatoria',
            'ChatGPT aporta el 74.78% del tráfico de referencia de IA (SE Ranking, 2026), por delante de Gemini (11.56%) y Perplexity (7.23%) — optimiza primero para ChatGPT',
            'Las listas, las tablas y los bloques de preguntas frecuentes son más fáciles de extraer y citar para los sistemas de IA que la prosa densa — estructura cada sección para que se entienda por sí sola',
            'El tráfico generado por IA hacia sitios minoristas de EE. UU. aumentó un 4,700% interanual a julio de 2025 — el canal es pequeño, pero crece a una velocidad sin precedentes',
            'Permite los crawlers de búsqueda (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot); GPTBot y ClaudeBot controlan el uso para entrenamiento, no las citas de búsqueda. llms.txt es opcional — ningún proveedor importante documenta que lo use',
          ],
        },
        definition: {
          title: 'GEO vs. SEO: dos juegos distintos',
          content: [
            '**El SEO tradicional gana un puesto entre 10 enlaces azules; GEO gana una cita entre las 2—7 fuentes que un modelo de IA suele nombrar en una sola respuesta sintetizada.** Las señales de ranking, los formatos de contenido y las métricas de éxito son fundamentalmente distintos. Entender [cómo funcionan los sistemas de IA y cuáles son sus límites](/es/prompt-engineering/ai-limitations-what-llms-cant-do) es esencial para optimizar para GEO.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Consejo profesional',
              text: 'Google indica que una página solo necesita estar indexada y ser apta para mostrar un snippet para aparecer en AI Overviews y AI Mode. El rastreo, la indexación y la calidad del contenido son, por tanto, la entrada obligatoria para la visibilidad GEO en Google, no algo opcional.',
            },
          ],
          columns: ['Aspecto', 'SEO tradicional', 'Generative Engine Optimization (GEO)'],
          rows: [
            { 'Aspecto': 'Objetivo principal', 'SEO tradicional': 'Posicionarse en el puesto 1—10 de Google/Bing', 'Generative Engine Optimization (GEO)': 'Ser citado en respuestas generadas por IA' },
            { 'Aspecto': 'Plataformas objetivo', 'SEO tradicional': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { 'Aspecto': 'Métrica principal de éxito', 'SEO tradicional': 'Posiciones, clics, tráfico orgánico', 'Generative Engine Optimization (GEO)': 'Citas de IA, menciones de marca en respuestas de IA' },
            { 'Aspecto': 'Enfoque del contenido', 'SEO tradicional': 'Palabras clave, backlinks, metadatos', 'Generative Engine Optimization (GEO)': 'Datos ricos en entidades, estructurados y respuesta-primero' },
            { 'Aspecto': 'Tiempo hasta ver resultados', 'SEO tradicional': '4—6 meses', 'Generative Engine Optimization (GEO)': '6—12 meses' },
            { 'Aspecto': 'Conversión por sesión (WebFX)', 'SEO tradicional': '45.23% (orgánica)', 'Generative Engine Optimization (GEO)': '54.15% (IA generativa)' },
          ],
          blockquote: 'Tanto el SEO como GEO se apoyan en los mismos fundamentos — claridad, autoridad, contenido estructurado e intención del usuario. La diferencia es que los motores de IA interpretan esas señales mediante el reconocimiento de entidades y la completitud semántica, en lugar de backlinks y métricas de clics. En una frase: si el SEO tradicional era ganar una carrera hacia la página 1, GEO consiste en ser la fuente que una IA cita cuando ya conoce la respuesta.',
        },
        conversionAnalysis: {
          title: 'Por qué el tráfico de IA convierte de otra manera',
          content: [
            '**Los visitantes que llegan desde motores de búsqueda con IA convierten a tasas bastante más altas que los de la búsqueda orgánica, porque llegan ya informados: la IA ya sintetizó y comparó las opciones en su nombre.**',
            '**Nota sobre las métricas:** los estudios siguientes miden cosas distintas — la tasa de conversión por sesión (WebFX), el aumento en finalización de objetivos (Ahrefs) y la conversión específica de B2B (SEMrush). Estas cifras no son directamente comparables; cada una tiene su fuente y su etiqueta.',
            'Un análisis de WebFX de 2.3 mil millones de sesiones de sitios web (de enero de 2024 a diciembre de 2025) encontró lo siguiente:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Advertencia',
              text: 'El aumento de conversión varía según el sector. Los datos multisectoriales de WebFX muestran un 54.15% frente a un 45.23% de conversión por sesión, mientras que un análisis de e-commerce encontró que el tráfico de IA convertía peor que el orgánico. Prueba tu propio tráfico para confirmar que la ventaja aplica a tu sector.',
            },
          ],
          items: [
            'El tráfico de IA generativa creció un **796% en dos años**',
            'Los visitantes referidos por IA convirtieron a una **tasa de conversión por sesión del 54.15%** frente al 45.23% de la búsqueda orgánica',
            'Las conversiones del tráfico de IA crecieron un **6,432% interanual** — más rápido que las sesiones, lo que significa que una mayor proporción de visitantes convierte',
          ],
          blockquote: 'La diferencia es mayor en algunos casos B2B. Ahrefs informó de que las herramientas de búsqueda con IA convertían a 23× la tasa de la búsqueda orgánica en su propio sitio. SEMrush encontró que el tráfico de búsqueda con IA convertía a 4.4× la tasa orgánica en un estudio de más de 500 temas B2B. Sin embargo, un análisis de 973 sitios de e-commerce recogido por Practical Ecommerce encontró que los visitantes referidos por IA convertían peor que los orgánicos — la ventaja depende de la tarea y del sector. WebFX define la conversión por sesión como una acción medible (envío de formulario, descarga, solicitud de presupuesto) dentro de la misma sesión, así que las cifras del 54.15% y el 45.23% no son tasas de compra. Además, la citación de la IA no es determinista: la misma pregunta puede devolver fuentes distintas en modelos distintos, y en el mismo modelo en días distintos.',
        },
        technicalFoundations: {
          title: '¿Cuáles son los fundamentos técnicos de GEO?',
          content: [
            '**El marcado schema JSON-LD correcto ayuda a los buscadores y a los sistemas de IA a entender quién escribió una página, qué responde y cuándo se actualizó — pero no es un interruptor de citas: Google indica que no hace falta ningún schema especial para aparecer en AI Overviews ni en AI Mode.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) es el formato de schema recomendado por Google y el formato de datos estructurados más fácil de interpretar para la IA. Se coloca en un bloque `<script>` dentro del `<head>` de la página y separa las etiquetas semánticas del HTML visible — por eso es más fácil de mantener que Microdata o RDFa en línea. Combinado con una [redacción bien estructurada](/es/prompt-engineering/write-better-code-with-ai), el marcado schema se convierte en tu base de GEO.',
            'Los tipos de schema que describen con mayor precisión una página de contenido:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Punto clave',
              text: 'Un estudio de SearchAtlas de 2025 encontró que el marcado schema por sí solo no garantiza tasas de citación de IA más altas, y Google indica que los datos estructurados deben coincidir con el texto visible de la página. La autoridad del contenido y la estructura respuesta-primero son señales más fuertes.',
            },
          ],
          items: [
            '**Article / TechArticle** — establece la autoría, la fecha de publicación y la categoría temática',
            '**FAQPage** — pares de pregunta y respuesta que los motores de respuesta de IA extraen directamente',
            '**HowTo** — pasos numerados que la IA prefiere para consultas de procedimiento',
            '**Organization** — reconocimiento de entidades: quién eres, qué haces y cuál es tu URL oficial',
            '**BreadcrumbList** — indica la jerarquía del contenido y la profundidad temática',
          ],
          blockquote: 'Una advertencia importante: un estudio de SearchAtlas de 2025 que analizó la adopción de schema frente a la frecuencia de citas de IA en OpenAI, Gemini y Perplexity encontró que una mayor cobertura de schema por sí sola no produce de forma consistente más citas de LLM. Schema hace el contenido más fácil de interpretar, pero la autoridad del contenido, la densidad de entidades y la estructura respuesta-primero siguen siendo las señales de citación más fuertes.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: '¿Qué crawlers de IA deberías desbloquear en robots.txt?',
          content: [
            '**Cada proveedor de IA usa bots distintos para búsqueda, entrenamiento y consultas solicitadas por el usuario — permite los bots de búsqueda si quieres que te citen, y decide aparte sobre los bots de entrenamiento.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Buena práctica',
              text: 'Revisa tu `robots.txt` con los nombres de bots de abajo y pruébalo con el archivo en producción. Un archivo `llms.txt` es opcional: es una convención propuesta en [llmstxt.org](https://llmstxt.org), y ningún proveedor de IA importante documenta que lo use para rastreo o citación.',
            },
          ],
          items: [
            '**OAI-SearchBot** — el crawler de OpenAI para los resultados de búsqueda de ChatGPT; si lo bloqueas, tu sitio desaparece de las respuestas de búsqueda de ChatGPT',
            '**GPTBot** — el crawler de OpenAI para entrenar modelos generativos; bloquearlo no te quita de la búsqueda de ChatGPT',
            '**ChatGPT-User** — obtiene una página cuando alguien le pregunta a ChatGPT por ella; OpenAI indica que las reglas de robots.txt pueden no aplicarse a estas solicitudes iniciadas por el usuario',
            '**Claude-SearchBot** y **Claude-User** — los bots de Anthropic para la indexación de búsqueda y la consulta solicitada por el usuario; **ClaudeBot** es el crawler de entrenamiento',
            '**PerplexityBot** — muestra y enlaza sitios en los resultados de Perplexity y no se usa para entrenamiento; **Perplexity-User** atiende solicitudes de usuarios y por lo general ignora robots.txt',
            '**Googlebot** — el crawler detrás de la indexación de Google Search, en la que se basan AI Overviews y AI Mode; el token **Google-Extended** controla el entrenamiento y el grounding de Gemini, y no afecta a la inclusión ni al posicionamiento en Search',
          ],
          blockquote: 'Bloquear un bot de entrenamiento (GPTBot, ClaudeBot, Google-Extended) es una decisión distinta de bloquear un bot de búsqueda. Evita bloquear por dirección IP: Anthropic señala que el bloqueo por IP puede impedir que sus bots lean robots.txt.',
        },
        contentStructure: {
          title: 'Estructura del contenido: qué fuentes citan realmente los motores de IA',
          content: [
            '**Las listas, las tablas y los bloques de preguntas frecuentes son más fáciles de extraer y citar para los sistemas de IA que la prosa densa, porque la recuperación trabaja con pasajes: una sección independiente y con la respuesta primero puede citarse sin el resto de la página.**',
            'Los motores de IA usan Retrieval-Augmented Generation (RAG): primero buscan en un índice, recuperan los pasajes que coinciden y después sintetizan una respuesta. Esto significa que tu contenido debe poder citarse a nivel de párrafo o de sección, no solo de página. Una sola sección bien estructurada puede extraerse y citarse sin que la IA consuma toda tu página.',
            'Los cinco principios de contenido que maximizan la probabilidad de ser citado por la IA:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Retrieval-Augmented Generation (RAG) extrae y cita pasajes individuales de tu contenido, no páginas enteras — por eso la estructura importa más que el número de palabras.',
            },
            {
              type: 'in-plain-terms',
              text: 'Piensa en tu contenido como en un libro de texto. Los sistemas de IA no lo leen de principio a fin; buscan la respuesta a una pregunta concreta, sacan el párrafo relevante, lo citan y siguen. Un párrafo claro e independiente vale más que 5,000 palabras de prosa.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Advertencia',
              text: 'Los crawlers de IA ignoran el lenguaje de marketing vago ("potente", "fluido", "revolucionario", "líder"). Usa datos concretos: cifras exactas, entidades nombradas, afirmaciones medibles. Si no puedes citarlo, los sistemas de IA no lo extraerán.',
            },
          ],
          items: [
            '**Respuesta primero** — pon la respuesta directa en la primera frase de cada sección; los crawlers de IA toman como muestra la frase inicial de cada encabezado. Es el principio central del [prompt engineering](/es/prompt-engineering/what-is-prompt-engineering) aplicado al contenido escrito',
            '**Densidad de entidades** — menciona 5—7 entidades nombradas por artículo (nombres de productos, de empresas, términos técnicos, nombres de investigadores) para señalar autoridad temática. Así le indicas a los sistemas de IA que tu tema es fiable y citable',
            '**Completitud semántica** — cada sección debe responder su pregunta sin depender del contexto de otras secciones; la IA extrae los pasajes de forma aislada',
            '**Datos concretos en lugar de afirmaciones vagas** — se citan cifras exactas, fechas y fuentes con nombre; frases como "solución líder" o "herramienta potente" se ignoran',
            '**Formato estructurado** — las tablas y las listas con viñetas son legibles por máquina; los párrafos de prosa requieren análisis NLP y se citan con menos frecuencia',
          ],
        },
        goodExample: {
          title: 'Mal vs. bien: una reescritura conforme a GEO',
          content: [
            '**Mal — prosa sin información (no será citada):**',
            '> Nuestra plataforma es una solución potente e integral que se integra de forma fluida con las principales herramientas de IA para ofrecer resultados líderes en el sector.',
            'Cualquier competidor podría publicar esto tal cual. Cero entidades, cero datos concretos, cero afirmaciones verificables — los motores de IA lo descartan por completo.',
            '**Bien — rico en entidades y denso en datos (listo para ser citado):**',
          ],
          blockquote: 'PromptQuorum envía un prompt a hasta 25 modelos de IA al mismo tiempo — entre ellos GPT-5.6 (OpenAI), Claude Opus 5 (Anthropic), Gemini 3 Pro (Google DeepMind) y modelos locales mediante Ollama — y devuelve todas las respuestas lado a lado para compararlas.',
        },
        goodExampleExplanation: {
          content: [
            'Cuatro entidades nombradas, una cifra concreta (25) y una función verificable (comparación lado a lado). Los motores de IA extraen y atribuyen esto de inmediato. PromptQuorum incluye 9 frameworks de prompt integrados (CO-STAR, CRAFT, RISEN, SPECS, TRACE y otros cuatro) que ayudan a estructurar el contenido para cumplir estos requisitos de GEO directamente dentro de la app.',
          ],
        },
        seoFoundation: {
          title: '¿Sigue importando el SEO tradicional para GEO?',
          content: [
            '**Google AI Overviews y AI Mode se basan en el mismo índice que la búsqueda clásica: la página debe estar indexada y ser apta para mostrar un snippet, así que los fundamentos del SEO alimentan la visibilidad GEO.**',
            'La documentación de Google sobre las funciones de IA indica que no hay requisitos adicionales para aparecer en AI Overviews o AI Mode, y que no hace falta ninguna optimización especial más allá de las buenas prácticas de SEO habituales. Estudios de terceros encuentran que las páginas que ya son visibles en los resultados clásicos se citan con más frecuencia, pero esos estudios miden correlación, y las páginas citadas no siempre coinciden con los 10 primeros resultados.',
            'El stack híbrido de SEO + GEO:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Las señales E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) mejoran tanto el posicionamiento en la búsqueda tradicional como la probabilidad de ser citado por la IA.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Consejo profesional',
              text: 'No abandones el SEO por GEO. Se refuerzan mutuamente: mejoras Core Web Vitals (SEO) → te posicionas mejor → te citan en AI Overviews (GEO). Las señales E-E-A-T fortalecen ambos. Optimiza todo el stack, no solo una capa.',
            },
          ],
          columns: ['Capa', 'Qué hacer', 'Por qué'],
          rows: [
            {
              'Capa': 'SEO técnico',
              'Qué hacer': 'Velocidad de página, móvil, Core Web Vitals, URLs canónicas',
              'Por qué': 'Los bots de GEO respetan las mismas señales de rastreo que Googlebot',
            },
            {
              'Capa': 'SEO de contenido',
              'Qué hacer': 'Señales E-E-A-T, credenciales del autor, fechas de publicación visibles; [mira cómo escribir mejor contenido](/es/prompt-engineering/write-better-code-with-ai)',
              'Por qué': 'Los motores de IA favorecen el contenido con señales de autoridad explícitas',
            },
            {
              'Capa': 'SEO de entidades',
              'Qué hacer': 'Schema JSON-LD, optimización del knowledge graph',
              'Por qué': 'Las máquinas construyen grafos de entidades; las páginas vagas se descartan',
            },
            {
              'Capa': 'Específico de GEO',
              'Qué hacer': 'Estructura respuesta-primero, secciones de preguntas frecuentes, llms.txt',
              'Por qué': 'Optimiza para la extracción por pipelines RAG',
            },
            {
              'Capa': 'Construcción de citas',
              'Qué hacer': 'Enlaces desde fuentes de autoridad (arXiv, Reuters, documentación oficial)',
              'Por qué': 'Enlaces fiables suman autoridad; efecto en citas IA no probado',
            },
          ],
        },
        platformBreakdown: {
          title: '¿Qué plataformas de IA envían más tráfico de referencia?',
          content: [
            '**ChatGPT aporta el 74.78% del tráfico de referencia de IA hacia sitios web; le siguen Gemini con el 11.56%, Perplexity con el 7.23%, Copilot con el 3.51% y Claude con el 2.62% (SE Ranking, 101,574 sitios web, enero de 2025–abril de 2026) — lo que convierte a ChatGPT en el objetivo GEO de mayor impacto para la mayoría de los sitios.**',
            'Estas cifras son cuotas de las visitas que las plataformas de IA envían a sitios web, no cuotas de usuarios ni de consultas. Otros rastreadores informan repartos distintos (StatCounter situó a ChatGPT en el 78.16% en marzo de 2026; un rastreador centrado en B2B lo situó en el 62.6%), así que considera estable el orden del ranking y aproximado el porcentaje exacto.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 ¿Sabías que?',
              text: 'Perplexity muestra sus fuentes con cada respuesta, lo que la convierte en la plataforma más fácil para comprobar si tu contenido es citado. En conjunto, las plataformas de IA siguen enviando solo el 0.32% del tráfico total de sitios web (SE Ranking, 2026), así que mantén la búsqueda clásica en tu plan.',
            },
          ],
          columns: ['Plataforma', 'Cuota de referencia de IA', 'Crawler de búsqueda', 'Estilo de cita'],
          rows: [
            {
              'Plataforma': 'ChatGPT (OpenAI)',
              'Cuota de referencia de IA': '74.78%',
              'Crawler de búsqueda': 'OAI-SearchBot',
              'Estilo de cita': 'Enlaces a las fuentes dentro del texto, con extractos citados',
            },
            {
              'Plataforma': 'Microsoft Copilot',
              'Cuota de referencia de IA': '3.51%',
              'Crawler de búsqueda': 'Bingbot',
              'Estilo de cita': 'Páginas indexadas por Bing, citas como notas al pie',
            },
            {
              'Plataforma': 'Google Gemini / AI Overviews',
              'Cuota de referencia de IA': '11.56%',
              'Crawler de búsqueda': 'Googlebot',
              'Estilo de cita': 'Páginas indexadas y aptas para snippet en Google Search',
            },
            {
              'Plataforma': 'Perplexity AI',
              'Cuota de referencia de IA': '7.23%',
              'Crawler de búsqueda': 'PerplexityBot',
              'Estilo de cita': 'Lista numerada de fuentes con cada respuesta',
            },
            {
              'Plataforma': 'Claude (Anthropic)',
              'Cuota de referencia de IA': '2.62%',
              'Crawler de búsqueda': 'Claude-SearchBot',
              'Estilo de cita': 'Cita fuentes cuando la búsqueda web está activada',
            },
          ],
          blockquote: 'Los datos de cuota provienen de SE Ranking (junio de 2026). Los repartos entre plataformas cambian de un mes a otro, así que vuelve a comprobar las cifras antes de basar decisiones de presupuesto en ellas.',
        },
        globalContext: {
          title: '¿Cómo cambia GEO según la región y el mercado?',
          content: [
            'Las empresas europeas deben equilibrar la inversión en GEO con el cumplimiento de la EU AI Act, que exige transparencia sobre el contenido generado por IA y prohíbe los sistemas de IA engañosos. Mistral AI (Francia) está ampliando su presencia de búsqueda en Europa — el contenido optimizado para plataformas de IA europeas debe ajustarse a los estrictos requisitos de atribución de fuentes de datos de la UE.',
            'En China, la búsqueda generativa está dominada por productos basados en **Baidu ERNIE** y **Alibaba Qwen**. Las estrategias GEO para el mercado chino requieren optimizar para grafos de entidades en chino, distintos de las bases de conocimiento de Google u OpenAI. Las normas chinas sobre IA generativa, entre ellas las Interim Measures (2023) y las medidas de 2025 sobre el etiquetado de contenido generado por IA, obligan a los proveedores a etiquetar ese contenido, lo que afecta a cómo las plataformas chinas presentan las fuentes.',
            'Las empresas japonesas sujetas a las directrices de gobernanza de datos del METI usan cada vez más herramientas de búsqueda con IA locales (on-premise) — por eso el GEO dirigido a empresas japonesas debe priorizar el contenido que aparece en los índices nacionales y cumple el marco de gobernanza de IA de 2024 del METI, y no solo Google AI Overviews.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Punto clave',
              text: 'Los mercados europeo, chino y japonés tienen requisitos regulatorios distintos sobre la atribución del contenido de IA. Si atiendes a audiencias internacionales, localiza tu estrategia GEO. Un único enfoque global no cumplirá todos los estándares regionales.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: '¿Cómo se hace el seguimiento de las citas de IA?',
          content: [
            '**El seguimiento de las citas de IA combina tres fuentes: Google Search Console para las funciones de IA de Google, el tráfico de referencia en tu analítica para ChatGPT, Perplexity, Gemini y Claude, y un conjunto fijo de prompts que vuelves a ejecutar con regularidad.**',
            'Desde junio de 2026, Search Console incluye un informe de rendimiento de Search generative AI con impresiones en AI Overviews, AI Mode y Discover por página, país y dispositivo; los mismos datos siguen en el informe general de Rendimiento. Muestra impresiones, no el texto de la respuesta, así que te dice dónde apareces, no por qué.',
          ],
          items: [
            '**Search Console** — abre el informe de generative AI y anota qué páginas ganan impresiones tras un cambio de estructura',
            '**Referencias en la analítica** — segmenta las visitas de chatgpt.com, perplexity.ai, gemini.google.com y claude.ai; espera cifras pequeñas',
            '**Conjunto de prompts** — conserva 10–20 preguntas que tu página debería responder, ejecútalas cada semana en cada asistente y registra qué URLs se nombran',
            '**Logs del servidor** — cuenta las solicitudes de OAI-SearchBot, Claude-SearchBot y PerplexityBot para confirmar que las páginas se están obteniendo',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Advertencia',
              text: 'Las respuestas de la IA varían entre ejecuciones. Una cita, o la ausencia de una cita, es una anécdota. Compara un conjunto de prompts durante varias semanas antes de concluir que un cambio funcionó.',
            },
          ],
        },
        relatedReading: {
          title: 'Lectura relacionada',
          items: [
            '[¿Qué es el prompt engineering?](/es/prompt-engineering/what-is-prompt-engineering) — cómo las instrucciones estructuradas determinan lo que los sistemas de IA extraen y citan',
            '[Límites de la IA — lo que los LLM no pueden hacer](/es/prompt-engineering/ai-limitations-what-llms-cant-do) — técnicas de verificación para afirmaciones en contenido generado por IA',
            '[Escribe mejor código con IA](/es/prompt-engineering/write-better-code-with-ai) — cómo aplicar una estructura conforme a GEO a la generación de código asistida por IA',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'Cómo optimizar el contenido para GEO (SEO para ChatGPT y otros motores de IA)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Buena práctica',
              text: 'Prioriza primero ChatGPT (74.78% del tráfico de referencia de IA), después Gemini y Perplexity. Este enfoque 80/20 da el mayor retorno sin dispersar el esfuerzo en plataformas más pequeñas.',
            },
          ],
          numberedItems: [
            '**Audita tu contenido actual con una mirada de IA: posibilidad de ser encontrado y de ser citado.** Toma 10 de tus páginas con más tráfico y pregunta a ChatGPT, Perplexity y Google AI Overviews si citan o recomiendan tu contenido al responder consultas relacionadas con tu tema. Marca dónde no apareces.',
            '**Estructura tu contenido con la respuesta primero, datos verificables y marcado schema claro.** Abre cada sección con una respuesta directa (no con una pregunta). Respalda cada afirmación con fuentes o un razonamiento claro. Añade schema JSON-LD (Article, FAQPage, HowTo, Breadcrumb) para que los crawlers de IA entiendan la estructura de tu contenido.',
            '**Incluye la intención de búsqueda, no solo la palabra clave.** Si te posicionas para \'best AI tools\', GEO exige que respondas \'¿Qué hace que una herramienta de IA sea la mejor?\' (precisión, velocidad, coste, facilidad de uso). Los sistemas de IA se guían por la coincidencia de intención, no por la de palabras clave — asegúrate de que tu respuesta coincida con lo que esos sistemas infieren que quiere el usuario.',
            '**Crea secciones de preguntas frecuentes que respondan las preguntas derivadas que plantean los sistemas de IA.** Los sistemas de IA descomponen las consultas amplias en subpreguntas. Si te enfocas en \'alucinaciones de la IA\', añade preguntas frecuentes como \'¿Qué tan comunes son las alucinaciones de la IA?\', \'¿Se pueden prevenir las alucinaciones?\', \'¿Qué modelos alucinan más?\'.',
            '**Revisa tu robots.txt y, si quieres, añade un archivo llms.txt.** Permite OAI-SearchBot, Claude-SearchBot, PerplexityBot y Googlebot. llms.txt es una convención propuesta que ningún proveedor de IA importante documenta que use, así que trátalo como documentación opcional, no como una palanca de posicionamiento.',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes de GEO (y cómo corregirlos)',
          mistakes: [
            {
              mistake: 'Tratar GEO como optimización de palabras clave en lugar de optimización de citas.',
              problem: 'Optimizas las páginas para consultas de búsqueda, no para la extracción y la citación por la IA. Los sistemas de IA usan la coincidencia de intención y la completitud semántica, no la densidad de palabras clave.',
              fix: 'Cambia el enfoque: estructura el contenido para responder la pregunta completa en las 2–3 primeras frases de cada sección. Usa entidades exactas y cifras concretas en lugar de repetir palabras clave. Prueba directamente con ChatGPT y Perplexity para ver qué se cita.',
            },
            {
              mistake: 'Ignorar el SEO tradicional porque "apuestas todo a GEO".',
              problem: 'Las páginas que no están indexadas o no son aptas para snippet no pueden aparecer en Google AI Overviews ni en AI Mode. GEO necesita al SEO como base.',
              fix: 'Doble capa: mantén señales E-E-A-T sólidas, buenos Core Web Vitals y calidad de backlinks (SEO). Añade encima estructura respuesta-primero, marcado schema y secciones de preguntas frecuentes (GEO). Se refuerzan mutuamente.',
            },
            {
              mistake: 'Confiar solo en el marcado schema para mejorar las citas de IA.',
              problem: 'Schema hace el contenido más fácil de interpretar para los sistemas de IA, pero la autoridad y la estructura del contenido son señales de citación más fuertes. Una página con schema perfecto pero con prosa vaga no será citada.',
              fix: 'Combina capas: añade schema JSON-LD + estructura respuesta-primero + densidad de entidades. El estudio de SearchAtlas de 2025 encontró que schema por sí solo tiene un impacto limitado sin una autoridad de contenido sólida.',
            },
            {
              mistake: 'Optimizar por igual para todas las plataformas de IA en lugar de priorizar según su cuota.',
              problem: 'ChatGPT envía el 74.78% del tráfico de referencia de IA. Repartir el esfuerzo entre 5 plataformas diluye el retorno.',
              fix: 'Prioriza primero ChatGPT (rastreo de OAI-SearchBot, estructura respuesta-primero, secciones de preguntas frecuentes). Después optimiza para Gemini y Perplexity (que lista sus fuentes con cada respuesta). Extiende a Claude más adelante.',
            },
            {
              mistake: 'Escribir párrafos densos en lugar de contenido en forma de listas.',
              problem: 'La prosa densa es más difícil de citar que las listas y las tablas. Los sistemas de IA usan RAG (Retrieval-Augmented Generation) y extraen con más fiabilidad las secciones estructuradas.',
              fix: 'Convierte las descripciones en prosa en listas con viñetas cuando sea posible. Usa tablas para las comparaciones. Limita los párrafos a 2–3 frases. Los crawlers de IA toman como muestra la primera frase de cada encabezado para decidir si extraen la sección.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Cuál es la diferencia entre SEO y GEO?',
              a: 'El SEO (Search Engine Optimization) se centra en posicionar páginas en los resultados de buscadores tradicionales como Google y Bing, donde el usuario elige entre una lista de enlaces azules. GEO (Generative Engine Optimization) se centra en lograr que tu contenido sea citado dentro de las respuestas generadas por ChatGPT, Perplexity, Gemini y Claude — donde el usuario recibe una sola respuesta sintetizada en lugar de una lista de opciones. Ambos son necesarios: Google indica que una página solo necesita estar indexada y ser apta para mostrar un snippet para aparecer en AI Overviews y AI Mode, por lo que los fundamentos del SEO clásico siguen siendo la entrada obligatoria.',
            },
            {
              q: '¿El tráfico de la búsqueda con IA convierte mejor que la búsqueda orgánica?',
              a: 'En promedio algo mejor, y mucho mejor en algunos casos B2B. Un análisis de WebFX de 2.3 mil millones de sesiones encontró que los visitantes de IA generativa completaron una acción medible en el 54.15% de las sesiones frente al 45.23% de la búsqueda orgánica. Ahrefs informó de tasas de conversión 23× más altas desde la búsqueda con IA en su propio sitio. En e-commerce la evidencia es mixta: un análisis de 973 sitios de e-commerce recogido por Practical Ecommerce encontró que la búsqueda con IA convertía peor que la orgánica. La ventaja es más clara en B2B y en compras de alta consideración.',
            },
            {
              q: '¿Cuánto mejora el marcado schema las tasas de citación de la IA?',
              a: 'Según un estudio de un proveedor, las páginas con marcado schema JSON-LD correcto obtienen hasta un 40% más de impresiones de resultados enriquecidos, pero la evidencia de un aumento directo de citas de IA es débil. Un estudio de SearchAtlas de 2025 encontró que la cobertura de schema por sí sola no aumenta de forma consistente la frecuencia de citas de LLM en OpenAI, Gemini y Perplexity, y Google indica que no se requiere ningún schema especial para AI Overviews ni AI Mode. Usa schema para describir la página con precisión; la autoridad del contenido y la estructura respuesta-primero siguen siendo las señales más fuertes.',
            },
            {
              q: '¿Qué tan rápido crece la búsqueda con IA?',
              a: 'El tráfico de IA generativa creció un 796% entre enero de 2024 y diciembre de 2025, y las conversiones de sesión crecieron un 6,432% en el mismo período. El tráfico generado por IA hacia sitios minoristas de EE. UU. aumentó un 4,700% interanual a julio de 2025. A pesar de este crecimiento, WebFX encontró que la IA generativa representa solo el 0.18% de las sesiones web totales — el tráfico directo (35.51%) y la búsqueda orgánica (27.12%) siguen dominando. SE Ranking, que siguió 101,574 sitios web de enero de 2025 a abril de 2026, midió las plataformas de IA en el 0.32% del tráfico total de sitios web, y ChatGPT aportó el 74.78% de ese tráfico de referencia de IA.',
            },
            {
              q: '¿Sigue siendo relevante el SEO en la era de la búsqueda con IA?',
              a: 'Sí — el SEO tradicional es la base de GEO, no una alternativa. Google indica que una página debe estar indexada y ser apta para snippet para aparecer en AI Overviews y AI Mode, sin requisitos técnicos adicionales, así que el rastreo, la indexación y la calidad del contenido van primero. Las señales E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) que mejoran el posicionamiento tradicional también aumentan la probabilidad de ser citado por la IA. Las dos disciplinas comparten requisitos básicos — la diferencia es que GEO añade estructura respuesta-primero, densidad de entidades y marcado schema como capas adicionales.',
            },
            {
              q: '¿Cuál es el primer paso para optimizar mi contenido para GEO?',
              a: 'Empieza auditando tu contenido actual con una mirada de IA: toma 10 de tus páginas con más tráfico y haz a ChatGPT, Perplexity y Google AI Overviews preguntas relacionadas con tu tema. Comprueba si tu contenido aparece citado o recomendado. Así identificas dónde no apareces en las respuestas de IA. A partir de ahí, prioriza añadir marcado schema JSON-LD (Article y FAQPage son los de mayor impacto), reestructurar el contenido en formato respuesta-primero y añadir secciones de preguntas frecuentes que anticipen las subpreguntas en que los sistemas de IA descomponen las consultas más amplias.',
            },
            {
              q: '¿Qué es llms.txt y necesito uno?',
              a: 'llms.txt es una convención propuesta (no un estándar formal) para colocar en la raíz del sitio un resumen en markdown de tu web que los modelos de lenguaje puedan leer. Ningún proveedor de IA importante documenta que lo use para rastreo o citación, y Google indica que no necesitas archivos nuevos legibles por máquina ni archivos de texto para IA para aparecer en AI Overviews o AI Mode. Es opcional, barato de añadir y útil cuando alguien pega su URL en un asistente, pero no esperes que cambie las citas por sí solo.',
            },
            {
              q: '¿Cómo consigo que ChatGPT cite mi contenido?',
              a: 'Permite el crawler de búsqueda de OpenAI (OAI-SearchBot) en robots.txt, asegúrate de que la página sea indexable y escribe cada sección de modo que responda una pregunta en su primera frase con un dato concreto y con fuente. ChatGPT cita pasajes, no páginas enteras, así que los párrafos independientes, las listas, las tablas y los bloques de preguntas frecuentes son más fáciles de citar que la prosa larga. Ninguna técnica garantiza una cita: ChatGPT elige las fuentes por consulta, y el mismo prompt puede devolver fuentes distintas en días distintos.',
            },
            {
              q: '¿Cómo puedo saber si los motores de IA citan mi sitio?',
              a: 'Combina tres fuentes. Primero, Google Search Console: los datos de AI Overviews y AI Mode forman parte de los totales del informe de Rendimiento, y desde junio de 2026 un informe separado de Search generative AI muestra impresiones por página, país y dispositivo. Segundo, tu analítica: filtra el tráfico de referencia de chatgpt.com, perplexity.ai, gemini.google.com y claude.ai. Tercero, un conjunto fijo de 10–20 prompts que ejecutas con regularidad y registras a mano o con una herramienta de monitorización de terceros. Trata las ejecuciones individuales como anécdotas; las citas varían entre ejecuciones.',
            },
            {
              q: '¿GEO es distinto de AEO (Answer Engine Optimization)?',
              a: 'GEO y AEO están muy relacionados, pero no son idénticos. AEO se centra en optimizar para los cuadros de respuesta directa y los featured snippets de los buscadores tradicionales. GEO apunta específicamente a los motores de IA generativa (ChatGPT, Gemini, Perplexity, Claude) que sintetizan respuestas a partir de varias fuentes mediante pipelines RAG. GEO requiere estructura respuesta-primero, marcado schema y densidad de entidades — las técnicas de AEO se solapan bastante, pero GEO añade el requisito de párrafos independientes y extraíbles que puedan citarse fuera de contexto.',
            },
          ],
        },
        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — el artículo académico fundacional que define GEO como disciplina y mide el aumento de citas gracias al contenido estructurado',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — análisis de 2.3 mil millones de sesiones sobre tasas de conversión de IA frente a orgánico',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — estudio de un proveedor sobre schema JSON-LD y frecuencia de citas de IA',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — cuotas de referencia por plataforma de IA en 101,574 sitios web, enero de 2025–abril de 2026',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — requisitos para AI Overviews y AI Mode, datos estructurados y archivos legibles por máquina',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — impresiones en AI Overviews, AI Mode y Discover',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot y ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User y Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot y Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — análisis de citas según la cobertura de schema en OpenAI, Gemini y Perplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — crecimiento interanual del 4,700% del tráfico de IA a sitios minoristas de EE. UU., julio de 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — resumen del análisis de conversión de 973 sitios de e-commerce',
          ],
        },
      },
    },
    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-ar.webp',
      title: 'السيو والذكاء الاصطناعي: كيف تحل GEO محل الدليل التقليدي',
      intro: '**تحسين محركات البحث التوليدية (GEO) هو ممارسة هيكلة المحتوى كي تستشهد به محركات البحث بالذكاء الاصطناعي (ChatGPT وPerplexity وGemini وClaude) عند تركيب الإجابات — فيحل هدف جديد محل هدف السيو التقليدي المتمثل في الترتيب بين روابط Google الزرقاء، وهو أن يُذكر موقعك ضمن المصادر الـ2–7 التي يقتبس منها الذكاء الاصطناعي في كل إجابة.**\n\nلا تحل GEO محل السيو التقليدي؛ بل تضيف طبقة ثانية من التحسين في مشهد بحثي لا تزال منصات الذكاء الاصطناعي ترسل فيه أقل من 1% من حركة مرور المواقع (0.32% في بيانات SE Ranking لعام 2026)، لكنها نمت 796% خلال عامين (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 مقابل وثائق الزواحف لدى Google Search Central وOpenAI وAnthropic وPerplexity، وSE Ranking (يونيو 2026) وWebFX (مارس 2026)',
      readTime: '8 دقائق للقراءة',

      seoTitle: 'السيو والذكاء الاصطناعي: كيف تجعل ChatGPT يستشهد بمحتواك (2026)',

      metaDescription: 'كيف تحصل على استشهاد ChatGPT وPerplexity وGemini: بنية الإجابة أولاً، زواحف الذكاء الاصطناعي في robots.txt، المخطط، وتتبع الاستشهادات.',

      educationalLevel: 'مبتدئ',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'GEO مقابل SEO: لعبتان مختلفتان', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'لماذا تتحول حركة مرور الذكاء الاصطناعي بشكل مختلف', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'ما الأسس التقنية لـ GEO؟', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'أي زواحف الذكاء الاصطناعي يجب السماح بها في robots.txt؟', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'بنية المحتوى: ما تستشهد به محركات الذكاء الاصطناعي فعلاً', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'سيئ مقابل جيد: إعادة كتابة متوافقة مع GEO', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'هل لا يزال السيو التقليدي مهماً لـ GEO؟', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'أي منصات الذكاء الاصطناعي ترسل أكبر حركة إحالة؟', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'كيف تختلف GEO عبر المناطق والأسواق؟', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'كيف تحسّن المحتوى لـ GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'كيف تتتبع استشهادات الذكاء الاصطناعي؟', anchor: '#how-to-track-ai-citations' },
        { label: 'أخطاء GEO الشائعة (وكيفية إصلاحها)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'قراءة ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#frequently-asked-questions' },
        { label: 'المصادر والقراءات الإضافية', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/seo-meets-ai',
        inLanguage: 'ar',
        headline: 'السيو والذكاء الاصطناعي: كيف تحل GEO محل الدليل التقليدي',
        description: 'تحسين محركات البحث التوليدية (GEO) هو الطريقة التي تستشهد بها محركات البحث بالذكاء الاصطناعي بمحتواك. تعرّف على الفرق بين GEO والسيو، ولماذا تتحول حركة مرور الذكاء الاصطناعي بشكل أفضل، والأسس التقنية للحصول على استشهاد ChatGPT وPerplexity وGemini.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
        author: {
          '@type': 'Organization',
          name: 'PromptQuorum',
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
        image: buildOgImageObject(OG_SLUG, 'ar'),
        keywords: ['GEO', 'SEO', 'تحسين محركات البحث التوليدية', 'البحث بالذكاء الاصطناعي', 'الاستشهاد في ChatGPT', 'Perplexity', 'Google AI Overviews', 'JSON-LD schema', 'استشهادات الذكاء الاصطناعي', 'زواحف الذكاء الاصطناعي'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'مبتدئ',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ما الفرق بين SEO وGEO؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'يركز SEO (تحسين محركات البحث) على ترتيب الصفحات في نتائج محركات البحث التقليدية مثل Google وBing، حيث يختار المستخدم من قائمة روابط زرقاء. أما GEO (تحسين محركات البحث التوليدية) فيركز على أن يُستشهد بمحتواك داخل إجابات الذكاء الاصطناعي من ChatGPT وPerplexity وGemini وClaude — حيث يتلقى المستخدم إجابة واحدة مركّبة بدلاً من قائمة خيارات. كلاهما ضروري: تذكر Google أن الصفحة تحتاج فقط إلى الفهرسة والأهلية لعرض مقتطف كي تظهر في AI Overviews وAI Mode، لذا تبقى أساسيات السيو التقليدي تذكرة الدخول.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل تتحول حركة مرور بحث الذكاء الاصطناعي بشكل أفضل من البحث العضوي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'إلى حد ما في المتوسط، وبفارق أكبر بكثير في بعض حالات B2B. وجد تحليل WebFX لـ 2.3 مليار جلسة أن زوار الذكاء الاصطناعي التوليدي أتمّوا إجراءً قابلاً للقياس في 54.15% من الجلسات مقابل 45.23% للبحث العضوي. وأفادت Ahrefs بمعدلات تحويل أعلى بـ 23× من بحث الذكاء الاصطناعي لموقعها الخاص. أما في التجارة الإلكترونية فالأدلة متباينة — إذ وجد تحليل لـ 973 موقع تجارة إلكترونية نقلته Practical Ecommerce أن بحث الذكاء الاصطناعي تحوّل بشكل أسوأ من العضوي. وتبدو الميزة أوضح في B2B والمشتريات التي تتطلب دراسة طويلة.',
            },
          },
          {
            '@type': 'Question',
            name: 'إلى أي مدى يحسّن ترميز المخطط معدلات الاستشهاد بالذكاء الاصطناعي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تحقق الصفحات ذات ترميز JSON-LD الصحيح ما يصل إلى 40% ظهوراً إضافياً في النتائج المنسّقة (rich results) وفق دراسة لأحد الموردين، لكن الدليل على رفع مباشر للاستشهادات ضعيف. وجدت دراسة SearchAtlas لعام 2025 أن تغطية المخطط وحدها لا تزيد تكرار استشهاد LLM باستمرار عبر OpenAI وGemini وPerplexity، وتذكر Google أنه لا حاجة إلى مخطط خاص لـ AI Overviews أو AI Mode. استخدم المخطط لوصف الصفحة بدقة؛ وتبقى سلطة المحتوى وبنية الإجابة أولاً إشارتين أقوى.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما سرعة نمو بحث الذكاء الاصطناعي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نمت حركة مرور الذكاء الاصطناعي التوليدي 796% من يناير 2024 إلى ديسمبر 2025، ونمت تحويلات الجلسات 6,432% في الفترة نفسها. وارتفعت حركة المرور المولّدة بالذكاء الاصطناعي إلى مواقع التجزئة الأمريكية 4,700% على أساس سنوي حتى يوليو 2025. ورغم هذا النمو، وجدت WebFX أن الذكاء الاصطناعي التوليدي يمثل 0.18% فقط من إجمالي جلسات الويب — بينما لا يزال الوصول المباشر (35.51%) والبحث العضوي (27.12%) يهيمنان. وقاست SE Ranking، التي تتبعت 101,574 موقعاً من يناير 2025 إلى أبريل 2026، منصات الذكاء الاصطناعي عند 0.32% من إجمالي حركة مرور المواقع، مع إرسال ChatGPT نسبة 74.78% من حركة الإحالة هذه.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل لا يزال السيو مهماً في عصر بحث الذكاء الاصطناعي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم — السيو التقليدي هو أساس GEO وليس بديلاً عنه. تقول Google إن الصفحة يجب أن تكون مفهرسة ومؤهلة لعرض مقتطف كي تظهر في AI Overviews وAI Mode، دون أي متطلبات تقنية إضافية، لذا تأتي قابلية الزحف والفهرسة وجودة المحتوى أولاً. كما أن إشارات E-E-A-T (الخبرة والاختصاص والمصداقية والموثوقية) التي ترفع الترتيب التقليدي تعزز أيضاً احتمال الاستشهاد بالذكاء الاصطناعي. يشترك المجالان في المتطلبات الأساسية — والفرق أن GEO تضيف بنية الإجابة أولاً وكثافة الكيانات وترميز المخطط كطبقات إضافية.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما الخطوة الأولى لتحسين محتواي لـ GEO؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ابدأ بتدقيق محتواك الحالي بمنظور الذكاء الاصطناعي: اختر 10 من صفحاتك الأعلى زيارة واسأل ChatGPT وPerplexity وGoogle AI Overviews أسئلة مرتبطة بموضوعك. تحقق مما إذا كان محتواك مستشهداً به أو موصى به. يكشف هذا الثغرات التي لا تظهر فيها في إجابات الذكاء الاصطناعي. بعد ذلك أعطِ الأولوية لإضافة ترميز JSON-LD (Article وFAQPage الأعلى أثراً)، وإعادة هيكلة المحتوى بصيغة الإجابة أولاً، وإضافة أقسام أسئلة شائعة تستبق الأسئلة الفرعية التي تفكك أنظمة الذكاء الاصطناعي إليها استعلامات المستخدمين الأوسع.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما هو llms.txt وهل أحتاج إليه؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt هو عُرف مقترح (وليس معياراً رسمياً) لوضع ملخص بصيغة markdown لموقعك في جذر الموقع كي تقرأه نماذج اللغة. لا يوثّق أي مزوّد ذكاء اصطناعي كبير استخدامه في الزحف أو الاستشهاد، وتذكر Google أنك لا تحتاج إلى ملفات جديدة مقروءة آلياً أو ملفات نصية للذكاء الاصطناعي لتظهر في AI Overviews أو AI Mode. وهو اختياري ورخيص الإضافة ومفيد عندما يلصق شخص رابطه في مساعد، لكن لا تتوقع أن يغيّر الاستشهادات وحده.',
            },
          },
          {
            '@type': 'Question',
            name: 'كيف أجعل ChatGPT يستشهد بمحتواي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'اسمح لزاحف البحث الخاص بـ OpenAI (OAI-SearchBot) في robots.txt، وتأكد من أن الصفحة قابلة للفهرسة، واكتب كل قسم بحيث يجيب عن سؤال واحد في جملته الأولى بحقيقة محددة وموثقة بمصدر. يستشهد ChatGPT بمقاطع لا بصفحات كاملة، لذا يسهل اقتباس الفقرات المستقلة والقوائم والجداول وكتل الأسئلة الشائعة أكثر من النثر الطويل. لا توجد تقنية تضمن الاستشهاد: يختار ChatGPT مصادره لكل استعلام، وقد يعيد الموجّه نفسه مصادر مختلفة في أيام مختلفة.',
            },
          },
          {
            '@type': 'Question',
            name: 'كيف أتتبع ما إذا كانت محركات الذكاء الاصطناعي تستشهد بموقعي؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'اجمع ثلاثة مصادر. أولاً، Google Search Console: بيانات AI Overviews وAI Mode جزء من إجماليات تقرير الأداء، ومنذ يونيو 2026 يعرض تقرير منفصل (Search generative AI) مرات الظهور حسب الصفحة والبلد والجهاز. ثانياً، تحليلاتك: صفّ حركة الإحالة من chatgpt.com وperplexity.ai وgemini.google.com وclaude.ai. ثالثاً، مجموعة ثابتة من 10–20 موجّهاً تشغّلها وفق جدول وتسجّلها يدوياً أو بأداة مراقبة من طرف ثالث. تعامل مع التشغيل الواحد كحكاية فردية؛ فالاستشهادات تتفاوت بين التشغيلات.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل GEO مختلفة عن AEO (تحسين محركات الإجابة)؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO وAEO مرتبطتان ارتباطاً وثيقاً لكنهما ليستا متطابقتين. تركز AEO على التحسين لصناديق الإجابة المباشرة والمقتطفات المميزة في محركات البحث التقليدية. أما GEO فتستهدف تحديداً محركات الذكاء الاصطناعي التوليدية (ChatGPT وGemini وPerplexity وClaude) التي تركّب إجابات من مصادر متعددة باستخدام خطوط معالجة RAG. تتطلب GEO بنية الإجابة أولاً وترميز المخطط وكثافة الكيانات — وتتداخل تقنيات AEO معها كثيراً، لكن GEO تضيف شرط فقرات مستقلة قابلة للاستخراج يمكن الاستشهاد بها خارج سياقها.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ar',
        'name': 'السيو والذكاء الاصطناعي: المواضيع الرئيسية',
        'description': 'المفاهيم الأساسية لفهم تحسين محركات البحث التوليدية',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO مقابل SEO: لعبتان مختلفتان', 'description': 'فهم الفروق بين السيو التقليدي وتحسين محركات البحث التوليدية' },
          { '@type': 'ListItem', 'position': 2, 'name': 'لماذا تتحول حركة مرور الذكاء الاصطناعي بشكل مختلف', 'description': 'كيف يتحول الزوار القادمون من الذكاء الاصطناعي بمعدلات أعلى من البحث العضوي' },
          { '@type': 'ListItem', 'position': 3, 'name': 'الأسس التقنية لـ GEO', 'description': 'ترميز JSON-LD وأثره على معدلات الاستشهاد بالذكاء الاصطناعي' },
          { '@type': 'ListItem', 'position': 4, 'name': 'حزمة زواحف الذكاء الاصطناعي', 'description': 'فهم GPTBot وClaudeBot وPerplexityBot ومعايير llms.txt' },
          { '@type': 'ListItem', 'position': 5, 'name': 'بنية المحتوى والاستشهاد بالذكاء الاصطناعي', 'description': 'كيف تزيد بنية الإجابة أولاً وكثافة الكيانات والتنسيق الاستشهادات إلى أقصى حد' },
        ],
      },
      sections: {
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'تجعل GEO (تحسين محركات البحث التوليدية) المحتوى مستشهداً به في إجابات الذكاء الاصطناعي؛ ويرتّب السيو الصفحات في نتائج الروابط الزرقاء — وكلاهما مطلوب في 2026',
            'تتحول حركة مرور الذكاء الاصطناعي بمعدل 54.15% من الجلسات مقابل 45.23% للبحث العضوي (WebFX) — لكنها تمثل 0.18% فقط من إجمالي الجلسات في تلك البيانات و0.32% في بيانات SE Ranking',
            'يساعد ترميز المخطط الآلات على تحليل الصفحة، لكن Google تقول إن AI Overviews وAI Mode لا يحتاجان مخططاً خاصاً، ووجدت دراسة 2026 أنه لا رفع ثابتاً للاستشهادات من المخطط وحده',
            'تشترط Google فقط أن تكون الصفحة مفهرسة ومؤهلة لعرض مقتطف كي تظهر في AI Overviews وAI Mode — وتبقى أساسيات السيو التقليدي تذكرة الدخول',
            'ترسل ChatGPT نسبة 74.78% من حركة الإحالة من الذكاء الاصطناعي (SE Ranking، 2026)، متقدمة على Gemini (11.56%) وPerplexity (7.23%) — فحسّن لـ ChatGPT أولاً',
            'تسهل القوائم والجداول وكتل الأسئلة الشائعة على أنظمة الذكاء الاصطناعي استخراجها واقتباسها أكثر من النثر الكثيف — فابنِ كل قسم ليقف بمفرده',
            'ارتفعت حركة المرور المولّدة بالذكاء الاصطناعي إلى مواقع التجزئة الأمريكية 4,700% على أساس سنوي حتى يوليو 2025 — القناة صغيرة لكنها تنمو بسرعة غير مسبوقة',
            'اسمح لزواحف البحث (OAI-SearchBot وClaude-SearchBot وPerplexityBot وGooglebot)؛ فـ GPTBot وClaudeBot يتحكمان في استخدام التدريب لا في استشهادات البحث. ملف llms.txt اختياري — لا يوثّق أي مزوّد كبير استخدامه',
          ],
        },
        definition: {
          title: 'GEO مقابل SEO: لعبتان مختلفتان',
          content: [
            '**يكسب السيو التقليدي موضعاً بين 10 روابط زرقاء، بينما تكسب GEO استشهاداً بين المصادر الـ2—7 التي يذكرها نموذج الذكاء الاصطناعي عادةً في إجابة مركّبة واحدة.** إشارات الترتيب وصيغ المحتوى ومقاييس النجاح مختلفة جذرياً. إن فهم [كيف تعمل أنظمة الذكاء الاصطناعي وحدودها](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) أمر أساسي للتحسين لـ GEO.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 نصيحة احترافية',
              text: 'تذكر Google أن الصفحة تحتاج فقط إلى أن تكون مفهرسة ومؤهلة لعرض مقتطف كي تظهر في AI Overviews وAI Mode. لذا فإن قابلية الزحف والفهرسة وجودة المحتوى هي تذكرة الدخول إلى ظهور GEO على Google — وليست اختيارية.',
            },
          ],
          columns: ['الجانب', 'السيو التقليدي', 'تحسين محركات البحث التوليدية (GEO)'],
          rows: [
            { 'الجانب': 'الهدف الأساسي', 'السيو التقليدي': 'الترتيب بين المراكز 1—10 في Google/Bing', 'تحسين محركات البحث التوليدية (GEO)': 'الاستشهاد بك في إجابات الذكاء الاصطناعي' },
            { 'الجانب': 'المنصات المستهدفة', 'السيو التقليدي': 'Google وBing وYahoo', 'تحسين محركات البحث التوليدية (GEO)': 'ChatGPT وGemini وPerplexity وClaude وGoogle AI Overviews' },
            { 'الجانب': 'مقياس النجاح الأساسي', 'السيو التقليدي': 'الترتيب والنقرات وحركة المرور العضوية', 'تحسين محركات البحث التوليدية (GEO)': 'استشهادات الذكاء الاصطناعي وذكر العلامة التجارية في إجاباته' },
            { 'الجانب': 'نهج المحتوى', 'السيو التقليدي': 'الكلمات المفتاحية والروابط الخلفية والبيانات الوصفية', 'تحسين محركات البحث التوليدية (GEO)': 'حقائق غنية بالكيانات ومهيكلة وبصيغة الإجابة أولاً' },
            { 'الجانب': 'الوقت اللازم للنتائج', 'السيو التقليدي': '4—6 أشهر', 'تحسين محركات البحث التوليدية (GEO)': '6—12 شهراً' },
            { 'الجانب': 'تحويل الجلسات (WebFX)', 'السيو التقليدي': '45.23% (عضوي)', 'تحسين محركات البحث التوليدية (GEO)': '54.15% (الذكاء الاصطناعي التوليدي)' },
          ],
          blockquote: 'يعتمد السيو وGEO كلاهما على الأسس نفسها — الوضوح والسلطة والمحتوى المهيكل ونية المستخدم. الفرق أن محركات الذكاء الاصطناعي تفسّر هذه الإشارات عبر التعرف على الكيانات والاكتمال الدلالي بدلاً من الروابط الخلفية ومقاييس النقر. في جملة واحدة: إذا كان السيو التقليدي سباقاً للوصول إلى الصفحة الأولى، فإن GEO تعني أن تكون المصدر الذي يقتبس منه الذكاء الاصطناعي حين يعرف الإجابة أصلاً.',
        },
        conversionAnalysis: {
          title: 'لماذا تتحول حركة مرور الذكاء الاصطناعي بشكل مختلف',
          content: [
            '**يتحول الزوار القادمون من محركات البحث بالذكاء الاصطناعي بمعدلات أعلى بكثير من زوار البحث العضوي — لأنهم يصلون مطّلعين مسبقاً، بعد أن ركّب الذكاء الاصطناعي الخيارات وقارن بينها نيابةً عنهم.**',
            '**ملاحظة حول المقاييس:** تقيس الدراسات أدناه أشياء مختلفة — معدل تحويل الجلسات (WebFX)، والارتفاع في إتمام الأهداف (Ahrefs)، والتحويل الخاص بـ B2B (SEMrush). هذه الأرقام غير قابلة للمقارنة المباشرة؛ وكل منها موثق بمصدره وموسوم.',
            'وجد تحليل WebFX لـ 2.3 مليار جلسة موقع (يناير 2024—ديسمبر 2025) ما يلي:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ تحذير',
              text: 'يختلف ارتفاع التحويل حسب القطاع. تُظهر بيانات WebFX عبر القطاعات 54.15% مقابل 45.23% في تحويل الجلسات، بينما وجد تحليل واحد للتجارة الإلكترونية أن حركة الذكاء الاصطناعي تتحول بشكل أسوأ من العضوية. اختبر حركة مرورك الخاصة للتأكد من انطباق الميزة على قطاعك.',
            },
          ],
          items: [
            'نمت حركة مرور الذكاء الاصطناعي التوليدي **796% خلال عامين**',
            'تحول الزوار القادمون من الذكاء الاصطناعي بمعدل **54.15% من الجلسات** مقابل 45.23% للبحث العضوي',
            'نمت تحويلات حركة مرور الذكاء الاصطناعي **6,432% على أساس سنوي** — أسرع من نمو الجلسات، أي أن حصة أكبر من الزوار تُتمّ التحويل',
          ],
          blockquote: 'العلاوة أكبر في بعض حالات B2B. أفادت Ahrefs بأن أدوات بحث الذكاء الاصطناعي تحولت بمعدل 23× معدل البحث العضوي لموقعها الخاص. ووجدت SEMrush أن حركة بحث الذكاء الاصطناعي تحولت بمعدل 4.4× المعدل العضوي في دراسة شملت أكثر من 500 موضوع B2B. غير أن تحليل لـ 973 موقع تجارة إلكترونية نقلته Practical Ecommerce وجد أن الزوار القادمين من الذكاء الاصطناعي تحولوا بشكل أسوأ من العضويين — فالميزة تعتمد على المهمة والقطاع. وتعرّف WebFX تحويل الجلسة بأنه إجراء قابل للقياس (إرسال نموذج أو تنزيل أو طلب عرض سعر) ضمن الجلسة نفسها، لذا فإن رقمي 54.15% و45.23% ليسا معدلات شراء. كما أن الاستشهاد بالذكاء الاصطناعي ليس حتمياً: فالسؤال نفسه قد يعيد مصادر مختلفة من نماذج مختلفة، ومن النموذج نفسه في أيام مختلفة.',
        },
        technicalFoundations: {
          title: 'ما الأسس التقنية لـ GEO؟',
          content: [
            '**يساعد ترميز JSON-LD الصحيح محركات البحث وأنظمة الذكاء الاصطناعي على تحليل من كتب الصفحة وما تجيب عنه ومتى حُدّثت — لكنه ليس مفتاح استشهاد: تذكر Google أنه لا حاجة إلى مخطط خاص للظهور في AI Overviews أو AI Mode.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) هو صيغة المخطط التي توصي بها Google وأكثر صيغ البيانات المهيكلة قابلية للتحليل من الذكاء الاصطناعي. يوضع في كتلة `<script>` داخل `<head>` الصفحة، فيفصل التسميات الدلالية عن HTML المرئي — مما يجعله منفصلاً عنه وأسهل صيانة من Microdata أو RDFa المضمّنة. وعند دمجه مع [كتابة جيدة البنية](/ar/prompt-engineering/write-better-code-with-ai)، يصبح ترميز المخطط أساس GEO لديك.',
            'أنواع المخطط التي تصف صفحة المحتوى بأكبر دقة:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 نقطة أساسية',
              text: 'وجدت دراسة SearchAtlas لعام 2025 أن ترميز المخطط وحده لا يضمن معدلات استشهاد أعلى بالذكاء الاصطناعي، وتقول Google إن البيانات المهيكلة يجب أن تطابق نص الصفحة المرئي. وتبقى سلطة المحتوى وبنية الإجابة أولاً إشارتين أقوى.',
            },
          ],
          items: [
            '**Article / TechArticle** — يحدد التأليف وتاريخ النشر وفئة الموضوع',
            '**FAQPage** — أزواج أسئلة وأجوبة تستخرجها محركات الإجابة بالذكاء الاصطناعي مباشرة',
            '**HowTo** — خطوات مرقّمة يفضلها الذكاء الاصطناعي في الاستعلامات الإجرائية',
            '**Organization** — التعرف على الكيان: من أنت وماذا تفعل ورابطك الرسمي',
            '**BreadcrumbList** — يشير إلى التسلسل الهرمي للمحتوى وعمق الموضوع',
          ],
          blockquote: 'تنبيه مهم: وجدت دراسة SearchAtlas لعام 2025 التي حللت تبنّي المخطط مقابل تكرار الاستشهاد عبر OpenAI وGemini وPerplexity أن زيادة تغطية المخطط وحدها لا تنتج باستمرار معدلات استشهاد أعلى من LLM. يجعل المخطط المحتوى أسهل تحليلاً — لكن سلطة المحتوى وكثافة الكيانات وبنية الإجابة أولاً تبقى إشارات الاستشهاد الأقوى.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'أي زواحف الذكاء الاصطناعي يجب السماح بها في robots.txt؟',
          content: [
            '**يشغّل كل مزوّد ذكاء اصطناعي روبوتات منفصلة للبحث والتدريب وجلب الصفحات بطلب المستخدم — اسمح بروبوتات البحث إذا أردت الاستشهادات، وقرّر بشأن روبوتات التدريب بشكل منفصل.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ أفضل ممارسة',
              text: 'راجع ملف `robots.txt` الخاص بك مقابل أسماء الروبوتات أدناه واختبره على الملف الفعلي. ملف `llms.txt` اختياري: فهو عُرف مقترح على [llmstxt.org](https://llmstxt.org)، ولا يوثّق أي مزوّد ذكاء اصطناعي كبير استخدامه في الزحف أو الاستشهاد.',
            },
          ],
          items: [
            '**OAI-SearchBot** — زاحف OpenAI لنتائج بحث ChatGPT؛ حجبه يخفي موقعك عن إجابات بحث ChatGPT',
            '**GPTBot** — زاحف OpenAI لتدريب النماذج التوليدية؛ حجبه لا يزيلك من بحث ChatGPT',
            '**ChatGPT-User** — يجلب صفحة عندما يسأل شخص ChatGPT عنها؛ تقول OpenAI إن قواعد robots.txt قد لا تنطبق على هذه الطلبات التي يبدأها المستخدم',
            '**Claude-SearchBot** و**Claude-User** — روبوتا Anthropic لفهرسة البحث والاسترجاع بطلب المستخدم؛ أما **ClaudeBot** فهو زاحف التدريب',
            '**PerplexityBot** — يعرض المواقع ويربط بها في نتائج Perplexity ولا يُستخدم للتدريب؛ أما **Perplexity-User** فيعالج طلبات المستخدمين وعموماً يتجاهل robots.txt',
            '**Googlebot** — الزاحف المسؤول عن فهرسة بحث Google التي تعتمد عليها AI Overviews وAI Mode؛ أما الرمز **Google-Extended** فيتحكم في تدريب Gemini والإسناد، ولا يؤثر في الإدراج في البحث أو الترتيب',
          ],
          blockquote: 'حجب روبوت تدريب (GPTBot أو ClaudeBot أو Google-Extended) قرار منفصل عن حجب روبوت بحث. تجنب الحجب بعنوان IP: تشير Anthropic إلى أن حجب IP قد يمنع روبوتاتها من قراءة robots.txt أصلاً.',
        },
        contentStructure: {
          title: 'بنية المحتوى: ما تستشهد به محركات الذكاء الاصطناعي فعلاً',
          content: [
            '**تسهل القوائم والجداول وكتل الأسئلة الشائعة على أنظمة الذكاء الاصطناعي استخراجها واقتباسها أكثر من النثر الكثيف، لأن الاسترجاع يعمل على المقاطع: فالقسم المستقل بصيغة الإجابة أولاً يمكن الاستشهاد به دون بقية الصفحة.**',
            'تستخدم محركات الذكاء الاصطناعي التوليد المعزز بالاسترجاع (RAG) — فتبحث في فهرس أولاً، وتسترجع المقاطع المطابقة، ثم تركّب إجابة. هذا يعني أن محتواك يجب أن يكون قابلاً للاستشهاد على مستوى الفقرة أو القسم، لا على مستوى الصفحة فقط. يمكن استخراج قسم واحد جيد البنية والاستشهاد به دون أن يستهلك الذكاء الاصطناعي صفحتك كاملة.',
            'المبادئ الخمسة للمحتوى التي تزيد احتمال الاستشهاد بالذكاء الاصطناعي إلى أقصى حد:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'يستخرج التوليد المعزز بالاسترجاع (RAG) مقاطع فردية من محتواك ويستشهد بها، لا صفحات كاملة — لذا فالبنية أهم من عدد الكلمات.',
            },
            {
              type: 'in-plain-terms',
              text: 'فكّر في محتواك ككتاب مدرسي. لا تقرأ أنظمة الذكاء الاصطناعي من الغلاف إلى الغلاف؛ بل تبحث عن إجابة سؤال محدد، وتسحب الفقرة ذات الصلة، وتستشهد بها، ثم تمضي. فقرة واضحة ومستقلة تتفوق على 5,000 كلمة من النثر.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ تحذير',
              text: 'تتجاهل زواحف الذكاء الاصطناعي اللغة التسويقية الغامضة ("قوي" و"سلس" و"ثوري" و"رائد"). استخدم حقائق محددة: أرقاماً دقيقة وكيانات مسماة وادعاءات قابلة للقياس. إذا لم تستطع توثيقه بمصدر، فلن تستخرجه أنظمة الذكاء الاصطناعي.',
            },
          ],
          items: [
            '**الإجابة أولاً** — ضع الإجابة المباشرة في الجملة الأولى من كل قسم؛ تأخذ زواحف الذكاء الاصطناعي عينة من الجملة الافتتاحية تحت كل عنوان. هذا هو المبدأ الأساسي لـ [هندسة الموجّهات](/ar/prompt-engineering/what-is-prompt-engineering) مطبقاً على الكتابة',
            '**كثافة الكيانات** — اذكر 5—7 كيانات مسماة في كل مقال (أسماء المنتجات والشركات والمصطلحات التقنية وأسماء الباحثين) للإشارة إلى السلطة الموضوعية. بهذه الطريقة تُعلم أنظمة الذكاء الاصطناعي أن موضوعك موثوق وقابل للاستشهاد',
            '**الاكتمال الدلالي** — يجب أن يجيب كل قسم عن سؤاله دون الحاجة إلى سياق من أقسام أخرى؛ يستخرج الذكاء الاصطناعي المقاطع بمعزل عن غيرها',
            '**حقائق محددة بدلاً من ادعاءات غامضة** — يُستشهد بالأرقام الدقيقة والتواريخ والمصادر المسماة؛ أما عبارات مثل "حل رائد" أو "أداة قوية" فتُتجاهل',
            '**تنسيق مهيكل** — الجداول والقوائم النقطية مقروءة آلياً؛ أما الفقرات النثرية فتتطلب معالجة لغوية ويُستشهد بها بوتيرة أقل',
          ],
        },
        goodExample: {
          title: 'سيئ مقابل جيد: إعادة كتابة متوافقة مع GEO',
          content: [
            '**سيئ — نثر خالٍ من المعلومات (لن يُستشهد به):**',
            '> منصتنا حل قوي وشامل يتكامل بسلاسة مع أدوات الذكاء الاصطناعي الرائدة لتحقيق نتائج رائدة في القطاع.',
            'يمكن لأي منافس نشر هذا النص كما هو. لا كيانات ولا حقائق محددة ولا ادعاءات قابلة للتحقق — تتخطاه محركات الذكاء الاصطناعي كلياً.',
            '**جيد — غني بالكيانات وكثيف الحقائق (جاهز للاستشهاد):**',
          ],
          blockquote: 'يرسل PromptQuorum موجّهاً واحداً إلى ما يصل إلى 25 نموذج ذكاء اصطناعي في وقت واحد — بما في ذلك GPT-5.6 (OpenAI) وClaude Opus 5 (Anthropic) وGemini 3 Pro (Google DeepMind) ونماذج محلية عبر Ollama — ويعيد جميع الإجابات جنباً إلى جنب للمقارنة.',
        },
        goodExampleExplanation: {
          content: [
            'أربعة كيانات مسماة، ورقم محدد واحد (25)، ووظيفة واحدة قابلة للتحقق (المقارنة جنباً إلى جنب). تستخرج محركات الذكاء الاصطناعي هذا وتنسبه فوراً. يتضمن PromptQuorum 9 أطر موجّهات مدمجة (CO-STAR وCRAFT وRISEN وSPECS وTRACE وأربعة أخرى) تساعد في هيكلة المحتوى لتلبية متطلبات GEO هذه مباشرة داخل التطبيق.',
          ],
        },
        seoFoundation: {
          title: 'هل لا يزال السيو التقليدي مهماً لـ GEO؟',
          content: [
            '**يعتمد Google AI Overviews وAI Mode على الفهرس نفسه الذي يعتمد عليه البحث التقليدي: يجب أن تكون الصفحة مفهرسة ومؤهلة لعرض مقتطف، لذا تغذي أساسيات السيو ظهور GEO.**',
            'تذكر وثائق Google عن ميزات الذكاء الاصطناعي أنه لا توجد متطلبات إضافية للظهور في AI Overviews أو AI Mode، وأنه لا حاجة إلى تحسين خاص يتجاوز أفضل ممارسات السيو القياسية. تجد دراسات الأطراف الثالثة أن الصفحات الظاهرة أصلاً في النتائج التقليدية يُستشهد بها أكثر، لكن هذه الدراسات تقيس ارتباطاً، والصفحات المستشهد بها لا تطابق دائماً نتائج المراكز العشرة الأولى.',
            'حزمة السيو + GEO الهجينة:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'تعزز إشارات E-E-A-T (الخبرة والاختصاص والمصداقية والموثوقية) كلاً من ترتيب البحث التقليدي واحتمال الاستشهاد بالذكاء الاصطناعي.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 نصيحة احترافية',
              text: 'لا تتخلَّ عن السيو من أجل GEO. فهما يعزز أحدهما الآخر: حسّن Core Web Vitals (السيو) ← ترتيب أعلى ← استشهاد في AI Overviews (GEO). وتقوّي إشارات E-E-A-T كليهما. حسّن الحزمة كاملة، لا طبقة واحدة فقط.',
            },
          ],
          columns: ['الطبقة', 'ما يجب فعله', 'السبب'],
          rows: [
            {
              'الطبقة': 'السيو التقني',
              'ما يجب فعله': 'سرعة الصفحة والجوال وCore Web Vitals وعناوين canonical',
              'السبب': 'تحترم روبوتات GEO إشارات قابلية الزحف نفسها التي يحترمها Googlebot',
            },
            {
              'الطبقة': 'سيو المحتوى',
              'ما يجب فعله': 'إشارات E-E-A-T ومؤهلات الكاتب وتواريخ نشر مرئية؛ [تعرّف على كيفية كتابة محتوى أفضل](/ar/prompt-engineering/write-better-code-with-ai)',
              'السبب': 'تفضل محركات الذكاء الاصطناعي المحتوى ذا إشارات السلطة الصريحة',
            },
            {
              'الطبقة': 'سيو الكيانات',
              'ما يجب فعله': 'JSON-LD schema وتحسين الرسم المعرفي (knowledge graph)',
              'السبب': 'تبني الآلات رسوماً للكيانات؛ وتُتخطى الصفحات الغامضة',
            },
            {
              'الطبقة': 'خاص بـ GEO',
              'ما يجب فعله': 'بنية الإجابة أولاً وأقسام الأسئلة الشائعة وllms.txt',
              'السبب': 'يحسّن الاستخراج بواسطة خطوط معالجة RAG',
            },
            {
              'الطبقة': 'بناء الاستشهادات',
              'ما يجب فعله': 'روابط من مصادر موثوقة (arXiv وReuters والوثائق الرسمية)',
              'السبب': 'روابط موثوقة قد تعزز السلطة؛ أثرها في الاستشهاد غير مثبت',
            },
          ],
        },
        platformBreakdown: {
          title: 'أي منصات الذكاء الاصطناعي ترسل أكبر حركة إحالة؟',
          content: [
            '**ترسل ChatGPT نسبة 74.78% من حركة الإحالة من الذكاء الاصطناعي إلى المواقع؛ ويليها Gemini بنسبة 11.56% وPerplexity بنسبة 7.23% وCopilot بنسبة 3.51% وClaude بنسبة 2.62% (SE Ranking، 101,574 موقعاً، يناير 2025–أبريل 2026) — مما يجعل ChatGPT الهدف الأعلى أثراً لـ GEO في معظم المواقع.**',
            'هذه حصص من الزيارات التي ترسلها منصات الذكاء الاصطناعي إلى المواقع، لا حصص من المستخدمين أو الاستعلامات. تُبلغ متتبعات أخرى عن توزيعات مختلفة (وضعت StatCounter ChatGPT عند 78.16% في مارس 2026؛ ووضعته متتبعة تركز على B2B عند 62.6%)، لذا اعتبر الترتيب مستقراً والنسبة الدقيقة تقريبية.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 هل تعلم؟',
              text: 'تعرض Perplexity مصادرها مع كل إجابة، مما يجعلها أسهل منصة للتحقق مما إذا كان محتواك مستشهداً به. وبمجموعها لا تزال منصات الذكاء الاصطناعي ترسل 0.32% فقط من إجمالي حركة مرور المواقع (SE Ranking، 2026)، لذا أبقِ البحث التقليدي في خطتك.',
            },
          ],
          columns: ['المنصة', 'حصة الإحالة من الذكاء الاصطناعي', 'زاحف البحث', 'أسلوب الاستشهاد'],
          rows: [
            {
              'المنصة': 'ChatGPT (OpenAI)',
              'حصة الإحالة من الذكاء الاصطناعي': '74.78%',
              'زاحف البحث': 'OAI-SearchBot',
              'أسلوب الاستشهاد': 'روابط مصادر ضمن النص مع مقتطفات مقتبسة',
            },
            {
              'المنصة': 'Microsoft Copilot',
              'حصة الإحالة من الذكاء الاصطناعي': '3.51%',
              'زاحف البحث': 'Bingbot',
              'أسلوب الاستشهاد': 'صفحات مفهرسة في Bing، واستشهادات بصيغة هوامش',
            },
            {
              'المنصة': 'Google Gemini / AI Overviews',
              'حصة الإحالة من الذكاء الاصطناعي': '11.56%',
              'زاحف البحث': 'Googlebot',
              'أسلوب الاستشهاد': 'صفحات مفهرسة ومؤهلة لعرض مقتطف في بحث Google',
            },
            {
              'المنصة': 'Perplexity AI',
              'حصة الإحالة من الذكاء الاصطناعي': '7.23%',
              'زاحف البحث': 'PerplexityBot',
              'أسلوب الاستشهاد': 'قائمة مصادر مرقّمة مع كل إجابة',
            },
            {
              'المنصة': 'Claude (Anthropic)',
              'حصة الإحالة من الذكاء الاصطناعي': '2.62%',
              'زاحف البحث': 'Claude-SearchBot',
              'أسلوب الاستشهاد': 'يستشهد بالمصادر عند تفعيل البحث على الويب',
            },
          ],
          blockquote: 'بيانات الحصص من SE Ranking (يونيو 2026). تتغير توزيعات المنصات من شهر إلى آخر، لذا أعد التحقق من الأرقام قبل بناء قرارات الميزانية عليها.',
        },
        globalContext: {
          title: 'كيف تختلف GEO عبر المناطق والأسواق؟',
          content: [
            'يجب على الشركات الأوروبية الموازنة بين الاستثمار في GEO والامتثال لقانون الذكاء الاصطناعي في الاتحاد الأوروبي، الذي يشترط الشفافية بشأن المحتوى المولّد بالذكاء الاصطناعي ويحظر أنظمة الذكاء الاصطناعي المضللة. تتوسع Mistral AI (فرنسا) في حضورها البحثي الأوروبي — ويجب أن يتوافق المحتوى المحسّن لمنصات الذكاء الاصطناعي الأوروبية مع متطلبات الاتحاد الصارمة لإسناد مصادر البيانات.',
            'في الصين، يهيمن على البحث التوليدي منتجات البحث المبنية على **Baidu ERNIE** و**Alibaba Qwen**. تتطلب استراتيجيات GEO التي تستهدف الأسواق الصينية التحسين لرسوم الكيانات باللغة الصينية، وهي تختلف عن قواعد معرفة Google أو OpenAI. وتُلزم القواعد الصينية الخاصة بالذكاء الاصطناعي التوليدي، ومنها التدابير المؤقتة (2023) وتدابير 2025 بشأن وسم المحتوى المولّد بالذكاء الاصطناعي، المزوّدين بوسم المحتوى المولّد بالذكاء الاصطناعي، مما يؤثر في كيفية عرض المنصات الصينية للمصادر.',
            'تستخدم المؤسسات اليابانية الخاضعة لإرشادات حوكمة البيانات الصادرة عن METI بشكل متزايد أدوات بحث بالذكاء الاصطناعي داخل المقر — مما يعني أن GEO للجمهور المؤسسي الياباني يجب أن تعطي الأولوية للمحتوى الذي يظهر في الفهارس المحلية ويلتزم بإطار METI لحوكمة الذكاء الاصطناعي لعام 2024، وليس Google AI Overviews وحدها.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 نقطة أساسية',
              text: 'للأسواق الأوروبية والصينية واليابانية متطلبات تنظيمية مميزة لإسناد محتوى الذكاء الاصطناعي. إذا كنت تخدم جمهوراً دولياً، فقم بتوطين استراتيجية GEO. لن يلبي نهج عالمي واحد جميع معايير الامتثال الإقليمية.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'كيف تتتبع استشهادات الذكاء الاصطناعي؟',
          content: [
            '**تتبع استشهادات الذكاء الاصطناعي عبر ثلاثة مصادر: Google Search Console لميزات الذكاء الاصطناعي في Google، وحركة الإحالة في تحليلاتك من ChatGPT وPerplexity وGemini وClaude، ومجموعة ثابتة من الموجّهات تعيد تشغيلها وفق جدول.**',
            'منذ يونيو 2026 يتضمن Search Console تقرير أداء Search generative AI يعرض مرات الظهور في AI Overviews وAI Mode وDiscover حسب الصفحة والبلد والجهاز؛ وتبقى البيانات نفسها في تقرير الأداء العام. يعرض التقرير مرات الظهور لا نص الإجابة، فيخبرك أين تظهر لا لماذا.',
          ],
          items: [
            '**Search Console** — افتح تقرير الذكاء الاصطناعي التوليدي ولاحظ الصفحات التي تكسب مرات ظهور بعد تغيير البنية',
            '**إحالات التحليلات** — صنّف الزيارات من chatgpt.com وperplexity.ai وgemini.google.com وclaude.ai؛ وتوقع أرقاماً صغيرة',
            '**مجموعة الموجّهات** — احتفظ بـ 10–20 سؤالاً يجب أن تجيب عنها صفحتك، وشغّلها أسبوعياً في كل مساعد، وسجّل الروابط المذكورة',
            '**سجلات الخادم** — احسب الطلبات من OAI-SearchBot وClaude-SearchBot وPerplexityBot للتأكد من أن الصفحات تُجلب',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ تحذير',
              text: 'تتفاوت إجابات الذكاء الاصطناعي بين التشغيلات. استشهاد واحد، أو غياب استشهاد واحد، حكاية فردية. قارن مجموعة موجّهات على مدى أسابيع عدة قبل الاستنتاج بأن تغييراً ما نجح.',
            },
          ],
        },
        relatedReading: {
          title: 'قراءة ذات صلة',
          items: [
            '[ما هي هندسة الموجّهات؟](/ar/prompt-engineering/what-is-prompt-engineering) — كيف تحدد التعليمات المهيكلة ما تستخرجه أنظمة الذكاء الاصطناعي وتستشهد به',
            '[حدود الذكاء الاصطناعي — ما لا تستطيع LLMs فعله](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) — تقنيات التحقق من ادعاءات المحتوى المولّد بالذكاء الاصطناعي',
            '[اكتب كوداً أفضل بالذكاء الاصطناعي](/ar/prompt-engineering/write-better-code-with-ai) — تطبيق بنية متوافقة مع GEO على توليد الكود بمساعدة الذكاء الاصطناعي',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'كيف تحسّن المحتوى لـ GEO (تحسين محركات البحث التوليدية)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ أفضل ممارسة',
              text: 'ابدأ بـ ChatGPT أولاً (74.78% من حركة الإحالة من الذكاء الاصطناعي)، ثم Gemini وPerplexity. يحقق نهج 80/20 هذا أكبر عائد دون تشتيت الجهد على منصات أصغر.',
            },
          ],
          numberedItems: [
            '**دقّق محتواك الحالي بمنظور الذكاء الاصطناعي: قابلية البحث وقابلية الاستشهاد.** اختر 10 من صفحاتك الأعلى زيارة واسأل ChatGPT وPerplexity وGoogle AI Overviews هل تستشهد بمحتواك أو توصي به عند الإجابة عن استعلامات مرتبطة بموضوعك. حدد الثغرات التي لا تظهر فيها.',
            '**ابنِ محتواك بصيغة الإجابة أولاً مع حقائق قابلة للتحقق وترميز مخطط واضح.** ابدأ كل قسم بإجابة مباشرة (لا بسؤال). ادعم كل ادعاء بمصادر أو منطق واضح. أضف JSON-LD schema (Article وFAQPage وHowTo وBreadcrumb) كي تفهم زواحف الذكاء الاصطناعي بنية محتواك.',
            '**ضمّن نية الكلمة المفتاحية، لا الكلمة المفتاحية وحدها.** إذا كنت تتصدر لعبارة "أفضل أدوات الذكاء الاصطناعي"، فإن GEO تتطلب أن تجيب عن "ما الذي يجعل أداة الذكاء الاصطناعي الأفضل؟" (الدقة والسرعة والتكلفة وسهولة الاستخدام). تعتمد أنظمة الذكاء الاصطناعي مطابقة النية لا مطابقة الكلمات المفتاحية — تأكد من أن إجابتك تطابق ما تستنتج هذه الأنظمة أن المستخدم يريده.',
            '**ابنِ أقسام أسئلة شائعة تجيب عن الأسئلة المشتقة التي تطرحها أنظمة الذكاء الاصطناعي.** تفكك أنظمة الذكاء الاصطناعي الاستعلامات الواسعة إلى أسئلة فرعية. إذا كنت تستهدف "هلوسات الذكاء الاصطناعي"، فأضف أقسام أسئلة شائعة تجيب عن "ما مدى شيوع هلوسات الذكاء الاصطناعي؟" و"هل يمكن منع الهلوسات؟" و"أي النماذج تهلوس أكثر؟".',
            '**راجع ملف robots.txt وأضف ملف llms.txt اختيارياً.** اسمح لـ OAI-SearchBot وClaude-SearchBot وPerplexityBot وGooglebot. ملف llms.txt عُرف مقترح لا يوثّق أي مزوّد ذكاء اصطناعي كبير استخدامه، لذا تعامل معه كتوثيق اختياري لا كرافعة ترتيب.',
          ],
        },
        commonMistakes: {
          title: 'أخطاء GEO الشائعة (وكيفية إصلاحها)',
          mistakes: [
            {
              mistake: 'معاملة GEO كتحسين للكلمات المفتاحية بدلاً من تحسين للاستشهاد.',
              problem: 'تحسّن الصفحات لاستعلامات البحث لا للاستخراج والاستشهاد بواسطة الذكاء الاصطناعي. تعتمد أنظمة الذكاء الاصطناعي مطابقة النية والاكتمال الدلالي، لا كثافة الكلمات المفتاحية.',
              fix: 'غيّر التركيز: ابنِ المحتوى ليجيب عن السؤال كاملاً في أول 2–3 جمل من كل قسم. استخدم كيانات دقيقة وأرقاماً محددة بدلاً من تكرار الكلمات المفتاحية. اختبر مع ChatGPT وPerplexity مباشرة لترى ما يُستشهد به.',
            },
            {
              mistake: 'تجاهل السيو التقليدي لأنك "تراهن كلياً على GEO".',
              problem: 'لا يمكن للصفحات غير المفهرسة أو غير المؤهلة لعرض مقتطف أن تظهر في Google AI Overviews أو AI Mode. تتطلب GEO السيو كأساس.',
              fix: 'نهج الطبقتين: حافظ على إشارات E-E-A-T قوية وCore Web Vitals وجودة الروابط الخلفية (السيو). ثم أضف فوقها بنية الإجابة أولاً وترميز المخطط وأقسام الأسئلة الشائعة (GEO). فهما يعزز أحدهما الآخر.',
            },
            {
              mistake: 'الاعتماد المفرط على ترميز المخطط وحده لتحسين الاستشهادات بالذكاء الاصطناعي.',
              problem: 'يجعل المخطط المحتوى أسهل تحليلاً لأنظمة الذكاء الاصطناعي، لكن السلطة وبنية المحتوى إشارتا استشهاد أقوى. صفحة ذات مخطط مثالي ونثر غامض لن يُستشهد بها.',
              fix: 'اجمع الطبقات: أضف JSON-LD schema + بنية الإجابة أولاً + كثافة الكيانات. وجدت دراسة SearchAtlas لعام 2025 أن المخطط وحده أثره محدود دون سلطة محتوى قوية.',
            },
            {
              mistake: 'التحسين لجميع منصات الذكاء الاصطناعي بالتساوي بدلاً من ترتيب الأولويات حسب الحصة السوقية.',
              problem: 'ترسل ChatGPT نسبة 74.78% من حركة الإحالة من الذكاء الاصطناعي. وتوزيع جهد التحسين على 5 منصات يضعف العائد.',
              fix: 'ابدأ بـ ChatGPT أولاً (زحف OAI-SearchBot وبنية الإجابة أولاً وأقسام الأسئلة الشائعة). ثم حسّن لـ Gemini وPerplexity (التي تسرد مصادرها مع كل إجابة). ووسّع إلى Claude بعد ذلك.',
            },
            {
              mistake: 'كتابة فقرات كثيفة بدلاً من محتوى قائم على القوائم.',
              problem: 'النثر الكثيف أصعب اقتباساً من القوائم والجداول. تستخدم أنظمة الذكاء الاصطناعي RAG (التوليد المعزز بالاسترجاع) وتستخرج الأقسام المهيكلة بموثوقية أكبر.',
              fix: 'حوّل الأوصاف النثرية إلى قوائم نقطية حيثما أمكن. استخدم الجداول للمقارنات. اجعل الفقرات من 2–3 جمل كحد أقصى. تأخذ زواحف الذكاء الاصطناعي عينة من الجملة الأولى تحت كل عنوان لتقرر هل تستخرج القسم.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'ما الفرق بين SEO وGEO؟',
              a: 'يركز SEO (تحسين محركات البحث) على ترتيب الصفحات في نتائج محركات البحث التقليدية مثل Google وBing، حيث يختار المستخدم من قائمة روابط زرقاء. أما GEO (تحسين محركات البحث التوليدية) فيركز على أن يُستشهد بمحتواك داخل إجابات الذكاء الاصطناعي من ChatGPT وPerplexity وGemini وClaude — حيث يتلقى المستخدم إجابة واحدة مركّبة بدلاً من قائمة خيارات. كلاهما ضروري: تذكر Google أن الصفحة تحتاج فقط إلى الفهرسة والأهلية لعرض مقتطف كي تظهر في AI Overviews وAI Mode، لذا تبقى أساسيات السيو التقليدي تذكرة الدخول.',
            },
            {
              q: 'هل تتحول حركة مرور بحث الذكاء الاصطناعي بشكل أفضل من البحث العضوي؟',
              a: 'إلى حد ما في المتوسط، وبفارق أكبر بكثير في بعض حالات B2B. وجد تحليل WebFX لـ 2.3 مليار جلسة أن زوار الذكاء الاصطناعي التوليدي أتمّوا إجراءً قابلاً للقياس في 54.15% من الجلسات مقابل 45.23% للبحث العضوي. وأفادت Ahrefs بمعدلات تحويل أعلى بـ 23× من بحث الذكاء الاصطناعي لموقعها الخاص. أما في التجارة الإلكترونية فالأدلة متباينة — إذ وجد تحليل لـ 973 موقع تجارة إلكترونية نقلته Practical Ecommerce أن بحث الذكاء الاصطناعي تحوّل بشكل أسوأ من العضوي. وتبدو الميزة أوضح في B2B والمشتريات التي تتطلب دراسة طويلة.',
            },
            {
              q: 'إلى أي مدى يحسّن ترميز المخطط معدلات الاستشهاد بالذكاء الاصطناعي؟',
              a: 'تحقق الصفحات ذات ترميز JSON-LD الصحيح ما يصل إلى 40% ظهوراً إضافياً في النتائج المنسّقة (rich results) وفق دراسة لأحد الموردين، لكن الدليل على رفع مباشر للاستشهادات ضعيف. وجدت دراسة SearchAtlas لعام 2025 أن تغطية المخطط وحدها لا تزيد تكرار استشهاد LLM باستمرار عبر OpenAI وGemini وPerplexity، وتذكر Google أنه لا حاجة إلى مخطط خاص لـ AI Overviews أو AI Mode. استخدم المخطط لوصف الصفحة بدقة؛ وتبقى سلطة المحتوى وبنية الإجابة أولاً إشارتين أقوى.',
            },
            {
              q: 'ما سرعة نمو بحث الذكاء الاصطناعي؟',
              a: 'نمت حركة مرور الذكاء الاصطناعي التوليدي 796% من يناير 2024 إلى ديسمبر 2025، ونمت تحويلات الجلسات 6,432% في الفترة نفسها. وارتفعت حركة المرور المولّدة بالذكاء الاصطناعي إلى مواقع التجزئة الأمريكية 4,700% على أساس سنوي حتى يوليو 2025. ورغم هذا النمو، وجدت WebFX أن الذكاء الاصطناعي التوليدي يمثل 0.18% فقط من إجمالي جلسات الويب — بينما لا يزال الوصول المباشر (35.51%) والبحث العضوي (27.12%) يهيمنان. وقاست SE Ranking، التي تتبعت 101,574 موقعاً من يناير 2025 إلى أبريل 2026، منصات الذكاء الاصطناعي عند 0.32% من إجمالي حركة مرور المواقع، مع إرسال ChatGPT نسبة 74.78% من حركة الإحالة هذه.',
            },
            {
              q: 'هل لا يزال السيو مهماً في عصر بحث الذكاء الاصطناعي؟',
              a: 'نعم — السيو التقليدي هو أساس GEO وليس بديلاً عنه. تقول Google إن الصفحة يجب أن تكون مفهرسة ومؤهلة لعرض مقتطف كي تظهر في AI Overviews وAI Mode، دون أي متطلبات تقنية إضافية، لذا تأتي قابلية الزحف والفهرسة وجودة المحتوى أولاً. كما أن إشارات E-E-A-T (الخبرة والاختصاص والمصداقية والموثوقية) التي ترفع الترتيب التقليدي تعزز أيضاً احتمال الاستشهاد بالذكاء الاصطناعي. يشترك المجالان في المتطلبات الأساسية — والفرق أن GEO تضيف بنية الإجابة أولاً وكثافة الكيانات وترميز المخطط كطبقات إضافية.',
            },
            {
              q: 'ما الخطوة الأولى لتحسين محتواي لـ GEO؟',
              a: 'ابدأ بتدقيق محتواك الحالي بمنظور الذكاء الاصطناعي: اختر 10 من صفحاتك الأعلى زيارة واسأل ChatGPT وPerplexity وGoogle AI Overviews أسئلة مرتبطة بموضوعك. تحقق مما إذا كان محتواك مستشهداً به أو موصى به. يكشف هذا الثغرات التي لا تظهر فيها في إجابات الذكاء الاصطناعي. بعد ذلك أعطِ الأولوية لإضافة ترميز JSON-LD (Article وFAQPage الأعلى أثراً)، وإعادة هيكلة المحتوى بصيغة الإجابة أولاً، وإضافة أقسام أسئلة شائعة تستبق الأسئلة الفرعية التي تفكك أنظمة الذكاء الاصطناعي إليها استعلامات المستخدمين الأوسع.',
            },
            {
              q: 'ما هو llms.txt وهل أحتاج إليه؟',
              a: 'llms.txt هو عُرف مقترح (وليس معياراً رسمياً) لوضع ملخص بصيغة markdown لموقعك في جذر الموقع كي تقرأه نماذج اللغة. لا يوثّق أي مزوّد ذكاء اصطناعي كبير استخدامه في الزحف أو الاستشهاد، وتذكر Google أنك لا تحتاج إلى ملفات جديدة مقروءة آلياً أو ملفات نصية للذكاء الاصطناعي لتظهر في AI Overviews أو AI Mode. وهو اختياري ورخيص الإضافة ومفيد عندما يلصق شخص رابطه في مساعد، لكن لا تتوقع أن يغيّر الاستشهادات وحده.',
            },
            {
              q: 'كيف أجعل ChatGPT يستشهد بمحتواي؟',
              a: 'اسمح لزاحف البحث الخاص بـ OpenAI (OAI-SearchBot) في robots.txt، وتأكد من أن الصفحة قابلة للفهرسة، واكتب كل قسم بحيث يجيب عن سؤال واحد في جملته الأولى بحقيقة محددة وموثقة بمصدر. يستشهد ChatGPT بمقاطع لا بصفحات كاملة، لذا يسهل اقتباس الفقرات المستقلة والقوائم والجداول وكتل الأسئلة الشائعة أكثر من النثر الطويل. لا توجد تقنية تضمن الاستشهاد: يختار ChatGPT مصادره لكل استعلام، وقد يعيد الموجّه نفسه مصادر مختلفة في أيام مختلفة.',
            },
            {
              q: 'كيف أتتبع ما إذا كانت محركات الذكاء الاصطناعي تستشهد بموقعي؟',
              a: 'اجمع ثلاثة مصادر. أولاً، Google Search Console: بيانات AI Overviews وAI Mode جزء من إجماليات تقرير الأداء، ومنذ يونيو 2026 يعرض تقرير منفصل (Search generative AI) مرات الظهور حسب الصفحة والبلد والجهاز. ثانياً، تحليلاتك: صفّ حركة الإحالة من chatgpt.com وperplexity.ai وgemini.google.com وclaude.ai. ثالثاً، مجموعة ثابتة من 10–20 موجّهاً تشغّلها وفق جدول وتسجّلها يدوياً أو بأداة مراقبة من طرف ثالث. تعامل مع التشغيل الواحد كحكاية فردية؛ فالاستشهادات تتفاوت بين التشغيلات.',
            },
            {
              q: 'هل GEO مختلفة عن AEO (تحسين محركات الإجابة)؟',
              a: 'GEO وAEO مرتبطتان ارتباطاً وثيقاً لكنهما ليستا متطابقتين. تركز AEO على التحسين لصناديق الإجابة المباشرة والمقتطفات المميزة في محركات البحث التقليدية. أما GEO فتستهدف تحديداً محركات الذكاء الاصطناعي التوليدية (ChatGPT وGemini وPerplexity وClaude) التي تركّب إجابات من مصادر متعددة باستخدام خطوط معالجة RAG. تتطلب GEO بنية الإجابة أولاً وترميز المخطط وكثافة الكيانات — وتتداخل تقنيات AEO معها كثيراً، لكن GEO تضيف شرط فقرات مستقلة قابلة للاستخراج يمكن الاستشهاد بها خارج سياقها.',
            },
          ],
        },
        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — الورقة الأكاديمية التأسيسية التي تعرّف GEO كتخصص وتقيس الارتفاع في الاستشهادات من المحتوى المهيكل',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — تحليل لـ 2.3 مليار جلسة حول معدلات تحويل الذكاء الاصطناعي مقابل العضوي',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — دراسة لأحد الموردين حول JSON-LD schema وتكرار الاستشهاد بالذكاء الاصطناعي',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — حصص الإحالة حسب منصة الذكاء الاصطناعي عبر 101,574 موقعاً، يناير 2025–أبريل 2026',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — الأهلية لـ AI Overviews وAI Mode والبيانات المهيكلة والملفات المقروءة آلياً',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — مرات الظهور في AI Overviews وAI Mode وDiscover',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot وGPTBot وChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot وClaude-User وClaude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot وPerplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — تحليل الاستشهادات بحسب تغطية schema لدى OpenAI وGemini وPerplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — نمو سنوي بنسبة 4,700% في حركة الذكاء الاصطناعي إلى مواقع التجزئة الأمريكية، يوليو 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — ملخص تحليل التحويل لـ 973 موقع تجارة إلكترونية',
          ],
        },
      },
    },
    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-pt.webp',
      title: 'SEO e IA: Como a GEO Está Substituindo o Manual Tradicional',
      intro: '**A Generative Engine Optimization (GEO) é a prática de estruturar conteúdo para que mecanismos de busca com IA (ChatGPT, Perplexity, Gemini, Claude) o citem ao sintetizar respostas — trocando o objetivo tradicional do SEO, aparecer entre os links azuis do Google, pelo objetivo de ser nomeado entre as 2–7 fontes que uma IA cita em cada resposta.**\n\nA GEO não substitui o SEO tradicional; ela adiciona uma segunda camada de otimização para um cenário de busca em que as plataformas de IA ainda enviam menos de 1% do tráfego dos sites (0.32% nos dados de 2026 da SE Ranking), mas cresceram 796% em dois anos (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 conferido com a documentação de crawlers do Google Search Central, OpenAI, Anthropic e Perplexity, com a SE Ranking (junho de 2026) e com a WebFX (março de 2026)',
      readTime: '8 min de leitura',

      seoTitle: 'Como ser citado pelo ChatGPT: guia de SEO e GEO (2026)',

      metaDescription: 'Como ser citado pelo ChatGPT, Perplexity e Gemini: resposta primeiro, crawlers de IA no robots.txt, schema e como acompanhar as citações de IA.',

      educationalLevel: 'Beginner',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: dois jogos diferentes', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Por que o tráfego de IA converte de forma diferente', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'Quais são os fundamentos técnicos da GEO?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'Quais crawlers de IA você deve liberar no robots.txt?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Estrutura de conteúdo: o que os mecanismos de IA realmente citam', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Ruim vs. bom: uma reescrita compatível com GEO', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'O SEO tradicional ainda importa para a GEO?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Quais plataformas de IA enviam mais tráfego de referência?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'Como a GEO muda entre regiões e mercados?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'Como otimizar conteúdo para GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Como acompanhar citações de IA?', anchor: '#how-to-track-ai-citations' },
        { label: 'Erros comuns de GEO (e como corrigi-los)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Leitura relacionada', anchor: '#related-reading' },
        { label: 'Perguntas frequentes', anchor: '#frequently-asked-questions' },
        { label: 'Fontes e leitura complementar', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/seo-meets-ai',
        inLanguage: 'pt-BR',
        headline: 'SEO e IA: Como a GEO Está Substituindo o Manual Tradicional',
        description: 'A Generative Engine Optimization (GEO) é como os mecanismos de busca com IA citam o seu conteúdo. Entenda a diferença entre GEO e SEO, por que o tráfego de IA converte melhor e quais são os fundamentos técnicos para ser citado no ChatGPT, Perplexity e Gemini.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
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
        image: buildOgImageObject(OG_SLUG, 'pt'),
        keywords: ['GEO', 'SEO', 'Generative Engine Optimization', 'busca com IA', 'ser citado pelo ChatGPT', 'Perplexity', 'Google AI Overviews', 'schema JSON-LD', 'citações de IA', 'crawlers de IA'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual é a diferença entre SEO e GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O SEO (Search Engine Optimization) foca em posicionar páginas nos resultados de busca tradicionais, como Google e Bing, onde o usuário escolhe entre uma lista de links azuis. A GEO (Generative Engine Optimization) foca em fazer o seu conteúdo ser citado dentro de respostas geradas por IA no ChatGPT, Perplexity, Gemini e Claude — onde o usuário recebe uma única resposta sintetizada, e não uma lista de opções. Os dois são necessários: o Google afirma que uma página só precisa estar indexada e ser elegível para exibir um snippet para aparecer nos AI Overviews e no AI Mode, então os fundamentos clássicos de SEO continuam sendo o ingresso de entrada.',
            },
          },
          {
            '@type': 'Question',
            name: 'O tráfego da busca com IA converte melhor do que a busca orgânica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Um pouco melhor na média, e muito melhor em alguns casos B2B. Uma análise da WebFX com 2.3 billion de sessões constatou que os visitantes vindos de IA generativa concluíram uma ação mensurável em 54.15% das sessões, contra 45.23% na busca orgânica. A Ahrefs relatou taxas de conversão 23× maiores vindas da busca com IA no próprio site. No e-commerce, a evidência é mista — uma análise de 973 sites de e-commerce relatada pela Practical Ecommerce concluiu que a busca com IA converteu pior do que a orgânica. A vantagem é mais clara em B2B e em compras de alta consideração.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto o schema markup melhora as taxas de citação por IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Páginas com schema markup JSON-LD correto recebem até 40% mais impressões em rich results, segundo um estudo de um fornecedor, mas a evidência de um ganho direto em citações por IA é fraca. Um estudo de 2025 da SearchAtlas constatou que a cobertura de schema, sozinha, não aumenta de forma consistente a frequência de citações em LLMs no OpenAI, Gemini e Perplexity, e o Google afirma que nenhum schema especial é necessário para os AI Overviews ou o AI Mode. Use o schema para descrever a página com precisão; autoridade do conteúdo e estrutura com a resposta primeiro continuam sendo os sinais mais fortes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Com que velocidade a busca com IA está crescendo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O tráfego de IA generativa cresceu 796% de janeiro de 2024 a dezembro de 2025, com as conversões de sessões crescendo 6,432% no mesmo período. O tráfego gerado por IA para sites de varejo dos EUA aumentou 4,700% ano a ano em julho de 2025. Apesar desse crescimento, a WebFX constatou que a IA generativa responde por apenas 0.18% do total de sessões da web — o tráfego direto (35.51%) e a busca orgânica (27.12%) ainda dominam. A SE Ranking, acompanhando 101,574 sites de janeiro de 2025 a abril de 2026, mediu as plataformas de IA em 0.32% do tráfego total dos sites, com o ChatGPT entregando 74.78% desse tráfego de referência de IA.',
            },
          },
          {
            '@type': 'Question',
            name: 'O SEO ainda é relevante na era da busca com IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim — o SEO tradicional é a base da GEO, não uma alternativa a ela. O Google diz que uma página precisa estar indexada e ser elegível para snippet para aparecer nos AI Overviews e no AI Mode, sem requisitos técnicos extras, então rastreabilidade, indexação e qualidade do conteúdo vêm primeiro. Os sinais de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) que melhoram os rankings tradicionais também aumentam a probabilidade de citação por IA. As duas disciplinas compartilham requisitos básicos — a diferença é que a GEO adiciona estrutura com a resposta primeiro, densidade de entidades e schema markup como camadas extras.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual é o primeiro passo para otimizar meu conteúdo para GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Comece auditando seu conteúdo atual pela ótica da IA: pegue 10 das suas páginas com mais tráfego e faça ao ChatGPT, ao Perplexity e aos Google AI Overviews perguntas relacionadas ao seu tema. Verifique se o seu conteúdo é citado ou recomendado. Isso mostra as lacunas em que você não aparece nas respostas de IA. A partir daí, priorize adicionar schema markup JSON-LD (Article e FAQPage têm o maior impacto), reestruturar o conteúdo no formato com a resposta primeiro e incluir seções de FAQ que antecipem as subperguntas em que os sistemas de IA decompõem consultas mais amplas.',
            },
          },
          {
            '@type': 'Question',
            name: 'O que é o llms.txt e eu preciso de um?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O llms.txt é uma convenção proposta (não um padrão formal) para colocar na raiz do site um resumo em markdown, para que modelos de linguagem possam lê-lo. Nenhum grande provedor de IA documenta o uso dele para rastreamento ou citação, e o Google afirma que você não precisa de novos arquivos legíveis por máquina nem de arquivos de texto para IA para aparecer nos AI Overviews ou no AI Mode. Ele é opcional, barato de adicionar e útil quando alguém cola a URL dele em um assistente, mas não espere que ele altere as citações por si só.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como faço para meu conteúdo ser citado pelo ChatGPT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Libere o crawler de busca da OpenAI (OAI-SearchBot) no robots.txt, garanta que a página seja indexável e escreva cada seção de modo que ela responda a uma pergunta já na primeira frase, com um fato específico e com fonte. O ChatGPT cita trechos, não páginas inteiras, então parágrafos independentes, listas, tabelas e blocos de FAQ são mais fáceis de citar do que textos longos e corridos. Nenhuma técnica garante uma citação: o ChatGPT escolhe as fontes por consulta, e o mesmo prompt pode retornar fontes diferentes em dias diferentes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como posso acompanhar se os mecanismos de IA citam meu site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Combine três fontes. Primeiro, o Google Search Console: os dados de AI Overviews e AI Mode fazem parte dos totais do relatório de Desempenho e, desde junho de 2026, um relatório separado de Search generative AI mostra impressões por página, país e dispositivo. Segundo, o seu analytics: filtre o tráfego de referência de chatgpt.com, perplexity.ai, gemini.google.com e claude.ai. Terceiro, um conjunto fixo de 10–20 prompts que você executa periodicamente e registra à mão ou com uma ferramenta de monitoramento de terceiros. Trate execuções isoladas como anedotas; as citações variam de uma execução para outra.',
            },
          },
          {
            '@type': 'Question',
            name: 'A GEO é diferente da AEO (Answer Engine Optimization)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO e AEO são muito próximas, mas não idênticas. A AEO foca em otimizar para caixas de resposta direta e featured snippets nos mecanismos de busca tradicionais. A GEO tem como alvo específico os mecanismos de IA generativa (ChatGPT, Gemini, Perplexity, Claude), que sintetizam respostas a partir de várias fontes usando pipelines de RAG. A GEO exige estrutura com a resposta primeiro, schema markup e densidade de entidades — as técnicas de AEO se sobrepõem bastante, mas a GEO acrescenta a exigência de parágrafos independentes e extraíveis, que possam ser citados fora de contexto.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'pt-BR',
        'name': 'SEO e IA: principais tópicos',
        'description': 'Conceitos centrais para entender a Generative Engine Optimization',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs. SEO: dois jogos diferentes', 'description': 'Entenda as diferenças entre o SEO tradicional e a Generative Engine Optimization' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Por que o tráfego de IA converte de forma diferente', 'description': 'Como os visitantes vindos de IA convertem a taxas mais altas do que os da busca orgânica' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Os fundamentos técnicos da GEO', 'description': 'Schema markup JSON-LD e seu impacto nas taxas de citação por IA' },
          { '@type': 'ListItem', 'position': 4, 'name': 'A pilha de crawlers de IA', 'description': 'Entenda GPTBot, ClaudeBot, PerplexityBot e os padrões do llms.txt' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Estrutura de conteúdo e citação por IA', 'description': 'Como estrutura com a resposta primeiro, densidade de entidades e formatação maximizam as citações por IA' },
        ],
      },
      sections: {
        tldr: {
          title: 'Pontos principais',
          isTldr: true,
          items: [
            'A GEO (Generative Engine Optimization) faz o conteúdo ser citado em respostas geradas por IA; o SEO posiciona páginas nos resultados de links azuis — os dois são necessários em 2026',
            'O tráfego de IA converte a uma taxa de conversão de sessão de 54.15% vs. 45.23% da busca orgânica (WebFX) — mas responde por apenas 0.18% do total de sessões nesse conjunto de dados e por 0.32% no da SE Ranking',
            'O schema markup ajuda as máquinas a interpretar uma página, mas o Google diz que os AI Overviews e o AI Mode não precisam de schema especial, e um estudo de 2026 não encontrou ganho consistente de citações apenas com schema',
            'O Google exige apenas que a página esteja indexada e seja elegível para snippet para aparecer nos AI Overviews e no AI Mode — os fundamentos clássicos de SEO continuam sendo o ingresso de entrada',
            'O ChatGPT entrega 74.78% do tráfego de referência de IA (SE Ranking, 2026), à frente do Gemini (11.56%) e do Perplexity (7.23%) — otimize primeiro para o ChatGPT',
            'Listas, tabelas e blocos de FAQ são mais fáceis de extrair e citar para os sistemas de IA do que prosa densa — estruture cada seção para que ela se sustente sozinha',
            'O tráfego gerado por IA para sites de varejo dos EUA aumentou 4,700% ano a ano em julho de 2025 — o canal é pequeno, mas cresce a uma velocidade sem precedentes',
            'Libere os crawlers de busca (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot); GPTBot e ClaudeBot controlam o uso para treinamento, não as citações em buscas. O llms.txt é opcional — nenhum grande provedor documenta o uso dele',
          ],
        },
        definition: {
          title: 'GEO vs. SEO: dois jogos diferentes',
          content: [
            '**O SEO tradicional conquista uma posição entre 10 links azuis; a GEO conquista uma citação entre as 2—7 fontes que um modelo de IA costuma nomear em uma única resposta sintetizada.** Os sinais de ranqueamento, os formatos de conteúdo e as métricas de sucesso são fundamentalmente diferentes. Entender como [os sistemas de IA funcionam e quais são suas limitações](/pt/prompt-engineering/ai-limitations-what-llms-cant-do) é essencial para otimizar para GEO.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Dica profissional',
              text: 'O Google afirma que uma página só precisa estar indexada e ser elegível para exibir um snippet para aparecer nos AI Overviews e no AI Mode. Rastreabilidade, indexação e qualidade do conteúdo são, portanto, o ingresso de entrada para a visibilidade da GEO no Google — e não algo opcional.',
            },
          ],
          columns: ['Aspecto', 'SEO tradicional', 'Generative Engine Optimization (GEO)'],
          rows: [
            { 'Aspecto': 'Objetivo principal', 'SEO tradicional': 'Ficar em #1—10 no Google/Bing', 'Generative Engine Optimization (GEO)': 'Ser citado em respostas geradas por IA' },
            { 'Aspecto': 'Plataformas-alvo', 'SEO tradicional': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { 'Aspecto': 'Métrica central de sucesso', 'SEO tradicional': 'Rankings, cliques, tráfego orgânico', 'Generative Engine Optimization (GEO)': 'Citações por IA, menções à marca em respostas de IA' },
            { 'Aspecto': 'Abordagem de conteúdo', 'SEO tradicional': 'Palavras-chave, backlinks, metadados', 'Generative Engine Optimization (GEO)': 'Fatos ricos em entidades, estruturados e com a resposta primeiro' },
            { 'Aspecto': 'Tempo até os resultados', 'SEO tradicional': '4—6 meses', 'Generative Engine Optimization (GEO)': '6—12 meses' },
            { 'Aspecto': 'Conversão de sessão (WebFX)', 'SEO tradicional': '45.23% (orgânico)', 'Generative Engine Optimization (GEO)': '54.15% (IA generativa)' },
          ],
          blockquote: 'SEO e GEO se apoiam nos mesmos fundamentos — clareza, autoridade, conteúdo estruturado e intenção do usuário. A diferença é que os mecanismos de IA interpretam esses sinais por meio de reconhecimento de entidades e completude semântica, e não de backlinks e métricas de clique. Em uma frase: se o SEO tradicional era sobre vencer a corrida até a Página 1, a GEO é sobre ser a fonte que uma IA cita quando já sabe a resposta.',
        },
        conversionAnalysis: {
          title: 'Por que o tráfego de IA converte de forma diferente',
          content: [
            '**Os visitantes que chegam dos mecanismos de busca com IA convertem a taxas significativamente maiores do que os da busca orgânica — porque chegam já informados, depois que a IA sintetizou e comparou as opções em nome deles.**',
            '**Nota sobre as métricas:** os estudos abaixo medem coisas diferentes — taxa de conversão por sessão (WebFX), aumento na conclusão de metas (Ahrefs) e conversão específica de B2B (SEMrush). Esses números não são diretamente comparáveis; cada um tem sua fonte e seu rótulo.',
            'Uma análise da WebFX com 2.3 billion de sessões de sites (janeiro de 2024—dezembro de 2025) constatou:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Atenção',
              text: 'O ganho de conversão varia por setor. Os dados intersetoriais da WebFX mostram 54.15% vs. 45.23% de conversão por sessão, enquanto uma análise de e-commerce encontrou o tráfego de IA convertendo pior do que o orgânico. Teste o seu próprio tráfego para confirmar se a vantagem vale para o seu setor.',
            },
          ],
          items: [
            'O tráfego de IA generativa cresceu **796% em dois anos**',
            'Os visitantes vindos de IA converteram a uma **taxa de conversão de sessão de 54.15%** vs. 45.23% da busca orgânica',
            'As conversões do tráfego de IA cresceram **6,432% ano a ano** — mais rápido do que as sessões, o que significa que uma parcela maior dos visitantes está convertendo',
          ],
          blockquote: 'O prêmio é maior em alguns casos B2B. A Ahrefs relatou que as ferramentas de busca com IA converteram a 23× a taxa da busca orgânica no próprio site. A SEMrush constatou que o tráfego da busca com IA converteu a 4.4× a taxa orgânica em um estudo com mais de 500 tópicos B2B. Por outro lado, uma análise de 973 sites de e-commerce relatada pela Practical Ecommerce concluiu que os visitantes vindos de IA converteram pior do que os orgânicos — a vantagem depende da tarefa e do setor. A WebFX define a conversão de sessão como uma ação mensurável (envio de formulário, download, pedido de orçamento) dentro da mesma sessão, então os números de 54.15% e 45.23% não são taxas de compra. A citação por IA também não é determinística: a mesma pergunta pode retornar fontes diferentes de modelos diferentes, e do mesmo modelo em dias diferentes.',
        },
        technicalFoundations: {
          title: 'Quais são os fundamentos técnicos da GEO?',
          content: [
            '**O schema markup JSON-LD correto ajuda mecanismos de busca e sistemas de IA a entender quem escreveu uma página, o que ela responde e quando foi atualizada — mas não é um botão de citação: o Google afirma que nenhum schema especial é necessário para aparecer nos AI Overviews ou no AI Mode.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) é o formato de schema recomendado pelo Google e o formato de dados estruturados mais fácil de interpretar para a IA. Colocado em um bloco `<script>` no `<head>` da página, ele separa os rótulos semânticos do HTML visível — o que o mantém independente do HTML visível e mais fácil de manter do que Microdata ou RDFa embutidos. Combinado com uma [escrita bem estruturada](/pt/prompt-engineering/write-better-code-with-ai), o schema markup se torna a base da sua GEO.',
            'Os tipos de schema que descrevem uma página de conteúdo com mais precisão:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Ponto-chave',
              text: 'Um estudo de 2025 da SearchAtlas constatou que o schema markup, sozinho, não garante taxas de citação por IA mais altas, e o Google diz que os dados estruturados precisam corresponder ao texto visível da página. Autoridade do conteúdo e estrutura com a resposta primeiro são os sinais mais fortes.',
            },
          ],
          items: [
            '**Article / TechArticle** — estabelece autoria, data de publicação e categoria do tema',
            '**FAQPage** — pares de pergunta e resposta extraídos diretamente pelos mecanismos de resposta de IA',
            '**HowTo** — passos numerados, preferidos pela IA em consultas procedimentais',
            '**Organization** — reconhecimento de entidade: quem você é, o que faz e qual é a sua URL oficial',
            '**BreadcrumbList** — sinaliza a hierarquia do conteúdo e a profundidade temática',
          ],
          blockquote: 'Uma ressalva importante: um estudo de 2025 da SearchAtlas, que analisou a adoção de schema versus a frequência de citações por IA no OpenAI, Gemini e Perplexity, constatou que uma cobertura de schema maior, sozinha, não gera de forma consistente taxas de citação mais altas em LLMs. O schema torna o conteúdo mais fácil de interpretar — mas autoridade do conteúdo, densidade de entidades e estrutura com a resposta primeiro continuam sendo os sinais de citação mais fortes.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'Quais crawlers de IA você deve liberar no robots.txt?',
          content: [
            '**Cada provedor de IA mantém bots separados para busca, treinamento e acessos solicitados pelo usuário — libere os bots de busca se quiser citações e decida separadamente sobre os bots de treinamento.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Boas práticas',
              text: 'Confira o seu `robots.txt` com os nomes de bots abaixo e teste com o arquivo em produção. Um arquivo `llms.txt` é opcional: é uma convenção proposta em [llmstxt.org](https://llmstxt.org), e nenhum grande provedor de IA documenta o uso dele para rastreamento ou citação.',
            },
          ],
          items: [
            '**OAI-SearchBot** — crawler da OpenAI para os resultados de busca do ChatGPT; bloqueá-lo esconde o seu site das respostas de busca do ChatGPT',
            '**GPTBot** — crawler da OpenAI para treinar modelos generativos; bloqueá-lo não remove você da busca do ChatGPT',
            '**ChatGPT-User** — acessa uma página quando uma pessoa pergunta ao ChatGPT sobre ela; a OpenAI diz que as regras do robots.txt podem não se aplicar a essas solicitações iniciadas pelo usuário',
            '**Claude-SearchBot** e **Claude-User** — bots da Anthropic para indexação de busca e para recuperação solicitada pelo usuário; **ClaudeBot** é o crawler de treinamento',
            '**PerplexityBot** — exibe e linka sites nos resultados do Perplexity e não é usado para treinamento; **Perplexity-User** atende solicitações de usuários e, em geral, ignora o robots.txt',
            '**Googlebot** — o crawler por trás da indexação da Busca do Google, na qual se baseiam os AI Overviews e o AI Mode; o token **Google-Extended** controla o treinamento e o grounding do Gemini e não afeta a inclusão nem o ranking na Busca',
          ],
          blockquote: 'Bloquear um bot de treinamento (GPTBot, ClaudeBot, Google-Extended) é uma decisão separada de bloquear um bot de busca. Evite bloquear por endereço IP: a Anthropic observa que o bloqueio por IP pode impedir que seus bots leiam o robots.txt.',
        },
        contentStructure: {
          title: 'Estrutura de conteúdo: o que os mecanismos de IA realmente citam',
          content: [
            '**Listas, tabelas e blocos de FAQ são mais fáceis de extrair e citar para os sistemas de IA do que prosa densa, porque a recuperação trabalha com trechos: uma seção independente e com a resposta primeiro pode ser citada sem o resto da página.**',
            'Os mecanismos de IA usam Retrieval-Augmented Generation (RAG) — eles consultam primeiro um índice, recuperam os trechos correspondentes e só então sintetizam uma resposta. Isso significa que o seu conteúdo precisa ser citável no nível do parágrafo ou da seção, e não apenas no nível da página. Uma única seção bem estruturada pode ser extraída e citada sem que a IA consuma a página inteira.',
            'Os cinco princípios de conteúdo que maximizam a probabilidade de citação por IA:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'A Retrieval-Augmented Generation (RAG) extrai e cita trechos individuais do seu conteúdo, não páginas inteiras — por isso a estrutura importa mais do que a contagem de palavras.',
            },
            {
              type: 'in-plain-terms',
              text: 'Pense no seu conteúdo como um livro didático. Os sistemas de IA não leem da capa à contracapa; eles procuram a resposta para uma pergunta específica, extraem o parágrafo relevante, citam e seguem em frente. Um parágrafo claro e independente vale mais do que 5,000 palavras de prosa.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Atenção',
              text: 'Linguagem de marketing vaga ("poderoso", "fluido", "revolucionário", "líder") é ignorada pelos crawlers de IA. Use fatos específicos: números exatos, entidades nomeadas, afirmações mensuráveis. Se você não consegue citar a fonte, os sistemas de IA não vão extrair.',
            },
          ],
          items: [
            '**Resposta primeiro** — coloque a resposta direta na primeira frase de cada seção; os crawlers de IA amostram a frase de abertura de cada título. Esse é o princípio central do [prompt engineering](/pt/prompt-engineering/what-is-prompt-engineering) aplicado à escrita de conteúdo',
            '**Densidade de entidades** — mencione de 5—7 entidades nomeadas por artigo (nomes de produtos, de empresas, termos técnicos, nomes de pesquisadores) para sinalizar autoridade no tema. É assim que você mostra aos sistemas de IA que o seu tema é autoritativo e citável',
            '**Completude semântica** — cada seção deve responder à sua pergunta sem depender do contexto de outras seções; a IA extrai trechos isoladamente',
            '**Fatos específicos em vez de afirmações vagas** — números exatos, datas e fontes nomeadas são citados; expressões como "solução líder" ou "ferramenta poderosa" são ignoradas',
            '**Formatação estruturada** — tabelas e listas com marcadores são legíveis por máquina; parágrafos em prosa exigem interpretação por NLP e são citados com menos frequência',
          ],
        },
        goodExample: {
          title: 'Ruim vs. bom: uma reescrita compatível com GEO',
          content: [
            '**Ruim — prosa sem informação (não será citada):**',
            '> Nossa plataforma é uma solução poderosa e abrangente que se integra de forma fluida às principais ferramentas de IA para entregar resultados líderes do setor.',
            'Qualquer concorrente poderia publicar isso sem alterar uma vírgula. Zero entidades, zero fatos específicos, zero afirmações verificáveis — os mecanismos de IA simplesmente a ignoram.',
            '**Bom — rico em entidades e denso em fatos (pronto para ser citado):**',
          ],
          blockquote: 'O PromptQuorum envia um prompt para até 25 modelos de IA ao mesmo tempo — incluindo GPT-5.6 (OpenAI), Claude Opus 5 (Anthropic), Gemini 3 Pro (Google DeepMind) e modelos locais via Ollama — e devolve todas as respostas lado a lado para comparação.',
        },
        goodExampleExplanation: {
          content: [
            'Quatro entidades nomeadas, um número específico (25), uma função verificável (comparação lado a lado). Os mecanismos de IA extraem e atribuem isso imediatamente. O PromptQuorum inclui 9 frameworks de prompt integrados (CO-STAR, CRAFT, RISEN, SPECS, TRACE e outros quatro) que ajudam a estruturar o conteúdo para atender a esses requisitos de GEO diretamente no app.',
          ],
        },
        seoFoundation: {
          title: 'O SEO tradicional ainda importa para a GEO?',
          content: [
            '**Os Google AI Overviews e o AI Mode usam o mesmo índice da busca clássica: a página precisa estar indexada e ser elegível para exibir um snippet, então os fundamentos de SEO alimentam a visibilidade na GEO.**',
            'A documentação do Google sobre recursos de IA afirma que não há requisitos adicionais para aparecer nos AI Overviews ou no AI Mode e que nenhuma otimização especial é necessária além das boas práticas padrão de SEO. Estudos de terceiros constatam que páginas já visíveis nos resultados clássicos são citadas com mais frequência, mas esses estudos medem correlação, e as páginas citadas nem sempre coincidem com os 10 primeiros resultados.',
            'A pilha híbrida de SEO + GEO:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Os sinais de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) melhoram tanto os rankings da busca tradicional quanto a probabilidade de citação por IA.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Dica profissional',
              text: 'Não abandone o SEO pela GEO. Um reforça o outro: melhorar as Core Web Vitals (SEO) → ranquear melhor → ser citado nos AI Overviews (GEO). Os sinais de E-E-A-T fortalecem os dois. Otimize a pilha completa, não apenas uma camada.',
            },
          ],
          columns: ['Camada', 'O que fazer', 'Por quê'],
          rows: [
            {
              'Camada': 'SEO técnico',
              'O que fazer': 'Velocidade da página, mobile, Core Web Vitals, URLs canônicas',
              'Por quê': 'Os bots de GEO respeitam os mesmos sinais de rastreabilidade do Googlebot',
            },
            {
              'Camada': 'SEO de conteúdo',
              'O que fazer': 'Sinais de E-E-A-T, credenciais do autor, datas de publicação visíveis; [veja como escrever conteúdo melhor](/pt/prompt-engineering/write-better-code-with-ai)',
              'Por quê': 'Os mecanismos de IA favorecem conteúdo com sinais explícitos de autoridade',
            },
            {
              'Camada': 'SEO de entidades',
              'O que fazer': 'Schema JSON-LD, otimização do knowledge graph',
              'Por quê': 'As máquinas constroem grafos de entidades; páginas vagas são ignoradas',
            },
            {
              'Camada': 'Específico de GEO',
              'O que fazer': 'Estrutura com a resposta primeiro, seções de FAQ, llms.txt',
              'Por quê': 'Otimiza para a extração por pipelines de RAG',
            },
            {
              'Camada': 'Construção de citações',
              'O que fazer': 'Links de fontes autoritativas (arXiv, Reuters, documentação oficial)',
              'Por quê': 'Links confiáveis somam autoridade; efeito em citações não provado',
            },
          ],
        },
        platformBreakdown: {
          title: 'Quais plataformas de IA enviam mais tráfego de referência?',
          content: [
            '**O ChatGPT entrega 74.78% do tráfego de referência de IA para sites; o Gemini vem em seguida com 11.56%, o Perplexity com 7.23%, o Copilot com 3.51% e o Claude com 2.62% (SE Ranking, 101,574 sites, janeiro de 2025–abril de 2026) — o que faz do ChatGPT o alvo de GEO de maior alavancagem para a maioria dos sites.**',
            'Esses números são parcelas das visitas que as plataformas de IA enviam aos sites, não parcelas de usuários ou de consultas. Outros rastreadores relatam divisões diferentes (a StatCounter colocou o ChatGPT em 78.16% em março de 2026; um rastreador focado em B2B o colocou em 62.6%), então trate a ordem do ranking como estável e o percentual exato como aproximado.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Você sabia?',
              text: 'O Perplexity mostra as fontes em toda resposta, o que o torna a plataforma mais fácil para verificar se o seu conteúdo é citado. Somadas, as plataformas de IA ainda enviam apenas 0.32% do tráfego total dos sites (SE Ranking, 2026), então mantenha a busca clássica no seu plano.',
            },
          ],
          columns: ['Plataforma', 'Participação na referência de IA', 'Crawler de busca', 'Estilo de citação'],
          rows: [
            {
              'Plataforma': 'ChatGPT (OpenAI)',
              'Participação na referência de IA': '74.78%',
              'Crawler de busca': 'OAI-SearchBot',
              'Estilo de citação': 'Links de fonte no texto, com trechos citados',
            },
            {
              'Plataforma': 'Microsoft Copilot',
              'Participação na referência de IA': '3.51%',
              'Crawler de busca': 'Bingbot',
              'Estilo de citação': 'Páginas indexadas no Bing, citações em notas de rodapé',
            },
            {
              'Plataforma': 'Google Gemini / AI Overviews',
              'Participação na referência de IA': '11.56%',
              'Crawler de busca': 'Googlebot',
              'Estilo de citação': 'Páginas indexadas e elegíveis para snippet na Busca do Google',
            },
            {
              'Plataforma': 'Perplexity AI',
              'Participação na referência de IA': '7.23%',
              'Crawler de busca': 'PerplexityBot',
              'Estilo de citação': 'Lista numerada de fontes em toda resposta',
            },
            {
              'Plataforma': 'Claude (Anthropic)',
              'Participação na referência de IA': '2.62%',
              'Crawler de busca': 'Claude-SearchBot',
              'Estilo de citação': 'Cita fontes quando a busca na web está ativada',
            },
          ],
          blockquote: 'Os dados de participação vêm da SE Ranking (junho de 2026). As divisões entre plataformas mudam de mês para mês, então reconfira os números antes de basear decisões de orçamento neles.',
        },
        globalContext: {
          title: 'Como a GEO muda entre regiões e mercados?',
          content: [
            'As empresas europeias precisam equilibrar o investimento em GEO com a conformidade ao EU AI Act, que exige transparência sobre conteúdo gerado por IA e proíbe sistemas de IA enganosos. A Mistral AI (França) está ampliando sua presença de busca na Europa — o conteúdo otimizado para plataformas de IA europeias precisa estar alinhado aos rígidos requisitos da UE de atribuição de fontes de dados.',
            'Na China, a busca generativa é dominada por produtos de busca baseados em **Baidu ERNIE** e **Alibaba Qwen**. As estratégias de GEO para o mercado chinês exigem otimização para grafos de entidades em chinês, distintos das bases de conhecimento do Google ou da OpenAI. As regras chinesas sobre IA generativa, incluindo as Interim Measures (2023) e as medidas de 2025 sobre rotulagem de conteúdo gerado por IA, exigem que os provedores rotulem esse conteúdo, o que afeta como as plataformas chinesas exibem as fontes.',
            'As empresas japonesas sob as diretrizes de governança de dados do METI usam cada vez mais ferramentas de busca com IA on-premise — ou seja, a GEO para o público corporativo japonês precisa priorizar conteúdo que apareça em índices domésticos e esteja em conformidade com o framework de governança de IA de 2024 do METI, e não apenas nos Google AI Overviews.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Ponto-chave',
              text: 'Os mercados europeu, chinês e japonês têm requisitos regulatórios distintos para a atribuição de conteúdo de IA. Se você atende públicos internacionais, localize a sua estratégia de GEO. Uma única abordagem global não atenderá a todos os padrões regionais de conformidade.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'Como acompanhar citações de IA?',
          content: [
            '**Acompanhe as citações de IA com três fontes: o Google Search Console para os recursos de IA do Google, o tráfego de referência no seu analytics para ChatGPT, Perplexity, Gemini e Claude, e um conjunto fixo de prompts que você executa periodicamente.**',
            'Desde junho de 2026, o Search Console inclui um relatório de desempenho Search generative AI, com impressões em AI Overviews, AI Mode e Discover por página, país e dispositivo; os mesmos dados continuam no relatório geral de Desempenho. Ele mostra impressões, não o texto da resposta, então diz onde você aparece, não por quê.',
          ],
          items: [
            '**Search Console** — abra o relatório de generative AI e veja quais páginas ganham impressões depois de uma mudança de estrutura',
            '**Referências no analytics** — segmente as visitas vindas de chatgpt.com, perplexity.ai, gemini.google.com e claude.ai; espere números pequenos',
            '**Conjunto de prompts** — mantenha de 10–20 perguntas que a sua página deveria responder, execute-as toda semana em cada assistente e registre quais URLs são citadas',
            '**Logs do servidor** — conte as requisições de OAI-SearchBot, Claude-SearchBot e PerplexityBot para confirmar que as páginas estão sendo acessadas',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Atenção',
              text: 'As respostas de IA variam de uma execução para outra. Uma citação, ou a falta de uma citação, é uma anedota. Compare um conjunto de prompts ao longo de várias semanas antes de concluir que uma mudança funcionou.',
            },
          ],
        },
        relatedReading: {
          title: 'Leitura relacionada',
          items: [
            '[O que é Prompt Engineering?](/pt/prompt-engineering/what-is-prompt-engineering) — como instruções estruturadas determinam o que os sistemas de IA extraem e citam',
            '[Limitações da IA — o que os LLMs não conseguem fazer](/pt/prompt-engineering/ai-limitations-what-llms-cant-do) — técnicas de verificação para afirmações em conteúdo gerado por IA',
            '[Escreva código melhor com IA](/pt/prompt-engineering/write-better-code-with-ai) — como aplicar uma estrutura compatível com GEO à geração de código assistida por IA',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'Como otimizar conteúdo para GEO (Generative Engine Optimization)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Boas práticas',
              text: 'Priorize primeiro o ChatGPT (74.78% do tráfego de referência de IA) e depois Gemini e Perplexity. Essa abordagem 80/20 entrega o maior retorno sem dispersar o esforço entre plataformas menores.',
            },
          ],
          numberedItems: [
            '**Audite seu conteúdo atual pela ótica da IA: encontrabilidade e citabilidade.** Pegue 10 das suas páginas com mais tráfego e pergunte ao ChatGPT, ao Perplexity e aos Google AI Overviews se eles citam ou recomendam o seu conteúdo ao responder consultas relacionadas ao seu tema. Marque as lacunas em que você não aparece.',
            '**Estruture o conteúdo com a resposta primeiro, com fatos verificáveis e schema markup claro.** Abra cada seção com uma resposta direta (não com uma pergunta). Sustente cada afirmação com fontes ou raciocínio claro. Adicione schema JSON-LD (Article, FAQPage, HowTo, Breadcrumb) para que os crawlers de IA entendam a estrutura do seu conteúdo.',
            '**Inclua a intenção da palavra-chave, e não apenas a palavra-chave.** Se você ranqueia para \'melhores ferramentas de IA\', a GEO exige que você responda \'o que torna uma ferramenta de IA a melhor?\' (precisão, velocidade, custo, facilidade de uso). Os sistemas de IA trabalham com correspondência de intenção, não de palavra-chave — garanta que a sua resposta corresponda ao que os sistemas de IA inferem que o usuário quer.',
            '**Crie seções de FAQ que respondam às perguntas derivadas que os sistemas de IA fazem.** Os sistemas de IA decompõem consultas amplas em subperguntas. Se você mira em \'alucinações de IA\', adicione seções de FAQ que respondam \'com que frequência as alucinações de IA acontecem?\', \'dá para evitar alucinações?\', \'quais modelos mais alucinam?\'.',
            '**Confira o seu robots.txt e, se quiser, adicione um arquivo llms.txt.** Libere OAI-SearchBot, Claude-SearchBot, PerplexityBot e Googlebot. Um arquivo llms.txt é uma convenção proposta cujo uso nenhum grande provedor de IA documenta, então trate-o como documentação opcional, não como uma alavanca de ranking.',
          ],
        },
        commonMistakes: {
          title: 'Erros comuns de GEO (e como corrigi-los)',
          mistakes: [
            {
              mistake: 'Tratar a GEO como otimização de palavras-chave em vez de otimização de citações.',
              problem: 'Você otimiza páginas para consultas de busca, e não para a extração e a citação por IA. Os sistemas de IA usam correspondência de intenção e completude semântica, não densidade de palavras-chave.',
              fix: 'Mude o foco: estruture o conteúdo para responder à pergunta completa nas 2–3 primeiras frases de cada seção. Use entidades exatas e números específicos em vez de repetir palavras-chave. Teste direto no ChatGPT e no Perplexity para ver o que é citado.',
            },
            {
              mistake: 'Ignorar o SEO tradicional porque você está "apostando tudo na GEO".',
              problem: 'Páginas que não estão indexadas ou não são elegíveis para snippet não podem aparecer nos Google AI Overviews nem no AI Mode. A GEO exige o SEO como base.',
              fix: 'Duas camadas: mantenha sinais fortes de E-E-A-T, Core Web Vitals e qualidade de backlinks (SEO). Acrescente por cima estrutura com a resposta primeiro, schema markup e seções de FAQ (GEO). Um reforça o outro.',
            },
            {
              mistake: 'Depender só do schema markup para melhorar as citações por IA.',
              problem: 'O schema deixa o conteúdo mais fácil de interpretar pelos sistemas de IA, mas autoridade e estrutura do conteúdo são sinais de citação mais fortes. Uma página com schema perfeito, mas com prosa vaga, não será citada.',
              fix: 'Combine as camadas: adicione schema JSON-LD + estrutura com a resposta primeiro + densidade de entidades. O estudo de 2025 da SearchAtlas constatou que o schema sozinho tem impacto limitado sem uma forte autoridade de conteúdo.',
            },
            {
              mistake: 'Otimizar igualmente para todas as plataformas de IA em vez de priorizar por participação de mercado.',
              problem: 'O ChatGPT envia 74.78% do tráfego de referência de IA. Espalhar o esforço de otimização por 5 plataformas dilui o ROI.',
              fix: 'Priorize primeiro o ChatGPT (rastreamento do OAI-SearchBot, estrutura com a resposta primeiro, seções de FAQ). Depois otimize para Gemini e Perplexity (que lista as fontes em toda resposta). Estenda ao Claude em seguida.',
            },
            {
              mistake: 'Escrever parágrafos densos em vez de conteúdo em formato de lista.',
              problem: 'Prosa densa é mais difícil de citar do que listas e tabelas. Os sistemas de IA usam RAG (Retrieval-Augmented Generation) e extraem seções estruturadas com mais confiabilidade.',
              fix: 'Converta descrições em prosa em listas com marcadores sempre que possível. Use tabelas para comparações. Limite os parágrafos a 2–3 frases. Os crawlers de IA amostram a primeira frase de cada título para decidir se extraem a seção.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'Qual é a diferença entre SEO e GEO?',
              a: 'O SEO (Search Engine Optimization) foca em posicionar páginas nos resultados de busca tradicionais, como Google e Bing, onde o usuário escolhe entre uma lista de links azuis. A GEO (Generative Engine Optimization) foca em fazer o seu conteúdo ser citado dentro de respostas geradas por IA no ChatGPT, Perplexity, Gemini e Claude — onde o usuário recebe uma única resposta sintetizada, e não uma lista de opções. Os dois são necessários: o Google afirma que uma página só precisa estar indexada e ser elegível para exibir um snippet para aparecer nos AI Overviews e no AI Mode, então os fundamentos clássicos de SEO continuam sendo o ingresso de entrada.',
            },
            {
              q: 'O tráfego da busca com IA converte melhor do que a busca orgânica?',
              a: 'Um pouco melhor na média, e muito melhor em alguns casos B2B. Uma análise da WebFX com 2.3 billion de sessões constatou que os visitantes vindos de IA generativa concluíram uma ação mensurável em 54.15% das sessões, contra 45.23% na busca orgânica. A Ahrefs relatou taxas de conversão 23× maiores vindas da busca com IA no próprio site. No e-commerce, a evidência é mista — uma análise de 973 sites de e-commerce relatada pela Practical Ecommerce concluiu que a busca com IA converteu pior do que a orgânica. A vantagem é mais clara em B2B e em compras de alta consideração.',
            },
            {
              q: 'Quanto o schema markup melhora as taxas de citação por IA?',
              a: 'Páginas com schema markup JSON-LD correto recebem até 40% mais impressões em rich results, segundo um estudo de um fornecedor, mas a evidência de um ganho direto em citações por IA é fraca. Um estudo de 2025 da SearchAtlas constatou que a cobertura de schema, sozinha, não aumenta de forma consistente a frequência de citações em LLMs no OpenAI, Gemini e Perplexity, e o Google afirma que nenhum schema especial é necessário para os AI Overviews ou o AI Mode. Use o schema para descrever a página com precisão; autoridade do conteúdo e estrutura com a resposta primeiro continuam sendo os sinais mais fortes.',
            },
            {
              q: 'Com que velocidade a busca com IA está crescendo?',
              a: 'O tráfego de IA generativa cresceu 796% de janeiro de 2024 a dezembro de 2025, com as conversões de sessões crescendo 6,432% no mesmo período. O tráfego gerado por IA para sites de varejo dos EUA aumentou 4,700% ano a ano em julho de 2025. Apesar desse crescimento, a WebFX constatou que a IA generativa responde por apenas 0.18% do total de sessões da web — o tráfego direto (35.51%) e a busca orgânica (27.12%) ainda dominam. A SE Ranking, acompanhando 101,574 sites de janeiro de 2025 a abril de 2026, mediu as plataformas de IA em 0.32% do tráfego total dos sites, com o ChatGPT entregando 74.78% desse tráfego de referência de IA.',
            },
            {
              q: 'O SEO ainda é relevante na era da busca com IA?',
              a: 'Sim — o SEO tradicional é a base da GEO, não uma alternativa a ela. O Google diz que uma página precisa estar indexada e ser elegível para snippet para aparecer nos AI Overviews e no AI Mode, sem requisitos técnicos extras, então rastreabilidade, indexação e qualidade do conteúdo vêm primeiro. Os sinais de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) que melhoram os rankings tradicionais também aumentam a probabilidade de citação por IA. As duas disciplinas compartilham requisitos básicos — a diferença é que a GEO adiciona estrutura com a resposta primeiro, densidade de entidades e schema markup como camadas extras.',
            },
            {
              q: 'Qual é o primeiro passo para otimizar meu conteúdo para GEO?',
              a: 'Comece auditando seu conteúdo atual pela ótica da IA: pegue 10 das suas páginas com mais tráfego e faça ao ChatGPT, ao Perplexity e aos Google AI Overviews perguntas relacionadas ao seu tema. Verifique se o seu conteúdo é citado ou recomendado. Isso mostra as lacunas em que você não aparece nas respostas de IA. A partir daí, priorize adicionar schema markup JSON-LD (Article e FAQPage têm o maior impacto), reestruturar o conteúdo no formato com a resposta primeiro e incluir seções de FAQ que antecipem as subperguntas em que os sistemas de IA decompõem consultas mais amplas.',
            },
            {
              q: 'O que é o llms.txt e eu preciso de um?',
              a: 'O llms.txt é uma convenção proposta (não um padrão formal) para colocar na raiz do site um resumo em markdown, para que modelos de linguagem possam lê-lo. Nenhum grande provedor de IA documenta o uso dele para rastreamento ou citação, e o Google afirma que você não precisa de novos arquivos legíveis por máquina nem de arquivos de texto para IA para aparecer nos AI Overviews ou no AI Mode. Ele é opcional, barato de adicionar e útil quando alguém cola a URL dele em um assistente, mas não espere que ele altere as citações por si só.',
            },
            {
              q: 'Como faço para meu conteúdo ser citado pelo ChatGPT?',
              a: 'Libere o crawler de busca da OpenAI (OAI-SearchBot) no robots.txt, garanta que a página seja indexável e escreva cada seção de modo que ela responda a uma pergunta já na primeira frase, com um fato específico e com fonte. O ChatGPT cita trechos, não páginas inteiras, então parágrafos independentes, listas, tabelas e blocos de FAQ são mais fáceis de citar do que textos longos e corridos. Nenhuma técnica garante uma citação: o ChatGPT escolhe as fontes por consulta, e o mesmo prompt pode retornar fontes diferentes em dias diferentes.',
            },
            {
              q: 'Como posso acompanhar se os mecanismos de IA citam meu site?',
              a: 'Combine três fontes. Primeiro, o Google Search Console: os dados de AI Overviews e AI Mode fazem parte dos totais do relatório de Desempenho e, desde junho de 2026, um relatório separado de Search generative AI mostra impressões por página, país e dispositivo. Segundo, o seu analytics: filtre o tráfego de referência de chatgpt.com, perplexity.ai, gemini.google.com e claude.ai. Terceiro, um conjunto fixo de 10–20 prompts que você executa periodicamente e registra à mão ou com uma ferramenta de monitoramento de terceiros. Trate execuções isoladas como anedotas; as citações variam de uma execução para outra.',
            },
            {
              q: 'A GEO é diferente da AEO (Answer Engine Optimization)?',
              a: 'GEO e AEO são muito próximas, mas não idênticas. A AEO foca em otimizar para caixas de resposta direta e featured snippets nos mecanismos de busca tradicionais. A GEO tem como alvo específico os mecanismos de IA generativa (ChatGPT, Gemini, Perplexity, Claude), que sintetizam respostas a partir de várias fontes usando pipelines de RAG. A GEO exige estrutura com a resposta primeiro, schema markup e densidade de entidades — as técnicas de AEO se sobrepõem bastante, mas a GEO acrescenta a exigência de parágrafos independentes e extraíveis, que possam ser citados fora de contexto.',
            },
          ],
        },
        sources: {
          title: 'Fontes e leitura complementar',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — o artigo acadêmico fundamental que define a GEO como disciplina e mede o ganho de citações com conteúdo estruturado',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — análise de 2.3 billion de sessões sobre taxas de conversão de IA vs. orgânico',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — estudo de um fornecedor sobre schema JSON-LD e frequência de citações por IA',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — participação de referência por plataforma de IA em 101,574 sites, janeiro de 2025–abril de 2026',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — elegibilidade para AI Overviews e AI Mode, dados estruturados e arquivos legíveis por máquina',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — impressões em AI Overviews, AI Mode e Discover',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot e ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User e Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot e Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — análise de citações pela cobertura de schema em OpenAI, Gemini e Perplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — crescimento anual de 4.700% no tráfego de IA para sites de varejo dos EUA, julho de 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — resumo da análise de conversão de 973 sites de e-commerce',
          ],
        },
      },
    },
    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-fr.webp',
      title: 'SEO et IA : comment le GEO remplace l\'ancien mode d\'emploi',
      intro: '**La Generative Engine Optimization (GEO) consiste à structurer un contenu pour que les moteurs de recherche IA (ChatGPT, Perplexity, Gemini, Claude) le citent dans leurs réponses de synthèse — l\'objectif n\'est plus de se classer parmi les liens bleus de Google, mais d\'être nommé parmi les 2–7 sources qu\'une IA cite par réponse.**\n\nLe GEO ne remplace pas le SEO traditionnel : il ajoute une seconde couche d\'optimisation. Les plateformes IA envoient encore moins de 1 % du trafic des sites (0.32 % dans les données 2026 de SE Ranking), mais ce trafic a progressé de 796 % en deux ans (WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02 d\'après la documentation des robots de Google Search Central, OpenAI, Anthropic et Perplexity, SE Ranking (juin 2026) et WebFX (mars 2026)',
      readTime: '8 min de lecture',

      seoTitle: 'Être cité par ChatGPT : le GEO face au SEO (2026)',

      metaDescription: 'Comment être cité par ChatGPT, Perplexity et Gemini : structure réponse d\'abord, bons robots IA dans robots.txt, schema et suivi des citations IA en 2026.',

      educationalLevel: 'Beginner',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'GEO vs SEO : deux jeux différents', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'Pourquoi le trafic IA convertit différemment', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'Quels sont les fondamentaux techniques du GEO ?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'Quels robots IA autoriser dans robots.txt ?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'Structure du contenu : ce que les moteurs IA citent vraiment', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: 'Mauvais vs bon : une réécriture conforme au GEO', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'Le SEO traditionnel compte-t-il encore pour le GEO ?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'Quelles plateformes IA envoient le plus de trafic ?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'Comment le GEO varie-t-il selon les régions et les marchés ?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'Comment optimiser un contenu pour le GEO', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'Comment suivre les citations IA ?', anchor: '#how-to-track-ai-citations' },
        { label: 'Erreurs GEO courantes (et comment les corriger)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'Questions fréquentes', anchor: '#frequently-asked-questions' },
        { label: 'Sources et pour aller plus loin', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/seo-meets-ai',
        inLanguage: 'fr',
        headline: 'SEO et IA : comment le GEO remplace l\'ancien mode d\'emploi',
        description: 'La Generative Engine Optimization (GEO) décide si les moteurs de recherche IA citent votre contenu. Différences entre GEO et SEO, conversion du trafic IA et bases techniques pour être cité dans ChatGPT, Perplexity et Gemini.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: buildOgImageObject(OG_SLUG, 'fr'),
        keywords: ['GEO', 'SEO', 'Generative Engine Optimization', 'recherche IA', 'être cité par ChatGPT', 'Perplexity', 'Google AI Overviews', 'schema JSON-LD', 'citations IA', 'robots IA'],
        about: [
          { '@type': 'Thing', name: 'Generative Engine Optimization (GEO)' },
          { '@type': 'Thing', name: 'Recherche IA' },
          { '@type': 'Thing', name: 'Structure du contenu' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre SEO et GEO ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le SEO (Search Engine Optimization) vise à classer les pages dans les résultats des moteurs traditionnels comme Google et Bing, où l\'utilisateur choisit parmi une liste de liens bleus. Le GEO (Generative Engine Optimization) vise à faire citer votre contenu dans les réponses générées par ChatGPT, Perplexity, Gemini et Claude — où l\'utilisateur reçoit une seule réponse de synthèse plutôt qu\'une liste d\'options. Les deux sont nécessaires : selon Google, une page doit seulement être indexée et éligible à l\'affichage d\'un extrait pour apparaître dans AI Overviews et AI Mode, donc les fondamentaux du SEO restent le ticket d\'entrée.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le trafic de la recherche IA convertit-il mieux que la recherche organique ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un peu en moyenne, et beaucoup plus dans certains cas B2B. Une analyse de WebFX portant sur 2.3 milliards de sessions montre que les visiteurs venus de l\'IA générative ont accompli une action mesurable dans 54.15 % des sessions, contre 45.23 % pour la recherche organique. Ahrefs a observé des taux de conversion 23× supérieurs via la recherche IA sur son propre site. Pour l\'e-commerce, les résultats sont partagés : une analyse de 973 sites e-commerce rapportée par Practical Ecommerce a trouvé que la recherche IA convertissait moins bien que l\'organique. L\'avantage est le plus net pour le B2B et les achats très réfléchis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dans quelle mesure le schema markup améliore-t-il les citations IA ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Selon une étude d\'éditeur, les pages dotées d\'un schema JSON-LD correct obtiennent jusqu\'à 40 % d\'impressions enrichies en plus, mais la preuve d\'un gain direct en citations IA est faible. Une étude SearchAtlas de 2025 a conclu que la couverture en schema ne suffit pas à augmenter de façon constante la fréquence de citation par les LLM d\'OpenAI, de Gemini et de Perplexity, et Google indique qu\'aucun schema spécial n\'est requis pour AI Overviews ou AI Mode. Utilisez le schema pour décrire fidèlement la page ; l\'autorité du contenu et la structure réponse d\'abord restent des signaux plus forts.',
            },
          },
          {
            '@type': 'Question',
            name: 'À quelle vitesse la recherche IA progresse-t-elle ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le trafic de l\'IA générative a progressé de 796 % entre janvier 2024 et décembre 2025, et les conversions de sessions de 6 432 % sur la même période. Le trafic généré par l\'IA vers les sites de commerce américains a augmenté de 4 700 % sur un an en juillet 2025. Malgré cette croissance, WebFX constate que l\'IA générative ne représente que 0.18 % des sessions web totales — le trafic direct (35.51 %) et la recherche organique (27.12 %) dominent toujours. SE Ranking, qui a suivi 101 574 sites de janvier 2025 à avril 2026, a mesuré les plateformes IA à 0.32 % du trafic total des sites, dont 74.78 % proviennent de ChatGPT.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le SEO est-il encore pertinent à l\'ère de la recherche IA ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui — le SEO traditionnel est le socle du GEO, pas une alternative. Selon Google, une page doit être indexée et éligible aux extraits pour apparaître dans AI Overviews et AI Mode, sans autre exigence technique : exploration, indexation et qualité du contenu passent donc en premier. Les signaux E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) qui améliorent le classement traditionnel augmentent aussi la probabilité d\'être cité par une IA. Les deux disciplines partagent les mêmes bases — le GEO ajoute la structure réponse d\'abord, la densité d\'entités et le schema markup.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la première étape pour optimiser mon contenu pour le GEO ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Commencez par auditer votre contenu actuel avec un regard IA : prenez vos 10 pages les plus visitées et posez à ChatGPT, Perplexity et Google AI Overviews des questions liées à votre sujet. Vérifiez si votre contenu est cité ou recommandé. Vous repérez ainsi les réponses où vous êtes absent. Ensuite, ajoutez en priorité du schema JSON-LD (Article et FAQPage ont le plus d\'impact), restructurez le contenu au format réponse d\'abord et ajoutez des sections FAQ qui anticipent les sous-questions que les systèmes IA tirent des requêtes plus larges.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que llms.txt et en ai-je besoin ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt est une convention proposée (et non une norme officielle) qui consiste à placer à la racine du site un résumé en markdown que les modèles de langage peuvent lire. Aucun grand fournisseur d\'IA ne documente son usage pour l\'exploration ou la citation, et Google indique qu\'aucun nouveau fichier lisible par machine ni fichier texte IA n\'est nécessaire pour apparaître dans AI Overviews ou AI Mode. Il est facultatif, peu coûteux à ajouter et utile quand une personne colle son URL dans un assistant, mais n\'espérez pas qu\'il change à lui seul vos citations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment être cité par ChatGPT ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Autorisez le robot de recherche d\'OpenAI (OAI-SearchBot) dans robots.txt, vérifiez que la page est indexable et rédigez chaque section de sorte qu\'elle réponde à une question dès sa première phrase, avec un fait précis et sourcé. ChatGPT cite des passages, pas des pages entières : paragraphes autonomes, listes, tableaux et blocs FAQ sont plus faciles à citer qu\'un long texte. Aucune technique ne garantit une citation : ChatGPT choisit ses sources requête par requête, et le même prompt peut renvoyer des sources différentes d\'un jour à l\'autre.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment savoir si les moteurs IA citent mon site ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Combinez trois sources. D\'abord Google Search Console : les données d\'AI Overviews et d\'AI Mode sont incluses dans les totaux du rapport Performances, et depuis juin 2026 un rapport distinct Search generative AI affiche les impressions par page, pays et appareil. Ensuite vos outils d\'analyse : filtrez le trafic de référence venant de chatgpt.com, perplexity.ai, gemini.google.com et claude.ai. Enfin un jeu fixe de 10–20 prompts exécutés à intervalle régulier et consignés à la main ou avec un outil de suivi tiers. Considérez un test isolé comme une anecdote : les citations varient d\'une exécution à l\'autre.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le GEO est-il différent de l\'AEO (Answer Engine Optimization) ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO et AEO sont proches mais pas identiques. L\'AEO optimise pour les encadrés de réponse directe et les extraits optimisés des moteurs traditionnels. Le GEO cible spécifiquement les moteurs d\'IA générative (ChatGPT, Gemini, Perplexity, Claude) qui synthétisent des réponses à partir de plusieurs sources via des pipelines RAG. Le GEO exige une structure réponse d\'abord, du schema markup et une densité d\'entités — les techniques d\'AEO se recoupent largement, mais le GEO ajoute l\'exigence de paragraphes autonomes et extractibles, citables hors contexte.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        'name': 'SEO et IA : les grands thèmes',
        'description': 'Les concepts clés pour comprendre la Generative Engine Optimization',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs SEO : deux jeux différents', 'description': 'Comprendre les différences entre le SEO traditionnel et la Generative Engine Optimization' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Pourquoi le trafic IA convertit différemment', 'description': 'Comment les visiteurs venus de l\'IA convertissent à des taux plus élevés que la recherche organique' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Les fondamentaux techniques du GEO', 'description': 'Le schema JSON-LD et son effet sur les citations IA' },
          { '@type': 'ListItem', 'position': 4, 'name': 'La pile des robots IA', 'description': 'Comprendre GPTBot, ClaudeBot, PerplexityBot et les standards llms.txt' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Structure du contenu et citation IA', 'description': 'Comment la structure réponse d\'abord, la densité d\'entités et la mise en forme maximisent les citations IA' },
        ],
      },
      widgetEmbedUrl: '/widgets/seo-meets-ai-widget.html',
      widgetDescription: 'Guide d\'audit GEO interactif : répondez à 10 questions rapides sur la structure de votre contenu, votre SEO technique et votre préparation aux plateformes IA. Obtenez un score de 0–10 et un plan d\'action priorisé pour optimiser votre contenu pour ChatGPT, Perplexity, Google AI Overviews et Claude.',
      sections: {
        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Le GEO (Generative Engine Optimization) fait citer un contenu dans les réponses générées par l\'IA ; le SEO classe les pages parmi les liens bleus — les deux sont nécessaires en 2026',
            'Le trafic IA convertit à 54.15 % de sessions contre 45.23 % pour l\'organique (WebFX) — mais ne pèse que 0.18 % des sessions totales dans ce jeu de données et 0.32 % chez SE Ranking',
            'Le schema markup aide les machines à lire une page, mais Google indique qu\'AI Overviews et AI Mode n\'exigent aucun schema spécial, et une étude de 2026 n\'a trouvé aucun gain constant de citations avec le schema seul',
            'Google exige seulement qu\'une page soit indexée et éligible aux extraits pour apparaître dans AI Overviews et AI Mode — les fondamentaux du SEO restent le ticket d\'entrée',
            'ChatGPT apporte 74.78 % du trafic de référence IA (SE Ranking, 2026), devant Gemini (11.56 %) et Perplexity (7.23 %) — optimisez d\'abord pour ChatGPT',
            'Listes, tableaux et blocs FAQ sont plus faciles à extraire et à citer pour les systèmes IA qu\'un texte dense — structurez chaque section pour qu\'elle se suffise à elle-même',
            'Le trafic généré par l\'IA vers les sites de commerce américains a augmenté de 4 700 % sur un an en juillet 2025 — le canal est petit mais croît à une vitesse inédite',
            'Autorisez les robots de recherche (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot) ; GPTBot et ClaudeBot contrôlent l\'entraînement, pas les citations de recherche. llms.txt est facultatif — aucun grand fournisseur ne documente son usage',
          ],
        },
        definition: {
          title: 'GEO vs SEO : deux jeux différents',
          content: [
            '**Le SEO vise une place parmi 10 liens bleus ; le GEO vise une citation parmi les 2–7 sources qu\'un modèle d\'IA nomme en général dans une même réponse de synthèse.** Les signaux de classement, les formats de contenu et les indicateurs de succès sont fondamentalement différents. Comprendre [le fonctionnement des systèmes d\'IA et leurs limites](/fr/prompt-engineering/ai-limitations-what-llms-cant-do) est essentiel pour optimiser le GEO.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Astuce pro',
              text: 'Selon Google, une page doit seulement être indexée et éligible à l\'affichage d\'un extrait pour apparaître dans AI Overviews et AI Mode. Exploration, indexation et qualité du contenu sont donc le ticket d\'entrée de la visibilité GEO sur Google — pas une option.',
            },
          ],
          columns: ['Aspect', 'SEO traditionnel', 'Generative Engine Optimization (GEO)'],
          rows: [
            { Aspect: 'Objectif principal', 'SEO traditionnel': 'Se classer de la 1re à la 10e place sur Google/Bing', 'Generative Engine Optimization (GEO)': 'Être cité dans les réponses générées par l\'IA' },
            { Aspect: 'Plateformes cibles', 'SEO traditionnel': 'Google, Bing, Yahoo', 'Generative Engine Optimization (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { Aspect: 'Indicateur clé', 'SEO traditionnel': 'Positions, clics, trafic organique', 'Generative Engine Optimization (GEO)': 'Citations IA, mentions de la marque dans les réponses IA' },
            { Aspect: 'Approche du contenu', 'SEO traditionnel': 'Mots-clés, backlinks, métadonnées', 'Generative Engine Optimization (GEO)': 'Faits riches en entités, structurés, réponse d\'abord' },
            { Aspect: 'Délai des résultats', 'SEO traditionnel': '4–6 mois', 'Generative Engine Optimization (GEO)': '6–12 mois' },
            { Aspect: 'Conversion des sessions (WebFX)', 'SEO traditionnel': '45.23 % (organique)', 'Generative Engine Optimization (GEO)': '54.15 % (IA générative)' },
          ],
          blockquote: 'SEO et GEO reposent sur les mêmes fondamentaux — clarté, autorité, contenu structuré et intention de l\'utilisateur. La différence : les moteurs d\'IA interprètent ces signaux par la reconnaissance d\'entités et la complétude sémantique, plutôt que par les backlinks et les clics. En une phrase : si le SEO traditionnel était une course vers la page 1, le GEO consiste à être la source qu\'une IA cite quand elle connaît déjà la réponse.',
        },
        conversionAnalysis: {
          title: 'Pourquoi le trafic IA convertit différemment',
          content: [
            '**Les visiteurs venus des moteurs de recherche IA convertissent nettement mieux que ceux de la recherche organique — ils arrivent déjà informés, l\'IA ayant synthétisé et comparé les options à leur place.**',
            '**Note sur les indicateurs :** les études ci-dessous mesurent des choses différentes — taux de conversion par session (WebFX), hausse des objectifs atteints (Ahrefs) et conversion B2B (SEMrush). Ces chiffres ne sont pas directement comparables ; chacun est sourcé et étiqueté.',
            'Une analyse de WebFX portant sur 2.3 milliards de sessions (janvier 2024 — décembre 2025) montre que :',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Attention',
              text: 'L\'avantage de conversion varie selon le secteur. Les données multisectorielles de WebFX donnent 54.15 % contre 45.23 % de conversion par session, alors qu\'une analyse e-commerce a trouvé le trafic IA moins performant que l\'organique. Testez votre propre trafic pour vérifier que l\'avantage s\'applique à votre secteur.',
            },
          ],
          items: [
            'Le trafic de l\'IA générative a progressé de **796 % en deux ans**',
            'Les visiteurs venus de l\'IA ont converti à un **taux de 54.15 % par session** contre 45.23 % pour la recherche organique',
            'Les conversions du trafic IA ont augmenté de **6 432 % sur un an** — plus vite que les sessions, donc une part croissante de visiteurs convertit',
          ],
          blockquote: 'L\'écart est plus grand dans certains cas B2B. Ahrefs a observé que les outils de recherche IA convertissaient 23× mieux que la recherche organique sur son propre site. SEMrush a trouvé que le trafic de recherche IA convertissait 4.4× mieux que l\'organique sur plus de 500 sujets B2B. En revanche, une analyse de 973 sites e-commerce rapportée par Practical Ecommerce montre que les visiteurs venus de l\'IA convertissaient moins bien que l\'organique — l\'avantage dépend de la tâche et du secteur. WebFX définit la conversion de session comme une action mesurable (envoi de formulaire, téléchargement, demande de devis) dans la même session : les 54.15 % et 45.23 % ne sont donc pas des taux d\'achat. La citation par l\'IA n\'est pas non plus déterministe : une même question peut renvoyer des sources différentes selon les modèles, et selon les jours pour un même modèle.',
        },
        technicalFoundations: {
          title: 'Quels sont les fondamentaux techniques du GEO ?',
          content: [
            '**Un schema JSON-LD correct aide les moteurs et les systèmes d\'IA à comprendre qui a écrit une page, à quoi elle répond et quand elle a été mise à jour — mais ce n\'est pas un interrupteur de citation : Google indique qu\'aucun schema spécial n\'est nécessaire pour apparaître dans AI Overviews ou AI Mode.**',
            'JSON-LD (JavaScript Object Notation for Linked Data) est le format de schema recommandé par Google et le format de données structurées le plus lisible par l\'IA. Placé dans un bloc `<script>` du `<head>`, il sépare les étiquettes sémantiques du HTML visible — ce qui le rend plus simple à maintenir que les Microdata ou le RDFa intégrés au code. Associé à [une rédaction bien structurée](/fr/prompt-engineering/write-better-code-with-ai), le schema markup devient votre socle GEO.',
            'Les types de schema qui décrivent le plus fidèlement une page de contenu :',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Point clé',
              text: 'Une étude SearchAtlas de 2025 montre que le schema markup seul ne garantit pas davantage de citations IA, et Google précise que les données structurées doivent correspondre au texte visible de la page. L\'autorité du contenu et la structure réponse d\'abord sont des signaux plus forts.',
            },
          ],
          items: [
            '**Article / TechArticle** — établit l\'auteur, la date de publication et la catégorie du sujet',
            '**FAQPage** — paires question-réponse extraites directement par les moteurs de réponse IA',
            '**HowTo** — étapes numérotées, privilégiées par l\'IA pour les requêtes procédurales',
            '**Organization** — reconnaissance d\'entité : qui vous êtes, ce que vous faites, votre URL officielle',
            '**BreadcrumbList** — signale la hiérarchie du contenu et la profondeur thématique',
          ],
          blockquote: 'Une réserve importante : une étude SearchAtlas de 2025, qui compare l\'adoption du schema et la fréquence de citation chez OpenAI, Gemini et Perplexity, conclut qu\'une couverture de schema plus élevée ne produit pas à elle seule, de façon constante, plus de citations par les LLM. Le schema facilite la lecture du contenu — mais l\'autorité du contenu, la densité d\'entités et la structure réponse d\'abord restent les signaux de citation les plus forts.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'Quels robots IA autoriser dans robots.txt ?',
          content: [
            '**Chaque fournisseur d\'IA exploite des robots distincts pour la recherche, l\'entraînement et les requêtes lancées par l\'utilisateur — autorisez les robots de recherche si vous voulez être cité, et décidez séparément pour les robots d\'entraînement.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Bonne pratique',
              text: 'Comparez votre `robots.txt` aux noms de robots ci-dessous et testez avec le fichier en ligne. Un fichier `llms.txt` est facultatif : c\'est une convention proposée sur [llmstxt.org](https://llmstxt.org), et aucun grand fournisseur d\'IA ne documente son usage pour l\'exploration ou la citation.',
            },
          ],
          items: [
            '**OAI-SearchBot** — robot d\'OpenAI pour les résultats de recherche de ChatGPT ; le bloquer masque votre site dans les réponses de recherche de ChatGPT',
            '**GPTBot** — robot d\'OpenAI pour l\'entraînement des modèles génératifs ; le bloquer ne vous retire pas de la recherche ChatGPT',
            '**ChatGPT-User** — charge une page quand une personne interroge ChatGPT à son sujet ; OpenAI indique que les règles robots.txt peuvent ne pas s\'appliquer à ces requêtes lancées par l\'utilisateur',
            '**Claude-SearchBot** et **Claude-User** — robots d\'Anthropic pour l\'indexation de recherche et la récupération demandée par l\'utilisateur ; **ClaudeBot** est le robot d\'entraînement',
            '**PerplexityBot** — fait apparaître et lie les sites dans les résultats de Perplexity, sans servir à l\'entraînement ; **Perplexity-User** traite les requêtes des utilisateurs et ignore généralement robots.txt',
            '**Googlebot** — le robot derrière l\'indexation de la Recherche Google, sur laquelle s\'appuient AI Overviews et AI Mode ; le jeton **Google-Extended** contrôle l\'entraînement et le grounding de Gemini, sans effet sur l\'inclusion ou le classement dans la Recherche',
          ],
          blockquote: 'Bloquer un robot d\'entraînement (GPTBot, ClaudeBot, Google-Extended) est une décision distincte du blocage d\'un robot de recherche. Évitez le blocage par adresse IP : Anthropic note qu\'il peut empêcher ses robots de lire robots.txt.',
        },
        contentStructure: {
          title: 'Structure du contenu : ce que les moteurs IA citent vraiment',
          content: [
            '**Listes, tableaux et blocs FAQ sont plus faciles à extraire et à citer pour les systèmes IA qu\'un texte dense, car la recherche opère sur des passages : une section autonome, réponse d\'abord, peut être citée sans le reste de la page.**',
            'Les moteurs d\'IA utilisent la Retrieval-Augmented Generation (RAG) : ils interrogent d\'abord un index, récupèrent les passages pertinents, puis synthétisent une réponse. Votre contenu doit donc être citable au niveau du paragraphe ou de la section, pas seulement de la page. Une seule section bien structurée peut être extraite et citée sans que l\'IA lise toute la page.',
            'Les cinq principes de contenu qui maximisent la probabilité de citation :',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'La Retrieval-Augmented Generation (RAG) extrait et cite des passages individuels de votre contenu, pas des pages entières — la structure compte donc plus que le nombre de mots.',
            },
            {
              type: 'in-plain-terms',
              text: 'Pensez à votre contenu comme à un manuel. Les systèmes d\'IA ne le lisent pas de bout en bout : ils cherchent la réponse à une question précise, en extraient le paragraphe utile, le citent et passent à la suite. Un paragraphe clair et autonome vaut mieux que 5 000 mots de prose.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Attention',
              text: 'Le langage marketing vague (« puissant », « fluide », « révolutionnaire », « leader ») est ignoré par les robots IA. Utilisez des faits précis : chiffres exacts, entités nommées, affirmations mesurables. Si vous ne pouvez pas le sourcer, les systèmes d\'IA ne l\'extrairont pas.',
            },
          ],
          items: [
            '**Réponse d\'abord** — placez la réponse directe dans la première phrase de chaque section ; les robots IA échantillonnent la phrase d\'ouverture sous chaque titre. C\'est le principe central du [prompt engineering](/fr/prompt-engineering/what-is-prompt-engineering) appliqué à l\'écrit',
            '**Densité d\'entités** — mentionnez 5–7 entités nommées par article (produits, entreprises, termes techniques, noms de chercheurs) pour signaler une autorité thématique. C\'est ainsi que vous indiquez aux systèmes d\'IA que votre sujet fait autorité et mérite d\'être cité',
            '**Complétude sémantique** — chaque section doit répondre à sa question sans le contexte des autres ; l\'IA extrait les passages isolément',
            '**Faits précis plutôt que vagues** — chiffres exacts, dates et sources nommées sont cités ; des formules comme « solution leader » ou « outil puissant » sont ignorées',
            '**Mise en forme structurée** — tableaux et listes sont lisibles par les machines ; les paragraphes de prose exigent une analyse NLP et sont cités moins souvent',
          ],
        },
        goodExample: {
          title: 'Mauvais vs bon : une réécriture conforme au GEO',
          content: [
            '**Mauvais — prose sans information (ne sera pas citée) :**',
            '> Notre plateforme est une solution puissante et complète qui s\'intègre de façon fluide aux meilleurs outils d\'IA pour offrir des résultats de premier plan.',
            'N\'importe quel concurrent pourrait publier ce texte tel quel. Zéro entité, zéro fait précis, zéro affirmation vérifiable — les moteurs d\'IA l\'ignorent complètement.',
            '**Bon — riche en entités et en faits (prêt à être cité) :**',
          ],
          blockquote: 'PromptQuorum envoie un même prompt à jusqu\'à 25 modèles d\'IA simultanément — dont GPT-5.6 (OpenAI), Claude Opus 5 (Anthropic), Gemini 3 Pro (Google DeepMind) et des modèles locaux via Ollama — et affiche toutes les réponses côte à côte pour comparaison.',
        },
        goodExampleExplanation: {
          content: [
            'Quatre entités nommées, un chiffre précis (25), une fonction vérifiable (comparaison côte à côte). Les moteurs d\'IA extraient et attribuent ce passage immédiatement. PromptQuorum intègre 9 frameworks de prompt (CO-STAR, CRAFT, RISEN, SPECS, TRACE et quatre autres) qui aident à structurer un contenu selon ces exigences GEO, directement dans l\'application.',
          ],
        },
        seoFoundation: {
          title: 'Le SEO traditionnel compte-t-il encore pour le GEO ?',
          content: [
            '**Google AI Overviews et AI Mode s\'appuient sur le même index que la recherche classique : une page doit être indexée et éligible à l\'affichage d\'un extrait, donc les fondamentaux du SEO alimentent la visibilité GEO.**',
            'La documentation de Google sur les fonctionnalités d\'IA indique qu\'aucune exigence supplémentaire ne s\'applique pour apparaître dans AI Overviews ou AI Mode, et qu\'aucune optimisation spéciale n\'est nécessaire au-delà des bonnes pratiques SEO standard. Des études tierces constatent que les pages déjà visibles dans les résultats classiques sont citées plus souvent, mais elles mesurent une corrélation, et les pages citées ne correspondent pas toujours au top 10.',
            'La pile hybride SEO + GEO :',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'Les signaux E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) améliorent à la fois le classement dans la recherche traditionnelle et la probabilité d\'être cité par une IA.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Astuce pro',
              text: 'N\'abandonnez pas le SEO pour le GEO. Ils se renforcent : améliorer les Core Web Vitals (SEO) → mieux se classer → être cité dans AI Overviews (GEO). Les signaux E-E-A-T renforcent les deux. Optimisez toute la pile, pas une seule couche.',
            },
          ],
          columns: ['Couche', 'À faire', 'Pourquoi'],
          rows: [
            {
              Couche: 'SEO technique',
              'À faire': 'Vitesse de page, mobile, Core Web Vitals, URL canoniques',
              Pourquoi: 'Les robots GEO respectent les mêmes signaux d\'exploration que Googlebot',
            },
            {
              Couche: 'SEO de contenu',
              'À faire': 'Signaux E-E-A-T, qualifications de l\'auteur, dates de publication visibles ; [voir comment mieux rédiger](/fr/prompt-engineering/write-better-code-with-ai)',
              Pourquoi: 'Les moteurs d\'IA favorisent les contenus aux signaux d\'autorité explicites',
            },
            {
              Couche: 'SEO d\'entités',
              'À faire': 'Schema JSON-LD, optimisation du knowledge graph',
              Pourquoi: 'Les machines construisent des graphes d\'entités ; les pages vagues sont ignorées',
            },
            {
              Couche: 'Spécifique au GEO',
              'À faire': 'Structure réponse d\'abord, sections FAQ, llms.txt',
              Pourquoi: 'Optimise l\'extraction par les pipelines RAG',
            },
            {
              Couche: 'Construction de citations',
              'À faire': 'Liens depuis des sources faisant autorité (arXiv, Reuters, documentation officielle)',
              Pourquoi: 'Liens fiables = autorité ; effet sur citations IA non démontré',
            },
          ],
        },
        platformBreakdown: {
          title: 'Quelles plateformes IA envoient le plus de trafic ?',
          content: [
            '**ChatGPT apporte 74.78 % du trafic de référence IA vers les sites ; Gemini suit avec 11.56 %, Perplexity 7.23 %, Copilot 3.51 % et Claude 2.62 % (SE Ranking, 101 574 sites, janvier 2025–avril 2026) — ce qui fait de ChatGPT la cible GEO au meilleur rendement pour la plupart des sites.**',
            'Ces chiffres sont des parts de visites que les plateformes IA envoient aux sites, pas des parts d\'utilisateurs ou de requêtes. D\'autres outils de suivi donnent d\'autres répartitions (StatCounter place ChatGPT à 78.16 % en mars 2026 ; un outil orienté B2B à 62.6 %) : considérez le classement comme stable et le pourcentage exact comme approximatif.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Le saviez-vous ?',
              text: 'Perplexity affiche ses sources avec chaque réponse, ce qui en fait la plateforme la plus simple pour vérifier si votre contenu est cité. Ensemble, les plateformes IA n\'envoient encore que 0.32 % du trafic total des sites (SE Ranking, 2026) : gardez donc la recherche classique dans votre plan.',
            },
          ],
          columns: ['Plateforme', 'Part du trafic IA', 'Robot de recherche', 'Style de citation'],
          rows: [
            {
              Plateforme: 'ChatGPT (OpenAI)',
              'Part du trafic IA': '74.78 %',
              'Robot de recherche': 'OAI-SearchBot',
              'Style de citation': 'Liens vers les sources dans le texte, avec extraits cités',
            },
            {
              Plateforme: 'Microsoft Copilot',
              'Part du trafic IA': '3.51 %',
              'Robot de recherche': 'Bingbot',
              'Style de citation': 'Pages indexées par Bing, citations en notes de bas de page',
            },
            {
              Plateforme: 'Google Gemini / AI Overviews',
              'Part du trafic IA': '11.56 %',
              'Robot de recherche': 'Googlebot',
              'Style de citation': 'Pages indexées et éligibles aux extraits dans Google Search',
            },
            {
              Plateforme: 'Perplexity AI',
              'Part du trafic IA': '7.23 %',
              'Robot de recherche': 'PerplexityBot',
              'Style de citation': 'Liste numérotée de sources avec chaque réponse',
            },
            {
              Plateforme: 'Claude (Anthropic)',
              'Part du trafic IA': '2.62 %',
              'Robot de recherche': 'Claude-SearchBot',
              'Style de citation': 'Cite ses sources lorsque la recherche web est activée',
            },
          ],
          blockquote: 'Les parts proviennent de SE Ranking (juin 2026). Les répartitions évoluent d\'un mois à l\'autre : revérifiez les chiffres avant de fonder un budget dessus.',
        },
        globalContext: {
          title: 'Comment le GEO varie-t-il selon les régions et les marchés ?',
          content: [
            'Les entreprises européennes doivent concilier leurs investissements GEO avec la conformité à l\'AI Act de l\'UE, qui impose la transparence sur les contenus générés par l\'IA et interdit les systèmes d\'IA trompeurs. Mistral AI (France) étend sa présence dans la recherche européenne — un contenu optimisé pour les plateformes d\'IA européennes doit respecter les exigences strictes de l\'UE en matière d\'attribution des sources de données.',
            'En Chine, la recherche générative est dominée par des produits basés sur **Baidu ERNIE** et **Alibaba Qwen**. Une stratégie GEO pour le marché chinois exige une optimisation pour des graphes d\'entités en chinois, distincts des bases de connaissances de Google ou d\'OpenAI. Les règles chinoises sur l\'IA générative, dont les mesures provisoires (2023) et les mesures de 2025 sur l\'étiquetage des contenus générés par l\'IA, obligent les fournisseurs à étiqueter ces contenus, ce qui influe sur la façon dont les plateformes chinoises présentent leurs sources.',
            'Les entreprises japonaises soumises aux lignes directrices de gouvernance des données du METI utilisent de plus en plus des outils de recherche IA sur site — le GEO destiné aux entreprises japonaises doit donc privilégier les contenus présents dans les index nationaux et conformes au cadre de gouvernance de l\'IA 2024 du METI, pas seulement Google AI Overviews.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Point clé',
              text: 'Les marchés européen, chinois et japonais ont des exigences réglementaires distinctes sur l\'attribution des contenus IA. Si vous servez des publics internationaux, localisez votre stratégie GEO : une approche mondiale unique ne répondra pas à toutes les normes de conformité régionales.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'Comment suivre les citations IA ?',
          content: [
            '**Suivez les citations IA avec trois sources : Google Search Console pour les fonctionnalités d\'IA de Google, le trafic de référence de vos outils d\'analyse pour ChatGPT, Perplexity, Gemini et Claude, et un jeu fixe de prompts que vous relancez à intervalle régulier.**',
            'Depuis juin 2026, Search Console inclut un rapport de performances Search generative AI, avec les impressions dans AI Overviews, AI Mode et Discover par page, pays et appareil ; les mêmes données restent dans le rapport Performances global. Il indique des impressions, pas le texte de la réponse : il montre où vous apparaissez, pas pourquoi.',
          ],
          items: [
            '**Search Console** — ouvrez le rapport generative AI et notez quelles pages gagnent des impressions après un changement de structure',
            '**Référents dans l\'analytics** — segmentez les visites venant de chatgpt.com, perplexity.ai, gemini.google.com et claude.ai ; attendez-vous à de petits volumes',
            '**Jeu de prompts** — gardez 10–20 questions auxquelles votre page doit répondre, lancez-les chaque semaine dans chaque assistant et notez les URL citées',
            '**Logs serveur** — comptez les requêtes d\'OAI-SearchBot, de Claude-SearchBot et de PerplexityBot pour confirmer que les pages sont bien récupérées',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Attention',
              text: 'Les réponses IA varient d\'une exécution à l\'autre. Une citation, ou une absence de citation, est une anecdote. Comparez un jeu de prompts sur plusieurs semaines avant de conclure qu\'une modification a fonctionné.',
            },
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Qu\'est-ce que le prompt engineering ?](/fr/prompt-engineering/what-is-prompt-engineering) — comment des instructions structurées déterminent ce que les systèmes d\'IA extraient et citent',
            '[Limites de l\'IA — ce que les LLM ne savent pas faire](/fr/prompt-engineering/ai-limitations-what-llms-cant-do) — techniques de vérification des affirmations d\'un contenu généré par l\'IA',
            '[Mieux coder avec l\'IA](/fr/prompt-engineering/write-better-code-with-ai) — appliquer une structure conforme au GEO à la génération de code assistée par IA',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'Comment optimiser un contenu pour le GEO (Generative Engine Optimization)',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Bonne pratique',
              text: 'Priorité à ChatGPT (74.78 % du trafic de référence IA), puis Gemini et Perplexity. Cette approche 80/20 offre le meilleur retour sans disperser l\'effort sur les plateformes plus petites.',
            },
          ],
          numberedItems: [
            '**Auditez votre contenu actuel avec un regard IA : repérabilité et citabilité.** Prenez vos 10 pages les plus visitées et demandez à ChatGPT, Perplexity et Google AI Overviews s\'ils citent ou recommandent votre contenu pour des requêtes liées à votre sujet. Notez les cas où vous n\'apparaissez pas.',
            '**Structurez votre contenu en réponse d\'abord, avec des faits vérifiables et un schema markup clair.** Ouvrez chaque section par une réponse directe (pas une question). Appuyez chaque affirmation sur des sources ou un raisonnement clair. Ajoutez du schema JSON-LD (Article, FAQPage, HowTo, Breadcrumb) pour que les robots IA comprennent la structure de votre contenu.',
            '**Visez l\'intention de recherche, pas seulement le mot-clé.** Si vous êtes classé sur « meilleurs outils d\'IA », le GEO exige de répondre à « qu\'est-ce qui fait un bon outil d\'IA ? » (précision, vitesse, coût, simplicité). Les systèmes d\'IA raisonnent par intention, pas par mot-clé — assurez-vous que votre réponse correspond à ce qu\'ils déduisent du besoin de l\'utilisateur.',
            '**Créez des sections FAQ qui répondent aux questions dérivées posées par les systèmes d\'IA.** Les systèmes d\'IA décomposent les requêtes larges en sous-questions. Si vous ciblez « hallucinations de l\'IA », ajoutez des FAQ comme « Les hallucinations de l\'IA sont-elles fréquentes ? », « Peut-on les éviter ? », « Quels modèles hallucinent le plus ? ».',
            '**Vérifiez votre robots.txt et, si vous le souhaitez, ajoutez un fichier llms.txt.** Autorisez OAI-SearchBot, Claude-SearchBot, PerplexityBot et Googlebot. llms.txt est une convention proposée dont aucun grand fournisseur d\'IA ne documente l\'usage : considérez-le comme une documentation facultative, pas comme un levier de classement.',
          ],
        },
        commonMistakes: {
          title: 'Erreurs GEO courantes (et comment les corriger)',
          mistakes: [
            {
              mistake: 'Traiter le GEO comme de l\'optimisation de mots-clés plutôt que de citations.',
              problem: 'Vous optimisez les pages pour des requêtes de recherche, pas pour l\'extraction et la citation par l\'IA. Les systèmes d\'IA fonctionnent par intention et complétude sémantique, pas par densité de mots-clés.',
              fix: 'Changez d\'angle : structurez le contenu pour répondre à la question complète dans les 2–3 premières phrases de chaque section. Utilisez des entités exactes et des chiffres précis plutôt que la répétition de mots-clés. Testez directement avec ChatGPT et Perplexity pour voir ce qui est cité.',
            },
            {
              mistake: 'Ignorer le SEO traditionnel parce que vous « misez tout sur le GEO ».',
              problem: 'Les pages non indexées ou non éligibles aux extraits ne peuvent pas apparaître dans Google AI Overviews ou AI Mode. Le GEO repose sur le SEO.',
              fix: 'Deux couches : maintenez de solides signaux E-E-A-T, de bons Core Web Vitals et des backlinks de qualité (SEO), puis ajoutez par-dessus la structure réponse d\'abord, le schema markup et les sections FAQ (GEO). Les deux se renforcent.',
            },
            {
              mistake: 'Compter sur le seul schema markup pour améliorer les citations IA.',
              problem: 'Le schema facilite la lecture du contenu par les systèmes d\'IA, mais l\'autorité et la structure du contenu sont des signaux de citation plus forts. Une page au schema parfait mais à la prose vague ne sera pas citée.',
              fix: 'Combinez les couches : schema JSON-LD + structure réponse d\'abord + densité d\'entités. L\'étude SearchAtlas de 2025 montre que le schema seul a un effet limité sans forte autorité du contenu.',
            },
            {
              mistake: 'Optimiser toutes les plateformes IA de la même façon au lieu de prioriser selon leur poids.',
              problem: 'ChatGPT envoie 74.78 % du trafic de référence IA. Répartir l\'effort sur 5 plateformes dilue le retour sur investissement.',
              fix: 'Commencez par ChatGPT (exploration par OAI-SearchBot, structure réponse d\'abord, sections FAQ). Passez ensuite à Gemini et à Perplexity (qui liste ses sources avec chaque réponse). Étendez à Claude en dernier.',
            },
            {
              mistake: 'Écrire de longs paragraphes plutôt que du contenu en listes.',
              problem: 'Un texte dense est plus difficile à citer que des listes et des tableaux. Les systèmes d\'IA utilisent la RAG (Retrieval-Augmented Generation) et extraient plus fiablement les sections structurées.',
              fix: 'Convertissez les descriptions en listes à puces dès que possible. Utilisez des tableaux pour les comparaisons. Limitez les paragraphes à 2–3 phrases. Les robots IA échantillonnent la première phrase sous chaque titre pour décider d\'extraire ou non la section.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Quelle est la différence entre SEO et GEO ?',
              a: 'Le SEO (Search Engine Optimization) vise à classer les pages dans les résultats des moteurs traditionnels comme Google et Bing, où l\'utilisateur choisit parmi une liste de liens bleus. Le GEO (Generative Engine Optimization) vise à faire citer votre contenu dans les réponses générées par ChatGPT, Perplexity, Gemini et Claude — où l\'utilisateur reçoit une seule réponse de synthèse plutôt qu\'une liste d\'options. Les deux sont nécessaires : selon Google, une page doit seulement être indexée et éligible à l\'affichage d\'un extrait pour apparaître dans AI Overviews et AI Mode, donc les fondamentaux du SEO restent le ticket d\'entrée.',
            },
            {
              q: 'Le trafic de la recherche IA convertit-il mieux que la recherche organique ?',
              a: 'Un peu en moyenne, et beaucoup plus dans certains cas B2B. Une analyse de WebFX portant sur 2.3 milliards de sessions montre que les visiteurs venus de l\'IA générative ont accompli une action mesurable dans 54.15 % des sessions, contre 45.23 % pour la recherche organique. Ahrefs a observé des taux de conversion 23× supérieurs via la recherche IA sur son propre site. Pour l\'e-commerce, les résultats sont partagés : une analyse de 973 sites e-commerce rapportée par Practical Ecommerce a trouvé que la recherche IA convertissait moins bien que l\'organique. L\'avantage est le plus net pour le B2B et les achats très réfléchis.',
            },
            {
              q: 'Dans quelle mesure le schema markup améliore-t-il les citations IA ?',
              a: 'Selon une étude d\'éditeur, les pages dotées d\'un schema JSON-LD correct obtiennent jusqu\'à 40 % d\'impressions enrichies en plus, mais la preuve d\'un gain direct en citations IA est faible. Une étude SearchAtlas de 2025 a conclu que la couverture en schema ne suffit pas à augmenter de façon constante la fréquence de citation par les LLM d\'OpenAI, de Gemini et de Perplexity, et Google indique qu\'aucun schema spécial n\'est requis pour AI Overviews ou AI Mode. Utilisez le schema pour décrire fidèlement la page ; l\'autorité du contenu et la structure réponse d\'abord restent des signaux plus forts.',
            },
            {
              q: 'À quelle vitesse la recherche IA progresse-t-elle ?',
              a: 'Le trafic de l\'IA générative a progressé de 796 % entre janvier 2024 et décembre 2025, et les conversions de sessions de 6 432 % sur la même période. Le trafic généré par l\'IA vers les sites de commerce américains a augmenté de 4 700 % sur un an en juillet 2025. Malgré cette croissance, WebFX constate que l\'IA générative ne représente que 0.18 % des sessions web totales — le trafic direct (35.51 %) et la recherche organique (27.12 %) dominent toujours. SE Ranking, qui a suivi 101 574 sites de janvier 2025 à avril 2026, a mesuré les plateformes IA à 0.32 % du trafic total des sites, dont 74.78 % proviennent de ChatGPT.',
            },
            {
              q: 'Le SEO est-il encore pertinent à l\'ère de la recherche IA ?',
              a: 'Oui — le SEO traditionnel est le socle du GEO, pas une alternative. Selon Google, une page doit être indexée et éligible aux extraits pour apparaître dans AI Overviews et AI Mode, sans autre exigence technique : exploration, indexation et qualité du contenu passent donc en premier. Les signaux E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) qui améliorent le classement traditionnel augmentent aussi la probabilité d\'être cité par une IA. Les deux disciplines partagent les mêmes bases — le GEO ajoute la structure réponse d\'abord, la densité d\'entités et le schema markup.',
            },
            {
              q: 'Quelle est la première étape pour optimiser mon contenu pour le GEO ?',
              a: 'Commencez par auditer votre contenu actuel avec un regard IA : prenez vos 10 pages les plus visitées et posez à ChatGPT, Perplexity et Google AI Overviews des questions liées à votre sujet. Vérifiez si votre contenu est cité ou recommandé. Vous repérez ainsi les réponses où vous êtes absent. Ensuite, ajoutez en priorité du schema JSON-LD (Article et FAQPage ont le plus d\'impact), restructurez le contenu au format réponse d\'abord et ajoutez des sections FAQ qui anticipent les sous-questions que les systèmes IA tirent des requêtes plus larges.',
            },
            {
              q: 'Qu\'est-ce que llms.txt et en ai-je besoin ?',
              a: 'llms.txt est une convention proposée (et non une norme officielle) qui consiste à placer à la racine du site un résumé en markdown que les modèles de langage peuvent lire. Aucun grand fournisseur d\'IA ne documente son usage pour l\'exploration ou la citation, et Google indique qu\'aucun nouveau fichier lisible par machine ni fichier texte IA n\'est nécessaire pour apparaître dans AI Overviews ou AI Mode. Il est facultatif, peu coûteux à ajouter et utile quand une personne colle son URL dans un assistant, mais n\'espérez pas qu\'il change à lui seul vos citations.',
            },
            {
              q: 'Comment être cité par ChatGPT ?',
              a: 'Autorisez le robot de recherche d\'OpenAI (OAI-SearchBot) dans robots.txt, vérifiez que la page est indexable et rédigez chaque section de sorte qu\'elle réponde à une question dès sa première phrase, avec un fait précis et sourcé. ChatGPT cite des passages, pas des pages entières : paragraphes autonomes, listes, tableaux et blocs FAQ sont plus faciles à citer qu\'un long texte. Aucune technique ne garantit une citation : ChatGPT choisit ses sources requête par requête, et le même prompt peut renvoyer des sources différentes d\'un jour à l\'autre.',
            },
            {
              q: 'Comment savoir si les moteurs IA citent mon site ?',
              a: 'Combinez trois sources. D\'abord Google Search Console : les données d\'AI Overviews et d\'AI Mode sont incluses dans les totaux du rapport Performances, et depuis juin 2026 un rapport distinct Search generative AI affiche les impressions par page, pays et appareil. Ensuite vos outils d\'analyse : filtrez le trafic de référence venant de chatgpt.com, perplexity.ai, gemini.google.com et claude.ai. Enfin un jeu fixe de 10–20 prompts exécutés à intervalle régulier et consignés à la main ou avec un outil de suivi tiers. Considérez un test isolé comme une anecdote : les citations varient d\'une exécution à l\'autre.',
            },
            {
              q: 'Le GEO est-il différent de l\'AEO (Answer Engine Optimization) ?',
              a: 'GEO et AEO sont proches mais pas identiques. L\'AEO optimise pour les encadrés de réponse directe et les extraits optimisés des moteurs traditionnels. Le GEO cible spécifiquement les moteurs d\'IA générative (ChatGPT, Gemini, Perplexity, Claude) qui synthétisent des réponses à partir de plusieurs sources via des pipelines RAG. Le GEO exige une structure réponse d\'abord, du schema markup et une densité d\'entités — les techniques d\'AEO se recoupent largement, mais le GEO ajoute l\'exigence de paragraphes autonomes et extractibles, citables hors contexte.',
            },
          ],
        },
        sources: {
          title: 'Sources et pour aller plus loin',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — l\'article académique fondateur qui définit le GEO comme discipline et mesure le gain de citations apporté par un contenu structuré',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — analyse de 2.3 milliards de sessions comparant les taux de conversion IA et organique',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — étude d\'éditeur sur le schema JSON-LD et la fréquence de citation par l\'IA',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — parts de trafic de référence par plateforme IA sur 101 574 sites, janvier 2025–avril 2026',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — éligibilité à AI Overviews et AI Mode, données structurées et fichiers lisibles par machine',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — impressions dans AI Overviews, AI Mode et Discover',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot et ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User et Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot et Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — analyse des citations selon la couverture schema chez OpenAI, Gemini et Perplexity',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — croissance annuelle de 4 700 % du trafic IA vers les sites de commerce américains, juillet 2025',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — synthèse de l\'analyse de conversion de 973 sites e-commerce',
          ],
        },
      },
    },
    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-ja.webp',
      title: 'SEOとAI：GEOが従来の手法に取って代わる理由',
      intro: '**Generative Engine Optimization（GEO）とは、AI検索エンジン（ChatGPT、Perplexity、Gemini、Claude）が回答を合成する際にコンテンツを引用するよう、構造を整える取り組みです。Googleの青いリンクの中で上位表示を目指す従来のSEOの目標に代わり、AIが1回の回答で引用する2～7件のソースに名前が挙がることを目指します。**\n\nGEOは従来のSEOを置き換えるものではなく、2つ目の最適化レイヤーを加えるものです。AIプラットフォームがウェブサイトに送るトラフィックはいまだ全体の1%未満（SE Rankingの2026年データでは0.32%）ですが、2年間で796%増加しました（WebFX）。',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02（Google Search Central、OpenAI、Anthropic、Perplexityのクローラー文書、SE Ranking（2026年6月）、WebFX（2026年3月）に照らして確認）',
      readTime: '8分で読める',

      seoTitle: 'SEOとAI：GEOでChatGPTに引用されるコンテンツ戦略（2026）',

      metaDescription: 'ChatGPT・Perplexity・Geminiに引用されるためのGEO入門。回答ファースト構造、robots.txtで許可すべきAIクローラー、スキーマ、AI引用の追跡方法を解説します。',

      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'GEOとSEO：異なる2つのゲーム', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'AI経由のトラフィックでコンバージョンが変わる理由', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'GEOの技術的基礎とは？', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'robots.txtでブロックを解除すべきAIクローラーは？', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: 'コンテンツ構造：AIエンジンが実際に引用するもの', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: '悪い例と良い例：GEO対応の書き換え', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: '従来のSEOはGEOでも重要か？', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: 'リファラルトラフィックが最も多いAIプラットフォームは？', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: '地域や市場によってGEOはどう異なるか？', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'GEO向けにコンテンツを最適化する方法', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'AIによる引用を追跡するには？', anchor: '#how-to-track-ai-citations' },
        { label: 'GEOでよくある間違いと対処法', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: 'よくある質問', anchor: '#frequently-asked-questions' },
        { label: '出典と参考資料', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/seo-meets-ai',
        inLanguage: 'ja',
        headline: 'SEOとAI：GEOが従来の手法に取って代わる理由',
        description: 'Generative Engine Optimization（GEO）は、AI検索エンジンにコンテンツを引用してもらうための手法です。GEOとSEOの違い、AI経由のトラフィックでコンバージョンが変わる理由、ChatGPT・Perplexity・Geminiに引用されるための技術的基礎を解説します。',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: buildOgImageObject(OG_SLUG, 'ja'),
        keywords: ['GEO', 'SEO', 'Generative Engine Optimization', 'AI検索', 'ChatGPTに引用される', 'Perplexity', 'Google AI Overviews', 'JSON-LDスキーマ', 'AIによる引用', 'AIクローラー'],
        about: [
          { '@type': 'Thing', name: 'Generative Engine Optimization（GEO）' },
          { '@type': 'Thing', name: 'AI検索' },
          { '@type': 'Thing', name: 'コンテンツ構造' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'SEOとGEOの違いは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO（検索エンジン最適化）は、GoogleやBingなど従来の検索結果でページを上位表示させる取り組みで、ユーザーは青いリンクの一覧から選びます。GEO（Generative Engine Optimization）は、ChatGPT、Perplexity、Gemini、ClaudeなどのAIが生成する回答の中でコンテンツが引用されることを目指す取り組みで、ユーザーは選択肢の一覧ではなく、合成された1つの回答を受け取ります。両方が必要です。Googleは、AI OverviewsとAIモードに表示されるにはページがインデックスされ、スニペットの表示対象であることだけが必要だと述べており、従来のSEOの基本が入口であることに変わりはありません。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI検索経由のトラフィックは、オーガニック検索よりコンバージョンしやすいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '平均では多少高く、B2Bの一部の事例ではそれよりはるかに高くなります。WebFXが23億セッションを分析したところ、生成AI経由の訪問者が測定可能なアクションを完了したセッションは54.15%で、オーガニック検索の45.23%を上回りました。Ahrefsは自社サイトでAI検索経由のコンバージョン率が23倍だったと報告しています。一方、eコマースでは結果が分かれます。Practical Ecommerceが紹介した973のeコマースサイトの分析では、AI検索のコンバージョンはオーガニックより低くなりました。優位性が最も明確なのは、B2Bや検討期間の長い購買です。',
            },
          },
          {
            '@type': 'Question',
            name: 'スキーママークアップはAIによる引用率をどの程度高めますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '正しいJSON-LDスキーママークアップを実装したページは、あるベンダー調査によるとリッチリザルトのインプレッションが最大40%増えますが、AIによる引用が直接増えるという根拠は弱いのが実情です。2025年のSearchAtlasの調査では、スキーマの網羅率だけではOpenAI、Gemini、PerplexityにおけるLLMの引用頻度は一貫して上がらないことが示されました。またGoogleは、AI OverviewsやAIモードに特別なスキーマは不要だと述べています。スキーマはページを正確に記述するために使い、より強いシグナルはコンテンツの権威性と回答ファースト構造です。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI検索はどのくらいの速さで成長していますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '生成AI経由のトラフィックは2024年1月から2025年12月にかけて796%増加し、セッションのコンバージョンは同期間に6,432%増えました。米国の小売サイトへのAI生成トラフィックは、2025年7月時点で前年同期比4,700%増加しています。ただしこの成長にもかかわらず、WebFXによると生成AIはウェブセッション全体のわずか0.18%で、ダイレクト（35.51%）とオーガニック検索（27.12%）が依然として大半を占めます。SE Rankingは2025年1月から2026年4月まで101,574サイトを追跡し、AIプラットフォームがウェブサイト全体のトラフィックの0.32%を占め、そのAIリファラルトラフィックの74.78%をChatGPTが占めると測定しました。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI検索の時代でもSEOは重要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。従来のSEOはGEOの代替ではなく土台です。Googleは、AI OverviewsとAIモードに表示されるにはページがインデックスされ、スニペットの表示対象であることが必要で、それ以上の技術要件はないと述べています。そのため、クロール可能性、インデックス、コンテンツの質が最優先です。従来の順位を押し上げるE-E-A-T（経験、専門性、権威性、信頼性）のシグナルは、AIに引用される可能性も高めます。2つの分野は基本要件を共有しており、GEOは回答ファースト構造、エンティティ密度、スキーママークアップを追加のレイヤーとして加える点が異なります。',
            },
          },
          {
            '@type': 'Question',
            name: 'GEOのためにコンテンツを最適化する最初のステップは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'まず、AIの視点で現在のコンテンツを点検します。トラフィックの多いページを10件選び、そのトピックに関する質問をChatGPT、Perplexity、Google AI Overviewsに投げて、自社コンテンツが引用または推奨されるかを確認します。これでAIの回答に表示されていない部分が見えてきます。そのうえで、JSON-LDスキーママークアップ（ArticleとFAQPageが最も効果的）の追加、回答ファースト形式への再構成、AIが広いクエリから分解する副次的な質問を想定したFAQセクションの追加を優先します。',
            },
          },
          {
            '@type': 'Question',
            name: 'llms.txtとは何ですか？必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txtは、言語モデルが読めるようにサイトの要約をmarkdownでサイトのルートに置くという提案段階の慣例であり、正式な標準ではありません。主要なAIプロバイダーで、クロールや引用にllms.txtを使うと文書化しているところはなく、Googleも、AI OverviewsやAIモードに表示されるために新しい機械可読ファイルやAI用テキストファイルは不要だと述べています。任意で、追加も簡単であり、URLをアシスタントに貼り付ける場面では役立ちますが、それだけで引用が変わるとは期待しないでください。',
            },
          },
          {
            '@type': 'Question',
            name: 'ChatGPTに自分のコンテンツを引用してもらうにはどうすればよいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'robots.txtでOpenAIの検索クローラー（OAI-SearchBot）を許可し、ページがインデックス可能であることを確認したうえで、各セクションの1文目で1つの質問に答え、出典のある具体的な事実を示すように書きます。ChatGPTが引用するのはページ全体ではなく一節なので、独立した段落、リスト、表、FAQブロックは長い文章より引用されやすくなります。引用を保証する手法はありません。ChatGPTはクエリごとにソースを選び、同じプロンプトでも日によって異なるソースが返ることがあります。',
            },
          },
          {
            '@type': 'Question',
            name: 'AIエンジンが自分のサイトを引用しているかどうかを追跡するにはどうすればよいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '3つの情報源を組み合わせます。1つ目はGoogle Search Consoleです。AI OverviewsとAIモードのデータは検索パフォーマンスレポートの合計に含まれ、2026年6月以降は、ページ別・国別・デバイス別のインプレッションを示す「Search generative AI」レポートが別途提供されています。2つ目はアナリティクスで、chatgpt.com、perplexity.ai、gemini.google.com、claude.aiからのリファラルトラフィックを絞り込みます。3つ目は、定期的に実行して手作業またはサードパーティの監視ツールで記録する、10～20件の固定プロンプトのセットです。1回だけの実行は参考程度に扱ってください。引用は実行ごとに変わります。',
            },
          },
          {
            '@type': 'Question',
            name: 'GEOはAEO（Answer Engine Optimization）と違いますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEOとAEOは近い関係にありますが、同じではありません。AEOは、従来の検索エンジンの直接回答ボックスやfeatured snippetに向けた最適化に重点を置きます。GEOは、RAGパイプラインを使って複数のソースから回答を合成する生成AIエンジン（ChatGPT、Gemini、Perplexity、Claude）を対象とします。GEOには回答ファースト構造、スキーママークアップ、エンティティ密度が必要で、AEOの手法とは大きく重なりますが、GEOは文脈から切り離しても引用できる、独立して抽出可能な段落という要件が加わります。',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        'name': 'SEOとAI：主要トピック',
        'description': 'Generative Engine Optimizationを理解するための基本概念',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEOとSEO：異なる2つのゲーム', 'description': '従来のSEOとGenerative Engine Optimizationの違いを理解する' },
          { '@type': 'ListItem', 'position': 2, 'name': 'AI経由のトラフィックでコンバージョンが変わる理由', 'description': 'AI経由の訪問者がオーガニック検索より高い率でコンバージョンする仕組み' },
          { '@type': 'ListItem', 'position': 3, 'name': 'GEOの技術的基礎', 'description': 'JSON-LDスキーママークアップと、AIによる引用率への影響' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AIクローラーの全体像', 'description': 'GPTBot、ClaudeBot、PerplexityBot、llms.txtの位置づけを理解する' },
          { '@type': 'ListItem', 'position': 5, 'name': 'コンテンツ構造とAIによる引用', 'description': '回答ファースト構造、エンティティ密度、書式設計でAIによる引用を最大化する方法' },
        ],
      },
      widgetEmbedUrl: '/widgets/seo-meets-ai-widget.html',
      widgetDescription: '対話型GEO監査ガイド：コンテンツ構造、技術的SEO、AIプラットフォーム準備状況に関する10の簡単な質問に回答します。0～10の準備状況スコア、地域別コンプライアンスガイダンス（METI、日本規制）、および ChatGPT、Perplexity、Google AI Overviews、Claude向けにコンテンツを最適化するための優先度付きアクションプラン（工数見積もり付き）を取得します。',
      sections: {
        tldr: {
          title: '重要ポイント',
          isTldr: true,
          items: [
            'GEO（Generative Engine Optimization）はAIが生成する回答の中でコンテンツを引用されるようにする取り組み、SEOは青いリンクの検索結果でページを上位表示させる取り組みです。2026年はどちらも必要です',
            'AI経由のトラフィックのセッションコンバージョン率は54.15%で、オーガニック検索の45.23%を上回ります（WebFX）。ただし全セッションに占める割合は、このデータセットでは0.18%、SE Rankingのデータでは0.32%にとどまります',
            'スキーママークアップは機械によるページの解析を助けますが、GoogleはAI OverviewsとAIモードに特別なスキーマは不要としており、2026年の調査ではスキーマだけでは引用が一貫して増えないことも示されています',
            'GoogleがAI OverviewsとAIモードへの表示に求めるのは、ページがインデックスされ、スニペットの表示対象であることだけです。従来のSEOの基本が入口であることに変わりはありません',
            'AIリファラルトラフィックの74.78%をChatGPTが占め（SE Ranking、2026年）、Gemini（11.56%）とPerplexity（7.23%）が続きます。まずChatGPTを優先して最適化してください',
            'リスト、表、FAQブロックは、密度の高い文章よりAIが抽出して引用しやすくなります。各セクションが単独で成立するように構成してください',
            '米国の小売サイトへのAI生成トラフィックは、2025年7月時点で前年同期比4,700%増加しました。規模はまだ小さいものの、前例のない速さで伸びているチャネルです',
            '検索クローラー（OAI-SearchBot、Claude-SearchBot、PerplexityBot、Googlebot）は許可してください。GPTBotとClaudeBotが制御するのは学習での利用であり、検索での引用ではありません。llms.txtは任意で、主要プロバイダーで利用を文書化しているところはありません',
          ],
        },
        definition: {
          title: 'GEOとSEO：異なる2つのゲーム',
          content: [
            '**従来のSEOは10件の青いリンクの中の1枠を獲得するもので、GEOはAIモデルが1回の合成回答で通常挙げる2～7件のソースの中で引用を獲得するものです。** ランキングのシグナル、コンテンツの形式、成功指標は根本的に異なります。[AIシステムの仕組みと限界](/ja/prompt-engineering/ai-limitations-what-llms-cant-do)を理解することは、GEOの最適化に欠かせません。',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 プロのヒント',
              text: 'Googleは、AI OverviewsとAIモードに表示されるには、ページがインデックスされ、スニペットの表示対象であることだけが必要だと述べています。そのため、クロール可能性、インデックス、コンテンツの質は、GoogleでのGEOの可視性を得るための入口であり、省略できません。',
            },
          ],
          columns: ['項目', '従来のSEO', 'Generative Engine Optimization（GEO）'],
          rows: [
            { '項目': '主な目標', '従来のSEO': 'Google/Bingで1～10位に入る', 'Generative Engine Optimization（GEO）': 'AIが生成する回答で引用される' },
            { '項目': '対象プラットフォーム', '従来のSEO': 'Google、Bing、Yahoo', 'Generative Engine Optimization（GEO）': 'ChatGPT、Gemini、Perplexity、Claude、Google AI Overviews' },
            { '項目': '主な成功指標', '従来のSEO': '順位、クリック、オーガニックトラフィック', 'Generative Engine Optimization（GEO）': 'AIによる引用、AIの回答でのブランド言及' },
            { '項目': 'コンテンツのアプローチ', '従来のSEO': 'キーワード、被リンク、メタデータ', 'Generative Engine Optimization（GEO）': 'エンティティが豊富で構造化された、回答ファーストの事実' },
            { '項目': '成果が出るまでの期間', '従来のSEO': '4～6か月', 'Generative Engine Optimization（GEO）': '6～12か月' },
            { '項目': 'セッションコンバージョン率（WebFX）', '従来のSEO': '45.23%（オーガニック）', 'Generative Engine Optimization（GEO）': '54.15%（生成AI）' },
          ],
          blockquote: 'SEOとGEOは、明確さ、権威性、構造化されたコンテンツ、ユーザーの意図という同じ基本に依拠しています。違いは、AIエンジンがそれらのシグナルを、被リンクやクリック指標ではなく、エンティティ認識と意味的な完全性を通じて解釈する点です。一言でいえば、従来のSEOが1ページ目を目指す競争だったとすれば、GEOはAIがすでに答えを知っているときに引用するソースになることです。',
        },
        conversionAnalysis: {
          title: 'AI経由のトラフィックでコンバージョンが変わる理由',
          content: [
            '**AI検索エンジンから訪れる人は、AIがすでに選択肢を合成・比較したうえで来訪するため、事前に情報を得た状態で到着し、オーガニック検索の訪問者よりかなり高い率でコンバージョンします。**',
            '**指標についての注記：** 以下の調査は、それぞれ異なるものを測定しています。セッション単位のコンバージョン率（WebFX）、ゴール達成の上昇幅（Ahrefs）、B2B特有のコンバージョン（SEMrush）です。これらの数値は直接比較できません。それぞれ出典とラベルを示しています。',
            'WebFXが23億件のサイトセッション（2024年1月～2025年12月）を分析した結果は次のとおりです。',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 注意',
              text: 'コンバージョンの上昇幅は業種によって異なります。WebFXの業種横断データではセッションコンバージョンが54.15%対45.23%でしたが、あるeコマースの分析ではAI経由のトラフィックがオーガニックより低い結果でした。自社のトラフィックで、この優位性が自社の業界に当てはまるかを確かめてください。',
            },
          ],
          items: [
            '生成AI経由のトラフィックは**2年間で796%**増加しました',
            'AI経由の訪問者の**セッションコンバージョン率は54.15%**で、オーガニック検索は45.23%でした',
            'AI経由のトラフィックのコンバージョンは**前年比6,432%**増加しました。セッションの伸びを上回っており、コンバージョンする訪問者の割合が高まっていることを意味します',
          ],
          blockquote: 'B2Bの一部の事例では、プレミアムはさらに大きくなります。Ahrefsは、自社サイトでAI検索ツールのコンバージョン率がオーガニック検索の23倍だったと報告しました。SEMrushは、500以上のB2Bトピックを対象とした調査で、AI検索経由のトラフィックのコンバージョン率がオーガニックの4.4倍だったとしています。一方、Practical Ecommerceが紹介した973のeコマースサイトの分析では、AI経由の訪問者のコンバージョンはオーガニックより低く、優位性はタスクや業種によって異なります。WebFXはセッションコンバージョンを、同一セッション内で測定可能なアクション（フォーム送信、ダウンロード、見積り依頼）が行われたものと定義しているため、54.15%と45.23%は購入率ではありません。AIによる引用も決定論的ではありません。同じ質問でも、モデルが異なれば、また同じモデルでも日によって、異なるソースが返ることがあります。',
        },
        technicalFoundations: {
          title: 'GEOの技術的基礎とは？',
          content: [
            '**正しいJSON-LDスキーママークアップは、検索エンジンやAIシステムが、ページの著者、そのページが答える内容、更新日を解析する助けになります。ただし引用のスイッチではありません。Googleは、AI OverviewsやAIモードに表示されるために特別なスキーマは不要だと述べています。**',
            'JSON-LD（JavaScript Object Notation for Linked Data）は、Googleが推奨するスキーマ形式であり、AIが最も解析しやすい構造化データ形式です。ページの`<head>`内の`<script>`ブロックに記述することで、意味的なラベルを表示されるHTMLから切り離せるため、インラインのMicrodataやRDFaより保守しやすくなります。[構造のしっかりした文章](/ja/prompt-engineering/write-better-code-with-ai)と組み合わせると、スキーママークアップはGEOの土台になります。',
            'コンテンツページを最も正確に記述できるスキーマの種類は次のとおりです。',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 重要',
              text: '2025年のSearchAtlasの調査では、スキーママークアップだけではAIによる引用率が上がる保証はないことが示されました。またGoogleは、構造化データは表示されるページのテキストと一致している必要があると述べています。より強いシグナルは、コンテンツの権威性と回答ファースト構造です。',
            },
          ],
          items: [
            '**Article / TechArticle** — 著者、公開日、トピックのカテゴリを示します',
            '**FAQPage** — AI回答エンジンがそのまま抽出するQ&Aのペアです',
            '**HowTo** — 手順型のクエリでAIが好む番号付きの手順です',
            '**Organization** — エンティティの認識に使われ、運営者、事業内容、公式URLを示します',
            '**BreadcrumbList** — コンテンツの階層とトピックの深さを示します',
          ],
          blockquote: '重要な留意点があります。2025年のSearchAtlasの調査は、OpenAI、Gemini、Perplexityにおけるスキーマの採用状況とAIによる引用頻度を分析し、スキーマの網羅率が高くても、LLMの引用率が一貫して高まるわけではないことを示しました。スキーマはコンテンツを解析しやすくしますが、コンテンツの権威性、エンティティ密度、回答ファースト構造のほうが、依然として強い引用シグナルです。',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'robots.txtでブロックを解除すべきAIクローラーは？',
          content: [
            '**各AIプロバイダーは、検索用、学習用、ユーザー要求による取得用に別々のボットを運用しています。引用を得たいなら検索ボットを許可し、学習ボットについては別に判断してください。**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ ベストプラクティス',
              text: '`robots.txt`を下記のボット名と照らし合わせ、公開中のファイルでテストしてください。`llms.txt`ファイルは任意です。これは[llmstxt.org](https://llmstxt.org)で提案されている慣例であり、主要なAIプロバイダーでクロールや引用に使うと文書化しているところはありません。',
            },
          ],
          items: [
            '**OAI-SearchBot** — ChatGPTの検索結果用のOpenAIのクローラーです。ブロックすると、ChatGPTの検索回答にサイトが表示されなくなります',
            '**GPTBot** — 生成モデルの学習用のOpenAIのクローラーです。ブロックしても、ChatGPT検索から外れることはありません',
            '**ChatGPT-User** — ユーザーがChatGPTにそのページについて尋ねたときに、ページを取得します。OpenAIは、ユーザーが起点のこうしたリクエストにはrobots.txtのルールが適用されない場合があるとしています',
            '**Claude-SearchBot**と**Claude-User** — Anthropicの、検索インデックス用とユーザー要求による取得用のボットです。**ClaudeBot**は学習用のクローラーです',
            '**PerplexityBot** — Perplexityの結果にサイトを表示してリンクするためのもので、学習には使われません。**Perplexity-User**はユーザーのリクエストを処理し、一般にrobots.txtを無視します',
            '**Googlebot** — Google検索のインデックス登録を担うクローラーで、AI OverviewsとAIモードはこのインデックスを利用します。**Google-Extended**トークンはGeminiの学習とグラウンディングを制御し、検索への掲載や順位には影響しません',
          ],
          blockquote: '学習ボット（GPTBot、ClaudeBot、Google-Extended）のブロックは、検索ボットのブロックとは別の判断です。IPアドレスによるブロックは避けてください。Anthropicは、IPブロックによって同社のボットがrobots.txtそのものを読めなくなる場合があると述べています。',
        },
        contentStructure: {
          title: 'コンテンツ構造：AIエンジンが実際に引用するもの',
          content: [
            '**リスト、表、FAQブロックは、密度の高い文章よりAIシステムが抽出・引用しやすくなります。検索は一節単位で行われるため、独立した回答ファーストのセクションは、ページの他の部分がなくても引用できるからです。**',
            'AIエンジンはRAG（Retrieval-Augmented Generation）を使います。まずインデックスを検索し、一致する一節を取得してから回答を合成します。つまりコンテンツは、ページ単位だけでなく、段落やセクション単位で引用できる必要があります。構造のしっかりした1つのセクションは、AIがページ全体を読み込まなくても抽出して引用できます。',
            'AIに引用される可能性を最大化する5つのコンテンツ原則は次のとおりです。',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'RAG（Retrieval-Augmented Generation）はコンテンツのページ全体ではなく個々の一節を抽出して引用するため、文字数よりも構造のほうが重要です。',
            },
            {
              type: 'in-plain-terms',
              text: 'コンテンツを教科書のようなものだと考えてください。AIシステムは最初から最後まで読むのではなく、特定の質問への答えを探し、該当する段落を取り出して引用し、次へ進みます。明確で独立した1つの段落は、5,000語の文章より優れています。',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 注意',
              text: '「強力な」「シームレスな」「革新的な」「業界をリードする」といった曖昧な宣伝文句は、AIクローラーに無視されます。具体的な事実を使ってください。正確な数値、固有名詞、測定可能な主張です。裏付けを示せないものは、AIシステムも抽出しません。',
            },
          ],
          items: [
            '**回答を先に** — すべてのセクションの1文目に直接の答えを置きます。AIクローラーは各見出しの冒頭の1文をサンプリングします。これは、書き言葉に応用した[プロンプトエンジニアリング](/ja/prompt-engineering/what-is-prompt-engineering)の中核原則です',
            '**エンティティ密度** — 記事1本につき5～7件の固有名詞（製品名、企業名、技術用語、研究者名）を盛り込み、トピックの権威性を示します。これは、あなたのトピックが権威があり引用に値することをAIシステムに伝える方法です',
            '**意味的な完全性** — 各セクションは、他のセクションの文脈がなくても、その問いに答えられなければなりません。AIは一節を単独で抽出します',
            '**曖昧な主張より具体的な事実** — 正確な数値、日付、出典のある情報は引用されます。「業界をリードするソリューション」や「強力なツール」といった表現は無視されます',
            '**構造化された書式** — 表や箇条書きは機械で読み取れます。文章の段落は自然言語処理による解析が必要で、引用される頻度は下がります',
          ],
        },
        goodExample: {
          title: '悪い例と良い例：GEO対応の書き換え',
          content: [
            '**悪い例 — 情報量ゼロの文章（引用されません）：**',
            '> 当社のプラットフォームは、業界をリードするAIツールとシームレスに統合し、業界最高水準の成果を提供する、強力で包括的なソリューションです。',
            'これは競合のどの会社でもそのまま掲載できる文章です。エンティティはゼロ、具体的な事実もゼロ、検証できる主張もゼロで、AIエンジンは完全にスキップします。',
            '**良い例 — エンティティが豊富で事実が詰まった文章（引用に適しています）：**',
          ],
          blockquote: 'PromptQuorumは、1つのプロンプトを最大25のAIモデルに同時に送信します。GPT-5.6（OpenAI）、Claude Opus 5（Anthropic）、Gemini 3 Pro（Google DeepMind）のほか、Ollama経由のローカルモデルも含まれ、すべての回答を並べて比較できる形で返します。',
        },
        goodExampleExplanation: {
          content: [
            '固有名詞が4つ、具体的な数値が1つ（25）、検証できる機能が1つ（並べての比較）あります。AIエンジンはこれをすぐに抽出し、出典として示します。PromptQuorumには9つのプロンプトフレームワーク（CO-STAR、CRAFT、RISEN、SPECS、TRACE、ほか4つ）が組み込まれており、これらのGEO要件を満たすコンテンツ構造をアプリ内で直接整えられます。',
          ],
        },
        seoFoundation: {
          title: '従来のSEOはGEOでも重要か？',
          content: [
            '**Google AI OverviewsとAIモードは、通常の検索と同じインデックスを利用します。ページがインデックスされ、スニペットの表示対象である必要があるため、SEOの基本はGEOの可視性につながります。**',
            'GoogleのAI機能に関するドキュメントには、AI OverviewsやAIモードに表示されるための追加要件はなく、標準的なSEOのベストプラクティス以上の特別な最適化は不要と記されています。サードパーティの調査では、通常の検索結果ですでに見えているページのほうがよく引用されるとされていますが、これらの調査が測定しているのは相関であり、引用されるページが上位10件と常に一致するわけではありません。',
            'SEOとGEOを組み合わせた構成は次のとおりです。',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'E-E-A-T（経験、専門性、権威性、信頼性）のシグナルは、従来の検索順位とAIによる引用の可能性の両方を高めます。',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 プロのヒント',
              text: 'GEOのためにSEOを捨てないでください。両者は互いを強化します。Core Web Vitalsを改善し（SEO）、順位が上がり、AI Overviewsで引用される（GEO）。E-E-A-Tのシグナルは両方を強化します。1つの層だけでなく、全体を最適化してください。',
            },
          ],
          columns: ['レイヤー', '実施すること', '理由'],
          rows: [
            {
              'レイヤー': 'テクニカルSEO',
              '実施すること': 'ページ速度、モバイル対応、Core Web Vitals、canonical URL',
              '理由': 'GEO関連のボットも、Googlebotと同じクロール可能性のシグナルを尊重します',
            },
            {
              'レイヤー': 'コンテンツSEO',
              '実施すること': 'E-E-A-Tのシグナル、著者の経歴、目に見える公開日。[より良い文章の書き方はこちら](/ja/prompt-engineering/write-better-code-with-ai)',
              '理由': 'AIエンジンは、権威性を明示したコンテンツを好みます',
            },
            {
              'レイヤー': 'エンティティSEO',
              '実施すること': 'JSON-LDスキーマ、ナレッジグラフの最適化',
              '理由': '機械はエンティティグラフを構築します。曖昧なページはスキップされます',
            },
            {
              'レイヤー': 'GEO固有',
              '実施すること': '回答ファースト構造、FAQセクション、llms.txt',
              '理由': 'RAGパイプラインによる抽出に向けて最適化します',
            },
            {
              'レイヤー': '引用の獲得',
              '実施すること': '権威あるソース（arXiv、Reuters、公式ドキュメント）からのリンク',
              '理由': '信頼できるリンクは権威性を高める可能性あり。AI引用への効果は未実証',
            },
          ],
        },
        platformBreakdown: {
          title: 'リファラルトラフィックが最も多いAIプラットフォームは？',
          content: [
            '**AIリファラルトラフィックのうち、ChatGPTがウェブサイトにもたらす割合は74.78%で、Gemini 11.56%、Perplexity 7.23%、Copilot 3.51%、Claude 2.62%が続きます（SE Ranking、101,574サイト、2025年1月～2026年4月）。そのためChatGPTは、ほとんどのサイトにとって最も効果の大きいGEOの対象です。**',
            'これらはAIプラットフォームがウェブサイトに送る訪問の割合であり、ユーザー数やクエリ数の割合ではありません。他のトラッカーは異なる内訳を報告しています（StatCounterは2026年3月のChatGPTを78.16%、B2B重視のトラッカーは62.6%としています）。そのため、順位は安定していると捉え、正確な割合は目安として扱ってください。',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 ご存じですか？',
              text: 'Perplexityはすべての回答に出典を表示するため、自社コンテンツが引用されているかを確認しやすいプラットフォームです。AIプラットフォーム全体でも、ウェブサイト全体のトラフィックに占める割合は依然として0.32%（SE Ranking、2026年）にすぎないため、従来の検索も計画に残してください。',
            },
          ],
          columns: ['プラットフォーム', 'AIリファラルの割合', '検索クローラー', '引用の形式'],
          rows: [
            {
              'プラットフォーム': 'ChatGPT（OpenAI）',
              'AIリファラルの割合': '74.78%',
              '検索クローラー': 'OAI-SearchBot',
              '引用の形式': '引用した抜粋を添えた、インラインの出典リンク',
            },
            {
              'プラットフォーム': 'Microsoft Copilot',
              'AIリファラルの割合': '3.51%',
              '検索クローラー': 'Bingbot',
              '引用の形式': 'Bingにインデックスされたページ、脚注形式の引用',
            },
            {
              'プラットフォーム': 'Google Gemini / AI Overviews',
              'AIリファラルの割合': '11.56%',
              '検索クローラー': 'Googlebot',
              '引用の形式': 'Google検索でインデックスされ、スニペットの表示対象となっているページ',
            },
            {
              'プラットフォーム': 'Perplexity AI',
              'AIリファラルの割合': '7.23%',
              '検索クローラー': 'PerplexityBot',
              '引用の形式': 'すべての回答に番号付きの出典リスト',
            },
            {
              'プラットフォーム': 'Claude（Anthropic）',
              'AIリファラルの割合': '2.62%',
              '検索クローラー': 'Claude-SearchBot',
              '引用の形式': 'ウェブ検索が有効な場合に出典を引用',
            },
          ],
          blockquote: '割合のデータはSE Ranking（2026年6月）によるものです。プラットフォームごとの内訳は月ごとに変動するため、予算の判断に使う前に数値を再確認してください。',
        },
        globalContext: {
          title: '地域や市場によってGEOはどう異なるか？',
          content: [
            '日本の企業では、METIのデータガバナンスに関するガイドラインのもと、オンプレミスのAI検索ツールを使うケースが増えています。そのため、日本の企業向けのGEOでは、Google AI Overviewsだけでなく、国内のインデックスに表示され、METIの2024年のAIガバナンスの枠組みに適合するコンテンツを優先する必要があります。',
            '中国では、生成検索は**百度ERNIE**と**Alibaba Qwen**を基盤とする検索製品が主流です。中国市場向けのGEO戦略では、GoogleやOpenAIのナレッジベースとは異なる、中国語のエンティティグラフに向けた最適化が必要です。中国の生成AIに関する規制（2023年の暫定措置と、AI生成コンテンツの表示ラベルに関する2025年の措置を含む）は、事業者にAI生成コンテンツへのラベル付けを求めており、中国のプラットフォームが出典を提示する方法にも影響します。',
            '欧州の企業は、GEOへの投資と、AI生成コンテンツの透明性を求め、欺瞞的なAIシステムを禁じるEU AI Actへの対応のバランスを取る必要があります。Mistral AI（フランス）は欧州での検索への展開を拡大しており、欧州のAIプラットフォーム向けに最適化するコンテンツは、EUの厳格なデータソース帰属要件に適合させる必要があります。',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 重要',
              text: '欧州、中国、日本の市場には、AIコンテンツの出典表示について、それぞれ異なる規制要件があります。国際的な読者に向けて発信する場合は、GEO戦略を現地向けに調整してください。単一のグローバルなアプローチでは、すべての地域のコンプライアンス基準を満たせません。',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'AIによる引用を追跡するには？',
          content: [
            '**AIによる引用は、3つの情報源で追跡します。GoogleのAI機能にはGoogle Search Console、ChatGPT・Perplexity・Gemini・Claudeにはアナリティクスのリファラルトラフィック、そして定期的に再実行する固定のプロンプトセットです。**',
            '2026年6月以降、Search Consoleには、AI Overviews、AIモード、Discoverでのインプレッションをページ別・国別・デバイス別に示す「Search generative AI」パフォーマンスレポートが加わりました。同じデータは全体のパフォーマンスレポートにも引き続き含まれます。示されるのはインプレッションであり、回答の本文ではないため、どこに表示されているかはわかっても、その理由まではわかりません。',
          ],
          items: [
            '**Search Console** — generative AIレポートを開き、構造を変更した後にどのページのインプレッションが増えたかを記録します',
            '**アナリティクスのリファラル** — chatgpt.com、perplexity.ai、gemini.google.com、claude.aiからの訪問を絞り込みます。数は少ないと見込んでください',
            '**プロンプトセット** — ページが答えるべき質問を10～20件用意し、各アシスタントで毎週実行して、どのURLが挙がったかを記録します',
            '**サーバーログ** — OAI-SearchBot、Claude-SearchBot、PerplexityBotからのリクエスト数を数え、ページが取得されていることを確認します',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 注意',
              text: 'AIの回答は実行のたびに変わります。引用が1回あった、あるいは1回なかったというのは、参考情報にすぎません。変更が効いたと結論づける前に、数週間にわたってプロンプトセットを比較してください。',
            },
          ],
        },
        relatedReading: {
          title: '関連記事',
          items: [
            '[プロンプトエンジニアリングとは？](/ja/prompt-engineering/what-is-prompt-engineering) — 構造化された指示が、AIシステムの抽出と引用の内容をどう左右するか',
            '[AIの限界：LLMにできないこと](/ja/prompt-engineering/ai-limitations-what-llms-cant-do) — AIが生成したコンテンツの主張を検証する手法',
            '[AIでより良いコードを書く](/ja/prompt-engineering/write-better-code-with-ai) — GEOに対応した構造を、AI支援のコード生成に適用する',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'GEO（Generative Engine Optimization）向けにコンテンツを最適化する方法',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ ベストプラクティス',
              text: 'まずChatGPT（AIリファラルトラフィックの74.78%）を優先し、次にGeminiとPerplexityに取り組みます。この8対2の考え方なら、規模の小さいプラットフォームに労力を分散させすぎることなく、最も大きな成果が得られます。',
            },
          ],
          numberedItems: [
            '**検索されやすさと引用されやすさの観点で、AIの視点から現在のコンテンツを点検します。** トラフィックの多いページを10件選び、そのトピックに関するクエリに答える際に、ChatGPT、Perplexity、Google AI Overviewsが自社コンテンツを引用または推奨するかを尋ねます。表示されていない部分を洗い出します。',
            '**検証できる事実とスキーママークアップを用いて、コンテンツを回答ファーストで構成します。** 各セクションの冒頭には、質問ではなく直接の答えを置きます。すべての主張に出典か明確な根拠を添えます。JSON-LDスキーマ（Article、FAQPage、HowTo、Breadcrumb）を追加し、AIクローラーがコンテンツの構造を理解できるようにします。',
            '**キーワードだけでなく、キーワードの意図も含めます。** 「best AI tools」で上位表示されているなら、GEOでは「優れたAIツールの条件とは何か？」（精度、速度、コスト、使いやすさ）に答える必要があります。AIシステムはキーワードの一致ではなく意図の一致を用いるため、ユーザーが求めているとAIが推測する内容に、自分の答えが合致しているか確認してください。',
            '**AIシステムが派生させる質問に答えるFAQセクションを作ります。** AIシステムは広いクエリを副次的な質問に分解します。「AIのハルシネーション」をテーマにするなら、「AIのハルシネーションはどのくらい起きるか？」「ハルシネーションは防げるか？」「ハルシネーションが最も多いモデルは？」といったFAQを加えます。',
            '**robots.txtを確認し、必要に応じてllms.txtファイルを追加します。** OAI-SearchBot、Claude-SearchBot、PerplexityBot、Googlebotを許可します。llms.txtは、主要なAIプロバイダーで利用を文書化しているところがない提案段階の慣例なので、順位を左右する手段ではなく、任意のドキュメントとして扱ってください。',
          ],
        },
        commonMistakes: {
          title: 'GEOでよくある間違いと対処法',
          mistakes: [
            {
              mistake: 'GEOを、引用の最適化ではなくキーワードの最適化として扱ってしまう。',
              problem: 'ページを検索クエリに向けて最適化するだけで、AIによる抽出と引用に向けた最適化になっていません。AIシステムが用いるのは、キーワード密度ではなく、意図の一致と意味的な完全性です。',
              fix: '発想を切り替え、各セクションの最初の2～3文で質問全体に答える構成にします。キーワードの繰り返しではなく、正確なエンティティと具体的な数値を使います。ChatGPTとPerplexityで直接試し、何が引用されるかを確かめてください。',
            },
            {
              mistake: '「GEOに全力を注ぐ」として、従来のSEOを軽視してしまう。',
              problem: 'インデックスされていないページや、スニペットの表示対象でないページは、Google AI OverviewsやAIモードに表示されません。GEOには、土台としてSEOが必要です。',
              fix: '二層で取り組みます。強いE-E-A-Tのシグナル、Core Web Vitals、被リンクの質を維持し（SEO）、その上に回答ファースト構造、スキーママークアップ、FAQセクションを加えます（GEO）。両者は互いを強化します。',
            },
            {
              mistake: 'AIによる引用を増やすのに、スキーママークアップだけに頼ってしまう。',
              problem: 'スキーマはAIシステムがコンテンツを解析しやすくしますが、権威性とコンテンツ構造のほうが強い引用シグナルです。スキーマが完璧でも、文章が曖昧なページは引用されません。',
              fix: 'レイヤーを組み合わせます。JSON-LDスキーマ、回答ファースト構造、エンティティ密度を加えます。2025年のSearchAtlasの調査では、強いコンテンツの権威性がなければ、スキーマだけの効果は限定的であることが示されています。',
            },
            {
              mistake: '市場シェアで優先順位をつけず、すべてのAIプラットフォームを同じ重みで最適化してしまう。',
              problem: 'AIリファラルトラフィックの74.78%はChatGPTによるものです。5つのプラットフォームに最適化の労力を分散させると、投資対効果が薄まります。',
              fix: 'まずChatGPTを優先します（OAI-SearchBotのクロール、回答ファースト構造、FAQセクション）。次にGeminiと、すべての回答に出典を表示するPerplexityに取り組みます。その後にClaudeへ広げます。',
            },
            {
              mistake: 'リスト形式ではなく、密度の高い段落でコンテンツを書いてしまう。',
              problem: '密度の高い文章は、リストや表より引用しにくくなります。AIシステムはRAG（Retrieval-Augmented Generation）を使い、構造化されたセクションのほうが確実に抽出されます。',
              fix: '文章での説明は、可能な限り箇条書きに変換します。比較には表を使います。段落は最大でも2～3文にとどめます。AIクローラーは各見出しの最初の1文をサンプリングして、そのセクションを抽出するかどうかを判断します。',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'SEOとGEOの違いは何ですか？',
              a: 'SEO（検索エンジン最適化）は、GoogleやBingなど従来の検索結果でページを上位表示させる取り組みで、ユーザーは青いリンクの一覧から選びます。GEO（Generative Engine Optimization）は、ChatGPT、Perplexity、Gemini、ClaudeなどのAIが生成する回答の中でコンテンツが引用されることを目指す取り組みで、ユーザーは選択肢の一覧ではなく、合成された1つの回答を受け取ります。両方が必要です。Googleは、AI OverviewsとAIモードに表示されるにはページがインデックスされ、スニペットの表示対象であることだけが必要だと述べており、従来のSEOの基本が入口であることに変わりはありません。',
            },
            {
              q: 'AI検索経由のトラフィックは、オーガニック検索よりコンバージョンしやすいですか？',
              a: '平均では多少高く、B2Bの一部の事例ではそれよりはるかに高くなります。WebFXが23億セッションを分析したところ、生成AI経由の訪問者が測定可能なアクションを完了したセッションは54.15%で、オーガニック検索の45.23%を上回りました。Ahrefsは自社サイトでAI検索経由のコンバージョン率が23倍だったと報告しています。一方、eコマースでは結果が分かれます。Practical Ecommerceが紹介した973のeコマースサイトの分析では、AI検索のコンバージョンはオーガニックより低くなりました。優位性が最も明確なのは、B2Bや検討期間の長い購買です。',
            },
            {
              q: 'スキーママークアップはAIによる引用率をどの程度高めますか？',
              a: '正しいJSON-LDスキーママークアップを実装したページは、あるベンダー調査によるとリッチリザルトのインプレッションが最大40%増えますが、AIによる引用が直接増えるという根拠は弱いのが実情です。2025年のSearchAtlasの調査では、スキーマの網羅率だけではOpenAI、Gemini、PerplexityにおけるLLMの引用頻度は一貫して上がらないことが示されました。またGoogleは、AI OverviewsやAIモードに特別なスキーマは不要だと述べています。スキーマはページを正確に記述するために使い、より強いシグナルはコンテンツの権威性と回答ファースト構造です。',
            },
            {
              q: 'AI検索はどのくらいの速さで成長していますか？',
              a: '生成AI経由のトラフィックは2024年1月から2025年12月にかけて796%増加し、セッションのコンバージョンは同期間に6,432%増えました。米国の小売サイトへのAI生成トラフィックは、2025年7月時点で前年同期比4,700%増加しています。ただしこの成長にもかかわらず、WebFXによると生成AIはウェブセッション全体のわずか0.18%で、ダイレクト（35.51%）とオーガニック検索（27.12%）が依然として大半を占めます。SE Rankingは2025年1月から2026年4月まで101,574サイトを追跡し、AIプラットフォームがウェブサイト全体のトラフィックの0.32%を占め、そのAIリファラルトラフィックの74.78%をChatGPTが占めると測定しました。',
            },
            {
              q: 'AI検索の時代でもSEOは重要ですか？',
              a: 'はい。従来のSEOはGEOの代替ではなく土台です。Googleは、AI OverviewsとAIモードに表示されるにはページがインデックスされ、スニペットの表示対象であることが必要で、それ以上の技術要件はないと述べています。そのため、クロール可能性、インデックス、コンテンツの質が最優先です。従来の順位を押し上げるE-E-A-T（経験、専門性、権威性、信頼性）のシグナルは、AIに引用される可能性も高めます。2つの分野は基本要件を共有しており、GEOは回答ファースト構造、エンティティ密度、スキーママークアップを追加のレイヤーとして加える点が異なります。',
            },
            {
              q: 'GEOのためにコンテンツを最適化する最初のステップは何ですか？',
              a: 'まず、AIの視点で現在のコンテンツを点検します。トラフィックの多いページを10件選び、そのトピックに関する質問をChatGPT、Perplexity、Google AI Overviewsに投げて、自社コンテンツが引用または推奨されるかを確認します。これでAIの回答に表示されていない部分が見えてきます。そのうえで、JSON-LDスキーママークアップ（ArticleとFAQPageが最も効果的）の追加、回答ファースト形式への再構成、AIが広いクエリから分解する副次的な質問を想定したFAQセクションの追加を優先します。',
            },
            {
              q: 'llms.txtとは何ですか？必要ですか？',
              a: 'llms.txtは、言語モデルが読めるようにサイトの要約をmarkdownでサイトのルートに置くという提案段階の慣例であり、正式な標準ではありません。主要なAIプロバイダーで、クロールや引用にllms.txtを使うと文書化しているところはなく、Googleも、AI OverviewsやAIモードに表示されるために新しい機械可読ファイルやAI用テキストファイルは不要だと述べています。任意で、追加も簡単であり、URLをアシスタントに貼り付ける場面では役立ちますが、それだけで引用が変わるとは期待しないでください。',
            },
            {
              q: 'ChatGPTに自分のコンテンツを引用してもらうにはどうすればよいですか？',
              a: 'robots.txtでOpenAIの検索クローラー（OAI-SearchBot）を許可し、ページがインデックス可能であることを確認したうえで、各セクションの1文目で1つの質問に答え、出典のある具体的な事実を示すように書きます。ChatGPTが引用するのはページ全体ではなく一節なので、独立した段落、リスト、表、FAQブロックは長い文章より引用されやすくなります。引用を保証する手法はありません。ChatGPTはクエリごとにソースを選び、同じプロンプトでも日によって異なるソースが返ることがあります。',
            },
            {
              q: 'AIエンジンが自分のサイトを引用しているかどうかを追跡するにはどうすればよいですか？',
              a: '3つの情報源を組み合わせます。1つ目はGoogle Search Consoleです。AI OverviewsとAIモードのデータは検索パフォーマンスレポートの合計に含まれ、2026年6月以降は、ページ別・国別・デバイス別のインプレッションを示す「Search generative AI」レポートが別途提供されています。2つ目はアナリティクスで、chatgpt.com、perplexity.ai、gemini.google.com、claude.aiからのリファラルトラフィックを絞り込みます。3つ目は、定期的に実行して手作業またはサードパーティの監視ツールで記録する、10～20件の固定プロンプトのセットです。1回だけの実行は参考程度に扱ってください。引用は実行ごとに変わります。',
            },
            {
              q: 'GEOはAEO（Answer Engine Optimization）と違いますか？',
              a: 'GEOとAEOは近い関係にありますが、同じではありません。AEOは、従来の検索エンジンの直接回答ボックスやfeatured snippetに向けた最適化に重点を置きます。GEOは、RAGパイプラインを使って複数のソースから回答を合成する生成AIエンジン（ChatGPT、Gemini、Perplexity、Claude）を対象とします。GEOには回答ファースト構造、スキーママークアップ、エンティティ密度が必要で、AEOの手法とは大きく重なりますが、GEOは文脈から切り離しても引用できる、独立して抽出可能な段落という要件が加わります。',
            },
          ],
        },
        sources: {
          title: '出典と参考資料',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — GEOを一つの分野として定義し、構造化されたコンテンツによる引用の上昇幅を測定した基礎的な学術論文',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — AIとオーガニックのコンバージョン率について、23億セッションを分析した調査',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — JSON-LDスキーマとAIによる引用頻度に関するベンダー調査',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — 101,574サイトにおけるAIプラットフォーム別のリファラルの割合（2025年1月～2026年4月）',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — AI OverviewsとAIモードへの表示条件、構造化データ、機械可読ファイル',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — AI Overviews、AIモード、Discoverでのインプレッション',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot、GPTBot、ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot、Claude-User、Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBotとPerplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — OpenAI・Gemini・Perplexityにおけるスキーマ網羅率と引用の分析',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — 米国小売サイトへのAIトラフィックが前年比4,700%増（2025年7月）',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — 973のeコマースサイトのコンバージョン分析の要約',
          ],
        },
      },
    },
    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-zh.webp',
      title: 'SEO遇上AI：GEO如何取代旧的优化打法',
      intro: '**生成式引擎优化（GEO）是通过结构化内容，让AI搜索引擎（ChatGPT、Perplexity、Gemini、Claude）在合成回答时引用你的做法。它把传统SEO“在Google蓝色链接中排名”的目标，换成“成为AI每次回答所引用的2-7个来源之一”。**\n\nGEO不会取代传统SEO，而是在其之上增加第二层优化。目前AI平台带给网站的流量仍不足1%（SE Ranking 2026年数据为0.32%），但两年内增长了796%（WebFX）。',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02，对照Google Search Central、OpenAI、Anthropic和Perplexity的爬虫文档、SE Ranking（2026年6月）以及WebFX（2026年3月）核对',
      readTime: '阅读约8分钟',

      seoTitle: 'SEO遇上AI：GEO如何让ChatGPT引用你的内容（2026）',

      metaDescription: '想被ChatGPT、Perplexity和Gemini引用？本文讲解回答优先结构、robots.txt中该放行的AI爬虫、结构化数据，以及如何追踪AI引用。',

      educationalLevel: 'Beginner',
      primaryTerm: 'Generative Engine Optimization',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: 'GEO与SEO：两场不同的游戏', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'AI流量的转化为何不同', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'GEO的技术基础是什么？', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: '应在robots.txt中放行哪些AI爬虫？', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: '内容结构：AI引擎实际会引用什么', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: '差示例与好示例：符合GEO的改写', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: '传统SEO对GEO仍然重要吗？', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: '哪些AI平台带来最多引荐流量？', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'GEO在不同地区和市场有何差异？', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: '如何为GEO优化内容', anchor: '#how-to-optimize-content-for-geo' },
        { label: '如何追踪AI引用？', anchor: '#how-to-track-ai-citations' },
        { label: 'GEO常见错误及修复方法', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#frequently-asked-questions' },
        { label: '来源与延伸阅读', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/seo-meets-ai',
        inLanguage: 'zh',
        headline: 'SEO遇上AI：GEO如何取代旧的优化打法',
        description: '生成式引擎优化（GEO）决定AI搜索引擎是否引用你的内容。了解GEO与SEO的区别、AI流量为何转化更好，以及让内容被ChatGPT、Perplexity和Gemini引用的技术基础。',
        image: 'https://www.promptquorum.com/og-image-seo-meets-ai-zh.png',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        keywords: ['GEO', 'SEO', '生成式引擎优化', 'AI搜索', 'ChatGPT引用', 'Perplexity', 'Google AI Overviews', 'JSON-LD结构化数据', 'AI引用', 'AI爬虫'],
        teaches: [
          '什么是生成式引擎优化，它与传统SEO有何不同',
          'AI流量的转化为何与自然搜索不同',
          '如何放行正确的AI爬虫并结构化内容，让AI引擎更容易引用',
          '如何追踪自己的内容是否被AI引用',
        ],
        about: [
          { '@type': 'Thing', name: '生成式引擎优化（GEO）' },
          { '@type': 'Thing', name: 'AI搜索' },
          { '@type': 'Thing', name: '内容结构' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '#key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'SEO和GEO有什么区别？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO（搜索引擎优化）的目标是让页面在Google、Bing等传统搜索结果中排名靠前，用户从一串蓝色链接中自行选择。GEO（生成式引擎优化）的目标是让你的内容被ChatGPT、Perplexity、Gemini和Claude生成的回答引用，用户得到的是一个合成回答，而不是一份选项列表。两者缺一不可：Google表示，页面只要被收录并有资格显示摘要，就可能出现在AI Overviews和AI Mode中，因此传统SEO基础仍然是入场券。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI搜索流量的转化率比自然搜索更高吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '平均略高，部分B2B场景高得多。WebFX分析了23亿次会话，发现生成式AI访客在54.15%的会话中完成了可衡量的行动，自然搜索为45.23%。Ahrefs报告称，其自身网站来自AI搜索的转化率高出23倍。电商方面证据不一：Practical Ecommerce报道的对973个电商网站的分析发现，AI搜索的转化率低于自然搜索。优势在B2B和高决策成本的购买中最明显。',
            },
          },
          {
            '@type': 'Question',
            name: '结构化数据能在多大程度上提高AI引用率？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '一项厂商研究称，使用正确JSON-LD结构化数据的页面，富媒体搜索结果的展示量最多可提高40%，但结构化数据能直接提升AI引用的证据并不充分。2025年SearchAtlas的一项研究发现，仅靠结构化数据覆盖率，并不能让OpenAI、Gemini和Perplexity的LLM引用频率稳定上升；Google也表示，AI Overviews和AI Mode不需要任何特殊的结构化数据。请用结构化数据准确描述页面；内容权威性和回答优先结构仍是更强的信号。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI搜索增长有多快？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '从2024年1月到2025年12月，生成式AI流量增长了796%，同期会话转化数增长了6,432%。截至2025年7月，AI生成的美国零售网站流量同比增长4,700%。尽管增长迅猛，WebFX发现生成式AI仅占全部网页会话的0.18%，直接访问（35.51%）和自然搜索（27.12%）仍占主导。SE Ranking追踪了101,574个网站（2025年1月至2026年4月），测得AI平台占网站总流量的0.32%，其中ChatGPT贡献了74.78%的AI引荐流量。',
            },
          },
          {
            '@type': 'Question',
            name: '在AI搜索时代，SEO还重要吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '重要——传统SEO是GEO的基础，而不是替代选项。Google表示，页面必须被收录并有资格显示摘要才能出现在AI Overviews和AI Mode中，且没有额外的技术要求，所以可爬取性、收录和内容质量是第一位的。提升传统排名的E-E-A-T（经验、专业性、权威性、可信度）信号，同样会提高被AI引用的概率。两者的基础要求相同，区别在于GEO额外增加了回答优先结构、实体密度和结构化数据这几层。',
            },
          },
          {
            '@type': 'Question',
            name: '为GEO优化内容的第一步是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '先从AI的视角审查现有内容：选出流量最高的10个页面，用与你主题相关的问题去询问ChatGPT、Perplexity和Google AI Overviews，看你的内容是否被引用或推荐。这样可以找出你没有出现在AI回答中的缺口。然后优先添加JSON-LD结构化数据（Article和FAQPage影响最大）、把内容改成回答优先的格式，并补充FAQ板块，预判AI系统从宽泛问题中拆解出的子问题。',
            },
          },
          {
            '@type': 'Question',
            name: '什么是llms.txt，我需要吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt是一种拟议中的约定（并非正式标准），做法是在网站根目录放一份Markdown格式的网站摘要，供语言模型阅读。目前没有主要AI服务商在文档中说明会用它来抓取或引用内容，Google也表示，要出现在AI Overviews或AI Mode中，不需要新的机器可读文件或AI文本文件。它是可选项，添加成本低，当有人把它的网址粘贴给AI助手时也有用，但不要指望它单独改变引用情况。',
            },
          },
          {
            '@type': 'Question',
            name: '如何让我的内容被ChatGPT引用？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '在robots.txt中放行OpenAI的搜索爬虫（OAI-SearchBot），确保页面可被收录，并让每个小节的第一句就用一个有来源的具体事实回答一个问题。ChatGPT引用的是段落而不是整个页面，所以独立成段的段落、列表、表格和FAQ板块比长篇行文更容易被引用。没有任何技巧能保证被引用：ChatGPT按每次查询选择来源，同一个提示在不同日子可能返回不同的来源。',
            },
          },
          {
            '@type': 'Question',
            name: '如何追踪AI引擎是否引用了我的网站？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '结合三个来源。第一，Google Search Console：AI Overviews和AI Mode的数据包含在“效果”报告的总数中，自2026年6月起，另有单独的“搜索生成式AI”报告，按页面、国家/地区和设备显示展示次数。第二，你的分析工具：筛选来自chatgpt.com、perplexity.ai、gemini.google.com和claude.ai的引荐流量。第三，一组固定的10-20个提示，按计划定期运行，并手动或借助第三方监测工具记录结果。单次运行只能算个例；不同次运行的引用会有差异。',
            },
          },
          {
            '@type': 'Question',
            name: 'GEO与AEO（答案引擎优化）有区别吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO与AEO密切相关，但并不相同。AEO侧重于优化传统搜索引擎中的直接答案框和精选摘要。GEO则专门针对借助RAG流程、从多个来源合成回答的生成式AI引擎（ChatGPT、Gemini、Perplexity、Claude）。GEO需要回答优先结构、结构化数据和实体密度；AEO的做法与之大量重叠，但GEO还要求段落独立、可抽取，脱离上下文也能被引用。',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'zh',
        'name': 'SEO遇上AI：核心主题',
        'description': '理解生成式引擎优化的核心概念',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO与SEO：两场不同的游戏', 'description': '理解传统SEO与生成式引擎优化之间的区别' },
          { '@type': 'ListItem', 'position': 2, 'name': 'AI流量的转化为何不同', 'description': '来自AI的访客与自然搜索访客在转化率上有何差异' },
          { '@type': 'ListItem', 'position': 3, 'name': 'GEO的技术基础', 'description': 'JSON-LD结构化数据及其对AI引用率的影响' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AI爬虫体系', 'description': '了解GPTBot、ClaudeBot、PerplexityBot和llms.txt约定' },
          { '@type': 'ListItem', 'position': 5, 'name': '内容结构与AI引用', 'description': '回答优先结构、实体密度和格式如何提高被AI引用的机会' },
        ],
      },
      widgetEmbedUrl: '/widgets/seo-meets-ai-widget.html',
      widgetDescription: '交互式GEO审计指南：回答关于您的内容结构、技术SEO和AI平台准备情况的10个快速问题。获得0–10准备评分、地区合规指导（数据安全法、中国法规）以及优先级行动计划，其中包括为ChatGPT、Perplexity、Google AI Overviews和Claude优化内容的工作量估计。',
      sections: {
        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            'GEO（生成式引擎优化）让内容被AI生成的回答引用；SEO让页面在蓝色链接结果中排名——2026年两者都需要',
            'AI流量的会话转化率为54.15%，自然搜索为45.23%（WebFX）——但在该数据集中仅占全部会话的0.18%，在SE Ranking的数据中为0.32%',
            '结构化数据有助于机器解析页面，但Google表示AI Overviews和AI Mode不需要特殊的结构化数据，2026年的一项研究也发现，仅靠结构化数据并不能稳定提升引用',
            'Google只要求页面被收录并有资格显示摘要，即可出现在AI Overviews和AI Mode中——传统SEO基础仍是入场券',
            'ChatGPT贡献了74.78%的AI引荐流量（SE Ranking，2026年），领先于Gemini（11.56%）和Perplexity（7.23%）——优先为ChatGPT优化',
            '列表、表格和FAQ板块比密集的长段落更容易被AI系统提取和引用——让每个小节都能独立成立',
            '截至2025年7月，AI生成的美国零售网站流量同比增长4,700%——这个渠道体量不大，但增长速度前所未有',
            '放行搜索爬虫（OAI-SearchBot、Claude-SearchBot、PerplexityBot、Googlebot）；GPTBot和ClaudeBot控制的是训练用途，而非搜索引用。llms.txt是可选项——没有主要服务商在文档中说明会使用它',
          ],
        },
        definition: {
          title: 'GEO与SEO：两场不同的游戏',
          content: [
            '**传统SEO争的是10条蓝色链接中的一个位置；GEO争的是AI模型在一次合成回答中通常点名的2-7个来源之一。**两者的排名信号、内容形式和成功指标完全不同。了解[AI系统的工作方式及其局限](/zh/prompt-engineering/ai-limitations-what-llms-cant-do)，是做好GEO优化的前提。',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 专业提示',
              text: 'Google表示，页面只需被收录并有资格显示摘要，就可能出现在AI Overviews和AI Mode中。因此，可爬取性、收录和内容质量是在Google上获得GEO可见度的入场券，而非可选项。',
            },
          ],
          columns: ['维度', '传统SEO', '生成式引擎优化（GEO）'],
          rows: [
            { '维度': '首要目标', '传统SEO': '在Google/Bing中排名第1-10位', '生成式引擎优化（GEO）': '被AI生成的回答引用' },
            { '维度': '目标平台', '传统SEO': 'Google、Bing、Yahoo', '生成式引擎优化（GEO）': 'ChatGPT、Gemini、Perplexity、Claude、Google AI Overviews' },
            { '维度': '核心成功指标', '传统SEO': '排名、点击、自然流量', '生成式引擎优化（GEO）': 'AI引用、品牌在AI回答中被提及' },
            { '维度': '内容做法', '传统SEO': '关键词、反向链接、元数据', '生成式引擎优化（GEO）': '实体丰富、结构化、回答优先的事实' },
            { '维度': '见效时间', '传统SEO': '4-6个月', '生成式引擎优化（GEO）': '6-12个月' },
            { '维度': '会话转化率（WebFX）', '传统SEO': '45.23%（自然搜索）', '生成式引擎优化（GEO）': '54.15%（生成式AI）' },
          ],
          blockquote: 'SEO和GEO依赖同样的基础：清晰、权威、结构化的内容和用户意图。区别在于，AI引擎通过实体识别和语义完整性来解读这些信号，而不是靠反向链接和点击指标。一句话概括：如果传统SEO是争夺第一页的赛跑，那么GEO就是成为AI在已经知道答案时所引用的那个来源。',
        },
        conversionAnalysis: {
          title: 'AI流量的转化为何不同',
          content: [
            '**来自AI搜索引擎的访客，转化率明显高于自然搜索访客——因为他们到达时已经“预先了解”：AI已替他们综合并比较了各种选项。**',
            '**关于指标的说明：**下列研究衡量的内容各不相同——会话级转化率（WebFX）、目标完成提升幅度（Ahrefs）和B2B专项转化（SEMrush）。这些数字不能直接比较，每个都标明了来源。',
            'WebFX对23亿次网站会话（2024年1月至2025年12月）的分析发现：',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 警告',
              text: '转化提升幅度因行业而异。WebFX的跨行业数据显示会话转化率为54.15%对45.23%，而一项电商分析发现AI流量的转化率低于自然搜索。请用你自己的流量测试，确认这一优势是否适用于你的行业。',
            },
          ],
          items: [
            '生成式AI流量在两年内增长了**796%**',
            'AI引荐访客的**会话转化率为54.15%**，自然搜索为45.23%',
            'AI流量的转化数同比增长**6,432%**——快于会话增长，说明转化的访客占比更高',
          ],
          blockquote: '在部分B2B场景中，溢价更大。Ahrefs报告称，其自身网站来自AI搜索工具的转化率是自然搜索的23倍。SEMrush在对500多个B2B主题的研究中发现，AI搜索流量的转化率是自然搜索的4.4倍。但Practical Ecommerce报道的对973个电商网站的分析发现，AI引荐访客的转化率低于自然搜索——这一优势取决于任务和行业。WebFX把会话转化定义为同一会话内出现的可衡量行动（提交表单、下载、请求报价），因此54.15%和45.23%并不是购买率。AI引用也不是确定性的：同一个问题，不同模型会返回不同的来源，同一模型在不同日子也会如此。',
        },
        technicalFoundations: {
          title: 'GEO的技术基础是什么？',
          content: [
            '**正确的JSON-LD结构化数据能帮助搜索引擎和AI系统解析页面由谁撰写、回答了什么、何时更新——但它不是引用开关：Google表示，要出现在AI Overviews或AI Mode中，不需要任何特殊的结构化数据。**',
            'JSON-LD（JavaScript Object Notation for Linked Data）是Google推荐的结构化数据格式，也是最便于AI解析的格式。它放在页面`<head>`中的`<script>`块里，把语义标签与可见HTML分开，比内联的Microdata或RDFa更易维护。结合[结构清晰的写作](/zh/prompt-engineering/write-better-code-with-ai)，结构化数据就成为你的GEO基础。',
            '最能准确描述内容页面的结构化数据类型：',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 要点',
              text: '2025年SearchAtlas的一项研究发现，仅靠结构化数据并不能保证更高的AI引用率，Google也表示结构化数据必须与页面可见文字一致。内容权威性和回答优先结构才是更强的信号。',
            },
          ],
          items: [
            '**Article / TechArticle**——确立作者、发布日期和主题类别',
            '**FAQPage**——问答对可被AI回答引擎直接提取',
            '**HowTo**——编号步骤是AI处理流程类查询时的首选',
            '**Organization**——实体识别：你是谁、做什么、官方网址是什么',
            '**BreadcrumbList**——标示内容层级和主题深度',
          ],
          blockquote: '有一点需要特别注意：2025年SearchAtlas的一项研究，分析了OpenAI、Gemini和Perplexity上结构化数据采用率与AI引用频率的关系，发现仅靠更高的结构化数据覆盖率，并不能稳定带来更高的LLM引用率。结构化数据让内容更易解析，但内容权威性、实体密度和回答优先结构仍是更强的引用信号。',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: '应在robots.txt中放行哪些AI爬虫？',
          content: [
            '**每家AI服务商都为搜索、训练和用户请求抓取运行不同的机器人——想被引用就放行搜索机器人，训练机器人则单独决定。**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ 最佳实践',
              text: '对照下面的机器人名称检查你的`robots.txt`，并用线上的实际文件测试。`llms.txt`文件是可选的：它是[llmstxt.org](https://llmstxt.org)上提出的一种约定，没有主要AI服务商在文档中说明会用它来抓取或引用内容。',
            },
          ],
          items: [
            '**OAI-SearchBot**——OpenAI用于ChatGPT搜索结果的爬虫；屏蔽它会让你的网站从ChatGPT搜索回答中消失',
            '**GPTBot**——OpenAI用于训练生成式模型的爬虫；屏蔽它不会让你从ChatGPT搜索中消失',
            '**ChatGPT-User**——当有人向ChatGPT询问某个页面时抓取该页面；OpenAI表示，robots.txt规则可能不适用于这类用户发起的请求',
            '**Claude-SearchBot**和**Claude-User**——Anthropic用于搜索索引和用户请求检索的机器人；**ClaudeBot**是训练爬虫',
            '**PerplexityBot**——在Perplexity结果中呈现并链接网站，不用于训练；**Perplexity-User**处理用户请求，通常会忽略robots.txt',
            '**Googlebot**——负责Google搜索收录的爬虫，AI Overviews和AI Mode依赖该索引；**Google-Extended**令牌控制Gemini的训练和grounding，不影响搜索收录或排名',
          ],
          blockquote: '屏蔽训练机器人（GPTBot、ClaudeBot、Google-Extended）与屏蔽搜索机器人是两个独立的决定。避免按IP地址屏蔽：Anthropic指出，按IP屏蔽可能让它的机器人根本无法读取robots.txt。',
        },
        contentStructure: {
          title: '内容结构：AI引擎实际会引用什么',
          content: [
            '**列表、表格和FAQ板块比密集的长段落更容易被AI系统提取和引用，因为检索是以段落为单位进行的：一个独立的、回答优先的小节，无需整页其余内容就能被引用。**',
            'AI引擎采用检索增强生成（RAG）：先搜索索引，检索匹配的段落，再合成回答。这意味着你的内容必须在段落或小节层面可被引用，而不只是在页面层面。一个结构良好的小节，无需AI读完整个页面就能被提取和引用。',
            '最大化AI引用概率的五项内容原则：',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: '检索增强生成（RAG）提取并引用的是你内容中的单个段落，而不是整个页面——所以结构比字数更重要。',
            },
            {
              type: 'in-plain-terms',
              text: '把你的内容想成一本教科书。AI系统不会从头读到尾；它会搜索某个具体问题的答案，抽出相关段落，引用，然后继续。一个清晰、独立的段落，胜过5,000字的长篇行文。',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 警告',
              text: '“强大”“无缝”“革命性”“领先”这类空泛的营销用语会被AI爬虫忽略。请使用具体事实：确切数字、明确的实体、可衡量的论断。如果你无法给出来源，AI系统就不会提取它。',
            },
          ],
          items: [
            '**回答优先**——每个小节的第一句就给出直接答案；AI爬虫会抽取每个标题下的开头句。这正是[提示工程](/zh/prompt-engineering/what-is-prompt-engineering)的核心原则在书面内容上的应用',
            '**实体密度**——每篇文章提及5-7个明确的实体（产品名、公司名、技术术语、研究者姓名），以体现主题权威性。这是告诉AI系统你的主题权威、可被引用的方式',
            '**语义完整**——每个小节回答自己的问题时，不应依赖其他小节的上下文；AI是孤立地提取段落的',
            '**具体事实胜过空泛论断**——确切的数字、日期和有名称的来源会被引用；“领先的解决方案”“强大的工具”之类的说法会被忽略',
            '**结构化格式**——表格和项目符号列表机器可读；长段落需要NLP解析，被引用的频率较低',
          ],
        },
        goodExample: {
          title: '差示例与好示例：符合GEO的改写',
          content: [
            '**差——零信息的行文（不会被引用）：**',
            '> 我们的平台是一个强大而全面的解决方案，可与领先的AI工具无缝集成，带来行业领先的成果。',
            '任何竞争对手都可以原封不动地发布这句话。没有实体、没有具体事实、没有可验证的论断——AI引擎会直接跳过。',
            '**好——实体丰富、事实密集（可被引用）：**',
          ],
          blockquote: 'PromptQuorum可将一个提示同时发送给最多25个AI模型——包括GPT-5.6（OpenAI）、Claude Opus 5（Anthropic）、Gemini 3 Pro（Google DeepMind）以及通过Ollama运行的本地模型——并把所有回答并排返回，方便对比。',
        },
        goodExampleExplanation: {
          content: [
            '四个明确的实体、一个具体数字（25）、一项可验证的功能（并排对比）。AI引擎会立刻提取并标注来源。PromptQuorum内置9种提示框架（CO-STAR、CRAFT、RISEN、SPECS、TRACE等），可直接在应用内帮助你构建满足这些GEO要求的内容。',
          ],
        },
        seoFoundation: {
          title: '传统SEO对GEO仍然重要吗？',
          content: [
            '**Google AI Overviews和AI Mode使用与传统搜索相同的索引：页面必须被收录并有资格显示摘要，所以SEO基础决定着GEO可见度。**',
            'Google关于AI功能的文档指出，要出现在AI Overviews或AI Mode中没有额外要求，除标准SEO最佳实践外也不需要特殊优化。第三方研究发现，在传统结果中已有曝光的页面被引用得更多，但这些研究衡量的是相关性，被引用的页面也并不总与前10名结果一致。',
            'SEO + GEO的组合体系：',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'E-E-A-T（经验、专业性、权威性、可信度）信号既能提升传统搜索排名，也能提高被AI引用的概率。',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 专业提示',
              text: '不要为了GEO放弃SEO。两者相互促进：改善Core Web Vitals（SEO）→ 排名更高 → 在AI Overviews中被引用（GEO）。E-E-A-T信号对两者都有帮助。请优化完整体系，而不是只做其中一层。',
            },
          ],
          columns: ['层级', '做什么', '为什么'],
          rows: [
            {
              '层级': '技术SEO',
              '做什么': '页面速度、移动端、Core Web Vitals、规范网址（canonical）',
              '为什么': 'GEO机器人遵循与Googlebot相同的可爬取性信号',
            },
            {
              '层级': '内容SEO',
              '做什么': 'E-E-A-T信号、作者资历、可见的发布日期；[了解如何写出更好的内容](/zh/prompt-engineering/write-better-code-with-ai)',
              '为什么': 'AI引擎偏好带有明确权威信号的内容',
            },
            {
              '层级': '实体SEO',
              '做什么': 'JSON-LD结构化数据、知识图谱优化',
              '为什么': '机器会构建实体图谱；含糊的页面会被跳过',
            },
            {
              '层级': 'GEO专项',
              '做什么': '回答优先结构、FAQ板块、llms.txt',
              '为什么': '针对RAG流程的提取进行优化',
            },
            {
              '层级': '引用建设',
              '做什么': '来自权威来源（arXiv、Reuters、官方文档）的链接',
              '为什么': '可信链接或提升权威性；对AI引用的影响未证实',
            },
          ],
        },
        platformBreakdown: {
          title: '哪些AI平台带来最多引荐流量？',
          content: [
            '**ChatGPT贡献了74.78%的AI引荐流量；Gemini为11.56%，Perplexity为7.23%，Copilot为3.51%，Claude为2.62%（SE Ranking，101,574个网站，2025年1月至2026年4月）——这使ChatGPT成为大多数网站杠杆最高的GEO目标。**',
            '这些是AI平台带给网站的访问份额，而不是用户或查询的份额。其他追踪机构给出的分布不同（StatCounter在2026年3月把ChatGPT定为78.16%；一家专注B2B的追踪机构定为62.6%），因此排名顺序可以视为稳定，具体百分比只是近似值。',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 你知道吗？',
              text: 'Perplexity在每个回答中都会显示来源，因此它是检查你的内容是否被引用最容易的平台。AI平台合计仍只带来网站总流量的0.32%（SE Ranking，2026年），所以请在计划中保留传统搜索。',
            },
          ],
          columns: ['平台', 'AI引荐份额', '搜索爬虫', '引用方式'],
          rows: [
            {
              '平台': 'ChatGPT（OpenAI）',
              'AI引荐份额': '74.78%',
              '搜索爬虫': 'OAI-SearchBot',
              '引用方式': '正文内的来源链接，附被引用的摘录',
            },
            {
              '平台': 'Microsoft Copilot',
              'AI引荐份额': '3.51%',
              '搜索爬虫': 'Bingbot',
              '引用方式': 'Bing已收录的页面，脚注式引用',
            },
            {
              '平台': 'Google Gemini / AI Overviews',
              'AI引荐份额': '11.56%',
              '搜索爬虫': 'Googlebot',
              '引用方式': '在Google搜索中已被收录且有资格显示摘要的页面',
            },
            {
              '平台': 'Perplexity AI',
              'AI引荐份额': '7.23%',
              '搜索爬虫': 'PerplexityBot',
              '引用方式': '每个回答附带编号来源列表',
            },
            {
              '平台': 'Claude（Anthropic）',
              'AI引荐份额': '2.62%',
              '搜索爬虫': 'Claude-SearchBot',
              '引用方式': '启用网络搜索时引用来源',
            },
          ],
          blockquote: '份额数据来自SE Ranking（2026年6月）。各平台的分布逐月变化，在据此制定预算之前请重新核对数据。',
        },
        globalContext: {
          title: 'GEO在不同地区和市场有何差异？',
          content: [
            '欧洲企业必须在GEO投入与欧盟《AI法案》合规之间取得平衡，该法案要求AI生成内容保持透明，并禁止具有欺骗性的AI系统。Mistral AI（法国）正在扩大其在欧洲的搜索布局——面向欧洲AI平台优化的内容，必须符合欧盟严格的数据来源标注要求。',
            '在中国，生成式搜索由基于**百度文心一言（ERNIE）**和**阿里巴巴通义千问（Qwen）**的搜索产品主导。面向中国市场的GEO策略，需要针对中文实体图谱进行优化，这与Google或OpenAI的知识库不同。中国关于生成式AI的规定，包括2023年的《暂行办法》和2025年关于AI生成内容标识的办法，要求服务提供者对AI生成内容进行标识，这会影响中国平台呈现来源的方式。',
            '遵循日本经济产业省（METI）数据治理指南的日本企业，越来越多地使用本地部署的AI搜索工具——这意味着，面向日本企业受众的GEO必须优先考虑出现在本土索引中、并符合METI 2024年AI治理框架的内容，而不仅仅是Google AI Overviews。',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 要点',
              text: '欧洲、中国和日本市场对AI内容的来源标注各有不同的监管要求。如果你面向国际受众，请本地化你的GEO策略。单一的全球方案无法满足所有地区的合规标准。',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: '如何追踪AI引用？',
          content: [
            '**用三个来源追踪AI引用：用Google Search Console查看Google的AI功能，用分析工具中的引荐流量查看ChatGPT、Perplexity、Gemini和Claude，再加上一组按计划重复运行的固定提示。**',
            '自2026年6月起，Search Console提供“搜索生成式AI”效果报告，按页面、国家/地区和设备显示AI Overviews、AI Mode和Discover中的展示次数；相同数据也仍包含在总的“效果”报告中。它显示的是展示次数，而不是回答文本，所以它能告诉你出现在哪里，却不能告诉你为什么。',
          ],
          items: [
            '**Search Console**——打开生成式AI报告，记录调整结构后哪些页面的展示次数上升',
            '**分析工具的引荐流量**——细分来自chatgpt.com、perplexity.ai、gemini.google.com和claude.ai的访问；数字会很小',
            '**提示集**——准备10-20个你的页面应当能回答的问题，每周在各个AI助手中运行一次，并记录被点名的网址',
            '**服务器日志**——统计来自OAI-SearchBot、Claude-SearchBot和PerplexityBot的请求，确认页面正在被抓取',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ 警告',
              text: 'AI回答在不同次运行之间会有差异。一次被引用，或一次没被引用，都只是个例。请对比同一组提示在数周内的结果，再判断某项改动是否有效。',
            },
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[什么是提示工程？](/zh/prompt-engineering/what-is-prompt-engineering)——结构化指令如何决定AI系统提取和引用什么',
            '[AI的局限——大语言模型做不到什么](/zh/prompt-engineering/ai-limitations-what-llms-cant-do)——核实AI生成内容论断的方法',
            '[借助AI写出更好的代码](/zh/prompt-engineering/write-better-code-with-ai)——把符合GEO的结构应用到AI辅助的代码生成中',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: '如何为GEO（生成式引擎优化）优化内容',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ 最佳实践',
              text: '先优先做ChatGPT（占AI引荐流量的74.78%），再做Gemini和Perplexity。这种80/20的做法回报最高，又不会把精力分散到较小的平台上。',
            },
          ],
          numberedItems: [
            '**从AI的视角审查现有内容：可搜索性与可引用性。**选出流量最高的10个页面，询问ChatGPT、Perplexity和Google AI Overviews：在回答与你主题相关的问题时，是否引用或推荐了你的内容。标出你没有出现的缺口。',
            '**以回答优先、有可验证事实和清晰结构化数据的方式组织内容。**每个小节以直接回答开头（而不是提问）。每个论断都用来源或清晰的推理支撑。添加JSON-LD结构化数据（Article、FAQPage、HowTo、Breadcrumb），让AI爬虫理解你的内容结构。',
            '**覆盖关键词背后的意图，而不只是关键词。**如果你在“最佳AI工具”上有排名，GEO要求你回答“什么样的AI工具才算最佳？”（准确性、速度、成本、易用性）。AI系统用的是意图匹配，而不是关键词匹配——确保你的回答符合AI系统推断出的用户真实需求。',
            '**建立FAQ板块，回答AI系统会派生出的问题。**AI系统会把宽泛的查询拆解成子问题。如果你的主题是“AI幻觉”，就添加FAQ来回答“AI幻觉有多常见？”“幻觉能被避免吗？”“哪些模型最容易产生幻觉？”。',
            '**检查你的robots.txt，并可选地添加llms.txt文件。**放行OAI-SearchBot、Claude-SearchBot、PerplexityBot和Googlebot。llms.txt是一种拟议中的约定，没有主要AI服务商在文档中说明会使用它，所以把它当作可选的说明文档，而不是排名杠杆。',
          ],
        },
        commonMistakes: {
          title: 'GEO常见错误及修复方法',
          mistakes: [
            {
              mistake: '把GEO当作关键词优化，而不是引用优化。',
              problem: '你是在为搜索查询优化页面，而不是为AI的提取和引用优化。AI系统使用意图匹配和语义完整性，而不是关键词密度。',
              fix: '转换重点：让每个小节的前2-3句就回答完整的问题。使用确切的实体和具体数字，而不是重复关键词。直接用ChatGPT和Perplexity测试，看哪些内容会被引用。',
            },
            {
              mistake: '因为“全力投入GEO”而忽视传统SEO。',
              problem: '未被收录或没有资格显示摘要的页面，无法出现在Google AI Overviews或AI Mode中。GEO以SEO为基础。',
              fix: '双层并行：保持强有力的E-E-A-T信号、Core Web Vitals和反向链接质量（SEO）。在此之上增加回答优先结构、结构化数据和FAQ板块（GEO）。两者相互促进。',
            },
            {
              mistake: '过度依赖结构化数据来提高AI引用。',
              problem: '结构化数据让AI系统更容易解析内容，但权威性和内容结构才是更强的引用信号。结构化数据完美但文字空泛的页面不会被引用。',
              fix: '多层结合：JSON-LD结构化数据 + 回答优先结构 + 实体密度。2025年SearchAtlas的研究发现，缺乏强大的内容权威性时，仅靠结构化数据的影响有限。',
            },
            {
              mistake: '对所有AI平台一视同仁，而不是按市场份额排定优先级。',
              problem: 'ChatGPT贡献了74.78%的AI引荐流量。把优化精力平摊到5个平台上，会稀释投入产出比。',
              fix: '先优先做ChatGPT（OAI-SearchBot抓取、回答优先结构、FAQ板块）。然后优化Gemini和Perplexity（后者在每个回答中都列出来源）。之后再扩展到Claude。',
            },
            {
              mistake: '写密集的长段落，而不是列表式内容。',
              problem: '密集的行文比列表和表格更难被引用。AI系统使用RAG（检索增强生成），对结构化的小节提取更可靠。',
              fix: '尽可能把描述性文字改成项目符号列表。对比内容用表格。每段最多2-3句。AI爬虫会抽取每个标题下的第一句，来决定是否提取该小节。',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'SEO和GEO有什么区别？',
              a: 'SEO（搜索引擎优化）的目标是让页面在Google、Bing等传统搜索结果中排名靠前，用户从一串蓝色链接中自行选择。GEO（生成式引擎优化）的目标是让你的内容被ChatGPT、Perplexity、Gemini和Claude生成的回答引用，用户得到的是一个合成回答，而不是一份选项列表。两者缺一不可：Google表示，页面只要被收录并有资格显示摘要，就可能出现在AI Overviews和AI Mode中，因此传统SEO基础仍然是入场券。',
            },
            {
              q: 'AI搜索流量的转化率比自然搜索更高吗？',
              a: '平均略高，部分B2B场景高得多。WebFX分析了23亿次会话，发现生成式AI访客在54.15%的会话中完成了可衡量的行动，自然搜索为45.23%。Ahrefs报告称，其自身网站来自AI搜索的转化率高出23倍。电商方面证据不一：Practical Ecommerce报道的对973个电商网站的分析发现，AI搜索的转化率低于自然搜索。优势在B2B和高决策成本的购买中最明显。',
            },
            {
              q: '结构化数据能在多大程度上提高AI引用率？',
              a: '一项厂商研究称，使用正确JSON-LD结构化数据的页面，富媒体搜索结果的展示量最多可提高40%，但结构化数据能直接提升AI引用的证据并不充分。2025年SearchAtlas的一项研究发现，仅靠结构化数据覆盖率，并不能让OpenAI、Gemini和Perplexity的LLM引用频率稳定上升；Google也表示，AI Overviews和AI Mode不需要任何特殊的结构化数据。请用结构化数据准确描述页面；内容权威性和回答优先结构仍是更强的信号。',
            },
            {
              q: 'AI搜索增长有多快？',
              a: '从2024年1月到2025年12月，生成式AI流量增长了796%，同期会话转化数增长了6,432%。截至2025年7月，AI生成的美国零售网站流量同比增长4,700%。尽管增长迅猛，WebFX发现生成式AI仅占全部网页会话的0.18%，直接访问（35.51%）和自然搜索（27.12%）仍占主导。SE Ranking追踪了101,574个网站（2025年1月至2026年4月），测得AI平台占网站总流量的0.32%，其中ChatGPT贡献了74.78%的AI引荐流量。',
            },
            {
              q: '在AI搜索时代，SEO还重要吗？',
              a: '重要——传统SEO是GEO的基础，而不是替代选项。Google表示，页面必须被收录并有资格显示摘要才能出现在AI Overviews和AI Mode中，且没有额外的技术要求，所以可爬取性、收录和内容质量是第一位的。提升传统排名的E-E-A-T（经验、专业性、权威性、可信度）信号，同样会提高被AI引用的概率。两者的基础要求相同，区别在于GEO额外增加了回答优先结构、实体密度和结构化数据这几层。',
            },
            {
              q: '为GEO优化内容的第一步是什么？',
              a: '先从AI的视角审查现有内容：选出流量最高的10个页面，用与你主题相关的问题去询问ChatGPT、Perplexity和Google AI Overviews，看你的内容是否被引用或推荐。这样可以找出你没有出现在AI回答中的缺口。然后优先添加JSON-LD结构化数据（Article和FAQPage影响最大）、把内容改成回答优先的格式，并补充FAQ板块，预判AI系统从宽泛问题中拆解出的子问题。',
            },
            {
              q: '什么是llms.txt，我需要吗？',
              a: 'llms.txt是一种拟议中的约定（并非正式标准），做法是在网站根目录放一份Markdown格式的网站摘要，供语言模型阅读。目前没有主要AI服务商在文档中说明会用它来抓取或引用内容，Google也表示，要出现在AI Overviews或AI Mode中，不需要新的机器可读文件或AI文本文件。它是可选项，添加成本低，当有人把它的网址粘贴给AI助手时也有用，但不要指望它单独改变引用情况。',
            },
            {
              q: '如何让我的内容被ChatGPT引用？',
              a: '在robots.txt中放行OpenAI的搜索爬虫（OAI-SearchBot），确保页面可被收录，并让每个小节的第一句就用一个有来源的具体事实回答一个问题。ChatGPT引用的是段落而不是整个页面，所以独立成段的段落、列表、表格和FAQ板块比长篇行文更容易被引用。没有任何技巧能保证被引用：ChatGPT按每次查询选择来源，同一个提示在不同日子可能返回不同的来源。',
            },
            {
              q: '如何追踪AI引擎是否引用了我的网站？',
              a: '结合三个来源。第一，Google Search Console：AI Overviews和AI Mode的数据包含在“效果”报告的总数中，自2026年6月起，另有单独的“搜索生成式AI”报告，按页面、国家/地区和设备显示展示次数。第二，你的分析工具：筛选来自chatgpt.com、perplexity.ai、gemini.google.com和claude.ai的引荐流量。第三，一组固定的10-20个提示，按计划定期运行，并手动或借助第三方监测工具记录结果。单次运行只能算个例；不同次运行的引用会有差异。',
            },
            {
              q: 'GEO与AEO（答案引擎优化）有区别吗？',
              a: 'GEO与AEO密切相关，但并不相同。AEO侧重于优化传统搜索引擎中的直接答案框和精选摘要。GEO则专门针对借助RAG流程、从多个来源合成回答的生成式AI引擎（ChatGPT、Gemini、Perplexity、Claude）。GEO需要回答优先结构、结构化数据和实体密度；AEO的做法与之大量重叠，但GEO还要求段落独立、可抽取，脱离上下文也能被引用。',
            },
          ],
        },
        sources: {
          title: '来源与延伸阅读',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735)——将GEO定义为一门学科并衡量结构化内容所带来引用提升的奠基性学术论文',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/)——对23亿次会话中AI与自然搜索转化率的分析',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility)——关于JSON-LD结构化数据与AI引用频率的厂商研究',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/)——101,574个网站中各AI平台的引荐份额，2025年1月至2026年4月',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features)——AI Overviews和AI Mode的收录资格、结构化数据与机器可读文件',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)——AI Overviews、AI Mode和Discover中的展示次数',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots)——OAI-SearchBot、GPTBot和ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)——ClaudeBot、Claude-User和Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots)——PerplexityBot和Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — 对OpenAI、Gemini和Perplexity中结构化数据覆盖率与引用关系的分析',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — 美国零售网站AI流量同比增长4,700%（2025年7月）',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — 对973个电商网站转化率分析的综述',
          ],
        },
      },
    },
    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      heroImage: '/images/seo-meets-ai-overview-hero-ko.webp',
      title: 'SEO와 AI의 만남: GEO가 기존 방식을 대체하는 방법',
      intro: '**생성형 엔진 최적화(GEO)란 AI 검색 엔진(ChatGPT, Perplexity, Gemini, Claude)이 답변을 합성할 때 해당 콘텐츠를 인용하도록 구조화하는 기법입니다. Google의 파란색 링크 중 상위에 노출되는 기존 SEO 목표를, AI가 답변마다 인용하는 2~7개 출처 안에 이름이 오르는 새로운 목표로 전환합니다.**\n\nGEO는 기존 SEO를 대체하지 않고, 두 번째 최적화 레이어를 추가합니다. AI 플랫폼이 웹사이트로 보내는 트래픽은 아직 1% 미만(SE Ranking의 2026년 데이터 기준 0.32%)이지만, 2년 동안 796% 성장했습니다(WebFX).',
      publishDate: '2026-03-23',
      dateModified: '2026-11-02',
      lastFactChecked: '2026-11-02, Google Search Central·OpenAI·Anthropic·Perplexity 크롤러 문서, SE Ranking(2026년 6월), WebFX(2026년 3월) 기준',
      readTime: '8분 읽기',

      seoTitle: 'ChatGPT GEO: AI 검색 인용 최적화 방법 (2026)',

      metaDescription: 'ChatGPT·Perplexity·Gemini에 인용되려면? 답변 우선 구조, robots.txt의 AI 크롤러 설정, 스키마, AI 검색 인용 추적 방법을 정리했습니다.',

      educationalLevel: 'Beginner',
      toc: [
        { label: '핵심 내용', anchor: '#key-takeaways' },
        { label: 'GEO vs. SEO: 서로 다른 두 게임', anchor: '#geo-vs-seo-two-different-games' },
        { label: 'AI 트래픽이 다르게 전환되는 이유', anchor: '#why-ai-traffic-converts-differently' },
        { label: 'GEO의 기술적 토대란 무엇인가?', anchor: '#what-are-the-technical-foundations-of-geo' },
        { label: 'robots.txt에서 차단을 해제해야 할 AI 크롤러는?', anchor: '#which-ai-crawlers-should-you-unblock-in-robotstxt' },
        { label: '콘텐츠 구조: AI가 인용하는 사이트는 무엇이 다른가', anchor: '#content-structure-what-ai-engines-actually-cite' },
        { label: '나쁜 예 vs. 좋은 예: GEO 기준에 맞춘 재작성', anchor: '#bad-vs-good-a-geo-compliant-rewrite' },
        { label: 'GEO 시대에도 기존 SEO가 중요한가?', anchor: '#does-traditional-seo-still-matter-for-geo' },
        { label: '어떤 AI 플랫폼이 가장 많은 유입 트래픽을 보내는가?', anchor: '#which-ai-platforms-dominate-the-search-market' },
        { label: 'GEO는 지역과 시장에 따라 어떻게 달라지는가?', anchor: '#how-does-geo-differ-across-regions-and-markets' },
        { label: 'GEO를 위한 콘텐츠 최적화 방법', anchor: '#how-to-optimize-content-for-geo' },
        { label: 'AI 검색 인용은 어떻게 추적하고 모니터링합니까?', anchor: '#how-to-track-ai-citations' },
        { label: '흔한 GEO 실수(와 수정 방법)', anchor: '#common-geo-mistakes-and-how-to-fix-them' },
        { label: '관련 읽을거리', anchor: '#related-reading' },
        { label: '자주 묻는 질문', anchor: '#frequently-asked-questions' },
        { label: '출처 및 추가 자료', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'SEO와 AI의 만남: GEO가 기존 방식을 대체하는 방법',
        description: '생성형 엔진 최적화(GEO)는 AI 기반 검색 엔진이 콘텐츠를 인용하도록 하는 방법입니다. GEO와 SEO의 차이, AI 트래픽의 전환율이 다른 이유, ChatGPT·Perplexity·Gemini에서 콘텐츠가 인용되기 위한 기술적 토대를 알아봅니다.',
        datePublished: '2026-03-23',
        dateModified: '2026-11-02',
        author: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
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
        image: buildOgImageObject(OG_SLUG, 'ko'),
        keywords: ['GEO', 'SEO', '생성형 엔진 최적화', 'AI 검색', 'ChatGPT 인용', 'Perplexity', 'Google AI Overviews', 'JSON-LD 스키마', 'AI 검색 인용', 'AI 크롤러'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
          { '@type': 'SoftwareApplication', name: 'Perplexity AI' },
          { '@type': 'SoftwareApplication', name: 'Claude' },
          { '@type': 'SoftwareApplication', name: 'Microsoft Copilot' },
          { '@type': 'SoftwareApplication', name: 'Gemini' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'SEO와 GEO의 차이점은 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO(검색 엔진 최적화)는 사용자가 파란색 링크 목록에서 선택하는 Google·Bing 같은 전통적인 검색 엔진 결과에서 페이지 순위를 높이는 데 집중합니다. GEO(생성형 엔진 최적화)는 ChatGPT·Perplexity·Gemini·Claude의 AI 생성 답변 안에서 콘텐츠가 인용되도록 하는 데 집중합니다. 사용자는 선택지 목록 대신 하나의 통합 답변을 받습니다. 두 가지 모두 필요합니다. Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있는 상태이기만 하면 된다고 밝히고 있으므로, 기존 SEO의 기본기가 여전히 입장권입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'AI 검색 트래픽이 유기 검색보다 전환율이 높습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '평균적으로는 다소 높고, 일부 B2B 사례에서는 훨씬 높습니다. WebFX가 23억 세션을 분석한 결과, 생성형 AI 방문자가 측정 가능한 행동을 완료한 세션 비율은 54.15%로 유기 검색의 45.23%보다 높았습니다. Ahrefs는 자사 사이트에서 AI 검색의 전환율이 23배 높았다고 보고했습니다. 이커머스의 경우 결과가 엇갈립니다. Practical Ecommerce가 소개한 973개 이커머스 사이트 분석 결과 AI 검색은 유기 검색보다 전환율이 낮았습니다. 전환 우위는 B2B와 고관여 구매에서 가장 뚜렷합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '스키마 마크업은 AI 인용률을 얼마나 향상시킵니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '한 업체의 연구에 따르면 올바른 JSON-LD 스키마 마크업이 있는 페이지는 리치 결과 노출이 최대 40% 많습니다. 하지만 AI 인용이 직접 늘어난다는 근거는 약합니다. 2025년 SearchAtlas 연구에서는 스키마 커버리지만으로는 OpenAI·Gemini·Perplexity에서 LLM 인용 빈도가 일관되게 증가하지 않았으며, Google은 AI Overviews나 AI Mode에 특별한 스키마가 필요하지 않다고 밝히고 있습니다. 스키마는 페이지를 정확하게 설명하는 용도로 사용하십시오. 콘텐츠 권위와 답변 우선 구조가 더 강력한 신호입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'AI 검색은 얼마나 빠르게 성장하고 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '생성형 AI 트래픽은 2024년 1월부터 2025년 12월까지 796% 성장했으며, 같은 기간 세션 전환은 6,432% 증가했습니다. 2025년 7월 기준 미국 소매 사이트의 AI 생성 트래픽은 전년 대비 4,700% 증가했습니다. 이 같은 성장에도 불구하고 WebFX에 따르면 생성형 AI는 전체 웹 세션의 0.18%에 불과하며, 직접 유입(35.51%)과 유기 검색(27.12%)이 여전히 대부분을 차지합니다. 2025년 1월부터 2026년 4월까지 101,574개 웹사이트를 추적한 SE Ranking은 AI 플랫폼의 비중을 전체 웹사이트 트래픽의 0.32%로 측정했으며, 이 AI 유입 트래픽의 74.78%를 ChatGPT가 차지했습니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'AI 검색 시대에도 SEO는 여전히 중요합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '그렇습니다. 기존 SEO는 GEO의 대안이 아니라 토대입니다. Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있어야 하며 그 밖의 기술 요건은 없다고 밝히고 있으므로, 크롤링 가능성·색인·콘텐츠 품질이 우선입니다. 기존 순위를 높이는 E-E-A-T(경험·전문성·권위성·신뢰성) 신호는 AI 인용 확률도 강화합니다. 두 분야는 기초 요건을 공유하며, 차이점은 GEO가 답변 우선 구조·엔티티 밀도·스키마 마크업을 추가 레이어로 더한다는 것입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'GEO를 위해 콘텐츠를 최적화하는 첫 번째 단계는 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI 관점에서 현재 콘텐츠를 점검하는 것으로 시작하십시오. 트래픽이 가장 높은 페이지 10개를 선택하고 ChatGPT·Perplexity·Google AI Overviews에 해당 주제와 관련된 질문을 입력하여 콘텐츠가 인용되거나 추천되는지 확인하십시오. 이를 통해 AI 답변에 나타나지 않는 부분을 파악할 수 있습니다. 이후 JSON-LD 스키마 마크업(Article·FAQPage가 가장 효과적) 추가, 콘텐츠의 답변 우선 형식 재구성, AI 시스템이 광범위한 사용자 질문을 세분화하는 하위 질문에 대비한 FAQ 섹션 추가를 우선하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'llms.txt란 무엇이며 필요합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'llms.txt는 언어 모델이 읽을 수 있도록 사이트 루트에 사이트의 마크다운 요약을 두자는 제안된 관례이며, 정식 표준은 아닙니다. 주요 AI 제공업체 중 크롤링이나 인용에 llms.txt를 사용한다고 문서화한 곳은 없으며, Google도 AI Overviews나 AI Mode에 표시되기 위해 새로운 기계 판독용 파일이나 AI용 텍스트 파일이 필요하지 않다고 밝히고 있습니다. 선택 사항이며 추가하는 비용이 낮고, 사용자가 URL을 어시스턴트에 붙여 넣을 때 유용할 수 있지만, 그것만으로 인용이 달라지리라고 기대해서는 안 됩니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'ChatGPT에 인용되려면 콘텐츠를 어떻게 작성해야 합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'robots.txt에서 OpenAI의 검색 크롤러(OAI-SearchBot)를 허용하고, 페이지가 색인 가능한지 확인하며, 각 섹션이 첫 문장에서 하나의 질문에 출처가 있는 구체적인 사실로 답하도록 작성하십시오. ChatGPT는 페이지 전체가 아니라 구절을 인용하므로, 독립적인 단락·목록·표·FAQ 블록이 긴 산문보다 인용되기 쉽습니다. 인용을 보장하는 기법은 없습니다. ChatGPT는 질문마다 출처를 선택하며, 같은 프롬프트도 날마다 다른 출처를 반환할 수 있습니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'AI 검색 인용을 추적하고 프롬프트를 모니터링하려면 어떻게 해야 합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '세 가지 출처를 결합하십시오. 첫째, Google Search Console입니다. AI Overviews와 AI Mode 데이터는 실적 보고서 합계에 포함되며, 2026년 6월부터는 별도의 Search generative AI 보고서에서 페이지·국가·기기별 노출을 확인할 수 있습니다. 둘째, 애널리틱스입니다. chatgpt.com, perplexity.ai, gemini.google.com, claude.ai에서 유입된 방문을 필터링하십시오. 셋째, 일정에 맞춰 실행하는 10~20개의 고정 프롬프트 세트입니다. 직접 기록하거나 타사 모니터링 도구로 기록할 수 있습니다. 한 번의 실행 결과는 일화로 취급하십시오. 인용은 실행마다 달라집니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'GEO는 AEO(답변 엔진 최적화)와 다릅니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GEO와 AEO는 밀접하게 관련되어 있지만 동일하지 않습니다. AEO는 전통적인 검색 엔진의 직접 답변 상자와 추천 스니펫 최적화에 집중합니다. GEO는 RAG 파이프라인을 사용하여 여러 출처의 답변을 합성하는 생성형 AI 엔진(ChatGPT·Gemini·Perplexity·Claude)을 구체적으로 겨냥합니다. GEO에는 답변 우선 구조·스키마 마크업·엔티티 밀도가 필요합니다. AEO 기법과 상당히 겹치지만, GEO는 문맥 없이 인용될 수 있는 독립적이고 추출 가능한 단락이라는 요건을 추가합니다.',
            },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'SEO와 AI의 만남: 핵심 주제',
        'description': '생성형 엔진 최적화를 이해하기 위한 핵심 개념',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'GEO vs SEO: 서로 다른 두 게임', 'description': '기존 SEO와 생성형 엔진 최적화의 차이 이해' },
          { '@type': 'ListItem', 'position': 2, 'name': 'AI 트래픽이 다르게 전환되는 이유', 'description': 'AI 유입 방문자가 유기 검색보다 높은 비율로 전환되는 방식' },
          { '@type': 'ListItem', 'position': 3, 'name': 'GEO의 기술적 토대', 'description': 'JSON-LD 스키마 마크업과 AI 인용률에 미치는 영향' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AI 크롤러 스택', 'description': 'GPTBot·ClaudeBot·PerplexityBot과 llms.txt 이해' },
          { '@type': 'ListItem', 'position': 5, 'name': '콘텐츠 구조와 AI 인용', 'description': '답변 우선 구조·엔티티 밀도·서식이 AI 인용을 높이는 방법' },
        ],
      },
      sections: {
        tldr: {
          title: '핵심 내용',
          isTldr: true,
          items: [
            'GEO(생성형 엔진 최적화)는 AI 생성 답변에서 콘텐츠가 인용되도록 하고, SEO는 파란색 링크 결과에서 페이지 순위를 높입니다. 2026년에는 둘 다 필요합니다',
            'AI 트래픽의 세션 전환율은 54.15%로 유기 검색의 45.23%보다 높습니다(WebFX). 다만 해당 데이터에서는 전체 세션의 0.18%, SE Ranking 데이터에서는 0.32%에 불과합니다',
            '스키마 마크업은 기계가 페이지를 파싱하는 데 도움이 되지만, Google은 AI Overviews와 AI Mode에 특별한 스키마가 필요하지 않다고 밝히고 있으며, 2026년의 한 연구에서는 스키마만으로는 인용이 일관되게 늘지 않았습니다',
            'Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있기만 하면 된다고 밝히고 있습니다. 기존 SEO의 기본기가 여전히 입장권입니다',
            'ChatGPT가 AI 유입 트래픽의 74.78%를 차지하며(SE Ranking, 2026), Gemini(11.56%)와 Perplexity(7.23%)가 뒤를 잇습니다. ChatGPT를 먼저 최적화하십시오',
            '목록·표·FAQ 블록은 산문보다 AI 시스템이 추출하고 인용하기 쉽습니다. 각 섹션이 독립적으로 이해되도록 구성하십시오',
            '2025년 7월 기준 미국 소매 사이트의 AI 생성 트래픽은 전년 대비 4,700% 증가했습니다. 규모는 작지만 전례 없는 속도로 성장하는 채널입니다',
            '검색 크롤러(OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot)는 허용하십시오. GPTBot과 ClaudeBot은 검색 인용이 아니라 학습 사용을 제어합니다. llms.txt는 선택 사항이며, 이를 사용한다고 문서화한 주요 제공업체는 없습니다',
          ],
        },
        definition: {
          id: 'geo-vs-seo-two-different-games',
          title: 'GEO vs. SEO: 서로 다른 두 게임',
          content: [
            '**기존 SEO는 10개의 파란색 링크 중 한 자리를 차지하고, GEO는 AI 모델이 하나의 통합 답변에서 일반적으로 언급하는 2~7개 출처 중 하나로 인용되는 것을 목표로 합니다.** 순위 신호·콘텐츠 형식·성공 지표가 근본적으로 다릅니다. [AI 시스템의 작동 방식과 한계](/ko/prompt-engineering/ai-limitations-what-llms-cant-do)를 이해하는 것이 GEO 최적화에 필수적입니다.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Pro Tip',
              text: 'Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있기만 하면 된다고 밝히고 있습니다. 따라서 크롤링 가능성·색인·콘텐츠 품질은 Google에서 GEO 가시성을 얻기 위한 입장권이며 선택 사항이 아닙니다.',
            },
          ],
          columns: ['항목', '기존 SEO', '생성형 엔진 최적화 (GEO)'],
          rows: [
            { '항목': '주요 목표', '기존 SEO': 'Google/Bing 1~10위 달성', '생성형 엔진 최적화 (GEO)': 'AI 생성 답변에서 인용되기' },
            { '항목': '대상 플랫폼', '기존 SEO': 'Google, Bing, Yahoo', '생성형 엔진 최적화 (GEO)': 'ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews' },
            { '항목': '핵심 성과 지표', '기존 SEO': '순위·클릭·유기 트래픽', '생성형 엔진 최적화 (GEO)': 'AI 인용·AI 응답 내 브랜드 언급' },
            { '항목': '콘텐츠 접근 방식', '기존 SEO': '키워드·백링크·메타데이터', '생성형 엔진 최적화 (GEO)': '엔티티가 풍부하고 구조화된 답변 우선 사실' },
            { '항목': '결과까지 걸리는 시간', '기존 SEO': '4~6개월', '생성형 엔진 최적화 (GEO)': '6~12개월' },
            { '항목': '세션 전환율 (WebFX)', '기존 SEO': '45.23% (유기 검색)', '생성형 엔진 최적화 (GEO)': '54.15% (생성형 AI)' },
          ],
          blockquote: 'SEO와 GEO 모두 명확성·권위·구조화된 콘텐츠·사용자 의도라는 동일한 기반에 의존합니다. 차이점은 AI 엔진이 백링크와 클릭 지표 대신 엔티티 인식과 의미적 완전성을 통해 그 신호를 해석한다는 것입니다. 한 문장으로 요약하면, 기존 SEO가 1페이지를 차지하기 위한 경쟁이었다면 GEO는 AI가 이미 답을 알고 있을 때 인용하는 출처가 되는 것입니다.',
        },
        conversionAnalysis: {
          id: 'why-ai-traffic-converts-differently',
          title: 'AI 트래픽이 다르게 전환되는 이유',
          content: [
            '**AI 검색 엔진을 통해 유입된 방문자는 유기 검색 방문자보다 훨씬 높은 비율로 전환됩니다. AI가 이미 옵션을 합성하고 비교해 준 뒤 유입되므로, 사전에 정보를 얻은 상태로 도착하기 때문입니다.**',
            '**지표 관련 참고 사항:** 아래 연구는 각각 세션 수준 전환율(WebFX), 목표 완료 증가(Ahrefs), B2B 특화 전환(SEMrush)을 측정합니다. 이 수치들은 직접 비교할 수 없으며, 각각 출처와 레이블이 명시되어 있습니다.',
            'WebFX의 23억 사이트 세션 분석(2024년 1월~2025년 12월) 결과:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: '전환 상승폭은 업종마다 다릅니다. WebFX의 업종 통합 데이터는 세션 전환율 54.15% 대 45.23%를 보여 주지만, 한 이커머스 분석에서는 AI 트래픽이 유기 트래픽보다 전환율이 낮았습니다. 귀사 업종에도 이 우위가 적용되는지 자체 트래픽으로 확인하십시오.',
            },
          ],
          items: [
            '생성형 AI 트래픽이 **2년 만에 796% 성장**',
            'AI 유입 방문자의 **세션 전환율은 54.15%**로 유기 검색의 45.23%보다 높음',
            'AI 트래픽 전환이 **전년 대비 6,432% 성장** — 세션 증가보다 빠르게 늘어 더 높은 비율의 방문자가 전환되고 있음',
          ],
          blockquote: '일부 B2B 사례에서는 격차가 더 큽니다. Ahrefs는 자사 사이트에서 AI 검색 도구의 전환율이 유기 검색의 23배였다고 보고했습니다. SEMrush는 500개 이상의 B2B 주제를 다룬 연구에서 AI 검색 트래픽의 전환율이 유기 검색의 4.4배라고 밝혔습니다. 그러나 Practical Ecommerce가 소개한 973개 이커머스 웹사이트 분석 결과 AI 유입 방문자의 전환율은 유기 검색보다 낮았습니다. 우위는 업무와 업종에 따라 달라집니다. WebFX는 세션 전환을 같은 세션 안에서 이루어진 측정 가능한 행동(양식 제출, 다운로드, 견적 요청)으로 정의하므로, 54.15%와 45.23%는 구매율이 아닙니다. AI 인용 또한 결정론적이지 않습니다. 같은 질문에 모델마다, 그리고 같은 모델도 날마다 다른 출처가 나올 수 있습니다.',
        },
        technicalFoundations: {
          id: 'what-are-the-technical-foundations-of-geo',
          title: 'GEO의 기술적 토대란 무엇인가?',
          content: [
            '**올바른 JSON-LD 스키마 마크업은 검색 엔진과 AI 시스템이 페이지의 작성자, 답하는 내용, 업데이트 시점을 파악하는 데 도움이 됩니다. 하지만 인용을 켜는 스위치는 아닙니다. Google은 AI Overviews나 AI Mode에 표시되기 위해 특별한 스키마가 필요하지 않다고 밝히고 있습니다.**',
            'JSON-LD(JavaScript Object Notation for Linked Data)는 Google이 권장하는 스키마 형식이며 AI가 가장 잘 파싱하는 구조화 데이터 형식입니다. 페이지 `<head>`의 `<script>` 블록에 배치하면 의미 레이블이 화면에 보이는 HTML과 분리되므로, 인라인 Microdata나 RDFa보다 관리하기 쉽습니다. [잘 구성된 글쓰기](/ko/prompt-engineering/write-better-code-with-ai)와 결합하면 스키마 마크업이 GEO의 토대가 됩니다.',
            '콘텐츠 페이지를 가장 정확하게 설명하는 스키마 유형:',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Key Point',
              text: '2025년 SearchAtlas 연구에 따르면 스키마 마크업만으로는 AI 인용률이 높아진다고 보장할 수 없으며, Google은 구조화 데이터가 화면에 보이는 페이지 텍스트와 일치해야 한다고 밝히고 있습니다. 콘텐츠 권위와 답변 우선 구조가 더 강력한 신호입니다.',
            },
          ],
          items: [
            '**Article / TechArticle** — 저자·발행일·주제 카테고리 명시',
            '**FAQPage** — AI 답변 엔진이 직접 추출하는 Q&A 쌍',
            '**HowTo** — 절차를 묻는 질문에서 AI가 선호하는 번호 매긴 단계',
            '**Organization** — 엔티티 인식: 누구인지, 무엇을 하는지, 공식 URL',
            '**BreadcrumbList** — 콘텐츠 계층 구조와 주제의 깊이를 알리는 신호',
          ],
          blockquote: '중요한 주의 사항이 있습니다. OpenAI·Gemini·Perplexity에서 스키마 채택과 AI 인용 빈도를 분석한 2025년 SearchAtlas 연구에 따르면, 스키마 커버리지가 높다는 것만으로 LLM 인용률이 일관되게 높아지지는 않았습니다. 스키마는 콘텐츠를 파싱하기 쉽게 만들지만, 콘텐츠 권위·엔티티 밀도·답변 우선 구조가 여전히 더 강력한 인용 신호입니다.',
        },
        crawlerStack: {
          id: 'which-ai-crawlers-should-you-unblock-in-robotstxt',
          title: 'robots.txt에서 차단을 해제해야 할 AI 크롤러는?',
          content: [
            '**AI 제공업체는 검색, 학습, 사용자 요청 가져오기를 위해 각각 별도의 봇을 운영합니다. 인용을 원한다면 검색 봇을 허용하고, 학습 봇은 별도로 결정하십시오.**',
          ],
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: '아래 봇 이름과 `robots.txt`를 대조하고 실제 파일로 테스트하십시오. `llms.txt` 파일은 선택 사항입니다. [llmstxt.org](https://llmstxt.org)에서 제안된 관례이며, 주요 AI 제공업체 중 크롤링이나 인용에 이를 사용한다고 문서화한 곳은 없습니다.',
            },
          ],
          items: [
            '**OAI-SearchBot** — ChatGPT 검색 결과를 위한 OpenAI의 크롤러. 차단하면 ChatGPT 검색 답변에서 사이트가 보이지 않습니다',
            '**GPTBot** — 생성형 모델 학습을 위한 OpenAI의 크롤러. 차단해도 ChatGPT 검색에서 제외되지는 않습니다',
            '**ChatGPT-User** — 사용자가 ChatGPT에 특정 페이지에 대해 물을 때 해당 페이지를 가져옵니다. OpenAI는 사용자가 시작한 이런 요청에는 robots.txt 규칙이 적용되지 않을 수 있다고 밝히고 있습니다',
            '**Claude-SearchBot**과 **Claude-User** — 검색 색인과 사용자 요청 검색을 위한 Anthropic의 봇. **ClaudeBot**은 학습용 크롤러입니다',
            '**PerplexityBot** — Perplexity 결과에 사이트를 표시하고 연결하며 학습에는 사용되지 않습니다. **Perplexity-User**는 사용자 요청을 처리하며 일반적으로 robots.txt를 따르지 않습니다',
            '**Googlebot** — Google 검색 색인을 담당하는 크롤러로, AI Overviews와 AI Mode가 이 색인을 활용합니다. **Google-Extended** 토큰은 Gemini 학습과 그라운딩을 제어하며 Search 포함 여부나 순위에는 영향을 주지 않습니다',
          ],
          blockquote: '학습 봇(GPTBot, ClaudeBot, Google-Extended)을 차단하는 것은 검색 봇을 차단하는 것과 별개의 결정입니다. IP 주소로 차단하는 것은 피하십시오. Anthropic은 IP 차단으로 인해 자사 봇이 robots.txt 자체를 읽지 못할 수 있다고 안내하고 있습니다.',
        },
        contentStructure: {
          id: 'content-structure-what-ai-engines-actually-cite',
          title: '콘텐츠 구조: AI가 인용하는 사이트는 무엇이 다른가',
          content: [
            '**목록·표·FAQ 블록은 산문보다 AI 시스템이 추출하고 인용하기 쉽습니다. 검색이 구절 단위로 이루어지므로, 독립적이고 답변이 먼저 나오는 섹션은 페이지의 나머지 없이도 인용될 수 있기 때문입니다.**',
            'AI 엔진은 검색 증강 생성(RAG)을 사용합니다. 먼저 인덱스를 검색하고 일치하는 구절을 가져온 다음 답변을 합성합니다. 따라서 콘텐츠는 페이지 수준이 아니라 단락 또는 섹션 수준에서 인용 가능해야 합니다. 잘 구성된 섹션 하나는 AI가 전체 페이지를 읽지 않아도 추출하여 인용할 수 있습니다.',
            'AI 인용 확률을 높이는 5가지 콘텐츠 원칙:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: '검색 증강 생성(RAG)은 전체 페이지가 아니라 콘텐츠의 개별 구절을 추출하여 인용하므로, 단어 수보다 구조가 더 중요합니다.',
            },
            {
              type: 'in-plain-terms',
              text: '콘텐츠를 교과서처럼 생각하십시오. AI 시스템은 처음부터 끝까지 읽지 않습니다. 특정 질문에 대한 답을 검색하고, 관련 단락을 뽑아 인용한 뒤 넘어갑니다. 명확하고 독립적인 단락 하나가 5,000단어 분량의 산문보다 효과적입니다.',
            },
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: '"강력한", "원활한", "혁신적인", "선도적인" 같은 모호한 마케팅 표현은 AI 크롤러가 무시합니다. 정확한 수치·명명된 엔티티·측정 가능한 주장 등 구체적인 사실을 사용하십시오. 인용할 수 없다면 AI 시스템도 추출하지 않습니다.',
            },
          ],
          items: [
            '**답변 우선** — 모든 섹션의 첫 문장에 직접 답변을 두십시오. AI 크롤러는 각 제목의 첫 문장을 샘플링합니다. 이것이 글쓰기에 적용된 [프롬프트 엔지니어링](/ko/prompt-engineering/what-is-prompt-engineering)의 핵심 원칙입니다',
            '**엔티티 밀도** — 글 하나당 5~7개의 명명된 엔티티(제품명·회사명·기술 용어·연구자명)를 언급하여 주제 권위를 알리십시오. 이것이 AI 시스템에 해당 주제가 권위 있고 인용할 만하다고 알리는 방법입니다',
            '**의미적 완전성** — 각 섹션은 다른 섹션의 맥락 없이 질문에 답할 수 있어야 합니다. AI는 구절을 독립적으로 추출합니다',
            '**모호한 주장 대신 구체적인 사실** — 정확한 수치·날짜·명명된 출처는 인용되고, "선도적인 솔루션"이나 "강력한 도구" 같은 표현은 무시됩니다',
            '**구조화된 서식** — 표와 글머리 기호 목록은 기계가 읽을 수 있습니다. 산문 단락은 NLP 파싱이 필요해 인용 빈도가 낮습니다',
          ],
        },
        goodExample: {
          id: 'bad-vs-good-a-geo-compliant-rewrite',
          title: '나쁜 예 vs. 좋은 예: GEO 기준에 맞춘 재작성',
          content: [
            '**나쁜 예 — 정보가 없는 산문 (인용되지 않음):**',
            '> 저희 플랫폼은 선도적인 AI 도구와 원활하게 통합되어 업계 최고의 결과를 제공하는 강력하고 포괄적인 솔루션입니다.',
            '어떤 경쟁사도 이 문장을 그대로 게시할 수 있습니다. 엔티티도, 구체적인 사실도, 검증 가능한 주장도 없으므로 AI 엔진은 이 문장을 완전히 건너뜁니다.',
            '**좋은 예 — 엔티티가 풍부하고 사실 밀도가 높음 (인용 가능):**',
          ],
          blockquote: 'PromptQuorum은 하나의 프롬프트를 GPT-5.6(OpenAI)·Claude Opus 5(Anthropic)·Gemini 3 Pro(Google DeepMind), 그리고 Ollama를 통한 로컬 모델을 포함해 최대 25개의 AI 모델에 동시에 전송하고, 모든 응답을 나란히 반환하여 비교할 수 있게 합니다.',
        },
        goodExampleExplanation: {
          content: [
            '명명된 엔티티 4개, 구체적인 숫자 1개(25), 검증 가능한 기능 1개(나란히 비교)가 들어 있습니다. AI 엔진은 이를 즉시 추출하여 출처로 표기합니다. PromptQuorum에는 이러한 GEO 요건에 맞게 콘텐츠를 구성하도록 앱 안에서 바로 도와주는 9개의 내장 프롬프트 프레임워크(CO-STAR·CRAFT·RISEN·SPECS·TRACE 외 4개)가 포함되어 있습니다.',
          ],
        },
        seoFoundation: {
          id: 'does-traditional-seo-still-matter-for-geo',
          title: 'GEO 시대에도 기존 SEO가 중요한가?',
          content: [
            '**Google AI Overviews와 AI Mode는 기존 검색과 같은 인덱스를 사용합니다. 페이지가 색인되어 있고 스니펫을 표시할 수 있어야 하므로, SEO의 기본기가 GEO 가시성을 뒷받침합니다.**',
            'AI 기능에 대한 Google 문서는 AI Overviews나 AI Mode에 표시되기 위한 추가 요건이 없으며, 표준 SEO 모범 사례 외에 특별한 최적화가 필요하지 않다고 설명합니다. 타사 연구에서는 기존 검색 결과에서 이미 잘 보이는 페이지가 더 자주 인용되는 것으로 나타나지만, 이는 상관관계를 측정한 것이며 인용된 페이지가 항상 상위 10위 결과와 일치하지는 않습니다.',
            'SEO + GEO 하이브리드 스택:',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'E-E-A-T(경험·전문성·권위성·신뢰성) 신호는 기존 검색 순위와 AI 인용 확률을 모두 높입니다.',
            },
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: '💡 Pro Tip',
              text: 'GEO를 위해 SEO를 포기하지 마십시오. 두 가지는 서로를 강화합니다. Core Web Vitals 개선(SEO) → 순위 상승 → AI Overviews에 인용(GEO). E-E-A-T 신호는 두 가지 모두를 강화합니다. 한 레이어만이 아니라 전체 스택을 최적화하십시오.',
            },
          ],
          columns: ['레이어', '실행 사항', '이유'],
          rows: [
            {
              '레이어': '기술적 SEO',
              '실행 사항': '페이지 속도·모바일·Core Web Vitals·정규(canonical) URL',
              '이유': 'GEO 봇도 Googlebot과 같은 크롤링 가능성 신호를 따름',
            },
            {
              '레이어': '콘텐츠 SEO',
              '실행 사항': 'E-E-A-T 신호·저자 자격 정보·눈에 보이는 발행일; [더 나은 콘텐츠 작성법 보기](/ko/prompt-engineering/write-better-code-with-ai)',
              '이유': 'AI 엔진은 권위 신호가 명시된 콘텐츠를 선호함',
            },
            {
              '레이어': '엔티티 SEO',
              '실행 사항': 'JSON-LD 스키마·지식 그래프 최적화',
              '이유': '기계는 엔티티 그래프를 구축하며, 모호한 페이지는 건너뜀',
            },
            {
              '레이어': 'GEO 특화',
              '실행 사항': '답변 우선 구조·FAQ 섹션·llms.txt',
              '이유': 'RAG 파이프라인의 추출에 맞게 최적화',
            },
            {
              '레이어': '인용 구축',
              '실행 사항': '권위 있는 출처(arXiv·Reuters·공식 문서)에서 오는 링크',
              '이유': '신뢰 링크는 권위를 높일 수 있음. AI 인용 효과는 미입증',
            },
          ],
        },
        platformBreakdown: {
          id: 'which-ai-platforms-dominate-the-search-market',
          title: '어떤 AI 플랫폼이 가장 많은 유입 트래픽을 보내는가?',
          content: [
            '**ChatGPT가 웹사이트로 가는 AI 유입 트래픽의 74.78%를 차지하고, Gemini가 11.56%, Perplexity가 7.23%, Copilot이 3.51%, Claude가 2.62%로 뒤를 잇습니다(SE Ranking, 웹사이트 101,574개, 2025년 1월~2026년 4월). 대부분의 사이트에서 ChatGPT가 레버리지가 가장 높은 GEO 대상입니다.**',
            '이 수치는 AI 플랫폼이 웹사이트로 보내는 방문의 비중이며, 사용자나 질문의 비중이 아닙니다. 다른 추적 서비스는 다른 비율을 보고합니다(StatCounter는 2026년 3월 ChatGPT를 78.16%로, B2B 중심의 한 추적 서비스는 62.6%로 집계했습니다). 따라서 순위는 안정적이라고 보되 정확한 비율은 대략적인 값으로 받아들이십시오.',
          ],
          callouts: [
            {
              type: 'insight',
              label: '🔍 Did You Know?',
              text: 'Perplexity는 모든 답변에 출처를 표시하므로 콘텐츠가 인용되는지 확인하기에 가장 쉬운 플랫폼입니다. AI 플랫폼을 모두 합쳐도 전체 웹사이트 트래픽의 0.32%만 보내므로(SE Ranking, 2026), 계획에서 기존 검색을 빼지 마십시오.',
            },
          ],
          columns: ['플랫폼', 'AI 유입 비중', '검색 크롤러', '인용 방식'],
          rows: [
            {
              '플랫폼': 'ChatGPT (OpenAI)',
              'AI 유입 비중': '74.78%',
              '검색 크롤러': 'OAI-SearchBot',
              '인용 방식': '발췌문을 포함한 인라인 출처 링크',
            },
            {
              '플랫폼': 'Microsoft Copilot',
              'AI 유입 비중': '3.51%',
              '검색 크롤러': 'Bingbot',
              '인용 방식': 'Bing 색인 페이지·각주 인용',
            },
            {
              '플랫폼': 'Google Gemini / AI Overviews',
              'AI 유입 비중': '11.56%',
              '검색 크롤러': 'Googlebot',
              '인용 방식': 'Google 검색에서 색인되고 스니펫 표시가 가능한 페이지',
            },
            {
              '플랫폼': 'Perplexity AI',
              'AI 유입 비중': '7.23%',
              '검색 크롤러': 'PerplexityBot',
              '인용 방식': '모든 답변에 번호가 매겨진 출처 목록 제공',
            },
            {
              '플랫폼': 'Claude (Anthropic)',
              'AI 유입 비중': '2.62%',
              '검색 크롤러': 'Claude-SearchBot',
              '인용 방식': '웹 검색이 켜져 있을 때 출처 인용',
            },
          ],
          blockquote: '비중 데이터는 SE Ranking(2026년 6월)에서 가져왔습니다. 플랫폼별 비율은 매달 변하므로, 예산 결정을 내리기 전에 수치를 다시 확인하십시오.',
        },
        globalContext: {
          id: 'how-does-geo-differ-across-regions-and-markets',
          title: 'GEO는 지역과 시장에 따라 어떻게 달라지는가?',
          content: [
            '유럽 기업은 AI 생성 콘텐츠에 대한 투명성을 요구하고 기만적인 AI 시스템을 금지하는 EU AI Act 준수와 GEO 투자 사이에서 균형을 맞춰야 합니다. Mistral AI(프랑스)는 유럽 검색 영역에서 존재감을 넓히고 있습니다. 유럽 AI 플랫폼에 맞춰 최적화한 콘텐츠는 EU의 엄격한 데이터 출처 표기 요건에 부합해야 합니다.',
            '중국에서 생성형 검색은 **Baidu ERNIE**와 **Alibaba Qwen** 기반 검색 제품이 주도합니다. 중국 시장을 겨냥한 GEO 전략에는 Google이나 OpenAI의 지식 베이스와는 별개인 중국어 엔티티 그래프에 대한 최적화가 필요합니다. 중국의 생성형 AI 규정, 즉 임시 조치(2023)와 AI 생성 콘텐츠 표시에 관한 2025년 조치는 제공업체가 AI 생성 콘텐츠에 표시를 하도록 요구하며, 이는 중국 플랫폼이 출처를 보여 주는 방식에 영향을 줍니다.',
            '일본의 기업은 METI 데이터 거버넌스 지침에 따라 온프레미스 AI 검색 도구를 점점 더 많이 사용합니다. 따라서 일본 기업 대상 GEO는 Google AI Overviews만이 아니라 국내 인덱스에 노출되고 METI의 2024년 AI 거버넌스 프레임워크를 준수하는 콘텐츠를 우선해야 합니다.',
          ],
          callouts: [
            {
              type: 'key-point',
              label: '📌 Key Point',
              text: '유럽·중국·일본 시장은 AI 콘텐츠 출처 표기에 대한 규제 요건이 서로 다릅니다. 해외 독자를 대상으로 한다면 GEO 전략을 현지화하십시오. 하나의 글로벌 접근 방식으로는 모든 지역의 준수 기준을 충족할 수 없습니다.',
            },
          ],
        },
        trackCitations: {
          id: 'how-to-track-ai-citations',
          title: 'AI 검색 인용은 어떻게 추적하고 모니터링합니까?',
          content: [
            '**AI 검색 인용은 세 가지 출처로 추적합니다. Google의 AI 기능은 Google Search Console로, ChatGPT·Perplexity·Gemini·Claude의 유입은 애널리틱스의 유입 트래픽으로, 그리고 일정에 맞춰 다시 실행하는 고정 프롬프트 세트(프롬프트 모니터링)로 확인합니다.**',
            '2026년 6월부터 Search Console에는 AI Overviews, AI Mode, Discover에서의 노출을 페이지·국가·기기별로 보여 주는 Search generative AI 실적 보고서가 포함됩니다. 같은 데이터는 전체 실적 보고서에도 그대로 남아 있습니다. 이 보고서는 답변 텍스트가 아니라 노출을 보여 주므로, 어디에 나타나는지는 알려 주지만 이유는 알려 주지 않습니다.',
          ],
          items: [
            '**Search Console** — generative AI 보고서를 열고, 구조를 바꾼 뒤 어떤 페이지의 노출이 늘었는지 기록하십시오',
            '**애널리틱스 유입** — chatgpt.com, perplexity.ai, gemini.google.com, claude.ai에서 온 방문을 세그먼트로 나누십시오. 수치는 작을 것입니다',
            '**프롬프트 세트** — 페이지가 답해야 할 질문 10~20개를 정해 각 어시스턴트에서 매주 실행하고, 어떤 URL이 언급되는지 기록하십시오',
            '**서버 로그** — OAI-SearchBot, Claude-SearchBot, PerplexityBot의 요청 수를 집계하여 페이지가 실제로 가져와지고 있는지 확인하십시오',
          ],
          callouts: [
            {
              type: 'warning',
              label: '⚠️ Warning',
              text: 'AI 답변은 실행마다 달라집니다. 인용 한 번, 또는 인용 누락 한 번은 일화일 뿐입니다. 변경이 효과가 있었다고 결론 내리기 전에 여러 주에 걸쳐 같은 프롬프트 세트를 비교하십시오.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[프롬프트 엔지니어링이란?](/ko/prompt-engineering/what-is-prompt-engineering) — 구조화된 지침이 AI 시스템이 추출하고 인용하는 내용을 결정하는 방식',
            '[AI의 한계 — LLM이 할 수 없는 것](/ko/prompt-engineering/ai-limitations-what-llms-cant-do) — AI 생성 콘텐츠의 주장을 검증하는 기법',
            '[AI로 더 나은 코드 작성하기](/ko/prompt-engineering/write-better-code-with-ai) — AI 지원 코드 생성에 GEO 기준에 맞는 구조 적용하기',
          ],
        },
        howToStart: {
          id: 'how-to-optimize-content-for-geo',
          title: 'GEO(생성형 엔진 최적화)를 위한 콘텐츠 최적화 방법',
          callouts: [
            {
              type: 'best-practice',
              label: '🛠️ Best Practice',
              text: 'ChatGPT(AI 유입 트래픽의 74.78%)를 먼저 우선하고, 그다음 Gemini와 Perplexity 순으로 진행하십시오. 이 80/20 접근 방식은 규모가 작은 플랫폼에 노력을 분산하지 않고 가장 큰 효과를 냅니다.',
            },
          ],
          numberedItems: [
            '**AI 관점에서 현재 콘텐츠의 검색 가능성과 인용 가능성을 점검하십시오.** 트래픽이 가장 높은 페이지 10개를 골라 ChatGPT·Perplexity·Google AI Overviews에 주제와 관련된 질문을 하고, 콘텐츠가 인용되거나 추천되는지 확인하십시오. AI 답변에 나타나지 않는 부분을 표시해 두십시오.',
            '**검증 가능한 사실과 명확한 스키마 마크업으로 답변 우선 구조를 만드십시오.** 각 섹션을 질문이 아니라 직접적인 답변으로 시작하십시오. 모든 주장을 출처나 명확한 근거로 뒷받침하십시오. AI 크롤러가 콘텐츠 구조를 이해할 수 있도록 JSON-LD 스키마(Article·FAQPage·HowTo·Breadcrumb)를 추가하십시오.',
            '**키워드만이 아니라 키워드의 의도를 포함하십시오.** "최고의 AI 도구"로 순위를 얻고 있다면, GEO에서는 "AI 도구가 최고이려면 무엇이 필요한가?"(정확도·속도·비용·사용 편의성)에 답해야 합니다. AI 시스템은 키워드 매칭이 아니라 의도 매칭을 사용하므로, 답변이 AI 시스템이 추론하는 사용자 의도와 일치하는지 확인하십시오.',
            '**AI 시스템이 파생해 내는 질문에 답하는 FAQ 섹션을 만드십시오.** AI 시스템은 광범위한 질문을 하위 질문으로 분해합니다. "AI 환각"을 다룬다면 "AI 환각은 얼마나 자주 발생합니까?", "환각을 방지할 수 있습니까?", "어떤 모델이 환각을 가장 많이 일으킵니까?"에 답하는 FAQ 섹션을 추가하십시오.',
            '**robots.txt를 점검하고, 원한다면 llms.txt 파일을 추가하십시오.** OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot을 허용하십시오. llms.txt는 이를 사용한다고 문서화한 주요 AI 제공업체가 없는 제안된 관례이므로, 순위 상승 수단이 아니라 선택적 문서로 취급하십시오.',
          ],
        },
        commonMistakes: {
          id: 'common-geo-mistakes-and-how-to-fix-them',
          title: '흔한 GEO 실수(와 수정 방법)',
          mistakes: [
            {
              mistake: 'GEO를 인용 최적화가 아니라 키워드 최적화로 취급하는 것.',
              problem: '검색어에 맞춰 페이지를 최적화할 뿐, AI의 추출과 인용에는 맞추지 않게 됩니다. AI 시스템은 키워드 밀도가 아니라 의도 매칭과 의미적 완전성을 사용합니다.',
              fix: '초점을 바꾸십시오. 각 섹션의 처음 2~3문장에서 질문 전체에 답하도록 콘텐츠를 구성하십시오. 키워드를 반복하는 대신 정확한 엔티티와 구체적인 숫자를 사용하십시오. ChatGPT와 Perplexity로 직접 테스트하여 무엇이 인용되는지 확인하십시오.',
            },
            {
              mistake: '"GEO에 올인"한다며 기존 SEO를 무시하는 것.',
              problem: '색인되지 않았거나 스니펫을 표시할 수 없는 페이지는 Google AI Overviews나 AI Mode에 나타날 수 없습니다. GEO는 SEO를 토대로 합니다.',
              fix: '두 레이어를 병행하십시오. 강력한 E-E-A-T 신호·Core Web Vitals·백링크 품질을 유지하고(SEO), 그 위에 답변 우선 구조·스키마 마크업·FAQ 섹션을 더하십시오(GEO). 두 가지는 서로를 강화합니다.',
            },
            {
              mistake: 'AI 인용을 높이기 위해 스키마 마크업에만 지나치게 의존하는 것.',
              problem: '스키마는 AI 시스템이 콘텐츠를 더 쉽게 파싱하도록 돕지만, 권위와 콘텐츠 구조가 더 강력한 인용 신호입니다. 스키마가 완벽해도 산문이 모호한 페이지는 인용되지 않습니다.',
              fix: '레이어를 결합하십시오. JSON-LD 스키마, 답변 우선 구조, 엔티티 밀도를 함께 갖추십시오. 2025년 SearchAtlas 연구에 따르면 강력한 콘텐츠 권위가 없으면 스키마만으로는 영향이 제한적입니다.',
            },
            {
              mistake: '시장 점유율에 따른 우선순위 없이 모든 AI 플랫폼을 똑같이 최적화하는 것.',
              problem: 'ChatGPT가 AI 유입 트래픽의 74.78%를 보냅니다. 5개 플랫폼에 최적화 노력을 분산하면 투자 대비 효과가 희석됩니다.',
              fix: 'ChatGPT를 먼저 우선하십시오(OAI-SearchBot 크롤링·답변 우선 구조·FAQ 섹션). 그다음 Gemini와 Perplexity(모든 답변에 출처를 표시함)를 최적화하고, 이후 Claude로 확장하십시오.',
            },
            {
              mistake: '목록 형식 대신 밀도 높은 단락을 작성하는 것.',
              problem: '밀도 높은 산문은 목록이나 표보다 인용하기 어렵습니다. AI 시스템은 RAG(검색 증강 생성)를 사용하며 구조화된 섹션을 더 안정적으로 추출합니다.',
              fix: '가능하면 산문 설명을 글머리 기호 목록으로 바꾸십시오. 비교에는 표를 사용하십시오. 단락은 최대 2~3문장으로 유지하십시오. AI 크롤러는 각 제목의 첫 문장을 샘플링하여 섹션을 추출할지 결정합니다.',
            },
          ],
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'SEO와 GEO의 차이점은 무엇입니까?',
              a: 'SEO(검색 엔진 최적화)는 사용자가 파란색 링크 목록에서 선택하는 Google·Bing 같은 전통적인 검색 엔진 결과에서 페이지 순위를 높이는 데 집중합니다. GEO(생성형 엔진 최적화)는 ChatGPT·Perplexity·Gemini·Claude의 AI 생성 답변 안에서 콘텐츠가 인용되도록 하는 데 집중합니다. 사용자는 선택지 목록 대신 하나의 통합 답변을 받습니다. 두 가지 모두 필요합니다. Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있는 상태이기만 하면 된다고 밝히고 있으므로, 기존 SEO의 기본기가 여전히 입장권입니다.',
            },
            {
              q: 'AI 검색 트래픽이 유기 검색보다 전환율이 높습니까?',
              a: '평균적으로는 다소 높고, 일부 B2B 사례에서는 훨씬 높습니다. WebFX가 23억 세션을 분석한 결과, 생성형 AI 방문자가 측정 가능한 행동을 완료한 세션 비율은 54.15%로 유기 검색의 45.23%보다 높았습니다. Ahrefs는 자사 사이트에서 AI 검색의 전환율이 23배 높았다고 보고했습니다. 이커머스의 경우 결과가 엇갈립니다. Practical Ecommerce가 소개한 973개 이커머스 사이트 분석 결과 AI 검색은 유기 검색보다 전환율이 낮았습니다. 전환 우위는 B2B와 고관여 구매에서 가장 뚜렷합니다.',
            },
            {
              q: '스키마 마크업은 AI 인용률을 얼마나 향상시킵니까?',
              a: '한 업체의 연구에 따르면 올바른 JSON-LD 스키마 마크업이 있는 페이지는 리치 결과 노출이 최대 40% 많습니다. 하지만 AI 인용이 직접 늘어난다는 근거는 약합니다. 2025년 SearchAtlas 연구에서는 스키마 커버리지만으로는 OpenAI·Gemini·Perplexity에서 LLM 인용 빈도가 일관되게 증가하지 않았으며, Google은 AI Overviews나 AI Mode에 특별한 스키마가 필요하지 않다고 밝히고 있습니다. 스키마는 페이지를 정확하게 설명하는 용도로 사용하십시오. 콘텐츠 권위와 답변 우선 구조가 더 강력한 신호입니다.',
            },
            {
              q: 'AI 검색은 얼마나 빠르게 성장하고 있습니까?',
              a: '생성형 AI 트래픽은 2024년 1월부터 2025년 12월까지 796% 성장했으며, 같은 기간 세션 전환은 6,432% 증가했습니다. 2025년 7월 기준 미국 소매 사이트의 AI 생성 트래픽은 전년 대비 4,700% 증가했습니다. 이 같은 성장에도 불구하고 WebFX에 따르면 생성형 AI는 전체 웹 세션의 0.18%에 불과하며, 직접 유입(35.51%)과 유기 검색(27.12%)이 여전히 대부분을 차지합니다. 2025년 1월부터 2026년 4월까지 101,574개 웹사이트를 추적한 SE Ranking은 AI 플랫폼의 비중을 전체 웹사이트 트래픽의 0.32%로 측정했으며, 이 AI 유입 트래픽의 74.78%를 ChatGPT가 차지했습니다.',
            },
            {
              q: 'AI 검색 시대에도 SEO는 여전히 중요합니까?',
              a: '그렇습니다. 기존 SEO는 GEO의 대안이 아니라 토대입니다. Google은 AI Overviews와 AI Mode에 표시되려면 페이지가 색인되어 있고 스니펫을 표시할 수 있어야 하며 그 밖의 기술 요건은 없다고 밝히고 있으므로, 크롤링 가능성·색인·콘텐츠 품질이 우선입니다. 기존 순위를 높이는 E-E-A-T(경험·전문성·권위성·신뢰성) 신호는 AI 인용 확률도 강화합니다. 두 분야는 기초 요건을 공유하며, 차이점은 GEO가 답변 우선 구조·엔티티 밀도·스키마 마크업을 추가 레이어로 더한다는 것입니다.',
            },
            {
              q: 'GEO를 위해 콘텐츠를 최적화하는 첫 번째 단계는 무엇입니까?',
              a: 'AI 관점에서 현재 콘텐츠를 점검하는 것으로 시작하십시오. 트래픽이 가장 높은 페이지 10개를 선택하고 ChatGPT·Perplexity·Google AI Overviews에 해당 주제와 관련된 질문을 입력하여 콘텐츠가 인용되거나 추천되는지 확인하십시오. 이를 통해 AI 답변에 나타나지 않는 부분을 파악할 수 있습니다. 이후 JSON-LD 스키마 마크업(Article·FAQPage가 가장 효과적) 추가, 콘텐츠의 답변 우선 형식 재구성, AI 시스템이 광범위한 사용자 질문을 세분화하는 하위 질문에 대비한 FAQ 섹션 추가를 우선하십시오.',
            },
            {
              q: 'llms.txt란 무엇이며 필요합니까?',
              a: 'llms.txt는 언어 모델이 읽을 수 있도록 사이트 루트에 사이트의 마크다운 요약을 두자는 제안된 관례이며, 정식 표준은 아닙니다. 주요 AI 제공업체 중 크롤링이나 인용에 llms.txt를 사용한다고 문서화한 곳은 없으며, Google도 AI Overviews나 AI Mode에 표시되기 위해 새로운 기계 판독용 파일이나 AI용 텍스트 파일이 필요하지 않다고 밝히고 있습니다. 선택 사항이며 추가하는 비용이 낮고, 사용자가 URL을 어시스턴트에 붙여 넣을 때 유용할 수 있지만, 그것만으로 인용이 달라지리라고 기대해서는 안 됩니다.',
            },
            {
              q: 'ChatGPT에 인용되려면 콘텐츠를 어떻게 작성해야 합니까?',
              a: 'robots.txt에서 OpenAI의 검색 크롤러(OAI-SearchBot)를 허용하고, 페이지가 색인 가능한지 확인하며, 각 섹션이 첫 문장에서 하나의 질문에 출처가 있는 구체적인 사실로 답하도록 작성하십시오. ChatGPT는 페이지 전체가 아니라 구절을 인용하므로, 독립적인 단락·목록·표·FAQ 블록이 긴 산문보다 인용되기 쉽습니다. 인용을 보장하는 기법은 없습니다. ChatGPT는 질문마다 출처를 선택하며, 같은 프롬프트도 날마다 다른 출처를 반환할 수 있습니다.',
            },
            {
              q: 'AI 검색 인용을 추적하고 프롬프트를 모니터링하려면 어떻게 해야 합니까?',
              a: '세 가지 출처를 결합하십시오. 첫째, Google Search Console입니다. AI Overviews와 AI Mode 데이터는 실적 보고서 합계에 포함되며, 2026년 6월부터는 별도의 Search generative AI 보고서에서 페이지·국가·기기별 노출을 확인할 수 있습니다. 둘째, 애널리틱스입니다. chatgpt.com, perplexity.ai, gemini.google.com, claude.ai에서 유입된 방문을 필터링하십시오. 셋째, 일정에 맞춰 실행하는 10~20개의 고정 프롬프트 세트입니다. 직접 기록하거나 타사 모니터링 도구로 기록할 수 있습니다. 한 번의 실행 결과는 일화로 취급하십시오. 인용은 실행마다 달라집니다.',
            },
            {
              q: 'GEO는 AEO(답변 엔진 최적화)와 다릅니까?',
              a: 'GEO와 AEO는 밀접하게 관련되어 있지만 동일하지 않습니다. AEO는 전통적인 검색 엔진의 직접 답변 상자와 추천 스니펫 최적화에 집중합니다. GEO는 RAG 파이프라인을 사용하여 여러 출처의 답변을 합성하는 생성형 AI 엔진(ChatGPT·Gemini·Perplexity·Claude)을 구체적으로 겨냥합니다. GEO에는 답변 우선 구조·스키마 마크업·엔티티 밀도가 필요합니다. AEO 기법과 상당히 겹치지만, GEO는 문맥 없이 인용될 수 있는 독립적이고 추출 가능한 단락이라는 요건을 추가합니다.',
            },
          ],
        },
        sources: {
          id: 'sources-further-reading',
          title: '출처 및 추가 자료',
          items: [
            '[Aggarwal et al., 2023. "GEO: Generative Engine Optimization"](https://arxiv.org/abs/2311.09735) — GEO를 하나의 분야로 정의하고 구조화된 콘텐츠의 인용 상승 효과를 측정한 기초 학술 논문',
            '[WebFX, 2026. "Study: AI Traffic Grew 796% & Out-Converts Organic Search"](https://www.webfx.com/blog/seo/gen-ai-search-trends/) — AI 대 유기 검색의 전환율에 관한 23억 세션 분석',
            '[xSeek / Milestone Research, 2026. "Structured Data for AI Search: 40% More Citations"](https://www.xseek.io/learnings/how-does-structured-data-boost-ai-search-visibility) — JSON-LD 스키마와 AI 인용 빈도에 관한 업체 연구',
            '[SE Ranking, 2026. "AI traffic grew 16x from 2024 to 2026"](https://seranking.com/blog/ai-traffic-research-study/) — 2025년 1월~2026년 4월, 웹사이트 101,574개의 AI 플랫폼별 유입 비중',
            '[Google Search Central. "AI features and your website"](https://developers.google.com/search/docs/appearance/ai-features) — AI Overviews와 AI Mode의 표시 자격, 구조화 데이터, 기계 판독용 파일',
            '[Google Search Central, 2026. "Search generative AI performance reports in Search Console"](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — AI Overviews, AI Mode, Discover에서의 노출',
            '[OpenAI. "Overview of OpenAI crawlers"](https://developers.openai.com/api/docs/bots) — OAI-SearchBot, GPTBot, ChatGPT-User',
            '[Anthropic Support. "Does Anthropic crawl data from the web?"](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User, Claude-SearchBot',
            '[Perplexity. "Perplexity crawlers"](https://docs.perplexity.ai/guides/bots) — PerplexityBot과 Perplexity-User',
            '[SearchAtlas, 2025. "The Limits of Schema Markup for AI Search"](https://searchatlas.com/research/the-limits-of-schema-markup-for-ai-search/) — OpenAI·Gemini·Perplexity에서 스키마 적용 범위와 인용의 관계 분석',
            '[Adobe, 2025. "Generative AI-powered shopping rises with traffic to retail sites"](https://business.adobe.com/blog/generative-ai-powered-shopping-rises-with-traffic-to-retail-sites) — 미국 소매 사이트로 유입되는 AI 트래픽 전년 대비 4,700% 증가(2025년 7월)',
            '[Practical Ecommerce. "Mixed Reports on AI Ecommerce Traffic"](https://www.practicalecommerce.com/mixed-reports-on-ai-ecommerce-traffic) — 973개 이커머스 사이트 전환율 분석 요약',
          ],
        },
      },
    },
  };
