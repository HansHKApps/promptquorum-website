// Slug: is-balcony-solar-legal-virginia
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Virginia?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Virginia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — in effect since July 1, 2026 under HB 395/SB 250. 1,200W cap, and localities cannot ban it within that limit. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Virginia',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Virginia?',
        answer: 'Yes. Virginia HB 395/SB 250 was signed April 22, 2026 and took effect July 1, 2026. Devices up to 1,200W qualify, and localities cannot enact their own ban within that state cap.',
        bullets: [
          'HB 395/SB 250 signed April 22, 2026, effective July 1, 2026 — already in force',
          '1,200W cap; localities cannot ban balcony solar within that cap',
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
          'Virginia HB 395/SB 250 has been in effect since July 1, 2026.',
          'The 1,200W cap matches the majority template used by most of the 8 enacted states.',
          'Localities cannot pass their own ban on balcony solar within the state\'s 1,200W cap — a meaningful protection against city- or county-level restrictions.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does HB 395/SB 250 Require in Virginia?',
        content: [
          '<strong>Virginia\'s law follows the standard template used by most enacted states: devices up to 1,200W connecting via a standard outlet are exempt from full utility interconnection requirements, with net metering excluded.</strong> The distinguishing provision is local preemption — Virginia\'s law explicitly bars cities and counties from enacting their own restrictions or bans on balcony solar within the state\'s 1,200W cap, closing a gap that exists in states without that language.',
          'That local preemption does not extend to HOAs or private leases — a city cannot ban the devices, but an HOA covenant or a landlord\'s lease terms could still restrict where or whether you install one.',
        ],
        columns: ['Field', 'Virginia HB 395/SB 250'],
        rows: [
          { Field: 'Signed / Effective', 'Virginia HB 395/SB 250': 'Apr 22, 2026 / Jul 1, 2026' },
          { Field: 'Wattage cap', 'Virginia HB 395/SB 250': '1,200W' },
          { Field: 'Local bans', 'Virginia HB 395/SB 250': 'Prohibited within the state cap' },
          { Field: 'Net metering', 'Virginia HB 395/SB 250': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        content: [
          '<strong>Like every other enacted state, Virginia\'s law references UL 3700 as the safety standard, but no complete plug-in solar system has confirmed full certification as of write-time.</strong> The standard was published December 2025 with testing opening January 2026 — a gap that applies nationally, not specifically to Virginia. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.',
          'Virginia wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Virginia-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Virginia estimate, until state-specific data is confirmed.',
          '<strong>Ready to compare actual hardware?</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in Virginia today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Virginia Balcony Solar',
        faqs: [
          {
            q: 'Can my city or county in Virginia ban balcony solar?',
            a: 'No. HB 395/SB 250 explicitly prohibits localities from enacting their own bans within the state\'s 1,200W cap — this is one of Virginia\'s stronger consumer protections compared to states without that language.',
          },
          {
            q: 'Can my HOA in Virginia still restrict balcony solar?',
            a: 'The local-ban prohibition applies to cities and counties, not HOAs or private leases — check your HOA covenant separately. For a state that also blocks HOA bans specifically, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Is Virginia\'s law already in effect?',
            a: 'Yes, since July 1, 2026 — unlike Colorado and Connecticut\'s balcony solar laws, which are signed but not yet in effect.',
          },
          {
            q: 'Do I get paid for excess power exported to the grid in Virginia?',
            a: 'No. Net metering does not apply to balcony solar devices under this law, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    title: 'Ist Balkonsolar in Virginia legal?',
    dateModified: '2026-07-16',
    seoTitle: 'Ist Balkonsolar in Virginia legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja – seit 1. Juli 2026 in Kraft gemäß HB 395/SB 250. Obergrenze von 1.200 W, Kommunen dürfen es innerhalb dieser Grenze nicht verbieten. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Hausbesitzer, die prüfen möchten, ob Balkonsolar in Virginia legal ist',
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in Virginia legal?',
        answer: 'Ja. Virginias HB 395/SB 250 wurde am 22. April 2026 unterzeichnet und trat am 1. Juli 2026 in Kraft. Geräte bis 1.200 W sind zulässig, und Kommunen dürfen innerhalb dieser landesweiten Obergrenze kein eigenes Verbot erlassen.',
        bullets: [
          'HB 395/SB 250 unterzeichnet am 22. April 2026, in Kraft seit 1. Juli 2026 – bereits geltendes Recht',
          '1.200-W-Obergrenze; Kommunen dürfen Balkonsolar innerhalb dieser Grenze nicht verbieten',
          'Bislang ist kein vollständig UL-3700-zertifiziertes System bestätigt verfügbar',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Virginias HB 395/SB 250 ist seit dem 1. Juli 2026 in Kraft.',
          'Die 1.200-W-Obergrenze entspricht der Mehrheitsvorlage, die von den meisten der 8 Bundesstaaten mit entsprechender Gesetzgebung verwendet wird.',
          'Kommunen dürfen innerhalb der landesweiten 1.200-W-Obergrenze kein eigenes Verbot für Balkonsolar erlassen – ein spürbarer Schutz vor Einschränkungen auf Stadt- oder Kreisebene.',
          'Wie in jedem anderen Bundesstaat mit entsprechender Gesetzgebung ist bislang kein vollständiges System mit bestätigter voller UL-3700-Zertifizierung verfügbar.',
        ],
      },
      body1: {
        title: 'Was schreibt HB 395/SB 250 in Virginia vor?',
        content: [
          '<strong>Virginias Gesetz folgt der Standardvorlage, die in den meisten Bundesstaaten mit entsprechender Gesetzgebung verwendet wird: Geräte bis 1.200 W, die über eine Standardsteckdose angeschlossen werden, sind von den vollständigen Netzanschlussanforderungen der Versorgungsunternehmen befreit, wobei Net Metering ausgeschlossen bleibt.</strong> Die Besonderheit ist die kommunale Vorrangregelung – Virginias Gesetz untersagt Städten und Landkreisen ausdrücklich, eigene Einschränkungen oder Verbote für Balkonsolar innerhalb der landesweiten 1.200-W-Obergrenze zu erlassen, und schließt damit eine Lücke, die in Bundesstaaten ohne diese Regelung besteht.',
          'Diese kommunale Vorrangregelung erstreckt sich nicht auf Eigentümergemeinschaften (HOAs) oder private Mietverträge – eine Stadt darf die Geräte nicht verbieten, aber eine HOA-Satzung oder die Mietbedingungen eines Vermieters können weiterhin einschränken, wo oder ob Sie eines installieren dürfen.',
        ],
        columns: ['Feld', 'Virginia HB 395/SB 250'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'Virginia HB 395/SB 250': '22. Apr. 2026 / 1. Jul. 2026' },
          { Feld: 'Leistungsobergrenze', 'Virginia HB 395/SB 250': '1.200 W' },
          { Feld: 'Kommunale Verbote', 'Virginia HB 395/SB 250': 'Innerhalb der landesweiten Obergrenze untersagt' },
          { Feld: 'Net Metering', 'Virginia HB 395/SB 250': 'Nicht verfügbar' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Sind zertifizierte Kits bereits tatsächlich erhältlich?',
        content: [
          '<strong>Wie in jedem anderen Bundesstaat mit entsprechender Gesetzgebung verweist auch Virginias Gesetz auf UL 3700 als Sicherheitsstandard, doch zum Zeitpunkt der Erstellung ist noch kein vollständiges Plug-in-Solarsystem mit bestätigter voller Zertifizierung erhältlich.</strong> Der Standard wurde im Dezember 2025 veröffentlicht, Tests begannen im Januar 2026 – eine Lücke, die landesweit gilt und nicht spezifisch für Virginia ist. EcoFlows STREAM Ultra ist das marktnächste Produkt, wird derzeit aber speziell in Utah zum Verkauf angeboten.',
          'Virginia war nicht in der bundesstaatenweiten Einsparungstabelle der Quelldatenbank enthalten, die für diese Serie verwendet wurde, daher liegt hier keine Virginia-spezifische Zahl vor. In den erfassten Bundesstaaten spart ein 800-W-Kit je nach lokalem Strompreis etwa 150–350 US-Dollar pro Jahr – betrachten Sie dies als landesweite Spanne, nicht als Virginia-spezifische Schätzung, bis staatenspezifische Daten bestätigt sind.',
          '<strong>Bereit, konkrete Hardware zu vergleichen?</strong> Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonsolar</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Ökosystem-Vergleich EcoFlow vs. Anker vs. Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Kit in Virginia zertifiziert oder heute verfügbar ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Balkonsolar in Virginia',
        faqs: [
          {
            q: 'Kann meine Stadt oder mein Landkreis in Virginia Balkonsolar verbieten?',
            a: 'Nein. HB 395/SB 250 untersagt Kommunen ausdrücklich, innerhalb der landesweiten 1.200-W-Obergrenze eigene Verbote zu erlassen – das ist einer der stärkeren Verbraucherschutzmechanismen Virginias im Vergleich zu Bundesstaaten ohne diese Regelung.',
          },
          {
            q: 'Kann meine Eigentümergemeinschaft (HOA) in Virginia Balkonsolar dennoch einschränken?',
            a: 'Das kommunale Verbotsverbot gilt für Städte und Landkreise, nicht für HOAs oder private Mietverträge – prüfen Sie Ihre HOA-Satzung separat. Für einen Bundesstaat, der auch HOA-Verbote ausdrücklich blockiert, siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Balkonsolar-Gesetz in Colorado</a>.',
          },
          {
            q: 'Ist Virginias Gesetz bereits in Kraft?',
            a: 'Ja, seit dem 1. Juli 2026 – anders als die Balkonsolar-Gesetze von Colorado und Connecticut, die unterzeichnet, aber noch nicht in Kraft sind.',
          },
          {
            q: 'Werde ich in Virginia für überschüssigen, ins Netz eingespeisten Strom bezahlt?',
            a: 'Nein. Net Metering gilt für Balkonsolargeräte unter diesem Gesetz nicht – wie in jedem anderen Bundesstaat mit entsprechender Gesetzgebung.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    title: 'Le solaire de balcon est-il légal en Virginie ?',
    dateModified: '2026-07-16',
    seoTitle: 'Le solaire de balcon est-il légal en Virginie ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — en vigueur depuis le 1er juillet 2026 selon HB 395/SB 250. Plafond de 1 200 W, et les collectivités locales ne peuvent pas l\'interdire dans cette limite. Réponse rapide de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locataires et propriétaires américains vérifiant si le solaire de balcon est légal en Virginie',
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal en Virginie ?',
        answer: 'Oui. La loi HB 395/SB 250 de Virginie a été signée le 22 avril 2026 et est entrée en vigueur le 1er juillet 2026. Les appareils jusqu\'à 1 200 W sont éligibles, et les collectivités locales ne peuvent pas instaurer leur propre interdiction dans cette limite d\'État.',
        bullets: [
          'HB 395/SB 250 signée le 22 avril 2026, en vigueur depuis le 1er juillet 2026 — déjà applicable',
          'Plafond de 1 200 W ; les collectivités locales ne peuvent pas interdire le solaire de balcon dans cette limite',
          'Aucun système entièrement certifié UL 3700 n\'est encore confirmé disponible',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La loi HB 395/SB 250 de Virginie est en vigueur depuis le 1er juillet 2026.',
          'Le plafond de 1 200 W correspond au modèle majoritaire utilisé par la plupart des 8 États ayant légiféré.',
          'Les collectivités locales ne peuvent pas adopter leur propre interdiction du solaire de balcon dans la limite de 1 200 W de l\'État — une protection significative contre les restrictions au niveau municipal ou de comté.',
          'Aucun système complet n\'a encore confirmé une certification UL 3700 intégrale, comme dans tous les autres États ayant légiféré.',
        ],
      },
      body1: {
        title: 'Que prévoit HB 395/SB 250 en Virginie ?',
        content: [
          '<strong>La loi de Virginie suit le modèle standard utilisé par la plupart des États ayant légiféré : les appareils jusqu\'à 1 200 W se connectant via une prise standard sont exemptés des exigences complètes de raccordement au réseau, le net metering étant exclu.</strong> La disposition distinctive est la préemption locale — la loi de Virginie interdit explicitement aux villes et comtés d\'adopter leurs propres restrictions ou interdictions du solaire de balcon dans la limite de 1 200 W de l\'État, comblant une lacune qui existe dans les États sans cette disposition.',
          'Cette préemption locale ne s\'étend pas aux copropriétés (HOA) ni aux baux privés — une ville ne peut pas interdire les appareils, mais un règlement de copropriété ou les conditions d\'un bail peuvent toujours restreindre où ou si vous en installez un.',
        ],
        columns: ['Champ', 'Virginie HB 395/SB 250'],
        rows: [
          { Champ: 'Signature / Entrée en vigueur', 'Virginie HB 395/SB 250': '22 avr. 2026 / 1er juil. 2026' },
          { Champ: 'Plafond de puissance', 'Virginie HB 395/SB 250': '1 200 W' },
          { Champ: 'Interdictions locales', 'Virginie HB 395/SB 250': 'Interdites dans la limite de l\'État' },
          { Champ: 'Net metering', 'Virginie HB 395/SB 250': 'Non disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Des kits certifiés sont-ils réellement disponibles ?',
        content: [
          '<strong>Comme tous les autres États ayant légiféré, la loi de Virginie fait référence à UL 3700 comme norme de sécurité, mais aucun système solaire branchable complet n\'a confirmé sa certification intégrale au moment de la rédaction.</strong> La norme a été publiée en décembre 2025, les tests ayant débuté en janvier 2026 — un délai qui s\'applique au niveau national, pas spécifiquement à la Virginie. Le STREAM Ultra d\'EcoFlow est le produit le plus proche du marché, mais il est actuellement en vente spécifiquement dans l\'Utah.',
          'La Virginie ne figurait pas dans le tableau des économies par État de la source utilisée pour cette série ; un chiffre spécifique à la Virginie n\'est donc pas disponible ici. Dans les États suivis, un kit de 800 W permet d\'économiser environ 150 à 350 $ par an selon les tarifs d\'électricité locaux — considérez cela comme une fourchette nationale, pas une estimation propre à la Virginie, tant que des données spécifiques à l\'État ne sont pas confirmées.',
          '<strong>Prêt à comparer du matériel concret ?</strong> Consultez la <a href="/fr/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">sélection actuelle de batteries domestiques US pour le solaire de balcon</a> ou la <a href="/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparaison de l\'écosystème EcoFlow vs. Anker vs. Zendure</a> — de simples liens produits, pas une affirmation qu\'un kit précis est certifié ou disponible en Virginie aujourd\'hui.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon en Virginie',
        faqs: [
          {
            q: 'Ma ville ou mon comté en Virginie peut-il interdire le solaire de balcon ?',
            a: 'Non. HB 395/SB 250 interdit explicitement aux collectivités locales d\'adopter leurs propres interdictions dans la limite de 1 200 W de l\'État — l\'une des protections les plus solides de Virginie par rapport aux États sans cette disposition.',
          },
          {
            q: 'Ma copropriété (HOA) en Virginie peut-elle quand même restreindre le solaire de balcon ?',
            a: 'L\'interdiction des interdictions locales s\'applique aux villes et comtés, pas aux copropriétés ni aux baux privés — vérifiez séparément votre règlement de copropriété. Pour un État qui bloque aussi spécifiquement les interdictions des copropriétés, consultez la <a href="/fr/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">loi sur le solaire de balcon du Colorado</a>.',
          },
          {
            q: 'La loi de Virginie est-elle déjà en vigueur ?',
            a: 'Oui, depuis le 1er juillet 2026 — contrairement aux lois sur le solaire de balcon du Colorado et du Connecticut, signées mais pas encore en vigueur.',
          },
          {
            q: 'Suis-je payé pour l\'électricité excédentaire exportée vers le réseau en Virginie ?',
            a: 'Non. Le net metering ne s\'applique pas aux appareils solaires de balcon sous cette loi, comme dans tous les autres États ayant légiféré.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    title: 'バージニア州でベランダソーラーは合法ですか？',
    dateModified: '2026-07-16',
    seoTitle: 'バージニア州でベランダソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'はい — HB 395/SB 250により2026年7月1日から施行されています。上限1,200W、この上限内であれば地方自治体は禁止できません。PromptQuorumによる簡潔な回答です。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'バージニア州でベランダソーラーが合法かどうかを確認する米国の賃借人・持ち家所有者',
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'バージニア州でベランダソーラーは合法ですか？',
        answer: 'はい。バージニア州のHB 395/SB 250は2026年4月22日に署名され、2026年7月1日に施行されました。1,200Wまでの機器が対象となり、この州の上限内では地方自治体が独自の禁止条例を制定することはできません。',
        bullets: [
          'HB 395/SB 250は2026年4月22日に署名、2026年7月1日に施行済み — すでに発効中',
          '上限1,200W。この上限内でベランダソーラーを地方自治体が禁止することはできない',
          'UL 3700の完全認証を取得したシステムはまだ確認されていない',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'バージニア州のHB 395/SB 250は2026年7月1日から施行されています。',
          '1,200Wの上限は、法制化した8州の大半で採用されている標準的な水準と一致します。',
          '州の1,200W上限内では、地方自治体が独自のベランダソーラー禁止を制定することはできません — 市や郡レベルの制限に対する重要な保護です。',
          '他の法制化州と同様、UL 3700の完全認証を取得したシステムはまだ確認されていません。',
        ],
      },
      body1: {
        title: 'バージニア州のHB 395/SB 250は何を定めていますか？',
        content: [
          '<strong>バージニア州の法律は、法制化した州の大半で採用されている標準的な枠組みに従っています。標準コンセントで接続する1,200Wまでの機器は、電力会社への完全な連系要件が免除され、ネットメータリングは対象外です。</strong> 特徴的な規定は地方優先条項です。バージニア州の法律は、市や郡が州の1,200W上限内で独自の制限や禁止を制定することを明確に禁じており、この規定がない州に存在するギャップを埋めています。',
          'この地方優先条項はHOA（住宅所有者協会）や個人の賃貸契約には及びません — 市は機器を禁止できませんが、HOAの規約や大家の賃貸条件によって、設置場所や設置自体が制限される可能性は残ります。',
        ],
        columns: ['項目', 'バージニア州 HB 395/SB 250'],
        rows: [
          { 項目: '署名／施行', 'バージニア州 HB 395/SB 250': '2026年4月22日／2026年7月1日' },
          { 項目: 'ワット数上限', 'バージニア州 HB 395/SB 250': '1,200W' },
          { 項目: '地方自治体による禁止', 'バージニア州 HB 395/SB 250': '州の上限内では禁止されている' },
          { 項目: 'ネットメータリング', 'バージニア州 HB 395/SB 250': '利用不可' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '認証済みキットは実際にもう入手できますか？',
        content: [
          '<strong>他の法制化州と同様、バージニア州の法律も安全基準としてUL 3700を参照していますが、執筆時点で完全な認証を取得したプラグイン式ソーラーシステムはまだ確認されていません。</strong> この規格は2025年12月に公表され、2026年1月にテストが開始されました — これはバージニア州に限らず全米的なギャップです。EcoFlowのSTREAM Ultraが市場に最も近い製品ですが、現時点ではユタ州限定で販売されています。',
          'バージニア州はこのシリーズで使用した情報源の州別節約額表に含まれていなかったため、バージニア州固有の金額はここでは提示できません。追跡対象の州全体では、800Wキットで地域の電気料金に応じて年間約150～350ドルの節約が見られます — 州固有のデータが確認されるまでは、これを全米的な範囲として扱ってください。バージニア州の推定値ではありません。',
          '<strong>実際の製品を比較する準備はできましたか？</strong> <a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">ベランダソーラー向け米国ホームバッテリーの現行おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧ください — これらは単なる製品リンクであり、特定のキットがバージニア州で認証済みまたは現在購入可能であることを示すものではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'バージニア州のベランダソーラーに関する簡潔な回答',
        faqs: [
          {
            q: 'バージニア州の市や郡はベランダソーラーを禁止できますか？',
            a: 'いいえ。HB 395/SB 250は、州の1,200W上限内で地方自治体が独自の禁止を制定することを明確に禁じています — これは、この規定がない州と比べてバージニア州が持つ強力な消費者保護の一つです。',
          },
          {
            q: 'バージニア州のHOAはベランダソーラーを制限できますか？',
            a: '地方自治体による禁止の禁止規定は市や郡に適用され、HOAや個人の賃貸契約には適用されません — HOAの規約は別途確認してください。HOAによる禁止も阻止している州については、<a href="/ja/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">コロラド州のベランダソーラー法</a>をご覧ください。',
          },
          {
            q: 'バージニア州の法律はすでに施行されていますか？',
            a: 'はい、2026年7月1日から施行されています — 署名済みですがまだ施行されていないコロラド州やコネチカット州のベランダソーラー法とは異なります。',
          },
          {
            q: 'バージニア州では、系統に送電した余剰電力の対価を受け取れますか？',
            a: 'いいえ。この法律の下では、ベランダソーラー機器にネットメータリングは適用されません — 他の法制化州すべてと同様です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    title: '弗吉尼亚州的阳台太阳能合法吗？',
    dateModified: '2026-07-16',
    seoTitle: '弗吉尼亚州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '合法——根据HB 395/SB 250法案，自2026年7月1日起生效。功率上限1,200瓦，且地方政府不得在该上限内予以禁止。来自PromptQuorum的快速解答。',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实弗吉尼亚州阳台太阳能是否合法的美国租客和房主',
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '弗吉尼亚州的阳台太阳能合法吗？',
        answer: '合法。弗吉尼亚州HB 395/SB 250法案于2026年4月22日签署，2026年7月1日起生效。功率不超过1,200瓦的设备符合条件，且地方政府不得在该州级上限内自行立法禁止。',
        bullets: [
          'HB 395/SB 250于2026年4月22日签署，2026年7月1日起生效——已正式生效',
          '功率上限1,200瓦；地方政府不得在该上限内禁止阳台太阳能',
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
          '弗吉尼亚州HB 395/SB 250法案自2026年7月1日起已生效。',
          '1,200瓦上限与已立法的8个州中大多数采用的主流标准一致。',
          '在该州1,200瓦上限内，地方政府不得就阳台太阳能自行立法禁止——这为防止市或县一级的限制提供了实质性保护。',
          '与其他所有已立法州一样，目前尚无完整系统确认已获得完整的UL 3700认证。',
        ],
      },
      body1: {
        title: '弗吉尼亚州HB 395/SB 250法案有哪些要求？',
        content: [
          '<strong>弗吉尼亚州的法律遵循大多数已立法州采用的标准框架：通过标准插座连接、功率不超过1,200瓦的设备可豁免完整的电网并网要求，且不适用净计量电价。</strong> 该法案的独特之处在于地方优先权条款——弗吉尼亚州法律明确禁止市和县在该州1,200瓦上限内自行制定限制或禁令，弥补了未设此类条款的州所存在的漏洞。',
          '该地方优先权条款并不适用于业主协会（HOA）或私人租约——城市不能禁止此类设备，但HOA规约或房东的租约条款仍可能限制您安装的地点或是否可以安装。',
        ],
        columns: ['项目', '弗吉尼亚州 HB 395/SB 250'],
        rows: [
          { 项目: '签署／生效', '弗吉尼亚州 HB 395/SB 250': '2026年4月22日／2026年7月1日' },
          { 项目: '功率上限', '弗吉尼亚州 HB 395/SB 250': '1,200瓦' },
          { 项目: '地方禁令', '弗吉尼亚州 HB 395/SB 250': '在州级上限内禁止实施' },
          { 项目: '净计量电价', '弗吉尼亚州 HB 395/SB 250': '不适用' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '认证套件目前是否真的已经上市？',
        content: [
          '<strong>与其他所有已立法州一样，弗吉尼亚州法律将UL 3700列为安全标准，但截至撰写本文时，尚无完整的插入式太阳能系统确认已获得完整认证。</strong> 该标准于2025年12月发布，测试于2026年1月启动——这是全国范围的空白期，并非弗吉尼亚州特有。EcoFlow的STREAM Ultra是目前最接近上市的产品，但目前仅在犹他州特定销售。',
          '本系列所使用的数据来源中的各州节省金额表并未涵盖弗吉尼亚州，因此这里无法提供弗吉尼亚州特定的数字。在已追踪的各州中，一套800瓦套件根据当地电价每年可节省约150至350美元——在弗吉尼亚州特定数据得到确认之前，请将其视为全国范围的估算，而非弗吉尼亚州的专属数字。',
          '<strong>准备好比较实际硬件了吗？</strong> 请查看<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家庭电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow对比Anker对比Zendure生态系统对比</a>——这些只是产品链接，并不代表任何特定套件已在弗吉尼亚州获得认证或目前有售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于弗吉尼亚州阳台太阳能的快速解答',
        faqs: [
          {
            q: '弗吉尼亚州的市或县可以禁止阳台太阳能吗？',
            a: '不可以。HB 395/SB 250明确禁止地方政府在该州1,200瓦上限内自行立法禁止——相比未设此类条款的州，这是弗吉尼亚州更强有力的消费者保护措施之一。',
          },
          {
            q: '弗吉尼亚州的业主协会（HOA）仍可以限制阳台太阳能吗？',
            a: '地方禁令的禁止规定适用于市和县，不适用于HOA或私人租约——请单独查阅您的HOA规约。若想了解同时也禁止HOA限制的州，请参阅<a href="/zh/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">科罗拉多州阳台太阳能法规</a>。',
          },
          {
            q: '弗吉尼亚州的法律已经生效了吗？',
            a: '是的，自2026年7月1日起已生效——这与科罗拉多州和康涅狄格州已签署但尚未生效的阳台太阳能法律不同。',
          },
          {
            q: '在弗吉尼亚州，向电网输出的多余电力会获得补偿吗？',
            a: '不会。根据该法律，净计量电价不适用于阳台太阳能设备，这与其他所有已立法州一致。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    title: '¿Es legal la energía solar de balcón en Virginia?',
    dateModified: '2026-07-16',
    seoTitle: '¿Es legal la energía solar de balcón en Virginia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí — vigente desde el 1 de julio de 2026 bajo la ley HB 395/SB 250. Límite de 1.200 W, y los gobiernos locales no pueden prohibirla dentro de ese límite. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que verifican si la energía solar de balcón es legal en Virginia',
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Virginia?',
        answer: 'Sí. La ley HB 395/SB 250 de Virginia se firmó el 22 de abril de 2026 y entró en vigor el 1 de julio de 2026. Los dispositivos de hasta 1.200 W califican, y los gobiernos locales no pueden establecer su propia prohibición dentro de ese límite estatal.',
        bullets: [
          'HB 395/SB 250 firmada el 22 de abril de 2026, vigente desde el 1 de julio de 2026 — ya en vigor',
          'Límite de 1.200 W; los gobiernos locales no pueden prohibir la energía solar de balcón dentro de ese límite',
          'Aún no se confirma la disponibilidad de ningún sistema con certificación UL 3700 completa',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La ley HB 395/SB 250 de Virginia está vigente desde el 1 de julio de 2026.',
          'El límite de 1.200 W coincide con el modelo mayoritario utilizado por la mayoría de los 8 estados que han aprobado legislación.',
          'Los gobiernos locales no pueden aprobar su propia prohibición de la energía solar de balcón dentro del límite estatal de 1.200 W — una protección significativa contra restricciones a nivel de ciudad o condado.',
          'Aún no se confirma la certificación UL 3700 completa en ningún sistema completo, al igual que en el resto de los estados que han legislado.',
        ],
      },
      body1: {
        title: '¿Qué exige la ley HB 395/SB 250 en Virginia?',
        content: [
          '<strong>La ley de Virginia sigue el modelo estándar utilizado por la mayoría de los estados que han legislado: los dispositivos de hasta 1.200 W que se conectan mediante un enchufe estándar quedan exentos de los requisitos completos de interconexión con la empresa eléctrica, y el net metering queda excluido.</strong> La disposición distintiva es la preferencia estatal sobre lo local: la ley de Virginia prohíbe explícitamente que ciudades y condados establezcan sus propias restricciones o prohibiciones sobre la energía solar de balcón dentro del límite estatal de 1.200 W, cerrando un vacío que existe en los estados sin esa disposición.',
          'Esa preferencia estatal no se extiende a las asociaciones de propietarios (HOA) ni a los contratos de alquiler privados — una ciudad no puede prohibir los dispositivos, pero un reglamento de la HOA o las condiciones del contrato de un arrendador aún podrían restringir dónde, o si, puedes instalar uno.',
        ],
        columns: ['Campo', 'Virginia HB 395/SB 250'],
        rows: [
          { Campo: 'Firma / Vigencia', 'Virginia HB 395/SB 250': '22 abr. 2026 / 1 jul. 2026' },
          { Campo: 'Límite de potencia', 'Virginia HB 395/SB 250': '1.200 W' },
          { Campo: 'Prohibiciones locales', 'Virginia HB 395/SB 250': 'Prohibidas dentro del límite estatal' },
          { Campo: 'Net metering', 'Virginia HB 395/SB 250': 'No disponible' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Ya hay kits certificados realmente disponibles?',
        content: [
          '<strong>Al igual que en el resto de los estados que han legislado, la ley de Virginia hace referencia a UL 3700 como estándar de seguridad, pero al momento de escribir esto ningún sistema solar enchufable completo ha confirmado su certificación total.</strong> El estándar se publicó en diciembre de 2025 y las pruebas comenzaron en enero de 2026 — un vacío que se aplica a nivel nacional, no específicamente a Virginia. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente en Utah.',
          'Virginia no estaba incluida en la tabla de ahorros por estado de la fuente utilizada para esta serie, así que aquí no hay disponible una cifra específica de Virginia. En los estados que sí se rastrearon, un kit de 800 W ahorra aproximadamente entre 150 y 350 dólares al año según las tarifas eléctricas locales — considera esto un rango nacional, no una estimación de Virginia, hasta que se confirmen datos específicos del estado.',
          '<strong>¿Listo para comparar hardware real?</strong> Consulta la <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">selección actual de baterías domésticas de EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en Virginia en este momento.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la energía solar de balcón en Virginia',
        faqs: [
          {
            q: '¿Puede mi ciudad o condado en Virginia prohibir la energía solar de balcón?',
            a: 'No. HB 395/SB 250 prohíbe explícitamente que los gobiernos locales establezcan sus propias prohibiciones dentro del límite estatal de 1.200 W — una de las protecciones al consumidor más sólidas de Virginia en comparación con los estados sin esa disposición.',
          },
          {
            q: '¿Puede mi HOA en Virginia seguir restringiendo la energía solar de balcón?',
            a: 'La prohibición de vetos locales aplica a ciudades y condados, no a las HOA ni a los contratos de alquiler privados — revisa el reglamento de tu HOA por separado. Para un estado que también bloquea las prohibiciones de las HOA específicamente, consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">ley de energía solar de balcón de Colorado</a>.',
          },
          {
            q: '¿La ley de Virginia ya está vigente?',
            a: 'Sí, desde el 1 de julio de 2026 — a diferencia de las leyes de energía solar de balcón de Colorado y Connecticut, que están firmadas pero aún no vigentes.',
          },
          {
            q: '¿Me pagan por el exceso de energía exportado a la red en Virginia?',
            a: 'No. El net metering no aplica a los dispositivos de energía solar de balcón bajo esta ley, igual que en el resto de los estados que han legislado.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    title: 'A energia solar de varanda é legal na Virgínia?',
    dateModified: '2026-07-16',
    seoTitle: 'A energia solar de varanda é legal na Virgínia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim — em vigor desde 1º de julho de 2026 sob a lei HB 395/SB 250. Limite de 1.200 W, e os governos locais não podem proibi-la dentro desse limite. Resposta rápida da PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que estão verificando se a energia solar de varanda é legal na Virgínia',
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal na Virgínia?',
        answer: 'Sim. A lei HB 395/SB 250 da Virgínia foi sancionada em 22 de abril de 2026 e entrou em vigor em 1º de julho de 2026. Dispositivos de até 1.200 W se qualificam, e os governos locais não podem criar sua própria proibição dentro desse limite estadual.',
        bullets: [
          'HB 395/SB 250 sancionada em 22 de abril de 2026, em vigor desde 1º de julho de 2026 — já vigente',
          'Limite de 1.200 W; os governos locais não podem proibir a energia solar de varanda dentro desse limite',
          'Nenhum sistema com certificação UL 3700 completa está confirmado como disponível até o momento',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A lei HB 395/SB 250 da Virgínia está em vigor desde 1º de julho de 2026.',
          'O limite de 1.200 W corresponde ao modelo majoritário adotado pela maioria dos 8 estados que já legislaram sobre o tema.',
          'Os governos locais não podem aprovar sua própria proibição da energia solar de varanda dentro do limite estadual de 1.200 W — uma proteção relevante contra restrições em nível municipal ou de condado.',
          'Nenhum sistema completo confirmou certificação UL 3700 integral até o momento, assim como em todos os outros estados que já legislaram.',
        ],
      },
      body1: {
        title: 'O que a lei HB 395/SB 250 exige na Virgínia?',
        content: [
          '<strong>A lei da Virgínia segue o modelo padrão adotado pela maioria dos estados que já legislaram: dispositivos de até 1.200 W conectados por meio de uma tomada padrão ficam isentos das exigências completas de interconexão com a concessionária, com o net metering excluído.</strong> A disposição que a distingue é a preempção local — a lei da Virgínia proíbe explicitamente que cidades e condados criem suas próprias restrições ou proibições à energia solar de varanda dentro do limite estadual de 1.200 W, fechando uma lacuna que existe em estados sem essa previsão.',
          'Essa preempção local não se estende a associações de moradores (HOAs) nem a contratos de aluguel privados — uma cidade não pode proibir os dispositivos, mas as regras de uma HOA ou as condições de um contrato de locação ainda podem restringir onde, ou se, você pode instalar um.',
        ],
        columns: ['Campo', 'Virgínia HB 395/SB 250'],
        rows: [
          { Campo: 'Sanção / Vigência', 'Virgínia HB 395/SB 250': '22 abr. 2026 / 1º jul. 2026' },
          { Campo: 'Limite de potência', 'Virgínia HB 395/SB 250': '1.200 W' },
          { Campo: 'Proibições locais', 'Virgínia HB 395/SB 250': 'Proibidas dentro do limite estadual' },
          { Campo: 'Net metering', 'Virgínia HB 395/SB 250': 'Não disponível' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Já existem kits certificados realmente disponíveis?',
        content: [
          '<strong>Assim como em todos os outros estados que já legislaram, a lei da Virgínia faz referência à norma UL 3700 como padrão de segurança, mas até o momento nenhum sistema solar plug-in completo confirmou certificação integral.</strong> O padrão foi publicado em dezembro de 2025, com os testes começando em janeiro de 2026 — uma lacuna que se aplica em nível nacional, não especificamente à Virgínia. O STREAM Ultra da EcoFlow é o produto mais próximo de chegar ao mercado, mas atualmente está à venda especificamente em Utah.',
          'A Virgínia não constava na tabela de economia por estado da fonte usada nesta série, então um valor específico da Virgínia não está disponível aqui. Nos estados que foram rastreados, um kit de 800 W economiza entre US$ 150 e US$ 350 por ano, dependendo das tarifas de energia locais — trate isso como uma faixa nacional, não como uma estimativa específica da Virgínia, até que dados específicos do estado sejam confirmados.',
          '<strong>Pronto para comparar hardware de verdade?</strong> Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">opções atuais de baterias residenciais dos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — apenas links de produtos, não uma afirmação de que algum kit específico é certificado ou está disponível na Virgínia hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda na Virgínia',
        faqs: [
          {
            q: 'Minha cidade ou condado na Virgínia pode proibir a energia solar de varanda?',
            a: 'Não. A HB 395/SB 250 proíbe explicitamente que governos locais criem suas próprias proibições dentro do limite estadual de 1.200 W — uma das proteções ao consumidor mais fortes da Virgínia em comparação com estados sem essa previsão.',
          },
          {
            q: 'Minha HOA na Virgínia ainda pode restringir a energia solar de varanda?',
            a: 'A proibição de vetos locais se aplica a cidades e condados, não a HOAs nem a contratos de aluguel privados — verifique as regras da sua HOA separadamente. Para um estado que também bloqueia proibições de HOAs especificamente, veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">lei de energia solar de varanda do Colorado</a>.',
          },
          {
            q: 'A lei da Virgínia já está em vigor?',
            a: 'Sim, desde 1º de julho de 2026 — diferente das leis de energia solar de varanda de Colorado e Connecticut, que já foram sancionadas, mas ainda não entraram em vigor.',
          },
          {
            q: 'Eu recebo pagamento pelo excedente de energia exportado para a rede na Virgínia?',
            a: 'Não. O net metering não se aplica a dispositivos de energia solar de varanda sob esta lei, assim como em todos os outros estados que já legislaram.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    title: 'هل الطاقة الشمسية للشرفات قانونية في فيرجينيا؟',
    dateModified: '2026-07-16',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في فيرجينيا؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'نعم — سارية المفعول منذ 1 يوليو 2026 بموجب HB 395/SB 250. حد أقصى 1,200 واط، ولا يمكن للسلطات المحلية حظرها ضمن هذا الحد. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'مستأجرون وملاك منازل في الولايات المتحدة يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في فيرجينيا',
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في فيرجينيا؟',
        answer: 'نعم. تم توقيع قانون HB 395/SB 250 في فيرجينيا بتاريخ 22 أبريل 2026، ودخل حيز التنفيذ في 1 يوليو 2026. تتأهل الأجهزة التي لا تتجاوز 1,200 واط، ولا يمكن للسلطات المحلية سن حظر خاص بها ضمن هذا الحد على مستوى الولاية.',
        bullets: [
          'تم توقيع HB 395/SB 250 في 22 أبريل 2026، وأصبح ساري المفعول منذ 1 يوليو 2026 — نافذ بالفعل',
          'حد أقصى 1,200 واط؛ لا يمكن للسلطات المحلية حظر الطاقة الشمسية للشرفات ضمن هذا الحد',
          'لا يوجد حتى الآن نظام مؤكد الحصول على شهادة UL 3700 كاملة ومتاح في السوق',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون HB 395/SB 250 في فيرجينيا ساري المفعول منذ 1 يوليو 2026.',
          'يتوافق حد 1,200 واط مع النموذج الأكثر شيوعًا المعتمد في معظم الولايات الثماني التي سنّت تشريعات مماثلة.',
          'لا يمكن للسلطات المحلية سن حظر خاص بها على الطاقة الشمسية للشرفات ضمن حد الولاية البالغ 1,200 واط — وهي حماية مهمة ضد القيود على مستوى المدينة أو المقاطعة.',
          'لم يؤكد أي نظام كامل حصوله على شهادة UL 3700 الكاملة حتى الآن، على غرار جميع الولايات الأخرى التي سنّت تشريعات مماثلة.',
        ],
      },
      body1: {
        title: 'ماذا يتطلب قانون HB 395/SB 250 في فيرجينيا؟',
        content: [
          '<strong>يتبع قانون فيرجينيا النموذج القياسي المعتمد في معظم الولايات التي سنّت تشريعات مماثلة: الأجهزة التي لا تتجاوز 1,200 واط والمتصلة عبر مقبس كهربائي عادي معفاة من متطلبات الربط الكامل بشبكة المرافق، مع استبعاد نظام Net Metering.</strong> الحكم المميز هو الأسبقية المحلية — يمنع قانون فيرجينيا صراحةً المدن والمقاطعات من سن قيودها أو حظرها الخاص على الطاقة الشمسية للشرفات ضمن حد الولاية البالغ 1,200 واط، ما يسد ثغرة موجودة في الولايات التي لا تتضمن هذا النص.',
          'لا تمتد هذه الأسبقية المحلية لتشمل جمعيات الملاك (HOA) أو عقود الإيجار الخاصة — لا يمكن للمدينة حظر هذه الأجهزة، لكن لائحة جمعية الملاك أو شروط عقد الإيجار قد لا تزال تقيّد مكان أو إمكانية تركيبك للجهاز.',
        ],
        columns: ['الحقل', 'فيرجينيا HB 395/SB 250'],
        rows: [
          { الحقل: 'التوقيع / بدء السريان', 'فيرجينيا HB 395/SB 250': '22 أبريل 2026 / 1 يوليو 2026' },
          { الحقل: 'حد الطاقة', 'فيرجينيا HB 395/SB 250': '1,200 واط' },
          { الحقل: 'الحظر المحلي', 'فيرجينيا HB 395/SB 250': 'محظور ضمن حد الولاية' },
          { الحقل: 'Net Metering', 'فيرجينيا HB 395/SB 250': 'غير متاح' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل تتوفر فعليًا أطقم معتمدة حتى الآن؟',
        content: [
          '<strong>كما هو الحال في جميع الولايات الأخرى التي سنّت تشريعات مماثلة، يشير قانون فيرجينيا إلى UL 3700 كمعيار سلامة، لكن حتى وقت كتابة هذا المقال لم يؤكد أي نظام شمسي كامل يعمل بالتوصيل المباشر حصوله على الشهادة الكاملة.</strong> نُشر المعيار في ديسمبر 2025 وبدأت الاختبارات في يناير 2026 — وهي فجوة قائمة على المستوى الوطني، وليست خاصة بفيرجينيا. يُعد منتج STREAM Ultra من EcoFlow الأقرب إلى السوق، لكنه معروض للبيع حاليًا بشكل خاص في ولاية يوتا.',
          'لم تكن فيرجينيا ضمن جدول التوفير حسب الولاية في المصدر المستخدم لهذه السلسلة، لذا لا يتوفر رقم خاص بفيرجينيا هنا. في الولايات التي تم تتبعها، يوفر طقم بقدرة 800 واط ما يقارب 150 إلى 350 دولارًا سنويًا حسب أسعار الكهرباء المحلية — اعتبر هذا نطاقًا وطنيًا وليس تقديرًا خاصًا بفيرجينيا، إلى حين تأكيد بيانات خاصة بالولاية.',
          '<strong>هل أنت مستعد لمقارنة الأجهزة الفعلية؟</strong> اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية للطاقة الشمسية للشرفات لعام 2026</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة نظام EcoFlow مقابل Anker مقابل Zendure</a> — وهي مجرد روابط منتجات، وليست ادعاءً بأن طقمًا معينًا معتمد أو متاح في فيرجينيا اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الطاقة الشمسية للشرفات في فيرجينيا',
        faqs: [
          {
            q: 'هل يمكن لمدينتي أو مقاطعتي في فيرجينيا حظر الطاقة الشمسية للشرفات؟',
            a: 'لا. يمنع HB 395/SB 250 صراحةً السلطات المحلية من سن حظرها الخاص ضمن حد الولاية البالغ 1,200 واط — وهذه واحدة من أقوى حمايات المستهلك في فيرجينيا مقارنة بالولايات التي لا تتضمن هذا النص.',
          },
          {
            q: 'هل يمكن لجمعية الملاك (HOA) في فيرجينيا أن تقيّد الطاقة الشمسية للشرفات؟',
            a: 'ينطبق حظر الحظر المحلي على المدن والمقاطعات، وليس على جمعيات الملاك أو عقود الإيجار الخاصة — تحقق من لائحة جمعية الملاك الخاصة بك بشكل منفصل. للاطلاع على ولاية تمنع أيضًا حظر جمعيات الملاك تحديدًا، راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في كولورادو</a>.',
          },
          {
            q: 'هل قانون فيرجينيا ساري المفعول بالفعل؟',
            a: 'نعم، منذ 1 يوليو 2026 — على عكس قوانين الطاقة الشمسية للشرفات في كولورادو وكونيتيكت، الموقعة لكن غير سارية المفعول بعد.',
          },
          {
            q: 'هل أحصل على مقابل مالي عن الطاقة الفائضة المصدَّرة إلى الشبكة في فيرجينيا؟',
            a: 'لا. لا ينطبق نظام Net Metering على أجهزة الطاقة الشمسية للشرفات بموجب هذا القانون، مثل جميع الولايات الأخرى التي سنّت تشريعات مماثلة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    title: '버지니아주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-07-16',
    seoTitle: '버지니아주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '예 — HB 395/SB 250에 따라 2026년 7월 1일부터 시행되고 있습니다. 상한선은 1,200W이며, 지방정부는 이 상한선 내에서 금지할 수 없습니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '버지니아주에서 발코니 태양광이 합법인지 확인하는 미국 임차인 및 주택 소유자',
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '버지니아주에서 발코니 태양광은 합법입니까?',
        answer: '예. 버지니아주 HB 395/SB 250은 2026년 4월 22일에 서명되었으며 2026년 7월 1일부터 시행되었습니다. 1,200W 이하의 기기가 해당되며, 지방정부는 이 주 전체 상한선 내에서 자체적인 금지 조치를 시행할 수 없습니다.',
        bullets: [
          'HB 395/SB 250은 2026년 4월 22일 서명, 2026년 7월 1일부터 시행 — 이미 발효 중',
          '상한선 1,200W; 지방정부는 이 상한선 내에서 발코니 태양광을 금지할 수 없음',
          'UL 3700 완전 인증을 받은 시스템은 아직 확인되지 않음',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '버지니아주 HB 395/SB 250은 2026년 7월 1일부터 시행되고 있습니다.',
          '1,200W 상한선은 관련 법을 제정한 8개 주 대부분이 채택한 다수 표준 모델과 일치합니다.',
          '지방정부는 주 전체 1,200W 상한선 내에서 발코니 태양광에 대한 자체 금지 조치를 제정할 수 없습니다 — 시 또는 카운티 차원의 제한으로부터 실질적인 보호를 제공합니다.',
          '다른 모든 법 제정 주와 마찬가지로, 완전한 UL 3700 인증을 확인받은 시스템은 아직 없습니다.',
        ],
      },
      body1: {
        title: '버지니아주 HB 395/SB 250은 무엇을 요구합니까?',
        content: [
          '<strong>버지니아주 법률은 관련 법을 제정한 대다수 주에서 채택한 표준 모델을 따릅니다. 표준 콘센트로 연결되는 1,200W 이하의 기기는 전력회사와의 완전한 계통연계 요건이 면제되며, 넷 미터링은 제외됩니다.</strong> 특징적인 조항은 지방 우선 배제 규정입니다 — 버지니아주 법률은 시와 카운티가 주 전체 1,200W 상한선 내에서 자체적인 제한이나 금지 조치를 제정하는 것을 명시적으로 금지하여, 이러한 조항이 없는 주에 존재하는 공백을 메웁니다.',
          '이 지방 우선 배제 규정은 주택소유자협회(HOA)나 개인 임대 계약에는 적용되지 않습니다 — 시는 기기를 금지할 수 없지만, HOA 규약이나 임대인의 임대 조건은 설치 위치나 설치 가능 여부를 여전히 제한할 수 있습니다.',
        ],
        columns: ['항목', '버지니아주 HB 395/SB 250'],
        rows: [
          { 항목: '서명 / 시행', '버지니아주 HB 395/SB 250': '2026년 4월 22일 / 2026년 7월 1일' },
          { 항목: '전력 상한선', '버지니아주 HB 395/SB 250': '1,200W' },
          { 항목: '지방 금지', '버지니아주 HB 395/SB 250': '주 상한선 내에서 금지됨' },
          { 항목: '넷 미터링', '버지니아주 HB 395/SB 250': '이용 불가' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '인증된 키트가 실제로 지금 판매되고 있습니까?',
        content: [
          '<strong>다른 모든 법 제정 주와 마찬가지로 버지니아주 법률도 UL 3700을 안전 기준으로 참조하고 있지만, 이 글을 작성하는 시점까지 완전 인증을 받은 완제품 플러그인 태양광 시스템은 확인되지 않았습니다.</strong> 해당 표준은 2025년 12월에 발표되었으며 시험은 2026년 1월에 시작되었습니다 — 이는 버지니아주에 국한된 것이 아니라 전국적인 공백입니다. EcoFlow의 STREAM Ultra가 시장 출시에 가장 근접한 제품이지만, 현재는 유타주에서만 판매되고 있습니다.',
          '버지니아주는 이 시리즈에 사용된 자료 출처의 주별 절감액 표에 포함되지 않아, 버지니아주 고유의 수치는 여기서 제공할 수 없습니다. 추적된 주들을 기준으로 보면, 800W 키트는 지역 전기 요금에 따라 연간 약 150~350달러를 절감합니다 — 주별 데이터가 확인되기 전까지는 이를 버지니아주 추정치가 아닌 전국 평균 범위로 간주하시기 바랍니다.',
          '<strong>실제 하드웨어를 비교할 준비가 되셨습니까?</strong> <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 현재 추천 목록</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure 생태계 비교</a>를 참고하시기 바랍니다 — 이는 단순 제품 링크일 뿐, 특정 키트가 버지니아주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '버지니아주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '버지니아주의 시나 카운티가 발코니 태양광을 금지할 수 있습니까?',
            a: '아니요. HB 395/SB 250은 지방정부가 주 전체 1,200W 상한선 내에서 자체적인 금지 조치를 제정하는 것을 명시적으로 금지합니다 — 이는 관련 조항이 없는 주와 비교했을 때 버지니아주가 갖춘 강력한 소비자 보호 장치 중 하나입니다.',
          },
          {
            q: '버지니아주의 HOA는 여전히 발코니 태양광을 제한할 수 있습니까?',
            a: '지방 금지 금지 조항은 시와 카운티에 적용되며, HOA나 개인 임대 계약에는 적용되지 않습니다 — HOA 규약은 별도로 확인하시기 바랍니다. HOA의 금지 조치까지 구체적으로 차단하는 주에 대해서는 <a href="/ko/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">콜로라도주 발코니 태양광법</a>을 참고하시기 바랍니다.',
          },
          {
            q: '버지니아주 법률은 이미 시행되고 있습니까?',
            a: '예, 2026년 7월 1일부터 시행되고 있습니다 — 서명은 되었지만 아직 시행되지 않은 콜로라도주 및 코네티컷주의 발코니 태양광법과는 다릅니다.',
          },
          {
            q: '버지니아주에서 계통으로 송전한 잉여 전력에 대해 대가를 받을 수 있습니까?',
            a: '아니요. 이 법률에 따르면 넷 미터링은 발코니 태양광 기기에 적용되지 않으며, 이는 다른 모든 법 제정 주와 동일합니다.',
          },
        ],
      },
    },
  },
}
