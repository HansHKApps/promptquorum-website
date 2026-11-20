// Local Inference Engines, Runtimes & Gateways Compared: run and serve models on your own hardware
// Slug: local-llm-run-serve-compared
// Category comparison guide for the `run-serve` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// The per-attribute lists below were generated from those records (each value verified against the
// project's official README/site) and must also hold in each tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { compareGroupTotal, compareSegmentAttrCounts, compareSegmentCounts, compareSegmentFacts, compareToolsByAttr, compareToolsInBothSegments } from '@/lib/power-local-llm/compare-data'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'

// Live per-segment tool counts: the number of rows each comparison table tab actually renders, so these bullets can never drift from the table.
const SEG = compareSegmentCounts('run-serve')
const ENGINES = compareSegmentFacts('run-serve')['inference-engines']
const RUNTIMES = compareSegmentFacts('run-serve')['runtimes-managers']
const RT = compareSegmentFacts('run-serve')['routers-gateways']
// Live attribute tallies (rows documenting an attribute as true), straight from the table's rows.
const ATTR = compareSegmentAttrCounts('run-serve')
const EA = ATTR['inference-engines']
const RA = ATTR['runtimes-managers']

// Live counts derived from the same rows the CategoryCompareTable renders (src/lib/power-local-llm/compare-data.ts),
// so this article never drifts from the table as the directory grows.
const TOTAL_APP_COUNT = localAiApps.length
const RUN_SERVE_INFERENCE_ENGINES = SEG['inference-engines']
const RUN_SERVE_RUNTIMES_MANAGERS = SEG['runtimes-managers']
const RUN_SERVE_ROUTERS_GATEWAYS = SEG['routers-gateways']
const RUN_SERVE_TOTAL = compareGroupTotal('run-serve')

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'Local Inference Engines, Runtimes & Gateways Compared (2026): Run and Serve Models',
    seoTitle: 'Local Inference Engines & Runtimes Compared 2026',
    intro:
      `Running a model on your own hardware involves three different kinds of tool — inference engines that execute the model, runtimes and managers that download and run models for you, and routers and gateways that sit in front of them — and no single feature list compares them fairly. This guide compares ${RUN_SERVE_TOTAL} free and freemium tools, one kind at a time, using a comparison table generated from the same data as each tool's own PromptQuorum review, so the table and the reviews cannot disagree.`,
    metaDescription:
      `Compare ${RUN_SERVE_TOTAL} tools for running models locally: inference engines (llama.cpp, vLLM, SGLang, MLX and more), runtimes and managers (Ollama, LM Studio, Jan) and gateways. Licenses, GPU support, OpenAI-compatible APIs, from official documentation.`,
    twitterDescription:
      'Local inference engines, runtimes and gateways compared by kind — licenses, NVIDIA/Apple/AMD/CPU support, OpenAI-compatible APIs, multi-GPU — from official documentation.',
    audience:
      'Developers, self-hosters and privacy-conscious users choosing how to run and serve language models locally, who want the differences laid out per kind of tool, not one blended list.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local inference engines compared',
    targetKeywords: [
      'local llm inference engine comparison',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'best local llm runtime',
      'openai compatible local server',
      'local llm gateway',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**The ${RUN_SERVE_TOTAL} local run-and-serve tools in the PromptQuorum directory split into three kinds that should be compared separately: inference engines (${RUN_SERVE_INFERENCE_ENGINES} tools), runtimes and managers (${RUN_SERVE_RUNTIMES_MANAGERS}) and routers and gateways (${RUN_SERVE_ROUTERS_GATEWAYS}).** Within engines, ${EA.nvidiaGpu} document NVIDIA GPU support, ${EA.appleSilicon} document Apple Silicon support and ${EA.openaiApi} document an OpenAI-compatible API; among runtimes, ${RA.openaiApi} document an OpenAI-compatible API. Use the comparison table below, and read each tool's own review before you install it.`,
    quickAnswerTop: {
      en: {
        question: 'Which local inference tool should I use?',
        answer:
          'It depends on the kind of tool, so compare within one kind at a time. Pick by the constraint that matters most — the hardware you have (NVIDIA, Apple Silicon, AMD or CPU), an OpenAI-compatible API, multi-GPU scaling, a desktop app or a headless server — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          `Inference engines: ${SEG['inference-engines']} tools compared on hardware support (NVIDIA, Apple Silicon, AMD, CPU), OpenAI-compatible API and multi-GPU or multi-node inference.`,
          `Runtimes and managers: ${SEG['runtimes-managers']} tools compared on API, desktop app, built-in model library and headless mode.`,
          `Routers and gateways: ${SEG['routers-gateways']} tools compared on OpenAI-compatible endpoint, local models and fallback.`,
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Inference Engines: What Differs', anchor: 'engine-differences' },
      { label: 'Runtimes and Managers: What Differs', anchor: 'runtime-differences' },
      { label: 'Routers and Gateways: What Differs', anchor: 'gateway-differences' },
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
            text: `Running models locally involves three kinds of tool — inference engines, runtimes and managers, and routers and gateways — so the ${RUN_SERVE_TOTAL} tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool's own review.`,
          },
          {
            type: 'plain-terms',
            text: 'An engine is the part that actually runs the model, a runtime or manager downloads and runs models for you, and a gateway routes requests between them. Comparing an engine with a gateway on GPU support makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} tools, three kinds: inference engines (${RUN_SERVE_INFERENCE_ENGINES}), runtimes and managers (${RUN_SERVE_RUNTIMES_MANAGERS}), routers and gateways (${RUN_SERVE_ROUTERS_GATEWAYS}). Tools that are both an engine and a runtime (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'en')}) appear in both groups.`,
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no". For some well-known tools the documentation quoted here is silent on a given feature, so their cells show a dash.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example OpenAI-compatible API or AMD GPU support) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (experimental, planned, or available only through a separate project), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. Tools listed only as API servers (h2oGPT, Tabby and OpenAI Edge TTS) are compared in their own categories. The comparison lists tools that run on your own hardware; it does not rank them, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a kind of tool below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Inference Engines: What Differs',
        items: [
          `**OpenAI-compatible API.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'en')} document an OpenAI-compatible HTTP API, so apps written for the OpenAI API can point at them.`,
          `**NVIDIA GPUs.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'en')} document NVIDIA GPU (CUDA) support.`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'en')} document Apple Silicon, Metal or MLX support.`,
          `**AMD GPUs.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'en')} document AMD GPU support.`,
          `**CPU inference.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'en')} document running inference on a CPU.`,
          `**Multi-GPU and multi-node.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'en')} document multi-GPU, tensor-parallel or multi-node inference.`,
          `**License.** Most engines here are Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} tools) or MIT (${ENGINES.license['MIT'] ?? 0}); KoboldCpp and text-generation-webui are AGPL-3.0. Copyleft licenses attach conditions to distributing modified versions — see [AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes and Managers: What Differs',
        items: [
          `**OpenAI-compatible API.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'en')} document an OpenAI-compatible API.`,
          `**Desktop app.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'en')} document an installable desktop app.`,
          `**Built-in model library.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'en')} document a built-in way to find and download models.`,
          `**Headless or server mode.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'en')} document running as a background service or server without the GUI.`,
          `**License and price.** ${RUNTIMES.license['Apache-2.0'] ?? 0} runtimes here are Apache-2.0 and ${RUNTIMES.license['MIT'] ?? 0} are MIT. LM Studio is proprietary (free to use), Docker Model Runner is bundled with Docker Desktop (see its review for the license terms), Msty is closed source with a free tier, and RunAnywhere and YPipe use their own or undocumented terms — check each review.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Routers and Gateways: What Differs',
        items: [
          `**OpenAI-compatible endpoint.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'en')} document an OpenAI-compatible endpoint.`,
          '**Routing to local models.** [litellm](/power-local-llm/litellm-review) documents local or self-hosted models (such as Ollama) among its supported providers.',
          `**Fallback and load balancing.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'en')} document fallback, retry or load balancing across models or providers.`,
          `**License.** ${RT.license['MIT'] ?? 0} of the ${RT.count} are MIT, ${RT.license['GPL-3.0'] ?? 0} is GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0} is AGPL-3.0 and ${RT.license['Apache-2.0'] ?? 0} is Apache-2.0; ${RT.license['Not stated'] ?? 0} does not state a license.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not performance. It says nothing about tokens per second, memory use or latency — PromptQuorum has not measured them for these tools, and they depend heavily on your hardware and model.',
          'Dashes are gaps in the documentation we checked, not negative findings. Some tools may support a feature their README does not mention; this is most visible for a few widely used tools whose short READMEs state little (for example Ollama\'s engine features).',
          'Hardware support is what the documentation states, not a guarantee of a good experience on that hardware; read the tool\'s review for the real requirements.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the difference between an inference engine, a runtime and a gateway?',
            a: 'An inference engine executes the model on your hardware (for example llama.cpp or vLLM). A runtime or manager downloads models and runs them for you, often with a desktop app or a model library (for example Ollama or LM Studio). A router or gateway sits in front of one or more models or providers and forwards requests. They do different jobs, so they are compared separately.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Why is Ollama in two groups?',
            a: 'Ollama is both an inference engine and a runtime that manages models, so it is listed under both. Its README states few of the attributes compared here, so many of its cells show a dash.',
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
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — what the license families named above mean.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          `[Local Software Directory](/directory) — browse all ${TOTAL_APP_COUNT} local AI apps and filter by category.`,
          '[Local Voice & Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the same comparison for text-to-speech, speech-to-text and voice agents.',
          '[Local Image, Video & Vision Tools Compared](/power-local-llm/local-llm-images-video-compared) — the same comparison for image generation and vision models.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Inference Engines, Runtimes & Gateways Compared (2026): Run and Serve Models',
      description:
        `Compare ${RUN_SERVE_TOTAL} tools for running models locally: inference engines, runtimes and managers, and gateways, from official project documentation.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and self-hosters choosing local inference tools' },
      about: [
        { '@type': 'Thing', name: 'Inference engines' },
        { '@type': 'Thing', name: 'Local LLM runtimes' },
        { '@type': 'Thing', name: 'LLM gateways' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Inference Engines, Runtimes & Gateways Compared (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'Lokale Inferenz-Engines, Runtimes & Gateways im Vergleich (2026): Modelle ausführen und bereitstellen',
    seoTitle: 'Lokale Inferenz-Engines & Runtimes im Vergleich 2026',
    intro:
      `Ein Modell auf eigener Hardware zu betreiben, umfasst drei verschiedene Arten von Werkzeugen — Inferenz-Engines, die das Modell ausführen, Runtimes und Manager, die Modelle für Sie herunterladen und starten, sowie Router und Gateways, die davor geschaltet werden — und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht ${RUN_SERVE_TOTAL} kostenlose und Freemium-Werkzeuge, jeweils innerhalb einer Werkzeugart, anhand einer Vergleichstabelle, die aus denselben Daten erzeugt wird wie der jeweilige PromptQuorum-Test des Werkzeugs, sodass sich Tabelle und Tests nicht widersprechen können.`,
    metaDescription:
      `Vergleich von ${RUN_SERVE_TOTAL} Werkzeugen für den lokalen Modellbetrieb: Inferenz-Engines (llama.cpp, vLLM, SGLang, MLX u. a.), Runtimes und Manager (Ollama, LM Studio, Jan) sowie Gateways. Lizenzen, GPU-Unterstützung, OpenAI-kompatible APIs laut offizieller Dokumentation.`,
    twitterDescription:
      'Lokale Inferenz-Engines, Runtimes und Gateways nach Art verglichen — Lizenzen, NVIDIA-/Apple-/AMD-/CPU-Unterstützung, OpenAI-kompatible APIs, Multi-GPU — laut offizieller Dokumentation.',
    audience:
      'Entwickler, Self-Hoster und datenschutzbewusste Nutzer, die entscheiden, wie sie Sprachmodelle lokal ausführen und bereitstellen, und die die Unterschiede nach Werkzeugart aufgeschlüsselt sehen möchten statt in einer gemischten Liste.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Inferenz-Engines im Vergleich',
    targetKeywords: [
      'lokale llm inferenz engine vergleich',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'beste lokale llm runtime',
      'openai kompatibler lokaler server',
      'lokales llm gateway',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**Die ${RUN_SERVE_TOTAL} lokalen Run-and-Serve-Werkzeuge im PromptQuorum-Verzeichnis lassen sich in drei Arten einteilen, die getrennt verglichen werden sollten: Inferenz-Engines (${RUN_SERVE_INFERENCE_ENGINES} Werkzeuge), Runtimes und Manager (${RUN_SERVE_RUNTIMES_MANAGERS}) sowie Router und Gateways (${RUN_SERVE_ROUTERS_GATEWAYS}).** Bei den Engines dokumentieren ${EA.nvidiaGpu} die Unterstützung von NVIDIA-GPUs, ${EA.appleSilicon} die Unterstützung von Apple Silicon und ${EA.openaiApi} eine OpenAI-kompatible API; bei den Runtimes dokumentieren ${RA.openaiApi} eine OpenAI-kompatible API. Nutzen Sie die Vergleichstabelle unten und lesen Sie den jeweiligen Test eines Werkzeugs, bevor Sie es installieren.`,
    quickAnswerTop: {
      en: {
        question: 'Welches lokale Inferenz-Werkzeug sollte ich verwenden?',
        answer:
          'Das hängt von der Art des Werkzeugs ab, vergleichen Sie also jeweils innerhalb einer Art. Wählen Sie nach der Anforderung, die für Sie am wichtigsten ist — die vorhandene Hardware (NVIDIA, Apple Silicon, AMD oder CPU), eine OpenAI-kompatible API, Multi-GPU-Skalierung, eine Desktop-App oder ein Headless-Server — und nutzen Sie die Tabelle unten, die aus der offiziellen Dokumentation des jeweiligen Werkzeugs erzeugt wird.',
        bullets: [
          `Inferenz-Engines: ${SEG['inference-engines']} Werkzeuge im Vergleich nach Hardware-Unterstützung (NVIDIA, Apple Silicon, AMD, CPU), OpenAI-kompatibler API und Multi-GPU- oder Multi-Node-Inferenz.`,
          `Runtimes und Manager: ${SEG['runtimes-managers']} Werkzeuge im Vergleich nach API, Desktop-App, integrierter Modellbibliothek und Headless-Modus.`,
          `Router und Gateways: ${SEG['routers-gateways']} Werkzeuge im Vergleich nach OpenAI-kompatiblem Endpunkt, lokalen Modellen und Fallback.`,
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts die Angabe nicht nennt, nicht dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'Inferenz-Engines: Die Unterschiede', anchor: 'engine-differences' },
      { label: 'Runtimes und Manager: Die Unterschiede', anchor: 'runtime-differences' },
      { label: 'Router und Gateways: Die Unterschiede', anchor: 'gateway-differences' },
      { label: 'Was dieser Vergleich nicht leisten kann', anchor: 'limitations' },
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
            text: `Der lokale Modellbetrieb umfasst drei Arten von Werkzeugen — Inferenz-Engines, Runtimes und Manager sowie Router und Gateways —, daher werden die ${RUN_SERVE_TOTAL} Werkzeuge im PromptQuorum-Verzeichnis jeweils innerhalb ihrer Art verglichen, anhand einer Tabelle, die aus denselben Werkzeugdaten erzeugt wird wie der jeweilige Test des Werkzeugs.`,
          },
          {
            type: 'plain-terms',
            text: 'Eine Engine ist der Teil, der das Modell tatsächlich ausführt, eine Runtime oder ein Manager lädt Modelle für Sie herunter und startet sie, und ein Gateway leitet Anfragen zwischen ihnen weiter. Eine Engine und ein Gateway bei der GPU-Unterstützung zu vergleichen, ergibt keinen Sinn, deshalb vergleicht dieser Leitfaden nur Gleichartiges.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} Werkzeuge, drei Arten: Inferenz-Engines (${RUN_SERVE_INFERENCE_ENGINES}), Runtimes und Manager (${RUN_SERVE_RUNTIMES_MANAGERS}), Router und Gateways (${RUN_SERVE_ROUTERS_GATEWAYS}). Werkzeuge, die zugleich Engine und Runtime sind (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'de')}), erscheinen in beiden Gruppen.`,
          'Die Tabelle wird aus dem Datensatz jedes Werkzeugs erzeugt und anhand seiner offiziellen README oder Website geprüft; ein Strich bedeutet „in der Dokumentation nicht angegeben“, niemals „nein“. Bei einigen bekannten Werkzeugen schweigt die hier zitierte Dokumentation zu einer bestimmten Funktion, weshalb ihre Zellen einen Strich zeigen.',
          'Jeder Werkzeugname in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Werkzeugs — Preis, Lizenz, Plattformen, Hardware-Anforderungen und kategoriespezifische Merkmale — werden einmal im Verzeichniseintrag des Werkzeugs gespeichert. Die Vergleichstabelle unten wird aus diesen Einträgen erzeugt, und der Test des Werkzeugs stützt sich auf denselben Eintrag, sodass beide keine unterschiedlichen Werte nennen können.',
          'Kategoriespezifische Merkmale (zum Beispiel OpenAI-kompatible API oder AMD-GPU-Unterstützung) wurden der offiziellen README oder Website jedes Projekts entnommen und am genauen Wortlaut dort geprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich statt einer Vermutung; wo eine Aussage eingeschränkt ist (experimentell, geplant oder nur über ein separates Projekt verfügbar), wird das Merkmal aus der Tabelle weggelassen und stattdessen im Test des Werkzeugs behandelt.',
          'In der Tabelle stehen nur Werkzeuge mit eigenem PromptQuorum-Test. Werkzeuge, die nur als API-Server aufgeführt sind (h2oGPT, Tabby und OpenAI Edge TTS), werden in ihren eigenen Kategorien verglichen. Der Vergleich listet Werkzeuge auf, die auf Ihrer eigenen Hardware laufen; er erstellt keine Rangfolge, weil das passende Werkzeug von Ihrer Anforderung abhängt.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content: 'Wählen Sie unten eine Werkzeugart und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Werkzeugnamen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Inferenz-Engines: Die Unterschiede',
        items: [
          `**OpenAI-kompatible API.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'de')} dokumentieren eine OpenAI-kompatible HTTP-API, sodass für die OpenAI-API geschriebene Apps auf sie zeigen können.`,
          `**NVIDIA-GPUs.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'de')} dokumentieren die Unterstützung von NVIDIA-GPUs (CUDA).`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'de')} dokumentieren die Unterstützung von Apple Silicon, Metal oder MLX.`,
          `**AMD-GPUs.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'de')} dokumentieren die Unterstützung von AMD-GPUs.`,
          `**CPU-Inferenz.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'de')} dokumentieren die Ausführung der Inferenz auf einer CPU.`,
          `**Multi-GPU und Multi-Node.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'de')} dokumentieren Multi-GPU-, Tensor-Parallel- oder Multi-Node-Inferenz.`,
          `**Lizenz.** Die meisten Engines hier stehen unter Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} Werkzeuge) oder MIT (${ENGINES.license['MIT'] ?? 0}); KoboldCpp und text-generation-webui stehen unter AGPL-3.0. Copyleft-Lizenzen knüpfen Bedingungen an die Weitergabe veränderter Versionen — siehe [KI-Tool-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes und Manager: Die Unterschiede',
        items: [
          `**OpenAI-kompatible API.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'de')} dokumentieren eine OpenAI-kompatible API.`,
          `**Desktop-App.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'de')} dokumentieren eine installierbare Desktop-App.`,
          `**Integrierte Modellbibliothek.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'de')} dokumentieren eine integrierte Möglichkeit, Modelle zu finden und herunterzuladen.`,
          `**Headless- oder Servermodus.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'de')} dokumentieren den Betrieb als Hintergrunddienst oder Server ohne grafische Oberfläche.`,
          `**Lizenz und Preis.** ${RUNTIMES.license['Apache-2.0'] ?? 0} Runtimes hier stehen unter Apache-2.0 und ${RUNTIMES.license['MIT'] ?? 0} unter MIT. LM Studio ist proprietär (kostenlos nutzbar), Docker Model Runner ist in Docker Desktop enthalten (die Lizenzbedingungen stehen in dessen Test), Msty ist Closed Source mit kostenloser Stufe, und RunAnywhere und YPipe verwenden eigene oder nicht dokumentierte Bedingungen — prüfen Sie den jeweiligen Test.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Router und Gateways: Die Unterschiede',
        items: [
          `**OpenAI-kompatibler Endpunkt.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'de')} dokumentieren einen OpenAI-kompatiblen Endpunkt.`,
          '**Routing zu lokalen Modellen.** [litellm](/de/power-local-llm/litellm-review) dokumentiert lokale oder selbst gehostete Modelle (etwa Ollama) unter seinen unterstützten Anbietern.',
          `**Fallback und Lastverteilung.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'de')} dokumentieren Fallback, Wiederholungsversuche oder Lastverteilung über Modelle oder Anbieter hinweg.`,
          `**Lizenz.** ${RT.license['MIT'] ?? 0} der ${RT.count} stehen unter MIT, ${RT.license['GPL-3.0'] ?? 0} unter GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0} unter AGPL-3.0 und ${RT.license['Apache-2.0'] ?? 0} unter Apache-2.0; ${RT.license['Not stated'] ?? 0} nennt keine Lizenz.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht leisten kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, nicht die Leistung. Er sagt nichts über Token pro Sekunde, Speicherverbrauch oder Latenz — PromptQuorum hat sie für diese Werkzeuge nicht gemessen, und sie hängen stark von Ihrer Hardware und Ihrem Modell ab.',
          'Striche sind Lücken in der von uns geprüften Dokumentation, keine negativen Befunde. Manche Werkzeuge unterstützen möglicherweise eine Funktion, die ihre README nicht erwähnt; das zeigt sich besonders bei einigen weit verbreiteten Werkzeugen mit kurzen READMEs, die wenig aussagen (zum Beispiel die Engine-Funktionen von Ollama).',
          'Die Hardware-Unterstützung entspricht den Angaben der Dokumentation und ist keine Garantie für ein gutes Nutzungserlebnis auf dieser Hardware; die tatsächlichen Anforderungen finden Sie im Test des Werkzeugs.',
          'Werkzeuge ändern sich schnell. Der Test jedes Werkzeugs nennt die Version, gegen die er geprüft wurde, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist der Unterschied zwischen einer Inferenz-Engine, einer Runtime und einem Gateway?',
            a: 'Eine Inferenz-Engine führt das Modell auf Ihrer Hardware aus (zum Beispiel llama.cpp oder vLLM). Eine Runtime oder ein Manager lädt Modelle herunter und führt sie für Sie aus, oft mit einer Desktop-App oder einer Modellbibliothek (zum Beispiel Ollama oder LM Studio). Ein Router oder Gateway sitzt vor einem oder mehreren Modellen oder Anbietern und leitet Anfragen weiter. Sie erfüllen unterschiedliche Aufgaben und werden deshalb getrennt verglichen.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die eigene Dokumentation des Projekts dieses Merkmal nicht angibt. Er bedeutet nicht, dass die Funktion fehlt; prüfen Sie den Test des Werkzeugs oder sein Repository.',
          },
          {
            q: 'Warum steht Ollama in zwei Gruppen?',
            a: 'Ollama ist sowohl eine Inferenz-Engine als auch eine Runtime, die Modelle verwaltet, und wird deshalb unter beiden geführt. Seine README nennt nur wenige der hier verglichenen Merkmale, daher zeigen viele seiner Zellen einen Strich.',
          },
          {
            q: 'Hat eines dieser Werkzeuge einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt der Erstellung mit keinem Werkzeug in diesem Vergleich eine Affiliate-Beziehung, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert sowie immer dann, wenn der Test eines der aufgeführten Werkzeuge aktualisiert wird, weil die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README oder Website jedes Werkzeugs, aufgeführt im jeweiligen PromptQuorum-Test (verlinkt in der Vergleichstabelle).',
          '[PromptQuorum-Verzeichnis lokaler KI-Apps](/de/directory) — der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
          '[KI-Tool-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained) — was die oben genannten Lizenzfamilien bedeuten.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          `[Verzeichnis lokaler Software](/de/directory) — alle ${TOTAL_APP_COUNT} lokalen KI-Apps durchsuchen und nach Kategorie filtern.`,
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — derselbe Vergleich für Text-zu-Sprache, Sprache-zu-Text und Sprachagenten.',
          '[Lokale Bild-, Video- und Vision-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — derselbe Vergleich für Bildgenerierung und Vision-Modelle.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Inferenz-Engines, Runtimes & Gateways im Vergleich (2026): Modelle ausführen und bereitstellen',
      description:
        `Vergleich von ${RUN_SERVE_TOTAL} Werkzeugen für den lokalen Modellbetrieb: Inferenz-Engines, Runtimes und Manager sowie Gateways, laut offizieller Projektdokumentation.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'de',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler und Self-Hoster, die lokale Inferenz-Werkzeuge auswählen' },
      about: [
        { '@type': 'Thing', name: 'Inferenz-Engines' },
        { '@type': 'Thing', name: 'Lokale LLM-Runtimes' },
        { '@type': 'Thing', name: 'LLM-Gateways' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Inferenz-Engines, Runtimes & Gateways im Vergleich (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'Moteurs d\'inférence, runtimes et passerelles locaux : comparatif (2026) pour exécuter et servir des modèles',
    seoTitle: 'Moteurs d\'inférence et runtimes locaux : comparatif 2026',
    intro:
      `Exécuter un modèle sur votre propre matériel fait intervenir trois types d'outils différents — des moteurs d'inférence qui exécutent le modèle, des runtimes et gestionnaires qui téléchargent et lancent les modèles à votre place, et des routeurs et passerelles placés devant eux — et aucune liste de fonctionnalités unique ne les compare équitablement. Ce guide compare ${RUN_SERVE_TOTAL} outils gratuits et freemium, un type à la fois, à l'aide d'un tableau comparatif généré à partir des mêmes données que l'avis PromptQuorum de chaque outil : le tableau et les avis ne peuvent donc pas se contredire.`,
    metaDescription:
      `Comparatif de ${RUN_SERVE_TOTAL} outils pour exécuter des modèles en local : moteurs d'inférence, runtimes (Ollama, LM Studio, Jan) et passerelles. Licences, GPU, API compatibles OpenAI.`,
    twitterDescription:
      'Moteurs d\'inférence, runtimes et passerelles locaux comparés par type — licences, prise en charge NVIDIA/Apple/AMD/CPU, API compatibles OpenAI, multi-GPU — d\'après la documentation officielle.',
    audience:
      'Développeurs, auto-hébergeurs et utilisateurs soucieux de leur vie privée qui choisissent comment exécuter et servir des modèles de langage en local, et qui veulent voir les différences par type d\'outil plutôt qu\'une liste unique et mélangée.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparatif moteurs d\'inférence locaux',
    targetKeywords: [
      'comparatif moteur d\'inférence llm local',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'meilleur runtime llm local',
      'serveur local compatible openai',
      'passerelle llm locale',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**Les ${RUN_SERVE_TOTAL} outils locaux d'exécution et de service du répertoire PromptQuorum se répartissent en trois types, à comparer séparément : les moteurs d'inférence (${RUN_SERVE_INFERENCE_ENGINES} outils), les runtimes et gestionnaires (${RUN_SERVE_RUNTIMES_MANAGERS}) et les routeurs et passerelles (${RUN_SERVE_ROUTERS_GATEWAYS}).** Parmi les moteurs, ${EA.nvidiaGpu} documentent la prise en charge des GPU NVIDIA, ${EA.appleSilicon} celle d'Apple Silicon et ${EA.openaiApi} une API compatible OpenAI ; parmi les runtimes, ${RA.openaiApi} documentent une API compatible OpenAI. Servez-vous du tableau comparatif ci-dessous et lisez l'avis de chaque outil avant de l'installer.`,
    quickAnswerTop: {
      en: {
        question: 'Quel outil d\'inférence local dois-je utiliser ?',
        answer:
          'Cela dépend du type d\'outil : comparez donc un seul type à la fois. Choisissez selon la contrainte qui compte le plus — le matériel dont vous disposez (NVIDIA, Apple Silicon, AMD ou CPU), une API compatible OpenAI, le passage à l\'échelle multi-GPU, une application de bureau ou un serveur sans interface — et appuyez-vous sur le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          `Moteurs d'inférence : ${SEG['inference-engines']} outils comparés sur la prise en charge matérielle (NVIDIA, Apple Silicon, AMD, CPU), l'API compatible OpenAI et l'inférence multi-GPU ou multi-nœuds.`,
          `Runtimes et gestionnaires : ${SEG['runtimes-managers']} outils comparés sur l'API, l'application de bureau, la bibliothèque de modèles intégrée et le mode sans interface.`,
          `Routeurs et passerelles : ${SEG['routers-gateways']} outils comparés sur le point d'accès compatible OpenAI, les modèles locaux et le basculement.`,
          'Un tiret (—) signifie que la documentation du projet ne l\'indique pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Moteurs d\'inférence : ce qui les distingue', anchor: 'engine-differences' },
      { label: 'Runtimes et gestionnaires : ce qui les distingue', anchor: 'runtime-differences' },
      { label: 'Routeurs et passerelles : ce qui les distingue', anchor: 'gateway-differences' },
      { label: 'Ce que ce comparatif ne peut pas vous dire', anchor: 'limitations' },
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
            text: `Exécuter des modèles en local fait intervenir trois types d'outils — moteurs d'inférence, runtimes et gestionnaires, routeurs et passerelles — de sorte que les ${RUN_SERVE_TOTAL} outils du répertoire PromptQuorum sont comparés au sein de chaque type, à l'aide d'un tableau généré à partir des mêmes données que l'avis de chaque outil.`,
          },
          {
            type: 'plain-terms',
            text: 'Un moteur est la partie qui exécute réellement le modèle, un runtime ou gestionnaire télécharge et lance les modèles pour vous, et une passerelle achemine les requêtes entre eux. Comparer un moteur et une passerelle sur la prise en charge des GPU n\'aurait aucun sens : ce guide compare donc des outils comparables.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} outils, trois types : moteurs d'inférence (${RUN_SERVE_INFERENCE_ENGINES}), runtimes et gestionnaires (${RUN_SERVE_RUNTIMES_MANAGERS}), routeurs et passerelles (${RUN_SERVE_ROUTERS_GATEWAYS}). Les outils qui sont à la fois un moteur et un runtime (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'fr')}) apparaissent dans les deux groupes.`,
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié par rapport à son README ou à son site officiel ; un tiret signifie « non indiqué dans la documentation », jamais « non ». Pour certains outils très connus, la documentation citée ici est muette sur une fonctionnalité donnée, et leurs cellules affichent donc un tiret.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où sont traités les étapes d\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations de chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à la catégorie — sont enregistrées une seule fois, dans la fiche du répertoire de cet outil. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à la catégorie (par exemple l\'API compatible OpenAI ou la prise en charge des GPU AMD) ont été relevés dans le README ou sur le site officiel de chaque projet, puis vérifiés par rapport à la formulation exacte qui s\'y trouve. Lorsque la documentation est muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (expérimentale, prévue, ou disponible uniquement via un projet distinct), l\'attribut est retiré du tableau et traité dans l\'avis de l\'outil.',
          'Seuls les outils disposant de leur propre avis PromptQuorum figurent dans le tableau. Les outils listés uniquement comme serveurs d\'API (h2oGPT, Tabby et OpenAI Edge TTS) sont comparés dans leurs propres catégories. Ce comparatif recense des outils qui s\'exécutent sur votre propre matériel ; il ne les classe pas, car le bon choix dépend de votre contrainte.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content: 'Choisissez ci-dessous un type d\'outil, puis lisez le tableau ligne par ligne. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Moteurs d\'inférence : ce qui les distingue',
        items: [
          `**API compatible OpenAI.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'fr')} documentent une API HTTP compatible OpenAI, ce qui permet aux applications écrites pour l'API d'OpenAI de les utiliser comme cible.`,
          `**GPU NVIDIA.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'fr')} documentent la prise en charge des GPU NVIDIA (CUDA).`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'fr')} documentent la prise en charge d'Apple Silicon, de Metal ou de MLX.`,
          `**GPU AMD.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'fr')} documentent la prise en charge des GPU AMD.`,
          `**Inférence sur CPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'fr')} documentent l'exécution de l'inférence sur un CPU.`,
          `**Multi-GPU et multi-nœuds.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'fr')} documentent l'inférence multi-GPU, en parallélisme tensoriel ou multi-nœuds.`,
          `**Licence.** La plupart des moteurs présentés ici sont sous Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} outils) ou MIT (${ENGINES.license['MIT'] ?? 0}) ; KoboldCpp et text-generation-webui sont sous AGPL-3.0. Les licences copyleft soumettent la distribution de versions modifiées à des conditions — voir [Les licences des outils d'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes et gestionnaires : ce qui les distingue',
        items: [
          `**API compatible OpenAI.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'fr')} documentent une API compatible OpenAI.`,
          `**Application de bureau.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'fr')} documentent une application de bureau installable.`,
          `**Bibliothèque de modèles intégrée.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'fr')} documentent un moyen intégré de trouver et de télécharger des modèles.`,
          `**Mode sans interface ou serveur.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'fr')} documentent un fonctionnement en service d'arrière-plan ou en serveur, sans interface graphique.`,
          `**Licence et prix.** ${RUNTIMES.license['Apache-2.0'] ?? 0} des runtimes présentés ici sont sous Apache-2.0 et ${RUNTIMES.license['MIT'] ?? 0} sous MIT. LM Studio est propriétaire (gratuit à l'usage), Docker Model Runner est fourni avec Docker Desktop (les conditions de licence figurent dans son avis), Msty est à code fermé avec une offre gratuite, et RunAnywhere et YPipe appliquent leurs propres conditions ou des conditions non documentées — consultez chaque avis.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Routeurs et passerelles : ce qui les distingue',
        items: [
          `**Point d'accès compatible OpenAI.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'fr')} documentent un point d'accès compatible OpenAI.`,
          '**Routage vers des modèles locaux.** [litellm](/fr/power-local-llm/litellm-review) documente les modèles locaux ou auto-hébergés (comme Ollama) parmi les fournisseurs qu\'il prend en charge.',
          `**Basculement et répartition de charge.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'fr')} documentent le basculement, les nouvelles tentatives ou la répartition de charge entre modèles ou fournisseurs.`,
          `**Licence.** ${RT.license['MIT'] ?? 0} des ${RT.count} sont sous MIT, ${RT.license['GPL-3.0'] ?? 0} sous GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0} sous AGPL-3.0 et ${RT.license['Apache-2.0'] ?? 0} sous Apache-2.0 ; ${RT.license['Not stated'] ?? 0} n'indique pas sa licence.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que ce comparatif ne peut pas vous dire',
        items: [
          'Il compare des capacités documentées, pas des performances. Il ne dit rien des jetons par seconde, de la consommation de mémoire ou de la latence — PromptQuorum ne les a pas mesurés pour ces outils, et ils dépendent fortement de votre matériel et de votre modèle.',
          'Les tirets correspondent à des lacunes de la documentation que nous avons consultée, pas à des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ne mentionne pas ; c\'est particulièrement visible pour quelques outils très répandus dont les README, courts, en disent peu (par exemple les fonctionnalités de moteur d\'Ollama).',
          'La prise en charge matérielle correspond à ce qu\'indique la documentation, pas à la garantie d\'une bonne expérience sur ce matériel ; lisez l\'avis de l\'outil pour connaître les prérequis réels.',
          'Les outils évoluent vite. L\'avis de chaque outil indique la version par rapport à laquelle il a été vérifié, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quelle est la différence entre un moteur d\'inférence, un runtime et une passerelle ?',
            a: 'Un moteur d\'inférence exécute le modèle sur votre matériel (par exemple llama.cpp ou vLLM). Un runtime ou gestionnaire télécharge les modèles et les lance pour vous, souvent avec une application de bureau ou une bibliothèque de modèles (par exemple Ollama ou LM Studio). Un routeur ou une passerelle se place devant un ou plusieurs modèles ou fournisseurs et leur transmet les requêtes. Ils remplissent des fonctions différentes, c\'est pourquoi ils sont comparés séparément.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet n\'indique pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Pourquoi Ollama figure-t-il dans deux groupes ?',
            a: 'Ollama est à la fois un moteur d\'inférence et un runtime qui gère les modèles ; il est donc listé dans les deux. Son README indique peu des attributs comparés ici, si bien que beaucoup de ses cellules affichent un tiret.',
          },
          {
            q: 'L\'un de ces outils a-t-il un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a, à la date de rédaction, aucune relation d\'affiliation avec les outils de ce comparatif, et aucun lien présenté ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence ce comparatif est-il mis à jour ?',
            a: 'Il est actualisé deux fois par an, ainsi que chaque fois que l\'avis de l\'un des outils listés est mis à jour, car le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README ou le site officiel de chaque outil, indiqué dans l\'avis PromptQuorum correspondant (accessible depuis le tableau comparatif).',
          '[Répertoire PromptQuorum des applications d\'IA locales](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
          '[Les licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained) — ce que signifient les familles de licences citées ci-dessus.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          `[Répertoire de logiciels locaux](/fr/directory) — parcourez ${TOTAL_APP_COUNT} applications d'IA locales et filtrez par catégorie.`,
          '[Outils vocaux et audio locaux : comparatif](/fr/power-local-llm/local-llm-voice-audio-compared) — la même comparaison pour la synthèse vocale, la reconnaissance vocale et les agents vocaux.',
          '[Outils locaux d\'image, de vidéo et de vision : comparatif](/fr/power-local-llm/local-llm-images-video-compared) — la même comparaison pour la génération d\'images et les modèles de vision.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Moteurs d\'inférence, runtimes et passerelles locaux : comparatif (2026) pour exécuter et servir des modèles',
      description:
        `Comparez ${RUN_SERVE_TOTAL} outils pour exécuter des modèles en local : moteurs d'inférence, runtimes et gestionnaires, et passerelles, d'après la documentation officielle des projets.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs et auto-hébergeurs choisissant des outils d\'inférence locaux' },
      about: [
        { '@type': 'Thing', name: 'Moteurs d\'inférence' },
        { '@type': 'Thing', name: 'Runtimes de LLM locaux' },
        { '@type': 'Thing', name: 'Passerelles LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Moteurs d\'inférence, runtimes et passerelles locaux : comparatif (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'Motores de inferencia, runtimes y gateways locales: comparativa (2026) para ejecutar y servir modelos',
    seoTitle: 'Motores y runtimes de inferencia locales 2026',
    intro:
      `Ejecutar un modelo en tu propio hardware implica tres tipos de herramienta distintos — motores de inferencia que ejecutan el modelo, runtimes y gestores que descargan y ejecutan modelos por ti, y routers y gateways que se colocan por delante de ellos — y ninguna lista de funciones única los compara de forma justa. Esta guía compara ${RUN_SERVE_TOTAL} herramientas gratuitas y freemium, un tipo cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de cada herramienta en PromptQuorum, de modo que la tabla y los análisis no pueden contradecirse.`,
    metaDescription:
      `Compara ${RUN_SERVE_TOTAL} herramientas para ejecutar modelos en local: motores de inferencia (llama.cpp, vLLM, SGLang, MLX y más), runtimes y gestores (Ollama, LM Studio, Jan) y gateways. Licencias, GPU y API compatibles con OpenAI, según la documentación oficial.`,
    twitterDescription:
      'Motores de inferencia, runtimes y gateways locales comparados por tipo: licencias, soporte NVIDIA/Apple/AMD/CPU, API compatibles con OpenAI y multi-GPU, según la documentación oficial.',
    audience:
      'Desarrolladores, usuarios que alojan sus propios servicios y personas atentas a la privacidad que eligen cómo ejecutar y servir modelos de lenguaje en local, y que quieren ver las diferencias por tipo de herramienta, no en una lista mezclada.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparativa de motores de inferencia locales',
    targetKeywords: [
      'comparativa motores de inferencia llm locales',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'mejor runtime llm local',
      'servidor local compatible con openai',
      'gateway llm local',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**Las ${RUN_SERVE_TOTAL} herramientas locales de ejecución y servicio del directorio de PromptQuorum se dividen en tres tipos que conviene comparar por separado: motores de inferencia (${RUN_SERVE_INFERENCE_ENGINES} herramientas), runtimes y gestores (${RUN_SERVE_RUNTIMES_MANAGERS}) y routers y gateways (${RUN_SERVE_ROUTERS_GATEWAYS}).** Entre los motores, ${EA.nvidiaGpu} documentan soporte para GPU NVIDIA, ${EA.appleSilicon} documentan soporte para Apple Silicon y ${EA.openaiApi} documentan una API compatible con OpenAI; entre los runtimes, ${RA.openaiApi} documentan una API compatible con OpenAI. Usa la tabla comparativa de más abajo y lee el análisis de cada herramienta antes de instalarla.`,
    quickAnswerTop: {
      en: {
        question: '¿Qué herramienta de inferencia local debería usar?',
        answer:
          'Depende del tipo de herramienta, así que compara dentro de un mismo tipo cada vez. Elige según la restricción que más importe — el hardware que tienes (NVIDIA, Apple Silicon, AMD o CPU), una API compatible con OpenAI, el escalado multi-GPU, una aplicación de escritorio o un servidor sin interfaz — y usa la tabla de más abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          `Motores de inferencia: ${SEG['inference-engines']} herramientas comparadas por soporte de hardware (NVIDIA, Apple Silicon, AMD, CPU), API compatible con OpenAI e inferencia multi-GPU o multinodo.`,
          `Runtimes y gestores: ${SEG['runtimes-managers']} herramientas comparadas por API, aplicación de escritorio, biblioteca de modelos integrada y modo sin interfaz.`,
          `Routers y gateways: ${SEG['routers-gateways']} herramientas comparadas por endpoint compatible con OpenAI, modelos locales y respaldo (fallback).`,
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Motores de inferencia: en qué se diferencian', anchor: 'engine-differences' },
      { label: 'Runtimes y gestores: en qué se diferencian', anchor: 'runtime-differences' },
      { label: 'Routers y gateways: en qué se diferencian', anchor: 'gateway-differences' },
      { label: 'Lo que esta comparativa no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Ejecutar modelos en local implica tres tipos de herramienta — motores de inferencia, runtimes y gestores, y routers y gateways — por lo que las ${RUN_SERVE_TOTAL} herramientas del directorio de PromptQuorum se comparan dentro de cada tipo, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.`,
          },
          {
            type: 'plain-terms',
            text: 'Un motor es la parte que ejecuta realmente el modelo, un runtime o gestor descarga y ejecuta modelos por ti, y un gateway enruta las solicitudes entre ellos. Comparar un motor con un gateway por soporte de GPU no tiene sentido, así que esta guía compara elementos del mismo tipo.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} herramientas, tres tipos: motores de inferencia (${RUN_SERVE_INFERENCE_ENGINES}), runtimes y gestores (${RUN_SERVE_RUNTIMES_MANAGERS}), routers y gateways (${RUN_SERVE_ROUTERS_GATEWAYS}). Las herramientas que son a la vez motor y runtime (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'es')}) aparecen en ambos grupos.`,
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa "no indicado en la documentación", nunca "no". En algunas herramientas conocidas, la documentación citada aquí no dice nada sobre una función concreta, por lo que sus celdas muestran un guion.',
          'Cada nombre de herramienta de la tabla enlaza con su propio análisis en PromptQuorum, donde se explican los pasos de instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta — precio, licencia, plataformas, requisitos de hardware y atributos específicos de la categoría — se guardan una sola vez, en el registro de esa herramienta en el directorio. La tabla comparativa de más abajo se genera a partir de esos registros, y el análisis de cada herramienta se basa en el mismo registro, por lo que ambos no pueden indicar valores distintos.',
          'Los atributos específicos de la categoría (por ejemplo, API compatible con OpenAI o soporte para GPU AMD) se tomaron del README o del sitio web oficial de cada proyecto y se contrastaron con la redacción exacta allí. Cuando la documentación no dice nada, la tabla muestra un guion en lugar de suponer; cuando una afirmación está matizada (experimental, prevista o disponible solo a través de un proyecto aparte), el atributo se deja fuera de la tabla y se trata en el análisis de la herramienta.',
          'Solo las herramientas con análisis propio en PromptQuorum figuran en la tabla. Las herramientas que aparecen únicamente como servidores de API (h2oGPT, Tabby y OpenAI Edge TTS) se comparan en sus propias categorías. La comparativa enumera herramientas que se ejecutan en tu propio hardware; no las clasifica, porque la adecuada depende de tu restricción.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content: 'Elige a continuación un tipo de herramienta y lee cada fila de izquierda a derecha. Haz clic en el nombre de una herramienta para abrir su análisis completo en PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Motores de inferencia: en qué se diferencian',
        items: [
          `**API compatible con OpenAI.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'es')} documentan una API HTTP compatible con OpenAI, de modo que las aplicaciones escritas para la API de OpenAI pueden apuntar a ellos.`,
          `**GPU NVIDIA.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'es')} documentan soporte para GPU NVIDIA (CUDA).`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'es')} documentan soporte para Apple Silicon, Metal o MLX.`,
          `**GPU AMD.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'es')} documentan soporte para GPU AMD.`,
          `**Inferencia en CPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'es')} documentan la ejecución de inferencia en una CPU.`,
          `**Multi-GPU y multinodo.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'es')} documentan inferencia multi-GPU, con paralelismo tensorial o multinodo.`,
          `**Licencia.** La mayoría de los motores aquí son Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} herramientas) o MIT (${ENGINES.license['MIT'] ?? 0}); KoboldCpp y text-generation-webui usan AGPL-3.0. Las licencias copyleft imponen condiciones a la distribución de versiones modificadas — consulta [Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes y gestores: en qué se diferencian',
        items: [
          `**API compatible con OpenAI.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'es')} documentan una API compatible con OpenAI.`,
          `**Aplicación de escritorio.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'es')} documentan una aplicación de escritorio instalable.`,
          `**Biblioteca de modelos integrada.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'es')} documentan una forma integrada de buscar y descargar modelos.`,
          `**Modo sin interfaz o servidor.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'es')} documentan la ejecución como servicio en segundo plano o servidor sin la interfaz gráfica.`,
          `**Licencia y precio.** ${RUNTIMES.license['Apache-2.0'] ?? 0} runtimes aquí son Apache-2.0 y ${RUNTIMES.license['MIT'] ?? 0} son MIT. LM Studio es propietario (de uso gratuito), Docker Model Runner viene incluido con Docker Desktop (las condiciones de licencia están en su análisis), Msty es de código cerrado con un nivel gratuito, y RunAnywhere y YPipe usan términos propios o no documentados — consulta cada análisis.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Routers y gateways: en qué se diferencian',
        items: [
          `**Endpoint compatible con OpenAI.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'es')} documentan un endpoint compatible con OpenAI.`,
          '**Enrutamiento a modelos locales.** [litellm](/es/power-local-llm/litellm-review) documenta modelos locales o autoalojados (como Ollama) entre sus proveedores compatibles.',
          `**Respaldo (fallback) y balanceo de carga.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'es')} documentan respaldo, reintentos o balanceo de carga entre modelos o proveedores.`,
          `**Licencia.** ${RT.license['MIT'] ?? 0} de las ${RT.count} son MIT, ${RT.license['GPL-3.0'] ?? 0} es GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0} es AGPL-3.0 y ${RT.license['Apache-2.0'] ?? 0} es Apache-2.0; ${RT.license['Not stated'] ?? 0} no indica su licencia.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparativa no puede decirte',
        items: [
          'Compara capacidades documentadas, no rendimiento. No dice nada sobre tokens por segundo, uso de memoria ni latencia — PromptQuorum no los ha medido para estas herramientas, y dependen en gran medida de tu hardware y de tu modelo.',
          'Los guiones son lagunas en la documentación que consultamos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README no menciona; esto se nota sobre todo en unas pocas herramientas muy usadas cuyos README breves dicen poco (por ejemplo, las funciones del motor de Ollama).',
          'El soporte de hardware es lo que indica la documentación, no una garantía de buena experiencia en ese hardware; lee el análisis de la herramienta para conocer los requisitos reales.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se contrastó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la diferencia entre un motor de inferencia, un runtime y un gateway?',
            a: 'Un motor de inferencia ejecuta el modelo en tu hardware (por ejemplo, llama.cpp o vLLM). Un runtime o gestor descarga modelos y los ejecuta por ti, a menudo con una aplicación de escritorio o una biblioteca de modelos (por ejemplo, Ollama o LM Studio). Un router o gateway se sitúa por delante de uno o varios modelos o proveedores y reenvía las solicitudes. Hacen trabajos distintos, por lo que se comparan por separado.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la documentación del propio proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Por qué aparece Ollama en dos grupos?',
            a: 'Ollama es a la vez un motor de inferencia y un runtime que gestiona modelos, por lo que figura en ambos. Su README indica pocos de los atributos comparados aquí, así que muchas de sus celdas muestran un guion.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparativa en el momento de escribir esto, y ningún enlace aquí genera comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparativa?',
            a: 'Se actualiza dos veces al año y cada vez que se actualiza el análisis de alguna de las herramientas incluidas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README o sitio web oficial de cada herramienta, indicado en el análisis de esa herramienta en PromptQuorum (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
          '[Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained) — qué significan las familias de licencias mencionadas arriba.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          `[Directorio de software local](/es/directory) — explora todas las ${TOTAL_APP_COUNT} apps de IA local y filtra por categoría.`,
          '[Herramientas locales de voz y audio: comparativa](/es/power-local-llm/local-llm-voice-audio-compared) — la misma comparación para síntesis de voz, reconocimiento de voz y agentes de voz.',
          '[Herramientas locales de imagen, vídeo y visión: comparativa](/es/power-local-llm/local-llm-images-video-compared) — la misma comparación para generación de imágenes y modelos de visión.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Motores de inferencia, runtimes y gateways locales: comparativa (2026) para ejecutar y servir modelos',
      description:
        `Compara ${RUN_SERVE_TOTAL} herramientas para ejecutar modelos en local: motores de inferencia, runtimes y gestores, y gateways, según la documentación oficial de cada proyecto.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'es',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores y usuarios que autoalojan servicios y eligen herramientas de inferencia local' },
      about: [
        { '@type': 'Thing', name: 'Motores de inferencia' },
        { '@type': 'Thing', name: 'Runtimes de LLM locales' },
        { '@type': 'Thing', name: 'Gateways de LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Motores de inferencia, runtimes y gateways locales: comparativa (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'ローカル推論エンジン・ランタイム・ゲートウェイ比較(2026):モデルの実行とサーブ',
    seoTitle: 'ローカル推論エンジン・ランタイム比較2026',
    intro:
      `自分のハードウェアでモデルを動かすには、3種類の異なるツールが関わります。モデルを実行する推論エンジン、モデルのダウンロードと実行を代行するランタイムやマネージャー、そしてそれらの前段に置かれるルーターやゲートウェイです。これらを公平に比べられる単一の機能一覧はありません。本ガイドでは、無料およびフリーミアムの${RUN_SERVE_TOTAL}ツールを種類ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成されるため、表とレビューの内容が食い違うことはありません。`,
    metaDescription:
      `ローカルでモデルを動かす${RUN_SERVE_TOTAL}ツールを比較:推論エンジン(llama.cpp、vLLM、SGLang、MLXなど)、ランタイム・マネージャー(Ollama、LM Studio、Jan)、ゲートウェイ。ライセンス、GPU対応、OpenAI互換APIを公式ドキュメントに基づいて整理。`,
    twitterDescription:
      'ローカル推論エンジン、ランタイム、ゲートウェイを種類別に比較 — ライセンス、NVIDIA/Apple/AMD/CPU対応、OpenAI互換API、マルチGPUを公式ドキュメントから整理。',
    audience:
      '言語モデルをローカルで実行・サーブする方法を選ぶ開発者、セルフホスト運用者、プライバシーを重視するユーザーで、ツールを一つに混ぜた一覧ではなく、種類ごとの違いを知りたい方。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカル推論エンジン 比較',
    targetKeywords: [
      'ローカル llm 推論エンジン 比較',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'ローカル llm ランタイム おすすめ',
      'openai互換 ローカルサーバー',
      'ローカル llm ゲートウェイ',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**PromptQuorumディレクトリにあるローカル実行・サーブ系の${RUN_SERVE_TOTAL}ツールは、別々に比較すべき3種類に分かれます。推論エンジン(${RUN_SERVE_INFERENCE_ENGINES}ツール)、ランタイム・マネージャー(${RUN_SERVE_RUNTIMES_MANAGERS}ツール)、ルーター・ゲートウェイ(${RUN_SERVE_ROUTERS_GATEWAYS}ツール)です。** エンジンのうち、${EA.nvidiaGpu}ツールがNVIDIA GPU対応を、${EA.appleSilicon}ツールがApple Silicon対応を、${EA.openaiApi}ツールがOpenAI互換APIを文書化しています。ランタイムでは${RA.openaiApi}ツールがOpenAI互換APIを文書化しています。下の比較表を使い、インストールする前に各ツールのレビューも読んでください。`,
    quickAnswerTop: {
      en: {
        question: 'どのローカル推論ツールを使えばよいですか?',
        answer:
          'ツールの種類によって異なるため、一度に一つの種類の中で比較してください。最も重要な条件(お持ちのハードウェア(NVIDIA、Apple Silicon、AMD、CPU)、OpenAI互換API、マルチGPUへのスケーリング、デスクトップアプリかヘッドレスサーバーか)で選び、各ツールの公式ドキュメントから生成した下の表を使ってください。',
        bullets: [
          `推論エンジン:${SEG['inference-engines']}ツールを、ハードウェア対応(NVIDIA、Apple Silicon、AMD、CPU)、OpenAI互換API、マルチGPU・マルチノード推論で比較。`,
          `ランタイム・マネージャー:${SEG['runtimes-managers']}ツールを、API、デスクトップアプリ、内蔵モデルライブラリ、ヘッドレスモードで比較。`,
          `ルーター・ゲートウェイ:${SEG['routers-gateways']}ツールを、OpenAI互換エンドポイント、ローカルモデル、フォールバックで比較。`,
          'ダッシュ(—)は、プロジェクトのドキュメントに記載がないことを意味し、その機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: '推論エンジン:違いはどこにあるか', anchor: 'engine-differences' },
      { label: 'ランタイムとマネージャー:違いはどこにあるか', anchor: 'runtime-differences' },
      { label: 'ルーターとゲートウェイ:違いはどこにあるか', anchor: 'gateway-differences' },
      { label: 'この比較でわからないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `モデルをローカルで動かすには、推論エンジン、ランタイム・マネージャー、ルーター・ゲートウェイの3種類のツールが関わるため、PromptQuorumディレクトリの${RUN_SERVE_TOTAL}ツールは種類ごとに比較しています。比較表は、各ツールのレビューと同じツールデータから生成されています。`,
          },
          {
            type: 'plain-terms',
            text: 'エンジンは実際にモデルを動かす部分、ランタイムやマネージャーはモデルのダウンロードと実行を代行するもの、ゲートウェイはそれらの間でリクエストを振り分けるものです。エンジンとゲートウェイをGPU対応で比べても意味がないため、本ガイドでは同じ種類同士を比較します。',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL}ツール、3種類:推論エンジン(${RUN_SERVE_INFERENCE_ENGINES})、ランタイム・マネージャー(${RUN_SERVE_RUNTIMES_MANAGERS})、ルーター・ゲートウェイ(${RUN_SERVE_ROUTERS_GATEWAYS})。エンジンでもありランタイムでもあるツール(${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'ja')})は、両方のグループに登場します。`,
          '表は各ツールのレコードから生成され、公式のREADMEまたはサイトと照合しています。ダッシュは「ドキュメントに記載なし」の意味であり、「非対応」ではありません。よく知られた一部のツールでは、ここで参照したドキュメントが特定の機能に触れていないため、該当セルはダッシュになっています。',
          '表の各ツール名は、そのツール専用のPromptQuorumレビューにリンクしています。インストール手順や制約はそちらで扱っています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの情報(価格、ライセンス、対応プラットフォーム、ハードウェア要件、カテゴリ固有の属性)は、そのツールのディレクトリレコードに一度だけ保存されています。下の比較表はそのレコードから生成され、ツール個別のレビューも同じレコードを参照するため、両者が異なる値を示すことはありません。',
          'カテゴリ固有の属性(たとえばOpenAI互換APIやAMD GPU対応)は、各プロジェクトの公式READMEまたはウェブサイトから取得し、そこに書かれた文言と照合しました。ドキュメントに記載がない場合は、推測せずに表にダッシュを表示します。記述に条件が付く場合(実験的、計画中、別プロジェクト経由でのみ利用可能など)は、その属性を表から外し、ツールのレビューで扱います。',
          '表に載っているのは、PromptQuorumに専用レビューがあるツールのみです。APIサーバーとしてのみ掲載しているツール(h2oGPT、Tabby、OpenAI Edge TTS)は、それぞれのカテゴリで比較しています。この比較は自分のハードウェアで動くツールを一覧にしたもので、順位付けはしていません。適切なツールは条件によって変わるためです。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: '以下でツールの種類を選び、行を横に読み進めてください。ツール名をクリックすると、PromptQuorumの詳しいレビューが開きます。',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: '推論エンジン:違いはどこにあるか',
        items: [
          `**OpenAI互換API。** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'ja')}は、OpenAI互換のHTTP APIを文書化しています。そのため、OpenAI API向けに書かれたアプリをこれらに向けることができます。`,
          `**NVIDIA GPU。** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'ja')}は、NVIDIA GPU(CUDA)対応を文書化しています。`,
          `**Apple Silicon。** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'ja')}は、Apple Silicon、MetalまたはMLXへの対応を文書化しています。`,
          `**AMD GPU。** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'ja')}は、AMD GPU対応を文書化しています。`,
          `**CPU推論。** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'ja')}は、CPUでの推論の実行を文書化しています。`,
          `**マルチGPUとマルチノード。** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'ja')}は、マルチGPU、テンソル並列、またはマルチノードでの推論を文書化しています。`,
          `**ライセンス。** ここに挙げたエンジンの多くはApache-2.0(${ENGINES.license['Apache-2.0'] ?? 0}ツール)またはMIT(${ENGINES.license['MIT'] ?? 0}ツール)で、KoboldCppとtext-generation-webuiはAGPL-3.0です。コピーレフトライセンスは、改変版の配布に条件を課します。詳しくは[AI Tool Licenses Explained](/ja/power-local-llm/ai-tool-licenses-explained)を参照してください。`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'ランタイムとマネージャー:違いはどこにあるか',
        items: [
          `**OpenAI互換API。** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'ja')}は、OpenAI互換APIを文書化しています。`,
          `**デスクトップアプリ。** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'ja')}は、インストール可能なデスクトップアプリを文書化しています。`,
          `**内蔵モデルライブラリ。** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'ja')}は、モデルを探してダウンロードする内蔵の仕組みを文書化しています。`,
          `**ヘッドレス・サーバーモード。** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'ja')}は、GUIなしでバックグラウンドサービスまたはサーバーとして動作することを文書化しています。`,
          `**ライセンスと価格。** ここに挙げたランタイムのうち、${RUNTIMES.license['Apache-2.0'] ?? 0}件はApache-2.0、${RUNTIMES.license['MIT'] ?? 0}件はMITです。LM Studioはプロプライエタリです(無料で利用できます)。Docker Model RunnerはDocker Desktopに同梱されています(ライセンス条件はそのレビューを参照してください)。Mstyはクローズドソースで無料プランがあり、RunAnywhereとYPipeは独自またはドキュメント化されていない条件を採用しています。各レビューで確認してください。`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'ルーターとゲートウェイ:違いはどこにあるか',
        items: [
          `**OpenAI互換エンドポイント。** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'ja')}は、OpenAI互換エンドポイントを文書化しています。`,
          '**ローカルモデルへのルーティング。** [litellm](/ja/power-local-llm/litellm-review)は、対応プロバイダーの中にローカルまたはセルフホストのモデル(Ollamaなど)があることを文書化しています。',
          `**フォールバックとロードバランシング。** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'ja')}は、モデルまたはプロバイダー間のフォールバック、リトライ、ロードバランシングを文書化しています。`,
          `**ライセンス。** ${RT.count}件のうち${RT.license['MIT'] ?? 0}件はMIT、${RT.license['GPL-3.0'] ?? 0}件はGPL-3.0、${RT.license['AGPL-3.0'] ?? 0}件はAGPL-3.0、${RT.license['Apache-2.0'] ?? 0}件はApache-2.0で、${RT.license['Not stated'] ?? 0}件はライセンスを明記していません。`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較でわからないこと',
        items: [
          'この比較は文書化された機能を比べるものであり、性能ではありません。1秒あたりのトークン数、メモリ使用量、レイテンシについては何も示していません。PromptQuorumはこれらのツールでそれらを測定しておらず、結果はハードウェアとモデルに大きく左右されます。',
          'ダッシュは、確認したドキュメントに記載がないという意味であり、否定的な結果ではありません。READMEに書かれていなくても、その機能に対応しているツールがある可能性があります。READMEが短く記載の少ない、広く使われている一部のツール(たとえばOllamaのエンジン機能)で特に目立ちます。',
          'ハードウェア対応はドキュメントに記載された内容であり、そのハードウェアで良い使用感が得られることの保証ではありません。実際の要件はツールのレビューで確認してください。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンが記載されており、本ガイドはレビューが更新されるときに更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '推論エンジン、ランタイム、ゲートウェイの違いは何ですか?',
            a: '推論エンジンは、お使いのハードウェア上でモデルを実行するものです(例:llama.cppやvLLM)。ランタイムやマネージャーは、モデルをダウンロードして実行を代行するもので、デスクトップアプリやモデルライブラリを備えていることが多いです(例:OllamaやLM Studio)。ルーターやゲートウェイは、1つ以上のモデルやプロバイダーの前段に置かれ、リクエストを転送します。役割が異なるため、別々に比較しています。',
          },
          {
            q: '比較表のダッシュは何を意味しますか?',
            a: 'プロジェクト自身のドキュメントにその属性の記載がないことを意味します。その機能がないという意味ではありません。ツールのレビューやリポジトリで確認してください。',
          },
          {
            q: 'なぜOllamaは2つのグループに入っているのですか?',
            a: 'Ollamaは推論エンジンであると同時に、モデルを管理するランタイムでもあるため、両方に掲載しています。READMEにはここで比較している属性がほとんど記載されていないため、多くのセルがダッシュになっています。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか?',
            a: 'いいえ。執筆時点で、PromptQuorumはこの比較に含まれるどのツールともアフィリエイト関係になく、ここにあるリンクから報酬が発生することもありません。',
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
          '各ツールの公式READMEまたはウェブサイト。そのツールのPromptQuorumレビューに記載しています(比較表からリンク)。',
          '[PromptQuorumのローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコードです。',
          '[AI Tool Licenses Explained](/ja/power-local-llm/ai-tool-licenses-explained) — 上で挙げたライセンスの種類の意味を解説しています。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          `[ローカルソフトウェアディレクトリ](/ja/directory) — ${TOTAL_APP_COUNT}件のローカルAIアプリを一覧し、カテゴリで絞り込めます。`,
          '[ローカル音声・スピーチツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントについての同様の比較です。',
          '[ローカル画像・動画・ビジョンツール比較](/ja/power-local-llm/local-llm-images-video-compared) — 画像生成とビジョンモデルについての同様の比較です。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル推論エンジン・ランタイム・ゲートウェイ比較(2026):モデルの実行とサーブ',
      description:
        `ローカルでモデルを動かす${RUN_SERVE_TOTAL}ツールを比較:推論エンジン、ランタイム・マネージャー、ゲートウェイを、公式プロジェクトドキュメントに基づいて整理。`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカル推論ツールを選ぶ開発者とセルフホスト運用者' },
      about: [
        { '@type': 'Thing', name: '推論エンジン' },
        { '@type': 'Thing', name: 'ローカルLLMランタイム' },
        { '@type': 'Thing', name: 'LLMゲートウェイ' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカル推論エンジン・ランタイム・ゲートウェイ比較(2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: '本地推理引擎、运行时与网关对比(2026):运行和部署模型',
    seoTitle: '本地推理引擎与运行时对比2026',
    intro:
      `在自己的硬件上运行模型涉及三类不同的工具——执行模型的推理引擎、帮你下载并运行模型的运行时与管理器,以及位于它们前面的路由器与网关——没有任何单一的功能清单能公平地比较它们。本指南逐类比较${RUN_SERVE_TOTAL}款免费和免费增值(freemium)工具,对比表由与各工具PromptQuorum评测相同的数据生成,因此表格与评测不会互相矛盾。`,
    metaDescription:
      `对比${RUN_SERVE_TOTAL}款本地运行模型的工具:推理引擎(llama.cpp、vLLM、SGLang、MLX等)、运行时与管理器(Ollama、LM Studio、Jan)以及网关。许可证、GPU支持、OpenAI兼容API,均来自官方文档。`,
    twitterDescription:
      '按类别对比本地推理引擎、运行时与网关——许可证、NVIDIA/Apple/AMD/CPU支持、OpenAI兼容API、多GPU——均来自官方文档。',
    audience:
      '正在选择如何在本地运行和部署语言模型的开发者、自托管用户和注重隐私的用户,希望按工具类别逐一了解差异,而不是一份混杂的清单。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地推理引擎对比',
    targetKeywords: [
      '本地llm推理引擎对比',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      '最佳本地llm运行时',
      'openai兼容本地服务器',
      '本地llm网关',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**PromptQuorum目录中的${RUN_SERVE_TOTAL}款本地运行与部署工具分为三类,应分别比较:推理引擎(${RUN_SERVE_INFERENCE_ENGINES}款)、运行时与管理器(${RUN_SERVE_RUNTIMES_MANAGERS}款)以及路由器与网关(${RUN_SERVE_ROUTERS_GATEWAYS}款)。** 在引擎中,${EA.nvidiaGpu}款在文档中说明支持NVIDIA GPU,${EA.appleSilicon}款说明支持Apple Silicon,${EA.openaiApi}款说明提供OpenAI兼容API;在运行时中,${RA.openaiApi}款说明提供OpenAI兼容API。请使用下方的对比表,并在安装前阅读各工具自己的评测。`,
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地推理工具?',
        answer:
          '这取决于工具的类别,因此请一次只在同一类别内比较。根据对你最重要的限制条件来选择——你拥有的硬件(NVIDIA、Apple Silicon、AMD或CPU)、OpenAI兼容API、多GPU扩展、桌面应用或无界面服务器——并使用下方由各工具官方文档生成的对比表。',
        bullets: [
          `推理引擎:${SEG['inference-engines']}款工具,按硬件支持(NVIDIA、Apple Silicon、AMD、CPU)、OpenAI兼容API以及多GPU或多节点推理进行对比。`,
          `运行时与管理器:${SEG['runtimes-managers']}款工具,按API、桌面应用、内置模型库和无界面模式进行对比。`,
          `路由器与网关:${SEG['routers-gateways']}款工具,按OpenAI兼容端点、本地模型和故障回退进行对比。`,
          '短横线(—)表示该项目的文档没有说明,并不表示缺少该功能。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何比较', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: '推理引擎:差异所在', anchor: 'engine-differences' },
      { label: '运行时与管理器:差异所在', anchor: 'runtime-differences' },
      { label: '路由器与网关:差异所在', anchor: 'gateway-differences' },
      { label: '本对比无法告诉你的内容', anchor: 'limitations' },
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
            text: `在本地运行模型涉及三类工具——推理引擎、运行时与管理器、路由器与网关——因此PromptQuorum目录中的${RUN_SERVE_TOTAL}款工具按类别分别比较,对比表由与各工具自己的评测相同的工具数据生成。`,
          },
          {
            type: 'plain-terms',
            text: '引擎是真正运行模型的部分,运行时或管理器帮你下载并运行模型,网关则在它们之间转发请求。拿引擎和网关比较GPU支持没有意义,所以本指南只比较同类工具。',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL}款工具,三个类别:推理引擎(${RUN_SERVE_INFERENCE_ENGINES}款)、运行时与管理器(${RUN_SERVE_RUNTIMES_MANAGERS}款)、路由器与网关(${RUN_SERVE_ROUTERS_GATEWAYS}款)。既是引擎又是运行时的工具(${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'zh')})会同时出现在两个分组中。`,
          '对比表由各工具的记录生成,并对照其官方README或网站核实;短横线表示“文档中未说明”,绝不表示“没有”。对于一些知名工具,此处引用的文档对某项功能没有提及,因此它们的单元格显示为短横线。',
          '表中的每个工具名称都链接到它自己的PromptQuorum评测,安装步骤和局限都在评测中介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何比较',
        content: [
          '每款工具的事实——价格、许可证、平台、硬件需求以及类别专属属性——只在该工具的目录记录中存储一次。下方的对比表由这些记录生成,该工具自己的评测也使用同一条记录,因此两者不会给出不同的数值。',
          '类别专属属性(例如OpenAI兼容API或AMD GPU支持)取自各项目的官方README或网站,并对照其中的确切措辞进行核实。文档没有说明的地方,表中显示短横线而不是猜测;如果某项说法带有限定(实验性、计划中,或仅通过单独的项目提供),该属性不列入表中,而是在该工具的评测中说明。',
          '只有拥有自己PromptQuorum评测的工具才会列入表中。仅作为API服务器列出的工具(h2oGPT、Tabby和OpenAI Edge TTS)在各自的类别中比较。本对比列出的是在你自己的硬件上运行的工具;它不做排名,因为合适的选择取决于你的限制条件。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '请先在下方选择一类工具,然后横向阅读每一行。点击工具名称即可打开其完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: '推理引擎:差异所在',
        items: [
          `**OpenAI兼容API。**${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'zh')}在文档中说明提供OpenAI兼容的HTTP API,因此为OpenAI API编写的应用可以直接指向它们。`,
          `**NVIDIA GPU。**${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'zh')}在文档中说明支持NVIDIA GPU(CUDA)。`,
          `**Apple Silicon。**${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'zh')}在文档中说明支持Apple Silicon、Metal或MLX。`,
          `**AMD GPU。**${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'zh')}在文档中说明支持AMD GPU。`,
          `**CPU推理。**${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'zh')}在文档中说明支持在CPU上运行推理。`,
          `**多GPU与多节点。**${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'zh')}在文档中说明支持多GPU、张量并行或多节点推理。`,
          `**许可证。** 这里的大多数引擎采用Apache-2.0(${ENGINES.license['Apache-2.0'] ?? 0}款)或MIT(${ENGINES.license['MIT'] ?? 0}款);KoboldCpp和text-generation-webui采用AGPL-3.0。Copyleft许可证会对分发修改后的版本附加条件——参见[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)。`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: '运行时与管理器:差异所在',
        items: [
          `**OpenAI兼容API。**${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'zh')}在文档中说明提供OpenAI兼容的API。`,
          `**桌面应用。**${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'zh')}在文档中说明提供可安装的桌面应用。`,
          `**内置模型库。**${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'zh')}在文档中说明内置了查找和下载模型的方式。`,
          `**无界面或服务器模式。**${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'zh')}在文档中说明可作为后台服务或不带GUI的服务器运行。`,
          `**许可证与价格。** 这里有${RUNTIMES.license['Apache-2.0'] ?? 0}款运行时采用Apache-2.0,${RUNTIMES.license['MIT'] ?? 0}款采用MIT。LM Studio是专有软件(可免费使用),Docker Model Runner随Docker Desktop捆绑提供(许可条款请见其评测),Msty是闭源软件并提供免费层,RunAnywhere和YPipe使用自己的条款或未公开的条款——请查看各自的评测。`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: '路由器与网关:差异所在',
        items: [
          `**OpenAI兼容端点。**${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'zh')}在文档中说明提供OpenAI兼容的端点。`,
          '**路由到本地模型。**[litellm](/zh/power-local-llm/litellm-review)在文档中说明其支持的提供商包括本地或自托管模型(例如Ollama)。',
          `**故障回退与负载均衡。**${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'zh')}在文档中说明支持在模型或提供商之间进行回退、重试或负载均衡。`,
          `**许可证。** ${RT.count}款中有${RT.license['MIT'] ?? 0}款采用MIT,${RT.license['GPL-3.0'] ?? 0}款采用GPL-3.0,${RT.license['AGPL-3.0'] ?? 0}款采用AGPL-3.0,${RT.license['Apache-2.0'] ?? 0}款采用Apache-2.0,另有${RT.license['Not stated'] ?? 0}款未标明许可证。`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: '本对比无法告诉你的内容',
        items: [
          '它比较的是文档中说明的能力,而不是性能。它不涉及每秒token数、内存占用或延迟——PromptQuorum没有对这些工具测量过这些指标,而且它们在很大程度上取决于你的硬件和模型。',
          '短横线是我们所查文档中的空白,而不是否定的结论。有些工具可能支持其README没有提到的功能;这在少数几款README简短、说明很少的常用工具上最为明显(例如Ollama的引擎功能)。',
          '硬件支持指的是文档中所述内容,并不保证在该硬件上有良好的体验;实际要求请阅读该工具的评测。',
          '工具更新很快。每款工具的评测都会说明核对时所用的版本,本指南会在评测更新时随之刷新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '推理引擎、运行时和网关有什么区别?',
            a: '推理引擎在你的硬件上执行模型(例如llama.cpp或vLLM)。运行时或管理器帮你下载模型并运行它们,通常带有桌面应用或模型库(例如Ollama或LM Studio)。路由器或网关位于一个或多个模型或提供商的前面并转发请求。它们承担不同的工作,因此分别比较。',
          },
          {
            q: '对比表中的短横线是什么意思?',
            a: '表示该项目自己的文档没有说明该属性。这并不表示缺少该功能;请查看该工具的评测或其代码仓库。',
          },
          {
            q: '为什么Ollama出现在两个分组中?',
            a: 'Ollama既是推理引擎,也是管理模型的运行时,因此在两个分组中都有列出。它的README说明的这里所比较的属性很少,所以它的许多单元格显示为短横线。',
          },
          {
            q: '这些工具中有带联盟链接(affiliate link)的吗?',
            a: '没有。撰写本文时,PromptQuorum与本对比中的任何工具都没有联盟合作关系,这里的任何链接都不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年刷新两次,并且在所列任一工具的评测更新时也会刷新,因为对比表与这些评测由相同的数据生成。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '各工具的官方README或网站,列在该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——对比表每一行所依据的记录。',
          '[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)——上文提到的各类许可证的含义。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          `[本地软件目录](/zh/directory)——浏览全部${TOTAL_APP_COUNT}款本地AI应用,并按类别筛选。`,
          '[本地语音工具对比](/zh/power-local-llm/local-llm-voice-audio-compared)——针对文本转语音、语音转文本和语音代理的同类对比。',
          '[本地图像、视频与视觉工具对比](/zh/power-local-llm/local-llm-images-video-compared)——针对图像生成和视觉模型的同类对比。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地推理引擎、运行时与网关对比(2026):运行和部署模型',
      description:
        `对比${RUN_SERVE_TOTAL}款本地运行模型的工具:推理引擎、运行时与管理器以及网关,均来自项目官方文档。`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '选择本地推理工具的开发者和自托管用户' },
      about: [
        { '@type': 'Thing', name: '推理引擎' },
        { '@type': 'Thing', name: '本地LLM运行时' },
        { '@type': 'Thing', name: 'LLM网关' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地推理引擎、运行时与网关对比(2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'Mecanismos de inferência, runtimes e gateways locais comparados (2026): executar e servir modelos',
    seoTitle: 'Motores e runtimes de IA local comparados 2026',
    intro:
      `Executar um modelo no seu próprio hardware envolve três tipos diferentes de ferramenta — mecanismos de inferência que executam o modelo, runtimes e gerenciadores que baixam e executam modelos para você, e roteadores e gateways que ficam na frente deles — e nenhuma lista de recursos isolada os compara de forma justa. Este guia compara ${RUN_SERVE_TOTAL} ferramentas gratuitas e freemium, um tipo por vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise própria de cada ferramenta no PromptQuorum, de modo que a tabela e as análises não possam se contradizer.`,
    metaDescription:
      `Compare ${RUN_SERVE_TOTAL} ferramentas para executar modelos localmente: mecanismos de inferência (llama.cpp, vLLM, SGLang, MLX e outros), runtimes e gerenciadores (Ollama, LM Studio, Jan) e gateways. Licenças, suporte a GPU, APIs compatíveis com OpenAI, segundo a documentação oficial.`,
    twitterDescription:
      'Mecanismos de inferência, runtimes e gateways locais comparados por tipo — licenças, suporte a NVIDIA/Apple/AMD/CPU, APIs compatíveis com OpenAI, multi-GPU — segundo a documentação oficial.',
    audience:
      'Desenvolvedores, self-hosters e usuários preocupados com privacidade que escolhem como executar e servir modelos de linguagem localmente e querem as diferenças detalhadas por tipo de ferramenta, e não uma lista única misturada.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mecanismos de inferência locais comparados',
    targetKeywords: [
      'comparação de mecanismos de inferência llm locais',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'melhor runtime de llm local',
      'servidor local compatível com openai',
      'gateway de llm local',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**As ${RUN_SERVE_TOTAL} ferramentas locais de execução e serviço do diretório PromptQuorum se dividem em três tipos que devem ser comparados separadamente: mecanismos de inferência (${RUN_SERVE_INFERENCE_ENGINES} ferramentas), runtimes e gerenciadores (${RUN_SERVE_RUNTIMES_MANAGERS}) e roteadores e gateways (${RUN_SERVE_ROUTERS_GATEWAYS}).** Entre os mecanismos, ${EA.nvidiaGpu} documentam suporte a GPU NVIDIA, ${EA.appleSilicon} documentam suporte a Apple Silicon e ${EA.openaiApi} documentam uma API compatível com OpenAI; entre os runtimes, ${RA.openaiApi} documentam uma API compatível com OpenAI. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.`,
    quickAnswerTop: {
      en: {
        question: 'Qual ferramenta de inferência local devo usar?',
        answer:
          'Depende do tipo de ferramenta, então compare dentro de um tipo por vez. Escolha pela restrição que mais importa — o hardware que você tem (NVIDIA, Apple Silicon, AMD ou CPU), uma API compatível com OpenAI, escalabilidade multi-GPU, um app de desktop ou um servidor headless — e use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          `Mecanismos de inferência: ${SEG['inference-engines']} ferramentas comparadas por suporte de hardware (NVIDIA, Apple Silicon, AMD, CPU), API compatível com OpenAI e inferência multi-GPU ou multinó.`,
          `Runtimes e gerenciadores: ${SEG['runtimes-managers']} ferramentas comparadas por API, app de desktop, biblioteca de modelos integrada e modo headless.`,
          `Roteadores e gateways: ${SEG['routers-gateways']} ferramentas comparadas por endpoint compatível com OpenAI, modelos locais e fallback.`,
          'Um traço (—) significa que a documentação do projeto não informa isso, e não que o recurso não exista.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Mecanismos de inferência: o que muda', anchor: 'engine-differences' },
      { label: 'Runtimes e gerenciadores: o que muda', anchor: 'runtime-differences' },
      { label: 'Roteadores e gateways: o que muda', anchor: 'gateway-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Executar modelos localmente envolve três tipos de ferramenta — mecanismos de inferência, runtimes e gerenciadores, e roteadores e gateways — por isso as ${RUN_SERVE_TOTAL} ferramentas do diretório PromptQuorum são comparadas dentro de cada tipo, usando uma tabela gerada a partir dos mesmos dados de ferramenta da análise própria de cada uma.`,
          },
          {
            type: 'plain-terms',
            text: 'Um mecanismo é a parte que de fato executa o modelo, um runtime ou gerenciador baixa e executa modelos para você, e um gateway roteia as requisições entre eles. Comparar um mecanismo com um gateway em suporte a GPU não faz sentido, por isso este guia compara itens do mesmo tipo.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} ferramentas, três tipos: mecanismos de inferência (${RUN_SERVE_INFERENCE_ENGINES}), runtimes e gerenciadores (${RUN_SERVE_RUNTIMES_MANAGERS}), roteadores e gateways (${RUN_SERVE_ROUTERS_GATEWAYS}). As ferramentas que são ao mesmo tempo mecanismo e runtime (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'pt')}) aparecem nos dois grupos.`,
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou o site oficial; um traço significa "não informado na documentação", nunca "não". Para algumas ferramentas conhecidas, a documentação citada aqui não menciona determinado recurso, então suas células mostram um traço.',
          'Cada nome de ferramenta na tabela leva à sua própria análise no PromptQuorum, onde estão as etapas de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro da ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise própria da ferramenta usa o mesmo registro, portanto as duas não podem informar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, API compatível com OpenAI ou suporte a GPU AMD) foram extraídos do README ou do site oficial de cada projeto e conferidos com a redação exata de lá. Quando a documentação é omissa, a tabela mostra um traço em vez de adivinhar; quando a afirmação vem com ressalvas (experimental, planejada ou disponível apenas por meio de um projeto separado), o atributo fica fora da tabela e é tratado na análise da ferramenta.',
          'Apenas ferramentas com análise própria no PromptQuorum estão na tabela. Ferramentas listadas apenas como servidores de API (h2oGPT, Tabby e OpenAI Edge TTS) são comparadas em suas próprias categorias. A comparação lista ferramentas que rodam no seu próprio hardware; ela não as classifica, porque a escolha certa depende da sua restrição.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content: 'Escolha abaixo um tipo de ferramenta e leia ao longo de uma linha. Clique no nome de uma ferramenta para abrir a análise completa no PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'Mecanismos de inferência: o que muda',
        items: [
          `**API compatível com OpenAI.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'pt')} documentam uma API HTTP compatível com OpenAI, então apps escritos para a API da OpenAI podem apontar para eles.`,
          `**GPUs NVIDIA.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'pt')} documentam suporte a GPU NVIDIA (CUDA).`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'pt')} documentam suporte a Apple Silicon, Metal ou MLX.`,
          `**GPUs AMD.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'pt')} documentam suporte a GPU AMD.`,
          `**Inferência em CPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'pt')} documentam a execução de inferência em CPU.`,
          `**Multi-GPU e multinó.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'pt')} documentam inferência multi-GPU, tensor-paralela ou multinó.`,
          `**Licença.** A maioria dos mecanismos aqui é Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} ferramentas) ou MIT (${ENGINES.license['MIT'] ?? 0}); KoboldCpp e text-generation-webui são AGPL-3.0. Licenças copyleft impõem condições à distribuição de versões modificadas — veja [Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'Runtimes e gerenciadores: o que muda',
        items: [
          `**API compatível com OpenAI.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'pt')} documentam uma API compatível com OpenAI.`,
          `**App de desktop.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'pt')} documentam um app de desktop instalável.`,
          `**Biblioteca de modelos integrada.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'pt')} documentam uma forma integrada de encontrar e baixar modelos.`,
          `**Modo headless ou servidor.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'pt')} documentam a execução como serviço em segundo plano ou servidor sem a interface gráfica.`,
          `**Licença e preço.** ${RUNTIMES.license['Apache-2.0'] ?? 0} runtimes aqui são Apache-2.0 e ${RUNTIMES.license['MIT'] ?? 0} são MIT. O LM Studio é proprietário (gratuito para uso), o Docker Model Runner vem incluído no Docker Desktop (os termos de licença estão na análise dele), o Msty é de código fechado com um plano gratuito, e o RunAnywhere e o YPipe usam termos próprios ou não documentados — confira cada análise.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'Roteadores e gateways: o que muda',
        items: [
          `**Endpoint compatível com OpenAI.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'pt')} documentam um endpoint compatível com OpenAI.`,
          '**Roteamento para modelos locais.** [litellm](/pt/power-local-llm/litellm-review) documenta modelos locais ou auto-hospedados (como o Ollama) entre os provedores compatíveis.',
          `**Fallback e balanceamento de carga.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'pt')} documentam fallback, novas tentativas ou balanceamento de carga entre modelos ou provedores.`,
          `**Licença.** ${RT.license['MIT'] ?? 0} dos ${RT.count} são MIT, ${RT.license['GPL-3.0'] ?? 0} é GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0} é AGPL-3.0 e ${RT.license['Apache-2.0'] ?? 0} é Apache-2.0; ${RT.license['Not stated'] ?? 0} não informa a licença.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara capacidades documentadas, não desempenho. Não diz nada sobre tokens por segundo, uso de memória ou latência — o PromptQuorum não os mediu para essas ferramentas, e eles dependem muito do seu hardware e do seu modelo.',
          'Os traços são lacunas na documentação que verificamos, não achados negativos. Algumas ferramentas podem oferecer um recurso que o README não menciona; isso é mais visível em algumas ferramentas amplamente usadas cujos READMEs curtos informam pouco (por exemplo, os recursos de mecanismo do Ollama).',
          'O suporte de hardware é o que a documentação afirma, não uma garantia de boa experiência nesse hardware; leia a análise da ferramenta para os requisitos reais.',
          'As ferramentas mudam rápido. A análise de cada ferramenta informa a versão em que foi verificada, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é a diferença entre um mecanismo de inferência, um runtime e um gateway?',
            a: 'Um mecanismo de inferência executa o modelo no seu hardware (por exemplo, llama.cpp ou vLLM). Um runtime ou gerenciador baixa modelos e os executa para você, muitas vezes com um app de desktop ou uma biblioteca de modelos (por exemplo, Ollama ou LM Studio). Um roteador ou gateway fica na frente de um ou mais modelos ou provedores e encaminha as requisições. Eles fazem trabalhos diferentes, por isso são comparados separadamente.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a documentação do próprio projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'Por que o Ollama está em dois grupos?',
            a: 'O Ollama é ao mesmo tempo um mecanismo de inferência e um runtime que gerencia modelos, por isso aparece nos dois. O README dele informa poucos dos atributos comparados aqui, então muitas de suas células mostram um traço.',
          },
          {
            q: 'Alguma dessas ferramentas tem link de afiliado?',
            a: 'Não. No momento da redação, o PromptQuorum não tem nenhuma relação de afiliado com nenhuma ferramenta desta comparação, e nenhum link aqui gera comissão.',
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
          'O README ou site oficial de cada ferramenta, listado na análise da ferramenta no PromptQuorum (com link a partir da tabela comparativa).',
          '[Diretório de apps de IA local do PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
          '[Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained) — o que significam as famílias de licença citadas acima.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          `[Diretório de software local](/pt/directory) — navegue por ${TOTAL_APP_COUNT} apps de IA local e filtre por categoria.`,
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a mesma comparação para texto para fala, fala para texto e agentes de voz.',
          '[Ferramentas locais de imagem, vídeo e visão comparadas](/pt/power-local-llm/local-llm-images-video-compared) — a mesma comparação para geração de imagens e modelos de visão.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mecanismos de inferência, runtimes e gateways locais comparados (2026): executar e servir modelos',
      description:
        `Compare ${RUN_SERVE_TOTAL} ferramentas para executar modelos localmente: mecanismos de inferência, runtimes e gerenciadores, e gateways, segundo a documentação oficial dos projetos.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores e self-hosters que escolhem ferramentas de inferência local' },
      about: [
        { '@type': 'Thing', name: 'Mecanismos de inferência' },
        { '@type': 'Thing', name: 'Runtimes de LLM locais' },
        { '@type': 'Thing', name: 'Gateways de LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mecanismos de inferência, runtimes e gateways locais comparados (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: 'مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية (2026): تشغيل النماذج وتقديمها',
    seoTitle: 'مقارنة محركات الاستدلال وبيئات التشغيل المحلية 2026',
    intro:
      `يتطلب تشغيل نموذج على جهازك ثلاثة أنواع مختلفة من الأدوات — محركات استدلال تنفّذ النموذج، وبيئات تشغيل ومديرون ينزّلون النماذج ويشغّلونها نيابةً عنك، ومسيّرات وبوابات تقف أمامها — ولا توجد قائمة ميزات واحدة تقارنها بإنصاف. يقارن هذا الدليل ${RUN_SERVE_TOTAL} أداة مجانية ومجانية جزئيًا (freemium)، نوعًا بعد نوع، بجدول مقارنة مُنشأ من البيانات نفسها التي تقوم عليها مراجعة PromptQuorum لكل أداة، بحيث لا يتعارض الجدول مع المراجعات.`,
    metaDescription:
      `قارن ${RUN_SERVE_TOTAL} أداة لتشغيل النماذج محليًا: محركات استدلال مثل llama.cpp وvLLM، وبيئات تشغيل مثل Ollama وLM Studio، وبوابات. الرخص ودعم GPU وواجهات OpenAI من التوثيق الرسمي.`,
    twitterDescription:
      'مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية حسب النوع — الرخص ودعم NVIDIA وApple وAMD وCPU وواجهات OpenAI وتعدد وحدات GPU — من التوثيق الرسمي.',
    audience:
      'المطورون ومستضيفو الخدمات ذاتيًا والمستخدمون المهتمون بالخصوصية ممن يختارون طريقة تشغيل النماذج اللغوية وتقديمها محليًا، ويريدون عرض الفروق لكل نوع من الأدوات لا في قائمة واحدة مختلطة.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة محركات الاستدلال المحلية',
    targetKeywords: [
      'مقارنة محركات الاستدلال المحلية للنماذج اللغوية',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      'أفضل بيئة تشغيل محلية للنماذج اللغوية',
      'خادم محلي متوافق مع OpenAI',
      'بوابة محلية للنماذج اللغوية',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**تنقسم أدوات التشغيل والتقديم المحلية الـ${RUN_SERVE_TOTAL} في دليل PromptQuorum إلى ثلاثة أنواع ينبغي مقارنتها كلًّا على حدة: محركات استدلال (${RUN_SERVE_INFERENCE_ENGINES} أداة)، وبيئات تشغيل ومديرون (${RUN_SERVE_RUNTIMES_MANAGERS})، ومسيّرات وبوابات (${RUN_SERVE_ROUTERS_GATEWAYS}).** ضمن المحركات، توثّق ${EA.nvidiaGpu} أداة دعم NVIDIA GPU، وتوثّق ${EA.appleSilicon} دعم Apple Silicon، وتوثّق ${EA.openaiApi} واجهة برمجة متوافقة مع OpenAI؛ وضمن بيئات التشغيل، توثّق ${RA.openaiApi} أدوات واجهة برمجة متوافقة مع OpenAI. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.`,
    quickAnswerTop: {
      en: {
        question: 'أي أداة استدلال محلية ينبغي أن أستخدم؟',
        answer:
          'يعتمد ذلك على نوع الأداة، لذا قارن ضمن نوع واحد في كل مرة. اختر بحسب القيد الأهم لديك — العتاد المتوفر (NVIDIA أو Apple Silicon أو AMD أو CPU)، أو واجهة برمجة متوافقة مع OpenAI، أو التوسع على عدة وحدات GPU، أو تطبيق سطح مكتب، أو خادم بلا واجهة — واستعن بالجدول أدناه المُنشأ من التوثيق الرسمي لكل أداة.',
        bullets: [
          `محركات الاستدلال: ${SEG['inference-engines']} أداة تُقارَن بحسب دعم العتاد (NVIDIA وApple Silicon وAMD وCPU) والواجهة المتوافقة مع OpenAI والاستدلال على عدة وحدات GPU أو عدة عقد.`,
          `بيئات التشغيل والمديرون: ${SEG['runtimes-managers']} أداة تُقارَن بحسب الواجهة البرمجية وتطبيق سطح المكتب ومكتبة النماذج المدمجة والوضع بلا واجهة.`,
          `المسيّرات والبوابات: ${SEG['routers-gateways']} أدوات تُقارَن بحسب نقطة النهاية المتوافقة مع OpenAI والنماذج المحلية والبديل الاحتياطي.`,
          'الشرطة (—) تعني أن توثيق المشروع لا يذكر الميزة، وليس أن الميزة غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'محركات الاستدلال: ما الذي يختلف', anchor: 'engine-differences' },
      { label: 'بيئات التشغيل والمديرون: ما الذي يختلف', anchor: 'runtime-differences' },
      { label: 'المسيّرات والبوابات: ما الذي يختلف', anchor: 'gateway-differences' },
      { label: 'ما لا تخبرك به هذه المقارنة', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `يتطلب تشغيل النماذج محليًا ثلاثة أنواع من الأدوات — محركات استدلال، وبيئات تشغيل ومديرون، ومسيّرات وبوابات — لذلك تُقارَن الأدوات الـ${RUN_SERVE_TOTAL} في دليل PromptQuorum ضمن كل نوع، بجدول مُنشأ من بيانات الأدوات نفسها التي تقوم عليها مراجعة كل أداة.`,
          },
          {
            type: 'plain-terms',
            text: 'المحرك هو الجزء الذي يشغّل النموذج فعليًا، وبيئة التشغيل أو المدير تنزّل النماذج وتشغّلها نيابةً عنك، والبوابة توجّه الطلبات بينها. ومقارنة محرك ببوابة من حيث دعم GPU لا معنى لها، لذلك يقارن هذا الدليل الشيء بمثيله.',
          },
        ],
        items: [
          `${RUN_SERVE_TOTAL} أداة في ثلاثة أنواع: محركات استدلال (${RUN_SERVE_INFERENCE_ENGINES})، وبيئات تشغيل ومديرون (${RUN_SERVE_RUNTIMES_MANAGERS})، ومسيّرات وبوابات (${RUN_SERVE_ROUTERS_GATEWAYS}). الأدوات التي تعمل محركًا وبيئة تشغيل معًا (${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'ar')}) تظهر في المجموعتين.`,
          'يُنشأ الجدول من سجل كل أداة ويُدقَّق مقابل ملف README الرسمي أو موقعها؛ والشرطة تعني «غير مذكور في التوثيق» وليس «لا» أبدًا. وبالنسبة إلى بعض الأدوات المعروفة، يسكت التوثيق المقتبس هنا عن ميزة معينة، فتظهر خلاياها بشرطة.',
          'يرتبط اسم كل أداة في الجدول بمراجعتها الخاصة في PromptQuorum، حيث تُغطّى خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والخصائص الخاصة بالفئة — مرة واحدة في سجلها ضمن الدليل. ويُنشأ جدول المقارنة أدناه من هذه السجلات، وتستند مراجعة الأداة نفسها إلى السجل ذاته، فلا يمكن أن يذكر الاثنان قيمًا مختلفة.',
          'أُخذت الخصائص الخاصة بالفئة (مثل الواجهة البرمجية المتوافقة مع OpenAI أو دعم AMD GPU) من ملف README الرسمي لكل مشروع أو موقعه، ودُقّقت مقابل الصياغة الدقيقة هناك. وحيث يسكت التوثيق، يعرض الجدول شرطة بدل التخمين؛ وحيث يكون الادعاء مقيّدًا (تجريبي أو مخطط له أو متاح عبر مشروع منفصل فقط)، تُستبعد الخاصية من الجدول وتُغطّى في مراجعة الأداة.',
          'يضم الجدول الأدوات التي لها مراجعة خاصة في PromptQuorum فقط. أما الأدوات المدرجة كخوادم API فقط (h2oGPT وTabby وOpenAI Edge TTS) فتُقارَن في فئاتها الخاصة. تسرد المقارنة الأدوات التي تعمل على عتادك الخاص ولا ترتّبها، لأن الأداة المناسبة تعتمد على القيد الذي يهمك.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content: 'اختر نوع الأداة أدناه ثم اقرأ عبر الصف. انقر على اسم الأداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: 'محركات الاستدلال: ما الذي يختلف',
        items: [
          `**واجهة برمجة متوافقة مع OpenAI.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'ar')} توثّق واجهة HTTP متوافقة مع OpenAI، لذا يمكن للتطبيقات المكتوبة لواجهة OpenAI أن تشير إليها.`,
          `**وحدات NVIDIA GPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'ar')} توثّق دعم NVIDIA GPU (CUDA).`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'ar')} توثّق دعم Apple Silicon أو Metal أو MLX.`,
          `**وحدات AMD GPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'ar')} توثّق دعم AMD GPU.`,
          `**الاستدلال على CPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'ar')} توثّق تشغيل الاستدلال على CPU.`,
          `**عدة وحدات GPU وعدة عقد.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'ar')} توثّق الاستدلال على عدة وحدات GPU أو بالتوازي الموتري (tensor-parallel) أو على عدة عقد.`,
          `**الرخصة.** معظم المحركات هنا بترخيص Apache-2.0 (${ENGINES.license['Apache-2.0'] ?? 0} أداة) أو MIT (${ENGINES.license['MIT'] ?? 0})؛ أما KoboldCpp وtext-generation-webui فبترخيص AGPL-3.0. تفرض رخص copyleft شروطًا على توزيع النسخ المعدّلة — راجع [شرح رخص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained).`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: 'بيئات التشغيل والمديرون: ما الذي يختلف',
        items: [
          `**واجهة برمجة متوافقة مع OpenAI.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'ar')} توثّق واجهة برمجة متوافقة مع OpenAI.`,
          `**تطبيق سطح المكتب.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'ar')} توثّق تطبيق سطح مكتب قابلًا للتثبيت.`,
          `**مكتبة نماذج مدمجة.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'ar')} توثّق وسيلة مدمجة للعثور على النماذج وتنزيلها.`,
          `**الوضع بلا واجهة أو وضع الخادم.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'ar')} توثّق التشغيل كخدمة في الخلفية أو كخادم دون واجهة رسومية.`,
          `**الرخصة والسعر.** ${RUNTIMES.license['Apache-2.0'] ?? 0} من بيئات التشغيل هنا بترخيص Apache-2.0 و${RUNTIMES.license['MIT'] ?? 0} بترخيص MIT. أما LM Studio فمملوك (ومجاني الاستخدام)، وDocker Model Runner مضمَّن مع Docker Desktop (شروط الترخيص في مراجعته)، وMsty مغلق المصدر مع خطة مجانية، وتستخدم RunAnywhere وYPipe شروطها الخاصة أو غير موثّقة — راجع كل مراجعة.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: 'المسيّرات والبوابات: ما الذي يختلف',
        items: [
          `**نقطة نهاية متوافقة مع OpenAI.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'ar')} توثّق نقطة نهاية متوافقة مع OpenAI.`,
          '**التوجيه إلى النماذج المحلية.** [litellm](/ar/power-local-llm/litellm-review) يوثّق النماذج المحلية أو المستضافة ذاتيًا (مثل Ollama) ضمن المزوّدين المدعومين.',
          `**البديل الاحتياطي وموازنة الحمل.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'ar')} توثّق البديل الاحتياطي أو إعادة المحاولة أو موازنة الحمل عبر النماذج أو المزوّدين.`,
          `**الرخصة.** ${RT.license['MIT'] ?? 0} من ${RT.count} بترخيص MIT، و${RT.license['GPL-3.0'] ?? 0} بترخيص GPL-3.0، و${RT.license['AGPL-3.0'] ?? 0} بترخيص AGPL-3.0، و${RT.license['Apache-2.0'] ?? 0} بترخيص Apache-2.0، و${RT.license['Not stated'] ?? 0} منها لم تذكر ترخيصها.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تخبرك به هذه المقارنة',
        items: [
          'تقارن هذه المقارنة القدرات الموثّقة لا الأداء. فهي لا تقول شيئًا عن الرموز في الثانية أو استهلاك الذاكرة أو زمن الاستجابة — لم تقِسها PromptQuorum لهذه الأدوات، وهي تعتمد بشدة على عتادك ونموذجك.',
          'الشرطات فجوات في التوثيق الذي راجعناه، وليست نتائج سلبية. قد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها؛ ويظهر ذلك بوضوح أكبر في بعض الأدوات واسعة الاستخدام التي تقول ملفات README القصيرة الخاصة بها القليل (مثل ميزات المحرك في Ollama).',
          'دعم العتاد هو ما يذكره التوثيق، وليس ضمانًا لتجربة جيدة على ذلك العتاد؛ اقرأ مراجعة الأداة لمعرفة المتطلبات الفعلية.',
          'تتغير الأدوات بسرعة. تذكر مراجعة كل أداة الإصدار الذي دُقّقت مقابله، ويُحدَّث هذا الدليل عند تحديث مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما الفرق بين محرك الاستدلال وبيئة التشغيل والبوابة؟',
            a: 'ينفّذ محرك الاستدلال النموذج على عتادك (مثل llama.cpp أو vLLM). أما بيئة التشغيل أو المدير فتنزّل النماذج وتشغّلها نيابةً عنك، غالبًا مع تطبيق سطح مكتب أو مكتبة نماذج (مثل Ollama أو LM Studio). وتقف المسيّرة أو البوابة أمام نموذج أو أكثر أو مزوّد أو أكثر وتمرّر الطلبات. وهي تؤدي مهام مختلفة، لذلك تُقارَن كلٌّ على حدة.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن توثيق المشروع نفسه لا يذكر تلك الخاصية. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'لماذا يظهر Ollama في مجموعتين؟',
            a: 'Ollama محرك استدلال وبيئة تشغيل تدير النماذج في آن واحد، لذلك يُدرَج في المجموعتين. ويذكر ملف README الخاص به القليل من الخصائص المقارَنة هنا، فتظهر كثير من خلاياه بشرطة.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط أفلييت؟',
            a: 'لا. لا تربط PromptQuorum أي علاقة أفلييت بأي أداة في هذه المقارنة وقت كتابتها، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة وكلما حُدّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول يُنشأ من البيانات نفسها التي تقوم عليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي لكل أداة أو موقعها، المدرج في مراجعتها في PromptQuorum (المرتبطة من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُنشأ منه كل صف في الجدول.',
          '[شرح رخص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained) — معنى عائلات الرخص المذكورة أعلاه.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          `[دليل البرامج المحلية](/ar/directory) — تصفّح ${TOTAL_APP_COUNT} تطبيق ذكاء اصطناعي محلي وصفّها حسب الفئة.`,
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — المقارنة نفسها لتحويل النص إلى كلام والكلام إلى نص والوكلاء الصوتيين.',
          '[مقارنة أدوات الصور والفيديو والرؤية المحلية](/ar/power-local-llm/local-llm-images-video-compared) — المقارنة نفسها لتوليد الصور ونماذج الرؤية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية (2026): تشغيل النماذج وتقديمها',
      description:
        `قارن ${RUN_SERVE_TOTAL} أداة لتشغيل النماذج محليًا: محركات استدلال وبيئات تشغيل ومديرون وبوابات، من التوثيق الرسمي للمشاريع.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون ومستضيفو الخدمات ذاتيًا الذين يختارون أدوات استدلال محلية' },
      about: [
        { '@type': 'Thing', name: 'محركات الاستدلال' },
        { '@type': 'Thing', name: 'بيئات تشغيل النماذج اللغوية المحلية' },
        { '@type': 'Thing', name: 'بوابات النماذج اللغوية' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية (2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-03-20',
    designSkin: 'hub',
    theme: 'Overview & Reference',
    title: '로컬 추론 엔진·런타임·게이트웨이 비교(2026): 모델 실행과 서빙',
    seoTitle: '로컬 추론 엔진·런타임 비교 2026',
    intro:
      `자신의 하드웨어에서 모델을 실행하려면 세 종류의 도구가 필요합니다. 모델을 실제로 구동하는 추론 엔진, 모델을 대신 내려받아 실행해 주는 런타임과 매니저, 그리고 그 앞단에 놓이는 라우터와 게이트웨이입니다. 하나의 기능 목록으로는 이들을 공정하게 비교할 수 없습니다. 이 가이드는 무료 및 프리미엄(freemium) 도구 ${RUN_SERVE_TOTAL}개를 종류별로 나누어 비교하며, 비교표는 각 도구의 PromptQuorum 리뷰와 동일한 데이터로 생성되므로 표와 리뷰가 서로 어긋날 수 없습니다.`,
    metaDescription:
      `로컬 모델 실행 도구 ${RUN_SERVE_TOTAL}개 비교: 추론 엔진(llama.cpp, vLLM, SGLang, MLX 등), 런타임·매니저(Ollama, LM Studio, Jan), 게이트웨이. 라이선스, GPU 지원, OpenAI 호환 API를 공식 문서 기준으로 정리했습니다.`,
    twitterDescription:
      '로컬 추론 엔진, 런타임, 게이트웨이를 종류별로 비교: 라이선스, NVIDIA/Apple/AMD/CPU 지원, OpenAI 호환 API, 멀티 GPU를 공식 문서 기준으로 정리했습니다.',
    audience:
      '언어 모델을 로컬에서 실행하고 서빙할 방법을 고르는 개발자, 셀프 호스팅 사용자, 개인정보를 중시하는 사용자 중, 하나로 뭉뚱그린 목록이 아니라 도구 종류별 차이를 보고 싶은 분.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 추론 엔진 비교',
    targetKeywords: [
      '로컬 llm 추론 엔진 비교',
      'llama cpp vs vllm',
      'ollama vs lm studio',
      '로컬 llm 런타임 추천',
      'openai 호환 로컬 서버',
      '로컬 llm 게이트웨이',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple Silicon', 'AMD GPU', 'CPU'],
    leadAnswerBlock:
      `**PromptQuorum 디렉터리에 있는 로컬 실행·서빙 도구 ${RUN_SERVE_TOTAL}개는 서로 따로 비교해야 하는 세 종류로 나뉩니다. 추론 엔진(${RUN_SERVE_INFERENCE_ENGINES}개), 런타임과 매니저(${RUN_SERVE_RUNTIMES_MANAGERS}개), 라우터와 게이트웨이(${RUN_SERVE_ROUTERS_GATEWAYS}개)입니다.** 엔진 중 ${EA.nvidiaGpu}개는 NVIDIA GPU 지원을, ${EA.appleSilicon}개는 Apple Silicon 지원을, ${EA.openaiApi}개는 OpenAI 호환 API를 문서화하고 있으며, 런타임 중 ${RA.openaiApi}개는 OpenAI 호환 API를 문서화하고 있습니다. 아래 비교표를 활용하되, 설치하기 전에 각 도구의 리뷰를 읽어 보세요.`,
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 추론 도구를 써야 하나요?',
        answer:
          '도구의 종류에 따라 다르므로, 한 번에 한 종류 안에서 비교하세요. 가장 중요한 조건, 즉 보유한 하드웨어(NVIDIA, Apple Silicon, AMD 또는 CPU), OpenAI 호환 API, 멀티 GPU 확장, 데스크톱 앱 또는 헤드리스 서버 중 무엇이 핵심인지에 따라 고르고, 각 도구의 공식 문서를 바탕으로 생성한 아래 표를 활용하세요.',
        bullets: [
          `추론 엔진: 하드웨어 지원(NVIDIA, Apple Silicon, AMD, CPU), OpenAI 호환 API, 멀티 GPU 또는 멀티 노드 추론을 기준으로 ${SEG['inference-engines']}개 도구를 비교.`,
          `런타임과 매니저: API, 데스크톱 앱, 내장 모델 라이브러리, 헤드리스 모드를 기준으로 ${SEG['runtimes-managers']}개 도구를 비교.`,
          `라우터와 게이트웨이: OpenAI 호환 엔드포인트, 로컬 모델, 폴백을 기준으로 ${SEG['routers-gateways']}개 도구를 비교.`,
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 요약', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: '추론 엔진: 무엇이 다른가', anchor: 'engine-differences' },
      { label: '런타임과 매니저: 무엇이 다른가', anchor: 'runtime-differences' },
      { label: '라우터와 게이트웨이: 무엇이 다른가', anchor: 'gateway-differences' },
      { label: '이 비교로는 알 수 없는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `모델을 로컬에서 실행하려면 추론 엔진, 런타임과 매니저, 라우터와 게이트웨이라는 세 종류의 도구가 필요하므로, PromptQuorum 디렉터리의 도구 ${RUN_SERVE_TOTAL}개를 종류별로 나누어 비교하며, 비교표는 각 도구의 리뷰와 동일한 도구 데이터로 생성됩니다.`,
          },
          {
            type: 'plain-terms',
            text: '엔진은 모델을 실제로 구동하는 부분이고, 런타임이나 매니저는 모델을 대신 내려받아 실행해 주며, 게이트웨이는 그 사이에서 요청을 전달합니다. 엔진과 게이트웨이를 GPU 지원 여부로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          `도구 ${RUN_SERVE_TOTAL}개, 세 종류: 추론 엔진(${RUN_SERVE_INFERENCE_ENGINES}개), 런타임과 매니저(${RUN_SERVE_RUNTIMES_MANAGERS}개), 라우터와 게이트웨이(${RUN_SERVE_ROUTERS_GATEWAYS}개). 엔진이자 런타임인 도구(${compareToolsInBothSegments('run-serve', 'inference-engines', 'runtimes-managers', 'ko')})는 두 그룹에 모두 나타납니다.`,
          '표는 각 도구의 레코드로 생성되고 공식 README 또는 사이트와 대조해 확인했습니다. 대시는 "문서에 명시되지 않음"을 뜻하며 "아니오"를 뜻하지 않습니다. 잘 알려진 일부 도구는 여기서 인용한 문서에 특정 기능에 대한 언급이 없어 해당 셀이 대시로 표시됩니다.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 단계와 한계는 그 리뷰에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 사실 정보, 즉 가격, 라이선스, 플랫폼, 하드웨어 요건, 카테고리별 속성은 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 이 레코드로 생성되고 도구별 리뷰도 같은 레코드를 바탕으로 작성되므로, 두 곳이 서로 다른 값을 표기할 수 없습니다.',
          '카테고리별 속성(예: OpenAI 호환 API 또는 AMD GPU 지원)은 각 프로젝트의 공식 README 또는 웹사이트에서 가져와 그곳의 정확한 표현과 대조해 확인했습니다. 문서에 언급이 없는 경우 표에는 추측하지 않고 대시를 표시합니다. 주장에 단서가 붙는 경우(실험적, 계획 중, 또는 별도 프로젝트를 통해서만 제공)에는 해당 속성을 표에서 제외하고 그 도구의 리뷰에서 다룹니다.',
          '자체 PromptQuorum 리뷰가 있는 도구만 표에 포함됩니다. API 서버로만 등록된 도구(h2oGPT, Tabby, OpenAI Edge TTS)는 각자의 카테고리에서 비교합니다. 이 비교는 자신의 하드웨어에서 실행되는 도구를 나열할 뿐 순위를 매기지 않습니다. 적합한 도구는 각자의 조건에 따라 달라지기 때문입니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content: '아래에서 도구 종류를 선택한 다음 행을 따라 읽으세요. 도구 이름을 클릭하면 해당 PromptQuorum 리뷰 전문이 열립니다.',
        component: 'CategoryCompareTable',
      },
      engineDifferences: {
        id: 'engine-differences',
        title: '추론 엔진: 무엇이 다른가',
        items: [
          `**OpenAI 호환 API.** ${compareToolsByAttr('run-serve', 'inference-engines', 'openaiApi', 'ko')}은 OpenAI 호환 HTTP API를 문서화하고 있어, OpenAI API용으로 만든 앱이 이들을 가리키도록 설정할 수 있습니다.`,
          `**NVIDIA GPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'nvidiaGpu', 'ko')}은 NVIDIA GPU(CUDA) 지원을 문서화하고 있습니다.`,
          `**Apple Silicon.** ${compareToolsByAttr('run-serve', 'inference-engines', 'appleSilicon', 'ko')}는 Apple Silicon, Metal 또는 MLX 지원을 문서화하고 있습니다.`,
          `**AMD GPU.** ${compareToolsByAttr('run-serve', 'inference-engines', 'amdGpu', 'ko')}은 AMD GPU 지원을 문서화하고 있습니다.`,
          `**CPU 추론.** ${compareToolsByAttr('run-serve', 'inference-engines', 'cpuInference', 'ko')}은 CPU에서 추론을 실행하는 방법을 문서화하고 있습니다.`,
          `**멀티 GPU 및 멀티 노드.** ${compareToolsByAttr('run-serve', 'inference-engines', 'distributed', 'ko')}은 멀티 GPU, 텐서 병렬 또는 멀티 노드 추론을 문서화하고 있습니다.`,
          `**라이선스.** 여기 있는 엔진 대부분은 Apache-2.0(${ENGINES.license['Apache-2.0'] ?? 0}개) 또는 MIT(${ENGINES.license['MIT'] ?? 0}개)이며, KoboldCpp와 text-generation-webui는 AGPL-3.0입니다. 카피레프트 라이선스는 수정본을 배포할 때 조건을 붙입니다. [AI 도구 라이선스 설명](/ko/power-local-llm/ai-tool-licenses-explained)을 참고하세요.`,
        ],
      },
      runtimeDifferences: {
        id: 'runtime-differences',
        title: '런타임과 매니저: 무엇이 다른가',
        items: [
          `**OpenAI 호환 API.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'openaiApi', 'ko')}는 OpenAI 호환 API를 문서화하고 있습니다.`,
          `**데스크톱 앱.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'desktopApp', 'ko')}는 설치형 데스크톱 앱을 문서화하고 있습니다.`,
          `**내장 모델 라이브러리.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'modelLibrary', 'ko')}는 모델을 찾고 내려받는 내장 기능을 문서화하고 있습니다.`,
          `**헤드리스 또는 서버 모드.** ${compareToolsByAttr('run-serve', 'runtimes-managers', 'headless', 'ko')}는 GUI 없이 백그라운드 서비스 또는 서버로 실행하는 방법을 문서화하고 있습니다.`,
          `**라이선스와 가격.** 여기 있는 런타임 중 ${RUNTIMES.license['Apache-2.0'] ?? 0}개는 Apache-2.0이고 ${RUNTIMES.license['MIT'] ?? 0}개는 MIT입니다. LM Studio는 독점 소프트웨어이며(무료로 사용할 수 있습니다), Docker Model Runner는 Docker Desktop에 포함되어 있고(라이선스 조건은 해당 리뷰를 참고하세요), Msty는 무료 티어가 있는 비공개 소스이고, RunAnywhere와 YPipe는 자체 약관을 사용하거나 약관이 문서화되어 있지 않습니다. 각 리뷰에서 확인하세요.`,
        ],
      },
      gatewayDifferences: {
        id: 'gateway-differences',
        title: '라우터와 게이트웨이: 무엇이 다른가',
        items: [
          `**OpenAI 호환 엔드포인트.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'openaiApi', 'ko')}은 OpenAI 호환 엔드포인트를 문서화하고 있습니다.`,
          '**로컬 모델로의 라우팅.** [litellm](/ko/power-local-llm/litellm-review)은 지원하는 프로바이더 중에 로컬 또는 셀프 호스팅 모델(예: Ollama)이 있다고 문서화하고 있습니다.',
          `**폴백과 로드 밸런싱.** ${compareToolsByAttr('run-serve', 'routers-gateways', 'fallback', 'ko')}은 모델 또는 프로바이더 간의 폴백, 재시도 또는 로드 밸런싱을 문서화하고 있습니다.`,
          `**라이선스.** ${RT.count}개 중 ${RT.license['MIT'] ?? 0}개는 MIT, ${RT.license['GPL-3.0'] ?? 0}개는 GPL-3.0, ${RT.license['AGPL-3.0'] ?? 0}개는 AGPL-3.0, ${RT.license['Apache-2.0'] ?? 0}개는 Apache-2.0이며, ${RT.license['Not stated'] ?? 0}개는 라이선스를 명시하지 않았습니다.`,
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교로는 알 수 없는 것',
        items: [
          '이 비교는 성능이 아니라 문서화된 기능을 비교합니다. 초당 토큰 수, 메모리 사용량, 지연 시간에 대해서는 아무것도 알려 주지 않습니다. PromptQuorum은 이 도구들에 대해 이를 측정하지 않았으며, 결과는 하드웨어와 모델에 크게 좌우됩니다.',
          '대시는 우리가 확인한 문서의 공백일 뿐 부정적인 결론이 아닙니다. 일부 도구는 README에 언급하지 않은 기능을 지원할 수도 있으며, README가 짧아 명시된 내용이 적은 몇몇 널리 쓰이는 도구(예: Ollama의 엔진 기능)에서 이런 경우가 가장 두드러집니다.',
          '하드웨어 지원은 문서에 명시된 내용이지 해당 하드웨어에서 좋은 사용 경험을 보장하는 것이 아닙니다. 실제 요구 사항은 해당 도구의 리뷰를 읽어 보세요.',
          '도구는 빠르게 바뀝니다. 각 도구의 리뷰에는 확인한 기준 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '추론 엔진, 런타임, 게이트웨이는 무엇이 다른가요?',
            a: '추론 엔진은 자신의 하드웨어에서 모델을 실행합니다(예: llama.cpp, vLLM). 런타임 또는 매니저는 모델을 내려받아 대신 실행해 주며, 데스크톱 앱이나 모델 라이브러리를 갖추는 경우가 많습니다(예: Ollama, LM Studio). 라우터 또는 게이트웨이는 하나 이상의 모델이나 프로바이더 앞단에 놓여 요청을 전달합니다. 서로 하는 일이 다르기 때문에 따로 비교합니다.',
          },
          {
            q: '비교표의 대시는 무슨 뜻인가요?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻은 아니므로, 해당 도구의 리뷰나 저장소를 확인하세요.',
          },
          {
            q: 'Ollama가 왜 두 그룹에 있나요?',
            a: 'Ollama는 추론 엔진이면서 모델을 관리하는 런타임이기도 해서 양쪽에 모두 등록되어 있습니다. 이 표에서 비교하는 속성 중 README에 명시된 것이 적어 많은 셀이 대시로 표시됩니다.',
          },
          {
            q: '이 도구들 중에 제휴 링크가 있는 것이 있나요?',
            a: '아니요. 이 글을 작성한 시점에 PromptQuorum은 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기 있는 어떤 링크도 수수료를 받지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 업데이트되나요?',
            a: '연 2회, 그리고 나열된 도구의 리뷰가 갱신될 때마다 업데이트됩니다. 표가 그 리뷰들과 동일한 데이터로 생성되기 때문입니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README 또는 웹사이트. 해당 도구의 PromptQuorum 리뷰에 나열되어 있습니다(비교표에서 연결).',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행이 생성되는 바탕이 되는 레코드입니다.',
          '[AI 도구 라이선스 설명](/ko/power-local-llm/ai-tool-licenses-explained) — 위에서 언급한 라이선스 계열의 의미를 설명합니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          `[로컬 소프트웨어 디렉터리](/ko/directory) — ${TOTAL_APP_COUNT}개의 로컬 AI 앱을 둘러보고 카테고리별로 필터링하세요.`,
          '[로컬 음성·스피치 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트에 대한 같은 방식의 비교.',
          '[로컬 이미지·비디오·비전 도구 비교](/ko/power-local-llm/local-llm-images-video-compared) — 이미지 생성과 비전 모델에 대한 같은 방식의 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 추론 엔진·런타임·게이트웨이 비교(2026): 모델 실행과 서빙',
      description:
        `로컬 모델 실행 도구 ${RUN_SERVE_TOTAL}개 비교: 추론 엔진, 런타임과 매니저, 게이트웨이를 프로젝트 공식 문서 기준으로 정리했습니다.`,
      url: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-20',
      dateModified: '2026-11-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 추론 도구를 고르는 개발자와 셀프 호스팅 사용자' },
      about: [
        { '@type': 'Thing', name: '추론 엔진' },
        { '@type': 'Thing', name: '로컬 LLM 런타임' },
        { '@type': 'Thing', name: 'LLM 게이트웨이' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 추론 엔진·런타임·게이트웨이 비교(2026)',
          item: 'https://www.promptquorum.com/power-local-llm/local-llm-run-serve-compared',
        },
      ],
    },
  },
}

