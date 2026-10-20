// Slug: balcony-solar-greece-status-2027
// BSOL-34 — Tier 5 (2027 Trends), legislation/status, semi_annual.
// SCOPE NOTE: eu-800w-balcony-solar-standard-2027.ts's "Greece: The Newest Entrant"
// section previously carried the full Greece treatment as part of the cross-border
// EU-harmonization piece. This article is now the canonical, fuller Greece dossier;
// the eu-800w section has been trimmed to a brief summary + cross-link here (the same
// pattern eu-800w already uses for Germany -> balkonkraftwerk-germany-rules), avoiding
// two full treatments of the same not-yet-final facts.
// RESEARCH CORRECTION (2026-07-19): the original brief conflated the enabling law with
// the balcony-specific rules. Law 5299/2026 (Government Gazette A'/67/05.05.2026) is a
// broad RES/energy-transition law that HAS been passed — it is not itself pending. The
// 800W/900W zero-feed-in mechanics are set by a SEPARATE ministerial decision issued
// under that law's authority, and it is that ministerial decision — not the law — that
// remains in public consultation through July 20, 2026. Sourced via web research:
// athens-times.com (framework details, registration process), ProtoThema English (MD
// status, self-consumption growth stats), Bernitsas Law (Law 5299/2026 passage date and
// scope), Keep Talking Greece / tovima.com (grid-curtailment rationale, expert pushback,
// minister's framing), mastori.dev (grey-zone status pre-2026). See individual content
// blocks for per-claim sourcing notes.
// SOURCING CHECK (2026-07-19): every claim traced to mastori.dev (a personal blog, the
// weakest of the six sources used) was checked against the other five. All but one are
// corroborated elsewhere (submission date, 800W/Schuko/anti-islanding, DEDDIE notification
// registration); the uncorroborated "minimal export tolerated" and "bureaucratic inaction"
// framings from that blog were NOT carried into this article. The one claim that does rely
// on mastori.dev alone — the pre-2026 grey-zone description (hardware sold in shops, no
// insurance coverage, no legal standing after an incident) — is marked [VERIFY] in the
// notFromZero section below rather than stated as settled fact.
// REFRESH 2026-10-19: ministerial decision now published (reported as Gazette B 5573, 14 Sep 2026); draft details
// (TAXISnet gateway, 2-yearly declaration, 900 W installed) replaced; unverified "80,000 installations" claim removed.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    last_full_refresh: '2026-10-19',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Greece? 2027 Status Report',
    seoTitle: 'Is Balcony Solar Legal in Greece? 2027 Status Report',
    intro: 'Greece has legalized plug-in balcony solar: a ministerial decision dated 14 September 2026 creates a dedicated category for plug-in systems of up to 800 W generation and 1,000 W installed power per supply point, strictly for self-consumption. The no-export design is not caution for its own sake — Greece\'s grid already curtails existing solar output on many days, and industry figures have warned that unrestricted balcony PV could strain it. What is still pending is the practical machinery: technical specifications are due by 31 October 2026, and the DEDDIE/HEDNO notification portal has no start date yet.',
    metaDescription: 'Balcony solar is legal in Greece under a 2026 ministerial decision: plug-in kits up to 800 W, no grid export, DEDDIE portal notice. Rules and open deadlines.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers and policy watchers in Greece tracking the balcony-PV ministerial decision',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Yes — Greece has legalized plug-in balcony solar. A ministerial decision dated 14 September 2026 (reported as Government Gazette Β\' 5573), issued under Law 5299/2026, creates a dedicated category of plug-in systems with up to 800 W generation and 1,000 W installed power per supply point, strictly for self-consumption: energy that reaches the grid is not compensated.** No connection contract, permit or connection fee is required, but the owner must notify the grid operator DEDDIE/HEDNO through a digital portal that is not open yet — the technical specifications are due by 31 October 2026 and the portal start date by 31 December 2026. The consultation draft (open until 20 July 2026) had said 900 W installed capacity; Greek press reports the final figure as 1,000 W. Greece is not starting from zero on solar — ministry figures count 37,407 self-consumption systems (1,070 MW) added since 2020 — and the no-export design responds to a grid that already curtails solar output on many days. This is a status summary of published coverage, not legal advice.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Greece?',
        answer: 'Yes, with conditions. A ministerial decision dated 14 September 2026 — issued under Law 5299/2026 and reported as Government Gazette Β\' 5573 — creates a legal category for plug-in balcony PV of up to 800 W generation and 1,000 W installed power per supply point, for self-consumption only (energy injected into the grid is not compensated). No connection contract, permit or connection fee is required, but you must notify DEDDIE/HEDNO through a portal whose start date is still to be announced (due by 31 December 2026). The draft consulted on until 20 July 2026 had said 900 W installed; the reported final figure is 1,000 W.',
        bullets: [
          'Law 5299/2026 (Government Gazette Α\'/67/05.05.2026) is the enabling renewable-energy law; the balcony rules sit in a ministerial decision dated 14 September 2026, reported as Gazette Β\' 5573',
          'Limits: up to 800 W generation and 1,000 W installed power per supply point — the consultation draft had said 900 W installed',
          'Self-consumption only: energy injected into the grid is not compensated; standalone batteries are also allowed, with no export',
          'No connection contract, permit or connection fee; the owner notifies DEDDIE/HEDNO via a digital portal (Taxisnet login) and an installer or engineer declares compliance',
          'Still pending: technical specifications due by 31 October 2026, portal start date to be announced by 31 December 2026, and operators may bar new connections in areas with limited grid capacity',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Law, the Ministerial Decision and the Draft', anchor: '#law-vs-md' },
      { label: 'Greece Isn\'t Starting From Zero', anchor: '#not-from-zero' },
      { label: 'Why Zero Feed-In — and Why Now', anchor: '#why-zero-feed-in' },
      { label: 'Registration: Portal, Declarations and Deadlines', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Greece legalized plug-in balcony solar with a ministerial decision dated 14 September 2026 (reported as Government Gazette Β\' 5573), issued under Law 5299/2026 (Α\'/67/05.05.2026); pv magazine reports it took effect on publication.',
          'Limits as reported by Greek press: up to 800 W generation and 1,000 W installed power per supply point, so several kits cannot be stacked on one supply. The July consultation draft said 900 W installed.',
          'Self-consumption only: any energy that reaches the grid is not paid for. Standalone batteries without panels are also allowed, again with no export.',
          'Registration is a notification, not a permit: no connection contract and no connection fee. The owner declares the system through a DEDDIE/HEDNO digital portal, and an installer or engineer declares compliance.',
          'The machinery is not ready: technical specifications are due by 31 October 2026 and the portal start date by 31 December 2026. Insider.gr reports that systems installed earlier must be declared within 30 days of launch.',
          'Operators may restrict new plug-in connections in areas with limited grid capacity. This page summarizes published coverage, not the Gazette text — it is not legal advice.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'The Law, the Ministerial Decision and What Changed From the Draft',
        content: [
          '**Law 5299/2026 is the broad renewable-energy law (Government Gazette Α\'/67/05.05.2026, published 5 May 2026); the balcony-solar rules are set by a separate ministerial decision dated 14 September 2026, reported as Gazette Β\' 5573, which according to the gazette index also replaces the 2024 self-consumption decision.** The law itself contains no balcony-specific wattage caps or registration steps.',
          '**The decision moved from draft to published rules: the public consultation closed on 20 July 2026, and Greek outlets reported the final text from 15 September 2026.** The main reported change is the installed-power limit: the draft said 800 W injection and 900 W installed capacity, while Insider.gr and Protothema report 800 W generation and 1,000 W installed power per supply point. The no-export principle stayed. The draft\'s TAXISnet "Digital Gateway" and two-year declaration of responsibility do not appear in the coverage of the final text, so this page no longer states them.',
        ],
        callouts: [
          { type: 'warning', text: 'This page summarizes published coverage of the decision (pv magazine, Insider.gr and Protothema, 15 September 2026), not the Gazette text itself, and press accounts differ on some details such as smart-meter requirements. Check Government Gazette Β\' 5573/14.09.2026 and DEDDIE/HEDNO announcements before buying or installing. This is not legal advice.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Greece Isn\'t Starting From Zero',
        content: [
          '**Greece is not starting from zero on solar: ministry figures cited by Greek and trade press say 37,407 self-consumption renewable systems with a combined 1,070 MW were added from 2020, against 1,772 systems (36 MW) in 2015–2019.** Most of that base is larger rooftop self-consumption, not plug-in kits.',
          'What the 2026 decision adds is a dedicated category for small, consumer-installed plug-in kits that earlier self-consumption rules were not written for: Greek coverage describes the plug-in category as being established for the first time.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Why Zero Feed-In — and Why Now',
        content: [
          '**Greece\'s grid already curtails solar output for hours on many days, which is the context for the no-export design.** Greek and trade press describe oversupply at peak solar hours; export-capable balcony PV would add to that rather than solve a new problem, which is why the decision allows self-consumption only instead of the export-permitted models used elsewhere in the EU.',
          '**Industry experts criticized the broader expansion before the decision.** In April 2026 Keep Talking Greece reported that the head of the Photovoltaic Energy Producers Association warned that unrestricted PV on every house and balcony could push the grid toward collapse, and that some voices preferred battery storage on balconies to more grid-feeding panels. After publication, Helapco, the PV companies\' association, said the framework incorporates most of the market\'s proposals (pv magazine).',
          'The Ministry of Environment and Energy frames the push as energy access — more consumers gaining control over consumption, lower bills and more energy independence — and the minister cited a possible 20–30% reduction in electricity costs (Protothema). That is the ministry\'s stated rationale, not this page\'s assessment of whether the framework achieves it.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registration: Portal, Declarations and Deadlines',
        content: [
          '**Registration is a notification, not a permit: no connection contract with DEDDIE/HEDNO, no other approval and no connection fee (standard self-consumption connections carry a €370 fee, per Protothema).** At purchase the buyer gives the supply-point number to the supplier or installer, who informs DEDDIE/HEDNO. Before installing, the owner logs into a DEDDIE digital portal with Taxisnet credentials and enters supplier, supply point, address, system data and installer or engineer details; a valid installer declaration is required and the installer or engineer declares that installation, connection and operation specifications are met.',
          '**The portal does not exist yet.** Technical specifications are due by 31 October 2026 (DEDDIE with ELOT), the portal start date must be announced by 31 December 2026, and Insider.gr reports that systems installed before launch must be declared within 30 days of it. After notification DEDDIE will fit telemetry to record supply data and spot checks are planned (Protothema); pv magazine adds that plug-in systems must be installed alongside smart meters, which the Greek coverage reviewed does not mention, so confirm it. Operators can also bar new plug-in connections in areas with limited grid capacity.',
          '**Standalone batteries are a separate category:** batteries without a PV system are allowed for individuals and companies with no grid export, enforced technically by a direction sensor and telemetry (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar legal in Greece?', a: 'Yes, with conditions. A ministerial decision dated 14 September 2026, issued under Law 5299/2026 and reported as Government Gazette Β\' 5573, creates a legal category for plug-in balcony PV of up to 800 W generation and 1,000 W installed power per supply point, for self-consumption only. The notification portal has no start date yet, so check DEDDIE/HEDNO before installing.' },
          { q: 'Why is Greece designing balcony solar as "zero feed-in" instead of allowing export like Germany or France?', a: 'Because Greece\'s grid already curtails existing solar output for hours on many days due to oversupply. Adding export-capable balcony PV to a grid that is already curtailing would worsen a real, current problem, and industry figures have warned of grid strain from unrestricted additional PV.' },
          { q: 'How big can a plug-in system be in Greece?', a: 'Greek press reports a maximum of 800 W generation and 1,000 W installed power per electricity supply point, so several kits cannot be stacked on one supply. The consultation draft had said 900 W installed capacity; confirm the exact limits in the Gazette text.' },
          { q: 'How do I register a balcony solar system in Greece?', a: 'It is a notification, not a permit: no connection contract, permit or connection fee. You give the supply-point number to the supplier or installer, then declare the system through a DEDDIE/HEDNO digital portal (Taxisnet login) together with an installer or engineer declaration. The portal is not open yet.' },
          { q: 'Can I export excess balcony solar power to the grid in Greece?', a: 'No. Plug-in systems are meant for self-consumption only, and energy that reaches the grid is not compensated. Standalone batteries follow the same no-export rule.' },
          { q: 'When can I actually register?', a: 'Not yet. Technical specifications are due by 31 October 2026 and DEDDIE must announce the portal start date by 31 December 2026. Insider.gr reports that systems installed earlier must be declared within 30 days of the portal launching.' },
          { q: 'Can I add a battery to a balcony system in Greece?', a: 'Standalone batteries without a PV system are now allowed, with no export, and self-consumption systems may add batteries subject to technical requirements (pv magazine, Protothema). On the islands, batteries installed with PV cannot inject electricity into the grid.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'Publication of the self-consumption framework, 800 W limit, no-export rule, operator and battery provisions (15 September 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'Balcony PV without permits or connection fee — Insider.gr', description: 'Per-supply-point limits of 800 W and 1,000 W, DEDDIE portal, deadlines, no compensation for injected energy (Greek)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'How to install balcony PV — Protothema', description: 'Registration steps, 31 October and 31 December deadlines, €370 standard connection fee, batteries (Greek)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'Consultation-stage coverage of the draft, with 37,400+ self-consumption systems since 2020 (22 July 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'Photovoltaics on balconies: experts have reservations — Keep Talking Greece', description: 'Grid-curtailment context and industry warnings (29 April 2026)' },
          { url: 'https://www.et.gr/', title: 'Government Gazette — National Printing Office', description: 'Official source for Gazette B\' 5573/14.09.2026 and Law 5299/2026 (A\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The 800W Balcony Solar Standard: EU Harmonization Explained](/balcony-solar/eu-800w-balcony-solar-standard-2027) — cross-border EU convergence context this page\'s mechanism sits within',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-de.webp',
    title: 'Ist ein Balkonkraftwerk in Griechenland legal? Statusbericht 2027',
    seoTitle: 'Ist ein Balkonkraftwerk in Griechenland legal? Statusbericht 2027',
    intro: 'Griechenland hat steckerfertige Balkonkraftwerke legalisiert: Eine Ministerialentscheidung vom 14. September 2026 schafft eine eigene Kategorie für Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, ausschließlich zur Eigenversorgung. Das Einspeiseverbot ist keine Vorsicht um ihrer selbst willen — Griechenlands Netz drosselt die bestehende Solarerzeugung bereits an vielen Tagen, und Branchenvertreter haben gewarnt, dass unbeschränkte Balkon-PV es belasten könnte. Offen ist noch die praktische Umsetzung: Die technischen Spezifikationen sind bis zum 31. Oktober 2026 fällig, und für das Meldeportal von DEDDIE/HEDNO gibt es noch keinen Starttermin.',
    metaDescription: 'Balkonkraftwerke sind in Griechenland legal: Entscheidung 2026, bis 800 W, keine Netzeinspeisung, Meldung beim DEDDIE-Portal. Regeln und offene Fristen.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Käufer von Balkonkraftwerken und politische Beobachter in Griechenland, die die ministerielle Entscheidung zur Balkon-PV verfolgen',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Ja — Griechenland hat steckerfertige Balkonkraftwerke legalisiert. Eine Ministerialentscheidung vom 14. September 2026 (berichtet als Regierungsanzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026, schafft eine eigene Kategorie für Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, ausschließlich zur Eigenversorgung: Strom, der ins Netz gelangt, wird nicht vergütet.** Ein Anschlussvertrag, eine Genehmigung oder eine Anschlussgebühr sind nicht erforderlich, aber der Eigentümer muss den Netzbetreiber DEDDIE/HEDNO über ein digitales Portal informieren, das noch nicht geöffnet ist — die technischen Spezifikationen sind bis zum 31. Oktober 2026 fällig, der Starttermin des Portals bis zum 31. Dezember 2026. Der Konsultationsentwurf (offen bis 20. Juli 2026) nannte 900 W installierte Leistung; die griechische Presse berichtet als Endwert 1.000 W. Griechenland startet bei Solarenergie nicht bei null — nach Ministeriumszahlen kamen seit 2020 37.407 Eigenverbrauchsanlagen (1.070 MW) hinzu —, und das Einspeiseverbot reagiert auf ein Netz, das Solarerzeugung bereits an vielen Tagen drosselt. Dies ist eine Zusammenfassung veröffentlichter Berichterstattung, keine Rechtsberatung.',
    quickAnswerTop: {
      de: {
        question: 'Ist ein Balkonkraftwerk in Griechenland legal?',
        answer: 'Ja, unter Bedingungen. Eine Ministerialentscheidung vom 14. September 2026 — erlassen unter dem Gesetz 5299/2026 und berichtet als Regierungsanzeiger Β\' 5573 — schafft eine rechtliche Kategorie für steckerfertige Balkon-PV mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, nur zur Eigenversorgung (ins Netz eingespeiste Energie wird nicht vergütet). Ein Anschlussvertrag, eine Genehmigung oder eine Anschlussgebühr sind nicht nötig, aber Sie müssen DEDDIE/HEDNO über ein Portal informieren, dessen Starttermin noch bekannt gegeben wird (fällig bis 31. Dezember 2026). Der bis 20. Juli 2026 konsultierte Entwurf nannte 900 W installiert; als Endwert wird 1.000 W berichtet.',
        bullets: [
          'Das Gesetz 5299/2026 (Regierungsanzeiger Α\'/67/05.05.2026) ist das ermächtigende Gesetz zu erneuerbaren Energien; die Balkonregeln stehen in einer Ministerialentscheidung vom 14. September 2026, berichtet als Anzeiger Β\' 5573',
          'Grenzen: bis zu 800 W Erzeugungsleistung und 1.000 W installierte Leistung pro Anschlusspunkt — der Konsultationsentwurf nannte 900 W installiert',
          'Nur Eigenversorgung: ins Netz eingespeiste Energie wird nicht vergütet; eigenständige Batteriespeicher sind ebenfalls erlaubt, ohne Einspeisung',
          'Kein Anschlussvertrag, keine Genehmigung, keine Anschlussgebühr; der Eigentümer meldet über ein digitales Portal von DEDDIE/HEDNO (Taxisnet-Login), und ein Installateur oder Ingenieur erklärt die Konformität',
          'Noch offen: technische Spezifikationen bis 31. Oktober 2026, Starttermin des Portals bis 31. Dezember 2026 anzukündigen, und Netzbetreiber können neue Anschlüsse in Gebieten mit begrenzter Netzkapazität untersagen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Das Gesetz, die Ministerialentscheidung und der Entwurf', anchor: '#law-vs-md' },
      { label: 'Griechenland startet nicht bei null', anchor: '#not-from-zero' },
      { label: 'Warum Zero-Feed-in — und warum jetzt', anchor: '#why-zero-feed-in' },
      { label: 'Registrierung: Portal, Erklärungen und Fristen', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Griechenland hat steckerfertige Balkonkraftwerke mit einer Ministerialentscheidung vom 14. September 2026 legalisiert (berichtet als Regierungsanzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026 (Α\'/67/05.05.2026); laut pv magazine trat sie mit der Veröffentlichung in Kraft.',
          'Grenzen laut griechischer Presse: bis zu 800 W Erzeugungsleistung und 1.000 W installierte Leistung pro Anschlusspunkt, mehrere Sets lassen sich also nicht an einem Anschluss addieren. Der Konsultationsentwurf im Juli nannte 900 W installiert.',
          'Nur Eigenversorgung: Energie, die ins Netz gelangt, wird nicht bezahlt. Eigenständige Batteriespeicher ohne Module sind ebenfalls erlaubt, wiederum ohne Einspeisung.',
          'Die Registrierung ist eine Meldung, keine Genehmigung: kein Anschlussvertrag und keine Anschlussgebühr. Der Eigentümer meldet die Anlage über ein digitales Portal von DEDDIE/HEDNO, und ein Installateur oder Ingenieur erklärt die Konformität.',
          'Die Umsetzung ist noch nicht bereit: Die technischen Spezifikationen sind bis 31. Oktober 2026 fällig, der Starttermin des Portals bis 31. Dezember 2026. Insider.gr berichtet, dass früher installierte Anlagen innerhalb von 30 Tagen nach dem Start gemeldet werden müssen.',
          'Netzbetreiber können neue Steckeranlagen in Gebieten mit begrenzter Netzkapazität einschränken. Diese Seite fasst veröffentlichte Berichterstattung zusammen, nicht den Text des Anzeigers — sie ist keine Rechtsberatung.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'Das Gesetz, die Ministerialentscheidung und was sich gegenüber dem Entwurf geändert hat',
        content: [
          '**Das Gesetz 5299/2026 ist das breit angelegte Gesetz zu erneuerbaren Energien (Regierungsanzeiger Α\'/67/05.05.2026, veröffentlicht am 5. Mai 2026); die Regeln für Balkonkraftwerke legt eine separate Ministerialentscheidung vom 14. September 2026 fest, berichtet als Anzeiger Β\' 5573, die laut Anzeigerindex auch die Entscheidung von 2024 zur Eigenversorgung ersetzt.** Das Gesetz selbst enthält keine balkonspezifischen Leistungsgrenzen oder Registrierungsschritte.',
          '**Die Entscheidung ist vom Entwurf zu veröffentlichten Regeln geworden: Die öffentliche Konsultation endete am 20. Juli 2026, und griechische Medien berichteten ab dem 15. September 2026 über den endgültigen Text.** Die wichtigste berichtete Änderung betrifft die installierte Leistung: Der Entwurf nannte 800 W Einspeisung und 900 W installierte Leistung, während Insider.gr und Protothema 800 W Erzeugungsleistung und 1.000 W installierte Leistung pro Anschlusspunkt melden. Das Prinzip ohne Einspeisung blieb bestehen. Das „Digital Gateway" über TAXISnet und die zweijährlich zu erneuernde Verantwortungserklärung aus dem Entwurf tauchen in der Berichterstattung zum endgültigen Text nicht auf, weshalb diese Seite sie nicht mehr nennt.',
        ],
        callouts: [
          { type: 'warning', text: 'Diese Seite fasst veröffentlichte Berichterstattung zur Entscheidung zusammen (pv magazine, Insider.gr und Protothema, 15. September 2026), nicht den Text des Regierungsanzeigers selbst, und die Presseberichte weichen bei einigen Details wie Smart-Meter-Anforderungen voneinander ab. Prüfen Sie den Regierungsanzeiger Β\' 5573/14.09.2026 und die Mitteilungen von DEDDIE/HEDNO vor Kauf oder Installation. Dies ist keine Rechtsberatung.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Griechenland startet nicht bei null',
        content: [
          '**Griechenland startet bei Solarenergie nicht bei null: Ministeriumszahlen, die griechische und Fachmedien zitieren, nennen 37.407 Eigenverbrauchsanlagen für erneuerbare Energien mit zusammen 1.070 MW, die seit 2020 hinzukamen, gegenüber 1.772 Anlagen (36 MW) in den Jahren 2015–2019.** Der Großteil dieses Bestands sind größere Dachanlagen zur Eigenversorgung, keine Steckergeräte.',
          'Was die Entscheidung von 2026 ergänzt, ist eine eigene Kategorie für kleine, vom Verbraucher selbst installierte Steckergeräte, für die frühere Eigenversorgungsregeln nicht geschrieben wurden: Die griechische Berichterstattung beschreibt die Plug-in-Kategorie als erstmals geschaffen.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Warum Zero-Feed-in — und warum jetzt',
        content: [
          '**Griechenlands Netz drosselt die Solarerzeugung bereits an vielen Tagen stundenweise — das ist der Kontext für das Design ohne Einspeisung.** Griechische und Fachmedien beschreiben ein Überangebot zu den solaren Spitzenzeiten; einspeisefähige Balkon-PV würde dieses verstärken, statt ein neues Problem zu lösen. Deshalb erlaubt die Entscheidung nur Eigenversorgung und nicht die Modelle mit erlaubter Einspeisung, die anderswo in der EU gelten.',
          '**Branchenexperten haben die breitere Ausweitung vor der Entscheidung kritisiert.** Im April 2026 berichtete Keep Talking Greece, dass der Präsident des Verbands der Photovoltaik-Energieerzeuger gewarnt habe, unbeschränkte PV auf jedem Haus und Balkon könne das Netz an den Rand des Kollapses bringen, und dass manche Stimmen Batteriespeicher auf Balkonen gegenüber mehr netzeinspeisenden Modulen bevorzugten. Nach der Veröffentlichung erklärte Helapco, der Verband der PV-Unternehmen, der Rahmen greife die meisten Vorschläge des Marktes auf (pv magazine).',
          'Das Ministerium für Umwelt und Energie rahmt den Vorstoß als Energiezugang — mehr Verbraucher gewinnen Kontrolle über ihren Verbrauch, niedrigere Rechnungen und mehr Energieunabhängigkeit —, und der Minister nannte eine mögliche Senkung der Stromkosten um 20–30 % (Protothema). Das ist die erklärte Begründung des Ministeriums, keine Einschätzung dieser Seite, ob der Rahmen sie erreicht.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registrierung: Portal, Erklärungen und Fristen',
        content: [
          '**Die Registrierung ist eine Meldung, keine Genehmigung: kein Anschlussvertrag mit DEDDIE/HEDNO, keine sonstige Genehmigung und keine Anschlussgebühr (für reguläre Eigenversorgungsanschlüsse fallen laut Protothema 370 € an).** Beim Kauf nennt der Käufer dem Lieferanten oder Installateur die Nummer des Anschlusspunkts, der DEDDIE/HEDNO informiert. Vor der Installation meldet sich der Eigentümer mit Taxisnet-Zugangsdaten an einem digitalen Portal von DEDDIE an und gibt Lieferant, Anschlusspunkt, Adresse, Anlagendaten und Angaben zum Installateur oder Ingenieur ein; eine gültige Installateurserklärung ist erforderlich, und der Installateur oder Ingenieur erklärt, dass die Vorgaben für Installation, Anschluss und Betrieb erfüllt sind.',
          '**Das Portal existiert noch nicht.** Die technischen Spezifikationen sind bis 31. Oktober 2026 fällig (DEDDIE mit ELOT), der Starttermin des Portals muss bis 31. Dezember 2026 angekündigt werden, und Insider.gr berichtet, dass vor dem Start installierte Anlagen innerhalb von 30 Tagen danach gemeldet werden müssen. Nach der Meldung installiert DEDDIE Telemetrie zur Erfassung der Versorgungsdaten, Stichproben sind geplant (Protothema); pv magazine ergänzt, Steckeranlagen müssten zusammen mit Smart Metern installiert werden, was die geprüfte griechische Berichterstattung nicht erwähnt — bitte bestätigen. Netzbetreiber können neue Steckeranschlüsse in Gebieten mit begrenzter Netzkapazität zudem untersagen.',
          '**Eigenständige Batteriespeicher sind eine separate Kategorie:** Batterien ohne PV-Anlage sind für Privatpersonen und Unternehmen ohne Netzeinspeisung erlaubt, technisch durch einen Richtungssensor und Telemetrie durchgesetzt (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein Balkonkraftwerk in Griechenland legal?', a: 'Ja, unter Bedingungen. Eine Ministerialentscheidung vom 14. September 2026, erlassen unter dem Gesetz 5299/2026 und berichtet als Regierungsanzeiger Β\' 5573, schafft eine rechtliche Kategorie für steckerfertige Balkon-PV mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, nur zur Eigenversorgung. Das Meldeportal hat noch keinen Starttermin, prüfen Sie daher vor der Installation bei DEDDIE/HEDNO.' },
          { q: 'Warum konzipiert Griechenland Balkon-PV als „Zero-Feed-in" statt wie Deutschland oder Frankreich eine Einspeisung zuzulassen?', a: 'Weil Griechenlands Netz die bestehende Solarerzeugung wegen Überangebots bereits an vielen Tagen stundenweise drosselt. Einspeisefähige Balkon-PV in ein bereits drosselndes Netz zu bringen, würde ein reales, aktuelles Problem verschärfen, und Branchenvertreter haben vor einer Netzbelastung durch unbeschränkte zusätzliche PV gewarnt.' },
          { q: 'Wie groß darf ein Steckergerät in Griechenland sein?', a: 'Die griechische Presse berichtet ein Maximum von 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Stromanschlusspunkt, mehrere Sets lassen sich also nicht an einem Anschluss addieren. Der Konsultationsentwurf nannte 900 W installierte Leistung; bestätigen Sie die genauen Grenzen im Text des Regierungsanzeigers.' },
          { q: 'Wie melde ich ein Balkonkraftwerk in Griechenland an?', a: 'Es ist eine Meldung, keine Genehmigung: kein Anschlussvertrag, keine Genehmigung, keine Anschlussgebühr. Sie nennen dem Lieferanten oder Installateur die Nummer des Anschlusspunkts und melden die Anlage dann über ein digitales Portal von DEDDIE/HEDNO (Taxisnet-Login) zusammen mit einer Erklärung des Installateurs oder Ingenieurs. Das Portal ist noch nicht geöffnet.' },
          { q: 'Kann ich überschüssigen Balkon-Solarstrom in Griechenland ins Netz einspeisen?', a: 'Nein. Steckeranlagen sind nur zur Eigenversorgung gedacht, und Energie, die ins Netz gelangt, wird nicht vergütet. Eigenständige Batteriespeicher folgen derselben Regel ohne Einspeisung.' },
          { q: 'Wann kann ich mich tatsächlich registrieren?', a: 'Noch nicht. Die technischen Spezifikationen sind bis 31. Oktober 2026 fällig, und DEDDIE muss den Starttermin des Portals bis 31. Dezember 2026 bekannt geben. Insider.gr berichtet, dass früher installierte Anlagen innerhalb von 30 Tagen nach dem Start des Portals gemeldet werden müssen.' },
          { q: 'Kann ich in Griechenland eine Batterie zu einem Balkonsystem hinzufügen?', a: 'Eigenständige Batterien ohne PV-Anlage sind jetzt erlaubt, ohne Einspeisung, und Eigenversorgungsanlagen dürfen Batterien unter technischen Auflagen ergänzen (pv magazine, Protothema). Auf den Inseln dürfen zusammen mit PV installierte Batterien keinen Strom ins Netz einspeisen.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'Veröffentlichung des Eigenversorgungsrahmens, 800-W-Grenze, Verbot der Einspeisung, Bestimmungen zu Netzbetreibern und Batterien (15. September 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'Balkon-PV ohne Genehmigungen und Anschlussgebühr — Insider.gr', description: 'Grenzen von 800 W und 1.000 W pro Anschlusspunkt, DEDDIE-Portal, Fristen, keine Vergütung für eingespeiste Energie (griechisch)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'Wie man Balkon-PV installiert — Protothema', description: 'Registrierungsschritte, Fristen 31. Oktober und 31. Dezember, reguläre Anschlussgebühr von 370 €, Batterien (griechisch)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'Berichterstattung zur Konsultationsphase des Entwurfs, mit über 37.400 Eigenverbrauchsanlagen seit 2020 (22. Juli 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'Photovoltaik auf Balkonen: Experten haben Vorbehalte — Keep Talking Greece', description: 'Kontext zur Netzdrosselung und Warnungen der Branche (29. April 2026)' },
          { url: 'https://www.et.gr/', title: 'Regierungsanzeiger — Nationale Druckerei', description: 'Offizielle Quelle für den Anzeiger Β\' 5573/14.09.2026 und das Gesetz 5299/2026 (Α\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt](/de/balcony-solar/eu-800w-balcony-solar-standard-2027) — der länderübergreifende EU-Konvergenzkontext, in den sich der Mechanismus dieser Seite einordnet',
          '[Ist ein Balkonkraftwerk legal? Ein Länderleitfaden](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechts-Tracker',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Grecia? Informe de estado 2027',
    seoTitle: '¿Es legal la energía solar de balcón en Grecia? Informe de estado 2027',
    intro: 'Grecia ha legalizado la energía solar de balcón enchufable: una decisión ministerial del 14 de septiembre de 2026 crea una categoría específica para sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, estrictamente para autoconsumo. El diseño sin exportación no es prudencia porque sí: la red de Grecia ya restringe la producción solar existente muchos días, y voces del sector han advertido de que una energía solar de balcón sin restricciones podría tensionarla. Lo que sigue pendiente es la puesta en práctica: las especificaciones técnicas vencen el 31 de octubre de 2026 y el portal de notificación de DEDDIE/HEDNO aún no tiene fecha de inicio.',
    metaDescription: 'La energía solar de balcón es legal en Grecia (decisión de 2026): hasta 800 W, sin exportar a la red y aviso en el portal de DEDDIE. Reglas y plazos.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón y observadores de políticas en Grecia que siguen la decisión ministerial sobre energía solar de balcón',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Sí — Grecia ha legalizado la energía solar de balcón enchufable. Una decisión ministerial del 14 de septiembre de 2026 (publicada según la prensa como Boletín Oficial Β\' 5573), emitida en virtud de la Ley 5299/2026, crea una categoría específica de sistemas enchufables con hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, estrictamente para autoconsumo: la energía que llega a la red no se compensa.** No se exige contrato de conexión, permiso ni tasa de conexión, pero el propietario debe notificar al operador de red DEDDIE/HEDNO mediante un portal digital que aún no está abierto — las especificaciones técnicas vencen el 31 de octubre de 2026 y la fecha de inicio del portal, el 31 de diciembre de 2026. El borrador sometido a consulta (abierta hasta el 20 de julio de 2026) hablaba de 900 W instalados; la prensa griega da como cifra final 1.000 W. Grecia no parte de cero en energía solar — según cifras del ministerio se añadieron 37.407 sistemas de autoconsumo (1.070 MW) desde 2020 — y el diseño sin exportación responde a una red que ya restringe la producción solar muchos días. Este es un resumen de la cobertura publicada, no asesoramiento jurídico.',
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Grecia?',
        answer: 'Sí, con condiciones. Una decisión ministerial del 14 de septiembre de 2026 — emitida en virtud de la Ley 5299/2026 e informada como Boletín Oficial Β\' 5573 — crea una categoría legal para la energía solar de balcón enchufable de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, solo para autoconsumo (la energía inyectada a la red no se compensa). No se exige contrato de conexión, permiso ni tasa de conexión, pero debes notificar a DEDDIE/HEDNO mediante un portal cuya fecha de inicio aún se anunciará (antes del 31 de diciembre de 2026). El borrador en consulta hasta el 20 de julio de 2026 decía 900 W instalados; la cifra final informada es 1.000 W.',
        bullets: [
          'La Ley 5299/2026 (Boletín Oficial Α\'/67/05.05.2026) es la ley habilitante de energías renovables; las normas de balcón figuran en una decisión ministerial del 14 de septiembre de 2026, informada como Boletín Β\' 5573',
          'Límites: hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro — el borrador decía 900 W instalados',
          'Solo autoconsumo: la energía inyectada a la red no se compensa; también se permiten baterías independientes, sin exportación',
          'Sin contrato de conexión, permiso ni tasa; el propietario notifica a DEDDIE/HEDNO mediante un portal digital (acceso Taxisnet) y un instalador o ingeniero declara el cumplimiento',
          'Aún pendiente: especificaciones técnicas antes del 31 de octubre de 2026, fecha de inicio del portal por anunciar antes del 31 de diciembre de 2026, y los operadores pueden denegar nuevas conexiones en zonas con capacidad de red limitada',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'La ley, la decisión ministerial y el borrador', anchor: '#law-vs-md' },
      { label: 'Grecia no parte de cero', anchor: '#not-from-zero' },
      { label: 'Por qué cero inyección — y por qué ahora', anchor: '#why-zero-feed-in' },
      { label: 'Registro: portal, declaraciones y plazos', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Grecia legalizó la energía solar de balcón enchufable con una decisión ministerial del 14 de septiembre de 2026 (informada como Boletín Oficial Β\' 5573), emitida en virtud de la Ley 5299/2026 (Α\'/67/05.05.2026); según pv magazine, entró en vigor con su publicación.',
          'Límites según la prensa griega: hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, de modo que no se pueden sumar varios kits en un mismo suministro. El borrador de julio decía 900 W instalados.',
          'Solo autoconsumo: la energía que llega a la red no se paga. También se permiten baterías independientes sin paneles, de nuevo sin exportación.',
          'El registro es una notificación, no un permiso: sin contrato de conexión ni tasa de conexión. El propietario declara el sistema en un portal digital de DEDDIE/HEDNO y un instalador o ingeniero declara el cumplimiento.',
          'La infraestructura aún no está lista: las especificaciones técnicas vencen el 31 de octubre de 2026 y la fecha de inicio del portal, el 31 de diciembre de 2026. Insider.gr informa de que los sistemas instalados antes deben declararse en los 30 días siguientes al lanzamiento.',
          'Los operadores pueden restringir nuevas conexiones enchufables en zonas con capacidad de red limitada. Esta página resume cobertura publicada, no el texto del Boletín — no es asesoramiento jurídico.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'La ley, la decisión ministerial y lo que cambió respecto al borrador',
        content: [
          '**La Ley 5299/2026 es la ley general de energías renovables (Boletín Oficial Α\'/67/05.05.2026, publicada el 5 de mayo de 2026); las normas de la energía solar de balcón las fija una decisión ministerial independiente del 14 de septiembre de 2026, informada como Boletín Β\' 5573, que según el índice del boletín también sustituye a la decisión de 2024 sobre autoconsumo.** La ley en sí no contiene límites de potencia ni pasos de registro específicos para balcón.',
          '**La decisión pasó de borrador a normas publicadas: la consulta pública terminó el 20 de julio de 2026 y los medios griegos informaron del texto final desde el 15 de septiembre de 2026.** El cambio principal informado es el límite de potencia instalada: el borrador decía 800 W de inyección y 900 W de capacidad instalada, mientras que Insider.gr y Protothema informan de 800 W de generación y 1.000 W de potencia instalada por punto de suministro. El principio de no exportación se mantuvo. La «Puerta de enlace digital» de TAXISnet y la declaración de responsabilidad renovada cada dos años del borrador no aparecen en la cobertura del texto final, por lo que esta página ya no las menciona.',
        ],
        callouts: [
          { type: 'warning', text: 'Esta página resume la cobertura publicada de la decisión (pv magazine, Insider.gr y Protothema, 15 de septiembre de 2026), no el texto del Boletín en sí, y los medios difieren en algunos detalles, como los requisitos de contador inteligente. Consulta el Boletín Oficial Β\' 5573/14.09.2026 y los avisos de DEDDIE/HEDNO antes de comprar o instalar. No es asesoramiento jurídico.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Grecia no parte de cero',
        content: [
          '**Grecia no parte de cero en energía solar: cifras del ministerio citadas por la prensa griega y especializada indican que desde 2020 se añadieron 37.407 sistemas renovables de autoconsumo con 1.070 MW en total, frente a 1.772 sistemas (36 MW) en 2015–2019.** La mayor parte de esa base son instalaciones de autoconsumo en tejados de mayor tamaño, no kits enchufables.',
          'Lo que añade la decisión de 2026 es una categoría específica para kits enchufables pequeños, instalados por el consumidor, para los que no se redactaron las normas de autoconsumo anteriores: la prensa griega describe la categoría enchufable como establecida por primera vez.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Por qué cero inyección — y por qué ahora',
        content: [
          '**La red de Grecia ya restringe la producción solar durante horas muchos días, y ese es el contexto del diseño sin exportación.** La prensa griega y especializada describe un exceso de oferta en las horas punta solares; una energía solar de balcón con capacidad de exportar agravaría ese problema en lugar de resolver uno nuevo, por lo que la decisión permite solo autoconsumo en vez de los modelos con exportación permitida que se usan en otros países de la UE.',
          '**Expertos del sector criticaron la expansión más amplia antes de la decisión.** En abril de 2026, Keep Talking Greece informó de que el presidente de la Asociación de Productores de Energía Fotovoltaica advirtió de que una energía fotovoltaica sin restricciones en cada casa y balcón podría empujar la red hacia el colapso, y de que algunas voces preferían baterías en los balcones a más paneles que inyecten a la red. Tras la publicación, Helapco, la asociación de empresas fotovoltaicas, dijo que el marco recoge la mayoría de las propuestas del mercado (pv magazine).',
          'El Ministerio de Medio Ambiente y Energía presenta el impulso como acceso a la energía — más consumidores con control sobre su consumo, facturas más bajas y mayor independencia energética — y el ministro citó una posible reducción del 20–30 % en el coste de la electricidad (Protothema). Esa es la justificación declarada del ministerio, no una valoración de esta página sobre si el marco la logra.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: portal, declaraciones y plazos',
        content: [
          '**El registro es una notificación, no un permiso: sin contrato de conexión con DEDDIE/HEDNO, sin otra aprobación y sin tasa de conexión (las conexiones de autoconsumo estándar tienen una tasa de €370, según Protothema).** Al comprar, el comprador indica el número del punto de suministro al proveedor o instalador, que informa a DEDDIE/HEDNO. Antes de instalar, el propietario accede con sus credenciales de Taxisnet a un portal digital de DEDDIE e introduce proveedor, punto de suministro, dirección, datos del sistema y datos del instalador o ingeniero; se exige una declaración válida del instalador, y el instalador o ingeniero declara que se cumplen las especificaciones de instalación, conexión y funcionamiento.',
          '**El portal todavía no existe.** Las especificaciones técnicas vencen el 31 de octubre de 2026 (DEDDIE con ELOT), la fecha de inicio del portal debe anunciarse antes del 31 de diciembre de 2026, e Insider.gr informa de que los sistemas instalados antes del lanzamiento deben declararse en los 30 días siguientes. Tras la notificación, DEDDIE instalará telemetría para registrar los datos de suministro y se prevén controles aleatorios (Protothema); pv magazine añade que los sistemas enchufables deben instalarse junto con contadores inteligentes, algo que la cobertura griega revisada no menciona, así que conviene confirmarlo. Los operadores también pueden denegar nuevas conexiones enchufables en zonas con capacidad de red limitada.',
          '**Las baterías independientes son una categoría aparte:** las baterías sin sistema fotovoltaico se permiten a particulares y empresas sin exportación a la red, garantizada técnicamente por un sensor de dirección y telemetría (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es legal la energía solar de balcón en Grecia?', a: 'Sí, con condiciones. Una decisión ministerial del 14 de septiembre de 2026, emitida en virtud de la Ley 5299/2026 e informada como Boletín Oficial Β\' 5573, crea una categoría legal para la energía solar de balcón enchufable de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, solo para autoconsumo. El portal de notificación aún no tiene fecha de inicio, así que consulta a DEDDIE/HEDNO antes de instalar.' },
          { q: '¿Por qué diseña Grecia la energía solar de balcón como «cero inyección» en lugar de permitir la exportación como Alemania o Francia?', a: 'Porque la red de Grecia ya restringe la producción solar existente durante horas muchos días por exceso de oferta. Añadir energía solar de balcón con capacidad de exportar a una red que ya restringe empeoraría un problema real y actual, y voces del sector han advertido de tensión en la red por más energía fotovoltaica sin restricciones.' },
          { q: '¿Qué tamaño puede tener un sistema enchufable en Grecia?', a: 'La prensa griega informa de un máximo de 800 W de generación y 1.000 W de potencia instalada por punto de suministro eléctrico, de modo que no se pueden sumar varios kits en un mismo suministro. El borrador decía 900 W instalados; confirma los límites exactos en el texto del Boletín.' },
          { q: '¿Cómo registro un sistema solar de balcón en Grecia?', a: 'Es una notificación, no un permiso: sin contrato de conexión, permiso ni tasa de conexión. Indicas el número del punto de suministro al proveedor o instalador y luego declaras el sistema en un portal digital de DEDDIE/HEDNO (acceso Taxisnet) junto con una declaración del instalador o ingeniero. El portal aún no está abierto.' },
          { q: '¿Puedo exportar a la red el excedente de energía solar de balcón en Grecia?', a: 'No. Los sistemas enchufables están pensados solo para autoconsumo, y la energía que llega a la red no se compensa. Las baterías independientes siguen la misma regla sin exportación.' },
          { q: '¿Cuándo puedo registrarme realmente?', a: 'Todavía no. Las especificaciones técnicas vencen el 31 de octubre de 2026 y DEDDIE debe anunciar la fecha de inicio del portal antes del 31 de diciembre de 2026. Insider.gr informa de que los sistemas instalados antes deben declararse en los 30 días siguientes al lanzamiento del portal.' },
          { q: '¿Puedo añadir una batería a un sistema de balcón en Grecia?', a: 'Ahora se permiten baterías independientes sin sistema fotovoltaico, sin exportación, y los sistemas de autoconsumo pueden añadir baterías sujetas a requisitos técnicos (pv magazine, Protothema). En las islas, las baterías instaladas con fotovoltaica no pueden inyectar electricidad a la red.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'Publicación del marco de autoconsumo, límite de 800 W, regla de no exportación, disposiciones sobre operadores y baterías (15 de septiembre de 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'Fotovoltaica de balcón sin permisos ni tasa de conexión — Insider.gr', description: 'Límites de 800 W y 1.000 W por punto de suministro, portal de DEDDIE, plazos, sin compensación por energía inyectada (en griego)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'Cómo instalar fotovoltaica de balcón — Protothema', description: 'Pasos de registro, plazos del 31 de octubre y 31 de diciembre, tasa de conexión estándar de €370, baterías (en griego)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'Cobertura del borrador en fase de consulta, con más de 37.400 sistemas de autoconsumo desde 2020 (22 de julio de 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'Fotovoltaica en balcones: los expertos tienen reservas — Keep Talking Greece', description: 'Contexto de restricción de la red y advertencias del sector (29 de abril de 2026)' },
          { url: 'https://www.et.gr/', title: 'Boletín Oficial — Imprenta Nacional', description: 'Fuente oficial del Boletín Β\' 5573/14.09.2026 y de la Ley 5299/2026 (Α\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[El estándar de 800 W para energía solar de balcón: la armonización de la UE explicada](/es/balcony-solar/eu-800w-balcony-solar-standard-2027) — el contexto de convergencia transfronteriza de la UE en el que se inserta el mecanismo de esta página',
          '[¿Es legal la energía solar de balcón? Una guía país por país](/es/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-fr.webp',
    title: "Le solaire de balcon est-il légal en Grèce ? Rapport de situation 2027",
    seoTitle: "Le solaire de balcon est-il légal en Grèce ? Rapport de situation 2027",
    intro: 'La Grèce a légalisé le solaire de balcon enfichable : une décision ministérielle du 14 septembre 2026 crée une catégorie dédiée aux systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, strictement pour l\'autoconsommation. L\'absence d\'export n\'est pas de la prudence pour elle-même : le réseau grec écrête déjà la production solaire existante de nombreux jours, et des acteurs du secteur ont averti qu\'un solaire de balcon sans restriction pourrait le fragiliser. Reste à mettre en place la mécanique pratique : les spécifications techniques sont attendues d\'ici le 31 octobre 2026, et le portail de déclaration de DEDDIE/HEDNO n\'a pas encore de date d\'ouverture.',
    metaDescription: 'Le solaire de balcon est légal en Grèce (décision de 2026) : jusqu\'à 800 W, sans injection réseau, déclaration sur le portail DEDDIE. Règles et échéances.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon et observateurs des politiques publiques en Grèce suivant la décision ministérielle sur le solaire de balcon",
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Oui — la Grèce a légalisé le solaire de balcon enfichable. Une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026, crée une catégorie dédiée de systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, strictement pour l\'autoconsommation : l\'énergie qui atteint le réseau n\'est pas rémunérée.** Aucun contrat de raccordement, permis ni frais de raccordement n\'est exigé, mais le propriétaire doit informer le gestionnaire de réseau DEDDIE/HEDNO via un portail numérique qui n\'est pas encore ouvert — les spécifications techniques sont attendues d\'ici le 31 octobre 2026 et la date d\'ouverture du portail d\'ici le 31 décembre 2026. Le projet soumis à consultation (ouverte jusqu\'au 20 juillet 2026) mentionnait 900 W installés ; la presse grecque rapporte 1 000 W comme chiffre final. La Grèce ne part pas de zéro en solaire — selon les chiffres du ministère, 37 407 systèmes d\'autoconsommation (1 070 MW) ont été ajoutés depuis 2020 — et l\'absence d\'export répond à un réseau qui écrête déjà la production solaire de nombreux jours. Ceci est un résumé de la couverture publiée, pas un conseil juridique.',
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal en Grèce ?',
        answer: 'Oui, sous conditions. Une décision ministérielle du 14 septembre 2026 — prise en vertu de la loi 5299/2026 et rapportée comme Journal officiel Β\' 5573 — crée une catégorie légale pour le solaire de balcon enfichable jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, pour l\'autoconsommation uniquement (l\'énergie injectée dans le réseau n\'est pas rémunérée). Aucun contrat de raccordement, permis ni frais de raccordement n\'est exigé, mais vous devez informer DEDDIE/HEDNO via un portail dont la date d\'ouverture reste à annoncer (d\'ici le 31 décembre 2026). Le projet consulté jusqu\'au 20 juillet 2026 indiquait 900 W installés ; le chiffre final rapporté est 1 000 W.',
        bullets: [
          'La loi 5299/2026 (Journal officiel Α\'/67/05.05.2026) est la loi-cadre sur les énergies renouvelables ; les règles du balcon figurent dans une décision ministérielle du 14 septembre 2026, rapportée comme Journal officiel Β\' 5573',
          'Limites : jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison — le projet de consultation indiquait 900 W installés',
          'Autoconsommation uniquement : l\'énergie injectée dans le réseau n\'est pas rémunérée ; les batteries autonomes sont aussi autorisées, sans export',
          'Pas de contrat de raccordement, de permis ni de frais ; le propriétaire déclare via un portail numérique de DEDDIE/HEDNO (connexion Taxisnet) et un installateur ou ingénieur atteste la conformité',
          'Encore en attente : spécifications techniques d\'ici le 31 octobre 2026, date d\'ouverture du portail à annoncer d\'ici le 31 décembre 2026, et les gestionnaires peuvent interdire de nouveaux raccordements dans les zones à capacité réseau limitée',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'La loi, la décision ministérielle et le projet', anchor: '#law-vs-md' },
      { label: 'La Grèce ne part pas de zéro', anchor: '#not-from-zero' },
      { label: 'Pourquoi zéro injection — et pourquoi maintenant', anchor: '#why-zero-feed-in' },
      { label: 'Déclaration : portail, attestations et échéances', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La Grèce a légalisé le solaire de balcon enfichable par une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026 (Α\'/67/05.05.2026) ; selon pv magazine, elle est entrée en vigueur dès sa publication.',
          'Limites selon la presse grecque : jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, on ne peut donc pas cumuler plusieurs kits sur un même raccordement. Le projet de juillet indiquait 900 W installés.',
          'Autoconsommation uniquement : toute énergie qui atteint le réseau n\'est pas payée. Les batteries autonomes sans panneaux sont aussi autorisées, toujours sans export.',
          'La déclaration est une notification, pas un permis : ni contrat de raccordement ni frais de raccordement. Le propriétaire déclare le système via un portail numérique de DEDDIE/HEDNO, et un installateur ou ingénieur atteste la conformité.',
          'La mécanique n\'est pas prête : les spécifications techniques sont attendues d\'ici le 31 octobre 2026 et la date d\'ouverture du portail d\'ici le 31 décembre 2026. Insider.gr rapporte que les systèmes installés avant doivent être déclarés dans les 30 jours suivant l\'ouverture.',
          'Les gestionnaires peuvent restreindre les nouveaux raccordements enfichables dans les zones à capacité réseau limitée. Cette page résume la couverture publiée, non le texte du Journal officiel — ce n\'est pas un conseil juridique.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'La loi, la décision ministérielle et ce qui a changé depuis le projet',
        content: [
          '**La loi 5299/2026 est la loi générale sur les énergies renouvelables (Journal officiel Α\'/67/05.05.2026, publiée le 5 mai 2026) ; les règles du solaire de balcon sont fixées par une décision ministérielle distincte du 14 septembre 2026, rapportée comme Journal officiel Β\' 5573, qui remplace aussi, d\'après l\'index du journal officiel, la décision de 2024 sur l\'autoconsommation.** La loi elle-même ne contient ni plafonds de puissance ni démarches de déclaration propres au balcon.',
          '**La décision est passée de projet à règles publiées : la consultation publique s\'est terminée le 20 juillet 2026, et les médias grecs ont rapporté le texte final à partir du 15 septembre 2026.** Le principal changement rapporté concerne la puissance installée : le projet indiquait 800 W d\'injection et 900 W de capacité installée, tandis qu\'Insider.gr et Protothema rapportent 800 W de production et 1 000 W de puissance installée par point de livraison. Le principe d\'absence d\'export a été maintenu. La « passerelle numérique » TAXISnet et la déclaration de responsabilité renouvelée tous les deux ans du projet n\'apparaissent pas dans la couverture du texte final, c\'est pourquoi cette page ne les mentionne plus.',
        ],
        callouts: [
          { type: 'warning', text: 'Cette page résume la couverture publiée de la décision (pv magazine, Insider.gr et Protothema, 15 septembre 2026), non le texte du Journal officiel lui-même, et les articles de presse divergent sur certains détails comme l\'exigence de compteur intelligent. Consultez le Journal officiel Β\' 5573/14.09.2026 et les annonces de DEDDIE/HEDNO avant d\'acheter ou d\'installer. Ce n\'est pas un conseil juridique.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'La Grèce ne part pas de zéro',
        content: [
          '**La Grèce ne part pas de zéro en solaire : des chiffres du ministère cités par la presse grecque et spécialisée indiquent que 37 407 systèmes renouvelables d\'autoconsommation, totalisant 1 070 MW, ont été ajoutés depuis 2020, contre 1 772 systèmes (36 MW) en 2015–2019.** L\'essentiel de ce parc est constitué d\'installations d\'autoconsommation en toiture plus grandes, non de kits enfichables.',
          'Ce que la décision de 2026 ajoute est une catégorie dédiée aux petits kits enfichables installés par le consommateur, pour lesquels les règles d\'autoconsommation antérieures n\'avaient pas été conçues : la presse grecque décrit la catégorie enfichable comme établie pour la première fois.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Pourquoi zéro injection — et pourquoi maintenant',
        content: [
          '**Le réseau grec écrête déjà la production solaire pendant plusieurs heures de nombreux jours, et c\'est le contexte de la conception sans export.** La presse grecque et spécialisée décrit un excédent d\'offre aux heures de pointe solaire ; un solaire de balcon capable d\'exporter l\'aggraverait au lieu de résoudre un nouveau problème, c\'est pourquoi la décision autorise uniquement l\'autoconsommation plutôt que les modèles avec export autorisé utilisés ailleurs dans l\'UE.',
          '**Des experts du secteur ont critiqué l\'expansion plus large avant la décision.** En avril 2026, Keep Talking Greece a rapporté que le président de l\'Association des producteurs d\'énergie photovoltaïque avait averti qu\'un photovoltaïque sans restriction sur chaque maison et chaque balcon pourrait pousser le réseau vers l\'effondrement, et que certaines voix préféraient des batteries sur les balcons à davantage de panneaux injectant dans le réseau. Après la publication, Helapco, l\'association des entreprises photovoltaïques, a déclaré que le cadre reprend la plupart des propositions du marché (pv magazine).',
          'Le ministère de l\'Environnement et de l\'Énergie présente l\'initiative comme un accès à l\'énergie — plus de consommateurs maîtrisant leur consommation, des factures plus basses et davantage d\'indépendance énergétique — et le ministre a évoqué une baisse possible de 20 à 30 % du coût de l\'électricité (Protothema). C\'est la justification affichée par le ministère, non l\'appréciation de cette page quant à l\'atteinte de cet objectif.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Déclaration : portail, attestations et échéances',
        content: [
          '**La déclaration est une notification, pas un permis : pas de contrat de raccordement avec DEDDIE/HEDNO, pas d\'autre autorisation et pas de frais de raccordement (les raccordements d\'autoconsommation standard sont soumis à des frais de 370 €, selon Protothema).** À l\'achat, l\'acheteur communique le numéro du point de livraison au fournisseur ou à l\'installateur, qui en informe DEDDIE/HEDNO. Avant l\'installation, le propriétaire se connecte avec ses identifiants Taxisnet à un portail numérique de DEDDIE et renseigne fournisseur, point de livraison, adresse, données du système et coordonnées de l\'installateur ou de l\'ingénieur ; une attestation valide de l\'installateur est exigée, et l\'installateur ou l\'ingénieur déclare que les spécifications d\'installation, de raccordement et de fonctionnement sont respectées.',
          '**Le portail n\'existe pas encore.** Les spécifications techniques sont attendues d\'ici le 31 octobre 2026 (DEDDIE avec ELOT), la date d\'ouverture du portail doit être annoncée d\'ici le 31 décembre 2026, et Insider.gr rapporte que les systèmes installés avant l\'ouverture doivent être déclarés dans les 30 jours qui suivent. Après la déclaration, DEDDIE installera une télémétrie pour enregistrer les données de consommation et des contrôles ponctuels sont prévus (Protothema) ; pv magazine ajoute que les systèmes enfichables doivent être installés avec des compteurs intelligents, ce que la couverture grecque examinée ne mentionne pas, à confirmer donc. Les gestionnaires peuvent en outre interdire de nouveaux raccordements enfichables dans les zones à capacité réseau limitée.',
          '**Les batteries autonomes forment une catégorie distincte :** les batteries sans système photovoltaïque sont autorisées pour les particuliers et les entreprises sans export réseau, imposé techniquement par un capteur de direction et une télémétrie (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: 'Le solaire de balcon est-il légal en Grèce ?', a: 'Oui, sous conditions. Une décision ministérielle du 14 septembre 2026, prise en vertu de la loi 5299/2026 et rapportée comme Journal officiel Β\' 5573, crée une catégorie légale pour le solaire de balcon enfichable jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, pour l\'autoconsommation uniquement. Le portail de déclaration n\'a pas encore de date d\'ouverture, renseignez-vous donc auprès de DEDDIE/HEDNO avant d\'installer.' },
          { q: 'Pourquoi la Grèce conçoit-elle le solaire de balcon en « zéro injection » au lieu d\'autoriser l\'export comme l\'Allemagne ou la France ?', a: 'Parce que le réseau grec écrête déjà la production solaire existante pendant plusieurs heures de nombreux jours en raison d\'un excédent d\'offre. Ajouter du solaire de balcon capable d\'exporter à un réseau qui écrête déjà aggraverait un problème réel et actuel, et des acteurs du secteur ont averti d\'une tension sur le réseau due à davantage de photovoltaïque sans restriction.' },
          { q: 'Quelle taille peut avoir un système enfichable en Grèce ?', a: 'La presse grecque rapporte un maximum de 800 W de production et 1 000 W de puissance installée par point de livraison électrique, on ne peut donc pas cumuler plusieurs kits sur un même raccordement. Le projet indiquait 900 W de capacité installée ; vérifiez les limites exactes dans le texte du Journal officiel.' },
          { q: 'Comment déclarer un système solaire de balcon en Grèce ?', a: 'C\'est une notification, pas un permis : pas de contrat de raccordement, de permis ni de frais de raccordement. Vous communiquez le numéro du point de livraison au fournisseur ou à l\'installateur, puis déclarez le système via un portail numérique de DEDDIE/HEDNO (connexion Taxisnet) avec une attestation de l\'installateur ou de l\'ingénieur. Le portail n\'est pas encore ouvert.' },
          { q: 'Puis-je exporter vers le réseau l\'excédent d\'électricité d\'un solaire de balcon en Grèce ?', a: 'Non. Les systèmes enfichables sont destinés uniquement à l\'autoconsommation, et l\'énergie qui atteint le réseau n\'est pas rémunérée. Les batteries autonomes suivent la même règle sans export.' },
          { q: 'Quand puis-je réellement me déclarer ?', a: 'Pas encore. Les spécifications techniques sont attendues d\'ici le 31 octobre 2026 et DEDDIE doit annoncer la date d\'ouverture du portail d\'ici le 31 décembre 2026. Insider.gr rapporte que les systèmes installés avant doivent être déclarés dans les 30 jours suivant le lancement du portail.' },
          { q: 'Puis-je ajouter une batterie à un système de balcon en Grèce ?', a: 'Les batteries autonomes sans système photovoltaïque sont désormais autorisées, sans export, et les systèmes d\'autoconsommation peuvent ajouter des batteries sous réserve d\'exigences techniques (pv magazine, Protothema). Sur les îles, les batteries installées avec du photovoltaïque ne peuvent pas injecter d\'électricité dans le réseau.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'Publication du cadre d\'autoconsommation, limite de 800 W, règle d\'absence d\'export, dispositions sur les gestionnaires et les batteries (15 septembre 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'Photovoltaïque de balcon sans permis ni frais de raccordement — Insider.gr', description: 'Limites de 800 W et 1 000 W par point de livraison, portail DEDDIE, échéances, pas de rémunération de l\'énergie injectée (en grec)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'Comment installer un photovoltaïque de balcon — Protothema', description: 'Étapes de déclaration, échéances du 31 octobre et du 31 décembre, frais de raccordement standard de 370 €, batteries (en grec)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'Couverture du projet au stade de la consultation, avec plus de 37 400 systèmes d\'autoconsommation depuis 2020 (22 juillet 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'Photovoltaïque sur les balcons : les experts émettent des réserves — Keep Talking Greece', description: 'Contexte d\'écrêtement du réseau et avertissements du secteur (29 avril 2026)' },
          { url: 'https://www.et.gr/', title: 'Journal officiel — Imprimerie nationale', description: 'Source officielle du Journal Β\' 5573/14.09.2026 et de la loi 5299/2026 (Α\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          "[La norme des 800 W pour le solaire de balcon : l'harmonisation européenne expliquée](/fr/balcony-solar/eu-800w-balcony-solar-standard-2027) — le contexte de convergence transfrontalière de l'UE dans lequel s'inscrit le mécanisme de cette page",
          "[Le solaire de balcon est-il légal ? Un guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial",
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟ تقرير الحالة لعام 2027',
    seoTitle: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟ تقرير الحالة لعام 2027',
    intro: 'أجازت اليونان الطاقة الشمسية القابلة للتوصيل على الشرفات: فقرار وزاري مؤرخ في 14 سبتمبر 2026 ينشئ فئة مستقلة للأنظمة القابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي حصرًا. وعدم التصدير ليس حذرًا لمجرد الحذر: فشبكة اليونان تقلّص بالفعل إنتاج الطاقة الشمسية القائم في أيام كثيرة، وحذّر ممثلو القطاع من أن الطاقة الشمسية على الشرفات دون قيود قد تُجهد الشبكة. أما ما لا يزال معلّقًا فهو الجانب العملي: المواصفات الفنية مستحقة بحلول 31 أكتوبر 2026، ولم يُحدَّد بعد موعد إطلاق بوابة الإخطار الخاصة بـ DEDDIE/HEDNO.',
    metaDescription: 'الطاقة الشمسية على الشرفات قانونية في اليونان بموجب قرار وزاري لعام 2026: أنظمة بحد أقصى 800 واط، دون تصدير إلى الشبكة، مع إخطار عبر بوابة DEDDIE.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات ومراقبو السياسات في اليونان الذين يتابعون القرار الوزاري الخاص بالطاقة الشمسية على الشرفات',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**نعم — أجازت اليونان الطاقة الشمسية القابلة للتوصيل على الشرفات. فقرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة الرسمية Β\' 5573)، صدر بموجب القانون 5299/2026، ينشئ فئة مستقلة للأنظمة القابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي حصرًا: فالطاقة التي تصل إلى الشبكة لا يُعوَّض عنها.** لا يُشترط عقد توصيل ولا ترخيص ولا رسم توصيل، لكن على المالك إخطار مشغّل الشبكة DEDDIE/HEDNO عبر بوابة رقمية لم تُفتح بعد — فالمواصفات الفنية مستحقة بحلول 31 أكتوبر 2026، وموعد إطلاق البوابة بحلول 31 ديسمبر 2026. وكان مشروع الاستشارة (المفتوحة حتى 20 يوليو 2026) يذكر 900 واط قدرة مركّبة؛ وتفيد الصحافة اليونانية بأن الرقم النهائي هو 1,000 واط. واليونان لا تبدأ من الصفر في الطاقة الشمسية — إذ تُظهر أرقام الوزارة إضافة 37,407 أنظمة للاستهلاك الذاتي (1,070 ميغاواط) منذ 2020 — وتصميم عدم التصدير يستجيب لشبكة تقلّص إنتاج الطاقة الشمسية أصلًا في أيام كثيرة. هذا ملخص للتغطية المنشورة وليس استشارة قانونية.',
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟',
        answer: 'نعم، بشروط. فقرار وزاري مؤرخ في 14 سبتمبر 2026 — صدر بموجب القانون 5299/2026 وأُفيد بأنه منشور في الجريدة الرسمية Β\' 5573 — ينشئ فئة قانونية للطاقة الشمسية القابلة للتوصيل على الشرفات بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي فقط (الطاقة المحقونة في الشبكة لا يُعوَّض عنها). لا يُشترط عقد توصيل ولا ترخيص ولا رسم توصيل، لكن عليك إخطار DEDDIE/HEDNO عبر بوابة لم يُعلن بعد موعد إطلاقها (بحلول 31 ديسمبر 2026). وكان المشروع المطروح للاستشارة حتى 20 يوليو 2026 يذكر 900 واط مركّبة؛ والرقم النهائي المُفاد به هو 1,000 واط.',
        bullets: [
          'القانون 5299/2026 (الجريدة الرسمية Α\'/67/05.05.2026) هو قانون الطاقة المتجددة التمكيني؛ وقواعد الشرفات واردة في قرار وزاري مؤرخ في 14 سبتمبر 2026، أُفيد بأنه منشور في الجريدة Β\' 5573',
          'الحدود: حتى 800 واط توليدًا و1,000 واط قدرة مركّبة لكل نقطة إمداد — وكان مشروع الاستشارة يذكر 900 واط مركّبة',
          'الاستهلاك الذاتي فقط: الطاقة المحقونة في الشبكة لا يُعوَّض عنها؛ كما تُسمح البطاريات المستقلة، دون تصدير',
          'لا عقد توصيل ولا ترخيص ولا رسوم؛ يُخطر المالك DEDDIE/HEDNO عبر بوابة رقمية (بتسجيل دخول Taxisnet) ويُقرّ مُركِّب أو مهندس بالامتثال',
          'ما يزال معلّقًا: المواصفات الفنية بحلول 31 أكتوبر 2026، وموعد إطلاق البوابة يُعلن بحلول 31 ديسمبر 2026، ويجوز للمشغّلين منع التوصيلات الجديدة في المناطق ذات السعة المحدودة للشبكة',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'القانون والقرار الوزاري والمشروع', anchor: '#law-vs-md' },
      { label: 'اليونان لا تبدأ من الصفر', anchor: '#not-from-zero' },
      { label: 'لماذا عدم التصدير — ولماذا الآن', anchor: '#why-zero-feed-in' },
      { label: 'التسجيل: البوابة والإقرارات والمواعيد', anchor: '#registration' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'مقالات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أجازت اليونان الطاقة الشمسية القابلة للتوصيل على الشرفات بقرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة الرسمية Β\' 5573)، صدر بموجب القانون 5299/2026 (Α\'/67/05.05.2026)؛ وتفيد pv magazine بأنه دخل حيز النفاذ فور نشره.',
          'الحدود وفق الصحافة اليونانية: حتى 800 واط توليدًا و1,000 واط قدرة مركّبة لكل نقطة إمداد، فلا يمكن جمع عدة مجموعات على إمداد واحد. وكان مشروع الاستشارة في يوليو يذكر 900 واط مركّبة.',
          'الاستهلاك الذاتي فقط: أي طاقة تصل إلى الشبكة لا تُدفع قيمتها. كما تُسمح البطاريات المستقلة دون ألواح، أيضًا دون تصدير.',
          'التسجيل إخطار وليس ترخيصًا: لا عقد توصيل ولا رسم توصيل. يُقرّ المالك بالنظام عبر بوابة رقمية لدى DEDDIE/HEDNO، ويُقرّ مُركِّب أو مهندس بالامتثال.',
          'الآلية العملية ليست جاهزة بعد: المواصفات الفنية مستحقة بحلول 31 أكتوبر 2026 وموعد إطلاق البوابة بحلول 31 ديسمبر 2026. وتفيد Insider.gr بأن الأنظمة المركّبة قبل ذلك يجب الإقرار بها خلال 30 يومًا من الإطلاق.',
          'يجوز للمشغّلين تقييد التوصيلات الجديدة القابلة للتوصيل في المناطق ذات السعة المحدودة للشبكة. تلخّص هذه الصفحة التغطية المنشورة وليس نص الجريدة الرسمية — وهي ليست استشارة قانونية.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'القانون والقرار الوزاري وما تغيّر عن المشروع',
        content: [
          '**القانون 5299/2026 هو قانون الطاقة المتجددة الواسع (الجريدة الرسمية Α\'/67/05.05.2026، نُشر في 5 مايو 2026)؛ أما قواعد الطاقة الشمسية على الشرفات فيحددها قرار وزاري منفصل مؤرخ في 14 سبتمبر 2026، أُفيد بأنه منشور في الجريدة Β\' 5573، وهو بحسب فهرس الجريدة يحلّ أيضًا محل قرار 2024 بشأن الاستهلاك الذاتي.** والقانون نفسه لا يتضمن حدود قدرة ولا خطوات تسجيل خاصة بالشرفات.',
          '**انتقل القرار من مشروع إلى قواعد منشورة: انتهت الاستشارة العامة في 20 يوليو 2026، ونقلت وسائل الإعلام اليونانية النص النهائي اعتبارًا من 15 سبتمبر 2026.** والتغيير الرئيسي المُفاد به يخص القدرة المركّبة: فقد ذكر المشروع 800 واط حقنًا و900 واط قدرة مركّبة، بينما تفيد Insider.gr وProtothema بـ 800 واط توليدًا و1,000 واط قدرة مركّبة لكل نقطة إمداد. وبقي مبدأ عدم التصدير. أما «البوابة الرقمية» عبر TAXISnet والإقرار بالمسؤولية المجدَّد كل عامين الواردان في المشروع فلا يظهران في تغطية النص النهائي، ولذلك لم تعد هذه الصفحة تذكرهما.',
        ],
        callouts: [
          { type: 'warning', text: 'تلخّص هذه الصفحة التغطية المنشورة للقرار (pv magazine وInsider.gr وProtothema، 15 سبتمبر 2026) وليس نص الجريدة الرسمية نفسه، وتختلف الروايات الصحفية في بعض التفاصيل مثل اشتراط العدّاد الذكي. راجع الجريدة الرسمية Β\' 5573/14.09.2026 وإعلانات DEDDIE/HEDNO قبل الشراء أو التركيب. هذه ليست استشارة قانونية.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'اليونان لا تبدأ من الصفر',
        content: [
          '**اليونان لا تبدأ من الصفر في الطاقة الشمسية: فأرقام الوزارة التي استشهدت بها الصحافة اليونانية والمتخصصة تفيد بإضافة 37,407 أنظمة طاقة متجددة للاستهلاك الذاتي بقدرة إجمالية 1,070 ميغاواط منذ 2020، مقابل 1,772 نظامًا (36 ميغاواط) في 2015–2019.** ومعظم هذه القاعدة أنظمة أسطح أكبر للاستهلاك الذاتي، وليست مجموعات قابلة للتوصيل.',
          'ما يضيفه قرار 2026 هو فئة مستقلة للمجموعات الصغيرة القابلة للتوصيل التي يركّبها المستهلك بنفسه، والتي لم تُكتب لها قواعد الاستهلاك الذاتي السابقة: إذ تصف التغطية اليونانية هذه الفئة بأنها تُنشأ للمرة الأولى.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'لماذا عدم التصدير — ولماذا الآن',
        content: [
          '**تقلّص شبكة اليونان إنتاج الطاقة الشمسية لساعات في أيام كثيرة، وهذا هو سياق تصميم عدم التصدير.** وتصف الصحافة اليونانية والمتخصصة فائض عرض في ساعات الذروة الشمسية؛ ومن شأن طاقة شمسية على الشرفات قادرة على التصدير أن تفاقم ذلك بدل أن تحلّ مشكلة جديدة، ولهذا يسمح القرار بالاستهلاك الذاتي فقط بدل نماذج التصدير المسموح بها في دول أخرى من الاتحاد الأوروبي.',
          '**انتقد خبراء القطاع التوسع الأوسع قبل صدور القرار.** ففي أبريل 2026 نقلت Keep Talking Greece أن رئيس رابطة منتجي الطاقة الكهروضوئية حذّر من أن الطاقة الكهروضوئية غير المقيّدة على كل منزل وشرفة قد تدفع الشبكة نحو الانهيار، وأن بعض الأصوات فضّلت البطاريات على الشرفات على المزيد من الألواح التي تغذّي الشبكة. وبعد النشر قالت Helapco، رابطة شركات الطاقة الكهروضوئية، إن الإطار يتضمن معظم مقترحات السوق (pv magazine).',
          'تقدّم وزارة البيئة والطاقة المبادرة بوصفها إتاحة للطاقة — مستهلكون أكثر يتحكمون في استهلاكهم، وفواتير أقل، واستقلال أكبر في الطاقة — وذكر الوزير إمكانية خفض تكلفة الكهرباء بنسبة 20–30% (Protothema). وهذا هو المبرر المعلن للوزارة، وليس تقييمًا من هذه الصفحة لمدى تحقيق الإطار له.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'التسجيل: البوابة والإقرارات والمواعيد',
        content: [
          '**التسجيل إخطار وليس ترخيصًا: لا عقد توصيل مع DEDDIE/HEDNO ولا موافقة أخرى ولا رسم توصيل (تخضع توصيلات الاستهلاك الذاتي القياسية لرسم قدره 370 يورو، بحسب Protothema).** عند الشراء يزوّد المشتري المورّد أو المُركِّب برقم نقطة الإمداد، فيُبلغ هذا DEDDIE/HEDNO. وقبل التركيب يسجّل المالك الدخول ببيانات Taxisnet إلى بوابة رقمية لدى DEDDIE ويُدخل المورّد ونقطة الإمداد والعنوان وبيانات النظام وبيانات المُركِّب أو المهندس؛ ويُشترط إقرار صالح من المُركِّب، ويُقرّ المُركِّب أو المهندس بأن مواصفات التركيب والتوصيل والتشغيل مستوفاة.',
          '**البوابة غير موجودة بعد.** المواصفات الفنية مستحقة بحلول 31 أكتوبر 2026 (DEDDIE مع ELOT)، ويجب إعلان موعد إطلاق البوابة بحلول 31 ديسمبر 2026، وتفيد Insider.gr بأن الأنظمة المركّبة قبل الإطلاق يجب الإقرار بها خلال 30 يومًا بعده. وبعد الإخطار ستركّب DEDDIE أجهزة قياس عن بُعد لتسجيل بيانات الإمداد، ومن المخطط إجراء فحوص عشوائية (Protothema)؛ وتضيف pv magazine أن الأنظمة القابلة للتوصيل يجب تركيبها مع عدّادات ذكية، وهو ما لا تذكره التغطية اليونانية التي رُوجعت، فيُرجى التأكد. كما يجوز للمشغّلين منع التوصيلات الجديدة في المناطق ذات السعة المحدودة للشبكة.',
          '**البطاريات المستقلة فئة منفصلة:** تُسمح البطاريات دون نظام كهروضوئي للأفراد والشركات دون تصدير إلى الشبكة، ويُفرض ذلك تقنيًا بمستشعر اتجاه وأجهزة قياس عن بُعد (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟', a: 'نعم، بشروط. فقرار وزاري مؤرخ في 14 سبتمبر 2026، صدر بموجب القانون 5299/2026 وأُفيد بأنه منشور في الجريدة الرسمية Β\' 5573، ينشئ فئة قانونية للطاقة الشمسية القابلة للتوصيل على الشرفات بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي فقط. وليس لبوابة الإخطار موعد إطلاق بعد، فاستعلم من DEDDIE/HEDNO قبل التركيب.' },
          { q: 'لماذا تصمّم اليونان الطاقة الشمسية على الشرفات بنظام «عدم التصدير» بدل السماح بالتصدير كما في ألمانيا أو فرنسا؟', a: 'لأن شبكة اليونان تقلّص بالفعل إنتاج الطاقة الشمسية القائم لساعات في أيام كثيرة بسبب فائض العرض. وإضافة طاقة شمسية على الشرفات قادرة على التصدير إلى شبكة تقلّص أصلًا ستفاقم مشكلة حقيقية وحالية، وقد حذّر ممثلو القطاع من إجهاد الشبكة بسبب مزيد من الطاقة الكهروضوئية غير المقيّدة.' },
          { q: 'ما أكبر حجم لنظام قابل للتوصيل في اليونان؟', a: 'تفيد الصحافة اليونانية بحد أقصى 800 واط توليدًا و1,000 واط قدرة مركّبة لكل نقطة إمداد كهربائي، فلا يمكن جمع عدة مجموعات على إمداد واحد. وكان المشروع يذكر 900 واط قدرة مركّبة؛ فتأكد من الحدود الدقيقة في نص الجريدة الرسمية.' },
          { q: 'كيف أسجّل نظام طاقة شمسية على الشرفة في اليونان؟', a: 'هو إخطار وليس ترخيصًا: لا عقد توصيل ولا ترخيص ولا رسم توصيل. تزوّد المورّد أو المُركِّب برقم نقطة الإمداد، ثم تُقرّ بالنظام عبر بوابة رقمية لدى DEDDIE/HEDNO (بتسجيل دخول Taxisnet) مع إقرار من المُركِّب أو المهندس. والبوابة لم تُفتح بعد.' },
          { q: 'هل يمكنني تصدير فائض الطاقة الشمسية من الشرفة إلى الشبكة في اليونان؟', a: 'لا. الأنظمة القابلة للتوصيل مخصصة للاستهلاك الذاتي فقط، والطاقة التي تصل إلى الشبكة لا يُعوَّض عنها. وتسري القاعدة نفسها (بلا تصدير) على البطاريات المستقلة.' },
          { q: 'متى يمكنني التسجيل فعليًا؟', a: 'ليس بعد. المواصفات الفنية مستحقة بحلول 31 أكتوبر 2026، ويجب أن تعلن DEDDIE موعد إطلاق البوابة بحلول 31 ديسمبر 2026. وتفيد Insider.gr بأن الأنظمة المركّبة قبل ذلك يجب الإقرار بها خلال 30 يومًا من إطلاق البوابة.' },
          { q: 'هل يمكنني إضافة بطارية إلى نظام شرفة في اليونان؟', a: 'تُسمح الآن البطاريات المستقلة دون نظام كهروضوئي، دون تصدير، ويجوز لأنظمة الاستهلاك الذاتي إضافة بطاريات وفق متطلبات فنية (pv magazine وProtothema). وفي الجزر لا يجوز للبطاريات المركّبة مع الطاقة الكهروضوئية حقن الكهرباء في الشبكة.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'نشر إطار الاستهلاك الذاتي، وحد 800 واط، وقاعدة عدم التصدير، وأحكام المشغّلين والبطاريات (15 سبتمبر 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'الطاقة الكهروضوئية على الشرفات بلا تراخيص ولا رسم توصيل — Insider.gr', description: 'حدود 800 و1,000 واط لكل نقطة إمداد، وبوابة DEDDIE، والمواعيد، وعدم التعويض عن الطاقة المحقونة (باليونانية)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'كيف تركّب طاقة كهروضوئية على الشرفة — Protothema', description: 'خطوات التسجيل، ومواعيد 31 أكتوبر و31 ديسمبر، ورسم التوصيل القياسي 370 يورو، والبطاريات (باليونانية)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'تغطية المشروع في مرحلة الاستشارة، مع أكثر من 37,400 نظام للاستهلاك الذاتي منذ 2020 (22 يوليو 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'الطاقة الكهروضوئية على الشرفات: للخبراء تحفظات — Keep Talking Greece', description: 'سياق تقليص الشبكة وتحذيرات القطاع (29 أبريل 2026)' },
          { url: 'https://www.et.gr/', title: 'الجريدة الرسمية — المطبعة الوطنية', description: 'المصدر الرسمي للجريدة Β\' 5573/14.09.2026 والقانون 5299/2026 (Α\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[معيار 800 واط للطاقة الشمسية على الشرفات: شرح التوحيد الأوروبي](/ar/balcony-solar/eu-800w-balcony-solar-standard-2027) — سياق التقارب الأوروبي العابر للحدود الذي تندرج فيه آلية هذه الصفحة',
          '[هل الطاقة الشمسية على الشرفات قانونية؟ دليل حسب الدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — أداة تتبع قانوني عالمية',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-ja.webp',
    title: 'ギリシャでバルコニー太陽光は合法か？ 2027年ステータスレポート',
    seoTitle: 'ギリシャでバルコニー太陽光は合法か？ 2027年ステータスレポート',
    intro: 'ギリシャはプラグイン式バルコニー太陽光を合法化しました。2026年9月14日付の閣僚決定により、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムという専用カテゴリーが設けられ、用途は自家消費に限られます。逆潮流を認めない設計は慎重さのための慎重さではありません。ギリシャの系統はすでに多くの日に既存の太陽光出力を抑制しており、業界関係者は、無制限のバルコニーPVが系統に負担をかけかねないと警告してきました。まだ残っているのは実務面の整備です。技術仕様の期限は2026年10月31日で、DEDDIE/HEDNOの届出ポータルには開始日がまだありません。',
    metaDescription: 'ギリシャでは2026年の閣僚決定によりバルコニー太陽光が合法化。800Wまでのプラグイン式、逆潮流不可、DEDDIEポータルでの届出が必要です。ルールと未確定の期限を解説。',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ギリシャのバルコニー太陽光に関する閣僚決定を追うバルコニー太陽光の購入検討者と政策ウォッチャー',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**はい。ギリシャはプラグイン式バルコニー太陽光を合法化しました。2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報じられています）により、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムの専用カテゴリーが設けられ、用途は自家消費に限られます。系統に流れたエネルギーは補償されません。** 系統連系契約、許可、接続料は不要ですが、所有者はまだ開設されていないデジタルポータルを通じて系統事業者DEDDIE/HEDNOに届け出る必要があります。技術仕様の期限は2026年10月31日、ポータルの開始日の発表期限は2026年12月31日です。意見募集（2026年7月20日まで）の草案では設置容量900Wとされていましたが、ギリシャの報道では最終的な数値は1,000Wとされています。ギリシャの太陽光は決してゼロからの出発ではなく、省庁の数字では2020年以降に37,407件の自家消費システム（1,070MW）が追加されました。逆潮流なしの設計は、すでに多くの日に太陽光出力を抑制している系統への対応です。本ページは公表された報道の要約であり、法的助言ではありません。',
    quickAnswerTop: {
      ja: {
        question: 'ギリシャでバルコニー太陽光は合法ですか？',
        answer: 'はい、ただし条件付きです。2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報じられています）により、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式バルコニーPVが法的カテゴリーとして設けられ、用途は自家消費に限られます（系統に注入されたエネルギーは補償されません）。系統連系契約、許可、接続料は不要ですが、開始日が未発表のポータル（2026年12月31日までに発表予定）を通じてDEDDIE/HEDNOに届け出る必要があります。2026年7月20日まで意見募集された草案は設置容量900Wでしたが、報じられている最終値は1,000Wです。',
        bullets: [
          '2026年法5299号（官報Α\'/67/05.05.2026）は根拠となる再生可能エネルギー法で、バルコニーのルールは2026年9月14日付の閣僚決定（官報B\' 5573として報道）にあります',
          '上限：供給地点ごとに発電800W・設置容量1,000W。意見募集の草案では設置容量900Wでした',
          '自家消費のみ：系統に注入されたエネルギーは補償されず、パネルなしの単独蓄電池も逆潮流なしで認められます',
          '系統連系契約・許可・接続料は不要。所有者はDEDDIE/HEDNOのデジタルポータル（Taxisnetログイン）で届け出、施工業者またはエンジニアが適合を宣言します',
          '未確定事項：技術仕様は2026年10月31日まで、ポータル開始日は2026年12月31日までに発表予定。系統容量が限られる地域では、事業者が新規接続を禁止できます',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '法律・閣僚決定・草案', anchor: '#law-vs-md' },
      { label: 'ギリシャはゼロからの出発ではない', anchor: '#not-from-zero' },
      { label: 'なぜ逆潮流ゼロなのか、そしてなぜ今なのか', anchor: '#why-zero-feed-in' },
      { label: '登録：ポータル・宣言・期限', anchor: '#registration' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '出典', anchor: '#sources' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ギリシャは2026年9月14日付の閣僚決定（官報B\' 5573として報道）でプラグイン式バルコニー太陽光を合法化しました。根拠は2026年法5299号（Α\'/67/05.05.2026）で、pv magazineによれば公布と同時に発効しました。',
          'ギリシャの報道による上限：供給地点ごとに発電800W・設置容量1,000W。同じ供給地点に複数のキットを積み増すことはできません。7月の意見募集草案は設置容量900Wでした。',
          '自家消費のみ：系統に届いたエネルギーは支払われません。パネルなしの単独蓄電池も認められますが、やはり逆潮流はできません。',
          '登録は許可ではなく届出です。系統連系契約も接続料も不要で、所有者がDEDDIE/HEDNOのデジタルポータルでシステムを申告し、施工業者またはエンジニアが適合を宣言します。',
          '実務の仕組みは未整備です。技術仕様は2026年10月31日まで、ポータル開始日は2026年12月31日までに発表予定です。Insider.grによれば、それ以前に設置したシステムはポータル開始から30日以内に申告が必要です。',
          '系統容量が限られる地域では、事業者が新規のプラグイン接続を制限できます。本ページは公表された報道の要約であり、官報の条文ではありません。法的助言ではありません。',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '法律、閣僚決定、そして草案からの変更点',
        content: [
          '**2026年法5299号は包括的な再生可能エネルギー法（官報Α\'/67/05.05.2026、2026年5月5日公布）です。バルコニー太陽光のルールは、2026年9月14日付の別個の閣僚決定（官報B\' 5573として報道）で定められており、官報の索引によれば2024年の自家消費に関する決定も置き換えています。** 法律そのものには、バルコニー固有の出力上限や登録手順は含まれていません。',
          '**決定は草案から公表された規則になりました。意見募集は2026年7月20日に終了し、ギリシャのメディアは2026年9月15日から最終文を報じました。** 報じられている主な変更点は設置容量の上限です。草案は注入800W・設置容量900Wでしたが、Insider.grとProtothemaは供給地点ごとに発電800W・設置容量1,000Wと報じています。逆潮流なしの原則は維持されました。草案にあったTAXISnet経由の「デジタルゲートウェイ」と2年ごとに更新する責任宣言は、最終文の報道には見られないため、本ページではもう記載していません。',
        ],
        callouts: [
          { type: 'warning', text: '本ページは決定に関する公表報道（pv magazine、Insider.gr、Protothema、2026年9月15日）の要約であり、官報の条文そのものではありません。スマートメーターの要否など、報道によって細部が異なる点もあります。購入や設置の前に、官報B\' 5573/14.09.2026とDEDDIE/HEDNOの発表をご確認ください。法的助言ではありません。' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'ギリシャはゼロからの出発ではない',
        content: [
          '**ギリシャの太陽光は決してゼロからの出発ではありません。ギリシャ報道や業界報道が引用する省庁の数字では、2020年以降に37,407件・計1,070MWの自家消費型再生可能エネルギーシステムが追加され、2015〜2019年の1,772件（36MW）を大きく上回っています。** その大半は、プラグイン式キットではなく、より大規模な屋根設置の自家消費システムです。',
          '2026年の決定が加えたのは、従来の自家消費ルールが想定していなかった、消費者自身が設置する小型プラグイン式キットの専用カテゴリーです。ギリシャの報道は、プラグイン式カテゴリーが初めて設けられたと伝えています。',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'なぜ逆潮流ゼロなのか、そしてなぜ今なのか',
        content: [
          '**ギリシャの系統はすでに多くの日に数時間にわたり太陽光出力を抑制しており、これが逆潮流なし設計の背景です。** ギリシャ報道や業界報道は、太陽光のピーク時間帯の供給過剰を指摘しています。逆潮流が可能なバルコニーPVはそれを悪化させるだけで、新たな問題を解決しません。そのため決定は、EUの他国で使われる逆潮流容認型ではなく、自家消費のみを認めています。',
          '**業界の専門家は、決定の前から拡大策を批判してきました。** 2026年4月、Keep Talking Greeceは、太陽光発電事業者協会の会長が、すべての住宅やバルコニーへの無制限のPV設置は系統を崩壊に向かわせかねないと警告したこと、またバルコニーでは系統に流す追加パネルよりも蓄電池を望む声もあることを報じました。公表後、PV企業団体のHelapcoは、この枠組みは市場の提案の大半を取り入れていると述べています（pv magazine）。',
          '環境エネルギー省はこの取り組みを、より多くの消費者が消費をコントロールし、電気料金を下げ、エネルギー自立を高める「エネルギーへのアクセス」として位置づけており、大臣は電気料金が20〜30%下がる可能性に言及しました（Protothema）。これは省の公式の説明であり、枠組みがそれを達成するかどうかについての本ページの評価ではありません。',
        ],
      },
      registration: {
        id: 'registration',
        title: '登録：ポータル・宣言・期限',
        content: [
          '**登録は許可ではなく届出です。DEDDIE/HEDNOとの系統連系契約も、その他の承認も、接続料も不要です（通常の自家消費の接続には370ユーロの料金がかかると、Protothemaは伝えています）。** 購入時に、購入者は供給地点番号を販売業者または施工業者に伝え、業者がDEDDIE/HEDNOに通知します。設置前に、所有者はTaxisnetの認証情報でDEDDIEのデジタルポータルにログインし、供給業者、供給地点、住所、システムデータ、施工業者またはエンジニアの情報を入力します。有効な施工業者の宣言書が必要で、施工業者またはエンジニアが設置・接続・運用の仕様を満たしていることを宣言します。',
          '**ポータルはまだ存在しません。** 技術仕様は2026年10月31日まで（DEDDIEとELOT）、ポータルの開始日は2026年12月31日までに発表する必要があり、Insider.grによれば、開始前に設置したシステムは開始から30日以内に申告が必要です。届出後、DEDDIEは供給データを記録するテレメトリを取り付け、抜き打ち検査も予定されています（Protothema）。pv magazineは、プラグイン式システムはスマートメーターと併せて設置する必要があると伝えていますが、確認したギリシャの報道には記載がないため、確認が必要です。また、系統容量が限られる地域では、事業者が新規のプラグイン接続を禁止できます。',
          '**単独蓄電池は別カテゴリーです。** PVシステムのない蓄電池は、個人と企業に対して系統への逆潮流なしで認められ、方向センサーとテレメトリによって技術的に担保されます（Protothema）。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ギリシャでバルコニー太陽光は合法ですか？', a: 'はい、ただし条件付きです。2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報道）により、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式バルコニーPVが法的カテゴリーとして設けられ、用途は自家消費に限られます。届出ポータルの開始日はまだ決まっていないため、設置前にDEDDIE/HEDNOにご確認ください。' },
          { q: 'なぜギリシャはドイツやフランスのように逆潮流を認めず、バルコニー太陽光を「逆潮流ゼロ」にしたのですか？', a: 'ギリシャの系統は、供給過剰のためにすでに多くの日に数時間にわたり既存の太陽光出力を抑制しているからです。すでに抑制が行われている系統に、逆潮流が可能なバルコニーPVを加えれば、現実の差し迫った問題を悪化させます。業界関係者も、無制限にPVが増えれば系統に負担がかかると警告しています。' },
          { q: 'ギリシャでプラグイン式システムはどのくらいの大きさにできますか?', a: 'ギリシャの報道では、電力供給地点ごとに最大で発電800W・設置容量1,000Wとされており、同じ供給地点に複数のキットを積み増すことはできません。草案では設置容量900Wでした。正確な上限は官報の条文でご確認ください。' },
          { q: 'ギリシャでバルコニー太陽光を登録するにはどうしますか?', a: '許可ではなく届出です。系統連系契約、許可、接続料は不要です。供給地点番号を販売業者または施工業者に伝え、その後DEDDIE/HEDNOのデジタルポータル（Taxisnetログイン）で、施工業者またはエンジニアの宣言とあわせてシステムを申告します。ポータルはまだ開設されていません。' },
          { q: 'ギリシャでバルコニー太陽光の余剰電力を系統に売れますか?', a: 'いいえ。プラグイン式システムは自家消費専用で、系統に届いたエネルギーは補償されません。単独蓄電池にも同じ逆潮流なしのルールが適用されます。' },
          { q: '実際にはいつ登録できますか?', a: 'まだできません。技術仕様は2026年10月31日まで、DEDDIEはポータルの開始日を2026年12月31日までに発表する必要があります。Insider.grによれば、それ以前に設置したシステムはポータル開始から30日以内に申告が必要です。' },
          { q: 'ギリシャでバルコニーシステムに蓄電池を追加できますか?', a: 'PVシステムのない単独蓄電池は逆潮流なしで認められるようになり、自家消費システムも技術要件を満たせば蓄電池を追加できます（pv magazine、Protothema）。離島では、PVと一緒に設置した蓄電池は系統へ電力を注入できません。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: '自家消費の枠組みの公表、800W上限、逆潮流禁止、事業者と蓄電池に関する規定（2026年9月15日）' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: '許可も接続料も不要のバルコニーPV — Insider.gr', description: '供給地点ごとの800W・1,000W上限、DEDDIEポータル、期限、注入エネルギーの無補償（ギリシャ語）' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'バルコニーPVの設置方法 — Protothema', description: '登録手順、10月31日と12月31日の期限、通常の接続料370ユーロ、蓄電池（ギリシャ語）' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: '意見募集段階の草案報道。2020年以降に37,400件超の自家消費システム（2026年7月22日）' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'バルコニーの太陽光：専門家は懸念 — Keep Talking Greece', description: '系統抑制の背景と業界の警告（2026年4月29日）' },
          { url: 'https://www.et.gr/', title: '官報 — 国立印刷局', description: '官報B\' 5573/14.09.2026および2026年法5299号（Α\'/67/05.05.2026）の公式情報源' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[800Wバルコニー太陽光標準：EU調和の解説](/ja/balcony-solar/eu-800w-balcony-solar-standard-2027) — 本ページの仕組みが位置づけられる、国境を越えたEUの収束の文脈',
          '[バルコニー太陽光は合法か？国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — 世界の法制度トラッカー',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-ko.webp',
    title: '그리스에서 발코니 태양광은 합법인가? 2027년 현황 보고서',
    seoTitle: '그리스에서 발코니 태양광은 합법인가? 2027년 현황 보고서',
    intro: '그리스는 플러그인 발코니 태양광을 합법화했습니다. 2026년 9월 14일자 장관령은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템이라는 별도 범주를 만들고, 용도를 자가소비로 엄격히 제한합니다. 역송 금지 설계는 신중함 자체를 위한 것이 아닙니다. 그리스 계통은 이미 많은 날 기존 태양광 출력을 제한하고 있고, 업계 인사들은 제한 없는 발코니 PV가 계통에 부담을 줄 수 있다고 경고해 왔습니다. 아직 남은 것은 실무 체계입니다. 기술 사양은 2026년 10월 31일까지 나와야 하며, DEDDIE/HEDNO 신고 포털은 아직 개시일이 없습니다.',
    metaDescription: '그리스는 2026년 장관령으로 발코니 태양광을 합법화했습니다. 최대 800W 플러그인 방식, 계통 역송 금지, DEDDIE 포털 신고. 규정과 남은 기한을 정리했습니다.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '그리스의 발코니 태양광 관련 장관령을 추적하는 발코니 태양광 구매자 및 정책 관찰자',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**네, 그리스는 플러그인 발코니 태양광을 합법화했습니다. 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템이라는 별도 범주를 만들며, 용도는 자가소비로 엄격히 제한됩니다. 계통에 도달한 에너지는 보상되지 않습니다.** 계통 연계 계약, 허가, 접속료는 필요 없지만, 소유자는 아직 열리지 않은 디지털 포털을 통해 계통 운영자 DEDDIE/HEDNO에 신고해야 합니다. 기술 사양 기한은 2026년 10월 31일, 포털 개시일 발표 기한은 2026년 12월 31일입니다. 의견수렴(2026년 7월 20일까지) 초안은 설치 용량 900W로 되어 있었으나, 그리스 언론은 최종 수치를 1,000W로 보도합니다. 그리스는 태양광에서 제로에서 시작하는 것이 아닙니다. 정부 부처 수치에 따르면 2020년 이후 자가소비 시스템 37,407기(1,070MW)가 추가되었습니다. 역송 금지 설계는 이미 많은 날 태양광 출력을 제한하는 계통에 대한 대응입니다. 이 글은 공개된 보도의 요약이며 법률 자문이 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: '그리스에서 발코니 태양광은 합법인가요?',
        answer: '네, 조건부로 합법입니다. 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 발코니 PV를 위한 법적 범주를 만들며, 자가소비 전용입니다(계통에 주입된 에너지는 보상되지 않음). 계통 연계 계약, 허가, 접속료는 필요 없지만, 개시일이 아직 발표되지 않은 포털(2026년 12월 31일까지 발표 예정)을 통해 DEDDIE/HEDNO에 신고해야 합니다. 2026년 7월 20일까지 의견수렴한 초안은 설치 용량 900W였으며, 보도된 최종 수치는 1,000W입니다.',
        bullets: [
          '2026년 법률 제5299호(관보 Α\'/67/05.05.2026)는 근거가 되는 재생에너지법이며, 발코니 규정은 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)에 있습니다',
          '한도: 공급 지점당 발전 800W, 설치 용량 1,000W 이하 — 의견수렴 초안은 설치 용량 900W였습니다',
          '자가소비 전용: 계통에 주입된 에너지는 보상되지 않으며, 패널 없는 독립형 배터리도 역송 없이 허용됩니다',
          '계통 연계 계약, 허가, 접속료 없음. 소유자는 DEDDIE/HEDNO 디지털 포털(Taxisnet 로그인)로 신고하고, 설치업자 또는 엔지니어가 적합성을 선언합니다',
          '아직 남은 사항: 기술 사양은 2026년 10월 31일까지, 포털 개시일은 2026년 12월 31일까지 발표 예정이며, 계통 용량이 제한된 지역에서는 운영자가 신규 접속을 막을 수 있습니다',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '법률, 장관령, 그리고 초안', anchor: '#law-vs-md' },
      { label: '그리스는 제로에서 시작하는 것이 아닙니다', anchor: '#not-from-zero' },
      { label: '왜 역송 제로인가, 그리고 왜 지금인가', anchor: '#why-zero-feed-in' },
      { label: '등록: 포털, 선언서, 기한', anchor: '#registration' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
      { label: '관련 글', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '그리스는 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)으로 플러그인 발코니 태양광을 합법화했습니다. 이 장관령은 2026년 법률 제5299호(Α\'/67/05.05.2026)에 따라 발령되었으며, pv magazine에 따르면 공포와 동시에 발효되었습니다.',
          '그리스 언론이 보도한 한도: 공급 지점당 발전 800W, 설치 용량 1,000W 이하이므로 한 공급 지점에 여러 키트를 합산할 수 없습니다. 7월 의견수렴 초안은 설치 용량 900W였습니다.',
          '자가소비 전용: 계통에 도달한 에너지는 대가가 지급되지 않습니다. 패널 없는 독립형 배터리도 허용되지만, 역시 역송은 불가합니다.',
          '등록은 허가가 아니라 신고입니다. 계통 연계 계약도 접속료도 없으며, 소유자가 DEDDIE/HEDNO 디지털 포털로 시스템을 신고하고 설치업자 또는 엔지니어가 적합성을 선언합니다.',
          '실무 체계는 아직 준비되지 않았습니다. 기술 사양은 2026년 10월 31일까지, 포털 개시일은 2026년 12월 31일까지 발표되어야 합니다. Insider.gr에 따르면 그 이전에 설치된 시스템은 포털 개시 후 30일 이내에 신고해야 합니다.',
          '계통 용량이 제한된 지역에서는 운영자가 신규 플러그인 접속을 제한할 수 있습니다. 이 글은 공개된 보도를 요약한 것이며 관보 원문이 아닙니다. 법률 자문이 아닙니다.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '법률, 장관령, 그리고 초안에서 달라진 점',
        content: [
          '**2026년 법률 제5299호는 포괄적인 재생에너지법(관보 Α\'/67/05.05.2026, 2026년 5월 5일 공포)이며, 발코니 태양광 규정은 별도의 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)이 정하고, 관보 색인에 따르면 이 장관령은 2024년 자가소비 결정도 대체합니다.** 법률 자체에는 발코니 전용 출력 한도나 등록 절차가 없습니다.',
          '**이 결정은 초안에서 공포된 규정이 되었습니다. 공개 의견수렴은 2026년 7월 20일에 끝났고, 그리스 언론은 2026년 9월 15일부터 최종 문안을 보도했습니다.** 보도된 주요 변경점은 설치 용량 한도입니다. 초안은 주입 800W, 설치 용량 900W였지만, Insider.gr와 Protothema는 공급 지점당 발전 800W, 설치 용량 1,000W로 보도합니다. 역송 금지 원칙은 유지되었습니다. 초안에 있던 TAXISnet 기반 「디지털 게이트웨이」와 2년마다 갱신하는 책임 선언서는 최종 문안 보도에서 보이지 않아, 이 글에서는 더 이상 언급하지 않습니다.',
        ],
        callouts: [
          { type: 'warning', text: '이 글은 결정에 관한 공개 보도(pv magazine, Insider.gr, Protothema, 2026년 9월 15일)를 요약한 것이며 관보 원문이 아니고, 스마트 미터 요건 등 일부 세부 사항은 보도마다 다릅니다. 구매나 설치 전에 관보 Β\' 5573/14.09.2026과 DEDDIE/HEDNO 공지를 확인하십시오. 법률 자문이 아닙니다.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: '그리스는 제로에서 시작하는 것이 아닙니다',
        content: [
          '**그리스는 태양광에서 제로에서 시작하는 것이 아닙니다. 그리스 및 업계 언론이 인용한 정부 부처 수치에 따르면 2020년 이후 자가소비형 재생에너지 시스템 37,407기, 합계 1,070MW가 추가되었으며, 2015~2019년에는 1,772기(36MW)였습니다.** 이 기반의 대부분은 플러그인 키트가 아니라 더 큰 지붕형 자가소비 시스템입니다.',
          '2026년 결정이 더한 것은 기존 자가소비 규정이 염두에 두지 않았던, 소비자가 직접 설치하는 소형 플러그인 키트를 위한 별도 범주입니다. 그리스 언론은 플러그인 범주가 처음으로 마련되었다고 설명합니다.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: '왜 역송 제로인가, 그리고 왜 지금인가',
        content: [
          '**그리스 계통은 이미 많은 날 몇 시간씩 태양광 출력을 제한하고 있으며, 이것이 역송 금지 설계의 배경입니다.** 그리스 및 업계 언론은 태양광 피크 시간대의 공급 과잉을 설명합니다. 역송이 가능한 발코니 PV는 새로운 문제를 해결하기보다 이를 악화시킬 것이므로, 결정은 EU의 다른 곳에서 쓰는 역송 허용 모델이 아니라 자가소비만 허용합니다.',
          '**업계 전문가들은 결정 이전부터 더 넓은 확대를 비판했습니다.** 2026년 4월 Keep Talking Greece는 태양광발전사업자협회 회장이 모든 주택과 발코니에 제한 없이 PV를 설치하면 계통이 붕괴 위기에 몰릴 수 있다고 경고했으며, 일부는 계통에 공급하는 패널을 늘리는 것보다 발코니 배터리를 선호한다고 보도했습니다. 공포 후 PV 기업 협회인 Helapco는 이 체계가 시장의 제안 대부분을 반영한다고 밝혔습니다(pv magazine).',
          '환경에너지부는 이 조치를 에너지 접근성으로 설명합니다. 더 많은 소비자가 소비를 통제하고, 요금을 낮추고, 에너지 자립을 높인다는 것이며, 장관은 전기요금이 20~30% 줄 수 있다고 언급했습니다(Protothema). 이는 부처가 밝힌 취지이며, 이 체계가 그 목표를 달성하는지에 대한 이 글의 평가가 아닙니다.',
        ],
      },
      registration: {
        id: 'registration',
        title: '등록: 포털, 선언서, 기한',
        content: [
          '**등록은 허가가 아니라 신고입니다. DEDDIE/HEDNO와의 계통 연계 계약도, 다른 승인도, 접속료도 필요 없습니다(일반 자가소비 접속에는 370유로의 요금이 부과된다고 Protothema는 전합니다).** 구매 시 구매자는 공급 지점 번호를 판매업체 또는 설치업자에게 알리고, 업체가 DEDDIE/HEDNO에 통지합니다. 설치 전에 소유자는 Taxisnet 자격 증명으로 DEDDIE 디지털 포털에 로그인하여 공급업체, 공급 지점, 주소, 시스템 데이터, 설치업자 또는 엔지니어 정보를 입력합니다. 유효한 설치업자 선언서가 필요하며, 설치업자 또는 엔지니어가 설치, 접속, 운영 사양이 충족되었음을 선언합니다.',
          '**포털은 아직 존재하지 않습니다.** 기술 사양은 2026년 10월 31일까지(DEDDIE와 ELOT), 포털 개시일은 2026년 12월 31일까지 발표되어야 하며, Insider.gr에 따르면 개시 전에 설치된 시스템은 개시 후 30일 이내에 신고해야 합니다. 신고 후 DEDDIE는 공급 데이터를 기록하는 원격 계측 장치를 설치하며 불시 점검도 계획되어 있습니다(Protothema). pv magazine은 플러그인 시스템을 스마트 미터와 함께 설치해야 한다고 덧붙이지만, 확인한 그리스 보도에는 이 내용이 없으므로 확인이 필요합니다. 또한 계통 용량이 제한된 지역에서는 운영자가 신규 플러그인 접속을 막을 수 있습니다.',
          '**독립형 배터리는 별도 범주입니다.** PV 시스템이 없는 배터리는 개인과 기업에 계통 역송 없이 허용되며, 방향 센서와 원격 계측으로 기술적으로 보장됩니다(Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '그리스에서 발코니 태양광은 합법인가요?', a: '네, 조건부로 합법입니다. 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 발코니 PV를 위한 법적 범주를 만들며, 자가소비 전용입니다. 신고 포털의 개시일이 아직 없으므로 설치 전에 DEDDIE/HEDNO에 확인하십시오.' },
          { q: '그리스는 왜 독일이나 프랑스처럼 역송을 허용하지 않고 발코니 태양광을 「역송 제로」로 설계하나요?', a: '그리스 계통이 공급 과잉으로 이미 많은 날 몇 시간씩 기존 태양광 출력을 제한하고 있기 때문입니다. 이미 출력을 제한하는 계통에 역송이 가능한 발코니 PV를 더하면 현실적이고 현재 진행 중인 문제가 악화되며, 업계 인사들도 제한 없는 PV 추가가 계통에 부담을 줄 수 있다고 경고했습니다.' },
          { q: '그리스에서 플러그인 시스템은 얼마나 클 수 있나요?', a: '그리스 언론은 전력 공급 지점당 최대 발전 800W, 설치 용량 1,000W로 보도하므로 한 공급 지점에 여러 키트를 합산할 수 없습니다. 초안은 설치 용량 900W였으며, 정확한 한도는 관보 원문에서 확인하십시오.' },
          { q: '그리스에서 발코니 태양광 시스템은 어떻게 등록하나요?', a: '허가가 아니라 신고입니다. 계통 연계 계약, 허가, 접속료가 필요 없습니다. 공급 지점 번호를 판매업체 또는 설치업자에게 알린 뒤, DEDDIE/HEDNO 디지털 포털(Taxisnet 로그인)로 설치업자 또는 엔지니어의 선언서와 함께 시스템을 신고합니다. 포털은 아직 열리지 않았습니다.' },
          { q: '그리스에서 발코니 태양광의 잉여 전력을 계통으로 내보낼 수 있나요?', a: '아니요. 플러그인 시스템은 자가소비 전용이며, 계통에 도달한 에너지는 보상되지 않습니다. 독립형 배터리에도 같은 역송 금지 규칙이 적용됩니다.' },
          { q: '실제로 언제 등록할 수 있나요?', a: '아직은 할 수 없습니다. 기술 사양은 2026년 10월 31일까지 나와야 하고, DEDDIE는 포털 개시일을 2026년 12월 31일까지 발표해야 합니다. Insider.gr에 따르면 그 이전에 설치된 시스템은 포털 개시 후 30일 이내에 신고해야 합니다.' },
          { q: '그리스에서 발코니 시스템에 배터리를 추가할 수 있나요?', a: 'PV 시스템이 없는 독립형 배터리는 이제 역송 없이 허용되며, 자가소비 시스템도 기술 요건에 따라 배터리를 추가할 수 있습니다(pv magazine, Protothema). 섬 지역에서는 PV와 함께 설치된 배터리가 계통에 전력을 주입할 수 없습니다.' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: '자가소비 체계의 공포, 800W 한도, 역송 금지 규칙, 운영자 및 배터리 조항(2026년 9월 15일)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: '허가와 접속료 없는 발코니 PV — Insider.gr', description: '공급 지점당 800W 및 1,000W 한도, DEDDIE 포털, 기한, 주입 에너지 무보상(그리스어)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: '발코니 PV 설치 방법 — Protothema', description: '등록 절차, 10월 31일 및 12월 31일 기한, 일반 접속료 370유로, 배터리(그리스어)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: '의견수렴 단계의 초안 보도, 2020년 이후 자가소비 시스템 37,400기 이상(2026년 7월 22일)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: '발코니 태양광: 전문가들은 유보적 — Keep Talking Greece', description: '계통 출력 제한의 배경과 업계 경고(2026년 4월 29일)' },
          { url: 'https://www.et.gr/', title: '관보 — 국립인쇄국', description: '관보 Β\' 5573/14.09.2026 및 2026년 법률 제5299호(Α\'/67/05.05.2026)의 공식 출처' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[800W 발코니 태양광 표준: EU 조화 정책 설명](/ko/balcony-solar/eu-800w-balcony-solar-standard-2027) — 이 페이지의 메커니즘이 속한 국경 간 EU 수렴 맥락',
          '[발코니 태양광은 합법입니까? 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 전 세계 법률 추적 자료',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal na Grécia? Relatório de status 2027',
    seoTitle: 'A energia solar de varanda é legal na Grécia? Relatório de status 2027',
    intro: 'A Grécia legalizou a energia solar de varanda plug-in: uma decisão ministerial de 14 de setembro de 2026 cria uma categoria própria para sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, estritamente para autoconsumo. O desenho sem exportação não é cautela por cautela: a rede grega já limita a produção solar existente em muitos dias, e representantes do setor alertaram que a energia solar de varanda sem restrições poderia sobrecarregá-la. O que ainda falta é a parte prática: as especificações técnicas vencem em 31 de outubro de 2026, e o portal de notificação da DEDDIE/HEDNO ainda não tem data de início.',
    metaDescription: 'A energia solar de varanda é legal na Grécia (decisão de 2026): até 800 W, sem exportar à rede e aviso no portal da DEDDIE. Regras e prazos em aberto.',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda e observadores de políticas na Grécia acompanhando a decisão ministerial sobre energia solar de varanda',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Sim — a Grécia legalizou a energia solar de varanda plug-in. Uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Oficial Β\' 5573), emitida com base na Lei 5299/2026, cria uma categoria própria de sistemas plug-in com até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, estritamente para autoconsumo: a energia que chega à rede não é compensada.** Não são exigidos contrato de conexão, licença nem taxa de conexão, mas o proprietário deve notificar a operadora da rede DEDDIE/HEDNO por um portal digital que ainda não está aberto — as especificações técnicas vencem em 31 de outubro de 2026 e a data de início do portal, em 31 de dezembro de 2026. O rascunho em consulta (aberta até 20 de julho de 2026) falava em 900 W instalados; a imprensa grega informa 1.000 W como valor final. A Grécia não parte do zero em energia solar — segundo números do ministério, foram adicionados 37.407 sistemas de autoconsumo (1.070 MW) desde 2020 — e o desenho sem exportação responde a uma rede que já limita a produção solar em muitos dias. Este é um resumo da cobertura publicada, não aconselhamento jurídico.',
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal na Grécia?',
        answer: 'Sim, com condições. Uma decisão ministerial de 14 de setembro de 2026 — emitida com base na Lei 5299/2026 e noticiada como Diário Oficial Β\' 5573 — cria uma categoria legal para energia solar de varanda plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, somente para autoconsumo (a energia injetada na rede não é compensada). Não são exigidos contrato de conexão, licença nem taxa de conexão, mas você deve notificar a DEDDIE/HEDNO por um portal cuja data de início ainda será anunciada (até 31 de dezembro de 2026). O rascunho em consulta até 20 de julho de 2026 falava em 900 W instalados; o valor final noticiado é 1.000 W.',
        bullets: [
          'A Lei 5299/2026 (Diário Oficial Α\'/67/05.05.2026) é a lei habilitante de energias renováveis; as regras para varanda constam de uma decisão ministerial de 14 de setembro de 2026, noticiada como Diário Β\' 5573',
          'Limites: até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento — o rascunho de consulta falava em 900 W instalados',
          'Somente autoconsumo: a energia injetada na rede não é compensada; baterias independentes também são permitidas, sem exportação',
          'Sem contrato de conexão, licença nem taxa; o proprietário notifica a DEDDIE/HEDNO por um portal digital (login Taxisnet) e um instalador ou engenheiro declara a conformidade',
          'Ainda pendente: especificações técnicas até 31 de outubro de 2026, data de início do portal a anunciar até 31 de dezembro de 2026, e as operadoras podem barrar novas conexões em áreas com capacidade de rede limitada',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'A lei, a decisão ministerial e o rascunho', anchor: '#law-vs-md' },
      { label: 'A Grécia não parte do zero', anchor: '#not-from-zero' },
      { label: 'Por que zero injeção — e por que agora', anchor: '#why-zero-feed-in' },
      { label: 'Registro: portal, declarações e prazos', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Grécia legalizou a energia solar de varanda plug-in com uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Oficial Β\' 5573), emitida com base na Lei 5299/2026 (Α\'/67/05.05.2026); segundo a pv magazine, ela entrou em vigor com a publicação.',
          'Limites segundo a imprensa grega: até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, portanto não é possível somar vários kits no mesmo fornecimento. O rascunho de julho falava em 900 W instalados.',
          'Somente autoconsumo: qualquer energia que chegue à rede não é paga. Baterias independentes sem painéis também são permitidas, de novo sem exportação.',
          'O registro é uma notificação, não uma licença: sem contrato de conexão e sem taxa de conexão. O proprietário declara o sistema por um portal digital da DEDDIE/HEDNO, e um instalador ou engenheiro declara a conformidade.',
          'A estrutura ainda não está pronta: as especificações técnicas vencem em 31 de outubro de 2026 e a data de início do portal, em 31 de dezembro de 2026. O Insider.gr informa que sistemas instalados antes devem ser declarados em até 30 dias após o lançamento.',
          'As operadoras podem restringir novas conexões plug-in em áreas com capacidade de rede limitada. Esta página resume a cobertura publicada, não o texto do Diário Oficial — não é aconselhamento jurídico.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'A lei, a decisão ministerial e o que mudou em relação ao rascunho',
        content: [
          '**A Lei 5299/2026 é a lei ampla de energias renováveis (Diário Oficial Α\'/67/05.05.2026, publicada em 5 de maio de 2026); as regras da energia solar de varanda são definidas por uma decisão ministerial separada de 14 de setembro de 2026, noticiada como Diário Β\' 5573, que, segundo o índice do diário, também substitui a decisão de 2024 sobre autoconsumo.** A lei em si não traz limites de potência nem etapas de registro específicos para varandas.',
          '**A decisão passou de rascunho a regras publicadas: a consulta pública terminou em 20 de julho de 2026, e a imprensa grega noticiou o texto final a partir de 15 de setembro de 2026.** A principal mudança noticiada é o limite de potência instalada: o rascunho falava em 800 W de injeção e 900 W de capacidade instalada, enquanto Insider.gr e Protothema informam 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento. O princípio de não exportação foi mantido. O «Digital Gateway» do TAXISnet e a declaração de responsabilidade renovada a cada dois anos do rascunho não aparecem na cobertura do texto final, por isso esta página não os menciona mais.',
        ],
        callouts: [
          { type: 'warning', text: 'Esta página resume a cobertura publicada da decisão (pv magazine, Insider.gr e Protothema, 15 de setembro de 2026), não o texto do Diário Oficial em si, e as reportagens divergem em alguns detalhes, como a exigência de medidor inteligente. Consulte o Diário Oficial Β\' 5573/14.09.2026 e os comunicados da DEDDIE/HEDNO antes de comprar ou instalar. Isto não é aconselhamento jurídico.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'A Grécia não parte do zero',
        content: [
          '**A Grécia não parte do zero em energia solar: números do ministério citados pela imprensa grega e especializada indicam que, desde 2020, foram adicionados 37.407 sistemas renováveis de autoconsumo, somando 1.070 MW, contra 1.772 sistemas (36 MW) em 2015–2019.** A maior parte dessa base é de autoconsumo em telhados de maior porte, não de kits plug-in.',
          'O que a decisão de 2026 acrescenta é uma categoria própria para kits plug-in pequenos, instalados pelo consumidor, para os quais as regras anteriores de autoconsumo não foram escritas: a imprensa grega descreve a categoria plug-in como estabelecida pela primeira vez.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Por que zero injeção — e por que agora',
        content: [
          '**A rede grega já limita a produção solar por várias horas em muitos dias, e esse é o contexto do desenho sem exportação.** A imprensa grega e especializada descreve excesso de oferta nos horários de pico solar; uma energia solar de varanda capaz de exportar agravaria esse quadro em vez de resolver um problema novo, por isso a decisão permite apenas autoconsumo, e não os modelos com exportação permitida usados em outros países da UE.',
          '**Especialistas do setor criticaram a expansão mais ampla antes da decisão.** Em abril de 2026, o Keep Talking Greece noticiou que o presidente da Associação de Produtores de Energia Fotovoltaica alertou que energia fotovoltaica sem restrições em cada casa e varanda poderia levar a rede ao colapso, e que algumas vozes preferiam baterias nas varandas a mais painéis que injetam na rede. Após a publicação, a Helapco, associação das empresas fotovoltaicas, disse que o marco incorpora a maioria das propostas do mercado (pv magazine).',
          'O Ministério do Meio Ambiente e Energia apresenta a iniciativa como acesso à energia — mais consumidores com controle sobre o consumo, contas menores e maior independência energética — e o ministro citou uma possível redução de 20–30% no custo da eletricidade (Protothema). Essa é a justificativa declarada pelo ministério, não uma avaliação desta página sobre se o marco a alcança.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: portal, declarações e prazos',
        content: [
          '**O registro é uma notificação, não uma licença: sem contrato de conexão com a DEDDIE/HEDNO, sem outra aprovação e sem taxa de conexão (conexões de autoconsumo padrão têm taxa de €370, segundo o Protothema).** Na compra, o comprador informa o número do ponto de fornecimento ao fornecedor ou instalador, que avisa a DEDDIE/HEDNO. Antes de instalar, o proprietário acessa com credenciais do Taxisnet um portal digital da DEDDIE e informa fornecedor, ponto de fornecimento, endereço, dados do sistema e dados do instalador ou engenheiro; é exigida uma declaração válida do instalador, e o instalador ou engenheiro declara que as especificações de instalação, conexão e operação são cumpridas.',
          '**O portal ainda não existe.** As especificações técnicas vencem em 31 de outubro de 2026 (DEDDIE com a ELOT), a data de início do portal deve ser anunciada até 31 de dezembro de 2026, e o Insider.gr informa que sistemas instalados antes do lançamento devem ser declarados em até 30 dias depois dele. Após a notificação, a DEDDIE instalará telemetria para registrar dados de fornecimento e estão previstas verificações por amostragem (Protothema); a pv magazine acrescenta que sistemas plug-in devem ser instalados junto com medidores inteligentes, o que a cobertura grega revisada não menciona, portanto confirme. As operadoras também podem barrar novas conexões plug-in em áreas com capacidade de rede limitada.',
          '**Baterias independentes são uma categoria separada:** baterias sem sistema fotovoltaico são permitidas para pessoas físicas e empresas sem exportação para a rede, garantida tecnicamente por um sensor de direção e telemetria (Protothema).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A energia solar de varanda é legal na Grécia?', a: 'Sim, com condições. Uma decisão ministerial de 14 de setembro de 2026, emitida com base na Lei 5299/2026 e noticiada como Diário Oficial Β\' 5573, cria uma categoria legal para energia solar de varanda plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, somente para autoconsumo. O portal de notificação ainda não tem data de início, então consulte a DEDDIE/HEDNO antes de instalar.' },
          { q: 'Por que a Grécia projeta a energia solar de varanda como «zero injeção» em vez de permitir exportação como Alemanha ou França?', a: 'Porque a rede grega já limita a produção solar existente por várias horas em muitos dias devido ao excesso de oferta. Somar energia solar de varanda capaz de exportar a uma rede que já está limitando agravaria um problema real e atual, e representantes do setor alertaram para sobrecarga da rede com mais energia fotovoltaica sem restrições.' },
          { q: 'Qual o tamanho máximo de um sistema plug-in na Grécia?', a: 'A imprensa grega informa máximo de 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento elétrico, portanto não é possível somar vários kits no mesmo fornecimento. O rascunho falava em 900 W de capacidade instalada; confirme os limites exatos no texto do Diário Oficial.' },
          { q: 'Como registro um sistema solar de varanda na Grécia?', a: 'É uma notificação, não uma licença: sem contrato de conexão, licença nem taxa de conexão. Você informa o número do ponto de fornecimento ao fornecedor ou instalador e depois declara o sistema por um portal digital da DEDDIE/HEDNO (login Taxisnet), junto com uma declaração do instalador ou engenheiro. O portal ainda não está aberto.' },
          { q: 'Posso exportar o excedente de energia solar de varanda para a rede na Grécia?', a: 'Não. Sistemas plug-in são destinados somente ao autoconsumo, e a energia que chega à rede não é compensada. Baterias independentes seguem a mesma regra, sem exportação.' },
          { q: 'Quando posso realmente me registrar?', a: 'Ainda não. As especificações técnicas vencem em 31 de outubro de 2026 e a DEDDIE deve anunciar a data de início do portal até 31 de dezembro de 2026. O Insider.gr informa que sistemas instalados antes devem ser declarados em até 30 dias após o lançamento do portal.' },
          { q: 'Posso adicionar uma bateria a um sistema de varanda na Grécia?', a: 'Baterias independentes sem sistema fotovoltaico agora são permitidas, sem exportação, e sistemas de autoconsumo podem adicionar baterias sujeitas a requisitos técnicos (pv magazine, Protothema). Nas ilhas, baterias instaladas com fotovoltaica não podem injetar eletricidade na rede.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: 'Publicação do marco de autoconsumo, limite de 800 W, regra de não exportação, disposições sobre operadoras e baterias (15 de setembro de 2026)' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: 'Fotovoltaica de varanda sem licenças nem taxa de conexão — Insider.gr', description: 'Limites de 800 W e 1.000 W por ponto de fornecimento, portal da DEDDIE, prazos, sem compensação pela energia injetada (em grego)' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: 'Como instalar fotovoltaica de varanda — Protothema', description: 'Etapas de registro, prazos de 31 de outubro e 31 de dezembro, taxa de conexão padrão de €370, baterias (em grego)' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: 'Cobertura do rascunho na fase de consulta, com mais de 37.400 sistemas de autoconsumo desde 2020 (22 de julho de 2026)' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: 'Fotovoltaica em varandas: especialistas têm ressalvas — Keep Talking Greece', description: 'Contexto de limitação da rede e alertas do setor (29 de abril de 2026)' },
          { url: 'https://www.et.gr/', title: 'Diário Oficial — Imprensa Nacional', description: 'Fonte oficial do Diário Β\' 5573/14.09.2026 e da Lei 5299/2026 (Α\'/67/05.05.2026)' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O padrão de 800 W para energia solar de varanda: a harmonização da UE explicada](/pt/balcony-solar/eu-800w-balcony-solar-standard-2027) — o contexto de convergência transfronteiriça da UE no qual o mecanismo desta página se insere',
          '[A energia solar de varanda é legal? Um guia por país](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador jurídico global',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-zh.webp',
    title: '希腊阳台光伏合法吗？2027年现状报告',
    seoTitle: '希腊阳台光伏合法吗？2027年现状报告',
    intro: '希腊已使插电式阳台光伏合法化：2026年9月14日的一项部长级决定，为每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统设立了专门类别，仅限自发自用。不向电网输出的设计并非为谨慎而谨慎——希腊电网在许多日子里已经对现有太阳能出力进行限电，行业人士也曾警告，不受限制的阳台光伏可能给电网带来压力。目前尚未落地的是具体配套机制：技术规范的截止日期为2026年10月31日，DEDDIE/HEDNO的申报门户尚无启用日期。',
    metaDescription: '希腊通过2026年部长级决定使阳台光伏合法：插电式系统最高800瓦，禁止向电网输出，需通过DEDDIE门户申报。了解规则与尚未确定的期限。',
    publishDate: '2026-07-19',
    dateModified: '2026-10-19',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '关注希腊阳台光伏部长级决定的阳台光伏购买者和政策观察人士',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**是的——希腊已使插电式阳台光伏合法化。依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573），为每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统设立了专门类别，仅限自发自用：流入电网的电量不予补偿。** 无需并网合同、许可或并网费，但所有者必须通过一个尚未开放的数字门户向电网运营商DEDDIE/HEDNO申报——技术规范的截止日期为2026年10月31日，门户启用日期的公布期限为2026年12月31日。征求意见稿（意见征询至2026年7月20日）曾写明装机容量900瓦，希腊媒体报道的最终数字为1,000瓦。希腊在太阳能方面并非从零起步——据部委数据，2020年以来新增了37,407套自发自用系统（1,070兆瓦）——而不向电网输出的设计，针对的是一个在许多日子里已经对太阳能出力限电的电网。本页是对已发布报道的概述，不构成法律建议。',
    quickAnswerTop: {
      zh: {
        question: '希腊的阳台光伏合法吗？',
        answer: '合法，但有条件。依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573），为每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式阳台光伏设立了合法类别，仅限自发自用（注入电网的电量不予补偿）。无需并网合同、许可或并网费，但您必须通过一个启用日期尚待公布（须在2026年12月31日前公布）的门户向DEDDIE/HEDNO申报。征询意见至2026年7月20日的草案曾写明装机容量900瓦；据报道的最终数字为1,000瓦。',
        bullets: [
          '2026年第5299号法律（政府公报Α\'/67/05.05.2026）是授权性的可再生能源法；阳台规则载于2026年9月14日的部长级决定（据报道刊载于公报Β\' 5573）',
          '限值：每个供电点发电功率最高800瓦、装机容量最高1,000瓦——征求意见稿曾写明装机容量900瓦',
          '仅限自发自用：注入电网的电量不予补偿；也允许不带光伏板的独立电池，同样不得向电网输出',
          '无需并网合同、许可或费用；所有者通过DEDDIE/HEDNO的数字门户（使用Taxisnet登录）申报，由安装商或工程师声明合规',
          '仍待落实：技术规范须在2026年10月31日前发布，门户启用日期须在2026年12月31日前公布；在电网容量有限的地区，运营商可禁止新的接入',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '法律、部长级决定与草案', anchor: '#law-vs-md' },
      { label: '希腊并非从零起步', anchor: '#not-from-zero' },
      { label: '为什么不向电网输出——以及为什么是现在', anchor: '#why-zero-feed-in' },
      { label: '登记：门户、声明与期限', anchor: '#registration' },
      { label: '常见问题', anchor: '#faq' },
      { label: '来源', anchor: '#sources' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '希腊通过2026年9月14日的部长级决定（据报道刊载于政府公报Β\' 5573）使插电式阳台光伏合法化，该决定依据2026年第5299号法律（Α\'/67/05.05.2026）发布；据pv magazine报道，决定自公布之日起生效。',
          '据希腊媒体报道的限值：每个供电点发电功率最高800瓦、装机容量最高1,000瓦，因此无法在同一供电点叠加多套。7月的征求意见稿曾写明装机容量900瓦。',
          '仅限自发自用：流入电网的任何电量都不付费。也允许不带光伏板的独立电池，同样不得向电网输出。',
          '登记是申报而非许可：无需并网合同，也无并网费。所有者通过DEDDIE/HEDNO的数字门户申报系统，由安装商或工程师声明合规。',
          '配套机制尚未就绪：技术规范须在2026年10月31日前发布，门户启用日期须在2026年12月31日前公布。Insider.gr报道称，此前已安装的系统须在门户启用后30天内申报。',
          '在电网容量有限的地区，运营商可限制新的插电式接入。本页概述的是已发布的报道，而非公报文本——不构成法律建议。',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '法律、部长级决定，以及与草案相比的变化',
        content: [
          '**2026年第5299号法律是一部综合性的可再生能源法（政府公报Α\'/67/05.05.2026，2026年5月5日公布）；阳台光伏的规则由2026年9月14日的另一项部长级决定设定（据报道刊载于公报Β\' 5573），据公报索引，该决定同时取代2024年关于自发自用的决定。** 法律本身并不包含阳台专属的功率上限或登记步骤。',
          '**该决定已从草案变为正式发布的规则：公开征询意见于2026年7月20日结束，希腊媒体自2026年9月15日起报道了最终文本。** 据报道的主要变化是装机容量上限：草案写明注入功率800瓦、装机容量900瓦，而Insider.gr和Protothema报道的是每个供电点发电功率800瓦、装机容量1,000瓦。不向电网输出的原则得以保留。草案中经TAXISnet的“数字门户”以及每两年更新一次的责任声明，没有出现在对最终文本的报道中，因此本页不再提及。',
        ],
        callouts: [
          { type: 'warning', text: '本页概述的是对该决定的已发布报道（pv magazine、Insider.gr和Protothema，2026年9月15日），而非政府公报文本本身，各报道在智能电表要求等部分细节上也不一致。购买或安装前，请查阅政府公报Β\' 5573/14.09.2026以及DEDDIE/HEDNO的公告。本页不构成法律建议。' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: '希腊并非从零起步',
        content: [
          '**希腊在太阳能方面并非从零起步：希腊及行业媒体引用的部委数据显示，2020年以来新增了37,407套自发自用可再生能源系统，总计1,070兆瓦，而2015至2019年为1,772套（36兆瓦）。** 其中大部分是规模更大的屋顶自发自用系统，而非插电式套件。',
          '2026年决定新增的，是为由消费者自行安装的小型插电式套件设立的专门类别，此前的自发自用规则并未针对这类产品制定：希腊媒体称该插电式类别为首次确立。',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: '为什么不向电网输出——以及为什么是现在',
        content: [
          '**希腊电网在许多日子里已经对太阳能出力限电数小时，这正是不向电网输出这一设计的背景。** 希腊及行业媒体描述了太阳能高峰时段的供过于求；能够向电网输出的阳台光伏只会加剧这一问题，而不是解决新问题，因此该决定只允许自发自用，而不是欧盟其他国家采用的允许输出的模式。',
          '**行业专家在该决定出台前就批评了这一更广泛的扩张。** 2026年4月，Keep Talking Greece报道称，光伏发电生产商协会会长警告说，在每栋房屋和每个阳台上不受限制地安装光伏，可能把电网推向崩溃边缘，也有声音更希望在阳台上配置电池，而不是增加向电网供电的光伏板。决定公布后，光伏企业协会Helapco表示，该框架纳入了市场的大部分建议（pv magazine）。',
          '环境与能源部将此举定位为能源可及性——让更多消费者掌控自身用电、降低电费并增强能源独立性——部长提到电费可能降低20–30%（Protothema）。这是该部委声明的理由，而不是本页对该框架能否实现这一目标的评估。',
        ],
      },
      registration: {
        id: 'registration',
        title: '登记：门户、声明与期限',
        content: [
          '**登记是申报而非许可：无需与DEDDIE/HEDNO签订并网合同，无需其他批准，也无并网费（据Protothema，标准自发自用并网需缴370欧元费用）。** 购买时，买方向供应商或安装商提供供电点编号，由其通知DEDDIE/HEDNO。安装前，所有者使用Taxisnet凭证登录DEDDIE的数字门户，填写供应商、供电点、地址、系统数据以及安装商或工程师的信息；须提交有效的安装商声明，由安装商或工程师声明安装、接入和运行规范均已满足。',
          '**门户尚不存在。** 技术规范须在2026年10月31日前发布（DEDDIE与ELOT），门户启用日期须在2026年12月31日前公布；Insider.gr报道称，门户启用前已安装的系统须在启用后30天内申报。申报后，DEDDIE将安装遥测设备以记录供电数据，并计划抽查（Protothema）；pv magazine补充称插电式系统须与智能电表一同安装，但我们查阅的希腊报道未提及这一点，因此请自行核实。在电网容量有限的地区，运营商还可禁止新的插电式接入。',
          '**独立电池是单独的类别：** 不带光伏系统的电池允许个人和企业使用，不得向电网输出，并通过方向传感器和遥测在技术上予以保障（Protothema）。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '希腊的阳台光伏合法吗？', a: '合法，但有条件。依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573），为每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式阳台光伏设立了合法类别，仅限自发自用。申报门户尚无启用日期，因此安装前请向DEDDIE/HEDNO确认。' },
          { q: '为什么希腊把阳台光伏设计成“零馈电”，而不像德国或法国那样允许向电网输出？', a: '因为希腊电网在许多日子里已因供过于求而对现有太阳能出力限电数小时。把能够向电网输出的阳台光伏加入一个已在限电的电网，会加剧一个真实而当前的问题，行业人士也曾警告，不受限制地新增光伏会给电网带来压力。' },
          { q: '在希腊，插电式系统最大可以多大？', a: '据希腊媒体报道，每个供电点最高为发电功率800瓦、装机容量1,000瓦，因此无法在同一供电点叠加多套。草案曾写明装机容量900瓦；请在公报文本中核实确切限值。' },
          { q: '在希腊如何登记阳台光伏系统？', a: '这是申报而非许可：无需并网合同、许可或并网费。您向供应商或安装商提供供电点编号，然后通过DEDDIE/HEDNO的数字门户（使用Taxisnet登录）申报系统，并附上安装商或工程师的声明。该门户尚未开放。' },
          { q: '在希腊，阳台光伏的多余电力可以输出到电网吗？', a: '不可以。插电式系统仅用于自发自用，流入电网的电量不予补偿。独立电池适用同样的禁止输出规则。' },
          { q: '我究竟什么时候可以登记？', a: '目前还不行。技术规范须在2026年10月31日前发布，DEDDIE须在2026年12月31日前公布门户启用日期。Insider.gr报道称，此前已安装的系统须在门户启用后30天内申报。' },
          { q: '在希腊，阳台系统可以增加电池吗？', a: '不带光伏系统的独立电池现已允许使用，不得向电网输出；自发自用系统在满足技术要求的前提下也可增加电池（pv magazine、Protothema）。在岛屿上，与光伏一同安装的电池不得向电网注入电力。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        links: [
          { url: 'https://www.pv-magazine.com/2026/09/15/greece-clears-way-for-balcony-pv-systems-up-to-800-w/', title: 'Greece clears way for balcony PV systems up to 800 W — pv magazine', description: '自发自用框架的发布、800瓦上限、禁止输出规则、运营商与电池条款（2026年9月15日）' },
          { url: 'https://www.insider.gr/oikonomia/424738/fotoboltaika-sto-mpalkoni-horis-adeies-kai-telos-syndesis-pos-tha-leitoyrgoyn', title: '无需许可和并网费的阳台光伏 — Insider.gr', description: '每个供电点800瓦与1,000瓦的限值、DEDDIE门户、期限、注入电量不予补偿（希腊语）' },
          { url: 'https://www.protothema.gr/economy/article/1879063/pos-tha-egatastisete-fotovoltaiko-sto-balkoni-eos-kai-30-i-meiosi-sto-kostos-tou-reumatos/', title: '如何安装阳台光伏 — Protothema', description: '登记步骤、10月31日与12月31日期限、标准并网费370欧元、电池（希腊语）' },
          { url: 'https://www.pv-magazine.com/2026/07/22/greece-to-permit-balcony-solar-storage/', title: 'Greece to permit balcony solar, storage — pv magazine', description: '征询意见阶段的草案报道，2020年以来新增超过37,400套自发自用系统（2026年7月22日）' },
          { url: 'https://www.keeptalkinggreece.com/2026/04/29/photovoltaics-on-balconies-energy-experts-reservations/', title: '阳台光伏：专家有保留意见 — Keep Talking Greece', description: '电网限电背景与行业警告（2026年4月29日）' },
          { url: 'https://www.et.gr/', title: '政府公报 — 国家印刷局', description: '政府公报Β\' 5573/14.09.2026及2026年第5299号法律（Α\'/67/05.05.2026）的官方来源' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[800瓦阳台光伏标准：欧盟统一化解读](/zh/balcony-solar/eu-800w-balcony-solar-standard-2027) ——本页机制所处的跨国欧盟趋同背景',
          '[阳台光伏合法吗？各国指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) ——全球法律追踪资料',
        ],
      },
    },
  },
}
