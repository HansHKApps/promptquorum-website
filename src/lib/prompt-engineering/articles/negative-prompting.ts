// Auto-generated from src/lib/prompt-engineering/content.original.ts
// Slug: negative-prompting
// Generated: 2026-05-04T21:46:38.302Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Negative Prompting: Tell the AI What NOT to Do',
      intro: 'Negative prompting is a technique where you tell the model what it must avoid—content, style, structure, or behaviors—so outputs stay inside clear boundaries. It acts as a "guardrail layer" on top of your normal instructions.',
      seoTitle: 'Negative Prompting 2026: Guard Against Bad AI Outputs',
      metaDescription: 'Negative prompting tells AI what to avoid: content, style, structure, behaviors. Prevent unwanted outputs. Full technique guide with prompt examples.',
      publishDate: '2026-03-26',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
      readTime: '13 min read',
      next_refresh_due: '2026-11-03',
      educationalLevel: 'Intermediate',
      audience: 'Developers, content teams, and enterprise prompt engineers building AI guardrails',
      primaryTerm: 'Negative Prompting',
      aboutTopics: ['Negative Prompting', 'Prompt Engineering', 'AI Guardrails'],
      leadAnswerBlock: '**Negative prompting means adding explicit "do not" rules to a prompt: constrain content, style, structure, and behavior. Every AI failure you have seen can become a permanent guardrail. Pair 3–5 clear negative constraints with positive instructions for the tightest prompt specification.**',
      quickFacts: [
        'Negative prompting covers 4 dimensions: content ("no medical advice"), style ("no hype words"), structure ("no introduction"), and behavior ("never fabricate statistics")',
        'Prompts that pair positive and negative instructions reduce unwanted output patterns vs positive-only prompts — the effect is strongest when negatives are specific and paired with "instead, do X"',
        'The 3-5 rule: more than 5 negative constraints in a single prompt can confuse models and cause incomplete or hesitant outputs',
        'Hard language works: "must not", "never", "do not" outperforms "try to avoid", "prefer not to", "if possible skip"',
        'Negative prompting is the foundation of enterprise AI guardrails — every compliance checklist maps to a "do not" rule',
        'PromptQuorum enables reusable negative constraint blocks across all models — define once, enforce everywhere',
        'Negative constraints stick better when paired with a positive alternative: "Do not use hype words; focus on measurable benefits instead" outperforms "Do not use hype words" alone',
        'Guardrail ROI: A single well-written negative prompt prevents 50-100 manual edits across a team\'s output — invest in constraints upfront, recoup savings at scale',
        'Compliance by constraint: GDPR, HIPAA, SOC2 audits are easier with negative prompting baked into templates — violations are prevented in generation, not caught downstream',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'What Negative Prompting Is', anchor: 'what-is-negative-prompting' },
        { label: 'Why It Matters', anchor: 'why-it-matters' },
        { label: 'What You Can Constrain', anchor: 'what-you-can-constrain' },
        { label: 'Example: Without vs With Negative Prompting', anchor: 'example' },
        { label: 'When to Use Negative Prompting', anchor: 'when-to-use' },
        { label: 'How to Use Negative Prompting', anchor: 'how-to-use' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Negative Prompting: Tell the AI What NOT to Do',
        description: 'What negative prompting is, why it matters, and how to use explicit "do not" rules to keep AI outputs inside safe, on-brand boundaries.',
        datePublished: '2026-03-26',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/negative-prompting?lang=en',
        inLanguage: 'en',
        keywords: ['negative prompting', 'prompt engineering', 'guardrails', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Guardrails' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      sections: {
        whatIsNegativePrompting: {
          title: 'What Negative Prompting Is',
          content: [
            '**Negative prompting means adding explicit "do not" rules to your prompts alongside what you want the model to do.** Instead of only describing the target output, you also specify unwanted topics, tones, formats, or mistakes.',
            'These negative instructions can cover banned phrases, prohibited content categories, off-limits opinions, or simply styles you do not want (for example "no jokes," "no emojis," or "avoid hype words"). The clearer the "do not" rules, the easier it is for the model to stay aligned.',
          ],
        },
        whyItMatters: {
          title: 'Why Negative Prompting Matters',
          content: [
            '**Negative prompting matters because real-world outputs are constrained not just by goals, but by limits—brand, legal, safety, and quality constraints.** A good result is often "correct and within boundaries," not just "useful."',
            'Negative instructions help you:',
          ],
          items: [
            'Prevent specific failure modes you have already seen, such as overselling, speculation, or unwanted disclaimers.',
            'Enforce brand and tone rules directly in the prompt, like avoiding jargon or banned adjectives.',
            'Reduce manual editing, since many common corrections can be preempted by clear "do not" guidance.',
          ],
        },
        useNote: {
          content: [
            'Used well, negative prompting turns prior mistakes into reusable guardrails.',
          ],
        },
        whatYouCanConstrain: {
          title: 'What You Can Constrain With Negative Prompts',
          content: [
            '**You can apply negative prompting to content, style, structure, and behavior.** The goal is to be specific enough that the model knows exactly what to avoid.',
            'Common negative constraints:',
          ],
          items: [
            'Content: "Do not include medical advice," "do not mention competitors," "do not provide legal conclusions."',
            'Style: "Do not use hype words like "revolutionary" or "game-changing"," "no emojis," "avoid sarcasm."',
            'Structure: "Do not add an introduction section," "do not use numbered lists," "do not include a conclusion."',
            'Behavior: "Do not fabricate statistics," "if you are unsure, say you are unsure instead of guessing."',
          ],
        },
        combiningNote: {
          content: [
            'Combining positive and negative instructions gives you a much tighter prompt specification.',
          ],
        },
        example: {
          title: 'Example: Without vs With Negative Prompting',
          content: [
            '**The effect of negative prompting becomes clear when you compare a generic prompt with one that encodes explicit "do not" rules.** Here is a product description example.',
            '**[Bad Prompt]**',
            '"Write a product description for our new analytics dashboard."',
            '**[Good Prompt]**',
            '"You are a B2B product marketer. Task: Write a product description for our new analytics dashboard targeted at operations managers. Constraints (negative prompting): Do not use hype words such as "revolutionary", "disruptive", or "game-changing". Do not mention competitors or compare us to other tools. Do not promise future features; describe only what exists today. Do not exceed 180 words. Output format: 1 short paragraph for the overview, followed by 3 bullet points for key benefits."',
            'The "good" version encodes known pitfalls (hype, speculation, comparisons) directly into the instructions, reducing the need for manual clean-up.',
          ],
        },
        whenToUse: {
          title: 'When to Use Negative Prompting',
          content: [
            '**You should use negative prompting whenever you have clear examples of what you never want to see again.** It is especially helpful in repeatable workflows where the same mistakes keep reappearing.',
            'Typical use cases:',
          ],
          items: [
            'Customer communication where tone, claims, and promises must stay within strict guidelines.',
            'Regulated contexts (finance, health, legal) where certain kinds of advice or wording must be avoided.',
            'Internal documentation or reports that must not include confidential details, personal data, or speculation.',
            'Public-facing content where you want to avoid sensitive topics, political opinions, or controversial language.',
          ],
        },
        productionNote: {
          content: [
            'For quick, low-risk experiments, you can keep negative prompting light. As prompts mature into production workflows, your list of "do not" rules usually grows.',
          ],
        },
        inPromptQuorum: {
          title: 'Negative Prompting in PromptQuorum',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool where negative prompting can be baked into reusable frameworks instead of retyped each time.** You can define standard negative constraints once and attach them to many tasks.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Add negative prompting blocks (for example "banned phrases," "forbidden content," "style restrictions") to frameworks like SPECS, RTF, or CRAFT so they are always applied.',
            'Maintain shared lists of "do not" rules for your brand or team, ensuring consistent guardrails across all prompts and models.',
            'Run the same negatively constrained prompt across different models to see which provider adheres best to your boundaries.',
          ],
        },
        pqConversion: {
          content: [
            'By treating negative prompting as part of your prompt architecture, PromptQuorum helps you convert past mistakes into durable, reusable constraints.',
          ],
        },

        howToStart: {
          title: 'How to Use Negative Prompting',
          numberedItems: [
            '**Identify what you don\'t want in the output: specific words, tones, styles, or approaches.** Example: \'Do not use marketing buzzwords. Do not make promises. Do not reference competitors.\'',
            '**State negatives explicitly using \'do not,\' \'must not,\' \'never\' language.** Soft negatives like \'avoid if possible\' are less effective. Be direct: \'Never use the words \"disrupt,\" \"game-change,\" or \"AI-powered.\"\'',
            '**Provide negative examples: show the model what you explicitly don\'t want.** Example: \'Don\'t write like this: \"Unlock explosive growth with our AI solution.\" Don\'t write like this: \"Our cutting-edge platform uses machine learning.\" Write like this: [provide positive example].\'',
            '**Combine positive and negative guidance.** Don\'t just say what to avoid—also say what to do instead. Example: \'Do not use hype language. Instead, focus on specific, measurable benefits.\'',
            '**Use negative prompting sparingly—it can sometimes confuse the model.** Positive guidance (\'write clearly and technically\') often works better than heavy negatives (\'don\'t be vague, don\'t simplify, don\'t omit details\'). Balance both approaches.',
          ],
        },
        calloutBoxes: {
          title: 'Key Callouts',
          id: 'callouts',
          callouts: [
            {
              type: 'warning',
              label: 'Guardrails Are Not Policies',
              text: 'Negative prompting is a technical control, not a substitute for policy. It prevents some failures but cannot replace human judgment, legal review, or compliance processes. Use it as one layer of many, not the only layer.',
            },
            {
              type: 'pro-tip',
              label: 'Pair Every "Do Not" With a "Do This Instead"',
              text: 'Unpaired negatives confuse models ("Don\'t be vague"). Paired negatives guide them ("Don\'t be vague; be specific with dates, numbers, and examples"). Every constraint works better with a positive alternative.',
            },
            {
              type: 'key-point',
              label: '3-5 Constraints Max—More Breaks the Model',
              text: 'Beyond 5-6 negative constraints, models start second-guessing themselves or ignoring constraints entirely. Heavy constraint lists (7+) can produce overly cautious, incomplete, or evasive outputs. Stay focused.',
            },
            {
              type: 'did-you-know',
              label: 'Compliance Teams Love Reusable Guardrails',
              text: 'Once you codify regulatory, brand, or safety constraints as reusable negative prompting blocks, audits become easier. You can prove that every output was processed through the same guardrails — that is audit gold.',
            },
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes With Negative Prompting',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Writing too many negative constraints',
              problem: 'More than 5-6 "do not" rules overwhelms the model. It starts second-guessing itself, ignoring some constraints, or producing overly cautious output.',
              fix: 'Limit to 3-5 focused constraints per prompt. Group related rules: "Never use hype words (disrupt, revolutionary, game-changing)" counts as one constraint.',
            },
            {
              mistake: 'Pairing negatives without positive alternatives',
              problem: 'Saying "don\'t be vague" without saying "instead, be specific with dates and numbers" leaves the model guessing.',
              fix: 'Always pair: "Do not use vague language. Instead, include specific dates, numbers, or measurable outcomes."',
            },
            {
              mistake: 'Using soft negative language',
              problem: '"Try to avoid," "prefer not to," "if possible skip" are interpreted as suggestions, not rules. Models ignore them.',
              fix: 'Use hard negatives: "must not," "never," "do not," "forbidden." Models follow hard language.',
            },
            {
              mistake: 'Setting unachievable constraints',
              problem: '"Never mention the competitor" when a comparison is necessary creates impossible expectations.',
              fix: 'Make constraints specific and realistic. Example: "Do not name competitors; instead, reference capabilities."',
            },
            {
              mistake: 'Not testing constraints across models',
              problem: 'GPT-4o, Claude, and Gemini have different compliance sensitivities. A constraint that works perfectly on one may be ignored or over-applied on another.',
              fix: 'Test your negative prompts on all target models. Document compliance differences. Adjust constraints for each model if needed.',
            },
          ],
        },
        faqSection: {
          title: 'Frequently Asked Questions',
          id: 'faq',
          faqs: [
            {
              q: 'What is negative prompting?',
              a: 'Negative prompting means adding explicit "do not" rules to a prompt alongside positive instructions. These rules constrain content (no medical advice), style (no hype words), structure (no introduction), or behavior (never fabricate data). Each rule acts as a guardrail preventing known failure modes.',
            },
            {
              q: 'Does negative prompting work with all AI models?',
              a: 'Yes — GPT-4o, Claude Opus/Sonnet, and Gemini Pro all respond to hard negative constraints ("must not," "never," "do not"). Compliance varies: format bans are sometimes inconsistently applied on long outputs. Test your specific constraints with your target models.',
            },
            {
              q: 'How many negative constraints should I use?',
              a: 'Limit to 3-5 per prompt. More than 5-6 can confuse models, cause ignored constraints, or produce overly cautious output. Group related rules: "Never use hype words (disruptive, revolutionary, game-changing)" counts as one constraint.',
            },
            {
              q: 'Is negative prompting the same as content filtering?',
              a: 'No. Content filtering detects and blocks unwanted output after generation. Negative prompting prevents unwanted output during generation by telling the model upfront what to avoid. Filtering happens downstream; negative prompting prevents the problem before it starts.',
            },
            {
              q: 'Can I use negative prompting for compliance (GDPR, HIPAA)?',
              a: 'Yes. Embedding compliance constraints into templates as negative rules creates an audit trail: every output was processed through the same guardrails. This is valuable for audits, but negative prompting alone does not replace legal review or Data Processing Agreements.',
            },
            {
              q: 'What happens if I pair negative prompting with few-shot examples?',
              a: 'Combining works well. Show positive examples of what you want, then add negative constraints for what to avoid. The examples anchor the model; the constraints keep it from drifting. Use both together for tightest control.',
            },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          id: 'related-reading',
          items: [
            { title: 'Prompt Injection and Security', url: '/prompt-engineering/prompt-injection-and-security?lang=en' },
            { title: 'Constrained Prompting', url: '/prompt-engineering/constrained-prompting?lang=en' },
            { title: 'How to Test Prompts Across Models', url: '/prompt-engineering/how-to-test-prompts-across-models?lang=en' },
            { title: 'Single Step Prompt Method', url: '/prompt-engineering/single-prompt-method?lang=en' },
          ],
        },
        sources: {
          title: 'Sources',
          id: 'sources',
          items: [
            'Ye, J., et al. (2023). "In-Context Learning with Long-Context Models: An In-Depth Exploration." arXiv:2310.06835. https://arxiv.org/abs/2310.06835 — How models process and apply constraints across long inputs.',
          ],
        },
      },
    },
    de: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Negatives Prompting: Der KI Sagen, Was Sie NICHT Tun Soll',
  intro: 'Negatives Prompting ist eine Technik, um explizit zu definieren, was das Modell vermeiden sollte—Inhalte, Ton, Struktur oder Verhalten—um die Ergebnisse in klaren Grenzen zu halten. Es funktioniert als „Schutzschicht" oberhalb Ihrer Standard-Anweisungen.',
  publishDate: '2026-03-26',
  dateModified: '2026-05-04',
  readTime: '6 min Lesezeit',
  next_refresh_due: '2026-11-03',
  metaDescription: 'Negatives Prompting: „Nicht-Tun"-Regeln für Verbotswörter, Themen und Formate. 4-Kategorien-Modell mit Beispielen und Modellvergleich für GPT, Claude und Gemini.',
  primaryTerm: 'Negatives Prompting',
  seoTitle: 'Negatives Prompting 2026: Explizite Regeln für KI-Kontrolle',
  educationalLevel: 'Intermediate',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Negatives Prompting: Der KI Sagen, Was Sie NICHT Tun Soll',
    description: 'Definition, Bedeutung und Implementierung des Negatives Prompting zur Wahrung von Sicherheits-, Compliance- und Brand-Alignment-Grenzen bei KI-Ausgaben.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-04',
    url: 'https://www.promptquorum.com/de/prompt-engineering/negative-prompting',
    inLanguage: 'de',
    keywords: ['Negatives Prompting', 'Prompt-Engineering', 'Schutzmaßnahmen', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt-Engineering' },
      { '@type': 'Thing', name: 'Große Sprachmodelle' },
      { '@type': 'Thing', name: 'Digitale Schutzmaßnahmen' },
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
  },
  sections: {
    whatIsNegativePrompting: {
      title: 'Was ist Negatives Prompting?',
      content: [
        '**Negatives Prompting bedeutet, explizite „Nicht-Tun"-Regeln zu Ihren Prompts hinzuzufügen, parallel zu dem, was Sie vom Modell erwarten.** Anstatt nur das gewünschte Ergebnis zu beschreiben, legen Sie auch fest, welche Themen, Töne, Formate oder Fehler zu vermeiden sind.',
        'Diese negativen Anweisungen können verbotene Begriffe, unzulässige Inhaltskategorien, tabuisierte Meinungen oder einfach unerwünschte Stile abdecken (beispielsweise „keine Witze", „keine Emojis", „keine Marketingsprache"). Je expliziter Ihre „Nicht-Tun"-Regeln, desto leichter bleibt das Modell ausgerichtet.',
      ],
    },
    whyItMatters: {
      title: 'Warum Negatives Prompting Wichtig Ist',
      content: [
        '**Negatives Prompting ist wichtig, weil reale Ausgaben nicht nur durch Ziele, sondern durch Grenzen begrenzt werden—Brand-, rechtliche, Sicherheits- und Qualitätsgrenzen.** Ein gutes Ergebnis ist oft „korrekt UND an die Grenzen gebunden", nicht einfach „nützlich".',
        'Negatives Prompting ermöglicht es Ihnen:',
      ],
      items: [
        'Spezifische bereits beobachtete Fehler zu verhindern: Überverkauf, Spekulation, unnötige Haftungsausschlüsse.',
        'Brand- und Tonregeln direkt im Prompt zu erzwingen, indem Sie Fachjargon oder verbotene Adjektive vermeiden.',
        'Manuelle Überarbeitung zu reduzieren, da viele häufige Korrektionen durch explizites negatives Prompting vorweggenommen werden können.',
      ],
    },
    useNote: {
      content: [
        'Richtig umgesetzt wandelt Negatives Prompting frühere Fehler in wiederverwendbare und dauerhafte Schutzmaßnahmen um.',
      ],
    },
    whatYouCanConstrain: {
      title: 'Was Sie Mit Negativem Prompting Einschränken Können',
      content: [
        '**Sie können Negatives Prompting auf Inhalte, Ton, Struktur und Verhalten anwenden.** Das Ziel ist, spezifisch genug zu sein, damit das Modell genau weiß, was zu vermeiden ist.',
        'Übliche negative Einschränkungen:',
      ],
      items: [
        'Inhalt: „Keine medizinischen Ratschläge einschließen", „keine Mitbewerber erwähnen", „keine Rechtsmeinung abgeben".',
        'Ton: „Keine Hype-Begriffe wie \'revolutionär\' oder \'disruptiv\'", „keine Emojis", „Sarkasmus vermeiden".',
        'Struktur: „Keine Einleitung hinzufügen", „keine nummerierten Listen verwenden", „keine Schlussfolgerung einschließen".',
        'Verhalten: „Keine erfundenen Statistiken erfinden", „bei Unsicherheit, Unsicherheit zugeben statt zu raten".',
      ],
    },
    combiningNote: {
      content: [
        'Die Kombination positiver und negativer Anweisungen ergibt eine viel straffere Prompt-Spezifikation.',
      ],
    },
    zusammenfassung: {
      title: 'Zusammenfassung: Negatives Prompting im Überblick',
      content: [
        'Negatives Prompting ist eine grundlegende Technik zur Steuerung von KI-Ausgaben durch explizite „Nicht-Tun"-Regeln. Im Gegensatz zu positiven Anweisungen (die sagen, was zu tun ist) definieren negative Anweisungen, was zu vermeiden ist—und sind oft genau so wirksam. In der Praxis arbeiten positive und negative Prompts zusammen: Sie geben Kontext und Ziele vor, während negative Grenzen setzen. Für regelmäßig wiederholte Aufgaben (Kundenkommunikation, interne Berichte, öffentliche Inhalte) kann Negatives Prompting dazu beitragen, Fehler zu verhindern, bevor sie entstehen. Mit PromptQuorum können Sie diese Regeln einmal definieren und über alle Modelle und Aufgaben hinweg anwenden.',
      ],
    },
    example: {
      title: 'Beispiel: Ohne und Mit Negativem Prompting',
      content: [
        '**Die Auswirkung des Negatives Prompting wird deutlich, wenn Sie einen generischen Prompt mit einem vergleichen, der explizite „Nicht-Tun"-Regeln enthält. Hier ist ein Beispiel aus dem deutschen Geschäftskontext.**',
        '**[Schwacher Prompt]**',
        '„Schreibe eine Produktbeschreibung für unser neues Analyse-Dashboard für unsere deutschen Kunden."',
        '**[Besserer Prompt]**',
        '„Sie sind ein B2B-Produktmanager für deutschsprachige Märkte. Aufgabe: Schreiben Sie eine Produktbeschreibung für unser neues Analyse-Dashboard, das auf Betriebsleiter in DACH-Unternehmen abzielt. Einschränkungen (Negatives Prompting): Verwenden Sie keine Marketing-Begriffe wie \'revolutionär\', \'disruptiv\' oder \'bahnbrechend\'. Erwähnen Sie keine Konkurrenzprodukte und vergleichen Sie uns nicht mit anderen Tools. Versprechen Sie keine zukünftigen Funktionen; beschreiben Sie nur, was heute existiert. Bleiben Sie unter 180 Wörtern. Format: 1 kurzer Absatz für die Übersicht, gefolgt von 3 Stichpunkten für die wichtigsten Vorteile."',
        'Diese „bessere" Version kodiert bekannte Fallstricke (Überverkauf, Spekulation, Vergleiche) direkt in den Anweisungen ein und reduziert den Bedarf für manuelle Überarbeitung.',
      ],
    },
    whenToUse: {
      title: 'Wann Negatives Prompting Verwenden',
      content: [
        '**Verwenden Sie Negatives Prompting, wenn Sie klare Beispiele haben, was Sie nie wieder sehen möchten.** Es ist besonders nützlich in wiederholbaren Workflows, wo die gleichen Fehler immer wieder auftauchen.',
        'Typische Anwendungsfälle:',
      ],
      items: [
        'Kundenkommunikation, wo Ton, Aussagen und Zusagen an strenge Richtlinien gebunden sein müssen.',
        'Regulierte Kontexte (Finanzen, Gesundheit, Recht), wo bestimmte Arten von Ratschlägen oder Formulierungen vermieden werden müssen.',
        'Interne Dokumentation oder Berichte, die keine vertraulichen Details, persönliche Daten oder Spekulationen enthalten dürfen.',
        'Öffentliche Inhalte, wo Sie sensible Themen, politische Meinungen oder kontroverse Sprache vermeiden möchten.',
        'Compliance-Dokumentation und Regulatory Filings in DACH-Unternehmen, wo gesetzliche und normative Vorgaben in jedes Wort eingearbeitet werden müssen.',
      ],
    },
    productionNote: {
      content: [
        'Bei schnellen, risikoarmen Experimenten können Sie Negatives Prompting leicht halten. Wenn Prompts in produktive Workflows übergehen, wächst die Liste der „Nicht-Tun"-Regeln normalerweise.',
      ],
    },
    inPromptQuorum: {
      title: 'Negatives Prompting in PromptQuorum',
      content: [
        '**PromptQuorum ist ein Multi-Modell-Dispatch-Tool, bei dem Negatives Prompting in wiederverwendbare Frameworks integriert werden kann, statt es jedes Mal neu zu schreiben.** Sie definieren Standard-Negative-Constraints einmal und können sie auf viele Aufgaben anwenden.',
        'Mit PromptQuorum können Sie:',
      ],
      items: [
        'Negative-Prompting-Blöcke (z.B. „verbotene Begriffe", „unzulässiger Inhalt", „Stilbeschränkungen") zu Frameworks wie SPECS (S — Umfang | P — Zweck | E — Beispiele | C — Constraints | S — Spezifikation), RTF (R — Rolle | T — Aufgabe | F — Format) oder CRAFT hinzufügen, damit sie sich automatisch anwenden.',
        'Gemeinsame Listen von „Nicht-Tun"-Regeln für Ihre Brand oder Ihr Team pflegen und konsistente Schutzmaßnahmen über alle Prompts und Modelle hinweg sicherstellen.',
        'Denselben negativ constraints Prompt über verschiedene Modelle hinweg ausführen, um zu sehen, welcher Provider sich am besten an Ihre Grenzen hält.',
      ],
    },
    pqConversion: {
      content: [
        'Wenn Sie Negatives Prompting als Teil Ihrer Prompt-Architektur behandeln, hilft Ihnen PromptQuorum, vergangene Fehler in dauerhafte, wiederverwendbare Constraints umzuwandeln.',
      ],
    },
    howToStart: {
      title: 'Wie Sie Negatives Prompting Einsetzen',
      numberedItems: [
        '**Identifizieren Sie, was Sie in der Ausgabe nicht sehen möchten: spezifische Wörter, Töne, Stile oder Ansätze.** Beispiel: „Verwenden Sie keine Marketing-Begriffe. Machen Sie keine Zusagen. Referenzieren Sie keine Konkurrenten."',
        '**Drücken Sie Negative explizit aus, indem Sie „nicht", „darf nicht" oder „niemals" verwenden.** Weiche Formulierungen wie „versuchen zu vermeiden" sind weniger wirksam. Seien Sie direkt: „Verwenden Sie niemals die Wörter \'disruptiv\', \'revolutionär\' oder \'KI-gesteuert\'."',
        '**Geben Sie negative Beispiele an: zeigen Sie dem Modell, was Sie explizit nicht möchten.** Beispiel: „Schreiben Sie nicht so: \'Exponentielles Wachstum mit unserer KI-Lösung.\' Schreiben Sie nicht so: \'Unsere Spitzenplattform nutzt maschinelles Lernen.\' Schreiben Sie stattdessen: [positives Beispiel]."',
        '**Kombinieren Sie positive und negative Anleitung.** Sagen Sie nicht nur, was zu vermeiden ist—sagen Sie auch, was stattdessen zu tun ist. Beispiel: „Verwenden Sie keine Marketing-Sprache. Konzentrieren Sie sich auf spezifische, messbare Vorteile."',
        '**Verwenden Sie Negatives Prompting sparsam—es kann das Modell manchmal verwirren.** Positive Anleitung („schreiben Sie klar und technisch") funktioniert oft besser als schweres negatives Prompting („sei nicht vage, vereinfache nicht, lass keine Details weg"). Balancieren Sie beide Ansätze.',
      ],
    },
    zusatzFaqs: {
      title: 'Häufig Gestellte Fragen zum Negatives Prompting in DACH',
      content: [
        'Zwei zusätzliche Fragen zu DSGVO-Compliance und Enterprise-Herausforderungen:',
      ],
      faqs: [
        {
          q: 'Wie stelle ich sicher, dass mein Negatives Prompting datenschutzkonform ist?',
          a: 'DSGVO-Konformität bei Negatives Prompting bedeutet, dass Sie sensible personenbezogene Daten nicht in die negativen Regeln selbst einbeziehen sollten. Verwenden Sie stattdessen abstrakte Kategorien (z.B. „entfernen Sie alle Kundennamen und E-Mail-Adressen" statt „niemals Max Mustermann@example.de erwähnen"). Dokumentieren Sie Ihre negativen Constraints und deren Zweck in Ihrer Datenschutzerklärung. Wenn Sie PromptQuorum verwenden, stellen Sie sicher, dass Logs mit sensiblen Daten entsprechend geschützt sind.',
        },
        {
          q: 'Welche Herausforderungen gibt es beim Negatives Prompting in DACH-Unternehmen?',
          a: 'DACH-Unternehmen (Deutschland, Österreich, Schweiz) stehen vor besonderen Herausforderungen: (1) Rechtliche Anforderungen sind streng und regional unterschiedlich—Negatives Prompting muss diese nuanciert erfassen. (2) Compliance-Dokumentation ist umfangreich; die Constraints müssen revisionssicher sein. (3) Sprachliche Präzision ist kritisch—German-speaking Nutzer erwarten exakte Formulierungen, keine Vereinfachungen. (4) Große Enterprise-Organisationen benötigen zentrale Templates für Constraints, um konsistente Standards über Teams hinweg zu gewährleisten. PromptQuorum adressiert diese durch wiederverwendbare Constraint-Sets und Audit-Trails.',
        },
      ],
    },
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'de',
    name: 'Wie Sie Negatives Prompting Einsetzen',
    totalTime: 'PT8M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Identifizieren Sie, was Sie nicht sehen möchten', text: 'Identifizieren Sie, was Sie in der Ausgabe nicht sehen möchten: spezifische Wörter, Töne, Stile oder Ansätze. Beispiel: „Verwenden Sie keine Marketing-Begriffe. Machen Sie keine Zusagen. Referenzieren Sie keine Konkurrenten."' },
      { '@type': 'HowToStep', position: 2, name: 'Drücken Sie Negative explizit aus', text: 'Drücken Sie Negative explizit aus, indem Sie „nicht", „darf nicht" oder „niemals" verwenden. Weiche Formulierungen wie „versuchen zu vermeiden" sind weniger wirksam. Seien Sie direkt: „Verwenden Sie niemals die Wörter \'disruptiv\', \'revolutionär\' oder \'KI-gesteuert\'."' },
      { '@type': 'HowToStep', position: 3, name: 'Geben Sie negative Beispiele an', text: 'Geben Sie negative Beispiele an: zeigen Sie dem Modell, was Sie explizit nicht möchten. Beispiel: „Schreiben Sie nicht so: \'Exponentielles Wachstum mit unserer KI-Lösung.\' Schreiben Sie nicht so: \'Unsere Spitzenplattform nutzt maschinelles Lernen.\' Schreiben Sie stattdessen: [positives Beispiel]."' },
      { '@type': 'HowToStep', position: 4, name: 'Kombinieren Sie positive und negative Anleitung', text: 'Kombinieren Sie positive und negative Anleitung. Sagen Sie nicht nur, was zu vermeiden ist—sagen Sie auch, was stattdessen zu tun ist. Beispiel: „Verwenden Sie keine Marketing-Sprache. Konzentrieren Sie sich auf spezifische, messbare Vorteile."' },
      { '@type': 'HowToStep', position: 5, name: 'Verwenden Sie Negatives Prompting sparsam', text: 'Verwenden Sie Negatives Prompting sparsam—es kann das Modell manchmal verwirren. Positive Anleitung („schreiben Sie klar und technisch") funktioniert oft besser als schweres negatives Prompting („sei nicht vage, vereinfache nicht, lass keine Details weg"). Balancieren Sie beide Ansätze.' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'de',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Negatives Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Negatives Prompting bedeutet, explizite „Nicht-Tun"-Regeln zu Ihren Prompts hinzuzufügen, parallel zu dem, was Sie vom Modell erwarten. Diese Regeln beschränken Inhalte (keine medizinischen Ratschläge), Ton (keine Hype-Begriffe), Struktur (keine nummerierten Listen) oder Verhalten (nie erfundene Statistiken). Jede Regel wirkt als Schutzschicht gegen bekannte Fehler.' } },
      { '@type': 'Question', name: 'Funktioniert Negatives Prompting mit allen KI-Modellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GPT-4o/4.5, Claude Sonnet/Opus und Gemini Pro reagieren auf harte Negative („darf nicht", „niemals", „nicht"). Die Einhaltung variiert nach Modell und Constraint-Typ: Formatverbote werden manchmal bei langen Outputs von Gemini Pro inkonsistent angewendet. Testen Sie Ihre spezifischen Constraints mit Ihrer aktuellen Modellversion.' } },
      { '@type': 'Question', name: 'Wie viele negative Constraints sollte ich verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Begrenzen Sie sich auf 3–5 pro Prompt. Mehr als 5–6 Negative können Modelle verwirren, was zu ignorierten Regeln oder zögerlichen Outputs führt. Gruppieren Sie verwandte Regeln: „Verwenden Sie keine Hype-Wörter (revolutionär, disruptiv, bahnbrechend)" zählt als eine Einschränkung.' } },
      { '@type': 'Question', name: 'Ist Negatives Prompting dasselbe wie Content Filtering?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Content Filtering ist eine externe Sicherheitsebene, die bestimmte Outputs unabhängig von Prompts blockiert. Negatives Prompting ist eine In-Prompt-Technik, die die Generierung formt. Sie ergänzen sich: Filter handhaben Sicherheitsverstöße; Negatives Prompting handhabe Marke, Ton und domänenspezifische Grenzen.' } },
      { '@type': 'Question', name: 'Kann ich Negatives Prompting für kreative Aufgaben verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Für kreative Arbeiten verhindert Negatives Prompting generische Phrasen („keine Klischees"), begrenzt Strukturwahl („keine Drei-Akt-Struktur") oder schließt spezifische Referenzen aus („keine Kriegsmetaphern"). Wenden Sie dieselbe 3–5-Regel an — zu viele Negative schränken die kreative Reichweite ein.' } },
      { '@type': 'Question', name: 'Hilft Negatives Prompting gegen Halluzinationen?', acceptedAnswer: { '@type': 'Answer', text: 'Es reduziert spezifische Halluzinationstypen, wenn genau begrenzt. „Zitieren Sie keine Quellen, wenn Sie nicht sicher sind" und „Sagen Sie, wenn Sie unsicher sind, statt zu raten" reduzieren Halluzinationen bei bestimmten Fehlern. Sie eliminieren das Halluzinationsrisiko nicht vollständig — nutzen Sie Output-Verifikation für hochriskante Fakten.' } },
      { '@type': 'Question', name: 'Gibt es einen Unterschied zwischen Text- und Bild-KI Negatives Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Bei Bildgenerierung (DALL-E, Stable Diffusion, Midjourney) ist Negatives Prompting ein formales separates Parameterfeld. Bei Text-LLMs ist Negatives Prompting direkt als „Nicht-Tun"-Regeln in den Prompt-Text eingebettet. Dieses Handbuch behandelt Text-LLM Negatives Prompting.' } },
      { '@type': 'Question', name: 'Wie teste ich, ob meine negativen Constraints funktionieren?', acceptedAnswer: { '@type': 'Answer', text: 'Führen Sie denselben Prompt 3–5 mal aus und überprüfen Sie, ob begrenzte Elemente erscheinen. Testen Sie für kritische Constraints über mehrere Modelle mit PromptQuorum Multi-Modell-Dispatch. Wenn ein Modell eine Regel konsistent verletzt, verstärken Sie die Formulierung von „vermeiden" zu „darf nicht" oder „niemals".' } },
      { '@type': 'Question', name: 'Wie stelle ich sicher, dass mein Negatives Prompting datenschutzkonform ist?', acceptedAnswer: { '@type': 'Answer', text: 'DSGVO-Konformität bei Negatives Prompting bedeutet, dass Sie sensible personenbezogene Daten nicht in die negativen Regeln selbst einbeziehen sollten. Verwenden Sie stattdessen abstrakte Kategorien (z.B. „entfernen Sie alle Kundennamen und E-Mail-Adressen"). Dokumentieren Sie Ihre Constraints und deren Zweck in Ihrer Datenschutzerklärung. Stellen Sie sicher, dass Logs mit sensiblen Daten geschützt sind.' } },
      { '@type': 'Question', name: 'Welche Herausforderungen gibt es beim Negatives Prompting in DACH-Unternehmen?', acceptedAnswer: { '@type': 'Answer', text: 'DACH-Unternehmen stehen vor besonderen Herausforderungen: (1) Rechtliche Anforderungen sind streng und regional unterschiedlich. (2) Compliance-Dokumentation ist umfangreich. (3) Sprachliche Präzision ist kritisch. (4) Große Organisationen benötigen zentrale Constraint-Templates für Konsistenz über Teams. PromptQuorum adressiert diese durch wiederverwendbare Constraint-Sets und Audit-Trails.' } },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'de',
    name: 'Negatives vs Positives Prompting: Effektivitätsvergleich',
    numberOfItems: 4,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Positiv nur', description: '„Schreiben Sie klar, seien Sie spezifisch, verwenden Sie professionellen Ton"' },
      { '@type': 'ListItem', position: 2, name: 'Negativ nur', description: '„Seien Sie nicht vage, verwenden Sie keinen Jargon, bleiben Sie beim Thema"' },
      { '@type': 'ListItem', position: 3, name: 'Positiv + Negativ (3–5 Constraints)', description: '„Schreiben Sie X, im Ton Y; nicht Z"' },
      { '@type': 'ListItem', position: 4, name: 'Schweres Negativ (7+ Constraints)', description: '7+ „Nicht-Tun"-Regeln mit minimaler positiver Richtung' },
    ],
  },
},
    es: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Negative prompting: dile a la IA lo que NO debe hacer',
  intro: 'El negative prompting es una técnica en la que le dices al modelo lo que debe evitar — contenido, estilo, estructura o comportamientos — para que las salidas se mantengan dentro de límites claros. Actúa como una "capa de protección" sobre tus instrucciones habituales.',
  seoTitle: 'Negative Prompting 2026: protege tus salidas de IA',
  metaDescription: 'El negative prompting le dice a la IA qué evitar: contenido, estilo, estructura, comportamientos. Previene salidas no deseadas. Guía completa con ejemplos de prompts.',
  publishDate: '2026-03-26',
  dateModified: '2026-05-04',
  lastFactChecked: '2026-05-04',
  readTime: '13 min de lectura',
  next_refresh_due: '2026-11-03',
  educationalLevel: 'Intermediate',
  audience: 'Desarrolladores, equipos de contenido e ingenieros de prompts empresariales que construyen guardrails de IA',
  primaryTerm: 'Negative Prompting',
  aboutTopics: ['Negative Prompting', 'Prompt Engineering', 'Guardrails de IA'],
  leadAnswerBlock: '**El negative prompting significa añadir reglas explícitas de "no hacer" a un prompt: restringe el contenido, el estilo, la estructura y el comportamiento. Cada fallo de IA que hayas visto puede convertirse en un guardrail permanente. Combina 3–5 constraints negativas claras con instrucciones positivas para la especificación de prompt más precisa.**',
  quickFacts: [
    'El negative prompting cubre 4 dimensiones: contenido ("sin consejos médicos"), estilo ("sin palabras de hype"), estructura ("sin introducción") y comportamiento ("nunca fabricar estadísticas")',
    'Los prompts que combinan instrucciones positivas y negativas reducen los patrones de salida no deseados frente a los prompts solo positivos',
    'La regla 3-5: más de 5-6 constraints negativas en un solo prompt pueden confundir a los modelos y causar salidas incompletas o vacilantes',
    'El lenguaje duro funciona: "no debe", "nunca", "no" supera a "intenta evitar", "prefiere no", "si es posible omite"',
    'El negative prompting es la base de los guardrails de IA empresarial — cada lista de cumplimiento se mapea a una regla de "no hacer"',
    'PromptQuorum permite bloques de constraints negativas reutilizables en todos los modelos — define una vez, aplica en todas partes',
  ],
  toc: [
    { label: 'Puntos clave', anchor: 'key-takeaways' },
    { label: 'Qué es el negative prompting', anchor: 'what-is-negative-prompting' },
    { label: 'Por qué importa', anchor: 'why-it-matters' },
    { label: 'Qué puedes restringir', anchor: 'what-you-can-constrain' },
    { label: 'Ejemplo: sin y con negative prompting', anchor: 'example' },
    { label: 'Cuándo usar negative prompting', anchor: 'when-to-use' },
    { label: 'Cómo usar negative prompting', anchor: 'how-to-use' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
      'inLanguage': 'es',
    headline: 'Negative Prompting: dile a la IA lo que NO debe hacer',
    description: 'Qué es el negative prompting, por qué importa y cómo usar reglas explícitas de "no hacer" para mantener las salidas de IA dentro de límites seguros y conformes a la marca.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-04',
    url: 'https://www.promptquorum.com/es/prompt-engineering/negative-prompting?lang=es',
    inLanguage: 'es',
    keywords: ['negative prompting', 'prompt engineering', 'guardrails', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'Large Language Models' },
      { '@type': 'Thing', name: 'Guardrails' },
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
  },
  sections: {
    whatIsNegativePrompting: {
      title: 'Qué es el negative prompting',
      content: [
        '**El negative prompting significa añadir reglas explícitas de "no hacer" a tus prompts junto con lo que quieres que haga el modelo.** En lugar de describir solo la salida objetivo, también especificas temas, tonos, formatos o errores no deseados.',
        'Estas instrucciones negativas pueden cubrir frases prohibidas, categorías de contenido no permitidas, opiniones fuera de límites o simplemente estilos que no quieres (por ejemplo "sin chistes", "sin emojis" o "evita las palabras de hype"). Cuanto más claras sean las reglas de "no hacer", más fácil le resultará al modelo mantenerse alineado.',
      ],
    },
    whyItMatters: {
      title: 'Por qué importa el negative prompting',
      content: [
        '**El negative prompting importa porque las salidas del mundo real están restringidas no solo por objetivos, sino por límites — de marca, legales, de seguridad y de calidad.** Un buen resultado a menudo es "correcto y dentro de los límites", no solo "útil".',
        'Las instrucciones negativas te ayudan a:',
      ],
      items: [
        'Prevenir modos de fallo específicos que ya has visto, como la exageración, la especulación o los descargos de responsabilidad no deseados.',
        'Aplicar las reglas de marca y tono directamente en el prompt, como evitar la jerga o los adjetivos prohibidos.',
        'Reducir la edición manual, ya que muchas correcciones comunes pueden anticiparse con una orientación clara de "no hacer".',
      ],
    },
    useNote: {
      content: [
        'Bien usado, el negative prompting convierte los errores pasados en guardrails reutilizables.',
      ],
    },
    whatYouCanConstrain: {
      title: 'Qué puedes restringir con los prompts negativos',
      content: [
        '**Puedes aplicar el negative prompting al contenido, el estilo, la estructura y el comportamiento.** El objetivo es ser lo suficientemente específico para que el modelo sepa exactamente qué evitar.',
        'Constraints negativas comunes:',
      ],
      items: [
        'Contenido: "No incluir consejos médicos", "no mencionar competidores", "no proporcionar conclusiones legales".',
        'Estilo: "No usar palabras de hype como \'revolucionario\' o \'que cambia el juego\'", "sin emojis", "evitar el sarcasmo".',
        'Estructura: "No añadir una sección de introducción", "no usar listas numeradas", "no incluir una conclusión".',
        'Comportamiento: "No fabricar estadísticas", "si no estás seguro, di que no estás seguro en lugar de adivinar".',
      ],
    },
    combiningNote: {
      content: [
        'Combinar instrucciones positivas y negativas te da una especificación de prompt mucho más precisa.',
      ],
    },
    example: {
      title: 'Ejemplo: sin y con negative prompting',
      content: [
        '**El efecto del negative prompting queda claro cuando comparas un prompt genérico con uno que codifica reglas explícitas de "no hacer".** Aquí hay un ejemplo de descripción de producto.',
        '**[Prompt deficiente]**',
        '"Escribe una descripción de producto para nuestro nuevo panel de análisis."',
        '**[Prompt mejorado]**',
        '"Eres un profesional de marketing B2B. Tarea: Escribe una descripción de producto para nuestro nuevo panel de análisis dirigida a gestores de operaciones. Constraints (negative prompting): No uses palabras de hype como "revolucionario", "disruptivo" o "que cambia el juego". No menciones competidores ni nos compares con otras herramientas. No prometas características futuras; describe solo lo que existe hoy. No superes las 180 palabras. Formato de salida: 1 párrafo corto para el resumen, seguido de 3 puntos para los beneficios clave."',
        'La versión "mejorada" codifica las trampas conocidas (hype, especulación, comparaciones) directamente en las instrucciones, reduciendo la necesidad de limpieza manual.',
      ],
    },
    whenToUse: {
      title: 'Cuándo usar el negative prompting',
      content: [
        '**Debes usar el negative prompting siempre que tengas ejemplos claros de lo que nunca quieres volver a ver.** Es especialmente útil en workflows repetibles donde siguen apareciendo los mismos errores.',
        'Casos de uso típicos:',
      ],
      items: [
        'Comunicación con clientes donde el tono, las afirmaciones y las promesas deben mantenerse dentro de directrices estrictas.',
        'Contextos regulados (finanzas, salud, legal) donde ciertos tipos de consejos o formulaciones deben evitarse.',
        'Documentación interna o informes que no deben incluir detalles confidenciales, datos personales o especulaciones.',
        'Contenido de cara al público donde quieres evitar temas sensibles, opiniones políticas o lenguaje controvertido.',
      ],
    },
    productionNote: {
      content: [
        'Para experimentos rápidos y de bajo riesgo, puedes mantener el negative prompting ligero. A medida que los prompts maduran hacia workflows de producción, tu lista de reglas de "no hacer" suele crecer.',
      ],
    },
    inPromptQuorum: {
      title: 'Negative prompting en PromptQuorum',
      content: [
        '**PromptQuorum es una herramienta de despacho de IA multi-modelo donde el negative prompting puede incorporarse a frameworks reutilizables en lugar de reescribirse cada vez.** Puedes definir constraints negativas estándar una vez y adjuntarlas a muchas tareas.',
        'En PromptQuorum puedes:',
      ],
      items: [
        'Añadir bloques de negative prompting (por ejemplo "frases prohibidas", "contenido vedado", "restricciones de estilo") a frameworks como SPECS, RTF o CRAFT para que siempre se apliquen.',
        'Mantener listas compartidas de reglas de "no hacer" para tu marca o equipo, garantizando guardrails consistentes en todos los prompts y modelos.',
        'Ejecutar el mismo prompt con constraints negativas en diferentes modelos para ver qué proveedor se adhiere mejor a tus límites.',
      ],
    },
    pqConversion: {
      content: [
        'Al tratar el negative prompting como parte de tu arquitectura de prompts, PromptQuorum te ayuda a convertir los errores pasados en constraints duraderas y reutilizables.',
      ],
    },
    howToStart: {
      title: 'Cómo usar el negative prompting',
      numberedItems: [
        '**Identifica qué no quieres en la salida: palabras, tonos, estilos o enfoques específicos.** Ejemplo: "No usar palabras de marketing. No hacer promesas. No referenciar competidores."',
        '**Formula los negativos explícitamente usando lenguaje de "no", "no debe", "nunca".** Los negativos suaves como "evitar si es posible" son menos efectivos. Sé directo: "Nunca uses las palabras \'disruptivo\', \'que cambia el juego\' o \'impulsado por IA\'."',
        '**Proporciona ejemplos negativos: muéstrale al modelo exactamente qué no quieres.** Ejemplo: "No escribas así: \'Desbloquea un crecimiento explosivo con nuestra solución de IA.\' No escribas así: \'Nuestra plataforma de vanguardia usa machine learning.\' Escribe así: [proporciona ejemplo positivo]."',
        '**Combina orientación positiva y negativa.** No digas solo qué evitar — di también qué hacer en su lugar. Ejemplo: "No usar lenguaje de hype. En su lugar, céntrate en beneficios específicos y medibles."',
        '**Usa el negative prompting con moderación — a veces puede confundir al modelo.** La orientación positiva ("escribe de forma clara y técnica") a menudo funciona mejor que los negativos abundantes ("no seas vago, no simplifiques, no omitas detalles"). Equilibra ambos enfoques.',
      ],
    },
    calloutBoxes: {
      title: 'Puntos clave destacados',
      id: 'callouts',
      callouts: [
        {
          type: 'warning',
          label: 'Los guardrails no son políticas',
          text: 'El negative prompting es un control técnico, no un sustituto de la política. Previene algunos fallos pero no puede reemplazar el juicio humano, la revisión legal o los procesos de cumplimiento. Úsalo como una capa entre muchas, no como la única capa.',
        },
        {
          type: 'pro-tip',
          label: 'Acompaña cada "no hacer" con un "haz esto en su lugar"',
          text: 'Los negativos no acompañados confunden a los modelos ("No seas vago"). Los negativos acompañados los guían ("No seas vago; sé específico con fechas, números y ejemplos"). Cada constraint funciona mejor con una alternativa positiva.',
        },
        {
          type: 'key-point',
          label: 'Máximo 3-5 constraints — más rompe el modelo',
          text: 'Más allá de 5-6 constraints negativas, los modelos empiezan a dudar o a ignorar las constraints por completo. Las listas de constraints largas (7+) pueden producir salidas excesivamente cautelosas, incompletas o evasivas. Mantén el foco.',
        },
        {
          type: 'did-you-know',
          label: 'Los equipos de cumplimiento adoran los guardrails reutilizables',
          text: 'Una vez que codificas las constraints regulatorias, de marca o de seguridad como bloques de negative prompting reutilizables, las auditorías se vuelven más fáciles. Puedes demostrar que cada salida pasó por los mismos guardrails — eso es oro en una auditoría.',
        },
      ],
    },
    commonMistakes: {
      title: 'Errores comunes con el negative prompting',
      id: 'common-mistakes',
      mistakes: [
        {
          mistake: 'Escribir demasiadas constraints negativas',
          problem: 'Más de 5-6 reglas de "no hacer" abruman al modelo. Empieza a dudar, ignorar algunas constraints o producir una salida excesivamente cautelosa.',
          fix: 'Limita a 3-5 constraints enfocadas por prompt. Agrupa reglas relacionadas: "Nunca uses palabras de hype (disruptivo, revolucionario, que cambia el juego)" cuenta como una constraint.',
        },
        {
          mistake: 'Combinar negativos sin alternativas positivas',
          problem: 'Decir "no seas vago" sin decir "en su lugar, sé específico con fechas y números" deja al modelo adivinando.',
          fix: 'Siempre acompaña: "No uses lenguaje vago. En su lugar, incluye fechas, números o resultados medibles específicos."',
        },
        {
          mistake: 'Usar lenguaje negativo suave',
          problem: '"Intenta evitar", "prefiere no", "si es posible omite" se interpretan como sugerencias, no como reglas. Los modelos los ignoran.',
          fix: 'Usa negativos duros: "no debe", "nunca", "no", "prohibido". Los modelos siguen el lenguaje duro.',
        },
        {
          mistake: 'Establecer constraints inalcanzables',
          problem: '"Nunca menciones al competidor" cuando es necesaria una comparación crea expectativas imposibles.',
          fix: 'Haz que las constraints sean específicas y realistas. Ejemplo: "No nombres competidores; en su lugar, haz referencia a las capacidades."',
        },
        {
          mistake: 'No probar las constraints entre modelos',
          problem: 'GPT-4o, Claude y Gemini tienen diferentes sensibilidades de cumplimiento. Una constraint que funciona perfectamente en uno puede ignorarse o sobre-aplicarse en otro.',
          fix: 'Prueba tus prompts negativos en todos los modelos objetivo. Documenta las diferencias de cumplimiento. Ajusta las constraints para cada modelo si es necesario.',
        },
      ],
    },
    faqSection: {
      title: 'Preguntas frecuentes',
      id: 'faq',
      faqs: [
        {
          q: '¿Qué es el negative prompting?',
          a: 'El negative prompting significa añadir reglas explícitas de "no hacer" a un prompt junto con instrucciones positivas. Estas reglas restringen el contenido (sin consejos médicos), el estilo (sin palabras de hype), la estructura (sin introducción) o el comportamiento (nunca fabricar datos). Cada regla actúa como un guardrail que previene modos de fallo conocidos.',
        },
        {
          q: '¿Funciona el negative prompting con todos los modelos de IA?',
          a: 'Sí — GPT-4o, Claude Opus/Sonnet y Gemini Pro todos responden a las constraints negativas duras ("no debe", "nunca", "no"). El cumplimiento varía: las prohibiciones de formato a veces se aplican de forma inconsistente en las salidas largas. Prueba tus constraints específicas con tus modelos objetivo.',
        },
        {
          q: '¿Cuántas constraints negativas debo usar?',
          a: 'Limita a 3-5 por prompt. Más de 5-6 puede confundir a los modelos, provocar constraints ignoradas o una salida excesivamente cautelosa. Agrupa reglas relacionadas: "Nunca uses palabras de hype (disruptivo, revolucionario, que cambia el juego)" cuenta como una constraint.',
        },
        {
          q: '¿El negative prompting es lo mismo que el filtrado de contenido?',
          a: 'No. El filtrado de contenido detecta y bloquea las salidas no deseadas después de la generación. El negative prompting previene las salidas no deseadas durante la generación diciéndole al modelo de antemano qué evitar. El filtrado ocurre downstream; el negative prompting previene el problema antes de que empiece.',
        },
        {
          q: '¿Puedo usar el negative prompting para el cumplimiento (RGPD, HIPAA)?',
          a: 'Sí. Incrustar las constraints de cumplimiento en las plantillas como reglas negativas crea una trazabilidad: cada salida fue procesada a través de los mismos guardrails. Esto es valioso para las auditorías, pero el negative prompting por sí solo no reemplaza la revisión legal ni los Acuerdos de Procesamiento de Datos.',
        },
        {
          q: '¿Qué ocurre si combino negative prompting con ejemplos few-shot?',
          a: 'La combinación funciona bien. Muestra ejemplos positivos de lo que quieres, luego añade constraints negativas para lo que evitar. Los ejemplos anclan al modelo; las constraints le impiden desviarse. Usa ambos juntos para el mayor control.',
        },
      ],
    },
    relatedReading: {
      title: 'Lecturas relacionadas',
      id: 'related-reading',
      items: [
        { title: 'Prompt injection y seguridad', url: '/es/prompt-engineering/prompt-injection-and-security' },
        { title: 'Constrained prompting', url: '/es/prompt-engineering/constrained-prompting' },
        { title: 'Cómo probar prompts entre modelos', url: '/es/prompt-engineering/how-to-test-prompts-across-models' },
        { title: 'Método de prompt de un solo paso', url: '/es/prompt-engineering/single-prompt-method' },
      ],
    },
    sources: {
      title: 'Fuentes',
      id: 'sources',
      items: [
        'Ye, J., et al. (2023). "In-Context Learning with Long-Context Models: An In-Depth Exploration." arXiv:2310.06835. https://arxiv.org/abs/2310.06835 — Cómo los modelos procesan y aplican constraints en entradas largas.',
      ],
    },
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'es',
    name: 'Cómo usar el negative prompting',
    totalTime: 'PT8M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Identifica qué no quieres en la salida', text: 'Identifica qué no quieres en la salida: palabras, tonos, estilos o enfoques específicos. Ejemplo: "No usar palabras de marketing. No hacer promesas. No referenciar competidores."' },
      { '@type': 'HowToStep', position: 2, name: 'Formula los negativos explícitamente', text: 'Formula los negativos explícitamente usando lenguaje de "no", "no debe", "nunca". Los negativos suaves son menos efectivos. Sé directo: "Nunca uses las palabras \'disruptivo\', \'que cambia el juego\' o \'impulsado por IA\'."' },
      { '@type': 'HowToStep', position: 3, name: 'Proporciona ejemplos negativos', text: 'Proporciona ejemplos negativos: muéstrale al modelo exactamente qué no quieres. Ejemplo: "No escribas así: \'Desbloquea un crecimiento explosivo con nuestra solución de IA.\' Escribe así: [proporciona ejemplo positivo]."' },
      { '@type': 'HowToStep', position: 4, name: 'Combina orientación positiva y negativa', text: 'Combina orientación positiva y negativa. No digas solo qué evitar — di también qué hacer en su lugar. Ejemplo: "No usar lenguaje de hype. En su lugar, céntrate en beneficios específicos y medibles."' },
      { '@type': 'HowToStep', position: 5, name: 'Usa el negative prompting con moderación', text: 'Usa el negative prompting con moderación — a veces puede confundir al modelo. La orientación positiva ("escribe de forma clara y técnica") a menudo funciona mejor que los negativos abundantes. Equilibra ambos enfoques.' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué es el negative prompting?', acceptedAnswer: { '@type': 'Answer', text: 'El negative prompting significa añadir reglas explícitas de "no hacer" a tus prompts junto con lo que quieres que haga el modelo. Estas reglas restringen el contenido (sin consejos médicos), el estilo (sin palabras de hype), la estructura (sin introducción) o el comportamiento (nunca fabricar datos). Cada regla actúa como un guardrail que previene modos de fallo conocidos.' } },
      { '@type': 'Question', name: '¿Funciona el negative prompting con todos los modelos de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GPT-4o, Claude Opus/Sonnet y Gemini Pro todos responden a las constraints negativas duras ("no debe", "nunca", "no"). El cumplimiento varía por tipo de constraint. Prueba tus constraints específicas con tus modelos objetivo.' } },
      { '@type': 'Question', name: '¿Cuántas constraints negativas debo usar?', acceptedAnswer: { '@type': 'Answer', text: 'Limita a 3-5 por prompt. Más de 5-6 puede confundir a los modelos. Agrupa reglas relacionadas: "Nunca uses palabras de hype (disruptivo, revolucionario, que cambia el juego)" cuenta como una constraint.' } },
      { '@type': 'Question', name: '¿El negative prompting es lo mismo que el filtrado de contenido?', acceptedAnswer: { '@type': 'Answer', text: 'No. El filtrado de contenido detecta y bloquea las salidas no deseadas después de la generación. El negative prompting previene las salidas no deseadas durante la generación. El filtrado ocurre downstream; el negative prompting previene el problema antes de que empiece.' } },
      { '@type': 'Question', name: '¿Puedo usar el negative prompting para el cumplimiento regulatorio?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Incrustar las constraints de cumplimiento como reglas negativas crea una trazabilidad: cada salida fue procesada a través de los mismos guardrails. Pero el negative prompting por sí solo no reemplaza la revisión legal ni los Acuerdos de Procesamiento de Datos.' } },
      { '@type': 'Question', name: '¿Qué ocurre si combino negative prompting con ejemplos few-shot?', acceptedAnswer: { '@type': 'Answer', text: 'La combinación funciona bien. Muestra ejemplos positivos de lo que quieres, luego añade constraints negativas para lo que evitar. Los ejemplos anclan al modelo; las constraints le impiden desviarse. Usa ambos juntos para el mayor control.' } },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'es',
    name: 'Negative prompting vs prompting positivo: comparación de efectividad',
    numberOfItems: 4,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Solo positivo', description: '"Escribe con claridad, sé específico, usa tono profesional"' },
      { '@type': 'ListItem', position: 2, name: 'Solo negativo', description: '"No seas vago, no uses jerga, mantente en el tema"' },
      { '@type': 'ListItem', position: 3, name: 'Positivo + Negativo (3–5 constraints)', description: '"Escribe X, en el tono Y; no Z"' },
      { '@type': 'ListItem', position: 4, name: 'Negativo abundante (7+ constraints)', description: '7+ reglas de "no hacer" con orientación positiva mínima' },
    ],
  },
},
    fr: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Guidage Négatif : Dire à l\'IA Ce qu\'Elle NE Doit PAS Faire',
  intro: 'Le guidage négatif est une technique permettant de définir explicitement ce que le modèle doit éviter—contenu, tonalité, structure ou comportements—pour maintenir les résultats dans des limites claires. Il fonctionne comme une « couche de protection » s\'ajoutant à vos instructions standard.',
  seoTitle: 'Guidage Négatif : Maîtriser les Sorties IA (2026)',
  metaDescription: 'Guidage négatif : règles « ne pas » pour mots interdits, sujets prohibés, restrictions de format. Modèle à 4 catégories avec exemples et comparaison de modèles IA.',
  publishDate: '2026-03-26',
  dateModified: '2026-05-04',
  lastFactChecked: '2026-05-04',
  readTime: '13 min de lecture',
  next_refresh_due: '2026-11-03',
  educationalLevel: 'Intermediate',
  audience: 'Développeurs, équipes de contenu, et ingénieurs en prompt engineering d\'entreprise construisant des garde-fous IA',
  primaryTerm: 'Guidage Négatif',
  aboutTopics: ['Guidage Négatif', 'Ingénierie des Invites', 'Garde-fous IA'],
  leadAnswerBlock: '**Le guidage négatif consiste à ajouter des règles explicites « ne pas faire » à une invite : contraindre le contenu, la tonalité, la structure et le comportement. Chaque sortie IA défectueuse que vous avez vue peut devenir un garde-fou permanent. Associez 3–5 contraintes négatives claires avec des instructions positives pour la spécification de prompt la plus serrée.**',
  quickFacts: [
    'Le guidage négatif couvre 4 dimensions : contenu (« pas de conseils médicaux »), tonalité (« pas de mots hyperboliques »), structure (« pas d\'introduction »), et comportement (« jamais fabriquer de statistiques »)',
    'Les invites qui associent instructions positives et négatives réduisent les motifs indésirés par rapport aux invites positives seules — l\'effet est le plus fort quand les négatifs sont spécifiques et associés à « à la place, faites X »',
    'La règle 3–5 : plus de 5–6 contraintes négatives dans une seule invite peuvent confondre les modèles et causer des résultats incomplets ou hésitants',
    'Le langage dur fonctionne : « ne doit pas », « jamais », « ne pas » surpasse « essayez d\'éviter », « préférez ne pas », « si possible, évitez »',
    'Le guidage négatif est le fondement des garde-fous IA d\'entreprise — chaque liste de conformité se traduit par une règle « ne pas faire »',
    'PromptQuorum permet des blocs de contraintes négatives réutilisables sur tous les modèles — définir une fois, appliquer partout',
  ],
  toc: [
    { label: 'Points clés', anchor: 'key-takeaways' },
    { label: 'Qu\'est-ce que le Guidage Négatif', anchor: 'what-is-negative-prompting' },
    { label: 'Pourquoi C\'est Important', anchor: 'why-it-matters' },
    { label: 'Ce Que Vous Pouvez Contraindre', anchor: 'what-you-can-constrain' },
    { label: 'Guidage Positif vs Négatif', anchor: 'negative-vs-positive' },
    { label: 'Conformité des Modèles', anchor: 'model-compliance' },
    { label: 'Exemple : Sans et Avec Guidage Négatif', anchor: 'example' },
    { label: 'Quand Utiliser le Guidage Négatif', anchor: 'when-to-use' },
    { label: 'Erreurs Courantes', anchor: 'common-mistakes' },
    { label: 'Comment Utiliser le Guidage Négatif', anchor: 'how-to-use' },
    { label: 'Questions Fréquemment Posées', anchor: 'faq' },
    { label: 'Sources', anchor: 'sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Guidage Négatif : Dire à l\'IA Ce qu\'Elle NE Doit PAS Faire',
    description: 'Qu\'est-ce que le guidage négatif, pourquoi c\'est important, et comment utiliser des règles explicites « ne pas faire » pour maintenir les sorties IA dans des limites sûres et alignées à la marque.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-04',
    url: 'https://www.promptquorum.com/fr/prompt-engineering/negative-prompting',
    inLanguage: 'fr',
    keywords: ['guidage négatif', 'ingénierie des invites', 'garde-fous', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Guidage Négatif' },
      { '@type': 'Thing', name: 'Ingénierie des Invites' },
      { '@type': 'Thing', name: 'Garde-fous IA' },
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
  },
  sections: {
    tldr: {
      isTldr: true,
      id: 'key-takeaways',
      title: 'Points clés',
      content: [
        'Le guidage négatif ajoute des règles explicites « ne pas faire » aux côtés d\'instructions positives — c\'est une couche de garde-fou, pas un remplacement de la guidance positive',
        'Il couvre 4 dimensions : contenu (sujets à éviter), tonalité (mots/tons), structure (interdictions de format), et comportement (contraintes de raisonnement comme « jamais fabriquer »)',
        'Utilisez un langage dur : « ne doit pas », « jamais », « ne pas » — les négatifs doux comme « évitez si possible » sont moins efficaces',
        'La règle 3–5 : limitez-vous à 3–5 contraintes par invite — les négatifs lourds (7+) peuvent confondre les modèles et dégrader la qualité des résultats',
        'Toujours associer avec une guidance positive — dites au modèle à la fois ce à éviter ET ce à faire à la place',
        'Chaque défaillance IA est une future règle « ne pas faire » — traitez le guidage négatif comme mémoire institutionnelle de votre workflow de prompt',
      ],
    },
    whatIsNegativePrompting: {
      title: 'Qu\'est-ce que le Guidage Négatif',
      content: [
        '**Le guidage négatif consiste à ajouter des règles explicites « ne pas faire » à une invite, aux côtés d\'instructions positives.** Ces règles contraignent le contenu (pas de conseils médicaux), la tonalité (pas de mots hyperboliques), la structure (pas de listes à puces), ou le comportement (jamais fabriquer de données).',
        'Chaque règle agit comme un garde-fou qui prévient les modes de défaillance connus.',
      ],
      items: [
        '**En une phrase :** Le guidage négatif signifie ajouter des règles explicites « ne pas faire » à une invite pour que le modèle évite les contenus, styles, structures ou comportements spécifiés.',
        '**En termes simples :** Dites à l\'IA non seulement ce à faire, mais aussi ce à éviter — mots interdits, sujets prohibés, règles structurelles que vous ne voulez jamais brisées.',
      ],
      blockquote: 'Gardez un doc courant des sorties IA que vous ne voulez jamais revoir. Chaque entrée devient une future règle « ne pas faire ». Les équipes qui systématisent cela réduisent l\'édition manuelle des prompts en quelques semaines.',
      blockquoteSource: 'Modèle de garde-fou',
    },
    whyItMatters: {
      title: 'Pourquoi C\'est Important',
      content: [
        '**Le guidage négatif est important parce que les sorties réelles sont contraintes non seulement par des objectifs, mais par des limites—marque, légalité, sécurité, qualité.** Un bon résultat est souvent « correct ET dans les limites », pas simplement « utile ».',
        'Le guidage négatif vous aide à :',
      ],
      items: [
        'Prévenir les modes de défaillance spécifiques que vous avez déjà observés, comme la survente, la spéculation, ou les avertissements inutiles',
        'Appliquer les règles de marque et de tonalité directement dans le prompt, par exemple en évitant le jargon ou les adjectifs interdits',
        'Réduire l\'édition manuelle, car beaucoup de corrections courantes peuvent être préemptées par une guidance « ne pas faire » claire',
        'Pour les expériences rapides et à faible risque, gardez le guidage négatif léger. Quand les prompts mûrissent en workflows de production, la liste des règles « ne pas faire » s\'agrandit généralement.',
      ],
    },
    whatYouCanConstrain: {
      title: 'Ce Que Vous Pouvez Contraindre',
      content: [
        '**Vous pouvez appliquer le guidage négatif au contenu, à la tonalité, à la structure et au comportement.** L\'objectif est d\'être suffisamment spécifique pour que le modèle sache exactement ce à éviter.',
        'Contraintes négatives courantes :',
      ],
      items: [
        'Contenu : « Ne pas inclure de conseils médicaux », « ne pas mentionner les concurrents », « ne pas fournir de conclusions juridiques »',
        'Tonalité : « Ne pas utiliser de mots hyperboliques comme \'révolutionnaire\' ou \'disruptif\' », « pas d\'emojis », « éviter le sarcasme »',
        'Structure : « Ne pas ajouter une section d\'introduction », « ne pas utiliser de listes numérotées », « ne pas inclure une conclusion »',
        'Comportement : « Ne pas fabriquer de statistiques », « si vous êtes incertain, dites-le plutôt que de deviner »',
      ],
      blockquote: 'Pour les contextes réglementés (finance, santé, droit), le guidage négatif n\'est pas optionnel — c\'est de la conformité. Mappez directement chaque exigence réglementaire à une règle « ne pas faire ». « Ne pas fournir de recommandations d\'investissement spécifiques. » « Ne pas suggérer de diagnostics spécifiques. » Gardez une bibliothèque de prompts négatifs distincte pour chaque domaine réglementé.',
      blockquoteSource: 'Industries Réglementées',
    },
    negativeVsPositiveTable: {
      id: 'negative-vs-positive',
      title: 'Guidage Positif vs Négatif : Comparaison d\'Efficacité',
      content: ['**La combinaison d\'instructions positives et négatives produit la spécification de prompt la plus serrée.** Les prompts négatifs seuls laissent le modèle sans direction ; les prompts positifs seuls laissent les modes de défaillance connus ouverts.'],
      tableFormat: true,
      columns: ['Approche', 'Description', 'Efficacité', 'Meilleur pour'],
      rows: [
        {
          'Approche': 'Positif seul',
          'Description': '« Écrivez clairement, soyez spécifique, utilisez un ton professionnel »',
          'Efficacité': 'Modérée — direction fixée mais pas de garde-fous',
          'Meilleur pour': 'Nouvelles tâches sans modes de défaillance connus',
        },
        {
          'Approche': 'Négatif seul',
          'Description': '« Ne pas être vague, ne pas utiliser le jargon, ne pas sortir du sujet »',
          'Efficacité': 'Basse — le modèle n\'a aucune direction sur ce à FAIRE',
          'Meilleur pour': 'Anti-motif ; rarement recommandé',
        },
        {
          'Approche': 'Positif + Négatif (3–5 contraintes)',
          'Description': '« Écrivez X, dans le ton Y ; ne pas Z »',
          'Efficacité': 'Haute — spécification serrée avec direction et garde-fous',
          'Meilleur pour': 'Prompts de production, workflows répétables',
        },
        {
          'Approche': 'Négatif lourd (7+ contraintes)',
          'Description': '7+ règles « ne pas faire » avec direction positive minimale',
          'Efficacité': 'Basse à moyenne — rendements décroissants, risque de confusion',
          'Meilleur pour': 'À éviter — restructurez en approche combinée',
        },
      ],
    },
    modelComplianceTable: {
      id: 'model-compliance',
      title: 'Conformité des Modèles aux Contraintes Négatives',
      content: ['**La conformité aux contraintes négatives varie selon le modèle et le type de contrainte.** Vérifiez vos contraintes spécifiques avec votre version de modèle actuelle — le comportement change entre les versions.'],
      tableFormat: true,
      columns: ['Type de Contrainte', 'GPT-4o / GPT-4.5', 'Claude Sonnet / Opus', 'Gemini Pro'],
      rows: [
        {
          'Type de Contrainte': 'Mots interdits',
          'GPT-4o / GPT-4.5': 'Haute conformité',
          'Claude Sonnet / Opus': 'Haute conformité',
          'Gemini Pro': 'Haute conformité',
        },
        {
          'Type de Contrainte': 'Interdictions de format (« pas de listes à puces »)',
          'GPT-4o / GPT-4.5': 'Haute conformité',
          'Claude Sonnet / Opus': 'Haute conformité',
          'Gemini Pro': 'Modérée — parfois contourne sur les longs résultats',
        },
        {
          'Type de Contrainte': 'Interdictions de contenu (« pas de conseils médicaux »)',
          'GPT-4o / GPT-4.5': 'Haute conformité (ajoute des couches de sécurité par défaut)',
          'Claude Sonnet / Opus': 'Haute conformité',
          'Gemini Pro': 'Haute conformité',
        },
        {
          'Type de Contrainte': 'Contraintes comportementales (« jamais fabriquer »)',
          'GPT-4o / GPT-4.5': 'Modérée — utiliser avec vérification de résultat',
          'Claude Sonnet / Opus': 'Haute conformité — répond bien aux contraintes explicites',
          'Gemini Pro': 'Modérée — vérifier sur tâches critiques',
        },
      ],
    },
    example: {
      id: 'example',
      title: 'Exemple : Sans et Avec Guidage Négatif',
      content: [
        '**Le guidage négatif devient clair quand vous comparez un prompt générique avec un qui encode des règles explicites « ne pas faire ». ** Voici un exemple de description de produit.',
        '**[Mauvais Prompt]**',
        '« Écrivez une description de produit pour notre nouveau tableau de bord analytique. »',
        '**[Bon Prompt]**',
        '« Vous êtes un responsable marketing B2B. Tâche : Écrivez une description de produit pour notre nouveau tableau de bord analytique destiné aux responsables d\'exploitation. Contraintes (guidage négatif) : Ne pas utiliser de mots hyperboliques comme \'révolutionnaire\', \'disruptif\' ou \'change-jeu\'. Ne pas mentionner les concurrents ni nous comparer à d\'autres outils. Ne pas promettre de fonctionnalités futures ; décrivez seulement ce qui existe aujourd\'hui. Ne pas dépasser 180 mots. Format de résultat : 1 court paragraphe pour la vue d\'ensemble, suivi de 3 puces pour les bénéfices clés. »',
        'La version « bonne » encode les pièges connus (hyperbole, spéculation, comparaisons) directement dans les instructions, réduisant le besoin de nettoyage manuel.',
      ],
      blockquote: 'Le mauvais prompt échoue non par manque de règles négatives — il échoue par manque de contraintes du tout. Ajouter des règles « ne pas faire » sans direction positive est aussi faible. La formule : énoncez ce à faire, définissez le format, puis ajoutez 3–5 règles « ne pas faire » spécifiques pour les modes de défaillance connus.',
      blockquoteSource: 'Positif + Négatif = Spécification Serrée',
    },
    whenToUse: {
      id: 'when-to-use',
      title: 'Quand Utiliser le Guidage Négatif',
      content: [
        '**Utilisez le guidage négatif chaque fois que vous avez des exemples clairs de ce que vous ne voulez jamais revoir.** C\'est particulièrement utile dans les workflows répétables où les mêmes erreurs reviennent sans cesse.',
        'Cas d\'usage typiques :',
      ],
      items: [
        'Communication client où la tonalité, les affirmations, et les promesses doivent rester dans des directives strictes',
        'Contextes réglementés (finance, santé, droit) où certains types de conseils ou formulations doivent être évités',
        'Documentation interne ou rapports qui ne doivent pas inclure les détails confidentiels, données personnelles, ou spéculation',
        'Contenu public où vous voulez éviter les sujets sensibles, opinions politiques, ou langage controversé',
      ],
      blockquote: 'Les instructions positives (« écrivez clairement et techniquement ») sont plus fiables que les négatifs lourds (« ne soyez pas vague, ne simplifiez pas, n\'omettez pas les détails »). Quand vous trouvez vous-même écrivant 6+ règles négatives, réécrivez la version positive d\'abord, puis utilisez les négatifs seulement pour corriger les modes de défaillance spécifiques.',
      blockquoteSource: 'Seuil de Confusion',
    },
    howToStart: {
      id: 'how-to-use',
      title: 'Comment Utiliser le Guidage Négatif',
      numberedItems: [
        '**Identifiez ce que vous ne voulez pas dans la résultat : mots, tonalité, style, approches spécifiques.** Exemple : « Ne pas utiliser le jargon. Ne pas faire de promesses. Ne pas référencer les concurrents. »',
        '**Énoncez les négatifs explicitement en utilisant le langage « ne pas », « ne doit pas », « jamais ».** Le langage doux comme « essayez d\'éviter » est moins efficace. Soyez direct : « Ne jamais utiliser les mots \'disruptif\', \'révolutionnaire\' ou \'propulsé par IA\'. »',
        '**Fournissez des exemples négatifs : montrez au modèle ce que vous ne voulez explicitement pas.** Exemple : « N\'écrivez pas ainsi : \'Déverrouiller une croissance explosive avec notre solution IA.\' N\'écrivez pas ainsi : \'Notre plateforme d\'avant-garde utilise l\'apprentissage automatique.\' Écrivez ainsi : [example positif]. »',
        '**Combinez la guidance positive et négative.** Ne dites pas juste ce à éviter—dites aussi ce à faire à la place. Exemple : « Ne pas utiliser le langage hyperbolique. À la place, concentrez-vous sur les bénéfices mesurables spécifiques. »',
        '**Utilisez le guidage négatif avec parcimonie—il peut parfois confondre le modèle.** La guidance positive (« écrivez clairement et techniquement ») fonctionne souvent mieux que les négatifs lourds (« ne soyez pas vague, ne simplifiez pas, n\'omettez pas les détails »). Équilibrez les deux approches.',
      ],
    },
    inPromptQuorum: {
      title: 'Guidage Négatif dans PromptQuorum',
      content: [
        '**PromptQuorum est un outil de dispatch multi-modèles où le guidage négatif peut être intégré dans des frameworks réutilisables au lieu d\'être réécrit chaque fois.** Vous définissez les contraintes négatives standards une fois et les attachez à de nombreuses tâches.',
        'Avec PromptQuorum, vous pouvez :',
      ],
      items: [
        'Ajouter des blocs de guidage négatif (par exemple « phrases interdites », « contenu interdit », « restrictions de style ») à des frameworks comme SPECS, RTF, ou CRAFT pour qu\'ils s\'appliquent toujours',
        'Maintenir les listes partagées de règles « ne pas faire » pour votre marque ou équipe, garantissant des garde-fous cohérents sur tous les prompts et modèles',
        'Exécuter le même prompt avec contraintes négatives sur différents modèles pour voir quel fournisseur adhère le mieux à vos limites',
      ],
    },
    pqConversion: {
      content: [
        'En traitant le guidage négatif comme part de votre architecture de prompt, PromptQuorum vous aide à convertir les erreurs passées en contraintes durables et réutilisables.',
      ],
    },
    faqSection: {
      id: 'faq',
      title: 'Questions Fréquemment Posées',
      faqs: [
        {
          q: 'Qu\'est-ce que le guidage négatif ?',
          a: 'Le guidage négatif consiste à ajouter des règles explicites « ne pas faire » à une invite aux côtés d\'instructions positives. Ces règles contraignent le contenu (pas de conseils médicaux), la tonalité (pas de mots hyperboliques), la structure (pas de listes à puces), ou le comportement (jamais fabriquer des données). Chaque règle agit comme un garde-fou qui prévient les modes de défaillance connus.',
        },
        {
          q: 'Le guidage négatif fonctionne-t-il avec tous les modèles IA ?',
          a: 'Oui — GPT-4o/4.5, Claude Sonnet/Opus, et Gemini Pro répondent tous aux contraintes négatives dures (« ne doit pas », « jamais », « ne pas »). La conformité varie selon le type de contrainte : les interdictions de format sont parfois appliquées de manière inconsistante sur les résultats longs dans Gemini Pro. Testez vos contraintes avec votre version de modèle spécifique.',
        },
        {
          q: 'Combien de contraintes négatives dois-je utiliser ?',
          a: 'Limitez-vous à 3–5 par prompt. Plus de 5–6 règles négatives peuvent confondre les modèles, causant des règles ignorées ou une résultat trop prudent. Groupez les règles connexes : « Ne pas utiliser les mots hyperboliques (révolutionnaire, disruptif, game-changing) » compte comme une contrainte.',
        },
        {
          q: 'Le guidage négatif est-il la même chose que le filtrage de contenu ?',
          a: 'Non. Le filtrage de contenu est une couche de sécurité externe qui bloque les résultats spécifiques indépendamment des instructions du prompt. Le guidage négatif est une technique in-prompt qui façonne la génération. Ils se complètent : les filtres de contenu gèrent les violations de sécurité ; le guidage négatif gère la marque, la tonalité, et les contraintes spécifiques au domaine.',
        },
        {
          q: 'Puis-je utiliser le guidage négatif pour les tâches créatives ?',
          a: 'Oui. Pour le travail créatif, le guidage négatif prévient le phrasé générique (« pas de clichés »), limite les choix structurels (« pas de structure en trois actes »), ou exclut les références spécifiques (« pas de métaphores de guerre »). Appliquez la même règle 3–5 — trop de négatifs étouffent la plage créative.',
        },
        {
          q: 'Le guidage négatif aide-t-il à prévenir les hallucinations ?',
          a: 'Il réduit les types spécifiques de fabrication quand constrained précisément. « Ne pas citer les sources à moins que vous ne soyez certain qu\'elles existent » et « Si vous êtes incertain, dites-le au lieu de deviner » réduisent l\'hallucination dans les modes de défaillance spécifiques. Ils n\'éliminent pas entièrement le risque d\'hallucination — utilisez la vérification de résultat pour les affirmations factuelles de haut enjeu.',
        },
        {
          q: 'Y a-t-il une différence entre le guidage négatif pour le texte et l\'image IA ?',
          a: 'Oui. Dans la génération d\'image (DALL-E, Stable Diffusion, Midjourney), le guidage négatif est un champ de paramètre formel séparé. Dans les LLMs texte, le guidage négatif est incorporé directement comme des règles « ne pas faire » dans le texte de l\'invite. Ce guide couvre le guidage négatif pour les LLMs texte.',
        },
        {
          q: 'Comment je teste si mes contraintes négatives fonctionnent ?',
          a: 'Exécutez le même prompt 3–5 fois et vérifiez si les éléments contraints apparaissent. Pour les contraintes critiques, testez sur plusieurs modèles en utilisant PromptQuorum\'s dispatch multi-modèles — si un modèle viole une règle de manière cohérente, renforcez le phrasé de « éviter » à « ne doit pas » ou « jamais ».',
        },
        {
          q: 'Comment le guidage négatif s\'aligne-t-il avec la conformité réglementée (CNIL, RGPD) ?',
          a: 'La CNIL recommande le traitement des données sensibles (financières, médicales, juridiques) avec des IA locales ou fortement contraintes. Le guidage négatif aide à respecter ces recommandations en codifiant les limites de conformité directement dans le prompt. Cartographiez chaque exigence réglementaire à une règle « ne pas faire » et maintenez une documentation d\'audit des contraintes appliquées.',
        },
        {
          q: 'Quels sont les pièges courants du guidage négatif en contexte d\'entreprise ?',
          a: 'Les défis incluent : (1) Les exigences légales sont strictes et variables par région—le guidage négatif doit les capturer avec nuance. (2) La documentation de conformité est extensive ; les contraintes doivent être vérifiables. (3) La précision linguistique est critique—les utilisateurs francophones attendent des formulations exactes. (4) Les grandes organisations exigent des templates centralisés pour les contraintes, pour garantir la cohérence entre les équipes. PromptQuorum adresse cela par des ensembles de contraintes réutilisables et des pistes d\'audit.',
        },
      ],
    },
    relatedReading: {
      items: [
        { title: 'Guidage Contraint', url: '/fr/prompt-engineering/constrained-prompting' },
        { title: 'Les 5 Éléments Clés d\'un Prompt', url: '/fr/prompt-engineering/5-building-blocks-of-a-prompt' },
        { title: 'Hallucinations IA', url: '/fr/prompt-engineering/ai-hallucinations' },
        { title: 'Injection de Prompt et Sécurité', url: '/fr/prompt-engineering/prompt-injection-and-security' },
        { title: 'Température et Top-P', url: '/fr/prompt-engineering/temperature-and-top-p' },
        { title: 'Zero-Shot vs Few-Shot Prompting', url: '/fr/prompt-engineering/zero-shot-vs-few-shot-prompting' },
      ],
    },
    sources: {
      items: [
        'Schulhoff, S., et al. (2024). « The Prompt Report: A Systematic Survey of Prompting Techniques. » arXiv:2406.06608',
        'OpenAI. (2026). « Prompt Engineering Guide. » [platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
        'Anthropic. (2026). « Prompt Engineering Overview. » [docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
      ],
    },
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment Utiliser le Guidage Négatif',
    inLanguage: 'fr',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Identifiez ce que vous ne voulez pas', text: 'Identifiez ce que vous ne voulez pas dans le résultat : mots, tonalité, style, approches spécifiques. Exemple : « Ne pas utiliser le jargon. Ne pas faire de promesses. Ne pas référencer les concurrents. »' },
      { '@type': 'HowToStep', position: 2, name: 'Énoncez les négatifs explicitement', text: 'Énoncez les négatifs explicitement en utilisant le langage « ne pas », « ne doit pas », « jamais ». Le langage doux comme « essayez d\'éviter » est moins efficace. Soyez direct : « Ne jamais utiliser les mots \'disruptif\', \'révolutionnaire\' ou \'propulsé par IA\'. »' },
      { '@type': 'HowToStep', position: 3, name: 'Fournissez des exemples négatifs', text: 'Fournissez des exemples négatifs : montrez au modèle ce que vous ne voulez explicitement pas. Exemple : « N\'écrivez pas ainsi : \'Déverrouiller une croissance explosive avec notre solution IA.\' Écrivez ainsi : [exemple positif]. »' },
      { '@type': 'HowToStep', position: 4, name: 'Combinez positive et négative', text: 'Combinez la guidance positive et négative. Ne dites pas juste ce à éviter—dites aussi ce à faire à la place. Exemple : « Ne pas utiliser le langage hyperbolique. À la place, concentrez-vous sur les bénéfices mesurables spécifiques. »' },
      { '@type': 'HowToStep', position: 5, name: 'Utilisez avec parcimonie', text: 'Utilisez le guidage négatif avec parcimonie—il peut parfois confondre le modèle. La guidance positive (« écrivez clairement et techniquement ») fonctionne souvent mieux que les négatifs lourds. Équilibrez les deux approches.' },
    ],
    totalTime: 'PT8M',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr',
    mainEntity: [
      { '@type': 'Question', name: 'Qu\'est-ce que le guidage négatif ?', acceptedAnswer: { '@type': 'Answer', text: 'Le guidage négatif consiste à ajouter des règles explicites « ne pas faire » à une invite aux côtés d\'instructions positives. Ces règles contraignent le contenu (pas de conseils médicaux), la tonalité (pas de mots hyperboliques), la structure (pas de listes à puces), ou le comportement (jamais fabriquer des données). Chaque règle agit comme un garde-fou qui prévient les modes de défaillance connus.' } },
      { '@type': 'Question', name: 'Le guidage négatif fonctionne-t-il avec tous les modèles IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — GPT-4o/4.5, Claude Sonnet/Opus, et Gemini Pro répondent tous aux contraintes négatives dures (« ne doit pas », « jamais », « ne pas »). La conformité varie selon le type de contrainte : les interdictions de format sont parfois appliquées de manière inconsistante sur les résultats longs dans Gemini Pro. Testez vos contraintes avec votre version de modèle spécifique.' } },
      { '@type': 'Question', name: 'Combien de contraintes négatives dois-je utiliser ?', acceptedAnswer: { '@type': 'Answer', text: 'Limitez-vous à 3–5 par prompt. Plus de 5–6 règles négatives peuvent confondre les modèles, causant des règles ignorées ou une résultat trop prudent. Groupez les règles connexes : « Ne pas utiliser les mots hyperboliques (révolutionnaire, disruptif, game-changing) » compte comme une contrainte.' } },
      { '@type': 'Question', name: 'Le guidage négatif est-il la même chose que le filtrage de contenu ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le filtrage de contenu est une couche de sécurité externe qui bloque les résultats spécifiques indépendamment des instructions du prompt. Le guidage négatif est une technique in-prompt qui façonne la génération. Ils se complètent : les filtres de contenu gèrent les violations de sécurité ; le guidage négatif gère la marque, la tonalité, et les contraintes spécifiques au domaine.' } },
      { '@type': 'Question', name: 'Puis-je utiliser le guidage négatif pour les tâches créatives ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Pour le travail créatif, le guidage négatif prévient le phrasé générique (« pas de clichés »), limite les choix structurels (« pas de structure en trois actes »), ou exclut les références spécifiques (« pas de métaphores de guerre »). Appliquez la même règle 3–5 — trop de négatifs étouffent la plage créative.' } },
      { '@type': 'Question', name: 'Le guidage négatif aide-t-il à prévenir les hallucinations ?', acceptedAnswer: { '@type': 'Answer', text: 'Il réduit les types spécifiques de fabrication quand constrained précisément. « Ne pas citer les sources à moins que vous ne soyez certain qu\'elles existent » et « Si vous êtes incertain, dites-le au lieu de deviner » réduisent l\'hallucination dans les modes de défaillance spécifiques. Ils n\'éliminent pas entièrement le risque d\'hallucination — utilisez la vérification de résultat pour les affirmations factuelles de haut enjeu.' } },
      { '@type': 'Question', name: 'Y a-t-il une différence entre le guidage négatif pour le texte et l\'image IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Dans la génération d\'image (DALL-E, Stable Diffusion, Midjourney), le guidage négatif est un champ de paramètre formel séparé. Dans les LLMs texte, le guidage négatif est incorporé directement comme des règles « ne pas faire » dans le texte de l\'invite. Ce guide couvre le guidage négatif pour les LLMs texte.' } },
      { '@type': 'Question', name: 'Comment je teste si mes contraintes négatives fonctionnent ?', acceptedAnswer: { '@type': 'Answer', text: 'Exécutez le même prompt 3–5 fois et vérifiez si les éléments contraints apparaissent. Pour les contraintes critiques, testez sur plusieurs modèles en utilisant PromptQuorum\'s dispatch multi-modèles — si un modèle viole une règle de manière cohérente, renforcez le phrasé de « éviter » à « ne doit pas » ou « jamais ».' } },
      { '@type': 'Question', name: 'Comment le guidage négatif s\'aligne-t-il avec la conformité réglementée (CNIL, RGPD) ?', acceptedAnswer: { '@type': 'Answer', text: 'La CNIL recommande le traitement des données sensibles (financières, médicales, juridiques) avec des IA locales ou fortement contraintes. Le guidage négatif aide à respecter ces recommandations en codifiant les limites de conformité directement dans le prompt. Cartographiez chaque exigence réglementaire à une règle « ne pas faire » et maintenez une documentation d\'audit des contraintes appliquées.' } },
      { '@type': 'Question', name: 'Quels sont les pièges courants du guidage négatif en contexte d\'entreprise ?', acceptedAnswer: { '@type': 'Answer', text: 'Les défis incluent : (1) Les exigences légales sont strictes et variables par région—le guidage négatif doit les capturer avec nuance. (2) La documentation de conformité est extensive ; les contraintes doivent être vérifiables. (3) La précision linguistique est critique—les utilisateurs francophones attendent des formulations exactes. (4) Les grandes organisations exigent des templates centralisés pour les contraintes, pour garantir la cohérence entre les équipes. PromptQuorum adresse cela par des ensembles de contraintes réutilisables et des pistes d\'audit.' } },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'fr',
    name: 'Guidage Positif vs Négatif : Comparaison d\'Efficacité',
    numberOfItems: 4,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Positif seul', description: '« Écrivez clairement, soyez spécifique, utilisez un ton professionnel »' },
      { '@type': 'ListItem', position: 2, name: 'Négatif seul', description: '« Ne pas être vague, ne pas utiliser le jargon, ne pas sortir du sujet »' },
      { '@type': 'ListItem', position: 3, name: 'Positif + Négatif (3–5 contraintes)', description: '« Écrivez X, dans le ton Y ; ne pas Z »' },
      { '@type': 'ListItem', position: 4, name: 'Négatif lourd (7+ contraintes)', description: '7+ règles « ne pas faire » avec direction positive minimale' },
    ],
  },
},
    ja: {
  freshness_tier: 'semi_annual',
  theme: 'テクニック',
  title: 'ネガティブプロンプティング：AIに「してはいけないこと」を伝える',
  intro: 'ネガティブプロンプティングは、モデルが避けるべきこと（コンテンツ、トーン、構造、振る舞い）を明示的に定義し、出力を明確な範囲内に保つテクニックです。通常の指示の上に「保護層」として機能します。',
  seoTitle: 'ネガティブプロンプティング：4つの制約次元でAI出力を制御する完全ガイド',
  metaDescription: 'ネガティブプロンプティング完全ガイド：禁止ワード・トピック・フォーマット制限の設定方法。4カテゴリモデルと実例・モデル別コンプライアンス比較表付き。',
  publishDate: '2026-03-26',
  dateModified: '2026-05-04',
  lastFactChecked: '2026-05-04',
  readTime: '13分で読める',
  next_refresh_due: '2026-11-03',
  educationalLevel: 'Intermediate',
  audience: 'AI保護柵を構築しているエンジニア、コンテンツチーム、エンタープライズプロンプトエンジニア',
  primaryTerm: 'ネガティブプロンプティング',
  aboutTopics: ['ネガティブプロンプティング', 'プロンプトエンジニアリング', 'AI保護柵'],
  leadAnswerBlock: '**ネガティブプロンプティングとは、プロンプトに明示的な「してはいけないこと」ルールを追加することです：コンテンツ、トーン、構造、振る舞いを制約します。過去に見たAI出力の失敗はすべて、将来の保護柵となります。3～5個の明確なネガティブ制約を正のガイダンスと組み合わせると、最も厳密なプロンプト仕様が得られます。**',
  quickFacts: [
    'ネガティブプロンプティングは4つの次元をカバーします：コンテンツ（「医学的助言はしない」）、トーン（「大げさな言葉は使わない」）、構造（「導入を入れない」）、振る舞い（「統計データを作らない」）',
    '正のガイダンスとネガティブ指示の両方を含むプロンプトは、正のみのプロンプトと比べて望まない出力パターンを減らします。効果が最も強いのはネガティブが具体的で「代わりにX をしてください」と組み合わされているときです',
    '3～5ルール：単一プロンプトに5～6個以上のネガティブ制約があるとモデルが混乱し、不完全または慎重すぎる出力につながります',
    '硬い言語が効きます：「してはいけません」「絶対にしない」「してはいけない」は「できれば避けてください」「避けることが好ましい」より効果的です',
    'ネガティブプロンプティングはエンタープライズAI保護柵の基礎です。すべてのコンプライアンスチェックリストは「してはいけないこと」ルールになります',
    'PromptQuorumはすべてのモデル全体で再利用可能なネガティブ制約ブロックを実現します。一度定義すれば、どこでも適用できます',
  ],
  toc: [
    { label: '重要ポイント', anchor: 'key-takeaways' },
    { label: 'ネガティブプロンプティングとは', anchor: 'what-is-negative-prompting' },
    { label: 'なぜ重要なのか', anchor: 'why-it-matters' },
    { label: '制約できる内容', anchor: 'what-you-can-constrain' },
    { label: 'ネガティブ vs ポジティブ', anchor: 'negative-vs-positive' },
    { label: 'モデル別コンプライアンス', anchor: 'model-compliance' },
    { label: '例：なし／あり', anchor: 'example' },
    { label: 'いつ使うか', anchor: 'when-to-use' },
    { label: 'よくある間違い', anchor: 'common-mistakes' },
    { label: '使い方', anchor: 'how-to-use' },
    { label: 'よくある質問', anchor: 'faq' },
    { label: '参考資料', anchor: 'sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'ネガティブプロンプティング：AIに「してはいけないこと」を伝える',
    description: 'ネガティブプロンプティングの概要、重要性、および明示的な「してはいけないこと」ルールを使ってAI出力を安全で、ブランド適合した範囲内に保つ方法。',
    datePublished: '2026-03-26',
    dateModified: '2026-05-04',
    url: 'https://www.promptquorum.com/ja/prompt-engineering/negative-prompting',
    inLanguage: 'ja',
    keywords: ['ネガティブプロンプティング', 'プロンプトエンジニアリング', '保護柵', 'PromptQuorum'],
    author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'ネガティブプロンプティング' },
      { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
      { '@type': 'Thing', name: 'AI保護柵' },
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
  },
  sections: {
    tldr: {
      isTldr: true,
      id: 'key-takeaways',
      title: '重要ポイント',
      content: [
        'ネガティブプロンプティングは明示的な「してはいけないこと」ルールを正のガイダンスと組み合わせて追加します。これは保護柵レイヤーであり、正のガイダンスの代わりではありません',
        '4つの次元をカバーします：コンテンツ（避けるべきトピック）、トーン（単語／トーン）、構造（フォーマット禁止）、振る舞い（「絶対に作らない」などの推論制約）',
        'ハード言語を使用してください：「してはいけません」「絶対にしない」「してはいけない」は「できれば避けてください」より効果的です',
        '3～5ルール：プロンプトあたり3～5個の制約に制限してください。ヘビーなネガティブ（7個以上）はモデルを混乱させ、結果の品質を低下させます',
        'つねに正のガイダンスと組み合わせてください。モデルに避けることと代わりに何をするかの両方を伝えます',
        'すべてのAI障害は将来の「してはいけないこと」ルールです。ネガティブプロンプティングをプロンプトワークフローの制度的記憶として扱ってください',
      ],
    },
    whatIsNegativePrompting: {
      title: 'ネガティブプロンプティングとは',
      content: [
        '**ネガティブプロンプティングとは、プロンプトに明示的な「してはいけないこと」ルールを追加することです。** これらのルールはコンテンツ（医学的助言なし）、トーン（大げさな言葉なし）、構造（箇条書きなし）、または振る舞い（データを作らない）を制約します。',
        'それぞれのルールは既知の障害モードを防ぐ保護柵として機能します。',
      ],
      items: [
        '**一文で：** ネガティブプロンプティングはプロンプトに明示的な「してはいけないこと」ルールを追加し、モデルが指定されたコンテンツ、スタイル、構造、または振る舞いを避けるようにします。',
        '**簡単に言うと：** AIに何をするかだけでなく、何を避けるかも伝えます。禁止ワード、禁止トピック、絶対に壊したくない構造ルールです。',
      ],
      blockquote: '見たくないAI出力のドキュメントを常に保持してください。各エントリが将来の「してはいけないこと」ルールになります。これを体系化するチームは数週間でプロンプトの手動編集を減らします。',
      blockquoteSource: '保護柵パターン',
    },
    whyItMatters: {
      title: 'なぜ重要なのか',
      content: [
        '**ネガティブプロンプティングが重要なのは、実世界の出力は目標だけでなく制限（ブランド、法務、セキュリティ、品質）で制約されるからです。** よい結果はしばしば「正確かつ制限内」です。',
        'ネガティブプロンプティングはあなたを助けます：',
      ],
      items: [
        'すでに観察した特定の障害モード（過剰宣伝、推測、不要な免責事項）を防ぐ',
        'ブランドおよびトーンルールを直接プロンプトに適用します。専門用語や禁止形容詞を避けます',
        '手動編集を減らします。多くの一般的な修正は明確な「してはいけないこと」ガイダンスで事前に防ぐことができます',
        '迅速で低リスク実験の場合、ネガティブプロンプティングは軽く保つことができます。プロンプトが本番ワークフローになるにつれて、「してはいけないこと」ルールのリストは通常増えます',
      ],
    },
    whatYouCanConstrain: {
      title: '制約できる内容',
      content: [
        '**ネガティブプロンプティングをコンテンツ、トーン、構造、振る舞いに適用できます。** 目標は、モデルが正確に何を避けるべきかを知るのに十分な具体性です。',
        '一般的なネガティブ制約：',
      ],
      items: [
        'コンテンツ：「医学的助言は含めない」「競合他社に言及しない」「法的結論を提供しない」',
        'トーン：「\'革新的\'や\'破壊的\'のような大げさな言葉を使わない」「絵文字なし」「皮肉を避ける」',
        '構造：「導入セクションを追加しない」「番号付きリストを使わない」「結論を含めない」',
        '振る舞い：「統計を作らない」「不確実な場合は、推測するのではなく言ってください」',
      ],
      blockquote: '規制対象業種（金融、医療、法律）の場合、ネガティブプロンプティングはオプションではなく、コンプライアンスです。各規制要件を直接「してはいけないこと」ルールにマップします。各規制ドメインについて、別のネガティブプロンプトライブラリを保持してください。',
      blockquoteSource: '規制対象業種',
    },
    negativeVsPositiveTable: {
      id: 'negative-vs-positive',
      title: 'ネガティブ vs ポジティブ：効果比較',
      content: ['**正と負の指示の組み合わせが最も厳密なプロンプト仕様を生成します。** 負のみのプロンプトはモデルに方向がありません。正のみのプロンプトは既知の障害モードを開きます。'],
      tableFormat: true,
      columns: ['アプローチ', '説明', '効果', '最適用途'],
      rows: [
        {
          'アプローチ': 'ポジティブのみ',
          '説明': '「明確に書く、具体的にする、専門的なトーンを使う」',
          '効果': '中程度—方向は設定されていますが、保護柵なし',
          '最適用途': '既知の障害モードのない新しいタスク',
        },
        {
          'アプローチ': 'ネガティブのみ',
          '説明': '「曖昧にしない、専門用語を使わない、トピックから外れない」',
          '効果': '低—モデルは何をするかについて方向がありません',
          '最適用途': 'アンチパターン。ほとんど推奨されません',
        },
        {
          'アプローチ': 'ポジティブ＋ネガティブ（3～5制約）',
          '説明': '「Xを書く、Yのトーンで、Zをしない」',
          '効果': '高—方向と保護柵を持つ厳密な仕様',
          '最適用途': '本番プロンプト、繰り返しワークフロー',
        },
        {
          'アプローチ': 'ヘビーネガティブ（7個以上制約）',
          '説明': '最小限の正の方向で7個以上の「してはいけない」ルール',
          '効果': '低～中—収穫逓減、混乱リスク',
          '最適用途': '避ける—組み合わせアプローチで再構成',
        },
      ],
    },
    modelComplianceTable: {
      id: 'model-compliance',
      title: 'ネガティブ制約へのモデル別対応',
      content: ['**ネガティブ制約への対応はモデルと制約タイプによって異なります。** 現在のモデルバージョンで特定の制約を確認してください。バージョン間でビヘイビアが変わります。'],
      tableFormat: true,
      columns: ['制約タイプ', 'GPT-4o / GPT-4.5', 'Claude Sonnet / Opus', 'Gemini Pro'],
      rows: [
        {
          '制約タイプ': '禁止ワード',
          'GPT-4o / GPT-4.5': '高い対応',
          'Claude Sonnet / Opus': '高い対応',
          'Gemini Pro': '高い対応',
        },
        {
          '制約タイプ': 'フォーマット禁止（「箇条書きなし」）',
          'GPT-4o / GPT-4.5': '高い対応',
          'Claude Sonnet / Opus': '高い対応',
          'Gemini Pro': '中程度—長い出力で時々無視',
        },
        {
          '制約タイプ': 'コンテンツ禁止（「医学的助言なし」）',
          'GPT-4o / GPT-4.5': '高い対応（デフォルト安全層を追加）',
          'Claude Sonnet / Opus': '高い対応',
          'Gemini Pro': '高い対応',
        },
        {
          '制約タイプ': '振る舞い制約（「絶対に作らない」）',
          'GPT-4o / GPT-4.5': '中程度—出力確認と共に使用',
          'Claude Sonnet / Opus': '高い対応—明示的制約によく対応',
          'Gemini Pro': '中程度—重要なタスクで確認',
        },
      ],
    },
    example: {
      id: 'example',
      title: '例：ネガティブプロンプティングなし／あり',
      content: [
        '**ネガティブプロンプティングの効果は、ジェネリックなプロンプトと明示的な「してはいけないこと」ルールをエンコードするプロンプトを比較するときに明確になります。** 製品説明の例です。',
        '**[悪いプロンプト]**',
        '「新しい分析ダッシュボードの製品説明を書いてください。」',
        '**[良いプロンプト]**',
        '「あなたはB2Bプロダクトマーケティングマネージャーです。タスク：オペレーション責任者を対象とした新しい分析ダッシュボードの製品説明を書いてください。制約（ネガティブプロンプティング）：\'革新的\'、\'破壊的\'、\'ゲームチェンジャー\'のような大げさな言葉を使わないでください。競合他社に言及したり、他のツールと比較しないでください。将来の機能を約束しないでください。今日存在するものだけを説明してください。180語を超えないでください。出力形式：概要用に1つの短い段落、その後に主要なメリット用に3つの箇条書き。」',
        '「良い」バージョンは既知の落とし穴（大げさ、推測、比較）を直接指示にエンコードし、手動クリーンアップの必要を減らします。',
      ],
      blockquote: '悪いプロンプトはネガティブルールの欠如で失敗しません。正の方向なしで「してはいけないこと」ルールを追加することは同様に弱いです。公式：何をするかを述べ、フォーマットを設定してから、既知の障害モードのための3～5個の具体的な「してはいけないこと」ルールを追加します。',
      blockquoteSource: 'ポジティブ＋ネガティブ＝厳密な仕様',
    },
    whenToUse: {
      id: 'when-to-use',
      title: 'いつ使うか',
      content: [
        '**見たくないことについて明確な例があるときはつねにネガティブプロンプティングを使用してください。** 同じ間違いが繰り返し現れる反復ワークフローで特に役立ちます。',
        '典型的なユースケース：',
      ],
      items: [
        '顧客コミュニケーション。トーン、主張、約束は厳密なガイドラインに従う必要があります',
        '規制コンテキスト（金融、医療、法律）。特定の種類のアドバイスまたは言葉遣いを避ける必要があります',
        'インターナル文書またはレポート。機密詳細、個人データ、推測を含めてはいけません',
        'パブリックコンテンツ。機密トピック、政治的意見、議論の余地のある言語を避けたいのです',
      ],
      blockquote: 'ポジティブガイダンス（「明確かつ技術的に書く」）はヘビーネガティブ（「曖昧にしない、簡略化しない、詳細を省かない」）より信頼性があります。6個以上のネガティブルール書いているのに気づいたら、まずポジティブバージョンを書き直し、その後ネガティブを使って特定の障害モードだけを修正します。',
      blockquoteSource: '混乱閾値',
    },
    howToStart: {
      id: 'how-to-use',
      title: '使い方',
      numberedItems: [
        '**出力で見たくないものを特定します：特定の単語、トーン、スタイル、アプローチ。** 例：「マーケティング用語を使わない。約束をしない。競合他社を参照しない。」',
        '**「してはいけない」「してはいけません」「絶対にしない」言語を使ってネガティブを明示的に述べます。** 「できれば避ける」のようなソフト言葉は効果的ではありません。直接的です：「\'破壊的\'、\'革新的\'、\'AI駆動\'という単語を絶対に使わないでください。」',
        '**ネガティブ例を提供します：モデルに明示的に見たくないものを見せます。** 例：「こう書かないでください：\'AI解決策で成長を爆発させます。\'こう書いてください：[ポジティブ例]。」',
        '**正と負のガイダンスを結合します。** 避けることだけ言わないでください。代わりに何をするかも言ってください。例：「大げさな言語を使わない。代わりに具体的で測定可能なメリットに焦点を合わせてください。」',
        '**ネガティブプロンプティングを控えめに使用します。時々モデルを混乱させることがあります。** ポジティブガイダンス（「明確かつ技術的に書く」）はヘビーネガティブより効果的です。両方のアプローチのバランスをとります。',
      ],
    },
    inPromptQuorum: {
      title: 'PromptQuorumでのネガティブプロンプティング',
      content: [
        '**PromptQuorumはマルチモデルディスパッチツールです。ネガティブプロンプティングを毎回書き直すのではなく、再利用可能なフレームワークに組み込むことができます。** 標準ネガティブ制約を一度定義し、多くのタスクに添付します。',
        'PromptQuorumを使用して、以下のことができます：',
      ],
      items: [
        'ネガティブプロンプティングブロック（例：「禁止フレーズ」「禁止コンテンツ」「スタイル制限」）をSPECS、RTF、CRAFTなどのフレームワークに追加し、常に適用されるようにします',
        'ブランドまたはチーム用の「してはいけないこと」ルールの共有リストを維持し、すべてのプロンプトとモデル全体で一貫した保護柵を保証します',
        '同じネガティブ制約プロンプトを異なるモデルで実行し、どのプロバイダが最もあなたの限界に従うかを見てください',
      ],
    },
    pqConversion: {
      content: [
        'ネガティブプロンプティングをプロンプトアーキテクチャの一部として扱うことで、PromptQuorumはあなたが過去の間違いを永続的で再利用可能な制約に変換するのを助けます。',
      ],
    },
    faqSection: {
      id: 'faq',
      title: 'よくある質問',
      faqs: [
        {
          q: 'ネガティブプロンプティングとは何ですか?',
          a: 'ネガティブプロンプティングは、プロンプトに明示的な「してはいけないこと」ルールをポジティブガイダンスと共に追加することです。これらのルールはコンテンツ（医学的助言なし）、トーン（大げさな言葉なし）、構造（箇条書きなし）、または振る舞い（データを作らない）を制約します。各ルールは既知の障害モードを防ぐ保護柵として機能します。',
        },
        {
          q: 'ネガティブプロンプティングはすべてのAIモデルで機能しますか?',
          a: 'はい。GPT-4o/4.5、Claude Sonnet/Opus、Gemini Proはすべてハードなネガティブ制約（「してはいけません」「絶対にしない」「してはいけない」）に対応します。対応はモデルと制約タイプによって異なります。フォーマット禁止は時々Gemini Proの長い出力で矛盾して適用されます。現在のモデルバージョンで特定の制約をテストしてください。',
        },
        {
          q: 'いくつのネガティブ制約を使用すべきですか?',
          a: 'プロンプトあたり3～5個に制限してください。5～6個以上のネガティブルールはモデルを混乱させ、ルールが無視されるか、出力が慎重になりすぎます。関連ルールをグループ化します：「大げさな言葉（革新的、破壊的、ゲームチェンジング）を使わない」は1つの制約です。',
        },
        {
          q: 'ネガティブプロンプティングはコンテンツフィルタリングと同じですか?',
          a: 'いいえ。コンテンツフィルタリングはプロンプト指示に関係なく特定の出力をブロックする外部安全層です。ネガティブプロンプティングはイン・プロンプト技術で生成を形作ります。相互補完的です：コンテンツフィルタは安全違反を処理します。ネガティブプロンプティングはブランド、トーン、ドメイン固有制約を処理します。',
        },
        {
          q: 'クリエイティブタスクにネガティブプロンプティングを使用できますか?',
          a: 'はい。クリエイティブ作業の場合、ネガティブプロンプティングは一般的なフレーズ（「クリシェなし」）、構造的選択（「3幕構成なし」）、または特定の参照（「戦争のメタファーなし」）を防ぎます。同じ3～5ルールを適用してください。ネガティブが多すぎるとクリエイティブの範囲が制限されます。',
        },
        {
          q: 'ネガティブプロンプティングは幻覚防止に役立ちますか?',
          a: '正確に制約されたときに特定の幻覚タイプを減らします。「存在することが確実でない限り、出典を引用しないでください」と「不確実な場合は、推測するのではなく言ってください」は特定の障害モードの幻覚を減らします。幻覚リスクを完全には排除しません。高リスク事実主張には出力確認を使用してください。',
        },
        {
          q: 'テキストと画像AI のネガティブプロンプティングに違いはありますか?',
          a: 'はい。画像生成（DALL-E、Stable Diffusion、Midjourney）では、ネガティブプロンプティングは正式な別のパラメータフィールドです。テキストLLMでは、ネガティブプロンプティングはプロンプトテキストに直接「してはいけないこと」ルールとして組み込まれています。このガイドはテキストLLMのネガティブプロンプティングをカバーします。',
        },
        {
          q: 'ネガティブ制約が機能しているかテストするにはどうしますか?',
          a: '同じプロンプトを3～5回実行し、制約された要素が現れるかチェックしてください。重要な制約については、PromptQuorumのマルチモデルディスパッチを使用して複数のモデルでテストしてください。モデルが一貫してルールを違反する場合は、「避ける」から「してはいけません」または「絶対にしない」に言葉遣いを強化してください。',
        },
        {
          q: 'ネガティブプロンプティングは規制コンプライアンス（個人情報保護法など）とどう一致しますか?',
          a: '個人情報保護法は敏感な職業データ（金融、医療、法務）を扱うときにローカルAIまたは強く制約されたAIを推奨しています。ネガティブプロンプティングはコンプライアンスを尊重するのに役立ちます。各規制要件を「してはいけないこと」ルールにマップし、適用された制約の監査証跡を保持してください。',
        },
        {
          q: 'エンタープライズコンテキストでのネガティブプロンプティングの一般的な落とし穴は何ですか?',
          a: '課題には以下が含まれます：（1）法的要件は厳格で地域によって異なり、ネガティブプロンプティングはこれを細かくキャプチャする必要があります。（2）コンプライアンス文書は広範です。制約は監査可能である必要があります。（3）言語精度が重要です。日本のユーザーは正確な定式化を期待しています。（4）大規模な組織は制約テンプレートを集中管理し、チーム全体で一貫性を保証する必要があります。PromptQuorumはこれを再利用可能な制約セットと監査証跡で対処します。',
        },
      ],
    },
    relatedReading: {
      items: [
        { title: '制約付きプロンプティング', url: '/ja/prompt-engineering/constrained-prompting' },
        { title: 'プロンプトの5つの構成要素', url: '/ja/prompt-engineering/5-building-blocks-of-a-prompt' },
        { title: 'AI幻覚', url: '/ja/prompt-engineering/ai-hallucinations' },
        { title: 'プロンプトインジェクションとセキュリティ', url: '/ja/prompt-engineering/prompt-injection-and-security' },
        { title: '温度とTop-P', url: '/ja/prompt-engineering/temperature-and-top-p' },
        { title: 'ゼロショットとフューショット', url: '/ja/prompt-engineering/zero-shot-vs-few-shot-prompting' },
      ],
    },
    sources: {
      items: [
        'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        'OpenAI. (2026). "Prompt Engineering Guide." [platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
        'Anthropic. (2026). "Prompt Engineering Overview." [docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
      ],
    },
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'ネガティブプロンプティングの使い方',
    inLanguage: 'ja',
    step: [
      { '@type': 'HowToStep', position: 1, name: '見たくないものを特定', text: '出力で見たくないものを特定します：特定の単語、トーン、スタイル、アプローチ。例：「マーケティング用語を使わない。約束をしない。競合他社を参照しない。」' },
      { '@type': 'HowToStep', position: 2, name: 'ネガティブを明示的に述べる', text: '「してはいけない」「してはいけません」「絶対にしない」言語を使ってネガティブを明示的に述べます。「できれば避ける」のようなソフト言葉は効果的ではありません。直接的です：「\'破壊的\'、\'革新的\'、\'AI駆動\'という単語を絶対に使わないでください。」' },
      { '@type': 'HowToStep', position: 3, name: 'ネガティブ例を提供', text: 'ネガティブ例を提供します：モデルに明示的に見たくないものを見せます。例：「こう書かないでください：\'AI解決策で成長を爆発させます。\'こう書いてください：[ポジティブ例]。」' },
      { '@type': 'HowToStep', position: 4, name: '正と負を結合', text: '正と負のガイダンスを結合します。避けることだけ言わないでください。代わりに何をするかも言ってください。例：「大げさな言語を使わない。代わりに具体的で測定可能なメリットに焦点を合わせてください。」' },
      { '@type': 'HowToStep', position: 5, name: '控えめに使用', text: 'ネガティブプロンプティングを控えめに使用します。時々モデルを混乱させることがあります。ポジティブガイダンス（「明確かつ技術的に書く」）はヘビーネガティブより効果的です。両方のアプローチのバランスをとります。' },
    ],
    totalTime: 'PT8M',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ja',
    mainEntity: [
      { '@type': 'Question', name: 'ネガティブプロンプティングとは何ですか?', acceptedAnswer: { '@type': 'Answer', text: 'ネガティブプロンプティングは、プロンプトに明示的な「してはいけないこと」ルールをポジティブガイダンスと共に追加することです。これらのルールはコンテンツ（医学的助言なし）、トーン（大げさな言葉なし）、構造（箇条書きなし）、または振る舞い（データを作らない）を制約します。各ルールは既知の障害モードを防ぐ保護柵として機能します。' } },
      { '@type': 'Question', name: 'ネガティブプロンプティングはすべてのAIモデルで機能しますか?', acceptedAnswer: { '@type': 'Answer', text: 'はい。GPT-4o/4.5、Claude Sonnet/Opus、Gemini Proはすべてハードなネガティブ制約（「してはいけません」「絶対にしない」「してはいけない」）に対応します。対応はモデルと制約タイプによって異なります。フォーマット禁止は時々Gemini Proの長い出力で矛盾して適用されます。現在のモデルバージョンで特定の制約をテストしてください。' } },
      { '@type': 'Question', name: 'いくつのネガティブ制約を使用すべきですか?', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトあたり3～5個に制限してください。5～6個以上のネガティブルールはモデルを混乱させ、ルールが無視されるか、出力が慎重になりすぎます。関連ルールをグループ化します：「大げさな言葉（革新的、破壊的、ゲームチェンジング）を使わない」は1つの制約です。' } },
      { '@type': 'Question', name: 'ネガティブプロンプティングはコンテンツフィルタリングと同じですか?', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。コンテンツフィルタリングはプロンプト指示に関係なく特定の出力をブロックする外部安全層です。ネガティブプロンプティングはイン・プロンプト技術で生成を形作ります。相互補完的です：コンテンツフィルタは安全違反を処理します。ネガティブプロンプティングはブランド、トーン、ドメイン固有制約を処理します。' } },
      { '@type': 'Question', name: 'クリエイティブタスクにネガティブプロンプティングを使用できますか?', acceptedAnswer: { '@type': 'Answer', text: 'はい。クリエイティブ作業の場合、ネガティブプロンプティングは一般的なフレーズ（「クリシェなし」）、構造的選択（「3幕構成なし」）、または特定の参照（「戦争のメタファーなし」）を防ぎます。同じ3～5ルールを適用してください。ネガティブが多すぎるとクリエイティブの範囲が制限されます。' } },
      { '@type': 'Question', name: 'ネガティブプロンプティングは幻覚防止に役立ちますか?', acceptedAnswer: { '@type': 'Answer', text: '正確に制約されたときに特定の幻覚タイプを減らします。「存在することが確実でない限り、出典を引用しないでください」と「不確実な場合は、推測するのではなく言ってください」は特定の障害モードの幻覚を減らします。幻覚リスクを完全には排除しません。高リスク事実主張には出力確認を使用してください。' } },
      { '@type': 'Question', name: 'テキストと画像AI のネガティブプロンプティングに違いはありますか?', acceptedAnswer: { '@type': 'Answer', text: 'はい。画像生成（DALL-E、Stable Diffusion、Midjourney）では、ネガティブプロンプティングは正式な別のパラメータフィールドです。テキストLLMでは、ネガティブプロンプティングはプロンプトテキストに直接「してはいけないこと」ルールとして組み込まれています。このガイドはテキストLLMのネガティブプロンプティングをカバーします。' } },
      { '@type': 'Question', name: 'ネガティブ制約が機能しているかテストするにはどうしますか?', acceptedAnswer: { '@type': 'Answer', text: '同じプロンプトを3～5回実行し、制約された要素が現れるかチェックしてください。重要な制約については、PromptQuorumのマルチモデルディスパッチを使用して複数のモデルでテストしてください。モデルが一貫してルールを違反する場合は、「避ける」から「してはいけません」または「絶対にしない」に言葉遣いを強化してください。' } },
      { '@type': 'Question', name: 'ネガティブプロンプティングは規制コンプライアンス（個人情報保護法など）とどう一致しますか?', acceptedAnswer: { '@type': 'Answer', text: '個人情報保護法は敏感な職業データ（金融、医療、法務）を扱うときにローカルAIまたは強く制約されたAIを推奨しています。ネガティブプロンプティングはコンプライアンスを尊重するのに役立ちます。各規制要件を「してはいけないこと」ルールにマップし、適用された制約の監査証跡を保持してください。' } },
      { '@type': 'Question', name: 'エンタープライズコンテキストでのネガティブプロンプティングの一般的な落とし穴は何ですか?', acceptedAnswer: { '@type': 'Answer', text: '課題には以下が含まれます：（1）法的要件は厳格で地域によって異なり、ネガティブプロンプティングはこれを細かくキャプチャする必要があります。（2）コンプライアンス文書は広範です。制約は監査可能である必要があります。（3）言語精度が重要です。日本のユーザーは正確な定式化を期待しています。（4）大規模な組織は制約テンプレートを集中管理し、チーム全体で一貫性を保証する必要があります。PromptQuorumはこれを再利用可能な制約セットと監査証跡で対処します。' } },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'ja',
    name: 'ネガティブ vs ポジティブ：効果比較',
    numberOfItems: 4,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ポジティブのみ', description: '「明確に書く、具体的にする、専門的なトーンを使う」' },
      { '@type': 'ListItem', position: 2, name: 'ネガティブのみ', description: '「曖昧にしない、専門用語を使わない、トピックから外れない」' },
      { '@type': 'ListItem', position: 3, name: 'ポジティブ＋ネガティブ（3～5制約）', description: '「Xを書く、Yのトーンで、Zをしない」' },
      { '@type': 'ListItem', position: 4, name: 'ヘビーネガティブ（7個以上制約）', description: '最小限の正の方向で7個以上の「してはいけない」ルール' },
    ],
  },
},
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: '消极提示法：告诉AI不要做什么',
      intro: '消极提示法是一种提示工程技术，通过明确指定模型应该避免的内容、风格、结构或行为，确保AI输出保持在明确的边界范围内。它充当您正常指令之上的"安全保护层"。',
      publishDate: '2026-03-26',
      dateModified: '2026-05-04',
      readTime: '阅读约13分钟',
      next_refresh_due: '2026-11-03',
      metaDescription: '消极提示法完整指南：为禁用词、禁止话题和格式限制添加"不要"规则。4类约束模型，含GPT-4o、Claude、Gemini合规对比。',
      primaryTerm: '消极提示法',
      seoTitle: '消极提示法完全指南：用4类禁止规则控制AI输出',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '消极提示法：告诉AI不要做什么',
        description: '消极提示法的定义、重要性及实施方法，帮助您在安全、合规和品牌对齐的边界内维持AI输出质量。',
        datePublished: '2026-03-26',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/negative-prompting',
        inLanguage: 'zh',
        keywords: ['消极提示法', '提示工程', '安全防护', 'PromptQuorum'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '消极提示法' },
          { '@type': 'Thing', name: '提示工程' },
          { '@type': 'Thing', name: '安全防护' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      sections: {
        whatIsNegativePrompting: { title: '什么是消极提示法', content: ['**消极提示法是指在提示中添加明确的"不要做"规则，与您期望模型执行的内容并行。** 与其仅描述目标输出，您还需指定不要涉及的主题、语气、格式或常见错误。', '这些负面指令可涵盖：禁用词汇、不能涉及的内容类别、禁区观点或您不需要的特定风格（例如"不要使用笑话""不要用emoji"或"避免营销用语"）。消极规则越清晰，模型越容易保持对齐。'] },
        whyItMatters: { title: '为什么消极提示法很重要', content: ['**消极提示法很重要，因为现实中的AI输出不仅受目标限制，更受品牌、法律、安全和质量约束的限制。** 一个好的结果通常是"准确且符合边界"，而不仅仅是"有用"。', '消极提示法帮助您：'], items: ['防止已经出现过的特定问题，如过度销售、臆断或不必要的免责声明。', '直接在提示中执行品牌和语气规则，例如避免行业术语或禁用形容词。', '减少人工编辑需求，因为许多常见修正都可通过明确的"不要"指导预先排除。'] },
        useNote: { content: ['正确使用消极提示法，可以将过去的错误转化为可复用的防护机制。'] },
        whatYouCanConstrain: { title: '消极提示法可以约束的内容类型', content: ['**您可以将消极提示法应用于内容、语气、结构和行为。** 关键是要足够具体，让模型清楚地知道要避免什么。', '常见的负面约束：'], items: ['内容：不能提供医学建议、不能提及竞争对手、不能给出法律结论。', '语气：不能使用"革命性""颠覆性"等夸大词汇、禁用emoji、避免讽刺语气。', '结构：不能添加前言部分、不能使用序号列表、不能包含总结。', '行为：不能编造数据统计、不能凭空猜测——当不确定时应明确表示。'] },
        combiningNote: { content: ['将正面和负面指导结合，可以显著提高提示的精确性和有效性。'] },
        example: { title: '案例：不使用vs使用消极提示法的对比', content: ['**通过对比通用提示与编码明确"不要"规则的提示，消极提示法的效果就变得清晰了。** 以下是一个针对中国市场的产品描述案例。', '**【弱提示】**', '"为我们的新分析仪表板写一份产品描述。"', '**【好提示】**', '"您是一名B2B产品营销经理，面向国内大中型企业服务。任务：为我们的新数据分析仪表板撰写产品描述，目标受众是互联网和制造业的运营总监。约束条件（消极提示）：不能使用"革命性""突破性""AI赋能"等营销夸大词汇。不能提及竞争对手或进行产品对比。不能承诺未来功能——仅描述现有功能。字数不超过180字。格式要求：1个简洁概览段落+3个核心优势要点。"', '这个"好"提示版本将已知陷阱（营销言语、过度承诺、产品对标）直接编码进指令中，大幅减少了人工修改的必要。'] },
        whenToUse: { title: '何时使用消极提示法', content: ['**当您有明确的例子说明绝对不想看到的输出时，就应该使用消极提示法。** 它在需要重复执行、容易出现相同错误的工作流中特别有效。', '典型应用场景：'], items: ['客户沟通——语气、声明和承诺必须遵守严格规范。', '受管制领域（金融、医疗、法律）——必须避免特定类型的建议或措辞。', '内部文档或报告——不能包含机密内容、个人数据或未经证实的观点。', '对外内容——需避免敏感话题、政治观点或争议性表述。'] },
        productionNote: { content: ['对于快速、低风险的试验，消极提示法可保持简洁。随着提示逐步进入生产环境，您的"不要"规则列表通常会不断扩展。'] },
        inPromptQuorum: { title: 'PromptQuorum中的消极提示法', content: ['**PromptQuorum是一个多模型AI调度工具，可将消极提示法内置于可复用的框架中，而无需每次重新编写。** 您可以定义一次标准的负面约束，然后将其附加到多个任务中。', 'PromptQuorum让您能够：'], items: ['向SPECS（范围-目标-案例-约束-说明）、RTF或CRAFT等框架添加消极提示模块（如"禁用词""禁止内容""风格限制"），确保始终应用这些规则。', '为您的品牌或团队维护共享的"不要"规则列表，确保所有提示和模型中的防护机制保持一致。', '在不同模型上运行相同的负面约束提示，查看哪个模型最好地遵守您的边界限制。'] },
        pqConversion: { content: ['通过将消极提示法视为提示架构的组成部分，PromptQuorum帮助您将过往错误转化为持久可复用的约束条件。'] },
        practicalSuggestions: { title: '实用建议：在中国商业环境中的应用', content: ['消极提示法在国内商业场景中特别有价值。以下是几个务实的建议，帮助您在SaaS、电商、金融科技和供应链等领域有效应用：'], items: ['在SaaS销售描述中：禁用"最先进""全球领先"等绝对化表述。使用"支持""可以帮助"等更保守的措辞，符合国内消费者预期。', '在电商文案中：不能涉及"包治百病"等医疗声称、避免"国外品质"暗示、禁用虚假折扣承诺。', '在金融内容中：不能给出个人投资建议、避免"稳赚不赔"表述、必须清晰标注风险信息。', '在供应链和企业服务中：不能夸大效率提升比例（如"提升300%"）、避免未经验证的案例数字、明确标注假设条件。', '在API文档和开发者指南中：禁止模糊的技术描述、要求所有性能声明必须附带基准数据、避免与开源项目的不当对标。'] },
        howToStart: { title: '如何开始使用消极提示法', numberedItems: ['**第一步：列出您不要的具体内容——特定词汇、语气、风格或做法。** 例如：不使用营销术语、不做虚假承诺、不提及竞争对手品牌。', '**第二步：用明确的禁止性语言表述规则——"不要""必须不""永远不要"。** 模糊的表述如"尽量避免"效果较差。应该直接说："永远不要使用"颠覆""改变游戏规则"或"AI赋能"这样的词。"', '**第三步：提供反面案例——展示给模型看您明确不要什么样的输出。** 例如："不要这样写：\'用我们的AI方案突飞猛进。\'不要这样：\'我们的尖端平台采用机器学习。\'应该这样：[给出正面范文]。"', '**第四步：正负指导相结合——不仅说要避免什么，还要说做什么。** 例如："不要用营销语言。改为专注于具体、可量化的业务收益。"', '**第五步：适度使用消极提示——过多的禁止规则可能混淆模型。** 正面指导（"用清晰、专业的技术语言"）通常比严苛的禁令（"不要含糊、不要简化、不要遗漏细节"）更有效。要在两者之间找到平衡。'] },
        implementationChecklist: { title: '实施清单：确保消极提示法有效执行', content: ['为了确保消极提示法真正有效，建议按照以下清单逐项检查：'], items: ['□ 列出过去出现过至少2-3次的具体错误或不符合预期的输出。', '□ 将这些错误翻译成明确的"不要"规则，用中文直接、无歧义地表述。', '□ 对每条规则提供至少一个反面例子（错误的做法）和一个正面例子（正确的做法）。', '□ 在提示中同时包含3-5条正面指导（您期望看到的做法）。', '□ 在生产前用2-3个实际工作任务测试这些规则，验证模型的遵守程度。', '□ 定期回顾输出结果，如发现新的错误模式，及时补充和更新"不要"规则。'] },
      },
    },
};

