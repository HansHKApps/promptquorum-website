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
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — HB 1532 took effect immediately on signing, May 12, 2026, via an emergency clause. 1,200W cap, no waiting period. Quick answer from PromptQuorum.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Maryland?',
        answer: 'Yes. Maryland HB 1532 (the Utility RELIEF Act) was signed May 12, 2026 and took effect immediately via an emergency clause — no waiting period before residents could legally install a qualifying device.',
        bullets: [
          'HB 1532 signed May 12, 2026 with an emergency clause — effective immediately, no waiting period',
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
          '<strong>Maryland\'s HB 1532, the Utility RELIEF Act, is the fastest-moving of the 8 enacted state laws — it carried an emergency clause, meaning it took effect immediately on signing rather than after a standard waiting period.</strong> The standard cap is 1,200W, matching the majority template used across most enacted states. A separate 391W sub-threshold also appears in the broader multi-state regulatory framework, which may apply lighter-touch treatment to smaller devices — confirm the exact mechanics against Maryland\'s statutory text before relying on the distinction for a specific device.',
          'Like other enacted states, net metering does not apply — excess power exported to the grid earns no compensation, and the exact cap figures here were not independently re-verified against primary Maryland Public Service Commission text this pass.',
        ],
        columns: ['Field', 'Maryland HB 1532'],
        rows: [
          { Field: 'Signed / Effective', 'Maryland HB 1532': 'May 12, 2026 / Immediate (emergency clause)' },
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
            a: 'No. HB 1532 carried an emergency clause, so it took effect immediately on the May 12, 2026 signing date — unlike states with a standard delayed effective date.',
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
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Maryland legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja — HB 1532 trat durch eine Notstandsklausel sofort mit der Unterzeichnung am 12. Mai 2026 in Kraft. 1.200-W-Obergrenze, keine Wartezeit. Kurzantwort von PromptQuorum.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Maryland legal?',
        answer: 'Ja. Marylands HB 1532 (der Utility RELIEF Act) wurde am 12. Mai 2026 unterzeichnet und trat durch eine Notstandsklausel sofort in Kraft — ohne Wartezeit, bevor Einwohner ein zulässiges Gerät legal installieren konnten.',
        bullets: [
          'HB 1532 am 12. Mai 2026 mit Notstandsklausel unterzeichnet — sofort wirksam, keine Wartezeit',
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
          '<strong>Marylands HB 1532, der Utility RELIEF Act, ist das am schnellsten wirksame der 8 verabschiedeten Landesgesetze — es enthielt eine Notstandsklausel, wodurch es sofort mit der Unterzeichnung in Kraft trat, statt nach einer üblichen Wartezeit.</strong> Die Standardobergrenze liegt bei 1.200 W und entspricht damit der in den meisten Bundesstaaten verwendeten Mehrheitsvorlage. Eine separate 391-W-Unterschwelle taucht ebenfalls im breiteren, bundesstaatenübergreifenden regulatorischen Rahmenwerk auf, die möglicherweise eine vereinfachte Behandlung kleinerer Geräte vorsieht — prüfen Sie die genaue Mechanik anhand von Marylands Gesetzestext, bevor Sie sich für ein bestimmtes Gerät auf diese Unterscheidung verlassen.',
          'Wie in anderen Bundesstaaten mit entsprechendem Gesetz gilt kein Net Metering — überschüssiger, ins Netz eingespeister Strom wird nicht vergütet, und die genauen Obergrenzen wurden in diesem Durchgang nicht unabhängig anhand des Primärtexts der Maryland Public Service Commission erneut überprüft.',
        ],
        columns: ['Feld', 'Maryland HB 1532'],
        rows: [
          { Feld: 'Unterzeichnet / Wirksam', 'Maryland HB 1532': '12. Mai 2026 / Sofort (Notstandsklausel)' },
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
            a: 'Nein. HB 1532 enthielt eine Notstandsklausel und trat daher sofort mit dem Unterzeichnungsdatum am 12. Mai 2026 in Kraft — anders als in Bundesstaaten mit einer üblichen verzögerten Wirksamkeit.',
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
    dateModified: '2026-07-16',
    seoTitle: 'Le solaire de balcon est-il légal dans le Maryland ? | Prompt Bites | PromptQuorum',
    metaDescription: "Oui — le HB 1532 est entré en vigueur immédiatement à sa signature, le 12 mai 2026, via une clause d'urgence. Plafond de 1 200 W, aucun délai d'attente. Réponse rapide de PromptQuorum.",
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le Maryland ?',
        answer: "Oui. Le HB 1532 du Maryland (le Utility RELIEF Act) a été signé le 12 mai 2026 et est entré en vigueur immédiatement via une clause d'urgence — aucun délai d'attente avant que les résidents puissent légalement installer un appareil conforme.",
        bullets: [
          "HB 1532 signé le 12 mai 2026 avec une clause d'urgence — effectif immédiatement, aucun délai d'attente",
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
          "<strong>Le HB 1532 du Maryland, le Utility RELIEF Act, est la plus rapide des 8 lois d'État adoptées — elle comportait une clause d'urgence, donc elle est entrée en vigueur immédiatement à la signature plutôt qu'après un délai d'attente standard.</strong> Le plafond standard est de 1 200 W, conforme au modèle majoritaire utilisé dans la plupart des États. Un seuil distinct de 391 W apparaît aussi dans le cadre réglementaire multi-États plus large, qui pourrait appliquer un traitement allégé aux appareils plus petits — vérifiez le mécanisme exact dans le texte législatif du Maryland avant de vous fier à cette distinction pour un appareil donné.",
          "Comme dans les autres États ayant adopté une loi, le net metering ne s'applique pas — l'électricité excédentaire exportée vers le réseau n'est pas compensée, et les plafonds exacts n'ont pas été revérifiés indépendamment cette fois-ci auprès du texte primaire de la Maryland Public Service Commission.",
        ],
        columns: ['Champ', 'Maryland HB 1532'],
        rows: [
          { Champ: "Signature / Entrée en vigueur", 'Maryland HB 1532': "12 mai 2026 / Immédiate (clause d'urgence)" },
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
            a: "Non. Le HB 1532 comportait une clause d'urgence, donc il est entré en vigueur immédiatement à la date de signature du 12 mai 2026 — contrairement aux États avec une entrée en vigueur différée standard.",
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
    dateModified: '2026-07-16',
    seoTitle: 'メリーランド州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'はい。HB 1532は緊急条項により2026年5月12日の署名と同時に即座に発効しました。上限1,200W、待機期間なし。PromptQuorumによるクイックアンサーです。',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'メリーランド州でバルコニーソーラーは合法ですか？',
        answer: 'はい。メリーランド州のHB 1532（Utility RELIEF Act）は2026年5月12日に署名され、緊急条項により即座に発効しました——住民が適合機器を合法的に設置できるまでの待機期間はありませんでした。',
        bullets: [
          'HB 1532は緊急条項付きで2026年5月12日に署名——即座に発効、待機期間なし',
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
          '<strong>メリーランド州のHB 1532（Utility RELIEF Act）は、制定済みの8州の中で最も発効が早い法律です——緊急条項が付与されており、通常の待機期間を経ずに署名と同時に発効しました。</strong> 標準的な上限は1,200Wで、大多数の制定州で使われているテンプレートと一致します。より広い複数州規制フレームワークには391Wの下位しきい値も別途登場し、小型機器に対してより軽い扱いを適用する可能性があります——特定の機器についてこの区別に依拠する前に、メリーランド州の法令原文で正確な仕組みを確認してください。',
          '他の制定州と同様、ネットメータリングは適用されません——グリッドに輸出された余剰電力への対価はなく、今回のパスでは正確な上限値をメリーランド州公益事業委員会（Public Service Commission）の一次資料と独自に再検証していません。',
        ],
        columns: ['項目', 'メリーランド州 HB 1532'],
        rows: [
          { 項目: '署名日／発効日', 'メリーランド州 HB 1532': '2026年5月12日／即時（緊急条項）' },
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
            a: 'いいえ。HB 1532には緊急条項が付与されていたため、2026年5月12日の署名日と同時に即座に発効しました——標準的な発効遅延がある州とは異なります。',
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
    dateModified: '2026-07-16',
    seoTitle: '在马里兰州安装阳台太阳能合法吗？| Prompt Bites | PromptQuorum',
    metaDescription: '合法——HB 1532于2026年5月12日签署后通过紧急条款立即生效。功率上限1,200W，无等待期。PromptQuorum为您提供快速解答。',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '在马里兰州安装阳台太阳能合法吗？',
        answer: '合法。马里兰州HB 1532（公用事业救济法案 Utility RELIEF Act）于2026年5月12日签署，并通过紧急条款立即生效——居民无需等待即可合法安装符合条件的设备。',
        bullets: [
          'HB 1532于2026年5月12日签署，附带紧急条款——立即生效，无等待期',
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
          '<strong>马里兰州的HB 1532（公用事业救济法案）是已立法的8个州中生效速度最快的一部——该法案附带紧急条款，因此在签署后立即生效，而不是像通常那样经过标准等待期。</strong> 标准上限为1,200W，与大多数已立法州采用的模板一致。更广泛的多州监管框架中还出现了单独的391W较低门槛，可能对较小设备适用更宽松的处理方式——在依赖这一区分处理具体设备之前，请以马里兰州法律原文核实具体机制。',
          '与其他已立法州一样，净计量（net metering）不适用——输送到电网的多余电力不获补偿，本文此次也未针对马里兰州公用事业委员会的一手资料独立重新核实具体上限数字。',
        ],
        columns: ['项目', '马里兰州 HB 1532'],
        rows: [
          { 项目: '签署／生效日期', '马里兰州 HB 1532': '2026年5月12日／立即生效（紧急条款）' },
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
            a: '不需要。HB 1532附带紧急条款，因此在2026年5月12日签署当天即立即生效——这与采用标准延迟生效日期的州不同。',
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
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí — la HB 1532 entró en vigor de inmediato al firmarse, el 12 de mayo de 2026, mediante una cláusula de emergencia. Límite de 1,200 W, sin período de espera. Respuesta rápida de PromptQuorum.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Maryland?',
        answer: 'Sí. La HB 1532 de Maryland (la Utility RELIEF Act) se firmó el 12 de mayo de 2026 y entró en vigor de inmediato gracias a una cláusula de emergencia — sin período de espera antes de que los residentes pudieran instalar legalmente un dispositivo que cumpliera los requisitos.',
        bullets: [
          'HB 1532 firmada el 12 de mayo de 2026 con cláusula de emergencia — vigente de inmediato, sin período de espera',
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
          '<strong>La HB 1532 de Maryland, la Utility RELIEF Act, es la más rápida en entrar en vigor de las 8 leyes estatales aprobadas: incluía una cláusula de emergencia, por lo que entró en vigor de inmediato al firmarse, en lugar de tras el período de espera estándar.</strong> El límite estándar es de 1,200 W, coincidiendo con la plantilla que usan la mayoría de los estados con ley aprobada. También aparece un umbral separado de 391 W en el marco regulatorio multiestatal más amplio, que podría aplicar un trato más flexible a los dispositivos más pequeños — confirma el mecanismo exacto en el texto legal de Maryland antes de basarte en esta distinción para un dispositivo específico.',
          'Como en otros estados con ley aprobada, el net metering no aplica — la energía excedente exportada a la red no recibe compensación, y las cifras exactas de los límites no se reverificaron de forma independiente contra el texto principal de la Comisión de Servicios Públicos de Maryland en esta revisión.',
        ],
        columns: ['Campo', 'Maryland HB 1532'],
        rows: [
          { Campo: 'Firma / Vigencia', 'Maryland HB 1532': '12 de mayo de 2026 / Inmediata (cláusula de emergencia)' },
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
            a: 'No. La HB 1532 incluía una cláusula de emergencia, así que entró en vigor de inmediato el día de la firma, el 12 de mayo de 2026 — a diferencia de los estados con una fecha de vigencia estándar retrasada.',
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
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal em Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim — a HB 1532 entrou em vigor imediatamente após a assinatura, em 12 de maio de 2026, por meio de uma cláusula de emergência. Limite de 1.200 W, sem período de espera. Resposta rápida da PromptQuorum.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Maryland?',
        answer: 'Sim. A HB 1532 de Maryland (a Utility RELIEF Act) foi assinada em 12 de maio de 2026 e entrou em vigor imediatamente por meio de uma cláusula de emergência — sem período de espera antes que os moradores pudessem instalar legalmente um dispositivo que atendesse aos requisitos.',
        bullets: [
          'HB 1532 assinada em 12 de maio de 2026 com cláusula de emergência — em vigor imediatamente, sem período de espera',
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
          '<strong>A HB 1532 de Maryland, a Utility RELIEF Act, é a mais rápida entre as 8 leis estaduais em vigor — ela incluiu uma cláusula de emergência, ou seja, entrou em vigor imediatamente na assinatura, em vez de após o período de espera padrão.</strong> O limite padrão é de 1.200 W, seguindo o modelo usado na maioria dos estados com lei em vigor. Um subpatamar separado de 391 W também aparece no marco regulatório mais amplo entre estados, que pode aplicar um tratamento mais flexível a dispositivos menores — confirme o mecanismo exato no texto da lei de Maryland antes de confiar nessa distinção para um dispositivo específico.',
          'Assim como em outros estados com lei em vigor, o net metering não se aplica — a energia excedente exportada para a rede não recebe compensação, e os valores exatos dos limites não foram reverificados de forma independente com o texto principal da Comissão de Serviços Públicos de Maryland nesta revisão.',
        ],
        columns: ['Campo', 'Maryland HB 1532'],
        rows: [
          { Campo: 'Assinatura / Vigência', 'Maryland HB 1532': '12 de maio de 2026 / Imediata (cláusula de emergência)' },
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
            a: 'Não. A HB 1532 incluía uma cláusula de emergência, então entrou em vigor imediatamente na data de assinatura, 12 de maio de 2026 — diferente dos estados com uma data de vigência padrão adiada.',
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
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في ماريلاند؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم — دخل قانون HB 1532 حيز التنفيذ فورًا عند التوقيع في 12 مايو 2026 بموجب بند طوارئ. الحد الأقصى 1,200 واط، دون فترة انتظار. إجابة سريعة من PromptQuorum.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في ماريلاند؟',
        answer: 'نعم. تم توقيع قانون HB 1532 في ماريلاند (المعروف باسم Utility RELIEF Act) في 12 مايو 2026، ودخل حيز التنفيذ فورًا بموجب بند طوارئ — دون أي فترة انتظار قبل أن يتمكن السكان من تركيب جهاز مستوفٍ للشروط بشكل قانوني.',
        bullets: [
          'تم توقيع HB 1532 في 12 مايو 2026 مع بند طوارئ — سريان فوري دون فترة انتظار',
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
          '<strong>يُعد قانون HB 1532 في ماريلاند (Utility RELIEF Act) الأسرع سريانًا من بين قوانين الولايات الثماني المسنّة — إذ تضمّن بند طوارئ جعله يسري فورًا عند التوقيع بدلاً من انتظار الفترة المعتادة.</strong> الحد الأقصى القياسي هو 1,200 واط، بما يتوافق مع النموذج المعتمد في غالبية الولايات المسنّة. كما تظهر عتبة فرعية منفصلة قدرها 391 واط في الإطار التنظيمي الأوسع بين الولايات، والتي قد تطبّق معاملة أخف على الأجهزة الأصغر — يُرجى التحقق من الآلية الدقيقة في نص التشريع الرسمي لماريلاند قبل الاعتماد على هذا التمييز لجهاز معين.',
          'كما هو الحال في الولايات الأخرى المسنّة، لا ينطبق نظام "net metering" — فالطاقة الفائضة المصدَّرة إلى الشبكة لا تحصل على أي تعويض، ولم تتم إعادة التحقق المستقل من الأرقام الدقيقة للحدود القصوى مقابل النص الأساسي للجنة المرافق العامة في ماريلاند (Public Service Commission) في هذه المراجعة.',
        ],
        columns: ['الحقل', 'Maryland HB 1532'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'Maryland HB 1532': '12 مايو 2026 / فوري (بند طوارئ)' },
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
            a: 'لا. تضمّن قانون HB 1532 بند طوارئ، لذا دخل حيز التنفيذ فورًا في تاريخ التوقيع، 12 مايو 2026 — على عكس الولايات ذات تاريخ السريان المؤجل القياسي.',
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
    dateModified: '2026-07-16',
    seoTitle: '메릴랜드주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '합법입니다 — HB 1532는 긴급 조항에 따라 2026년 5월 12일 서명과 동시에 즉시 발효되었습니다. 상한선 1,200W, 대기 기간 없음. PromptQuorum의 빠른 답변입니다.',
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
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '메릴랜드주에서 발코니 태양광은 합법입니까?',
        answer: '합법입니다. 메릴랜드주 HB 1532(Utility RELIEF Act)는 2026년 5월 12일 서명되었으며, 긴급 조항에 따라 즉시 발효되었습니다 — 주민들이 적합한 기기를 합법적으로 설치할 수 있기까지 별도의 대기 기간이 없었습니다.',
        bullets: [
          'HB 1532는 긴급 조항과 함께 2026년 5월 12일 서명 — 즉시 발효, 대기 기간 없음',
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
          '<strong>메릴랜드주의 HB 1532(Utility RELIEF Act)는 시행된 8개 주 법률 중 가장 빠르게 발효된 법입니다 — 긴급 조항이 포함되어 있어 일반적인 대기 기간을 거치지 않고 서명과 동시에 즉시 발효되었습니다.</strong> 표준 상한선은 1,200W로, 대다수 시행 주에서 사용하는 표준 모델과 일치합니다. 더 넓은 다주(multi-state) 규제 프레임워크에는 391W의 별도 하위 임계값도 등장하며, 이는 소형 기기에 더 완화된 처리를 적용할 수 있습니다 — 특정 기기에 이 구분을 적용하기 전에 메릴랜드주 법령 원문을 통해 정확한 적용 방식을 확인해야 합니다.',
          '다른 시행 주와 마찬가지로 넷 미터링(net metering)은 적용되지 않습니다 — 전력망으로 송출된 잉여 전력에 대해서는 어떠한 보상도 제공되지 않으며, 이번 검토에서는 정확한 상한선 수치를 메릴랜드주 공공서비스위원회(Public Service Commission)의 1차 자료와 독립적으로 재확인하지 않았습니다.',
        ],
        columns: ['항목', '메릴랜드주 HB 1532'],
        rows: [
          { 항목: '서명 / 발효', '메릴랜드주 HB 1532': '2026년 5월 12일 / 즉시 발효(긴급 조항)' },
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
            a: '아닙니다. HB 1532는 긴급 조항을 포함하고 있어 2026년 5월 12일 서명일과 동시에 즉시 발효되었습니다 — 표준적인 지연 발효일을 적용하는 주들과는 다릅니다.',
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
