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
    last_full_refresh: '2026-07-16',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in My State? US State-by-State Guide',
    seoTitle: 'Balcony Solar Legal by State: US Guide (2026)',
    intro: `As of write-time, ${signedStates.length} US states have signed balcony solar legislation into law, and ${pendingStates.length} more have passed their state legislature and are awaiting a governor's signature. There is no federal framework — legality is determined entirely state by state, and most states haven't addressed balcony solar specifically at all yet.`,
    metaDescription: `Is balcony solar legal in your US state? ${signedStates.length} states have signed legislation as of write-time, with more pending — verified state-by-state status, updated July 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'US buyers checking whether balcony solar is legal in their specific state',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['is balcony solar legal in my state', 'balcony solar state laws', 'plug in solar legal states', 'balcony solar legislation 2026'],
    leadAnswerBlock: `**As of write-time (2026-07-16), ${signedStates.length} US states have signed balcony solar legislation into law — Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont, and Connecticut — with ${pendingStates.length} more (New York) having passed its state legislature and awaiting a governor's signature. Two of the 8 signed states are not yet in effect: Colorado takes effect January 1, 2027 and Connecticut takes effect October 1, 2026.** There is no federal balcony solar law; if your state isn't on either list, current status is simply undetermined rather than either explicitly legal or illegal — check with your local utility before assuming either way.`,
    quickAnswerTop: {
      en: {
        question: 'Which US states have legalized balcony solar?',
        answer: `Eight states have signed balcony solar legislation as of write-time: Utah (first, HB 340), Maine, Virginia, Maryland, Colorado (highest wattage cap at 1,920W), New Hampshire, Vermont, and Connecticut. One more — New York — has passed its state legislature and is awaiting a governor's signature. No federal framework exists; most other states haven't addressed balcony solar specifically yet.`,
        bullets: [
          'Signed: Utah (HB 340), Maine (LD 1730), Virginia (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), New Hampshire (SB 540), Vermont (S.202/H.598), Connecticut (HB 5340)',
          'Colorado has the highest confirmed wattage cap of any state at 1,920W',
          'Pending governor signature: New York (SUNNY Act)',
          'No federal balcony solar framework exists — every state\'s status is independent',
          'This count moves monthly — this page refreshes every 60 days specifically because of that pace',
        ],
        updatedDate: '2026-07-16',
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
          `${signedStates.length} states have signed balcony solar legislation as of write-time (2026-07-16): Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont, and Connecticut. Colorado (Jan 1, 2027) and Connecticut (Oct 1, 2026) are signed but not yet in effect.`,
          `${pendingStates.length} more state — New York — has passed its legislature and awaits a governor's signature; it is NOT yet law.`,
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
          '**For the full rules, savings estimates, and product options for a specific state, see the dedicated guide:** [Utah](/prompt-bites/is-balcony-solar-legal-utah) · [Maine](/prompt-bites/is-balcony-solar-legal-maine) · [Virginia](/prompt-bites/is-balcony-solar-legal-virginia) · [Maryland](/prompt-bites/is-balcony-solar-legal-maryland) · [Colorado](/prompt-bites/is-balcony-solar-legal-colorado) · [New Hampshire](/prompt-bites/is-balcony-solar-legal-new-hampshire) · [Vermont](/prompt-bites/is-balcony-solar-legal-vermont) · [Connecticut](/prompt-bites/is-balcony-solar-legal-connecticut)',
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
          '**Virginia signed HB 395/SB 250 on April 22, 2026, with an effective date of July 1, 2026** — the law is signed and already in effect as of write-time; localities cannot ban balcony solar within the state\'s 1,200W cap.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'States to Watch',
        content: [
          '**New York\'s SUNNY Act has passed the state legislature and awaits a governor\'s signature — it is pending, not yet law, and could still change before signing.** New Hampshire and Vermont, previously in this pending category, are now confirmed signed — see the state table above.',
          'For the full story of how this wave of legislation started — including why Utah moved first and why California, Florida, and Texas are still stuck — see [how balcony solar became legal state by state](/balcony-solar/how-balcony-solar-became-legal-in-the-us).',
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
          { q: 'Which US states have legalized balcony solar?', a: 'Eight states have signed legislation as of write-time: Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont, and Connecticut. One more — New York — has passed its legislature and awaits a governor\'s signature. Two of the 8 signed states (Colorado, Connecticut) are not yet in effect.' },
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
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-de.webp',
    title: 'Ist Balkonkraftwerk in meinem Bundesstaat legal? US-Leitfaden nach Bundesstaaten',
    seoTitle: 'Balkonkraftwerk legal nach Bundesstaat: US-Leitfaden (2026)',
    intro: `Zum Redaktionsschluss haben ${signedStates.length} US-Bundesstaaten Gesetze zu Balkonkraftwerken unterzeichnet, und ${pendingStates.length} weitere haben das Staatsgesetz verabschiedet und warten auf die Unterschrift des Gouverneurs. Es gibt keinen bundesweiten Rahmen — die Legalität wird vollständig auf Bundesstaatenebene bestimmt, und die meisten Bundesstaaten haben Balkonkraftwerke bisher noch nicht spezifisch geregelt.`,
    metaDescription: `Ist Balkonkraftwerk in Ihrem US-Bundesstaat legal? ${signedStates.length} Bundesstaaten haben zum Redaktionsschluss Gesetze unterzeichnet, weitere stehen aus — verifizierter Status nach Bundesstaaten, aktualisiert Juli 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'US-Käufer, die prüfen möchten, ob Balkonkraftwerke in ihrem Bundesstaat legal sind',
    primaryTerm: 'Balkonkraftwerk legal Bundesstaaten',
    targetKeywords: ['Balkonkraftwerk legal in meinem Bundesstaat', 'Balkonkraftwerk Gesetze US-Bundesstaaten', 'Steckersolar legale Bundesstaaten', 'Balkonkraftwerk Gesetzgebung 2026'],
    leadAnswerBlock: `**Zum Redaktionsschluss (2026-07-16) haben ${signedStates.length} US-Bundesstaaten Gesetze zu Balkonkraftwerken unterzeichnet — Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont und Connecticut — mit ${pendingStates.length} weiterem (New York), der das Staatsgesetz bereits verabschiedet hat und auf die Unterschrift des Gouverneurs wartet. Zwei der 8 unterzeichneten Bundesstaaten sind noch nicht in Kraft: Colorado tritt am 1. Januar 2027 in Kraft, Connecticut am 1. Oktober 2026.** Es gibt kein bundesweites Balkonkraftwerk-Gesetz; wenn Ihr Bundesstaat auf keiner der beiden Listen steht, ist der aktuelle Status schlicht ungeklärt und weder ausdrücklich legal noch illegal — erkundigen Sie sich bei Ihrem lokalen Netzbetreiber, bevor Sie eine Annahme treffen.`,
    quickAnswerTop: {
      de: {
        question: 'Welche US-Bundesstaaten haben Balkonkraftwerke legalisiert?',
        answer: `Zum Redaktionsschluss haben acht Bundesstaaten Gesetze zu Balkonkraftwerken unterzeichnet: Utah (als erster, HB 340), Maine, Virginia, Maryland, Colorado (höchste Wattgrenze mit 1.920 W), New Hampshire, Vermont und Connecticut. Ein weiterer — New York — hat sein Staatsparlament passiert und wartet auf die Unterschrift des Gouverneurs. Es gibt keinen bundesweiten Rahmen; die meisten anderen Bundesstaaten haben Balkonkraftwerke bisher noch nicht spezifisch geregelt.`,
        bullets: [
          'Unterzeichnet: Utah (HB 340), Maine (LD 1730), Virginia (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), New Hampshire (SB 540), Vermont (S.202/H.598), Connecticut (HB 5340)',
          'Colorado hat die höchste bestätigte Wattgrenze aller Bundesstaaten mit 1.920 W',
          'Wartet auf Unterschrift des Gouverneurs: New York (SUNNY Act)',
          'Es gibt keinen bundesweiten Balkonkraftwerk-Rahmen — der Status jedes Bundesstaats ist unabhängig',
          'Diese Zahl verändert sich monatlich — deshalb wird diese Seite alle 60 Tage aktualisiert',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: 'Wichtigste Punkte', anchor: '#key-takeaways' },
      { label: 'Bundesebene', anchor: '#federal-picture' },
      { label: 'Bundesstaaten-Tabelle', anchor: '#state-table' },
      { label: 'Utah', anchor: '#utah' },
      { label: 'Maine', anchor: '#maine' },
      { label: 'Virginia', anchor: '#virginia' },
      { label: 'Beobachtungswerte Bundesstaaten', anchor: '#states-to-watch' },
      { label: 'So prüfen Sie Ihren Netzbetreiber', anchor: '#check-your-utility' },
      { label: 'Häufige Fragen', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `${signedStates.length} Bundesstaaten haben zum Redaktionsschluss (2026-07-16) Gesetze zu Balkonkraftwerken unterzeichnet: Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont und Connecticut. Colorado (1. Januar 2027) und Connecticut (1. Oktober 2026) sind unterzeichnet, aber noch nicht in Kraft.`,
          `${pendingStates.length} weiterer Bundesstaat — New York — hat das Staatsparlament passiert und wartet auf die Unterschrift des Gouverneurs; er ist noch KEIN Gesetz.`,
          'Colorado hat die höchste bestätigte staatliche Wattgrenze mit 1.920 W.',
          'Es gibt keinen bundesweiten Balkonkraftwerk-Rahmen — der Status jedes Bundesstaats ist vollständig unabhängig, und die meisten Bundesstaaten haben das Thema noch gar nicht aufgegriffen.',
          'Die Unterzeichnungsdaten für CO/MD/CT wurden nur über sekundäre Tracker und nicht anhand primärer Gesetzestexte verifiziert — vor Verwendung genauer Daten bitte mit offiziellen Bundesstaatenregistern bestätigen.',
          'Diese Seite wird alle 60 Tage statt im Standard-Halbjahresrhythmus (semi_annual) aktualisiert, weil die Bundesstaatenzahl schneller wächst.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'Bundesebene',
        content: [
          '**Es gibt kein bundesweites Balkonkraftwerk-Gesetz — die Legalität wird vollständig auf Bundesstaatenebene bestimmt.** Die einzige bundesweite Entwicklung, die für Balkonkraftwerke relevant ist, ist UL 3700, ein Sicherheitszertifizierungsstandard (kein Legalisierungsrahmen), der im Januar 2026 eingeführt wurde.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'UL 3700 Zertifizierungsstatus',
        content: [
          '**UL 3700, der bundesweite Sicherheitszertifizierungsstandard für Steckersolar-Geräte, hat sein Test- und Zertifizierungsprogramm am 8. Januar 2026 gestartet — aber noch kein vollständiges Balkonkraftwerk-System hat die Zertifizierung erhalten.** Die Tests dauern Monate, und kein Produkt irgendeiner Marke hat den Prozess zum Redaktionsschluss abgeschlossen. Gehen Sie nicht davon aus, dass ein als „UL 3700-konform" oder ähnlich vermarktetes Produkt die Zertifizierung tatsächlich abgeschlossen hat — überprüfen Sie die konkrete Behauptung, bevor Sie sich darauf verlassen.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'Bundesstaaten-Tabelle',
        content: [
          `**Diese Bundesstaatenzahl verändert sich monatlich, schneller als die meisten in diesem Leitfaden verfolgten Fakten — deshalb wird diese Seite alle 60 Tage statt im Standard-Halbjahresrhythmus aktualisiert.** Die Unterzeichnungsdaten für Colorado, Maryland und Connecticut wurden über sekundäre Tracker und nicht anhand primärer Gesetzestexte verifiziert — bitte genaue Daten mit offiziellen Bundesstaatenregistern bestätigen, bevor Sie sich bei zeitkritischen Dingen darauf verlassen.`,
          '**Die vollständigen Regeln, Einsparschätzungen und Produktoptionen für einen bestimmten Bundesstaat finden Sie im jeweiligen Leitfaden:** [Utah](/de/prompt-bites/is-balcony-solar-legal-utah) · [Maine](/de/prompt-bites/is-balcony-solar-legal-maine) · [Virginia](/de/prompt-bites/is-balcony-solar-legal-virginia) · [Maryland](/de/prompt-bites/is-balcony-solar-legal-maryland) · [Colorado](/de/prompt-bites/is-balcony-solar-legal-colorado) · [New Hampshire](/de/prompt-bites/is-balcony-solar-legal-new-hampshire) · [Vermont](/de/prompt-bites/is-balcony-solar-legal-vermont) · [Connecticut](/de/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'Utah',
        content: [
          '**Utah war der erste US-Bundesstaat, der im März 2025 ein eigenes Balkonkraftwerk-Gesetz (HB 340) unterzeichnete, das am 7. Mai 2025 in Kraft trat.** Infolgedessen ist Utah nach wie vor der Bundesstaat mit dem etabliertesten Balkonkraftwerk-Markt — mehrere Hardware-Anbieter verweisen direkt auf der Produktseite auf Utah-spezifische Konformität.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'Maine',
        content: [
          '**Maine hat LD 1730 am 6. April 2026 unterzeichnet, mit einem Inkrafttreten im Juli 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'Virginia',
        content: [
          '**Virginia hat HB 395/SB 250 am 22. April 2026 unterzeichnet, in Kraft seit 1. Juli 2026** — das Gesetz ist unterzeichnet und zum Redaktionsschluss bereits in Kraft; Kommunen dürfen Balkonkraftwerke innerhalb der 1.200-W-Obergrenze des Bundesstaats nicht verbieten.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'Beobachtungswerte Bundesstaaten',
        content: [
          '**New Yorks SUNNY Act hat das Staatsparlament passiert und wartet auf die Unterschrift des Gouverneurs — es steht noch aus, ist noch kein Gesetz und könnte sich vor der Unterzeichnung noch ändern.** New Hampshire und Vermont, zuvor in dieser Kategorie geführt, gelten inzwischen als unterzeichnet — siehe die Bundesstaaten-Tabelle oben.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'So prüfen Sie Ihren Netzbetreiber',
        content: [
          '**Wenn Ihr Bundesstaat nicht auf der unterzeichneten oder ausstehenden Liste steht, ist der beste nächste Schritt, direkt beim lokalen Netzbetreiber nachzufragen, da die Einspeisepolitik auf Netzbetreiberebene manchmal auch ohne staatliche Gesetzgebung eine Rolle spielen kann.** Gehen Sie nicht davon aus, dass Balkonkraftwerke in einem nicht gelisteten Bundesstaat legal oder illegal sind, ohne zu überprüfen — die ehrliche Antwort für die meisten US-Bundesstaaten lautet derzeit „ungeklärt", nicht ein klares Ja oder Nein.',
        ],
        callouts: [
          { type: 'warning', text: 'Hardware vor der Bestätigung des Status Ihres Bundesstaats zu kaufen, kann Sie mit einem unnutzbaren System zurücklassen — mehrere Kits sind vom Hersteller ausdrücklich auf bestimmte Bundesstaaten beschränkt, nicht nur durch das Gesetz.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          { q: 'Welche US-Bundesstaaten haben Balkonkraftwerke legalisiert?', a: 'Zum Redaktionsschluss haben acht Bundesstaaten Gesetze unterzeichnet: Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont und Connecticut. Ein weiterer — New York — hat sein Staatsparlament passiert und wartet auf die Unterschrift des Gouverneurs. Zwei der 8 unterzeichneten Bundesstaaten (Colorado, Connecticut) sind noch nicht in Kraft.' },
          { q: 'Sind Balkonkraftwerke in nicht gelisteten Bundesstaaten illegal?', a: 'Nicht notwendigerweise illegal — die meisten nicht gelisteten Bundesstaaten haben Balkonkraftwerke einfach noch nicht spezifisch geregelt. Der Status ist ungeklärt, nicht eindeutig legal oder illegal; erkundigen Sie sich beim lokalen Netzbetreiber.' },
          { q: 'Welcher Bundesstaat hat die höchste Wattgrenze?', a: 'Colorado mit 1.920 W — die höchste bestätigte Grenze aller gefundenen US-Bundesstaatengesetze für Balkonkraftwerke.' },
          { q: 'Gibt es ein bundesweites Balkonkraftwerk-Gesetz?', a: 'Nein. Es gibt keinen bundesweiten Legalisierungsrahmen — nur UL 3700, einen bundesweiten Sicherheitszertifizierungsstandard, der von der staatlichen Legalisierung getrennt ist und Balkonkraftwerke selbst nirgendwo legal macht.' },
          { q: 'Wie oft ändert sich diese Bundesstaatenzahl?', a: 'Häufig genug, dass diese Seite alle 60 Tage statt im Standard-Halbjahresrhythmus des restlichen Leitfadens aktualisiert wird — die US-Bundesstaatengesetzgebung zu diesem Thema entwickelt sich schneller als die meisten anderen verfolgten Fakten.' },
          { q: 'Sind die Unterzeichnungsdaten für Colorado, Maryland und Connecticut vollständig bestätigt?', a: 'Sie wurden über sekundäre Tracker (Branchentracker und Presseberichterstattung) verifiziert, aber in diesem Durchgang nicht unabhängig anhand primärer staatlicher Gesetzestexte überprüft — bitte genaue Daten mit offiziellen Bundesstaatenregistern bestätigen, bevor Sie sich bei zeitkritischen Dingen darauf verlassen.' },
          { q: 'Kann ich Balkonkraftwerk-Hardware kaufen, bevor mein Bundesstaat ein Gesetz verabschiedet?', a: 'Einige Hardware ist unabhängig vom Gesetzgebungsstatus bundesweit erhältlich, aber mehrere Kits mit Speicher sind vom Hersteller ausdrücklich auf bestimmte Bundesstaaten beschränkt — prüfen Sie die Produktverfügbarkeit und nicht nur den Rechtsstatus, bevor Sie kaufen.' },
          { q: 'Was passiert mit ausstehenden Gesetzen, wenn der Gouverneur nicht unterschreibt?', a: 'Das variiert je nach dem spezifischen Gesetzgebungsverfahren und den Fristen des jeweiligen Bundesstaats — ein Gesetz, das nicht innerhalb der anwendbaren Frist unterzeichnet wird, muss möglicherweise in einer künftigen Sitzungsperiode neu eingebracht werden, wobei die genauen Mechanismen je nach Bundesstaat unterschiedlich sind.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ist Balkonkraftwerk in meinem Bundesstaat legal? US-Leitfaden nach Bundesstaaten',
      description: 'Ist Balkonkraftwerk in Ihrem US-Bundesstaat legal? Verifizierter Status nach Bundesstaaten, aktualisiert Juli 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/de/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'de',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'US-Käufer, die prüfen möchten, ob Balkonkraftwerke in ihrem Bundesstaat legal sind' },
      about: ['US-Balkonkraftwerk-Recht', 'UL 3700', 'Landesgesetzgebung', 'Legalität von Steckersolar'],
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-es.webp',
    title: '¿Es legal el balcony solar en mi estado? Guía estado por estado en EE. UU.',
    seoTitle: 'Balcony solar legal por estado: guía EE. UU. (2026)',
    intro: `Hasta la fecha de esta publicación, ${signedStates.length} estados de EE. UU. han convertido en ley la legislación sobre balcony solar, y ${pendingStates.length} más han sido aprobados por su legislatura estatal y esperan la firma del gobernador. No existe un marco federal: la legalidad se determina estado por estado, y la mayoría de los estados todavía no ha abordado específicamente el balcony solar.`,
    metaDescription: `¿Es legal el balcony solar en tu estado de EE. UU.? ${signedStates.length} estados han firmado legislación hasta la fecha de esta publicación, con más pendientes — estado verificado por estado, actualizado en julio de 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores en EE. UU. que quieren saber si el balcony solar es legal en su estado específico',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['es legal el balcony solar en mi estado', 'leyes estatales de balcony solar en ee. uu.', 'estados donde es legal el solar enchufable', 'legislación de balcony solar 2026'],
    leadAnswerBlock: `**Hasta la fecha de esta publicación (2026-07-16), ${signedStates.length} estados de EE. UU. han convertido en ley la legislación sobre balcony solar — Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont y Connecticut — con ${pendingStates.length} más (Nueva York) ya aprobado por su legislatura estatal y a la espera de la firma del gobernador. Dos de los 8 estados firmantes aún no están en vigor: Colorado entra en vigor el 1 de enero de 2027 y Connecticut el 1 de octubre de 2026.** No existe una ley federal de balcony solar; si tu estado no aparece en ninguna de las dos listas, su estado actual es simplemente indeterminado, no claramente legal ni ilegal — consulta con tu compañía eléctrica local antes de asumir cualquiera de las dos opciones.`,
    quickAnswerTop: {
      es: {
        question: '¿Qué estados de EE. UU. han legalizado el balcony solar?',
        answer: `Ocho estados han firmado legislación sobre balcony solar hasta la fecha de esta publicación: Utah (el primero, HB 340), Maine, Virginia, Maryland, Colorado (el límite de potencia más alto, 1920 W), New Hampshire, Vermont y Connecticut. Uno más — Nueva York — ya fue aprobado por su legislatura estatal y espera la firma del gobernador. No existe un marco federal; la mayoría de los demás estados todavía no ha abordado específicamente el balcony solar.`,
        bullets: [
          'Firmados: Utah (HB 340), Maine (LD 1730), Virginia (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), New Hampshire (SB 540), Vermont (S.202/H.598), Connecticut (HB 5340)',
          'Colorado tiene el límite de potencia confirmado más alto de cualquier estado, con 1920 W',
          'Pendiente de firma del gobernador: Nueva York (SUNNY Act)',
          'No existe un marco federal de balcony solar — el estado de cada uno es independiente',
          'Este conteo cambia mensualmente — por eso esta página se actualiza cada 60 días',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Panorama federal', anchor: '#federal-picture' },
      { label: 'Tabla estado por estado', anchor: '#state-table' },
      { label: 'Utah', anchor: '#utah' },
      { label: 'Maine', anchor: '#maine' },
      { label: 'Virginia', anchor: '#virginia' },
      { label: 'Estados a seguir', anchor: '#states-to-watch' },
      { label: 'Cómo consultar a tu compañía eléctrica', anchor: '#check-your-utility' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `${signedStates.length} estados han firmado legislación sobre balcony solar hasta la fecha de esta publicación (2026-07-16): Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont y Connecticut. Colorado (1 de enero de 2027) y Connecticut (1 de octubre de 2026) están firmados pero aún no en vigor.`,
          `${pendingStates.length} estado más — Nueva York — ha sido aprobado por su legislatura y espera la firma del gobernador; TODAVÍA no es ley.`,
          'Colorado tiene el límite de potencia estatal confirmado más alto, con 1920 W.',
          'No existe un marco federal de balcony solar — el estado de cada uno es totalmente independiente, y la mayoría de los estados todavía no ha abordado el tema.',
          'Las fechas de firma de CO/MD/CT solo se verificaron mediante rastreadores secundarios, no con el texto legislativo primario — confírmalas con los registros oficiales del estado antes de basarte en una fecha exacta.',
          'Esta página se actualiza cada 60 días en lugar del ciclo semi_annual estándar de 6 meses, específicamente porque el conteo de estados cambia más rápido que eso.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'Panorama federal',
        content: [
          '**No existe una ley federal de balcony solar: la legalidad se determina completamente a nivel estatal.** El único desarrollo a nivel federal relevante para el balcony solar es UL 3700, un estándar de certificación de seguridad (no un marco de legalización) lanzado en enero de 2026.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'Estado de la certificación UL 3700',
        content: [
          '**UL 3700, el estándar federal de certificación de seguridad para dispositivos solares enchufables, lanzó su programa de pruebas y certificación el 8 de enero de 2026, pero ningún sistema completo de balcony solar ha obtenido todavía la certificación.** Las pruebas toman meses, y ningún producto de ninguna marca ha completado el proceso hasta la fecha de esta publicación. No asumas que un producto anunciado como "compatible con UL 3700" o similar ya completó la certificación — verifica la afirmación específica antes de confiar en ella.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'Tabla estado por estado',
        content: [
          `**Este conteo de estados cambia mensualmente, más rápido que la mayoría de los datos que sigue esta guía — por eso esta página se actualiza cada 60 días en lugar del ciclo estándar de 6 meses.** Las fechas de firma de Colorado, Maryland y Connecticut se verificaron mediante rastreadores secundarios, no con el texto legislativo primario — confirma las fechas exactas con los registros oficiales del estado antes de basarte en ellas para algo sensible al tiempo.`,
          '**Las reglas completas, estimaciones de ahorro y opciones de productos para un estado específico están en la guía dedicada:** [Utah](/es/prompt-bites/is-balcony-solar-legal-utah) · [Maine](/es/prompt-bites/is-balcony-solar-legal-maine) · [Virginia](/es/prompt-bites/is-balcony-solar-legal-virginia) · [Maryland](/es/prompt-bites/is-balcony-solar-legal-maryland) · [Colorado](/es/prompt-bites/is-balcony-solar-legal-colorado) · [New Hampshire](/es/prompt-bites/is-balcony-solar-legal-new-hampshire) · [Vermont](/es/prompt-bites/is-balcony-solar-legal-vermont) · [Connecticut](/es/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'Utah',
        content: [
          '**Utah fue el primer estado de EE. UU. en firmar legislación dedicada al balcony solar, la HB 340, en marzo de 2025, con vigencia desde el 7 de mayo de 2025.** Sigue siendo el estado con el mercado de balcony solar más consolidado como resultado — varios proveedores de hardware mencionan directamente el cumplimiento específico de Utah en las páginas de sus productos.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'Maine',
        content: [
          '**Maine firmó la LD 1730 el 6 de abril de 2026, con fecha de vigencia en julio de 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'Virginia',
        content: [
          '**Virginia firmó la HB 395/SB 250 el 22 de abril de 2026, con vigencia desde el 1 de julio de 2026** — la ley está firmada y ya en vigor hasta la fecha de esta publicación; los gobiernos locales no pueden prohibir el balcony solar dentro del límite estatal de 1200 W.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'Estados a seguir',
        content: [
          '**La SUNNY Act de Nueva York ya fue aprobada por la legislatura estatal y espera la firma del gobernador — está pendiente, todavía no es ley, y podría cambiar antes de firmarse.** New Hampshire y Vermont, antes en esta categoría, ahora están confirmados como firmados — consulta la tabla de estados más arriba.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'Cómo consultar a tu compañía eléctrica',
        content: [
          '**Si tu estado no aparece en la lista de firmados ni en la de pendientes, tu mejor siguiente paso es contactar directamente a tu compañía eléctrica local, ya que la política de interconexión a nivel de la compañía a veces puede ser relevante incluso sin legislación estatal.** No asumas que el balcony solar es legal o ilegal en un estado no listado sin verificarlo — la respuesta honesta para la mayoría de los estados de EE. UU. en este momento es "indeterminado", no un sí o un no claro.',
        ],
        callouts: [
          { type: 'warning', text: 'Comprar hardware antes de confirmar el estado de tu estado puede dejarte con un sistema inutilizable — varios kits están explícitamente restringidos a estados específicos por el fabricante, no solo por la ley.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué estados de EE. UU. han legalizado el balcony solar?', a: 'Ocho estados han firmado legislación hasta la fecha de esta publicación: Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont y Connecticut. Uno más — Nueva York — ya fue aprobado por su legislatura y espera la firma del gobernador. Dos de los 8 estados firmantes (Colorado, Connecticut) aún no están en vigor.' },
          { q: '¿Es ilegal el balcony solar en los estados que no están en esta lista?', a: 'No necesariamente ilegal — la mayoría de los estados no listados simplemente no ha abordado el balcony solar de forma específica. Su estado es indeterminado, no claramente legal ni ilegal; consulta con tu compañía eléctrica local.' },
          { q: '¿Qué estado tiene el límite de potencia más alto?', a: 'Colorado, con 1920 W — el límite confirmado más alto de cualquier ley estatal de balcony solar en EE. UU. encontrada.' },
          { q: '¿Existe una ley federal de balcony solar?', a: 'No. No existe un marco de legalización federal — solo UL 3700, un estándar federal de certificación de seguridad, que es independiente de la legalización estatal y por sí mismo no hace legal el balcony solar en ningún lugar.' },
          { q: '¿Con qué frecuencia cambia este conteo de estados?', a: 'Con la frecuencia suficiente para que esta página se actualice cada 60 días en lugar del ciclo estándar de 6 meses usado en el resto de esta guía — la legislación estatal de EE. UU. sobre este tema avanza más rápido que la mayoría de los demás datos que se siguen.' },
          { q: '¿Están completamente confirmadas las fechas de firma de Colorado, Maryland y Connecticut?', a: 'Se verificaron mediante rastreadores secundarios (rastreadores del sector y cobertura de prensa) pero no se comprobaron de forma independiente con el texto legislativo estatal primario en esta revisión — confirma las fechas exactas con los registros oficiales del estado antes de basarte en ellas para algo sensible al tiempo.' },
          { q: '¿Puedo comprar hardware de balcony solar antes de que mi estado apruebe la legislación?', a: 'Parte del hardware está disponible a nivel nacional sin importar el estado de la legislación estatal, pero varios kits que incluyen almacenamiento están explícitamente restringidos por el fabricante a estados específicos — verifica la disponibilidad del producto, no solo el estado legal, antes de comprar.' },
          { q: '¿Qué sucede con la legislación pendiente si el gobernador no la firma?', a: 'Esto varía según el proceso legislativo y los plazos específicos de cada estado — un proyecto de ley que no se firma dentro de su plazo aplicable puede necesitar volver a presentarse en una sesión futura, aunque los mecanismos exactos difieren según el estado.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '¿Es legal el balcony solar en mi estado? Guía estado por estado en EE. UU.',
      description: '¿Es legal el balcony solar en tu estado de EE. UU.? Estados han firmado legislación hasta la fecha de esta publicación, con más pendientes — estado verificado por estado, actualizado en julio de 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/es/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'es',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Compradores en EE. UU. que quieren saber si el balcony solar es legal en su estado específico' },
      about: ['Ley de balcony solar en EE. UU.', 'UL 3700', 'Legislación estatal', 'Legalidad del solar enchufable'],
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal no meu estado? Guia estado a estado dos EUA',
    seoTitle: 'Solar de varanda legal por estado: guia dos EUA (2026)',
    intro: `Até o momento desta publicação, ${signedStates.length} estados dos EUA sancionaram legislação sobre energia solar de varanda, e mais ${pendingStates.length} já foram aprovados pela assembleia legislativa estadual e aguardam a assinatura do governador. Não existe uma estrutura federal — a legalidade é determinada inteiramente estado a estado, e a maioria dos estados ainda não tratou especificamente da energia solar de varanda.`,
    metaDescription: `A energia solar de varanda é legal no seu estado dos EUA? ${signedStates.length} estados sancionaram legislação até o momento desta publicação, com mais pendentes — status verificado estado a estado, atualizado em julho de 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores nos EUA que querem saber se a energia solar de varanda é legal no seu estado específico',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['energia solar de varanda é legal no meu estado', 'leis estaduais de energia solar de varanda nos eua', 'estados onde o solar plug-and-play é legal', 'legislação de energia solar de varanda 2026'],
    leadAnswerBlock: `**Até o momento desta publicação (2026-07-16), ${signedStates.length} estados dos EUA sancionaram legislação sobre energia solar de varanda — Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont e Connecticut — com mais ${pendingStates.length} (Nova York) já aprovado pela assembleia legislativa estadual e aguardando a assinatura do governador. Dois dos 8 estados sancionadores ainda não estão em vigor: Colorado entra em vigor em 1º de janeiro de 2027 e Connecticut em 1º de outubro de 2026.** Não existe uma lei federal de energia solar de varanda; se o seu estado não estiver em nenhuma das duas listas, o status atual é simplesmente indeterminado, e não claramente legal ou ilegal — verifique com a sua concessionária de energia local antes de presumir qualquer uma das opções.`,
    quickAnswerTop: {
      pt: {
        question: 'Quais estados dos EUA legalizaram a energia solar de varanda?',
        answer: `Oito estados sancionaram legislação sobre energia solar de varanda até o momento desta publicação: Utah (o primeiro, HB 340), Maine, Virginia, Maryland, Colorado (o maior limite de potência, 1920 W), New Hampshire, Vermont e Connecticut. Mais um — Nova York — já foi aprovado pela assembleia legislativa estadual e aguarda a assinatura do governador. Não existe uma estrutura federal; a maioria dos outros estados ainda não tratou especificamente da energia solar de varanda.`,
        bullets: [
          'Sancionados: Utah (HB 340), Maine (LD 1730), Virginia (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), New Hampshire (SB 540), Vermont (S.202/H.598), Connecticut (HB 5340)',
          'Colorado tem o maior limite de potência confirmado entre todos os estados, com 1920 W',
          'Aguardando assinatura do governador: Nova York (SUNNY Act)',
          'Não existe uma estrutura federal de energia solar de varanda — o status de cada estado é independente',
          'Essa contagem muda mensalmente — por isso esta página é atualizada a cada 60 dias',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Panorama federal', anchor: '#federal-picture' },
      { label: 'Tabela estado a estado', anchor: '#state-table' },
      { label: 'Utah', anchor: '#utah' },
      { label: 'Maine', anchor: '#maine' },
      { label: 'Virginia', anchor: '#virginia' },
      { label: 'Estados para acompanhar', anchor: '#states-to-watch' },
      { label: 'Como verificar sua concessionária', anchor: '#check-your-utility' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `${signedStates.length} estados sancionaram legislação sobre energia solar de varanda até o momento desta publicação (2026-07-16): Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont e Connecticut. Colorado (1º de janeiro de 2027) e Connecticut (1º de outubro de 2026) estão sancionados, mas ainda não em vigor.`,
          `Mais ${pendingStates.length} estado — Nova York — foi aprovado pela assembleia legislativa e aguarda a assinatura do governador; AINDA NÃO é lei.`,
          'Colorado tem o maior limite de potência estadual confirmado, com 1920 W.',
          'Não existe uma estrutura federal de energia solar de varanda — o status de cada estado é totalmente independente, e a maioria dos estados ainda não tratou do assunto.',
          'As datas de sanção de CO/MD/CT foram verificadas apenas por meio de rastreadores secundários, não pelo texto legislativo primário — confirme com os registros oficiais do estado antes de confiar em uma data exata.',
          'Esta página é atualizada a cada 60 dias em vez do ciclo semi_annual padrão de 6 meses, especificamente porque a contagem de estados muda mais rápido do que isso.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'Panorama federal',
        content: [
          '**Não existe uma lei federal de energia solar de varanda — a legalidade é determinada inteiramente em nível estadual.** O único desenvolvimento em nível federal relevante para a energia solar de varanda é a UL 3700, um padrão de certificação de segurança (não uma estrutura de legalização) lançado em janeiro de 2026.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'Status da certificação UL 3700',
        content: [
          '**A UL 3700, o padrão federal de certificação de segurança para dispositivos solares plug-and-play, lançou seu programa de testes e certificação em 8 de janeiro de 2026 — mas nenhum sistema completo de energia solar de varanda obteve a certificação até agora.** Os testes levam meses, e nenhum produto de nenhuma marca concluiu o processo até o momento desta publicação. Não presuma que um produto anunciado como "compatível com UL 3700" ou similar já concluiu a certificação — verifique a alegação específica antes de confiar nela.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'Tabela estado a estado',
        content: [
          `**Essa contagem de estados muda mensalmente, mais rápido do que a maioria dos dados acompanhados neste guia — por isso esta página é atualizada a cada 60 dias em vez do ciclo padrão de 6 meses.** As datas de sanção de Colorado, Maryland e Connecticut foram verificadas por meio de rastreadores secundários, não do texto legislativo primário — confirme as datas exatas com os registros oficiais do estado antes de confiar nelas para algo sensível ao tempo.`,
          '**As regras completas, estimativas de economia e opções de produtos para um estado específico estão no guia dedicado:** [Utah](/pt/prompt-bites/is-balcony-solar-legal-utah) · [Maine](/pt/prompt-bites/is-balcony-solar-legal-maine) · [Virgínia](/pt/prompt-bites/is-balcony-solar-legal-virginia) · [Maryland](/pt/prompt-bites/is-balcony-solar-legal-maryland) · [Colorado](/pt/prompt-bites/is-balcony-solar-legal-colorado) · [New Hampshire](/pt/prompt-bites/is-balcony-solar-legal-new-hampshire) · [Vermont](/pt/prompt-bites/is-balcony-solar-legal-vermont) · [Connecticut](/pt/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'Utah',
        content: [
          '**Utah foi o primeiro estado dos EUA a sancionar legislação dedicada à energia solar de varanda, a HB 340, em março de 2025, com vigência a partir de 7 de maio de 2025.** Como resultado, continua sendo o estado com o mercado de energia solar de varanda mais consolidado — vários fornecedores de hardware mencionam diretamente a conformidade específica de Utah nas páginas de seus produtos.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'Maine',
        content: [
          '**Maine sancionou a LD 1730 em 6 de abril de 2026, com vigência prevista para julho de 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'Virginia',
        content: [
          '**Virginia sancionou a HB 395/SB 250 em 22 de abril de 2026, em vigor desde 1º de julho de 2026** — a lei está sancionada e já em vigor até o momento desta publicação; os governos locais não podem proibir a energia solar de varanda dentro do limite estadual de 1200 W.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'Estados para acompanhar',
        content: [
          '**A SUNNY Act de Nova York já foi aprovada pela assembleia legislativa estadual e aguarda a assinatura do governador — está pendente, ainda não é lei, e pode mudar antes da sanção.** New Hampshire e Vermont, antes nesta categoria, agora estão confirmados como sancionados — veja a tabela de estados acima.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'Como verificar sua concessionária',
        content: [
          '**Se o seu estado não estiver na lista de sancionados nem na de pendentes, o melhor próximo passo é entrar em contato diretamente com sua concessionária de energia local, já que a política de interconexão em nível de concessionária às vezes pode ser relevante mesmo na ausência de legislação estadual.** Não presuma que a energia solar de varanda é legal ou ilegal em um estado não listado sem verificar — a resposta honesta para a maioria dos estados dos EUA agora é "indeterminado", não um sim ou não claro.',
        ],
        callouts: [
          { type: 'warning', text: 'Comprar hardware antes de confirmar o status do seu estado pode deixar você com um sistema inutilizável — vários kits são explicitamente restritos a estados específicos pelo fabricante, não apenas pela lei.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Quais estados dos EUA legalizaram a energia solar de varanda?', a: 'Oito estados sancionaram legislação até o momento desta publicação: Utah, Maine, Virginia, Maryland, Colorado, New Hampshire, Vermont e Connecticut. Mais um — Nova York — já foi aprovado pela assembleia legislativa e aguarda a assinatura do governador. Dois dos 8 estados sancionadores (Colorado, Connecticut) ainda não estão em vigor.' },
          { q: 'A energia solar de varanda é ilegal em estados que não estão nesta lista?', a: 'Não necessariamente ilegal — a maioria dos estados não listados simplesmente ainda não tratou da energia solar de varanda especificamente. O status é indeterminado, e não claramente legal ou ilegal; verifique com sua concessionária local.' },
          { q: 'Qual estado tem o maior limite de potência?', a: 'Colorado, com 1920 W — o maior limite confirmado entre as leis estaduais de energia solar de varanda dos EUA encontradas.' },
          { q: 'Existe uma lei federal de energia solar de varanda?', a: 'Não. Não existe uma estrutura de legalização federal — apenas a UL 3700, um padrão federal de certificação de segurança, que é independente da legalização estadual e não torna, por si só, a energia solar de varanda legal em lugar nenhum.' },
          { q: 'Com que frequência essa contagem de estados muda?', a: 'Com frequência suficiente para que esta página seja atualizada a cada 60 dias, em vez do ciclo padrão de 6 meses usado no restante deste guia — a legislação estadual dos EUA sobre este tema está avançando mais rápido do que a maioria dos outros fatos acompanhados.' },
          { q: 'As datas de sanção de Colorado, Maryland e Connecticut estão totalmente confirmadas?', a: 'Elas foram verificadas por meio de rastreadores secundários (rastreadores do setor e cobertura da imprensa), mas não foram verificadas de forma independente com o texto legislativo estadual primário nesta revisão — confirme as datas exatas com os registros oficiais do estado antes de confiar nelas para algo sensível ao tempo.' },
          { q: 'Posso comprar hardware de energia solar de varanda antes de meu estado sancionar a legislação?', a: 'Parte do hardware está disponível nacionalmente independentemente do status da legislação estadual, mas vários kits com armazenamento embutido são explicitamente restritos pelo fabricante a estados específicos — verifique a disponibilidade do produto, não apenas o status legal, antes de comprar.' },
          { q: 'O que acontece com a legislação pendente se o governador não a assinar?', a: 'Isso varia de acordo com o processo legislativo e os prazos específicos de cada estado — um projeto de lei que não é sancionado dentro do prazo aplicável pode precisar ser reapresentado em uma sessão futura, embora os mecanismos exatos variem de estado para estado.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'A energia solar de varanda é legal no meu estado? Guia estado a estado dos EUA',
      description: 'A energia solar de varanda é legal no seu estado dos EUA? Estados sancionaram legislação até o momento desta publicação, com mais pendentes — status verificado estado a estado, atualizado em julho de 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/pt/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'pt-BR',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Compradores nos EUA que querem saber se a energia solar de varanda é legal no seu estado específico' },
      about: ['Lei de energia solar de varanda nos EUA', 'UL 3700', 'Legislação estadual', 'Legalidade do solar plug-and-play'],
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في ولايتي؟ دليل الولايات الأمريكية واحدة تلو الأخرى',
    seoTitle: 'قانونية الطاقة الشمسية للشرفات حسب الولاية: دليل أمريكا (2026)',
    intro: `حتى وقت كتابة هذا التقرير، وقّعت ${signedStates.length} ولايات أمريكية على تشريعات الطاقة الشمسية للشرفات لتصبح قانونًا، وأقرّت ${pendingStates.length} ولايات أخرى مشروعات القانون في مجالسها التشريعية وهي بانتظار توقيع الحاكم. لا يوجد إطار عمل فيدرالي — تُحدَّد القانونية بالكامل على مستوى كل ولاية على حدة، ومعظم الولايات لم تتناول موضوع الطاقة الشمسية للشرفات تحديدًا بعد.`,
    metaDescription: `هل الطاقة الشمسية للشرفات قانونية في ولايتك الأمريكية؟ وقّعت ${signedStates.length} ولايات على تشريعات حتى وقت كتابة هذا التقرير، مع وجود المزيد قيد الانتظار — حالة موثّقة لكل ولاية، محدّثة في يوليو 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون في الولايات المتحدة الذين يريدون معرفة ما إذا كانت الطاقة الشمسية للشرفات قانونية في ولايتهم تحديدًا',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['هل الطاقة الشمسية للشرفة قانونية في ولايتي', 'قوانين الطاقة الشمسية للشرفات في الولايات الأمريكية', 'الولايات التي تسمح بالطاقة الشمسية القابلة للتوصيل', 'تشريعات الطاقة الشمسية للشرفات 2026'],
    leadAnswerBlock: `**حتى وقت كتابة هذا التقرير (2026-07-16)، وقّعت ${signedStates.length} ولايات أمريكية على تشريعات الطاقة الشمسية للشرفات لتصبح قانونًا — يوتا وماين وفيرجينيا وماريلاند وكولورادو ونيوهامبشير وفيرمونت وكونيتيكت — بينما أقرّت ${pendingStates.length} ولاية أخرى (نيويورك) مشروع القانون في مجلسها التشريعي وهي بانتظار توقيع الحاكم. ولايتان من الولايات الثماني الموقِّعة لم تدخلا حيز التنفيذ بعد: كولورادو تدخل حيز التنفيذ في 1 يناير 2027، وكونيتيكت في 1 أكتوبر 2026.** لا يوجد قانون فيدرالي للطاقة الشمسية للشرفات؛ فإذا لم تكن ولايتك ضمن أي من القائمتين، فإن وضعها الحالي غير محدد ببساطة، وليس قانونيًا أو غير قانوني بشكل واضح — تحقق من شركة الكهرباء المحلية لديك قبل افتراض أي من الاحتمالين.`,
    quickAnswerTop: {
      ar: {
        question: 'ما هي الولايات الأمريكية التي أقرّت قانونية الطاقة الشمسية للشرفات؟',
        answer: `وقّعت ثماني ولايات على تشريعات الطاقة الشمسية للشرفات حتى وقت كتابة هذا التقرير: يوتا (الأولى، HB 340)، وماين، وفيرجينيا، وماريلاند، وكولورادو (أعلى سقف للقدرة الكهربائية عند 1920 واط)، ونيوهامبشير، وفيرمونت، وكونيتيكت. وأقرّت ولاية واحدة أخرى — نيويورك — مشروع القانون في مجلسها التشريعي وهي بانتظار توقيع الحاكم. لا يوجد إطار عمل فيدرالي؛ ومعظم الولايات الأخرى لم تتناول موضوع الطاقة الشمسية للشرفات تحديدًا بعد.`,
        bullets: [
          'الولايات الموقِّعة: يوتا (HB 340)، ماين (LD 1730)، فيرجينيا (HB 395/SB 250)، ماريلاند (HB 1532)، كولورادو (HB 26-1007)، نيوهامبشير (SB 540)، فيرمونت (S.202/H.598)، كونيتيكت (HB 5340)',
          'كولورادو لديها أعلى سقف مؤكَّد للقدرة الكهربائية بين جميع الولايات عند 1920 واط',
          'بانتظار توقيع الحاكم: نيويورك (SUNNY Act)',
          'لا يوجد إطار عمل فيدرالي للطاقة الشمسية للشرفات — وضع كل ولاية مستقل تمامًا',
          'يتغيّر هذا العدد شهريًا — ولهذا السبب تُحدَّث هذه الصفحة كل 60 يومًا',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'الصورة الفيدرالية', anchor: '#federal-picture' },
      { label: 'جدول الولايات', anchor: '#state-table' },
      { label: 'يوتا', anchor: '#utah' },
      { label: 'ماين', anchor: '#maine' },
      { label: 'فيرجينيا', anchor: '#virginia' },
      { label: 'ولايات يجب متابعتها', anchor: '#states-to-watch' },
      { label: 'كيفية التحقق من شركة الكهرباء لديك', anchor: '#check-your-utility' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `وقّعت ${signedStates.length} ولايات على تشريعات الطاقة الشمسية للشرفات حتى وقت كتابة هذا التقرير (2026-07-16): يوتا وماين وفيرجينيا وماريلاند وكولورادو ونيوهامبشير وفيرمونت وكونيتيكت. كولورادو (1 يناير 2027) وكونيتيكت (1 أكتوبر 2026) موقَّعتان لكن لم تدخلا حيز التنفيذ بعد.`,
          `أقرّت ${pendingStates.length} ولاية أخرى — نيويورك — مشروع القانون في مجلسها التشريعي وهي بانتظار توقيع الحاكم؛ وهي ليست قانونًا بعد.`,
          'كولورادو لديها أعلى سقف مؤكَّد للقدرة الكهربائية على مستوى الولايات عند 1920 واط.',
          'لا يوجد إطار عمل فيدرالي للطاقة الشمسية للشرفات — وضع كل ولاية مستقل تمامًا، ومعظم الولايات لم تتناول الموضوع على الإطلاق بعد.',
          'تم التحقق من تواريخ التوقيع في كولورادو وماريلاند وكونيتيكت فقط عبر متتبّعات ثانوية، وليس النص التشريعي الأساسي — تأكد منها عبر السجلات الرسمية للولاية قبل الاعتماد على تاريخ محدد.',
          'تُحدَّث هذه الصفحة كل 60 يومًا بدلًا من دورة الستة أشهر القياسية (semi_annual)، تحديدًا لأن عدد الولايات يتغير أسرع من ذلك.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'الصورة الفيدرالية',
        content: [
          '**لا يوجد قانون فيدرالي للطاقة الشمسية للشرفات — تُحدَّد القانونية بالكامل على مستوى الولاية.** التطور الوحيد على المستوى الفيدرالي المتعلق بالطاقة الشمسية للشرفات هو معيار UL 3700، وهو معيار اعتماد للسلامة (وليس إطار عمل للتقنين) أُطلق في يناير 2026.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'حالة اعتماد UL 3700',
        content: [
          '**أطلق معيار UL 3700، معيار الاعتماد الفيدرالي للسلامة الخاص بأجهزة الطاقة الشمسية القابلة للتوصيل، برنامج الاختبار والاعتماد الخاص به في 8 يناير 2026 — لكن لم يحصل أي نظام كامل للطاقة الشمسية للشرفات على الاعتماد بعد.** يستغرق الاختبار شهورًا، ولم يُكمل أي منتج من أي علامة تجارية العملية حتى وقت كتابة هذا التقرير. لا تفترض أن منتجًا يُسوَّق بوصفه "متوافقًا مع UL 3700" أو ما شابه قد أكمل الاعتماد فعليًا — تحقق من الادعاء المحدد قبل الاعتماد عليه.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'جدول الولايات',
        content: [
          `**يتغيّر عدد الولايات هذا شهريًا، أسرع من معظم الحقائق التي يتتبعها هذا الدليل — ولهذا السبب تُحدَّث هذه الصفحة كل 60 يومًا بدلًا من دورة الستة أشهر المعتادة.** تم التحقق من تواريخ التوقيع في كولورادو وماريلاند وكونيتيكت عبر متتبّعات ثانوية، وليس النص التشريعي الأساسي — تأكد من التواريخ الدقيقة عبر السجلات الرسمية للولاية قبل الاعتماد عليها في أي أمر حسّاس زمنيًا.`,
          '**القواعد الكاملة وتقديرات التوفير وخيارات المنتجات لكل ولاية على حدة متاحة في الدليل المخصص لها:** [يوتا](/ar/prompt-bites/is-balcony-solar-legal-utah) · [مين](/ar/prompt-bites/is-balcony-solar-legal-maine) · [فيرجينيا](/ar/prompt-bites/is-balcony-solar-legal-virginia) · [ماريلاند](/ar/prompt-bites/is-balcony-solar-legal-maryland) · [كولورادو](/ar/prompt-bites/is-balcony-solar-legal-colorado) · [نيو هامبشاير](/ar/prompt-bites/is-balcony-solar-legal-new-hampshire) · [فيرمونت](/ar/prompt-bites/is-balcony-solar-legal-vermont) · [كونيتيكت](/ar/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'يوتا',
        content: [
          '**كانت يوتا أول ولاية أمريكية توقّع تشريعًا مخصصًا للطاقة الشمسية للشرفات، وهو HB 340، في مارس 2025، ودخل حيز التنفيذ في 7 مايو 2025.** ونتيجة لذلك، تظل الولاية صاحبة السوق الأكثر رسوخًا للطاقة الشمسية للشرفات — إذ يشير عدد من موردي الأجهزة مباشرة إلى التوافق الخاص بولاية يوتا على صفحات منتجاتهم.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'ماين',
        content: [
          '**وقّعت ماين على LD 1730 في 6 أبريل 2026، على أن يدخل حيز التنفيذ في يوليو 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'فيرجينيا',
        content: [
          '**وقّعت فيرجينيا على HB 395/SB 250 في 22 أبريل 2026، ودخل حيز التنفيذ في 1 يوليو 2026** — القانون موقّع ودخل حيز التنفيذ بالفعل حتى وقت كتابة هذا التقرير؛ ولا يمكن للحكومات المحلية حظر الطاقة الشمسية للشرفات ضمن سقف الولاية البالغ 1200 واط.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'ولايات يجب متابعتها',
        content: [
          '**أقرّ قانون SUNNY الخاص بنيويورك مجلسها التشريعي وهو بانتظار توقيع الحاكم — لا يزال قيد الانتظار، وليس قانونًا بعد، وقد يتغيّر قبل التوقيع.** أما نيوهامبشير وفيرمونت، اللتان كانتا مدرجتين سابقًا في هذه الفئة، فأصبحتا الآن مؤكَّدتين كولايتين موقِّعتين — انظر جدول الولايات أعلاه.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'كيفية التحقق من شركة الكهرباء لديك',
        content: [
          '**إذا لم تكن ولايتك ضمن قائمة الولايات الموقِّعة أو المنتظرة، فإن أفضل خطوة تالية هي التواصل مباشرة مع شركة الكهرباء المحلية لديك، إذ إن سياسة الربط بالشبكة على مستوى شركة الكهرباء قد تكون مهمة أحيانًا حتى في غياب تشريع على مستوى الولاية.** لا تفترض أن الطاقة الشمسية للشرفات قانونية أو غير قانونية في ولاية غير مدرجة دون التحقق — فالإجابة الصادقة بالنسبة لمعظم الولايات الأمريكية حاليًا هي "غير محدد"، وليست نعم أو لا واضحة.',
        ],
        callouts: [
          { type: 'warning', text: 'قد يؤدي شراء الأجهزة قبل التأكد من وضع ولايتك إلى الحصول على نظام غير قابل للاستخدام — إذ إن عددًا من الأطقم مقيّد صراحةً بولايات محددة من قِبل الشركة المصنِّعة، وليس فقط بموجب القانون.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هي الولايات الأمريكية التي أقرّت قانونية الطاقة الشمسية للشرفات؟', a: 'وقّعت ثماني ولايات على تشريعات حتى وقت كتابة هذا التقرير: يوتا وماين وفيرجينيا وماريلاند وكولورادو ونيوهامبشير وفيرمونت وكونيتيكت. وأقرّت ولاية واحدة أخرى — نيويورك — مشروع القانون في مجلسها التشريعي وهي بانتظار توقيع الحاكم. ولايتان من الولايات الثماني الموقِّعة (كولورادو وكونيتيكت) لم تدخلا حيز التنفيذ بعد.' },
          { q: 'هل الطاقة الشمسية للشرفات غير قانونية في الولايات غير المدرجة في هذه القائمة؟', a: 'ليست غير قانونية بالضرورة — فمعظم الولايات غير المدرجة ببساطة لم تتناول موضوع الطاقة الشمسية للشرفات تحديدًا بعد. الوضع غير محدد وليس قانونيًا أو غير قانوني بشكل واضح؛ تحقق من شركة الكهرباء المحلية لديك.' },
          { q: 'ما هي الولاية التي لديها أعلى سقف للقدرة الكهربائية؟', a: 'كولورادو، عند 1920 واط — وهو أعلى سقف مؤكَّد بين جميع قوانين الولايات الأمريكية للطاقة الشمسية للشرفات التي تم العثور عليها.' },
          { q: 'هل يوجد قانون فيدرالي للطاقة الشمسية للشرفات؟', a: 'لا. لا يوجد إطار عمل فيدرالي للتقنين — فقط معيار UL 3700، وهو معيار اعتماد فيدرالي للسلامة، وهو منفصل عن التقنين على مستوى الولاية ولا يجعل بحد ذاته الطاقة الشمسية للشرفات قانونية في أي مكان.' },
          { q: 'كم مرة يتغير عدد الولايات هذا؟', a: 'بشكل متكرر بما يكفي لجعل هذه الصفحة تُحدَّث كل 60 يومًا بدلًا من دورة الستة أشهر القياسية المستخدمة في بقية هذا الدليل — إذ إن التشريعات على مستوى الولايات الأمريكية بشأن هذا الموضوع تتحرك أسرع من معظم الحقائق الأخرى التي يتم تتبعها.' },
          { q: 'هل تواريخ التوقيع في كولورادو وماريلاند وكونيتيكت مؤكَّدة بالكامل؟', a: 'تم التحقق منها عبر متتبّعات ثانوية (متتبعات صناعية وتغطية صحفية) لكن لم يتم التحقق منها بشكل مستقل مقابل النص التشريعي الأساسي للولاية في هذه الجولة — تأكد من التواريخ الدقيقة عبر السجلات الرسمية للولاية قبل الاعتماد عليها في أي أمر حسّاس زمنيًا.' },
          { q: 'هل يمكنني شراء أجهزة الطاقة الشمسية للشرفات قبل أن تُقِرّ ولايتي التشريع؟', a: 'بعض الأجهزة متوفرة على المستوى الوطني بغض النظر عن وضع التشريع في الولاية، لكن عددًا من الأطقم التي تتضمن تخزينًا للطاقة مقيّد صراحةً من قِبل الشركة المصنِّعة بولايات محددة — تحقق من توفر المنتج، وليس فقط الوضع القانوني، قبل الشراء.' },
          { q: 'ماذا يحدث للتشريع المعلَّق إذا لم يوقّعه الحاكم؟', a: 'يختلف هذا وفقًا للعملية التشريعية والمهلة الزمنية الخاصة بكل ولاية — فمشروع القانون الذي لا يُوقَّع خلال المهلة المحددة له قد يحتاج إلى إعادة تقديمه في دورة تشريعية مستقبلية، مع أن الآليات الدقيقة تختلف باختلاف الولاية.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'هل الطاقة الشمسية للشرفات قانونية في ولايتي؟ دليل الولايات الأمريكية واحدة تلو الأخرى',
      description: 'هل الطاقة الشمسية للشرفات قانونية في ولايتك الأمريكية؟ وقّعت ولايات على تشريعات حتى وقت كتابة هذا التقرير، مع وجود المزيد قيد الانتظار — حالة موثّقة لكل ولاية، محدّثة في يوليو 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/ar/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'ar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المشترون في الولايات المتحدة الذين يريدون معرفة ما إذا كانت الطاقة الشمسية للشرفات قانونية في ولايتهم تحديدًا' },
      about: ['قانون الطاقة الشمسية للشرفات في الولايات المتحدة', 'UL 3700', 'التشريعات على مستوى الولايات', 'قانونية الطاقة الشمسية القابلة للتوصيل'],
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-ja.webp',
    title: 'バルコニーソーラーは自分の州で合法? 米国州別ガイド',
    seoTitle: '州別バルコニーソーラーの合法性: 米国ガイド(2026年)',
    intro: `執筆時点で、米国では${signedStates.length}州がバルコニーソーラーに関する法律に署名し、さらに${pendingStates.length}州が州議会を通過して知事の署名待ちとなっている。連邦レベルの枠組みは存在せず、合法性は完全に州ごとに決まる。ほとんどの州はまだバルコニーソーラーについて 具体的に取り上げていない。`,
    metaDescription: `あなたの州でバルコニーソーラーは合法? 執筆時点で${signedStates.length}州が法律に署名済み、さらに審議中の州もある — 州別の最新状況、2026年7月更新。`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '約9分',
    educationalLevel: 'Intermediate',
    audience: '自分の州でバルコニーソーラーが合法かどうかを確認したい米国の購入検討者',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['バルコニーソーラー 自分の州 合法', '米国 バルコニーソーラー 州法', 'プラグイン ソーラー 合法な州', 'バルコニーソーラー 法律 2026'],
    leadAnswerBlock: `**執筆時点(2026-07-16)で、米国の${signedStates.length}州がバルコニーソーラーに関する法律に署名済みだ — ユタ州、メイン州、バージニア州、メリーランド州、コロラド州、ニューハンプシャー州、バーモント州、コネチカット州 — さらに${pendingStates.length}州(ニューヨーク州)が州議会を通過し、知事の署名待ちとなっている。署名済み8州のうち2州はまだ発効していない:コロラド州は2027年1月1日、コネチカット州は2026年10月1日に発効する。** バルコニーソーラーに関する連邦法は存在しない。あなたの州がどちらのリストにも載っていない場合、現状は「明確に合法」でも「違法」でもなく、単に未確定というだけだ — どちらとも決めつける前に、地元の電力会社に確認してほしい。`,
    quickAnswerTop: {
      ja: {
        question: '米国でバルコニーソーラーを合法化した州はどこ?',
        answer: `執筆時点で8州がバルコニーソーラーに関する法律に署名済みだ:ユタ州(最初、HB 340)、メイン州、バージニア州、メリーランド州、コロラド州(最高出力上限1,920W)、ニューハンプシャー州、バーモント州、コネチカット州。さらに1州 — ニューヨーク州 — が州議会を通過し、知事の署名を待っている。連邦レベルの枠組みは存在せず、他のほとんどの州はまだバルコニーソーラーを 具体的に取り上げていない。`,
        bullets: [
          '署名済み: ユタ州(HB 340)、メイン州(LD 1730)、バージニア州(HB 395/SB 250)、メリーランド州(HB 1532)、コロラド州(HB 26-1007)、ニューハンプシャー州(SB 540)、バーモント州(S.202/H.598)、コネチカット州(HB 5340)',
          'コロラド州は全州の中で最も高い確認済み出力上限(1,920W)を持つ',
          '知事の署名待ち: ニューヨーク州(SUNNY Act)',
          '連邦レベルのバルコニーソーラー枠組みは存在しない — 各州の状況はそれぞれ独立している',
          'この件数は毎月変動する — だからこのページは60日ごとに更新される',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: '#key-takeaways' },
      { label: '連邦レベルの状況', anchor: '#federal-picture' },
      { label: '州別一覧表', anchor: '#state-table' },
      { label: 'ユタ州', anchor: '#utah' },
      { label: 'メイン州', anchor: '#maine' },
      { label: 'バージニア州', anchor: '#virginia' },
      { label: '注目すべき州', anchor: '#states-to-watch' },
      { label: '電力会社への確認方法', anchor: '#check-your-utility' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `執筆時点(2026-07-16)で${signedStates.length}州がバルコニーソーラーに関する法律に署名済み: ユタ州、メイン州、バージニア州、メリーランド州、コロラド州、ニューハンプシャー州、バーモント州、コネチカット州。コロラド州(2027年1月1日)とコネチカット州(2026年10月1日)は署名済みだがまだ発効していない。`,
          `さらに${pendingStates.length}州 — ニューヨーク州 — が州議会を通過し知事の署名を待っている。まだ法律ではない。`,
          'コロラド州は確認済みの中で最も高い州出力上限、1,920Wを持つ。',
          '連邦レベルのバルコニーソーラー枠組みは存在しない — 各州の状況は完全に独立しており、ほとんどの州はまだこの話題を取り上げていない。',
          'コロラド州・メリーランド州・コネチカット州の署名日は二次情報源のトラッカーでのみ相互確認されており、一次の法律文書では確認されていない — 正確な日付に依存する前に州の公式記録で確認すること。',
          'このページは標準の6か月周期(semi_annual)ではなく60日ごとに更新される。州の件数がそれより速く変動するためだ。',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: '連邦レベルの状況',
        content: [
          '**バルコニーソーラーに関する連邦法は存在しない — 合法性は完全に州レベルで決まる。** バルコニーソーラーに関連する唯一の連邦レベルの動きはUL 3700で、これは安全認証基準であり(合法化の枠組みではない)、2026年1月に開始された。',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'UL 3700認証の現状',
        content: [
          '**プラグイン式ソーラー機器向けの連邦安全認証基準であるUL 3700は、2026年1月8日に試験・認証プログラムを開始した — しかし、執筆時点でこの認証を完全に取得したバルコニーソーラーシステムはまだ存在しない。** 試験には数か月かかり、どのブランドの製品も執筆時点でプロセスを完了していない。「UL 3700準拠」などと表示された製品が実際に認証を完了していると思い込まないこと — 依拠する前に具体的な主張を確認してほしい。',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: '州別一覧表',
        content: [
          `**この州の件数は毎月変動し、このガイドで追跡している他のほとんどの事実より速いペースだ — だからこのページは標準の6か月周期ではなく60日ごとに更新される。** コロラド州、メリーランド州、コネチカット州の署名日は二次情報源のトラッカーで相互確認されたものであり、一次の法律文書ではない — 時間に敏感な用途に依拠する前に、州の公式記録で正確な日付を確認すること。`,
          '**特定の州の詳細なルール、節約額の見積もり、製品の選択肢については、専用ガイドを参照してほしい:** [ユタ州](/ja/prompt-bites/is-balcony-solar-legal-utah) · [メイン州](/ja/prompt-bites/is-balcony-solar-legal-maine) · [バージニア州](/ja/prompt-bites/is-balcony-solar-legal-virginia) · [メリーランド州](/ja/prompt-bites/is-balcony-solar-legal-maryland) · [コロラド州](/ja/prompt-bites/is-balcony-solar-legal-colorado) · [ニューハンプシャー州](/ja/prompt-bites/is-balcony-solar-legal-new-hampshire) · [バーモント州](/ja/prompt-bites/is-balcony-solar-legal-vermont) · [コネチカット州](/ja/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'ユタ州',
        content: [
          '**ユタ州は2025年3月にバルコニーソーラー専用法HB 340に署名した米国最初の州で、2025年5月7日に発効した。** その結果、最も市場が確立している州であり続けており、複数のハードウェアベンダーが自社製品ページでユタ州固有の適合性に直接言及している。',
        ],
      },
      maine: {
        id: 'maine',
        title: 'メイン州',
        content: [
          '**メイン州は2026年4月6日にLD 1730に署名し、発効日は2026年7月だ。**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'バージニア州',
        content: [
          '**バージニア州は2026年4月22日にHB 395/SB 250に署名し、2026年7月1日に発効した** — 法律は署名済みで、執筆時点ですでに発効している。自治体は州の出力上限1,200W以内でバルコニーソーラーを禁止できない。',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: '注目すべき州',
        content: [
          '**ニューヨーク州のSUNNY Actは州議会を通過し知事の署名を待っている — 審議中であり、まだ法律ではなく、署名前に内容が変わる可能性もある。** 以前この区分に含まれていたニューハンプシャー州とバーモント州は、現在は署名済みと確認されている(上記の州別一覧表を参照)。',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: '電力会社への確認方法',
        content: [
          '**あなたの州が署名済みリストにも審議中リストにも載っていない場合、次に取るべき最善の行動は地元の電力会社に直接連絡することだ。州レベルの法律がなくても、電力会社レベルの系統連系ポリシーが重要になる場合があるためだ。** 未掲載の州でバルコニーソーラーが合法か違法かを確認せずに思い込まないこと — 現時点でほとんどの米国の州にとって正直な答えは「未確定」であり、明確な「はい」でも「いいえ」でもない。',
        ],
        callouts: [
          { type: 'warning', text: '自分の州の状況を確認する前にハードウェアを購入すると、使用できないシステムを手にすることになりかねない — 複数のキットはメーカーによって法律とは別に特定の州に明示的に販売制限されている。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '米国でバルコニーソーラーを合法化した州はどこ?', a: '執筆時点で8州が法律に署名済み: ユタ州、メイン州、バージニア州、メリーランド州、コロラド州、ニューハンプシャー州、バーモント州、コネチカット州。さらに1州 — ニューヨーク州 — が州議会を通過し知事の署名を待っている。署名済み8州のうち2州(コロラド州、コネチカット州)はまだ発効していない。' },
          { q: 'このリストにない州ではバルコニーソーラーは違法?', a: '必ずしも違法ではない — 未掲載のほとんどの州は単にバルコニーソーラーを 具体的に取り上げていないだけだ。状況は明確に合法でも違法でもなく未確定であり、地元の電力会社に確認してほしい。' },
          { q: 'どの州の出力上限が最も高い?', a: 'コロラド州で1,920W — 確認できた米国のバルコニーソーラー州法の中で最も高い上限だ。' },
          { q: 'バルコニーソーラーに関する連邦法はある?', a: 'ない。連邦レベルの合法化の枠組みは存在せず、あるのはUL 3700という連邦レベルの安全認証基準だけだ。これは州レベルの合法化とは別物であり、それ自体がどこかでバルコニーソーラーを合法にするわけではない。' },
          { q: 'この州の件数はどのくらいの頻度で変わる?', a: 'このガイドの他の部分で使われている標準の6か月周期ではなく、このページが60日ごとに更新されるほどの頻度で変わる — この話題に関する米国の州法制定は、追跡している他のほとんどの事実より速く動いている。' },
          { q: 'コロラド州、メリーランド州、コネチカット州の署名日は完全に確認されている?', a: '二次情報源のトラッカー(業界トラッカーや報道)で相互確認されたが、今回の更新では一次の州法律文書に対して独立に確認されたわけではない — 時間に敏感な用途に依拠する前に、州の公式記録で正確な日付を確認すること。' },
          { q: '自分の州が法律を制定する前にバルコニーソーラーのハードウェアを購入できる?', a: '一部のハードウェアは州の法制化状況にかかわらず全国で購入可能だが、蓄電機能を含む複数のキットはメーカーによって特定の州に明示的に販売制限されている — 購入前に法的状況だけでなく製品の入手可否も確認すること。' },
          { q: '知事が署名しなかった場合、審議中の法案はどうなる?', a: 'これは州ごとの具体的な立法プロセスと期限のルールによって異なる — 適用される期間内に署名されなかった法案は将来の会期で再提出する必要がある場合があるが、正確な仕組みは州によって異なる。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'バルコニーソーラーは自分の州で合法? 米国州別ガイド',
      description: 'あなたの州でバルコニーソーラーは合法? 執筆時点で州が法律に署名済み、さらに審議中の州もある — 州別の最新状況、2026年7月更新。',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/ja/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'ja',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '自分の州でバルコニーソーラーが合法かどうかを確認したい米国の購入検討者' },
      about: ['米国のバルコニーソーラー法', 'UL 3700', '州法', 'プラグイン式ソーラーの合法性'],
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-zh.webp',
    title: '阳台光伏在我所在的州合法吗?美国各州指南',
    seoTitle: '各州阳台光伏合法性:美国指南(2026年)',
    intro: `截至发稿时,美国已有${signedStates.length}个州签署了阳台光伏相关立法使其成为正式法律,另有${pendingStates.length}个州的法案已通过州议会,正等待州长签署。目前不存在联邦层面的统一框架——合法性完全由各州自行决定,大多数州尚未专门就阳台光伏立法。`,
    metaDescription: `阳台光伏在你所在的美国州合法吗?截至发稿时已有${signedStates.length}个州签署立法,更多州正在审议中——各州最新状态,2026年7月更新。`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '约9分钟',
    educationalLevel: 'Intermediate',
    audience: '想确认阳台光伏在自己所在州是否合法的美国买家',
    primaryTerm: '阳台光伏',
    targetKeywords: ['阳台光伏 我的州 合法吗', '美国 阳台光伏 州法', '插电式太阳能 合法的州', '阳台光伏 法规 2026'],
    leadAnswerBlock: `**截至发稿时(2026-07-16),美国已有${signedStates.length}个州签署阳台光伏立法使其成为正式法律——犹他州、缅因州、弗吉尼亚州、马里兰州、科罗拉多州、新罕布什尔州、佛蒙特州和康涅狄格州——另有${pendingStates.length}个州(纽约州)的法案已通过州议会,正等待州长签署。已签署的8个州中有两个尚未生效:科罗拉多州将于2027年1月1日生效,康涅狄格州将于2026年10月1日生效。** 目前没有联邦层面的阳台光伏法律;如果你所在的州不在以上两份名单中,其现状只是尚未明确,并非明确合法或违法——在做任何假设之前,先向当地电力公司核实。`,
    quickAnswerTop: {
      zh: {
        question: '美国哪些州已将阳台光伏合法化?',
        answer: `截至发稿时,已有八个州签署阳台光伏立法:犹他州(最早,HB 340)、缅因州、弗吉尼亚州、马里兰州、科罗拉多州(功率上限最高,1920W)、新罕布什尔州、佛蒙特州以及康涅狄格州。另有一个州——纽约州——的法案已通过州议会,正等待州长签署。目前不存在联邦层面的框架;其他大多数州尚未专门就阳台光伏立法。`,
        bullets: [
          '已签署:犹他州(HB 340)、缅因州(LD 1730)、弗吉尼亚州(HB 395/SB 250)、马里兰州(HB 1532)、科罗拉多州(HB 26-1007)、新罕布什尔州(SB 540)、佛蒙特州(S.202/H.598)、康涅狄格州(HB 5340)',
          '科罗拉多州拥有各州中已确认的最高功率上限,达1920W',
          '等待州长签署:纽约州(SUNNY Act)',
          '不存在联邦层面的阳台光伏框架——每个州的状态各自独立',
          '这一数字每月都在变化——这也是本页每60天更新一次的原因',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '联邦层面的情况', anchor: '#federal-picture' },
      { label: '各州状态一览表', anchor: '#state-table' },
      { label: '犹他州', anchor: '#utah' },
      { label: '缅因州', anchor: '#maine' },
      { label: '弗吉尼亚州', anchor: '#virginia' },
      { label: '值得关注的州', anchor: '#states-to-watch' },
      { label: '如何核实你的电力公司政策', anchor: '#check-your-utility' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `截至发稿时(2026-07-16),已有${signedStates.length}个州签署阳台光伏立法:犹他州、缅因州、弗吉尼亚州、马里兰州、科罗拉多州、新罕布什尔州、佛蒙特州、康涅狄格州。科罗拉多州(2027年1月1日)和康涅狄格州(2026年10月1日)已签署但尚未生效。`,
          `另有${pendingStates.length}个州——纽约州——法案已通过州议会,正等待州长签署;目前尚未正式成为法律。`,
          '科罗拉多州拥有已确认的最高州级功率上限,达1920W。',
          '不存在联邦层面的阳台光伏框架——每个州的状态完全独立,大多数州尚未涉及这一话题。',
          '科罗拉多州、马里兰州、康涅狄格州的签署日期仅通过二手追踪信息源交叉核实,未查阅一手立法文本——在依赖具体日期前,请以州官方记录为准进行核实。',
          '本页每60天更新一次,而非默认的6个月(semi_annual)周期,原因是各州数量的变化速度快于这一默认周期。',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: '联邦层面的情况',
        content: [
          '**目前不存在联邦层面的阳台光伏法律——合法性完全由州一级决定。** 与阳台光伏相关的唯一联邦层面进展是UL 3700,这是一项安全认证标准(而非合法化框架),于2026年1月推出。',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'UL 3700认证现状',
        content: [
          '**UL 3700是针对插电式太阳能设备的联邦安全认证标准,已于2026年1月8日启动测试与认证项目——但截至发稿时,尚无任何完整的阳台光伏系统获得该认证。** 测试需要数月时间,截至发稿时没有任何品牌的产品完成整个认证流程。不要仅凭产品宣传为"符合UL 3700"或类似字样就认为它已完成认证——依赖该说法前请核实具体认证情况。',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: '各州状态一览表',
        content: [
          `**这份州数量统计每月都会变化,速度快于本指南追踪的大多数其他事实——这也是本页每60天更新一次、而非标准6个月周期的原因。** 科罗拉多州、马里兰州、康涅狄格州的签署日期是通过二手追踪信息源交叉核实的,并非一手立法文本——对时效性要求高的用途,请以州官方记录核实准确日期。`,
          '**特定州的完整规则、预估节省金额和产品选项,请参阅专门指南:** [犹他州](/zh/prompt-bites/is-balcony-solar-legal-utah) · [缅因州](/zh/prompt-bites/is-balcony-solar-legal-maine) · [弗吉尼亚州](/zh/prompt-bites/is-balcony-solar-legal-virginia) · [马里兰州](/zh/prompt-bites/is-balcony-solar-legal-maryland) · [科罗拉多州](/zh/prompt-bites/is-balcony-solar-legal-colorado) · [新罕布什尔州](/zh/prompt-bites/is-balcony-solar-legal-new-hampshire) · [佛蒙特州](/zh/prompt-bites/is-balcony-solar-legal-vermont) · [康涅狄格州](/zh/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: '犹他州',
        content: [
          '**犹他州是美国第一个签署专门阳台光伏立法(HB 340)的州,于2025年3月签署,2025年5月7日生效。** 因此,犹他州仍是市场发展最成熟的州——多家硬件厂商在产品页面上直接标注了针对犹他州的合规信息。',
        ],
      },
      maine: {
        id: 'maine',
        title: '缅因州',
        content: [
          '**缅因州于2026年4月6日签署LD 1730,生效日期为2026年7月。**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: '弗吉尼亚州',
        content: [
          '**弗吉尼亚州于2026年4月22日签署HB 395/SB 250,自2026年7月1日起生效**——截至发稿时该法律已签署并已正式生效;地方政府不得在州级1200W上限范围内禁止阳台光伏。',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: '值得关注的州',
        content: [
          '**纽约州的SUNNY Act已通过州议会,正等待州长签署——该法案仍处于审议阶段,尚未成为正式法律,在签署前仍有可能发生变化。** 此前列入本类别的新罕布什尔州和佛蒙特州,现已确认完成签署——详见上方的各州状态一览表。',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: '如何核实你的电力公司政策',
        content: [
          '**如果你所在的州既不在已签署名单也不在审议中名单上,最好的下一步是直接联系当地电力公司,因为即使没有州级立法,电力公司层面的并网政策有时也可能起决定性作用。** 不要在未核实的情况下假设阳台光伏在未列出的州属于合法或违法——目前对大多数美国州而言,诚实的答案是"尚未明确",而不是清晰的是或否。',
        ],
        callouts: [
          { type: 'warning', text: '在确认所在州的具体状态之前购买硬件,可能导致你买到无法使用的系统——多款套件被厂商明确限制只能在特定州销售,这一限制不仅来自法律本身。' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '美国哪些州已将阳台光伏合法化?', a: '截至发稿时,已有八个州签署立法:犹他州、缅因州、弗吉尼亚州、马里兰州、科罗拉多州、新罕布什尔州、佛蒙特州、康涅狄格州。另有一个州——纽约州——法案已通过州议会,正等待州长签署。已签署的8个州中有两个(科罗拉多州、康涅狄格州)尚未生效。' },
          { q: '未列入名单的州,阳台光伏是否违法?', a: '不一定违法——大多数未列入名单的州只是尚未专门就阳台光伏立法。这些州的状态属于尚未明确,而非明确合法或违法;建议向当地电力公司核实。' },
          { q: '哪个州的功率上限最高?', a: '科罗拉多州,上限为1920W——是目前已发现的美国各州阳台光伏法律中已确认的最高上限。' },
          { q: '是否存在联邦层面的阳台光伏法律?', a: '没有。目前不存在联邦层面的合法化框架——只有UL 3700这一联邦级安全认证标准,它与州级合法化是两回事,本身并不能使阳台光伏在任何地方自动合法。' },
          { q: '这份州数量统计多久变化一次?', a: '变化频率高到足以让本页每60天更新一次,而不是本指南其他部分使用的标准6个月周期——美国各州在这一议题上的立法进展快于大多数其他被追踪的事实。' },
          { q: '科罗拉多州、马里兰州和康涅狄格州的签署日期是否已完全确认?', a: '这些日期已通过二手追踪信息源(行业追踪机构及媒体报道)交叉核实,但本次更新未针对一手州立法文本进行独立核查——对时效性要求高的用途,请以州官方记录核实准确日期。' },
          { q: '在所在州通过立法之前,能否提前购买阳台光伏硬件?', a: '部分硬件不受州立法状态影响,可在全国范围内购买,但多款含储能功能的套件被厂商明确限制只能销往特定州——购买前请核实产品的实际可购性,而不仅仅是法律状态。' },
          { q: '如果州长不签署,审议中的法案会怎样?', a: '这取决于各州具体的立法流程和时限规则——如果法案未能在适用的期限内获得签署,可能需要在未来某个会期重新提出,但具体机制因州而异。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '阳台光伏在我所在的州合法吗?美国各州指南',
      description: '阳台光伏在你所在的美国州合法吗?截至发稿时州已签署立法,更多州正在审议中——各州最新状态,2026年7月更新。',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/zh/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'zh',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '想确认阳台光伏在自己所在州是否合法的美国买家' },
      about: ['美国阳台光伏法律', 'UL 3700', '州立法', '插电式太阳能合法性'],
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal dans mon État ? Guide État par État aux États-Unis',
    seoTitle: 'Solaire de balcon légal par État : guide américain (2026)',
    intro: `Au moment de la rédaction, ${signedStates.length} États américains ont promulgué une législation sur le solaire de balcon, et ${pendingStates.length} de plus ont été adoptés par leur assemblée législative d'État et attendent la signature du gouverneur. Il n'existe aucun cadre fédéral — la légalité est déterminée entièrement État par État, et la plupart des États n'ont pas encore traité spécifiquement du solaire de balcon.`,
    metaDescription: `Le solaire de balcon est-il légal dans votre État américain ? ${signedStates.length} États ont promulgué une législation au moment de la rédaction, avec d'autres en attente — statut vérifié État par État, mis à jour en juillet 2026.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs américains cherchant à savoir si le solaire de balcon est légal dans leur État spécifique',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['le solaire de balcon est-il légal dans mon état', 'lois des états américains sur le solaire de balcon', 'états où le solaire branchable est légal', 'législation sur le solaire de balcon 2026'],
    leadAnswerBlock: `**Au moment de la rédaction (2026-07-16), ${signedStates.length} États américains ont promulgué une législation sur le solaire de balcon — l'Utah, le Maine, la Virginie, le Maryland, le Colorado, le New Hampshire, le Vermont et le Connecticut — et ${pendingStates.length} de plus (New York) a été adopté par son assemblée législative d'État et attend la signature du gouverneur. Deux des 8 États signataires ne sont pas encore en vigueur : le Colorado entre en vigueur le 1er janvier 2027 et le Connecticut le 1er octobre 2026.** Il n'existe aucune loi fédérale sur le solaire de balcon ; si votre État ne figure sur aucune des deux listes, son statut actuel est simplement indéterminé plutôt que clairement légal ou illégal — vérifiez auprès de votre fournisseur d'électricité local avant de présumer l'un ou l'autre.`,
    quickAnswerTop: {
      fr: {
        question: 'Quels États américains ont légalisé le solaire de balcon ?',
        answer: `Huit États ont promulgué une législation sur le solaire de balcon au moment de la rédaction : l'Utah (le premier, HB 340), le Maine, la Virginie, le Maryland, le Colorado (le plafond de puissance le plus élevé, à 1 920 W), le New Hampshire, le Vermont et le Connecticut. Un de plus — New York — a été adopté par son assemblée législative d'État et attend la signature du gouverneur. Il n'existe aucun cadre fédéral ; la plupart des autres États n'ont pas encore traité spécifiquement du solaire de balcon.`,
        bullets: [
          'Promulgués : Utah (HB 340), Maine (LD 1730), Virginie (HB 395/SB 250), Maryland (HB 1532), Colorado (HB 26-1007), New Hampshire (SB 540), Vermont (S.202/H.598), Connecticut (HB 5340)',
          'Le Colorado détient le plafond de puissance confirmé le plus élevé de tous les États, à 1 920 W',
          'En attente de la signature du gouverneur : New York (SUNNY Act)',
          'Il n\'existe aucun cadre fédéral pour le solaire de balcon — le statut de chaque État est indépendant',
          'Ce décompte évolue chaque mois — c\'est pourquoi cette page est mise à jour tous les 60 jours',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Situation fédérale', anchor: '#federal-picture' },
      { label: 'Tableau État par État', anchor: '#state-table' },
      { label: 'Utah', anchor: '#utah' },
      { label: 'Maine', anchor: '#maine' },
      { label: 'Virginie', anchor: '#virginia' },
      { label: 'États à surveiller', anchor: '#states-to-watch' },
      { label: 'Comment vérifier auprès de votre fournisseur d\'électricité', anchor: '#check-your-utility' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `${signedStates.length} États ont promulgué une législation sur le solaire de balcon au moment de la rédaction (2026-07-16) : Utah, Maine, Virginie, Maryland, Colorado, New Hampshire, Vermont et Connecticut. Le Colorado (1er janvier 2027) et le Connecticut (1er octobre 2026) sont signés mais pas encore en vigueur.`,
          `${pendingStates.length} État de plus — New York — a été adopté par son assemblée législative et attend la signature du gouverneur ; il n'est PAS encore en vigueur.`,
          'Le Colorado détient le plafond de puissance d\'État confirmé le plus élevé, à 1 920 W.',
          'Il n\'existe aucun cadre fédéral pour le solaire de balcon — le statut de chaque État est totalement indépendant, et la plupart des États n\'ont pas encore abordé le sujet.',
          'Les dates de promulgation du CO/MD/CT n\'ont été vérifiées que via des sources secondaires, pas le texte législatif primaire — confirmez auprès des registres officiels de l\'État avant de vous fier à une date exacte.',
          'Cette page est mise à jour tous les 60 jours plutôt que selon le cycle standard de 6 mois (semi_annual), précisément parce que le décompte des États évolue plus vite que cela.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: 'Situation fédérale',
        content: [
          '**Il n\'existe aucune loi fédérale sur le solaire de balcon — la légalité est déterminée entièrement au niveau de l\'État.** Le seul développement au niveau fédéral pertinent pour le solaire de balcon est l\'UL 3700, une norme de certification de sécurité (et non un cadre de légalisation) lancée en janvier 2026.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'Statut de la certification UL 3700',
        content: [
          '**L\'UL 3700, la norme fédérale de certification de sécurité pour les dispositifs solaires branchables, a lancé son programme de test et de certification le 8 janvier 2026 — mais aucun système complet de solaire de balcon n\'a encore obtenu cette certification.** Les tests prennent des mois, et aucun produit d\'aucune marque n\'a terminé le processus au moment de la rédaction. Ne présumez pas qu\'un produit commercialisé comme « conforme à l\'UL 3700 » ou similaire a réellement terminé la certification — vérifiez l\'affirmation spécifique avant de vous y fier.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: 'Tableau État par État',
        content: [
          `**Ce décompte d\'États évolue chaque mois, plus vite que la plupart des faits suivis dans ce guide — c\'est pourquoi cette page est mise à jour tous les 60 jours plutôt que selon le cycle standard de 6 mois.** Les dates de promulgation du Colorado, du Maryland et du Connecticut ont été vérifiées via des sources secondaires, pas le texte législatif primaire — confirmez les dates exactes auprès des registres officiels de l\'État avant de vous y fier pour quoi que ce soit de sensible au facteur temps.`,
          '**Les règles complètes, les estimations d\'économies et les options de produits pour un État spécifique se trouvent dans le guide dédié :** [Utah](/fr/prompt-bites/is-balcony-solar-legal-utah) · [Maine](/fr/prompt-bites/is-balcony-solar-legal-maine) · [Virginie](/fr/prompt-bites/is-balcony-solar-legal-virginia) · [Maryland](/fr/prompt-bites/is-balcony-solar-legal-maryland) · [Colorado](/fr/prompt-bites/is-balcony-solar-legal-colorado) · [New Hampshire](/fr/prompt-bites/is-balcony-solar-legal-new-hampshire) · [Vermont](/fr/prompt-bites/is-balcony-solar-legal-vermont) · [Connecticut](/fr/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: 'Utah',
        content: [
          '**L\'Utah a été le premier État américain à promulguer une législation dédiée au solaire de balcon, la HB 340, en mars 2025, entrée en vigueur le 7 mai 2025.** Il reste de ce fait l\'État où le marché du solaire de balcon est le plus établi — plusieurs fournisseurs de matériel mentionnent directement la conformité spécifique à l\'Utah sur les pages de leurs produits.',
        ],
      },
      maine: {
        id: 'maine',
        title: 'Maine',
        content: [
          '**Le Maine a promulgué la LD 1730 le 6 avril 2026, avec une date d\'entrée en vigueur en juillet 2026.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: 'Virginie',
        content: [
          '**La Virginie a promulgué la HB 395/SB 250 le 22 avril 2026, entrée en vigueur le 1er juillet 2026** — la loi est signée et déjà en vigueur au moment de la rédaction ; les municipalités ne peuvent pas interdire le solaire de balcon dans la limite du plafond de l\'État de 1 200 W.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: 'États à surveiller',
        content: [
          '**Le SUNNY Act de New York a été adopté par l\'assemblée législative de l\'État et attend la signature du gouverneur — il est en attente, pas encore en vigueur, et pourrait encore évoluer avant sa promulgation.** Le New Hampshire et le Vermont, auparavant dans cette catégorie, sont désormais confirmés comme signés — voir le tableau des États ci-dessus.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: 'Comment vérifier auprès de votre fournisseur d\'électricité',
        content: [
          '**Si votre État ne figure ni sur la liste des États ayant promulgué une loi ni sur celle des États en attente, votre meilleure prochaine étape est de contacter directement votre fournisseur d\'électricité local, car la politique d\'interconnexion au niveau du fournisseur peut parfois avoir de l\'importance même en l\'absence de législation d\'État.** Ne présumez pas que le solaire de balcon est légal ou illégal dans un État non répertorié sans vérifier — la réponse honnête pour la plupart des États américains en ce moment est « indéterminé », pas un oui ou un non clair.',
        ],
        callouts: [
          { type: 'warning', text: 'Acheter du matériel avant de confirmer le statut de votre État peut vous laisser avec un système inutilisable — plusieurs kits sont explicitement restreints à des États spécifiques par le fabricant, et pas seulement par la loi.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Quels États américains ont légalisé le solaire de balcon ?', a: 'Huit États ont promulgué une législation au moment de la rédaction : Utah, Maine, Virginie, Maryland, Colorado, New Hampshire, Vermont et Connecticut. Un de plus — New York — a été adopté par son assemblée législative et attend la signature du gouverneur. Deux des 8 États signataires (Colorado, Connecticut) ne sont pas encore en vigueur.' },
          { q: 'Le solaire de balcon est-il illégal dans les États non répertoriés ici ?', a: 'Pas nécessairement illégal — la plupart des États non répertoriés n\'ont simplement pas encore traité spécifiquement du solaire de balcon. Leur statut est indéterminé plutôt que clairement légal ou illégal ; vérifiez auprès de votre fournisseur d\'électricité local.' },
          { q: 'Quel État a le plafond de puissance le plus élevé ?', a: 'Le Colorado, à 1 920 W — le plafond confirmé le plus élevé de toutes les lois d\'État américaines sur le solaire de balcon trouvées.' },
          { q: 'Existe-t-il une loi fédérale sur le solaire de balcon ?', a: 'Non. Il n\'existe aucun cadre de légalisation fédéral — seulement l\'UL 3700, une norme fédérale de certification de sécurité, distincte de la légalisation au niveau des États et qui ne rend elle-même le solaire de balcon légal nulle part.' },
          { q: 'À quelle fréquence ce décompte d\'États change-t-il ?', a: 'Assez fréquemment pour que cette page soit mise à jour tous les 60 jours plutôt que selon le cycle standard de 6 mois utilisé ailleurs dans ce guide — la législation des États américains sur ce sujet évolue plus vite que la plupart des autres faits suivis.' },
          { q: 'Les dates de promulgation du Colorado, du Maryland et du Connecticut sont-elles entièrement confirmées ?', a: 'Elles ont été vérifiées via des sources secondaires (trackers sectoriels et couverture médiatique) mais pas vérifiées indépendamment par rapport au texte législatif d\'État primaire lors de cette révision — confirmez les dates exactes auprès des registres officiels de l\'État avant de vous y fier pour quoi que ce soit de sensible au facteur temps.' },
          { q: 'Puis-je acheter du matériel de solaire de balcon avant que mon État ne promulgue une législation ?', a: 'Certains matériels sont disponibles à l\'échelle nationale quel que soit le statut de la législation d\'État, mais plusieurs kits incluant du stockage sont explicitement restreints par le fabricant à des États spécifiques — vérifiez la disponibilité du produit, pas seulement le statut légal, avant d\'acheter.' },
          { q: 'Qu\'advient-il d\'une législation en attente si le gouverneur ne la signe pas ?', a: 'Cela varie selon le processus législatif et les règles de délai propres à chaque État — un projet de loi qui n\'est pas signé dans le délai applicable peut devoir être réintroduit lors d\'une session future, bien que les mécanismes exacts diffèrent selon l\'État.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Le solaire de balcon est-il légal dans mon État ? Guide État par État aux États-Unis',
      description: 'Le solaire de balcon est-il légal dans votre État américain ? Des États ont promulgué une législation au moment de la rédaction, avec d\'autres en attente — statut vérifié État par État, mis à jour en juillet 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/fr/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'fr',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Acheteurs américains cherchant à savoir si le solaire de balcon est légal dans leur État spécifique' },
      about: ['Loi américaine sur le solaire de balcon', 'UL 3700', 'Législation d\'État', 'Légalité du solaire branchable'],
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/balcony-solar-legal-us-states-overview-hero-ko.webp',
    title: '내 주에서 발코니 태양광이 합법인가요? 미국 주별 가이드',
    seoTitle: '주별 발코니 태양광 합법성: 미국 가이드(2026년)',
    intro: `이 글 작성 시점 기준, 미국에서는 ${signedStates.length}개 주가 발코니 태양광 관련 법안에 서명하여 법으로 확정했으며, ${pendingStates.length}개 주가 추가로 주 의회를 통과해 주지사의 서명을 기다리고 있다. 연방 차원의 법적 프레임워크는 존재하지 않으며, 합법 여부는 전적으로 주 단위로 결정된다. 대부분의 주는 아직 발코니 태양광을 구체적으로 다루지 않았다.`,
    metaDescription: `내가 사는 미국 주에서 발코니 태양광이 합법인가요? 이 글 작성 시점 기준 ${signedStates.length}개 주가 법안에 서명했으며, 더 많은 주가 심의 중입니다 — 주별 최신 현황, 2026년 7월 업데이트.`,
    publishDate: '2026-07-02',
    dateModified: '2026-07-16',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    audience: '자신이 거주하는 주에서 발코니 태양광이 합법인지 확인하려는 미국 구매자',
    primaryTerm: 'balcony solar legal states',
    targetKeywords: ['내 주에서 발코니 태양광 합법인가', '미국 발코니 태양광 주법', '플러그인 태양광 합법 주', '발코니 태양광 법률 2026'],
    leadAnswerBlock: `**이 글 작성 시점(2026-07-16) 기준, 미국의 ${signedStates.length}개 주가 발코니 태양광 관련 법안에 서명하여 법으로 확정했다 — 유타주, 메인주, 버지니아주, 메릴랜드주, 콜로라도주, 뉴햄프셔주, 버몬트주, 코네티컷주 — 그리고 ${pendingStates.length}개 주(뉴욕주)가 추가로 주 의회를 통과해 주지사의 서명을 기다리고 있다. 서명 완료된 8개 주 중 2개 주는 아직 시행되지 않았다: 콜로라도주는 2027년 1월 1일, 코네티컷주는 2026년 10월 1일부터 시행된다.** 발코니 태양광에 관한 연방법은 존재하지 않는다. 자신의 주가 두 명단 어디에도 없다면, 현재 상태는 명확히 합법도 불법도 아닌 단순히 미확정 상태다 — 어느 쪽이든 단정하기 전에 지역 전력회사에 먼저 확인해야 한다.`,
    quickAnswerTop: {
      ko: {
        question: '미국에서 발코니 태양광을 합법화한 주는 어디인가요?',
        answer: `이 글 작성 시점 기준 8개 주가 발코니 태양광 법안에 서명했다: 유타주(최초, HB 340), 메인주, 버지니아주, 메릴랜드주, 콜로라도주(최고 출력 상한 1,920W), 뉴햄프셔주, 버몬트주, 코네티컷주. 추가로 1개 주 — 뉴욕주 — 가 주 의회를 통과해 주지사의 서명을 기다리고 있다. 연방 차원의 프레임워크는 존재하지 않으며, 다른 대부분의 주는 아직 발코니 태양광을 구체적으로 다루지 않았다.`,
        bullets: [
          '서명 완료: 유타주(HB 340), 메인주(LD 1730), 버지니아주(HB 395/SB 250), 메릴랜드주(HB 1532), 콜로라도주(HB 26-1007), 뉴햄프셔주(SB 540), 버몬트주(S.202/H.598), 코네티컷주(HB 5340)',
          '콜로라도주는 전체 주 가운데 확인된 최고 출력 상한(1,920W)을 보유',
          '주지사 서명 대기 중: 뉴욕주(SUNNY Act)',
          '연방 차원의 발코니 태양광 프레임워크는 존재하지 않음 — 각 주의 상태는 서로 독립적',
          '이 건수는 매달 변동함 — 그래서 이 페이지는 60일마다 업데이트됨',
        ],
        updatedDate: '2026-07-16',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '연방 차원의 현황', anchor: '#federal-picture' },
      { label: '주별 현황표', anchor: '#state-table' },
      { label: '유타주', anchor: '#utah' },
      { label: '메인주', anchor: '#maine' },
      { label: '버지니아주', anchor: '#virginia' },
      { label: '주목할 주', anchor: '#states-to-watch' },
      { label: '전력회사 확인 방법', anchor: '#check-your-utility' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          `이 글 작성 시점(2026-07-16) 기준 ${signedStates.length}개 주가 발코니 태양광 법안에 서명했다: 유타주, 메인주, 버지니아주, 메릴랜드주, 콜로라도주, 뉴햄프셔주, 버몬트주, 코네티컷주. 콜로라도주(2027년 1월 1일)와 코네티컷주(2026년 10월 1일)는 서명은 완료됐지만 아직 시행되지 않았다.`,
          `추가로 ${pendingStates.length}개 주 — 뉴욕주 — 가 주 의회를 통과해 주지사의 서명을 기다리고 있으며, 아직 법으로 확정되지 않았다.`,
          '콜로라도주는 확인된 주 가운데 가장 높은 출력 상한인 1,920W를 보유하고 있다.',
          '연방 차원의 발코니 태양광 프레임워크는 존재하지 않으며, 각 주의 상태는 완전히 독립적이고, 대부분의 주는 아직 이 주제를 다루지 않았다.',
          'CO/MD/CT의 서명일은 2차 추적 자료를 통해서만 상호 검증되었으며 1차 입법 문서로는 확인되지 않았다 — 정확한 날짜에 의존하기 전 주 공식 기록으로 확인해야 한다.',
          '이 페이지는 기본 6개월 주기(semi_annual) 대신 60일마다 업데이트되는데, 이는 주 건수가 그보다 더 빠르게 변동하기 때문이다.',
        ],
      },
      federalPicture: {
        id: 'federal-picture',
        title: '연방 차원의 현황',
        content: [
          '**발코니 태양광에 관한 연방법은 존재하지 않으며, 합법 여부는 전적으로 주 단위에서 결정된다.** 발코니 태양광과 관련된 유일한 연방 차원의 움직임은 UL 3700으로, 이는 합법화 프레임워크가 아닌 안전 인증 표준이며 2026년 1월에 시작되었다.',
        ],
      },
      federalStandard: {
        id: 'federal-standard',
        title: 'UL 3700 인증 현황',
        content: [
          '**플러그인 태양광 기기용 연방 안전 인증 표준인 UL 3700은 2026년 1월 8일 시험 및 인증 프로그램을 시작했지만, 이 글 작성 시점까지 완전한 발코니 태양광 시스템으로 인증을 취득한 사례는 아직 없다.** 시험에는 수개월이 소요되며, 어떤 브랜드의 제품도 이 글 작성 시점까지 인증 절차를 완료하지 못했다. "UL 3700 준수"와 같은 문구로 마케팅되는 제품이 실제로 인증을 완료했다고 단정하지 말고, 신뢰하기 전에 구체적인 주장을 확인해야 한다.',
        ],
      },
      stateTable: {
        id: 'state-table',
        title: '주별 현황표',
        content: [
          `**이 주 건수는 매달 변동하며, 이 가이드가 추적하는 대부분의 사실보다 빠르게 변한다 — 그래서 이 페이지는 표준 6개월 주기 대신 60일마다 업데이트된다.** 콜로라도주, 메릴랜드주, 코네티컷주의 서명일은 2차 추적 자료를 통해 상호 검증된 것이며 1차 입법 문서는 아니다 — 시간에 민감한 용도로 신뢰하기 전에 주 공식 기록으로 정확한 날짜를 확인해야 한다.`,
          '**특정 주의 전체 규정, 절감액 추정치, 제품 옵션은 전용 가이드에서 확인할 수 있다:** [유타주](/ko/prompt-bites/is-balcony-solar-legal-utah) · [메인주](/ko/prompt-bites/is-balcony-solar-legal-maine) · [버지니아주](/ko/prompt-bites/is-balcony-solar-legal-virginia) · [메릴랜드주](/ko/prompt-bites/is-balcony-solar-legal-maryland) · [콜로라도주](/ko/prompt-bites/is-balcony-solar-legal-colorado) · [뉴햄프셔주](/ko/prompt-bites/is-balcony-solar-legal-new-hampshire) · [버몬트주](/ko/prompt-bites/is-balcony-solar-legal-vermont) · [코네티컷주](/ko/prompt-bites/is-balcony-solar-legal-connecticut)',
        ],
        rows: stateRows,
        columns: ['state', 'status', 'bill', 'signed', 'effective'],
        tableFormat: true,
      },
      utah: {
        id: 'utah',
        title: '유타주',
        content: [
          '**유타주는 2025년 3월 발코니 태양광 전용 법안인 HB 340에 서명한 미국 최초의 주로, 2025년 5월 7일부터 시행되었다.** 그 결과 발코니 태양광 시장이 가장 성숙한 주로 남아 있으며, 여러 하드웨어 제조사가 제품 페이지에서 유타주 특화 규정 준수 사항을 직접 언급하고 있다.',
        ],
      },
      maine: {
        id: 'maine',
        title: '메인주',
        content: [
          '**메인주는 2026년 4월 6일 LD 1730에 서명했으며, 시행일은 2026년 7월이다.**',
        ],
      },
      virginia: {
        id: 'virginia',
        title: '버지니아주',
        content: [
          '**버지니아주는 2026년 4월 22일 HB 395/SB 250에 서명했으며, 2026년 7월 1일부터 시행되었다** — 이 글 작성 시점 기준 법안은 서명되었고 이미 시행 중이다. 지자체는 주의 1,200W 상한 내에서 발코니 태양광을 금지할 수 없다.',
        ],
      },
      statesToWatch: {
        id: 'states-to-watch',
        title: '주목할 주',
        content: [
          '**뉴욕주의 SUNNY Act는 주 의회를 통과해 주지사의 서명을 기다리고 있다 — 아직 심의 중이며 법으로 확정되지 않았고, 서명 전까지 내용이 바뀔 수도 있다.** 이전에 이 범주에 있던 뉴햄프셔주와 버몬트주는 이제 서명이 확인되었다 — 위의 주별 현황표를 참고하라.',
        ],
      },
      checkYourUtility: {
        id: 'check-your-utility',
        title: '전력회사 확인 방법',
        content: [
          '**자신의 주가 서명 완료 명단이나 심의 중 명단 어디에도 없다면, 가장 좋은 다음 단계는 지역 전력회사에 직접 문의하는 것이다. 주 차원의 법이 없더라도 전력회사 차원의 계통 연계 정책이 중요한 경우가 있기 때문이다.** 명단에 없는 주에서 발코니 태양광이 합법인지 불법인지 확인 없이 단정하지 말아야 한다 — 현재 대부분의 미국 주에 대한 정직한 답은 "미확정"이며, 명확한 예 또는 아니오가 아니다.',
        ],
        callouts: [
          { type: 'warning', text: '자신의 주 상태를 확인하기 전에 하드웨어를 구매하면 사용할 수 없는 시스템을 갖게 될 수 있다 — 여러 제품 키트는 법률과 별개로 제조사에 의해 특정 주로만 판매가 명시적으로 제한되어 있다.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '미국에서 발코니 태양광을 합법화한 주는 어디인가요?', a: '이 글 작성 시점 기준 8개 주가 법안에 서명했다: 유타주, 메인주, 버지니아주, 메릴랜드주, 콜로라도주, 뉴햄프셔주, 버몬트주, 코네티컷주. 추가로 1개 주 — 뉴욕주 — 가 주 의회를 통과해 주지사의 서명을 기다리고 있다. 서명 완료된 8개 주 중 2개 주(콜로라도주, 코네티컷주)는 아직 시행되지 않았다.' },
          { q: '이 명단에 없는 주에서는 발코니 태양광이 불법인가요?', a: '반드시 불법인 것은 아니다 — 명단에 없는 대부분의 주는 단순히 아직 발코니 태양광을 구체적으로 다루지 않았을 뿐이다. 상태는 명확히 합법도 불법도 아닌 미확정이며, 지역 전력회사에 확인해야 한다.' },
          { q: '어느 주의 출력 상한이 가장 높나요?', a: '콜로라도주로, 1,920W다 — 확인된 미국 발코니 태양광 주법 중 가장 높은 상한이다.' },
          { q: '발코니 태양광에 관한 연방법이 있나요?', a: '없다. 연방 차원의 합법화 프레임워크는 존재하지 않으며, 연방 차원의 안전 인증 표준인 UL 3700만 있을 뿐이다. 이는 주 차원의 합법화와는 별개이며, 그 자체로 발코니 태양광을 어느 곳에서든 합법으로 만들지는 않는다.' },
          { q: '이 주 건수는 얼마나 자주 바뀌나요?', a: '이 가이드의 다른 부분에서 사용하는 표준 6개월 주기 대신 이 페이지가 60일마다 업데이트될 만큼 자주 바뀐다 — 이 주제에 관한 미국 주 입법은 추적 중인 대부분의 다른 사실보다 빠르게 움직이고 있다.' },
          { q: '콜로라도주, 메릴랜드주, 코네티컷주의 서명일은 완전히 확인되었나요?', a: '2차 추적 자료(업계 추적 기관 및 언론 보도)를 통해 상호 검증되었지만, 이번 업데이트에서 1차 주 입법 문서를 통한 독립적 확인은 이루어지지 않았다 — 시간에 민감한 용도로 신뢰하기 전에 주 공식 기록으로 정확한 날짜를 확인해야 한다.' },
          { q: '내 주가 법안을 통과시키기 전에 발코니 태양광 하드웨어를 구매할 수 있나요?', a: '일부 하드웨어는 주 입법 상태와 관계없이 전국에서 구매 가능하지만, 저장장치가 포함된 여러 키트는 제조사에 의해 특정 주로만 판매가 명시적으로 제한되어 있다 — 구매 전 법적 상태뿐 아니라 제품 구매 가능 여부도 확인해야 한다.' },
          { q: '주지사가 서명하지 않으면 심의 중인 법안은 어떻게 되나요?', a: '이는 각 주의 구체적인 입법 절차와 기한 규정에 따라 다르다 — 적용 기한 내에 서명되지 않은 법안은 향후 회기에 재상정해야 할 수도 있지만, 정확한 절차는 주마다 다르다.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '내 주에서 발코니 태양광이 합법인가요? 미국 주별 가이드',
      description: '내가 사는 미국 주에서 발코니 태양광이 합법인가요? 이 글 작성 시점 기준 주가 법안에 서명했으며, 더 많은 주가 심의 중입니다 — 주별 최신 현황, 2026년 7월 업데이트.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/ko/balcony-solar/balcony-solar-legal-us-states',
      inLanguage: 'ko',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '자신이 거주하는 주에서 발코니 태양광이 합법인지 확인하려는 미국 구매자' },
      about: ['미국 발코니 태양광 법률', 'UL 3700', '주 입법', '플러그인 태양광 합법성'],
    },
  },
};
