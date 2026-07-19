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
    theme: 'Balcony Solar Legislation',
    title: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    seoTitle: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    intro: 'Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, Belgium, and the Netherlands — rather than setting a new precedent others are following. This page tracks how that convergence is spreading — though Greece\'s own mechanism, set by a ministerial decision in public consultation through July 20, 2026 under the broader Law 5299/2026, takes a stricter "zero feed-in" approach rather than simply adopting the France/Austria/Belgium/Netherlands model, driven by the EU\'s Energy Performance of Buildings Directive. Not every member state is converging: Sweden and Hungary remain clear holdouts.',
    metaDescription: 'France, Austria, Belgium, and the Netherlands already allow 800W balcony solar with simple notification-only registration. Germany joined that standard in December 2025 — Greece\'s balcony-specific mechanism is set by a ministerial decision in public consultation through July 20, 2026, driven by the EPBD\'s extension to facades and balconies.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'EU balcony solar buyers outside Germany tracking 800W standard adoption',
    primaryTerm: 'eu 800w balcony solar standard',
    targetKeywords: ['800w balcony solar eu', 'greece balcony solar 800w', 'eu balcony solar harmonization 2027'],
    leadAnswerBlock: '**Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, Belgium, and the Netherlands — rather than setting a new precedent others are following.** Greece is the newest entrant, but with a materially stricter mechanism: a ministerial decision issued under Law 5299/2026 is in public consultation through July 20, 2026, proposing an 800W maximum grid-injection limit, up to 900W of installed capacity, battery-storage pairing allowed, and — unlike the notification-only, export-permitted model used elsewhere in the bloc — no grid export at all (a "zero feed-in" design). The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver behind this wider push to formalize rules, though not every member state is converging: Sweden and Hungary remain clear holdouts.',
    quickAnswerTop: {
      en: {
        question: 'Is the 800W balcony solar standard spreading across the EU?',
        answer: 'Yes — but Germany is joining an existing convergence, not leading one, and the mechanism varies by country. France, Austria, Belgium, and the Netherlands already permit 800W balcony solar with simple notification-only registration and grid export; Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that norm. Greece is the newest entrant but is proposing a stricter "zero feed-in" model instead — 800W max grid injection, up to 900W installed capacity, no export at all — the mechanics set by a ministerial decision currently in public consultation through July 20, 2026. The EU\'s revised Energy Performance of Buildings Directive (EPBD) is the structural driver behind the wider push, though Sweden and Hungary remain holdouts where plug-in solar isn\'t generally legal.',
        bullets: [
          'France, Austria, Belgium, and the Netherlands already allow up to 800W balcony solar with simple grid-operator notification and permitted export — Germany joined this norm in December 2025, it did not set it',
          'Greece: ministerial decision issued under Law 5299/2026, in public consultation through July 20, 2026, proposing a stricter "zero feed-in" model — 800W max grid injection, up to 900W installed capacity, no export to the grid, battery pairing allowed — a materially different mechanism than the notification-only model used elsewhere',
          'The EPBD (entering into force gradually from 2026) is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops',
          'Sweden and Hungary are the EU\'s clearest exceptions — Sweden blocks standard grid connection for these systems and Hungary prohibits them outright, so convergence isn\'t universal',
          'For Germany\'s own 800W mechanics (DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, § 8 EEG 2023), see the dedicated Germany guide rather than this cross-border overview',
        ],
        updatedDate: '2026-07-18',
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
          'Greece\'s balcony-specific mechanics are set by a ministerial decision (issued under Law 5299/2026) in formal public consultation through July 20, 2026 — and it proposes a materially stricter "zero feed-in" mechanism (800W max grid injection, up to 900W installed capacity, no grid export at all, battery pairing allowed), not the notification-only model used elsewhere in the bloc.',
          'The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops.',
          'The pattern isn\'t identical across countries: France/Austria/Belgium/Netherlands use notification-only registration with export permitted, while Greece\'s draft is a stricter zero-feed-in design — "800W" doesn\'t mean the same rules everywhere.',
          'Sweden and Hungary are the EU\'s clearest exceptions to the convergence trend — Sweden blocks standard grid connection for these systems and Hungary prohibits them outright.',
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
          '**Greece is the newest entrant to this convergence, but with a materially stricter mechanism: a ministerial decision issued under Law 5299/2026 (itself already passed, May 5, 2026), following a RES bill submitted by YPEN on April 21, 2026, proposes a "zero feed-in" design — 800W maximum grid injection, up to 900W installed capacity, battery pairing allowed, but no grid export at all — unlike the notification-only, export-permitted model used elsewhere in this bloc.** For the full timeline, the consultation process, and what happens once the decision finalizes, see the dedicated Greece guide rather than this brief summary.',
        ],
        callouts: [
          { type: 'warning', text: 'Not yet finalized as of this page\'s last update — see the dedicated Greece guide for current status before treating any mechanism detail as settled.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'What This Means Outside Germany',
        content: [
          '**If your country doesn\'t yet have explicit balcony solar rules, the direction of travel is now predictable in shape if not in mechanism: expect an 800W cap and a timeline tied to your country\'s EPBD transposition deadline rather than open-ended uncertainty — but the exact rules can differ meaningfully by country, from notification-only with export (France, Austria, Belgium, Netherlands) to a stricter zero-feed-in design (Greece\'s draft).** Greece is the clearest current example of a country moving from grey-zone to formalized rules, though its zero-feed-in approach shows that "800W" alone doesn\'t guarantee the same mechanism as elsewhere in the bloc — additional EU member states are likely to formalize rules as EPBD transposition deadlines approach, but not necessarily via the same model, and Sweden and Hungary show that convergence isn\'t guaranteed at all.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Did Germany set the EU\'s 800W balcony solar standard?', a: 'No — France, Austria, Belgium, and the Netherlands already permitted balcony solar up to 800W with simple notification-only registration before Germany finalized its own DIN VDE V 0126-95 standard in December 2025. Germany joined an existing de facto EU norm rather than creating a new one.' },
          { q: 'What is Greece doing about balcony solar in 2026?', a: 'A ministerial decision issued under Law 5299/2026 (already passed, May 5, 2026) proposes a stricter "zero feed-in" design than the rest of the EU: 800W maximum grid injection, up to 900W of installed capacity, no export to the grid, and battery storage pairing allowed. See the dedicated Greece guide for the full timeline and current status.' },
          { q: 'What is the EPBD and why does it matter for balcony solar?', a: 'The revised Energy Performance of Buildings Directive (EPBD) enters into force gradually from 2026 and extends EU building-solar mandates to facades, balconies, and terraces, not just rooftops — turning balcony solar into a compliance mechanism for member states rather than a discretionary policy choice.' },
          { q: 'Is balcony solar legal everywhere in the EU?', a: 'No. While momentum is toward an 800W-style framework in many member states, Sweden blocks standard grid connection for these systems and Hungary prohibits them outright — convergence toward a common EU approach is real but not universal.' },
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
    title: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    seoTitle: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    intro: 'Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 mit der DIN VDE V 0126-95 endgültig festgelegt, bringt das Land in Einklang mit einem De-facto-EU-Standard, den Frankreich, Österreich, Belgien und die Niederlande bereits anwenden — statt einen neuen Präzedenzfall zu setzen, dem andere folgen. Diese Seite verfolgt, wie sich diese Angleichung ausbreitet — auch wenn Griechenlands eigener Rahmen, derzeit in öffentlicher Konsultation nach Gesetz 5299/2026 bis zum 20. Juli 2026, einen strengeren „Zero-Feed-in"-Ansatz verfolgt statt einfach das Modell von Frankreich/Österreich/Belgien/den Niederlanden zu übernehmen, angetrieben von der EU-Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD). Nicht jeder Mitgliedstaat gleicht sich an: Schweden und Ungarn bleiben klare Ausnahmen.',
    metaDescription: 'Frankreich, Österreich, Belgien und die Niederlande erlauben bereits 800-Watt-Balkonkraftwerke mit einfacher, meldepflichtiger Registrierung. Deutschland ist diesem Standard im Dezember 2025 beigetreten — Griechenland befindet sich derzeit in öffentlicher Konsultation zu einem strengeren Zero-Feed-in-Rahmen (Gesetz 5299/2026, bis 20. Juli 2026), angetrieben durch die Ausweitung der EPBD auf Fassaden und Balkone.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'EU-Käufer von Balkonkraftwerken außerhalb Deutschlands, die die Verbreitung des 800-Watt-Standards verfolgen',
    primaryTerm: 'eu 800-watt-balkonkraftwerk-standard',
    targetKeywords: ['800 watt balkonkraftwerk eu', 'griechenland balkonkraftwerk 800 watt', 'eu balkonkraftwerk harmonisierung 2027'],
    leadAnswerBlock: '**Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 mit der DIN VDE V 0126-95 endgültig festgelegt, bringt das Land in Einklang mit einem De-facto-EU-Standard, den Frankreich, Österreich, Belgien und die Niederlande bereits anwenden — statt einen neuen Präzedenzfall zu setzen, dem andere folgen.** Griechenland ist der jüngste Neuzugang, allerdings mit einem deutlich strengeren Mechanismus: Ein Rahmen nach Gesetz 5299/2026 befindet sich bis zum 20. Juli 2026 in öffentlicher Konsultation und sieht eine maximale Netzeinspeisung von 800 Watt bei bis zu 900 Watt installierter Leistung vor, die Kopplung mit einem Batteriespeicher ist zulässig — anders als beim meldepflichtbasierten Modell mit erlaubter Einspeisung, das anderswo in der EU gilt, ist jedoch überhaupt keine Netzeinspeisung erlaubt (ein „Zero-Feed-in"-Design). Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber hinter diesem breiteren Vorstoß zur Formalisierung von Regeln — auch wenn nicht jeder Mitgliedstaat sich angleicht: Schweden und Ungarn bleiben klare Ausnahmen.',
    quickAnswerTop: {
      de: {
        question: 'Verbreitet sich der 800-Watt-Standard für Balkonkraftwerke in der gesamten EU?',
        answer: 'Ja — aber Deutschland tritt einer bestehenden Angleichung bei, statt sie anzuführen, und der Mechanismus unterscheidet sich je nach Land. Frankreich, Österreich, Belgien und die Niederlande erlauben bereits 800-Watt-Balkonkraftwerke mit einfacher, meldepflichtiger Registrierung und erlaubter Netzeinspeisung; Deutschlands DIN VDE V 0126-95 (Dezember 2025) hat das Land in Einklang mit dieser Norm gebracht. Griechenland ist der jüngste Neuzugang, schlägt aber stattdessen ein strengeres „Zero-Feed-in"-Modell vor — 800 Watt maximale Netzeinspeisung, bis zu 900 Watt installierte Leistung, keinerlei Einspeisung — derzeit in öffentlicher Konsultation nach Gesetz 5299/2026 bis zum 20. Juli 2026. Die überarbeitete EU-Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD) ist der strukturelle Treiber hinter diesem breiteren Vorstoß, wobei Schweden und Ungarn Ausnahmen bleiben, in denen steckerfertige Solaranlagen grundsätzlich nicht legal sind.',
        bullets: [
          'Frankreich, Österreich, Belgien und die Niederlande erlauben bereits bis zu 800 Watt Balkonkraftwerk mit einfacher Meldung beim Netzbetreiber und erlaubter Einspeisung — Deutschland ist dieser Norm im Dezember 2025 beigetreten, hat sie nicht gesetzt',
          'Griechenland: Entwurfsrahmen nach Gesetz 5299/2026 bis 20. Juli 2026 in öffentlicher Konsultation, der ein strengeres „Zero-Feed-in"-Modell vorsieht — 800 Watt maximale Netzeinspeisung, bis zu 900 Watt installierte Leistung, keine Netzeinspeisung, Batteriekopplung erlaubt — ein deutlich anderer Mechanismus als das meldepflichtbasierte Modell anderswo in der EU',
          'Die EPBD (ab 2026 schrittweise in Kraft) ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer',
          'Schweden und Ungarn sind die klarsten Ausnahmen in der EU — Schweden blockiert den regulären Netzanschluss für solche Anlagen, Ungarn verbietet sie komplett, die Angleichung ist also nicht universell',
          'Zu den konkreten 800-Watt-Regelungen in Deutschland (DIN VDE V 0126-95, die 960-Wp-Schuko-Untergrenze, § 8 EEG 2023) siehe den eigenen Deutschland-Leitfaden statt dieser länderübergreifenden Übersicht',
        ],
        updatedDate: '2026-07-18',
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
          'Griechenlands Rahmen befindet sich nun in formeller öffentlicher Konsultation nach Gesetz 5299/2026 bis zum 20. Juli 2026 — und schlägt einen deutlich strengeren „Zero-Feed-in"-Mechanismus vor (800 Watt maximale Netzeinspeisung, bis zu 900 Watt installierte Leistung, keinerlei Netzeinspeisung, Batteriekopplung erlaubt), nicht das meldepflichtbasierte Modell, das anderswo in der EU gilt.',
          'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer.',
          'Das Muster ist nicht in allen Ländern identisch: Frankreich/Österreich/Belgien/die Niederlande nutzen eine meldepflichtbasierte Registrierung mit erlaubter Einspeisung, während Griechenlands Entwurf ein strengeres Zero-Feed-in-Design ist — „800 Watt" bedeutet nicht überall dieselben Regeln.',
          'Schweden und Ungarn sind die klarsten Ausnahmen von diesem Angleichungstrend in der EU — Schweden blockiert den regulären Netzanschluss für solche Anlagen, Ungarn verbietet sie komplett.',
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
          '**Am 21. April 2026 hat das griechische Ministerium für Umwelt und Energie (YPEN) einen neuen RES-Gesetzentwurf ins Parlament eingebracht, der erstmals ausdrücklich die Tür für steckerfertige Solaranlagen öffnet.** Bislang hatte Griechenland — obwohl eines der sonnenreichsten Länder Europas — keinen klaren rechtlichen Rahmen für Balkonkraftwerke, wodurch Installationen in einer Grauzone blieben. Nach dem Stand dieser Seite befindet sich der Umsetzungsrahmen in formeller öffentlicher Konsultation nach Gesetz 5299/2026, die bis zum 20. Juli 2026 läuft.',
          '**Griechenlands vorgeschlagener Mechanismus unterscheidet sich von — und ist strenger als — dem meldepflichtbasierten Modell mit erlaubter Einspeisung, das in Frankreich, Österreich, Belgien und den Niederlanden gilt: Es ist ein „Zero-Feed-in"-Design.** Der Entwurf begrenzt die Netzeinspeisung auf 800 Watt bei bis zu 900 Watt installierter Leistung, und Anlagen dürfen überhaupt keine Energie ins Netz einspeisen. Eine Batteriespeicher-Kopplung ist im Entwurf zulässig — was Sinn ergibt, da eingespeister Strom bei diesem Design nicht vergütet werden kann. Anders als beim meldepflichtbasierten Modell anderswo bedeutet „800 Watt" in Griechenland nicht dieselben Regeln wie in Deutschland, Frankreich, Österreich, Belgien oder den Niederlanden.',
        ],
        callouts: [
          { type: 'warning', text: 'Stand 18. Juli 2026 befindet sich Griechenlands Rahmen in öffentlicher Konsultation nach Gesetz 5299/2026, die am 20. Juli 2026 endet — sehr nah am eigenen Aktualisierungsdatum dieser Seite. Prüfen Sie das final veröffentlichte Gesetz direkt, bevor Sie Details hier (den Zero-Feed-in-Mechanismus, die 800-/900-Watt-Grenzen oder die Batteriekopplung) als endgültig behandeln.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Was das außerhalb Deutschlands bedeutet',
        content: [
          '**Wenn es in Ihrem Land noch keine expliziten Balkonkraftwerk-Regeln gibt, ist die Entwicklungsrichtung inzwischen in ihrer Form absehbar, wenn auch nicht im konkreten Mechanismus: Rechnen Sie mit einer 800-Watt-Grenze und einem Zeitplan, der an die EPBD-Umsetzungsfrist Ihres Landes gekoppelt ist statt an offene Unsicherheit — die genauen Regeln können sich jedoch erheblich unterscheiden, von meldepflichtbasiert mit erlaubter Einspeisung (Frankreich, Österreich, Belgien, Niederlande) bis zu einem strengeren Zero-Feed-in-Design (Griechenlands Entwurf).** Griechenland ist derzeit das klarste Beispiel für ein Land, das von der Grauzone zu formalisierten Regeln übergeht, auch wenn sein Zero-Feed-in-Ansatz zeigt, dass „800 Watt" allein noch nicht denselben Mechanismus wie anderswo in der EU garantiert — weitere EU-Mitgliedstaaten dürften Regeln formalisieren, sobald sich EPBD-Umsetzungsfristen nähern, aber nicht zwangsläufig nach demselben Modell, und Schweden und Ungarn zeigen, dass Angleichung keineswegs garantiert ist.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Hat Deutschland den 800-Watt-Standard der EU für Balkonkraftwerke gesetzt?', a: 'Nein — Frankreich, Österreich, Belgien und die Niederlande erlaubten Balkonkraftwerke bereits bis 800 Watt mit einfacher, meldepflichtiger Registrierung, bevor Deutschland im Dezember 2025 seinen eigenen DIN-VDE-V-0126-95-Standard final festlegte. Deutschland ist einer bestehenden De-facto-EU-Norm beigetreten, statt eine neue zu schaffen.' },
          { q: 'Was unternimmt Griechenland 2026 in Sachen Balkonkraftwerke?', a: 'Griechenland hat am 21. April 2026 einen RES-Gesetzentwurf ins Parlament eingebracht, und der Umsetzungsrahmen befindet sich nun in öffentlicher Konsultation nach Gesetz 5299/2026, die bis zum 20. Juli 2026 läuft. Anders als das meldepflichtbasierte Modell anderswo in der EU schlägt Griechenlands Entwurf ein strengeres „Zero-Feed-in"-Design vor: 800 Watt maximale Netzeinspeisung, bis zu 900 Watt installierte Leistung, keine Netzeinspeisung, Batteriespeicher-Kopplung erlaubt. Bestätigen Sie den final veröffentlichten Stand, bevor Sie dies als geltendes Recht behandeln.' },
          { q: 'Erlaubt Griechenlands Rahmen die Einspeisung überschüssigen Stroms ins Netz?', a: 'Nein — nach dem Entwurfsrahmen in öffentlicher Konsultation (Gesetz 5299/2026, bis 20. Juli 2026) sind Anlagen auf 800 Watt Netzeinspeisung begrenzt, wobei überhaupt keine Netzeinspeisung erlaubt ist — ein strengeres „Zero-Feed-in"-Design als das meldepflichtbasierte Modell mit erlaubter Einspeisung in Frankreich, Österreich, Belgien und den Niederlanden. Eine Batteriespeicher-Kopplung ist erlaubt, was eine Möglichkeit ist, Strom zu nutzen, der nicht eingespeist werden kann.' },
          { q: 'Was ist die EPBD, und warum ist sie für Balkonkraftwerke relevant?', a: 'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD) tritt ab 2026 schrittweise in Kraft und weitet die EU-Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer — sie macht Balkonkraftwerke damit zu einem Compliance-Mechanismus für die Mitgliedstaaten statt zu einer freiwilligen politischen Entscheidung.' },
          { q: 'Ist ein Balkonkraftwerk überall in der EU legal?', a: 'Nein. Auch wenn sich viele Mitgliedstaaten in Richtung eines 800-Watt-artigen Rahmens bewegen, blockiert Schweden den regulären Netzanschluss für solche Anlagen, und Ungarn verbietet sie komplett — die Angleichung zu einem gemeinsamen EU-Ansatz ist real, aber nicht universell.' },
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
    title: 'El estándar de 800 W para energía solar de balcón: la armonización de la UE explicada (2027)',
    seoTitle: 'El estándar de 800 W para energía solar de balcón: la armonización de la UE explicada (2027)',
    intro: 'El límite de 800 W para energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, pone al país en línea con un estándar de facto de la UE ya utilizado por Francia, Austria, Bélgica y los Países Bajos — en lugar de establecer un nuevo precedente que otros sigan. Esta página hace seguimiento de cómo se extiende esa convergencia — aunque el marco propio de Grecia, ahora en consulta pública bajo la Ley 5299/2026 hasta el 20 de julio de 2026, adopta un enfoque más estricto de «cero inyección a red» en lugar de simplemente sumarse al modelo de Francia/Austria/Bélgica/Países Bajos, impulsada por la Directiva de la UE sobre la Eficiencia Energética de los Edificios. No todos los Estados miembros convergen: Suecia y Hungría siguen siendo excepciones claras.',
    metaDescription: 'Francia, Austria, Bélgica y los Países Bajos ya permiten energía solar de balcón de 800 W con un registro de simple notificación. Alemania se sumó a ese estándar en diciembre de 2025 — Grecia se encuentra ahora en consulta pública sobre un marco más estricto de cero inyección a red (Ley 5299/2026, hasta el 20 de julio de 2026), impulsada por la ampliación de la EPBD a fachadas y balcones.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón en la UE fuera de Alemania que siguen la adopción del estándar de 800 W',
    primaryTerm: 'estándar de 800 w para energía solar de balcón en la ue',
    targetKeywords: ['energía solar de balcón 800w ue', 'grecia energía solar de balcón 800w', 'armonización ue energía solar de balcón 2027'],
    leadAnswerBlock: '**El límite de 800 W para energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, pone al país en línea con un estándar de facto de la UE ya utilizado por Francia, Austria, Bélgica y los Países Bajos — en lugar de establecer un nuevo precedente que otros sigan.** Grecia es la incorporación más reciente, pero con un mecanismo bastante más estricto: un marco bajo la Ley 5299/2026 está en consulta pública hasta el 20 de julio de 2026 y propone un límite máximo de inyección a red de 800 W, hasta 900 W de potencia instalada, permite el emparejamiento con baterías de almacenamiento y — a diferencia del modelo de simple notificación con inyección permitida usado en el resto del bloque — no permite ninguna inyección a red (un diseño de «cero inyección»). La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, es el motor estructural detrás de este impulso más amplio para formalizar normas, aunque no todos los Estados miembros convergen: Suecia y Hungría siguen siendo excepciones claras.',
    quickAnswerTop: {
      es: {
        question: '¿Se está extendiendo el estándar de 800 W para energía solar de balcón por toda la UE?',
        answer: 'Sí — pero Alemania se está sumando a una convergencia existente, no la está liderando, y el mecanismo varía según el país. Francia, Austria, Bélgica y los Países Bajos ya permiten energía solar de balcón de 800 W con un registro de simple notificación e inyección a red permitida; la norma alemana DIN VDE V 0126-95 (diciembre de 2025) puso al país en línea con esa norma. Grecia es la incorporación más reciente, pero propone en su lugar un modelo más estricto de «cero inyección a red» — 800 W máximos de inyección a red, hasta 900 W de potencia instalada, sin ninguna inyección — actualmente en consulta pública bajo la Ley 5299/2026 hasta el 20 de julio de 2026. La Directiva revisada de la UE sobre la Eficiencia Energética de los Edificios (EPBD) es el motor estructural detrás de este impulso más amplio, aunque Suecia y Hungría siguen siendo excepciones donde la energía solar enchufable no suele ser legal.',
        bullets: [
          'Francia, Austria, Bélgica y los Países Bajos ya permiten hasta 800 W de energía solar de balcón con una simple notificación al operador de red e inyección permitida — Alemania se sumó a esta norma en diciembre de 2025, no la estableció',
          'Grecia: marco en borrador bajo la Ley 5299/2026 en consulta pública hasta el 20 de julio de 2026, que propone un modelo más estricto de «cero inyección a red» — 800 W máximos de inyección, hasta 900 W de potencia instalada, sin inyección a red, emparejamiento con batería permitido — un mecanismo bastante distinto del modelo de simple notificación usado en el resto del bloque',
          'La EPBD (que entra en vigor de forma gradual desde 2026) es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados',
          'Suecia y Hungría son las excepciones más claras de la UE — Suecia bloquea la conexión a red estándar para estos sistemas y Hungría los prohíbe por completo, así que la convergencia no es universal',
          'Para conocer los detalles del propio estándar de 800 W en Alemania (DIN VDE V 0126-95, el sublímite de 960 Wp para el enchufe Schuko, § 8 EEG 2023), consulta la guía dedicada a Alemania en lugar de este resumen transfronterizo',
        ],
        updatedDate: '2026-07-18',
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
          'El marco de Grecia se encuentra ahora en consulta pública formal bajo la Ley 5299/2026, hasta el 20 de julio de 2026 — y propone un mecanismo bastante más estricto de «cero inyección a red» (800 W máximos de inyección, hasta 900 W de potencia instalada, sin ninguna inyección a red, emparejamiento con batería permitido), no el modelo de simple notificación usado en el resto del bloque.',
          'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados.',
          'El patrón no es idéntico en todos los países: Francia/Austria/Bélgica/Países Bajos usan un registro de simple notificación con inyección permitida, mientras que el borrador de Grecia es un diseño más estricto de cero inyección — «800 W» no significa las mismas normas en todas partes.',
          'Suecia y Hungría son las excepciones más claras de la UE a esta tendencia de convergencia — Suecia bloquea la conexión a red estándar para estos sistemas y Hungría los prohíbe por completo.',
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
          '**El 21 de abril de 2026, el Ministerio de Medio Ambiente y Energía (YPEN) presentó un nuevo proyecto de ley de energías renovables al Parlamento griego, abriendo explícitamente por primera vez la puerta a los sistemas solares enchufables.** Hasta ahora, Grecia — pese a ser uno de los países más soleados de Europa — carecía de un marco legal claro para la energía solar de balcón, lo que dejaba las instalaciones en una zona gris. Según la última actualización de esta página, el marco de implementación se encuentra en consulta pública formal bajo la Ley 5299/2026, hasta el 20 de julio de 2026.',
          '**El mecanismo propuesto por Grecia es distinto de — y más estricto que — el modelo de simple notificación con inyección permitida usado en Francia, Austria, Bélgica y los Países Bajos: es un diseño de «cero inyección a red».** El borrador limita la inyección a red a 800 W con hasta 900 W de potencia instalada, y los sistemas no podrán inyectar energía a la red en absoluto. El emparejamiento con almacenamiento en batería está permitido en el borrador, lo cual tiene sentido dado que la energía inyectada no tiene ninguna vía de compensación bajo este diseño — a diferencia del modelo de simple notificación usado en el resto del bloque, «800 W» en Grecia no significa las mismas normas que en Alemania, Francia, Austria, Bélgica o los Países Bajos.',
        ],
        callouts: [
          { type: 'warning', text: 'A fecha del 18 de julio de 2026, el marco de Grecia se encuentra en consulta pública bajo la Ley 5299/2026, que cierra el 20 de julio de 2026 — muy cerca de la propia fecha de actualización de esta página. Verifica la ley finalmente publicada antes de tratar cualquier detalle aquí (el mecanismo de cero inyección, los límites de 800/900 W, o la posibilidad de emparejar con batería) como definitivo.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Qué significa esto fuera de Alemania',
        content: [
          '**Si tu país aún no tiene normas explícitas sobre energía solar de balcón, la dirección que sigue la tendencia ya es previsible en su forma, aunque no en su mecanismo: espera un límite de 800 W y un calendario ligado al plazo de transposición de la EPBD de tu país en lugar de una incertidumbre abierta — pero las normas exactas pueden diferir de forma significativa según el país, desde el modelo de simple notificación con inyección permitida (Francia, Austria, Bélgica, Países Bajos) hasta un diseño más estricto de cero inyección a red (el borrador de Grecia).** Grecia es actualmente el ejemplo más claro de un país que pasa de la zona gris a normas formalizadas, aunque su enfoque de cero inyección demuestra que «800 W» por sí solo no garantiza el mismo mecanismo que en el resto del bloque — es probable que más Estados miembros de la UE formalicen normas a medida que se acerquen sus plazos de transposición de la EPBD, pero no necesariamente con el mismo modelo, y Suecia y Hungría demuestran que la convergencia no está garantizada en absoluto.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Fue Alemania quien estableció el estándar de 800 W de la UE para energía solar de balcón?', a: 'No — Francia, Austria, Bélgica y los Países Bajos ya permitían energía solar de balcón hasta 800 W con un registro de simple notificación antes de que Alemania finalizara su propio estándar DIN VDE V 0126-95 en diciembre de 2025. Alemania se sumó a una norma de facto de la UE ya existente, en lugar de crear una nueva.' },
          { q: '¿Qué está haciendo Grecia respecto a la energía solar de balcón en 2026?', a: 'Grecia presentó un proyecto de ley de energías renovables al parlamento el 21 de abril de 2026, y el marco de implementación se encuentra ahora en consulta pública bajo la Ley 5299/2026, hasta el 20 de julio de 2026. A diferencia del modelo de simple notificación usado en el resto de la UE, el borrador de Grecia propone un diseño más estricto de «cero inyección a red»: 800 W máximos de inyección a red, hasta 900 W de potencia instalada, sin inyección a red, emparejamiento con batería permitido. Confirma el estado final publicado antes de tratar esto como ley definitiva.' },
          { q: '¿El marco de Grecia permite exportar el excedente de energía a la red?', a: 'No — según el borrador en consulta pública (Ley 5299/2026, hasta el 20 de julio de 2026), los sistemas están limitados a 800 W de inyección a red sin ninguna inyección permitida, un diseño de «cero inyección» más estricto que el modelo de simple notificación con inyección permitida usado en Francia, Austria, Bélgica y los Países Bajos. El emparejamiento con almacenamiento en batería está permitido, lo cual es una forma de aprovechar la energía que no puede inyectarse.' },
          { q: '¿Qué es la EPBD y por qué importa para la energía solar de balcón?', a: 'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD) entra en vigor de forma gradual desde 2026 y amplía los mandatos de energía solar en edificios de la UE a fachadas, balcones y terrazas, no solo a los tejados — convirtiendo la energía solar de balcón en un mecanismo de cumplimiento para los Estados miembros en lugar de una decisión política discrecional.' },
          { q: '¿Es legal la energía solar de balcón en toda la UE?', a: 'No. Aunque el impulso apunta hacia un marco de tipo 800 W en muchos Estados miembros, Suecia bloquea la conexión a red estándar para estos sistemas y Hungría los prohíbe por completo — la convergencia hacia un enfoque común de la UE es real, pero no universal.' },
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
    title: "La norme des 800 W pour le solaire de balcon : l'harmonisation européenne expliquée (2027)",
    seoTitle: "La norme des 800 W pour le solaire de balcon : l'harmonisation européenne expliquée (2027)",
    intro: "Le plafond de 800 W pour le solaire de balcon en Allemagne, finalisé par la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur une norme de facto déjà en vigueur en France, en Autriche, en Belgique et aux Pays-Bas — plutôt que d'établir un nouveau précédent que d'autres suivraient. Cette page suit la propagation de cette convergence — même si le cadre propre à la Grèce, désormais en consultation publique dans le cadre de la loi 5299/2026 jusqu'au 20 juillet 2026, adopte une approche plus stricte de « zéro injection réseau » plutôt que de simplement reprendre le modèle France/Autriche/Belgique/Pays-Bas, portée par la directive européenne sur la performance énergétique des bâtiments. Tous les États membres ne convergent pas : la Suède et la Hongrie restent des exceptions notables.",
    metaDescription: "La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon à 800 W avec un simple enregistrement par notification. L'Allemagne a rejoint cette norme en décembre 2025 — la Grèce est désormais en consultation publique sur un cadre plus strict à zéro injection réseau (loi 5299/2026, jusqu'au 20 juillet 2026), porté par l'extension de la DPEB aux façades et aux balcons.",
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon dans l'UE hors Allemagne suivant l'adoption de la norme des 800 W",
    primaryTerm: 'norme européenne des 800 w pour le solaire de balcon',
    targetKeywords: ['solaire de balcon 800w ue', 'grèce solaire de balcon 800w', 'harmonisation ue solaire de balcon 2027'],
    leadAnswerBlock: "**Le plafond de 800 W pour le solaire de balcon en Allemagne, finalisé par la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur une norme de facto déjà en vigueur en France, en Autriche, en Belgique et aux Pays-Bas — plutôt que d'établir un nouveau précédent que d'autres suivraient.** La Grèce est la dernière arrivée, mais avec un mécanisme nettement plus strict : un cadre relevant de la loi 5299/2026 est en consultation publique jusqu'au 20 juillet 2026, proposant une limite maximale d'injection réseau de 800 W, jusqu'à 900 W de puissance installée, le couplage avec du stockage sur batterie étant autorisé, et — contrairement au modèle à notification simple avec injection autorisée en vigueur ailleurs dans le bloc — aucune injection réseau du tout (un dispositif « zéro injection »). La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, est le moteur structurel de cet élan plus large vers la formalisation des règles, même si tous les États membres ne convergent pas : la Suède et la Hongrie restent des exceptions notables.",
    quickAnswerTop: {
      fr: {
        question: "La norme des 800 W pour le solaire de balcon se répand-elle dans toute l'UE ?",
        answer: "Oui — mais l'Allemagne rejoint une convergence déjà existante, elle ne la mène pas, et le mécanisme varie selon les pays. La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà le solaire de balcon à 800 W avec un simple enregistrement par notification et une injection réseau autorisée ; la norme allemande DIN VDE V 0126-95 (décembre 2025) a aligné le pays sur cette norme. La Grèce est la dernière arrivée mais propose plutôt un modèle plus strict de « zéro injection réseau » — 800 W maximum d'injection réseau, jusqu'à 900 W de puissance installée, aucune injection du tout — actuellement en consultation publique dans le cadre de la loi 5299/2026 jusqu'au 20 juillet 2026. La directive européenne révisée sur la performance énergétique des bâtiments (DPEB) est le moteur structurel de cet élan plus large, la Suède et la Hongrie restant des exceptions où le solaire enchufable n'est généralement pas légal.",
        bullets: [
          "La France, l'Autriche, la Belgique et les Pays-Bas autorisent déjà jusqu'à 800 W de solaire de balcon avec une simple notification au gestionnaire de réseau et une injection autorisée — l'Allemagne a rejoint cette norme en décembre 2025, elle ne l'a pas créée",
          "Grèce : cadre en projet relevant de la loi 5299/2026, en consultation publique jusqu'au 20 juillet 2026, proposant un modèle plus strict de « zéro injection réseau » — 800 W maximum d'injection réseau, jusqu'à 900 W de puissance installée, aucune injection réseau, couplage batterie autorisé — un mécanisme nettement différent du modèle à notification simple utilisé ailleurs dans l'UE",
          "La DPEB (entrant progressivement en vigueur à partir de 2026) est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures",
          "La Suède et la Hongrie sont les exceptions les plus nettes de l'UE — la Suède bloque le raccordement réseau standard pour ces installations et la Hongrie les interdit purement et simplement, la convergence n'est donc pas universelle",
          "Pour le détail des règles allemandes propres aux 800 W (DIN VDE V 0126-95, le sous-plafond de 960 Wp pour la prise Schuko, § 8 EEG 2023), voir le guide dédié à l'Allemagne plutôt que cette vue d'ensemble transfrontalière",
        ],
        updatedDate: '2026-07-18',
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
          "Le cadre grec est désormais en consultation publique formelle dans le cadre de la loi 5299/2026, jusqu'au 20 juillet 2026 — et propose un mécanisme nettement plus strict de « zéro injection réseau » (800 W maximum d'injection réseau, jusqu'à 900 W de puissance installée, aucune injection réseau du tout, couplage batterie autorisé), et non le modèle à notification simple utilisé ailleurs dans l'UE.",
          "La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures.",
          "Le schéma n'est pas identique dans tous les pays : la France, l'Autriche, la Belgique et les Pays-Bas utilisent un enregistrement par simple notification avec injection autorisée, tandis que le projet grec est un dispositif plus strict à zéro injection — « 800 W » ne signifie pas les mêmes règles partout.",
          "La Suède et la Hongrie sont les exceptions les plus nettes de l'UE à cette tendance de convergence — la Suède bloque le raccordement réseau standard pour ces installations et la Hongrie les interdit purement et simplement.",
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
          "**Un nouveau projet de loi sur les énergies renouvelables a été déposé au Parlement grec par le ministère de l'Environnement et de l'Énergie (YPEN) le 21 avril 2026, ouvrant explicitement pour la première fois la voie aux systèmes solaires enchufables.** Jusqu'à présent, la Grèce — pourtant l'un des pays les plus ensoleillés d'Europe — ne disposait d'aucun cadre juridique clair pour le solaire de balcon, laissant les installations dans une zone grise. À la dernière mise à jour de cette page, le cadre de mise en œuvre est en consultation publique formelle dans le cadre de la loi 5299/2026, jusqu'au 20 juillet 2026.",
          "**Le mécanisme proposé par la Grèce est distinct de — et plus strict que — le modèle à notification simple avec injection autorisée utilisé en France, en Autriche, en Belgique et aux Pays-Bas : il s'agit d'un dispositif « zéro injection réseau ».** Le projet plafonne l'injection réseau à 800 W avec jusqu'à 900 W de puissance installée, et les installations ne pourront injecter aucune énergie sur le réseau. Le couplage avec du stockage sur batterie est autorisé dans le projet, ce qui a du sens puisque l'énergie injectée n'a aucune voie de compensation dans ce dispositif — contrairement au modèle à notification simple en vigueur ailleurs, « 800 W » en Grèce ne signifie pas les mêmes règles qu'en Allemagne, en France, en Autriche, en Belgique ou aux Pays-Bas.",
        ],
        callouts: [
          { type: 'warning', text: "Au 18 juillet 2026, le cadre grec est en consultation publique dans le cadre de la loi 5299/2026, qui se clôture le 20 juillet 2026 — une date très proche de la propre mise à jour de cette page. Vérifiez le texte de loi définitivement publié avant de considérer comme acquis un détail présenté ici (le mécanisme zéro injection, les plafonds de 800/900 W ou l'autorisation de coupler avec une batterie)." },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: "Ce que cela signifie hors d'Allemagne",
        content: [
          "**Si votre pays n'a pas encore de règles explicites sur le solaire de balcon, la trajectoire est désormais prévisible dans sa forme, sinon dans son mécanisme : attendez-vous à un plafond de 800 W et à un calendrier lié à la date de transposition de la DPEB de votre pays plutôt qu'à une incertitude ouverte — mais les règles précises peuvent différer sensiblement selon les pays, entre le modèle à notification simple avec injection autorisée (France, Autriche, Belgique, Pays-Bas) et un dispositif plus strict à zéro injection réseau (le projet grec).** La Grèce est aujourd'hui l'exemple le plus clair d'un pays passant d'une zone grise à des règles formalisées, même si son approche zéro injection montre que « 800 W » seul ne garantit pas le même mécanisme qu'ailleurs dans l'UE — d'autres États membres devraient formaliser leurs règles à l'approche de leurs échéances de transposition de la DPEB, mais pas nécessairement selon le même modèle, et la Suède comme la Hongrie montrent que la convergence n'est pas garantie du tout.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: "L'Allemagne a-t-elle fixé la norme européenne des 800 W pour le solaire de balcon ?", a: "Non — la France, l'Autriche, la Belgique et les Pays-Bas autorisaient déjà le solaire de balcon jusqu'à 800 W avec un simple enregistrement par notification avant que l'Allemagne ne finalise sa propre norme DIN VDE V 0126-95 en décembre 2025. L'Allemagne a rejoint une norme de facto européenne déjà existante plutôt que d'en créer une nouvelle." },
          { q: 'Que fait la Grèce concernant le solaire de balcon en 2026 ?', a: "La Grèce a déposé un projet de loi sur les énergies renouvelables au parlement le 21 avril 2026, et le cadre de mise en œuvre est désormais en consultation publique dans le cadre de la loi 5299/2026, jusqu'au 20 juillet 2026. Contrairement au modèle à notification simple utilisé ailleurs dans l'UE, le projet grec propose un dispositif plus strict de « zéro injection réseau » : 800 W maximum d'injection réseau, jusqu'à 900 W de puissance installée, aucune injection réseau, couplage batterie autorisé. Confirmez le statut définitivement publié avant de considérer ceci comme un texte de loi arrêté." },
          { q: 'Le cadre grec permet-il d\'exporter le surplus d\'électricité vers le réseau ?', a: "Non — selon le projet de cadre en consultation publique (loi 5299/2026, jusqu'au 20 juillet 2026), les installations sont plafonnées à 800 W d'injection réseau, sans aucune injection autorisée, un dispositif « zéro injection » plus strict que le modèle à notification simple avec injection autorisée utilisé en France, en Autriche, en Belgique et aux Pays-Bas. Le couplage avec du stockage sur batterie est autorisé, ce qui permet d'utiliser l'énergie qui ne peut pas être injectée." },
          { q: 'Qu\'est-ce que la DPEB et pourquoi importe-t-elle pour le solaire de balcon ?', a: "La directive révisée sur la performance énergétique des bâtiments (DPEB) entre progressivement en vigueur à partir de 2026 et étend les obligations solaires des bâtiments de l'UE aux façades, aux balcons et aux terrasses, pas seulement aux toitures — transformant le solaire de balcon en mécanisme de mise en conformité pour les États membres plutôt qu'en choix politique discrétionnaire." },
          { q: 'Le solaire de balcon est-il légal partout dans l\'UE ?', a: "Non. Si l'élan va vers un cadre de type 800 W dans de nombreux États membres, la Suède bloque le raccordement réseau standard pour ces installations et la Hongrie les interdit purement et simplement — la convergence vers une approche européenne commune est réelle, mais pas universelle." },
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
    title: 'معيار 800 واط للطاقة الشمسية على الشرفات: شرح التوحيد الأوروبي (2027)',
    seoTitle: 'معيار 800 واط للطاقة الشمسية على الشرفات: شرح التوحيد الأوروبي (2027)',
    intro: 'الحد الأقصى البالغ 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي تم إقراره نهائيًا بموجب DIN VDE V 0126-95 في ديسمبر 2025، يجعل ألمانيا متوافقة مع معيار أوروبي بحكم الأمر الواقع تستخدمه بالفعل فرنسا والنمسا وبلجيكا وهولندا — وليس إرساءً لسابقة جديدة تتبعها دول أخرى. تتابع هذه الصفحة كيفية انتشار هذا التقارب — رغم أن إطار اليونان الخاص، الذي يخضع الآن لاستشارة عامة بموجب القانون 5299/2026 حتى 20 يوليو 2026، يتبنّى نهجًا أكثر صرامة قائمًا على «عدم التغذية العكسية للشبكة إطلاقًا» بدلاً من تبنّي نموذج فرنسا/النمسا/بلجيكا/هولندا ببساطة، مدفوعًا بتوجيه الاتحاد الأوروبي بشأن الأداء الطاقي للمباني (EPBD). لا تتقارب كل الدول الأعضاء: تبقى السويد والمجر استثناءين واضحين.',
    metaDescription: 'تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بطاقة شمسية للشرفات بقدرة 800 واط عبر تسجيل بإخطار بسيط فقط. انضمت ألمانيا إلى هذا المعيار في ديسمبر 2025 — واليونان الآن في استشارة عامة بشأن إطار أكثر صرامة بلا تغذية عكسية للشبكة (القانون 5299/2026، حتى 20 يوليو 2026)، مدفوعةً بتوسيع توجيه EPBD ليشمل الواجهات والشرفات.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات في الاتحاد الأوروبي خارج ألمانيا الذين يتابعون تبنّي معيار 800 واط',
    primaryTerm: 'معيار 800 واط للطاقة الشمسية على الشرفات في الاتحاد الأوروبي',
    targetKeywords: ['طاقة شمسية للشرفة 800 واط الاتحاد الأوروبي', 'اليونان طاقة شمسية للشرفة 800 واط', 'توحيد الاتحاد الأوروبي للطاقة الشمسية للشرفات 2027'],
    leadAnswerBlock: '**الحد الأقصى البالغ 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي تم إقراره نهائيًا بموجب DIN VDE V 0126-95 في ديسمبر 2025، يجعل ألمانيا متوافقة مع معيار أوروبي بحكم الأمر الواقع تستخدمه بالفعل فرنسا والنمسا وبلجيكا وهولندا — وليس إرساءً لسابقة جديدة تتبعها دول أخرى.** اليونان هي أحدث دولة منضمة، لكن بآلية أكثر صرامة بشكل ملموس: إطار عمل بموجب القانون 5299/2026 يخضع لاستشارة عامة حتى 20 يوليو 2026، ويقترح حدًا أقصى للتغذية إلى الشبكة قدره 800 واط، وقدرة مركّبة تصل إلى 900 واط، مع السماح بإقران البطارية للتخزين، و — على عكس النموذج القائم على الإخطار فقط مع السماح بالتغذية العكسية المعتمد في بقية دول الاتحاد — لا يُسمح بأي تغذية عكسية للشبكة إطلاقًا (تصميم «بلا تغذية عكسية»). يُعدّ توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي وراء هذا الدفع الأوسع لإضفاء الطابع الرسمي على القواعد، رغم أن ليست كل الدول الأعضاء تتقارب: تبقى السويد والمجر استثناءين واضحين.',
    quickAnswerTop: {
      ar: {
        question: 'هل ينتشر معيار 800 واط للطاقة الشمسية على الشرفات في جميع أنحاء الاتحاد الأوروبي؟',
        answer: 'نعم — لكن ألمانيا تنضمّ إلى تقارب قائم بالفعل، وليست هي من تقوده، والآلية تختلف من دولة إلى أخرى. تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بطاقة شمسية للشرفات بقدرة 800 واط عبر تسجيل بإخطار بسيط فقط مع السماح بالتغذية العكسية للشبكة؛ وقد جعل معيار DIN VDE V 0126-95 الألماني (ديسمبر 2025) ألمانيا متوافقة مع هذا المعيار. أما اليونان فهي أحدث دولة منضمة، لكنها تقترح بدلاً من ذلك نموذجًا أكثر صرامة «بلا تغذية عكسية للشبكة» — حد أقصى 800 واط للتغذية إلى الشبكة، وقدرة مركّبة تصل إلى 900 واط، ولا تغذية عكسية إطلاقًا — وهو حاليًا قيد الاستشارة العامة بموجب القانون 5299/2026 حتى 20 يوليو 2026. ويُعدّ توجيه الأداء الطاقي للمباني (EPBD) الأوروبي المُعدَّل المحرّك الهيكلي وراء هذا الدفع الأوسع، بينما تبقى السويد والمجر استثناءين لا تكون فيهما الطاقة الشمسية القابلة للتوصيل قانونية عمومًا.',
        bullets: [
          'تسمح فرنسا والنمسا وبلجيكا وهولندا بالفعل بما يصل إلى 800 واط من الطاقة الشمسية للشرفات عبر إخطار بسيط لمشغّل الشبكة مع السماح بالتغذية العكسية — انضمت ألمانيا إلى هذا المعيار في ديسمبر 2025، ولم تضعه هي',
          'اليونان: إطار مسودة بموجب القانون 5299/2026 قيد الاستشارة العامة حتى 20 يوليو 2026، يقترح نموذجًا أكثر صرامة «بلا تغذية عكسية للشبكة» — حد أقصى 800 واط للتغذية إلى الشبكة، وقدرة مركّبة تصل إلى 900 واط، ولا تغذية عكسية للشبكة، مع السماح بإقران البطارية — وهي آلية مختلفة بشكل ملموس عن النموذج القائم على الإخطار فقط المعتمد في بقية دول الاتحاد',
          'يُعدّ توجيه EPBD (الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026) المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط',
          'تُعدّ السويد والمجر الاستثناءين الأوضح في الاتحاد الأوروبي — إذ تمنع السويد الاتصال القياسي بالشبكة لهذه الأنظمة، وتحظرها المجر تمامًا، وبالتالي فإن التقارب ليس شاملاً',
          'للاطلاع على تفاصيل الـ800 واط الخاصة بألمانيا نفسها (DIN VDE V 0126-95، الحد الفرعي البالغ 960 واط ذروة لمقبس Schuko، § 8 EEG 2023)، راجع الدليل المخصص لألمانيا بدلاً من هذا العرض العابر للحدود',
        ],
        updatedDate: '2026-07-18',
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
          'أصبح إطار اليونان الآن قيد الاستشارة العامة الرسمية بموجب القانون 5299/2026، حتى 20 يوليو 2026 — ويقترح آلية أكثر صرامة بشكل ملموس «بلا تغذية عكسية للشبكة» (حد أقصى 800 واط للتغذية إلى الشبكة، وقدرة مركّبة تصل إلى 900 واط، ولا تغذية عكسية للشبكة إطلاقًا، مع السماح بإقران البطارية)، وليس النموذج القائم على الإخطار فقط المعتمد في بقية دول الاتحاد.',
          'يُعدّ توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط.',
          'النمط ليس متطابقًا في كل الدول: تعتمد فرنسا والنمسا وبلجيكا وهولندا تسجيلاً بالإخطار فقط مع السماح بالتغذية العكسية، بينما مسودة اليونان تصميم أكثر صرامة بلا تغذية عكسية — «800 واط» لا تعني القواعد نفسها في كل مكان.',
          'تُعدّ السويد والمجر الاستثناءين الأوضح في الاتحاد الأوروبي من هذا الاتجاه نحو التقارب — إذ تمنع السويد الاتصال القياسي بالشبكة لهذه الأنظمة، وتحظرها المجر تمامًا.',
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
          '**قدّمت وزارة البيئة والطاقة اليونانية (YPEN) في 21 أبريل 2026 مشروع قانون جديد للطاقة المتجددة (RES) إلى البرلمان اليوناني، يفتح صراحةً وللمرة الأولى الباب أمام أنظمة الطاقة الشمسية القابلة للتوصيل.** حتى الآن، لم يكن لدى اليونان — رغم كونها من أكثر دول أوروبا سطوعًا بأشعة الشمس — إطار قانوني واضح للطاقة الشمسية على الشرفات، مما ترك التركيبات في منطقة رمادية. وحتى آخر تحديث لهذه الصفحة، يخضع إطار التنفيذ لاستشارة عامة رسمية بموجب القانون 5299/2026، والتي تستمر حتى 20 يوليو 2026.',
          '**تختلف آلية اليونان المقترحة عن — وهي أكثر صرامة من — النموذج القائم على الإخطار فقط مع السماح بالتغذية العكسية المعتمد في فرنسا والنمسا وبلجيكا وهولندا: إنها تصميم «بلا تغذية عكسية للشبكة إطلاقًا».** يحدّ المسودة التغذية إلى الشبكة عند 800 واط بقدرة مركّبة تصل إلى 900 واط، ولن يُسمح للأنظمة بتغذية أي طاقة إلى الشبكة إطلاقًا. يُسمح بإقران البطارية للتخزين بموجب المسودة، وهو أمر منطقي بما أن الطاقة المُغذّاة ليس لها أي مسار تعويض ضمن هذا التصميم — على عكس النموذج القائم على الإخطار فقط في بقية دول الاتحاد، «800 واط» في اليونان لا تعني القواعد نفسها المعمول بها في ألمانيا أو فرنسا أو النمسا أو بلجيكا أو هولندا.',
        ],
        callouts: [
          { type: 'warning', text: 'اعتبارًا من 18 يوليو 2026، إطار اليونان قيد الاستشارة العامة بموجب القانون 5299/2026، التي تُغلق في 20 يوليو 2026 — وهو تاريخ قريب جدًا من تاريخ تحديث هذه الصفحة نفسه. تحقق من القانون المنشور نهائيًا مباشرةً قبل اعتبار أي تفصيل هنا (آلية بلا تغذية عكسية، حدود 800/900 واط، أو السماح بإقران البطارية) أمرًا مستقرًا.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ماذا يعني هذا خارج ألمانيا',
        content: [
          '**إذا لم يكن لدى بلدك بعد قواعد صريحة للطاقة الشمسية على الشرفات، فإن اتجاه المسار أصبح الآن قابلاً للتنبؤ من حيث الشكل، وإن لم يكن من حيث الآلية: توقّع حدًا أقصى 800 واط وجدولًا زمنيًا مرتبطًا بموعد نقل توجيه EPBD في بلدك بدلاً من عدم يقين مفتوح — لكن القواعد الدقيقة يمكن أن تختلف بشكل ملموس من دولة إلى أخرى، من نموذج الإخطار فقط مع التغذية العكسية (فرنسا، النمسا، بلجيكا، هولندا) إلى تصميم أكثر صرامة بلا تغذية عكسية للشبكة (مسودة اليونان).** تُعد اليونان حاليًا المثال الأوضح على دولة تنتقل من المنطقة الرمادية إلى قواعد رسمية، رغم أن نهجها القائم على عدم التغذية العكسية يُظهر أن «800 واط» وحدها لا تضمن الآلية نفسها المعتمدة في بقية دول الاتحاد — ومن المرجّح أن تُضفي دول أعضاء أخرى في الاتحاد الأوروبي الطابع الرسمي على القواعد مع اقتراب مواعيد نقل توجيه EPBD، لكن ليس بالضرورة وفق النموذج نفسه، وتُظهر السويد والمجر أن التقارب غير مضمون على الإطلاق.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل وضعت ألمانيا معيار الاتحاد الأوروبي البالغ 800 واط للطاقة الشمسية على الشرفات؟', a: 'لا — كانت فرنسا والنمسا وبلجيكا وهولندا تسمح بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط عبر تسجيل بإخطار بسيط فقط قبل أن تُقرّ ألمانيا معيارها الخاص DIN VDE V 0126-95 نهائيًا في ديسمبر 2025. انضمت ألمانيا إلى معيار أوروبي قائم بحكم الأمر الواقع بدلاً من إنشاء معيار جديد.' },
          { q: 'ماذا تفعل اليونان بشأن الطاقة الشمسية على الشرفات في عام 2026؟', a: 'قدّمت اليونان مشروع قانون للطاقة المتجددة (RES) إلى البرلمان في 21 أبريل 2026، ويخضع إطار التنفيذ الآن لاستشارة عامة بموجب القانون 5299/2026، حتى 20 يوليو 2026. وعلى عكس النموذج القائم على الإخطار فقط المعتمد في بقية دول الاتحاد الأوروبي، تقترح مسودة اليونان تصميمًا أكثر صرامة «بلا تغذية عكسية للشبكة»: حد أقصى 800 واط للتغذية إلى الشبكة، وقدرة مركّبة تصل إلى 900 واط، ولا تغذية عكسية للشبكة، مع السماح بإقران البطارية. تحقق من الحالة المنشورة نهائيًا قبل اعتبار هذا قانونًا نهائيًا.' },
          { q: 'هل يسمح إطار اليونان بتصدير الطاقة الفائضة إلى الشبكة؟', a: 'لا — بموجب إطار المسودة قيد الاستشارة العامة (القانون 5299/2026، حتى 20 يوليو 2026)، تُحدَّد الأنظمة عند 800 واط للتغذية إلى الشبكة دون السماح بأي تغذية عكسية إطلاقًا، وهو تصميم «بلا تغذية عكسية» أكثر صرامة من النموذج القائم على الإخطار فقط مع السماح بالتغذية العكسية المعتمد في فرنسا والنمسا وبلجيكا وهولندا. يُسمح بإقران البطارية للتخزين، وهي إحدى طرق استخدام الطاقة التي لا يمكن تصديرها.' },
          { q: 'ما هو EPBD ولماذا يهم بالنسبة للطاقة الشمسية على الشرفات؟', a: 'يدخل توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل حيز التنفيذ تدريجيًا اعتبارًا من 2026، ويوسّع إلزامات الطاقة الشمسية للمباني في الاتحاد الأوروبي لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط — مما يحوّل الطاقة الشمسية للشرفات إلى آلية امتثال للدول الأعضاء بدلاً من كونها خيارًا سياسيًا تقديريًا.' },
          { q: 'هل الطاقة الشمسية على الشرفات قانونية في كل أنحاء الاتحاد الأوروبي؟', a: 'لا. فرغم أن الزخم يتجه نحو إطار عمل على غرار الـ800 واط في العديد من الدول الأعضاء، تمنع السويد الاتصال القياسي بالشبكة لهذه الأنظمة، وتحظرها المجر تمامًا — التقارب نحو نهج أوروبي مشترك حقيقي لكنه ليس شاملاً.' },
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
    title: '800W バルコニー太陽光基準：EU調和の解説（2027年）',
    seoTitle: '800W バルコニー太陽光基準：EU調和の解説（2027年）',
    intro: 'ドイツの800Wバルコニー太陽光上限は、2025年12月にDIN VDE V 0126-95のもとで確定し、フランス、オーストリア、ベルギー、オランダがすでに採用している事実上のEU基準にドイツが合わせた形です。新たな先例をドイツが作り、他国がそれに追随しているわけではありません。このページでは、この収束がどのように広がっているかを追跡します。ただし、ギリシャ独自の枠組みは2026年法5299号のもとで2026年7月20日までパブリックコンサルテーション中であり、フランス／オーストリア／ベルギー／オランダのモデルを単純に採用するのではなく、より厳格な「逆潮流ゼロ」方式を取っています。牽引役はEUの建築物エネルギー性能指令（EPBD）です。すべての加盟国が収束しているわけではなく、スウェーデンとハンガリーは明確な例外として残っています。',
    metaDescription: 'フランス、オーストリア、ベルギー、オランダはすでに簡易な届出のみで800Wバルコニー太陽光を認めています。ドイツは2025年12月にこの基準に加わりました — ギリシャは現在、より厳格な逆潮流ゼロの枠組み（2026年法5299号、2026年7月20日まで）についてパブリックコンサルテーション中で、EPBDのファサード・バルコニーへの拡大が牽引役です。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ドイツ以外のEU圏でバルコニー太陽光を検討し、800W基準の採用状況を追うユーザー',
    primaryTerm: 'eu 800wバルコニー太陽光基準',
    targetKeywords: ['800w バルコニー太陽光 eu', 'ギリシャ バルコニー太陽光 800w', 'eu バルコニー太陽光 調和 2027'],
    leadAnswerBlock: '**ドイツの800Wバルコニー太陽光上限は、2025年12月にDIN VDE V 0126-95のもとで確定し、フランス、オーストリア、ベルギー、オランダがすでに採用している事実上のEU基準にドイツが合わせた形です。新たな先例をドイツが作り、他国がそれに追随しているわけではありません。** ギリシャは最新の参入国ですが、かなり厳格な仕組みを取っています。2026年法5299号に基づく枠組みは2026年7月20日までパブリックコンサルテーション中で、系統への逆潮流の上限を800W、設置容量を最大900Wとし、蓄電池との併用を認めつつ、他のEU各国で採用されている届出のみで逆潮流が許可されるモデルとは異なり、逆潮流を一切認めない（「逆潮流ゼロ」方式）ことを提案しています。2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が、このルール正式化のより広い動きの構造的な推進力ですが、すべての加盟国が収束しているわけではなく、スウェーデンとハンガリーは明確な例外として残っています。',
    quickAnswerTop: {
      ja: {
        question: '800Wバルコニー太陽光基準はEU全域に広がっているのか？',
        answer: 'はい — ただしドイツは既存の収束の流れに加わったのであり、主導しているわけではなく、仕組みは国によって異なります。フランス、オーストリア、ベルギー、オランダはすでに簡易な届出と逆潮流の許可のみで800Wバルコニー太陽光を認めており、ドイツのDIN VDE V 0126-95（2025年12月）はこの基準にドイツを合わせるものでした。ギリシャは最新の参入国ですが、代わりにより厳格な「逆潮流ゼロ」モデルを提案しています — 系統への逆潮流上限800W、設置容量最大900W、逆潮流は一切なし — 現在2026年法5299号のもとで2026年7月20日までパブリックコンサルテーション中です。改正EU建築物エネルギー性能指令（EPBD）がこの広範な動きの構造的な推進力ですが、スウェーデンとハンガリーはプラグイン太陽光が一般的に合法でない例外として残っています。',
        bullets: [
          'フランス、オーストリア、ベルギー、オランダはすでに送電網事業者への簡易な届出と逆潮流の許可のみで最大800Wのバルコニー太陽光を認めている — ドイツは2025年12月にこの基準に加わったのであり、定めたのではない',
          'ギリシャ：2026年法5299号に基づく草案が2026年7月20日までパブリックコンサルテーション中で、より厳格な「逆潮流ゼロ」モデルを提案 — 系統への逆潮流上限800W、設置容量最大900W、系統への逆潮流なし、蓄電池の併用は可 — 他のEU諸国で使われる届出のみのモデルとは大きく異なる仕組み',
          'EPBD（2026年から段階的に発効）が構造的な推進力 — 屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している',
          'スウェーデンとハンガリーはEUで最も明確な例外 — スウェーデンはこうしたシステムの標準的な系統接続をブロックしており、ハンガリーは全面的に禁止しているため、収束は普遍的ではない',
          'ドイツ独自の800W関連事項（DIN VDE V 0126-95、960 Wpのシュコ・サブ上限、EEG 2023第8条）については、この越境概要ではなく専用のドイツガイドを参照',
        ],
        updatedDate: '2026-07-18',
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
          'ギリシャの枠組みは現在、2026年法5299号のもとで2026年7月20日まで正式にパブリックコンサルテーション中である。他のEU諸国で使われる届出のみのモデルとは異なり、より厳格な「逆潮流ゼロ」の仕組み（系統への逆潮流上限800W、設置容量最大900W、系統への逆潮流なし、蓄電池の併用可）を提案している。',
          '2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が構造的な推進力であり、屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している。',
          'すべての国で同じパターンというわけではない：フランス／オーストリア／ベルギー／オランダは逆潮流を許可する届出のみの登録を採用しているのに対し、ギリシャの草案はより厳格な逆潮流ゼロ方式である — 「800W」は必ずしもどこでも同じルールを意味しない。',
          'スウェーデンとハンガリーは、この収束の傾向に対するEUで最も明確な例外である — スウェーデンはこうしたシステムの標準的な系統接続をブロックしており、ハンガリーは全面的に禁止している。',
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
          '**2026年4月21日、ギリシャ環境エネルギー省（YPEN）が新たなRES法案を議会へ提出し、初めて明示的にプラグイン太陽光システムへの道を開きました。** これまでギリシャは — ヨーロッパで最も日照に恵まれた国の一つでありながら — バルコニー太陽光に関する明確な法的枠組みを持たず、設置はグレーゾーンに置かれていました。このページの最新更新時点で、実施の枠組みは2026年法5299号のもとで正式にパブリックコンサルテーション中であり、2026年7月20日まで続きます。',
          '**ギリシャが提案する仕組みは、フランス、オーストリア、ベルギー、オランダで使われている届出のみで逆潮流が許可されるモデルとは異なり、それよりも厳格な「逆潮流ゼロ」方式です。** 草案では系統への逆潮流を800Wに制限し、設置容量は最大900Wとし、系統への逆潮流は一切認められません。草案では蓄電池の併用が認められており、この仕組みでは逆潮流した電力に対する補償手段がないことを考えると理にかなっています — 他国の届出のみのモデルとは異なり、ギリシャの「800W」はドイツ、フランス、オーストリア、ベルギー、オランダと同じルールを意味しません。',
        ],
        callouts: [
          { type: 'warning', text: '2026年7月18日時点で、ギリシャの枠組みは2026年法5299号のもとでパブリックコンサルテーション中であり、2026年7月20日に締め切られます — このページ自体の更新日に非常に近い日付です。ここに記載されている詳細（逆潮流ゼロの仕組み、800W／900Wの上限、蓄電池併用の可否）を確定事項として扱う前に、正式に公布された法律を直接確認してください。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ドイツ以外にとっての意味',
        content: [
          '**まだ明確なバルコニー太陽光ルールがない国でも、方向性の「形」はすでに予測可能ですが、具体的な「仕組み」はそうとは限りません。800W上限と、際限のない不確実性ではなく自国のEPBD国内法化期限に連動したスケジュールを見込んでよいでしょう — ただし正確なルールは国によって大きく異なる可能性があり、逆潮流を許可する届出のみのモデル（フランス、オーストリア、ベルギー、オランダ）から、より厳格な逆潮流ゼロ方式（ギリシャの草案）まで幅があります。** ギリシャはグレーゾーンから正式なルールへ移行しつつある現時点で最も明確な例ですが、その逆潮流ゼロのアプローチは「800W」だけでは他のEU諸国と同じ仕組みが保証されるわけではないことを示しています。EPBDの国内法化期限が近づくにつれ、他のEU加盟国もルールを正式化する可能性が高いですが、必ずしも同じモデルに従うとは限らず、スウェーデンとハンガリーは収束がまったく保証されていないことを示しています。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ドイツはEUの800Wバルコニー太陽光基準を定めたのか？', a: 'いいえ — フランス、オーストリア、ベルギー、オランダは、ドイツが2025年12月に独自のDIN VDE V 0126-95基準を確定させる前から、すでに簡易な届出のみの登録で最大800Wのバルコニー太陽光を認めていました。ドイツは新たな基準を作ったのではなく、既存の事実上のEU基準に加わったのです。' },
          { q: 'ギリシャは2026年、バルコニー太陽光についてどう対応しているか？', a: 'ギリシャは2026年4月21日にRES法案を議会に提出し、実施の枠組みは現在、2026年法5299号のもとで2026年7月20日までパブリックコンサルテーション中です。EU他国で使われる届出のみのモデルとは異なり、ギリシャの草案はより厳格な「逆潮流ゼロ」方式を提案しています。系統への逆潮流上限800W、設置容量最大900W、系統への逆潮流なし、蓄電池の併用可という内容です。これを確定した法律として扱う前に、正式公布された最終状況を確認してください。' },
          { q: 'ギリシャの枠組みでは余剰電力を系統に輸出できるのか？', a: 'いいえ — パブリックコンサルテーション中の草案枠組み（2026年法5299号、2026年7月20日まで）では、系統への逆潮流は800Wに制限され、逆潮流そのものが一切認められておらず、フランス、オーストリア、ベルギー、オランダで使われている届出のみで逆潮流が許可されるモデルより厳格な「逆潮流ゼロ」方式です。蓄電池の併用は認められており、逆潮流できない電力を活用する一つの手段となっています。' },
          { q: 'EPBDとは何か、バルコニー太陽光にとってなぜ重要なのか？', a: '改正建築物エネルギー性能指令（EPBD）は2026年から段階的に発効し、屋根だけでなくファサード、バルコニー、テラスにまでEUの建物太陽光義務を拡大します — これにより、バルコニー太陽光は加盟国にとって任意の政策選択ではなく、コンプライアンス手段になります。' },
          { q: 'バルコニー太陽光はEU全域で合法なのか？', a: 'いいえ。多くの加盟国で800W型の枠組みへ向かう動きがある一方、スウェーデンはこうしたシステムの標準的な系統接続をブロックしており、ハンガリーは全面的に禁止しています — 共通のEUアプローチへの収束は実際に起きていますが、普遍的ではありません。' },
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
    title: '800W 발코니 태양광 표준: EU 조화 정책 설명 (2027년)',
    seoTitle: '800W 발코니 태양광 표준: EU 조화 정책 설명 (2027년)',
    intro: '2025년 12월 DIN VDE V 0126-95에 따라 확정된 독일의 800W 발코니 태양광 상한은, 프랑스·오스트리아·벨기에·네덜란드가 이미 채택하고 있던 사실상의 EU 표준에 독일이 합류한 것입니다. 다른 국가들이 뒤따르는 새로운 선례를 독일이 만든 것이 아닙니다. 이 페이지는 이러한 수렴 현상이 어떻게 확산되고 있는지 추적합니다 — 다만 그리스 자체의 체계는 2026년 법률 제5299호에 따라 2026년 7월 20일까지 공개 의견수렴 중이며, 프랑스·오스트리아·벨기에·네덜란드 모델을 단순히 따르기보다 더 엄격한 "역송전 제로" 방식을 취하고 있으며, EU 건물 에너지 성능 지침(EPBD)이 그 흐름을 주도하고 있습니다. 모든 회원국이 수렴하는 것은 아니며, 스웨덴과 헝가리는 명확한 예외로 남아 있습니다.',
    metaDescription: '프랑스, 오스트리아, 벨기에, 네덜란드는 이미 단순 신고만으로 800W 발코니 태양광을 허용하고 있습니다. 독일은 2025년 12월에 이 표준에 합류했으며, 그리스는 현재 더 엄격한 역송전 제로 체계(2026년 법률 제5299호, 2026년 7월 20일까지)에 대해 공개 의견수렴 중이며, EPBD의 파사드·발코니 확대 적용이 그 배경입니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '독일 외 EU 지역에서 800W 표준 도입 현황을 추적하는 발코니 태양광 구매자',
    primaryTerm: 'eu 800w 발코니 태양광 표준',
    targetKeywords: ['800w 발코니 태양광 eu', '그리스 발코니 태양광 800w', 'eu 발코니 태양광 조화 2027'],
    leadAnswerBlock: '**2025년 12월 DIN VDE V 0126-95에 따라 확정된 독일의 800W 발코니 태양광 상한은, 프랑스·오스트리아·벨기에·네덜란드가 이미 채택하고 있던 사실상의 EU 표준에 독일이 합류한 것입니다. 다른 국가들이 뒤따르는 새로운 선례를 독일이 만든 것이 아닙니다.** 그리스는 가장 최근에 합류한 국가지만, 상당히 더 엄격한 방식을 취하고 있습니다. 2026년 법률 제5299호에 따른 체계는 2026년 7월 20일까지 공개 의견수렴 중이며, 계통 역송전 최대치를 800W로, 설치 용량을 최대 900W로 제안하고, 배터리 저장 장치와의 병용은 허용하지만 — EU의 다른 지역에서 사용되는 신고만으로 역송전이 허용되는 모델과 달리 — 계통 역송전을 전혀 허용하지 않습니다("역송전 제로" 방식). 2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)이 규정을 공식화하려는 이러한 광범위한 움직임의 구조적 동인이지만, 모든 회원국이 수렴하는 것은 아니며 스웨덴과 헝가리는 명확한 예외로 남아 있습니다.',
    quickAnswerTop: {
      ko: {
        question: '800W 발코니 태양광 표준이 EU 전역으로 확산되고 있습니까?',
        answer: '그렇습니다 — 다만 독일은 기존의 수렴 흐름에 합류한 것이지, 그것을 주도한 것이 아니며, 국가마다 방식이 다릅니다. 프랑스, 오스트리아, 벨기에, 네덜란드는 이미 단순 신고와 역송전 허용만으로 800W 발코니 태양광을 허용하고 있으며, 독일의 DIN VDE V 0126-95(2025년 12월)는 독일을 이 기준에 맞춘 것입니다. 그리스는 가장 최근에 합류한 국가지만, 대신 더 엄격한 "역송전 제로" 모델을 제안하고 있습니다 — 계통 역송전 최대 800W, 설치 용량 최대 900W, 역송전 전면 금지 — 현재 2026년 법률 제5299호에 따라 2026년 7월 20일까지 공개 의견수렴 중입니다. 개정 EU 건물 에너지 성능 지침(EPBD)이 이러한 광범위한 흐름의 구조적 동인이며, 스웨덴과 헝가리는 플러그인 태양광이 일반적으로 합법이 아닌 예외로 남아 있습니다.',
        bullets: [
          '프랑스, 오스트리아, 벨기에, 네덜란드는 이미 송전망 운영사에 대한 단순 신고와 역송전 허용만으로 최대 800W 발코니 태양광을 허용하고 있습니다 — 독일은 2025년 12월 이 기준에 합류했을 뿐, 이를 제정한 것이 아닙니다',
          '그리스: 2026년 법률 제5299호에 따른 초안 체계가 2026년 7월 20일까지 공개 의견수렴 중이며, 더 엄격한 "역송전 제로" 모델을 제안합니다 — 계통 역송전 최대 800W, 설치 용량 최대 900W, 계통 역송전 없음, 배터리 병용 허용 — EU 다른 지역에서 사용되는 신고 전용 모델과는 상당히 다른 방식입니다',
          'EPBD(2026년부터 단계적 발효)는 구조적 동인입니다 — 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다',
          '스웨덴과 헝가리는 EU에서 가장 명확한 예외입니다 — 스웨덴은 이러한 시스템의 표준 계통 연결을 차단하고 있으며, 헝가리는 전면 금지하고 있어 수렴이 보편적이지 않습니다',
          '독일 자체의 800W 세부 사항(DIN VDE V 0126-95, 960 Wp 슈코 하위 상한, EEG 2023 제8조)은 이 국경 간 개요가 아닌 전용 독일 가이드를 참고하십시오',
        ],
        updatedDate: '2026-07-18',
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
          '그리스의 체계는 현재 2026년 법률 제5299호에 따라 2026년 7월 20일까지 정식 공개 의견수렴 중입니다 — 그리고 EU 다른 지역에서 사용되는 신고 전용 모델이 아니라, 상당히 더 엄격한 "역송전 제로" 방식(계통 역송전 최대 800W, 설치 용량 최대 900W, 계통 역송전 전면 금지, 배터리 병용 허용)을 제안하고 있습니다.',
          '2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)이 구조적 동인이며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다.',
          '모든 국가에서 패턴이 동일한 것은 아닙니다: 프랑스·오스트리아·벨기에·네덜란드는 역송전을 허용하는 신고 전용 등록을 사용하는 반면, 그리스의 초안은 더 엄격한 역송전 제로 방식입니다 — "800W"가 어디서나 같은 규정을 의미하지는 않습니다.',
          '스웨덴과 헝가리는 이러한 수렴 흐름에 대한 EU의 가장 명확한 예외입니다 — 스웨덴은 이러한 시스템의 표준 계통 연결을 차단하고 있으며, 헝가리는 전면 금지하고 있습니다.',
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
          '**2026년 4월 21일, 그리스 환경에너지부(YPEN)는 새로운 RES 법안을 그리스 의회에 제출하여, 처음으로 플러그인 태양광 시스템의 길을 명시적으로 열었습니다.** 지금까지 그리스는 — 유럽에서 가장 일조량이 풍부한 국가 중 하나임에도 — 발코니 태양광에 대한 명확한 법적 체계가 없어 설치가 회색지대에 놓여 있었습니다. 이 페이지의 최신 업데이트 기준으로, 시행 체계는 2026년 법률 제5299호에 따라 정식 공개 의견수렴 중이며, 2026년 7월 20일까지 진행됩니다.',
          '**그리스가 제안하는 방식은 프랑스, 오스트리아, 벨기에, 네덜란드에서 사용되는 신고 전용, 역송전 허용 모델과는 다르며 — 그보다 더 엄격한 "역송전 제로" 방식입니다.** 초안은 계통 역송전을 800W로, 설치 용량을 최대 900W로 제한하며, 시스템은 계통에 전력을 전혀 역송전할 수 없습니다. 초안 체계에서는 배터리 저장 장치 병용이 허용되는데, 이는 이 방식에서 역송전된 전력에 대한 보상 경로가 없다는 점을 고려하면 합리적입니다 — 다른 지역의 신고 전용 모델과 달리, 그리스에서 "800W"는 독일, 프랑스, 오스트리아, 벨기에, 네덜란드와 같은 규정을 의미하지 않습니다.',
        ],
        callouts: [
          { type: 'warning', text: '2026년 7월 18일 기준, 그리스의 체계는 2026년 법률 제5299호에 따라 공개 의견수렴 중이며 2026년 7월 20일에 마감됩니다 — 이 페이지 자체의 업데이트 날짜와 매우 가까운 시점입니다. 여기 나온 세부 사항(역송전 제로 방식, 800W/900W 상한, 배터리 병용 허용 여부)을 확정된 것으로 다루기 전에 최종 공포된 법률을 직접 확인하십시오.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '독일 외 지역에 미치는 의미',
        content: [
          '**아직 명시적인 발코니 태양광 규정이 없는 국가라도, 이제 방향성의 "형태"는 예측 가능하지만 구체적인 "방식"까지는 그렇지 않습니다. 800W 상한과, 무기한의 불확실성이 아닌 자국의 EPBD 이행 기한에 맞춘 일정을 예상할 수 있습니다 — 다만 정확한 규정은 국가별로 상당히 다를 수 있으며, 역송전을 허용하는 신고 전용 모델(프랑스, 오스트리아, 벨기에, 네덜란드)부터 더 엄격한 역송전 제로 방식(그리스의 초안)까지 다양합니다.** 그리스는 회색지대에서 공식화된 규정으로 이동하는 현재 가장 명확한 사례이지만, 그리스의 역송전 제로 방식은 "800W"만으로는 EU 다른 지역과 동일한 방식이 보장되지 않는다는 점을 보여줍니다 — EPBD 이행 기한이 다가옴에 따라 다른 EU 회원국들도 규정을 공식화할 가능성이 높지만, 반드시 동일한 모델을 따르는 것은 아니며, 스웨덴과 헝가리는 수렴이 전혀 보장되지 않는다는 점을 보여줍니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '독일이 EU의 800W 발코니 태양광 표준을 제정했습니까?', a: '아닙니다 — 프랑스, 오스트리아, 벨기에, 네덜란드는 독일이 2025년 12월 자체 DIN VDE V 0126-95 표준을 확정하기 전부터 이미 단순 신고만으로 최대 800W 발코니 태양광을 허용하고 있었습니다. 독일은 새로운 기준을 만든 것이 아니라 기존의 사실상 EU 규범에 합류한 것입니다.' },
          { q: '그리스는 2026년 발코니 태양광에 대해 어떤 조치를 취하고 있습니까?', a: '그리스는 2026년 4월 21일 의회에 RES 법안을 제출했으며, 시행 체계는 현재 2026년 법률 제5299호에 따라 2026년 7월 20일까지 공개 의견수렴 중입니다. EU 다른 지역에서 사용되는 신고 전용 모델과 달리, 그리스의 초안은 더 엄격한 "역송전 제로" 방식을 제안합니다: 계통 역송전 최대 800W, 설치 용량 최대 900W, 계통 역송전 없음, 배터리 병용 허용입니다. 이를 확정된 법률로 간주하기 전에 최종 공포된 상태를 확인하십시오.' },
          { q: '그리스의 체계는 잉여 전력을 계통으로 내보낼 수 있게 합니까?', a: '아닙니다 — 공개 의견수렴 중인 초안 체계(2026년 법률 제5299호, 2026년 7월 20일까지)에 따르면, 시스템은 계통 역송전이 800W로 제한되며 역송전이 전혀 허용되지 않습니다. 이는 프랑스, 오스트리아, 벨기에, 네덜란드에서 사용되는 신고 전용, 역송전 허용 모델보다 더 엄격한 "역송전 제로" 방식입니다. 배터리 저장 장치 병용은 허용되며, 이는 역송전할 수 없는 전력을 활용하는 한 가지 방법입니다.' },
          { q: 'EPBD란 무엇이며 발코니 태양광에 왜 중요합니까?', a: '개정 건물 에너지 성능 지침(EPBD)은 2026년부터 단계적으로 발효되며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 EU 건물 태양광 의무를 확대합니다 — 이로써 발코니 태양광은 회원국의 재량적 정책 선택이 아니라 준수 수단이 됩니다.' },
          { q: '발코니 태양광은 EU 전역에서 합법입니까?', a: '아닙니다. 많은 회원국에서 800W 방식의 체계로 나아가는 흐름이 있지만, 스웨덴은 이러한 시스템의 표준 계통 연결을 차단하고 있으며, 헝가리는 전면 금지하고 있습니다 — 공통된 EU 접근 방식으로의 수렴은 실제로 진행되고 있지만 보편적이지는 않습니다.' },
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
    title: 'O padrão de 800 W para energia solar de varanda: a harmonização da UE explicada (2027)',
    seoTitle: 'O padrão de 800 W para energia solar de varanda: a harmonização da UE explicada (2027)',
    intro: 'O limite de 800 W para energia solar de varanda na Alemanha, finalizado sob a norma DIN VDE V 0126-95 em dezembro de 2025, coloca o país em linha com um padrão de fato da UE já usado pela França, Áustria, Bélgica e Países Baixos — em vez de estabelecer um novo precedente que outros estejam seguindo. Esta página acompanha como essa convergência está se espalhando — embora o próprio regime da Grécia, agora em consulta pública sob a Lei 5299/2026 até 20 de julho de 2026, adote uma abordagem mais rígida de "zero injeção na rede" em vez de simplesmente adotar o modelo França/Áustria/Bélgica/Países Baixos, impulsionada pela Diretiva de Desempenho Energético dos Edifícios da UE. Nem todos os Estados-membros estão convergindo: Suécia e Hungria continuam sendo exceções claras.',
    metaDescription: 'França, Áustria, Bélgica e Países Baixos já permitem energia solar de varanda de 800 W com registro por simples notificação. A Alemanha aderiu a esse padrão em dezembro de 2025 — a Grécia está agora em consulta pública sobre um regime mais rígido de zero injeção na rede (Lei 5299/2026, até 20 de julho de 2026), impulsionada pela extensão da EPBD a fachadas e varandas.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda na UE fora da Alemanha acompanhando a adoção do padrão de 800 W',
    primaryTerm: 'padrão de 800 w para energia solar de varanda na ue',
    targetKeywords: ['energia solar de varanda 800w ue', 'grécia energia solar de varanda 800w', 'harmonização ue energia solar de varanda 2027'],
    leadAnswerBlock: '**O limite de 800 W para energia solar de varanda na Alemanha, finalizado sob a norma DIN VDE V 0126-95 em dezembro de 2025, coloca o país em linha com um padrão de fato da UE já usado pela França, Áustria, Bélgica e Países Baixos — em vez de estabelecer um novo precedente que outros estejam seguindo.** A Grécia é a integrante mais recente, mas com um mecanismo bem mais rígido: um regime sob a Lei 5299/2026 está em consulta pública até 20 de julho de 2026, propondo um limite máximo de injeção na rede de 800 W, até 900 W de capacidade instalada, permitindo o pareamento com armazenamento em bateria e — diferente do modelo de simples notificação com injeção permitida usado no restante do bloco — nenhuma injeção na rede (um design de "zero injeção"). A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural por trás desse impulso mais amplo para formalizar regras, embora nem todos os Estados-membros estejam convergindo: Suécia e Hungria continuam sendo exceções claras.',
    quickAnswerTop: {
      pt: {
        question: 'O padrão de 800 W para energia solar de varanda está se espalhando pela UE?',
        answer: 'Sim — mas a Alemanha está aderindo a uma convergência já existente, não a liderando, e o mecanismo varia de país para país. França, Áustria, Bélgica e Países Baixos já permitem energia solar de varanda de 800 W com registro por simples notificação e injeção na rede permitida; a norma alemã DIN VDE V 0126-95 (dezembro de 2025) colocou o país em linha com esse padrão. A Grécia é a integrante mais recente, mas propõe em vez disso um modelo mais rígido de "zero injeção na rede" — máximo de 800 W de injeção na rede, até 900 W de capacidade instalada, nenhuma injeção — atualmente em consulta pública sob a Lei 5299/2026 até 20 de julho de 2026. A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada da UE é o motor estrutural por trás desse impulso mais amplo, com a Suécia e a Hungria permanecendo exceções onde a energia solar plugável geralmente não é legal.',
        bullets: [
          'França, Áustria, Bélgica e Países Baixos já permitem até 800 W de energia solar de varanda com uma simples notificação à operadora de rede e injeção permitida — a Alemanha aderiu a essa norma em dezembro de 2025, não a criou',
          'Grécia: regime em minuta sob a Lei 5299/2026 em consulta pública até 20 de julho de 2026, propondo um modelo mais rígido de "zero injeção na rede" — máximo de 800 W de injeção na rede, até 900 W de capacidade instalada, nenhuma injeção na rede, pareamento com bateria permitido — um mecanismo bem diferente do modelo de simples notificação usado no restante da UE',
          'A EPBD (entrando em vigor gradualmente a partir de 2026) é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados',
          'Suécia e Hungria são as exceções mais claras da UE — a Suécia bloqueia a conexão padrão à rede para esses sistemas e a Hungria os proíbe totalmente, então a convergência não é universal',
          'Para os detalhes específicos da Alemanha sobre os 800 W (DIN VDE V 0126-95, o sublimite de 960 Wp para a tomada Schuko, § 8 EEG 2023), veja o guia dedicado à Alemanha em vez desta visão geral transfronteiriça',
        ],
        updatedDate: '2026-07-18',
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
          'O regime da Grécia está agora em consulta pública formal sob a Lei 5299/2026, até 20 de julho de 2026 — e propõe um mecanismo bem mais rígido de "zero injeção na rede" (máximo de 800 W de injeção na rede, até 900 W de capacidade instalada, nenhuma injeção na rede, pareamento com bateria permitido), não o modelo de simples notificação usado no restante da UE.',
          'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados.',
          'O padrão não é idêntico em todos os países: França/Áustria/Bélgica/Países Baixos usam registro por simples notificação com injeção permitida, enquanto a minuta da Grécia é um design mais rígido de zero injeção — "800 W" não significa as mesmas regras em todos os lugares.',
          'Suécia e Hungria são as exceções mais claras da UE a essa tendência de convergência — a Suécia bloqueia a conexão padrão à rede para esses sistemas e a Hungria os proíbe totalmente.',
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
          '**Em 21 de abril de 2026, o Ministério do Meio Ambiente e Energia (YPEN) apresentou um novo projeto de lei sobre energias renováveis ao Parlamento grego, abrindo explicitamente, pela primeira vez, o caminho para sistemas solares plugáveis.** Até então, a Grécia — apesar de ser um dos países mais ensolarados da Europa — não tinha um marco legal claro para energia solar de varanda, deixando as instalações em uma zona cinzenta. Na última atualização desta página, o regime de implementação está em consulta pública formal sob a Lei 5299/2026, até 20 de julho de 2026.',
          '**O mecanismo proposto pela Grécia é distinto de — e mais rígido que — o modelo de simples notificação com injeção permitida usado na França, Áustria, Bélgica e Países Baixos: é um design de "zero injeção na rede".** A minuta limita a injeção na rede a 800 W com até 900 W de capacidade instalada, e os sistemas não poderão injetar energia na rede de forma alguma. O pareamento com armazenamento em bateria é permitido na minuta, o que faz sentido dado que a energia injetada não tem caminho de compensação nesse design — diferente do modelo de simples notificação usado no restante da UE, "800 W" na Grécia não significa as mesmas regras que na Alemanha, França, Áustria, Bélgica ou Países Baixos.',
        ],
        callouts: [
          { type: 'warning', text: 'Em 18 de julho de 2026, o regime da Grécia está em consulta pública sob a Lei 5299/2026, que se encerra em 20 de julho de 2026 — muito próximo da própria data de atualização desta página. Verifique a lei finalmente publicada diretamente antes de tratar qualquer detalhe aqui (o mecanismo de zero injeção, os limites de 800/900 W, ou a permissão de pareamento com bateria) como definitivo.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'O que isso significa fora da Alemanha',
        content: [
          '**Se o seu país ainda não tem regras explícitas para energia solar de varanda, a direção agora é previsível na forma, senão no mecanismo: espere um limite de 800 W e um cronograma vinculado ao prazo de transposição da EPBD do seu país em vez de uma incerteza aberta — mas as regras exatas podem diferir significativamente por país, do modelo de simples notificação com injeção permitida (França, Áustria, Bélgica, Países Baixos) a um design mais rígido de zero injeção na rede (a minuta da Grécia).** A Grécia é o exemplo mais claro atualmente de um país passando da zona cinzenta para regras formalizadas, embora sua abordagem de zero injeção mostre que "800 W" sozinho não garante o mesmo mecanismo do restante da UE — outros Estados-membros da UE provavelmente formalizarão regras à medida que os prazos de transposição da EPBD se aproximarem, mas não necessariamente pelo mesmo modelo, e Suécia e Hungria mostram que a convergência não está garantida.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A Alemanha definiu o padrão de 800 W da UE para energia solar de varanda?', a: 'Não — França, Áustria, Bélgica e Países Baixos já permitiam energia solar de varanda até 800 W com registro por simples notificação antes de a Alemanha finalizar seu próprio padrão DIN VDE V 0126-95 em dezembro de 2025. A Alemanha aderiu a uma norma de fato da UE já existente, em vez de criar uma nova.' },
          { q: 'O que a Grécia está fazendo em relação à energia solar de varanda em 2026?', a: 'A Grécia apresentou um projeto de lei sobre energias renováveis ao parlamento em 21 de abril de 2026, e o regime de implementação está agora em consulta pública sob a Lei 5299/2026, até 20 de julho de 2026. Diferente do modelo de simples notificação usado no restante da UE, a minuta da Grécia propõe um design mais rígido de "zero injeção na rede": máximo de 800 W de injeção na rede, até 900 W de capacidade instalada, nenhuma injeção na rede, pareamento com bateria permitido. Confirme o status finalmente publicado antes de tratar isso como lei definitiva.' },
          { q: 'O regime da Grécia permite exportar o excesso de energia para a rede?', a: 'Não — segundo o regime em minuta em consulta pública (Lei 5299/2026, até 20 de julho de 2026), os sistemas são limitados a 800 W de injeção na rede, sem nenhuma injeção na rede permitida, um design de "zero injeção" mais rígido que o modelo de simples notificação com injeção permitida usado na França, Áustria, Bélgica e Países Baixos. O pareamento com armazenamento em bateria é permitido, o que é uma forma de usar a energia que não pode ser injetada na rede.' },
          { q: 'O que é a EPBD e por que ela importa para a energia solar de varanda?', a: 'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada entra em vigor gradualmente a partir de 2026 e estende as obrigações solares dos edifícios da UE a fachadas, varandas e terraços, não apenas a telhados — transformando a energia solar de varanda em um mecanismo de conformidade para os Estados-membros, em vez de uma escolha política discricionária.' },
          { q: 'A energia solar de varanda é legal em toda a UE?', a: 'Não. Embora o impulso seja em direção a um regime do tipo 800 W em muitos Estados-membros, a Suécia bloqueia a conexão padrão à rede para esses sistemas e a Hungria os proíbe totalmente — a convergência para uma abordagem europeia comum é real, mas não universal.' },
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
    title: '800瓦阳台太阳能标准：欧盟统一进程解析（2027年）',
    seoTitle: '800瓦阳台太阳能标准：欧盟统一进程解析（2027年）',
    intro: '德国800瓦阳台太阳能上限已于2025年12月依据DIN VDE V 0126-95正式确定，这使德国与法国、奥地利、比利时、荷兰早已采用的事实上的欧盟标准保持一致——而不是德国率先设立标准、其他国家跟随。本页追踪这一趋同过程的扩散情况——不过希腊自身的框架目前正依据《5299/2026号法律》进行公众咨询，截至2026年7月20日，其采取的是更严格的「零并网馈电」路径，而非简单套用法国/奥地利/比利时/荷兰模式，背后推动力是欧盟《建筑能效指令》（EPBD）。并非所有成员国都在趋同：瑞典和匈牙利仍是明显的例外。',
    metaDescription: '法国、奥地利、比利时和荷兰已允许仅需简单备案登记的800瓦阳台太阳能。德国于2025年12月加入该标准——希腊目前正就一项更严格的零并网馈电框架（《5299/2026号法律》，截至2026年7月20日）进行公众咨询，其背后动力是EPBD将适用范围扩展至外墙和阳台。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '德国以外、关注800瓦标准采用情况的欧盟阳台太阳能购买者',
    primaryTerm: 'eu 800瓦阳台太阳能标准',
    targetKeywords: ['800瓦阳台太阳能 欧盟', '希腊阳台太阳能800瓦', '欧盟阳台太阳能统一 2027'],
    leadAnswerBlock: '**德国800瓦阳台太阳能上限已于2025年12月依据DIN VDE V 0126-95正式确定，这使德国与法国、奥地利、比利时、荷兰早已采用的事实上的欧盟标准保持一致——而不是德国率先设立标准、其他国家跟随。** 希腊是最新加入的国家，但其机制要严格得多：依据《5299/2026号法律》的框架目前正处于公众咨询阶段，截至2026年7月20日，该框架提议将并网馈电上限定为800瓦，装机容量最高900瓦，允许搭配电池储能，但——与欧盟其他地区采用的、仅需备案且允许并网馈电的模式不同——完全不允许并网馈电（即「零馈电」设计）。2026年起分阶段生效的修订版《建筑能效指令》（EPBD）是推动这一更广泛的规则正式化进程的结构性动力，不过并非所有成员国都在趋同：瑞典和匈牙利仍是明显的例外。',
    quickAnswerTop: {
      zh: {
        question: '800瓦阳台太阳能标准是否正在欧盟范围内扩散？',
        answer: '是的——但德国是加入了一个已经存在的趋同进程，而不是在引领它，而且各国的机制并不相同。法国、奥地利、比利时和荷兰已允许仅需向电网运营商简单备案、且允许并网馈电的800瓦阳台太阳能；德国的DIN VDE V 0126-95标准（2025年12月）使德国与这一规范保持一致。希腊是最新加入的国家，但它提议的是更严格的「零并网馈电」模式——并网馈电上限800瓦，装机容量最高900瓦，完全不允许馈电——目前正依据《5299/2026号法律》进行公众咨询，截至2026年7月20日。欧盟修订版《建筑能效指令》（EPBD）是这一更广泛趋势背后的结构性推动力，而瑞典和匈牙利仍是插电式太阳能普遍不合法的例外。',
        bullets: [
          '法国、奥地利、比利时和荷兰已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案且允许并网馈电——德国于2025年12月加入了这一规范，而非制定了它',
          '希腊：依据《5299/2026号法律》的草案框架正在进行公众咨询，截至2026年7月20日，提议采取更严格的「零并网馈电」模式——并网馈电上限800瓦，装机容量最高900瓦，不允许并网馈电，允许搭配电池——这与欧盟其他地区采用的仅需备案模式在机制上有实质差异',
          'EPBD（自2026年起分阶段生效）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶',
          '瑞典和匈牙利是欧盟范围内最明显的例外——瑞典阻止此类系统接入标准电网，匈牙利则全面禁止，因此趋同并非普遍现象',
          '关于德国自身的800瓦具体规定（DIN VDE V 0126-95、960 Wp的Schuko插座子上限、《2023年可再生能源法》第8条），请参阅专门的德国指南，而非本篇跨境概览',
        ],
        updatedDate: '2026-07-18',
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
          '希腊的框架目前正依据《5299/2026号法律》进行正式公众咨询，截至2026年7月20日——该框架提议采取更严格的「零并网馈电」机制（并网馈电上限800瓦，装机容量最高900瓦，完全不允许并网馈电，允许搭配电池），而非欧盟其他地区采用的仅需备案模式。',
          '2026年起分阶段生效的修订版《建筑能效指令》（EPBD）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶。',
          '各国的模式并不完全一致：法国/奥地利/比利时/荷兰采用允许并网馈电的仅需备案登记，而希腊的草案是更严格的零馈电设计——「800瓦」在各地并不代表相同的规则。',
          '瑞典和匈牙利是欧盟范围内对这一趋同趋势最明显的例外——瑞典阻止此类系统接入标准电网，匈牙利则全面禁止。',
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
          '**2026年4月21日，希腊环境与能源部（YPEN）向希腊议会提交了一项新的RES法案，首次明确为插电式太阳能系统打开大门。** 在此之前，希腊——尽管是欧洲阳光最充足的国家之一——始终没有针对阳台太阳能的明确法律框架，导致相关安装长期处于灰色地带。截至本页最近一次更新，其实施框架正依据《5299/2026号法律》进行正式公众咨询，咨询期截至2026年7月20日。',
          '**希腊拟议的机制与法国、奥地利、比利时和荷兰采用的仅需备案、允许并网馈电的模式有本质区别，而且更为严格：这是一种「零并网馈电」设计。** 草案将并网馈电限制在800瓦，装机容量最高900瓦，系统将完全不允许向电网馈电。草案允许搭配电池储能，这在逻辑上也说得通，因为在这种设计下馈电没有任何补偿渠道——与其他地区的仅需备案模式不同，希腊的「800瓦」并不代表与德国、法国、奥地利、比利时或荷兰相同的规则。',
        ],
        callouts: [
          { type: 'warning', text: '截至2026年7月18日，希腊的框架正依据《5299/2026号法律》进行公众咨询，咨询期截至2026年7月20日——与本页自身的更新日期非常接近。在将本页所述任何细节（零馈电机制、800瓦/900瓦上限，或电池搭配许可）视为定论之前，请直接核实最终颁布的法律文本。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '这对德国以外意味着什么',
        content: [
          '**如果你所在的国家尚无明确的阳台太阳能规定，其发展方向在「形式」上如今已可预见，但在「机制」上则未必：预计将出现800瓦上限，以及与本国EPBD转化期限挂钩的时间表，而非无限期的不确定性——但具体规则可能因国家而异，从允许并网馈电的仅需备案模式（法国、奥地利、比利时、荷兰）到更严格的零并网馈电设计（希腊草案）都有可能。** 希腊是目前从灰色地带走向正式规则的最清晰案例，不过其零馈电路径也表明，仅凭「800瓦」并不能保证与欧盟其他地区采用相同的机制——随着EPBD转化期限的临近，更多欧盟成员国可能会将规则正式化，但未必采用同一模式，而瑞典和匈牙利则说明趋同并非板上钉钉。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '是德国制定了欧盟的800瓦阳台太阳能标准吗？', a: '不是——在德国于2025年12月确定自身的DIN VDE V 0126-95标准之前，法国、奥地利、比利时和荷兰早已允许最高800瓦、仅需简单备案登记的阳台太阳能。德国是加入了一个既有的欧盟事实规范，而非创立了新标准。' },
          { q: '希腊在2026年针对阳台太阳能采取了哪些措施？', a: '希腊已于2026年4月21日向议会提交了一项RES法案，其实施框架目前正依据《5299/2026号法律》进行公众咨询，咨询期截至2026年7月20日。与欧盟其他地区采用的仅需备案模式不同，希腊的草案提议采取更严格的「零并网馈电」设计：并网馈电上限800瓦，装机容量最高900瓦，不允许并网馈电，允许搭配电池储能。在将其视为已确定的法律之前，请核实最终颁布的状态。' },
          { q: '希腊的框架是否允许将多余电力输出至电网？', a: '不允许——根据正在公众咨询中的草案框架（《5299/2026号法律》，截至2026年7月20日），系统的并网馈电被限制在800瓦，且完全不允许并网馈电，这是一种比法国、奥地利、比利时和荷兰采用的仅需备案、允许馈电模式更严格的「零馈电」设计。允许搭配电池储能，这是利用无法馈电的电力的一种方式。' },
          { q: '什么是EPBD？它对阳台太阳能为何重要？', a: '修订版《建筑能效指令》（EPBD）自2026年起分阶段生效，将欧盟建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶——这使阳台太阳能对成员国而言成为一项合规机制，而非可自行选择的政策事项。' },
          { q: '阳台太阳能在整个欧盟范围内都合法吗？', a: '不是。尽管许多成员国正朝着800瓦式框架发展，但瑞典阻止此类系统接入标准电网，匈牙利则全面禁止——朝共同欧盟方案趋同的趋势确实存在，但并非普遍适用。' },
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
