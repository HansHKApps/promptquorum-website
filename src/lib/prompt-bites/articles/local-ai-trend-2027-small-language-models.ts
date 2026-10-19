import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-en.webp',
    title: 'Local AI Trends 2027, Part 3 of 10: Small Models Take Over the Boring Jobs',
    seoTitle: 'Local AI Trends 2027, Part 3: Small Models Take Over | Prompt Bites',
    metaDescription: 'Gartner expects small task-specific models to see 3x the usage of general LLMs by 2027, and Gemma 4 and Qwen3.5 now make that practical on local hardware.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Engineering leaders planning AI infrastructure budgets for narrow, high-volume automation tasks',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>This is Part 3 of 10 in the Local AI Trends 2027 series: Gartner forecasts that by 2027 organizations will use small, task-specific models at least three times more than general-purpose large language models, and the 2026 open-model releases make that pattern practical on local hardware.</strong> This is a deployment-pattern shift, not a capability shift: it is about which jobs get a dedicated small model at scale, not about small models suddenly matching large-model intelligence (that angle is covered in our separate <a href="/local-llms/future-of-local-llms">Future of Local LLMs</a> analysis). See also Part 1, <a href="/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>, Part 6, <a href="/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>, and Part 8, <a href="/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>.',
    quickAnswerTop: {
      en: {
        question: 'Why are small language models expected to take over narrow enterprise tasks by 2027?',
        answer: 'Because at high request volume, running a narrow, repetitive task — classification, extraction, intent routing — through one large general-purpose model costs and delays more per request than a small model tuned for exactly that task. Gartner predicts that by 2027 organizations will use small, task-specific models at least three times more than general-purpose LLMs, and 2026 open models such as Gemma 4 (E2B and E4B) and Qwen3.5 (0.8B to 9B), both under Apache 2.0, run on consumer hardware.',
        bullets: [
          'Deployment pattern, not intelligence pattern — the shift is about scale and cost, not about small models matching large-model quality',
          'Gartner (April 2025): by 2027, at least 3x more usage of small task-specific models than general-purpose LLMs — a forecast, not a measured result',
          'Supply arrived in 2026: Gemma 4 (2 April 2026) and the Qwen3.5 small models are Apache 2.0 and run locally',
          'Target workloads: classification, extraction, routing, single-purpose agents — not open-ended chat',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner forecasts that by 2027 organizations will use small, task-specific models at least three times more than general-purpose LLMs — a forecast, not a measured result',
          'The driver is economics at volume, not model intelligence — a small model tuned for one narrow job costs less and responds faster per request than a general large model at scale',
          'The supply side became concrete in 2026: Gemma 4 (2 April 2026) and the Qwen3.5 small models (0.8B to 9B) are Apache 2.0 and run on local hardware',
          'A 2025 research paper makes the engineering case: small models are powerful enough and more economical for many agentic subtasks — a research position, not market data',
          'This is a different trend from small models matching old large-model quality — see the separate Future of Local LLMs analysis for that angle',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner forecasts that by 2027 organizations will use small, task-specific models at least three times more than general-purpose LLMs, and 2026 open models such as Gemma 4 and Qwen3.5 make that practical on local hardware.' },
          { type: 'plain-terms', text: 'In plain terms: instead of one big model answering every kind of request, companies are expected to run several small, cheap, specialized models — each doing one narrow job really fast and really cheap at scale.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: 'Why Does Request Volume Change Which Model Makes Sense?',
        content: [
          '**A single narrow request barely matters, but a narrow task run millions of times per month adds up fast.** A support-ticket classifier, a document-field extractor, or a request router are examples of narrow, repetitive, high-volume tasks — the kind that used to get bundled into a general-purpose LLM API call because it was the fastest way to ship. At low volume, that bundling is fine. At production scale, every one of those requests still pays the same per-call cost and latency as a request that actually needed the large model\'s full general capability.',
          '**Gartner puts a number on the pattern.** Its April 2025 forecast says that by 2027 organizations will use small, task-specific AI models at least three times more, by usage volume, than general-purpose large language models. Gartner\'s reasoning is that general-purpose models lose accuracy on tasks that need specific business context, while smaller models respond faster and cost less to run and maintain; it expects companies to build them with retrieval-augmented generation or fine-tuning on their own data. This is a forecast, not a measured result, and we found no independent measurement of the 3x ratio yet.',
          'This is distinct from the question of whether small models are now as capable as the larger models of a few years ago — a real and separate trend covered in the "Trend 1" section of our <a href="/local-llms/future-of-local-llms">Future of Local LLMs</a> analysis. That trend is about model quality per parameter improving. This trend is about deployment architecture: which jobs get their own dedicated small model, independent of how smart that model is relative to older large models.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: 'What Does a Small-Model Deployment Pattern Look Like in Practice?',
        content: [
          '**In practice, this pattern looks like several small models running locally, each handling one narrow job, coordinated by a lightweight router rather than a single large model handling every request type.** A classification model sorts incoming tickets or documents; an extraction model pulls structured fields out of unstructured text; a routing model decides which downstream system or team handles a request. None of these needs the broad general knowledge of a large frontier model — each needs to be reliably good at one narrow, well-defined task.',
          '**The supply side moved in 2026.** Google released Gemma 4 on 2 April 2026: effective-2B (E2B) and effective-4B (E4B) edge models that it says run fully offline on phones and small boards, plus larger models, all under Apache 2.0. Alibaba\'s Qwen team published the Qwen3.5 small models from 0.8B to 9B parameters under Apache-2.0; the 0.8B model card names task-specific fine-tuning as an intended use, and Hugging Face\'s Gemma 4 launch post lists fine-tuning paths such as TRL, PEFT and Unsloth Studio. The practical benefit at volume: smaller models run cheaper per request on local or on-premises hardware, respond faster since there is no round trip to an external API, and can be updated or replaced independently of one another without touching the rest of the pipeline.',
          'A June 2025 research paper, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (latest revision September 2026), makes the same case from the engineering side: small models are "sufficiently powerful, inherently more suitable, and necessarily more economical" for many repetitive subtasks inside agent systems, with larger models called only where broad conversation is needed. That is a research position, not a market measurement.',
          'The tradeoff to plan for is added operational complexity — running and maintaining several small models instead of one API integration requires more infrastructure and monitoring. Organizations without existing MLOps capacity may find a single large-model API simpler to operate even at higher per-request cost, at least until volume justifies the added complexity. For the hardware side of running multiple small models locally, see Part 2, <a href="/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is this the same trend as "small models are now as good as old large models"?',
            a: 'No — that is a separate trend about model quality per parameter improving over time, covered in the "Trend 1" section of our Future of Local LLMs analysis. This trend is about deployment economics: which narrow, high-volume tasks get their own dedicated small model at production scale, independent of how that model\'s raw quality compares to older large models.',
          },
          {
            q: 'What kinds of tasks are analysts describing as moving to small local models?',
            a: 'Narrow, repetitive, high-volume tasks — classification, structured-data extraction, request routing, and single-purpose internal agents are the examples most often cited in enterprise AI deployment forecasts. Open-ended conversational tasks are not the target of this shift.',
          },
          {
            q: 'Who forecasts this shift, and how firm is the evidence?',
            a: 'Gartner published the clearest numeric forecast (April 2025: at least three times more usage of small task-specific models than general-purpose LLMs by 2027), and a 2025 arXiv paper argues the engineering case. Both are forecasts or position papers, not measured adoption data.',
          },
          {
            q: 'Does this mean large general-purpose models become less important?',
            a: 'Not necessarily — the forecasts describe large models being reserved for genuinely open-ended or complex tasks, while narrow, high-volume tasks get peeled off to smaller dedicated models. It is a division of labor between model sizes, not a replacement of large models across the board.',
          },
          {
            q: 'Which small models make this practical on local hardware today?',
            a: 'Open examples from 2026 include Gemma 4 E2B and E4B (Apache 2.0, 2 April 2026) and the Qwen3.5 small models from 0.8B to 9B (Apache-2.0). This article does not rank them: evaluate on your own task data, and for the hardware side see <a href="/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">Part 2, AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Gartner: small task-specific AI models forecast (9 April 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — source of the 3x usage forecast',
          '[Google: Gemma 4 launch post (2 April 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — sizes, Apache 2.0, on-device claims',
          '[Qwen3.5-0.8B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, 262,144-token context, intended use',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — the engineering argument',
        ],
      },
    },
  },
  de: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-de.webp',
    title: 'Local AI Trends 2027, Teil 3 von 10: Kleine Modelle übernehmen die Routineaufgaben',
    seoTitle: 'Local AI Trends 2027, Teil 3: Kleine Modelle übernehmen | Prompt Bites',
    metaDescription: 'Gartner erwartet bis 2027 dreimal mehr Nutzung kleiner, aufgabenspezifischer Modelle als allgemeiner LLMs; Gemma 4 und Qwen3.5 machen das lokal praktikabel.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Engineering-Leiter, die KI-Infrastrukturbudgets für enge, hochvolumige Automatisierungsaufgaben planen',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Dies ist Teil 3 von 10 der Serie Local AI Trends 2027: Gartner prognostiziert, dass Organisationen bis 2027 kleine, aufgabenspezifische Modelle mindestens dreimal so häufig einsetzen wie allgemeine Large Language Models, und die offenen Modelle des Jahres 2026 machen dieses Muster auf lokaler Hardware praktikabel.</strong> Es ist eine Verschiebung des Bereitstellungsmusters, keine Verschiebung der Fähigkeiten: Es geht darum, welche Aufgaben im großen Maßstab ein eigenes kleines Modell erhalten — nicht darum, dass kleine Modelle plötzlich die Intelligenz großer Modelle erreichen (dieser Aspekt wird in unserer separaten <a href="/de/local-llms/future-of-local-llms">Future-of-Local-LLMs</a>-Analyse behandelt). Siehe auch Teil 1, <a href="/de/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>, Teil 6, <a href="/de/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>, und Teil 8, <a href="/de/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>.',
    quickAnswerTop: {
      de: {
        question: 'Warum sollen kleine Sprachmodelle bis 2027 enge Unternehmensaufgaben übernehmen?',
        answer: 'Weil bei hohem Anfragevolumen eine enge, wiederkehrende Aufgabe — Klassifizierung, Extraktion, Intent-Routing — über ein großes allgemeines Modell pro Anfrage mehr kostet und länger dauert als mit einem kleinen, genau dafür angepassten Modell. Gartner prognostiziert, dass Organisationen bis 2027 kleine, aufgabenspezifische Modelle mindestens dreimal so häufig einsetzen wie allgemeine LLMs; 2026 veröffentlichte offene Modelle wie Gemma 4 (E2B und E4B) und Qwen3.5 (0,8B bis 9B) laufen unter Apache 2.0 auf Consumer-Hardware.',
        bullets: [
          'Bereitstellungsmuster, kein Intelligenzmuster — der Wandel betrifft Skalierung und Kosten, nicht die Angleichung kleiner Modelle an große Modelle',
          'Gartner (April 2025): bis 2027 mindestens dreimal so viel Nutzung kleiner aufgabenspezifischer Modelle wie allgemeiner LLMs — eine Prognose, kein Messergebnis',
          'Das Angebot ist 2026 da: Gemma 4 (2. April 2026) und die kleinen Qwen3.5-Modelle stehen unter Apache 2.0 und laufen lokal',
          'Zielworkloads: Klassifizierung, Extraktion, Routing, Einzweck-Agenten — kein offener Chat',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner prognostiziert, dass Organisationen bis 2027 kleine, aufgabenspezifische Modelle mindestens dreimal so häufig einsetzen wie allgemeine LLMs — eine Prognose, kein Messergebnis',
          'Der Treiber ist die Ökonomie bei hohem Volumen, nicht die Modellintelligenz — ein für eine enge Aufgabe angepasstes kleines Modell kostet pro Anfrage weniger und antwortet schneller als ein großes allgemeines Modell im großen Maßstab',
          'Das Angebot wurde 2026 konkret: Gemma 4 (2. April 2026) und die kleinen Qwen3.5-Modelle (0,8B bis 9B) stehen unter Apache 2.0 und laufen auf lokaler Hardware',
          'Ein Forschungspapier von 2025 liefert das technische Argument: Kleine Modelle seien für viele agentische Teilaufgaben leistungsfähig genug und wirtschaftlicher — eine Forschungsposition, keine Marktdaten',
          'Dies ist ein anderer Trend als die Angleichung kleiner Modelle an die Qualität alter großer Modelle — siehe dazu die separate Future-of-Local-LLMs-Analyse',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner prognostiziert, dass Organisationen bis 2027 kleine, aufgabenspezifische Modelle mindestens dreimal so häufig einsetzen wie allgemeine LLMs, und offene Modelle von 2026 wie Gemma 4 und Qwen3.5 machen das auf lokaler Hardware praktikabel.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Statt ein großes Modell für jede Art von Anfrage einzusetzen, sollen Unternehmen mehrere kleine, günstige, spezialisierte Modelle betreiben — jedes erledigt eine enge Aufgabe im großen Maßstab sehr schnell und sehr günstig.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: 'Warum verändert das Anfragevolumen, welches Modell sinnvoll ist?',
        content: [
          '**Eine einzelne enge Anfrage spielt kaum eine Rolle, aber eine enge Aufgabe, die Millionen Mal pro Monat ausgeführt wird, summiert sich schnell.** Ein Support-Ticket-Klassifizierer, ein Feld-Extraktor für Dokumente oder ein Anfragen-Router sind Beispiele für enge, wiederkehrende, hochvolumige Aufgaben — die Art, die früher in einen allgemeinen LLM-API-Aufruf gebündelt wurde, weil das der schnellste Weg zur Umsetzung war. Bei geringem Volumen ist diese Bündelung unproblematisch. Im Produktionsmaßstab zahlt aber jede dieser Anfragen weiterhin die gleichen Kosten und die gleiche Latenz pro Aufruf wie eine Anfrage, die tatsächlich die volle allgemeine Fähigkeit des großen Modells benötigte.',
          '**Gartner beziffert das Muster.** Die Prognose vom April 2025 besagt, dass Organisationen bis 2027 kleine, aufgabenspezifische KI-Modelle nach Nutzungsvolumen mindestens dreimal so häufig einsetzen werden wie allgemeine Large Language Models. Gartners Begründung: Allgemeine Modelle verlieren bei Aufgaben mit spezifischem Geschäftskontext an Genauigkeit, während kleinere Modelle schneller antworten und im Betrieb und in der Wartung weniger kosten; Gartner erwartet, dass Unternehmen sie mit Retrieval-Augmented Generation oder Fine-Tuning auf eigenen Daten aufbauen. Das ist eine Prognose, kein Messergebnis, und wir haben bislang keine unabhängige Messung des Faktors 3 gefunden.',
          'Das unterscheidet sich von der Frage, ob kleine Modelle heute so leistungsfähig sind wie die größeren Modelle von vor einigen Jahren — ein echter, separater Trend, der im Abschnitt „Trend 1" unserer <a href="/de/local-llms/future-of-local-llms">Future-of-Local-LLMs</a>-Analyse behandelt wird. Jener Trend betrifft die steigende Modellqualität pro Parameter. Dieser Trend betrifft die Bereitstellungsarchitektur: welche Aufgaben ein eigenes, dediziertes kleines Modell erhalten — unabhängig davon, wie klug dieses Modell im Vergleich zu älteren großen Modellen ist.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: 'Wie sieht ein Bereitstellungsmuster mit kleinen Modellen in der Praxis aus?',
        content: [
          '**In der Praxis sieht dieses Muster nach mehreren kleinen, lokal laufenden Modellen aus, von denen jedes eine enge Aufgabe übernimmt, koordiniert von einem leichten Router — statt einem einzigen großen Modell, das jeden Anfragetyp bearbeitet.** Ein Klassifizierungsmodell sortiert eingehende Tickets oder Dokumente; ein Extraktionsmodell zieht strukturierte Felder aus unstrukturiertem Text; ein Routing-Modell entscheidet, welches nachgelagerte System oder Team eine Anfrage bearbeitet. Keines davon benötigt das breite allgemeine Wissen eines großen Frontier-Modells — jedes muss lediglich zuverlässig gut in einer engen, klar definierten Aufgabe sein.',
          '**Das Angebot hat sich 2026 bewegt.** Google hat Gemma 4 am 2. April 2026 veröffentlicht: Edge-Modelle mit effektiv 2B (E2B) und effektiv 4B (E4B) Parametern, die laut Google vollständig offline auf Smartphones und kleinen Boards laufen, dazu größere Modelle — alle unter Apache 2.0. Das Qwen-Team von Alibaba hat die kleinen Qwen3.5-Modelle von 0,8B bis 9B Parametern unter Apache-2.0 veröffentlicht; die Modellkarte des 0,8B-Modells nennt aufgabenspezifisches Fine-Tuning als vorgesehenen Einsatz, und der Gemma-4-Launchbeitrag von Hugging Face listet Fine-Tuning-Wege wie TRL, PEFT und Unsloth Studio. Der praktische Vorteil bei hohem Volumen: Kleinere Modelle laufen pro Anfrage günstiger auf lokaler oder On-Premises-Hardware, antworten schneller, weil keine Runde zu einer externen API nötig ist, und lassen sich unabhängig voneinander aktualisieren oder austauschen, ohne den Rest der Pipeline anzufassen.',
          'Ein Forschungspapier vom Juni 2025, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (jüngste Überarbeitung im September 2026), argumentiert von der technischen Seite aus ähnlich: Kleine Modelle seien für viele wiederkehrende Teilaufgaben in Agentensystemen „hinreichend leistungsfähig, von Natur aus besser geeignet und zwangsläufig wirtschaftlicher“; größere Modelle würden nur dort aufgerufen, wo breite Gesprächsfähigkeit nötig ist. Das ist eine Forschungsposition, keine Marktmessung.',
          'Der einzuplanende Nachteil ist zusätzliche betriebliche Komplexität — mehrere kleine Modelle zu betreiben und zu pflegen statt einer einzigen API-Integration erfordert mehr Infrastruktur und Monitoring. Organisationen ohne bestehende MLOps-Kapazität finden eine einzige API mit großem Modell möglicherweise einfacher zu betreiben, selbst bei höheren Kosten pro Anfrage — zumindest bis das Volumen die zusätzliche Komplexität rechtfertigt. Zur Hardwareseite des lokalen Betriebs mehrerer kleiner Modelle siehe Teil 2, <a href="/de/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist das derselbe Trend wie „kleine Modelle sind heute so gut wie alte große Modelle"?',
            a: 'Nein — das ist ein separater Trend zur steigenden Modellqualität pro Parameter über die Zeit, behandelt im Abschnitt „Trend 1" unserer Future-of-Local-LLMs-Analyse. Dieser Trend betrifft die Bereitstellungsökonomie: welche engen, hochvolumigen Aufgaben im Produktionsmaßstab ein eigenes dediziertes kleines Modell erhalten, unabhängig davon, wie die reine Qualität dieses Modells im Vergleich zu älteren großen Modellen ausfällt.',
          },
          {
            q: 'Welche Art von Aufgaben beschreiben Analysten als Verlagerung zu kleinen lokalen Modellen?',
            a: 'Enge, wiederkehrende, hochvolumige Aufgaben — Klassifizierung, strukturierte Datenextraktion, Anfragen-Routing und interne Einzweck-Agenten sind die am häufigsten genannten Beispiele in Prognosen zur Einführung von Unternehmens-KI. Offene Konversationsaufgaben sind nicht das Ziel dieses Wandels.',
          },
          {
            q: 'Wer prognostiziert diesen Wandel, und wie belastbar ist die Evidenz?',
            a: 'Gartner hat die klarste Zahlenprognose veröffentlicht (April 2025: bis 2027 mindestens dreimal so viel Nutzung kleiner aufgabenspezifischer Modelle wie allgemeiner LLMs), und ein arXiv-Paper von 2025 begründet den technischen Fall. Beides sind Prognosen bzw. Positionspapiere, keine gemessenen Einführungsdaten.',
          },
          {
            q: 'Bedeutet das, große allgemeine Modelle werden weniger wichtig?',
            a: 'Nicht unbedingt — die Prognosen beschreiben, dass große Modelle für wirklich offene oder komplexe Aufgaben reserviert bleiben, während enge, hochvolumige Aufgaben an kleinere dedizierte Modelle abgegeben werden. Es ist eine Arbeitsteilung zwischen Modellgrößen, keine flächendeckende Ablösung großer Modelle.',
          },
          {
            q: 'Welche kleinen Modelle machen das heute auf lokaler Hardware praktikabel?',
            a: 'Offene Beispiele von 2026 sind Gemma 4 E2B und E4B (Apache 2.0, 2. April 2026) sowie die kleinen Qwen3.5-Modelle von 0,8B bis 9B (Apache-2.0). Dieser Artikel rankt sie nicht: Testen Sie mit Ihren eigenen Aufgabendaten, und zur Hardware siehe <a href="/de/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">Teil 2, AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Gartner: Prognose zu kleinen aufgabenspezifischen KI-Modellen (9. April 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — Quelle der Prognose „dreimal mehr Nutzung“',
          '[Google: Gemma-4-Launchbeitrag (2. April 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — Größen, Apache 2.0, Aussagen zum Einsatz auf Geräten',
          '[Qwen3.5-0.8B-Modellkarte (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, Kontext von 262.144 Token, vorgesehener Einsatz',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — das technische Argument',
        ],
      },
    },
  },
  fr: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-fr.webp',
    title: "Tendances IA locale 2027, partie 3 sur 10 : les petits modèles reprennent les tâches répétitives",
    seoTitle: "Tendances IA locale 2027, partie 3 : petits modèles | Prompt Bites",
    metaDescription: 'Gartner prévoit d\'ici 2027 trois fois plus d\'usage des petits modèles spécialisés que des LLM généralistes ; Gemma 4 et Qwen3.5 le rendent possible en local.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Responsables d'ingénierie planifiant des budgets d'infrastructure IA pour des tâches d'automatisation étroites et à fort volume",
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ceci est la partie 3 sur 10 de la série Tendances IA locale 2027 : Gartner prévoit que, d\'ici 2027, les organisations utiliseront des petits modèles spécialisés par tâche au moins trois fois plus que des grands modèles de langage généralistes, et les modèles ouverts publiés en 2026 rendent ce schéma réalisable sur du matériel local.</strong> Il s\'agit d\'un changement de modèle de déploiement, pas d\'un changement de capacité : la question est de savoir quelles tâches obtiennent un petit modèle dédié à grande échelle, et non si les petits modèles égalent soudain l\'intelligence des grands modèles (cet aspect est traité dans notre analyse distincte <a href="/fr/local-llms/future-of-local-llms">Future of Local LLMs</a>). Voir aussi la partie 1, <a href="/fr/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>, la partie 6, <a href="/fr/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>, et la partie 8, <a href="/fr/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>.',
    quickAnswerTop: {
      fr: {
        question: "Pourquoi les petits modèles de langage devraient-ils reprendre les tâches étroites en entreprise d'ici 2027 ?",
        answer: 'Parce qu\'à fort volume de requêtes, faire passer une tâche étroite et répétitive — classification, extraction, routage d\'intention — par un grand modèle généraliste coûte plus cher et prend plus de temps par requête qu\'un petit modèle adapté précisément à cette tâche. Gartner prévoit que d\'ici 2027 les organisations utiliseront des petits modèles spécialisés au moins trois fois plus que des LLM généralistes, et les modèles ouverts publiés en 2026, comme Gemma 4 (E2B et E4B) et Qwen3.5 (de 0.8B à 9B), sous licence Apache 2.0, tournent sur du matériel grand public.',
        bullets: [
          'Schéma de déploiement, pas schéma d\'intelligence — le changement porte sur l\'échelle et le coût, pas sur l\'égalité de qualité entre petits et grands modèles',
          'Gartner (avril 2025) : d\'ici 2027, au moins trois fois plus d\'usage de petits modèles spécialisés que de LLM généralistes — une prévision, pas un résultat mesuré',
          'L\'offre existe en 2026 : Gemma 4 (2 avril 2026) et les petits modèles Qwen3.5 sont sous Apache 2.0 et tournent en local',
          'Charges cibles : classification, extraction, routage, agents à usage unique — pas le chat ouvert',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner prévoit que d\'ici 2027 les organisations utiliseront des petits modèles spécialisés par tâche au moins trois fois plus que des LLM généralistes — une prévision, pas un résultat mesuré',
          'Le moteur est l\'économie à grand volume, pas l\'intelligence des modèles — un petit modèle adapté à une tâche étroite coûte moins cher et répond plus vite par requête qu\'un grand modèle généraliste à grande échelle',
          'L\'offre est devenue concrète en 2026 : Gemma 4 (2 avril 2026) et les petits modèles Qwen3.5 (de 0.8B à 9B) sont sous Apache 2.0 et tournent sur du matériel local',
          'Un article de recherche de 2025 défend l\'argument technique : les petits modèles seraient assez puissants et plus économiques pour de nombreuses sous-tâches d\'agents — une position de recherche, pas des données de marché',
          'C\'est une tendance différente de celle où les petits modèles égalent la qualité des anciens grands modèles — voir l\'analyse distincte Future of Local LLMs',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner prévoit que d\'ici 2027 les organisations utiliseront des petits modèles spécialisés au moins trois fois plus que des LLM généralistes, et les modèles ouverts de 2026 comme Gemma 4 et Qwen3.5 le rendent réalisable sur du matériel local.' },
          { type: 'plain-terms', text: "En clair : au lieu d'un grand modèle répondant à tous les types de requêtes, les entreprises devraient exploiter plusieurs petits modèles spécialisés et peu coûteux — chacun effectuant une tâche étroite très rapidement et à très faible coût à grande échelle." },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: "Pourquoi le volume de requêtes change-t-il le modèle le plus adapté ?",
        content: [
          '**Une seule requête étroite compte à peine, mais une tâche étroite exécutée des millions de fois par mois s\'accumule rapidement.** Un classificateur de tickets de support, un extracteur de champs de documents ou un routeur de requêtes sont des exemples de tâches étroites, répétitives et à fort volume — le type de tâche autrefois regroupée dans un appel API LLM généraliste parce que c\'était le moyen le plus rapide de livrer. À faible volume, ce regroupement fonctionne bien. À l\'échelle de production, chacune de ces requêtes paie toujours le même coût et la même latence par appel qu\'une requête ayant réellement besoin de la pleine capacité généraliste du grand modèle.',
          '**Gartner chiffre ce schéma.** Sa prévision d\'avril 2025 indique que, d\'ici 2027, les organisations utiliseront des modèles d\'IA petits et spécialisés par tâche au moins trois fois plus, en volume d\'usage, que des grands modèles de langage généralistes. Selon Gartner, les modèles généralistes perdent en précision sur les tâches qui exigent un contexte métier précis, tandis que les modèles plus petits répondent plus vite et coûtent moins cher à exploiter et à maintenir ; Gartner s\'attend à ce que les entreprises les construisent avec la génération augmentée par récupération (RAG) ou le fine-tuning sur leurs propres données. C\'est une prévision, pas un résultat mesuré, et nous n\'avons pas trouvé à ce jour de mesure indépendante du ratio de 3.',
          'Cela diffère de la question de savoir si les petits modèles sont désormais aussi capables que les modèles plus grands d\'il y a quelques années — une tendance réelle et distincte traitée dans la section « Tendance 1 » de notre analyse <a href="/fr/local-llms/future-of-local-llms">Future of Local LLMs</a>. Cette tendance concerne l\'amélioration de la qualité des modèles par paramètre. Cette tendance-ci concerne l\'architecture de déploiement : quelles tâches obtiennent leur propre petit modèle dédié, indépendamment de l\'intelligence de ce modèle par rapport aux anciens grands modèles.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: "À quoi ressemble ce modèle de déploiement de petits modèles en pratique ?",
        content: [
          '**En pratique, ce modèle ressemble à plusieurs petits modèles fonctionnant localement, chacun gérant une tâche étroite, coordonnés par un routeur léger plutôt que par un seul grand modèle traitant chaque type de requête.** Un modèle de classification trie les tickets ou documents entrants ; un modèle d\'extraction extrait des champs structurés d\'un texte non structuré ; un modèle de routage décide quel système ou équipe en aval traite une requête. Aucun d\'eux n\'a besoin des connaissances générales étendues d\'un grand modèle de pointe — chacun doit simplement être fiable sur une tâche étroite et bien définie.',
          '**L\'offre a évolué en 2026.** Google a publié Gemma 4 le 2 avril 2026 : des modèles edge de 2B effectifs (E2B) et 4B effectifs (E4B) qui, selon Google, fonctionnent entièrement hors ligne sur smartphones et petites cartes, ainsi que des modèles plus grands, tous sous Apache 2.0. L\'équipe Qwen d\'Alibaba a publié les petits modèles Qwen3.5 de 0.8B à 9B paramètres sous Apache-2.0 ; la fiche du modèle 0.8B cite le fine-tuning spécifique à une tâche parmi les usages prévus, et l\'article de lancement de Gemma 4 sur Hugging Face énumère des voies de fine-tuning comme TRL, PEFT et Unsloth Studio. L\'avantage pratique à fort volume : les petits modèles coûtent moins cher par requête sur du matériel local ou sur site, répondent plus vite faute d\'aller-retour vers une API externe, et peuvent être mis à jour ou remplacés indépendamment les uns des autres sans toucher au reste du pipeline.',
          'Un article de recherche de juin 2025, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (dernière révision en septembre 2026), défend la même thèse côté ingénierie : les petits modèles seraient « suffisamment puissants, intrinsèquement mieux adaptés et nécessairement plus économiques » pour de nombreuses sous-tâches répétitives des systèmes d\'agents, les grands modèles n\'étant sollicités que lorsqu\'une conversation large est nécessaire. C\'est une position de recherche, pas une mesure de marché.',
          'Le compromis à prévoir est une complexité opérationnelle accrue — exploiter et maintenir plusieurs petits modèles au lieu d\'une seule intégration API nécessite plus d\'infrastructure et de supervision. Les organisations sans capacité MLOps existante peuvent trouver une seule API à grand modèle plus simple à exploiter, même à un coût par requête plus élevé, du moins jusqu\'à ce que le volume justifie la complexité supplémentaire. Pour le volet matériel de l\'exécution locale de plusieurs petits modèles, voir la partie 2, <a href="/fr/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Est-ce la même tendance que « les petits modèles sont maintenant aussi bons que les anciens grands modèles » ?',
            a: 'Non — c\'est une tendance distincte concernant l\'amélioration de la qualité des modèles par paramètre au fil du temps, traitée dans la section « Tendance 1 » de notre analyse Future of Local LLMs. Cette tendance-ci concerne l\'économie du déploiement : quelles tâches étroites à fort volume obtiennent leur propre petit modèle dédié à l\'échelle de production, indépendamment de la qualité brute de ce modèle par rapport aux anciens grands modèles.',
          },
          {
            q: 'Quels types de tâches les analystes décrivent-ils comme se déplaçant vers de petits modèles locaux ?',
            a: 'Des tâches étroites, répétitives et à fort volume — classification, extraction de données structurées, routage de requêtes et agents internes à usage unique sont les exemples les plus souvent cités dans les prévisions d\'adoption de l\'IA en entreprise. Les tâches conversationnelles ouvertes ne sont pas la cible de ce changement.',
          },
          {
            q: 'Qui prévoit ce changement, et quelle est la solidité des preuves ?',
            a: 'Gartner a publié la prévision chiffrée la plus nette (avril 2025 : d\'ici 2027, au moins trois fois plus d\'usage de petits modèles spécialisés que de LLM généralistes), et un article arXiv de 2025 défend l\'argument technique. Il s\'agit de prévisions ou de prises de position, pas de données d\'adoption mesurées.',
          },
          {
            q: 'Cela signifie-t-il que les grands modèles généralistes deviennent moins importants ?',
            a: 'Pas nécessairement — les prévisions décrivent les grands modèles réservés aux tâches véritablement ouvertes ou complexes, tandis que les tâches étroites à fort volume sont détachées vers des modèles dédiés plus petits. C\'est une répartition du travail entre tailles de modèles, pas un remplacement généralisé des grands modèles.',
          },
          {
            q: 'Quels petits modèles rendent cela réalisable sur du matériel local aujourd\'hui ?',
            a: 'Parmi les exemples ouverts de 2026 : Gemma 4 E2B et E4B (Apache 2.0, 2 avril 2026) et les petits modèles Qwen3.5 de 0.8B à 9B (Apache-2.0). Cet article ne les classe pas : évaluez-les sur vos propres données de tâche, et pour le matériel voir <a href="/fr/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">la partie 2, AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Gartner : prévision sur les petits modèles d\'IA spécialisés (9 avril 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — source de la prévision d\'un usage trois fois supérieur',
          '[Google : article de lancement de Gemma 4 (2 avril 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — tailles, Apache 2.0, déclarations sur l\'usage embarqué',
          '[Fiche du modèle Qwen3.5-0.8B (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, contexte de 262 144 jetons, usage prévu',
          '[arXiv 2506.02153 : Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — l\'argument d\'ingénierie',
        ],
      },
    },
  },
  ja: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-ja.webp',
    title: 'ローカルAIトレンド2027、第3回/全10回：小型モデルが単調な業務を引き受ける',
    seoTitle: 'ローカルAIトレンド2027 第3回：小型モデルの台頭 | Prompt Bites',
    metaDescription: 'Gartnerは2027年までにタスク特化型の小型モデルの利用が汎用LLMの3倍以上になると予測。Gemma 4やQwen3.5でローカル運用も現実的になっています。',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '狭く高頻度な自動化タスク向けのAIインフラ予算を計画するエンジニアリングリーダー',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>本稿はローカルAIトレンド2027シリーズ全10回中の第3回です。Gartnerは、2027年までに組織がタスク特化型の小型モデルを汎用の大規模言語モデルの少なくとも3倍の頻度で利用すると予測しており、2026年に公開されたオープンモデルがこのパターンをローカルハードウェアで実現可能にしています。</strong> これは能力の変化ではなく、展開パターンの変化です。小型モデルが突然大規模モデルの知能に匹敵するようになるという話ではなく（その論点は別記事の<a href="/ja/local-llms/future-of-local-llms">Future of Local LLMs</a>分析で扱っています）、どのタスクが大規模に専用の小型モデルを持つようになるかという話です。第1回の<a href="/ja/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>、第6回の<a href="/ja/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>、第8回の<a href="/ja/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>もあわせてご覧ください。',
    quickAnswerTop: {
      ja: {
        question: 'なぜ小型言語モデルが2027年までに企業の狭いタスクを引き受けると予測されているのですか？',
        answer: 'リクエスト量が多い場合、分類・抽出・意図ルーティングのような狭く反復的なタスクを1つの大規模な汎用モデルに通すと、そのタスク専用に調整した小型モデルよりもリクエストごとのコストと遅延が大きくなるためです。Gartnerは2027年までに組織がタスク特化型の小型モデルを汎用LLMの少なくとも3倍の頻度で利用すると予測しており、2026年に公開されたGemma 4（E2BとE4B）やQwen3.5（0.8B〜9B）などApache 2.0のオープンモデルは一般的なハードウェアで動作します。',
        bullets: [
          '知能のパターンではなく展開のパターン——変化の核心は規模とコストであり、小型モデルが大規模モデルの品質に並ぶことではありません',
          'Gartner（2025年4月）：2027年までにタスク特化型の小型モデルの利用が汎用LLMの少なくとも3倍に——測定結果ではなく予測です',
          '供給側は2026年に実現：Gemma 4（2026年4月2日）とQwen3.5の小型モデルはApache 2.0で、ローカルで動作します',
          '対象ワークロード：分類、抽出、ルーティング、単一目的のエージェント——自由形式のチャットではありません',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartnerは、2027年までに組織がタスク特化型の小型モデルを汎用LLMの少なくとも3倍の頻度で利用すると予測しています——測定結果ではなく予測です',
          '推進要因はモデルの知能ではなく大量処理時の経済性です——狭いタスク向けに調整された小型モデルは、大規模な汎用モデルよりリクエストあたりのコストが低く、応答も速くなります',
          '供給側は2026年に具体化しました：Gemma 4（2026年4月2日）とQwen3.5の小型モデル（0.8B〜9B）はApache 2.0で、ローカルハードウェアで動作します',
          '2025年の研究論文が技術面の根拠を示しています：多くのエージェントのサブタスクでは小型モデルで十分な性能があり、より経済的だとする研究上の立場であり、市場データではありません',
          '小型モデルが旧世代の大規模モデルの品質に並ぶという話とは別のトレンドです——その論点は別記事のFuture of Local LLMs分析をご覧ください',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartnerは、2027年までに組織がタスク特化型の小型モデルを汎用LLMの少なくとも3倍の頻度で利用すると予測しており、Gemma 4やQwen3.5など2026年のオープンモデルがローカルハードウェアでの運用を現実的にしています。' },
          { type: 'plain-terms', text: '簡単に言うと、あらゆる種類のリクエストに1つの大きなモデルが答える代わりに、企業は複数の小型で安価な専用モデルを運用し、それぞれが1つの狭いタスクを大量に、非常に速く、非常に安く処理するようになるということです。' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: 'なぜリクエスト量によって最適なモデルが変わるのですか？',
        content: [
          '**1件の狭いリクエストはほとんど問題になりませんが、狭いタスクを月に数百万回実行すると急速に積み上がります。** サポートチケットの分類、ドキュメントのフィールド抽出、リクエストルーティングは、狭く反復的で高頻度なタスクの例です。従来はこれらを、最も早く出荷できる方法だからという理由で汎用LLM APIの呼び出しにまとめていました。低頻度であればこの束ね方でも問題ありません。しかし本番規模では、こうしたリクエストの一つひとつが、大規模モデルの汎用能力を本当に必要とするリクエストと同じコストと遅延を、呼び出しごとに払い続けることになります。',
          '**Gartnerはこのパターンを数値で示しています。** 2025年4月の予測では、2027年までに組織はタスク特化型の小型AIモデルを、利用量ベースで汎用の大規模言語モデルの少なくとも3倍の頻度で使うとされています。Gartnerの説明は、汎用モデルは特定の業務文脈を要するタスクで精度が下がる一方、小型モデルは応答が速く、運用・保守のコストも低いというものです。企業は自社データに対するRAG（検索拡張生成）やファインチューニングでそれらを構築すると見ています。これは予測であり測定結果ではなく、3倍という比率を独立に測定した調査は現時点で見つかっていません。',
          'これは、小型モデルが数年前の大規模モデルと同等の能力を持つようになったかという問いとは別物です。それは、当社の<a href="/ja/local-llms/future-of-local-llms">Future of Local LLMs</a>分析の「トレンド1」セクションで扱っている、実在する別のトレンドです。そのトレンドはパラメータあたりのモデル品質の向上に関するものです。こちらのトレンドは展開アーキテクチャに関するもので、そのモデルが古い大規模モデルと比べてどれだけ賢いかとは無関係に、どのタスクが専用の小型モデルを持つようになるかという話です。',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: '実際には小型モデルの展開パターンはどのようなものですか？',
        content: [
          '**実際には、この展開パターンはローカルで動く複数の小型モデルがそれぞれ1つの狭いタスクを担当し、あらゆるリクエストタイプを処理する単一の大規模モデルではなく、軽量なルーターによって調整される形になります。** 分類モデルが受信チケットやドキュメントを仕分けし、抽出モデルが非構造化テキストから構造化フィールドを取り出し、ルーティングモデルがどの下流システムやチームがリクエストを処理するかを決定します。これらのどれも、大規模なフロンティアモデルの広範な一般知識を必要としません。それぞれが必要とするのは、狭く明確に定義されたタスクを確実にこなす能力だけです。',
          '**供給側は2026年に動きました。** Googleは2026年4月2日にGemma 4を公開しました。実効2B（E2B）と実効4B（E4B）のエッジ向けモデルは、同社によればスマートフォンや小型ボードで完全オフライン動作し、さらに大型モデルも含め、すべてApache 2.0です。AlibabaのQwenチームは0.8Bから9Bパラメータの小型Qwen3.5モデルをApache-2.0で公開しており、0.8Bのモデルカードはタスク特化型のファインチューニングを想定用途として挙げています。Hugging FaceのGemma 4発表記事にも、TRL、PEFT、Unsloth Studioなどのファインチューニング手段が記載されています。大量処理時の実用面での利点は、小型モデルはローカルまたはオンプレミスのハードウェアでリクエストあたりのコストが低く、外部APIへの往復がないため応答が速く、パイプラインの他の部分に触れずに個別に更新・交換できることです。',
          '2025年6月の研究論文[Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153)（最新改訂は2026年9月）は、エンジニアリングの側から同じ主張をしています。エージェントシステム内の多くの反復的なサブタスクでは、小型モデルは「十分に強力で、本質的により適しており、必然的により経済的」であり、大型モデルは幅広い対話能力が必要な場面でのみ呼び出すべきだとしています。これは研究上の立場であり、市場の測定結果ではありません。',
          '見込んでおくべきトレードオフは、運用上の複雑さの増大です。単一のAPI連携ではなく複数の小型モデルを運用・保守するには、より多くのインフラと監視が必要になります。既存のMLOps体制を持たない組織は、リクエストあたりのコストが高くても、単一の大規模モデルAPIの方が運用しやすいと感じるかもしれません。少なくとも量が追加の複雑さを正当化するまでは。ローカルで複数の小型モデルを動かすハードウェア面については、第2回の<a href="/ja/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'これは「小型モデルは今や古い大規模モデルと同等に優れている」という同じトレンドですか？',
            a: 'いいえ — それは時間とともにパラメータあたりのモデル品質が向上しているという別のトレンドで、当社のFuture of Local LLMs分析の「トレンド1」セクションで扱っています。こちらのトレンドは展開の経済性に関するもので、本番規模でどの狭く高頻度なタスクが専用の小型モデルを持つようになるかという話であり、そのモデルの生の品質が古い大規模モデルと比べてどうかとは無関係です。',
          },
          {
            q: 'アナリストは小型ローカルモデルへ移行するとしてどのようなタスクを挙げていますか？',
            a: '狭く反復的で高頻度なタスクです。分類、構造化データ抽出、リクエストルーティング、単機能の社内エージェントが、企業AI導入予測で最も頻繁に挙げられる例です。オープンエンドな会話タスクはこの変化の対象ではありません。',
          },
          {
            q: 'この変化は誰が予測していて、根拠はどの程度確かですか？',
            a: 'Gartnerが最も明確な数値予測を公表しており（2025年4月：2027年までにタスク特化型の小型モデルの利用が汎用LLMの少なくとも3倍）、2025年のarXiv論文が技術面の根拠を示しています。どちらも予測または立場表明であり、測定された導入データではありません。',
          },
          {
            q: 'これは大規模な汎用モデルの重要性が低下することを意味しますか？',
            a: '必ずしもそうではありません。予測は、大規模モデルが真にオープンエンドまたは複雑なタスクのために確保される一方、狭く高頻度なタスクは小型の専用モデルに切り離されると描いています。これはモデルサイズ間の分業であり、大規模モデル全体の置き換えではありません。',
          },
          {
            q: '現在、ローカルハードウェアでこれを実現できる小型モデルは何ですか？',
            a: '2026年に公開されたオープンな例として、Gemma 4 E2BとE4B（Apache 2.0、2026年4月2日）や、0.8Bから9BのQwen3.5小型モデル（Apache-2.0）があります。本記事はそれらを順位付けしていません。自社のタスクデータで評価してください。ハードウェア面は<a href="/ja/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">第2回 AI PC / NPU Normalization</a>をご覧ください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Gartner：タスク特化型小型AIモデルの予測（2025年4月9日）](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — 「利用3倍」予測の出典',
          '[Google：Gemma 4発表記事（2026年4月2日）](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — サイズ、Apache 2.0、オンデバイスに関する説明',
          '[Qwen3.5-0.8Bモデルカード（Hugging Face）](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0、262,144トークンのコンテキスト、想定用途',
          '[arXiv 2506.02153：Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — 技術面の論拠',
        ],
      },
    },
  },
  zh: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-zh.webp',
    title: '2027本地AI趋势系列第3篇（共10篇）：小模型接管枯燥的日常任务',
    seoTitle: '2027本地AI趋势 第3篇：小模型接管 | Prompt Bites',
    metaDescription: 'Gartner预测,到2027年企业对小型任务专用模型的使用量将至少是通用大模型的3倍;Gemma 4和Qwen3.5让这在本地硬件上变得可行。',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为狭窄、高流量自动化任务规划AI基础设施预算的工程负责人',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>本文是"2027本地AI趋势"系列共10篇中的第3篇:Gartner预测,到2027年组织使用小型、任务专用模型的频率将至少是通用大语言模型的三倍,而2026年发布的开放模型使这一模式在本地硬件上变得可行。</strong>这是部署模式的转变,而非能力的转变:关键在于哪些任务会在大规模场景下拥有专属的小模型,而不是小模型突然拥有了与大模型相当的智能(这一角度在我们独立的<a href="/zh/local-llms/future-of-local-llms">本地大模型的未来</a>分析中讨论)。另请参阅第1篇<a href="/zh/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">云补贴崩溃</a>、第6篇<a href="/zh/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">混合本地-云路由</a>和第8篇<a href="/zh/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>。',
    quickAnswerTop: {
      zh: {
        question: '为什么预计小型语言模型到2027年会接管企业的狭窄任务？',
        answer: '因为在请求量很高的情况下,把分类、提取、意图路由等狭窄且重复的任务交给大型通用模型处理,其每次请求的成本和延迟都高于专门为该任务调优的小模型。Gartner预测,到2027年组织使用小型、任务专用模型的频率将至少是通用大语言模型的三倍;2026年发布的Gemma 4(E2B和E4B)和Qwen3.5(0.8B到9B)等采用Apache 2.0许可的开放模型可在消费级硬件上运行。',
        bullets: [
          '这是部署模式而非智能模式的变化——转变关乎规模和成本,而非小模型追平大模型的质量',
          'Gartner(2025年4月):到2027年,小型任务专用模型的使用量至少是通用大模型的3倍——这是预测,而非实测结果',
          '供给端已在2026年到位:Gemma 4(2026年4月2日)和Qwen3.5小模型均采用Apache 2.0许可,可在本地运行',
          '目标工作负载:分类、提取、路由、单一用途代理——而非开放式对话',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner预测,到2027年组织使用小型、任务专用模型的频率将至少是通用大语言模型的三倍——这是预测,而非实测结果',
          '驱动因素是大规模场景下的经济性,而非模型智能——一个为狭窄任务调优的小模型,每次请求的成本更低、响应更快,优于大规模运行的通用大模型',
          '供给端在2026年变得具体:Gemma 4(2026年4月2日)和Qwen3.5小模型(0.8B到9B)均采用Apache 2.0许可,可在本地硬件上运行',
          '一篇2025年的研究论文从工程角度提出论据:对许多智能体子任务而言,小模型性能足够且更经济——这是研究立场,而非市场数据',
          '这与小模型追平旧大模型质量是不同的趋势——该角度请参阅独立的本地大模型未来分析',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner预测,到2027年组织使用小型、任务专用模型的频率将至少是通用大语言模型的三倍,而Gemma 4和Qwen3.5等2026年的开放模型使其在本地硬件上变得可行。' },
          { type: 'plain-terms', text: '简单来说:企业预计不再用一个大模型回答所有类型的请求,而是运行多个小型、低成本、专用的模型——每个模型在大规模场景下都能非常快速且低成本地完成一项狭窄的任务。' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: '为什么请求量会改变哪种模型更合适？',
        content: [
          '**单次狭窄请求几乎无关紧要,但一项每月被执行数百万次的狭窄任务会迅速累积成本。** 工单分类器、文档字段提取器或请求路由器都是狭窄、重复、高流量任务的例子——这类任务过去常被打包进通用大语言模型API调用中,因为那是最快的上线方式。在低流量下,这种打包没有问题。但在生产规模下,每一次这样的请求仍要支付与真正需要大模型完整通用能力的请求相同的单次调用成本和延迟。',
          '**Gartner给出了这一模式的量化预测。** 其2025年4月的预测称,到2027年,组织按使用量计算,使用小型、任务专用AI模型的频率将至少是通用大语言模型的三倍。Gartner的理由是:通用模型在需要特定业务背景的任务上准确率会下降,而小模型响应更快,运行和维护成本也更低;Gartner预计企业将通过检索增强生成(RAG)或基于自有数据的微调来构建这些模型。这是预测,而非实测结果,我们目前也没有找到对"3倍"这一比例的独立测量。',
          '这与"小模型现在是否已具备几年前大模型的能力"这一问题不同——那是我们<a href="/zh/local-llms/future-of-local-llms">本地大模型的未来</a>分析中"趋势1"部分所讨论的一个真实但独立的趋势。那个趋势关乎每参数模型质量的提升。而本趋势关乎部署架构:哪些任务会拥有自己专属的小模型,与该模型相对于旧大模型有多聪明无关。',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: '小模型部署模式在实践中是什么样的？',
        content: [
          '**在实践中,这种模式表现为多个在本地运行的小模型,每个模型处理一项狭窄任务,由一个轻量级路由器进行协调,而不是由一个大模型处理所有请求类型。** 一个分类模型对传入的工单或文档进行分拣;一个提取模型从非结构化文本中提取结构化字段;一个路由模型决定由哪个下游系统或团队处理某个请求。这些都不需要大型前沿模型那种广泛的通用知识——每个模型只需要在一项狭窄、定义明确的任务上表现可靠。',
          '**供给端在2026年发生了变化。** Google于2026年4月2日发布了Gemma 4:包括有效参数2B(E2B)和有效参数4B(E4B)的边缘模型(Google称其可在手机和小型开发板上完全离线运行),以及更大的模型,全部采用Apache 2.0许可。阿里巴巴的Qwen团队以Apache-2.0许可发布了0.8B到9B参数的Qwen3.5小模型;0.8B的模型卡将针对特定任务的微调列为预期用途,Hugging Face的Gemma 4发布文章也列出了TRL、PEFT和Unsloth Studio等微调途径。大规模场景下的实际好处是:小模型在本地或本地部署硬件上每次请求的成本更低,由于无需往返外部API,响应更快,并且可以彼此独立地更新或替换,而无需触动流水线的其他部分。',
          '一篇2025年6月的研究论文[Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153)(最新修订于2026年9月)从工程角度提出了同样的论点:对智能体系统中许多重复性子任务而言,小模型"足够强大、天然更适合,而且必然更经济",只有在需要广泛对话能力时才调用更大的模型。这是一种研究立场,而非市场测量结果。',
          '需要预先考虑的权衡是运营复杂度的增加——运行和维护多个小模型而非单一API集成,需要更多的基础设施和监控。没有现有MLOps能力的组织可能会发现,即使单次请求成本更高,单一大模型API也更易于运营——至少在流量足以证明额外复杂度合理之前是如此。关于本地运行多个小模型的硬件方面,请参阅第2篇<a href="/zh/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU标准化</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '这和"小模型现在和旧的大模型一样好"是同一个趋势吗？',
            a: '不是——那是一个关于模型质量随时间按参数提升的独立趋势,在我们本地大模型未来分析的"趋势1"部分讨论。本趋势关乎部署经济学:在生产规模下,哪些狭窄、高流量的任务会拥有自己专属的小模型,与该模型的原始质量相对于旧大模型如何无关。',
          },
          {
            q: '分析师描述哪些类型的任务正在转向小型本地模型？',
            a: '狭窄、重复、高流量的任务——分类、结构化数据提取、请求路由和单一用途的内部代理,是企业AI部署预测中最常被引用的例子。开放式对话任务不是这一转变的目标。',
          },
          {
            q: '谁在预测这一转变,证据有多可靠？',
            a: 'Gartner发布了最明确的量化预测(2025年4月:到2027年,小型任务专用模型的使用量至少是通用大模型的3倍),一篇2025年的arXiv论文则从工程角度提出论据。两者都是预测或立场文件,而非实测的采用数据。',
          },
          {
            q: '这是否意味着大型通用模型变得不那么重要了？',
            a: '不一定——这些预测描述的是大模型被保留用于真正开放式或复杂的任务,而狭窄、高流量的任务则被剥离给更小的专用模型。这是模型规模之间的分工,而不是对大模型的全面替代。',
          },
          {
            q: '目前有哪些小模型能让这在本地硬件上变得可行？',
            a: '2026年发布的开放模型示例包括Gemma 4 E2B和E4B(Apache 2.0,2026年4月2日)以及0.8B到9B的Qwen3.5小模型(Apache-2.0)。本文不对它们排名:请用你自己的任务数据评估,硬件方面请参阅<a href="/zh/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">第2篇 AI PC / NPU标准化</a>。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Gartner:小型任务专用AI模型预测(2025年4月9日)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — "使用量3倍"预测的出处',
          '[Google:Gemma 4发布文章(2026年4月2日)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — 规格、Apache 2.0、端侧运行说明',
          '[Qwen3.5-0.8B模型卡(Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0、262,144 token上下文、预期用途',
          '[arXiv 2506.02153:Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — 工程角度的论据',
        ],
      },
    },
  },
  es: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-es.webp',
    title: 'Tendencias de IA local 2027, parte 3 de 10: los modelos pequeños se hacen cargo de las tareas rutinarias',
    seoTitle: 'Tendencias de IA local 2027, parte 3: modelos pequeños | Prompt Bites',
    metaDescription: 'Gartner prevé que en 2027 se usarán modelos pequeños específicos por tarea tres veces más que LLM generales; Gemma 4 y Qwen3.5 lo hacen viable en local.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Líderes de ingeniería que planifican presupuestos de infraestructura de IA para tareas de automatización estrechas y de alto volumen',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Esta es la parte 3 de 10 de la serie Tendencias de IA local 2027: Gartner prevé que, para 2027, las organizaciones usarán modelos pequeños y específicos por tarea al menos tres veces más que los grandes modelos de lenguaje de propósito general, y los modelos abiertos publicados en 2026 hacen viable ese patrón en hardware local.</strong> Se trata de un cambio en el patrón de despliegue, no en la capacidad: la cuestión es qué tareas obtienen un modelo pequeño dedicado a gran escala, no si los modelos pequeños igualan de repente la inteligencia de los grandes (ese ángulo se cubre en nuestro análisis independiente <a href="/es/local-llms/future-of-local-llms">Future of Local LLMs</a>). Ver también la parte 1, <a href="/es/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>, la parte 6, <a href="/es/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>, y la parte 8, <a href="/es/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>.',
    quickAnswerTop: {
      es: {
        question: '¿Por qué se espera que los modelos de lenguaje pequeños se hagan cargo de tareas empresariales estrechas para 2027?',
        answer: 'Porque con un volumen alto de solicitudes, pasar una tarea estrecha y repetitiva — clasificación, extracción, enrutamiento de intenciones — por un único modelo grande de propósito general cuesta más y tarda más por solicitud que un modelo pequeño ajustado exactamente para esa tarea. Gartner prevé que para 2027 las organizaciones usarán modelos pequeños y específicos por tarea al menos tres veces más que los LLM de propósito general, y los modelos abiertos de 2026, como Gemma 4 (E2B y E4B) y Qwen3.5 (de 0.8B a 9B), con licencia Apache 2.0, funcionan en hardware de consumo.',
        bullets: [
          'Patrón de despliegue, no patrón de inteligencia — el cambio trata de escala y costo, no de que los modelos pequeños igualen la calidad de los grandes',
          'Gartner (abril de 2025): para 2027, al menos tres veces más uso de modelos pequeños específicos por tarea que de LLM generales — una previsión, no un resultado medido',
          'La oferta llegó en 2026: Gemma 4 (2 de abril de 2026) y los modelos pequeños Qwen3.5 tienen licencia Apache 2.0 y funcionan en local',
          'Cargas objetivo: clasificación, extracción, enrutamiento, agentes de propósito único — no el chat abierto',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner prevé que para 2027 las organizaciones usarán modelos pequeños y específicos por tarea al menos tres veces más que los LLM de propósito general — una previsión, no un resultado medido',
          'El motor es la economía a gran volumen, no la inteligencia del modelo — un modelo pequeño ajustado para una tarea estrecha cuesta menos y responde más rápido por solicitud que un modelo general grande a escala',
          'La oferta se concretó en 2026: Gemma 4 (2 de abril de 2026) y los modelos pequeños Qwen3.5 (de 0.8B a 9B) tienen licencia Apache 2.0 y funcionan en hardware local',
          'Un artículo de investigación de 2025 defiende el argumento técnico: los modelos pequeños serían lo bastante potentes y más económicos para muchas subtareas de agentes — una postura de investigación, no datos de mercado',
          'Esta es una tendencia distinta de la de los modelos pequeños que igualan la calidad de los grandes modelos antiguos — consulta el análisis independiente Future of Local LLMs',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner prevé que para 2027 las organizaciones usarán modelos pequeños y específicos por tarea al menos tres veces más que los LLM de propósito general, y los modelos abiertos de 2026 como Gemma 4 y Qwen3.5 lo hacen viable en hardware local.' },
          { type: 'plain-terms', text: 'En términos simples: en lugar de un modelo grande respondiendo a todo tipo de solicitud, se espera que las empresas ejecuten varios modelos pequeños, económicos y especializados — cada uno haciendo una tarea estrecha muy rápido y muy barato a gran escala.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: '¿Por qué el volumen de solicitudes cambia qué modelo tiene sentido?',
        content: [
          '**Una sola solicitud estrecha apenas importa, pero una tarea estrecha ejecutada millones de veces al mes se acumula rápido.** Un clasificador de tickets de soporte, un extractor de campos de documentos o un enrutador de solicitudes son ejemplos de tareas estrechas, repetitivas y de alto volumen — el tipo que solía agruparse en una llamada API de LLM de propósito general porque era la forma más rápida de lanzarlo. A bajo volumen, esa agrupación está bien. A escala de producción, cada una de esas solicitudes sigue pagando el mismo costo y latencia por llamada que una solicitud que realmente necesitaba la capacidad general completa del modelo grande.',
          '**Gartner pone cifras a este patrón.** Su previsión de abril de 2025 indica que, para 2027, las organizaciones usarán modelos de IA pequeños y específicos por tarea al menos tres veces más, en volumen de uso, que los grandes modelos de lenguaje de propósito general. El razonamiento de Gartner es que los modelos generales pierden precisión en tareas que requieren un contexto de negocio específico, mientras que los modelos más pequeños responden más rápido y cuestan menos de operar y mantener; Gartner espera que las empresas los construyan con generación aumentada por recuperación (RAG) o con fine-tuning sobre sus propios datos. Es una previsión, no un resultado medido, y hasta ahora no hemos encontrado una medición independiente de esa proporción de 3 a 1.',
          'Esto es distinto de la pregunta de si los modelos pequeños son ahora tan capaces como los modelos más grandes de hace algunos años — una tendencia real y separada cubierta en la sección «Tendencia 1» de nuestro análisis <a href="/es/local-llms/future-of-local-llms">Future of Local LLMs</a>. Esa tendencia trata sobre la mejora de la calidad del modelo por parámetro. Esta tendencia trata sobre la arquitectura de despliegue: qué tareas obtienen su propio modelo pequeño dedicado, independientemente de cuán inteligente sea ese modelo en relación con los modelos grandes más antiguos.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: '¿Cómo se ve en la práctica un patrón de despliegue de modelos pequeños?',
        content: [
          '**En la práctica, este patrón se ve como varios modelos pequeños ejecutándose localmente, cada uno manejando una tarea estrecha, coordinados por un enrutador ligero en lugar de un solo modelo grande manejando cada tipo de solicitud.** Un modelo de clasificación ordena tickets o documentos entrantes; un modelo de extracción saca campos estructurados de texto no estructurado; un modelo de enrutamiento decide qué sistema o equipo posterior maneja una solicitud. Ninguno de estos necesita el amplio conocimiento general de un modelo grande de frontera — cada uno necesita ser confiablemente bueno en una tarea estrecha y bien definida.',
          '**La oferta se movió en 2026.** Google publicó Gemma 4 el 2 de abril de 2026: modelos edge de 2B efectivos (E2B) y 4B efectivos (E4B) que, según Google, funcionan totalmente sin conexión en teléfonos y placas pequeñas, además de modelos más grandes, todos con licencia Apache 2.0. El equipo Qwen de Alibaba publicó los modelos pequeños Qwen3.5, de 0.8B a 9B parámetros, con licencia Apache-2.0; la ficha del modelo de 0.8B menciona el fine-tuning específico por tarea como uso previsto, y la publicación de lanzamiento de Gemma 4 en Hugging Face enumera vías de fine-tuning como TRL, PEFT y Unsloth Studio. El beneficio práctico a gran volumen: los modelos más pequeños cuestan menos por solicitud en hardware local o on-premise, responden más rápido porque no hay viaje de ida y vuelta a una API externa, y pueden actualizarse o reemplazarse de forma independiente sin tocar el resto del pipeline.',
          'Un artículo de investigación de junio de 2025, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (última revisión en septiembre de 2026), defiende lo mismo desde la ingeniería: los modelos pequeños serían «suficientemente potentes, intrínsecamente más adecuados y necesariamente más económicos» para muchas subtareas repetitivas dentro de los sistemas de agentes, y los modelos grandes solo se invocarían cuando haga falta una conversación amplia. Es una postura de investigación, no una medición de mercado.',
          'La contrapartida a tener en cuenta es una mayor complejidad operativa — ejecutar y mantener varios modelos pequeños en lugar de una sola integración de API requiere más infraestructura y monitoreo. Las organizaciones sin capacidad MLOps existente pueden encontrar que una sola API de modelo grande es más simple de operar, incluso a un costo más alto por solicitud, al menos hasta que el volumen justifique la complejidad adicional. Para el lado del hardware de ejecutar varios modelos pequeños localmente, ver la parte 2, <a href="/es/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es esta la misma tendencia que "los modelos pequeños ahora son tan buenos como los antiguos modelos grandes"?',
            a: 'No — esa es una tendencia separada sobre la mejora de la calidad del modelo por parámetro a lo largo del tiempo, cubierta en la sección «Tendencia 1» de nuestro análisis Future of Local LLMs. Esta tendencia trata sobre la economía del despliegue: qué tareas estrechas de alto volumen obtienen su propio modelo pequeño dedicado a escala de producción, independientemente de cómo se compare la calidad bruta de ese modelo con los antiguos modelos grandes.',
          },
          {
            q: '¿Qué tipos de tareas describen los analistas como en movimiento hacia modelos locales pequeños?',
            a: 'Tareas estrechas, repetitivas y de alto volumen — clasificación, extracción de datos estructurados, enrutamiento de solicitudes y agentes internos de propósito único son los ejemplos más citados en las previsiones de adopción de IA empresarial. Las tareas conversacionales abiertas no son el objetivo de este cambio.',
          },
          {
            q: '¿Quién prevé este cambio y qué tan sólida es la evidencia?',
            a: 'Gartner publicó la previsión numérica más clara (abril de 2025: para 2027, al menos tres veces más uso de modelos pequeños específicos por tarea que de LLM generales), y un artículo de arXiv de 2025 defiende el argumento técnico. Ambos son previsiones o documentos de postura, no datos de adopción medidos.',
          },
          {
            q: '¿Significa esto que los modelos grandes de propósito general se vuelven menos importantes?',
            a: 'No necesariamente — las previsiones describen a los modelos grandes reservados para tareas genuinamente abiertas o complejas, mientras que las tareas estrechas de alto volumen se separan hacia modelos dedicados más pequeños. Es una división del trabajo entre tamaños de modelo, no un reemplazo generalizado de los modelos grandes.',
          },
          {
            q: '¿Qué modelos pequeños lo hacen viable hoy en hardware local?',
            a: 'Ejemplos abiertos de 2026 son Gemma 4 E2B y E4B (Apache 2.0, 2 de abril de 2026) y los modelos pequeños Qwen3.5 de 0.8B a 9B (Apache-2.0). Este artículo no los clasifica: evalúalos con tus propios datos de la tarea y, para el hardware, consulta <a href="/es/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">la parte 2, AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Gartner: previsión sobre modelos de IA pequeños y específicos por tarea (9 de abril de 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — origen de la previsión de uso tres veces mayor',
          '[Google: publicación de lanzamiento de Gemma 4 (2 de abril de 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — tamaños, Apache 2.0, afirmaciones sobre uso en dispositivo',
          '[Ficha del modelo Qwen3.5-0.8B (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, contexto de 262,144 tokens, uso previsto',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — el argumento de ingeniería',
        ],
      },
    },
  },
  pt: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-pt.webp',
    title: 'Tendências de IA local 2027, parte 3 de 10: os modelos pequenos assumem as tarefas repetitivas',
    seoTitle: 'Tendências de IA local 2027, parte 3: modelos pequenos | Prompt Bites',
    metaDescription: 'A Gartner prevê que, até 2027, modelos pequenos específicos por tarefa serão usados 3 vezes mais que LLMs gerais; Gemma 4 e Qwen3.5 viabilizam isso localmente.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Líderes de engenharia que planejam orçamentos de infraestrutura de IA para tarefas de automação estreitas e de alto volume',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Esta é a parte 3 de 10 da série Tendências de IA local 2027: a Gartner prevê que, até 2027, as organizações usarão modelos pequenos e específicos por tarefa pelo menos três vezes mais do que grandes modelos de linguagem de propósito geral, e os modelos abertos lançados em 2026 tornam esse padrão viável em hardware local.</strong> Trata-se de uma mudança no padrão de implantação, não na capacidade: a questão é quais tarefas ganham um modelo pequeno dedicado em grande escala, não se os modelos pequenos de repente igualam a inteligência dos modelos grandes (esse ângulo é abordado em nossa análise separada <a href="/pt/local-llms/future-of-local-llms">Future of Local LLMs</a>). Veja também a parte 1, <a href="/pt/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">Cloud Subsidy Collapse</a>, a parte 6, <a href="/pt/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">Hybrid Local-Cloud Routing</a>, e a parte 8, <a href="/pt/prompt-bites/local-ai-trend-2027-local-agentic-ai">Local Agentic AI</a>.',
    quickAnswerTop: {
      pt: {
        question: 'Por que se espera que modelos de linguagem pequenos assumam tarefas empresariais estreitas até 2027?',
        answer: 'Porque, com alto volume de requisições, passar uma tarefa estreita e repetitiva — classificação, extração, roteamento de intenção — por um único modelo grande de propósito geral custa mais e demora mais por requisição do que um modelo pequeno ajustado exatamente para essa tarefa. A Gartner prevê que, até 2027, as organizações usarão modelos pequenos e específicos por tarefa pelo menos três vezes mais que LLMs de propósito geral, e modelos abertos de 2026, como Gemma 4 (E2B e E4B) e Qwen3.5 (de 0.8B a 9B), com licença Apache 2.0, rodam em hardware de consumo.',
        bullets: [
          'Padrão de implantação, não padrão de inteligência — a mudança é sobre escala e custo, não sobre modelos pequenos igualarem a qualidade dos grandes',
          'Gartner (abril de 2025): até 2027, pelo menos três vezes mais uso de modelos pequenos específicos por tarefa do que de LLMs gerais — uma previsão, não um resultado medido',
          'A oferta chegou em 2026: Gemma 4 (2 de abril de 2026) e os modelos pequenos Qwen3.5 têm licença Apache 2.0 e rodam localmente',
          'Cargas-alvo: classificação, extração, roteamento, agentes de propósito único — não chat aberto',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Gartner prevê que, até 2027, as organizações usarão modelos pequenos e específicos por tarefa pelo menos três vezes mais que LLMs de propósito geral — uma previsão, não um resultado medido',
          'O motor é a economia em grande volume, não a inteligência do modelo — um modelo pequeno ajustado para uma tarefa estreita custa menos e responde mais rápido por requisição do que um modelo geral grande em escala',
          'A oferta se concretizou em 2026: Gemma 4 (2 de abril de 2026) e os modelos pequenos Qwen3.5 (de 0.8B a 9B) têm licença Apache 2.0 e rodam em hardware local',
          'Um artigo de pesquisa de 2025 defende o argumento técnico: modelos pequenos seriam potentes o bastante e mais econômicos para muitas subtarefas de agentes — uma posição de pesquisa, não dados de mercado',
          'Esta é uma tendência diferente da dos modelos pequenos que igualam a qualidade dos modelos grandes antigos — veja a análise separada Future of Local LLMs',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A Gartner prevê que, até 2027, as organizações usarão modelos pequenos e específicos por tarefa pelo menos três vezes mais que LLMs de propósito geral, e modelos abertos de 2026 como Gemma 4 e Qwen3.5 tornam isso viável em hardware local.' },
          { type: 'plain-terms', text: 'Em termos simples: em vez de um modelo grande respondendo a todo tipo de solicitação, espera-se que as empresas rodem vários modelos pequenos, baratos e especializados — cada um fazendo uma tarefa estreita muito rápido e muito barato em escala.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: 'Por que o volume de solicitações muda qual modelo faz sentido?',
        content: [
          '**Uma única solicitação estreita quase não importa, mas uma tarefa estreita executada milhões de vezes por mês se acumula rapidamente.** Um classificador de tickets de suporte, um extrator de campos de documentos ou um roteador de solicitações são exemplos de tarefas estreitas, repetitivas e de alto volume — o tipo que costumava ser agrupado em uma chamada de API de LLM de propósito geral porque era a forma mais rápida de lançar. Em baixo volume, esse agrupamento funciona bem. Em escala de produção, cada uma dessas solicitações ainda paga o mesmo custo e latência por chamada que uma solicitação que realmente precisava da capacidade geral completa do modelo grande.',
          '**A Gartner coloca um número nesse padrão.** Sua previsão de abril de 2025 diz que, até 2027, as organizações usarão modelos de IA pequenos e específicos por tarefa pelo menos três vezes mais, em volume de uso, do que grandes modelos de linguagem de propósito geral. O raciocínio da Gartner é que modelos gerais perdem precisão em tarefas que exigem contexto específico de negócio, enquanto modelos menores respondem mais rápido e custam menos para operar e manter; a Gartner espera que as empresas os construam com geração aumentada por recuperação (RAG) ou com fine-tuning em seus próprios dados. É uma previsão, não um resultado medido, e até agora não encontramos uma medição independente dessa proporção de 3 para 1.',
          'Isso é diferente da questão de saber se os modelos pequenos agora são tão capazes quanto os modelos maiores de alguns anos atrás — uma tendência real e separada abordada na seção "Tendência 1" de nossa análise <a href="/pt/local-llms/future-of-local-llms">Future of Local LLMs</a>. Aquela tendência trata da melhoria da qualidade do modelo por parâmetro. Esta tendência trata da arquitetura de implantação: quais tarefas ganham seu próprio modelo pequeno dedicado, independentemente de quão inteligente esse modelo é em relação aos modelos grandes mais antigos.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: 'Como esse padrão de implantação de modelos pequenos se parece na prática?',
        content: [
          '**Na prática, esse padrão se parece com vários modelos pequenos rodando localmente, cada um lidando com uma tarefa estreita, coordenados por um roteador leve em vez de um único modelo grande lidando com todo tipo de solicitação.** Um modelo de classificação organiza tickets ou documentos recebidos; um modelo de extração retira campos estruturados de texto não estruturado; um modelo de roteamento decide qual sistema ou equipe posterior trata uma solicitação. Nenhum deles precisa do amplo conhecimento geral de um modelo grande de fronteira — cada um precisa apenas ser confiavelmente bom em uma tarefa estreita e bem definida.',
          '**A oferta mudou em 2026.** O Google lançou o Gemma 4 em 2 de abril de 2026: modelos edge de 2B efetivos (E2B) e 4B efetivos (E4B) que, segundo o Google, rodam totalmente offline em celulares e placas pequenas, além de modelos maiores, todos com licença Apache 2.0. A equipe Qwen da Alibaba publicou os modelos pequenos Qwen3.5, de 0.8B a 9B parâmetros, com licença Apache-2.0; o cartão do modelo de 0.8B cita o fine-tuning específico por tarefa como uso previsto, e o post de lançamento do Gemma 4 no Hugging Face lista caminhos de fine-tuning como TRL, PEFT e Unsloth Studio. O benefício prático em grande volume: modelos menores custam menos por requisição em hardware local ou on-premises, respondem mais rápido por não haver ida e volta a uma API externa, e podem ser atualizados ou substituídos de forma independente, sem mexer no restante do pipeline.',
          'Um artigo de pesquisa de junho de 2025, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (revisão mais recente em setembro de 2026), defende o mesmo ponto pelo lado da engenharia: modelos pequenos seriam «suficientemente poderosos, intrinsecamente mais adequados e necessariamente mais econômicos» para muitas subtarefas repetitivas em sistemas de agentes, e modelos maiores só seriam chamados quando a conversa ampla for necessária. É uma posição de pesquisa, não uma medição de mercado.',
          'A contrapartida a considerar é a maior complexidade operacional — rodar e manter vários modelos pequenos em vez de uma única integração de API exige mais infraestrutura e monitoramento. Organizações sem capacidade de MLOps existente podem achar que uma única API de modelo grande é mais simples de operar, mesmo com custo mais alto por solicitação, pelo menos até que o volume justifique a complexidade adicional. Para o lado de hardware de rodar vários modelos pequenos localmente, veja a parte 2, <a href="/pt/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU Normalization</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Essa é a mesma tendência de "modelos pequenos agora são tão bons quanto os antigos modelos grandes"?',
            a: 'Não — essa é uma tendência separada sobre a melhoria da qualidade do modelo por parâmetro ao longo do tempo, abordada na seção "Tendência 1" de nossa análise Future of Local LLMs. Esta tendência trata da economia da implantação: quais tarefas estreitas de alto volume ganham seu próprio modelo pequeno dedicado em escala de produção, independentemente de como a qualidade bruta desse modelo se compara aos antigos modelos grandes.',
          },
          {
            q: 'Que tipos de tarefas os analistas descrevem como migrando para modelos locais pequenos?',
            a: 'Tarefas estreitas, repetitivas e de alto volume — classificação, extração de dados estruturados, roteamento de solicitações e agentes internos de propósito único são os exemplos mais citados em previsões de adoção de IA empresarial. Tarefas conversacionais abertas não são o alvo dessa mudança.',
          },
          {
            q: 'Quem prevê essa mudança e quão sólida é a evidência?',
            a: 'A Gartner publicou a previsão numérica mais clara (abril de 2025: até 2027, pelo menos três vezes mais uso de modelos pequenos específicos por tarefa do que de LLMs gerais), e um artigo do arXiv de 2025 defende o argumento técnico. Ambos são previsões ou documentos de posição, não dados de adoção medidos.',
          },
          {
            q: 'Isso significa que os modelos grandes de propósito geral se tornam menos importantes?',
            a: 'Não necessariamente — as previsões descrevem modelos grandes sendo reservados para tarefas genuinamente abertas ou complexas, enquanto tarefas estreitas de alto volume são retiradas para modelos dedicados menores. É uma divisão de trabalho entre tamanhos de modelo, não uma substituição generalizada dos modelos grandes.',
          },
          {
            q: 'Quais modelos pequenos tornam isso viável hoje em hardware local?',
            a: 'Exemplos abertos de 2026 são Gemma 4 E2B e E4B (Apache 2.0, 2 de abril de 2026) e os modelos pequenos Qwen3.5 de 0.8B a 9B (Apache-2.0). Este artigo não os classifica: avalie com os dados da sua própria tarefa e, para o hardware, veja <a href="/pt/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">a parte 2, AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Gartner: previsão sobre modelos de IA pequenos e específicos por tarefa (9 de abril de 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — origem da previsão de uso três vezes maior',
          '[Google: post de lançamento do Gemma 4 (2 de abril de 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — tamanhos, Apache 2.0, afirmações sobre uso no dispositivo',
          '[Cartão do modelo Qwen3.5-0.8B (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, contexto de 262.144 tokens, uso previsto',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — o argumento de engenharia',
        ],
      },
    },
  },
  ar: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-ar.webp',
    title: 'اتجاهات الذكاء الاصطناعي المحلي 2027، الجزء 3 من 10: النماذج الصغيرة تتولى المهام الروتينية',
    seoTitle: 'اتجاهات الذكاء الاصطناعي المحلي 2027، الجزء 3 | Prompt Bites',
    metaDescription: 'تتوقع Gartner أن تستخدم المؤسسات النماذج الصغيرة المخصصة للمهام بحلول 2027 ثلاثة أضعاف النماذج العامة، وGemma 4 وQwen3.5 تجعل ذلك عمليًا محليًا.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'قادة الهندسة الذين يخططون لميزانيات بنية الذكاء الاصطناعي التحتية لمهام الأتمتة الضيقة وعالية الحجم',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>هذا هو الجزء 3 من 10 في سلسلة اتجاهات الذكاء الاصطناعي المحلي 2027: تتوقع Gartner أن تستخدم المؤسسات بحلول 2027 النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج اللغة الكبيرة العامة، وتجعل النماذج المفتوحة الصادرة في 2026 هذا النمط عمليًا على العتاد المحلي.</strong> هذا تحول في نمط النشر، وليس في القدرة: المسألة هي أي المهام تحصل على نموذج صغير مخصص على نطاق واسع، وليس أن النماذج الصغيرة أصبحت فجأة تضاهي ذكاء النماذج الكبيرة (يتم تناول هذا الجانب في تحليلنا المنفصل <a href="/ar/local-llms/future-of-local-llms">مستقبل نماذج اللغة المحلية الكبيرة</a>). راجع أيضًا الجزء 1، <a href="/ar/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">انهيار دعم السحابة</a>، والجزء 6، <a href="/ar/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">التوجيه الهجين بين المحلي والسحابي</a>، والجزء 8، <a href="/ar/prompt-bites/local-ai-trend-2027-local-agentic-ai">الذكاء الاصطناعي الوكيلي المحلي</a>.',
    quickAnswerTop: {
      ar: {
        question: 'لماذا يُتوقع أن تتولى نماذج اللغة الصغيرة المهام الضيقة في الشركات بحلول 2027؟',
        answer: 'لأنه عند حجم الطلبات المرتفع، فإن تمرير مهمة ضيقة ومتكررة — كالتصنيف والاستخراج وتوجيه النوايا — عبر نموذج كبير عام واحد يكلّف أكثر ويستغرق وقتًا أطول لكل طلب من نموذج صغير مضبوط لهذه المهمة تحديدًا. تتوقع Gartner أن تستخدم المؤسسات بحلول 2027 النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج LLM العامة، وتعمل النماذج المفتوحة الصادرة في 2026 مثل Gemma 4 (E2B وE4B) وQwen3.5 (من 0.8B إلى 9B) بترخيص Apache 2.0 على عتاد المستهلك.',
        bullets: [
          'نمط نشر وليس نمط ذكاء — يتعلق التحول بالحجم والتكلفة، لا بمضاهاة النماذج الصغيرة لجودة النماذج الكبيرة',
          'Gartner (أبريل 2025): بحلول 2027 سيكون استخدام النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج LLM العامة — توقع وليس نتيجة مقاسة',
          'وصل العرض في 2026: Gemma 4 (2 أبريل 2026) ونماذج Qwen3.5 الصغيرة بترخيص Apache 2.0 وتعمل محليًا',
          'أحمال العمل المستهدفة: التصنيف والاستخراج والتوجيه والوكلاء ذوو الغرض الواحد — وليس المحادثة المفتوحة',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تتوقع Gartner أن تستخدم المؤسسات بحلول 2027 النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج LLM العامة — توقع وليس نتيجة مقاسة',
          'المحرك هو اقتصاديات الحجم الكبير وليس ذكاء النموذج — النموذج الصغير المضبوط لمهمة ضيقة يكلّف أقل ويستجيب أسرع لكل طلب من نموذج عام كبير على نطاق واسع',
          'أصبح جانب العرض ملموسًا في 2026: Gemma 4 (2 أبريل 2026) ونماذج Qwen3.5 الصغيرة (من 0.8B إلى 9B) بترخيص Apache 2.0 وتعمل على عتاد محلي',
          'ورقة بحثية من 2025 تقدم الحجة الهندسية: النماذج الصغيرة قوية بما يكفي وأكثر اقتصادية لكثير من المهام الفرعية للوكلاء — موقف بحثي وليس بيانات سوق',
          'هذا اتجاه مختلف عن مضاهاة النماذج الصغيرة لجودة النماذج الكبيرة القديمة — راجع تحليل Future of Local LLMs المنفصل لهذا الجانب',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تتوقع Gartner أن تستخدم المؤسسات بحلول 2027 النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج LLM العامة، وتجعل النماذج المفتوحة لعام 2026 مثل Gemma 4 وQwen3.5 ذلك عمليًا على العتاد المحلي.' },
          { type: 'plain-terms', text: 'ببساطة: بدلاً من نموذج كبير واحد يجيب على كل أنواع الطلبات، من المتوقع أن تشغّل الشركات عدة نماذج صغيرة ورخيصة ومتخصصة — كل منها يؤدي مهمة ضيقة واحدة بسرعة كبيرة وبتكلفة منخفضة جدًا على نطاق واسع.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: 'لماذا يغيّر حجم الطلبات النموذج الأنسب؟',
        content: [
          '**طلب ضيق واحد بالكاد يهم، لكن مهمة ضيقة تُنفَّذ ملايين المرات شهريًا تتراكم بسرعة.** مصنّف تذاكر الدعم، أو مستخرج حقول المستندات، أو موجّه الطلبات هي أمثلة على مهام ضيقة ومتكررة وعالية الحجم — النوع الذي كان يُدمج سابقًا في استدعاء API لنموذج لغوي كبير عام الغرض لأن ذلك كان أسرع طريقة للإطلاق. عند الحجم المنخفض، هذا الدمج لا بأس به. لكن على نطاق الإنتاج، لا يزال كل طلب من هذه الطلبات يدفع نفس التكلفة وزمن الاستجابة لكل استدعاء مثل طلب كان بحاجة فعلية إلى القدرة العامة الكاملة للنموذج الكبير.',
          '**تضع Gartner رقمًا لهذا النمط.** يقول توقعها الصادر في أبريل 2025 إن المؤسسات ستستخدم بحلول 2027 نماذج الذكاء الاصطناعي الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل، من حيث حجم الاستخدام، من نماذج اللغة الكبيرة العامة. وتفسر Gartner ذلك بأن النماذج العامة تفقد دقتها في المهام التي تتطلب سياقًا تجاريًا محددًا، بينما تستجيب النماذج الأصغر أسرع وتكلّف أقل في التشغيل والصيانة؛ وتتوقع أن تبنيها الشركات عبر التوليد المعزز بالاسترجاع (RAG) أو الضبط الدقيق (fine-tuning) على بياناتها الخاصة. هذا توقع وليس نتيجة مقاسة، ولم نعثر حتى الآن على قياس مستقل لنسبة 3 إلى 1.',
          'يختلف هذا عن سؤال ما إذا كانت النماذج الصغيرة الآن قادرة بقدر النماذج الأكبر من قبل بضع سنوات — وهو اتجاه حقيقي ومنفصل تم تناوله في قسم "الاتجاه 1" من تحليلنا <a href="/ar/local-llms/future-of-local-llms">مستقبل نماذج اللغة المحلية الكبيرة</a>. يتعلق ذلك الاتجاه بتحسّن جودة النموذج لكل معامل. أما هذا الاتجاه فيتعلق ببنية النشر: أي المهام تحصل على نموذجها الصغير المخصص الخاص، بغض النظر عن مدى ذكاء ذلك النموذج مقارنة بالنماذج الكبيرة القديمة.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: 'كيف يبدو نمط نشر النماذج الصغيرة عمليًا؟',
        content: [
          '**عمليًا، يبدو هذا النمط كعدة نماذج صغيرة تعمل محليًا، كل منها يتعامل مع مهمة ضيقة، منسقة بواسطة موجّه خفيف بدلاً من نموذج كبير واحد يتعامل مع كل نوع طلب.** نموذج تصنيف يفرز التذاكر أو المستندات الواردة؛ ونموذج استخراج يسحب حقولًا منظمة من نص غير منظم؛ ونموذج توجيه يقرر أي نظام أو فريق لاحق يتعامل مع طلب ما. لا يحتاج أي منها إلى المعرفة العامة الواسعة لنموذج طليعي كبير — يحتاج كل منها فقط إلى أن يكون جيدًا وموثوقًا في مهمة ضيقة ومحددة جيدًا.',
          '**تحرك جانب العرض في 2026.** أطلقت Google نموذج Gemma 4 في 2 أبريل 2026: نماذج حافة بحجم فعّال 2B (E2B) وحجم فعّال 4B (E4B) تقول Google إنها تعمل دون اتصال بالكامل على الهواتف واللوحات الصغيرة، إضافة إلى نماذج أكبر، وجميعها بترخيص Apache 2.0. ونشر فريق Qwen في Alibaba نماذج Qwen3.5 الصغيرة من 0.8B إلى 9B معامل بترخيص Apache-2.0؛ وتذكر بطاقة نموذج 0.8B الضبط الدقيق الخاص بمهمة معينة ضمن الاستخدامات المقصودة، ويسرد منشور إطلاق Gemma 4 على Hugging Face مسارات للضبط الدقيق مثل TRL وPEFT وUnsloth Studio. الفائدة العملية عند الحجم الكبير: النماذج الأصغر أرخص لكل طلب على عتاد محلي أو داخل المؤسسة، وتستجيب أسرع لعدم وجود ذهاب وإياب إلى واجهة API خارجية، ويمكن تحديثها أو استبدالها بشكل مستقل دون المساس ببقية خط المعالجة.',
          'تقدم ورقة بحثية صادرة في يونيو 2025 بعنوان [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (آخر مراجعة في سبتمبر 2026) الحجة نفسها من الجانب الهندسي: النماذج الصغيرة «قوية بما يكفي، وأنسب بطبيعتها، وأكثر اقتصادية بالضرورة» لكثير من المهام الفرعية المتكررة داخل أنظمة الوكلاء، ولا تُستدعى النماذج الأكبر إلا عند الحاجة إلى محادثة واسعة. هذا موقف بحثي وليس قياسًا للسوق.',
          'المفاضلة التي ينبغي التخطيط لها هي زيادة التعقيد التشغيلي — تشغيل وصيانة عدة نماذج صغيرة بدلاً من تكامل API واحد يتطلب بنية تحتية ومراقبة أكثر. قد تجد المؤسسات التي تفتقر إلى قدرة MLOps موجودة أن API واحد لنموذج كبير أبسط في التشغيل، حتى بتكلفة أعلى لكل طلب، على الأقل حتى يبرر الحجم التعقيد الإضافي. بخصوص الجانب الخاص بالأجهزة لتشغيل عدة نماذج صغيرة محليًا، راجع الجزء 2، <a href="/ar/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">توحيد أجهزة الكمبيوتر الشخصي للذكاء الاصطناعي / NPU</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل هذا هو نفس اتجاه "النماذج الصغيرة أصبحت الآن جيدة بقدر النماذج الكبيرة القديمة"؟',
            a: 'لا — ذلك اتجاه منفصل يتعلق بتحسّن جودة النموذج لكل معامل بمرور الوقت، تم تناوله في قسم "الاتجاه 1" من تحليلنا لمستقبل نماذج اللغة المحلية الكبيرة. يتعلق هذا الاتجاه باقتصاديات النشر: أي المهام الضيقة عالية الحجم تحصل على نموذجها الصغير المخصص الخاص على نطاق الإنتاج، بغض النظر عن كيفية مقارنة الجودة الخام لذلك النموذج بالنماذج الكبيرة القديمة.',
          },
          {
            q: 'ما أنواع المهام التي يصفها المحللون بأنها تتحول إلى نماذج محلية صغيرة؟',
            a: 'مهام ضيقة ومتكررة وعالية الحجم — التصنيف، واستخراج البيانات المنظمة، وتوجيه الطلبات، والوكلاء الداخليون أحاديو الغرض هي الأمثلة الأكثر ذكرًا في توقعات اعتماد الذكاء الاصطناعي في الشركات. المهام الحوارية المفتوحة ليست هدف هذا التحول.',
          },
          {
            q: 'من يتوقع هذا التحول، وما مدى قوة الدليل؟',
            a: 'نشرت Gartner أوضح توقع رقمي (أبريل 2025: بحلول 2027 يكون استخدام النماذج الصغيرة المخصصة للمهام أكثر بثلاث مرات على الأقل من نماذج LLM العامة)، وتقدم ورقة arXiv من 2025 الحجة الهندسية. كلاهما توقع أو ورقة موقف، وليسا بيانات اعتماد مقاسة.',
          },
          {
            q: 'هل يعني هذا أن النماذج الكبيرة عامة الغرض تصبح أقل أهمية؟',
            a: 'ليس بالضرورة — تصف التوقعات احتفاظ النماذج الكبيرة بالمهام المفتوحة أو المعقدة حقًا، بينما تُنقل المهام الضيقة عالية الحجم إلى نماذج مخصصة أصغر. إنه تقسيم عمل بين أحجام النماذج، وليس استبدالًا شاملاً للنماذج الكبيرة.',
          },
          {
            q: 'أي النماذج الصغيرة تجعل ذلك عمليًا اليوم على العتاد المحلي؟',
            a: 'من الأمثلة المفتوحة الصادرة في 2026: Gemma 4 E2B وE4B (Apache 2.0، 2 أبريل 2026) ونماذج Qwen3.5 الصغيرة من 0.8B إلى 9B (Apache-2.0). لا يصنّفها هذا المقال: قيّمها على بيانات مهمتك الخاصة، وللجانب المتعلق بالعتاد راجع <a href="/ar/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">الجزء 2، AI PC / NPU Normalization</a>.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Gartner: توقع حول نماذج الذكاء الاصطناعي الصغيرة المخصصة للمهام (9 أبريل 2025)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — مصدر توقع الاستخدام بثلاثة أضعاف',
          '[Google: منشور إطلاق Gemma 4 (2 أبريل 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — الأحجام وApache 2.0 وادعاءات التشغيل على الجهاز',
          '[بطاقة نموذج Qwen3.5-0.8B (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0 وسياق 262,144 رمزًا والاستخدام المقصود',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — الحجة الهندسية',
        ],
      },
    },
  },
  ko: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-small-language-models-overview-hero-ko.webp',
    title: '로컬 AI 트렌드 2027, 10부작 중 3부: 소형 모델이 지루한 업무를 맡는다',
    seoTitle: '로컬 AI 트렌드 2027, 3부: 소형 모델의 부상 | Prompt Bites',
    metaDescription: 'Gartner는 2027년까지 작업 특화 소형 모델의 사용량이 범용 LLM의 3배 이상이 될 것으로 예측하며, Gemma 4와 Qwen3.5가 로컬 운영을 현실로 만듭니다.',
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_models_mentioned: [
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 0.8B',
      'Qwen3.5 4B',
      'Qwen3.5 9B',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '좁고 대량인 자동화 작업을 위한 AI 인프라 예산을 계획하는 엔지니어링 리더',
    siblingBites: ['local-ai-trend-2027-cloud-subsidy-collapse', 'local-ai-trend-2027-ai-pc-npu-normalization', 'local-ai-trend-2027-private-rag', 'local-ai-trend-2027-frontier-desktop-ai', 'local-ai-trend-2027-hybrid-local-cloud-routing', 'local-ai-trend-2027-ai-nas-home-server', 'local-ai-trend-2027-local-agentic-ai', 'local-ai-trend-2027-data-sovereignty-compliance', 'local-ai-trend-2027-no-code-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>이 글은 로컬 AI 트렌드 2027 시리즈 전 10부 중 3부입니다. Gartner는 2027년까지 조직이 작업 특화 소형 모델을 범용 대규모 언어 모델보다 최소 세 배 더 많이 사용할 것으로 예측하며, 2026년에 공개된 오픈 모델이 이 패턴을 로컬 하드웨어에서 실현 가능하게 만들고 있습니다.</strong> 이는 능력의 변화가 아니라 배포 패턴의 변화입니다. 핵심은 어떤 작업이 대규모로 전용 소형 모델을 갖게 되는가이지, 소형 모델이 갑자기 대형 모델의 지능에 필적하게 된다는 이야기가 아닙니다(그 측면은 별도의 <a href="/ko/local-llms/future-of-local-llms">로컬 LLM의 미래</a> 분석에서 다룹니다). 1부 <a href="/ko/prompt-bites/local-ai-trend-2027-cloud-subsidy-collapse">클라우드 보조금 붕괴</a>, 6부 <a href="/ko/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing">하이브리드 로컬-클라우드 라우팅</a>, 8부 <a href="/ko/prompt-bites/local-ai-trend-2027-local-agentic-ai">로컬 에이전틱 AI</a>도 함께 참고하세요.',
    quickAnswerTop: {
      ko: {
        question: '2027년까지 소형 언어 모델이 좁은 기업 업무를 맡을 것으로 전망되는 이유는 무엇인가요?',
        answer: '요청량이 많을 때 분류, 추출, 의도 라우팅처럼 좁고 반복적인 작업을 하나의 대형 범용 모델로 처리하면, 그 작업에 맞게 조정한 소형 모델보다 요청당 비용과 지연이 더 크기 때문입니다. Gartner는 2027년까지 조직이 작업 특화 소형 모델을 범용 LLM보다 최소 세 배 더 많이 사용할 것으로 예측하며, 2026년에 공개된 Gemma 4(E2B, E4B)와 Qwen3.5(0.8B~9B) 같은 Apache 2.0 오픈 모델은 일반 소비자용 하드웨어에서 실행됩니다.',
        bullets: [
          '지능 패턴이 아니라 배포 패턴입니다 — 변화의 핵심은 규모와 비용이며, 소형 모델이 대형 모델의 품질을 따라잡는다는 뜻이 아닙니다',
          'Gartner(2025년 4월): 2027년까지 작업 특화 소형 모델 사용량이 범용 LLM의 최소 3배 — 측정 결과가 아닌 예측입니다',
          '공급 측면은 2026년에 갖춰졌습니다: Gemma 4(2026년 4월 2일)와 Qwen3.5 소형 모델은 Apache 2.0이며 로컬에서 실행됩니다',
          '대상 워크로드: 분류, 추출, 라우팅, 단일 목적 에이전트 — 자유 대화형 채팅이 아닙니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gartner는 2027년까지 조직이 작업 특화 소형 모델을 범용 LLM보다 최소 세 배 더 많이 사용할 것으로 예측합니다 — 측정 결과가 아닌 예측입니다',
          '동력은 모델 지능이 아니라 대량 처리 시의 경제성입니다 — 좁은 작업에 맞게 조정한 소형 모델은 대규모에서 범용 대형 모델보다 요청당 비용이 낮고 응답이 빠릅니다',
          '공급 측면은 2026년에 구체화되었습니다: Gemma 4(2026년 4월 2일)와 Qwen3.5 소형 모델(0.8B~9B)은 Apache 2.0이며 로컬 하드웨어에서 실행됩니다',
          '2025년 연구 논문은 기술적 근거를 제시합니다: 많은 에이전트 하위 작업에는 소형 모델이 충분히 강력하고 더 경제적이라는 것으로, 시장 데이터가 아닌 연구상의 입장입니다',
          '이는 소형 모델이 과거 대형 모델의 품질에 필적한다는 트렌드와는 다릅니다 — 해당 측면은 별도의 Future of Local LLMs 분석을 참고하세요',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Gartner는 2027년까지 조직이 작업 특화 소형 모델을 범용 LLM보다 최소 세 배 더 많이 사용할 것으로 예측하며, Gemma 4와 Qwen3.5 같은 2026년 오픈 모델이 이를 로컬 하드웨어에서 실현 가능하게 만듭니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 하나의 큰 모델이 모든 종류의 요청에 답하는 대신, 기업들은 여러 개의 작고 저렴하며 특화된 모델을 운영해 각각 하나의 좁은 작업을 대규모로 매우 빠르고 매우 저렴하게 처리할 것으로 예상됩니다.' },
        ],
      },
      whyVolumeChangesTheMath: {
        id: 'why-volume-changes-the-math',
        title: '요청량이 어떤 모델이 적합한지를 왜 바꾸는가?',
        content: [
          '**하나의 좁은 요청은 거의 중요하지 않지만, 좁은 작업을 한 달에 수백만 번 실행하면 빠르게 누적됩니다.** 지원 티켓 분류기, 문서 필드 추출기, 요청 라우터는 좁고 반복적이며 대량인 작업의 예로, 예전에는 가장 빠르게 출시할 수 있는 방법이었기 때문에 범용 LLM API 호출로 묶여 처리되곤 했습니다. 낮은 볼륨에서는 이런 묶음 처리가 문제없습니다. 하지만 프로덕션 규모에서는 이러한 요청 하나하나가, 실제로 대형 모델의 전체 범용 능력이 필요한 요청과 동일한 호출당 비용과 지연을 계속 지불하게 됩니다.',
          '**Gartner는 이 패턴을 수치로 제시했습니다.** 2025년 4월 예측에 따르면 2027년까지 조직은 작업 특화 소형 AI 모델을 사용량 기준으로 범용 대규모 언어 모델보다 최소 세 배 더 많이 사용하게 됩니다. Gartner는 범용 모델이 특정 비즈니스 맥락이 필요한 작업에서 정확도가 떨어지는 반면, 소형 모델은 응답이 빠르고 운영·유지 비용이 낮다고 설명하며, 기업이 자사 데이터에 대한 검색 증강 생성(RAG)이나 파인튜닝으로 이를 구축할 것으로 봅니다. 이는 예측이며 측정 결과가 아니고, 3배라는 비율을 독립적으로 측정한 자료는 아직 찾지 못했습니다.',
          '이는 소형 모델이 이제 몇 년 전의 대형 모델만큼 유능해졌는가라는 질문과는 다릅니다 — 이는 당사의 <a href="/ko/local-llms/future-of-local-llms">로컬 LLM의 미래</a> 분석의 "트렌드 1" 섹션에서 다루는 실재하는 별개의 트렌드입니다. 그 트렌드는 파라미터당 모델 품질 향상에 관한 것입니다. 이 트렌드는 배포 아키텍처에 관한 것으로, 그 모델이 예전 대형 모델에 비해 얼마나 똑똑한지와 무관하게 어떤 작업이 전용 소형 모델을 갖게 되는지에 관한 것입니다.',
        ],
      },
      whatThisLooksLikeInPractice: {
        id: 'what-this-looks-like-in-practice',
        title: '실제로 소형 모델 배포 패턴은 어떤 모습인가?',
        content: [
          '**실제로 이 패턴은 로컬에서 실행되는 여러 개의 소형 모델이 각각 하나의 좁은 작업을 처리하고, 모든 요청 유형을 처리하는 하나의 대형 모델 대신 경량 라우터가 이를 조율하는 형태로 나타납니다.** 분류 모델이 들어오는 티켓이나 문서를 분류하고, 추출 모델이 비정형 텍스트에서 구조화된 필드를 뽑아내며, 라우팅 모델이 어떤 다운스트림 시스템이나 팀이 요청을 처리할지 결정합니다. 이 중 어느 것도 대형 프런티어 모델의 폭넓은 일반 지식이 필요하지 않습니다 — 각각은 좁고 명확하게 정의된 작업에서 안정적으로 우수하기만 하면 됩니다.',
          '**공급 측면은 2026년에 움직였습니다.** Google은 2026년 4월 2일 Gemma 4를 공개했습니다. 유효 2B(E2B)와 유효 4B(E4B) 엣지 모델은 Google에 따르면 스마트폰과 소형 보드에서 완전히 오프라인으로 실행되며, 더 큰 모델도 함께 공개되었고 모두 Apache 2.0입니다. Alibaba의 Qwen 팀은 0.8B에서 9B 파라미터까지의 Qwen3.5 소형 모델을 Apache-2.0으로 공개했으며, 0.8B 모델 카드는 작업 특화 파인튜닝을 의도된 용도로 명시하고, Hugging Face의 Gemma 4 출시 글은 TRL, PEFT, Unsloth Studio 같은 파인튜닝 경로를 나열합니다. 대량 처리 시의 실용적 이점은 소형 모델이 로컬 또는 온프레미스 하드웨어에서 요청당 비용이 낮고, 외부 API 왕복이 없어 응답이 빠르며, 나머지 파이프라인을 건드리지 않고 독립적으로 업데이트하거나 교체할 수 있다는 점입니다.',
          '2025년 6월 연구 논문 [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153)(최신 개정은 2026년 9월)는 엔지니어링 측면에서 같은 주장을 합니다. 에이전트 시스템 내 많은 반복적 하위 작업에는 소형 모델이 "충분히 강력하고, 본질적으로 더 적합하며, 필연적으로 더 경제적"이고, 더 큰 모델은 폭넓은 대화 능력이 필요할 때만 호출한다는 것입니다. 이는 연구상의 입장이며 시장 측정 결과가 아닙니다.',
          '고려해야 할 트레이드오프는 운영 복잡성의 증가입니다 — 단일 API 통합 대신 여러 개의 소형 모델을 운영하고 유지 관리하려면 더 많은 인프라와 모니터링이 필요합니다. 기존 MLOps 역량이 없는 조직은 요청당 비용이 더 높더라도 단일 대형 모델 API를 운영하는 것이 더 간단하다고 느낄 수 있습니다 — 적어도 볼륨이 추가적인 복잡성을 정당화할 때까지는요. 여러 소형 모델을 로컬에서 실행하는 하드웨어 측면에 대해서는 2부 <a href="/ko/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">AI PC / NPU 표준화</a>를 참고하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이것은 "소형 모델이 이제 예전 대형 모델만큼 우수하다"는 것과 같은 트렌드인가요?',
            a: '아닙니다 — 그것은 시간이 지남에 따라 파라미터당 모델 품질이 향상되는 것에 관한 별개의 트렌드로, 당사의 로컬 LLM의 미래 분석 "트렌드 1" 섹션에서 다룹니다. 이 트렌드는 배포 경제성에 관한 것으로, 그 모델의 원시 품질이 예전 대형 모델과 어떻게 비교되는지와 무관하게 프로덕션 규모에서 어떤 좁고 대량인 작업이 전용 소형 모델을 갖게 되는지에 관한 것입니다.',
          },
          {
            q: '애널리스트들은 어떤 종류의 작업이 소형 로컬 모델로 이동하고 있다고 설명하나요?',
            a: '좁고 반복적이며 대량인 작업입니다 — 분류, 구조화된 데이터 추출, 요청 라우팅, 단일 목적 내부 에이전트가 기업 AI 도입 전망에서 가장 자주 인용되는 예입니다. 개방형 대화 작업은 이 변화의 대상이 아닙니다.',
          },
          {
            q: '누가 이 변화를 예측하며, 근거는 얼마나 확실합니까?',
            a: 'Gartner가 가장 명확한 수치 예측을 발표했고(2025년 4월: 2027년까지 작업 특화 소형 모델 사용량이 범용 LLM의 최소 3배), 2025년 arXiv 논문이 기술적 근거를 제시합니다. 둘 다 예측 또는 입장 문서이며, 측정된 도입 데이터가 아닙니다.',
          },
          {
            q: '이것이 대형 범용 모델의 중요성이 낮아진다는 의미인가요?',
            a: '반드시 그런 것은 아닙니다 — 전망들은 대형 모델이 진정으로 개방형이거나 복잡한 작업을 위해 남겨지고, 좁고 대량인 작업은 더 작은 전용 모델로 분리된다고 설명합니다. 이는 대형 모델을 전면적으로 대체하는 것이 아니라 모델 크기 간의 업무 분담입니다.',
          },
          {
            q: '현재 로컬 하드웨어에서 이를 가능하게 하는 소형 모델은 무엇입니까?',
            a: '2026년에 공개된 오픈 모델 예로는 Gemma 4 E2B와 E4B(Apache 2.0, 2026년 4월 2일), 0.8B~9B Qwen3.5 소형 모델(Apache-2.0)이 있습니다. 이 글은 순위를 매기지 않습니다. 자체 작업 데이터로 평가하시고, 하드웨어 측면은 <a href="/ko/prompt-bites/local-ai-trend-2027-ai-pc-npu-normalization">2부 AI PC / NPU Normalization</a>을 참고하세요.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Gartner: 작업 특화 소형 AI 모델 예측(2025년 4월 9일)](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models) — 사용량 3배 예측의 출처',
          '[Google: Gemma 4 출시 글(2026년 4월 2일)](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — 크기, Apache 2.0, 온디바이스 관련 설명',
          '[Qwen3.5-0.8B 모델 카드(Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B) — Apache-2.0, 262,144 토큰 컨텍스트, 의도된 용도',
          '[arXiv 2506.02153: Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) — 엔지니어링 측면의 근거',
        ],
      },
    },
  },
}
