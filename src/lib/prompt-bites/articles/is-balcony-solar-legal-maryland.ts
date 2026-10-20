// Slug: is-balcony-solar-legal-maryland
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in Maryland?',
    dateModified: '2026-10-20',
    seoTitle: 'Is Balcony Solar Legal in Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — HB 1532 was signed May 12, 2026 and, per the Maryland General Assembly bill page, took effect on enactment (some trackers list later dates). Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Maryland',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Maryland?',
        answer: 'In effect. Maryland HB 1532 (the Utility RELIEF Act) was signed May 12, 2026; the Maryland General Assembly bill page lists it as effective upon enactment, while some trackers give July 1 or October 1, 2026 — confirm the exact date with the state.',
        bullets: [
          'HB 1532 signed May 12, 2026 — effective upon enactment per the General Assembly page (trackers differ; confirm the date)',
          '1,200W cap, with a lower 391W sub-threshold called out in the broader regulatory template',
          'No fully UL 3700-certified system is confirmed available yet',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Maryland HB 1532 took effect immediately on signing, May 12, 2026 — no waiting period, unlike most other states.',
          'The 1,200W cap matches the majority template; a separate 391W sub-threshold is also referenced in the regulatory framework.',
          'Maryland\'s DC-adjacent location means many residents pay DC-area electricity rates, relevant context even though a Maryland-specific savings figure isn\'t independently confirmed here.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does HB 1532 Require in Maryland?',
        content: [
          '<strong>Maryland\'s HB 1532, the Utility RELIEF Act, was signed May 12, 2026 and is listed on the Maryland General Assembly bill page as effective upon enactment — trackers disagree on the exact effective date (some say July 1 or October 1, 2026), so confirm it with the state.</strong> The standard cap is 1,200W, matching the majority template used across most enacted states. A separate 391W sub-threshold also appears in the broader multi-state regulatory framework, which may apply lighter-touch treatment to smaller devices — confirm the exact mechanics against Maryland\'s statutory text before relying on the distinction for a specific device.',
          'Like other enacted states, net metering does not apply — excess power exported to the grid earns no compensation, and the 1,200W cap and the 391W exemption from UL listing rules that would require rewiring were read in the enrolled text of Chapter 353 (2026 Laws of Maryland); a parallel version of the same section in that chapter uses 391W as the cap, which we could not reconcile.',
        ],
        columns: ['Field', 'Maryland HB 1532'],
        rows: [
          { Field: 'Signed / Effective', 'Maryland HB 1532': 'May 12, 2026 / Upon enactment (trackers differ)' },
          { Field: 'Wattage cap', 'Maryland HB 1532': '1,200W (391W sub-threshold referenced)' },
          { Field: 'Net metering', 'Maryland HB 1532': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Check EcoFlow STREAM Ultra price on Amazon',
          },
        ],
        content: [
          '<strong>Maryland\'s law, like every other enacted state\'s, references UL 3700 as the safety benchmark, but no complete plug-in solar system has confirmed full certification as of write-time.</strong> The standard was published December 2025 with testing opening January 2026 — a gap that applies nationally. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Maryland.',
          'Maryland wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Maryland-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — Maryland\'s DC-adjacent electricity rates likely put it toward the higher end of that range, but treat this as a national range, not a confirmed Maryland estimate.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Maryland today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Maryland Balcony Solar',
        faqs: [
          {
            q: 'Did I have to wait after Maryland\'s law was signed to install a device?',
            a: 'Per the Maryland General Assembly bill page, HB 1532 took effect upon enactment on May 12, 2026, but some trackers list July 1 or October 1, 2026 — confirm the exact date with the state before relying on it.',
          },
          {
            q: 'Can my HOA in Maryland ban balcony solar?',
            a: 'HB 1532 doesn\'t include explicit HOA preemption language, so check your lease or HOA covenant separately. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'What is the 391W sub-threshold mentioned for Maryland?',
            a: 'A lower wattage tier referenced in the broader multi-state regulatory framework alongside the standard 1,200W cap — confirm the exact treatment against Maryland\'s statutory text before relying on it for a specific device.',
          },
          {
            q: 'Do I get paid for excess power in Maryland?',
            a: 'No. Net metering does not apply to balcony solar devices under HB 1532, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-de.webp',
    title: 'Ist Balkonsolar in Maryland legal?',
    dateModified: '2026-10-20',
    seoTitle: 'Ist Balkonsolar in Maryland legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja — HB 1532 wurde am 12. Mai 2026 unterzeichnet und trat laut Gesetzesseite der Maryland General Assembly mit Verkündung in Kraft (Tracker nennen teils spätere Daten). Kurzantwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hausbesitzer, die prüfen, ob Balkonsolar in Maryland legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Maryland legal?',
        answer: 'In Kraft. Marylands HB 1532 (der Utility RELIEF Act) wurde am 12. Mai 2026 unterzeichnet; die Gesetzesseite der Maryland General Assembly nennt ihn als mit Verkündung in Kraft getreten, während einige Tracker den 1. Juli oder 1. Oktober 2026 angeben — bestätigen Sie das genaue Datum beim Bundesstaat.',
        bullets: [
          'HB 1532 unterzeichnet am 12. Mai 2026 – laut Seite der General Assembly mit Verkündung in Kraft (Tracker weichen ab; Datum bestätigen)',
          '1.200-W-Obergrenze, mit einer niedrigeren 391-W-Unterschwelle im breiteren regulatorischen Rahmenwerk',
          'Noch kein vollständig UL-3700-zertifiziertes System bestätigt verfügbar',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Marylands HB 1532 trat sofort mit der Unterzeichnung am 12. Mai 2026 in Kraft — keine Wartezeit, anders als in den meisten anderen Bundesstaaten.',
          'Die 1.200-W-Obergrenze entspricht der Mehrheitsvorlage; eine separate 391-W-Unterschwelle wird ebenfalls im regulatorischen Rahmenwerk erwähnt.',
          'Marylands Lage nahe Washington, D.C. bedeutet, dass viele Einwohner Strompreise auf DC-Niveau zahlen — relevanter Kontext, auch wenn eine Maryland-spezifische Einsparungszahl hier nicht unabhängig bestätigt ist.',
          'Noch kein vollständiges System hat eine vollständige UL-3700-Zertifizierung bestätigt, wie in jedem anderen Bundesstaat mit entsprechendem Gesetz.',
        ],
      },
      body1: {
        title: 'Was schreibt HB 1532 in Maryland vor?',
        content: [
          '<strong>Marylands HB 1532, der Utility RELIEF Act, wurde am 12. Mai 2026 unterzeichnet und wird auf der Gesetzesseite der Maryland General Assembly als mit Verkündung in Kraft getreten geführt – Tracker weichen beim genauen Datum ab (teils 1. Juli oder 1. Oktober 2026), bestätigen Sie es daher beim Bundesstaat.</strong> Die Standardobergrenze liegt bei 1.200 W und entspricht damit der in den meisten Bundesstaaten verwendeten Mehrheitsvorlage. Eine separate 391-W-Unterschwelle taucht ebenfalls im breiteren, bundesstaatenübergreifenden regulatorischen Rahmenwerk auf, die möglicherweise eine vereinfachte Behandlung kleinerer Geräte vorsieht — prüfen Sie die genaue Mechanik anhand von Marylands Gesetzestext, bevor Sie sich für ein bestimmtes Gerät auf diese Unterscheidung verlassen.',
          'Wie in anderen Bundesstaaten mit entsprechendem Gesetz gilt kein Net Metering — überschüssiger, ins Netz eingespeister Strom wird nicht vergütet, und die 1.200-W-Obergrenze sowie die 391-W-Ausnahme von UL-Listungsvorgaben, die eine Umverdrahtung erfordern würden, wurden im verabschiedeten Text von Chapter 353 (2026 Laws of Maryland) gelesen; eine parallele Fassung desselben Abschnitts in diesem Chapter nennt 391 W als Obergrenze, was wir nicht auflösen konnten.',
        ],
        columns: ['Feld', 'Maryland HB 1532'],
        rows: [
          { Feld: 'Unterzeichnet / Wirksam', 'Maryland HB 1532': '12. Mai 2026 / Mit Verkündung (Tracker weichen ab)' },
          { Feld: 'Leistungsobergrenze', 'Maryland HB 1532': '1.200 W (391-W-Unterschwelle erwähnt)' },
          { Feld: 'Net Metering', 'Maryland HB 1532': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sind zertifizierte Kits bereits tatsächlich verfügbar?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'EcoFlow STREAM Ultra Preis bei Amazon prüfen',
          },
        ],
        content: [
          '<strong>Marylands Gesetz verweist, wie das jedes anderen Bundesstaats mit entsprechendem Gesetz, auf UL 3700 als Sicherheitsstandard, doch zum Zeitpunkt der Erstellung hat kein vollständiges Plug-in-Solarsystem eine vollständige Zertifizierung bestätigt.</strong> Der Standard wurde im Dezember 2025 veröffentlicht, Tests begannen im Januar 2026 — eine Lücke, die landesweit gilt. EcoFlows STREAM Ultra ist das marktnächste Produkt, wird aktuell aber speziell in Utah zum Verkauf angeboten, nicht in Maryland.',
          'Maryland war nicht in der Staat-für-Staat-Einsparungstabelle der Quelle enthalten, die für diese Serie verwendet wurde, daher liegt hier keine Maryland-spezifische Dollarzahl vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr — Marylands Strompreise nahe Washington, D.C. liegen wahrscheinlich eher am oberen Ende dieser Spanne, aber betrachten Sie dies als landesweite Spanne, nicht als bestätigte Maryland-Schätzung.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich EcoFlow vs. Anker vs. Zendure</a> an — reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Kit zertifiziert oder in Maryland heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurzantworten zu Balkonsolar in Maryland',
        faqs: [
          {
            q: 'Musste ich nach der Unterzeichnung des Gesetzes in Maryland warten, bevor ich ein Gerät installieren durfte?',
            a: 'Laut Gesetzesseite der Maryland General Assembly trat HB 1532 am 12. Mai 2026 mit Verkündung in Kraft, einige Tracker nennen jedoch den 1. Juli oder 1. Oktober 2026 – bestätigen Sie das genaue Datum beim Bundesstaat, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Kann meine HOA in Maryland Balkonsolar verbieten?',
            a: 'HB 1532 enthält keine ausdrückliche HOA-Vorrangregelung, prüfen Sie daher Ihren Mietvertrag oder Ihre HOA-Satzung gesondert. Für einen Bundesstaat, der HOA-Verbote ausdrücklich blockiert, siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz von Colorado</a>.',
          },
          {
            q: 'Was ist die für Maryland erwähnte 391-W-Unterschwelle?',
            a: 'Eine niedrigere Leistungsstufe, die im breiteren, bundesstaatenübergreifenden regulatorischen Rahmenwerk neben der Standardobergrenze von 1.200 W erwähnt wird — prüfen Sie die genaue Behandlung anhand von Marylands Gesetzestext, bevor Sie sich für ein bestimmtes Gerät darauf verlassen.',
          },
          {
            q: 'Bekomme ich in Maryland Geld für überschüssigen Strom?',
            a: 'Nein. Net Metering gilt gemäß HB 1532 nicht für Balkonsolar-Geräte, konsistent mit jedem anderen Bundesstaat mit entsprechendem Gesetz.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal dans le Maryland ?',
    dateModified: '2026-10-20',
    seoTitle: 'Le solaire de balcon est-il légal dans le Maryland ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — le HB 1532 a été signé le 12 mai 2026 et, selon la page du projet de loi de l\'Assemblée générale du Maryland, est entré en vigueur à la promulgation (certains sites de suivi donnent d\'autres dates). Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal dans le Maryland",
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le Maryland ?',
        answer: 'En vigueur. Le HB 1532 du Maryland (le Utility RELIEF Act) a été signé le 12 mai 2026 ; la page de l\'Assemblée générale du Maryland l\'indique en vigueur dès la promulgation, tandis que certains sites de suivi donnent le 1er juillet ou le 1er octobre 2026 — confirmez la date exacte auprès de l\'État.',
        bullets: [
          'HB 1532 signé le 12 mai 2026 — en vigueur dès la promulgation selon la page de l\'Assemblée générale (les sites de suivi divergent ; à confirmer)',
          "Plafond de 1 200 W, avec un seuil inférieur de 391 W mentionné dans le cadre réglementaire plus large",
          "Aucun système entièrement certifié UL 3700 n'est encore confirmé disponible",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Le HB 1532 du Maryland est entré en vigueur immédiatement à sa signature le 12 mai 2026 — aucun délai d'attente, contrairement à la plupart des autres États.",
          "Le plafond de 1 200 W correspond au modèle majoritaire ; un seuil distinct de 391 W est aussi mentionné dans le cadre réglementaire.",
          "La proximité du Maryland avec Washington D.C. signifie que de nombreux résidents paient des tarifs électriques proches de ceux de DC — un contexte pertinent, même si aucun chiffre d'économies spécifique au Maryland n'est confirmé ici.",
          "Aucun système complet n'a encore confirmé une certification UL 3700 complète, comme dans tous les autres États ayant adopté une loi.",
        ],
      },
      body1: {
        title: 'Que prévoit le HB 1532 dans le Maryland ?',
        content: [
          "<strong>Le HB 1532 du Maryland, le Utility RELIEF Act, a été signé le 12 mai 2026 et la page de l'Assemblée générale du Maryland l'indique en vigueur dès la promulgation — les sites de suivi divergent sur la date exacte (certains donnent le 1er juillet ou le 1er octobre 2026), confirmez-la donc auprès de l'État.</strong> Le plafond standard est de 1 200 W, conforme au modèle majoritaire utilisé dans la plupart des États. Un seuil distinct de 391 W apparaît aussi dans le cadre réglementaire multi-États plus large, qui pourrait appliquer un traitement allégé aux appareils plus petits — vérifiez le mécanisme exact dans le texte législatif du Maryland avant de vous fier à cette distinction pour un appareil donné.",
          "Comme dans les autres États ayant adopté une loi, le net metering ne s'applique pas — l'électricité excédentaire exportée vers le réseau n'est pas compensée, et le plafond de 1 200 W ainsi que l'exemption à 391 W des règles de référencement UL qui imposeraient de modifier le câblage ont été lus dans le texte promulgué du Chapter 353 (2026 Laws of Maryland) ; une version parallèle de la même section dans ce Chapter retient 391 W comme plafond, ce que nous n'avons pas pu concilier.",
        ],
        columns: ['Champ', 'Maryland HB 1532'],
        rows: [
          { Champ: "Signature / Entrée en vigueur", 'Maryland HB 1532': '12 mai 2026 / Dès la promulgation (sites de suivi divergent)' },
          { Champ: 'Plafond de puissance', 'Maryland HB 1532': '1 200 W (seuil de 391 W mentionné)' },
          { Champ: 'Net metering', 'Maryland HB 1532': 'Non disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Des kits certifiés sont-ils réellement disponibles ?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: "Vérifier le prix de l'EcoFlow STREAM Ultra sur Amazon",
          },
        ],
        content: [
          "<strong>La loi du Maryland, comme celle de chaque autre État, cite UL 3700 comme référence de sécurité, mais aucun système solaire enfichable complet n'a confirmé une certification complète à ce jour.</strong> La norme a été publiée en décembre 2025, avec des tests débutant en janvier 2026 — un délai qui s'applique à l'échelle nationale. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement dans l'Utah, pas dans le Maryland.",
          "Le Maryland ne figurait pas dans le tableau des économies État par État utilisé pour cette série, donc aucun chiffre spécifique au Maryland n'est disponible ici. Dans les États suivis, un kit de 800 W permet d'économiser environ 150 à 350 $ par an selon les tarifs électriques locaux — les tarifs du Maryland, proches de ceux de DC, situeraient probablement l'État vers le haut de cette fourchette, mais considérez ceci comme une fourchette nationale, pas une estimation confirmée pour le Maryland.",
          "<strong>Prêt à comparer du matériel concret ?</strong> Consultez notre <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>sélection actuelle de batteries domestiques américaines pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison EcoFlow vs. Anker vs. Zendure</a> — de simples liens produits, sans affirmer qu'un kit spécifique est certifié ou disponible dans le Maryland aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le Maryland',
        faqs: [
          {
            q: 'Ai-je dû attendre après la signature de la loi du Maryland pour installer un appareil ?',
            a: 'Selon la page du projet de loi de l\'Assemblée générale du Maryland, le HB 1532 est entré en vigueur dès la promulgation le 12 mai 2026, mais certains sites de suivi donnent le 1er juillet ou le 1er octobre 2026 — confirmez la date exacte auprès de l\'État avant de vous y fier.',
          },
          {
            q: 'Mon HOA dans le Maryland peut-il interdire le solaire de balcon ?',
            a: 'Le HB 1532 ne contient pas de disposition explicite de préemption des HOA, vérifiez donc séparément votre bail ou le règlement de votre HOA. Pour un État qui bloque explicitement les interdictions des HOA, voir la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon du Colorado</a>.',
          },
          {
            q: "Qu'est-ce que le seuil de 391 W mentionné pour le Maryland ?",
            a: 'Un palier de puissance inférieur mentionné dans le cadre réglementaire multi-États plus large, aux côtés du plafond standard de 1 200 W — vérifiez le traitement exact dans le texte législatif du Maryland avant de vous y fier pour un appareil donné.',
          },
          {
            q: "Suis-je payé pour l'électricité excédentaire dans le Maryland ?",
            a: "Non. Le net metering ne s'applique pas aux appareils solaires de balcon en vertu du HB 1532, comme dans tous les autres États ayant adopté une loi.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-ja.webp',
    title: 'メリーランド州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-10-20',
    seoTitle: 'メリーランド州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'はい。HB 1532は2026年5月12日に署名され、メリーランド州議会の法案ページによれば制定と同時に施行されました（追跡サイトの中には別の日付を挙げるものもあります）。PromptQuorumによるクイックアンサーです。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'メリーランド州でバルコニーソーラーが合法かどうかを確認する米国の賃貸居住者と持ち家所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'メリーランド州でバルコニーソーラーは合法ですか？',
        answer: '施行済み。メリーランド州のHB 1532（Utility RELIEF Act）は2026年5月12日に署名されました。メリーランド州議会の法案ページでは制定と同時の施行とされていますが、追跡サイトの中には2026年7月1日または10月1日を挙げるものもあるため、正確な日付は州にご確認ください。',
        bullets: [
          'HB 1532は2026年5月12日に署名。州議会ページでは制定と同時に施行（追跡サイトは異なる。日付を要確認）',
          '上限1,200W。より広い規制フレームワークでは391Wの下位しきい値にも言及',
          '完全にUL 3700認証を取得したシステムはまだ確認されていません',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'メリーランド州のHB 1532は2026年5月12日の署名と同時に即座に発効しました——他の多くの州と異なり待機期間はありません。',
          '上限1,200Wは大多数の州と同じテンプレートです。規制フレームワークでは別途391Wの下位しきい値にも言及されています。',
          'メリーランド州はワシントンDCに隣接しており、多くの住民がDC地域の電気料金を支払っています。メリーランド州固有の節約額はここでは独自確認されていませんが、参考情報として関連します。',
          '他の制定済み州と同様、完全なUL 3700認証を取得したシステムはまだ確認されていません。',
        ],
      },
      body1: {
        title: 'メリーランド州のHB 1532は何を定めていますか？',
        content: [
          '<strong>メリーランド州のHB 1532（Utility RELIEF Act）は2026年5月12日に署名され、メリーランド州議会の法案ページでは制定と同時の施行とされています。追跡サイトは正確な施行日で食い違っており（2026年7月1日または10月1日とするものもあります）、州にご確認ください。</strong> 標準的な上限は1,200Wで、大多数の制定州で使われているテンプレートと一致します。より広い複数州規制フレームワークには391Wの下位しきい値も別途登場し、小型機器に対してより軽い扱いを適用する可能性があります——特定の機器についてこの区別に依拠する前に、メリーランド州の法令原文で正確な仕組みを確認してください。',
          '他の制定州と同様、ネットメータリングは適用されません——グリッドに輸出された余剰電力への対価はなく、1,200Wの上限と、配線変更を要するUL掲載規定に対する391Wの適用除外は、成立したChapter 353（2026 Laws of Maryland）の本文で確認しました。同Chapter内の同じ条項の並行版は391Wを上限としており、これは整理できていません。',
        ],
        columns: ['項目', 'メリーランド州 HB 1532'],
        rows: [
          { 項目: '署名日／発効日', 'メリーランド州 HB 1532': '2026年5月12日／制定と同時（追跡サイトは異なる）' },
          { 項目: 'ワット数上限', 'メリーランド州 HB 1532': '1,200W（391Wの下位しきい値に言及）' },
          { 項目: 'ネットメータリング', 'メリーランド州 HB 1532': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '認証済みキットは実際にもう入手できますか？',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'AmazonでEcoFlow STREAM Ultraの価格を確認',
          },
        ],
        content: [
          '<strong>メリーランド州の法律も、他の制定州と同様にUL 3700を安全基準として参照していますが、本稿執筆時点で完全なプラグイン型ソーラーシステムのフル認証取得が確認されたものはありません。</strong> この規格は2025年12月に公開され、試験は2026年1月に開始されました——このギャップは全米共通です。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現在の販売対象は特にユタ州であり、メリーランド州ではありません。',
          'メリーランド州は本シリーズで使用した情報源の州別節約額テーブルに含まれていなかったため、メリーランド州固有の金額はここでは提示できません。追跡対象州全体では、800Wキットは地域の電気料金により年間およそ150～350ドルの節約となります——メリーランド州はワシントンDCに近い電気料金であるため、この範囲の上限寄りになる可能性が高いですが、これは確認されたメリーランド州の推定値ではなく、全米的な範囲として扱ってください。',
          '<strong>実際のハードウェアを比較する準備はできていますか？</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国製ホームバッテリーの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください——これらは単なる製品リンクであり、特定のキットがメリーランド州で認証済み・購入可能であると主張するものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'メリーランド州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'メリーランド州の法律が署名された後、機器を設置するまで待機する必要がありましたか？',
            a: 'メリーランド州議会の法案ページによれば、HB 1532は2026年5月12日の制定と同時に施行されましたが、追跡サイトの中には2026年7月1日または10月1日を挙げるものもあります。頼る前に、正確な日付を州にご確認ください。',
          },
          {
            q: 'メリーランド州のHOA（住宅所有者組合）はバルコニーソーラーを禁止できますか？',
            a: 'HB 1532にはHOAの優先禁止に関する明示的な条項がないため、賃貸契約またはHOA規約を別途確認してください。HOAによる禁止を明示的にブロックする州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のバルコニーソーラー法</a>をご覧ください。',
          },
          {
            q: 'メリーランド州で言及されている391Wの下位しきい値とは何ですか？',
            a: '標準の1,200W上限と並んで、より広い複数州規制フレームワークで言及されている低いワット数階層です——特定の機器についてこれに依拠する前に、メリーランド州の法令原文で正確な扱いを確認してください。',
          },
          {
            q: 'メリーランド州では余剰電力に対して支払いを受けられますか？',
            a: 'いいえ。他の全ての制定州と同様、HB 1532の下ではバルコニーソーラー機器にネットメータリングは適用されません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-zh.webp',
    title: '在马里兰州安装阳台太阳能合法吗？',
    dateModified: '2026-10-20',
    seoTitle: '在马里兰州安装阳台太阳能合法吗？| Prompt Bites | PromptQuorum',
    metaDescription: '是的——HB 1532于2026年5月12日签署，据马里兰州议会法案页面，自颁布起生效（部分追踪网站给出其他日期）。PromptQuorum快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实马里兰州阳台太阳能是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '在马里兰州安装阳台太阳能合法吗？',
        answer: '已生效。马里兰州HB 1532（Utility RELIEF Act）于2026年5月12日签署；马里兰州议会法案页面列明其自颁布起生效，而部分追踪网站给出2026年7月1日或10月1日——请向州政府确认确切日期。',
        bullets: [
          'HB 1532于2026年5月12日签署——据州议会页面自颁布起生效（追踪网站不一致；请确认日期）',
          '功率上限1,200W，更广泛的监管框架中还提及了391W的较低门槛',
          '目前尚无完全通过UL 3700认证的系统确认上市',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '马里兰州HB 1532于2026年5月12日签署后立即生效——与大多数其他州不同，没有等待期。',
          '1,200W的上限符合多数州采用的标准模板；监管框架中还单独提及了391W的较低门槛。',
          '马里兰州毗邻华盛顿特区，许多居民支付的电价接近DC地区水平——这是相关背景信息，尽管本文未独立确认马里兰州具体的节省数字。',
          '与其他所有已立法州一样，目前尚无完整系统确认获得完整的UL 3700认证。',
        ],
      },
      body1: {
        title: '马里兰州HB 1532有哪些要求？',
        content: [
          '<strong>马里兰州的HB 1532（Utility RELIEF Act）于2026年5月12日签署，马里兰州议会法案页面列明其自颁布起生效——各追踪网站对确切生效日期说法不一（部分称2026年7月1日或10月1日），请向州政府确认。</strong> 标准上限为1,200W，与大多数已立法州采用的模板一致。更广泛的多州监管框架中还出现了单独的391W较低门槛，可能对较小设备适用更宽松的处理方式——在依赖这一区分处理具体设备之前，请以马里兰州法律原文核实具体机制。',
          '与其他已立法州一样，净计量（net metering）不适用——输送到电网的多余电力不获补偿，1,200瓦的上限以及对需要改动布线的UL列名规定的391瓦豁免，已在已颁布的Chapter 353(2026 Laws of Maryland)文本中核对;同一Chapter中该条款的并行版本把391瓦作为上限,我们无法厘清。',
        ],
        columns: ['项目', '马里兰州 HB 1532'],
        rows: [
          { 项目: '签署／生效日期', '马里兰州 HB 1532': '2026年5月12日／自颁布起（追踪网站不一致）' },
          { 项目: '功率上限', '马里兰州 HB 1532': '1,200W（提及391W较低门槛）' },
          { 项目: '净计量', '马里兰州 HB 1532': '不适用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '认证套件现在真的能买到吗？',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: '在 Amazon 查看 EcoFlow STREAM Ultra 价格',
          },
        ],
        content: [
          '<strong>马里兰州的法律与其他所有已立法州一样，将UL 3700列为安全基准，但截至撰写本文时，尚无完整的插电式太阳能系统确认获得完整认证。</strong> 该标准于2025年12月发布，测试于2026年1月启动——这一空档在全美范围内普遍存在。EcoFlow的STREAM Ultra是目前最接近上市的产品，但目前仅在犹他州而非马里兰州销售。',
          '本系列使用的数据来源中，各州节省数据表未包含马里兰州，因此本文无法提供马里兰州特定的具体金额。在已追踪的各州中，一套800W套件根据当地电价，每年大约可节省150至350美元——马里兰州毗邻DC地区的电价水平，可能使其更接近区间上限，但请将其视为全国性区间，而非已确认的马里兰州估算值。',
          '<strong>准备好比较实际硬件了吗？</strong> 参见<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统对比</a>——这些仅是产品链接，并不代表任何特定套件已在马里兰州获得认证或可以购买。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于马里兰州阳台太阳能的快速解答',
        faqs: [
          {
            q: '马里兰州法律签署后，我是否需要等待才能安装设备？',
            a: '据马里兰州议会法案页面，HB 1532自2026年5月12日颁布起生效，但部分追踪网站给出2026年7月1日或10月1日——依赖前请向州政府确认确切日期。',
          },
          {
            q: '马里兰州的业主协会（HOA）可以禁止阳台太阳能吗？',
            a: 'HB 1532未包含明确的HOA优先适用条款，因此请单独核实您的租约或HOA规约。若想了解明确阻止HOA禁令的州，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法规</a>。',
          },
          {
            q: '马里兰州提到的391W较低门槛是什么？',
            a: '这是在标准1,200W上限之外，更广泛的多州监管框架中提及的一个较低功率层级——在依赖此规则处理具体设备之前，请以马里兰州法律原文核实具体的处理方式。',
          },
          {
            q: '在马里兰州，多余的电力能获得补偿吗？',
            a: '不能。根据HB 1532，净计量不适用于阳台太阳能设备，与其他所有已立法州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Maryland?',
    dateModified: '2026-10-20',
    seoTitle: '¿Es legal la energía solar de balcón en Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí — la HB 1532 se firmó el 12 de mayo de 2026 y, según la página del proyecto en la Asamblea General de Maryland, entró en vigor con su promulgación (algunos rastreadores dan otras fechas). Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Maryland',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Maryland?',
        answer: 'En vigor. La HB 1532 de Maryland (la Utility RELIEF Act) se firmó el 12 de mayo de 2026; la página de la Asamblea General de Maryland la indica en vigor desde su promulgación, mientras que algunos rastreadores dan el 1 de julio o el 1 de octubre de 2026 — confirma la fecha exacta con el estado.',
        bullets: [
          'HB 1532 firmada el 12 de mayo de 2026 — en vigor desde la promulgación según la página de la Asamblea General (los rastreadores difieren; confirma la fecha)',
          'Límite de 1,200 W, con un umbral inferior de 391 W mencionado en el marco regulatorio más amplio',
          'Todavía no se confirma la disponibilidad de ningún sistema con certificación UL 3700 completa',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La HB 1532 de Maryland entró en vigor de inmediato al firmarse, el 12 de mayo de 2026 — sin período de espera, a diferencia de la mayoría de los demás estados.',
          'El límite de 1,200 W coincide con la plantilla mayoritaria; el marco regulatorio también menciona un umbral separado de 391 W.',
          'La cercanía de Maryland a Washington D.C. hace que muchos residentes paguen tarifas eléctricas similares a las de esa zona — un dato relevante, aunque aquí no se confirma de forma independiente una cifra de ahorro específica para Maryland.',
          'Ningún sistema completo confirma todavía la certificación UL 3700 total, igual que en el resto de los estados con ley aprobada.',
        ],
      },
      body1: {
        title: '¿Qué exige la HB 1532 en Maryland?',
        content: [
          '<strong>La HB 1532 de Maryland, la Utility RELIEF Act, se firmó el 12 de mayo de 2026 y la página de la Asamblea General de Maryland la indica en vigor desde su promulgación — los rastreadores discrepan sobre la fecha exacta (algunos dan el 1 de julio o el 1 de octubre de 2026), así que confírmala con el estado.</strong> El límite estándar es de 1,200 W, coincidiendo con la plantilla que usan la mayoría de los estados con ley aprobada. También aparece un umbral separado de 391 W en el marco regulatorio multiestatal más amplio, que podría aplicar un trato más flexible a los dispositivos más pequeños — confirma el mecanismo exacto en el texto legal de Maryland antes de basarte en esta distinción para un dispositivo específico.',
          'Como en otros estados con ley aprobada, el net metering no aplica — la energía excedente exportada a la red no recibe compensación, y el límite de 1.200 W y la exención de 391 W de las normas de listado UL que exigirían modificar el cableado se leyeron en el texto promulgado del Chapter 353 (2026 Laws of Maryland); una versión paralela de la misma sección en ese Chapter usa 391 W como límite, algo que no pudimos conciliar.',
        ],
        columns: ['Campo', 'Maryland HB 1532'],
        rows: [
          { Campo: 'Firma / Vigencia', 'Maryland HB 1532': '12 de mayo de 2026 / Desde la promulgación (rastreadores difieren)' },
          { Campo: 'Límite de potencia', 'Maryland HB 1532': '1,200 W (se menciona un umbral de 391 W)' },
          { Campo: 'Net metering', 'Maryland HB 1532': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Ya hay kits certificados disponibles en realidad?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Consulta el precio del EcoFlow STREAM Ultra en Amazon',
          },
        ],
        content: [
          '<strong>La ley de Maryland, igual que la de cada estado con ley aprobada, hace referencia a UL 3700 como el estándar de seguridad, pero al momento de escribir esto ningún sistema solar enchufable completo confirma tener la certificación total.</strong> El estándar se publicó en diciembre de 2025 y las pruebas comenzaron en enero de 2026 — un desfase que se aplica a nivel nacional. El STREAM Ultra de EcoFlow es el producto más cercano a llegar al mercado, pero actualmente se vende específicamente en Utah, no en Maryland.',
          'Maryland no estaba en la tabla de ahorros por estado de la fuente usada para esta serie, así que aquí no hay una cifra específica para Maryland. En los estados que sí se rastrearon, un kit de 800 W ahorra entre $150 y $350 al año aproximadamente, según las tarifas eléctricas locales — es probable que las tarifas de Maryland, cercanas a las de DC, lo ubiquen hacia el extremo superior de ese rango, pero trátalo como un rango nacional, no como una estimación confirmada para Maryland.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selecciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación de ecosistemas EcoFlow vs. Anker vs. Zendure</a> — enlaces de productos simples, sin ninguna afirmación de que un kit específico esté certificado o disponible en Maryland hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la energía solar de balcón en Maryland',
        faqs: [
          {
            q: '¿Tuve que esperar después de que se firmara la ley de Maryland para instalar un dispositivo?',
            a: 'Según la página del proyecto en la Asamblea General de Maryland, la HB 1532 entró en vigor con su promulgación el 12 de mayo de 2026, pero algunos rastreadores dan el 1 de julio o el 1 de octubre de 2026 — confirma la fecha exacta con el estado antes de fiarte de ella.',
          },
          {
            q: '¿Mi HOA en Maryland puede prohibir la energía solar de balcón?',
            a: 'La HB 1532 no incluye un lenguaje explícito de preferencia sobre las HOA, así que revisa tu contrato de arrendamiento o el reglamento de tu HOA por separado. Para un estado que bloquea explícitamente las prohibiciones de las HOA, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿Qué es el umbral de 391 W que se menciona para Maryland?',
            a: 'Un nivel de potencia inferior mencionado en el marco regulatorio multiestatal más amplio, junto al límite estándar de 1,200 W — confirma el trato exacto en el texto legal de Maryland antes de basarte en él para un dispositivo específico.',
          },
          {
            q: '¿Me pagan por el exceso de energía en Maryland?',
            a: 'No. El net metering no aplica a los dispositivos solares de balcón bajo la HB 1532, igual que en todos los demás estados con ley aprobada.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal em Maryland?',
    dateModified: '2026-10-20',
    seoTitle: 'A energia solar de varanda é legal em Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim — a HB 1532 foi sancionada em 12 de maio de 2026 e, segundo a página do projeto na Assembleia Geral de Maryland, entrou em vigor com a promulgação (alguns rastreadores indicam outras datas). Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Maryland',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Maryland?',
        answer: 'Em vigor. A HB 1532 de Maryland (a Utility RELIEF Act) foi sancionada em 12 de maio de 2026; a página da Assembleia Geral de Maryland a indica em vigor desde a promulgação, enquanto alguns rastreadores indicam 1º de julho ou 1º de outubro de 2026 — confirme a data exata com o estado.',
        bullets: [
          'HB 1532 sancionada em 12 de maio de 2026 — em vigor desde a promulgação segundo a página da Assembleia Geral (rastreadores divergem; confirme a data)',
          'Limite de 1.200 W, com um subpatamar menor de 391 W mencionado no marco regulatório mais amplo',
          'Nenhum sistema com certificação UL 3700 completa foi confirmado disponível até o momento',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A HB 1532 de Maryland entrou em vigor imediatamente após a assinatura, em 12 de maio de 2026 — sem período de espera, diferente da maioria dos outros estados.',
          'O limite de 1.200 W segue o modelo adotado pela maioria; o marco regulatório também menciona um subpatamar separado de 391 W.',
          'A proximidade de Maryland com Washington D.C. faz com que muitos moradores paguem tarifas de energia próximas às da região de DC — um contexto relevante, mesmo que um número de economia específico para Maryland não seja confirmado de forma independente aqui.',
          'Nenhum sistema completo confirmou certificação UL 3700 total até agora, assim como em todos os outros estados com lei em vigor.',
        ],
      },
      body1: {
        title: 'O que a HB 1532 exige em Maryland?',
        content: [
          '<strong>A HB 1532 de Maryland, a Utility RELIEF Act, foi sancionada em 12 de maio de 2026 e a página da Assembleia Geral de Maryland a indica em vigor desde a promulgação — os rastreadores divergem quanto à data exata (alguns indicam 1º de julho ou 1º de outubro de 2026), então confirme-a com o estado.</strong> O limite padrão é de 1.200 W, seguindo o modelo usado na maioria dos estados com lei em vigor. Um subpatamar separado de 391 W também aparece no marco regulatório mais amplo entre estados, que pode aplicar um tratamento mais flexível a dispositivos menores — confirme o mecanismo exato no texto da lei de Maryland antes de confiar nessa distinção para um dispositivo específico.',
          'Assim como em outros estados com lei em vigor, o net metering não se aplica — a energia excedente exportada para a rede não recebe compensação, e o limite de 1.200 W e a isenção de 391 W das regras de listagem UL que exigiriam alterar a fiação foram lidos no texto promulgado do Chapter 353 (2026 Laws of Maryland); uma versão paralela da mesma seção nesse Chapter usa 391 W como limite, o que não conseguimos conciliar.',
        ],
        columns: ['Campo', 'Maryland HB 1532'],
        rows: [
          { Campo: 'Assinatura / Vigência', 'Maryland HB 1532': '12 de maio de 2026 / Desde a promulgação (rastreadores divergem)' },
          { Campo: 'Limite de potência', 'Maryland HB 1532': '1.200 W (subpatamar de 391 W mencionado)' },
          { Campo: 'Net metering', 'Maryland HB 1532': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Já existem kits certificados disponíveis de verdade?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Confira o preço do EcoFlow STREAM Ultra na Amazon',
          },
        ],
        content: [
          '<strong>A lei de Maryland, assim como a de todos os outros estados com lei em vigor, faz referência à UL 3700 como o padrão de segurança, mas nenhum sistema solar plug-in completo confirmou certificação total até o momento desta publicação.</strong> O padrão foi publicado em dezembro de 2025, com os testes começando em janeiro de 2026 — uma lacuna que se aplica em todo o país. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente está à venda especificamente em Utah, não em Maryland.',
          'Maryland não estava na tabela de economia por estado da fonte usada nesta série, então um valor específico para Maryland não está disponível aqui. Nos estados que foram rastreados, um kit de 800 W economiza aproximadamente entre US$ 150 e US$ 350 por ano, dependendo das tarifas de energia locais — as tarifas de Maryland, próximas às da região de DC, provavelmente colocam o estado mais perto do limite superior dessa faixa, mas trate isso como uma faixa nacional, não como uma estimativa confirmada para Maryland.',
          '<strong>Pronto para comparar hardware de verdade?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">opções atuais de baterias domésticas dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação de ecossistemas EcoFlow vs. Anker vs. Zendure</a> — apenas links de produtos, sem afirmar que algum kit específico é certificado ou está disponível em Maryland hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Maryland',
        faqs: [
          {
            q: 'Eu precisei esperar depois que a lei de Maryland foi assinada para instalar um dispositivo?',
            a: 'Segundo a página do projeto na Assembleia Geral de Maryland, a HB 1532 entrou em vigor com a promulgação em 12 de maio de 2026, mas alguns rastreadores indicam 1º de julho ou 1º de outubro de 2026 — confirme a data exata com o estado antes de confiar nela.',
          },
          {
            q: 'Minha HOA em Maryland pode proibir a energia solar de varanda?',
            a: 'A HB 1532 não inclui linguagem explícita de preempção de HOA, então verifique seu contrato de locação ou o regulamento da sua HOA separadamente. Para um estado que bloqueia explicitamente proibições de HOA, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'O que é o subpatamar de 391 W mencionado para Maryland?',
            a: 'Um nível de potência menor mencionado no marco regulatório mais amplo entre estados, junto ao limite padrão de 1.200 W — confirme o tratamento exato no texto da lei de Maryland antes de confiar nele para um dispositivo específico.',
          },
          {
            q: 'Eu recebo pagamento pelo excedente de energia em Maryland?',
            a: 'Não. O net metering não se aplica a dispositivos solares de varanda sob a HB 1532, assim como em todos os outros estados com lei em vigor.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في ولاية ماريلاند؟',
    dateModified: '2026-10-20',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في ماريلاند؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم — وُقّع HB 1532 في 12 مايو 2026 وبحسب صفحة المشروع لدى الجمعية العامة لماريلاند دخل حيز النفاذ عند سنّه (وتذكر بعض المتتبّعات تواريخ أخرى). إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون وأصحاب المنازل في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في ماريلاند',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في ماريلاند؟',
        answer: 'ساري المفعول. وُقّع قانون HB 1532 في ماريلاند (Utility RELIEF Act) في 12 مايو 2026؛ وتذكر صفحة الجمعية العامة لماريلاند أنه نافذ عند سنّه، بينما تذكر بعض المتتبّعات 1 يوليو أو 1 أكتوبر 2026 — فأكّد التاريخ الدقيق لدى الولاية.',
        bullets: [
          'وُقّع HB 1532 في 12 مايو 2026 — نافذ عند سنّه بحسب صفحة الجمعية العامة (المتتبّعات تختلف؛ أكّد التاريخ)',
          'حد أقصى 1,200 واط، مع عتبة فرعية أقل تبلغ 391 واط مذكورة في الإطار التنظيمي الأوسع',
          'لا يوجد حتى الآن نظام مؤكَّد حاصل على شهادة UL 3700 كاملة',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'دخل قانون HB 1532 في ماريلاند حيز التنفيذ فورًا عند التوقيع في 12 مايو 2026 — دون فترة انتظار، على عكس معظم الولايات الأخرى.',
          'يتوافق الحد الأقصى 1,200 واط مع النموذج المعتمد في غالبية الولايات؛ كما يُذكر في الإطار التنظيمي عتبة فرعية منفصلة تبلغ 391 واط.',
          'قرب ماريلاند من واشنطن العاصمة يعني أن العديد من السكان يدفعون تعرفة كهرباء قريبة من تعرفة منطقة العاصمة — وهذا سياق ذو صلة، رغم عدم تأكيد رقم توفير محدد لماريلاند بشكل مستقل هنا.',
          'لا يوجد حتى الآن نظام كامل مؤكَّد حصوله على شهادة UL 3700 الكاملة، كما هو الحال في جميع الولايات الأخرى التي سنّت القانون.',
        ],
      },
      body1: {
        title: 'ماذا يتطلب قانون HB 1532 في ماريلاند؟',
        content: [
          '<strong>وُقّع قانون HB 1532 في ماريلاند (Utility RELIEF Act) في 12 مايو 2026 وتذكر صفحة الجمعية العامة لماريلاند أنه نافذ عند سنّه — وتختلف المتتبّعات في تاريخ النفاذ الدقيق (بعضها يذكر 1 يوليو أو 1 أكتوبر 2026)، فأكّده لدى الولاية.</strong> الحد الأقصى القياسي هو 1,200 واط، بما يتوافق مع النموذج المعتمد في غالبية الولايات المسنّة. كما تظهر عتبة فرعية منفصلة قدرها 391 واط في الإطار التنظيمي الأوسع بين الولايات، والتي قد تطبّق معاملة أخف على الأجهزة الأصغر — يُرجى التحقق من الآلية الدقيقة في نص التشريع الرسمي لماريلاند قبل الاعتماد على هذا التمييز لجهاز معين.',
          'كما هو الحال في الولايات الأخرى المسنّة، لا ينطبق نظام "net metering" — فالطاقة الفائضة المصدَّرة إلى الشبكة لا تحصل على أي تعويض، وقد قُرئ حد 1,200 واط وإعفاء 391 واط من أحكام الإدراج لدى UL التي تتطلب تعديل التمديدات في النص المُقَرّ لـ Chapter 353 (2026 Laws of Maryland)؛ وتستخدم نسخة موازية للمادة نفسها في ذلك الـ Chapter رقم 391 واط حدًّا أقصى، ولم نتمكن من التوفيق بينهما.',
        ],
        columns: ['الحقل', 'Maryland HB 1532'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'Maryland HB 1532': '12 مايو 2026 / عند السنّ (المتتبّعات تختلف)' },
          { الحقل: 'الحد الأقصى للطاقة', 'Maryland HB 1532': '1,200 واط (مع الإشارة إلى عتبة فرعية 391 واط)' },
          { الحقل: 'Net metering', 'Maryland HB 1532': 'غير متاح' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل تتوفر أطقم معتمدة فعليًا حتى الآن؟',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'تحقق من سعر EcoFlow STREAM Ultra على أمازون',
          },
        ],
        content: [
          '<strong>يشير قانون ماريلاند، مثل جميع الولايات المسنّة الأخرى، إلى معيار UL 3700 كمرجع للسلامة، لكن حتى وقت كتابة هذا المقال لم يتأكد حصول أي نظام طاقة شمسية قابل للتوصيل المباشر (plug-in) بشكل كامل على الشهادة الكاملة.</strong> نُشر المعيار في ديسمبر 2025 وبدأت الاختبارات في يناير 2026 — وهذه فجوة تنطبق على المستوى الوطني. يُعد منتج STREAM Ultra من EcoFlow الأقرب إلى الوصول للسوق، لكنه يُباع حاليًا تحديدًا في ولاية يوتا، وليس في ماريلاند.',
          'لم تكن ماريلاند ضمن جدول التوفير حسب الولاية الذي استُخدم كمصدر لهذه السلسلة، لذا لا يتوفر رقم محدد لماريلاند هنا. وفي الولايات التي تم تتبعها، يوفّر طقم بقدرة 800 واط ما بين 150 و350 دولارًا أمريكيًا تقريبًا سنويًا حسب تعرفة الكهرباء المحلية — ومن المرجح أن تعرفة الكهرباء في ماريلاند، القريبة من تعرفة منطقة العاصمة واشنطن، تضعها في الطرف الأعلى من هذا النطاق، لكن يجب التعامل مع هذا كنطاق وطني عام وليس كتقدير مؤكَّد لماريلاند.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة أنظمة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات، وليست ادعاءً بأن أي طقم معين معتمد أو متاح في ماريلاند حاليًا.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في ماريلاند',
        faqs: [
          {
            q: 'هل كان عليّ الانتظار بعد توقيع قانون ماريلاند لتركيب جهاز؟',
            a: 'بحسب صفحة المشروع لدى الجمعية العامة لماريلاند، دخل HB 1532 حيز النفاذ عند سنّه في 12 مايو 2026، لكن بعض المتتبّعات تذكر 1 يوليو أو 1 أكتوبر 2026 — فأكّد التاريخ الدقيق لدى الولاية قبل الاعتماد عليه.',
          },
          {
            q: 'هل يمكن لجمعية الملاك (HOA) في ماريلاند حظر الطاقة الشمسية للشرفات؟',
            a: 'لا يتضمن قانون HB 1532 نصًا صريحًا يلغي صلاحية جمعيات الملاك في هذا الشأن، لذا يُرجى مراجعة عقد الإيجار أو لائحة جمعية الملاك الخاصة بك بشكل منفصل. للاطلاع على ولاية تمنع صراحةً حظر جمعيات الملاك، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'ما هي عتبة الـ391 واط الفرعية المذكورة لماريلاند؟',
            a: 'مستوى طاقة أقل مذكور في الإطار التنظيمي الأوسع بين الولايات إلى جانب الحد الأقصى القياسي البالغ 1,200 واط — يُرجى التحقق من المعاملة الدقيقة في نص التشريع الرسمي لماريلاند قبل الاعتماد عليها لجهاز معين.',
          },
          {
            q: 'هل أحصل على مقابل مالي للطاقة الفائضة في ماريلاند؟',
            a: 'لا. لا ينطبق نظام "net metering" على أجهزة الطاقة الشمسية للشرفات بموجب قانون HB 1532، بما يتوافق مع جميع الولايات الأخرى المسنّة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-maryland-overview-hero-ko.webp',
    title: '메릴랜드주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-10-20',
    seoTitle: '메릴랜드주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '네 — HB 1532는 2026년 5월 12일 서명되었으며, 메릴랜드 주 의회 법안 페이지에 따르면 제정과 동시에 시행되었습니다(일부 추적 사이트는 다른 날짜를 제시). PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '메릴랜드주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-new-jersey',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '메릴랜드주에서 발코니 태양광은 합법입니까?',
        answer: '시행 중입니다. 메릴랜드 HB 1532(Utility RELIEF Act)는 2026년 5월 12일 서명되었습니다. 메릴랜드 주 의회 법안 페이지는 제정과 동시에 시행되는 것으로 표기하지만 일부 추적 사이트는 2026년 7월 1일 또는 10월 1일을 제시하므로 정확한 날짜는 주에 확인하십시오.',
        bullets: [
          'HB 1532는 2026년 5월 12일 서명 — 주 의회 페이지 기준 제정과 동시에 시행(추적 사이트는 다름, 날짜 확인 필요)',
          '상한선 1,200W이며, 더 넓은 규제 프레임워크에서는 391W의 하위 임계값도 언급됨',
          '완전한 UL 3700 인증을 받은 시스템은 아직 확인되지 않았습니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '메릴랜드주 HB 1532는 2026년 5월 12일 서명과 동시에 즉시 발효되었습니다 — 대부분의 다른 주와 달리 대기 기간이 없습니다.',
          '1,200W 상한선은 대다수 주에서 채택한 표준 모델과 일치합니다. 규제 프레임워크에는 391W의 별도 하위 임계값도 언급되어 있습니다.',
          '메릴랜드주는 워싱턴 D.C.와 인접해 있어 많은 주민이 DC 지역과 유사한 전기요금을 지불합니다 — 이는 관련 배경 정보이지만, 메릴랜드주 고유의 절감액 수치는 이 문서에서 별도로 확인되지 않았습니다.',
          '다른 모든 시행 주와 마찬가지로, 완전한 UL 3700 인증을 받은 시스템은 아직 확인되지 않았습니다.',
        ],
      },
      body1: {
        title: '메릴랜드주 HB 1532는 무엇을 요구합니까?',
        content: [
          '<strong>메릴랜드 HB 1532(Utility RELIEF Act)는 2026년 5월 12일 서명되었으며 메릴랜드 주 의회 법안 페이지는 제정과 동시에 시행되는 것으로 표기합니다. 추적 사이트는 정확한 시행일이 서로 다르므로(일부는 2026년 7월 1일 또는 10월 1일) 주에 확인하십시오.</strong> 표준 상한선은 1,200W로, 대다수 시행 주에서 사용하는 표준 모델과 일치합니다. 더 넓은 다주(multi-state) 규제 프레임워크에는 391W의 별도 하위 임계값도 등장하며, 이는 소형 기기에 더 완화된 처리를 적용할 수 있습니다 — 특정 기기에 이 구분을 적용하기 전에 메릴랜드주 법령 원문을 통해 정확한 적용 방식을 확인해야 합니다.',
          '다른 시행 주와 마찬가지로 넷 미터링(net metering)은 적용되지 않습니다 — 전력망으로 송출된 잉여 전력에 대해서는 어떠한 보상도 제공되지 않으며, 1,200W 상한선과 배선 변경을 요구하는 UL 등재 조항에 대한 391W 면제는 제정된 Chapter 353(2026 Laws of Maryland) 원문에서 확인했습니다. 같은 Chapter 안에는 391W를 상한으로 쓰는 병렬 조문도 있으며, 이를 조정하지 못했습니다.',
        ],
        columns: ['항목', '메릴랜드주 HB 1532'],
        rows: [
          { 항목: '서명 / 발효', '메릴랜드주 HB 1532': '2026년 5월 12일 / 제정과 동시(추적 사이트는 다름)' },
          { 항목: '전력 상한선', '메릴랜드주 HB 1532': '1,200W(391W 하위 임계값 언급됨)' },
          { 항목: '넷 미터링', '메릴랜드주 HB 1532': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '인증된 키트가 실제로 지금 판매되고 있습니까?',
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=EcoFlow%20STREAM%20Ultra',
            productName: 'EcoFlow STREAM Ultra',
            productCategory: 'balcony-solar-battery',
            priceRange: '1200-1350',
            label: 'Amazon에서 EcoFlow STREAM Ultra 가격 확인하기',
          },
        ],
        content: [
          '<strong>메릴랜드주 법률도 다른 모든 시행 주와 마찬가지로 UL 3700을 안전 기준으로 참조하고 있지만, 이 글을 작성하는 시점까지 완전한 플러그인형 태양광 시스템 중 완전한 인증을 받은 제품은 확인되지 않았습니다.</strong> 이 표준은 2025년 12월에 발표되었으며 시험은 2026년 1월에 시작되었습니다 — 이러한 공백은 전국적으로 동일하게 적용됩니다. EcoFlow의 STREAM Ultra가 시장 출시에 가장 근접한 제품이지만, 현재는 메릴랜드주가 아닌 유타주에서 구체적으로 판매되고 있습니다.',
          '메릴랜드주는 이 시리즈에 사용된 자료 출처의 주별 절감액 표에 포함되어 있지 않았기 때문에, 메릴랜드주 고유의 구체적인 금액은 제공할 수 없습니다. 자료가 추적된 주들을 기준으로 볼 때, 800W 키트는 지역 전기요금에 따라 연간 약 150~350달러를 절감합니다 — 메릴랜드주는 워싱턴 D.C.와 인접한 전기요금 수준을 고려할 때 이 범위의 상단에 가까울 가능성이 높지만, 이는 확인된 메릴랜드주 추정치가 아니라 전국적인 범위로 취급해야 합니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨습니까?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 추천 현황</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow 대 Anker 대 Zendure 생태계 비교</a>를 확인하십시오 — 이는 단순한 제품 링크이며, 특정 키트가 메릴랜드주에서 인증되었거나 구매 가능하다는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '메릴랜드주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '메릴랜드주 법률이 서명된 후 기기를 설치하기까지 대기해야 했습니까?',
            a: '메릴랜드 주 의회 법안 페이지에 따르면 HB 1532는 2026년 5월 12일 제정과 동시에 시행되었지만, 일부 추적 사이트는 2026년 7월 1일 또는 10월 1일을 제시합니다. 의존하기 전에 정확한 날짜를 주에 확인하십시오.',
          },
          {
            q: '메릴랜드주의 HOA(주택소유자협회)가 발코니 태양광을 금지할 수 있습니까?',
            a: 'HB 1532에는 HOA의 우선 적용을 명시적으로 배제하는 조항이 포함되어 있지 않으므로, 임대 계약서 또는 HOA 규약을 별도로 확인해야 합니다. HOA의 금지를 명시적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광 법률</a>을 참고하십시오.',
          },
          {
            q: '메릴랜드주에서 언급된 391W 하위 임계값은 무엇입니까?',
            a: '표준 1,200W 상한선과 함께 더 넓은 다주 규제 프레임워크에서 언급된 더 낮은 전력 등급입니다 — 특정 기기에 이를 적용하기 전에 메릴랜드주 법령 원문을 통해 정확한 처리 방식을 확인해야 합니다.',
          },
          {
            q: '메릴랜드주에서 잉여 전력에 대한 보상을 받을 수 있습니까?',
            a: '아닙니다. HB 1532에 따르면 넷 미터링은 발코니 태양광 기기에 적용되지 않으며, 이는 다른 모든 시행 주와 동일합니다.',
          },
        ],
      },
    },
  },
}
