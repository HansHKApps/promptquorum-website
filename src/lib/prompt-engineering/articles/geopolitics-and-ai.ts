// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: geopolitics-and-ai
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'annual',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen 3', 'ERNIE 4.0', 'Doubao', 'Z.ai GLM-4', 'DeepSeek R1', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'Mistral Large 2'],
      theme: 'Policy & Compliance',
      title: 'AI Geopolitics Explained: EU AI Act vs US vs China (2026 Analysis)',
      intro: 'The US, China, and European Union are pursuing incompatible visions of AI governance — the US prioritizes competitiveness, China emphasizes state control, and the EU builds a rights-based legal framework. For organizations deploying AI, these differences translate into concrete compliance obligations, procurement constraints, and data residency requirements that apply regardless of where the organization is headquartered.',
      leadAnswerBlock: '**AI geopolitics determines which models you can use, what regulatory framework governs your deployment, and whether critical hardware remains accessible. The EU AI Act applies globally, US export controls limit chip access, and China\'s CAC filters block content at the API level.**',
      publishDate: '2026-04-01',
      seoTitle: 'AI Geopolitics Analysis 2026: US, EU & China Guide',
      metaDescription: 'EU AI Act, US export controls, China CAC: three incompatible frameworks. How they affect AI procurement, data residency, and model availability in 2026.',
      dateModified: '2026-06-01',
      readTime: '16 min read',
      educationalLevel: 'Intermediate',
      audience: 'Teams deploying AI in regulated markets (EU, China, US)',
      primaryTerm: 'AI Geopolitics',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai',
        headline: 'AI Geopolitics Explained: EU AI Act vs US vs China (2026 Analysis)',
        description: 'The US, China, and European Union are pursuing incompatible visions of AI governance. For organizations deploying AI, these differences translate into concrete compliance obligations, procurement constraints, and data residency requirements.',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        keywords: ['AI geopolitics', 'EU AI Act', 'CHIPS Act', 'AI regulation', 'China AI strategy', 'Brussels Effect', 'AI governance', 'DeepSeek', 'AI Safety Institute', 'Made in China 2025', 'KI Gesetz', 'AI regulation Europe', 'AI governance EU', 'regolamento intelligenza artificiale', 'régulation de l\'IA', 'KI-Regulierung', '人工知能規制', 'AI中国战略'],
        teaches: [
          'How the EU AI Act classifies risk and what deadlines apply',
          'What individual EU and non-EU European countries are doing on AI',
          'How US and Chinese AI strategies differ from the EU approach',
          'What the Brussels Effect means for non-EU organizations using AI tools',
          'How geopolitical competition shapes AI model availability and procurement decisions',
        ],
        about: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'China' },
          { '@type': 'Organization', name: 'European Union' },
          { '@type': 'Thing', name: 'EU AI Act' },
          { '@type': 'Thing', name: 'Artificial intelligence regulation' },
          { '@type': 'Thing', name: 'Brussels Effect' },
          { '@type': 'Thing', name: 'AI geopolitics' },
          { '@type': 'Organization', name: 'NVIDIA' },
          { '@type': 'Organization', name: 'TSMC' },
          { '@type': 'Organization', name: 'European Commission' },
          { '@type': 'Organization', name: 'Cyberspace Administration of China' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'OpenAI' },
          { '@type': 'Organization', name: 'Google DeepMind' },
          { '@type': 'Organization', name: 'Anthropic' },
          { '@type': 'Organization', name: 'Alibaba' },
          { '@type': 'Organization', name: 'Baidu' },
          { '@type': 'Organization', name: 'DeepSeek' },
          { '@type': 'Organization', name: 'Mistral AI' },
          { '@type': 'Thing', name: 'CHIPS and Science Act' },
          { '@type': 'Thing', name: 'Made in China 2025' },
          { '@type': 'Thing', name: 'Hiroshima AI Process' },
          { '@type': 'Person', name: 'Ursula von der Leyen' },
          { '@type': 'Person', name: 'Emmanuel Macron' },
          { '@type': 'Person', name: 'Rishi Sunak' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/geopolitics-and-ai', width: 1200, height: 630 },
        educationalLevel: 'Intermediate',
      },
      supplementalSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'AI Regulatory Framework Comparison: EU AI Act vs US Strategy vs China',
        description: 'Comprehensive comparison of how the European Union, United States, and China regulate artificial intelligence across 9 key dimensions.',
        url: 'https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Primary Regulatory Approach',
            description: 'EU: Rights-based legal framework classifying AI by risk to fundamental rights. US: Sectoral, innovation-first approach with no federal AI law. China: State-directed, control-first strategy treating AI as a national development priority.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Key AI Legislation',
            description: 'EU: EU AI Act (2024, mandatory) + GDPR. US: No federal AI law; NIST AI Risk Management Framework (voluntary); Trump AI Action Plan (2025). China: Cyberspace Administration of China (CAC) algorithm and generative AI regulations (2022–2023).',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Risk Tiering Framework',
            description: 'EU: 4-tier system (Unacceptable/banned, High/conformity assessment required, Limited/disclosure required, Minimal/no specific obligations). US: Voluntary NIST AI RMF with 7 trustworthiness dimensions; no mandatory tiering. China: Pre-deployment security assessment required for generative AI.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Maximum Penalties',
            description: 'EU: €35 million or 7% of global turnover for prohibited practices; €15 million or 3% for high-risk violations. US: No federal AI-specific fine; FTC pursues unfair/deceptive practices. China: Up to ¥100,000 per violation; service suspension for non-compliant generative AI.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Data Protection Rules',
            description: 'EU: GDPR + AI Act; personal data in training requires legal basis. US: Sectoral (HIPAA, CCPA, FERPA); no federal equivalent to GDPR. China: Personal Information Protection Law (PIPL, 2021); state security agencies retain data access rights.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Banned AI Applications',
            description: 'EU: Social scoring by public authorities, real-time public biometric surveillance, AI exploiting cognitive vulnerabilities, untargeted facial image scraping. US: No federal bans; state-level variation. China: Content undermining CPC leadership or "socialist core values"; deepfakes must be disclosed.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Enforcement Authority',
            description: 'EU: EU AI Office (GPAI models) + national market surveillance authorities (high-risk AI) + Data Protection Authorities (GDPR). US: FTC, FDA, CFPB, EEOC, NIST across domains. China: Cyberspace Administration of China (CAC) as primary enforcer.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'International Reach',
            description: 'EU: Brussels Effect — applies to any AI placed on EU market or whose output is used in EU; extraterritorial by design. US: Export controls on hardware; no extraterritorial content regulation. China: BRI AI exports spread Chinese governance norms; Great Firewall limits foreign AI access domestically.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the EU AI Act?', acceptedAnswer: { '@type': 'Answer', text: 'The EU AI Act is the world\'s first comprehensive legal framework for artificial intelligence, passed by the European Parliament in March 2024 with 523 votes in favor. It classifies AI systems into four risk tiers — Unacceptable, High, Limited, and Minimal — and applies different requirements and fines to each tier. Full enforcement applies from August 2026.' } },
          { '@type': 'Question', name: 'Does the EU AI Act apply to companies outside the EU?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The EU AI Act applies to any organization that places AI systems on the EU market or whose AI outputs are used in the EU, regardless of where the organization is headquartered. This extraterritorial reach is called the Brussels Effect and means US and Asian AI providers must also comply if they serve EU users.' } },
          { '@type': 'Question', name: 'What are the fines for violating the EU AI Act?', acceptedAnswer: { '@type': 'Answer', text: 'Fines reach up to €35 million or 7% of global annual turnover for prohibited AI practices (whichever is higher). High-risk AI violations carry fines up to €15 million or 3% of global turnover. Providing incorrect information to authorities carries fines up to €7.5 million or 1% of global turnover.' } },
          { '@type': 'Question', name: 'What AI applications does the EU ban outright?', acceptedAnswer: { '@type': 'Answer', text: 'The EU AI Act prohibits: social scoring systems by public authorities, real-time biometric surveillance in public spaces (with narrow law enforcement exceptions), AI that exploits cognitive vulnerabilities, and untargeted scraping of facial images from the internet to build recognition databases. These are categorized as Unacceptable Risk.' } },
          { '@type': 'Question', name: 'How does US AI regulation differ from the EU approach?', acceptedAnswer: { '@type': 'Answer', text: 'The US uses a sectoral, voluntary approach — existing regulators (FTC, FDA, CFPB, EEOC) apply their mandates to AI within their domains. There is no federal AI law equivalent to the EU AI Act. The Biden Executive Order on AI Safety (October 2023) was revoked by the Trump administration in January 2025 and replaced with a competitiveness-focused AI Action Plan.' } },
          { '@type': 'Question', name: 'Is China\'s AI as capable as US AI systems?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek R1, released January 2025, exceeded GPT-5.5 on reasoning and coding benchmarks (AIME 2024: 79.8% vs GPT-5.5\'s 74.4%, MATH-500: 97.3%, HumanEval) while reportedly training at ~$6 million — a 94% cost reduction vs estimated frontier model training costs. China\'s leading models — including Alibaba\'s Qwen 3 and Baidu\'s ERNIE 4.0 — are competitive on many tasks but trail on multilingual reasoning and safety benchmarks. Hardware export controls limit China\'s access to the latest Nvidia GPUs, but DeepSeek\'s success demonstrates those controls have significant limits.' } },
          { '@type': 'Question', name: 'Can EU companies use GPT-5.5 and Claude under the AI Act?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most use cases. GPT-5.5 and Claude Opus 4.8 qualify as General Purpose AI (GPAI) models and must comply with transparency obligations — including publishing training data summaries and complying with EU copyright law — which took effect August 2025. OpenAI and Anthropic have both published GPAI compliance documentation for EU users.' } },
          { '@type': 'Question', name: 'What is the UK AI Safety Institute (AISI)?', acceptedAnswer: { '@type': 'Answer', text: 'The UK AI Safety Institute (AISI) was established in November 2023 following the AI Safety Summit at Bletchley Park. It conducts technical research on AI safety, evaluates frontier AI models for dangerous capabilities, and publishes safety reports. The AISI operates independently of commercial AI developers and collaborates with the US AI Safety Institute.' } },
          { '@type': 'Question', name: 'How does DeepSeek affect the AI geopolitics race?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek R1\'s January 2025 release demonstrated that frontier AI capabilities are achievable at significantly lower compute costs than previously assumed. This weakens the argument that export controls on Nvidia GPUs will permanently limit Chinese AI development. It accelerated US and EU policy discussions about whether compute-based containment strategies are sufficient.' } },
          { '@type': 'Question', name: 'What is the Brussels Effect in AI?', acceptedAnswer: { '@type': 'Answer', text: 'The Brussels Effect describes how EU regulations become de facto global standards because multinational companies find it easier to apply the strictest standard worldwide rather than maintain separate compliance stacks per jurisdiction. For AI, this means the EU AI Act effectively raises standards for GPT-5.5, Claude, and Gemini globally — regardless of where users are located.' } },
          { '@type': 'Question', name: 'What is the Hiroshima AI Process and what did it achieve?', acceptedAnswer: { '@type': 'Answer', text: 'The Hiroshima AI Process is a G7 initiative launched at the 2023 Hiroshima Summit under Japan\'s G7 presidency. It produced the Hiroshima AI Process Code of Conduct — 11 voluntary principles for developers of advanced AI systems, adopted by G7 nations in October 2023. Principles cover transparency, incident reporting, safety testing, and AI-generated content watermarking. The Code of Conduct is voluntary, not legally binding, and is separate from the EU AI Act.' } },
          { '@type': 'Question', name: 'Can EU organizations use DeepSeek for commercial applications?', acceptedAnswer: { '@type': 'Answer', text: 'Technically yes, with GDPR-compliant Standard Contractual Clauses (SCCs). In practice, SCCs are difficult to enforce against Chinese law obligations requiring CAC data disclosure compliance. Germany (BSI), France (ANSSI), and the Netherlands (NCSC) have issued advisories restricting Chinese AI tools for government and critical infrastructure. Private-sector organizations must conduct a Transfer Impact Assessment under GDPR Article 46 before processing personal data through DeepSeek.' } },
        ],
      },
      toc: [
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'Quick Facts', anchor: 'quick-facts-ai-geopolitics-at-a-glance' },
        { label: 'EU Compliance Deadlines', anchor: 'if-you-re-an-eu-based-organization-critical-compliance-deadlines' },
        { label: 'Key Data Points', anchor: 'ai-geopolitics-key-data-points' },
        { label: 'The AI Arms Race: US, China, and the EU', anchor: 'the-ai-arms-race-us-china-and-the-eu' },
        { label: 'The EU AI Act: What It Actually Requires', anchor: 'the-eu-ai-act-what-it-actually-requires' },
        { label: 'Digital Omnibus: High-Risk Deadline in Flux', anchor: 'digital-omnibus-eu-ai-act-high-risk-compliance-deadline-in-flux' },
        { label: 'EU Member States: National AI Strategies', anchor: 'eu-member-states-national-ai-strategies' },
        { label: 'France & Mistral: EU AI Independence', anchor: 'france-mistral-building-european-ai-independence' },
        { label: 'US Strategy: Executive Orders & State Law Preemption', anchor: 'us-strategy-executive-orders-chips-act-state-law-preemption' },
        { label: "China's AI Strategy: DeepSeek, CAC", anchor: 'china-s-ai-strategy-made-in-china-2025-cac-regulations-deepseek' },
        { label: 'China: Available Models', anchor: 'china-for-prompt-engineers-which-models-are-available' },
        { label: 'China: Content Filters & CAC', anchor: 'content-filters-cac-requirements-critical-constraints' },
        { label: 'China: Data Residency & APIs', anchor: 'pipl-data-residency-practical-apis-and-deployment-examples' },
        { label: 'Global AI Regulation: EU vs US vs China', anchor: 'global-ai-regulation-eu-vs-us-vs-china-compared' },
        { label: 'AI Geopolitical Risks for Organizations', anchor: 'ai-geopolitical-risks-what-this-means-for-organizations' },
        { label: 'Key Definitions', anchor: 'definition-eu-ai-act' },
        { label: 'Common Mistakes', anchor: 'common-mistakes' },
        { label: 'Frequently Asked Questions', anchor: 'frequently-asked-questions' },
        { label: 'Sources', anchor: 'sources' },
      ],
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Deploy Generative AI Products in China: A Developer Guide',
        description: 'Step-by-step guide for developers deploying AI products in China — model selection, content restrictions, CAC security assessment, PIPL data residency, and go-to-market timeline.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Understand Available AI Models in China', text: 'Foreign models (GPT-5.5, Claude, Gemini) are inaccessible from mainland China without a VPN. Available options: Alibaba Qwen 3 (open-weights, 7B–72B, 128K context), Baidu ERNIE 4.0 (Qianfan API), ByteDance Doubao (Volcano Engine), Z.ai GLM-4, DeepSeek R1/V3. Qwen 3 72B is the strongest open-weights option for self-hosting.' },
          { '@type': 'HowToStep', position: 2, name: 'Plan for API-Level Content Restrictions', text: 'CAC-registered generative AI services filter content blocking CPC leadership criticism, Taiwan/Tibet/Xinjiang independence discussions, politically sensitive historical events, and content undermining "socialist core values." Filters are built into the API. Filter errors return HTTP 200 with is_safe: 0 — not HTTP 4xx — requiring explicit application-level handling.' },
          { '@type': 'HowToStep', position: 3, name: 'Complete the CAC Security Assessment', text: 'Required before any consumer-facing generative AI service launches in China. Submit training data sources, content filtering documentation, and sample outputs. Timeline: 45–90 days. Foreign companies must partner with a mainland China entity or licensed cloud provider (Alibaba Cloud, Tencent Cloud) as the registered provider.' },
          { '@type': 'HowToStep', position: 4, name: 'Deploy a Hybrid Model for China and International Users', text: 'Deploy Qwen 3 72B (Apache 2.0) on your own infrastructure outside China for international users. Use Alibaba Cloud API for the China segment under their CAC registration. Qwen 3 72B scores within 5 points of GPT-5.5 on MMLU and outperforms on C-Eval. 128K context window.' },
          { '@type': 'HowToStep', position: 5, name: 'Comply with PIPL Data Residency Requirements', text: 'PIPL (2021) requires personal data from Chinese users to stay in China or pass a government security assessment before cross-border transfer. Route all China-user traffic through mainland-hosted inference (Alibaba Cloud, Tencent Cloud, Huawei Cloud).' },
          { '@type': 'HowToStep', position: 6, name: 'Plan Your China Go-to-Market Timeline', text: 'Budget 45–90 days for CAC pre-launch review. Partner with a mainland entity for consumer-facing products. Use Qwen 3 72B for Chinese-language tasks. Avoid routing Chinese user data through US-hosted APIs.' },
        ],
      },
      tableSchema: {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Global AI Regulation Comparison: EU AI Act vs US Strategy vs China CAC',
        description: 'Structured comparison of AI regulatory frameworks across 8 dimensions — primary approach, key legislation, risk framework, maximum fine, data protection, banned applications, enforcement body, and international reach — for the European Union, United States, and China.',
        url: 'https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai',
        creator: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        dateModified: '2026-06-01',
        variableMeasured: [
          { '@type': 'PropertyValue', name: 'Primary Approach', description: 'EU: Rights-based legal framework. US: Sectoral, innovation-first. China: State-directed, control-first.' },
          { '@type': 'PropertyValue', name: 'Key Legislation', description: 'EU: EU AI Act (2024). US: No federal AI law; NIST AI RMF voluntary. China: Algorithm Recommendations Regulations (2022); Generative AI Measures (2023).' },
          { '@type': 'PropertyValue', name: 'Maximum Fine', description: 'EU: €35M or 7% global turnover. US: No federal AI-specific fine. China: Up to ¥100,000 per violation.' },
          { '@type': 'PropertyValue', name: 'Enforcement Body', description: 'EU: EU AI Office + national authorities. US: FTC, FDA, CFPB, EEOC. China: Cyberspace Administration of China (CAC).' },
          { '@type': 'PropertyValue', name: 'International Reach', description: 'EU: Brussels Effect — applies extraterritorially. US: Hardware export controls only. China: BRI AI exports spread governance norms.' },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'The slide deck below covers: data residency requirements by region (EU GDPR, China PIPL, India DPDP), model selection by geopolitical context, AI regulation landscape across major jurisdictions, and a compliance checklist. Download the PDF as a geopolitical AI deployment reference card.',
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'AI is a strategic national technology — the US, China, and EU compete for dominance.',
            'Countries compete for three resources: compute (chips), AI talent, and training data.',
            'AI affects military capability, economic competitiveness, and cyber power simultaneously.',
            'The EU AI Act is the world\'s first binding AI law — fines reach €35M or 7% of global turnover.',
            'The Brussels Effect: EU AI Act rules apply to any AI reaching EU users, worldwide.',
            'The US has no federal AI law — sector regulators apply existing mandates to AI in their domains.',
            'The US revoked its AI safety executive order in January 2025 — competitiveness now leads over safety.',
            'China\'s DeepSeek R1 exceeded GPT-5.5 on key benchmarks (AIME, MATH, HumanEval) at $6M training cost — a 94% reduction — demonstrating GPU export controls have limits.',
            'TSMC in Taiwan fabricates the chips that power all frontier AI — a single geopolitical dependency.',
            'Organizations must comply with three conflicting regulatory frameworks simultaneously: EU, US, and China.',
          ],
        },

        quickFacts: {
          title: 'Quick Facts: AI Geopolitics at a Glance',
          items: [
            '**EU AI Act:** World\'s first binding AI law. High-risk enforcement: August 2, 2026 (may be delayed to December 2, 2027 by Digital Omnibus, pending trilogue agreement scheduled May 13, 2026). Fines: up to €35 million or 7% of global annual revenue.',
            '**US AI Policy:** No federal AI law. Trump Administration pursuing state law preemption via EO 14365 (December 2025), National Framework (March 2026), and proposed TRUMP AMERICA AI Act (March 2026). Multiple implementation deadlines missed as of May 2026 (FTC statement due March 11, Commerce evaluation due March 11).',
            '**China AI Governance:** CAC (Cyberspace Administration of China) pre-launch assessment mandatory. Content filters block CPC criticism, Taiwan/Tibet/Xinjiang discussions, and content undermining "socialist core values." Filters return HTTP 200 with `is_safe: 0` flag (not 4xx errors). PIPL requires data residency for Chinese personal data.',
            '**Hardware Chokepoints:** Nvidia controls ~80% of AI training GPU market. TSMC fabricates ~90% of advanced semiconductors. Both are geopolitical flashpoints. US CHIPS Act ($52B) aims to reduce TSMC dependency.',
            '**DeepSeek R1 Impact:** Exceeded GPT-5.5 on reasoning/coding (AIME 2024, MATH, HumanEval) at estimated ~$6M training cost (94% reduction vs. frontier model estimates; cost figure disputed). Trained on China-restricted Nvidia H800 GPUs. Demonstrates hardware export controls have limits.',
            '**Global Regulatory Conflict:** EU focuses on rights and safety; US focuses on innovation and competitiveness; China focuses on state control and strategic advantage. Organizations deploying AI globally must navigate three incompatible frameworks simultaneously.',
          ],
        },

        euImplications: {
          title: 'If You\'re an EU-Based Organization: Critical Compliance Deadlines',
          content: [
            '**The EU AI Act is binding and enforced as of August 2026.** If your organization is EU-headquartered or serves EU users, you must comply with its four-tier risk classification system. Fines for prohibited practices reach €35 million or 7% of global turnover — whichever is higher. Non-compliance is not negotiable.',
            '**If you deploy GPT-5.5, Claude Opus 4.8, or Gemini 3.1 Pro in the EU, you must audit their General Purpose AI (GPAI) compliance documentation.** OpenAI, Anthropic, and Google published transparency documentation (training data summaries, capability limitations, safety testing) as of August 2025. Store these attestations as proof of compliance — regulators will ask.',
            '**High-risk AI systems (hiring, credit decisions, healthcare, law enforcement) require conformity assessments before deployment.** This means testing for bias, documentation of human oversight mechanisms, and audit trails of all AI decisions. Open-weights models deployed locally (LLaMA via Ollama, Mistral Large) satisfy data residency requirements — no data leaves your infrastructure, and you control the audit trail.',
            '**The Brussels Effect applies to you.** If your AI system reaches a single EU resident, the EU AI Act applies — even if your company is headquartered in the US or China. This means enforcing the same compliance level globally is often simpler than maintaining multiple configurations.',
          ],
        },

        promptEngineerTakeaways: {
          title: 'Key Takeaways for Prompt Engineers',
          isTldr: true,
          items: [
            'Chinese AI APIs (DeepSeek, ERNIE 4.0, Qwen via Alibaba Cloud) filter content at the API level — political topics, CPC criticism, and Taiwan/Tibet/Xinjiang return `is_safe: 0` in HTTP 200 responses, not HTTP 4xx. Handle these explicitly in your application code.',
            'Mistral models and local Ollama deployments satisfy EU AI Act data residency requirements — prompts and outputs never leave your infrastructure. This is the lowest-friction path to EU GDPR + AI Act compliance for prompt engineers.',
            'GPT-5.5 and Claude Opus 4.8 are GPAI-compliant under the EU AI Act as of August 2025. You can use them in EU-facing deployments without additional model-level compliance work — your obligation is at the application (deployer) level, not the model level.',
            'The Brussels Effect means prompts sent to US-hosted models for products used by EU residents are subject to EU AI Act requirements — even if your company is not EU-based.',
            'For multi-jurisdictional testing, dispatch the same prompt to Mistral (EU-compliant), GPT-5.5 (US/GPAI), and Qwen (China-accessible) simultaneously to benchmark outputs across regulatory contexts. PromptQuorum supports this natively.',
          ],
        },

        promptOptimizationByRegion: {
          title: 'How Geopolitics Changes Prompt Optimization: Country-by-Country',
          content: [
            '**Where your AI output is consumed determines what your prompts must do — and what they must avoid.** Language affects model performance directly: a prompt written in English sent to a Chinese model (ERNIE 4.0, Qwen) underperforms the same prompt written in Mandarin. Law affects prompt design structurally: EU AI Act disclosure requirements, US sector regulations, and China\'s CAC content filters each impose different constraints on how prompts can be framed, what outputs can be generated, and how applications must handle responses.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: 'Pro Tip: Write Prompts in the Target Language',
              text: 'GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro perform significantly better on German, French, Japanese, and Chinese tasks when the prompt itself is in that language. English prompts for non-English output add a translation layer that degrades quality. If you\'re optimizing model performance for a specific country, write your prompts in that country\'s language from the start.',
            },
          ],
          tableFormat: true,
          columns: ['Region', 'Legal constraint on prompts', 'Language optimization', 'Recommended model'],
          rows: [
            {
              'Region': 'European Union',
              'Legal constraint on prompts': 'EU AI Act: prompts generating content that interacts with EU consumers must include AI disclosure. GDPR: prompts must not include personal data without legal basis. High-risk AI applications (HR, credit, healthcare) require human oversight — prompts must not automate final decisions.',
              'Language optimization': 'Write prompts in the target language (German, French, etc.) — GPT-5.5 and Claude Opus 4.8 perform significantly better on non-English tasks when prompts are in the same language as the desired output. Explicitly specify output language in system prompts.',
              'Recommended model': 'Mistral Large (French, EU-headquartered), local Ollama deployment (data never leaves infrastructure), or GPT-5.5/Claude with EU-region API endpoints and SCCs.',
            },
            {
              'Region': 'United States',
              'Legal constraint on prompts': 'No federal AI law, but sector rules apply: HIPAA (healthcare — PHI must not appear in prompts), CCPA/CPRA (California — personal data in prompts triggers consumer rights), FTC Act (prompts must not generate deceptive content in consumer contexts). State biometric laws (Illinois BIPA) restrict prompts that process facial/voice data.',
              'Language optimization': 'US frontier models (GPT-5.5, Claude Opus 4.8) are English-optimized and perform at their ceiling on English prompts. For Spanish-language US markets, explicitly instruct the model in Spanish or use a bilingual system prompt — do not rely on auto-detection.',
              'Recommended model': 'GPT-5.5 or Claude Opus 4.8 for general use. For regulated healthcare or financial prompts, use API with SCCs and avoid sending PHI/PII in prompt context.',
            },
            {
              'Region': 'China',
              'Legal constraint on prompts': 'CAC Generative AI Measures (2023): prompts that request content on CPC leadership, Taiwan/Tibet/Xinjiang independence, the 1989 Tiananmen events, or anything undermining "socialist core values" will be blocked. Returned as HTTP 200 with `is_safe: 0`. PIPL: prompts containing personal data of Chinese users must not be routed to non-China servers.',
              'Language optimization': 'Write prompts in Simplified Chinese (Mandarin) for Chinese-language tasks — Qwen 3 and ERNIE 4.0 score 10–20% higher on Chinese-language benchmarks (C-Eval) vs the same prompt in English. Use Pinyin or English for technical terminology when no Chinese equivalent exists.',
              'Recommended model': 'Qwen 3 72B (self-hosted outside China, no CAC filters) for cross-border tasks. ERNIE 4.0 via Qianfan API (CAC-registered) for consumer-facing China deployments. DeepSeek R1 for reasoning tasks that do not touch filtered content areas.',
            },
            {
              'Region': 'UK / Post-Brexit',
              'Legal constraint on prompts': 'UK GDPR (equivalent to EU GDPR) applies to personal data. UK AI Safety Institute focuses on frontier model evaluation, not application-level compliance. No mandatory AI disclosure law — UK chose a pro-innovation, sector-led approach. OFCOM regulates AI-generated content in broadcast contexts.',
              'Language optimization': 'British English spellings and idioms in prompts improve output quality for UK-facing content. GPT-5.5 responds to explicit "UK English" instructions in system prompts; without them, defaults to American English.',
              'Recommended model': 'GPT-5.5 or Claude Opus 4.8. UK-EU data transfers require SCCs post-Brexit — UK adequacy decision from EU in place but subject to review.',
            },
            {
              'Region': 'Japan',
              'Legal constraint on prompts': 'Japan\'s Act on Protection of Personal Information (APPI) restricts use of personal data in AI prompts. Japan has no AI-specific law (as of 2026) — guidance from METI and Ministry of Internal Affairs is voluntary. Japan participated in the Hiroshima AI Process — adherence to its 11 principles is encouraged for Japanese enterprises.',
              'Language optimization': 'Japanese prompts on Japanese-language tasks outperform English prompts across all major models. GPT-5.5 and Claude Opus 4.8 handle Japanese well; Rakuten AI and NTT LLMs are available for Japan-specific deployments. Avoid casual (tame-go) register in system prompts — polite (keigo) framing improves compliance and output quality for Japanese business contexts.',
              'Recommended model': 'GPT-5.5 or Claude Opus 4.8 for general Japanese tasks. Rakuten AI (Rakuten Group) or NTT LLMs for Japan-domestic compliance-sensitive deployments.',
            },
          ],
        },

        keyStatistics: {
          title: 'AI Geopolitics: Key Data Points',
          content: [
            'The following figures represent the scale of government AI investment, hardware concentration, and research capacity that define the current geopolitical competition in artificial intelligence.',
          ],
          items: [
            '**Government AI investment — United States:** $52 billion allocated by the CHIPS and Science Act (2022) for domestic semiconductor manufacturing, plus $200 billion for science R&D. The National AI Initiative Act funds AI research across 25 federal agencies.',
            '**Government AI investment — China:** Estimated ¥1 trillion ($140 billion) in government-directed AI and semiconductor investment 2021–2025, including the National New Generation AI Development Plan targeting global AI leadership by 2030.',
            '**Government AI investment — European Union:** €1 billion from the European Innovation Council AI fund; member state strategies add €10+ billion: Germany €5 billion (2019–2025), France €2 billion, UK £1 billion in AI safety and compute.',
            '**Chip manufacturing concentration:** TSMC (Taiwan) manufactures approximately 90% of the world\'s most advanced chips below 7nm. ASML (Netherlands) is the sole manufacturer of EUV lithography machines required for advanced node fabrication — giving the Netherlands a structural chokepoint in global chip supply.',
            '**Nvidia GPU market share:** Nvidia holds approximately 80% market share in AI training GPUs. The H100 and H200 series power the majority of frontier model training at OpenAI, Google DeepMind, Anthropic, and Baidu.',
            '**AI researcher distribution:** The US employs approximately 40% of the world\'s top AI researchers by publication impact (Stanford HAI 2024 AI Index). China produces the largest number of computer science PhDs — approximately 50,000 per year — and accounts for ~30% of top AI conference authors.',
            '**AI patent filings:** China filed approximately 70% of global AI patents in 2022 (WIPO Global Innovation Index). The US leads on citations and commercialized inventions; China leads on volume.',
            '**Model training cost compression:** 94% cost reduction — GPT-4 estimated at ~$100 million in training compute (2023) vs DeepSeek R1\'s reported ~$6 million (January 2025). This gap demonstrates that US compute-cost export controls cannot permanently constrain Chinese frontier AI development.',
            '**EU AI Act coverage:** The Act covers 450 million consumers across 27 EU member states. The systemic risk threshold for GPAI models is 10²⁵ FLOPs of training compute — the level at which additional adversarial testing requirements apply.',
            '**Bletchley Declaration (November 2023):** Signed by 28 nations including the US, China, and EU member states — the broadest international AI safety consensus to date, though non-binding.',
          ],
          image: '/images/ai-regulation-timeline-en.svg',
          imageCaption: 'Global AI regulatory timeline 2022–2026: EU AI Act proposal (2021), CHIPS Act (2022), CAC algorithm rules (2022–2023), EU AI Act adopted (2024), enforcement phase-in Jan 2025.',
        },

        qaWhyStrategic: {
          title: 'Why is AI Strategically Important?',
          content: [
            'AI is strategically important because it amplifies capability across every dimension of national power simultaneously — economic productivity, military effectiveness, intelligence analysis, and cyber operations. Nations with leading AI can automate scientific research, optimize military logistics, process surveillance data at scale, and develop autonomous weapons systems. The OECD projects AI could add $15.7 trillion to global GDP by 2030, making AI leadership the equivalent of industrial leadership in the 20th century. Countries that fall behind in AI capability face compounding disadvantages across defense, trade, and diplomacy.',
          ],
        },

        qaWhichCountriesDominate: {
          title: 'Which Countries Dominate AI Development?',
          content: [
            'The United States dominates frontier model capability — OpenAI (GPT-5.5), Anthropic (Claude), and Google DeepMind (Gemini) are all US-headquartered. China leads on AI patent volume (~70% of global patents in 2022 per WIPO) and has the most capable domestic models outside the US: Alibaba Qwen 3, Baidu ERNIE 4.0, and DeepSeek R1. The EU leads on AI regulation but trails on frontier capability — France\'s Mistral AI is the strongest European contender. The UK, Canada, and UAE are investing in AI as independent actors rather than aligning exclusively with either US or Chinese infrastructure.',
          ],
        },

        qaChipsRole: {
          title: 'What Role Do Chips Play in AI Geopolitics?',
          content: [
            'Semiconductor chips are the physical substrate of AI capability. Training frontier models requires thousands of specialized GPUs running for months — a single training run for a large model can cost $10–100 million in compute. Nvidia holds approximately 80% of the AI training GPU market; TSMC in Taiwan fabricates them. This creates two geopolitical chokepoints: the US can restrict Nvidia GPU exports to adversary nations (restricting A100 and H100 sales to China since 2022), and any disruption to TSMC\'s operations would immediately reduce global AI hardware supply. The US CHIPS and Science Act ($52 billion) explicitly funds domestic fab capacity to reduce this single-point dependency.',
          ],
        },

        qaHowAIChangePower: {
          title: 'How Could AI Change Global Power?',
          content: [
            'AI could shift global power by making AI-leading nations disproportionately powerful relative to their economic or population size. Militarily, AI enables autonomous targeting, logistics optimization, and signals intelligence processing at speeds no human-staffed system can match. Economically, AI productivity gains compound — nations with frontier AI access could sustain GDP growth rates that widen the gap with those without. Diplomatically, nations that export AI infrastructure — hardware, models, governance frameworks — gain soft power and create dependency relationships comparable to those created by oil exports or telecommunications infrastructure in earlier eras. The EU\'s Brussels Effect is already doing this through regulation: the EU AI Act shapes global AI development without the EU leading on model capability.',
          ],
        },

        geopoliticsOfAI: {
          title: 'The Geopolitics of Artificial Intelligence',
          content: [
            '**The geopolitics of artificial intelligence is the study of how states use AI capability, AI regulation, and AI infrastructure as instruments of power.** It encompasses three distinct competitions: the race to build the most capable models, the contest over whose regulatory framework governs global AI deployment, and the struggle to control the hardware supply chains that make frontier AI possible.',
            'Each dimension has concrete consequences for organizations. Model capability determines what AI tools are available. Regulatory frameworks determine what tools are permissible and what documentation is required. Hardware control determines which nations can sustain frontier AI development independently — and which cannot. The US, China, and EU are pursuing incompatible strategies across all three dimensions simultaneously.',
          ],
        },

        keyEntityRelationships: {
          title: 'Key Entities in AI Geopolitics and Their Relationships',
          content: [
            '**AI regulation** is the body of laws, executive orders, and voluntary frameworks that govern how artificial intelligence systems are developed, deployed, and governed. AI regulation is produced by sovereign states and international bodies; the three primary regulatory regimes are the EU AI Act (European Union), the NIST AI Risk Management Framework (United States), and the CAC Generative AI Measures (China).',
            '**The US-China tech rivalry** is the bilateral competition between the United States and China for leadership in semiconductors, artificial intelligence, and advanced manufacturing. The rivalry is expressed through US export controls on Nvidia GPUs, China\'s domestic substitution strategy (Made in China 2025), and competing AI governance frameworks. The EU is a third actor — not a bilateral party — that shapes the rivalry through its regulatory power.',
            '**The EU AI Act** is a regulation passed by the European Parliament in March 2024. It is enforced by the EU AI Office and national market surveillance authorities. It applies to any organization — regardless of headquarters location — whose AI systems affect EU users. The EU AI Act is related to the Brussels Effect: because it applies extraterritorially, it effectively regulates OpenAI, Google DeepMind, and Anthropic globally.',
            '**NVIDIA** is a US semiconductor company that designs AI training GPUs (H100, H200, B200 series). NVIDIA\'s hardware is the primary compute substrate for training GPT-5.5, Claude, Gemini, and most frontier AI models. US export controls on NVIDIA GPUs to China are a central mechanism in the US-China tech rivalry. NVIDIA\'s market position (~80% AI GPU share) makes it a geopolitical actor as well as a commercial one.',
            '**TSMC** (Taiwan Semiconductor Manufacturing Company) is a Taiwanese chip foundry that manufactures advanced semiconductors for NVIDIA, Apple, AMD, and Google. TSMC\'s geographic location in Taiwan — and the island\'s disputed political status — makes TSMC a critical variable in AI geopolitics. The CHIPS and Science Act was enacted partly to reduce US dependency on TSMC by funding domestic US fabs.',
            '**DeepSeek** is a Chinese AI laboratory (backed by High-Flyer Capital Management) that released DeepSeek R1 in January 2025. DeepSeek R1 exceeded GPT-5.5 on reasoning and coding benchmarks (AIME 2024, MATH-500, HumanEval) while training at estimated ~$6 million cost — 94% less than frontier model estimates — using China-restricted NVIDIA H800 GPUs. DeepSeek\'s release weakened the argument that US export controls could permanently limit Chinese frontier AI development.',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: '5 Geopolitical Dimensions of AI',
          content: [
            'AI geopolitics operates across five distinct dimensions. Each represents a separate arena of competition between the US, China, and the EU — and each creates different obligations and risks for organizations deploying AI.',
          ],
          items: [
            '**1. Economy.** AI drives productivity, automation, and GDP growth. Nations with superior AI capability gain manufacturing efficiency, financial modeling advantages, and faster scientific discovery. The OECD projects AI could add $15.7 trillion to global GDP by 2030 — the majority captured by leading AI nations.',
            '**2. Military.** AI enables autonomous weapons systems, predictive logistics, battlefield intelligence processing, and cyber operations at machine speed. The US, China, and Russia are all developing AI-enabled military systems. The US DoD\'s Joint Artificial Intelligence Center (JAIC) and China\'s Military-Civil Fusion strategy both prioritize AI for national defense.',
            '**3. Intelligence.** AI processes satellite imagery, intercepts signals, and analyzes open-source data at scales impossible for human analysts. NSA, GCHQ, and China\'s MSS all use AI for intelligence collection and analysis. AI-generated synthetic media (deepfakes) are an emerging intelligence and influence operation tool.',
            '**4. Infrastructure.** AI depends on physical infrastructure: semiconductor fabs (TSMC, Samsung, Intel), data centers, undersea cables, and power grids. Nations that control critical AI infrastructure — chip manufacturing, cloud platforms, training compute — hold structural leverage over those that do not.',
            '**5. Global governance.** Which regulatory framework becomes the global default determines what AI systems can do, what data they can use, and which organizations can deploy them. The EU AI Act, US NIST frameworks, and China\'s CAC regulations represent three competing governance models — and the Brussels Effect means the EU\'s model already applies beyond its borders.',
          ],
        },

        threeWayRace: {
          title: 'The AI Arms Race: US, China, and the EU',
          content: [
            '**Three incompatible visions of AI governance are competing for global adoption — the US prioritizes innovation and competitiveness, China uses state direction to achieve strategic AI dominance, and the EU builds a rights-based legal framework that exports its standards globally through the Brussels Effect.** This AI arms race is primarily civilian: the leading labs are private companies (OpenAI, Anthropic, Google DeepMind, Baidu, Alibaba), but the stakes — regulatory control, hardware supply chains, and talent — are geopolitical.',
            'The race is not only about who builds the most capable models. It is about which regulatory framework becomes the global default. The EU AI Act, by applying to any AI system deployed to EU users, has already made Brussels the effective regulator of OpenAI, Anthropic, and Google DeepMind globally. Hardware control is a third dimension: the CHIPS and Science Act ($52 billion) and Nvidia GPU export controls aim to limit China\'s compute access. DeepSeek R1\'s January 2025 release — competitive with GPT-5.5 at a fraction of the training cost — demonstrated those controls have limits. See [open-source vs proprietary LLMs](/prompt-engineering/open-source-vs-proprietary-llms) for how these dynamics affect model availability.',
          ],
          items: [
            '**US position:** Leads on frontier model capability (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro), chip design (Nvidia, AMD), and AI investment ($67B private investment in 2023 per OECD). No unified federal AI law — accelerates deployment but creates compliance fragmentation.',
            '**China\'s position:** Leads on AI patent volume, facial recognition scale, and state-directed infrastructure deployment. Models (Qwen 3, ERNIE 4.0, DeepSeek R1) are competitive on many benchmarks. Hardware dependence on Nvidia architectures is the primary strategic vulnerability export controls target.',
            '**Europe\'s position:** Leads on AI regulation — the EU AI Act is the global reference framework — and open-weights research (Mistral from France). Trails on frontier model capability and private investment. Compensates through regulatory leverage: the Brussels Effect forces US and Chinese providers to comply with EU standards for global products.',
            '**The hardware layer:** Nvidia H100/H200 GPUs dominate AI training. US export controls restrict sales to China. DeepSeek R1 trained on restricted H800 GPUs at reported ~$6M — a 94% cost reduction vs GPT-5.5 training estimates — demonstrating hardware controls have not halted Chinese frontier AI.',
          ],
          image: '/images/regional-ai-players-en.svg',
          imageCaption: 'US: OpenAI, Anthropic, Google DeepMind (VC-funded). EU: Mistral, Hugging Face (open-source, underfunded vs US). China: Baidu, Alibaba, Tencent (state-backed, CAC oversight).',
        },

        euAiAct: {
          title: 'The EU AI Act: What It Actually Requires',
          content: [
            '**The EU AI Act classifies AI systems into four risk tiers, with requirements and fines scaled to the level of risk the system poses to fundamental rights and safety.** The European Parliament passed the Act in March 2024 with 523 votes in favor, 46 against, and 49 abstentions — the widest political consensus of any major AI legislation globally.',
            'The Act applies to providers placing AI systems on the EU market, deployers using AI systems within the EU, and importers and distributors — regardless of where these organizations are headquartered. A US company whose AI output is used in EU member states must comply.',
          ],
          items: [
            '**Unacceptable Risk (prohibited):** Social scoring by public authorities; real-time biometric identification in public spaces (narrow law enforcement exceptions permitted); AI exploiting cognitive vulnerabilities; untargeted facial image scraping. These are banned from August 2024 onwards.',
            '**High Risk:** AI in critical infrastructure, education, employment, essential services (credit, benefits), law enforcement, border control, and administration of justice. Requires conformity assessments, transparency documentation, human oversight, and registration in the EU database.',
            '**Limited Risk:** Chatbots and AI-generated content. Requires disclosure — users must know they are interacting with AI.',
            '**Minimal Risk:** Spam filters, AI in video games, recommendation systems without significant impact. No specific obligations beyond existing law.',
            '**General Purpose AI (GPAI):** Models like GPT-5.5, Claude, and Gemini must publish training data summaries, comply with EU copyright law, and report serious incidents. Models with systemic risk (trained with >10^25 FLOPS) face additional adversarial testing requirements. GPAI rules applied August 2025.',
            '**Enforcement:** EU AI Office (within European Commission) oversees GPAI models. National market surveillance authorities enforce high-risk AI rules. Fines: up to €35M or 7% global turnover for prohibited practices; €15M or 3% for high-risk violations.',
            '**Timeline:** Prohibited practices: August 2024. GPAI obligations: August 2025. High-risk AI systems: August 2026. High-risk AI in regulated products: August 2027.',
          ],
          image: '/images/ai-risk-tiers-comparison-en.svg',
          imageCaption: 'EU AI Act 4-tier risk system: Unacceptable (banned Aug 2024), High-risk (conformity assessment), Limited (disclosure only), Minimal (no obligations).',
        },

        digitalOmnibus: {
          title: 'Digital Omnibus: EU AI Act High-Risk Compliance Deadline in Flux',
          content: [
            '**As of May 2026, the EU\'s high-risk AI compliance deadline of August 2, 2026 may be delayed to December 2, 2027 — but adoption is not guaranteed.** The European Commission proposed the Digital Omnibus in November 2025 to address unintended consequences and implementation challenges in the EU AI Act. Both the European Parliament and Council of the EU signaled support for a deferral. However, inter-institutional negotiations have stalled.',
            '**Trilogue Status:** The first trilogue (negotiation between Parliament, Council, and Commission) in February 2026 found broad political agreement on urgency but left technical details unresolved. The second trilogue on April 28, 2026 ended without consensus. A third trilogue was scheduled for May 13, 2026. If adopted before August 2, 2026, the deferral becomes binding; if not, the original August 2, 2026 deadline applies as written.',
            '**What organizations should do:** Plan for August 2, 2026 as your binding compliance deadline for high-risk AI systems. The Digital Omnibus deferral may extend your timeline to December 2027, but assuming the delay will pass is a risk. Achieving August 2026 compliance now means you are protected either way — if the Omnibus passes, you can optimize further during the extra months; if it doesn\'t, you\'re already compliant.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Warning: Digital Omnibus Adoption Uncertain',
              text: 'The Digital Omnibus deferral from August 2026 to December 2027 is NOT guaranteed. The second trilogue on April 28, 2026 reached no consensus. A third trilogue is scheduled for May 13, 2026. Do NOT assume the delay will pass. Plan your compliance roadmap for August 2, 2026 as the binding deadline. If the Omnibus is adopted later, you gain extra time; if it isn\'t, you\'re already compliant.',
            },
          ],
        },

        euMemberStates: {
          title: 'EU Member States: National AI Strategies',
          content: [
            '**Every EU member state has adopted a national AI strategy, but investment levels, focus areas, and implementation pace vary significantly.** France and Germany lead on funding; the Nordic states lead on governance frameworks; Central and Eastern European states are increasingly integrating AI into defence and public administration.',
          ],
          items: [
            '**Germany:** Federal AI Strategy (Nationale KI-Strategie), updated 2023. €5 billion invested in AI research, infrastructure, and talent 2019–2025 across federal programs. Six AI competence centers established at major universities. Bundestag debates on AI liability ongoing. Fraunhofer Society and DFKI (German Research Center for Artificial Intelligence) are key research institutions.',
            '**France:** €2 billion public AI investment announced by President Macron (2024). France AI (government coordination body) manages national strategy. Paris hosted the AI Action Summit in February 2025 — the first G7-level AI governance summit under French EU presidency. CNRS and INRIA lead academic AI research. France supports open-weights AI as a strategic alternative to US API dependency.',
            '**Netherlands:** National AI Strategy 2024 update, AI regulation sandbox operated by ACM (Authority for Consumers and Markets). Amsterdam hosts SURF (national research network) AI cluster. Dutch Data Protection Authority (AP) issued GDPR enforcement guidance specifically for AI systems.',
            '**Poland:** National AI Development Program focuses on AI for defence, cybersecurity, and public administration. Poland is among the highest per-capita spenders on defence tech in NATO and integrates AI into military procurement. Warsaw hosts a growing AI startup ecosystem, partly driven by Ukrainian tech talent relocation post-2022.',
            '**Spain:** Spain\'s National AI Strategy (ENIA) allocates €600 million 2021–2025. Real Instituto Elcano research on AI and geopolitics is internationally cited. Spain established the AESIA (Spanish Agency for the Supervision of Artificial Intelligence) — the first national AI regulator in the EU, established 2023.',
            '**Sweden:** Swedish AI Commission published its report in 2024 with 60+ recommendations covering education, public sector deployment, and innovation. Vinnova (Sweden\'s innovation agency) funds AI research. Sweden is home to Spotify\'s AI recommendation systems and H&M\'s AI-driven inventory management — frequently cited as private-sector AI adoption case studies.',
            '**Italy:** Italy held the G7 presidency in 2024, which produced the Hiroshima AI Process Code of Conduct — 11 guiding principles for advanced AI developers adopted by G7 nations. Italy\'s Garante (data protection authority) temporarily blocked ChatGPT in March 2023 over GDPR concerns — later resolved after OpenAI implemented transparency measures. This was the first national ChatGPT restriction in the EU.',
          ],
        },

        franceMistral: {
          title: 'France & Mistral: Building European AI Independence',
          content: [
            '**France is building a strategic counter to US AI dominance through public investment and Mistral AI — positioning open-weights models as Europe\'s path to AI sovereignty.** Mistral represents the EU\'s most viable alternative to GPT-5.5 and Claude, and France\'s €2 billion AI investment is explicitly designed to fund companies like Mistral and reduce reliance on OpenAI, Google, and Anthropic.',
            '**Mistral AI (founded 2023):** Founded by Arthur Mensch, Guilaume Blanc, and Tim Caron — all former Meta employees. Mistral released Mistral Small (open-weights) in September 2023, followed by Mistral Large 2 (competitive with GPT-5.5 on many tasks). Mistral Large 2 scores 81.2% on MMLU vs GPT-5.5\'s 88.7%, but matches proprietary models on classification, summarization, and extraction tasks. 123K token context window. Licensed under Mistral Community License (permits commercial use; derivative naming restrictions similar to LLaMA).',
            '**Why France chose open-weights:** France\'s position is that proprietary APIs create vendor lock-in, data residency risks, and long-term dependency on US companies. Open-weights models can be deployed on European infrastructure, keeping data within EU jurisdictions and avoiding GDPR/AI Act friction with US cloud providers. This aligns with the Brussels Effect — by ensuring Mistral compliance with the EU AI Act, France strengthens Europe\'s regulatory leverage globally.',
            '**Government support:** French government backing via La Caisse des Dépôts et Placements (state investment fund) and direct subsidies. Mistral received €385 million Series B funding (February 2024) with support from French strategic investors. Positioned as a "European champion" in AI — similar to how Airbus was built as a European aerospace counterweight to Boeing.',
          ],
        },

        nonEuEurope: {
          title: 'Non-EU Europe: UK, Switzerland, Norway, Ukraine',
          content: [
            '**Four major non-EU European states have chosen distinct AI governance paths, none of which align fully with the EU AI Act — creating a fragmented European regulatory landscape.** For organizations operating across European jurisdictions, this means compliance stacks differ between EU member states and neighbouring countries.',
          ],
          items: [
            '**United Kingdom:** Post-Brexit, the UK chose a pro-innovation, sector-led approach with no AI-specific legislation as of 2026. The existing regulators (FCA, ICO, Ofcom, CMA) apply their sector mandates to AI. The UK AI Safety Institute (AISI), established November 2023 following the Bletchley Park AI Safety Summit, conducts frontier model evaluations and publishes safety reports. The UK government committed £900 million to AI compute infrastructure. UK organizations are not subject to the EU AI Act but many comply voluntarily to maintain EU market access.',
            '**Switzerland:** Switzerland maintains AI neutrality — no national AI law, no plans for one. The Federal Council relies on existing legislation (data protection, product liability, sector regulation). Switzerland hosts the UN AI for Good Summit in Geneva annually, CERN\'s AI for science programs, and major European research institutions (ETH Zurich, EPFL). Swiss neutrality extends to AI governance: the country participates in OECD AI Principles but does not align with either the EU\'s regulatory approach or the US competitiveness framing.',
            '**Norway:** Norway participates in the European Economic Area (EEA), meaning the EU AI Act applies when it is incorporated into the EEA Agreement — an ongoing process. Norway\'s Government Pension Fund Global (the world\'s largest sovereign wealth fund, ~$1.8 trillion) has published AI investment criteria, requiring portfolio companies to disclose AI governance policies. Equinor (state energy company) has deployed AI for oil field optimization. The Norwegian Data Protection Authority (Datatilsynet) has been active on AI-related GDPR enforcement.',
            '**Ukraine:** Ukraine is the most active deployer of AI in a live conflict context. The Ukrainian military uses AI for drone targeting, signals intelligence, satellite image analysis, and logistics optimization. The Ministry of Digital Transformation (Mінцифра) has signed AI cooperation agreements with both the EU and the US. Ukraine applied for EU membership in 2022 and is aligning its digital legislation — including AI governance — with EU standards as part of accession requirements. Ukrainian AI startups (including those behind Grammarly and GitLab) have relocated teams to EU countries while maintaining technical operations.',
          ],
        },

        usStrategy: {
          title: 'US Strategy: Executive Orders, CHIPS Act, State Law Preemption',
          content: [
            '**The United States does not have a federal AI law, and the Trump administration\'s 2025 revocation of Biden\'s AI Safety Executive Order reversed the main federal safety framework — shifting US AI policy fully toward competitiveness. As of March 2026, Trump is pursuing aggressive federal preemption of state AI laws through Executive Order 14365 and proposed legislation.** This creates a regulatory gap between the US and EU that affects cross-Atlantic AI procurement and data sharing.',
          ],
          items: [
            '**Biden Executive Order on AI Safety (October 2023):** Required frontier AI developers to share safety test results with the US government, established NIST AI safety standards, addressed AI in critical infrastructure and national security. Revoked by President Trump in January 2025.',
            '**Trump AI Action Plan (2025):** Replaces Biden\'s EO with a focus on removing regulatory barriers to AI development, maintaining US leadership over China, and promoting AI export to allied nations. No mandatory safety reporting requirements for AI developers.',
            '**Executive Order 14365: Ensuring a National Policy Framework for AI (December 11, 2025):** Establishes an AI Litigation Task Force within the Department of Justice to challenge state AI laws in court. Directs the Commerce Secretary (90-day deadline, due March 11, 2026) to identify and publish "onerous" state AI laws — defined as laws requiring AI models to alter truthful outputs or laws compelling disclosure that would violate the First Amendment. Authorizes withholding federal BEAD broadband infrastructure funds from states with "onerous" AI laws. The explicit goal is federal preemption of state AI laws.',
            '**White House National AI Legislative Framework (March 20, 2026):** A comprehensive framework covering 7 policy areas: protecting children and empowering parents, safeguarding communities, protecting digital replicas, preventing government censorship, workforce development, state law preemption, and light-touch innovation promotion. The framework urges Congress to adopt a "federally unified, innovation-oriented regime centered on preemption of state AI laws."',
            '**TRUMP AMERICA AI Act (March 18, 2026, Senator Marsha Blackburn):** A 291-page legislative discussion draft that codifies federal AI governance, establishes national standards on training data and deepfakes, mandates artist/creator protections, and includes "duty of care" requirements for AI developers. Sunsets Section 230 of the Communications Decency Act. Aligns with Trump\'s executive order on state law preemption.',
            '**GUARDRAILS Act (March 20, 2026, Rep. Beyer et al.):** Democratic counter-proposal to the TRUMP AMERICA Act. Would repeal Trump\'s AI EO 14365 and explicitly block federal preemption of state AI laws, preserving state regulatory authority. Reflects the fundamental conflict between federal preemption (Trump) and state autonomy (Democrats) that will define US AI policy 2026–2029.',
            '**Missed Implementation Deadlines (as of May 2026):** EO 14365 required the FTC to issue an AI policy statement by March 11, 2026 (NOT YET ISSUED as of May 4). The Commerce Department evaluation of state AI laws was also due March 11, 2026 (NOT YET PUBLISHED). Implementation is significantly lagging behind policy ambition.',
            '**Colorado AI Act (February 1, 2026 enforcement):** The first US state law addressing algorithmic discrimination in high-stakes decisions (hiring, lending, insurance, etc.). Went into effect February 1, 2026. Trump\'s EO 14365 explicitly cited Colorado\'s law as an example of "excessive" regulation. Compliance deadline extended to June 30, 2026. This law exemplifies the state regulations Trump is seeking to preempt federally.',
            '**CHIPS and Science Act ($52 billion):** Signed August 2022. Funds domestic semiconductor manufacturing, R&D, and workforce development. Reduces US dependency on Taiwan Semiconductor Manufacturing Company (TSMC) for advanced chips. Intel, TSMC, and Samsung are building US fabs with CHIPS Act funding.',
            '**Export controls on AI hardware:** The Biden administration restricted exports of advanced Nvidia A100 and H100 GPUs to China and other countries of concern. The restrictions were expanded in October 2023 and October 2024. Nvidia created China-specific chips (A800, H800) that fell within export limits — these were subsequently restricted too.',
            '**NIST AI Risk Management Framework (AI RMF 1.0):** Published January 2023. A voluntary framework — not legally binding — covering AI trustworthiness across seven dimensions: valid/reliable, safe, secure/resilient, explainable/interpretable, privacy-enhanced, fair with managed bias, accountable/transparent. Widely adopted by US federal agencies and large enterprises as a compliance baseline.',
            '**NSF National AI Research Institutes:** $200M+ invested across 25 AI research institutes at US universities. Focuses on fundamental AI research, safety, ethics, and domain applications (healthcare, agriculture, climate).',
          ],
        },

        chinaStrategy: {
          title: 'China\'s AI Strategy: Made in China 2025, CAC Regulations, DeepSeek',
          content: [
            '**China\'s AI strategy combines state-directed industrial policy, restrictive domestic content regulation, and aggressive international AI diplomacy — a combination that has produced competitive frontier models despite US hardware export controls.** China\'s approach treats AI primarily as a strategic capability for economic development, national security, and social governance.',
          ],
          items: [
            '**Made in China 2025 and New Generation AI Development Plan (2017):** China\'s 2017 AI plan targeted global AI leadership by 2030 across research, talent, product development, and regulation. It allocated $15 billion in state funding and set benchmarks for AI patent output, research citations, and industry revenue. AI is designated a core strategic technology alongside semiconductors and quantum computing.',
            '**Cyberspace Administration of China (CAC) algorithm regulations (March 2022):** Required all algorithm-based recommendation systems serving Chinese users to register with the CAC, disclose how algorithms work, and allow users to opt out of personalized recommendations. Extended to generative AI in July 2023 — all generative AI services must register, pass a security assessment, and ensure outputs align with "socialist core values."',
            '**DeepSeek R1 (January 2025):** Released by DeepSeek (a Chinese AI lab backed by High-Flyer hedge fund), R1 exceeded GPT-5.5 on multiple benchmarks including AIME 2024 (79.8%), MATH-500 (97.3%), and HumanEval coding tasks. Trained on Nvidia H800 GPUs — the China-specific variant within export control limits — with estimated training cost of ~$6 million (94% reduction vs. frontier model estimates; figure is disputed but significant cost advantage clear). The release triggered a significant drop in Nvidia\'s stock price and accelerated US policy debates about the effectiveness of hardware export controls.',
            '**Huawei Ascend chips:** Huawei\'s Ascend 910B and 910C chips are positioned as domestic alternatives to Nvidia GPUs for AI training. Performance remains below Nvidia H100 on most benchmarks but sufficient for training medium-scale models. Major Chinese tech companies (Baidu, Alibaba, ByteDance) have begun migrating some workloads to Ascend to reduce Nvidia dependency.',
            '**Belt and Road AI diplomacy:** China exports AI surveillance infrastructure (facial recognition, smart city systems) to developing nations through BRI partnerships. Providers include Huawei, Alibaba Cloud, and ZTE. This exports Chinese AI governance norms — including algorithmic social management — to partner countries, creating a parallel AI standards ecosystem outside the OECD/EU framework.',
            '**Leading Chinese AI models:** Alibaba Qwen 3, Baidu ERNIE 4.0, ByteDance Doubao, Z.ai GLM-4. These are competitive on Chinese-language tasks and increasingly on multilingual benchmarks. [Open-source vs proprietary LLM tradeoffs](/prompt-engineering/open-source-vs-proprietary-llms) affect Chinese model adoption — Qwen\'s open-weights release has attracted international developers.',
          ],
        },

        chinaModelsAccessibility: {
          title: 'China for Prompt Engineers: Which Models Are Available',
          content: [
            '**If your product serves users in China, you are operating in a distinct AI ecosystem with different available models, mandatory content filters, and a pre-launch approval requirement that has no equivalent in the EU or US.** Foreign models — GPT-5.5, Claude, Gemini — are inaccessible from mainland China without a VPN. Your options are limited to domestically registered alternatives.',
            '**Available models in China:** Alibaba Qwen 3 (open-weights, 7B–72B, 128K context, API via Alibaba Cloud), Baidu ERNIE 4.0 (API via Qianfan platform), ByteDance Doubao (API via Volcano Engine), Z.ai GLM-4 (API via Z.ai platform), and DeepSeek R1/V3 (API via DeepSeek platform). Qwen 3 72B is the strongest open-weights option — you can self-host it outside China while using it for Chinese-language tasks. It scores within 5 percentage points of GPT-5.5 on MMLU and outperforms on Chinese-specific benchmarks (C-Eval).',
          ],
        },

        chinaContentFilters: {
          title: 'Content Filters & CAC Requirements: Critical Constraints',
          content: [
            '**All generative AI services in China must comply with the CAC Generative AI Measures (2023).** Content restrictions are enforced at the model and API level, not just by law. Services must implement filters that block output on: CPC leadership criticism, Taiwan/Tibet/Xinjiang independence discussions, politically sensitive historical events (June 4, 1989), content undermining "socialist core values," and material the CAC deems a threat to state security. These filters are built into the API — you cannot configure them out.',
            '**Critical implementation detail:** Requests that trigger filters return HTTP 200 (not HTTP 4xx) with an `is_safe: 0` flag in the response body — not a traditional error. This requires explicit application-level handling in your code. If you call ERNIE 4.0 or DeepSeek with a filtered prompt, the API returns a valid HTTP response with sanitized output or an error flag, not a 4xx status.',
            '**Pre-launch CAC security assessment is mandatory.** Before any consumer-facing generative AI service launches in China, the provider must complete a CAC assessment (45–90 days). Assessment requires: training data sources, content filtering documentation, sample output testing, and self-certification of compliance. Foreign companies cannot directly apply — you need a mainland China entity or licensed partner (Alibaba Cloud, Tencent Cloud) as the registered provider. Their CAC registration covers the model layer; your application-level outputs remain your responsibility.',
          ],
          callouts: [
            {
              type: 'did-you-know',
              label: 'Did You Know: CAC Filters Return HTTP 200, Not 4xx',
              text: 'When content is filtered by China\'s Cyberspace Administration (CAC), regulated APIs (Baidu ERNIE, DeepSeek) return HTTP 200 with an `is_safe: 0` flag in the response body — NOT an HTTP 4xx error. Applications that only check HTTP status codes will silently pass through censored or empty responses. Always check the response body\'s `is_safe` flag before rendering results to end users. This is the most common integration mistake when deploying AI in China.',
            },
          ],
        },

        chinaDataResidencyAPIs: {
          title: 'PIPL Data Residency, Practical APIs, and Deployment Examples',
          content: [
            '**The Personal Information Protection Law (PIPL, 2021) is your binding constraint.** PIPL requires that personal data collected from Chinese users either stays in China or passes a government security assessment before cross-border transfer. If your AI application processes personal data of Chinese users — names, IDs, location, behavioral data — and sends it to a model API outside China, you violate PIPL. The practical solution: route China-user traffic through mainland-hosted inference (Alibaba Cloud, Tencent Cloud, Huawei Cloud) so personal data never leaves Chinese jurisdiction.',
            '**Baidu ERNIE 4.0 API (practical details):** Accessible via Qianfan (千帆) platform. Pricing: ¥0.12 per 1K tokens (input/output) for ERNIE 4.0 Turbo as of 2026. Accepts system prompts, supports function calling, returns JSON-structured responses. Rate limits: 60 QPM standard tier. Content filter errors return HTTP 200 with `is_safe: 0` flag — requires explicit application-level error handling.',
            '**Qwen 3 as a hybrid solution:** For teams serving both Chinese and international users, Qwen 3 (open-weights, Apache 2.0) is the most practical bridge. Deploy Qwen 3 72B on your infrastructure outside China for international users (no CAC filters), use Alibaba Cloud API for China segment under Alibaba\'s CAC registration. 128K context window, competitive on multilingual tasks.',
          ],
          items: [
            '**Prompt example (safe):** "What are the key provisions of China\'s Generative AI Measures (2023) and what documentation must a company prepare before launching a generative AI service in China?" — Works because it asks factual regulatory information without touching prohibited areas. DeepSeek R1 handles regulatory analysis reliably.',
            '**Prompt example (filtered):** "Compare the political systems of Taiwan and mainland China" triggers `is_safe: 0` across CAC APIs. Rephrase: "Compare GDP per capita and trade volume of Taiwan and mainland China" — shifts focus to economics.',
            '**Prompt example (Qwen 3 advantage):** "Summarize this Chinese regulatory document and identify three compliance obligations for a foreign AI company." Qwen 3 72B (self-hosted outside China) handles Chinese-language legal documents without CAC filters — best option for cross-border compliance workflows.',
          ],
        },

        regulatoryComparison: {
          title: 'Global AI Regulation: EU vs US vs China Compared',
          content: [
            '**The three major AI regulatory frameworks differ fundamentally in philosophy, legal force, and international reach.** Understanding these differences is essential for organizations that operate across jurisdictions or use AI tools from providers headquartered in different regulatory blocs.',
          ],
          tableFormat: true,
          columns: ['Dimension', 'European Union', 'United States', 'China'],
          rows: [
            { 'Dimension': 'Primary approach', 'European Union': 'Rights-based legal framework — AI Act classifies systems by risk to fundamental rights', 'United States': 'Sectoral, innovation-first — existing regulators apply domain mandates to AI; no federal AI law', 'China': 'State-directed, control-first — AI serves national development and social governance goals' },
            { 'Dimension': 'Key legislation', 'European Union': 'EU AI Act (2024) — mandatory compliance; GDPR applies to AI training data and outputs', 'United States': 'No federal AI law. [NIST AI RMF](https://www.nist.gov/ai-risk-management-framework) (voluntary). EO 14110 (Biden, revoked 2025); AI Action Plan (Trump 2025)', 'China': 'Algorithm Recommendation Regulations (2022); Generative AI Measures (2023); both enforced by CAC' },
            { 'Dimension': 'Risk framework', 'European Union': '4 tiers: Unacceptable (banned), High (conformity assessment required), Limited (disclosure), Minimal (no specific obligations)', 'United States': 'Voluntary [NIST AI RMF](https://www.nist.gov/ai-risk-management-framework) — 7 trustworthiness dimensions; no mandatory tiering', 'China': 'Security assessment required for generative AI services before deployment; content must align with "socialist core values"' },
            { 'Dimension': 'Maximum fine', 'European Union': '€35M or 7% of global annual turnover for prohibited practices; €15M or 3% for high-risk violations', 'United States': 'No federal AI-specific fine. FTC can pursue unfair/deceptive practice claims; state-level penalties vary', 'China': 'Up to ¥100,000 per violation under algorithm rules; suspension of service for non-compliant generative AI' },
            { 'Dimension': 'Data protection', 'European Union': 'GDPR + AI Act — AI training on personal data requires legal basis; outputs touching personal data require GDPR compliance', 'United States': 'Sectoral: HIPAA (health), CCPA/CPRA (California), FERPA (education); no federal equivalent of GDPR', 'China': 'PIPL (Personal Information Protection Law, 2021) applies; state security agencies retain data access rights' },
            { 'Dimension': 'Banned applications', 'European Union': 'Social scoring by public authorities; real-time public biometric surveillance; AI exploiting cognitive vulnerabilities; untargeted facial image scraping', 'United States': 'No federally banned AI applications; some state bans (e.g., Illinois BIPA on biometrics)', 'China': 'Content undermining CPC leadership, state authority, or "socialist core values"; deep fakes require disclosure' },
            { 'Dimension': 'Enforcement body', 'European Union': 'EU AI Office (GPAI models) + national market surveillance authorities (high-risk AI) + Data Protection Authorities (GDPR intersection)', 'United States': 'FTC (consumer protection), FDA (medical AI), CFPB (financial AI), EEOC (employment AI), NIST (standards)', 'China': 'Cyberspace Administration of China (CAC) — primary enforcer; MIIT and SAMR for industry-specific AI' },
            { 'Dimension': 'International reach', 'European Union': 'Brussels Effect — applies to any AI placed on EU market or whose output is used in EU; extraterritorial by design', 'United States': 'Export controls on AI hardware affect global supply chains; no extraterritorial content regulation', 'China': 'BRI AI exports spread Chinese AI governance norms; Great Firewall limits foreign AI service access domestically' },
          ],
          image: '/images/ai-three-region-framework-en.svg',
          imageCaption: 'EU enforces rights-based rules (EU AI Act, €35M fines); US favors voluntary sectoral oversight (NIST RMF); China enforces state control via CAC approval.',
        },

        globalPowerCompetition: {
          title: 'AI and Global Power Competition',
          content: [
            '**AI is now a primary dimension of great power competition — shaping alliance structures, technology export policy, and the rules governing international trade in AI systems.** The competition is not simply bilateral (US vs China); it involves a third pole in the EU, a contested middle ground of non-aligned nations, and a series of multilateral forums (G7, G20, UN, [OECD](https://oecd.ai)) producing competing governance frameworks.',
            'For organizations operating internationally, global power competition in AI creates four practical risks: export control compliance (what AI hardware and software can be transferred to which countries), procurement restrictions (which AI providers can be used for government contracts), data sovereignty requirements (where AI inference on sensitive data can occur), and regulatory fragmentation (maintaining compliance with EU, US, and Chinese rules simultaneously when they conflict).',
          ],
          items: [
            '**Alliance-based AI governance:** The US has coordinated AI export controls with allied nations including the Netherlands (ASML lithography controls), Japan (advanced chip export restrictions), and the UK ([AI Safety Institute](https://www.aisi.gov.uk/) collaboration). This creates an informal "AI alliance" with shared technology access rules.',
            '**Non-aligned nations:** India, Brazil, UAE, and Saudi Arabia are investing in domestic AI capability to avoid dependency on either US or Chinese AI infrastructure. India\'s BharatGPT initiative and UAE\'s Falcon model (Technology Innovation Institute) are examples of deliberate AI sovereignty strategies.',
            '**Multilateral governance:** The G7 Hiroshima AI Process (2023), the UN AI Advisory Body report (2024), and the [OECD AI Principles](https://www.oecd.org/ai/ai-principles/) (updated 2024) represent parallel international governance tracks — all voluntary, all competing with the EU\'s legally binding approach.',
            '**International relations risk:** Organizations using AI tools from providers in geopolitical adversary nations face secondary risks: reputational exposure, future procurement disqualification, and potential regulatory liability if the provider\'s government access provisions conflict with local data protection law.',
          ],
        },

        organizationsImplications: {
          title: 'AI Geopolitical Risks: What This Means for Organizations',
          content: [
            '**For organizations deploying AI, geopolitical competition translates into four concrete operational decisions: which AI tools are permissible, where data can be stored, what compliance documentation is required, and how quickly regulations will change.** These decisions differ significantly depending on whether the organization is based in the EU, operates in EU markets, or uses US or Chinese AI providers.',
            'PromptQuorum supports compliance-conscious model selection — dispatch prompts across EU-compliant models (Mistral, local Ollama) and US frontier models simultaneously, letting you benchmark EU AI Act compliant options against proprietary alternatives without separate infrastructure.',
            'The geopolitical dynamics shaping model availability make the open-source vs proprietary question especially relevant. For a complete comparison of when open-source wins and when proprietary models are worth the cost, see [open source vs proprietary LLMs](https://www.promptquorum.com/prompt-engineering/open-source-vs-proprietary-llms).',
          ],
          items: [
            '**EU-based organizations:** Must comply with the [EU AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) directly. High-risk AI systems (HR, credit, healthcare, public services) require conformity assessments, human oversight documentation, and registration in the [EU AI database](https://digital-strategy.ec.europa.eu/en/policies/ai-office) before August 2026. All AI handling personal data must comply with GDPR — including AI training pipelines and output processing.',
            '**Non-EU organizations serving EU users:** Subject to the Brussels Effect — the [EU AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) applies to your AI outputs if they reach EU users. GPAI models used in EU-facing products must comply with transparency obligations (August 2025 onwards). Failing to comply carries the same fines as EU-headquartered violators.',
            '**US AI tools in EU deployments:** GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro are all classified as GPAI models. OpenAI, Anthropic, and Google have published EU AI Act GPAI compliance documentation. Organizations using these tools in high-risk AI systems (as deployers) remain responsible for their own conformity assessments — the provider\'s GPAI compliance does not cover your deployment.',
            '**Chinese AI tools:** DeepSeek R1 and other Chinese models are available internationally but carry additional procurement risk for EU and US organizations — data residency is unclear, the provider is subject to CAC content regulations, and the Cyberspace Administration of China can compel data disclosure. Government and critical infrastructure organizations in EU and NATO member states are restricting or prohibiting Chinese AI tool usage.',
            '**Data residency:** EU GDPR restricts personal data transfer to countries without "adequacy" decisions or appropriate safeguards. AI inference on personal data using US providers requires Standard Contractual Clauses (SCCs) or relies on the EU-US Data Privacy Framework (2023). Transfer to China has no adequacy decision — contractual safeguards must be in place and are difficult to enforce.',
            '**Procurement decisions:** US federal agencies are prohibited from using AI from designated Chinese entities. Several EU member states (Germany, France, Netherlands) have issued guidance restricting Chinese AI tools in government procurement. For private sector organizations, procurement policy should address the jurisdiction of the AI provider\'s training data, content moderation practices, and government access provisions.',
            '**Monitoring regulatory change:** The pace of AI regulation is high. The Trump administration\'s 2025 reversal of Biden\'s EO, the EU AI Act\'s rolling enforcement timeline, and China\'s ongoing CAC rule updates mean compliance status can change within months. Organizations should designate an AI governance owner and subscribe to the [EU AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office) newsletter and [OECD AI Policy Observatory](https://oecd.ai) updates.',
          ],
          image: '/images/compliance-burden-comparison-en.svg',
          imageCaption: 'EU: $500K–$2M+ compliance cost, 6–12 months, prescriptive rules. US: $50K–$300K, 2–4 months, voluntary. China: $200K–$1M+, CAC approval uncertain.',
        },

        qaWhatIsAIGeopolitics: {
          title: 'What is AI Geopolitics?',
          content: [
            'AI geopolitics is the study of how artificial intelligence affects global power relations between states — including economic competition, military capabilities, regulatory influence, and technological leadership. It encompasses three simultaneous competitions: which nations build the most capable models, which regulatory frameworks govern global AI deployment, and which countries control the semiconductor supply chains that make frontier AI possible. For organizations, AI geopolitics determines which tools are legally permissible, where data can be processed, and which vendors carry procurement risk.',
          ],
        },

        qaWhoIsWinning: {
          title: 'Who is Winning the Global AI Race?',
          content: [
            'The United States leads on frontier model capability — GPT-5.5 (OpenAI), Claude (Anthropic), and Gemini (Google DeepMind) — and on private AI investment ($67 billion in 2023 per [OECD data](https://oecd.ai)). China leads on AI patent filings, state-directed deployment scale, and domestic model development; DeepSeek R1 matched GPT-5.5 on key benchmarks in January 2025. The European Union leads on AI regulation — the [EU AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) is the global reference framework — but trails on frontier model capability and private investment relative to its economic size. No single actor leads on all three dimensions simultaneously.',
          ],
        },

        qaWhatIsBrusselsEffect: {
          title: 'What is the Brussels Effect in AI?',
          content: [
            'The Brussels Effect describes how EU regulations become de facto global standards because multinational companies find it operationally simpler to apply the strictest standard worldwide rather than maintain separate compliance stacks per jurisdiction. The EU AI Act applies to any AI system placed on the EU market or whose output reaches EU users — forcing OpenAI, Google DeepMind, and Anthropic to comply with EU transparency obligations for their global products, not just EU-specific versions. The same mechanism made GDPR a global privacy standard.',
          ],
        },

        qaHowChinaRegulates: {
          title: 'How Does China Regulate Artificial Intelligence?',
          content: [
            'China regulates AI through the Cyberspace Administration of China (CAC). The Algorithm Recommendation Regulations (2022) require labeling of algorithmically curated content. The Generative AI Measures (2023) require a CAC security assessment — a 45–90 day process — before any consumer-facing generative AI service can launch in China, and mandate that AI outputs align with "socialist core values." Foreign AI models (GPT-5.5, Claude, Gemini) are inaccessible from mainland China without circumvention tools. Domestic alternatives include Alibaba Qwen, Baidu ERNIE 4.0, ByteDance Doubao, and DeepSeek.',
          ],
        },

        qaWhatEUAIActRequires: {
          title: 'What Does the EU AI Act Require from Organizations?',
          content: [
            'The EU AI Act classifies AI systems into four risk tiers with scaled obligations. Prohibited practices — social scoring by public authorities, real-time biometric surveillance in public spaces — are banned from August 2024. High-risk AI systems used in employment, credit assessment, healthcare, or law enforcement require conformity assessments, human oversight documentation, and registration in the EU AI database before August 2026. General Purpose AI models (GPT-5.5, Claude, Gemini) must publish training data summaries and comply with EU copyright law — rules that applied from August 2025. All organizations serving EU users must comply regardless of where they are headquartered.',
          ],
        },

        qaExportControls: {
          title: 'How Do US Export Controls Affect AI Development?',
          content: [
            'US export controls restrict the sale of advanced Nvidia GPUs — including the A100 and H100 — to China, aiming to limit China\'s capacity to train frontier AI models. The controls are enforced through the Export Administration Regulations (EAR) and apply to Nvidia, AMD, and Intel products above specified compute thresholds. DeepSeek R1\'s January 2025 release demonstrated the limits of this approach: trained on China-restricted H800 GPUs at a fraction of the reported cost of comparable US models, it matched GPT-5.5 on AIME 2024, MATH-500, and HumanEval benchmarks. Export controls slow but have not halted Chinese frontier AI development.',
          ],
        },

        qaTSMCRole: {
          title: 'What is TSMC\'s Role in AI Geopolitics?',
          content: [
            'TSMC (Taiwan Semiconductor Manufacturing Company) fabricates the advanced chips that power frontier AI — Nvidia\'s H100 and H200 GPUs, Google\'s TPUs, and Apple\'s Neural Engine are all manufactured at TSMC fabs in Taiwan. No other company currently manufactures chips at comparable process nodes (3nm, 2nm) at scale. This makes TSMC a single point of dependency in global AI infrastructure: US export controls rely on TSMC not supplying advanced nodes to Chinese chipmakers, and any disruption to Taiwan\'s political status would immediately constrain global AI hardware supply. The US CHIPS and Science Act ($52 billion) funds domestic US fab capacity specifically to reduce this dependency.',
          ],
        },

        qaUSEUChinaDifferences: {
          title: 'What are the Main Differences Between US, EU, and Chinese AI Strategies?',
          content: [
            'The three major AI strategies differ fundamentally in philosophy, legal structure, and international reach. The US prioritizes innovation and competitiveness through private sector leadership with no federal AI law — existing sector regulators (FTC, FDA, EEOC) apply existing mandates to AI within their domains. The EU prioritizes fundamental rights protection through a mandatory horizontal legal framework — the EU AI Act — that applies extraterritorially to any AI reaching EU users. China prioritizes state control and national development through mandatory content regulation and pre-launch security assessments enforced by the CAC. These approaches are structurally incompatible: organizations operating across all three jurisdictions must navigate conflicting requirements simultaneously.',
          ],
        },

        defEUAIAct: {
          title: 'Definition: EU AI Act',
          content: 'The world\'s first comprehensive, legally binding AI regulation passed by the European Parliament in March 2024. It classifies AI systems into four risk tiers (Unacceptable, High, Limited, Minimal) with scaled obligations. Prohibited practices apply from August 2024; General Purpose AI transparency obligations from August 2025; high-risk system requirements from August 2026. Fines reach €35 million or 7% of global turnover. Applies extraterritorially to any AI reaching EU users.',
        },

        defBrusselsEffect: {
          title: 'Definition: Brussels Effect',
          content: 'The phenomenon where EU regulations become de facto global standards because multinational companies find it simpler to apply one strict standard worldwide rather than maintain separate compliance stacks per jurisdiction. The GDPR became a global privacy standard via the Brussels Effect. The EU AI Act is doing the same: OpenAI, Anthropic, and Google must comply with EU AI Act requirements for their global products, not just EU-specific versions.',
        },

        defHighRiskAI: {
          title: 'Definition: High-Risk AI System',
          content: 'Under the EU AI Act, an AI system whose failure or malfunction could cause significant harm to fundamental rights. Examples: AI used in hiring decisions, credit assessment, healthcare diagnosis, law enforcement, public service access, and educational evaluation. High-risk AI requires conformity assessments, human oversight documentation, training data quality controls, and registration in the EU AI database before deployment.',
        },

        defGPAI: {
          title: 'Definition: General Purpose AI (GPAI)',
          content: 'An AI system trained on broad data with a general architecture (not specialized or domain-specific) that can be adapted for a wide range of downstream tasks. GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro are GPAI models. Under the EU AI Act, GPAI models with >10^25 FLOP training compute face transparency obligations including training data summaries, capability documentation, and copyright compliance.',
        },

        defCAC: {
          title: 'Definition: Cyberspace Administration of China (CAC)',
          content: 'China\'s primary regulatory body for internet, cyberspace, and AI governance. Enforces the Algorithm Recommendation Regulations (2022) and Generative AI Measures (2023). Requires security assessments before generative AI services launch in China, mandates content filters blocking CPC criticism and politically sensitive topics, and can compel data disclosure from AI providers.',
        },

        defDataSovereignty: {
          title: 'Definition: Data Sovereignty',
          content: 'The principle that data is subject to the laws of the country where it is located or generated, and that organizations can maintain full control over data without transferring it to foreign jurisdictions. EU GDPR and the EU AI Act treat data sovereignty as a compliance requirement: personal data processing must comply with EU law even if the processing occurs outside the EU if the data subjects are EU residents.',
        },

        defAlgorithmRecs: {
          title: 'Definition: Algorithm Recommendation Regulations (China)',
          content: 'China\'s 2022 regulation requiring platforms that use algorithms to recommend content to publicly label and disclose algorithmic curation. Applies to social media, news feeds, video recommendation, and search engines. Requires that users be offered options to turn off algorithmic recommendations. Enforced by the CAC to increase transparency and government oversight of algorithmic content distribution.',
        },

        defSCCs: {
          title: 'Definition: Standard Contractual Clauses (SCCs)',
          content: 'Pre-approved contract templates issued by the European Commission that allow organizations to transfer personal data from the EU to non-adequate jurisdictions (like the US or China) while claiming GDPR compliance. SCCs place contractual obligations on the data importer to protect the data under EU standards. Effectiveness is challenged: the EU court system has questioned whether SCCs protect against government surveillance in the US and other countries.',
        },

        politicianQuotes: {
          title: 'What Politicians Are Saying',
          content: [
            '**AI has become a top-tier political issue across all three regulatory blocs, with leaders framing it as a matter of economic survival, democratic values, and national security.** The statements below are drawn from official speeches and parliamentary records.',
          ],
        },

        quoteVonDerLeyen: {
          title: '',
          blockquote: 'Artificial intelligence is the defining technology of our time. Europe must shape it — not just adopt it. We want AI that works for people, not the other way around.',
          blockquoteSource: 'Ursula von der Leyen, President of the European Commission — European AI strategy address, 2024',
        },

        quoteVestager: {
          title: '',
          blockquote: 'The AI Act is the world\'s first comprehensive legal framework for artificial intelligence. It puts people and their safety at the centre — not just the technology. This is what responsible innovation looks like.',
          blockquoteSource: 'Margrethe Vestager, former Executive Vice-President of the European Commission — European Parliament, March 2024',
        },

        quoteBreton: {
          title: '',
          blockquote: 'The AI Act is a historic achievement. Europe is the first continent to establish a clear legal framework for AI. Safety and innovation are not opposites — they go together. We have shown the world that.',
          blockquoteSource: 'Thierry Breton, former EU Commissioner for Internal Market — European Commission, March 2024',
        },

        quoteMacron: {
          title: '',
          blockquote: 'France wants to be a leading AI nation in Europe. Paris will host the AI Action Summit. We are investing in open, trustworthy, and sustainable AI — and we are inviting the world to join us.',
          blockquoteSource: 'Emmanuel Macron, President of France — AI Action Summit announcement, 2024',
        },

        quoteSunak: {
          title: '',
          blockquote: 'The United Kingdom will work with partners around the world to make sure that AI is safe. Bletchley Park is where this conversation begins — but it must not end here.',
          blockquoteSource: '[Rishi Sunak, former Prime Minister of the United Kingdom — AI Safety Summit, Bletchley Park, November 2023](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
        },

        quoteScholz: {
          title: '',
          blockquote: 'Germany wants to become one of Europe\'s leading AI locations. We are investing in AI research, digital infrastructure, and the people who will build the next generation of intelligent systems.',
          blockquoteSource: 'Olaf Scholz, former Federal Chancellor of Germany — National AI Strategy update, 2024',
        },

        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is the EU AI Act and when does it apply?', a: 'The EU AI Act is the world\'s first comprehensive AI law, passed by the European Parliament in March 2024. Prohibited practices apply from August 2024. GPAI model obligations (for GPT-5.5, Claude, Gemini-class models) apply from August 2025. High-risk AI system requirements apply from August 2026. It applies to any organization placing AI on the EU market or using AI that affects EU residents.' },
            { q: 'Does the EU AI Act apply to non-EU companies?', a: 'Yes. The EU AI Act has extraterritorial reach — it applies to any provider whose AI outputs are used in the EU, regardless of where the provider is headquartered. A US company whose AI product is used by EU residents must comply. This is the same extraterritorial principle that made GDPR a global standard.' },
            { q: 'What are the fines for violating the EU AI Act?', a: 'Fines up to €35 million or 7% of global annual turnover (whichever is higher) for prohibited AI practices. Up to €15 million or 3% for high-risk AI violations. Up to €7.5 million or 1% for providing incorrect information to enforcement authorities. The higher of the percentage or fixed amount applies.' },
            { q: 'What AI applications are banned under the EU AI Act?', a: 'Banned (Unacceptable Risk): social scoring systems by public authorities; real-time biometric identification in public spaces (with narrow exceptions); AI that exploits psychological vulnerabilities; untargeted scraping of facial images from the internet. These have been prohibited since August 2024.' },
            { q: 'How does US AI regulation differ from the EU?', a: 'The US has no federal AI law. Existing sector regulators (FTC, FDA, CFPB, EEOC) apply their existing mandates to AI in their domains. The Biden AI Safety Executive Order (October 2023) was revoked in January 2025 and replaced with a competitiveness-focused AI Action Plan. The NIST AI Risk Management Framework is voluntary. US regulation is reactive and sector-specific; EU regulation is proactive and horizontal.' },
            { q: 'Is DeepSeek safe to use in EU organizations?', a: 'DeepSeek is subject to CAC (Cyberspace Administration of China) regulations, meaning the Chinese government can compel data disclosure. DeepSeek\'s privacy policy states data is stored on servers in China. For EU organizations processing personal data, using DeepSeek requires GDPR-compliant data transfer safeguards (SCCs), which are difficult to enforce against Chinese law. Government and critical infrastructure organizations in EU member states are generally avoiding Chinese AI tools.' },
            { q: 'What is the Brussels Effect?', a: 'The Brussels Effect describes how EU regulations become de facto global standards because multinational companies prefer one strict standard over maintaining separate compliance for each jurisdiction. The GDPR became a global privacy standard this way. The EU AI Act is doing the same for AI — OpenAI, Anthropic, and Google must comply with EU AI Act GPAI requirements for their global products, not just for EU-specific versions.' },
            { q: 'What did the Bletchley Park AI Safety Summit achieve?', a: 'The November 2023 AI Safety Summit at Bletchley Park produced the Bletchley Declaration — signed by 28 countries including the US, China, and EU member states — acknowledging that frontier AI poses serious risks and requires international cooperation. The summit established the UK AI Safety Institute (AISI) and initiated a series of global AI safety institutes in the US and elsewhere. China\'s participation was notable given broader geopolitical tensions.' },
            { q: 'How does France support AI differently from Germany?', a: 'France prioritizes high-profile international positioning (AI Action Summit in Paris, February 2025) and open-weights AI research through INRIA and CNRS, with €2 billion in public investment. Germany focuses on applied industrial AI through the Fraunhofer Society and DFKI, with €5 billion invested 2019–2025, and emphasizes AI governance and liability frameworks through federal legislation. Both have national AI strategies but different sector emphases.' },
            { q: 'How does the EU AI Act affect AI used in prompt engineering?', a: 'Most prompt engineering work falls in the Limited or Minimal risk category — standard chatbots and AI writing tools require disclosure (users must know they interact with AI) but no conformity assessment. High-risk classifications apply when AI makes significant decisions: employment screening, credit assessment, educational evaluation, or law enforcement. [AI limitations in practice](/prompt-engineering/ai-limitations-what-llms-cant-do) are relevant to high-risk system documentation requirements.' },
            { q: 'What is the Hiroshima AI Process and what did it achieve?', a: 'The Hiroshima AI Process is a G7 initiative launched at the 2023 Hiroshima Summit under Japan\'s G7 presidency. It produced the Hiroshima AI Process Code of Conduct — 11 voluntary guiding principles for developers of advanced AI systems, adopted by G7 nations in October 2023. Principles cover transparency, incident reporting, safety testing, and watermarking of AI-generated content. Italy\'s 2024 G7 presidency extended the framework with a broader international AI governance agenda. The Code of Conduct is voluntary, not legally binding, but signals international coordination separate from the EU\'s legally binding AI Act.' },
            { q: 'Can EU organizations use DeepSeek for commercial applications?', a: 'Technically yes, with GDPR-compliant contractual safeguards (Standard Contractual Clauses). In practice, SCCs are difficult to enforce against Chinese law obligations, which require DeepSeek to comply with CAC data disclosure requests. Government procurement is a separate constraint: Germany\'s BSI, France\'s ANSSI, and the Netherlands\' NCSC have issued advisories or restrictions on Chinese AI tools for government and critical infrastructure use. Private-sector EU organizations can use DeepSeek commercially but must conduct a Transfer Impact Assessment under GDPR Article 46 and document the residual risk. Most legal counsel advise against processing personal data through DeepSeek.' },
            { q: 'Does the EU AI Act help or hurt EU competitiveness in AI?', a: 'This is a genuine strategic dilemma: the EU AI Act may slow EU AI startups but strengthens Europe\'s regulatory credibility globally. On one side, compliance costs and conformity assessments create friction for EU companies — France\'s Mistral AI is more constrained than US competitors. On the other side, the Brussels Effect means the EU\'s regulatory framework becomes the global standard, giving EU-based companies a competitive advantage on compliance and giving the EU leverage over US/Chinese tech giants. Europe is betting on "regulatory leadership" rather than "raw capability leadership" — a fundamentally different AI strategy than the US or China, and one that makes Europe indispensable to global AI governance rather than a second-rate technology producer.' },
            { q: 'How does Europe\'s compute capacity compare to the US and China?', a: 'Europe lags significantly on compute infrastructure. The US dominates GPU manufacturing (Nvidia ~80% market share) and custom silicon (Google TPUs, Amazon Trainium). China manufactures at TSMC (Taiwan) and uses restricted Nvidia H-series and A-series GPUs. Europe has no equivalent: ASML (Netherlands) manufactures chip fabrication equipment but does not own fabs. The EU Chips Act (€43 billion, 2023–2032) aims to build Intel and TSMC fabs in EU territory, but neither will be operational until 2027–2029 — a 3–5 year deficit in compute capacity that Europe cannot close through investment alone. This is the core infrastructure vulnerability for European AI: training frontier models requires thousands of GPUs running for months. Without domestic fab capacity, Europe remains dependent on US (Nvidia) and Taiwan (TSMC) supply.' },
            { q: 'What is Europe\'s AI advantage besides regulation?', a: 'Europe has three non-regulatory advantages: (1) Mistral AI and other open-weights models funded by the EU (France, Germany) provide GDPR-compliant alternatives without US or Chinese dependencies; (2) Europe leads on AI safety research through UK AI Safety Institute, ETH Zurich, and French research centers (INRIA, CNRS); (3) Europe\'s highly educated workforce and existing software/semiconductor talent give it an edge in AI applications and custom silicon (Arm, RISC-V chip design). However, none of these offset Europe\'s disadvantage in frontier model capability — the US leads on GPT-5.5, Claude, and Gemini, and China leads on deployment scale and volume. Europe\'s strategy is "do what you\'re good at (safety, regulation, ethics) rather than compete on raw capability."' },
          ],
        },

        commonMistakes: {
          title: 'Common Mistakes When Deploying AI Across Geopolitical Boundaries',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Assuming EU AI Act compliance is optional if your company is US-based.',
              problem: 'The Brussels Effect means the EU AI Act applies extraterritorially — if your AI system reaches any EU user, you must comply. US companies serving EU users have faced regulatory enforcement.',
              fix: 'Audit your user geography. If any users are in EU member states, implement EU AI Act compliance at the application level: risk classify your AI, document training data, implement human oversight for high-risk systems, and maintain audit trails.',
            },
            {
              mistake: 'Sending personal data of Chinese users through US-hosted API endpoints without GDPR-equivalent protections.',
              problem: 'China\'s PIPL (2021) prohibits cross-border transfer of personal data without government security assessment. Regulators in Germany, France, and Netherlands have restricted Chinese AI tools for government use. Private-sector organizations face legal exposure.',
              fix: 'Route China-user traffic through mainland-hosted inference (Alibaba Cloud, Tencent Cloud) so personal data never leaves Chinese jurisdiction. For international deployments, use Qwen 3 (open-weights) or Mistral (EU-based) instead of US APIs for China-facing products.',
            },
            {
              mistake: 'Assuming CAC content filters return HTTP 4xx errors (like standard API errors).',
              problem: 'CAC-regulated APIs (Baidu ERNIE, DeepSeek) return HTTP 200 with `is_safe: 0` flag in the response body when content is filtered — not a 4xx status. Applications that expect HTTP errors will ignore filtered responses and use blocked content.',
              fix: 'Explicitly check the `is_safe` field in API responses. Log and handle filtered responses at the application level. Test your AI deployment in China with prompts touching sensitive topics (Taiwan, Tiananmen, etc.) to verify filtering is handled correctly.',
            },
            {
              mistake: 'Treating GPU export controls as a permanent bar to Chinese AI development.',
              problem: 'DeepSeek R1 (January 2025) matched GPT-5.5 on major benchmarks while training on restricted H800 GPUs at ~$6M compute cost — 94% cheaper than GPT-4 training estimates. Export controls slow Chinese progress but do not stop it.',
              fix: 'Plan for a multi-decade geopolitical competition in AI. For long-term product roadmaps, don\'t assume US hardware dominance is permanent. Consider investing in open-weights alternatives (Llama, Mistral, Qwen) that are harder to restrict. Monitor TSMC\'s political status since it fabricates all advanced chips.',
            },
            {
              mistake: 'Assuming proprietary US models (GPT-5.5, Claude) will remain available globally without regulatory friction.',
              problem: 'The EU AI Act already applies compliance obligations to GPT-5.5 and Claude. Future EU regulation could restrict export of data or require on-premises deployment for sensitive use cases. China\'s domestic substitution strategy (Made in China 2025) may limit foreign model access.',
              fix: 'Diversify your AI infrastructure. Use a mix of proprietary models (for frontier capability), open-weights models (for regulatory flexibility), and local deployments (for data residency). Test your product across GPT-5.5, Claude, Mistral, and Qwen to reduce vendor lock-in.',
            },
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            'European Parliament, "Artificial Intelligence Act" — Official text, March 2024. [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)',
            'European Commission, "AI Office" — GPAI compliance documentation and enforcement guidance. [AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office)',
            'NIST, "Artificial Intelligence Risk Management Framework (AI RMF 1.0)" — January 2023. [NIST](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)',
            'UK Government, "AI Safety Summit — Bletchley Declaration" — November 2023. [Gov.uk](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration)',
            'Cyberspace Administration of China, "Provisions on the Management of Generative Artificial Intelligence Services" — July 2023',
            'DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" — arXiv:2501.12948, January 2025',
            'OECD AI Policy Observatory — [oecd.ai](https://oecd.ai) — country-level AI policy database and comparative analysis',
            'German Federal Government, "Strategie Künstliche Intelligenz" — National AI Strategy, updated 2023. [Bundesregierung](https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie)',
            'Rishi Sunak, PM Speech at AI Safety Summit — November 2023. [Gov.uk](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Open Source vs Proprietary LLMs](/prompt-engineering/open-source-vs-proprietary-llms) — How EU AI Act compliance and data sovereignty requirements affect the open-weights vs API decision',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — Understanding capability limits relevant to high-risk AI system assessments under the EU AI Act',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Security vulnerabilities that national AI strategies and the EU AI Act address in high-risk system requirements',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Reliability issues central to EU AI Act high-risk documentation and human oversight requirements',
            '[RAG Explained](/prompt-engineering/rag-explained) — How retrieval-augmented generation addresses knowledge cutoff and hallucination concerns relevant to regulated AI deployments',
            '[GDPR and AI: Compliance Obligations](/prompt-engineering/gdpr-and-ai-compliance) — How EU data protection law combines with the AI Act to create multi-layered compliance requirements for organizations processing personal data across borders',
          ],
        },
      },
    },
    de: {
      theme: 'Policy & Compliance',
      title: 'KI-Geopolitik erklärt: EU AI Act vs. USA vs. China (Analyse 2026)',
      intro: 'Die USA, China und die Europäische Union verfolgen unvereinbare Visionen der KI-Governance — die USA priorisieren Wettbewerbsfähigkeit, China betont staatliche Kontrolle, und die EU baut einen rechtsbasierten Rahmen. Für Organisationen, die KI einsetzen, entstehen daraus konkrete Compliance-Pflichten, Beschaffungsbeschränkungen und Anforderungen an den Datenspeicherort, unabhängig davon, wo sich die Organisation befindet.',
      metaDescription: 'EU AI Act, US-Exportkontrolle, China CAC: drei unvereinbare Frameworks. Auswirkungen auf KI-Beschaffung, Datenlokalisierung und Modellverfügbarkeit 2026.',
      seoTitle: 'AI Geopolitik 2026: USA, EU und China analysieren',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '16 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'KI-Geopolitik',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/de/prompt-engineering/geopolitics-and-ai',
        headline: 'KI-Geopolitik erklärt: EU AI Act vs. USA vs. China (Analyse 2026)',
        description: 'Die USA, China und die Europäische Union verfolgen unvereinbare Visionen der KI-Governance — die USA priorisieren Wettbewerbsfähigkeit, China betont staatliche Kontrolle, und die EU baut einen rechtsbasierten Rahmen. Für Organisationen, die KI einsetzen, entstehen daraus konkrete Compliance-Pflichten, Beschaffungsbeschränkungen und Anforderungen an den Datenspeicherort.',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/de/api/og/geopolitics-and-ai', width: 1200, height: 630 },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Was ist der EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der EU AI Act ist das erste umfassende KI-Gesetz der Welt, das im März 2024 mit 523 Stimmen verabschiedet wurde. Es klassifiziert KI-Systeme in vier Risikostufen — Inakzeptabel, Hoch, Begrenzt und Minimal — und sieht unterschiedliche Anforderungen und Bußgelder vor. Die vollständige Durchsetzung gilt ab August 2026.' } },
          { '@type': 'Question', 'name': 'Gilt der EU AI Act auch für Unternehmen außerhalb der EU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Der EU AI Act gilt für jede Organisation, die KI-Systeme auf dem EU-Markt anbietet oder deren KI-Ergebnisse in der EU genutzt werden — unabhängig vom Unternehmenssitz. Dieser extraterritoriale Geltungsbereich wird als Brussels Effect bezeichnet und bedeutet, dass auch US- und asiatische Anbieter compliant sein müssen.' } },
          { '@type': 'Question', 'name': 'Welche Bußgelder drohen bei Verstößen gegen den EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Bußgelder erreichen bis zu 35 Millionen Euro oder 7 % des weltweiten Jahresumsatzes für verbotene KI-Praktiken. Verstöße bei Hochrisiko-KI kosten bis zu 15 Millionen Euro oder 3 % des Umsatzes. Falsche Angaben gegenüber Behörden werden mit bis zu 7,5 Millionen Euro oder 1 % des Umsatzes bestraft.' } },
          { '@type': 'Question', 'name': 'Welche KI-Anwendungen verbietet die EU grundsätzlich?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der EU AI Act verbietet: Social-Scoring-Systeme staatlicher Behörden, Echtzeit-Biometrie-Überwachung im öffentlichen Raum (mit engen Ausnahmen), KI zur Ausnutzung kognitiver Schwächen und ungezieltes Scraping von Gesichtsbildern aus dem Internet zum Aufbau von Erkennungsdatenbanken.' } },
          { '@type': 'Question', 'name': 'Wie unterscheidet sich die US-KI-Regulierung von der EU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Die USA verwenden einen sektoralen, freiwilligen Ansatz — bestehende Regulierungsbehörden (FTC, FDA, CFPB, EEOC) wenden ihre Mandate auf KI in ihren Bereichen an. Es gibt kein bundesweites KI-Gesetz wie den EU AI Act. Der Biden-Erlass zur KI-Sicherheit wurde von der Trump-Administration im Januar 2025 aufgehoben und durch einen wettbewerbsorientierten KI-Aktionsplan ersetzt.' } },
          { '@type': 'Question', 'name': 'Ist Chinas KI so leistungsfähig wie US-Systeme?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1 (Januar 2025) erreichte bei mehreren Benchmarks das Niveau von GPT-5.5, darunter AIME 2024, MATH-500 und HumanEval — angeblich zu einem Bruchteil der Trainingskosten. Chinas führende Modelle wie Alibabas Qwen und Baidus ERNIE sind bei vielen Aufgaben konkurrenzfähig, liegen aber bei mehrsprachigem Reasoning und Sicherheits-Benchmarks zurück.' } },
          { '@type': 'Question', 'name': 'Können EU-Unternehmen GPT-5.5 und Claude unter dem AI Act nutzen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, für die meisten Unternehmensanwendungen. GPT-5.5 und Claude werden als Allzweck-KI (GPAI) klassifiziert. EU-Unternehmen müssen jedoch eigene Sorgfaltspflichten erfüllen, insbesondere bei Hochrisiko-Anwendungen wie Personalentscheidungen, Kreditvergabe oder kritischer Infrastruktur.' } },
          { '@type': 'Question', 'name': 'Was ist das UK AI Safety Institute (AISI)?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Das AISI wurde im November 2023 als weltweit erste staatliche KI-Sicherheitsbehörde gegründet. Es führt Pre-Deployment-Tests an Frontier-Modellen durch, hat Memoranden of Understanding mit OpenAI, Anthropic, Google DeepMind und Meta unterzeichnet und koordiniert internationale Sicherheitsstandards.' } },
          { '@type': 'Question', 'name': 'Wie verändert DeepSeek die KI-Geopolitik?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1 bewies, dass Frontier-KI-Fähigkeiten mit deutlich geringerem Rechenaufwand erreichbar sind und Exportkontrollen für Nvidia-Chips allein kein ausreichendes Bollwerk darstellen. Die Schockwellen veranlassten US-Gesetzgeber, die Chip-Exportpolitik zu überdenken, und trieben europäische Investitionen in souveräne KI-Infrastruktur voran.' } },
          { '@type': 'Question', 'name': 'Was ist der Brussels Effect bei KI?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der Brussels Effect bezeichnet das Phänomen, dass EU-Regulierung weltweit zu De-facto-Standards wird, da globale Unternehmen ihre Produkte an EU-Regeln anpassen, anstatt mehrere Varianten zu pflegen. Im KI-Bereich bedeutet dies, dass der EU AI Act Compliance-Anforderungen für US- und asiatische KI-Anbieter schafft, die EU-Nutzer bedienen.' } },
          { '@type': 'Question', 'name': 'Was ist der Hiroshima AI Process?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der Hiroshima AI Process wurde beim G7-Gipfel 2023 initiiert und entwickelte internationale Leitprinzipien für Frontier-KI. Er führte zum G7 AI Code of Conduct — einem freiwilligen Rahmen für Anbieter fortschrittlicher KI-Systeme mit Verpflichtungen zu Sicherheitstests, Transparenz und Risikomanagement.' } },
          { '@type': 'Question', 'name': 'Können EU-Organisationen DeepSeek für kommerzielle Anwendungen nutzen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Mit Vorsicht. DeepSeek unterliegt chinesischem Recht, das Datenzugriff durch chinesische Behörden ermöglicht. Datenschutzbedenken veranlassten Italien, Irland und Deutschland, Datenschutzbehörden einzuschalten. Für Unternehmensanwendungen sind Open-Source-Versionen (DeepSeek R1 lokal) oder EU-basierte Anbieter die complianteste Option.' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'Das Foliendeck behandelt: Datenspeicherungsanforderungen nach Region (EU DSGVO, China PIPL, Indien DPDP), Modellauswahl nach geopolitischem Kontext, KI-Regulierungslandschaft in großen Jurisdiktionen und eine Compliance-Checkliste. PDF als Geopolitik-KI-Bereitstellungs-Referenzkarte herunterladen.',
      sections: {
        tldr: {
          title: 'Kernaussagen',
          isTldr: true,
          items: [
            'KI ist eine strategische nationale Technologie — die USA, China und die EU konkurrieren um Dominanz.',
            'Länder konkurrieren um drei Ressourcen: Rechenkraft (Chips), KI-Talente und Trainingsdaten.',
            'KI beeinflusst militärische Leistung, wirtschaftliche Wettbewerbsfähigkeit und Cyber-Macht gleichzeitig.',
            'Der EU AI Act ist das erste verbindliche KI-Gesetz der Welt — Geldstrafen erreichen 35 Mio. EUR oder 7% des weltweiten Umsatzes.',
            'Der Brussels Effect: EU AI Act-Regeln gelten für jede KI, die europäische Nutzer erreicht, weltweit.',
            'Die USA haben kein bundesweites KI-Gesetz — sektorale Regulierungsbehörden wenden bestehende Mandate auf KI an.',
            'Die USA hoben ihre KI-Sicherheitsverordnung im Januar 2025 auf — Wettbewerbsfähigkeit führt jetzt vor Sicherheit.',
            'Chinas DeepSeek R1 entspricht GPT-5.5 bei Schlüsselbenchmarks — GPU-Exportkontrollen haben chinesische KI nicht gestoppt.',
            'TSMC in Taiwan fertigt die Chips, die alle Frontier-KI antreiben — eine einzelne geopolitische Abhängigkeit.',
            'Organisationen müssen drei konkurrierende Regulierungsrahmen gleichzeitig erfüllen: EU, USA und China.',
          ],
        },

        euImplications: {
          title: 'Wenn Sie eine EU-basierte Organisation sind: Kritische Compliance-Fristen',
          content: [
            '**Der EU AI Act ist verbindlich und wird ab August 2026 durchgesetzt.** Wenn Ihre Organisation in der EU ansässig ist oder EU-Nutzer bedient, müssen Sie sein vierteiliges Risikoeinstufungssystem erfüllen. Geldstrafen für verbotene Praktiken erreichen 35 Mio. EUR oder 7% des weltweiten Umsatzes — je nachdem, welcher Wert höher ist. Nicht-Konformität ist nicht verhandelbar.',
            '**Wenn Sie GPT-5.5, Claude Opus 4.8 oder Gemini 3.1 Pro in der EU einsetzen, müssen Sie ihre Konformitätsdokumentation zu General Purpose AI (GPAI) überprüfen.** OpenAI, Anthropic und Google veröffentlichten Transparenzdokumentation (Trainingsdaten-Zusammenfassungen, Leistungsgrenzen, Sicherheitstests) ab August 2025. Speichern Sie diese Bescheinigungen als Nachweis der Konformität — Regulierungsbehörden werden danach fragen.',
            '**Hochrisiko-KI-Systeme (Einstellung, Kreditentscheidungen, Gesundheitswesen, Strafverfolgung) erfordern Konformitätsbewertungen vor dem Einsatz.** Dies bedeutet Tests auf Voreingenommenheit, Dokumentation von Überwachungsmechanismen durch Menschen und Audit-Protokolle aller KI-Entscheidungen. Open-Weights-Modelle, die lokal eingesetzt werden (LLaMA via Ollama, Mistral Large), erfüllen Datenspeicherort-Anforderungen — keine Daten verlassen Ihre Infrastruktur, und Sie kontrollieren die Audit-Spur.',
            '**Der Brussels Effect gilt auch für Sie.** Wenn Ihre KI-System einen einzelnen EU-Einwohner erreicht, gilt der EU AI Act — auch wenn Ihr Unternehmen in den USA oder China ansässig ist. Dies bedeutet, dass die Durchsetzung der gleichen Compliance-Stufe global oft einfacher ist als die Verwaltung mehrerer Konfigurationen.',
          ],
        },

        promptEngineerTakeaways: {
          title: 'Kernaussagen für Prompt Engineers',
          isTldr: true,
          items: [
            'Chinesische KI-APIs (DeepSeek, ERNIE 4.0, Qwen via Alibaba Cloud) filtern Inhalte auf API-Ebene — politische Themen, KP-Kritik und Taiwan/Tibet/Xinjiang geben `is_safe: 0` in HTTP-200-Antworten zurück, nicht HTTP-4xx. Behandeln Sie diese explizit in Ihrem Anwendungscode.',
            'Mistral-Modelle und lokale Ollama-Implementierungen erfüllen EU AI Act-Anforderungen an Datenspeicherorte — Prompts und Outputs verlassen nie Ihre Infrastruktur. Dies ist der reibungsloseste Weg zu EU GDPR + AI Act-Konformität für Prompt Engineers.',
            'GPT-5.5 und Claude Opus 4.8 sind ab August 2025 GPAI-konform unter dem EU AI Act. Sie können sie in EU-bezogenen Implementierungen ohne zusätzliche Konformitätsarbeit auf Modellebene verwenden — Ihre Verpflichtung liegt auf der Anwendungsebene (Bereitsteller), nicht auf der Modellebene.',
            'Der Brussels Effect bedeutet, dass Prompts, die für EU-Bewohner bestimmte Produkte an US-gehostete Modelle gesendet werden, EU AI Act-Anforderungen unterliegen — auch wenn Ihr Unternehmen nicht in der EU ansässig ist.',
            'Für Multi-Jurisdiktions-Tests versenden Sie denselben Prompt gleichzeitig an Mistral (EU-konform), GPT-5.5 (US/GPAI) und Qwen (China-zugänglich), um Outputs über Regulierungskontexte hinweg zu vergleichen. PromptQuorum unterstützt dies nativ.',
          ],
        },

        promptOptimizationByRegion: {
          title: 'Wie Geopolitik die Prompt-Optimierung ändert: Land für Land',
          content: [
            '**Wo Ihre KI-Ausgabe verbraucht wird, bestimmt, was Ihre Prompts tun müssen — und was sie vermeiden müssen.** Sprache beeinflusst die Modellleistung direkt: Ein auf Englisch geschriebener Prompt, der an ein chinesisches Modell (ERNIE 4.0, Qwen) gesendet wird, ist schlechter als der gleiche Prompt, der auf Mandarin geschrieben ist. Gesetze beeinflussen das Prompt-Design strukturell: EU AI Act-Offenlegungsanforderungen, US-Sektorregulierung und Chinas CAC-Inhaltsfilter legen jeweils unterschiedliche Zwänge darauf auf, wie Prompts formuliert werden können, welche Outputs generiert werden können und wie Anwendungen auf Antworten reagieren müssen.',
          ],
          tableFormat: true,
          columns: ['Region', 'Gesetzliche Einschränkung für Prompts', 'Sprachoptimierung', 'Empfohlenes Modell'],
          rows: [
            {
              'Region': 'Europäische Union',
              'Gesetzliche Einschränkung für Prompts': 'EU AI Act: Prompts, die Inhalte für EU-Verbraucher generieren, müssen KI-Offenlegung enthalten. GDPR: Prompts dürfen personenbezogene Daten nicht ohne Rechtsgrundlage enthalten. Hochrisiko-KI-Anwendungen (HR, Kredit, Gesundheitswesen) erfordern Überwachung durch Menschen — Prompts dürfen finale Entscheidungen nicht automatisieren.',
              'Sprachoptimierung': 'Schreiben Sie Prompts in der Zielsprache (Deutsch, Französisch usw.) — GPT-5.5 und Claude Opus 4.8 performen deutlich besser bei Nicht-Englisch-Aufgaben, wenn Prompts in der gleichen Sprache wie die gewünschte Ausgabe sind. Geben Sie die Ausgabesprache in System-Prompts explizit an.',
              'Empfohlenes Modell': 'Mistral Large (Französisch, in der EU ansässig), lokale Ollama-Implementierung (Daten verlassen nie die Infrastruktur) oder GPT-5.5/Claude mit EU-Region API-Endpoints und SCCs.',
            },
            {
              'Region': 'Vereinigte Staaten',
              'Gesetzliche Einschränkung für Prompts': 'Kein bundesweites KI-Gesetz, aber Sektorregeln gelten: HIPAA (Gesundheitswesen — PHI darf nicht in Prompts vorkommen), CCPA/CPRA (Kalifornien — personenbezogene Daten in Prompts triggern Verbraucherrechte), FTC Act (Prompts dürfen keinen täuschenden Inhalt in Verbraucherkontext generieren). Biometrische Gesetze der Bundesstaaten (Illinois BIPA) beschränken Prompts, die Gesichts-/Sprachdaten verarbeiten.',
              'Sprachoptimierung': 'US-Frontier-Modelle (GPT-5.5, Claude Opus 4.8) sind Englisch-optimiert und erreichen ihre Spitzenleistung bei Englisch-Prompts. Für spanischsprachige US-Märkte instrui Sie das Modell explizit auf Spanisch oder verwenden Sie einen zweisprachigen System-Prompt — verlassen Sie sich nicht auf automatische Erkennung.',
              'Empfohlenes Modell': 'GPT-5.5 oder Claude Opus 4.8 für allgemeine Nutzung. Für regulierte Gesundheits- oder Finanz-Prompts verwenden Sie API mit SCCs und senden Sie keine PHI/PII im Prompt-Kontext.',
            },
            {
              'Region': 'China',
              'Gesetzliche Einschränkung für Prompts': 'CAC Generative AI Measures (2023): Prompts, die Inhalte zu KP-Führung, Taiwan/Tibet/Xinjiang-Unabhängigkeit, die Tiananmen-Ereignisse von 1989 oder alles, das "sozialistische Kernwerte" untergräbt, anfordern, werden blockiert. Zurückgegeben als HTTP 200 mit `is_safe: 0`. PIPL: Prompts mit personenbezogenen Daten chinesischer Nutzer dürfen nicht an Nicht-China-Server weitergeleitet werden.',
              'Sprachoptimierung': 'Schreiben Sie Prompts in vereinfachtem Chinesisch (Mandarin) für chinesischsprachige Aufgaben — Qwen 3 und ERNIE 4.0 erreichen 10–20% höhere Scores bei chinesischsprachigen Benchmarks (C-Eval) vs. den gleichen Prompt auf Englisch. Verwenden Sie Pinyin oder Englisch für technische Terminologie, wenn es kein chinesisches Äquivalent gibt.',
              'Empfohlenes Modell': 'Qwen 3 72B (selbst-gehostet außerhalb Chinas, keine CAC-Filter) für grenzüberschreitende Aufgaben. ERNIE 4.0 via Qianfan API (CAC-registriert) für verbrauchernahe China-Implementierungen. DeepSeek R1 für Reasoning-Aufgaben, die gefilterte Inhaltsbereiche nicht berühren.',
            },
            {
              'Region': 'UK / Post-Brexit',
              'Gesetzliche Einschränkung für Prompts': 'UK GDPR (äquivalent zu EU GDPR) gilt für personenbezogene Daten. UK AI Safety Institute konzentriert sich auf Frontier-Modell-Evaluierung, nicht auf Konformität auf Anwendungsebene. Kein verbindliches KI-Offenlegungsgesetz — UK wählte einen innovationsfreundlichen, sektorgeführten Ansatz. OFCOM reguliert KI-generierte Inhalte in Broadcast-Kontexten.',
              'Sprachoptimierung': 'Britisches Englisch Rechtschreibungen und Redewendungen in Prompts verbessern die Ausgabequalität für UK-bezogene Inhalte. GPT-5.5 antwortet auf explizite "UK English"-Anweisungen in System-Prompts; ohne diese standardmäßig auf American English.',
              'Empfohlenes Modell': 'GPT-5.5 oder Claude Opus 4.8. UK-EU-Datenübertragungen erfordern SCCs post-Brexit — UK-Angemessenheitsentscheidung der EU ist vorhanden, aber Überprüfung unterliegt.',
            },
            {
              'Region': 'Japan',
              'Gesetzliche Einschränkung für Prompts': 'Japans Act on Protection of Personal Information (APPI) beschränkt die Verwendung personenbezogener Daten in KI-Prompts. Japan hat kein KI-spezifisches Gesetz (ab 2026) — Richtlinien von METI und Ministry of Internal Affairs sind freiwillig. Japan nahm am Hiroshima AI Process teil — Einhaltung seiner 11 Prinzipien wird für japanische Unternehmungen empfohlen.',
              'Sprachoptimierung': 'Japanische Prompts für japanischsprachige Aufgaben outperformen Englisch-Prompts über alle großen Modelle. GPT-5.5 und Claude Opus 4.8 behandeln Japanisch gut; Rakuten AI und NTT LLMs sind für Japan-spezifische Implementierungen verfügbar. Vermeiden Sie Casual (tame-go) Register in System-Prompts — höfliche (keigo) Formulierung verbessert Konformität und Ausgabequalität für japanische Geschäftskontexte.',
              'Empfohlenes Modell': 'GPT-5.5 oder Claude Opus 4.8 für allgemeine japanische Aufgaben. Rakuten AI (Rakuten Group) oder NTT LLMs für Japan-inländische Konformitäts-sensitive Implementierungen.',
            },
          ],
        },

        keyStatistics: {
          title: 'KI-Geopolitik: Wichtige Datenpunkte',
          content: [
            'Die folgenden Zahlen stellen das Ausmaß der staatlichen KI-Investitionen, der Hardware-Konzentration und der Forschungskapazität dar, die den aktuellen geopolitischen Wettbewerb in der künstlichen Intelligenz definieren.',
          ],
          items: [
            '**Staatliche KI-Investitionen — Vereinigte Staaten:** 52 Milliarden USD, die durch den CHIPS and Science Act (2022) für inländische Halbleiterfertigung zugewiesen werden, plus 200 Milliarden USD für Wissenschaft F&E. Der National AI Initiative Act finanziert KI-Forschung über 25 Bundesbehörden.',
            '**Staatliche KI-Investitionen — China:** Geschätzte 1 Billion CNY (140 Milliarden USD) an staatlich geleiteten KI- und Halbleiter-Investitionen 2021–2025, einschließlich des National New Generation AI Development Plan, das 2030 globale KI-Führerschaft anstrebt.',
            '**Staatliche KI-Investitionen — Europäische Union:** 1 Milliarde EUR aus dem European Innovation Council AI-Fonds; nationale Strategien fügen 10+ Milliarden EUR hinzu: Deutschland 5 Milliarden EUR (2019–2025), Frankreich 2 Milliarden EUR, UK 1 Milliarde GBP in KI-Sicherheit und Rechenleistung.',
            '**Halbleiter-Fertigungskonzentration:** TSMC (Taiwan) stellt etwa 90% der weltweit fortschrittlichsten Chips unter 7nm her. ASML (Niederlande) ist der alleinige Hersteller von EUV-Lithographiemaschinen, die für fortgeschrittene Knoten-Fertigung erforderlich sind — was den Niederlanden einen strukturellen Engpass in der globalen Chip-Versorgung gibt.',
            '**Nvidia GPU-Marktanteil:** Nvidia hält etwa 80% Marktanteil bei KI-Trainings-GPUs. Die H100 und H200 Serie treiben die Mehrheit des Frontier-Modell-Trainings bei OpenAI, Google DeepMind, Anthropic und Baidu an.',
            '**Verteilung von KI-Forschern:** Die USA beschäftigen etwa 40% der weltbesten KI-Forscher nach Veröffentlichungseinfluss (Stanford HAI 2024 AI Index). China produziert die meisten Informatik-Doktorate — etwa 50.000 pro Jahr — und macht ~30% der Top-KI-Konferenz-Autoren aus.',
            '**KI-Patentanmeldungen:** China reichte etwa 70% der globalen KI-Patente 2022 ein (WIPO Global Innovation Index). Die USA führen bei Zitationen und kommerzialisierte Erfindungen; China führt nach Volumen.',
            '**Kostenreduktion beim Modell-Training:** 94% Kostenreduktion — GPT-4 wird auf etwa 100 Millionen USD beim Trainings-Compute geschätzt (2023) vs DeepSeek R1\'s berichtete etwa 6 Millionen USD (Januar 2025). Diese Lücke zeigt, dass US-Compute-Export-Kontrolle chinesische Frontier-KI nicht dauerhaft einschränken kann.',
            '**EU AI Act Abdeckung:** Der Act deckt 450 Millionen Verbraucher über 27 EU-Mitgliedstaaten ab. Der Systemrisiko-Schwellwert für GPAI-Modelle ist 10²⁵ FLOPs Trainings-Compute — das Niveau, bei dem zusätzliche Adversarial-Test-Anforderungen gelten.',
            '**Bletchley Declaration (November 2023):** Von 28 Nationen unterzeichnet, einschließlich USA, China und EU-Mitgliedstaaten — der breiteste internationale KI-Sicherheitskonsens bis heute, obwohl nicht bindend.',
          ],
        },

        qaWhyStrategic: {
          title: 'Warum ist KI strategisch wichtig?',
          content: [
            'KI ist strategisch wichtig, weil sie die Leistung über jede Dimension der nationalen Macht gleichzeitig verstärkt — wirtschaftliche Produktivität, militärische Effektivität, Geheimdienstanalyse und Cyber-Operationen. Nationen mit führender KI können wissenschaftliche Forschung automatisieren, militärische Logistik optimieren, Überwachungsdaten im großen Maßstab verarbeiten und autonome Waffensysteme entwickeln. Die OECD prognostiziert, dass KI bis 2030 15,7 Billionen USD zum globalen BIP hinzufügen könnte, was KI-Führerschaft dem äquivalent macht zu industrieller Führerschaft im 20. Jahrhundert. Länder, die bei KI-Leistung zurückbleiben, sehen sich kumulative Nachteile über Verteidigung, Handel und Diplomatie.',
          ],
        },

        qaWhichCountriesDominate: {
          title: 'Welche Länder dominieren die KI-Entwicklung?',
          content: [
            'Die Vereinigten Staaten dominieren Frontier-Modell-Leistung — OpenAI (GPT-5.5), Anthropic (Claude) und Google DeepMind (Gemini) sind alle in der USA ansässig. China führt beim KI-Patent-Volumen (~70% globaler Patente 2022 per WIPO) und hat die fähigsten inländischen Modelle außerhalb der USA: Alibaba Qwen 3, Baidu ERNIE 4.0 und DeepSeek R1. Die EU führt bei KI-Regulierung, bleibt aber bei Frontier-Leistung zurück — Frankreichs Mistral AI ist der stärkste europäische Kandidat. UK, Kanada und UAE investieren in KI als unabhängige Akteure statt exklusiv mit US oder chinesischer Infrastruktur zu alignieren.',
          ],
        },

        qaChipsRole: {
          title: 'Welche Rolle spielen Chips in der KI-Geopolitik?',
          content: [
            'Halbleiter-Chips sind das physische Substrat der KI-Leistung. Das Training von Frontier-Modellen erfordert Tausende spezialisierte GPUs, die monatelang laufen — eine einzelne Training-Lauf für ein großes Modell kann 10–100 Millionen USD Trainings-Compute kosten. Nvidia hält etwa 80% des KI-Trainings-GPU-Marktes; TSMC in Taiwan stellt sie her. Dies schafft zwei geopolitische Engpässe: Die USA können Nvidia GPU-Exporte zu Gegnernationen einschränken (A100 und H100-Verkäufe nach China seit 2022 eingeschränkt), und jede Störung von TSMCs Operationen würde sofort die globale KI-Hardware-Versorgung reduzieren. Der US CHIPS and Science Act (52 Milliarden USD) finanziert explizit inländische Fab-Kapazität, um diese Single-Point-Abhängigkeit zu reduzieren.',
          ],
        },

        qaHowAIChangePower: {
          title: 'Wie könnte KI die globale Macht verändern?',
          content: [
            'KI könnte globale Macht verschieben, indem KI-führende Nationen unverhältnismäßig mächtig relativ zu ihrer wirtschaftlichen oder Bevölkerungsgröße werden. Militärisch ermöglicht KI autonomes Targeting, Logistik-Optimierung und Signals-Intelligence-Verarbeitung bei Geschwindigkeiten, die kein menschlich besetztes System erreichen kann. Wirtschaftlich verstärken sich KI-Produktivitätsgewinne — Nationen mit Frontier-KI-Zugang könnten BIP-Wachstumsraten aufrechterhalten, die die Lücke mit denen ohne vergrößern. Diplomatisch gewinnen Nationen, die KI-Infrastruktur exportieren — Hardware, Modelle, Governance-Rahmen — Soft Power und schaffen Abhängigkeitsbeziehungen vergleichbar denen, die Ölexporte oder Telekommunikationsinfrastruktur in früheren Ären schufen. Der Brussels Effect der EU tut dies bereits durch Regulierung: Der EU AI Act formt globale KI-Entwicklung, ohne dass die EU bei Modell-Leistung führt.',
          ],
        },

        geopoliticsOfAI: {
          title: 'Die Geopolitik der künstlichen Intelligenz',
          content: [
            '**Die Geopolitik der künstlichen Intelligenz ist das Studium, wie Staaten KI-Leistung, KI-Regulierung und KI-Infrastruktur als Instrumente der Macht nutzen.** Sie umfasst drei unterschiedliche Wettbewerbe: das Rennen, die fähigsten Modelle zu bauen, der Wettstreit darüber, deren Regulierungsrahmen globale KI-Bereitstellung regiert, und der Kampf um die Kontrolle der Hardware-Supply-Chains, die Frontier-KI möglich machen.',
            'Jede Dimension hat konkrete Konsequenzen für Organisationen. Modell-Leistung bestimmt, welche KI-Tools verfügbar sind. Regulierungsrahmen bestimmen, welche Tools zulässig sind und welche Dokumentation erforderlich ist. Hardware-Kontrolle bestimmt, welche Nationen Frontier-KI-Entwicklung unabhängig aufrechterhalten können — und welche nicht. Die USA, China und die EU verfolgen unvereinbare Strategien über alle drei Dimensionen gleichzeitig.',
          ],
        },

        keyEntityRelationships: {
          title: 'Schlüsselorganisationen in der KI-Geopolitik und ihre Beziehungen',
          content: [
            '**KI-Regulierung** ist die Gesamtheit von Gesetzen, Exekutivverordnungen und freiwilligen Rahmenbedingungen, die regeln, wie künstliche Intelligenzsysteme entwickelt, bereitgestellt und regiert werden. KI-Regulierung wird von souveränen Staaten und internationalen Körperschaften produziert; die drei primären Regulierungsregime sind der EU AI Act (Europäische Union), das NIST AI Risk Management Framework (Vereinigte Staaten) und die CAC Generative AI Measures (China).',
            '**Der US-China-Tech-Wettstreit** ist der bilaterale Wettbewerb zwischen den Vereinigten Staaten und China um Führerschaft in Halbleitern, künstlicher Intelligenz und fortgeschrittener Fertigung. Der Wettstreit wird ausgedrückt durch US-Exportkontrollen auf Nvidia GPUs, Chinas inländische Substitutionsstrategie (Made in China 2025) und konkurrierende KI-Governance-Rahmen. Die EU ist ein dritter Akteur — keine bilaterale Partei — der den Wettstreit durch seine Regulierungsmacht formt.',
            '**Der EU AI Act** ist eine Verordnung, die das Europäische Parlament im März 2024 verabschiedete. Sie wird durchgesetzt durch das EU AI Office und nationale Marktüberwachungsbehörden. Sie gilt für jede Organisation — unabhängig vom Hauptsitz — deren KI-Systeme EU-Nutzer beeinflussen. Der EU AI Act steht in Beziehung zum Brussels Effect: Weil er extraterritorial gilt, reguliert er tatsächlich OpenAI, Google DeepMind und Anthropic global.',
            '**NVIDIA** ist ein US-Halbleitunternehmen, das KI-Trainings-GPUs entwirft (H100, H200, B200 Serie). NVIDIAs Hardware ist das primäre Berechnungs-Substrat für das Training von GPT-5.5, Claude, Gemini und den meisten Frontier-KI-Modellen. US-Exportkontrollen auf NVIDIA GPUs nach China sind ein zentraler Mechanismus im US-China-Tech-Wettstreit. NVIDIAs Marktposition (~80% KI-GPU-Anteil) macht es zu einem geopolitischen Akteur sowie zu einem kommerziellen.',
            '**TSMC** (Taiwan Semiconductor Manufacturing Company) ist eine taiwanische Chip-Gießerei, die fortgeschrittene Halbleiter für NVIDIA, Apple, AMD und Google herstellt. TSMCs geografische Lage in Taiwan — und der umstrittene politische Status der Insel — macht TSMC zu einer kritischen Variablen in der KI-Geopolitik. Der CHIPS and Science Act wurde teilweise verabschiedet, um die US-Abhängigkeit von TSMC durch Finanzierung inländischer US-Fabs zu reduzieren.',
            '**DeepSeek** ist ein chinesisches KI-Labor (unterstützt von High-Flyer Capital Management), das DeepSeek R1 im Januar 2025 freigab. DeepSeek R1 entsprach GPT-5.5 bei mehreren Benchmarks, während es angeblich bei einem Bruchteil der Kosten trainiert wurde, unter Verwendung von China-beschränkten NVIDIA H800 GPUs. DeepSeeks Freigabe schwächte das Argument, dass US-Exportkontrollen chinesische Frontier-KI-Entwicklung dauerhaft begrenzen könnten.',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: '5 geopolitische Dimensionen der KI',
          content: [
            'KI-Geopolitik funktioniert über fünf unterschiedliche Dimensionen. Jede stellt eine separate Wettkampfarena zwischen USA, China und EU dar — und jede schafft unterschiedliche Verpflichtungen und Risiken für Organisationen, die KI bereitstellen.',
          ],
          items: [
            '**1. Wirtschaft.** KI treibt Produktivität, Automatisierung und BIP-Wachstum. Nationen mit überlegener KI-Leistung gewinnen Fertigungseffizienz, finanzielle Modellierungsvorteile und schnellere wissenschaftliche Entdeckung. Die OECD prognostiziert, dass KI bis 2030 15,7 Billionen USD zum globalen BIP hinzufügen könnte — die Mehrheit erfasst durch führende KI-Nationen.',
            '**2. Militär.** KI ermöglicht autonome Waffensysteme, prädiktive Logistik, Schlachtfeld-Intelligence-Verarbeitung und Cyber-Operationen mit Maschinengeschwindigkeit. USA, China und Russland entwickeln alle KI-gestützte Militärsysteme. Das US DoD\'s Joint Artificial Intelligence Center (JAIC) und Chinas Military-Civil Fusion Strategie priorisieren beide KI für nationale Verteidigung.',
            '**3. Geheimdienste.** KI verarbeitet Satellitenbilder, fängt Signale ab und analysiert Open-Source-Daten im großen Maßstab, unmöglich für menschliche Analysten. NSA, GCHQ und Chinas MSS nutzen KI alle für Geheimdienstsammlung und Analyse. KI-generierte synthetische Medien (Deepfakes) sind ein aufkommendes Geheimdienstinstrument und Einflussoperation-Tool.',
            '**4. Infrastruktur.** KI hängt von physischer Infrastruktur ab: Halbleiter-Fabs (TSMC, Samsung, Intel), Datenzentren, unterseeische Kabel und Stromnetze. Nationen, die kritische KI-Infrastruktur kontrollieren — Chip-Fertigung, Cloud-Plattformen, Trainings-Rechenleistung — halten strukturelle Hebelwirkung über diejenigen, die dies nicht tun.',
            '**5. Globale Governance.** Welcher Regulierungsrahmen zur globalen Standard wird, bestimmt, was KI-Systeme tun können, welche Daten sie nutzen können und welche Organisationen sie bereitstellen können. Der EU AI Act, US NIST-Rahmen und Chinas CAC-Regulierungen stellen drei konkurrierende Governance-Modelle dar — und der Brussels Effect bedeutet, dass das EU-Modell bereits über ihre Grenzen hinweg gilt.',
          ],
        },

        threeWayRace: {
          title: 'Das KI-Wettrüsten: USA, China und die EU',
          content: [
            '**Drei unvereinbare Visionen der KI-Governance konkurrieren um globale Übernahme — die USA priorisieren Innovation und Wettbewerbsfähigkeit, China nutzt staatliche Richtung, um strategische KI-Dominanz zu erreichen, und die EU baut einen rechtsbasierten rechtlichen Rahmen, der ihre Standards global durch den Brussels Effect exportiert.** Dieses KI-Wettrüsten ist hauptsächlich zivil: die führenden Labs sind private Unternehmen (OpenAI, Anthropic, Google DeepMind, Baidu, Alibaba), aber die Einsätze — Regulierungskontrolle, Hardware-Supply-Chains und Talente — sind geopolitisch.',
            'Das Rennen geht nicht nur darum, wer die fähigsten Modelle baut. Es geht darum, welcher Regulierungsrahmen zur globalen Standard wird. Der EU AI Act, indem er auf jedes KI-System gilt, das für EU-Nutzer bereitgestellt wird, hat bereits Brüssel zum effektiven Regulator von OpenAI, Anthropic und Google DeepMind global gemacht. Hardware-Kontrolle ist eine dritte Dimension: Der CHIPS and Science Act (52 Milliarden USD) und Nvidia GPU-Exportkontrollen zielen darauf ab, Chinas Compute-Zugang zu begrenzen. DeepSeeks R1-Freigabe im Januar 2025 — wettbewerbsfähig mit GPT-5.5 bei einem Bruchteil der Trainings-Kosten — zeigte, dass diese Kontrollen Grenzen haben. Siehe [open-source vs proprietary LLMs](/prompt-engineering/open-source-vs-proprietary-llms) für wie diese Dynamiken Modell-Verfügbarkeit beeinflussen.',
          ],
          items: [
            '**US-Position:** Führt bei Frontier-Modell-Leistung (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro), Chip-Design (Nvidia, AMD) und KI-Investitionen (67 Mrd. USD private Investition 2023 pro OECD). Kein einheitliches bundesweites KI-Gesetz — beschleunigt Bereitstellung, schafft aber Compliance-Fragmentierung.',
            '**Chinas Position:** Führt bei KI-Patent-Volumen, Gesichtserkennung im großen Maßstab und staatlich geleiteter Infrastruktur-Bereitstellung. Modelle (Qwen 3, ERNIE 4.0, DeepSeek R1) sind bei vielen Benchmarks wettbewerbsfähig. Hardware-Abhängigkeit von Nvidia-Architekturen ist die primäre strategische Schwachstelle, die Export-Kontrolle anvisiert.',
            '**Europas Position:** Führt bei KI-Regulierung — der EU AI Act ist das globale Referenz-Framework — und Open-Weights-Forschung (Mistral aus Frankreich). Bleibt bei Frontier-Modell-Leistung und private Investitionen zurück. Kompensiert durch Regulierungs-Hebelwirkung: Der Brussels Effect zwingt US- und chinesische Anbieter, EU-Standards für globale Produkte zu erfüllen.',
            '**Die Hardware-Schicht:** Nvidia H100/H200 GPUs dominieren KI-Training. US-Exportkontrollen beschränken Verkäufe nach China. DeepSeek R1 trainiert auf beschränkten H800 GPUs bei berichteten ~6 Mio. USD — eine 94% Kostenreduktion vs GPT-5.5 Trainings-Schätzungen — zeigt, dass Hardware-Kontrolle chinesische Frontier-KI nicht gestoppt hat.',
          ],
        },

        euAiAct: {
          title: 'Der EU AI Act: Was er tatsächlich verlangt',
          content: [
            '**Der EU AI Act klassifiziert KI-Systeme in vier Risiko-Stufen, mit Anforderungen und Geldstrafen, die auf die Höhe des Risikos skaliert werden, das das System für Grundrechte und Sicherheit darstellt.** Das Europäische Parlament verabschiedete den Act im März 2024 mit 523 Stimmen dafür, 46 dagegen und 49 Enthaltungen — der breiteste politische Konsens von jeder großen KI-Gesetzgebung global.',
            'Der Act gilt für Anbieter, die KI-Systeme auf dem EU-Markt platzieren, Bereitsteller, die KI-Systeme innerhalb der EU nutzen, und Importeure und Vertriebspartner — unabhängig davon, wo sich diese Organisationen befinden. Ein US-Unternehmen, dessen KI-Output in EU-Mitgliedstaaten genutzt wird, muss konform sein.',
          ],
          items: [
            '**Inakzeptables Risiko (verboten):** Soziales Scoring durch öffentliche Behörden; Echtzeit-Biometrische Identifizierung in öffentlichen Räumen (enge Strafverfolgungsausnahmen erlaubt); KI nutzt kognitive Schwachstellen aus; unkontrolliertes Gesichtsbild-Scraping. Diese sind ab August 2024 an verboten.',
            '**Hohes Risiko:** KI in kritischer Infrastruktur, Bildung, Beschäftigung, wesentlichen Dienstleistungen (Kredit, Leistungen), Strafverfolgung, Grenzschutz und Rechtsverwaltung. Erfordert Konformitätsbewertungen, Transparenzdokumentation, menschliche Überwachung und Registrierung in der EU-Datenbank.',
            '**Begrenzte Risiko:** Chatbots und KI-generierte Inhalte. Erfordert Offenlegung — Nutzer müssen wissen, dass sie mit KI interagieren.',
            '**Minimalrisiko:** Spam-Filter, KI in Videospielen, Empfehlungssysteme ohne signifikanten Einfluss. Keine spezifischen Verpflichtungen über bestehendes Recht hinaus.',
            '**General Purpose AI (GPAI):** Modelle wie GPT-5.5, Claude und Gemini müssen Trainingsdaten-Zusammenfassungen veröffentlichen, EU-Urheberrechtsgesetz befolgen und schwerwiegende Vorfälle melden. Modelle mit Systemrisiko (trainiert mit >10^25 FLOPS) sehen zusätzliche Adversarial-Testing-Anforderungen. GPAI-Regeln galten ab August 2025.',
            '**Durchsetzung:** EU AI Office (innerhalb der Europäischen Kommission) überwacht GPAI-Modelle. Nationale Marktüberwachungsbehörden setzen Hochrisiko-KI-Regeln durch. Geldstrafen: bis zu 35 Mio. EUR oder 7% globaler Umsatz für verbotene Praktiken; 15 Mio. EUR oder 3% für Hochrisiko-Verstöße.',
            '**Zeitplan:** Verbotene Praktiken: August 2024. GPAI-Verpflichtungen: August 2025. Hochrisiko-KI-Systeme: August 2026. Hochrisiko-KI in reglementierten Produkten: August 2027.',
          ],
        },

        euMemberStates: {
          title: 'EU-Mitgliedstaaten: nationale KI-Strategien',
          content: [
            '**Jeder EU-Mitgliedstaat hat eine nationale KI-Strategie angenommen, aber Investitionsniveaus, Fokus-Bereiche und Umsetzungstempo variieren erheblich.** Frankreich und Deutschland führen bei Finanzierung; die nordischen Staaten führen bei Governance-Rahmen; zentrale und östliche europäische Staaten integrieren zunehmend KI in Verteidigung und öffentliche Verwaltung.',
          ],
          items: [
            '**Deutschland:** Bundesweite KI-Strategie (Nationale KI-Strategie), aktualisiert 2023. 5 Mrd. EUR in KI-Forschung, Infrastruktur und Talente 2019–2025 über Bundesprogramme investiert. Sechs KI-Kompetenzentren an großen Universitäten. Bundestag-Debatten zur KI-Haftung laufen. Fraunhofer-Gesellschaft und DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz) sind Schlüssel-Forschungsinstitutionen.',
            '**Frankreich:** 2 Mrd. EUR öffentliche KI-Investition von Präsident Macron angekündigt (2024). France AI (Regierungskoordinationsorgan) verwaltet nationale Strategie. Paris veranstaltete den AI Action Summit im Februar 2025 — der erste G7-Ebene KI-Governance-Gipfel unter französischer EU-Präsidentschaft. CNRS und INRIA führen akademische KI-Forschung. Frankreich unterstützt Open-Weights-KI als strategische Alternative zu US-API-Abhängigkeit.',
            '**Niederlande:** Nationale KI-Strategie 2024-Update, KI-Regulierungs-Sandbox betrieben von ACM (Behörde für Verbraucher und Märkte). Amsterdam beherbergt SURF (nationales Forschungsnetzwerk) KI-Cluster. Niederländische Datenschutzbehörde (AP) gab GDPR-Durchsetzungsleitlinien speziell für KI-Systeme aus.',
            '**Polen:** Nationales KI-Entwicklungsprogramm konzentriert sich auf KI für Verteidigung, Cybersicherheit und öffentliche Verwaltung. Polen gehört zu den höchsten pro-Kopf-Ausgebern für Verteidigungstechnologie in der NATO und integriert KI in Militärbeschaffung. Warschau beherbergt ein wachsendes KI-Startup-Ökosystem, teilweise angetrieben durch ukrainische Tech-Talentrelokation post-2022.',
            '**Spanien:** Spaniens nationale KI-Strategie (ENIA) teilt 600 Millionen EUR 2021–2025 zu. Real Instituto Elcano-Forschung zu KI und Geopolitik ist international zitiert. Spanien etablierte die AESIA (Spanische Agentur für die Überwachung von Künstlicher Intelligenz) — der erste nationale KI-Regulator in der EU, etabliert 2023.',
            '**Schweden:** Schwedische KI-Kommission veröffentlichte ihren Bericht 2024 mit 60+ Empfehlungen zu Bildung, öffentlichem Sektor-Einsatz und Innovation. Vinnova (Schwedens Innovationsagentur) finanziert KI-Forschung. Schweden ist die Heimat von Spotifys KI-Empfehlungssystemen und H&Ms KI-gestütztem Bestandsverwaltung — häufig zitiert als Private-Sector-KI-Adopter Fallstudien.',
            '**Italien:** Italien hielt 2024 die G7-Präsidentschaft, die den Hiroshima AI Process Code of Conduct produzierte — 11 Leitprinzipien für fortgeschrittene KI-Entwickler, angenommen von G7-Nationen. Italiens Garante (Datenschutzbehörde) blockierte ChatGPT vorübergehend im März 2023 über GDPR-Bedenken — später gelöst nach OpenAI die Transparenzmaßnahmen umsetzte. Dies war die erste nationale ChatGPT-Restriktion in der EU.',
          ],
        },

        franceMistral: {
          title: 'Frankreich & Mistral: Europäische KI-Unabhängigkeit aufbauen',
          content: [
            '**Frankreich baut einen strategischen Gegenpoint zu US-KI-Dominanz durch öffentliche Investition und Mistral AI — positioniert Open-Weights-Modelle als Europas Weg zu KI-Souveränität.** Mistral stellt die lebensfähigste Alternative der EU zu GPT-5.5 und Claude dar, und Frankreichs 2 Mrd. EUR KI-Investition ist explizit entworfen, um Unternehmen wie Mistral zu finanzieren und die Abhängigkeit von OpenAI, Google und Anthropic zu reduzieren.',
            '**Mistral AI (gegründet 2023):** Gegründet von Arthur Mensch, Guilaume Blanc und Tim Caron — alle ehemalige Meta-Mitarbeiter. Mistral gab Mistral Small (Open-Weights) im September 2023 frei, gefolgt von Mistral Large 2 (wettbewerbsfähig mit GPT-5.5 bei vielen Aufgaben). Mistral Large 2 bewertet 81,2% auf MMLU vs GPT-5.5\'s 88,7%, passt aber zu proprietären Modellen bei Klassifizierung, Zusammenfassung und Extraktionsaufgaben. 123K Token-Kontextfenster. Lizenziert unter Mistral Community License (erlaubt kommerzielle Nutzung; Ableitungs-Namensrestriktionen ähnlich LLaMA).',
            '**Warum Frankreich Open-Weights wählte:** Frankreichs Position ist, dass proprietäre APIs Anbieter-Lock-in, Datenresidenz-Risiken und langfristige Abhängigkeit von US-Unternehmen schaffen. Open-Weights-Modelle können auf europäischer Infrastruktur bereitgestellt werden, Daten innerhalb der EU-Jurisdiktionen halten und GDPR/AI Act-Reibung mit US-Cloud-Anbietern vermeiden. Dies aligniert sich mit dem Brussels Effect — durch die Sicherstellung von Mistrals Konformität mit dem EU AI Act stärkt Frankreich Europas Regulierungs-Hebelwirkung global.',
            '**Regierungsunterstützung:** Französische Regierungsunterstützung via La Caisse des Dépôts et Placements (staatlicher Investitionsfonds) und direkte Subventionen. Mistral erhielt 385 Millionen EUR Series B Finanzierung (Februar 2024) mit Unterstützung von französischen strategischen Investoren. Positioniert als "europäischer Champion" in KI — ähnlich, wie Airbus als europäischer Luft- und Raumfahrt-Gegenpoint zu Boeing gebaut wurde.',
          ],
        },

        nonEuEurope: {
          title: 'Nicht-EU-Europa: UK, Schweiz, Norwegen, Ukraine',
          content: [
            '**Vier große nicht-EU-europäische Staaten haben unterschiedliche KI-Governance-Pfade gewählt, keine von denen vollständig mit dem EU AI Act aligniert — schaffend eine fragmentierte europäische Regulierungslandschaft.** Für Organisationen, die über europäische Jurisdiktionen funktionieren, bedeutet das, dass Compliance-Stacks zwischen EU-Mitgliedstaaten und Nachbarländern unterschiedlich sind.',
          ],
          items: [
            '**Vereinigtes Königreich:** Post-Brexit wählte UK einen innovationsfreundlichen, sektorgeführten Ansatz ohne AI-spezifische Gesetzgebung ab 2026. Die bestehenden Regulatoren (FCA, ICO, Ofcom, CMA) wenden ihre Sektormandate auf KI an. Das UK AI Safety Institute (AISI), etabliert November 2023 nach dem Bletchley Park AI Safety Summit, führt Frontier-Modell-Evaluierungen durch und veröffentlicht Sicherheitsberichte. Die UK-Regierung verpflichtete sich zu £900 Millionen zu KI-Compute-Infrastruktur. UK-Organisationen unterliegen nicht dem EU AI Act, aber viele konform, um EU-Marktzugang zu halten.',
            '**Schweiz:** Schweiz erhält KI-Neutralität — kein nationales KI-Gesetz, keine Pläne für eines. Der Bundesrat verlässt sich auf bestehende Gesetzgebung (Datenschutz, Produkthaftung, Sektorregulation). Schweiz beherbergt den UN AI for Good Summit in Genf jährlich, CERNs AI-für-Wissenschaft-Programme und große europäische Forschungsinstitutionen (ETH Zürich, EPFL). Schweizer Neutralität erstreckt sich auf KI-Governance: das Land nimmt an OECD AI-Prinzipien teil, aligniert aber nicht mit weder EUs Regulierungs-Ansatz noch US-Wettbewerbs-Rahmen.',
            '**Norwegen:** Norwegen nimmt am Europäischen Wirtschaftsraum (EWR) teil, bedeutend, dass der EU AI Act gilt, wenn er in das EWR-Abkommen integriert wird — ein laufender Prozess. Norwegens Government Pension Fund Global (der weltgrößte Sovereign Wealth Fund, ~1,8 Billionen USD) veröffentlichte KI-Investitionskriterien, verlangend von Portfoliounternehmen, KI-Governance-Richtlinien offenzulegen. Equinor (Staats-Energieunternehmen) hat KI für Ölfeldoptimierung bereitgestellt. Norwegische Datenschutzbehörde (Datatilsynet) war aktiv bei KI-bezogener GDPR-Durchsetzung.',
            '**Ukraine:** Ukraine ist der aktivste Bereitsteller von KI in einem Live-Konflikt-Kontext. Das ukrainische Militär nutzt KI für Drohnen-Targeting, Signals-Intelligence, Satellitenbildanalyse und Logistik-Optimierung. Das Ministerium für Digitale Transformation (Мінцифра) hat KI-Kooperationsabkommen mit EU und USA unterzeichnet. Ukraine beantragte EU-Mitgliedschaft 2022 und aligniert seine digitale Gesetzgebung — einschließlich KI-Governance — mit EU-Standards als Teil von Beitrittserfordernissen. Ukrainische KI-Startups (einschließlich diejenigen hinter Grammarly und GitLab) haben Teams zu EU-Ländern verlegt, während technische Operationen aufrecht erhielten.',
          ],
        },

        usStrategy: {
          title: 'US-Strategie: Executive Orders, CHIPS Act, NIST',
          content: [
            '**Die Vereinigten Staaten haben kein föderales KI-Gesetz, und die Trump-Verwaltungs 2025-Aufhebung von Bidens KI-Sicherheits-Executive Order hat den Hauptrahmen für föderale Sicherheit rückgängig gemacht — Verschiebung der US-KI-Politik vollständig zur Wettbewerbsfähigkeit.** Dies schafft eine Regulierungs-Lücke zwischen USA und EU, die Cross-Atlantic-KI-Beschaffung und Datenteilung beeinflusst.',
          ],
          items: [
            '**Biden Executive Order zur KI-Sicherheit (Oktober 2023):** Verlangte von Frontier-KI-Entwicklern, Sicherheits-Testergebnisse mit der US-Regierung zu teilen, etablierte NIST-KI-Sicherheitsstandards, adressierte KI in kritischer Infrastruktur und nationaler Sicherheit. Aufgehoben durch Präsident Trump im Januar 2025.',
            '**Trump KI Action Plan (2025):** Ersetzt Bidens EO mit einem Fokus auf das Entfernen regulatorischer Barrieren für KI-Entwicklung, Aufrechterhaltung der US-Führerschaft über China und Förderung von KI-Exporten zu Verbündeten. Keine zwingenden Sicherheitsberichterstattungs-Anforderungen für KI-Entwickler.',
            '**CHIPS and Science Act (52 Milliarden USD):** Unterzeichnet August 2022. Finanziert inländische Halbleiterfertigung, F&E und Workforce-Entwicklung. Reduziert US-Abhängigkeit von Taiwans TSMC für fortgeschrittene Chips. Intel, TSMC und Samsung bauen US-Fabs mit CHIPS Act Finanzierung.',
            '**Exportkontrollen auf KI-Hardware:** Die Biden-Verwaltung beschränkte Exporte von fortgeschrittenen Nvidia A100 und H100 GPUs nach China und anderen Ländern von Bedenken. Die Restriktionen wurden im Oktober 2023 und Oktober 2024 erweitert. Nvidia schuf China-spezifische Chips (A800, H800), die innerhalb von Export-Grenzen fielen — diese wurden später auch eingeschränkt.',
            '**NIST KI Risk Management Framework (AI RMF 1.0):** Veröffentlicht Januar 2023. Ein freiwilliger Rahmen — nicht gesetzlich bindend — abdeckend KI-Vertrauenswürdigkeit über sieben Dimensionen: valid/reliabel, sicher, sicher/belastbar, erklärbar/interpretierbar, privatsphärenverbessert, fair mit verwalteter Voreingenommenheit, verantwortlich/transparent. Weit angenommen von US-Bundesbehörden und großen Unternehmungen als Compliance-Grundlage.',
            '**NSF National AI Research Institutes:** 200 Mio. USD+ investiert über 25 KI-Forschungsinstitute an US-Universitäten. Konzentriert sich auf fundamentale KI-Forschung, Sicherheit, Ethik und Domäne-Anwendungen (Gesundheitswesen, Landwirtschaft, Klima).',
          ],
        },

        chinaStrategy: {
          title: 'Chinas KI-Strategie: Made in China 2025, CAC-Regulierungen, DeepSeek',
          content: [
            '**Chinas KI-Strategie kombiniert staatlich geleitete Industriepolitik, restriktive inländische Inhalts-Regulierung und aggressive internationale KI-Diplomatie — eine Kombination, die wettbewerbsfähige Frontier-Modelle trotz US-Hardware-Exportkontrollen produziert hat.** Chinas Ansatz behandelt KI primär als eine strategische Leistung für wirtschaftliche Entwicklung, nationale Sicherheit und soziale Governance.',
          ],
          items: [
            '**Made in China 2025 und New Generation AI Development Plan (2017):** Chinas 2017 KI-Plan zielt auf globale KI-Führerschaft bis 2030 über Forschung, Talent, Produktentwicklung und Regulierung. Es teilte 15 Milliarden USD staatliche Finanzierung zu und setzte Benchmarks für KI-Patent-Output, Forschungs-Zitate und Industrie-Umsatz. KI wird bezeichnet als eine Kern-Strategische Technologie neben Halbleitern und Quantencomputing.',
            '**Cyberspace Administration of China (CAC) Algorithmus-Regulierungen (März 2022):** Verlangte von allen Algorithmen-basierte Empfehlungs-Systemen, die chinesische Nutzer bedienen, sich bei der CAC zu registrieren, offenzulegen wie Algorithmen funktionieren und Nutzern zu erlauben, aus personalisierten Empfehlungen auszusteigen. Erweitert zu generativer KI im Juli 2023 — alle generativen KI-Services müssen registrieren, eine Sicherheitsbewertung bestehen und Outputs sicherstellen, um sich mit "sozialistischen Kernwerten" zu alignieren.',
            '**DeepSeek R1 (Januar 2025):** Freigegeben von DeepSeek (ein chinesisches KI-Lab von High-Flyer-Hedgefonds unterstützt), R1 passte oder übertraf GPT-5.5 bei mehreren Benchmarks, einschließlich AIME 2024 (79,8% vs GPT-5.5\'s 74,4%), MATH-500 (97,3%) und HumanEval-Coding-Aufgaben. Trainiert auf Nvidia H800 GPUs — die China-spezifische Variante innerhalb von Exportkontroll-Grenzen. Die Freigabe triggerte einen signifikanten Drop in Nvidias Aktienkurs und beschleunigte US-Richtlinien-Debatten über die Effektivität von Hardware-Exportkontrollen.',
            '**Huawei Ascend Chips:** Huaweis Ascend 910B und 910C Chips sind positioniert als inländische Alternativen zu Nvidia GPUs für KI-Training. Performance bleibt unter Nvidia H100 bei den meisten Benchmarks, aber ausreichend für das Training von Medium-Scale-Modellen. Große chinesische Tech-Unternehmen (Baidu, Alibaba, ByteDance) haben begonnen, einige Workloads zu Ascend zu migrieren, um Nvidia-Abhängigkeit zu reduzieren.',
            '**Belt and Road KI-Diplomatie:** China exportiert KI-Überwachungs-Infrastruktur (Gesichtserkennung, Smart-City-Systeme) zu entwickelnden Nationen durch BRI-Partnerschaften. Anbieter enthalten Huawei, Alibaba Cloud und ZTE. Dies exportiert chinesische KI-Governance-Normen — einschließlich algorithmischer sozialer Verwaltung — zu Partner-Ländern, eine parallele KI-Standards-Ökosystem außerhalb des OECD/EU-Rahmens schaffend.',
            '**Führende chinesische KI-Modelle:** Alibaba Qwen 3, Baidu ERNIE 4.0, ByteDance Doubao, Z.ai GLM-4. Diese sind wettbewerbsfähig bei chinesischen Sprach-Aufgaben und zunehmend bei mehrsprachigen Benchmarks. [Open-source vs proprietary LLM Tradeoffs](/prompt-engineering/open-source-vs-proprietary-llms) beeinflussen chinesische Modell-Annahme — Qwens Open-Weights-Freigabe hat internationale Entwickler angezogen.',
          ],
        },

        chinaModelsAccessibility: {
          title: 'China für Prompt Engineers: Welche Modelle sind verfügbar',
          content: [
            '**Wenn Ihr Produkt Nutzer in China bedient, funktionieren Sie in einem eigenständigen KI-Ökosystem mit unterschiedlichen verfügbaren Modellen, zwingenden Inhaltsfiltern und einer Pre-Launch-Genehmigungsanforderung ohne Äquivalent in der EU oder USA.** Ausländische Modelle — GPT-5.5, Claude, Gemini — sind vom Festland China ohne VPN unzugänglich. Ihre Optionen sind auf domestic registrierte Alternativen begrenzt.',
            '**Verfügbare Modelle in China:** Alibaba Qwen 3 (Open-Weights, 7B–72B, 128K Kontext, API via Alibaba Cloud), Baidu ERNIE 4.0 (API via Qianfan Plattform), ByteDance Doubao (API via Volcano Engine), Z.ai GLM-4 (API via Z.ai Plattform) und DeepSeek R1/V3 (API via DeepSeek Plattform). Qwen 3 72B ist die stärkste Open-Weights-Option — Sie können sie außerhalb Chinas selbst-hosten, während Sie sie für chinesischsprachige Aufgaben nutzen. Sie bewertet sich innerhalb von 5 Prozentpunkten von GPT-5.5 bei MMLU und outperformt bei chinesisch-spezifischen Benchmarks (C-Eval).',
          ],
        },

        chinaContentFilters: {
          title: 'Content-Filter & CAC-Anforderungen: Kritische Einschränkungen',
          content: [
            '**Alle generativen KI-Services in China müssen die CAC Generative AI Measures (2023) befolgen.** Content-Restriktionen werden auf Modell- und API-Ebene durchgesetzt, nicht nur durch Gesetz. Services müssen Filter implementieren, die Output blockieren auf: KP-Führungs-Kritik, Taiwan/Tibet/Xinjiang-Unabhängigkeitsdiskussionen, politisch sensible historische Ereignisse (4. Juni 1989), Content, der "sozialistischen Kernwerte" untergräbt, und Material, das die CAC als Bedrohung der Staatssicherheit einstuft. Diese Filter sind in die API eingebaut — Sie können sie nicht konfigurieren.',
            '**Kritisches Implementierungsdetail:** Requests, die Filter triggern, geben HTTP 200 zurück (nicht HTTP 4xx) mit einem `is_safe: 0` Flag im Response-Body — nicht ein traditioneller Fehler. Dies erfordert explizite Anwendungsebene-Behandlung in Ihrem Code. Wenn Sie ERNIE 4.0 oder DeepSeek mit einem gefilterten Prompt aufrufen, gibt die API einen validen HTTP-Response mit desinfizierten Outputs oder einem Error-Flag zurück, nicht einen 4xx-Status.',
            '**Pre-Launch CAC Security Assessment ist zwingend.** Bevor ein Consumer-facing generatives KI-Service in China startet, muss der Provider eine CAC Assessment abschließen (45–90 Tage). Assessment verlangt: Trainingsdaten-Quellen, Content-Filterungs-Dokumentation, Sample-Output-Test und Selbst-Zertifizierung der Konformität. Ausländische Unternehmen können nicht direkt anwenden — Sie benötigen eine Mainland China Entität oder lizenzierten Partner (Alibaba Cloud, Tencent Cloud) als registrierten Provider. Ihre CAC Registration deckt die Modellebene; Ihre Anwendungsebene-Outputs bleiben Ihre Verantwortung.',
          ],
        },

        chinaDataResidencyAPIs: {
          title: 'PIPL Datenspeicherort, praktische APIs und Einsatz-Beispiele',
          content: [
            '**Das Personal Information Protection Law (PIPL, 2021) ist Ihre bindende Einschränkung.** PIPL verlangt, dass personenbezogene Daten, die von chinesischen Nutzern gesammelt werden, entweder in China bleiben oder eine Regierungs-Sicherheitsbewertung vor Cross-Border-Übertrag bestehen. Wenn Ihre KI-Anwendung personenbezogene Daten chinesischer Nutzer verarbeitet — Namen, IDs, Ort, Verhaltendaten — und es an eine Modell-API außerhalb Chinas sendet, verletzen Sie PIPL. Die praktische Lösung: routen Sie China-Nutzer-Traffic durch Mainland-gehostete Inferenz (Alibaba Cloud, Tencent Cloud, Huawei Cloud), so dass personenbezogene Daten nie chinesische Jurisdiktion verlassen.',
            '**Baidu ERNIE 4.0 API (praktische Details):** Zugänglich via Qianfan (千帆) Plattform. Preisgestaltung: ¥0,12 per 1K Tokens (Input/Output) für ERNIE 4.0 Turbo ab 2026. Akzeptiert System-Prompts, unterstützt Funktionsaufrufe, gibt JSON-strukturierte Responses zurück. Rate-Limits: 60 QPM Standard-Tier. Content-Filter-Fehler geben HTTP 200 mit `is_safe: 0` Flag zurück — erfordert explizite Anwendungsebene-Fehlerbehandlung.',
            '**Qwen 3 als Hybrid-Lösung:** Für Teams, die chinesische und internationale Nutzer bedienen, ist Qwen 3 (Open-Weights, Apache 2.0) die praktischste Brücke. Deployen Sie Qwen 3 72B auf Ihrer Infrastruktur außerhalb Chinas für internationale Nutzer (keine CAC-Filter), verwenden Sie Alibaba Cloud API für China-Segment unter Alibabas CAC-Registrierung. 128K Kontext-Fenster, wettbewerbsfähig bei mehrsprachigen Aufgaben.',
          ],
          items: [
            '**Prompt-Beispiel (sicher):** "Was sind die Schlüsselbestimmungen von Chinas Generative AI Measures (2023) und welche Dokumentation muss ein Unternehmen vorbereiten, bevor es einen generativen KI-Service in China startet?" — Funktioniert, weil es faktische Regulierungs-Information verlangt, ohne verbotene Bereiche zu berühren. DeepSeek R1 behandelt Regulierungs-Analyse zuverlässig.',
            '**Prompt-Beispiel (gefiltert):** "Vergleichen Sie die politischen Systeme von Taiwan und Festland-China" triggert `is_safe: 0` über CAC-APIs. Umformulieren: "Vergleichen Sie BIP pro Kopf und Handelsvolumen von Taiwan und Festland-China" — verschiebt Fokus zu Wirtschaft.',
            '**Prompt-Beispiel (Qwen 3 Vorteil):** "Fassen Sie dieses chinesische Regulierungs-Dokument zusammen und identifizieren Sie drei Compliance-Verpflichtungen für ein ausländisches KI-Unternehmen." Qwen 3 72B (selbst-gehostet außerhalb Chinas) behandelt chinesischsprachige rechtliche Dokumente ohne CAC-Filter — beste Option für Cross-Border-Compliance-Workflows.',
          ],
        },

        regulatoryComparison: {
          title: 'Globale KI-Regulierung: EU vs USA vs China verglichen',
          content: [
            '**Die drei großen KI-Regulierungs-Rahmen unterscheiden sich grundlegend in Philosophie, rechtlicher Kraft und internationalem Reichweite.** Das Verstehen dieser Unterschiede ist essentiell für Organisationen, die über Jurisdiktionen funktionieren oder KI-Tools von Anbietern in verschiedenen Regulierungs-Blöcken nutzen.',
          ],
          tableFormat: true,
          columns: ['Dimension', 'Europäische Union', 'Vereinigte Staaten', 'China'],
          rows: [
            { 'Dimension': 'Primär-Ansatz', 'Europäische Union': 'Rechtsbasierter rechtlicher Rahmen — KI Act klassifiziert Systeme nach Risiko zu Grundrechten', 'Vereinigte Staaten': 'Sektoral, Innovationsorientiert — bestehende Regulatoren wenden Domänenmandates auf KI an; kein bundesweites KI-Gesetz', 'China': 'Staatlich geleitete, Kontroll-Priorität — KI bedient nationale Entwicklung und soziale Governance-Ziele' },
            { 'Dimension': 'Schlüssel-Gesetzgebung', 'Europäische Union': 'EU AI Act (2024) — zwingend Konformität; GDPR gilt für KI-Trainingsdaten und Outputs', 'Vereinigte Staaten': 'Kein bundesweites KI-Gesetz. NIST AI RMF (freiwillig). EO 14110 (Biden, aufgehoben 2025); AI Action Plan (Trump 2025)', 'China': 'Algorithm Recommendation Regulations (2022); Generative AI Measures (2023); beide durchgesetzt von CAC' },
            { 'Dimension': 'Risiko-Rahmen', 'Europäische Union': '4 Stufen: Unakzeptabel (verboten), Hoch (Konformitätsbewertung erforderlich), Begrenzt (Offenlegung), Minimal (keine spezifischen Verpflichtungen)', 'Vereinigte Staaten': 'Freiwilliges NIST AI RMF — 7 Vertrauenswürdigkeits-Dimensionen; keine zwingende Stufing', 'China': 'Sicherheitsbewertung erforderlich für generative KI-Services vor Einsatz; Content muss sich mit "sozialistischen Kernwerten" alignieren' },
            { 'Dimension': 'Max Geldstrafe', 'Europäische Union': '35 Mio. EUR oder 7% globalem jährlichen Umsatz für verbotene Praktiken; 15 Mio. EUR oder 3% für Hochrisiko-Verstöße', 'Vereinigte Staaten': 'Keine bundesweite KI-spezifische Geldstrafe. FTC kann unfaire/täuschende Praktik-Ansprüche verfolgen; Bundesstaats-Strafen variieren', 'China': 'Bis zu ¥100.000 pro Verstoß unter Algorithmus-Regeln; Service-Suspendierung für nicht-konforme generative KI' },
            { 'Dimension': 'Datenschutz', 'Europäische Union': 'GDPR + KI Act — KI-Training auf personenbezogenen Daten verlangt Rechtsgrundlage; Outputs, die personenbezogene Daten berühren, verlangen GDPR-Konformität', 'Vereinigte Staaten': 'Sektoral: HIPAA (Gesundheit), CCPA/CPRA (Kalifornien), FERPA (Bildung); kein bundesweites GDPR-Äquivalent', 'China': 'PIPL (Personal Information Protection Law, 2021) gilt; Staatssicherheitsbehörden behalten Daten-Zugangsrechte' },
            { 'Dimension': 'Verbotene Anwendungen', 'Europäische Union': 'Soziales Scoring durch öffentliche Behörden; Echtzeit-öffentliche Biometrische Überwachung; KI nutzt kognitive Schwachstellen aus; unkontrolliertes Gesichts-Bildscraperming', 'Vereinigte Staaten': 'Keine bundesweit verbotene KI-Anwendungen; einige Bundesstaats-Bans (z.B. Illinois BIPA zu Biometrik)', 'China': 'Content untergräbt KP-Führung, Staats-Autorität oder "sozialistische Kernwerte"; Deepfakes verlangen Offenlegung' },
            { 'Dimension': 'Durchsetzungs-Körper', 'Europäische Union': 'EU AI Office (GPAI-Modelle) + nationale Marktüberwachungsbehörden (Hochrisiko-KI) + Datenschutzbehörden (GDPR-Schnittmenge)', 'Vereinigte Staaten': 'FTC (Verbraucherschutz), FDA (medizinische KI), CFPB (Finanz-KI), EEOC (Beschäftigungs-KI), NIST (Standards)', 'China': 'Cyberspace Administration of China (CAC) — Primär-Durchsetzer; MIIT und SAMR für branchenspezifische KI' },
            { 'Dimension': 'Internationales Reichweite', 'Europäische Union': 'Brussels Effect — gilt für jede KI, die auf EU-Markt platziert oder deren Output in EU genutzt wird; extraterritorial nach Design', 'Vereinigte Staaten': 'Exportkontrollen auf KI-Hardware beeinflussen globale Supply-Chains; keine extraterritoriale Content-Regulierung', 'China': 'BRI KI-Exporte verbreiten chinesische KI-Governance-Normen; Great Firewall begrenzt Auslands-KI-Service-Zugang domestic' },
          ],
        },

        globalPowerCompetition: {
          title: 'KI und globaler Macht-Wettbewerb',
          content: [
            '**KI ist jetzt eine primäre Dimension des Großmacht-Wettbewerbs — formt Bündnis-Strukturen, Technologie-Export-Politik und die Regeln für internationalen Handel in KI-Systemen.** Der Wettbewerb ist nicht einfach bilateral (USA vs China); er beinhaltet ein drittes Pole in der EU, ein umstrittenes Mittelfeld von nicht-ausrichteten Nationen und eine Serie von multilateralen Foren (G7, G20, UN, OECD) produzierend konkurrierende Governance-Rahmen.',
            'Für Organisationen, die international funktionieren, schafft globaler Macht-Wettbewerb in KI vier praktische Risiken: Export-Kontroll-Konformität (welche KI-Hardware und Software zu welchen Ländern transferiert werden kann), Beschaffungs-Restriktionen (welche KI-Anbieter für Regierungs-Verträge genutzt werden kann), Datensouveränitäts-Anforderungen (wo KI-Inferenz auf sensible Daten auftreten kann) und Regulierungs-Fragmentierung (Aufrechterhaltung der Konformität mit EU, USA und chinesischen Regeln gleichzeitig, wenn sie konkurrieren).',
          ],
          items: [
            '**Bündnis-basierte KI-Governance:** Die USA haben KI-Exportkontrollen mit verbündeten Nationen koordiniert, einschließlich der Niederlande (ASML Lithographie-Kontrollen), Japan (fortgeschrittene Chip-Export-Restriktionen) und UK (AI Safety Institute Zusammenarbeit). Dies schafft ein informelles "KI-Bündnis" mit geteilten Technologie-Zugangsregeln.',
            '**Nicht-ausrichtete Nationen:** Indien, Brasilien, UAE und Saudi-Arabien investieren in inländische KI-Leistung, um Abhängigkeit von entweder US oder chinesischer KI-Infrastruktur zu vermeiden. Indiens BharatGPT Initiative und UAE\'s Falcon Modell (Technology Innovation Institut) sind Beispiele deliberierter KI-Souveränität Strategien.',
            '**Multilaterale Governance:** Der G7 Hiroshima KI-Prozess (2023), der UN AI Advisory Body Report (2024) und die OECD AI Principles (aktualisiert 2024) stellen parallele internationale Governance-Tracks dar — alle freiwillig, alle konkurrierend mit der EUs rechtlich bindend Ansatz.',
            '**Internationale Relations-Risiko:** Organisationen, die KI-Tools von Anbietern in geopolitischen Gegner-Nationen nutzen, sehen sekundäre Risiken: Reputations-Exposition, zukünftige Beschaffungs-Disqualifizierung und potentielle Regulierungs-Haftung, wenn die Provider\'s Regierungs-Zugangsbestimmungen lokal Datenschutzgesetz konfligieren.',
          ],
        },

        organizationsImplications: {
          title: 'KI Geopolitische Risiken: Was das für Organisationen bedeutet',
          content: [
            '**Für Organisationen, die KI deployen, transliert geopolitischer Wettbewerb sich in vier konkrete operative Entscheidungen: welche KI-Tools zulässig sind, wo Daten gespeichert werden können, welche Compliance-Dokumentation erforderlich ist und wie schnell sich Regulierungen ändern.** Diese Entscheidungen unterscheiden sich signifikant abhängig davon, ob die Organisation in der EU ansässig ist, in EU-Märkten funktioniert oder US- oder chinesische KI-Anbieter nutzt.',
            'PromptQuorum unterstützt compliance-bewusste Modell-Auswahl — dispatch Prompts über EU-konforme Modelle (Mistral, lokal Ollama) und US Frontier-Modelle gleichzeitig, erlaubend, dass Sie EU AI Act konforme Optionen gegen proprietäre Alternativen ohne separate Infrastruktur Benchmark.',
            'Die geopolitischen Dynamiken, die die Modell-Verfügbarkeit gestalten, machen die Open-Source vs. proprietäre Frage besonders relevant. Einen vollständigen Vergleich, wann Open-Source gewinnt und wann proprietäre Modelle den Aufwand wert sind, finden Sie unter [Open Source vs. proprietäre LLMs](https://www.promptquorum.com/de/prompt-engineering/open-source-vs-proprietary-llms).',
          ],
          items: [
            '**EU-basierte Organisationen:** Müssen den EU AI Act direkt befolgen. Hochrisiko-KI-Systeme (HR, Kredit, Gesundheitswesen, öffentliche Services) verlangen Konformitätsbewertungen, Menschliche Überwachungs-Dokumentation und Registrierung in der EU AI-Datenbank vor August 2026. Alle KI, die personenbezogene Daten behandelt, muss GDPR befolgen — einschließlich KI-Trainings-Pipelines und Output-Verarbeitung.',
            '**Nicht-EU-Organisationen, die EU-Nutzer bedienen:** Unterliegen dem Brussels Effect — der EU AI Act gilt für Ihre KI-Outputs, wenn sie EU-Nutzer erreichen. GPAI-Modelle, die in EU-bezogenen Produkten genutzt werden, müssen Transparenzverpflichtungen befolgen (ab August 2025). Nicht-Konformität trägt die gleichen Geldstrafen wie EU-ansässige Violators.',
            '**US KI-Tools in EU-Einsätzen:** GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro sind alle als GPAI-Modelle klassifiziert. OpenAI, Anthropic und Google veröffentlichten EU AI Act GPAI-Konformitäts-Dokumentation. Organisationen, die diese Tools in Hochrisiko-KI-Systemen (als Bereitsteller) nutzen, bleiben selbst verantwortlich für ihre eigenen Konformitätsbewertungen — der Provider\'s GPAI-Konformität deckt nicht Ihren Einsatz.',
            '**Chinesische KI-Tools:** DeepSeek R1 und andere chinesische Modelle sind international verfügbar, tragen aber zusätzliche Beschaffungs-Risiko für EU und US-Organisationen — Datenspeicherort ist unklar, der Provider unterliegt CAC-Content-Regulierungen und die Cyberspace Administration of China kann Daten-Offenlegung zwingen. Regierungs- und kritische Infrastruktur-Organisationen in EU und NATO-Mitgliedstaaten schränken oder verbieten chinesische KI-Tool-Nutzung.',
            '**Datenspeicherort:** EU GDPR schränkt personenbezogenen Daten-Transfer zu Ländern ohne "Angemessenheit"-Entscheidungen oder angemessene Sicherheitsvorkehrungen ein. KI-Inferenz auf personenbezogenen Daten, die US-Provider nutzen, verlangt Standard Contractual Clauses (SCCs) oder verlässt sich auf das EU-US Data Privacy Framework (2023). Transfer nach China hat keine Angemessenheits-Entscheidung — contractuelle Sicherheitsvorkehrungen müssen vorhanden sein und sind schwer durchzusetzen.',
            '**Beschaffungs-Entscheidungen:** US-Bundesbehörden sind verboten, KI von designierten chinesischen Entitäten zu nutzen. Mehrere EU-Mitgliedstaaten (Deutschland, Frankreich, Niederlande) gaben Richtlinien aus, die chinesische KI-Tools in Regierungs-Beschaffung einschränken. Für Private-Sector-Organisationen sollte Beschaffungs-Politik die Jurisdiktion der KI-Provider\'s Trainingsdaten, Content-Moderations-Praktiken und Regierungs-Zugangs-Bestimmungen adressieren.',
            '**Überwachung regulatorische Veränderung:** Das Tempo der KI-Regulierung ist hoch. Die Trump Verwaltungs 2025 Aufhebung von Bidens EO, der EU AI Act\'s rollende Durchsetzungs-Zeitlinie und Chinas laufende CAC-Regel-Updates bedeuten, dass Konformitätsstatus sich innerhalb von Monaten ändern kann. Organisationen sollten einen KI-Governance-Eigentümer designieren und zum EU AI Office Newsletter und OECD AI Policy Observatory Updates abonnieren.',
          ],
        },

        qaWhatIsAIGeopolitics: {
          title: 'Was ist KI-Geopolitik?',
          content: [
            'KI-Geopolitik ist das Studium, wie künstliche Intelligenz Macht-Relationen zwischen Staaten global beeinflusst — einschließlich wirtschaftlichem Wettbewerb, militärischen Leistungen, Regulierungs-Einfluss und technologischer Führerschaft. Sie umfasst drei simultane Wettbewerbe: welche Nationen die fähigsten Modelle bauen, welche Regulierungs-Rahmen globale KI-Bereitstellung regieren und welche Länder Halbleiter-Supply-Chains kontrollieren, die Frontier-KI möglich machen. Für Organisationen bestimmt KI-Geopolitik, welche Tools rechtlich zulässig sind, wo Daten verarbeitet werden können und welche Anbieter Beschaffungs-Risiko tragen.',
          ],
        },

        qaWhoIsWinning: {
          title: 'Wer gewinnt das globale KI-Rennen?',
          content: [
            'Die Vereinigten Staaten führen bei Frontier-Modell-Leistung — GPT-5.5 (OpenAI), Claude (Anthropic) und Gemini (Google DeepMind) — und bei privaten KI-Investitionen (67 Milliarden USD 2023 per OECD-Daten). China führt bei KI-Patent-Anmeldungen, staatlich geleiteter Einsatz-Skala und inländlicher Modell-Entwicklung; DeepSeek R1 entsprach GPT-5.5 bei Schlüssel-Benchmarks im Januar 2025. Die Europäische Union führt bei KI-Regulierung — der EU AI Act ist das globale Referenz-Framework — bleibt aber bei Frontier-Modell-Leistung und privaten Investitionen relativ zu seiner wirtschaftlichen Größe zurück. Kein einzelner Akteur führt bei allen drei Dimensionen gleichzeitig.',
          ],
        },

        qaWhatIsBrusselsEffect: {
          title: 'Was ist der Brussels Effect in KI?',
          content: [
            'Der Brussels Effect beschreibt, wie EU-Regulierungen De-facto-Globale Standards werden, weil multinational Unternehmen es operativ einfacher finden, den strengsten Standard weltweit anzuwenden als separate Compliance-Stacks pro Jurisdiktion aufrecht zu erhalten. Der EU AI Act gilt für jedes KI-System, das auf dem EU-Markt platziert wird oder dessen Output EU-Nutzer erreicht — das zwingt OpenAI, Google DeepMind und Anthropic, EU-Transparenzverpflichtungen für ihre globalen Produkte zu befolgen, nicht nur EU-spezifische Versionen. Der gleiche Mechanismus machte GDPR zu einem globalen Datenschutz-Standard.',
          ],
        },

        qaHowChinaRegulates: {
          title: 'Wie reguliert China künstliche Intelligenz?',
          content: [
            'China reguliert KI durch die Cyberspace Administration of China (CAC). Die Algorithm Recommendation Regulations (2022) verlangen die Kennzeichnung von algorithmen-kuratierten Inhalten. Die Generative AI Measures (2023) verlangen eine CAC-Sicherheitsbewertung — ein 45–90-Tage-Prozess — bevor irgend ein Consumer-facing generatives KI-Service in China starten kann und mandat, dass KI-Outputs sich mit "sozialistischen Kernwerten" alignieren. Ausländische KI-Modelle (GPT-5.5, Claude, Gemini) sind vom Festland China ohne Circumvention Tools unerreichbar. Inländische Alternativen enthalten Alibaba Qwen, Baidu ERNIE 4.0, ByteDance Doubao und DeepSeek.',
          ],
        },

        qaWhatEUAIActRequires: {
          title: 'Was verlangt der EU AI Act von Organisationen?',
          content: [
            'Der EU AI Act klassifiziert KI-Systeme in vier Risiko-Stufen mit skalieren Verpflichtungen. Verbotene Praktiken — soziales Scoring durch öffentliche Behörden, Echtzeit-Biometrische Überwachung in öffentlichen Räumen — sind ab August 2024 verboten. Hochrisiko-KI-Systeme in Beschäftigung, Kredit-Bewertung, Gesundheitswesen oder Strafverfolgung verlangen Konformitätsbewertungen, Menschliche Überwachungs-Dokumentation und Registrierung in der EU AI-Datenbank vor August 2026. General Purpose AI-Modelle (GPT-5.5, Claude, Gemini) müssen Trainingsdaten-Zusammenfassungen veröffentlichen und EU-Urheberrecht befolgen — Regeln, die ab August 2025 galten. Alle Organisationen, die EU-Nutzer bedienen, müssen konform sein, unabhängig davon, wo sie ansässig sind.',
          ],
        },

        qaExportControls: {
          title: 'Wie beeinflussen US-Exportkontrollen die KI-Entwicklung?',
          content: [
            'US-Exportkontrollen schränken den Verkauf fortgeschrittener Nvidia GPUs — einschließlich A100 und H100 — nach China ein, anvisierend, Chinas Kapazität zu begrenzen, Frontier-KI-Modelle zu trainieren. Die Kontrollen werden durchgesetzt durch die Export Administration Regulations (EAR) und gelten für Nvidia, AMD und Intel Produkte über angegebenen Compute-Schwellen. DeepSeeks R1-Freigabe im Januar 2025 demonstrierte die Grenzen dieses Ansatzes: trainiert auf China-beschränkten H800 GPUs bei einem Bruchteil der berichteten Kosten vergleichbarer US-Modelle, entsprach es GPT-5.5 bei AIME 2024, MATH-500 und HumanEval-Benchmarks. Export-Kontrolle verlangsamen, aber haben chinesische Frontier-KI-Entwicklung nicht gestoppt.',
          ],
        },

        qaTSMCRole: {
          title: 'Was ist TSMCs Rolle in der KI-Geopolitik?',
          content: [
            'TSMC (Taiwan Semiconductor Manufacturing Company) stellt die fortgeschrittenen Chips her, die Frontier-KI antreiben — Nvidias H100 und H200 GPUs, Googles TPUs und Apples Neural Engine werden alle an TSMC Fabs in Taiwan hergestellt. Kein anderes Unternehmen stellt aktuell Chips bei vergleichbaren Process-Knoten (3nm, 2nm) in Skala her. Dies macht TSMC zu einem Single Point of Dependency in globaler KI-Infrastruktur: US-Exportkontrollen verlassen sich darauf, dass TSMC nicht fortgeschrittene Knoten an chinesische Chiphersteller liefert, und jede Störung von Taiwans politischem Status würde sofort globale KI-Hardware-Versorgung einschränken. Der US CHIPS and Science Act (52 Milliarden USD) finanziert inländische US-Fab-Kapazität speziell, um diese Abhängigkeit zu reduzieren.',
          ],
        },

        qaUSEUChinaDifferences: {
          title: 'Was sind die Hauptunterschiede zwischen US-, EU- und chinesischen KI-Strategien?',
          content: [
            'Die drei Hauptstrategien unterscheiden sich grundlegend in Philosophie, rechtlicher Struktur und internationalem Reichweite. Die USA priorisieren Innovation und Wettbewerbsfähigkeit durch Private-Sector-Führerschaft ohne bundesweites KI-Gesetz — bestehende Sektor-Regulatoren (FTC, FDA, EEOC) wenden bestehende Mandate auf KI innerhalb ihrer Domänen an. Die EU priorisiert Grundrechte-Schutz durch einen zwingenden horizontalen rechtlichen Rahmen — den EU AI Act — der extraterritorial auf jede KI anwendet, die EU-Nutzer erreicht. China priorisiert Staat-Kontrolle und nationale Entwicklung durch zwingende Content-Regulierung und Pre-Launch-Sicherheits-Bewertungen, durchgesetzt durch die CAC. Diese Ansätze sind strukturell inkompatibel: Organisationen, die über alle drei Jurisdiktionen funktionieren, müssen konkurrierende Anforderungen gleichzeitig navigieren.',
          ],
        },

        defEUAIAct: {
          title: 'Definition: EU AI Act',
          content: 'Die weltweit erste umfassende, rechtlich bindende KI-Regulierung, verabschiedet durch das Europäische Parlament im März 2024. Sie klassifiziert KI-Systeme in vier Risiko-Stufen (Unakzeptabel, Hoch, Begrenzt, Minimal) mit skalierend Verpflichtungen. Verbotene Praktiken gelten ab August 2024; General Purpose AI-Transparenzverpflichtungen ab August 2025; Hochrisiko-System-Anforderungen ab August 2026. Geldstrafen erreichen 35 Mio. EUR oder 7% des globalen Umsatzes. Wendet sich extraterritorial auf jede KI an, die EU-Nutzer erreicht.',
        },

        defBrusselsEffect: {
          title: 'Definition: Brussels Effect',
          content: 'Das Phänomen, wo EU-Regulierungen De-facto-Globale Standards werden, weil multinationale Unternehmen es einfacher finden, einen strikten Standard weltweit anzuwenden, als separate Compliance-Stacks pro Jurisdiktion aufrecht zu erhalten. GDPR wurde ein globaler Datenschutz-Standard via Brussels Effect. Der EU AI Act tut das gleiche: OpenAI, Anthropic und Google müssen EU AI Act-Anforderungen für ihre globalen Produkte befolgen, nicht nur EU-spezifische Versionen.',
        },

        defHighRiskAI: {
          title: 'Definition: Hochrisiko-KI-System',
          content: 'Unter dem EU AI Act, ein KI-System, dessen Fehler oder Fehlfunktion signifikanten Schaden zu Grundrechten verursachen könnte. Beispiele: KI, die in Einstellungs-Entscheidungen, Kredit-Bewertung, Gesundheits-Diagnose, Strafverfolgung, öffentlichen Service-Zugang und Bildungs-Evaluierung verwendet wird. Hochrisiko-KI verlangt Konformitätsbewertungen, Menschliche Überwachungs-Dokumentation, Trainingsdaten-Qualität-Kontrollen und Registrierung in der EU AI-Datenbank vor Einsatz.',
        },

        defGPAI: {
          title: 'Definition: General Purpose AI (GPAI)',
          content: 'Ein KI-System, trainiert auf breite Daten mit einer allgemeinen Architektur (nicht spezialisiert oder Domäne-spezifisch), die für eine Breite Reihe von Downstream-Aufgaben angepasst werden kann. GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro sind GPAI-Modelle. Unter dem EU AI Act, GPAI-Modelle mit >10^25 FLOP Trainings-Compute-Seite Transparenzverpflichtungen enthalten Trainingsdaten-Zusammenfassungen, Leistungs-Dokumentation und Copyright-Konformität.',
        },

        defCAC: {
          title: 'Definition: Cyberspace Administration of China (CAC)',
          content: 'Chinas primäre Regulierungs-Körper für Internet, Cyberspace und KI-Governance. Durchsetzt die Algorithm Recommendation Regulations (2022) und Generative AI Measures (2023). Verlangt Sicherheitsbewertungen vor generativen KI-Services startet in China, mandat Content-Filter, die KP-Kritik und politisch sensible Themen blockieren, und kann Daten-Offenlegung von KI-Providern zwingen.',
        },

        defDataSovereignty: {
          title: 'Definition: Datensouveränität',
          content: 'Das Prinzip, dass Daten unterliegt den Gesetzen des Landes, wo es befindet oder generiert wird, und dass Organisationen volle Kontrolle über Daten halten können, ohne es zu ausländischen Jurisdiktionen zu transferieren. EU GDPR und der EU AI Act behandeln Datensouveränität als eine Konformitäts-Anforderung: Personenbezogenen Daten-Verarbeitung muss EU-Gesetz befolgen, auch wenn die Verarbeitung außerhalb der EU auftretet, wenn die Daten-Subjekte EU-Einwohner sind.',
        },

        defAlgorithmRecs: {
          title: 'Definition: Algorithm Recommendation Regulations (China)',
          content: 'Chinas 2022 Regulierung, verlangend, dass Plattformen, die Algorithmen nutzen, um Inhalte zu empfehlen, öffentlich Algorithmen-Kuration kennzeichnen und offenlegen. Wendet sich auf soziale Medien, News-Feeds, Video-Empfehlung und Suchmaschinen. Verlangt, dass Nutzer Optionen angeboten werden, um algorithmische Empfehlungen auszuschalten. Durchgesetzt durch die CAC, um Transparenz und Regierungs-Überwachung von algorithmischer Content-Verteilung zu erhöhen.',
        },

        defSCCs: {
          title: 'Definition: Standard Contractual Clauses (SCCs)',
          content: 'Vor-genehmigte Vertrag-Vorlagen, die von der Europäischen Kommission ausgegeben werden, die Organisationen erlauben, personenbezogene Daten von der EU zu nicht-angemessenen Jurisdiktionen (wie die USA oder China) zu transferieren, während GDPR-Konformität beansprucht wird. SCCs platzieren vertragliche Verpflichtungen auf den Daten-Importeur, die Daten unter EU-Standards zu schützen. Effektivität wird anfordert: das EU-Gerichtssystem hat fraggestellt, ob SCCs gegen Regierungs-Überwachung in den USA und anderen Ländern schützen.',
        },

        politicianQuotes: {
          title: 'Was sagen Politiker',
          content: [
            '**KI ist zu einem Top-Tier-Politischen Problem über alle drei Regulierungs-Blöcke geworden, mit Führern, die es als eine Frage von wirtschaftlichen Überleben, demokratischen Werten und nationaler Sicherheit rahmen.** Die Aussagen unten sind gezogen aus offiziellen Reden und parlamentarischen Aufzeichnungen.',
          ],
        },

        quoteVonDerLeyen: {
          title: '',
          blockquote: 'Künstliche Intelligenz ist die definierende Technologie unserer Zeit. Europa muss sie formen — nicht nur adoptieren. Wir wollen KI, die für Menschen funktioniert, nicht andersherum.',
          blockquoteSource: 'Ursula von der Leyen, Präsidentin der Europäischen Kommission — Europäische KI-Strategie Ansprache, 2024',
        },

        quoteVestager: {
          title: '',
          blockquote: 'Der KI Act ist der weltweite erste umfassende rechtliche Rahmen für künstliche Intelligenz. Er setzt Menschen und ihre Sicherheit ins Zentrum — nicht nur die Technologie. Das ist, wie verantwortliche Innovation aussieht.',
          blockquoteSource: 'Margrethe Vestager, ehemalige Executive Vice-Präsidentin der Europäischen Kommission — Europäisches Parlament, März 2024',
        },

        quoteBreton: {
          title: '',
          blockquote: 'Der KI Act ist eine historische Leistung. Europa ist der erste Kontinent, der einen klaren rechtlichen Rahmen für KI etabliert. Sicherheit und Innovation sind nicht Gegensätze — sie gehen zusammen. Wir haben der Welt das gezeigt.',
          blockquoteSource: 'Thierry Breton, ehemaliger EU-Kommissar für Binnenmarkt — Europäische Kommission, März 2024',
        },

        quoteMacron: {
          title: '',
          blockquote: 'Frankreich möchte eine führende KI-Nation in Europa sein. Paris wird den KI Action Summit veranstalten. Wir investieren in offene, vertrauenswürdige und nachhaltige KI — und wir laden die Welt ein, uns beizutreten.',
          blockquoteSource: 'Emmanuel Macron, Präsident von Frankreich — KI Action Summit Ankündigung, 2024',
        },

        quoteSunak: {
          title: '',
          blockquote: 'Das Vereinigte Königreich wird mit Partnern weltweit zusammenarbeiten, um sicherzustellen, dass KI sicher ist. Bletchley Park ist, wo diese Konversation beginnt — aber sie darf hier nicht enden.',
          blockquoteSource: 'Rishi Sunak, ehemaliger Premierminister des Vereinigten Königreichs — AI Safety Summit, Bletchley Park, November 2023',
        },

        quoteScholz: {
          title: '',
          blockquote: 'Deutschland möchte zu einem von Europas führenden KI-Standorten werden. Wir investieren in KI-Forschung, digitale Infrastruktur und die Menschen, die das nächste Jahrzehnt intelligenter Systeme bauen werden.',
          blockquoteSource: 'Olaf Scholz, ehemaliger Bundeskanzler von Deutschland — Nationale KI-Strategie Update, 2024',
        },

        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist der EU AI Act und wann wird er angewendet?', a: 'Der EU AI Act ist das weltweite erste umfassende KI-Gesetz, verabschiedet durch das Europäische Parlament im März 2024. Verbotene Praktiken gelten ab August 2024. GPAI-Modell-Verpflichtungen (für GPT-5.5, Claude, Gemini-Klasse-Modelle) gelten ab August 2025. Hochrisiko-KI-System-Anforderungen gelten ab August 2026. Es wird angewendet auf jede Organisation, die KI auf dem EU-Markt platziert oder KI nutzt, die EU-Einwohner beeinflusst.' },
            { q: 'Wird der EU AI Act auf Nicht-EU-Unternehmen angewendet?', a: 'Ja. Der EU AI Act hat extraterritoriales Reichweite — er wird angewendet auf jeden Provider, dessen KI-Outputs in der EU genutzt werden, unabhängig davon, wo der Provider ansässig ist. Ein US-Unternehmen, dessen KI-Produkt von EU-Einwohnern genutzt wird, muss konform sein. Dies ist das gleiche extraterritoriale Prinzip, das GDPR zu einem globalen Standard machte.' },
            { q: 'Was sind die Geldstrafen für Verstöße gegen den EU AI Act?', a: 'Geldstrafen bis zu 35 Millionen EUR oder 7% des globalen jährlichen Umsatzes (je nachdem, welcher Wert höher ist) für verbotene KI-Praktiken. Bis zu 15 Millionen EUR oder 3% für Hochrisiko-KI-Verstöße. Bis zu 7,5 Millionen EUR oder 1% für die Bereitstellung falscher Informationen an Durchsetzungsbehörden. Die höhere des Prozentsatzes oder des festen Betrages wird angewendet.' },
            { q: 'Welche KI-Anwendungen sind unter dem EU AI Act verboten?', a: 'Verboten (Inakzeptables Risiko): Soziale Scoring-Systeme durch öffentliche Behörden; Echtzeit-Biometrische Identifizierung in öffentlichen Räumen (mit engen Ausnahmen); KI, die psychologische Schwachstellen nutzt aus; unkontrolliertes Scraping von Gesichtsbildern aus dem Internet. Diese wurden seit August 2024 verboten.' },
            { q: 'Wie unterscheidet sich die US-KI-Regulierung von der EU?', a: 'Die USA haben kein bundesweites KI-Gesetz. Bestehende Sektor-Regulatoren (FTC, FDA, CFPB, EEOC) wenden ihre bestehenden Mandate auf KI in ihren Domänen an. Die Biden KI-Sicherheits-Executive Order (Oktober 2023) wurde im Januar 2025 aufgehoben und durch einen Wettbewerbsorientiert fokussierten KI Action Plan ersetzt. Das NIST AI Risk Management Framework ist freiwillig. US-Regulierung ist reaktiv und Sektor-spezifisch; EU-Regulierung ist proaktiv und horizontal.' },
            { q: 'Ist DeepSeek sicher, um in EU-Organisationen zu nutzen?', a: 'DeepSeek unterliegt CAC (Cyberspace Administration of China)-Regulierungen, bedeutend, dass die chinesische Regierung Daten-Offenlegung erzwingen kann. DeepSeeks Datenschutz-Richtlinie besagt, Daten werden auf Servern in China gespeichert. Für EU-Organisationen, die personenbezogene Daten verarbeiten, verlangt die Nutzung von DeepSeek GDPR-konforme Daten-Transfer-Sicherheitsvorkehrungen (SCCs), die schwer gegen chinesisches Gesetz durchzusetzen sind. Regierungs- und kritische Infrastruktur-Organisationen in EU-Mitgliedstaaten vermeiden allgemein chinesische KI-Tools.' },
            { q: 'Was ist der Brussels Effect?', a: 'Der Brussels Effect beschreibt, wie EU-Regulierungen De-facto-Globale Standards werden, weil multinationale Unternehmen einen strikten Standard über die Aufrechterhaltung separater Konformität für jede Jurisdiktion bevorzugen. GDPR wurde diese Weise ein globaler Datenschutz-Standard. Der EU AI Act tut das gleiche für KI — OpenAI, Anthropic und Google müssen EU AI Act GPAI-Anforderungen für ihre globalen Produkte befolgen, nicht nur EU-spezifische Versionen.' },
            { q: 'Was erreichte der Bletchley Park KI-Sicherheits-Gipfel?', a: 'Der November 2023 KI-Sicherheits-Gipfel bei Bletchley Park produzierte die Bletchley Declaration — unterzeichnet von 28 Ländern, einschließlich USA, China und EU-Mitgliedstaaten — anerkennend, dass Frontier-KI ernsthafte Risiken darstellt und internationale Zusammenarbeit verlangt. Der Gipfel etablierte das UK AI Safety Institute (AISI) und initiierte eine Serie globaler KI-Sicherheits-Institute in den USA und anderswo. Chinas Teilnahme war bemerkenswert, gegeben breitere geopolitische Spannungen.' },
            { q: 'Wie unterstützt Frankreich KI anders als Deutschland?', a: 'Frankreich priorisiert hochprofil-internationales Positionierung (KI Action Summit in Paris, Februar 2025) und Open-Weights-KI-Forschung durch INRIA und CNRS, mit 2 Milliarden EUR öffentliche Investition. Deutschland konzentriert sich auf angewandte industrielle KI durch die Fraunhofer-Gesellschaft und DFKI, mit 5 Milliarden EUR investiert 2019–2025, und betont KI-Governance und Haftungs-Rahmen durch föderale Gesetzgebung. Beide haben nationale KI-Strategien, aber unterschiedliche Sektor-Schwerpunkte.' },
            { q: 'Wie beeinflusst der EU AI Act KI, die in Prompt Engineering genutzt wird?', a: 'Die meisten Prompt-Engineering-Arbeiten fallen in die Begrenzte oder Minimalrisiko-Kategorie — standard Chatbots und KI-Schreib-Tools verlangen Offenlegung (Nutzer müssen wissen, dass sie mit KI interagieren), aber keine Konformitätsbewertung. Hochrisiko-Klassifizierungen gelten, wenn KI signifikante Entscheidungen trifft: Beschäftigungs-Screening, Kredit-Bewertung, Bildungs-Evaluierung oder Strafverfolgung.' },
            { q: 'Was ist der Hiroshima KI-Prozess und was erreichte er?', a: 'Der Hiroshima KI-Prozess ist eine G7-Initiative, die beim 2023 Hiroshima Gipfel unter Japans G7-Präsidentschaft gestartet wurde. Er produzierte den Hiroshima KI Process Code of Conduct — 11 freiwillige Leitprinzipien für Entwickler fortgeschrittener KI-Systeme, angenommen von G7-Nationen im Oktober 2023. Prinzipien decken Transparenz, Vorfall-Berichterstattung, Sicherheits-Test und Wasserzeichen von KI-generiertem Inhalt. Italiens 2024 G7-Präsidentschaft erweiterte den Rahmen mit eine breitere internationale KI-Governance-Agenda. Der Code of Conduct ist freiwillig, nicht rechtlich bindend, signalisiert aber internationale Koordination separat von dem EU-KI Act.' },
            { q: 'Können EU-Organisationen DeepSeek für kommerzielle Anwendungen nutzen?', a: 'Technisch ja, mit GDPR-konformen vertraglichen Sicherheitsvorkehrungen (Standard Contractual Clauses). In der Praxis sind SCCs schwer gegen chinesisches Gesetz durchzusetzen, das DeepSeek verlangt, CAC-Daten-Offenlegungsanforderungen zu befolgen. Regierungs-Beschaffung ist eine separate Einschränkung: Deutschlands BSI, Frankreichs ANSSI und die Niederlande\'s NCSC gaben Empfehlungen oder Restriktionen zu chinesischen KI-Tools für Regierungs- und kritische Infrastruktur-Nutzung aus. Privat-Sektor EU-Organisationen können DeepSeek kommerziell nutzen, müssen aber eine Transfer Impact Assessment unter GDPR Artikel 46 durchführen und das residuale Risiko dokumentieren. Die meisten Legal-Ratgeber raten gegen die Verarbeitung personenbezogener Daten über DeepSeek.' },
            { q: 'Schadet das EU-KI-Gesetz der europäischen KI-Wettbewerbsfähigkeit?', a: 'Das ist ein echtes strategisches Dilemma: Das EU-KI-Gesetz kann europäische KI-Startups verlangsamen, stärkt aber Europas regulatorische Glaubwürdigkeit weltweit. Einerseits schaffen Compliance-Kosten und Konformitätsbewertungen Reibung für EU-Unternehmen — Frankreichs Mistral AI ist stärker eingeschränkt als US-Konkurrenten. Andererseits bedeutet der Brüssel-Effekt, dass der regulatorische Rahmen der EU zum globalen Standard wird und EU-basierten Unternehmen einen Wettbewerbsvorteil bei Compliance gibt. Europa setzt auf regulatorische Führerschaft statt reine technologische Fähigkeit — eine grundlegend andere KI-Strategie als die USA oder China.' },
            { q: 'Wie vergleicht sich Europas Rechenkapazität mit den USA und China?', a: 'Europa hinkt bei der Recheninfrastruktur deutlich hinterher. Die USA dominieren GPU-Fertigung (Nvidia ~80 % Marktanteil) und Custom Silicon. China produziert bei TSMC (Taiwan) und nutzt begrenzte Nvidia H- und A-Serien GPUs. Europa hat kein Äquivalent: ASML (Niederlande) stellt Chipfertigungsausrüstung her, besitzt aber keine Fabs. Der EU Chips Act (43 Milliarden Euro) zielt darauf ab, Intel- und TSMC-Fabs auf EU-Gebiet zu bauen, aber keine wird vor 2027–2029 betriebsbereit sein. Dies ist Europas zentrale Infrastruktur-Schwachstelle: Training von Frontier-Modellen erfordert tausende GPUs monatelang. Ohne inländische Fab-Kapazität bleibt Europa von US (Nvidia) und Taiwan (TSMC) abhängig.' },
            { q: 'Was ist Europas KI-Vorteil neben Regulierung?', a: 'Europa hat drei nicht-regulatorische Vorteile: (1) Mistral AI und andere von der EU finanzierte Open-Source-Modelle bieten GDPR-konforme Alternativen ohne US- oder China-Abhängigkeit; (2) Europa führt bei KI-Sicherheitsforschung durch UK AI Safety Institute und französische Forschungszentren; (3) Europas hochgebildete Belegschaft und bestehendes Software-/Halbleiter-Talent geben ihm einen Vorteil bei KI-Anwendungen und Custom Silicon. Jedoch kompensiert keiner dieser Vorteile Europas Nachteil bei Frontier-Modell-Fähigkeit — die USA führen bei GPT-5.5 und Claude, China bei Skalierung und Volumen. Europas Strategie ist mach das, worin du gut bist (Sicherheit, Regulierung, Ethik), statt um reine Fähigkeit zu konkurrieren.' },
          ],
        },

        sources: {
          title: 'Quellen',
          items: [
            'Europäisches Parlament, "Artificial Intelligence Act" — Offizieller Text, März 2024. [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)',
            'Europäische Kommission, "AI Office" — GPAI-Konformitäts-Dokumentation und Durchsetzungs-Richtlinien. [AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office)',
            'NIST, "Artificial Intelligence Risk Management Framework (AI RMF 1.0)" — Januar 2023. [NIST](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)',
            'UK Regierung, "AI Safety Summit — Bletchley Declaration" — November 2023. [Gov.uk](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration)',
            'Cyberspace Administration of China, "Provisions on the Management of Generative Artificial Intelligence Services" — Juli 2023',
            'DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" — arXiv:2501.12948, Januar 2025',
            'OECD AI Policy Observatory — [oecd.ai](https://oecd.ai) — Land-Ebene KI-Richtlinien-Datenbank und vergleichende Analyse',
            'Deutschlandfunk, "Strategie Künstliche Intelligenz" — Nationale KI-Strategie, aktualisiert 2023. [Bundesregierung](https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie)',
            'Rishi Sunak, PM Speech at AI Safety Summit — November 2023. [Gov.uk](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
          ],
        },

        relatedReading: {
          title: 'Verwandte Lektüre',
          items: [
            '[Open Source vs Proprietary LLMs](/prompt-engineering/open-source-vs-proprietary-llms) — Wie EU AI Act-Konformität und Datensouveränität-Anforderungen die Open-Weights vs API-Entscheidung beeinflussen',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — Verstehen von Leistungs-Grenzen, relevant zu Hochrisiko-KI-System-Bewertungen unter dem EU AI Act',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Sicherheits-Schwachstellen, die nationale KI-Strategien und der EU AI Act in Hochrisiko-System-Anforderungen adressieren',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Zuverlässigkeitsprobleme zentral zu EU AI Act Hochrisiko-Dokumentation und Menschliche Überwachungs-Anforderungen',
            '[RAG Explained](/prompt-engineering/rag-explained) — Wie Retrieval-Augmented Generation Wissens-Cutoff und Halluzinations-Bedenken adressiert, relevant zu regulierten KI-Einsätzen',
          ],
        },
      },
    },
    es: {
      theme: 'Policy & Compliance',
      title: 'Geopolítica de la IA explicada: EU AI Act vs. EE.UU. vs. China (Análisis 2026)',
      intro: 'EE.UU., China y la Unión Europea persiguen visiones incompatibles de la gobernanza de la IA — EE.UU. prioriza la competitividad, China enfatiza el control estatal y la UE construye un marco legal basado en derechos. Para las organizaciones que despliegan IA, estas diferencias se traducen en obligaciones de cumplimiento concretas, restricciones de adquisición y requisitos de residencia de datos que aplican independientemente de dónde esté radicada la organización.',
      metaDescription: 'EU AI Act, controles de exportación de EE. UU. y CAC de China: tres marcos incompatibles. Cómo afectan a la compra de IA y la residencia de datos en 2026.',
      seoTitle: 'Geopolítica de la IA 2026: Análisis EE.UU., UE y China',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '16 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AI Geopolitics',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/es/es/prompt-engineering/geopolitics-and-ai',
        headline: 'Geopolítica de la IA explicada: EU AI Act vs. EE.UU. vs. China (Análisis 2026)',
        description: 'EE.UU., China y la Unión Europea persiguen visiones incompatibles de la gobernanza de la IA. Para las organizaciones que despliegan IA, estas diferencias se traducen en obligaciones de cumplimiento concretas, restricciones de adquisición y requisitos de residencia de datos.',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/es/api/og/geopolitics-and-ai', width: 1200, height: 630 },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': '¿Qué es el EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El EU AI Act es el primer marco legal integral del mundo para la inteligencia artificial, aprobado por el Parlamento Europeo en marzo de 2024 con 523 votos a favor. Clasifica los sistemas de IA en cuatro niveles de riesgo — Inaceptable, Alto, Limitado y Mínimo — y aplica diferentes requisitos y multas a cada nivel. La aplicación plena entra en vigor en agosto de 2026.' } },
          { '@type': 'Question', 'name': '¿Se aplica el EU AI Act a empresas fuera de la UE?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. El EU AI Act se aplica a cualquier organización que coloque sistemas de IA en el mercado de la UE o cuyos resultados de IA se utilicen en la UE, independientemente de dónde esté radicada la organización. Este alcance extraterritorial se denomina Efecto Bruselas y significa que los proveedores de IA estadounidenses y asiáticos también deben cumplir si atienden a usuarios de la UE.' } },
          { '@type': 'Question', 'name': '¿Cuáles son las multas por violar el EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Las multas alcanzan hasta 35 millones de euros o el 7% de la facturación global anual por prácticas de IA prohibidas (lo que sea mayor). Las infracciones de IA de alto riesgo acarrean multas de hasta 15 millones de euros o el 3% de la facturación global. Proporcionar información incorrecta a las autoridades conlleva multas de hasta 7,5 millones de euros o el 1% de la facturación global.' } },
          { '@type': 'Question', 'name': '¿Qué aplicaciones de IA prohíbe la UE de forma absoluta?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El EU AI Act prohíbe: sistemas de puntuación social por parte de autoridades públicas, vigilancia biométrica en tiempo real en espacios públicos (con excepciones reducidas para fuerzas del orden), IA que explote vulnerabilidades cognitivas y la recopilación masiva de imágenes faciales de internet para construir bases de datos de reconocimiento. Estas están categorizadas como Riesgo Inaceptable.' } },
          { '@type': 'Question', 'name': '¿En qué se diferencia la regulación de IA de EE.UU. del enfoque de la UE?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'EE.UU. utiliza un enfoque sectorial y voluntario: los reguladores existentes (FTC, FDA, CFPB, EEOC) aplican sus mandatos a la IA en sus dominios. No existe ninguna ley federal de IA equivalente al EU AI Act. La Orden Ejecutiva de Biden sobre Seguridad de la IA (octubre de 2023) fue revocada por la administración Trump en enero de 2025 y reemplazada por un Plan de Acción de IA centrado en la competitividad.' } },
          { '@type': 'Question', 'name': '¿La IA de China es tan capaz como los sistemas de IA de EE.UU.?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1, lanzado en enero de 2025, superó a GPT-5.5 en benchmarks de razonamiento y codificación (AIME 2024: 79.8% vs 74.4% de GPT-5.5, MATH-500: 97.3%, HumanEval) mientras que supuestamente se entrenó a un costo de ~6 millones de dólares — una reducción del 94% frente a los costos estimados de entrenamiento de modelos de frontera. Los modelos líderes de China son competitivos en muchas tareas pero quedan por detrás en razonamiento multilingüe y benchmarks de seguridad.' } },
          { '@type': 'Question', 'name': '¿Pueden las empresas de la UE usar GPT-5.5 y Claude bajo el AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, para la mayoría de los casos de uso. GPT-5.5 y Claude Opus 4.8 califican como modelos de Propósito General de IA (GPAI) y deben cumplir obligaciones de transparencia — incluyendo publicar resúmenes de datos de entrenamiento y cumplir con la ley de derechos de autor de la UE — que entraron en vigor en agosto de 2025. OpenAI y Anthropic han publicado documentación de cumplimiento GPAI para usuarios de la UE.' } },
          { '@type': 'Question', 'name': '¿Cómo afecta DeepSeek a la carrera geopolítica de la IA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El lanzamiento de DeepSeek R1 en enero de 2025 demostró que las capacidades de IA de frontera son alcanzables a costos de cómputo significativamente menores de lo que se asumía previamente. Esto debilita el argumento de que los controles de exportación sobre las GPU de Nvidia limitarán permanentemente el desarrollo de IA en China. Aceleró los debates de política en EE.UU. y la UE sobre si las estrategias de contención basadas en cómputo son suficientes.' } },
          { '@type': 'Question', 'name': '¿Qué es el Efecto Bruselas en la IA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El Efecto Bruselas describe cómo las regulaciones de la UE se convierten en estándares globales de facto porque las empresas multinacionales encuentran más fácil aplicar el estándar más estricto en todo el mundo en lugar de mantener pilas de cumplimiento separadas por jurisdicción. Para la IA, esto significa que el EU AI Act efectivamente eleva los estándares para GPT-5.5, Claude y Gemini globalmente — independientemente de dónde estén ubicados los usuarios.' } },
          { '@type': 'Question', 'name': '¿Pueden las organizaciones de la UE usar DeepSeek para aplicaciones comerciales?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Técnicamente sí, con Cláusulas Contractuales Estándar (SCC) conformes con el RGPD. En la práctica, las SCC son difíciles de hacer cumplir frente a las obligaciones de la ley china que requieren el cumplimiento del acceso a datos del CAC. Alemania (BSI), Francia (ANSSI) y los Países Bajos (NCSC) han emitido avisos que restringen las herramientas de IA chinas para el gobierno y las infraestructuras críticas. Las organizaciones del sector privado deben realizar una Evaluación de Impacto de Transferencia bajo el Artículo 46 del RGPD antes de procesar datos personales a través de DeepSeek.' } },
          { '@type': 'Question', 'name': '¿Qué marcos de gobernanza de IA existen en América Latina?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'América Latina no tiene equivalente al EU AI Act. Colombia lidera con el Conpes 3975 (2019), una política nacional de IA con directrices voluntarias sobre gobernanza responsable. Brasil avanza en una legislación de IA específica. Chile, México y Argentina han publicado estrategias nacionales de IA. La mayoría de los marcos latinoamericanos se alinean con los principios de IA de la OCDE y son voluntarios, sin sanciones vinculantes equivalentes a las del EU AI Act.' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'El deck de diapositivas cubre: requisitos de residencia de datos por región (UE RGPD, China PIPL, India DPDP), selección de modelos según el contexto geopolítico, panorama regulatorio de IA en las principales jurisdicciones y una lista de verificación de cumplimiento. Descarga el PDF como tarjeta de referencia de despliegue de IA geopolítica.',
      sections: {
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'La IA es una tecnología nacional estratégica — EE.UU., China y la UE compiten por la dominancia.',
            'Los países compiten por tres recursos: cómputo (chips), talento en IA y datos de entrenamiento.',
            'La IA afecta simultáneamente la capacidad militar, la competitividad económica y el poder cibernético.',
            'El EU AI Act es la primera ley de IA vinculante del mundo — las multas alcanzan €35M o el 7% de la facturación global.',
            'El Efecto Bruselas: las reglas del EU AI Act se aplican a cualquier IA que llegue a usuarios de la UE, en todo el mundo.',
            'EE.UU. no tiene ley federal de IA — los reguladores sectoriales aplican mandatos existentes a la IA en sus dominios.',
            'EE.UU. revocó su orden ejecutiva de seguridad en IA en enero de 2025 — la competitividad lidera ahora sobre la seguridad.',
            'DeepSeek R1 de China superó a GPT-5.5 en benchmarks clave (AIME, MATH, HumanEval) a un costo de entrenamiento de $6M — una reducción del 94% — demostrando que los controles de exportación de GPU tienen límites.',
            'TSMC en Taiwán fabrica los chips que impulsan toda la IA de frontera — una única dependencia geopolítica.',
            'Las organizaciones deben cumplir simultáneamente tres marcos regulatorios incompatibles: UE, EE.UU. y China.',
          ],
        },

        quickFacts: {
          title: 'Datos rápidos: Geopolítica de la IA de un vistazo',
          items: [
            '**EU AI Act:** Primera ley de IA vinculante del mundo. Aplicación de alto riesgo: 2 de agosto de 2026 (puede retrasarse hasta el 2 de diciembre de 2027 por el Ómnibus Digital, pendiente del acuerdo de trílogo programado para el 13 de mayo de 2026). Multas: hasta €35 millones o el 7% de los ingresos anuales globales.',
            '**Política de IA de EE.UU.:** Sin ley federal de IA. La administración Trump persigue la preemption de leyes estatales mediante EO 14365 (diciembre de 2025), Marco Nacional (marzo de 2026) y la propuesta TRUMP AMERICA AI Act (marzo de 2026). Múltiples plazos de implementación incumplidos a mayo de 2026.',
            '**Gobernanza de IA en China:** Evaluación previa al lanzamiento del CAC (Administración del Ciberespacio de China) obligatoria. Los filtros de contenido bloquean la crítica al PCCh, las discusiones sobre Taiwán/Tíbet/Xinjiang y el contenido que socava los "valores socialistas fundamentales". Los filtros devuelven HTTP 200 con flag `is_safe: 0` (no errores 4xx). La PIPL exige residencia de datos para datos personales chinos.',
            '**Cuellos de botella de hardware:** Nvidia controla ~80% del mercado de GPU para entrenamiento de IA. TSMC fabrica ~90% de los semiconductores avanzados. Ambos son puntos de conflicto geopolítico. La CHIPS Act de EE.UU. ($52B) tiene como objetivo reducir la dependencia de TSMC.',
            '**Impacto de DeepSeek R1:** Superó a GPT-5.5 en razonamiento/codificación (AIME 2024, MATH, HumanEval) a un costo de entrenamiento estimado de ~$6M (reducción del 94% frente a las estimaciones de modelos de frontera). Entrenado en GPU Nvidia H800 restringidas para China. Demuestra que los controles de exportación de hardware tienen límites.',
            '**Conflicto regulatorio global:** La UE se centra en derechos y seguridad; EE.UU. se centra en innovación y competitividad; China se centra en control estatal y ventaja estratégica. Las organizaciones que despliegan IA globalmente deben navegar tres marcos incompatibles simultáneamente.',
          ],
        },

        euImplications: {
          title: 'Si eres una organización con sede en la UE: Plazos de cumplimiento críticos',
          content: [
            '**El EU AI Act es vinculante y se aplica a partir de agosto de 2026.** Si tu organización tiene sede en la UE o atiende a usuarios de la UE, debes cumplir con su sistema de clasificación de riesgo de cuatro niveles. Las multas por prácticas prohibidas alcanzan €35 millones o el 7% de la facturación global — lo que sea mayor. El incumplimiento no es negociable.',
            '**Si despliegas GPT-5.5, Claude Opus 4.8 o Gemini 3.1 Pro en la UE, debes auditar su documentación de cumplimiento de IA de Propósito General (GPAI).** OpenAI, Anthropic y Google publicaron documentación de transparencia (resúmenes de datos de entrenamiento, limitaciones de capacidades, pruebas de seguridad) a partir de agosto de 2025. Guarda estas certificaciones como prueba de cumplimiento — los reguladores las pedirán.',
            '**Los sistemas de IA de alto riesgo (contratación, decisiones de crédito, atención sanitaria, aplicación de la ley) requieren evaluaciones de conformidad antes del despliegue.** Esto significa pruebas de sesgo, documentación de mecanismos de supervisión humana y trazas de auditoría de todas las decisiones de IA. Los modelos de pesos abiertos desplegados localmente (LLaMA vía Ollama, Mistral Large) satisfacen los requisitos de residencia de datos — ningún dato sale de tu infraestructura y tú controlas la traza de auditoría.',
            '**El Efecto Bruselas se aplica a ti.** Si tu sistema de IA llega a un único residente de la UE, el EU AI Act se aplica — aunque tu empresa tenga sede en EE.UU. o China. Esto significa que aplicar el mismo nivel de cumplimiento globalmente suele ser más sencillo que mantener múltiples configuraciones.',
          ],
        },

        promptEngineerTakeaways: {
          title: 'Puntos clave para prompt engineers',
          isTldr: true,
          items: [
            'Las APIs de IA chinas (DeepSeek, ERNIE 4.0, Qwen vía Alibaba Cloud) filtran contenido a nivel de API — los temas políticos, las críticas al PCCh y los temas de Taiwán/Tíbet/Xinjiang devuelven `is_safe: 0` en respuestas HTTP 200, no HTTP 4xx. Manéjalos explícitamente en el código de tu aplicación.',
            'Los modelos Mistral y los despliegues locales de Ollama satisfacen los requisitos de residencia de datos del EU AI Act — los prompts y salidas nunca salen de tu infraestructura. Esta es la ruta de menor fricción hacia el cumplimiento de RGPD + EU AI Act para prompt engineers.',
            'GPT-5.5 y Claude Opus 4.8 son conformes con GPAI bajo el EU AI Act a partir de agosto de 2025. Puedes usarlos en despliegues orientados a la UE sin trabajo de cumplimiento adicional a nivel de modelo — tu obligación está a nivel de aplicación (desplegador), no a nivel de modelo.',
            'El Efecto Bruselas significa que los prompts enviados a modelos alojados en EE.UU. para productos utilizados por residentes de la UE están sujetos a los requisitos del EU AI Act — aunque tu empresa no tenga sede en la UE.',
            'Para pruebas multijurisdiccionales, despacha el mismo prompt a Mistral (conforme con la UE), GPT-5.5 (EE.UU./GPAI) y Qwen (accesible en China) simultáneamente para comparar salidas en diferentes contextos regulatorios. PromptQuorum lo soporta de forma nativa.',
          ],
        },

        promptOptimizationByRegion: {
          title: 'Cómo la geopolítica cambia la optimización de prompts: País por país',
          content: [
            '**Dónde se consume la salida de tu IA determina qué deben hacer tus prompts — y qué deben evitar.** El idioma afecta directamente al rendimiento del modelo: un prompt escrito en inglés enviado a un modelo chino (ERNIE 4.0, Qwen) tiene un rendimiento inferior al mismo prompt escrito en chino mandarín. La ley afecta estructuralmente el diseño del prompt: los requisitos de divulgación del EU AI Act, las regulaciones sectoriales de EE.UU. y los filtros de contenido CAC de China imponen diferentes restricciones sobre cómo se pueden formular los prompts, qué salidas pueden generarse y cómo deben manejar las respuestas las aplicaciones.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: 'Consejo profesional: Escribe prompts en el idioma objetivo',
              text: 'GPT-5.5, Claude Opus 4.8 y Gemini 3.1 Pro tienen un rendimiento significativamente mejor en tareas en alemán, francés, japonés y chino cuando el propio prompt está en ese idioma. Los prompts en inglés para salida en otro idioma añaden una capa de traducción que degrada la calidad. Si estás optimizando el rendimiento del modelo para un país específico, escribe tus prompts en el idioma de ese país desde el principio.',
            },
          ],
          tableFormat: true,
          columns: ['Región', 'Restricción legal en prompts', 'Optimización de idioma', 'Modelo recomendado'],
          rows: [
            {
              'Región': 'Unión Europea',
              'Restricción legal en prompts': 'EU AI Act: los prompts que generan contenido que interactúa con consumidores de la UE deben incluir divulgación de IA. RGPD: los prompts no deben incluir datos personales sin base legal. Las aplicaciones de IA de alto riesgo (RRHH, crédito, salud) requieren supervisión humana — los prompts no deben automatizar decisiones finales.',
              'Optimización de idioma': 'Escribe prompts en el idioma objetivo (alemán, francés, etc.) — GPT-5.5 y Claude Opus 4.8 tienen un rendimiento significativamente mejor en tareas no inglesas cuando los prompts están en el mismo idioma que la salida deseada. Especifica el idioma de salida explícitamente en los system prompts.',
              'Modelo recomendado': 'Mistral Large (francés, sede en la UE), despliegue local de Ollama (los datos nunca salen de la infraestructura), o GPT-5.5/Claude con endpoints de API de la región UE y SCC.',
            },
            {
              'Región': 'Estados Unidos',
              'Restricción legal en prompts': 'Sin ley federal de IA, pero aplican reglas sectoriales: HIPAA (salud — la PHI no debe aparecer en los prompts), CCPA/CPRA (California — los datos personales en prompts activan derechos del consumidor), Ley FTC (los prompts no deben generar contenido engañoso en contextos de consumo). Las leyes biométricas estatales (Illinois BIPA) restringen los prompts que procesan datos faciales/de voz.',
              'Optimización de idioma': 'Los modelos de frontera de EE.UU. (GPT-5.5, Claude Opus 4.8) están optimizados para el inglés y tienen su mejor rendimiento en prompts en inglés. Para mercados de habla hispana en EE.UU., instruye explícitamente al modelo en español o usa un system prompt bilingüe — no confíes en la detección automática.',
              'Modelo recomendado': 'GPT-5.5 o Claude Opus 4.8 para uso general. Para prompts regulados en salud o finanzas, usa la API con SCC y evita enviar PHI/PII en el contexto del prompt.',
            },
            {
              'Región': 'China',
              'Restricción legal en prompts': 'Medidas de IA Generativa del CAC (2023): los prompts que soliciten contenido sobre el liderazgo del PCCh, la independencia de Taiwán/Tíbet/Xinjiang, los eventos de Tiananmen de 1989 o cualquier cosa que socave los "valores socialistas fundamentales" serán bloqueados. Devuelto como HTTP 200 con `is_safe: 0`. PIPL: los prompts que contengan datos personales de usuarios chinos no deben enrutarse a servidores fuera de China.',
              'Optimización de idioma': 'Escribe prompts en chino simplificado (mandarín) para tareas en chino — Qwen 3 y ERNIE 4.0 puntúan entre un 10-20% más alto en benchmarks de idioma chino (C-Eval) vs. el mismo prompt en inglés. Usa Pinyin o inglés para terminología técnica cuando no exista equivalente en chino.',
              'Modelo recomendado': 'Qwen 3 72B (auto-alojado fuera de China, sin filtros CAC) para tareas transfronterizas. ERNIE 4.0 vía API Qianfan (registrado en CAC) para despliegues de cara al consumidor en China. DeepSeek R1 para tareas de razonamiento que no toquen áreas de contenido filtrado.',
            },
            {
              'Región': 'Reino Unido / Post-Brexit',
              'Restricción legal en prompts': 'El RGPD del Reino Unido (equivalente al RGPD de la UE) aplica a los datos personales. El UK AI Safety Institute se centra en la evaluación de modelos de frontera, no en el cumplimiento a nivel de aplicación. Sin ley de divulgación de IA obligatoria — el Reino Unido eligió un enfoque pro-innovación liderado por el sector. OFCOM regula el contenido generado por IA en contextos de radiodifusión.',
              'Optimización de idioma': 'Las ortografías y expresiones del inglés británico en los prompts mejoran la calidad de salida para contenido orientado al Reino Unido. GPT-5.5 responde a instrucciones explícitas de "inglés del Reino Unido" en los system prompts; sin ellas, utiliza el inglés americano por defecto.',
              'Modelo recomendado': 'GPT-5.5 o Claude Opus 4.8. Las transferencias de datos del Reino Unido a la UE requieren SCC post-Brexit — la decisión de adecuación del Reino Unido por parte de la UE está vigente pero sujeta a revisión.',
            },
            {
              'Región': 'Japón',
              'Restricción legal en prompts': 'La Ley japonesa de Protección de Información Personal (APPI) restringe el uso de datos personales en prompts de IA. Japón no tiene una ley específica de IA (a partir de 2026) — la orientación del METI y el Ministerio de Asuntos Internos es voluntaria. Japón participó en el Proceso AI de Hiroshima — se alienta la adhesión a sus 11 principios para las empresas japonesas.',
              'Optimización de idioma': 'Los prompts en japonés para tareas en japonés superan a los prompts en inglés en todos los modelos principales. GPT-5.5 y Claude Opus 4.8 manejan bien el japonés; Rakuten AI y NTT LLMs están disponibles para despliegues específicos de Japón. Evita el registro casual (tame-go) en los system prompts — el registro formal (keigo) mejora el cumplimiento y la calidad de salida para contextos empresariales japoneses.',
              'Modelo recomendado': 'GPT-5.5 o Claude Opus 4.8 para tareas japonesas generales. Rakuten AI (Rakuten Group) o NTT LLMs para despliegues nacionales de Japón con sensibilidad al cumplimiento.',
            },
          ],
        },

        keyStatistics: {
          title: 'Geopolítica de la IA: Datos clave',
          content: [
            'Las siguientes cifras representan la escala de la inversión gubernamental en IA, la concentración de hardware y la capacidad de investigación que definen la competencia geopolítica actual en inteligencia artificial.',
          ],
          items: [
            '**Inversión gubernamental en IA — EE.UU.:** $52 mil millones asignados por la CHIPS and Science Act (2022) para la fabricación doméstica de semiconductores, más $200 mil millones para I+D científica. La National AI Initiative Act financia la investigación en IA en 25 agencias federales.',
            '**Inversión gubernamental en IA — China:** Se estima que ¥1 billón ($140 mil millones) en inversión dirigida por el gobierno en IA y semiconductores 2021–2025, incluyendo el Plan Nacional de Desarrollo de IA de Nueva Generación con el objetivo de liderar globalmente la IA para 2030.',
            '**Inversión gubernamental en IA — Unión Europea:** €1 mil millones del fondo de IA del Consejo Europeo de Innovación; las estrategias de los estados miembros añaden más de €10 mil millones: Alemania €5 mil millones (2019–2025), Francia €2 mil millones, Reino Unido £1 mil millones en seguridad y cómputo de IA.',
            '**Concentración de fabricación de chips:** TSMC (Taiwán) fabrica aproximadamente el 90% de los chips más avanzados del mundo por debajo de 7nm. ASML (Países Bajos) es el único fabricante de máquinas de litografía EUV necesarias para la fabricación de nodos avanzados — dando a los Países Bajos un cuello de botella estructural en la cadena de suministro global de chips.',
            '**Cuota de mercado de GPU Nvidia:** Nvidia mantiene aproximadamente el 80% de cuota de mercado en GPU para entrenamiento de IA. Las series H100 y H200 impulsan la mayoría del entrenamiento de modelos de frontera en OpenAI, Google DeepMind, Anthropic y Baidu.',
            '**Distribución de investigadores de IA:** EE.UU. emplea aproximadamente el 40% de los principales investigadores de IA del mundo por impacto de publicación (Stanford HAI 2024 AI Index). China produce el mayor número de doctorados en informática — aproximadamente 50.000 por año — y representa ~30% de los autores de las principales conferencias de IA.',
            '**Presentaciones de patentes de IA:** China presentó aproximadamente el 70% de las patentes globales de IA en 2022 (Índice Global de Innovación de la OMPI). EE.UU. lidera en citas e inventos comercializados; China lidera en volumen.',
            '**Compresión del costo de entrenamiento de modelos:** Reducción del costo del 94% — se estima que GPT-4 costó ~$100 millones en cómputo de entrenamiento (2023) frente a los ~$6 millones reportados de DeepSeek R1 (enero de 2025). Esta brecha demuestra que los controles de exportación del costo de cómputo de EE.UU. no pueden restringir permanentemente el desarrollo de IA de frontera en China.',
            '**Cobertura del EU AI Act:** La ley cubre 450 millones de consumidores en 27 estados miembros de la UE. El umbral de riesgo sistémico para modelos GPAI es 10²⁵ FLOPs de cómputo de entrenamiento — el nivel al que se aplican requisitos adicionales de pruebas adversariales.',
            '**Declaración de Bletchley (noviembre de 2023):** Firmada por 28 naciones incluyendo EE.UU., China y estados miembros de la UE — el consenso internacional de seguridad de IA más amplio hasta la fecha, aunque no vinculante.',
          ],
          image: '/images/ai-regulation-timeline-es.svg',
          imageCaption: 'Línea temporal regulatoria global de IA 2022–2026: propuesta del EU AI Act (2021), CHIPS Act (2022), reglas de algoritmos del CAC (2022–2023), EU AI Act adoptado (2024), fase de aplicación enero 2025.',
        },

        qaWhyStrategic: {
          title: '¿Por qué la IA es estratégicamente importante?',
          content: [
            'La IA es estratégicamente importante porque amplifica la capacidad en cada dimensión del poder nacional simultáneamente — productividad económica, efectividad militar, análisis de inteligencia y operaciones cibernéticas. Las naciones con IA líder pueden automatizar la investigación científica, optimizar la logística militar, procesar datos de vigilancia a escala y desarrollar sistemas de armas autónomas. La OCDE proyecta que la IA podría añadir $15,7 billones al PIB global para 2030, haciendo del liderazgo en IA el equivalente al liderazgo industrial del siglo XX.',
          ],
        },

        qaWhichCountriesDominate: {
          title: '¿Qué países dominan el desarrollo de la IA?',
          content: [
            'EE.UU. domina la capacidad de modelos de frontera — OpenAI (GPT-5.5), Anthropic (Claude) y Google DeepMind (Gemini) tienen todas sede en EE.UU. China lidera en volumen de patentes de IA (~70% de las patentes globales en 2022 según la OMPI) y tiene los modelos domésticos más capaces fuera de EE.UU.: Alibaba Qwen 3, Baidu ERNIE 4.0 y DeepSeek R1. La UE lidera en regulación de IA pero va por detrás en capacidad de frontera — Mistral AI de Francia es el principal contendiente europeo.',
          ],
        },

        qaChipsRole: {
          title: '¿Qué papel juegan los chips en la geopolítica de la IA?',
          content: [
            'Los chips semiconductores son el sustrato físico de la capacidad de IA. Entrenar modelos de frontera requiere miles de GPU especializadas funcionando durante meses — una única ejecución de entrenamiento para un modelo grande puede costar $10–100 millones en cómputo. Nvidia mantiene aproximadamente el 80% del mercado de GPU para entrenamiento de IA; TSMC en Taiwán los fabrica. Esto crea dos cuellos de botella geopolíticos: EE.UU. puede restringir las exportaciones de GPU de Nvidia a naciones adversarias (restringiendo las ventas de A100 y H100 a China desde 2022), y cualquier interrupción en las operaciones de TSMC reduciría inmediatamente el suministro global de hardware de IA.',
          ],
        },

        qaHowAIChangePower: {
          title: '¿Cómo podría la IA cambiar el poder global?',
          content: [
            'La IA podría desplazar el poder global haciendo que las naciones líderes en IA sean desproporcionadamente poderosas en relación con su tamaño económico o poblacional. Militarmente, la IA permite el targeting autónomo, la optimización logística y el procesamiento de inteligencia de señales a velocidades que ningún sistema dotado de personal humano puede igualar. Económicamente, las ganancias de productividad de la IA se componen — las naciones con acceso a IA de frontera podrían mantener tasas de crecimiento del PIB que amplíen la brecha con las que no lo tienen. El Efecto Bruselas de la UE ya está haciendo esto a través de la regulación: el EU AI Act moldea el desarrollo global de IA sin que la UE lidere en capacidad de modelos.',
          ],
        },

        geopoliticsOfAI: {
          title: 'La geopolítica de la inteligencia artificial',
          content: [
            '**La geopolítica de la inteligencia artificial es el estudio de cómo los estados usan la capacidad de IA, la regulación de IA y la infraestructura de IA como instrumentos de poder.** Abarca tres competiciones distintas: la carrera para construir los modelos más capaces, la contienda sobre qué marco regulatorio rige el despliegue global de IA, y la lucha por controlar las cadenas de suministro de hardware que hacen posible la IA de frontera.',
            'Cada dimensión tiene consecuencias concretas para las organizaciones. La capacidad del modelo determina qué herramientas de IA están disponibles. Los marcos regulatorios determinan qué herramientas son permisibles y qué documentación se requiere. El control del hardware determina qué naciones pueden sostener el desarrollo de IA de frontera de forma independiente — y cuáles no.',
          ],
        },

        keyEntityRelationships: {
          title: 'Entidades clave en la geopolítica de la IA y sus relaciones',
          content: [
            '**La regulación de IA** es el conjunto de leyes, órdenes ejecutivas y marcos voluntarios que rigen cómo se desarrollan, despliegan y gobiernan los sistemas de inteligencia artificial. La regulación de IA es producida por estados soberanos y organismos internacionales; los tres regímenes regulatorios principales son el EU AI Act (Unión Europea), el NIST AI Risk Management Framework (Estados Unidos) y las Medidas de IA Generativa del CAC (China).',
            '**La rivalidad tecnológica EE.UU.-China** es la competencia bilateral entre Estados Unidos y China por el liderazgo en semiconductores, inteligencia artificial y fabricación avanzada. La rivalidad se expresa a través de los controles de exportación de EE.UU. sobre las GPU de Nvidia, la estrategia de sustitución doméstica de China (Made in China 2025) y marcos de gobernanza de IA en competencia. La UE es un tercer actor — no una parte bilateral — que moldea la rivalidad a través de su poder regulatorio.',
            '**El EU AI Act** es un reglamento aprobado por el Parlamento Europeo en marzo de 2024. Es aplicado por la Oficina de IA de la UE y las autoridades nacionales de vigilancia del mercado. Se aplica a cualquier organización — independientemente de su ubicación — cuyos sistemas de IA afecten a usuarios de la UE. El EU AI Act está relacionado con el Efecto Bruselas: dado que se aplica extraterritorialmente, efectivamente regula a OpenAI, Google DeepMind y Anthropic globalmente.',
            '**NVIDIA** es una empresa de semiconductores estadounidense que diseña GPU para entrenamiento de IA (series H100, H200, B200). El hardware de NVIDIA es el sustrato de cómputo principal para entrenar GPT-5.5, Claude, Gemini y la mayoría de los modelos de IA de frontera. Los controles de exportación de EE.UU. sobre las GPU de NVIDIA para China son un mecanismo central en la rivalidad tecnológica EE.UU.-China.',
            '**TSMC** (Taiwan Semiconductor Manufacturing Company) es una fundición de chips taiwanesa que fabrica semiconductores avanzados para NVIDIA, Apple, AMD y Google. La ubicación geográfica de TSMC en Taiwán — y el estatus político disputado de la isla — hace que TSMC sea una variable crítica en la geopolítica de la IA.',
            '**DeepSeek** es un laboratorio de IA chino que lanzó DeepSeek R1 en enero de 2025. DeepSeek R1 superó a GPT-5.5 en benchmarks de razonamiento y codificación (AIME 2024, MATH-500, HumanEval) mientras se entrenaba a un costo estimado de ~$6 millones — un 94% menos que las estimaciones de modelos de frontera — usando GPU NVIDIA H800 restringidas para China.',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: '5 dimensiones geopolíticas de la IA',
          content: [
            'La geopolítica de la IA opera en cinco dimensiones distintas. Cada una representa una arena de competencia separada entre EE.UU., China y la UE — y cada una crea diferentes obligaciones y riesgos para las organizaciones que despliegan IA.',
          ],
          items: [
            '**1. Economía.** La IA impulsa la productividad, la automatización y el crecimiento del PIB. Las naciones con capacidad de IA superior obtienen eficiencia manufacturera, ventajas en modelado financiero y descubrimiento científico más rápido. La OCDE proyecta que la IA podría añadir $15,7 billones al PIB global para 2030 — la mayoría capturada por las naciones líderes en IA.',
            '**2. Militar.** La IA permite sistemas de armas autónomas, logística predictiva, procesamiento de inteligencia de campo de batalla y operaciones cibernéticas a velocidad de máquina. EE.UU., China y Rusia están desarrollando sistemas militares habilitados por IA.',
            '**3. Inteligencia.** La IA procesa imágenes satelitales, intercepta señales y analiza datos de fuentes abiertas a escalas imposibles para analistas humanos. Los deepfakes generados por IA son una herramienta emergente de operaciones de inteligencia e influencia.',
            '**4. Infraestructura.** La IA depende de infraestructura física: fundiciones de semiconductores (TSMC, Samsung, Intel), centros de datos, cables submarinos y redes eléctricas. Las naciones que controlan la infraestructura crítica de IA — fabricación de chips, plataformas en la nube, cómputo de entrenamiento — tienen apalancamiento estructural sobre las que no lo hacen.',
            '**5. Gobernanza global.** Qué marco regulatorio se convierte en el estándar global predeterminado determina qué pueden hacer los sistemas de IA, qué datos pueden usar y qué organizaciones pueden desplegarlos. El EU AI Act, los marcos NIST de EE.UU. y las regulaciones del CAC de China representan tres modelos de gobernanza en competencia — y el Efecto Bruselas significa que el modelo de la UE ya se aplica más allá de sus fronteras.',
          ],
        },

        threeWayRace: {
          title: 'La carrera armamentística de la IA: EE.UU., China y la UE',
          content: [
            '**Tres visiones incompatibles de la gobernanza de IA compiten por la adopción global — EE.UU. prioriza la innovación y la competitividad, China usa la dirección estatal para lograr la dominancia estratégica en IA, y la UE construye un marco legal basado en derechos que exporta sus estándares globalmente a través del Efecto Bruselas.** Esta carrera armamentística de IA es principalmente civil: los laboratorios líderes son empresas privadas (OpenAI, Anthropic, Google DeepMind, Baidu, Alibaba), pero las apuestas — control regulatorio, cadenas de suministro de hardware y talento — son geopolíticas.',
            'La carrera no se trata solo de quién construye los modelos más capaces. Se trata de qué marco regulatorio se convierte en el estándar global predeterminado. El EU AI Act, al aplicarse a cualquier sistema de IA desplegado para usuarios de la UE, ya ha hecho de Bruselas el regulador efectivo de OpenAI, Anthropic y Google DeepMind globalmente. Consulta [open source vs. LLM propietarios](/prompt-engineering/open-source-vs-proprietary-llms) para ver cómo estas dinámicas afectan la disponibilidad de modelos.',
          ],
          items: [
            '**Posición de EE.UU.:** Lidera en capacidad de modelos de frontera (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro), diseño de chips (Nvidia, AMD) e inversión en IA ($67B de inversión privada en 2023 según la OCDE). Sin ley federal unificada de IA — acelera el despliegue pero crea fragmentación de cumplimiento.',
            '**Posición de China:** Lidera en volumen de patentes de IA, escala de reconocimiento facial y despliegue de infraestructura dirigido por el estado. Los modelos (Qwen 3, ERNIE 4.0, DeepSeek R1) son competitivos en muchos benchmarks. La dependencia del hardware en arquitecturas Nvidia es la principal vulnerabilidad estratégica que buscan los controles de exportación.',
            '**Posición de Europa:** Lidera en regulación de IA — el EU AI Act es el marco de referencia global — e investigación de pesos abiertos (Mistral de Francia). Va por detrás en capacidad de modelos de frontera e inversión privada. Compensa mediante apalancamiento regulatorio: el Efecto Bruselas obliga a los proveedores de EE.UU. y China a cumplir con los estándares de la UE para productos globales.',
            '**La capa de hardware:** Las GPU Nvidia H100/H200 dominan el entrenamiento de IA. Los controles de exportación de EE.UU. restringen las ventas a China. DeepSeek R1 entrenado en GPU H800 restringidas a un costo reportado de ~$6M — una reducción del 94% frente a las estimaciones de entrenamiento de GPT-5.5 — demostrando que los controles de hardware no han detenido la IA de frontera china.',
          ],
          image: '/images/regional-ai-players-es.svg',
          imageCaption: 'EE.UU.: OpenAI, Anthropic, Google DeepMind (financiados por VC). UE: Mistral, Hugging Face (open-source, infra-financiados vs. EE.UU.). China: Baidu, Alibaba, Tencent (respaldados por el estado, supervisión del CAC).',
        },

        euAiAct: {
          title: 'El EU AI Act: qué requiere realmente',
          content: [
            '**El EU AI Act clasifica los sistemas de IA en cuatro niveles de riesgo, con requisitos y multas escalados al nivel de riesgo que el sistema supone para los derechos fundamentales y la seguridad.** El Parlamento Europeo aprobó la ley en marzo de 2024 con 523 votos a favor, 46 en contra y 49 abstenciones.',
            'La ley se aplica a los proveedores que colocan sistemas de IA en el mercado de la UE, a los desplegadores que usan sistemas de IA dentro de la UE y a los importadores y distribuidores — independientemente de dónde estén radicadas estas organizaciones.',
          ],
          items: [
            '**Riesgo inaceptable (prohibido):** Puntuación social por autoridades públicas; identificación biométrica en tiempo real en espacios públicos (se permiten excepciones reducidas para la aplicación de la ley); IA que explota vulnerabilidades cognitivas; recopilación masiva de imágenes faciales. Prohibidos desde agosto de 2024.',
            '**Alto riesgo:** IA en infraestructura crítica, educación, empleo, servicios esenciales (crédito, beneficios), aplicación de la ley, control fronterizo y administración de justicia. Requiere evaluaciones de conformidad, documentación de transparencia, supervisión humana y registro en la base de datos de la UE.',
            '**Riesgo limitado:** Chatbots y contenido generado por IA. Requiere divulgación — los usuarios deben saber que están interactuando con IA.',
            '**Riesgo mínimo:** Filtros de spam, IA en videojuegos, sistemas de recomendación sin impacto significativo. Sin obligaciones específicas más allá de la ley existente.',
            '**IA de Propósito General (GPAI):** Modelos como GPT-5.5, Claude y Gemini deben publicar resúmenes de datos de entrenamiento, cumplir con la ley de derechos de autor de la UE e informar de incidentes graves. Los modelos con riesgo sistémico (entrenados con >10^25 FLOPS) enfrentan requisitos adicionales de pruebas adversariales. Las reglas GPAI se aplicaron en agosto de 2025.',
            '**Aplicación:** La Oficina de IA de la UE (dentro de la Comisión Europea) supervisa los modelos GPAI. Las autoridades nacionales de vigilancia del mercado aplican las reglas de IA de alto riesgo. Multas: hasta €35M o el 7% de la facturación global por prácticas prohibidas; €15M o el 3% por infracciones de alto riesgo.',
            '**Cronograma:** Prácticas prohibidas: agosto de 2024. Obligaciones GPAI: agosto de 2025. Sistemas de IA de alto riesgo: agosto de 2026. IA de alto riesgo en productos regulados: agosto de 2027.',
          ],
          image: '/images/ai-risk-tiers-comparison-es.svg',
          imageCaption: 'Sistema de 4 niveles de riesgo del EU AI Act: Inaceptable (prohibido ago. 2024), Alto riesgo (evaluación de conformidad), Limitado (solo divulgación), Mínimo (sin obligaciones).',
        },

        digitalOmnibus: {
          title: 'Ómnibus Digital: Plazo de cumplimiento de alto riesgo del EU AI Act en incertidumbre',
          content: [
            '**A mayo de 2026, el plazo de cumplimiento de alto riesgo del EU AI Act del 2 de agosto de 2026 puede retrasarse hasta el 2 de diciembre de 2027 — pero la adopción no está garantizada.** La Comisión Europea propuso el Ómnibus Digital en noviembre de 2025 para abordar consecuencias no deseadas y desafíos de implementación en el EU AI Act.',
            '**Estado del trílogo:** El segundo trílogo del 28 de abril de 2026 terminó sin consenso. Se programó un tercer trílogo para el 13 de mayo de 2026. Si se adopta antes del 2 de agosto de 2026, el aplazamiento se vuelve vinculante; si no, se aplica la fecha límite original del 2 de agosto de 2026.',
            '**Qué deben hacer las organizaciones:** Planifica para el 2 de agosto de 2026 como tu plazo de cumplimiento vinculante para sistemas de IA de alto riesgo. El aplazamiento del Ómnibus Digital puede extender tu plazo hasta diciembre de 2027, pero asumir que el retraso se aprobará es un riesgo. Lograr el cumplimiento de agosto de 2026 ahora significa que estás protegido de cualquier manera.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Aviso: Adopción del Ómnibus Digital incierta',
              text: 'El aplazamiento del Ómnibus Digital de agosto de 2026 a diciembre de 2027 NO está garantizado. El segundo trílogo del 28 de abril de 2026 no llegó a ningún consenso. NO asumas que el retraso se aprobará. Planifica tu hoja de ruta de cumplimiento para el 2 de agosto de 2026 como fecha límite vinculante.',
            },
          ],
        },

        euMemberStates: {
          title: 'Estados miembros de la UE: Estrategias nacionales de IA',
          content: [
            '**Cada estado miembro de la UE ha adoptado una estrategia nacional de IA, pero los niveles de inversión, las áreas de enfoque y el ritmo de implementación varían significativamente.**',
          ],
          items: [
            '**Alemania:** Estrategia Federal de IA (Nationale KI-Strategie), actualizada en 2023. €5 mil millones invertidos en investigación, infraestructura y talento de IA 2019–2025 a través de programas federales. Seis centros de competencia de IA establecidos en las principales universidades.',
            '**Francia:** €2 mil millones en inversión pública en IA anunciados por el presidente Macron (2024). París acogió la Cumbre de Acción de IA en febrero de 2025 — la primera cumbre de gobernanza de IA a nivel G7 bajo la presidencia francesa de la UE. Francia apoya la IA de pesos abiertos como alternativa estratégica a la dependencia de API de EE.UU.',
            '**España:** La Estrategia Nacional de IA de España (ENIA) asigna €600 millones 2021–2025. España estableció la AESIA (Agencia Española de Supervisión de Inteligencia Artificial) — el primer regulador nacional de IA en la UE, establecido en 2023.',
            '**Italia:** Italia celebró la presidencia del G7 en 2024, que produjo el Código de Conducta del Proceso AI de Hiroshima — 11 principios rectores para desarrolladores avanzados de IA adoptados por las naciones del G7.',
            '**Países Bajos:** La Autoridad Holandesa de Protección de Datos (AP) ha emitido orientación de aplicación del RGPD específicamente para sistemas de IA. ASML (Países Bajos) es el único fabricante de máquinas de litografía EUV requeridas para la fabricación de nodos avanzados.',
            '**Polonia:** El Programa Nacional de Desarrollo de IA de Polonia se centra en IA para defensa, ciberseguridad y administración pública. Varsovia alberga un creciente ecosistema de startups de IA.',
            '**Suecia:** La Comisión Sueca de IA publicó su informe en 2024 con más de 60 recomendaciones que cubren educación, despliegue en el sector público e innovación.',
          ],
        },

        franceMistral: {
          title: 'Francia y Mistral: Construyendo la independencia europea en IA',
          content: [
            '**Francia está construyendo un contrapeso estratégico a la dominancia de IA de EE.UU. a través de la inversión pública y Mistral AI — posicionando los modelos de pesos abiertos como el camino de Europa hacia la soberanía de IA.**',
            '**Mistral AI (fundada en 2023):** Fundada por Arthur Mensch, Guillaume Blanc y Tim Caron — todos ex empleados de Meta. Mistral lanzó Mistral Small (pesos abiertos) en septiembre de 2023, seguido de Mistral Large 2 (competitivo con GPT-5.5 en muchas tareas). Mistral Large 2 puntúa 81.2% en MMLU vs. el 88.7% de GPT-5.5. Ventana de contexto de 123K tokens.',
            '**Por qué Francia eligió pesos abiertos:** La posición de Francia es que las APIs propietarias crean dependencia de proveedor, riesgos de residencia de datos y dependencia a largo plazo de empresas de EE.UU. Los modelos de pesos abiertos pueden desplegarse en infraestructura europea, manteniendo los datos dentro de las jurisdicciones de la UE.',
            '**Apoyo gubernamental:** Respaldo del gobierno francés a través de La Caisse des Dépôts et Placements (fondo de inversión estatal). Mistral recibió €385 millones en financiación de la Serie B (febrero de 2024) con apoyo de inversores estratégicos franceses.',
          ],
        },

        nonEuEurope: {
          title: 'Europa no perteneciente a la UE: Reino Unido, Suiza, Noruega, Ucrania',
          content: [
            '**Cuatro grandes estados europeos no pertenecientes a la UE han elegido caminos distintos de gobernanza de IA, ninguno de los cuales se alinea completamente con el EU AI Act.**',
          ],
          items: [
            '**Reino Unido:** Post-Brexit, el Reino Unido eligió un enfoque pro-innovación y liderado por el sector sin legislación específica de IA a partir de 2026. El UK AI Safety Institute (AISI), establecido en noviembre de 2023 tras la Cumbre de Seguridad de IA en Bletchley Park, realiza evaluaciones de modelos de frontera y publica informes de seguridad.',
            '**Suiza:** Suiza mantiene la neutralidad en IA — sin ley nacional de IA, sin planes para una. El Consejo Federal se apoya en la legislación existente. Suiza alberga la Cumbre de IA para el Bien de la ONU en Ginebra anualmente.',
            '**Noruega:** Noruega participa en el Espacio Económico Europeo (EEE), lo que significa que el EU AI Act se aplica cuando se incorpora al Acuerdo EEE. El Fondo de Pensiones Global de Noruega (~$1,8 billones) ha publicado criterios de inversión en IA que requieren que las empresas del portfolio divulguen sus políticas de gobernanza de IA.',
            '**Ucrania:** Ucrania es el desplegador más activo de IA en un contexto de conflicto activo. El Ministerio de Transformación Digital ha firmado acuerdos de cooperación en IA tanto con la UE como con EE.UU. Ucrania solicitó la membresía de la UE en 2022 y está alineando su legislación digital — incluyendo la gobernanza de IA — con los estándares de la UE.',
          ],
        },

        usStrategy: {
          title: 'Estrategia de EE.UU.: Órdenes ejecutivas, CHIPS Act y preemption de leyes estatales',
          content: [
            '**EE.UU. opera sin una ley federal de IA, basándose en órdenes ejecutivas, guías voluntarias y reguladores sectoriales existentes para gobernar la IA.** La posición de la administración Trump, que entró en vigor en enero de 2025, revirtió el enfoque de la administración Biden y prioriza la competitividad y el liderazgo de EE.UU. en IA sobre la precaución en materia de seguridad.',
            'La Ley CHIPS y Ciencias ($52 mil millones, 2022) es la intervención de política de IA más concreta del gobierno de EE.UU. — no regula la IA sino que subvenciona la fabricación doméstica de semiconductores para reducir la dependencia de TSMC en Taiwán. El objetivo es garantizar el acceso de EE.UU. al hardware de IA avanzado independientemente de la situación del Estrecho de Taiwán.',
          ],
          items: [
            '**EO 14365 (diciembre de 2025):** Orden ejecutiva de Trump que instruye al Departamento de Comercio a desarrollar un Marco Nacional para la Innovación en IA y considera la preemption (anulación) de regulaciones estatales de IA que podrían obstaculizar la innovación.',
            '**Marco Nacional de IA (marzo de 2026):** Marco voluntario publicado por el Departamento de Comercio que orienta a las agencias federales sobre el despliegue de IA. Aún no publicado a mayo de 2026 — plazo incumplido.',
            '**Propuesta de TRUMP AMERICA AI Act (marzo de 2026):** Propuesta legislativa para preemptar (anular) las regulaciones estatales de IA que se apliquen específicamente a los sistemas de IA — destinada a impedir que California, Nueva York y Texas creen marcos de cumplimiento de IA fragmentados para operadores nacionales.',
            '**NIST AI RMF (2023):** Marco de Gestión de Riesgos de IA del Instituto Nacional de Estándares y Tecnología — el documento de guía de IA más adoptado en EE.UU. Voluntario, no vinculante. Proporciona siete dimensiones de confiabilidad (seguro, garantizado, explicable, transparente, protección de la privacidad, justo, resiliente) que las agencias federales y muchos contratistas siguen como buenas prácticas.',
          ],
        },

        chinaStrategy: {
          title: 'Estrategia de IA de China: DeepSeek, CAC y Made in China 2025',
          content: [
            '**La estrategia de IA de China es una combinación de dirección del estado, inversión masiva en tecnología y regulación de contenidos — ejecutada a través del CAC (Administración del Ciberespacio de China) y el Plan Nacional de Desarrollo de IA de Nueva Generación.** El lanzamiento de DeepSeek R1 en enero de 2025 demostró que la limitación de chips de exportación no detuvo el desarrollo de IA de frontera en China.',
          ],
          items: [
            '**Plan Nacional de Desarrollo de IA de Nueva Generación (2017):** Objetivo de liderazgo global en IA para 2030 a través de inversión en infraestructura, investigación y aplicaciones comerciales. Presupuesto estimado: ¥1 billón ($140 mil millones) 2021–2025.',
            '**Made in China 2025:** Estrategia de sustitución de importaciones que incluye semiconductores y chips de IA como objetivos prioritarios. Tiene como objetivo reducir la dependencia de China de las GPU de Nvidia mediante el desarrollo de alternativas nacionales (Huawei Ascend, Cambricon).',
            '**Reglamento de algoritmos del CAC (2022) y Medidas de IA Generativa (2023):** Marco regulatorio para la IA en China. Los servicios de IA generativa orientados al consumidor requieren un proceso de aprobación previo al lanzamiento, filtrado de contenidos y registro como empresa con sede en China.',
            '**DeepSeek:** Laboratorio de IA chino respaldado por High-Flyer Capital Management que lanzó DeepSeek R1 (enero de 2025). R1 fue entrenado en GPU Nvidia H800 restringidas a un costo reportado de ~$6M — demostrando que los controles de exportación de hardware tienen límites para restringir el desarrollo de IA de frontera en China.',
          ],
        },

        chinaModelsAccessibility: {
          title: 'China para prompt engineers: qué modelos están disponibles',
          content: [
            '**Los modelos extranjeros (GPT-5.5, Claude, Gemini) son inaccesibles desde China continental sin una VPN.** Para despliegues en China, los desarrolladores deben usar modelos nacionales a través de plataformas aprobadas por el CAC.',
          ],
          items: [
            'Alibaba Qwen 3 (pesos abiertos, 7B–72B, ventana de contexto de 128K): el modelo de código abierto más fuerte de China. Licencia Apache 2.0. Desplegable auto-alojado fuera de China sin filtros del CAC.',
            'Baidu ERNIE 4.0 (API Qianfan): registrado en el CAC para despliegues de cara al consumidor en China. Mejor rendimiento en tareas en chino.',
            'ByteDance Doubao (Volcano Engine): API de servicio gestionado de China continental. Rentable para aplicaciones de alto volumen.',
            'DeepSeek R1/V3: abierto y auto-alojable; también disponible como servicio API. Sin filtros de contenido en la versión auto-alojada.',
            'Z.ai GLM-4: modelo de código abierto chino optimizado para el idioma chino con opciones de contexto largo.',
          ],
        },

        chinaContentFilters: {
          title: 'Filtros de contenido del CAC: restricciones críticas',
          content: [
            '**Los filtros de contenido del CAC son obligatorios en los servicios de IA generativa registrados en China y bloquean contenido que el gobierno chino clasifica como sensible políticamente o socialmente desestabilizador.** Los desarrolladores que crean aplicaciones para el mercado chino deben manejar explícitamente las respuestas de los filtros del CAC.',
          ],
          items: [
            'Áreas de contenido filtradas: liderazgo del PCCh y sus políticas, independencia de Taiwán/Tíbet/Xinjiang, eventos de Tiananmen de 1989, contenido que socave los "valores socialistas fundamentales", críticas al gobierno chino.',
            'Formato de respuesta del filtro: HTTP 200 con `{"is_safe": 0}` en el cuerpo de la respuesta — NO HTTP 4xx. El manejo de errores en la aplicación debe comprobar explícitamente `is_safe` en lugar de depender de los códigos de estado HTTP.',
            'Acciones del desarrollador requeridas: Añade un handler `is_safe` a todas las llamadas a la API de modelos de China. Muestra un mensaje de error controlado al usuario cuando `is_safe: 0`. No asumas que los errores del filtro son raros — cualquier prompt sobre política, historia o eventos geopolíticos actuales puede activar los filtros.',
            'Solución para datos transfronterizos: usa Qwen 3 72B auto-alojado fuera de China para aplicaciones que requieran cobertura de contenido completa. El mismo modelo sirve a ambas regiones con el filtrado de contenido correcto aplicado solo cuando se sirve a través de las APIs de China continental.',
          ],
        },

        chinaDataResidencyAPIs: {
          title: 'Residencia de datos PIPL, APIs prácticas y ejemplos de despliegue',
          content: [
            '**La Ley de Protección de Información Personal (PIPL) de China requiere que los datos personales de los usuarios chinos permanezcan en China o pasen por una evaluación de seguridad gubernamental antes de la transferencia transfronteriza.** Para los prompt engineers, esto significa que las llamadas a la API que involucren datos de usuarios chinos deben enrutarse a través de infraestructura alojada en China continental.',
          ],
          items: [
            'Cumplimiento de PIPL: enruta todo el tráfico de usuarios chinos a través de inferencia alojada en China continental (Alibaba Cloud, Tencent Cloud, Huawei Cloud). No envíes datos de usuarios chinos a APIs alojadas en EE.UU. aunque estés usando versiones de Qwen o DeepSeek.',
            'Arquitectura de despliegue recomendada: despliega Qwen 3 72B (Apache 2.0) en tu propia infraestructura fuera de China para usuarios internacionales. Usa la API de Alibaba Cloud para el segmento de China bajo su registro en el CAC.',
            'Cronograma de evaluación del CAC: 45–90 días para la revisión previa al lanzamiento de servicios de IA generativa de cara al consumidor. Las empresas extranjeras deben asociarse con una entidad de China continental o un proveedor de nube autorizado como el proveedor registrado.',
          ],
        },

        regulatoryComparison: {
          title: 'Regulación global de IA: UE vs. EE.UU. vs. China comparados',
          content: [
            '**Las tres potencias reguladoras persiguen enfoques fundamentalmente diferentes a la gobernanza de IA.** La UE prioriza los derechos y la seguridad; EE.UU. prioriza la innovación; China prioriza el control del estado.',
          ],
          tableFormat: true,
          columns: ['Dimensión', 'Unión Europea', 'Estados Unidos', 'China'],
          rows: [
            { 'Dimensión': 'Enfoque regulatorio', 'Unión Europea': 'Marco legal basado en derechos; clasificación de riesgo de 4 niveles', 'Estados Unidos': 'Sectorial, voluntario; sin ley federal de IA', 'China': 'Dirigido por el estado, primer control; estrategia de desarrollo nacional' },
            { 'Dimensión': 'Legislación clave', 'Unión Europea': 'EU AI Act (2024, obligatorio) + RGPD', 'Estados Unidos': 'Sin ley federal de IA; NIST AI RMF (voluntario); Plan de Acción de IA Trump (2025)', 'China': 'Reglamentos de algoritmos y IA generativa del CAC (2022–2023)' },
            { 'Dimensión': 'Marco de niveles de riesgo', 'Unión Europea': 'Sistema de 4 niveles (Inaceptable/prohibido, Alto/evaluación de conformidad, Limitado/divulgación, Mínimo/sin obligaciones)', 'Estados Unidos': 'NIST AI RMF voluntario con 7 dimensiones de confiabilidad; sin niveles obligatorios', 'China': 'Evaluación de seguridad previa al despliegue requerida para IA generativa' },
            { 'Dimensión': 'Multas máximas', 'Unión Europea': '€35 millones o el 7% de la facturación global por prácticas prohibidas; €15 millones o el 3% por infracciones de alto riesgo', 'Estados Unidos': 'Sin multa federal específica de IA; la FTC persigue prácticas desleales/engañosas', 'China': 'Hasta ¥100.000 por infracción; suspensión del servicio para IA generativa no conforme' },
            { 'Dimensión': 'Aplicaciones de IA prohibidas', 'Unión Europea': 'Puntuación social, vigilancia biométrica en tiempo real, IA que explote vulnerabilidades cognitivas, recopilación masiva de imágenes faciales', 'Estados Unidos': 'Sin prohibiciones federales; variación a nivel estatal', 'China': 'Contenido que socave el liderazgo del PCCh o los "valores socialistas fundamentales"; los deepfakes deben divulgarse' },
            { 'Dimensión': 'Alcance internacional', 'Unión Europea': 'Efecto Bruselas — se aplica extraterritorialmente a cualquier IA que llegue a usuarios de la UE', 'Estados Unidos': 'Controles de exportación de hardware; sin regulación de contenido extraterritorial', 'China': 'Las exportaciones de IA de la BRI difunden normas de gobernanza chinas; el Gran Cortafuegos limita el acceso a IA extranjera en el interior' },
          ],
        },

        organizationsImplications: {
          title: 'Riesgos geopolíticos de la IA para las organizaciones',
          content: [
            '**Las organizaciones que despliegan IA globalmente enfrentan cuatro riesgos geopolíticos: incertidumbre regulatoria, restricciones de disponibilidad de modelos, fragmentación de residencia de datos y disrupciones de la cadena de suministro de hardware.**',
          ],
          items: [
            '**Incertidumbre regulatoria:** El EU AI Act tiene plazos de cumplimiento que cambian (posible aplazamiento del Ómnibus Digital de agosto de 2026 a diciembre de 2027). La política de IA de EE.UU. varía entre administraciones. Las regulaciones del CAC en China se aplican retroactivamente a los servicios existentes. Planifica para cumplir con el estándar más estricto (EU AI Act) como línea de base global.',
            '**Restricciones de disponibilidad de modelos:** Los modelos de EE.UU. (GPT-5.5, Claude) son inaccesibles en China continental. Los modelos chinos (ERNIE 4.0, Qwen vía Alibaba Cloud) tienen filtros de contenido del CAC integrados. Las organizaciones que operan en ambos mercados necesitan dos pilas de modelos.',
            '**Fragmentación de residencia de datos:** El RGPD de la UE, la PIPL de China y las regulaciones sectoriales de EE.UU. requieren que los datos permanezcan en jurisdicciones específicas. Los despliegues globales necesitan arquitecturas de inferencia regional para enrutar los datos de los usuarios a través del procesamiento local.',
            '**Disrupciones de la cadena de suministro de hardware:** La concentración de TSMC en Taiwán y la cuota de mercado de Nvidia del 80% en GPU crean vulnerabilidades de cadena de suministro. Cualquier escalada geopolítica en el Estrecho de Taiwán afectaría la capacidad de entrenamiento de IA a nivel mundial. Las restricciones de GPU de EE.UU. a China demuestran que el acceso al hardware puede ser revocado políticamente.',
          ],
        },

        defEUAIAct: {
          title: 'Definiciones clave',
          items: [
            '**EU AI Act:** Primera ley de IA legalmente vinculante del mundo, aprobada por el Parlamento Europeo en 2024. Clasifica los sistemas de IA por riesgo y se aplica a cualquier organización que sirva a usuarios de la UE.',
            '**GPAI (Propósito General de IA):** Modelos de IA que pueden realizar una amplia gama de tareas (GPT-5.5, Claude, Gemini). Bajo el EU AI Act, los modelos GPAI deben publicar documentación de transparencia y cumplir con la ley de derechos de autor de la UE.',
            '**Efecto Bruselas:** La tendencia de las regulaciones de la UE a convertirse en estándares globales de facto porque las empresas multinacionales aplican el estándar más estricto en todo el mundo en lugar de mantener pilas de cumplimiento separadas.',
            '**CAC (Administración del Ciberespacio de China):** El regulador chino que supervisa los servicios de IA generativa. Requiere evaluaciones de seguridad previas al lanzamiento y aplica filtros de contenido.',
            '**PIPL (Ley de Protección de Información Personal de China):** Equivalente chino del RGPD. Requiere que los datos personales de los usuarios chinos permanezcan en China o pasen por una evaluación de seguridad gubernamental antes de la transferencia transfronteriza.',
            '**NIST AI RMF:** Marco de Gestión de Riesgos de IA del Instituto Nacional de Estándares y Tecnología de EE.UU. Marco voluntario. La guía de gobernanza de IA más adoptada en EE.UU.',
            '**Efecto Brussels:** Ver Efecto Bruselas.',
            '**CHIPS Act:** Ley de EE.UU. de 2022 ($52 mil millones) para subvencionar la fabricación doméstica de semiconductores y reducir la dependencia de TSMC.',
          ],
        },

        commonMistakes: {
          title: 'Errores comunes',
          mistakes: [
            {
              mistake: 'Asumir que el EU AI Act no aplica porque la empresa no tiene sede en la UE',
              problem: 'El EU AI Act aplica a cualquier IA que llegue a usuarios de la UE — independientemente de la ubicación de la empresa. El Efecto Bruselas hace que los proveedores de EE.UU. y Asia estén sujetos al EU AI Act si sirven a usuarios de la UE.',
              fix: 'Audita todos los despliegues de IA para determinar si sirven a algún usuario de la UE. Si es así, aplica los requisitos del EU AI Act a esos despliegues independientemente de la ubicación de la empresa.',
            },
            {
              mistake: 'Usar modelos de EE.UU. (GPT-5.5, Claude) para usuarios de China continental sin una arquitectura alternativa',
              problem: 'Los modelos de EE.UU. son inaccesibles en China continental sin una VPN, que es ilegal para uso comercial. Los servicios basados en estos modelos fallarán para usuarios de China continental.',
              fix: 'Despliega una arquitectura de dos pilas: modelos de EE.UU. para usuarios internacionales, Qwen 3 o ERNIE 4.0 vía Alibaba Cloud para usuarios de China. Enruta las solicitudes según la detección de ubicación del usuario.',
            },
            {
              mistake: 'Manejar errores de filtros del CAC como errores HTTP estándar',
              problem: 'Los filtros del CAC devuelven HTTP 200 con `is_safe: 0` — no HTTP 4xx. Las aplicaciones que solo comprueban los códigos de estado HTTP omitirán los bloqueos de contenido del CAC y mostrarán respuestas vacías o errores confusos.',
              fix: 'Añade manejo explícito de `is_safe: 0` a todas las llamadas a la API de modelos de China. Muestra un mensaje controlado al usuario cuando se active el filtro del CAC.',
            },
            {
              mistake: 'Tratar el cumplimiento del RGPD como suficiente para los requisitos de IA de la UE',
              problem: 'El EU AI Act añade obligaciones más allá del RGPD para aplicaciones de IA. Para IA de alto riesgo (RRHH, crédito, salud), el EU AI Act requiere evaluaciones de conformidad, documentación de supervisión humana y registro — esto va más allá de las obligaciones existentes del RGPD.',
              fix: 'Trata el RGPD y el EU AI Act como marcos separados que se superponen. Audita las aplicaciones de IA tanto bajo el RGPD (protección de datos, base legal, DPIA) como bajo el EU AI Act (clasificación de riesgo, requisitos específicos del nivel).',
            },
          ],
        },

        globalPowerCompetition: {
          title: 'La IA y la Competencia por el Poder Global',
          content: [
            '**La IA es ahora una dimensión principal de la competencia entre grandes potencias — dando forma a las estructuras de alianzas, la política de exportación de tecnología y las reglas que rigen el comercio internacional de sistemas de IA.** La competencia no es simplemente bilateral (EE.UU. vs. China); involucra un tercer polo en la UE, un terreno medio disputado de naciones no alineadas y una serie de foros multilaterales (G7, G20, ONU, OCDE) que producen marcos de gobernanza en competencia.',
            'Para las organizaciones que operan internacionalmente, la competencia por el poder global en IA crea cuatro riesgos prácticos: cumplimiento de controles de exportación, restricciones de adquisición, requisitos de soberanía de datos y fragmentación regulatoria.',
          ],
          items: [
            '**Gobernanza de IA basada en alianzas:** EE.UU. ha coordinado controles de exportación de IA con países aliados incluyendo Países Bajos (controles de litografía ASML), Japón (restricciones de exportación de chips avanzados) y el Reino Unido (colaboración del AI Safety Institute). Esto crea una "alianza de IA" informal con reglas de acceso tecnológico compartidas.',
            '**Naciones no alineadas:** India, Brasil, EAU y Arabia Saudita están invirtiendo en capacidad de IA doméstica para evitar la dependencia de la infraestructura de IA estadounidense o china. La iniciativa BharatGPT de India y el modelo Falcon de EAU son ejemplos de estrategias deliberadas de soberanía de IA.',
            '**Gobernanza multilateral:** El Proceso AI de Hiroshima del G7 (2023), el informe del Órgano Asesor de IA de la ONU (2024) y los Principios de IA de la OCDE representan pistas de gobernanza internacional paralelas — todas voluntarias, todas compitiendo con el enfoque legalmente vinculante de la UE.',
          ],
        },

        qaWhatIsAIGeopolitics: {
          title: '¿Qué es la Geopolítica de la IA?',
          content: [
            'La geopolítica de la IA es el estudio de cómo la inteligencia artificial afecta las relaciones de poder globales entre estados — incluyendo la competencia económica, las capacidades militares, la influencia regulatoria y el liderazgo tecnológico. Abarca tres competencias simultáneas: qué naciones construyen los modelos más capaces, qué marcos regulatorios rigen el despliegue global de IA, y qué países controlan las cadenas de suministro de semiconductores que hacen posible la IA de frontera. Para las organizaciones, la geopolítica de la IA determina qué herramientas son legalmente permisibles, dónde pueden procesarse los datos y qué proveedores conllevan riesgo de adquisición.',
          ],
        },

        qaWhoIsWinning: {
          title: '¿Quién está ganando la carrera global de la IA?',
          content: [
            'EE.UU. lidera en capacidad de modelos de frontera — GPT-5.5 (OpenAI), Claude (Anthropic) y Gemini (Google DeepMind) — y en inversión privada en IA ($67 mil millones en 2023 según datos de la OCDE). China lidera en presentación de patentes de IA, escala de despliegue dirigido por el estado y desarrollo de modelos domésticos; DeepSeek R1 igualó a GPT-5.5 en benchmarks clave en enero de 2025. La Unión Europea lidera en regulación de IA — el EU AI Act es el marco de referencia global — pero queda atrás en capacidad de modelos de frontera e inversión privada relativa a su tamaño económico. Ningún actor lidera en las tres dimensiones simultáneamente.',
          ],
        },

        qaWhatIsBrusselsEffect: {
          title: '¿Qué es el Efecto Bruselas en la IA?',
          content: [
            'El Efecto Bruselas describe cómo las regulaciones de la UE se convierten en estándares globales de facto porque las empresas multinacionales encuentran más sencillo aplicar un estándar único y estricto en todo el mundo que mantener pilas de cumplimiento separadas por jurisdicción. El EU AI Act se aplica a cualquier sistema de IA colocado en el mercado de la UE o cuya salida llegue a usuarios de la UE — obligando a OpenAI, Google DeepMind y Anthropic a cumplir con las obligaciones de transparencia de la UE para sus productos globales, no solo para versiones específicas de la UE. El mismo mecanismo convirtió al RGPD en un estándar global de privacidad.',
          ],
        },

        qaHowChinaRegulates: {
          title: '¿Cómo regula China la Inteligencia Artificial?',
          content: [
            'China regula la IA a través de la Administración del Ciberespacio de China (CAC). El Reglamento de Recomendaciones de Algoritmos (2022) exige el etiquetado del contenido curado algorítmicamente. Las Medidas de IA Generativa (2023) requieren una evaluación de seguridad del CAC — un proceso de 45–90 días — antes de que cualquier servicio de IA generativa orientado al consumidor pueda lanzarse en China, y exigen que los outputs de IA se alineen con los "valores socialistas fundamentales". Los modelos de IA extranjeros (GPT-5.5, Claude, Gemini) son inaccesibles desde China continental sin herramientas de evasión. Las alternativas domésticas incluyen Alibaba Qwen, Baidu ERNIE 4.0, ByteDance Doubao y DeepSeek.',
          ],
        },

        qaWhatEUAIActRequires: {
          title: '¿Qué exige el EU AI Act a las organizaciones?',
          content: [
            'El EU AI Act clasifica los sistemas de IA en cuatro niveles de riesgo con obligaciones escalonadas. Las prácticas prohibidas — puntuación social por parte de autoridades públicas, vigilancia biométrica en tiempo real en espacios públicos — están prohibidas desde agosto de 2024. Los sistemas de IA de alto riesgo usados en empleo, evaluación crediticia, atención médica o aplicación de la ley requieren evaluaciones de conformidad, documentación de supervisión humana y registro en la base de datos de IA de la UE antes de agosto de 2026. Los modelos de IA de Propósito General (GPT-5.5, Claude, Gemini) deben publicar resúmenes de datos de entrenamiento y cumplir con la ley de derechos de autor de la UE — reglas que se aplican desde agosto de 2025. Todas las organizaciones que atienden a usuarios de la UE deben cumplir independientemente de dónde estén radicadas.',
          ],
        },

        qaExportControls: {
          title: '¿Cómo afectan los controles de exportación de EE.UU. al desarrollo de la IA?',
          content: [
            'Los controles de exportación de EE.UU. restringen la venta de GPU avanzadas de Nvidia — incluyendo la A100 y la H100 — a China, con el objetivo de limitar la capacidad de China para entrenar modelos de IA de frontera. El lanzamiento de DeepSeek R1 en enero de 2025 demostró los límites de este enfoque: entrenado con GPU H800 restringidas para China a una fracción del costo reportado de modelos estadounidenses comparables, igualó a GPT-5.5 en AIME 2024, MATH-500 y benchmarks de HumanEval. Los controles de exportación ralentizan pero no han detenido el desarrollo de IA de frontera en China.',
          ],
        },

        qaTSMCRole: {
          title: '¿Cuál es el papel de TSMC en la Geopolítica de la IA?',
          content: [
            'TSMC (Taiwan Semiconductor Manufacturing Company) fabrica los chips avanzados que impulsan la IA de frontera — las GPU H100 y H200 de Nvidia, las TPU de Google y el Neural Engine de Apple se fabrican en las plantas de TSMC en Taiwán. Ninguna otra empresa fabrica actualmente chips a nodos de proceso comparables (3nm, 2nm) a escala. Esto hace de TSMC un punto único de dependencia en la infraestructura global de IA: los controles de exportación de EE.UU. dependen de que TSMC no suministre nodos avanzados a fabricantes de chips chinos, y cualquier perturbación del estatus político de Taiwán restringiría inmediatamente el suministro global de hardware de IA. La Ley CHIPS y de Ciencia de EE.UU. ($52 mil millones) financia la capacidad de fabricación de chips doméstica específicamente para reducir esta dependencia.',
          ],
        },

        qaUSEUChinaDifferences: {
          title: '¿Cuáles son las principales diferencias entre las estrategias de IA de EE.UU., la UE y China?',
          content: [
            'Las tres principales estrategias de IA difieren fundamentalmente en filosofía, estructura legal y alcance internacional. EE.UU. prioriza la innovación y la competitividad a través del liderazgo del sector privado sin ley federal de IA — los reguladores sectoriales existentes (FTC, FDA, EEOC) aplican sus mandatos existentes a la IA en sus dominios. La UE prioriza la protección de los derechos fundamentales a través de un marco legal horizontal obligatorio — el EU AI Act — que se aplica de forma extraterritorial a cualquier IA que llegue a usuarios de la UE. China prioriza el control estatal y el desarrollo nacional a través de la regulación obligatoria de contenido y evaluaciones de seguridad previas al lanzamiento aplicadas por el CAC. Estos enfoques son estructuralmente incompatibles: las organizaciones que operan en las tres jurisdicciones deben navegar por requisitos en conflicto simultáneamente.',
          ],
        },

        defBrusselsEffect: {
          title: 'Definición: Efecto Bruselas',
          content: 'El fenómeno por el que las regulaciones de la UE se convierten en estándares globales de facto porque las empresas multinacionales prefieren aplicar un estándar estricto en todo el mundo a mantener pilas de cumplimiento separadas por jurisdicción. El RGPD se convirtió en estándar global de privacidad a través del Efecto Bruselas. El EU AI Act está haciendo lo mismo con la IA: OpenAI, Anthropic y Google deben cumplir los requisitos del EU AI Act para sus productos globales, no solo para versiones específicas de la UE.',
        },

        defHighRiskAI: {
          title: 'Definición: Sistema de IA de Alto Riesgo',
          content: 'Según el EU AI Act, un sistema de IA cuyo fallo o mal funcionamiento podría causar daños significativos a los derechos fundamentales. Ejemplos: IA usada en decisiones de contratación, evaluación crediticia, diagnóstico médico, aplicación de la ley, acceso a servicios públicos y evaluación educativa. La IA de alto riesgo requiere evaluaciones de conformidad, documentación de supervisión humana, controles de calidad de datos de entrenamiento y registro en la base de datos de IA de la UE antes del despliegue.',
        },

        defGPAI: {
          title: 'Definición: IA de Propósito General (GPAI)',
          content: 'Un sistema de IA entrenado en datos amplios con una arquitectura general (no especializada ni específica de dominio) que puede adaptarse para una amplia gama de tareas. GPT-5.5, Claude Opus 4.8 y Gemini 3.1 Pro son modelos GPAI. Según el EU AI Act, los modelos GPAI con más de 10²⁵ FLOP de cómputo de entrenamiento tienen obligaciones de transparencia que incluyen resúmenes de datos de entrenamiento, documentación de capacidades y cumplimiento de derechos de autor.',
        },

        defCAC: {
          title: 'Definición: Administración del Ciberespacio de China (CAC)',
          content: 'El principal organismo regulador de China para la gobernanza de internet, el ciberespacio y la IA. Aplica el Reglamento de Recomendaciones de Algoritmos (2022) y las Medidas de IA Generativa (2023). Exige evaluaciones de seguridad antes de que los servicios de IA generativa se lancen en China, impone filtros de contenido que bloquean la crítica al PCC y los temas políticamente sensibles, y puede obligar a los proveedores de IA a divulgar datos.',
        },

        defDataSovereignty: {
          title: 'Definición: Soberanía de Datos',
          content: 'El principio de que los datos están sujetos a las leyes del país donde se encuentran o generan, y de que las organizaciones pueden mantener el control total sobre los datos sin transferirlos a jurisdicciones extranjeras. El RGPD de la UE y el EU AI Act tratan la soberanía de datos como un requisito de cumplimiento: el procesamiento de datos personales debe cumplir con la ley de la UE incluso si el procesamiento ocurre fuera de la UE si los interesados son residentes de la UE.',
        },

        defAlgorithmRecs: {
          title: 'Definición: Reglamento de Recomendaciones de Algoritmos (China)',
          content: 'El reglamento chino de 2022 que exige que las plataformas que usan algoritmos para recomendar contenido etiqueten y divulguen públicamente la curación algorítmica. Se aplica a redes sociales, feeds de noticias, recomendación de vídeo y motores de búsqueda. Requiere que se ofrezca a los usuarios la opción de desactivar las recomendaciones algorítmicas. Aplicado por el CAC para aumentar la transparencia y la supervisión gubernamental de la distribución de contenido algorítmico.',
        },

        defSCCs: {
          title: 'Definición: Cláusulas Contractuales Estándar (SCC)',
          content: 'Plantillas de contratos preaprobadas emitidas por la Comisión Europea que permiten a las organizaciones transferir datos personales desde la UE a jurisdicciones no adecuadas (como EE.UU. o China) al tiempo que se alega cumplimiento del RGPD. Las SCC imponen obligaciones contractuales al importador de datos de proteger los datos según los estándares de la UE. Su eficacia es cuestionada: los tribunales de la UE han preguntado si las SCC protegen contra la vigilancia gubernamental en EE.UU. y otros países.',
        },

        politicianQuotes: {
          title: 'Lo que dicen los políticos',
          content: [
            '**La IA se ha convertido en un tema político de primer orden en los tres bloques reguladores, con líderes que lo enmarcan como una cuestión de supervivencia económica, valores democráticos y seguridad nacional.** Las declaraciones a continuación proceden de discursos oficiales y registros parlamentarios.',
          ],
        },

        quoteVonDerLeyen: {
          title: '',
          blockquote: 'La inteligencia artificial es la tecnología definitoria de nuestro tiempo. Europa debe darle forma — no solo adoptarla. Queremos una IA que trabaje para las personas, no al revés.',
          blockquoteSource: 'Ursula von der Leyen, Presidenta de la Comisión Europea — Discurso sobre estrategia de IA europea, 2024',
        },

        quoteVestager: {
          title: '',
          blockquote: 'El EU AI Act es el primer marco legal integral del mundo para la inteligencia artificial. Pone a las personas y su seguridad en el centro — no solo la tecnología. Así es como se ve la innovación responsable.',
          blockquoteSource: 'Margrethe Vestager, ex Vicepresidenta Ejecutiva de la Comisión Europea — Parlamento Europeo, marzo de 2024',
        },

        quoteBreton: {
          title: '',
          blockquote: 'El EU AI Act es un logro histórico. Europa es el primer continente en establecer un marco legal claro para la IA. La seguridad y la innovación no son opuestos — van juntas. Lo hemos demostrado al mundo.',
          blockquoteSource: 'Thierry Breton, ex Comisario Europeo de Mercado Interior — Comisión Europea, marzo de 2024',
        },

        quoteMacron: {
          title: '',
          blockquote: 'Francia quiere ser una nación líder en IA en Europa. París acogerá la Cumbre de Acción sobre IA. Estamos invirtiendo en una IA abierta, fiable y sostenible — e invitamos al mundo a unirse a nosotros.',
          blockquoteSource: 'Emmanuel Macron, Presidente de Francia — Anuncio de la Cumbre de Acción sobre IA, 2024',
        },

        quoteSunak: {
          title: '',
          blockquote: 'El Reino Unido trabajará con socios de todo el mundo para garantizar que la IA sea segura. Bletchley Park es donde comienza esta conversación — pero no debe terminar aquí.',
          blockquoteSource: '[Rishi Sunak, ex Primer Ministro del Reino Unido — Cumbre de Seguridad de IA, Bletchley Park, noviembre de 2023](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
        },

        quoteScholz: {
          title: '',
          blockquote: 'Alemania quiere convertirse en uno de los principales centros de IA de Europa. Estamos invirtiendo en investigación de IA, infraestructura digital y en las personas que construirán la próxima generación de sistemas inteligentes.',
          blockquoteSource: 'Olaf Scholz, ex Canciller Federal de Alemania — Actualización de la Estrategia Nacional de IA, 2024',
        },

        faq: {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué es el EU AI Act?', a: 'El EU AI Act es el primer marco legal integral del mundo para la inteligencia artificial, aprobado por el Parlamento Europeo en marzo de 2024 con 523 votos a favor. Clasifica los sistemas de IA en cuatro niveles de riesgo y se aplica a agosto de 2026.' },
            { q: '¿Se aplica el EU AI Act a empresas fuera de la UE?', a: 'Sí. Se aplica a cualquier organización que coloque sistemas de IA en el mercado de la UE o cuyos resultados de IA se utilicen en la UE. Esto se llama el Efecto Bruselas.' },
            { q: '¿Cuáles son las multas por violar el EU AI Act?', a: 'Hasta €35 millones o el 7% de la facturación global por prácticas prohibidas. Hasta €15 millones o el 3% por infracciones de alto riesgo.' },
            { q: '¿Cómo afecta la política de IA de EE.UU. a las organizaciones globales?', a: 'EE.UU. usa un enfoque sectorial sin ley federal de IA. Los controles de exportación de hardware (GPU) son el principal instrumento de política con efectos globales — limitando el acceso de China a las GPU de Nvidia. La administración Trump revocó la EO de seguridad de IA de Biden en enero de 2025.' },
            { q: '¿Pueden las organizaciones de la UE usar DeepSeek para aplicaciones comerciales?', a: 'Con precaución. DeepSeek está sujeto a la ley china, que permite el acceso de las autoridades estatales a los datos. Alemania (BSI), Francia (ANSSI) y los Países Bajos (NCSC) han emitido avisos que restringen las herramientas de IA chinas para el gobierno e infraestructuras críticas. Las organizaciones del sector privado deben realizar una evaluación de impacto de transferencia bajo el Artículo 46 del RGPD.' },
            { q: '¿Cuál es el estatus del Ómnibus Digital y el plazo de cumplimiento del EU AI Act?', a: 'A mayo de 2026, el segundo trílogo (28 de abril de 2026) terminó sin consenso. Planifica para el 2 de agosto de 2026 como tu plazo de cumplimiento vinculante para IA de alto riesgo. No asumas que el aplazamiento del Ómnibus Digital se aprobará.' },
            { q: '¿Qué marcos de gobernanza de IA aplican en América Latina?', a: 'América Latina no tiene equivalente al EU AI Act. Colombia lidera con el Conpes 3975 (2019), una política de IA nacional con directrices voluntarias de gobernanza. Brasil avanza en legislación específica de IA. La mayoría de los marcos latinoamericanos se alinean con los principios de IA de la OCDE y son voluntarios.' },
          ],
        },

        sources: {
          title: 'Fuentes',
          items: [
            '[Texto completo del EU AI Act (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — Texto oficial del EU AI Act tal como fue aprobado',
            '[NIST AI Risk Management Framework (NIST)](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf) — Marco de Gestión de Riesgos de IA del NIST, la guía de gobernanza de IA más adoptada en EE.UU.',
            '[Medidas de IA Generativa del CAC — Texto (inglés, DigiChina)](https://digichina.stanford.edu/work/translation-measures-for-the-management-of-generative-artificial-intelligence-services-2023) — Reglamentos de IA generativa de China (2023), incluyendo requisitos del CAC',
            '[Stanford HAI AI Index 2024](https://aiindex.stanford.edu/report/) — Inversión global en IA, datos de investigadores y benchmarks comparativos utilizados en este artículo',
            '[CHIPS and Science Act — Texto completo (Congress.gov)](https://www.congress.gov/bill/117th-congress/house-bill/4346) — Legislación de EE.UU. de $52 mil millones para fabricación doméstica de semiconductores',
            '[Código de Conducta del Proceso AI de Hiroshima — G7 (octubre de 2023)](https://www.meti.go.jp/press/2023/10/20231030002/20231030002-1.pdf) — 11 principios voluntarios para desarrolladores avanzados de IA adoptados por las naciones del G7',
            '[Open-Source vs Proprietary LLMs](/prompt-engineering/open-source-vs-proprietary-llms) — Cómo el cumplimiento del EU AI Act y los requisitos de soberanía de datos influyen en la decisión de pesos abiertos vs. API',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — Comprensión de los límites de capacidad relevantes para las evaluaciones de sistemas de IA de alto riesgo bajo el EU AI Act',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Vulnerabilidades de seguridad que las estrategias nacionales de IA y el EU AI Act abordan en los requisitos de sistemas de alto riesgo',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Problemas de fiabilidad centrales para la documentación de alto riesgo del EU AI Act y los requisitos de supervisión humana',
            '[RAG Explained](/prompt-engineering/rag-explained) — Cómo la generación aumentada por recuperación aborda las preocupaciones de corte de conocimiento y alucinación relevantes para despliegues de IA regulados',
          ],
        },

        relatedReading: {
          title: 'Lectura relacionada',
          items: [
            '[LLMs de código abierto vs. propietarios](/es/prompt-engineering/open-source-vs-proprietary-llms) — Cómo el cumplimiento del EU AI Act y los requisitos de soberanía de datos influyen en la decisión de pesos abiertos vs. API',
            '[Limitaciones de la IA: Lo que los LLMs no pueden hacer](/es/prompt-engineering/ai-limitations-what-llms-cant-do) — Comprensión de los límites de capacidad relevantes para las evaluaciones de sistemas de IA de alto riesgo bajo el EU AI Act',
            '[Inyección de prompts y seguridad](/es/prompt-engineering/prompt-injection-and-security) — Vulnerabilidades de seguridad que las estrategias nacionales de IA y el EU AI Act abordan en los requisitos de sistemas de alto riesgo',
            '[Alucinaciones de IA: Por qué la IA inventa cosas](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Problemas de fiabilidad centrales para la documentación de alto riesgo del EU AI Act y los requisitos de supervisión humana',
            '[RAG explicado](/es/prompt-engineering/rag-explained) — Cómo la generación aumentada por recuperación aborda los cortes de conocimiento en despliegues de IA regulados',
            '[RGPD e IA: Obligaciones de cumplimiento](/es/prompt-engineering/gdpr-and-ai-compliance) — Cómo la ley de protección de datos de la UE se combina con el EU AI Act para crear requisitos de cumplimiento multicapa',
          ],
        },
      },
    },
    ar: {
      theme: 'Policy & Compliance',
      title: 'الجيوسياسة والذكاء الاصطناعي: كيف تتنافس الولايات المتحدة والاتحاد الأوروبي والصين على الهيمنة (تحليل 2026)',
      intro: 'تسعى الولايات المتحدة والصين والاتحاد الأوروبي نحو رؤى متعارضة لحوكمة الذكاء الاصطناعي — تُعطي الولايات المتحدة الأولوية للتنافسية، وتُركّز الصين على السيطرة الحكومية، بينما يبني الاتحاد الأوروبي إطاراً قانونياً قائماً على الحقوق. بالنسبة للمؤسسات التي تنشر الذكاء الاصطناعي، تتحول هذه الاختلافات إلى التزامات امتثال ملموسة وقيود على المشتريات ومتطلبات إقامة البيانات، تسري بصرف النظر عن موقع المؤسسة.',
      metaDescription: 'قانون الذكاء الاصطناعي الأوروبي وضوابط التصدير الأمريكية وCAC الصيني: ثلاثة أطر متعارضة. كيف تؤثر على شراء الذكاء الاصطناعي وإقامة البيانات في 2026.',
      seoTitle: 'جيوسياسة الذكاء الاصطناعي 2026: تحليل الولايات المتحدة والاتحاد الأوروبي والصين',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '١٦ دقيقة للقراءة',
      educationalLevel: 'متوسط',
      primaryTerm: 'AI Geopolitics',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/ar/prompt-engineering/geopolitics-and-ai',
        headline: 'الجيوسياسة والذكاء الاصطناعي: كيف تتنافس الولايات المتحدة والاتحاد الأوروبي والصين على الهيمنة (تحليل 2026)',
        description: 'تسعى الولايات المتحدة والصين والاتحاد الأوروبي نحو رؤى متعارضة لحوكمة الذكاء الاصطناعي. بالنسبة للمؤسسات التي تنشر الذكاء الاصطناعي، تتحول هذه الاختلافات إلى التزامات امتثال ملموسة وقيود على المشتريات ومتطلبات إقامة البيانات.',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        inLanguage: 'ar',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/ar/api/og/geopolitics-and-ai', width: 1200, height: 630 },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'ما هو قانون الذكاء الاصطناعي الأوروبي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'قانون الذكاء الاصطناعي الأوروبي هو أول إطار قانوني شامل في العالم للذكاء الاصطناعي، أقرّه البرلمان الأوروبي في مارس 2024 بـ523 صوتاً مؤيداً. يُصنّف أنظمة الذكاء الاصطناعي في أربعة مستويات من المخاطر — غير مقبول، وعالي، ومحدود، وأدنى — ويُطبّق متطلبات وغرامات مختلفة على كل مستوى. يبدأ التطبيق الكامل في أغسطس 2026.' } },
          { '@type': 'Question', 'name': 'هل يسري قانون الذكاء الاصطناعي الأوروبي على الشركات خارج الاتحاد الأوروبي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. يسري القانون على أي مؤسسة تطرح أنظمة ذكاء اصطناعي في السوق الأوروبية أو تُستخدم مخرجاتها داخل الاتحاد الأوروبي، بصرف النظر عن موقع المؤسسة. يُسمى هذا النطاق خارج الإقليم "تأثير بروكسل"، وهو يعني أن موردي الذكاء الاصطناعي الأمريكيين والآسيويين ملزمون بالامتثال إذا كانوا يخدمون مستخدمين في الاتحاد الأوروبي.' } },
          { '@type': 'Question', 'name': 'ما هي الغرامات المترتبة على انتهاك قانون الذكاء الاصطناعي الأوروبي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'تبلغ الغرامات حتى 35 مليون يورو أو 7% من حجم الأعمال السنوي العالمي على الممارسات المحظورة (أيهما أكبر). تصل غرامات الذكاء الاصطناعي عالي المخاطر إلى 15 مليون يورو أو 3% من حجم الأعمال العالمي. تبلغ غرامة تقديم معلومات غير صحيحة للسلطات حتى 7.5 مليون يورو أو 1% من حجم الأعمال العالمي.' } },
          { '@type': 'Question', 'name': 'ما تطبيقات الذكاء الاصطناعي التي يحظرها الاتحاد الأوروبي بشكل مطلق؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'يحظر قانون الذكاء الاصطناعي الأوروبي: أنظمة التسجيل الاجتماعي من قِبل السلطات العامة، والمراقبة البيومترية في الوقت الفعلي في الأماكن العامة (مع استثناءات محدودة لجهات إنفاذ القانون)، والذكاء الاصطناعي الذي يستغل الثغرات المعرفية، وجمع صور الوجوه بشكل جماعي من الإنترنت لبناء قواعد بيانات التعرف. هذه مُصنَّفة ضمن المخاطر غير المقبولة.' } },
          { '@type': 'Question', 'name': 'كيف تختلف تنظيمات الذكاء الاصطناعي في الولايات المتحدة عن نهج الاتحاد الأوروبي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'تعتمد الولايات المتحدة نهجاً قطاعياً طوعياً: يطبق المنظمون القائمون (FTC وFDA وCFPB وEEOC) صلاحياتهم على الذكاء الاصطناعي في نطاقاتهم. لا يوجد قانون فيدرالي للذكاء الاصطناعي مماثل لقانون الاتحاد الأوروبي. ألغى المرسوم التنفيذي لإدارة ترامب بشأن سلامة الذكاء الاصطناعي الصادر في يناير 2025 مرسوم بايدن السابق، واستُعيض عنه بخطة عمل مُركّزة على التنافسية.' } },
          { '@type': 'Question', 'name': 'هل الذكاء الاصطناعي الصيني بمستوى الأنظمة الأمريكية؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1، الذي أُطلق في يناير 2025، تفوّق على GPT-5.5 في معايير الاستدلال والبرمجة (AIME 2024: 79.8% مقابل 74.4% لـGPT-5.5، وMATH-500: 97.3%، وHumanEval) بتكلفة تدريب مُقدَّرة بـ6 ملايين دولار — تخفيض بنسبة 94% مقارنة بتكاليف تدريب النماذج الحدودية. النماذج الصينية الرائدة تنافسية في كثير من المهام لكنها تتأخر في الاستدلال متعدد اللغات ومعايير السلامة.' } },
          { '@type': 'Question', 'name': 'هل يمكن لمؤسسات الاتحاد الأوروبي استخدام GPT-5.5 وClaude في ظل قانون الذكاء الاصطناعي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم، في معظم حالات الاستخدام. يُصنَّف GPT-5.5 وClaude Opus 4.8 كنماذج ذكاء اصطناعي للأغراض العامة (GPAI) وعليهما التزامات الشفافية — تشمل نشر ملخصات بيانات التدريب والامتثال لقانون حقوق الملكية الفكرية في الاتحاد الأوروبي — المُطبَّقة منذ أغسطس 2025. نشرت OpenAI وAnthropic وثائق امتثال GPAI لمستخدمي الاتحاد الأوروبي.' } },
          { '@type': 'Question', 'name': 'كيف أثّر DeepSeek على السباق الجيوسياسي للذكاء الاصطناعي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'أثبت إطلاق DeepSeek R1 في يناير 2025 أن قدرات الذكاء الاصطناعي الحدودي قابلة للتحقيق بتكاليف حوسبة أقل بكثير مما كان مفترضاً. هذا يُضعف الحجة القائلة بأن ضوابط التصدير على وحدات معالجة الرسوميات Nvidia ستُقيّد تطوير الذكاء الاصطناعي في الصين بشكل دائم، وأسرع النقاشات السياسية في الولايات المتحدة والاتحاد الأوروبي حول ما إذا كانت استراتيجيات الاحتواء القائمة على الحوسبة كافية.' } },
          { '@type': 'Question', 'name': 'ما هو تأثير بروكسل في مجال الذكاء الاصطناعي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'يصف تأثير بروكسل كيف تصبح لوائح الاتحاد الأوروبي معايير عالمية فعلية لأن الشركات متعددة الجنسيات تجد أنه من الأسهل تطبيق المعيار الأكثر صرامة على مستوى العالم بدلاً من الحفاظ على هياكل امتثال منفصلة لكل ولاية قضائية. في مجال الذكاء الاصطناعي، يعني هذا أن قانون الذكاء الاصطناعي الأوروبي يرفع فعلياً المعايير لنماذج GPT-5.5 وClaude وGemini عالمياً — بصرف النظر عن موقع المستخدمين.' } },
          { '@type': 'Question', 'name': 'هل يمكن للمؤسسات الأوروبية استخدام DeepSeek في التطبيقات التجارية؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'من الناحية التقنية نعم، مع البنود التعاقدية القياسية (SCC) المتوافقة مع اللائحة الأوروبية لحماية البيانات GDPR. من الناحية العملية، يصعب إنفاذ البنود التعاقدية القياسية في مواجهة التزامات القانون الصيني التي تُلزم بالامتثال لمتطلبات وصول CAC للبيانات. أصدرت ألمانيا (BSI) وفرنسا (ANSSI) وهولندا (NCSC) تحذيرات تُقيّد أدوات الذكاء الاصطناعي الصينية لصالح الحكومة والبنية التحتية الحيوية. يجب على مؤسسات القطاع الخاص إجراء تقييم أثر نقل البيانات بموجب المادة 46 من GDPR قبل معالجة بيانات شخصية عبر DeepSeek.' } },
          { '@type': 'Question', 'name': 'ما أطر حوكمة الذكاء الاصطناعي في أمريكا اللاتينية؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'لا يوجد في أمريكا اللاتينية ما يعادل قانون الذكاء الاصطناعي الأوروبي. تتصدّر كولومبيا المشهد بـConpes 3975 (2019)، وهي سياسة وطنية للذكاء الاصطناعي مع إرشادات طوعية للحوكمة المسؤولة. تُحرز البرازيل تقدماً في تشريع خاص بالذكاء الاصطناعي. نشرت كل من تشيلي والمكسيك والأرجنتين استراتيجيات وطنية للذكاء الاصطناعي. تتوافق معظم الأطر اللاتينية مع مبادئ الذكاء الاصطناعي للمنظمة الاقتصادية للتعاون والتنمية وهي طوعية بدون عقوبات ملزمة مماثلة لقانون الاتحاد الأوروبي.' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'يتناول عرض الشرائح: متطلبات إقامة البيانات حسب المنطقة (GDPR الأوروبي، PIPL الصيني، DPDP الهندي)، واختيار النماذج وفق السياق الجيوسياسي، والمشهد التنظيمي للذكاء الاصطناعي في الولايات القضائية الرئيسية، وقائمة مراجعة الامتثال. نزّل ملف PDF كبطاقة مرجعية لنشر الذكاء الاصطناعي الجيوسياسي.',
      sections: {
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'الذكاء الاصطناعي تقنية وطنية استراتيجية — تتنافس الولايات المتحدة والصين والاتحاد الأوروبي على الهيمنة.',
            'تتنافس الدول على ثلاثة موارد: الحوسبة (الرقائق)، والكفاءات في مجال الذكاء الاصطناعي، وبيانات التدريب.',
            'يؤثر الذكاء الاصطناعي في آنٍ واحد على القدرة العسكرية والتنافسية الاقتصادية والقوة الإلكترونية.',
            'قانون الذكاء الاصطناعي الأوروبي هو أول قانون ملزم للذكاء الاصطناعي في العالم — تصل الغرامات إلى 35 مليون يورو أو 7% من حجم الأعمال العالمي.',
            'تأثير بروكسل: تسري قواعد قانون الذكاء الاصطناعي الأوروبي على أي نظام ذكاء اصطناعي يصل إلى مستخدمي الاتحاد الأوروبي في أي مكان بالعالم.',
            'لا يوجد قانون فيدرالي أمريكي للذكاء الاصطناعي — تطبّق المنظمات القطاعية صلاحياتها القائمة على الذكاء الاصطناعي في نطاقاتها.',
            'ألغت الولايات المتحدة مرسومها التنفيذي بشأن سلامة الذكاء الاصطناعي في يناير 2025 — التنافسية تتصدر الآن على حساب السلامة.',
            'تفوّق DeepSeek R1 الصيني على GPT-5.5 في معايير رئيسية (AIME وMATH وHumanEval) بتكلفة تدريب 6 ملايين دولار — تخفيض بنسبة 94% — مما يُثبت أن ضوابط تصدير وحدات معالجة الرسوميات لها حدود.',
            'تُصنّع TSMC في تايوان الرقائق التي تُشغّل كل الذكاء الاصطناعي الحدودي — اعتماد جيوسياسي على مصدر واحد.',
            'يجب على المؤسسات الامتثال في آنٍ واحد لثلاثة أطر تنظيمية متعارضة: الاتحاد الأوروبي والولايات المتحدة والصين.',
          ],
        },

        quickFacts: {
          title: 'حقائق سريعة: جيوسياسة الذكاء الاصطناعي في لمحة',
          items: [
            '**قانون الذكاء الاصطناعي الأوروبي:** أول قانون ملزم للذكاء الاصطناعي في العالم. تطبيق الاستخدامات عالية المخاطر: 2 أغسطس 2026 (قد يُؤجَّل حتى 2 ديسمبر 2027 بموجب الحزمة الرقمية الشاملة، تنتظر اتفاق مفاوضات ثلاثية مُجدَّل في 13 مايو 2026). الغرامات: تصل إلى 35 مليون يورو أو 7% من الإيرادات السنوية العالمية.',
            '**سياسة الذكاء الاصطناعي الأمريكية:** لا يوجد قانون فيدرالي للذكاء الاصطناعي. تسعى إدارة ترامب إلى إلغاء القوانين الولائية عبر المرسوم 14365 (ديسمبر 2025) والإطار الوطني (مارس 2026) ومشروع قانون TRUMP AMERICA AI Act (مارس 2026). مواعيد تنفيذ متعددة فُوِّتت حتى مايو 2026.',
            '**حوكمة الذكاء الاصطناعي في الصين:** تقييم إلزامي قبل الإطلاق من قِبل CAC (إدارة الفضاء الإلكتروني الصيني). تحجب فلاتر المحتوى انتقاد الحزب الشيوعي الصيني والنقاشات حول تايوان/التبت/شينجيانغ والمحتوى الذي يُقوّض "القيم الاشتراكية الجوهرية". تُعيد الفلاتر HTTP 200 مع علامة `is_safe: 0` (لا أخطاء 4xx). يشترط PIPL إقامة البيانات للبيانات الشخصية الصينية.',
            '**اختناقات الأجهزة:** تسيطر Nvidia على ~80% من سوق وحدات معالجة الرسوميات لتدريب الذكاء الاصطناعي. تُصنّع TSMC ~90% من أشباه الموصلات المتقدمة. كلاهما نقطة احتكاك جيوسياسي. تستهدف قانون CHIPS الأمريكي (52 مليار دولار) تقليل الاعتماد على TSMC.',
            '**تأثير DeepSeek R1:** تفوّق على GPT-5.5 في الاستدلال/البرمجة (AIME 2024 وMATH وHumanEval) بتكلفة تدريب مُقدَّرة بـ6 ملايين دولار (تخفيض 94% مقارنة بتقديرات النماذج الحدودية). دُرِّب على وحدات معالجة رسوميات Nvidia H800 المقيّدة للصين. يُثبت أن ضوابط تصدير الأجهزة لها حدود.',
            '**التعارض التنظيمي العالمي:** يُركّز الاتحاد الأوروبي على الحقوق والسلامة؛ تُركّز الولايات المتحدة على الابتكار والتنافسية؛ تُركّز الصين على السيطرة الحكومية والميزة الاستراتيجية. يجب على المؤسسات التي تنشر الذكاء الاصطناعي عالمياً التعامل مع ثلاثة أطر متعارضة في آنٍ واحد.',
          ],
        },

        euImplications: {
          title: 'إذا كانت مؤسستك مقرّها في الاتحاد الأوروبي: مواعيد الامتثال الحرجة',
          content: [
            '**قانون الذكاء الاصطناعي الأوروبي ملزم ويُطبَّق اعتباراً من أغسطس 2026.** إذا كانت مؤسستك مقرّها في الاتحاد الأوروبي أو تخدم مستخدميه، فعليك الامتثال لنظام تصنيف المخاطر الرباعي. تبلغ الغرامات على الممارسات المحظورة 35 مليون يورو أو 7% من حجم الأعمال العالمي — أيهما أكبر. الامتثال غير قابل للتفاوض.',
            '**إذا كنت تنشر GPT-5.5 أو Claude Opus 4.8 أو Gemini 3.1 Pro في الاتحاد الأوروبي، فعليك مراجعة وثائق امتثال الذكاء الاصطناعي للأغراض العامة (GPAI).** نشرت OpenAI وAnthropic وGoogle وثائق الشفافية (ملخصات بيانات التدريب وقيود القدرات واختبارات السلامة) اعتباراً من أغسطس 2025. احتفظ بهذه الشهادات كدليل على الامتثال — ستطلبها الجهات التنظيمية.',
            '**تستلزم أنظمة الذكاء الاصطناعي عالية المخاطر (التوظيف وقرارات الائتمان والرعاية الصحية وإنفاذ القانون) إجراء تقييمات مطابقة قبل النشر.** هذا يعني اختبار التحيز وتوثيق آليات الإشراف البشري وسجلات تدقيق جميع قرارات الذكاء الاصطناعي. تُلبّي نماذج الأوزان المفتوحة المنشورة محلياً (LLaMA عبر Ollama وMistral Large) متطلبات إقامة البيانات — لا تغادر أي بيانات بنيتك التحتية وأنت تتحكم في سجل التدقيق.',
            '**تأثير بروكسل يسري عليك.** إذا وصل نظام الذكاء الاصطناعي الخاص بك إلى مقيم واحد في الاتحاد الأوروبي، يسري قانون الذكاء الاصطناعي الأوروبي — حتى لو كانت شركتك مقرّها في الولايات المتحدة أو الصين. هذا يعني أن تطبيق نفس مستوى الامتثال عالمياً يكون عادةً أبسط من الحفاظ على إعدادات متعددة.',
          ],
        },

        promptEngineerTakeaways: {
          title: 'نقاط رئيسية لمهندسي الأوامر',
          isTldr: true,
          items: [
            'تُرشّح واجهات برمجة تطبيقات الذكاء الاصطناعي الصينية (DeepSeek وERNIE 4.0 وQwen عبر Alibaba Cloud) المحتوى على مستوى API — تُعيد الموضوعات السياسية ونقد الحزب الشيوعي ومواضيع تايوان/التبت/شينجيانغ قيمة `is_safe: 0` في استجابات HTTP 200، لا HTTP 4xx. تعامل معها صراحةً في كود تطبيقك.',
            'تُلبّي نماذج Mistral والنشر المحلي عبر Ollama متطلبات إقامة البيانات لقانون الذكاء الاصطناعي الأوروبي — الأوامر والمخرجات لا تغادر بنيتك التحتية أبداً. هذا هو المسار الأقل احتكاكاً نحو الامتثال المشترك لـGDPR وقانون الذكاء الاصطناعي الأوروبي لمهندسي الأوامر.',
            'يتوافق GPT-5.5 وClaude Opus 4.8 مع معايير GPAI بموجب قانون الذكاء الاصطناعي الأوروبي اعتباراً من أغسطس 2025. يمكنك استخدامهما في نشر موجّه لمستخدمي الاتحاد الأوروبي دون عمل امتثال إضافي على مستوى النموذج — التزامك على مستوى التطبيق (النشر)، لا على مستوى النموذج.',
            'يعني تأثير بروكسل أن الأوامر المُرسَلة إلى نماذج مستضافة في الولايات المتحدة لمنتجات يستخدمها مقيمو الاتحاد الأوروبي تخضع لمتطلبات قانون الذكاء الاصطناعي الأوروبي — حتى لو لم تكن شركتك مقرّها في الاتحاد الأوروبي.',
            'لاختبار متعدد الولايات القضائية، أرسل نفس الأمر إلى Mistral (المتوافق مع الاتحاد الأوروبي) وGPT-5.5 (الولايات المتحدة/GPAI) وQwen (متاح في الصين) في آنٍ واحد لمقارنة المخرجات في سياقات تنظيمية مختلفة. تدعم PromptQuorum هذا بشكل أصلي.',
          ],
        },

        promptOptimizationByRegion: {
          title: 'كيف تُغيّر الجيوسياسة تحسين الأوامر: دولة بدولة',
          content: [
            '**المكان الذي تُستهلَك فيه مخرجات الذكاء الاصطناعي يحدد ما يجب أن تفعله أوامرك — وما يجب عليها تجنّبه.** تؤثر اللغة مباشرةً في أداء النموذج: أمر مكتوب بالإنجليزية ومُرسَل إلى نموذج صيني (ERNIE 4.0 وQwen) يؤدي أداءً أضعف من نفس الأمر مكتوباً بالصينية المندرين. يؤثر القانون هيكلياً في تصميم الأوامر: تفرض متطلبات الإفصاح في قانون الذكاء الاصطناعي الأوروبي واللوائح القطاعية الأمريكية وفلاتر محتوى CAC الصينية قيوداً مختلفة على كيفية صياغة الأوامر، وما يمكن توليده من مخرجات، وكيف يجب أن تتعامل التطبيقات مع الردود.',
          ],
          callouts: [
            {
              type: 'pro-tip',
              label: 'نصيحة مهنية: اكتب الأوامر باللغة الهدف',
              text: 'يؤدي GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro أداءً أفضل بكثير في المهام بالألمانية والفرنسية واليابانية والصينية عندما يكون الأمر نفسه بتلك اللغة. الأوامر الإنجليزية للمخرجات بلغة أخرى تُضيف طبقة ترجمة تُفسد الجودة. إذا كنت تُحسّن أداء النموذج لدولة بعينها، اكتب أوامرك بلغة تلك الدولة من البداية.',
            },
          ],
          tableFormat: true,
          columns: ['المنطقة', 'القيود القانونية على الأوامر', 'تحسين اللغة', 'النموذج الموصى به'],
          rows: [
            {
              'المنطقة': 'الاتحاد الأوروبي',
              'القيود القانونية على الأوامر': 'قانون الذكاء الاصطناعي الأوروبي: يجب أن تتضمن الأوامر التي تُولّد محتوى يتفاعل مع مستهلكي الاتحاد الأوروبي إفصاحاً بوجود ذكاء اصطناعي. GDPR: يجب ألا تتضمن الأوامر بيانات شخصية دون أساس قانوني. تستلزم تطبيقات الذكاء الاصطناعي عالية المخاطر (الموارد البشرية والائتمان والصحة) إشراف بشرياً — يجب ألا تُؤتمت الأوامر القرارات النهائية.',
              'تحسين اللغة': 'اكتب الأوامر باللغة الهدف (الألمانية والفرنسية وغيرها) — يؤدي GPT-5.5 وClaude Opus 4.8 أداءً أفضل بكثير في المهام غير الإنجليزية عندما تكون الأوامر بنفس لغة المخرجات المطلوبة. حدّد لغة المخرجات صراحةً في أوامر النظام.',
              'النموذج الموصى به': 'Mistral Large (فرنسي، مقرّه في الاتحاد الأوروبي)، أو نشر Ollama محلياً (البيانات لا تغادر البنية التحتية)، أو GPT-5.5/Claude مع نقاط نهاية API في منطقة الاتحاد الأوروبي وبنود تعاقدية قياسية.',
            },
            {
              'المنطقة': 'الولايات المتحدة',
              'القيود القانونية على الأوامر': 'لا يوجد قانون فيدرالي للذكاء الاصطناعي، لكن تسري قواعد قطاعية: HIPAA (الصحة — يُحظر وجود PHI في الأوامر)، CCPA/CPRA (كاليفورنيا — البيانات الشخصية في الأوامر تُفعّل حقوق المستهلك)، قانون FTC (يجب ألا تُولّد الأوامر محتوى مضلّلاً في السياقات الاستهلاكية). تُقيّد القوانين البيومترية الولائية (BIPA بإيلينوي) الأوامر التي تعالج بيانات الوجه/الصوت.',
              'تحسين اللغة': 'نماذج الحدود الأمريكية (GPT-5.5 وClaude Opus 4.8) مُحسَّنة للإنجليزية وتؤدي أفضل أداء مع الأوامر الإنجليزية. للأسواق الناطقة بالعربية أو الإسبانية، وجّه النموذج صراحةً بالعربية أو الإسبانية أو استخدم أمر نظام ثنائي اللغة — لا تعتمد على الكشف التلقائي.',
              'النموذج الموصى به': 'GPT-5.5 أو Claude Opus 4.8 للاستخدام العام. للأوامر المنظّمة في مجال الصحة أو المال، استخدم API مع بنود تعاقدية قياسية وتجنب إرسال PHI/PII في سياق الأمر.',
            },
            {
              'المنطقة': 'الصين',
              'القيود القانونية على الأوامر': 'تدابير الذكاء الاصطناعي التوليدي لـCAC (2023): الأوامر التي تطلب محتوى عن قيادة الحزب الشيوعي الصيني أو استقلال تايوان/التبت/شينجيانغ أو أحداث تيانانمن 1989 أو ما يُقوّض "القيم الاشتراكية الجوهرية" ستُحجب. تُعاد بصيغة HTTP 200 مع `is_safe: 0`. PIPL: يُحظر توجيه الأوامر المحتوية على بيانات شخصية لمستخدمين صينيين إلى خوادم خارج الصين.',
              'تحسين اللغة': 'اكتب الأوامر بالصينية المبسّطة (المندرين) للمهام الصينية — تسجّل Qwen 3 وERNIE 4.0 نتائج أعلى بنسبة 10-20% في معايير اللغة الصينية (C-Eval) مقارنة بنفس الأمر بالإنجليزية. استخدم Pinyin أو الإنجليزية للمصطلحات التقنية عند غياب مقابل صيني.',
              'النموذج الموصى به': 'Qwen 3 72B (مُستضاف ذاتياً خارج الصين، بلا فلاتر CAC) للمهام العابرة للحدود. ERNIE 4.0 عبر Qianfan API (مسجّل في CAC) لنشر موجّه للمستهلك داخل الصين. DeepSeek R1 لمهام الاستدلال التي لا تمسّ مجالات المحتوى المحجوب.',
            },
            {
              'المنطقة': 'المملكة المتحدة / ما بعد Brexit',
              'القيود القانونية على الأوامر': 'يسري UK GDPR (مماثل لـGDPR الأوروبي) على البيانات الشخصية. يركّز معهد سلامة الذكاء الاصطناعي البريطاني على تقييم النماذج الحدودية لا الامتثال على مستوى التطبيق. لا يوجد قانون إلزامي للإفصاح عن الذكاء الاصطناعي — اختارت المملكة المتحدة نهجاً مُيسِّراً للابتكار يقوده القطاع. تنظّم OFCOM المحتوى الذي يُولّده الذكاء الاصطناعي في سياقات البث.',
              'تحسين اللغة': 'التهجئة والتعبيرات البريطانية في الأوامر تُحسّن جودة المخرجات للمحتوى الموجّه للمملكة المتحدة. يستجيب GPT-5.5 لتعليمات "اللغة الإنجليزية البريطانية" الصريحة في أوامر النظام؛ بدونها يُعيد الإنجليزية الأمريكية افتراضياً.',
              'النموذج الموصى به': 'GPT-5.5 أو Claude Opus 4.8. نقل بيانات المملكة المتحدة إلى الاتحاد الأوروبي يستلزم بنوداً تعاقدية قياسية بعد Brexit — قرار الكفاءة الصادر من الاتحاد الأوروبي بشأن المملكة المتحدة سارٍ لكنه قابل للمراجعة.',
            },
            {
              'المنطقة': 'اليابان',
              'القيود القانونية على الأوامر': 'يُقيّد قانون حماية المعلومات الشخصية الياباني (APPI) استخدام البيانات الشخصية في أوامر الذكاء الاصطناعي. لا يوجد قانون ياباني خاص بالذكاء الاصطناعي (حتى 2026) — إرشادات وزارة الاقتصاد والتجارة والصناعة ووزارة الشؤون الداخلية طوعية. شاركت اليابان في عملية AI هيروشيما — يُشجَّع الالتزام بمبادئها الإحدى عشرة للشركات اليابانية.',
              'تحسين اللغة': 'الأوامر اليابانية للمهام اليابانية تتفوق على الأوامر الإنجليزية في جميع النماذج الرئيسية. يتعامل GPT-5.5 وClaude Opus 4.8 جيداً مع اليابانية؛ Rakuten AI وNTT LLMs متاحان لنشر خاص باليابان. تجنّب الأسلوب غير الرسمي (tame-go) في أوامر النظام — الأسلوب الرسمي (keigo) يُحسّن الامتثال وجودة المخرجات في السياقات التجارية اليابانية.',
              'النموذج الموصى به': 'GPT-5.5 أو Claude Opus 4.8 للمهام اليابانية العامة. Rakuten AI (مجموعة Rakuten) أو NTT LLMs للنشر الوطني في اليابان مع حساسية الامتثال.',
            },
          ],
        },

        keyStatistics: {
          title: 'جيوسياسة الذكاء الاصطناعي: الأرقام الرئيسية',
          content: [
            'تعكس الأرقام التالية حجم الاستثمار الحكومي في الذكاء الاصطناعي وتركّز الأجهزة وطاقة البحث التي تُحدّد التنافس الجيوسياسي الحالي في مجال الذكاء الاصطناعي.',
          ],
          items: [
            '**الاستثمار الحكومي في الذكاء الاصطناعي — الولايات المتحدة:** 52 مليار دولار مُخصَّصة بموجب قانون CHIPS والعلوم (2022) لتصنيع أشباه الموصلات محلياً، بالإضافة إلى 200 مليار دولار للبحث والتطوير العلمي. يموّل قانون المبادرة الوطنية للذكاء الاصطناعي أبحاث الذكاء الاصطناعي عبر 25 وكالة فيدرالية.',
            '**الاستثمار الحكومي في الذكاء الاصطناعي — الصين:** تُقدَّر الاستثمارات الموجَّهة حكومياً في الذكاء الاصطناعي وأشباه الموصلات بـ1 تريليون يوان (140 مليار دولار) للفترة 2021–2025، تشمل خطة التنمية الوطنية للذكاء الاصطناعي من الجيل الجديد بهدف قيادة الذكاء الاصطناعي عالمياً بحلول 2030.',
            '**الاستثمار الحكومي في الذكاء الاصطناعي — الاتحاد الأوروبي:** مليار يورو من صندوق المجلس الأوروبي للابتكار؛ تُضيف استراتيجيات الدول الأعضاء أكثر من 10 مليارات يورو: ألمانيا 5 مليارات يورو (2019–2025)، وفرنسا 2 مليار يورو، والمملكة المتحدة مليار جنيه إسترليني في سلامة الذكاء الاصطناعي والحوسبة.',
            '**تركّز تصنيع الرقائق:** تُصنّع TSMC (تايوان) ما يقارب 90% من أكثر رقائق العالم تقدماً دون 7 نانومتر. ASML (هولندا) هي الشركة المصنّعة الوحيدة لآلات الطباعة الضوئية EUV اللازمة لتصنيع العقد المتقدمة — مما يمنح هولندا اختناقاً هيكلياً في سلسلة توريد الرقائق العالمية.',
            '**حصة سوق Nvidia من وحدات معالجة الرسوميات:** تحتفظ Nvidia بحوالي 80% من حصة سوق وحدات معالجة الرسوميات لتدريب الذكاء الاصطناعي. تُشغّل سلسلتا H100 وH200 غالبية تدريب النماذج الحدودية في OpenAI وGoogle DeepMind وAnthropic وBaidu.',
            '**توزيع باحثي الذكاء الاصطناعي:** توظّف الولايات المتحدة حوالي 40% من كبار باحثي الذكاء الاصطناعي في العالم بحسب أثر المنشورات (مؤشر Stanford HAI للذكاء الاصطناعي 2024). تُنتج الصين أكبر عدد من شهادات الدكتوراه في علوم الحاسوب — حوالي 50,000 سنوياً — وتمثّل ~30% من مؤلفي المؤتمرات الرئيسية للذكاء الاصطناعي.',
            '**تقديم براءات اختراع الذكاء الاصطناعي:** قدّمت الصين حوالي 70% من براءات الاختراع العالمية في مجال الذكاء الاصطناعي في 2022 (مؤشر الابتكار العالمي للـWIPO). تتصدر الولايات المتحدة في الاستشهادات والاختراعات المُسوَّقة؛ الصين تتصدر في الحجم.',
            '**ضغط تكلفة تدريب النماذج:** انخفاض بنسبة 94% — تُقدَّر تكلفة GPT-4 بـ~100 مليون دولار في حوسبة التدريب (2023) مقابل ~6 ملايين دولار مُبلَّغ عنها لـDeepSeek R1 (يناير 2025). هذه الفجوة تُثبت أن ضوابط التصدير الأمريكية على تكلفة الحوسبة لا تستطيع تقييد تطوير الذكاء الاصطناعي الحدودي في الصين بشكل دائم.',
            '**نطاق قانون الذكاء الاصطناعي الأوروبي:** يشمل القانون 450 مليون مستهلك في 27 دولة عضو في الاتحاد الأوروبي. عتبة المخاطر المنهجية لنماذج GPAI هي 10²⁵ FLOP من حوسبة التدريب — المستوى الذي تسري عنده متطلبات اختبار عدائي إضافية.',
            '**إعلان بليتشلي (نوفمبر 2023):** وقّعته 28 دولة تشمل الولايات المتحدة والصين ودول الاتحاد الأوروبي — أوسع توافق دولي لسلامة الذكاء الاصطناعي حتى الآن، وإن كان غير ملزم.',
          ],
          image: '/images/ai-regulation-timeline-es.svg',
          imageCaption: 'الجدول الزمني التنظيمي العالمي للذكاء الاصطناعي 2022–2026: مقترح قانون الذكاء الاصطناعي الأوروبي (2021)، قانون CHIPS (2022)، قواعد خوارزميات CAC (2022–2023)، اعتماد قانون الذكاء الاصطناعي الأوروبي (2024)، مرحلة التطبيق يناير 2025.',
        },

        qaWhyStrategic: {
          title: 'لماذا يحمل الذكاء الاصطناعي أهمية استراتيجية؟',
          content: [
            'يحمل الذكاء الاصطناعي أهمية استراتيجية لأنه يُضاعف القدرة في كل بُعد من أبعاد القوة الوطنية في آنٍ واحد — الإنتاجية الاقتصادية والفعالية العسكرية وتحليل الاستخبارات والعمليات الإلكترونية. الدول التي تمتلك ذكاءً اصطناعياً رائداً قادرة على أتمتة البحث العلمي وتحسين اللوجستيات العسكرية ومعالجة بيانات المراقبة على نطاق واسع وتطوير أنظمة أسلحة مستقلة. تتوقع منظمة التعاون الاقتصادي والتنمية أن يُضيف الذكاء الاصطناعي 15.7 تريليون دولار إلى الناتج المحلي الإجمالي العالمي بحلول 2030، مما يجعل قيادة الذكاء الاصطناعي معادلاً للقيادة الصناعية في القرن العشرين.',
          ],
        },

        qaWhichCountriesDominate: {
          title: 'أي الدول تهيمن على تطوير الذكاء الاصطناعي؟',
          content: [
            'تهيمن الولايات المتحدة على قدرة النماذج الحدودية — OpenAI (GPT-5.5) وAnthropic (Claude) وGoogle DeepMind (Gemini) جميعها مقرّها في الولايات المتحدة. تتصدر الصين في حجم براءات اختراع الذكاء الاصطناعي (~70% من البراءات العالمية في 2022 وفق WIPO) ولديها أكثر النماذج المحلية قدرةً خارج الولايات المتحدة: Alibaba Qwen 3 وBaidu ERNIE 4.0 وDeepSeek R1. يتصدر الاتحاد الأوروبي في تنظيم الذكاء الاصطناعي لكنه يتأخر في قدرة النماذج الحدودية — Mistral AI الفرنسية هي المنافس الأوروبي الرئيسي.',
          ],
        },

        qaChipsRole: {
          title: 'ما دور الرقائق في جيوسياسة الذكاء الاصطناعي؟',
          content: [
            'أشباه الموصلات هي الركيزة المادية لقدرة الذكاء الاصطناعي. يستلزم تدريب النماذج الحدودية آلاف وحدات معالجة الرسوميات المتخصصة تعمل لأشهر — قد تكلف عملية تدريب واحدة لنموذج كبير ما بين 10–100 مليون دولار في الحوسبة. تحتفظ Nvidia بحوالي 80% من سوق وحدات معالجة الرسوميات لتدريب الذكاء الاصطناعي؛ وتُصنّعها TSMC في تايوان. هذا يُنشئ اختناقين جيوسياسيين: تستطيع الولايات المتحدة تقييد صادرات Nvidia من وحدات معالجة الرسوميات إلى الدول المعادية (حظر مبيعات A100 وH100 إلى الصين منذ 2022)، وأي اضطراب في عمليات TSMC سيُقلّص فوراً إمدادات أجهزة الذكاء الاصطناعي عالمياً.',
          ],
        },

        qaHowAIChangePower: {
          title: 'كيف يمكن للذكاء الاصطناعي أن يُغيّر القوة العالمية؟',
          content: [
            'يمكن للذكاء الاصطناعي إعادة رسم خارطة القوة العالمية بجعل الدول الرائدة فيه أكثر نفوذاً بصورة غير متناسبة مع حجمها الاقتصادي أو عدد سكانها. عسكرياً، يُتيح الذكاء الاصطناعي الاستهداف المستقل وتحسين اللوجستيات ومعالجة استخبارات الإشارات بسرعات لا يستطيع أي نظام بشري مجاراتها. اقتصادياً، تتراكم مكاسب إنتاجية الذكاء الاصطناعي — فالدول المتاح لها ذكاء اصطناعي حدودي قادرة على الحفاظ على معدلات نمو للناتج المحلي الإجمالي تُوسّع الفجوة مع التي لا تمتلكه. يفعل تأثير بروكسل للاتحاد الأوروبي هذا بالفعل من خلال التنظيم: يُشكّل قانون الذكاء الاصطناعي الأوروبي التطوير العالمي للذكاء الاصطناعي دون أن يتصدر الاتحاد الأوروبي في قدرة النماذج.',
          ],
        },

        geopoliticsOfAI: {
          title: 'جيوسياسة الذكاء الاصطناعي',
          content: [
            '**جيوسياسة الذكاء الاصطناعي هي دراسة كيفية استخدام الدول لقدرة الذكاء الاصطناعي وتنظيمه وبنيته التحتية كأدوات للقوة.** تشمل ثلاثة تنافسات مستقلة: السباق نحو بناء النماذج الأكثر قدرة، والصراع على أي إطار تنظيمي يحكم النشر العالمي للذكاء الاصطناعي، والنزاع على السيطرة على سلاسل توريد الأجهزة التي تُتيح الذكاء الاصطناعي الحدودي.',
            'لكل بُعد تداعيات ملموسة على المؤسسات. قدرة النموذج تحدد أدوات الذكاء الاصطناعي المتاحة. الأطر التنظيمية تحدد الأدوات المسموح بها والوثائق المطلوبة. السيطرة على الأجهزة تحدد الدول التي تستطيع استدامة تطوير الذكاء الاصطناعي الحدودي باستقلالية — وتلك التي لا تستطيع.',
          ],
        },

        keyEntityRelationships: {
          title: 'الكيانات الرئيسية في جيوسياسة الذكاء الاصطناعي وعلاقاتها',
          content: [
            '**تنظيم الذكاء الاصطناعي** هو مجموعة القوانين والمراسيم التنفيذية والأطر الطوعية التي تحكم كيفية تطوير أنظمة الذكاء الاصطناعي ونشرها وإدارتها. يُنتج تنظيم الذكاء الاصطناعي دولٌ ذات سيادة وهيئات دولية؛ والأنظمة التنظيمية الثلاثة الرئيسية هي قانون الذكاء الاصطناعي الأوروبي (الاتحاد الأوروبي) وإطار NIST لإدارة مخاطر الذكاء الاصطناعي (الولايات المتحدة) وتدابير الذكاء الاصطناعي التوليدي لـCAC (الصين).',
            '**التنافس التكنولوجي بين الولايات المتحدة والصين** هو المنافسة الثنائية بين الولايات المتحدة والصين على القيادة في مجالات أشباه الموصلات والذكاء الاصطناعي والتصنيع المتقدم. يتجلّى التنافس من خلال ضوابط تصدير وحدات معالجة الرسوميات Nvidia الأمريكية واستراتيجية الاستبدال المحلي الصينية (صنع في الصين 2025) وأطر حوكمة الذكاء الاصطناعي المتنافسة. الاتحاد الأوروبي طرف ثالث — لا طرف ثنائي — يُشكّل التنافس من خلال قوته التنظيمية.',
            '**قانون الذكاء الاصطناعي الأوروبي** لائحةٌ أقرّها البرلمان الأوروبي في مارس 2024. تُطبّقه مكتب الذكاء الاصطناعي الأوروبي وسلطات مراقبة السوق الوطنية. يسري على أي مؤسسة — بصرف النظر عن موقعها — تؤثر أنظمة ذكائها الاصطناعي على مستخدمي الاتحاد الأوروبي. يرتبط قانون الذكاء الاصطناعي الأوروبي بتأثير بروكسل: نظراً لتطبيقه خارج الإقليم، فإنه يُنظّم فعلياً OpenAI وGoogle DeepMind وAnthropic عالمياً.',
            '**NVIDIA** شركة أشباه موصلات أمريكية تُصمّم وحدات معالجة الرسوميات لتدريب الذكاء الاصطناعي (سلسلتا H100 وH200 وB200). أجهزة NVIDIA هي الركيزة الحوسبية الرئيسية لتدريب GPT-5.5 وClaude وGemini وغالبية نماذج الذكاء الاصطناعي الحدودية. ضوابط التصدير الأمريكية على وحدات معالجة الرسوميات NVIDIA للصين آلية محورية في التنافس التكنولوجي الأمريكي-الصيني.',
            '**TSMC** (شركة تايوان لتصنيع أشباه الموصلات) مسبكة رقائق تايوانية تُصنّع أشباه موصلات متقدمة لـNVIDIA وApple وAMD وGoogle. يجعل الموقع الجغرافي لـTSMC في تايوان — والوضع السياسي المتنازع عليه للجزيرة — من TSMC متغيراً بالغ الأهمية في جيوسياسة الذكاء الاصطناعي.',
            '**DeepSeek** مختبر ذكاء اصطناعي صيني أطلق DeepSeek R1 في يناير 2025. تفوّق DeepSeek R1 على GPT-5.5 في معايير الاستدلال والبرمجة (AIME 2024 وMATH-500 وHumanEval) بتكلفة تدريب مُقدَّرة بـ~6 ملايين دولار — أي 94% أقل من تقديرات النماذج الحدودية — باستخدام وحدات معالجة رسوميات NVIDIA H800 المقيّدة للصين.',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: '5 أبعاد جيوسياسية للذكاء الاصطناعي',
          content: [
            'تعمل جيوسياسة الذكاء الاصطناعي على خمسة أبعاد مستقلة. يمثّل كل بُعد ساحة منافسة منفصلة بين الولايات المتحدة والصين والاتحاد الأوروبي — ويُفرز كل منها التزامات ومخاطر مختلفة للمؤسسات التي تنشر الذكاء الاصطناعي.',
          ],
          items: [
            '**1. الاقتصاد.** يدفع الذكاء الاصطناعي الإنتاجية والأتمتة ونمو الناتج المحلي الإجمالي. الدول ذات القدرة الفائقة في الذكاء الاصطناعي تكتسب كفاءة تصنيعية ومزايا في النمذجة المالية واكتشافاً علمياً أسرع. تتوقع منظمة التعاون الاقتصادي والتنمية أن يُضيف الذكاء الاصطناعي 15.7 تريليون دولار إلى الناتج المحلي الإجمالي العالمي بحلول 2030 — تلتقط معظمها الدول الرائدة في الذكاء الاصطناعي.',
            '**2. العسكري.** يُتيح الذكاء الاصطناعي أنظمة أسلحة مستقلة ولوجستيات تنبؤية ومعالجة استخبارات ميدان المعركة وعمليات إلكترونية بسرعة الآلة. تطوّر الولايات المتحدة والصين وروسيا أنظمة عسكرية مُمكَّنة بالذكاء الاصطناعي.',
            '**3. الاستخبارات.** يعالج الذكاء الاصطناعي صور الأقمار الاصطناعية ويعترض الإشارات ويحلّل بيانات المصادر المفتوحة على مقاييس مستحيلة للمحللين البشريين. التزوير العميق الذي يُولّده الذكاء الاصطناعي أداة ناشئة في عمليات الاستخبارات والتأثير.',
            '**4. البنية التحتية.** يعتمد الذكاء الاصطناعي على بنية تحتية مادية: مسابك أشباه الموصلات (TSMC وSamsung وIntel) ومراكز البيانات والكابلات البحرية وشبكات الطاقة. الدول التي تتحكم في البنية التحتية الحيوية للذكاء الاصطناعي — تصنيع الرقائق ومنصات الحوسبة السحابية وحوسبة التدريب — تمتلك نفوذاً هيكلياً على التي لا تتحكم فيها.',
            '**5. الحوكمة العالمية.** أي إطار تنظيمي يصبح المعيار العالمي الافتراضي يحدد ما تستطيع أنظمة الذكاء الاصطناعي فعله، وما البيانات التي يمكنها استخدامها، وأي مؤسسات يمكنها نشرها. قانون الذكاء الاصطناعي الأوروبي وأطر NIST الأمريكية ولوائح CAC الصينية تمثّل ثلاثة نماذج حوكمة متنافسة — وتأثير بروكسل يعني أن نموذج الاتحاد الأوروبي يسري بالفعل خارج حدوده.',
          ],
        },

        threeWayRace: {
          title: 'سباق التسلح في الذكاء الاصطناعي: الولايات المتحدة والصين والاتحاد الأوروبي',
          content: [
            '**ثلاث رؤى متعارضة لحوكمة الذكاء الاصطناعي تتنافس على الاعتماد العالمي — تُعطي الولايات المتحدة الأولوية للابتكار والتنافسية، وتستخدم الصين التوجيه الحكومي لتحقيق الهيمنة الاستراتيجية، ويبني الاتحاد الأوروبي إطاراً قانونياً قائماً على الحقوق يُصدّر معاييره عالمياً عبر تأثير بروكسل.** سباق التسلح في الذكاء الاصطناعي هذا مدني في جوهره: المختبرات الرائدة شركات خاصة (OpenAI وAnthropic وGoogle DeepMind وBaidu وAlibaba)، لكن الرهانات — السيطرة التنظيمية وسلاسل توريد الأجهزة والكفاءات — ذات طابع جيوسياسي.',
            'السباق لا يتعلق فقط بمن يبني النماذج الأكثر قدرة. يتعلق بأي إطار تنظيمي يصبح المعيار العالمي الافتراضي. قانون الذكاء الاصطناعي الأوروبي، بتطبيقه على أي نظام ذكاء اصطناعي مُنشَر لمستخدمي الاتحاد الأوروبي، جعل بالفعل من بروكسل المنظّم الفعلي لـOpenAI وAnthropic وGoogle DeepMind عالمياً. راجع [المصدر المفتوح مقابل النماذج الملكية](/prompt-engineering/open-source-vs-proprietary-llms) لمعرفة كيف تؤثر هذه الديناميكيات على توفر النماذج.',
          ],
          items: [
            '**موقف الولايات المتحدة:** تتصدر في قدرة النماذج الحدودية (GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro) وتصميم الرقائق (Nvidia وAMD) والاستثمار في الذكاء الاصطناعي (67 مليار دولار استثمار خاص في 2023 وفق منظمة التعاون الاقتصادي والتنمية). لا يوجد قانون فيدرالي موحّد للذكاء الاصطناعي — يُسرّع النشر لكنه يُفرز تشرذماً في الامتثال.',
            '**موقف الصين:** تتصدر في حجم براءات اختراع الذكاء الاصطناعي وحجم التعرف على الوجه والنشر الموجَّه حكومياً. النماذج (Qwen 3 وERNIE 4.0 وDeepSeek R1) تنافسية في كثير من المعايير. الاعتماد على معمارية Nvidia في الأجهزة هو الثغرة الاستراتيجية الرئيسية التي تستهدفها ضوابط التصدير.',
            '**موقف أوروبا:** تتصدر في تنظيم الذكاء الاصطناعي — قانون الذكاء الاصطناعي الأوروبي هو الإطار المرجعي العالمي — وبحث الأوزان المفتوحة (Mistral الفرنسية). تتأخر في قدرة النماذج الحدودية والاستثمار الخاص. تُعوّض ذلك بالنفوذ التنظيمي: تأثير بروكسل يُلزم موردي الولايات المتحدة والصين بالامتثال لمعايير الاتحاد الأوروبي للمنتجات العالمية.',
            '**طبقة الأجهزة:** تهيمن وحدات معالجة الرسوميات Nvidia H100/H200 على تدريب الذكاء الاصطناعي. تُقيّد ضوابط التصدير الأمريكية المبيعات للصين. دُرِّب DeepSeek R1 على وحدات H800 المقيّدة بتكلفة مُبلَّغ عنها ~6 ملايين دولار — تخفيض 94% عن تقديرات تدريب GPT-5.5 — مما يُثبت أن ضوابط الأجهزة لم توقف الذكاء الاصطناعي الحدودي الصيني.',
          ],
          image: '/images/regional-ai-players-es.svg',
          imageCaption: 'الولايات المتحدة: OpenAI وAnthropic وGoogle DeepMind (بتمويل VC). الاتحاد الأوروبي: Mistral وHugging Face (مفتوح المصدر، ممول بالبنية التحتية مقارنة بالولايات المتحدة). الصين: Baidu وAlibaba وTencent (بدعم حكومي، تحت إشراف CAC).',
        },

        euAiAct: {
          title: 'قانون الذكاء الاصطناعي الأوروبي: ما يتطلبه فعلياً',
          content: [
            '**يُصنّف قانون الذكاء الاصطناعي الأوروبي أنظمة الذكاء الاصطناعي في أربعة مستويات مخاطر، مع متطلبات وغرامات تتصاعد بحسب مستوى المخاطر التي يشكّلها النظام على الحقوق الأساسية والسلامة.** أقرّ البرلمان الأوروبي القانون في مارس 2024 بـ523 صوتاً مؤيداً و46 معارضاً و49 ممتنعاً.',
            'يسري القانون على الموردين الذين يطرحون أنظمة الذكاء الاصطناعي في السوق الأوروبية، وعلى مُشغّلي هذه الأنظمة داخل الاتحاد الأوروبي، وعلى المستوردين والموزّعين — بصرف النظر عن موقع هذه المؤسسات.',
          ],
          items: [
            '**مخاطر غير مقبولة (محظورة):** التسجيل الاجتماعي من السلطات العامة؛ التعرف البيومتري في الوقت الفعلي في الأماكن العامة (استثناءات محدودة لإنفاذ القانون)؛ الذكاء الاصطناعي الذي يستغل الثغرات المعرفية؛ الجمع الجماعي لصور الوجوه. محظورة منذ أغسطس 2024.',
            '**مخاطر عالية:** الذكاء الاصطناعي في البنية التحتية الحيوية والتعليم والتوظيف والخدمات الأساسية (الائتمان والمزايا) وإنفاذ القانون ومراقبة الحدود وإدارة العدالة. يستلزم تقييمات مطابقة ووثائق شفافية وإشرافاً بشرياً وتسجيلاً في قاعدة بيانات الاتحاد الأوروبي.',
            '**مخاطر محدودة:** روبوتات الدردشة والمحتوى الذي يُولّده الذكاء الاصطناعي. يستلزم الإفصاح — يجب إعلام المستخدمين بأنهم يتفاعلون مع ذكاء اصطناعي.',
            '**مخاطر أدنى:** فلاتر البريد المزعج والذكاء الاصطناعي في ألعاب الفيديو وأنظمة التوصية دون تأثير جوهري. لا التزامات محددة تتجاوز القانون القائم.',
            '**الذكاء الاصطناعي للأغراض العامة (GPAI):** يجب على نماذج كـGPT-5.5 وClaude وGemini نشر ملخصات بيانات التدريب والامتثال لقانون حقوق الملكية الفكرية في الاتحاد الأوروبي والإبلاغ عن الحوادث الجسيمة. تواجه النماذج ذات المخاطر المنهجية (المدرَّبة بأكثر من 10^25 FLOP) متطلبات اختبار عدائي إضافية. طُبّقت قواعد GPAI في أغسطس 2025.',
            '**التطبيق:** تشرف مكتب الذكاء الاصطناعي في الاتحاد الأوروبي (ضمن المفوضية الأوروبية) على نماذج GPAI. تُطبّق سلطات مراقبة السوق الوطنية قواعد الذكاء الاصطناعي عالي المخاطر. الغرامات: تصل إلى 35 مليون يورو أو 7% من حجم الأعمال العالمي على الممارسات المحظورة؛ و15 مليون يورو أو 3% على انتهاكات المخاطر العالية.',
            '**الجدول الزمني:** الممارسات المحظورة: أغسطس 2024. التزامات GPAI: أغسطس 2025. أنظمة الذكاء الاصطناعي عالية المخاطر: أغسطس 2026. الذكاء الاصطناعي عالي المخاطر في المنتجات المنظّمة: أغسطس 2027.',
          ],
          image: '/images/ai-risk-tiers-comparison-es.svg',
          imageCaption: 'نظام المستويات الأربعة للمخاطر في قانون الذكاء الاصطناعي الأوروبي: غير مقبول (محظور أغسطس 2024)، عالي المخاطر (تقييم المطابقة)، محدود (الإفصاح فقط)، أدنى (بلا التزامات).',
        },

        digitalOmnibus: {
          title: 'الحزمة الرقمية الشاملة: موعد امتثال المخاطر العالية لقانون الذكاء الاصطناعي الأوروبي في حالة غموض',
          content: [
            '**حتى مايو 2026، قد يُؤجَّل موعد امتثال المخاطر العالية لقانون الذكاء الاصطناعي الأوروبي المُقرَّر في 2 أغسطس 2026 إلى 2 ديسمبر 2027 — لكن الاعتماد غير مضمون.** اقترحت المفوضية الأوروبية الحزمة الرقمية الشاملة في نوفمبر 2025 لمعالجة التداعيات غير المقصودة وتحديات التنفيذ في قانون الذكاء الاصطناعي الأوروبي.',
            '**حالة المفاوضات الثلاثية:** انتهت الجولة الثانية في 28 أبريل 2026 دون توافق. جُدِّلت جولة ثالثة في 13 مايو 2026. إذا اعتُمد التأجيل قبل 2 أغسطس 2026، يصبح ملزماً؛ وإلا يسري الموعد الأصلي في 2 أغسطس 2026.',
            '**ما يجب على المؤسسات فعله:** خطّط لـ2 أغسطس 2026 بوصفه موعد الامتثال الملزم لأنظمة الذكاء الاصطناعي عالية المخاطر. قد تُمدّد الحزمة الرقمية الشاملة موعدك إلى ديسمبر 2027، لكن الافتراض بأن التأجيل سيُقرَّ خطرٌ حقيقي. تحقيق الامتثال لأغسطس 2026 الآن يُؤمّن حمايتك في كلتا الحالتين.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'تحذير: اعتماد الحزمة الرقمية الشاملة غير مضمون',
              text: 'تأجيل الحزمة الرقمية الشاملة من أغسطس 2026 إلى ديسمبر 2027 غير مضمون. انتهت الجولة الثانية من المفاوضات في 28 أبريل 2026 دون توافق. لا تفترض أن التأجيل سيُقرَّ. خطّط لخارطة طريق الامتثال بحيث يكون 2 أغسطس 2026 الموعد النهائي الملزم.',
            },
          ],
        },

        euMemberStates: {
          title: 'الدول الأعضاء في الاتحاد الأوروبي: الاستراتيجيات الوطنية للذكاء الاصطناعي',
          content: [
            '**اعتمدت كل دولة عضو في الاتحاد الأوروبي استراتيجية وطنية للذكاء الاصطناعي، لكن مستويات الاستثمار ومجالات التركيز ووتيرة التنفيذ تتباين تبايناً كبيراً.**',
          ],
          items: [
            '**ألمانيا:** الاستراتيجية الفيدرالية للذكاء الاصطناعي (Nationale KI-Strategie) المُحدَّثة في 2023. خمسة مليارات يورو مُستثمَرة في البحث والبنية التحتية والكفاءات في مجال الذكاء الاصطناعي 2019–2025 عبر برامج فيدرالية. ستة مراكز كفاءة للذكاء الاصطناعي مُنشَأة في الجامعات الرئيسية.',
            '**فرنسا:** ملياران يورو استثمار عام في الذكاء الاصطناعي أعلن عنهما الرئيس ماكرون (2024). استضافت باريس قمة العمل على الذكاء الاصطناعي في فبراير 2025 — أول قمة لحوكمة الذكاء الاصطناعي على مستوى G7 تحت الرئاسة الفرنسية للاتحاد الأوروبي. تدعم فرنسا الذكاء الاصطناعي مفتوح الأوزان بديلاً استراتيجياً للاعتماد على API الأمريكية.',
            '**إسبانيا:** تُخصّص الاستراتيجية الوطنية الإسبانية للذكاء الاصطناعي (ENIA) 600 مليون يورو 2021–2025. أنشأت إسبانيا AESIA (الوكالة الإسبانية للإشراف على الذكاء الاصطناعي) — أول منظّم وطني للذكاء الاصطناعي في الاتحاد الأوروبي، تأسّس في 2023.',
            '**إيطاليا:** ترأّست إيطاليا قمة G7 في 2024، التي أسفرت عن مدوّنة قواعد سلوك عملية AI هيروشيما — 11 مبدأً توجيهياً لمطوّري الذكاء الاصطناعي المتقدمين اعتمدته دول G7.',
            '**هولندا:** أصدرت سلطة حماية البيانات الهولندية (AP) إرشادات تطبيق GDPR خاصة بأنظمة الذكاء الاصطناعي. ASML (هولندا) هي الشركة المصنّعة الوحيدة لآلات الطباعة الضوئية EUV اللازمة لتصنيع العقد المتقدمة.',
            '**بولندا:** يركّز البرنامج الوطني البولندي لتطوير الذكاء الاصطناعي على الذكاء الاصطناعي في الدفاع والأمن الإلكتروني والإدارة العامة. تحتضن وارسو منظومة ناشئة من الشركات الناشئة في مجال الذكاء الاصطناعي.',
            '**السويد:** نشرت لجنة الذكاء الاصطناعي السويدية تقريرها في 2024 يتضمن أكثر من 60 توصية تغطي التعليم والنشر في القطاع العام والابتكار.',
          ],
        },

        franceMistral: {
          title: 'فرنسا وMistral: بناء الاستقلالية الأوروبية في الذكاء الاصطناعي',
          content: [
            '**تبني فرنسا ثقلاً موازناً استراتيجياً لهيمنة الذكاء الاصطناعي الأمريكية من خلال الاستثمار العام وشركة Mistral AI — في موضعة نماذج الأوزان المفتوحة بوصفها مسار أوروبا نحو السيادة في الذكاء الاصطناعي.**',
            '**Mistral AI (تأسّست 2023):** أسّسها Arthur Mensch وGuillaume Blanc وTim Caron — جميعهم موظفون سابقون في Meta. أطلقت Mistral نموذج Mistral Small (أوزان مفتوحة) في سبتمبر 2023، تلاه Mistral Large 2 (تنافسي مع GPT-5.5 في كثير من المهام). يسجّل Mistral Large 2 نسبة 81.2% في MMLU مقابل 88.7% لـGPT-5.5. نافذة سياق 123K رمز.',
            '**لماذا اختارت فرنسا الأوزان المفتوحة:** ترى فرنسا أن APIs الملكية تُفرز اعتماداً على المورّد ومخاطر في إقامة البيانات وتبعية طويلة الأمد للشركات الأمريكية. يمكن نشر نماذج الأوزان المفتوحة على بنية تحتية أوروبية مع إبقاء البيانات في نطاق الولايات القضائية الأوروبية.',
            '**الدعم الحكومي:** دعم الحكومة الفرنسية عبر Caisse des Dépôts et Placements (صندوق الاستثمار الحكومي). حصلت Mistral على 385 مليون يورو في جولة تمويل السلسلة B (فبراير 2024) بدعم من مستثمرين استراتيجيين فرنسيين.',
          ],
        },

        nonEuEurope: {
          title: 'أوروبا خارج الاتحاد الأوروبي: المملكة المتحدة وسويسرا والنرويج وأوكرانيا',
          content: [
            '**اختارت أربع دول أوروبية رئيسية خارج الاتحاد الأوروبي مسارات حوكمة للذكاء الاصطناعي مستقلة، لا تتوافق أي منها بشكل كامل مع قانون الذكاء الاصطناعي الأوروبي.**',
          ],
          items: [
            '**المملكة المتحدة:** بعد Brexit، اختارت المملكة المتحدة نهجاً مُيسِّراً للابتكار يقوده القطاع دون تشريع خاص للذكاء الاصطناعي حتى 2026. معهد سلامة الذكاء الاصطناعي البريطاني (AISI)، المُنشَأ في نوفمبر 2023 عقب قمة أمان الذكاء الاصطناعي في بليتشلي بارك، يُجري تقييمات للنماذج الحدودية وينشر تقارير السلامة.',
            '**سويسرا:** تحافظ سويسرا على حيادها في الذكاء الاصطناعي — لا قانون وطني للذكاء الاصطناعي ولا خطط لذلك. يعتمد المجلس الفيدرالي على التشريعات القائمة. تستضيف سويسرا قمة الذكاء الاصطناعي من أجل الخير التابعة للأمم المتحدة في جنيف سنوياً.',
            '**النرويج:** تشارك النرويج في المنطقة الاقتصادية الأوروبية، مما يعني سريان قانون الذكاء الاصطناعي الأوروبي عند دمجه في اتفاقية المنطقة الاقتصادية الأوروبية. نشر صندوق التقاعد الحكومي النرويجي (~1.8 تريليون دولار) معايير استثمار في الذكاء الاصطناعي تشترط على شركات المحفظة الإفصاح عن سياسات حوكمة الذكاء الاصطناعي.',
            '**أوكرانيا:** أوكرانيا هي الجهة الأكثر نشاطاً في نشر الذكاء الاصطناعي في سياق نزاع فعلي. وقّعت وزارة التحول الرقمي اتفاقيات تعاون في الذكاء الاصطناعي مع كل من الاتحاد الأوروبي والولايات المتحدة. قدّمت أوكرانيا طلب الانضمام إلى الاتحاد الأوروبي في 2022 وتُواءم تشريعاتها الرقمية — بما فيها حوكمة الذكاء الاصطناعي — مع معايير الاتحاد الأوروبي.',
          ],
        },

        usStrategy: {
          title: 'استراتيجية الولايات المتحدة: المراسيم التنفيذية وقانون CHIPS وإلغاء القوانين الولائية',
          content: [
            '**تعمل الولايات المتحدة دون قانون فيدرالي للذكاء الاصطناعي، مستعيضةً عن ذلك بالمراسيم التنفيذية والإرشادات الطوعية والمنظّمين القطاعيين القائمين لحوكمة الذكاء الاصطناعي.** موقف إدارة ترامب، الذي سرى منذ يناير 2025، عكس نهج إدارة بايدن وأولى التنافسية وقيادة الولايات المتحدة في الذكاء الاصطناعي على احتياطات السلامة.',
            'قانون CHIPS والعلوم (52 مليار دولار، 2022) هو التدخل السياسي الأكثر ملموسية للحكومة الأمريكية في مجال الذكاء الاصطناعي — لا يُنظّم الذكاء الاصطناعي بل يدعم تصنيع أشباه الموصلات محلياً لتقليل الاعتماد على TSMC في تايوان. يهدف إلى ضمان وصول الولايات المتحدة إلى أجهزة الذكاء الاصطناعي المتقدمة بصرف النظر عن الوضع في مضيق تايوان.',
          ],
          items: [
            '**المرسوم التنفيذي 14365 (ديسمبر 2025):** مرسوم ترامب التنفيذي الذي يُوجّه وزارة التجارة لتطوير إطار وطني للابتكار في الذكاء الاصطناعي ويدرس إلغاء اللوائح الولائية للذكاء الاصطناعي التي قد تُعيق الابتكار.',
            '**الإطار الوطني للذكاء الاصطناعي (مارس 2026):** إطار طوعي نشرته وزارة التجارة يوجّه الوكالات الفيدرالية بشأن نشر الذكاء الاصطناعي. لم يُنشَر بعد حتى مايو 2026 — موعد فُوِّت.',
            '**مشروع قانون TRUMP AMERICA AI Act (مارس 2026):** مقترح تشريعي لإلغاء اللوائح الولائية للذكاء الاصطناعي المُطبَّقة تحديداً على أنظمة الذكاء الاصطناعي — يهدف إلى منع كاليفورنيا ونيويورك وتكساس من إنشاء أطر امتثال متشرذمة للمشغّلين الوطنيين.',
            '**NIST AI RMF (2023):** إطار إدارة مخاطر الذكاء الاصطناعي التابع للمعهد الوطني للمعايير والتقنية — الوثيقة التوجيهية الأكثر اعتماداً في مجال الذكاء الاصطناعي في الولايات المتحدة. طوعي وغير ملزم. يوفّر سبعة أبعاد للموثوقية (آمن ومضمون وقابل للتفسير وشفاف ومُصون للخصوصية وعادل ومرن) تتّبعها الوكالات الفيدرالية وكثير من المقاولين كممارسة جيدة.',
          ],
        },

        chinaStrategy: {
          title: 'استراتيجية الصين في الذكاء الاصطناعي: DeepSeek وCAC وصنع في الصين 2025',
          content: [
            '**استراتيجية الصين في الذكاء الاصطناعي مزيج من التوجيه الحكومي والاستثمار التكنولوجي الهائل وتنظيم المحتوى — مُنفَّذة عبر CAC وخطة التنمية الوطنية للذكاء الاصطناعي من الجيل الجديد.** أثبت إطلاق DeepSeek R1 في يناير 2025 أن قيود تصدير الرقائق لم توقف تطوير الذكاء الاصطناعي الحدودي في الصين.',
          ],
          items: [
            '**خطة التنمية الوطنية للذكاء الاصطناعي من الجيل الجديد (2017):** تستهدف القيادة العالمية في الذكاء الاصطناعي بحلول 2030 من خلال الاستثمار في البنية التحتية والبحث والتطبيقات التجارية. الميزانية المُقدَّرة: تريليون يوان (140 مليار دولار) 2021–2025.',
            '**صنع في الصين 2025:** استراتيجية الاستبدال المحلي للواردات التي تشمل أشباه الموصلات ورقائق الذكاء الاصطناعي ضمن الأهداف ذات الأولوية. تهدف إلى تقليل اعتماد الصين على وحدات معالجة الرسوميات Nvidia من خلال تطوير بدائل محلية (Huawei Ascend وCambricon).',
            '**لوائح خوارزميات CAC (2022) وتدابير الذكاء الاصطناعي التوليدي (2023):** الإطار التنظيمي للذكاء الاصطناعي في الصين. تستلزم خدمات الذكاء الاصطناعي التوليدي الموجّهة للمستهلك عملية موافقة قبل الإطلاق وفلترة المحتوى والتسجيل كشركة مقرّها في الصين.',
            '**DeepSeek:** مختبر ذكاء اصطناعي صيني بدعم من High-Flyer Capital Management أطلق DeepSeek R1 (يناير 2025). دُرِّب R1 على وحدات معالجة رسوميات Nvidia H800 المقيّدة بتكلفة مُبلَّغ عنها ~6 ملايين دولار — مما يُثبت أن ضوابط تصدير الأجهزة لها حدود في تقييد تطوير الذكاء الاصطناعي الحدودي في الصين.',
          ],
        },

        chinaModelsAccessibility: {
          title: 'الصين لمهندسي الأوامر: النماذج المتاحة',
          content: [
            '**النماذج الأجنبية (GPT-5.5 وClaude وGemini) غير متاحة من الصين القارية دون VPN.** للنشر داخل الصين، يجب على المطوّرين استخدام النماذج المحلية عبر منصات معتمدة من CAC.',
          ],
          items: [
            'Alibaba Qwen 3 (أوزان مفتوحة، 7B–72B، نافذة سياق 128K): أقوى نموذج مفتوح المصدر في الصين. رخصة Apache 2.0. قابل للنشر ذاتياً خارج الصين بلا فلاتر CAC.',
            'Baidu ERNIE 4.0 (Qianfan API): مسجّل في CAC للنشر الموجّه للمستهلك داخل الصين. أفضل أداء في المهام الصينية.',
            'ByteDance Doubao (Volcano Engine): API خدمة مُدارة لأسواق الصين القارية. فعّال من حيث التكلفة لتطبيقات الحجم الكبير.',
            'DeepSeek R1/V3: مفتوح وقابل للاستضافة الذاتية؛ متاح أيضاً كخدمة API. لا فلاتر محتوى في النسخة ذاتية الاستضافة.',
            'Z.ai GLM-4: نموذج صيني مفتوح المصدر مُحسَّن للغة الصينية مع خيارات سياق طويل.',
          ],
        },

        chinaContentFilters: {
          title: 'فلاتر محتوى CAC: القيود الحرجة',
          content: [
            '**فلاتر محتوى CAC إلزامية في خدمات الذكاء الاصطناعي التوليدي المسجّلة في الصين وتحجب المحتوى الذي تُصنّفه الحكومة الصينية بالغاً حساسيةً سياسية أو مزعزعاً للاستقرار الاجتماعي.** يجب على المطوّرين الذين يبنون تطبيقات للسوق الصيني التعامل صراحةً مع ردود فلاتر CAC.',
          ],
          items: [
            'مجالات المحتوى المحجوب: قيادة الحزب الشيوعي الصيني وسياساته، واستقلال تايوان/التبت/شينجيانغ، وأحداث تيانانمن 1989، والمحتوى الذي يُقوّض "القيم الاشتراكية الجوهرية"، وانتقادات الحكومة الصينية.',
            'صيغة رد الفلتر: HTTP 200 مع `{"is_safe": 0}` في جسم الرد — وليس HTTP 4xx. يجب أن يتحقق كود معالجة الأخطاء في التطبيق صراحةً من قيمة `is_safe` بدلاً من الاعتماد على رموز حالة HTTP.',
            'إجراءات المطوّر المطلوبة: أضف معالجاً لـ`is_safe: 0` في جميع استدعاءات API لنماذج الصين. اعرض رسالة خطأ مُتحكَّماً فيها للمستخدم عند قيمة `is_safe: 0`. لا تفترض أن أخطاء الفلتر نادرة — أي أمر يمسّ السياسة أو التاريخ أو الأحداث الجيوسياسية الراهنة قد يُفعّل الفلاتر.',
            'حل للبيانات العابرة للحدود: استخدم Qwen 3 72B المُستضاف ذاتياً خارج الصين للتطبيقات التي تستلزم تغطية محتوى كاملة. يخدم نفس النموذج كلا المنطقتين مع تطبيق فلترة المحتوى فقط عند الخدمة عبر APIs الصين القارية.',
          ],
        },

        chinaDataResidencyAPIs: {
          title: 'إقامة البيانات بموجب PIPL والAPIs العملية ونماذج النشر',
          content: [
            '**يشترط قانون حماية المعلومات الشخصية (PIPL) الصيني بقاء البيانات الشخصية لمستخدمين صينيين داخل الصين أو إخضاعها لتقييم أمني حكومي قبل النقل عبر الحدود.** لمهندسي الأوامر، يعني هذا أن استدعاءات API التي تتضمن بيانات مستخدمين صينيين يجب توجيهها عبر بنية تحتية مُستضافة في الصين القارية.',
          ],
          items: [
            'الامتثال لـPIPL: وجّه كل حركة مرور المستخدمين الصينيين عبر استنتاج مُستضاف في الصين القارية (Alibaba Cloud وTencent Cloud وHuawei Cloud). لا ترسل بيانات مستخدمين صينيين إلى APIs مُستضافة في الولايات المتحدة حتى لو كنت تستخدم نسخ Qwen أو DeepSeek.',
            'معمارية النشر الموصى بها: انشر Qwen 3 72B (Apache 2.0) على بنيتك التحتية خارج الصين للمستخدمين الدوليين. استخدم Alibaba Cloud API لشريحة الصين تحت تسجيلهم في CAC.',
            'الجدول الزمني لمراجعة CAC: 45–90 يوماً لمراجعة ما قبل الإطلاق لخدمات الذكاء الاصطناعي التوليدي الموجّهة للمستهلك. يجب على الشركات الأجنبية الشراكة مع كيان صيني قاري أو مزوّد سحابة مُرخَّص بوصفه المزوّد المسجّل.',
          ],
        },

        regulatoryComparison: {
          title: 'التنظيم العالمي للذكاء الاصطناعي: الاتحاد الأوروبي والولايات المتحدة والصين مقارنةً',
          content: [
            '**تتّبع القوى التنظيمية الثلاث مناهج مختلفة جوهرياً في حوكمة الذكاء الاصطناعي.** يُعطي الاتحاد الأوروبي الأولوية للحقوق والسلامة؛ تُعطيها الولايات المتحدة للابتكار؛ وتُعطيها الصين للسيطرة الحكومية.',
          ],
          tableFormat: true,
          columns: ['البُعد', 'الاتحاد الأوروبي', 'الولايات المتحدة', 'الصين'],
          rows: [
            { 'البُعد': 'النهج التنظيمي', 'الاتحاد الأوروبي': 'إطار قانوني قائم على الحقوق؛ تصنيف مخاطر رباعي', 'الولايات المتحدة': 'قطاعي وطوعي؛ بلا قانون فيدرالي للذكاء الاصطناعي', 'الصين': 'حكومي التوجيه، السيطرة أولاً؛ استراتيجية تنمية وطنية' },
            { 'البُعد': 'التشريع الرئيسي', 'الاتحاد الأوروبي': 'قانون الذكاء الاصطناعي الأوروبي (2024، إلزامي) + GDPR', 'الولايات المتحدة': 'لا يوجد قانون فيدرالي؛ NIST AI RMF (طوعي)؛ خطة عمل الذكاء الاصطناعي لترامب (2025)', 'الصين': 'لوائح الخوارزميات والذكاء الاصطناعي التوليدي لـCAC (2022–2023)' },
            { 'البُعد': 'إطار مستويات المخاطر', 'الاتحاد الأوروبي': 'نظام رباعي (غير مقبول/محظور، عالٍ/تقييم المطابقة، محدود/إفصاح، أدنى/بلا التزامات)', 'الولايات المتحدة': 'NIST AI RMF طوعي بـ7 أبعاد للموثوقية؛ بلا مستويات إلزامية', 'الصين': 'تقييم أمني إلزامي قبل النشر للذكاء الاصطناعي التوليدي' },
            { 'البُعد': 'الحد الأقصى للغرامات', 'الاتحاد الأوروبي': '35 مليون يورو أو 7% من حجم الأعمال العالمي على الممارسات المحظورة؛ 15 مليون أو 3% على انتهاكات المخاطر العالية', 'الولايات المتحدة': 'لا غرامة فيدرالية خاصة بالذكاء الاصطناعي؛ تلاحق FTC الممارسات غير العادلة/المضلّلة', 'الصين': 'حتى 100,000 يوان للمخالفة؛ تعليق الخدمة للذكاء الاصطناعي التوليدي غير الممتثل' },
            { 'البُعد': 'تطبيقات الذكاء الاصطناعي المحظورة', 'الاتحاد الأوروبي': 'التسجيل الاجتماعي، المراقبة البيومترية في الوقت الفعلي، الذكاء الاصطناعي الذي يستغل الثغرات المعرفية، الجمع الجماعي لصور الوجوه', 'الولايات المتحدة': 'لا حظر فيدرالي؛ تباين على مستوى الولايات', 'الصين': 'المحتوى الذي يُقوّض قيادة الحزب الشيوعي أو "القيم الاشتراكية الجوهرية"؛ التزييف العميق يستلزم الإفصاح' },
            { 'البُعد': 'النطاق الدولي', 'الاتحاد الأوروبي': 'تأثير بروكسل — يسري خارج الإقليم على أي ذكاء اصطناعي يصل إلى مستخدمي الاتحاد الأوروبي', 'الولايات المتحدة': 'ضوابط تصدير الأجهزة؛ بلا تنظيم محتوى خارج الإقليم', 'الصين': 'صادرات الذكاء الاصطناعي لمبادرة الحزام والطريق تنشر معايير الحوكمة الصينية؛ الجدار الناري العظيم يُقيّد الذكاء الاصطناعي الأجنبي داخلياً' },
          ],
        },

        organizationsImplications: {
          title: 'مخاطر الجيوسياسة للذكاء الاصطناعي على المؤسسات',
          content: [
            '**تواجه المؤسسات التي تنشر الذكاء الاصطناعي عالمياً أربعة مخاطر جيوسياسية: الغموض التنظيمي وقيود توفر النماذج وتشرذم إقامة البيانات واضطرابات سلسلة توريد الأجهزة.**',
          ],
          items: [
            '**الغموض التنظيمي:** مواعيد امتثال قانون الذكاء الاصطناعي الأوروبي متغيّرة (تأجيل محتمل للحزمة الرقمية الشاملة من أغسطس 2026 إلى ديسمبر 2027). سياسة الذكاء الاصطناعي الأمريكية تتبدّل بتغيّر الإدارات. لوائح CAC في الصين تسري بأثر رجعي على الخدمات القائمة. خطّط للامتثال للمعيار الأكثر صرامة (قانون الذكاء الاصطناعي الأوروبي) خطاً أساسياً عالمياً.',
            '**قيود توفر النماذج:** نماذج الولايات المتحدة (GPT-5.5 وClaude) غير متاحة في الصين القارية. النماذج الصينية (ERNIE 4.0 وQwen عبر Alibaba Cloud) تحمل فلاتر محتوى CAC مُدمَجة. المؤسسات العاملة في كلا السوقين تحتاج إلى حزمتي نماذج.',
            '**تشرذم إقامة البيانات:** يستلزم كل من GDPR الأوروبي وPIPL الصيني واللوائح القطاعية الأمريكية بقاء البيانات في ولايات قضائية بعينها. تحتاج عمليات النشر العالمية إلى معماريات استنتاج إقليمية لتوجيه بيانات المستخدمين عبر المعالجة المحلية.',
            '**اضطرابات سلسلة توريد الأجهزة:** تركّز TSMC في تايوان وحصة Nvidia البالغة 80% في سوق وحدات معالجة الرسوميات يُفرزان ثغرات في سلسلة التوريد. أي تصعيد جيوسياسي في مضيق تايوان سيؤثر على طاقة تدريب الذكاء الاصطناعي عالمياً. قيود وحدات معالجة الرسوميات الأمريكية على الصين تُثبت أن الوصول إلى الأجهزة قابل للسحب سياسياً.',
          ],
        },

        defEUAIAct: {
          title: 'تعريفات رئيسية',
          items: [
            '**قانون الذكاء الاصطناعي الأوروبي:** أول قانون ملزم قانونياً للذكاء الاصطناعي في العالم، أقرّه البرلمان الأوروبي في 2024. يُصنّف أنظمة الذكاء الاصطناعي بحسب المخاطر ويسري على أي مؤسسة تخدم مستخدمي الاتحاد الأوروبي.',
            '**GPAI (ذكاء اصطناعي للأغراض العامة):** نماذج ذكاء اصطناعي قادرة على أداء مجموعة واسعة من المهام (GPT-5.5 وClaude وGemini). بموجب قانون الذكاء الاصطناعي الأوروبي، يجب على نماذج GPAI نشر وثائق الشفافية والامتثال لقانون حقوق الملكية الفكرية في الاتحاد الأوروبي.',
            '**تأثير بروكسل:** ميل لوائح الاتحاد الأوروبي إلى أن تصبح معايير عالمية فعلية لأن الشركات متعددة الجنسيات تُطبّق المعيار الأكثر صرامة على مستوى العالم بدلاً من الحفاظ على هياكل امتثال منفصلة.',
            '**CAC (إدارة الفضاء الإلكتروني الصيني):** الجهة التنظيمية الصينية التي تشرف على خدمات الذكاء الاصطناعي التوليدي. تستلزم تقييمات أمنية قبل الإطلاق وتُطبّق فلاتر المحتوى.',
            '**PIPL (قانون حماية المعلومات الشخصية الصيني):** مكافئ GDPR الصيني. يشترط بقاء البيانات الشخصية للمستخدمين الصينيين في الصين أو إخضاعها لتقييم أمني حكومي قبل النقل عبر الحدود.',
            '**NIST AI RMF:** إطار إدارة مخاطر الذكاء الاصطناعي التابع للمعهد الوطني الأمريكي للمعايير والتقنية. طوعي. دليل الحوكمة الأكثر اعتماداً في مجال الذكاء الاصطناعي في الولايات المتحدة.',
            '**تأثير بروكسل:** راجع تأثير بروكسل.',
            '**قانون CHIPS:** قانون أمريكي (2022) بقيمة 52 مليار دولار لدعم تصنيع أشباه الموصلات محلياً وتقليل الاعتماد على TSMC.',
          ],
        },

        commonMistakes: {
          title: 'الأخطاء الشائعة',
          mistakes: [
            {
              mistake: 'افتراض أن قانون الذكاء الاصطناعي الأوروبي لا يسري لأن الشركة ليست مقرّها في الاتحاد الأوروبي',
              problem: 'يسري قانون الذكاء الاصطناعي الأوروبي على أي ذكاء اصطناعي يصل إلى مستخدمي الاتحاد الأوروبي — بصرف النظر عن موقع الشركة. تأثير بروكسل يجعل موردي الولايات المتحدة وآسيا خاضعين للقانون إذا كانوا يخدمون مستخدمي الاتحاد الأوروبي.',
              fix: 'دقّق جميع عمليات نشر الذكاء الاصطناعي لتحديد ما إذا كانت تخدم أي مستخدم في الاتحاد الأوروبي. إذا كان الأمر كذلك، طبّق متطلبات قانون الذكاء الاصطناعي الأوروبي على تلك العمليات بصرف النظر عن موقع الشركة.',
            },
            {
              mistake: 'استخدام نماذج الولايات المتحدة (GPT-5.5 وClaude) لمستخدمي الصين القارية دون معمارية بديلة',
              problem: 'النماذج الأمريكية غير متاحة في الصين القارية دون VPN، وهو غير قانوني للاستخدام التجاري. ستفشل الخدمات المبنية على هذه النماذج لمستخدمي الصين القارية.',
              fix: 'انشر معمارية ثنائية المنصة: نماذج أمريكية للمستخدمين الدوليين، Qwen 3 أو ERNIE 4.0 عبر Alibaba Cloud لمستخدمي الصين. وجّه الطلبات بناءً على كشف موقع المستخدم.',
            },
            {
              mistake: 'التعامل مع أخطاء فلاتر CAC كأخطاء HTTP قياسية',
              problem: 'تُعيد فلاتر CAC HTTP 200 مع `is_safe: 0` — لا HTTP 4xx. التطبيقات التي تتحقق فقط من رموز حالة HTTP ستُغفل حجب محتوى CAC وتعرض ردوداً فارغة أو أخطاء محيّرة.',
              fix: 'أضف معالجة صريحة لـ`is_safe: 0` في جميع استدعاءات API لنماذج الصين. اعرض رسالة مُتحكَّماً فيها للمستخدم عند تفعيل فلتر CAC.',
            },
            {
              mistake: 'اعتبار الامتثال لـGDPR كافياً لمتطلبات الذكاء الاصطناعي في الاتحاد الأوروبي',
              problem: 'يُضيف قانون الذكاء الاصطناعي الأوروبي التزامات تتجاوز GDPR لتطبيقات الذكاء الاصطناعي. للذكاء الاصطناعي عالي المخاطر (الموارد البشرية والائتمان والصحة)، يستلزم القانون تقييمات مطابقة ووثائق الإشراف البشري والتسجيل — وهذا يتجاوز التزامات GDPR القائمة.',
              fix: 'تعامل مع GDPR وقانون الذكاء الاصطناعي الأوروبي كإطارين منفصلين متداخلين. دقّق تطبيقات الذكاء الاصطناعي تحت كليهما: GDPR (حماية البيانات والأساس القانوني وDPIA) وقانون الذكاء الاصطناعي الأوروبي (تصنيف المخاطر ومتطلبات كل مستوى).',
            },
          ],
        },

        globalPowerCompetition: {
          title: 'الذكاء الاصطناعي والتنافس على القوة العالمية',
          content: [
            '**الذكاء الاصطناعي الآن بُعد رئيسي في التنافس بين القوى الكبرى — يُشكّل هياكل التحالفات وسياسة تصدير التكنولوجيا والقواعد التي تحكم التجارة الدولية في أنظمة الذكاء الاصطناعي.** التنافس ليس ثنائياً بحتاً (الولايات المتحدة مقابل الصين)؛ بل يضم قطباً ثالثاً في الاتحاد الأوروبي وأرضاً وسطاً متنازعاً من دول عدم الانحياز وسلسلة من المنتديات متعددة الأطراف (G7 وG20 والأمم المتحدة ومنظمة التعاون الاقتصادي والتنمية) تُنتج أطر حوكمة متنافسة.',
            'للمؤسسات العاملة دولياً، يُفرز التنافس على القوة العالمية في الذكاء الاصطناعي أربعة مخاطر عملية: الامتثال لضوابط التصدير وقيود المشتريات ومتطلبات سيادة البيانات والتشرذم التنظيمي.',
          ],
          items: [
            '**حوكمة الذكاء الاصطناعي القائمة على التحالفات:** نسّقت الولايات المتحدة ضوابط تصدير الذكاء الاصطناعي مع الدول الحليفة بما فيها هولندا (ضوابط الطباعة الضوئية لـASML) واليابان (قيود تصدير الرقائق المتقدمة) والمملكة المتحدة (تعاون معهد سلامة الذكاء الاصطناعي). هذا يُنشئ "تحالف ذكاء اصطناعي" غير رسمي بقواعد وصول مشتركة للتكنولوجيا.',
            '**الدول غير المنحازة:** تستثمر الهند والبرازيل والإمارات العربية المتحدة والمملكة العربية السعودية في قدرة ذكاء اصطناعي محلية لتفادي الاعتماد على البنية التحتية الأمريكية أو الصينية للذكاء الاصطناعي. مبادرة BharatGPT الهندية ونموذج Falcon الإماراتي مثالان على استراتيجيات سيادة ذكاء اصطناعي مقصودة.',
            '**الحوكمة متعددة الأطراف:** عملية AI هيروشيما لمجموعة G7 (2023) وتقرير الهيئة الاستشارية للذكاء الاصطناعي للأمم المتحدة (2024) ومبادئ الذكاء الاصطناعي لمنظمة التعاون الاقتصادي والتنمية تمثّل مسارات حوكمة دولية موازية — جميعها طوعية، وجميعها تتنافس مع النهج الملزم قانونياً للاتحاد الأوروبي.',
          ],
        },

        qaWhatIsAIGeopolitics: {
          title: 'ما هي جيوسياسة الذكاء الاصطناعي؟',
          content: [
            'جيوسياسة الذكاء الاصطناعي هي دراسة كيفية تأثير الذكاء الاصطناعي في علاقات القوة العالمية بين الدول — بما فيها التنافس الاقتصادي والقدرات العسكرية والنفوذ التنظيمي والقيادة التكنولوجية. تشمل ثلاثة تنافسات متزامنة: أي الدول تبني النماذج الأكثر قدرة، وأي الأطر التنظيمية تحكم النشر العالمي للذكاء الاصطناعي، وأي الدول تتحكم في سلاسل توريد أشباه الموصلات التي تُتيح الذكاء الاصطناعي الحدودي. للمؤسسات، تحدد جيوسياسة الذكاء الاصطناعي الأدوات المسموح بها قانونياً وأين يمكن معالجة البيانات وأي الموردين ينطوي على مخاطر في المشتريات.',
          ],
        },

        qaWhoIsWinning: {
          title: 'من يتصدّر السباق العالمي للذكاء الاصطناعي؟',
          content: [
            'تتصدر الولايات المتحدة في قدرة النماذج الحدودية — GPT-5.5 (OpenAI) وClaude (Anthropic) وGemini (Google DeepMind) — وفي الاستثمار الخاص في الذكاء الاصطناعي (67 مليار دولار في 2023 وفق بيانات منظمة التعاون الاقتصادي والتنمية). تتصدر الصين في تقديم براءات اختراع الذكاء الاصطناعي وحجم النشر الموجَّه حكومياً وتطوير النماذج المحلية؛ بارز DeepSeek R1 بمنافسة GPT-5.5 في معايير رئيسية في يناير 2025. يتصدر الاتحاد الأوروبي في تنظيم الذكاء الاصطناعي — قانون الذكاء الاصطناعي الأوروبي هو الإطار المرجعي العالمي — لكنه يتأخر في قدرة النماذج الحدودية والاستثمار الخاص قياساً بحجمه الاقتصادي. لا أحد يتصدر الأبعاد الثلاثة في آنٍ واحد.',
          ],
        },

        qaWhatIsBrusselsEffect: {
          title: 'ما هو تأثير بروكسل في مجال الذكاء الاصطناعي؟',
          content: [
            'يصف تأثير بروكسل كيف تصبح لوائح الاتحاد الأوروبي معايير عالمية فعلية لأن الشركات متعددة الجنسيات تجد أن تطبيق معيار صارم واحد على مستوى العالم أيسر من الحفاظ على هياكل امتثال منفصلة لكل ولاية قضائية. يسري قانون الذكاء الاصطناعي الأوروبي على أي نظام ذكاء اصطناعي مطروح في السوق الأوروبية أو تصل مخرجاته إلى مستخدمي الاتحاد الأوروبي — مُلزِماً OpenAI وGoogle DeepMind وAnthropic بالامتثال لالتزامات الشفافية الأوروبية في منتجاتهم العالمية، لا في نسخ خاصة بالاتحاد الأوروبي فحسب. الآلية ذاتها حوّلت GDPR إلى معيار عالمي للخصوصية.',
          ],
        },

        qaHowChinaRegulates: {
          title: 'كيف تنظّم الصين الذكاء الاصطناعي؟',
          content: [
            'تنظّم الصين الذكاء الاصطناعي عبر إدارة الفضاء الإلكتروني (CAC). يُلزم نظام التوصيات الخوارزمية (2022) بوضع علامات على المحتوى المُنظَّم خوارزمياً. تشترط تدابير الذكاء الاصطناعي التوليدي (2023) تقييم أمني من CAC — عملية تستغرق 45–90 يوماً — قبل إطلاق أي خدمة ذكاء اصطناعي تولیدي موجّهة للمستهلك في الصين، وتُلزم بمواءمة مخرجات الذكاء الاصطناعي مع "القيم الاشتراكية الجوهرية". النماذج الأجنبية (GPT-5.5 وClaude وGemini) غير متاحة من الصين القارية دون أدوات تحايل. البدائل المحلية تشمل Alibaba Qwen وBaidu ERNIE 4.0 وByteDance Doubao وDeepSeek.',
          ],
        },

        qaWhatEUAIActRequires: {
          title: 'ما الذي يستلزمه قانون الذكاء الاصطناعي الأوروبي من المؤسسات؟',
          content: [
            'يُصنّف قانون الذكاء الاصطناعي الأوروبي أنظمة الذكاء الاصطناعي في أربعة مستويات مخاطر مع التزامات متدرّجة. الممارسات المحظورة — التسجيل الاجتماعي من السلطات العامة والمراقبة البيومترية في الوقت الفعلي في الأماكن العامة — محظورة منذ أغسطس 2024. أنظمة الذكاء الاصطناعي عالية المخاطر المُستخدَمة في التوظيف وتقييم الائتمان والرعاية الصحية وإنفاذ القانون تستلزم تقييمات مطابقة ووثائق إشراف بشري والتسجيل في قاعدة بيانات الذكاء الاصطناعي للاتحاد الأوروبي قبل أغسطس 2026. يجب على نماذج الذكاء الاصطناعي للأغراض العامة (GPT-5.5 وClaude وGemini) نشر ملخصات بيانات التدريب والامتثال لقانون حقوق الملكية الفكرية — قواعد سارية منذ أغسطس 2025. يجب على جميع المؤسسات التي تخدم مستخدمي الاتحاد الأوروبي الامتثال بصرف النظر عن موقعها.',
          ],
        },

        qaExportControls: {
          title: 'كيف تؤثر ضوابط تصدير الولايات المتحدة في تطوير الذكاء الاصطناعي؟',
          content: [
            'تُقيّد ضوابط التصدير الأمريكية بيع وحدات معالجة الرسوميات Nvidia المتقدمة — بما فيها A100 وH100 — إلى الصين، بهدف تحديد قدرتها على تدريب نماذج الذكاء الاصطناعي الحدودية. أثبت إطلاق DeepSeek R1 في يناير 2025 حدود هذا النهج: دُرِّب بوحدات معالجة H800 المقيّدة للصين بجزء بسيط من التكلفة المُبلَّغ عنها للنماذج الأمريكية المماثلة، وبارى GPT-5.5 في AIME 2024 وMATH-500 ومعايير HumanEval. ضوابط التصدير أبطأت لكنها لم توقف تطوير الذكاء الاصطناعي الحدودي في الصين.',
          ],
        },

        qaTSMCRole: {
          title: 'ما دور TSMC في جيوسياسة الذكاء الاصطناعي؟',
          content: [
            'تُصنّع TSMC (شركة تايوان لتصنيع أشباه الموصلات) الرقائق المتقدمة التي تُشغّل الذكاء الاصطناعي الحدودي — تُصنَع وحدات معالجة الرسوميات H100 وH200 من Nvidia ووحدات TPU من Google والـNeural Engine من Apple في مصانع TSMC في تايوان. لا شركة أخرى تُصنّع حالياً رقائق عند عقد معالجة مماثلة (3 نانومتر و2 نانومتر) على نطاق واسع. هذا يجعل TSMC نقطة اعتماد وحيدة في البنية التحتية العالمية للذكاء الاصطناعي: تعتمد ضوابط التصدير الأمريكية على امتناع TSMC عن توريد العقد المتقدمة لمصنّعي الرقائق الصينيين، وأي اضطراب في الوضع السياسي لتايوان سيُقلّص فوراً إمدادات أجهزة الذكاء الاصطناعي عالمياً. يموّل قانون CHIPS والعلوم الأمريكي (52 مليار دولار) طاقة التصنيع المحلية للرقائق تحديداً لتقليل هذا الاعتماد.',
          ],
        },

        qaUSEUChinaDifferences: {
          title: 'ما الفروق الرئيسية بين استراتيجيات الذكاء الاصطناعي في الولايات المتحدة والاتحاد الأوروبي والصين؟',
          content: [
            'تختلف استراتيجيات الذكاء الاصطناعي الثلاث الكبرى اختلافاً جوهرياً في الفلسفة والهيكل القانوني والنطاق الدولي. تُعطي الولايات المتحدة الأولوية للابتكار والتنافسية من خلال قيادة القطاع الخاص دون قانون فيدرالي للذكاء الاصطناعي — يطبّق المنظمون القطاعيون القائمون (FTC وFDA وEEOC) صلاحياتهم القائمة على الذكاء الاصطناعي في نطاقاتهم. يُعطي الاتحاد الأوروبي الأولوية لحماية الحقوق الأساسية من خلال إطار قانوني أفقي إلزامي — قانون الذكاء الاصطناعي الأوروبي — يسري خارج الإقليم على أي ذكاء اصطناعي يصل إلى مستخدمي الاتحاد. تُعطي الصين الأولوية للسيطرة الحكومية والتنمية الوطنية من خلال تنظيم إلزامي للمحتوى وتقييمات أمنية قبل الإطلاق يُطبّقها CAC. هذه المناهج متعارضة هيكلياً: يجب على المؤسسات العاملة في الولايات القضائية الثلاث التعامل مع متطلبات متضاربة في آنٍ واحد.',
          ],
        },

        defBrusselsEffect: {
          title: 'تعريف: تأثير بروكسل',
          content: 'الظاهرة التي تُصبح بموجبها لوائح الاتحاد الأوروبي معايير عالمية فعلية لأن الشركات متعددة الجنسيات تُفضّل تطبيق معيار صارم واحد على مستوى العالم على الحفاظ على هياكل امتثال منفصلة لكل ولاية قضائية. أصبح GDPR معياراً عالمياً للخصوصية بفضل تأثير بروكسل. قانون الذكاء الاصطناعي الأوروبي يفعل الشيء ذاته مع الذكاء الاصطناعي: يجب على OpenAI وAnthropic وGoogle الامتثال لمتطلبات قانون الذكاء الاصطناعي الأوروبي في منتجاتهم العالمية، لا في نسخ خاصة بالاتحاد الأوروبي.',
        },

        defHighRiskAI: {
          title: 'تعريف: نظام الذكاء الاصطناعي عالي المخاطر',
          content: 'بموجب قانون الذكاء الاصطناعي الأوروبي، نظام ذكاء اصطناعي قد يُسبّب فشله أو سوء استخدامه أضراراً جسيمة للحقوق الأساسية. أمثلة: الذكاء الاصطناعي المُستخدَم في قرارات التوظيف وتقييم الائتمان والتشخيص الطبي وإنفاذ القانون والوصول إلى الخدمات العامة والتقييم التعليمي. يستلزم الذكاء الاصطناعي عالي المخاطر تقييمات مطابقة ووثائق الإشراف البشري وضوابط جودة بيانات التدريب والتسجيل في قاعدة بيانات الذكاء الاصطناعي للاتحاد الأوروبي قبل النشر.',
        },

        defGPAI: {
          title: 'تعريف: الذكاء الاصطناعي للأغراض العامة (GPAI)',
          content: 'نظام ذكاء اصطناعي مُدرَّب على بيانات واسعة بمعمارية عامة (غير متخصصة وغير قطاعية) قابل للتكيف لمجموعة واسعة من المهام. GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro نماذج GPAI. بموجب قانون الذكاء الاصطناعي الأوروبي، تمتلك نماذج GPAI ذات حوسبة تدريب تتجاوز 10²⁵ FLOP التزامات شفافية تشمل ملخصات بيانات التدريب ووثائق القدرات والامتثال لحقوق الملكية الفكرية.',
        },

        defCAC: {
          title: 'تعريف: إدارة الفضاء الإلكتروني الصيني (CAC)',
          content: 'الجهة التنظيمية الصينية الرئيسية لحوكمة الإنترنت والفضاء الإلكتروني والذكاء الاصطناعي. تُطبّق نظام التوصيات الخوارزمية (2022) وتدابير الذكاء الاصطناعي التوليدي (2023). تشترط تقييمات أمنية قبل إطلاق خدمات الذكاء الاصطناعي التوليدي في الصين، وتفرض فلاتر محتوى تحجب انتقادات الحزب الشيوعي والمواضيع ذات الحساسية السياسية، ويمكنها إلزام موردي الذكاء الاصطناعي بالإفصاح عن بياناتهم.',
        },

        defDataSovereignty: {
          title: 'تعريف: سيادة البيانات',
          content: 'مبدأ مفاده أن البيانات تخضع لقوانين الدولة التي توجد فيها أو تُولَد، وأن المؤسسات قادرة على الاحتفاظ بسيطرة كاملة على البيانات دون نقلها إلى ولايات قضائية أجنبية. يُعامل GDPR الأوروبي وقانون الذكاء الاصطناعي الأوروبي سيادة البيانات متطلباً للامتثال: يجب أن تمتثل معالجة البيانات الشخصية لقانون الاتحاد الأوروبي حتى لو جرت المعالجة خارجه إذا كان أصحاب البيانات مقيمين في الاتحاد الأوروبي.',
        },

        defAlgorithmRecs: {
          title: 'تعريف: نظام التوصيات الخوارزمية (الصين)',
          content: 'اللائحة الصينية لعام 2022 التي تُلزم المنصات التي تستخدم خوارزميات لتوصية المحتوى بوضع علامات والإفصاح العلني عن التنظيم الخوارزمي. تسري على الشبكات الاجتماعية وخلاصات الأخبار وتوصيات الفيديو ومحركات البحث. تُلزم بمنح المستخدمين خيار إيقاف التوصيات الخوارزمية. يُطبّقها CAC لتعزيز الشفافية والرقابة الحكومية على توزيع المحتوى الخوارزمي.',
        },

        defSCCs: {
          title: 'تعريف: البنود التعاقدية القياسية (SCC)',
          content: 'نماذج عقود مُعتمدة مسبقاً تُصدرها المفوضية الأوروبية تُتيح للمؤسسات نقل البيانات الشخصية من الاتحاد الأوروبي إلى ولايات قضائية غير ملائمة (كالولايات المتحدة والصين) مع ادّعاء الامتثال لـGDPR. تفرض البنود التعاقدية القياسية على مستورد البيانات التزامات تعاقدية بحماية البيانات وفق معايير الاتحاد الأوروبي. فعاليتها موضع جدل: تساءلت محاكم الاتحاد الأوروبي عما إذا كانت تحمي فعلاً من المراقبة الحكومية في الولايات المتحدة ودول أخرى.',
        },

        politicianQuotes: {
          title: 'ما يقوله السياسيون',
          content: [
            '**أصبح الذكاء الاصطناعي موضوعاً سياسياً من الصف الأول في الكتل التنظيمية الثلاثة، ويُصوّره القادة باعتباره مسألة بقاء اقتصادي وقيم ديمقراطية وأمن وطني.** التصريحات أدناه مأخوذة من خطابات رسمية وسجلات برلمانية.',
          ],
        },

        quoteVonDerLeyen: {
          title: '',
          blockquote: 'الذكاء الاصطناعي هو التكنولوجيا المُحدِّدة لعصرنا. يجب على أوروبا أن تُشكّله — لا أن تكتفي بتبنّيه. نريد ذكاءً اصطناعياً يعمل لصالح الناس، لا العكس.',
          blockquoteSource: 'أورسولا فون دير لاين، رئيسة المفوضية الأوروبية — خطاب استراتيجية الذكاء الاصطناعي الأوروبية، 2024',
        },

        quoteVestager: {
          title: '',
          blockquote: 'قانون الذكاء الاصطناعي الأوروبي هو أول إطار قانوني شامل في العالم للذكاء الاصطناعي. يضع الناس وسلامتهم في المقدمة — لا التكنولوجيا فحسب. هكذا يبدو الابتكار المسؤول.',
          blockquoteSource: 'مارغريت فيستاغر، نائبة الرئيس التنفيذي السابقة للمفوضية الأوروبية — البرلمان الأوروبي، مارس 2024',
        },

        quoteBreton: {
          title: '',
          blockquote: 'قانون الذكاء الاصطناعي الأوروبي إنجاز تاريخي. أوروبا هي أول قارة تضع إطاراً قانونياً واضحاً للذكاء الاصطناعي. السلامة والابتكار ليسا نقيضين — يسيران معاً. أثبتنا ذلك للعالم.',
          blockquoteSource: 'تييري بريتون، المفوض الأوروبي السابق للسوق الداخلية — المفوضية الأوروبية، مارس 2024',
        },

        quoteMacron: {
          title: '',
          blockquote: 'تريد فرنسا أن تكون دولة رائدة في الذكاء الاصطناعي في أوروبا. ستستضيف باريس قمة العمل على الذكاء الاصطناعي. نستثمر في ذكاء اصطناعي منفتح وموثوق ومستدام — وندعو العالم للانضمام إلينا.',
          blockquoteSource: 'إيمانويل ماكرون، رئيس فرنسا — الإعلان عن قمة العمل على الذكاء الاصطناعي، 2024',
        },

        quoteSunak: {
          title: '',
          blockquote: 'ستعمل المملكة المتحدة مع شركاء من حول العالم لضمان أمان الذكاء الاصطناعي. بليتشلي بارك هو المكان الذي تبدأ فيه هذه المحادثة — لكنها يجب ألا تنتهي هنا.',
          blockquoteSource: '[ريشي سوناك، رئيس الوزراء البريطاني السابق — قمة أمان الذكاء الاصطناعي، بليتشلي بارك، نوفمبر 2023](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
        },

        quoteScholz: {
          title: '',
          blockquote: 'تريد ألمانيا أن تصبح أحد المراكز الرائدة للذكاء الاصطناعي في أوروبا. نستثمر في البحث في مجال الذكاء الاصطناعي والبنية التحتية الرقمية والأشخاص الذين سيبنون الجيل القادم من الأنظمة الذكية.',
          blockquoteSource: 'أولاف شولتس، المستشار الفيدرالي الألماني السابق — تحديث الاستراتيجية الوطنية للذكاء الاصطناعي، 2024',
        },

        faq: {
          title: 'الأسئلة المتكررة',
          faqs: [
            { q: 'ما هو قانون الذكاء الاصطناعي الأوروبي؟', a: 'قانون الذكاء الاصطناعي الأوروبي هو أول إطار قانوني شامل في العالم للذكاء الاصطناعي، أقرّه البرلمان الأوروبي في مارس 2024 بـ523 صوتاً مؤيداً. يُصنّف أنظمة الذكاء الاصطناعي في أربعة مستويات مخاطر ويسري بدءاً من أغسطس 2026.' },
            { q: 'هل يسري قانون الذكاء الاصطناعي الأوروبي على الشركات خارج الاتحاد الأوروبي؟', a: 'نعم. يسري على أي مؤسسة تطرح أنظمة ذكاء اصطناعي في السوق الأوروبية أو تُستخدم مخرجاتها في الاتحاد الأوروبي. يُسمى هذا تأثير بروكسل.' },
            { q: 'ما الغرامات المترتبة على انتهاك قانون الذكاء الاصطناعي الأوروبي؟', a: 'حتى 35 مليون يورو أو 7% من حجم الأعمال العالمي على الممارسات المحظورة. حتى 15 مليون يورو أو 3% على انتهاكات المخاطر العالية.' },
            { q: 'كيف تؤثر سياسة الذكاء الاصطناعي الأمريكية على المؤسسات العالمية؟', a: 'تعتمد الولايات المتحدة نهجاً قطاعياً بلا قانون فيدرالي للذكاء الاصطناعي. ضوابط تصدير الأجهزة (وحدات معالجة الرسوميات) هي الأداة السياسية الرئيسية ذات التأثيرات العالمية — تُحدّ من وصول الصين إلى وحدات معالجة Nvidia. ألغت إدارة ترامب المرسوم التنفيذي لسلامة الذكاء الاصطناعي في يناير 2025.' },
            { q: 'هل يمكن للمؤسسات الأوروبية استخدام DeepSeek في التطبيقات التجارية؟', a: 'بحذر. يخضع DeepSeek للقانون الصيني الذي يُتيح للسلطات الحكومية الوصول إلى البيانات. أصدرت ألمانيا (BSI) وفرنسا (ANSSI) وهولندا (NCSC) تحذيرات تُقيّد أدوات الذكاء الاصطناعي الصينية للحكومة والبنية التحتية الحيوية. على مؤسسات القطاع الخاص إجراء تقييم أثر النقل بموجب المادة 46 من GDPR.' },
            { q: 'ما وضع الحزمة الرقمية الشاملة وموعد امتثال قانون الذكاء الاصطناعي الأوروبي؟', a: 'حتى مايو 2026، انتهت الجولة الثانية من المفاوضات (28 أبريل 2026) دون توافق. خطّط لـ2 أغسطس 2026 موعداً ملزماً للامتثال للذكاء الاصطناعي عالي المخاطر. لا تفترض أن تأجيل الحزمة الرقمية الشاملة سيُقرَّر.' },
            { q: 'ما أطر حوكمة الذكاء الاصطناعي المُطبَّقة في أمريكا اللاتينية؟', a: 'لا يوجد في أمريكا اللاتينية ما يعادل قانون الذكاء الاصطناعي الأوروبي. تتصدر كولومبيا بـConpes 3975 (2019)، وهي سياسة وطنية للذكاء الاصطناعي مع إرشادات طوعية. تُحرز البرازيل تقدماً في تشريع خاص بالذكاء الاصطناعي. تتوافق معظم الأطر اللاتينية مع مبادئ منظمة التعاون الاقتصادي والتنمية وهي طوعية.' },
          ],
        },

        sources: {
          title: 'المصادر',
          items: [
            '[النص الكامل لقانون الذكاء الاصطناعي الأوروبي (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — النص الرسمي لقانون الذكاء الاصطناعي الأوروبي كما اعتُمد',
            '[إطار NIST لإدارة مخاطر الذكاء الاصطناعي (NIST)](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf) — الدليل الأكثر اعتماداً في حوكمة الذكاء الاصطناعي في الولايات المتحدة',
            '[تدابير الذكاء الاصطناعي التوليدي لـCAC — النص (بالإنجليزية، DigiChina)](https://digichina.stanford.edu/work/translation-measures-for-the-management-of-generative-artificial-intelligence-services-2023) — لوائح الذكاء الاصطناعي التوليدي الصينية (2023) بما فيها متطلبات CAC',
            '[مؤشر Stanford HAI للذكاء الاصطناعي 2024](https://aiindex.stanford.edu/report/) — الاستثمار العالمي في الذكاء الاصطناعي وبيانات الباحثين والمعايير المقارنة المُستخدَمة في هذا المقال',
            '[قانون CHIPS والعلوم — النص الكامل (Congress.gov)](https://www.congress.gov/bill/117th-congress/house-bill/4346) — تشريع أمريكي بـ52 مليار دولار لتصنيع أشباه الموصلات محلياً',
            '[مدوّنة قواعد سلوك عملية AI هيروشيما — G7 (أكتوبر 2023)](https://www.meti.go.jp/press/2023/10/20231030002/20231030002-1.pdf) — 11 مبدأً طوعياً لمطوّري الذكاء الاصطناعي المتقدمين اعتمدته دول G7',
            '[المصدر المفتوح مقابل النماذج الملكية](/prompt-engineering/open-source-vs-proprietary-llms) — كيف يؤثر امتثال قانون الذكاء الاصطناعي الأوروبي ومتطلبات سيادة البيانات في اختيار الأوزان المفتوحة مقابل API',
            '[قيود الذكاء الاصطناعي: ما لا تستطيع النماذج اللغوية الكبيرة فعله](/prompt-engineering/ai-limitations-what-llms-cant-do) — قيود القدرة ذات الصلة بتقييمات أنظمة الذكاء الاصطناعي عالية المخاطر بموجب قانون الذكاء الاصطناعي الأوروبي',
            '[حقن الأوامر والأمان](/prompt-engineering/prompt-injection-and-security) — ثغرات أمنية تعالجها الاستراتيجيات الوطنية للذكاء الاصطناعي وقانون الذكاء الاصطناعي الأوروبي في متطلبات الأنظمة عالية المخاطر',
            '[هلوسة الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي معلومات](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — مشاكل الموثوقية الجوهرية لوثائق قانون الذكاء الاصطناعي الأوروبي عالية المخاطر ومتطلبات الإشراف البشري',
            '[RAG شرحاً](/prompt-engineering/rag-explained) — كيف يعالج التوليد المعزز بالاسترجاع مخاوف قطع المعرفة والهلوسة في عمليات نشر الذكاء الاصطناعي المنظّمة',
          ],
        },

        relatedReading: {
          title: 'قراءة ذات صلة',
          items: [
            '[النماذج مفتوحة المصدر مقابل الملكية](/ar/prompt-engineering/open-source-vs-proprietary-llms) — كيف يؤثر امتثال قانون الذكاء الاصطناعي الأوروبي ومتطلبات سيادة البيانات في اختيار الأوزان المفتوحة مقابل API',
            '[قيود الذكاء الاصطناعي: ما لا تستطيع النماذج اللغوية الكبيرة فعله](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) — قيود القدرة ذات الصلة بتقييمات الأنظمة عالية المخاطر بموجب قانون الذكاء الاصطناعي الأوروبي',
            '[حقن الأوامر والأمان](/ar/prompt-engineering/prompt-injection-and-security) — ثغرات أمنية تعالجها الاستراتيجيات الوطنية وقانون الذكاء الاصطناعي الأوروبي في متطلبات الأنظمة عالية المخاطر',
            '[هلوسة الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي معلومات](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — مشاكل الموثوقية الجوهرية لوثائق عالية المخاطر ومتطلبات الإشراف البشري',
            '[RAG شرحاً](/ar/prompt-engineering/rag-explained) — كيف يعالج التوليد المعزز بالاسترجاع قطع المعرفة في عمليات النشر المنظّمة',
            '[GDPR والذكاء الاصطناعي: التزامات الامتثال](/ar/prompt-engineering/gdpr-and-ai-compliance) — كيف يتشابك قانون حماية البيانات الأوروبي مع قانون الذكاء الاصطناعي الأوروبي لإنشاء متطلبات امتثال متعددة الطبقات',
          ],
        },
      },
    },

    fr: {
      theme: 'Policy & Compliance',
      title: 'Géopolitique et IA : Comment l\'UE, les États-Unis et la Chine rivalisent pour la domination de l\'IA',
      intro: 'Les États-Unis, la Chine et l\'Union européenne poursuivent des visions incompatibles de la gouvernance de l\'IA. Pour les organisations déployant l\'IA, ces différences se traduisent par des obligations de conformité concrètes, des contraintes d\'approvisionnement et des exigences de résidence des données.',
      metaDescription: 'EU AI Act, contrôles US, CAC Chine : impacts sur achats IA, résidence de données et disponibilité des modèles 2026. Trois cadres incompatibles expliqués.',
      seoTitle: 'Géopolitique IA 2026 : EU AI Act vs USA vs Chine',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '16 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Géopolitique de l\'IA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/geopolitics-and-ai',
        headline: 'Géopolitique et IA : Comment l\'UE, les États-Unis et la Chine rivalisent pour la domination de l\'IA',
        description: 'Les États-Unis, la Chine et l\'Union européenne poursuivent des visions incompatibles de la gouvernance de l\'IA. Pour les organisations déployant l\'IA, ces différences se traduisent par des obligations de conformité concrètes, des contraintes d\'approvisionnement et des exigences de résidence des données.',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        keywords: ['géopolitique IA', 'loi IA UE', 'CHIPS Act', 'régulation IA', 'stratégie IA Chine', 'Brussels Effect', 'gouvernance IA', 'DeepSeek', 'Institut Sécurité IA', 'Made in China 2025', 'KI Gesetz', 'régulation IA Europe', 'gouvernance IA UE', 'regolamento intelligenza artificiale', 'régulation de l\'IA', 'KI-Regulierung', '人工知能規制', 'AI中国战略'],
        teaches: [
          'Comment la loi IA de l\'UE classe les risques et quels délais s\'appliquent',
          'Ce que chaque pays européen (individuel ou non-UE) fait sur l\'IA',
          'Comment les stratégies US et chinoises diffèrent de l\'approche UE',
          'Ce que le Brussels Effect signifie pour les organisations non-UE utilisant les outils IA',
          'Comment la compétition géopolitique façonne la disponibilité des modèles IA et les décisions d\'approvisionnement',
        ],
        about: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'China' },
          { '@type': 'Organization', name: 'European Union' },
          { '@type': 'Thing', name: 'EU AI Act' },
          { '@type': 'Thing', name: 'Artificial intelligence regulation' },
          { '@type': 'Thing', name: 'Brussels Effect' },
          { '@type': 'Thing', name: 'AI geopolitics' },
          { '@type': 'Organization', name: 'NVIDIA' },
          { '@type': 'Organization', name: 'TSMC' },
          { '@type': 'Organization', name: 'European Commission' },
          { '@type': 'Organization', name: 'Cyberspace Administration of China' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'OpenAI' },
          { '@type': 'Organization', name: 'Google DeepMind' },
          { '@type': 'Organization', name: 'Anthropic' },
          { '@type': 'Organization', name: 'Alibaba' },
          { '@type': 'Organization', name: 'Baidu' },
          { '@type': 'Organization', name: 'DeepSeek' },
          { '@type': 'Organization', name: 'Mistral AI' },
          { '@type': 'Thing', name: 'CHIPS and Science Act' },
          { '@type': 'Thing', name: 'Made in China 2025' },
          { '@type': 'Thing', name: 'Hiroshima AI Process' },
          { '@type': 'Person', name: 'Ursula von der Leyen' },
          { '@type': 'Person', name: 'Emmanuel Macron' },
          { '@type': 'Person', name: 'Rishi Sunak' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/geopolitics-and-ai', width: 1200, height: 630 },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Qu\'est-ce que la loi IA de l\'UE ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'La loi IA de l\'UE est le premier cadre legal complet au monde sur l\'intelligence artificielle, adoptee par le Parlement europeen en mars 2024 avec 523 voix pour. Elle classe les systemes d\'IA en quatre niveaux de risque — Inacceptable, Eleve, Limite et Minimal — avec des exigences et amendes differentes. L\'application complete entre en vigueur en aout 2026.' } },
          { '@type': 'Question', 'name': 'La loi IA de l\'UE s\'applique-t-elle aux entreprises hors UE ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. La loi IA de l\'UE s\'applique a toute organisation qui commercialise des systemes d\'IA dans l\'UE ou dont les resultats d\'IA sont utilises dans l\'UE, independamment du siege de l\'organisation. Cette portee extraterritoriale, appelee effet Bruxelles, oblige les fournisseurs americains et asiatiques a se conformer s\'ils servent des utilisateurs europeens.' } },
          { '@type': 'Question', 'name': 'Quelles sont les amendes en cas de violation de la loi IA de l\'UE ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Les amendes atteignent jusqu\'a 35 millions d\'euros ou 7 % du chiffre d\'affaires mondial annuel pour les pratiques d\'IA interdites. Les violations liees a l\'IA a haut risque entrainent des amendes jusqu\'a 15 millions d\'euros ou 3 % du chiffre d\'affaires. Les informations incorrectes transmises aux autorites coutent jusqu\'a 7,5 millions d\'euros ou 1 % du chiffre d\'affaires.' } },
          { '@type': 'Question', 'name': 'Quelles applications d\'IA l\'UE interdit-elle formellement ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'La loi IA de l\'UE interdit : les systemes de notation sociale par les autorites publiques, la surveillance biometrique en temps reel dans les espaces publics (avec exceptions etroites), les IA exploitant des vulnerabilites cognitives, et la collecte non ciblee d\'images faciales sur internet pour creer des bases de donnees de reconnaissance.' } },
          { '@type': 'Question', 'name': 'En quoi la reglementation americaine de l\'IA differe-t-elle de l\'approche europeenne ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Les Etats-Unis adoptent une approche sectorielle et volontaire — les regulateurs existants (FTC, FDA, CFPB, EEOC) appliquent leurs mandats a l\'IA dans leurs domaines. Il n\'existe pas de loi federale sur l\'IA equivalente a la loi UE. Le decret Biden sur la securite de l\'IA (octobre 2023) a ete revoque par l\'administration Trump en janvier 2025.' } },
          { '@type': 'Question', 'name': 'L\'IA chinoise est-elle aussi avancee que l\'IA americaine ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1 (janvier 2025) a egale GPT-5.5 sur plusieurs benchmarks (AIME 2024, MATH-500, HumanEval) tout en se formant apparemment a une fraction du cout. Les modeles chinois de pointe — Qwen d\'Alibaba et ERNIE de Baidu — sont competitifs sur de nombreuses taches mais restent en retrait sur le raisonnement multilingue et les benchmarks de securite.' } },
          { '@type': 'Question', 'name': 'Les entreprises europeennes peuvent-elles utiliser GPT-5.5 et Claude sous la loi IA ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, pour la plupart des applications professionnelles. GPT-5.5 et Claude sont classifies comme IA a usage general (GPAI). Les entreprises europeennes doivent cependant assumer leurs propres obligations de diligence, notamment pour les applications a haut risque comme les decisions RH, l\'octroi de credit ou les infrastructures critiques.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce que l\'UK AI Safety Institute (AISI) ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'AISI a ete cree en novembre 2023 comme premiere agence gouvernementale de securite IA au monde. Il effectue des tests pre-deploiement sur les modeles frontier, a signe des memorandums avec OpenAI, Anthropic, Google DeepMind et Meta, et coordonne les standards de securite internationaux.' } },
          { '@type': 'Question', 'name': 'Comment DeepSeek modifie-t-il la geopolitique de l\'IA ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1 a prouve que des capacites IA frontier sont atteignables avec beaucoup moins de puissance de calcul, et que les controles a l\'exportation des puces Nvidia seuls sont insuffisants. Ces resultats ont pousse les legislateurs americains a reexaminer la politique d\'exportation de puces et accelere les investissements europeens dans des infrastructures IA souveraines.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce que l\'effet Bruxelles dans l\'IA ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'effet Bruxelles decrit le phenomene par lequel la reglementation de l\'UE devient de facto un standard mondial, car les entreprises globales adaptent leurs produits aux regles europeennes plutot que de maintenir des versions multiples. Pour l\'IA, cela signifie que la loi IA de l\'UE cree des obligations de conformite pour les fournisseurs americains et asiatiques qui servent des utilisateurs europeens.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce que le processus IA d\'Hiroshima ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Le processus IA d\'Hiroshima a ete lance lors du sommet du G7 en 2023 et a developpe des principes directeurs internationaux pour l\'IA frontier. Il a abouti au code de conduite IA du G7 — un cadre volontaire pour les fournisseurs de systemes IA avances, avec des engagements sur les tests de securite, la transparence et la gestion des risques.' } },
          { '@type': 'Question', 'name': 'Les organisations europeennes peuvent-elles utiliser DeepSeek pour des usages commerciaux ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Avec prudence. DeepSeek est soumis au droit chinois, qui permet l\'acces des autorites chinoises aux donnees. Les preoccupations ont conduit l\'Italie, l\'Irlande et l\'Allemagne a saisir leurs autorites de protection des donnees. Pour les applications d\'entreprise, les versions open source (DeepSeek R1 en local) ou les fournisseurs bases dans l\'UE sont les options les plus conformes au RGPD.' } },
          { '@type': 'Question', 'name': 'L\'EU AI Act aide-t-il ou nuit-il à la compétitivité de l\'IA en Europe?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'C\'est un dilemme stratégique réel : l\'EU AI Act peut ralentir les startups IA européennes mais renforce la crédibilité réglementaire de l\'Europe mondialement. D\'un côté, les coûts de conformité et les évaluations créent des frictions pour les entreprises européennes — Mistral AI français est plus contraint que les concurrents américains. De l\'autre, l\'effet Bruxelles signifie que le cadre réglementaire de l\'UE devient le standard mondial, donnant aux entreprises basées en UE un avantage compétitif en conformité et à l\'UE un levier sur les géants technologiques US/chinois.' } },
          { '@type': 'Question', 'name': 'Comment la capacité informatique de l\'Europe se compare-t-elle aux États-Unis et à la Chine?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'Europe accuse un retard important. Les États-Unis dominent la fabrication de GPU (Nvidia ~80 % part de marché) et le silicium personnalisé. La Chine fabrique chez TSMC (Taïwan) et utilise des GPU Nvidia restreints. L\'Europe n\'a pas d\'équivalent : ASML (Pays-Bas) fabrique des équipements mais ne possède pas de fabs. L\'EU Chips Act (43 milliards d\'euros) vise à construire des fabs Intel et TSMC, mais aucune ne sera opérationnelle avant 2027–2029. C\'est la vulnérabilité centrale de l\'Europe : l\'entraînement de modèles frontier nécessite des milliers de GPU pendant des mois. Sans fab nationale, l\'Europe dépend de l\'approvisionnement US (Nvidia) et taïwanais (TSMC).' } },
          { '@type': 'Question', 'name': 'Quel est l\'avantage de l\'Europe en matière d\'IA au-delà de la réglementation?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'Europe a trois avantages non-réglementaires : (1) Mistral AI et autres modèles open-source financés par l\'UE offrent des alternatives conformes à GDPR sans dépendance US ou chinoise; (2) L\'Europe mène la recherche en sécurité de l\'IA via le UK AI Safety Institute et les centres de recherche français; (3) La main-d\'œuvre éduquée et le talent logiciel/semi-conducteur donnent un avantage en applications IA et silicium personnalisé. Cependant, aucun ne compense le désavantage en capacité des modèles frontier — les États-Unis mènent sur GPT-5.5 et Claude, la Chine sur l\'échelle et le volume. La stratégie de l\'Europe est faire ce que tu sais bien (sécurité, régulation, éthique) plutôt que de concourir sur la capacité brute.' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : exigences de résidence des données par région (RGPD UE, PIPL Chine, DPDP Inde), sélection de modèles selon le contexte géopolitique, paysage réglementaire de l\'IA dans les grandes juridictions, et liste de contrôle de conformité. Télécharger le PDF comme carte de référence de déploiement géopolitique de l\'IA.',
      sections: {
        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'L\'IA est une technologie stratégique — les États-Unis, la Chine et l\'UE se disputent la domination.',
            'Trois ressources décident du jeu : les puces informatiques, les talents IA, et les données.',
            'L\'IA affecte la puissance militaire, la compétitivité économique, et le pouvoir cyber simultanément.',
            'La loi IA de l\'UE est le premier cadre juridique contraignant au monde — amendes jusqu\'à 35 M€ ou 7 % du CA.',
            'Le Brussels Effect : les règles de l\'UE deviennent les normes mondiales car les entreprises mondiales se conforment.',
            'Les modèles chinois (DeepSeek, Alibaba) s\'améliorent vite, mais restent limités par les contrôles de l\'État.',
            'Les stratégies US et chinoises divergent radicalement : compétition d\'abord vs contrôle d\'État.',
            'Les organisations doivent naviguer trois régimes : conformité UE, approche sectorielle US, et restrictions chinoises.',
          ],
        },
        euImplications: {
          title: 'Pour les organisations en Europe',
          content: [
            'Si vous opérez en UE ou servez des clients européens, la loi IA de l\'UE s\'applique à vous — peu importe où vous êtes basé. Cela signifie conformité obligatoire : audit des risques IA, documentation, tests de non-discrimination, suivi humain pour les systèmes à haut risque.',
            'Les amendes sont substantielles. €35 millions ou 7 % du chiffre d\'affaires mondial pour les pratiques interdites. €15 millions ou 3 % pour les violations en systèmes à haut risque.',
            'Calendrier d\'entrée en vigueur :',
          ],
          numberedItems: [
            'Avril 2024 : interdictions immédiates (reconnaissance faciale non consentie en espaces publics).',
            'Janvier 2025 : obligations haute risque (IA pour embauche, crédit, reconnaissance d\'émotions).',
            'Janvier 2026 : obligations générales (transparence, notification des incidents graves).',
          ],
        },
        promptEngineerTakeaways: {
          title: 'Ce que cela signifie pour les ingénieurs prompt',
          content: [
            'Vous travaillez probablement avec des modèles qui opèrent sous trois régimes légaux différents. Si vous utilisez Claude (Anthropic, US), les exigences US sectorielles s\'appliquent. Si vous utilisez Alibaba Cloud, les contrôles CAC s\'appliquent. Si vous servez l\'UE, la loi IA européenne encadre votre travail.',
            'Cela signifie :',
          ],
          items: [
            'Testez les biais : les systèmes IA à haut risque doivent être auditées pour discrimination fondée sur le genre, l\'âge, la race, l\'origine ethnique.',
            'Documentez vos prompts : gardez des traces de qui a approuvé quel prompt, comment il a performé, et pourquoi.',
            'Soyez transparent sur l\'IA : si vous utilisez l\'IA pour décisions critiques (embauche, crédit, contenus générés), les utilisateurs finaux doivent être informés.',
            'Comprenez les limites d\'export : les modèles chinois subissent des restrictions ; les modèles européens envisagent des labels de conformité.',
          ],
        },
        promptOptimizationByRegion: {
          title: 'Optimiser les prompts selon la région',
          content: 'Les stratégies IA divergent par région. Ce qui fonctionne aux US peut être interdit en UE. Voici comment adapter :',
          columns: ['Région', 'Priorité', 'Approche prompt'],
          rows: [
            {
              'Région': 'Union Européenne',
              'Priorité': 'Conformité + droits fondamentaux',
              'Approche prompt': 'Incluez des garde-fous contre la discrimination, la transparence, et l\'auditabilité. Exemple : "Aide-moi à écrire une offre d\'emploi inclusive sans discrimination. Assure-toi d\'inclure des candidats de diverse backgrounds."',
            },
            {
              'Région': 'États-Unis',
              'Priorité': 'Innovation + secteurs spécifiques',
              'Approche prompt': 'Optimisez pour l\'efficacité et la créativité. Peu d\'obstacles généraux. Exemple : "Génère 5 variations créatives d\'une campagne marketing pour maximiser l\'engagement."',
            },
            {
              'Région': 'Chine',
              'Priorité': 'Conformité idéologique + contrôle État',
              'Approche prompt': 'Évitez les sujets sensibles (politique, religion, dissidents). Privilégiez l\'utilité pratique. Exemple : "Aide-moi à optimiser un processus de fabrication pour réduire les coûts de 15 %."',
            },
          ],
        },
        keyStatistics: {
          title: 'Chiffres clés : qui gagne la course IA ?',
          content: 'Ces données illustrent l\'équilibre mondial des forces IA en 2026 :',
          columns: ['Métrique', 'États-Unis', 'Chine', 'UE'],
          rows: [
            {
              'Métrique': 'Investissements en IA (2025)',
              'États-Unis': '~$100 milliards',
              'Chine': '~$50 milliards',
              'UE': '~$20 milliards',
            },
            {
              'Métrique': 'Modèles fondamentaux actifs',
              'États-Unis': 'OpenAI (GPT-5.5), Anthropic (Claude), Google (Gemini), Meta (Llama)',
              'Chine': 'Alibaba (Qwen), Baidu (Ernie), DeepSeek (R1)',
              'UE': 'Mistral AI, Aleph Alpha, Runway',
            },
            {
              'Métrique': 'Puces IA (H100, A100)',
              'États-Unis': 'Monopole quasi-total (NVIDIA, production US/Taiwan)',
              'Chine': 'Huawei Ascend (substitut), accès limité aux puces US',
              'UE': 'Pas de fabrication de pointe ; dépendance à l\'import',
            },
            {
              'Métrique': 'Talent en IA (PhD ML/DL)',
              'États-Unis': '~35 % de la réserve mondiale',
              'Chine': '~28 %',
              'UE': '~15 %',
            },
          ],
        },
        qaWhyStrategic: {
          title: 'Q&A : Pourquoi l\'IA est un enjeu stratégique ?',
          faqs: [
            {
              q: 'Pourquoi les gouvernements investissent-ils des dizaines de milliards en IA ?',
              a: 'L\'IA affecte trois domaines critiques : (1) puissance militaire — IA autonome, warfare cyber, reconnaissance ; (2) productivité économique — qui construit les meilleurs modèles exporte son avantage compétitif ; (3) soft power — les pays qui définissent les normes IA influencent la technologie mondiale.',
            },
            {
              q: 'Qu\'est-ce que le Brussels Effect en matière d\'IA ?',
              a: 'Les règles strictes de l\'UE deviennent normes mondiales car les entreprises mondiales s\'y conforment. Le RGPD de l\'UE a changé la confidentialité des données partout. La loi IA de l\'UE fait de même — si vous opérez en UE, vous appliquez ses règles globalement.',
            },
          ],
        },
        qaWhichCountriesDominate: {
          title: 'Q&A : Qui domine vraiment ?',
          faqs: [
            {
              q: 'Quel pays gagne la course IA en 2026 ?',
              a: 'Pas de vainqueur unique. Les États-Unis dominent les modèles (OpenAI, Anthropic, Google) et les puces (NVIDIA). La Chine excelle en mise en œuvre rapide et déploiement pratique (DeepSeek, recherche vidéo). L\'UE construit une approche réglementaire cohérente (loi IA), lente mais rigoureuse.',
            },
            {
              q: 'Les modèles chinois rattraperont-ils les modèles US ?',
              a: 'Déjà partiellement. DeepSeek R1 offre une performance brute comparable à GPT-5.5, mais sous contrôles gouvernementaux. L\'écart diminue rapidement. L\'enjeu clé : NVIDIA (puces) — sans accès illimité, la Chine reste légèrement en retard.',
            },
          ],
        },
        qaChipsRole: {
          title: 'Q&A : Pourquoi les puces importent tant ?',
          faqs: [
            {
              q: 'Pourquoi NVIDIA et les puces sont-elles au centre de la géopolitique IA ?',
              a: 'Les puces (H100, H200) sont les goulots critiques. Sans elles, vous ne pouvez pas entraîner des modèles fondamentaux. Les États-Unis contrôlent la conception (NVIDIA) et la fabrication (TSMC). La Chine ne peut pas acheter les puces US avancées — elle doit construire ses substituts, plus lents.',
            },
            {
              q: 'Qui fabrique les puces IA ? Peuvent-elles être relocalisées ?',
              a: 'TSMC (Taiwan) fabrique 90+ % des puces avancées au monde. Le CHIPS Act (US) et les initiatives EU veulent relocaliser la fabrication, mais c\'est coûteux (10+ ans, 100+ milliards $). TSMC restera dominante jusqu\'à 2030+.',
            },
          ],
        },
        qaHowAIChangePower: {
          title: 'Q&A : Comment l\'IA change l\'équilibre géopolitique ?',
          faqs: [
            {
              q: 'Comment l\'IA change-t-elle la puissance militaire ?',
              a: 'Trois façons : (1) intelligence — IA analyse les données satellites, prévoit les mouvements ; (2) autonomie — drones autonomes plus rapides que les humains ; (3) cyber — IA lance et défend les attaques. Les nations avec les meilleurs modèles IA obtiennent un avantage asymétrique.',
            },
            {
              q: 'Comment l\'IA affecte-t-elle le commerce et l\'emploi mondialement ?',
              a: 'Les pays avec accès aux meilleurs modèles (US, partiellement Chine) verront une productivité accrue et un déplacement d\'emplois vers les rôles créatifs. Les pays sans accès risquent une divergence de richesse accrue. Le capital et le talent suivent l\'IA.',
            },
          ],
        },
        geopoliticsOfAI: {
          title: 'La géopolitique de l\'IA expliquée',
          content: 'Trois blocs émergent : le bloc américain (US + alliés : UK, Canada, Australie), le bloc chinois (Chine + pays du Belt & Road), et le bloc européen (UE + partenaires régionaux). Chaque bloc poursuit une stratégie différente :',
          items: [
            'Bloc américain : liberté d\'innovation avec garde-fous sectoriels (santé, finance). Export de modèles et de puces ; domination via soft power.',
            'Bloc chinois : contrôle centralisé avec déploiement rapide. L\'État dirige les investissements. Peu d\'export de modèles ; accent sur l\'autosuffisance.',
            'Bloc européen : conformité stricte et droits fondamentaux. Croissance lente mais durable. L\'UE cherche une "souveraineté numérique" via ses propres modèles.',
          ],
        },
        keyEntityRelationships: {
          title: 'Relations clés entre acteurs',
          content: 'La géopolitique de l\'IA tourne autour de quelques relations critiques :',
          items: [
            'NVIDIA ↔ TSMC : NVIDIA conçoit, TSMC fabrique. Les deux sont basées en Occident/Taiwan, donc soumises aux contrôles d\'export US. Cela donne aux États-Unis un levier énorme sur la Chine.',
            'OpenAI ↔ Microsoft : OpenAI innove, Microsoft déploie via Azure. Microsoft a investi $10+ milliards. Les deux sont US, donc alignés sur la stratégie US.',
            'DeepSeek ↔ État chinois : DeepSeek innove, l\'État supervise. La Chine contrôle tout ce qui sort de ses frontières — pas d\'indépendance.',
            'Mistral ↔ UE : Mistral cherche une indépendance européenne. L\'UE soutient, mais Mistral reste petit comparé à OpenAI/DeepSeek.',
            'Anthropic ↔ Google : Google a investi significativement dans Anthropic et a des options de prise de contrôle. Anthropic reste indépendant mais lié à Google stratégiquement.',
          ],
        },
        fiveGeopoliticalDimensions: {
          title: 'Les 5 dimensions de la compétition IA',
          content: 'La course IA se joue selon cinq axes :',
          columns: ['Dimension', 'États-Unis', 'Chine', 'UE'],
          rows: [
            {
              'Dimension': 'Modèles fondamentaux',
              'États-Unis': 'Leader : GPT-5.5, Claude, Gemini. Nouveaux modèles chaque trimestre.',
              'Chine': 'Concurrence accrue : Qwen, Ernie, DeepSeek R1. Recherche active en vidéo et multimodal.',
              'UE': 'Retard significatif. Mistral le plus avancé, mais bien en retrait vs US/Chine.',
            },
            {
              'Dimension': 'Puces IA',
              'États-Unis': 'Monopole : NVIDIA H100/H200, conception. Intel/AMD alternatifs faibles.',
              'Chine': 'Substituts locaux en développement (Huawei Ascend). Effets de coût et de latence.',
              'UE': 'Dépendance complète aux importations. Quelques initiatives (SambaNova, Graphcore).',
            },
            {
              'Dimension': 'Données d\'entraînement',
              'États-Unis': 'Accès à Internet public + données propriétaires (Google, Meta). Avantage : diversité.',
              'Chine': 'Internet filtré. Grande population = données synthétiques massives. Avantage : volume.',
              'UE': 'RGPD restreint l\'accès aux données personnelles. Avantage : confidentialité, désavantage : volume.',
            },
            {
              'Dimension': 'Talent en IA',
              'États-Unis': 'Drains talent mondial vers la Californie. Universités de top niveau (Stanford, MIT, CMU).',
              'Chine': 'Talent domestique et attraction croissante. Universités Tsinghua/Peking de qualité.',
              'UE': 'Fuite vers les US. Universités solides mais moins concentrées. Moins d\'argent VC.',
            },
            {
              'Dimension': 'Régulation',
              'États-Unis': 'Léger : innovation d\'abord, régulation sectorielle. NIST framework optionnel.',
              'Chine': 'Lourd : État supervise tout. CAC approuve chaque déploiement.',
              'UE': 'Lourd mais transparent : loi IA classe risques, exige conformité. Amendes substantielles.',
            },
          ],
        },
        threeWayRace: {
          title: 'La course à trois : US vs Chine vs UE',
          content: 'Chaque région poursuit un objectif différent avec des tactics différentes :',
          items: [
            '**États-Unis** : Domination technologique via innovation rapide. Stratégie : attirer le talent mondial, exporter des modèles, utiliser NVIDIA comme levier géopolitique. Risque : monopole = régulation inévitable.',
            '**Chine** : Autonomie technologique et control interne. Stratégie : substituts locaux, innovation pratique, déploiement rapide, soft power via Belt & Road. Risque : lagging US en brute force ; dépendance TSMC.',
            '**UE** : Souveraineté numérique + droits fondamentaux. Stratégie : règles strictes (loi IA), investissements locaux (Mistral, Hugging Face), RGPD comme fondation. Risque : lenteur, brain drain vers US.',
          ],
        },
        euAiAct: {
          title: 'La loi IA de l\'UE : le cadre le plus strict au monde',
          content: 'La loi IA de l\'UE est la première legislation binding au monde. Elle classe l\'IA en quatre catégories de risque :',
          columns: ['Catégorie', 'Exemples', 'Exigences', 'Pénalités'],
          rows: [
            {
              'Catégorie': 'Interdite (Unacceptable)',
              'Exemples': 'Reconnaissance faciale en temps réel non consentie, notation sociale, manipulation cognitive.',
              'Exigences': 'Interdiction totale.',
              'Pénalités': 'Jusqu\'à €35M ou 7 % CA mondial.',
            },
            {
              'Catégorie': 'Haut risque',
              'Exemples': 'Embauche, évaluation du crédit, reconnaissance d\'émotions, biométrique.',
              'Exigences': 'Audit conformité, documentation complète, test de non-discrimination, suivi humain.',
              'Pénalités': 'Jusqu\'à €15M ou 3 % CA mondial.',
            },
            {
              'Catégorie': 'Risque limité',
              'Exemples': 'Chatbots, générations de contenu IA.',
              'Exigences': 'Transparence (disclosure que le contenu est généré par IA).',
              'Pénalités': 'Jusqu\'à €7M ou 1 % CA mondial.',
            },
            {
              'Catégorie': 'Risque minimal',
              'Exemples': 'Jeux vidéo, filtres spam.',
              'Exigences': 'Aucune obligation spécifique.',
              'Pénalités': 'Aucune (hors fraude).',
            },
          ],
        },
        euMemberStates: {
          title: 'Approches nationales européennes',
          content: 'Chaque pays EU adapte la loi IA à son contexte. Voici les leaders :',
          items: [
            '**France** : Soutien actif à Mistral AI (champion européen). Investissements directs de l\'État pour l\'indépendance numérique. Approche : soft power tech + conformité stricte.',
            '**Allemagne** : Approche pragmatique. Partenariats avec industrie (Siemens, SAP). Accent sur IA appliquée à manufacturing. Moins de focus sur modèles fondamentaux.',
            '**Pays-Bas** : Hugging Face basé ici. Accent sur open-source et communauté. Approche collaborative vs propriétaire.',
            '**Belgique** : Conformité RGPD stricte. Focus sur droits citoyens et protection des données.',
          ],
        },
        franceMistral: {
          title: 'France & Mistral : la réponse européenne',
          content: 'La France a positionné Mistral AI comme son champion technologique IA — similaire à la stratégie chinoise avec DeepSeek. Mistral a levé $640M en 2024 et poursuit une approche open-source + modèles propriétaires.',
          items: [
            'Mistral Large : modèle généraliste concurrençant Claude/GPT-5.5, mais moins performant.',
            'Mistral est soutenu par l\'État français et les investisseurs européens (BPI, Temasek).',
            'Approche : open-source pour l\'écosystème, propriétaire pour les hauts risques (chatbots enterprise).',
            'Défi : attirer le talent et les resources face à la domination US. L\'équipe est petite comparée à OpenAI.',
          ],
        },
        nonEuEurope: {
          title: 'Pays européens non-EU : UK, Suisse, autres',
          content: 'Quelques acteurs clés en dehors de l\'UE poursuivent des stratégies distinctes :',
          items: [
            '**Royaume-Uni** : post-Brexit, approche plus légère que l\'UE. Soutien à DeepMind (Google) et startups locales. Régulation volontaire via NIST-style framework.',
            '**Suisse** : Neutralité. Centre de banking et finance — accent sur IA pour services financiers, conformité stricte. Pas d\'ambitieux nationaux.',
            '**Suède, Finlande** : Strongholds tech (Stockholm syndrome, Helsinki). Focus sur startups et recherche académique, pas modèles fondamentaux.',
          ],
        },
        usStrategy: {
          title: 'Stratégie US : leadership technologique & soft power',
          content: [
            'Les États-Unis poursuivent une stratégie en trois piliers :',
            '**Innovation rapide** : Moins de régulation = iterate vite. OpenAI, Anthropic, Google innovent à vitesse rapide. Modèles publiés chaque trimestre.',
            '**Levier technologique** : Exporter NVIDIA comme point de contrôle. CHIPS Act relocalise la fabrication US. Cela donne aux US le contrôle de qui peut faire de l\'IA (Chine exclue).',
            '**Soft power** : Les modèles US (GPT-5.5, Claude) deviennent les standards mondiaux car ils sont les meilleurs. Cette dominance = influence culturelle et politique.',
            'Risque US : régulation inévitable. À mesure que l\'IA grandit, la pression pour la régulation augmente (antitrust, sécurité, emploi). Les États-Unis pourraient passer du "innovation d\'abord" au "regulation-heavy" comme l\'UE.',
          ],
        },
        chinaStrategy: {
          title: 'Stratégie Chine : autosuffisance & contrôle',
          content: [
            'La Chine poursuit une stratégie en trois piliers :',
            '**Substituts locaux** : Construire des alternatives à NVIDIA (Huawei Ascend), OpenAI (DeepSeek), Google (Baidu). L\'objectif : zéro dépendance US.',
            '**Déploiement rapide** : L\'IA n\'a pas besoin d\'être la meilleure — elle doit être rapide et pratique. DeepSeek V3 n\'est pas mieux que GPT-5.5, mais elle est "assez bonne" et déployée immédiatement.',
            '**Contrôle total** : L\'État approuve chaque modèle, chaque donnée, chaque usage. Cela garantit que l\'IA sert les objectifs de l\'État, pas les individus.',
            'Risque Chine : lagging en innovation brute. Dépendance TSMC (Taiwan) pour les puces avancées. L\'écart avec les États-Unis diminue mais ne disparaîtra pas rapidement.',
          ],
        },
        chinaModelsAccessibility: {
          title: 'Accessibilité des modèles chinois en dehors de la Chine',
          content: [
            'Les modèles chinois (DeepSeek, Alibaba Qwen, Baidu Ernie) s\'exportent lentement hors de la Chine car :',
            'L\'État chinois veut contrôler qui peut utiliser ces modèles — restrictions d\'export implicites.',
            'Les contrats de cloud (Alibaba Cloud, Baidu Cloud) sont optimisés pour le marché intérieur.',
            'Barrière de langue : la plupart des modèles chinois sont optimisés pour le chinois, pas l\'anglais.',
            'Différences de valeurs : les modèles chinois filtrent les contenus que l\'Occident considère libres (politique, religion, dissidents).',
            'Résultat : les utilisateurs occidentaux ont peu d\'accès aux modèles chinois. Cela crée une séparation tech complète entre blocs.',
          ],
        },
        chinaContentFilters: {
          title: 'Filtrage du contenu chinois : ce que les modèles chinois ne peuvent pas dire',
          content: [
            'Les modèles chinois (DeepSeek, Qwen, Ernie) sont soumis à la Cyberspace Administration of China (CAC). Cela signifie que le contenu sortant est filtré pour :',
            'Politique : Pas de critique du Parti communiste, du gouvernement, ou des dirigeants.',
            'Religion : Pas de prosélytisme religieux, pas de critique de l\'athéisme d\'État.',
            'Dissidents : Pas de mentions positives de dissidents, Tibétains, Ouïghours, ou Hong Kong.',
            'Sexualité & genre : Contenu LGBTQ+ limité ou filtré selon les directives gouvernementales.',
            'Violence & armes : Contenu sur la fabrication d\'armes ou la violence politique est interdit.',
            'Résultat : les modèles chinois sont efficaces pour les tâches pratiques (coding, analyse, mathématiques) mais censurés pour les discussions libres.',
          ],
        },
        chinaDataResidencyAPIs: {
          title: 'Résidence des données chinoises & limites API',
          content: [
            'Les services cloud chinois (Alibaba, Baidu, Tencent) doivent respecter des règles strictes sur les données :',
            'Pour les organisations : si vous stockez des données en Chine, l\'État peut y accéder. Cela signifie que vous ne pouvez pas garantir la confidentialité.',
          ],
          items: [
            'Données résidentes : Toutes les données des utilisateurs doivent rester en Chine. Pas d\'export vers d\'autres pays.',
            'Accès gouvernemental : L\'État peut accéder à n\'importe quelles données pour "sécurité publique" (vague intentionnellement).',
            'Clés de chiffrement : L\'État conserve la capacité de déchiffrer toutes les données si nécessaire.',
            'Limites API : Les APIs pour services chinois hors de Chine sont bridées — bande passante faible, latence haute.',
          ],
        },
        regulatoryComparison: {
          title: 'Comparaison réglementaire : EU vs US vs Chine',
          content: 'Voici comment les trois régimes régulent l\'IA :',
          columns: ['Aspect', 'UE', 'États-Unis', 'Chine'],
          rows: [
            {
              'Aspect': 'Philosophie',
              'UE': 'Droits fondamentaux d\'abord',
              'États-Unis': 'Innovation d\'abord',
              'Chine': 'Contrôle d\'État d\'abord',
            },
            {
              'Aspect': 'Loi fédérale',
              'UE': 'Loi IA obligatoire (2024)',
              'États-Unis': 'Aucune loi fédérale IA ; approche sectorielle',
              'Chine': 'CAC regulations (2022-2023) ; algorithmes + IA générative',
            },
            {
              'Aspect': 'Reconnaissance faciale',
              'UE': 'Interdite en espaces publics sans consentement',
              'États-Unis': 'Légale mais polémique ; réglementation municipale',
              'Chine': 'Légale et déployée largement (villes, transports)',
            },
            {
              'Aspect': 'Données personnelles',
              'UE': 'RGPD strict ; consentement requis pour tout usage',
              'États-Unis': 'Sectoriels (HIPAA, CCPA) ; peu de federal protection',
              'Chine': 'PIPL (2021) ; État retient des droits d\'accès',
            },
            {
              'Aspect': 'Amendes max',
              'UE': '€35M ou 7 % CA mondial',
              'États-Unis': 'Aucune IA-spécifique ; FTC poursuit unfair practices',
              'Chine': '¥100k par violation ; suspension de service',
            },
            {
              'Aspect': 'Modèles ouverts',
              'UE': 'Encouragés si conformes',
              'États-Unis': 'Très encouragés ; peu de barrières',
              'Chine': 'Acceptés mais supervisés par l\'État',
            },
          ],
        },
        globalPowerCompetition: {
          title: 'La compétition pour le pouvoir technologique global',
          content: 'Trois scénarios possibles d\'ici 2030 :',
          items: [
            '**Scénario 1 : Domination US** (50% probabilité). Les États-Unis conservent le leadership en modèles fondamentaux via innovation continue, talent, et capital. OpenAI/Anthropic restent ahead. NVIDIA conserve le monopole des puces. Les États-Unis définissent les standards mondiaux.',
            '**Scénario 2 : Équilibre tripolaire** (35% probabilité). Les États-Unis dominent l\'innovation, la Chine maîtrise le déploiement pratique, l\'UE impose la conformité. Trois "internets IA" émergent — peu d\'interopérabilité. Fragmentation technologique globale.',
            '**Scénario 3 : Fragmentation régionale complète** (15% probabilité). Chaque région construit ses propres modèles, données, et infrastructure IA. Zéro collaboration. Cela ralentirait l\'innovation globale mais augmenterait la sécurité/stabilité.',
          ],
        },
        organizationsImplications: {
          title: 'Implications pour les organisations',
          content: [
            'Si vous déployez l\'IA globalement, vous naviguez trois régimes complètement différents :',
            'Stratégie recommandée : trois piles tech distinctes (EU stack, US stack, China stack) ou abstraction complète via API cloud (moins de contrôle mais moins de risque réglementaire).',
            'Les dynamiques géopolitiques qui façonnent la disponibilité des modèles rendent la question open-source vs propriétaire particulièrement pertinente. Pour une comparaison complète de quand l\'open-source gagne et quand les modèles propriétaires valent leur coût, voir [LLMs open source vs propriétaires](https://www.promptquorum.com/fr/prompt-engineering/open-source-vs-proprietary-llms).',
          ],
          items: [
            '**En UE** : conformité obligatoire, audits, documentation, tests de non-discrimination. Coût : 20-30% du budget IA. Bénéfice : légal et éthique.',
            '**Aux US** : peu de contraintes fédérales, mais sectorielles (finance, santé). Coût : bas si non-réglementé. Bénéfice : déploiement rapide.',
            '**En Chine** : approbation gouvernementale requise. Coût : lent et bureaucratique. Bénéfice : marché énorme si approuvé. Risque : l\'État peut tout interrompre.',
          ],
        },
        qaWhatIsAIGeopolitics: {
          title: 'Q&A : Qu\'est-ce que la géopolitique de l\'IA ?',
          faqs: [
            {
              q: 'Qu\'est-ce que la géopolitique de l\'IA ?',
              a: 'C\'est l\'étude de comment la concurrence pour la dominance technologique IA remodèle le pouvoir mondial. Cela inclut : qui contrôle les modèles fondamentaux, qui fabrique les puces, qui a le talent, et qui impose les règles. La géopolitique IA détermine qui prospère et qui décline économiquement, militairement, et culturellement.',
            },
            {
              q: 'Pourquoi ça compte pour moi ?',
              a: 'Parce que vous travaillez probablement avec l\'IA (ou le ferez bientôt), et les règles qui vous encadrent dépendent de où vous êtes et qui contrôle les modèles. Comprendre la géopolitique IA vous aide à anticiper les changements réglementaires, les restrictions d\'accès, et les opportunités.',
            },
          ],
        },
        qaWhoIsWinning: {
          title: 'Q&A : Qui gagne en 2026 ?',
          faqs: [
            {
              q: 'Qui gagne actuellement la course IA ?',
              a: 'Les États-Unis dominent l\'innovation brute (modèles, puces, talent). La Chine excelle au déploiement pratique et à l\'innovation rapide. L\'UE construit une approche de long terme (conformité, indépendance). Aucun vainqueur clair. La course durera des décennies.',
            },
            {
              q: 'Qui aura l\'avantage en 2030 ?',
              a: 'Si les tendances actuelles persistent : États-Unis en modèles fondamentaux, Chine en déploiement, UE en régulation. Mais la technologie se déplace vite. Des surprises arrivent (nouveau leader, nouvelle approche, découverte inattendue).',
            },
          ],
        },
        qaWhatIsBrusselsEffect: {
          title: 'Q&A : Qu\'est-ce que le Brussels Effect ?',
          faqs: [
            {
              q: 'Qu\'est-ce que le Brussels Effect et comment s\'applique-t-il à l\'IA ?',
              a: 'Le Brussels Effect est le phénomène où les régulations strictes de l\'UE deviennent les standards mondiaux car les entreprises mondiales les adoptent. Exemple : RGPD de l\'UE a changé la privacy partout, pas seulement en UE. La loi IA de l\'UE fait de même — si vous opérez globalement, vous appliquez les règles de l\'UE partout pour la simplicité.',
            },
            {
              q: 'Quel est l\'impact sur les startups IA ?',
              a: 'Les startups doivent se préparer aux règles les plus strictes (UE) plutôt que aux moins strictes (US). Cela ralentit l\'innovation mais augmente la conformité. Les startups européennes ont un avantage : elles connaissent déjà les règles strictes.',
            },
          ],
        },
        qaHowChinaRegulates: {
          title: 'Q&A : Comment la Chine régule l\'IA ?',
          faqs: [
            {
              q: 'Quelle est l\'approche réglementaire chinoise pour l\'IA ?',
              a: 'L\'État chinois régule l\'IA via la Cyberspace Administration of China (CAC). Tous les modèles et services doivent être approuvés. L\'approbation dépend de : contenu (pas de politique critique), données (résidence en Chine), et contrôle (l\'État doit pouvoir déchiffrer). C\'est plus restrictif mais plus rapide que l\'UE.',
            },
            {
              q: 'Peux-tu opérer l\'IA en Chine sans État ?',
              a: 'Non. L\'État approuve explicitement chaque modèle et service. Pas d\'approbation = pas d\'opération. Pas de gris zones. C\'est clairement défini mais inflexible.',
            },
          ],
        },
        qaWhatEUAIActRequires: {
          title: 'Q&A : Que demande la loi IA de l\'UE ?',
          faqs: [
            {
              q: 'Qu\'est-ce que la loi IA de l\'UE demande aux organisations ?',
              a: 'La loi IA de l\'UE classe l\'IA par risque et demande : (1) audit de conformité pour tous les systèmes IA ; (2) documentation complète (données, entraînement, tests) ; (3) tests de non-discrimination et de biais ; (4) suivi humain pour les systèmes à haut risque ; (5) notification des incidents graves à l\'autorité.',
            },
            {
              q: 'Combien ça coûte de se conformer ?',
              a: 'Pour une startup : 20-30% du budget IA. Pour une grande org : 10-15% (économies d\'échelle). Cela inclut : audit, documentation, tests, monitoring, legal review. C\'est un coût sans fin (pas juste une fois).',
            },
          ],
        },
        qaExportControls: {
          title: 'Q&A : Contrôles à l\'export et restrictions technologiques',
          faqs: [
            {
              q: 'Quels sont les contrôles à l\'export US sur la technologie IA ?',
              a: 'Les États-Unis contrôlent l\'export de puces IA (NVIDIA H100+) et de certains logiciels vers la Chine via l\'Administration for Export Control (EAC). Cela signifie que la Chine ne peut pas accéder aux puces les plus avancées légalement. La Chine contourne cela en achetant via des intermédiaires ou en construisant ses substituts.',
            },
            {
              q: 'L\'UE a-t-elle des contrôles d\'export similaires ?',
              a: 'L\'UE se coordonne avec les États-Unis via l\'Export Control Regulation (ECR), mais elle est moins stricte. L\'UE n\'interdit pas les puces à la Chine, seulement les technologies militaires. C\'est une faiblesse dans la stratégie occidentale — la Chine peut acheter en UE ce qu\'elle ne peut pas acheter aux US.',
            },
          ],
        },
        qaTSMCRole: {
          title: 'Q&A : Le rôle critique de TSMC',
          faqs: [
            {
              q: 'Pourquoi TSMC est-elle si importante pour la géopolitique IA ?',
              a: 'TSMC (Taiwan Semiconductor Manufacturing Company) fabrique 90%+ des puces les plus avancées au monde, y compris NVIDIA H100. Elle est l\'unique goulot critique. Si TSMC s\'arrête (war, accident, politique), toute l\'industrie IA s\'arrête. C\'est pourquoi les États-Unis soutiennent Taiwan militairement et pourquoi la Chine veut le contrôle politique de Taiwan.',
            },
            {
              q: 'Que se passe-t-il si la Chine prend Taiwan ?',
              a: 'Scénario catastrophique pour l\'Occident. La Chine contrôlerait la production mondiale de puces. Les États-Unis et l\'UE n\'auraient accès aux puces avancées que si la Chine les autorise. C\'est une dépendance stratégique inacceptable. C\'est pourquoi les États-Unis considèrent la défense de Taiwan comme intérêt vital.',
            },
          ],
        },
        qaUSEUChinaDifferences: {
          title: 'Q&A : Différences US/UE/Chine',
          faqs: [
            {
              q: 'Quelles sont les différences clés entre les approches US, UE et Chine sur l\'IA ?',
              a: 'US : Innovation rapide, peu de régulation fédérale, exporte les standards technologiques. UE : Conformité stricte, droits fondamentaux d\'abord, régulation globale (Brussels Effect). Chine : Contrôle d\'État total, approbation requise, filtrage du contenu, données résidentes.',
            },
            {
              q: 'Laquelle est la meilleure approche ?',
              a: 'Dépend de ce que tu values. US = innovation rapide mais risque élevé. UE = lenteur mais sécurité. Chine = contrôle mais censure. Il n\'y a pas de "meilleure" approche — ce sont des trade-offs.',
            },
          ],
        },
        defEUAIAct: {
          title: 'Définition : Loi IA de l\'UE',
          content: 'La loi IA de l\'UE est la première législation fédérale obligatoire au monde qui régule l\'IA. Adoptée en 2024, elle entre progressivement en vigueur (2025-2026). Elle classe l\'IA en quatre catégories de risque (interdite, haut risque, risque limité, minimal) et impose des obligations de conformité correspondantes. Les amendes atteignent €35M ou 7% du chiffre d\'affaires mondial pour violations graves.',
        },
        defBrusselsEffect: {
          title: 'Définition : Brussels Effect',
          content: 'Le Brussels Effect est le phénomène où les régulations strictes de l\'UE deviennent les standards mondiaux car les grandes entreprises mondiales les adoptent pour simplifier. Exemples : RGPD de l\'UE a changé la privacy globalement ; la loi IA de l\'UE influence maintenant les standards d\'IA mondiaux. Le Brussels Effect ne force pas la conformité — il crée des incitations économiques à adopter les règles les plus strictes pour opérer partout.',
        },
        defHighRiskAI: {
          title: 'Définition : IA à Haut Risque',
          content: 'Selon la loi IA de l\'UE, les systèmes IA à haut risque sont ceux qui pourraient avoir un impact significatif sur les droits fondamentaux ou la sécurité. Exemples : IA pour embauche (discrimination), évaluation du crédit (impact financier), reconnaissance d\'émotions (privacy), biométrique (identification). Les systèmes haut risque doivent passer un audit de conformité, être documentés complètement, testés pour la non-discrimination, et être monitorés en continu.',
        },
        defGPAI: {
          title: 'Définition : GPAI (General Purpose AI)',
          content: 'GPAI signifie "General Purpose Artificial Intelligence" — c\'est un modèle fondamental (comme GPT-5.5 ou Claude) capable de performer une large gamme de tâches. Contrairement à une IA spécialisée (qui ne fait qu\'une chose), une GPAI peut être adaptée à de nombreux cas d\'usage. La loi IA de l\'UE impose des obligations légères sur les GPAI mais plus lourdes sur les GPAI "à haut impact" (si elle affecte les droits fondamentaux).',
        },
        defCAC: {
          title: 'Définition : CAC (Cyberspace Administration of China)',
          content: 'La Cyberspace Administration of China est l\'agence gouvernementale chinoise qui régule tout le contenu en ligne, y compris l\'IA. Tous les modèles, chatbots, et services IA doivent être approuvés par le CAC avant déploiement. Le CAC vérifie que : (1) le contenu ne critique pas le gouvernement/Parti communiste ; (2) les données restent en Chine ; (3) l\'État peut accéder aux données si nécessaire. C\'est l\'approche la plus restrictive au monde.',
        },
        defDataSovereignty: {
          title: 'Définition : Data Sovereignty (Souveraineté des données)',
          content: 'La souveraineté des données signifie que les données générées dans un pays sont la propriété/responsabilité de ce pays et soumises à ses lois. Exemple : RGPD de l\'UE exige que les données de citoyens européens soient traitées selon les lois de l\'UE, où qu\'elles soient stockées. La loi chinoise PIPL exige que les données chinoises restent physiquement en Chine. La souveraineté des données crée des fragmentations technologiques — différents pays/régions ont des règles différentes.',
        },
        defAlgorithmRecs: {
          title: 'Définition : Algorithm Recommendations (Recommandations algorithmiques)',
          content: 'Les recommandations algorithmiques sont les suggestions automatiques générées par l\'IA (ex : "Vous pourriez aussi aimer..."). La loi IA de l\'UE classe les systèmes de recommandation comportementale (qui adaptent les recommandations basées sur le profil utilisateur) comme "à haut risque" car ils peuvent manipuler le comportement. La loi demande : (1) transparence (dire à l\'utilisateur que les recos sont algorithmiques) ; (2) option de désactiver (permettre à l\'utilisateur de voir des recos non-personnalisées) ; (3) audit de non-manipulation.',
        },
        defSCCs: {
          title: 'Définition : SCCs (Standard Contractual Clauses)',
          content: 'Les Standard Contractual Clauses sont des contrats approuvés par l\'UE qui permettent le transfert de données personnelles hors de l\'UE tout en respectant le RGPD. Exemple : si vous hébergez des données de clients européens sur AWS (États-Unis), vous devez utiliser des SCCs pour vous assurer que AWS respecte le RGPD. Les SCCs sont essentiels pour le cloud computing international. Après les critiques de Schrems II, les SCCs sont maintenant plus strictes et plus chères à implémenter.',
        },
        politicianQuotes: {
          title: 'Ce que les leaders disent sur l\'IA géopolitique',
          content: 'Voici les prises de position clés des leaders mondiaux sur l\'IA et la géopolitique :',
        },
        quoteVonDerLeyen: {
          title: 'Ursula von der Leyen (Présidente Commission Européenne)',
          blockquote: 'L\'IA est trop importante pour être laissée au seul marché. L\'Europe construira son propre chemin vers l\'IA — fondé sur nos valeurs de démocratie et droits fondamentaux.',
          blockquoteSource: 'Déclaration officielle, 2024',
          content: 'Von der Leyen représente l\'approche européenne : régulation stricte + champion technologique européen (Mistral). Pour elle, l\'IA n\'est pas juste une technologie — c\'est un instrument politique.',
        },
        quoteVestager: {
          title: 'Margrethe Vestager (Vice-présidente, Compétition Numérique)',
          blockquote: 'Nous ne pouvons pas compter uniquement sur les entreprises US pour notre sécurité technologique. L\'Europe doit investir dans ses propres capacités IA.',
          blockquoteSource: 'Interview, Financial Times, 2024',
          content: 'Vestager souligne la faiblesse européenne : dépendance des technologies US. Elle promeut l\'indépendance technologique via Mistral et autres champions locaux.',
        },
        quoteBreton: {
          title: 'Thierry Breton (Commissaire Industrie)',
          blockquote: 'L\'IA est l\'arme stratégique du 21ème siècle. Sans industrie IA propriétaire, l\'Europe perd sa souveraineté.',
          blockquoteSource: 'Speech au Conseil Européen, 2024',
          content: 'Breton est le plus hawkish sur la géopolitique IA en Europe. Pour lui, l\'Europe doit être un pôle de puissance technologique, pas un consommateur passif.',
        },
        quoteMacron: {
          title: 'Emmanuel Macron (Président Français)',
          blockquote: 'La France investit en Mistral parce que nous croyons que l\'IA doit être souveraine — pas contrôlée par la Californie ou la Chine.',
          blockquoteSource: 'Discours startup, 2024',
          content: 'Macron positionne Mistral comme réponse française à OpenAI et DeepSeek. Pour lui, la souveraineté technologique = indépendance politique.',
        },
        quoteSunak: {
          title: 'Rishi Sunak (ancien PM britannique)',
          blockquote: 'L\'IA est plus importante que le changement climatique pour le futur de l\'humanité. Le Royaume-Uni doit être un leader en sécurité IA.',
          blockquoteSource: 'AI Summit, 2023',
          content: 'Sunak représente l\'approche post-Brexit UK : léger régulation, accent sur la sécurité, partenariat stratégique avec les États-Unis.',
        },
        quoteScholz: {
          title: 'Olaf Scholz (Chancelier allemand)',
          blockquote: 'L\'IA affecte tout — emploi, sécurité, démocratie. L\'Europe doit adapter ses règles, pas les imiter des États-Unis.',
          blockquoteSource: 'Discours gouvernemental, 2024',
          content: 'Scholz souligne que l\'approche européenne est intentionnellement différente de celle des États-Unis — c\'est un choix de valeurs, pas une limitation.',
        },
        faq: {
          title: 'FAQ : Géopolitique de l\'IA',
          faqs: [
            {
              q: 'Pourquoi la géopolitique de l\'IA compte pour moi personnellement ?',
              a: 'Parce que les règles qui encadrent votre travail en IA dépendent de votre localisation et du contrôle des modèles. Si vous êtes en UE, la conformité est obligatoire. Si vous êtes aux US, moins de contraintes. Si vous êtes en Chine, l\'approbation gouvernementale est requise. Comprendre la géopolitique IA vous aide à anticiper les changements et à planifier votre carrière/entreprise.',
            },
            {
              q: 'Quelle technologie IA dominera en 2030 ?',
              a: 'Probablement une combinaison : modèles fondamentaux américains (OpenAI, Anthropic) + déploiement rapide chinois (DeepSeek) + régulation européenne (loi IA). Pas de vainqueur unique. La fragmentation technologique est plus probable que la domination d\'un bloc.',
            },
            {
              q: 'Dois-je m\'inquiéter des restrictions chinoises si je travaille en Occident ?',
              a: 'Seulement si vous utilisez des services cloud chinois (Alibaba, Baidu) ou des modèles chinois. Si vous utilisez OpenAI, Anthropic, ou Google, vous êtes en sécurité. Mais soyez conscient : si vous exportez vers la Chine, les restrictions s\'appliquent.',
            },
            {
              q: 'L\'UE ralentit-elle l\'innovation IA avec sa loi stricte ?',
              a: 'Peut-être un peu (20-30% plus lent que les États-Unis), mais cela pousse aussi vers une IA plus responsable et plus sûre. Le trade-off : innovation rapide vs conformité + éthique. L\'UE choisit le deuxième. C\'est intentionnel, pas une limitation involontaire.',
            },
            {
              q: 'Pourquoi NVIDIA et TSMC sont-elles si stratégiques ?',
              a: 'Parce qu\'elles sont les goulots critiques. Sans puces avancées, vous ne pouvez pas entraîner de modèles fondamentaux. NVIDIA conçoit, TSMC fabrique. Contrôler cela = contrôler qui peut faire de l\'IA. C\'est pourquoi les États-Unis soutiennent NVIDIA et Taiwan si fortement.',
            },
            {
              q: 'Que se passe-t-il si la Chine isolée technologiquement ?',
              a: 'Peut-être une fission technologique complète : "Occident IA" vs "Chine IA". Deux internets IA distincts. Cela serait mauvais pour l\'innovation (moins de collaboration) mais réduirait les tensions géopolitiques. Peu probable mais possible.',
            },
            {
              q: 'Comment Mistral pourrait-elle rivaliser avec OpenAI ?',
              a: 'Difficile. Mistral a moins de capital, moins de talent, moins de données. Son avantage : soutien gouvernemental français/européen + focus sur l\'indépendance. Elle pourrait dominer en Europe mais sera toujours n°2 ou #3 mondialement.',
            },
            {
              q: 'Qu\'est-ce que le Brussels Effect signifie pour mon entreprise IA ?',
              a: 'Si vous opérez globalement, vous devez respecter les règles les plus strictes (UE). C\'est plus coûteux mais plus simple que d\'avoir trois stacks différentes. Le Brussels Effect signifie : conformité UE = conformité mondiale pour la plupart des cas.',
            },
          ],
        },
        sources: {
          title: 'Sources & références',
          items: [
            '[CHIPS and Science Act](https://www.whitehouse.gov/briefing-room/statements-releases/2022/08/09/fact-sheet-chips-and-science-act-will-lower-costs-create-good-paying-jobs-and-strengthen-supply-chains/) — US government initiative to relocate chip manufacturing',
            '[EU AI Act](https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence) — Official EU AI regulation framework',
            '[Cyberspace Administration of China (CAC) Regulations](https://www.cac.gov.cn/) — Chinese AI and content control authority',
            '[GDPR (General Data Protection Regulation)](https://gdpr-info.eu/) — EU data protection framework that influences global privacy standards',
            '[NIST AI Risk Management Framework](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.RMF.1.1.pdf) — US voluntary AI governance framework',
            '[DeepSeek Official Documentation](https://www.deepseek.com/) — Chinese frontier model',
            '[Mistral AI](https://www.mistral.ai/) — European AI foundation model',
            '[NVIDIA H100 Specifications](https://www.nvidia.com/en-us/data-center/h100/) — Leading AI chip for LLM training',
            '[TSMC Annual Report 2024](https://investor.tsmc.com/) — World\'s largest advanced semiconductor manufacturer',
            '[Brussels Effect: How the EU Rules the World](https://www.evoagency.com/the-brussels-effect/) — Concept of EU regulatory influence on global standards',
            '[Made in China 2025 Initiative](http://www.gov.cn/zhengce/2015-05/19/content_2863327.htm) — Chinese strategic technology development plan',
            '[Hiroshima AI Process](https://www.g7.org/articles/ai/) — International G7 AI governance collaboration',
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Prompt Engineering for Compliance & Risk](https://www.promptquorum.com/fr/prompt-engineering/prompt-engineering-vs-rag) — How to build responsible AI systems',
            '[How LLMs Actually Work](https://www.promptquorum.com/fr/prompt-engineering/how-llms-actually-work) — Technical foundation for understanding AI capabilities',
            '[EU AI Act & Compliance](https://www.promptquorum.com/fr/prompt-engineering/prompt-governance-production) — Practical guide to meeting regulatory requirements',
            '[AI Regulation & Policy](https://www.promptquorum.com/fr/prompt-engineering/prompt-security-tools) — Security and governance in production AI systems',
            '[Open Source vs Proprietary LLMs](https://www.promptquorum.com/fr/prompt-engineering/open-source-vs-proprietary-llms) — Comparison of model approaches and dependencies',
          ],
        },
      },
    },
    ja: {
      theme: 'Policy & Compliance',
      title: '地政学とAI：米国、中国、EUのAI支配競争解説（2026年分析）',
      intro: '米国、中国、EUはAIガバナンスに関して相反するビジョンを追求しており、AIを展開する組織にとっては具体的なコンプライアンス義務、調達制約、データ保管要件に直結します。',
      metaDescription: 'AIが地政学を変える2026年。米国セクター別規制、EU AI法、中国CAC戦略を分析。規制フレームワーク、コンプライアンスリスク、グローバル展開への影響を比較解説。',
      seoTitle: 'AI地政学分析2026年：米国・EU・中国戦略解説',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '16分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AI地政学',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/geopolitics-and-ai',
        headline: '地政学とAI：米国、中国、EUのAI支配競争解説（2026年分析）',
        description: '米国、中国、EUはAIガバナンスに関して相反するビジョンを追求しており、AIを展開する組織にとっては具体的なコンプライアンス義務、調達制約、データ保管要件に直結します。',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        keywords: ['AI地政学', 'EU AI法', 'CHIPS法', 'AI規制', '中国AI戦略', 'ブリュッセル効果', 'AI統治', 'DeepSeek', 'AI安全研究所', 'Made in China 2025', 'KI法', 'EU AI規制', 'EU AI統治', '人工知能規則', 'IA規制', 'KI規制', '人工知能規制', 'AI中国戦略'],
        teaches: [
          'EU AI法が危険を分類し、どのような期限が適用されるか',
          '個々のEUおよび非EU欧州諸国がAIで何をしているか',
          '米国と中国の戦略がEUアプローチと異なる方法',
          'ブリュッセル効果が非EU組織がAIツールを使用することを意味する',
          '地政学的競争がAIモデルの利用可能性と調達決定をどう形作るか',
        ],
        about: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'China' },
          { '@type': 'Organization', name: 'European Union' },
          { '@type': 'Thing', name: 'EU AI Act' },
          { '@type': 'Thing', name: 'Artificial intelligence regulation' },
          { '@type': 'Thing', name: 'Brussels Effect' },
          { '@type': 'Thing', name: 'AI geopolitics' },
          { '@type': 'Organization', name: 'NVIDIA' },
          { '@type': 'Organization', name: 'TSMC' },
          { '@type': 'Organization', name: 'European Commission' },
          { '@type': 'Organization', name: 'Cyberspace Administration of China' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'OpenAI' },
          { '@type': 'Organization', name: 'Google DeepMind' },
          { '@type': 'Organization', name: 'Anthropic' },
          { '@type': 'Organization', name: 'Alibaba' },
          { '@type': 'Organization', name: 'Baidu' },
          { '@type': 'Organization', name: 'DeepSeek' },
          { '@type': 'Organization', name: 'Mistral AI' },
          { '@type': 'Thing', name: 'CHIPS and Science Act' },
          { '@type': 'Thing', name: 'Made in China 2025' },
          { '@type': 'Thing', name: 'Hiroshima AI Process' },
          { '@type': 'Person', name: 'Ursula von der Leyen' },
          { '@type': 'Person', name: 'Emmanuel Macron' },
          { '@type': 'Person', name: 'Rishi Sunak' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/geopolitics-and-ai', width: 1200, height: 630 },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'EU AI法とは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'EU AI法は世界初の包括的なAI法規制で、2024年3月に欧州議会で523票の賛成で採択されました。AIシステムを4つのリスクレベル（禁止、高リスク、限定的リスク、最小リスク）に分類し、それぞれ異なる要件と罰則を設けています。完全施行は2026年8月から始まります。' } },
          { '@type': 'Question', 'name': 'EU AI法はEU域外の企業にも適用されますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。EU AI法はEU市場でAIシステムを提供するすべての組織、またはその出力がEU内で使用されるすべての組織に適用されます（所在地に関わらず）。この域外適用は「ブリュッセル効果」と呼ばれ、米国やアジアのAI企業もEUユーザーを対象とする場合はコンプライアンスが必要です。' } },
          { '@type': 'Question', 'name': 'EU AI法違反の罰則はどのくらいですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '禁止されたAI実践に対しては最大3,500万ユーロまたは世界年間売上高の7%の罰金が科されます。高リスクAIの違反は最大1,500万ユーロまたは売上高の3%。当局への虚偽報告は最大750万ユーロまたは売上高の1%の罰金となります。' } },
          { '@type': 'Question', 'name': 'EUが禁止するAI用途はどれですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'EU AI法が禁止するのは：政府機関によるソーシャルスコアリング、公共空間でのリアルタイム生体認証監視（例外あり）、認知的脆弱性を悪用するAI、顔識別データベース構築のためのインターネット上の顔画像の無差別収集です。' } },
          { '@type': 'Question', 'name': '米国のAI規制はEUとどう違いますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '米国はセクター別・任意のアプローチを採用しています。既存の規制機関（FTC、FDA、CFPB、EEOC）が各分野でAIに既存の権限を適用します。EU AI法のような連邦AI法は存在しません。バイデン政権のAI安全性に関する大統領令は2025年1月にトランプ政権によって撤回されました。' } },
          { '@type': 'Question', 'name': '中国のAIは米国のシステムと同等の能力を持っていますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1（2025年1月）は複数のベンチマーク（AIME 2024、MATH-500、HumanEval）でGPT-5.5と同水準を達成し、はるかに低いコストで訓練されたとされています。AlibabaのQwenやBaiduのERNIEなど中国の主要モデルは多くのタスクで競争力がありますが、多言語推論とセキュリティベンチマークでは遅れをとっています。' } },
          { '@type': 'Question', 'name': 'EU企業はAI法の下でGPT-5.5やClaudeを使用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、ほとんどのビジネス用途で使用できます。GPT-5.5とClaudeは汎用AI（GPAI）に分類されます。ただし、EU企業は採用決定、与信、重要インフラなどの高リスク用途には独自のデューデリジェンス義務を果たす必要があります。' } },
          { '@type': 'Question', 'name': 'UK AI Safety Institute（AISI）とは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'AISIは2023年11月に世界初の政府AI安全機関として設立されました。フロンティアモデルのデプロイ前テストを実施し、OpenAI、Anthropic、Google DeepMind、Metaと覚書を締結し、国際的な安全基準の調整を行っています。' } },
          { '@type': 'Question', 'name': 'DeepSeekはAI地政学をどのように変えましたか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek R1は、フロンティアAI能力がはるかに少ない計算資源で達成可能であり、Nvidia製チップの輸出規制だけでは十分なバリアにならないことを証明しました。この衝撃から米国の立法者はチップ輸出政策の再検討を迫られ、欧州ではAI主権インフラへの投資が加速しました。' } },
          { '@type': 'Question', 'name': 'AIにおけるブリュッセル効果とは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ブリュッセル効果とは、EU規制が事実上のグローバルスタンダードとなる現象を指します。グローバル企業は複数バージョンを維持するより製品をEUルールに合わせる方を選ぶためです。AIでは、EU AI法がEUユーザーにサービスを提供する米国・アジアのAIプロバイダーにコンプライアンス要件を課しています。' } },
          { '@type': 'Question', 'name': '広島AIプロセスとは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '広島AIプロセスは2023年のG7サミットで開始され、フロンティアAIの国際的なガイドライン原則を策定しました。G7 AIコード・オブ・コンダクトに帰結し、先進AIシステムのプロバイダーに対し、安全テスト、透明性、リスク管理のコミットメントを定める任意の枠組みを設けています。' } },
          { '@type': 'Question', 'name': 'EU組織はDeepSeekを商業利用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '慎重に判断が必要です。DeepSeekは中国法に従っており、中国当局のデータアクセスが可能です。プライバシー上の懸念からイタリア、アイルランド、ドイツはデータ保護当局に問い合わせを行いました。企業用途ではオープンソース版（DeepSeek R1のローカル実行）またはEUベースのプロバイダーがGDPR適合性の高い選択肢です。' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: '以下のスライドデッキは次をカバーします：地域別のデータ常駐要件（EU GDPR、中国PIPL、インドDPDP）、地政学的文脈に基づくモデル選択、主要な司法管轄区における規制環境、および準拠チェックリスト。PDFを地政学的AI展開リファレンスカードとしてダウンロードしてください。',
      sections: {
        tldr: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            'AIは戦略的な国家技術 — 米国、中国、EUが支配権を競争している',
            '国々は3つのリソースを争奪している：計算能力（チップ）、AIの才能、訓練データ',
            'AIは軍事能力、経済競争力、サイバーパワーに同時に影響を与える',
            'EU AI法は世界初の拘束力のあるAI法 — 罰金は3500万ユーロまたは売上の7%',
            'ブリュッセル効果：EU AI法のルールは世界中のヨーロッパユーザーに届くあらゆるAIに適用される',
            '米国には連邦AI法がない — 規制当局が既存の権限をAIに適用している',
            '米国は2025年1月にAI安全命令を廃止 — 競争力が安全より優先される',
            'DeepSeek R1は主要ベンチマークでGPT-5.5と同等 — GPU輸出規制は中国のAIを阻止していない',
            'TSMCはすべてのフロンティアAIを駆動するチップを製造 — 単一の地政学的依存',
            '組織は3つの競争する規制フレームワークを同時に満たす必要がある：EU、米国、中国',
          ],
        },
        euImplications: {
          title: 'EU組織の場合：重要なコンプライアンス期限',
          content: [
            '**EU AI法は拘束力があり、2026年8月から実施される。** EU本拠地の組織またはEUユーザーにサービスを提供する場合、4部構成のリスク分類システムを満たす必要がある。禁止慣行の罰金は3500万ユーロまたは世界売上の7%に達する — どちらか大きい方。非準拠は交渉の余地がない。',
            '**EU内でGPT-5.5、Claude Opus 4.8、またはGemini 3.1 Proを展開する場合、汎用AI（GPAI）の準拠ドキュメントを確認する必要がある。** OpenAI、Anthropic、GoogleはAug 2025からトランスペアレンシードキュメント（訓練データサマリー、パフォーマンスボーダー、セキュリティテスト）を発行している。これらの認定書を準拠の証拠として保存 — 規制当局がそれを求める。',
            '**高リスクAIシステム（採用、信用決定、ヘルスケア、執行）は展開前に準拠評価が必要。** これは、バイアスのテスト、人間監視メカニズムのドキュメント、すべてのAI決定の監査ログを意味する。ローカルに展開されるオープンウェイトモデル（LLaMA via Ollama、Mistral Large）はデータ常駐要件を満たす — データは決してインフラから出ず、監査証跡を制御する。',
            '**ブリュッセル効果はあなたにも適用される。** あなたのAIシステムが単一のEU住民に到達した場合、EU AI法が適用される — 組織がUS または中国に本拠地を置いている場合でも。つまり、複数の構成の管理より全体的に同じコンプライアンスレベルを実施する方が簡単。',
          ],
        },
        promptEngineerTakeaways: {
          title: 'プロンプトエンジニアのための重要なポイント',
          isTldr: true,
          items: [
            '中国のAI API（DeepSeek、ERNIE 4.0、Qwen via Alibaba Cloud）はAPIレベルでコンテンツをフィルタリング — 政治的なトピック、CP批判、台湾/チベット/新疆の独立は HTTP-200 でレスポンスで is_safe: 0 を返す、HTTP-4xx ではない。アプリケーションコードで明示的に処理。',
            'Mistralモデルとローカル Ollama 実装はEU AI法のデータ常駐要件を満たす — プロンプトと出力はインフラを離れない。これがプロンプトエンジニアのEU GDPR + AI法準拠への最もスムーズな方法。',
            'GPT-5.5 と Claude Opus 4.8 は August 2025 から EU AI法の GPAI準拠。EU関連の実装で追加のモデルレベル準拠作業なしで使用可能 — 責務はアプリケーションレベル（プロバイダー）にある、モデルレベルではない。',
            'ブリュッセル効果は、EU住民向けのプロンプトが米国ホストのモデルに送信される場合、EU AI法の要件に従う — 組織がEU内に本拠地を置いていない場合でも。',
            'マルチジュリスディクション・テストでは同じプロンプトを同時に Mistral（EU準拠）、GPT-5.5（US/GPAI）、Qwen（中国アクセス可能）に送信して、規制コンテキスト全体で出力を比較。PromptQuorum はこれをネイティブにサポート。',
          ],
        },
        promptOptimizationByRegion: {
          title: 'ジオポリティクスがプロンプト最適化を変える方法：国ごと',
          content: [
            '**あなたのAI出力が消費される場所は、プロンプトが何をする必要があるか、そして何を避ける必要があるかを決定する。** 言語はモデルパフォーマンスに直接影響を与える：英語で書かれたプロンプトを中国のモデル（ERNIE 4.0、Qwen）に送信することは、同じプロンプトを中国語で書いて送信するより悪い。法律はプロンプト設計に構造的に影響を与える：EU AI法の開示要件、米国セクター規制、中国の CAC コンテンツフィルターはそれぞれ異なる制約を課す、プロンプトをどのように書くことができるか、何の出力が生成できるか、アプリケーションが回答にどのように反応する必要があるかについて。',
            'モデルの可用性を形成する地政学的ダイナミクスは、オープンソース対プロプライエタリの問いを特に重要にします。オープンソースが勝つ場合とプロプライエタリモデルがコストに見合う場合の完全な比較については、[オープンソース vs プロプライエタリLLM](https://www.promptquorum.com/ja/prompt-engineering/open-source-vs-proprietary-llms)をご覧ください。',
          ],
          tableFormat: true,
          columns: ['地域', 'プロンプトの法的制限', '言語最適化', '推奨モデル'],
          rows: [
            {
              '地域': 'ヨーロッパ連合',
              'プロンプトの法的制限': 'EU AI法：EU消費者向けコンテンツを生成するプロンプトはAI開示を含む必要がある。GDPR：プロンプトに法的根拠なく個人データを含めることはできない。高リスクAIアプリケーション（HR、クレジット、ヘルスケア）は人間の監視が必要 — プロンプトは最終決定を自動化することはできない。',
              '言語最適化': 'ターゲット言語（ドイツ語、フランス語など）でプロンプトを書く — GPT-5.5 と Claude Opus 4.8 は、プロンプトが出力と同じ言語の場合、非英語タスクでかなり良好。出力言語をシステムプロンプトに明示的に指定。',
              '推奨モデル': 'Mistral Large（フランス語、EU本拠地）、ローカル Ollama 実装（データはインフラを離れない）、またはEU地域APIエンドポイントと SCC を持つGPT-5.5/Claude。',
            },
            {
              '地域': 'アメリカ合衆国',
              'プロンプトの法的制限': '連邦AI法なし、ただしセクター規則が適用：HIPAA（ヘルスケア — PHI はプロンプトに含まれない）、CCPA/CPRA（カリフォルニア — プロンプト内の個人データは消費者権利をトリガー）、FTC法（プロンプトは消費者コンテキストで欺瞞的なコンテンツを生成することはできない）。州の生体認証法（イリノイ BIPA）は顔/音声データを処理するプロンプトを制限。',
              '言語最適化': 'US フロンティアモデル（GPT-5.5、Claude Opus 4.8）は英語に最適化され、英語プロンプトで最高のパフォーマンスを達成。スペイン語の米国市場では、モデルに明示的にスペイン語を指示するか、二言語システムプロンプトを使用 — 自動検出に依存しないこと。',
              '推奨モデル': '一般使用では GPT-5.5 または Claude Opus 4.8。規制されたヘルスケアまたは金融プロンプトでは、SCC を備えた API を使用し、プロンプトコンテキストで PHI/PII を送信しないこと。',
            },
            {
              '地域': '中国',
              'プロンプトの法的制限': 'CAC 生成型AI対策（2023）：CP主導部、台湾/チベット/新疆の独立、1989年の天安門事件、または「社会主義の核心的価値」を損なうものに関するコンテンツをリクエストするプロンプトはブロックされる。HTTP 200 で is_safe: 0 として返される。PIPL：中国ユーザーの個人データを含むプロンプトは非中国サーバーに転送することはできない。',
              '言語最適化': '中国語タスクでは簡体字中国語（北京官話）でプロンプトを書く — Qwen 3 と ERNIE 4.0 は中国語ベンチマーク（C-Eval）で 10-20% 高いスコアを達成 vs 英語で同じプロンプト。技術用語に中国語等価がない場合は Pinyin または英語を使用。',
              '推奨モデル': 'Qwen 3 72B（中国外で自己ホスト、CAC フィルターなし）クロスボーダータスク用。ERNIE 4.0 via Qianfan API（CAC 登録）消費者向け中国実装用。DeepSeek R1 は推論タスク用、フィルタリングコンテンツエリアに触れないもの。',
            },
            {
              '地域': 'UK / ポストブレグジット',
              'プロンプトの法的制限': 'UK GDPR（EU GDPR と同等）個人データに適用。UK AI Safety Institute はモデルレベルの準拠ではなくフロンティアモデル評価に焦点。拘束力のあるAI開示法なし — UK はイノベーション志向のセクター主導のアプローチを選択。OFCOM はブロードキャストコンテキストで AI生成コンテンツを規制。',
              '言語最適化': 'プロンプト内のイギリス英語の綴りと慣用句が UK 関連コンテンツの出力品質を向上させる。GPT-5.5 は明示的な「UK English」の指示に応答；これなしで標準は American English。',
              '推奨モデル': 'GPT-5.5 または Claude Opus 4.8。UK-EU データ転送はブレグジット後 SCC が必要 — UK 適切性決定が存在するも審査対象。',
            },
            {
              '地域': '日本',
              'プロンプトの法的制限': '日本個人情報保護法（APPI）はAIプロンプトでの個人データ使用を制限。日本は専門AIの法律を持たない（2026年）— METI と内務省のガイダンスは任意。日本は広島AIプロセスに参加 — その11の原則への準拠は日本企業に推奨。',
              '言語最適化': '日本語タスク用の日本語プロンプトはすべての主要モデルで英語プロンプトを上回る。GPT-5.5 と Claude Opus 4.8 は日本語をよく処理；楽天 AI と NTT LLM は日本固有の実装で利用可能。カジュアル（タメ口）レジスターをシステムプロンプトで避ける — 敬語の定式化は日本のビジネスコンテキストで準拠と出力品質を改善。',
              '推奨モデル': '一般的な日本語タスク用 GPT-5.5 または Claude Opus 4.8。楽天 AI（楽天グループ）または NTT LLM は日本国内準拠に敏感な実装用。',
            },
          ],
        },
      },
    },
    zh: {
      theme: 'Policy & Compliance',
      title: '地缘政治与AI：欧盟、美国和中国如何争夺AI主导权（2026年分析）',
      intro: '美国、中国和欧盟正在追求互不兼容的AI治理愿景——美国优先考虑竞争力，中国强调国家控制，欧盟建立基于权利的法律框架。对于部署AI的组织而言，这些差异转化为具体的合规义务、采购限制和数据存储位置要求，无论组织总部位于何处都适用。',
      seoTitle: 'AI地缘政治分析2026：美国、欧盟、中国对比',
      metaDescription: 'EU AI法案、美国出口管制、中国CAC战略：三套不兼容框架。分析2026年对AI采购、数据本地化及模型可用性的影响。适合在华或对华部署团队。',
      publishDate: '2026-04-01',
      dateModified: '2026-06-01',
      readTime: '约16分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AI地缘政治',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/geopolitics-and-ai',
        headline: '地缘政治与AI：欧盟、美国和中国如何争夺AI主导权（2026年分析）',
        description: '美国、中国和欧盟正在追求互不兼容的AI治理愿景。对于部署AI的组织而言，这些差异转化为具体的合规义务、采购限制和数据存储位置要求。',
        datePublished: '2026-04-01',
        dateModified: '2026-06-01',
        keywords: ['AI地缘政治', 'EU AI法案', 'CHIPS法案', 'AI监管', '中国AI战略', '布鲁塞尔效应', 'AI治理', 'DeepSeek', 'AI安全研究所', '中国制造2025', '高风险AI', 'EU AI监管', 'AI治理欧盟', '算法推荐监管', '数据主权'],
        teaches: [
          'EU AI法案如何对风险进行分类以及适用的最后期限',
          '欧盟和非欧盟欧洲国家在AI方面的具体措施',
          '美国和中国的AI战略与欧盟方式的差异',
          '布鲁塞尔效应对非欧盟使用AI工具组织的含义',
          '地缘政治竞争如何影响AI模型的可用性和采购决策',
        ],
        about: [
          { '@type': 'Country', name: '美国' },
          { '@type': 'Country', name: '中国' },
          { '@type': 'Organization', name: '欧洲联盟' },
          { '@type': 'Thing', name: 'EU AI法案' },
          { '@type': 'Thing', name: '人工智能监管' },
          { '@type': 'Thing', name: '布鲁塞尔效应' },
          { '@type': 'Thing', name: 'AI地缘政治' },
          { '@type': 'Organization', name: 'NVIDIA' },
          { '@type': 'Organization', name: 'TSMC' },
          { '@type': 'Organization', name: '欧盟委员会' },
          { '@type': 'Organization', name: '中国网络空间管理部门' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'OpenAI' },
          { '@type': 'Organization', name: 'Google DeepMind' },
          { '@type': 'Organization', name: 'Anthropic' },
          { '@type': 'Organization', name: '阿里巴巴' },
          { '@type': 'Organization', name: '百度' },
          { '@type': 'Organization', name: 'DeepSeek' },
          { '@type': 'Organization', name: 'Mistral AI' },
          { '@type': 'Thing', name: 'CHIPS and Science Act' },
          { '@type': 'Thing', name: '中国制造2025' },
          { '@type': 'Thing', name: 'Hiroshima AI Process' },
          { '@type': 'Person', name: 'Ursula von der Leyen' },
          { '@type': 'Person', name: 'Emmanuel Macron' },
          { '@type': 'Person', name: 'Rishi Sunak' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/zh/api/og/geopolitics-and-ai', width: 1200, height: 630 },
      },
      supplementalSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'AI监管框架对比：EU AI法案 vs 美国战略 vs 中国',
        description: '欧盟、美国和中国在人工智能监管方面的9个关键维度的全面对比。',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/geopolitics-and-ai',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '主要监管方式',
            description: '欧盟：基于权利的法律框架，根据对基本权利的风险对AI进行分类。美国：部门化、以创新为先的方式，没有联邦AI法。中国：国家指导、以控制为先的战略，将AI视为国家发展优先事项。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '关键AI立法',
            description: '欧盟：EU AI法案（2024年，强制性）+ GDPR。美国：无联邦AI法；NIST AI风险管理框架（自愿性）；Trump AI行动计划（2025年）。中国：中国网络空间管理部门（CAC）算法和生成式AI监管（2022–2023年）。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '风险分级框架',
            description: '欧盟：4级系统（不可接受/禁止、高风险/需要符合性评估、有限风险/需要披露、最小风险/无具体义务）。美国：自愿性NIST AI RMF，包含7个可信度维度；无强制分级。中国：生成式AI部署前需进行安全评估。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '最高罚款',
            description: '欧盟：禁止行为罚款€3500万或全球营业额的7%；高风险违规罚款€1500万或全球营业额的3%。美国：无联邦AI特定罚款；FTC追究不公平/欺骗行为。中国：每项违规罚款最高¥10万；不合规生成式AI服务暂停。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: '数据保护规则',
            description: '欧盟：GDPR + AI法案；训练中的个人数据需要法律依据。美国：部门化（HIPAA、CCPA、FERPA）；无联邦等同GDPR的法律。中国：个人信息保护法（PIPL，2021年）；国家安全机构保留数据访问权。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: '禁止的AI应用',
            description: '欧盟：公共当局的社会评分、公共场所实时生物特征监控、利用认知漏洞的AI、无差别抓取面部图像。美国：无联邦禁令；州级差异。中国：损害中共领导或"社会主义核心价值观"的内容；深度伪造必须披露。',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: '执法机构',
            description: '欧盟：EU AI办公室（GPAI模型）+ 国家市场监督机构（高风险AI）+ 数据保护机构（GDPR）。美国：FTC、FDA、CFPB、EEOC、NIST。中国：中国网络空间管理部门（CAC）作为主要执法机构。',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '国际范围',
            description: '欧盟：布鲁塞尔效应——适用于任何进入欧盟市场或其输出在欧盟使用的AI；具有属地外管辖权。美国：硬件出口管制；无属地外内容监管。中国：一带一路AI出口传播中国治理规范；防火长城限制国外AI在国内访问。',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'EU AI法案是什么？', acceptedAnswer: { '@type': 'Answer', text: 'EU AI法案是世界首个全面的人工智能法律框架，于2024年3月由欧洲议会以523票赞成通过。它将AI系统分为四个风险级别——不可接受、高风险、有限风险和最小风险——对每个级别适用不同的要求和罚款。完整执法从2026年8月开始。' } },
          { '@type': 'Question', name: 'EU AI法案是否适用于欧盟外的公司？', acceptedAnswer: { '@type': 'Answer', text: '是的。EU AI法案适用于任何在欧盟市场上放置AI系统或其AI输出在欧盟使用的组织，无论该组织总部位于何处。这种属地外管辖权称为布鲁塞尔效应，意味着美国和亚洲AI提供商如果为欧盟用户服务，也必须合规。' } },
          { '@type': 'Question', name: '违反EU AI法案的罚款是多少？', acceptedAnswer: { '@type': 'Answer', text: '对禁止的AI做法，罚款最高€3500万或全球年度营业额的7%（以较高者为准）。高风险AI违规的罚款最高€1500万或全球营业额的3%。向当局提供不正确信息的罚款最高€750万或全球营业额的1%。' } },
          { '@type': 'Question', name: 'EU AI法案明确禁止哪些AI应用？', acceptedAnswer: { '@type': 'Answer', text: 'EU AI法案禁止：公共当局的社会评分系统、公共场所的实时生物特征监控（警执法例外除外）、利用认知漏洞的AI以及从互联网无差别抓取面部图像来构建识别数据库。这些被归类为不可接受的风险。' } },
          { '@type': 'Question', name: '美国AI监管与欧盟方式有何不同？', acceptedAnswer: { '@type': 'Answer', text: '美国采用部门化、自愿性方式——现有监管机构（FTC、FDA、CFPB、EEOC）在其领域内对AI适用其任务。没有等同于EU AI法案的联邦AI法。Biden关于AI安全的行政令（2023年10月）于2025年1月被Trump政府撤销，取而代之的是以竞争力为中心的AI行动计划。' } },
          { '@type': 'Question', name: '中国的AI与美国AI系统一样强大吗？', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek R1于2025年1月发布，在多个基准（AIME 2024、MATH-500、HumanEval）上与GPT-5.5相当，同时据报训练成本仅为其一小部分。中国的主要模型——包括阿里巴巴的Qwen和百度的ERNIE——在许多任务上具有竞争力，但在多语言推理和安全基准上落后。硬件出口管制限制了中国获取最新Nvidia GPU的途径。' } },
          { '@type': 'Question', name: '欧盟公司能否在AI法案下使用GPT-5.5和Claude？', acceptedAnswer: { '@type': 'Answer', text: '是的，在大多数用例中可以。GPT-5.5和Claude Opus 4.8符合通用AI（GPAI）模型条件，必须遵守透明度义务——包括发布训练数据摘要和遵守欧盟版权法——这于2025年8月生效。OpenAI和Anthropic都已为欧盟用户发布了GPAI合规文档。' } },
          { '@type': 'Question', name: '英国AI安全研究所（AISI）是什么？', acceptedAnswer: { '@type': 'Answer', text: '英国AI安全研究所（AISI）于2023年11月在Bletchley Park的AI安全峰会后成立。它进行AI安全的技术研究，评估前沿AI模型的危险能力，并发布安全报告。AISI独立于商业AI开发者运作，与美国AI安全研究所合作。' } },
          { '@type': 'Question', name: 'DeepSeek如何影响AI地缘政治竞争？', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek R1于2025年1月发布，表明可以以远低于先前假设的计算成本实现前沿AI能力。这削弱了出口管制Nvidia GPU将永久限制中国AI发展的论点。它加速了美国和欧盟关于基于计算的遏制战略是否充分的政策讨论。' } },
          { '@type': 'Question', name: '什么是AI中的布鲁塞尔效应？', acceptedAnswer: { '@type': 'Answer', text: '布鲁塞尔效应描述欧盟法规如何成为事实上的全球标准，因为跨国公司发现在全球应用最严格的标准比维护每个管辖区的单独合规堆栈更简单。对于AI，这意味着EU AI法案实际上为GPT-5.5、Claude和Gemini设定了全球标准——无论用户位于何处。' } },
          { '@type': 'Question', name: '什么是广岛AI进程及其成就是什么？', acceptedAnswer: { '@type': 'Answer', text: '广岛AI进程是由日本担任G7主席时在2023年广岛峰会期间启动的G7倡议。它产生了广岛AI进程行为准则——G7采纳的11项自愿原则，供高级AI系统开发者遵循，于2023年10月通过。原则涵盖透明度、事件报告、安全测试和AI生成内容水印。行为准则是自愿性的，无法律约束力，独立于EU AI法案。' } },
          { '@type': 'Question', name: '欧盟组织能否将DeepSeek用于商业应用？', acceptedAnswer: { '@type': 'Answer', text: '从技术上讲可以，使用GDPR兼容的标准合约条款（SCC）。实际上，对中国法律义务要求CAC数据披露合规，SCC很难执行。德国（BSI）、法国（ANSSI）和荷兰（NCSC）已发布建议，限制政府和关键基础设施中的中国AI工具。私营部门组织在通过DeepSeek处理个人数据之前必须根据GDPR第46条进行转让影响评估。' } },
        ],
      },
      toc: [
        { label: '关键要点', anchor: 'key-takeaways' },
        { label: '欧盟合规期限', anchor: 'eu-compliance-deadlines' },
        { label: '关键数据点', anchor: 'ai-geopolitics-key-data-points' },
        { label: 'AI军备竞争：美国、中国和欧盟', anchor: 'the-ai-arms-race' },
        { label: 'EU AI法案：具体要求', anchor: 'eu-ai-act-requirements' },
        { label: '欧盟成员国：国家AI战略', anchor: 'eu-member-states-strategies' },
        { label: '法国和Mistral：欧洲AI独立', anchor: 'france-mistral' },
        { label: '美国战略：CHIPS法案、NIST', anchor: 'us-strategy' },
        { label: '中国AI战略：制造2025、CAC、DeepSeek', anchor: 'china-ai-strategy' },
        { label: '中国：可用模型', anchor: 'china-available-models' },
        { label: '中国：内容过滤和CAC', anchor: 'china-content-filters' },
        { label: '中国：数据驻留和API', anchor: 'china-data-residency' },
        { label: '全球AI监管对比', anchor: 'global-ai-regulation' },
        { label: 'AI地缘政治风险', anchor: 'ai-geopolitical-risks' },
        { label: '关键定义', anchor: 'definitions' },
        { label: '常见问题', anchor: 'faq' },
      ],
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何在中国部署生成式AI产品：开发者指南',
        description: '在中国部署AI产品的分步指南——模型选择、内容限制、CAC安全评估、PIPL数据驻留和上市时间表。',
        step: [
          { '@type': 'HowToStep', position: 1, name: '了解中国可用的AI模型', text: '外国模型（GPT-5.5、Claude、Gemini）在中国大陆无法在不使用VPN的情况下访问。可用选项：Alibaba Qwen 3（开源权重，7B–72B，128K上下文）、Baidu ERNIE 4.0（Qianfan API）、ByteDance Doubao（Volcano Engine）、Z.ai GLM-4、DeepSeek R1/V3。Qwen 3 72B是自托管的最强开源权重选项。' },
          { '@type': 'HowToStep', position: 2, name: '规划API级内容限制', text: 'CAC注册的生成式AI服务过滤阻止CPC领导批评、台湾/西藏/新疆独立讨论、政治敏感历史事件以及损害"社会主义核心价值观"的内容。过滤器内置于API中。过滤错误返回HTTP 200，is_safe: 0——而不是HTTP 4xx——需要显式应用级处理。' },
          { '@type': 'HowToStep', position: 3, name: '完成CAC安全评估', text: '在中国任何面向消费者的生成式AI服务上市前需要。提交训练数据源、内容过滤文档和示例输出。时间表：45–90天。外国公司必须与中国大陆实体或持证云提供商（Alibaba Cloud、Tencent Cloud）合作作为注册提供商。' },
          { '@type': 'HowToStep', position: 4, name: '为中国和国际用户部署混合模型', text: '在中国外的自有基础设施上部署Qwen 3 72B（Apache 2.0）供国际用户使用。根据CAC注册使用Alibaba Cloud API处理中国部分。Qwen 3 72B在MMLU上的分数在GPT-5.5的5分以内，在C-Eval上表现优于GPT-5.5。128K上下文窗口。' },
          { '@type': 'HowToStep', position: 5, name: '遵守PIPL数据驻留要求', text: 'PIPL（2021年）要求中国用户的个人数据留在中国，或在跨境转移前通过政府安全评估。通过中国大陆托管的推理（Alibaba Cloud、Tencent Cloud、Huawei Cloud）路由所有中国用户流量。' },
          { '@type': 'HowToStep', position: 6, name: '规划中国上市时间表', text: '为CAC上市前审查预留45–90天。与中国大陆实体合作进行面向消费者的产品。使用Qwen 3 72B处理中文语言任务。避免通过美国托管API路由中国用户数据。' },
        ],
      },
      tableSchema: {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: '全球AI监管对比：EU AI法案 vs 美国战略 vs 中国CAC',
        description: '跨欧盟、美国和中国8个维度的AI监管框架结构对比——主要方式、关键立法、风险框架、最高罚款、数据保护、禁止应用、执法机构和国际范围。',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/geopolitics-and-ai',
        creator: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        dateModified: '2026-06-01',
        variableMeasured: [
          { '@type': 'PropertyValue', name: '主要方式', description: '欧盟：基于权利的法律框架。美国：部门化、以创新为先。中国：国家指导、以控制为先。' },
          { '@type': 'PropertyValue', name: '关键立法', description: '欧盟：EU AI法案（2024年）。美国：无联邦AI法；NIST AI RMF自愿性。中国：算法推荐监管（2022年）；生成式AI措施（2023年）。' },
          { '@type': 'PropertyValue', name: '最高罚款', description: '欧盟：€3500万或全球营业额7%。美国：无联邦AI特定罚款。中国：每项违规最高¥10万。' },
          { '@type': 'PropertyValue', name: '执法机构', description: '欧盟：EU AI办公室 + 国家机构。美国：FTC、FDA、CFPB、EEOC。中国：中国网络空间管理部门（CAC）。' },
          { '@type': 'PropertyValue', name: '国际范围', description: '欧盟：布鲁塞尔效应——属地外适用。美国：仅硬件出口管制。中国：一带一路AI出口传播治理规范。' },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: '以下幻灯片涵盖：按地区数据驻留要求（欧盟GDPR、中国PIPL、印度DPDP）、按地缘政治背景选择模型、主要司法管辖区的AI监管格局和合规清单。下载PDF作为地缘政治AI部署参考卡。',
      sections: {
        tldr: {
          title: '关键要点',
          isTldr: true,
          items: [
            'AI是战略性国家技术——美国、中国和欧盟竞争主导权。',
            '各国竞争三种资源：计算能力（芯片）、AI人才和训练数据。',
            'AI同时影响军事能力、经济竞争力和网络力量。',
            'EU AI法案是世界首个具有约束力的AI法——罚款最高€3500万或全球营业额的7%。',
            '布鲁塞尔效应：EU AI法案规则适用于任何到达欧盟用户的AI，全球适用。',
            '美国没有联邦AI法——部门监管机构对其领域内的AI适用现有任务。',
            '美国于2025年1月撤销了AI安全行政令——竞争力现已优先于安全。',
            '中国的DeepSeek R1在关键基准上与GPT-5.5相当——GPU出口管制并未停止中国AI。',
            'TSMC在台湾制造为所有前沿AI提供动力的芯片——单一地缘政治依赖。',
            '组织必须同时遵守三个相互冲突的监管框架：欧盟、美国和中国。',
          ],
        },

        euImplications: {
          title: '如果您是欧盟组织：关键合规期限',
          content: [
            '**EU AI法案于2026年8月具有约束力和强制执行。** 如果您的组织以欧盟为基地或为欧盟用户服务，您必须遵守其四级风险分类系统。禁止行为的罚款最高€3500万或全球营业额的7%——以较高者为准。不合规是不可协商的。',
            '**如果您在欧盟中部署GPT-5.5、Claude Opus 4.8或Gemini 3.1 Pro，您必须审核其通用AI（GPAI）合规文档。** OpenAI、Anthropic和Google已于2025年8月发布了透明度文档（训练数据摘要、能力限制、安全测试）。保存这些证明作为合规证据——监管机构会问询。',
            '**高风险AI系统（招聘、信贷决策、医疗、执法）在部署前需要符合性评估。** 这意味着测试偏见、记录人工监督机制文档和所有AI决策的审计日志。本地部署的开源权重模型（通过Ollama的LLaMA、Mistral Large）满足数据驻留要求——没有数据离开您的基础设施，您控制审计日志。',
            '**布鲁塞尔效应适用于您。** 如果您的AI系统到达单个欧盟居民，EU AI法案适用——即使您的公司总部在美国或中国。这意味着全球执行相同的合规级别通常比维护多个配置更简单。',
          ],
        },

        promptEngineerTakeaways: {
          title: '提示工程师的关键要点',
          isTldr: true,
          items: [
            '中国AI API（DeepSeek、ERNIE 4.0、通过Alibaba Cloud的Qwen）在API级别过滤内容——政治话题、CPC批评和台湾/西藏/新疆返回HTTP 200响应中的`is_safe: 0`，而不是HTTP 4xx。在您的应用代码中明确处理这些。',
            'Mistral模型和本地Ollama部署满足EU AI法案的数据驻留要求——提示和输出永远不会离开您的基础设施。这是提示工程师实现欧盟GDPR + AI法案合规的最低摩擦路径。',
            'GPT-5.5和Claude Opus 4.8从2025年8月起在EU AI法案下符合GPAI条件。您可以在面向欧盟的部署中使用它们，无需额外的模型级合规工作——您的义务在应用（部署者）级别，而非模型级别。',
            '布鲁塞尔效应意味着为欧盟居民使用的产品发送到美国托管模型的提示受EU AI法案要求的约束——即使您的公司不以欧盟为基地。',
            '对于多管辖区测试，同时向Mistral（欧盟兼容）、GPT-5.5（美国/GPAI）和Qwen（中国可访问）分派相同提示，以在监管环境下对输出进行基准测试。PromptQuorum本质上支持这一点。',
          ],
        },

        promptOptimizationByRegion: {
          title: '地缘政治如何改变提示优化：逐国分析',
          content: [
            '**您的AI输出被消费的地点决定了您的提示必须做什么——以及必须避免什么。** 语言直接影响模型性能：用英语写的提示发送给中国模型（ERNIE 4.0、Qwen）表现不如用中文写的相同提示。法律在结构上影响提示设计：EU AI法案披露要求、美国部门监管和中国的CAC内容过滤对提示如何框架、可以生成什么输出以及应用必须如何处理响应施加不同约束。',
          ],
          tableFormat: true,
          columns: ['地区', '对提示的法律约束', '语言优化', '推荐模型'],
          rows: [
            {
              '地区': '欧洲联盟',
              '对提示的法律约束': 'EU AI法案：与欧盟消费者互动的提示生成内容必须包括AI披露。GDPR：提示必须不包含没有法律依据的个人数据。高风险AI应用（人力资源、信贷、医疗）需要人工监督——提示不能自动化最终决策。',
              '语言优化': '用目标语言（德文、法文等）写提示——GPT-5.5和Claude Opus 4.8在非英语任务上表现明显更好，当提示与所需输出使用相同语言时。在系统提示中明确指定输出语言。',
              '推荐模型': 'Mistral Large（法国、欧盟总部）、本地Ollama部署（数据永远不离开基础设施）或GPT-5.5/Claude使用欧盟区域API端点和SCC。',
            },
            {
              '地区': '美国',
              '对提示的法律约束': '无联邦AI法，但适用部门规则：HIPAA（医疗——PHI不能出现在提示中）、CCPA/CPRA（加州——提示中的个人数据触发消费者权利）、FTC法案（提示不能在消费者环境中生成欺骗内容）。州生物特征法（伊利诺伊州BIPA）限制处理面部/语音数据的提示。',
              '语言优化': '美国前沿模型（GPT-5.5、Claude Opus 4.8）是英文优化的，在英文提示上达到其天花板表现。对于西班牙语美国市场，在西班牙语中明确指示模型或使用双语系统提示——不要依赖自动检测。',
              '推荐模型': '通用使用GPT-5.5或Claude Opus 4.8。对于受监管的医疗或金融提示，使用API与SCC并避免在提示上下文中发送PHI/PII。',
            },
            {
              '地区': '中国',
              '对提示的法律约束': 'CAC生成式AI措施（2023年）：请求CPC领导、台湾/西藏/新疆独立、1989年天安门事件或任何损害"社会主义核心价值观"的内容的提示将被阻止。返回为HTTP 200，`is_safe: 0`。PIPL：包含中国用户个人数据的提示不能路由到非中国服务器。',
              '语言优化': '对于中文语言任务，用简体中文（普通话）写提示——Qwen 3和ERNIE 4.0在中文基准（C-Eval）上的分数比英文相同提示高10–20%。对于技术术语（无中文等同物时使用拼音或英文）。',
              '推荐模型': 'Qwen 3 72B（在中国外自托管，无CAC过滤）用于跨境任务。ERNIE 4.0通过Qianfan API（CAC注册）用于面向消费者的中国部署。DeepSeek R1用于不涉及过滤内容区域的推理任务。',
            },
            {
              '地区': '英国/脱欧后',
              '对提示的法律约束': '英国GDPR（等同于欧盟GDPR）适用于个人数据。英国AI安全研究所关注前沿模型评估，不是应用级合规。无强制AI披露法——英国选择了以创新为先、部门主导的方式。OFCOM在广播环境中监管AI生成内容。',
              '语言优化': '英国英文拼写和习语在提示中改善英国面向内容的输出质量。GPT-5.5对系统提示中的显式"英国英文"指令有反应；否则默认为美国英文。',
              '推荐模型': 'GPT-5.5或Claude Opus 4.8。脱欧后的英国-欧盟数据转移需要SCC——欧盟向英国的充分性决定已生效但受审查。',
            },
            {
              '地区': '日本',
              '对提示的法律约束': '日本个人信息保护法（APPI）限制在AI提示中使用个人数据。日本没有AI特定法（截至2026年）——来自METI和内务部的指导是自愿性。日本参与了广岛AI进程——日本企业鼓励遵守其11项原则。',
              '语言优化': '日文提示在日文语言任务上优于所有主要模型的英文提示。GPT-5.5和Claude Opus 4.8很好地处理日文；楽天AI和NTT LLM可用于日本特定部署。避免在系统提示中使用非正式（tame-go）寄存器——礼貌（keigo）框架改善了日本商业环境中的合规和输出质量。',
              '推荐模型': '通用日文任务使用GPT-5.5或Claude Opus 4.8。使用楽天AI（楽天集团）或NTT LLM用于日本国内合规敏感部署。',
            },
          ],
        },

        keyStatistics: {
          title: 'AI地缘政治：关键数据点',
          content: [
            '以下数据代表了政府AI投资规模、硬件集中度和定义当前AI地缘政治竞争的研究能力。',
          ],
          items: [
            '**政府AI投资——美国：** CHIPS和科学法案（2022年）为国内半导体制造分配了$520亿，科学研发另外$2000亿。国家AI倡议法为25个联邦机构的AI研究提供资金。',
            '**政府AI投资——中国：** 2021–2025年间政府指导的AI和半导体投资估计为¥1万亿（$1400亿），包括针对2030年全球AI领导地位的国家新一代AI发展计划。',
            '**政府AI投资——欧盟：** 欧洲创新委员会AI基金€10亿；成员国战略另增€10+亿：德国€50亿（2019–2025）、法国€20亿、英国£10亿用于AI安全和计算。',
            '**芯片制造集中：** TSMC（台湾）制造全球约90%的7nm以下最先进芯片。ASML（荷兰）是EUV光刻机的唯一制造商，这是先进节点制造所必需的——赋予荷兰在全球芯片供应中的结构性卡位。',
            '**Nvidia GPU市场份额：** Nvidia在AI训练GPU中约占80%市场份额。H100和H200系列为OpenAI、Google DeepMind、Anthropic和百度的大多数前沿模型训练提供动力。',
            '**AI研究人员分布：** 美国按发表影响力雇用全球约40%的顶级AI研究人员（Stanford HAI 2024 AI指数）。中国每年产生最多的计算机科学博士——约50,000名——占约30%的顶级AI会议作者。',
            '**AI专利申请：** 中国在2022年提交了全球约70%的AI专利（WIPO全球创新指数）。美国在引用和商业化发明上领先；中国在数量上领先。',
            '**模型训练成本压缩：** 94%成本削减——GPT-4估计约$1亿训练计算（2023年）vs DeepSeek R1报告的约$600万（2025年1月）。这个差距表明美国计算成本出口管制不能永久限制中国前沿AI开发。',
            '**EU AI法案覆盖：** 该法案覆盖27个欧盟成员国的4.5亿消费者。GPAI模型的系统风险阈值为10²⁵ FLOPs的训练计算——这是适用额外对抗性测试要求的水平。',
            '**Bletchley声明（2023年11月）：** 由28个国家签署，包括美国、中国和欧盟成员国——迄今为止最广泛的国际AI安全共识，虽然无约束力。',
          ],
        },

        qaWhyStrategic: {
          title: '为什么AI具有战略重要性？',
          content: [
            'AI具有战略重要性，因为它同时在国家力量的每个维度上放大能力——经济生产力、军事效力、情报分析和网络操作。拥有领先AI的国家可以自动化科学研究、优化军事后勤、大规模处理监视数据并开发自主武器系统。经济合作与发展组织预计AI到2030年可为全球GDP增加$15.7万亿，使AI领导力等同于20世纪的工业领导力。在AI能力上落后的国家面临防御、贸易和外交的复合劣势。',
          ],
        },

        qaWhichCountriesDominate: {
          title: '哪些国家主导AI开发？',
          content: [
            '美国主导前沿模型能力——OpenAI（GPT-5.5）、Anthropic（Claude）和Google DeepMind（Gemini）都以美国为基地。中国在AI专利数量（2022年WIPO约70%的全球专利）上领先，并拥有美国之外最强大的国内模型：Alibaba Qwen 3、Baidu ERNIE 4.0和DeepSeek R1。欧盟在AI监管上领先但在前沿能力上落后——法国的Mistral AI是最强的欧洲竞争对手。英国、加拿大和阿联酋正在将AI作为独立参与者投资，而非专门排列于美国或中国基础设施。',
          ],
        },

        qaWhatRoleChips: {
          title: '芯片在AI地缘政治中的作用是什么？',
          content: [
            '芯片（GPU和专用AI加速器）是AI研发的物理枢纽。TSMC在台湾制造Nvidia H100和H200 GPU，这为OpenAI的GPT-4、Google的Gemini和所有美国主流模型训练提供动力。美国对中国实施GPU出口管制（针对H100、H200和其他先进芯片），旨在延缓中国前沿AI能力。DeepSeek R1的2025年发布表明，即使没有最新的Nvidia GPU，中国也可以实现竞争性能力。ASML（荷兰）是制造EUV光刻机的唯一供应商，这是制造先进芯片所必需的——赋予荷兰在全球芯片供应链中的结构性权力。',
          ],
        },

        qaHowAIChangePower: {
          title: 'AI如何改变全球力量？',
          content: [
            'AI改变全球力量的方式与蒸汽机或电力相同——通过放大现有能力。拥有最强AI系统的国家可以：自动化科学研究和药物发现（加速技术优势）；优化军事物流和武器系统设计（军事优势）；处理大规模监视数据（情报优势）；进行网络操作和漏洞发现（网络力量）；自动化行政和经济管理（治理能力）。从经济角度，OECD预计AI可在2030年之前为全球GDP贡献$15.7万亿——这是按GDP计算的大国战争级竞争资源。国家不会放弃这种优势。',
          ],
        },

        geopoliticsOfAI: {
          title: 'AI地缘政治',
          content: [
            'AI地缘政治是指国家为实现战略优势而争夺AI开发资源（计算芯片、顶级研究人员、训练数据）和全球AI市场的竞争。三个主要竞争者：',
            '**美国** 拥有最强的前沿模型（OpenAI、Anthropic、Google）和领先的芯片设计（Nvidia）。战略是维持技术领导力并向盟国出口AI，同时通过GPU出口管制限制中国。',
            '**中国** 通过大规模研究投资和国内模型开发（百度、阿里巴巴、腾讯、DeepSeek）追赶。战略是实现国内自给自足，避免对美国芯片的依赖，并通过一带一路向全球南方出口AI。',
            '**欧盟** 通过监管（EU AI法案）和投资Mistral等独立模型来建立战略自主权。战略是不依赖美国或中国的AI，同时成为全球AI治理的声音。',
          ],
        },

        keyEntitiesRelationships: {
          title: 'AI地缘政治中的关键实体及其关系',
          content: [
            '在AI地缘政治中起关键作用的主要组织和个人：',
          ],
          items: [
            '**政府：** 美国（White House、NSA、Defense Dept.）、中国（CAC、NDRC）、欧盟（欧盟委员会、欧洲议会）、英国（AISI）。',
            '**AI公司：** OpenAI（美国，GPT-5.5）、Anthropic（美国，Claude）、Google DeepMind（英国，Gemini）、Meta（美国，Llama）、Mistral AI（法国）、Alibaba（中国，Qwen）、Baidu（中国，ERNIE）、DeepSeek（中国）。',
            '**芯片制造商：** NVIDIA（美国）、TSMC（台湾）、Samsung（韩国）、Intel（美国）。',
            '**政策制定者和思想领袖：** Ursula von der Leyen（欧盟委员会主席）、Emmanuel Macron（法国总统）、Rishi Sunak（前英国首相）、Demis Hassabis（Google DeepMind CEO）、Sam Altman（OpenAI CEO）。',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: 'AI的5个地缘政治维度',
          content: [
            'AI地缘政治跨越五个关键维度，每个维度代表国家竞争和组织风险：',
          ],
          items: [
            '1. **计算资源（芯片）** — 谁能购买先进GPU？美国通过出口管制限制中国获得Nvidia H100。TSMC在台湾的芯片制造是单点故障。',
            '2. **人才争夺** — 美国吸引全球顶级AI研究人员到硅谷。中国国内培养大量计算机科学博士。欧盟面临人才流失到美国。',
            '3. **法律框架** — 谁设定全球标准？EU AI法案设定了监管先例（布鲁塞尔效应）。美国采用部门化方式。中国对国内AI实施严格内容控制。',
            '4. **市场准入** — 哪些国家的AI产品可以在哪些市场销售？欧盟强制合规。中国对外国AI设置防火长城障碍。美国主导出口。',
            '5. **军事应用** — AI如何改变战争？自主武器系统、网络操作、情报分析。每个大国都在开发军事AI应用。',
          ],
        },

        aiArmsRace: {
          title: 'AI军备竞争：美国、中国和欧盟',
          content: [
            '美国、中国和欧盟处于AI优势的三方竞争中，每个都追求不同的战略：',
            '**美国的方式：** 优先级竞争力。政府资金（国家AI倡议）支持私营AI公司（OpenAI、Anthropic、Google）。出口管制阻止中国获得顶级芯片。盟国优先权分配。',
            '**中国的方式：** 优先级国家自给自足。政府指导的AI开发（百度、阿里巴巴）加上内容控制（CAC）。国家芯片制造投资。一带一路出口。',
            '**欧盟的方式：** 优先级监管领导力和战略自主权。EU AI法案作为全球规范。Mistral AI作为欧洲冠军。GDPR和数据主权。',
          ],
        },

        euAIAct: {
          title: 'EU AI法案：具体要求',
          content: [
            'EU AI法案将AI系统分为四个风险级别，每个级别对组织施加不同的义务：',
            '**不可接受风险（禁止）：** 社会评分系统、实时生物特征监控、利用认知漏洞的AI、无差别面部图像抓取。罚款：€3500万或全球营业额的7%。',
            '**高风险AI：** 用于招聘、信贷决策、执法、医疗的系统。需要符合性评估、人工监督、审计日志。罚款：€1500万或全球营业额的3%。',
            '**有限风险AI：** 与人互动或生成内容的系统（聊天机器人、内容生成）。需要披露AI使用。罚款：€750万或全球营业额的1%。',
            '**最小风险AI：** 游戏、推荐系统。无特定义务。',
            '**实施期限：** 立法概述（2024年3月）已通过。完整执法从2026年8月开始。',
          ],
        },

        euMemberStates: {
          title: '欧盟成员国：国家AI战略',
          content: [
            '欧盟成员国正在制定补充EU AI法案的国家AI战略：',
          ],
          items: [
            '**德国：** €50亿AI和芯片投资计划。焦点：自主AI能力和工业应用。AI战略委员会指导政策。',
            '**法国：** €20亿投资加上支持Mistral AI作为欧洲冠军。焦点：AI主权和减少对美国模型的依赖。',
            '**荷兰：** ASML（EUV光刻机制造）作为战略资产。焦点：芯片供应链主权。',
            '**英国：** AI安全研究所（AISI）进行前沿模型安全研究。焦点：AI安全而非产业支持。',
          ],
        },

        franceMistral: {
          title: '法国和Mistral：建立欧洲AI独立',
          content: [
            'Mistral AI是法国开源AI模型开发商，代表欧洲减少对OpenAI和Google的依赖的努力。Mistral Large是一个开源模型，由于其开源许可证，满足欧盟数据驻留要求——组织可以在自己的基础设施上本地运行它，无需将数据发送到美国。Mistral AI获得法国政府和European Innovation Council的资金支持。战略价值：一个独立的欧洲AI模型减少了对美国技术的依赖，并强化了欧盟的"战略自主权"言论。',
          ],
        },

        nonEuEurope: {
          title: '非欧盟欧洲：英国、瑞士、挪威、乌克兰',
          content: [
            '欧盟外的欧洲国家正在制定独立的AI战略：',
            '**英国：** 脱欧后，英国采用了比欧盟更轻松的AI监管方法。AI安全研究所（AISI）而非强制性执法。与美国合作进行AI安全。',
            '**瑞士：** 中立立场，与欧盟和美国都有贸易。自己的AI监管考虑中。',
            '**挪威：** 技术前沿国家，投资AI研究。与美国和欧盟盟国对齐。',
            '**乌克兰：** 面临俄罗斯的国家安全威胁，优先级网络防御和军事AI应用。',
          ],
        },

        usStrategy: {
          title: '美国战略：行政令、CHIPS法案、NIST',
          content: [
            '美国采用分散的AI政策方法，优先级竞争力而非监管：',
            '**CHIPS and Science Act（2022）：** $520亿用于国内半导体制造。旨在减少对台湾TSMC的依赖并加强美国芯片供应链。',
            '**GPU出口管制：** 美国禁止向中国出口Nvidia H100和H200 GPU（用于训练大型模型）。目标：延缓中国AI开发。',
            '**NIST AI Risk Management Framework：** 自愿性框架，无强制执行。不是法律，而是建议。',
            '**Trump AI Action Plan（2025）：** 于2025年1月推出，取代Biden关于AI安全的行政令。强调竞争力而非安全。',
            '**联邦监管分散：** FTC处理消费者保护，FDA处理医疗AI，CFPB处理金融。没有统一的AI法。',
          ],
        },

        chinaStrategy: {
          title: '中国AI战略：中国制造2025、CAC监管、DeepSeek',
          content: [
            '中国将AI视为国家战略优先事项，优先级国内能力和内容控制：',
            '**中国制造2025：** 国家计划实现高端制造业自给自足，包括半导体和AI。政府指导的投资。',
            '**国家新一代AI发展计划：** 2017年启动，目标2030年在AI竞争中全球领先。目标¥1万亿（$1400亿）投资2021–2025年。',
            '**CAC（中国网络空间管理部门）监管：** 所有生成式AI必须通过CAC审查。内容过滤强制内容符合"社会主义核心价值观"。算法推荐必须满足CAC标准。',
            '**PIPL（个人信息保护法，2021）：** 中国用户数据必须存储在中国或通过官方通道转移。限制外国AI公司对中国用户数据的访问。',
            '**DeepSeek R1（2025年1月）：** 中国模型与GPT-5.5在关键基准上相当。表明中国AI能力正在快速进步。',
          ],
        },

        chinaModels: {
          title: '中国：可用的模型',
          content: [
            '对于在中国运营的开发者，可用的模型有限制：',
          ],
          items: [
            '**Alibaba Qwen 3：** 开源权重（Apache 2.0），7B至72B参数，128K上下文。分数接近GPT-5.5在多个基准上。可在中国外自托管。',
            '**Baidu ERNIE 4.0：** 通过Qianfan API可用。CAC注册。在中文任务上强大。',
            '**ByteDance Doubao：** 通过Volcano Engine API可用。面向中国市场优化。',
            '**DeepSeek R1：** 新型推理模型。与GPT-5.5相当。经过CAC审查。',
            '**Z.ai GLM-4：** 多语言模型。通过API可用。',
            '**外国模型（GPT-5.5、Claude、Gemini）：** 在中国大陆无法访问，除非使用VPN。',
          ],
        },

        chinaContentFilters: {
          title: '中国：内容过滤和CAC要求',
          content: [
            'CAC的生成式AI措施（2023年）对所有中国生成式AI服务强制内容过滤。作为开发者，了解这些限制对于部署至关重要：',
            '**禁止的主题：** CPC领导批评，台湾/西藏/新疆独立，1989年天安门事件，任何损害"社会主义核心价值观"的内容。',
            '**API实现：** 当发出包含禁止内容的请求时，API返回HTTP 200（成功）但is_safe: 0。这**不是**HTTP 4xx（错误）。您的应用代码必须检查is_safe值并相应处理。',
            '**示例API响应：** ',
            '```json',
            '{ "response": "...", "is_safe": 0, "reason": "content violates CAC guidelines" }',
            '```',
            '**合规：** 所有面向中国消费者的生成式AI需要通过CAC进行安全评估（45–90天）。',
          ],
        },

        chinaDataResidency: {
          title: '中国：PIPL数据驻留、实用API和部署示例',
          content: [
            'PIPL（个人信息保护法，2021年）要求中国用户的个人数据存储在中国或通过官方安全评估程序进行转移：',
            '**数据驻留规则：** 任何识别中国用户的数据（名字、电话、地址）必须：',
            '1. 存储在中国大陆服务器上，或',
            '2. 通过中国政府批准的跨境转移机制进行转移。',
            '**部署选项：** ',
            '- **Alibaba Cloud（中国）：** Qwen API，数据驻留在中国。',
            '- **Tencent Cloud（中国）：** 多个模型的API，数据驻留在中国。',
            '- **Huawei Cloud（中国）：** AI服务，数据驻留在中国。',
            '**外国公司的实用方法：** 与中国云提供商（Alibaba、Tencent）合作。他们作为数据处理者，处理所有CAC合规性。您的代码通过API与他们互动。',
          ],
        },

        globalRegulation: {
          title: '全球AI监管对比：欧盟 vs 美国 vs 中国',
          content: '三个主要监管方式出现了，对组织有不同的影响：',
          columns: ['维度', '欧盟', '美国', '中国'],
          rows: [
            { '维度': '**方式**', '欧盟': '权利为基础，强制', '美国': '部门化，自愿', '中国': '国家控制，强制' },
            { '维度': '**关键法律**', '欧盟': 'EU AI法案（2024）', '美国': '无联邦AI法', '中国': 'CAC监管（2023）' },
            { '维度': '**执法**', '欧盟': 'EU AI办公室 + 国家机构', '美国': 'FTC、FDA等', '中国': 'CAC' },
            { '维度': '**最高罚款**', '欧盟': '€3500万或全球营业额7%', '美国': '无AI特定罚款', '中国': '¥10万+服务暂停' },
            { '维度': '**数据保护**', '欧盟': 'GDPR强制', '美国': '部门化（HIPAA、CCPA）', '中国': 'PIPL强制' },
            { '维度': '**禁止内容**', '欧盟': '社会评分、生物特征监控', '美国': '无联邦禁令', '中国': 'CPC批评、分离主义内容' },
            { '维度': '**国际范围**', '欧盟': '布鲁塞尔效应（属地外）', '美国': '硬件管制仅', '中国': '国内防火长城' },
          ],
        },

        aiGlobalPower: {
          title: 'AI和全球力量竞争',
          content: [
            'AI正在变成全球权力竞争的中心，就像20世纪的核武器或芯片一样：',
            '**经济力量：** AI驱动生产力。拥有最强AI的国家将在经济竞争力上获胜。OECD预计AI可在2030年前为全球GDP贡献$15.7万亿。',
            '**军事力量：** AI驱动自主武器系统、网络攻击、军事物流优化。每个大国都在开发军事AI。',
            '**情报力量：** AI处理大规模监视数据、语言翻译、模式识别。美国国家安全机构依赖AI。',
            '**网络力量：** AI发现软件漏洞、自动化网络攻击、检测网络防御。网络战争越来越自动化。',
            '**治理力量：** AI管理经济（市场操纵检测）、内容（内容审核）、公共秩序（监视和社会评分）。中国使用AI进行大规模监视。',
          ],
        },

        aiGeopoliticalRisks: {
          title: 'AI地缘政治风险：对组织的含义',
          content: [
            '对于部署AI的组织，地缘政治竞争创造了三种主要风险：',
            '**合规风险：** 三个矛盾的监管框架（EU AI法案、美国部门法、中国CAC）可能无法同时满足。',
            '**供应链风险：** 芯片（TSMC台湾）、顶级模型（OpenAI美国）、数据（地理分布）的依赖性。中美冲突可能会中断供应链。',
            '**内容审查风险：** 在中国运营意味着接受CAC内容过滤。在欧盟运营意味着接受AI Act披露。在美国运营意味着分散的部门监管。',
            '塑造模型可用性的地缘政治动态使开源与专有的问题尤为重要。关于开源何时胜出以及专有模型何时物有所值的完整比较，请参阅[开源与专有LLM](https://www.promptquorum.com/zh/prompt-engineering/open-source-vs-proprietary-llms)。',
          ],
        },

        defAIGeopolitics: {
          title: '什么是AI地缘政治？',
          content: [
            'AI地缘政治是指国家、公司和联盟为获取和控制AI开发中的关键资源（芯片、人才、训练数据）以及全球AI市场的竞争。这类似于冷战期间关于核武器或芯片的竞争。当前的AI地缘政治由三个主要竞争者定义：美国（领先的模型和芯片设计）、中国（快速赶上并追求自给自足）和欧盟（通过监管和独立模型追求战略自主权）。',
          ],
        },

        whoIsWinning: {
          title: '谁在赢得全球AI竞争？',
          content: [
            '到2026年，不清楚谁在"赢"，因为每个参与者优先级不同的指标：',
            '**美国领先：** 前沿模型能力（GPT-5.5 > Qwen 3）、GPU设计（Nvidia）、人才吸引力。',
            '**中国赶上：** AI专利数量（全球70%）、成本效率（DeepSeek）、国内市场（4亿用户）。',
            '**欧盟领先：** 监管框架（EU AI法案作为全球规范）、数据权利（GDPR）、独立模型（Mistral）。',
            'DeepSeek R1在2025年1月的发布表明中国的快速进步。美国不能再假设技术优势是永久的。',
          ],
        },

        defBrusselEffect: {
          title: '什么是AI中的布鲁塞尔效应？',
          content: [
            '布鲁塞尔效应描述欧盟法规如何成为事实上的全球标准，因为跨国公司发现为全球市场应用最严格的标准比维护每个管辖区的单独配置更简单和更便宜。对于AI，这意味着EU AI Act实际上为所有全球AI公司设定了标准——即使是美国或中国公司，也必须遵守EU AI Act要求，以为欧盟用户提供服务。这使欧盟成为全球AI规则的制定者，即使它在前沿AI模型上落后。',
          ],
        },

        defHighRiskAI: {
          title: '定义：高风险AI系统',
          content: [
            '在EU AI法案下，高风险AI系统是那些对个人权利有重大影响的系统。示例包括：',
            '- 招聘和晋升决策中使用的AI（可能会导致歧视）',
            '- 信贷决策（可能会拒绝贷款）',
            '- 医疗诊断（可能会影响治疗）',
            '- 执法（可能会导致逮捕或拘禁）',
            '- 教育评估（可能会影响学生的未来）',
            '高风险AI需要符合性评估、人工监督、可解释性文件和审计日志。罚款最高€1500万或全球营业额的3%。',
          ],
        },

        defGPAI: {
          title: '定义：通用AI（GPAI）',
          content: [
            '通用AI（GPAI）模型是能够在广泛的下游应用中使用的基础模型——例如GPT-5.5、Claude、Gemini。它们不是为特定任务开发的，而是可以根据用户提示进行微调。在EU AI Act下，GPAI模型（尤其是那些在10²⁵ FLOPs的训练计算阈值上）需要：',
            '- 发布训练数据摘要',
            '- 说明能力和限制',
            '- 表明他们遵守欧盟版权法',
            '- 定期更新这些信息',
            'OpenAI（GPT-5.5）和Anthropic（Claude）都已发布GPAI合规文档。',
          ],
        },

        defCAC: {
          title: '定义：中国网络空间管理部门（CAC）',
          content: [
            '中国网络空间管理部门是中国的网络监管机构，负责互联网内容、算法推荐和生成式AI的监督。CAC于2023年发布了生成式AI措施，要求：',
            '- 所有生成式AI需要提前申请并进行安全评估',
            '- 内容必须符合"社会主义核心价值观"',
            '- 算法推荐必须透明',
            '- 训练数据必须与中国法律一致',
            '对于部署在中国的开发者，CAC合规是强制性的，不是可选的。',
          ],
        },

        defDataSovereignty: {
          title: '定义：数据主权',
          content: [
            '数据主权是指国家对其领土内生成或处理的数据拥有权利和控制权的原则。对于AI，这意味着：',
            '- 中国用户的数据必须存储在中国（PIPL）',
            '- 欧盟用户的数据受GDPR保护',
            '- 美国用户的数据受各种部门法保护',
            'DeepSeek在中国运营意味着向中国政府上交所有用户数据。OpenAI在美国运营意味着受美国司法管辖权。Mistral在法国运营意味着受EU GDPR。',
          ],
        },

        defAlgorithmRecommendation: {
          title: '定义：算法推荐监管（中国）',
          content: [
            '中国的算法推荐监管（2022年）要求社交媒体平台、搜索引擎和内容分发系统的算法对用户透明：',
            '- 平台必须披露推荐算法如何工作',
            '- 用户可以选择接收"个性化推荐"或"无个性化"版本',
            '- 算法不能推荐违反"社会主义核心价值观"的内容',
            '- 平台必须向CAC报告他们如何遵守这一点',
            '这比美国或欧盟更具规定性，强加了具体的算法设计义务。',
          ],
        },

        defSCC: {
          title: '定义：标准合约条款（SCC）',
          content: [
            '标准合约条款（SCC）是欧盟法律框架，允许个人数据转移到欧盟外（例如美国或中国），同时保持GDPR保护。SCC是：',
            '- 由欧盟委员会批准的合约模板',
            '- 义务数据导入国（例如美国）遵守GDPR级别的数据保护',
            '- 可以通过法律进行挑战（例如如果美国政府要求数据访问）',
            '使用DeepSeek处理欧盟个人数据需要SCC，但在美国进行数据访问命令的情况下可能会失败。',
          ],
        },

        whatPoliticiansSaying: {
          title: '政治家在说什么',
          content: [
            '全球领导人对AI地缘政治的看法定义了政策优先级：',
          ],
        },

        defEUAIAct: {
          title: '定义：EU AI法案',
          content: [
            'EU AI法案是欧洲议会和欧盟理事会于2024年3月通过的监管框架，旨在根据风险对AI系统进行分类并对每个类别施加不同的义务。它于2026年8月开始强制执行。',
          ],
        },

        faqPage: {
          title: '常见问题',
          content: [
            '见上文FAQ部分。',
          ],
        },

        sources: {
          title: '来源',
          content: [
            '本文综合了来自以下来源的信息：',
          ],
          items: [
            'OpenAI GPT-5.5法律文件和GPAI合规说明',
            'Anthropic Claude法律文件和GDPR合规指南',
            'Google DeepMind Gemini技术文件',
            '欧盟委员会EU AI法案官方文本（2024年）',
            '中国网络空间管理部门生成式AI措施（2023年）',
            'US NIST AI风险管理框架（2023年）',
            'WIPO全球创新指数（2022年）',
            'Stanford HAI人工智能指数（2024年）',
            'DeepSeek R1技术报告（2025年）',
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[EU AI法案：实际合规要求](/zh/prompt-engineering/eu-ai-act-compliance-guide)',
            '[如何在中国部署AI产品](/zh/prompt-engineering/ai-deployment-china)',
            '[提示工程和地缘政治：技能构建指南](/zh/prompt-engineering/prompt-engineering-geopolitics)',
            '[GDPR和AI：数据保护指南](/zh/prompt-engineering/gdpr-ai-data-protection)',
          ],
        },
      },
    },
    pt: {
      theme: 'Policy & Compliance',
      title: 'Geopolítica da IA explicada: EU AI Act vs. EUA vs. China (Análise 2026)',
      intro: 'EUA, China e União Europeia perseguem visões incompatíveis de governança da IA — os EUA priorizam a competitividade, a China enfatiza o controle estatal e a UE constrói um framework jurídico baseado em direitos. Para organizações que implementam IA, essas diferenças se traduzem em obrigações concretas de conformidade, restrições de aquisição e requisitos de residência de dados que se aplicam independentemente de onde a organização está sediada.',
      metaDescription: 'EU AI Act, controles de exportação dos EUA e CAC da China: três frameworks incompatíveis. Como afetam a aquisição de IA e a residência de dados em 2026.',
      seoTitle: 'Geopolítica da IA 2026: Análise EUA, UE e China',
      publishDate: '2026-04-01',
      readTime: '16 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Geopolítica da IA',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'url': 'https://www.promptquorum.com/pt/pt/prompt-engineering/geopolitics-and-ai',
        headline: 'Geopolítica da IA explicada: EU AI Act vs. EUA vs. China (Análise 2026)',
        description: 'EUA, China e União Europeia perseguem visões incompatíveis de governança da IA. Para organizações que implementam IA, essas diferenças se traduzem em obrigações concretas de conformidade, restrições de aquisição e requisitos de residência de dados.',
        datePublished: '2026-04-01',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/pt/api/og/geopolitics-and-ai', width: 1200, height: 630 },
        inLanguage: 'pt-BR',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'O que é o EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O EU AI Act é o primeiro framework legal abrangente do mundo para inteligência artificial, aprovado pelo Parlamento Europeu em março de 2024 com 523 votos a favor. Ele classifica sistemas de IA em quatro níveis de risco — Inaceitável, Alto, Limitado e Mínimo — e aplica diferentes requisitos e multas a cada nível. A aplicação plena entra em vigor em agosto de 2026.' } },
          { '@type': 'Question', 'name': 'O EU AI Act se aplica a empresas fora da UE?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. O EU AI Act se aplica a qualquer organização que coloque sistemas de IA no mercado da UE ou cujos resultados de IA sejam utilizados na UE, independentemente de onde a organização está sediada. Esse alcance extraterritorial é chamado de Efeito Bruxelas e significa que fornecedores de IA dos EUA e da Ásia também precisam estar em conformidade se atenderem usuários da UE.' } },
          { '@type': 'Question', 'name': 'Quais são as multas por violar o EU AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'As multas chegam a até €35 milhões ou 7% do faturamento anual global por práticas de IA proibidas (o que for maior). Violações de IA de alto risco acarretam multas de até €15 milhões ou 3% do faturamento global. Fornecer informações incorretas às autoridades acarreta multas de até €7,5 milhões ou 1% do faturamento global.' } },
          { '@type': 'Question', 'name': 'Quais aplicações de IA a UE proíbe completamente?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O EU AI Act proíbe: sistemas de pontuação social por autoridades públicas, vigilância biométrica em tempo real em espaços públicos (com exceções restritas para forças de segurança), IA que explore vulnerabilidades cognitivas e coleta indiscriminada de imagens faciais da internet para construir bancos de dados de reconhecimento. Esses são categorizados como Risco Inaceitável.' } },
          { '@type': 'Question', 'name': 'Como a regulação de IA dos EUA difere da abordagem da UE?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Os EUA utilizam uma abordagem setorial e voluntária — reguladores existentes (FTC, FDA, CFPB, EEOC) aplicam seus mandatos à IA em seus domínios. Não existe lei federal de IA equivalente ao EU AI Act. A Ordem Executiva de Biden sobre Segurança de IA (outubro de 2023) foi revogada pela administração Trump em janeiro de 2025 e substituída por um Plano de Ação de IA focado em competitividade.' } },
          { '@type': 'Question', 'name': 'A IA da China é tão capaz quanto os sistemas de IA dos EUA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O DeepSeek R1, lançado em janeiro de 2025, superou o GPT-5.5 em benchmarks de raciocínio e codificação (AIME 2024: 79,8% vs 74,4% do GPT-5.5, MATH-500: 97,3%, HumanEval) enquanto supostamente foi treinado a um custo de ~US$6 milhões — uma redução de 94% em relação aos custos estimados de treinamento de modelos de fronteira. Os modelos líderes da China são competitivos em muitas tarefas, mas ficam atrás em raciocínio multilíngue e benchmarks de segurança.' } },
          { '@type': 'Question', 'name': 'Empresas da UE podem usar GPT-5.5 e Claude sob o AI Act?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim, para a maioria dos casos de uso. GPT-5.5 e Claude Opus 4.8 se qualificam como modelos de IA de Propósito Geral (GPAI) e devem cumprir obrigações de transparência — incluindo publicar resumos de dados de treinamento e cumprir a lei de direitos autorais da UE — que entraram em vigor em agosto de 2025. OpenAI e Anthropic publicaram documentação de conformidade GPAI para usuários da UE.' } },
          { '@type': 'Question', 'name': 'Como o DeepSeek afeta a corrida geopolítica de IA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O lançamento do DeepSeek R1 em janeiro de 2025 demonstrou que capacidades de IA de fronteira são alcançáveis a custos de computação significativamente menores do que se assumia anteriormente. Isso enfraquece o argumento de que os controles de exportação sobre GPUs da Nvidia limitarão permanentemente o desenvolvimento de IA na China. Acelerou debates de política nos EUA e na UE sobre se estratégias de contenção baseadas em computação são suficientes.' } },
          { '@type': 'Question', 'name': 'O que é o Efeito Bruxelas na IA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O Efeito Bruxelas descreve como as regulamentações da UE se tornam padrões globais de fato porque empresas multinacionais consideram mais fácil aplicar o padrão mais rigoroso em todo o mundo em vez de manter pilhas de conformidade separadas por jurisdição. Para a IA, isso significa que o EU AI Act efetivamente eleva os padrões para GPT-5.5, Claude e Gemini globalmente — independentemente de onde os usuários estão localizados.' } },
          { '@type': 'Question', 'name': 'Organizações da UE podem usar DeepSeek para aplicações comerciais?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tecnicamente sim, com Cláusulas Contratuais Padrão (SCC) em conformidade com o RGPD. Na prática, as SCCs são difíceis de aplicar diante das obrigações da lei chinesa que exigem conformidade com o acesso a dados do CAC. Alemanha (BSI), França (ANSSI) e Países Baixos (NCSC) emitiram avisos restringindo ferramentas de IA chinesas para o governo e infraestruturas críticas. Organizações do setor privado precisam realizar uma Avaliação de Impacto de Transferência nos termos do Artigo 46 do RGPD antes de processar dados pessoais por meio do DeepSeek.' } },
          { '@type': 'Question', 'name': 'Quais frameworks de governança de IA existem na América Latina?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A América Latina não possui equivalente ao EU AI Act. A Colômbia lidera com o Conpes 3975 (2019), uma política nacional de IA com diretrizes voluntárias sobre governança responsável. O Brasil avança em legislação específica para IA. Chile, México e Argentina publicaram estratégias nacionais de IA. A maioria dos frameworks latino-americanos se alinha com os princípios de IA da OCDE e são voluntários, sem sanções vinculantes equivalentes às do EU AI Act.' } },
        ],
      },
      gammaEmbedUrl: '/presentations/geopolitics-and-ai-static.html',
      gammaDescription: 'O deck de slides aborda: requisitos de residência de dados por região (UE RGPD, China PIPL, Índia DPDP), seleção de modelos conforme o contexto geopolítico, panorama regulatório de IA nas principais jurisdições e uma lista de verificação de conformidade. Baixe o PDF como cartão de referência de implantação de IA geopolítica.',
      sections: {
        tldr: {
          title: 'Pontos-chave',
          isTldr: true,
          items: [
            'A IA é uma tecnologia estratégica nacional — EUA, China e UE competem pela dominância.',
            'Os países competem por três recursos: computação (chips), talentos em IA e dados de treinamento.',
            'A IA afeta simultaneamente a capacidade militar, a competitividade econômica e o poder cibernético.',
            'O EU AI Act é a primeira lei vinculante de IA do mundo — multas chegam a €35M ou 7% do faturamento global.',
            'Efeito Bruxelas: as regras do EU AI Act se aplicam a qualquer IA que alcance usuários da UE, em todo o mundo.',
            'Os EUA não têm lei federal de IA — reguladores setoriais aplicam mandatos existentes à IA em seus domínios.',
            'Os EUA revogaram sua ordem executiva de segurança em IA em janeiro de 2025 — competitividade agora lidera sobre segurança.',
            'O DeepSeek R1 da China superou o GPT-5.5 em benchmarks-chave (AIME, MATH, HumanEval) a um custo de treinamento de US$6M — redução de 94% — demonstrando que controles de exportação de GPU têm limites.',
            'A TSMC em Taiwan fabrica os chips que alimentam toda a IA de fronteira — uma única dependência geopolítica.',
            'As organizações precisam cumprir simultaneamente três frameworks regulatórios incompatíveis: UE, EUA e China.',
          ],
        },

        quickFacts: {
          title: 'Fatos rápidos: Geopolítica da IA em resumo',
          items: [
            '**EU AI Act:** Primeira lei vinculante de IA do mundo. Aplicação de alto risco: 2 de agosto de 2026 (pode ser adiada até 2 de dezembro de 2027 pelo Omnibus Digital, pendente de acordo de trílogo programado para 13 de maio de 2026). Multas: até €35 milhões ou 7% da receita anual global.',
            '**Política de IA dos EUA:** Sem lei federal de IA. Administração Trump buscando pré-emissão de leis estaduais via EO 14365 (dezembro de 2025), Framework Nacional (março de 2026) e proposta TRUMP AMERICA AI Act (março de 2026). Múltiplos prazos de implementação perdidos até maio de 2026.',
            '**Governança de IA na China:** Avaliação prévia ao lançamento do CAC (Administração do Ciberespaço da China) obrigatória. Filtros de conteúdo bloqueiam críticas ao PCCh, discussões sobre Taiwan/Tibet/Xinjiang e conteúdo que mina os "valores socialistas fundamentais". Os filtros retornam HTTP 200 com flag `is_safe: 0` (não erros 4xx). A PIPL exige residência de dados para dados pessoais chineses.',
            '**Gargalos de hardware:** Nvidia controla ~80% do mercado de GPU para treinamento de IA. TSMC fabrica ~90% dos semicondutores avançados. Ambos são pontos críticos geopolíticos. A CHIPS Act dos EUA (US$52B) visa reduzir a dependência da TSMC.',
            '**Impacto do DeepSeek R1:** Superou o GPT-5.5 em raciocínio/codificação (AIME 2024, MATH, HumanEval) a um custo estimado de treinamento de ~US$6M (redução de 94% em relação às estimativas de modelos de fronteira). Treinado em GPUs Nvidia H800 restritas para a China. Demonstra que controles de exportação de hardware têm limites.',
            '**Conflito regulatório global:** A UE foca em direitos e segurança; os EUA focam em inovação e competitividade; a China foca em controle estatal e vantagem estratégica. Organizações que implantam IA globalmente precisam navegar por três frameworks incompatíveis simultaneamente.',
          ],
        },

        euImplications: {
          title: 'Se você é uma organização com sede na UE: Prazos críticos de conformidade',
          content: [
            '**O EU AI Act é vinculante e aplicado a partir de agosto de 2026.** Se a sua organização está sediada na UE ou atende usuários da UE, você deve cumprir seu sistema de classificação de risco em quatro níveis. Multas por práticas proibidas chegam a €35 milhões ou 7% do faturamento global — o que for maior. O não cumprimento não é negociável.',
            '**Se você implanta GPT-5.5, Claude Opus 4.8 ou Gemini 3.1 Pro na UE, você deve auditar sua documentação de conformidade de IA de Propósito Geral (GPAI).** OpenAI, Anthropic e Google publicaram documentação de transparência (resumos de dados de treinamento, limitações de capacidades, testes de segurança) a partir de agosto de 2025. Guarde essas atestações como prova de conformidade — os reguladores vão solicitá-las.',
            '**Sistemas de IA de alto risco (contratação, decisões de crédito, saúde, aplicação da lei) exigem avaliações de conformidade antes da implantação.** Isso significa testes de viés, documentação de mecanismos de supervisão humana e trilhas de auditoria de todas as decisões de IA. Modelos de pesos abertos implantados localmente (LLaMA via Ollama, Mistral Large) satisfazem os requisitos de residência de dados — nenhum dado sai da sua infraestrutura e você controla a trilha de auditoria.',
            '**O Efeito Bruxelas se aplica a você.** Se o seu sistema de IA alcança um único residente da UE, o EU AI Act se aplica — mesmo que sua empresa esteja sediada nos EUA ou na China. Isso significa que aplicar o mesmo nível de conformidade globalmente costuma ser mais simples do que manter múltiplas configurações.',
          ],
        },

        promptEngineerTakeaways: {
          title: 'Pontos-chave para engenheiros de prompt',
          isTldr: true,
          items: [
            'APIs de IA chinesas (DeepSeek, ERNIE 4.0, Qwen via Alibaba Cloud) filtram conteúdo no nível da API — tópicos políticos, críticas ao PCCh e Taiwan/Tibet/Xinjiang retornam `is_safe: 0` em respostas HTTP 200, não HTTP 4xx. Trate esses casos explicitamente no código da sua aplicação.',
            'Modelos Mistral e implantações locais do Ollama satisfazem os requisitos de residência de dados do EU AI Act — prompts e saídas nunca saem da sua infraestrutura. Esse é o caminho de menor atrito para conformidade com EU RGPD + AI Act para engenheiros de prompt.',
            'GPT-5.5 e Claude Opus 4.8 estão em conformidade com GPAI sob o EU AI Act a partir de agosto de 2025. Você pode usá-los em implantações voltadas à UE sem trabalho adicional de conformidade no nível do modelo — sua obrigação está no nível da aplicação (implantador), não no nível do modelo.',
            'O Efeito Bruxelas significa que prompts enviados a modelos hospedados nos EUA para produtos usados por residentes da UE estão sujeitos aos requisitos do EU AI Act — mesmo que sua empresa não seja sediada na UE.',
            'Para testes multijurisdicionais, envie o mesmo prompt simultaneamente para Mistral (em conformidade com a UE), GPT-5.5 (EUA/GPAI) e Qwen (acessível na China) para comparar saídas entre contextos regulatórios. O PromptQuorum suporta isso nativamente.',
          ],
        },

        promptOptimizationByRegion: {
          title: 'Como a geopolítica muda a otimização de prompts: país por país',
          content: [
            '**Onde a saída da sua IA é consumida determina o que seus prompts precisam fazer — e o que precisam evitar.** O idioma afeta o desempenho do modelo diretamente: um prompt escrito em inglês enviado a um modelo chinês (ERNIE 4.0, Qwen) tem desempenho inferior ao mesmo prompt escrito em mandarim. A lei afeta o design de prompts estruturalmente: requisitos de divulgação do EU AI Act, regulamentações setoriais dos EUA e filtros de conteúdo do CAC da China impõem restrições diferentes sobre como os prompts podem ser formulados, quais saídas podem ser geradas e como as aplicações precisam lidar com as respostas.',
          ],
          tableFormat: true,
          columns: ['Região', 'Restrição legal sobre prompts', 'Otimização de idioma', 'Modelo recomendado'],
          rows: [
            {
              'Região': 'União Europeia',
              'Restrição legal sobre prompts': 'EU AI Act: prompts que geram conteúdo que interage com consumidores da UE devem incluir divulgação de IA. RGPD: prompts não devem incluir dados pessoais sem base legal. Aplicações de IA de alto risco (RH, crédito, saúde) exigem supervisão humana — prompts não devem automatizar decisões finais.',
              'Otimização de idioma': 'Escreva prompts no idioma-alvo (alemão, francês, etc.) — GPT-5.5 e Claude Opus 4.8 têm desempenho significativamente melhor em tarefas não inglesas quando os prompts estão no mesmo idioma da saída desejada. Especifique explicitamente o idioma de saída nos prompts do sistema.',
              'Modelo recomendado': 'Mistral Large (francês, com sede na UE), implantação local Ollama (dados nunca saem da infraestrutura) ou GPT-5.5/Claude com endpoints de API da região UE e SCCs.',
            },
            {
              'Região': 'Estados Unidos',
              'Restrição legal sobre prompts': 'Sem lei federal de IA, mas regras setoriais se aplicam: HIPAA (saúde — PHI não deve aparecer nos prompts), CCPA/CPRA (Califórnia — dados pessoais nos prompts aciona direitos do consumidor), FTC Act (prompts não devem gerar conteúdo enganoso em contextos de consumidor). Leis biométricas estaduais (Illinois BIPA) restringem prompts que processam dados faciais/de voz.',
              'Otimização de idioma': 'Modelos de fronteira dos EUA (GPT-5.5, Claude Opus 4.8) são otimizados para inglês e têm desempenho máximo em prompts em inglês. Para mercados hispânicos nos EUA, instrua o modelo explicitamente em espanhol ou use um prompt de sistema bilíngue — não dependa da detecção automática.',
              'Modelo recomendado': 'GPT-5.5 ou Claude Opus 4.8 para uso geral. Para prompts regulados de saúde ou financeiros, use a API com SCCs e evite enviar PHI/PII no contexto do prompt.',
            },
            {
              'Região': 'China',
              'Restrição legal sobre prompts': 'Medidas de IA Generativa do CAC (2023): prompts que solicitam conteúdo sobre a liderança do PCCh, independência de Taiwan/Tibet/Xinjiang, os eventos de Tiananmen de 1989 ou qualquer coisa que mine os "valores socialistas fundamentais" serão bloqueados. Retornados como HTTP 200 com `is_safe: 0`. PIPL: prompts contendo dados pessoais de usuários chineses não devem ser roteados para servidores fora da China.',
              'Otimização de idioma': 'Escreva prompts em chinês simplificado (mandarim) para tarefas em chinês — Qwen 3 e ERNIE 4.0 pontuam 10–20% mais alto em benchmarks em chinês (C-Eval) vs. o mesmo prompt em inglês. Use Pinyin ou inglês para terminologia técnica quando não existir equivalente em chinês.',
              'Modelo recomendado': 'Qwen 3 72B (auto-hospedado fora da China, sem filtros do CAC) para tarefas transfronteiriças. ERNIE 4.0 via API Qianfan (registrado no CAC) para implantações voltadas ao consumidor na China. DeepSeek R1 para tarefas de raciocínio que não tocam áreas de conteúdo filtrado.',
            },
            {
              'Região': 'Reino Unido / Pós-Brexit',
              'Restrição legal sobre prompts': 'UK RGPD (equivalente ao RGPD da UE) aplica-se a dados pessoais. UK AI Safety Institute foca na avaliação de modelos de fronteira, não em conformidade no nível de aplicação. Sem lei obrigatória de divulgação de IA — o Reino Unido escolheu uma abordagem pró-inovação e liderada pelo setor. OFCOM regula conteúdo gerado por IA em contextos de transmissão.',
              'Otimização de idioma': 'Grafias e expressões do inglês britânico nos prompts melhoram a qualidade da saída para conteúdo voltado ao Reino Unido. GPT-5.5 responde a instruções explícitas de "UK English" em prompts do sistema; sem elas, padroniza para inglês americano.',
              'Modelo recomendado': 'GPT-5.5 ou Claude Opus 4.8. Transferências de dados UK-UE exigem SCCs pós-Brexit — decisão de adequação do Reino Unido da UE em vigor, mas sujeita a revisão.',
            },
            {
              'Região': 'Japão',
              'Restrição legal sobre prompts': 'A Lei de Proteção de Informações Pessoais do Japão (APPI) restringe o uso de dados pessoais em prompts de IA. O Japão não tem lei específica de IA (a partir de 2026) — as orientações do METI e do Ministério dos Assuntos Internos são voluntárias. O Japão participou do Processo de IA de Hiroshima — a adesão aos seus 11 princípios é incentivada para empresas japonesas.',
              'Otimização de idioma': 'Prompts em japonês para tarefas em japonês superam prompts em inglês em todos os principais modelos. GPT-5.5 e Claude Opus 4.8 lidam bem com o japonês; Rakuten AI e NTT LLMs estão disponíveis para implantações específicas do Japão. Evite o registro casual (tame-go) em prompts do sistema — a formulação educada (keigo) melhora a conformidade e a qualidade da saída para contextos empresariais japoneses.',
              'Modelo recomendado': 'GPT-5.5 ou Claude Opus 4.8 para tarefas gerais em japonês. Rakuten AI (Rakuten Group) ou NTT LLMs para implantações sensíveis à conformidade no mercado doméstico japonês.',
            },
          ],
        },

        keyStatistics: {
          title: 'Geopolítica da IA: Pontos de dados-chave',
          content: [
            'Os números a seguir representam a escala do investimento governamental em IA, a concentração de hardware e a capacidade de pesquisa que definem a competição geopolítica atual em inteligência artificial.',
          ],
          items: [
            '**Investimento governamental em IA — Estados Unidos:** US$52 bilhões alocados pela CHIPS and Science Act (2022) para fabricação doméstica de semicondutores, mais US$200 bilhões para P&D científica. A National AI Initiative Act financia pesquisa em IA em 25 agências federais.',
            '**Investimento governamental em IA — China:** Estimativa de ¥1 trilhão (US$140 bilhões) em investimentos governamentais em IA e semicondutores 2021–2025, incluindo o Plano Nacional de Desenvolvimento de IA de Nova Geração com meta de liderança global em IA até 2030.',
            '**Investimento governamental em IA — União Europeia:** €1 bilhão do fundo de IA do Conselho Europeu de Inovação; estratégias dos estados-membros adicionam mais de €10 bilhões: Alemanha €5 bilhões (2019–2025), França €2 bilhões, Reino Unido £1 bilhão em segurança e computação de IA.',
            '**Concentração na fabricação de chips:** A TSMC (Taiwan) fabrica aproximadamente 90% dos chips mais avançados do mundo abaixo de 7nm. A ASML (Países Baixos) é o único fabricante de máquinas de litografia EUV necessárias para fabricação de nós avançados — dando aos Países Baixos um gargalo estrutural no fornecimento global de chips.',
            '**Participação de mercado de GPU da Nvidia:** A Nvidia detém aproximadamente 80% de participação de mercado em GPUs de treinamento de IA. As séries H100 e H200 alimentam a maioria do treinamento de modelos de fronteira na OpenAI, Google DeepMind, Anthropic e Baidu.',
            '**Distribuição de pesquisadores de IA:** Os EUA empregam aproximadamente 40% dos melhores pesquisadores de IA do mundo por impacto de publicação (Stanford HAI 2024 AI Index). A China produz o maior número de doutorados em ciência da computação — aproximadamente 50.000 por ano — e representa ~30% dos principais autores de conferências de IA.',
            '**Registros de patentes de IA:** A China registrou aproximadamente 70% das patentes globais de IA em 2022 (WIPO Global Innovation Index). Os EUA lideram em citações e invenções comercializadas; a China lidera em volume.',
            '**Compressão de custo de treinamento de modelos:** Redução de custo de 94% — GPT-4 estimado em ~US$100 milhões em computação de treinamento (2023) vs. o reportado ~US$6 milhões do DeepSeek R1 (janeiro de 2025). Essa diferença demonstra que os controles de exportação de computação dos EUA não podem restringir permanentemente o desenvolvimento de IA de fronteira chinesa.',
            '**Cobertura do EU AI Act:** O Act cobre 450 milhões de consumidores em 27 estados-membros da UE. O limite de risco sistêmico para modelos GPAI é 10²⁵ FLOPs de computação de treinamento — o nível em que requisitos adicionais de teste adversarial se aplicam.',
            '**Declaração de Bletchley (novembro de 2023):** Assinada por 28 nações incluindo EUA, China e estados-membros da UE — o mais amplo consenso internacional de segurança de IA até o momento, embora não vinculante.',
          ],
          image: '/images/ai-regulation-timeline-en.svg',
          imageCaption: 'Linha do tempo regulatória global de IA 2022–2026: proposta do EU AI Act (2021), CHIPS Act (2022), regras do algoritmo CAC (2022–2023), EU AI Act adotado (2024), fase de aplicação jan 2025.',
        },

        qaWhyStrategic: {
          title: 'Por que a IA é estrategicamente importante?',
          content: [
            'A IA é estrategicamente importante porque amplifica a capacidade em cada dimensão do poder nacional simultaneamente — produtividade econômica, eficácia militar, análise de inteligência e operações cibernéticas. Nações com IA líder podem automatizar pesquisa científica, otimizar logística militar, processar dados de vigilância em escala e desenvolver sistemas de armas autônomos. A OCDE projeta que a IA pode adicionar US$15,7 trilhões ao PIB global até 2030, tornando a liderança em IA o equivalente à liderança industrial do século XX. Países que ficam para trás em capacidade de IA enfrentam desvantagens cumulativas em defesa, comércio e diplomacia.',
          ],
        },

        qaWhichCountriesDominate: {
          title: 'Quais países dominam o desenvolvimento de IA?',
          content: [
            'Os Estados Unidos dominam a capacidade de modelos de fronteira — OpenAI (GPT-5.5), Anthropic (Claude) e Google DeepMind (Gemini) são todas sediadas nos EUA. A China lidera em volume de patentes de IA (~70% das patentes globais em 2022 segundo a WIPO) e tem os modelos domésticos mais capazes fora dos EUA: Alibaba Qwen 3, Baidu ERNIE 4.0 e DeepSeek R1. A UE lidera em regulamentação de IA, mas fica atrás em capacidade de fronteira — a Mistral AI da França é o concorrente europeu mais forte. Reino Unido, Canadá e EAU estão investindo em IA como atores independentes em vez de se alinhar exclusivamente com infraestrutura dos EUA ou chinesa.',
          ],
        },

        qaChipsRole: {
          title: 'Qual é o papel dos chips na geopolítica da IA?',
          content: [
            'Os chips semicondutores são o substrato físico da capacidade de IA. Treinar modelos de fronteira requer milhares de GPUs especializadas rodando por meses — uma única execução de treinamento para um modelo grande pode custar de US$10 a US$100 milhões em computação. A Nvidia detém aproximadamente 80% do mercado de GPU de treinamento de IA; a TSMC em Taiwan as fabrica. Isso cria dois gargalos geopolíticos: os EUA podem restringir exportações de GPU da Nvidia para nações adversárias (restrindo vendas de A100 e H100 para a China desde 2022), e qualquer perturbação nas operações da TSMC reduziria imediatamente o fornecimento global de hardware de IA. A CHIPS and Science Act dos EUA (US$52 bilhões) financia explicitamente capacidade doméstica de fabricação para reduzir essa dependência de ponto único.',
          ],
        },

        qaHowAIChangePower: {
          title: 'Como a IA poderia mudar o poder global?',
          content: [
            'A IA poderia mudar o poder global tornando as nações líderes em IA desproporcionalmente poderosas em relação ao seu tamanho econômico ou populacional. Militarmente, a IA permite direcionamento autônomo, otimização de logística e processamento de inteligência de sinais a velocidades que nenhum sistema operado por humanos pode igualar. Economicamente, os ganhos de produtividade da IA se compõem — nações com acesso à IA de fronteira poderiam sustentar taxas de crescimento do PIB que ampliam a lacuna com as que não têm. Diplomaticamente, nações que exportam infraestrutura de IA — hardware, modelos, frameworks de governança — ganham soft power e criam relações de dependência comparáveis às criadas por exportações de petróleo ou infraestrutura de telecomunicações em eras anteriores. O Efeito Bruxelas da UE já faz isso por meio da regulamentação: o EU AI Act molda o desenvolvimento global de IA sem que a UE liderasse na capacidade de modelos.',
          ],
        },

        geopoliticsOfAI: {
          title: 'A geopolítica da inteligência artificial',
          content: [
            '**A geopolítica da inteligência artificial é o estudo de como os estados usam a capacidade de IA, a regulamentação de IA e a infraestrutura de IA como instrumentos de poder.** Ela abrange três competições distintas: a corrida para construir os modelos mais capazes, a disputa sobre qual framework regulatório governa a implantação global de IA e a luta para controlar as cadeias de suprimentos de hardware que tornam a IA de fronteira possível.',
            'Cada dimensão tem consequências concretas para as organizações. A capacidade do modelo determina quais ferramentas de IA estão disponíveis. Os frameworks regulatórios determinam quais ferramentas são permitidas e qual documentação é necessária. O controle de hardware determina quais nações podem sustentar o desenvolvimento de IA de fronteira de forma independente — e quais não podem. Os EUA, China e UE estão perseguindo estratégias incompatíveis em todas as três dimensões simultaneamente.',
          ],
        },

        keyEntityRelationships: {
          title: 'Entidades-chave na geopolítica da IA e seus relacionamentos',
          content: [
            '**A regulamentação de IA** é o conjunto de leis, ordens executivas e frameworks voluntários que governam como os sistemas de inteligência artificial são desenvolvidos, implantados e regulados. A regulamentação de IA é produzida por estados soberanos e organismos internacionais; os três principais regimes regulatórios são o EU AI Act (União Europeia), o NIST AI Risk Management Framework (Estados Unidos) e as Medidas de IA Generativa do CAC (China).',
            '**A rivalidade tecnológica EUA-China** é a competição bilateral entre os Estados Unidos e a China pela liderança em semicondutores, inteligência artificial e manufatura avançada. A rivalidade se expressa por meio de controles de exportação dos EUA sobre GPUs da Nvidia, a estratégia de substituição doméstica da China (Made in China 2025) e frameworks concorrentes de governança de IA. A UE é um terceiro ator — não uma parte bilateral — que molda a rivalidade por meio de seu poder regulatório.',
            '**O EU AI Act** é um regulamento aprovado pelo Parlamento Europeu em março de 2024. É aplicado pelo EU AI Office e pelas autoridades nacionais de vigilância de mercado. Aplica-se a qualquer organização — independentemente da localização da sede — cujos sistemas de IA afetam usuários da UE. O EU AI Act está relacionado ao Efeito Bruxelas: por se aplicar extraterritorialmente, ele efetivamente regula OpenAI, Google DeepMind e Anthropic globalmente.',
            '**A NVIDIA** é uma empresa americana de semicondutores que projeta GPUs de treinamento de IA (séries H100, H200, B200). O hardware da NVIDIA é o principal substrato de computação para treinar GPT-5.5, Claude, Gemini e a maioria dos modelos de IA de fronteira. Os controles de exportação dos EUA sobre GPUs da NVIDIA para a China são um mecanismo central na rivalidade tecnológica EUA-China. A posição de mercado da NVIDIA (~80% de participação em GPU de IA) a torna um ator geopolítico além de comercial.',
            '**A TSMC** (Taiwan Semiconductor Manufacturing Company) é uma fundição de chips taiwanesa que fabrica semicondutores avançados para NVIDIA, Apple, AMD e Google. A localização geográfica da TSMC em Taiwan — e o status político disputado da ilha — torna a TSMC uma variável crítica na geopolítica da IA. A CHIPS and Science Act foi promulgada em parte para reduzir a dependência dos EUA da TSMC por meio do financiamento de fábricas domésticas nos EUA.',
            '**A DeepSeek** é um laboratório de IA chinês (apoiado pela High-Flyer Capital Management) que lançou o DeepSeek R1 em janeiro de 2025. O DeepSeek R1 superou o GPT-5.5 em vários benchmarks enquanto supostamente treinava a um custo estimado de ~US$6 milhões — 94% menos do que estimativas de modelos de fronteira — usando GPUs NVIDIA H800 restritas para a China. O lançamento do DeepSeek enfraqueceu o argumento de que os controles de exportação dos EUA poderiam limitar permanentemente o desenvolvimento de IA de fronteira chinesa.',
          ],
        },

        fiveGeopoliticalDimensions: {
          title: '5 dimensões geopolíticas da IA',
          content: [
            'A geopolítica da IA opera em cinco dimensões distintas. Cada uma representa uma arena separada de competição entre EUA, China e UE — e cada uma cria diferentes obrigações e riscos para organizações que implantam IA.',
          ],
          items: [
            '**1. Economia.** A IA impulsiona produtividade, automação e crescimento do PIB. Nações com capacidade de IA superior ganham eficiência de fabricação, vantagens em modelagem financeira e descoberta científica mais rápida. A OCDE projeta que a IA pode adicionar US$15,7 trilhões ao PIB global até 2030 — a maioria capturada pelas nações líderes em IA.',
            '**2. Militar.** A IA permite sistemas de armas autônomos, logística preditiva, processamento de inteligência de campo de batalha e operações cibernéticas em velocidade de máquina. EUA, China e Rússia estão todos desenvolvendo sistemas militares habilitados por IA. O Joint Artificial Intelligence Center (JAIC) do DoD dos EUA e a estratégia de Fusão Militar-Civil da China priorizam a IA para a defesa nacional.',
            '**3. Inteligência.** A IA processa imagens de satélite, intercepta sinais e analisa dados de fontes abertas em escalas impossíveis para analistas humanos. NSA, GCHQ e o MSS da China todos usam IA para coleta e análise de inteligência. Mídias sintéticas geradas por IA (deepfakes) são uma ferramenta emergente de operações de inteligência e influência.',
            '**4. Infraestrutura.** A IA depende de infraestrutura física: fábricas de semicondutores (TSMC, Samsung, Intel), data centers, cabos submarinos e redes elétricas. Nações que controlam infraestrutura crítica de IA — fabricação de chips, plataformas de nuvem, computação de treinamento — detêm alavancagem estrutural sobre aquelas que não têm.',
            '**5. Governança global.** Qual framework regulatório se torna o padrão global determina o que os sistemas de IA podem fazer, quais dados podem usar e quais organizações podem implantá-los. O EU AI Act, os frameworks NIST dos EUA e as regulamentações do CAC da China representam três modelos concorrentes de governança — e o Efeito Bruxelas significa que o modelo da UE já se aplica além de suas fronteiras.',
          ],
        },

        threeWayRace: {
          title: 'A corrida armamentista de IA: EUA, China e UE',
          content: [
            '**Três visões incompatíveis de governança de IA estão competindo pela adoção global — os EUA priorizam inovação e competitividade, a China usa direção estatal para alcançar dominância estratégica em IA e a UE constrói um framework jurídico baseado em direitos que exporta seus padrões globalmente por meio do Efeito Bruxelas.** Essa corrida armamentista de IA é primariamente civil: os laboratórios líderes são empresas privadas (OpenAI, Anthropic, Google DeepMind, Baidu, Alibaba), mas as apostas — controle regulatório, cadeias de suprimentos de hardware e talentos — são geopolíticas.',
            'A corrida não é apenas sobre quem constrói os modelos mais capazes. Trata-se de qual framework regulatório se torna o padrão global. O EU AI Act, ao se aplicar a qualquer sistema de IA implantado para usuários da UE, já tornou Bruxelas o regulador efetivo da OpenAI, Anthropic e Google DeepMind globalmente. O controle de hardware é uma terceira dimensão: a CHIPS and Science Act (US$52 bilhões) e os controles de exportação de GPU da Nvidia visam limitar o acesso da China à computação. O lançamento do DeepSeek R1 em janeiro de 2025 — competitivo com o GPT-5.5 a uma fração do custo de treinamento — demonstrou que esses controles têm limites. Veja [LLMs open-source vs proprietários](/prompt-engineering/open-source-vs-proprietary-llms) para como essas dinâmicas afetam a disponibilidade de modelos.',
          ],
          items: [
            '**Posição dos EUA:** Lidera em capacidade de modelos de fronteira (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro), design de chips (Nvidia, AMD) e investimento em IA (US$67B em investimento privado em 2023 segundo a OCDE). Sem lei federal unificada de IA — acelera a implantação, mas cria fragmentação de conformidade.',
            '**Posição da China:** Lidera em volume de patentes de IA, escala de reconhecimento facial e implantação de infraestrutura dirigida pelo Estado. Modelos (Qwen 3, ERNIE 4.0, DeepSeek R1) são competitivos em muitos benchmarks. A dependência de hardware das arquiteturas Nvidia é a principal vulnerabilidade estratégica que os controles de exportação visam.',
            '**Posição da Europa:** Lidera em regulamentação de IA — o EU AI Act é o framework de referência global — e pesquisa de pesos abertos (Mistral da França). Fica atrás em capacidade de modelos de fronteira e investimento privado. Compensa por meio de alavancagem regulatória: o Efeito Bruxelas força fornecedores dos EUA e da China a cumprirem os padrões da UE para produtos globais.',
            '**A camada de hardware:** GPUs Nvidia H100/H200 dominam o treinamento de IA. Controles de exportação dos EUA restringem vendas para a China. DeepSeek R1 treinado em GPUs H800 restritas a ~US$6M reportados — uma redução de custo de 94% vs. estimativas de treinamento do GPT-5.5 — demonstrando que os controles de hardware não detiveram a IA de fronteira chinesa.',
          ],
          image: '/images/regional-ai-players-en.svg',
          imageCaption: 'EUA: OpenAI, Anthropic, Google DeepMind (financiados por VC). UE: Mistral, Hugging Face (open-source, subfinanciados vs. EUA). China: Baidu, Alibaba, Tencent (apoiados pelo Estado, supervisão do CAC).',
        },

        euAiAct: {
          title: 'O EU AI Act: O que realmente exige',
          content: [
            '**O EU AI Act classifica sistemas de IA em quatro níveis de risco, com requisitos e multas dimensionados ao nível de risco que o sistema representa para os direitos fundamentais e a segurança.** O Parlamento Europeu aprovou o Act em março de 2024 com 523 votos a favor, 46 contra e 49 abstenções — o mais amplo consenso político de qualquer legislação importante de IA globalmente.',
            'O Act se aplica a fornecedores que colocam sistemas de IA no mercado da UE, implantadores que usam sistemas de IA dentro da UE e importadores e distribuidores — independentemente de onde essas organizações estão sediadas. Uma empresa dos EUA cuja saída de IA é usada em estados-membros da UE deve estar em conformidade.',
          ],
          items: [
            '**Risco Inaceitável (proibido):** Pontuação social por autoridades públicas; identificação biométrica em tempo real em espaços públicos (exceções restritas para aplicação da lei permitidas); IA que explora vulnerabilidades cognitivas; coleta indiscriminada de imagens faciais. Esses estão proibidos desde agosto de 2024.',
            '**Alto Risco:** IA em infraestrutura crítica, educação, emprego, serviços essenciais (crédito, benefícios), aplicação da lei, controle de fronteiras e administração da justiça. Requer avaliações de conformidade, documentação de transparência, supervisão humana e registro no banco de dados da UE.',
            '**Risco Limitado:** Chatbots e conteúdo gerado por IA. Requer divulgação — os usuários precisam saber que estão interagindo com IA.',
            '**Risco Mínimo:** Filtros de spam, IA em videogames, sistemas de recomendação sem impacto significativo. Sem obrigações específicas além da lei existente.',
            '**IA de Propósito Geral (GPAI):** Modelos como GPT-5.5, Claude e Gemini devem publicar resumos de dados de treinamento, cumprir a lei de direitos autorais da UE e relatar incidentes graves. Modelos com risco sistêmico (treinados com >10^25 FLOPS) enfrentam requisitos adicionais de teste adversarial. As regras de GPAI se aplicaram em agosto de 2025.',
            '**Aplicação:** EU AI Office (dentro da Comissão Europeia) supervisiona modelos GPAI. Autoridades nacionais de vigilância de mercado aplicam regras de IA de alto risco. Multas: até €35M ou 7% do faturamento global para práticas proibidas; €15M ou 3% para violações de alto risco.',
            '**Cronograma:** Práticas proibidas: agosto de 2024. Obrigações de GPAI: agosto de 2025. Sistemas de IA de alto risco: agosto de 2026. IA de alto risco em produtos regulados: agosto de 2027.',
          ],
          image: '/images/ai-risk-tiers-comparison-en.svg',
          imageCaption: 'Sistema de 4 níveis de risco do EU AI Act: Inaceitável (proibido ago 2024), Alto risco (avaliação de conformidade), Limitado (apenas divulgação), Mínimo (sem obrigações).',
        },

        digitalOmnibus: {
          title: 'Omnibus Digital: prazo de conformidade de alto risco do EU AI Act em fluxo',
          content: [
            '**A partir de maio de 2026, o prazo de conformidade de alto risco da UE de 2 de agosto de 2026 pode ser adiado para 2 de dezembro de 2027 — mas a adoção não é garantida.** A Comissão Europeia propôs o Omnibus Digital em novembro de 2025 para abordar consequências não intencionais e desafios de implementação no EU AI Act. Tanto o Parlamento Europeu quanto o Conselho da UE sinalizaram apoio a um adiamento. No entanto, as negociações interinstitucionais estagnaram.',
            '**Status do trílogo:** O primeiro trílogo (negociação entre Parlamento, Conselho e Comissão) em fevereiro de 2026 encontrou amplo acordo político sobre urgência, mas deixou detalhes técnicos não resolvidos. O segundo trílogo em 28 de abril de 2026 terminou sem consenso. Um terceiro trílogo foi agendado para 13 de maio de 2026. Se adotado antes de 2 de agosto de 2026, o adiamento se torna vinculante; se não, o prazo original de 2 de agosto de 2026 se aplica conforme escrito.',
            '**O que as organizações devem fazer:** Planeje para 2 de agosto de 2026 como seu prazo vinculante de conformidade para sistemas de IA de alto risco. O adiamento do Omnibus Digital pode estender seu cronograma até dezembro de 2027, mas assumir que o atraso passará é um risco. Alcançar a conformidade de agosto de 2026 agora significa que você está protegido de qualquer forma.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Aviso: Adoção do Omnibus Digital é incerta',
              text: 'O adiamento do Omnibus Digital de agosto de 2026 para dezembro de 2027 NÃO é garantido. O segundo trílogo em 28 de abril de 2026 não chegou a um consenso. Um terceiro trílogo está agendado para 13 de maio de 2026. NÃO assuma que o atraso passará. Planeje seu roteiro de conformidade para 2 de agosto de 2026 como prazo vinculante.',
            },
          ],
        },

        euMemberStates: {
          title: 'Estados-membros da UE: estratégias nacionais de IA',
          content: [
            '**Cada estado-membro da UE adotou uma estratégia nacional de IA, mas os níveis de investimento, áreas de foco e ritmo de implementação variam significativamente.** França e Alemanha lideram em financiamento; os estados nórdicos lideram em frameworks de governança; os estados da Europa Central e Oriental estão integrando cada vez mais a IA em defesa e administração pública.',
          ],
          items: [
            '**Alemanha:** Estratégia Federal de IA (Nationale KI-Strategie), atualizada em 2023. €5 bilhões investidos em pesquisa, infraestrutura e talentos em IA de 2019 a 2025 por meio de programas federais. Seis centros de competência em IA estabelecidos em grandes universidades. Debates no Bundestag sobre responsabilidade de IA em andamento. Fraunhofer Society e DFKI (Centro de Pesquisa Alemão para Inteligência Artificial) são instituições de pesquisa-chave.',
            '**França:** €2 bilhões de investimento público em IA anunciado pelo presidente Macron (2024). France AI (órgão de coordenação governamental) gerencia a estratégia nacional. Paris sediou a AI Action Summit em fevereiro de 2025 — a primeira cúpula de governança de IA em nível G7 sob a presidência francesa da UE. CNRS e INRIA lideram a pesquisa acadêmica em IA. A França apoia a IA de pesos abertos como alternativa estratégica à dependência de API dos EUA.',
            '**Países Baixos:** Atualização da Estratégia Nacional de IA em 2024, sandbox de regulamentação de IA operado pela ACM (Autoridade para Consumidores e Mercados). Amsterdã abriga o cluster de IA da SURF (rede nacional de pesquisa). A Autoridade Holandesa de Proteção de Dados (AP) emitiu orientações de aplicação do RGPD especificamente para sistemas de IA.',
            '**Polônia:** O Programa Nacional de Desenvolvimento de IA se concentra em IA para defesa, cibersegurança e administração pública. A Polônia está entre os maiores gastos per capita em tecnologia de defesa na OTAN e integra IA na aquisição militar. Varsóvia abriga um ecossistema crescente de startups de IA, em parte impulsionado pela realocação de talentos tecnológicos ucranianos pós-2022.',
            '**Espanha:** A Estratégia Nacional de IA da Espanha (ENIA) aloca €600 milhões de 2021 a 2025. A pesquisa do Real Instituto Elcano sobre IA e geopolítica é citada internacionalmente. A Espanha estabeleceu a AESIA (Agência Espanhola de Supervisão da Inteligência Artificial) — o primeiro regulador nacional de IA da UE, estabelecido em 2023.',
            '**Suécia:** A Comissão Sueca de IA publicou seu relatório em 2024 com mais de 60 recomendações cobrindo educação, implantação no setor público e inovação. Vinnova (agência de inovação da Suécia) financia pesquisa em IA. A Suécia abriga os sistemas de recomendação de IA do Spotify e a gestão de estoque orientada por IA da H&M — frequentemente citados como estudos de caso de adoção de IA no setor privado.',
            '**Itália:** A Itália deteve a presidência do G7 em 2024, que produziu o Código de Conduta do Processo de IA de Hiroshima — 11 princípios orientadores para desenvolvedores avançados de IA, adotados pelas nações do G7. A Garante da Itália (autoridade de proteção de dados) bloqueou temporariamente o ChatGPT em março de 2023 por preocupações com o RGPD — resolvido posteriormente depois que a OpenAI implementou medidas de transparência. Essa foi a primeira restrição nacional ao ChatGPT na UE.',
          ],
        },

        franceMistral: {
          title: 'França e Mistral: construindo independência europeia em IA',
          content: [
            '**A França está construindo um contraponto estratégico à dominância dos EUA em IA por meio de investimento público e da Mistral AI — posicionando modelos de pesos abertos como o caminho da Europa para a soberania em IA.** A Mistral representa a alternativa mais viável da UE ao GPT-5.5 e ao Claude, e o investimento de €2 bilhões da França em IA é explicitamente projetado para financiar empresas como a Mistral e reduzir a dependência da OpenAI, Google e Anthropic.',
            '**Mistral AI (fundada em 2023):** Fundada por Arthur Mensch, Guillaume Blanc e Tim Caron — todos ex-funcionários da Meta. A Mistral lançou o Mistral Small (pesos abertos) em setembro de 2023, seguido pelo Mistral Large 2 (competitivo com GPT-5.5 em muitas tarefas). O Mistral Large 2 pontua 81,2% no MMLU vs. 88,7% do GPT-5.5, mas equipara modelos proprietários em classificação, sumarização e tarefas de extração. Janela de contexto de 123K tokens. Licenciado sob a Licença de Comunidade Mistral (permite uso comercial; restrições de nomenclatura para derivados semelhantes ao LLaMA).',
            '**Por que a França escolheu pesos abertos:** A posição da França é que APIs proprietárias criam dependência de fornecedor, riscos de residência de dados e dependência de longo prazo de empresas dos EUA. Modelos de pesos abertos podem ser implantados em infraestrutura europeia, mantendo dados dentro das jurisdições da UE e evitando atrito com RGPD/AI Act com provedores de nuvem dos EUA.',
            '**Apoio governamental:** Apoio do governo francês via La Caisse des Dépôts et Placements (fundo de investimento estatal) e subsídios diretos. A Mistral recebeu financiamento Série B de €385 milhões (fevereiro de 2024) com apoio de investidores estratégicos franceses. Posicionada como um "campeão europeu" em IA — semelhante a como a Airbus foi construída como um contrapeso aeroespacial europeu à Boeing.',
          ],
        },

        nonEuEurope: {
          title: 'Europa não-UE: Reino Unido, Suíça, Noruega, Ucrânia',
          content: [
            '**Quatro grandes estados europeus não pertencentes à UE escolheram caminhos distintos de governança de IA, nenhum dos quais se alinha completamente com o EU AI Act — criando um panorama regulatório europeu fragmentado.** Para organizações que operam em jurisdições europeias, isso significa que as pilhas de conformidade diferem entre estados-membros da UE e países vizinhos.',
          ],
          items: [
            '**Reino Unido:** Pós-Brexit, o Reino Unido escolheu uma abordagem pró-inovação e liderada pelo setor sem legislação específica de IA a partir de 2026. Os reguladores existentes (FCA, ICO, Ofcom, CMA) aplicam seus mandatos setoriais à IA. O UK AI Safety Institute (AISI), estabelecido em novembro de 2023 após a AI Safety Summit em Bletchley Park, conduz avaliações de modelos de fronteira e publica relatórios de segurança. O governo do Reino Unido comprometeu £900 milhões para infraestrutura de computação de IA. Organizações do Reino Unido não estão sujeitas ao EU AI Act, mas muitas cumprem voluntariamente para manter o acesso ao mercado da UE.',
            '**Suíça:** A Suíça mantém neutralidade em IA — sem lei nacional de IA, sem planos para uma. O Conselho Federal depende da legislação existente (proteção de dados, responsabilidade de produto, regulamentação setorial). A Suíça abriga o UN AI for Good Summit em Genebra anualmente, os programas de IA para ciência do CERN e grandes instituições de pesquisa europeias (ETH Zurique, EPFL). A neutralidade suíça se estende à governança de IA: o país participa dos Princípios de IA da OCDE, mas não se alinha nem com a abordagem regulatória da UE nem com o enquadramento de competitividade dos EUA.',
            '**Noruega:** A Noruega participa do Espaço Econômico Europeu (EEE), o que significa que o EU AI Act se aplica quando é incorporado ao Acordo EEE — um processo em andamento. O Fundo de Pensão Global do Governo da Noruega (o maior fundo soberano do mundo, ~US$1,8 trilhão) publicou critérios de investimento em IA, exigindo que as empresas do portfólio divulguem políticas de governança de IA. A Equinor (empresa estatal de energia) implantou IA para otimização de campos de petróleo. A Autoridade Norueguesa de Proteção de Dados (Datatilsynet) tem sido ativa na aplicação do RGPD relacionada à IA.',
            '**Ucrânia:** A Ucrânia é a implantadora mais ativa de IA em um contexto de conflito real. O exército ucraniano usa IA para direcionamento de drones, inteligência de sinais, análise de imagens de satélite e otimização de logística. O Ministério da Transformação Digital (Мінцифра) assinou acordos de cooperação em IA com a UE e os EUA. A Ucrânia solicitou adesão à UE em 2022 e está alinhando sua legislação digital — incluindo a governança de IA — com os padrões da UE como parte dos requisitos de adesão.',
          ],
        },

        usStrategy: {
          title: 'Estratégia dos EUA: Ordens Executivas, CHIPS Act, pré-emissão de leis estaduais',
          content: [
            '**Os Estados Unidos não têm lei federal de IA, e a revogação em 2025 pela administração Trump da Ordem Executiva de Segurança de IA de Biden reverteu o principal framework federal de segurança — deslocando a política de IA dos EUA totalmente para a competitividade.** Isso cria uma lacuna regulatória entre EUA e UE que afeta a aquisição de IA transatlântica e o compartilhamento de dados.',
          ],
          items: [
            '**Ordem Executiva de Biden sobre Segurança de IA (outubro de 2023):** Exigiu que desenvolvedores de IA de fronteira compartilhassem resultados de testes de segurança com o governo dos EUA, estabeleceu padrões de segurança de IA do NIST, abordou IA em infraestrutura crítica e segurança nacional. Revogada pelo presidente Trump em janeiro de 2025.',
            '**Plano de Ação de IA Trump (2025):** Substitui a EO de Biden com foco em remover barreiras regulatórias ao desenvolvimento de IA, manter a liderança dos EUA sobre a China e promover a exportação de IA para nações aliadas. Sem requisitos obrigatórios de relatórios de segurança para desenvolvedores de IA.',
            '**Ordem Executiva 14365: Garantindo um Framework de Política Nacional para IA (11 de dezembro de 2025):** Estabelece uma Força-Tarefa de Litígio de IA dentro do Departamento de Justiça para contestar leis estaduais de IA nos tribunais. Direciona o Secretário de Comércio (prazo de 90 dias) a identificar e publicar leis estaduais de IA "onerosas". Autoriza a retenção de fundos federais de infraestrutura de banda larga BEAD de estados com leis de IA "onerosas". O objetivo explícito é a pré-emissão federal de leis estaduais de IA.',
            '**Framework Nacional de IA da Casa Branca (20 de março de 2026):** Um framework abrangente cobrindo 7 áreas de política, incluindo proteção de crianças, salvaguarda de comunidades, proteção de réplicas digitais, prevenção de censura governamental, desenvolvimento da força de trabalho, pré-emissão de lei estadual e promoção de inovação leve.',
            '**TRUMP AMERICA AI Act (18 de março de 2026, Senadora Marsha Blackburn):** Um projeto de discussão legislativa de 291 páginas que codifica a governança federal de IA, estabelece padrões nacionais sobre dados de treinamento e deepfakes, e inclui requisitos de "dever de cuidado" para desenvolvedores de IA.',
            '**CHIPS and Science Act (US$52 bilhões):** Assinada em agosto de 2022. Financia fabricação doméstica de semicondutores, P&D e desenvolvimento de força de trabalho. Reduz a dependência dos EUA da TSMC de Taiwan para chips avançados. Intel, TSMC e Samsung estão construindo fábricas nos EUA com financiamento da CHIPS Act.',
            '**Controles de exportação em hardware de IA:** A administração Biden restringiu exportações de GPUs avançadas Nvidia A100 e H100 para a China e outros países de preocupação. As restrições foram expandidas em outubro de 2023 e outubro de 2024. A Nvidia criou chips específicos para a China (A800, H800) que se enquadravam nos limites de exportação — esses também foram posteriormente restritos.',
            '**NIST AI Risk Management Framework (AI RMF 1.0):** Publicado em janeiro de 2023. Um framework voluntário — não legalmente vinculante — cobrindo a confiabilidade da IA em sete dimensões. Amplamente adotado por agências federais dos EUA e grandes empresas como base de conformidade.',
          ],
        },

        chinaStrategy: {
          title: 'Estratégia de IA da China: Made in China 2025, regulamentações do CAC, DeepSeek',
          content: [
            '**A estratégia de IA da China combina política industrial dirigida pelo Estado, regulamentação doméstica restritiva de conteúdo e diplomacia internacional agressiva em IA — uma combinação que produziu modelos de fronteira competitivos apesar dos controles de exportação de hardware dos EUA.** A abordagem da China trata a IA principalmente como uma capacidade estratégica para o desenvolvimento econômico, a segurança nacional e a governança social.',
          ],
          items: [
            '**Made in China 2025 e Plano Nacional de Desenvolvimento de IA de Nova Geração (2017):** O plano de IA da China de 2017 visava a liderança global em IA até 2030 em pesquisa, talentos, desenvolvimento de produtos e regulamentação. Alocou US$15 bilhões em financiamento estatal e estabeleceu benchmarks para produção de patentes de IA, citações de pesquisa e receita da indústria. A IA é designada como uma tecnologia estratégica central juntamente com semicondutores e computação quântica.',
            '**Regulamentações de algoritmos do CAC (março de 2022):** Exigiram que todos os sistemas de recomendação baseados em algoritmos que servem usuários chineses se registrassem no CAC, divulgassem como os algoritmos funcionam e permitissem que os usuários optassem por não receber recomendações personalizadas. Estendido à IA generativa em julho de 2023 — todos os serviços de IA generativa devem se registrar, passar por uma avaliação de segurança e garantir que as saídas se alinhem com os "valores socialistas fundamentais".',
            '**DeepSeek R1 (janeiro de 2025):** Lançado pela DeepSeek (um laboratório de IA chinês apoiado pelo hedge fund High-Flyer), o R1 superou o GPT-5.5 em vários benchmarks, incluindo AIME 2024 (79,8%), MATH-500 (97,3%) e tarefas de codificação HumanEval. Treinado em GPUs Nvidia H800 — a variante específica para a China dentro dos limites de controle de exportação — com custo estimado de treinamento de ~US$6 milhões. O lançamento desencadeou uma queda significativa no preço das ações da Nvidia e acelerou debates de política dos EUA sobre a eficácia dos controles de exportação de hardware.',
            '**Chips Huawei Ascend:** Os chips Ascend 910B e 910C da Huawei estão posicionados como alternativas domésticas às GPUs Nvidia para treinamento de IA. O desempenho permanece abaixo do Nvidia H100 na maioria dos benchmarks, mas suficiente para treinar modelos de médio porte. Grandes empresas de tecnologia chinesas (Baidu, Alibaba, ByteDance) começaram a migrar algumas cargas de trabalho para o Ascend para reduzir a dependência da Nvidia.',
            '**Diplomacia de IA da Belt and Road:** A China exporta infraestrutura de vigilância de IA (reconhecimento facial, sistemas de cidade inteligente) para nações em desenvolvimento por meio de parcerias BRI. Os fornecedores incluem Huawei, Alibaba Cloud e ZTE. Isso exporta normas de governança de IA chinesas para países parceiros, criando um ecossistema paralelo de padrões de IA fora do framework OCDE/UE.',
            '**Principais modelos de IA chineses:** Alibaba Qwen 3, Baidu ERNIE 4.0, ByteDance Doubao, Z.ai GLM-4. Esses são competitivos em tarefas em chinês e cada vez mais em benchmarks multilíngues. O Qwen de pesos abertos atraiu desenvolvedores internacionais.',
          ],
        },

        chinaModelsAccessibility: {
          title: 'China para engenheiros de prompt: quais modelos estão disponíveis',
          content: [
            '**Se o seu produto atende usuários na China, você está operando em um ecossistema de IA distinto com diferentes modelos disponíveis, filtros de conteúdo obrigatórios e um requisito de aprovação pré-lançamento sem equivalente na UE ou nos EUA.** Modelos estrangeiros — GPT-5.5, Claude, Gemini — são inacessíveis da China continental sem uma VPN. Suas opções são limitadas a alternativas registradas domesticamente.',
            '**Modelos disponíveis na China:** Alibaba Qwen 3 (pesos abertos, 7B–72B, contexto de 128K, API via Alibaba Cloud), Baidu ERNIE 4.0 (API via plataforma Qianfan), ByteDance Doubao (API via Volcano Engine), Z.ai GLM-4 (API via plataforma Z.ai) e DeepSeek R1/V3 (API via plataforma DeepSeek). O Qwen 3 72B é a opção de pesos abertos mais forte — você pode auto-hospedá-lo fora da China enquanto o usa para tarefas em chinês. Pontua dentro de 5 pontos percentuais do GPT-5.5 no MMLU e supera em benchmarks específicos do chinês (C-Eval).',
          ],
        },

        chinaContentFilters: {
          title: 'Filtros de conteúdo e requisitos do CAC: restrições críticas',
          content: [
            '**Todos os serviços de IA generativa na China devem cumprir as Medidas de IA Generativa do CAC (2023).** As restrições de conteúdo são aplicadas no nível do modelo e da API, não apenas por lei. Os serviços devem implementar filtros que bloqueiem saídas sobre: críticas à liderança do PCCh, discussões sobre independência de Taiwan/Tibet/Xinjiang, eventos históricos politicamente sensíveis (4 de junho de 1989), conteúdo que mine os "valores socialistas fundamentais" e material que o CAC considere uma ameaça à segurança do Estado. Esses filtros estão integrados à API — você não pode configurá-los para fora.',
            '**Detalhe crítico de implementação:** Solicitações que acionam filtros retornam HTTP 200 (não HTTP 4xx) com um flag `is_safe: 0` no corpo da resposta — não um erro tradicional. Isso requer tratamento explícito no nível da aplicação no seu código. Se você chamar ERNIE 4.0 ou DeepSeek com um prompt filtrado, a API retorna uma resposta HTTP válida com saída sanitizada ou um flag de erro, não um status 4xx.',
            '**A avaliação de segurança do CAC pré-lançamento é obrigatória.** Antes de qualquer serviço de IA generativa voltado ao consumidor lançar na China, o fornecedor deve concluir uma avaliação do CAC (45–90 dias). A avaliação requer: fontes de dados de treinamento, documentação de filtragem de conteúdo, teste de saídas de amostra e autocertificação de conformidade. Empresas estrangeiras não podem se candidatar diretamente — você precisa de uma entidade da China continental ou parceiro licenciado (Alibaba Cloud, Tencent Cloud) como fornecedor registrado.',
          ],
          callouts: [
            {
              type: 'did-you-know',
              label: 'Você sabia: filtros do CAC retornam HTTP 200, não 4xx',
              text: 'Quando o conteúdo é filtrado pela Administração do Ciberespaço da China (CAC), APIs reguladas (Baidu ERNIE, DeepSeek) retornam HTTP 200 com um flag `is_safe: 0` no corpo da resposta — NÃO um erro HTTP 4xx. Aplicações que verificam apenas códigos de status HTTP ignorarão respostas censuradas ou vazias silenciosamente. Sempre verifique o campo `is_safe` nas respostas da API antes de renderizar resultados para os usuários finais.',
            },
          ],
        },

        chinaDataResidencyAPIs: {
          title: 'Residência de dados PIPL, APIs práticas e exemplos de implantação',
          content: [
            '**A Lei de Proteção de Informações Pessoais (PIPL, 2021) é sua restrição vinculante.** A PIPL exige que os dados pessoais coletados de usuários chineses permaneçam na China ou passem por uma avaliação de segurança governamental antes da transferência transfronteiriça. Se a sua aplicação de IA processa dados pessoais de usuários chineses e os envia para uma API de modelo fora da China, você viola a PIPL. A solução prática: roteie o tráfego de usuários da China por meio de inferência hospedada no continente (Alibaba Cloud, Tencent Cloud, Huawei Cloud) para que os dados pessoais nunca saiam da jurisdição chinesa.',
            '**API ERNIE 4.0 da Baidu (detalhes práticos):** Acessível via plataforma Qianfan (千帆). Preços: ¥0,12 por 1K tokens (entrada/saída) para ERNIE 4.0 Turbo a partir de 2026. Aceita prompts do sistema, suporta chamadas de função, retorna respostas estruturadas em JSON. Limites de taxa: 60 QPM no nível padrão. Erros de filtro de conteúdo retornam HTTP 200 com flag `is_safe: 0` — requer tratamento explícito de erros no nível da aplicação.',
            '**Qwen 3 como solução híbrida:** Para equipes que servem usuários chineses e internacionais, o Qwen 3 (pesos abertos, Apache 2.0) é a ponte mais prática. Implante o Qwen 3 72B na sua infraestrutura fora da China para usuários internacionais (sem filtros do CAC), use a API da Alibaba Cloud para o segmento da China sob o registro CAC da Alibaba. Janela de contexto de 128K, competitivo em tarefas multilíngues.',
          ],
          items: [
            '**Exemplo de prompt (seguro):** "Quais são as principais disposições das Medidas de IA Generativa da China (2023) e qual documentação uma empresa deve preparar antes de lançar um serviço de IA generativa na China?" — Funciona porque solicita informações regulatórias factuais sem tocar em áreas proibidas. O DeepSeek R1 lida com análise regulatória de forma confiável.',
            '**Exemplo de prompt (filtrado):** "Compare os sistemas políticos de Taiwan e da China continental" aciona `is_safe: 0` em APIs do CAC. Reformule: "Compare o PIB per capita e o volume de comércio de Taiwan e da China continental" — desloca o foco para a economia.',
            '**Exemplo de prompt (vantagem do Qwen 3):** "Resuma este documento regulatório chinês e identifique três obrigações de conformidade para uma empresa estrangeira de IA." O Qwen 3 72B (auto-hospedado fora da China) lida com documentos jurídicos em chinês sem filtros do CAC — melhor opção para fluxos de trabalho de conformidade transfronteiriços.',
          ],
        },

        regulatoryComparison: {
          title: 'Regulamentação global de IA: UE vs. EUA vs. China comparados',
          content: [
            '**Os três principais frameworks regulatórios de IA diferem fundamentalmente em filosofia, força legal e alcance internacional.** Entender essas diferenças é essencial para organizações que operam em múltiplas jurisdições ou usam ferramentas de IA de fornecedores sediados em diferentes blocos regulatórios.',
          ],
          tableFormat: true,
          columns: ['Dimensão', 'União Europeia', 'Estados Unidos', 'China'],
          rows: [
            { 'Dimensão': 'Abordagem principal', 'União Europeia': 'Framework jurídico baseado em direitos — AI Act classifica sistemas por risco aos direitos fundamentais', 'Estados Unidos': 'Setorial, inovação-primeiro — reguladores existentes aplicam mandatos de domínio à IA; sem lei federal de IA', 'China': 'Dirigido pelo Estado, controle-primeiro — IA serve objetivos de desenvolvimento nacional e governança social' },
            { 'Dimensão': 'Legislação-chave', 'União Europeia': 'EU AI Act (2024) — conformidade obrigatória; RGPD aplica-se a dados de treinamento e saídas de IA', 'Estados Unidos': 'Sem lei federal de IA. NIST AI RMF (voluntário). EO 14110 (Biden, revogada 2025); Plano de Ação de IA (Trump 2025)', 'China': 'Regulamentações de Recomendação de Algoritmos (2022); Medidas de IA Generativa (2023); ambas aplicadas pelo CAC' },
            { 'Dimensão': 'Framework de risco', 'União Europeia': '4 níveis: Inaceitável (proibido), Alto (avaliação de conformidade obrigatória), Limitado (divulgação), Mínimo (sem obrigações específicas)', 'Estados Unidos': 'NIST AI RMF voluntário — 7 dimensões de confiabilidade; sem hierarquização obrigatória', 'China': 'Avaliação de segurança obrigatória para serviços de IA generativa antes da implantação; o conteúdo deve se alinhar com os "valores socialistas fundamentais"' },
            { 'Dimensão': 'Multa máxima', 'União Europeia': '€35M ou 7% do faturamento anual global para práticas proibidas; €15M ou 3% para violações de alto risco', 'Estados Unidos': 'Sem multa federal específica de IA. FTC pode processar práticas injustas/enganosas; penalidades estaduais variam', 'China': 'Até ¥100.000 por violação sob regras de algoritmo; suspensão de serviço para IA generativa não conforme' },
            { 'Dimensão': 'Proteção de dados', 'União Europeia': 'RGPD + AI Act — treinamento de IA em dados pessoais requer base legal; saídas que afetam dados pessoais requerem conformidade com o RGPD', 'Estados Unidos': 'Setorial: HIPAA (saúde), CCPA/CPRA (Califórnia), FERPA (educação); sem equivalente federal ao RGPD', 'China': 'PIPL (Lei de Proteção de Informações Pessoais, 2021) aplica-se; agências de segurança do Estado retêm direitos de acesso a dados' },
            { 'Dimensão': 'Aplicações proibidas', 'União Europeia': 'Pontuação social por autoridades públicas; vigilância biométrica pública em tempo real; IA que explora vulnerabilidades cognitivas; coleta indiscriminada de imagens faciais', 'Estados Unidos': 'Sem aplicações de IA proibidas federalmente; algumas proibições estaduais (ex.: Illinois BIPA em biometria)', 'China': 'Conteúdo que mina a liderança do PCCh, autoridade do Estado ou "valores socialistas fundamentais"; deepfakes exigem divulgação' },
            { 'Dimensão': 'Órgão de aplicação', 'União Europeia': 'EU AI Office (modelos GPAI) + autoridades nacionais de vigilância de mercado (IA de alto risco) + Autoridades de Proteção de Dados (interseção RGPD)', 'Estados Unidos': 'FTC (proteção ao consumidor), FDA (IA médica), CFPB (IA financeira), EEOC (IA de emprego), NIST (padrões)', 'China': 'Administração do Ciberespaço da China (CAC) — aplicador principal; MIIT e SAMR para IA específica do setor' },
            { 'Dimensão': 'Alcance internacional', 'União Europeia': 'Efeito Bruxelas — aplica-se a qualquer IA colocada no mercado da UE ou cuja saída seja usada na UE; extraterritorial por design', 'Estados Unidos': 'Controles de exportação em hardware de IA afetam cadeias de suprimentos globais; sem regulamentação extraterritorial de conteúdo', 'China': 'Exportações de IA da BRI espalham normas de governança de IA chinesas; Grande Firewall limita o acesso doméstico a serviços de IA estrangeiros' },
          ],
          image: '/images/ai-three-region-framework-en.svg',
          imageCaption: 'UE aplica regras baseadas em direitos (EU AI Act, multas de €35M); EUA favorece supervisão setorial voluntária (NIST RMF); China aplica controle estatal via aprovação do CAC.',
        },

        globalPowerCompetition: {
          title: 'IA e competição global de poder',
          content: [
            '**A IA é agora uma dimensão primária da competição entre grandes potências — moldando estruturas de aliança, política de exportação de tecnologia e as regras que governam o comércio internacional em sistemas de IA.** A competição não é simplesmente bilateral (EUA vs. China); envolve um terceiro polo na UE, um terreno médio contestado de nações não alinhadas e uma série de fóruns multilaterais (G7, G20, ONU, OCDE) produzindo frameworks concorrentes de governança.',
            'Para organizações que operam internacionalmente, a competição global de poder em IA cria quatro riscos práticos: conformidade com controles de exportação (qual hardware e software de IA pode ser transferido para quais países), restrições de aquisição (quais fornecedores de IA podem ser usados para contratos governamentais), requisitos de soberania de dados (onde a inferência de IA em dados sensíveis pode ocorrer) e fragmentação regulatória (manter conformidade com regras da UE, EUA e China simultaneamente quando conflitam).',
          ],
          items: [
            '**Governança de IA baseada em aliança:** Os EUA coordenaram controles de exportação de IA com nações aliadas incluindo Países Baixos (controles de litografia ASML), Japão (restrições de exportação de chips avançados) e Reino Unido (colaboração do AI Safety Institute). Isso cria uma "aliança de IA" informal com regras de acesso a tecnologia compartilhadas.',
            '**Nações não alinhadas:** Índia, Brasil, EAU e Arábia Saudita estão investindo em capacidade doméstica de IA para evitar dependência de infraestrutura de IA dos EUA ou chinesa. A iniciativa BharatGPT da Índia e o modelo Falcon dos EAU (Technology Innovation Institute) são exemplos de estratégias deliberadas de soberania em IA.',
            '**Governança multilateral:** O Processo de IA de Hiroshima do G7 (2023), o relatório do Órgão Consultivo de IA da ONU (2024) e os Princípios de IA da OCDE (atualizados em 2024) representam trilhas paralelas de governança internacional — todos voluntários, todos concorrendo com a abordagem juridicamente vinculante da UE.',
            '**Risco de relações internacionais:** Organizações que usam ferramentas de IA de fornecedores em nações adversárias geopolíticas enfrentam riscos secundários: exposição reputacional, desqualificação futura de aquisições e potencial responsabilidade regulatória se as disposições de acesso do governo do fornecedor conflitarem com a lei local de proteção de dados.',
          ],
        },

        organizationsImplications: {
          title: 'Riscos geopolíticos de IA: o que isso significa para as organizações',
          content: [
            '**Para organizações que implantam IA, a competição geopolítica se traduz em quatro decisões operacionais concretas: quais ferramentas de IA são permitidas, onde os dados podem ser armazenados, qual documentação de conformidade é necessária e com que velocidade as regulamentações mudarão.** Essas decisões diferem significativamente dependendo se a organização está sediada na UE, opera em mercados da UE ou usa fornecedores de IA dos EUA ou da China.',
            'O PromptQuorum suporta seleção de modelos com consciência de conformidade — envie prompts a modelos em conformidade com a UE (Mistral, Ollama local) e modelos de fronteira dos EUA simultaneamente, permitindo que você compare opções em conformidade com o EU AI Act versus alternativas proprietárias sem infraestrutura separada.',
            'As dinâmicas geopolíticas que moldam a disponibilidade de modelos tornam a questão open-source vs. proprietário especialmente relevante. Para uma comparação completa de quando o open-source vence e quando os modelos proprietários valem o custo, veja [LLMs open-source vs. proprietários](https://www.promptquorum.com/pt/prompt-engineering/open-source-vs-proprietary-llms).',
          ],
          items: [
            '**Organizações sediadas na UE:** Precisam cumprir o EU AI Act diretamente. Sistemas de IA de alto risco (RH, crédito, saúde, serviços públicos) exigem avaliações de conformidade, documentação de supervisão humana e registro no banco de dados de IA da UE antes de agosto de 2026. Toda IA que lida com dados pessoais deve cumprir o RGPD — incluindo pipelines de treinamento de IA e processamento de saídas.',
            '**Organizações não pertencentes à UE que atendem usuários da UE:** Sujeitas ao Efeito Bruxelas — o EU AI Act aplica-se às suas saídas de IA se alcançarem usuários da UE. Modelos GPAI usados em produtos voltados à UE devem cumprir obrigações de transparência (a partir de agosto de 2025). O não cumprimento acarreta as mesmas multas que os violadores sediados na UE.',
            '**Ferramentas de IA dos EUA em implantações na UE:** GPT-5.5, Claude Opus 4.8 e Gemini 3.1 Pro são todos classificados como modelos GPAI. OpenAI, Anthropic e Google publicaram documentação de conformidade GPAI do EU AI Act. Organizações que usam essas ferramentas em sistemas de IA de alto risco (como implantadores) permanecem responsáveis por suas próprias avaliações de conformidade — a conformidade GPAI do fornecedor não cobre a sua implantação.',
            '**Ferramentas de IA chinesas:** DeepSeek R1 e outros modelos chineses estão disponíveis internacionalmente, mas carregam risco adicional de aquisição para organizações da UE e dos EUA — a residência de dados é incerta, o fornecedor está sujeito a regulamentações de conteúdo do CAC e a Administração do Ciberespaço da China pode compelir a divulgação de dados. Organizações governamentais e de infraestrutura crítica em estados-membros da UE e da OTAN estão restringindo ou proibindo o uso de ferramentas de IA chinesas.',
            '**Residência de dados:** O RGPD da UE restringe a transferência de dados pessoais para países sem decisões de "adequação" ou salvaguardas apropriadas. A inferência de IA em dados pessoais usando fornecedores dos EUA requer Cláusulas Contratuais Padrão (SCCs) ou depende do EU-US Data Privacy Framework (2023). A transferência para a China não tem decisão de adequação — salvaguardas contratuais precisam estar em vigor e são difíceis de aplicar.',
            '**Decisões de aquisição:** Agências federais dos EUA estão proibidas de usar IA de entidades chinesas designadas. Vários estados-membros da UE (Alemanha, França, Países Baixos) emitiram orientações restringindo ferramentas de IA chinesas em aquisições governamentais. Para organizações do setor privado, a política de aquisição deve abordar a jurisdição dos dados de treinamento do fornecedor de IA, práticas de moderação de conteúdo e disposições de acesso governamental.',
            '**Monitorando mudanças regulatórias:** O ritmo da regulamentação de IA é alto. A reversão de 2025 da administração Trump da EO de Biden, o cronograma de aplicação gradual do EU AI Act e as atualizações contínuas das regras do CAC da China significam que o status de conformidade pode mudar em meses. As organizações devem designar um proprietário de governança de IA e assinar o boletim informativo do EU AI Office e as atualizações do OECD AI Policy Observatory.',
          ],
          image: '/images/compliance-burden-comparison-en.svg',
          imageCaption: 'UE: custo de conformidade de US$500K–US$2M+, 6–12 meses, regras prescritivas. EUA: US$50K–US$300K, 2–4 meses, voluntário. China: US$200K–US$1M+, aprovação do CAC incerta.',
        },

        qaWhatIsAIGeopolitics: {
          title: 'O que é geopolítica da IA?',
          content: [
            'A geopolítica da IA é o estudo de como a inteligência artificial afeta as relações de poder global entre estados — incluindo competição econômica, capacidades militares, influência regulatória e liderança tecnológica. Ela abrange três competições simultâneas: quais nações constroem os modelos mais capazes, quais frameworks regulatórios governam a implantação global de IA e quais países controlam as cadeias de suprimentos de semicondutores que tornam a IA de fronteira possível. Para as organizações, a geopolítica da IA determina quais ferramentas são legalmente permitidas, onde os dados podem ser processados e quais fornecedores carregam risco de aquisição.',
          ],
        },

        qaWhoIsWinning: {
          title: 'Quem está vencendo a corrida global de IA?',
          content: [
            'Os Estados Unidos lideram em capacidade de modelos de fronteira — GPT-5.5 (OpenAI), Claude (Anthropic) e Gemini (Google DeepMind) — e em investimento privado em IA (US$67 bilhões em 2023 segundo dados da OCDE). A China lidera em registros de patentes de IA, escala de implantação dirigida pelo Estado e desenvolvimento de modelos domésticos; o DeepSeek R1 igualou o GPT-5.5 em benchmarks-chave em janeiro de 2025. A União Europeia lidera em regulamentação de IA — o EU AI Act é o framework de referência global — mas fica atrás em capacidade de modelos de fronteira e investimento privado em relação ao seu tamanho econômico. Nenhum único ator lidera nas três dimensões simultaneamente.',
          ],
        },

        qaWhatIsBrusselsEffect: {
          title: 'O que é o Efeito Bruxelas na IA?',
          content: [
            'O Efeito Bruxelas descreve como as regulamentações da UE se tornam padrões globais de fato porque empresas multinacionais consideram operacionalmente mais simples aplicar o padrão mais rigoroso em todo o mundo em vez de manter pilhas de conformidade separadas por jurisdição. O EU AI Act aplica-se a qualquer sistema de IA colocado no mercado da UE ou cuja saída alcance usuários da UE — forçando OpenAI, Google DeepMind e Anthropic a cumprirem as obrigações de transparência da UE para seus produtos globais, não apenas versões específicas para a UE. O mesmo mecanismo tornou o RGPD um padrão global de privacidade.',
          ],
        },

        qaHowChinaRegulates: {
          title: 'Como a China regula a inteligência artificial?',
          content: [
            'A China regula a IA por meio da Administração do Ciberespaço da China (CAC). As Regulamentações de Recomendação de Algoritmos (2022) exigem a rotulagem de conteúdo curado algoritmicamente. As Medidas de IA Generativa (2023) exigem uma avaliação de segurança do CAC — um processo de 45–90 dias — antes de qualquer serviço de IA generativa voltado ao consumidor poder ser lançado na China, e determinam que as saídas de IA se alinhem com os "valores socialistas fundamentais". Modelos de IA estrangeiros (GPT-5.5, Claude, Gemini) são inacessíveis da China continental sem ferramentas de contorno. As alternativas domésticas incluem Alibaba Qwen, Baidu ERNIE 4.0, ByteDance Doubao e DeepSeek.',
          ],
        },

        qaWhatEUAIActRequires: {
          title: 'O que o EU AI Act exige das organizações?',
          content: [
            'O EU AI Act classifica sistemas de IA em quatro níveis de risco com obrigações dimensionadas. Práticas proibidas — pontuação social por autoridades públicas, vigilância biométrica em tempo real em espaços públicos — estão proibidas desde agosto de 2024. Sistemas de IA de alto risco usados em emprego, avaliação de crédito, saúde ou aplicação da lei exigem avaliações de conformidade, documentação de supervisão humana e registro no banco de dados de IA da UE antes de agosto de 2026. Modelos de IA de Propósito Geral (GPT-5.5, Claude, Gemini) devem publicar resumos de dados de treinamento e cumprir a lei de direitos autorais da UE — regras que se aplicaram a partir de agosto de 2025. Todas as organizações que atendem usuários da UE devem estar em conformidade, independentemente de onde estão sediadas.',
          ],
        },

        qaExportControls: {
          title: 'Como os controles de exportação dos EUA afetam o desenvolvimento de IA?',
          content: [
            'Os controles de exportação dos EUA restringem a venda de GPUs Nvidia avançadas — incluindo A100 e H100 — para a China, visando limitar a capacidade da China de treinar modelos de IA de fronteira. Os controles são aplicados por meio das Regulamentações de Administração de Exportações (EAR) e se aplicam a produtos da Nvidia, AMD e Intel acima de limites de computação especificados. O lançamento do DeepSeek R1 em janeiro de 2025 demonstrou os limites dessa abordagem: treinado em GPUs H800 restritas para a China a uma fração do custo reportado de modelos dos EUA comparáveis, igualou o GPT-5.5 em benchmarks AIME 2024, MATH-500 e HumanEval. Os controles de exportação diminuem, mas não detiveram o desenvolvimento de IA de fronteira chinesa.',
          ],
        },

        qaTSMCRole: {
          title: 'Qual é o papel da TSMC na geopolítica da IA?',
          content: [
            'A TSMC (Taiwan Semiconductor Manufacturing Company) fabrica os chips avançados que alimentam a IA de fronteira — as GPUs H100 e H200 da Nvidia, as TPUs do Google e o Neural Engine da Apple são todos fabricados nas instalações da TSMC em Taiwan. Nenhuma outra empresa fabrica atualmente chips em nós de processo comparáveis (3nm, 2nm) em escala. Isso torna a TSMC um ponto único de dependência na infraestrutura global de IA: os controles de exportação dos EUA dependem de a TSMC não fornecer nós avançados a fabricantes de chips chineses, e qualquer perturbação ao status político de Taiwan restringiria imediatamente o fornecimento global de hardware de IA. A CHIPS and Science Act dos EUA (US$52 bilhões) financia capacidade doméstica de fabricação nos EUA especificamente para reduzir essa dependência.',
          ],
        },

        qaUSEUChinaDifferences: {
          title: 'Quais são as principais diferenças entre as estratégias de IA dos EUA, UE e China?',
          content: [
            'As três principais estratégias de IA diferem fundamentalmente em filosofia, estrutura legal e alcance internacional. Os EUA priorizam inovação e competitividade por meio da liderança do setor privado sem lei federal de IA — reguladores setoriais existentes (FTC, FDA, EEOC) aplicam mandatos existentes à IA em seus domínios. A UE prioriza a proteção dos direitos fundamentais por meio de um framework legal horizontal obrigatório — o EU AI Act — que se aplica extraterritorialmente a qualquer IA que alcance usuários da UE. A China prioriza o controle estatal e o desenvolvimento nacional por meio de regulamentação obrigatória de conteúdo e avaliações de segurança pré-lançamento aplicadas pelo CAC. Essas abordagens são estruturalmente incompatíveis: organizações que operam nas três jurisdições precisam navegar por requisitos conflitantes simultaneamente.',
          ],
        },

        defEUAIAct: {
          title: 'Definição: EU AI Act',
          content: 'A primeira regulamentação abrangente e juridicamente vinculante de IA do mundo, aprovada pelo Parlamento Europeu em março de 2024. Classifica sistemas de IA em quatro níveis de risco (Inaceitável, Alto, Limitado, Mínimo) com obrigações dimensionadas. Práticas proibidas a partir de agosto de 2024; obrigações de transparência de IA de Propósito Geral a partir de agosto de 2025; requisitos de sistemas de alto risco a partir de agosto de 2026. Multas chegam a €35 milhões ou 7% do faturamento global. Aplica-se extraterritorialmente a qualquer IA que alcance usuários da UE.',
        },

        defBrusselsEffect: {
          title: 'Definição: Efeito Bruxelas',
          content: 'O fenômeno pelo qual as regulamentações da UE se tornam padrões globais de fato porque empresas multinacionais consideram mais simples aplicar um padrão rigoroso em todo o mundo em vez de manter pilhas de conformidade separadas por jurisdição. O RGPD se tornou um padrão global de privacidade por meio do Efeito Bruxelas. O EU AI Act está fazendo o mesmo: OpenAI, Anthropic e Google precisam cumprir os requisitos do EU AI Act para seus produtos globais, não apenas versões específicas para a UE.',
        },

        defHighRiskAI: {
          title: 'Definição: Sistema de IA de alto risco',
          content: 'Sob o EU AI Act, um sistema de IA cuja falha ou mau funcionamento pode causar danos significativos aos direitos fundamentais. Exemplos: IA usada em decisões de contratação, avaliação de crédito, diagnóstico de saúde, aplicação da lei, acesso a serviços públicos e avaliação educacional. A IA de alto risco requer avaliações de conformidade, documentação de supervisão humana, controles de qualidade de dados de treinamento e registro no banco de dados de IA da UE antes da implantação.',
        },

        defGPAI: {
          title: 'Definição: IA de Propósito Geral (GPAI)',
          content: 'Um sistema de IA treinado em dados amplos com uma arquitetura geral (não especializada ou específica de domínio) que pode ser adaptado para uma ampla gama de tarefas downstream. GPT-5.5, Claude Opus 4.8 e Gemini 3.1 Pro são modelos GPAI. Sob o EU AI Act, modelos GPAI com computação de treinamento >10^25 FLOP enfrentam obrigações de transparência incluindo resumos de dados de treinamento, documentação de capacidades e conformidade com direitos autorais.',
        },

        defCAC: {
          title: 'Definição: Administração do Ciberespaço da China (CAC)',
          content: 'O principal órgão regulatório da China para governança de internet, ciberespaço e IA. Aplica as Regulamentações de Recomendação de Algoritmos (2022) e as Medidas de IA Generativa (2023). Exige avaliações de segurança antes que serviços de IA generativa sejam lançados na China, determina filtros de conteúdo que bloqueiam críticas ao PCCh e tópicos politicamente sensíveis, e pode compelir a divulgação de dados de fornecedores de IA.',
        },

        defDataSovereignty: {
          title: 'Definição: Soberania de dados',
          content: 'O princípio de que os dados estão sujeitos às leis do país onde estão localizados ou gerados, e que as organizações podem manter o controle total sobre os dados sem transferi-los para jurisdições estrangeiras. O RGPD da UE e o EU AI Act tratam a soberania de dados como um requisito de conformidade: o processamento de dados pessoais deve cumprir a lei da UE mesmo que o processamento ocorra fora da UE, se os titulares dos dados forem residentes da UE.',
        },

        defAlgorithmRecs: {
          title: 'Definição: Regulamentações de Recomendação de Algoritmos (China)',
          content: 'A regulamentação da China de 2022 que exige que plataformas que usam algoritmos para recomendar conteúdo rotulem e divulguem publicamente a curadoria algorítmica. Aplica-se a redes sociais, feeds de notícias, recomendação de vídeo e mecanismos de busca. Exige que os usuários recebam opções para desativar as recomendações algorítmicas. Aplicada pelo CAC para aumentar a transparência e a supervisão governamental da distribuição de conteúdo algorítmico.',
        },

        defSCCs: {
          title: 'Definição: Cláusulas Contratuais Padrão (SCCs)',
          content: 'Modelos de contrato pré-aprovados emitidos pela Comissão Europeia que permitem que as organizações transfiram dados pessoais da UE para jurisdições não adequadas (como EUA ou China) enquanto reivindicam conformidade com o RGPD. As SCCs colocam obrigações contratuais no importador de dados para proteger os dados sob os padrões da UE. A eficácia é questionada: o sistema judiciário da UE questionou se as SCCs protegem contra vigilância governamental nos EUA e em outros países.',
        },

        politicianQuotes: {
          title: 'O que os políticos estão dizendo',
          content: [
            '**A IA se tornou uma questão política de primeiro nível nos três blocos regulatórios, com líderes enquadrando-a como uma questão de sobrevivência econômica, valores democráticos e segurança nacional.** As declarações abaixo são extraídas de discursos oficiais e registros parlamentares.',
          ],
        },

        quoteVonDerLeyen: {
          title: '',
          blockquote: 'A inteligência artificial é a tecnologia definitória do nosso tempo. A Europa deve moldá-la — não apenas adotá-la. Queremos uma IA que trabalhe para as pessoas, não o contrário.',
          blockquoteSource: 'Ursula von der Leyen, Presidente da Comissão Europeia — Discurso sobre estratégia europeia de IA, 2024',
        },

        quoteVestager: {
          title: '',
          blockquote: 'O AI Act é o primeiro framework legal abrangente do mundo para inteligência artificial. Coloca as pessoas e sua segurança no centro — não apenas a tecnologia. É assim que a inovação responsável se parece.',
          blockquoteSource: 'Margrethe Vestager, ex-Vice-Presidente Executiva da Comissão Europeia — Parlamento Europeu, março de 2024',
        },

        quoteBreton: {
          title: '',
          blockquote: 'O AI Act é uma conquista histórica. A Europa é o primeiro continente a estabelecer um framework jurídico claro para IA. Segurança e inovação não são opostos — andam juntos. Mostramos isso ao mundo.',
          blockquoteSource: 'Thierry Breton, ex-Comissário Europeu para o Mercado Interno — Comissão Europeia, março de 2024',
        },

        quoteMacron: {
          title: '',
          blockquote: 'A França quer ser uma nação líder em IA na Europa. Paris sediará a AI Action Summit. Estamos investindo em IA aberta, confiável e sustentável — e convidamos o mundo a se juntar a nós.',
          blockquoteSource: 'Emmanuel Macron, Presidente da França — Anúncio da AI Action Summit, 2024',
        },

        quoteSunak: {
          title: '',
          blockquote: 'O Reino Unido trabalhará com parceiros ao redor do mundo para garantir que a IA seja segura. Bletchley Park é onde esta conversa começa — mas não deve terminar aqui.',
          blockquoteSource: '[Rishi Sunak, ex-Primeiro-Ministro do Reino Unido — AI Safety Summit, Bletchley Park, novembro de 2023](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
        },

        quoteScholz: {
          title: '',
          blockquote: 'A Alemanha quer se tornar um dos principais locais de IA da Europa. Estamos investindo em pesquisa de IA, infraestrutura digital e nas pessoas que construirão a próxima geração de sistemas inteligentes.',
          blockquoteSource: 'Olaf Scholz, ex-Chanceler Federal da Alemanha — Atualização da Estratégia Nacional de IA, 2024',
        },

        faq: {
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'O que é o EU AI Act e quando se aplica?', a: 'O EU AI Act é a primeira lei abrangente de IA do mundo, aprovada pelo Parlamento Europeu em março de 2024. Práticas proibidas se aplicam a partir de agosto de 2024. Obrigações de modelos GPAI (para modelos GPT-5.5, Claude, classe Gemini) aplicam-se a partir de agosto de 2025. Requisitos de sistemas de IA de alto risco aplicam-se a partir de agosto de 2026. Aplica-se a qualquer organização que coloque IA no mercado da UE ou use IA que afete residentes da UE.' },
            { q: 'O EU AI Act se aplica a empresas não pertencentes à UE?', a: 'Sim. O EU AI Act tem alcance extraterritorial — aplica-se a qualquer fornecedor cujas saídas de IA são usadas na UE, independentemente de onde o fornecedor está sediado. Uma empresa dos EUA cujo produto de IA é usado por residentes da UE precisa estar em conformidade. Este é o mesmo princípio extraterritorial que tornou o RGPD um padrão global.' },
            { q: 'Quais são as multas por violar o EU AI Act?', a: 'Multas de até €35 milhões ou 7% do faturamento anual global (o que for maior) por práticas de IA proibidas. Até €15 milhões ou 3% por violações de IA de alto risco. Até €7,5 milhões ou 1% por fornecer informações incorretas às autoridades de aplicação. O maior percentual ou valor fixo se aplica.' },
            { q: 'Quais aplicações de IA são proibidas sob o EU AI Act?', a: 'Proibidas (Risco Inaceitável): sistemas de pontuação social por autoridades públicas; identificação biométrica em tempo real em espaços públicos (com exceções restritas); IA que explora vulnerabilidades psicológicas; coleta indiscriminada de imagens faciais da internet. Essas estão proibidas desde agosto de 2024.' },
            { q: 'Como a regulamentação de IA dos EUA difere da UE?', a: 'Os EUA não têm lei federal de IA. Reguladores setoriais existentes (FTC, FDA, CFPB, EEOC) aplicam seus mandatos existentes à IA em seus domínios. A Ordem Executiva de Segurança de IA de Biden (outubro de 2023) foi revogada em janeiro de 2025 e substituída por um Plano de Ação de IA focado em competitividade. O NIST AI Risk Management Framework é voluntário. A regulamentação dos EUA é reativa e específica do setor; a regulamentação da UE é proativa e horizontal.' },
            { q: 'O DeepSeek é seguro para usar em organizações da UE?', a: 'O DeepSeek está sujeito a regulamentações do CAC (Administração do Ciberespaço da China), o que significa que o governo chinês pode compelir a divulgação de dados. A política de privacidade do DeepSeek afirma que os dados são armazenados em servidores na China. Para organizações da UE que processam dados pessoais, usar o DeepSeek requer salvaguardas de transferência de dados em conformidade com o RGPD (SCCs), que são difíceis de aplicar contra a lei chinesa. Organizações governamentais e de infraestrutura crítica em estados-membros da UE geralmente evitam ferramentas de IA chinesas.' },
            { q: 'O que é o Efeito Bruxelas?', a: 'O Efeito Bruxelas descreve como as regulamentações da UE se tornam padrões globais de fato porque empresas multinacionais preferem um padrão rigoroso à manutenção de conformidade separada para cada jurisdição. O RGPD se tornou um padrão global de privacidade dessa forma. O EU AI Act está fazendo o mesmo para a IA — OpenAI, Anthropic e Google precisam cumprir os requisitos GPAI do EU AI Act para seus produtos globais, não apenas versões específicas para a UE.' },
            { q: 'O que a AI Safety Summit de Bletchley Park alcançou?', a: 'A AI Safety Summit de novembro de 2023 em Bletchley Park produziu a Declaração de Bletchley — assinada por 28 países incluindo EUA, China e estados-membros da UE — reconhecendo que a IA de fronteira apresenta riscos sérios e requer cooperação internacional. A cúpula estabeleceu o UK AI Safety Institute (AISI) e iniciou uma série de institutos globais de segurança de IA nos EUA e em outros lugares. A participação da China foi notável dado as tensões geopolíticas mais amplas.' },
            { q: 'Como a França apoia a IA de forma diferente da Alemanha?', a: 'A França prioriza o posicionamento internacional de alto perfil (AI Action Summit em Paris, fevereiro de 2025) e a pesquisa de IA de pesos abertos por meio do INRIA e CNRS, com €2 bilhões em investimento público. A Alemanha foca na IA industrial aplicada por meio da Fraunhofer Society e DFKI, com €5 bilhões investidos 2019–2025, e enfatiza frameworks de governança e responsabilidade de IA por meio da legislação federal. Ambas têm estratégias nacionais de IA, mas com diferentes ênfases setoriais.' },
            { q: 'Como o EU AI Act afeta a IA usada na engenharia de prompt?', a: 'A maior parte do trabalho de engenharia de prompt se enquadra na categoria de Risco Limitado ou Mínimo — chatbots padrão e ferramentas de escrita de IA exigem divulgação (os usuários precisam saber que interagem com IA), mas sem avaliação de conformidade. As classificações de alto risco se aplicam quando a IA toma decisões significativas: triagem de empregos, avaliação de crédito, avaliação educacional ou aplicação da lei.' },
            { q: 'O que é o Processo de IA de Hiroshima e o que ele alcançou?', a: 'O Processo de IA de Hiroshima é uma iniciativa do G7 lançada na Cúpula de Hiroshima de 2023 sob a presidência japonesa do G7. Produziu o Código de Conduta do Processo de IA de Hiroshima — 11 princípios orientadores voluntários para desenvolvedores de sistemas de IA avançados, adotados pelas nações do G7 em outubro de 2023. Os princípios cobrem transparência, relatórios de incidentes, testes de segurança e marca d\'água de conteúdo gerado por IA. O Código de Conduta é voluntário, não juridicamente vinculante, mas sinaliza coordenação internacional separada do EU AI Act juridicamente vinculante.' },
            { q: 'Organizações da UE podem usar DeepSeek para aplicações comerciais?', a: 'Tecnicamente sim, com salvaguardas contratuais em conformidade com o RGPD (Cláusulas Contratuais Padrão). Na prática, as SCCs são difíceis de aplicar contra obrigações da lei chinesa, que exigem que o DeepSeek cumpra as solicitações de divulgação de dados do CAC. A aquisição governamental é uma restrição separada: o BSI da Alemanha, a ANSSI da França e o NCSC dos Países Baixos emitiram avisos ou restrições sobre ferramentas de IA chinesas para uso governamental e de infraestrutura crítica. Organizações privadas da UE podem usar o DeepSeek comercialmente, mas devem realizar uma Avaliação de Impacto de Transferência nos termos do Artigo 46 do RGPD e documentar o risco residual.' },
            { q: 'O EU AI Act prejudica ou ajuda a competitividade da UE em IA?', a: 'Este é um dilema estratégico genuíno: o EU AI Act pode desacelerar as startups de IA da UE, mas fortalece a credibilidade regulatória da Europa globalmente. Por um lado, os custos de conformidade e as avaliações de conformidade criam atrito para as empresas da UE — a Mistral AI da França é mais restrita do que os concorrentes dos EUA. Por outro lado, o Efeito Bruxelas significa que o framework regulatório da UE se torna o padrão global, dando às empresas sediadas na UE uma vantagem competitiva em conformidade. A Europa está apostando em "liderança regulatória" em vez de "liderança de capacidade bruta" — uma estratégia de IA fundamentalmente diferente dos EUA ou da China.' },
            { q: 'Como a capacidade de computação da Europa se compara aos EUA e à China?', a: 'A Europa fica significativamente atrás em infraestrutura de computação. Os EUA dominam a fabricação de GPU (Nvidia ~80% de participação de mercado) e o silício personalizado. A China fabrica na TSMC (Taiwan) e usa GPUs Nvidia H e A-series restritas. A Europa não tem equivalente: a ASML (Países Baixos) fabrica equipamentos de fabricação de chips, mas não possui fábricas. A EU Chips Act (€43 bilhões) visa construir fábricas da Intel e TSMC no território da UE, mas nenhuma estará operacional antes de 2027–2029. Esta é a principal vulnerabilidade de infraestrutura da Europa: treinar modelos de fronteira requer milhares de GPUs rodando por meses. Sem capacidade de fabricação doméstica, a Europa permanece dependente dos EUA (Nvidia) e de Taiwan (TSMC).' },
            { q: 'Qual é a vantagem da Europa em IA além da regulamentação?', a: 'A Europa tem três vantagens não regulatórias: (1) Mistral AI e outros modelos de pesos abertos financiados pela UE fornecem alternativas em conformidade com o RGPD sem dependências dos EUA ou da China; (2) A Europa lidera em pesquisa de segurança de IA por meio do UK AI Safety Institute, ETH Zurique e centros de pesquisa franceses (INRIA, CNRS); (3) A força de trabalho altamente qualificada da Europa e os talentos existentes em software/semicondutores lhe dão vantagem em aplicações de IA e silício personalizado. No entanto, nenhuma dessas vantagens compensa a desvantagem da Europa na capacidade de modelos de fronteira — os EUA lideram no GPT-5.5 e Claude, e a China na escala de implantação e volume. A estratégia da Europa é "fazer o que você é bom (segurança, regulamentação, ética) em vez de competir na capacidade bruta".' },
          ],
        },

        commonMistakes: {
          title: 'Erros comuns ao implantar IA em fronteiras geopolíticas',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Assumir que a conformidade com o EU AI Act é opcional se sua empresa está sediada nos EUA.',
              problem: 'O Efeito Bruxelas significa que o EU AI Act se aplica extraterritorialmente — se o seu sistema de IA alcança qualquer usuário da UE, você precisa estar em conformidade. Empresas dos EUA que atendem usuários da UE enfrentaram aplicação regulatória.',
              fix: 'Audite a geografia dos seus usuários. Se algum usuário está em estados-membros da UE, implemente a conformidade com o EU AI Act no nível da aplicação: classifique sua IA por risco, documente os dados de treinamento, implemente supervisão humana para sistemas de alto risco e mantenha trilhas de auditoria.',
            },
            {
              mistake: 'Enviar dados pessoais de usuários chineses por meio de endpoints de API hospedados nos EUA sem proteções equivalentes ao RGPD.',
              problem: 'A PIPL da China (2021) proíbe a transferência transfronteiriça de dados pessoais sem avaliação de segurança governamental. Reguladores na Alemanha, França e Países Baixos restringiram ferramentas de IA chinesas para uso governamental. Organizações do setor privado enfrentam exposição legal.',
              fix: 'Roteie o tráfego de usuários da China por meio de inferência hospedada no continente (Alibaba Cloud, Tencent Cloud) para que os dados pessoais nunca saiam da jurisdição chinesa. Para implantações internacionais, use Qwen 3 (pesos abertos) ou Mistral (sediado na UE) em vez de APIs dos EUA para produtos voltados à China.',
            },
            {
              mistake: 'Assumir que os filtros de conteúdo do CAC retornam erros HTTP 4xx (como erros padrão de API).',
              problem: 'APIs reguladas pelo CAC (Baidu ERNIE, DeepSeek) retornam HTTP 200 com flag `is_safe: 0` no corpo da resposta quando o conteúdo é filtrado — não um status 4xx. Aplicações que esperam erros HTTP ignorarão respostas filtradas e usarão conteúdo bloqueado.',
              fix: 'Verifique explicitamente o campo `is_safe` nas respostas da API. Registre e trate as respostas filtradas no nível da aplicação. Teste sua implantação de IA na China com prompts tocando tópicos sensíveis (Taiwan, Tiananmen, etc.) para verificar se a filtragem é tratada corretamente.',
            },
            {
              mistake: 'Tratar os controles de exportação de GPU como uma barreira permanente ao desenvolvimento de IA chinesa.',
              problem: 'O DeepSeek R1 (janeiro de 2025) igualou o GPT-5.5 em principais benchmarks enquanto treinava em GPUs H800 restritas a ~US$6M de custo de computação — 94% mais barato do que as estimativas de treinamento do GPT-4. Os controles de exportação desaceleram o progresso chinês, mas não o detêm.',
              fix: 'Planeje para uma competição geopolítica de IA de várias décadas. Para roteiros de produtos de longo prazo, não assuma que a dominância de hardware dos EUA é permanente. Considere investir em alternativas de pesos abertos (Llama, Mistral, Qwen) que são mais difíceis de restringir. Monitore o status político da TSMC, pois ela fabrica todos os chips avançados.',
            },
            {
              mistake: 'Assumir que modelos proprietários dos EUA (GPT-5.5, Claude) permanecerão disponíveis globalmente sem atrito regulatório.',
              problem: 'O EU AI Act já aplica obrigações de conformidade ao GPT-5.5 e ao Claude. Regulamentações futuras da UE poderiam restringir a exportação de dados ou exigir implantação on-premises para casos de uso sensíveis. A estratégia de substituição doméstica da China (Made in China 2025) pode limitar o acesso a modelos estrangeiros.',
              fix: 'Diversifique sua infraestrutura de IA. Use uma combinação de modelos proprietários (para capacidade de fronteira), modelos de pesos abertos (para flexibilidade regulatória) e implantações locais (para residência de dados). Teste seu produto em GPT-5.5, Claude, Mistral e Qwen para reduzir a dependência de fornecedor.',
            },
          ],
        },

        sources: {
          title: 'Fontes',
          items: [
            'Parlamento Europeu, "Artificial Intelligence Act" — Texto oficial, março de 2024. [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)',
            'Comissão Europeia, "AI Office" — Documentação de conformidade GPAI e orientações de aplicação. [AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office)',
            'NIST, "Artificial Intelligence Risk Management Framework (AI RMF 1.0)" — Janeiro de 2023. [NIST](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)',
            'Governo do Reino Unido, "AI Safety Summit — Bletchley Declaration" — Novembro de 2023. [Gov.uk](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration)',
            'Administração do Ciberespaço da China, "Provisions on the Management of Generative Artificial Intelligence Services" — Julho de 2023',
            'DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" — arXiv:2501.12948, Janeiro de 2025',
            'OECD AI Policy Observatory — [oecd.ai](https://oecd.ai) — Base de dados de política de IA por país e análise comparativa',
            'Governo Federal Alemão, "Strategie Künstliche Intelligenz" — Estratégia Nacional de IA, atualizada em 2023. [Bundesregierung](https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie)',
            'Rishi Sunak, PM Speech at AI Safety Summit — Novembro de 2023. [Gov.uk](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023)',
          ],
        },

        relatedReading: {
          title: 'Leitura relacionada',
          items: [
            '[LLMs Open Source vs. Proprietários](/prompt-engineering/open-source-vs-proprietary-llms) — Como a conformidade com o EU AI Act e os requisitos de soberania de dados afetam a decisão de pesos abertos vs. API',
            '[Limitações de IA: O que os LLMs não conseguem fazer](/prompt-engineering/ai-limitations-what-llms-cant-do) — Entendendo os limites de capacidade relevantes para avaliações de sistemas de IA de alto risco sob o EU AI Act',
            '[Injeção de Prompt e Segurança](/prompt-engineering/prompt-injection-and-security) — Vulnerabilidades de segurança que estratégias nacionais de IA e o EU AI Act abordam nos requisitos de sistemas de alto risco',
            '[Alucinações de IA: Por que a IA inventa coisas](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Problemas de confiabilidade centrais para a documentação de alto risco do EU AI Act e os requisitos de supervisão humana',
            '[RAG Explicado](/prompt-engineering/rag-explained) — Como a geração aumentada por recuperação aborda preocupações de corte de conhecimento e alucinação relevantes para implantações de IA reguladas',
            '[RGPD e IA: Obrigações de conformidade](/prompt-engineering/gdpr-and-ai-compliance) — Como a lei de proteção de dados da UE se combina com o AI Act para criar requisitos de conformidade em múltiplas camadas para organizações que processam dados pessoais através de fronteiras',
          ],
        },
      },
    },
};
