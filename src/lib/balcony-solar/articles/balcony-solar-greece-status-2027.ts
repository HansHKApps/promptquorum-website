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
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-greece-status-2027-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Greece? 2027 Status Report',
    seoTitle: 'Is Balcony Solar Legal in Greece? 2027 Status Report',
    intro: 'Greece already has one of Europe\'s highest penetration rates for small-scale self-consumption solar — roughly 80,000 installations, with 37,407 systems (1,070 MW) added between 2020 and 2026 alone. What it lacked, until a ministerial decision now in public consultation through July 20, 2026, was a dedicated rule for plug-in balcony PV specifically. And the reason that rule lands as a strict "zero feed-in" design isn\'t caution for its own sake: Greece\'s grid already curtails existing solar output for hours most days, and industry experts have publicly warned that unrestricted balcony PV could push it toward collapse.',
    metaDescription: 'Greece\'s balcony solar rules — an 800W grid-injection cap, 900W installed-capacity limit, zero grid export — are set by a ministerial decision in public consultation through July 20, 2026, issued under Law 5299/2026 (passed May 5, 2026). The zero-feed-in design responds to existing grid curtailment from solar oversupply, not just EU-trend-following.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers and policy watchers in Greece tracking the balcony-PV ministerial decision',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Greece has not yet finalized its balcony-solar-specific rules — a ministerial decision setting an 800W grid-injection cap, 900W installed-capacity limit, and a "zero feed-in" design (no grid export permitted at all) was in public consultation through July 20, 2026, issued under the broader Law 5299/2026, which itself was already passed and published on May 5, 2026 (Government Gazette Α\'/67/05.05.2026).** This is not Greece starting from zero on solar: the country already has roughly 80,000 small-scale self-consumption installations and one of Europe\'s highest distributed-renewables penetration rates, with 37,407 systems (1,070 MW) added between 2020 and 2026 alone, versus just 1,772 systems (36 MW) in 2015–2019. The specific gap being closed is the plug-in/balcony consumer category. The zero-feed-in design is a direct response to a real constraint: Greece\'s grid already curtails existing solar output for several hours on many days due to oversupply, and the president of the Photovoltaic Energy Producers Association has publicly warned that letting photovoltaics onto every balcony and rooftop, uncontrolled, risks pushing the grid toward collapse — which is why regulators are steering households toward batteries paired with self-consumption limits rather than toward more grid-feeding capacity.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Greece?',
        answer: 'Not finalized yet, but close: a ministerial decision setting Greece\'s balcony-solar-specific rules (800W grid-injection cap, 900W installed capacity, zero grid export) was in public consultation through July 20, 2026. That decision is issued under Law 5299/2026, a broader renewable-energy law already passed and published on May 5, 2026 — so the enabling law is settled, but the balcony-specific mechanics were still being finalized as of this page\'s publish date. Greece already has a large self-consumption solar base (~80,000 installations); the plug-in/balcony category specifically is the new part. The zero-feed-in design responds to real grid curtailment Greece already experiences from existing solar oversupply, not just to mirror other EU countries.',
        bullets: [
          'Law 5299/2026 (the enabling renewable-energy law) was passed and published May 5, 2026 (Government Gazette Α\'/67/05.05.2026) — it is not itself pending',
          'A separate ministerial decision, issued under that law, sets the balcony-PV-specific mechanics — 800W grid-injection cap, 900W installed capacity, zero grid export — and was in public consultation through July 20, 2026',
          'Registration will be notification-only via a new DEDDIE/HEDNO digital platform (no permit, no license, no connection fee), with anti-islanding protection required so no power reaches the grid',
          'Greece already has ~80,000 small-scale self-consumption solar installations, among Europe\'s highest distributed-renewables penetration rates — 37,407 systems (1,070 MW) added 2020–2026 vs. 1,772 (36 MW) in 2015–2019',
          'The zero-feed-in design responds to a real, current problem: Greece\'s grid already curtails existing solar output for hours on many days, and the Photovoltaic Energy Producers Association\'s president has publicly warned of grid-collapse risk from unrestricted additional PV — regulators are steering toward batteries and self-consumption limits, not export capacity',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Law Is Settled — the Balcony-Specific Rules Aren\'t, Yet', anchor: '#law-vs-md' },
      { label: 'Greece Isn\'t Starting From Zero', anchor: '#not-from-zero' },
      { label: 'Why Zero Feed-In — and Why Now', anchor: '#why-zero-feed-in' },
      { label: 'Registration: What the Draft Requires', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Law 5299/2026, the broad renewable-energy law Greece\'s balcony-solar rules are issued under, was already passed and published on May 5, 2026 (Government Gazette Α\'/67/05.05.2026) — it is settled, not pending.',
          'The balcony-PV-specific mechanics — 800W grid-injection cap, 900W installed capacity, zero grid export — are set by a separate ministerial decision that was in public consultation through July 20, 2026.',
          'Greece already has roughly 80,000 small-scale self-consumption solar installations and one of Europe\'s highest distributed-renewables penetration rates — 37,407 systems (1,070 MW) added 2020–2026 alone, versus 1,772 (36 MW) in 2015–2019. This is a gap-filling rule for one specific product category, not a country starting from scratch.',
          'The "zero feed-in" design is a direct response to existing grid curtailment: Greece\'s grid already cuts solar output for hours on many days due to oversupply, and the Photovoltaic Energy Producers Association\'s president has publicly warned of grid-collapse risk from unrestricted additional balcony/rooftop PV.',
          'Registration will be notification-only via a new DEDDIE/HEDNO digital platform — no permit, no license, no connection fee — with mandatory anti-islanding protection to keep balcony PV output from reaching the grid at all.',
          'Standalone battery storage for self-consumption is being institutionalized as a second, related category alongside balcony PV — also restricted to no grid injection.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'The Law Is Settled — the Balcony-Specific Rules Aren\'t, Yet',
        content: [
          '**Law 5299/2026 is a broad renewable-energy transition law — it transposes EU RED III provisions, accelerates permitting, and designates Renewable Energy Acceleration Areas — and it was passed and published in the Government Gazette (Α\'/67/05.05.2026) on May 5, 2026.** It is not itself in draft or pending; it is enacted law. It does not, on its own, spell out balcony-solar-specific wattage caps or registration steps.',
          '**Those balcony-specific mechanics — the 800W grid-injection cap, the 900W installed-capacity limit, and the zero-feed-in design — are set out in a separate ministerial decision issued under Law 5299/2026\'s authority, and that ministerial decision was the part still in public consultation, through July 20, 2026.** This is a meaningful distinction: describing the whole framework as "not yet law" would be inaccurate, since the enabling statute already passed; describing the balcony-PV rules as fully settled would also be inaccurate, since the decision fixing their exact mechanics had not yet been finalized as of this page\'s publish date.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] This page reports the ministerial decision as drafted for public consultation, closing July 20, 2026 — one day after this page\'s publish date. Confirm the finalized decision text and effective date directly before treating the 800W/900W caps or the zero-feed-in mechanism as settled in final form.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Greece Isn\'t Starting From Zero',
        content: [
          '**Greece already has roughly 80,000 small-scale self-consumption solar installations, one of the highest per-capita penetration rates for distributed renewables in Europe — this is not a market with no existing solar culture.** Growth in this segment has been sharp: 37,407 systems, totaling 1,070 MW, were added between 2020 and 2026, compared with just 1,772 systems (36 MW) across 2015–2019.',
          'What was genuinely missing, before this ministerial decision, was a dedicated rule for the specific plug-in/balcony product category — small, consumer-installed, direct-to-outlet kits, as distinct from the larger self-consumption rooftop systems that make up most of that existing installed base. Before this decision, balcony-specific plug-in kits existed in a regulatory grey zone with no explicit legal framework permitting or prohibiting the category. [VERIFY: single-source, a personal blog account, not corroborated by news/legal sources] That grey zone reportedly meant hardware was sold in Greek shops despite the regulatory void, leaving buyers without clear insurance coverage or legal standing in the event of an electrical incident.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Why Zero Feed-In — and Why Now',
        content: [
          '**Greece\'s grid already curtails existing solar generation — utility-scale and rooftop combined — for several hours on many days, because oversupply already exceeds what the grid can absorb at peak solar hours.** This is the direct context for why the balcony-PV decision is drafted as "zero feed-in" (no grid export permitted at all) rather than the notification-only, export-permitted model used in France, Austria, Belgium, and the Netherlands: adding more export-capable capacity to a grid that is already curtailing existing solar would make an active problem worse, not solve a new one.',
          '**Industry experts have pushed back publicly on the broader rooftop-and-balcony solar expansion this decision is part of.** The president of Greece\'s Photovoltaic Energy Producers Association has warned that allowing photovoltaics on every house and balcony without restriction risks pushing the grid toward collapse, and industry voices have argued that what the moment actually calls for is more battery storage on balconies, not more grid-feeding panels — a tension this page notes as a real, current disagreement rather than a settled consensus.',
          'The Ministry of Environment and Energy has framed the broader push in terms of energy access — describing the goal as giving "more consumers to gain greater control over their energy consumption, reduce electricity bills, and strengthen their energy independence," and one minister described the aim as extending "energy democracy" to every citizen. This is the ministry\'s own framing of the policy goal, presented here as a stated rationale, not as this page\'s independent assessment of whether the framework achieves it.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registration: What the Draft Requires',
        content: [
          '**As drafted, registration is notification-only, not a permit or licensing process: no formal connection agreement with DEDDIE/HEDNO, no additional approvals, and no connection fee.** The process runs through a new DEDDIE/HEDNO digital platform (still under construction as of this page\'s publish date): the supplier notifies DEDDIE/HEDNO at the point of purchase, and the buyer separately notifies via a Digital Gateway — using TAXISnet credentials — up to five days before installation. Installers must submit a Declaration of Responsibility, renewed every two years.',
          '**Every system must include anti-islanding protection, which automatically disconnects the installation during blackouts or local grid faults — the core mechanism ensuring compliance with the zero-feed-in design by keeping output from reaching the grid at all, rather than just discouraging it.** Alongside balcony PV, the same policy push is institutionalizing standalone battery storage as a separate, related self-consumption category — also restricted to no grid injection, for households that want storage without a panel-based system.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar legal in Greece?', a: 'The enabling law (Law 5299/2026) is already passed and published (May 5, 2026). The balcony-PV-specific rules — 800W grid-injection cap, 900W installed capacity, zero grid export — are set by a separate ministerial decision that was in public consultation through July 20, 2026, and had not been finalized as of this page\'s publish date.' },
          { q: 'Why is Greece designing balcony solar as "zero feed-in" instead of allowing export like Germany or France?', a: 'Because Greece\'s grid already curtails existing solar output for hours on many days due to oversupply. Adding export-capable balcony PV to an already-curtailing grid would worsen a real, current problem — the Photovoltaic Energy Producers Association\'s president has publicly warned of grid-collapse risk from unrestricted additional PV, and regulators are steering households toward batteries and self-consumption instead.' },
          { q: 'Hasn\'t Greece had plenty of sun and solar for years — why regulate balcony solar only now?', a: 'Greece already has ~80,000 small-scale self-consumption solar installations and one of Europe\'s highest distributed-renewables penetration rates — it isn\'t new to solar. What was missing was a rule for the specific plug-in/balcony consumer category, which existed in a legal grey zone before this decision. The timing also reflects the grid-curtailment problem the existing solar base has already created, which shaped the zero-feed-in design.' },
          { q: 'How will I register a balcony solar system in Greece?', a: 'As drafted: notification-only via a new DEDDIE/HEDNO digital platform, no permit or connection fee. The supplier notifies DEDDIE/HEDNO at purchase; the buyer separately notifies via a Digital Gateway (TAXISnet credentials) up to five days before installation, and the installer files a Declaration of Responsibility, renewed every two years.' },
          { q: 'Can I export excess balcony solar power to the grid in Greece?', a: 'No — the draft ministerial decision caps grid injection at 800W and permits no export to the grid at all. Every system requires anti-islanding protection to enforce this. Standalone battery storage, a related self-consumption category also being institutionalized, follows the same no-export rule.' },
          { q: 'When will Greece\'s balcony solar rules be finalized?', a: '[VERIFY] The public consultation on the ministerial decision closed July 20, 2026. No confirmed finalization date for the decision itself was available as of this page\'s publish date — check DEDDIE/HEDNO or YPEN directly for current status.' },
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
    intro: 'Griechenland hat bereits eine der höchsten Durchdringungsraten Europas bei kleinen Solaranlagen zur Eigenversorgung — rund 80.000 Anlagen, davon allein 37.407 Systeme (1.070 MW), die zwischen 2020 und 2026 hinzugekommen sind. Was bislang fehlte — bis zu einer ministeriellen Entscheidung, die derzeit bis zum 20. Juli 2026 in öffentlicher Konsultation ist —, war eine eigene Regel speziell für steckerfertige Balkon-PV-Anlagen. Und der Grund, warum diese Regel als striktes „Zero-Feed-in"-Design ausfällt, ist keine Vorsicht um ihrer selbst willen: Griechenlands Stromnetz drosselt bereits an den meisten Tagen stundenweise die bestehende Solareinspeisung, und Branchenexperten haben öffentlich davor gewarnt, dass unbeschränkte Balkon-PV das Netz an den Rand des Kollapses bringen könnte.',
    metaDescription: 'Griechenlands Regeln für Balkonkraftwerke — eine 800-Watt-Grenze für die Netzeinspeisung, eine 900-Watt-Grenze für die installierte Leistung, keinerlei Netzeinspeisung — werden durch eine ministerielle Entscheidung festgelegt, die bis zum 20. Juli 2026 in öffentlicher Konsultation ist und unter dem Gesetz 5299/2026 (verabschiedet am 5. Mai 2026) erlassen wurde. Das Zero-Feed-in-Design reagiert auf die bestehende Netzdrosselung durch ein Solar-Überangebot, nicht nur auf einen EU-weiten Trend.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Käufer von Balkonkraftwerken und politische Beobachter in Griechenland, die die ministerielle Entscheidung zur Balkon-PV verfolgen',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Griechenland hat seine balkon-spezifischen Solarregeln noch nicht endgültig festgelegt — eine ministerielle Entscheidung, die eine 800-Watt-Grenze für die Netzeinspeisung, eine 900-Watt-Grenze für die installierte Leistung und ein „Zero-Feed-in"-Design (überhaupt keine Netzeinspeisung erlaubt) vorsieht, war bis zum 20. Juli 2026 in öffentlicher Konsultation und wurde unter dem breiter gefassten Gesetz 5299/2026 erlassen, das selbst bereits am 5. Mai 2026 verabschiedet und veröffentlicht wurde (Regierungsanzeiger Α\'/67/05.05.2026).** Griechenland startet damit nicht bei null in Sachen Solarenergie: Das Land verfügt bereits über rund 80.000 kleine Anlagen zur Eigenversorgung und eine der höchsten Durchdringungsraten Europas bei dezentralen erneuerbaren Energien, wobei allein zwischen 2020 und 2026 37.407 Systeme (1.070 MW) hinzukamen, gegenüber nur 1.772 Systemen (36 MW) im Zeitraum 2015–2019. Die konkrete Lücke, die geschlossen wird, betrifft die Verbraucherkategorie steckerfertiger Balkonanlagen. Das Zero-Feed-in-Design ist eine direkte Reaktion auf ein reales Problem: Griechenlands Stromnetz drosselt aufgrund eines Überangebots bereits an vielen Tagen stundenweise die bestehende Solareinspeisung, und der Präsident des griechischen Verbands der Photovoltaik-Energieerzeuger hat öffentlich davor gewarnt, dass eine unkontrollierte Zulassung von Photovoltaik auf jedem Balkon und jedem Dach das Netz an den Rand des Kollapses bringen könnte — weshalb die Regulierungsbehörden Haushalte eher in Richtung Batteriespeicher in Kombination mit Eigenverbrauchsgrenzen lenken als in Richtung zusätzlicher netzeinspeisender Kapazität.',
    quickAnswerTop: {
      de: {
        question: 'Ist ein Balkonkraftwerk in Griechenland legal?',
        answer: 'Noch nicht endgültig festgelegt, aber nah dran: Eine ministerielle Entscheidung, die Griechenlands balkon-spezifische Solarregeln festlegt (800-Watt-Grenze für die Netzeinspeisung, 900 Watt installierte Leistung, keinerlei Netzeinspeisung), war bis zum 20. Juli 2026 in öffentlicher Konsultation. Diese Entscheidung wird unter dem Gesetz 5299/2026 erlassen, einem breiter gefassten Gesetz zu erneuerbaren Energien, das bereits am 5. Mai 2026 verabschiedet und veröffentlicht wurde — das ermächtigende Gesetz ist also verabschiedet, aber die balkon-spezifischen Details wurden zum Zeitpunkt der Veröffentlichung dieser Seite noch finalisiert. Griechenland verfügt bereits über eine große Basis an Solaranlagen zur Eigenversorgung (~80.000 Anlagen); neu ist speziell die Kategorie steckerfertiger Balkonanlagen. Das Zero-Feed-in-Design reagiert auf eine reale Netzdrosselung, die Griechenland bereits aufgrund eines bestehenden Solar-Überangebots erlebt, und nicht nur darauf, andere EU-Länder nachzuahmen.',
        bullets: [
          'Das Gesetz 5299/2026 (das ermächtigende Gesetz zu erneuerbaren Energien) wurde am 5. Mai 2026 verabschiedet und veröffentlicht (Regierungsanzeiger Α\'/67/05.05.2026) — es ist selbst nicht mehr in der Schwebe',
          'Eine separate ministerielle Entscheidung, erlassen unter diesem Gesetz, legt die balkon-PV-spezifischen Details fest — 800-Watt-Grenze für die Netzeinspeisung, 900 Watt installierte Leistung, keinerlei Netzeinspeisung — und war bis zum 20. Juli 2026 in öffentlicher Konsultation',
          'Die Registrierung erfolgt voraussichtlich rein meldebasiert über eine neue digitale Plattform von DEDDIE/HEDNO (keine Genehmigung, keine Lizenz, keine Anschlussgebühr), wobei ein Anti-Inselbildungsschutz vorgeschrieben ist, damit kein Strom ins Netz gelangt',
          'Griechenland verfügt bereits über rund 80.000 kleine Solaranlagen zur Eigenversorgung, eine der höchsten Durchdringungsraten Europas bei dezentralen erneuerbaren Energien — 37.407 Systeme (1.070 MW) kamen 2020–2026 hinzu gegenüber 1.772 (36 MW) im Zeitraum 2015–2019',
          'Das Zero-Feed-in-Design reagiert auf ein reales, aktuelles Problem: Griechenlands Netz drosselt bereits an vielen Tagen stundenweise die bestehende Solareinspeisung, und der Präsident des Verbands der Photovoltaik-Energieerzeuger hat öffentlich vor dem Risiko eines Netzkollapses durch unbeschränkte zusätzliche PV-Anlagen gewarnt — die Regulierungsbehörden setzen auf Batteriespeicher und Eigenverbrauchsgrenzen, nicht auf zusätzliche Einspeisekapazität',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Das Gesetz steht fest — die balkon-spezifischen Regeln noch nicht', anchor: '#law-vs-md' },
      { label: 'Griechenland startet nicht bei null', anchor: '#not-from-zero' },
      { label: 'Warum Zero-Feed-in — und warum jetzt', anchor: '#why-zero-feed-in' },
      { label: 'Registrierung: Was der Entwurf vorschreibt', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Das Gesetz 5299/2026, das breit gefasste Gesetz zu erneuerbaren Energien, unter dem Griechenlands Balkon-Solarregeln erlassen werden, wurde bereits am 5. Mai 2026 verabschiedet und veröffentlicht (Regierungsanzeiger Α\'/67/05.05.2026) — es steht fest und ist nicht mehr in der Schwebe.',
          'Die balkon-PV-spezifischen Details — 800-Watt-Grenze für die Netzeinspeisung, 900 Watt installierte Leistung, keinerlei Netzeinspeisung — werden durch eine separate ministerielle Entscheidung festgelegt, die bis zum 20. Juli 2026 in öffentlicher Konsultation war.',
          'Griechenland verfügt bereits über rund 80.000 kleine Solaranlagen zur Eigenversorgung und eine der höchsten Durchdringungsraten Europas bei dezentralen erneuerbaren Energien — allein zwischen 2020 und 2026 kamen 37.407 Systeme (1.070 MW) hinzu, gegenüber 1.772 (36 MW) im Zeitraum 2015–2019. Es handelt sich um eine lückenschließende Regel für eine spezifische Produktkategorie, nicht um ein Land, das bei null anfängt.',
          'Das „Zero-Feed-in"-Design ist eine direkte Reaktion auf die bestehende Netzdrosselung: Griechenlands Netz reduziert aufgrund eines Überangebots bereits an vielen Tagen stundenweise die Solareinspeisung, und der Präsident des Verbands der Photovoltaik-Energieerzeuger hat öffentlich vor dem Risiko eines Netzkollapses durch unbeschränkte zusätzliche Balkon-/Dach-PV-Anlagen gewarnt.',
          'Die Registrierung erfolgt voraussichtlich rein meldebasiert über eine neue digitale Plattform von DEDDIE/HEDNO — keine Genehmigung, keine Lizenz, keine Anschlussgebühr — mit einem verpflichtenden Anti-Inselbildungsschutz, damit die Balkon-PV-Leistung überhaupt nicht ins Netz gelangt.',
          'Eigenständiger Batteriespeicher zur Eigenversorgung wird als zweite, verwandte Kategorie neben der Balkon-PV institutionalisiert — ebenfalls ohne jegliche Netzeinspeisung.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'Das Gesetz steht fest — die balkon-spezifischen Regeln noch nicht',
        content: [
          '**Das Gesetz 5299/2026 ist ein breit gefasstes Gesetz zur Energiewende bei erneuerbaren Energien — es setzt Bestimmungen der EU-RED-III-Richtlinie um, beschleunigt Genehmigungsverfahren und weist Beschleunigungsgebiete für erneuerbare Energien aus — und wurde am 5. Mai 2026 im Regierungsanzeiger (Α\'/67/05.05.2026) verabschiedet und veröffentlicht.** Es befindet sich selbst nicht mehr im Entwurfsstadium oder in der Schwebe; es ist geltendes Recht. Es legt jedoch aus sich heraus keine balkon-solar-spezifischen Leistungsgrenzen oder Registrierungsschritte fest.',
          '**Diese balkon-spezifischen Details — die 800-Watt-Grenze für die Netzeinspeisung, die 900-Watt-Grenze für die installierte Leistung und das Zero-Feed-in-Design — werden in einer separaten ministeriellen Entscheidung festgelegt, die unter der Ermächtigung des Gesetzes 5299/2026 erlassen wurde, und genau diese ministerielle Entscheidung war der Teil, der noch bis zum 20. Juli 2026 in öffentlicher Konsultation war.** Das ist eine bedeutsame Unterscheidung: Den gesamten Rahmen als „noch kein Gesetz" zu bezeichnen wäre ungenau, da das ermächtigende Gesetz bereits verabschiedet ist; die Balkon-PV-Regeln als vollständig feststehend zu bezeichnen wäre ebenfalls ungenau, da die Entscheidung, die ihre genauen Details festlegt, zum Zeitpunkt der Veröffentlichung dieser Seite noch nicht finalisiert war.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] Diese Seite berichtet über die ministerielle Entscheidung im Entwurfsstadium der öffentlichen Konsultation, die am 20. Juli 2026 endet — einen Tag nach dem Veröffentlichungsdatum dieser Seite. Prüfen Sie den finalisierten Entscheidungstext und das Inkrafttretensdatum direkt, bevor Sie die 800-/900-Watt-Grenzen oder den Zero-Feed-in-Mechanismus als endgültig feststehend behandeln.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Griechenland startet nicht bei null',
        content: [
          '**Griechenland verfügt bereits über rund 80.000 kleine Solaranlagen zur Eigenversorgung, eine der höchsten Pro-Kopf-Durchdringungsraten Europas bei dezentralen erneuerbaren Energien — dies ist kein Markt ohne bestehende Solarkultur.** Das Wachstum in diesem Segment war deutlich: Zwischen 2020 und 2026 kamen 37.407 Systeme mit insgesamt 1.070 MW hinzu, gegenüber nur 1.772 Systemen (36 MW) im Zeitraum 2015–2019.',
          'Was vor dieser ministeriellen Entscheidung tatsächlich fehlte, war eine eigene Regel für die spezifische Verbraucherkategorie steckerfertiger Balkonanlagen — kleine, von Verbrauchern selbst installierte Sets zum direkten Anschluss an die Steckdose, im Unterschied zu den größeren Dachanlagen zur Eigenversorgung, die den Großteil dieser bestehenden installierten Basis ausmachen. Vor dieser Entscheidung befanden sich balkon-spezifische Stecker-Sets in einer regulatorischen Grauzone ohne ausdrücklichen rechtlichen Rahmen, der die Kategorie erlaubt oder verbietet. [VERIFY: Einzelquelle, ein persönlicher Blogbeitrag, nicht durch Nachrichten- oder Rechtsquellen bestätigt] Diese Grauzone bedeutete Berichten zufolge, dass die Hardware trotz des regulatorischen Vakuums in griechischen Geschäften verkauft wurde, wodurch Käufer im Fall eines elektrischen Zwischenfalls ohne klaren Versicherungsschutz oder rechtliche Handhabe blieben.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Warum Zero-Feed-in — und warum jetzt',
        content: [
          '**Griechenlands Netz drosselt bereits an vielen Tagen mehrere Stunden lang die bestehende Solarerzeugung — sowohl aus Großanlagen als auch von Dachanlagen —, weil das Überangebot bereits übersteigt, was das Netz zu den solaren Spitzenzeiten aufnehmen kann.** Das ist der unmittelbare Kontext dafür, warum die Balkon-PV-Entscheidung als „Zero-Feed-in" (überhaupt keine Netzeinspeisung erlaubt) konzipiert ist, statt das meldebasierte Modell mit erlaubter Einspeisung zu übernehmen, das in Frankreich, Österreich, Belgien und den Niederlanden gilt: Zusätzliche einspeisefähige Kapazität in ein Netz zu bringen, das bereits bestehende Solareinspeisung drosselt, würde ein aktives Problem verschärfen, statt ein neues zu lösen.',
          '**Branchenexperten haben sich öffentlich kritisch zu der breiteren Ausweitung von Dach- und Balkon-Solaranlagen geäußert, zu der diese Entscheidung gehört.** Der Präsident des griechischen Verbands der Photovoltaik-Energieerzeuger hat gewarnt, dass eine unbeschränkte Zulassung von Photovoltaik auf jedem Haus und jedem Balkon das Netz an den Rand des Kollapses bringen könnte, und Branchenstimmen haben argumentiert, dass der Moment eigentlich mehr Batteriespeicher auf Balkonen erfordere, nicht mehr netzeinspeisende Module — eine Spannung, die diese Seite als reale, aktuelle Meinungsverschiedenheit vermerkt und nicht als feststehenden Konsens.',
          'Das Ministerium für Umwelt und Energie hat den breiteren Vorstoß im Sinne des Energiezugangs gerahmt — das Ziel wird beschrieben als: mehr Verbrauchern „mehr Kontrolle über ihren Energieverbrauch zu geben, Stromrechnungen zu senken und ihre Energieunabhängigkeit zu stärken", und ein Minister bezeichnete das Ziel als Ausweitung der „Energiedemokratie" auf jeden Bürger. Dies ist die eigene Rahmung des Ministeriums für das politische Ziel, hier als angegebene Begründung wiedergegeben — nicht als eigenständige Einschätzung dieser Seite, ob der Rahmen dieses Ziel tatsächlich erreicht.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registrierung: Was der Entwurf vorschreibt',
        content: [
          '**Nach dem Entwurf ist die Registrierung rein meldebasiert und kein Genehmigungs- oder Lizenzierungsverfahren: kein formeller Anschlussvertrag mit DEDDIE/HEDNO, keine zusätzlichen Genehmigungen und keine Anschlussgebühr.** Der Prozess läuft über eine neue digitale Plattform von DEDDIE/HEDNO (zum Zeitpunkt der Veröffentlichung dieser Seite noch im Aufbau): Der Lieferant meldet den Kauf bei DEDDIE/HEDNO, und der Käufer meldet zusätzlich separat über ein Digitales Portal — mit TAXISnet-Zugangsdaten — bis zu fünf Tage vor der Installation. Installateure müssen eine Verantwortungserklärung einreichen, die alle zwei Jahre erneuert wird.',
          '**Jede Anlage muss über einen Anti-Inselbildungsschutz verfügen, der die Installation bei Stromausfällen oder lokalen Netzstörungen automatisch trennt — der zentrale Mechanismus, der die Einhaltung des Zero-Feed-in-Designs sicherstellt, indem er verhindert, dass überhaupt Leistung ins Netz gelangt, statt sie nur zu erschweren.** Neben der Balkon-PV institutionalisiert derselbe politische Vorstoß eigenständigen Batteriespeicher als separate, verwandte Kategorie zur Eigenversorgung — ebenfalls beschränkt auf keinerlei Netzeinspeisung, für Haushalte, die Speicher ohne ein Modul-basiertes System wünschen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein Balkonkraftwerk in Griechenland legal?', a: 'Das ermächtigende Gesetz (Gesetz 5299/2026) ist bereits verabschiedet und veröffentlicht (5. Mai 2026). Die balkon-PV-spezifischen Regeln — 800-Watt-Grenze für die Netzeinspeisung, 900 Watt installierte Leistung, keinerlei Netzeinspeisung — werden durch eine separate ministerielle Entscheidung festgelegt, die bis zum 20. Juli 2026 in öffentlicher Konsultation war und zum Zeitpunkt der Veröffentlichung dieser Seite noch nicht finalisiert war.' },
          { q: 'Warum konzipiert Griechenland Balkon-PV als „Zero-Feed-in" statt wie Deutschland oder Frankreich eine Netzeinspeisung zuzulassen?', a: 'Weil Griechenlands Netz aufgrund eines Überangebots bereits an vielen Tagen stundenweise die bestehende Solareinspeisung drosselt. Zusätzliche einspeisefähige Balkon-PV in ein bereits drosselndes Netz einzubringen, würde ein reales, aktuelles Problem verschärfen — der Präsident des Verbands der Photovoltaik-Energieerzeuger hat öffentlich vor dem Risiko eines Netzkollapses durch unbeschränkte zusätzliche PV-Anlagen gewarnt, und die Regulierungsbehörden lenken Haushalte stattdessen in Richtung Batteriespeicher und Eigenverbrauch.' },
          { q: 'Hat Griechenland nicht schon seit Jahren reichlich Sonne und Solarenergie — warum wird Balkon-PV erst jetzt reguliert?', a: 'Griechenland verfügt bereits über rund 80.000 kleine Solaranlagen zur Eigenversorgung und eine der höchsten Durchdringungsraten Europas bei dezentralen erneuerbaren Energien — Solarenergie ist für das Land nichts Neues. Was fehlte, war eine Regel für die spezifische Verbraucherkategorie steckerfertiger Balkonanlagen, die vor dieser Entscheidung in einer rechtlichen Grauzone existierte. Der Zeitpunkt spiegelt zudem das Netzdrosselungsproblem wider, das die bestehende Solarbasis bereits verursacht hat und das das Zero-Feed-in-Design geprägt hat.' },
          { q: 'Wie melde ich ein Balkonkraftwerk in Griechenland an?', a: 'Nach dem Entwurf: rein meldebasiert über eine neue digitale Plattform von DEDDIE/HEDNO, keine Genehmigung oder Anschlussgebühr. Der Lieferant meldet den Kauf bei DEDDIE/HEDNO; der Käufer meldet zusätzlich separat über ein Digitales Portal (TAXISnet-Zugangsdaten) bis zu fünf Tage vor der Installation, und der Installateur reicht eine Verantwortungserklärung ein, die alle zwei Jahre erneuert wird.' },
          { q: 'Kann ich überschüssigen Balkon-Solarstrom in Griechenland ins Netz einspeisen?', a: 'Nein — der Entwurf der ministeriellen Entscheidung begrenzt die Netzeinspeisung auf 800 Watt und erlaubt überhaupt keine Einspeisung ins Netz. Jede Anlage benötigt einen Anti-Inselbildungsschutz, um dies durchzusetzen. Eigenständiger Batteriespeicher, eine verwandte, ebenfalls institutionalisierte Kategorie zur Eigenversorgung, folgt derselben Regel ohne Einspeisung.' },
          { q: 'Wann werden Griechenlands Regeln für Balkonkraftwerke endgültig festgelegt?', a: '[VERIFY] Die öffentliche Konsultation zur ministeriellen Entscheidung endete am 20. Juli 2026. Zum Zeitpunkt der Veröffentlichung dieser Seite lag kein bestätigtes Datum für die Finalisierung der Entscheidung selbst vor — prüfen Sie den aktuellen Status direkt bei DEDDIE/HEDNO oder YPEN.' },
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
    intro: 'Grecia ya tiene una de las tasas de penetración más altas de Europa en energía solar de autoconsumo a pequeña escala — unas 80.000 instalaciones, con 37.407 sistemas (1.070 MW) añadidos solo entre 2020 y 2026. Lo que le faltaba, hasta una decisión ministerial ahora en consulta pública hasta el 20 de julio de 2026, era una norma específica para la energía solar de balcón enchufable. Y la razón por la que esa norma adopta un diseño estricto de «cero inyección a red» no es prudencia porque sí: la red eléctrica de Grecia ya restringe la producción solar existente durante horas la mayoría de los días, y expertos del sector han advertido públicamente que una energía solar de balcón sin restricciones podría empujarla hacia el colapso.',
    metaDescription: 'Las normas de energía solar de balcón de Grecia — un límite de 800 W de inyección a red, un límite de 900 W de potencia instalada, cero exportación a la red — las establece una decisión ministerial en consulta pública hasta el 20 de julio de 2026, emitida en virtud de la Ley 5299/2026 (aprobada el 5 de mayo de 2026). El diseño de cero inyección responde a la restricción de red ya existente por el exceso de oferta solar, no solo para seguir la tendencia de la UE.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón y observadores de políticas en Grecia que siguen la decisión ministerial sobre energía solar de balcón',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**Grecia aún no ha finalizado sus normas específicas para la energía solar de balcón — una decisión ministerial que establece un límite de 800 W de inyección a red, un límite de 900 W de potencia instalada y un diseño de «cero inyección a red» (sin exportación a la red en absoluto) estuvo en consulta pública hasta el 20 de julio de 2026, emitida en virtud de la Ley 5299/2026, más amplia, que ya fue aprobada y publicada el 5 de mayo de 2026 (Boletín Oficial del Gobierno Α\'/67/05.05.2026).** Esto no significa que Grecia parta de cero en energía solar: el país ya cuenta con unas 80.000 instalaciones de autoconsumo a pequeña escala y una de las tasas de penetración de renovables distribuidas más altas de Europa, con 37.407 sistemas (1.070 MW) añadidos solo entre 2020 y 2026, frente a apenas 1.772 sistemas (36 MW) en 2015-2019. El vacío concreto que se está cerrando es la categoría de consumidores de sistemas enchufables/de balcón. El diseño de cero inyección es una respuesta directa a una limitación real: la red eléctrica de Grecia ya restringe la producción solar existente durante varias horas en muchos días debido al exceso de oferta, y el presidente de la Asociación de Productores de Energía Fotovoltaica ha advertido públicamente que permitir fotovoltaica en cada balcón y tejado, sin control, corre el riesgo de empujar la red hacia el colapso — por eso los reguladores están orientando a los hogares hacia baterías combinadas con límites de autoconsumo, en lugar de hacia más capacidad de inyección a la red.',
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Grecia?',
        answer: 'Aún no finalizada, pero cerca: una decisión ministerial que establece las normas específicas de Grecia para la energía solar de balcón (límite de 800 W de inyección a red, 900 W de potencia instalada, cero exportación a la red) estuvo en consulta pública hasta el 20 de julio de 2026. Esa decisión se emite en virtud de la Ley 5299/2026, una ley de energías renovables más amplia ya aprobada y publicada el 5 de mayo de 2026 — así que la ley habilitante está resuelta, pero los mecanismos específicos de balcón aún se estaban finalizando en la fecha de publicación de esta página. Grecia ya cuenta con una gran base de energía solar de autoconsumo (~80.000 instalaciones); la categoría enchufable/de balcón es específicamente la parte nueva. El diseño de cero inyección responde a la restricción de red real que Grecia ya experimenta por el exceso de oferta solar existente, no solo para imitar a otros países de la UE.',
        bullets: [
          'La Ley 5299/2026 (la ley habilitante de energías renovables) fue aprobada y publicada el 5 de mayo de 2026 (Boletín Oficial del Gobierno Α\'/67/05.05.2026) — no está pendiente en sí misma',
          'Una decisión ministerial separada, emitida en virtud de esa ley, establece los mecanismos específicos de la energía solar de balcón — límite de 800 W de inyección a red, 900 W de potencia instalada, cero exportación a la red — y estuvo en consulta pública hasta el 20 de julio de 2026',
          'El registro será solo mediante notificación, a través de una nueva plataforma digital de DEDDIE/HEDNO (sin permiso, sin licencia, sin tarifa de conexión), con protección anti-isla obligatoria para que ninguna potencia llegue a la red',
          'Grecia ya cuenta con ~80.000 instalaciones solares de autoconsumo a pequeña escala, entre las tasas de penetración de renovables distribuidas más altas de Europa — 37.407 sistemas (1.070 MW) añadidos entre 2020 y 2026 frente a 1.772 (36 MW) en 2015-2019',
          'El diseño de cero inyección responde a un problema real y actual: la red de Grecia ya restringe la producción solar existente durante horas en muchos días, y el presidente de la Asociación de Productores de Energía Fotovoltaica ha advertido públicamente del riesgo de colapso de la red por fotovoltaica adicional sin restricciones — los reguladores están orientando hacia baterías y límites de autoconsumo, no hacia capacidad de exportación',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'La ley está resuelta — las normas específicas de balcón, aún no', anchor: '#law-vs-md' },
      { label: 'Grecia no parte de cero', anchor: '#not-from-zero' },
      { label: 'Por qué cero inyección — y por qué ahora', anchor: '#why-zero-feed-in' },
      { label: 'Registro: lo que exige el borrador', anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La Ley 5299/2026, la ley amplia de energías renovables bajo la cual se emiten las normas de energía solar de balcón de Grecia, ya fue aprobada y publicada el 5 de mayo de 2026 (Boletín Oficial del Gobierno Α\'/67/05.05.2026) — está resuelta, no pendiente.',
          'Los mecanismos específicos de la energía solar de balcón — límite de 800 W de inyección a red, 900 W de potencia instalada, cero exportación a la red — los establece una decisión ministerial separada que estuvo en consulta pública hasta el 20 de julio de 2026.',
          'Grecia ya cuenta con unas 80.000 instalaciones solares de autoconsumo a pequeña escala y una de las tasas de penetración de renovables distribuidas más altas de Europa — 37.407 sistemas (1.070 MW) añadidos solo entre 2020 y 2026, frente a 1.772 (36 MW) en 2015-2019. Esta es una norma que cierra un vacío para una categoría de producto específica, no un país que parte de cero.',
          'El diseño de «cero inyección a red» es una respuesta directa a la restricción de red existente: la red de Grecia ya reduce la producción solar durante horas en muchos días debido al exceso de oferta, y el presidente de la Asociación de Productores de Energía Fotovoltaica ha advertido públicamente del riesgo de colapso de la red por fotovoltaica adicional sin restricciones en balcones o tejados.',
          'El registro será solo mediante notificación, a través de una nueva plataforma digital de DEDDIE/HEDNO — sin permiso, sin licencia, sin tarifa de conexión — con protección anti-isla obligatoria para que la producción de la energía solar de balcón no llegue a la red en absoluto.',
          'El almacenamiento en batería independiente para autoconsumo se está institucionalizando como una segunda categoría relacionada junto a la energía solar de balcón — también restringida a cero inyección a red.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'La ley está resuelta — las normas específicas de balcón, aún no',
        content: [
          '**La Ley 5299/2026 es una ley amplia de transición a las energías renovables — traspone disposiciones de la RED III de la UE, acelera la tramitación de permisos y designa Áreas de Aceleración de Energías Renovables — y fue aprobada y publicada en el Boletín Oficial del Gobierno (Α\'/67/05.05.2026) el 5 de mayo de 2026.** No está en borrador ni pendiente; es ley vigente. No especifica, por sí misma, los límites de vatios ni los pasos de registro específicos de la energía solar de balcón.',
          '**Esos mecanismos específicos de balcón — el límite de 800 W de inyección a red, el límite de 900 W de potencia instalada y el diseño de cero inyección — se establecen en una decisión ministerial separada emitida bajo la autoridad de la Ley 5299/2026, y esa decisión ministerial fue la parte que aún estaba en consulta pública, hasta el 20 de julio de 2026.** Esta es una distinción relevante: describir todo el marco como «aún no es ley» sería inexacto, ya que la ley habilitante ya fue aprobada; describir las normas de energía solar de balcón como totalmente resueltas también sería inexacto, ya que la decisión que fija sus mecanismos exactos aún no se había finalizado en la fecha de publicación de esta página.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] Esta página informa sobre la decisión ministerial tal como fue redactada para consulta pública, que cerraba el 20 de julio de 2026 — un día después de la fecha de publicación de esta página. Confirme el texto finalizado de la decisión y la fecha de entrada en vigor directamente antes de tratar los límites de 800 W/900 W o el mecanismo de cero inyección como definitivos.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'Grecia no parte de cero',
        content: [
          '**Grecia ya cuenta con unas 80.000 instalaciones solares de autoconsumo a pequeña escala, una de las tasas de penetración per cápita más altas de Europa en renovables distribuidas — este no es un mercado sin cultura solar existente.** El crecimiento en este segmento ha sido pronunciado: se añadieron 37.407 sistemas, con un total de 1.070 MW, entre 2020 y 2026, frente a solo 1.772 sistemas (36 MW) en el periodo 2015-2019.',
          'Lo que realmente faltaba, antes de esta decisión ministerial, era una norma específica para la categoría de producto enchufable/de balcón — kits pequeños, instalados por el propio consumidor, conectados directamente a un enchufe, a diferencia de los sistemas de tejado de autoconsumo más grandes que conforman la mayor parte de esa base instalada existente. Antes de esta decisión, los kits enchufables específicos para balcón existían en una zona gris regulatoria, sin un marco legal explícito que permitiera o prohibiera la categoría. [VERIFY: fuente única, un blog personal, no corroborado por fuentes periodísticas o legales] Esa zona gris, según se informa, significaba que el hardware se vendía en tiendas griegas pese al vacío regulatorio, dejando a los compradores sin cobertura de seguro clara ni respaldo legal en caso de un incidente eléctrico.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Por qué cero inyección — y por qué ahora',
        content: [
          '**La red eléctrica de Grecia ya restringe la generación solar existente — a escala de servicios públicos y de tejado combinadas — durante varias horas en muchos días, porque el exceso de oferta ya supera lo que la red puede absorber en las horas solares punta.** Este es el contexto directo de por qué la decisión sobre energía solar de balcón se redacta como «cero inyección a red» (sin exportación a la red en absoluto), en lugar del modelo de solo notificación con exportación permitida usado en Francia, Austria, Bélgica y los Países Bajos: añadir más capacidad capaz de exportar a una red que ya restringe la energía solar existente empeoraría un problema activo, en lugar de resolver uno nuevo.',
          '**Expertos del sector se han opuesto públicamente a la expansión más amplia de energía solar de tejado y balcón de la que forma parte esta decisión.** El presidente de la Asociación de Productores de Energía Fotovoltaica de Grecia ha advertido que permitir fotovoltaica en cada casa y balcón sin restricciones corre el riesgo de empujar la red hacia el colapso, y voces del sector han argumentado que lo que realmente exige el momento es más almacenamiento en batería en los balcones, no más paneles que alimenten la red — una tensión que esta página señala como un desacuerdo real y actual, no como un consenso establecido.',
          'El Ministerio de Medio Ambiente y Energía ha enmarcado el impulso más amplio en términos de acceso a la energía — describiendo el objetivo como dar «a más consumidores un mayor control sobre su consumo energético, reducir las facturas eléctricas y fortalecer su independencia energética», y un ministro describió el objetivo como extender la «democracia energética» a cada ciudadano. Este es el propio enfoque del ministerio sobre el objetivo político, presentado aquí como una justificación declarada, no como una evaluación independiente de esta página sobre si el marco lo logra.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: lo que exige el borrador',
        content: [
          '**Según lo redactado, el registro es solo mediante notificación, no un proceso de permiso o licencia: sin acuerdo formal de conexión con DEDDIE/HEDNO, sin aprobaciones adicionales y sin tarifa de conexión.** El proceso se realiza a través de una nueva plataforma digital de DEDDIE/HEDNO (aún en construcción en la fecha de publicación de esta página): el proveedor notifica a DEDDIE/HEDNO en el momento de la compra, y el comprador notifica por separado a través de una Puerta de Enlace Digital — usando credenciales de TAXISnet — hasta cinco días antes de la instalación. Los instaladores deben presentar una Declaración de Responsabilidad, renovada cada dos años.',
          '**Todo sistema debe incluir protección anti-isla, que desconecta automáticamente la instalación durante cortes de luz o fallos locales de la red — el mecanismo central que garantiza el cumplimiento del diseño de cero inyección al impedir que la producción llegue a la red en absoluto, en lugar de solo desalentarlo.** Junto con la energía solar de balcón, el mismo impulso normativo está institucionalizando el almacenamiento en batería independiente como una categoría separada y relacionada de autoconsumo — también restringida a cero inyección a red, para hogares que quieren almacenamiento sin un sistema basado en paneles.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es legal la energía solar de balcón en Grecia?', a: 'La ley habilitante (Ley 5299/2026) ya está aprobada y publicada (5 de mayo de 2026). Las normas específicas de energía solar de balcón — límite de 800 W de inyección a red, 900 W de potencia instalada, cero exportación a la red — las establece una decisión ministerial separada que estuvo en consulta pública hasta el 20 de julio de 2026, y no se había finalizado en la fecha de publicación de esta página.' },
          { q: '¿Por qué diseña Grecia la energía solar de balcón como «cero inyección a red» en lugar de permitir la exportación como Alemania o Francia?', a: 'Porque la red de Grecia ya restringe la producción solar existente durante horas en muchos días debido al exceso de oferta. Añadir energía solar de balcón capaz de exportar a una red que ya restringe empeoraría un problema real y actual — el presidente de la Asociación de Productores de Energía Fotovoltaica ha advertido públicamente del riesgo de colapso de la red por fotovoltaica adicional sin restricciones, y los reguladores están orientando a los hogares hacia baterías y autoconsumo en su lugar.' },
          { q: '¿No ha tenido Grecia sol y energía solar en abundancia durante años? ¿Por qué regular la energía solar de balcón solo ahora?', a: 'Grecia ya cuenta con ~80.000 instalaciones solares de autoconsumo a pequeña escala y una de las tasas de penetración de renovables distribuidas más altas de Europa — no es nueva en energía solar. Lo que faltaba era una norma para la categoría de consumidor enchufable/de balcón específica, que existía en una zona gris legal antes de esta decisión. El momento también refleja el problema de restricción de red que la base solar existente ya ha creado, lo que dio forma al diseño de cero inyección.' },
          { q: '¿Cómo registraré un sistema de energía solar de balcón en Grecia?', a: 'Según lo redactado: solo mediante notificación, a través de una nueva plataforma digital de DEDDIE/HEDNO, sin permiso ni tarifa de conexión. El proveedor notifica a DEDDIE/HEDNO en el momento de la compra; el comprador notifica por separado a través de una Puerta de Enlace Digital (credenciales de TAXISnet) hasta cinco días antes de la instalación, y el instalador presenta una Declaración de Responsabilidad, renovada cada dos años.' },
          { q: '¿Puedo exportar el exceso de energía solar de balcón a la red en Grecia?', a: 'No — el borrador de la decisión ministerial limita la inyección a la red a 800 W y no permite ninguna exportación a la red en absoluto. Todo sistema requiere protección anti-isla para hacer cumplir esto. El almacenamiento en batería independiente, una categoría relacionada de autoconsumo que también se está institucionalizando, sigue la misma norma de no exportación.' },
          { q: '¿Cuándo se finalizarán las normas de energía solar de balcón de Grecia?', a: '[VERIFY] La consulta pública sobre la decisión ministerial cerró el 20 de julio de 2026. No había una fecha confirmada de finalización de la decisión en sí disponible en la fecha de publicación de esta página — consulte directamente a DEDDIE/HEDNO o YPEN para conocer el estado actual.' },
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
    intro: "La Grèce affiche déjà l'un des taux de pénétration les plus élevés d'Europe pour le solaire d'autoconsommation à petite échelle — environ 80 000 installations, dont 37 407 systèmes (1 070 MW) ajoutés entre 2020 et 2026 seulement. Ce qui manquait, jusqu'à une décision ministérielle désormais en consultation publique jusqu'au 20 juillet 2026, c'était une règle dédiée spécifiquement au solaire de balcon enfichable. Et si cette règle adopte un dispositif strict de « zéro injection réseau », ce n'est pas par prudence gratuite : le réseau électrique grec restreint déjà la production solaire existante pendant plusieurs heures la plupart des jours, et des experts du secteur ont publiquement averti qu'un solaire de balcon sans restriction pourrait le pousser vers l'effondrement.",
    metaDescription: "Les règles grecques pour le solaire de balcon — un plafond d'injection réseau de 800 W, une limite de puissance installée de 900 W, zéro exportation réseau — sont fixées par une décision ministérielle en consultation publique jusqu'au 20 juillet 2026, prise en vertu de la loi 5299/2026 (adoptée le 5 mai 2026). Le dispositif zéro injection répond à la restriction de réseau déjà existante due à la surproduction solaire, pas seulement à un suivi de la tendance européenne.",
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon et observateurs des politiques publiques en Grèce suivant la décision ministérielle sur le solaire de balcon",
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: "**La Grèce n'a pas encore finalisé ses règles propres au solaire de balcon — une décision ministérielle fixant un plafond d'injection réseau de 800 W, une limite de puissance installée de 900 W et un dispositif « zéro injection réseau » (aucune exportation réseau autorisée) était en consultation publique jusqu'au 20 juillet 2026, prise en vertu de la loi 5299/2026, plus large, elle-même déjà adoptée et publiée le 5 mai 2026 (Journal officiel du gouvernement Α'/67/05.05.2026).** Il ne s'agit pas pour la Grèce de partir de zéro en matière solaire : le pays compte déjà environ 80 000 installations d'autoconsommation à petite échelle et l'un des taux de pénétration des énergies renouvelables distribuées les plus élevés d'Europe, avec 37 407 systèmes (1 070 MW) ajoutés entre 2020 et 2026 seulement, contre seulement 1 772 systèmes (36 MW) en 2015-2019. Le vide spécifique comblé ici concerne la catégorie grand public du solaire enfichable/de balcon. Le dispositif zéro injection répond directement à une contrainte réelle : le réseau grec restreint déjà la production solaire existante pendant plusieurs heures de nombreux jours en raison de la surproduction, et le président de l'Association des producteurs d'énergie photovoltaïque a publiquement averti que laisser du photovoltaïque sur chaque balcon et chaque toit, sans contrôle, risquait de pousser le réseau vers l'effondrement — c'est pourquoi les régulateurs orientent les ménages vers des batteries associées à des limites d'autoconsommation plutôt que vers davantage de capacité d'injection réseau.",
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal en Grèce ?',
        answer: "Pas encore finalisé, mais presque : une décision ministérielle fixant les règles grecques propres au solaire de balcon (plafond d'injection réseau de 800 W, puissance installée de 900 W, zéro exportation réseau) était en consultation publique jusqu'au 20 juillet 2026. Cette décision est prise en vertu de la loi 5299/2026, une loi plus large sur les énergies renouvelables déjà adoptée et publiée le 5 mai 2026 — la loi habilitante est donc arrêtée, mais les modalités propres au balcon étaient encore en cours de finalisation à la date de publication de cette page. La Grèce dispose déjà d'une importante base solaire d'autoconsommation (~80 000 installations) ; c'est la catégorie enfichable/de balcon spécifiquement qui est nouvelle. Le dispositif zéro injection répond à une restriction réseau réelle que la Grèce connaît déjà du fait de la surproduction solaire existante, pas seulement pour s'aligner sur d'autres pays de l'UE.",
        bullets: [
          "La loi 5299/2026 (la loi habilitante sur les énergies renouvelables) a été adoptée et publiée le 5 mai 2026 (Journal officiel du gouvernement Α'/67/05.05.2026) — elle n'est pas elle-même en attente",
          "Une décision ministérielle distincte, prise en vertu de cette loi, fixe les modalités propres au solaire de balcon — plafond d'injection réseau de 800 W, puissance installée de 900 W, zéro exportation réseau — et était en consultation publique jusqu'au 20 juillet 2026",
          "L'enregistrement se fera par simple notification via une nouvelle plateforme numérique de DEDDIE/HEDNO (aucun permis, aucune licence, aucuns frais de raccordement), avec une protection anti-îlotage obligatoire pour qu'aucune puissance n'atteigne le réseau",
          "La Grèce compte déjà environ 80 000 installations solaires d'autoconsommation à petite échelle, parmi les taux de pénétration des énergies renouvelables distribuées les plus élevés d'Europe — 37 407 systèmes (1 070 MW) ajoutés entre 2020 et 2026, contre 1 772 (36 MW) en 2015-2019",
          "Le dispositif zéro injection répond à un problème réel et actuel : le réseau grec restreint déjà la production solaire existante pendant plusieurs heures de nombreux jours, et le président de l'Association des producteurs d'énergie photovoltaïque a publiquement averti du risque d'effondrement du réseau en cas de photovoltaïque supplémentaire sans restriction — les régulateurs orientent vers les batteries et les limites d'autoconsommation, pas vers davantage de capacité d'exportation",
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: "La loi est arrêtée — les règles propres au balcon, pas encore", anchor: '#law-vs-md' },
      { label: 'La Grèce ne part pas de zéro', anchor: '#not-from-zero' },
      { label: 'Pourquoi zéro injection — et pourquoi maintenant', anchor: '#why-zero-feed-in' },
      { label: "Enregistrement : ce qu'exige le projet", anchor: '#registration' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "La loi 5299/2026, la loi large sur les énergies renouvelables en vertu de laquelle les règles grecques sur le solaire de balcon sont prises, a déjà été adoptée et publiée le 5 mai 2026 (Journal officiel du gouvernement Α'/67/05.05.2026) — elle est arrêtée, pas en attente.",
          "Les modalités propres au solaire de balcon — plafond d'injection réseau de 800 W, puissance installée de 900 W, zéro exportation réseau — sont fixées par une décision ministérielle distincte qui était en consultation publique jusqu'au 20 juillet 2026.",
          "La Grèce compte déjà environ 80 000 installations solaires d'autoconsommation à petite échelle et l'un des taux de pénétration des énergies renouvelables distribuées les plus élevés d'Europe — 37 407 systèmes (1 070 MW) ajoutés entre 2020 et 2026 seulement, contre 1 772 (36 MW) en 2015-2019. Il s'agit d'une règle comblant un vide pour une catégorie de produit précise, pas d'un pays partant de zéro.",
          "Le dispositif « zéro injection réseau » répond directement à la restriction de réseau déjà existante : le réseau grec réduit déjà la production solaire pendant plusieurs heures de nombreux jours en raison de la surproduction, et le président de l'Association des producteurs d'énergie photovoltaïque a publiquement averti du risque d'effondrement du réseau en cas de photovoltaïque supplémentaire sans restriction sur les balcons ou les toits.",
          "L'enregistrement se fera par simple notification via une nouvelle plateforme numérique de DEDDIE/HEDNO — aucun permis, aucune licence, aucuns frais de raccordement — avec une protection anti-îlotage obligatoire pour empêcher toute production solaire de balcon d'atteindre le réseau.",
          "Le stockage sur batterie autonome pour l'autoconsommation est en cours d'institutionnalisation comme seconde catégorie apparentée au solaire de balcon — également restreinte à zéro injection réseau.",
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: "La loi est arrêtée — les règles propres au balcon, pas encore",
        content: [
          "**La loi 5299/2026 est une loi large de transition vers les énergies renouvelables — elle transpose des dispositions de la directive européenne RED III, accélère les procédures de permis et désigne des zones d'accélération des énergies renouvelables — et elle a été adoptée et publiée au Journal officiel du gouvernement (Α'/67/05.05.2026) le 5 mai 2026.** Elle n'est elle-même ni en projet ni en attente ; il s'agit d'un texte de loi en vigueur. Elle ne précise cependant pas, à elle seule, les plafonds de puissance ni les modalités d'enregistrement propres au solaire de balcon.",
          "**Ces modalités propres au balcon — le plafond d'injection réseau de 800 W, la limite de puissance installée de 900 W et le dispositif zéro injection — sont fixées dans une décision ministérielle distincte prise en vertu de la loi 5299/2026, et c'est cette décision ministérielle qui restait en consultation publique, jusqu'au 20 juillet 2026.** Il s'agit d'une distinction importante : décrire l'ensemble du dispositif comme « pas encore une loi » serait inexact, puisque la loi habilitante a déjà été adoptée ; décrire les règles du solaire de balcon comme entièrement arrêtées serait également inexact, puisque la décision fixant leurs modalités précises n'avait pas encore été finalisée à la date de publication de cette page.",
        ],
        callouts: [
          { type: 'warning', text: "[VERIFY] Cette page rend compte de la décision ministérielle telle que rédigée pour la consultation publique, se clôturant le 20 juillet 2026 — un jour après la date de publication de cette page. Vérifiez directement le texte définitif de la décision et sa date d'entrée en vigueur avant de considérer les plafonds de 800 W/900 W ou le mécanisme zéro injection comme définitivement arrêtés." },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'La Grèce ne part pas de zéro',
        content: [
          "**La Grèce compte déjà environ 80 000 installations solaires d'autoconsommation à petite échelle, l'un des taux de pénétration par habitant les plus élevés d'Europe pour les énergies renouvelables distribuées — ce n'est pas un marché sans culture solaire existante.** La croissance de ce segment a été marquée : 37 407 systèmes, totalisant 1 070 MW, ont été ajoutés entre 2020 et 2026, contre seulement 1 772 systèmes (36 MW) sur la période 2015-2019.",
          "Ce qui manquait réellement, avant cette décision ministérielle, c'était une règle dédiée à la catégorie de produit enfichable/de balcon en particulier — de petits kits installés par le consommateur lui-même, à brancher directement sur une prise, à la différence des systèmes de toiture d'autoconsommation plus importants qui composent l'essentiel de ce parc installé existant. Avant cette décision, les kits enfichables spécifiques au balcon existaient dans une zone grise réglementaire, sans cadre juridique explicite les autorisant ou les interdisant. [VERIFY : source unique, un billet de blog personnel, non corroboré par des sources journalistiques ou juridiques] Cette zone grise signifiait, selon les informations disponibles, que ce matériel était vendu dans les magasins grecs malgré le vide réglementaire, laissant les acheteurs sans couverture d'assurance claire ni statut juridique en cas d'incident électrique.",
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Pourquoi zéro injection — et pourquoi maintenant',
        content: [
          "**Le réseau électrique grec restreint déjà la production solaire existante — installations de grande envergure et de toiture confondues — pendant plusieurs heures de nombreux jours, car la surproduction dépasse déjà ce que le réseau peut absorber aux heures de pointe solaires.** C'est le contexte direct expliquant pourquoi la décision sur le solaire de balcon est rédigée en « zéro injection réseau » (aucune exportation réseau autorisée) plutôt que selon le modèle à notification simple avec exportation autorisée utilisé en France, en Autriche, en Belgique et aux Pays-Bas : ajouter davantage de capacité capable d'exporter à un réseau qui restreint déjà le solaire existant aggraverait un problème actif au lieu d'en résoudre un nouveau.",
          "**Des experts du secteur se sont publiquement opposés à l'expansion plus large du solaire de toiture et de balcon dont cette décision fait partie.** Le président de l'Association des producteurs d'énergie photovoltaïque de Grèce a averti qu'autoriser le photovoltaïque sur chaque maison et chaque balcon sans restriction risquait de pousser le réseau vers l'effondrement, et des voix du secteur ont fait valoir que ce moment appelle en réalité davantage de stockage sur batterie sur les balcons, et non davantage de panneaux injectant sur le réseau — une tension que cette page relève comme un désaccord réel et actuel, et non comme un consensus arrêté.",
          "Le ministère de l'Environnement et de l'Énergie a présenté cet élan plus large sous l'angle de l'accès à l'énergie — décrivant l'objectif comme permettant « à davantage de consommateurs de mieux maîtriser leur consommation d'énergie, de réduire leurs factures d'électricité et de renforcer leur indépendance énergétique », et un ministre a décrit l'ambition comme l'extension de la « démocratie énergétique » à chaque citoyen. Il s'agit là de la présentation du ministère lui-même de l'objectif politique, reprise ici comme justification déclarée, et non comme une appréciation indépendante de cette page sur le fait que le dispositif y parvienne.",
        ],
      },
      registration: {
        id: 'registration',
        title: "Enregistrement : ce qu'exige le projet",
        content: [
          "**Tel que rédigé, l'enregistrement se fait par simple notification, non par une procédure de permis ou de licence : aucun accord de raccordement formel avec DEDDIE/HEDNO, aucune approbation supplémentaire et aucuns frais de raccordement.** La procédure passe par une nouvelle plateforme numérique de DEDDIE/HEDNO (encore en construction à la date de publication de cette page) : le fournisseur notifie DEDDIE/HEDNO au moment de l'achat, et l'acheteur notifie séparément via une Passerelle numérique — avec des identifiants TAXISnet — jusqu'à cinq jours avant l'installation. Les installateurs doivent déposer une Déclaration de responsabilité, renouvelée tous les deux ans.",
          "**Chaque système doit inclure une protection anti-îlotage, qui déconnecte automatiquement l'installation en cas de coupure ou de défaut local du réseau — le mécanisme central garantissant le respect du dispositif zéro injection en empêchant toute production d'atteindre le réseau, plutôt que de simplement la décourager.** Parallèlement au solaire de balcon, le même mouvement politique institutionnalise le stockage sur batterie autonome comme catégorie distincte et apparentée d'autoconsommation — également restreinte à zéro injection réseau, pour les foyers souhaitant du stockage sans système à base de panneaux.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: "Le solaire de balcon est-il légal en Grèce ?", a: "La loi habilitante (loi 5299/2026) est déjà adoptée et publiée (5 mai 2026). Les règles propres au solaire de balcon — plafond d'injection réseau de 800 W, puissance installée de 900 W, zéro exportation réseau — sont fixées par une décision ministérielle distincte qui était en consultation publique jusqu'au 20 juillet 2026, et n'avait pas été finalisée à la date de publication de cette page." },
          { q: "Pourquoi la Grèce conçoit-elle le solaire de balcon en « zéro injection réseau » plutôt que d'autoriser l'exportation comme l'Allemagne ou la France ?", a: "Parce que le réseau grec restreint déjà la production solaire existante pendant plusieurs heures de nombreux jours en raison de la surproduction. Ajouter du solaire de balcon capable d'exporter à un réseau déjà en restriction aggraverait un problème réel et actuel — le président de l'Association des producteurs d'énergie photovoltaïque a publiquement averti du risque d'effondrement du réseau en cas de photovoltaïque supplémentaire sans restriction, et les régulateurs orientent plutôt les ménages vers les batteries et l'autoconsommation." },
          { q: "La Grèce n'a-t-elle pas déjà du soleil et du solaire en abondance depuis des années — pourquoi réglementer le solaire de balcon seulement maintenant ?", a: "La Grèce compte déjà environ 80 000 installations solaires d'autoconsommation à petite échelle et l'un des taux de pénétration des énergies renouvelables distribuées les plus élevés d'Europe — elle n'est pas nouvelle en matière solaire. Ce qui manquait, c'était une règle pour la catégorie grand public enfichable/de balcon en particulier, qui existait dans une zone grise juridique avant cette décision. Le calendrier reflète également le problème de restriction de réseau que le parc solaire existant a déjà créé, ce qui a façonné le dispositif zéro injection." },
          { q: "Comment vais-je enregistrer un système solaire de balcon en Grèce ?", a: "Tel que rédigé : par simple notification uniquement, via une nouvelle plateforme numérique de DEDDIE/HEDNO, sans permis ni frais de raccordement. Le fournisseur notifie DEDDIE/HEDNO au moment de l'achat ; l'acheteur notifie séparément via une Passerelle numérique (identifiants TAXISnet) jusqu'à cinq jours avant l'installation, et l'installateur dépose une Déclaration de responsabilité, renouvelée tous les deux ans." },
          { q: "Puis-je exporter l'excédent d'électricité solaire de balcon vers le réseau en Grèce ?", a: "Non — le projet de décision ministérielle plafonne l'injection réseau à 800 W et n'autorise aucune exportation réseau. Chaque système nécessite une protection anti-îlotage pour faire respecter cela. Le stockage sur batterie autonome, catégorie apparentée d'autoconsommation également en cours d'institutionnalisation, suit la même règle de non-exportation." },
          { q: "Quand les règles grecques sur le solaire de balcon seront-elles finalisées ?", a: "[VERIFY] La consultation publique sur la décision ministérielle s'est close le 20 juillet 2026. Aucune date de finalisation confirmée pour la décision elle-même n'était disponible à la date de publication de cette page — vérifiez directement auprès de DEDDIE/HEDNO ou du YPEN pour connaître le statut actuel." },
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
    intro: 'تمتلك اليونان بالفعل واحدة من أعلى معدلات الانتشار في أوروبا للطاقة الشمسية صغيرة النطاق للاستهلاك الذاتي — نحو 80,000 تركيب، مع إضافة 37,407 نظامًا (1,070 ميغاواط) بين عامي 2020 و2026 وحدهما. وما كان ينقصها، حتى صدور قرار وزاري يخضع الآن لاستشارة عامة حتى 20 يوليو 2026، هو قاعدة مخصصة للطاقة الشمسية القابلة للتوصيل على الشرفات تحديدًا. والسبب في أن هذه القاعدة تتخذ تصميمًا صارمًا «بلا تغذية عكسية للشبكة إطلاقًا» ليس حذرًا لمجرد الحذر: فشبكة الكهرباء اليونانية تُقلّص بالفعل إنتاج الطاقة الشمسية القائم لساعات في معظم الأيام، وقد حذّر خبراء في القطاع علنًا من أن الطاقة الشمسية غير المقيدة على الشرفات قد تدفع الشبكة نحو الانهيار.',
    metaDescription: 'تُحدَّد قواعد اليونان للطاقة الشمسية على الشرفات — حد أقصى 800 واط للتغذية إلى الشبكة، وحد 900 واط للقدرة المركّبة، وعدم تصدير أي طاقة إلى الشبكة إطلاقًا — بموجب قرار وزاري قيد الاستشارة العامة حتى 20 يوليو 2026، صادر بموجب القانون 5299/2026 (الذي أُقرّ في 5 مايو 2026). ويستجيب تصميم «بلا تغذية عكسية» لتقليص الشبكة القائم بالفعل بسبب فائض العرض الشمسي، وليس فقط لمواكبة الاتجاه الأوروبي.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات ومراقبو السياسات في اليونان الذين يتابعون القرار الوزاري الخاص بالطاقة الشمسية على الشرفات',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**لم تُنهِ اليونان بعد قواعدها الخاصة بالطاقة الشمسية على الشرفات — إذ ظلّ قرار وزاري يحدد حدًا أقصى للتغذية إلى الشبكة قدره 800 واط، وحدًا للقدرة المركّبة قدره 900 واط، وتصميم «بلا تغذية عكسية إطلاقًا» (عدم السماح بأي تصدير إلى الشبكة) قيد الاستشارة العامة حتى 20 يوليو 2026، وهو صادر بموجب القانون الأوسع 5299/2026، الذي أُقرّ ونُشر بالفعل في 5 مايو 2026 (الجريدة الرسمية للحكومة Α\'/67/05.05.2026).** وهذا لا يعني أن اليونان تبدأ من الصفر في مجال الطاقة الشمسية: فالبلاد تمتلك بالفعل نحو 80,000 تركيب صغير للاستهلاك الذاتي وواحدًا من أعلى معدلات انتشار الطاقة المتجددة الموزّعة في أوروبا، مع إضافة 37,407 نظامًا (1,070 ميغاواط) بين عامي 2020 و2026 وحدهما، مقابل 1,772 نظامًا فقط (36 ميغاواط) بين عامي 2015 و2019. والفجوة المحددة التي يجري سدّها هي فئة المستهلكين من أنظمة الطاقة الشمسية القابلة للتوصيل على الشرفات. ويأتي تصميم «بلا تغذية عكسية» استجابةً مباشرة لقيد حقيقي: فشبكة اليونان تُقلّص بالفعل إنتاج الطاقة الشمسية القائم لساعات عدة في أيام كثيرة بسبب فائض العرض، وقد حذّر رئيس جمعية منتجي الطاقة الكهروضوئية علنًا من أن السماح بالطاقة الكهروضوئية على كل شرفة وسطح دون ضوابط قد يدفع الشبكة نحو الانهيار — ولهذا السبب توجّه الجهات التنظيمية الأسر نحو البطاريات المقترنة بحدود الاستهلاك الذاتي بدلاً من مزيد من سعة التغذية إلى الشبكة.',
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟',
        answer: 'لم تُنهَ بعد، لكنها قريبة من ذلك: ظلّ قرار وزاري يحدد قواعد اليونان الخاصة بالطاقة الشمسية على الشرفات (حد أقصى 800 واط للتغذية إلى الشبكة، و900 واط للقدرة المركّبة، وعدم التصدير إلى الشبكة إطلاقًا) قيد الاستشارة العامة حتى 20 يوليو 2026. ويصدر هذا القرار بموجب القانون 5299/2026، وهو قانون أوسع للطاقة المتجددة أُقرّ ونُشر بالفعل في 5 مايو 2026 — أي أن القانون التمكيني مستقر، لكن التفاصيل الخاصة بالشرفات كانت لا تزال قيد الإنهاء حتى تاريخ نشر هذه الصفحة. تمتلك اليونان بالفعل قاعدة كبيرة من الطاقة الشمسية للاستهلاك الذاتي (~80,000 تركيب)؛ والجزء الجديد تحديدًا هو فئة الأنظمة القابلة للتوصيل على الشرفات. ويستجيب تصميم «بلا تغذية عكسية» لتقليص شبكة حقيقي تعيشه اليونان بالفعل بسبب فائض العرض الشمسي القائم، وليس فقط لمحاكاة دول أوروبية أخرى.',
        bullets: [
          'أُقرّ القانون 5299/2026 (القانون التمكيني للطاقة المتجددة) ونُشر في 5 مايو 2026 (الجريدة الرسمية للحكومة Α\'/67/05.05.2026) — وهو ليس معلّقًا بحد ذاته',
          'يحدد قرار وزاري منفصل، صادر بموجب هذا القانون، التفاصيل الخاصة بالطاقة الكهروضوئية على الشرفات — حد أقصى 800 واط للتغذية إلى الشبكة، و900 واط للقدرة المركّبة، وعدم التصدير إلى الشبكة — وكان قيد الاستشارة العامة حتى 20 يوليو 2026',
          'سيكون التسجيل بالإخطار فقط عبر منصة رقمية جديدة تابعة لـ DEDDIE/HEDNO (بلا تصريح، بلا ترخيص، بلا رسوم توصيل)، مع اشتراط حماية من التغذية الجزيرية بحيث لا تصل أي طاقة إلى الشبكة',
          'تمتلك اليونان بالفعل نحو 80,000 تركيب شمسي صغير للاستهلاك الذاتي، من بين أعلى معدلات انتشار الطاقة المتجددة الموزّعة في أوروبا — إضافة 37,407 نظامًا (1,070 ميغاواط) بين 2020 و2026 مقابل 1,772 (36 ميغاواط) بين 2015 و2019',
          'يستجيب تصميم «بلا تغذية عكسية» لمشكلة حقيقية وقائمة: تُقلّص شبكة اليونان بالفعل إنتاج الطاقة الشمسية القائم لساعات في أيام كثيرة، وقد حذّر رئيس جمعية منتجي الطاقة الكهروضوئية علنًا من خطر انهيار الشبكة بسبب طاقة كهروضوئية إضافية غير مقيدة — وتوجّه الجهات التنظيمية نحو البطاريات وحدود الاستهلاك الذاتي، لا نحو سعة تصدير إضافية',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'القانون مستقر — أما القواعد الخاصة بالشرفات فلم تُستقر بعد', anchor: '#law-vs-md' },
      { label: 'اليونان لا تبدأ من الصفر', anchor: '#not-from-zero' },
      { label: 'لماذا بلا تغذية عكسية — ولماذا الآن', anchor: '#why-zero-feed-in' },
      { label: 'التسجيل: ما يتطلبه المشروع', anchor: '#registration' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أُقرّ القانون 5299/2026، وهو القانون الواسع للطاقة المتجددة الذي تصدر بموجبه قواعد اليونان للطاقة الشمسية على الشرفات، ونُشر بالفعل في 5 مايو 2026 (الجريدة الرسمية للحكومة Α\'/67/05.05.2026) — وهو مستقر وغير معلّق.',
          'تُحدَّد التفاصيل الخاصة بالطاقة الكهروضوئية على الشرفات — حد أقصى 800 واط للتغذية إلى الشبكة، و900 واط للقدرة المركّبة، وعدم التصدير إلى الشبكة — بموجب قرار وزاري منفصل كان قيد الاستشارة العامة حتى 20 يوليو 2026.',
          'تمتلك اليونان بالفعل نحو 80,000 تركيب شمسي صغير للاستهلاك الذاتي وواحدًا من أعلى معدلات انتشار الطاقة المتجددة الموزّعة في أوروبا — أُضيف 37,407 نظامًا (1,070 ميغاواط) بين 2020 و2026 وحدهما، مقابل 1,772 (36 ميغاواط) بين 2015 و2019. وهذه قاعدة تسدّ فجوة في فئة منتج محددة، وليست بلدًا يبدأ من الصفر.',
          'يأتي تصميم «بلا تغذية عكسية» استجابة مباشرة لتقليص الشبكة القائم: فشبكة اليونان تُقلّص بالفعل إنتاج الطاقة الشمسية لساعات في أيام كثيرة بسبب فائض العرض، وقد حذّر رئيس جمعية منتجي الطاقة الكهروضوئية علنًا من خطر انهيار الشبكة بسبب طاقة كهروضوئية إضافية غير مقيدة على الشرفات أو الأسطح.',
          'سيكون التسجيل بالإخطار فقط عبر منصة رقمية جديدة تابعة لـ DEDDIE/HEDNO — بلا تصريح، بلا ترخيص، بلا رسوم توصيل — مع حماية إلزامية من التغذية الجزيرية لمنع وصول إنتاج الطاقة الشمسية على الشرفات إلى الشبكة إطلاقًا.',
          'يجري إضفاء الطابع المؤسسي على تخزين البطاريات المستقل للاستهلاك الذاتي كفئة ثانية ذات صلة إلى جانب الطاقة الكهروضوئية على الشرفات — وهي أيضًا مقيّدة بعدم التغذية إلى الشبكة إطلاقًا.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'القانون مستقر — أما القواعد الخاصة بالشرفات فلم تُستقر بعد',
        content: [
          '**القانون 5299/2026 هو قانون واسع لانتقال الطاقة المتجددة — ينقل أحكام توجيه RED III الأوروبي، ويسرّع إجراءات التصاريح، ويحدد مناطق تسريع الطاقة المتجددة — وقد أُقرّ ونُشر في الجريدة الرسمية للحكومة (Α\'/67/05.05.2026) في 5 مايو 2026.** وهو ليس مسودة أو معلّقًا بحد ذاته؛ بل هو قانون نافذ. غير أنه لا يحدد بمفرده حدود القدرة بالواط أو خطوات التسجيل الخاصة بالطاقة الشمسية على الشرفات.',
          '**تُحدَّد هذه التفاصيل الخاصة بالشرفات — حد التغذية إلى الشبكة 800 واط، وحد القدرة المركّبة 900 واط، وتصميم بلا تغذية عكسية — في قرار وزاري منفصل صادر بموجب سلطة القانون 5299/2026، وكان هذا القرار الوزاري هو الجزء الذي بقي قيد الاستشارة العامة حتى 20 يوليو 2026.** وهذا تمييز مهم: فوصف الإطار بأكمله بأنه «ليس قانونًا بعد» سيكون غير دقيق، لأن القانون التمكيني قد أُقرّ بالفعل؛ ووصف قواعد الطاقة الكهروضوئية على الشرفات بأنها مستقرة بالكامل سيكون غير دقيق أيضًا، لأن القرار الذي يحدد تفاصيلها الدقيقة لم يكن قد اكتمل بعد حتى تاريخ نشر هذه الصفحة.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] تنقل هذه الصفحة القرار الوزاري كما صيغ لأغراض الاستشارة العامة، والتي كانت تُغلق في 20 يوليو 2026 — أي بعد يوم واحد من تاريخ نشر هذه الصفحة. تحقق مباشرة من النص النهائي للقرار وتاريخ نفاذه قبل اعتبار حدود 800/900 واط أو آلية بلا تغذية عكسية أمرًا مستقرًا في صيغته النهائية.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'اليونان لا تبدأ من الصفر',
        content: [
          '**تمتلك اليونان بالفعل نحو 80,000 تركيب شمسي صغير للاستهلاك الذاتي، وهو من أعلى معدلات الانتشار للفرد في أوروبا للطاقة المتجددة الموزّعة — وهذا ليس سوقًا بلا ثقافة شمسية قائمة.** وكان النمو في هذا القطاع حادًا: أُضيف 37,407 نظامًا، بإجمالي 1,070 ميغاواط، بين عامي 2020 و2026، مقارنة بـ 1,772 نظامًا فقط (36 ميغاواط) خلال الفترة 2015-2019.',
          'وما كان ينقص فعلًا، قبل هذا القرار الوزاري، هو قاعدة مخصصة لفئة المنتج القابل للتوصيل على الشرفات تحديدًا — وهي مجموعات صغيرة يركّبها المستهلك بنفسه وتُوصَل مباشرة بالمقبس، بخلاف أنظمة الأسطح الأكبر للاستهلاك الذاتي التي تشكّل معظم تلك القاعدة المركّبة القائمة. وقبل هذا القرار، كانت مجموعات التوصيل الخاصة بالشرفات موجودة في منطقة رمادية تنظيمية دون إطار قانوني صريح يجيز الفئة أو يحظرها. [VERIFY: مصدر واحد فقط، وهو مدونة شخصية، لم تتأكد صحته من مصادر إخبارية أو قانونية] وقيل إن هذه المنطقة الرمادية عنت أن الأجهزة كانت تُباع في المتاجر اليونانية رغم الفراغ التنظيمي، ما ترك المشترين دون تغطية تأمينية واضحة أو وضع قانوني في حال وقوع حادث كهربائي.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'لماذا بلا تغذية عكسية — ولماذا الآن',
        content: [
          '**تُقلّص شبكة اليونان بالفعل إنتاج الطاقة الشمسية القائم — من المحطات الكبرى وأنظمة الأسطح معًا — لساعات عدة في أيام كثيرة، لأن فائض العرض يتجاوز بالفعل ما يمكن للشبكة استيعابه في ساعات الذروة الشمسية.** وهذا هو السياق المباشر الذي يفسّر صياغة قرار الطاقة الكهروضوئية على الشرفات كتصميم «بلا تغذية عكسية إطلاقًا» (لا يُسمح بأي تصدير إلى الشبكة) بدلاً من نموذج الإخطار فقط مع السماح بالتصدير المعتمد في فرنسا والنمسا وبلجيكا وهولندا: فإضافة مزيد من السعة القادرة على التصدير إلى شبكة تُقلّص بالفعل الطاقة الشمسية القائمة من شأنه أن يفاقم مشكلة قائمة بدلاً من حل مشكلة جديدة.',
          '**اعترض خبراء في القطاع علنًا على التوسع الأوسع في الطاقة الشمسية على الأسطح والشرفات الذي يندرج هذا القرار ضمنه.** وقد حذّر رئيس جمعية منتجي الطاقة الكهروضوئية في اليونان من أن السماح بالطاقة الكهروضوئية على كل منزل وشرفة دون قيود قد يدفع الشبكة نحو الانهيار، وذهبت أصوات في القطاع إلى أن ما تتطلبه اللحظة فعليًا هو مزيد من تخزين البطاريات على الشرفات، لا مزيد من الألواح المغذّية للشبكة — وهو خلاف تسجله هذه الصفحة باعتباره خلافًا حقيقيًا وقائمًا، لا إجماعًا مستقرًا.',
          'أطّرت وزارة البيئة والطاقة الدفع الأوسع من زاوية الوصول إلى الطاقة — إذ وصفت الهدف بأنه منح «المزيد من المستهلكين قدرًا أكبر من التحكم في استهلاكهم للطاقة، وخفض فواتير الكهرباء، وتعزيز استقلاليتهم الطاقية»، ووصف أحد الوزراء الهدف بأنه توسيع «الديمقراطية الطاقية» لتشمل كل مواطن. وهذا هو تأطير الوزارة نفسها للهدف السياسي، وهو معروض هنا كمبرر مُعلَن، وليس تقييمًا مستقلًا من هذه الصفحة لما إذا كان الإطار يحقق ذلك فعلًا.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'التسجيل: ما يتطلبه المشروع',
        content: [
          '**وفق الصياغة الحالية، يكون التسجيل بالإخطار فقط، وليس عملية تصريح أو ترخيص: لا اتفاقية توصيل رسمية مع DEDDIE/HEDNO، ولا موافقات إضافية، ولا رسوم توصيل.** وتتم العملية عبر منصة رقمية جديدة تابعة لـ DEDDIE/HEDNO (لا تزال قيد الإنشاء حتى تاريخ نشر هذه الصفحة): يُخطر المورّد DEDDIE/HEDNO عند نقطة الشراء، ويقوم المشتري بإخطار منفصل عبر بوابة رقمية — باستخدام بيانات اعتماد TAXISnet — قبل خمسة أيام على الأكثر من التركيب. ويجب على الفنيين المُركّبين تقديم إقرار مسؤولية، يُجدَّد كل سنتين.',
          '**يجب أن يتضمن كل نظام حماية من التغذية الجزيرية، تفصل التركيب تلقائيًا أثناء انقطاع التيار أو أعطال الشبكة المحلية — وهي الآلية الأساسية التي تضمن الامتثال لتصميم بلا تغذية عكسية عبر منع وصول أي إنتاج إلى الشبكة إطلاقًا، لا مجرد الحدّ منه.** وإلى جانب الطاقة الكهروضوئية على الشرفات، يعمل الدفع السياسي نفسه على إضفاء الطابع المؤسسي على تخزين البطاريات المستقل كفئة منفصلة وذات صلة للاستهلاك الذاتي — وهي أيضًا مقيّدة بعدم التغذية إلى الشبكة، للأسر الراغبة في التخزين دون نظام قائم على الألواح.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل الطاقة الشمسية على الشرفات قانونية في اليونان؟', a: 'القانون التمكيني (القانون 5299/2026) أُقرّ ونُشر بالفعل (5 مايو 2026). أما القواعد الخاصة بالطاقة الكهروضوئية على الشرفات — حد أقصى 800 واط للتغذية إلى الشبكة، و900 واط للقدرة المركّبة، وعدم التصدير إلى الشبكة — فتُحدَّد بموجب قرار وزاري منفصل كان قيد الاستشارة العامة حتى 20 يوليو 2026، ولم يكن قد اكتمل حتى تاريخ نشر هذه الصفحة.' },
          { q: 'لماذا تصمم اليونان الطاقة الشمسية على الشرفات على أساس «بلا تغذية عكسية» بدلاً من السماح بالتصدير كما في ألمانيا أو فرنسا؟', a: 'لأن شبكة اليونان تُقلّص بالفعل إنتاج الطاقة الشمسية القائم لساعات في أيام كثيرة بسبب فائض العرض. وإضافة طاقة كهروضوئية على الشرفات قادرة على التصدير إلى شبكة تُقلّص بالفعل من شأنها أن تفاقم مشكلة حقيقية وقائمة — وقد حذّر رئيس جمعية منتجي الطاقة الكهروضوئية علنًا من خطر انهيار الشبكة بسبب طاقة كهروضوئية إضافية غير مقيدة، وتوجّه الجهات التنظيمية الأسر بدلاً من ذلك نحو البطاريات والاستهلاك الذاتي.' },
          { q: 'ألم يكن لدى اليونان أصلاً شمس ووفرة في الطاقة الشمسية منذ سنوات — فلماذا تنظيم الطاقة الشمسية على الشرفات الآن فقط؟', a: 'تمتلك اليونان بالفعل نحو 80,000 تركيب شمسي صغير للاستهلاك الذاتي وواحدًا من أعلى معدلات انتشار الطاقة المتجددة الموزّعة في أوروبا — فهي ليست جديدة على الطاقة الشمسية. وما كان ينقص هو قاعدة لفئة المستهلكين من الأنظمة القابلة للتوصيل على الشرفات تحديدًا، والتي كانت موجودة في منطقة رمادية قانونية قبل هذا القرار. كما يعكس التوقيت مشكلة تقليص الشبكة التي أوجدتها بالفعل القاعدة الشمسية القائمة، وهو ما شكّل تصميم بلا تغذية عكسية.' },
          { q: 'كيف سأسجّل نظام طاقة شمسية على الشرفة في اليونان؟', a: 'وفق الصياغة الحالية: بالإخطار فقط عبر منصة رقمية جديدة تابعة لـ DEDDIE/HEDNO، دون تصريح أو رسوم توصيل. يُخطر المورّد DEDDIE/HEDNO عند الشراء؛ ويُخطر المشتري بشكل منفصل عبر بوابة رقمية (ببيانات اعتماد TAXISnet) قبل خمسة أيام على الأكثر من التركيب، ويقدّم الفني المُركِّب إقرار مسؤولية يُجدَّد كل سنتين.' },
          { q: 'هل يمكنني تصدير فائض الطاقة الشمسية من الشرفة إلى الشبكة في اليونان؟', a: 'لا — إذ يحدّ مشروع القرار الوزاري التغذية إلى الشبكة عند 800 واط ولا يسمح بأي تصدير إلى الشبكة إطلاقًا. ويتطلب كل نظام حماية من التغذية الجزيرية لفرض ذلك. ويخضع تخزين البطاريات المستقل، وهو فئة ذات صلة للاستهلاك الذاتي يجري أيضًا إضفاء الطابع المؤسسي عليها، لقاعدة عدم التصدير نفسها.' },
          { q: 'متى ستُنهى قواعد اليونان للطاقة الشمسية على الشرفات؟', a: '[VERIFY] أُغلقت الاستشارة العامة بشأن القرار الوزاري في 20 يوليو 2026. ولم يتوفر تاريخ مؤكد لإنهاء القرار نفسه حتى تاريخ نشر هذه الصفحة — يُرجى التحقق مباشرة من DEDDIE/HEDNO أو YPEN لمعرفة الوضع الحالي.' },
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
    intro: 'ギリシャはすでに、小規模自家消費型太陽光でヨーロッパ最高水準の普及率を誇ります — 設置件数は約8万件で、2020年から2026年の間だけで37,407件（1,070MW）が追加されました。これまで欠けていたのは、2026年7月20日までパブリックコンサルテーション中の閣僚決定が定める、プラグイン式バルコニー太陽光専用のルールです。そのルールが厳格な「逆潮流ゼロ」設計になっている理由は、単なる慎重さのためではありません。ギリシャの送電網はすでにほとんどの日で数時間、既存の太陽光出力を抑制しており、業界専門家は無制限のバルコニー太陽光が送電網を崩壊に追い込みかねないと公に警告しています。',
    metaDescription: 'ギリシャのバルコニー太陽光ルール — 系統への逆潮流上限800W、設置容量上限900W、逆潮流ゼロ — は、2026年法5299号（2026年5月5日成立）のもとで2026年7月20日までパブリックコンサルテーション中の閣僚決定によって定められます。逆潮流ゼロの設計は、単にEUの流れに追随するためではなく、太陽光の供給過剰による既存の送電網抑制に対応するものです。',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ギリシャのバルコニー太陽光に関する閣僚決定を追うバルコニー太陽光の購入検討者と政策ウォッチャー',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**ギリシャはバルコニー太陽光専用のルールをまだ確定していません。系統への逆潮流上限800W、設置容量上限900W、そして「逆潮流ゼロ」設計（系統への逆潮流を一切認めない）を定める閣僚決定は、2026年7月20日までパブリックコンサルテーション中で、より広範な2026年法5299号のもとで発出されたものです。この法律自体はすでに2026年5月5日に成立・公布されています（政府官報Α\'/67/05.05.2026）。** これはギリシャが太陽光でゼロからのスタートを切るという話ではありません。同国はすでに約8万件の小規模自家消費型設置を有し、ヨーロッパで最も高い分散型再生可能エネルギー普及率の一つを誇ります。2020年から2026年の間だけで37,407件（1,070MW）が追加された一方、2015〜2019年はわずか1,772件（36MW）でした。埋められようとしている具体的な空白は、プラグイン式・バルコニー向け消費者カテゴリーです。逆潮流ゼロの設計は、現実の制約への直接的な対応です。ギリシャの送電網は供給過剰により、すでに多くの日で数時間にわたり既存の太陽光出力を抑制しており、太陽光発電事業者協会の会長は、無制限にすべてのバルコニーと屋根に太陽光を許可すれば送電網を崩壊に追い込むリスクがあると公に警告しています — だからこそ規制当局は、系統への給電容量の追加ではなく、自家消費上限と組み合わせた蓄電池へと家庭を誘導しているのです。',
    quickAnswerTop: {
      ja: {
        question: 'ギリシャでバルコニー太陽光は合法ですか？',
        answer: 'まだ確定していませんが、間近です。ギリシャのバルコニー太陽光専用ルール（系統への逆潮流上限800W、設置容量900W、逆潮流ゼロ）を定める閣僚決定は、2026年7月20日までパブリックコンサルテーション中でした。この決定は2026年法5299号のもとで発出されるもので、この法律自体はすでに2026年5月5日に成立・公布された、より広範な再生可能エネルギー法です — つまり根拠法は確定していますが、バルコニー固有の仕組みは本ページの公開日時点でまだ最終調整中でした。ギリシャにはすでに大規模な自家消費太陽光の基盤（約8万件）があります。プラグイン式・バルコニーカテゴリーこそが新しい部分です。逆潮流ゼロの設計は、他のEU諸国を単に模倣するためではなく、ギリシャがすでに経験している既存の太陽光供給過剰による現実の送電網抑制への対応です。',
        bullets: [
          '2026年法5299号（根拠となる再生可能エネルギー法）は2026年5月5日に成立・公布済み（政府官報Α\'/67/05.05.2026） — それ自体は係属中ではない',
          'その法律のもとで発出される別の閣僚決定が、バルコニー太陽光固有の仕組み — 系統への逆潮流上限800W、設置容量900W、逆潮流ゼロ — を定めており、2026年7月20日までパブリックコンサルテーション中だった',
          '登録は新設のDEDDIE/HEDNOデジタルプラットフォームを通じた届出のみとなる見込み（許可不要、ライセンス不要、接続料不要）で、系統に一切電力が到達しないよう逆潮流防止保護（アンチアイランディング）が義務付けられる',
          'ギリシャはすでに約8万件の小規模自家消費型太陽光設置を有し、ヨーロッパで最も高い分散型再生可能エネルギー普及率の一つ — 2020〜2026年に37,407件（1,070MW）が追加、2015〜2019年の1,772件（36MW）と対照的',
          '逆潮流ゼロの設計は現実かつ現在進行中の問題への対応。ギリシャの送電網はすでに多くの日で数時間、既存の太陽光出力を抑制しており、太陽光発電事業者協会の会長は無制限の追加太陽光による送電網崩壊リスクを公に警告している — 規制当局は輸出容量ではなく、蓄電池と自家消費上限へと誘導している',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '法律は確定済み — バルコニー固有のルールはまだ', anchor: '#law-vs-md' },
      { label: 'ギリシャはゼロからのスタートではない', anchor: '#not-from-zero' },
      { label: 'なぜ逆潮流ゼロなのか — そしてなぜ今なのか', anchor: '#why-zero-feed-in' },
      { label: '登録：草案が求める内容', anchor: '#registration' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ギリシャのバルコニー太陽光ルールの根拠となる広範な再生可能エネルギー法、2026年法5299号は、2026年5月5日にすでに成立・公布されている（政府官報Α\'/67/05.05.2026） — これは確定済みであり、係属中ではない。',
          'バルコニー太陽光固有の仕組み — 系統への逆潮流上限800W、設置容量900W、逆潮流ゼロ — は、2026年7月20日までパブリックコンサルテーション中だった別の閣僚決定によって定められる。',
          'ギリシャはすでに約8万件の小規模自家消費型太陽光設置を有し、ヨーロッパで最も高い分散型再生可能エネルギー普及率の一つを誇る — 2020〜2026年だけで37,407件（1,070MW）が追加された一方、2015〜2019年はわずか1,772件（36MW）だった。これは特定の製品カテゴリーの空白を埋めるルールであり、ゼロから始める国の話ではない。',
          '「逆潮流ゼロ」設計は、既存の送電網抑制への直接的な対応である。ギリシャの送電網は供給過剰により、すでに多くの日で数時間太陽光出力を削減しており、太陽光発電事業者協会の会長は、無制限の追加バルコニー・屋根太陽光による送電網崩壊リスクを公に警告している。',
          '登録は新設のDEDDIE/HEDNOデジタルプラットフォームを通じた届出のみとなる見込みで — 許可不要、ライセンス不要、接続料不要 — バルコニー太陽光の出力が系統に一切到達しないようにするため、逆潮流防止保護が義務付けられる。',
          '自家消費のための独立型蓄電池は、バルコニー太陽光と並ぶ第二の関連カテゴリーとして制度化されつつあり、こちらも系統への逆潮流は認められない。',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '法律は確定済み — バルコニー固有のルールはまだ',
        content: [
          '**2026年法5299号は、EUのRED III規定を国内法化し、許認可手続きを迅速化し、再生可能エネルギー加速地域を指定する広範な再生可能エネルギー転換法であり、2026年5月5日に政府官報（Α\'/67/05.05.2026）で成立・公布されました。** これ自体は草案でも係属中でもなく、施行済みの法律です。ただし、バルコニー太陽光固有のワット数上限や登録手順を単独で定めているわけではありません。',
          '**そうしたバルコニー固有の仕組み — 系統への逆潮流上限800W、設置容量上限900W、逆潮流ゼロ設計 — は、2026年法5299号の権限のもとで発出される別の閣僚決定に定められており、この閣僚決定こそが2026年7月20日までパブリックコンサルテーション中だった部分です。** これは重要な区別です。枠組み全体を「まだ法律ではない」と表現するのは不正確です。根拠となる法律はすでに成立しているからです。一方でバルコニー太陽光のルールを完全に確定済みと表現するのも不正確です。その正確な仕組みを定める決定が、本ページの公開日時点でまだ最終確定していなかったためです。',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] 本ページは、パブリックコンサルテーション用に起草された段階の閣僚決定を報告しており、それは2026年7月20日 — 本ページの公開日の翌日 — に締め切られました。800W／900Wの上限や逆潮流ゼロの仕組みを最終確定版として扱う前に、確定した決定の本文と発効日を直接ご確認ください。' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'ギリシャはゼロからのスタートではない',
        content: [
          '**ギリシャはすでに約8万件の小規模自家消費型太陽光設置を有し、ヨーロッパで最も高い分散型再生可能エネルギーの一人当たり普及率の一つを誇ります — これは既存の太陽光文化がない市場ではありません。** この分野の成長は著しく、2020年から2026年の間に37,407件、合計1,070MWが追加された一方、2015〜2019年はわずか1,772件（36MW）でした。',
          'この閣僚決定の前に本当に欠けていたのは、プラグイン式・バルコニー製品カテゴリーに特化したルールでした — 消費者自身が設置する小型のコンセント直結キットで、既存の設置基盤の大半を占めるより大規模な自家消費型屋根設置システムとは区別されます。この決定以前、バルコニー専用のプラグインキットは、そのカテゴリーを許可も禁止もしない明確な法的枠組みのないまま、規制上のグレーゾーンに存在していました。[VERIFY：単一情報源、個人ブログによるもので、ニュースや法律の情報源による裏付けなし] このグレーゾーンは、報道によれば、規制上の空白にもかかわらず機材がギリシャの店舗で販売されていたことを意味しており、購入者は電気事故が発生した場合に明確な保険の適用も法的立場も持たないままでした。',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'なぜ逆潮流ゼロなのか — そしてなぜ今なのか',
        content: [
          '**ギリシャの送電網は、大規模発電と屋根設置を合わせた既存の太陽光発電をすでに多くの日で数時間抑制しています。これは、供給過剰がすでに太陽光ピーク時間帯に送電網が吸収できる量を超えているためです。** これが、バルコニー太陽光の決定がフランス、オーストリア、ベルギー、オランダで使われている届出のみ・輸出許可モデルではなく、「逆潮流ゼロ」（系統への輸出を一切認めない）として起草されている直接の背景です。すでに既存の太陽光を抑制している送電網に、さらに輸出可能な容量を追加すれば、新しい問題を解決するどころか、現在進行中の問題を悪化させることになります。',
          '**業界専門家は、この決定が一部を成す屋根・バルコニー太陽光のより広範な拡大に対して公に反対の声を上げてきました。** ギリシャの太陽光発電事業者協会の会長は、あらゆる家とバルコニーへの無制限の太陽光導入が送電網を崩壊に追い込むリスクがあると警告しており、業界関係者は、いま本当に必要なのは系統に給電するパネルの増加ではなく、バルコニーでの蓄電池の増加だと主張しています — 本ページはこの緊張関係を、確定したコンセンサスではなく、現実の現在進行中の意見対立として記録します。',
          '環境エネルギー省は、この広範な取り組みをエネルギーアクセスの観点から位置づけ、その目標を「より多くの消費者がエネルギー消費をより自分でコントロールできるようにし、電気料金を削減し、エネルギー独立性を強化すること」と説明しています。ある閣僚は、その狙いをすべての市民に「エネルギー民主主義」を拡大することだと表現しました。これは省庁自身によるこの政策目標の位置づけであり、ここでは述べられた根拠として提示しているにすぎず、この枠組みがその目標を実際に達成しているかどうかについての本ページ独自の評価ではありません。',
        ],
      },
      registration: {
        id: 'registration',
        title: '登録：草案が求める内容',
        content: [
          '**草案の内容によれば、登録は許可制やライセンス制ではなく届出のみです。DEDDIE/HEDNOとの正式な接続契約は不要で、追加の承認や接続料も不要です。** 手続きは新設のDEDDIE/HEDNOデジタルプラットフォーム（本ページ公開時点ではまだ構築中）を通じて行われます。サプライヤーが購入時点でDEDDIE/HEDNOに届け出て、購入者は別途、TAXISnetの認証情報を使い、設置の最大5日前までにデジタルゲートウェイ経由で届け出ます。施工業者は2年ごとに更新される責任申告書を提出する必要があります。',
          '**すべてのシステムには、停電や局所的な系統故障の際に設備を自動的に切り離す逆潮流防止保護（アンチアイランディング）を含める必要があります — これは、単に抑止するのではなく出力を系統に一切到達させないことで逆潮流ゼロ設計の遵守を確保する中核的な仕組みです。** バルコニー太陽光と並行して、同じ政策の流れは独立型蓄電池を、自家消費のための別の関連カテゴリーとして制度化しつつあります — こちらもパネル方式のシステムなしで蓄電を望む家庭向けに、系統への逆潮流ゼロという制約が課されます。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ギリシャでバルコニー太陽光は合法ですか？', a: '根拠となる法律（2026年法5299号）はすでに成立・公布済みです（2026年5月5日）。バルコニー太陽光固有のルール — 系統への逆潮流上限800W、設置容量900W、逆潮流ゼロ — は、2026年7月20日までパブリックコンサルテーション中だった別の閣僚決定によって定められ、本ページの公開日時点でまだ確定していませんでした。' },
          { q: 'ギリシャがバルコニー太陽光をドイツやフランスのように輸出を認めるのではなく「逆潮流ゼロ」として設計しているのはなぜですか？', a: 'ギリシャの送電網は供給過剰により、すでに多くの日で数時間既存の太陽光出力を抑制しているためです。すでに抑制している送電網に輸出可能なバルコニー太陽光を追加すれば、現実の現在進行中の問題を悪化させます — 太陽光発電事業者協会の会長は、無制限の追加太陽光による送電網崩壊リスクを公に警告しており、規制当局は代わりに家庭を蓄電池と自家消費へと誘導しています。' },
          { q: 'ギリシャは何年も前から日照と太陽光に恵まれていたのではないか — なぜ今になってバルコニー太陽光を規制するのですか？', a: 'ギリシャはすでに約8万件の小規模自家消費型太陽光設置を有し、ヨーロッパで最も高い分散型再生可能エネルギー普及率の一つを誇ります — 太陽光は同国にとって目新しいものではありません。欠けていたのは、この決定以前は法的グレーゾーンにあった、プラグイン式・バルコニー消費者カテゴリー固有のルールでした。タイミングはまた、既存の太陽光基盤がすでに生み出していた送電網抑制の問題も反映しており、それが逆潮流ゼロの設計を形作りました。' },
          { q: 'ギリシャでバルコニー太陽光システムをどう登録すればよいですか？', a: '草案によれば、新設のDEDDIE/HEDNOデジタルプラットフォームを通じた届出のみで、許可や接続料は不要です。サプライヤーが購入時にDEDDIE/HEDNOに届け出て、購入者はTAXISnetの認証情報を使い設置の最大5日前までに別途デジタルゲートウェイ経由で届け出ます。施工業者は2年ごとに更新される責任申告書を提出します。' },
          { q: 'ギリシャでバルコニー太陽光の余剰電力を系統に輸出できますか？', a: 'いいえ。閣僚決定の草案では系統への逆潮流は800Wに制限されており、系統への輸出は一切認められていません。すべてのシステムに、これを実効させるための逆潮流防止保護が必要です。独立型蓄電池は、同じく制度化が進んでいる関連の自家消費カテゴリーであり、同じ非輸出ルールに従います。' },
          { q: 'ギリシャのバルコニー太陽光ルールはいつ確定しますか？', a: '[VERIFY] 閣僚決定に関するパブリックコンサルテーションは2026年7月20日に締め切られました。決定自体の確定日は、本ページ公開時点で確認されていませんでした — 最新の状況についてはDEDDIE/HEDNOまたはYPENに直接ご確認ください。' },
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
    intro: '그리스는 이미 소규모 자가소비 태양광 분야에서 유럽 최고 수준의 보급률을 보이고 있습니다 — 약 8만 건의 설치가 있으며, 2020년부터 2026년 사이에만 37,407건(1,070MW)이 추가되었습니다. 그동안 부족했던 것은, 현재 2026년 7월 20일까지 공개 의견수렴 중인 장관령이 정하는 플러그인 방식 발코니 태양광 전용 규정이었습니다. 그리고 이 규정이 엄격한 "역송전 제로" 방식으로 설계된 이유는 단순한 신중함 때문이 아닙니다. 그리스의 전력망은 이미 대부분의 날에 몇 시간씩 기존 태양광 출력을 제한하고 있으며, 업계 전문가들은 규제되지 않은 발코니 태양광이 전력망을 붕괴로 몰아갈 수 있다고 공개적으로 경고해 왔습니다.',
    metaDescription: '그리스의 발코니 태양광 규정 — 계통 역송전 상한 800W, 설치 용량 상한 900W, 역송전 전면 금지 — 은 2026년 법률 제5299호(2026년 5월 5일 통과)에 따라 2026년 7월 20일까지 공개 의견수렴 중인 장관령으로 정해집니다. 역송전 제로 설계는 단순히 EU 흐름을 따르는 것이 아니라, 태양광 공급 과잉으로 인한 기존의 전력망 제한 문제에 대응하는 것입니다.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '그리스의 발코니 태양광 관련 장관령을 추적하는 발코니 태양광 구매자 및 정책 관찰자',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**그리스는 아직 발코니 태양광 전용 규정을 확정하지 않았습니다 — 계통 역송전 상한 800W, 설치 용량 상한 900W, 그리고 "역송전 제로" 방식(계통 역송전을 전혀 허용하지 않음)을 정하는 장관령이 2026년 7월 20일까지 공개 의견수렴 중이었으며, 이는 더 넓은 범위의 2026년 법률 제5299호에 따라 발령된 것입니다. 이 법률 자체는 이미 2026년 5월 5일에 통과되어 공포되었습니다(정부 관보 Α\'/67/05.05.2026).** 이는 그리스가 태양광 분야에서 완전히 처음부터 시작한다는 의미가 아닙니다. 그리스는 이미 약 8만 건의 소규모 자가소비 설치를 보유하고 있으며, 유럽에서 가장 높은 분산형 재생에너지 보급률 중 하나를 기록하고 있습니다. 2020년부터 2026년 사이에만 37,407건(1,070MW)이 추가되었으며, 이는 2015~2019년의 1,772건(36MW)과 대조됩니다. 채워지고 있는 구체적인 공백은 플러그인/발코니 소비자 카테고리입니다. 역송전 제로 설계는 실제 제약에 대한 직접적인 대응입니다. 그리스의 전력망은 공급 과잉으로 인해 이미 많은 날에 몇 시간씩 기존 태양광 출력을 제한하고 있으며, 태양광 에너지 생산자 협회 회장은 모든 발코니와 지붕에 무제한으로 태양광을 허용할 경우 전력망을 붕괴로 몰아갈 위험이 있다고 공개적으로 경고했습니다 — 이것이 규제 당국이 계통 송전 용량 확대 대신 자가소비 한도와 결합된 배터리 쪽으로 가정을 유도하는 이유입니다.',
    quickAnswerTop: {
      ko: {
        question: '그리스에서 발코니 태양광은 합법입니까?',
        answer: '아직 확정되지는 않았지만 거의 근접했습니다: 그리스의 발코니 태양광 전용 규정(계통 역송전 상한 800W, 설치 용량 900W, 역송전 전면 금지)을 정하는 장관령이 2026년 7월 20일까지 공개 의견수렴 중이었습니다. 이 결정은 2026년 법률 제5299호에 따라 발령되는 것으로, 이 법률 자체는 이미 2026년 5월 5일에 통과되어 공포된 더 넓은 범위의 재생에너지법입니다 — 즉 근거 법률은 확정되었지만, 발코니 관련 세부 사항은 이 페이지의 게시일 기준으로 여전히 최종 조율 중이었습니다. 그리스는 이미 대규모 자가소비 태양광 기반(약 8만 건)을 갖추고 있습니다. 새로 추가되는 것은 구체적으로 플러그인/발코니 카테고리입니다. 역송전 제로 설계는 단순히 다른 EU 국가를 모방하기 위한 것이 아니라, 그리스가 이미 겪고 있는 기존 태양광 공급 과잉으로 인한 실제 전력망 제한에 대응하는 것입니다.',
        bullets: [
          '2026년 법률 제5299호(근거가 되는 재생에너지법)는 2026년 5월 5일에 통과되어 공포되었습니다(정부 관보 Α\'/67/05.05.2026) — 이 법 자체는 계류 중이 아닙니다',
          '해당 법률에 따라 발령되는 별도의 장관령이 발코니 태양광 특유의 세부 사항 — 계통 역송전 상한 800W, 설치 용량 900W, 역송전 전면 금지 — 을 정하며, 2026년 7월 20일까지 공개 의견수렴 중이었습니다',
          '등록은 신설되는 DEDDIE/HEDNO 디지털 플랫폼을 통한 신고만으로 이루어질 것으로 보이며(허가·면허·접속 요금 불필요), 계통에 전력이 전혀 도달하지 않도록 역송전 방지 보호 장치가 요구됩니다',
          '그리스는 이미 약 8만 건의 소규모 자가소비 태양광 설치를 보유하고 있으며, 유럽에서 가장 높은 분산형 재생에너지 보급률 중 하나입니다 — 2020~2026년 사이 37,407건(1,070MW) 추가, 2015~2019년의 1,772건(36MW)과 대조',
          '역송전 제로 설계는 실제로 존재하는 현재진행형 문제에 대응합니다. 그리스의 전력망은 이미 많은 날에 몇 시간씩 기존 태양광 출력을 제한하고 있으며, 태양광 에너지 생산자 협회 회장은 규제되지 않은 추가 태양광으로 인한 전력망 붕괴 위험을 공개적으로 경고했습니다 — 규제 당국은 송전 용량이 아니라 배터리와 자가소비 한도 쪽으로 방향을 잡고 있습니다',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '법률은 확정되었지만, 발코니 전용 규정은 아직입니다', anchor: '#law-vs-md' },
      { label: '그리스는 처음부터 시작하는 것이 아닙니다', anchor: '#not-from-zero' },
      { label: '왜 역송전 제로인가 — 그리고 왜 지금인가', anchor: '#why-zero-feed-in' },
      { label: '등록: 초안이 요구하는 사항', anchor: '#registration' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '그리스의 발코니 태양광 규정이 근거로 삼는 광범위한 재생에너지법인 2026년 법률 제5299호는 이미 2026년 5월 5일에 통과되어 공포되었습니다(정부 관보 Α\'/67/05.05.2026) — 이는 확정된 것이며 계류 중이 아닙니다.',
          '발코니 태양광 특유의 세부 사항 — 계통 역송전 상한 800W, 설치 용량 900W, 역송전 전면 금지 — 은 2026년 7월 20일까지 공개 의견수렴 중이었던 별도의 장관령으로 정해집니다.',
          '그리스는 이미 약 8만 건의 소규모 자가소비 태양광 설치를 보유하고 있으며, 유럽에서 가장 높은 분산형 재생에너지 보급률 중 하나입니다 — 2020~2026년 사이에만 37,407건(1,070MW)이 추가된 반면, 2015~2019년은 1,772건(36MW)에 불과했습니다. 이는 특정 제품 카테고리의 공백을 메우는 규정이지, 처음부터 시작하는 국가의 이야기가 아닙니다.',
          '"역송전 제로" 설계는 기존의 전력망 제한에 대한 직접적인 대응입니다. 그리스의 전력망은 공급 과잉으로 인해 이미 많은 날에 몇 시간씩 태양광 출력을 줄이고 있으며, 태양광 에너지 생산자 협회 회장은 규제되지 않은 추가 발코니·지붕 태양광으로 인한 전력망 붕괴 위험을 공개적으로 경고했습니다.',
          '등록은 신설되는 DEDDIE/HEDNO 디지털 플랫폼을 통한 신고만으로 이루어질 것으로 보이며 — 허가·면허·접속 요금 불필요 — 발코니 태양광 출력이 계통에 전혀 도달하지 않도록 역송전 방지 보호 장치가 의무화됩니다.',
          '자가소비를 위한 독립형 배터리 저장 장치는 발코니 태양광과 함께 두 번째 관련 카테고리로 제도화되고 있으며 — 이 역시 계통 역송전이 전혀 허용되지 않습니다.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '법률은 확정되었지만, 발코니 전용 규정은 아직입니다',
        content: [
          '**2026년 법률 제5299호는 EU RED III 규정을 국내법으로 전환하고, 인허가 절차를 가속화하며, 재생에너지 가속화 구역을 지정하는 광범위한 재생에너지 전환법으로, 2026년 5월 5일 정부 관보(Α\'/67/05.05.2026)에 통과·공포되었습니다.** 이 법 자체는 초안 상태이거나 계류 중이 아니라 시행 중인 법률입니다. 다만 이 법만으로는 발코니 태양광 특유의 와트 상한이나 등록 절차를 규정하지 않습니다.',
          '**계통 역송전 상한 800W, 설치 용량 상한 900W, 역송전 제로 설계와 같은 발코니 특유의 세부 사항은 2026년 법률 제5299호의 권한에 따라 발령되는 별도의 장관령에 규정되어 있으며, 2026년 7월 20일까지 여전히 공개 의견수렴 중이었던 부분이 바로 이 장관령입니다.** 이는 의미 있는 구분입니다. 전체 체계를 "아직 법률이 아니다"라고 표현하는 것은 부정확합니다. 근거 법률은 이미 통과되었기 때문입니다. 마찬가지로 발코니 태양광 규정을 완전히 확정된 것으로 표현하는 것도 부정확합니다. 그 정확한 세부 사항을 정하는 결정이 이 페이지의 게시일 기준으로 아직 최종 확정되지 않았기 때문입니다.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] 이 페이지는 공개 의견수렴을 위해 작성된 초안 단계의 장관령을 다루고 있으며, 해당 의견수렴은 이 페이지 게시일 하루 뒤인 2026년 7월 20일에 마감되었습니다. 여기 제시된 800W/900W 상한이나 역송전 제로 메커니즘을 확정된 최종안으로 간주하기 전에, 최종 확정된 결정문과 시행일을 직접 확인하십시오.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: '그리스는 처음부터 시작하는 것이 아닙니다',
        content: [
          '**그리스는 이미 약 8만 건의 소규모 자가소비 태양광 설치를 보유하고 있으며, 이는 유럽에서 가장 높은 1인당 분산형 재생에너지 보급률 중 하나입니다 — 기존 태양광 문화가 없는 시장이 아닙니다.** 이 부문의 성장세는 뚜렷했습니다. 2020년부터 2026년 사이에 총 1,070MW에 달하는 37,407건의 시스템이 추가된 반면, 2015~2019년에는 단 1,772건(36MW)에 그쳤습니다.',
          '이 장관령 이전에 실제로 부족했던 것은, 소비자가 직접 설치하는 콘센트 직결형 소형 키트인 플러그인/발코니 제품 카테고리 전용 규정이었습니다. 이는 기존 설치 기반의 대부분을 차지하는 더 큰 규모의 자가소비형 지붕 시스템과는 구분됩니다. 이 결정 이전에는 발코니 전용 플러그인 키트가, 해당 카테고리를 허용하지도 금지하지도 않는 명시적 법적 체계 없이 규제상의 회색지대에 존재했습니다. [VERIFY: 단일 출처, 개인 블로그 자료이며 뉴스나 법률 자료로 확인되지 않음] 이 회색지대는, 전해지는 바에 따르면, 규제 공백에도 불구하고 그리스 매장에서 하드웨어가 판매되었다는 것을 의미했으며, 이로 인해 구매자는 전기 사고 발생 시 명확한 보험 보장이나 법적 지위 없이 남겨졌습니다.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: '왜 역송전 제로인가 — 그리고 왜 지금인가',
        content: [
          '**그리스의 전력망은 대형 발전 시설과 지붕 설치를 합쳐 이미 많은 날 몇 시간씩 기존 태양광 발전을 제한하고 있습니다. 이는 공급 과잉이 이미 태양광 피크 시간대에 전력망이 흡수할 수 있는 양을 초과하기 때문입니다.** 이것이 발코니 태양광 결정이 프랑스, 오스트리아, 벨기에, 네덜란드에서 사용되는 신고 전용·역송전 허용 모델이 아니라 "역송전 제로"(계통 역송전을 전혀 허용하지 않음)로 초안이 작성된 직접적인 배경입니다. 이미 기존 태양광을 제한하고 있는 전력망에 역송전이 가능한 용량을 더 추가하는 것은 새로운 문제를 해결하기는커녕 기존의 실제 문제를 악화시킬 것입니다.',
          '**업계 전문가들은 이 결정이 속한 더 광범위한 지붕 및 발코니 태양광 확대에 대해 공개적으로 반발해 왔습니다.** 그리스 태양광 에너지 생산자 협회 회장은 모든 주택과 발코니에 제한 없이 태양광을 허용하면 전력망을 붕괴로 몰아갈 위험이 있다고 경고했으며, 업계 관계자들은 지금 진정으로 필요한 것은 계통에 전력을 공급하는 패널의 증가가 아니라 발코니의 배터리 저장 용량 증가라고 주장해 왔습니다 — 이 페이지는 이러한 긴장을 확정된 합의가 아니라 실제로 존재하는 현재진행형 의견 대립으로 기록합니다.',
          '환경에너지부는 이 광범위한 정책 추진을 에너지 접근성의 관점에서 규정해 왔으며, 목표를 "더 많은 소비자가 자신의 에너지 소비를 더 잘 통제하고, 전기 요금을 낮추며, 에너지 독립성을 강화할 수 있도록 하는 것"이라고 설명했습니다. 한 장관은 그 목표를 모든 시민에게 "에너지 민주주의"를 확대하는 것이라고 표현했습니다. 이는 이 정책 목표에 대한 부처 자체의 규정이며, 여기서는 명시된 근거로 제시될 뿐, 해당 체계가 실제로 그 목표를 달성하는지에 대한 이 페이지의 독자적인 평가는 아닙니다.',
        ],
      },
      registration: {
        id: 'registration',
        title: '등록: 초안이 요구하는 사항',
        content: [
          '**초안에 따르면 등록은 허가나 면허 절차가 아니라 신고만으로 이루어집니다. DEDDIE/HEDNO와의 공식 접속 계약이 필요 없고, 추가 승인도 접속 요금도 없습니다.** 절차는 신설되는 DEDDIE/HEDNO 디지털 플랫폼(이 페이지 게시일 기준으로 아직 구축 중)을 통해 진행됩니다. 공급업체가 구매 시점에 DEDDIE/HEDNO에 신고하고, 구매자는 별도로 TAXISnet 인증 정보를 사용해 디지털 게이트웨이를 통해 설치 최대 5일 전까지 신고합니다. 설치업체는 2년마다 갱신되는 책임 신고서를 제출해야 합니다.',
          '**모든 시스템에는 정전이나 국지적 계통 장애 시 설비를 자동으로 분리하는 역송전 방지 보호 장치(anti-islanding)가 포함되어야 합니다 — 이는 단순히 억제하는 것이 아니라 출력이 계통에 아예 도달하지 못하게 함으로써 역송전 제로 설계의 준수를 보장하는 핵심 메커니즘입니다.** 발코니 태양광과 함께, 같은 정책 추진은 독립형 배터리 저장 장치를 자가소비를 위한 별도의 관련 카테고리로 제도화하고 있습니다 — 이 또한 패널 기반 시스템 없이 저장 장치를 원하는 가구를 위해 계통 역송전이 전혀 허용되지 않도록 제한됩니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '그리스에서 발코니 태양광은 합법입니까?', a: '근거 법률(2026년 법률 제5299호)은 이미 통과되어 공포되었습니다(2026년 5월 5일). 발코니 태양광 특유의 규정 — 계통 역송전 상한 800W, 설치 용량 900W, 역송전 전면 금지 — 은 2026년 7월 20일까지 공개 의견수렴 중이었던 별도의 장관령으로 정해지며, 이 페이지 게시일 기준으로 아직 확정되지 않았습니다.' },
          { q: '그리스는 왜 독일이나 프랑스처럼 역송전을 허용하는 대신 발코니 태양광을 "역송전 제로"로 설계합니까?', a: '그리스의 전력망이 공급 과잉으로 인해 이미 많은 날 몇 시간씩 기존 태양광 출력을 제한하고 있기 때문입니다. 이미 제한 중인 전력망에 역송전이 가능한 발코니 태양광을 추가하면 실제로 존재하는 현재진행형 문제가 악화될 것입니다 — 태양광 에너지 생산자 협회 회장은 규제되지 않은 추가 태양광으로 인한 전력망 붕괴 위험을 공개적으로 경고했으며, 규제 당국은 대신 가정을 배터리와 자가소비 쪽으로 유도하고 있습니다.' },
          { q: '그리스는 이미 오래전부터 풍부한 일조량과 태양광을 갖추지 않았습니까 — 왜 이제서야 발코니 태양광을 규제합니까?', a: '그리스는 이미 약 8만 건의 소규모 자가소비 태양광 설치를 보유하고 있으며, 유럽에서 가장 높은 분산형 재생에너지 보급률 중 하나입니다 — 태양광이 새로운 것은 아닙니다. 부족했던 것은 이 결정 이전에 법적 회색지대에 있던 플러그인/발코니 소비자 카테고리 전용 규정이었습니다. 시기 또한 기존 태양광 기반이 이미 만들어낸 전력망 제한 문제를 반영하며, 이것이 역송전 제로 설계를 형성했습니다.' },
          { q: '그리스에서 발코니 태양광 시스템을 어떻게 등록합니까?', a: '초안에 따르면: 신설되는 DEDDIE/HEDNO 디지털 플랫폼을 통한 신고만으로 가능하며, 허가나 접속 요금은 필요 없습니다. 공급업체가 구매 시점에 DEDDIE/HEDNO에 신고하고, 구매자는 TAXISnet 인증 정보를 사용해 설치 최대 5일 전까지 디지털 게이트웨이를 통해 별도로 신고하며, 설치업체는 2년마다 갱신되는 책임 신고서를 제출합니다.' },
          { q: '그리스에서 발코니 태양광의 잉여 전력을 계통으로 내보낼 수 있습니까?', a: '아닙니다 — 장관령 초안은 계통 역송전을 800W로 제한하며 계통으로의 역송전을 전혀 허용하지 않습니다. 모든 시스템은 이를 강제하기 위한 역송전 방지 보호 장치를 갖춰야 합니다. 마찬가지로 제도화가 진행 중인 관련 자가소비 카테고리인 독립형 배터리 저장 장치도 동일한 역송전 금지 규정을 따릅니다.' },
          { q: '그리스의 발코니 태양광 규정은 언제 확정됩니까?', a: '[VERIFY] 장관령에 대한 공개 의견수렴은 2026년 7월 20일에 마감되었습니다. 이 페이지 게시일 기준으로 결정 자체의 확정 일정에 대한 확인된 정보는 없었습니다 — 최신 상황은 DEDDIE/HEDNO 또는 YPEN에 직접 문의하십시오.' },
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
    intro: 'A Grécia já tem uma das taxas de penetração mais altas da Europa em energia solar de autoconsumo de pequena escala — cerca de 80.000 instalações, com 37.407 sistemas (1.070 MW) adicionados somente entre 2020 e 2026. O que faltava, até uma decisão ministerial agora em consulta pública até 20 de julho de 2026, era uma regra dedicada especificamente à energia solar de varanda plug-and-play. E o motivo pelo qual essa regra adota um design rígido de "zero injeção na rede" não é cautela por si só: a rede elétrica da Grécia já restringe a produção solar existente por horas na maioria dos dias, e especialistas do setor alertaram publicamente que a energia solar de varanda sem restrições poderia empurrar a rede para um colapso.',
    metaDescription: 'As regras de energia solar de varanda da Grécia — um limite de 800 W de injeção na rede, um limite de 900 W de potência instalada, zero exportação para a rede — são definidas por uma decisão ministerial em consulta pública até 20 de julho de 2026, emitida sob a Lei 5299/2026 (aprovada em 5 de maio de 2026). O design de zero injeção responde à restrição de rede já existente causada pelo excesso de oferta solar, não apenas para seguir a tendência da UE.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda e observadores de políticas na Grécia acompanhando a decisão ministerial sobre energia solar de varanda',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**A Grécia ainda não finalizou suas regras específicas para energia solar de varanda — uma decisão ministerial que define um limite de 800 W de injeção na rede, um limite de 900 W de potência instalada e um design de "zero injeção na rede" (nenhuma exportação para a rede é permitida) estava em consulta pública até 20 de julho de 2026, emitida sob a Lei 5299/2026, mais ampla, que já havia sido aprovada e publicada em 5 de maio de 2026 (Diário Oficial do Governo Α\'/67/05.05.2026).** Isso não significa que a Grécia esteja começando do zero em energia solar: o país já tem cerca de 80.000 instalações de autoconsumo de pequena escala e uma das taxas de penetração de renováveis distribuídas mais altas da Europa, com 37.407 sistemas (1.070 MW) adicionados somente entre 2020 e 2026, contra apenas 1.772 sistemas (36 MW) em 2015-2019. A lacuna específica sendo fechada é a categoria de consumidor de sistemas plug-and-play/de varanda. O design de zero injeção é uma resposta direta a uma restrição real: a rede da Grécia já restringe a produção solar existente por várias horas em muitos dias devido ao excesso de oferta, e o presidente da Associação de Produtores de Energia Fotovoltaica alertou publicamente que permitir energia fotovoltaica em todas as varandas e telhados, sem controle, corre o risco de empurrar a rede para um colapso — por isso os reguladores estão direcionando as famílias para baterias combinadas com limites de autoconsumo, em vez de mais capacidade de injeção na rede.',
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal na Grécia?',
        answer: 'Ainda não finalizada, mas perto disso: uma decisão ministerial que define as regras específicas da Grécia para energia solar de varanda (limite de 800 W de injeção na rede, 900 W de capacidade instalada, zero exportação para a rede) estava em consulta pública até 20 de julho de 2026. Essa decisão é emitida sob a Lei 5299/2026, uma lei de energia renovável mais ampla já aprovada e publicada em 5 de maio de 2026 — ou seja, a lei habilitante está definida, mas os mecanismos específicos de varanda ainda estavam sendo finalizados na data de publicação desta página. A Grécia já tem uma grande base de energia solar de autoconsumo (~80.000 instalações); a categoria plug-and-play/de varanda é especificamente a parte nova. O design de zero injeção responde a uma restrição de rede real que a Grécia já enfrenta devido ao excesso de oferta solar existente, não apenas para espelhar outros países da UE.',
        bullets: [
          'A Lei 5299/2026 (a lei habilitante de energia renovável) foi aprovada e publicada em 5 de maio de 2026 (Diário Oficial do Governo Α\'/67/05.05.2026) — ela mesma não está pendente',
          'Uma decisão ministerial separada, emitida sob essa lei, define os mecanismos específicos da energia solar fotovoltaica de varanda — limite de 800 W de injeção na rede, 900 W de capacidade instalada, zero exportação para a rede — e estava em consulta pública até 20 de julho de 2026',
          'O registro deve ser apenas por notificação, por meio de uma nova plataforma digital da DEDDIE/HEDNO (sem permissão, sem licença, sem taxa de conexão), com proteção antiilhamento exigida para que nenhuma energia chegue à rede',
          'A Grécia já tem cerca de 80.000 instalações solares de autoconsumo de pequena escala, entre as taxas de penetração de renováveis distribuídas mais altas da Europa — 37.407 sistemas (1.070 MW) adicionados entre 2020-2026 contra 1.772 (36 MW) em 2015-2019',
          'O design de zero injeção responde a um problema real e atual: a rede da Grécia já restringe a produção solar existente por horas em muitos dias, e o presidente da Associação de Produtores de Energia Fotovoltaica alertou publicamente sobre o risco de colapso da rede causado por energia fotovoltaica adicional sem restrições — os reguladores estão direcionando para baterias e limites de autoconsumo, não para capacidade de exportação',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'A lei está definida — as regras específicas de varanda, ainda não', anchor: '#law-vs-md' },
      { label: 'A Grécia não está começando do zero', anchor: '#not-from-zero' },
      { label: 'Por que zero injeção na rede — e por que agora', anchor: '#why-zero-feed-in' },
      { label: 'Registro: o que o rascunho exige', anchor: '#registration' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Lei 5299/2026, a ampla lei de energia renovável sob a qual as regras de energia solar de varanda da Grécia são emitidas, já foi aprovada e publicada em 5 de maio de 2026 (Diário Oficial do Governo Α\'/67/05.05.2026) — ela está definida, não pendente.',
          'Os mecanismos específicos da energia fotovoltaica de varanda — limite de 800 W de injeção na rede, 900 W de capacidade instalada, zero exportação para a rede — são definidos por uma decisão ministerial separada que estava em consulta pública até 20 de julho de 2026.',
          'A Grécia já tem cerca de 80.000 instalações solares de autoconsumo de pequena escala e uma das taxas de penetração de renováveis distribuídas mais altas da Europa — 37.407 sistemas (1.070 MW) adicionados somente entre 2020-2026, contra 1.772 (36 MW) em 2015-2019. Esta é uma regra que preenche uma lacuna para uma categoria específica de produto, não um país começando do zero.',
          'O design de "zero injeção na rede" é uma resposta direta à restrição de rede já existente: a rede da Grécia já reduz a produção solar por horas em muitos dias devido ao excesso de oferta, e o presidente da Associação de Produtores de Energia Fotovoltaica alertou publicamente sobre o risco de colapso da rede causado por energia fotovoltaica adicional sem restrições em varandas ou telhados.',
          'O registro deve ser apenas por notificação, por meio de uma nova plataforma digital da DEDDIE/HEDNO — sem permissão, sem licença, sem taxa de conexão — com proteção antiilhamento obrigatória para impedir que a produção da energia solar de varanda chegue à rede.',
          'O armazenamento independente em bateria para autoconsumo está sendo institucionalizado como uma segunda categoria relacionada, ao lado da energia solar de varanda — também restrita a zero injeção na rede.',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: 'A lei está definida — as regras específicas de varanda, ainda não',
        content: [
          '**A Lei 5299/2026 é uma ampla lei de transição para energia renovável — ela transpõe disposições da RED III da UE, acelera o licenciamento e designa Áreas de Aceleração de Energia Renovável — e foi aprovada e publicada no Diário Oficial do Governo (Α\'/67/05.05.2026) em 5 de maio de 2026.** Ela mesma não está em rascunho nem pendente; é lei em vigor. No entanto, ela não especifica, por si só, os limites de watts ou os passos de registro específicos para energia solar de varanda.',
          '**Esses mecanismos específicos de varanda — o limite de 800 W de injeção na rede, o limite de 900 W de capacidade instalada e o design de zero injeção — são definidos em uma decisão ministerial separada, emitida sob a autoridade da Lei 5299/2026, e essa decisão ministerial era a parte que ainda estava em consulta pública, até 20 de julho de 2026.** Essa é uma distinção importante: descrever todo o marco regulatório como "ainda não é lei" seria impreciso, já que a lei habilitante já foi aprovada; descrever as regras de energia solar de varanda como totalmente definidas também seria impreciso, já que a decisão que fixa seus mecanismos exatos ainda não havia sido finalizada na data de publicação desta página.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] Esta página relata a decisão ministerial conforme redigida para consulta pública, com encerramento em 20 de julho de 2026 — um dia após a data de publicação desta página. Confirme diretamente o texto finalizado da decisão e a data de vigência antes de tratar os limites de 800 W/900 W ou o mecanismo de zero injeção como definitivos.' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: 'A Grécia não está começando do zero',
        content: [
          '**A Grécia já tem cerca de 80.000 instalações solares de autoconsumo de pequena escala, uma das taxas de penetração per capita mais altas da Europa em renováveis distribuídas — este não é um mercado sem cultura solar existente.** O crescimento nesse segmento foi acentuado: 37.407 sistemas, totalizando 1.070 MW, foram adicionados entre 2020 e 2026, contra apenas 1.772 sistemas (36 MW) no período 2015-2019.',
          'O que realmente faltava, antes desta decisão ministerial, era uma regra dedicada à categoria específica de produto plug-and-play/de varanda — kits pequenos, instalados pelo próprio consumidor, conectados diretamente à tomada, diferentes dos sistemas de telhado de autoconsumo maiores que compõem a maior parte dessa base instalada existente. Antes desta decisão, os kits plug-and-play específicos para varanda existiam em uma zona cinzenta regulatória, sem um marco legal explícito que permitisse ou proibisse a categoria. [VERIFY: fonte única, um relato de blog pessoal, não corroborado por fontes jornalísticas/legais] Essa zona cinzenta, segundo relatos, significava que os equipamentos eram vendidos em lojas gregas apesar do vazio regulatório, deixando os compradores sem cobertura de seguro clara ou respaldo legal em caso de um incidente elétrico.',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: 'Por que zero injeção na rede — e por que agora',
        content: [
          '**A rede elétrica da Grécia já restringe a geração solar existente — em usinas de grande escala e telhados combinados — por várias horas em muitos dias, porque o excesso de oferta já ultrapassa o que a rede consegue absorver nos horários de pico solar.** Este é o contexto direto de por que a decisão sobre energia solar de varanda é redigida como "zero injeção na rede" (nenhuma exportação para a rede é permitida), em vez do modelo apenas de notificação com exportação permitida usado na França, Áustria, Bélgica e Países Baixos: adicionar mais capacidade capaz de exportação a uma rede que já está restringindo a energia solar existente pioraria um problema real e atual, em vez de resolver um novo.',
          '**Especialistas do setor se opuseram publicamente à expansão mais ampla de energia solar de telhado e varanda da qual esta decisão faz parte.** O presidente da Associação de Produtores de Energia Fotovoltaica da Grécia alertou que permitir energia fotovoltaica em todas as casas e varandas sem restrição corre o risco de empurrar a rede para o colapso, e vozes do setor argumentaram que o que o momento realmente exige é mais armazenamento em bateria nas varandas, não mais painéis alimentando a rede — uma tensão que esta página registra como um desacordo real e atual, não como um consenso definido.',
          'O Ministério do Meio Ambiente e Energia enquadrou o esforço mais amplo em termos de acesso à energia — descrevendo o objetivo como dar "a mais consumidores um maior controle sobre seu consumo de energia, reduzir as contas de eletricidade e fortalecer sua independência energética", e um ministro descreveu o objetivo como estender a "democracia energética" a cada cidadão. Este é o próprio enquadramento do ministério sobre o objetivo da política, apresentado aqui como uma justificativa declarada, não como uma avaliação independente desta página sobre se o marco regulatório de fato alcança isso.',
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: o que o rascunho exige',
        content: [
          '**Conforme redigido, o registro é apenas por notificação, não um processo de permissão ou licenciamento: nenhum acordo formal de conexão com a DEDDIE/HEDNO, nenhuma aprovação adicional e nenhuma taxa de conexão.** O processo ocorre por meio de uma nova plataforma digital da DEDDIE/HEDNO (ainda em construção na data de publicação desta página): o fornecedor notifica a DEDDIE/HEDNO no momento da compra, e o comprador notifica separadamente por meio de um Portal Digital — usando credenciais do TAXISnet — até cinco dias antes da instalação. Os instaladores devem apresentar uma Declaração de Responsabilidade, renovada a cada dois anos.',
          '**Todo sistema deve incluir proteção antiilhamento, que desconecta automaticamente a instalação durante quedas de energia ou falhas locais na rede — o mecanismo central que garante a conformidade com o design de zero injeção ao impedir que a produção chegue à rede, em vez de apenas desencorajá-la.** Junto com a energia solar de varanda, o mesmo impulso político está institucionalizando o armazenamento independente em bateria como uma categoria separada e relacionada de autoconsumo — também restrita a zero injeção na rede, para famílias que desejam armazenamento sem um sistema baseado em painéis.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A energia solar de varanda é legal na Grécia?', a: 'A lei habilitante (Lei 5299/2026) já foi aprovada e publicada (5 de maio de 2026). As regras específicas de energia fotovoltaica de varanda — limite de 800 W de injeção na rede, 900 W de capacidade instalada, zero exportação para a rede — são definidas por uma decisão ministerial separada que estava em consulta pública até 20 de julho de 2026, e ainda não havia sido finalizada na data de publicação desta página.' },
          { q: 'Por que a Grécia está projetando a energia solar de varanda como "zero injeção na rede" em vez de permitir exportação como Alemanha ou França?', a: 'Porque a rede da Grécia já restringe a produção solar existente por horas em muitos dias devido ao excesso de oferta. Adicionar energia solar de varanda com capacidade de exportação a uma rede que já está restringindo pioraria um problema real e atual — o presidente da Associação de Produtores de Energia Fotovoltaica alertou publicamente sobre o risco de colapso da rede causado por energia fotovoltaica adicional sem restrições, e os reguladores estão direcionando as famílias para baterias e autoconsumo.' },
          { q: 'A Grécia não tem sol e energia solar em abundância há anos — por que regular a energia solar de varanda só agora?', a: 'A Grécia já tem cerca de 80.000 instalações solares de autoconsumo de pequena escala e uma das taxas de penetração de renováveis distribuídas mais altas da Europa — energia solar não é novidade para o país. O que faltava era uma regra para a categoria específica de consumidor plug-and-play/de varanda, que existia em uma zona cinzenta legal antes desta decisão. O momento também reflete o problema de restrição de rede que a base solar existente já criou, o que moldou o design de zero injeção.' },
          { q: 'Como vou registrar um sistema de energia solar de varanda na Grécia?', a: 'Conforme redigido: apenas por notificação, por meio de uma nova plataforma digital da DEDDIE/HEDNO, sem permissão ou taxa de conexão. O fornecedor notifica a DEDDIE/HEDNO no momento da compra; o comprador notifica separadamente por meio de um Portal Digital (credenciais do TAXISnet) até cinco dias antes da instalação, e o instalador apresenta uma Declaração de Responsabilidade, renovada a cada dois anos.' },
          { q: 'Posso exportar o excesso de energia solar de varanda para a rede na Grécia?', a: 'Não — o rascunho da decisão ministerial limita a injeção na rede a 800 W e não permite nenhuma exportação para a rede. Todo sistema requer proteção antiilhamento para fazer valer isso. O armazenamento independente em bateria, uma categoria relacionada de autoconsumo também sendo institucionalizada, segue a mesma regra de não exportação.' },
          { q: 'Quando as regras de energia solar de varanda da Grécia serão finalizadas?', a: '[VERIFY] A consulta pública sobre a decisão ministerial encerrou em 20 de julho de 2026. Nenhuma data confirmada de finalização da decisão em si estava disponível na data de publicação desta página — verifique diretamente com a DEDDIE/HEDNO ou o YPEN para o status atual.' },
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
    intro: '希腊在小型自发自用太阳能领域已拥有欧洲最高的普及率之一——约8万套装机，仅2020年至2026年间就新增了37,407套系统（1,070兆瓦）。此前欠缺的是一项专门针对插电式阳台光伏的规则——该规则由一项部长级决定设定，目前正在公开征询意见，截止到2026年7月20日。而这项规则之所以采取严格的"零馈电"设计，并非出于单纯的谨慎：希腊电网目前在大多数日子里已经每天限制数小时的现有太阳能出力，业内专家已公开警告称，不受限制的阳台光伏可能将电网推向崩溃。',
    metaDescription: '希腊的阳台光伏规则——800瓦的电网馈电上限、900瓦的装机容量限制、零电网出口——由一项部长级决定设定，该决定正在公开征询意见，截止到2026年7月20日，依据2026年第5299号法律（于2026年5月5日通过）发布。零馈电设计是对太阳能供过于求导致的现有电网限电问题的直接回应，而不仅仅是追随欧盟趋势。',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '关注希腊阳台光伏部长级决定的阳台光伏购买者和政策观察人士',
    primaryTerm: 'balcony solar legal status greece',
    targetKeywords: ['balcony solar greece', 'greece balcony solar 800w', 'is balcony solar legal in greece', 'greece solar curtailment balcony pv'],
    leadAnswerBlock: '**希腊尚未最终确定其阳台光伏专属规则——一项设定800瓦电网馈电上限、900瓦装机容量限制以及"零馈电"设计（完全不允许电网出口）的部长级决定，目前正在公开征询意见，截止到2026年7月20日，该决定依据更广泛的2026年第5299号法律发布，而该法律本身已于2026年5月5日通过并公布（政府公报Α\'/67/05.05.2026）。** 这并不意味着希腊在太阳能方面从零开始：该国已拥有约8万套小型自发自用装机，是欧洲分布式可再生能源普及率最高的国家之一，仅2020年至2026年间就新增了37,407套系统（1,070兆瓦），而2015至2019年间仅新增1,772套（36兆瓦）。正在填补的具体空白是插电式/阳台消费类别。零馈电设计是对一个真实制约因素的直接回应：由于供过于求，希腊电网目前已在许多日子里连续数小时限制现有太阳能出力，希腊光伏能源生产商协会主席已公开警告称，若不受控制地允许每个阳台和屋顶安装光伏，可能将电网推向崩溃——这正是监管机构引导家庭转向配合自发自用限制的电池储能、而非更多电网馈电容量的原因。',
    quickAnswerTop: {
      zh: {
        question: '希腊的阳台光伏合法吗？',
        answer: '尚未最终确定，但已接近完成：设定希腊阳台光伏专属规则（800瓦电网馈电上限、900瓦装机容量、零电网出口）的部长级决定，正在公开征询意见，截止到2026年7月20日。该决定依据2026年第5299号法律发布，这是一项更广泛的可再生能源法律，已于2026年5月5日通过并公布——因此授权性法律已经确定，但截至本页发布之日，阳台专属的具体机制仍在最终敲定中。希腊已拥有庞大的自发自用太阳能基础（约8万套装机）；插电式/阳台类别恰恰是新增的部分。零馈电设计是对希腊已经因现有太阳能供过于求而经历的真实电网限电问题的回应，而不仅仅是为了效仿其他欧盟国家。',
        bullets: [
          '2026年第5299号法律（授权性可再生能源法律）已于2026年5月5日通过并公布（政府公报Α\'/67/05.05.2026）——该法律本身并非悬而未决',
          '依据该法律发布的一项独立部长级决定，设定了阳台光伏专属机制——800瓦电网馈电上限、900瓦装机容量、零电网出口——该决定正在公开征询意见，截止到2026年7月20日',
          '注册预计仅需通过一个新的DEDDIE/HEDNO数字平台进行申报（无需许可证、无需执照、无需接入费），并要求配备防孤岛保护，确保没有电力进入电网',
          '希腊已拥有约8万套小型自发自用太阳能装机，是欧洲分布式可再生能源普及率最高的国家之一——2020至2026年间新增37,407套系统（1,070兆瓦），而2015至2019年间仅为1,772套（36兆瓦）',
          '零馈电设计回应的是一个真实存在的当下问题：希腊电网目前已在许多日子里连续数小时限制现有太阳能出力，光伏能源生产商协会主席已公开警告称，不受限制的额外光伏装机存在电网崩溃风险——监管机构正引导市场转向电池储能和自发自用限制，而非出口容量',
        ],
        updatedDate: '2026-07-19',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '法律已经确定——阳台专属规则尚未确定', anchor: '#law-vs-md' },
      { label: '希腊并非从零开始', anchor: '#not-from-zero' },
      { label: '为何采用零馈电——以及为何是现在', anchor: '#why-zero-feed-in' },
      { label: '注册流程：草案的要求', anchor: '#registration' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2026年第5299号法律是希腊阳台光伏规则据以发布的广泛可再生能源法律，已于2026年5月5日通过并公布（政府公报Α\'/67/05.05.2026）——该法律已经确定，并非悬而未决。',
          '阳台光伏专属机制——800瓦电网馈电上限、900瓦装机容量、零电网出口——由一项独立的部长级决定设定，该决定正在公开征询意见，截止到2026年7月20日。',
          '希腊已拥有约8万套小型自发自用太阳能装机，是欧洲分布式可再生能源普及率最高的国家之一——仅2020至2026年间就新增37,407套系统（1,070兆瓦），而2015至2019年间仅为1,772套（36兆瓦）。这是一项针对特定产品类别填补空白的规则，而非一个从零开始的国家。',
          '"零馈电"设计是对现有电网限电问题的直接回应：由于供过于求，希腊电网目前已在许多日子里连续数小时削减太阳能出力，光伏能源生产商协会主席已公开警告称，不受限制的额外阳台/屋顶光伏存在电网崩溃风险。',
          '注册预计仅需通过一个新的DEDDIE/HEDNO数字平台进行申报——无需许可证、无需执照、无需接入费——并强制要求配备防孤岛保护，确保阳台光伏出力完全无法进入电网。',
          '用于自发自用的独立电池储能，正被制度化为与阳台光伏并列的第二个相关类别——同样限制为完全不允许电网馈电。',
        ],
      },
      lawVsMd: {
        id: 'law-vs-md',
        title: '法律已经确定——阳台专属规则尚未确定',
        content: [
          '**2026年第5299号法律是一项广泛的可再生能源转型法律——它转化了欧盟RED III指令的相关条款，加快了审批流程，并划定了可再生能源加速区——该法律已于2026年5月5日在政府公报（Α\'/67/05.05.2026）上通过并公布。** 该法律本身并非草案或悬而未决，而是已生效的法律。但它本身并未具体规定阳台光伏专属的功率上限或注册步骤。',
          '**这些阳台专属机制——800瓦电网馈电上限、900瓦装机容量限制以及零馈电设计——由依据2026年第5299号法律授权发布的一项独立部长级决定规定，而正是这项部长级决定，仍处于公开征询意见阶段，截止到2026年7月20日。** 这是一个有意义的区分：将整个框架描述为"尚未成为法律"并不准确，因为授权性法规已经通过；但将阳台光伏规则描述为完全确定同样不准确，因为截至本页发布之日，确定其确切机制的决定尚未最终敲定。',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY] 本页报告的是处于公开征询意见起草阶段的部长级决定，该意见征询截止于2026年7月20日——即本页发布日期后的第二天。在将800瓦/900瓦上限或零馈电机制视为最终确定之前，请直接核实最终确定的决定文本和生效日期。' },
        ],
      },
      notFromZero: {
        id: 'not-from-zero',
        title: '希腊并非从零开始',
        content: [
          '**希腊已拥有约8万套小型自发自用太阳能装机，是欧洲分布式可再生能源人均普及率最高的国家之一——这并非一个没有既有太阳能基础的市场。** 该细分市场的增长十分显著：2020年至2026年间新增了37,407套系统，总计1,070兆瓦，而2015至2019年间仅新增1,772套（36兆瓦）。',
          '在这项部长级决定出台之前，真正缺失的是一项专门针对插电式/阳台产品类别的规则——即由消费者自行安装、直接插入插座的小型套件，与构成现有装机基础主体的大型自发自用屋顶系统有所区别。在此决定之前，阳台专属的插电套件处于监管灰色地带，没有明确的法律框架允许或禁止该类别。[VERIFY：单一来源，来自个人博客，未获新闻或法律来源证实] 据称，这一灰色地带意味着，尽管存在监管空白，硬件仍在希腊商店中销售，使购买者在发生电气事故时缺乏明确的保险保障或法律地位。',
        ],
      },
      whyZeroFeedIn: {
        id: 'why-zero-feed-in',
        title: '为何采用零馈电——以及为何是现在',
        content: [
          '**希腊电网——包括公用事业规模和屋顶装机——已在许多日子里连续数小时限制现有太阳能发电，原因是供过于求已经超过电网在太阳能高峰时段所能吸纳的容量。** 这正是阳台光伏决定被起草为"零馈电"（完全不允许电网出口），而非法国、奥地利、比利时和荷兰所采用的仅需申报、允许出口模式的直接背景：在一个已经在限制现有太阳能的电网中增加更多具备出口能力的容量，只会加剧已经存在的问题，而非解决新问题。',
          '**业内专家已公开反对这项决定所属的更广泛的屋顶及阳台光伏扩张计划。** 希腊光伏能源生产商协会主席警告称，若不受限制地允许每栋房屋和阳台安装光伏，可能将电网推向崩溃，业内人士也指出，当下真正需要的是更多阳台电池储能，而非更多向电网馈电的面板——本页将这一分歧记录为一场真实存在的当下争议，而非已达成的共识。',
          '环境与能源部从能源可及性的角度阐述了这一更广泛的政策推动——将目标描述为让"更多消费者能够更好地掌控自己的能源消费、降低电费并增强能源独立性"，一位部长将这一目标描述为向每位公民推广"能源民主"。这是该部门对该政策目标的自我阐述，在此仅作为其声明的理由呈现，而非本页对该框架是否真正实现该目标所做的独立评估。',
        ],
      },
      registration: {
        id: 'registration',
        title: '注册流程：草案的要求',
        content: [
          '**根据草案，注册仅需申报，而非许可或执照审批流程：无需与DEDDIE/HEDNO签订正式接入协议，无需额外审批，也无需接入费。** 该流程通过一个新的DEDDIE/HEDNO数字平台进行（截至本页发布之日仍在建设中）：供应商在购买时通知DEDDIE/HEDNO，购买者则通过数字网关单独申报——使用TAXISnet凭证——最迟在安装前五天完成。安装人员必须提交责任声明，每两年更新一次。',
          '**每套系统都必须配备防孤岛保护，可在停电或局部电网故障时自动断开装置连接——这是确保符合零馈电设计的核心机制，通过完全阻止电力进入电网来实现，而不仅仅是加以劝阻。** 与阳台光伏并行，同一政策推动正在将独立电池储能制度化为一个独立的、相关的自发自用类别——同样限制为完全不允许电网馈电，适用于希望在不使用面板系统的情况下进行储能的家庭。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '希腊的阳台光伏合法吗？', a: '授权性法律（2026年第5299号法律）已经通过并公布（2026年5月5日）。阳台光伏专属规则——800瓦电网馈电上限、900瓦装机容量、零电网出口——由一项独立的部长级决定设定，该决定正在公开征询意见，截止到2026年7月20日，截至本页发布之日尚未最终确定。' },
          { q: '希腊为何将阳台光伏设计为"零馈电"，而不像德国或法国那样允许出口？', a: '因为希腊电网由于供过于求，目前已在许多日子里连续数小时限制现有太阳能出力。在一个已经在限电的电网中增加具备出口能力的阳台光伏，只会加剧一个真实存在的当下问题——光伏能源生产商协会主席已公开警告不受限制的额外光伏装机存在电网崩溃风险，监管机构正转而引导家庭转向电池储能和自发自用。' },
          { q: '希腊多年来不是一直阳光充足、太阳能资源丰富吗——为何现在才监管阳台光伏？', a: '希腊已拥有约8万套小型自发自用太阳能装机，是欧洲分布式可再生能源普及率最高的国家之一——太阳能对该国而言并非新事物。此前缺失的是针对插电式/阳台消费类别的专属规则，该类别在此决定之前处于法律灰色地带。这一时机也反映了既有太阳能基础已经造成的电网限电问题，正是这一问题塑造了零馈电设计。' },
          { q: '我该如何在希腊注册阳台光伏系统？', a: '根据草案：仅需通过一个新的DEDDIE/HEDNO数字平台申报，无需许可证或接入费。供应商在购买时通知DEDDIE/HEDNO；购买者通过数字网关（TAXISnet凭证）单独申报，最迟在安装前五天完成，安装人员需提交责任声明，每两年更新一次。' },
          { q: '我可以在希腊将阳台光伏的多余电力出口到电网吗？', a: '不可以——部长级决定草案将电网馈电限制在800瓦，且完全不允许向电网出口。每套系统都需要配备防孤岛保护来强制执行这一点。同样正在制度化的相关自发自用类别——独立电池储能，也遵循相同的不出口规则。' },
          { q: '希腊的阳台光伏规则何时最终确定？', a: '[VERIFY] 关于该部长级决定的公开征询意见已于2026年7月20日结束。截至本页发布之日，尚无关于该决定本身最终确定日期的确切信息——请直接向DEDDIE/HEDNO或YPEN核实最新状态。' },
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
