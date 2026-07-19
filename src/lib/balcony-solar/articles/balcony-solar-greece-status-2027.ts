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
}
