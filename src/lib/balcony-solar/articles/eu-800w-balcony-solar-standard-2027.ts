// Slug: eu-800w-balcony-solar-standard-2027
// BSOL-27 — Tier 5 (2027 Trends), legislation, semi_annual.
// NOTE (Phase 3 scope): balkonkraftwerk-germany-rules.ts already covers the German
// 800W/DIN VDE V 0126-95/Schuko facts in depth — this article must scope to the
// CROSS-BORDER harmonization angle (Greece and other EU states adopting the German
// standard), treating Germany as a brief reference-out, not a re-explainer.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    last_full_refresh: '2026-10-19',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-en.webp',
    title: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    seoTitle: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    intro: 'Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, Belgium, and the Netherlands — rather than setting a new precedent others are following. This page tracks how that convergence is spreading — though Greece\'s own mechanism, set by a ministerial decision dated 14 September 2026 under the broader Law 5299/2026, takes a stricter "self-consumption only, no export" approach rather than simply adopting the France/Austria/Belgium/Netherlands model, with the EU\'s Energy Performance of Buildings Directive as the wider driver. Not every member state is converging: Sweden and Hungary appear to remain holdouts, based on regulator and press reports.',
    metaDescription: 'France, Austria, Belgium and the Netherlands already allow 800W balcony solar. Germany joined in December 2025; Greece\'s 2026 decision allows 800 W but bars grid export.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'EU balcony solar buyers outside Germany tracking 800W standard adoption',
    primaryTerm: 'eu 800w balcony solar standard',
    targetKeywords: ['800w balcony solar eu', 'greece balcony solar 800w', 'eu balcony solar harmonization 2027'],
    leadAnswerBlock: '**Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, Belgium, and the Netherlands — rather than setting a new precedent others are following.** Greece is the newest entrant, but with a materially stricter mechanism: a ministerial decision dated 14 September 2026 (reported as Government Gazette Β\' 5573), issued under Law 5299/2026, allows plug-in systems of up to 800 W generation and 1,000 W installed power per supply point, strictly for self-consumption — unlike the notification-only, export-permitted model used elsewhere in the bloc, energy that reaches the grid is not compensated (see the dedicated Greece guide). The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver behind this wider push to formalize rules, though not every member state is converging: Sweden and Hungary appear to remain holdouts, based on regulator and press reports.',
    quickAnswerTop: {
      en: {
        question: 'Is the 800W balcony solar standard spreading across the EU?',
        answer: 'Yes — but Germany is joining an existing convergence, not leading one, and the mechanism varies by country. France, Austria, Belgium, and the Netherlands already permit 800W balcony solar with simple notification-only registration and grid export; Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that norm. Greece is the newest entrant but with a stricter model: a ministerial decision dated 14 September 2026 allows plug-in systems up to 800 W generation and 1,000 W installed power per supply point for self-consumption only, with no compensation for grid injection. The EU\'s revised Energy Performance of Buildings Directive (EPBD) is the structural driver behind the wider push, though Sweden and Hungary appear to remain holdouts, based on regulator and press reports, where plug-in solar isn\'t generally permitted.',
        bullets: [
          'France, Austria, Belgium, and the Netherlands already allow up to 800W balcony solar with simple grid-operator notification and permitted export — Germany joined this norm in December 2025, it did not set it',
          'Greece: ministerial decision dated 14 September 2026 (reported as Gazette Β\' 5573), issued under Law 5299/2026 — plug-in systems up to 800 W generation and 1,000 W installed power per supply point, self-consumption only, no compensation for grid injection, standalone batteries allowed — a materially different mechanism than the notification-only, export-permitted model used elsewhere',
          'The EPBD (entering into force gradually from 2026) is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops',
          'Sweden and Hungary are the EU\'s clearest exceptions — the Swedish electrical safety authority (Elsäkerhetsverket) has said plug-in systems do not meet Swedish standards and must be permanently connected (reported by pv magazine, 2023), and Hungary reportedly bars solar panels from balconies under a building decree in force since 1 January 2025 (reported by CEE Legal Matters), so convergence isn\'t universal',
          'For Germany\'s own 800W mechanics (DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, § 8 EEG 2023), see the dedicated Germany guide rather than this cross-border overview',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The EPBD Is Driving Convergence', anchor: '#epbd-driver' },
      { label: 'Greece: The Newest Entrant', anchor: '#greece' },
      { label: 'What This Means Outside Germany', anchor: '#what-this-means' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'France, Austria, Belgium, and the Netherlands already permit balcony solar up to 800W with simple grid-operator notification and permitted export — Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that existing norm, not the other way around.',
          'Greece\'s balcony-specific mechanics are set by a ministerial decision dated 14 September 2026 (reported as Gazette Β\' 5573, issued under Law 5299/2026): plug-in systems up to 800 W generation and 1,000 W installed power per supply point, strictly for self-consumption and with no compensation for grid injection — not the notification-only, export-permitted model used elsewhere in the bloc.',
          'The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops.',
          'The pattern isn\'t identical across countries: France/Austria/Belgium/Netherlands use notification-only registration with export permitted, while Greece\'s decision is a stricter self-consumption-only design — "800W" doesn\'t mean the same rules everywhere.',
          'Sweden and Hungary are the EU\'s clearest exceptions to the convergence trend — the Swedish electrical safety authority (Elsäkerhetsverket) has said plug-in systems do not meet Swedish standards and must be permanently connected (reported by [pv magazine](https://www.pv-magazine.com/?p=32404), 2023), and Hungary reportedly bars solar panels from balconies under a building decree in force since 1 January 2025 (reported by [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).',
          'For Germany\'s specific mechanics — the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, and § 8 EEG 2023 — see the dedicated Germany guide rather than this cross-border overview.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'The EPBD Is Driving Convergence',
        content: [
          '**The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, explicitly extends solar-installation mandates to facades, balconies, and terraces — not just rooftops.** This reframes balcony solar from a consumer lifestyle choice into a compliance mechanism for member states\' building-decarbonization obligations. Countries that previously treated plug-in solar as a regulatory afterthought now have a directive-level reason to formalize rules quickly, which is the immediate context for Greece\'s 2026 legislative push.',
          'France, Austria, Belgium, and the Netherlands already permit balcony solar up to 800W with only a simple grid-operator notification requirement and permitted export, predating Germany\'s own finalization. Germany\'s DIN VDE V 0126-95, finalized in December 2025, brought it in line with that existing de facto standard rather than establishing a new one — the EPBD is now extending the same underlying logic to the rest of the bloc, though not every member state is adopting the same mechanism (see Greece, below) or converging at all (Sweden, Hungary).',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Greece: The Newest Entrant',
        content: [
          '**Greece is the newest entrant to this convergence, but with a materially stricter mechanism: a ministerial decision dated 14 September 2026 (reported as Government Gazette Β\' 5573), issued under Law 5299/2026 (passed May 5, 2026), allows plug-in systems of up to 800 W generation and 1,000 W installed power per supply point for self-consumption only — energy injected into the grid is not compensated, and standalone batteries are allowed with no export.** Registration is a notification through a DEDDIE/HEDNO portal that is not open yet (technical specifications due by 31 October 2026, portal start date by 31 December 2026). For details and sources, see the dedicated Greece guide rather than this brief summary.',
        ],
        callouts: [
          { type: 'warning', text: 'Summary of published coverage, not legal advice; the portal and technical specifications are still pending — see the dedicated Greece guide for current status before treating any detail as settled.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'What This Means Outside Germany',
        content: [
          '**If your country doesn\'t yet have explicit balcony solar rules, the direction of travel is now predictable in shape if not in mechanism: expect an 800W-class cap and a timeline tied to your country\'s EPBD transposition deadline rather than open-ended uncertainty — but the exact rules can differ meaningfully by country, from notification-only with export (France, Austria, Belgium, Netherlands) to a stricter self-consumption-only design (Greece).** Greece is the clearest current example of a country moving from grey-zone to formalized rules, though its no-export approach shows that "800W" alone doesn\'t guarantee the same mechanism as elsewhere in the bloc — additional EU member states are likely to formalize rules as EPBD transposition deadlines approach, but not necessarily via the same model, and Sweden and Hungary show that convergence isn\'t guaranteed at all.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Did Germany set the EU\'s 800W balcony solar standard?', a: 'No — France, Austria, Belgium, and the Netherlands already permitted balcony solar up to 800W with simple notification-only registration before Germany finalized its own DIN VDE V 0126-95 standard in December 2025. Germany joined an existing de facto EU norm rather than creating a new one.' },
          { q: 'What is Greece doing about balcony solar in 2026?', a: 'A ministerial decision dated 14 September 2026 (reported as Government Gazette Β\' 5573), issued under Law 5299/2026, allows plug-in systems up to 800 W generation and 1,000 W installed power per supply point for self-consumption only: energy injected into the grid is not compensated, and registration is a notification through a DEDDIE/HEDNO portal that is not open yet. See the dedicated Greece guide for sources and current status.' },
          { q: 'What is the EPBD and why does it matter for balcony solar?', a: 'The revised Energy Performance of Buildings Directive (EPBD) enters into force gradually from 2026 and extends EU building-solar mandates to facades, balconies, and terraces, not just rooftops — turning balcony solar into a compliance mechanism for member states rather than a discretionary policy choice.' },
          { q: 'Is balcony solar legal everywhere in the EU?', a: 'No. While momentum is toward an 800W-style framework in many member states, the Swedish electrical safety authority (Elsäkerhetsverket) has said plug-in systems do not meet Swedish standards and must be permanently connected (reported by pv magazine, 2023), and Hungary reportedly bars solar panels from balconies under a building decree in force since 1 January 2025 (reported by CEE Legal Matters) — convergence toward a common EU approach is real but not universal.' },
          { q: 'Where can I find Germany\'s specific balcony solar rules?', a: 'See the dedicated Germany guide, which covers the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko-socket sub-cap, and the § 8 EEG 2023 legal text in full — this page focuses on cross-border harmonization rather than repeating those mechanics.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — the full German 800W/DIN VDE V 0126-95 deep-dive this article references rather than repeats',
          '[Is Balcony Solar Legal in Greece? 2027 Status Report](/balcony-solar/balcony-solar-greece-status-2027) — the full Greek Law 5299/2026 deep-dive this article summarizes rather than repeats',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-de.webp',
    title: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    seoTitle: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    intro: 'Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 unter DIN VDE V 0126-95 finalisiert, bringt das Land auf einen faktischen EU-Standard, den Frankreich, Österreich, Belgien und die Niederlande bereits nutzen — statt einen neuen Präzedenzfall zu setzen, dem andere folgen. Diese Seite verfolgt, wie sich diese Angleichung ausbreitet — wobei Griechenlands eigener Mechanismus, festgelegt durch eine Ministerialentscheidung vom 14. September 2026 unter dem übergeordneten Gesetz 5299/2026, einen strengeren Ansatz „nur Eigenverbrauch, keine Einspeisung" verfolgt, statt einfach das Modell Frankreichs/Österreichs/Belgiens/der Niederlande zu übernehmen; der weitere Treiber ist die EU-Gebäuderichtlinie (EPBD). Nicht jeder Mitgliedstaat gleicht sich an: Schweden und Ungarn scheinen laut Behörden- und Presseberichten Ausnahmen zu bleiben.',
    metaDescription: 'Frankreich, Österreich, Belgien und die Niederlande erlauben 800-W-Balkonkraftwerke bereits. Deutschland folgte im Dezember 2025; Griechenland erlaubt 2026 800 W, aber ohne Einspeisung.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'EU-Käufer von Balkonkraftwerken außerhalb Deutschlands, die die Verbreitung des 800-Watt-Standards verfolgen',
    primaryTerm: 'eu 800-watt-balkonkraftwerk-standard',
    targetKeywords: ['800 watt balkonkraftwerk eu', 'griechenland balkonkraftwerk 800 watt', 'eu balkonkraftwerk harmonisierung 2027'],
    leadAnswerBlock: '**Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 unter DIN VDE V 0126-95 finalisiert, bringt das Land auf einen faktischen EU-Standard, den Frankreich, Österreich, Belgien und die Niederlande bereits nutzen — statt einen neuen Präzedenzfall zu setzen, dem andere folgen.** Griechenland ist der jüngste Neuzugang, aber mit einem deutlich strengeren Mechanismus: Eine Ministerialentscheidung vom 14. September 2026 (berichtet als Regierungsanzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026, erlaubt Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, ausschließlich zur Eigenversorgung — anders als beim meldebasierten Modell mit erlaubter Einspeisung, das im übrigen Block gilt, wird ins Netz gelangende Energie nicht vergütet (siehe den eigenen Griechenland-Leitfaden). Die überarbeitete EU-Gebäuderichtlinie (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber dieses breiteren Vorstoßes zur Formalisierung der Regeln, auch wenn sich nicht jeder Mitgliedstaat angleicht: Schweden und Ungarn scheinen laut Behörden- und Presseberichten Ausnahmen zu bleiben.',
    quickAnswerTop: {
      de: {
        question: 'Verbreitet sich der 800-Watt-Standard für Balkonkraftwerke in der gesamten EU?',
        answer: 'Ja — aber Deutschland schließt sich einer bestehenden Angleichung an, statt sie anzuführen, und der Mechanismus unterscheidet sich je nach Land. Frankreich, Österreich, Belgien und die Niederlande erlauben 800-W-Balkonkraftwerke bereits mit einfacher, rein meldebasierter Registrierung und Netzeinspeisung; Deutschlands DIN VDE V 0126-95 (Dezember 2025) brachte es auf diese Linie. Griechenland ist der jüngste Neuzugang, aber mit einem strengeren Modell: Eine Ministerialentscheidung vom 14. September 2026 erlaubt Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt nur zur Eigenversorgung, ohne Vergütung für Netzeinspeisung. Die überarbeitete EU-Gebäuderichtlinie (EPBD) ist der strukturelle Treiber des breiteren Vorstoßes, auch wenn Schweden und Ungarn laut Behörden- und Presseberichten wohl Ausnahmen bleiben, wo steckerfertige Solaranlagen im Allgemeinen nicht zulässig sind.',
        bullets: [
          'Frankreich, Österreich, Belgien und die Niederlande erlauben bereits bis zu 800 Watt Balkonkraftwerk mit einfacher Meldung beim Netzbetreiber und erlaubter Einspeisung — Deutschland ist dieser Norm im Dezember 2025 beigetreten, hat sie nicht gesetzt',
          'Griechenland: Ministerialentscheidung vom 14. September 2026 (berichtet als Anzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026 — Steckergeräte bis 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, nur Eigenverbrauch, keine Vergütung für Netzeinspeisung, eigenständige Batteriespeicher erlaubt — ein deutlich anderer Mechanismus als das meldebasierte Modell mit erlaubter Einspeisung anderswo',
          'Die EPBD (ab 2026 schrittweise in Kraft) ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer',
          'Schweden und Ungarn sind die klarsten Ausnahmen in der EU — Schwedens Elektrosicherheitsbehörde Elsäkerhetsverket hat erklärt, dass steckerfertige Systeme nicht den schwedischen Normen entsprechen und fest angeschlossen werden müssen (laut pv magazine, 2023), und Ungarn untersagt Solarmodule auf Balkonen Berichten zufolge per Bauverordnung, die seit dem 1. Januar 2025 gilt (laut CEE Legal Matters), die Angleichung ist also nicht universell',
          'Zu den konkreten 800-Watt-Regelungen in Deutschland (DIN VDE V 0126-95, die 960-Wp-Schuko-Untergrenze, § 8 EEG 2023) siehe den eigenen Deutschland-Leitfaden statt dieser länderübergreifenden Übersicht',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Die EPBD treibt die Angleichung voran', anchor: '#epbd-driver' },
      { label: 'Griechenland: Der jüngste Neuzugang', anchor: '#greece' },
      { label: 'Was das außerhalb Deutschlands bedeutet', anchor: '#what-this-means' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Frankreich, Österreich, Belgien und die Niederlande erlauben Balkonkraftwerke bereits bis 800 Watt mit einfacher Meldung beim Netzbetreiber und erlaubter Netzeinspeisung — Deutschlands DIN VDE V 0126-95 (Dezember 2025) hat das Land in Einklang mit dieser bestehenden Norm gebracht, nicht umgekehrt.',
          'Griechenlands balkonspezifische Regeln legt eine Ministerialentscheidung vom 14. September 2026 fest (berichtet als Anzeiger Β\' 5573, erlassen unter dem Gesetz 5299/2026): Steckergeräte bis 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt, ausschließlich zur Eigenversorgung und ohne Vergütung für Netzeinspeisung — nicht das meldebasierte Modell mit erlaubter Einspeisung, das im übrigen Block gilt.',
          'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer.',
          'Das Muster ist nicht überall gleich: Frankreich/Österreich/Belgien/Niederlande nutzen eine rein meldebasierte Registrierung mit erlaubter Einspeisung, während Griechenlands Entscheidung ein strengeres Modell nur für Eigenverbrauch ist — „800 W" bedeutet nicht überall dieselben Regeln.',
          'Schweden und Ungarn sind die klarsten Ausnahmen von diesem Angleichungstrend in der EU — Schwedens Elektrosicherheitsbehörde Elsäkerhetsverket hat erklärt, dass steckerfertige Systeme nicht den schwedischen Normen entsprechen und fest angeschlossen werden müssen (laut [pv magazine](https://www.pv-magazine.com/?p=32404), 2023), und Ungarn untersagt Solarmodule auf Balkonen Berichten zufolge per Bauverordnung, die seit dem 1. Januar 2025 gilt (laut [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).',
          'Zu Deutschlands konkreten Regelungen — der 800-Watt-Wechselrichtergrenze, DIN VDE V 0126-95, der 960-Wp-Schuko-Untergrenze und § 8 EEG 2023 — siehe den eigenen Deutschland-Leitfaden statt dieser länderübergreifenden Übersicht.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'Die EPBD treibt die Angleichung voran',
        content: [
          '**Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, weitet Solarpflichten für Gebäude ausdrücklich auf Fassaden, Balkone und Terrassen aus — nicht nur auf Dächer.** Das rückt Balkonkraftwerke von einer privaten Lifestyle-Entscheidung zu einem Compliance-Mechanismus für die Gebäude-Dekarbonisierungspflichten der Mitgliedstaaten. Länder, die steckerfertige Solaranlagen bislang eher als regulatorisches Randthema behandelt haben, haben nun einen richtlinienbasierten Grund, Regeln zügig zu formalisieren — das ist der unmittelbare Kontext für Griechenlands Gesetzesinitiative 2026.',
          'Frankreich, Österreich, Belgien und die Niederlande erlauben Balkonkraftwerke bereits bis 800 Watt mit lediglich einer einfachen Meldung beim Netzbetreiber und erlaubter Einspeisung — noch vor Deutschlands eigener finaler Festlegung. Deutschlands DIN VDE V 0126-95, im Dezember 2025 final festgelegt, hat das Land in Einklang mit diesem bestehenden De-facto-Standard gebracht, statt einen neuen zu schaffen — die EPBD weitet nun dieselbe zugrunde liegende Logik auf den Rest der EU aus, auch wenn nicht jeder Mitgliedstaat denselben Mechanismus übernimmt (siehe Griechenland unten) oder sich überhaupt angleicht (Schweden, Ungarn).',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Griechenland: Der jüngste Neuzugang',
        content: [
          '**Griechenland ist der jüngste Neuzugang dieser Angleichung, aber mit einem deutlich strengeren Mechanismus: Eine Ministerialentscheidung vom 14. September 2026 (berichtet als Regierungsanzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026 (verabschiedet am 5. Mai 2026), erlaubt Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt nur zur Eigenversorgung — ins Netz eingespeiste Energie wird nicht vergütet, und eigenständige Batteriespeicher sind ohne Einspeisung erlaubt.** Die Registrierung ist eine Meldung über ein Portal von DEDDIE/HEDNO, das noch nicht geöffnet ist (technische Spezifikationen bis 31. Oktober 2026, Starttermin des Portals bis 31. Dezember 2026). Details und Quellen finden Sie im eigenen Griechenland-Leitfaden statt in dieser kurzen Zusammenfassung.',
        ],
        callouts: [
          { type: 'warning', text: 'Zusammenfassung veröffentlichter Berichterstattung, keine Rechtsberatung; Portal und technische Spezifikationen stehen noch aus — prüfen Sie den aktuellen Stand im eigenen Griechenland-Leitfaden, bevor Sie ein Detail als feststehend behandeln.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Was das außerhalb Deutschlands bedeutet',
        content: [
          '**Wenn Ihr Land noch keine ausdrücklichen Regeln für Balkonkraftwerke hat, ist die Richtung inzwischen in der Form vorhersehbar, wenn auch nicht im Mechanismus: Erwarten Sie eine Grenze der 800-W-Klasse und einen Zeitplan, der an die EPBD-Umsetzungsfrist Ihres Landes gekoppelt ist, statt offener Unsicherheit — doch die genauen Regeln können sich je nach Land deutlich unterscheiden, von rein meldebasiert mit Einspeisung (Frankreich, Österreich, Belgien, Niederlande) bis zu einem strengeren Modell nur für Eigenverbrauch (Griechenland).** Griechenland ist das klarste aktuelle Beispiel für ein Land, das von der Grauzone zu formalisierten Regeln übergeht, auch wenn sein Ansatz ohne Einspeisung zeigt, dass „800 W" allein nicht denselben Mechanismus wie im übrigen Block garantiert — weitere EU-Mitgliedstaaten werden voraussichtlich Regeln formalisieren, sobald die EPBD-Umsetzungsfristen näher rücken, aber nicht zwingend nach demselben Modell, und Schweden und Ungarn zeigen, dass eine Angleichung überhaupt nicht garantiert ist.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Hat Deutschland den 800-Watt-Standard der EU für Balkonkraftwerke gesetzt?', a: 'Nein — Frankreich, Österreich, Belgien und die Niederlande erlaubten Balkonkraftwerke bereits bis 800 Watt mit einfacher, meldepflichtiger Registrierung, bevor Deutschland im Dezember 2025 seinen eigenen DIN-VDE-V-0126-95-Standard final festlegte. Deutschland ist einer bestehenden De-facto-EU-Norm beigetreten, statt eine neue zu schaffen.' },
          { q: 'Was unternimmt Griechenland 2026 in Sachen Balkonkraftwerke?', a: 'Eine Ministerialentscheidung vom 14. September 2026 (berichtet als Regierungsanzeiger Β\' 5573), erlassen unter dem Gesetz 5299/2026, erlaubt Steckergeräte mit bis zu 800 W Erzeugungsleistung und 1.000 W installierter Leistung pro Anschlusspunkt nur zur Eigenversorgung: ins Netz eingespeiste Energie wird nicht vergütet, und die Registrierung ist eine Meldung über ein Portal von DEDDIE/HEDNO, das noch nicht geöffnet ist. Quellen und aktuellen Stand finden Sie im eigenen Griechenland-Leitfaden.' },
          { q: 'Erlaubt Griechenlands Rahmen die Einspeisung überschüssigen Stroms ins Netz?', a: 'Nein — nach dem Entwurfsrahmen in öffentlicher Konsultation (Gesetz 5299/2026, bis 20. Juli 2026) sind Anlagen auf 800 Watt Netzeinspeisung begrenzt, wobei überhaupt keine Netzeinspeisung erlaubt ist — ein strengeres „Zero-Feed-in"-Design als das meldepflichtbasierte Modell mit erlaubter Einspeisung in Frankreich, Österreich, Belgien und den Niederlanden. Eine Batteriespeicher-Kopplung ist erlaubt, was eine Möglichkeit ist, Strom zu nutzen, der nicht eingespeist werden kann.' },
          { q: 'Was ist die EPBD, und warum ist sie für Balkonkraftwerke relevant?', a: 'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD) tritt ab 2026 schrittweise in Kraft und weitet die EU-Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer — sie macht Balkonkraftwerke damit zu einem Compliance-Mechanismus für die Mitgliedstaaten statt zu einer freiwilligen politischen Entscheidung.' },
          { q: 'Ist ein Balkonkraftwerk überall in der EU legal?', a: 'Nein. Auch wenn sich viele Mitgliedstaaten in Richtung eines 800-Watt-artigen Rahmens bewegen, hat Schwedens Elektrosicherheitsbehörde Elsäkerhetsverket hat erklärt, dass steckerfertige Systeme nicht den schwedischen Normen entsprechen und fest angeschlossen werden müssen (laut pv magazine, 2023), und Ungarn untersagt Solarmodule auf Balkonen Berichten zufolge per Bauverordnung, die seit dem 1. Januar 2025 gilt (laut CEE Legal Matters) — die Angleichung zu einem gemeinsamen EU-Ansatz ist real, aber nicht universell.' },
          { q: 'Wo finde ich Deutschlands konkrete Balkonkraftwerk-Regeln?', a: 'Siehe den eigenen Deutschland-Leitfaden, der die 800-Watt-Wechselrichtergrenze, DIN VDE V 0126-95, die 960-Wp-Schuko-Untergrenze und den vollständigen Gesetzestext von § 8 EEG 2023 ausführlich behandelt — diese Seite konzentriert sich auf die länderübergreifende Angleichung, statt diese Details zu wiederholen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Balkonkraftwerk: Deutschlands Regeln für Balkonkraftwerke](/de/balcony-solar/balkonkraftwerk-germany-rules) — der ausführliche Deep-Dive zu Deutschlands 800-Watt-/DIN-VDE-V-0126-95-Regelung, auf den dieser Artikel verweist, statt ihn zu wiederholen',
          '[Ist ein Balkonkraftwerk legal? Ein Länderleitfaden](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechts-Tracker',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-es.webp',
    title: 'El estándar de 800 W para energía solar de balcón: la armonización de la UE explicada (2027)',
    seoTitle: 'El estándar de 800 W para energía solar de balcón: la armonización de la UE explicada (2027)',
    intro: 'El límite de 800 W de la energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, alinea al país con un estándar de facto de la UE que ya usan Francia, Austria, Bélgica y los Países Bajos — en lugar de sentar un nuevo precedente que otros siguen. Esta página sigue cómo se extiende esa convergencia — aunque el mecanismo propio de Grecia, fijado por una decisión ministerial del 14 de septiembre de 2026 en el marco de la Ley 5299/2026, adopta un enfoque más estricto de «solo autoconsumo, sin exportación» en lugar de adoptar simplemente el modelo de Francia, Austria, Bélgica y los Países Bajos, con la Directiva de eficiencia energética de los edificios (EPBD) de la UE como impulso más amplio. No todos los Estados miembros convergen: Suecia y Hungría parecen seguir siendo excepciones, según informes de autoridades y prensa.',
    metaDescription: 'Francia, Austria, Bélgica y Países Bajos ya permiten 800 W de energía solar de balcón. Alemania se sumó en diciembre de 2025; Grecia permite 800 W en 2026, pero sin exportar a la red.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón en la UE fuera de Alemania que siguen la adopción del estándar de 800 W',
    primaryTerm: 'estándar de 800 w para energía solar de balcón en la ue',
    targetKeywords: ['energía solar de balcón 800w ue', 'grecia energía solar de balcón 800w', 'armonización ue energía solar de balcón 2027'],
    leadAnswerBlock: '**El límite de 800 W de la energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, alinea al país con un estándar de facto de la UE que ya usan Francia, Austria, Bélgica y los Países Bajos — en lugar de sentar un nuevo precedente que otros siguen.** Grecia es la última en incorporarse, pero con un mecanismo claramente más estricto: una decisión ministerial del 14 de septiembre de 2026 (publicada según la prensa como Boletín Oficial Β\' 5573), emitida en virtud de la Ley 5299/2026, permite sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, estrictamente para autoconsumo — a diferencia del modelo de mera notificación con exportación permitida que se usa en el resto del bloque, la energía que llega a la red no se compensa (véase la guía específica de Grecia). La Directiva de eficiencia energética de los edificios (EPBD) revisada, que entra en vigor de forma gradual desde 2026, es el motor estructural de este impulso más amplio para formalizar normas, aunque no todos los Estados miembros convergen: Suecia y Hungría parecen seguir siendo excepciones, según informes de autoridades y prensa.',
    quickAnswerTop: {
      es: {
        question: '¿Se está extendiendo el estándar de 800 W para energía solar de balcón por toda la UE?',
        answer: 'Sí — pero Alemania se suma a una convergencia existente, no la lidera, y el mecanismo varía según el país. Francia, Austria, Bélgica y los Países Bajos ya permiten energía solar de balcón de 800 W con un simple registro por notificación y exportación a la red; la norma DIN VDE V 0126-95 de Alemania (diciembre de 2025) la alineó con esa norma. Grecia es la última en incorporarse, pero con un modelo más estricto: una decisión ministerial del 14 de septiembre de 2026 permite sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro solo para autoconsumo, sin compensación por la inyección a la red. La EPBD revisada de la UE es el motor estructural del impulso más amplio, aunque Suecia y Hungría parecen seguir siendo excepciones, según informes de autoridades y prensa, donde la energía solar enchufable no suele estar permitida.',
        bullets: [
          'Francia, Austria, Bélgica y los Países Bajos ya permiten hasta 800 W de energía solar de balcón con una simple notificación al operador de red e inyección permitida — Alemania se sumó a esta norma en diciembre de 2025, no la estableció',
          'Grecia: decisión ministerial del 14 de septiembre de 2026 (informada como Boletín Β\' 5573), emitida en virtud de la Ley 5299/2026 — sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, solo autoconsumo, sin compensación por inyección a la red, baterías independientes permitidas — un mecanismo claramente distinto del modelo de mera notificación con exportación permitida que se usa en otros lugares',
          'La EPBD (que entra en vigor de forma gradual desde 2026) es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados',
          'Suecia y Hungría son las excepciones más claras de la UE — la autoridad sueca de seguridad eléctrica (Elsäkerhetsverket) ha indicado que los sistemas enchufables no cumplen las normas suecas y deben conectarse de forma permanente (según pv magazine, 2023), y Hungría, según se informa, prohíbe los paneles solares en balcones mediante un decreto de construcción en vigor desde el 1 de enero de 2025 (según CEE Legal Matters), así que la convergencia no es universal',
          'Para conocer los detalles del propio estándar de 800 W en Alemania (DIN VDE V 0126-95, el sublímite de 960 Wp para el enchufe Schuko, § 8 EEG 2023), consulta la guía dedicada a Alemania en lugar de este resumen transfronterizo',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'La EPBD está impulsando la convergencia', anchor: '#epbd-driver' },
      { label: 'Grecia: la incorporación más reciente', anchor: '#greece' },
      { label: 'Qué significa esto fuera de Alemania', anchor: '#what-this-means' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Francia, Austria, Bélgica y los Países Bajos ya permiten energía solar de balcón hasta 800 W con una simple notificación al operador de red e inyección permitida — la norma alemana DIN VDE V 0126-95 (diciembre de 2025) puso al país en línea con esa norma existente, y no al revés.',
          'Las normas específicas de Grecia para la energía solar de balcón las fija una decisión ministerial del 14 de septiembre de 2026 (informada como Boletín Β\' 5573, emitida en virtud de la Ley 5299/2026): sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro, estrictamente para autoconsumo y sin compensación por inyección a la red — no el modelo de mera notificación con exportación permitida que se usa en el resto del bloque.',
          'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados.',
          'El patrón no es idéntico en todos los países: Francia/Austria/Bélgica/Países Bajos usan registro por notificación con exportación permitida, mientras que la decisión de Grecia es un diseño más estricto de solo autoconsumo — «800 W» no significa las mismas reglas en todas partes.',
          'Suecia y Hungría son las excepciones más claras de la UE a esta tendencia de convergencia — la autoridad sueca de seguridad eléctrica (Elsäkerhetsverket) ha indicado que los sistemas enchufables no cumplen las normas suecas y deben conectarse de forma permanente (según [pv magazine](https://www.pv-magazine.com/?p=32404), 2023), y Hungría, según se informa, prohíbe los paneles solares en balcones mediante un decreto de construcción en vigor desde el 1 de enero de 2025 (según [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).',
          'Para los detalles específicos de Alemania — el límite de 800 W del inversor, DIN VDE V 0126-95, el sublímite de 960 Wp para el enchufe Schuko y el § 8 EEG 2023 — consulta la guía dedicada a Alemania en lugar de este resumen transfronterizo.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'La EPBD está impulsando la convergencia',
        content: [
          '**La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, amplía explícitamente los mandatos de instalación solar a fachadas, balcones y terrazas — no solo a los tejados.** Esto convierte la energía solar de balcón de una elección de estilo de vida del consumidor en un mecanismo de cumplimiento para las obligaciones de descarbonización de edificios de los Estados miembros. Los países que antes trataban la energía solar enchufable como un asunto regulatorio secundario ahora tienen un motivo, a nivel de directiva, para formalizar normas con rapidez, lo que constituye el contexto inmediato de la iniciativa legislativa de Grecia en 2026.',
          'Francia, Austria, Bélgica y los Países Bajos ya permiten energía solar de balcón hasta 800 W con solo un requisito de simple notificación al operador de red e inyección permitida, algo anterior a la propia finalización del estándar alemán. La norma alemana DIN VDE V 0126-95, finalizada en diciembre de 2025, puso al país en línea con ese estándar de facto existente en lugar de establecer uno nuevo — la EPBD extiende ahora esa misma lógica al resto del bloque, aunque no todos los Estados miembros adoptan el mismo mecanismo (véase Grecia, más abajo) ni convergen en absoluto (Suecia, Hungría).',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grecia: la incorporación más reciente',
        content: [
          '**Grecia es la última en sumarse a esta convergencia, pero con un mecanismo claramente más estricto: una decisión ministerial del 14 de septiembre de 2026 (informada como Boletín Oficial Β\' 5573), emitida en virtud de la Ley 5299/2026 (aprobada el 5 de mayo de 2026), permite sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro solo para autoconsumo — la energía inyectada a la red no se compensa, y se permiten baterías independientes sin exportación.** El registro es una notificación mediante un portal de DEDDIE/HEDNO que aún no está abierto (especificaciones técnicas antes del 31 de octubre de 2026, fecha de inicio del portal antes del 31 de diciembre de 2026). Para detalles y fuentes, consulta la guía específica de Grecia en lugar de este breve resumen.',
        ],
        callouts: [
          { type: 'warning', text: 'Resumen de la cobertura publicada, no asesoramiento jurídico; el portal y las especificaciones técnicas siguen pendientes — consulta la guía específica de Grecia para ver el estado actual antes de dar cualquier detalle por establecido.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Qué significa esto fuera de Alemania',
        content: [
          '**Si tu país aún no tiene normas explícitas sobre energía solar de balcón, la dirección del cambio ya es predecible en su forma, aunque no en su mecanismo: espera un límite de la clase de 800 W y un calendario ligado al plazo de transposición de la EPBD de tu país, en lugar de una incertidumbre sin fecha — pero las reglas exactas pueden diferir bastante según el país, desde la mera notificación con exportación (Francia, Austria, Bélgica, Países Bajos) hasta un diseño más estricto de solo autoconsumo (Grecia).** Grecia es el ejemplo actual más claro de un país que pasa de la zona gris a normas formalizadas, aunque su enfoque sin exportación muestra que «800 W» por sí solo no garantiza el mismo mecanismo que en el resto del bloque — es probable que más Estados miembros de la UE formalicen normas a medida que se acerquen los plazos de transposición de la EPBD, pero no necesariamente con el mismo modelo, y Suecia y Hungría muestran que la convergencia no está garantizada en absoluto.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Fue Alemania quien estableció el estándar de 800 W de la UE para energía solar de balcón?', a: 'No — Francia, Austria, Bélgica y los Países Bajos ya permitían energía solar de balcón hasta 800 W con un registro de simple notificación antes de que Alemania finalizara su propio estándar DIN VDE V 0126-95 en diciembre de 2025. Alemania se sumó a una norma de facto de la UE ya existente, en lugar de crear una nueva.' },
          { q: '¿Qué está haciendo Grecia respecto a la energía solar de balcón en 2026?', a: 'Una decisión ministerial del 14 de septiembre de 2026 (informada como Boletín Oficial Β\' 5573), emitida en virtud de la Ley 5299/2026, permite sistemas enchufables de hasta 800 W de generación y 1.000 W de potencia instalada por punto de suministro solo para autoconsumo: la energía inyectada a la red no se compensa, y el registro es una notificación mediante un portal de DEDDIE/HEDNO que aún no está abierto. Consulta la guía específica de Grecia para ver las fuentes y el estado actual.' },
          { q: '¿El marco de Grecia permite exportar el excedente de energía a la red?', a: 'No — según el borrador en consulta pública (Ley 5299/2026, hasta el 20 de julio de 2026), los sistemas están limitados a 800 W de inyección a red sin ninguna inyección permitida, un diseño de «cero inyección» más estricto que el modelo de simple notificación con inyección permitida usado en Francia, Austria, Bélgica y los Países Bajos. El emparejamiento con almacenamiento en batería está permitido, lo cual es una forma de aprovechar la energía que no puede inyectarse.' },
          { q: '¿Qué es la EPBD y por qué importa para la energía solar de balcón?', a: 'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD) entra en vigor de forma gradual desde 2026 y amplía los mandatos de energía solar en edificios de la UE a fachadas, balcones y terrazas, no solo a los tejados — convirtiendo la energía solar de balcón en un mecanismo de cumplimiento para los Estados miembros en lugar de una decisión política discrecional.' },
          { q: '¿Es legal la energía solar de balcón en toda la UE?', a: 'No. Aunque el impulso apunta hacia un marco de tipo 800 W en muchos Estados miembros, la autoridad sueca de seguridad eléctrica (Elsäkerhetsverket) ha indicado que los sistemas enchufables no cumplen las normas suecas y deben conectarse de forma permanente (según pv magazine, 2023), y Hungría, según se informa, prohíbe los paneles solares en balcones mediante un decreto de construcción en vigor desde el 1 de enero de 2025 (según CEE Legal Matters) — la convergencia hacia un enfoque común de la UE es real, pero no universal.' },
          { q: '¿Dónde puedo encontrar las normas específicas de Alemania sobre energía solar de balcón?', a: 'Consulta la guía dedicada a Alemania, que cubre en profundidad el límite de 800 W del inversor, DIN VDE V 0126-95, el sublímite de 960 Wp para el enchufe Schuko y el texto legal completo del § 8 EEG 2023 — esta página se centra en la armonización transfronteriza en lugar de repetir esos detalles.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Balkonkraftwerk: las normas de energía solar de balcón en Alemania](/es/balcony-solar/balkonkraftwerk-germany-rules) — el análisis completo del estándar alemán de 800 W/DIN VDE V 0126-95 al que este artículo remite en lugar de repetirlo',
          '[¿Es legal la energía solar de balcón? Una guía por países](/es/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador legal global',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-fr.webp',
    title: "La norme des 800 W pour le solaire de balcon : l'harmonisation européenne expliquée (2027)",
    seoTitle: "La norme des 800 W pour le solaire de balcon : l'harmonisation européenne expliquée (2027)",
    intro: 'Le plafond de 800 W du solaire de balcon en Allemagne, finalisé selon la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur un standard de fait de l\'UE déjà utilisé par la France, l\'Autriche, la Belgique et les Pays-Bas — plutôt que de créer un précédent que d\'autres suivraient. Cette page suit la façon dont cette convergence se diffuse — même si le mécanisme propre à la Grèce, fixé par une décision ministérielle du 14 septembre 2026 au titre de la loi 5299/2026, adopte une approche plus stricte « autoconsommation uniquement, sans export » au lieu de reprendre simplement le modèle France/Autriche/Belgique/Pays-Bas, avec la directive européenne sur la performance énergétique des bâtiments (EPBD) comme moteur plus large. Tous les États membres ne convergent pas : la Suède et la Hongrie semblent rester des exceptions, selon des rapports des autorités et de la presse.',
    metaDescription: 'La France, l\'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon de 800 W. L\'Allemagne a suivi en décembre 2025 ; la Grèce autorise 800 W en 2026, sans export réseau.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon dans l'UE hors Allemagne suivant l'adoption de la norme des 800 W",
    primaryTerm: 'norme européenne des 800 w pour le solaire de balcon',
    targetKeywords: ['solaire de balcon 800w ue', 'grèce solaire de balcon 800w', 'harmonisation ue solaire de balcon 2027'],
    leadAnswerBlock: '**Le plafond de 800 W du solaire de balcon en Allemagne, finalisé selon la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur un standard de fait de l\'UE déjà utilisé par la France, l\'Autriche, la Belgique et les Pays-Bas — plutôt que de créer un précédent que d\'autres suivraient.** La Grèce est la dernière à rejoindre le mouvement, mais avec un mécanisme nettement plus strict : une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026, autorise des systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, strictement pour l\'autoconsommation — contrairement au modèle de simple notification avec export autorisé utilisé ailleurs dans le bloc, l\'énergie qui atteint le réseau n\'est pas rémunérée (voir le guide dédié à la Grèce). La directive révisée sur la performance énergétique des bâtiments (EPBD), qui entre progressivement en vigueur à partir de 2026, est le moteur structurel de cette dynamique plus large de formalisation des règles, même si tous les États membres ne convergent pas : la Suède et la Hongrie semblent rester des exceptions, selon des rapports des autorités et de la presse.',
    quickAnswerTop: {
      fr: {
        question: "La norme des 800 W pour le solaire de balcon se répand-elle dans toute l'UE ?",
        answer: 'Oui — mais l\'Allemagne rejoint une convergence existante au lieu de la mener, et le mécanisme varie selon les pays. La France, l\'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon de 800 W avec un simple enregistrement par notification et l\'export réseau ; la norme DIN VDE V 0126-95 de l\'Allemagne (décembre 2025) l\'a alignée sur cette norme. La Grèce est la dernière à rejoindre le mouvement, mais avec un modèle plus strict : une décision ministérielle du 14 septembre 2026 autorise des systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison pour l\'autoconsommation uniquement, sans rémunération de l\'injection réseau. La directive EPBD révisée de l\'UE est le moteur structurel de cette dynamique plus large, même si la Suède et la Hongrie semblent rester des exceptions, selon des rapports des autorités et de la presse, où le solaire enfichable n\'est généralement pas autorisé.',
        bullets: [
          "La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà jusqu'à 800 W de solaire de balcon avec une simple notification au gestionnaire de réseau et une injection autorisée — l'Allemagne a rejoint cette norme en décembre 2025, elle ne l'a pas créée",
          'Grèce : décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026 — systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, autoconsommation uniquement, pas de rémunération de l\'injection réseau, batteries autonomes autorisées — un mécanisme nettement différent du modèle de simple notification avec export autorisé utilisé ailleurs',
          "La DPEB (entrant progressivement en vigueur à partir de 2026) est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures",
          "La Suède et la Hongrie sont les exceptions les plus nettes de l'UE — l'autorité suédoise de sécurité électrique (Elsäkerhetsverket) a indiqué que les systèmes enfichables ne respectent pas les normes suédoises et doivent être raccordés de façon permanente (selon pv magazine, 2023), et la Hongrie interdirait les panneaux solaires sur les balcons par un décret de construction en vigueur depuis le 1er janvier 2025 (selon CEE Legal Matters), la convergence n'est donc pas universelle",
          "Pour le détail des règles allemandes propres aux 800 W (DIN VDE V 0126-95, le sous-plafond de 960 Wp pour la prise Schuko, § 8 EEG 2023), voir le guide dédié à l'Allemagne plutôt que cette vue d'ensemble transfrontalière",
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'La DPEB, moteur de la convergence', anchor: '#epbd-driver' },
      { label: 'Grèce : la dernière arrivée', anchor: '#greece' },
      { label: "Ce que cela signifie hors d'Allemagne", anchor: '#what-this-means' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon jusqu'à 800 W avec une simple notification au gestionnaire de réseau et une injection autorisée — la norme allemande DIN VDE V 0126-95 (décembre 2025) a aligné le pays sur cette norme existante, et non l'inverse.",
          'Les règles propres à la Grèce pour le solaire de balcon sont fixées par une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573, prise en vertu de la loi 5299/2026) : systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison, strictement pour l\'autoconsommation et sans rémunération de l\'injection réseau — pas le modèle de simple notification avec export autorisé utilisé ailleurs dans le bloc.',
          "La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures.",
          'Le schéma n\'est pas identique partout : France/Autriche/Belgique/Pays-Bas utilisent un enregistrement par simple notification avec export autorisé, tandis que la décision grecque est un modèle plus strict d\'autoconsommation uniquement — « 800 W » ne signifie pas les mêmes règles partout.',
          "La Suède et la Hongrie sont les exceptions les plus nettes de l'UE à cette tendance de convergence — l'autorité suédoise de sécurité électrique (Elsäkerhetsverket) a indiqué que les systèmes enfichables ne respectent pas les normes suédoises et doivent être raccordés de façon permanente (selon [pv magazine](https://www.pv-magazine.com/?p=32404), 2023), et la Hongrie interdirait les panneaux solaires sur les balcons par un décret de construction en vigueur depuis le 1er janvier 2025 (selon [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).",
          "Pour les modalités propres à l'Allemagne — le plafond de 800 W de l'onduleur, DIN VDE V 0126-95, le sous-plafond de 960 Wp pour la prise Schuko et le § 8 EEG 2023 — voir le guide dédié à l'Allemagne plutôt que cette vue d'ensemble transfrontalière.",
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'La DPEB, moteur de la convergence',
        content: [
          "**La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, étend explicitement les obligations d'installation solaire aux façades, aux balcons et aux terrasses — pas seulement aux toitures.** Le solaire de balcon passe ainsi d'un choix de consommation à un mécanisme de mise en conformité pour les obligations de décarbonation des bâtiments des États membres. Les pays qui traitaient jusqu'ici le solaire enchufable comme une question réglementaire secondaire disposent désormais d'un motif, au niveau de la directive, pour formaliser rapidement leurs règles — c'est le contexte immédiat de l'initiative législative grecque de 2026.",
          "La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon jusqu'à 800 W avec pour seule exigence une simple notification au gestionnaire de réseau et une injection autorisée, antérieure à la propre finalisation allemande. La norme allemande DIN VDE V 0126-95, finalisée en décembre 2025, a aligné le pays sur cette norme de facto existante plutôt que d'en établir une nouvelle — la DPEB étend désormais la même logique de fond au reste du bloc, même si tous les États membres n'adoptent pas le même mécanisme (voir la Grèce, ci-dessous) ni ne convergent (Suède, Hongrie).",
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grèce : la dernière arrivée',
        content: [
          '**La Grèce est la dernière à rejoindre cette convergence, mais avec un mécanisme nettement plus strict : une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026 (adoptée le 5 mai 2026), autorise des systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison pour l\'autoconsommation uniquement — l\'énergie injectée dans le réseau n\'est pas rémunérée, et les batteries autonomes sont autorisées sans export.** La déclaration est une notification via un portail de DEDDIE/HEDNO qui n\'est pas encore ouvert (spécifications techniques attendues d\'ici le 31 octobre 2026, date d\'ouverture du portail d\'ici le 31 décembre 2026). Pour les détails et les sources, consultez le guide dédié à la Grèce plutôt que ce bref résumé.',
        ],
        callouts: [
          { type: 'warning', text: 'Résumé de la couverture publiée, non un conseil juridique ; le portail et les spécifications techniques sont encore en attente — consultez le guide dédié à la Grèce pour connaître l\'état actuel avant de tenir un détail pour acquis.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: "Ce que cela signifie hors d'Allemagne",
        content: [
          '**Si votre pays n\'a pas encore de règles explicites sur le solaire de balcon, la direction à suivre est désormais prévisible dans sa forme, sinon dans son mécanisme : attendez-vous à un plafond de la classe des 800 W et à un calendrier lié au délai de transposition de l\'EPBD dans votre pays plutôt qu\'à une incertitude sans échéance — mais les règles exactes peuvent différer sensiblement selon les pays, de la simple notification avec export (France, Autriche, Belgique, Pays-Bas) à un modèle plus strict d\'autoconsommation uniquement (Grèce).** La Grèce est l\'exemple actuel le plus net d\'un pays qui passe de la zone grise à des règles formalisées, même si son approche sans export montre que « 800 W » seul ne garantit pas le même mécanisme que dans le reste du bloc — d\'autres États membres de l\'UE formaliseront probablement des règles à l\'approche des délais de transposition de l\'EPBD, mais pas nécessairement selon le même modèle, et la Suède et la Hongrie montrent que la convergence n\'est pas garantie du tout.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: "L'Allemagne a-t-elle fixé la norme européenne des 800 W pour le solaire de balcon ?", a: "Non — la France, l'Autriche, la Belgique et les Pays-Bas autorisaient déjà le solaire de balcon jusqu'à 800 W avec un simple enregistrement par notification avant que l'Allemagne ne finalise sa propre norme DIN VDE V 0126-95 en décembre 2025. L'Allemagne a rejoint une norme de facto européenne déjà existante plutôt que d'en créer une nouvelle." },
          { q: 'Que fait la Grèce concernant le solaire de balcon en 2026 ?', a: 'Une décision ministérielle du 14 septembre 2026 (rapportée comme Journal officiel Β\' 5573), prise en vertu de la loi 5299/2026, autorise des systèmes enfichables jusqu\'à 800 W de production et 1 000 W de puissance installée par point de livraison pour l\'autoconsommation uniquement : l\'énergie injectée dans le réseau n\'est pas rémunérée, et la déclaration est une notification via un portail de DEDDIE/HEDNO qui n\'est pas encore ouvert. Consultez le guide dédié à la Grèce pour les sources et l\'état actuel.' },
          { q: 'Le cadre grec permet-il d\'exporter le surplus d\'électricité vers le réseau ?', a: "Non — selon le projet de cadre en consultation publique (loi 5299/2026, jusqu'au 20 juillet 2026), les installations sont plafonnées à 800 W d'injection réseau, sans aucune injection autorisée, un dispositif « zéro injection » plus strict que le modèle à notification simple avec injection autorisée utilisé en France, en Autriche, en Belgique et aux Pays-Bas. Le couplage avec du stockage sur batterie est autorisé, ce qui permet d'utiliser l'énergie qui ne peut pas être injectée." },
          { q: 'Qu\'est-ce que la DPEB et pourquoi importe-t-elle pour le solaire de balcon ?', a: "La directive révisée sur la performance énergétique des bâtiments (DPEB) entre progressivement en vigueur à partir de 2026 et étend les obligations solaires des bâtiments de l'UE aux façades, aux balcons et aux terrasses, pas seulement aux toitures — transformant le solaire de balcon en mécanisme de mise en conformité pour les États membres plutôt qu'en choix politique discrétionnaire." },
          { q: 'Le solaire de balcon est-il légal partout dans l\'UE ?', a: "Non. Si l'élan va vers un cadre de type 800 W dans de nombreux États membres, l'autorité suédoise de sécurité électrique (Elsäkerhetsverket) a indiqué que les systèmes enfichables ne respectent pas les normes suédoises et doivent être raccordés de façon permanente (selon pv magazine, 2023), et la Hongrie interdirait les panneaux solaires sur les balcons par un décret de construction en vigueur depuis le 1er janvier 2025 (selon CEE Legal Matters) — la convergence vers une approche européenne commune est réelle, mais pas universelle." },
          { q: 'Où puis-je trouver les règles spécifiques de l\'Allemagne sur le solaire de balcon ?', a: "Consultez le guide dédié à l'Allemagne, qui détaille intégralement le plafond de 800 W de l'onduleur, DIN VDE V 0126-95, le sous-plafond de 960 Wp pour la prise Schuko et le texte du § 8 EEG 2023 — cette page se concentre sur l'harmonisation transfrontalière plutôt que sur la répétition de ces détails." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          "[Balkonkraftwerk : les règles allemandes du solaire de balcon](/fr/balcony-solar/balkonkraftwerk-germany-rules) — l'analyse complète de la norme allemande 800 W/DIN VDE V 0126-95 à laquelle cet article renvoie plutôt que de la répéter",
          '[Le solaire de balcon est-il légal ? Un guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial',
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-ar.webp',
    title: 'معيار 800 واط للطاقة الشمسية على الشرفات: شرح التوحيد الأوروبي (2027)',
    seoTitle: 'معيار 800 واط للطاقة الشمسية على الشرفات: شرح التوحيد الأوروبي (2027)',
    intro: 'يضع سقف 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي أُقرّ بموجب DIN VDE V 0126-95 في ديسمبر 2025، البلاد على معيار أوروبي فعلي تستخدمه فرنسا والنمسا وبلجيكا وهولندا بالفعل — بدل أن يرسي سابقة جديدة تتبعها الدول الأخرى. تتتبّع هذه الصفحة كيف ينتشر هذا التقارب — مع أن آلية اليونان الخاصة، التي حددها قرار وزاري مؤرخ في 14 سبتمبر 2026 بموجب القانون الأوسع 5299/2026، تعتمد نهجًا أكثر صرامة هو «الاستهلاك الذاتي فقط دون تصدير» بدل تبنّي نموذج فرنسا/النمسا/بلجيكا/هولندا ببساطة، ويشكّل توجيه الاتحاد الأوروبي لأداء الطاقة في المباني (EPBD) الدافع الأوسع. ليست كل الدول الأعضاء متقاربة: ويبدو، وفق تقارير الجهات المعنية والصحافة، أن السويد والمجر ما زالتا استثناءين.',
    metaDescription: 'تسمح فرنسا والنمسا وبلجيكا وهولندا بالطاقة الشمسية للشرفات بقدرة 800 واط. انضمت ألمانيا في ديسمبر 2025؛ وتسمح اليونان في 2026 بـ 800 واط لكن دون تصدير للشبكة.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات في الاتحاد الأوروبي خارج ألمانيا الذين يتابعون تبنّي معيار 800 واط',
    primaryTerm: 'معيار 800 واط للطاقة الشمسية على الشرفات في الاتحاد الأوروبي',
    targetKeywords: ['طاقة شمسية للشرفة 800 واط الاتحاد الأوروبي', 'اليونان طاقة شمسية للشرفة 800 واط', 'توحيد الاتحاد الأوروبي للطاقة الشمسية للشرفات 2027'],
    leadAnswerBlock: '**يضع سقف 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي أُقرّ بموجب DIN VDE V 0126-95 في ديسمبر 2025، البلاد على معيار أوروبي فعلي تستخدمه فرنسا والنمسا وبلجيكا وهولندا بالفعل — بدل أن يرسي سابقة جديدة تتبعها الدول الأخرى.** واليونان هي أحدث المنضمّين، لكن بآلية أكثر صرامة بوضوح: فقرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة الرسمية Β\' 5573)، صدر بموجب القانون 5299/2026، يسمح بأنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي حصرًا — وخلافًا لنموذج الإخطار فقط مع السماح بالتصدير المعمول به في بقية الكتلة، لا يُعوَّض عن الطاقة التي تصل إلى الشبكة (انظر الدليل المخصص لليونان). ويُعدّ توجيه أداء الطاقة في المباني (EPBD) المنقَّح، الذي يدخل حيز النفاذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي لهذا الدفع الأوسع نحو تقنين القواعد، وإن لم تتقارب كل الدول الأعضاء: ويبدو، وفق تقارير الجهات المعنية والصحافة، أن السويد والمجر ما زالتا استثناءين.',
    quickAnswerTop: {
      ar: {
        question: 'هل ينتشر معيار 800 واط للطاقة الشمسية على الشرفات في جميع أنحاء الاتحاد الأوروبي؟',
        answer: 'نعم — لكن ألمانيا تنضم إلى تقارب قائم ولا تقوده، وتختلف الآلية من بلد إلى آخر. تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بالطاقة الشمسية للشرفات بقدرة 800 واط مع تسجيل بسيط بالإخطار والتصدير إلى الشبكة؛ وقد وضعها معيار DIN VDE V 0126-95 الألماني (ديسمبر 2025) على خط ذلك الاتجاه. واليونان هي أحدث المنضمّين لكن بنموذج أكثر صرامة: فقرار وزاري مؤرخ في 14 سبتمبر 2026 يسمح بأنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد للاستهلاك الذاتي فقط، دون تعويض عن الحقن في الشبكة. ويُعدّ توجيه EPBD المنقَّح المحرّك الهيكلي للدفع الأوسع، وإن بدت السويد والمجر، وفق تقارير الجهات المعنية والصحافة، استثناءين لا تكون فيهما الطاقة الشمسية القابلة للتوصيل مسموحة عمومًا.',
        bullets: [
          'تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بما يصل إلى 800 واط من الطاقة الشمسية للشرفات عبر إخطار بسيط لمشغّل الشبكة مع السماح بالتغذية العكسية — انضمت ألمانيا إلى هذا المعيار في ديسمبر 2025، ولم تضعه هي',
          'اليونان: قرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة Β\' 5573)، صدر بموجب القانون 5299/2026 — أنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي فقط، دون تعويض عن الحقن في الشبكة، مع السماح بالبطاريات المستقلة — آلية تختلف جوهريًا عن نموذج الإخطار فقط مع السماح بالتصدير المعمول به في أماكن أخرى',
          'يُعدّ توجيه EPBD (الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026) المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط',
          'تُعدّ السويد والمجر الاستثناءين الأوضح في الاتحاد الأوروبي — إذ أفادت هيئة السلامة الكهربائية السويدية (Elsäkerhetsverket) بأن الأنظمة القابلة للتوصيل بالمقبس لا تستوفي المعايير السويدية ويجب توصيلها بشكل دائم (وفق pv magazine، 2023)، وتفيد التقارير بأن المجر تحظر الألواح الشمسية على الشرفات بموجب مرسوم بناء ساري منذ 1 يناير 2025 (وفق CEE Legal Matters)، وبالتالي فإن التقارب ليس شاملاً',
          'للاطلاع على تفاصيل الـ800 واط الخاصة بألمانيا نفسها (DIN VDE V 0126-95، الحد الفرعي البالغ 960 واط ذروة لمقبس Schuko، § 8 EEG 2023)، راجع الدليل المخصص لألمانيا بدلاً من هذا العرض العابر للحدود',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'EPBD يقود التقارب', anchor: '#epbd-driver' },
      { label: 'اليونان: أحدث المنضمّين', anchor: '#greece' },
      { label: 'ماذا يعني هذا خارج ألمانيا', anchor: '#what-this-means' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط عبر إخطار بسيط لمشغّل الشبكة مع السماح بالتغذية العكسية — وقد جعل معيار DIN VDE V 0126-95 الألماني (ديسمبر 2025) ألمانيا متوافقة مع هذا المعيار القائم، وليس العكس.',
          'تحدد قرارٌ وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة Β\' 5573، وصدر بموجب القانون 5299/2026) القواعد الخاصة باليونان للطاقة الشمسية على الشرفات: أنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد، للاستهلاك الذاتي حصرًا ودون تعويض عن الحقن في الشبكة — وليس نموذج الإخطار فقط مع السماح بالتصدير المعمول به في بقية الكتلة.',
          'يُعدّ توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط.',
          'النمط ليس متطابقًا في كل البلدان: فرنسا/النمسا/بلجيكا/هولندا تعتمد التسجيل بالإخطار فقط مع السماح بالتصدير، بينما قرار اليونان تصميم أكثر صرامة للاستهلاك الذاتي فقط — فـ«800 واط» لا تعني القواعد نفسها في كل مكان.',
          'تُعدّ السويد والمجر الاستثناءين الأوضح في الاتحاد الأوروبي من هذا الاتجاه نحو التقارب — إذ أفادت هيئة السلامة الكهربائية السويدية (Elsäkerhetsverket) بأن الأنظمة القابلة للتوصيل بالمقبس لا تستوفي المعايير السويدية ويجب توصيلها بشكل دائم (وفق [pv magazine](https://www.pv-magazine.com/?p=32404)، 2023)، وتفيد التقارير بأن المجر تحظر الألواح الشمسية على الشرفات بموجب مرسوم بناء ساري منذ 1 يناير 2025 (وفق [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).',
          'للاطلاع على التفاصيل الخاصة بألمانيا — حد 800 واط للعاكس، DIN VDE V 0126-95، الحد الفرعي البالغ 960 واط ذروة لمقبس Schuko، و § 8 EEG 2023 — راجع الدليل المخصص لألمانيا بدلاً من هذا العرض العابر للحدود.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD يقود التقارب',
        content: [
          '**يوسّع توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، إلزامات تركيب الطاقة الشمسية صراحةً لتشمل الواجهات والشرفات والتراسات — وليس الأسطح فقط.** وهذا يعيد تأطير الطاقة الشمسية للشرفات من خيار نمط حياة استهلاكي إلى آلية امتثال لالتزامات الدول الأعضاء بإزالة الكربون من المباني. الدول التي كانت تعامل سابقًا الطاقة الشمسية القابلة للتوصيل باعتبارها مسألة تنظيمية ثانوية أصبح لديها الآن سبب على مستوى التوجيه لإضفاء الطابع الرسمي على القواعد بسرعة — وهذا هو السياق المباشر لمبادرة اليونان التشريعية لعام 2026.',
          'تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط بمجرد اشتراط إخطار بسيط لمشغّل الشبكة مع السماح بالتغذية العكسية، وهو ما سبق إقرار ألمانيا نفسها. وقد جعل معيار DIN VDE V 0126-95 الألماني، الذي أُقرّ نهائيًا في ديسمبر 2025، ألمانيا متوافقة مع هذا المعيار القائم بحكم الأمر الواقع بدلاً من إرساء معيار جديد — ويعمل EPBD الآن على توسيع المنطق الأساسي نفسه ليشمل باقي دول الاتحاد، رغم أن ليست كل دولة عضو تعتمد الآلية نفسها (انظر اليونان أدناه) أو تتقارب أصلاً (السويد، المجر).',
        ],
      },
      greece: {
        id: 'greece',
        title: 'اليونان: أحدث المنضمّين',
        content: [
          '**اليونان هي أحدث المنضمّين إلى هذا التقارب، لكن بآلية أكثر صرامة بوضوح: فقرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة الرسمية Β\' 5573)، صدر بموجب القانون 5299/2026 (أُقرّ في 5 مايو 2026)، يسمح بأنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد للاستهلاك الذاتي فقط — فالطاقة المحقونة في الشبكة لا يُعوَّض عنها، وتُسمح البطاريات المستقلة دون تصدير.** والتسجيل إخطار عبر بوابة لدى DEDDIE/HEDNO لم تُفتح بعد (المواصفات الفنية بحلول 31 أكتوبر 2026، وموعد إطلاق البوابة بحلول 31 ديسمبر 2026). وللتفاصيل والمصادر راجع الدليل المخصص لليونان بدل هذا الملخص الموجز.',
        ],
        callouts: [
          { type: 'warning', text: 'ملخص للتغطية المنشورة وليس استشارة قانونية؛ فالبوابة والمواصفات الفنية لا تزالان معلّقتين — راجع الدليل المخصص لليونان لمعرفة الوضع الحالي قبل اعتبار أي تفصيل نهائيًا.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ماذا يعني هذا خارج ألمانيا',
        content: [
          '**إذا لم يكن لدى بلدك قواعد صريحة للطاقة الشمسية على الشرفات بعد، فإن اتجاه المسار أصبح متوقعًا في شكله وإن لم يكن في آليته: توقّع سقفًا من فئة 800 واط وجدولًا زمنيًا مرتبطًا بموعد نقل EPBD في بلدك بدل الغموض المفتوح — لكن القواعد الدقيقة قد تختلف اختلافًا ملموسًا بين البلدان، من الإخطار فقط مع التصدير (فرنسا والنمسا وبلجيكا وهولندا) إلى تصميم أكثر صرامة للاستهلاك الذاتي فقط (اليونان).** واليونان هي أوضح مثال حالي على بلد ينتقل من المنطقة الرمادية إلى قواعد مقنَّنة، وإن كان نهجها دون تصدير يبيّن أن «800 واط» وحدها لا تضمن الآلية نفسها المعمول بها في بقية الكتلة — ومن المرجح أن تقنّن دول أعضاء أخرى في الاتحاد الأوروبي القواعد مع اقتراب مواعيد نقل EPBD، لكن ليس بالضرورة بالنموذج نفسه، وتُظهر السويد والمجر أن التقارب غير مضمون إطلاقًا.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل وضعت ألمانيا معيار الاتحاد الأوروبي البالغ 800 واط للطاقة الشمسية على الشرفات؟', a: 'لا — كانت فرنسا والنمسا وبلجيكا وهولندا تسمح بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط عبر تسجيل بإخطار بسيط فقط قبل أن تُقرّ ألمانيا معيارها الخاص DIN VDE V 0126-95 نهائيًا في ديسمبر 2025. انضمت ألمانيا إلى معيار أوروبي قائم بحكم الأمر الواقع بدلاً من إنشاء معيار جديد.' },
          { q: 'ماذا تفعل اليونان بشأن الطاقة الشمسية على الشرفات في عام 2026؟', a: 'يسمح قرار وزاري مؤرخ في 14 سبتمبر 2026 (أُفيد بأنه منشور في الجريدة الرسمية Β\' 5573)، صدر بموجب القانون 5299/2026، بأنظمة قابلة للتوصيل بقدرة توليد تصل إلى 800 واط وقدرة مركّبة تصل إلى 1,000 واط لكل نقطة إمداد للاستهلاك الذاتي فقط: فالطاقة المحقونة في الشبكة لا يُعوَّض عنها، والتسجيل إخطار عبر بوابة لدى DEDDIE/HEDNO لم تُفتح بعد. وللمصادر والوضع الحالي راجع الدليل المخصص لليونان.' },
          { q: 'هل يسمح إطار اليونان بتصدير الطاقة الفائضة إلى الشبكة؟', a: 'لا — بموجب إطار المسودة قيد الاستشارة العامة (القانون 5299/2026، حتى 20 يوليو 2026)، تُحدَّد الأنظمة عند 800 واط للتغذية إلى الشبكة دون السماح بأي تغذية عكسية إطلاقًا، وهو تصميم «بلا تغذية عكسية» أكثر صرامة من النموذج القائم على الإخطار فقط مع السماح بالتغذية العكسية المعتمد في فرنسا والنمسا وبلجيكا وهولندا. يُسمح بإقران البطارية للتخزين، وهي إحدى طرق استخدام الطاقة التي لا يمكن تصديرها.' },
          { q: 'ما هو EPBD ولماذا يهم بالنسبة للطاقة الشمسية على الشرفات؟', a: 'يدخل توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل حيز التنفيذ تدريجيًا اعتبارًا من 2026، ويوسّع إلزامات الطاقة الشمسية للمباني في الاتحاد الأوروبي لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط — مما يحوّل الطاقة الشمسية للشرفات إلى آلية امتثال للدول الأعضاء بدلاً من كونها خيارًا سياسيًا تقديريًا.' },
          { q: 'هل الطاقة الشمسية على الشرفات قانونية في كل أنحاء الاتحاد الأوروبي؟', a: 'لا. فرغم أن الزخم يتجه نحو إطار عمل على غرار الـ800 واط في العديد من الدول الأعضاء، أفادت هيئة السلامة الكهربائية السويدية (Elsäkerhetsverket) بأن الأنظمة القابلة للتوصيل بالمقبس لا تستوفي المعايير السويدية ويجب توصيلها بشكل دائم (وفق pv magazine، 2023)، وتفيد التقارير بأن المجر تحظر الألواح الشمسية على الشرفات بموجب مرسوم بناء ساري منذ 1 يناير 2025 (وفق CEE Legal Matters) — التقارب نحو نهج أوروبي مشترك حقيقي لكنه ليس شاملاً.' },
          { q: 'أين يمكنني الاطلاع على القواعد الخاصة بألمانيا للطاقة الشمسية على الشرفات؟', a: 'راجع الدليل المخصص لألمانيا، الذي يغطي بالتفصيل حد 800 واط للعاكس، ومعيار DIN VDE V 0126-95، والحد الفرعي البالغ 960 واط ذروة لمقبس Schuko، والنص القانوني الكامل لـ § 8 EEG 2023 — تركّز هذه الصفحة على التوحيد العابر للحدود بدلاً من تكرار تلك التفاصيل.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Balkonkraftwerk: قواعد الطاقة الشمسية على الشرفات في ألمانيا](/ar/balcony-solar/balkonkraftwerk-germany-rules) — التحليل المعمّق الكامل لمعيار 800 واط/DIN VDE V 0126-95 الألماني الذي يشير إليه هذا المقال بدلاً من تكراره',
          '[هل الطاقة الشمسية على الشرفات قانونية؟ دليل حسب الدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — أداة تتبع قانونية عالمية',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-ja.webp',
    title: '800W バルコニー太陽光基準：EU調和の解説（2027年）',
    seoTitle: '800W バルコニー太陽光基準：EU調和の解説（2027年）',
    intro: 'ドイツの800Wのバルコニー太陽光の上限は、2025年12月にDIN VDE V 0126-95で確定し、フランス、オーストリア、ベルギー、オランダがすでに使っている事実上のEU標準にドイツを合わせるものです。他国が追随する新しい前例を作るものではありません。本ページはこの収れんがどう広がっているかを追っています。ただしギリシャ独自の仕組みは、より広範な2026年法5299号のもとで2026年9月14日付の閣僚決定が定めており、フランス・オーストリア・ベルギー・オランダのモデルをそのまま採用するのではなく、「自家消費のみ、逆潮流なし」というより厳しい方式を取っています。より広い推進力はEUの建築物のエネルギー性能指令（EPBD）です。すべての加盟国が収れんしているわけではなく、スウェーデンとハンガリーは、当局・報道によると例外のままとみられます。',
    metaDescription: 'フランス、オーストリア、ベルギー、オランダはすでに800Wのバルコニー太陽光を認めています。ドイツは2025年12月に合流し、ギリシャは2026年に800Wを認めつつ逆潮流を禁止しました。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ドイツ以外のEU圏でバルコニー太陽光を検討し、800W基準の採用状況を追うユーザー',
    primaryTerm: 'eu 800wバルコニー太陽光基準',
    targetKeywords: ['800w バルコニー太陽光 eu', 'ギリシャ バルコニー太陽光 800w', 'eu バルコニー太陽光 調和 2027'],
    leadAnswerBlock: '**ドイツの800Wのバルコニー太陽光の上限は、2025年12月にDIN VDE V 0126-95で確定し、フランス、オーストリア、ベルギー、オランダがすでに使っている事実上のEU標準にドイツを合わせるものです。他国が追随する新しい前例を作るものではありません。** ギリシャは最新の参入国ですが、仕組みははるかに厳格です。2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報道）により、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムが認められますが、用途は自家消費に限られます。ブロックの他国で使われている、届出のみで逆潮流を認めるモデルとは異なり、系統に届いたエネルギーは補償されません（ギリシャ専用ガイドを参照）。2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が、ルールの整備を広く促す構造的な推進力ですが、すべての加盟国が収れんしているわけではなく、スウェーデンとハンガリーは、当局・報道によると例外のままとみられます。',
    quickAnswerTop: {
      ja: {
        question: '800Wバルコニー太陽光基準はEU全域に広がっているのか？',
        answer: 'はい。ただしドイツは主導しているのではなく、すでにある収れんに加わっており、仕組みは国によって異なります。フランス、オーストリア、ベルギー、オランダは、簡単な届出のみの登録と系統への逆潮流を伴う800Wのバルコニー太陽光をすでに認めており、ドイツのDIN VDE V 0126-95（2025年12月）はそれに合わせるものでした。ギリシャは最新の参入国ですが、より厳格なモデルです。2026年9月14日付の閣僚決定は、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムを自家消費のみで認め、系統への注入は補償しません。EUの改正EPBDがより広い動きの構造的な推進力ですが、スウェーデンとハンガリーは、当局・報道によると、プラグイン式太陽光が一般には認められていない例外のままとみられます。',
        bullets: [
          'フランス、オーストリア、ベルギー、オランダはすでに送電網事業者への簡易な届出と逆潮流の許可のみで最大800Wのバルコニー太陽光を認めている — ドイツは2025年12月にこの基準に加わったのであり、定めたのではない',
          'ギリシャ：2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報道）。供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システム、自家消費のみ、系統への注入は補償なし、単独蓄電池は可。他国で使われる届出のみで逆潮流を認めるモデルとは大きく異なる仕組みです',
          'EPBD（2026年から段階的に発効）が構造的な推進力 — 屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している',
          'スウェーデンとハンガリーはEUで最も明確な例外 — スウェーデンの電気安全当局（Elsäkerhetsverket）は、プラグイン式システムはスウェーデンの規格を満たさず恒久的な接続が必要だと述べており（pv magazine、2023年）、ハンガリーは2025年1月1日施行の建築関連政令（CEE Legal Matters）でバルコニーへの太陽光パネル設置を禁じていると報じられているため、収束は普遍的ではない',
          'ドイツ独自の800W関連事項（DIN VDE V 0126-95、960 Wpのシュコ・サブ上限、EEG 2023第8条）については、この越境概要ではなく専用のドイツガイドを参照',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'EPBDが収束を後押し', anchor: '#epbd-driver' },
      { label: 'ギリシャ：最新の参入国', anchor: '#greece' },
      { label: 'ドイツ以外にとっての意味', anchor: '#what-this-means' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'フランス、オーストリア、ベルギー、オランダはすでに送電網事業者への簡易な届出と逆潮流の許可のみで最大800Wのバルコニー太陽光を認めている — ドイツのDIN VDE V 0126-95（2025年12月）はこの既存の基準にドイツを合わせたものであり、その逆ではない。',
          'ギリシャのバルコニー向けルールは、2026年9月14日付の閣僚決定（官報B\' 5573として報道、2026年法5299号に基づく）が定めています。供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムで、用途は自家消費に限られ、系統への注入は補償されません。ブロックの他国で使われる届出のみで逆潮流を認めるモデルではありません。',
          '2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が構造的な推進力であり、屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している。',
          'パターンは国によって同じではありません。フランス・オーストリア・ベルギー・オランダは届出のみの登録で逆潮流を認めますが、ギリシャの決定は自家消費のみのより厳格な方式です。「800W」はどこでも同じルールを意味しません。',
          'スウェーデンとハンガリーは、この収束の傾向に対するEUで最も明確な例外である — スウェーデンの電気安全当局（Elsäkerhetsverket）は、プラグイン式システムはスウェーデンの規格を満たさず恒久的な接続が必要だと述べており（[pv magazine](https://www.pv-magazine.com/?p=32404)、2023年）、ハンガリーは2025年1月1日施行の建築関連政令（[CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)）でバルコニーへの太陽光パネル設置を禁じていると報じられている。',
          'ドイツ独自の詳細（800Wインバーター上限、DIN VDE V 0126-95、960 Wpのシュコ・サブ上限、EEG 2023第8条）については、この越境概要ではなく専用のドイツガイドを参照。',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBDが収束を後押し',
        content: [
          '**2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）は、太陽光設置義務を屋根だけでなく、ファサード、バルコニー、テラスにまで明示的に拡大しています。** これにより、バルコニー太陽光は消費者のライフスタイル選択から、加盟国の建物脱炭素義務のためのコンプライアンス手段へと位置づけが変わります。これまでプラグイン太陽光を規制上の後回しとして扱ってきた国々にも、いまや指令レベルの根拠に基づき、ルールを速やかに正式化する理由が生まれています — これがギリシャの2026年立法動向の直接の文脈です。',
          'フランス、オーストリア、ベルギー、オランダは、ドイツ自身の確定より前から、送電網事業者への簡易な届出と逆潮流の許可のみで最大800Wのバルコニー太陽光を認めていました。2025年12月に確定したドイツのDIN VDE V 0126-95は、新たな基準を作ったのではなく、この既存の事実上の基準にドイツを合わせたものです — EPBDはいま、同じ根本ロジックをEU全体に拡大しつつありますが、すべての加盟国が同じ仕組みを採用しているわけではなく（下記のギリシャを参照）、そもそも収束していない国もあります（スウェーデン、ハンガリー）。',
        ],
      },
      greece: {
        id: 'greece',
        title: 'ギリシャ：最新の参入国',
        content: [
          '**ギリシャはこの収れんの最新の参入国ですが、仕組みははるかに厳格です。2026年法5299号（2026年5月5日成立）に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報道）は、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムを自家消費のみで認めています。系統に注入されたエネルギーは補償されず、単独蓄電池は逆潮流なしで認められます。** 登録は、まだ開設されていないDEDDIE/HEDNOのポータルを通じた届出です（技術仕様は2026年10月31日まで、ポータル開始日は2026年12月31日までに発表予定）。詳細と出典は、この簡単な要約ではなくギリシャ専用ガイドをご覧ください。',
        ],
        callouts: [
          { type: 'warning', text: '公表された報道の要約であり、法的助言ではありません。ポータルと技術仕様はまだ確定していません。詳細を確定事項として扱う前に、ギリシャ専用ガイドで最新の状況をご確認ください。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ドイツ以外にとっての意味',
        content: [
          '**お住まいの国にまだバルコニー太陽光の明確なルールがない場合、進む方向は仕組みはともかく形としてはすでに予測できます。800Wクラスの上限と、お住まいの国のEPBD国内法化の期限に結びついたスケジュールが見込まれ、先の見えない不確実性ではなくなります。ただし正確なルールは国によって大きく異なり、届出のみで逆潮流ありの方式（フランス、オーストリア、ベルギー、オランダ）から、自家消費のみのより厳格な方式（ギリシャ）まであります。** ギリシャは、グレーゾーンから正式なルールへ移行する国の最も明確な現在の例ですが、逆潮流なしという方式は、「800W」だけではブロックの他国と同じ仕組みになるとは限らないことを示しています。EPBDの国内法化期限が近づくにつれ、他のEU加盟国もルールを整備すると見込まれますが、必ずしも同じモデルとは限らず、スウェーデンとハンガリーは、収れんがまったく保証されていないことを示しています。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ドイツはEUの800Wバルコニー太陽光基準を定めたのか？', a: 'いいえ — フランス、オーストリア、ベルギー、オランダは、ドイツが2025年12月に独自のDIN VDE V 0126-95基準を確定させる前から、すでに簡易な届出のみの登録で最大800Wのバルコニー太陽光を認めていました。ドイツは新たな基準を作ったのではなく、既存の事実上のEU基準に加わったのです。' },
          { q: 'ギリシャは2026年、バルコニー太陽光についてどう対応しているか？', a: '2026年法5299号に基づく2026年9月14日付の閣僚決定（官報B\' 5573として報道）は、供給地点ごとに発電800W・設置容量1,000Wまでのプラグイン式システムを自家消費のみで認めています。系統に注入されたエネルギーは補償されず、登録はまだ開設されていないDEDDIE/HEDNOのポータルを通じた届出です。出典と最新の状況は、ギリシャ専用ガイドをご覧ください。' },
          { q: 'ギリシャの枠組みでは余剰電力を系統に輸出できるのか？', a: 'いいえ — パブリックコンサルテーション中の草案枠組み（2026年法5299号、2026年7月20日まで）では、系統への逆潮流は800Wに制限され、逆潮流そのものが一切認められておらず、フランス、オーストリア、ベルギー、オランダで使われている届出のみで逆潮流が許可されるモデルより厳格な「逆潮流ゼロ」方式です。蓄電池の併用は認められており、逆潮流できない電力を活用する一つの手段となっています。' },
          { q: 'EPBDとは何か、バルコニー太陽光にとってなぜ重要なのか？', a: '改正建築物エネルギー性能指令（EPBD）は2026年から段階的に発効し、屋根だけでなくファサード、バルコニー、テラスにまでEUの建物太陽光義務を拡大します — これにより、バルコニー太陽光は加盟国にとって任意の政策選択ではなく、コンプライアンス手段になります。' },
          { q: 'バルコニー太陽光はEU全域で合法なのか？', a: 'いいえ。多くの加盟国で800W型の枠組みへ向かう動きがある一方、スウェーデンの電気安全当局（Elsäkerhetsverket）は、プラグイン式システムはスウェーデンの規格を満たさず恒久的な接続が必要だと述べており（pv magazine、2023年）、ハンガリーは2025年1月1日施行の建築関連政令（CEE Legal Matters）でバルコニーへの太陽光パネル設置を禁じていると報じられています — 共通のEUアプローチへの収束は実際に起きていますが、普遍的ではありません。' },
          { q: 'ドイツ独自のバルコニー太陽光ルールはどこで確認できるか？', a: '800Wインバーター上限、DIN VDE V 0126-95、960 Wpのシュコ・コンセント・サブ上限、EEG 2023第8条の条文を詳しく扱う専用のドイツガイドを参照してください。このページは、それらの詳細を繰り返すのではなく、越境の調和に焦点を当てています。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[バルコンクラフトヴェルク：ドイツのバルコニー太陽光ルール](/ja/balcony-solar/balkonkraftwerk-germany-rules) — この記事が繰り返すのではなく参照する、ドイツの800W/DIN VDE V 0126-95の詳細解説',
          '[バルコニー太陽光は合法か？国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — 世界の法律トラッカー',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-ko.webp',
    title: '800W 발코니 태양광 표준: EU 조화 정책 설명 (2027년)',
    seoTitle: '800W 발코니 태양광 표준: EU 조화 정책 설명 (2027년)',
    intro: '독일의 800W 발코니 태양광 상한은 2025년 12월 DIN VDE V 0126-95로 확정되어, 프랑스, 오스트리아, 벨기에, 네덜란드가 이미 사용 중인 사실상의 EU 표준에 독일을 맞추는 것입니다. 다른 나라가 따르는 새로운 선례를 만드는 것이 아닙니다. 이 글은 그 수렴이 어떻게 퍼지는지 추적합니다. 다만 그리스 고유의 방식은 더 포괄적인 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령이 정하며, 프랑스/오스트리아/벨기에/네덜란드 모델을 그대로 채택하는 대신 「자가소비 전용, 역송 금지」라는 더 엄격한 방식을 취합니다. 더 넓은 동력은 EU의 건물 에너지 성능 지침(EPBD)입니다. 모든 회원국이 수렴하는 것은 아니며, 당국 및 언론 보도에 따르면 스웨덴과 헝가리는 예외로 남아 있는 것으로 보입니다.',
    metaDescription: '프랑스, 오스트리아, 벨기에, 네덜란드는 이미 800W 발코니 태양광을 허용합니다. 독일은 2025년 12월 합류했고, 그리스는 2026년에 800W를 허용하되 계통 역송은 금지했습니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '독일 외 EU 지역에서 800W 표준 도입 현황을 추적하는 발코니 태양광 구매자',
    primaryTerm: 'eu 800w 발코니 태양광 표준',
    targetKeywords: ['800w 발코니 태양광 eu', '그리스 발코니 태양광 800w', 'eu 발코니 태양광 조화 2027'],
    leadAnswerBlock: '**독일의 800W 발코니 태양광 상한은 2025년 12월 DIN VDE V 0126-95로 확정되어, 프랑스, 오스트리아, 벨기에, 네덜란드가 이미 사용 중인 사실상의 EU 표준에 독일을 맞추는 것입니다. 다른 나라가 따르는 새로운 선례를 만드는 것이 아닙니다.** 그리스는 가장 최근에 합류했지만 방식은 훨씬 엄격합니다. 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템을 자가소비 전용으로 허용합니다. 블록의 다른 곳에서 쓰는, 신고만 하고 역송을 허용하는 모델과 달리 계통에 도달한 에너지는 보상되지 않습니다(그리스 전용 가이드 참조). 2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)은 규정 정비를 넓게 밀어붙이는 구조적 동력이지만, 모든 회원국이 수렴하는 것은 아니며 당국 및 언론 보도에 따르면 스웨덴과 헝가리는 예외로 남아 있는 것으로 보입니다.',
    quickAnswerTop: {
      ko: {
        question: '800W 발코니 태양광 표준이 EU 전역으로 확산되고 있습니까?',
        answer: '네. 다만 독일은 수렴을 이끄는 것이 아니라 이미 있는 수렴에 합류하는 것이며, 방식은 나라마다 다릅니다. 프랑스, 오스트리아, 벨기에, 네덜란드는 간단한 신고 방식의 등록과 계통 역송을 허용하는 800W 발코니 태양광을 이미 허용하며, 독일의 DIN VDE V 0126-95(2025년 12월)는 이에 맞춘 것입니다. 그리스는 가장 최근에 합류했지만 더 엄격한 모델입니다. 2026년 9월 14일자 장관령은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템을 자가소비 전용으로 허용하고 계통 주입은 보상하지 않습니다. EU의 개정 EPBD가 더 넓은 흐름의 구조적 동력이지만, 당국 및 언론 보도에 따르면 스웨덴과 헝가리는 플러그인 태양광이 일반적으로 허용되지 않는 예외로 남아 있는 것으로 보입니다.',
        bullets: [
          '프랑스, 오스트리아, 벨기에, 네덜란드는 이미 송전망 운영사에 대한 단순 신고와 역송전 허용만으로 최대 800W 발코니 태양광을 허용하고 있습니다 — 독일은 2025년 12월 이 기준에 합류했을 뿐, 이를 제정한 것이 아닙니다',
          '그리스: 2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨) — 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템, 자가소비 전용, 계통 주입 무보상, 독립형 배터리 허용 — 다른 곳에서 쓰는 신고만 하고 역송을 허용하는 모델과 크게 다른 방식입니다',
          'EPBD(2026년부터 단계적 발효)는 구조적 동인입니다 — 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다',
          '스웨덴과 헝가리는 EU에서 가장 명확한 예외입니다 — 스웨덴 전기안전청(Elsäkerhetsverket)은 플러그인 시스템이 스웨덴 표준을 충족하지 않으며 상시 고정 연결해야 한다고 밝혔고(pv magazine, 2023), 헝가리는 2025년 1월 1일부터 시행된 건축 관련 시행령(CEE Legal Matters)으로 발코니의 태양광 패널 설치를 금지한 것으로 보도되어 수렴이 보편적이지 않습니다',
          '독일 자체의 800W 세부 사항(DIN VDE V 0126-95, 960 Wp 슈코 하위 상한, EEG 2023 제8조)은 이 국경 간 개요가 아닌 전용 독일 가이드를 참고하십시오',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: 'EPBD가 수렴을 이끄는 이유', anchor: '#epbd-driver' },
      { label: '그리스: 가장 최근의 합류국', anchor: '#greece' },
      { label: '독일 외 지역에 미치는 의미', anchor: '#what-this-means' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '프랑스, 오스트리아, 벨기에, 네덜란드는 이미 송전망 운영사에 대한 단순 신고와 역송전 허용만으로 최대 800W 발코니 태양광을 허용하고 있습니다 — 독일의 DIN VDE V 0126-95(2025년 12월)는 독일을 이 기존 기준에 맞춘 것이지, 그 반대가 아닙니다.',
          '그리스의 발코니 태양광 전용 규정은 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨, 2026년 법률 제5299호에 따라 발령)이 정합니다. 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템이며 자가소비 전용이고 계통 주입은 보상되지 않습니다. 블록의 다른 곳에서 쓰는 신고만 하고 역송을 허용하는 모델이 아닙니다.',
          '2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)이 구조적 동인이며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다.',
          '패턴은 나라마다 같지 않습니다. 프랑스/오스트리아/벨기에/네덜란드는 신고만 하는 등록에 역송을 허용하지만, 그리스의 결정은 자가소비 전용의 더 엄격한 방식입니다. 「800W」가 어디서나 같은 규정을 뜻하지는 않습니다.',
          '스웨덴과 헝가리는 이러한 수렴 흐름에 대한 EU의 가장 명확한 예외입니다 — 스웨덴 전기안전청(Elsäkerhetsverket)은 플러그인 시스템이 스웨덴 표준을 충족하지 않으며 상시 고정 연결해야 한다고 밝혔고([pv magazine](https://www.pv-magazine.com/?p=32404), 2023), 헝가리는 2025년 1월 1일부터 시행된 건축 관련 시행령([CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands))으로 발코니의 태양광 패널 설치를 금지한 것으로 보도되었습니다.',
          '독일 고유의 세부 사항 — 800W 인버터 상한, DIN VDE V 0126-95, 960 Wp 슈코 하위 상한, EEG 2023 제8조 — 에 대해서는 이 국경 간 개요가 아닌 전용 독일 가이드를 참고하십시오.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD가 수렴을 이끄는 이유',
        content: [
          '**2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)은 태양광 설치 의무를 지붕뿐 아니라 파사드, 발코니, 테라스로까지 명시적으로 확대합니다.** 이에 따라 발코니 태양광은 소비자의 생활방식 선택에서 회원국의 건물 탈탄소화 의무를 위한 준수 수단으로 재정의됩니다. 이전에는 플러그인 태양광을 규제상 부차적인 문제로 취급했던 국가들도 이제 규정을 신속히 공식화할 지침 차원의 근거를 갖게 되었으며, 이는 그리스의 2026년 입법 추진의 직접적인 배경입니다.',
          '프랑스, 오스트리아, 벨기에, 네덜란드는 독일 자체의 표준 확정보다 앞서, 송전망 운영사에 대한 단순 신고 요건과 역송전 허용만으로 최대 800W 발코니 태양광을 허용해 왔습니다. 2025년 12월 확정된 독일의 DIN VDE V 0126-95는 새로운 기준을 수립한 것이 아니라 이러한 기존의 사실상 표준에 독일을 맞춘 것입니다 — EPBD는 이제 동일한 근본 논리를 EU 전체로 확대하고 있지만, 모든 회원국이 동일한 방식을 채택하는 것은 아니며(아래 그리스 참고), 아예 수렴하지 않는 국가도 있습니다(스웨덴, 헝가리).',
        ],
      },
      greece: {
        id: 'greece',
        title: '그리스: 가장 최근의 합류국',
        content: [
          '**그리스는 이 수렴에 가장 최근 합류했지만 방식은 훨씬 엄격합니다. 2026년 법률 제5299호(2026년 5월 5일 통과)에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템을 자가소비 전용으로 허용합니다. 계통에 주입된 에너지는 보상되지 않으며, 독립형 배터리는 역송 없이 허용됩니다.** 등록은 아직 열리지 않은 DEDDIE/HEDNO 포털을 통한 신고입니다(기술 사양은 2026년 10월 31일까지, 포털 개시일은 2026년 12월 31일까지 발표 예정). 자세한 내용과 출처는 이 간단한 요약이 아니라 그리스 전용 가이드를 참고하십시오.',
        ],
        callouts: [
          { type: 'warning', text: '공개된 보도의 요약이며 법률 자문이 아닙니다. 포털과 기술 사양은 아직 확정되지 않았습니다. 세부 사항을 확정된 것으로 받아들이기 전에 그리스 전용 가이드에서 현재 상태를 확인하십시오.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '독일 외 지역에 미치는 의미',
        content: [
          '**거주하는 나라에 아직 발코니 태양광에 대한 명시적 규정이 없다면, 나아갈 방향은 방식은 몰라도 형태로는 이제 예측할 수 있습니다. 800W급 상한과 해당 국가의 EPBD 국내법화 기한에 맞춘 일정이 예상되며, 기약 없는 불확실성은 아닙니다. 다만 정확한 규정은 나라마다 크게 다를 수 있으며, 신고만 하고 역송을 허용하는 방식(프랑스, 오스트리아, 벨기에, 네덜란드)부터 자가소비 전용의 더 엄격한 방식(그리스)까지 있습니다.** 그리스는 회색지대에서 정식 규정으로 넘어가는 나라의 가장 뚜렷한 현재 사례이지만, 역송 금지 방식은 「800W」만으로는 블록의 다른 곳과 같은 방식이 보장되지 않음을 보여 줍니다. EPBD 국내법화 기한이 다가오면서 다른 EU 회원국도 규정을 정비할 가능성이 높지만 반드시 같은 모델은 아니며, 스웨덴과 헝가리는 수렴이 전혀 보장되지 않음을 보여 줍니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '독일이 EU의 800W 발코니 태양광 표준을 제정했습니까?', a: '아닙니다 — 프랑스, 오스트리아, 벨기에, 네덜란드는 독일이 2025년 12월 자체 DIN VDE V 0126-95 표준을 확정하기 전부터 이미 단순 신고만으로 최대 800W 발코니 태양광을 허용하고 있었습니다. 독일은 새로운 기준을 만든 것이 아니라 기존의 사실상 EU 규범에 합류한 것입니다.' },
          { q: '그리스는 2026년 발코니 태양광에 대해 어떤 조치를 취하고 있습니까?', a: '2026년 법률 제5299호에 따라 발령된 2026년 9월 14일자 장관령(관보 Β\' 5573으로 보도됨)은 공급 지점당 발전 800W, 설치 용량 1,000W 이하의 플러그인 시스템을 자가소비 전용으로 허용합니다. 계통에 주입된 에너지는 보상되지 않으며, 등록은 아직 열리지 않은 DEDDIE/HEDNO 포털을 통한 신고입니다. 출처와 현재 상태는 그리스 전용 가이드를 참고하십시오.' },
          { q: '그리스의 체계는 잉여 전력을 계통으로 내보낼 수 있게 합니까?', a: '아닙니다 — 공개 의견수렴 중인 초안 체계(2026년 법률 제5299호, 2026년 7월 20일까지)에 따르면, 시스템은 계통 역송전이 800W로 제한되며 역송전이 전혀 허용되지 않습니다. 이는 프랑스, 오스트리아, 벨기에, 네덜란드에서 사용되는 신고 전용, 역송전 허용 모델보다 더 엄격한 "역송전 제로" 방식입니다. 배터리 저장 장치 병용은 허용되며, 이는 역송전할 수 없는 전력을 활용하는 한 가지 방법입니다.' },
          { q: 'EPBD란 무엇이며 발코니 태양광에 왜 중요합니까?', a: '개정 건물 에너지 성능 지침(EPBD)은 2026년부터 단계적으로 발효되며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 EU 건물 태양광 의무를 확대합니다 — 이로써 발코니 태양광은 회원국의 재량적 정책 선택이 아니라 준수 수단이 됩니다.' },
          { q: '발코니 태양광은 EU 전역에서 합법입니까?', a: '아닙니다. 많은 회원국에서 800W 방식의 체계로 나아가는 흐름이 있지만, 스웨덴 전기안전청(Elsäkerhetsverket)은 플러그인 시스템이 스웨덴 표준을 충족하지 않으며 상시 고정 연결해야 한다고 밝혔고(pv magazine, 2023), 헝가리는 2025년 1월 1일부터 시행된 건축 관련 시행령(CEE Legal Matters)으로 발코니의 태양광 패널 설치를 금지한 것으로 보도되었습니다 — 공통된 EU 접근 방식으로의 수렴은 실제로 진행되고 있지만 보편적이지는 않습니다.' },
          { q: '독일 고유의 발코니 태양광 규정은 어디에서 확인할 수 있습니까?', a: '800W 인버터 상한, DIN VDE V 0126-95, 960 Wp 슈코 콘센트 하위 상한, EEG 2023 제8조의 법 조문을 상세히 다루는 전용 독일 가이드를 참고하십시오 — 이 페이지는 해당 세부 사항을 반복하는 대신 국경 간 조화에 초점을 맞춥니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[발콘크라프트베르크: 독일의 발코니 태양광 규정](/ko/balcony-solar/balkonkraftwerk-germany-rules) — 이 글이 반복하지 않고 참조하는, 독일의 800W/DIN VDE V 0126-95에 대한 전체 심층 분석',
          '[발코니 태양광은 합법입니까? 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 전 세계 법률 추적 자료',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-pt.webp',
    title: 'O padrão de 800 W para energia solar de varanda: a harmonização da UE explicada (2027)',
    seoTitle: 'O padrão de 800 W para energia solar de varanda: a harmonização da UE explicada (2027)',
    intro: 'O limite de 800 W da energia solar de varanda na Alemanha, finalizado pela norma DIN VDE V 0126-95 em dezembro de 2025, alinha o país a um padrão de fato da UE já usado por França, Áustria, Bélgica e Países Baixos — em vez de criar um novo precedente que outros seguem. Esta página acompanha como essa convergência se espalha — embora o mecanismo próprio da Grécia, definido por uma decisão ministerial de 14 de setembro de 2026 no âmbito da Lei 5299/2026, adote uma abordagem mais rigorosa de «apenas autoconsumo, sem exportação» em vez de simplesmente adotar o modelo de França, Áustria, Bélgica e Países Baixos, com a Diretiva de Desempenho Energético dos Edifícios (EPBD) da UE como impulsionadora mais ampla. Nem todos os Estados-membros convergem: Suécia e Hungria parecem continuar sendo exceções, segundo relatos de autoridades e da imprensa.',
    metaDescription: 'França, Áustria, Bélgica e Países Baixos já permitem 800 W de energia solar de varanda. A Alemanha entrou em dezembro de 2025; a Grécia permite 800 W em 2026, mas sem exportar à rede.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda na UE fora da Alemanha acompanhando a adoção do padrão de 800 W',
    primaryTerm: 'padrão de 800 w para energia solar de varanda na ue',
    targetKeywords: ['energia solar de varanda 800w ue', 'grécia energia solar de varanda 800w', 'harmonização ue energia solar de varanda 2027'],
    leadAnswerBlock: '**O limite de 800 W da energia solar de varanda na Alemanha, finalizado pela norma DIN VDE V 0126-95 em dezembro de 2025, alinha o país a um padrão de fato da UE já usado por França, Áustria, Bélgica e Países Baixos — em vez de criar um novo precedente que outros seguem.** A Grécia é a mais recente a entrar, mas com um mecanismo claramente mais rigoroso: uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Oficial Β\' 5573), emitida com base na Lei 5299/2026, permite sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, estritamente para autoconsumo — ao contrário do modelo de mera notificação com exportação permitida usado no resto do bloco, a energia que chega à rede não é compensada (veja o guia dedicado à Grécia). A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural desse impulso mais amplo para formalizar regras, embora nem todos os Estados-membros convirjam: Suécia e Hungria parecem continuar sendo exceções, segundo relatos de autoridades e da imprensa.',
    quickAnswerTop: {
      pt: {
        question: 'O padrão de 800 W para energia solar de varanda está se espalhando pela UE?',
        answer: 'Sim — mas a Alemanha está se juntando a uma convergência existente, não liderando uma, e o mecanismo varia por país. França, Áustria, Bélgica e Países Baixos já permitem energia solar de varanda de 800 W com simples registro por notificação e exportação à rede; a norma DIN VDE V 0126-95 da Alemanha (dezembro de 2025) a alinhou a esse padrão. A Grécia é a mais recente a entrar, mas com um modelo mais rigoroso: uma decisão ministerial de 14 de setembro de 2026 permite sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento somente para autoconsumo, sem compensação pela injeção na rede. A EPBD revisada da UE é o motor estrutural do impulso mais amplo, embora Suécia e Hungria pareçam continuar sendo exceções, segundo relatos de autoridades e da imprensa, onde a energia solar plug-in geralmente não é permitida.',
        bullets: [
          'França, Áustria, Bélgica e Países Baixos já permitem até 800 W de energia solar de varanda com uma simples notificação à operadora de rede e injeção permitida — a Alemanha aderiu a essa norma em dezembro de 2025, não a criou',
          'Grécia: decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Β\' 5573), emitida com base na Lei 5299/2026 — sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, somente autoconsumo, sem compensação pela injeção na rede, baterias independentes permitidas — um mecanismo claramente diferente do modelo de mera notificação com exportação permitida usado em outros lugares',
          'A EPBD (entrando em vigor gradualmente a partir de 2026) é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados',
          'Suécia e Hungria são as exceções mais claras da UE — a autoridade sueca de segurança elétrica (Elsäkerhetsverket) afirmou que sistemas plug-in não atendem às normas suecas e precisam ser conectados de forma permanente (segundo a pv magazine, 2023), e a Hungria, segundo relatos, proíbe painéis solares em varandas por meio de um decreto de construção em vigor desde 1º de janeiro de 2025 (segundo a CEE Legal Matters), então a convergência não é universal',
          'Para os detalhes específicos da Alemanha sobre os 800 W (DIN VDE V 0126-95, o sublimite de 960 Wp para a tomada Schuko, § 8 EEG 2023), veja o guia dedicado à Alemanha em vez desta visão geral transfronteiriça',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'A EPBD está impulsionando a convergência', anchor: '#epbd-driver' },
      { label: 'Grécia: a integrante mais recente', anchor: '#greece' },
      { label: 'O que isso significa fora da Alemanha', anchor: '#what-this-means' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'França, Áustria, Bélgica e Países Baixos já permitem energia solar de varanda até 800 W com uma simples notificação à operadora de rede e injeção permitida — a norma alemã DIN VDE V 0126-95 (dezembro de 2025) colocou o país em linha com esse padrão existente, e não o contrário.',
          'As regras específicas da Grécia para energia solar de varanda são definidas por uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Β\' 5573, emitida com base na Lei 5299/2026): sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento, estritamente para autoconsumo e sem compensação pela injeção na rede — não o modelo de mera notificação com exportação permitida usado no resto do bloco.',
          'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados.',
          'O padrão não é idêntico em todos os países: França/Áustria/Bélgica/Países Baixos usam registro por mera notificação com exportação permitida, enquanto a decisão da Grécia é um desenho mais rigoroso de apenas autoconsumo — «800 W» não significa as mesmas regras em toda parte.',
          'Suécia e Hungria são as exceções mais claras da UE a essa tendência de convergência — a autoridade sueca de segurança elétrica (Elsäkerhetsverket) afirmou que sistemas plug-in não atendem às normas suecas e precisam ser conectados de forma permanente (segundo a [pv magazine](https://www.pv-magazine.com/?p=32404), 2023), e a Hungria, segundo relatos, proíbe painéis solares em varandas por meio de um decreto de construção em vigor desde 1º de janeiro de 2025 (segundo a [CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)).',
          'Para os detalhes específicos da Alemanha — o limite de 800 W do inversor, DIN VDE V 0126-95, o sublimite de 960 Wp para a tomada Schuko e o § 8 EEG 2023 — veja o guia dedicado à Alemanha em vez desta visão geral transfronteiriça.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'A EPBD está impulsionando a convergência',
        content: [
          '**A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, estende explicitamente as obrigações de instalação solar a fachadas, varandas e terraços — não apenas a telhados.** Isso reformula a energia solar de varanda, deixando de ser uma escolha de estilo de vida do consumidor para se tornar um mecanismo de conformidade com as obrigações de descarbonização de edifícios dos Estados-membros. Países que antes tratavam a energia solar plugável como uma questão regulatória secundária agora têm um motivo, no nível da diretiva, para formalizar regras rapidamente — esse é o contexto imediato da iniciativa legislativa da Grécia em 2026.',
          'França, Áustria, Bélgica e Países Baixos já permitem energia solar de varanda até 800 W com apenas uma simples exigência de notificação à operadora de rede e injeção permitida, antecedendo a própria finalização alemã. A norma alemã DIN VDE V 0126-95, finalizada em dezembro de 2025, colocou o país em linha com esse padrão de fato existente em vez de estabelecer um novo — a EPBD agora estende a mesma lógica de base ao restante do bloco, embora nem todos os Estados-membros adotem o mesmo mecanismo (veja a Grécia, abaixo) ou convirjam sequer (Suécia, Hungria).',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grécia: a integrante mais recente',
        content: [
          '**A Grécia é a mais recente a entrar nessa convergência, mas com um mecanismo claramente mais rigoroso: uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Oficial Β\' 5573), emitida com base na Lei 5299/2026 (aprovada em 5 de maio de 2026), permite sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento somente para autoconsumo — a energia injetada na rede não é compensada, e baterias independentes são permitidas sem exportação.** O registro é uma notificação por um portal da DEDDIE/HEDNO que ainda não está aberto (especificações técnicas até 31 de outubro de 2026, data de início do portal até 31 de dezembro de 2026). Para detalhes e fontes, consulte o guia dedicado à Grécia em vez deste resumo breve.',
        ],
        callouts: [
          { type: 'warning', text: 'Resumo da cobertura publicada, não aconselhamento jurídico; o portal e as especificações técnicas ainda estão pendentes — consulte o guia dedicado à Grécia para ver o status atual antes de tratar qualquer detalhe como definitivo.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'O que isso significa fora da Alemanha',
        content: [
          '**Se o seu país ainda não tem regras explícitas sobre energia solar de varanda, a direção do caminho já é previsível na forma, embora não no mecanismo: espere um limite da classe de 800 W e um cronograma ligado ao prazo de transposição da EPBD do seu país, em vez de incerteza sem prazo — mas as regras exatas podem diferir bastante por país, da mera notificação com exportação (França, Áustria, Bélgica, Países Baixos) a um desenho mais rigoroso de apenas autoconsumo (Grécia).** A Grécia é o exemplo atual mais claro de um país passando da zona cinzenta para regras formalizadas, embora sua abordagem sem exportação mostre que «800 W» por si só não garante o mesmo mecanismo do resto do bloco — outros Estados-membros da UE provavelmente formalizarão regras à medida que os prazos de transposição da EPBD se aproximem, mas não necessariamente pelo mesmo modelo, e Suécia e Hungria mostram que a convergência não é garantida de modo algum.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A Alemanha definiu o padrão de 800 W da UE para energia solar de varanda?', a: 'Não — França, Áustria, Bélgica e Países Baixos já permitiam energia solar de varanda até 800 W com registro por simples notificação antes de a Alemanha finalizar seu próprio padrão DIN VDE V 0126-95 em dezembro de 2025. A Alemanha aderiu a uma norma de fato da UE já existente, em vez de criar uma nova.' },
          { q: 'O que a Grécia está fazendo em relação à energia solar de varanda em 2026?', a: 'Uma decisão ministerial de 14 de setembro de 2026 (noticiada como Diário Oficial Β\' 5573), emitida com base na Lei 5299/2026, permite sistemas plug-in de até 800 W de geração e 1.000 W de potência instalada por ponto de fornecimento somente para autoconsumo: a energia injetada na rede não é compensada, e o registro é uma notificação por um portal da DEDDIE/HEDNO que ainda não está aberto. Consulte o guia dedicado à Grécia para ver as fontes e o status atual.' },
          { q: 'O regime da Grécia permite exportar o excesso de energia para a rede?', a: 'Não — segundo o regime em minuta em consulta pública (Lei 5299/2026, até 20 de julho de 2026), os sistemas são limitados a 800 W de injeção na rede, sem nenhuma injeção na rede permitida, um design de "zero injeção" mais rígido que o modelo de simples notificação com injeção permitida usado na França, Áustria, Bélgica e Países Baixos. O pareamento com armazenamento em bateria é permitido, o que é uma forma de usar a energia que não pode ser injetada na rede.' },
          { q: 'O que é a EPBD e por que ela importa para a energia solar de varanda?', a: 'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada entra em vigor gradualmente a partir de 2026 e estende as obrigações solares dos edifícios da UE a fachadas, varandas e terraços, não apenas a telhados — transformando a energia solar de varanda em um mecanismo de conformidade para os Estados-membros, em vez de uma escolha política discricionária.' },
          { q: 'A energia solar de varanda é legal em toda a UE?', a: 'Não. Embora o impulso seja em direção a um regime do tipo 800 W em muitos Estados-membros, a autoridade sueca de segurança elétrica (Elsäkerhetsverket) afirmou que sistemas plug-in não atendem às normas suecas e precisam ser conectados de forma permanente (segundo a pv magazine, 2023), e a Hungria, segundo relatos, proíbe painéis solares em varandas por meio de um decreto de construção em vigor desde 1º de janeiro de 2025 (segundo a CEE Legal Matters) — a convergência para uma abordagem europeia comum é real, mas não universal.' },
          { q: 'Onde posso encontrar as regras específicas da Alemanha sobre energia solar de varanda?', a: 'Veja o guia dedicado à Alemanha, que aborda em detalhes o limite de 800 W do inversor, a DIN VDE V 0126-95, o sublimite de 960 Wp para a tomada Schuko e o texto completo do § 8 EEG 2023 — esta página foca na harmonização transfronteiriça em vez de repetir esses detalhes.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Balkonkraftwerk: as regras da Alemanha para energia solar de varanda](/pt/balcony-solar/balkonkraftwerk-germany-rules) — a análise completa do padrão alemão 800 W/DIN VDE V 0126-95 que este artigo referencia em vez de repetir',
          '[A energia solar de varanda é legal? Um guia por país](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador jurídico global',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/eu-800w-balcony-solar-standard-2027-overview-hero-zh.webp',
    title: '800瓦阳台太阳能标准：欧盟统一进程解析（2027年）',
    seoTitle: '800瓦阳台太阳能标准：欧盟统一进程解析（2027年）',
    intro: '德国的800瓦阳台光伏上限于2025年12月依据DIN VDE V 0126-95最终确定，使德国与法国、奥地利、比利时和荷兰已在使用的事实性欧盟标准保持一致——而不是树立一个让其他国家效仿的新先例。本页追踪这种趋同如何扩散——不过希腊自己的机制由2026年9月14日依据更广泛的2026年第5299号法律发布的部长级决定确定，采取更严格的“仅限自发自用、不得向电网输出”方式，而不是简单采用法国/奥地利/比利时/荷兰的模式，更广泛的推动力是欧盟《建筑能效指令》（EPBD）。并非所有成员国都在趋同：据主管部门和媒体报道，瑞典和匈牙利似乎仍是例外。',
    metaDescription: '法国、奥地利、比利时和荷兰已允许800瓦阳台光伏。德国于2025年12月加入；希腊2026年的决定允许800瓦，但禁止向电网输出。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-20',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '德国以外、关注800瓦标准采用情况的欧盟阳台太阳能购买者',
    primaryTerm: 'eu 800瓦阳台太阳能标准',
    targetKeywords: ['800瓦阳台太阳能 欧盟', '希腊阳台太阳能800瓦', '欧盟阳台太阳能统一 2027'],
    leadAnswerBlock: '**德国的800瓦阳台光伏上限于2025年12月依据DIN VDE V 0126-95最终确定，使德国与法国、奥地利、比利时和荷兰已在使用的事实性欧盟标准保持一致——而不是树立一个让其他国家效仿的新先例。** 希腊是最新加入者，但机制明显更严格：依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573）允许每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用——与欧盟其他地方采用的仅需备案、允许输出的模式不同，流入电网的电量不予补偿（参见希腊专题指南）。修订后的《建筑能效指令》（EPBD）自2026年起逐步生效，是推动规则正式化这一更广泛趋势的结构性动力，但并非所有成员国都在趋同：据主管部门和媒体报道，瑞典和匈牙利似乎仍是例外。',
    quickAnswerTop: {
      zh: {
        question: '800瓦阳台太阳能标准是否正在欧盟范围内扩散？',
        answer: '是的——但德国是加入一个已有的趋同，而不是引领它，而且各国机制不同。法国、奥地利、比利时和荷兰已允许800瓦阳台光伏，采用简单的备案登记并允许向电网输出；德国的DIN VDE V 0126-95（2025年12月）使其与这一规范保持一致。希腊是最新加入者，但采用更严格的模式：2026年9月14日的部长级决定允许每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用，注入电网的电量不予补偿。欧盟修订后的EPBD是这一更广泛趋势的结构性动力，但据主管部门和媒体报道，瑞典和匈牙利似乎仍是例外，插电式光伏在那里通常不被允许。',
        bullets: [
          '法国、奥地利、比利时和荷兰已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案且允许并网馈电——德国于2025年12月加入了这一规范，而非制定了它',
          '希腊：依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于公报Β\' 5573）——每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用，注入电网的电量不予补偿，允许独立电池——与其他地方采用的仅需备案、允许输出的模式机制明显不同',
          'EPBD（自2026年起分阶段生效）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶',
          '瑞典和匈牙利是欧盟范围内最明显的例外——瑞典电气安全主管部门（Elsäkerhetsverket）表示插电式系统不符合瑞典标准，必须永久接入（据pv magazine，2023年），而匈牙利据报道通过自2025年1月1日起施行的建筑法规禁止在阳台安装太阳能板（据CEE Legal Matters），因此趋同并非普遍现象',
          '关于德国自身的800瓦具体规定（DIN VDE V 0126-95、960 Wp的Schuko插座子上限、《2023年可再生能源法》第8条），请参阅专门的德国指南，而非本篇跨境概览',
        ],
        updatedDate: '2026-10-20',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'EPBD正在推动趋同', anchor: '#epbd-driver' },
      { label: '希腊：最新加入者', anchor: '#greece' },
      { label: '这对德国以外意味着什么', anchor: '#what-this-means' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '法国、奥地利、比利时和荷兰已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案且允许并网馈电——德国的DIN VDE V 0126-95标准（2025年12月）使德国与这一既有规范保持一致，而非相反。',
          '希腊的阳台光伏专属规则由2026年9月14日的部长级决定设定（据报道刊载于公报Β\' 5573，依据2026年第5299号法律发布）：每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用，注入电网的电量不予补偿——不是欧盟其他地方采用的仅需备案、允许输出的模式。',
          '2026年起分阶段生效的修订版《建筑能效指令》（EPBD）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶。',
          '各国的模式并不相同：法国/奥地利/比利时/荷兰采用仅需备案、允许输出的登记方式，而希腊的决定是更严格的仅限自发自用设计——“800瓦”并不意味着各地规则相同。',
          '瑞典和匈牙利是欧盟范围内对这一趋同趋势最明显的例外——瑞典电气安全主管部门（Elsäkerhetsverket）表示插电式系统不符合瑞典标准，必须永久接入（据[pv magazine](https://www.pv-magazine.com/?p=32404)，2023年），而匈牙利据报道通过自2025年1月1日起施行的建筑法规禁止在阳台安装太阳能板（据[CEE Legal Matters](https://ceelegalmatters.com/hungary/27946-hungarian-government-forbids-solar-panels-on-balconies-and-agricultural-lands)）。',
          '关于德国的具体规定——800瓦逆变器上限、DIN VDE V 0126-95、960 Wp的Schuko子上限，以及《2023年可再生能源法》第8条——请参阅专门的德国指南，而非本篇跨境概览。',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD正在推动趋同',
        content: [
          '**2026年起分阶段生效的修订版《建筑能效指令》（EPBD）明确将太阳能安装义务扩展至外墙、阳台和露台——而不仅限于屋顶。** 这使阳台太阳能从消费者的生活方式选择，重新定位为成员国建筑脱碳义务的一项合规机制。此前将插电式太阳能视为监管次要事项的国家，如今有了指令层面的依据，可以迅速将规则正式化——这正是希腊2026年立法推进的直接背景。',
          '法国、奥地利、比利时和荷兰早在德国自身标准正式确定之前，就已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案且允许并网馈电。德国于2025年12月确定的DIN VDE V 0126-95标准，是使德国与这一既有的事实标准保持一致，而非另立新标准——EPBD如今正将同样的底层逻辑扩展至欧盟其余成员国，不过并非所有成员国都采用同样的机制（参见下文希腊部分），也并非所有成员国都在趋同（瑞典、匈牙利）。',
        ],
      },
      greece: {
        id: 'greece',
        title: '希腊：最新加入者',
        content: [
          '**希腊是这一趋同的最新加入者，但机制明显更严格：依据2026年第5299号法律（2026年5月5日通过）发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573）允许每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用——注入电网的电量不予补偿，并允许不向电网输出的独立电池。** 登记是通过DEDDIE/HEDNO尚未开放的门户进行申报（技术规范须在2026年10月31日前发布，门户启用日期须在2026年12月31日前公布）。详情和来源请参见希腊专题指南，而不是这份简要概述。',
        ],
        callouts: [
          { type: 'warning', text: '本页是对已发布报道的概述，不构成法律建议；门户和技术规范仍待落实——在将任何细节视为定论之前，请查看希腊专题指南了解最新状态。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '这对德国以外意味着什么',
        content: [
          '**如果你所在的国家尚无明确的阳台光伏规则，前进的方向现在在形式上已可预测，尽管机制未必：预计会出现800瓦级的上限，以及与你所在国家EPBD转化期限挂钩的时间表，而不是没有尽头的不确定——但具体规则在各国之间可能差异很大，从仅需备案且允许输出（法国、奥地利、比利时、荷兰）到更严格的仅限自发自用设计（希腊）。** 希腊是目前从灰色地带走向正式规则的最清晰例子，但其不得输出的做法表明，仅“800瓦”并不能保证与欧盟其他地方相同的机制——随着EPBD转化期限临近，更多欧盟成员国很可能将规则正式化，但未必采用同一模式，而瑞典和匈牙利表明趋同根本没有保证。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '是德国制定了欧盟的800瓦阳台太阳能标准吗？', a: '不是——在德国于2025年12月确定自身的DIN VDE V 0126-95标准之前，法国、奥地利、比利时和荷兰早已允许最高800瓦、仅需简单备案登记的阳台太阳能。德国是加入了一个既有的欧盟事实规范，而非创立了新标准。' },
          { q: '希腊在2026年针对阳台太阳能采取了哪些措施？', a: '依据2026年第5299号法律发布的2026年9月14日部长级决定（据报道刊载于政府公报Β\' 5573）允许每个供电点发电功率最高800瓦、装机容量最高1,000瓦的插电式系统，仅限自发自用：注入电网的电量不予补偿，登记是通过DEDDIE/HEDNO尚未开放的门户进行申报。来源和最新状态请参见希腊专题指南。' },
          { q: '希腊的框架是否允许将多余电力输出至电网？', a: '不允许——根据正在公众咨询中的草案框架（《5299/2026号法律》，截至2026年7月20日），系统的并网馈电被限制在800瓦，且完全不允许并网馈电，这是一种比法国、奥地利、比利时和荷兰采用的仅需备案、允许馈电模式更严格的「零馈电」设计。允许搭配电池储能，这是利用无法馈电的电力的一种方式。' },
          { q: '什么是EPBD？它对阳台太阳能为何重要？', a: '修订版《建筑能效指令》（EPBD）自2026年起分阶段生效，将欧盟建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶——这使阳台太阳能对成员国而言成为一项合规机制，而非可自行选择的政策事项。' },
          { q: '阳台太阳能在整个欧盟范围内都合法吗？', a: '不是。尽管许多成员国正朝着800瓦式框架发展，但瑞典电气安全主管部门（Elsäkerhetsverket）表示插电式系统不符合瑞典标准，必须永久接入（据pv magazine，2023年），而匈牙利据报道通过自2025年1月1日起施行的建筑法规禁止在阳台安装太阳能板（据CEE Legal Matters）——朝共同欧盟方案趋同的趋势确实存在，但并非普遍适用。' },
          { q: '在哪里可以找到德国具体的阳台太阳能规定？', a: '请参阅专门的德国指南，其中详细涵盖800瓦逆变器上限、DIN VDE V 0126-95标准、960 Wp的Schuko插座子上限，以及《2023年可再生能源法》第8条的完整法律条文——本页专注于跨境统一进程，而非重复这些细节。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Balkonkraftwerk：德国阳台太阳能规定](/zh/balcony-solar/balkonkraftwerk-germany-rules) — 本文引用而非重复的德国800瓦/DIN VDE V 0126-95完整深度解析',
          '[阳台太阳能合法吗？分国指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) — 全球法律追踪',
        ],
      },
    },
  },
}
