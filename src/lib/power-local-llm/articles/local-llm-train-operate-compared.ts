// Local Model Training & Operations Tools Compared: fine-tuning and observability
// Slug: local-llm-train-operate-compared
// Category comparison guide for the `train-operate` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// The per-attribute lists below were generated from those records (each value verified against the
// project's official README/site) and must also hold in each tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'Local Model Training & Operations Tools Compared (2026): Fine-Tuning and Observability',
    seoTitle: 'Local Fine-Tuning & LLM Observability Tools 2026',
    intro:
      'Tools for training and operating local language models are two different kinds of product — fine-tuning tools that adapt a model, and observability and evaluation tools that show how it behaves in use — and no single feature list compares them fairly. This guide compares 7 free and freemium tools, one kind at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 7 local model training and operations tools side by side: fine-tuning (LLaMA-Factory, Unsloth) and LLM observability and evaluation (Langfuse, Plano). LoRA and QLoRA, low-VRAM training, GGUF export, tracing, from official docs.',
    twitterDescription:
      'Local fine-tuning and LLM observability tools compared by kind — LoRA and QLoRA, low-VRAM training, GGUF export, tracing, evaluations — from official documentation.',
    audience:
      'Developers who want to fine-tune local models or monitor and evaluate LLM applications, and who want the differences laid out per kind of tool, not one blended list.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local fine-tuning tools compared',
    targetKeywords: [
      'local llm fine tuning tools comparison',
      'llama factory vs unsloth',
      'lora vs qlora tools',
      'llm observability open source',
      'langfuse alternatives self hosted',
      'fine tune llm on consumer gpu',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**The 7 local training and operations tools in the PromptQuorum directory split into two kinds that should be compared separately: fine-tuning tools (4) and observability and evaluation tools (3).** Among fine-tuning tools, [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document LoRA or QLoRA training; among observability tools, [Langfuse](/power-local-llm/langfuse-review) and [Plano](/power-local-llm/plano-review) document tracing of LLM calls. Use the comparison table below, and read each tool\'s own review before you install it.',
    quickAnswerTop: {
      en: {
        question: 'Which local fine-tuning or observability tool should I use?',
        answer:
          'It depends on the kind of tool, so compare within one kind at a time. For fine-tuning, pick by LoRA and QLoRA support, low-VRAM training, a web UI and export format; for observability, pick by tracing, evaluations, prompt management and self-hosting. Use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Fine-tuning: 4 tools compared on LoRA and QLoRA, web UI, multi-GPU training, low-VRAM mode and GGUF or Ollama export.',
          'Observability and evaluation: 3 tools compared on tracing, evaluations, prompt management, OpenTelemetry, Docker and local LLMs.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Fine-Tuning Tools: What Differs', anchor: 'finetune-differences' },
      { label: 'Observability and Evaluation: What Differs', anchor: 'observability-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local training and operations tools are two different kinds of product — fine-tuning tools and observability and evaluation tools — so the 7 tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'Some tools teach a model new behavior by fine-tuning it on your data, and others watch how a model application performs and score its answers. Comparing a trainer with a monitoring dashboard on the same features makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '7 tools, two kinds: fine-tuning (4) and observability and evaluation (3). A tool that does more than one job appears in each kind it belongs to.',
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no".',
          'This is a small group: the directory has no reviewed tools yet for the datasets and model-hub subcategories, so they are not compared here.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example LoRA and QLoRA support or tracing) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (roadmap only, an enterprise edition, or a separate package), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. The comparison does not rank the tools, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a kind of tool below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'Fine-Tuning Tools: What Differs',
        items: [
          '**LoRA and QLoRA.** [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document LoRA or QLoRA fine-tuning.',
          '**Web UI.** [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document a web UI for training.',
          '**Multi-GPU training.** [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document multi-GPU training.',
          '**Low-VRAM training.** [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document a low-VRAM or memory-saving mode.',
          '**Export to GGUF or Ollama.** [LLaMA-Factory](/power-local-llm/llama-factory-review) and [Unsloth](/power-local-llm/unsloth-review) document exporting models to GGUF or Ollama.',
          '**Sparse rows.** [LoRAX](/power-local-llm/lorax-review) and [Second Me](/power-local-llm/second-me-review) appear here for their fine-tuning-related features, but their documentation states none of the attributes compared, so their cells are dashes; see their reviews.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'Observability and Evaluation: What Differs',
        items: [
          '**Tracing.** [Langfuse](/power-local-llm/langfuse-review) and [Plano](/power-local-llm/plano-review) document tracing of LLM calls.',
          '**Evaluations.** [Langfuse](/power-local-llm/langfuse-review) document evaluations or scoring.',
          '**Prompt management.** [Langfuse](/power-local-llm/langfuse-review) document prompt management.',
          '**OpenTelemetry.** [Plano](/power-local-llm/plano-review) document OpenTelemetry support.',
          '**Docker and self-hosting.** [Langfuse](/power-local-llm/langfuse-review) and [Mission Control](/power-local-llm/mission-control-review) document Docker or self-hosted deployment.',
          '**Local LLMs.** [Langfuse](/power-local-llm/langfuse-review) document working with local or self-hosted LLMs.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not results. It says nothing about how good a fine-tuned model is, how fast training runs on your hardware, or how accurate an evaluation score is — PromptQuorum has not measured these for the listed tools.',
          'Dashes are gaps in the documentation we checked, not negative findings. Some tools may support a feature their README does not mention.',
          'Hardware needs for fine-tuning depend heavily on the model and settings; read the tool\'s review for realistic requirements before you start a training run.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the difference between a fine-tuning tool and an observability tool?',
            a: 'A fine-tuning tool adapts a model by training it on your data, often with parameter-efficient methods such as LoRA or QLoRA. An observability or evaluation tool records and scores how an LLM application behaves in use, for example by tracing each request. They do different jobs, so they are compared separately.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Why are there so few tools here?',
            a: 'The directory has few reviewed tools in this area so far, and none yet for datasets or model hubs. The comparison covers what is reviewed; more tools will be added as their reviews are written.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
          '[Local Inference Engines, Runtimes & Gateways Compared](/power-local-llm/local-llm-run-serve-compared) — the tools that run the models you train.',
          '[Local Coding Assistants, Agents & Workflow Tools Compared](/power-local-llm/local-llm-code-development-compared) — agent frameworks and workflow builders.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Model Training & Operations Tools Compared (2026): Fine-Tuning and Observability',
      description:
        'Compare 7 local model training and operations tools side by side: fine-tuning and LLM observability and evaluation, from official documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'en',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers fine-tuning local models and monitoring LLM applications' },
      about: [
        { '@type': 'Thing', name: 'LLM fine-tuning' },
        { '@type': 'Thing', name: 'LLM observability' },
        { '@type': 'Thing', name: 'LLM evaluation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Model Training & Operations Tools Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'Lokale Tools für Modelltraining und Betrieb im Vergleich (2026): Fine-Tuning und Observability',
    seoTitle: 'Lokales Fine-Tuning & LLM-Observability 2026',
    intro:
      'Tools für das Training und den Betrieb lokaler Sprachmodelle sind zwei verschiedene Produktarten — Fine-Tuning-Tools, die ein Modell anpassen, sowie Observability- und Evaluierungs-Tools, die zeigen, wie es sich im Einsatz verhält — und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht 7 kostenlose und Freemium-Tools, jeweils innerhalb einer Art, anhand einer Vergleichstabelle, die aus denselben Daten erzeugt wird wie der jeweilige PromptQuorum-Test des Tools, sodass Tabelle und Tests einander nicht widersprechen können.',
    metaDescription:
      'Vergleich von 7 lokalen Tools für Training und Betrieb: Fine-Tuning (LLaMA-Factory, Unsloth) sowie LLM-Observability und Evaluierung (Langfuse, Plano). LoRA und QLoRA, GGUF-Export, Tracing, laut offizieller Dokumentation.',
    twitterDescription:
      'Lokale Fine-Tuning- und LLM-Observability-Tools nach Art verglichen — LoRA und QLoRA, Training mit wenig VRAM, GGUF-Export, Tracing, Evaluierungen — laut offizieller Dokumentation.',
    audience:
      'Entwickler, die lokale Modelle feinabstimmen oder LLM-Anwendungen überwachen und evaluieren möchten und die Unterschiede nach Art des Tools aufgeschlüsselt sehen wollen, statt in einer gemischten Liste.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Fine-Tuning-Tools im Vergleich',
    targetKeywords: [
      'lokale llm fine-tuning tools vergleich',
      'llama factory vs unsloth',
      'lora vs qlora tools',
      'llm observability open source',
      'langfuse alternativen selbst gehostet',
      'llm fine-tuning auf consumer-gpu',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**Die 7 lokalen Tools für Training und Betrieb im PromptQuorum-Verzeichnis lassen sich in zwei Arten teilen, die getrennt verglichen werden sollten: Fine-Tuning-Tools (4) sowie Observability- und Evaluierungs-Tools (3).** Unter den Fine-Tuning-Tools dokumentieren [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) LoRA- oder QLoRA-Training; unter den Observability-Tools dokumentieren [Langfuse](/de/power-local-llm/langfuse-review) und [Plano](/de/power-local-llm/plano-review) das Tracing von LLM-Aufrufen. Nutzen Sie die Vergleichstabelle unten und lesen Sie den jeweiligen Test des Tools, bevor Sie es installieren.',
    quickAnswerTop: {
      en: {
        question: 'Welches lokale Fine-Tuning- oder Observability-Tool sollte ich verwenden?',
        answer:
          'Das hängt von der Art des Tools ab, vergleichen Sie also jeweils innerhalb einer Art. Beim Fine-Tuning wählen Sie nach LoRA- und QLoRA-Unterstützung, Training mit wenig VRAM, Web-Oberfläche und Exportformat; bei der Observability nach Tracing, Evaluierungen, Prompt-Verwaltung und Self-Hosting. Nutzen Sie die Tabelle unten, die aus der offiziellen Dokumentation des jeweiligen Tools erzeugt wird.',
        bullets: [
          'Fine-Tuning: 4 Tools verglichen nach LoRA und QLoRA, Web-Oberfläche, Multi-GPU-Training, Modus für wenig VRAM und GGUF- oder Ollama-Export.',
          'Observability und Evaluierung: 3 Tools verglichen nach Tracing, Evaluierungen, Prompt-Verwaltung, OpenTelemetry, Docker und lokalen LLMs.',
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts es nicht angibt, nicht dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'Fine-Tuning-Tools: Was sie unterscheidet', anchor: 'finetune-differences' },
      { label: 'Observability und Evaluierung: Was sie unterscheidet', anchor: 'observability-differences' },
      { label: 'Was dieser Vergleich nicht aussagen kann', anchor: 'limitations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Lokale Tools für Training und Betrieb sind zwei verschiedene Produktarten — Fine-Tuning-Tools sowie Observability- und Evaluierungs-Tools —, daher werden die 7 Tools im PromptQuorum-Verzeichnis innerhalb der jeweiligen Art verglichen, anhand einer Tabelle, die aus denselben Tooldaten erzeugt wird wie der jeweilige Test des Tools.',
          },
          {
            type: 'plain-terms',
            text: 'Manche Tools bringen einem Modell durch Fine-Tuning mit Ihren Daten neues Verhalten bei, andere beobachten, wie eine Modellanwendung arbeitet, und bewerten ihre Antworten. Einen Trainer und ein Monitoring-Dashboard anhand derselben Funktionen zu vergleichen, ergibt keinen Sinn, daher vergleicht dieser Leitfaden Gleiches mit Gleichem.',
          },
        ],
        items: [
          '7 Tools, zwei Arten: Fine-Tuning (4) sowie Observability und Evaluierung (3). Ein Tool, das mehr als eine Aufgabe erfüllt, erscheint in jeder Art, zu der es gehört.',
          'Die Tabelle wird aus dem Datensatz jedes Tools erzeugt und mit dessen offizieller README oder Website abgeglichen; ein Strich bedeutet „in der Dokumentation nicht angegeben“, niemals „nein“.',
          'Das ist eine kleine Gruppe: Für die Unterkategorien Datensätze und Modell-Hubs gibt es im Verzeichnis noch keine getesteten Tools, daher werden sie hier nicht verglichen.',
          'Jeder Toolname in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Tools — Preis, Lizenz, Plattformen, Hardwareanforderungen und kategoriespezifische Merkmale — werden einmalig im Verzeichniseintrag des Tools gespeichert. Die Vergleichstabelle unten wird aus diesen Einträgen erzeugt, und der Test des Tools stützt sich auf denselben Eintrag, sodass beide keine unterschiedlichen Werte nennen können.',
          'Kategoriespezifische Merkmale (zum Beispiel LoRA- und QLoRA-Unterstützung oder Tracing) wurden der offiziellen README oder Website des jeweiligen Projekts entnommen und am genauen Wortlaut dort geprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich, statt zu raten; wo eine Aussage eingeschränkt ist (nur Roadmap, eine Enterprise-Edition oder ein separates Paket), wird das Merkmal aus der Tabelle weggelassen und stattdessen im Test des Tools behandelt.',
          'Nur Tools mit eigenem PromptQuorum-Test stehen in der Tabelle. Der Vergleich erstellt keine Rangfolge der Tools, denn welches das richtige ist, hängt von Ihrer Rahmenbedingung ab.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content: 'Wählen Sie unten eine Art von Tool und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Toolnamen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'Fine-Tuning-Tools: Was sie unterscheidet',
        items: [
          '**LoRA und QLoRA.** [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) dokumentieren LoRA- oder QLoRA-Fine-Tuning.',
          '**Web-Oberfläche.** [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) dokumentieren eine Web-Oberfläche für das Training.',
          '**Multi-GPU-Training.** [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) dokumentieren Multi-GPU-Training.',
          '**Training mit wenig VRAM.** [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) dokumentieren einen Modus für wenig VRAM bzw. zum Speichersparen.',
          '**Export nach GGUF oder Ollama.** [LLaMA-Factory](/de/power-local-llm/llama-factory-review) und [Unsloth](/de/power-local-llm/unsloth-review) dokumentieren den Export von Modellen nach GGUF oder Ollama.',
          '**Dünn besetzte Zeilen.** [LoRAX](/de/power-local-llm/lorax-review) und [Second Me](/de/power-local-llm/second-me-review) erscheinen hier wegen ihrer Fine-Tuning-bezogenen Funktionen, doch ihre Dokumentation nennt keines der verglichenen Merkmale, daher zeigen ihre Zellen Striche; siehe ihre Tests.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'Observability und Evaluierung: Was sie unterscheidet',
        items: [
          '**Tracing.** [Langfuse](/de/power-local-llm/langfuse-review) und [Plano](/de/power-local-llm/plano-review) dokumentieren das Tracing von LLM-Aufrufen.',
          '**Evaluierungen.** [Langfuse](/de/power-local-llm/langfuse-review) dokumentiert Evaluierungen bzw. Bewertungen.',
          '**Prompt-Verwaltung.** [Langfuse](/de/power-local-llm/langfuse-review) dokumentiert Prompt-Verwaltung.',
          '**OpenTelemetry.** [Plano](/de/power-local-llm/plano-review) dokumentiert OpenTelemetry-Unterstützung.',
          '**Docker und Self-Hosting.** [Langfuse](/de/power-local-llm/langfuse-review) und [Mission Control](/de/power-local-llm/mission-control-review) dokumentieren Docker- bzw. selbst gehostete Bereitstellung.',
          '**Lokale LLMs.** [Langfuse](/de/power-local-llm/langfuse-review) dokumentiert die Arbeit mit lokalen oder selbst gehosteten LLMs.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht aussagen kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, keine Ergebnisse. Er sagt nichts darüber aus, wie gut ein feinabgestimmtes Modell ist, wie schnell das Training auf Ihrer Hardware läuft oder wie genau ein Evaluierungswert ist — PromptQuorum hat das für die aufgeführten Tools nicht gemessen.',
          'Striche sind Lücken in der von uns geprüften Dokumentation, keine negativen Befunde. Manche Tools unterstützen möglicherweise eine Funktion, die ihre README nicht erwähnt.',
          'Die Hardwareanforderungen für Fine-Tuning hängen stark vom Modell und den Einstellungen ab; lesen Sie den Test des Tools für realistische Anforderungen, bevor Sie einen Trainingslauf starten.',
          'Tools ändern sich schnell. Der Test jedes Tools nennt die Version, gegen die er geprüft wurde, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist der Unterschied zwischen einem Fine-Tuning-Tool und einem Observability-Tool?',
            a: 'Ein Fine-Tuning-Tool passt ein Modell an, indem es mit Ihren Daten trainiert wird, oft mit parametereffizienten Methoden wie LoRA oder QLoRA. Ein Observability- oder Evaluierungs-Tool zeichnet auf und bewertet, wie sich eine LLM-Anwendung im Einsatz verhält, zum Beispiel durch das Tracing jeder Anfrage. Sie erfüllen unterschiedliche Aufgaben und werden daher getrennt verglichen.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die eigene Dokumentation des Projekts dieses Merkmal nicht angibt. Er bedeutet nicht, dass die Funktion fehlt; prüfen Sie den Test des Tools oder sein Repository.',
          },
          {
            q: 'Warum gibt es hier so wenige Tools?',
            a: 'Das Verzeichnis enthält in diesem Bereich bisher nur wenige getestete Tools und noch keine für Datensätze oder Modell-Hubs. Der Vergleich deckt ab, was getestet ist; weitere Tools werden hinzugefügt, sobald ihre Tests geschrieben sind.',
          },
          {
            q: 'Hat eines dieser Tools einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt der Erstellung keine Affiliate-Beziehung zu einem Tool in diesem Vergleich, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert sowie immer dann, wenn der Test eines der aufgeführten Tools aktualisiert wird, da die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README oder Website jedes Tools, aufgeführt im PromptQuorum-Test des Tools (verlinkt aus der Vergleichstabelle).',
          '[PromptQuorum-Verzeichnis für lokale KI-Apps](/de/directory) — der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Verzeichnis lokaler Software](/de/directory) — alle über 200 lokalen KI-Apps durchsuchen und nach Kategorie filtern.',
          '[Lokale Inferenz-Engines, Runtimes und Gateways im Vergleich](/de/power-local-llm/local-llm-run-serve-compared) — die Tools, die die von Ihnen trainierten Modelle ausführen.',
          '[Lokale Coding-Assistenten, Agenten und Workflow-Tools im Vergleich](/de/power-local-llm/local-llm-code-development-compared) — Agenten-Frameworks und Workflow-Builder.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Tools für Modelltraining und Betrieb im Vergleich (2026): Fine-Tuning und Observability',
      description:
        'Vergleich von 7 lokalen Tools für Modelltraining und Betrieb: Fine-Tuning sowie LLM-Observability und Evaluierung, laut offizieller Dokumentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'de',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale Modelle feinabstimmen und LLM-Anwendungen überwachen' },
      about: [
        { '@type': 'Thing', name: 'LLM-Fine-Tuning' },
        { '@type': 'Thing', name: 'LLM-Observability' },
        { '@type': 'Thing', name: 'LLM-Evaluierung' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Tools für Modelltraining und Betrieb im Vergleich (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'Comparatif des outils locaux d\'entraînement et d\'exploitation de modèles (2026) : fine-tuning et observabilité',
    seoTitle: 'Outils locaux de fine-tuning et d\'observabilité LLM 2026',
    intro:
      'Les outils d\'entraînement et d\'exploitation de modèles de langage locaux sont deux types de produits différents — des outils de fine-tuning qui adaptent un modèle, et des outils d\'observabilité et d\'évaluation qui montrent son comportement à l\'usage — et aucune liste de fonctionnalités unique ne permet de les comparer équitablement. Ce guide compare 7 outils gratuits et freemium, un type à la fois, à l\'aide d\'un tableau comparatif généré à partir des mêmes données que l\'avis PromptQuorum de chaque outil, de sorte que le tableau et les avis ne peuvent pas se contredire.',
    metaDescription:
      'Comparez 7 outils locaux d\'entraînement et d\'exploitation de modèles : fine-tuning (LLaMA-Factory, Unsloth) et observabilité LLM (Langfuse, Plano). LoRA et QLoRA, VRAM réduite, export GGUF, tracing.',
    twitterDescription:
      'Outils locaux de fine-tuning et d\'observabilité LLM comparés par type — LoRA et QLoRA, entraînement à faible VRAM, export GGUF, tracing, évaluations — d\'après la documentation officielle.',
    audience:
      'Développeurs qui veulent affiner des modèles locaux ou surveiller et évaluer des applications LLM, et qui souhaitent voir les différences par type d\'outil plutôt qu\'une liste unique mélangée.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparatif outils fine-tuning locaux',
    targetKeywords: [
      'comparatif outils fine-tuning llm local',
      'llama factory vs unsloth',
      'lora vs qlora outils',
      'observabilité llm open source',
      'alternatives langfuse auto-hébergé',
      'fine-tuning llm sur gpu grand public',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**Les 7 outils locaux d\'entraînement et d\'exploitation du répertoire PromptQuorum se répartissent en deux types qu\'il faut comparer séparément : les outils de fine-tuning (4) et les outils d\'observabilité et d\'évaluation (3).** Parmi les outils de fine-tuning, [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent un entraînement LoRA ou QLoRA ; parmi les outils d\'observabilité, [Langfuse](/fr/power-local-llm/langfuse-review) et [Plano](/fr/power-local-llm/plano-review) documentent le tracing des appels LLM. Utilisez le tableau comparatif ci-dessous et lisez l\'avis de chaque outil avant de l\'installer.',
    quickAnswerTop: {
      en: {
        question: 'Quel outil local de fine-tuning ou d\'observabilité choisir ?',
        answer:
          'Cela dépend du type d\'outil, il faut donc comparer un type à la fois. Pour le fine-tuning, choisissez selon la prise en charge de LoRA et QLoRA, l\'entraînement à faible VRAM, une interface web et le format d\'export ; pour l\'observabilité, choisissez selon le tracing, les évaluations, la gestion des prompts et l\'auto-hébergement. Utilisez le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          'Fine-tuning : 4 outils comparés sur LoRA et QLoRA, interface web, entraînement multi-GPU, mode faible VRAM et export GGUF ou Ollama.',
          'Observabilité et évaluation : 3 outils comparés sur le tracing, les évaluations, la gestion des prompts, OpenTelemetry, Docker et les LLM locaux.',
          'Un tiret (—) signifie que la documentation du projet ne l\'indique pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Outils de fine-tuning : ce qui les distingue', anchor: 'finetune-differences' },
      { label: 'Observabilité et évaluation : ce qui les distingue', anchor: 'observability-differences' },
      { label: 'Ce que cette comparaison ne peut pas vous dire', anchor: 'limitations' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les outils locaux d\'entraînement et d\'exploitation sont deux types de produits différents — les outils de fine-tuning et les outils d\'observabilité et d\'évaluation — c\'est pourquoi les 7 outils du répertoire PromptQuorum sont comparés au sein de chaque type, à l\'aide d\'un tableau généré à partir des mêmes données que l\'avis de chaque outil.',
          },
          {
            type: 'plain-terms',
            text: 'Certains outils apprennent un nouveau comportement à un modèle en l\'affinant sur vos données, d\'autres surveillent les performances d\'une application à base de modèle et notent ses réponses. Comparer un outil d\'entraînement et un tableau de bord de supervision sur les mêmes fonctionnalités n\'a pas de sens ; ce guide compare donc des outils comparables.',
          },
        ],
        items: [
          '7 outils, deux types : fine-tuning (4) et observabilité et évaluation (3). Un outil qui remplit plusieurs rôles apparaît dans chaque type auquel il appartient.',
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié d\'après son README ou son site officiel ; un tiret signifie « non indiqué dans la documentation », jamais « non ».',
          'Ce groupe est restreint : le répertoire ne compte pas encore d\'outils évalués pour les sous-catégories des jeux de données et des hubs de modèles, ils ne sont donc pas comparés ici.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où sont traités l\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations de chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à la catégorie — sont stockées une seule fois, dans la fiche de l\'outil du répertoire. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à la catégorie (par exemple la prise en charge de LoRA et QLoRA ou le tracing) proviennent du README ou du site officiel de chaque projet et ont été vérifiés d\'après la formulation exacte qui s\'y trouve. Lorsque la documentation est muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (feuille de route uniquement, édition entreprise ou paquet séparé), l\'attribut est exclu du tableau et traité dans l\'avis de l\'outil.',
          'Seuls les outils disposant de leur propre avis PromptQuorum figurent dans le tableau. La comparaison ne classe pas les outils, car le bon choix dépend de votre contrainte.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content: 'Choisissez un type d\'outil ci-dessous, puis lisez la ligne de gauche à droite. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'Outils de fine-tuning : ce qui les distingue',
        items: [
          '**LoRA et QLoRA.** [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent le fine-tuning LoRA ou QLoRA.',
          '**Interface web.** [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent une interface web pour l\'entraînement.',
          '**Entraînement multi-GPU.** [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent l\'entraînement multi-GPU.',
          '**Entraînement à faible VRAM.** [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent un mode faible VRAM ou d\'économie de mémoire.',
          '**Export vers GGUF ou Ollama.** [LLaMA-Factory](/fr/power-local-llm/llama-factory-review) et [Unsloth](/fr/power-local-llm/unsloth-review) documentent l\'export de modèles vers GGUF ou Ollama.',
          '**Lignes peu renseignées.** [LoRAX](/fr/power-local-llm/lorax-review) et [Second Me](/fr/power-local-llm/second-me-review) figurent ici pour leurs fonctionnalités liées au fine-tuning, mais leur documentation n\'indique aucun des attributs comparés, leurs cellules sont donc des tirets ; consultez leurs avis.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'Observabilité et évaluation : ce qui les distingue',
        items: [
          '**Tracing.** [Langfuse](/fr/power-local-llm/langfuse-review) et [Plano](/fr/power-local-llm/plano-review) documentent le tracing des appels LLM.',
          '**Évaluations.** [Langfuse](/fr/power-local-llm/langfuse-review) documente les évaluations ou le scoring.',
          '**Gestion des prompts.** [Langfuse](/fr/power-local-llm/langfuse-review) documente la gestion des prompts.',
          '**OpenTelemetry.** [Plano](/fr/power-local-llm/plano-review) documente la prise en charge d\'OpenTelemetry.',
          '**Docker et auto-hébergement.** [Langfuse](/fr/power-local-llm/langfuse-review) et [Mission Control](/fr/power-local-llm/mission-control-review) documentent un déploiement Docker ou auto-hébergé.',
          '**LLM locaux.** [Langfuse](/fr/power-local-llm/langfuse-review) documente l\'utilisation avec des LLM locaux ou auto-hébergés.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que cette comparaison ne peut pas vous dire',
        items: [
          'Elle compare des capacités documentées, pas des résultats. Elle ne dit rien de la qualité d\'un modèle affiné, de la vitesse d\'entraînement sur votre matériel ni de la précision d\'un score d\'évaluation — PromptQuorum n\'a pas mesuré ces éléments pour les outils listés.',
          'Les tirets sont des lacunes de la documentation que nous avons consultée, pas des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ne mentionne pas.',
          'Les besoins matériels du fine-tuning dépendent fortement du modèle et des réglages ; lisez l\'avis de l\'outil pour connaître la configuration réaliste avant de lancer un entraînement.',
          'Les outils évoluent vite. L\'avis de chaque outil indique la version qui a été vérifiée, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quelle est la différence entre un outil de fine-tuning et un outil d\'observabilité ?',
            a: 'Un outil de fine-tuning adapte un modèle en l\'entraînant sur vos données, souvent avec des méthodes économes en paramètres comme LoRA ou QLoRA. Un outil d\'observabilité ou d\'évaluation enregistre et note le comportement d\'une application LLM à l\'usage, par exemple en traçant chaque requête. Ils remplissent des rôles différents, c\'est pourquoi ils sont comparés séparément.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet n\'indique pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Pourquoi y a-t-il si peu d\'outils ici ?',
            a: 'Le répertoire compte pour l\'instant peu d\'outils évalués dans ce domaine, et aucun pour les jeux de données ou les hubs de modèles. La comparaison couvre ce qui est évalué ; d\'autres outils seront ajoutés à mesure que leurs avis seront rédigés.',
          },
          {
            q: 'Un de ces outils a-t-il un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a aucune relation d\'affiliation avec les outils de cette comparaison au moment de la rédaction, et aucun lien ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence cette comparaison est-elle mise à jour ?',
            a: 'Elle est actualisée deux fois par an et chaque fois que l\'avis d\'un des outils listés est mis à jour, car le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README ou le site officiel de chaque outil, indiqué dans l\'avis PromptQuorum de l\'outil (lié depuis le tableau comparatif).',
          '[Répertoire PromptQuorum des applications d\'IA locale](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Répertoire des logiciels locaux](/fr/directory) — parcourez plus de 200 applications d\'IA locale et filtrez par catégorie.',
          '[Comparatif des moteurs d\'inférence, runtimes et passerelles locaux](/fr/power-local-llm/local-llm-run-serve-compared) — les outils qui exécutent les modèles que vous entraînez.',
          '[Comparatif des assistants de code, agents et outils de workflow locaux](/fr/power-local-llm/local-llm-code-development-compared) — frameworks d\'agents et constructeurs de workflows.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comparatif des outils locaux d\'entraînement et d\'exploitation de modèles (2026) : fine-tuning et observabilité',
      description:
        'Comparez 7 outils locaux d\'entraînement et d\'exploitation de modèles : fine-tuning et observabilité et évaluation LLM, d\'après la documentation officielle.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs qui affinent des modèles locaux et surveillent des applications LLM' },
      about: [
        { '@type': 'Thing', name: 'Fine-tuning de LLM' },
        { '@type': 'Thing', name: 'Observabilité des LLM' },
        { '@type': 'Thing', name: 'Évaluation des LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Comparatif des outils locaux d\'entraînement et d\'exploitation de modèles (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'Herramientas locales de entrenamiento y operación de modelos: comparativa (2026) — fine-tuning y observabilidad',
    seoTitle: 'Fine-tuning local y observabilidad de LLM 2026',
    intro:
      'Las herramientas para entrenar y operar modelos de lenguaje locales son dos tipos de producto distintos — herramientas de fine-tuning que adaptan un modelo, y herramientas de observabilidad y evaluación que muestran cómo se comporta en uso — y ninguna lista de características única las compara de forma justa. Esta guía compara 7 herramientas gratuitas y freemium, un tipo cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de PromptQuorum de cada herramienta, de modo que la tabla y los análisis no pueden contradecirse.',
    metaDescription:
      'Compara 7 herramientas locales de entrenamiento y operación de modelos: fine-tuning (LLaMA-Factory, Unsloth) y observabilidad y evaluación de LLM (Langfuse, Plano). LoRA y QLoRA, poca VRAM, exportación GGUF, trazado, según la documentación oficial.',
    twitterDescription:
      'Herramientas locales de fine-tuning y observabilidad de LLM comparadas por tipo — LoRA y QLoRA, entrenamiento con poca VRAM, exportación GGUF, trazado, evaluaciones — según la documentación oficial.',
    audience:
      'Desarrolladores que quieren hacer fine-tuning de modelos locales o monitorizar y evaluar aplicaciones de LLM, y que quieren ver las diferencias por tipo de herramienta, no en una lista mezclada.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparativa de herramientas de fine-tuning local',
    targetKeywords: [
      'comparativa herramientas fine-tuning llm local',
      'llama factory vs unsloth',
      'lora vs qlora herramientas',
      'observabilidad llm código abierto',
      'alternativas a langfuse autoalojado',
      'fine-tuning de llm en gpu doméstica',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**Las 7 herramientas locales de entrenamiento y operación del directorio de PromptQuorum se dividen en dos tipos que conviene comparar por separado: herramientas de fine-tuning (4) y herramientas de observabilidad y evaluación (3).** Entre las de fine-tuning, [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan el entrenamiento con LoRA o QLoRA; entre las de observabilidad, [Langfuse](/es/power-local-llm/langfuse-review) y [Plano](/es/power-local-llm/plano-review) documentan el trazado de las llamadas a LLM. Usa la tabla comparativa de abajo y lee el análisis propio de cada herramienta antes de instalarla.',
    quickAnswerTop: {
      en: {
        question: '¿Qué herramienta local de fine-tuning u observabilidad debería usar?',
        answer:
          'Depende del tipo de herramienta, así que compara dentro de un solo tipo cada vez. Para fine-tuning, elige según el soporte de LoRA y QLoRA, el entrenamiento con poca VRAM, una interfaz web y el formato de exportación; para observabilidad, elige según el trazado, las evaluaciones, la gestión de prompts y el autoalojamiento. Usa la tabla de abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          'Fine-tuning: 4 herramientas comparadas en LoRA y QLoRA, interfaz web, entrenamiento multi-GPU, modo de poca VRAM y exportación a GGUF u Ollama.',
          'Observabilidad y evaluación: 3 herramientas comparadas en trazado, evaluaciones, gestión de prompts, OpenTelemetry, Docker y LLM locales.',
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Herramientas de fine-tuning: qué las diferencia', anchor: 'finetune-differences' },
      { label: 'Observabilidad y evaluación: qué las diferencia', anchor: 'observability-differences' },
      { label: 'Lo que esta comparativa no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Las herramientas locales de entrenamiento y operación son dos tipos de producto distintos — herramientas de fine-tuning y herramientas de observabilidad y evaluación — por lo que las 7 herramientas del directorio de PromptQuorum se comparan dentro de cada tipo, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.',
          },
          {
            type: 'plain-terms',
            text: 'Algunas herramientas enseñan a un modelo un comportamiento nuevo mediante fine-tuning con tus datos, y otras vigilan cómo rinde una aplicación con modelos y puntúan sus respuestas. Comparar un entrenador con un panel de monitorización según las mismas características no tiene sentido, así que esta guía compara cosas del mismo tipo.',
          },
        ],
        items: [
          '7 herramientas, dos tipos: fine-tuning (4) y observabilidad y evaluación (3). Una herramienta que hace más de una tarea aparece en cada tipo al que pertenece.',
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa "no indicado en la documentación", nunca "no".',
          'Es un grupo pequeño: el directorio aún no tiene herramientas analizadas para las subcategorías de conjuntos de datos y hubs de modelos, por lo que aquí no se comparan.',
          'Cada nombre de herramienta de la tabla enlaza a su propio análisis de PromptQuorum, donde se explican los pasos de instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta — precio, licencia, plataformas, requisitos de hardware y atributos específicos de la categoría — se guardan una sola vez, en el registro de esa herramienta del directorio. La tabla comparativa de abajo se genera a partir de esos registros, y el análisis propio de la herramienta se apoya en el mismo registro, de modo que ambos no pueden indicar valores distintos.',
          'Los atributos específicos de la categoría (por ejemplo, el soporte de LoRA y QLoRA o el trazado) se tomaron del README o sitio web oficial de cada proyecto y se contrastaron con la redacción exacta allí. Cuando la documentación no dice nada, la tabla muestra un guion en lugar de suponer; cuando una afirmación está matizada (solo en la hoja de ruta, una edición empresarial o un paquete aparte), el atributo se omite de la tabla y se trata en el análisis de la herramienta.',
          'Solo las herramientas con su propio análisis de PromptQuorum figuran en la tabla. La comparativa no clasifica las herramientas, porque la adecuada depende de tu restricción.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content: 'Elige a continuación un tipo de herramienta y lee cada fila de izquierda a derecha. Haz clic en el nombre de una herramienta para abrir su análisis completo de PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'Herramientas de fine-tuning: qué las diferencia',
        items: [
          '**LoRA y QLoRA.** [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan el fine-tuning con LoRA o QLoRA.',
          '**Interfaz web.** [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan una interfaz web para el entrenamiento.',
          '**Entrenamiento multi-GPU.** [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan el entrenamiento multi-GPU.',
          '**Entrenamiento con poca VRAM.** [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan un modo de poca VRAM o de ahorro de memoria.',
          '**Exportación a GGUF u Ollama.** [LLaMA-Factory](/es/power-local-llm/llama-factory-review) y [Unsloth](/es/power-local-llm/unsloth-review) documentan la exportación de modelos a GGUF u Ollama.',
          '**Filas con pocos datos.** [LoRAX](/es/power-local-llm/lorax-review) y [Second Me](/es/power-local-llm/second-me-review) aparecen aquí por sus funciones relacionadas con el fine-tuning, pero su documentación no indica ninguno de los atributos comparados, por lo que sus celdas son guiones; consulta sus análisis.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'Observabilidad y evaluación: qué las diferencia',
        items: [
          '**Trazado.** [Langfuse](/es/power-local-llm/langfuse-review) y [Plano](/es/power-local-llm/plano-review) documentan el trazado de las llamadas a LLM.',
          '**Evaluaciones.** [Langfuse](/es/power-local-llm/langfuse-review) documenta evaluaciones o puntuación.',
          '**Gestión de prompts.** [Langfuse](/es/power-local-llm/langfuse-review) documenta la gestión de prompts.',
          '**OpenTelemetry.** [Plano](/es/power-local-llm/plano-review) documenta el soporte de OpenTelemetry.',
          '**Docker y autoalojamiento.** [Langfuse](/es/power-local-llm/langfuse-review) y [Mission Control](/es/power-local-llm/mission-control-review) documentan el despliegue con Docker o autoalojado.',
          '**LLM locales.** [Langfuse](/es/power-local-llm/langfuse-review) documenta el trabajo con LLM locales o autoalojados.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparativa no puede decirte',
        items: [
          'Compara capacidades documentadas, no resultados. No dice nada sobre la calidad de un modelo con fine-tuning, la velocidad del entrenamiento en tu hardware ni la precisión de una puntuación de evaluación — PromptQuorum no ha medido esto en las herramientas listadas.',
          'Los guiones son lagunas en la documentación que revisamos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README no menciona.',
          'Los requisitos de hardware para el fine-tuning dependen mucho del modelo y de la configuración; lee el análisis de la herramienta para conocer los requisitos realistas antes de iniciar un entrenamiento.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se contrastó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la diferencia entre una herramienta de fine-tuning y una de observabilidad?',
            a: 'Una herramienta de fine-tuning adapta un modelo entrenándolo con tus datos, a menudo con métodos eficientes en parámetros como LoRA o QLoRA. Una herramienta de observabilidad o evaluación registra y puntúa cómo se comporta una aplicación de LLM en uso, por ejemplo trazando cada petición. Hacen trabajos distintos, por lo que se comparan por separado.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la documentación del propio proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Por qué hay tan pocas herramientas aquí?',
            a: 'Hasta ahora el directorio tiene pocas herramientas analizadas en esta área, y ninguna todavía para conjuntos de datos o hubs de modelos. La comparativa cubre lo que está analizado; se añadirán más herramientas a medida que se redacten sus análisis.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparativa en el momento de la redacción, y ningún enlace de aquí genera comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparativa?',
            a: 'Se actualiza dos veces al año y cada vez que se actualiza el análisis de alguna de las herramientas listadas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README o sitio web oficial de cada herramienta, indicado en el análisis de PromptQuorum de esa herramienta (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Directorio de software local](/es/directory) — explora más de 200 apps de IA local y filtra por categoría.',
          '[Motores de inferencia, runtimes y gateways locales: comparativa](/es/power-local-llm/local-llm-run-serve-compared) — las herramientas que ejecutan los modelos que entrenas.',
          '[Asistentes de programación, agentes y herramientas de flujo de trabajo locales: comparativa](/es/power-local-llm/local-llm-code-development-compared) — frameworks de agentes y constructores de flujos de trabajo.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Herramientas locales de entrenamiento y operación de modelos: comparativa (2026) — fine-tuning y observabilidad',
      description:
        'Compara 7 herramientas locales de entrenamiento y operación de modelos: fine-tuning y observabilidad y evaluación de LLM, según la documentación oficial.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'es',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que hacen fine-tuning de modelos locales y monitorizan aplicaciones de LLM' },
      about: [
        { '@type': 'Thing', name: 'Fine-tuning de LLM' },
        { '@type': 'Thing', name: 'Observabilidad de LLM' },
        { '@type': 'Thing', name: 'Evaluación de LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Herramientas locales de entrenamiento y operación de modelos: comparativa (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'ローカルモデルの学習・運用ツール比較(2026):ファインチューニングとオブザーバビリティ',
    seoTitle: 'ローカルFT・LLMオブザーバビリティ比較2026',
    intro:
      'ローカル言語モデルの学習・運用ツールには、モデルを調整するファインチューニングツールと、利用時の挙動を可視化するオブザーバビリティ・評価ツールという2種類の異なる製品があり、単一の機能一覧では公平に比較できません。本ガイドでは、無料・フリーミアムの7つのツールを種類ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成しているため、表とレビューの内容が食い違うことはありません。',
    metaDescription:
      'ローカルモデルの学習・運用ツール7つを比較:ファインチューニング(LLaMA-Factory、Unsloth)とLLMオブザーバビリティ・評価(Langfuse、Plano)。LoRA・QLoRA、低VRAM学習、GGUFエクスポート、トレーシングを公式ドキュメントに基づき解説。',
    twitterDescription:
      'ローカルのファインチューニングとLLMオブザーバビリティのツールを種類別に比較 — LoRA・QLoRA、低VRAM学習、GGUFエクスポート、トレーシング、評価を公式ドキュメントに基づき整理。',
    audience:
      'ローカルモデルをファインチューニングしたい、またはLLMアプリケーションを監視・評価したい開発者で、1つにまとめた一覧ではなくツールの種類ごとの違いを知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカル ファインチューニングツール 比較',
    targetKeywords: [
      'ローカル llm ファインチューニング ツール 比較',
      'llama factory unsloth 違い',
      'lora qlora ツール 比較',
      'llm オブザーバビリティ オープンソース',
      'langfuse 代替 セルフホスト',
      'コンシューマーgpu llm ファインチューニング',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**PromptQuorumディレクトリにある7つのローカル学習・運用ツールは、別々に比較すべき2種類に分かれます。ファインチューニングツール(4つ)と、オブザーバビリティ・評価ツール(3つ)です。** ファインチューニングツールでは[LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)がLoRAまたはQLoRAによる学習を、オブザーバビリティツールでは[Langfuse](/ja/power-local-llm/langfuse-review)と[Plano](/ja/power-local-llm/plano-review)がLLM呼び出しのトレーシングを、それぞれドキュメントに記載しています。下の比較表を使い、インストールの前に各ツールのレビューをお読みください。',
    quickAnswerTop: {
      en: {
        question: 'ローカルのファインチューニングやオブザーバビリティには、どのツールを使えばよいですか?',
        answer:
          'ツールの種類によって異なるため、1つの種類の中で比較してください。ファインチューニングなら、LoRA・QLoRAへの対応、低VRAM学習、Web UI、エクスポート形式で選びます。オブザーバビリティなら、トレーシング、評価、プロンプト管理、セルフホストで選びます。下の表は各ツールの公式ドキュメントから生成しています。',
        bullets: [
          'ファインチューニング:4つのツールを、LoRA・QLoRA、Web UI、マルチGPU学習、低VRAMモード、GGUFまたはOllamaへのエクスポートで比較。',
          'オブザーバビリティ・評価:3つのツールを、トレーシング、評価、プロンプト管理、OpenTelemetry、Docker、ローカルLLMで比較。',
          'ダッシュ(—)は、プロジェクトのドキュメントに記載がないことを意味し、その機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '要点', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: 'ファインチューニングツール:違いのポイント', anchor: 'finetune-differences' },
      { label: 'オブザーバビリティ・評価:違いのポイント', anchor: 'observability-differences' },
      { label: 'この比較から分からないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルの学習・運用ツールはファインチューニングツールとオブザーバビリティ・評価ツールという2種類の異なる製品であるため、PromptQuorumディレクトリの7つのツールは種類ごとに比較しており、表は各ツールのレビューと同じツールデータから生成しています。',
          },
          {
            type: 'plain-terms',
            text: 'あなたのデータでファインチューニングしてモデルに新しい振る舞いを教えるツールもあれば、モデルを使ったアプリケーションの動作を監視して回答を採点するツールもあります。学習ツールと監視ダッシュボードを同じ機能で比べても意味がないため、本ガイドでは同じ種類どうしを比較します。',
          },
        ],
        items: [
          '7つのツール、2つの種類:ファインチューニング(4つ)とオブザーバビリティ・評価(3つ)。複数の役割を持つツールは、該当する種類ごとに掲載されます。',
          '表は各ツールのレコードから生成し、公式のREADMEまたはサイトと照合しています。ダッシュは「ドキュメントに記載なし」の意味であり、「なし」ではありません。',
          '小規模なグループです。ディレクトリには、データセットとモデルハブのサブカテゴリについてレビュー済みのツールがまだないため、ここでは比較していません。',
          '表中のツール名はいずれもそのツールのPromptQuorumレビューにリンクしており、インストール手順や制限事項はそちらで扱っています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの事実情報(価格、ライセンス、対応プラットフォーム、ハードウェア要件、カテゴリ固有の属性)は、そのツールのディレクトリレコードに一度だけ保存されています。下の比較表はそのレコードから生成され、ツール自身のレビューも同じレコードを参照するため、両者が異なる値を示すことはありません。',
          'カテゴリ固有の属性(たとえばLoRA・QLoRAへの対応やトレーシング)は、各プロジェクトの公式READMEまたはウェブサイトから取得し、そこでの正確な文言と照合しました。ドキュメントに記載がない場合は、推測せず表にダッシュを表示します。記載に条件が付く場合(ロードマップ段階のみ、エンタープライズ版、別パッケージなど)は、その属性を表から外し、ツールのレビューで扱います。',
          '表に載せているのは、PromptQuorumに独自のレビューがあるツールのみです。適したツールは制約条件によって変わるため、この比較はツールに順位を付けません。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: '下でツールの種類を選び、行に沿って読み比べてください。ツール名をクリックすると、PromptQuorumの詳しいレビューが開きます。',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'ファインチューニングツール:違いのポイント',
        items: [
          '**LoRAとQLoRA。** [LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)は、LoRAまたはQLoRAによるファインチューニングをドキュメントに記載しています。',
          '**Web UI。** [LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)は、学習用のWeb UIをドキュメントに記載しています。',
          '**マルチGPU学習。** [LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)は、マルチGPU学習をドキュメントに記載しています。',
          '**低VRAM学習。** [LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)は、低VRAMまたはメモリ節約モードをドキュメントに記載しています。',
          '**GGUFまたはOllamaへのエクスポート。** [LLaMA-Factory](/ja/power-local-llm/llama-factory-review)と[Unsloth](/ja/power-local-llm/unsloth-review)は、モデルをGGUFまたはOllamaへエクスポートする方法をドキュメントに記載しています。',
          '**情報の少ない行。** [LoRAX](/ja/power-local-llm/lorax-review)と[Second Me](/ja/power-local-llm/second-me-review)はファインチューニング関連の機能があるためここに掲載していますが、比較対象の属性はドキュメントにいずれも記載がないため、セルはダッシュになっています。詳しくはそれぞれのレビューをご覧ください。',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'オブザーバビリティ・評価:違いのポイント',
        items: [
          '**トレーシング。** [Langfuse](/ja/power-local-llm/langfuse-review)と[Plano](/ja/power-local-llm/plano-review)は、LLM呼び出しのトレーシングをドキュメントに記載しています。',
          '**評価。** [Langfuse](/ja/power-local-llm/langfuse-review)は、評価またはスコアリングをドキュメントに記載しています。',
          '**プロンプト管理。** [Langfuse](/ja/power-local-llm/langfuse-review)は、プロンプト管理をドキュメントに記載しています。',
          '**OpenTelemetry。** [Plano](/ja/power-local-llm/plano-review)は、OpenTelemetryへの対応をドキュメントに記載しています。',
          '**Dockerとセルフホスト。** [Langfuse](/ja/power-local-llm/langfuse-review)と[Mission Control](/ja/power-local-llm/mission-control-review)は、Dockerまたはセルフホストでのデプロイをドキュメントに記載しています。',
          '**ローカルLLM。** [Langfuse](/ja/power-local-llm/langfuse-review)は、ローカルまたはセルフホストのLLMとの連携をドキュメントに記載しています。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較から分からないこと',
        items: [
          'この比較はドキュメントに記載された機能を比べるもので、成果を比べるものではありません。ファインチューニングしたモデルの品質、お使いのハードウェアでの学習速度、評価スコアの精度については何も述べておらず、PromptQuorumは掲載ツールについてこれらを測定していません。',
          'ダッシュは確認したドキュメントに記載がないという意味であり、否定的な評価ではありません。READMEに書かれていなくても、その機能に対応しているツールがある可能性があります。',
          'ファインチューニングに必要なハードウェアは、モデルと設定によって大きく変わります。学習を始める前に、ツールのレビューで現実的な要件を確認してください。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンが記載されており、本ガイドはレビューが更新されるときに合わせて更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ファインチューニングツールとオブザーバビリティツールの違いは何ですか?',
            a: 'ファインチューニングツールは、多くの場合LoRAやQLoRAのようなパラメータ効率の高い手法を使い、あなたのデータで学習させてモデルを調整します。オブザーバビリティ・評価ツールは、たとえば各リクエストをトレースするなどして、LLMアプリケーションの利用時の挙動を記録し採点します。役割が異なるため、別々に比較しています。',
          },
          {
            q: '比較表のダッシュは何を意味しますか?',
            a: 'プロジェクト自身のドキュメントにその属性の記載がないことを意味します。その機能がないという意味ではありません。ツールのレビューやリポジトリで確認してください。',
          },
          {
            q: 'なぜツールの数が少ないのですか?',
            a: 'この分野でレビュー済みのツールは現時点でまだ少なく、データセットやモデルハブに関するものはまだありません。この比較はレビュー済みのものを対象としており、レビューが書かれ次第ツールを追加していきます。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか?',
            a: 'ありません。執筆時点で、PromptQuorumはこの比較に載っているどのツールともアフィリエイト関係になく、ここにあるどのリンクからも報酬は発生しません。',
          },
          {
            q: 'この比較はどのくらいの頻度で更新されますか?',
            a: '年2回、および掲載ツールのレビューが更新されるたびに更新します。表はそれらのレビューと同じデータから生成されているためです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '各ツールの公式READMEまたはウェブサイト。そのツールのPromptQuorumレビュー(比較表からリンク)に記載しています。',
          '[PromptQuorumのローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコードです。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルソフトウェアディレクトリ](/ja/directory) — 200以上のローカルAIアプリをカテゴリ別に絞り込めます。',
          '[ローカル推論エンジン・ランタイム・ゲートウェイ比較](/ja/power-local-llm/local-llm-run-serve-compared) — 学習させたモデルを実行するツールです。',
          '[ローカルのコーディングアシスタント・エージェント・ワークフローツール比較](/ja/power-local-llm/local-llm-code-development-compared) — エージェントフレームワークとワークフロービルダーです。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルモデルの学習・運用ツール比較(2026):ファインチューニングとオブザーバビリティ',
      description:
        'ローカルモデルの学習・運用ツール7つを比較:ファインチューニングとLLMオブザーバビリティ・評価を、公式ドキュメントに基づいて解説。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルモデルをファインチューニングし、LLMアプリケーションを監視する開発者' },
      about: [
        { '@type': 'Thing', name: 'LLMのファインチューニング' },
        { '@type': 'Thing', name: 'LLMオブザーバビリティ' },
        { '@type': 'Thing', name: 'LLMの評価' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカルモデルの学習・運用ツール比較(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: '本地模型训练与运维工具对比(2026):微调与可观测性',
    seoTitle: '本地微调与LLM可观测性工具对比2026',
    intro:
      '用于训练和运维本地语言模型的工具属于两类不同的产品——用于调整模型的微调工具,以及展示模型在实际使用中表现的可观测性与评估工具——没有哪一份统一的功能清单能公平地比较它们。本指南对比7款免费和免费增值工具,按类别逐一比较,所用对比表与各工具自己的PromptQuorum评测生成自同一份数据,因此表格与评测不会互相矛盾。',
    metaDescription:
      '并排对比7款本地模型训练与运维工具:微调(LLaMA-Factory、Unsloth)以及LLM可观测性与评估(Langfuse、Plano)。LoRA与QLoRA、低显存训练、GGUF导出、追踪,均来自官方文档。',
    twitterDescription:
      '按类别对比本地微调与LLM可观测性工具——LoRA与QLoRA、低显存训练、GGUF导出、追踪、评估——依据官方文档。',
    audience:
      '希望微调本地模型,或监控和评估LLM应用的开发者,并且希望按工具类别分别了解差异,而不是看一份混在一起的清单。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地微调工具对比',
    targetKeywords: [
      '本地llm微调工具对比',
      'llama factory vs unsloth',
      'lora vs qlora 工具',
      'llm可观测性 开源',
      'langfuse 替代方案 自托管',
      '在消费级gpu上微调llm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**PromptQuorum目录中的7款本地训练与运维工具分为两类,应分别比较:微调工具(4款)以及可观测性与评估工具(3款)。** 在微调工具中,[LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明支持LoRA或QLoRA训练;在可观测性工具中,[Langfuse](/zh/power-local-llm/langfuse-review)和[Plano](/zh/power-local-llm/plano-review)在文档中说明支持对LLM调用进行追踪。请使用下方的对比表,并在安装前阅读各工具自己的评测。',
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地微调或可观测性工具?',
        answer:
          '这取决于工具的类别,因此每次只在同一类别内比较。微调方面,可按LoRA与QLoRA支持、低显存训练、Web界面和导出格式来选择;可观测性方面,可按追踪、评估、提示词管理和自托管来选择。请使用下方的表格,它生成自各工具的官方文档。',
        bullets: [
          '微调:4款工具按LoRA与QLoRA、Web界面、多GPU训练、低显存模式以及GGUF或Ollama导出进行对比。',
          '可观测性与评估:3款工具按追踪、评估、提示词管理、OpenTelemetry、Docker和本地LLM进行对比。',
          '短横线(—)表示该项目的文档中没有说明,并不表示缺少该功能。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何比较', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: '微调工具:差异所在', anchor: 'finetune-differences' },
      { label: '可观测性与评估:差异所在', anchor: 'observability-differences' },
      { label: '本对比无法告诉你的事', anchor: 'limitations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '资料来源', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地训练与运维工具属于两类不同的产品——微调工具以及可观测性与评估工具——因此PromptQuorum目录中的7款工具在各自类别内进行比较,所用表格与各工具自己的评测生成自同一份工具数据。',
          },
          {
            type: 'plain-terms',
            text: '有些工具通过用你的数据进行微调来教会模型新的行为,另一些工具则观察模型应用的表现并为其回答打分。用同一组功能去比较训练工具和监控面板没有意义,所以本指南只比较同类工具。',
          },
        ],
        items: [
          '7款工具,两个类别:微调(4款)以及可观测性与评估(3款)。身兼多职的工具会出现在它所属的每个类别中。',
          '表格生成自各工具的记录,并对照其官方README或网站核对;短横线表示"文档中未说明",绝不表示"没有"。',
          '这是一个很小的群组:目录中尚无已评测的数据集和模型中心子类别工具,因此这里不对它们进行比较。',
          '表格中的每个工具名称都链接到其自己的PromptQuorum评测,安装步骤和局限都在评测中介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何比较',
        content: [
          '每款工具的事实信息——价格、许可证、平台、硬件需求以及类别专属属性——都只在该工具的目录记录中存储一次。下方的对比表生成自这些记录,而该工具自己的评测也采用同一份记录,因此两者不会给出不同的数值。',
          '类别专属属性(例如LoRA与QLoRA支持或追踪)取自各项目的官方README或网站,并对照其中的确切措辞核对。文档没有提及的地方,表格显示短横线而不是猜测;若某项声明带有限定条件(仅在路线图中、企业版,或需要单独的软件包),则该属性不列入表格,而在该工具的评测中说明。',
          '表格中只包含拥有自己PromptQuorum评测的工具。本对比不对工具排名,因为合适的选择取决于你的具体约束。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '请在下方选择一个工具类别,然后横向阅读每一行。点击工具名称即可打开其完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: '微调工具:差异所在',
        items: [
          '**LoRA与QLoRA。** [LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明支持LoRA或QLoRA微调。',
          '**Web界面。** [LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明提供用于训练的Web界面。',
          '**多GPU训练。** [LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明支持多GPU训练。',
          '**低显存训练。** [LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明提供低显存或节省内存的模式。',
          '**导出为GGUF或Ollama。** [LLaMA-Factory](/zh/power-local-llm/llama-factory-review)和[Unsloth](/zh/power-local-llm/unsloth-review)在文档中说明支持将模型导出为GGUF或Ollama。',
          '**信息稀少的行。** [LoRAX](/zh/power-local-llm/lorax-review)和[Second Me](/zh/power-local-llm/second-me-review)因其与微调相关的功能而出现在这里,但它们的文档没有说明所比较的任何属性,因此它们的单元格为短横线;请参阅它们的评测。',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: '可观测性与评估:差异所在',
        items: [
          '**追踪。** [Langfuse](/zh/power-local-llm/langfuse-review)和[Plano](/zh/power-local-llm/plano-review)在文档中说明支持对LLM调用进行追踪。',
          '**评估。** [Langfuse](/zh/power-local-llm/langfuse-review)在文档中说明支持评估或打分。',
          '**提示词管理。** [Langfuse](/zh/power-local-llm/langfuse-review)在文档中说明支持提示词管理。',
          '**OpenTelemetry。** [Plano](/zh/power-local-llm/plano-review)在文档中说明支持OpenTelemetry。',
          '**Docker与自托管。** [Langfuse](/zh/power-local-llm/langfuse-review)和[Mission Control](/zh/power-local-llm/mission-control-review)在文档中说明支持Docker或自托管部署。',
          '**本地LLM。** [Langfuse](/zh/power-local-llm/langfuse-review)在文档中说明可与本地或自托管的LLM配合使用。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '本对比无法告诉你的事',
        items: [
          '它比较的是文档中说明的功能,而不是实际结果。它无法说明微调后的模型质量如何、训练在你的硬件上跑得多快,或评估分数有多准确——PromptQuorum没有对所列工具测量过这些。',
          '短横线表示我们查阅的文档存在空白,并不是否定性的结论。有些工具可能支持某项功能,只是其README没有提及。',
          '微调所需的硬件在很大程度上取决于模型和设置;在开始训练之前,请阅读该工具的评测,了解切合实际的需求。',
          '工具更新很快。每款工具的评测都会注明其所核对的版本,当评测更新时,本指南也会随之更新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '微调工具和可观测性工具有什么区别?',
            a: '微调工具通过用你的数据训练来调整模型,通常采用LoRA或QLoRA等参数高效的方法。可观测性或评估工具则记录并评价LLM应用在实际使用中的表现,例如追踪每一次请求。它们承担不同的工作,因此分开比较。',
          },
          {
            q: '对比表中的短横线是什么意思?',
            a: '它表示该项目自己的文档没有说明该属性。并不表示缺少该功能;请查看该工具的评测或其代码仓库。',
          },
          {
            q: '为什么这里的工具这么少?',
            a: '目前目录中这一领域已评测的工具还很少,数据集和模型中心方面尚无。本对比涵盖已评测的工具;随着更多评测的完成,会陆续加入更多工具。',
          },
          {
            q: '这些工具有联盟推广链接吗?',
            a: '没有。截至本文撰写时,PromptQuorum与本对比中的任何工具都没有联盟推广关系,这里的任何链接都不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年更新两次,并且每当所列工具的评测有更新时也会更新,因为表格与这些评测生成自同一份数据。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '各工具的官方README或网站,列在该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——表格每一行所依据的记录。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地软件目录](/zh/directory)——浏览全部200多款本地AI应用,并按类别筛选。',
          '[本地推理引擎、运行时与网关对比](/zh/power-local-llm/local-llm-run-serve-compared)——运行你所训练模型的工具。',
          '[本地编程助手、智能体与工作流工具对比](/zh/power-local-llm/local-llm-code-development-compared)——智能体框架与工作流构建器。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地模型训练与运维工具对比(2026):微调与可观测性',
      description:
        '并排对比7款本地模型训练与运维工具:微调以及LLM可观测性与评估,均来自官方文档。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '微调本地模型并监控LLM应用的开发者' },
      about: [
        { '@type': 'Thing', name: 'LLM微调' },
        { '@type': 'Thing', name: 'LLM可观测性' },
        { '@type': 'Thing', name: 'LLM评估' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地模型训练与运维工具对比(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'Ferramentas locais de treinamento e operação de modelos comparadas (2026): fine-tuning e observabilidade',
    seoTitle: 'Fine-tuning local e observabilidade de LLMs 2026',
    intro:
      'Ferramentas para treinar e operar modelos de linguagem locais são dois tipos diferentes de produto — ferramentas de fine-tuning, que adaptam um modelo, e ferramentas de observabilidade e avaliação, que mostram como ele se comporta em uso — e nenhuma lista única de recursos as compara de forma justa. Este guia compara 7 ferramentas gratuitas e freemium, um tipo de cada vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise da PromptQuorum de cada ferramenta, de modo que a tabela e as análises não podem se contradizer.',
    metaDescription:
      'Compare 7 ferramentas locais de treinamento e operação de modelos: fine-tuning (LLaMA-Factory, Unsloth) e observabilidade e avaliação de LLMs (Langfuse, Plano). LoRA e QLoRA, GGUF, tracing, segundo a documentação oficial.',
    twitterDescription:
      'Ferramentas locais de fine-tuning e observabilidade de LLMs comparadas por tipo — LoRA e QLoRA, treinamento com pouca VRAM, exportação GGUF, tracing, avaliações — segundo a documentação oficial.',
    audience:
      'Desenvolvedores que querem fazer fine-tuning de modelos locais ou monitorar e avaliar aplicações com LLMs, e que querem as diferenças apresentadas por tipo de ferramenta, não em uma lista única misturada.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ferramentas de fine-tuning local comparadas',
    targetKeywords: [
      'comparação de ferramentas de fine-tuning de llm local',
      'llama factory vs unsloth',
      'ferramentas lora vs qlora',
      'observabilidade de llm código aberto',
      'alternativas ao langfuse auto-hospedado',
      'fine-tuning de llm em gpu de consumo',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**As 7 ferramentas locais de treinamento e operação do diretório da PromptQuorum se dividem em dois tipos que devem ser comparados separadamente: ferramentas de fine-tuning (4) e ferramentas de observabilidade e avaliação (3).** Entre as ferramentas de fine-tuning, [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam treinamento com LoRA ou QLoRA; entre as de observabilidade, [Langfuse](/pt/power-local-llm/langfuse-review) e [Plano](/pt/power-local-llm/plano-review) documentam o tracing de chamadas a LLMs. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.',
    quickAnswerTop: {
      en: {
        question: 'Qual ferramenta local de fine-tuning ou observabilidade devo usar?',
        answer:
          'Depende do tipo de ferramenta, então compare dentro de um tipo por vez. Para fine-tuning, escolha por suporte a LoRA e QLoRA, treinamento com pouca VRAM, interface web e formato de exportação; para observabilidade, escolha por tracing, avaliações, gerenciamento de prompts e auto-hospedagem. Use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          'Fine-tuning: 4 ferramentas comparadas em LoRA e QLoRA, interface web, treinamento multi-GPU, modo de pouca VRAM e exportação para GGUF ou Ollama.',
          'Observabilidade e avaliação: 3 ferramentas comparadas em tracing, avaliações, gerenciamento de prompts, OpenTelemetry, Docker e LLMs locais.',
          'Um traço (—) significa que a documentação do projeto não informa isso, não que o recurso não exista.',
        ],
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Ferramentas de fine-tuning: o que difere', anchor: 'finetune-differences' },
      { label: 'Observabilidade e avaliação: o que difere', anchor: 'observability-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ferramentas locais de treinamento e operação são dois tipos diferentes de produto — ferramentas de fine-tuning e ferramentas de observabilidade e avaliação — por isso as 7 ferramentas do diretório da PromptQuorum são comparadas dentro de cada tipo, usando uma tabela gerada a partir dos mesmos dados de cada análise de ferramenta.',
          },
          {
            type: 'plain-terms',
            text: 'Algumas ferramentas ensinam um novo comportamento a um modelo por meio de fine-tuning com os seus dados, e outras acompanham o desempenho de uma aplicação com modelo e avaliam suas respostas. Comparar um treinador com um painel de monitoramento pelos mesmos recursos não faz sentido, por isso este guia compara coisas do mesmo tipo.',
          },
        ],
        items: [
          '7 ferramentas, dois tipos: fine-tuning (4) e observabilidade e avaliação (3). Uma ferramenta que faz mais de uma função aparece em cada tipo a que pertence.',
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou site oficial; um traço significa "não informado na documentação", nunca "não".',
          'É um grupo pequeno: o diretório ainda não tem ferramentas analisadas para as subcategorias de conjuntos de dados e hubs de modelos, por isso elas não são comparadas aqui.',
          'Cada nome de ferramenta na tabela leva à sua própria análise da PromptQuorum, onde estão as etapas de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro dessa ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise da própria ferramenta usa o mesmo registro, portanto os dois não podem apresentar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, suporte a LoRA e QLoRA ou tracing) foram retirados do README ou do site oficial de cada projeto e conferidos com a redação exata ali presente. Quando a documentação é omissa, a tabela mostra um traço em vez de adivinhar; quando uma afirmação é condicionada (apenas no roadmap, uma edição enterprise ou um pacote separado), o atributo fica de fora da tabela e é tratado na análise da ferramenta.',
          'Somente ferramentas com análise própria da PromptQuorum estão na tabela. A comparação não classifica as ferramentas em ranking, porque a escolha certa depende da sua restrição.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content: 'Escolha abaixo um tipo de ferramenta e leia ao longo da linha. Clique no nome de uma ferramenta para abrir a análise completa da PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'Ferramentas de fine-tuning: o que difere',
        items: [
          '**LoRA e QLoRA.** [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam fine-tuning com LoRA ou QLoRA.',
          '**Interface web.** [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam uma interface web para treinamento.',
          '**Treinamento multi-GPU.** [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam treinamento multi-GPU.',
          '**Treinamento com pouca VRAM.** [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam um modo de pouca VRAM ou de economia de memória.',
          '**Exportação para GGUF ou Ollama.** [LLaMA-Factory](/pt/power-local-llm/llama-factory-review) e [Unsloth](/pt/power-local-llm/unsloth-review) documentam a exportação de modelos para GGUF ou Ollama.',
          '**Linhas esparsas.** [LoRAX](/pt/power-local-llm/lorax-review) e [Second Me](/pt/power-local-llm/second-me-review) aparecem aqui por seus recursos relacionados a fine-tuning, mas a documentação deles não informa nenhum dos atributos comparados, por isso suas células são traços; veja as análises deles.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'Observabilidade e avaliação: o que difere',
        items: [
          '**Tracing.** [Langfuse](/pt/power-local-llm/langfuse-review) e [Plano](/pt/power-local-llm/plano-review) documentam o tracing de chamadas a LLMs.',
          '**Avaliações.** [Langfuse](/pt/power-local-llm/langfuse-review) documenta avaliações ou pontuação.',
          '**Gerenciamento de prompts.** [Langfuse](/pt/power-local-llm/langfuse-review) documenta o gerenciamento de prompts.',
          '**OpenTelemetry.** [Plano](/pt/power-local-llm/plano-review) documenta suporte a OpenTelemetry.',
          '**Docker e auto-hospedagem.** [Langfuse](/pt/power-local-llm/langfuse-review) e [Mission Control](/pt/power-local-llm/mission-control-review) documentam implantação com Docker ou auto-hospedada.',
          '**LLMs locais.** [Langfuse](/pt/power-local-llm/langfuse-review) documenta o trabalho com LLMs locais ou auto-hospedados.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara capacidades documentadas, não resultados. Não diz nada sobre a qualidade de um modelo após o fine-tuning, a velocidade do treinamento no seu hardware ou a precisão de uma pontuação de avaliação — a PromptQuorum não mediu isso para as ferramentas listadas.',
          'Os traços são lacunas na documentação que verificamos, não achados negativos. Algumas ferramentas podem oferecer um recurso que o README não menciona.',
          'Os requisitos de hardware para fine-tuning dependem muito do modelo e das configurações; leia a análise da ferramenta para ver requisitos realistas antes de iniciar um treinamento.',
          'As ferramentas mudam rápido. A análise de cada ferramenta informa a versão em que foi verificada, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é a diferença entre uma ferramenta de fine-tuning e uma de observabilidade?',
            a: 'Uma ferramenta de fine-tuning adapta um modelo treinando-o com os seus dados, muitas vezes com métodos eficientes em parâmetros, como LoRA ou QLoRA. Uma ferramenta de observabilidade ou avaliação registra e avalia o comportamento de uma aplicação com LLM em uso, por exemplo rastreando cada requisição. Elas fazem trabalhos diferentes, por isso são comparadas separadamente.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a própria documentação do projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'Por que há tão poucas ferramentas aqui?',
            a: 'O diretório tem, até agora, poucas ferramentas analisadas nesta área e nenhuma ainda para conjuntos de dados ou hubs de modelos. A comparação cobre o que foi analisado; mais ferramentas serão adicionadas conforme suas análises forem escritas.',
          },
          {
            q: 'Alguma dessas ferramentas tem link de afiliado?',
            a: 'Não. A PromptQuorum não tem relação de afiliação com nenhuma ferramenta desta comparação no momento da redação, e nenhum link aqui gera comissão.',
          },
          {
            q: 'Com que frequência esta comparação é atualizada?',
            a: 'Ela é atualizada duas vezes por ano e sempre que a análise de uma das ferramentas listadas é atualizada, porque a tabela é gerada a partir dos mesmos dados dessas análises.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'O README ou site oficial de cada ferramenta, listado na análise da PromptQuorum dessa ferramenta (com link a partir da tabela comparativa).',
          '[Diretório de apps de IA local da PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Diretório de software local](/pt/directory) — navegue por mais de 200 apps de IA local e filtre por categoria.',
          '[Mecanismos de inferência, runtimes e gateways locais comparados](/pt/power-local-llm/local-llm-run-serve-compared) — as ferramentas que executam os modelos que você treina.',
          '[Assistentes de código, agentes e ferramentas de fluxo de trabalho locais comparados](/pt/power-local-llm/local-llm-code-development-compared) — frameworks de agentes e construtores de fluxos de trabalho.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ferramentas locais de treinamento e operação de modelos comparadas (2026): fine-tuning e observabilidade',
      description:
        'Compare 7 ferramentas locais de treinamento e operação de modelos lado a lado: fine-tuning e observabilidade e avaliação de LLMs, segundo a documentação oficial.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores que fazem fine-tuning de modelos locais e monitoram aplicações com LLMs' },
      about: [
        { '@type': 'Thing', name: 'Fine-tuning de LLMs' },
        { '@type': 'Thing', name: 'Observabilidade de LLMs' },
        { '@type': 'Thing', name: 'Avaliação de LLMs' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ferramentas locais de treinamento e operação de modelos comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: 'مقارنة أدوات تدريب النماذج المحلية وتشغيلها (2026): الضبط الدقيق والمراقبة',
    seoTitle: 'أدوات الضبط الدقيق ومراقبة LLM المحلية 2026',
    intro:
      'أدوات تدريب النماذج اللغوية المحلية وتشغيلها نوعان مختلفان من المنتجات — أدوات ضبط دقيق تكيّف النموذج، وأدوات مراقبة وتقييم تُظهر سلوكه أثناء الاستخدام — ولا تصلح قائمة ميزات واحدة لمقارنتهما بإنصاف. يقارن هذا الدليل 7 أدوات مجانية أو بنموذج freemium، كل نوع على حدة، باستخدام جدول مقارنة مولَّد من البيانات نفسها التي تعتمد عليها مراجعة PromptQuorum الخاصة بكل أداة، فلا يمكن أن يتعارض الجدول مع المراجعات.',
    metaDescription:
      'قارن 7 أدوات لتدريب النماذج المحلية وتشغيلها: الضبط الدقيق (LLaMA-Factory وUnsloth) ومراقبة LLM وتقييمها (Langfuse وPlano). LoRA وQLoRA وتدريب بذاكرة VRAM منخفضة وتصدير GGUF والتتبع، من الوثائق الرسمية.',
    twitterDescription:
      'مقارنة أدوات الضبط الدقيق المحلي ومراقبة LLM حسب النوع — LoRA وQLoRA وتدريب بذاكرة VRAM منخفضة وتصدير GGUF والتتبع والتقييمات — من الوثائق الرسمية.',
    audience:
      'المطورون الذين يريدون ضبط نماذج محلية ضبطًا دقيقًا أو مراقبة تطبيقات LLM وتقييمها، ويريدون عرض الفروق لكل نوع من الأدوات لا في قائمة واحدة مختلطة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة أدوات الضبط الدقيق المحلية',
    targetKeywords: [
      'مقارنة أدوات الضبط الدقيق لـ llm المحلية',
      'llama factory مقابل unsloth',
      'أدوات lora مقابل qlora',
      'مراقبة llm مفتوحة المصدر',
      'بدائل langfuse ذاتية الاستضافة',
      'ضبط llm دقيق على بطاقة رسومات منزلية',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**تنقسم أدوات التدريب والتشغيل المحلية السبع في دليل PromptQuorum إلى نوعين ينبغي مقارنتهما كلٌّ على حدة: أدوات الضبط الدقيق (4) وأدوات المراقبة والتقييم (3).** ففي الضبط الدقيق يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) التدريب بـ LoRA أو QLoRA؛ وفي المراقبة يوثّق كلٌّ من [Langfuse](/ar/power-local-llm/langfuse-review) و[Plano](/ar/power-local-llm/plano-review) تتبع استدعاءات LLM. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.',
    quickAnswerTop: {
      en: {
        question: 'ما أداة الضبط الدقيق أو المراقبة المحلية التي ينبغي أن أستخدمها؟',
        answer:
          'يعتمد ذلك على نوع الأداة، لذا قارن داخل نوع واحد في كل مرة. في الضبط الدقيق اختر بحسب دعم LoRA وQLoRA والتدريب بذاكرة VRAM منخفضة وواجهة الويب وصيغة التصدير؛ وفي المراقبة اختر بحسب التتبع والتقييمات وإدارة الموجّهات والاستضافة الذاتية. استخدم الجدول أدناه، وهو مولَّد من الوثائق الرسمية لكل أداة.',
        bullets: [
          'الضبط الدقيق: 4 أدوات تُقارَن بحسب LoRA وQLoRA وواجهة الويب والتدريب على عدة وحدات GPU ووضع VRAM المنخفضة والتصدير إلى GGUF أو Ollama.',
          'المراقبة والتقييم: 3 أدوات تُقارَن بحسب التتبع والتقييمات وإدارة الموجّهات وOpenTelemetry وDocker ونماذج LLM المحلية.',
          'الشرطة (—) تعني أن وثائق المشروع لا تذكر الميزة، لا أن الميزة غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'الخلاصة', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'أدوات الضبط الدقيق: أين تختلف', anchor: 'finetune-differences' },
      { label: 'المراقبة والتقييم: أين تختلف', anchor: 'observability-differences' },
      { label: 'ما لا تستطيع هذه المقارنة إخبارك به', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أدوات التدريب والتشغيل المحلية نوعان مختلفان من المنتجات — أدوات الضبط الدقيق وأدوات المراقبة والتقييم — ولذلك تُقارَن الأدوات السبع في دليل PromptQuorum داخل كل نوع، باستخدام جدول مولَّد من بيانات الأداة نفسها التي تعتمد عليها مراجعتها.',
          },
          {
            type: 'plain-terms',
            text: 'بعض الأدوات تعلّم النموذج سلوكًا جديدًا بضبطه ضبطًا دقيقًا على بياناتك، وأخرى تراقب أداء تطبيق النموذج وتقيّم إجاباته. ولا معنى لمقارنة أداة تدريب بلوحة مراقبة على الميزات نفسها، لذا يقارن هذا الدليل الشيء بمثيله.',
          },
        ],
        items: [
          '7 أدوات في نوعين: الضبط الدقيق (4) والمراقبة والتقييم (3). والأداة التي تؤدي أكثر من مهمة تظهر في كل نوع تنتمي إليه.',
          'الجدول مولَّد من سجل كل أداة ومدقَّق مقابل ملف README الرسمي أو الموقع الرسمي؛ والشرطة تعني «غير مذكور في الوثائق»، ولا تعني «لا» أبدًا.',
          'هذه مجموعة صغيرة: لا يضم الدليل حتى الآن أدوات مراجَعة في الفئتين الفرعيتين لمجموعات البيانات ومراكز النماذج، لذا لا تُقارَن هنا.',
          'كل اسم أداة في الجدول يرتبط بمراجعة PromptQuorum الخاصة بها، وفيها خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والسمات الخاصة بالفئة — مرة واحدة في سجل الأداة بالدليل. ويُولَّد جدول المقارنة أدناه من تلك السجلات، وتعتمد مراجعة الأداة نفسها على السجل ذاته، فلا يمكن أن تذكر قيمًا مختلفة.',
          'أُخذت السمات الخاصة بالفئة (مثل دعم LoRA وQLoRA أو التتبع) من ملف README الرسمي لكل مشروع أو موقعه، ودُقِّقت مقابل الصياغة الدقيقة هناك. وحيث تصمت الوثائق يعرض الجدول شرطة بدل التخمين؛ وحيث يكون الادعاء مقيّدًا (مجرد خطة مستقبلية، أو إصدار للمؤسسات، أو حزمة منفصلة) تُستبعد السمة من الجدول وتُعالَج في مراجعة الأداة.',
          'لا يظهر في الجدول إلا الأدوات التي لها مراجعة خاصة في PromptQuorum. ولا تُرتِّب المقارنة الأدوات، لأن الأداة المناسبة تعتمد على قيدك أنت.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content: 'اختر نوع الأداة أدناه، ثم اقرأ عبر الصف. انقر على اسم الأداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: 'أدوات الضبط الدقيق: أين تختلف',
        items: [
          '**LoRA وQLoRA.** يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) الضبط الدقيق بـ LoRA أو QLoRA.',
          '**واجهة الويب.** يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) واجهة ويب للتدريب.',
          '**التدريب على عدة وحدات GPU.** يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) التدريب على عدة وحدات GPU.',
          '**التدريب بذاكرة VRAM منخفضة.** يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) وضعًا منخفض استهلاك VRAM أو موفِّرًا للذاكرة.',
          '**التصدير إلى GGUF أو Ollama.** يوثّق كلٌّ من [LLaMA-Factory](/ar/power-local-llm/llama-factory-review) و[Unsloth](/ar/power-local-llm/unsloth-review) تصدير النماذج إلى GGUF أو Ollama.',
          '**الصفوف شبه الفارغة.** يظهر [LoRAX](/ar/power-local-llm/lorax-review) و[Second Me](/ar/power-local-llm/second-me-review) هنا لميزاتهما المتصلة بالضبط الدقيق، لكن وثائقهما لا تذكر أيًّا من السمات المقارَنة، لذا تكون خلاياهما شرطات؛ راجع مراجعتيهما.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: 'المراقبة والتقييم: أين تختلف',
        items: [
          '**التتبع.** يوثّق كلٌّ من [Langfuse](/ar/power-local-llm/langfuse-review) و[Plano](/ar/power-local-llm/plano-review) تتبع استدعاءات LLM.',
          '**التقييمات.** يوثّق [Langfuse](/ar/power-local-llm/langfuse-review) التقييمات أو التسجيل بالدرجات.',
          '**إدارة الموجّهات.** يوثّق [Langfuse](/ar/power-local-llm/langfuse-review) إدارة الموجّهات.',
          '**OpenTelemetry.** يوثّق [Plano](/ar/power-local-llm/plano-review) دعم OpenTelemetry.',
          '**Docker والاستضافة الذاتية.** يوثّق كلٌّ من [Langfuse](/ar/power-local-llm/langfuse-review) و[Mission Control](/ar/power-local-llm/mission-control-review) النشر عبر Docker أو بالاستضافة الذاتية.',
          '**نماذج LLM المحلية.** يوثّق [Langfuse](/ar/power-local-llm/langfuse-review) العمل مع نماذج LLM المحلية أو ذاتية الاستضافة.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تستطيع هذه المقارنة إخبارك به',
        items: [
          'تقارن القدرات الموثَّقة لا النتائج. فهي لا تقول شيئًا عن جودة النموذج المضبوط ضبطًا دقيقًا، ولا عن سرعة التدريب على عتادك، ولا عن دقة درجة التقييم — فلم تقس PromptQuorum هذه الأمور للأدوات المدرجة.',
          'الشرطات ثغرات في الوثائق التي دقّقناها، لا نتائج سلبية. فقد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها.',
          'تعتمد متطلبات العتاد للضبط الدقيق اعتمادًا كبيرًا على النموذج والإعدادات؛ اقرأ مراجعة الأداة لمعرفة المتطلبات الواقعية قبل بدء أي عملية تدريب.',
          'تتغير الأدوات بسرعة. وتذكر مراجعة كل أداة الإصدار الذي دُقِّقت مقابله، ويُحدَّث هذا الدليل عند تحديث مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما الفرق بين أداة الضبط الدقيق وأداة المراقبة؟',
            a: 'تكيّف أداة الضبط الدقيق النموذج بتدريبه على بياناتك، غالبًا بأساليب فعّالة في استخدام المعاملات مثل LoRA أو QLoRA. أما أداة المراقبة أو التقييم فتسجّل سلوك تطبيق LLM أثناء الاستخدام وتقيّمه بالدرجات، مثلًا بتتبع كل طلب. وهما تؤديان مهمتين مختلفتين، لذا تُقارَنان على حدة.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن وثائق المشروع نفسه لا تذكر تلك السمة. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'لماذا عدد الأدوات هنا قليل؟',
            a: 'لا يضم الدليل حتى الآن إلا عددًا قليلًا من الأدوات المراجَعة في هذا المجال، ولا أدوات لمجموعات البيانات أو مراكز النماذج. وتغطي المقارنة ما رُوجع؛ وستُضاف أدوات أخرى كلما كُتبت مراجعاتها.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط تابع (affiliate)؟',
            a: 'لا. ليس لدى PromptQuorum أي علاقة تابعة مع أي أداة في هذه المقارنة وقت الكتابة، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة وكلما حُدِّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول مولَّد من البيانات نفسها التي تعتمد عليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي أو الموقع الرسمي لكل أداة، المدرج في مراجعة PromptQuorum الخاصة بها (مرتبط من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُولَّد منه كل صف في الجدول.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل البرامج المحلية](/ar/directory) — تصفّح أكثر من 200 تطبيق ذكاء اصطناعي محلي وصفِّها حسب الفئة.',
          '[مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية](/ar/power-local-llm/local-llm-run-serve-compared) — الأدوات التي تشغّل النماذج التي تدرّبها.',
          '[مقارنة مساعدات البرمجة والوكلاء وأدوات سير العمل المحلية](/ar/power-local-llm/local-llm-code-development-compared) — أطر الوكلاء ومنشئو سير العمل.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة أدوات تدريب النماذج المحلية وتشغيلها (2026): الضبط الدقيق والمراقبة',
      description:
        'قارن 7 أدوات لتدريب النماذج المحلية وتشغيلها جنبًا إلى جنب: الضبط الدقيق ومراقبة LLM وتقييمها، من الوثائق الرسمية.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون الذين يضبطون نماذج محلية ضبطًا دقيقًا ويراقبون تطبيقات LLM' },
      about: [
        { '@type': 'Thing', name: 'الضبط الدقيق لـ LLM' },
        { '@type': 'Thing', name: 'مراقبة LLM' },
        { '@type': 'Thing', name: 'تقييم LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة أدوات تدريب النماذج المحلية وتشغيلها (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-21',
    dateModified: '2026-09-21',
    next_refresh_due: '2027-03-21',
    theme: 'Overview & Reference',
    title: '로컬 모델 학습·운영 도구 비교(2026): 파인튜닝과 관측성',
    seoTitle: '로컬 파인튜닝·LLM 관측성 도구 비교 2026',
    intro:
      '로컬 언어 모델을 학습하고 운영하는 도구는 서로 다른 두 종류의 제품입니다. 모델을 조정하는 파인튜닝 도구와, 모델이 실제 사용 중 어떻게 동작하는지 보여 주는 관측성·평가 도구이며, 하나의 기능 목록으로는 이 둘을 공정하게 비교할 수 없습니다. 이 가이드는 무료 및 프리미엄 도구 7개를 종류별로 나누어 비교하며, 비교표는 각 도구의 PromptQuorum 리뷰와 같은 데이터에서 생성되므로 표와 리뷰의 내용이 서로 어긋날 수 없습니다.',
    metaDescription:
      '로컬 모델 학습·운영 도구 7개를 비교합니다: 파인튜닝(LLaMA-Factory, Unsloth)과 LLM 관측성·평가(Langfuse, Plano). LoRA와 QLoRA, 저VRAM 학습, GGUF 내보내기, 트레이싱을 공식 문서 기준으로 정리했습니다.',
    twitterDescription:
      '로컬 파인튜닝과 LLM 관측성 도구를 종류별로 비교합니다. LoRA와 QLoRA, 저VRAM 학습, GGUF 내보내기, 트레이싱, 평가를 공식 문서 기준으로 정리했습니다.',
    audience:
      '로컬 모델을 파인튜닝하거나 LLM 애플리케이션을 모니터링·평가하려는 개발자로, 하나로 뭉뚱그린 목록이 아니라 도구 종류별로 차이를 정리한 글을 원하는 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 파인튜닝 도구 비교',
    targetKeywords: [
      '로컬 llm 파인튜닝 도구 비교',
      'llama factory vs unsloth',
      'lora vs qlora 도구',
      'llm 관측성 오픈소스',
      'langfuse 대안 셀프 호스팅',
      '일반 소비자용 gpu 파인튜닝',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU'],
    leadAnswerBlock:
      '**PromptQuorum 디렉터리의 로컬 학습·운영 도구 7개는 따로 비교해야 하는 두 종류로 나뉩니다. 파인튜닝 도구(4개)와 관측성·평가 도구(3개)입니다.** 파인튜닝 도구 중 [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 LoRA 또는 QLoRA 학습을 문서에 명시하고 있으며, 관측성 도구 중 [Langfuse](/ko/power-local-llm/langfuse-review)와 [Plano](/ko/power-local-llm/plano-review)는 LLM 호출 트레이싱을 문서에 명시하고 있습니다. 아래 비교표를 활용하고, 설치하기 전에 각 도구의 리뷰를 읽어 보세요.',
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 파인튜닝 또는 관측성 도구를 사용해야 하나요?',
        answer:
          '도구의 종류에 따라 달라지므로 한 번에 한 종류 안에서 비교하세요. 파인튜닝은 LoRA·QLoRA 지원, 저VRAM 학습, 웹 UI, 내보내기 형식으로 고르고, 관측성은 트레이싱, 평가, 프롬프트 관리, 셀프 호스팅으로 고르면 됩니다. 각 도구의 공식 문서를 바탕으로 생성한 아래 표를 활용하세요.',
        bullets: [
          '파인튜닝: 도구 4개를 LoRA·QLoRA, 웹 UI, 멀티 GPU 학습, 저VRAM 모드, GGUF 또는 Ollama 내보내기 기준으로 비교.',
          '관측성·평가: 도구 3개를 트레이싱, 평가, 프롬프트 관리, OpenTelemetry, Docker, 로컬 LLM 기준으로 비교.',
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: '파인튜닝 도구: 무엇이 다른가', anchor: 'finetune-differences' },
      { label: '관측성·평가 도구: 무엇이 다른가', anchor: 'observability-differences' },
      { label: '이 비교가 알려 주지 못하는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 학습·운영 도구는 파인튜닝 도구와 관측성·평가 도구라는 서로 다른 두 종류의 제품이므로, PromptQuorum 디렉터리의 도구 7개를 각 종류 안에서 비교하며, 비교표는 각 도구의 리뷰와 같은 도구 데이터에서 생성됩니다.',
          },
          {
            type: 'plain-terms',
            text: '어떤 도구는 여러분의 데이터로 파인튜닝하여 모델에 새로운 동작을 가르치고, 어떤 도구는 모델 애플리케이션의 성능을 지켜보고 답변을 채점합니다. 학습 도구와 모니터링 대시보드를 같은 기능으로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          '도구 7개, 두 종류: 파인튜닝(4개)과 관측성·평가(3개). 두 가지 이상의 역할을 하는 도구는 해당하는 각 종류에 모두 나타납니다.',
          '표는 각 도구의 레코드에서 생성되고 공식 README 또는 사이트와 대조해 확인했습니다. 대시는 "문서에 명시되지 않음"을 뜻하며 "아니오"를 뜻하지 않습니다.',
          '규모가 작은 그룹입니다. 디렉터리에는 데이터셋과 모델 허브 하위 분류에 리뷰가 완료된 도구가 아직 없어 여기서는 비교하지 않습니다.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 단계와 한계는 그곳에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 정보, 즉 가격, 라이선스, 지원 플랫폼, 하드웨어 요구 사항, 분류별 속성은 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 이 레코드에서 생성되고 도구의 리뷰도 같은 레코드를 바탕으로 하므로, 둘이 서로 다른 값을 제시할 수 없습니다.',
          '분류별 속성(예: LoRA·QLoRA 지원이나 트레이싱)은 각 프로젝트의 공식 README 또는 웹사이트에서 가져와 그곳의 정확한 표현과 대조해 확인했습니다. 문서에 언급이 없으면 추측하지 않고 표에 대시로 표시했고, 조건이 붙은 주장(로드맵에만 있는 기능, 엔터프라이즈 에디션, 별도 패키지)은 표에서 제외하고 해당 도구의 리뷰에서 다룹니다.',
          '표에는 자체 PromptQuorum 리뷰가 있는 도구만 포함됩니다. 어떤 도구가 맞는지는 여러분의 제약 조건에 따라 달라지므로, 이 비교는 도구의 순위를 매기지 않습니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content: '아래에서 도구 종류를 선택한 다음 행을 따라 읽어 보세요. 도구 이름을 클릭하면 PromptQuorum 리뷰 전문이 열립니다.',
        component: 'CategoryCompareTable',
      },
      finetuneDifferences: {
        id: 'finetune-differences',
        title: '파인튜닝 도구: 무엇이 다른가',
        items: [
          '**LoRA와 QLoRA.** [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 LoRA 또는 QLoRA 파인튜닝을 문서에 명시하고 있습니다.',
          '**웹 UI.** [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 학습용 웹 UI를 문서에 명시하고 있습니다.',
          '**멀티 GPU 학습.** [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 멀티 GPU 학습을 문서에 명시하고 있습니다.',
          '**저VRAM 학습.** [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 저VRAM 또는 메모리 절약 모드를 문서에 명시하고 있습니다.',
          '**GGUF 또는 Ollama로 내보내기.** [LLaMA-Factory](/ko/power-local-llm/llama-factory-review)와 [Unsloth](/ko/power-local-llm/unsloth-review)는 모델을 GGUF 또는 Ollama로 내보내는 기능을 문서에 명시하고 있습니다.',
          '**정보가 적은 행.** [LoRAX](/ko/power-local-llm/lorax-review)와 [Second Me](/ko/power-local-llm/second-me-review)는 파인튜닝 관련 기능 때문에 여기에 포함되었지만, 문서에 비교 대상 속성이 하나도 명시되어 있지 않아 셀이 대시로 표시됩니다. 자세한 내용은 각 리뷰를 참고하세요.',
        ],
      },
      observabilityDifferences: {
        id: 'observability-differences',
        title: '관측성·평가 도구: 무엇이 다른가',
        items: [
          '**트레이싱.** [Langfuse](/ko/power-local-llm/langfuse-review)와 [Plano](/ko/power-local-llm/plano-review)는 LLM 호출 트레이싱을 문서에 명시하고 있습니다.',
          '**평가.** [Langfuse](/ko/power-local-llm/langfuse-review)는 평가 또는 채점 기능을 문서에 명시하고 있습니다.',
          '**프롬프트 관리.** [Langfuse](/ko/power-local-llm/langfuse-review)는 프롬프트 관리를 문서에 명시하고 있습니다.',
          '**OpenTelemetry.** [Plano](/ko/power-local-llm/plano-review)는 OpenTelemetry 지원을 문서에 명시하고 있습니다.',
          '**Docker와 셀프 호스팅.** [Langfuse](/ko/power-local-llm/langfuse-review)와 [Mission Control](/ko/power-local-llm/mission-control-review)은 Docker 또는 셀프 호스팅 배포를 문서에 명시하고 있습니다.',
          '**로컬 LLM.** [Langfuse](/ko/power-local-llm/langfuse-review)는 로컬 또는 셀프 호스팅 LLM과의 연동을 문서에 명시하고 있습니다.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교가 알려 주지 못하는 것',
        items: [
          '이 비교는 결과가 아니라 문서에 명시된 기능을 비교합니다. 파인튜닝된 모델의 품질, 여러분의 하드웨어에서 학습이 얼마나 빠른지, 평가 점수가 얼마나 정확한지는 알려 주지 않으며, PromptQuorum은 나열된 도구에 대해 이를 측정하지 않았습니다.',
          '대시는 우리가 확인한 문서의 공백일 뿐 부정적인 결론이 아닙니다. 일부 도구는 README에 언급되지 않은 기능을 지원할 수도 있습니다.',
          '파인튜닝에 필요한 하드웨어는 모델과 설정에 따라 크게 달라집니다. 학습을 시작하기 전에 도구의 리뷰에서 현실적인 요구 사항을 확인하세요.',
          '도구는 빠르게 바뀝니다. 각 도구의 리뷰에는 확인한 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '파인튜닝 도구와 관측성 도구는 무엇이 다른가요?',
            a: '파인튜닝 도구는 LoRA나 QLoRA 같은 파라미터 효율적 방식을 활용해 여러분의 데이터로 모델을 학습시켜 조정합니다. 관측성·평가 도구는 예를 들어 각 요청을 트레이싱하는 방식으로 LLM 애플리케이션이 사용 중 어떻게 동작하는지 기록하고 채점합니다. 하는 일이 다르기 때문에 따로 비교합니다.',
          },
          {
            q: '비교표의 대시는 무엇을 뜻하나요?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻이 아니므로, 도구의 리뷰나 저장소를 확인하세요.',
          },
          {
            q: '왜 도구가 이렇게 적나요?',
            a: '디렉터리에는 이 분야에서 리뷰가 완료된 도구가 아직 적고, 데이터셋이나 모델 허브에 해당하는 도구는 아직 없습니다. 이 비교는 리뷰가 완료된 도구를 다루며, 리뷰가 작성되는 대로 도구가 추가됩니다.',
          },
          {
            q: '이 도구들에 제휴 링크가 있나요?',
            a: '아니요. PromptQuorum은 작성 시점 기준으로 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기에 있는 어떤 링크도 수수료를 받지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 갱신되나요?',
            a: '표가 각 리뷰와 같은 데이터에서 생성되므로, 1년에 두 번, 그리고 나열된 도구의 리뷰가 갱신될 때마다 함께 갱신됩니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README 또는 웹사이트. 해당 도구의 PromptQuorum 리뷰(비교표에서 연결)에 나와 있습니다.',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행이 생성되는 바탕이 되는 레코드입니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 소프트웨어 디렉터리](/ko/directory) — 200개 이상의 로컬 AI 앱을 살펴보고 분류별로 필터링하세요.',
          '[로컬 추론 엔진·런타임·게이트웨이 비교](/ko/power-local-llm/local-llm-run-serve-compared) — 여러분이 학습한 모델을 실행하는 도구입니다.',
          '[로컬 코딩 어시스턴트·에이전트·워크플로 도구 비교](/ko/power-local-llm/local-llm-code-development-compared) — 에이전트 프레임워크와 워크플로 빌더입니다.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 모델 학습·운영 도구 비교(2026): 파인튜닝과 관측성',
      description:
        '로컬 모델 학습·운영 도구를 공식 문서 기준으로 비교합니다: 파인튜닝과 LLM 관측성·평가 도구 7개.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-21',
      dateModified: '2026-09-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 모델을 파인튜닝하고 LLM 애플리케이션을 모니터링하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'LLM 파인튜닝' },
        { '@type': 'Thing', name: 'LLM 관측성' },
        { '@type': 'Thing', name: 'LLM 평가' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 모델 학습·운영 도구 비교(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-train-operate-compared',
        },
      ],
    },
  },
}
