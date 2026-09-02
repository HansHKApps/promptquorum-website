// Slug: is-balcony-solar-legal-new-jersey
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: part of the balcony-solar
// state-regulation series. See is-balcony-solar-legal-utah.ts header for the
// full exception rationale. Facts verified via WebSearch 2026-09-02 against
// pv-magazine-usa.com/2026/09/01/new-jersey-legalizes-plug-in-solar-up-to-1200-w/
// and nj.gov/governor/news/2026/approved/20260901a.shtml (signing announcement),
// plus the bill text at pub.njleg.gov/Bills/2026/S2500/2368_R3.HTM.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-en.webp',
    title: 'Is Balcony Solar Legal in New Jersey?',
    dateModified: '2026-09-02',
    seoTitle: 'Is Balcony Solar Legal in New Jersey? | Prompt Bites | PromptQuorum',
    metaDescription: "Signed September 1, 2026, taking effect March 1, 2027. The Garden State Balcony Solar Act bars HOAs and landlords from banning it, with a 1,200W cap. Quick answer from PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in New Jersey',
    affiliateDisclosure: true,
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in New Jersey?',
        answer: "Signed, but not yet in effect. New Jersey's Garden State Balcony Solar Act (S2368/A4836) was signed by Governor Mikie Sherrill on September 1, 2026 and takes effect March 1, 2027 — and unlike most other enacted states, it explicitly bars landlords, HOAs, and condo associations from banning the devices outright.",
        bullets: [
          "S2368/A4836 signed September 1, 2026 — takes effect March 1, 2027",
          'Explicitly preempts HOA and landlord bans, though "reasonable restrictions" on size and placement are still allowed with 14 days\' written notice',
          '1,200W cap per service address; devices of 400W or less get a lighter installation/certification exemption tier',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "New Jersey's Garden State Balcony Solar Act is signed but doesn't take effect until March 1, 2027 — check the date before assuming it applies today.",
          'Landlords, HOAs, and condo associations cannot ban the devices outright, though they can set "reasonable restrictions" on size and placement with 14 days\' written notice.',
          'The standard cap is 1,200W; devices of 400W or less qualify for a lighter installation/certification exemption tier.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will the Garden State Balcony Solar Act Require?',
        content: [
          "<strong>New Jersey's Garden State Balcony Solar Act (S2368/A4836) caps combined portable solar output at 1,200 watts per service address — or per dwelling unit in multi-family housing — connected through a standard 120V AC outlet, with devices at 400W or less qualifying for a lighter installation and certification exemption tier.</strong> It was signed by Governor Mikie Sherrill on September 1, 2026 and takes effect March 1, 2027, giving the state Board of Public Utilities time to implement it — check today's date against that effective date before assuming the law already applies to you.",
          '<strong>New Jersey is the second state, after Colorado, to explicitly preempt HOA and landlord bans.</strong> The law prohibits landlords, HOAs, and condo associations from banning the devices outright, including on a leased balcony or patio — but they can still impose "reasonable restrictions concerning the size, placement, or manner of placement," and residents must give 14 days\' written notice plus safety documentation before installing. Maine\'s law uses a similar two-tier wattage structure — see the <a href="/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">Maine balcony solar law</a> for the other example in this series.',
        ],
        columns: ['Field', 'New Jersey S2368/A4836'],
        rows: [
          { Field: 'Signed / Effective', 'New Jersey S2368/A4836': 'Sep 1, 2026 / Mar 1, 2027' },
          { Field: 'Wattage cap', 'New Jersey S2368/A4836': '1,200W (400W lighter-exemption tier)' },
          { Field: 'HOA / landlord bans', 'New Jersey S2368/A4836': 'Preempted — reasonable restrictions only' },
          { Field: 'Notice before installing', 'New Jersey S2368/A4836': "14 days' written notice + safety docs" },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Is the Economics Story Strong in New Jersey?',
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
          "<strong>New Jersey's average residential electricity rate is about 23.3¢/kWh — roughly double Utah's 11.6¢/kWh.</strong> Once compliant hardware ships and the law is in effect, an 800W kit should land toward the higher end of the roughly $150–$350/year national range this series has tracked, though a New Jersey-specific dollar estimate wasn't in the source tracker's state-by-state savings table.",
          "Certification is the other gate: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time, a nationwide gap that applies regardless of New Jersey's effective date. EcoFlow's STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.",
          '<strong>Once the law takes effect and certified hardware exists, you\'ll want real options to compare.</strong> See the <a href="/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">current US home-battery picks for balcony solar</a> or the <a href="/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow vs. Anker vs. Zendure ecosystem comparison</a> — plain product links, not a claim that any specific kit is certified or available in New Jersey today.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About New Jersey Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in New Jersey right now?',
            a: "The Garden State Balcony Solar Act is signed but doesn't take effect until March 1, 2027. Check today's date against that before assuming the law already covers you.",
          },
          {
            q: 'Can my HOA or landlord in New Jersey ban balcony solar?',
            a: "No, not outright — New Jersey is the second state, after Colorado, to explicitly bar HOAs, condo associations, and landlords from banning the devices. They can still set reasonable restrictions on size and placement, and you must give 14 days' written notice plus safety documentation before installing.",
          },
          {
            q: "What's the wattage cap in New Jersey?",
            a: '1,200W combined output per service address (or per dwelling unit in multi-family housing) through a standard 120V outlet. Devices of 400W or less qualify for a lighter installation and certification exemption tier.',
          },
          {
            q: 'What does the 400W exemption tier actually change?',
            a: "Devices at 400W or less face a lighter installation and certification bar than the standard up-to-1,200W tier, per the bill text — though the exact procedural difference wasn't itemized in the sources reviewed this pass. For a similar two-tier wattage approach, see Maine's balcony solar law.",
          },
        ],
      },
    },
  },
  de: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-de.webp',
    title: 'Ist Balkonsolar in New Jersey legal?',
    dateModified: '2026-09-02',
    seoTitle: 'Ist Balkonsolar in New Jersey legal? | Prompt Bites | PromptQuorum',
    metaDescription: 'Unterzeichnet am 1. September 2026, in Kraft ab 1. März 2027. Der Garden State Balcony Solar Act untersagt HOAs und Vermietern ein Verbot, Obergrenze 1.200 W. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US-Mieter und Eigenheimbesitzer, die prüfen, ob Balkonsolar in New Jersey legal ist',
    affiliateDisclosure: true,
    parentArticle: '/de/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Ist Balkonsolar in New Jersey legal?',
        answer: 'Unterzeichnet, aber noch nicht in Kraft. New Jerseys Garden State Balcony Solar Act (S2368/A4836) wurde am 1. September 2026 von Gouverneurin Mikie Sherrill unterzeichnet und tritt am 1. März 2027 in Kraft – und anders als in den meisten anderen Bundesstaaten untersagt das Gesetz ausdrücklich Vermietern, HOAs und Eigentümergemeinschaften, die Geräte komplett zu verbieten.',
        bullets: [
          'S2368/A4836 am 1. September 2026 unterzeichnet – in Kraft ab 1. März 2027',
          'Untersagt ausdrücklich HOA- und Vermieterverbote, „angemessene Einschränkungen" bei Größe und Platzierung bleiben mit 14 Tagen schriftlicher Vorankündigung zulässig',
          'Obergrenze von 1.200 W pro Anschlussadresse; Geräte bis 400 W erhalten eine leichtere Installations-/Zertifizierungsausnahme',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'New Jerseys Garden State Balcony Solar Act ist unterzeichnet, tritt aber erst am 1. März 2027 in Kraft – prüfen Sie das Datum, bevor Sie annehmen, dass es bereits gilt.',
          'Vermieter, HOAs und Eigentümergemeinschaften dürfen die Geräte nicht komplett verbieten, können aber „angemessene Einschränkungen" bei Größe und Platzierung mit 14 Tagen schriftlicher Vorankündigung festlegen.',
          'Die Standardgrenze liegt bei 1.200 W; Geräte bis 400 W qualifizieren sich für eine leichtere Installations-/Zertifizierungsausnahme.',
          'Bislang hat kein vollständiges System die volle UL-3700-Zertifizierung bestätigt, wie in jedem anderen Bundesstaat mit Gesetz.',
        ],
      },
      body1: {
        title: 'Was verlangt der Garden State Balcony Solar Act?',
        content: [
          'New Jerseys Garden State Balcony Solar Act (S2368/A4836) begrenzt die kombinierte Leistung steckerfertiger Solargeräte auf 1.200 Watt pro Anschlussadresse – oder pro Wohneinheit bei Mehrfamilienhäusern – angeschlossen über eine Standard-120-V-AC-Steckdose, wobei Geräte bis 400 W eine leichtere Installations- und Zertifizierungsausnahme erhalten. Es wurde am 1. September 2026 von Gouverneurin Mikie Sherrill unterzeichnet und tritt am 1. März 2027 in Kraft, was der staatlichen Versorgungsaufsicht (Board of Public Utilities) Zeit zur Umsetzung gibt – prüfen Sie das heutige Datum gegen dieses Inkrafttretensdatum, bevor Sie annehmen, dass das Gesetz bereits für Sie gilt.',
          'New Jersey ist nach Colorado der zweite Bundesstaat, der HOA- und Vermieterverbote ausdrücklich außer Kraft setzt. Das Gesetz untersagt Vermietern, HOAs und Eigentümergemeinschaften, die Geräte komplett zu verbieten, auch auf einem gemieteten Balkon oder einer Terrasse – sie dürfen aber weiterhin „angemessene Einschränkungen hinsichtlich Größe, Platzierung oder Art der Anbringung" festlegen, und Bewohner müssen 14 Tage vor der Installation schriftlich informieren und Sicherheitsunterlagen vorlegen. Maines Gesetz nutzt eine ähnliche zweistufige Wattgrenze – siehe das <a href="/de/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">Balkonsolar-Gesetz von Maine</a> für das andere Beispiel dieser Serie.',
        ],
        columns: ['Feld', 'New Jersey S2368/A4836'],
        rows: [
          { Feld: 'Unterzeichnet / In Kraft', 'New Jersey S2368/A4836': '1. Sep. 2026 / 1. März 2027' },
          { Feld: 'Leistungsobergrenze', 'New Jersey S2368/A4836': '1.200 W (Ausnahme bis 400 W)' },
          { Feld: 'HOA- / Vermieterverbote', 'New Jersey S2368/A4836': 'Außer Kraft gesetzt – nur angemessene Einschränkungen' },
          { Feld: 'Vorankündigung', 'New Jersey S2368/A4836': '14 Tage schriftlich + Sicherheitsunterlagen' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Ist die Wirtschaftlichkeit in New Jersey überzeugend?',
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
          'Der durchschnittliche Strompreis für Privathaushalte in New Jersey liegt bei etwa 23,3 Cent/kWh – etwa doppelt so hoch wie Utahs 11,6 Cent/kWh. Sobald konforme Hardware erhältlich ist und das Gesetz in Kraft tritt, dürfte ein 800-W-Set am oberen Ende der in dieser Serie beobachteten nationalen Spanne von etwa 150–350 $/Jahr liegen, auch wenn eine New-Jersey-spezifische Schätzung nicht in der Einsparungstabelle der Quelle enthalten war.',
          'Die Zertifizierung bleibt das andere Nadelöhr: Zum Redaktionsschluss hat kein vollständiges steckerfertiges Solarsystem die volle UL-3700-Zertifizierung bestätigt – eine bundesweite Lücke, unabhängig vom Inkrafttretensdatum in New Jersey. EcoFlows STREAM Ultra ist das Produkt, das dem am nächsten kommt, wird aber derzeit speziell für Utah zum Verkauf angeboten.',
          'Bereit, konkrete Hardware zu vergleichen, sobald das Gesetz in Kraft tritt und zertifizierte Hardware existiert? Sehen Sie sich die <a href="/de/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">aktuellen US-Heimbatterie-Empfehlungen für Balkonkraftwerke</a> oder den <a href="/de/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">Vergleich von EcoFlow, Anker und Zendure</a> an – reine Produktlinks, keine Aussage darüber, dass ein bestimmtes Set in New Jersey zertifiziert oder heute erhältlich ist.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Balkonsolar in New Jersey',
        faqs: [
          {
            q: 'Ist Balkonsolar in New Jersey derzeit legal?',
            a: 'Der Garden State Balcony Solar Act ist unterzeichnet, tritt aber erst am 1. März 2027 in Kraft. Prüfen Sie das heutige Datum, bevor Sie annehmen, dass das Gesetz bereits für Sie gilt.',
          },
          {
            q: 'Kann meine HOA oder mein Vermieter in New Jersey Balkonsolar verbieten?',
            a: 'Nein, nicht komplett – New Jersey ist nach Colorado der zweite Bundesstaat, der HOAs, Eigentümergemeinschaften und Vermietern ein Verbot der Geräte ausdrücklich untersagt. Sie dürfen weiterhin angemessene Einschränkungen bei Größe und Platzierung festlegen, und Sie müssen 14 Tage vor der Installation schriftlich informieren und Sicherheitsunterlagen vorlegen.',
          },
          {
            q: 'Wie hoch ist die Leistungsobergrenze in New Jersey?',
            a: '1.200 W kombinierte Leistung pro Anschlussadresse (oder pro Wohneinheit bei Mehrfamilienhäusern) über eine Standard-120-V-Steckdose. Geräte bis 400 W qualifizieren sich für eine leichtere Installations- und Zertifizierungsausnahme.',
          },
          {
            q: 'Was ändert die 400-W-Ausnahme konkret?',
            a: 'Geräte bis 400 W unterliegen laut Gesetzestext geringeren Installations- und Zertifizierungsanforderungen als die Standardstufe bis 1.200 W – der genaue verfahrenstechnische Unterschied wurde in den für diesen Durchgang geprüften Quellen jedoch nicht im Detail aufgeführt. Für einen ähnlichen zweistufigen Wattansatz siehe das Balkonsolar-Gesetz von Maine.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-es.webp',
    title: '¿Es legal la energía solar de balcón en Nueva Jersey?',
    dateModified: '2026-09-02',
    seoTitle: '¿Es legal la energía solar de balcón en Nueva Jersey? | Prompt Bites | PromptQuorum',
    metaDescription: 'Firmada el 1 de septiembre de 2026, vigente desde el 1 de marzo de 2027. La Garden State Balcony Solar Act prohíbe a HOA y arrendadores prohibirla, con límite de 1200 W. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Inquilinos y propietarios en EE. UU. que quieren saber si la energía solar de balcón es legal en Nueva Jersey',
    affiliateDisclosure: true,
    parentArticle: '/es/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Es legal la energía solar de balcón en Nueva Jersey?',
        answer: 'Firmada, pero aún no vigente. La Garden State Balcony Solar Act de Nueva Jersey (S2368/A4836) fue firmada por la gobernadora Mikie Sherrill el 1 de septiembre de 2026 y entra en vigor el 1 de marzo de 2027 — y, a diferencia de la mayoría de los demás estados, prohíbe explícitamente que arrendadores, HOA y asociaciones de condominios prohíban los dispositivos por completo.',
        bullets: [
          'S2368/A4836 firmada el 1 de septiembre de 2026 — entra en vigor el 1 de marzo de 2027',
          'Prohíbe explícitamente las prohibiciones de HOA y arrendadores, aunque se permiten "restricciones razonables" sobre tamaño y ubicación con 14 días de aviso por escrito',
          'Límite de 1200 W por domicilio; los dispositivos de 400 W o menos obtienen un nivel de exención de instalación/certificación más ligero',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La Garden State Balcony Solar Act de Nueva Jersey está firmada, pero no entra en vigor hasta el 1 de marzo de 2027 — verifica la fecha antes de asumir que ya aplica.',
          'Los arrendadores, HOA y asociaciones de condominios no pueden prohibir los dispositivos por completo, aunque pueden establecer "restricciones razonables" sobre tamaño y ubicación con 14 días de aviso por escrito.',
          'El límite estándar es de 1200 W; los dispositivos de 400 W o menos califican para un nivel de exención de instalación/certificación más ligero.',
          'Ningún sistema completo ha confirmado la certificación UL 3700 total todavía, igual que en todos los demás estados con ley vigente.',
        ],
      },
      body1: {
        title: '¿Qué exige la Garden State Balcony Solar Act?',
        content: [
          'La Garden State Balcony Solar Act de Nueva Jersey (S2368/A4836) limita la potencia combinada de dispositivos solares portátiles a 1200 vatios por domicilio — o por unidad de vivienda en edificios multifamiliares — conectados mediante un tomacorriente estándar de 120 V CA, con dispositivos de 400 W o menos que califican para un nivel de exención de instalación y certificación más ligero. Fue firmada por la gobernadora Mikie Sherrill el 1 de septiembre de 2026 y entra en vigor el 1 de marzo de 2027, lo que da tiempo a la Junta de Servicios Públicos del estado para implementarla — verifica la fecha de hoy contra esa fecha de vigencia antes de asumir que la ley ya te aplica.',
          'Nueva Jersey es el segundo estado, después de Colorado, en prohibir explícitamente las restricciones de HOA y arrendadores. La ley prohíbe que arrendadores, HOA y asociaciones de condominios prohíban los dispositivos por completo, incluso en un balcón o patio alquilado — pero aún pueden imponer "restricciones razonables sobre el tamaño, la ubicación o la forma de colocación", y los residentes deben dar aviso por escrito con 14 días de anticipación más documentación de seguridad antes de instalar. La ley de Maine usa una estructura similar de dos niveles de potencia — consulta la <a href="/es/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">ley de energía solar de balcón de Maine</a> para el otro ejemplo de esta serie.',
        ],
        columns: ['Campo', 'Nueva Jersey S2368/A4836'],
        rows: [
          { Campo: 'Firmada / Vigente', 'Nueva Jersey S2368/A4836': '1 sep. 2026 / 1 mar. 2027' },
          { Campo: 'Límite de potencia', 'Nueva Jersey S2368/A4836': '1200 W (exención hasta 400 W)' },
          { Campo: 'Prohibiciones de HOA / arrendador', 'Nueva Jersey S2368/A4836': 'Anuladas — solo restricciones razonables' },
          { Campo: 'Aviso previo', 'Nueva Jersey S2368/A4836': '14 días por escrito + documentación de seguridad' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '¿Es sólida la economía de la energía solar de balcón en Nueva Jersey?',
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
          'La tarifa eléctrica residencial promedio en Nueva Jersey ronda los 23.3 ¢/kWh — aproximadamente el doble de los 11.6 ¢/kWh de Utah. Una vez que exista hardware conforme y la ley esté vigente, un kit de 800 W debería situarse hacia el extremo alto del rango nacional de aproximadamente $150–$350 al año que ha seguido esta serie, aunque no había una estimación específica para Nueva Jersey en la tabla de ahorros de la fuente.',
          'La certificación sigue siendo el otro obstáculo: al momento de escribir esto, ningún sistema solar enchufable completo ha confirmado la certificación UL 3700 total — una brecha nacional independiente de la fecha de vigencia en Nueva Jersey. El STREAM Ultra de EcoFlow es el producto más cercano al mercado, pero actualmente se vende específicamente para Utah.',
          '¿Listo para comparar hardware real una vez que la ley entre en vigor y exista hardware certificado? Consulta las <a href="/es/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendaciones actuales de baterías domésticas en EE. UU. para energía solar de balcón</a> o la <a href="/es/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparación del ecosistema EcoFlow vs. Anker vs. Zendure</a> — son simples enlaces a productos, no una afirmación de que un kit específico esté certificado o disponible en Nueva Jersey hoy.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre energía solar de balcón en Nueva Jersey',
        faqs: [
          {
            q: '¿Es legal la energía solar de balcón en Nueva Jersey en este momento?',
            a: 'La Garden State Balcony Solar Act está firmada, pero no entra en vigor hasta el 1 de marzo de 2027. Verifica la fecha de hoy antes de asumir que la ley ya te cubre.',
          },
          {
            q: '¿Puede mi HOA o arrendador en Nueva Jersey prohibir la energía solar de balcón?',
            a: 'No, no por completo — Nueva Jersey es el segundo estado, después de Colorado, en prohibir explícitamente que las HOA, asociaciones de condominios y arrendadores prohíban los dispositivos. Aún pueden establecer restricciones razonables sobre tamaño y ubicación, y debes dar aviso por escrito con 14 días de anticipación más documentación de seguridad antes de instalar.',
          },
          {
            q: '¿Cuál es el límite de potencia en Nueva Jersey?',
            a: '1200 W de potencia combinada por domicilio (o por unidad de vivienda en edificios multifamiliares) a través de un tomacorriente estándar de 120 V. Los dispositivos de 400 W o menos califican para un nivel de exención de instalación y certificación más ligero.',
          },
          {
            q: '¿Qué cambia realmente el nivel de exención de 400 W?',
            a: 'Los dispositivos de 400 W o menos enfrentan requisitos de instalación y certificación más ligeros que el nivel estándar de hasta 1200 W, según el texto de la ley — aunque la diferencia procedimental exacta no se detalló en las fuentes revisadas en esta pasada. Para un enfoque similar de dos niveles de potencia, consulta la ley de energía solar de balcón de Maine.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-fr.webp',
    title: 'Le solaire de balcon est-il légal dans le New Jersey ?',
    dateModified: '2026-09-02',
    seoTitle: 'Le solaire de balcon est-il légal dans le New Jersey ? | Prompt Bites | PromptQuorum',
    metaDescription: "Signée le 1er septembre 2026, en vigueur le 1er mars 2027. Le Garden State Balcony Solar Act interdit aux copropriétés et bailleurs de l'interdire, plafond de 1 200 W. Réponse rapide de PromptQuorum.",
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: "Locataires et propriétaires américains qui vérifient si le solaire de balcon est légal dans le New Jersey",
    affiliateDisclosure: true,
    parentArticle: '/fr/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Le solaire de balcon est-il légal dans le New Jersey ?',
        answer: "Signée, mais pas encore en vigueur. Le Garden State Balcony Solar Act du New Jersey (S2368/A4836) a été signé par la gouverneure Mikie Sherrill le 1er septembre 2026 et entre en vigueur le 1er mars 2027 — et contrairement à la plupart des autres États, il interdit explicitement aux bailleurs, copropriétés et associations de condominiums d'interdire purement et simplement les appareils.",
        bullets: [
          "S2368/A4836 signée le 1er septembre 2026 — en vigueur le 1er mars 2027",
          "Interdit explicitement les interdictions des copropriétés et bailleurs, même si des « restrictions raisonnables » sur la taille et l'emplacement restent autorisées avec un préavis écrit de 14 jours",
          "Plafond de 1 200 W par adresse ; les appareils de 400 W ou moins bénéficient d'un régime d'installation/certification allégé",
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Le Garden State Balcony Solar Act du New Jersey est signé mais n'entre en vigueur que le 1er mars 2027 — vérifiez la date avant de supposer qu'il s'applique déjà.",
          "Les bailleurs, copropriétés et associations de condominiums ne peuvent pas interdire purement et simplement les appareils, mais peuvent fixer des « restrictions raisonnables » sur la taille et l'emplacement avec un préavis écrit de 14 jours.",
          "Le plafond standard est de 1 200 W ; les appareils de 400 W ou moins bénéficient d'un régime d'installation/certification allégé.",
          "Aucun système complet n'a encore confirmé sa certification UL 3700 intégrale, comme dans tous les autres États ayant adopté une loi.",
        ],
      },
      body1: {
        title: 'Que prévoit le Garden State Balcony Solar Act ?',
        content: [
          "Le Garden State Balcony Solar Act du New Jersey (S2368/A4836) plafonne la puissance combinée des dispositifs solaires portables à 1 200 watts par adresse — ou par logement dans un immeuble multifamilial — raccordés via une prise standard 120 V CA, les appareils de 400 W ou moins bénéficiant d'un régime d'installation et de certification allégé. Il a été signé par la gouverneure Mikie Sherrill le 1er septembre 2026 et entre en vigueur le 1er mars 2027, laissant à la commission des services publics de l'État le temps de le mettre en œuvre — vérifiez la date d'aujourd'hui par rapport à cette date d'entrée en vigueur avant de supposer que la loi s'applique déjà à vous.",
          "Le New Jersey est le deuxième État, après le Colorado, à interdire explicitement les refus des copropriétés et des bailleurs. La loi interdit aux bailleurs, copropriétés et associations de condominiums d'interdire purement et simplement les appareils, y compris sur un balcon ou une terrasse loués — mais ils peuvent toujours imposer des « restrictions raisonnables concernant la taille, l'emplacement ou le mode de pose », et les résidents doivent donner un préavis écrit de 14 jours ainsi que la documentation de sécurité avant l'installation. La loi du Maine utilise une structure similaire à deux paliers de puissance — voir la <a href=\"/fr/prompt-bites/is-balcony-solar-legal-maine\" class=\"text-primary hover:underline\">loi sur le solaire de balcon du Maine</a> pour l'autre exemple de cette série.",
        ],
        columns: ['Champ', 'New Jersey S2368/A4836'],
        rows: [
          { Champ: 'Signée / En vigueur', 'New Jersey S2368/A4836': '1er sept. 2026 / 1er mars 2027' },
          { Champ: 'Plafond de puissance', 'New Jersey S2368/A4836': '1 200 W (exemption jusqu\'à 400 W)' },
          { Champ: 'Interdictions copropriété / bailleur', 'New Jersey S2368/A4836': 'Interdites — restrictions raisonnables seulement' },
          { Champ: 'Préavis requis', 'New Jersey S2368/A4836': "14 jours par écrit + documents de sécurité" },
        ],
        tableFormat: true,
      },
      body2: {
        title: "Le modèle économique est-il solide dans le New Jersey ?",
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
          "Le tarif résidentiel moyen de l'électricité dans le New Jersey est d'environ 23,3 ¢/kWh — près du double des 11,6 ¢/kWh de l'Utah. Une fois du matériel conforme disponible et la loi en vigueur, un kit de 800 W devrait se situer vers le haut de la fourchette nationale d'environ 175–350 $/an suivie par cette série, même si aucune estimation propre au New Jersey ne figurait dans le tableau d'économies de la source.",
          "La certification reste l'autre obstacle : à l'heure de la rédaction, aucun système solaire branchable complet n'a confirmé une certification UL 3700 intégrale — un manque national indépendant de la date d'entrée en vigueur dans le New Jersey. Le STREAM Ultra d'EcoFlow est le produit le plus proche du marché, mais il est actuellement vendu spécifiquement pour l'Utah.",
          "<strong>Prêt à comparer du matériel concret une fois la loi en vigueur et du matériel certifié disponible ?</strong> Consultez les <a href='/fr/balcony-solar/best-balcony-solar-home-battery-us-2026' class='text-primary hover:underline'>meilleures batteries domestiques américaines actuelles pour le solaire de balcon</a> ou la <a href='/fr/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar' class='text-primary hover:underline'>comparaison de l'écosystème EcoFlow, Anker et Zendure</a> — de simples liens produits, sans affirmer qu'un kit précis est certifié ou disponible dans le New Jersey aujourd'hui.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le solaire de balcon dans le New Jersey',
        faqs: [
          {
            q: "Le solaire de balcon est-il légal dans le New Jersey dès maintenant ?",
            a: "Le Garden State Balcony Solar Act est signé mais n'entre en vigueur que le 1er mars 2027. Vérifiez la date d'aujourd'hui avant de supposer que la loi vous couvre déjà.",
          },
          {
            q: "Ma copropriété ou mon bailleur peuvent-ils interdire le solaire de balcon dans le New Jersey ?",
            a: "Non, pas purement et simplement — le New Jersey est le deuxième État, après le Colorado, à interdire explicitement aux copropriétés, associations de condominiums et bailleurs d'interdire les appareils. Ils peuvent toujours fixer des restrictions raisonnables sur la taille et l'emplacement, et vous devez donner un préavis écrit de 14 jours ainsi que la documentation de sécurité avant l'installation.",
          },
          {
            q: "Quel est le plafond de puissance dans le New Jersey ?",
            a: "1 200 W de puissance combinée par adresse (ou par logement dans un immeuble multifamilial) via une prise standard 120 V. Les appareils de 400 W ou moins bénéficient d'un régime d'installation et de certification allégé.",
          },
          {
            q: "Que change concrètement le régime allégé à 400 W ?",
            a: "Les appareils de 400 W ou moins sont soumis à des exigences d'installation et de certification plus légères que le palier standard jusqu'à 1 200 W, selon le texte de la loi — la différence procédurale exacte n'était toutefois pas détaillée dans les sources consultées lors de cette recherche. Pour une approche similaire à deux paliers de puissance, voir la loi sur le solaire de balcon du Maine.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-ja.webp',
    title: 'ニュージャージー州でバルコニーソーラーは合法ですか？',
    dateModified: '2026-09-02',
    seoTitle: 'ニュージャージー州でバルコニーソーラーは合法ですか？ | Prompt Bites | PromptQuorum',
    metaDescription: '2026年9月1日に署名され、2027年3月1日に施行されます。Garden State Balcony Solar ActはHOAと家主による禁止を禁じており、上限は1,200Wです。PromptQuorumによるクイックアンサー。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'ニュージャージー州でバルコニーソーラーが合法かどうかを確認している米国の賃貸居住者・持ち家所有者',
    affiliateDisclosure: true,
    parentArticle: '/ja/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: 'ニュージャージー州でバルコニーソーラーは合法ですか？',
        answer: '署名済みだが、まだ施行されていない。ニュージャージー州のGarden State Balcony Solar Act（S2368/A4836）は2026年9月1日にミキー・シェリル知事によって署名され、2027年3月1日に施行される — 他の多くの州と異なり、この法律は家主・HOA・コンドミニアム組合が設備を全面的に禁止することを明確に禁じている。',
        bullets: [
          'S2368/A4836は2026年9月1日に署名 — 2027年3月1日に施行',
          'HOAや家主による禁止を明確に禁じるが、サイズや設置場所に関する「合理的な制限」は14日前の書面通知を条件に認められる',
          '住戸あたり上限1,200W。400W以下の機器は設置・認証要件が緩和される',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ニュージャージー州のGarden State Balcony Solar Actは署名済みだが、施行は2027年3月1日から — 既に適用されていると思い込む前に日付を確認すること。',
          '家主・HOA・コンドミニアム組合は設備を全面的に禁止できないが、サイズや設置場所について「合理的な制限」を14日前の書面通知を条件に設けることは可能。',
          '標準の上限は1,200W。400W以下の機器は設置・認証要件が緩和される。',
          '他の全ての制定州と同様、UL 3700の完全認証を取得したシステムはまだ確認されていない。',
        ],
      },
      body1: {
        title: 'Garden State Balcony Solar Actが求める要件とは？',
        content: [
          'ニュージャージー州のGarden State Balcony Solar Act（S2368/A4836）は、標準120V ACコンセント経由で接続する携帯型ソーラー機器の合計出力を、住所単位（集合住宅の場合は住戸単位）で1,200ワットに制限しており、400W以下の機器はより緩やかな設置・認証の適用除外を受けられる。同法は2026年9月1日にミキー・シェリル知事によって署名され、2027年3月1日に施行される。これは州の公益事業委員会（Board of Public Utilities）に実施の準備期間を与えるためであり、今日の日付をこの施行日と照らし合わせずに法律が既に適用されると思い込まないこと。',
          'ニュージャージー州は、コロラド州に次いでHOAや家主による禁止を明確に無効化する2番目の州である。同法は家主・HOA・コンドミニアム組合が、賃貸中のバルコニーやパティオも含めて設備を全面的に禁止することを禁じている — ただし、「サイズ、設置場所、設置方法に関する合理的な制限」を課すことは引き続き認められており、居住者は設置前に14日前の書面通知と安全性に関する書類の提出が必要となる。メイン州の法律も同様の二段階のワット数構成を採用している — このシリーズのもう一つの例として<a href="/ja/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">メイン州のバルコニーソーラー法</a>を参照してほしい。',
        ],
        columns: ['項目', 'ニュージャージー州 S2368/A4836'],
        rows: [
          { 項目: '署名 / 施行日', 'ニュージャージー州 S2368/A4836': '2026年9月1日 / 2027年3月1日' },
          { 項目: '出力上限', 'ニュージャージー州 S2368/A4836': '1,200W（400W以下は緩和措置あり）' },
          { 項目: 'HOA・家主による禁止', 'ニュージャージー州 S2368/A4836': '無効化 — 合理的な制限のみ可能' },
          { 項目: '事前通知', 'ニュージャージー州 S2368/A4836': '14日前の書面通知 + 安全性書類' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'ニュージャージー州の経済性は魅力的か？',
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
          'ニュージャージー州の平均的な住宅用電気料金は約11.6セント/kWhのユタ州のおよそ2倍にあたる、約23.3セント/kWhである。適合するハードウェアが登場し法律が施行されれば、800Wキットの節約額はこのシリーズが追跡してきた年間約150〜350ドルという全国レンジの上位寄りになると見込まれるが、情報源の州別節約額の表にニュージャージー州特有の金額は含まれていなかった。',
          '認証は依然としてもう一つの関門である — 執筆時点で、完全なプラグイン式ソーラーシステムでUL 3700の完全認証を取得したと確認されたものはない。これはニュージャージー州の施行日にかかわらず全米共通のギャップである。EcoFlowのSTREAM Ultraが最も市場に近い製品だが、現在はユタ州向けに限定して販売されている。',
          '法律が施行され認証済みハードウェアが登場したら、実際の製品を比較する準備をしよう。<a href="/ja/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">バルコニーソーラー向け米国home batteryの最新おすすめ</a>や<a href="/ja/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow・Anker・Zendureのエコシステム比較</a>をご覧いただきたい — これらは単なる製品リンクであり、特定のキットがニュージャージー州で認証済み・販売中であると主張するものではない。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ニュージャージー州のバルコニーソーラーに関するクイックアンサー',
        faqs: [
          {
            q: 'ニュージャージー州で今すぐバルコニーソーラーは合法ですか？',
            a: 'Garden State Balcony Solar Actは署名済みだが、施行は2027年3月1日からです。既に適用されていると思い込む前に今日の日付を確認してください。',
          },
          {
            q: 'ニュージャージー州でHOAや家主がバルコニーソーラーを禁止できますか？',
            a: '全面的な禁止はできません。ニュージャージー州はコロラド州に次いで、HOA・コンドミニアム組合・家主による設備の全面禁止を明確に禁じる2番目の州です。ただしサイズや設置場所について合理的な制限を設けることは可能で、設置前には14日前の書面通知と安全性書類の提出が必要です。',
          },
          {
            q: 'ニュージャージー州の出力上限はいくらですか？',
            a: '標準120Vコンセント経由で、住所あたり（集合住宅の場合は住戸あたり）合計1,200Wです。400W以下の機器はより緩やかな設置・認証の適用除外を受けられます。',
          },
          {
            q: '400Wの緩和措置は具体的に何を変えますか？',
            a: '法文によれば、400W以下の機器は標準の1,200W以下の区分よりも軽い設置・認証要件が適用されますが、正確な手続き上の違いについては今回確認した情報源では詳細が示されていませんでした。同様の二段階ワット数の仕組みについては、メイン州のバルコニーソーラー法を参照してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-zh.webp',
    title: '新泽西州的阳台太阳能合法吗？',
    dateModified: '2026-09-02',
    seoTitle: '新泽西州的阳台太阳能合法吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '已于2026年9月1日签署，2027年3月1日生效。《花园州阳台太阳能法案》禁止业主协会和房东予以禁止,功率上限1,200瓦。PromptQuorum为您解答。',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '正在核实阳台太阳能在新泽西州是否合法的美国租户和房主',
    affiliateDisclosure: true,
    parentArticle: '/zh/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '新泽西州的阳台太阳能合法吗？',
        answer: '已签署，但尚未生效。新泽西州《花园州阳台太阳能法案》(S2368/A4836) 由州长米基·谢里尔于2026年9月1日签署，将于2027年3月1日生效——与大多数其他已立法州不同,该法案明确禁止房东、业主协会（HOA）和公寓业主协会全面禁止使用此类设备。',
        bullets: [
          'S2368/A4836于2026年9月1日签署——2027年3月1日生效',
          '明确禁止HOA和房东的全面禁令,但仍允许在提前14天书面通知的前提下对尺寸和安装位置设定"合理限制"',
          '每个用电地址功率上限1,200瓦;功率400瓦及以下的设备可享受更宽松的安装/认证豁免',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '新泽西州《花园州阳台太阳能法案》已签署,但要到2027年3月1日才生效——在假定该法已适用之前,请先核实日期。',
          '房东、HOA和公寓业主协会不得全面禁止此类设备,但可以在提前14天书面通知的前提下,对尺寸和安装位置设定"合理限制"。',
          '标准上限为1,200瓦;功率400瓦及以下的设备可享受更宽松的安装/认证豁免。',
          '与其他所有已立法州一样,目前尚无完整系统确认已完成UL 3700全面认证。',
        ],
      },
      body1: {
        title: '《花园州阳台太阳能法案》有哪些要求？',
        content: [
          '新泽西州《花园州阳台太阳能法案》(S2368/A4836) 将便携式太阳能设备的合计输出功率限制在每个用电地址（多户住宅则为每个居住单元）1,200瓦,通过标准120V交流插座连接,功率400瓦及以下的设备可享受更宽松的安装和认证豁免。该法案由州长米基·谢里尔于2026年9月1日签署,将于2027年3月1日生效,以便州公共事业委员会有时间落实实施细则——在假定该法已适用于你之前,请将今天的日期与该生效日期进行核对。',
          '新泽西州是继科罗拉多州之后,第二个明确禁止HOA和房东全面禁令的州。该法律禁止房东、HOA和公寓业主协会全面禁止此类设备,即便是在租赁的阳台或露台上也不例外——但他们仍可对"尺寸、安装位置或安装方式"设定"合理限制",居民必须在安装前提前14天提供书面通知及安全文件。缅因州的法律采用了类似的两级功率结构——可参阅本系列另一实例<a href="/zh/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">缅因州阳台太阳能法律</a>。',
        ],
        columns: ['项目', '新泽西州 S2368/A4836'],
        rows: [
          { 项目: '签署 / 生效日期', '新泽西州 S2368/A4836': '2026年9月1日 / 2027年3月1日' },
          { 项目: '功率上限', '新泽西州 S2368/A4836': '1,200瓦（400瓦以下有豁免）' },
          { 项目: 'HOA / 房东禁令', '新泽西州 S2368/A4836': '已被禁止——仅可设定合理限制' },
          { 项目: '事前通知', '新泽西州 S2368/A4836': '提前14天书面通知 + 安全文件' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '新泽西州的经济性如何？',
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
          '新泽西州住宅电价平均约为每千瓦时23.3美分——大约是犹他州每千瓦时11.6美分的两倍。一旦合规硬件上市且法律生效,一套800瓦套件的节省预计将处于本系列追踪的全国范围（每年约150-350美元）的较高端,不过信息源的各州节省对照表中并未列出针对新泽西州的具体金额。',
          '认证仍是另一道门槛：截至撰写本文时,尚无任何完整的插电式太阳能系统确认已完成完整的UL 3700认证——这是一个全美性的缺口,与新泽西州的生效日期无关。EcoFlow的STREAM Ultra是最接近上市的产品,但目前专门面向犹他州市场销售。',
          '等法律生效、认证硬件面世后,你会想比较真正的产品选项。请参阅<a href="/zh/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">当前美国阳台太阳能家用电池推荐</a>或<a href="/zh/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow、Anker与Zendure生态系统对比</a>——这些只是普通的产品链接,并不代表任何特定套件已在新泽西州获得认证或已上市销售。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于新泽西州阳台太阳能的快速问答',
        faqs: [
          {
            q: '新泽西州现在阳台太阳能合法吗？',
            a: '《花园州阳台太阳能法案》已签署,但要到2027年3月1日才生效。在假定该法已适用之前,请先核实今天的日期。',
          },
          {
            q: '新泽西州的HOA或房东可以禁止阳台太阳能吗？',
            a: '不能全面禁止——新泽西州是继科罗拉多州之后,第二个明确禁止HOA、公寓业主协会和房东全面禁止此类设备的州。他们仍可对尺寸和安装位置设定合理限制,你必须在安装前提前14天提供书面通知及安全文件。',
          },
          {
            q: '新泽西州的功率上限是多少？',
            a: '通过标准120V插座,每个用电地址（多户住宅则为每个居住单元）合计功率上限为1,200瓦。功率400瓦及以下的设备可享受更宽松的安装和认证豁免。',
          },
          {
            q: '400瓦豁免档实际改变了什么？',
            a: '根据法案文本,功率400瓦及以下的设备所面临的安装和认证要求比标准的1,200瓦以下档更宽松——不过本次审阅的信息源并未详细列出具体的程序差异。关于类似的两级功率方案,可参阅缅因州的阳台太阳能法律。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-pt.webp',
    title: 'A energia solar de varanda é legal em Nova Jersey?',
    dateModified: '2026-09-02',
    seoTitle: 'A energia solar de varanda é legal em Nova Jersey? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sancionada em 1º de setembro de 2026, em vigor a partir de 1º de março de 2027. A Garden State Balcony Solar Act proíbe HOAs e locadores de bani-la, limite de 1.200 W. Resposta rápida da PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Locatários e proprietários nos EUA que querem saber se a energia solar de varanda é legal em Nova Jersey',
    affiliateDisclosure: true,
    parentArticle: '/pt/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'A energia solar de varanda é legal em Nova Jersey?',
        answer: 'Sancionada, mas ainda não em vigor. A Garden State Balcony Solar Act de Nova Jersey (S2368/A4836) foi sancionada pela governadora Mikie Sherrill em 1º de setembro de 2026 e entra em vigor em 1º de março de 2027 — e, diferentemente da maioria dos outros estados, proíbe explicitamente que locadores, HOAs e associações de condomínio bane os dispositivos por completo.',
        bullets: [
          'S2368/A4836 sancionada em 1º de setembro de 2026 — em vigor a partir de 1º de março de 2027',
          'Proíbe explicitamente banimentos por HOAs e locadores, embora "restrições razoáveis" quanto a tamanho e posicionamento continuem permitidas com aviso prévio por escrito de 14 dias',
          'Limite de 1.200 W por endereço; dispositivos de 400 W ou menos têm um nível de isenção de instalação/certificação mais leve',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Garden State Balcony Solar Act de Nova Jersey está sancionada, mas só entra em vigor em 1º de março de 2027 — verifique a data antes de presumir que ela já se aplica.',
          'Locadores, HOAs e associações de condomínio não podem banir os dispositivos por completo, mas podem impor "restrições razoáveis" quanto a tamanho e posicionamento com aviso prévio por escrito de 14 dias.',
          'O limite padrão é de 1.200 W; dispositivos de 400 W ou menos se qualificam para um nível de isenção de instalação/certificação mais leve.',
          'Nenhum sistema completo confirmou certificação UL 3700 total ainda, assim como em todos os outros estados com lei sancionada.',
        ],
      },
      body1: {
        title: 'O que a Garden State Balcony Solar Act vai exigir?',
        content: [
          'A Garden State Balcony Solar Act de Nova Jersey (S2368/A4836) limita a potência combinada de dispositivos solares portáteis a 1.200 watts por endereço — ou por unidade habitacional em prédios multifamiliares — conectados por uma tomada padrão de 120 V CA, com dispositivos de 400 W ou menos se qualificando para um nível de isenção de instalação e certificação mais leve. Foi sancionada pela governadora Mikie Sherrill em 1º de setembro de 2026 e entra em vigor em 1º de março de 2027, dando tempo para o Conselho de Serviços Públicos do estado implementá-la — verifique a data de hoje em relação a essa data de vigência antes de presumir que a lei já se aplica a você.',
          'Nova Jersey é o segundo estado, depois do Colorado, a proibir explicitamente banimentos por HOAs e locadores. A lei proíbe locadores, HOAs e associações de condomínio de banir os dispositivos por completo, inclusive em uma varanda ou pátio alugado — mas eles ainda podem impor "restrições razoáveis quanto ao tamanho, posicionamento ou forma de instalação", e os moradores devem dar aviso prévio por escrito de 14 dias, além de documentação de segurança, antes de instalar. A lei do Maine usa uma estrutura semelhante de dois níveis de potência — veja a <a href="/pt/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">lei de energia solar de varanda do Maine</a> para o outro exemplo desta série.',
        ],
        columns: ['Campo', 'Nova Jersey S2368/A4836'],
        rows: [
          { Campo: 'Sancionada / Em vigor', 'Nova Jersey S2368/A4836': '1º set. 2026 / 1º mar. 2027' },
          { Campo: 'Limite de potência', 'Nova Jersey S2368/A4836': '1.200 W (isenção até 400 W)' },
          { Campo: 'Banimentos por HOA / locador', 'Nova Jersey S2368/A4836': 'Proibidos — apenas restrições razoáveis' },
          { Campo: 'Aviso prévio', 'Nova Jersey S2368/A4836': '14 dias por escrito + documentação de segurança' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'A economia de Nova Jersey é vantajosa?',
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
          'A tarifa residencial média de eletricidade em Nova Jersey gira em torno de 23,3 ¢/kWh — cerca do dobro dos 11,6 ¢/kWh de Utah. Assim que houver hardware compatível e a lei estiver em vigor, um kit de 800 W deve ficar na faixa mais alta da estimativa nacional de cerca de US$ 150–350/ano acompanhada nesta série, embora não houvesse uma estimativa específica para Nova Jersey na tabela de economia da fonte.',
          'A certificação continua sendo o outro obstáculo: no momento da redação deste texto, nenhum sistema solar plug-in completo confirmou certificação UL 3700 total — uma lacuna nacional independente da data de vigência em Nova Jersey. O STREAM Ultra da EcoFlow é o produto mais próximo do mercado, mas atualmente é vendido especificamente para Utah.',
          'Pronto para comparar hardware real assim que a lei entrar em vigor e existir hardware certificado? Veja as <a href="/pt/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">recomendações atuais de baterias domésticas nos EUA para energia solar de varanda</a> ou a <a href="/pt/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">comparação do ecossistema EcoFlow vs. Anker vs. Zendure</a> — são apenas links de produtos, não uma afirmação de que um kit específico é certificado ou está disponível em Nova Jersey hoje.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre energia solar de varanda em Nova Jersey',
        faqs: [
          {
            q: 'A energia solar de varanda é legal em Nova Jersey agora?',
            a: 'A Garden State Balcony Solar Act está sancionada, mas só entra em vigor em 1º de março de 2027. Verifique a data de hoje antes de presumir que a lei já cobre você.',
          },
          {
            q: 'Minha HOA ou locador em Nova Jersey podem banir a energia solar de varanda?',
            a: 'Não, não por completo — Nova Jersey é o segundo estado, depois do Colorado, a proibir explicitamente que HOAs, associações de condomínio e locadores banam os dispositivos. Eles ainda podem impor restrições razoáveis quanto a tamanho e posicionamento, e você deve dar aviso prévio por escrito de 14 dias, além de documentação de segurança, antes de instalar.',
          },
          {
            q: 'Qual é o limite de potência em Nova Jersey?',
            a: '1.200 W de potência combinada por endereço (ou por unidade habitacional em prédios multifamiliares) por meio de uma tomada padrão de 120 V. Dispositivos de 400 W ou menos se qualificam para um nível de isenção de instalação e certificação mais leve.',
          },
          {
            q: 'O que o nível de isenção de 400 W muda de fato?',
            a: 'Segundo o texto da lei, dispositivos de 400 W ou menos enfrentam exigências de instalação e certificação mais leves do que o nível padrão de até 1.200 W — embora a diferença procedimental exata não tenha sido detalhada nas fontes revisadas nesta passagem. Para uma abordagem semelhante de dois níveis de potência, veja a lei de energia solar de varanda do Maine.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-ar.webp',
    title: 'هل الطاقة الشمسية للشرفات قانونية في نيوجيرسي؟',
    dateModified: '2026-09-02',
    seoTitle: 'هل الطاقة الشمسية للشرفات قانونية في نيوجيرسي؟ | Prompt Bites | PromptQuorum',
    metaDescription: 'تم التوقيع في 1 سبتمبر 2026، ويسري اعتبارًا من 1 مارس 2027. يمنع قانون Garden State Balcony Solar Act جمعيات الملاك والملاك المؤجرين من حظرها، بحد أقصى 1,200 واط. إجابة سريعة من PromptQuorum.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'المستأجرون والملاك في الولايات المتحدة الذين يتحققون مما إذا كانت الطاقة الشمسية للشرفات قانونية في نيوجيرسي',
    affiliateDisclosure: true,
    parentArticle: '/ar/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الطاقة الشمسية للشرفات قانونية في نيوجيرسي؟',
        answer: 'موقَّع عليه، لكنه لم يدخل حيز التنفيذ بعد. وقّعت الحاكمة ميكي شيريل على قانون Garden State Balcony Solar Act في نيوجيرسي (S2368/A4836) في 1 سبتمبر 2026، ويدخل حيز التنفيذ في 1 مارس 2027 — وخلافًا لمعظم الولايات الأخرى الموقِّعة، يمنع القانون صراحةً الملاك المؤجرين وجمعيات الملاك (HOA) وجمعيات الشقق السكنية من حظر الأجهزة كليًا.',
        bullets: [
          'تم توقيع S2368/A4836 في 1 سبتمبر 2026 — ويسري اعتبارًا من 1 مارس 2027',
          'يمنع صراحةً حظر جمعيات الملاك والملاك المؤجرين، مع السماح بـ"قيود معقولة" على الحجم والموضع بشرط إشعار كتابي مسبق مدته 14 يومًا',
          'حد أقصى 1,200 واط لكل عنوان خدمة؛ الأجهزة التي لا تتجاوز 400 واط تحصل على إعفاء أخف من متطلبات التركيب والاعتماد',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قانون Garden State Balcony Solar Act في نيوجيرسي موقَّع، لكنه لا يدخل حيز التنفيذ إلا في 1 مارس 2027 — تحقق من التاريخ قبل افتراض أنه يسري بالفعل.',
          'لا يمكن للملاك المؤجرين وجمعيات الملاك (HOA) وجمعيات الشقق السكنية حظر الأجهزة كليًا، لكن يمكنهم فرض "قيود معقولة" على الحجم والموضع بشرط إشعار كتابي مسبق مدته 14 يومًا.',
          'الحد الأقصى القياسي هو 1,200 واط؛ الأجهزة التي لا تتجاوز 400 واط تحصل على إعفاء أخف من متطلبات التركيب والاعتماد.',
          'لم يؤكد أي نظام كامل حتى الآن حصوله على اعتماد UL 3700 الكامل، كما هو الحال في كل ولاية أخرى أقرّت تشريعًا.',
        ],
      },
      body1: {
        title: 'ما الذي يتطلبه قانون Garden State Balcony Solar Act؟',
        content: [
          'يحدّ قانون Garden State Balcony Solar Act في نيوجيرسي (S2368/A4836) القدرة الإجمالية لأجهزة الطاقة الشمسية المحمولة عند 1,200 واط لكل عنوان خدمة — أو لكل وحدة سكنية في المباني متعددة الأسر — متصلة عبر مقبس قياسي 120V AC، مع حصول الأجهزة التي لا تتجاوز 400 واط على إعفاء أخف من متطلبات التركيب والاعتماد. وقّعت عليه الحاكمة ميكي شيريل في 1 سبتمبر 2026، ويدخل حيز التنفيذ في 1 مارس 2027، ما يمنح مجلس المرافق العامة للولاية وقتًا لتنفيذه — تحقق من تاريخ اليوم مقابل تاريخ السريان هذا قبل افتراض أن القانون يسري عليك بالفعل.',
          'تُعد نيوجيرسي ثاني ولاية، بعد كولورادو، تمنع صراحةً حظر جمعيات الملاك والملاك المؤجرين. يحظر القانون على الملاك المؤجرين وجمعيات الملاك وجمعيات الشقق السكنية حظر الأجهزة كليًا، بما في ذلك على شرفة أو فناء مستأجر — لكن يظل بإمكانهم فرض "قيود معقولة تتعلق بالحجم أو الموضع أو طريقة التركيب"، ويجب على السكان تقديم إشعار كتابي مسبق مدته 14 يومًا مع وثائق السلامة قبل التركيب. يستخدم قانون ولاية ماين هيكلًا مشابهًا من مستويين للطاقة — راجع <a href="/ar/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">قانون الطاقة الشمسية للشرفات في ماين</a> للاطلاع على المثال الآخر في هذه السلسلة.',
        ],
        columns: ['الحقل', 'نيوجيرسي S2368/A4836'],
        rows: [
          { الحقل: 'التوقيع / السريان', 'نيوجيرسي S2368/A4836': '1 سبتمبر 2026 / 1 مارس 2027' },
          { الحقل: 'الحد الأقصى للطاقة', 'نيوجيرسي S2368/A4836': '1,200 واط (إعفاء حتى 400 واط)' },
          { الحقل: 'حظر جمعيات الملاك / الملاك المؤجرين', 'نيوجيرسي S2368/A4836': 'ممنوع — قيود معقولة فقط' },
          { الحقل: 'الإشعار المسبق', 'نيوجيرسي S2368/A4836': 'إشعار كتابي 14 يومًا + وثائق السلامة' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'هل الجدوى الاقتصادية قوية في نيوجيرسي؟',
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
          'يبلغ متوسط تعرفة الكهرباء السكنية في نيوجيرسي نحو 23.3 سنتًا لكل كيلوواط ساعة — أي ضعف تعرفة يوتا البالغة 11.6 سنتًا تقريبًا. وبمجرد توفر أجهزة متوافقة ودخول القانون حيز التنفيذ، من المتوقع أن يقترب التوفير من مجموعة 800 واط من الطرف الأعلى للنطاق الوطني الذي تتبعته هذه السلسلة والبالغ نحو 150–350 دولارًا سنويًا، رغم عدم وجود تقدير خاص بنيوجيرسي في جدول التوفير الخاص بالمصدر.',
          'يبقى الاعتماد هو العقبة الأخرى: حتى وقت كتابة هذا المقال، لم يؤكد أي نظام شمسي كامل قابل للتوصيل المباشر حصوله على اعتماد UL 3700 الكامل — وهي فجوة على مستوى البلاد بغض النظر عن تاريخ سريان القانون في نيوجيرسي. يُعد جهاز EcoFlow STREAM Ultra الأقرب إلى السوق، لكنه يُطرح للبيع حاليًا خصيصًا في يوتا.',
          'هل أنت مستعد لمقارنة الأجهزة الفعلية بمجرد دخول القانون حيز التنفيذ وتوفر أجهزة معتمدة؟ اطّلع على <a href="/ar/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">أفضل بطاريات المنازل الأمريكية الحالية للطاقة الشمسية للشرفات</a> أو <a href="/ar/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">مقارنة منظومة EcoFlow وAnker وZendure</a> — وهي مجرد روابط منتجات عادية، وليست ادعاءً بأن أي مجموعة معينة معتمدة أو متاحة في نيوجيرسي اليوم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن الطاقة الشمسية للشرفات في نيوجيرسي',
        faqs: [
          {
            q: 'هل الطاقة الشمسية للشرفات قانونية في نيوجيرسي الآن؟',
            a: 'قانون Garden State Balcony Solar Act موقَّع، لكنه لا يدخل حيز التنفيذ إلا في 1 مارس 2027. تحقق من تاريخ اليوم قبل افتراض أن القانون يشملك بالفعل.',
          },
          {
            q: 'هل يمكن لجمعية الملاك أو الملاك المؤجر في نيوجيرسي حظر الطاقة الشمسية للشرفات؟',
            a: 'لا، ليس كليًا — نيوجيرسي هي ثاني ولاية، بعد كولورادو، تمنع صراحةً جمعيات الملاك وجمعيات الشقق السكنية والملاك المؤجرين من حظر الأجهزة. لا يزال بإمكانهم فرض قيود معقولة على الحجم والموضع، ويجب عليك تقديم إشعار كتابي مسبق مدته 14 يومًا مع وثائق السلامة قبل التركيب.',
          },
          {
            q: 'ما هو الحد الأقصى للطاقة في نيوجيرسي؟',
            a: '1,200 واط كقدرة إجمالية لكل عنوان خدمة (أو لكل وحدة سكنية في المباني متعددة الأسر) عبر مقبس قياسي 120V. الأجهزة التي لا تتجاوز 400 واط تحصل على إعفاء أخف من متطلبات التركيب والاعتماد.',
          },
          {
            q: 'ما الذي يغيّره إعفاء 400 واط فعليًا؟',
            a: 'وفقًا لنص القانون، تواجه الأجهزة التي لا تتجاوز 400 واط متطلبات تركيب واعتماد أخف من الفئة القياسية حتى 1,200 واط — رغم أن الفرق الإجرائي الدقيق لم يُفصَّل في المصادر التي تمت مراجعتها في هذه الجولة. للاطلاع على نهج مشابه من مستويين للطاقة، راجع قانون الطاقة الشمسية للشرفات في ولاية ماين.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'US Balcony Solar Regulation',
    heroImage: '/images/is-balcony-solar-legal-new-jersey-overview-hero-ko.webp',
    title: '뉴저지주에서 발코니 태양광은 합법입니까?',
    dateModified: '2026-09-02',
    seoTitle: '뉴저지주에서 발코니 태양광은 합법입니까? | Prompt Bites | PromptQuorum',
    metaDescription: '2026년 9월 1일 서명, 2027년 3월 1일 시행. Garden State Balcony Solar Act는 HOA와 임대인의 금지를 막으며 상한은 1,200W입니다. PromptQuorum의 빠른 답변입니다.',
    publishDate: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: '뉴저지주에서 발코니 태양광이 합법인지 확인하는 미국 세입자 및 주택 소유자',
    affiliateDisclosure: true,
    parentArticle: '/ko/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
      'is-balcony-solar-legal-california',
      'is-balcony-solar-legal-new-york',
    ],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '뉴저지주에서 발코니 태양광은 합법입니까?',
        answer: '서명되었지만 아직 시행되지 않았습니다. 뉴저지주 Garden State Balcony Solar Act(S2368/A4836)는 2026년 9월 1일 미키 셰릴 주지사가 서명했으며 2027년 3월 1일부터 시행됩니다 — 대부분의 다른 주와 달리, 이 법은 임대인·HOA·콘도미니엄 협회가 기기를 전면 금지하는 것을 명시적으로 막습니다.',
        bullets: [
          'S2368/A4836은 2026년 9월 1일 서명 — 2027년 3월 1일부터 시행',
          'HOA와 임대인의 전면 금지를 명시적으로 막지만, 크기와 설치 위치에 대한 "합리적인 제한"은 14일 전 서면 통지를 조건으로 허용',
          '주소당 상한 1,200W, 400W 이하 기기는 더 완화된 설치·인증 면제 등급 적용',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '뉴저지주 Garden State Balcony Solar Act는 서명되었지만 2027년 3월 1일부터 시행됩니다 — 이미 적용된다고 가정하기 전에 날짜를 확인해야 합니다.',
          '임대인·HOA·콘도미니엄 협회는 기기를 전면 금지할 수 없지만, 14일 전 서면 통지를 조건으로 크기와 설치 위치에 "합리적인 제한"을 둘 수 있습니다.',
          '표준 상한은 1,200W이며, 400W 이하 기기는 더 완화된 설치·인증 면제 등급을 적용받습니다.',
          '다른 모든 법제화된 주와 마찬가지로, UL 3700 완전 인증을 받은 시스템은 아직 확인되지 않았습니다.',
        ],
      },
      body1: {
        title: 'Garden State Balcony Solar Act가 요구하는 사항은 무엇입니까?',
        content: [
          '뉴저지주 Garden State Balcony Solar Act(S2368/A4836)는 표준 120V AC 콘센트로 연결되는 휴대용 태양광 기기의 합산 출력을 주소당(다세대 주택의 경우 세대당) 1,200와트로 제한하며, 400W 이하 기기는 더 완화된 설치·인증 면제 등급을 적용받습니다. 이 법은 2026년 9월 1일 미키 셰릴 주지사가 서명했으며 2027년 3월 1일부터 시행되어 주 공공사업위원회(Board of Public Utilities)에 시행 준비 기간을 제공합니다 — 이미 법이 적용된다고 가정하기 전에 오늘 날짜를 이 시행일과 비교해 확인해야 합니다.',
          '뉴저지주는 콜로라도주에 이어 HOA와 임대인의 금지를 명시적으로 무효화하는 두 번째 주입니다. 이 법은 임대인·HOA·콘도미니엄 협회가 임대된 발코니나 파티오를 포함해 기기를 전면 금지하는 것을 금지합니다 — 다만 "크기, 설치 위치, 설치 방식에 관한 합리적인 제한"은 여전히 부과할 수 있으며, 거주자는 설치 전 14일 전 서면 통지와 안전 관련 서류를 제출해야 합니다. 메인주의 법률도 이와 유사한 2단계 와트 구조를 사용합니다 — 이 시리즈의 또 다른 사례로 <a href="/ko/prompt-bites/is-balcony-solar-legal-maine" class="text-primary hover:underline">메인주 발코니 태양광 법률</a>을 참고하십시오.',
        ],
        columns: ['항목', '뉴저지주 S2368/A4836'],
        rows: [
          { 항목: '서명 / 시행일', '뉴저지주 S2368/A4836': '2026년 9월 1일 / 2027년 3월 1일' },
          { 항목: '출력 상한', '뉴저지주 S2368/A4836': '1,200W (400W 이하 완화 등급)' },
          { 항목: 'HOA / 임대인 금지', '뉴저지주 S2368/A4836': '무효화 — 합리적 제한만 가능' },
          { 항목: '사전 통지', '뉴저지주 S2368/A4836': '14일 전 서면 통지 + 안전 서류' },
        ],
        tableFormat: true,
      },
      body2: {
        title: '뉴저지주의 경제성은 매력적입니까?',
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
          '뉴저지주의 평균 주거용 전기 요금은 kWh당 약 23.3센트로, 유타주의 kWh당 11.6센트의 약 두 배입니다. 적합한 하드웨어가 출시되고 법이 시행되면, 800W 키트의 절감액은 이 시리즈가 추적해 온 연간 약 150~350달러의 전국 범위 중 상위권에 속할 것으로 예상되지만, 정보원의 주별 절감액 표에는 뉴저지주 고유의 수치가 포함되어 있지 않았습니다.',
          '인증은 여전히 또 다른 관문입니다 — 본 문서 작성 시점 기준으로 완전한 플러그인 태양광 시스템 중 UL 3700 완전 인증을 받은 것으로 확인된 제품은 없으며, 이는 뉴저지주의 시행일과 무관하게 전국적인 공백입니다. EcoFlow의 STREAM Ultra가 시장에 가장 가까운 제품이지만 현재는 유타주 전용으로 판매되고 있습니다.',
          '법이 시행되고 인증된 하드웨어가 등장하면 실제 제품을 비교할 준비를 하십시오. <a href="/ko/balcony-solar/best-balcony-solar-home-battery-us-2026" class="text-primary hover:underline">발코니 태양광용 미국 홈 배터리 최신 추천 제품</a> 또는 <a href="/ko/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar" class="text-primary hover:underline">EcoFlow, Anker, Zendure 생태계 비교</a>를 확인하십시오 — 이는 단순한 제품 링크일 뿐, 특정 키트가 뉴저지주에서 인증되었거나 현재 판매 중이라는 주장이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '뉴저지주 발코니 태양광에 관한 빠른 답변',
        faqs: [
          {
            q: '뉴저지주에서 지금 발코니 태양광은 합법입니까?',
            a: 'Garden State Balcony Solar Act는 서명되었지만 2027년 3월 1일부터 시행됩니다. 이미 법이 적용된다고 가정하기 전에 오늘 날짜를 확인해야 합니다.',
          },
          {
            q: '뉴저지주에서 HOA나 임대인이 발코니 태양광을 금지할 수 있습니까?',
            a: '전면 금지는 불가능합니다 — 뉴저지주는 콜로라도주에 이어 HOA, 콘도미니엄 협회, 임대인이 기기를 금지하는 것을 명시적으로 막는 두 번째 주입니다. 다만 크기와 설치 위치에 대한 합리적인 제한은 여전히 둘 수 있으며, 설치 전 14일 전 서면 통지와 안전 서류 제출이 필요합니다.',
          },
          {
            q: '뉴저지주의 출력 상한은 얼마입니까?',
            a: '표준 120V 콘센트를 통해 주소당(다세대 주택의 경우 세대당) 합산 1,200W입니다. 400W 이하 기기는 더 완화된 설치·인증 면제 등급을 적용받습니다.',
          },
          {
            q: '400W 면제 등급은 실제로 무엇을 바꿉니까?',
            a: '법안 원문에 따르면 400W 이하 기기는 표준 1,200W 이하 등급보다 완화된 설치·인증 요건을 적용받지만, 정확한 절차상의 차이는 이번에 검토한 자료에 상세히 나와 있지 않았습니다. 유사한 2단계 와트 방식에 대해서는 메인주 발코니 태양광 법률을 참고하십시오.',
          },
        ],
      },
    },
  },
}
