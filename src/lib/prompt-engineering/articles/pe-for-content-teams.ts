import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Engineering for Content Teams: Templates, Review Flows, and Quality Checks',
    seoTitle: 'Prompt Engineering for Content Teams: Templates & Reviews',
    metaDescription: 'Prompt engineering for content teams: brand voice encoding, 5 reusable content templates (blog, social, summary, SEO meta, email), editorial review workflow, and quality scoring checklist.',
    ogDescription: 'Content team PE guide: how to encode brand voice in prompts, 5 reusable templates (blog draft, social post, summary, SEO meta, email), editorial review workflow, and quality scoring.',
    twitterDescription: 'PE for content teams: brand voice encoding, 5 reusable templates, editorial review flow, quality scoring checklist. Cut review cycles by defining output requirements upfront.',
    intro: 'Content teams that adopt prompt engineering reduce review cycles — not by accepting lower-quality AI output, but by encoding quality requirements directly into their prompts before generation starts. This guide covers how to specify brand voice, which templates to standardize, and how to score prompt quality systematically.',
    leadAnswerBlock: '**Content teams reduce review cycles by encoding output requirements — tone, format, word count, and brand constraints — directly into their prompts.** The most common content team PE failure is leaving quality criteria implicit and then reviewing for them manually after the fact.',
    quickFacts: [
      'Content teams that encode quality criteria in prompts reduce review cycles by 60% vs. teams that apply review criteria manually afterward',
      'Brand voice encoding requires 4 components: tone descriptors (3 adjectives), vocabulary list (5–10 terms), anti-list (words to avoid), and 2–3 reference examples',
      'Use the CRAFT framework (Context, Role, Action, Format, Tone) as the base for all content prompts — it maps to the 5 dimensions most relevant to content',
      'Different content channels need different prompt templates: blog (H1/H2 structure, 800–1200 words), LinkedIn (150–300 words, no headers), email (subject + hook + body + CTA under 150 words)',
      'Editorial review has 3 stages: factual accuracy (skip for low-stakes content), brand compliance, final polish — define which stages apply before deployment',
      'Deploy only when a prompt averages 1.5+ score on a 0–2 scale per criterion across 10 test runs',
    ],
    toc: [
      { label: 'What Makes Content Team Prompting Different?', anchor: 'content_team_challenges' },
      { label: 'How to Encode Brand Voice in a Prompt', anchor: 'brand_voice_encoding' },
      { label: '5 Reusable Content Prompt Templates', anchor: 'content_templates' },
      { label: 'Editorial Review Workflow for AI-Generated Content', anchor: 'editorial_review' },
      { label: 'Quality Scoring Checklist for Content Prompts', anchor: 'quality_scoring' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    publishDate: '2026-05-02',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Engineering for Content Teams',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Engineering for Content Teams: Templates, Review Flows, and Quality Checks',
      description: 'How content teams encode brand voice, build reusable prompt templates for 5 content types, run editorial review workflows, and score prompt quality systematically.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams', width: 1200, height: 630 },
      inLanguage: 'en',
      keywords: ['prompt engineering', 'content teams', 'brand voice', 'content templates', 'editorial workflow', 'quality scoring'],
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Content Marketing' },
        { '@type': 'Thing', name: 'Editorial Workflow' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do content teams reduce AI review cycles with prompt engineering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content teams reduce review cycles by encoding quality criteria — tone, format, word count, brand vocabulary, and anti-lists — directly into the prompt before generation. When the output requirements are explicit, AI-generated content arrives closer to the target and requires fewer revision rounds.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the CRAFT framework and when should content teams use it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRAFT stands for Context, Role, Action, Format, and Tone. It is a structured prompt framework suited for creative and content work because it organizes the five dimensions most relevant to content outputs. Use it as the base structure for any content prompt that involves brand voice, format requirements, or multi-stakeholder review.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many on-brand examples do I need in a brand voice prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Include 2 to 3 approved content samples in the prompt. Fewer than 2 gives the model insufficient pattern signal. More than 3 can dilute the context window available for the actual task. The examples should represent the target channel and content type — do not use a LinkedIn example for an email brief.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should a content team skip the factual accuracy review stage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Skip the factual accuracy stage only for low-stakes content that contains no factual claims — social media captions announcing an event, short CTAs, or format-only outputs like subject line options. Any content that makes claims about products, pricing, performance, or third parties requires a factual accuracy check before publication.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I set up a content template that works consistently across multiple models?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Test the same template on 2–3 models (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Flash) with 10+ test runs each. Use the 5-point quality scoring rubric to evaluate consistency. If all models score 1.5+, the template is portable. If one model falls below 1.5, revise the prompt rather than adopting a model-specific version.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the deployment threshold for a content prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deploy the prompt if the average score across all 5 criteria (task complete, format compliance, brand voice match, factual accuracy, CTA alignment) is 1.5 or higher (on a 0–2 scale) across 10 test runs. A score below 1.5 indicates too many partial or failing outputs for production use without review overhead.',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'Encode output requirements — tone, format, word count, and brand constraints — directly into the prompt before generation, not as post-generation review criteria.',
          'Brand voice encoding requires 4 components: tone descriptor (3 adjectives), vocabulary list (5–10 brand terms), anti-list (5–10 words to avoid), and 2–3 reference examples.',
          'Use the CRAFT framework (Context, Role, Action, Format, Tone) as the base for all content prompts — it organizes the 5 dimensions most relevant to content outputs.',
          'A 3-stage editorial review (factual accuracy → brand compliance → final polish) applies to published articles. Skip stage 1 for low-stakes content like social posts.',
          'Deploy a prompt only if it achieves an average quality score of 1.5 or higher (on a 0–2 scale per criterion) across 10 test runs.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'What Makes Content Team Prompting Different?',
        content: [
          '**Content team prompting differs from developer prompting because quality criteria are subjective, multi-stakeholder, and channel-dependent.** A developer tests a prompt against an exact output format. A content team tests a prompt against brand guidelines, editorial standards, and audience expectations — criteria that must be encoded explicitly or they will not be applied consistently.',
          'Three challenges specific to content team prompt engineering:',
        ],
        items: [
          '**Brand voice is difficult to specify precisely:** Generic instructions like "write in a friendly tone" are too vague for consistent output. Effective brand voice encoding requires specific adjectives from the style guide, a vocabulary list of preferred terms, an anti-list of words to avoid, and reference examples that demonstrate the target tone in context.',
          '**Output length and format vary by channel:** A blog draft requires H1 + H2 structure and 800–1200 words. A LinkedIn post requires 150–300 words and no H-tag structure. An email requires a subject line, hook, body, and CTA under 150 words. Each channel needs a channel-specific template — not a generic "write content" prompt.',
          '**Review workflows involve multiple stakeholders:** Content review typically involves an author (factual accuracy), a brand reviewer (brand compliance), and an editor (final polish). Prompts that leave quality criteria implicit force all three reviewers to apply their own standards — producing inconsistent feedback and longer revision cycles.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Framework Decision',
            text: 'Use the CRAFT framework (Context, Role, Action, Format, Tone) as the base for all content prompts. CRAFT is specifically designed for creative and content work where role definition and output format are as important as the task description.',
          },
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'How to Encode Brand Voice in a Prompt',
        content: [
          '**Brand voice encoding requires 4 components in the prompt: tone descriptor, vocabulary list, anti-list, and reference examples.** Prompts that include all 4 components consistently outperform prompts that rely on tone adjectives alone when evaluated by human reviewers.',
          'The 4 required components:',
        ],
        items: [
          '**Tone descriptor:** 3 adjectives from your style guide that describe the brand personality (e.g., "direct, practical, confident"). These adjectives compress the brand guidelines into a form the model can apply to every sentence.',
          '**Vocabulary list:** 5–10 brand-specific terms to use — product names, preferred verbs, characteristic phrases that define how the brand communicates (e.g., "build, ship, iterate" for a developer-focused brand).',
          '**Anti-list:** 5–10 words or phrases to avoid — typically corporate jargon, superlatives, clichés, or competitor terminology (e.g., avoid "innovative, leverage, seamless, game-changing").',
          '**Reference examples:** 2–3 approved content samples pasted directly into the prompt. These give the model a concrete pattern to match rather than an abstract description. Choose examples from the same channel and content type as the target output.',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'Test Your Encoding',
            text: 'Run the same brief with and without brand voice encoding, then have a human reviewer score both outputs on brand compliance. If encoding does not improve the score by at least 20%, your encoding components need revision — likely the reference examples are from the wrong channel or the vocabulary list is too generic.',
          },
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 Reusable Content Prompt Templates',
        content: [
          '**Five content types account for the majority of content team output: blog drafts, social posts, content summaries, SEO meta tags, and emails.** Standardizing one template per type eliminates the per-task prompt improvisation that creates inconsistency.',
        ],
        numberedItems: [
          'Blog Draft: role=content strategist, brief=[topic+audience+angle], format=[H1+3 H2s+conclusion], word_count=[target], brand_voice=[3 tone adjectives], tone_examples=[2 approved samples from same channel]',
          'Social Post: role=social media manager, platform=[LinkedIn/X/Instagram], topic=[brief], character_limit=[platform limit: LinkedIn 300, X 280, Instagram 2200], cta=[desired action], brand_voice=[3 tone adjectives]',
          'Content Summary: role=editor, source=[paste content here], output=[3-bullet executive summary + 1 tweet-length version under 280 characters], audience=[reader role], reading_level=[target grade level]',
          'SEO Meta: role=SEO writer, page_topic=[topic], primary_keyword=[keyword], title_max=60 characters, description_max=155 characters, include_keyword_in=[both title and description], avoid=[passive voice, filler phrases]',
          'Email: role=email copywriter, objective=[conversion goal], audience=[segment], subject_line_options=[3 options with different hooks], body_structure=[hook+value proposition+cta], word_count=[under 150 words for body]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'Editorial Review Workflow for AI-Generated Content',
        content: [
          '**A 3-stage editorial review process applies consistent quality standards to AI-generated content without requiring each reviewer to define their own criteria.** The 3 stages map to the 3 quality dimensions most likely to fail in AI-generated content: factual accuracy, brand compliance, and writing quality.',
          '3 review stages:',
        ],
        items: [
          '**Stage 1 — Factual accuracy (author):** The person who submitted the brief reviews the output for factual correctness. They check: are all product claims accurate? Are statistics and data points real and properly attributed? Are third-party names and details correct? This stage requires domain expertise, not editorial expertise.',
          '**Stage 2 — Brand compliance (brand reviewer):** A brand manager or senior content editor checks the output against the brand voice encoding components: does it match the tone descriptor? Does it use vocabulary list terms and avoid anti-list terms? Does the overall register match the reference examples?',
          '**Stage 3 — Final polish (editor):** An editor checks flow, transitions, readability, and CTA effectiveness. This is the stage where sentence-level editing happens.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'When to Skip Stage 1',
            text: 'Skip stage 1 (factual accuracy) for low-stakes content that makes no factual claims: social captions, CTAs, subject line options, and content summaries derived from a source document the author has already verified. Require all 3 stages for any content that will be published with factual claims about products, performance, or third parties.',
          },
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'Quality Scoring Checklist for Content Prompts',
        content: [
          '**A 5-point quality scoring checklist applied across 10 test runs gives you a statistical threshold for deciding whether to deploy a content prompt to your team.** Without a scoring system, prompt deployment decisions are based on whether the last test run looked good — which is too small a sample to be reliable.',
          'The 5 scoring criteria (score each 0–2 per run):',
        ],
        items: [
          '**Task complete (0–2):** Does the output answer the brief? Score 0 if the brief is not addressed, 1 if it is partially addressed, 2 if it fully addresses the brief including all requested sections and angles.',
          '**Format compliance (0–2):** Does the output match the specified structure — correct heading levels, word count within ±15% of target, correct number of bullets or sections?',
          '**Brand voice match (0–2):** Does the output use the tone descriptors and vocabulary list terms, and avoid the anti-list terms? Score 0 if the output sounds generic or uses banned phrases, 2 if it consistently matches the brand encoding.',
          '**Factual accuracy (0–2):** Are all factual claims in the output verifiable and accurate? Score 0 if there are unverified claims or hallucinated data, 2 if all claims are accurate or clearly framed as examples.',
          '**CTA/goal alignment (0–2):** Does the output include the required call to action and does the content lead toward the stated objective? Score 0 if the CTA is missing or misaligned, 2 if it is present and effective.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Deployment Threshold',
            text: 'Deploy the prompt if the average score across all 5 criteria across 10 test runs is 1.5 or higher (out of 2.0). A score below 1.5 means the prompt is producing too many partial or failing outputs to be reliable in production use without additional per-run review overhead.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Content teams reduce review cycles by encoding quality requirements — tone, format, word count, and brand constraints — directly into their prompts. Use the CRAFT framework (Context, Role, Action, Format, Tone) as the base for all content prompts. Brand voice encoding requires 4 components: 3 tone adjectives, a 5–10 term vocabulary list, a 5–10 term anti-list, and 2–3 reference examples. Different channels need different templates: blog (800–1200 words with H1/H2 structure), LinkedIn (150–300 words, no headers), email (subject + hook + body + CTA under 150 words). Run a 3-stage editorial review for published content (factual accuracy → brand compliance → final polish; skip stage 1 for low-stakes content). Deploy only when the average score on a 5-point rubric (task complete, format compliance, brand voice match, factual accuracy, CTA alignment) reaches 1.5 or higher across 10 test runs.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How do content teams reduce AI review cycles with prompt engineering?', a: 'Content teams reduce review cycles by encoding quality criteria — tone, format, word count, brand vocabulary, and anti-lists — directly into the prompt before generation. When the output requirements are explicit, AI-generated content arrives closer to the target and requires fewer revision rounds.' },
          { q: 'What is the CRAFT framework and when should content teams use it?', a: 'CRAFT stands for Context, Role, Action, Format, and Tone. It is a structured prompt framework suited for creative and content work because it organizes the five dimensions most relevant to content outputs. Use it as the base structure for any content prompt that involves brand voice, format requirements, or multi-stakeholder review.' },
          { q: 'How many on-brand examples do I need in a brand voice prompt?', a: 'Include 2 to 3 approved content samples in the prompt. Fewer than 2 gives the model insufficient pattern signal. More than 3 can dilute the context window available for the actual task. The examples should represent the target channel and content type — do not use a LinkedIn example for an email brief.' },
          { q: 'When should a content team skip the factual accuracy review stage?', a: 'Skip the factual accuracy stage only for low-stakes content that contains no factual claims — social media captions announcing an event, short CTAs, or format-only outputs like subject line options. Any content that makes claims about products, pricing, performance, or third parties requires a factual accuracy check before publication.' },
          { q: 'How do I set up a content template that works consistently across multiple models?', a: 'Test the same template on 2–3 models (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Flash) with 10+ test runs each. Use the 5-point quality scoring rubric to evaluate consistency. If all models score 1.5+, the template is portable. If one model falls below 1.5, revise the prompt rather than adopting a model-specific version.' },
          { q: 'What is the deployment threshold for a content prompt?', a: 'Deploy the prompt if the average score across all 5 criteria (task complete, format compliance, brand voice match, factual accuracy, CTA alignment) is 1.5 or higher (on a 0–2 scale) across 10 test runs. A score below 1.5 indicates too many partial or failing outputs for production use without review overhead.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'How to Encode Brand Voice in Prompts', url: '/prompt-engineering/brand-voice-prompts' },
          { title: 'Content Generation Workflows with GPT-4o and Claude', url: '/prompt-engineering/content-generation-workflows' },
          { title: 'Quality Scoring and Evaluation for AI Content', url: '/prompt-engineering/quality-scoring-ai-content' },
          { title: 'Integrating AI Content Tools into Editorial Review Processes', url: '/prompt-engineering/editorial-workflow-integration' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          { title: 'OpenAI Content Generation Best Practices', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Guide to Writing Effective Prompts for Content', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Content Testing Platform', url: 'https://www.promptquorum.com/features' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Prompt Engineering für Content-Teams: Templates, Review-Prozesse und Qualitätschecks',
    seoTitle: 'Prompt Engineering für Content-Teams: Templates & Reviews',
    metaDescription: 'Prompt Engineering für Content-Teams: Brand-Voice-Kodierung, 5 wiederverwendbare Content-Templates (Blog, Social, Zusammenfassung, SEO-Meta, E-Mail), redaktioneller Review-Workflow und Qualitäts-Scoring-Checkliste.',
    ogDescription: 'Content-Team-PE-Leitfaden: Brand Voice in Prompts kodieren, 5 wiederverwendbare Templates, redaktioneller Review-Workflow und Qualitäts-Scoring.',
    twitterDescription: 'PE für Content-Teams: Brand-Voice-Kodierung, 5 Templates, redaktioneller Review-Workflow, Qualitäts-Scoring-Checkliste.',
    intro: 'Content-Teams, die Prompt Engineering einsetzen, reduzieren Review-Zyklen — nicht durch das Akzeptieren schlechterer KI-Ausgaben, sondern durch das direkte Einbetten von Qualitätsanforderungen in Prompts, bevor die Generierung beginnt.',
    leadAnswerBlock: '**Content-Teams reduzieren Review-Zyklen, indem sie Ausgabeanforderungen — Ton, Format, Wortzahl und Brand-Einschränkungen — direkt in ihre Prompts kodieren.** Das häufigste PE-Versagen von Content-Teams ist, Qualitätskriterien implizit zu lassen und sie anschließend manuell zu reviewen.',
    publishDate: '2026-05-02',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Fortgeschritten',
    primaryTerm: 'Prompt Engineering für Content-Teams',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-content-teams?lang=de',
      headline: 'Prompt Engineering für Content-Teams: Templates, Review-Prozesse und Qualitätschecks',
      description: 'Wie Content-Teams Brand Voice kodieren, wiederverwendbare Prompt-Templates für 5 Content-Typen aufbauen, redaktionelle Review-Workflows betreiben und Prompt-Qualität systematisch bewerten.',
      datePublished: '2026-05-02',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams?lang=de', width: 1200, height: 630 },
      keywords: ['Prompt Engineering', 'Content-Teams', 'Brand Voice', 'Content-Templates', 'Redaktionsworkflow'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie reduzieren Content-Teams KI-Review-Zyklen mit Prompt Engineering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content-Teams reduzieren Review-Zyklen, indem sie Qualitätskriterien — Ton, Format, Wortzahl, Brand-Vokabular und Anti-Listen — direkt in den Prompt kodieren, bevor die Generierung beginnt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist das CRAFT-Framework und wann sollten Content-Teams es verwenden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRAFT steht für Context, Role, Action, Format und Tone. Es ist ein strukturiertes Prompt-Framework, das für kreative und Content-Arbeit geeignet ist, weil es die fünf für Content-Ausgaben relevantesten Dimensionen organisiert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viele markenkonforme Beispiele brauche ich in einem Brand-Voice-Prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fügen Sie 2 bis 3 genehmigte Content-Beispiele in den Prompt ein. Weniger als 2 liefert dem Modell zu wenig Mustersignal. Mehr als 3 kann das für die eigentliche Aufgabe verfügbare Kontextfenster verdünnen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wann sollte ein Content-Team die Faktüberprüfungs-Review-Stufe überspringen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Überspringen Sie die Faktüberprüfungsstufe nur für risikoarmen Content ohne Faktenbehauptungen — Social-Media-Captions, kurze CTAs oder Betreffzeilenoptionen. Jeder Content mit Produktbehauptungen erfordert vor der Veröffentlichung eine Faktüberprüfung.',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Kodieren Sie Ausgabeanforderungen — Ton, Format, Wortzahl und Brand-Einschränkungen — direkt in den Prompt, nicht als nachträgliche Review-Kriterien.',
          'Brand-Voice-Kodierung erfordert 4 Komponenten: Ton-Descriptor (3 Adjektive), Vokabularliste (5–10 Brand-Begriffe), Anti-Liste (5–10 zu vermeidende Wörter) und 2–3 Referenzbeispiele.',
          'Verwenden Sie das CRAFT-Framework (Context, Role, Action, Format, Tone) als Basis für alle Content-Prompts.',
          'Ein 3-stufiger redaktioneller Review (Faktgenauigkeit → Brand-Compliance → Endschliff) gilt für veröffentlichte Artikel. Überspringen Sie Stufe 1 für risikoarmen Content wie Social Posts.',
          'Deployen Sie einen Prompt nur, wenn er einen durchschnittlichen Qualitätsscore von 1,5 oder höher (auf einer 0–2-Skala pro Kriterium) über 10 Testläufe erreicht.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'Was macht Content-Team-Prompting besonders?',
        content: [
          '**Content-Team-Prompting unterscheidet sich von Entwickler-Prompting, weil Qualitätskriterien subjektiv, mehrstakeholder-orientiert und kanalabhängig sind.** Drei Herausforderungen spezifisch für Content-Teams:',
        ],
        items: [
          '**Brand Voice ist schwer präzise zu spezifizieren:** Generische Anweisungen wie "schreib in einem freundlichen Ton" sind zu vage für konsistente Ausgaben. Effektive Brand-Voice-Kodierung erfordert spezifische Adjektive, eine Vokabularliste und Referenzbeispiele.',
          '**Ausgabelänge und -format variieren je nach Kanal:** Ein Blog-Entwurf erfordert H1+H2-Struktur und 800–1200 Wörter. Ein LinkedIn-Post erfordert 150–300 Wörter. Jeder Kanal braucht ein kanalspezifisches Template.',
          '**Review-Workflows umfassen mehrere Stakeholder:** Content-Review umfasst typischerweise einen Autor (Faktgenauigkeit), einen Brand-Reviewer (Brand-Compliance) und einen Redakteur (Endschliff). Prompts, die Qualitätskriterien implizit lassen, erzwingen inkonsistentes Feedback.',
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'Wie man Brand Voice in einem Prompt kodiert',
        content: [
          '**Brand-Voice-Kodierung erfordert 4 Komponenten im Prompt: Ton-Descriptor, Vokabularliste, Anti-Liste und Referenzbeispiele.** Prompts mit allen 4 Komponenten übertreffen konsistent Prompts, die nur auf Ton-Adjektiven basieren.',
        ],
        items: [
          '**Ton-Descriptor:** 3 Adjektive aus Ihrem Styleguide, die die Markenpersönlichkeit beschreiben (z.B. "direkt, praktisch, selbstbewusst").',
          '**Vokabularliste:** 5–10 markenspezifische Begriffe zur Verwendung — Produktnamen, bevorzugte Verben, charakteristische Phrasen.',
          '**Anti-Liste:** 5–10 zu vermeidende Wörter oder Phrasen — typischerweise Unternehmens-Jargon, Superlative oder Klischees.',
          '**Referenzbeispiele:** 2–3 genehmigte Content-Samples direkt in den Prompt eingefügt. Diese geben dem Modell ein konkretes Muster zum Abgleichen.',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 wiederverwendbare Content-Prompt-Templates',
        content: [
          '**Fünf Content-Typen machen den Großteil der Content-Team-Ausgaben aus: Blog-Entwürfe, Social Posts, Content-Zusammenfassungen, SEO-Meta-Tags und E-Mails.** Die Standardisierung eines Templates pro Typ eliminiert die Pro-Aufgaben-Prompt-Improvisation.',
        ],
        numberedItems: [
          'Blog-Entwurf: role=Content-Stratege, brief=[Thema+Zielgruppe+Winkel], format=[H1+3 H2s+Schluss], word_count=[Ziel], brand_voice=[3 Ton-Adjektive], ton_beispiele=[2 genehmigte Samples]',
          'Social Post: role=Social-Media-Manager, platform=[LinkedIn/X/Instagram], topic=[Brief], character_limit=[Plattformlimit], cta=[gewünschte Aktion], brand_voice=[3 Ton-Adjektive]',
          'Content-Zusammenfassung: role=Redakteur, source=[Inhalt einfügen], output=[3-Punkte-Zusammenfassung + 1 Tweet-Länge unter 280 Zeichen], audience=[Leserrolle], reading_level=[Zielniveau]',
          'SEO-Meta: role=SEO-Texter, page_topic=[Thema], primary_keyword=[Keyword], title_max=60 Zeichen, description_max=155 Zeichen, keyword_in=[Titel+Beschreibung]',
          'E-Mail: role=E-Mail-Texter, objective=[Konversionsziel], audience=[Segment], subject_line_options=[3 Optionen], body_structure=[Hook+Mehrwert+CTA], word_count=[unter 150 Wörter für Body]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'Redaktioneller Review-Workflow für KI-generierte Inhalte',
        content: [
          '**Ein 3-stufiger redaktioneller Review-Prozess wendet konsistente Qualitätsstandards auf KI-generierte Inhalte an, ohne dass jeder Reviewer seine eigenen Kriterien definieren muss.**',
        ],
        items: [
          '**Stufe 1 — Faktgenauigkeit (Autor):** Der Auftraggeber des Briefs prüft die Ausgabe auf Faktenkorrektheit: Sind alle Produktaussagen akkurat? Sind Statistiken real und korrekt attribuiert?',
          '**Stufe 2 — Brand-Compliance (Brand-Reviewer):** Ein Brand-Manager prüft die Ausgabe gegen die Brand-Voice-Kodierungskomponenten: Stimmt der Ton überein? Werden Vokabularlisten-Begriffe verwendet und Anti-Listen-Begriffe vermieden?',
          '**Stufe 3 — Endschliff (Redakteur):** Ein Redakteur prüft Fluss, Übergänge, Lesbarkeit und CTA-Effektivität.',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'Qualitäts-Scoring-Checkliste für Content-Prompts',
        content: [
          '**Eine 5-Punkte-Qualitäts-Scoring-Checkliste über 10 Testläufe gibt Ihnen eine statistische Schwelle für die Entscheidung, ob ein Content-Prompt an Ihr Team deployt werden soll.**',
        ],
        items: [
          '**Aufgabe erfüllt (0–2):** Beantwortet die Ausgabe den Brief vollständig mit allen angeforderten Abschnitten?',
          '**Formatkonformität (0–2):** Entspricht die Ausgabe der angegebenen Struktur — korrekte Überschriftenebenen, Wortzahl innerhalb ±15% des Ziels?',
          '**Brand-Voice-Übereinstimmung (0–2):** Verwendet die Ausgabe die Ton-Descriptors und Vokabularlisten-Begriffe und vermeidet Anti-Listen-Begriffe?',
          '**Faktgenauigkeit (0–2):** Sind alle Faktenbehauptungen in der Ausgabe überprüfbar und korrekt?',
          '**CTA/Zielausrichtung (0–2):** Enthält die Ausgabe den erforderlichen Call-to-Action und führt der Inhalt auf das formulierte Ziel hin?',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Deployment-Schwelle',
            text: 'Deployen Sie den Prompt, wenn der Durchschnittsscore über alle 5 Kriterien über 10 Testläufe 1,5 oder höher (von 2,0) beträgt.',
          },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    title: "Prompt Engineering pour les équipes contenu : templates, flux de validation et contrôles qualité",
    seoTitle: "Prompt Engineering pour équipes contenu : templates et révisions",
    metaDescription: "Prompt engineering pour équipes contenu : encodage de la voix de marque, 5 templates réutilisables (blog, social, résumé, SEO meta, email), workflow de révision éditoriale et checklist de scoring qualité.",
    ogDescription: "Guide PE équipes contenu : encoder la voix de marque dans les prompts, 5 templates réutilisables, workflow de révision éditoriale et scoring qualité.",
    twitterDescription: "PE pour équipes contenu : encodage voix de marque, 5 templates, flux de révision éditorial, checklist qualité.",
    intro: "Les équipes contenu qui adoptent le prompt engineering réduisent leurs cycles de révision — non pas en acceptant une qualité inférieure, mais en encodant les exigences de qualité directement dans leurs prompts avant la génération.",
    leadAnswerBlock: "**Les équipes contenu réduisent les cycles de révision en encodant les exigences de sortie — ton, format, nombre de mots et contraintes de marque — directement dans leurs prompts.** L'échec PE le plus courant des équipes contenu est de laisser les critères qualité implicites puis de les vérifier manuellement après coup.",
    publishDate: '2026-05-02',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermédiaire',
    primaryTerm: 'Prompt Engineering pour équipes contenu',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-content-teams?lang=fr',
      headline: "Prompt Engineering pour les équipes contenu : templates, flux de validation et contrôles qualité",
      description: "Comment les équipes contenu encodent la voix de marque, construisent des templates réutilisables pour 5 types de contenu, opèrent des workflows de révision éditoriale et évaluent la qualité des prompts.",
      datePublished: '2026-05-02',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams?lang=fr', width: 1200, height: 630 },
      keywords: ['prompt engineering', 'équipes contenu', 'voix de marque', 'templates contenu', 'workflow éditorial'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Comment les équipes contenu réduisent-elles les cycles de révision avec le prompt engineering ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les équipes contenu réduisent les cycles de révision en encodant les critères qualité — ton, format, nombre de mots, vocabulaire de marque et listes d'exclusion — directement dans le prompt avant la génération.",
          },
        },
        {
          '@type': 'Question',
          name: "Qu'est-ce que le framework CRAFT et quand les équipes contenu doivent-elles l'utiliser ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CRAFT signifie Contexte, Rôle, Action, Format et Ton. C'est un framework structuré adapté au travail créatif et contenu car il organise les cinq dimensions les plus pertinentes pour les sorties contenu.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien d'exemples conformes à la marque faut-il dans un prompt de voix de marque ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Incluez 2 à 3 exemples de contenu approuvés directement dans le prompt. Moins de 2 donne au modèle un signal de motif insuffisant. Plus de 3 peut diluer la fenêtre de contexte disponible pour la tâche réelle.",
          },
        },
        {
          '@type': 'Question',
          name: "Quand une équipe contenu peut-elle ignorer l'étape de vérification de l'exactitude factuelle ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Ignorez l'étape de vérification factuelle uniquement pour le contenu à faible enjeu sans affirmations factuelles — légendes social media, CTAs courts ou options de lignes d'objet. Tout contenu avec des affirmations sur des produits ou des performances nécessite une vérification factuelle.",
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Points clés',
        isTldr: true,
        items: [
          "Encodez les exigences de sortie — ton, format, nombre de mots et contraintes de marque — directement dans le prompt, pas comme critères de révision post-génération.",
          "L'encodage de la voix de marque nécessite 4 composants : descripteur de ton (3 adjectifs), liste de vocabulaire (5–10 termes de marque), liste d'exclusion (5–10 mots à éviter) et 2–3 exemples de référence.",
          "Utilisez le framework CRAFT (Contexte, Rôle, Action, Format, Ton) comme base pour tous les prompts contenu.",
          "Un processus de révision éditoriale en 3 étapes (exactitude factuelle → conformité marque → polish final) s'applique aux articles publiés. Ignorez l'étape 1 pour le contenu à faible enjeu.",
          "Déployez un prompt uniquement s'il atteint un score qualité moyen de 1,5 ou plus (sur une échelle 0–2 par critère) sur 10 tests.",
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: "Qu'est-ce qui distingue le prompting des équipes contenu ?",
        content: [
          "**Le prompting des équipes contenu diffère du prompting des développeurs parce que les critères qualité sont subjectifs, multi-parties prenantes et dépendants du canal.** Trois défis spécifiques aux équipes contenu :",
        ],
        items: [
          "**La voix de marque est difficile à spécifier précisément :** Des instructions génériques comme «écris sur un ton amical» sont trop vagues pour des sorties cohérentes. Un encodage efficace requiert des adjectifs spécifiques, une liste de vocabulaire et des exemples de référence.",
          "**La longueur et le format varient selon le canal :** Un brouillon de blog nécessite une structure H1+H2 et 800–1200 mots. Un post LinkedIn nécessite 150–300 mots. Chaque canal a besoin d'un template spécifique.",
          "**Les workflows de révision impliquent plusieurs parties prenantes :** La révision contenu comprend typiquement un auteur (exactitude factuelle), un responsable marque (conformité marque) et un éditeur (polish final).",
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: "Comment encoder la voix de marque dans un prompt",
        content: [
          "**L'encodage de la voix de marque nécessite 4 composants dans le prompt : descripteur de ton, liste de vocabulaire, liste d'exclusion et exemples de référence.**",
        ],
        items: [
          "**Descripteur de ton :** 3 adjectifs de votre charte de style décrivant la personnalité de la marque (ex. «direct, pratique, confiant»).",
          "**Liste de vocabulaire :** 5–10 termes spécifiques à la marque à utiliser — noms de produits, verbes préférés, phrases caractéristiques.",
          "**Liste d'exclusion :** 5–10 mots ou expressions à éviter — jargon d'entreprise, superlatifs, clichés.",
          "**Exemples de référence :** 2–3 exemples de contenu approuvés collés directement dans le prompt pour donner au modèle un motif concret à reproduire.",
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 templates de prompts contenu réutilisables',
        content: [
          "**Cinq types de contenu représentent la majorité des productions des équipes contenu : brouillons de blog, posts sociaux, résumés, balises SEO meta et emails.**",
        ],
        numberedItems: [
          "Brouillon de blog : role=stratège contenu, brief=[sujet+audience+angle], format=[H1+3 H2s+conclusion], word_count=[cible], brand_voice=[3 adjectifs de ton], exemples_ton=[2 samples approuvés]",
          "Post social : role=responsable social media, platform=[LinkedIn/X/Instagram], topic=[brief], character_limit=[limite plateforme], cta=[action souhaitée], brand_voice=[3 adjectifs de ton]",
          "Résumé contenu : role=éditeur, source=[coller contenu ici], output=[résumé 3 points + version longueur tweet sous 280 caractères], audience=[rôle lecteur], reading_level=[niveau cible]",
          "SEO Meta : role=rédacteur SEO, page_topic=[sujet], primary_keyword=[mot-clé], title_max=60 caractères, description_max=155 caractères, inclure_keyword_dans=[titre+description]",
          "Email : role=rédacteur email, objective=[objectif de conversion], audience=[segment], subject_line_options=[3 options], body_structure=[accroche+valeur+cta], word_count=[moins de 150 mots pour le corps]",
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: "Workflow de révision éditoriale pour le contenu généré par IA",
        content: [
          "**Un processus de révision éditoriale en 3 étapes applique des standards qualité cohérents au contenu généré par IA sans que chaque réviseur doive définir ses propres critères.**",
        ],
        items: [
          "**Étape 1 — Exactitude factuelle (auteur) :** L'auteur du brief vérifie l'exactitude factuelle : toutes les affirmations produits sont-elles exactes ? Les statistiques sont-elles réelles et correctement attribuées ?",
          "**Étape 2 — Conformité marque (responsable marque) :** Un responsable marque vérifie la sortie par rapport aux composants d'encodage de la voix de marque.",
          "**Étape 3 — Polish final (éditeur) :** Un éditeur vérifie le flux, les transitions, la lisibilité et l'efficacité du CTA.",
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: "Checklist de scoring qualité pour les prompts contenu",
        content: [
          "**Une checklist de scoring qualité en 5 points appliquée sur 10 tests donne un seuil statistique pour décider si un prompt contenu est prêt pour le déploiement en équipe.**",
        ],
        items: [
          "**Tâche accomplie (0–2) :** La sortie répond-elle au brief, incluant toutes les sections et angles demandés ?",
          "**Conformité au format (0–2) :** La sortie correspond-elle à la structure spécifiée — niveaux de titres corrects, nombre de mots dans ±15% de la cible ?",
          "**Correspondance voix de marque (0–2) :** La sortie utilise-t-elle les descripteurs de ton et les termes de la liste de vocabulaire, et évite-t-elle les termes de la liste d'exclusion ?",
          "**Exactitude factuelle (0–2) :** Toutes les affirmations factuelles sont-elles vérifiables et exactes ?",
          "**Alignement CTA/objectif (0–2) :** La sortie inclut-elle le call to action requis et le contenu mène-t-il vers l'objectif déclaré ?",
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Les équipes contenu réduisent les cycles d\'examen de 60% en encodant les critères qualité — ton, format, nombre de mots, vocabulaire de marque — directement dans les prompts avant la génération. La structure CRAFT (Contexte, Rôle, Action, Format, Ton) est la base de tous les prompts contenu. L\'encodage de la voix de marque requiert 4 composants : 3 adjectifs de ton, 5–10 termes de vocabulaire, 5–10 mots d\'exclusion, 2–3 exemples approuvés. Un processus de révision éditoriale en 3 étapes (exactitude factuelle → conformité marque → polish final) applique des standards cohérents. Déployez un prompt uniquement s\'il atteint un score qualité moyen de 1,5+ (sur une échelle 0–2 par critère) sur 10 tests.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: "Comment les équipes contenu réduisent-elles les cycles d'examen avec le prompt engineering ?", a: "Les équipes contenu réduisent les cycles d'examen en encodant les critères qualité — ton, format, nombre de mots, vocabulaire de marque et listes d'exclusion — directement dans le prompt avant la génération." },
          { q: "Qu'est-ce que le framework CRAFT et quand les équipes contenu doivent-elles l'utiliser ?", a: "CRAFT signifie Contexte, Rôle, Action, Format et Ton. C'est un framework structuré adapté au travail créatif et contenu car il organise les cinq dimensions les plus pertinentes pour les sorties contenu." },
          { q: "Combien d'exemples conformes à la marque faut-il dans un prompt de voix de marque ?", a: "Incluez 2 à 3 exemples de contenu approuvés directement dans le prompt. Moins de 2 donne au modèle un signal de motif insuffisant. Plus de 3 peut diluer la fenêtre de contexte disponible pour la tâche réelle." },
          { q: "Quand une équipe contenu peut-elle ignorer l'étape de vérification de l'exactitude factuelle ?", a: "Ignorez l'étape de vérification factuelle uniquement pour le contenu à faible enjeu sans affirmations factuelles — légendes social media, CTAs courts ou options de lignes d'objet. Tout contenu avec des affirmations sur des produits ou des performances nécessite une vérification factuelle." },
          { q: "Comment testez-vous un prompt contenu pour la cohérence sur plusieurs modèles ?", a: "Testez le même template sur 2–3 modèles (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Flash) avec 10+ tests chacun. Utilisez la rubrique de scoring qualité en 5 points pour évaluer la cohérence. Si tous les modèles marquent 1,5+, le template est portable." },
          { q: "Quel est le seuil de déploiement pour un prompt contenu ?", a: "Déployez le prompt si le score moyen sur tous les 5 critères (tâche accomplte, conformité format, correspondance voix de marque, exactitude factuelle, alignement CTA) est 1,5 ou supérieur (sur une échelle 0–2) sur 10 tests." },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Lectures recommandées',
        items: [
          { title: 'Framework CRAFT pour équipes : prompting structuré vs ad-hoc', url: '/prompt-engineering/prompt-framework-for-teams?lang=fr' },
          { title: 'Tests de prompts et validation : suites de tests automatisées pour LLM', url: '/prompt-engineering/prompt-testing-validation?lang=fr' },
          { title: 'Branding en LLM-Prompts : encoder voix, ton et terminologie', url: '/prompt-engineering/brand-voice-llm-prompts?lang=fr' },
          { title: 'Workflows éditoriaux avec IA : contrôles qualité et conformité', url: '/prompt-engineering/editorial-workflow-ai?lang=fr' },
          { title: 'RGPD et contenu IA : confidentialité en texte automatisé', url: '/prompt-engineering/rgpd-ai-content?lang=fr' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          { title: 'PromptQuorum : outil de comparaison multi-modèle', url: 'https://www.promptquorum.com/features' },
          { title: 'Framework CRAFT', url: 'https://www.craftframework.dev/' },
          { title: 'Ressources éditorielles : HubSpot, Sprout Social guidelines', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Engineering für Content-Teams: Templates, Review-Flows und Qualitätsprüfungen',
    seoTitle: 'Prompt Engineering für Content-Teams: Templates & Reviews',
    metaDescription: 'Prompt Engineering für Content-Teams: Brand-Voice-Kodierung, 5 wiederverwendbare Templates (Blog, Social Media, Zusammenfassung, SEO-Meta, E-Mail), Editorial-Review-Workflow und Qualitäts-Scoring-Checkliste.',
    ogDescription: 'Content-Team PE Anleitung: Brand-Voice-Kodierung in Prompts, 5 wiederverwendbare Templates, Editorial-Review-Workflow, Qualitäts-Scoring-Checkliste.',
    twitterDescription: 'PE für Content-Teams: Brand-Voice-Kodierung, 5 Templates, Editorial-Review-Flow, Qualitäts-Scoring-Checkliste. Reduzieren Sie Review-Zyklen um 60%.',
    intro: 'Content-Teams, die Prompt Engineering einsetzen, reduzieren Review-Zyklen — nicht durch Akzeptanz minderwertiger KI-Ausgaben, sondern durch direkte Kodierung von Qualitätsanforderungen in ihre Prompts vor der Generierung. Diese Anleitung behandelt, wie Sie Brand-Voice spezifizieren, welche Templates standardisieren und wie Sie Prompt-Qualität systematisch bewerten.',
    leadAnswerBlock: '**Content-Teams reduzieren Review-Zyklen durch Kodierung von Ausgabeanforderungen — Ton, Format, Zeichenzahl und Brand-Zwänge — direkt in ihren Prompts.** Der häufigste Fehler bei Content-Team PE ist, Qualitätskriterien implizit zu lassen und sie dann manuell nach der Generierung zu überprüfen.',
    quickFacts: [
      'Content-Teams, die Qualitätskriterien in Prompts kodieren, reduzieren Review-Zyklen um 60% gegenüber Teams, die Kriteria manuell anwenden',
      'Brand-Voice-Kodierung erfordert 4 Komponenten: Ton-Deskriptoren (3 Adjektive), Vokabular-Liste (5–10 Begriffe), Ausschlussliste (Wörter zu vermeiden), 2–3 Referenzbeispiele',
      'Verwenden Sie das CRAFT-Framework (Context, Role, Action, Format, Tone) als Basis für alle Content-Prompts',
      'Verschiedene Content-Kanäle benötigen verschiedene Prompt-Templates: Blog (H1/H2-Struktur, 800–1200 Wörter), LinkedIn (150–300 Wörter), E-Mail (Betreff + Hook + Body + CTA unter 150 Wörtern)',
      'Editorial-Review hat 3 Stufen: Faktische Richtigkeit (bei unwichtigen Inhalten überspringen), Brand-Compliance, Finale Überarbeitung',
      'Nur deployen, wenn ein Prompt im Durchschnitt 1,5+ Punkte auf einer 0–2-Skala pro Kriterium über 10 Test-Läufe erreicht',
    ],
    toc: [
      { label: 'Was macht Content-Team-Prompting anders?', anchor: 'content-team-challenges' },
      { label: 'Wie Sie Brand-Voice in einem Prompt kodieren', anchor: 'brand-voice-encoding' },
      { label: '5 wiederverwendbare Content-Prompt-Templates', anchor: 'five-templates' },
      { label: 'Editorial-Review-Workflow für KI-generierte Inhalte', anchor: 'review-workflow' },
      { label: 'Qualitäts-Scoring-Checkliste für Content-Prompts', anchor: 'quality-scoring' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Ressourcen', anchor: 'related-reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    publishDate: '2026-05-02',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Mittelstufe',
    primaryTerm: 'Prompt Engineering für Content-Teams',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-content-teams?lang=de',
      headline: 'Prompt Engineering für Content-Teams: Templates, Review-Flows und Qualitätsprüfungen',
      description: 'Wie Content-Teams Brand-Voice kodieren, wiederverwendbare Prompt-Templates für 5 Content-Typen erstellen und systematisch Quality Scoring durchführen.',
      datePublished: '2026-05-02',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams?lang=de', width: 1200, height: 630 },
      keywords: ['Prompt Engineering', 'Content-Teams', 'Brand-Voice', 'Content-Templates', 'Editorial-Workflow', 'Quality-Scoring'],
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Content Marketing' },
        { '@type': 'Thing', name: 'Editorial Workflow' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie reduzieren Content-Teams KI-Review-Zyklen mit Prompt Engineering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content-Teams reduzieren Review-Zyklen durch Kodierung von Qualitätskriterien — Ton, Format, Zeichenzahl, Brand-Vokabular und Ausschlusslisten — direkt im Prompt vor der Generierung. Wenn die Ausgabeanforderungen explizit sind, kommt KI-generierter Content näher am Ziel an und erfordert weniger Überarbeitungsrunden.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist das CRAFT-Framework und wann sollten Content-Teams es verwenden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRAFT steht für Context, Role, Action, Format und Tone. Es ist ein strukturiertes Prompt-Framework, das sich für kreative und Content-Arbeit eignet, da es die fünf Dimensionen organisiert, die für Content-Ausgaben am relevantesten sind. Verwenden Sie es als Basisstruktur für jeden Content-Prompt, der Brand-Voice, Format-Anforderungen oder Multi-Stakeholder-Review beinhaltet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viele Brand-Beispiele brauche ich in einem Brand-Voice-Prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fügen Sie 2–3 genehmigte Content-Beispiele in den Prompt ein. Weniger als 2 gibt dem Modell unzureichendes Muster-Signal. Mehr als 3 kann den verfügbaren Context-Window aufbrauchen. Die Beispiele sollten den Zielkanal und Content-Typ repräsentieren — verwenden Sie kein LinkedIn-Beispiel für einen E-Mail-Brief.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wann sollte ein Content-Team die Stufe der faktischen Genauigkeit überspringen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Überspringen Sie die Stufe der faktischen Genauigkeit nur bei Low-Stakes-Content ohne faktische Ansprüche — Social-Media-Captions zu Veranstaltungen, kurze CTAs oder Format-only Ausgaben wie Subject-Line-Optionen. Jeder Content, der Ansprüche zu Produkten, Preisgestaltung, Leistung oder Dritten macht, benötigt vor Veröffentlichung eine faktische Überprüfung.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie richte ich ein Content-Template auf, das konsistent über mehrere Modelle hinweg funktioniert?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Testen Sie dasselbe Template auf 2–3 Modellen (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Flash) mit jeweils 10+ Test-Läufen. Verwenden Sie die 5-Punkte-Quality-Scoring-Rubrik zur Bewertung der Konsistenz. Wenn alle Modelle 1,5+ Punkte erzielen, ist das Template portierbar. Wenn ein Modell unter 1,5 fällt, überarbeiten Sie den Prompt statt eine modellspezifische Version anzunehmen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Deployment-Schwellenwert für einen Content-Prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stellen Sie den Prompt ein, wenn der Durchschnittswert über alle 5 Kriterien (Aufgabe abgeschlossen, Format-Compliance, Brand-Voice-Match, Faktische Richtigkeit, CTA-Ausrichtung) 1,5 oder höher (auf einer 0–2-Skala) über 10 Test-Läufe erreicht. Ein Wert unter 1,5 zeigt zu viele Teil- oder fehlgeschlagene Ausgaben für produktiven Einsatz ohne Review-Overhead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche zusätzlichen Anforderungen gibt es für Content-Teams in Deutschland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deutsche Content-Teams müssen bei der KI-Verwendung DSGVO-Bestimmungen beachten, insbesondere bezüglich Datenverarbeitung und Speicherung. Stellen Sie sicher, dass die verwendeten KI-Modelle und Plattformen die lokalen Datenschutzgesetze und BSI-Grundschutz-Anforderungen erfüllen. Dokumentieren Sie Quality-Scoring-Ergebnisse für Audit-Zwecke.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie skalieren Content-Teams Prompt Engineering in größeren Organisationen (50+ Mitarbeitern)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Erstellen Sie ein zentrales Prompt-Template-Verzeichnis mit versionierter Dokumentation. Definieren Sie standardisierte Quality-Scoring-Prozesse und Approval-Workflows (Autor → Brand-Manager → Editor). Implementieren Sie Mitarbeiterschulungen zu CRAFT-Framework und Brand-Voice-Kodierung. Verwenden Sie ein Content-Managementsystem, um genehmigte Templates zu speichern und zu verteilen.',
          },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Content-Teams reduzieren Review-Zyklen um 60%, indem sie Qualitätskriterien — Ton, Format, Zeichenzahl, Brand-Vokabular, Ausschlusslisten — direkt in Prompts kodieren, nicht als nachträgliche Überprüfungskriterien. Die CRAFT-Struktur (Context, Role, Action, Format, Tone) bildet die Grundlage aller Content-Prompts. Brand-Voice-Kodierung erfordert 4 Komponenten: 3 Ton-Adjektive, 5–10 Vokabular-Begriffe, 5–10 Ausschlusswörter, 2–3 genehmigte Beispiele. Ein 3-stufiger Editorial-Review-Prozess (Faktische Richtigkeit → Brand-Compliance → Finale Überarbeitung) wendet konsistente Qualitätsstandards an. Deployen Sie einen Prompt nur, wenn er über 10 Test-Läufe im Durchschnitt 1,5+ Punkte (0–2-Skala) pro Kriterium erreicht. Beachten Sie bei Content in Deutschland zusätzlich DSGVO- und BSI-Grundschutz-Anforderungen sowie Dokumentationspflichten.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie reduzieren Content-Teams KI-Review-Zyklen mit Prompt Engineering?', a: 'Content-Teams reduzieren Review-Zyklen durch Kodierung von Qualitätskriterien — Ton, Format, Zeichenzahl, Brand-Vokabular und Ausschlusslisten — direkt im Prompt vor der Generierung. Wenn die Ausgabeanforderungen explizit sind, kommt KI-generierter Content näher am Ziel an und erfordert weniger Überarbeitungsrunden.' },
          { q: 'Was ist das CRAFT-Framework und wann sollten Content-Teams es verwenden?', a: 'CRAFT steht für Context, Role, Action, Format und Tone. Es ist ein strukturiertes Prompt-Framework, das sich für kreative und Content-Arbeit eignet, da es die fünf Dimensionen organisiert, die für Content-Ausgaben am relevantesten sind. Verwenden Sie es als Basisstruktur für jeden Content-Prompt, der Brand-Voice, Format-Anforderungen oder Multi-Stakeholder-Review beinhaltet.' },
          { q: 'Wie viele Brand-Beispiele brauche ich in einem Brand-Voice-Prompt?', a: 'Fügen Sie 2–3 genehmigte Content-Beispiele in den Prompt ein. Weniger als 2 gibt dem Modell unzureichendes Muster-Signal. Mehr als 3 kann den verfügbaren Context-Window aufbrauchen. Die Beispiele sollten den Zielkanal und Content-Typ repräsentieren — verwenden Sie kein LinkedIn-Beispiel für einen E-Mail-Brief.' },
          { q: 'Wann sollte ein Content-Team die Stufe der faktischen Genauigkeit überspringen?', a: 'Überspringen Sie die Stufe der faktischen Genauigkeit nur bei Low-Stakes-Content ohne faktische Ansprüche — Social-Media-Captions zu Veranstaltungen, kurze CTAs oder Format-only Ausgaben wie Subject-Line-Optionen. Jeder Content, der Ansprüche zu Produkten, Preisgestaltung, Leistung oder Dritten macht, benötigt vor Veröffentlichung eine faktische Überprüfung.' },
          { q: 'Wie richte ich ein Content-Template auf, das konsistent über mehrere Modelle hinweg funktioniert?', a: 'Testen Sie dasselbe Template auf 2–3 Modellen (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Flash) mit jeweils 10+ Test-Läufen. Verwenden Sie die 5-Punkte-Quality-Scoring-Rubrik zur Bewertung der Konsistenz. Wenn alle Modelle 1,5+ Punkte erzielen, ist das Template portierbar. Wenn ein Modell unter 1,5 fällt, überarbeiten Sie den Prompt statt eine modellspezifische Version anzunehmen.' },
          { q: 'Was ist der Deployment-Schwellenwert für einen Content-Prompt?', a: 'Stellen Sie den Prompt ein, wenn der Durchschnittswert über alle 5 Kriterien (Aufgabe abgeschlossen, Format-Compliance, Brand-Voice-Match, Faktische Richtigkeit, CTA-Ausrichtung) 1,5 oder höher (auf einer 0–2-Skala) über 10 Test-Läufe erreicht. Ein Wert unter 1,5 zeigt zu viele Teil- oder fehlgeschlagene Ausgaben für produktiven Einsatz ohne Review-Overhead.' },
          { q: 'Welche zusätzlichen Anforderungen gibt es für Content-Teams in Deutschland?', a: 'Deutsche Content-Teams müssen bei der KI-Verwendung DSGVO-Bestimmungen beachten, insbesondere bezüglich Datenverarbeitung und Speicherung. Stellen Sie sicher, dass die verwendeten KI-Modelle und Plattformen die lokalen Datenschutzgesetze und BSI-Grundschutz-Anforderungen erfüllen. Dokumentieren Sie Quality-Scoring-Ergebnisse für Audit-Zwecke.' },
          { q: 'Wie skalieren Content-Teams Prompt Engineering in größeren Organisationen (50+ Mitarbeitern)?', a: 'Erstellen Sie ein zentrales Prompt-Template-Verzeichnis mit versionierter Dokumentation. Definieren Sie standardisierte Quality-Scoring-Prozesse und Approval-Workflows (Autor → Brand-Manager → Editor). Implementieren Sie Mitarbeiterschulungen zu CRAFT-Framework und Brand-Voice-Kodierung. Verwenden Sie ein Content-Managementsystem, um genehmigte Templates zu speichern und zu verteilen.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          { title: 'CRAFT-Framework für Teams: Strukturiert vs. Ad-hoc Prompting', url: '/prompt-engineering/prompt-framework-for-teams?lang=de' },
          { title: 'Prompt Testing und Validierung: Automatisierte Test-Suites für LLMs', url: '/prompt-engineering/prompt-testing-validation?lang=de' },
          { title: 'Branding in LLM-Prompts: Voice, Tone und Terminologie kodieren', url: '/prompt-engineering/brand-voice-llm-prompts?lang=de' },
          { title: 'Editorial Workflows mit KI: Qualitätsprüfungen und Compliance', url: '/prompt-engineering/editorial-workflow-ai?lang=de' },
          { title: 'DSGVO und KI Content: Datenschutz bei automatisierter Texterstellung', url: '/prompt-engineering/dsgvo-ai-content?lang=de' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          { title: 'PromptQuorum: Multi-Modell Prompt-Vergleichstool', url: 'https://www.promptquorum.com/features' },
          { title: 'CRAFT Framework Anleitung', url: 'https://www.craftframework.dev/' },
          { title: 'Content-Team Best Practices: HubSpot, Sprout Social Editorial Guidelines', url: 'https://www.hubspot.com/' },
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        isTldr: true,
        items: [
          'Kodieren Sie Ausgabeanforderungen — Ton, Format, Zeichenzahl und Brand-Zwänge — direkt in den Prompt vor der Generierung, nicht als Post-Generierungs-Überprüfungskriterien.',
          'Brand-Voice-Kodierung erfordert 4 Komponenten: Ton-Deskriptor (3 Adjektive), Vokabular-Liste (5–10 Brand-Begriffe), Ausschlussliste (5–10 zu vermeidende Wörter), 2–3 Referenzbeispiele.',
          'Verwenden Sie das CRAFT-Framework (Context, Role, Action, Format, Tone) als Basis für alle Content-Prompts — es organisiert die 5 Dimensionen, die für Content-Ausgaben am relevantesten sind.',
          'Ein 3-stufiger Editorial-Review (Faktische Richtigkeit → Brand-Compliance → Finale Überarbeitung) gilt für veröffentlichte Artikel. Überspringen Sie Stufe 1 bei Low-Stakes-Content wie Social Posts.',
          'Stellen Sie einen Prompt nur ein, wenn er über 10 Test-Läufe einen durchschnittlichen Quality-Score von 1,5 oder höher (0–2-Skala pro Kriterium) erreicht.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'Was macht Content-Team-Prompting anders?',
        content: [
          '**Content-Team-Prompting unterscheidet sich vom Developer-Prompting, weil Qualitätskriterien subjektiv, Multi-Stakeholder und kanal-abhängig sind.** Ein Entwickler testet einen Prompt gegen ein exaktes Ausgabeformat. Ein Content-Team testet einen Prompt gegen Brand-Guidelines, Editorial-Standards und Publikumserwartungen — Kriterien, die explizit kodiert werden müssen oder sie werden nicht konsistent angewendet.',
          'Drei spezifische Herausforderungen beim Content-Team-Prompt-Engineering:',
        ],
        items: [
          '**Brand-Voice ist schwer präzise zu spezifizieren:** Generische Anweisungen wie „schreib in freundlichem Ton" sind zu vage für konsistente Ausgaben. Effektive Brand-Voice-Kodierung erfordert spezifische Adjektive aus dem Style-Guide, eine Vokabular-Liste bevorzugter Begriffe, eine Ausschlussliste zu vermeidender Wörter und Referenzbeispiele, die den Ziel-Ton im Kontext demonstrieren.',
          '**Ausgabelänge und Format variieren je nach Kanal:** Ein Blog-Entwurf erfordert H1 + H2 Struktur und 800–1200 Wörter. Ein LinkedIn-Post erfordert 150–300 Wörter und keine H-Tag-Struktur. Eine E-Mail erfordert Betreff, Hook, Body und CTA unter 150 Wörtern. Jeder Kanal braucht ein kanal-spezifisches Template — nicht einen generischen „schreib Content"-Prompt.',
          '**Review-Workflows beinhalten mehrere Stakeholder:** Content-Review beinhaltet typischerweise einen Autor (Faktische Richtigkeit), einen Brand-Manager (Brand-Compliance) und einen Editor (Finale Überarbeitung). Prompts, die Qualitätskriterien implizit lassen, zwingen alle drei Reviewer, ihre eigenen Standards anzuwenden — führt zu inkonsistentem Feedback und längeren Überarbeitungszyklen.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Framework-Entscheidung',
            text: 'Verwenden Sie das CRAFT-Framework (Context, Role, Action, Format, Tone) als Basis für alle Content-Prompts. CRAFT ist speziell für kreative und Content-Arbeit konzipiert, wo Role-Definition und Output-Format genauso wichtig sind wie die Aufgabenbeschreibung.',
          },
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'Wie Sie Brand-Voice in einem Prompt kodieren',
        content: [
          '**Brand-Voice-Kodierung erfordert 4 Komponenten im Prompt: Ton-Deskriptor, Vokabular-Liste, Ausschlussliste und Referenzbeispiele.** Prompts, die alle 4 Komponenten enthalten, übertreffen konsistent Prompts, die sich nur auf Ton-Adjektive verlassen, wenn von menschlichen Reviewern evaluiert.',
          'Die 4 erforderlichen Komponenten:',
        ],
        items: [
          '**Ton-Deskriptor:** 3 Adjektive aus Ihrem Style-Guide, die die Brand-Persönlichkeit beschreiben (z.B. „direkt, praktisch, selbstbewusst").',
          '**Vokabular-Liste:** 5–10 Brand-spezifische Begriffe zu verwenden — Produktnamen, bevorzugte Verben, charakteristische Phrasen.',
          '**Ausschlussliste:** 5–10 Wörter oder Ausdrücke zu vermeiden — Unternehmens-Jargon, Superlative, Klischees.',
          '**Referenzbeispiele:** 2–3 genehmigte Content-Samples direkt in den Prompt eingefügt, um dem Modell ein konkretes Muster zum Reproduzieren zu geben (nicht abstrakte Beschreibung).',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 wiederverwendbare Content-Prompt-Templates',
        content: [
          '**Fünf Content-Typen stellen die Mehrheit der Content-Team-Produktion dar: Blog-Entwürfe, Social-Posts, Zusammenfassungen, SEO-Meta-Tags und E-Mails.**',
        ],
        numberedItems: [
          'Blog-Entwurf: role=Content-Stratege, brief=[Thema+Publikum+Winkel], format=[H1+3 H2s+Fazit], word_count=[Ziel], brand_voice=[3 Ton-Adjektive], tone_examples=[2 genehmigte Samples]',
          'Social Post: role=Social-Media-Manager, platform=[LinkedIn/X/Instagram], topic=[Brief], character_limit=[Plattform-Limit], cta=[Gewünschte Aktion], brand_voice=[3 Ton-Adjektive]',
          'Zusammenfassung: role=Editor, source=[Content hier einfügen], output=[3-Punkte-Executive-Summary + Tweet-Version unter 280 Zeichen], audience=[Leser-Rolle], reading_level=[Ziel-Level]',
          'SEO-Meta: role=SEO-Schreiber, page_topic=[Thema], primary_keyword=[Keyword], title_max=60 Zeichen, description_max=155 Zeichen, include_keyword_in=[Titel+Beschreibung]',
          'E-Mail: role=Email-Copywriter, objective=[Konversions-Ziel], audience=[Segment], subject_line_options=[3 Optionen], body_structure=[Hook+Wertangebot+CTA], word_count=[Body unter 150 Wörtern]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'Editorial-Review-Workflow für KI-generierte Inhalte',
        content: [
          '**Ein 3-stufiger Editorial-Review-Prozess wendet konsistente Qualitätsstandards auf KI-generierte Inhalte an, ohne dass jeder Reviewer seine eigenen Kriterien definieren muss.**',
        ],
        items: [
          '**Stufe 1 — Faktische Richtigkeit (Autor):** Der Brief-Autor überprüft die faktische Richtigkeit der Ausgabe: Sind alle Produktaussagen genau? Sind Statistiken real und korrekt zitiert?',
          '**Stufe 2 — Brand-Compliance (Brand-Manager):** Ein Brand-Manager überprüft die Ausgabe gegen die Brand-Voice-Kodierungskomponenten: Entspricht sie dem Ton-Deskriptor? Verwendet sie Vokabular-Liste-Begriffe und vermeidet Ausschlussliste-Begriffe?',
          '**Stufe 3 — Finale Überarbeitung (Editor):** Ein Editor überprüft den Fluss, Übergänge, Lesbarkeit und CTA-Effektivität.',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'Qualitäts-Scoring-Checkliste für Content-Prompts',
        content: [
          '**Eine 5-Punkte-Quality-Scoring-Checkliste, angewendet über 10 Tests, gibt einen statistischen Schwellenwert zur Entscheidung, ob ein Content-Prompt für Team-Deployment bereit ist.**',
        ],
        items: [
          '**Aufgabe abgeschlossen (0–2):** Antwortet die Ausgabe auf den Brief, mit allen angeforderten Abschnitten und Winkeln?',
          '**Format-Compliance (0–2):** Entspricht die Ausgabe der angegebenen Struktur — korrekte Überschriftenebenen, Wortanzahl innerhalb von ±15% des Ziels?',
          '**Brand-Voice-Match (0–2):** Verwendet die Ausgabe Ton-Deskriptoren und Vokabular-Liste-Begriffe und vermeidet Ausschlussliste-Begriffe?',
          '**Faktische Richtigkeit (0–2):** Sind alle faktischen Aussagen in der Ausgabe verifizierbar und korrekt?',
          '**CTA/Ziel-Ausrichtung (0–2):** Enthält die Ausgabe den erforderlichen Call-to-Action und führt der Content zum deklarierten Ziel?',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: 'コンテンツチームのためのプロンプトエンジニアリング：テンプレート、レビューフロー、品質チェック',
    seoTitle: 'コンテンツチームのプロンプトエンジニアリング：テンプレートとレビュー',
    metaDescription: 'コンテンツチームのプロンプトエンジニアリング：ブランドボイスのエンコード、5つの再利用可能なコンテンツテンプレート（ブログ、SNS、要約、SEOメタ、メール）、編集レビューワークフロー、品質スコアリングチェックリスト。',
    ogDescription: 'コンテンツチームPEガイド：ブランドボイスをプロンプトにエンコードする方法、5つの再利用可能なテンプレート、編集レビューワークフロー、品質スコアリング。',
    twitterDescription: 'コンテンツチームのPE：ブランドボイスエンコード、5つのテンプレート、編集レビューフロー、品質スコアリングチェックリスト。',
    intro: 'プロンプトエンジニアリングを採用するコンテンツチームは、低品質なAI出力を受け入れることなく、生成前に品質要件を直接プロンプトに組み込むことでレビューサイクルを削減します。',
    leadAnswerBlock: '**コンテンツチームは、トーン、フォーマット、文字数、ブランド制約などの出力要件をプロンプトに直接エンコードすることでレビューサイクルを削減します。** コンテンツチームに最も多いPEの失敗は、品質基準を暗黙的なままにし、事後に手動でレビューすることです。',
    publishDate: '2026-05-02',
    readTime: '8分で読める',
    educationalLevel: '中級',
    primaryTerm: 'コンテンツチームのプロンプトエンジニアリング',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-content-teams?lang=ja',
      headline: 'コンテンツチームのためのプロンプトエンジニアリング：テンプレート、レビューフロー、品質チェック',
      description: 'コンテンツチームがブランドボイスをエンコードし、5つのコンテンツタイプの再利用可能なプロンプトテンプレートを構築し、編集レビューワークフローを運営する方法。',
      datePublished: '2026-05-02',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams?lang=ja', width: 1200, height: 630 },
      keywords: ['プロンプトエンジニアリング', 'コンテンツチーム', 'ブランドボイス', 'コンテンツテンプレート', '編集ワークフロー'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'コンテンツチームはプロンプトエンジニアリングでAIレビューサイクルをどう削減しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'コンテンツチームは、品質基準（トーン、フォーマット、文字数、ブランドボキャブラリー、禁止リスト）を生成前にプロンプトに直接エンコードすることでレビューサイクルを削減します。',
          },
        },
        {
          '@type': 'Question',
          name: 'CRAFTフレームワークとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRAFTはContext（文脈）、Role（役割）、Action（行動）、Format（フォーマット）、Tone（トーン）の略です。コンテンツ出力に最も関連する5つの次元を整理する構造化されたプロンプトフレームワークです。',
          },
        },
        {
          '@type': 'Question',
          name: 'ブランドボイスプロンプトに何個のブランド準拠サンプルが必要ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '承認済みのコンテンツサンプルを2〜3個プロンプトに直接含めてください。2個未満ではモデルへのパターンシグナルが不十分です。3個を超えると実際のタスクに使えるコンテキストウィンドウが圧迫されます。',
          },
        },
        {
          '@type': 'Question',
          name: 'コンテンツチームはいつ事実確認レビューステージをスキップできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '事実的な主張を含まないリスクの低いコンテンツ（SNSキャプション、短いCTA、件名オプション）のみ事実確認ステージをスキップできます。製品、パフォーマンス、第三者に関する主張を含むコンテンツは事実確認が必要です。',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'まとめ',
        isTldr: true,
        items: [
          '出力要件（トーン、フォーマット、文字数、ブランド制約）を事後のレビュー基準としてではなく、プロンプトに直接エンコードします。',
          'ブランドボイスエンコードには4つの要素が必要です：トーンディスクリプター（3つの形容詞）、ボキャブラリーリスト（5〜10のブランド用語）、禁止リスト（5〜10の避けるべき言葉）、参照例2〜3個。',
          'CRAFTフレームワーク（Context、Role、Action、Format、Tone）をすべてのコンテンツプロンプトの基盤として使用します。',
          '3段階の編集レビュー（事実確認→ブランドコンプライアンス→最終磨き上げ）は公開記事に適用します。SNS投稿などリスクの低いコンテンツではステージ1をスキップします。',
          '10回のテスト実行で全5基準の平均スコアが1.5以上（0〜2スケール）の場合のみプロンプトをデプロイします。',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'コンテンツチームのプロンプティングが特別な理由は？',
        content: [
          '**コンテンツチームのプロンプティングが開発者のプロンプティングと異なるのは、品質基準が主観的で、複数のステークホルダーが関与し、チャネルに依存するためです。** コンテンツチームに特有の3つの課題：',
        ],
        items: [
          '**ブランドボイスを正確に指定することが難しい：** 「フレンドリーなトーンで書いて」のような一般的な指示は一貫した出力には漠然としすぎています。効果的なブランドボイスエンコードには、スタイルガイドからの特定の形容詞、ボキャブラリーリスト、参照例が必要です。',
          '**出力の長さとフォーマットはチャネルによって異なる：** ブログ記事のドラフトにはH1+H2の構造と800〜1200語が必要です。LinkedInの投稿には150〜300語が必要です。各チャネルにはチャネル固有のテンプレートが必要です。',
          '**レビューワークフローには複数のステークホルダーが関与する：** コンテンツレビューには通常、著者（事実確認）、ブランドレビュアー（ブランドコンプライアンス）、編集者（最終磨き上げ）が含まれます。',
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'プロンプトにブランドボイスをエンコードする方法',
        content: [
          '**ブランドボイスエンコードには、プロンプトに4つの要素が必要です：トーンディスクリプター、ボキャブラリーリスト、禁止リスト、参照例。**',
        ],
        items: [
          '**トーンディスクリプター：** スタイルガイドからブランドパーソナリティを表す3つの形容詞（例：「直接的、実践的、自信に満ちた」）。',
          '**ボキャブラリーリスト：** 使用するブランド固有の用語5〜10個 — 製品名、好みの動詞、特徴的なフレーズ。',
          '**禁止リスト：** 避けるべき言葉またはフレーズ5〜10個 — 企業ジャーゴン、最上級表現、クリシェ。',
          '**参照例：** 承認済みのコンテンツサンプル2〜3個をプロンプトに直接貼り付けます。抽象的な説明ではなく、モデルが一致させる具体的なパターンを提供します。',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5つの再利用可能なコンテンツプロンプトテンプレート',
        content: [
          '**コンテンツチームの出力の大部分を占める5つのコンテンツタイプ：ブログドラフト、SNS投稿、コンテンツ要約、SEOメタタグ、メール。** タイプごとに1つのテンプレートを標準化することで、タスクごとの即興が排除されます。',
        ],
        numberedItems: [
          'ブログドラフト：role=コンテンツストラテジスト、brief=[トピック+対象読者+アングル]、format=[H1+3 H2s+結論]、word_count=[目標]、brand_voice=[3つのトーン形容詞]、tone_examples=[2つの承認済みサンプル]',
          'SNS投稿：role=ソーシャルメディアマネージャー、platform=[LinkedIn/X/Instagram]、topic=[ブリーフ]、character_limit=[プラットフォーム制限]、cta=[望む行動]、brand_voice=[3つのトーン形容詞]',
          'コンテンツ要約：role=編集者、source=[ここにコンテンツを貼り付け]、output=[3箇条要約+280文字以内のツイート版]、audience=[読者の役割]、reading_level=[目標レベル]',
          'SEOメタ：role=SEOライター、page_topic=[トピック]、primary_keyword=[キーワード]、title_max=60文字、description_max=155文字、keyword_in=[タイトルと説明の両方]',
          'メール：role=メールコピーライター、objective=[コンバージョン目標]、audience=[セグメント]、subject_line_options=[3オプション]、body_structure=[フック+価値提案+CTA]、word_count=[本文150語以内]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'AI生成コンテンツの編集レビューワークフロー',
        content: [
          '**3段階の編集レビュープロセスは、各レビュアーが独自の基準を定義することなく、AI生成コンテンツに一貫した品質基準を適用します。**',
        ],
        items: [
          '**ステージ1 — 事実確認（著者）：** ブリーフを提出した人が事実の正確さを確認します：すべての製品主張は正確か？統計やデータポイントは実在し、適切に引用されているか？',
          '**ステージ2 — ブランドコンプライアンス（ブランドレビュアー）：** ブランドマネージャーがブランドボイスエンコード要素を確認します：トーンディスクリプターと一致しているか？禁止リストの言葉を避けているか？',
          '**ステージ3 — 最終磨き上げ（編集者）：** 編集者がフロー、移行、読みやすさ、CTAの効果を確認します。',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'コンテンツプロンプトの品質スコアリングチェックリスト',
        content: [
          '**10回のテスト実行に適用される5点品質スコアリングチェックリストにより、コンテンツプロンプトをチームにデプロイするかどうかの統計的な閾値が得られます。**',
        ],
        items: [
          '**タスク完了（0〜2）：** 出力はブリーフに答えているか？すべての要求されたセクションとアングルを含んでいるか？',
          '**フォーマットコンプライアンス（0〜2）：** 出力は指定された構造（正しい見出しレベル、目標の±15%以内の文字数）と一致しているか？',
          '**ブランドボイスの一致（0〜2）：** 出力はトーンディスクリプターとボキャブラリーリスト用語を使用し、禁止リスト用語を避けているか？',
          '**事実の正確性（0〜2）：** 出力のすべての事実的主張は検証可能で正確か？',
          '**CTA/目標の整合（0〜2）：** 出力は必要なコールトゥアクションを含み、コンテンツは述べられた目標に向かっているか？',
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'コンテンツチームは品質基準を生成前にプロンプトに直接エンコードすることで、レビューサイクルを60%削減します。CRAFT構造（Context、Role、Action、Format、Tone）がすべてのコンテンツプロンプトの基礎です。ブランドボイスエンコーディングには4つのコンポーネントが必要：3つの語調形容詞、5–10のボキャブラリー用語、5–10の除外語、2–3の承認済みサンプル。3段階のエディトリアルレビュー（事実正確性→ブランドコンプライアンス→最終磨き）が一貫性のある基準を適用します。プロンプトをデプロイするのは、10のテスト実行にわたってすべての5つの基準（タスク完了、フォーマットコンプライアンス、ブランドボイスマッチ、事実正確性、CTA/目標整合）で平均1.5以上（0–2スケール）のスコアを達成する場合のみ。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'コンテンツチームはプロンプトエンジニアリングでレビューサイクルをどのように削減しますか？', a: 'コンテンツチームは品質基準—語調、フォーマット、文字数、ブランドボキャブラリー、除外リスト—をプロンプトに直接エンコードすることでレビューサイクルを削減します。' },
          { q: 'CRAFTフレームワークとは何ですか。コンテンツチームはいつそれを使用すべきですか？', a: 'CRAFTは Context、Role、Action、Format、Tone を表します。これはコンテンツ出力に最も関連のある5つの次元を整理するため、クリエイティブおよびコンテンツワーク向けの構造化フレームワークです。' },
          { q: 'ブランドボイスプロンプトに何個の承認済みサンプルが必要ですか？', a: '承認済みコンテンツサンプル2–3個をプロンプトに直接含めてください。2つ未満ではモデルにパターン信号が不十分です。3つ以上ではコンテキストウィンドウが稀薄になる可能性があります。' },
          { q: 'コンテンツチームは事実確認段階をスキップできますか？', a: 'ファクトチェック段階は、事実的主張を含まない低リスクコンテンツのみスキップしてください—ソーシャルキャプション、短いCTA、件名行オプション。製品またはパフォーマンスについての主張を含むコンテンツは公開前にファクトチェックが必要です。' },
          { q: 'コンテンツプロンプトを複数のモデルで一貫して機能するようテストしますか？', a: '2–3個のモデル（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Flash）で同じテンプレートをテストして、各々10回以上のテスト実行を行います。5点品質スコアリングルーブリックを使用して一貫性を評価します。' },
          { q: 'コンテンツプロンプトのデプロイメント閾値は何ですか？', a: 'すべての5つの基準で平均スコアが1.5以上（0–2スケール）を10回のテスト実行で達成する場合、プロンプトをデプロイします。1.5未満は生産用途に多すぎる部分的またはフェイル出力を示します。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          { title: 'チーム向けCRAFTフレームワーク：構造化 vs アドホックプロンプティング', url: '/prompt-engineering/prompt-framework-for-teams?lang=ja' },
          { title: 'プロンプト試験と検証：LLM自動テストスイート', url: '/prompt-engineering/prompt-testing-validation?lang=ja' },
          { title: 'LLMプロンプトでのブランディング：音声、語調、用語のエンコード', url: '/prompt-engineering/brand-voice-llm-prompts?lang=ja' },
          { title: 'AIによるエディトリアルワークフロー：品質チェックとコンプライアンス', url: '/prompt-engineering/editorial-workflow-ai?lang=ja' },
          { title: 'コンテンツ作成のための複数モデルテスト：モデル比較ガイド', url: '/prompt-engineering/multi-model-prompt-testing?lang=ja' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          { title: 'PromptQuorum：マルチモデル比較ツール', url: 'https://www.promptquorum.com/features' },
          { title: 'CRAFTフレームワーク', url: 'https://www.craftframework.dev/' },
          { title: 'コンテンツチームベストプラクティス：HubSpot、Sprout Social編集ガイドライン', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: '内容团队的提示词工程：模板、审核流程和质量检查',
    seoTitle: '内容团队提示词工程：模板与审核',
    metaDescription: '内容团队的提示词工程：品牌声音编码、5个可复用内容模板（博客、社交、摘要、SEO元标签、邮件）、编辑审核工作流和质量评分清单。',
    ogDescription: '内容团队PE指南：如何在提示词中编码品牌声音、5个可复用模板、编辑审核工作流和质量评分。',
    twitterDescription: '内容团队PE：品牌声音编码、5个模板、编辑审核流程、质量评分清单。',
    intro: '采用提示词工程的内容团队通过在生成前将质量要求直接编入提示词来减少审核周期，而不是接受低质量的AI输出。',
    leadAnswerBlock: '**内容团队通过将输出要求——语气、格式、字数和品牌约束——直接编入提示词来减少审核周期。** 内容团队最常见的PE失败是将质量标准隐含化，然后在事后手动审核。',
    publishDate: '2026-05-02',
    readTime: '8分钟阅读',
    educationalLevel: '中级',
    primaryTerm: '内容团队提示词工程',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-content-teams?lang=zh',
      headline: '内容团队的提示词工程：模板、审核流程和质量检查',
      description: '内容团队如何编码品牌声音、为5种内容类型构建可复用提示词模板、运营编辑审核工作流并系统评估提示词质量。',
      datePublished: '2026-05-02',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-content-teams?lang=zh', width: 1200, height: 630 },
      keywords: ['提示词工程', '内容团队', '品牌声音', '内容模板', '编辑工作流'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '内容团队如何通过提示词工程减少AI审核周期？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '内容团队通过在生成前将质量标准——语气、格式、字数、品牌词汇和禁用词列表——直接编入提示词来减少审核周期。',
          },
        },
        {
          '@type': 'Question',
          name: 'CRAFT框架是什么，内容团队何时应使用它？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRAFT代表Context（背景）、Role（角色）、Action（行动）、Format（格式）和Tone（语气）。这是一个适合创意和内容工作的结构化提示词框架，因为它组织了与内容输出最相关的五个维度。',
          },
        },
        {
          '@type': 'Question',
          name: '品牌声音提示词中需要多少个品牌合规示例？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '在提示词中直接包含2至3个已批准的内容样本。少于2个给模型的模式信号不足。超过3个可能稀释实际任务的可用上下文窗口。',
          },
        },
        {
          '@type': 'Question',
          name: '内容团队何时可以跳过事实准确性审核阶段？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '仅对不包含事实性主张的低风险内容跳过事实准确性阶段——社交媒体标题、短CTA或主题行选项。任何包含产品、性能或第三方主张的内容在发布前都需要事实核查。',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: '核心要点',
        isTldr: true,
        items: [
          '将输出要求（语气、格式、字数和品牌约束）直接编入提示词，而不是作为生成后的审核标准。',
          '品牌声音编码需要4个组成部分：语气描述符（3个形容词）、词汇列表（5-10个品牌术语）、禁用列表（5-10个避免的词）和2-3个参考示例。',
          '使用CRAFT框架（Context、Role、Action、Format、Tone）作为所有内容提示词的基础。',
          '3阶段编辑审核（事实准确性→品牌合规→最终润色）适用于发布文章。对社交帖子等低风险内容跳过第1阶段。',
          '只有当提示词在10次测试中所有5个标准的平均质量分数达到1.5或更高（0-2分制）时才部署。',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: '内容团队的提示词工程有何特别之处？',
        content: [
          '**内容团队的提示词工程与开发者提示词工程不同，因为质量标准是主观的、多方利益相关者的和渠道依赖的。** 内容团队提示词工程的3个特有挑战：',
        ],
        items: [
          '**品牌声音难以精确指定：** "用友好的语气写作"这样的一般性指示对于一致的输出来说太模糊了。有效的品牌声音编码需要风格指南中的具体形容词、词汇列表和参考示例。',
          '**输出长度和格式因渠道而异：** 博客草稿需要H1+H2结构和800-1200字。LinkedIn帖子需要150-300字。每个渠道需要特定渠道的模板。',
          '**审核工作流涉及多个利益相关者：** 内容审核通常涉及作者（事实准确性）、品牌审核员（品牌合规）和编辑（最终润色）。',
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: '如何在提示词中编码品牌声音',
        content: [
          '**品牌声音编码需要提示词中的4个组成部分：语气描述符、词汇列表、禁用列表和参考示例。** 包含所有4个组成部分的提示词在人工审阅者评估时持续优于仅依赖语气形容词的提示词。',
        ],
        items: [
          '**语气描述符：** 来自风格指南描述品牌个性的3个形容词（例如：「直接、实用、自信」）。',
          '**词汇列表：** 要使用的5-10个品牌特定术语——产品名称、首选动词、特征性短语。',
          '**禁用列表：** 要避免的5-10个词或短语——通常是企业术语、最高级、陈词滥调。',
          '**参考示例：** 将2-3个已批准的内容样本直接粘贴到提示词中，为模型提供具体的匹配模式而非抽象描述。',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5个可复用内容提示词模板',
        content: [
          '**五种内容类型占内容团队产出的大部分：博客草稿、社交帖子、内容摘要、SEO元标签和电子邮件。** 每种类型标准化一个模板可以消除每次任务的即兴创作。',
        ],
        numberedItems: [
          '博客草稿：role=内容策略师，brief=[主题+受众+角度]，format=[H1+3个H2+结论]，word_count=[目标]，brand_voice=[3个语气形容词]，tone_examples=[2个已批准样本]',
          '社交帖子：role=社交媒体经理，platform=[LinkedIn/X/Instagram]，topic=[简介]，character_limit=[平台限制]，cta=[期望行动]，brand_voice=[3个语气形容词]',
          '内容摘要：role=编辑，source=[在此粘贴内容]，output=[3要点执行摘要+280字以内推文版本]，audience=[读者角色]，reading_level=[目标级别]',
          'SEO元标签：role=SEO写手，page_topic=[主题]，primary_keyword=[关键词]，title_max=60字符，description_max=155字符，include_keyword_in=[标题和描述]',
          '电子邮件：role=邮件文案写手，objective=[转化目标]，audience=[细分群体]，subject_line_options=[3个选项]，body_structure=[钩子+价值主张+CTA]，word_count=[正文150字以内]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'AI生成内容的编辑审核工作流',
        content: [
          '**3阶段编辑审核流程为AI生成内容应用一致的质量标准，无需每位审核者定义自己的标准。**',
        ],
        items: [
          '**第1阶段——事实准确性（作者）：** 提交简介的人审核输出的事实正确性：所有产品主张是否准确？统计数据是否真实且正确引用？',
          '**第2阶段——品牌合规（品牌审核员）：** 品牌经理根据品牌声音编码组件检查输出：是否符合语气描述符？是否使用词汇列表术语并避免禁用列表术语？',
          '**第3阶段——最终润色（编辑）：** 编辑检查流畅度、过渡、可读性和CTA效果。',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: '内容提示词质量评分清单',
        content: [
          '**在10次测试中应用的5点质量评分清单为决定是否将内容提示词部署到团队提供统计阈值。**',
        ],
        items: [
          '**任务完成（0-2）：** 输出是否回答了简介？是否包含所有要求的部分和角度？',
          '**格式合规（0-2）：** 输出是否符合指定结构——正确的标题级别、字数在目标的±15%以内？',
          '**品牌声音匹配（0-2）：** 输出是否使用语气描述符和词汇列表术语，并避免禁用列表术语？',
          '**事实准确性（0-2）：** 输出中的所有事实性主张是否可验证且准确？',
          '**CTA/目标对齐（0-2）：** 输出是否包含所需的行动号召，内容是否引导向声明目标？',
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: '内容团队通过在生成前将质量标准——语气、格式、字数、品牌词汇——直接编码到提示词中，减少审核周期60%。CRAFT框架（Context、Role、Action、Format、Tone）是所有内容提示词的基础。品牌声音编码需要4个组件：3个语调形容词、5–10个词汇术语、5–10个禁用词、2–3个批准的样本。3阶段编辑审核流程（事实准确性→品牌合规→最终润色）应用一致的质量标准。仅在提示词在10次测试运行中所有5个标准（任务完成、格式合规、品牌声音匹配、事实准确性、CTA/目标对齐）的平均分数达到1.5或更高（0–2标度）时才部署提示词。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '内容团队如何通过提示词工程减少审核周期？', a: '内容团队通过将质量标准——语气、格式、字数、品牌词汇和禁用列表——直接编码到生成前的提示词中来减少审核周期。' },
          { q: '什么是CRAFT框架，内容团队何时应该使用它？', a: 'CRAFT代表Context、Role、Action、Format和Tone。它是为创意和内容工作设计的结构化框架，因为它组织对内容输出最相关的五个维度。' },
          { q: '品牌声音提示词中需要多少个获批样本？', a: '在提示词中直接包含2-3个获批内容样本。少于2个给模型不足的模式信号。超过3个可能会稀释上下文窗口。' },
          { q: '内容团队何时可以跳过事实准确性审核阶段？', a: '仅对不包含事实主张的低风险内容跳过事实检查阶段——社交媒体标题、短CTA或主题行选项。任何关于产品或性能的主张都需要发布前的事实检查。' },
          { q: '你如何测试内容提示词在多个模型中的一致性？', a: '在2-3个模型（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Flash）上测试相同的模板，每个10+次测试运行。使用5点质量评分标准评估一致性。' },
          { q: '内容提示词的部署阈值是什么？', a: '当所有5个标准（任务完成、格式合规、品牌声音匹配、事实准确性、CTA/目标对齐）的平均分数在10次测试运行中达到1.5或更高（0–2标度）时部署提示词。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '相关资料',
        items: [
          { title: '团队CRAFT框架：结构化与临时性提示词编制', url: '/prompt-engineering/prompt-framework-for-teams?lang=zh' },
          { title: '提示词测试和验证：LLM自动化测试套件', url: '/prompt-engineering/prompt-testing-validation?lang=zh' },
          { title: 'LLM提示词中的品牌：编码声音、语调和术语', url: '/prompt-engineering/brand-voice-llm-prompts?lang=zh' },
          { title: '使用AI的编辑工作流：质量检查和合规', url: '/prompt-engineering/editorial-workflow-ai?lang=zh' },
          { title: '多模型提示词测试：模型选择指南', url: '/prompt-engineering/multi-model-prompt-testing?lang=zh' },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          { title: 'PromptQuorum：多模型比较工具', url: 'https://www.promptquorum.com/features' },
          { title: 'CRAFT框架', url: 'https://www.craftframework.dev/' },
          { title: '内容团队最佳实践：HubSpot、Sprout Social编辑指南', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },
};
