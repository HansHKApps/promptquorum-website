import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs Jev: Local vs Cloud Decision Models (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev: Local vs Cloud Decision Models 2026',
    metaDescription: 'Julia-1 is a 144M open-weight decision model that runs on CPU. Jev is TypeSafe AI\'s closed cloud API for the same job. Here is how they actually differ.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers building routing, classification, or moderation pipelines',
    primaryTerm: 'decision model',
    targetKeywords: [
      'Julia-1 vs Jev',
      'local decision model',
      'Julia-1 144M model',
      'Jev AI model',
      'decision model vs LLM',
    ],
    leadAnswerBlock: '**Julia-1 is a 144.3M-parameter, Apache 2.0 decision model built on mmBERT-small that runs locally on CPU for classification and routing tasks.** Jev, the cloud decision model TypeSafe AI launched days earlier to viral press coverage, is a closed API with no published parameter count. Both score a fixed list of answer choices instead of generating text — the difference is where each one runs.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 is an open, 144M-parameter decision model that runs on CPU; Jev is a closed, cloud-only decision model from TypeSafe AI with no published architecture.' },
      { type: 'plain-terms', text: 'A "decision model" picks the best answer from a short list you give it instead of writing free text — Julia-1 does this on your own computer for free after download, Jev does it over the cloud for a per-token fee.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is Julia-1 a local alternative to the cloud-based Jev decision model?',
        answer: 'Julia-1 and Jev are both "decision models" built to score a fixed list of answer choices rather than generate free text, but they sit at opposite ends of the deployment spectrum. Julia-1 is a 144.3M-parameter, Apache 2.0 model from Supersonic Labs that runs on CPU with no API key or per-token cost. Jev is TypeSafe AI\'s closed cloud API, priced per input token, with no published parameter count or open weights.',
        bullets: [
          'Julia-1: 144.3M parameters, Apache 2.0, runs locally on CPU, ~550 MB on disk',
          'Jev: cloud-only API from TypeSafe AI, $0.042 per million input tokens, architecture undisclosed',
          'Both score fixed answer choices instead of generating text — the same emerging "decision model" category',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (Supersonic Labs) is a 144.3M-parameter, Apache 2.0 decision model built on mmBERT-small — it runs on CPU, needs no API key, and weighs ~550 MB on disk',
          'Jev (TypeSafe AI) is a closed, cloud-only decision model that launched to viral press coverage on September 15, 2026 — pricing is $0.042 per million input tokens, architecture undisclosed',
          'Both score a fixed list of 2–20 candidate answers instead of generating text — the same "decision model" category, opposite deployment models',
          'No public benchmark has tested Julia-1 and Jev head-to-head on the same task',
        ],
      },
      body1: {
        title: 'What Is Julia-1?',
        content: [
          '<strong>Julia-1 is a 144.3M-parameter decision model built by Supersonic Labs on top of mmBERT-small, a multilingual encoder from Johns Hopkins\' Center for Language and Speech Processing (CLSP).</strong> Given a context, a question, and 2 to 20 candidate answers, Julia-1 scores every option and returns the best one — it does not generate free text.',
          'The model keeps mmBERT-small\'s attention layout: every third layer attends globally across the full input, and the other layers attend only within a ±64-token local window. A 256,000-row vocabulary embedding accounts for 98M of the 144M total parameters, and a single request only reads the embedding rows for the tokens it actually uses — one reason the model runs on CPU without a GPU.',
          'Julia-1 ships under the Apache 2.0 license, weighs 550.5 MiB on disk (FP32 weights), and accepts up to 8,192 combined tokens across context, question, and candidate answers. It targets classification, routing decisions, ordered scoring, and yes/no judgments — the kind of fixed-choice decision an AI agent makes before calling a tool or escalating a ticket, not open-ended generation.',
          'Its base model, mmBERT-small, is separately notable: <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP trained it</a> on more than 1,800 languages (1,833 in the final training phase) under the MIT license. That figure describes mmBERT-small\'s pretraining coverage — Julia-1\'s own accuracy has only been measured across 52 locales in the MASSIVE benchmark, so treat the 1,800-language number as a base-model fact, not a claim about Julia-1\'s multilingual accuracy.',
        ],
      },
      body2: {
        title: 'How Accurate Is Julia-1?',
        content: [
          '<strong>Julia-1 scores 94/100 on AG News (4-label topic classification) and 86/100 on the DAIR Emotion benchmark (6 labels), both vendor-reported by Supersonic Labs.</strong> On the 52-locale MASSIVE intent benchmark it answers 110,573 of 154,648 items correctly (71.5%), and on a mixed set of typed decisions it scores 1,463 out of 2,000 (73.15%).',
          'The weaker result is a 100-example pilot on Banking77, a 72-label banking-intent benchmark: Julia-1 scored 64/100 against an 87% reference score. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Supersonic Labs\' own model card</a> is explicit that "100-example pilots are encouraging signals, not guarantees," and flags long, ambiguous label sets like Banking77\'s 72 categories as Julia-1\'s current weak point.',
          'None of these numbers have been independently reproduced outside Supersonic Labs\' own model card as of publication — treat them as vendor-reported until a third party verifies them.',
        ],
        columns: ['Benchmark', 'Labels', 'Score', 'Source'],
        rows: [
          { 'Benchmark': 'AG News', 'Labels': '4', 'Score': '94/100', 'Source': 'Vendor-reported' },
          { 'Benchmark': 'DAIR Emotion', 'Labels': '6', 'Score': '86/100', 'Source': 'Vendor-reported' },
          { 'Benchmark': 'MASSIVE (52 locales)', 'Labels': 'intent set', 'Score': '71.5% (110,573/154,648)', 'Source': 'Vendor-reported' },
          { 'Benchmark': 'Banking77 (pilot)', 'Labels': '72', 'Score': '64/100 vs. 87% reference', 'Source': 'Vendor pilot, 100 examples' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Should You Run Julia-1 Locally or Call Jev\'s Cloud API?',
        content: [
          '<strong>Jev, launched by TypeSafe AI on September 15, 2026, is the cloud counterpart to Julia-1\'s local approach — and it launched to far more attention.</strong> The launch video drew roughly 40 million views on X, TypeSafe AI raised a $40 million seed round led by DCVC around the announcement, and investors have since approached the company at valuations above $10 billion, per <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Bloomberg\'s coverage</a>.',
          'Jev is built by a former OpenAI researcher and is positioned as a "System 1" model: it returns typed, calibrated decisions — not text — for routing, scoring, triage, and moderation, the same task category as Julia-1. Unlike Julia-1, Jev is cloud-API-only through partners such as <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">DigitalOcean\'s Model Catalog</a>. TypeSafe AI has not published Jev\'s parameter count or model architecture; outside observers only suspect, unconfirmed, that it is transformer-based on an open-weight foundation.',
          'Pricing is per-token rather than free-after-download: Jev charges $0.042 per million input tokens with output tokens currently free, and TypeSafe AI reports 70–500 millisecond end-to-end latency under standard cloud API conditions. No public benchmark has tested Jev and Julia-1 head-to-head — the two have not been evaluated on the same task set.',
          'For CPU-only local setups outside the decision-model category, see <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only machines</a>.',
        ],
        decisionBlock: {
          title: 'Local (Julia-1) or Cloud (Jev)?',
          localIf: [
            'Your routing or classification data cannot leave your own infrastructure',
            'You want zero per-request cost after the one-time ~550 MB download',
            'Your categories overlap with what Julia-1 has actually been measured on — simple topic/emotion labels, not long ambiguous label sets',
          ],
          cloudIf: [
            'You want a managed API with no model to host or update yourself',
            'The flat $0.042-per-million-input-token price (free output tokens) fits your volume',
            'You do not need open weights or a disclosed architecture',
          ],
          quick: [
            'Both are decision models, not chatbots — neither generates free text',
            'Julia-1: open weights (Apache 2.0), runs on CPU, 144.3M parameters',
            'Jev: closed, cloud-only, parameter count undisclosed',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is a "decision model," and how is it different from an LLM?',
            a: 'A decision model takes a context, a question, and a fixed list of candidate answers, then scores or picks one — it never generates open-ended text. A general-purpose LLM can do this too, but it also has to generate, format, and parse a text response for every call, which costs more tokens and adds latency. Julia-1 and Jev are both decision models built specifically for this narrower job.',
          },
          {
            q: 'Can Julia-1 replace an LLM call for ticket routing?',
            a: 'For a fixed set of routing categories, yes in principle — that is the use case Supersonic Labs built it for. Its own benchmarks show 94% accuracy on 4-label topic classification (AG News) but only 64/100 on the 72-label Banking77 pilot, so accuracy depends heavily on how many categories you route between. Test it against your own category list before replacing a production LLM call.',
          },
          {
            q: 'Is Julia-1 free to use?',
            a: 'Yes — it ships under the Apache 2.0 license, so you can download and run it without a per-request fee. You still pay for your own compute, but Julia-1 needs no GPU and runs on CPU.',
          },
          {
            q: 'Does Jev run locally like Julia-1?',
            a: 'No. Jev is available only as a cloud API — through partners such as DigitalOcean\'s Model Catalog — and TypeSafe AI has not released its weights or architecture.',
          },
          {
            q: 'How much does Jev cost to use?',
            a: 'TypeSafe AI prices Jev at $0.042 per million input tokens, with output tokens currently free, as of its September 2026 launch.',
          },
          {
            q: 'What is mmBERT-small, and is it the same as Julia-1?',
            a: 'mmBERT-small is the 140M-parameter multilingual encoder from Johns Hopkins CLSP that Julia-1 is built on, trained on more than 1,800 languages under the MIT license. Julia-1 adds a decision-scoring head on top of it and is a separate, Apache 2.0-licensed release from Supersonic Labs, evaluated on 52 locales rather than the full 1,800+.',
          },
          {
            q: 'How accurate is Julia-1 on real-world tasks?',
            a: 'It varies by task: 94/100 on AG News, 86/100 on DAIR Emotion, 71.5% across 52 locales on MASSIVE, and 64/100 on a 100-example Banking77 pilot against an 87% reference score. All of these figures are vendor-reported by Supersonic Labs and have not been independently reproduced.',
          },
          {
            q: 'Has anyone directly compared Julia-1 and Jev on the same benchmark?',
            a: 'Not publicly, as of this writing. The two come from different vendors and target the same "decision model" category, but have not been tested head-to-head on a shared evaluation set.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs. Jev: Lokales oder Cloud-Decision-Modell (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs. Jev: Decision-Modell-Vergleich 2026',
    metaDescription: 'Julia-1 ist ein offenes 144.3M-Parameter-Decision-Modell, das auf der CPU läuft. Jev ist TypeSafe AIs geschlossene Cloud-API für dieselbe Aufgabe. Der Vergleich im Detail.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die Routing-, Klassifizierungs- oder Moderations-Pipelines bauen',
    primaryTerm: 'Decision-Modell',
    targetKeywords: [
      'Julia-1 vs Jev',
      'lokales Decision-Modell',
      'Julia-1 144M Modell',
      'Jev KI-Modell',
      'Decision-Modell vs LLM',
    ],
    leadAnswerBlock: '**Julia-1 ist ein 144.3M-Parameter-Decision-Modell unter Apache-2.0-Lizenz auf Basis von mmBERT-small, das lokal auf der CPU für Klassifizierung und Routing läuft.** Jev, das Cloud-Decision-Modell, das TypeSafe AI wenige Tage zuvor unter großer Medienaufmerksamkeit vorstellte, ist eine geschlossene API ohne veröffentlichte Parameterzahl. Beide bewerten eine feste Liste von Antwortmöglichkeiten, statt Text zu generieren — der Unterschied liegt darin, wo sie jeweils laufen.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 ist ein offenes 144M-Parameter-Decision-Modell, das auf der CPU läuft; Jev ist ein geschlossenes, reines Cloud-Decision-Modell von TypeSafe AI ohne veröffentlichte Architektur.' },
      { type: 'plain-terms', text: 'Ein "Decision-Modell" wählt die beste Antwort aus einer kurzen, von Ihnen vorgegebenen Liste, statt freien Text zu schreiben — Julia-1 macht das nach dem Download kostenlos auf dem eigenen Computer, Jev macht es in der Cloud gegen eine Gebühr pro Token.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Julia-1 eine lokale Alternative zum cloudbasierten Decision-Modell Jev?',
        answer: 'Julia-1 und Jev sind beide "Decision-Modelle", die eine feste Liste von Antwortmöglichkeiten bewerten, statt freien Text zu generieren, stehen aber an entgegengesetzten Enden des Deployment-Spektrums. Julia-1 ist ein 144.3M-Parameter-Modell von Supersonic Labs unter Apache-2.0-Lizenz, das auf der CPU läuft, ohne API-Schlüssel oder Kosten pro Token. Jev ist TypeSafe AIs geschlossene Cloud-API, abgerechnet pro Input-Token, ohne veröffentlichte Parameterzahl oder offene Gewichte.',
        bullets: [
          'Julia-1: 144.3M Parameter, Apache 2.0, läuft lokal auf der CPU, ~550 MB auf der Festplatte',
          'Jev: reine Cloud-API von TypeSafe AI, $0.042 pro Million Input-Token, Architektur nicht veröffentlicht',
          'Beide bewerten feste Antwortmöglichkeiten statt Text zu generieren — dieselbe aufkommende Kategorie "Decision-Modell"',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (Supersonic Labs) ist ein 144.3M-Parameter-Decision-Modell unter Apache-2.0-Lizenz auf Basis von mmBERT-small — es läuft auf der CPU, braucht keinen API-Schlüssel und belegt ~550 MB auf der Festplatte',
          'Jev (TypeSafe AI) ist ein geschlossenes, reines Cloud-Decision-Modell, das am September 15, 2026 mit großer Medienaufmerksamkeit startete — der Preis liegt bei $0.042 pro Million Input-Token, die Architektur ist nicht veröffentlicht',
          'Beide bewerten eine feste Liste von 2–20 Antwortmöglichkeiten, statt Text zu generieren — dieselbe Kategorie "Decision-Modell", aber gegensätzliche Deployment-Modelle',
          'Kein öffentlicher Benchmark hat Julia-1 und Jev bisher direkt auf derselben Aufgabe verglichen',
        ],
      },
      body1: {
        title: 'Was ist Julia-1?',
        content: [
          '<strong>Julia-1 ist ein 144.3M-Parameter-Decision-Modell von Supersonic Labs, aufgebaut auf mmBERT-small, einem mehrsprachigen Encoder des Center for Language and Speech Processing (CLSP) der Johns Hopkins University.</strong> Bei einem Kontext, einer Frage und 2 bis 20 Antwortmöglichkeiten bewertet Julia-1 jede Option und gibt die beste zurück — es generiert keinen freien Text.',
          'Das Modell übernimmt das Attention-Layout von mmBERT-small: Jede dritte Schicht achtet global auf die gesamte Eingabe, die übrigen Schichten nur innerhalb eines lokalen ±64-Token-Fensters. Ein 256,000-Zeilen-Vokabular-Embedding macht 98M der 144M Gesamtparameter aus, und eine einzelne Anfrage liest nur die Embedding-Zeilen der tatsächlich verwendeten Token — ein Grund dafür, dass das Modell ohne GPU auf der CPU läuft.',
          'Julia-1 wird unter der Apache-2.0-Lizenz veröffentlicht, belegt 550.5 MiB auf der Festplatte (FP32-Gewichte) und akzeptiert bis zu 8,192 kombinierte Token über Kontext, Frage und Antwortmöglichkeiten hinweg. Es zielt auf Klassifizierung, Routing-Entscheidungen, geordnete Bewertungen und Ja/Nein-Urteile — die Art fester Entscheidung, die ein KI-Agent trifft, bevor er ein Tool aufruft oder ein Ticket eskaliert, nicht auf offene Textgenerierung.',
          'Das zugrunde liegende Modell mmBERT-small ist eigenständig bemerkenswert: <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP trainierte es</a> auf mehr als 1,800 Sprachen (1,833 in der finalen Trainingsphase) unter der MIT-Lizenz. Diese Zahl beschreibt die Pretraining-Abdeckung von mmBERT-small — Julia-1s eigene Genauigkeit wurde bisher nur in 52 Sprachregionen im MASSIVE-Benchmark gemessen. Behandeln Sie die Zahl von 1,800 Sprachen daher als Fakt zum Basismodell, nicht als Aussage über Julia-1s eigene Mehrsprachigkeit.',
        ],
      },
      body2: {
        title: 'Wie genau ist Julia-1?',
        content: [
          '<strong>Julia-1 erreicht 94/100 bei AG News (4-Label-Themenklassifizierung) und 86/100 beim DAIR-Emotion-Benchmark (6 Labels), beides von Supersonic Labs selbst berichtet.</strong> Im 52-Sprachregionen-Benchmark MASSIVE beantwortet es 110,573 von 154,648 Elementen korrekt (71.5%), und bei einem gemischten Satz typisierter Entscheidungen erreicht es 1,463 von 2,000 Punkten (73.15%).',
          'Das schwächere Ergebnis ist ein 100-Beispiel-Pilotversuch bei Banking77, einem 72-Label-Banking-Intent-Benchmark: Julia-1 erzielte 64/100 gegenüber einem 87%-Referenzwert. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Supersonic Labs\' eigene Modellkarte</a> stellt ausdrücklich klar, dass "100-Beispiel-Pilotversuche ermutigende Signale sind, keine Garantien", und weist lange, mehrdeutige Label-Sätze wie Banking77s 72 Kategorien als aktuellen Schwachpunkt von Julia-1 aus.',
          'Keine dieser Zahlen wurde bisher außerhalb von Supersonic Labs\' eigener Modellkarte unabhängig reproduziert — behandeln Sie sie bis zur Bestätigung durch Dritte als herstellerseitig berichtet.',
        ],
        columns: ['Benchmark', 'Labels', 'Ergebnis', 'Quelle'],
        rows: [
          { 'Benchmark': 'AG News', 'Labels': '4', 'Ergebnis': '94/100', 'Quelle': 'Herstellerangabe' },
          { 'Benchmark': 'DAIR Emotion', 'Labels': '6', 'Ergebnis': '86/100', 'Quelle': 'Herstellerangabe' },
          { 'Benchmark': 'MASSIVE (52 Sprachregionen)', 'Labels': 'Intent-Set', 'Ergebnis': '71.5% (110,573/154,648)', 'Quelle': 'Herstellerangabe' },
          { 'Benchmark': 'Banking77 (Pilot)', 'Labels': '72', 'Ergebnis': '64/100 vs. 87% Referenz', 'Quelle': 'Hersteller-Pilotversuch, 100 Beispiele' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Julia-1 lokal betreiben oder Jevs Cloud-API nutzen?',
        content: [
          '<strong>Jev, am September 15, 2026 von TypeSafe AI vorgestellt, ist das Cloud-Pendant zu Julia-1s lokalem Ansatz — und erhielt weitaus mehr Aufmerksamkeit.</strong> Das Launch-Video erreichte auf X rund 40 million Aufrufe, TypeSafe AI sammelte im Umfeld der Ankündigung eine von DCVC angeführte $40 million Seed-Runde ein, und Investoren haben das Unternehmen seither zu Bewertungen von über $10 billion angesprochen, laut <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Bloombergs Berichterstattung</a>.',
          'Jev wurde von einem ehemaligen OpenAI-Forscher entwickelt und wird als "System-1"-Modell positioniert: Es liefert typisierte, kalibrierte Entscheidungen — keinen Text — für Routing, Bewertung, Triage und Moderation, dieselbe Aufgabenkategorie wie Julia-1. Anders als Julia-1 ist Jev ausschließlich über eine Cloud-API verfügbar, etwa über Partner wie <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">DigitalOceans Model Catalog</a>. TypeSafe AI hat weder die Parameterzahl noch die Modellarchitektur von Jev veröffentlicht; außenstehende Beobachter vermuten lediglich, unbestätigt, dass es sich um ein Transformer-Modell auf Basis eines Open-Weight-Fundaments handelt.',
          'Die Abrechnung erfolgt pro Token statt einmalig nach dem Download: Jev berechnet $0.042 pro Million Input-Token, Output-Token sind derzeit kostenlos, und TypeSafe AI gibt eine End-to-End-Latenz von 70–500 Millisekunden unter Standard-Cloud-API-Bedingungen an. Kein öffentlicher Benchmark hat Jev und Julia-1 bisher direkt gegeneinander getestet — beide wurden nicht auf demselben Aufgabenset evaluiert.',
          'Für lokale CPU-only-Setups außerhalb der Decision-Modell-Kategorie siehe <a href="/de/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">die besten Ollama-Modelle für CPU-only-Rechner</a>.',
        ],
        decisionBlock: {
          title: 'Lokal (Julia-1) oder Cloud (Jev)?',
          localIf: [
            'Ihre Routing- oder Klassifizierungsdaten dürfen Ihre eigene Infrastruktur nicht verlassen',
            'Sie wollen nach dem einmaligen ~550-MB-Download keine Kosten pro Anfrage',
            'Ihre Kategorien entsprechen dem, was für Julia-1 tatsächlich gemessen wurde — einfache Themen-/Emotionslabels, keine langen, mehrdeutigen Label-Sätze',
          ],
          cloudIf: [
            'Sie wollen eine verwaltete API, ohne selbst ein Modell hosten oder aktualisieren zu müssen',
            'Der Festpreis von $0.042 pro Million Input-Token (Output-Token kostenlos) passt zu Ihrem Volumen',
            'Sie benötigen weder offene Gewichte noch eine veröffentlichte Architektur',
          ],
          quick: [
            'Beide sind Decision-Modelle, keine Chatbots — keines generiert freien Text',
            'Julia-1: offene Gewichte (Apache 2.0), läuft auf der CPU, 144.3M Parameter',
            'Jev: geschlossen, nur Cloud, Parameterzahl nicht veröffentlicht',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist ein "Decision-Modell", und wie unterscheidet es sich von einem LLM?',
            a: 'Ein Decision-Modell erhält einen Kontext, eine Frage und eine feste Liste von Antwortmöglichkeiten und bewertet oder wählt dann eine aus — es generiert nie offenen Text. Ein universelles LLM kann das ebenfalls, muss aber bei jedem Aufruf zusätzlich eine Textantwort generieren, formatieren und parsen, was mehr Token kostet und die Latenz erhöht. Julia-1 und Jev sind beide Decision-Modelle, die gezielt für diese engere Aufgabe gebaut wurden.',
          },
          {
            q: 'Kann Julia-1 einen LLM-Aufruf für Ticket-Routing ersetzen?',
            a: 'Für eine feste Menge von Routing-Kategorien: im Prinzip ja — genau dafür hat Supersonic Labs das Modell gebaut. Die eigenen Benchmarks zeigen 94% Genauigkeit bei der 4-Label-Themenklassifizierung (AG News), aber nur 64/100 im 72-Label-Banking77-Pilotversuch. Die Genauigkeit hängt also stark davon ab, zwischen wie vielen Kategorien Sie routen. Testen Sie es gegen Ihre eigene Kategorienliste, bevor Sie einen produktiven LLM-Aufruf ersetzen.',
          },
          {
            q: 'Ist Julia-1 kostenlos nutzbar?',
            a: 'Ja — es wird unter der Apache-2.0-Lizenz veröffentlicht, sodass Sie es ohne Kosten pro Anfrage herunterladen und ausführen können. Sie zahlen weiterhin für Ihre eigene Rechenleistung, aber Julia-1 benötigt keine GPU und läuft auf der CPU.',
          },
          {
            q: 'Läuft Jev wie Julia-1 lokal?',
            a: 'Nein. Jev ist ausschließlich als Cloud-API verfügbar — etwa über Partner wie DigitalOceans Model Catalog — und TypeSafe AI hat weder Gewichte noch Architektur veröffentlicht.',
          },
          {
            q: 'Wie teuer ist die Nutzung von Jev?',
            a: 'TypeSafe AI berechnet für Jev $0.042 pro Million Input-Token, Output-Token sind seit dem Start im September 2026 derzeit kostenlos.',
          },
          {
            q: 'Was ist mmBERT-small, und ist es dasselbe wie Julia-1?',
            a: 'mmBERT-small ist der mehrsprachige Encoder von Johns Hopkins CLSP, auf dem Julia-1 aufbaut, trainiert auf mehr als 1,800 Sprachen unter der MIT-Lizenz. Julia-1 fügt darauf einen Decision-Scoring-Kopf hinzu und ist ein eigenständiges, unter Apache 2.0 lizenziertes Release von Supersonic Labs, das auf 52 Sprachregionen statt der vollen 1,800+ evaluiert wurde.',
          },
          {
            q: 'Wie genau ist Julia-1 bei realen Aufgaben?',
            a: 'Das variiert je nach Aufgabe: 94/100 bei AG News, 86/100 bei DAIR Emotion, 71.5% über 52 Sprachregionen bei MASSIVE und 64/100 bei einem 100-Beispiel-Banking77-Pilotversuch gegenüber einem 87%-Referenzwert. Alle diese Zahlen sind Herstellerangaben von Supersonic Labs und wurden nicht unabhängig reproduziert.',
          },
          {
            q: 'Hat schon jemand Julia-1 und Jev direkt auf demselben Benchmark verglichen?',
            a: 'Öffentlich nicht, Stand jetzt. Beide stammen von unterschiedlichen Anbietern und zielen auf dieselbe Kategorie "Decision-Modell", wurden aber nicht direkt auf einem gemeinsamen Evaluationsset getestet.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs Jev: modelos de decisión local o en la nube (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev: comparación de modelos de decisión 2026',
    metaDescription: 'Julia-1 es un modelo de decisión de 144.3M de parámetros y código abierto que funciona en CPU. Jev es la API cloud cerrada de TypeSafe AI para la misma tarea. Aquí las diferencias.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que construyen pipelines de enrutamiento, clasificación o moderación',
    primaryTerm: 'modelo de decisión',
    targetKeywords: [
      'Julia-1 vs Jev',
      'modelo de decisión local',
      'modelo Julia-1 144M',
      'modelo de IA Jev',
      'modelo de decisión vs LLM',
    ],
    leadAnswerBlock: '**Julia-1 es un modelo de decisión de 144.3M de parámetros, con licencia Apache 2.0, construido sobre mmBERT-small, que funciona localmente en CPU para clasificación y enrutamiento.** Jev, el modelo de decisión en la nube que TypeSafe AI lanzó días antes con gran cobertura mediática, es una API cerrada sin recuento de parámetros publicado. Ambos puntúan una lista fija de respuestas posibles en lugar de generar texto — la diferencia está en dónde se ejecuta cada uno.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 es un modelo de decisión abierto de 144M de parámetros que funciona en CPU; Jev es un modelo de decisión cerrado, solo en la nube, de TypeSafe AI, sin arquitectura publicada.' },
      { type: 'plain-terms', text: 'Un "modelo de decisión" elige la mejor respuesta de una lista corta que tú le das, en lugar de escribir texto libre — Julia-1 hace esto en tu propio ordenador de forma gratuita tras la descarga, Jev lo hace en la nube por una tarifa por token.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es Julia-1 una alternativa local al modelo de decisión en la nube Jev?',
        answer: 'Julia-1 y Jev son ambos "modelos de decisión" diseñados para puntuar una lista fija de respuestas en lugar de generar texto libre, pero están en extremos opuestos del espectro de despliegue. Julia-1 es un modelo de 144.3M de parámetros, con licencia Apache 2.0, de Supersonic Labs, que funciona en CPU sin clave de API ni coste por token. Jev es la API cloud cerrada de TypeSafe AI, con precio por token de entrada, sin recuento de parámetros publicado ni pesos abiertos.',
        bullets: [
          'Julia-1: 144.3M de parámetros, Apache 2.0, funciona localmente en CPU, ~550 MB en disco',
          'Jev: API solo en la nube de TypeSafe AI, $0.042 por millón de tokens de entrada, arquitectura no revelada',
          'Ambos puntúan respuestas fijas en lugar de generar texto — la misma categoría emergente de "modelo de decisión"',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (Supersonic Labs) es un modelo de decisión de 144.3M de parámetros, con licencia Apache 2.0, construido sobre mmBERT-small — funciona en CPU, no necesita clave de API y pesa ~550 MB en disco',
          'Jev (TypeSafe AI) es un modelo de decisión cerrado, solo en la nube, lanzado con gran cobertura mediática el September 15, 2026 — el precio es de $0.042 por millón de tokens de entrada, arquitectura no revelada',
          'Ambos puntúan una lista fija de 2 a 20 respuestas candidatas en lugar de generar texto — la misma categoría de "modelo de decisión", con modelos de despliegue opuestos',
          'Ningún benchmark público ha comparado a Julia-1 y Jev cara a cara en la misma tarea',
        ],
      },
      body1: {
        title: '¿Qué es Julia-1?',
        content: [
          '<strong>Julia-1 es un modelo de decisión de 144.3M de parámetros construido por Supersonic Labs sobre mmBERT-small, un encoder multilingüe del Center for Language and Speech Processing (CLSP) de Johns Hopkins.</strong> Dado un contexto, una pregunta y entre 2 y 20 respuestas candidatas, Julia-1 puntúa cada opción y devuelve la mejor — no genera texto libre.',
          'El modelo mantiene el diseño de atención de mmBERT-small: cada tercera capa atiende globalmente a toda la entrada, y el resto solo dentro de una ventana local de ±64 tokens. Un embedding de vocabulario de 256,000 filas representa 98M de los 144M de parámetros totales, y cada solicitud solo lee las filas del embedding correspondientes a los tokens que realmente usa — una de las razones por las que el modelo funciona en CPU sin GPU.',
          'Julia-1 se distribuye bajo licencia Apache 2.0, pesa 550.5 MiB en disco (pesos FP32) y acepta hasta 8,192 tokens combinados entre contexto, pregunta y respuestas candidatas. Está orientado a clasificación, decisiones de enrutamiento, puntuación ordenada y juicios de sí/no — el tipo de decisión de opciones fijas que toma un agente de IA antes de llamar a una herramienta o escalar un ticket, no a la generación abierta.',
          'Su modelo base, mmBERT-small, es notable por sí mismo: <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP lo entrenó</a> con más de 1,800 idiomas (1,833 en la fase final de entrenamiento) bajo licencia MIT. Esa cifra describe la cobertura del preentrenamiento de mmBERT-small — la propia precisión de Julia-1 solo se ha medido en 52 configuraciones regionales dentro del benchmark MASSIVE, así que trata la cifra de 1,800 idiomas como un dato del modelo base, no como una afirmación sobre la precisión multilingüe de Julia-1.',
        ],
      },
      body2: {
        title: '¿Qué tan precisa es Julia-1?',
        content: [
          '<strong>Julia-1 obtiene 94/100 en AG News (clasificación de temas con 4 etiquetas) y 86/100 en el benchmark DAIR Emotion (6 etiquetas), ambos reportados por Supersonic Labs.</strong> En el benchmark de intención MASSIVE con 52 configuraciones regionales, responde correctamente 110,573 de 154,648 elementos (71.5%), y en un conjunto mixto de decisiones tipadas obtiene 1,463 de 2,000 (73.15%).',
          'El resultado más débil es una prueba piloto de 100 ejemplos en Banking77, un benchmark de intención bancaria con 72 etiquetas: Julia-1 obtuvo 64/100 frente a una puntuación de referencia del 87%. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">La propia ficha de modelo de Supersonic Labs</a> deja claro que "las pruebas piloto de 100 ejemplos son señales alentadoras, no garantías", y señala los conjuntos de etiquetas largos y ambiguos como el de Banking77 (72 categorías) como el punto débil actual de Julia-1.',
          'Ninguna de estas cifras se ha reproducido de forma independiente fuera de la propia ficha de modelo de Supersonic Labs hasta la fecha de publicación — trátalas como reportadas por el fabricante hasta que un tercero las verifique.',
        ],
        columns: ['Benchmark', 'Etiquetas', 'Puntuación', 'Fuente'],
        rows: [
          { 'Benchmark': 'AG News', 'Etiquetas': '4', 'Puntuación': '94/100', 'Fuente': 'Reportado por el fabricante' },
          { 'Benchmark': 'DAIR Emotion', 'Etiquetas': '6', 'Puntuación': '86/100', 'Fuente': 'Reportado por el fabricante' },
          { 'Benchmark': 'MASSIVE (52 configuraciones)', 'Etiquetas': 'conjunto de intención', 'Puntuación': '71.5% (110,573/154,648)', 'Fuente': 'Reportado por el fabricante' },
          { 'Benchmark': 'Banking77 (piloto)', 'Etiquetas': '72', 'Puntuación': '64/100 vs. 87% referencia', 'Fuente': 'Piloto del fabricante, 100 ejemplos' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: '¿Ejecutar Julia-1 localmente o usar la API cloud de Jev?',
        content: [
          '<strong>Jev, lanzado por TypeSafe AI el September 15, 2026, es la contrapartida en la nube del enfoque local de Julia-1 — y recibió mucha más atención.</strong> El video de lanzamiento acumuló aproximadamente 40 million de visualizaciones en X, TypeSafe AI recaudó una ronda semilla de $40 million liderada por DCVC en torno al anuncio, y desde entonces inversores se han acercado a la empresa con valoraciones superiores a $10 billion, según <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">la cobertura de Bloomberg</a>.',
          'Jev fue creado por un antiguo investigador de OpenAI y se posiciona como un modelo "System 1": devuelve decisiones tipadas y calibradas — no texto — para enrutamiento, puntuación, triaje y moderación, la misma categoría de tarea que Julia-1. A diferencia de Julia-1, Jev está disponible únicamente como API cloud a través de socios como <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">el Model Catalog de DigitalOcean</a>. TypeSafe AI no ha publicado el recuento de parámetros ni la arquitectura de Jev; observadores externos solo sospechan, sin confirmación, que se basa en un transformador construido sobre una base de pesos abiertos.',
          'El precio es por token, no un pago único tras la descarga: Jev cobra $0.042 por millón de tokens de entrada, con los tokens de salida gratuitos por ahora, y TypeSafe AI reporta una latencia de extremo a extremo de 70–500 milisegundos en condiciones estándar de API cloud. Ningún benchmark público ha enfrentado a Jev y Julia-1 cara a cara — ambos no se han evaluado en el mismo conjunto de tareas.',
          'Para configuraciones locales solo con CPU fuera de la categoría de modelos de decisión, consulta los <a href="/es/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">mejores modelos de Ollama para máquinas solo con CPU</a>.',
        ],
        decisionBlock: {
          title: '¿Local (Julia-1) o en la nube (Jev)?',
          localIf: [
            'Tus datos de enrutamiento o clasificación no pueden salir de tu propia infraestructura',
            'Quieres cero coste por solicitud tras la descarga única de ~550 MB',
            'Tus categorías coinciden con lo que realmente se ha medido en Julia-1 — etiquetas simples de tema/emoción, no conjuntos de etiquetas largos y ambiguos',
          ],
          cloudIf: [
            'Quieres una API gestionada sin tener que alojar ni actualizar un modelo tú mismo',
            'El precio fijo de $0.042 por millón de tokens de entrada (tokens de salida gratuitos) se ajusta a tu volumen',
            'No necesitas pesos abiertos ni una arquitectura publicada',
          ],
          quick: [
            'Ambos son modelos de decisión, no chatbots — ninguno genera texto libre',
            'Julia-1: pesos abiertos (Apache 2.0), funciona en CPU, 144.3M de parámetros',
            'Jev: cerrado, solo en la nube, recuento de parámetros no revelado',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es un "modelo de decisión" y en qué se diferencia de un LLM?',
            a: 'Un modelo de decisión toma un contexto, una pregunta y una lista fija de respuestas candidatas, y luego puntúa o elige una — nunca genera texto abierto. Un LLM de propósito general también puede hacerlo, pero además tiene que generar, formatear y analizar una respuesta de texto en cada llamada, lo que cuesta más tokens y añade latencia. Julia-1 y Jev son ambos modelos de decisión construidos específicamente para esta tarea más estrecha.',
          },
          {
            q: '¿Puede Julia-1 sustituir una llamada a un LLM para enrutar tickets?',
            a: 'Para un conjunto fijo de categorías de enrutamiento, en principio sí — es el caso de uso para el que Supersonic Labs lo construyó. Sus propios benchmarks muestran un 94% de precisión en clasificación de temas con 4 etiquetas (AG News), pero solo 64/100 en el piloto de Banking77 con 72 etiquetas, así que la precisión depende en gran medida de cuántas categorías uses para enrutar. Pruébalo con tu propia lista de categorías antes de sustituir una llamada a un LLM en producción.',
          },
          {
            q: '¿Es gratis usar Julia-1?',
            a: 'Sí — se distribuye bajo licencia Apache 2.0, así que puedes descargarlo y ejecutarlo sin coste por solicitud. Sigues pagando tu propio cómputo, pero Julia-1 no necesita GPU y funciona en CPU.',
          },
          {
            q: '¿Jev se ejecuta localmente como Julia-1?',
            a: 'No. Jev solo está disponible como API cloud — a través de socios como el Model Catalog de DigitalOcean — y TypeSafe AI no ha publicado sus pesos ni su arquitectura.',
          },
          {
            q: '¿Cuánto cuesta usar Jev?',
            a: 'TypeSafe AI fija el precio de Jev en $0.042 por millón de tokens de entrada, con los tokens de salida gratuitos por ahora, según su lanzamiento de September 2026.',
          },
          {
            q: '¿Qué es mmBERT-small, y es lo mismo que Julia-1?',
            a: 'mmBERT-small es el encoder multilingüe de 140M de parámetros de Johns Hopkins CLSP sobre el que se construye Julia-1, entrenado con más de 1,800 idiomas bajo licencia MIT. Julia-1 añade una cabeza de puntuación de decisión sobre él y es un lanzamiento independiente, con licencia Apache 2.0, de Supersonic Labs, evaluado en 52 configuraciones regionales en lugar de las más de 1,800 completas.',
          },
          {
            q: '¿Qué tan precisa es Julia-1 en tareas reales?',
            a: 'Varía según la tarea: 94/100 en AG News, 86/100 en DAIR Emotion, 71.5% en 52 configuraciones regionales en MASSIVE, y 64/100 en un piloto de 100 ejemplos de Banking77 frente a una puntuación de referencia del 87%. Todas estas cifras son reportadas por el fabricante, Supersonic Labs, y no se han reproducido de forma independiente.',
          },
          {
            q: '¿Alguien ha comparado directamente a Julia-1 y Jev en el mismo benchmark?',
            a: 'No públicamente, hasta la fecha. Ambos provienen de fabricantes diferentes y apuntan a la misma categoría de "modelo de decisión", pero no se han probado cara a cara en un conjunto de evaluación compartido.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Julia-1 et Jev : modèle de décision local ou cloud (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev : comparatif des modèles de décision 2026',
    metaDescription: 'Julia-1 est un modèle de décision open source de 144.3M de paramètres qui tourne sur CPU. Jev est l\'API cloud fermée de TypeSafe AI pour la même tâche. Voici les différences.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui construisent des pipelines de routage, classification ou modération',
    primaryTerm: 'modèle de décision',
    targetKeywords: [
      'Julia-1 vs Jev',
      'modèle de décision local',
      'modèle Julia-1 144M',
      'modèle IA Jev',
      'modèle de décision vs LLM',
    ],
    leadAnswerBlock: '**Julia-1 est un modèle de décision de 144.3M de paramètres, sous licence Apache 2.0, construit sur mmBERT-small, qui tourne localement sur CPU pour la classification et le routage.** Jev, le modèle de décision cloud lancé par TypeSafe AI quelques jours plus tôt avec une large couverture médiatique, est une API fermée sans nombre de paramètres publié. Les deux évaluent une liste fixe de réponses possibles au lieu de générer du texte — la différence tient à l\'endroit où chacun s\'exécute.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 est un modèle de décision ouvert de 144M de paramètres qui tourne sur CPU ; Jev est un modèle de décision fermé, cloud uniquement, de TypeSafe AI, sans architecture publiée.' },
      { type: 'plain-terms', text: 'Un « modèle de décision » choisit la meilleure réponse dans une liste courte que vous lui fournissez, au lieu d\'écrire du texte libre — Julia-1 fait cela gratuitement sur votre propre ordinateur après téléchargement, Jev le fait dans le cloud contre des frais par jeton.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Julia-1 est-il une alternative locale au modèle de décision cloud Jev ?',
        answer: 'Julia-1 et Jev sont tous deux des « modèles de décision » conçus pour évaluer une liste fixe de réponses possibles plutôt que de générer du texte libre, mais ils se situent aux extrémités opposées du spectre de déploiement. Julia-1 est un modèle de 144.3M de paramètres, sous licence Apache 2.0, de Supersonic Labs, qui tourne sur CPU sans clé API ni coût par jeton. Jev est l\'API cloud fermée de TypeSafe AI, facturée par jeton d\'entrée, sans nombre de paramètres publié ni poids ouverts.',
        bullets: [
          'Julia-1 : 144.3M de paramètres, Apache 2.0, tourne localement sur CPU, ~550 MB sur disque',
          'Jev : API cloud uniquement de TypeSafe AI, $0.042 par million de jetons d\'entrée, architecture non divulguée',
          'Les deux évaluent des réponses fixes au lieu de générer du texte — la même catégorie émergente de « modèle de décision »',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (Supersonic Labs) est un modèle de décision de 144.3M de paramètres, sous licence Apache 2.0, construit sur mmBERT-small — il tourne sur CPU, ne nécessite aucune clé API et pèse ~550 MB sur disque',
          'Jev (TypeSafe AI) est un modèle de décision fermé, cloud uniquement, lancé avec une large couverture médiatique le September 15, 2026 — le prix est de $0.042 par million de jetons d\'entrée, architecture non divulguée',
          'Les deux évaluent une liste fixe de 2 à 20 réponses candidates au lieu de générer du texte — la même catégorie de « modèle de décision », mais des modèles de déploiement opposés',
          'Aucun benchmark public n\'a comparé Julia-1 et Jev en tête-à-tête sur la même tâche',
        ],
      },
      body1: {
        title: 'Qu\'est-ce que Julia-1 ?',
        content: [
          '<strong>Julia-1 est un modèle de décision de 144.3M de paramètres construit par Supersonic Labs sur mmBERT-small, un encodeur multilingue du Center for Language and Speech Processing (CLSP) de Johns Hopkins.</strong> Face à un contexte, une question et 2 à 20 réponses candidates, Julia-1 évalue chaque option et renvoie la meilleure — il ne génère pas de texte libre.',
          'Le modèle conserve la structure d\'attention de mmBERT-small : une couche sur trois porte son attention globalement sur toute l\'entrée, les autres couches se limitant à une fenêtre locale de ±64 jetons. Un embedding de vocabulaire de 256,000 lignes représente 98M des 144M de paramètres totaux, et une seule requête ne lit que les lignes d\'embedding correspondant aux jetons réellement utilisés — une des raisons pour lesquelles le modèle tourne sur CPU sans GPU.',
          'Julia-1 est distribué sous licence Apache 2.0, pèse 550.5 MiB sur disque (poids FP32) et accepte jusqu\'à 8,192 jetons combinés entre contexte, question et réponses candidates. Il vise la classification, les décisions de routage, la notation ordonnée et les jugements oui/non — le type de décision à choix fixe qu\'un agent IA prend avant d\'appeler un outil ou d\'escalader un ticket, et non la génération ouverte.',
          'Son modèle de base, mmBERT-small, est notable en soi : <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP l\'a entraîné</a> sur plus de 1,800 langues (1,833 lors de la phase finale d\'entraînement) sous licence MIT. Ce chiffre décrit la couverture du pré-entraînement de mmBERT-small — la précision propre de Julia-1 n\'a été mesurée que sur 52 langues dans le benchmark MASSIVE, il faut donc traiter le chiffre de 1,800 langues comme un fait relatif au modèle de base, pas comme une affirmation sur la précision multilingue de Julia-1.',
        ],
      },
      body2: {
        title: 'Quelle est la précision de Julia-1 ?',
        content: [
          '<strong>Julia-1 obtient 94/100 sur AG News (classification de sujets à 4 labels) et 86/100 sur le benchmark DAIR Emotion (6 labels), tous deux rapportés par Supersonic Labs.</strong> Sur le benchmark d\'intention MASSIVE à 52 langues, il répond correctement à 110,573 des 154,648 éléments (71.5%), et sur un ensemble mixte de décisions typées, il obtient 1,463 sur 2,000 (73.15%).',
          'Le résultat le plus faible est un pilote de 100 exemples sur Banking77, un benchmark d\'intention bancaire à 72 labels : Julia-1 a obtenu 64/100 contre un score de référence de 87%. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">La fiche de modèle de Supersonic Labs</a> précise explicitement que « les pilotes de 100 exemples sont des signaux encourageants, pas des garanties », et identifie les ensembles de labels longs et ambigus comme les 72 catégories de Banking77 comme le point faible actuel de Julia-1.',
          'Aucun de ces chiffres n\'a été reproduit de manière indépendante en dehors de la fiche de modèle de Supersonic Labs à la date de publication — considérez-les comme rapportés par l\'éditeur jusqu\'à vérification par un tiers.',
        ],
        columns: ['Benchmark', 'Labels', 'Score', 'Source'],
        rows: [
          { 'Benchmark': 'AG News', 'Labels': '4', 'Score': '94/100', 'Source': 'Rapporté par l\'éditeur' },
          { 'Benchmark': 'DAIR Emotion', 'Labels': '6', 'Score': '86/100', 'Source': 'Rapporté par l\'éditeur' },
          { 'Benchmark': 'MASSIVE (52 langues)', 'Labels': 'ensemble d\'intentions', 'Score': '71.5% (110,573/154,648)', 'Source': 'Rapporté par l\'éditeur' },
          { 'Benchmark': 'Banking77 (pilote)', 'Labels': '72', 'Score': '64/100 vs 87% référence', 'Source': 'Pilote éditeur, 100 exemples' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Faut-il exécuter Julia-1 localement ou utiliser l\'API cloud de Jev ?',
        content: [
          '<strong>Jev, lancé par TypeSafe AI le September 15, 2026, est le pendant cloud de l\'approche locale de Julia-1 — et a suscité bien plus d\'attention.</strong> La vidéo de lancement a réuni environ 40 million de vues sur X, TypeSafe AI a levé un tour de table d\'amorçage de $40 million mené par DCVC autour de l\'annonce, et des investisseurs ont depuis approché l\'entreprise avec des valorisations supérieures à $10 billion, selon <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">la couverture de Bloomberg</a>.',
          'Jev est conçu par un ancien chercheur d\'OpenAI et se positionne comme un modèle « System 1 » : il renvoie des décisions typées et calibrées — pas du texte — pour le routage, la notation, le triage et la modération, la même catégorie de tâche que Julia-1. Contrairement à Julia-1, Jev n\'est disponible qu\'en API cloud, via des partenaires tels que <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">le Model Catalog de DigitalOcean</a>. TypeSafe AI n\'a publié ni le nombre de paramètres ni l\'architecture de Jev ; des observateurs extérieurs supposent seulement, sans confirmation, qu\'il s\'agit d\'un transformeur bâti sur une base à poids ouverts.',
          'La tarification se fait par jeton plutôt que gratuitement après téléchargement : Jev facture $0.042 par million de jetons d\'entrée, les jetons de sortie étant actuellement gratuits, et TypeSafe AI annonce une latence de bout en bout de 70–500 millisecondes dans des conditions d\'API cloud standard. Aucun benchmark public n\'a testé Jev et Julia-1 en tête-à-tête — les deux n\'ont pas été évalués sur le même ensemble de tâches.',
          'Pour des configurations locales CPU uniquement en dehors de la catégorie des modèles de décision, voir les <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">meilleurs modèles Ollama pour machines CPU uniquement</a>.',
        ],
        decisionBlock: {
          title: 'Local (Julia-1) ou cloud (Jev) ?',
          localIf: [
            'Vos données de routage ou de classification ne peuvent pas quitter votre propre infrastructure',
            'Vous voulez un coût par requête nul après le téléchargement unique de ~550 MB',
            'Vos catégories recoupent ce qui a réellement été mesuré sur Julia-1 — des labels simples de sujet/émotion, pas de longs ensembles de labels ambigus',
          ],
          cloudIf: [
            'Vous voulez une API gérée sans avoir à héberger ou mettre à jour un modèle vous-même',
            'Le tarif fixe de $0.042 par million de jetons d\'entrée (jetons de sortie gratuits) correspond à votre volume',
            'Vous n\'avez pas besoin de poids ouverts ni d\'une architecture divulguée',
          ],
          quick: [
            'Les deux sont des modèles de décision, pas des chatbots — aucun ne génère de texte libre',
            'Julia-1 : poids ouverts (Apache 2.0), tourne sur CPU, 144.3M de paramètres',
            'Jev : fermé, cloud uniquement, nombre de paramètres non divulgué',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'un « modèle de décision », et en quoi diffère-t-il d\'un LLM ?',
            a: 'Un modèle de décision prend un contexte, une question et une liste fixe de réponses candidates, puis les évalue ou en choisit une — il ne génère jamais de texte ouvert. Un LLM généraliste peut aussi le faire, mais il doit en plus générer, formater et analyser une réponse textuelle à chaque appel, ce qui coûte plus de jetons et ajoute de la latence. Julia-1 et Jev sont tous deux des modèles de décision construits spécifiquement pour cette tâche plus étroite.',
          },
          {
            q: 'Julia-1 peut-il remplacer un appel LLM pour le routage de tickets ?',
            a: 'Pour un ensemble fixe de catégories de routage, oui en principe — c\'est le cas d\'usage pour lequel Supersonic Labs l\'a conçu. Ses propres benchmarks montrent 94% de précision sur la classification de sujets à 4 labels (AG News), mais seulement 64/100 sur le pilote Banking77 à 72 labels, donc la précision dépend fortement du nombre de catégories entre lesquelles vous routez. Testez-le sur votre propre liste de catégories avant de remplacer un appel LLM en production.',
          },
          {
            q: 'Julia-1 est-il gratuit ?',
            a: 'Oui — il est distribué sous licence Apache 2.0, vous pouvez donc le télécharger et l\'exécuter sans frais par requête. Vous payez toujours votre propre calcul, mais Julia-1 ne nécessite pas de GPU et tourne sur CPU.',
          },
          {
            q: 'Jev fonctionne-t-il en local comme Julia-1 ?',
            a: 'Non. Jev n\'est disponible qu\'en API cloud — via des partenaires tels que le Model Catalog de DigitalOcean — et TypeSafe AI n\'a publié ni ses poids ni son architecture.',
          },
          {
            q: 'Combien coûte l\'utilisation de Jev ?',
            a: 'TypeSafe AI facture Jev $0.042 par million de jetons d\'entrée, les jetons de sortie étant actuellement gratuits, depuis son lancement en September 2026.',
          },
          {
            q: 'Qu\'est-ce que mmBERT-small, et est-ce la même chose que Julia-1 ?',
            a: 'mmBERT-small est l\'encodeur multilingue de 140M de paramètres de Johns Hopkins CLSP sur lequel Julia-1 est construit, entraîné sur plus de 1,800 langues sous licence MIT. Julia-1 y ajoute une tête de notation de décision et constitue une publication distincte, sous licence Apache 2.0, de Supersonic Labs, évaluée sur 52 langues plutôt que sur les plus de 1,800 langues complètes.',
          },
          {
            q: 'Quelle est la précision de Julia-1 sur des tâches réelles ?',
            a: 'Cela varie selon la tâche : 94/100 sur AG News, 86/100 sur DAIR Emotion, 71.5% sur 52 langues sur MASSIVE, et 64/100 sur un pilote de 100 exemples Banking77 contre un score de référence de 87%. Tous ces chiffres sont rapportés par l\'éditeur, Supersonic Labs, et n\'ont pas été reproduits de manière indépendante.',
          },
          {
            q: 'Quelqu\'un a-t-il directement comparé Julia-1 et Jev sur le même benchmark ?',
            a: 'Pas publiquement, à ce jour. Les deux proviennent d\'éditeurs différents et visent la même catégorie de « modèle de décision », mais n\'ont pas été testés en tête-à-tête sur un ensemble d\'évaluation partagé.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs Jev：ローカルとクラウドの意思決定モデル比較（2026）',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev 意思決定モデル比較 2026 | Prompt Bites',
    metaDescription: 'Julia-1はCPUで動作する144.3M（1.443億）パラメータのオープンな意思決定モデルです。JevはTypeSafe AIの同用途向けクローズドなクラウドAPIです。実際の違いを解説します。',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ルーティング、分類、モデレーションパイプラインを構築する開発者',
    primaryTerm: '意思決定モデル',
    targetKeywords: [
      'Julia-1 vs Jev',
      'ローカル意思決定モデル',
      'Julia-1 144M モデル',
      'Jev AIモデル',
      '意思決定モデル vs LLM',
    ],
    leadAnswerBlock: '**Julia-1は、mmBERT-small上に構築されたApache 2.0ライセンスの144.3Mパラメータ意思決定モデルで、分類とルーティングのためにCPUでローカルに動作します。**Jevは、TypeSafe AIが数日前に大きなメディア報道とともに発表したクラウド意思決定モデルで、パラメータ数は非公開のクローズドAPIです。両者ともテキストを生成するのではなく、固定された回答候補のリストをスコアリングします——違いはそれぞれがどこで動作するかです。',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1はCPUで動作するオープンな144Mパラメータの意思決定モデルであり、Jevはアーキテクチャ非公開のTypeSafe AI製クローズドなクラウド専用意思決定モデルです。' },
      { type: 'plain-terms', text: '「意思決定モデル」とは、自由なテキストを書く代わりに、与えられた短いリストから最良の回答を選ぶものです——Julia-1はダウンロード後に自分のコンピューター上で無料でこれを行い、Jevはトークンごとの料金でクラウド上で行います。' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'Julia-1はクラウドベースの意思決定モデルJevのローカル版の代替になりますか？',
        answer: 'Julia-1とJevはどちらも、自由なテキストを生成する代わりに固定された回答候補リストをスコアリングする「意思決定モデル」ですが、デプロイの両極端に位置します。Julia-1はSupersonic Labsによる144.3MパラメータのApache 2.0ライセンスモデルで、APIキーやトークンごとのコストなしにCPUで動作します。JevはTypeSafe AIのクローズドなクラウドAPIで、入力トークンごとに課金され、パラメータ数やオープンウェイトは公開されていません。',
        bullets: [
          'Julia-1：144.3Mパラメータ、Apache 2.0、CPUでローカル動作、ディスク上で約550 MB',
          'Jev：TypeSafe AI製のクラウド専用API、入力100万トークンあたり$0.042、アーキテクチャ非公開',
          '両者とも自由なテキストを生成するのではなく固定された回答候補をスコアリング——同じ新興カテゴリー「意思決定モデル」',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1（Supersonic Labs）は、mmBERT-small上に構築されたApache 2.0ライセンスの144.3Mパラメータ意思決定モデル——CPUで動作し、APIキー不要、ディスク上で約550 MB',
          'Jev（TypeSafe AI）は、クローズドなクラウド専用の意思決定モデルで、September 15, 2026に大きなメディア報道とともにローンチ——価格は入力100万トークンあたり$0.042、アーキテクチャは非公開',
          '両者とも、テキストを生成するのではなく2～20個の候補回答の固定リストをスコアリング——同じ「意思決定モデル」カテゴリーだが、デプロイモデルは正反対',
          'Julia-1とJevを同一タスクで直接比較した公開ベンチマークはまだ存在しない',
        ],
      },
      body1: {
        title: 'Julia-1とは何か？',
        content: [
          '<strong>Julia-1は、ジョンズ・ホプキンス大学の言語音声処理センター（CLSP）による多言語エンコーダーmmBERT-small上に、Supersonic Labsが構築した144.3Mパラメータの意思決定モデルです。</strong>コンテキスト、質問、2～20個の候補回答が与えられると、Julia-1は各選択肢をスコアリングし、最良のものを返します——自由なテキストは生成しません。',
          'このモデルはmmBERT-smallの注意機構レイアウトを引き継いでいます：3層ごとに1層が入力全体にグローバルに注意を向け、それ以外の層は±64トークンのローカルウィンドウ内のみに注意を向けます。256,000行の語彙埋め込みは144Mの総パラメータのうち98Mを占め、1回のリクエストでは実際に使用されるトークンの埋め込み行のみを読み込みます——これがGPUなしでCPUで動作できる理由の一つです。',
          'Julia-1はApache 2.0ライセンスで提供され、ディスク上で550.5 MiB（FP32重み）を占め、コンテキスト・質問・候補回答を合わせて最大8,192トークンを受け付けます。対象は分類、ルーティングの決定、順序付きスコアリング、Yes/No判定です——これは、AIエージェントがツールを呼び出したりチケットをエスカレーションしたりする前に下すような固定選択肢の意思決定であり、オープンエンドな生成ではありません。',
          'そのベースモデルであるmmBERT-small自体も注目に値します：<a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">JHU CLSPが訓練した</a>のは、MITライセンスの下で1,800を超える言語（最終訓練フェーズでは1,833言語）です。この数字はmmBERT-smallの事前学習カバー範囲を示すものです——Julia-1自体の精度はMASSIVEベンチマークにおける52のロケールでしか測定されていないため、1,800言語という数字はベースモデルに関する事実として扱い、Julia-1自体の多言語精度についての主張とは見なさないでください。',
        ],
      },
      body2: {
        title: 'Julia-1の精度はどの程度か？',
        content: [
          '<strong>Julia-1はAG News（4ラベルのトピック分類）で94/100、DAIR Emotionベンチマーク（6ラベル）で86/100のスコアを記録しており、いずれもSupersonic Labsによるベンダー報告値です。</strong>52ロケールのMASSIVE意図理解ベンチマークでは154,648件中110,573件（71.5%）を正しく回答し、タイプ付き決定の混合セットでは2,000件中1,463件（73.15%）のスコアを記録しています。',
          '最も弱い結果は、72ラベルの銀行業界向け意図理解ベンチマークBanking77における100サンプルのパイロットテストです：Julia-1は87%の基準スコアに対して64/100のスコアでした。<a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Supersonic Labs自身のモデルカード</a>は、「100サンプルのパイロットテストは励みになるシグナルであり、保証ではない」と明確に述べ、Banking77の72カテゴリーのような長く曖昧なラベルセットをJulia-1の現在の弱点として挙げています。',
          'これらの数値はいずれも、公開時点でSupersonic Labs自身のモデルカード以外では独立して再現されていません——第三者による検証があるまではベンダー報告値として扱ってください。',
        ],
        columns: ['ベンチマーク', 'ラベル数', 'スコア', '情報源'],
        rows: [
          { 'ベンチマーク': 'AG News', 'ラベル数': '4', 'スコア': '94/100', '情報源': 'ベンダー報告' },
          { 'ベンチマーク': 'DAIR Emotion', 'ラベル数': '6', 'スコア': '86/100', '情報源': 'ベンダー報告' },
          { 'ベンチマーク': 'MASSIVE（52ロケール）', 'ラベル数': '意図セット', 'スコア': '71.5%（110,573/154,648）', '情報源': 'ベンダー報告' },
          { 'ベンチマーク': 'Banking77（パイロット）', 'ラベル数': '72', 'スコア': '64/100 vs. 87%基準', '情報源': 'ベンダーパイロット、100サンプル' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Julia-1をローカルで動かすべきか、Jevのクラウド APIを使うべきか？',
        content: [
          '<strong>September 15, 2026にTypeSafe AIがローンチしたJevは、Julia-1のローカルアプローチに対するクラウド版であり、はるかに大きな注目を集めました。</strong>ローンチ動画はX上で約40 million回の再生数を獲得し、TypeSafe AIは発表を前後してDCVCが主導する$40 millionのシードラウンドを調達し、投資家はそれ以降、$10 billionを超える評価額で同社に接触していると<a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Bloombergの報道</a>は伝えています。',
          'Jevは元OpenAI研究者によって構築され、「System 1」モデルとして位置づけられています：テキストではなく、ルーティング、スコアリング、トリアージ、モデレーションのためのタイプ付きで較正された決定を返します——これはJulia-1と同じタスクカテゴリーです。Julia-1と異なり、Jevは<a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">DigitalOceanのModel Catalog</a>などのパートナーを通じたクラウドAPIとしてのみ利用可能です。TypeSafe AIはJevのパラメータ数やモデルアーキテクチャを公開しておらず、外部の観測者は未確認ながら、オープンウェイトの基盤上に構築されたトランスフォーマーであろうと推測しているにすぎません。',
          '価格設定はダウンロード後無料ではなく、トークン単位です：Jevは入力100万トークンあたり$0.042を課金し、出力トークンは現在無料で、TypeSafe AIは標準的なクラウドAPI条件下で70–500ミリ秒のエンドツーエンドレイテンシを報告しています。JevとJulia-1を同一タスクセットで直接評価した公開ベンチマークはまだありません——両者は同じタスクセットで評価されていません。',
          '意思決定モデルのカテゴリー以外のCPU専用ローカル環境については、<a href="/ja/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU専用マシン向けのベストなOllamaモデル</a>を参照してください。',
        ],
        decisionBlock: {
          title: 'ローカル（Julia-1）かクラウド（Jev）か？',
          localIf: [
            'ルーティングや分類のデータが自社インフラの外に出ることを許容できない',
            '約550 MBの一度きりのダウンロード後、リクエストごとのコストをゼロにしたい',
            'カテゴリーがJulia-1で実際に測定されている範囲——単純なトピック/感情ラベルであり、長く曖昧なラベルセットではない——と一致している',
          ],
          cloudIf: [
            'モデルを自分でホスティングしたり更新したりする必要のない、マネージドAPIを求めている',
            '入力100万トークンあたり$0.042（出力トークンは無料）という定額料金が使用量に合っている',
            'オープンウェイトや公開されたアーキテクチャを必要としない',
          ],
          quick: [
            '両者ともチャットボットではなく意思決定モデルです——どちらも自由なテキストは生成しません',
            'Julia-1：オープンウェイト（Apache 2.0）、CPUで動作、144.3Mパラメータ',
            'Jev：クローズド、クラウド専用、パラメータ数は非公開',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '「意思決定モデル」とは何ですか。LLMとの違いは何ですか？',
            a: '意思決定モデルは、コンテキスト、質問、そして固定された候補回答リストを受け取り、それらをスコアリングまたは選択します——自由形式のテキストは決して生成しません。汎用LLMもこれを行うことはできますが、呼び出しごとにテキスト応答を生成・整形・解析する必要があり、より多くのトークンを消費しレイテンシも増加します。Julia-1とJevはどちらも、この限定されたタスクのために特別に構築された意思決定モデルです。',
          },
          {
            q: 'Julia-1はチケットルーティングにおけるLLM呼び出しを置き換えられますか？',
            a: '固定されたルーティングカテゴリーのセットであれば、原則としては可能です——それがSupersonic Labsがこのモデルを構築した用途です。同社自身のベンチマークでは、4ラベルのトピック分類（AG News）で94%の精度を示していますが、72ラベルのBanking77パイロットでは64/100にとどまっており、精度はルーティング先のカテゴリー数に大きく依存します。本番環境のLLM呼び出しを置き換える前に、自分自身のカテゴリーリストでテストしてください。',
          },
          {
            q: 'Julia-1は無料で使えますか？',
            a: 'はい——Apache 2.0ライセンスで提供されているため、リクエストごとの料金なしでダウンロードして実行できます。自分自身のコンピュート費用は依然として発生しますが、Julia-1はGPUを必要とせずCPUで動作します。',
          },
          {
            q: 'JevはJulia-1のようにローカルで動作しますか？',
            a: 'いいえ。JevはDigitalOceanのModel Catalogなどのパートナーを通じたクラウドAPIとしてのみ利用可能であり、TypeSafe AIはその重みやアーキテクチャを公開していません。',
          },
          {
            q: 'Jevの利用にはどのくらいの費用がかかりますか？',
            a: 'TypeSafe AIはSeptember 2026のローンチ時点で、Jevの価格を入力100万トークンあたり$0.042に設定しており、出力トークンは現在無料です。',
          },
          {
            q: 'mmBERT-smallとは何ですか。Julia-1と同じものですか？',
            a: 'mmBERT-smallは、Julia-1のベースとなっているジョンズ・ホプキンスCLSPによる140Mパラメータの多言語エンコーダーで、MITライセンスの下で1,800を超える言語で訓練されています。Julia-1はその上に意思決定スコアリングヘッドを追加した、Supersonic Labsによる独立したApache 2.0ライセンスのリリースであり、1,800を超える全言語ではなく52ロケールで評価されています。',
          },
          {
            q: '実際のタスクにおけるJulia-1の精度はどの程度ですか？',
            a: 'タスクによって異なります：AG Newsで94/100、DAIR Emotionで86/100、MASSIVEの52ロケールで71.5%、そして100サンプルのBanking77パイロットでは87%の基準スコアに対して64/100です。これらの数値はすべてSupersonic Labsによるベンダー報告値であり、独立した再現は行われていません。',
          },
          {
            q: 'Julia-1とJevを同一のベンチマークで直接比較した例はありますか？',
            a: '本稿執筆時点では公開されていません。両者は異なるベンダーによるもので、同じ「意思決定モデル」カテゴリーを対象としていますが、共有の評価セットで直接対決するテストは行われていません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'Julia-1对比Jev：本地与云端决策模型（2026）',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev 决策模型对比 2026 | Prompt Bites',
    metaDescription: 'Julia-1是一个144.3M参数的开源决策模型，可在CPU上运行。Jev是TypeSafe AI针对同一任务推出的闭源云端API。以下是两者的实际差异。',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '构建路由、分类或审核流水线的开发者',
    primaryTerm: '决策模型',
    targetKeywords: [
      'Julia-1 vs Jev',
      '本地决策模型',
      'Julia-1 144M模型',
      'Jev AI模型',
      '决策模型 vs LLM',
    ],
    leadAnswerBlock: '**Julia-1是一个基于mmBERT-small构建的144.3M参数、Apache 2.0许可的决策模型，可在CPU上本地运行，用于分类和路由任务。**Jev是TypeSafe AI几天前发布并引发大量媒体报道的云端决策模型，是一个未公布参数数量的闭源API。两者都是对一份固定的答案选项列表进行打分，而非生成文本——区别在于各自的运行位置。',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1是一个开源的144M参数决策模型，可在CPU上运行；Jev是TypeSafe AI推出的闭源、仅限云端的决策模型，未公布架构信息。' },
      { type: 'plain-terms', text: '「决策模型」会从你给出的一份简短列表中选出最佳答案，而不是撰写自由文本——Julia-1在下载后可以在你自己的电脑上免费完成这项任务，Jev则通过云端按每个token收费完成同样的任务。' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: 'Julia-1是基于云端的决策模型Jev的本地替代方案吗？',
        answer: 'Julia-1和Jev都是「决策模型」，用于对一份固定的答案选项列表打分，而非生成自由文本，但两者处于部署方式的两个极端。Julia-1是Supersonic Labs推出的144.3M参数、Apache 2.0许可的模型，可在CPU上运行，无需API密钥或按token付费。Jev是TypeSafe AI的闭源云端API，按输入token计费，未公布参数数量或开放权重。',
        bullets: [
          'Julia-1：144.3M参数，Apache 2.0，在CPU上本地运行，磁盘占用约550 MB',
          'Jev：TypeSafe AI推出的纯云端API，每百万输入token收费$0.042，架构未公开',
          '两者都是对固定答案选项打分而非生成文本——同属新兴的「决策模型」类别',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1（Supersonic Labs）是一个基于mmBERT-small的144.3M参数、Apache 2.0许可决策模型——可在CPU上运行，无需API密钥，磁盘占用约550 MB',
          'Jev（TypeSafe AI）是一个闭源、纯云端的决策模型，于September 15, 2026发布并引发大量媒体报道——定价为每百万输入token收费$0.042，架构未公开',
          '两者都是对2到20个候选答案的固定列表打分而非生成文本——同属「决策模型」类别，但部署方式截然相反',
          '目前尚无公开基准测试对Julia-1和Jev在同一任务上进行过正面比较',
        ],
      },
      body1: {
        title: 'Julia-1是什么？',
        content: [
          '<strong>Julia-1是Supersonic Labs基于mmBERT-small构建的144.3M参数决策模型，mmBERT-small是约翰斯·霍普金斯大学语言与语音处理中心（CLSP）推出的多语言编码器。</strong>给定一个上下文、一个问题和2到20个候选答案，Julia-1会对每个选项打分并返回最佳答案——它不生成自由文本。',
          '该模型沿用了mmBERT-small的注意力布局：每三层中有一层对整个输入进行全局关注，其余层仅在±64个token的局部窗口内关注。一个含256,000行的词表嵌入占用了144M总参数中的98M，而单次请求只会读取实际用到的token所对应的嵌入行——这是该模型无需GPU即可在CPU上运行的原因之一。',
          'Julia-1以Apache 2.0许可发布，磁盘占用550.5 MiB（FP32权重），可接受上下文、问题与候选答案合计最多8,192个token。它面向分类、路由决策、有序打分和是/否判断——这类是AI代理在调用工具或升级工单之前做出的固定选项决策，而非开放式生成。',
          '其基础模型mmBERT-small本身也值得关注：<a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP在MIT许可下</a>用超过1,800种语言（最终训练阶段为1,833种）对其进行了训练。这个数字描述的是mmBERT-small的预训练覆盖范围——Julia-1自身的准确率仅在MASSIVE基准测试的52个语言区域上测得，因此应将1,800种语言这一数字视为关于基础模型的事实，而非关于Julia-1自身多语言准确率的说法。',
        ],
      },
      body2: {
        title: 'Julia-1的准确率如何？',
        content: [
          '<strong>Julia-1在AG News（4标签主题分类）上得分94/100，在DAIR Emotion基准测试（6个标签）上得分86/100，两者均由Supersonic Labs自行报告。</strong>在覆盖52个语言区域的MASSIVE意图基准测试中，它在154,648个条目中正确回答了110,573个（71.5%），在混合类型化决策集上得分1,463/2,000（73.15%）。',
          '较弱的结果来自Banking77（一个72标签的银行业意图基准测试）上的100样本试点：Julia-1得分64/100，而参考分数为87%。<a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Supersonic Labs自己的模型卡</a>明确指出「100样本的试点是令人鼓舞的信号，而非保证」，并指出像Banking77这样有72个类别的冗长、含糊标签集是Julia-1目前的薄弱环节。',
          '截至发布时，这些数字均未在Supersonic Labs自己的模型卡之外得到独立复现——在第三方验证之前，请将其视为厂商自报数据。',
        ],
        columns: ['基准测试', '标签数', '得分', '来源'],
        rows: [
          { '基准测试': 'AG News', '标签数': '4', '得分': '94/100', '来源': '厂商自报' },
          { '基准测试': 'DAIR Emotion', '标签数': '6', '得分': '86/100', '来源': '厂商自报' },
          { '基准测试': 'MASSIVE（52个语言区域）', '标签数': '意图集', '得分': '71.5%（110,573/154,648）', '来源': '厂商自报' },
          { '基准测试': 'Banking77（试点）', '标签数': '72', '得分': '64/100 vs. 87%参考分数', '来源': '厂商试点，100个样本' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: '应该本地运行Julia-1，还是调用Jev的云端API？',
        content: [
          '<strong>Jev由TypeSafe AI于September 15, 2026推出，是Julia-1本地方案的云端对应版本——而且获得了远超Julia-1的关注度。</strong>发布视频在X上获得了约40 million次观看，TypeSafe AI围绕发布获得了一轮由DCVC领投的$40 million种子轮融资，此后投资者曾以超过$10 billion的估值接触该公司，据<a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">彭博社的报道</a>。',
          'Jev由一位前OpenAI研究员打造，定位为「System 1」模型：它返回的是类型化、经过校准的决策，而非文本——用于路由、打分、分诊和审核，与Julia-1属于同一任务类别。与Julia-1不同，Jev仅通过<a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">DigitalOcean的Model Catalog</a>等合作伙伴以云端API的形式提供。TypeSafe AI并未公布Jev的参数数量或模型架构；外部观察者仅是未经证实地猜测，它是基于开放权重底座的Transformer模型。',
          '定价方式是按token计费，而非下载后免费使用：Jev每百万输入token收费$0.042，输出token目前免费，TypeSafe AI称在标准云端API条件下端到端延迟为70–500毫秒。目前尚无公开基准测试对Jev和Julia-1进行过正面比较——两者未在同一任务集上被评估过。',
          '如需了解决策模型类别之外的纯CPU本地方案，请参阅<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">适用于纯CPU设备的最佳Ollama模型</a>。',
        ],
        decisionBlock: {
          title: '本地（Julia-1）还是云端（Jev）？',
          localIf: [
            '你的路由或分类数据不能离开自有基础设施',
            '你希望在一次性下载约550 MB之后，每次请求零成本',
            '你的分类类别与Julia-1实际测得的能力范围相符——简单的主题/情绪标签，而非冗长含糊的标签集',
          ],
          cloudIf: [
            '你想要一个托管API，而不必自己托管或更新模型',
            '每百万输入token收费$0.042（输出token免费）的固定价格符合你的用量',
            '你不需要开放权重或公开的架构',
          ],
          quick: [
            '两者都是决策模型，而非聊天机器人——都不会生成自由文本',
            'Julia-1：开放权重（Apache 2.0），在CPU上运行，144.3M参数',
            'Jev：闭源，仅限云端，参数数量未公开',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '什么是「决策模型」，它与LLM有何不同？',
            a: '决策模型接收一个上下文、一个问题和一份固定的候选答案列表，然后对其打分或选出一个——它从不生成开放式文本。通用LLM也能做到这一点，但每次调用还必须生成、格式化并解析文本回应，这会消耗更多token并增加延迟。Julia-1和Jev都是专门为这项更窄任务而构建的决策模型。',
          },
          {
            q: 'Julia-1能替代用于工单路由的LLM调用吗？',
            a: '对于固定的一组路由类别来说，原则上可以——这正是Supersonic Labs构建它的用例。其自身的基准测试显示，在4标签主题分类（AG News）上准确率为94%，但在72标签的Banking77试点上只有64/100，因此准确率在很大程度上取决于你在多少个类别之间进行路由。在替换生产环境中的LLM调用之前，请先用你自己的类别列表进行测试。',
          },
          {
            q: 'Julia-1可以免费使用吗？',
            a: '可以——它以Apache 2.0许可发布，因此你可以下载并运行它，无需按请求付费。你仍需支付自己的算力成本，但Julia-1不需要GPU，可在CPU上运行。',
          },
          {
            q: 'Jev能像Julia-1一样本地运行吗？',
            a: '不能。Jev仅以云端API形式提供——通过DigitalOcean的Model Catalog等合作伙伴——TypeSafe AI并未发布其权重或架构。',
          },
          {
            q: '使用Jev的费用是多少？',
            a: '截至September 2026发布时，TypeSafe AI对Jev的定价为每百万输入token收费$0.042，输出token目前免费。',
          },
          {
            q: 'mmBERT-small是什么，它和Julia-1是同一个模型吗？',
            a: 'mmBERT-small是约翰斯·霍普金斯CLSP推出的140M参数多语言编码器，Julia-1正是基于它构建的，训练数据覆盖MIT许可下的1,800多种语言。Julia-1在其之上添加了一个决策打分头，是Supersonic Labs发布的一个独立的、采用Apache 2.0许可的版本，评测范围是52个语言区域，而非全部1,800多种语言。',
          },
          {
            q: 'Julia-1在实际任务中的准确率如何？',
            a: '这因任务而异：在AG News上为94/100，在DAIR Emotion上为86/100，在MASSIVE的52个语言区域上为71.5%，在100样本的Banking77试点上为64/100，而参考分数为87%。所有这些数字均为Supersonic Labs的厂商自报数据，尚未经过独立复现。',
          },
          {
            q: '有没有人在同一基准测试中直接比较过Julia-1和Jev？',
            a: '截至目前尚无公开比较。两者来自不同厂商，针对同一「决策模型」类别，但尚未在共享的评测集上进行过正面测试。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs Jev: modelos de decisão local ou em nuvem (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev: comparação de modelos de decisão 2026',
    metaDescription: 'Julia-1 é um modelo de decisão de código aberto com 144.3M de parâmetros que roda em CPU. Jev é a API de nuvem fechada da TypeSafe AI para a mesma tarefa. Veja as diferenças reais.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que constroem pipelines de roteamento, classificação ou moderação',
    primaryTerm: 'modelo de decisão',
    targetKeywords: [
      'Julia-1 vs Jev',
      'modelo de decisão local',
      'modelo Julia-1 144M',
      'modelo de IA Jev',
      'modelo de decisão vs LLM',
    ],
    leadAnswerBlock: '**Julia-1 é um modelo de decisão de 144.3M de parâmetros, com licença Apache 2.0, construído sobre o mmBERT-small, que roda localmente na CPU para classificação e roteamento.** O Jev, modelo de decisão em nuvem que a TypeSafe AI lançou dias antes com grande repercussão na imprensa, é uma API fechada sem contagem de parâmetros publicada. Ambos pontuam uma lista fixa de opções de resposta em vez de gerar texto — a diferença está em onde cada um roda.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 é um modelo de decisão aberto de 144M de parâmetros que roda em CPU; Jev é um modelo de decisão fechado, somente em nuvem, da TypeSafe AI, sem arquitetura publicada.' },
      { type: 'plain-terms', text: 'Um "modelo de decisão" escolhe a melhor resposta entre uma lista curta fornecida por você, em vez de escrever texto livre — o Julia-1 faz isso de graça no seu próprio computador após o download, o Jev faz isso na nuvem cobrando por token.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'O Julia-1 é uma alternativa local ao modelo de decisão em nuvem Jev?',
        answer: 'Julia-1 e Jev são ambos "modelos de decisão" feitos para pontuar uma lista fixa de opções de resposta em vez de gerar texto livre, mas ficam em extremos opostos do espectro de implantação. Julia-1 é um modelo de 144.3M de parâmetros, com licença Apache 2.0, da Supersonic Labs, que roda em CPU sem chave de API ou custo por token. Jev é a API de nuvem fechada da TypeSafe AI, cobrada por token de entrada, sem contagem de parâmetros publicada nem pesos abertos.',
        bullets: [
          'Julia-1: 144.3M de parâmetros, Apache 2.0, roda localmente em CPU, ~550 MB em disco',
          'Jev: API somente em nuvem da TypeSafe AI, $0.042 por milhão de tokens de entrada, arquitetura não divulgada',
          'Ambos pontuam opções de resposta fixas em vez de gerar texto — a mesma categoria emergente de "modelo de decisão"',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (Supersonic Labs) é um modelo de decisão de 144.3M de parâmetros, com licença Apache 2.0, construído sobre o mmBERT-small — roda em CPU, não precisa de chave de API e pesa ~550 MB em disco',
          'Jev (TypeSafe AI) é um modelo de decisão fechado, somente em nuvem, lançado com grande repercussão na imprensa em September 15, 2026 — o preço é de $0.042 por milhão de tokens de entrada, arquitetura não divulgada',
          'Ambos pontuam uma lista fixa de 2 a 20 respostas candidatas em vez de gerar texto — a mesma categoria de "modelo de decisão", mas com modelos de implantação opostos',
          'Nenhum benchmark público testou Julia-1 e Jev lado a lado na mesma tarefa',
        ],
      },
      body1: {
        title: 'O que é o Julia-1?',
        content: [
          '<strong>Julia-1 é um modelo de decisão de 144.3M de parâmetros construído pela Supersonic Labs sobre o mmBERT-small, um encoder multilíngue do Center for Language and Speech Processing (CLSP) da Johns Hopkins.</strong> Dado um contexto, uma pergunta e de 2 a 20 respostas candidatas, o Julia-1 pontua cada opção e retorna a melhor — ele não gera texto livre.',
          'O modelo mantém o layout de atenção do mmBERT-small: a cada três camadas, uma presta atenção globalmente à entrada completa, e as demais camadas prestam atenção apenas dentro de uma janela local de ±64 tokens. Um embedding de vocabulário com 256,000 linhas responde por 98M dos 144M de parâmetros totais, e cada requisição lê apenas as linhas do embedding correspondentes aos tokens efetivamente usados — uma das razões pelas quais o modelo roda em CPU sem GPU.',
          'O Julia-1 é distribuído sob a licença Apache 2.0, pesa 550.5 MiB em disco (pesos FP32) e aceita até 8,192 tokens combinados entre contexto, pergunta e respostas candidatas. Ele é voltado para classificação, decisões de roteamento, pontuação ordenada e julgamentos sim/não — o tipo de decisão de opções fixas que um agente de IA toma antes de chamar uma ferramenta ou escalar um chamado, não a geração aberta.',
          'Seu modelo base, o mmBERT-small, é notável por si só: <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">a JHU CLSP o treinou</a> em mais de 1,800 idiomas (1,833 na fase final de treinamento) sob licença MIT. Esse número descreve a cobertura de pré-treinamento do mmBERT-small — a precisão do próprio Julia-1 só foi medida em 52 localidades no benchmark MASSIVE, portanto trate o número de 1,800 idiomas como um fato sobre o modelo base, não como uma afirmação sobre a precisão multilíngue do Julia-1.',
        ],
      },
      body2: {
        title: 'Qual a precisão do Julia-1?',
        content: [
          '<strong>O Julia-1 marca 94/100 no AG News (classificação de tópicos com 4 rótulos) e 86/100 no benchmark DAIR Emotion (6 rótulos), ambos reportados pela própria Supersonic Labs.</strong> No benchmark de intenção MASSIVE, com 52 localidades, ele responde corretamente 110,573 de 154,648 itens (71.5%), e em um conjunto misto de decisões tipadas marca 1,463 de 2,000 (73.15%).',
          'O resultado mais fraco é um piloto de 100 exemplos no Banking77, um benchmark de intenção bancária com 72 rótulos: o Julia-1 marcou 64/100 contra uma pontuação de referência de 87%. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">A própria model card da Supersonic Labs</a> é explícita ao dizer que "pilotos de 100 exemplos são sinais encorajadores, não garantias", e aponta conjuntos de rótulos longos e ambíguos, como as 72 categorias do Banking77, como o ponto fraco atual do Julia-1.',
          'Nenhum desses números foi reproduzido de forma independente fora da própria model card da Supersonic Labs até a data de publicação — trate-os como reportados pelo fabricante até que um terceiro os verifique.',
        ],
        columns: ['Benchmark', 'Rótulos', 'Pontuação', 'Fonte'],
        rows: [
          { 'Benchmark': 'AG News', 'Rótulos': '4', 'Pontuação': '94/100', 'Fonte': 'Reportado pelo fabricante' },
          { 'Benchmark': 'DAIR Emotion', 'Rótulos': '6', 'Pontuação': '86/100', 'Fonte': 'Reportado pelo fabricante' },
          { 'Benchmark': 'MASSIVE (52 localidades)', 'Rótulos': 'conjunto de intenções', 'Pontuação': '71.5% (110,573/154,648)', 'Fonte': 'Reportado pelo fabricante' },
          { 'Benchmark': 'Banking77 (piloto)', 'Rótulos': '72', 'Pontuação': '64/100 vs. 87% referência', 'Fonte': 'Piloto do fabricante, 100 exemplos' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Rodar o Julia-1 localmente ou usar a API de nuvem do Jev?',
        content: [
          '<strong>O Jev, lançado pela TypeSafe AI em September 15, 2026, é a contrapartida em nuvem da abordagem local do Julia-1 — e teve muito mais repercussão.</strong> O vídeo de lançamento teve cerca de 40 million de visualizações no X, a TypeSafe AI captou uma rodada seed de $40 million liderada pela DCVC em torno do anúncio, e investidores desde então têm procurado a empresa com avaliações acima de $10 billion, segundo a <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">cobertura da Bloomberg</a>.',
          'O Jev foi construído por um ex-pesquisador da OpenAI e é posicionado como um modelo "System 1": ele retorna decisões tipadas e calibradas — não texto — para roteamento, pontuação, triagem e moderação, a mesma categoria de tarefa do Julia-1. Diferente do Julia-1, o Jev está disponível apenas como API em nuvem, por meio de parceiros como o <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">Model Catalog da DigitalOcean</a>. A TypeSafe AI não publicou a contagem de parâmetros nem a arquitetura do Jev; observadores externos apenas suspeitam, sem confirmação, que se trata de um transformer baseado em uma fundação de pesos abertos.',
          'A precificação é por token, não gratuita após o download: o Jev cobra $0.042 por milhão de tokens de entrada, com tokens de saída atualmente gratuitos, e a TypeSafe AI relata latência de ponta a ponta de 70–500 milissegundos em condições padrão de API em nuvem. Nenhum benchmark público testou Jev e Julia-1 lado a lado — os dois não foram avaliados no mesmo conjunto de tarefas.',
          'Para configurações locais somente com CPU fora da categoria de modelos de decisão, veja os <a href="/pt/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">melhores modelos do Ollama para máquinas somente com CPU</a>.',
        ],
        decisionBlock: {
          title: 'Local (Julia-1) ou nuvem (Jev)?',
          localIf: [
            'Seus dados de roteamento ou classificação não podem sair da sua própria infraestrutura',
            'Você quer custo zero por requisição após o download único de ~550 MB',
            'Suas categorias coincidem com o que foi de fato medido no Julia-1 — rótulos simples de tópico/emoção, não conjuntos de rótulos longos e ambíguos',
          ],
          cloudIf: [
            'Você quer uma API gerenciada, sem precisar hospedar ou atualizar um modelo você mesmo',
            'O preço fixo de $0.042 por milhão de tokens de entrada (tokens de saída gratuitos) cabe no seu volume',
            'Você não precisa de pesos abertos nem de uma arquitetura divulgada',
          ],
          quick: [
            'Ambos são modelos de decisão, não chatbots — nenhum gera texto livre',
            'Julia-1: pesos abertos (Apache 2.0), roda em CPU, 144.3M de parâmetros',
            'Jev: fechado, somente em nuvem, contagem de parâmetros não divulgada',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é um "modelo de decisão", e como ele difere de um LLM?',
            a: 'Um modelo de decisão recebe um contexto, uma pergunta e uma lista fixa de respostas candidatas, depois pontua ou escolhe uma delas — ele nunca gera texto aberto. Um LLM de propósito geral também consegue fazer isso, mas também precisa gerar, formatar e interpretar uma resposta em texto a cada chamada, o que custa mais tokens e adiciona latência. Julia-1 e Jev são ambos modelos de decisão construídos especificamente para essa tarefa mais restrita.',
          },
          {
            q: 'O Julia-1 pode substituir uma chamada de LLM para roteamento de chamados?',
            a: 'Para um conjunto fixo de categorias de roteamento, sim em princípio — esse é o caso de uso para o qual a Supersonic Labs o construiu. Os próprios benchmarks mostram 94% de precisão na classificação de tópicos com 4 rótulos (AG News), mas apenas 64/100 no piloto do Banking77 com 72 rótulos, então a precisão depende muito de quantas categorias você usa para rotear. Teste-o com sua própria lista de categorias antes de substituir uma chamada de LLM em produção.',
          },
          {
            q: 'O Julia-1 é gratuito para uso?',
            a: 'Sim — ele é distribuído sob a licença Apache 2.0, então você pode baixar e executá-lo sem custo por requisição. Você ainda paga pelo seu próprio poder de computação, mas o Julia-1 não precisa de GPU e roda em CPU.',
          },
          {
            q: 'O Jev roda localmente como o Julia-1?',
            a: 'Não. O Jev está disponível apenas como API em nuvem — por meio de parceiros como o Model Catalog da DigitalOcean — e a TypeSafe AI não divulgou seus pesos nem sua arquitetura.',
          },
          {
            q: 'Quanto custa usar o Jev?',
            a: 'A TypeSafe AI cobra pelo Jev $0.042 por milhão de tokens de entrada, com tokens de saída atualmente gratuitos, conforme seu lançamento em September 2026.',
          },
          {
            q: 'O que é o mmBERT-small, e é a mesma coisa que o Julia-1?',
            a: 'O mmBERT-small é o encoder multilíngue de 140M de parâmetros da Johns Hopkins CLSP sobre o qual o Julia-1 é construído, treinado em mais de 1,800 idiomas sob licença MIT. O Julia-1 adiciona uma cabeça de pontuação de decisão sobre ele e é um lançamento separado, licenciado sob Apache 2.0, da Supersonic Labs, avaliado em 52 localidades em vez das mais de 1,800 completas.',
          },
          {
            q: 'Qual a precisão do Julia-1 em tarefas do mundo real?',
            a: 'Varia por tarefa: 94/100 no AG News, 86/100 no DAIR Emotion, 71.5% em 52 localidades no MASSIVE, e 64/100 em um piloto de 100 exemplos do Banking77 contra uma pontuação de referência de 87%. Todos esses números são reportados pelo fabricante, a Supersonic Labs, e não foram reproduzidos de forma independente.',
          },
          {
            q: 'Alguém já comparou diretamente Julia-1 e Jev no mesmo benchmark?',
            a: 'Não publicamente, até o momento. Os dois vêm de fabricantes diferentes e visam a mesma categoria de "modelo de decisão", mas não foram testados lado a lado em um conjunto de avaliação compartilhado.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'Julia-1 مقابل Jev: نماذج قرار محلية أم سحابية؟ (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 مقابل Jev: مقارنة نماذج القرار 2026',
    metaDescription: 'Julia-1 نموذج قرار مفتوح المصدر بحجم 144.3M معلمة يعمل على المعالج CPU. أما Jev فهو واجهة برمجية سحابية مغلقة من TypeSafe AI لنفس المهمة. إليك الفروقات الفعلية بينهما.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'مطورون يبنون خطوط توجيه أو تصنيف أو إشراف على المحتوى',
    primaryTerm: 'نموذج القرار',
    targetKeywords: [
      'Julia-1 vs Jev',
      'نموذج قرار محلي',
      'نموذج Julia-1 144M',
      'نموذج Jev للذكاء الاصطناعي',
      'نموذج قرار مقابل LLM',
    ],
    leadAnswerBlock: '**Julia-1 هو نموذج قرار بحجم 144.3M معلمة، مرخّص بموجب Apache 2.0، مبني على mmBERT-small، ويعمل محليًا على المعالج CPU لمهام التصنيف والتوجيه.** أما Jev، نموذج القرار السحابي الذي أطلقته TypeSafe AI قبل ذلك بأيام وسط تغطية إعلامية واسعة، فهو واجهة برمجية مغلقة دون نشر عدد المعلمات. يقوم كلاهما بتقييم قائمة ثابتة من الإجابات المرشحة بدلًا من توليد نص — والفرق يكمن في مكان تشغيل كل منهما.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1 نموذج قرار مفتوح بحجم 144M معلمة يعمل على المعالج CPU؛ وJev نموذج قرار مغلق، سحابي فقط، من TypeSafe AI دون نشر بنيته المعمارية.' },
      { type: 'plain-terms', text: '"نموذج القرار" يختار أفضل إجابة من قائمة قصيرة تقدّمها له بدلًا من كتابة نص حر — يقوم Julia-1 بذلك مجانًا على جهازك بعد التنزيل، بينما يقوم Jev بذلك عبر السحابة مقابل رسوم لكل رمز (token).' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل Julia-1 بديل محلي لنموذج القرار السحابي Jev؟',
        answer: 'كلٌّ من Julia-1 وJev هما "نموذجا قرار" مصمّمان لتقييم قائمة ثابتة من الإجابات المرشحة بدلًا من توليد نص حر، لكنهما يقعان على طرفي نقيض من طيف النشر. Julia-1 نموذج بحجم 144.3M معلمة من Supersonic Labs مرخّص بموجب Apache 2.0، يعمل على المعالج CPU دون مفتاح API أو تكلفة لكل رمز. أما Jev فهو واجهة برمجية سحابية مغلقة من TypeSafe AI، يُسعَّر لكل رمز إدخال، دون نشر عدد المعلمات أو الأوزان المفتوحة.',
        bullets: [
          'Julia-1: 144.3M معلمة، Apache 2.0، يعمل محليًا على المعالج CPU، بحجم ~550 MB على القرص',
          'Jev: واجهة برمجية سحابية فقط من TypeSafe AI، $0.042 لكل مليون رمز إدخال، البنية المعمارية غير معلنة',
          'كلاهما يقيّم إجابات ثابتة بدلًا من توليد نص — نفس الفئة الناشئة "نموذج القرار"',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1 (من Supersonic Labs) نموذج قرار بحجم 144.3M معلمة مرخّص بموجب Apache 2.0 ومبني على mmBERT-small — يعمل على المعالج CPU، ولا يحتاج مفتاح API، ويزن ~550 MB على القرص',
          'Jev (من TypeSafe AI) نموذج قرار مغلق، سحابي فقط، أُطلق وسط تغطية إعلامية واسعة في September 15, 2026 — والتسعير هو $0.042 لكل مليون رمز إدخال، والبنية المعمارية غير معلنة',
          'كلاهما يقيّم قائمة ثابتة من 2 إلى 20 إجابة مرشحة بدلًا من توليد نص — نفس فئة "نموذج القرار" لكن بنموذجَي نشر متعاكسين',
          'لا توجد حتى الآن أي مقارنة معيارية علنية اختبرت Julia-1 وJev وجهًا لوجه على نفس المهمة',
        ],
      },
      body1: {
        title: 'ما هو Julia-1؟',
        content: [
          '<strong>Julia-1 نموذج قرار بحجم 144.3M معلمة بنته Supersonic Labs فوق mmBERT-small، وهو مُرمِّز متعدد اللغات من مركز معالجة اللغة والكلام (CLSP) بجامعة جونز هوبكنز.</strong> بالنظر إلى سياق وسؤال و2 إلى 20 إجابة مرشحة، يقيّم Julia-1 كل خيار ويعيد الأفضل منها — فهو لا يولّد نصًا حرًا.',
          'يحافظ النموذج على مخطط الانتباه الخاص بـ mmBERT-small: تهتم كل طبقة ثالثة عالميًا بكامل المدخلات، بينما تهتم بقية الطبقات فقط ضمن نافذة محلية قدرها ±64 رمزًا. يمثّل تضمين مفردات بحجم 256,000 صف نحو 98M من إجمالي 144M معلمة، ولا يقرأ الطلب الواحد سوى صفوف التضمين الخاصة بالرموز المستخدَمة فعليًا — وهذا أحد أسباب تشغيل النموذج على المعالج CPU دون الحاجة إلى GPU.',
          'يُطرح Julia-1 بموجب ترخيص Apache 2.0، ويزن 550.5 MiB على القرص (أوزان FP32)، ويقبل ما يصل إلى 8,192 رمزًا مجتمعة عبر السياق والسؤال والإجابات المرشحة. يستهدف التصنيف وقرارات التوجيه والتقييم المرتب وأحكام نعم/لا — أي نوع القرار ذي الخيارات الثابتة الذي يتخذه وكيل الذكاء الاصطناعي قبل استدعاء أداة أو تصعيد تذكرة، وليس التوليد المفتوح.',
          'نموذجه الأساسي، mmBERT-small، لافت بحد ذاته: <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">درّبته JHU CLSP</a> على أكثر من 1,800 لغة (1,833 لغة في المرحلة النهائية من التدريب) بموجب ترخيص MIT. يصف هذا الرقم مدى تغطية التدريب المسبق لنموذج mmBERT-small — أما دقة Julia-1 نفسه فلم تُقَس إلا عبر 52 لغة محلية في اختبار MASSIVE المعياري، لذا يجب التعامل مع رقم 1,800 لغة كحقيقة تخص النموذج الأساسي، لا كادعاء بشأن دقة Julia-1 متعدد اللغات.',
        ],
      },
      body2: {
        title: 'ما مدى دقة Julia-1؟',
        content: [
          '<strong>يسجل Julia-1 94/100 في AG News (تصنيف مواضيع بأربعة تصنيفات) و86/100 في اختبار DAIR Emotion المعياري (6 تصنيفات)، وكلا الرقمين أبلغت عنهما Supersonic Labs نفسها.</strong> وفي اختبار النوايا MASSIVE عبر 52 لغة محلية، يجيب بشكل صحيح على 110,573 من أصل 154,648 عنصرًا (71.5%)، وفي مجموعة مختلطة من القرارات المصنّفة يسجل 1,463 من أصل 2,000 (73.15%).',
          'أما النتيجة الأضعف فهي تجربة أولية على 100 مثال في Banking77، وهو اختبار معياري لنوايا القطاع المصرفي يضم 72 تصنيفًا: سجّل Julia-1 فيه 64/100 مقابل درجة مرجعية قدرها 87%. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">بطاقة النموذج الخاصة بـ Supersonic Labs</a> توضح صراحةً أن "التجارب الأولية على 100 مثال هي إشارات مشجّعة لا ضمانات"، وتشير إلى مجموعات التصنيفات الطويلة والغامضة مثل تصنيفات Banking77 الـ72 باعتبارها نقطة الضعف الحالية لـ Julia-1.',
          'لم يُعِد أي طرف مستقل التحقق من أي من هذه الأرقام خارج بطاقة نموذج Supersonic Labs حتى وقت النشر — تعامل معها كأرقام أبلغ عنها المزوّد إلى أن يتحقق منها طرف ثالث.',
        ],
        columns: ['اختبار معياري', 'التصنيفات', 'النتيجة', 'المصدر'],
        rows: [
          { 'اختبار معياري': 'AG News', 'التصنيفات': '4', 'النتيجة': '94/100', 'المصدر': 'أبلغ عنه المزوّد' },
          { 'اختبار معياري': 'DAIR Emotion', 'التصنيفات': '6', 'النتيجة': '86/100', 'المصدر': 'أبلغ عنه المزوّد' },
          { 'اختبار معياري': 'MASSIVE (52 لغة محلية)', 'التصنيفات': 'مجموعة نوايا', 'النتيجة': '71.5% (110,573/154,648)', 'المصدر': 'أبلغ عنه المزوّد' },
          { 'اختبار معياري': 'Banking77 (تجربة أولية)', 'التصنيفات': '72', 'النتيجة': '64/100 مقابل 87% مرجعية', 'المصدر': 'تجربة أولية من المزوّد، 100 مثال' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'هل تُشغّل Julia-1 محليًا أم تستخدم واجهة Jev السحابية؟',
        content: [
          '<strong>Jev، الذي أطلقته TypeSafe AI في September 15, 2026، هو النظير السحابي للنهج المحلي الذي يتبعه Julia-1 — وقد حظي باهتمام أكبر بكثير.</strong> جذب فيديو الإطلاق نحو 40 million مشاهدة على منصة X، وجمعت TypeSafe AI جولة تمويل أولية بقيمة $40 million بقيادة DCVC حول موعد الإعلان، وتواصل مستثمرون منذ ذلك الحين مع الشركة بتقييمات تتجاوز $10 billion، وفقًا لتغطية <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">بلومبرغ</a>.',
          'بُني Jev على يد باحث سابق في OpenAI، ويُقدَّم كنموذج "System 1": فهو يُعيد قرارات مصنّفة ومعايَرة — لا نصًا — للتوجيه والتقييم والفرز والإشراف على المحتوى، وهي نفس فئة المهام التي يخدمها Julia-1. وخلافًا لـ Julia-1، فإن Jev متاح فقط كواجهة برمجية سحابية عبر شركاء مثل <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">كتالوج نماذج DigitalOcean</a>. لم تنشر TypeSafe AI عدد معلمات Jev أو بنيته المعمارية؛ ويكتفي المراقبون الخارجيون بالافتراض غير المؤكد بأنه نموذج قائم على المحوّلات (transformer) مبني فوق أساس ذي أوزان مفتوحة.',
          'يُسعَّر Jev لكل رمز بدلًا من المجانية بعد التنزيل: يفرض $0.042 لكل مليون رمز إدخال، مع رموز إخراج مجانية حاليًا، وتفيد TypeSafe AI بزمن استجابة شامل يتراوح بين 70–500 مللي ثانية في ظل ظروف واجهة برمجية سحابية قياسية. لا يوجد حتى الآن أي اختبار معياري علني قارن بين Jev وJulia-1 وجهًا لوجه — إذ لم يُقيَّم كلاهما على نفس مجموعة المهام.',
          'للاطلاع على إعدادات محلية تعتمد على المعالج CPU فقط خارج فئة نماذج القرار، راجع <a href="/ar/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">أفضل نماذج Ollama للأجهزة التي تعتمد على المعالج CPU فقط</a>.',
        ],
        decisionBlock: {
          title: 'محلي (Julia-1) أم سحابي (Jev)؟',
          localIf: [
            'لا يمكن لبيانات التوجيه أو التصنيف الخاصة بك مغادرة بنيتك التحتية الخاصة',
            'تريد تكلفة صفرية لكل طلب بعد التنزيل الأولي لمرة واحدة بحجم ~550 MB',
            'تتوافق فئاتك مع ما قِيس فعليًا في Julia-1 — تصنيفات موضوعية/عاطفية بسيطة، وليست مجموعات تصنيفات طويلة وغامضة',
          ],
          cloudIf: [
            'تريد واجهة برمجية مُدارة دون الحاجة لاستضافة أو تحديث نموذج بنفسك',
            'يناسب السعر الثابت البالغ $0.042 لكل مليون رمز إدخال (مع رموز إخراج مجانية) حجم استخدامك',
            'لست بحاجة لأوزان مفتوحة أو بنية معمارية معلنة',
          ],
          quick: [
            'كلاهما نموذجا قرار لا روبوتَي محادثة — ولا يولّد أي منهما نصًا حرًا',
            'Julia-1: أوزان مفتوحة (Apache 2.0)، يعمل على المعالج CPU، 144.3M معلمة',
            'Jev: مغلق، سحابي فقط، عدد المعلمات غير معلن',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو "نموذج القرار"، وكيف يختلف عن نموذج اللغة الكبير (LLM)؟',
            a: 'يأخذ نموذج القرار سياقًا وسؤالًا وقائمة ثابتة من الإجابات المرشحة، ثم يقيّمها أو يختار واحدة منها — ولا يولّد أبدًا نصًا مفتوحًا. يمكن لنموذج لغوي كبير عام أن يقوم بهذا أيضًا، لكنه يضطر أيضًا إلى توليد وتنسيق وتحليل استجابة نصية في كل استدعاء، ما يكلّف رموزًا أكثر ويزيد زمن الاستجابة. Julia-1 وJev كلاهما نموذجا قرار بُنيا خصيصًا لهذه المهمة الأضيق.',
          },
          {
            q: 'هل يمكن لـ Julia-1 أن يحل محل استدعاء نموذج لغوي كبير لتوجيه التذاكر؟',
            a: 'بالنسبة لمجموعة ثابتة من فئات التوجيه، نعم من حيث المبدأ — وهذا هو حالة الاستخدام التي بنت Supersonic Labs النموذج من أجلها. تُظهر اختباراتها المعيارية الخاصة دقة بنسبة 94% في تصنيف المواضيع بأربعة تصنيفات (AG News)، لكن فقط 64/100 في تجربة Banking77 الأولية ذات الـ72 تصنيفًا، لذا تعتمد الدقة بشدة على عدد الفئات التي توجّه بينها. اختبره مقابل قائمة فئاتك الخاصة قبل استبدال استدعاء نموذج لغوي كبير في بيئة الإنتاج.',
          },
          {
            q: 'هل Julia-1 مجاني الاستخدام؟',
            a: 'نعم — فهو يُطرح بموجب ترخيص Apache 2.0، لذا يمكنك تنزيله وتشغيله دون رسوم لكل طلب. ستظل تدفع تكلفة حوسبتك الخاصة، لكن Julia-1 لا يحتاج إلى GPU ويعمل على المعالج CPU.',
          },
          {
            q: 'هل يعمل Jev محليًا مثل Julia-1؟',
            a: 'لا. Jev متاح فقط كواجهة برمجية سحابية — عبر شركاء مثل كتالوج نماذج DigitalOcean — ولم تنشر TypeSafe AI أوزانه أو بنيته المعمارية.',
          },
          {
            q: 'كم تبلغ تكلفة استخدام Jev؟',
            a: 'تسعّر TypeSafe AI استخدام Jev بـ $0.042 لكل مليون رمز إدخال، مع رموز إخراج مجانية حاليًا، وذلك منذ إطلاقه في September 2026.',
          },
          {
            q: 'ما هو mmBERT-small، وهل هو نفس Julia-1؟',
            a: 'mmBERT-small هو المُرمِّز متعدد اللغات بحجم 140M معلمة من Johns Hopkins CLSP الذي بُني Julia-1 فوقه، وقد دُرِّب على أكثر من 1,800 لغة بموجب ترخيص MIT. يضيف Julia-1 فوقه رأس تقييم قرارات، وهو إصدار منفصل مرخّص بموجب Apache 2.0 من Supersonic Labs، وقد قُيِّم عبر 52 لغة محلية بدلًا من أكثر من 1,800 لغة كاملة.',
          },
          {
            q: 'ما مدى دقة Julia-1 في المهام الواقعية؟',
            a: 'تختلف الدقة حسب المهمة: 94/100 في AG News، و86/100 في DAIR Emotion، و71.5% عبر 52 لغة محلية في MASSIVE، و64/100 في تجربة أولية على 100 مثال في Banking77 مقابل درجة مرجعية قدرها 87%. جميع هذه الأرقام أبلغت عنها المزوّدة Supersonic Labs، ولم تُعَد إعادة إنتاجها بشكل مستقل.',
          },
          {
            q: 'هل قارن أحد Julia-1 وJev مباشرة على نفس الاختبار المعياري؟',
            a: 'لا، ليس علنًا حتى وقت كتابة هذا المقال. يأتي النموذجان من مزوّدَين مختلفَين ويستهدفان نفس فئة "نموذج القرار"، لكن لم يُختبرا وجهًا لوجه على مجموعة تقييم مشتركة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: 'Julia-1 vs Jev: 로컬 대 클라우드 의사결정 모델 비교 (2026)',
    dateModified: '2026-09-28',
    seoTitle: 'Julia-1 vs Jev 의사결정 모델 비교 2026 | Prompt Bites',
    metaDescription: 'Julia-1은 CPU에서 실행되는 144.3M 파라미터 오픈소스 의사결정 모델입니다. Jev는 동일한 작업을 위한 TypeSafe AI의 폐쇄형 클라우드 API입니다. 실제 차이점을 정리했습니다.',
    publishDate: '2026-09-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-28',
    current_models_mentioned: ['Julia-1', 'Jev', 'mmBERT-small'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '라우팅, 분류, 모더레이션 파이프라인을 구축하는 개발자',
    primaryTerm: '의사결정 모델',
    targetKeywords: [
      'Julia-1 vs Jev',
      '로컬 의사결정 모델',
      'Julia-1 144M 모델',
      'Jev AI 모델',
      '의사결정 모델 vs LLM',
    ],
    leadAnswerBlock: '**Julia-1은 mmBERT-small을 기반으로 구축된 144.3M 파라미터 규모의 Apache 2.0 라이선스 의사결정 모델로, 분류 및 라우팅 작업을 위해 CPU에서 로컬로 실행됩니다.** Jev는 TypeSafe AI가 며칠 앞서 대대적인 언론 보도와 함께 공개한 클라우드 의사결정 모델로, 파라미터 수가 공개되지 않은 폐쇄형 API입니다. 두 모델 모두 텍스트를 생성하는 대신 고정된 답변 후보 목록에 점수를 매깁니다 — 차이점은 각각이 어디에서 실행되는가입니다.',
    snippetBlocks: [
      { type: 'one-sentence', text: 'Julia-1은 CPU에서 실행되는 개방형 144M 파라미터 의사결정 모델이며, Jev는 아키텍처가 공개되지 않은 TypeSafe AI의 폐쇄형 클라우드 전용 의사결정 모델입니다.' },
      { type: 'plain-terms', text: '"의사결정 모델"은 자유 텍스트를 작성하는 대신 사용자가 제공한 짧은 목록에서 최선의 답을 고르는 모델입니다 — Julia-1은 다운로드 후 본인의 컴퓨터에서 무료로 이를 수행하고, Jev는 토큰당 요금을 받으며 클라우드에서 이를 수행합니다.' },
    ],
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-cpu-only'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: 'Julia-1은 클라우드 기반 의사결정 모델 Jev의 로컬 대안입니까?',
        answer: 'Julia-1과 Jev는 모두 자유 텍스트를 생성하는 대신 고정된 답변 후보 목록에 점수를 매기도록 설계된 "의사결정 모델"이지만, 배포 방식의 양극단에 위치합니다. Julia-1은 Supersonic Labs가 만든 144.3M 파라미터 규모의 Apache 2.0 라이선스 모델로, API 키나 토큰당 비용 없이 CPU에서 실행됩니다. Jev는 TypeSafe AI의 폐쇄형 클라우드 API로, 입력 토큰당 요금이 부과되며 파라미터 수나 오픈 가중치가 공개되어 있지 않습니다.',
        bullets: [
          'Julia-1: 144.3M 파라미터, Apache 2.0, CPU에서 로컬 실행, 디스크 용량 약 550 MB',
          'Jev: TypeSafe AI의 클라우드 전용 API, 입력 토큰 100만 개당 $0.042, 아키텍처 비공개',
          '두 모델 모두 텍스트를 생성하는 대신 고정된 답변에 점수를 매김 — 동일한 신흥 카테고리인 "의사결정 모델"',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Julia-1(Supersonic Labs)은 mmBERT-small을 기반으로 구축된 144.3M 파라미터 규모의 Apache 2.0 라이선스 의사결정 모델입니다 — CPU에서 실행되고, API 키가 필요 없으며, 디스크 용량은 약 550 MB입니다',
          'Jev(TypeSafe AI)는 September 15, 2026에 대대적인 언론 보도와 함께 출시된 폐쇄형 클라우드 전용 의사결정 모델입니다 — 가격은 입력 토큰 100만 개당 $0.042이며 아키텍처는 비공개입니다',
          '두 모델 모두 텍스트를 생성하는 대신 2개에서 20개 사이의 후보 답변으로 구성된 고정 목록에 점수를 매깁니다 — 동일한 "의사결정 모델" 카테고리이지만 배포 방식은 정반대입니다',
          '동일한 작업에서 Julia-1과 Jev를 직접 비교한 공개 벤치마크는 아직 없습니다',
        ],
      },
      body1: {
        title: 'Julia-1이란 무엇인가?',
        content: [
          '<strong>Julia-1은 Supersonic Labs가 존스홉킨스대학교 언어음성처리센터(CLSP)의 다국어 인코더인 mmBERT-small 위에 구축한 144.3M 파라미터 규모의 의사결정 모델입니다.</strong> 문맥, 질문, 2개에서 20개 사이의 후보 답변이 주어지면 Julia-1은 각 옵션에 점수를 매기고 최선의 것을 반환합니다 — 자유 텍스트를 생성하지는 않습니다.',
          '이 모델은 mmBERT-small의 어텐션 구조를 그대로 유지합니다. 세 개 층마다 한 층이 전체 입력에 전역적으로 주의를 기울이고, 나머지 층들은 ±64토큰의 로컬 윈도우 내에서만 주의를 기울입니다. 256,000행 규모의 어휘 임베딩이 전체 144M 파라미터 중 98M을 차지하며, 하나의 요청은 실제로 사용되는 토큰에 해당하는 임베딩 행만 읽어들입니다 — 이는 이 모델이 GPU 없이 CPU에서 실행되는 이유 중 하나입니다.',
          'Julia-1은 Apache 2.0 라이선스로 배포되며, 디스크에서 550.5 MiB(FP32 가중치)를 차지하고, 문맥·질문·후보 답변을 합쳐 최대 8,192토큰까지 받아들입니다. 이는 분류, 라우팅 결정, 순서화된 점수 매기기, 예/아니오 판단을 대상으로 합니다 — AI 에이전트가 도구를 호출하거나 티켓을 상위로 넘기기 전에 내리는 고정 선택지 결정과 같은 종류이며, 개방형 생성은 아닙니다.',
          '그 기반 모델인 mmBERT-small 자체도 주목할 만합니다. <a href="https://huggingface.co/jhu-clsp/mmBERT-small" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mmBERT-small\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">JHU CLSP가 훈련시킨</a> 이 모델은 MIT 라이선스 하에 1,800개 이상의 언어(최종 훈련 단계 기준 1,833개 언어)로 학습되었습니다. 이 수치는 mmBERT-small의 사전 학습 범위를 나타내는 것입니다 — Julia-1 자체의 정확도는 MASSIVE 벤치마크에서 52개 로케일에 대해서만 측정되었으므로, 1,800개 언어라는 숫자는 기반 모델에 관한 사실로 받아들이고 Julia-1 자체의 다국어 정확도에 대한 주장으로 받아들이지 마십시오.',
        ],
      },
      body2: {
        title: 'Julia-1의 정확도는 어느 정도인가?',
        content: [
          '<strong>Julia-1은 AG News(4개 레이블 주제 분류)에서 94/100점, DAIR Emotion 벤치마크(6개 레이블)에서 86/100점을 기록했으며, 두 수치 모두 Supersonic Labs가 자체 보고한 것입니다.</strong> 52개 로케일을 다루는 MASSIVE 의도 벤치마크에서는 154,648개 항목 중 110,573개(71.5%)에 정확히 응답했고, 유형화된 결정으로 구성된 혼합 세트에서는 2,000개 중 1,463개(73.15%)를 기록했습니다.',
          '가장 약한 결과는 72개 레이블로 구성된 은행 업무 의도 벤치마크인 Banking77에서 실시한 100개 예제 파일럿 테스트입니다. Julia-1은 87% 기준 점수 대비 64/100점을 기록했습니다. <a href="https://huggingface.co/SupersonicLabs/Julia-1" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Julia-1\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Supersonic Labs 자체 모델 카드</a>는 "100개 예제 파일럿은 고무적인 신호일 뿐 보장은 아니다"라고 명시하며, Banking77의 72개 카테고리와 같이 길고 모호한 레이블 세트를 Julia-1의 현재 약점으로 지목하고 있습니다.',
          '이 수치들 중 어느 것도 발표 시점 기준으로 Supersonic Labs 자체 모델 카드 외부에서 독립적으로 재현된 바 없습니다 — 제3자의 검증이 있기 전까지는 벤더가 보고한 수치로 취급해야 합니다.',
        ],
        columns: ['벤치마크', '레이블 수', '점수', '출처'],
        rows: [
          { '벤치마크': 'AG News', '레이블 수': '4', '점수': '94/100', '출처': '벤더 보고' },
          { '벤치마크': 'DAIR Emotion', '레이블 수': '6', '점수': '86/100', '출처': '벤더 보고' },
          { '벤치마크': 'MASSIVE (52개 로케일)', '레이블 수': '의도 세트', '점수': '71.5% (110,573/154,648)', '출처': '벤더 보고' },
          { '벤치마크': 'Banking77 (파일럿)', '레이블 수': '72', '점수': '64/100 vs. 87% 기준', '출처': '벤더 파일럿, 100개 예제' },
        ],
      },
      decision: {
        id: 'local-vs-cloud',
        title: 'Julia-1을 로컬에서 실행해야 할까, Jev의 클라우드 API를 사용해야 할까?',
        content: [
          '<strong>TypeSafe AI가 September 15, 2026에 출시한 Jev는 Julia-1의 로컬 접근 방식에 대응하는 클라우드 버전이며, 훨씬 더 큰 주목을 받았습니다.</strong> 출시 영상은 X에서 약 40 million회의 조회수를 기록했고, TypeSafe AI는 발표 시점을 전후해 DCVC가 주도한 $40 million 규모의 시드 라운드를 유치했으며, <a href="https://www.bloomberg.com/news/articles/2026-09-25/jev-an-ai-model-that-can-t-chat-takes-on-bigger-rivals" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">블룸버그 보도</a>에 따르면 투자자들은 그 이후 $10 billion을 넘는 기업 가치로 이 회사에 접근해 왔습니다.',
          'Jev는 전직 OpenAI 연구원이 개발했으며 "System 1" 모델로 포지셔닝되어 있습니다. 텍스트가 아니라 라우팅, 점수 매기기, 트리아지, 모더레이션을 위한 유형화되고 보정된 결정을 반환하며, 이는 Julia-1과 동일한 작업 카테고리입니다. Julia-1과 달리 Jev는 <a href="https://www.digitalocean.com/resources/articles/what-is-jev" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Jev\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">DigitalOcean의 Model Catalog</a>와 같은 파트너를 통한 클라우드 API로만 제공됩니다. TypeSafe AI는 Jev의 파라미터 수나 모델 아키텍처를 공개하지 않았으며, 외부 관찰자들은 그것이 오픈 가중치 기반 위에 구축된 트랜스포머일 것이라고 확인되지 않은 채 추측할 뿐입니다.',
          '가격 책정은 다운로드 후 무료가 아니라 토큰당 방식입니다. Jev는 입력 토큰 100만 개당 $0.042를 청구하며 출력 토큰은 현재 무료이고, TypeSafe AI는 표준 클라우드 API 조건에서 70–500밀리초의 종단 간 지연 시간을 보고하고 있습니다. Jev와 Julia-1을 동일한 작업에서 직접 비교한 공개 벤치마크는 아직 없습니다 — 두 모델은 동일한 작업 세트에서 평가된 적이 없습니다.',
          '의사결정 모델 카테고리 외의 CPU 전용 로컬 구성에 대해서는 <a href="/ko/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU 전용 머신을 위한 최고의 Ollama 모델</a>을 참고하십시오.',
        ],
        decisionBlock: {
          title: '로컬(Julia-1)인가, 클라우드(Jev)인가?',
          localIf: [
            '라우팅 또는 분류 데이터가 자체 인프라를 벗어날 수 없는 경우',
            '약 550 MB의 일회성 다운로드 이후 요청당 비용을 0으로 만들고 싶은 경우',
            '카테고리가 Julia-1에서 실제로 측정된 범위, 즉 단순한 주제/감정 레이블과 일치하고 길고 모호한 레이블 세트가 아닌 경우',
          ],
          cloudIf: [
            '모델을 직접 호스팅하거나 업데이트할 필요 없는 관리형 API를 원하는 경우',
            '입력 토큰 100만 개당 $0.042(출력 토큰 무료)의 고정 가격이 사용량에 맞는 경우',
            '오픈 가중치나 공개된 아키텍처가 필요하지 않은 경우',
          ],
          quick: [
            '둘 다 챗봇이 아니라 의사결정 모델입니다 — 어느 쪽도 자유 텍스트를 생성하지 않습니다',
            'Julia-1: 오픈 가중치(Apache 2.0), CPU에서 실행, 144.3M 파라미터',
            'Jev: 폐쇄형, 클라우드 전용, 파라미터 수 비공개',
          ],
        },
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '"의사결정 모델"이란 무엇이며, LLM과 어떻게 다릅니까?',
            a: '의사결정 모델은 문맥, 질문, 고정된 후보 답변 목록을 입력받아 이를 채점하거나 그중 하나를 선택합니다 — 결코 개방형 텍스트를 생성하지 않습니다. 범용 LLM도 이 작업을 수행할 수 있지만, 호출할 때마다 텍스트 응답을 생성·포맷·파싱해야 하므로 토큰 비용이 더 들고 지연 시간이 늘어납니다. Julia-1과 Jev는 모두 이 더 좁은 작업을 위해 특별히 구축된 의사결정 모델입니다.',
          },
          {
            q: 'Julia-1이 티켓 라우팅을 위한 LLM 호출을 대체할 수 있습니까?',
            a: '고정된 라우팅 카테고리 세트에 대해서는 원칙적으로 가능합니다 — 이것이 Supersonic Labs가 이 모델을 구축한 목적입니다. 자체 벤치마크에 따르면 4개 레이블 주제 분류(AG News)에서는 94%의 정확도를 보였지만 72개 레이블의 Banking77 파일럿에서는 64/100점에 그쳤으므로, 정확도는 라우팅 대상 카테고리 수에 크게 좌우됩니다. 프로덕션 환경의 LLM 호출을 대체하기 전에 자신의 카테고리 목록으로 직접 테스트해 보십시오.',
          },
          {
            q: 'Julia-1은 무료로 사용할 수 있습니까?',
            a: '예 — Apache 2.0 라이선스로 배포되므로 요청당 비용 없이 다운로드하여 실행할 수 있습니다. 자체 컴퓨팅 비용은 여전히 부담해야 하지만, Julia-1은 GPU가 필요 없으며 CPU에서 실행됩니다.',
          },
          {
            q: 'Jev도 Julia-1처럼 로컬에서 실행됩니까?',
            a: '아니요. Jev는 DigitalOcean의 Model Catalog와 같은 파트너를 통한 클라우드 API로만 제공되며, TypeSafe AI는 가중치나 아키텍처를 공개하지 않았습니다.',
          },
          {
            q: 'Jev를 사용하는 데 드는 비용은 얼마입니까?',
            a: 'TypeSafe AI는 September 2026 출시 기준으로 Jev의 가격을 입력 토큰 100만 개당 $0.042로 책정했으며, 출력 토큰은 현재 무료입니다.',
          },
          {
            q: 'mmBERT-small이란 무엇이며, Julia-1과 동일한 모델입니까?',
            a: 'mmBERT-small은 Julia-1이 기반으로 삼은 Johns Hopkins CLSP의 140M 파라미터 규모 다국어 인코더로, MIT 라이선스 하에 1,800개 이상의 언어로 학습되었습니다. Julia-1은 그 위에 의사결정 점수 매기기 헤드를 추가한 것으로, Supersonic Labs가 별도로 Apache 2.0 라이선스로 출시한 모델이며, 전체 1,800개 이상이 아니라 52개 로케일에서 평가되었습니다.',
          },
          {
            q: '실제 작업에서 Julia-1의 정확도는 어느 정도입니까?',
            a: '작업에 따라 다릅니다. AG News에서는 94/100점, DAIR Emotion에서는 86/100점, MASSIVE의 52개 로케일에서는 71.5%, 그리고 Banking77의 100개 예제 파일럿에서는 87% 기준 점수 대비 64/100점을 기록했습니다. 이 모든 수치는 Supersonic Labs가 자체 보고한 것이며 독립적으로 재현된 바 없습니다.',
          },
          {
            q: 'Julia-1과 Jev를 동일한 벤치마크에서 직접 비교한 사례가 있습니까?',
            a: '현재까지 공개적으로는 없습니다. 두 모델은 서로 다른 공급업체에서 나왔으며 동일한 "의사결정 모델" 카테고리를 대상으로 하지만, 공유된 평가 세트에서 직접 맞대결 테스트를 거친 적은 없습니다.',
          },
        ],
      },
    },
  },
}
