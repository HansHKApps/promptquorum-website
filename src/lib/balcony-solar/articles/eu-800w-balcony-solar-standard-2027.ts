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
    intro: 'Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, and the Netherlands — rather than setting a new precedent others are following. This page tracks how that convergence is spreading, led by Greece\'s 2026 legislative push and the EU\'s Energy Performance of Buildings Directive.',
    metaDescription: 'France, Austria, and the Netherlands already allow 800W balcony solar with simple notification-only registration. Germany joined that standard in December 2025 — now Greece is following via 2026 legislation, driven by the EPBD\'s extension to facades and balconies.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'EU balcony solar buyers outside Germany tracking 800W standard adoption',
    primaryTerm: 'eu 800w balcony solar standard',
    targetKeywords: ['800w balcony solar eu', 'greece balcony solar 800w', 'eu balcony solar harmonization 2027'],
    leadAnswerBlock: '**Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, and the Netherlands — rather than setting a new precedent others are following.** Greece is the newest entrant: a RES bill submitted to the Greek Parliament by the Ministry of Environment and Energy (YPEN) on April 21, 2026 opens the door to an 800W, notification-only framework via grid operator DEDDIE\'s digital platform, with a ministerial decision expected to finalize details. The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it explicitly extends building-solar mandates to facades, balconies, and terraces, giving member states a directive-level reason to formalize rules on a predictable timeline.',
    quickAnswerTop: {
      en: {
        question: 'Is the 800W balcony solar standard spreading across the EU?',
        answer: 'Yes — but Germany is joining an existing convergence, not leading one. France, Austria, and the Netherlands already permit 800W balcony solar with simple notification-only registration; Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that norm. Greece is the newest country moving toward the same 800W, notification-only model, via a RES bill submitted to parliament in April 2026. The EU\'s revised Energy Performance of Buildings Directive (EPBD), which extends building-solar mandates to facades and balconies, is the structural driver behind the wider trend.',
        bullets: [
          'France, Austria, and the Netherlands already allow up to 800W balcony solar with simple grid-operator notification — Germany joined this norm in December 2025, it did not set it',
          'Greece: RES bill submitted to parliament April 21, 2026, opening an 800W, notification-only framework via grid operator DEDDIE\'s digital platform — a ministerial decision on final details was expected May 2026 and should be reconfirmed before publish',
          'The EPBD (entering into force gradually from 2026) is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops',
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
          'France, Austria, and the Netherlands already permit balcony solar up to 800W with simple grid-operator notification — Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that existing norm, not the other way around.',
          'Greece submitted a RES bill to parliament on April 21, 2026 opening an 800W, notification-only framework via grid operator DEDDIE\'s digital platform; a ministerial decision finalizing details was expected in May 2026 and should be reconfirmed before this page is treated as current.',
          'The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops.',
          'The pattern across these countries: an 800W cap plus notification-only registration, rather than full electrician-installed permitting.',
          'For Germany\'s specific mechanics — the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, and § 8 EEG 2023 — see the dedicated Germany guide rather than this cross-border overview.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'The EPBD Is Driving Convergence',
        content: [
          '**The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, explicitly extends solar-installation mandates to facades, balconies, and terraces — not just rooftops.** This reframes balcony solar from a consumer lifestyle choice into a compliance mechanism for member states\' building-decarbonization obligations. Countries that previously treated plug-in solar as a regulatory afterthought now have a directive-level reason to formalize rules quickly, which is the immediate context for Greece\'s 2026 legislative push.',
          'France, Austria, and the Netherlands already permit balcony solar up to 800W with only a simple grid-operator notification requirement, predating Germany\'s own finalization. Germany\'s DIN VDE V 0126-95, finalized in December 2025, brought it in line with that existing de facto standard rather than establishing a new one — the EPBD is now extending the same underlying logic to the rest of the bloc.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Greece: The Newest Entrant',
        content: [
          '**A new RES bill was submitted to the Greek Parliament by the Ministry of Environment and Energy (YPEN) on April 21, 2026, explicitly opening the door for plug-in solar systems for the first time.** Until now, Greece — despite being one of the sunniest countries in Europe — had no clear legal framework for balcony solar, leaving installations in a grey zone.',
          'The bill points toward an 800W cap with notification-only registration through grid operator DEDDIE\'s new digital platform, with a ministerial decision expected to finalize the detailed framework.',
        ],
        callouts: [
          { type: 'warning', text: 'As of the April 2026 source, the Greek ministerial decision finalizing the 800W framework was "expected in May 2026" but not yet confirmed published — verify current status before citing this as finalized law.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'What This Means Outside Germany',
        content: [
          '**If your country doesn\'t yet have explicit balcony solar rules, the direction of travel is now predictable: expect an 800W cap, simplified notification-based registration rather than full electrician-installed permitting, and a timeline tied to your country\'s EPBD transposition deadline rather than open-ended uncertainty.** Greece is the clearest current example of a country moving from grey-zone to formalized rules under this pattern — additional EU member states are likely to follow the same template as EPBD transposition deadlines approach, though this page currently documents only the confirmed Greek case.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Did Germany set the EU\'s 800W balcony solar standard?', a: 'No — France, Austria, and the Netherlands already permitted balcony solar up to 800W with simple notification-only registration before Germany finalized its own DIN VDE V 0126-95 standard in December 2025. Germany joined an existing de facto EU norm rather than creating a new one.' },
          { q: 'What is Greece doing about balcony solar in 2026?', a: 'Greece\'s Ministry of Environment and Energy (YPEN) submitted a RES bill to parliament on April 21, 2026, opening the door to an 800W, notification-only framework via grid operator DEDDIE\'s digital platform. A ministerial decision finalizing details was expected in May 2026 — confirm current status before treating it as final.' },
          { q: 'What is the EPBD and why does it matter for balcony solar?', a: 'The revised Energy Performance of Buildings Directive (EPBD) enters into force gradually from 2026 and extends EU building-solar mandates to facades, balconies, and terraces, not just rooftops — turning balcony solar into a compliance mechanism for member states rather than a discretionary policy choice.' },
          { q: 'Where can I find Germany\'s specific balcony solar rules?', a: 'See the dedicated Germany guide, which covers the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko-socket sub-cap, and the § 8 EEG 2023 legal text in full — this page focuses on cross-border harmonization rather than repeating those mechanics.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — the full German 800W/DIN VDE V 0126-95 deep-dive this article references rather than repeats',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    title: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    seoTitle: 'Der 800-Watt-Balkonkraftwerk-Standard: EU-Harmonisierung erklärt (2027)',
    intro: 'Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 mit der DIN VDE V 0126-95 endgültig festgelegt, bringt das Land in Einklang mit einem De-facto-EU-Standard, den Frankreich, Österreich und die Niederlande bereits anwenden — statt einen neuen Präzedenzfall zu setzen, dem andere folgen. Diese Seite verfolgt, wie sich diese Angleichung ausbreitet, angeführt von Griechenlands Gesetzesinitiative 2026 und der EU-Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD).',
    metaDescription: 'Frankreich, Österreich und die Niederlande erlauben bereits 800-Watt-Balkonkraftwerke mit einfacher, meldepflichtiger Registrierung. Deutschland ist diesem Standard im Dezember 2025 beigetreten — nun folgt Griechenland mit einer Gesetzgebung 2026, angetrieben durch die Ausweitung der EPBD auf Fassaden und Balkone.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'EU-Käufer von Balkonkraftwerken außerhalb Deutschlands, die die Verbreitung des 800-Watt-Standards verfolgen',
    primaryTerm: 'eu 800-watt-balkonkraftwerk-standard',
    targetKeywords: ['800 watt balkonkraftwerk eu', 'griechenland balkonkraftwerk 800 watt', 'eu balkonkraftwerk harmonisierung 2027'],
    leadAnswerBlock: '**Deutschlands 800-Watt-Grenze für Balkonkraftwerke, im Dezember 2025 mit der DIN VDE V 0126-95 endgültig festgelegt, bringt das Land in Einklang mit einem De-facto-EU-Standard, den Frankreich, Österreich und die Niederlande bereits anwenden — statt einen neuen Präzedenzfall zu setzen, dem andere folgen.** Griechenland ist der jüngste Neuzugang: Ein RES-Gesetzentwurf, den das griechische Ministerium für Umwelt und Energie (YPEN) am 21. April 2026 im Parlament eingebracht hat, öffnet die Tür zu einem 800-Watt-Rahmen mit reiner Meldepflicht über die digitale Plattform des Netzbetreibers DEDDIE, wobei eine ministerielle Entscheidung die Details final regeln soll. Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber dahinter — sie weitet die Solarpflichten für Gebäude ausdrücklich auf Fassaden, Balkone und Terrassen aus und gibt den Mitgliedstaaten damit einen richtlinienbasierten Grund, Regeln nach einem planbaren Zeitplan zu formalisieren.',
    quickAnswerTop: {
      de: {
        question: 'Verbreitet sich der 800-Watt-Standard für Balkonkraftwerke in der gesamten EU?',
        answer: 'Ja — aber Deutschland tritt einer bestehenden Angleichung bei, statt sie anzuführen. Frankreich, Österreich und die Niederlande erlauben bereits 800-Watt-Balkonkraftwerke mit einfacher, meldepflichtiger Registrierung; Deutschlands DIN VDE V 0126-95 (Dezember 2025) hat das Land in Einklang mit dieser Norm gebracht. Griechenland ist das jüngste Land, das sich auf dasselbe 800-Watt-Modell mit reiner Meldepflicht zubewegt — über einen RES-Gesetzentwurf, der im April 2026 ins Parlament eingebracht wurde. Die überarbeitete EU-Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die Solarpflichten für Gebäude auf Fassaden und Balkone ausweitet, ist der strukturelle Treiber hinter diesem breiteren Trend.',
        bullets: [
          'Frankreich, Österreich und die Niederlande erlauben bereits bis zu 800 Watt Balkonkraftwerk mit einfacher Meldung beim Netzbetreiber — Deutschland ist dieser Norm im Dezember 2025 beigetreten, hat sie nicht gesetzt',
          'Griechenland: RES-Gesetzentwurf am 21. April 2026 im Parlament eingebracht, der einen 800-Watt-Rahmen mit reiner Meldepflicht über die digitale Plattform des Netzbetreibers DEDDIE eröffnet — eine ministerielle Entscheidung zu den Details wurde für Mai 2026 erwartet und sollte vor Veröffentlichung erneut bestätigt werden',
          'Die EPBD (ab 2026 schrittweise in Kraft) ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer',
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
          'Frankreich, Österreich und die Niederlande erlauben Balkonkraftwerke bereits bis 800 Watt mit einfacher Meldung beim Netzbetreiber — Deutschlands DIN VDE V 0126-95 (Dezember 2025) hat das Land in Einklang mit dieser bestehenden Norm gebracht, nicht umgekehrt.',
          'Griechenland hat am 21. April 2026 einen RES-Gesetzentwurf ins Parlament eingebracht, der einen 800-Watt-Rahmen mit reiner Meldepflicht über die digitale Plattform des Netzbetreibers DEDDIE eröffnet; eine ministerielle Entscheidung zu den Details wurde für Mai 2026 erwartet und sollte erneut bestätigt werden, bevor diese Seite als aktuell gilt.',
          'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, ist der strukturelle Treiber — sie weitet Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer.',
          'Das Muster in diesen Ländern: eine 800-Watt-Grenze plus reine Meldepflicht bei der Registrierung, statt vollständiger, durch einen Elektriker durchgeführter Genehmigungsverfahren.',
          'Zu Deutschlands konkreten Regelungen — der 800-Watt-Wechselrichtergrenze, DIN VDE V 0126-95, der 960-Wp-Schuko-Untergrenze und § 8 EEG 2023 — siehe den eigenen Deutschland-Leitfaden statt dieser länderübergreifenden Übersicht.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'Die EPBD treibt die Angleichung voran',
        content: [
          '**Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD), die ab 2026 schrittweise in Kraft tritt, weitet Solarpflichten für Gebäude ausdrücklich auf Fassaden, Balkone und Terrassen aus — nicht nur auf Dächer.** Das rückt Balkonkraftwerke von einer privaten Lifestyle-Entscheidung zu einem Compliance-Mechanismus für die Gebäude-Dekarbonisierungspflichten der Mitgliedstaaten. Länder, die steckerfertige Solaranlagen bislang eher als regulatorisches Randthema behandelt haben, haben nun einen richtlinienbasierten Grund, Regeln zügig zu formalisieren — das ist der unmittelbare Kontext für Griechenlands Gesetzesinitiative 2026.',
          'Frankreich, Österreich und die Niederlande erlauben Balkonkraftwerke bereits bis 800 Watt mit lediglich einer einfachen Meldung beim Netzbetreiber — noch vor Deutschlands eigener finaler Festlegung. Deutschlands DIN VDE V 0126-95, im Dezember 2025 final festgelegt, hat das Land in Einklang mit diesem bestehenden De-facto-Standard gebracht, statt einen neuen zu schaffen — die EPBD weitet nun dieselbe zugrunde liegende Logik auf den Rest der EU aus.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Griechenland: Der jüngste Neuzugang',
        content: [
          '**Am 21. April 2026 hat das griechische Ministerium für Umwelt und Energie (YPEN) einen neuen RES-Gesetzentwurf ins Parlament eingebracht, der erstmals ausdrücklich die Tür für steckerfertige Solaranlagen öffnet.** Bislang hatte Griechenland — obwohl eines der sonnenreichsten Länder Europas — keinen klaren rechtlichen Rahmen für Balkonkraftwerke, wodurch Installationen in einer Grauzone blieben.',
          'Der Gesetzentwurf zielt auf eine 800-Watt-Grenze mit reiner Meldepflicht über die neue digitale Plattform des Netzbetreibers DEDDIE ab, wobei eine ministerielle Entscheidung den detaillierten Rahmen final regeln soll.',
        ],
        callouts: [
          { type: 'warning', text: 'Nach dem Stand der Quelle vom April 2026 wurde die griechische ministerielle Entscheidung zur finalen Festlegung des 800-Watt-Rahmens „für Mai 2026 erwartet", war aber noch nicht als veröffentlicht bestätigt — prüfen Sie den aktuellen Stand, bevor Sie dies als geltendes Recht zitieren.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Was das außerhalb Deutschlands bedeutet',
        content: [
          '**Wenn es in Ihrem Land noch keine expliziten Balkonkraftwerk-Regeln gibt, ist die Entwicklungsrichtung inzwischen absehbar: Rechnen Sie mit einer 800-Watt-Grenze, einer vereinfachten, meldepflichtbasierten Registrierung statt vollständiger, durch einen Elektriker durchgeführter Genehmigungsverfahren, und einem Zeitplan, der an die EPBD-Umsetzungsfrist Ihres Landes gekoppelt ist statt an offene Unsicherheit.** Griechenland ist derzeit das klarste Beispiel für ein Land, das nach diesem Muster von der Grauzone zu formalisierten Regeln übergeht — weitere EU-Mitgliedstaaten dürften diesem Vorbild folgen, sobald sich EPBD-Umsetzungsfristen nähern, auch wenn diese Seite aktuell nur den bestätigten griechischen Fall dokumentiert.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Hat Deutschland den 800-Watt-Standard der EU für Balkonkraftwerke gesetzt?', a: 'Nein — Frankreich, Österreich und die Niederlande erlaubten Balkonkraftwerke bereits bis 800 Watt mit einfacher, meldepflichtiger Registrierung, bevor Deutschland im Dezember 2025 seinen eigenen DIN-VDE-V-0126-95-Standard final festlegte. Deutschland ist einer bestehenden De-facto-EU-Norm beigetreten, statt eine neue zu schaffen.' },
          { q: 'Was unternimmt Griechenland 2026 in Sachen Balkonkraftwerke?', a: 'Das griechische Ministerium für Umwelt und Energie (YPEN) hat am 21. April 2026 einen RES-Gesetzentwurf ins Parlament eingebracht, der die Tür zu einem 800-Watt-Rahmen mit reiner Meldepflicht über die digitale Plattform des Netzbetreibers DEDDIE öffnet. Eine ministerielle Entscheidung zu den Details wurde für Mai 2026 erwartet — bestätigen Sie den aktuellen Stand, bevor Sie dies als final betrachten.' },
          { q: 'Was ist die EPBD, und warum ist sie für Balkonkraftwerke relevant?', a: 'Die überarbeitete Richtlinie über die Gesamtenergieeffizienz von Gebäuden (EPBD) tritt ab 2026 schrittweise in Kraft und weitet die EU-Solarpflichten für Gebäude auf Fassaden, Balkone und Terrassen aus, nicht nur auf Dächer — sie macht Balkonkraftwerke damit zu einem Compliance-Mechanismus für die Mitgliedstaaten statt zu einer freiwilligen politischen Entscheidung.' },
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
    intro: 'El límite de 800 W para energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, pone al país en línea con un estándar de facto de la UE ya utilizado por Francia, Austria y los Países Bajos — en lugar de establecer un nuevo precedente que otros sigan. Esta página hace seguimiento de cómo se extiende esa convergencia, impulsada por la iniciativa legislativa de Grecia en 2026 y la Directiva de la UE sobre la Eficiencia Energética de los Edificios.',
    metaDescription: 'Francia, Austria y los Países Bajos ya permiten energía solar de balcón de 800 W con un registro de simple notificación. Alemania se sumó a ese estándar en diciembre de 2025 — ahora Grecia lo sigue mediante una ley de 2026, impulsada por la ampliación de la EPBD a fachadas y balcones.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón en la UE fuera de Alemania que siguen la adopción del estándar de 800 W',
    primaryTerm: 'estándar de 800 w para energía solar de balcón en la ue',
    targetKeywords: ['energía solar de balcón 800w ue', 'grecia energía solar de balcón 800w', 'armonización ue energía solar de balcón 2027'],
    leadAnswerBlock: '**El límite de 800 W para energía solar de balcón en Alemania, finalizado bajo la norma DIN VDE V 0126-95 en diciembre de 2025, pone al país en línea con un estándar de facto de la UE ya utilizado por Francia, Austria y los Países Bajos — en lugar de establecer un nuevo precedente que otros sigan.** Grecia es la incorporación más reciente: un proyecto de ley de energías renovables presentado al Parlamento griego por el Ministerio de Medio Ambiente y Energía (YPEN) el 21 de abril de 2026 abre la puerta a un marco de 800 W con registro de simple notificación a través de la plataforma digital del operador de red DEDDIE, y se espera una decisión ministerial que finalice los detalles. La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, es el motor estructural — amplía explícitamente los mandatos de energía solar en edificios a fachadas, balcones y terrazas, dando a los Estados miembros un motivo, a nivel de directiva, para formalizar normas en un plazo previsible.',
    quickAnswerTop: {
      es: {
        question: '¿Se está extendiendo el estándar de 800 W para energía solar de balcón por toda la UE?',
        answer: 'Sí — pero Alemania se está sumando a una convergencia existente, no la está liderando. Francia, Austria y los Países Bajos ya permiten energía solar de balcón de 800 W con un registro de simple notificación; la norma alemana DIN VDE V 0126-95 (diciembre de 2025) puso al país en línea con esa norma. Grecia es el país más reciente que avanza hacia el mismo modelo de 800 W con registro de simple notificación, mediante un proyecto de ley de energías renovables presentado al parlamento en abril de 2026. La Directiva revisada de la UE sobre la Eficiencia Energética de los Edificios (EPBD), que amplía los mandatos de energía solar en edificios a fachadas y balcones, es el motor estructural detrás de esta tendencia más amplia.',
        bullets: [
          'Francia, Austria y los Países Bajos ya permiten hasta 800 W de energía solar de balcón con una simple notificación al operador de red — Alemania se sumó a esta norma en diciembre de 2025, no la estableció',
          'Grecia: proyecto de ley de energías renovables presentado al parlamento el 21 de abril de 2026, que abre un marco de 800 W con registro de simple notificación a través de la plataforma digital del operador de red DEDDIE — se esperaba una decisión ministerial sobre los detalles finales para mayo de 2026 y debe reconfirmarse antes de publicar',
          'La EPBD (que entra en vigor de forma gradual desde 2026) es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados',
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
          'Francia, Austria y los Países Bajos ya permiten energía solar de balcón hasta 800 W con una simple notificación al operador de red — la norma alemana DIN VDE V 0126-95 (diciembre de 2025) puso al país en línea con esa norma existente, y no al revés.',
          'Grecia presentó un proyecto de ley de energías renovables al parlamento el 21 de abril de 2026 que abre un marco de 800 W con registro de simple notificación a través de la plataforma digital del operador de red DEDDIE; se esperaba una decisión ministerial que finalizara los detalles para mayo de 2026, y debe reconfirmarse antes de considerar esta página como vigente.',
          'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, es el motor estructural — amplía los mandatos de energía solar en edificios a fachadas, balcones y terrazas, no solo a los tejados.',
          'El patrón en estos países: un límite de 800 W más un registro de simple notificación, en lugar de una tramitación completa con instalación por electricista autorizado.',
          'Para los detalles específicos de Alemania — el límite de 800 W del inversor, DIN VDE V 0126-95, el sublímite de 960 Wp para el enchufe Schuko y el § 8 EEG 2023 — consulta la guía dedicada a Alemania en lugar de este resumen transfronterizo.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'La EPBD está impulsando la convergencia',
        content: [
          '**La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD), que entra en vigor de forma gradual desde 2026, amplía explícitamente los mandatos de instalación solar a fachadas, balcones y terrazas — no solo a los tejados.** Esto convierte la energía solar de balcón de una elección de estilo de vida del consumidor en un mecanismo de cumplimiento para las obligaciones de descarbonización de edificios de los Estados miembros. Los países que antes trataban la energía solar enchufable como un asunto regulatorio secundario ahora tienen un motivo, a nivel de directiva, para formalizar normas con rapidez, lo que constituye el contexto inmediato de la iniciativa legislativa de Grecia en 2026.',
          'Francia, Austria y los Países Bajos ya permiten energía solar de balcón hasta 800 W con solo un requisito de simple notificación al operador de red, algo anterior a la propia finalización del estándar alemán. La norma alemana DIN VDE V 0126-95, finalizada en diciembre de 2025, puso al país en línea con ese estándar de facto existente en lugar de establecer uno nuevo — la EPBD extiende ahora esa misma lógica al resto del bloque.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grecia: la incorporación más reciente',
        content: [
          '**El 21 de abril de 2026, el Ministerio de Medio Ambiente y Energía (YPEN) presentó un nuevo proyecto de ley de energías renovables al Parlamento griego, abriendo explícitamente por primera vez la puerta a los sistemas solares enchufables.** Hasta ahora, Grecia — pese a ser uno de los países más soleados de Europa — carecía de un marco legal claro para la energía solar de balcón, lo que dejaba las instalaciones en una zona gris.',
          'El proyecto de ley apunta a un límite de 800 W con registro de simple notificación a través de la nueva plataforma digital del operador de red DEDDIE, y se espera una decisión ministerial que finalice el marco detallado.',
        ],
        callouts: [
          { type: 'warning', text: 'Según la fuente de abril de 2026, se «esperaba» que la decisión ministerial griega que finaliza el marco de 800 W llegara «en mayo de 2026», pero aún no se había confirmado su publicación — verifica el estado actual antes de citar esto como ley finalizada.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'Qué significa esto fuera de Alemania',
        content: [
          '**Si tu país aún no tiene normas explícitas sobre energía solar de balcón, la dirección que sigue la tendencia ya es previsible: espera un límite de 800 W, un registro simplificado basado en notificación en lugar de una tramitación completa con instalación por electricista autorizado, y un calendario ligado al plazo de transposición de la EPBD de tu país en lugar de una incertidumbre abierta.** Grecia es actualmente el ejemplo más claro de un país que pasa de la zona gris a normas formalizadas siguiendo este patrón — es probable que más Estados miembros de la UE sigan el mismo modelo a medida que se acerquen sus plazos de transposición de la EPBD, aunque esta página documenta por ahora solo el caso griego confirmado.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Fue Alemania quien estableció el estándar de 800 W de la UE para energía solar de balcón?', a: 'No — Francia, Austria y los Países Bajos ya permitían energía solar de balcón hasta 800 W con un registro de simple notificación antes de que Alemania finalizara su propio estándar DIN VDE V 0126-95 en diciembre de 2025. Alemania se sumó a una norma de facto de la UE ya existente, en lugar de crear una nueva.' },
          { q: '¿Qué está haciendo Grecia respecto a la energía solar de balcón en 2026?', a: 'El Ministerio de Medio Ambiente y Energía (YPEN) de Grecia presentó un proyecto de ley de energías renovables al parlamento el 21 de abril de 2026, que abre la puerta a un marco de 800 W con registro de simple notificación a través de la plataforma digital del operador de red DEDDIE. Se esperaba una decisión ministerial que finalizara los detalles para mayo de 2026 — confirma el estado actual antes de considerarlo definitivo.' },
          { q: '¿Qué es la EPBD y por qué importa para la energía solar de balcón?', a: 'La Directiva revisada sobre la Eficiencia Energética de los Edificios (EPBD) entra en vigor de forma gradual desde 2026 y amplía los mandatos de energía solar en edificios de la UE a fachadas, balcones y terrazas, no solo a los tejados — convirtiendo la energía solar de balcón en un mecanismo de cumplimiento para los Estados miembros en lugar de una decisión política discrecional.' },
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
    intro: "Le plafond de 800 W pour le solaire de balcon en Allemagne, finalisé par la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur une norme de facto déjà en vigueur en France, en Autriche et aux Pays-Bas — plutôt que d'établir un nouveau précédent que d'autres suivraient. Cette page suit la propagation de cette convergence, portée par l'initiative législative grecque de 2026 et la directive européenne sur la performance énergétique des bâtiments.",
    metaDescription: "La France, l'Autriche et les Pays-Bas autorisent déjà le solaire de balcon à 800 W avec un simple enregistrement par notification. L'Allemagne a rejoint cette norme en décembre 2025 — la Grèce lui emboîte désormais le pas via une loi de 2026, portée par l'extension de la DPEB aux façades et aux balcons.",
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de solaire de balcon dans l'UE hors Allemagne suivant l'adoption de la norme des 800 W",
    primaryTerm: 'norme européenne des 800 w pour le solaire de balcon',
    targetKeywords: ['solaire de balcon 800w ue', 'grèce solaire de balcon 800w', 'harmonisation ue solaire de balcon 2027'],
    leadAnswerBlock: "**Le plafond de 800 W pour le solaire de balcon en Allemagne, finalisé par la norme DIN VDE V 0126-95 en décembre 2025, aligne le pays sur une norme de facto déjà en vigueur en France, en Autriche et aux Pays-Bas — plutôt que d'établir un nouveau précédent que d'autres suivraient.** La Grèce est la dernière arrivée : un projet de loi sur les énergies renouvelables déposé au Parlement grec par le ministère de l'Environnement et de l'Énergie (YPEN) le 21 avril 2026 ouvre la voie à un cadre de 800 W à simple notification via la plateforme numérique du gestionnaire de réseau DEDDIE, une décision ministérielle devant en finaliser les modalités. La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, en est le moteur structurel — elle étend explicitement les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, donnant aux États membres un motif, au niveau de la directive, de formaliser leurs règles selon un calendrier prévisible.",
    quickAnswerTop: {
      fr: {
        question: "La norme des 800 W pour le solaire de balcon se répand-elle dans toute l'UE ?",
        answer: "Oui — mais l'Allemagne rejoint une convergence déjà existante, elle ne la mène pas. La France, l'Autriche et les Pays-Bas autorisent déjà le solaire de balcon à 800 W avec un simple enregistrement par notification ; la norme allemande DIN VDE V 0126-95 (décembre 2025) a aligné le pays sur cette norme. La Grèce est le dernier pays à évoluer vers ce même modèle de 800 W à notification simple, via un projet de loi sur les énergies renouvelables déposé au parlement en avril 2026. La directive européenne révisée sur la performance énergétique des bâtiments (DPEB), qui étend les obligations solaires des bâtiments aux façades et aux balcons, est le moteur structurel de cette tendance plus large.",
        bullets: [
          "La France, l'Autriche et les Pays-Bas autorisent déjà jusqu'à 800 W de solaire de balcon avec une simple notification au gestionnaire de réseau — l'Allemagne a rejoint cette norme en décembre 2025, elle ne l'a pas créée",
          "Grèce : projet de loi sur les énergies renouvelables déposé au parlement le 21 avril 2026, ouvrant un cadre de 800 W à notification simple via la plateforme numérique du gestionnaire de réseau DEDDIE — une décision ministérielle sur les modalités finales était attendue en mai 2026 et doit être reconfirmée avant publication",
          "La DPEB (entrant progressivement en vigueur à partir de 2026) est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures",
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
          "La France, l'Autriche et les Pays-Bas autorisent déjà le solaire de balcon jusqu'à 800 W avec une simple notification au gestionnaire de réseau — la norme allemande DIN VDE V 0126-95 (décembre 2025) a aligné le pays sur cette norme existante, et non l'inverse.",
          "La Grèce a déposé un projet de loi sur les énergies renouvelables au parlement le 21 avril 2026, ouvrant un cadre de 800 W à notification simple via la plateforme numérique du gestionnaire de réseau DEDDIE ; une décision ministérielle finalisant les modalités était attendue en mai 2026 et doit être reconfirmée avant de considérer cette page comme à jour.",
          "La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, est le moteur structurel — elle étend les obligations solaires des bâtiments aux façades, aux balcons et aux terrasses, pas seulement aux toitures.",
          "Le schéma commun à ces pays : un plafond de 800 W associé à un enregistrement par simple notification, plutôt qu'une procédure complète avec installation par un électricien agréé.",
          "Pour les modalités propres à l'Allemagne — le plafond de 800 W de l'onduleur, DIN VDE V 0126-95, le sous-plafond de 960 Wp pour la prise Schuko et le § 8 EEG 2023 — voir le guide dédié à l'Allemagne plutôt que cette vue d'ensemble transfrontalière.",
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'La DPEB, moteur de la convergence',
        content: [
          "**La directive révisée sur la performance énergétique des bâtiments (DPEB), qui entre progressivement en vigueur à partir de 2026, étend explicitement les obligations d'installation solaire aux façades, aux balcons et aux terrasses — pas seulement aux toitures.** Le solaire de balcon passe ainsi d'un choix de consommation à un mécanisme de mise en conformité pour les obligations de décarbonation des bâtiments des États membres. Les pays qui traitaient jusqu'ici le solaire enchufable comme une question réglementaire secondaire disposent désormais d'un motif, au niveau de la directive, pour formaliser rapidement leurs règles — c'est le contexte immédiat de l'initiative législative grecque de 2026.",
          "La France, l'Autriche et les Pays-Bas autorisent déjà le solaire de balcon jusqu'à 800 W avec pour seule exigence une simple notification au gestionnaire de réseau, antérieure à la propre finalisation allemande. La norme allemande DIN VDE V 0126-95, finalisée en décembre 2025, a aligné le pays sur cette norme de facto existante plutôt que d'en établir une nouvelle — la DPEB étend désormais la même logique de fond au reste du bloc.",
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grèce : la dernière arrivée',
        content: [
          "**Un nouveau projet de loi sur les énergies renouvelables a été déposé au Parlement grec par le ministère de l'Environnement et de l'Énergie (YPEN) le 21 avril 2026, ouvrant explicitement pour la première fois la voie aux systèmes solaires enchufables.** Jusqu'à présent, la Grèce — pourtant l'un des pays les plus ensoleillés d'Europe — ne disposait d'aucun cadre juridique clair pour le solaire de balcon, laissant les installations dans une zone grise.",
          "Le projet de loi prévoit un plafond de 800 W avec enregistrement par simple notification via la nouvelle plateforme numérique du gestionnaire de réseau DEDDIE, une décision ministérielle devant finaliser le cadre détaillé.",
        ],
        callouts: [
          { type: 'warning', text: "Selon la source d'avril 2026, la décision ministérielle grecque finalisant le cadre des 800 W était « attendue en mai 2026 » mais sa publication n'était pas encore confirmée — vérifiez le statut actuel avant de citer ceci comme un texte de loi finalisé." },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: "Ce que cela signifie hors d'Allemagne",
        content: [
          "**Si votre pays n'a pas encore de règles explicites sur le solaire de balcon, la trajectoire est désormais prévisible : attendez-vous à un plafond de 800 W, à un enregistrement simplifié par notification plutôt qu'à une procédure complète avec installation par un électricien agréé, et à un calendrier lié à la date de transposition de la DPEB de votre pays plutôt qu'à une incertitude ouverte.** La Grèce est aujourd'hui l'exemple le plus clair d'un pays passant d'une zone grise à des règles formalisées selon ce schéma — d'autres États membres de l'UE devraient suivre le même modèle à l'approche de leurs échéances de transposition de la DPEB, même si cette page ne documente pour l'instant que le cas grec confirmé.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: "L'Allemagne a-t-elle fixé la norme européenne des 800 W pour le solaire de balcon ?", a: "Non — la France, l'Autriche et les Pays-Bas autorisaient déjà le solaire de balcon jusqu'à 800 W avec un simple enregistrement par notification avant que l'Allemagne ne finalise sa propre norme DIN VDE V 0126-95 en décembre 2025. L'Allemagne a rejoint une norme de facto européenne déjà existante plutôt que d'en créer une nouvelle." },
          { q: 'Que fait la Grèce concernant le solaire de balcon en 2026 ?', a: "Le ministère grec de l'Environnement et de l'Énergie (YPEN) a déposé un projet de loi sur les énergies renouvelables au parlement le 21 avril 2026, ouvrant la voie à un cadre de 800 W à notification simple via la plateforme numérique du gestionnaire de réseau DEDDIE. Une décision ministérielle finalisant les modalités était attendue en mai 2026 — vérifiez le statut actuel avant de la considérer comme définitive." },
          { q: 'Qu\'est-ce que la DPEB et pourquoi importe-t-elle pour le solaire de balcon ?', a: "La directive révisée sur la performance énergétique des bâtiments (DPEB) entre progressivement en vigueur à partir de 2026 et étend les obligations solaires des bâtiments de l'UE aux façades, aux balcons et aux terrasses, pas seulement aux toitures — transformant le solaire de balcon en mécanisme de mise en conformité pour les États membres plutôt qu'en choix politique discrétionnaire." },
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
    intro: 'الحد الأقصى البالغ 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي تم إقراره نهائيًا بموجب DIN VDE V 0126-95 في ديسمبر 2025، يجعل ألمانيا متوافقة مع معيار أوروبي بحكم الأمر الواقع تستخدمه بالفعل فرنسا والنمسا وهولندا — وليس إرساءً لسابقة جديدة تتبعها دول أخرى. تتابع هذه الصفحة كيفية انتشار هذا التقارب، الذي تقوده مبادرة اليونان التشريعية لعام 2026 وتوجيه الاتحاد الأوروبي بشأن الأداء الطاقي للمباني (EPBD).',
    metaDescription: 'تسمح فرنسا والنمسا وهولندا بالفعل بطاقة شمسية للشرفات بقدرة 800 واط عبر تسجيل بإخطار بسيط فقط. انضمت ألمانيا إلى هذا المعيار في ديسمبر 2025 — والآن تحذو اليونان حذوها عبر تشريع عام 2026، مدفوعةً بتوسيع توجيه EPBD ليشمل الواجهات والشرفات.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفات في الاتحاد الأوروبي خارج ألمانيا الذين يتابعون تبنّي معيار 800 واط',
    primaryTerm: 'معيار 800 واط للطاقة الشمسية على الشرفات في الاتحاد الأوروبي',
    targetKeywords: ['طاقة شمسية للشرفة 800 واط الاتحاد الأوروبي', 'اليونان طاقة شمسية للشرفة 800 واط', 'توحيد الاتحاد الأوروبي للطاقة الشمسية للشرفات 2027'],
    leadAnswerBlock: '**الحد الأقصى البالغ 800 واط للطاقة الشمسية على الشرفات في ألمانيا، الذي تم إقراره نهائيًا بموجب DIN VDE V 0126-95 في ديسمبر 2025، يجعل ألمانيا متوافقة مع معيار أوروبي بحكم الأمر الواقع تستخدمه بالفعل فرنسا والنمسا وهولندا — وليس إرساءً لسابقة جديدة تتبعها دول أخرى.** اليونان هي أحدث دولة منضمة: مشروع قانون للطاقة المتجددة (RES) قدّمته وزارة البيئة والطاقة اليونانية (YPEN) إلى البرلمان اليوناني في 21 أبريل 2026، يفتح الباب أمام إطار عمل بقدرة 800 واط يعتمد على الإخطار فقط عبر المنصة الرقمية لمشغّل الشبكة DEDDIE، مع توقّع صدور قرار وزاري لتحديد التفاصيل النهائية. يُعدّ توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي لهذا التوسع — إذ يوسّع صراحةً إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، مما يمنح الدول الأعضاء سببًا على مستوى التوجيه لإضفاء الطابع الرسمي على القواعد وفق جدول زمني يمكن التنبؤ به.',
    quickAnswerTop: {
      ar: {
        question: 'هل ينتشر معيار 800 واط للطاقة الشمسية على الشرفات في جميع أنحاء الاتحاد الأوروبي؟',
        answer: 'نعم — لكن ألمانيا تنضمّ إلى تقارب قائم بالفعل، وليست هي من تقوده. تسمح فرنسا والنمسا وهولندا بالفعل بطاقة شمسية للشرفات بقدرة 800 واط عبر تسجيل بإخطار بسيط فقط؛ وقد جعل معيار DIN VDE V 0126-95 الألماني (ديسمبر 2025) ألمانيا متوافقة مع هذا المعيار. واليونان هي أحدث دولة تتجه نحو النموذج نفسه — 800 واط مع الإخطار فقط — عبر مشروع قانون للطاقة المتجددة (RES) قُدّم إلى البرلمان في أبريل 2026. ويُعدّ توجيه الأداء الطاقي للمباني (EPBD) الأوروبي المُعدَّل، الذي يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات، المحرّك الهيكلي وراء هذا الاتجاه الأوسع.',
        bullets: [
          'تسمح فرنسا والنمسا وهولندا بالفعل بما يصل إلى 800 واط من الطاقة الشمسية للشرفات عبر إخطار بسيط لمشغّل الشبكة — انضمت ألمانيا إلى هذا المعيار في ديسمبر 2025، ولم تضعه هي',
          'اليونان: قُدّم مشروع قانون للطاقة المتجددة (RES) إلى البرلمان في 21 أبريل 2026، يفتح إطار عمل بقدرة 800 واط يعتمد على الإخطار فقط عبر المنصة الرقمية لمشغّل الشبكة DEDDIE — كان يُتوقّع صدور قرار وزاري بشأن التفاصيل النهائية في مايو 2026، وينبغي إعادة التحقق منه قبل النشر',
          'يُعدّ توجيه EPBD (الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026) المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط',
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
          'تسمح فرنسا والنمسا وهولندا بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط عبر إخطار بسيط لمشغّل الشبكة — وقد جعل معيار DIN VDE V 0126-95 الألماني (ديسمبر 2025) ألمانيا متوافقة مع هذا المعيار القائم، وليس العكس.',
          'قدّمت اليونان مشروع قانون للطاقة المتجددة (RES) إلى البرلمان في 21 أبريل 2026 يفتح إطار عمل بقدرة 800 واط يعتمد على الإخطار فقط عبر المنصة الرقمية لمشغّل الشبكة DEDDIE؛ وكان يُتوقّع صدور قرار وزاري يحدد التفاصيل النهائية في مايو 2026، وينبغي إعادة التحقق منه قبل اعتبار هذه الصفحة محدَّثة.',
          'يُعدّ توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، المحرّك الهيكلي — إذ يوسّع إلزامات الطاقة الشمسية للمباني لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط.',
          'النمط المشترك بين هذه الدول: حد أقصى 800 واط مع تسجيل بالإخطار فقط، بدلاً من إجراءات ترخيص كاملة ينفّذها كهربائي.',
          'للاطلاع على التفاصيل الخاصة بألمانيا — حد 800 واط للعاكس، DIN VDE V 0126-95، الحد الفرعي البالغ 960 واط ذروة لمقبس Schuko، و § 8 EEG 2023 — راجع الدليل المخصص لألمانيا بدلاً من هذا العرض العابر للحدود.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD يقود التقارب',
        content: [
          '**يوسّع توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل، الذي يدخل حيز التنفيذ تدريجيًا اعتبارًا من 2026، إلزامات تركيب الطاقة الشمسية صراحةً لتشمل الواجهات والشرفات والتراسات — وليس الأسطح فقط.** وهذا يعيد تأطير الطاقة الشمسية للشرفات من خيار نمط حياة استهلاكي إلى آلية امتثال لالتزامات الدول الأعضاء بإزالة الكربون من المباني. الدول التي كانت تعامل سابقًا الطاقة الشمسية القابلة للتوصيل باعتبارها مسألة تنظيمية ثانوية أصبح لديها الآن سبب على مستوى التوجيه لإضفاء الطابع الرسمي على القواعد بسرعة — وهذا هو السياق المباشر لمبادرة اليونان التشريعية لعام 2026.',
          'تسمح فرنسا والنمسا وهولندا بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط بمجرد اشتراط إخطار بسيط لمشغّل الشبكة، وهو ما سبق إقرار ألمانيا نفسها. وقد جعل معيار DIN VDE V 0126-95 الألماني، الذي أُقرّ نهائيًا في ديسمبر 2025، ألمانيا متوافقة مع هذا المعيار القائم بحكم الأمر الواقع بدلاً من إرساء معيار جديد — ويعمل EPBD الآن على توسيع المنطق الأساسي نفسه ليشمل باقي دول الاتحاد.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'اليونان: أحدث المنضمّين',
        content: [
          '**قدّمت وزارة البيئة والطاقة اليونانية (YPEN) في 21 أبريل 2026 مشروع قانون جديد للطاقة المتجددة (RES) إلى البرلمان اليوناني، يفتح صراحةً وللمرة الأولى الباب أمام أنظمة الطاقة الشمسية القابلة للتوصيل.** حتى الآن، لم يكن لدى اليونان — رغم كونها من أكثر دول أوروبا سطوعًا بأشعة الشمس — إطار قانوني واضح للطاقة الشمسية على الشرفات، مما ترك التركيبات في منطقة رمادية.',
          'يشير مشروع القانون إلى حد أقصى قدره 800 واط مع تسجيل بالإخطار فقط عبر المنصة الرقمية الجديدة لمشغّل الشبكة DEDDIE، مع توقّع صدور قرار وزاري لتحديد الإطار التفصيلي النهائي.',
        ],
        callouts: [
          { type: 'warning', text: 'وفقًا للمصدر الصادر في أبريل 2026، كان القرار الوزاري اليوناني الذي يُحدد إطار الـ800 واط بشكل نهائي «متوقّعًا في مايو 2026» لكنه لم يُؤكَّد بعد أنه نُشر — تحقق من الحالة الراهنة قبل الاستشهاد بهذا كقانون نهائي.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ماذا يعني هذا خارج ألمانيا',
        content: [
          '**إذا لم يكن لدى بلدك بعد قواعد صريحة للطاقة الشمسية على الشرفات، فإن اتجاه المسار أصبح الآن قابلاً للتنبؤ به: توقّع حدًا أقصى 800 واط، وتسجيلًا مبسطًا قائمًا على الإخطار بدلاً من إجراءات ترخيص كاملة ينفّذها كهربائي، وجدولًا زمنيًا مرتبطًا بموعد نقل توجيه EPBD في بلدك بدلاً من عدم يقين مفتوح.** تُعد اليونان حاليًا المثال الأوضح على دولة تنتقل من المنطقة الرمادية إلى قواعد رسمية وفق هذا النمط — ومن المرجّح أن تحذو دول أعضاء أخرى في الاتحاد الأوروبي حذوها مع اقتراب مواعيد نقل توجيه EPBD، رغم أن هذه الصفحة توثّق حاليًا الحالة اليونانية المؤكدة فقط.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل وضعت ألمانيا معيار الاتحاد الأوروبي البالغ 800 واط للطاقة الشمسية على الشرفات؟', a: 'لا — كانت فرنسا والنمسا وهولندا تسمح بالفعل بطاقة شمسية للشرفات تصل إلى 800 واط عبر تسجيل بإخطار بسيط فقط قبل أن تُقرّ ألمانيا معيارها الخاص DIN VDE V 0126-95 نهائيًا في ديسمبر 2025. انضمت ألمانيا إلى معيار أوروبي قائم بحكم الأمر الواقع بدلاً من إنشاء معيار جديد.' },
          { q: 'ماذا تفعل اليونان بشأن الطاقة الشمسية على الشرفات في عام 2026؟', a: 'قدّمت وزارة البيئة والطاقة اليونانية (YPEN) مشروع قانون للطاقة المتجددة (RES) إلى البرلمان في 21 أبريل 2026، يفتح الباب أمام إطار عمل بقدرة 800 واط يعتمد على الإخطار فقط عبر المنصة الرقمية لمشغّل الشبكة DEDDIE. كان يُتوقّع صدور قرار وزاري يحدد التفاصيل في مايو 2026 — تحقق من الحالة الراهنة قبل اعتباره نهائيًا.' },
          { q: 'ما هو EPBD ولماذا يهم بالنسبة للطاقة الشمسية على الشرفات؟', a: 'يدخل توجيه الأداء الطاقي للمباني (EPBD) المُعدَّل حيز التنفيذ تدريجيًا اعتبارًا من 2026، ويوسّع إلزامات الطاقة الشمسية للمباني في الاتحاد الأوروبي لتشمل الواجهات والشرفات والتراسات، وليس الأسطح فقط — مما يحوّل الطاقة الشمسية للشرفات إلى آلية امتثال للدول الأعضاء بدلاً من كونها خيارًا سياسيًا تقديريًا.' },
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
    intro: 'ドイツの800Wバルコニー太陽光上限は、2025年12月にDIN VDE V 0126-95のもとで確定し、フランス、オーストリア、オランダがすでに採用している事実上のEU基準にドイツが合わせた形です。新たな先例をドイツが作り、他国がそれに追随しているわけではありません。このページでは、この収束がどのように広がっているかを追跡します。牽引役はギリシャの2026年の立法動向と、EUの建築物エネルギー性能指令（EPBD）です。',
    metaDescription: 'フランス、オーストリア、オランダはすでに簡易な届出のみで800Wバルコニー太陽光を認めています。ドイツは2025年12月にこの基準に加わりました — ギリシャもEPBDのファサード・バルコニーへの拡大を受けて、2026年の法案でこれに続いています。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'ドイツ以外のEU圏でバルコニー太陽光を検討し、800W基準の採用状況を追うユーザー',
    primaryTerm: 'eu 800wバルコニー太陽光基準',
    targetKeywords: ['800w バルコニー太陽光 eu', 'ギリシャ バルコニー太陽光 800w', 'eu バルコニー太陽光 調和 2027'],
    leadAnswerBlock: '**ドイツの800Wバルコニー太陽光上限は、2025年12月にDIN VDE V 0126-95のもとで確定し、フランス、オーストリア、オランダがすでに採用している事実上のEU基準にドイツが合わせた形です。新たな先例をドイツが作り、他国がそれに追随しているわけではありません。** ギリシャは最新の参入国です。ギリシャ環境エネルギー省（YPEN）が2026年4月21日に議会へ提出した再生可能エネルギー（RES）法案は、送電網事業者DEDDIEのデジタルプラットフォームを通じた届出のみの800W枠組みへの道を開くもので、詳細を確定する省令が予定されています。2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が、この構造的な推進力です。ファサード、バルコニー、テラスにまで建物の太陽光義務を明示的に拡大しており、加盟国には予測可能なスケジュールでルールを正式化する指令レベルの根拠が与えられています。',
    quickAnswerTop: {
      ja: {
        question: '800Wバルコニー太陽光基準はEU全域に広がっているのか？',
        answer: 'はい — ただしドイツは既存の収束の流れに加わったのであり、主導しているわけではありません。フランス、オーストリア、オランダはすでに簡易な届出のみで800Wバルコニー太陽光を認めており、ドイツのDIN VDE V 0126-95（2025年12月）はこの基準にドイツを合わせるものでした。ギリシャは、2026年4月に議会へ提出されたRES法案を通じて、同じ800W・届出のみモデルへ移行する最新の国です。建物の太陽光義務をファサードとバルコニーへ拡大する改正EU建築物エネルギー性能指令（EPBD）が、この広範な流れを支える構造的な推進力です。',
        bullets: [
          'フランス、オーストリア、オランダはすでに送電網事業者への簡易な届出のみで最大800Wのバルコニー太陽光を認めている — ドイツは2025年12月にこの基準に加わったのであり、定めたのではない',
          'ギリシャ：2026年4月21日に議会へRES法案を提出。送電網事業者DEDDIEのデジタルプラットフォームを通じた届出のみの800W枠組みを開くもの — 詳細を確定する省令は2026年5月に予定されていたが、公開前に最新状況を再確認する必要がある',
          'EPBD（2026年から段階的に発効）が構造的な推進力 — 屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している',
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
          'フランス、オーストリア、オランダはすでに送電網事業者への簡易な届出のみで最大800Wのバルコニー太陽光を認めている — ドイツのDIN VDE V 0126-95（2025年12月）はこの既存の基準にドイツを合わせたものであり、その逆ではない。',
          'ギリシャは2026年4月21日、送電網事業者DEDDIEのデジタルプラットフォームを通じた届出のみの800W枠組みを開くRES法案を議会に提出した。詳細を確定する省令は2026年5月に予定されていたが、このページを最新情報として扱う前に再確認が必要。',
          '2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）が構造的な推進力であり、屋根だけでなく、ファサード、バルコニー、テラスにまで建物の太陽光義務を拡大している。',
          'これらの国々に共通するパターン：電気工事士による本格的な許認可手続きではなく、800W上限と届出のみの登録の組み合わせ。',
          'ドイツ独自の詳細（800Wインバーター上限、DIN VDE V 0126-95、960 Wpのシュコ・サブ上限、EEG 2023第8条）については、この越境概要ではなく専用のドイツガイドを参照。',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBDが収束を後押し',
        content: [
          '**2026年から段階的に発効する改正建築物エネルギー性能指令（EPBD）は、太陽光設置義務を屋根だけでなく、ファサード、バルコニー、テラスにまで明示的に拡大しています。** これにより、バルコニー太陽光は消費者のライフスタイル選択から、加盟国の建物脱炭素義務のためのコンプライアンス手段へと位置づけが変わります。これまでプラグイン太陽光を規制上の後回しとして扱ってきた国々にも、いまや指令レベルの根拠に基づき、ルールを速やかに正式化する理由が生まれています — これがギリシャの2026年立法動向の直接の文脈です。',
          'フランス、オーストリア、オランダは、ドイツ自身の確定より前から、送電網事業者への簡易な届出のみで最大800Wのバルコニー太陽光を認めていました。2025年12月に確定したドイツのDIN VDE V 0126-95は、新たな基準を作ったのではなく、この既存の事実上の基準にドイツを合わせたものです — EPBDはいま、同じ根本ロジックをEU全体に拡大しつつあります。',
        ],
      },
      greece: {
        id: 'greece',
        title: 'ギリシャ：最新の参入国',
        content: [
          '**2026年4月21日、ギリシャ環境エネルギー省（YPEN）が新たなRES法案を議会へ提出し、初めて明示的にプラグイン太陽光システムへの道を開きました。** これまでギリシャは — ヨーロッパで最も日照に恵まれた国の一つでありながら — バルコニー太陽光に関する明確な法的枠組みを持たず、設置はグレーゾーンに置かれていました。',
          '法案は、送電網事業者DEDDIEの新しいデジタルプラットフォームを通じた届出のみの登録を伴う800W上限を示しており、詳細な枠組みを確定する省令が予定されています。',
        ],
        callouts: [
          { type: 'warning', text: '2026年4月時点の情報源によれば、800W枠組みを確定するギリシャの省令は「2026年5月に予定されている」とされていましたが、公開の確認はまだ取れていません — これを確定した法律として引用する前に、最新の状況を確認してください。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'ドイツ以外にとっての意味',
        content: [
          '**まだ明確なバルコニー太陽光ルールがない国でも、方向性はすでに予測可能です。800W上限、電気工事士による本格的な許認可手続きではなく届出ベースの簡易登録、そして際限のない不確実性ではなく、自国のEPBD国内法化期限に連動したスケジュールを見込んでよいでしょう。** ギリシャは、このパターンに沿ってグレーゾーンから正式なルールへ移行しつつある現時点で最も明確な例です。EPBDの国内法化期限が近づくにつれ、他のEU加盟国も同様のテンプレートに従う可能性が高いですが、このページが現在文書化しているのは確認済みのギリシャの事例のみです。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ドイツはEUの800Wバルコニー太陽光基準を定めたのか？', a: 'いいえ — フランス、オーストリア、オランダは、ドイツが2025年12月に独自のDIN VDE V 0126-95基準を確定させる前から、すでに簡易な届出のみの登録で最大800Wのバルコニー太陽光を認めていました。ドイツは新たな基準を作ったのではなく、既存の事実上のEU基準に加わったのです。' },
          { q: 'ギリシャは2026年、バルコニー太陽光についてどう対応しているか？', a: 'ギリシャ環境エネルギー省（YPEN）は2026年4月21日、送電網事業者DEDDIEのデジタルプラットフォームを通じた届出のみの800W枠組みを開くRES法案を議会に提出しました。詳細を確定する省令は2026年5月に予定されていました — 最終的なものとして扱う前に最新状況を確認してください。' },
          { q: 'EPBDとは何か、バルコニー太陽光にとってなぜ重要なのか？', a: '改正建築物エネルギー性能指令（EPBD）は2026年から段階的に発効し、屋根だけでなくファサード、バルコニー、テラスにまでEUの建物太陽光義務を拡大します — これにより、バルコニー太陽光は加盟国にとって任意の政策選択ではなく、コンプライアンス手段になります。' },
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
    intro: '2025년 12월 DIN VDE V 0126-95에 따라 확정된 독일의 800W 발코니 태양광 상한은, 프랑스·오스트리아·네덜란드가 이미 채택하고 있던 사실상의 EU 표준에 독일이 합류한 것입니다. 다른 국가들이 뒤따르는 새로운 선례를 독일이 만든 것이 아닙니다. 이 페이지는 이러한 수렴 현상이 어떻게 확산되고 있는지 추적하며, 그리스의 2026년 입법 추진과 EU 건물 에너지 성능 지침(EPBD)이 그 흐름을 주도하고 있습니다.',
    metaDescription: '프랑스, 오스트리아, 네덜란드는 이미 단순 신고만으로 800W 발코니 태양광을 허용하고 있습니다. 독일은 2025년 12월에 이 표준에 합류했으며, 이제 그리스도 EPBD의 파사드·발코니 확대 적용에 힘입어 2026년 입법을 통해 뒤따르고 있습니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '독일 외 EU 지역에서 800W 표준 도입 현황을 추적하는 발코니 태양광 구매자',
    primaryTerm: 'eu 800w 발코니 태양광 표준',
    targetKeywords: ['800w 발코니 태양광 eu', '그리스 발코니 태양광 800w', 'eu 발코니 태양광 조화 2027'],
    leadAnswerBlock: '**2025년 12월 DIN VDE V 0126-95에 따라 확정된 독일의 800W 발코니 태양광 상한은, 프랑스·오스트리아·네덜란드가 이미 채택하고 있던 사실상의 EU 표준에 독일이 합류한 것입니다. 다른 국가들이 뒤따르는 새로운 선례를 독일이 만든 것이 아닙니다.** 그리스는 가장 최근에 합류한 국가입니다. 그리스 환경에너지부(YPEN)가 2026년 4월 21일 의회에 제출한 재생에너지(RES) 법안은 송전망 운영사 DEDDIE의 디지털 플랫폼을 통한 신고 전용 800W 체계로 가는 길을 열었으며, 세부 사항을 확정할 장관령이 예상되고 있습니다. 2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)이 이러한 흐름의 구조적 동인입니다. 이 지침은 건물 태양광 의무를 지붕뿐 아니라 파사드, 발코니, 테라스로까지 명시적으로 확대하여, 회원국들이 예측 가능한 일정에 따라 규정을 공식화할 지침 차원의 근거를 제공합니다.',
    quickAnswerTop: {
      ko: {
        question: '800W 발코니 태양광 표준이 EU 전역으로 확산되고 있습니까?',
        answer: '그렇습니다 — 다만 독일은 기존의 수렴 흐름에 합류한 것이지, 그것을 주도한 것이 아닙니다. 프랑스, 오스트리아, 네덜란드는 이미 단순 신고만으로 800W 발코니 태양광을 허용하고 있으며, 독일의 DIN VDE V 0126-95(2025년 12월)는 독일을 이 기준에 맞춘 것입니다. 그리스는 2026년 4월 의회에 제출된 RES 법안을 통해 동일한 800W 신고 전용 모델로 이동하는 가장 최근 국가입니다. 건물 태양광 의무를 파사드와 발코니로 확대하는 개정 EU 건물 에너지 성능 지침(EPBD)이 이러한 광범위한 흐름의 구조적 동인입니다.',
        bullets: [
          '프랑스, 오스트리아, 네덜란드는 이미 송전망 운영사에 대한 단순 신고만으로 최대 800W 발코니 태양광을 허용하고 있습니다 — 독일은 2025년 12월 이 기준에 합류했을 뿐, 이를 제정한 것이 아닙니다',
          '그리스: 2026년 4월 21일 의회에 RES 법안 제출. 송전망 운영사 DEDDIE의 디지털 플랫폼을 통한 신고 전용 800W 체계를 여는 내용으로, 세부 사항을 확정할 장관령이 2026년 5월로 예정되어 있었으며 발행 전 재확인이 필요합니다',
          'EPBD(2026년부터 단계적 발효)는 구조적 동인입니다 — 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다',
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
          '프랑스, 오스트리아, 네덜란드는 이미 송전망 운영사에 대한 단순 신고만으로 최대 800W 발코니 태양광을 허용하고 있습니다 — 독일의 DIN VDE V 0126-95(2025년 12월)는 독일을 이 기존 기준에 맞춘 것이지, 그 반대가 아닙니다.',
          '그리스는 2026년 4월 21일 송전망 운영사 DEDDIE의 디지털 플랫폼을 통한 신고 전용 800W 체계를 여는 RES 법안을 의회에 제출했습니다. 세부 사항을 확정할 장관령은 2026년 5월로 예정되어 있었으며, 이 페이지를 최신 정보로 취급하기 전에 재확인이 필요합니다.',
          '2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)이 구조적 동인이며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 건물 태양광 의무를 확대합니다.',
          '이들 국가에서 공통적으로 나타나는 패턴: 전기기사가 시행하는 전면적인 허가 절차가 아니라, 800W 상한과 신고 전용 등록의 조합입니다.',
          '독일 고유의 세부 사항 — 800W 인버터 상한, DIN VDE V 0126-95, 960 Wp 슈코 하위 상한, EEG 2023 제8조 — 에 대해서는 이 국경 간 개요가 아닌 전용 독일 가이드를 참고하십시오.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD가 수렴을 이끄는 이유',
        content: [
          '**2026년부터 단계적으로 발효되는 개정 건물 에너지 성능 지침(EPBD)은 태양광 설치 의무를 지붕뿐 아니라 파사드, 발코니, 테라스로까지 명시적으로 확대합니다.** 이에 따라 발코니 태양광은 소비자의 생활방식 선택에서 회원국의 건물 탈탄소화 의무를 위한 준수 수단으로 재정의됩니다. 이전에는 플러그인 태양광을 규제상 부차적인 문제로 취급했던 국가들도 이제 규정을 신속히 공식화할 지침 차원의 근거를 갖게 되었으며, 이는 그리스의 2026년 입법 추진의 직접적인 배경입니다.',
          '프랑스, 오스트리아, 네덜란드는 독일 자체의 표준 확정보다 앞서, 송전망 운영사에 대한 단순 신고 요건만으로 최대 800W 발코니 태양광을 허용해 왔습니다. 2025년 12월 확정된 독일의 DIN VDE V 0126-95는 새로운 기준을 수립한 것이 아니라 이러한 기존의 사실상 표준에 독일을 맞춘 것입니다 — EPBD는 이제 동일한 근본 논리를 EU 전체로 확대하고 있습니다.',
        ],
      },
      greece: {
        id: 'greece',
        title: '그리스: 가장 최근의 합류국',
        content: [
          '**2026년 4월 21일, 그리스 환경에너지부(YPEN)는 새로운 RES 법안을 그리스 의회에 제출하여, 처음으로 플러그인 태양광 시스템의 길을 명시적으로 열었습니다.** 지금까지 그리스는 — 유럽에서 가장 일조량이 풍부한 국가 중 하나임에도 — 발코니 태양광에 대한 명확한 법적 체계가 없어 설치가 회색지대에 놓여 있었습니다.',
          '법안은 송전망 운영사 DEDDIE의 새로운 디지털 플랫폼을 통한 신고 전용 등록과 함께 800W 상한을 제시하고 있으며, 세부 체계를 확정할 장관령이 예상됩니다.',
        ],
        callouts: [
          { type: 'warning', text: '2026년 4월 기준 자료에 따르면, 800W 체계를 확정하는 그리스 장관령은 "2026년 5월 발표가 예상"되었지만 아직 발행이 확인되지 않았습니다 — 이를 확정된 법률로 인용하기 전에 현재 상태를 확인하십시오.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '독일 외 지역에 미치는 의미',
        content: [
          '**아직 명시적인 발코니 태양광 규정이 없는 국가라도, 이제 방향성은 예측 가능합니다. 800W 상한, 전기기사가 시행하는 전면적인 허가 절차가 아닌 신고 기반의 간소화된 등록, 그리고 무기한의 불확실성이 아닌 자국의 EPBD 이행 기한에 맞춘 일정을 예상할 수 있습니다.** 그리스는 이러한 패턴에 따라 회색지대에서 공식화된 규정으로 이동하는 현재 가장 명확한 사례입니다 — EPBD 이행 기한이 다가옴에 따라 다른 EU 회원국들도 동일한 모델을 따를 가능성이 높지만, 이 페이지는 현재 확인된 그리스 사례만을 다루고 있습니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '독일이 EU의 800W 발코니 태양광 표준을 제정했습니까?', a: '아닙니다 — 프랑스, 오스트리아, 네덜란드는 독일이 2025년 12월 자체 DIN VDE V 0126-95 표준을 확정하기 전부터 이미 단순 신고만으로 최대 800W 발코니 태양광을 허용하고 있었습니다. 독일은 새로운 기준을 만든 것이 아니라 기존의 사실상 EU 규범에 합류한 것입니다.' },
          { q: '그리스는 2026년 발코니 태양광에 대해 어떤 조치를 취하고 있습니까?', a: '그리스 환경에너지부(YPEN)는 2026년 4월 21일 의회에 RES 법안을 제출하여, 송전망 운영사 DEDDIE의 디지털 플랫폼을 통한 신고 전용 800W 체계로 가는 길을 열었습니다. 세부 사항을 확정할 장관령은 2026년 5월로 예정되어 있었습니다 — 최종 확정된 것으로 간주하기 전에 현재 상태를 확인하십시오.' },
          { q: 'EPBD란 무엇이며 발코니 태양광에 왜 중요합니까?', a: '개정 건물 에너지 성능 지침(EPBD)은 2026년부터 단계적으로 발효되며, 지붕뿐 아니라 파사드, 발코니, 테라스까지 EU 건물 태양광 의무를 확대합니다 — 이로써 발코니 태양광은 회원국의 재량적 정책 선택이 아니라 준수 수단이 됩니다.' },
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
    intro: 'O limite de 800 W para energia solar de varanda na Alemanha, finalizado sob a norma DIN VDE V 0126-95 em dezembro de 2025, coloca o país em linha com um padrão de fato da UE já usado pela França, Áustria e Países Baixos — em vez de estabelecer um novo precedente que outros estejam seguindo. Esta página acompanha como essa convergência está se espalhando, liderada pela iniciativa legislativa da Grécia em 2026 e pela Diretiva de Desempenho Energético dos Edifícios da UE.',
    metaDescription: 'França, Áustria e Países Baixos já permitem energia solar de varanda de 800 W com registro por simples notificação. A Alemanha aderiu a esse padrão em dezembro de 2025 — agora a Grécia segue via legislação de 2026, impulsionada pela extensão da EPBD a fachadas e varandas.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda na UE fora da Alemanha acompanhando a adoção do padrão de 800 W',
    primaryTerm: 'padrão de 800 w para energia solar de varanda na ue',
    targetKeywords: ['energia solar de varanda 800w ue', 'grécia energia solar de varanda 800w', 'harmonização ue energia solar de varanda 2027'],
    leadAnswerBlock: '**O limite de 800 W para energia solar de varanda na Alemanha, finalizado sob a norma DIN VDE V 0126-95 em dezembro de 2025, coloca o país em linha com um padrão de fato da UE já usado pela França, Áustria e Países Baixos — em vez de estabelecer um novo precedente que outros estejam seguindo.** A Grécia é a integrante mais recente: um projeto de lei sobre energias renováveis apresentado ao Parlamento grego pelo Ministério do Meio Ambiente e Energia (YPEN) em 21 de abril de 2026 abre caminho para um regime de 800 W com registro por simples notificação por meio da plataforma digital da operadora de rede DEDDIE, com uma decisão ministerial esperada para finalizar os detalhes. A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural — ela estende explicitamente as obrigações solares dos edifícios a fachadas, varandas e terraços, dando aos Estados-membros um motivo, no nível da diretiva, para formalizar regras dentro de um cronograma previsível.',
    quickAnswerTop: {
      pt: {
        question: 'O padrão de 800 W para energia solar de varanda está se espalhando pela UE?',
        answer: 'Sim — mas a Alemanha está aderindo a uma convergência já existente, não a liderando. França, Áustria e Países Baixos já permitem energia solar de varanda de 800 W com registro por simples notificação; a norma alemã DIN VDE V 0126-95 (dezembro de 2025) colocou o país em linha com esse padrão. A Grécia é o país mais recente a caminhar para o mesmo modelo de 800 W com registro por simples notificação, por meio de um projeto de lei sobre energias renováveis apresentado ao parlamento em abril de 2026. A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada da UE, que estende as obrigações solares dos edifícios a fachadas e varandas, é o motor estrutural por trás dessa tendência mais ampla.',
        bullets: [
          'França, Áustria e Países Baixos já permitem até 800 W de energia solar de varanda com uma simples notificação à operadora de rede — a Alemanha aderiu a essa norma em dezembro de 2025, não a criou',
          'Grécia: projeto de lei sobre energias renováveis apresentado ao parlamento em 21 de abril de 2026, abrindo um regime de 800 W com registro por simples notificação por meio da plataforma digital da operadora de rede DEDDIE — uma decisão ministerial sobre os detalhes finais era esperada para maio de 2026 e deve ser reconfirmada antes da publicação',
          'A EPBD (entrando em vigor gradualmente a partir de 2026) é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados',
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
          'França, Áustria e Países Baixos já permitem energia solar de varanda até 800 W com uma simples notificação à operadora de rede — a norma alemã DIN VDE V 0126-95 (dezembro de 2025) colocou o país em linha com esse padrão existente, e não o contrário.',
          'A Grécia apresentou um projeto de lei sobre energias renováveis ao parlamento em 21 de abril de 2026, abrindo um regime de 800 W com registro por simples notificação por meio da plataforma digital da operadora de rede DEDDIE; uma decisão ministerial finalizando os detalhes era esperada para maio de 2026 e deve ser reconfirmada antes de considerar esta página atualizada.',
          'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, é o motor estrutural — ela estende as obrigações solares dos edifícios a fachadas, varandas e terraços, não apenas a telhados.',
          'O padrão comum a esses países: um limite de 800 W somado a um registro por simples notificação, em vez de um licenciamento completo com instalação por eletricista.',
          'Para os detalhes específicos da Alemanha — o limite de 800 W do inversor, DIN VDE V 0126-95, o sublimite de 960 Wp para a tomada Schuko e o § 8 EEG 2023 — veja o guia dedicado à Alemanha em vez desta visão geral transfronteiriça.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'A EPBD está impulsionando a convergência',
        content: [
          '**A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada, que entra em vigor gradualmente a partir de 2026, estende explicitamente as obrigações de instalação solar a fachadas, varandas e terraços — não apenas a telhados.** Isso reformula a energia solar de varanda, deixando de ser uma escolha de estilo de vida do consumidor para se tornar um mecanismo de conformidade com as obrigações de descarbonização de edifícios dos Estados-membros. Países que antes tratavam a energia solar plugável como uma questão regulatória secundária agora têm um motivo, no nível da diretiva, para formalizar regras rapidamente — esse é o contexto imediato da iniciativa legislativa da Grécia em 2026.',
          'França, Áustria e Países Baixos já permitem energia solar de varanda até 800 W com apenas uma simples exigência de notificação à operadora de rede, antecedendo a própria finalização alemã. A norma alemã DIN VDE V 0126-95, finalizada em dezembro de 2025, colocou o país em linha com esse padrão de fato existente em vez de estabelecer um novo — a EPBD agora estende a mesma lógica de base ao restante do bloco.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Grécia: a integrante mais recente',
        content: [
          '**Em 21 de abril de 2026, o Ministério do Meio Ambiente e Energia (YPEN) apresentou um novo projeto de lei sobre energias renováveis ao Parlamento grego, abrindo explicitamente, pela primeira vez, o caminho para sistemas solares plugáveis.** Até então, a Grécia — apesar de ser um dos países mais ensolarados da Europa — não tinha um marco legal claro para energia solar de varanda, deixando as instalações em uma zona cinzenta.',
          'O projeto de lei aponta para um limite de 800 W com registro por simples notificação por meio da nova plataforma digital da operadora de rede DEDDIE, com uma decisão ministerial esperada para finalizar o regime detalhado.',
        ],
        callouts: [
          { type: 'warning', text: 'De acordo com a fonte de abril de 2026, a decisão ministerial grega que finaliza o regime de 800 W era "esperada para maio de 2026", mas sua publicação ainda não estava confirmada — verifique o status atual antes de citar isso como lei finalizada.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'O que isso significa fora da Alemanha',
        content: [
          '**Se o seu país ainda não tem regras explícitas para energia solar de varanda, a direção agora é previsível: espere um limite de 800 W, um registro simplificado baseado em notificação em vez de um licenciamento completo com instalação por eletricista, e um cronograma vinculado ao prazo de transposição da EPBD do seu país em vez de uma incerteza aberta.** A Grécia é o exemplo mais claro atualmente de um país passando da zona cinzenta para regras formalizadas seguindo esse padrão — outros Estados-membros da UE provavelmente seguirão o mesmo modelo à medida que os prazos de transposição da EPBD se aproximarem, embora esta página atualmente documente apenas o caso grego confirmado.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A Alemanha definiu o padrão de 800 W da UE para energia solar de varanda?', a: 'Não — França, Áustria e Países Baixos já permitiam energia solar de varanda até 800 W com registro por simples notificação antes de a Alemanha finalizar seu próprio padrão DIN VDE V 0126-95 em dezembro de 2025. A Alemanha aderiu a uma norma de fato da UE já existente, em vez de criar uma nova.' },
          { q: 'O que a Grécia está fazendo em relação à energia solar de varanda em 2026?', a: 'O Ministério do Meio Ambiente e Energia (YPEN) da Grécia apresentou um projeto de lei sobre energias renováveis ao parlamento em 21 de abril de 2026, abrindo caminho para um regime de 800 W com registro por simples notificação por meio da plataforma digital da operadora de rede DEDDIE. Uma decisão ministerial finalizando os detalhes era esperada para maio de 2026 — confirme o status atual antes de considerá-la definitiva.' },
          { q: 'O que é a EPBD e por que ela importa para a energia solar de varanda?', a: 'A Diretiva de Desempenho Energético dos Edifícios (EPBD) revisada entra em vigor gradualmente a partir de 2026 e estende as obrigações solares dos edifícios da UE a fachadas, varandas e terraços, não apenas a telhados — transformando a energia solar de varanda em um mecanismo de conformidade para os Estados-membros, em vez de uma escolha política discricionária.' },
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
    intro: '德国800瓦阳台太阳能上限已于2025年12月依据DIN VDE V 0126-95正式确定，这使德国与法国、奥地利、荷兰早已采用的事实上的欧盟标准保持一致——而不是德国率先设立标准、其他国家跟随。本页追踪这一趋同过程的扩散情况，主要推动力来自希腊2026年的立法进程和欧盟《建筑能效指令》（EPBD）。',
    metaDescription: '法国、奥地利和荷兰已允许仅需简单备案登记的800瓦阳台太阳能。德国于2025年12月加入该标准——如今希腊也通过2026年立法跟进，其背后动力是EPBD将适用范围扩展至外墙和阳台。',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '德国以外、关注800瓦标准采用情况的欧盟阳台太阳能购买者',
    primaryTerm: 'eu 800瓦阳台太阳能标准',
    targetKeywords: ['800瓦阳台太阳能 欧盟', '希腊阳台太阳能800瓦', '欧盟阳台太阳能统一 2027'],
    leadAnswerBlock: '**德国800瓦阳台太阳能上限已于2025年12月依据DIN VDE V 0126-95正式确定，这使德国与法国、奥地利、荷兰早已采用的事实上的欧盟标准保持一致——而不是德国率先设立标准、其他国家跟随。** 希腊是最新加入的国家：希腊环境与能源部（YPEN）于2026年4月21日向议会提交的可再生能源（RES）法案，为通过电网运营商DEDDIE数字平台实现的800瓦、仅需备案的框架打开了大门，具体细节预计将由部长级决定最终敲定。2026年起分阶段生效的修订版《建筑能效指令》（EPBD）是这一趋势背后的结构性推动力——该指令明确将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶，从而为成员国按可预期的时间表将相关规则正式化提供了指令层面的依据。',
    quickAnswerTop: {
      zh: {
        question: '800瓦阳台太阳能标准是否正在欧盟范围内扩散？',
        answer: '是的——但德国是加入了一个已经存在的趋同进程，而不是在引领它。法国、奥地利和荷兰已允许仅需向电网运营商简单备案的800瓦阳台太阳能；德国的DIN VDE V 0126-95标准（2025年12月）使德国与这一规范保持一致。希腊是最新一个朝同样的800瓦、仅需备案模式迈进的国家，其依据是2026年4月提交议会的一项RES法案。欧盟修订版《建筑能效指令》（EPBD）将建筑太阳能安装义务扩展至外墙和阳台，是这一更广泛趋势背后的结构性推动力。',
        bullets: [
          '法国、奥地利和荷兰已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案——德国于2025年12月加入了这一规范，而非制定了它',
          '希腊：2026年4月21日向议会提交RES法案，为通过电网运营商DEDDIE数字平台实现的800瓦、仅需备案的框架打开大门——细节的部长级决定原定于2026年5月作出，发布前应重新核实其状态',
          'EPBD（自2026年起分阶段生效）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶',
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
          '法国、奥地利和荷兰已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案——德国的DIN VDE V 0126-95标准（2025年12月）使德国与这一既有规范保持一致，而非相反。',
          '希腊已于2026年4月21日向议会提交RES法案，为通过电网运营商DEDDIE数字平台实现的800瓦、仅需备案的框架打开大门；细节的部长级决定原定于2026年5月作出，在将本页视为最新之前应予以重新核实。',
          '2026年起分阶段生效的修订版《建筑能效指令》（EPBD）是结构性推动力——它将建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶。',
          '这些国家的共同模式是：800瓦上限加仅需备案登记，而非由电工完成的完整许可流程。',
          '关于德国的具体规定——800瓦逆变器上限、DIN VDE V 0126-95、960 Wp的Schuko子上限，以及《2023年可再生能源法》第8条——请参阅专门的德国指南，而非本篇跨境概览。',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'EPBD正在推动趋同',
        content: [
          '**2026年起分阶段生效的修订版《建筑能效指令》（EPBD）明确将太阳能安装义务扩展至外墙、阳台和露台——而不仅限于屋顶。** 这使阳台太阳能从消费者的生活方式选择，重新定位为成员国建筑脱碳义务的一项合规机制。此前将插电式太阳能视为监管次要事项的国家，如今有了指令层面的依据，可以迅速将规则正式化——这正是希腊2026年立法推进的直接背景。',
          '法国、奥地利和荷兰早在德国自身标准正式确定之前，就已允许最高800瓦的阳台太阳能，仅需向电网运营商简单备案。德国于2025年12月确定的DIN VDE V 0126-95标准，是使德国与这一既有的事实标准保持一致，而非另立新标准——EPBD如今正将同样的底层逻辑扩展至欧盟其余成员国。',
        ],
      },
      greece: {
        id: 'greece',
        title: '希腊：最新加入者',
        content: [
          '**2026年4月21日，希腊环境与能源部（YPEN）向希腊议会提交了一项新的RES法案，首次明确为插电式太阳能系统打开大门。** 在此之前，希腊——尽管是欧洲阳光最充足的国家之一——始终没有针对阳台太阳能的明确法律框架，导致相关安装长期处于灰色地带。',
          '该法案指向一个800瓦上限，通过电网运营商DEDDIE新推出的数字平台实现仅需备案的登记，具体的详细框架预计将由部长级决定最终敲定。',
        ],
        callouts: [
          { type: 'warning', text: '根据2026年4月的信息来源，敲定800瓦框架的希腊部长级决定「预计于2026年5月」作出，但截至目前尚未确认已发布——在将其作为已最终确定的法律引用之前，请核实当前状态。' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: '这对德国以外意味着什么',
        content: [
          '**如果你所在的国家尚无明确的阳台太阳能规定，其发展方向如今已可预见：预计将出现800瓦上限、以备案为基础的简化登记（而非由电工完成的完整许可流程），以及与本国EPBD转化期限挂钩的时间表，而非无限期的不确定性。** 希腊是目前按此模式从灰色地带走向正式规则的最清晰案例——随着EPBD转化期限的临近，更多欧盟成员国可能会遵循同样的模式，不过本页目前仅记录了已确认的希腊案例。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '是德国制定了欧盟的800瓦阳台太阳能标准吗？', a: '不是——在德国于2025年12月确定自身的DIN VDE V 0126-95标准之前，法国、奥地利和荷兰早已允许最高800瓦、仅需简单备案登记的阳台太阳能。德国是加入了一个既有的欧盟事实规范，而非创立了新标准。' },
          { q: '希腊在2026年针对阳台太阳能采取了哪些措施？', a: '希腊环境与能源部（YPEN）于2026年4月21日向议会提交了一项RES法案，为通过电网运营商DEDDIE数字平台实现的800瓦、仅需备案的框架打开大门。细节的部长级决定原定于2026年5月作出——在将其视为最终确定之前，请核实当前状态。' },
          { q: '什么是EPBD？它对阳台太阳能为何重要？', a: '修订版《建筑能效指令》（EPBD）自2026年起分阶段生效，将欧盟建筑太阳能安装义务扩展至外墙、阳台和露台，而不仅限于屋顶——这使阳台太阳能对成员国而言成为一项合规机制，而非可自行选择的政策事项。' },
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
