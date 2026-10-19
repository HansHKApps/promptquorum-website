import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

const siblingBites = [
  'local-ai-trend-2027-cloud-subsidy-collapse',
  'local-ai-trend-2027-ai-pc-npu-normalization',
  'local-ai-trend-2027-small-language-models',
  'local-ai-trend-2027-private-rag',
  'local-ai-trend-2027-frontier-desktop-ai',
  'local-ai-trend-2027-hybrid-local-cloud-routing',
  'local-ai-trend-2027-ai-nas-home-server',
  'local-ai-trend-2027-local-agentic-ai',
  'local-ai-trend-2027-no-code-fine-tuning',
]

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-en.webp',
    title: 'Local AI Trends 2027, Part 9 of 10: The Regulatory Calendar Local AI Teams Should Watch',
    seoTitle: 'Local AI Trends 2027, Part 9: The Regulatory Calendar | Prompt Bites',
    metaDescription: "Part 9 of 10: the Digital Omnibus moved EU AI Act high-risk dates to December 2027 and August 2028; plus Data Act cloud-switching rules and data localization.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Compliance and engineering leads planning local AI infrastructure investment around upcoming regulatory deadlines',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>This is Part 9 of 10 in PromptQuorum\'s Local AI Trends 2027 series — see [Part 3: Small Language Models](/prompt-bites/local-ai-trend-2027-small-language-models), [Part 6: Hybrid Local-Cloud Routing](/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing), and [Part 10: No-Code Fine-Tuning](/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) for the rest of the series.</strong> Three regulatory developments matter for teams running local or on-device AI: the EU AI Act\'s high-risk obligations, which the Digital Omnibus on AI (Regulation [(EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), published 24 July 2026) postponed to 2 December 2027 for Annex III systems and 2 August 2028 for AI embedded in regulated products; continued tightening of sector-specific rules in finance and healthcare; and data-localization and cloud-switching rules, including the EU Data Act\'s ban on switching charges from 12 January 2027 (Article 29 of [Regulation (EU) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). Dates in other jurisdictions are still moving, and this is general information, not legal advice — confirm against the Official Journal and with your own counsel.',
    quickAnswerTop: {
      en: {
        question: 'What regulatory changes should local AI teams watch for around 2027?',
        answer: "Three developments are worth tracking. First, the EU AI Act's high-risk dates have moved: the Digital Omnibus on AI, published as Regulation (EU) 2026/1744 on 24 July 2026, postponed obligations for stand-alone high-risk systems (Annex III) from 2 August 2026 to 2 December 2027, and for AI embedded in regulated products (Annex I) to 2 August 2028. Second, finance and healthcare regulators may continue tightening sector-specific data-processing rules. Third, data-localization and cloud-switching rules keep expanding, including the EU Data Act's ban on switching charges from 12 January 2027 (Article 29, Regulation (EU) 2023/2854). Each pushes some workloads toward local or on-device inference. This is general information, not legal advice.",
        bullets: [
          "EU AI Act (changed): Annex III high-risk obligations now apply from 2 December 2027 (previously 2 August 2026) and Annex I product-embedded AI from 2 August 2028 (previously 2 August 2027), under Regulation (EU) 2026/1744, in force since 27 July 2026",
          "Nudifier ban and AI-content marking: under the adopted regulation, the new ban on nudifier apps applies from 2 December 2026, and generative AI systems on the market before 2 August 2026 have until 2 December 2026 to meet the Article 50(2) marking duty",
          "Finance and healthcare: sector regulators may continue narrowing where patient and financial data may be processed and analyzed",
          "Data localization and cloud switching: Article 29 of the EU Data Act (Regulation (EU) 2023/2854) bans cloud switching charges from 12 January 2027, and other jurisdictions are expanding residency rules, so check each national source directly",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "The Digital Omnibus on AI (Regulation (EU) 2026/1744) postponed the EU AI Act's high-risk obligations to 2 December 2027 (Annex III) and 2 August 2028 (Annex I), so the earlier August 2026 and August 2027 dates no longer apply",
          "The postponement is not a blanket delay: general-purpose AI model duties have applied since 2 August 2025, and transparency rules follow their own dates — check each article instead of assuming everything moved",
          "Finance and healthcare regulators may continue tightening sector-specific data-processing rules independent of general EU AI Act timelines",
          "Article 29 of the EU Data Act (Regulation (EU) 2023/2854) bans cloud switching charges from 12 January 2027, which lowers the cost of moving a workload between providers or back on-premises",
          "Dates outside the EU, and implementation guidance everywhere, keep changing — verify against official sources; this is general information, not legal advice",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "The EU AI Act's high-risk obligations were postponed to 2 December 2027 (Annex III) and 2 August 2028 (Annex I), while sector rules and data-localization and cloud-switching rules keep pushing different workloads toward local AI." },
          { type: 'plain-terms', text: "In plain terms: the EU pushed its biggest AI Act deadlines back by more than a year, but other rules still apply on their own schedules, and each gives a different type of workload a reason to move from cloud APIs to local or on-device processing." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Which EU AI Act High-Risk Dates Apply After the Digital Omnibus?",
        content: [
          "**Under the Digital Omnibus on AI, published as Regulation (EU) 2026/1744 in the Official Journal on 24 July 2026, the EU AI Act's high-risk obligations now apply from 2 December 2027 for stand-alone Annex III use cases (such as employment or critical infrastructure) and from 2 August 2028 for AI that is a safety component of products under EU sectoral safety law (Annex I, such as medical devices, machinery, and vehicles).** Before the change, these dates were 2 August 2026 and 2 August 2027. Parliament and Council negotiators reached a provisional deal on 7 May 2026, Parliament approved the text on 16 June, and the Council gave its final approval on 29 June 2026; the regulation was signed on 8 July 2026 and, under its Article 4, entered into force on the third day after publication, 27 July 2026. Sources: [Regulation (EU) 2026/1744 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [Council press release](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [European Parliament](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "The postponement does not remove the Act: obligations for general-purpose AI models have applied since 2 August 2025, and, under the adopted regulation ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)), a new ban on nudifier apps applies from 2 December 2026, while generative AI systems already on the market before 2 August 2026 have until 2 December 2026 to meet the Article 50(2) marking (watermarking) duty. Because the Act has already been amended once, treat every date as the current legal position rather than a guarantee, and check the consolidated text.",
          "The practical consequence for local AI teams: products that embed AI as a safety component will need to document data flows and processing locations as part of conformity assessment, and the later dates give more time to design that in. Running inference on-device or on infrastructure fully inside the EU simplifies that documentation compared with routing safety-relevant inference through external cloud APIs. This is general information, not legal advice. For the general enterprise-compliance backdrop, see [Enterprise Compliance: GDPR, HIPAA, SOC2, and AI Regulations](/local-llms/enterprise-compliance-local-llms) and [AI Geopolitics Explained: EU AI Act vs US vs China](/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: 'Are Finance and Healthcare Rules Tightening Faster Than General AI Law?',
        content: [
          '**Sector regulators in finance and healthcare have historically moved ahead of general AI legislation, and that pattern may continue through 2027.** For example, a Reserve Bank of India circular of 6 April 2018 requires payment system providers to store payment data only in India ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), and healthcare regulators layer patient-data rules on top of general privacy law; neither category waits for an omnibus AI law to finish phasing in.',
          "Regulated-sector teams increasingly face the question of where model inference actually happens, not only where training data is stored. On-device or on-premises inference gives a verifiable answer to \"where does processing happen\" that a third-party cloud API often cannot. We have not verified a specific analyst projection for this, so treat it as a planning assumption, not a forecast.",
          'This is a narrower, faster-moving pressure than the general compliance-and-AI-Act narrative — see [Why Enterprises Use Local LLMs: Cost, Compliance, and Control](/local-llms/why-enterprises-use-local-llms) for that broader background.',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'Which Markets Are Expanding Data-Localization Rules Next?',
        content: [
          "**Several jurisdictions have adopted or are formalizing rules requiring certain data categories to stay within national borders.** Verified examples include Vietnam's Decree 53/2022/ND-CP, in effect since 1 October 2022, which requires specified domestic and foreign service providers to store certain user data in Vietnam ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/)), and the Reserve Bank of India's 2018 circular on payment data ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). Exact scope and enforcement dates vary by country and are still being finalized in several markets, and this article has not verified each country's current status, so check national sources and counsel before relying on any timeline.",
          'For teams operating across these markets, the practical effect is the same regardless of exactly when each rule takes hold: workloads touching in-scope data categories increasingly need to run in-country, which favors local or regionally hosted inference over a single centralized cloud deployment serving every market.',
          "Within the EU, the Data Act (Regulation (EU) 2023/2854) has applied since 12 September 2025. According to [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services), switching charges for data processing services such as cloud are capped at the provider's direct costs until 12 January 2027 and banned from that date, including data-egress charges tied to a switch. For local AI teams this lowers the cost of moving a workload from a hosted service to on-premises inference, although ongoing traffic and early-termination fees in fixed-term contracts can remain chargeable. It is a portability rule, not a localization mandate.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: "Are the EU AI Act dates in this article final?",
            a: "They are the dates in force after Regulation (EU) 2026/1744, in force since 27 July 2026: 2 December 2027 for Annex III and 2 August 2028 for Annex I. The Commission still has to issue guidance for product-embedded AI, further amendments are always possible, and sector-specific and data-localization rules in other jurisdictions are set nationally and can shift. Check the Official Journal and your own counsel; this is general information, not legal advice.",
          },
          {
            q: 'Does this mean every AI system needs to run locally by 2027?',
            a: 'No. These milestones apply to specific categories — AI embedded as a safety component in regulated products, sector-regulated data in finance and healthcare, and data categories covered by localization rules in specific jurisdictions. Most general-purpose AI use is unaffected; the shift toward local inference is concentrated in these narrower, regulated categories.',
          },
          {
            q: 'How is this different from the general "compliance drives local AI" argument?',
            a: 'That general argument is covered in depth elsewhere on this site — see <a href="/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">Why Enterprises Use Local LLMs</a> and <a href="/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">Enterprise Compliance: GDPR, HIPAA, SOC2, and AI Regulations</a>. This article focuses specifically on named milestones expected to escalate around 2027, not a restatement of why compliance matters for local AI in general.',
          },
          {
            q: 'What should a compliance or engineering lead do now, given the uncertainty?',
            a: 'Build architecture flexible enough to route regulated categories of workload to local or in-country inference without a full rebuild, rather than waiting for a specific enforcement date to be finalized. That way, whichever date each rule actually lands on, the technical capability is already in place.',
          },
          {
            q: "What changed in the EU AI Act timeline during 2026?",
            a: "Parliament and Council negotiators reached a provisional deal on 7 May 2026, Parliament approved it on 16 June, the Council gave final approval on 29 June, and the regulation was signed on 8 July. It was published in the Official Journal on 24 July and entered into force on 27 July 2026. It moved high-risk obligations from 2 August 2026 and 2 August 2027 to 2 December 2027 and 2 August 2028. See the <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">Regulation (EU) 2026/1744 on EUR-Lex</a>, the <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">Council press release</a> and the <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">European Parliament summary</a>.",
          },
        ],
      },
    },
  },
  de: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-de.webp',
    title: 'Lokale KI-Trends 2027, Teil 9 von 10: Der regulatorische Kalender für lokale KI-Teams',
    seoTitle: 'Lokale KI-Trends 2027, Teil 9: Der regulatorische Kalender | Prompt Bites',
    metaDescription: "Teil 9 von 10: Der Digital Omnibus verschiebt die Hochrisiko-Fristen des EU AI Act auf Dezember 2027 und August 2028 — plus Data Act und Datenlokalisierung.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Compliance- und Engineering-Verantwortliche, die Investitionen in lokale KI-Infrastruktur im Hinblick auf kommende regulatorische Fristen planen',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>Dies ist Teil 9 von 10 der Serie „Lokale KI-Trends 2027" von PromptQuorum — siehe [Teil 3: Kleine Sprachmodelle](/de/prompt-bites/local-ai-trend-2027-small-language-models), [Teil 6: Hybrides Lokal-Cloud-Routing](/de/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing) und [Teil 10: No-Code-Fine-Tuning](/de/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) für den Rest der Serie.</strong> Drei regulatorische Entwicklungen sind für Teams mit lokaler oder On-Device-KI wichtig: die Hochrisiko-Pflichten des EU AI Act, die der Digital Omnibus on AI (Verordnung [(EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), veröffentlicht am 24. Juli 2026) für Anhang-III-Systeme auf den 2. Dezember 2027 und für in regulierte Produkte eingebettete KI auf den 2. August 2028 verschoben hat; die fortgesetzte Verschärfung branchenspezifischer Regeln in Finanz- und Gesundheitswesen; sowie Datenlokalisierungs- und Cloud-Wechselregeln, darunter das Verbot von Wechselentgelten nach dem EU Data Act ab dem 12. Januar 2027 (Artikel 29 der [Verordnung (EU) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). Termine in anderen Rechtsordnungen ändern sich weiterhin; dies sind allgemeine Informationen, keine Rechtsberatung — bitte mit dem Amtsblatt und der eigenen Rechtsberatung abgleichen.',
    quickAnswerTop: {
      de: {
        question: 'Welche regulatorischen Änderungen sollten lokale KI-Teams um 2027 im Blick behalten?',
        answer: "Drei Entwicklungen sind es wert, verfolgt zu werden. Erstens haben sich die Hochrisiko-Termine des EU AI Act verschoben: Der Digital Omnibus on AI, veröffentlicht als Verordnung (EU) 2026/1744 am 24. Juli 2026, hat die Pflichten für eigenständige Hochrisiko-Systeme (Anhang III) vom 2. August 2026 auf den 2. Dezember 2027 und für in regulierte Produkte eingebettete KI (Anhang I) auf den 2. August 2028 verschoben. Zweitens könnten Finanz- und Gesundheitsaufsichtsbehörden branchenspezifische Datenverarbeitungsregeln weiter verschärfen. Drittens wachsen Datenlokalisierungs- und Cloud-Wechselregeln weiter, darunter das Verbot von Wechselentgelten nach dem EU Data Act ab dem 12. Januar 2027 (Artikel 29, Verordnung (EU) 2023/2854). Jede dieser Entwicklungen verschiebt bestimmte Workloads hin zu lokaler oder On-Device-Inferenz. Dies sind allgemeine Informationen, keine Rechtsberatung.",
        bullets: [
          "EU AI Act (geändert): Hochrisiko-Pflichten nach Anhang III gelten nun ab dem 2. Dezember 2027 (zuvor 2. August 2026), in Produkte eingebettete KI nach Anhang I ab dem 2. August 2028 (zuvor 2. August 2027), gemäß Verordnung (EU) 2026/1744, die seit dem 27. Juli 2026 in Kraft ist",
          "Nudifier-Verbot und Kennzeichnung: Nach der verabschiedeten Verordnung gilt das neue Verbot von „Nudifier“-Apps ab dem 2. Dezember 2026, und generative KI-Systeme, die vor dem 2. August 2026 auf dem Markt waren, haben bis zum 2. Dezember 2026 Zeit, die Kennzeichnungspflicht nach Artikel 50 Absatz 2 zu erfüllen",
          "Finanzwesen und Gesundheitswesen: Branchenaufsichtsbehörden könnten weiter einschränken, wo Patienten- und Finanzdaten verarbeitet und analysiert werden dürfen",
          "Datenlokalisierung und Cloud-Wechsel: Artikel 29 des EU Data Act (Verordnung (EU) 2023/2854) verbietet Wechselentgelte bei Cloud-Diensten ab dem 12. Januar 2027, und weitere Länder weiten Residenzpflichten aus — nationale Quellen daher direkt prüfen",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Der Digital Omnibus on AI (Verordnung (EU) 2026/1744) hat die Hochrisiko-Pflichten des EU AI Act auf den 2. Dezember 2027 (Anhang III) und den 2. August 2028 (Anhang I) verschoben; die früheren Termine August 2026 und August 2027 gelten nicht mehr",
          "Die Verschiebung ist keine pauschale Verzögerung: Pflichten für KI-Modelle mit allgemeinem Verwendungszweck gelten seit dem 2. August 2025, und Transparenzregeln folgen eigenen Terminen — prüfen Sie jeden Artikel einzeln, statt anzunehmen, dass alles verschoben wurde",
          "Finanz- und Gesundheitsaufsichtsbehörden könnten branchenspezifische Datenverarbeitungsregeln unabhängig von den allgemeinen EU-AI-Act-Fristen weiter verschärfen",
          "Artikel 29 des EU Data Act (Verordnung (EU) 2023/2854) verbietet Wechselentgelte bei Cloud-Diensten ab dem 12. Januar 2027; das senkt die Kosten, einen Workload zwischen Anbietern oder zurück ins eigene Rechenzentrum zu verlagern",
          "Termine außerhalb der EU und Umsetzungsleitlinien ändern sich weiterhin — gegen offizielle Quellen prüfen; dies sind allgemeine Informationen, keine Rechtsberatung",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Die Hochrisiko-Pflichten des EU AI Act wurden auf den 2. Dezember 2027 (Anhang III) und den 2. August 2028 (Anhang I) verschoben, während branchenspezifische Regeln sowie Datenlokalisierungs- und Cloud-Wechselregeln weiterhin unterschiedliche Workloads hin zu lokaler KI verschieben." },
          { type: 'plain-terms', text: "Einfach gesagt: Die EU hat ihre wichtigsten AI-Act-Fristen um mehr als ein Jahr verschoben, doch andere Regeln gelten weiter nach eigenem Zeitplan, und jede gibt einer anderen Art von Workload einen Grund, von Cloud-APIs zu lokaler oder On-Device-Verarbeitung zu wechseln." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Welche Hochrisiko-Termine des EU AI Act gelten nach dem Digital Omnibus?",
        content: [
          "**Nach dem Digital Omnibus on AI, am 24. Juli 2026 als Verordnung (EU) 2026/1744 im Amtsblatt veröffentlicht, gelten die Hochrisiko-Pflichten des EU AI Act nun ab dem 2. Dezember 2027 für eigenständige Anhang-III-Anwendungsfälle (etwa Beschäftigung oder kritische Infrastruktur) und ab dem 2. August 2028 für KI, die Sicherheitsbauteil eines Produkts nach EU-Sicherheitsvorschriften ist (Anhang I, etwa Medizinprodukte, Maschinen und Fahrzeuge).** Vor der Änderung lauteten die Termine 2. August 2026 und 2. August 2027. Die Verhandlungsführer von Parlament und Rat erzielten am 7. Mai 2026 eine vorläufige Einigung, das Parlament billigte den Text am 16. Juni, und der Rat stimmte am 29. Juni 2026 endgültig zu; die Verordnung wurde am 8. Juli 2026 unterzeichnet und trat nach ihrem Artikel 4 am dritten Tag nach der Veröffentlichung, dem 27. Juli 2026, in Kraft. Quellen: [Verordnung (EU) 2026/1744 auf EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [Pressemitteilung des Rates](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Europäisches Parlament](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "Die Verschiebung hebt das Gesetz nicht auf: Pflichten für KI-Modelle mit allgemeinem Verwendungszweck gelten seit dem 2. August 2025, und nach der verabschiedeten Verordnung ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)) gilt ein neues Verbot von „Nudifier“-Apps ab dem 2. Dezember 2026, während generative KI-Systeme, die bereits vor dem 2. August 2026 auf dem Markt waren, bis zum 2. Dezember 2026 Zeit haben, die Kennzeichnungspflicht (Wasserzeichen) nach Artikel 50 Absatz 2 zu erfüllen. Da das Gesetz bereits einmal geändert wurde, sollte jedes Datum als aktuelle Rechtslage und nicht als Garantie behandelt und der konsolidierte Text geprüft werden.",
          "Die praktische Konsequenz für lokale KI-Teams: Produkte, die KI als Sicherheitsbauteil einsetzen, müssen im Rahmen der Konformitätsbewertung Datenflüsse und Verarbeitungsorte dokumentieren; die späteren Termine geben mehr Zeit, das von Beginn an einzuplanen. On-Device-Inferenz oder Infrastruktur vollständig innerhalb der EU vereinfacht diese Dokumentation gegenüber sicherheitsrelevanter Inferenz über externe Cloud-APIs. Dies sind allgemeine Informationen, keine Rechtsberatung. Den allgemeinen Compliance-Hintergrund finden Sie unter [Enterprise Compliance: GDPR, HIPAA, SOC2 und KI-Regulierung](/de/local-llms/enterprise-compliance-local-llms) und [KI-Geopolitik erklärt: EU AI Act vs. USA vs. China](/de/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: 'Verschärfen sich Regeln in Finanzwesen und Gesundheitswesen schneller als das allgemeine KI-Recht?',
        content: [
          '**Branchenaufsichtsbehörden in Finanz- und Gesundheitswesen waren der allgemeinen KI-Gesetzgebung historisch bereits voraus, und dieses Muster könnte sich bis 2027 fortsetzen.** So verlangt etwa ein Rundschreiben der Reserve Bank of India vom 6. April 2018, dass Betreiber von Zahlungssystemen Zahlungsdaten ausschließlich in Indien speichern ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), und Gesundheitsaufsichtsbehörden legen Patientendatenregeln zusätzlich zum allgemeinen Datenschutzrecht darüber. Keine der beiden Kategorien wartet, bis ein übergreifendes KI-Gesetz vollständig in Kraft getreten ist.',
          "Teams in regulierten Branchen stehen zunehmend vor der Frage, wo die Modellinferenz tatsächlich stattfindet — nicht nur, wo Trainingsdaten gespeichert sind. On-Device- oder On-Premises-Inferenz liefert eine überprüfbare Antwort auf die Frage „Wo findet die Verarbeitung statt?“, die eine Cloud-API eines Drittanbieters oft nicht bieten kann. Eine konkrete Analystenprognose dazu haben wir nicht verifiziert; verstehen Sie dies daher als Planungsannahme, nicht als Prognose.",
          'Das ist ein engerer, schneller wirkender Druck als die allgemeine Erzählung von Compliance und AI Act — den breiteren Hintergrund finden Sie unter [Warum Unternehmen lokale LLMs einsetzen: Kosten, Compliance und Kontrolle](/de/local-llms/why-enterprises-use-local-llms).',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'In welchen Märkten werden Datenlokalisierungsregeln als Nächstes ausgeweitet?',
        content: [
          "**Mehrere Rechtsordnungen haben Regeln eingeführt oder formalisieren sie, nach denen bestimmte Datenkategorien innerhalb der Landesgrenzen bleiben müssen.** Belegte Beispiele sind Vietnams Dekret 53/2022/ND-CP, seit dem 1. Oktober 2022 in Kraft, das bestimmte inländische und ausländische Diensteanbieter verpflichtet, bestimmte Nutzerdaten in Vietnam zu speichern ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/)), sowie das Rundschreiben der Reserve Bank of India von 2018 zu Zahlungsdaten ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). Genauer Umfang und Durchsetzungstermine variieren von Land zu Land und werden in mehreren Märkten noch finalisiert; diesen Artikel haben wir nicht für jedes Land einzeln geprüft — prüfen Sie nationale Quellen und Ihre Rechtsberatung, bevor Sie sich auf einen Zeitplan stützen.",
          'Für Teams, die in diesen Märkten tätig sind, ist die praktische Auswirkung unabhängig vom genauen Zeitpunkt jeder Regel dieselbe: Workloads mit betroffenen Datenkategorien müssen zunehmend im jeweiligen Land laufen, was lokale oder regional gehostete Inferenz gegenüber einer einzigen zentralisierten Cloud-Bereitstellung für alle Märkte begünstigt.',
          "Innerhalb der EU gilt der Data Act (Verordnung (EU) 2023/2854) seit dem 12. September 2025. Laut [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services) sind Wechselentgelte für Datenverarbeitungsdienste wie Cloud-Dienste bis zum 12. Januar 2027 auf die direkten Kosten des Anbieters begrenzt und ab diesem Datum verboten, einschließlich Datenübertragungsentgelten, die mit einem Wechsel verbunden sind. Für lokale KI-Teams senkt das die Kosten, einen Workload von einem gehosteten Dienst auf lokale Inferenz zu verlagern; laufender Datenverkehr und Kündigungsentgelte bei befristeten Verträgen können jedoch weiterhin berechnet werden. Es ist eine Portabilitätsregel, kein Lokalisierungsgebot.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: "Sind die EU-AI-Act-Termine in diesem Artikel endgültig?",
            a: "Es sind die Termine, die nach der Verordnung (EU) 2026/1744 gelten, die seit dem 27. Juli 2026 in Kraft ist: 2. Dezember 2027 für Anhang III und 2. August 2028 für Anhang I. Die Kommission muss noch Leitlinien für in Produkte eingebettete KI vorlegen, weitere Änderungen sind jederzeit möglich, und branchenspezifische sowie Datenlokalisierungsregeln in anderen Ländern werden national festgelegt und können sich verschieben. Prüfen Sie das Amtsblatt und holen Sie eigene Rechtsberatung ein; dies sind allgemeine Informationen, keine Rechtsberatung.",
          },
          {
            q: 'Bedeutet das, dass jedes KI-System bis 2027 lokal laufen muss?',
            a: 'Nein. Diese Meilensteine gelten für bestimmte Kategorien — KI als Sicherheitsbauteil in regulierten Produkten, branchenregulierte Daten in Finanz- und Gesundheitswesen sowie Datenkategorien, die unter Lokalisierungsregeln bestimmter Länder fallen. Die meiste allgemeine KI-Nutzung ist nicht betroffen; die Verschiebung hin zu lokaler Inferenz konzentriert sich auf diese engeren, regulierten Kategorien.',
          },
          {
            q: 'Wie unterscheidet sich das von der allgemeinen These „Compliance treibt lokale KI"?',
            a: 'Diese allgemeine These wird an anderer Stelle auf dieser Website ausführlich behandelt — siehe <a href="/de/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">Warum Unternehmen lokale LLMs einsetzen</a> und <a href="/de/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">Enterprise Compliance: GDPR, HIPAA, SOC2 und KI-Regulierung</a>. Dieser Artikel konzentriert sich speziell auf namentlich genannte Meilensteine, die sich um 2027 verschärfen dürften, nicht auf eine Wiederholung, warum Compliance für lokale KI allgemein wichtig ist.',
          },
          {
            q: 'Was sollten Compliance- oder Engineering-Verantwortliche angesichts dieser Unsicherheit jetzt tun?',
            a: 'Bauen Sie eine Architektur, die flexibel genug ist, um regulierte Workload-Kategorien ohne kompletten Neubau zu lokaler oder landesinterner Inferenz zu leiten, statt auf einen finalisierten Durchsetzungstermin zu warten. So steht die technische Fähigkeit bereit, unabhängig davon, wann jede Regel tatsächlich greift.',
          },
          {
            q: "Was hat sich 2026 am Zeitplan des EU AI Act geändert?",
            a: "Die Verhandlungsführer von Parlament und Rat erzielten am 7. Mai 2026 eine vorläufige Einigung, das Parlament billigte sie am 16. Juni, der Rat stimmte am 29. Juni endgültig zu, und die Verordnung wurde am 8. Juli unterzeichnet. Sie wurde am 24. Juli im Amtsblatt veröffentlicht und trat am 27. Juli 2026 in Kraft. Sie verschob die Hochrisiko-Pflichten vom 2. August 2026 und 2. August 2027 auf den 2. Dezember 2027 und den 2. August 2028. Siehe die <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">Verordnung (EU) 2026/1744 (EUR-Lex)</a>, die <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">Pressemitteilung des Rates</a> und die <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">Zusammenfassung des Europäischen Parlaments</a>.",
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-fr.webp',
    title: "Tendances de l'IA locale 2027, partie 9/10 : le calendrier réglementaire à surveiller pour les équipes IA locale",
    seoTitle: "Tendances de l'IA locale 2027, partie 9 : le calendrier réglementaire | Prompt Bites",
    metaDescription: "Partie 9/10 : l'omnibus numérique reporte les échéances à haut risque de l'AI Act à décembre 2027 et août 2028, avec le Data Act et la localisation des données.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: "Responsables conformité et ingénierie planifiant des investissements en infrastructure d'IA locale autour des futures échéances réglementaires",
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>Ceci est la partie 9 sur 10 de la série « Tendances de l\'IA locale 2027 » de PromptQuorum — voir [Partie 3 : Petits modèles de langage](/fr/prompt-bites/local-ai-trend-2027-small-language-models), [Partie 6 : Routage hybride local-cloud](/fr/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing) et [Partie 10 : Fine-tuning sans code](/fr/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) pour le reste de la série.</strong> Trois évolutions réglementaires comptent pour les équipes exploitant de l\'IA locale ou embarquée : les obligations à haut risque de l\'AI Act européen, que l\'omnibus numérique sur l\'IA (règlement [(UE) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), publié le 24 juillet 2026) a reportées au 2 décembre 2027 pour les systèmes de l\'annexe III et au 2 août 2028 pour l\'IA intégrée à des produits réglementés ; le durcissement continu des règles sectorielles en finance et santé ; et les règles de localisation des données et de changement de fournisseur cloud, dont l\'interdiction des frais de changement par le Data Act européen à partir du 12 janvier 2027 (article 29 du [règlement (UE) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). Les dates d\'autres juridictions évoluent encore ; il s\'agit d\'informations générales, pas de conseils juridiques — à vérifier au Journal officiel et auprès de votre propre conseil.',
    quickAnswerTop: {
      fr: {
        question: "Quels changements réglementaires les équipes IA locale doivent-elles surveiller autour de 2027 ?",
        answer: "Trois évolutions méritent d'être suivies. D'abord, les échéances à haut risque de l'AI Act européen ont changé : l'omnibus numérique sur l'IA, publié comme règlement (UE) 2026/1744 le 24 juillet 2026, a reporté les obligations des systèmes à haut risque autonomes (annexe III) du 2 août 2026 au 2 décembre 2027, et celles de l'IA intégrée à des produits réglementés (annexe I) au 2 août 2028. Ensuite, les régulateurs de la finance et de la santé pourraient continuer à durcir les règles sectorielles de traitement des données. Enfin, les règles de localisation des données et de changement de fournisseur cloud continuent de s'étendre, dont l'interdiction des frais de changement par le Data Act européen à partir du 12 janvier 2027 (article 29, règlement (UE) 2023/2854). Chacune pousse certaines charges de travail vers l'inférence locale ou embarquée. Il s'agit d'informations générales, pas de conseils juridiques.",
        bullets: [
          "AI Act européen (modifié) : les obligations à haut risque de l'annexe III s'appliquent désormais à partir du 2 décembre 2027 (auparavant le 2 août 2026) et l'IA intégrée à des produits (annexe I) à partir du 2 août 2028 (auparavant le 2 août 2027), selon le règlement (UE) 2026/1744, en vigueur depuis le 27 juillet 2026",
          "Interdiction des applications de « déshabillage » et marquage : selon le règlement adopté, la nouvelle interdiction s'applique à partir du 2 décembre 2026, et les systèmes d'IA générative déjà sur le marché avant le 2 août 2026 ont jusqu'au 2 décembre 2026 pour respecter l'obligation de marquage de l'article 50, paragraphe 2",
          "Finance et santé : les régulateurs sectoriels pourraient continuer à restreindre où les données de santé et financières peuvent être traitées et analysées",
          "Localisation des données et changement de cloud : l'article 29 du Data Act européen (règlement (UE) 2023/2854) interdit les frais de changement de fournisseur cloud à partir du 12 janvier 2027, et d'autres juridictions étendent leurs règles de résidence — consultez directement les sources nationales",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "L'omnibus numérique sur l'IA (règlement (UE) 2026/1744) a reporté les obligations à haut risque de l'AI Act européen au 2 décembre 2027 (annexe III) et au 2 août 2028 (annexe I) ; les anciennes dates d'août 2026 et d'août 2027 ne s'appliquent plus",
          "Le report n'est pas un délai généralisé : les obligations des modèles d'IA à usage général s'appliquent depuis le 2 août 2025, et les règles de transparence suivent leurs propres dates — vérifiez chaque article plutôt que de supposer que tout a été reporté",
          "Les régulateurs de la finance et de la santé pourraient continuer à durcir les règles sectorielles de traitement des données, indépendamment des calendriers généraux de l'AI Act",
          "L'article 29 du Data Act européen (règlement (UE) 2023/2854) interdit les frais de changement de fournisseur cloud à partir du 12 janvier 2027, ce qui réduit le coût de déplacement d'une charge de travail entre fournisseurs ou vers l'infrastructure interne",
          "Les dates hors UE et les lignes directrices de mise en œuvre évoluent sans cesse — vérifiez auprès de sources officielles ; il s'agit d'informations générales, pas de conseils juridiques",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Les obligations à haut risque de l'AI Act européen ont été reportées au 2 décembre 2027 (annexe III) et au 2 août 2028 (annexe I), tandis que les règles sectorielles et celles de localisation des données et de changement de cloud poussent chacune d'autres charges de travail vers l'IA locale." },
          { type: 'plain-terms', text: "En clair : l'UE a repoussé de plus d'un an ses principales échéances de l'AI Act, mais d'autres règles s'appliquent selon leur propre calendrier, et chacune donne à un type de charge de travail différent une raison de passer des API cloud au traitement local ou embarqué." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Quelles échéances à haut risque de l'AI Act européen s'appliquent après l'omnibus numérique ?",
        content: [
          "**Selon l'omnibus numérique sur l'IA, publié comme règlement (UE) 2026/1744 au Journal officiel le 24 juillet 2026, les obligations à haut risque de l'AI Act européen s'appliquent désormais à partir du 2 décembre 2027 pour les cas d'usage autonomes de l'annexe III (emploi ou infrastructures critiques, par exemple) et à partir du 2 août 2028 pour l'IA qui est un composant de sécurité de produits relevant de la législation sectorielle de l'UE (annexe I, comme les dispositifs médicaux, les machines et les véhicules).** Avant la modification, ces dates étaient le 2 août 2026 et le 2 août 2027. Les négociateurs du Parlement et du Conseil ont conclu un accord provisoire le 7 mai 2026, le Parlement a approuvé le texte le 16 juin et le Conseil l'a adopté définitivement le 29 juin 2026 ; le règlement a été signé le 8 juillet 2026 et, selon son article 4, est entré en vigueur le troisième jour suivant sa publication, soit le 27 juillet 2026. Sources : [règlement (UE) 2026/1744 sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [communiqué du Conseil](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Parlement européen](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "Le report ne supprime pas la loi : les obligations pour les modèles d'IA à usage général s'appliquent depuis le 2 août 2025, et, selon le règlement adopté ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)), une nouvelle interdiction des applications de « déshabillage » s'applique à partir du 2 décembre 2026, tandis que les systèmes d'IA générative déjà sur le marché avant le 2 août 2026 ont jusqu'au 2 décembre 2026 pour respecter l'obligation de marquage de l'article 50, paragraphe 2. Comme la loi a déjà été modifiée une fois, chaque date doit être considérée comme la situation juridique actuelle plutôt que comme une garantie, et le texte consolidé doit être consulté.",
          "La conséquence pratique pour les équipes IA locale : les produits intégrant l'IA comme composant de sécurité devront documenter les flux de données et les lieux de traitement dans le cadre de l'évaluation de conformité, et les échéances plus tardives laissent plus de temps pour l'intégrer dès la conception. Exécuter l'inférence localement ou sur une infrastructure entièrement située dans l'UE simplifie cette documentation par rapport à l'acheminement de l'inférence critique via des API cloud externes. Il s'agit d'informations générales, pas de conseils juridiques. Pour le contexte général de conformité d'entreprise, voir [Conformité d'entreprise : RGPD, HIPAA, SOC2 et réglementations IA](/fr/local-llms/enterprise-compliance-local-llms) et [La géopolitique de l'IA expliquée : AI Act européen vs États-Unis vs Chine](/fr/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: "Les règles de la finance et de la santé se durcissent-elles plus vite que le droit général de l'IA ?",
        content: [
          "**Les régulateurs sectoriels de la finance et de la santé ont historiquement devancé la législation générale sur l'IA, et cette tendance pourrait se poursuivre jusqu'en 2027.** Par exemple, une circulaire de la Reserve Bank of India du 6 avril 2018 exige que les opérateurs de systèmes de paiement stockent les données de paiement uniquement en Inde ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), et les régulateurs de la santé superposent des règles sur les données patients par-dessus le droit général de la vie privée ; aucune de ces deux catégories n'attend qu'une loi omnibus sur l'IA achève sa mise en œuvre progressive.",
          "Les équipes des secteurs réglementés sont de plus en plus confrontées à la question de l'endroit où l'inférence du modèle a réellement lieu, et pas seulement où les données d'entraînement sont stockées. L'inférence embarquée ou sur site apporte une réponse vérifiable à la question « où le traitement a-t-il lieu ? » qu'une API cloud tierce ne peut souvent pas fournir. Nous n'avons pas vérifié de projection d'analyste précise à ce sujet : considérez-le comme une hypothèse de planification, pas comme une prévision.",
          "Il s'agit d'une pression plus ciblée et plus rapide que le récit général de conformité et d'AI Act — voir [Pourquoi les entreprises utilisent des LLM locaux : coût, conformité et contrôle](/fr/local-llms/why-enterprises-use-local-llms) pour ce contexte plus large.",
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'Quels marchés vont étendre leurs règles de localisation des données ensuite ?',
        content: [
          "**Plusieurs juridictions ont adopté ou formalisent des règles exigeant que certaines catégories de données restent à l'intérieur des frontières nationales.** Parmi les exemples vérifiés figurent le décret vietnamien 53/2022/ND-CP, en vigueur depuis le 1er octobre 2022, qui impose à certains prestataires de services nationaux et étrangers de stocker certaines données d'utilisateurs au Vietnam ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/)), et la circulaire de 2018 de la Reserve Bank of India sur les données de paiement ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). La portée exacte et les dates d'application varient selon les pays et sont encore en cours de finalisation dans plusieurs marchés ; cet article n'a pas vérifié la situation actuelle de chaque pays — consultez les sources nationales et votre conseil avant de vous appuyer sur un calendrier.",
          "Pour les équipes opérant sur ces marchés, l'effet pratique reste le même quelle que soit la date exacte à laquelle chaque règle entre en vigueur : les charges de travail touchant des catégories de données concernées doivent de plus en plus s'exécuter dans le pays, ce qui favorise une inférence locale ou hébergée régionalement plutôt qu'un déploiement cloud centralisé unique desservant tous les marchés.",
          "Dans l'UE, le Data Act (règlement (UE) 2023/2854) s'applique depuis le 12 septembre 2025. Selon [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services), les frais de changement de fournisseur pour les services de traitement de données comme le cloud sont plafonnés aux coûts directs du fournisseur jusqu'au 12 janvier 2027, puis interdits à partir de cette date, y compris les frais de sortie de données liés à un changement. Pour les équipes IA locale, cela réduit le coût de déplacement d'une charge de travail d'un service hébergé vers l'inférence sur site, même si le trafic courant et les pénalités de résiliation anticipée des contrats à durée déterminée peuvent rester facturables. C'est une règle de portabilité, pas une obligation de localisation.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: "Les dates de l'AI Act européen dans cet article sont-elles définitives ?",
            a: "Ce sont les dates en vigueur après le règlement (UE) 2026/1744, en vigueur depuis le 27 juillet 2026 : le 2 décembre 2027 pour l'annexe III et le 2 août 2028 pour l'annexe I. La Commission doit encore publier des lignes directrices pour l'IA intégrée aux produits, de nouvelles modifications restent toujours possibles, et les règles sectorielles et de localisation des données d'autres juridictions sont fixées au niveau national et peuvent évoluer. Vérifiez le Journal officiel et consultez votre propre conseil ; il s'agit d'informations générales, pas de conseils juridiques.",
          },
          {
            q: 'Cela signifie-t-il que tout système d\'IA devra fonctionner localement d\'ici 2027 ?',
            a: "Non. Ces échéances s'appliquent à des catégories spécifiques — l'IA intégrée comme composant de sécurité dans des produits réglementés, les données sectorielles réglementées en finance et santé, et les catégories de données couvertes par des règles de localisation dans des juridictions spécifiques. La plupart des usages généraux de l'IA ne sont pas concernés ; le mouvement vers l'inférence locale se concentre sur ces catégories plus étroites et réglementées.",
          },
          {
            q: 'En quoi cela diffère-t-il de l\'argument général « la conformité pousse vers l\'IA locale » ?',
            a: 'Cet argument général est traité en profondeur ailleurs sur ce site — voir <a href="/fr/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">Pourquoi les entreprises utilisent des LLM locaux</a> et <a href="/fr/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">Conformité d\'entreprise : RGPD, HIPAA, SOC2 et réglementations IA</a>. Cet article se concentre spécifiquement sur des échéances nommées attendues comme s\'intensifiant autour de 2027, pas sur une reformulation de l\'importance générale de la conformité pour l\'IA locale.',
          },
          {
            q: "Que doit faire un responsable conformité ou ingénierie maintenant, face à cette incertitude ?",
            a: "Construire une architecture suffisamment flexible pour acheminer les catégories réglementées de charge de travail vers une inférence locale ou dans le pays sans reconstruction complète, plutôt que d'attendre qu'une date d'application précise soit finalisée. Ainsi, quelle que soit la date à laquelle chaque règle entre réellement en vigueur, la capacité technique est déjà en place.",
          },
          {
            q: "Qu'est-ce qui a changé dans le calendrier de l'AI Act européen en 2026 ?",
            a: "Les négociateurs du Parlement et du Conseil ont conclu un accord provisoire le 7 mai 2026, le Parlement l'a approuvé le 16 juin, le Conseil l'a adopté définitivement le 29 juin et le règlement a été signé le 8 juillet. Il a été publié au Journal officiel le 24 juillet et est entré en vigueur le 27 juillet 2026. Il a reporté les obligations à haut risque du 2 août 2026 et du 2 août 2027 au 2 décembre 2027 et au 2 août 2028. Voir le <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">règlement (UE) 2026/1744 (EUR-Lex)</a>, le <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">communiqué du Conseil</a> et le <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">résumé du Parlement européen</a>.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-ja.webp',
    title: 'ローカルAIトレンド2027 第9回/全10回:ローカルAIチームが注視すべき規制カレンダー',
    seoTitle: 'ローカルAIトレンド2027 第9回:規制カレンダー | Prompt Bites',
    metaDescription: "第9回/全10回:Digital OmnibusによりEU AI Actの高リスク義務は2027年12月と2028年8月に延期。Data Actやデータローカライゼーションも解説。",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '今後の規制期限を見据えてローカルAIインフラへの投資を計画するコンプライアンス責任者とエンジニアリングリーダー',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>本記事はPromptQuorumの「ローカルAIトレンド2027」シリーズ全10回中の第9回です — 残りの回は[第3回:小型言語モデル](/ja/prompt-bites/local-ai-trend-2027-small-language-models)、[第6回:ハイブリッドなローカル・クラウドルーティング](/ja/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing)、[第10回:ノーコードのファインチューニング](/ja/prompt-bites/local-ai-trend-2027-no-code-fine-tuning)をご覧ください。</strong> ローカルAIやオンデバイスAIを運用するチームにとって重要な規制動向は3つあります。1つ目はEU AI Actの高リスク義務で、Digital Omnibus on AI(規則[(EU)2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)、2026年7月24日公表)により、附属書IIIのシステムは2027年12月2日、規制対象製品に組み込まれたAIは2028年8月2日に延期されました。2つ目は金融・医療分野の業界固有規制の継続的な強化、3つ目はデータローカライゼーションおよびクラウド切り替えに関する規則で、EU Data Actによる切り替え手数料の禁止(2027年1月12日から、[規則(EU)2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)第29条)を含みます。他の法域の日程は引き続き変わっており、本記事は一般的な情報であり法的助言ではありません。官報および自社の法務担当者でご確認ください。',
    quickAnswerTop: {
      ja: {
        question: '2027年前後にローカルAIチームが注視すべき規制変化は何ですか？',
        answer: "追跡する価値のある動向が3つあります。1つ目に、EU AI Actの高リスク義務の日程が変わりました。2026年7月24日に規則(EU)2026/1744として公表されたDigital Omnibus on AIにより、単独の高リスクシステム(附属書III)の義務は2026年8月2日から2027年12月2日へ、規制対象製品に組み込まれたAI(附属書I)の義務は2028年8月2日へ延期されました。2つ目に、金融・医療分野の規制当局は業界固有のデータ処理規制を引き続き強化する可能性があります。3つ目に、データローカライゼーションとクラウド切り替えの規則は拡大を続けており、EU Data Actによる切り替え手数料の禁止(2027年1月12日から、規則(EU)2023/2854第29条)もその一つです。それぞれが一部のワークロードをローカルまたはオンデバイスの推論へと押しやります。本記事は一般的な情報であり、法的助言ではありません。",
        bullets: [
          "EU AI Act(変更あり):附属書IIIの高リスク義務は2027年12月2日から(従来は2026年8月2日)、附属書Iの製品組み込みAIは2028年8月2日から(従来は2027年8月2日)適用。規則(EU)2026/1744に基づき、2026年7月27日に発効",
          "「ヌード化」アプリの禁止と表示義務:採択された規則では、「ヌード化」アプリの新たな禁止は2026年12月2日から適用され、2026年8月2日より前に市場に出ていた生成AIシステムは、2026年12月2日までに第50条第2項のマーキング義務を満たす必要がある",
          "金融・医療:業界の規制当局は、患者データや金融データを処理・分析できる場所をさらに絞り込む可能性がある",
          "データローカライゼーションとクラウド切り替え:EU Data Act(規則(EU)2023/2854)第29条は2027年1月12日からクラウドの切り替え手数料を禁止。他の法域でも所在地要件が拡大しているため、各国の一次情報を直接確認すること",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Digital Omnibus on AI(規則(EU)2026/1744)により、EU AI Actの高リスク義務は2027年12月2日(附属書III)と2028年8月2日(附属書I)に延期され、従来の2026年8月と2027年8月は適用されなくなった",
          "延期は全面的な先送りではありません。汎用AIモデルの義務は2025年8月2日から適用されており、透明性ルールは別の日程に従います。すべてが動いたと決めつけず、条文ごとに確認してください",
          "金融・医療分野の規制当局は、EU AI Actの全体的な日程とは別に、業界固有のデータ処理規制を引き続き強化する可能性がある",
          "EU Data Act(規則(EU)2023/2854)第29条は2027年1月12日からクラウドの切り替え手数料を禁止するため、ワークロードをプロバイダー間やオンプレミスへ移すコストが下がる",
          "EU域外の日程や各地の実施ガイダンスは変わり続けます。公式情報で確認してください。本記事は一般的な情報であり、法的助言ではありません",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "EU AI Actの高リスク義務は2027年12月2日(附属書III)と2028年8月2日(附属書I)に延期され、業界固有規制やデータローカライゼーション、クラウド切り替え規則がそれぞれ異なるワークロードをローカルAIへと向かわせています。" },
          { type: 'plain-terms', text: "平たく言えば、EUはAI Actの主要な期限を1年以上先送りしましたが、他の規則はそれぞれの日程で適用され、各規則がワークロードの種類ごとに、クラウドAPIからローカルまたはオンデバイス処理へ移る理由を与えています。" },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Digital Omnibus後、EU AI Actのどの高リスク日程が適用されますか?",
        content: [
          "**2026年7月24日に規則(EU)2026/1744として官報に公表されたDigital Omnibus on AIにより、EU AI Actの高リスク義務は、単独の附属書IIIのユースケース(雇用や重要インフラなど)では2027年12月2日から、EUの分野別安全法令の対象製品の安全部品となるAI(附属書I、医療機器、機械、車両など)では2028年8月2日から適用されます。** 変更前の日程は2026年8月2日と2027年8月2日でした。欧州議会と理事会の交渉担当者は2026年5月7日に暫定合意に達し、議会は6月16日に、理事会は2026年6月29日に最終承認しました。規則は2026年7月8日に署名され、第4条により公表の3日後にあたる2026年7月27日に発効しました。出典:[EUR-Lex上の規則(EU)2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)、[理事会プレスリリース](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)、[欧州議会](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps)、[White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act)。",
          "延期によって法律がなくなるわけではありません。汎用AIモデルの義務は2025年8月2日から適用されており、採択された規則([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj))では、「ヌード化」アプリの新たな禁止が2026年12月2日から適用され、2026年8月2日より前に市場に出ていた生成AIシステムは、2026年12月2日までに第50条第2項のマーキング(透かし)義務を満たす必要があります。同法はすでに一度改正されているため、各日付は保証ではなく現時点の法的状況として扱い、統合版の条文をご確認ください。",
          "ローカルAIチームにとっての実務上の帰結:AIを安全部品として組み込む製品は、適合性評価の一環としてデータフローと処理場所を文書化する必要があり、日程の後ろ倒しにより設計段階から織り込む時間が増えました。オンデバイス、またはEU域内に完全に収まるインフラで推論を行えば、安全に関わる推論を外部クラウドAPI経由にする場合よりも文書化が簡単になります。本記事は一般的な情報であり、法的助言ではありません。企業コンプライアンスの全般的な背景は[エンタープライズコンプライアンス:GDPR、HIPAA、SOC2、AI規制](/ja/local-llms/enterprise-compliance-local-llms)および[AIの地政学を解説:EU AI Act対米国対中国](/ja/prompt-engineering/geopolitics-and-ai)をご覧ください。",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: '金融・医療分野の規制は一般的なAI法よりも速く強化されていますか？',
        content: [
          '**金融・医療分野の業界規制当局は歴史的に一般的なAI立法よりも先行して動いており、この傾向は2027年まで続く可能性があります。** たとえばインド準備銀行の2018年4月6日付通達は、決済システム事業者に決済データをインド国内にのみ保存するよう求めており([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244))、医療規制当局は一般的なプライバシー法の上に患者データ規制を重ねています。いずれのカテゴリーも、包括的なAI法の段階的施行が完了するのを待つことはありません。',
          "規制対象分野のチームは、学習データの保存場所だけでなく、モデルの推論が実際にどこで行われるのかを問われる機会が増えています。オンデバイスまたはオンプレミスの推論は、「処理はどこで行われるのか」という問いに対して、第三者のクラウドAPIでは示しにくい検証可能な答えを提供します。これについて特定のアナリスト予測は確認できていないため、予測ではなく計画上の前提としてお考えください。",
          'これは一般的なコンプライアンスとAI Actに関する論調よりも狭く、より速く動く圧力です。より広い背景については[企業が地域LLMを使う理由:コスト、コンプライアンス、コントロール](/ja/local-llms/why-enterprises-use-local-llms)をご覧ください。',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'データローカライゼーション規制は次にどの市場で拡大しますか？',
        content: [
          "**特定のデータ区分を国内にとどめることを求める規則を導入済み、または制度化中の法域が複数あります。** 確認できた例として、2022年10月1日から施行されているベトナムの政令53/2022/ND-CPは、特定の国内外のサービス事業者に一部のユーザーデータをベトナム国内で保存するよう求めており([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/))、インド準備銀行の2018年の決済データに関する通達もあります([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244))。 正確な範囲と施行日は国ごとに異なり、複数の市場でまだ最終化されていません。本記事は各国の現状を個別に確認していないため、日程に依拠する前に各国の一次情報と法務担当者でご確認ください。",
          'これらの市場で事業を行うチームにとって、各規制が正確にいつ発効するかにかかわらず、実務上の影響は同じです。対象データカテゴリーに触れるワークロードは、ますます国内で実行される必要が生じ、すべての市場に対応する単一の集中型クラウド展開よりも、ローカルまたは地域でホストされた推論が有利になります。',
          "EU域内では、Data Act(規則(EU)2023/2854)が2025年9月12日から適用されています。[Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services)によると、クラウドなどのデータ処理サービスの切り替え手数料は、2027年1月12日まで事業者の直接コストが上限で、同日以降は禁止されます。切り替えに伴うデータ送出料金も含まれます。ローカルAIチームにとっては、ホスト型サービスからオンプレミス推論へワークロードを移すコストが下がりますが、継続的な通信量や、固定期間契約の早期解約料は引き続き請求される可能性があります。これは可搬性のルールであり、ローカライゼーションの義務ではありません。",
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: "本記事のEU AI Actの日付は確定していますか?",
            a: "規則(EU)2026/1744の下で有効な日付で、2026年7月27日から発効しています。附属書IIIは2027年12月2日、附属書Iは2028年8月2日です。欧州委員会は製品組み込みAIに関するガイダンスをまだ示す必要があり、今後の改正も常にあり得ます。他の法域の業界固有規制やデータローカライゼーション規制は国レベルで定められ、変わる可能性があります。官報と自社の法務担当者でご確認ください。本記事は一般的な情報であり、法的助言ではありません。",
          },
          {
            q: 'これは2027年までにすべてのAIシステムをローカルで実行する必要があるという意味ですか？',
            a: 'いいえ。これらの節目は特定のカテゴリー——規制対象製品に安全部品として組み込まれたAI、金融・医療における業界規制対象データ、特定の法域のローカライゼーション規制の対象となるデータカテゴリー——に適用されるものです。ほとんどの汎用的なAI利用は影響を受けません。ローカル推論への移行は、これらの狭く規制されたカテゴリーに集中しています。',
          },
          {
            q: 'これは「コンプライアンスがローカルAIを後押しする」という一般的な議論とどう違いますか？',
            a: 'その一般的な議論は本サイトの他の記事で詳しく扱っています——<a href="/ja/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">企業が地域LLMを使う理由</a>と<a href="/ja/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">エンタープライズコンプライアンス:GDPR、HIPAA、SOC2、AI規制</a>をご覧ください。本記事は、2027年前後に強化されると見込まれる名指しの節目に特化しており、ローカルAIにとってコンプライアンスがなぜ重要かという一般論の繰り返しではありません。',
          },
          {
            q: 'この不確実性を踏まえて、コンプライアンスやエンジニアリングの責任者は今何をすべきですか？',
            a: '具体的な施行日が確定するのを待つのではなく、規制対象のワークロードカテゴリーを大規模な作り直しなしにローカルまたは国内推論へルーティングできる柔軟なアーキテクチャを構築してください。そうすれば、各規制が実際にいつ発効しても、技術的な備えはすでに整っています。',
          },
          {
            q: "2026年にEU AI Actの日程は何が変わりましたか?",
            a: "欧州議会と理事会の交渉担当者が2026年5月7日に暫定合意に達し、議会が6月16日に承認、理事会が6月29日に最終承認し、規則は7月8日に署名されました。7月24日に官報に公表され、2026年7月27日に発効しました。高リスク義務は2026年8月2日と2027年8月2日から、2027年12月2日と2028年8月2日に移されました。<a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">規則(EU)2026/1744(EUR-Lex)</a>、<a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">理事会プレスリリース</a>と<a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">欧州議会の概要</a>をご覧ください。",
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-zh.webp',
    title: '本地AI趋势2027,第9篇(共10篇):本地AI团队应关注的监管日历',
    seoTitle: '本地AI趋势2027,第9篇:监管日历 | Prompt Bites',
    metaDescription: "第9篇(共10篇):Digital Omnibus将欧盟AI法案的高风险义务推迟至2027年12月和2028年8月;另含《数据法案》云切换规则与数据本地化。",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '围绕即将到来的监管截止日期规划本地AI基础设施投资的合规与工程负责人',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>这是PromptQuorum"本地AI趋势2027"系列共10篇中的第9篇——参见[第3篇:小语言模型](/zh/prompt-bites/local-ai-trend-2027-small-language-models)、[第6篇:混合本地-云端路由](/zh/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing)和[第10篇:无代码微调](/zh/prompt-bites/local-ai-trend-2027-no-code-fine-tuning),了解系列其余内容。</strong> 对运行本地或设备端AI的团队而言,有三项监管动态值得关注:一是欧盟AI法案的高风险义务,Digital Omnibus on AI(《[(EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)号条例》,2026年7月24日公布)已将附件III系统推迟至2027年12月2日,将嵌入受监管产品的AI推迟至2028年8月2日;二是金融和医疗行业特定规则的持续收紧;三是数据本地化与云服务切换规则,包括欧盟《数据法案》自2027年1月12日起禁止切换费用([《(EU) 2023/2854号条例》](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)第29条)。其他司法辖区的日期仍在变化,本文仅为一般性信息,不构成法律意见——请对照《欧盟官方公报》并咨询您自己的法律顾问。',
    quickAnswerTop: {
      zh: {
        question: '本地AI团队应在2027年前后关注哪些监管变化?',
        answer: "有三项进展值得关注。第一,欧盟AI法案的高风险日期已经变化:Digital Omnibus on AI于2026年7月24日作为《(EU) 2026/1744号条例》公布,将独立高风险系统(附件III)的义务从2026年8月2日推迟至2027年12月2日,将嵌入受监管产品的AI(附件I)的义务推迟至2028年8月2日。第二,金融和医疗监管机构可能会继续收紧行业特定的数据处理规则。第三,数据本地化和云服务切换规则持续扩展,包括欧盟《数据法案》自2027年1月12日起禁止切换费用(《(EU) 2023/2854号条例》第29条)。每一项都会将部分工作负载推向本地或设备端推理。本文仅为一般性信息,不构成法律意见。",
        bullets: [
          "欧盟AI法案(已变更):附件III高风险义务现自2027年12月2日起适用(此前为2026年8月2日),附件I的产品嵌入式AI自2028年8月2日起适用(此前为2027年8月2日),依据《(EU) 2026/1744号条例》,已于2026年7月27日生效",
          "“脱衣”类应用禁令与内容标识:根据已通过的条例,对“脱衣”类应用的新禁令自2026年12月2日起适用,2026年8月2日之前已投放市场的生成式AI系统须在2026年12月2日之前满足第50条第2款的标识义务",
          "金融和医疗:行业监管机构可能会继续收窄患者数据和金融数据可被处理和分析的范围",
          "数据本地化与云服务切换:欧盟《数据法案》(《(EU) 2023/2854号条例》第29条)自2027年1月12日起禁止云切换费用,其他司法辖区也在扩大数据驻留规则,请直接核对各国官方来源",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Digital Omnibus on AI(《(EU) 2026/1744号条例》)将欧盟AI法案的高风险义务推迟至2027年12月2日(附件III)和2028年8月2日(附件I),此前的2026年8月和2027年8月日期不再适用",
          "推迟并非全面延期:通用AI模型的义务自2025年8月2日起已适用,透明度规则则有各自的日期——请逐条核对,不要假定一切都已顺延",
          "金融和医疗监管机构可能会继续收紧行业特定的数据处理规则,与欧盟AI法案的总体时间表无关",
          "欧盟《数据法案》(《(EU) 2023/2854号条例》第29条)自2027年1月12日起禁止云切换费用,这降低了在服务商之间或迁回本地基础设施的成本",
          "欧盟以外的日期和各地的实施指南仍在变化——请以官方来源为准;本文仅为一般性信息,不构成法律意见",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "欧盟AI法案的高风险义务已推迟至2027年12月2日(附件III)和2028年8月2日(附件I),而行业特定规则以及数据本地化和云服务切换规则仍在分别将不同的工作负载推向本地AI。" },
          { type: 'plain-terms', text: "简单来说:欧盟将其最重要的AI法案期限推迟了一年多,但其他规则仍按各自的时间表适用,每一项都为不同类型的工作负载提供了从云API转向本地或设备端处理的理由。" },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Digital Omnibus之后,欧盟AI法案的哪些高风险日期适用?",
        content: [
          "**根据2026年7月24日在《欧盟官方公报》上作为《(EU) 2026/1744号条例》公布的Digital Omnibus on AI,欧盟AI法案的高风险义务现自2027年12月2日起适用于独立的附件III用例(如就业或关键基础设施),自2028年8月2日起适用于作为欧盟行业安全法规所涵盖产品安全组件的AI(附件I,如医疗设备、机械和车辆)。** 变更前这两个日期分别是2026年8月2日和2027年8月2日。欧洲议会和理事会谈判代表于2026年5月7日达成临时协议,议会于6月16日批准文本,理事会于2026年6月29日最终批准;条例于2026年7月8日签署,并依其第4条于公布后第三天即2026年7月27日生效。来源:[EUR-Lex上的《(EU) 2026/1744号条例》](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)、[理事会新闻稿](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)、[欧洲议会](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps)、[White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act)。",
          "推迟并不意味着法案被取消:通用AI模型的义务自2025年8月2日起已适用,根据已通过的条例([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)),对“脱衣”类应用的新禁令自2026年12月2日起适用,2026年8月2日之前已投放市场的生成式AI系统须在2026年12月2日之前满足第50条第2款的标识(水印)义务。由于该法案已被修订过一次,请将每个日期视为当前的法律状况而非保证,并核对其合并文本。",
          "对本地AI团队的实际影响:将AI作为安全组件嵌入的产品需要在合规评估中记录数据流和处理地点,而较晚的日期给了更多时间从一开始就把这一点设计进去。与通过外部云API路由安全相关推理相比,在设备端或完全位于欧盟境内的基础设施上运行推理会简化这一文档工作。本文仅为一般性信息,不构成法律意见。有关企业合规的总体背景,请参阅[企业合规:GDPR、HIPAA、SOC2与AI法规](/zh/local-llms/enterprise-compliance-local-llms)和[解读AI地缘政治:欧盟AI法案对比美国与中国](/zh/prompt-engineering/geopolitics-and-ai)。",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: '金融和医疗行业规则的收紧速度是否快于一般AI法律?',
        content: [
          '**金融和医疗行业的监管机构历来都走在一般AI立法之前,这一模式可能会持续到2027年。** 例如,印度储备银行2018年4月6日的通告要求支付系统运营商仅在印度境内存储支付数据([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)),医疗监管机构则在一般隐私法之上叠加了患者数据规则;这两类监管都不会等待一部综合性AI法律完成分阶段实施。',
          "受监管行业的团队越来越多地面临这样一个问题:模型推理究竟发生在哪里,而不仅仅是训练数据存储在哪里。设备端或本地部署的推理能为“处理发生在哪里”提供可验证的答案,而第三方云API往往无法做到这一点。我们尚未核实关于此点的具体分析师预测,因此请将其视为规划假设,而非预测。",
          '与关于合规和AI法案的一般性叙述相比,这是一种更狭窄、变化更快的压力——更广泛的背景请参见[企业为何使用本地LLM:成本、合规与控制](/zh/local-llms/why-enterprises-use-local-llms)。',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: '接下来哪些市场将扩大数据本地化规则?',
        content: [
          "**若干司法辖区已经采用或正在制定要求特定数据类别留在本国境内的规则。** 已核实的例子包括:自2022年10月1日起生效的越南第53/2022/ND-CP号法令,要求特定的境内外服务提供商将部分用户数据存储在越南境内([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/));以及印度储备银行2018年关于支付数据的通告([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244))。 具体范围和执行日期因国家而异,在多个市场仍在最终确定;本文未逐一核实各国的现状——在依赖任何时间表之前,请核对各国官方来源并咨询您的法律顾问。",
          '对于在这些市场运营的团队而言,无论每项规则具体何时落地,实际影响都是一样的:涉及受管制数据类别的工作负载将越来越需要在本国境内运行,这使得本地或区域托管的推理相较于服务所有市场的单一集中式云部署更具优势。',
          "在欧盟境内,《数据法案》(《(EU) 2023/2854号条例》)自2025年9月12日起适用。据[Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services)称,云等数据处理服务的切换费用在2027年1月12日之前以服务商的直接成本为上限,自该日起被禁止,包括与切换相关的数据出口费用。对本地AI团队而言,这降低了把工作负载从托管服务迁到本地推理的成本,不过持续流量以及固定期限合同中的提前终止费用仍可能收取。这是一项可移植性规则,而非本地化强制要求。",
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: "本文中的欧盟AI法案日期是最终的吗?",
            a: "这些是《(EU) 2026/1744号条例》之后有效的日期,该条例自2026年7月27日起生效:附件III为2027年12月2日,附件I为2028年8月2日。欧盟委员会仍需发布针对产品嵌入式AI的指南,随时可能有进一步修订,其他司法辖区的行业特定规则和数据本地化规则由各国制定,可能发生变化。请核对《欧盟官方公报》并咨询您自己的法律顾问;本文仅为一般性信息,不构成法律意见。",
          },
          {
            q: '这是否意味着到2027年所有AI系统都必须在本地运行?',
            a: '不是。这些里程碑适用于特定类别——作为受监管产品安全组件嵌入的AI、金融和医疗行业受监管的数据,以及特定司法辖区本地化规则涵盖的数据类别。大多数通用AI使用不受影响;向本地推理的转变集中在这些更狭窄的受监管类别中。',
          },
          {
            q: '这与"合规推动本地AI"这一一般性论点有何不同?',
            a: '该一般性论点已在本站其他文章中深入讨论——参见<a href="/zh/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">企业为何使用本地LLM</a>和<a href="/zh/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">企业合规:GDPR、HIPAA、SOC2与AI法规</a>。本文专门聚焦于预计在2027年前后升级的具体命名里程碑,而非重复论述合规为何对本地AI整体上很重要。',
          },
          {
            q: '面对这种不确定性,合规或工程负责人现在应该做什么?',
            a: '构建足够灵活的架构,使受监管类别的工作负载无需彻底重建即可路由到本地或本国境内推理,而不是等待某个具体执行日期最终确定。这样一来,无论每项规则实际何时生效,技术能力都已提前就绪。',
          },
          {
            q: "2026年欧盟AI法案的时间表发生了什么变化?",
            a: "欧洲议会和理事会谈判代表于2026年5月7日达成临时协议,议会于6月16日批准,理事会于6月29日最终批准,条例于7月8日签署。该条例于7月24日在《欧盟官方公报》上公布,于2026年7月27日生效。它将高风险义务从2026年8月2日和2027年8月2日推迟至2027年12月2日和2028年8月2日。请参阅<a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">《(EU) 2026/1744号条例》(EUR-Lex)</a>、<a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">理事会新闻稿</a>和<a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">欧洲议会摘要</a>。",
          },
        ],
      },
    },
  },
  es: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-es.webp',
    title: 'Tendencias de IA local 2027, parte 9 de 10: el calendario regulatorio que deben vigilar los equipos de IA local',
    seoTitle: 'Tendencias de IA local 2027, parte 9: el calendario regulatorio | Prompt Bites',
    metaDescription: "Parte 9 de 10: el Digital Omnibus aplaza los plazos de alto riesgo de la Ley de IA de la UE a diciembre de 2027 y agosto de 2028, más Data Act y localización.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Responsables de cumplimiento e ingeniería que planifican inversiones en infraestructura de IA local en torno a próximos plazos regulatorios',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>Esta es la parte 9 de 10 de la serie "Tendencias de IA local 2027" de PromptQuorum — ver [Parte 3: Modelos de lenguaje pequeños](/es/prompt-bites/local-ai-trend-2027-small-language-models), [Parte 6: Enrutamiento híbrido local-nube](/es/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing) y [Parte 10: Ajuste fino sin código](/es/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) para el resto de la serie.</strong> Tres desarrollos regulatorios importan a los equipos que ejecutan IA local o en el dispositivo: las obligaciones de alto riesgo de la Ley de IA de la UE, que el Digital Omnibus on AI (Reglamento [(UE) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), publicado el 24 de julio de 2026) aplazó al 2 de diciembre de 2027 para los sistemas del Anexo III y al 2 de agosto de 2028 para la IA integrada en productos regulados; el endurecimiento continuo de las reglas sectoriales en finanzas y salud; y las reglas de localización de datos y de cambio de proveedor cloud, entre ellas la prohibición de cargos por cambio del Data Act de la UE desde el 12 de enero de 2027 (artículo 29 del [Reglamento (UE) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). Las fechas en otras jurisdicciones siguen cambiando; esto es información general, no asesoramiento jurídico: contrasta con el Diario Oficial y con tu propio asesor.',
    quickAnswerTop: {
      es: {
        question: '¿Qué cambios regulatorios deben vigilar los equipos de IA local en torno a 2027?',
        answer: "Vale la pena seguir tres desarrollos. Primero, los plazos de alto riesgo de la Ley de IA de la UE han cambiado: el Digital Omnibus on AI, publicado como Reglamento (UE) 2026/1744 el 24 de julio de 2026, aplazó las obligaciones de los sistemas de alto riesgo independientes (Anexo III) del 2 de agosto de 2026 al 2 de diciembre de 2027, y las de la IA integrada en productos regulados (Anexo I) al 2 de agosto de 2028. Segundo, los reguladores de finanzas y salud podrían seguir endureciendo las reglas sectoriales de procesamiento de datos. Tercero, las reglas de localización de datos y de cambio de proveedor cloud siguen ampliándose, entre ellas la prohibición de cargos por cambio del Data Act de la UE desde el 12 de enero de 2027 (artículo 29, Reglamento (UE) 2023/2854). Cada una empuja algunas cargas de trabajo hacia la inferencia local o en el dispositivo. Esto es información general, no asesoramiento jurídico.",
        bullets: [
          "Ley de IA de la UE (modificada): las obligaciones de alto riesgo del Anexo III se aplican ahora desde el 2 de diciembre de 2027 (antes, 2 de agosto de 2026) y la IA integrada en productos del Anexo I desde el 2 de agosto de 2028 (antes, 2 de agosto de 2027), según el Reglamento (UE) 2026/1744, en vigor desde el 27 de julio de 2026",
          "Prohibición de apps «nudifier» y marcado: según el reglamento adoptado, la nueva prohibición se aplica desde el 2 de diciembre de 2026, y los sistemas de IA generativa ya comercializados antes del 2 de agosto de 2026 tienen hasta el 2 de diciembre de 2026 para cumplir la obligación de marcado del artículo 50, apartado 2",
          "Finanzas y salud: los reguladores sectoriales podrían seguir limitando dónde pueden procesarse y analizarse los datos de pacientes y financieros",
          "Localización de datos y cambio de cloud: el artículo 29 del Data Act de la UE (Reglamento (UE) 2023/2854) prohíbe los cargos por cambio de proveedor cloud desde el 12 de enero de 2027, y otras jurisdicciones amplían reglas de residencia: conviene consultar directamente las fuentes nacionales",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "El Digital Omnibus on AI (Reglamento (UE) 2026/1744) aplazó las obligaciones de alto riesgo de la Ley de IA de la UE al 2 de diciembre de 2027 (Anexo III) y al 2 de agosto de 2028 (Anexo I); las fechas anteriores de agosto de 2026 y agosto de 2027 ya no se aplican",
          "El aplazamiento no es un retraso general: las obligaciones de los modelos de IA de propósito general se aplican desde el 2 de agosto de 2025, y las reglas de transparencia siguen sus propias fechas; revisa cada artículo en lugar de suponer que todo se movió",
          "Los reguladores de finanzas y salud podrían seguir endureciendo las reglas sectoriales de procesamiento de datos, independientemente de los plazos generales de la Ley de IA de la UE",
          "El artículo 29 del Data Act de la UE (Reglamento (UE) 2023/2854) prohíbe los cargos por cambio de proveedor cloud desde el 12 de enero de 2027, lo que reduce el coste de mover una carga de trabajo entre proveedores o de vuelta a infraestructura propia",
          "Las fechas fuera de la UE y las guías de implementación siguen cambiando: verifica en fuentes oficiales; esto es información general, no asesoramiento jurídico",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Las obligaciones de alto riesgo de la Ley de IA de la UE se aplazaron al 2 de diciembre de 2027 (Anexo III) y al 2 de agosto de 2028 (Anexo I), mientras que las reglas sectoriales y las de localización de datos y cambio de cloud siguen empujando distintas cargas de trabajo hacia la IA local." },
          { type: 'plain-terms', text: "En términos sencillos: la UE aplazó más de un año sus plazos más importantes de la Ley de IA, pero otras reglas siguen sus propios calendarios, y cada una da a un tipo distinto de carga de trabajo una razón para pasar de las API en la nube al procesamiento local o en el dispositivo." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "¿Qué plazos de alto riesgo de la Ley de IA de la UE se aplican tras el Digital Omnibus?",
        content: [
          "**Según el Digital Omnibus on AI, publicado como Reglamento (UE) 2026/1744 en el Diario Oficial el 24 de julio de 2026, las obligaciones de alto riesgo de la Ley de IA de la UE se aplican ahora desde el 2 de diciembre de 2027 para los casos de uso independientes del Anexo III (como empleo o infraestructuras críticas) y desde el 2 de agosto de 2028 para la IA que es componente de seguridad de productos sujetos a la legislación sectorial de la UE (Anexo I, como dispositivos médicos, maquinaria y vehículos).** Antes del cambio, esas fechas eran el 2 de agosto de 2026 y el 2 de agosto de 2027. Los negociadores del Parlamento y del Consejo alcanzaron un acuerdo provisional el 7 de mayo de 2026, el Parlamento aprobó el texto el 16 de junio y el Consejo dio su aprobación final el 29 de junio de 2026; el reglamento se firmó el 8 de julio de 2026 y, conforme a su artículo 4, entró en vigor el tercer día siguiente al de su publicación, el 27 de julio de 2026. Fuentes: [Reglamento (UE) 2026/1744 en EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [comunicado del Consejo](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Parlamento Europeo](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "El aplazamiento no elimina la ley: las obligaciones para los modelos de IA de propósito general se aplican desde el 2 de agosto de 2025 y, según el reglamento adoptado ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)), una nueva prohibición de las apps «nudifier» se aplica desde el 2 de diciembre de 2026, mientras que los sistemas de IA generativa ya comercializados antes del 2 de agosto de 2026 tienen hasta el 2 de diciembre de 2026 para cumplir la obligación de marcado (marca de agua) del artículo 50, apartado 2. Como la ley ya se modificó una vez, conviene tratar cada fecha como la situación jurídica actual y no como una garantía, y revisar el texto consolidado.",
          "La consecuencia práctica para los equipos de IA local: los productos que integran IA como componente de seguridad tendrán que documentar los flujos de datos y los lugares de procesamiento como parte de la evaluación de conformidad, y las fechas posteriores dan más tiempo para diseñarlo desde el principio. Ejecutar la inferencia en el dispositivo o en infraestructura totalmente dentro de la UE simplifica esa documentación frente a enrutar la inferencia crítica para la seguridad a través de API en la nube externas. Esto es información general, no asesoramiento jurídico. Para el contexto general de cumplimiento empresarial, consulta [Cumplimiento empresarial: RGPD, HIPAA, SOC2 y regulaciones de IA](/es/local-llms/enterprise-compliance-local-llms) y [Geopolítica de la IA explicada: Ley de IA de la UE frente a EE. UU. y China](/es/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: '¿Se están endureciendo las reglas de finanzas y salud más rápido que la ley general de IA?',
        content: [
          '**Los reguladores sectoriales de finanzas y salud históricamente se han adelantado a la legislación general de IA, y ese patrón podría continuar hasta 2027.** Por ejemplo, una circular del Reserve Bank of India del 6 de abril de 2018 exige que los operadores de sistemas de pago almacenen los datos de pago solo en la India ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), y los reguladores de salud superponen reglas de datos de pacientes sobre la ley de privacidad general; ninguna de las dos categorías espera a que una ley integral de IA termine de escalonarse.',
          "Los equipos de sectores regulados se enfrentan cada vez más a la pregunta de dónde ocurre realmente la inferencia del modelo, y no solo dónde se almacenan los datos de entrenamiento. La inferencia en el dispositivo o en local ofrece una respuesta verificable a «¿dónde se procesa?» que una API en la nube de un tercero a menudo no puede dar. No hemos verificado una proyección concreta de analistas al respecto, así que tómalo como supuesto de planificación, no como pronóstico.",
          'Esta es una presión más específica y de movimiento más rápido que la narrativa general de cumplimiento y la Ley de IA — ver [Por qué las empresas usan LLM locales: costo, cumplimiento y control](/es/local-llms/why-enterprises-use-local-llms) para ese contexto más amplio.',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: '¿En qué mercados se ampliarán a continuación las reglas de localización de datos?',
        content: [
          "**Varias jurisdicciones han adoptado o están formalizando reglas que exigen que ciertas categorías de datos permanezcan dentro de las fronteras nacionales.** Entre los ejemplos verificados están el Decreto 53/2022/ND-CP de Vietnam, en vigor desde el 1 de octubre de 2022, que obliga a determinados proveedores de servicios nacionales y extranjeros a almacenar ciertos datos de usuarios en Vietnam ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/)), y la circular de 2018 del Reserve Bank of India sobre datos de pago ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). El alcance exacto y las fechas de aplicación varían según el país y aún se están finalizando en varios mercados; este artículo no ha verificado la situación actual de cada país, así que consulta fuentes nacionales y a tu asesor antes de basarte en cualquier calendario.",
          'Para los equipos que operan en estos mercados, el efecto práctico es el mismo independientemente de cuándo entre en vigor exactamente cada regla: las cargas de trabajo que tocan categorías de datos incluidas cada vez más necesitan ejecutarse dentro del país, lo que favorece la inferencia local o alojada regionalmente frente a una única implementación en la nube centralizada que atienda a todos los mercados.',
          "Dentro de la UE, el Data Act (Reglamento (UE) 2023/2854) se aplica desde el 12 de septiembre de 2025. Según [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services), los cargos por cambio de proveedor en servicios de procesamiento de datos como el cloud están limitados a los costes directos del proveedor hasta el 12 de enero de 2027 y prohibidos desde esa fecha, incluidos los cargos de salida de datos vinculados a un cambio. Para los equipos de IA local esto reduce el coste de mover una carga de trabajo de un servicio alojado a la inferencia local, aunque el tráfico continuo y las penalizaciones por terminación anticipada en contratos de duración fija pueden seguir cobrándose. Es una regla de portabilidad, no un mandato de localización.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: "¿Son definitivas las fechas de la Ley de IA de la UE de este artículo?",
            a: "Son las fechas vigentes tras el Reglamento (UE) 2026/1744, en vigor desde el 27 de julio de 2026: el 2 de diciembre de 2027 para el Anexo III y el 2 de agosto de 2028 para el Anexo I. La Comisión aún debe publicar orientaciones para la IA integrada en productos, siempre son posibles nuevas modificaciones, y las reglas sectoriales y de localización de datos de otras jurisdicciones se fijan a nivel nacional y pueden cambiar. Consulta el Diario Oficial y a tu propio asesor; esto es información general, no asesoramiento jurídico.",
          },
          {
            q: '¿Significa esto que todos los sistemas de IA deberán ejecutarse localmente para 2027?',
            a: 'No. Estos hitos se aplican a categorías específicas — IA integrada como componente de seguridad en productos regulados, datos regulados sectorialmente en finanzas y salud, y categorías de datos cubiertas por reglas de localización en jurisdicciones específicas. La mayoría del uso general de IA no se ve afectado; el cambio hacia la inferencia local se concentra en estas categorías más estrechas y reguladas.',
          },
          {
            q: '¿En qué se diferencia esto del argumento general de que "el cumplimiento impulsa la IA local"?',
            a: 'Ese argumento general se trata en profundidad en otras partes de este sitio — ver <a href="/es/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">Por qué las empresas usan LLM locales</a> y <a href="/es/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">Cumplimiento empresarial: RGPD, HIPAA, SOC2 y regulaciones de IA</a>. Este artículo se centra específicamente en hitos nombrados que se espera que se intensifiquen alrededor de 2027, no en una repetición de por qué el cumplimiento importa para la IA local en general.',
          },
          {
            q: '¿Qué debe hacer ahora un responsable de cumplimiento o ingeniería, dada esta incertidumbre?',
            a: 'Construir una arquitectura lo bastante flexible como para enrutar categorías reguladas de carga de trabajo a inferencia local o dentro del país sin una reconstrucción completa, en lugar de esperar a que se finalice una fecha de aplicación específica. De esa manera, sea cual sea la fecha en que realmente entre en vigor cada regla, la capacidad técnica ya estará lista.',
          },
          {
            q: "¿Qué cambió en el calendario de la Ley de IA de la UE durante 2026?",
            a: "Los negociadores del Parlamento y del Consejo alcanzaron un acuerdo provisional el 7 de mayo de 2026, el Parlamento lo aprobó el 16 de junio, el Consejo dio su aprobación final el 29 de junio y el reglamento se firmó el 8 de julio. Se publicó en el Diario Oficial el 24 de julio y entró en vigor el 27 de julio de 2026. Trasladó las obligaciones de alto riesgo del 2 de agosto de 2026 y del 2 de agosto de 2027 al 2 de diciembre de 2027 y al 2 de agosto de 2028. Consulta el <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">Reglamento (UE) 2026/1744 (EUR-Lex)</a>, el <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">comunicado del Consejo</a> y el <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">resumen del Parlamento Europeo</a>.",
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-pt.webp',
    title: 'Tendências de IA local 2027, parte 9 de 10: o calendário regulatório que as equipes de IA local devem observar',
    seoTitle: 'Tendências de IA local 2027, parte 9: o calendário regulatório | Prompt Bites',
    metaDescription: "Parte 9 de 10: o Digital Omnibus adiou os prazos de alto risco da Lei de IA da UE para dezembro de 2027 e agosto de 2028, com Data Act e localização de dados.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Líderes de compliance e engenharia que planejam investimentos em infraestrutura de IA local em torno de prazos regulatórios futuros',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>Esta é a parte 9 de 10 da série "Tendências de IA local 2027" da PromptQuorum — veja [Parte 3: Modelos de linguagem pequenos](/pt/prompt-bites/local-ai-trend-2027-small-language-models), [Parte 6: Roteamento híbrido local-nuvem](/pt/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing) e [Parte 10: Fine-tuning sem código](/pt/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) para o restante da série.</strong> Três desenvolvimentos regulatórios importam para equipes que executam IA local ou no dispositivo: as obrigações de alto risco da Lei de IA da UE, que o Digital Omnibus on AI (Regulamento [(UE) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), publicado em 24 de julho de 2026) adiou para 2 de dezembro de 2027 nos sistemas do Anexo III e para 2 de agosto de 2028 na IA embutida em produtos regulamentados; o endurecimento contínuo das regras setoriais em finanças e saúde; e as regras de localização de dados e de troca de provedor de nuvem, incluindo a proibição de taxas de troca pelo Data Act da UE a partir de 12 de janeiro de 2027 (artigo 29 do [Regulamento (UE) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). As datas em outras jurisdições continuam mudando; isto é informação geral, não aconselhamento jurídico — confira no Jornal Oficial e com seu próprio assessor jurídico.',
    quickAnswerTop: {
      pt: {
        question: 'Quais mudanças regulatórias as equipes de IA local devem observar por volta de 2027?',
        answer: "Três desenvolvimentos merecem acompanhamento. Primeiro, os prazos de alto risco da Lei de IA da UE mudaram: o Digital Omnibus on AI, publicado como Regulamento (UE) 2026/1744 em 24 de julho de 2026, adiou as obrigações dos sistemas de alto risco independentes (Anexo III) de 2 de agosto de 2026 para 2 de dezembro de 2027, e as da IA embutida em produtos regulamentados (Anexo I) para 2 de agosto de 2028. Segundo, reguladores de finanças e saúde podem continuar apertando as regras setoriais de processamento de dados. Terceiro, as regras de localização de dados e de troca de provedor de nuvem continuam se ampliando, incluindo a proibição de taxas de troca pelo Data Act da UE a partir de 12 de janeiro de 2027 (artigo 29, Regulamento (UE) 2023/2854). Cada uma empurra algumas cargas de trabalho para a inferência local ou no dispositivo. Isto é informação geral, não aconselhamento jurídico.",
        bullets: [
          "Lei de IA da UE (alterada): as obrigações de alto risco do Anexo III passam a valer a partir de 2 de dezembro de 2027 (antes, 2 de agosto de 2026) e a IA embutida em produtos do Anexo I a partir de 2 de agosto de 2028 (antes, 2 de agosto de 2027), conforme o Regulamento (UE) 2026/1744, em vigor desde 27 de julho de 2026",
          "Proibição de aplicativos «nudifier» e marcação: conforme o regulamento adotado, a nova proibição vale a partir de 2 de dezembro de 2026, e os sistemas de IA generativa já no mercado antes de 2 de agosto de 2026 têm até 2 de dezembro de 2026 para cumprir a obrigação de marcação do artigo 50(2)",
          "Finanças e saúde: reguladores setoriais podem continuar restringindo onde dados de pacientes e financeiros podem ser processados e analisados",
          "Localização de dados e troca de nuvem: o artigo 29 do Data Act da UE (Regulamento (UE) 2023/2854) proíbe taxas de troca de provedor de nuvem a partir de 12 de janeiro de 2027, e outras jurisdições ampliam regras de residência — consulte diretamente as fontes nacionais",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "O Digital Omnibus on AI (Regulamento (UE) 2026/1744) adiou as obrigações de alto risco da Lei de IA da UE para 2 de dezembro de 2027 (Anexo III) e 2 de agosto de 2028 (Anexo I); as datas anteriores de agosto de 2026 e agosto de 2027 não valem mais",
          "O adiamento não é um atraso geral: as obrigações dos modelos de IA de uso geral valem desde 2 de agosto de 2025, e as regras de transparência seguem datas próprias — verifique cada artigo em vez de supor que tudo foi adiado",
          "Reguladores de finanças e saúde podem continuar endurecendo as regras setoriais de processamento de dados, independentemente dos prazos gerais da Lei de IA da UE",
          "O artigo 29 do Data Act da UE (Regulamento (UE) 2023/2854) proíbe taxas de troca de provedor de nuvem a partir de 12 de janeiro de 2027, o que reduz o custo de mover uma carga de trabalho entre provedores ou de volta para infraestrutura própria",
          "Datas fora da UE e orientações de implementação continuam mudando — verifique em fontes oficiais; isto é informação geral, não aconselhamento jurídico",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "As obrigações de alto risco da Lei de IA da UE foram adiadas para 2 de dezembro de 2027 (Anexo III) e 2 de agosto de 2028 (Anexo I), enquanto regras setoriais e de localização de dados e troca de nuvem continuam empurrando diferentes cargas de trabalho para a IA local." },
          { type: 'plain-terms', text: "Em termos simples: a UE adiou em mais de um ano seus principais prazos da Lei de IA, mas outras regras seguem calendários próprios, e cada uma dá a um tipo diferente de carga de trabalho um motivo para sair das APIs em nuvem e ir para o processamento local ou no dispositivo." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Quais prazos de alto risco da Lei de IA da UE valem após o Digital Omnibus?",
        content: [
          "**Segundo o Digital Omnibus on AI, publicado como Regulamento (UE) 2026/1744 no Jornal Oficial em 24 de julho de 2026, as obrigações de alto risco da Lei de IA da UE passam a valer a partir de 2 de dezembro de 2027 para casos de uso independentes do Anexo III (como emprego ou infraestrutura crítica) e a partir de 2 de agosto de 2028 para IA que é componente de segurança de produtos sob a legislação setorial da UE (Anexo I, como dispositivos médicos, máquinas e veículos).** Antes da mudança, essas datas eram 2 de agosto de 2026 e 2 de agosto de 2027. Os negociadores do Parlamento e do Conselho chegaram a um acordo provisório em 7 de maio de 2026, o Parlamento aprovou o texto em 16 de junho e o Conselho deu a aprovação final em 29 de junho de 2026; o regulamento foi assinado em 8 de julho de 2026 e, conforme seu artigo 4, entrou em vigor no terceiro dia após a publicação, em 27 de julho de 2026. Fontes: [Regulamento (UE) 2026/1744 no EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [comunicado do Conselho](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Parlamento Europeu](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "O adiamento não elimina a lei: as obrigações para modelos de IA de uso geral valem desde 2 de agosto de 2025 e, conforme o regulamento adotado ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)), uma nova proibição de aplicativos «nudifier» vale a partir de 2 de dezembro de 2026, enquanto os sistemas de IA generativa já no mercado antes de 2 de agosto de 2026 têm até 2 de dezembro de 2026 para cumprir a obrigação de marcação (marca d’água) do artigo 50(2). Como a lei já foi alterada uma vez, trate cada data como a situação jurídica atual, e não como garantia, e consulte o texto consolidado.",
          "A consequência prática para equipes de IA local: produtos que embutem IA como componente de segurança precisarão documentar fluxos de dados e locais de processamento na avaliação de conformidade, e os prazos mais tardios dão mais tempo para projetar isso desde o início. Executar a inferência no dispositivo ou em infraestrutura totalmente dentro da UE simplifica essa documentação em comparação com rotear inferência crítica para a segurança por APIs de nuvem externas. Isto é informação geral, não aconselhamento jurídico. Para o contexto geral de conformidade empresarial, veja [Compliance empresarial: LGPD/GDPR, HIPAA, SOC2 e regulações de IA](/pt/local-llms/enterprise-compliance-local-llms) e [Geopolítica da IA explicada: Lei de IA da UE vs. EUA vs. China](/pt/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: 'As regras de finanças e saúde estão apertando mais rápido do que a lei geral de IA?',
        content: [
          '**Reguladores setoriais de finanças e saúde historicamente se anteciparam à legislação geral de IA, e esse padrão pode continuar até 2027.** Por exemplo, uma circular do Reserve Bank of India de 6 de abril de 2018 exige que os operadores de sistemas de pagamento armazenem os dados de pagamento apenas na Índia ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), e reguladores de saúde sobrepõem regras de dados de pacientes à lei geral de privacidade; nenhuma das duas categorias espera uma lei abrangente de IA terminar de ser implementada por etapas.',
          "Equipes de setores regulamentados enfrentam cada vez mais a pergunta de onde a inferência do modelo realmente acontece, e não apenas onde os dados de treinamento são armazenados. A inferência no dispositivo ou local oferece uma resposta verificável para «onde o processamento acontece?» que uma API de nuvem de terceiros muitas vezes não consegue dar. Não verificamos uma projeção específica de analistas sobre isso; trate-o como premissa de planejamento, não como previsão.",
          'Essa é uma pressão mais estreita e de movimento mais rápido do que a narrativa geral de compliance e Lei de IA — veja [Por que empresas usam LLMs locais: custo, compliance e controle](/pt/local-llms/why-enterprises-use-local-llms) para esse contexto mais amplo.',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'Em quais mercados as regras de localização de dados vão se expandir a seguir?',
        content: [
          "**Várias jurisdições adotaram ou estão formalizando regras que exigem que certas categorias de dados permaneçam dentro das fronteiras nacionais.** Entre os exemplos verificados estão o Decreto 53/2022/ND-CP do Vietnã, em vigor desde 1º de outubro de 2022, que obriga determinados provedores de serviços nacionais e estrangeiros a armazenar certos dados de usuários no Vietnã ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/)), e a circular de 2018 do Reserve Bank of India sobre dados de pagamento ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). O escopo exato e as datas de aplicação variam por país e ainda estão sendo finalizados em vários mercados; este artigo não verificou a situação atual de cada país — consulte fontes nacionais e seu assessor jurídico antes de se basear em qualquer cronograma.",
          'Para equipes que operam nesses mercados, o efeito prático é o mesmo independentemente de quando exatamente cada regra entrar em vigor: cargas de trabalho que tocam categorias de dados abrangidas cada vez mais precisam rodar dentro do país, o que favorece inferência local ou hospedada regionalmente em vez de uma implantação de nuvem centralizada única atendendo a todos os mercados.',
          "Dentro da UE, o Data Act (Regulamento (UE) 2023/2854) vale desde 12 de setembro de 2025. Segundo a [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services), as taxas de troca de provedor para serviços de processamento de dados, como a nuvem, são limitadas aos custos diretos do provedor até 12 de janeiro de 2027 e proibidas a partir dessa data, incluindo taxas de saída de dados ligadas a uma troca. Para equipes de IA local, isso reduz o custo de mover uma carga de trabalho de um serviço hospedado para inferência local, embora o tráfego contínuo e multas de rescisão antecipada em contratos de prazo fixo possam continuar sendo cobrados. É uma regra de portabilidade, não uma exigência de localização.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: "As datas da Lei de IA da UE neste artigo são definitivas?",
            a: "São as datas em vigor após o Regulamento (UE) 2026/1744, em vigor desde 27 de julho de 2026: 2 de dezembro de 2027 para o Anexo III e 2 de agosto de 2028 para o Anexo I. A Comissão ainda precisa publicar orientações para a IA embutida em produtos, novas alterações são sempre possíveis, e as regras setoriais e de localização de dados de outras jurisdições são definidas em nível nacional e podem mudar. Consulte o Jornal Oficial e seu próprio assessor jurídico; isto é informação geral, não aconselhamento jurídico.",
          },
          {
            q: 'Isso significa que todo sistema de IA precisará rodar localmente até 2027?',
            a: 'Não. Esses marcos se aplicam a categorias específicas — IA embutida como componente de segurança em produtos regulamentados, dados regulados setorialmente em finanças e saúde, e categorias de dados cobertas por regras de localização em jurisdições específicas. A maior parte do uso geral de IA não é afetada; a mudança para inferência local está concentrada nessas categorias mais estreitas e regulamentadas.',
          },
          {
            q: 'Como isso é diferente do argumento geral de que "compliance impulsiona a IA local"?',
            a: 'Esse argumento geral é tratado em profundidade em outras partes deste site — veja <a href="/pt/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">Por que empresas usam LLMs locais</a> e <a href="/pt/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">Compliance empresarial: LGPD/GDPR, HIPAA, SOC2 e regulações de IA</a>. Este artigo foca especificamente em marcos nomeados que devem se intensificar por volta de 2027, não em uma repetição de por que o compliance importa para a IA local em geral.',
          },
          {
            q: 'O que um líder de compliance ou engenharia deve fazer agora, diante dessa incerteza?',
            a: 'Construir uma arquitetura flexível o suficiente para rotear categorias regulamentadas de carga de trabalho para inferência local ou dentro do país sem uma reconstrução completa, em vez de esperar que uma data de aplicação específica seja finalizada. Dessa forma, seja qual for a data em que cada regra realmente entrar em vigor, a capacidade técnica já estará pronta.',
          },
          {
            q: "O que mudou no cronograma da Lei de IA da UE em 2026?",
            a: "Os negociadores do Parlamento e do Conselho chegaram a um acordo provisório em 7 de maio de 2026, o Parlamento o aprovou em 16 de junho, o Conselho deu a aprovação final em 29 de junho e o regulamento foi assinado em 8 de julho. Foi publicado no Jornal Oficial em 24 de julho e entrou em vigor em 27 de julho de 2026. Ele moveu as obrigações de alto risco de 2 de agosto de 2026 e 2 de agosto de 2027 para 2 de dezembro de 2027 e 2 de agosto de 2028. Veja o <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">Regulamento (UE) 2026/1744 (EUR-Lex)</a>, o <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">comunicado do Conselho</a> e o <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">resumo do Parlamento Europeu</a>.",
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-ar.webp',
    title: 'اتجاهات الذكاء الاصطناعي المحلي 2027، الجزء 9 من 10: التقويم التنظيمي الذي يجب أن تراقبه فرق الذكاء الاصطناعي المحلي',
    seoTitle: 'اتجاهات الذكاء الاصطناعي المحلي 2027، الجزء 9: التقويم التنظيمي | Prompt Bites',
    metaDescription: "الجزء 9 من 10: أجّل Digital Omnibus مواعيد المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي إلى ديسمبر 2027 وأغسطس 2028، مع Data Act وتوطين البيانات.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'قادة الامتثال والهندسة الذين يخططون لاستثمارات البنية التحتية للذكاء الاصطناعي المحلي حول المواعيد التنظيمية المقبلة',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>هذا هو الجزء 9 من 10 في سلسلة "اتجاهات الذكاء الاصطناعي المحلي 2027" من PromptQuorum — انظر [الجزء 3: نماذج اللغة الصغيرة](/ar/prompt-bites/local-ai-trend-2027-small-language-models)، [الجزء 6: التوجيه الهجين بين المحلي والسحابي](/ar/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing)، و[الجزء 10: الضبط الدقيق بلا كود](/ar/prompt-bites/local-ai-trend-2027-no-code-fine-tuning) لبقية السلسلة.</strong> ثلاثة تطورات تنظيمية مهمة للفرق التي تشغّل الذكاء الاصطناعي المحلي أو على الجهاز: التزامات المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي، التي أجّلها Digital Omnibus on AI (اللائحة [(الاتحاد الأوروبي) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)، المنشورة في 24 يوليو 2026) إلى 2 ديسمبر 2027 لأنظمة الملحق الثالث وإلى 2 أغسطس 2028 للذكاء الاصطناعي المدمج في المنتجات الخاضعة للتنظيم؛ والتشديد المستمر للقواعد القطاعية في المالية والرعاية الصحية؛ وقواعد توطين البيانات والانتقال بين مزودي الخدمات السحابية، ومنها حظر رسوم الانتقال بموجب Data Act الأوروبي اعتبارًا من 12 يناير 2027 (المادة 29 من [اللائحة (الاتحاد الأوروبي) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)). لا تزال التواريخ في ولايات قضائية أخرى تتغير، وهذه معلومات عامة وليست استشارة قانونية — تحقق من الجريدة الرسمية ومن مستشارك القانوني.',
    quickAnswerTop: {
      ar: {
        question: 'ما التغييرات التنظيمية التي يجب أن تراقبها فرق الذكاء الاصطناعي المحلي حول عام 2027؟',
        answer: "هناك ثلاثة تطورات تستحق المتابعة. أولًا، تغيّرت مواعيد المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي: فقد أجّل Digital Omnibus on AI، المنشور بوصفه اللائحة (الاتحاد الأوروبي) 2026/1744 في 24 يوليو 2026، التزامات أنظمة المخاطر العالية المستقلة (الملحق الثالث) من 2 أغسطس 2026 إلى 2 ديسمبر 2027، والتزامات الذكاء الاصطناعي المدمج في المنتجات الخاضعة للتنظيم (الملحق الأول) إلى 2 أغسطس 2028. ثانيًا، قد يواصل منظمو المالية والرعاية الصحية تشديد القواعد القطاعية لمعالجة البيانات. ثالثًا، تواصل قواعد توطين البيانات والانتقال بين مزودي الخدمات السحابية التوسع، ومنها حظر رسوم الانتقال بموجب Data Act الأوروبي اعتبارًا من 12 يناير 2027 (المادة 29، اللائحة (الاتحاد الأوروبي) 2023/2854). يدفع كل منها بعض أحمال العمل نحو الاستدلال المحلي أو على الجهاز. هذه معلومات عامة وليست استشارة قانونية.",
        bullets: [
          "قانون الذكاء الاصطناعي الأوروبي (تغيّر): تسري التزامات المخاطر العالية للملحق الثالث الآن اعتبارًا من 2 ديسمبر 2027 (كان 2 أغسطس 2026) والذكاء الاصطناعي المدمج في منتجات الملحق الأول اعتبارًا من 2 أغسطس 2028 (كان 2 أغسطس 2027)، بموجب اللائحة (الاتحاد الأوروبي) 2026/1744 النافذة منذ 27 يوليو 2026",
          "حظر تطبيقات «nudifier» ووسم المحتوى: بموجب اللائحة المعتمدة يسري الحظر الجديد على تطبيقات «nudifier» اعتبارًا من 2 ديسمبر 2026، وأمام أنظمة الذكاء الاصطناعي التوليدي المطروحة في السوق قبل 2 أغسطس 2026 مهلة حتى 2 ديسمبر 2026 للامتثال لالتزام الوسم بموجب المادة 50(2)",
          "المالية والرعاية الصحية: قد يواصل المنظمون القطاعيون تضييق الأماكن التي يجوز فيها معالجة بيانات المرضى والبيانات المالية وتحليلها",
          "توطين البيانات والانتقال السحابي: تحظر المادة 29 من Data Act الأوروبي (اللائحة (الاتحاد الأوروبي) 2023/2854) رسوم الانتقال بين مزودي الخدمات السحابية اعتبارًا من 12 يناير 2027، وتوسّع ولايات قضائية أخرى قواعد الإقامة — راجع المصادر الوطنية مباشرة",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "أجّل Digital Omnibus on AI (اللائحة (الاتحاد الأوروبي) 2026/1744) التزامات المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي إلى 2 ديسمبر 2027 (الملحق الثالث) و2 أغسطس 2028 (الملحق الأول)، فلم تعد مواعيد أغسطس 2026 وأغسطس 2027 السابقة سارية",
          "التأجيل ليس تأخيرًا شاملًا: فالتزامات نماذج الذكاء الاصطناعي ذات الأغراض العامة سارية منذ 2 أغسطس 2025، وتتبع قواعد الشفافية مواعيدها الخاصة — راجع كل مادة بدلًا من افتراض أن كل شيء قد تأجل",
          "قد يواصل منظمو المالية والرعاية الصحية تشديد القواعد القطاعية لمعالجة البيانات بصرف النظر عن الجداول الزمنية العامة لقانون الذكاء الاصطناعي الأوروبي",
          "تحظر المادة 29 من Data Act الأوروبي (اللائحة (الاتحاد الأوروبي) 2023/2854) رسوم الانتقال بين مزودي الخدمات السحابية اعتبارًا من 12 يناير 2027، مما يخفض تكلفة نقل حمل العمل بين المزودين أو إلى البنية المحلية",
          "تستمر التواريخ خارج الاتحاد الأوروبي وإرشادات التنفيذ في كل مكان في التغير — تحقق من المصادر الرسمية؛ هذه معلومات عامة وليست استشارة قانونية",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "أُجّلت التزامات المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي إلى 2 ديسمبر 2027 (الملحق الثالث) و2 أغسطس 2028 (الملحق الأول)، بينما تواصل القواعد القطاعية وقواعد توطين البيانات والانتقال السحابي دفع أحمال عمل مختلفة نحو الذكاء الاصطناعي المحلي." },
          { type: 'plain-terms', text: "بعبارة بسيطة: أخّر الاتحاد الأوروبي أهم مواعيد قانون الذكاء الاصطناعي لأكثر من عام، لكن قواعد أخرى لا تزال تسري وفق جداولها، وتمنح كل منها نوعًا مختلفًا من أحمال العمل سببًا للانتقال من واجهات السحابة البرمجية إلى المعالجة المحلية أو على الجهاز." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "أي مواعيد للمخاطر العالية في قانون الذكاء الاصطناعي الأوروبي تسري بعد Digital Omnibus؟",
        content: [
          "**بموجب Digital Omnibus on AI، المنشور بوصفه اللائحة (الاتحاد الأوروبي) 2026/1744 في الجريدة الرسمية في 24 يوليو 2026، تسري التزامات المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي الآن اعتبارًا من 2 ديسمبر 2027 على حالات استخدام الملحق الثالث المستقلة (مثل التوظيف أو البنية التحتية الحيوية)، واعتبارًا من 2 أغسطس 2028 على الذكاء الاصطناعي الذي يُعد مكوّن سلامة في منتجات خاضعة لتشريعات السلامة القطاعية الأوروبية (الملحق الأول، مثل الأجهزة الطبية والآلات والمركبات).** قبل التعديل كانت هذه المواعيد 2 أغسطس 2026 و2 أغسطس 2027. توصل مفاوضو البرلمان والمجلس إلى اتفاق مبدئي في 7 مايو 2026، ووافق البرلمان على النص في 16 يونيو، وأعطى المجلس موافقته النهائية في 29 يونيو 2026؛ ووُقّعت اللائحة في 8 يوليو 2026 ودخلت حيز النفاذ، بموجب مادتها الرابعة، في اليوم الثالث بعد نشرها، أي 27 يوليو 2026. المصادر: [اللائحة (الاتحاد الأوروبي) 2026/1744 على EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)، [بيان المجلس الصحفي](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)، [البرلمان الأوروبي](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps)، [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "لا يلغي التأجيل القانون: فالتزامات نماذج الذكاء الاصطناعي ذات الأغراض العامة سارية منذ 2 أغسطس 2025، وبموجب اللائحة المعتمدة ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)) يسري حظر جديد على تطبيقات «nudifier» اعتبارًا من 2 ديسمبر 2026، فيما أمام أنظمة الذكاء الاصطناعي التوليدي المطروحة في السوق قبل 2 أغسطس 2026 مهلة حتى 2 ديسمبر 2026 للامتثال لالتزام الوسم (العلامة المائية) بموجب المادة 50(2). ولأن القانون عُدّل مرة بالفعل، فعامل كل تاريخ بوصفه الوضع القانوني الحالي لا ضمانًا، وراجع النص الموحّد.",
          "النتيجة العملية لفرق الذكاء الاصطناعي المحلي: المنتجات التي تدمج الذكاء الاصطناعي كمكوّن سلامة ستحتاج إلى توثيق تدفقات البيانات وأماكن المعالجة ضمن تقييم المطابقة، وتمنح المواعيد الأبعد وقتًا أطول لتصميم ذلك منذ البداية. ويبسّط تشغيل الاستدلال على الجهاز أو على بنية تحتية داخل الاتحاد الأوروبي بالكامل هذا التوثيق مقارنةً بتمرير الاستدلال المرتبط بالسلامة عبر واجهات سحابية خارجية. هذه معلومات عامة وليست استشارة قانونية. وللاطلاع على خلفية الامتثال المؤسسي العامة، راجع [الامتثال المؤسسي: GDPR وHIPAA وSOC2 ولوائح الذكاء الاصطناعي](/ar/local-llms/enterprise-compliance-local-llms) و[جيوسياسة الذكاء الاصطناعي موضحة: قانون الذكاء الاصطناعي الأوروبي مقابل الولايات المتحدة والصين](/ar/prompt-engineering/geopolitics-and-ai).",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: 'هل تُشدَّد قواعد المالية والرعاية الصحية بوتيرة أسرع من قانون الذكاء الاصطناعي العام؟',
        content: [
          '**سبق منظمو قطاعي المالية والرعاية الصحية تاريخيًا التشريعات العامة للذكاء الاصطناعي، وقد يستمر هذا النمط حتى عام 2027.** فعلى سبيل المثال، يشترط تعميم صادر عن البنك الاحتياطي الهندي بتاريخ 6 أبريل 2018 على مشغّلي أنظمة الدفع تخزين بيانات الدفع داخل الهند فقط ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244))، ويضيف منظمو الرعاية الصحية قواعد بيانات المرضى فوق قانون الخصوصية العام؛ ولا تنتظر أي من الفئتين اكتمال التطبيق التدريجي لقانون شامل للذكاء الاصطناعي.',
          "تواجه فرق القطاعات الخاضعة للتنظيم بشكل متزايد سؤال: أين يحدث استدلال النموذج فعليًا، وليس فقط أين تُخزَّن بيانات التدريب؟ يقدم الاستدلال على الجهاز أو داخل المؤسسة إجابة قابلة للتحقق عن سؤال «أين تتم المعالجة؟»، وهو ما لا تستطيع واجهة سحابية لطرف ثالث تقديمه غالبًا. لم نتحقق من توقع محدد لمحللين بهذا الشأن، لذا اعتبره افتراضًا للتخطيط وليس تنبؤًا.",
          'هذا ضغط أضيق نطاقًا وأسرع حركة من السردية العامة للامتثال وقانون الذكاء الاصطناعي — انظر [لماذا تستخدم الشركات نماذج اللغة الكبيرة المحلية: التكلفة والامتثال والتحكم](/ar/local-llms/why-enterprises-use-local-llms) لهذه الخلفية الأوسع.',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: 'في أي الأسواق ستتوسع قواعد توطين البيانات تاليًا؟',
        content: [
          "**اعتمدت عدة ولايات قضائية قواعد تشترط بقاء فئات معينة من البيانات داخل الحدود الوطنية، أو تعمل على صياغتها.** ومن الأمثلة التي تحققنا منها المرسوم الفيتنامي 53/2022/ND-CP النافذ منذ 1 أكتوبر 2022، الذي يُلزم مزوّدي خدمات محددين محليين وأجانب بتخزين بيانات معينة للمستخدمين داخل فيتنام ([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/))، وتعميم البنك الاحتياطي الهندي لعام 2018 بشأن بيانات الدفع ([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)). يختلف النطاق الدقيق وتواريخ التطبيق من بلد إلى آخر ولا تزال قيد الاستكمال في عدة أسواق، ولم يتحقق هذا المقال من الوضع الحالي لكل بلد — راجع المصادر الوطنية ومستشارك القانوني قبل الاعتماد على أي جدول زمني.",
          'بالنسبة للفرق العاملة في هذه الأسواق، يظل الأثر العملي واحدًا بغض النظر عن التوقيت الدقيق لبدء تطبيق كل قاعدة: ستحتاج أحمال العمل التي تلامس فئات البيانات المشمولة بشكل متزايد إلى العمل داخل الدولة، وهو ما يفضّل الاستدلال المحلي أو المستضاف إقليميًا على نشر سحابي مركزي واحد يخدم جميع الأسواق.',
          "داخل الاتحاد الأوروبي، يسري Data Act (اللائحة (الاتحاد الأوروبي) 2023/2854) منذ 12 سبتمبر 2025. وبحسب [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services)، تقتصر رسوم الانتقال لخدمات معالجة البيانات مثل الخدمات السحابية على التكاليف المباشرة للمزود حتى 12 يناير 2027، وتُحظر اعتبارًا من ذلك التاريخ، بما في ذلك رسوم نقل البيانات الخارجة المرتبطة بالانتقال. وبالنسبة لفرق الذكاء الاصطناعي المحلي، يخفض هذا تكلفة نقل حمل العمل من خدمة مستضافة إلى استدلال محلي، مع إمكانية استمرار فرض رسوم على حركة البيانات المستمرة ورسوم الإنهاء المبكر في العقود محددة المدة. إنها قاعدة قابلية نقل وليست إلزامًا بالتوطين.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: "هل مواعيد قانون الذكاء الاصطناعي الأوروبي في هذا المقال نهائية؟",
            a: "هذه هي المواعيد السارية بعد اللائحة (الاتحاد الأوروبي) 2026/1744 النافذة منذ 27 يوليو 2026: 2 ديسمبر 2027 للملحق الثالث و2 أغسطس 2028 للملحق الأول. لا يزال على المفوضية إصدار إرشادات للذكاء الاصطناعي المدمج في المنتجات، وتظل تعديلات أخرى ممكنة دائمًا، وتُحدَّد القواعد القطاعية وقواعد توطين البيانات في ولايات قضائية أخرى على المستوى الوطني وقد تتغير. راجع الجريدة الرسمية واستشر مستشارك القانوني؛ هذه معلومات عامة وليست استشارة قانونية.",
          },
          {
            q: 'هل يعني هذا أن كل نظام ذكاء اصطناعي يجب أن يعمل محليًا بحلول عام 2027؟',
            a: 'لا. تنطبق هذه المحطات على فئات محددة — الذكاء الاصطناعي المدمج كمكون سلامة في منتجات خاضعة للتنظيم، والبيانات الخاضعة لتنظيم قطاعي في المالية والرعاية الصحية، وفئات البيانات المشمولة بقواعد التوطين في ولايات قضائية محددة. معظم استخدامات الذكاء الاصطناعي العامة غير متأثرة؛ ويتركز التحول نحو الاستدلال المحلي في هذه الفئات الأضيق والخاضعة للتنظيم.',
          },
          {
            q: 'كيف يختلف هذا عن الحجة العامة القائلة بأن "الامتثال يدفع نحو الذكاء الاصطناعي المحلي"؟',
            a: 'تُغطى هذه الحجة العامة بعمق في أماكن أخرى من هذا الموقع — انظر <a href="/ar/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">لماذا تستخدم الشركات نماذج اللغة الكبيرة المحلية</a> و<a href="/ar/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">الامتثال المؤسسي: GDPR وHIPAA وSOC2 ولوائح الذكاء الاصطناعي</a>. يركز هذا المقال تحديدًا على محطات محددة الاسم يُتوقع أن تتصاعد حول عام 2027، وليس على إعادة صياغة سبب أهمية الامتثال للذكاء الاصطناعي المحلي بشكل عام.',
          },
          {
            q: 'ماذا يجب أن يفعل قائد الامتثال أو الهندسة الآن، في ظل هذا الغموض؟',
            a: 'ابنِ بنية مرنة بما يكفي لتوجيه فئات أحمال العمل الخاضعة للتنظيم إلى الاستدلال المحلي أو داخل الدولة دون إعادة بناء كاملة، بدلاً من انتظار تحديد موعد تطبيق نهائي محدد. بهذه الطريقة، أيًا كان الموعد الذي تدخل فيه كل قاعدة حيز التنفيذ فعليًا، ستكون القدرة التقنية جاهزة بالفعل.',
          },
          {
            q: "ما الذي تغيّر في الجدول الزمني لقانون الذكاء الاصطناعي الأوروبي خلال 2026؟",
            a: "توصل مفاوضو البرلمان والمجلس إلى اتفاق مبدئي في 7 مايو 2026، ووافق عليه البرلمان في 16 يونيو، وأعطى المجلس موافقته النهائية في 29 يونيو، ووُقّعت اللائحة في 8 يوليو. نُشرت في الجريدة الرسمية في 24 يوليو، ودخلت حيز النفاذ في 27 يوليو 2026. ونقلت التزامات المخاطر العالية من 2 أغسطس 2026 و2 أغسطس 2027 إلى 2 ديسمبر 2027 و2 أغسطس 2028. راجع <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">اللائحة (الاتحاد الأوروبي) 2026/1744 (EUR-Lex)</a>، <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">بيان المجلس الصحفي</a> و<a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">ملخص البرلمان الأوروبي</a>.",
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Industry Trends & Predictions',
    heroImage: '/images/local-ai-trend-2027-data-sovereignty-compliance-overview-hero-ko.webp',
    title: '로컬 AI 트렌드 2027, 10부작 중 9부: 로컬 AI 팀이 주시해야 할 규제 일정',
    seoTitle: '로컬 AI 트렌드 2027, 9부: 규제 일정 | Prompt Bites',
    metaDescription: "10부작 중 9부: Digital Omnibus로 EU AI 법의 고위험 의무가 2027년 12월과 2028년 8월로 연기됐습니다. Data Act와 데이터 현지화도 다룹니다.",
    publishDate: '2026-07-16',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '다가오는 규제 마감일을 앞두고 로컬 AI 인프라 투자를 계획하는 컴플라이언스 및 엔지니어링 리더',
    siblingBites,
    is_living_page: false,
    leadAnswerBlock: '<strong>이 글은 PromptQuorum의 "로컬 AI 트렌드 2027" 시리즈 10부작 중 9부입니다 — 시리즈의 나머지 편은 [3부: 소형 언어 모델](/ko/prompt-bites/local-ai-trend-2027-small-language-models), [6부: 하이브리드 로컬-클라우드 라우팅](/ko/prompt-bites/local-ai-trend-2027-hybrid-local-cloud-routing), [10부: 노코드 파인튜닝](/ko/prompt-bites/local-ai-trend-2027-no-code-fine-tuning)을 참고하세요.</strong> 로컬 또는 온디바이스 AI를 운영하는 팀에 중요한 규제 동향은 세 가지입니다. 첫째, EU AI 법의 고위험 의무로, Digital Omnibus on AI(규정[(EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), 2026년 7월 24일 공포)가 부속서 III 시스템은 2027년 12월 2일로, 규제 대상 제품에 내장된 AI는 2028년 8월 2일로 연기했습니다. 둘째, 금융·의료 분야 업종별 규정의 지속적 강화. 셋째, 데이터 현지화와 클라우드 전환 규정으로, 2027년 1월 12일부터 전환 수수료를 금지하는 EU Data Act([규정(EU) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj) 제29조)가 포함됩니다. 다른 관할권의 일정은 계속 바뀌고 있으며, 이 글은 일반 정보이지 법률 자문이 아닙니다. 관보와 자체 법률 자문으로 확인하시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: '2027년을 전후해 로컬 AI 팀이 주시해야 할 규제 변화는 무엇인가요?',
        answer: "추적할 가치가 있는 흐름이 세 가지 있습니다. 첫째, EU AI 법의 고위험 일정이 바뀌었습니다. 2026년 7월 24일 규정(EU) 2026/1744로 공포된 Digital Omnibus on AI는 독립형 고위험 시스템(부속서 III)의 의무를 2026년 8월 2일에서 2027년 12월 2일로, 규제 대상 제품에 내장된 AI(부속서 I)의 의무를 2028년 8월 2일로 연기했습니다. 둘째, 금융·의료 규제 당국은 업종별 데이터 처리 규정을 계속 강화할 수 있습니다. 셋째, 데이터 현지화와 클라우드 전환 규정은 계속 확대되고 있으며, 2027년 1월 12일부터 전환 수수료를 금지하는 EU Data Act(규정(EU) 2023/2854 제29조)도 그중 하나입니다. 각각은 일부 워크로드를 로컬 또는 온디바이스 추론 쪽으로 밀어붙입니다. 이 글은 일반 정보이며 법률 자문이 아닙니다.",
        bullets: [
          "EU AI 법(변경됨): 부속서 III 고위험 의무는 이제 2027년 12월 2일부터(기존 2026년 8월 2일), 부속서 I 제품 내장 AI는 2028년 8월 2일부터(기존 2027년 8월 2일) 적용됩니다. 규정(EU) 2026/1744에 따르며, 2026년 7월 27일에 발효됐습니다",
          "누디파이 앱 금지와 콘텐츠 표시: 채택된 규정에 따라 ‘누디파이’ 앱 금지 신설은 2026년 12월 2일부터 적용되며, 2026년 8월 2일 이전에 시장에 출시된 생성형 AI 시스템은 2026년 12월 2일까지 제50조 제2항의 표시 의무를 이행해야 합니다",
          "금융·의료: 업종별 규제 당국은 환자 데이터와 금융 데이터를 처리·분석할 수 있는 장소를 계속 좁혀 갈 수 있습니다",
          "데이터 현지화와 클라우드 전환: EU Data Act(규정(EU) 2023/2854) 제29조는 2027년 1월 12일부터 클라우드 전환 수수료를 금지하며, 다른 관할권도 데이터 거주 규정을 확대하고 있으므로 각국의 공식 출처를 직접 확인하세요",
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Digital Omnibus on AI(규정(EU) 2026/1744)는 EU AI 법의 고위험 의무를 2027년 12월 2일(부속서 III)과 2028년 8월 2일(부속서 I)로 연기했으며, 기존의 2026년 8월과 2027년 8월 일정은 더 이상 적용되지 않습니다",
          "연기는 전면적인 지연이 아닙니다. 범용 AI 모델 의무는 2025년 8월 2일부터 적용 중이고 투명성 규정은 별도의 일정을 따르므로, 모든 것이 미뤄졌다고 가정하지 말고 조항별로 확인하세요",
          "금융·의료 규제 당국은 EU AI 법의 전반적인 일정과 별개로 업종별 데이터 처리 규정을 계속 강화할 수 있습니다",
          "EU Data Act(규정(EU) 2023/2854) 제29조는 2027년 1월 12일부터 클라우드 전환 수수료를 금지하므로, 워크로드를 제공업체 간에 또는 온프레미스로 옮기는 비용이 낮아집니다",
          "EU 밖의 일정과 각 지역의 시행 지침은 계속 바뀝니다. 공식 출처로 확인하세요. 이 글은 일반 정보이며 법률 자문이 아닙니다",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "EU AI 법의 고위험 의무는 2027년 12월 2일(부속서 III)과 2028년 8월 2일(부속서 I)로 연기됐으며, 업종별 규정과 데이터 현지화·클라우드 전환 규정은 계속해서 서로 다른 워크로드를 로컬 AI 쪽으로 이끌고 있습니다." },
          { type: 'plain-terms', text: "쉽게 말해, EU는 AI 법의 핵심 기한을 1년 넘게 미뤘지만 다른 규정은 각자의 일정대로 적용되며, 각 규정은 워크로드 유형별로 클라우드 API에서 로컬 또는 온디바이스 처리로 옮겨야 할 이유를 제공합니다." },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act-milestone',
        title: "Digital Omnibus 이후 EU AI 법의 어떤 고위험 일정이 적용되나요?",
        content: [
          "**2026년 7월 24일 관보에 규정(EU) 2026/1744로 공포된 Digital Omnibus on AI에 따라, EU AI 법의 고위험 의무는 독립형 부속서 III 사용 사례(고용, 핵심 인프라 등)에는 2027년 12월 2일부터, EU 분야별 안전 법령 대상 제품의 안전 부품인 AI(부속서 I, 의료기기·기계·차량 등)에는 2028년 8월 2일부터 적용됩니다.** 변경 전 일정은 2026년 8월 2일과 2027년 8월 2일이었습니다. 유럽의회와 이사회 협상단은 2026년 5월 7일 잠정 합의에 도달했고, 의회는 6월 16일 텍스트를 승인했으며, 이사회는 2026년 6월 29일 최종 승인했습니다. 규정은 2026년 7월 8일 서명됐고 제4조에 따라 공포 후 사흘째인 2026년 7월 27일에 발효됐습니다. 출처: [EUR-Lex의 규정(EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), [이사회 보도자료](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [유럽의회](https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps), [White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act).",
          "연기가 법을 없애는 것은 아닙니다. 범용 AI 모델 의무는 2025년 8월 2일부터 적용 중이며, 채택된 규정([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj))에 따라 ‘누디파이’ 앱 금지 신설은 2026년 12월 2일부터 적용되며, 2026년 8월 2일 이전에 시장에 출시된 생성형 AI 시스템은 2026년 12월 2일까지 제50조 제2항의 표시(워터마크) 의무를 이행해야 합니다. 이 법은 이미 한 차례 개정됐으므로 모든 날짜를 보장이 아닌 현재의 법적 상태로 받아들이고 통합 조문을 확인하세요.",
          "로컬 AI 팀에 대한 실무적 결과: AI를 안전 부품으로 내장하는 제품은 적합성 평가의 일환으로 데이터 흐름과 처리 위치를 문서화해야 하며, 일정이 늦춰져 처음부터 설계에 반영할 시간이 늘었습니다. 온디바이스 또는 EU 역내에 완전히 위치한 인프라에서 추론을 실행하면 안전 관련 추론을 외부 클라우드 API로 보내는 경우보다 이 문서화가 간단해집니다. 이 글은 일반 정보이며 법률 자문이 아닙니다. 기업 컴플라이언스의 전반적 배경은 [기업 컴플라이언스: GDPR, HIPAA, SOC2 및 AI 규제](/ko/local-llms/enterprise-compliance-local-llms) 및 [AI 지정학 해설: EU AI 법 대 미국 대 중국](/ko/prompt-engineering/geopolitics-and-ai)을 참고하세요.",
        ],
      },
      sectorRules: {
        id: 'sector-rules-finance-healthcare',
        title: '금융·의료 규정이 일반 AI 법보다 더 빠르게 강화되고 있나요?',
        content: [
          '**금융·의료 분야의 업종 규제 당국은 역사적으로 일반 AI 입법보다 앞서 움직여 왔으며, 이 패턴은 2027년까지 이어질 수 있습니다.** 예를 들어 인도준비은행의 2018년 4월 6일자 통지는 결제 시스템 사업자가 결제 데이터를 인도 국내에만 저장하도록 요구하며([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244)), 의료 규제 당국은 일반 개인정보보호법 위에 환자 데이터 규정을 추가로 얹고 있습니다. 두 범주 모두 포괄적 AI 법의 단계적 시행이 완료되기를 기다리지 않습니다.',
          "규제 대상 분야의 팀은 학습 데이터가 어디에 저장되는가뿐 아니라 모델 추론이 실제로 어디에서 이루어지는가라는 질문을 점점 더 자주 받습니다. 온디바이스 또는 온프레미스 추론은 ‘처리는 어디에서 이루어지는가’라는 질문에 대해 제3자 클라우드 API가 제시하기 어려운 검증 가능한 답을 줍니다. 이에 대한 특정 애널리스트 전망은 확인하지 못했으므로 예측이 아니라 계획상의 가정으로 보시기 바랍니다.",
          '이는 일반적인 컴플라이언스·AI 법 서사보다 더 좁고 더 빠르게 움직이는 압력입니다 — 더 넓은 배경은 [기업이 로컬 LLM을 사용하는 이유: 비용, 컴플라이언스, 통제](/ko/local-llms/why-enterprises-use-local-llms)를 참고하세요.',
        ],
      },
      dataLocalization: {
        id: 'data-localization-expansion',
        title: '다음으로 데이터 현지화 규정이 확대될 시장은 어디인가요?',
        content: [
          "**여러 관할권이 특정 데이터 범주를 국경 안에 두도록 요구하는 규정을 도입했거나 제도화하고 있습니다.** 확인된 사례로는 2022년 10월 1일부터 시행 중인 베트남 시행령 53/2022/ND-CP가 특정 국내외 서비스 제공업체에 일부 이용자 데이터를 베트남 내에 저장하도록 요구하는 것([Allens](https://www.allens.com.au/insights-news/insights/2022/08/Vietnam-issues-new-guidance-on-data-localisation-requirement/))과 인도준비은행의 2018년 결제 데이터 관련 통지([RBI](https://www.rbi.org.in/scripts/notificationUser.aspx?Id=11244))가 있습니다. 정확한 범위와 시행일은 국가마다 다르며 여러 시장에서 아직 확정 중이고, 이 글은 각국의 현재 상황을 개별적으로 검증하지 않았습니다. 어떤 일정이든 의존하기 전에 각국 공식 출처와 법률 자문으로 확인하세요.",
          '이러한 시장에서 운영하는 팀에게 실질적 영향은 각 규정이 정확히 언제 발효되는지와 관계없이 동일합니다. 적용 대상 데이터 범주를 다루는 워크로드는 점점 더 국내에서 실행되어야 하며, 이는 모든 시장을 서비스하는 단일 중앙 집중식 클라우드 배포보다 로컬 또는 지역 호스팅 추론을 선호하게 만듭니다.',
          "EU 역내에서는 Data Act(규정(EU) 2023/2854)가 2025년 9월 12일부터 적용되고 있습니다. [Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services)에 따르면 클라우드 같은 데이터 처리 서비스의 전환 수수료는 2027년 1월 12일까지 제공업체의 직접 비용으로 제한되고, 그 날짜부터는 전환에 수반되는 데이터 송출 수수료를 포함해 금지됩니다. 로컬 AI 팀에게는 호스팅 서비스에서 온프레미스 추론으로 워크로드를 옮기는 비용이 낮아진다는 뜻이지만, 지속적인 트래픽과 기간이 정해진 계약의 조기 해지 수수료는 계속 부과될 수 있습니다. 이는 이동성 규정이지 현지화 의무가 아닙니다.",
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: "이 글의 EU AI 법 날짜는 확정된 것인가요?",
            a: "규정(EU) 2026/1744 이후 유효한 날짜이며, 2026년 7월 27일부터 발효 중입니다. 부속서 III는 2027년 12월 2일, 부속서 I은 2028년 8월 2일입니다. 집행위원회는 제품 내장 AI에 대한 지침을 아직 내놓아야 하고 추가 개정은 언제든 가능하며, 다른 관할권의 업종별 및 데이터 현지화 규정은 국가 차원에서 정해지므로 바뀔 수 있습니다. 관보와 자체 법률 자문으로 확인하세요. 이 글은 일반 정보이며 법률 자문이 아닙니다.",
          },
          {
            q: '이는 2027년까지 모든 AI 시스템이 로컬로 실행되어야 한다는 뜻인가요?',
            a: '아닙니다. 이 이정표들은 특정 범주에만 적용됩니다 — 규제 대상 제품에 안전 부품으로 내장된 AI, 금융·의료 분야의 업종 규제 데이터, 특정 관할권의 현지화 규정이 적용되는 데이터 범주입니다. 대부분의 범용 AI 사용은 영향을 받지 않으며, 로컬 추론으로의 전환은 이러한 더 좁고 규제된 범주에 집중되어 있습니다.',
          },
          {
            q: '이것이 "컴플라이언스가 로컬 AI를 견인한다"는 일반적 주장과 어떻게 다른가요?',
            a: '그 일반적 주장은 본 사이트의 다른 글에서 자세히 다루고 있습니다 — <a href="/ko/local-llms/why-enterprises-use-local-llms" class="text-primary hover:underline">기업이 로컬 LLM을 사용하는 이유</a>와 <a href="/ko/local-llms/enterprise-compliance-local-llms" class="text-primary hover:underline">기업 컴플라이언스: GDPR, HIPAA, SOC2 및 AI 규제</a>를 참고하세요. 이 글은 컴플라이언스가 로컬 AI에 왜 중요한지에 대한 일반론을 반복하는 대신, 2027년 전후로 강화될 것으로 예상되는 구체적으로 명시된 이정표에 초점을 맞춥니다.',
          },
          {
            q: '이러한 불확실성을 감안할 때 컴플라이언스 또는 엔지니어링 리더는 지금 무엇을 해야 하나요?',
            a: '구체적인 시행일이 확정되기를 기다리기보다는, 규제 대상 워크로드 범주를 전면 재구축 없이 로컬 또는 국내 추론으로 라우팅할 수 있을 만큼 유연한 아키텍처를 구축하세요. 그러면 각 규정이 실제로 언제 발효되든 관계없이 기술적 역량이 이미 준비되어 있게 됩니다.',
          },
          {
            q: "2026년에 EU AI 법 일정은 무엇이 바뀌었나요?",
            a: "유럽의회와 이사회 협상단이 2026년 5월 7일 잠정 합의에 도달했고, 의회가 6월 16일 승인, 이사회가 6월 29일 최종 승인했으며, 규정은 7월 8일 서명됐습니다. 7월 24일 관보에 공포됐고 2026년 7월 27일 발효됐습니다. 이 규정은 고위험 의무를 2026년 8월 2일과 2027년 8월 2일에서 2027년 12월 2일과 2028년 8월 2일로 옮겼습니다. <a href=\"https://eur-lex.europa.eu/eli/reg/2026/1744/oj\" class=\"text-primary hover:underline\">규정(EU) 2026/1744(EUR-Lex)</a>, <a href=\"https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/\" class=\"text-primary hover:underline\">이사회 보도자료</a>와 <a href=\"https://www.europarl.europa.eu/news/en/press-room/20260427IPR42011/ai-act-deal-on-simplification-measures-ban-on-nudifier-apps\" class=\"text-primary hover:underline\">유럽의회 요약</a>을 참고하세요.",
          },
        ],
      },
    },
  },
}
