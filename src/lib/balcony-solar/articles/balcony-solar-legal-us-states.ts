// Slug: balcony-solar-legal-us-states
// BSOL-12 — Tier 3, ★ US MONEY-ADJACENT. semi_annual, next_refresh_due +60 days
// (not the default 6-month interval — state count moves faster than that cadence).
// monthly tier explicitly rejected: PAGE_UPDATER.md excludes legal/compliance content
// from monthly tier, and monthly's gate fields (current_models_mentioned etc.) don't fit.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { US_STATES } from "@/lib/shared/balcony-solar-country-data";
// Note: US_FEDERAL_CERTIFICATION.note and US_STATE_COUNT_NOTE are internal
// editorial/audit-trail text (they reference internal slugs like "BSOL-12" and
// contain author instructions like "Do not describe...") — never interpolate
// them directly into reader-facing prose. Hand-author instead; see the fix
// applied here and in balcony-solar-spain-latam.ts / balcony-solar-gulf-mena.ts
// (2026-07-02) for the pattern to follow.

const signedStates = US_STATES.filter((s) => s.status === 'Signed');
const pendingStates = US_STATES.filter((s) => s.status !== 'Signed');

const stateRows = US_STATES.map((s) => ({
  state: s.state,
  status: s.status,
  bill: s.bill,
  signed: s.signedDate || '—',
  effective: s.effectiveDate || '—',
}));

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-09-01',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Is Balcony Solar Legal in My State? US State-by-State Guide',
    seoTitle: 'Balcony Solar Legal by State: US Guide (2026)',
    intro: `As of write-time, ${signedStates.length} US states have signed balcony solar legislation into law, and ${pendingStates.length} more have passed their state legislature and are awaiting a governor's signature. There is no federal framework — legality is determined entirely state by state, and most states haven't addressed balcony solar specifically at all yet.`,
    metaDescription: `Is balcony solar legal in your US state? ${signedStates.length} states have signed legislation as of write-time, with more pending — verified state-by-state status, updated July 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'US buyers checking whether balcony solar is legal in their specific state',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['is balcony solar legal in my state', 'balcony solar state laws', 'plug in solar legal states', 'balcony solar legislation 2026'],
    leadAnswerBlock: `**As of write-time (2026-07-02), ${signedStates.length} US states have signed balcony solar legislation into law — Utah, Maine, Virginia, Maryland, Colorado, and Connecticut — with ${pendingStates.length} more (New York, New Hampshire, Vermont) having passed their state legislature and awaiting a governor's signature.** There is no federal balcony solar law; if your state isn't on either list, current status is simply undetermined rather than either explicitly legal or illegal — check with your local utility before assuming either way.`,
    quickAnswerTop: {
      en: {
        question: 'Which US states have legalized balcony solar?',
        answer: `Six states have signed balcony solar legislation as of write-time: Utah (first, HB 340), Maine, Virginia, Maryland, Colorado (highest wattage cap at 1,920W), and Connecticut. Three more — New York, New Hampshire, and Vermont — have passed their state legislature and are awaiting a governor's signature. No federal framework exists; most other states haven't addressed balcony solar specifically yet.`,
        bullets: [
          'Signed: Utah (HB 340), Maine (LD 1730), Virginia (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), Connecticut (HB 5340)',
          'Colorado has the highest confirmed wattage cap of any state at 1,920W',
          'Pending governor signature: New York (SUNNY Act), New Hampshire, Vermont',
          'No federal balcony solar framework exists — every state\'s status is independent',
          'This count moves monthly — this page refreshes every 60 days specifically because of that pace',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Federal Picture', anchor: '#federal-picture' },
      { label: 'State-by-State Table', anchor: '#state-table' },
      { label: 'Utah', anchor: '#utah' },
      { label: 'Maine', anchor: '#maine' },
      { label: 'Virginia', anchor: '#virginia' },
      { label: 'States to Watch', anchor: '#states-to-watch' },
      { label: 'How to Check Your Utility', anchor: '#check-your-utility' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `${signedStates.length} states have signed balcony solar legislation as of write-time (2026-07-02): Utah, Maine, Virginia, Maryland, Colorado, and Connecticut.`,
          `${pendingStates.length} more states — New York, New Hampshire, Vermont — have passed their legislature and await a governor's signature; they are NOT yet law.`,
          'Colorado has the highest confirmed state wattage cap at 1,920W.',
          'No federal balcony solar framework exists — each state\'s status is fully independent, and most states haven\'t addressed the topic at all yet.',
          'CO/MD/CT signing dates were cross-verified only via secondary trackers, not primary legislative text — confirm against official state records before relying on an exact date.',
          'This page refreshes every 60 days rather than the default 6-month semi_annual cycle, specifically because the state count moves faster than that.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'Federal Picture',
        content: [
          '**There is no federal balcony solar law — legality is determined entirely at the state level.** The one federal-level development relevant to balcony solar is UL 3700, a safety certification standard (not a legalization framework) launched January 2026.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'UL 3700 Certification Status',
        content: [
          '**UL 3700, the federal safety certification standard for plug-in solar devices, launched its testing and certification program on January 8, 2026 — but no complete balcony solar system has yet earned certification.** Testing takes months, and no product from any brand has completed the process as of write-time. Don\'t assume a product marketed as "UL 3700 compliant" or similar has actually completed certification — verify the specific claim before relying on it.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'State-by-State Table',
        content: [
          `**This state count moves monthly, faster than most facts tracked in this guide — that's why this page refreshes every 60 days instead of the standard 6-month cycle.** Signing dates for Colorado, Maryland, and Connecticut were cross-verified via secondary trackers, not primary legislative text — confirm exact dates against official state records before relying on them for anything time-sensitive.`,
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'Utah',
        content: [
          '**Utah was the first US state to sign dedicated balcony solar legislation, HB 340, in March 2025, effective May 7, 2025.** It remains the state with the most established balcony solar market as a result — several hardware vendors reference Utah-specific compliance directly on their product pages.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'Maine',
        content: [
          '**Maine signed LD 1730 on April 6, 2026, with an effective date of July 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'Virginia',
        content: [
          '**Virginia signed HB 395/SB 250 on April 22, 2026, with an effective date of January 2027** — meaning the law is signed but not yet in force as of write-time.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'States to Watch',
        content: [
          '**New York\'s SUNNY Act, along with bills in New Hampshire and Vermont, have passed their respective state legislatures and await a governor\'s signature — these are pending, not yet law, and could still change before signing.**',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'How to Check Your Utility',
        content: [
          '**If your state isn\'t on the signed or pending list, your best next step is contacting your local utility directly, since utility-level interconnection policy can sometimes matter even in the absence of state legislation.** Do not assume balcony solar is either legal or illegal in an unlisted state without checking — the honest answer for most US states right now is "undetermined," not a clear yes or no.',
        ],
        callouts: [
          { type: 'warning', text: 'Buying hardware before confirming your state\'s status can leave you with an unusable system — several kits are explicitly restricted to specific states by the manufacturer, not just by law.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which US states have legalized balcony solar?', a: 'Six states have signed legislation as of write-time: Utah, Maine, Virginia, Maryland, Colorado, and Connecticut. Three more — New York, New Hampshire, Vermont — have passed their legislature and await a governor\'s signature.' },
          { q: 'Is balcony solar illegal in states not on this list?', a: 'Not necessarily illegal — most unlisted states simply haven\'t addressed balcony solar specifically. Status is undetermined rather than clearly legal or illegal; check with your local utility.' },
          { q: 'Which state has the highest wattage limit?', a: 'Colorado, at 1,920W — the highest confirmed cap of any US state balcony solar law found.' },
          { q: 'Is there a federal balcony solar law?', a: 'No. There is no federal legalization framework — only UL 3700, a federal-level safety certification standard, which is separate from state legalization and does not itself make balcony solar legal anywhere.' },
          { q: 'How often does this state count change?', a: 'Frequently enough that this page refreshes every 60 days rather than the standard 6-month cycle used elsewhere in this guide — US state legislation on this topic is moving faster than most other tracked facts.' },
          { q: 'Are the signing dates for Colorado, Maryland, and Connecticut fully confirmed?', a: 'They were cross-verified via secondary trackers (industry trackers and press coverage) but not independently checked against primary state legislative text this pass — confirm exact dates against official state records before relying on them for anything time-sensitive.' },
          { q: 'Can I buy balcony solar hardware before my state signs legislation?', a: 'Some hardware is nationally available regardless of state legislation status, but several storage-inclusive kits are explicitly restricted by the manufacturer to specific states — check product availability, not just legal status, before buying.' },
          { q: 'What happens to pending legislation if the governor doesn\'t sign it?', a: 'This varies by state\'s specific legislative process and timeline rules — a bill that isn\'t signed within its state\'s applicable window may need to be reintroduced in a future session, though the exact mechanics differ by state.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Is Balcony Solar Legal in My State? US State-by-State Guide',
      description: 'Is balcony solar legal in your US state? States have signed legislation as of write-time, with more pending — verified state-by-state status, updated July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-legal-us-states',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'US buyers checking whether balcony solar is legal in their specific state' },
      about: ['Balcony solar US law', 'UL 3700', 'State legislation', 'Plug-in solar legality'],
    },
  },
};
