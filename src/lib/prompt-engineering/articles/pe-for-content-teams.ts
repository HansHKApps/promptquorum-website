import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('pe-for-content-teams');

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    heroImage: '/images/pe-for-content-teams-overview-hero-en.png',
    title: 'Prompt Engineering for Content Teams: Templates, Review Flows, and Quality Checks',
    dateModified: '2026-07-13',
    seoTitle: 'Prompt Engineering for Content Teams: Templates & Reviews',
    metaDescription: 'Content team prompts: brand voice encoding, 5 reusable templates (blog, social, summary, SEO meta, email), editorial review workflow, quality scoring.',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'en'),
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
          { q: 'How do I set up a content template that works consistently across multiple models?', a: 'Test the same template on 2–3 models from different providers with 10+ test runs each. Use the 5-point quality scoring rubric to evaluate consistency. If all models score 1.5+, the template is portable. If one model falls below 1.5, revise the prompt rather than adopting a model-specific version.' },
          { q: 'What is the deployment threshold for a content prompt?', a: 'Deploy the prompt if the average score across all 5 criteria (task complete, format compliance, brand voice match, factual accuracy, CTA alignment) is 1.5 or higher (on a 0–2 scale) across 10 test runs. A score below 1.5 indicates too many partial or failing outputs for production use without review overhead.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'How to Encode Brand Voice in Prompts', url: '/prompt-engineering/your-brand-voice-ai' },
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
    heroImage: '/images/pe-for-content-teams-overview-hero-de.png',
    title: 'Prompt Engineering für Content-Teams: Templates, Review-Prozesse und Qualitätschecks',
    seoTitle: 'Prompt Engineering für Content-Teams: Templates & Reviews',
    metaDescription: 'PE für Content-Teams: Brand-Voice-Encoding, 5 wiederverwendbare Templates (Blog, Social, Summary, SEO-Meta, E-Mail), Review-Workflow, Quality-Scoring.',
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
      url: 'https://www.promptquorum.com/de/prompt-engineering/prompt-engineering-for-content-teams',
      headline: 'Prompt Engineering für Content-Teams: Templates, Review-Prozesse und Qualitätschecks',
      description: 'Wie Content-Teams Brand Voice kodieren, wiederverwendbare Prompt-Templates für 5 Content-Typen aufbauen, redaktionelle Review-Workflows betreiben und Prompt-Qualität systematisch bewerten.',
      datePublished: '2026-05-02',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'de'),
      keywords: ['Prompt Engineering', 'Content-Teams', 'Brand Voice', 'Content-Templates', 'Redaktionsworkflow'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
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
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie reduzieren Content-Teams KI-Review-Zyklen mit Prompt Engineering?', a: 'Content-Teams reduzieren Review-Zyklen, indem sie Qualitätskriterien — Ton, Format, Wortzahl, Brand-Vokabular und Anti-Listen — direkt vor der Generierung in den Prompt kodieren. Wenn die Ausgabeanforderungen explizit sind, kommt der KI-generierte Content näher am Ziel an und benötigt weniger Überarbeitungsrunden.' },
          { q: 'Was ist das CRAFT-Framework und wann sollten Content-Teams es einsetzen?', a: 'CRAFT steht für Context, Role, Action, Format und Tone. Es ist ein strukturiertes Prompt-Framework für kreative und Content-Arbeit, weil es die fünf für Content-Ausgaben relevantesten Dimensionen organisiert. Verwenden Sie es als Basisstruktur für jeden Content-Prompt, der Brand Voice, Formatanforderungen oder Multi-Stakeholder-Review betrifft.' },
          { q: 'Wie viele Brand-Beispiele brauche ich in einem Brand-Voice-Prompt?', a: 'Fügen Sie 2 bis 3 genehmigte Content-Samples in den Prompt ein. Weniger als 2 gibt dem Modell zu wenig Mustersignal. Mehr als 3 kann das für die eigentliche Aufgabe verfügbare Kontextfenster verwässern. Die Beispiele sollten den Zielkanal und Content-Typ repräsentieren — verwenden Sie kein LinkedIn-Beispiel für einen E-Mail-Brief.' },
          { q: 'Wann sollte ein Content-Team die Faktgenauigkeits-Review-Stufe überspringen?', a: 'Überspringen Sie die Faktgenauigkeitsstufe nur für risikoarmen Content ohne Faktenbehauptungen — Social-Media-Captions, die ein Event ankündigen, kurze CTAs oder reine Formatausgaben wie Betreffzeilen-Optionen. Jeder Content mit Aussagen zu Produkten, Preisen, Leistung oder Dritten benötigt vor der Veröffentlichung eine Faktgenauigkeitsprüfung.' },
          { q: 'Wie richte ich ein Content-Template ein, das konsistent über mehrere Modelle funktioniert?', a: 'Testen Sie dasselbe Template an 2–3 Modellen verschiedener Anbieter mit jeweils 10+ Testläufen. Verwenden Sie die 5-Punkte-Qualitäts-Scoring-Checkliste zur Bewertung der Konsistenz. Wenn alle Modelle 1,5+ erreichen, ist das Template portabel. Fällt ein Modell unter 1,5, überarbeiten Sie den Prompt statt eine modellspezifische Version zu übernehmen.' },
          { q: 'Was ist die Deployment-Schwelle für einen Content-Prompt?', a: 'Deployen Sie den Prompt, wenn der Durchschnittsscore über alle 5 Kriterien (Aufgabe erfüllt, Formatkonformität, Brand-Voice-Übereinstimmung, Faktgenauigkeit, CTA-Ausrichtung) über 10 Testläufe 1,5 oder höher (auf einer Skala von 0–2) beträgt. Ein Score unter 1,5 deutet auf zu viele teilweise oder fehlerhafte Ausgaben für den Produktionseinsatz ohne zusätzlichen Review-Aufwand hin.' },
        ],
      },
    },
  },

  es: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatización',
    heroImage: '/images/pe-for-content-teams-overview-hero-es.png',
    title: 'Prompt engineering para equipos de contenido: plantillas, flujos de revisión y controles de calidad',
    seoTitle: 'Prompt engineering para equipos de contenido: plantillas',
    metaDescription: 'Prompts para equipos de contenido: voz de marca, 5 plantillas reutilizables (blog, social, SEO, email), flujo de revisión y puntuación de calidad.',
    ogDescription: 'Guía de PE para equipos de contenido: cómo codificar la voz de marca en prompts, 5 plantillas reutilizables, flujo de revisión editorial y puntuación de calidad.',
    twitterDescription: 'PE para equipos de contenido: codificación de voz de marca, 5 plantillas, flujo de revisión editorial, checklist de puntuación de calidad.',
    intro: 'Los equipos de contenido que adoptan el prompt engineering reducen los ciclos de revisión — no aceptando salidas de IA de menor calidad, sino codificando los requisitos de calidad directamente en sus prompts antes de que comience la generación. Esta guía cubre cómo especificar la voz de marca, qué plantillas estandarizar y cómo puntuar la calidad de los prompts de forma sistemática.',
    leadAnswerBlock: '**Los equipos de contenido reducen los ciclos de revisión codificando los requisitos de salida — tono, formato, recuento de palabras y restricciones de marca — directamente en sus prompts.** El fallo de PE más común en equipos de contenido es dejar los criterios de calidad implícitos y luego revisarlos manualmente a posteriori.',
    publishDate: '2026-05-02',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Engineering para equipos de contenido',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/prompt-engineering/prompt-engineering-for-content-teams',
      headline: 'Prompt engineering para equipos de contenido: plantillas, flujos de revisión y controles de calidad',
      description: 'Cómo los equipos de contenido codifican la voz de marca, construyen plantillas de prompts reutilizables para 5 tipos de contenido, ejecutan flujos de revisión editorial y puntúan la calidad de los prompts de forma sistemática.',
      datePublished: '2026-05-02',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'es'),
      keywords: ['prompt engineering', 'equipos de contenido', 'voz de marca', 'plantillas de contenido', 'flujo de trabajo editorial'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {
      key_takeaways: {
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'Codifica los requisitos de salida — tono, formato, recuento de palabras y restricciones de marca — directamente en el prompt, no como criterios de revisión post-generación.',
          'La codificación de voz de marca requiere 4 componentes: descriptor de tono (3 adjetivos), lista de vocabulario (5–10 términos de marca), lista negativa (5–10 palabras a evitar) y 2–3 ejemplos de referencia.',
          'Usa el framework CRAFT (Context, Role, Action, Format, Tone) como base para todos los prompts de contenido — organiza las 5 dimensiones más relevantes para las salidas de contenido.',
          'Una revisión editorial en 3 fases (precisión factual → cumplimiento de marca → pulido final) aplica a artículos publicados. Omite la fase 1 para contenido de bajo riesgo como publicaciones en redes sociales.',
          'Despliega un prompt solo si alcanza una puntuación media de calidad de 1.5 o superior (en escala 0–2 por criterio) en 10 ejecuciones de prueba.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: '¿Qué hace diferente el prompting de equipos de contenido?',
        content: [
          '**El prompting de equipos de contenido difiere del prompting de desarrolladores porque los criterios de calidad son subjetivos, multi-stakeholder y dependientes del canal.** Tres desafíos específicos del prompt engineering para equipos de contenido:',
        ],
        items: [
          '**La voz de marca es difícil de especificar con precisión:** Instrucciones genéricas como "escribe en un tono amigable" son demasiado vagas para salidas consistentes. La codificación efectiva de voz de marca requiere adjetivos específicos de la guía de estilo, una lista de vocabulario de términos preferidos, una lista negativa de palabras a evitar y ejemplos de referencia.',
          '**La longitud y el formato de salida varían por canal:** Un borrador de blog requiere estructura H1 + H2 y 800–1200 palabras. Una publicación de LinkedIn requiere 150–300 palabras y sin estructura de encabezados H. Un email requiere línea de asunto, gancho, cuerpo y CTA en menos de 150 palabras. Cada canal necesita una plantilla específica — no un prompt genérico de "escribe contenido".',
          '**Los flujos de revisión involucran múltiples stakeholders:** La revisión de contenido típicamente involucra a un autor (precisión factual), un revisor de marca (cumplimiento de marca) y un editor (pulido final). Los prompts que dejan los criterios de calidad implícitos obligan a los tres revisores a aplicar sus propios estándares — produciendo feedback inconsistente y ciclos de revisión más largos.',
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'Cómo codificar la voz de marca en un prompt',
        content: [
          '**La codificación de voz de marca requiere 4 componentes en el prompt: descriptor de tono, lista de vocabulario, lista negativa y ejemplos de referencia.** Los prompts que incluyen los 4 componentes superan consistentemente a los prompts que se basan solo en adjetivos de tono cuando son evaluados por revisores humanos.',
        ],
        items: [
          '**Descriptor de tono:** 3 adjetivos de tu guía de estilo que describan la personalidad de la marca (p. ej., "directo, práctico, confiado"). Estos adjetivos comprimen las directrices de marca en una forma que el modelo puede aplicar a cada oración.',
          '**Lista de vocabulario:** 5–10 términos específicos de la marca a usar — nombres de productos, verbos preferidos, frases características que definen cómo se comunica la marca (p. ej., "construir, lanzar, iterar" para una marca orientada a desarrolladores).',
          '**Lista negativa:** 5–10 palabras o frases a evitar — típicamente jerga corporativa, superlativos, clichés o terminología de la competencia (p. ej., evitar "innovador, aprovechar, sin fricciones, revolucionario").',
          '**Ejemplos de referencia:** 2–3 muestras de contenido aprobadas pegadas directamente en el prompt. Esto le da al modelo un patrón concreto que replicar en lugar de una descripción abstracta. Elige ejemplos del mismo canal y tipo de contenido que la salida objetivo.',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 plantillas de prompts de contenido reutilizables',
        content: [
          '**Cinco tipos de contenido representan la mayoría de la producción de un equipo de contenido: borradores de blog, publicaciones sociales, resúmenes de contenido, etiquetas meta SEO y emails.** Estandarizar una plantilla por tipo elimina la improvisación de prompts por tarea que crea inconsistencia.',
        ],
        numberedItems: [
          'Borrador de blog: role=estratega de contenido, brief=[tema+audiencia+ángulo], format=[H1+3 H2s+conclusión], word_count=[objetivo], brand_voice=[3 adjetivos de tono], tone_examples=[2 muestras aprobadas del mismo canal]',
          'Publicación social: role=gestor de redes sociales, platform=[LinkedIn/X/Instagram], topic=[brief], character_limit=[límite de plataforma: LinkedIn 300, X 280, Instagram 2200], cta=[acción deseada], brand_voice=[3 adjetivos de tono]',
          'Resumen de contenido: role=editor, source=[pega el contenido aquí], output=[resumen ejecutivo de 3 puntos + 1 versión de longitud de tweet en menos de 280 caracteres], audience=[rol del lector], reading_level=[nivel objetivo]',
          'SEO Meta: role=redactor SEO, page_topic=[tema], primary_keyword=[keyword], title_max=60 caracteres, description_max=155 caracteres, include_keyword_in=[tanto título como descripción], avoid=[voz pasiva, frases de relleno]',
          'Email: role=redactor de email, objective=[objetivo de conversión], audience=[segmento], subject_line_options=[3 opciones con diferentes ganchos], body_structure=[gancho+propuesta de valor+cta], word_count=[menos de 150 palabras para el cuerpo]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'Flujo de revisión editorial para contenido generado por IA',
        content: [
          '**Un proceso de revisión editorial en 3 fases aplica estándares de calidad consistentes al contenido generado por IA sin requerir que cada revisor defina sus propios criterios.** Las 3 fases se corresponden con las 3 dimensiones de calidad que con mayor frecuencia fallan en el contenido generado por IA: precisión factual, cumplimiento de marca y calidad de escritura.',
        ],
        items: [
          '**Fase 1 — Precisión factual (autor):** La persona que envió el brief revisa la salida para verificar la corrección factual. Comprueba: ¿son precisas todas las afirmaciones sobre el producto? ¿Son reales los estadísticos y datos y están correctamente atribuidos? ¿Son correctos los nombres y detalles de terceros? Esta fase requiere experiencia en el dominio, no experiencia editorial.',
          '**Fase 2 — Cumplimiento de marca (revisor de marca):** Un gestor de marca o editor de contenido senior comprueba la salida frente a los componentes de codificación de voz de marca: ¿coincide con el descriptor de tono? ¿Usa términos de la lista de vocabulario y evita los términos de la lista negativa? ¿El registro general coincide con los ejemplos de referencia?',
          '**Fase 3 — Pulido final (editor):** Un editor comprueba el flujo, las transiciones, la legibilidad y la efectividad de la CTA. Esta es la fase donde se produce la edición a nivel de oración.',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'Checklist de puntuación de calidad para prompts de contenido',
        content: [
          '**Una checklist de puntuación de calidad de 5 puntos aplicada a 10 ejecuciones de prueba te da un umbral estadístico para decidir si desplegar un prompt de contenido a tu equipo.** Sin un sistema de puntuación, las decisiones de despliegue de prompts se basan en si la última ejecución de prueba parecía buena — lo cual es una muestra demasiado pequeña para ser fiable.',
          'Los 5 criterios de puntuación (puntúa cada uno de 0–2 por ejecución):',
        ],
        items: [
          '**Tarea completa (0–2):** ¿La salida responde al brief? Puntúa 0 si el brief no está abordado, 1 si está parcialmente abordado, 2 si aborda completamente el brief incluyendo todas las secciones y ángulos solicitados.',
          '**Cumplimiento de formato (0–2):** ¿La salida coincide con la estructura especificada — niveles de encabezado correctos, recuento de palabras dentro del ±15% del objetivo, número correcto de viñetas o secciones?',
          '**Coincidencia de voz de marca (0–2):** ¿La salida usa los descriptores de tono y los términos de la lista de vocabulario, y evita los términos de la lista negativa? Puntúa 0 si la salida suena genérica o usa frases prohibidas, 2 si coincide consistentemente con la codificación de marca.',
          '**Precisión factual (0–2):** ¿Son verificables y precisas todas las afirmaciones fácticas en la salida? Puntúa 0 si hay afirmaciones no verificadas o datos alucinados, 2 si todas las afirmaciones son precisas o claramente enmarcadas como ejemplos.',
          '**Alineación CTA/objetivo (0–2):** ¿La salida incluye la llamada a la acción requerida y el contenido conduce hacia el objetivo declarado? Puntúa 0 si la CTA falta o está desalineada, 2 si está presente y es efectiva.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Umbral de despliegue',
            text: 'Despliega el prompt si la puntuación media en los 5 criterios a lo largo de 10 ejecuciones de prueba es 1.5 o superior (sobre 2.0). Una puntuación inferior a 1.5 significa que el prompt produce demasiadas salidas parciales o fallidas para ser fiable en producción sin sobrecarga adicional de revisión por ejecución.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Los equipos de contenido reducen los ciclos de revisión codificando los requisitos de calidad — tono, formato, recuento de palabras y restricciones de marca — directamente en sus prompts. Usa el framework CRAFT (Context, Role, Action, Format, Tone) como base para todos los prompts de contenido. La codificación de voz de marca requiere 4 componentes: 3 adjetivos de tono, una lista de vocabulario de 5–10 términos, una lista negativa de 5–10 términos y 2–3 ejemplos de referencia. Los canales distintos necesitan plantillas distintas: blog (800–1200 palabras con estructura H1/H2), LinkedIn (150–300 palabras, sin encabezados), email (asunto + gancho + cuerpo + CTA en menos de 150 palabras). Ejecuta una revisión editorial en 3 fases para contenido publicado (precisión factual → cumplimiento de marca → pulido final; omite la fase 1 para contenido de bajo riesgo). Despliega solo cuando la puntuación media en una rúbrica de 5 puntos alcance 1.5 o superior en 10 ejecuciones de prueba.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cómo reducen los equipos de contenido los ciclos de revisión de IA con el prompt engineering?', a: 'Los equipos de contenido reducen los ciclos de revisión codificando los criterios de calidad — tono, formato, recuento de palabras, vocabulario de marca y listas negativas — directamente en el prompt antes de la generación. Cuando los requisitos de salida son explícitos, el contenido generado por IA llega más cerca del objetivo y requiere menos rondas de revisión.' },
          { q: '¿Qué es el framework CRAFT y cuándo deben usarlo los equipos de contenido?', a: 'CRAFT significa Context, Role, Action, Format y Tone. Es un framework de prompts estructurado adecuado para trabajo creativo y de contenido porque organiza las cinco dimensiones más relevantes para las salidas de contenido. Úsalo como estructura base para cualquier prompt de contenido que involucre voz de marca, requisitos de formato o revisión multi-stakeholder.' },
          { q: '¿Cuántos ejemplos de marca necesito en un prompt de voz de marca?', a: 'Incluye 2 a 3 muestras de contenido aprobadas en el prompt. Menos de 2 le da al modelo una señal de patrón insuficiente. Más de 3 puede diluir la ventana de contexto disponible para la tarea real. Los ejemplos deben representar el canal objetivo y el tipo de contenido — no uses un ejemplo de LinkedIn para un brief de email.' },
          { q: '¿Cuándo debe un equipo de contenido omitir la fase de revisión de precisión factual?', a: 'Omite la fase de precisión factual solo para contenido de bajo riesgo que no contiene afirmaciones fácticas — subtítulos de redes sociales que anuncian un evento, CTAs cortos, u opciones de línea de asunto. Cualquier contenido que haga afirmaciones sobre productos, precios, rendimiento o terceros requiere una verificación factual antes de la publicación.' },
          { q: '¿Cómo configuro una plantilla de contenido que funcione consistentemente en múltiples modelos?', a: 'Prueba la misma plantilla en 2–3 modelos de proveedores distintos con 10+ ejecuciones de prueba cada uno. Usa la rúbrica de puntuación de calidad de 5 puntos para evaluar la consistencia. Si todos los modelos obtienen 1.5+, la plantilla es portable. Si un modelo cae por debajo de 1.5, revisa el prompt en lugar de adoptar una versión específica del modelo.' },
          { q: '¿Cuál es el umbral de despliegue para un prompt de contenido?', a: 'Despliega el prompt si la puntuación media en todos los 5 criterios (tarea completa, cumplimiento de formato, coincidencia de voz de marca, precisión factual, alineación CTA) es 1.5 o superior (en escala 0–2) en 10 ejecuciones de prueba. Una puntuación inferior a 1.5 indica demasiadas salidas parciales o fallidas para uso en producción sin sobrecarga de revisión.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          { title: 'Framework CRAFT para equipos: prompting estructurado vs ad-hoc', url: '/es/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Marca en prompts de LLM: codificar voz, tono y terminología', url: '/es/prompt-engineering/your-brand-voice-ai' },
          { title: 'Pruebas de prompts multi-modelo para creación de contenido', url: '/es/prompt-engineering/multi-model-prompt-testing-workflows' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          { title: 'PromptQuorum: herramienta de comparación multi-modelo', url: 'https://www.promptquorum.com/features' },
          { title: 'Framework CRAFT', url: 'https://www.craftframework.dev/' },
          { title: 'Recursos editoriales: HubSpot, Sprout Social guidelines', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },

  pt: {
    theme: 'Workflows & Automação',
    heroImage: '/images/pe-for-content-teams-overview-hero-pt.png',
    title: 'Prompt engineering para equipes de conteúdo: modelos, fluxos de revisão e controles de qualidade',
    seoTitle: 'Prompt engineering para equipes de conteúdo: modelos e revisões',
    metaDescription: 'Prompts para equipes de conteúdo: voz da marca, 5 modelos reutilizáveis (blog, social, SEO, email), fluxo de revisão e pontuação de qualidade.',
    ogDescription: 'Guia de PE para equipes de conteúdo: como codificar a voz da marca em prompts, 5 modelos reutilizáveis, fluxo de revisão editorial e pontuação de qualidade.',
    twitterDescription: 'PE para equipes de conteúdo: codificação de voz da marca, 5 modelos, fluxo de revisão editorial, checklist de pontuação de qualidade.',
    intro: 'As equipes de conteúdo que adotam o prompt engineering reduzem os ciclos de revisão — não aceitando saídas de IA de menor qualidade, mas codificando os requisitos de qualidade diretamente em seus prompts antes do início da geração. Este guia cobre como especificar a voz da marca, quais modelos padronizar e como pontuar a qualidade dos prompts de forma sistemática.',
    leadAnswerBlock: '**As equipes de conteúdo reduzem os ciclos de revisão codificando os requisitos de saída — tom, formato, contagem de palavras e restrições de marca — diretamente em seus prompts.** A falha de PE mais comum das equipes de conteúdo é deixar os critérios de qualidade implícitos e então revisá-los manualmente após o fato.',
    publishDate: '2026-05-02',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Engineering para equipes de conteúdo',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/prompt-engineering-for-content-teams',
      headline: 'Prompt engineering para equipes de conteúdo: modelos, fluxos de revisão e controles de qualidade',
      description: 'Como as equipes de conteúdo codificam a voz da marca, constroem modelos de prompts reutilizáveis para 5 tipos de conteúdo, executam fluxos de revisão editorial e pontuam a qualidade dos prompts de forma sistemática.',
      datePublished: '2026-05-02',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'pt'),
      keywords: ['prompt engineering', 'equipes de conteúdo', 'voz da marca', 'modelos de conteúdo', 'fluxo de trabalho editorial'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {
      key_takeaways: {
        title: 'Pontos-chave',
        isTldr: true,
        items: [
          'Codifique os requisitos de saída — tom, formato, contagem de palavras e restrições de marca — diretamente no prompt, não como critérios de revisão pós-geração.',
          'A codificação de voz da marca requer 4 componentes: descritor de tom (3 adjetivos), lista de vocabulário (5–10 termos de marca), lista negativa (5–10 palavras a evitar) e 2–3 exemplos de referência.',
          'Use o framework CRAFT (Context, Role, Action, Format, Tone) como base para todos os prompts de conteúdo — ele organiza as 5 dimensões mais relevantes para as saídas de conteúdo.',
          'Uma revisão editorial em 3 etapas (precisão factual → conformidade de marca → polimento final) aplica-se a artigos publicados. Pule a etapa 1 para conteúdo de baixo risco como publicações em redes sociais.',
          'Implante um prompt apenas se ele atingir uma pontuação média de qualidade de 1,5 ou superior (na escala 0–2 por critério) em 10 execuções de teste.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'O que torna o prompting de equipes de conteúdo diferente?',
        content: [
          '**O prompting de equipes de conteúdo difere do prompting de desenvolvedores porque os critérios de qualidade são subjetivos, multi-stakeholder e dependentes do canal.** Três desafios específicos do prompt engineering para equipes de conteúdo:',
        ],
        items: [
          '**A voz da marca é difícil de especificar com precisão:** Instruções genéricas como "escreva em um tom amigável" são muito vagas para saídas consistentes. A codificação eficaz de voz da marca requer adjetivos específicos do guia de estilo, uma lista de vocabulário de termos preferidos, uma lista negativa de palavras a evitar e exemplos de referência.',
          '**O comprimento e o formato da saída variam por canal:** Um rascunho de blog requer estrutura H1 + H2 e 800–1200 palavras. Uma publicação no LinkedIn requer 150–300 palavras e sem estrutura de cabeçalhos H. Um email requer linha de assunto, gancho, corpo e CTA em menos de 150 palavras. Cada canal precisa de um modelo específico — não um prompt genérico de "escreva conteúdo".',
          '**Os fluxos de revisão envolvem múltiplos stakeholders:** A revisão de conteúdo tipicamente envolve um autor (precisão factual), um revisor de marca (conformidade de marca) e um editor (polimento final). Os prompts que deixam os critérios de qualidade implícitos obrigam os três revisores a aplicar seus próprios padrões — produzindo feedback inconsistente e ciclos de revisão mais longos.',
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'Como codificar a voz da marca em um prompt',
        content: [
          '**A codificação de voz da marca requer 4 componentes no prompt: descritor de tom, lista de vocabulário, lista negativa e exemplos de referência.** Os prompts que incluem os 4 componentes superam consistentemente os prompts que dependem apenas de adjetivos de tom quando avaliados por revisores humanos.',
        ],
        items: [
          '**Descritor de tom:** 3 adjetivos do seu guia de estilo que descrevem a personalidade da marca (ex.: "direto, prático, confiante"). Esses adjetivos comprimem as diretrizes da marca em uma forma que o modelo pode aplicar a cada frase.',
          '**Lista de vocabulário:** 5–10 termos específicos da marca a usar — nomes de produtos, verbos preferidos, frases características que definem como a marca se comunica (ex.: "construir, lançar, iterar" para uma marca voltada a desenvolvedores).',
          '**Lista negativa:** 5–10 palavras ou frases a evitar — tipicamente jargão corporativo, superlativos, clichês ou terminologia da concorrência (ex.: evitar "inovador, aproveitar, sem atrito, revolucionário").',
          '**Exemplos de referência:** 2–3 amostras de conteúdo aprovadas coladas diretamente no prompt. Isso dá ao modelo um padrão concreto para replicar em vez de uma descrição abstrata. Escolha exemplos do mesmo canal e tipo de conteúdo que a saída desejada.',
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 modelos de prompts de conteúdo reutilizáveis',
        content: [
          '**Cinco tipos de conteúdo representam a maioria da produção de uma equipe de conteúdo: rascunhos de blog, publicações sociais, resumos de conteúdo, tags meta SEO e emails.** Padronizar um modelo por tipo elimina a improvisação de prompts por tarefa que cria inconsistência.',
        ],
        numberedItems: [
          'Rascunho de blog: role=estrategista de conteúdo, brief=[tópico+audiência+ângulo], format=[H1+3 H2s+conclusão], word_count=[alvo], brand_voice=[3 adjetivos de tom], tone_examples=[2 amostras aprovadas do mesmo canal]',
          'Publicação social: role=gestor de redes sociais, platform=[LinkedIn/X/Instagram], topic=[brief], character_limit=[limite da plataforma: LinkedIn 300, X 280, Instagram 2200], cta=[ação desejada], brand_voice=[3 adjetivos de tom]',
          'Resumo de conteúdo: role=editor, source=[cole o conteúdo aqui], output=[resumo executivo de 3 pontos + 1 versão de comprimento de tweet em menos de 280 caracteres], audience=[papel do leitor], reading_level=[nível alvo]',
          'SEO Meta: role=redator SEO, page_topic=[tópico], primary_keyword=[palavra-chave], title_max=60 caracteres, description_max=155 caracteres, include_keyword_in=[tanto título quanto descrição], avoid=[voz passiva, frases de preenchimento]',
          'Email: role=redator de email, objective=[objetivo de conversão], audience=[segmento], subject_line_options=[3 opções com diferentes ganchos], body_structure=[gancho+proposta de valor+cta], word_count=[menos de 150 palavras para o corpo]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'Fluxo de revisão editorial para conteúdo gerado por IA',
        content: [
          '**Um processo de revisão editorial em 3 etapas aplica padrões de qualidade consistentes ao conteúdo gerado por IA sem exigir que cada revisor defina seus próprios critérios.** As 3 etapas correspondem às 3 dimensões de qualidade que mais frequentemente falham no conteúdo gerado por IA: precisão factual, conformidade de marca e qualidade de escrita.',
        ],
        items: [
          '**Etapa 1 — Precisão factual (autor):** A pessoa que enviou o brief revisa a saída para verificar a correção factual. Verifica: todas as afirmações sobre o produto são precisas? As estatísticas e dados são reais e corretamente atribuídos? Os nomes e detalhes de terceiros estão corretos? Esta etapa requer expertise no domínio, não expertise editorial.',
          '**Etapa 2 — Conformidade de marca (revisor de marca):** Um gestor de marca ou editor de conteúdo sênior verifica a saída em relação aos componentes de codificação de voz da marca: corresponde ao descritor de tom? Usa termos da lista de vocabulário e evita os termos da lista negativa? O registro geral corresponde aos exemplos de referência?',
          '**Etapa 3 — Polimento final (editor):** Um editor verifica o fluxo, as transições, a legibilidade e a eficácia da CTA. Esta é a etapa onde ocorre a edição no nível da frase.',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'Checklist de pontuação de qualidade para prompts de conteúdo',
        content: [
          '**Uma checklist de pontuação de qualidade de 5 pontos aplicada em 10 execuções de teste fornece um limite estatístico para decidir se deve implantar um prompt de conteúdo para sua equipe.** Sem um sistema de pontuação, as decisões de implantação de prompts são baseadas em se a última execução de teste pareceu boa — o que é uma amostra pequena demais para ser confiável.',
          'Os 5 critérios de pontuação (pontue cada um de 0–2 por execução):',
        ],
        items: [
          '**Tarefa concluída (0–2):** A saída responde ao brief? Pontue 0 se o brief não for abordado, 1 se for parcialmente abordado, 2 se abordar completamente o brief incluindo todas as seções e ângulos solicitados.',
          '**Conformidade de formato (0–2):** A saída corresponde à estrutura especificada — níveis de cabeçalho corretos, contagem de palavras dentro de ±15% do alvo, número correto de marcadores ou seções?',
          '**Correspondência de voz da marca (0–2):** A saída usa os descritores de tom e os termos da lista de vocabulário, e evita os termos da lista negativa? Pontue 0 se a saída soar genérica ou usar frases proibidas, 2 se corresponder consistentemente à codificação da marca.',
          '**Precisão factual (0–2):** Todas as afirmações factuais na saída são verificáveis e precisas? Pontue 0 se houver afirmações não verificadas ou dados alucinados, 2 se todas as afirmações forem precisas ou claramente enquadradas como exemplos.',
          '**Alinhamento CTA/objetivo (0–2):** A saída inclui o call to action requerido e o conteúdo leva em direção ao objetivo declarado? Pontue 0 se a CTA estiver ausente ou desalinhada, 2 se estiver presente e for eficaz.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Limite de implantação',
            text: 'Implante o prompt se a pontuação média em todos os 5 critérios ao longo de 10 execuções de teste for 1,5 ou superior (de 2,0). Uma pontuação abaixo de 1,5 significa que o prompt está produzindo saídas parciais ou com falhas demais para ser confiável em produção sem sobrecarga adicional de revisão por execução.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'As equipes de conteúdo reduzem os ciclos de revisão codificando os requisitos de qualidade — tom, formato, contagem de palavras e restrições de marca — diretamente em seus prompts. Use o framework CRAFT (Context, Role, Action, Format, Tone) como base para todos os prompts de conteúdo. A codificação de voz da marca requer 4 componentes: 3 adjetivos de tom, uma lista de vocabulário de 5–10 termos, uma lista negativa de 5–10 termos e 2–3 exemplos de referência. Canais diferentes precisam de modelos diferentes: blog (800–1200 palavras com estrutura H1/H2), LinkedIn (150–300 palavras, sem cabeçalhos), email (assunto + gancho + corpo + CTA em menos de 150 palavras). Execute uma revisão editorial em 3 etapas para conteúdo publicado (precisão factual → conformidade de marca → polimento final; pule a etapa 1 para conteúdo de baixo risco). Implante apenas quando a pontuação média em uma rubrica de 5 pontos atingir 1,5 ou superior em 10 execuções de teste.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Como as equipes de conteúdo reduzem os ciclos de revisão de IA com o prompt engineering?', a: 'As equipes de conteúdo reduzem os ciclos de revisão codificando os critérios de qualidade — tom, formato, contagem de palavras, vocabulário de marca e listas negativas — diretamente no prompt antes da geração. Quando os requisitos de saída são explícitos, o conteúdo gerado por IA chega mais próximo do alvo e requer menos rodadas de revisão.' },
          { q: 'O que é o framework CRAFT e quando as equipes de conteúdo devem usá-lo?', a: 'CRAFT significa Context, Role, Action, Format e Tone. É um framework de prompts estruturado adequado para trabalho criativo e de conteúdo porque organiza as cinco dimensões mais relevantes para saídas de conteúdo. Use-o como estrutura base para qualquer prompt de conteúdo que envolva voz da marca, requisitos de formato ou revisão multi-stakeholder.' },
          { q: 'Quantos exemplos de marca preciso em um prompt de voz da marca?', a: 'Inclua 2 a 3 amostras de conteúdo aprovadas no prompt. Menos de 2 dá ao modelo um sinal de padrão insuficiente. Mais de 3 pode diluir a janela de contexto disponível para a tarefa real. Os exemplos devem representar o canal alvo e o tipo de conteúdo — não use um exemplo do LinkedIn para um brief de email.' },
          { q: 'Quando uma equipe de conteúdo deve pular a etapa de revisão de precisão factual?', a: 'Pule a etapa de precisão factual apenas para conteúdo de baixo risco que não contém afirmações factuais — legendas de redes sociais anunciando um evento, CTAs curtos ou opções de linhas de assunto. Qualquer conteúdo que faça afirmações sobre produtos, preços, desempenho ou terceiros requer uma verificação factual antes da publicação.' },
          { q: 'Como configuro um modelo de conteúdo que funcione consistentemente em vários modelos?', a: 'Teste o mesmo modelo em 2–3 modelos de provedores diferentes com 10+ execuções de teste cada. Use a rubrica de pontuação de qualidade de 5 pontos para avaliar a consistência. Se todos os modelos pontuarem 1,5+, o modelo é portátil. Se um modelo cair abaixo de 1,5, revise o prompt em vez de adotar uma versão específica do modelo.' },
          { q: 'Qual é o limite de implantação para um prompt de conteúdo?', a: 'Implante o prompt se a pontuação média em todos os 5 critérios (tarefa concluída, conformidade de formato, correspondência de voz da marca, precisão factual, alinhamento CTA) for 1,5 ou superior (na escala 0–2) em 10 execuções de teste. Uma pontuação abaixo de 1,5 indica saídas parciais ou com falhas demais para uso em produção sem sobrecarga de revisão.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          { title: 'Framework CRAFT para equipes: prompting estruturado vs ad-hoc', url: '/pt/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Marca em prompts de LLM: codificar voz, tom e terminologia', url: '/pt/prompt-engineering/your-brand-voice-ai' },
          { title: 'Testes de prompts multi-modelo para criação de conteúdo', url: '/pt/prompt-engineering/multi-model-prompt-testing-workflows' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          { title: 'PromptQuorum: ferramenta de comparação multi-modelo', url: 'https://www.promptquorum.com/features' },
          { title: 'Framework CRAFT', url: 'https://www.craftframework.dev/' },
          { title: 'Recursos editoriais: HubSpot, Sprout Social guidelines', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    heroImage: '/images/pe-for-content-teams-overview-hero-fr.png',
    title: "Prompt Engineering pour les équipes contenu : templates, flux de validation et contrôles qualité",
    seoTitle: "Prompt Engineering pour équipes contenu : templates et révisions",
    metaDescription: "Prompts pour équipes contenu : voix de marque, 5 templates (blog, social, résumé, SEO meta, email), workflow de révision, scoring qualité.",
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
      url: 'https://www.promptquorum.com/fr/prompt-engineering/prompt-engineering-for-content-teams',
      headline: "Prompt Engineering pour les équipes contenu : templates, flux de validation et contrôles qualité",
      description: "Comment les équipes contenu encodent la voix de marque, construisent des templates réutilisables pour 5 types de contenu, opèrent des workflows de révision éditoriale et évaluent la qualité des prompts.",
      datePublished: '2026-05-02',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'fr'),
      keywords: ['prompt engineering', 'équipes contenu', 'voix de marque', 'templates contenu', 'workflow éditorial'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
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
        title: 'Questions fréquemment posées',
        faqs: [
          { q: "Comment les équipes contenu réduisent-elles les cycles d'examen avec le prompt engineering ?", a: "Les équipes contenu réduisent les cycles d'examen en encodant les critères qualité — ton, format, nombre de mots, vocabulaire de marque et listes d'exclusion — directement dans le prompt avant la génération." },
          { q: "Qu'est-ce que le framework CRAFT et quand les équipes contenu doivent-elles l'utiliser ?", a: "CRAFT signifie Contexte, Rôle, Action, Format et Ton. C'est un framework structuré adapté au travail créatif et contenu car il organise les cinq dimensions les plus pertinentes pour les sorties contenu." },
          { q: "Combien d'exemples conformes à la marque faut-il dans un prompt de voix de marque ?", a: "Incluez 2 à 3 exemples de contenu approuvés directement dans le prompt. Moins de 2 donne au modèle un signal de motif insuffisant. Plus de 3 peut diluer la fenêtre de contexte disponible pour la tâche réelle." },
          { q: "Quand une équipe contenu peut-elle ignorer l'étape de vérification de l'exactitude factuelle ?", a: "Ignorez l'étape de vérification factuelle uniquement pour le contenu à faible enjeu sans affirmations factuelles — légendes social media, CTAs courts ou options de lignes d'objet. Tout contenu avec des affirmations sur des produits ou des performances nécessite une vérification factuelle." },
          { q: "Comment testez-vous un prompt contenu pour la cohérence sur plusieurs modèles ?", a: "Testez le même template sur 2–3 modèles de fournisseurs différents avec 10+ tests chacun. Utilisez la rubrique de scoring qualité en 5 points pour évaluer la cohérence. Si tous les modèles marquent 1,5+, le template est portable." },
          { q: "Quel est le seuil de déploiement pour un prompt contenu ?", a: "Déployez le prompt si le score moyen sur tous les 5 critères (tâche accomplte, conformité format, correspondance voix de marque, exactitude factuelle, alignement CTA) est 1,5 ou supérieur (sur une échelle 0–2) sur 10 tests." },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Lectures recommandées',
        items: [
          { title: 'Framework CRAFT pour équipes : prompting structuré vs ad-hoc', url: '/fr/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Branding en LLM-Prompts : encoder voix, ton et terminologie', url: '/fr/prompt-engineering/your-brand-voice-ai' },
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


  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    heroImage: '/images/pe-for-content-teams-overview-hero-ja.png',
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
      url: 'https://www.promptquorum.com/ja/prompt-engineering/prompt-engineering-for-content-teams',
      headline: 'コンテンツチームのためのプロンプトエンジニアリング：テンプレート、レビューフロー、品質チェック',
      description: 'コンテンツチームがブランドボイスをエンコードし、5つのコンテンツタイプの再利用可能なプロンプトテンプレートを構築し、編集レビューワークフローを運営する方法。',
      datePublished: '2026-05-02',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'ja'),
      keywords: ['プロンプトエンジニアリング', 'コンテンツチーム', 'ブランドボイス', 'コンテンツテンプレート', '編集ワークフロー'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
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
          { q: 'コンテンツプロンプトを複数のモデルで一貫して機能するようテストしますか？', a: '異なるプロバイダーの2〜3個のモデルで同じテンプレートをテストして、各々10回以上のテスト実行を行います。5点品質スコアリングルーブリックを使用して一貫性を評価します。' },
          { q: 'コンテンツプロンプトのデプロイメント閾値は何ですか？', a: 'すべての5つの基準で平均スコアが1.5以上（0–2スケール）を10回のテスト実行で達成する場合、プロンプトをデプロイします。1.5未満は生産用途に多すぎる部分的またはフェイル出力を示します。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          { title: 'チーム向けCRAFTフレームワーク：構造化 vs アドホックプロンプティング', url: '/ja/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'LLMプロンプトでのブランディング：音声、語調、用語のエンコード', url: '/ja/prompt-engineering/your-brand-voice-ai' },
          { title: 'コンテンツ作成のための複数モデルテスト：モデル比較ガイド', url: '/ja/prompt-engineering/multi-model-prompt-testing-workflows' },
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
    heroImage: '/images/pe-for-content-teams-overview-hero-zh.png',
    title: '内容团队的提示词工程：模板、审核流程和质量检查',
    seoTitle: '内容团队提示词工程：模板与审核',
    metaDescription: '内容团队的提示词工程：品牌声音编码、5个可复用内容模板（博客、社交、摘要、SEO元标签、邮件）、编辑审核工作流和质量评分清单，提升内容输出。',
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
      url: 'https://www.promptquorum.com/zh/prompt-engineering/prompt-engineering-for-content-teams',
      headline: '内容团队的提示词工程：模板、审核流程和质量检查',
      description: '内容团队如何编码品牌声音、为5种内容类型构建可复用提示词模板、运营编辑审核工作流并系统评估提示词质量。',
      datePublished: '2026-05-02',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'zh'),
      keywords: ['提示词工程', '内容团队', '品牌声音', '内容模板', '编辑工作流'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
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
          { q: '你如何测试内容提示词在多个模型中的一致性？', a: '在来自不同提供商的2-3个模型上测试相同的模板，每个10+次测试运行。使用5点质量评分标准评估一致性。' },
          { q: '内容提示词的部署阈值是什么？', a: '当所有5个标准（任务完成、格式合规、品牌声音匹配、事实准确性、CTA/目标对齐）的平均分数在10次测试运行中达到1.5或更高（0–2标度）时部署提示词。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '相关资料',
        items: [
          { title: '团队CRAFT框架：结构化与临时性提示词编制', url: '/zh/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'LLM提示词中的品牌：编码声音、语调和术语', url: '/zh/prompt-engineering/your-brand-voice-ai' },
          { title: '多模型提示词测试：模型选择指南', url: '/zh/prompt-engineering/multi-model-prompt-testing-workflows' },
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

  ar: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    heroImage: '/images/pe-for-content-teams-overview-hero-ar.png',
    title: 'هندسة البرومبت لفرق المحتوى: القوالب وسير مراجعة المحتوى ومعايير الجودة',
    seoTitle: 'هندسة البرومبت لفرق المحتوى: القوالب والمراجعة',
    metaDescription: 'هندسة البرومبت لفرق المحتوى: ترميز صوت العلامة التجارية في ⁨4⁩ عناصر، ⁨5⁩ قوالب قابلة للإعادة (مدونة، ⁨SEO⁩، بريد)، سير مراجعة ⁨3⁩ مراحل وتقييم الجودة.',
    ogDescription: 'دليل هندسة البرومبت لفرق المحتوى: كيفية ترميز صوت العلامة التجارية في البرومبتات، 5 قوالب قابلة للإعادة، سير مراجعة تحريري وتقييم الجودة.',
    twitterDescription: 'هندسة البرومبت لفرق المحتوى: ترميز صوت العلامة التجارية، ⁨5⁩ قوالب، سير المراجعة التحريرية، قائمة تحقق تقييم الجودة.',
    intro: 'تُقلّل فرق المحتوى التي تتبنّى هندسة البرومبت دورات المراجعة — ليس بقبول مخرجات ذكاء اصطناعي أدنى جودة، بل بترميز متطلبات الجودة مباشرةً في برومبتاتها قبل بدء التوليد. يتناول هذا الدليل كيفية تحديد صوت العلامة التجارية، والقوالب التي ينبغي توحيدها، وكيفية تقييم جودة البرومبتات بمنهجية ممنهجة.',
    leadAnswerBlock: '**تُقلّل فرق المحتوى دورات المراجعة بترميز متطلبات المخرجات — النبرة والتنسيق وعدد الكلمات وقيود العلامة التجارية — مباشرةً في برومبتاتها.** أكثر أخطاء هندسة البرومبت شيوعاً في فرق المحتوى هو ترك معايير الجودة ضمنيةً ثم مراجعتها يدوياً بعد التوليد.',
    publishDate: '2026-05-02',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'هندسة البرومبت لفرق المحتوى',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/prompt-engineering-for-content-teams',
      headline: 'هندسة البرومبت لفرق المحتوى: القوالب وسير مراجعة المحتوى ومعايير الجودة',
      description: 'كيف تُرمّز فرق المحتوى صوت العلامة التجارية، وتبني قوالب برومبتات قابلة للإعادة لـ5 أنواع من المحتوى، وتُدير سير المراجعة التحريرية وتُقيّم جودة البرومبتات بمنهجية ممنهجة.',
      datePublished: '2026-05-02',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'ar'),
      keywords: ['هندسة البرومبت', 'فرق المحتوى', 'صوت العلامة التجارية', 'قوالب المحتوى', 'سير العمل التحريري'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {
      key_takeaways: {
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'رمّز متطلبات المخرجات — النبرة والتنسيق وعدد الكلمات وقيود العلامة التجارية — مباشرةً في البرومبت، لا كمعايير مراجعة بعد التوليد.',
          'يتطلب ترميز صوت العلامة التجارية 4 مكوّنات: واصف نبرة (3 صفات)، قائمة مفردات (5–10 مصطلحات للعلامة التجارية)، قائمة سلبية (5–10 كلمات للتجنّب) و2–3 أمثلة مرجعية.',
          'استخدم إطار CRAFT (السياق، الدور، الإجراء، التنسيق، النبرة) أساساً لجميع برومبتات المحتوى — ينظّم الأبعاد الخمس الأكثر أهميةً لمخرجات المحتوى.',
          'تنطبق المراجعة التحريرية ثلاثية المراحل (دقة المعلومات ← امتثال العلامة التجارية ← التحرير النهائي) على المقالات المنشورة. احذف المرحلة الأولى للمحتوى منخفض المخاطر كمنشورات وسائل التواصل الاجتماعي.',
          'انشر برومبتاً فقط إذا بلغ متوسط درجة الجودة 1.5 أو أعلى (على مقياس 0–2 لكل معيار) في 10 اختبارات تجريبية.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: 'ما الذي يجعل برومبتات فرق المحتوى مختلفة؟',
        content: [
          '**تختلف برومبتات فرق المحتوى عن برومبتات المطوّرين لأن معايير الجودة ذاتية ومتعددة الأطراف ومرتبطة بالقناة.** ثلاثة تحديات خاصة بهندسة البرومبت لفرق المحتوى:',
        ],
        items: [
          '**صوت العلامة التجارية يصعب تحديده بدقة:** تعليمات عامة كـ"اكتب بنبرة ودية" مبهمة جداً لتحقيق مخرجات متسقة. يتطلب الترميز الفعّال لصوت العلامة التجارية صفاتٍ محدّدة من دليل الأسلوب، وقائمة مفردات بالمصطلحات المفضّلة، وقائمة سلبية بالكلمات المُجتنَبة، وأمثلة مرجعية.',
          '**يتباين طول المخرجات وتنسيقها حسب القناة:** يستلزم مسودة مدونة هيكلاً بعنوان H1 وH2 و800–1200 كلمة. أما منشور LinkedIn فيحتاج 150–300 كلمة دون عناوين. والبريد الإلكتروني يستوجب سطر موضوع وخطافاً وجسماً وعبارة دعوة للتحرّك في أقل من 150 كلمة. كل قناة تحتاج قالباً مخصّصاً، لا برومبتاً عاماً لـ"كتابة المحتوى".',
          '**سير المراجعة يشمل أطرافاً متعددة:** تشمل مراجعة المحتوى عادةً مؤلّفاً (دقة المعلومات) ومراجع العلامة التجارية (الامتثال للعلامة) ومحرراً (التحرير النهائي). البرومبتات التي تترك معايير الجودة ضمنيةً تُلزم المراجعين الثلاثة بتطبيق معاييرهم الخاصة — مما يُنتج تعليقات متضاربة ودورات مراجعة أطول.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'الاختلاف الجوهري',
            text: 'المطوّرون يُحسّنون برومبتاتهم من أجل الأداء الوظيفي. أما فرق المحتوى فتُحسّن من أجل الانتساب — هل يبدو المحتوى وكأنه يصدر عن العلامة التجارية، وهل يُقنع الجمهور المستهدف بالتصرّف؟ هذا التمييز يُحدّد أي المكوّنات ينبغي تضمينها في البرومبت.',
          },
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: 'كيفية ترميز صوت العلامة التجارية في برومبت',
        content: [
          '**يستلزم ترميز صوت العلامة التجارية 4 مكوّنات في البرومبت: واصف النبرة، وقائمة المفردات، والقائمة السلبية، والأمثلة المرجعية.** البرومبتات التي تتضمّن المكوّنات الأربعة تتفوّق باستمرار على البرومبتات التي تعتمد على الصفات فقط حين يُقيّمها مراجعون بشريون.',
        ],
        items: [
          '**واصف النبرة:** 3 صفات من دليل أسلوب علامتك التجارية تصف شخصيتها (مثلاً: "مباشر، عملي، واثق"). تختزل هذه الصفات إرشادات العلامة التجارية في صيغة يستطيع النموذج تطبيقها على كل جملة.',
          '**قائمة المفردات:** 5–10 مصطلحات خاصة بالعلامة التجارية للاستخدام — أسماء المنتجات والأفعال المفضّلة والعبارات المميّزة التي تُحدّد أسلوب تواصل العلامة (مثلاً: "ابنِ، أطلق، كرّر" لعلامة موجّهة نحو المطوّرين).',
          '**القائمة السلبية:** 5–10 كلمات أو عبارات للتجنّب — عادةً المصطلحات المؤسسية المبتذلة وعبارات التفضيل المطلق والتعابير المستهلكة ومصطلحات المنافسين (مثلاً: تجنّب "مبتكر، استثمر، سلس، ثوري").',
          '**الأمثلة المرجعية:** 2–3 عيّنات محتوى معتمدة تُلصق مباشرةً في البرومبت. تُزوّد النموذج بنمط ملموس للتقليد عوضاً عن وصف مجرّد. اختر أمثلة من القناة ونوع المحتوى المستهدفَين.',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'اختبر بمحتوى صعب',
            text: 'اختبر برومبت صوت العلامة التجارية على موضوعات صعبة — رسائل أزمات، محتوى تنافسي، نتائج اختبارات ضعيفة. النماذج أكثر عُرضةً لمخالفة قيود العلامة التجارية مع الموضوعات الحساسة. إن لم يصمد البرومبت عند هذه الاختبارات، فلن يصمد في الإنتاج.',
          },
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5 قوالب برومبت محتوى قابلة للإعادة',
        content: [
          '**تمثّل خمسة أنواع من المحتوى غالبية ما تُنتجه فرق المحتوى: مسودات المدونة ومنشورات وسائل التواصل الاجتماعي وملخّصات المحتوى وعناصر SEO والبريد الإلكتروني.** توحيد قالب لكل نوع يُلغي الارتجال في كتابة البرومبتات مع كل مهمة، مما يُقلّل التذبذب.',
        ],
        numberedItems: [
          'مسودة مدونة: role=استراتيجي محتوى، brief=[موضوع+جمهور+زاوية]، format=[H1+3 H2+خاتمة]، word_count=[الهدف]، brand_voice=[3 صفات نبرة]، tone_examples=[عيّنتان معتمدتان من القناة ذاتها]',
          'منشور وسائل التواصل: role=مدير وسائل التواصل، platform=[LinkedIn/X/Instagram]، topic=[الملخص]، character_limit=[حد المنصة: LinkedIn 300، X 280، Instagram 2200]، cta=[الإجراء المطلوب]، brand_voice=[3 صفات نبرة]',
          'ملخّص المحتوى: role=محرر، source=[الصق المحتوى هنا]، output=[ملخص تنفيذي من 3 نقاط + نسخة بطول تغريدة أقل من 280 حرفاً]، audience=[دور القارئ]، reading_level=[المستوى المستهدف]',
          'SEO Meta: role=كاتب SEO، page_topic=[الموضوع]، primary_keyword=[الكلمة المفتاحية]، title_max=60 حرفاً، description_max=155 حرفاً، include_keyword_in=[كل من العنوان والوصف]، avoid=[المبني للمجهول، العبارات الحشوية]',
          'بريد إلكتروني: role=كاتب بريد إلكتروني، objective=[هدف التحويل]، audience=[الشريحة]، subject_line_options=[3 خيارات بخطافات مختلفة]، body_structure=[خطاف+قيمة مقترحة+دعوة للتحرّك]، word_count=[أقل من 150 كلمة للجسم]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'سير المراجعة التحريرية للمحتوى المُوّلَد بالذكاء الاصطناعي',
        content: [
          '**تُطبّق عملية مراجعة تحريرية ثلاثية المراحل معايير جودة متسقة على المحتوى المُوّلَد بالذكاء الاصطناعي دون إلزام كل مراجع بتحديد معاييره الخاصة.** تتوافق المراحل الثلاث مع الأبعاد الثلاثة للجودة التي تفشل بها مخرجات الذكاء الاصطناعي في أغلب الأحيان: دقة المعلومات والامتثال للعلامة التجارية وجودة الكتابة.',
        ],
        items: [
          '**المرحلة 1 — دقة المعلومات (المؤلّف):** يراجع مُقدِّم الملخّص المخرجات للتحقق من صحة المعلومات. يتحقق من: هل كل الادعاءات المتعلقة بالمنتج دقيقة؟ هل الإحصائيات والبيانات حقيقية ومنسوبة بشكل صحيح؟ هل أسماء الأطراف الثالثة وتفاصيلها صحيحة؟ تستلزم هذه المرحلة خبرة بالمجال، لا خبرة تحريرية.',
          '**المرحلة 2 — امتثال العلامة التجارية (مراجع العلامة التجارية):** يتحقق مدير العلامة التجارية أو المحرر الأول من المخرجات مقارنةً بمكوّنات ترميز صوت العلامة التجارية: هل تنسجم مع واصف النبرة؟ هل تستخدم مصطلحات قائمة المفردات وتتجنّب مصطلحات القائمة السلبية؟ هل تتوافق مع الأمثلة المرجعية؟',
          '**المرحلة 3 — التحرير النهائي (المحرر):** يفحص المحرر الانسياب والانتقالات والمقروئية وفعالية عبارة الدعوة للتحرّك. هذه المرحلة التي يجري فيها التحرير على مستوى الجملة.',
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: 'قائمة تحقق تقييم الجودة لبرومبتات المحتوى',
        content: [
          '**تمنحك قائمة تحقق جودة من 5 معايير مُطبَّقة على 10 اختبارات تجريبية عتبةً إحصائية لتقرير نشر برومبت المحتوى لفريقك.** دون نظام تقييم، تستند قرارات نشر البرومبتات إلى ما إذا بدا آخر اختبار جيداً — وهذه عيّنة صغيرة جداً لتكون موثوقة.',
          'معايير التقييم الخمسة (قيّم كلاً من 0–2 لكل اختبار تجريبي):',
        ],
        items: [
          '**اكتمال المهمة (0–2):** هل تستجيب المخرجات للملخّص؟ 0 إذا لم يُعالَج، 1 إذا عُولج جزئياً، 2 إذا عُولج بالكامل شاملاً جميع الأقسام والزوايا المطلوبة.',
          '**امتثال التنسيق (0–2):** هل تتوافق المخرجات مع الهيكل المُحدَّد — مستويات العناوين الصحيحة وعدد الكلمات ضمن ±15% من الهدف والعدد الصحيح من النقاط أو الأقسام؟',
          '**توافق صوت العلامة التجارية (0–2):** هل تستخدم المخرجات واصفات النبرة ومصطلحات قائمة المفردات وتتجنّب مصطلحات القائمة السلبية؟ 0 إذا بدت المخرجات عامة أو استخدمت عبارات محظورة، 2 إذا توافقت باتساق مع ترميز العلامة التجارية.',
          '**دقة المعلومات (0–2):** هل جميع الادعاءات الواقعية في المخرجات قابلة للتحقق ودقيقة؟ 0 إذا وُجدت ادعاءات غير موثّقة أو بيانات مختلَقة، 2 إذا كانت جميع الادعاءات دقيقة أو إطارها مثال واضح.',
          '**توافق عبارة الدعوة/الهدف (0–2):** هل تتضمّن المخرجات عبارة الدعوة للتحرّك المطلوبة ويقود المحتوى نحو الهدف المُعلَن؟ 0 إذا غابت أو انحرفت، 2 إذا كانت حاضرة وفعّالة.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'عتبة النشر',
            text: 'انشر البرومبت إذا بلغ متوسط الدرجة عبر المعايير الخمسة في 10 اختبارات تجريبية 1.5 أو أعلى (من 2.0). ما دون 1.5 يعني أن البرومبت يُنتج مخرجات جزئية أو فاشلة بكثرة لتكون موثوقةً في الإنتاج دون عبء مراجعة إضافي لكل اختبار.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'ملخص',
        isTldr: true,
        content: 'تُقلّل فرق المحتوى دورات المراجعة بترميز متطلبات الجودة — النبرة والتنسيق وعدد الكلمات وقيود العلامة التجارية — مباشرةً في برومبتاتها. استخدم إطار CRAFT (السياق، الدور، الإجراء، التنسيق، النبرة) أساساً لجميع برومبتات المحتوى. يتطلب ترميز صوت العلامة التجارية 4 مكوّنات: 3 صفات نبرة وقائمة مفردات من 5–10 مصطلحات وقائمة سلبية من 5–10 مصطلحات و2–3 أمثلة مرجعية. كل قناة تحتاج قالبها الخاص: المدونة (800–1200 كلمة بهيكل H1/H2)، LinkedIn (150–300 كلمة، دون عناوين)، البريد الإلكتروني (موضوع + خطاف + جسم + دعوة للتحرّك في أقل من 150 كلمة). طبّق مراجعة تحريرية ثلاثية المراحل للمحتوى المنشور (دقة المعلومات ← امتثال العلامة التجارية ← التحرير النهائي؛ احذف المرحلة الأولى للمحتوى منخفض المخاطر). انشر فقط حين يبلغ المتوسط في نظام تقييم من 5 معايير 1.5 أو أعلى في 10 اختبارات تجريبية.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'كيف تُقلّل فرق المحتوى دورات مراجعة الذكاء الاصطناعي بهندسة البرومبت؟', a: 'تُقلّل فرق المحتوى دورات المراجعة بترميز معايير الجودة — النبرة والتنسيق وعدد الكلمات ومفردات العلامة التجارية والقوائم السلبية — مباشرةً في البرومبت قبل التوليد. حين تكون متطلبات المخرجات صريحة، يقترب المحتوى المُوّلَد بالذكاء الاصطناعي من الهدف ويستلزم جولات مراجعة أقل.' },
          { q: 'ما إطار CRAFT ومتى ينبغي لفرق المحتوى استخدامه؟', a: 'CRAFT اختصار لـ: السياق (Context) والدور (Role) والإجراء (Action) والتنسيق (Format) والنبرة (Tone). إطار برومبت منظّم مناسب لعمل المحتوى الإبداعي لأنه ينظّم الأبعاد الخمس الأكثر أهميةً لمخرجاته. استخدمه هيكلاً أساسياً لأي برومبت محتوى يشمل صوت العلامة التجارية أو متطلبات تنسيق أو مراجعة متعددة الأطراف.' },
          { q: 'كم عدد الأمثلة المرجعية اللازمة في برومبت صوت العلامة التجارية؟', a: 'أضف 2 إلى 3 عيّنات محتوى معتمدة في البرومبت. أقل من 2 يُعطي النموذج إشارة نمط غير كافية. أكثر من 3 قد يُضعف نافذة السياق المتاحة للمهمة الفعلية. ينبغي أن تمثّل الأمثلة القناة ونوع المحتوى المستهدفَين — لا تستخدم مثال LinkedIn لملخّص بريد إلكتروني.' },
          { q: 'متى ينبغي لفريق المحتوى حذف مرحلة مراجعة دقة المعلومات؟', a: 'احذف مرحلة دقة المعلومات للمحتوى منخفض المخاطر الخالي من الادعاءات الواقعية — تعليقات توضيحية لمنشورات وسائل التواصل، عبارات دعوة للتحرّك قصيرة أو خيارات سطر موضوع. أي محتوى يتضمّن ادعاءات عن المنتجات والأسعار والأداء والأطراف الثالثة يستلزم تحقق حقائق قبل النشر.' },
          { q: 'كيف أُعدّ قالب محتوى يعمل باتساق عبر نماذج متعددة؟', a: 'اختبر القالب ذاته على 2–3 نماذج من مزوّدين مختلفين بـ10+ اختبارات تجريبية لكل منها. استخدم نظام تقييم الجودة من 5 معايير لتقييم الاتساق. إذا حقق كل النماذج 1.5+، القالب قابل للنقل. إذا انخفض نموذج دون 1.5، راجع البرومبت بدلاً من تبنّي نسخة مخصّصة لنموذج بعينه.' },
          { q: 'ما عتبة نشر برومبت المحتوى؟', a: 'انشر البرومبت إذا بلغ متوسط الدرجة عبر المعايير الخمسة (اكتمال المهمة، امتثال التنسيق، توافق صوت العلامة التجارية، دقة المعلومات، توافق عبارة الدعوة) 1.5 أو أعلى (على مقياس 0–2) في 10 اختبارات تجريبية. ما دون 1.5 يُشير إلى مخرجات جزئية أو فاشلة بكثرة للاستخدام الإنتاجي دون عبء مراجعة إضافي.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          { title: 'إطار CRAFT للفرق: البرومبتات المنظّمة مقابل الارتجالية', url: '/ar/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'العلامة التجارية في برومبتات النماذج اللغوية: ترميز الصوت والنبرة والمصطلحات', url: '/ar/prompt-engineering/your-brand-voice-ai' },
          { title: 'اختبار البرومبتات متعدد النماذج لإنشاء المحتوى', url: '/ar/prompt-engineering/multi-model-prompt-testing-workflows' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          { title: 'PromptQuorum: أداة المقارنة متعددة النماذج', url: 'https://www.promptquorum.com/features' },
          { title: 'إطار CRAFT', url: 'https://www.craftframework.dev/' },
          { title: 'الإرشادات التحريرية: HubSpot وSprout Social', url: 'https://www.hubspot.com/' },
        ],
      },
    },
  },

  ko: {
    freshness_tier: 'evergreen',
    theme: '워크플로우 및 자동화',
    heroImage: '/images/pe-for-content-teams-overview-hero-ko.png',
    title: '콘텐츠 팀을 위한 프롬프트 엔지니어링: 템플릿, 검토 흐름 및 품질 점검',
    seoTitle: '콘텐츠 팀을 위한 프롬프트 엔지니어링: 템플릿 및 검토',
    metaDescription: '콘텐츠 팀 프롬프트: 브랜드 보이스 인코딩, 5가지 재사용 가능한 템플릿(블로그, 소셜, 요약, SEO 메타, 이메일), 편집 검토 워크플로우, 품질 점수화.',
    ogDescription: '콘텐츠 팀 PE 가이드: 프롬프트에 브랜드 보이스를 인코딩하는 방법, 5가지 재사용 가능한 템플릿(블로그 초안, 소셜 포스트, 요약, SEO 메타, 이메일), 편집 검토 워크플로우 및 품질 점수화.',
    twitterDescription: '콘텐츠 팀을 위한 PE: 브랜드 보이스 인코딩, 5가지 재사용 가능한 템플릿, 편집 검토 흐름, 품질 점수화 체크리스트. 출력 요구사항을 사전에 정의하여 검토 주기를 단축하십시오.',
    intro: '프롬프트 엔지니어링을 도입한 콘텐츠 팀은 검토 주기를 단축합니다 — 낮은 품질의 AI 출력을 수용하는 것이 아니라, 생성 시작 전에 품질 요구사항을 프롬프트에 직접 인코딩함으로써 가능합니다. 이 가이드는 브랜드 보이스를 지정하는 방법, 표준화할 템플릿, 그리고 프롬프트 품질을 체계적으로 점수화하는 방법을 다룹니다.',
    leadAnswerBlock: '**콘텐츠 팀은 출력 요구사항 — 톤, 형식, 단어 수, 브랜드 제약 조건 — 을 프롬프트에 직접 인코딩함으로써 검토 주기를 단축합니다.** 콘텐츠 팀 PE에서 가장 흔한 실패는 품질 기준을 암묵적으로 남겨 두고 나중에 수동으로 검토하는 것입니다.',
    quickFacts: [
      '프롬프트에 품질 기준을 인코딩한 콘텐츠 팀은 사후에 수동으로 검토 기준을 적용하는 팀에 비해 검토 주기를 60% 단축합니다',
      '브랜드 보이스 인코딩에는 4가지 구성 요소가 필요합니다: 톤 설명자(형용사 3개), 어휘 목록(5~10개 용어), 금지 목록(피해야 할 단어), 참조 예시 2~3개',
      'CRAFT 프레임워크(Context, Role, Action, Format, Tone)를 모든 콘텐츠 프롬프트의 기반으로 사용하십시오 — 콘텐츠와 가장 관련성 높은 5가지 차원을 매핑합니다',
      '콘텐츠 채널마다 다른 프롬프트 템플릿이 필요합니다: 블로그(H1/H2 구조, 800~1200단어), LinkedIn(150~300단어, 헤더 없음), 이메일(제목 + 도입부 + 본문 + CTA, 150단어 이하)',
      '편집 검토는 3단계로 이루어집니다: 사실 정확성(저위험 콘텐츠는 건너뜀), 브랜드 준수, 최종 다듬기 — 배포 전에 적용할 단계를 정의하십시오',
      '프롬프트가 10회 테스트 실행에 걸쳐 각 기준에서 0~2점 척도 평균 1.5점 이상을 달성할 때만 배포하십시오',
    ],
    toc: [
      { label: '콘텐츠 팀 프롬프팅이 다른 이유는 무엇입니까?', anchor: 'content_team_challenges' },
      { label: '프롬프트에 브랜드 보이스를 인코딩하는 방법', anchor: 'brand_voice_encoding' },
      { label: '5가지 재사용 가능한 콘텐츠 프롬프트 템플릿', anchor: 'content_templates' },
      { label: 'AI 생성 콘텐츠를 위한 편집 검토 워크플로우', anchor: 'editorial_review' },
      { label: '콘텐츠 프롬프트를 위한 품질 점수화 체크리스트', anchor: 'quality_scoring' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '관련 읽기', anchor: 'related_reading' },
      { label: '출처', anchor: 'sources' },
    ],
    publishDate: '2026-05-02',
    readTime: '8분 읽기',
    educationalLevel: '중급',
    primaryTerm: '콘텐츠 팀을 위한 프롬프트 엔지니어링',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '콘텐츠 팀을 위한 프롬프트 엔지니어링: 템플릿, 검토 흐름 및 품질 점검',
      description: '콘텐츠 팀이 브랜드 보이스를 인코딩하고, 5가지 콘텐츠 유형에 대한 재사용 가능한 프롬프트 템플릿을 구축하며, 편집 검토 워크플로우를 운영하고, 프롬프트 품질을 체계적으로 점수화하는 방법.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'ko'),
      inLanguage: 'ko',
      keywords: ['프롬프트 엔지니어링', '콘텐츠 팀', '브랜드 보이스', '콘텐츠 템플릿', '편집 워크플로우', '품질 점수화'],
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Content Marketing' },
        { '@type': 'Thing', name: 'Editorial Workflow' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {
      key_takeaways: {
        title: '핵심 요점',
        isTldr: true,
        items: [
          '출력 요구사항 — 톤, 형식, 단어 수, 브랜드 제약 조건 — 을 생성 후 검토 기준이 아닌 프롬프트에 직접 인코딩하십시오.',
          '브랜드 보이스 인코딩에는 4가지 구성 요소가 필요합니다: 톤 설명자(형용사 3개), 어휘 목록(브랜드 용어 5~10개), 금지 목록(피해야 할 단어 5~10개), 참조 예시 2~3개.',
          'CRAFT 프레임워크(Context, Role, Action, Format, Tone)를 모든 콘텐츠 프롬프트의 기반으로 사용하십시오 — 콘텐츠 출력에 가장 관련성 높은 5가지 차원을 구성합니다.',
          '게시된 기사에는 3단계 편집 검토를 적용하십시오(사실 정확성 → 브랜드 준수 → 최종 다듬기; 소셜 포스트와 같은 저위험 콘텐츠는 1단계를 건너뜁니다).',
          '10회 테스트 실행에 걸쳐 5점 루브릭(작업 완료, 형식 준수, 브랜드 보이스 일치, 사실 정확성, CTA 정렬)의 평균 품질 점수가 1.5점 이상인 경우에만 프롬프트를 배포하십시오.',
        ],
      },
      content_team_challenges: {
        id: 'content-team-challenges',
        title: '콘텐츠 팀 프롬프팅이 다른 이유는 무엇입니까?',
        content: [
          '**콘텐츠 팀 프롬프팅은 품질 기준이 주관적이고 다중 이해관계자적이며 채널에 따라 다르기 때문에 개발자 프롬프팅과 다릅니다.** 개발자는 정확한 출력 형식에 대해 프롬프트를 테스트합니다. 콘텐츠 팀은 브랜드 지침, 편집 기준, 청중 기대치에 대해 프롬프트를 테스트합니다 — 이 기준들은 명시적으로 인코딩하지 않으면 일관되게 적용되지 않습니다.',
          '콘텐츠 팀 프롬프트 엔지니어링에 특유한 세 가지 도전:',
        ],
        items: [
          '**브랜드 보이스는 정확하게 지정하기 어렵습니다:** "친근한 톤으로 작성하세요"와 같은 일반적인 지침은 일관된 출력을 위해 너무 모호합니다. 효과적인 브랜드 보이스 인코딩에는 스타일 가이드의 구체적인 형용사, 선호 용어의 어휘 목록, 피해야 할 단어의 금지 목록, 그리고 맥락 내에서 목표 톤을 보여주는 참조 예시가 필요합니다.',
          '**출력 길이와 형식은 채널에 따라 다릅니다:** 블로그 초안에는 H1 + H2 구조와 800~1200단어가 필요합니다. LinkedIn 포스트에는 150~300단어와 H 태그 구조가 필요하지 않습니다. 이메일에는 제목 줄, 도입부, 본문, 150단어 이하의 CTA가 필요합니다. 각 채널에는 채널별 템플릿이 필요합니다 — "콘텐츠를 작성하세요"라는 일반적인 프롬프트가 아닙니다.',
          '**검토 워크플로우에는 여러 이해관계자가 참여합니다:** 콘텐츠 검토에는 일반적으로 작성자(사실 정확성), 브랜드 검토자(브랜드 준수), 편집자(최종 다듬기)가 참여합니다. 품질 기준을 암묵적으로 남겨 두는 프롬프트는 세 검토자 모두가 자신의 기준을 적용하도록 강요하여 일관되지 않은 피드백과 더 긴 수정 주기를 초래합니다.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: '프레임워크 결정',
            text: 'CRAFT 프레임워크(Context, Role, Action, Format, Tone)를 모든 콘텐츠 프롬프트의 기반으로 사용하십시오. CRAFT는 역할 정의와 출력 형식이 작업 설명만큼 중요한 창의적이고 콘텐츠 중심의 작업을 위해 특별히 설계되었습니다.',
          },
        ],
      },
      brand_voice_encoding: {
        id: 'brand-voice-encoding',
        title: '프롬프트에 브랜드 보이스를 인코딩하는 방법',
        content: [
          '**브랜드 보이스 인코딩에는 프롬프트에 4가지 구성 요소가 필요합니다: 톤 설명자, 어휘 목록, 금지 목록, 참조 예시.** 4가지 구성 요소를 모두 포함한 프롬프트는 인간 검토자가 평가했을 때 톤 형용사에만 의존하는 프롬프트보다 일관되게 더 나은 성과를 보입니다.',
          '4가지 필수 구성 요소:',
        ],
        items: [
          '**톤 설명자:** 브랜드 개성을 설명하는 스타일 가이드의 형용사 3개(예: "직접적, 실용적, 자신감 있는"). 이 형용사들은 브랜드 지침을 모델이 모든 문장에 적용할 수 있는 형태로 압축합니다.',
          '**어휘 목록:** 사용할 브랜드별 용어 5~10개 — 제품 이름, 선호 동사, 브랜드가 소통하는 방식을 정의하는 특징적인 구절(예: 개발자 중심 브랜드의 경우 "build, ship, iterate").',
          '**금지 목록:** 피해야 할 단어나 구절 5~10개 — 일반적으로 기업 전문 용어, 과대한 표현, 진부한 표현, 또는 경쟁사 용어(예: "innovative, leverage, seamless, game-changing" 피하기).',
          '**참조 예시:** 프롬프트에 직접 붙여넣기한 승인된 콘텐츠 샘플 2~3개. 이는 모델에게 추상적인 설명 대신 일치할 구체적인 패턴을 제공합니다. 목표 출력과 동일한 채널과 콘텐츠 유형의 예시를 선택하십시오.',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: '인코딩 테스트하기',
            text: '브랜드 보이스 인코딩이 있는 경우와 없는 경우 동일한 브리프를 실행한 후 인간 검토자가 브랜드 준수 측면에서 두 출력을 점수화하도록 하십시오. 인코딩이 점수를 최소 20% 개선하지 않는다면 인코딩 구성 요소를 수정해야 합니다 — 참조 예시가 잘못된 채널에서 왔거나 어휘 목록이 너무 일반적인 경우가 많습니다.',
          },
        ],
      },
      five_templates: {
        id: 'five-templates',
        title: '5가지 재사용 가능한 콘텐츠 프롬프트 템플릿',
        content: [
          '**5가지 콘텐츠 유형이 콘텐츠 팀 출력의 대부분을 차지합니다: 블로그 초안, 소셜 포스트, 콘텐츠 요약, SEO 메타 태그, 이메일.** 유형별로 하나의 템플릿을 표준화하면 불일치를 초래하는 작업별 프롬프트 즉흥 작성이 제거됩니다.',
        ],
        numberedItems: [
          '블로그 초안: role=콘텐츠 전략가, brief=[주제+청중+각도], format=[H1+H2 3개+결론], word_count=[목표], brand_voice=[톤 형용사 3개], tone_examples=[같은 채널의 승인된 샘플 2개]',
          '소셜 포스트: role=소셜 미디어 관리자, platform=[LinkedIn/X/Instagram], topic=[브리프], character_limit=[플랫폼 제한: LinkedIn 300, X 280, Instagram 2200], cta=[원하는 행동], brand_voice=[톤 형용사 3개]',
          '콘텐츠 요약: role=편집자, source=[여기에 콘텐츠 붙여넣기], output=[3줄 요약(임원용) + 280자 이하 트윗 길이 버전 1개], audience=[독자 역할], reading_level=[목표 학년 수준]',
          'SEO 메타: role=SEO 작성자, page_topic=[주제], primary_keyword=[키워드], title_max=60자, description_max=155자, include_keyword_in=[제목과 설명 모두], avoid=[수동태, 채움 구절]',
          '이메일: role=이메일 카피라이터, objective=[전환 목표], audience=[세그먼트], subject_line_options=[서로 다른 도입부를 가진 옵션 3개], body_structure=[도입부+가치 제안+CTA], word_count=[본문 150단어 이하]',
        ],
      },
      review_workflow: {
        id: 'review-workflow',
        title: 'AI 생성 콘텐츠를 위한 편집 검토 워크플로우',
        content: [
          '**3단계 편집 검토 프로세스는 각 검토자가 자신의 기준을 정의하도록 요구하지 않고 AI 생성 콘텐츠에 일관된 품질 기준을 적용합니다.** 3단계는 AI 생성 콘텐츠에서 가장 실패하기 쉬운 3가지 품질 차원에 매핑됩니다: 사실 정확성, 브랜드 준수, 작성 품질.',
          '3가지 검토 단계:',
        ],
        items: [
          '**1단계 — 사실 정확성(작성자):** 브리프를 제출한 사람이 사실 정확성을 위해 출력을 검토합니다. 확인 사항: 모든 제품 주장이 정확합니까? 통계와 데이터 포인트가 실제이고 적절히 귀속됩니까? 제3자 이름과 세부 정보가 정확합니까? 이 단계는 편집 전문성이 아닌 도메인 전문성이 필요합니다.',
          '**2단계 — 브랜드 준수(브랜드 검토자):** 브랜드 관리자 또는 수석 콘텐츠 편집자가 브랜드 보이스 인코딩 구성 요소와 비교하여 출력을 확인합니다: 톤 설명자와 일치합니까? 어휘 목록 용어를 사용하고 금지 목록 용어를 피합니까? 전반적인 어조가 참조 예시와 일치합니까?',
          '**3단계 — 최종 다듬기(편집자):** 편집자가 흐름, 전환, 가독성, CTA 효과성을 확인합니다. 이것이 문장 수준의 편집이 이루어지는 단계입니다.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: '1단계를 건너뛸 때',
            text: '사실적 주장을 하지 않는 저위험 콘텐츠의 경우 1단계(사실 정확성)를 건너뛰십시오: 이벤트를 알리는 소셜 캡션, 짧은 CTA, 제목 줄 옵션, 작성자가 이미 확인한 출처 문서에서 파생된 콘텐츠 요약. 제품, 성능 또는 제3자에 대한 사실적 주장을 포함하는 콘텐츠는 게시 전에 모든 3단계를 요구하십시오.',
          },
        ],
      },
      quality_scoring: {
        id: 'quality-scoring',
        title: '콘텐츠 프롬프트를 위한 품질 점수화 체크리스트',
        content: [
          '**10회 테스트 실행에 걸쳐 적용되는 5점 품질 점수화 체크리스트는 콘텐츠 프롬프트를 팀에 배포할지 여부를 결정하기 위한 통계적 임계값을 제공합니다.** 점수화 시스템이 없으면 프롬프트 배포 결정은 마지막 테스트 실행이 좋아 보였는지에 근거하게 됩니다 — 이는 신뢰하기에 너무 작은 샘플입니다.',
          '5가지 점수화 기준(실행당 0~2점으로 점수화):',
        ],
        items: [
          '**작업 완료(0~2점):** 출력이 브리프에 답합니까? 브리프가 다루어지지 않으면 0점, 부분적으로 다루어지면 1점, 요청된 모든 섹션과 각도를 포함하여 완전히 다루어지면 2점.',
          '**형식 준수(0~2점):** 출력이 지정된 구조와 일치합니까 — 올바른 제목 수준, 목표의 ±15% 내 단어 수, 올바른 수의 글머리 기호 또는 섹션?',
          '**브랜드 보이스 일치(0~2점):** 출력이 톤 설명자와 어휘 목록 용어를 사용하고 금지 목록 용어를 피합니까? 출력이 일반적으로 들리거나 금지된 구절을 사용하면 0점, 브랜드 인코딩과 일관되게 일치하면 2점.',
          '**사실 정확성(0~2점):** 출력의 모든 사실적 주장이 검증 가능하고 정확합니까? 검증되지 않은 주장이나 환각된 데이터가 있으면 0점, 모든 주장이 정확하거나 예시로 명확하게 표시되면 2점.',
          '**CTA/목표 정렬(0~2점):** 출력에 필요한 행동 촉구가 포함되어 있고 콘텐츠가 명시된 목표를 향해 이어집니까? CTA가 없거나 정렬되지 않으면 0점, 있고 효과적이면 2점.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: '배포 임계값',
            text: '10회 테스트 실행에 걸쳐 5가지 기준 전체의 평균 점수가 1.5점 이상(2.0점 만점)이면 프롬프트를 배포하십시오. 1.5점 미만의 점수는 추가적인 실행별 검토 부담 없이 프로덕션 사용에 안정적으로 사용하기에 너무 많은 부분적 또는 실패한 출력이 발생하고 있음을 의미합니다.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: '콘텐츠 팀은 품질 요구사항 — 톤, 형식, 단어 수, 브랜드 제약 조건 — 을 프롬프트에 직접 인코딩함으로써 검토 주기를 단축합니다. CRAFT 프레임워크(Context, Role, Action, Format, Tone)를 모든 콘텐츠 프롬프트의 기반으로 사용하십시오. 브랜드 보이스 인코딩에는 4가지 구성 요소가 필요합니다: 톤 형용사 3개, 어휘 목록 5~10개 용어, 금지 목록 5~10개 용어, 참조 예시 2~3개. 채널마다 다른 템플릿이 필요합니다: 블로그(H1/H2 구조와 함께 800~1200단어), LinkedIn(150~300단어, 헤더 없음), 이메일(제목 + 도입부 + 본문 + CTA, 150단어 이하). 게시된 콘텐츠에 대해 3단계 편집 검토를 실행하십시오(사실 정확성 → 브랜드 준수 → 최종 다듬기; 저위험 콘텐츠는 1단계를 건너뜁니다). 5점 루브릭(작업 완료, 형식 준수, 브랜드 보이스 일치, 사실 정확성, CTA 정렬)의 평균 점수가 10회 테스트 실행에 걸쳐 1.5점 이상에 도달할 때만 배포하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '콘텐츠 팀은 프롬프트 엔지니어링으로 AI 검토 주기를 어떻게 단축합니까?', a: '콘텐츠 팀은 품질 기준 — 톤, 형식, 단어 수, 브랜드 어휘, 금지 목록 — 을 생성 전에 프롬프트에 직접 인코딩함으로써 검토 주기를 단축합니다. 출력 요구사항이 명시적일 때 AI 생성 콘텐츠는 목표에 더 가깝게 도달하고 더 적은 수정 회차가 필요합니다.' },
          { q: 'CRAFT 프레임워크란 무엇이며 콘텐츠 팀은 언제 사용해야 합니까?', a: 'CRAFT는 Context(맥락), Role(역할), Action(행동), Format(형식), Tone(톤)의 약자입니다. 콘텐츠 출력에 가장 관련성 높은 다섯 가지 차원을 구성하기 때문에 창의적이고 콘텐츠 중심의 작업에 적합한 구조화된 프롬프트 프레임워크입니다. 브랜드 보이스, 형식 요구사항 또는 다중 이해관계자 검토가 포함된 콘텐츠 프롬프트의 기본 구조로 사용하십시오.' },
          { q: '브랜드 보이스 프롬프트에 온브랜드 예시가 몇 개나 필요합니까?', a: '프롬프트에 승인된 콘텐츠 샘플 2~3개를 포함하십시오. 2개 미만이면 모델에게 충분한 패턴 신호를 제공하지 못합니다. 3개 초과면 실제 작업에 사용 가능한 컨텍스트 창을 희석시킬 수 있습니다. 예시는 목표 채널과 콘텐츠 유형을 대표해야 합니다 — 이메일 브리프에 LinkedIn 예시를 사용하지 마십시오.' },
          { q: '콘텐츠 팀은 언제 사실 정확성 검토 단계를 건너뛰어야 합니까?', a: '사실적 주장이 없는 저위험 콘텐츠에 대해서만 사실 정확성 단계를 건너뛰십시오 — 이벤트를 알리는 소셜 미디어 캡션, 짧은 CTA, 또는 제목 줄 옵션과 같은 형식 전용 출력. 제품, 가격, 성능 또는 제3자에 대한 주장을 하는 모든 콘텐츠는 게시 전에 사실 정확성 확인이 필요합니다.' },
          { q: '여러 모델에서 일관되게 작동하는 콘텐츠 템플릿을 어떻게 설정합니까?', a: '각각 10회 이상의 테스트 실행으로 서로 다른 제공업체의 2~3개 모델에서 동일한 템플릿을 테스트하십시오. 5점 품질 점수화 루브릭을 사용하여 일관성을 평가하십시오. 모든 모델이 1.5점 이상을 달성하면 템플릿은 이식 가능합니다. 한 모델이 1.5점 미만으로 떨어지면 모델별 버전을 채택하는 대신 프롬프트를 수정하십시오.' },
          { q: '콘텐츠 프롬프트의 배포 임계값은 무엇입니까?', a: '10회 테스트 실행에 걸쳐 5가지 기준(작업 완료, 형식 준수, 브랜드 보이스 일치, 사실 정확성, CTA 정렬) 전체의 평균 점수가 1.5점 이상(0~2점 척도)이면 프롬프트를 배포하십시오. 1.5점 미만의 점수는 검토 부담 없이 프로덕션 사용에 너무 많은 부분적 또는 실패한 출력이 있음을 나타냅니다.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          { title: 'CRAFT 프레임워크: Context, Role, Action, Format, Target', url: '/ko/frameworks/craft' },
          { title: '프롬프트에 브랜드 보이스를 인코딩하는 방법', url: '/ko/prompt-engineering/your-brand-voice-ai' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          { title: 'OpenAI Content Generation Best Practices', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Guide to Writing Effective Prompts for Content', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Content Testing Platform', url: 'https://www.promptquorum.com/features' },
        ],
      },
    },
  },
};