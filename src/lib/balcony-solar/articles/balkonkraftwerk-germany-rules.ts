// Slug: balkonkraftwerk-germany-rules
// BSOL-13 — Tier 3, DE reference market, semi_annual.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { getCountryData } from "@/lib/shared/balcony-solar-country-data";

const de = getCountryData('de')!;

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Balkonkraftwerk Rules in Germany: The Complete 2026 Guide',
    seoTitle: 'Balkonkraftwerk Germany: Rules, Limits & Registration',
    intro: 'Germany is the origin market for balcony solar — the "Balkonkraftwerk" — and has the most established regulatory framework of any country this guide covers. This page tracks the current 800W inverter cap, the single-registration process, and a newer product standard that took effect in December 2025.',
    metaDescription: 'Balkonkraftwerk rules in Germany: 800W inverter cap, Marktstammdatenregister registration, and the new DIN VDE V 0126-95 standard — verified against primary legal text, July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'German balcony solar buyers and renters confirming current legal requirements',
    primaryTerm: 'Balkonkraftwerk Regeln',
    targetKeywords: ['balkonkraftwerk regeln 2026', 'balkonkraftwerk 800 watt', 'marktstammdatenregister balkonkraftwerk', 'balkonkraftwerk anmeldung'],
    leadAnswerBlock: '**Germany permits balcony solar (Balkonkraftwerk) up to 800W inverter AC output with a single Marktstammdatenregister (MaStR) registration — no separate grid-operator notification required — confirmed against primary § 8 EEG 2023 legal text.** A newer safety standard, DIN VDE V 0126-95, took effect December 1, 2025, adding installation and connector requirements on top of the existing wattage limits; it explicitly excludes battery-equipped systems, which remain outside this simplified regime entirely.',
    quickAnswerTop: {
      en: {
        question: 'What are the current rules for Balkonkraftwerk in Germany?',
        answer: 'An 800W inverter AC output cap applies, confirmed against § 8 EEG 2023. Registration is a single Marktstammdatenregister (MaStR) entry — no separate grid-operator notification needed. Total panel capacity can reach 2,000 Wp, though a newer standard (DIN VDE V 0126-95, effective December 2025) caps module power at 960 Wp specifically for standard Schuko-socket connections. Battery-equipped balcony systems fall outside this simplified regime and need full grid-operator registration plus a licensed electrician.',
        bullets: [
          '800W inverter AC output cap — unchanged since the May 2024 Solarpaket I reform',
          'Single MaStR registration only — no separate Netzbetreiber (grid operator) notification required',
          'Panel capacity up to 2,000 Wp, but capped at 960 Wp specifically via a standard Schuko socket connection under DIN VDE V 0126-95',
          'DIN VDE V 0126-95 (effective 2025-12-01) is the first dedicated EU product safety standard for plug-in solar',
          'Storage-equipped (battery) balcony systems are excluded from this simplified regime entirely',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: '800W Inverter Limit', anchor: '#800w-limit' },
      { label: 'Registration: Marktstammdatenregister', anchor: '#registration' },
      { label: 'Schuko vs. Wieland: Plug Types and Panel Capacity', anchor: '#plug-types' },
      { label: 'The Meter Question', anchor: '#meter-question' },
      { label: 'Tenant Rights', anchor: '#tenant-rights' },
      { label: 'Grants', anchor: '#grants' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '800W inverter AC output cap, confirmed current against primary § 8 EEG 2023 legal text — unchanged since the May 2024 Solarpaket I reform.',
          'A single Marktstammdatenregister (MaStR) registration is the only step required — no separate grid-operator notification, confirmed against the same primary source.',
          'Panel capacity can reach 2,000 Wp, but DIN VDE V 0126-95 (effective December 1, 2025) caps module power at 960 Wp specifically when connecting via a standard Schuko socket — the full 2,000 Wp needs a dedicated energy connector.',
          'DIN VDE V 0126-95 is the first dedicated EU product safety standard for plug-in solar, mandating pre-assembled cables and rapid shutoff for shock protection.',
          'Battery-equipped balcony systems are excluded from this entire simplified regime — full grid-operator registration and a licensed electrician are required for those specifically.',
          'The old Ferraris (backward-spinning) meter is still temporarily tolerated pending a swap by the Messstellenbetreiber — the exact statutory swap deadline is commonly cited as roughly 4 months but was not independently confirmed against primary statute text.',
        ],
      },
      inverterLimit: {
        id: '800w-limit',
        title: '800W Inverter Limit',
        content: [
          `**The inverter AC output cap is ${de.powerLimitW}W, unchanged since the May 2024 Solarpaket I reform.** It's now anchored in two sources: § 8 EEG 2023 sets the legal ceiling, and DIN VDE V 0126-95 — a technical/safety product standard effective December 1, 2025 — reinforces it as the first dedicated EU product standard for plug-in solar devices.`,
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registration: Marktstammdatenregister',
        content: [
          '**A single Marktstammdatenregister (MaStR) entry is the only registration step required — no separate grid-operator notification is needed.** § 8 EEG 2023 text states no additional Netzbetreiber notification can be demanded beyond MaStR; the grid operator is informed automatically via MaStR data-sharing.',
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Schuko vs. Wieland: Plug Types and Panel Capacity',
        content: [
          `**Total panel (module) capacity can reach ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp, independent of and separate from the ${de.powerLimitW}W inverter/AC limit.** DIN VDE V 0126-95 adds a plug-type-dependent sub-limit: module power is capped at 960 Wp when connected via a standard household Schuko socket, with the full ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp requiring a dedicated energy connector such as Wieland.`,
          'In practice: if you\'re installing through a standard household Schuko outlet, plan around the 960 Wp module sub-limit. Reaching the full 2,000 Wp module capacity requires a dedicated energy connector (such as Wieland), which is a different — and more involved — installation than a simple Schuko plug-in.',
        ],
      },
      meterQuestion: {
        id: 'meter-question',
        title: 'The Meter Question',
        content: [
          '**A digital or bidirectional meter is not mandatory to operate a Balkonkraftwerk — an old backward-spinning Ferraris meter is still tolerated temporarily, contingent on MaStR registration.** The exact statutory window for the Messstellenbetreiber to install a two-way meter is commonly cited as roughly four months, but this specific figure was not independently confirmed against primary MessEG/MsbG statute text — treat it as a secondary-sourced estimate, not confirmed law.',
        ],
        callouts: [
          { type: 'tip', text: 'You are not required to wait for a new meter before operating your system — the old meter is tolerated temporarily as long as your MaStR registration is complete.' },
        ],
      },
      tenantRights: {
        id: 'tenant-rights',
        title: 'Tenant Rights',
        content: [
          '**Germany has moved toward treating balcony solar as a privileged home-improvement measure for tenants in recent reforms, similar in spirit to satellite dishes, though landlord/HOA approval processes and specifics can still vary by building.** Confirm your specific building\'s rules, particularly for anything mounted visibly on a railing or exterior wall, since aesthetic and structural conditions can still apply even where the underlying right to install is protected.',
        ],
      },
      grants: {
        id: 'grants',
        title: 'Grants',
        content: [
          '**Some German states and municipalities offer balcony solar subsidies (Förderprogramme), but availability, amount, and eligibility vary significantly by region and change over time — check your specific state or city\'s current program directly rather than assuming a subsidy applies nationally.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is the current wattage limit for Balkonkraftwerk in Germany?', a: '800W inverter AC output, confirmed against primary § 8 EEG 2023 text — unchanged since the May 2024 Solarpaket I reform.' },
          { q: 'Do I need to register my Balkonkraftwerk with my grid operator?', a: 'No — a single Marktstammdatenregister (MaStR) entry is the only registration step required. No separate Netzbetreiber notification is needed; the grid operator is informed automatically via MaStR data-sharing.' },
          { q: 'What is DIN VDE V 0126-95?', a: 'The first dedicated EU product safety standard for plug-in solar devices, effective December 1, 2025. It mandates pre-assembled connection cables, clear installation instructions, and rapid voltage shutoff for shock protection, and explicitly excludes battery-equipped systems.' },
          { q: 'Can I install more than 800W of panels?', a: 'Yes — total panel (module) capacity can reach 2,000 Wp even though the inverter output stays capped at 800W. A standard Schuko socket connection caps module power at 960 Wp specifically; the full 2,000 Wp requires a dedicated energy connector.' },
          { q: 'Do I need a new digital meter to use a Balkonkraftwerk?', a: 'Not immediately — an old backward-spinning Ferraris meter is still tolerated temporarily, contingent on MaStR registration. The exact statutory swap deadline is commonly cited as roughly 4 months but wasn\'t independently confirmed against primary statute text.' },
          { q: 'Are battery-equipped balcony systems covered by the simplified regime?', a: 'No — storage-equipped balcony systems are explicitly excluded and still require full grid-operator registration and a licensed electrician, unlike standard plug-in units.' },
          { q: 'Can renters install a Balkonkraftwerk without landlord approval?', a: 'Germany has moved toward treating balcony solar as a privileged tenant right in recent reforms, but building-specific approval processes and conditions (particularly for visible exterior mounting) can still apply — confirm with your specific landlord or HOA.' },
          { q: 'Are there subsidies for Balkonkraftwerk in Germany?', a: 'Some states and municipalities offer subsidies, but availability and amount vary significantly by region — check your specific state or city\'s current program rather than assuming a nationwide subsidy applies.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balkonkraftwerk Rules in Germany: The Complete 2026 Guide',
      description: 'Balkonkraftwerk rules in Germany: 800W inverter cap, Marktstammdatenregister registration, and the new DIN VDE V 0126-95 standard — verified against primary legal text, July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balkonkraftwerk-germany-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'German balcony solar buyers and renters confirming current legal requirements' },
      about: ['Balkonkraftwerk', 'EEG 2023', 'Marktstammdatenregister', 'DIN VDE V 0126-95'],
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    title: 'Normas del Balkonkraftwerk en Alemania: La guía completa 2026',
    seoTitle: 'Balkonkraftwerk en Alemania: normas, límites y registro',
    intro: 'Alemania es el mercado de origen de la energía solar de balcón — el "Balkonkraftwerk" — y cuenta con el marco regulatorio más consolidado de todos los países que cubre esta guía. Esta página recoge el límite vigente de 800 W en el inversor, el proceso de registro único, y una norma de producto más reciente que entró en vigor en diciembre de 2025.',
    metaDescription: 'Normas del Balkonkraftwerk en Alemania: límite de 800 W en el inversor, registro en el Marktstammdatenregister y la nueva norma DIN VDE V 0126-95 — verificado con el texto legal primario, julio de 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores e inquilinos alemanes de energía solar de balcón que confirman los requisitos legales vigentes',
    primaryTerm: 'Normas del Balkonkraftwerk',
    targetKeywords: ['normas balkonkraftwerk 2026', 'balkonkraftwerk 800 vatios', 'marktstammdatenregister balkonkraftwerk', 'registro balkonkraftwerk'],
    leadAnswerBlock: '**Alemania permite la energía solar de balcón (Balkonkraftwerk) hasta 800 W de salida de CA del inversor, con un único registro en el Marktstammdatenregister (MaStR) — sin necesidad de notificación adicional a la operadora de red — confirmado con el texto legal primario del § 8 EEG 2023.** Una norma de seguridad más reciente, DIN VDE V 0126-95, entró en vigor el 1 de diciembre de 2025, añadiendo requisitos de instalación y de conector sobre los límites de potencia ya existentes; excluye explícitamente los sistemas con batería integrada, que quedan totalmente fuera de este régimen simplificado.',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son las normas vigentes del Balkonkraftwerk en Alemania?',
        answer: 'Se aplica un límite de 800 W de salida de CA del inversor, confirmado con el § 8 EEG 2023. El registro consiste en una sola entrada en el Marktstammdatenregister (MaStR) — no se necesita notificación adicional a la operadora de red. La capacidad total de los paneles puede llegar a 2.000 Wp, aunque una norma más reciente (DIN VDE V 0126-95, vigente desde diciembre de 2025) limita la potencia del módulo a 960 Wp específicamente para conexiones mediante un enchufe Schuko estándar. Los sistemas de balcón con batería quedan fuera de este régimen simplificado y necesitan registro completo ante la operadora de red además de un electricista autorizado.',
        bullets: [
          'Límite de 800 W de salida de CA del inversor — sin cambios desde la reforma Solarpaket I de mayo de 2024',
          'Solo se requiere el registro único en el MaStR — no hace falta notificación adicional al Netzbetreiber (operadora de red)',
          'Capacidad de paneles de hasta 2.000 Wp, pero limitada a 960 Wp específicamente mediante conexión por enchufe Schuko estándar, según DIN VDE V 0126-95',
          'DIN VDE V 0126-95 (vigente desde el 1-12-2025) es la primera norma de seguridad de producto específica de la UE para energía solar enchufable',
          'Los sistemas de balcón con batería quedan totalmente excluidos de este régimen simplificado',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Límite de 800 W del inversor', anchor: '#800w-limit' },
      { label: 'Registro: Marktstammdatenregister', anchor: '#registration' },
      { label: 'Schuko vs. Wieland: tipos de enchufe y capacidad de paneles', anchor: '#plug-types' },
      { label: 'La cuestión del medidor', anchor: '#meter-question' },
      { label: 'Derechos de los inquilinos', anchor: '#tenant-rights' },
      { label: 'Subvenciones', anchor: '#grants' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Límite de 800 W de salida de CA del inversor, confirmado con el texto legal primario del § 8 EEG 2023 — sin cambios desde la reforma Solarpaket I de mayo de 2024.',
          'Solo se requiere un único registro en el Marktstammdatenregister (MaStR) — sin notificación adicional a la operadora de red, confirmado con la misma fuente primaria.',
          'La capacidad de paneles puede llegar a 2.000 Wp, pero DIN VDE V 0126-95 (vigente desde el 1 de diciembre de 2025) limita la potencia del módulo a 960 Wp específicamente al conectar mediante un enchufe Schuko estándar — para alcanzar los 2.000 Wp completos se necesita un conector de energía dedicado.',
          'DIN VDE V 0126-95 es la primera norma de seguridad de producto específica de la UE para energía solar enchufable, y exige cables preensamblados y desconexión rápida por protección contra descargas.',
          'Los sistemas de balcón con batería quedan excluidos de todo este régimen simplificado — se requiere registro completo ante la operadora de red y un electricista autorizado específicamente para ellos.',
          'El antiguo medidor Ferraris (de disco giratorio hacia atrás) todavía se tolera temporalmente hasta que el Messstellenbetreiber lo sustituya — el plazo legal exacto de sustitución se cita habitualmente como unos 4 meses, pero no se confirmó de forma independiente con el texto de la ley primaria.',
        ],
      },
      inverterLimit: {
        id: '800w-limit',
        title: 'Límite de 800 W del inversor',
        content: [
          `**El límite de salida de CA del inversor es de ${de.powerLimitW} W, sin cambios desde la reforma Solarpaket I de mayo de 2024.** Actualmente está respaldado por dos fuentes: el § 8 EEG 2023 fija el techo legal, y DIN VDE V 0126-95 — una norma técnica y de seguridad de producto vigente desde el 1 de diciembre de 2025 — lo refuerza como la primera norma de producto específica de la UE para dispositivos solares enchufables.`,
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: Marktstammdatenregister',
        content: [
          '**Solo se requiere una única entrada en el Marktstammdatenregister (MaStR) — no es necesaria ninguna notificación adicional a la operadora de red.** El texto del § 8 EEG 2023 establece que no puede exigirse ninguna notificación adicional al Netzbetreiber más allá del MaStR; la operadora de red se informa automáticamente mediante el intercambio de datos del MaStR.',
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Schuko vs. Wieland: tipos de enchufe y capacidad de paneles',
        content: [
          `**La capacidad total de los paneles (módulos) puede llegar a ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp, de forma independiente y separada del límite de ${de.powerLimitW} W del inversor/CA.** DIN VDE V 0126-95 añade un sublímite según el tipo de conector: la potencia del módulo se limita a 960 Wp cuando la conexión se realiza mediante un enchufe doméstico Schuko estándar, mientras que alcanzar los ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp completos requiere un conector de energía dedicado, como Wieland.`,
          'En la práctica: si instalas mediante un enchufe doméstico Schuko estándar, ten en cuenta el sublímite de 960 Wp en los módulos. Alcanzar la capacidad completa de 2.000 Wp en los módulos requiere un conector de energía dedicado (como Wieland), una instalación distinta — y más compleja — que un simple enchufe Schuko.',
        ],
      },
      meterQuestion: {
        id: 'meter-question',
        title: 'La cuestión del medidor',
        content: [
          '**No es obligatorio tener un medidor digital o bidireccional para operar un Balkonkraftwerk — un antiguo medidor Ferraris (de disco giratorio hacia atrás) todavía se tolera temporalmente, siempre que el registro en el MaStR esté completo.** El plazo legal exacto para que el Messstellenbetreiber instale un medidor bidireccional se cita habitualmente como unos cuatro meses, pero esta cifra concreta no se confirmó de forma independiente con el texto primario de la ley MessEG/MsbG — trátala como una estimación de fuente secundaria, no como ley confirmada.',
        ],
        callouts: [
          { type: 'tip', text: 'No es necesario esperar a que instalen un nuevo medidor para poner en marcha tu sistema — el medidor antiguo se tolera temporalmente mientras tu registro en el MaStR esté completo.' },
        ],
      },
      tenantRights: {
        id: 'tenant-rights',
        title: 'Derechos de los inquilinos',
        content: [
          '**En reformas recientes, Alemania ha avanzado hacia tratar la energía solar de balcón como una mejora del hogar privilegiada para los inquilinos, en un espíritu similar al de las antenas parabólicas, aunque los procesos de aprobación del propietario o de la comunidad y los detalles concretos pueden variar según el edificio.** Confirma las normas específicas de tu edificio, sobre todo para cualquier instalación visible en una barandilla o pared exterior, ya que pueden aplicarse condiciones estéticas o estructurales incluso cuando el derecho subyacente a instalar está protegido.',
        ],
      },
      grants: {
        id: 'grants',
        title: 'Subvenciones',
        content: [
          '**Algunos estados y municipios alemanes ofrecen subvenciones para energía solar de balcón (Förderprogramme), pero la disponibilidad, el importe y los requisitos varían mucho según la región y cambian con el tiempo — consulta directamente el programa vigente de tu estado o ciudad en lugar de asumir que existe una subvención a nivel nacional.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el límite de potencia vigente para el Balkonkraftwerk en Alemania?', a: '800 W de salida de CA del inversor, confirmado con el texto primario del § 8 EEG 2023 — sin cambios desde la reforma Solarpaket I de mayo de 2024.' },
          { q: '¿Debo registrar mi Balkonkraftwerk ante mi operadora de red?', a: 'No — solo se requiere una única entrada en el Marktstammdatenregister (MaStR). No hace falta notificación adicional al Netzbetreiber; la operadora de red se informa automáticamente mediante el intercambio de datos del MaStR.' },
          { q: '¿Qué es DIN VDE V 0126-95?', a: 'La primera norma de seguridad de producto específica de la UE para dispositivos solares enchufables, vigente desde el 1 de diciembre de 2025. Exige cables de conexión preensamblados, instrucciones de instalación claras y desconexión rápida de voltaje para protección contra descargas, y excluye explícitamente los sistemas con batería integrada.' },
          { q: '¿Puedo instalar más de 800 W en paneles?', a: 'Sí — la capacidad total de paneles (módulos) puede llegar a 2.000 Wp aunque la salida del inversor permanezca limitada a 800 W. Una conexión mediante enchufe Schuko estándar limita la potencia del módulo a 960 Wp; alcanzar los 2.000 Wp completos requiere un conector de energía dedicado.' },
          { q: '¿Necesito un nuevo medidor digital para usar un Balkonkraftwerk?', a: 'No de inmediato — un antiguo medidor Ferraris (de disco giratorio hacia atrás) todavía se tolera temporalmente, siempre que el registro en el MaStR esté completo. El plazo legal exacto de sustitución se cita habitualmente como unos 4 meses, pero no se confirmó de forma independiente con el texto primario de la ley.' },
          { q: '¿Los sistemas de balcón con batería están cubiertos por el régimen simplificado?', a: 'No — los sistemas de balcón con almacenamiento quedan explícitamente excluidos y siguen requiriendo registro completo ante la operadora de red y un electricista autorizado, a diferencia de las unidades enchufables estándar.' },
          { q: '¿Pueden los inquilinos instalar un Balkonkraftwerk sin aprobación del propietario?', a: 'En reformas recientes, Alemania ha avanzado hacia tratar la energía solar de balcón como un derecho privilegiado del inquilino, pero pueden seguir aplicándose procesos de aprobación específicos del edificio y condiciones (sobre todo para instalaciones exteriores visibles) — confírmalo con tu propietario o comunidad.' },
          { q: '¿Existen subvenciones para el Balkonkraftwerk en Alemania?', a: 'Algunos estados y municipios ofrecen subvenciones, pero la disponibilidad y el importe varían mucho según la región — consulta el programa vigente de tu estado o ciudad en lugar de asumir que existe una subvención a nivel nacional.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Normas del Balkonkraftwerk en Alemania: La guía completa 2026',
      description: 'Normas del Balkonkraftwerk en Alemania: límite de 800 W en el inversor, registro en el Marktstammdatenregister y la nueva norma DIN VDE V 0126-95 — verificado con el texto legal primario, julio de 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/es/balcony-solar/balkonkraftwerk-germany-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Compradores e inquilinos alemanes de energía solar de balcón que confirman los requisitos legales vigentes' },
      about: ['Balkonkraftwerk', 'EEG 2023', 'Marktstammdatenregister', 'DIN VDE V 0126-95'],
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    title: 'Regras do Balkonkraftwerk na Alemanha: O Guia Completo 2026',
    seoTitle: 'Balkonkraftwerk na Alemanha: Regras, Limites e Registro',
    intro: 'A Alemanha é o mercado de origem da energia solar de varanda — o "Balkonkraftwerk" — e tem o marco regulatório mais consolidado entre todos os países cobertos por este guia. Esta página acompanha o limite atual de 800 W no inversor, o processo de registro único, e um novo padrão de produto que entrou em vigor em dezembro de 2025.',
    metaDescription: 'Regras do Balkonkraftwerk na Alemanha: limite de 800 W no inversor, registro no Marktstammdatenregister, e o novo padrão DIN VDE V 0126-95 — verificado com o texto legal primário, julho de 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores e locatários alemães de energia solar de varanda que buscam confirmar os requisitos legais atuais',
    primaryTerm: 'Regras do Balkonkraftwerk',
    targetKeywords: ['regras balkonkraftwerk 2026', 'balkonkraftwerk 800 watts', 'marktstammdatenregister balkonkraftwerk', 'registro balkonkraftwerk'],
    leadAnswerBlock: '**A Alemanha permite energia solar de varanda (Balkonkraftwerk) com até 800 W de saída CA no inversor, com um único registro no Marktstammdatenregister (MaStR) — sem necessidade de notificação separada à operadora de rede — confirmado com o texto legal primário do § 8 EEG 2023.** Um padrão de segurança mais recente, o DIN VDE V 0126-95, entrou em vigor em 1º de dezembro de 2025, adicionando requisitos de instalação e conector além dos limites de potência já existentes; ele exclui explicitamente sistemas com bateria integrada, que ficam totalmente fora desse regime simplificado.',
    quickAnswerTop: {
      pt: {
        question: 'Quais são as regras atuais para o Balkonkraftwerk na Alemanha?',
        answer: 'Aplica-se um limite de 800 W de saída CA no inversor, confirmado com o § 8 EEG 2023. O registro é uma única entrada no Marktstammdatenregister (MaStR) — não é necessária notificação separada à operadora de rede. A capacidade total dos painéis pode chegar a 2.000 Wp, embora um padrão mais recente (DIN VDE V 0126-95, vigente desde dezembro de 2025) limite a potência do módulo a 960 Wp especificamente para conexões via tomada Schuko padrão. Sistemas de varanda com bateria ficam fora desse regime simplificado e precisam de registro completo junto à operadora de rede, além de um eletricista licenciado.',
        bullets: [
          'Limite de 800 W de saída CA no inversor — inalterado desde a reforma Solarpaket I de maio de 2024',
          'Apenas registro único no MaStR — não é necessária notificação separada ao Netzbetreiber (operadora de rede)',
          'Capacidade de painéis de até 2.000 Wp, mas limitada a 960 Wp especificamente via conexão por tomada Schuko padrão, segundo o DIN VDE V 0126-95',
          'DIN VDE V 0126-95 (vigente desde 01/12/2025) é o primeiro padrão de segurança de produto dedicado da UE para energia solar plugável',
          'Sistemas de varanda com bateria são totalmente excluídos desse regime simplificado',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Limite de 800 W do inversor', anchor: '#800w-limit' },
      { label: 'Registro: Marktstammdatenregister', anchor: '#registration' },
      { label: 'Schuko vs. Wieland: tipos de plugue e capacidade de painéis', anchor: '#plug-types' },
      { label: 'A questão do medidor', anchor: '#meter-question' },
      { label: 'Direitos do locatário', anchor: '#tenant-rights' },
      { label: 'Subsídios', anchor: '#grants' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Limite de 800 W de saída CA no inversor, confirmado com o texto legal primário do § 8 EEG 2023 — inalterado desde a reforma Solarpaket I de maio de 2024.',
          'É necessário apenas um único registro no Marktstammdatenregister (MaStR) — sem notificação separada à operadora de rede, confirmado pela mesma fonte primária.',
          'A capacidade dos painéis pode chegar a 2.000 Wp, mas o DIN VDE V 0126-95 (vigente desde 1º de dezembro de 2025) limita a potência do módulo a 960 Wp especificamente ao conectar via tomada Schuko padrão — para atingir os 2.000 Wp completos é necessário um conector de energia dedicado.',
          'O DIN VDE V 0126-95 é o primeiro padrão de segurança de produto dedicado da UE para energia solar plugável, exigindo cabos pré-montados e desligamento rápido para proteção contra choques.',
          'Sistemas de varanda com bateria ficam excluídos de todo esse regime simplificado — registro completo junto à operadora de rede e um eletricista licenciado são exigidos especificamente para eles.',
          'O antigo medidor Ferraris (de disco giratório reverso) ainda é tolerado temporariamente até que o Messstellenbetreiber o substitua — o prazo legal exato para a substituição costuma ser citado como cerca de 4 meses, mas não foi confirmado de forma independente no texto da lei primária.',
        ],
      },
      inverterLimit: {
        id: '800w-limit',
        title: 'Limite de 800 W do inversor',
        content: [
          `**O limite de saída CA do inversor é de ${de.powerLimitW} W, inalterado desde a reforma Solarpaket I de maio de 2024.** Ele está agora ancorado em duas fontes: o § 8 EEG 2023 define o teto legal, e o DIN VDE V 0126-95 — um padrão técnico/de segurança de produto vigente desde 1º de dezembro de 2025 — reforça isso como o primeiro padrão de produto dedicado da UE para dispositivos solares plugáveis.`,
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registro: Marktstammdatenregister',
        content: [
          '**É necessário apenas um único registro no Marktstammdatenregister (MaStR) — nenhuma notificação separada à operadora de rede é exigida.** O texto do § 8 EEG 2023 estabelece que nenhuma notificação adicional ao Netzbetreiber pode ser exigida além do MaStR; a operadora de rede é informada automaticamente por meio do compartilhamento de dados do MaStR.',
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Schuko vs. Wieland: tipos de plugue e capacidade de painéis',
        content: [
          `**A capacidade total dos painéis (módulos) pode chegar a ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp, de forma independente e separada do limite de ${de.powerLimitW} W do inversor/CA.** O DIN VDE V 0126-95 adiciona um sublimite dependente do tipo de plugue: a potência do módulo é limitada a 960 Wp quando conectada via uma tomada doméstica Schuko padrão, sendo que os ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp completos exigem um conector de energia dedicado, como o Wieland.`,
          'Na prática: se você estiver instalando por meio de uma tomada doméstica Schuko padrão, planeje-se em torno do sublimite de 960 Wp nos módulos. Atingir a capacidade total de 2.000 Wp nos módulos exige um conector de energia dedicado (como o Wieland), uma instalação diferente — e mais complexa — do que um simples plugue Schuko.',
        ],
      },
      meterQuestion: {
        id: 'meter-question',
        title: 'A questão do medidor',
        content: [
          '**Não é obrigatório ter um medidor digital ou bidirecional para operar um Balkonkraftwerk — um antigo medidor Ferraris (de disco giratório reverso) ainda é tolerado temporariamente, desde que o registro no MaStR esteja completo.** O prazo legal exato para que o Messstellenbetreiber instale um medidor bidirecional costuma ser citado como cerca de quatro meses, mas essa cifra específica não foi confirmada de forma independente no texto primário da lei MessEG/MsbG — trate-a como uma estimativa de fonte secundária, não como lei confirmada.',
        ],
        callouts: [
          { type: 'tip', text: 'Você não precisa esperar por um novo medidor para operar seu sistema — o medidor antigo é tolerado temporariamente enquanto seu registro no MaStR estiver completo.' },
        ],
      },
      tenantRights: {
        id: 'tenant-rights',
        title: 'Direitos do locatário',
        content: [
          '**Em reformas recentes, a Alemanha passou a tratar a energia solar de varanda como uma benfeitoria residencial privilegiada para locatários, em espírito semelhante ao de antenas parabólicas, embora os processos de aprovação do proprietário ou do condomínio e os detalhes específicos ainda possam variar conforme o prédio.** Confirme as regras específicas do seu prédio, principalmente para qualquer instalação visível em uma sacada ou parede externa, já que condições estéticas ou estruturais ainda podem se aplicar mesmo quando o direito subjacente à instalação está protegido.',
        ],
      },
      grants: {
        id: 'grants',
        title: 'Subsídios',
        content: [
          '**Alguns estados e municípios alemães oferecem subsídios para energia solar de varanda (Förderprogramme), mas a disponibilidade, o valor e os critérios de elegibilidade variam bastante por região e mudam ao longo do tempo — consulte diretamente o programa atual do seu estado ou cidade em vez de presumir que existe um subsídio nacional.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual é o limite de potência atual para o Balkonkraftwerk na Alemanha?', a: '800 W de saída CA no inversor, confirmado com o texto primário do § 8 EEG 2023 — inalterado desde a reforma Solarpaket I de maio de 2024.' },
          { q: 'Preciso registrar meu Balkonkraftwerk junto à operadora de rede?', a: 'Não — é necessário apenas um único registro no Marktstammdatenregister (MaStR). Nenhuma notificação separada ao Netzbetreiber é exigida; a operadora de rede é informada automaticamente por meio do compartilhamento de dados do MaStR.' },
          { q: 'O que é o DIN VDE V 0126-95?', a: 'O primeiro padrão de segurança de produto dedicado da UE para dispositivos solares plugáveis, vigente desde 1º de dezembro de 2025. Ele exige cabos de conexão pré-montados, instruções de instalação claras e desligamento rápido de tensão para proteção contra choques, além de excluir explicitamente sistemas com bateria integrada.' },
          { q: 'Posso instalar mais de 800 W em painéis?', a: 'Sim — a capacidade total de painéis (módulos) pode chegar a 2.000 Wp mesmo com a saída do inversor limitada a 800 W. Uma conexão por tomada Schuko padrão limita a potência do módulo a 960 Wp; para atingir os 2.000 Wp completos é necessário um conector de energia dedicado.' },
          { q: 'Preciso de um novo medidor digital para usar um Balkonkraftwerk?', a: 'Não imediatamente — um antigo medidor Ferraris (de disco giratório reverso) ainda é tolerado temporariamente, desde que o registro no MaStR esteja completo. O prazo legal exato para a substituição costuma ser citado como cerca de 4 meses, mas não foi confirmado de forma independente no texto primário da lei.' },
          { q: 'Sistemas de varanda com bateria são cobertos pelo regime simplificado?', a: 'Não — sistemas de varanda com armazenamento são explicitamente excluídos e ainda exigem registro completo junto à operadora de rede e um eletricista licenciado, ao contrário das unidades plugáveis padrão.' },
          { q: 'Locatários podem instalar um Balkonkraftwerk sem aprovação do proprietário?', a: 'Em reformas recentes, a Alemanha passou a tratar a energia solar de varanda como um direito privilegiado do locatário, mas processos de aprovação específicos do prédio e condições (principalmente para instalações externas visíveis) ainda podem se aplicar — confirme com seu proprietário ou condomínio.' },
          { q: 'Existem subsídios para o Balkonkraftwerk na Alemanha?', a: 'Alguns estados e municípios oferecem subsídios, mas a disponibilidade e o valor variam bastante por região — consulte o programa atual do seu estado ou cidade em vez de presumir que existe um subsídio nacional.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Regras do Balkonkraftwerk na Alemanha: O Guia Completo 2026',
      description: 'Regras do Balkonkraftwerk na Alemanha: limite de 800 W no inversor, registro no Marktstammdatenregister, e o novo padrão DIN VDE V 0126-95 — verificado com o texto legal primário, julho de 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/pt/balcony-solar/balkonkraftwerk-germany-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Compradores e locatários alemães de energia solar de varanda que buscam confirmar os requisitos legais atuais' },
      about: ['Balkonkraftwerk', 'EEG 2023', 'Marktstammdatenregister', 'DIN VDE V 0126-95'],
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    title: 'قواعد Balkonkraftwerk في ألمانيا: الدليل الكامل 2026',
    seoTitle: 'Balkonkraftwerk في ألمانيا: القواعد والحدود والتسجيل',
    intro: 'ألمانيا هي السوق الأصلي للطاقة الشمسية القابلة للتركيب على الشرفة — المعروفة باسم "Balkonkraftwerk" — وتمتلك أكثر إطار تنظيمي رسوخًا بين جميع الدول التي يغطيها هذا الدليل. تتابع هذه الصفحة الحد الحالي البالغ 800 واط لخرج العاكس، وعملية التسجيل الواحدة، ومعيار منتج أحدث دخل حيز التنفيذ في ديسمبر 2025.',
    metaDescription: 'قواعد Balkonkraftwerk في ألمانيا: حد 800 واط لخرج العاكس، والتسجيل في Marktstammdatenregister، ومعيار DIN VDE V 0126-95 الجديد — تم التحقق منها مقابل النص القانوني الأساسي، يوليو 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مشترو ومستأجرو الطاقة الشمسية للشرفة في ألمانيا الراغبون في تأكيد المتطلبات القانونية الحالية',
    primaryTerm: 'قواعد Balkonkraftwerk',
    targetKeywords: ['قواعد Balkonkraftwerk 2026', 'Balkonkraftwerk 800 واط', 'تسجيل Marktstammdatenregister', 'تسجيل Balkonkraftwerk'],
    leadAnswerBlock: '**تسمح ألمانيا بالطاقة الشمسية للشرفة (Balkonkraftwerk) حتى خرج تيار متردد للعاكس بقدرة 800 واط، مع تسجيل واحد فقط في Marktstammdatenregister (MaStR) — دون الحاجة إلى إخطار منفصل لمشغل الشبكة — وهو أمر مؤكد بالرجوع إلى النص القانوني الأساسي § 8 EEG 2023.** دخل معيار سلامة أحدث، وهو DIN VDE V 0126-95، حيز التنفيذ في 1 ديسمبر 2025، مضيفًا متطلبات التركيب والموصلات فوق حدود القدرة القائمة؛ ويستثني هذا المعيار صراحةً الأنظمة المزوّدة ببطارية، والتي تبقى خارج هذا النظام المبسّط بالكامل.',
    quickAnswerTop: {
      ar: {
        question: 'ما هي القواعد الحالية لـ Balkonkraftwerk في ألمانيا؟',
        answer: 'يُطبَّق حد أقصى قدره 800 واط لخرج التيار المتردد للعاكس، مؤكَّد بالرجوع إلى § 8 EEG 2023. يتكون التسجيل من إدخال واحد فقط في Marktstammdatenregister (MaStR) — دون الحاجة إلى إخطار منفصل لمشغل الشبكة. يمكن أن تصل السعة الإجمالية للألواح إلى 2,000 واط ذروة (Wp)، رغم أن معيارًا أحدث (DIN VDE V 0126-95، الساري منذ ديسمبر 2025) يحدّ من قدرة الوحدة عند 960 واط ذروة تحديدًا عند التوصيل عبر مقبس Schuko القياسي. تقع أنظمة الشرفة المزوّدة ببطارية خارج هذا النظام المبسّط وتحتاج إلى تسجيل كامل لدى مشغل الشبكة بالإضافة إلى كهربائي مرخّص.',
        bullets: [
          'حد 800 واط لخرج التيار المتردد للعاكس — دون تغيير منذ إصلاح Solarpaket I في مايو 2024',
          'تسجيل واحد فقط في MaStR — دون الحاجة إلى إخطار منفصل لـ Netzbetreiber (مشغل الشبكة)',
          'سعة ألواح تصل إلى 2,000 واط ذروة، لكنها محدودة عند 960 واط ذروة تحديدًا عبر اتصال مقبس Schuko القياسي بموجب DIN VDE V 0126-95',
          'يُعد DIN VDE V 0126-95 (الساري منذ 2025-12-01) أول معيار سلامة منتج مخصص في الاتحاد الأوروبي للطاقة الشمسية القابلة للتوصيل',
          'تُستبعد أنظمة الشرفة المزوّدة ببطارية بالكامل من هذا النظام المبسّط',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حد 800 واط للعاكس', anchor: '#800w-limit' },
      { label: 'التسجيل: Marktstammdatenregister', anchor: '#registration' },
      { label: 'Schuko مقابل Wieland: أنواع القوابس وسعة الألواح', anchor: '#plug-types' },
      { label: 'مسألة العدّاد', anchor: '#meter-question' },
      { label: 'حقوق المستأجرين', anchor: '#tenant-rights' },
      { label: 'المنح', anchor: '#grants' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'حد 800 واط لخرج التيار المتردد للعاكس، مؤكَّد بالرجوع إلى النص القانوني الأساسي § 8 EEG 2023 — دون تغيير منذ إصلاح Solarpaket I في مايو 2024.',
          'يُشترط فقط تسجيل واحد في Marktstammdatenregister (MaStR) — دون إخطار منفصل لمشغل الشبكة، وهو أمر مؤكَّد بالرجوع إلى المصدر الأساسي نفسه.',
          'يمكن أن تصل سعة الألواح إلى 2,000 واط ذروة، لكن DIN VDE V 0126-95 (الساري منذ 1 ديسمبر 2025) يحدّ من قدرة الوحدة عند 960 واط ذروة تحديدًا عند التوصيل عبر مقبس Schuko القياسي — ويتطلب الوصول إلى كامل الـ2,000 واط ذروة موصل طاقة مخصصًا.',
          'يُعد DIN VDE V 0126-95 أول معيار سلامة منتج مخصص في الاتحاد الأوروبي للطاقة الشمسية القابلة للتوصيل، ويشترط كابلات مُجمَّعة مسبقًا وقطعًا سريعًا للحماية من الصدمات الكهربائية.',
          'تُستبعد أنظمة الشرفة المزوّدة ببطارية من هذا النظام المبسّط بالكامل — إذ يُشترط تحديدًا لها تسجيل كامل لدى مشغل الشبكة وكهربائي مرخّص.',
          'لا يزال العدّاد القديم من طراز Ferraris (ذو القرص الدوّار العكسي) مقبولاً مؤقتًا إلى حين استبداله من قِبل Messstellenbetreiber — يُذكَر عادةً أن المهلة القانونية للاستبدال تبلغ نحو 4 أشهر، لكن هذا الرقم تحديدًا لم يُؤكَّد بشكل مستقل بالرجوع إلى نص القانون الأساسي.',
        ],
      },
      inverterLimit: {
        id: '800w-limit',
        title: 'حد 800 واط للعاكس',
        content: [
          `**حد خرج التيار المتردد للعاكس هو ${de.powerLimitW} واط، دون تغيير منذ إصلاح Solarpaket I في مايو 2024.** وهو الآن مُرسَّخ في مصدرين: يحدد § 8 EEG 2023 السقف القانوني، ويعزّزه DIN VDE V 0126-95 — وهو معيار تقني/سلامة للمنتجات ساري المفعول منذ 1 ديسمبر 2025 — باعتباره أول معيار منتج مخصص في الاتحاد الأوروبي لأجهزة الطاقة الشمسية القابلة للتوصيل.`,
        ],
      },
      registration: {
        id: 'registration',
        title: 'التسجيل: Marktstammdatenregister',
        content: [
          '**يُشترط فقط إدخال واحد في Marktstammdatenregister (MaStR) — ولا حاجة لأي إخطار منفصل لمشغل الشبكة.** ينص نص § 8 EEG 2023 على أنه لا يمكن طلب أي إخطار إضافي لـ Netzbetreiber بخلاف MaStR؛ إذ يُبلَّغ مشغل الشبكة تلقائيًا عبر مشاركة بيانات MaStR.',
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Schuko مقابل Wieland: أنواع القوابس وسعة الألواح',
        content: [
          `**يمكن أن تصل السعة الإجمالية للألواح (الوحدات) إلى ${de.panelWattageCapWp!.toLocaleString("en-US")} واط ذروة، بشكل مستقل ومنفصل عن حد ${de.powerLimitW} واط للعاكس/التيار المتردد.** يضيف DIN VDE V 0126-95 حدًا فرعيًا يعتمد على نوع القابس: تُحدَّد قدرة الوحدة عند 960 واط ذروة عند التوصيل عبر مقبس منزلي قياسي من نوع Schuko، بينما يتطلب الوصول إلى كامل ${de.panelWattageCapWp!.toLocaleString("en-US")} واط ذروة موصل طاقة مخصصًا مثل Wieland.`,
          'من الناحية العملية: إذا كنت تُركّب النظام عبر مقبس منزلي قياسي من نوع Schuko، فخطّط وفق الحد الفرعي البالغ 960 واط ذروة للوحدات. أما الوصول إلى كامل سعة 2,000 واط ذروة للوحدات فيتطلب موصل طاقة مخصصًا (مثل Wieland)، وهو تركيب مختلف — وأكثر تعقيدًا — من مجرد توصيل قابس Schuko بسيط.',
        ],
      },
      meterQuestion: {
        id: 'meter-question',
        title: 'مسألة العدّاد',
        content: [
          '**لا يُشترط وجود عدّاد رقمي أو ثنائي الاتجاه لتشغيل Balkonkraftwerk — إذ لا يزال العدّاد القديم من طراز Ferraris (ذو القرص الدوّار العكسي) مقبولاً مؤقتًا، بشرط اكتمال التسجيل في MaStR.** يُذكَر عادةً أن المهلة القانونية لقيام Messstellenbetreiber بتركيب عدّاد ثنائي الاتجاه تبلغ نحو أربعة أشهر، لكن هذا الرقم تحديدًا لم يُؤكَّد بشكل مستقل بالرجوع إلى نص قانون MessEG/MsbG الأساسي — تعامل معه كتقدير من مصدر ثانوي، وليس قانونًا مؤكَّدًا.',
        ],
        callouts: [
          { type: 'tip', text: 'لست مطالبًا بالانتظار حتى يتم تركيب عدّاد جديد قبل تشغيل نظامك — إذ يُقبل العدّاد القديم مؤقتًا طالما أن تسجيلك في MaStR مكتمل.' },
        ],
      },
      tenantRights: {
        id: 'tenant-rights',
        title: 'حقوق المستأجرين',
        content: [
          '**اتجهت ألمانيا في الإصلاحات الأخيرة نحو معاملة الطاقة الشمسية للشرفة كإجراء تحسين منزلي مُميَّز للمستأجرين، بروح مشابهة لأطباق الاستقبال الفضائية، رغم أن عمليات موافقة المالك أو اتحاد الملاك والتفاصيل قد تختلف باختلاف المبنى.** تحقق من قواعد مبناك تحديدًا، خصوصًا فيما يتعلق بأي تركيب ظاهر على درابزين أو جدار خارجي، إذ قد تظل الشروط الجمالية أو الإنشائية سارية حتى في الحالات التي يكون فيها الحق الأساسي في التركيب محميًا.',
        ],
      },
      grants: {
        id: 'grants',
        title: 'المنح',
        content: [
          '**تقدّم بعض الولايات والبلديات الألمانية إعانات (Förderprogramme) للطاقة الشمسية للشرفة، لكن التوافر والمبلغ وشروط الأهلية تختلف بشكل كبير حسب المنطقة وتتغير مع الوقت — تحقق مباشرة من البرنامج الحالي لولايتك أو مدينتك بدلاً من افتراض وجود إعانة على المستوى الوطني.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو الحد الأقصى الحالي للقدرة الخاصة بـ Balkonkraftwerk في ألمانيا؟', a: '800 واط لخرج التيار المتردد للعاكس، مؤكَّد بالرجوع إلى نص § 8 EEG 2023 الأساسي — دون تغيير منذ إصلاح Solarpaket I في مايو 2024.' },
          { q: 'هل يجب عليّ تسجيل Balkonkraftwerk الخاص بي لدى مشغل الشبكة؟', a: 'لا — يُشترط فقط إدخال واحد في Marktstammdatenregister (MaStR). لا حاجة لأي إخطار منفصل لـ Netzbetreiber؛ إذ يُبلَّغ مشغل الشبكة تلقائيًا عبر مشاركة بيانات MaStR.' },
          { q: 'ما هو DIN VDE V 0126-95؟', a: 'أول معيار سلامة منتج مخصص في الاتحاد الأوروبي لأجهزة الطاقة الشمسية القابلة للتوصيل، ساري المفعول منذ 1 ديسمبر 2025. يشترط كابلات توصيل مُجمَّعة مسبقًا، وتعليمات تركيب واضحة، وقطعًا سريعًا للجهد للحماية من الصدمات الكهربائية، ويستثني صراحةً الأنظمة المزوّدة ببطارية.' },
          { q: 'هل يمكنني تركيب أكثر من 800 واط من الألواح؟', a: 'نعم — يمكن أن تصل السعة الإجمالية للألواح (الوحدات) إلى 2,000 واط ذروة رغم بقاء خرج العاكس محددًا عند 800 واط. يحدّ التوصيل عبر مقبس Schuko القياسي من قدرة الوحدة عند 960 واط ذروة؛ ويتطلب الوصول إلى كامل الـ2,000 واط ذروة موصل طاقة مخصصًا.' },
          { q: 'هل أحتاج إلى عدّاد رقمي جديد لاستخدام Balkonkraftwerk؟', a: 'ليس فورًا — لا يزال العدّاد القديم من طراز Ferraris (ذو القرص الدوّار العكسي) مقبولاً مؤقتًا، بشرط اكتمال التسجيل في MaStR. يُذكَر عادةً أن المهلة القانونية للاستبدال تبلغ نحو 4 أشهر، لكن ذلك لم يُؤكَّد بشكل مستقل بالرجوع إلى نص القانون الأساسي.' },
          { q: 'هل تشمل أنظمة الشرفة المزوّدة ببطارية النظام المبسّط؟', a: 'لا — تُستبعد أنظمة الشرفة المزوّدة بتخزين صراحةً، ولا تزال تتطلب تسجيلاً كاملاً لدى مشغل الشبكة وكهربائيًا مرخّصًا، على عكس الوحدات القياسية القابلة للتوصيل.' },
          { q: 'هل يمكن للمستأجرين تركيب Balkonkraftwerk دون موافقة المالك؟', a: 'اتجهت ألمانيا في الإصلاحات الأخيرة نحو معاملة الطاقة الشمسية للشرفة كحق مُميَّز للمستأجر، لكن قد تظل عمليات الموافقة الخاصة بالمبنى وشروطه سارية (خصوصًا للتركيبات الخارجية الظاهرة) — تحقق من ذلك مع المالك أو اتحاد الملاك الخاص بك.' },
          { q: 'هل توجد إعانات لـ Balkonkraftwerk في ألمانيا؟', a: 'تقدّم بعض الولايات والبلديات إعانات، لكن التوافر والمبلغ يختلفان بشكل كبير حسب المنطقة — تحقق من البرنامج الحالي لولايتك أو مدينتك بدلاً من افتراض وجود إعانة على مستوى البلاد.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'قواعد Balkonkraftwerk في ألمانيا: الدليل الكامل 2026',
      description: 'قواعد Balkonkraftwerk في ألمانيا: حد 800 واط لخرج العاكس، والتسجيل في Marktstammdatenregister، ومعيار DIN VDE V 0126-95 الجديد — تم التحقق منها مقابل النص القانوني الأساسي، يوليو 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/ar/balcony-solar/balkonkraftwerk-germany-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مشترو ومستأجرو الطاقة الشمسية للشرفة في ألمانيا الراغبون في تأكيد المتطلبات القانونية الحالية' },
      about: ['Balkonkraftwerk', 'EEG 2023', 'Marktstammdatenregister', 'DIN VDE V 0126-95'],
    },
  },
};
