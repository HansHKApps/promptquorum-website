// Slug: balcony-solar-battery-storage-standard-2027
// BSOL-26 — Tier 5 (2027 Trends), foundations, semi_annual.
// NOTE (Phase 3 must reconcile): must not silently contradict
// do-you-need-a-battery-balcony-solar.ts ("usually not required") or
// balkonkraftwerk-germany-rules.ts (battery-equipped systems excluded from
// Germany's simplified DIN VDE V 0126-95 regime) — cross-link both ways.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-30',
    last_full_refresh: '2026-10-31',
    current_hardware_mentioned: ['Lidl TRONIC 2.24 kWh add-on battery', 'WattCycle 10 kWh balcony battery'],
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-en.webp',
    title: 'Balcony Solar Batteries in 2027: Is Storage Becoming Standard?',
    seoTitle: 'Balcony Solar Batteries 2027: Rules, Prices, Payoff',
    intro: 'Battery storage is a growing add-on for balcony solar in Germany and the EU, but it is neither required nor right for every household, and the German rules for plug-in systems with storage are still being written. This page summarizes where the rules stand, what add-on battery prices look like and what the tariff-arbitrage research does and does not show. It is a market overview, not a purchase recommendation and not legal or electrical advice.',
    metaDescription: 'The German plug-in standard excludes storage, registration rules are in flux and prices fall. What is verified about balcony batteries, and when storage pays.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers evaluating whether to add battery storage in 2027',
    primaryTerm: 'balcony solar battery standard 2027',
    targetKeywords: [
      'balcony solar battery 2027',
      'balcony battery registration germany',
      'DIN VDE V 0126-95 storage',
      'wattcycle balcony solar battery',
    ],
    leadAnswerBlock: '**Batteries are becoming a common add-on for balcony solar, but they are not required, and the German rules for plug-in systems with storage are still unsettled.** The product standard DIN VDE V 0126-95, published in December 2025, covers plug-in solar devices without storage only; the standards committee DKE/K 373 has started planning a further part for devices with storage. The Verbraucherzentrale states (page updated October 21, 2026) that storage must currently be reported to the grid operator in addition to the Marktstammdatenregister, while the revised connection rule VDE-AR-N 4105 offers a simplified procedure for feed-in up to 800 W that not every grid operator accepts yet. The EEG 2027 bill adopted by the cabinet on July 29, 2026 would reportedly count storage behind the same inverter as part of a plug-in device, but it is not law yet. The ADAC puts storage alone at roughly €300 to €1,000, and whether a battery pays off still depends on the gap between your import price and your export payment.',
    quickAnswerTop: {
      en: {
        question: 'Is battery storage becoming standard for balcony solar?',
        answer: 'It is becoming more common, but it is not required and not right for every household. Add-on batteries are getting cheaper, but the German product standard DIN VDE V 0126-95 does not cover plug-in devices with storage and the registration rules for storage are in flux. Whether a battery pays off depends on the gap between what you pay for imported power and what your exports earn.',
        bullets: [
          'DIN VDE V 0126-95 (published December 2025) covers plug-in solar devices without storage; the committee DKE/K 373 has only started planning a part for devices with storage',
          'The Verbraucherzentrale (page updated October 21, 2026) states that storage must currently be reported to the grid operator in addition to the MaStR; storage is not yet covered by the simplified registration',
          'According to the Verbraucherzentrale, the revised VDE-AR-N 4105 provides a simplified procedure (form F.1.2) for feed-in up to 800 W, but not all grid operators accept it yet and they may use the previous version until March 1, 2027',
          'A 2026 simulation study of 448 households found dynamic tariffs raised net gains from a 10 kWh battery by 12.7%; it models rooftop PV-battery systems, not plug-in kits',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways', },
      { label: 'German Rules for Plug-In Storage Are Still Moving', anchor: '#storage-rules', },
      { label: 'Hardware: Falling Entry Prices and Manufacturer Claims', anchor: '#new-hardware', },
      { label: 'The Tariff-Arbitrage Case', anchor: '#tariff-arbitrage', },
      { label: 'Trend vs. Individual Decision: What This Article Is Not Saying', anchor: '#trend-vs-decision', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Frequently Asked Questions', anchor: '#faq', },
      { label: 'Related Reading', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The German product standard DIN VDE V 0126-95, published in December 2025, covers plug-in solar devices without storage. The standards committee DKE/K 373 has started planning a further part for devices with storage, with no timeline.',
          'The Verbraucherzentrale (page updated October 21, 2026) states that storage must currently be reported to the grid operator in addition to the MaStR. The revised VDE-AR-N 4105 provides a simplified procedure with form F.1.2 for feed-in up to 800 W, but not all grid operators accept it yet and they may use the previous version until March 1, 2027, so confirm the procedure with your grid operator before buying.',
          'The EEG 2027 bill was adopted by the cabinet on July 29, 2026. Trade media report that it would count storage behind the same inverter as part of a plug-in device, while AC storage with its own inverter would not be covered. Parliament has not passed it yet, so it is not law.',
          'Entry prices are falling. The ADAC (September 2026) puts storage alone with 1.5 to 2 kWh at roughly €300 to €1,000. WattCycle announced a balcony battery with up to 10 kWh for Intersolar Europe 2026; no EU price or availability date is published.',
          'We found no EU-wide subsidy for balcony batteries. Support, where it exists, is set by countries, states or municipalities.',
          'This page describes a market trend. It does not override the household test in "Do You Need a Battery for Balcony Solar?": a battery pays off only if the saved gap between import price and export payment outweighs its cost.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'German Rules for Plug-In Storage Are Still Moving',
        content: [
          '**The German product standard DIN VDE V 0126-95 covers plug-in solar devices without storage.** The standards body DKE states in its FAQ that the standard does not cover plug-in solar devices with an energy storage unit, which need additional requirements. Committee DKE/K 373 has started planning a further part but gives no timeline. The standard was published in December 2025 and allows up to 800 VA inverter output and, with a normal household plug, up to 960 W of modules.',
          '**On registration, the Verbraucherzentrale (page updated October 21, 2026) states that storage must currently be reported to the grid operator in addition to the Marktstammdatenregister (MaStR), and that storage is not yet covered by the simplified registration.** For feed-in up to 800 W it points to the revised VDE-AR-N 4105 with a simplified procedure (form F.1.2), but notes that not all grid operators accept it yet and that they may keep using the previous version until March 1, 2027. Plug-in solar devices without storage have needed no direct notification of the grid operator since the Solarpaket I (May 2024). The ADAC (September 2026) describes the registration of storage more simply (MaStR only, within one month) and advises clarifying non-standard setups with the grid operator; because sources differ, confirm the procedure with your grid operator.',
          '**The rules are in motion, but not yet settled.** Trade media report that the cabinet adopted the EEG 2027 bill on July 29, 2026, and that it would count storage behind the same inverter as part of a plug-in device; AC storage with its own inverter would not be covered. According to press reports, the Bundestag held its first reading on September 24, 2026 and an expert hearing on October 5, 2026; the final vote is pending and the wording may still change. The retailer blog we cite for the earlier working draft is not a neutral source. Ask your grid operator which procedure applies on the day you commission the system.',
          'Landlord rules add another layer: A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic. See [Balcony Solar for Landlords and Housing Associations](/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: Falling Entry Prices and Manufacturer Claims',
        content: [
          '**Entry prices are falling.** Lidl sold a TRONIC 2.24 kWh LiFePO4 add-on battery in Germany from May 21 to 27, 2026 for €399, or €299 with the Lidl Plus app. It has no built-in inverter, so it extends an existing balcony system; the promotion has likely ended, so check current prices.',
          '**Typical prices (ADAC, September 2026):** storage alone with 1.5 to 2 kWh costs about €300 to €1,000. Budget models without an integrated inverter start around €300 to €400, mid-range plug-and-play models cost about €450 to €750, and premium hybrid models about €600 to €1,000. In the ADAC\'s HTW Berlin calculation for an 880 W system, payback is about 4 years without and 5 years with storage for a one-person household, and about 3 versus 4 years for a three-person household. For a ranked buyer\'s guide see [Best Balcony Solar Batteries](/balcony-solar/best-balcony-solar-batteries-2026).',
          '**New products come with manufacturer claims, not independent tests.** At Intersolar Europe 2026 in Munich, WattCycle announced an all-in-one balcony storage system with up to 10 kWh and 2.5 kW or 5 kW bidirectional power, plug-and-play (manufacturer claims, press release of June 20, 2026). We found no published EU price or availability date.',
          'Because DIN VDE V 0126-95 excludes storage, check that a combined system\'s AC output stays within the 800 VA limit that defines a plug-in device in Germany, and ask the seller which registration route the product is designed for.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'The Tariff-Arbitrage Case',
        content: [
          '**The arbitrage idea behind many new products has research backing, with limits.** A peer-reviewed simulation study (Lorenz, Bayer, Pruckner, Staake & Hopf, *Energy Policy*, volume 209, 2026, DOI 10.1016/j.enpol.2025.114952) used five years of data from 448 households. For a 10 kWh battery, dynamic tariffs at a similar price level to fixed tariffs yielded 12.7% higher net gains, even with a simple self-consumption strategy. A perfect day-ahead price forecast added about 6% over naive forecasts.',
          'The study models residential PV-battery systems, not plug-in kits, so read it as a direction rather than a payback promise. Dynamic tariffs also expose you to price swings.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'Trend vs. Individual Decision: What This Article Is Not Saying',
        content: [
          '**Batteries are spreading, but this does not mean one is required or that it pays off for every household.** The individual decision still comes down to the test in [Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar): is the gap between your import price and your export payment large enough to justify the added cost? Where net metering ends, as in the Netherlands from January 1, 2027, that gap widens; see [Netherlands Net Metering Ends in 2027](/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'We found no EU-wide subsidy for balcony batteries. Programs, where they exist, are set by countries, states or municipalities, so check the official page of your local authority before you buy. In Germany, [Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) covers the registration rules for systems without storage.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — FAQ zur DIN VDE V 0126-95',
            description: 'Standards body: the standard does not cover plug-in devices with storage; 800 VA and 960 W limits; DKE/K 373 planning a storage part',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — Gesetze und Normen für Steckersolar',
            description: 'Consumer-protection guidance (updated October 21, 2026) on storage registration, MaStR, form F.1.2 and grid-operator rules',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Retailer blog (not neutral): VDE-AR-N 4105:2026-03 and the earlier EEG 2027 working draft of July 18, 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart — Lidl TRONIC 2.24 kWh battery',
            description: 'Promotion dates, €399/€299 prices, no built-in inverter',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle — Intersolar Europe 2026 press release (via Barchart)',
            description: 'Manufacturer announcement: up to 10 kWh, 2.5 kW or 5 kW bidirectional power',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. — Energy Policy 209 (2026), article 114952',
            description: 'Simulation study with 448 households: dynamic tariffs and residential PV-battery gains',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia and balcony solar storage',
            description: 'Report on Vonovia\'s guideline banning storage and the contested legal assessment',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: 'Price ranges for storage, MaStR registration and payback examples',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'Federal Ministry for Economic Affairs — EEG 2027 government bill',
            description: 'Cabinet draft of July 29, 2026 (German PDF); the storage definition is as reported by trade media',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'Cabinet decision of July 29, 2026 and the Bundestag first reading and expert hearing (page dated October 16, 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is battery storage now required for balcony solar?',
            a: 'No. Batteries are becoming more common, but nothing requires one. Whether a battery pays off for your household depends on the gap between your import price and your export payment; see "Do You Need a Battery for Balcony Solar?" for the test.',
          },
          {
            q: 'Is there an EU subsidy for balcony solar batteries?',
            a: 'We found no EU-wide subsidy. Support for balcony batteries, where it exists, is set by countries, states or municipalities. Check the official page of your local authority and the program terms before buying.',
          },
          {
            q: 'Does DIN VDE V 0126-95 cover balcony systems with a battery?',
            a: 'No. The standards body DKE states that the standard does not cover plug-in solar devices with energy storage. Committee DKE/K 373 has started planning a further part for devices with storage but gives no timeline.',
          },
          {
            q: 'How do I register a balcony system with a battery in Germany?',
            a: 'The Verbraucherzentrale (page updated October 21, 2026) states that storage must currently be reported to the grid operator in addition to the MaStR and is not yet covered by the simplified registration. A simplified procedure with form F.1.2 exists under the revised VDE-AR-N 4105 for feed-in up to 800 W, but not all grid operators accept it yet. The ADAC describes the process more simply, so confirm the procedure with your grid operator.',
          },
          {
            q: 'How much does a balcony power plant battery cost?',
            a: 'According to the ADAC (September 2026), storage alone with 1.5 to 2 kWh costs about €300 to €1,000: budget models around €300 to €400, mid-range around €450 to €750, premium around €600 to €1,000. Complete sets with 2 to 4 modules and 1.5 to 2 kWh storage run about €700 to €1,700. Prices change often, and in the ADAC\'s example calculation storage extends payback by about one year.',
          },
          {
            q: 'What does the EEG 2027 change for balcony batteries?',
            a: 'Trade media report that the EEG 2027 bill, adopted by the cabinet on July 29, 2026, would count storage behind the same inverter as part of a plug-in device, while AC storage with its own inverter would not be covered. It is not law yet because the Bundestag has not completed its vote, so the registration rules described above still apply.',
          },
          {
            q: 'What is the WattCycle balcony battery?',
            a: 'According to the manufacturer\'s June 20, 2026 press release, an all-in-one balcony storage system with up to 10 kWh and 2.5 kW or 5 kW bidirectional power, shown at Intersolar Europe 2026. These are manufacturer claims, and we found no published EU price or availability date.',
          },
          {
            q: 'Do dynamic electricity tariffs make batteries more worthwhile?',
            a: 'In a peer-reviewed simulation of 448 households, dynamic tariffs at a similar price level to fixed tariffs gave a 10 kWh battery 12.7% higher net gains, and a perfect day-ahead forecast added about 6% over naive forecasts. The study models rooftop PV-battery systems, and dynamic tariffs carry price risk.',
          },
          {
            q: 'Can my landlord forbid a balcony battery?',
            a: 'This is contested. German tenant law gives tenants a claim to plug-in solar devices (§ 554 BGB), but whether that covers storage is disputed. A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic. Ask in writing and seek advice; this is not legal advice.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — the economics-first decision test this page builds on',
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — registration and standards for systems without storage',
          '[Best Balcony Solar Batteries](/balcony-solar/best-balcony-solar-batteries-2026) — hardware buyer\'s guide',
          '[Netherlands Net Metering Ends in 2027](/balcony-solar/net-metering-rollback-balcony-solar-2027) — how a wider import/export price gap changes the storage case',
          '[Balcony Solar for Landlords and Housing Associations](/balcony-solar/balcony-solar-housing-associations-b2b-2027) — landlord positions on batteries',
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — cross-cluster: load-shifting automation for stored energy',
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-ar.webp',
    title: 'بطاريات الطاقة الشمسية للشرفة في 2027: هل تصبح معيارًا؟',
    seoTitle: 'بطاريات الشرفة الشمسية 2027: القواعد والأسعار والجدوى',
    intro: 'يتزايد استخدام تخزين البطاريات كإضافة للطاقة الشمسية للشرفة في ألمانيا والاتحاد الأوروبي، لكنه ليس إلزاميًا ولا يناسب كل أسرة، كما أن القواعد الألمانية الخاصة بالمنظومات القابلة للتوصيل بالمقبس مع التخزين لا تزال قيد الصياغة. تلخّص هذه الصفحة وضع القواعد وأسعار بطاريات التوسعة وما تُظهره أبحاث المراجحة السعرية وما لا تُظهره. هي نظرة عامة على السوق، وليست توصية بالشراء ولا استشارة قانونية أو كهربائية.',
    metaDescription: 'بطاريات الشرفة الشمسية 2027: المعيار الألماني للأجهزة القابلة للتوصيل يستثني التخزين، وقواعد التسجيل تتغير، والأسعار تنخفض. ما الذي تأكد ومتى يجدي التخزين.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو الطاقة الشمسية للشرفة الذين يقيّمون ما إذا كانوا سيضيفون تخزين البطاريات في 2027',
    primaryTerm: 'معيار بطارية الطاقة الشمسية للشرفة 2027',
    targetKeywords: [
      'بطارية طاقة شمسية للشرفة 2027',
      'تسجيل بطارية الشرفة ألمانيا',
      'DIN VDE V 0126-95 تخزين',
      'wattcycle بطارية طاقة شمسية للشرفة',
    ],
    leadAnswerBlock: '**أصبحت البطاريات إضافة شائعة للطاقة الشمسية في الشرفات، لكنها ليست إلزامية، ولا تزال القواعد الألمانية الخاصة بالأنظمة القابلة للتوصيل بالمقبس مع التخزين غير مستقرة.** يغطي معيار المنتج DIN VDE V 0126-95، الصادر في ديسمبر 2025، الأجهزة الشمسية القابلة للتوصيل بالمقبس دون تخزين فقط؛ وقد بدأت لجنة المعايير DKE/K 373 التخطيط لجزء إضافي للأجهزة مع التخزين. تذكر Verbraucherzentrale (الصفحة محدّثة في 21 أكتوبر 2026) أن التخزين يجب حاليًا إبلاغ مشغّل الشبكة به إضافةً إلى التسجيل في Marktstammdatenregister، بينما تتيح قاعدة التوصيل المنقّحة VDE-AR-N 4105 إجراءً مبسّطًا للتغذية حتى 800 W لا يقبله كل مشغّل شبكة بعد. ووفق ما يُنشر، فإن مشروع قانون EEG 2027 الذي أقرّه مجلس الوزراء في 29 يوليو 2026 سيحتسب التخزين خلف العاكس نفسه جزءًا من الجهاز القابل للتوصيل بالمقبس، لكنه ليس قانونًا بعد. يقدّر ADAC سعر التخزين وحده بنحو 300 إلى 1,000 يورو، ويظل جدوى البطارية مرهونة بالفرق بين سعر الكهرباء التي تشتريها وما تحصل عليه مقابل ما تصدّره.',
    quickAnswerTop: {
      ar: {
        question: 'هل يصبح تخزين البطاريات معيارًا للطاقة الشمسية للشرفة؟',
        answer: 'يزداد انتشاره، لكنه ليس إلزاميًا ولا يناسب كل أسرة. أصبحت بطاريات التوسعة أرخص، لكن معيار المنتج الألماني DIN VDE V 0126-95 لا يغطي الأجهزة القابلة للتوصيل بالمقبس مع التخزين، وقواعد تسجيل التخزين تتغير. وتعتمد جدوى البطارية على الفرق بين ما تدفعه مقابل الكهرباء المشتراة وما تكسبه من الكهرباء المُصدَّرة.',
        bullets: [
          'يغطي DIN VDE V 0126-95 (الصادر في ديسمبر 2025) الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين؛ ولجنة DKE/K 373 بدأت للتو التخطيط لجزء خاص بالأجهزة المزوّدة بتخزين',
          'تذكر Verbraucherzentrale (الصفحة محدّثة في 21 أكتوبر 2026) أن التخزين يجب حاليًا إبلاغ مشغّل الشبكة به إضافةً إلى التسجيل في MaStR؛ ولا يشمله التسجيل المبسّط بعد',
          'وفق Verbraucherzentrale، توفّر VDE-AR-N 4105 المنقّحة إجراءً مبسّطًا (النموذج F.1.2) للتغذية حتى 800 W، لكن ليس كل مشغّلي الشبكات يقبلونه بعد، ويجوز لهم تطبيق النسخة السابقة حتى 1 مارس 2027',
          'وجدت دراسة محاكاة عام 2026 على 448 أسرة أن التعرفة الديناميكية رفعت صافي مكاسب بطارية 10 kWh بنسبة 12.7%؛ وهي تنمذج منظومات الخلايا الشمسية مع البطاريات على الأسطح، لا مجموعات التوصيل بالمقبس',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways', },
      { label: 'القواعد الألمانية للمنظومات القابلة للتوصيل بالمقبس مع التخزين لا تزال تتغير', anchor: '#storage-rules', },
      { label: 'العتاد: انخفاض أسعار الدخول وادعاءات المصنّعين', anchor: '#new-hardware', },
      { label: 'حجة المراجحة السعرية', anchor: '#tariff-arbitrage', },
      { label: 'الاتجاه مقابل القرار الفردي: ما لا تقوله هذه المقالة', anchor: '#trend-vs-decision', },
      { label: 'المصادر', anchor: '#sources', },
      { label: 'الأسئلة الشائعة', anchor: '#faq', },
      { label: 'قراءات ذات صلة', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يغطي معيار المنتج الألماني DIN VDE V 0126-95، الصادر في ديسمبر 2025، الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين. وقد بدأت لجنة المعايير DKE/K 373 التخطيط لجزء إضافي للأجهزة المزوّدة بتخزين دون جدول زمني.',
          'تذكر Verbraucherzentrale (الصفحة محدّثة في 21 أكتوبر 2026) أن التخزين يجب حاليًا إبلاغ مشغّل الشبكة به إضافةً إلى التسجيل في MaStR. توفّر VDE-AR-N 4105 المنقّحة إجراءً مبسّطًا بالنموذج F.1.2 للتغذية حتى 800 W، لكن ليس كل مشغّلي الشبكات يقبلونه بعد، ويجوز لهم تطبيق النسخة السابقة حتى 1 مارس 2027؛ لذا أكّد الإجراء مع مشغّل الشبكة لديك قبل الشراء.',
          'أقرّ مجلس الوزراء مشروع قانون EEG 2027 في 29 يوليو 2026. تفيد وسائل إعلام متخصصة بأنه سيحتسب التخزين خلف العاكس نفسه جزءًا من الجهاز القابل للتوصيل بالمقبس، بينما لن يشمل التخزين بالتيار المتردد الذي له عاكس خاص. لم يقرّه البرلمان بعد، فهو ليس قانونًا.',
          'أسعار الدخول تنخفض. يقدّر ADAC (سبتمبر 2026) سعر التخزين وحده بسعة 1.5 إلى 2 kWh بنحو 300 إلى 1,000 يورو. أعلنت WattCycle عن بطارية للشرفات بسعة تصل إلى 10 kWh لمعرض Intersolar Europe 2026؛ ولم يُنشر سعر في الاتحاد الأوروبي ولا موعد توفر.',
          'لم نعثر على دعم على مستوى الاتحاد الأوروبي لبطاريات الشرفة. والدعم، إن وُجد، تحدده الدول أو الولايات أو البلديات.',
          'تصف هذه الصفحة اتجاهًا في السوق ولا تحل محل اختبار الأسرة في «هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟»: لا تُجدي البطارية إلا إذا تجاوز الفرق الموفَّر بين سعر الشراء وتعويض التصدير تكلفتها.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'القواعد الألمانية للمنظومات القابلة للتوصيل بالمقبس مع التخزين لا تزال تتغير',
        content: [
          '**يغطي معيار المنتج الألماني DIN VDE V 0126-95 الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين.** تذكر هيئة المعايير DKE في أسئلتها الشائعة أن المعيار لا يغطي الأجهزة الشمسية القابلة للتوصيل بالمقبس المزوّدة بوحدة تخزين طاقة، وأنها تحتاج إلى متطلبات إضافية. وقد بدأت اللجنة DKE/K 373 التخطيط لجزء إضافي دون ذكر جدول زمني. صدر المعيار في ديسمبر 2025 ويسمح بخرج عاكس يصل إلى 800 VA، ومع مقبس منزلي عادي بقدرة ألواح إجمالية تصل إلى 960 W.',
          '**في ما يخص التسجيل، تذكر Verbraucherzentrale (الصفحة محدّثة في 21 أكتوبر 2026) أن التخزين يجب حاليًا إبلاغ مشغّل الشبكة به إضافةً إلى التسجيل في Marktstammdatenregister (MaStR)، وأن التسجيل المبسّط لا يشمله بعد.** وللتغذية حتى 800 W تشير إلى VDE-AR-N 4105 المنقّحة وإجرائها المبسّط (النموذج F.1.2)، لكنها تنبّه إلى أن ليس كل مشغّلي الشبكات يقبلونه بعد وأن بإمكانهم مواصلة استخدام النسخة السابقة حتى 1 مارس 2027. ولم تعد الأجهزة الشمسية القابلة للتوصيل بالمقبس دون تخزين بحاجة إلى إخطار مشغّل الشبكة مباشرة منذ Solarpaket I (مايو 2024). ويصف ADAC (سبتمبر 2026) تسجيل التخزين بصورة أبسط (MaStR فقط خلال شهر) وينصح بتوضيح الحالات غير القياسية مع مشغّل الشبكة مسبقًا؛ ولأن المصادر تختلف، أكّد الإجراء مع مشغّل الشبكة لديك.',
          '**القواعد في حالة تغيّر، لكنها لم تستقر بعد.** تفيد وسائل إعلام متخصصة بأن مجلس الوزراء أقرّ مشروع قانون EEG 2027 في 29 يوليو 2026 وأنه سيحتسب التخزين خلف العاكس نفسه جزءًا من الجهاز القابل للتوصيل بالمقبس؛ ولن يشمل التخزين بالتيار المتردد الذي له عاكس خاص. ووفق تقارير صحفية، عقد البوندستاغ القراءة الأولى في 24 سبتمبر 2026 وجلسة استماع للخبراء في 5 أكتوبر 2026؛ والتصويت النهائي معلّق وقد يتغيّر النص. ومدونة التاجر التي نستشهد بها بخصوص المسودة السابقة ليست مصدرًا محايدًا. اسأل مشغّل الشبكة لديك عن الإجراء المطبّق يوم تشغيل النظام.',
          'وتضيف قواعد المؤجّرين طبقة أخرى: ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي. انظر [الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان](/ar/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'العتاد: انخفاض أسعار الدخول وادعاءات المصنّعين',
        content: [
          '**أسعار الدخول تنخفض.** باعت Lidl في ألمانيا، من 21 إلى 27 مايو 2026، بطارية توسعة TRONIC بسعة 2.24 kWh (LiFePO4) بسعر 399 يورو، أو 299 يورو عبر تطبيق Lidl Plus. ليس فيها عاكس مدمج، لذا فهي توسّع منشأة شرفة قائمة؛ ومن المرجح أن العرض انتهى، فتحقق من الأسعار الحالية.',
          '**الأسعار المعتادة (ADAC، سبتمبر 2026):** يكلّف التخزين وحده بسعة 1.5 إلى 2 kWh نحو 300 إلى 1,000 يورو. تبدأ الطرازات الاقتصادية دون عاكس مدمج من نحو 300 إلى 400 يورو، وتكلّف الطرازات المتوسطة الجاهزة للتركيب نحو 450 إلى 750 يورو، والطرازات الهجينة الفاخرة نحو 600 إلى 1,000 يورو. وفي حساب ADAC مع HTW برلين لنظام بقدرة 880 W، تبلغ مدة استرداد التكلفة نحو 4 سنوات دون تخزين و5 سنوات معه لأسرة من فرد واحد، ونحو 3 مقابل 4 سنوات لأسرة من ثلاثة أفراد. وللاطلاع على دليل شراء مرتّب، راجع [أفضل بطاريات الطاقة الشمسية للشرفات](/ar/balcony-solar/best-balcony-solar-batteries-2026).',
          '**تأتي المنتجات الجديدة بادعاءات المصنّعين لا باختبارات مستقلة.** في معرض Intersolar Europe 2026 في ميونخ، أعلنت WattCycle عن نظام تخزين متكامل للشرفة بسعة تصل إلى 10 kWh وبقدرة ثنائية الاتجاه 2.5 kW أو 5 kW، جاهز للتوصيل والتشغيل (ادعاءات المصنّع، بيان صحفي بتاريخ 20 يونيو 2026). لم نعثر على سعر منشور في الاتحاد الأوروبي ولا على موعد توفّر.',
          'ولأن DIN VDE V 0126-95 يستثني التخزين، تحقق من أن خرج التيار المتردد للنظام المدمج يبقى ضمن حد 800 VA الذي يعرّف الجهاز القابل للتوصيل بالمقبس في ألمانيا، واسأل البائع عن مسار التسجيل الذي صُمم المنتج من أجله.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'حجة المراجحة السعرية',
        content: [
          '**فكرة المراجحة وراء كثير من المنتجات الجديدة لها سند بحثي، لكن بحدود.** استخدمت دراسة محاكاة محكَّمة (Lorenz وBayer وPruckner وStaake وHopf، *Energy Policy*، المجلد 209، 2026، DOI 10.1016/j.enpol.2025.114952) بيانات خمس سنوات من 448 أسرة. وبالنسبة إلى بطارية 10 kWh، حققت التعرفة الديناميكية بمستوى سعري مماثل للتعرفة الثابتة مكاسب صافية أعلى بنسبة 12.7%، حتى مع استراتيجية استهلاك ذاتي بسيطة. وأضاف التنبؤ المثالي بأسعار اليوم التالي نحو 6% مقارنةً بالتنبؤات الساذجة.',
          'تنمذج الدراسة منظومات الخلايا الشمسية مع البطاريات في المنازل، لا مجموعات التوصيل بالمقبس، فاقرأها كاتجاه لا كوعد باسترداد التكلفة. كما تعرّضك التعرفة الديناميكية لتقلبات الأسعار.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'الاتجاه مقابل القرار الفردي: ما لا تقوله هذه المقالة',
        content: [
          '**تنتشر البطاريات، لكن هذا لا يعني أن واحدة منها إلزامية أو أنها تُجدي كل أسرة.** يظل القرار الفردي معتمدًا على اختبار [هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟](/ar/balcony-solar/do-you-need-a-battery-balcony-solar): هل الفرق بين سعر الشراء وتعويض التصدير كبير بما يكفي لتبرير التكلفة الإضافية؟ وحيث ينتهي Net Metering، كما في هولندا اعتبارًا من 1 يناير 2027، يتسع هذا الفرق؛ انظر [هولندا: نهاية نظام Net Metering في 2027](/ar/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'لم نعثر على دعم على مستوى الاتحاد الأوروبي لبطاريات الشرفة. والبرامج، إن وُجدت، تحددها الدول أو الولايات أو البلديات، لذا راجع الصفحة الرسمية لجهتك المحلية قبل الشراء. وبالنسبة إلى ألمانيا، يغطي [Balkonkraftwerk: قواعد الطاقة الشمسية للشرفة في ألمانيا](/ar/balcony-solar/balkonkraftwerk-germany-rules) قواعد التسجيل للمنظومات بدون تخزين.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — الأسئلة الشائعة حول DIN VDE V 0126-95',
            description: 'هيئة المعايير: المعيار لا يغطي الأجهزة القابلة للتوصيل بالمقبس مع التخزين؛ حدّا 800 VA و960 W؛ DKE/K 373 تخطط لجزء خاص بالتخزين',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — القوانين والمعايير الخاصة بالطاقة الشمسية القابلة للتوصيل بالمقبس',
            description: 'معلومات للمستهلك (محدّثة في 21 أكتوبر 2026) حول تسجيل التخزين وMaStR والنموذج F.1.2 وقواعد مشغّل الشبكة',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'مدونة تاجر (غير محايدة): VDE-AR-N 4105:2026-03 ومسودة EEG 2027 السابقة بتاريخ 18 يوليو 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart — بطارية Lidl TRONIC بسعة 2.24 kWh',
            description: 'مدة العرض وأسعار 399 يورو/299 يورو وعدم وجود عاكس مدمج',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle — بيان Intersolar Europe 2026 الصحفي (عبر Barchart)',
            description: 'إعلان المصنّع: حتى 10 kWh وقدرة ثنائية الاتجاه 2.5 kW أو 5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz وآخرون — Energy Policy 209 (2026)، المقالة 114952',
            description: 'دراسة محاكاة على 448 أسرة: التعرفة الديناميكية ومكاسب منظومات الخلايا الشمسية مع البطاريات',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia وتخزين الطاقة في منظومات الشرفة',
            description: 'تقرير عن إرشادات Vonovia التي تحظر التخزين والتقييم القانوني المختلف عليه',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: 'نطاقات أسعار التخزين وتسجيل MaStR وأمثلة استرداد التكلفة',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'وزارة الاقتصاد الاتحادية الألمانية — مشروع قانون EEG 2027',
            description: 'مشروع مجلس الوزراء بتاريخ 29 يوليو 2026 (ملف PDF بالألمانية)؛ وتعريف التخزين وفق تقارير وسائل إعلام متخصصة',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'قرار مجلس الوزراء في 29 يوليو 2026 والقراءة الأولى في البوندستاغ وجلسة استماع الخبراء (الصفحة بتاريخ 16 أكتوبر 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أصبح تخزين البطاريات إلزاميًا للطاقة الشمسية للشرفة؟',
            a: 'لا. تزداد البطاريات شيوعًا لكن لا شيء يفرض واحدة. وتعتمد جدوى البطارية لأسرتك على الفرق بين سعر الشراء وتعويض التصدير؛ والاختبار موجود في «هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟».',
          },
          {
            q: 'هل يوجد دعم أوروبي لبطاريات الطاقة الشمسية للشرفة؟',
            a: 'لم نعثر على دعم على مستوى الاتحاد الأوروبي. والدعم المخصص لبطاريات الشرفة، إن وُجد، تحدده الدول أو الولايات أو البلديات. راجع الصفحة الرسمية لجهتك المحلية وشروط البرنامج قبل الشراء.',
          },
          {
            q: 'هل يغطي DIN VDE V 0126-95 منظومات الشرفة المزوّدة ببطارية؟',
            a: 'لا. تذكر هيئة المعايير DKE أن المعيار لا يغطي الأجهزة الشمسية القابلة للتوصيل بالمقبس المزوّدة بتخزين طاقة. وقد بدأت اللجنة DKE/K 373 التخطيط لجزء إضافي للأجهزة المزوّدة بتخزين دون ذكر جدول زمني.',
          },
          {
            q: 'كيف أسجّل منظومة شرفة مزوّدة ببطارية في ألمانيا؟',
            a: 'تذكر Verbraucherzentrale (الصفحة محدّثة في 21 أكتوبر 2026) أن التخزين يجب حاليًا إبلاغ مشغّل الشبكة به إضافةً إلى التسجيل في MaStR وأن التسجيل المبسّط لا يشمله بعد. يوجد بموجب VDE-AR-N 4105 المنقّحة إجراء مبسّط بالنموذج F.1.2 للتغذية حتى 800 W، لكن ليس كل مشغّلي الشبكات يقبلونه بعد. ويصف ADAC العملية بصورة أبسط، لذا أكّد الإجراء مع مشغّل الشبكة لديك.',
          },
          {
            q: 'كم تكلّف بطارية محطة الشرفة الشمسية؟',
            a: 'وفق ADAC (سبتمبر 2026)، يكلّف التخزين وحده بسعة 1.5 إلى 2 kWh نحو 300 إلى 1,000 يورو: الطرازات الاقتصادية نحو 300 إلى 400 يورو، والمتوسطة نحو 450 إلى 750 يورو، والفاخرة نحو 600 إلى 1,000 يورو. وتبلغ الأطقم الكاملة بألواح من 2 إلى 4 وتخزين من 1.5 إلى 2 kWh نحو 700 إلى 1,700 يورو. تتغير الأسعار كثيرًا، وفي مثال الحساب لدى ADAC يطيل التخزين مدة استرداد التكلفة بنحو عام.',
          },
          {
            q: 'ماذا يغيّر EEG 2027 بالنسبة إلى بطاريات الشرفات؟',
            a: 'تفيد وسائل إعلام متخصصة بأن مشروع قانون EEG 2027 الذي أقرّه مجلس الوزراء في 29 يوليو 2026 سيحتسب التخزين خلف العاكس نفسه جزءًا من الجهاز القابل للتوصيل بالمقبس، بينما لن يشمل التخزين بالتيار المتردد الذي له عاكس خاص. وهو ليس قانونًا بعد لأن البوندستاغ لم يُنهِ التصويت، لذا تظل قواعد التسجيل الموضحة أعلاه سارية.',
          },
          {
            q: 'ما هي بطارية الشرفة من WattCycle؟',
            a: 'وفق البيان الصحفي للمصنّع بتاريخ 20 يونيو 2026، هي نظام تخزين متكامل للشرفة بسعة تصل إلى 10 kWh وقدرة ثنائية الاتجاه 2.5 kW أو 5 kW، عُرض في Intersolar Europe 2026. هذه ادعاءات المصنّع، ولم نعثر على سعر منشور في الاتحاد الأوروبي ولا على موعد توفّر.',
          },
          {
            q: 'هل تجعل تعرفة الكهرباء الديناميكية البطاريات أجدى؟',
            a: 'في محاكاة محكَّمة على 448 أسرة، حققت التعرفة الديناميكية بمستوى سعري مماثل للثابتة مكاسب صافية أعلى بنسبة 12.7% لبطارية 10 kWh، وأضاف التنبؤ المثالي بأسعار اليوم التالي نحو 6% مقارنةً بالتنبؤات الساذجة. وتنمذج الدراسة منظومات على الأسطح، والتعرفة الديناميكية تنطوي على مخاطر سعرية.',
          },
          {
            q: 'هل يستطيع المؤجّر منع بطارية الشرفة؟',
            a: 'هذا موضع خلاف. يمنح قانون الإيجار الألماني المستأجرين حقًا في الأجهزة الشمسية القابلة للتوصيل بالمقبس (§ 554 BGB)، لكن هل يشمل ذلك التخزين محل جدل. ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي. اسأل كتابيًا واستشر مختصًا؛ وهذه ليست استشارة قانونية.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟](/ar/balcony-solar/do-you-need-a-battery-balcony-solar) — اختبار القرار القائم على الجدوى الاقتصادية الذي تبني عليه هذه الصفحة',
          '[Balkonkraftwerk: قواعد الطاقة الشمسية للشرفة في ألمانيا](/ar/balcony-solar/balkonkraftwerk-germany-rules) — التسجيل والمعايير للمنظومات بدون تخزين',
          '[أفضل بطاريات الطاقة الشمسية للشرفة](/ar/balcony-solar/best-balcony-solar-batteries-2026) — دليل شراء العتاد',
          '[هولندا: نهاية نظام Net Metering في 2027](/ar/balcony-solar/net-metering-rollback-balcony-solar-2027) — كيف يغيّر اتساع الفجوة بين سعر الشراء وسعر التصدير حجة التخزين',
          '[الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان](/ar/balcony-solar/balcony-solar-housing-associations-b2b-2027) — مواقف المؤجّرين من البطاريات',
          '[إدارة الطاقة المحلية في المنزل الذكي](/ar/smart-home/local-smart-home-energy-management-2027) — عبر المجموعات: أتمتة نقل الأحمال للطاقة المخزّنة',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-de.webp',
    title: 'Batteriespeicher für Balkonkraftwerke 2027: Wird er zum Standard?',
    seoTitle: 'Balkonkraftwerk-Speicher 2027: Regeln, Preise, Nutzen',
    intro: 'Batteriespeicher sind für Balkonkraftwerke in Deutschland und der EU ein wachsendes Zubehör, aber weder vorgeschrieben noch für jeden Haushalt sinnvoll, und die deutschen Regeln für Steckersolargeräte mit Speicher werden noch geschrieben. Diese Seite fasst den Regelungsstand, die Preise für Zusatzspeicher und die Aussagekraft der Forschung zur Tarifarbitrage zusammen. Sie ist ein Marktüberblick, keine Kaufempfehlung und keine Rechts- oder Elektroberatung.',
    metaDescription: 'Batteriespeicher für Balkonkraftwerke: Die Norm schließt Speicher aus, der EEG-2027-Entwurf ist nicht beschlossen, Speicher kosten ca. 300–1.000 €.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Balkonkraftwerk-Käufer, die 2027 die Anschaffung eines Batteriespeichers abwägen',
    primaryTerm: 'Batteriespeicher Balkonkraftwerk 2027',
    targetKeywords: [
      'balkonkraftwerk batteriespeicher 2027',
      'balkonkraftwerk speicher anmelden',
      'DIN VDE V 0126-95 speicher',
      'wattcycle balkonkraftwerk batterie',
    ],
    leadAnswerBlock: '**Batteriespeicher werden zum verbreiteten Zubehör für Balkonkraftwerke, sind aber nicht vorgeschrieben, und die deutschen Regeln für Steckersolargeräte mit Speicher sind noch nicht abschließend geklärt.** Die Produktnorm DIN VDE V 0126-95 vom Dezember 2025 gilt nur für Steckersolargeräte ohne Speicher; das Normungsgremium DKE/K 373 hat begonnen, einen weiteren Teil für Geräte mit Speicher zu planen. Die Verbraucherzentrale gibt an (Stand 21. Oktober 2026), dass Speicher derzeit zusätzlich zum Marktstammdatenregister beim Netzbetreiber angemeldet werden müssen; die überarbeitete Anschlussregel VDE-AR-N 4105 sieht für Einspeisung bis 800 W ein vereinfachtes Verfahren vor, das noch nicht jeder Netzbetreiber akzeptiert. Der am 29. Juli 2026 vom Kabinett beschlossene Entwurf zum EEG 2027 würde laut Berichten Speicher hinter demselben Wechselrichter als Teil eines Steckersolargeräts zählen, ist aber noch kein Gesetz. Der ADAC beziffert Speicher allein auf grob 300 bis 1.000 €, und ob sich ein Speicher lohnt, hängt weiterhin von der Lücke zwischen Bezugspreis und Einspeisevergütung ab.',
    quickAnswerTop: {
      de: {
        question: 'Wird Batteriespeicher zum Standard bei Balkonkraftwerken?',
        answer: 'Er wird häufiger, ist aber nicht vorgeschrieben und nicht für jeden Haushalt sinnvoll. Zusatzspeicher werden günstiger, aber die Produktnorm DIN VDE V 0126-95 deckt Steckersolargeräte mit Speicher nicht ab, und die Anmelderegeln für Speicher sind im Fluss. Ob sich ein Speicher lohnt, hängt von der Lücke zwischen dem Preis für bezogenen Strom und der Vergütung für Einspeisung ab.',
        bullets: [
          'DIN VDE V 0126-95 (veröffentlicht im Dezember 2025) gilt für Steckersolargeräte ohne Speicher; das Gremium DKE/K 373 hat die Planung eines Teils für Geräte mit Speicher erst begonnen',
          'Die Verbraucherzentrale gibt an (Stand 21. Oktober 2026), dass Speicher derzeit zusätzlich zum MaStR beim Netzbetreiber angemeldet werden müssen; die vereinfachte Anmeldung gilt für Speicher noch nicht',
          'Laut Verbraucherzentrale sieht die überarbeitete VDE-AR-N 4105 für Einspeisung bis 800 W ein vereinfachtes Verfahren (Formular F.1.2) vor, doch nicht alle Netzbetreiber akzeptieren es bereits und dürfen bis zum 1. März 2027 die bisherige Fassung anwenden',
          'Eine Simulationsstudie von 2026 mit 448 Haushalten ermittelte, dass dynamische Tarife den Nettogewinn eines 10-kWh-Speichers um 12,7 % erhöhten; sie modelliert PV-Speicher-Systeme auf dem Dach, keine Steckersolar-Sets',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways', },
      { label: 'Die deutschen Regeln für Steckersolar mit Speicher sind noch im Fluss', anchor: '#storage-rules', },
      { label: 'Hardware: Sinkende Einstiegspreise und Herstellerangaben', anchor: '#new-hardware', },
      { label: 'Das Argument der Tarifarbitrage', anchor: '#tariff-arbitrage', },
      { label: 'Trend und individuelle Entscheidung: Was dieser Artikel nicht sagt', anchor: '#trend-vs-decision', },
      { label: 'Quellen', anchor: '#sources', },
      { label: 'Häufig gestellte Fragen', anchor: '#faq', },
      { label: 'Weiterführende Artikel', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die deutsche Produktnorm DIN VDE V 0126-95 vom Dezember 2025 gilt für Steckersolargeräte ohne Speicher. Das Normungsgremium DKE/K 373 hat begonnen, einen weiteren Teil für Geräte mit Speicher zu planen, ohne Zeitplan.',
          'Die Verbraucherzentrale gibt an (Stand 21. Oktober 2026), dass Speicher derzeit zusätzlich zum MaStR beim Netzbetreiber angemeldet werden müssen. Die überarbeitete VDE-AR-N 4105 sieht für Einspeisung bis 800 W ein vereinfachtes Verfahren mit Formular F.1.2 vor, doch nicht alle Netzbetreiber akzeptieren es bereits und dürfen bis zum 1. März 2027 die bisherige Fassung anwenden; klären Sie das Verfahren daher vor dem Kauf mit Ihrem Netzbetreiber.',
          'Der Entwurf zum EEG 2027 wurde am 29. Juli 2026 vom Kabinett beschlossen. Fachmedien berichten, er würde Speicher hinter demselben Wechselrichter als Teil eines Steckersolargeräts zählen, AC-Speicher mit eigenem Wechselrichter dagegen nicht erfassen. Das Parlament hat ihn noch nicht verabschiedet, er ist also kein geltendes Recht.',
          'Die Einstiegspreise sinken. Der ADAC (September 2026) beziffert Speicher allein mit 1,5 bis 2 kWh auf grob 300 bis 1.000 €. WattCycle kündigte für die Intersolar Europe 2026 einen Balkonspeicher mit bis zu 10 kWh an; ein EU-Preis oder Liefertermin ist nicht veröffentlicht.',
          'Eine EU-weite Förderung für Balkonspeicher haben wir nicht gefunden. Fördermittel, soweit vorhanden, legen Staaten, Länder oder Kommunen fest.',
          'Diese Seite beschreibt einen Markttrend. Sie ersetzt nicht den Haushaltstest in „Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?“: Ein Speicher lohnt sich nur, wenn die eingesparte Lücke zwischen Bezugspreis und Einspeisevergütung seine Kosten übersteigt.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Die deutschen Regeln für Steckersolar mit Speicher sind noch im Fluss',
        content: [
          '**Die deutsche Produktnorm DIN VDE V 0126-95 gilt für Steckersolargeräte ohne Speicher.** Das Normungsgremium DKE erklärt in seinen FAQ, dass die Norm Steckersolargeräte mit Energiespeicher nicht abdeckt; für diese sind zusätzliche Anforderungen nötig. Das Komitee DKE/K 373 hat die Planung eines weiteren Teils begonnen, nennt aber keinen Zeitplan. Die Norm wurde im Dezember 2025 veröffentlicht und erlaubt bis zu 800 VA Wechselrichterleistung und, mit normalem Haushaltsstecker, bis zu 960 W Modulleistung.',
          '**Zur Anmeldung gibt die Verbraucherzentrale an (Stand 21. Oktober 2026), dass Speicher derzeit zusätzlich zum Marktstammdatenregister (MaStR) beim Netzbetreiber angemeldet werden müssen und die vereinfachte Anmeldung für Speicher noch nicht gilt.** Für Einspeisung bis 800 W verweist sie auf die überarbeitete VDE-AR-N 4105 mit einem vereinfachten Verfahren (Formular F.1.2), weist aber darauf hin, dass nicht alle Netzbetreiber es bereits akzeptieren und sie bis zum 1. März 2027 die bisherige Fassung anwenden dürfen. Steckersolargeräte ohne Speicher müssen dem Netzbetreiber seit dem Solarpaket I (Mai 2024) nicht mehr direkt gemeldet werden. Der ADAC (September 2026) beschreibt die Anmeldung von Speichern einfacher (nur MaStR, innerhalb eines Monats) und rät, Sonderfälle vorab mit dem Netzbetreiber zu klären; da die Quellen voneinander abweichen, klären Sie das Verfahren mit Ihrem Netzbetreiber.',
          '**Die Regeln sind in Bewegung, aber noch nicht abschließend.** Fachmedien berichten, dass das Kabinett den Entwurf zum EEG 2027 am 29. Juli 2026 beschlossen hat und dass er Speicher hinter demselben Wechselrichter als Teil eines Steckersolargeräts zählen würde; AC-Speicher mit eigenem Wechselrichter wären nicht erfasst. Laut Presseberichten fand die erste Lesung im Bundestag am 24. September 2026 und eine Sachverständigenanhörung am 5. Oktober 2026 statt; die Abstimmung steht aus, und der Wortlaut kann sich noch ändern. Der Händler-Blog, den wir für den früheren Referentenentwurf nennen, ist keine neutrale Quelle. Fragen Sie Ihren Netzbetreiber, welches Verfahren am Tag der Inbetriebnahme gilt.',
          'Hinzu kommen Vorgaben von Vermietern: Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch. Siehe [Balkonsolar für Vermieter und Wohnungsgesellschaften](/de/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: Sinkende Einstiegspreise und Herstellerangaben',
        content: [
          '**Die Einstiegspreise sinken.** Lidl verkaufte vom 21. bis 27. Mai 2026 in Deutschland einen TRONIC-Zusatzspeicher mit 2,24 kWh (LiFePO4) für 399 €, mit der Lidl-Plus-App für 299 €. Er hat keinen integrierten Wechselrichter und erweitert daher eine bestehende Balkonanlage; die Aktion ist vermutlich beendet, prüfen Sie also aktuelle Preise.',
          '**Typische Preise (ADAC, September 2026):** Ein Speicher allein mit 1,5 bis 2 kWh kostet etwa 300 bis 1.000 €. Einsteigermodelle ohne integrierten Wechselrichter beginnen bei rund 300 bis 400 €, Plug-and-play-Modelle der Mittelklasse kosten etwa 450 bis 750 €, Premium-Hybridmodelle etwa 600 bis 1.000 €. In der HTW-Berlin-Rechnung des ADAC für eine 880-W-Anlage amortisiert sich die Anlage im Ein-Personen-Haushalt nach etwa 4 Jahren ohne und 5 Jahren mit Speicher, im Drei-Personen-Haushalt nach etwa 3 gegenüber 4 Jahren. Eine Kaufberatung mit Rangfolge finden Sie unter [Die besten Batteriespeicher für Balkonkraftwerke](/de/balcony-solar/best-balcony-solar-batteries-2026).',
          '**Neue Produkte kommen mit Herstellerangaben, nicht mit unabhängigen Tests.** Auf der Intersolar Europe 2026 in München kündigte WattCycle ein Balkon-Speichersystem aus einer Hand mit bis zu 10 kWh und 2,5 kW oder 5 kW bidirektionaler Leistung an, Plug-and-play (Herstellerangaben, Pressemitteilung vom 20. Juni 2026). Einen veröffentlichten EU-Preis oder Liefertermin haben wir nicht gefunden.',
          'Da DIN VDE V 0126-95 Speicher ausschließt, prüfen Sie, ob die AC-Leistung eines Kombisystems innerhalb der 800-VA-Grenze bleibt, die in Deutschland ein Steckersolargerät definiert, und fragen Sie den Verkäufer, für welchen Anmeldeweg das Produkt ausgelegt ist.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'Das Argument der Tarifarbitrage',
        content: [
          '**Die Arbitrage-Idee hinter vielen neuen Produkten hat Forschungsbelege, aber mit Grenzen.** Eine begutachtete Simulationsstudie (Lorenz, Bayer, Pruckner, Staake & Hopf, *Energy Policy*, Band 209, 2026, DOI 10.1016/j.enpol.2025.114952) nutzte fünf Jahre Daten von 448 Haushalten. Bei einem 10-kWh-Speicher erzielten dynamische Tarife auf ähnlichem Preisniveau wie feste Tarife einen um 12,7 % höheren Nettogewinn, selbst mit einer einfachen Eigenverbrauchsstrategie. Eine perfekte Day-Ahead-Preisprognose brachte rund 6 % mehr als naive Prognosen.',
          'Die Studie modelliert Photovoltaik-Speicher-Systeme für Haushalte, keine Steckersolar-Sets; verstehen Sie sie als Richtung, nicht als Amortisationsversprechen. Dynamische Tarife setzen Sie außerdem Preisschwankungen aus.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'Trend und individuelle Entscheidung: Was dieser Artikel nicht sagt',
        content: [
          '**Speicher verbreiten sich, das heißt aber nicht, dass einer vorgeschrieben ist oder sich für jeden Haushalt lohnt.** Die Entscheidung hängt weiterhin vom Test in [Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?](/de/balcony-solar/do-you-need-a-battery-balcony-solar) ab: Ist die Lücke zwischen Bezugspreis und Einspeisevergütung groß genug, um die Zusatzkosten zu rechtfertigen? Wo Net Metering endet, etwa in den Niederlanden ab dem 1. Januar 2027, wird diese Lücke größer; siehe [Niederlande: Net Metering endet 2027](/de/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'Eine EU-weite Förderung für Balkonspeicher haben wir nicht gefunden. Programme, soweit vorhanden, legen Staaten, Länder oder Kommunen fest; prüfen Sie vor dem Kauf die offizielle Seite Ihrer Behörde. Für Deutschland behandelt [Balkonkraftwerk: Die deutschen Regeln](/de/balcony-solar/balkonkraftwerk-germany-rules) die Anmelderegeln für Systeme ohne Speicher.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Normungsgremium: Die Norm deckt Steckersolargeräte mit Speicher nicht ab; Grenzen von 800 VA und 960 W; DKE/K 373 plant einen Speicherteil',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Verbraucherinformation (Stand 21. Oktober 2026) zu Speicheranmeldung, MaStR, Formular F.1.2 und Netzbetreiberregeln',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Händler-Blog (nicht neutral): VDE-AR-N 4105:2026-03 und der frühere EEG-2027-Referentenentwurf vom 18. Juli 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart – Lidl TRONIC 2,24 kWh Speicher',
            description: 'Aktionszeitraum, Preise 399 €/299 €, kein integrierter Wechselrichter',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle – Pressemitteilung zur Intersolar Europe 2026 (via Barchart)',
            description: 'Herstellerankündigung: bis zu 10 kWh, 2,5 kW oder 5 kW bidirektionale Leistung',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. – Energy Policy 209 (2026), Artikel 114952',
            description: 'Simulationsstudie mit 448 Haushalten: dynamische Tarife und Gewinne von PV-Speicher-Systemen',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia und Balkonkraftwerk-Speicher',
            description: 'Bericht über die Vonovia-Richtlinie mit Speicherverbot und die umstrittene rechtliche Bewertung',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC – Speicher für Balkonkraftwerk',
            description: 'Preisspannen für Speicher, MaStR-Anmeldung und Amortisationsbeispiele',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'Bundesministerium für Wirtschaft und Energie – Gesetzentwurf EEG 2027',
            description: 'Kabinettsentwurf vom 29. Juli 2026 (PDF); die Speicherdefinition nach Berichten von Fachmedien',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'Kabinettsbeschluss vom 29. Juli 2026 sowie erste Lesung im Bundestag und Sachverständigenanhörung (Stand 16. Oktober 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist ein Batteriespeicher für Balkonkraftwerke inzwischen vorgeschrieben?',
            a: 'Nein. Speicher werden häufiger, aber nichts schreibt einen vor. Ob sich ein Speicher für Ihren Haushalt lohnt, hängt von der Lücke zwischen Bezugspreis und Einspeisevergütung ab; den Test finden Sie in „Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?“.',
          },
          {
            q: 'Gibt es eine EU-Förderung für Balkonkraftwerk-Speicher?',
            a: 'Eine EU-weite Förderung haben wir nicht gefunden. Förderung für Balkonspeicher, soweit vorhanden, legen Staaten, Länder oder Kommunen fest. Prüfen Sie vor dem Kauf die offizielle Seite Ihrer Behörde und die Programmbedingungen.',
          },
          {
            q: 'Deckt die DIN VDE V 0126-95 Balkonanlagen mit Batterie ab?',
            a: 'Nein. Das Normungsgremium DKE erklärt, dass die Norm Steckersolargeräte mit Energiespeicher nicht abdeckt. Das Komitee DKE/K 373 hat die Planung eines weiteren Teils für Geräte mit Speicher begonnen, nennt aber keinen Zeitplan.',
          },
          {
            q: 'Wie melde ich ein Balkonkraftwerk mit Batterie in Deutschland an?',
            a: 'Die Verbraucherzentrale gibt an (Stand 21. Oktober 2026), dass Speicher derzeit zusätzlich zum MaStR beim Netzbetreiber angemeldet werden müssen und die vereinfachte Anmeldung für Speicher noch nicht gilt. Unter der überarbeiteten VDE-AR-N 4105 gibt es für Einspeisung bis 800 W ein vereinfachtes Verfahren mit Formular F.1.2, das aber noch nicht jeder Netzbetreiber akzeptiert. Der ADAC beschreibt den Ablauf einfacher; klären Sie das Verfahren daher mit Ihrem Netzbetreiber.',
          },
          {
            q: 'Was kostet ein Batteriespeicher für ein Balkonkraftwerk?',
            a: 'Laut ADAC (September 2026) kostet ein Speicher allein mit 1,5 bis 2 kWh etwa 300 bis 1.000 €: Einsteigermodelle rund 300 bis 400 €, Mittelklasse rund 450 bis 750 €, Premium rund 600 bis 1.000 €. Komplettsets mit 2 bis 4 Modulen und 1,5 bis 2 kWh Speicher liegen bei etwa 700 bis 1.700 €. Die Preise ändern sich häufig, und in der Beispielrechnung des ADAC verlängert ein Speicher die Amortisation um etwa ein Jahr.',
          },
          {
            q: 'Was ändert das EEG 2027 für Balkonkraftwerk-Speicher?',
            a: 'Fachmedien berichten, dass der vom Kabinett am 29. Juli 2026 beschlossene Entwurf zum EEG 2027 Speicher hinter demselben Wechselrichter als Teil eines Steckersolargeräts zählen würde, während AC-Speicher mit eigenem Wechselrichter nicht erfasst wären. Es ist noch kein Gesetz, da der Bundestag die Abstimmung nicht abgeschlossen hat; bis dahin gelten die oben beschriebenen Anmelderegeln.',
          },
          {
            q: 'Was ist der WattCycle-Balkonspeicher?',
            a: 'Laut Pressemitteilung des Herstellers vom 20. Juni 2026 ein Balkon-Speichersystem aus einer Hand mit bis zu 10 kWh und 2,5 kW oder 5 kW bidirektionaler Leistung, vorgestellt auf der Intersolar Europe 2026. Das sind Herstellerangaben, und einen veröffentlichten EU-Preis oder Liefertermin haben wir nicht gefunden.',
          },
          {
            q: 'Machen dynamische Stromtarife Batteriespeicher attraktiver?',
            a: 'In einer begutachteten Simulation mit 448 Haushalten erzielten dynamische Tarife auf ähnlichem Preisniveau wie feste Tarife bei einem 10-kWh-Speicher einen um 12,7 % höheren Nettogewinn, eine perfekte Day-Ahead-Prognose brachte rund 6 % mehr als naive Prognosen. Die Studie modelliert PV-Speicher-Systeme auf dem Dach, und dynamische Tarife bergen Preisrisiken.',
          },
          {
            q: 'Kann mein Vermieter einen Balkonspeicher verbieten?',
            a: 'Das ist umstritten. Das deutsche Mietrecht gibt Mietern einen Anspruch auf Steckersolargeräte (§ 554 BGB), ob das Speicher einschließt, ist strittig. Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch. Fragen Sie schriftlich nach und holen Sie Rat ein; dies ist keine Rechtsberatung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?](/de/balcony-solar/do-you-need-a-battery-balcony-solar) — der wirtschaftlich orientierte Entscheidungstest, auf dem diese Seite aufbaut',
          '[Balkonkraftwerk: Die deutschen Regeln](/de/balcony-solar/balkonkraftwerk-germany-rules) — Anmeldung und Normen für Systeme ohne Speicher',
          '[Die besten Batteriespeicher für Balkonkraftwerke](/de/balcony-solar/best-balcony-solar-batteries-2026) — Hardware-Kaufberatung',
          '[Niederlande: Net Metering endet 2027](/de/balcony-solar/net-metering-rollback-balcony-solar-2027) — wie eine größere Lücke zwischen Bezugs- und Einspeisepreis das Speicherargument verändert',
          '[Balkonsolar für Vermieter und Wohnungsgesellschaften](/de/balcony-solar/balcony-solar-housing-associations-b2b-2027) — Positionen von Vermietern zu Batterien',
          '[Lokales Energiemanagement im Smart Home](/de/smart-home/local-smart-home-energy-management-2027) — Cluster-übergreifend: Lastverschiebung für gespeicherte Energie',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-es.webp',
    title: 'Baterías para energía solar de balcón en 2027: ¿se vuelven estándar?',
    seoTitle: 'Baterías solar de balcón 2027: reglas, precios, utilidad',
    intro: 'El almacenamiento en batería es un complemento cada vez más habitual de la energía solar de balcón en Alemania y la UE, pero no es obligatorio ni adecuado para todos los hogares, y las reglas alemanas para sistemas plug-in con almacenamiento aún se están escribiendo. Esta página resume el estado de las normas, los precios de las baterías de ampliación y lo que la investigación sobre arbitraje tarifario muestra y no muestra. Es una visión del mercado, no una recomendación de compra ni asesoramiento jurídico o eléctrico.',
    metaDescription: 'La norma plug-in alemana excluye el almacenamiento, el registro cambia y los precios bajan. Qué está verificado sobre baterías de balcón y cuándo compensan.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energía solar de balcón que evalúan si añadir almacenamiento en batería en 2027',
    primaryTerm: 'batería energía solar de balcón 2027',
    targetKeywords: [
      'batería energía solar balcón 2027',
      'registro batería balcón alemania',
      'DIN VDE V 0126-95 almacenamiento',
      'wattcycle batería energía solar balcón',
    ],
    leadAnswerBlock: '**Las baterías se están volviendo un complemento habitual del solar de balcón, pero no son obligatorias, y las normas alemanas para sistemas enchufables con almacenamiento aún no están cerradas.** La norma de producto DIN VDE V 0126-95, publicada en diciembre de 2025, cubre solo los dispositivos solares enchufables sin almacenamiento; el comité de normalización DKE/K 373 ha empezado a planificar otra parte para dispositivos con almacenamiento. La Verbraucherzentrale indica (página actualizada el 21 de octubre de 2026) que el almacenamiento debe comunicarse actualmente al operador de red además de al Marktstammdatenregister, mientras que la regla de conexión revisada VDE-AR-N 4105 ofrece un procedimiento simplificado para inyección de hasta 800 W que no todos los operadores de red aceptan todavía. El proyecto de EEG 2027 aprobado por el gabinete el 29 de julio de 2026 contaría, según informes, el almacenamiento tras el mismo inversor como parte de un dispositivo enchufable, pero aún no es ley. El ADAC sitúa el almacenamiento solo en unos 300 a 1000 €, y que una batería compense sigue dependiendo de la diferencia entre el precio de la energía que compras y lo que cobras por la que viertes.',
    quickAnswerTop: {
      es: {
        question: '¿Se está convirtiendo el almacenamiento en batería en estándar para la energía solar de balcón?',
        answer: 'Se está volviendo más común, pero no es obligatorio ni adecuado para todos los hogares. Las baterías de ampliación son más baratas, pero la norma de producto alemana DIN VDE V 0126-95 no cubre los dispositivos plug-in con almacenamiento y las reglas de registro del almacenamiento están cambiando. Que una batería compense depende de la diferencia entre lo que pagas por la electricidad comprada y lo que cobras por la inyectada.',
        bullets: [
          'La DIN VDE V 0126-95 (publicada en diciembre de 2025) cubre los dispositivos solares plug-in sin almacenamiento; el comité DKE/K 373 solo ha empezado a planificar una parte para dispositivos con almacenamiento',
          'La Verbraucherzentrale indica (página actualizada el 21 de octubre de 2026) que el almacenamiento debe comunicarse actualmente al operador de red además de al MaStR; el registro simplificado aún no lo cubre',
          'Según la Verbraucherzentrale, la VDE-AR-N 4105 revisada prevé un procedimiento simplificado (formulario F.1.2) para inyección de hasta 800 W, pero no todos los operadores de red lo aceptan aún y pueden aplicar la versión anterior hasta el 1 de marzo de 2027',
          'Un estudio de simulación de 2026 con 448 hogares halló que las tarifas dinámicas aumentaban un 12,7 % la ganancia neta de una batería de 10 kWh; modela sistemas fotovoltaicos con batería en tejado, no kits plug-in',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways', },
      { label: 'Las reglas alemanas para el plug-in con almacenamiento siguen cambiando', anchor: '#storage-rules', },
      { label: 'Hardware: precios de entrada a la baja y afirmaciones de los fabricantes', anchor: '#new-hardware', },
      { label: 'El argumento del arbitraje tarifario', anchor: '#tariff-arbitrage', },
      { label: 'Tendencia frente a decisión individual: lo que este artículo no dice', anchor: '#trend-vs-decision', },
      { label: 'Fuentes', anchor: '#sources', },
      { label: 'Preguntas frecuentes', anchor: '#faq', },
      { label: 'Lecturas relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La norma de producto alemana DIN VDE V 0126-95, publicada en diciembre de 2025, cubre los dispositivos solares plug-in sin almacenamiento. El comité de normalización DKE/K 373 ha empezado a planificar una parte adicional para dispositivos con almacenamiento, sin calendario.',
          'La Verbraucherzentrale indica (página actualizada el 21 de octubre de 2026) que el almacenamiento debe comunicarse actualmente al operador de red además de al MaStR. La VDE-AR-N 4105 revisada prevé un procedimiento simplificado con el formulario F.1.2 para inyección de hasta 800 W, pero no todos los operadores de red lo aceptan aún y pueden aplicar la versión anterior hasta el 1 de marzo de 2027; confirma el procedimiento con tu operador de red antes de comprar.',
          'El proyecto de EEG 2027 fue aprobado por el gabinete el 29 de julio de 2026. Los medios especializados informan de que contaría el almacenamiento tras el mismo inversor como parte de un dispositivo enchufable, mientras que el almacenamiento en CA con inversor propio no quedaría cubierto. El Parlamento aún no lo ha aprobado, por lo que no es ley.',
          'Los precios de entrada bajan. El ADAC (septiembre de 2026) sitúa el almacenamiento solo, de 1,5 a 2 kWh, en unos 300 a 1000 €. WattCycle anunció para Intersolar Europe 2026 una batería de balcón de hasta 10 kWh; no se ha publicado precio en la UE ni fecha de disponibilidad.',
          'No encontramos ninguna subvención de ámbito UE para baterías de balcón. Las ayudas, donde existen, las fijan países, estados o municipios.',
          'Esta página describe una tendencia del mercado. No sustituye la prueba de «¿Necesitas una batería para la energía solar de balcón?»: una batería solo compensa si la diferencia ahorrada entre precio de compra y pago por inyección supera su coste.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Las reglas alemanas para el plug-in con almacenamiento siguen cambiando',
        content: [
          '**La norma de producto alemana DIN VDE V 0126-95 cubre los dispositivos solares plug-in sin almacenamiento.** El organismo de normalización DKE indica en sus preguntas frecuentes que la norma no cubre los dispositivos solares plug-in con unidad de almacenamiento de energía, que requieren requisitos adicionales. El comité DKE/K 373 ha empezado a planificar una parte adicional, pero no da calendario. La norma se publicó en diciembre de 2025 y permite hasta 800 VA de potencia del inversor y, con un enchufe doméstico normal, hasta 960 W de módulos.',
          '**Sobre el registro, la Verbraucherzentrale indica (página actualizada el 21 de octubre de 2026) que el almacenamiento debe comunicarse actualmente al operador de red además de al Marktstammdatenregister (MaStR), y que aún no lo cubre el registro simplificado.** Para inyección de hasta 800 W remite a la VDE-AR-N 4105 revisada con un procedimiento simplificado (formulario F.1.2), pero señala que no todos los operadores de red lo aceptan aún y que pueden seguir usando la versión anterior hasta el 1 de marzo de 2027. Los dispositivos solares enchufables sin almacenamiento no necesitan notificar directamente al operador de red desde el Solarpaket I (mayo de 2024). El ADAC (septiembre de 2026) describe el registro del almacenamiento de forma más sencilla (solo MaStR, en el plazo de un mes) y aconseja aclarar con el operador de red las instalaciones atípicas; como las fuentes difieren, confirma el procedimiento con tu operador de red.',
          '**Las normas están en movimiento, pero aún no son definitivas.** Los medios especializados informan de que el gabinete aprobó el proyecto de EEG 2027 el 29 de julio de 2026 y de que contaría el almacenamiento tras el mismo inversor como parte de un dispositivo enchufable; el almacenamiento en CA con inversor propio no quedaría cubierto. Según informaciones de prensa, el Bundestag celebró la primera lectura el 24 de septiembre de 2026 y una audiencia de expertos el 5 de octubre de 2026; la votación final está pendiente y el texto aún puede cambiar. El blog de un minorista que citamos para el borrador anterior no es una fuente neutral. Pregunta a tu operador de red qué procedimiento se aplica el día de la puesta en marcha.',
          'Las normas de los arrendadores añaden otra capa: un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general. Consulta [Energía solar de balcón para propietarios y asociaciones de vivienda](/es/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: precios de entrada a la baja y afirmaciones de los fabricantes',
        content: [
          '**Los precios de entrada bajan.** Lidl vendió en Alemania del 21 al 27 de mayo de 2026 una batería de ampliación TRONIC de 2,24 kWh (LiFePO4) por 399 €, o 299 € con la app Lidl Plus. No tiene inversor integrado, por lo que amplía una instalación de balcón existente; es probable que la promoción haya terminado, así que consulta los precios actuales.',
          '**Precios habituales (ADAC, septiembre de 2026):** un almacenamiento solo de 1,5 a 2 kWh cuesta entre 300 y 1000 €. Los modelos básicos sin inversor integrado parten de unos 300 a 400 €, los modelos plug-and-play de gama media cuestan unos 450 a 750 € y los híbridos premium unos 600 a 1000 €. En el cálculo del ADAC con HTW Berlín para una instalación de 880 W, la amortización es de unos 4 años sin almacenamiento y 5 con él en un hogar de una persona, y de unos 3 frente a 4 años en uno de tres personas. Para una guía de compra con clasificación consulta [Las mejores baterías para solar de balcón](/es/balcony-solar/best-balcony-solar-batteries-2026).',
          '**Los productos nuevos llegan con afirmaciones de los fabricantes, no con pruebas independientes.** En Intersolar Europe 2026 en Múnich, WattCycle anunció un sistema de almacenamiento de balcón todo en uno de hasta 10 kWh y 2,5 kW o 5 kW de potencia bidireccional, plug-and-play (afirmaciones del fabricante, nota de prensa del 20 de junio de 2026). No encontramos precio ni fecha de disponibilidad publicados para la UE.',
          'Como la DIN VDE V 0126-95 excluye el almacenamiento, comprueba que la potencia de CA de un sistema combinado se mantenga dentro del límite de 800 VA que define un dispositivo plug-in en Alemania y pregunta al vendedor para qué vía de registro está diseñado el producto.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'El argumento del arbitraje tarifario',
        content: [
          '**La idea de arbitraje detrás de muchos productos nuevos tiene respaldo en la investigación, con límites.** Un estudio de simulación revisado por pares (Lorenz, Bayer, Pruckner, Staake y Hopf, *Energy Policy*, volumen 209, 2026, DOI 10.1016/j.enpol.2025.114952) usó cinco años de datos de 448 hogares. Para una batería de 10 kWh, las tarifas dinámicas a un nivel de precio similar al de las tarifas fijas dieron ganancias netas un 12,7 % superiores, incluso con una estrategia sencilla de autoconsumo. Una previsión perfecta de precios del día siguiente añadió cerca de un 6 % frente a previsiones ingenuas.',
          'El estudio modela sistemas fotovoltaicos con batería residenciales, no kits plug-in, así que léelo como una dirección, no como una promesa de amortización. Las tarifas dinámicas también te exponen a oscilaciones de precio.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'Tendencia frente a decisión individual: lo que este artículo no dice',
        content: [
          '**Las baterías se extienden, pero eso no significa que una sea obligatoria ni que compense en todos los hogares.** La decisión individual sigue dependiendo de la prueba de [¿Necesitas una batería para la energía solar de balcón?](/es/balcony-solar/do-you-need-a-battery-balcony-solar): ¿es la diferencia entre tu precio de compra y tu pago por inyección lo bastante grande para justificar el coste añadido? Donde termina el net metering, como en los Países Bajos desde el 1 de enero de 2027, esa diferencia aumenta; consulta [Países Bajos: el fin del net metering en 2027](/es/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'No encontramos ninguna subvención de ámbito UE para baterías de balcón. Los programas, donde existen, los fijan países, estados o municipios, así que consulta la página oficial de tu administración antes de comprar. Para Alemania, [Balkonkraftwerk: las reglas de Alemania](/es/balcony-solar/balkonkraftwerk-germany-rules) cubre las reglas de registro de los sistemas sin almacenamiento.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Organismo de normalización: la norma no cubre los dispositivos plug-in con almacenamiento; límites de 800 VA y 960 W; DKE/K 373 planifica una parte de almacenamiento',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Información al consumidor (actualizada el 21 de octubre de 2026) sobre el registro del almacenamiento, MaStR, formulario F.1.2 y reglas del operador de red',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Blog de un minorista (no neutral): VDE-AR-N 4105:2026-03 y el borrador anterior del EEG 2027 del 18 de julio de 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart – batería Lidl TRONIC de 2,24 kWh',
            description: 'Fechas de la promoción, precios de 399 €/299 €, sin inversor integrado',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle – nota de prensa de Intersolar Europe 2026 (vía Barchart)',
            description: 'Anuncio del fabricante: hasta 10 kWh, potencia bidireccional de 2,5 kW o 5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. – Energy Policy 209 (2026), artículo 114952',
            description: 'Estudio de simulación con 448 hogares: tarifas dinámicas y ganancias de sistemas fotovoltaicos con batería',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia y el almacenamiento en solar de balcón',
            description: 'Informe sobre la directriz de Vonovia que prohíbe el almacenamiento y la valoración jurídica discutida',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: 'Rangos de precios del almacenamiento, registro en el MaStR y ejemplos de amortización',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'Ministerio Federal de Economía — proyecto de ley EEG 2027',
            description: 'Proyecto del gabinete del 29 de julio de 2026 (PDF en alemán); la definición de almacenamiento según informan los medios especializados',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'Decisión del gabinete del 29 de julio de 2026, primera lectura en el Bundestag y audiencia de expertos (página del 16 de octubre de 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es obligatorio ya el almacenamiento en batería para la energía solar de balcón?',
            a: 'No. Las baterías se están volviendo más comunes, pero nada obliga a instalar una. Que una batería compense en tu hogar depende de la diferencia entre tu precio de compra y tu pago por inyección; la prueba está en «¿Necesitas una batería para la energía solar de balcón?».',
          },
          {
            q: '¿Existe una subvención de la UE para baterías de energía solar de balcón?',
            a: 'No encontramos ninguna subvención de ámbito UE. El apoyo a baterías de balcón, donde existe, lo fijan países, estados o municipios. Consulta la página oficial de tu administración y las condiciones del programa antes de comprar.',
          },
          {
            q: '¿Cubre la DIN VDE V 0126-95 los sistemas de balcón con batería?',
            a: 'No. El organismo de normalización DKE indica que la norma no cubre los dispositivos solares plug-in con almacenamiento de energía. El comité DKE/K 373 ha empezado a planificar una parte adicional para dispositivos con almacenamiento, pero no da calendario.',
          },
          {
            q: '¿Cómo registro un sistema de balcón con batería en Alemania?',
            a: 'La Verbraucherzentrale indica (página actualizada el 21 de octubre de 2026) que el almacenamiento debe comunicarse actualmente al operador de red además de al MaStR y que aún no lo cubre el registro simplificado. Con la VDE-AR-N 4105 revisada existe un procedimiento simplificado con el formulario F.1.2 para inyección de hasta 800 W, pero no todos los operadores de red lo aceptan aún. El ADAC describe el proceso de forma más sencilla; confirma el procedimiento con tu operador de red.',
          },
          {
            q: '¿Cuánto cuesta una batería para una instalación solar de balcón?',
            a: 'Según el ADAC (septiembre de 2026), un almacenamiento solo de 1,5 a 2 kWh cuesta entre 300 y 1000 €: modelos básicos de 300 a 400 €, gama media de 450 a 750 €, premium de 600 a 1000 €. Los kits completos con 2 a 4 módulos y 1,5 a 2 kWh de almacenamiento cuestan entre 700 y 1700 €. Los precios cambian a menudo, y en el cálculo de ejemplo del ADAC el almacenamiento alarga la amortización en aproximadamente un año.',
          },
          {
            q: '¿Qué cambia el EEG 2027 para las baterías de balcón?',
            a: 'Los medios especializados informan de que el proyecto de EEG 2027, aprobado por el gabinete el 29 de julio de 2026, contaría el almacenamiento tras el mismo inversor como parte de un dispositivo enchufable, mientras que el almacenamiento en CA con inversor propio no quedaría cubierto. Aún no es ley porque el Bundestag no ha concluido la votación, por lo que siguen vigentes las normas de registro descritas arriba.',
          },
          {
            q: '¿Qué es la batería de balcón de WattCycle?',
            a: 'Según la nota de prensa del fabricante del 20 de junio de 2026, un sistema de almacenamiento de balcón todo en uno de hasta 10 kWh y 2,5 kW o 5 kW de potencia bidireccional, presentado en Intersolar Europe 2026. Son afirmaciones del fabricante y no encontramos precio ni fecha de disponibilidad publicados para la UE.',
          },
          {
            q: '¿Hacen las tarifas eléctricas dinámicas más rentables las baterías?',
            a: 'En una simulación revisada por pares con 448 hogares, las tarifas dinámicas a un nivel de precio similar al de las fijas dieron a una batería de 10 kWh ganancias netas un 12,7 % superiores, y una previsión perfecta del día siguiente añadió cerca de un 6 % frente a previsiones ingenuas. El estudio modela sistemas fotovoltaicos con batería en tejado, y las tarifas dinámicas conllevan riesgo de precio.',
          },
          {
            q: '¿Puede mi arrendador prohibir una batería de balcón?',
            a: 'Es un tema discutido. El derecho de arrendamientos alemán da a los inquilinos un derecho a los dispositivos solares plug-in (§ 554 BGB), pero si eso incluye el almacenamiento es objeto de debate. Un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general. Pregunta por escrito y busca asesoramiento; esto no es asesoramiento jurídico.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[¿Necesitas una batería para la energía solar de balcón?](/es/balcony-solar/do-you-need-a-battery-balcony-solar) — la prueba de decisión centrada en la economía en la que se apoya esta página',
          '[Balkonkraftwerk: las reglas de Alemania](/es/balcony-solar/balkonkraftwerk-germany-rules) — registro y normas para sistemas sin almacenamiento',
          '[Las mejores baterías para energía solar de balcón](/es/balcony-solar/best-balcony-solar-batteries-2026) — guía de compra de hardware',
          '[Países Bajos: el fin del net metering en 2027](/es/balcony-solar/net-metering-rollback-balcony-solar-2027) — cómo una mayor diferencia entre precio de compra e inyección cambia el caso del almacenamiento',
          '[Energía solar de balcón para propietarios y asociaciones de vivienda](/es/balcony-solar/balcony-solar-housing-associations-b2b-2027) — posturas de los arrendadores sobre las baterías',
          '[Gestión local de energía en el hogar inteligente](/es/smart-home/local-smart-home-energy-management-2027) — entre clústeres: automatización del desplazamiento de carga para la energía almacenada',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-fr.webp',
    title: 'Batteries pour le solaire de balcon en 2027 : un nouveau standard ?',
    seoTitle: 'Batteries solaire de balcon 2027 : règles, prix, intérêt',
    intro: 'Le stockage par batterie est un complément de plus en plus courant pour le solaire de balcon en Allemagne et dans l\'UE, mais il n\'est ni obligatoire ni adapté à tous les foyers, et les règles allemandes pour les kits plug-in avec stockage sont encore en cours d\'élaboration. Cette page résume l\'état des règles, les prix des batteries d\'appoint et ce que la recherche sur l\'arbitrage tarifaire montre ou non. C\'est un aperçu du marché, pas une recommandation d\'achat ni un conseil juridique ou électrique.',
    metaDescription: 'La norme plug-in allemande exclut le stockage, les règles d\'enregistrement évoluent, les prix baissent. Ce qui est vérifié et quand une batterie rapporte.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Acheteurs de solaire de balcon évaluant l\'ajout d\'un stockage par batterie en 2027',
    primaryTerm: 'batterie solaire de balcon 2027',
    targetKeywords: [
      'batterie solaire balcon 2027',
      'batterie balcon enregistrement allemagne',
      'DIN VDE V 0126-95 stockage',
      'wattcycle batterie solaire balcon',
    ],
    leadAnswerBlock: '**Les batteries deviennent un complément courant du solaire de balcon, mais elles ne sont pas obligatoires, et les règles allemandes pour les systèmes enfichables avec stockage ne sont pas encore stabilisées.** La norme produit DIN VDE V 0126-95, publiée en décembre 2025, ne couvre que les appareils solaires enfichables sans stockage ; le comité de normalisation DKE/K 373 a commencé à planifier une autre partie pour les appareils avec stockage. La Verbraucherzentrale indique (page mise à jour le 21 octobre 2026) que le stockage doit actuellement être déclaré au gestionnaire de réseau en plus du Marktstammdatenregister, tandis que la règle de raccordement révisée VDE-AR-N 4105 prévoit pour une injection jusqu\'à 800 W une procédure simplifiée que tous les gestionnaires de réseau n\'acceptent pas encore. Le projet de loi EEG 2027 adopté par le cabinet le 29 juillet 2026 compterait, selon des informations de presse, le stockage derrière le même onduleur comme partie d\'un appareil enfichable, mais ce n\'est pas encore une loi. L\'ADAC situe le stockage seul à environ 300 à 1 000 €, et la rentabilité d\'une batterie dépend toujours de l\'écart entre votre prix d\'achat de l\'électricité et la rémunération de l\'injection.',
    quickAnswerTop: {
      fr: {
        question: 'Le stockage par batterie devient-il la norme pour le solaire de balcon ?',
        answer: 'Il se répand, mais il n\'est pas obligatoire ni adapté à tous les foyers. Les batteries d\'appoint deviennent moins chères, mais la norme produit allemande DIN VDE V 0126-95 ne couvre pas les appareils plug-in avec stockage et les règles d\'enregistrement du stockage évoluent. L\'intérêt d\'une batterie dépend de l\'écart entre le prix de l\'électricité achetée et la rémunération de votre injection.',
        bullets: [
          'La DIN VDE V 0126-95 (publiée en décembre 2025) couvre les appareils solaires plug-in sans stockage ; le comité DKE/K 373 n\'a fait que commencer à planifier une partie pour les appareils avec stockage',
          'La Verbraucherzentrale indique (page mise à jour le 21 octobre 2026) que le stockage doit actuellement être déclaré au gestionnaire de réseau en plus du MaStR ; la déclaration simplifiée ne le couvre pas encore',
          'Selon la Verbraucherzentrale, la VDE-AR-N 4105 révisée prévoit une procédure simplifiée (formulaire F.1.2) pour une injection jusqu\'à 800 W, mais tous les gestionnaires de réseau ne l\'acceptent pas encore et peuvent appliquer l\'ancienne version jusqu\'au 1er mars 2027',
          'Une étude de simulation de 2026 portant sur 448 foyers a trouvé que les tarifs dynamiques augmentaient de 12,7 % le gain net d\'une batterie de 10 kWh ; elle modélise des systèmes PV-batterie en toiture, pas des kits plug-in',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways', },
      { label: 'Les règles allemandes pour le plug-in avec stockage évoluent encore', anchor: '#storage-rules', },
      { label: 'Matériel : baisse des prix d\'entrée et déclarations des fabricants', anchor: '#new-hardware', },
      { label: 'L\'argument de l\'arbitrage tarifaire', anchor: '#tariff-arbitrage', },
      { label: 'Tendance et décision individuelle : ce que cet article ne dit pas', anchor: '#trend-vs-decision', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Questions fréquemment posées', anchor: '#faq', },
      { label: 'Lectures complémentaires', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La norme produit allemande DIN VDE V 0126-95, publiée en décembre 2025, couvre les appareils solaires plug-in sans stockage. Le comité de normalisation DKE/K 373 a commencé à planifier une partie supplémentaire pour les appareils avec stockage, sans calendrier.',
          'La Verbraucherzentrale indique (page mise à jour le 21 octobre 2026) que le stockage doit actuellement être déclaré au gestionnaire de réseau en plus du MaStR. La VDE-AR-N 4105 révisée prévoit une procédure simplifiée avec le formulaire F.1.2 pour une injection jusqu\'à 800 W, mais tous les gestionnaires de réseau ne l\'acceptent pas encore et peuvent appliquer l\'ancienne version jusqu\'au 1er mars 2027 ; confirmez donc la procédure auprès de votre gestionnaire de réseau avant d\'acheter.',
          'Le projet de loi EEG 2027 a été adopté par le cabinet le 29 juillet 2026. Selon la presse spécialisée, il compterait le stockage derrière le même onduleur comme partie d\'un appareil enfichable, alors que le stockage en courant alternatif avec onduleur propre ne serait pas couvert. Le Parlement ne l\'a pas encore voté : ce n\'est pas une loi.',
          'Les prix d\'entrée baissent. L\'ADAC (septembre 2026) situe le stockage seul de 1,5 à 2 kWh à environ 300 à 1 000 €. WattCycle a annoncé pour Intersolar Europe 2026 une batterie de balcon jusqu\'à 10 kWh ; aucun prix dans l\'UE ni date de disponibilité n\'est publié.',
          'Nous n\'avons trouvé aucune aide européenne pour les batteries de balcon. Les aides, lorsqu\'elles existent, sont fixées par les pays, les régions ou les communes.',
          'Cette page décrit une tendance du marché. Elle ne remplace pas le test de « Faut-il une batterie pour le solaire de balcon ? » : une batterie n\'est rentable que si l\'écart économisé entre prix d\'achat et rémunération d\'injection dépasse son coût.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Les règles allemandes pour le plug-in avec stockage évoluent encore',
        content: [
          '**La norme produit allemande DIN VDE V 0126-95 couvre les appareils solaires plug-in sans stockage.** L\'organisme de normalisation DKE indique dans sa FAQ que la norme ne couvre pas les appareils solaires plug-in avec unité de stockage d\'énergie, qui nécessitent des exigences supplémentaires. Le comité DKE/K 373 a commencé à planifier une partie supplémentaire sans donner de calendrier. La norme a été publiée en décembre 2025 et autorise jusqu\'à 800 VA de puissance d\'onduleur et, avec une prise domestique normale, jusqu\'à 960 W de modules.',
          '**Concernant la déclaration, la Verbraucherzentrale indique (page mise à jour le 21 octobre 2026) que le stockage doit actuellement être déclaré au gestionnaire de réseau en plus du Marktstammdatenregister (MaStR), et que la déclaration simplifiée ne le couvre pas encore.** Pour une injection jusqu\'à 800 W, elle renvoie à la VDE-AR-N 4105 révisée et à sa procédure simplifiée (formulaire F.1.2), mais précise que tous les gestionnaires de réseau ne l\'acceptent pas encore et qu\'ils peuvent continuer à utiliser l\'ancienne version jusqu\'au 1er mars 2027. Les appareils solaires enfichables sans stockage n\'ont plus à être signalés directement au gestionnaire de réseau depuis le Solarpaket I (mai 2024). L\'ADAC (septembre 2026) décrit la déclaration du stockage de façon plus simple (MaStR seulement, dans le mois) et conseille de clarifier les installations atypiques avec le gestionnaire de réseau ; les sources divergeant, confirmez la procédure auprès de votre gestionnaire de réseau.',
          '**Les règles bougent, mais ne sont pas encore définitives.** La presse spécialisée rapporte que le cabinet a adopté le projet de loi EEG 2027 le 29 juillet 2026 et qu\'il compterait le stockage derrière le même onduleur comme partie d\'un appareil enfichable ; le stockage en courant alternatif avec onduleur propre ne serait pas couvert. Selon la presse, le Bundestag a tenu la première lecture le 24 septembre 2026 et une audition d\'experts le 5 octobre 2026 ; le vote final est en attente et le texte peut encore changer. Le blog de revendeur que nous citons pour le premier avant-projet n\'est pas une source neutre. Demandez à votre gestionnaire de réseau quelle procédure s\'applique le jour de la mise en service.',
          'Les règles des bailleurs ajoutent une couche : un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale. Voir [Le solaire de balcon pour les bailleurs et les organismes de logement](/fr/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Matériel : baisse des prix d\'entrée et déclarations des fabricants',
        content: [
          '**Les prix d\'entrée baissent.** Lidl a vendu en Allemagne du 21 au 27 mai 2026 une batterie d\'appoint TRONIC de 2,24 kWh (LiFePO4) à 399 €, ou 299 € avec l\'application Lidl Plus. Elle n\'a pas d\'onduleur intégré et complète donc une installation de balcon existante ; la promotion est probablement terminée, vérifiez les prix actuels.',
          '**Prix courants (ADAC, septembre 2026) :** un stockage seul de 1,5 à 2 kWh coûte environ 300 à 1 000 €. Les modèles d\'entrée de gamme sans onduleur intégré démarrent autour de 300 à 400 €, les modèles plug-and-play de milieu de gamme coûtent environ 450 à 750 € et les modèles hybrides haut de gamme environ 600 à 1 000 €. Dans le calcul de l\'ADAC avec la HTW Berlin pour une installation de 880 W, l\'amortissement est d\'environ 4 ans sans stockage et 5 ans avec pour un foyer d\'une personne, et d\'environ 3 contre 4 ans pour un foyer de trois personnes. Pour un guide d\'achat classé, voir [Les meilleures batteries pour le solaire de balcon](/fr/balcony-solar/best-balcony-solar-batteries-2026).',
          '**Les nouveaux produits s\'accompagnent d\'affirmations de fabricants, pas de tests indépendants.** À l\'Intersolar Europe 2026 à Munich, WattCycle a annoncé un système de stockage de balcon tout-en-un jusqu\'à 10 kWh et 2,5 kW ou 5 kW de puissance bidirectionnelle, plug-and-play (affirmations du fabricant, communiqué du 20 juin 2026). Nous n\'avons trouvé ni prix ni date de disponibilité publiés pour l\'UE.',
          'Comme la DIN VDE V 0126-95 exclut le stockage, vérifiez que la puissance CA d\'un système combiné reste dans la limite de 800 VA qui définit un appareil plug-in en Allemagne, et demandez au vendeur quelle voie d\'enregistrement le produit vise.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'L\'argument de l\'arbitrage tarifaire',
        content: [
          '**L\'idée d\'arbitrage derrière de nombreux nouveaux produits s\'appuie sur la recherche, avec des limites.** Une étude de simulation évaluée par des pairs (Lorenz, Bayer, Pruckner, Staake et Hopf, *Energy Policy*, volume 209, 2026, DOI 10.1016/j.enpol.2025.114952) a utilisé cinq ans de données de 448 foyers. Pour une batterie de 10 kWh, des tarifs dynamiques à niveau de prix similaire aux tarifs fixes ont donné des gains nets supérieurs de 12,7 %, même avec une stratégie simple d\'autoconsommation. Une prévision parfaite des prix à J-1 a ajouté environ 6 % par rapport à des prévisions naïves.',
          'L\'étude modélise des systèmes PV-batterie résidentiels, pas des kits plug-in ; lisez-la comme une direction, pas comme une promesse de retour sur investissement. Les tarifs dynamiques vous exposent aussi aux variations de prix.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'Tendance et décision individuelle : ce que cet article ne dit pas',
        content: [
          '**Les batteries se répandent, mais cela ne signifie pas qu\'une batterie soit obligatoire ou rentable pour chaque foyer.** La décision repose toujours sur le test de [Faut-il une batterie pour le solaire de balcon ?](/fr/balcony-solar/do-you-need-a-battery-balcony-solar) : l\'écart entre votre prix d\'achat et votre rémunération d\'injection est-il assez grand pour justifier le surcoût ? Là où le net metering prend fin, comme aux Pays-Bas à partir du 1er janvier 2027, cet écart se creuse ; voir [Pays-Bas : la fin du net metering en 2027](/fr/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'Nous n\'avons trouvé aucune aide européenne pour les batteries de balcon. Les programmes, lorsqu\'ils existent, sont fixés par les pays, les régions ou les communes ; consultez la page officielle de votre collectivité avant d\'acheter. Pour l\'Allemagne, [Balkonkraftwerk : les règles allemandes](/fr/balcony-solar/balkonkraftwerk-germany-rules) couvre les règles d\'enregistrement des systèmes sans stockage.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Organisme de normalisation : la norme ne couvre pas les appareils plug-in avec stockage ; limites de 800 VA et 960 W ; DKE/K 373 planifie une partie stockage',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Information aux consommateurs (mise à jour le 21 octobre 2026) sur la déclaration du stockage, le MaStR, le formulaire F.1.2 et les règles des gestionnaires de réseau',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher ?',
            description: 'Blog de revendeur (non neutre) : VDE-AR-N 4105:2026-03 et l\'avant-projet EEG 2027 du 18 juillet 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart – batterie Lidl TRONIC 2,24 kWh',
            description: 'Dates de la promotion, prix de 399 €/299 €, pas d\'onduleur intégré',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle – communiqué Intersolar Europe 2026 (via Barchart)',
            description: 'Annonce du fabricant : jusqu\'à 10 kWh, puissance bidirectionnelle de 2,5 kW ou 5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. – Energy Policy 209 (2026), article 114952',
            description: 'Étude de simulation sur 448 foyers : tarifs dynamiques et gains des systèmes PV-batterie',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia et le stockage pour solaire de balcon',
            description: 'Article sur la directive de Vonovia interdisant le stockage et l\'évaluation juridique contestée',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: 'Fourchettes de prix du stockage, déclaration au MaStR et exemples d\'amortissement',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'Ministère fédéral de l\'Économie — projet de loi EEG 2027',
            description: 'Projet du cabinet du 29 juillet 2026 (PDF en allemand) ; la définition du stockage telle que rapportée par la presse spécialisée',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'Décision du cabinet du 29 juillet 2026, première lecture au Bundestag et audition d\'experts (page du 16 octobre 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Le stockage par batterie est-il désormais obligatoire pour le solaire de balcon ?',
            a: 'Non. Les batteries se répandent, mais rien n\'en impose une. L\'intérêt d\'une batterie pour votre foyer dépend de l\'écart entre votre prix d\'achat et votre rémunération d\'injection ; le test se trouve dans « Faut-il une batterie pour le solaire de balcon ? ».',
          },
          {
            q: 'Existe-t-il une aide européenne pour les batteries de solaire de balcon ?',
            a: 'Nous n\'avons trouvé aucune aide à l\'échelle de l\'UE. Le soutien aux batteries de balcon, lorsqu\'il existe, est fixé par les pays, les régions ou les communes. Consultez la page officielle de votre collectivité et les conditions du programme avant d\'acheter.',
          },
          {
            q: 'La DIN VDE V 0126-95 couvre-t-elle les installations de balcon avec batterie ?',
            a: 'Non. L\'organisme de normalisation DKE indique que la norme ne couvre pas les appareils solaires plug-in avec stockage d\'énergie. Le comité DKE/K 373 a commencé à planifier une partie supplémentaire pour les appareils avec stockage, sans calendrier.',
          },
          {
            q: 'Comment déclarer une installation de balcon avec batterie en Allemagne ?',
            a: 'La Verbraucherzentrale indique (page mise à jour le 21 octobre 2026) que le stockage doit actuellement être déclaré au gestionnaire de réseau en plus du MaStR et que la déclaration simplifiée ne le couvre pas encore. La VDE-AR-N 4105 révisée prévoit une procédure simplifiée avec le formulaire F.1.2 pour une injection jusqu\'à 800 W, mais tous les gestionnaires de réseau ne l\'acceptent pas encore. L\'ADAC décrit la démarche plus simplement ; confirmez donc la procédure auprès de votre gestionnaire de réseau.',
          },
          {
            q: 'Combien coûte une batterie pour une installation solaire de balcon ?',
            a: 'Selon l\'ADAC (septembre 2026), un stockage seul de 1,5 à 2 kWh coûte environ 300 à 1 000 € : modèles d\'entrée de gamme autour de 300 à 400 €, milieu de gamme autour de 450 à 750 €, haut de gamme autour de 600 à 1 000 €. Les kits complets avec 2 à 4 modules et 1,5 à 2 kWh de stockage coûtent environ 700 à 1 700 €. Les prix changent souvent, et dans l\'exemple de calcul de l\'ADAC le stockage allonge l\'amortissement d\'environ un an.',
          },
          {
            q: 'Que change l\'EEG 2027 pour les batteries de balcon ?',
            a: 'La presse spécialisée rapporte que le projet de loi EEG 2027, adopté par le cabinet le 29 juillet 2026, compterait le stockage derrière le même onduleur comme partie d\'un appareil enfichable, alors que le stockage en courant alternatif avec onduleur propre ne serait pas couvert. Ce n\'est pas encore une loi, le Bundestag n\'ayant pas terminé son vote ; les règles de déclaration décrites ci-dessus restent donc applicables.',
          },
          {
            q: 'Qu\'est-ce que la batterie de balcon WattCycle ?',
            a: 'Selon le communiqué du fabricant du 20 juin 2026, un système de stockage de balcon tout-en-un jusqu\'à 10 kWh et 2,5 kW ou 5 kW de puissance bidirectionnelle, présenté à l\'Intersolar Europe 2026. Ce sont des affirmations du fabricant, et nous n\'avons trouvé ni prix ni date de disponibilité publiés pour l\'UE.',
          },
          {
            q: 'Les tarifs d\'électricité dynamiques rendent-ils les batteries plus intéressantes ?',
            a: 'Dans une simulation évaluée par des pairs portant sur 448 foyers, des tarifs dynamiques à niveau de prix similaire aux tarifs fixes ont donné à une batterie de 10 kWh des gains nets supérieurs de 12,7 %, et une prévision parfaite à J-1 a ajouté environ 6 % par rapport à des prévisions naïves. L\'étude modélise des systèmes PV-batterie en toiture, et les tarifs dynamiques comportent un risque de prix.',
          },
          {
            q: 'Mon bailleur peut-il interdire une batterie de balcon ?',
            a: 'C\'est contesté. Le droit locatif allemand donne aux locataires un droit aux appareils solaires plug-in (§ 554 BGB), mais savoir si cela inclut le stockage est débattu. Un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale. Demandez par écrit et faites-vous conseiller ; ceci n\'est pas un conseil juridique.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Faut-il une batterie pour le solaire de balcon ?](/fr/balcony-solar/do-you-need-a-battery-balcony-solar) — le test de décision axé sur l\'économie, sur lequel s\'appuie cette page',
          '[Balkonkraftwerk : les règles allemandes](/fr/balcony-solar/balkonkraftwerk-germany-rules) — enregistrement et normes pour les systèmes sans stockage',
          '[Les meilleures batteries pour le solaire de balcon](/fr/balcony-solar/best-balcony-solar-batteries-2026) — guide d\'achat du matériel',
          '[Pays-Bas : la fin du net metering en 2027](/fr/balcony-solar/net-metering-rollback-balcony-solar-2027) — comment un écart plus large entre prix d\'achat et d\'injection modifie l\'intérêt du stockage',
          '[Le solaire de balcon pour les bailleurs et les organismes de logement](/fr/balcony-solar/balcony-solar-housing-associations-b2b-2027) — positions des bailleurs sur les batteries',
          '[Gestion énergétique locale de la maison connectée](/fr/smart-home/local-smart-home-energy-management-2027) — inter-clusters : l\'automatisation du report de charge pour l\'énergie stockée',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-ja.webp',
    title: '2027年のバルコニーソーラー用蓄電池：標準になるのか',
    seoTitle: 'バルコニーソーラー蓄電池2027：規則・価格・採算',
    intro: '蓄電池は、ドイツやEUのバルコニーソーラーで増えつつあるオプションですが、必須ではなく、すべての世帯に向くわけでもありません。蓄電池付きプラグイン式システムに関するドイツのルールも、まだ整備の途中です。このページでは、ルールの現状、増設用バッテリーの価格、料金裁定に関する研究が示すことと示さないことをまとめます。市場の概観であり、購入の推奨でも、法律・電気工事上の助言でもありません。',
    metaDescription: 'バルコニーソーラー蓄電池2027：ドイツのプラグイン規格は蓄電池を対象外とし、登録ルールは流動的で、価格は下落中。確認済みの事実と採算の条件を整理します。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '約6分',
    educationalLevel: 'Beginner',
    audience: '2027年に蓄電池の追加を検討しているバルコニーソーラー購入者',
    primaryTerm: 'バルコニーソーラー 蓄電池 2027',
    targetKeywords: ['バルコニーソーラー バッテリー 2027', 'バルコニー 蓄電池 登録 ドイツ', 'DIN VDE V 0126-95 蓄電', 'wattcycle バルコニーソーラー バッテリー'],
    leadAnswerBlock: '**バッテリーはバルコニーソーラーの追加機器として一般的になりつつありますが、必須ではなく、蓄電池付きプラグイン式システムに関するドイツの規則もまだ確定していません。** 2025年12月に公表された製品規格DIN VDE V 0126-95は、蓄電池なしのプラグイン式ソーラー機器のみを対象としており、規格委員会DKE/K 373は蓄電池付き機器向けの別の部分の計画を始めたところです。消費者センター（Verbraucherzentrale）は（2026年10月21日更新のページで）、蓄電池は現在、Marktstammdatenregisterへの登録に加えて系統事業者への届出が必要だとしています。一方、改訂された接続規則VDE-AR-N 4105は800 Wまでの系統への逆潮流について簡易手続きを定めていますが、すべての系統事業者がまだ受け入れているわけではありません。2026年7月29日に閣議決定されたEEG 2027法案は、報道によれば、同じインバーターの背後にある蓄電池をプラグイン機器の一部として扱うとされますが、まだ法律ではありません。ADACは蓄電池単体をおよそ300〜1,000ユーロとしており、バッテリーが元を取れるかどうかは、購入電力価格と売電収入の差次第です。',
    quickAnswerTop: {
      ja: {
        question: 'バルコニーソーラーで蓄電池は標準になりつつありますか？',
        answer: '普及は進んでいますが、必須ではなく、すべての世帯に向くわけでもありません。増設用バッテリーは安くなっています。ただし、ドイツの製品規格DIN VDE V 0126-95は蓄電池付きのプラグイン機器を対象としておらず、蓄電池の登録ルールは変動しています。蓄電池が元を取れるかどうかは、購入電力の価格と売電の対価との差で決まります。',
        bullets: [
          'DIN VDE V 0126-95（2025年12月公表）は蓄電池なしのプラグイン式ソーラー機器が対象。蓄電池付き機器向けの部分は、DKE/K 373が計画を始めたばかり',
          '消費者センター（2026年10月21日更新のページ）によると、蓄電池は現在、MaStRへの登録に加えて系統事業者への届出が必要で、簡易登録の対象にはまだなっていません',
          '消費者センターによると、改訂版VDE-AR-N 4105は800 Wまでの逆潮流について簡易手続き（様式F.1.2）を定めていますが、すべての系統事業者がまだ受け入れておらず、2027年3月1日までは従来版を適用できます',
          '2026年の448世帯のシミュレーション研究では、動的料金により10 kWh蓄電池の純利益が12.7％増加。対象は屋根設置のPV蓄電池システムで、プラグイン式キットではない',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: '#key-takeaways', },
      { label: '蓄電池付きプラグイン式に関するドイツのルールは変化の途中', anchor: '#storage-rules', },
      { label: 'ハードウェア：入門価格の下落とメーカーの主張', anchor: '#new-hardware', },
      { label: '料金裁定をめぐる議論', anchor: '#tariff-arbitrage', },
      { label: '動向と個別の判断：この記事が述べていないこと', anchor: '#trend-vs-decision', },
      { label: '出典', anchor: '#sources', },
      { label: 'よくある質問', anchor: '#faq', },
      { label: '関連記事', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2025年12月に公表されたドイツの製品規格DIN VDE V 0126-95は、蓄電池なしのプラグイン式ソーラー機器を対象とします。規格委員会DKE/K 373は蓄電池付き機器向けの追加部分の計画を始めましたが、時期は示されていません。',
          '消費者センター（2026年10月21日更新のページ）によると、蓄電池は現在、MaStRへの登録に加えて系統事業者への届出が必要です。改訂版VDE-AR-N 4105は800 Wまでの逆潮流について様式F.1.2による簡易手続きを定めていますが、すべての系統事業者がまだ受け入れておらず、2027年3月1日までは従来版を適用できます。購入前に系統事業者に手続きを確認してください。',
          'EEG 2027法案は2026年7月29日に閣議決定されました。専門メディアによると、同じインバーターの背後にある蓄電池はプラグイン機器の一部として扱われる一方、独自のインバーターを持つAC蓄電池は対象外とされます。議会はまだ可決しておらず、法律にはなっていません。',
          '入門価格は下がっています。ADAC（2026年9月）は、1.5〜2 kWhの蓄電池単体をおよそ300〜1,000ユーロとしています。WattCycleはIntersolar Europe 2026向けに最大10 kWhのバルコニー用バッテリーを発表しましたが、EUでの価格や発売日は公表されていません。',
          'バルコニー用蓄電池に対するEU全体の補助金は見つかりませんでした。支援がある場合は、国・州・自治体が定めています。',
          'このページは市場の動向を説明するものです。「バルコニーソーラーに蓄電池は必要？」の世帯向けテストに代わるものではありません。蓄電池が元を取れるのは、購入価格と売電対価の差による節約が費用を上回る場合だけです。',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '蓄電池付きプラグイン式に関するドイツのルールは変化の途中',
        content: [
          '**ドイツの製品規格DIN VDE V 0126-95は、蓄電池なしのプラグイン式ソーラー機器を対象としています。** 規格団体DKEはFAQで、この規格は蓄電ユニット付きのプラグイン式ソーラー機器を対象としておらず、そのような機器には追加の要件が必要だと説明しています。委員会DKE/K 373は追加部分の計画を始めましたが、時期は示していません。規格は2025年12月に公表され、インバーター出力は最大800 VA、通常の家庭用プラグの場合はモジュール出力の合計が最大960 Wまでとされています。',
          '**登録について、消費者センターは（2026年10月21日更新のページで）、蓄電池は現在、Marktstammdatenregister（MaStR）への登録に加えて系統事業者への届出が必要で、簡易登録の対象にはまだなっていないとしています。** 800 Wまでの逆潮流については、簡易手続き（様式F.1.2）を定めた改訂版VDE-AR-N 4105を挙げていますが、すべての系統事業者がまだ受け入れておらず、2027年3月1日までは従来版を使い続けられると指摘しています。蓄電池なしのプラグイン式ソーラー機器は、Solarpaket I（2024年5月）以降、系統事業者に直接知らせる必要がありません。ADAC（2026年9月）は蓄電池の登録をより簡単に説明しており（MaStRのみ、1か月以内）、特殊な構成は事前に系統事業者と確認するよう勧めています。情報源によって説明が異なるため、系統事業者に手続きを確認してください。',
          '**規則は動いていますが、まだ確定していません。** 専門メディアによると、閣議は2026年7月29日にEEG 2027法案を決定し、同じインバーターの背後にある蓄電池はプラグイン機器の一部として扱われるとされます。独自のインバーターを持つAC蓄電池は対象外です。報道によれば、連邦議会は2026年9月24日に第一読会、2026年10月5日に専門家公聴会を行いました。最終採決は未了で、文言が変わる可能性もあります。以前の作業草案について引用している販売店ブログは中立的な情報源ではありません。運転開始の日にどの手続きが適用されるか、系統事業者に確認してください。',
          '賃貸の場合は、貸主のルールも加わります。drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています。[大家・住宅会社向けバルコニーソーラー](/ja/balcony-solar/balcony-solar-housing-associations-b2b-2027)をご覧ください。',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'ハードウェア：入門価格の下落とメーカーの主張',
        content: [
          '**入門価格は下がっています。** Lidlはドイツで2026年5月21〜27日に、TRONICの2.24 kWh増設用バッテリー（LiFePO4）を399ユーロ、Lidl Plusアプリ利用で299ユーロで販売しました。インバーターは内蔵されておらず、既存のバルコニー設備を拡張するものです。キャンペーンは終了している可能性が高いため、現在の価格を確認してください。',
          '**一般的な価格（ADAC、2026年9月）：** 1.5〜2 kWhの蓄電池単体はおよそ300〜1,000ユーロです。インバーター非内蔵のエントリーモデルは約300〜400ユーロから、中価格帯のプラグアンドプレイ型は約450〜750ユーロ、プレミアムのハイブリッド型は約600〜1,000ユーロです。ADACによるHTWベルリンの880 Wシステムの試算では、元を取るまでの期間は1人世帯で蓄電池なしが約4年、ありが約5年、3人世帯では約3年と約4年です。ランキング形式の購入ガイドは[バルコニーソーラー向けおすすめバッテリー](/ja/balcony-solar/best-balcony-solar-batteries-2026)をご覧ください。',
          '**新製品に付いてくるのは、独立した試験ではなくメーカーの主張です。** WattCycleはミュンヘンのIntersolar Europe 2026で、最大10 kWh、双方向出力2.5 kWまたは5 kWのオールインワン型バルコニー蓄電システムを発表しました。プラグアンドプレイとしています（メーカーの主張、2026年6月20日のプレスリリース）。EUでの価格や提供時期は公表されていません。',
          'DIN VDE V 0126-95は蓄電池を対象外としているため、一体型システムのAC出力が、ドイツでプラグイン式機器を定義する800 VAの上限内に収まるかを確認し、その製品がどの登録手順を想定しているかを販売者に尋ねてください。',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: '料金裁定をめぐる議論',
        content: [
          '**多くの新製品の背景にある裁定の考え方には、研究の裏付けがありますが、限界もあります。** 査読付きのシミュレーション研究（Lorenz、Bayer、Pruckner、Staake、Hopf、*Energy Policy*、第209巻、2026年、DOI 10.1016/j.enpol.2025.114952）は、448世帯の5年分のデータを用いました。10 kWhの蓄電池では、固定料金と同程度の価格水準の動的料金により、単純な自家消費戦略でも純利益が12.7％高くなりました。翌日価格の完全な予測を使うと、単純な予測と比べてさらに約6％上積みされました。',
          'この研究が扱うのは住宅用のPV蓄電池システムで、プラグイン式キットではありません。投資回収の約束ではなく、方向性を示すものとして読んでください。また、動的料金では価格変動のリスクも負います。',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: '動向と個別の判断：この記事が述べていないこと',
        content: [
          '**蓄電池は広がっていますが、必須であるとも、すべての世帯で元が取れるとも言っていません。** 個別の判断は、引き続き[バルコニーソーラーに蓄電池は必要？](/ja/balcony-solar/do-you-need-a-battery-balcony-solar)のテストに従います。購入価格と売電対価の差は、追加費用を正当化できるほど大きいでしょうか。オランダのように2027年1月1日にネットメータリングが終わる地域では、この差が広がります。[オランダのネットメータリングが2027年に終了](/ja/balcony-solar/net-metering-rollback-balcony-solar-2027)をご覧ください。',
          'バルコニー用蓄電池に対するEU全体の補助金は見つかりませんでした。制度がある場合は、国・州・自治体が定めていますので、購入前にお住まいの自治体の公式ページを確認してください。ドイツについては、[Balkonkraftwerk：ドイツのバルコニーソーラー規則](/ja/balcony-solar/balkonkraftwerk-germany-rules)で、蓄電池なしのシステムの登録ルールを扱っています。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95に関するFAQ',
            description: '規格団体：この規格は蓄電池付きのプラグイン機器を対象としない。800 VAと960 Wの上限。DKE/K 373が蓄電池部分を計画',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — プラグイン式ソーラーの法律と規格',
            description: '蓄電池の登録、MaStR、様式F.1.2、系統事業者の規則に関する消費者向け情報（2026年10月21日更新）',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '販売店ブログ（中立ではありません）：VDE-AR-N 4105:2026-03と、2026年7月18日の以前のEEG 2027作業草案',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart — Lidl TRONIC 2.24 kWhバッテリー',
            description: 'キャンペーン期間、399ユーロ／299ユーロの価格、インバーター非内蔵',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle — Intersolar Europe 2026プレスリリース（Barchart経由）',
            description: 'メーカー発表：最大10 kWh、双方向出力2.5 kWまたは5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. — Energy Policy 209（2026）、論文114952',
            description: '448世帯のシミュレーション研究：動的料金と住宅用PV蓄電池システムの利益',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia とバルコニーソーラーの蓄電池',
            description: 'Vonoviaの蓄電池禁止ガイドラインと、争いのある法的評価に関する報道',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: '蓄電池の価格帯、MaStR登録、回収期間の試算例',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: '連邦経済エネルギー省 — EEG 2027政府法案',
            description: '2026年7月29日の閣議決定案（ドイツ語PDF）。蓄電池の定義は専門メディアの報道による',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: '2026年7月29日の閣議決定、連邦議会の第一読会と専門家公聴会（2026年10月16日付のページ）',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'バルコニーソーラーに蓄電池は必須になりましたか？',
            a: 'いいえ。蓄電池は増えていますが、設置を義務づけるものはありません。蓄電池が自分の世帯で元を取れるかは、購入価格と売電対価の差で決まります。判断テストは「バルコニーソーラーに蓄電池は必要？」にあります。',
          },
          {
            q: 'バルコニーソーラー用蓄電池にEUの補助金はありますか？',
            a: 'EU全体の補助金は見つかりませんでした。バルコニー用蓄電池への支援がある場合は、国・州・自治体が定めています。購入前に、お住まいの自治体の公式ページと制度の条件を確認してください。',
          },
          {
            q: 'DIN VDE V 0126-95は蓄電池付きのバルコニー設備を対象としますか？',
            a: 'いいえ。規格団体DKEは、この規格は蓄電池付きのプラグイン式ソーラー機器を対象としないと説明しています。委員会DKE/K 373は蓄電池付き機器向けの追加部分の計画を始めましたが、時期は示していません。',
          },
          {
            q: 'ドイツで蓄電池付きのバルコニー設備はどう登録しますか？',
            a: '消費者センター（2026年10月21日更新のページ）によると、蓄電池は現在、MaStRへの登録に加えて系統事業者への届出が必要で、簡易登録の対象にはまだなっていません。改訂版VDE-AR-N 4105には800 Wまでの逆潮流向けに様式F.1.2による簡易手続きがありますが、すべての系統事業者がまだ受け入れているわけではありません。ADACは手順をより簡単に説明しているため、系統事業者に手続きを確認してください。',
          },
          {
            q: 'バルコニー発電用バッテリーの価格はいくらですか？',
            a: 'ADAC（2026年9月）によると、1.5〜2 kWhの蓄電池単体はおよそ300〜1,000ユーロです。エントリーモデルは約300〜400ユーロ、中価格帯は約450〜750ユーロ、プレミアムは約600〜1,000ユーロです。モジュール2〜4枚と1.5〜2 kWhの蓄電池を含むフルセットは約700〜1,700ユーロです。価格は頻繁に変わり、ADACの試算例では蓄電池により元を取るまでの期間が約1年延びます。',
          },
          {
            q: 'EEG 2027はバルコニー用バッテリーに何を変えますか？',
            a: '専門メディアによると、2026年7月29日に閣議決定されたEEG 2027法案は、同じインバーターの背後にある蓄電池をプラグイン機器の一部として扱い、独自のインバーターを持つAC蓄電池は対象外です。連邦議会が採決を終えておらず、まだ法律ではないため、上記の登録ルールが引き続き適用されます。',
          },
          {
            q: 'WattCycleのバルコニー用蓄電池とは何ですか？',
            a: 'メーカーの2026年6月20日のプレスリリースによると、最大10 kWh、双方向出力2.5 kWまたは5 kWのオールインワン型バルコニー蓄電システムで、Intersolar Europe 2026で展示されました。これらはメーカーの主張であり、EUでの価格や提供時期は公表されていません。',
          },
          {
            q: '動的電力料金で蓄電池は有利になりますか？',
            a: '448世帯の査読付きシミュレーションでは、固定料金と同程度の価格水準の動的料金により、10 kWh蓄電池の純利益が12.7％高くなり、翌日価格の完全な予測で単純な予測よりさらに約6％上積みされました。研究が扱うのは屋根設置のPV蓄電池システムで、動的料金には価格リスクがあります。',
          },
          {
            q: '貸主はバルコニー用蓄電池を禁止できますか？',
            a: '争いがあります。ドイツの賃貸法は借主にプラグイン式ソーラー機器を求める権利を認めています（BGB第554条）が、それが蓄電池を含むかどうかは議論があります。drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています。書面で問い合わせ、助言を受けてください。これは法的助言ではありません。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[バルコニーソーラーに蓄電池は必要？](/ja/balcony-solar/do-you-need-a-battery-balcony-solar) — このページの土台となる、経済性を重視した判断テスト',
          '[Balkonkraftwerk：ドイツのバルコニーソーラー規則](/ja/balcony-solar/balkonkraftwerk-germany-rules) — 蓄電池なしのシステムの登録と規格',
          '[おすすめのバルコニーソーラー用蓄電池](/ja/balcony-solar/best-balcony-solar-batteries-2026) — ハードウェアの購入ガイド',
          '[オランダのネットメータリングが2027年に終了](/ja/balcony-solar/net-metering-rollback-balcony-solar-2027) — 購入価格と売電価格の差が広がると蓄電の判断はどう変わるか',
          '[大家・住宅会社向けバルコニーソーラー](/ja/balcony-solar/balcony-solar-housing-associations-b2b-2027) — 蓄電池に関する貸主の立場',
          '[スマートホームのローカルエネルギー管理](/ja/smart-home/local-smart-home-energy-management-2027) — クラスター横断：蓄えた電力を活用する負荷シフトの自動化',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-ko.webp',
    title: '2027년 발코니 태양광 배터리: 표준이 되고 있습니까?',
    seoTitle: '발코니 태양광 배터리 2027: 규정·가격·수익성',
    intro: '배터리 저장장치는 독일과 EU의 발코니 태양광에서 점점 늘어나는 추가 옵션이지만, 필수가 아니며 모든 가구에 맞는 것도 아닙니다. 저장장치가 포함된 플러그인 시스템에 대한 독일의 규정도 아직 정비 중입니다. 이 글은 규정 현황, 추가용 배터리 가격, 요금 차익 연구가 보여 주는 것과 보여 주지 않는 것을 정리합니다. 시장 개관이며 구매 권유나 법률·전기 관련 자문이 아닙니다.',
    metaDescription: '발코니 태양광 배터리 2027: 독일 플러그인 표준은 저장장치를 제외하고, 등록 규정은 변동 중이며 가격은 하락합니다. 확인된 사실과 수익성 조건을 정리합니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '2027년 배터리 저장장치 추가 여부를 검토 중인 발코니 태양광 구매자',
    primaryTerm: '발코니 태양광 배터리 2027',
    targetKeywords: ['발코니 태양광 배터리 2027', '독일 발코니 배터리 등록', 'DIN VDE V 0126-95 저장장치', 'wattcycle 발코니 태양광 배터리'],
    leadAnswerBlock: '**배터리는 발코니 태양광의 일반적인 추가 장비가 되어 가고 있지만 필수는 아니며, 저장장치가 있는 플러그인 시스템에 대한 독일 규정도 아직 확정되지 않았습니다.** 2025년 12월에 발표된 제품 표준 DIN VDE V 0126-95는 저장장치가 없는 플러그인 태양광 장치만 다루며, 표준화 위원회 DKE/K 373은 저장장치가 있는 장치를 위한 별도 부분의 계획을 시작했습니다. 독일 소비자센터(Verbraucherzentrale)는 (2026년 10월 21일 갱신된 페이지에서) 저장장치를 현재 Marktstammdatenregister 등록과 별도로 계통 운영사에도 신고해야 한다고 밝히며, 개정된 접속 규정 VDE-AR-N 4105는 800 W까지의 계통 공급에 간소화 절차를 두고 있지만 모든 계통 운영사가 아직 이를 받아들이는 것은 아니라고 합니다. 2026년 7월 29일 내각이 의결한 EEG 2027 법안은 보도에 따르면 같은 인버터 뒤의 저장장치를 플러그인 장치의 일부로 간주하겠지만, 아직 법은 아닙니다. ADAC는 저장장치 단품을 대략 300~1,000유로로 제시하며, 배터리가 이득이 되는지는 여전히 구매 전력 가격과 계통 공급 수익의 차이에 달려 있습니다.',
    quickAnswerTop: {
      ko: {
        question: '발코니 태양광에서 배터리 저장장치가 표준이 되고 있습니까?',
        answer: '점점 흔해지고 있지만 필수는 아니며 모든 가구에 맞는 것도 아닙니다. 추가용 배터리는 저렴해지고 있습니다. 그러나 독일 제품 표준 DIN VDE V 0126-95는 저장장치가 포함된 플러그인 장치를 다루지 않으며, 저장장치의 등록 규정은 변동 중입니다. 배터리가 이익이 되는지는 구매 전력 가격과 역송 수익의 차이에 달려 있습니다.',
        bullets: [
          'DIN VDE V 0126-95(2025년 12월 발표)는 저장장치가 없는 플러그인 태양광 장치를 다루며, 저장장치 포함 장치를 위한 부분은 DKE/K 373이 계획을 막 시작한 단계입니다',
          '독일 소비자센터(2026년 10월 21일 갱신된 페이지)에 따르면 저장장치는 현재 MaStR 등록과 별도로 계통 운영사에도 신고해야 하며, 간소화된 등록은 아직 적용되지 않습니다',
          '독일 소비자센터에 따르면 개정된 VDE-AR-N 4105는 800 W까지의 계통 공급에 간소화 절차(양식 F.1.2)를 두고 있지만, 모든 계통 운영사가 아직 받아들이는 것은 아니며 2027년 3월 1일까지는 이전 버전을 적용할 수 있습니다',
          '2026년 448가구 시뮬레이션 연구에서 동적 요금제가 10 kWh 배터리의 순이익을 12.7% 높였습니다. 지붕형 PV-배터리 시스템을 모델링한 것이며 플러그인 키트가 아닙니다',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways', },
      { label: '저장장치가 포함된 플러그인 시스템에 대한 독일 규정은 아직 변동 중입니다', anchor: '#storage-rules', },
      { label: '하드웨어: 입문용 가격 하락과 제조사의 주장', anchor: '#new-hardware', },
      { label: '요금 차익 논거', anchor: '#tariff-arbitrage', },
      { label: '동향과 개별 결정: 이 글이 말하지 않는 것', anchor: '#trend-vs-decision', },
      { label: '출처', anchor: '#sources', },
      { label: '자주 묻는 질문', anchor: '#faq', },
      { label: '관련 읽을거리', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2025년 12월에 발표된 독일 제품 표준 DIN VDE V 0126-95는 저장장치가 없는 플러그인 태양광 장치를 다룹니다. 표준위원회 DKE/K 373은 저장장치 포함 장치를 위한 추가 부분의 계획을 시작했지만 일정은 없습니다.',
          '독일 소비자센터(2026년 10월 21일 갱신된 페이지)에 따르면 저장장치는 현재 MaStR 등록과 별도로 계통 운영사에도 신고해야 합니다. 개정된 VDE-AR-N 4105는 800 W까지의 계통 공급에 양식 F.1.2를 사용하는 간소화 절차를 두고 있지만, 모든 계통 운영사가 아직 받아들이는 것은 아니며 2027년 3월 1일까지는 이전 버전을 적용할 수 있으므로, 구매 전에 계통 운영사에 절차를 확인하십시오.',
          'EEG 2027 법안은 2026년 7월 29일 내각에서 의결되었습니다. 전문 매체는 같은 인버터 뒤의 저장장치는 플러그인 장치의 일부로 간주되지만, 자체 인버터가 있는 AC 저장장치는 포함되지 않는다고 보도합니다. 의회는 아직 통과시키지 않았으므로 법은 아닙니다.',
          '입문용 가격은 내려가고 있습니다. ADAC(2026년 9월)는 1.5~2 kWh 저장장치 단품을 대략 300~1,000유로로 제시합니다. WattCycle은 Intersolar Europe 2026을 위해 최대 10 kWh 발코니 배터리를 발표했으며, EU 가격이나 출시일은 공개되지 않았습니다.',
          '발코니 배터리에 대한 EU 차원의 보조금은 찾지 못했습니다. 지원이 있다면 국가, 주 또는 지자체가 정합니다.',
          '이 글은 시장 동향을 설명합니다. 「발코니 태양광에 배터리가 필요할까요?」의 가구별 테스트를 대신하지 않습니다. 구매 가격과 역송 보상의 차이로 절약되는 금액이 배터리 비용을 넘을 때만 이익이 됩니다.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '저장장치가 포함된 플러그인 시스템에 대한 독일 규정은 아직 변동 중입니다',
        content: [
          '**독일 제품 표준 DIN VDE V 0126-95는 저장장치가 없는 플러그인 태양광 장치를 다룹니다.** 표준 기관 DKE는 FAQ에서 이 표준이 에너지 저장 장치가 포함된 플러그인 태양광 장치를 다루지 않으며, 그런 장치에는 추가 요건이 필요하다고 설명합니다. 위원회 DKE/K 373은 추가 부분의 계획을 시작했지만 일정은 밝히지 않았습니다. 이 표준은 2025년 12월에 발표되었고, 인버터 출력은 최대 800 VA, 일반 가정용 플러그를 사용할 때 모듈 합계 최대 960 W를 허용합니다.',
          '**등록과 관련하여 독일 소비자센터는 (2026년 10월 21일 갱신된 페이지에서) 저장장치를 현재 Marktstammdatenregister(MaStR) 등록과 별도로 계통 운영사에도 신고해야 하며, 간소화된 등록은 아직 적용되지 않는다고 밝힙니다.** 800 W까지의 계통 공급에 대해서는 간소화 절차(양식 F.1.2)를 둔 개정 VDE-AR-N 4105를 안내하지만, 모든 계통 운영사가 아직 받아들이는 것은 아니며 2027년 3월 1일까지는 이전 버전을 계속 사용할 수 있다고 덧붙입니다. 저장장치가 없는 플러그인 태양광 장치는 Solarpaket I(2024년 5월) 이후 계통 운영사에 직접 알릴 필요가 없습니다. ADAC(2026년 9월)는 저장장치 등록을 더 간단하게 설명하며(MaStR만, 한 달 이내), 비표준 구성은 사전에 계통 운영사와 확인하라고 권고합니다. 출처마다 설명이 다르므로 계통 운영사에 절차를 확인하십시오.',
          '**규정은 움직이고 있지만 아직 확정되지 않았습니다.** 전문 매체는 내각이 2026년 7월 29일 EEG 2027 법안을 의결했고, 같은 인버터 뒤의 저장장치를 플러그인 장치의 일부로 간주할 것이라고 보도합니다. 자체 인버터가 있는 AC 저장장치는 포함되지 않습니다. 언론 보도에 따르면 연방의회는 2026년 9월 24일 제1독회를, 2026년 10월 5일 전문가 청문회를 열었습니다. 최종 표결은 남아 있으며 문구는 아직 바뀔 수 있습니다. 이전 작업 초안과 관련해 인용한 판매업체 블로그는 중립적인 출처가 아닙니다. 설치를 시작하는 날 어떤 절차가 적용되는지 계통 운영사에 문의하십시오.',
          '임대인의 규정이 또 하나의 층을 더합니다. drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다. [임대인과 주택협회를 위한 발코니 태양광](/ko/balcony-solar/balcony-solar-housing-associations-b2b-2027)을 참고하십시오.',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: '하드웨어: 입문용 가격 하락과 제조사의 주장',
        content: [
          '**입문용 가격은 내려가고 있습니다.** Lidl은 독일에서 2026년 5월 21~27일에 TRONIC 2.24 kWh 추가용 배터리(LiFePO4)를 399유로, Lidl Plus 앱 이용 시 299유로에 판매했습니다. 인버터가 내장되어 있지 않아 기존 발코니 설비를 확장하는 용도이며, 프로모션은 이미 끝났을 가능성이 높으므로 현재 가격을 확인하십시오.',
          '**일반적인 가격(ADAC, 2026년 9월):** 1.5~2 kWh 저장장치 단품은 약 300~1,000유로입니다. 인버터가 내장되지 않은 보급형은 약 300~400유로부터, 중급 플러그 앤 플레이형은 약 450~750유로, 프리미엄 하이브리드형은 약 600~1,000유로입니다. ADAC가 인용한 HTW 베를린의 880 W 시스템 계산에서 투자 회수 기간은 1인 가구의 경우 저장장치 없이 약 4년, 있으면 약 5년이고 3인 가구는 약 3년 대 4년입니다. 순위가 있는 구매 가이드는 [최고의 발코니 태양광 배터리](/ko/balcony-solar/best-balcony-solar-batteries-2026)를 참고하십시오.',
          '**신제품에는 독립 시험이 아닌 제조사의 주장이 따라옵니다.** WattCycle은 뮌헨에서 열린 Intersolar Europe 2026에서 최대 10 kWh, 양방향 출력 2.5 kW 또는 5 kW의 올인원 발코니 저장 시스템을 발표했으며, 플러그 앤 플레이라고 합니다(제조사의 주장, 2026년 6월 20일 보도자료). EU 가격이나 출시 시기는 공개된 것을 찾지 못했습니다.',
          'DIN VDE V 0126-95가 저장장치를 제외하므로, 복합 시스템의 AC 출력이 독일에서 플러그인 장치를 규정하는 800 VA 한도 안에 있는지 확인하고, 제품이 어떤 등록 경로를 염두에 두고 설계되었는지 판매자에게 문의하십시오.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: '요금 차익 논거',
        content: [
          '**많은 신제품 뒤에 있는 차익 아이디어는 연구의 뒷받침이 있지만 한계도 있습니다.** 동료 심사를 거친 시뮬레이션 연구(Lorenz, Bayer, Pruckner, Staake, Hopf, *Energy Policy*, 209권, 2026, DOI 10.1016/j.enpol.2025.114952)는 448가구의 5년치 데이터를 사용했습니다. 10 kWh 배터리의 경우 고정 요금제와 비슷한 가격 수준의 동적 요금제는 단순한 자가소비 전략에서도 순이익이 12.7% 높았습니다. 완벽한 전일 가격 예측을 쓰면 단순 예측보다 약 6% 더 늘었습니다.',
          '이 연구는 주택용 PV-배터리 시스템을 모델링한 것이며 플러그인 키트가 아닙니다. 투자 회수를 약속하는 것이 아니라 방향을 보여 주는 것으로 읽으십시오. 또한 동적 요금제는 가격 변동 위험을 수반합니다.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: '동향과 개별 결정: 이 글이 말하지 않는 것',
        content: [
          '**배터리가 퍼지고 있다고 해서 필수라거나 모든 가구에서 이익이 된다는 뜻은 아닙니다.** 개별 결정은 여전히 [발코니 태양광에 배터리가 필요할까요?](/ko/balcony-solar/do-you-need-a-battery-balcony-solar)의 테스트에 달려 있습니다. 구매 가격과 역송 보상의 차이가 추가 비용을 정당화할 만큼 큰가 하는 것입니다. 네덜란드처럼 2027년 1월 1일에 넷미터링이 끝나는 곳에서는 이 차이가 커집니다. [네덜란드 넷미터링 2027년 종료](/ko/balcony-solar/net-metering-rollback-balcony-solar-2027)를 참고하십시오.',
          '발코니 배터리에 대한 EU 차원의 보조금은 찾지 못했습니다. 프로그램이 있다면 국가, 주 또는 지자체가 정하므로, 구매 전에 거주 지역 당국의 공식 페이지를 확인하십시오. 독일에 대해서는 [Balkonkraftwerk: 독일 발코니 태양광 규정](/ko/balcony-solar/balkonkraftwerk-germany-rules)이 저장장치가 없는 시스템의 등록 규정을 다룹니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95 FAQ',
            description: '표준 기관: 이 표준은 저장장치가 포함된 플러그인 장치를 다루지 않음. 800 VA와 960 W 한도. DKE/K 373이 저장장치 부분을 계획',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — 플러그인 태양광의 법률과 표준',
            description: '저장장치 등록, MaStR, 양식 F.1.2 및 계통 운영사 규정에 관한 소비자 정보(2026년 10월 21일 갱신)',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '판매업체 블로그(중립적이지 않음): VDE-AR-N 4105:2026-03 및 2026년 7월 18일의 이전 EEG 2027 작업 초안',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart — Lidl TRONIC 2.24 kWh 배터리',
            description: '프로모션 기간, 399유로/299유로 가격, 인버터 미내장',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle — Intersolar Europe 2026 보도자료(Barchart 경유)',
            description: '제조사 발표: 최대 10 kWh, 양방향 출력 2.5 kW 또는 5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. — Energy Policy 209(2026), 논문 114952',
            description: '448가구 시뮬레이션 연구: 동적 요금제와 주택용 PV-배터리 시스템의 이익',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia와 발코니 태양광 저장장치',
            description: '저장장치를 금지하는 Vonovia 지침과 논란이 있는 법적 평가에 관한 보도',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: '저장장치 가격대, MaStR 등록 및 투자 회수 예시',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: '독일 연방경제부 — EEG 2027 정부 법안',
            description: '2026년 7월 29일 내각 초안(독일어 PDF); 저장장치 정의는 전문 매체 보도에 따름',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: '2026년 7월 29일 내각 의결, 연방의회 제1독회와 전문가 청문회(2026년 10월 16일자 페이지)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이제 발코니 태양광에 배터리 저장장치가 필수입니까?',
            a: '아니요. 배터리가 늘고 있지만 설치를 요구하는 규정은 없습니다. 배터리가 우리 집에서 이익이 되는지는 구매 가격과 역송 보상의 차이에 달려 있습니다. 판단 테스트는 「발코니 태양광에 배터리가 필요할까요?」에 있습니다.',
          },
          {
            q: '발코니 태양광 배터리에 대한 EU 보조금이 있습니까?',
            a: 'EU 차원의 보조금은 찾지 못했습니다. 발코니 배터리에 대한 지원이 있다면 국가, 주 또는 지자체가 정합니다. 구매 전에 거주 지역 당국의 공식 페이지와 프로그램 조건을 확인하십시오.',
          },
          {
            q: 'DIN VDE V 0126-95는 배터리가 있는 발코니 시스템을 다룹니까?',
            a: '아니요. 표준 기관 DKE는 이 표준이 에너지 저장 장치가 포함된 플러그인 태양광 장치를 다루지 않는다고 밝혔습니다. 위원회 DKE/K 373은 저장장치 포함 장치를 위한 추가 부분의 계획을 시작했지만 일정은 밝히지 않았습니다.',
          },
          {
            q: '독일에서 배터리가 있는 발코니 시스템은 어떻게 등록합니까?',
            a: '독일 소비자센터(2026년 10월 21일 갱신된 페이지)에 따르면 저장장치는 현재 MaStR 등록과 별도로 계통 운영사에도 신고해야 하며, 간소화된 등록은 아직 적용되지 않습니다. 개정된 VDE-AR-N 4105에는 800 W까지의 계통 공급에 양식 F.1.2를 사용하는 간소화 절차가 있지만, 모든 계통 운영사가 아직 받아들이는 것은 아닙니다. ADAC는 절차를 더 간단하게 설명하므로 계통 운영사에 절차를 확인하십시오.',
          },
          {
            q: '발코니 발전 시스템용 배터리는 얼마입니까?',
            a: 'ADAC(2026년 9월)에 따르면 1.5~2 kWh 저장장치 단품은 약 300~1,000유로입니다. 보급형은 약 300~400유로, 중급은 약 450~750유로, 프리미엄은 약 600~1,000유로입니다. 모듈 2~4장과 1.5~2 kWh 저장장치가 포함된 완제품 세트는 약 700~1,700유로입니다. 가격은 자주 바뀌며, ADAC의 예시 계산에서는 저장장치로 인해 투자 회수 기간이 약 1년 늘어납니다.',
          },
          {
            q: 'EEG 2027은 발코니 배터리에 무엇을 바꿉니까?',
            a: '전문 매체에 따르면 2026년 7월 29일 내각이 의결한 EEG 2027 법안은 같은 인버터 뒤의 저장장치를 플러그인 장치의 일부로 간주하지만, 자체 인버터가 있는 AC 저장장치는 포함되지 않습니다. 연방의회가 표결을 마치지 않아 아직 법이 아니므로 위에서 설명한 등록 규정이 계속 적용됩니다.',
          },
          {
            q: 'WattCycle 발코니 배터리는 무엇입니까?',
            a: '제조사의 2026년 6월 20일 보도자료에 따르면 최대 10 kWh, 양방향 출력 2.5 kW 또는 5 kW의 올인원 발코니 저장 시스템으로, Intersolar Europe 2026에서 공개되었습니다. 이는 제조사의 주장이며, EU 가격이나 출시 시기는 공개된 것을 찾지 못했습니다.',
          },
          {
            q: '동적 전기요금제는 배터리를 더 이익이 되게 합니까?',
            a: '동료 심사를 거친 448가구 시뮬레이션에서 고정 요금제와 비슷한 가격 수준의 동적 요금제는 10 kWh 배터리의 순이익을 12.7% 높였고, 완벽한 전일 예측은 단순 예측보다 약 6% 더 늘렸습니다. 이 연구는 지붕형 PV-배터리 시스템을 모델링한 것이며, 동적 요금제에는 가격 위험이 있습니다.',
          },
          {
            q: '임대인이 발코니 배터리를 금지할 수 있습니까?',
            a: '논란이 있습니다. 독일 임대차법은 세입자에게 플러그인 태양광 장치를 요구할 권리를 인정하지만(BGB 제554조), 이것이 저장장치를 포함하는지는 다툼이 있습니다. drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다. 서면으로 문의하고 조언을 구하십시오. 이는 법률 자문이 아닙니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[발코니 태양광에 배터리가 필요할까요?](/ko/balcony-solar/do-you-need-a-battery-balcony-solar) — 이 글이 바탕으로 삼는, 경제성을 우선하는 결정 테스트',
          '[Balkonkraftwerk: 독일 발코니 태양광 규정](/ko/balcony-solar/balkonkraftwerk-germany-rules) — 저장장치가 없는 시스템의 등록과 표준',
          '[최고의 발코니 태양광 배터리](/ko/balcony-solar/best-balcony-solar-batteries-2026) — 하드웨어 구매 가이드',
          '[네덜란드 넷미터링 2027년 종료](/ko/balcony-solar/net-metering-rollback-balcony-solar-2027) — 구매 가격과 역송 가격의 차이가 커지면 저장장치 판단이 어떻게 달라지는지',
          '[임대인과 주택협회를 위한 발코니 태양광](/ko/balcony-solar/balcony-solar-housing-associations-b2b-2027) — 배터리에 대한 임대인의 입장',
          '[스마트홈 로컬 에너지 관리](/ko/smart-home/local-smart-home-energy-management-2027) — 클러스터 간: 저장된 에너지를 위한 부하 이동 자동화',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-pt.webp',
    title: 'Baterias para energia solar de varanda em 2027: viram padrão?',
    seoTitle: 'Baterias solar de varanda 2027: regras, preços, retorno',
    intro: 'O armazenamento em bateria é um complemento cada vez mais comum da energia solar de varanda na Alemanha e na UE, mas não é obrigatório nem adequado para todas as casas, e as regras alemãs para sistemas plug-in com armazenamento ainda estão sendo escritas. Esta página resume o estado das regras, os preços de baterias de expansão e o que a pesquisa sobre arbitragem tarifária mostra ou não mostra. É um panorama de mercado, não uma recomendação de compra nem aconselhamento jurídico ou elétrico.',
    metaDescription: 'Baterias de varanda em 2027: a norma plug-in alemã exclui armazenamento, o registro muda e os preços caem. O que está verificado e quando armazenar compensa.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de energia solar de varanda avaliando se devem adicionar armazenamento em bateria em 2027',
    primaryTerm: 'bateria energia solar de varanda 2027',
    targetKeywords: [
      'bateria energia solar varanda 2027',
      'registro bateria varanda alemanha',
      'DIN VDE V 0126-95 armazenamento',
      'wattcycle bateria energia solar varanda',
    ],
    leadAnswerBlock: '**As baterias estão se tornando um complemento comum do solar de varanda, mas não são obrigatórias, e as regras alemãs para sistemas plug-in com armazenamento ainda não estão definidas.** A norma de produto DIN VDE V 0126-95, publicada em dezembro de 2025, cobre apenas dispositivos solares plug-in sem armazenamento; o comitê de normalização DKE/K 373 começou a planejar outra parte para dispositivos com armazenamento. A Verbraucherzentrale informa (página atualizada em 21 de outubro de 2026) que o armazenamento deve ser comunicado atualmente à operadora de rede além do Marktstammdatenregister, enquanto a regra de conexão revisada VDE-AR-N 4105 prevê um procedimento simplificado para injeção de até 800 W que nem todas as operadoras de rede aceitam ainda. O projeto de lei EEG 2027 aprovado pelo gabinete em 29 de julho de 2026 contaria, segundo relatos, o armazenamento atrás do mesmo inversor como parte de um dispositivo plug-in, mas ainda não é lei. O ADAC estima o armazenamento isolado em cerca de € 300 a € 1.000, e se uma bateria compensa continua dependendo da diferença entre o preço que você paga pela energia e o que recebe pela que injeta.',
    quickAnswerTop: {
      pt: {
        question: 'O armazenamento em bateria está se tornando padrão para a energia solar de varanda?',
        answer: 'Está ficando mais comum, mas não é obrigatório nem adequado para todas as casas. As baterias de expansão estão mais baratas, mas a norma de produto alemã DIN VDE V 0126-95 não cobre dispositivos plug-in com armazenamento e as regras de registro para armazenamento estão mudando. Se uma bateria compensa depende da diferença entre o que você paga pela energia comprada e o que recebe pela injetada.',
        bullets: [
          'A DIN VDE V 0126-95 (publicada em dezembro de 2025) cobre dispositivos solares plug-in sem armazenamento; o comitê DKE/K 373 apenas começou a planejar uma parte para dispositivos com armazenamento',
          'A Verbraucherzentrale informa (página atualizada em 21 de outubro de 2026) que o armazenamento deve ser comunicado atualmente à operadora de rede além do MaStR; o registro simplificado ainda não o cobre',
          'Segundo a Verbraucherzentrale, a VDE-AR-N 4105 revisada prevê um procedimento simplificado (formulário F.1.2) para injeção de até 800 W, mas nem todas as operadoras de rede o aceitam ainda e podem aplicar a versão anterior até 1º de março de 2027',
          'Um estudo de simulação de 2026 com 448 domicílios constatou que tarifas dinâmicas aumentaram em 12,7% o ganho líquido de uma bateria de 10 kWh; ele modela sistemas fotovoltaicos com bateria em telhado, não kits plug-in',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways', },
      { label: 'As regras alemãs para plug-in com armazenamento ainda estão mudando', anchor: '#storage-rules', },
      { label: 'Hardware: preços de entrada em queda e alegações dos fabricantes', anchor: '#new-hardware', },
      { label: 'O argumento da arbitragem tarifária', anchor: '#tariff-arbitrage', },
      { label: 'Tendência versus decisão individual: o que este artigo não diz', anchor: '#trend-vs-decision', },
      { label: 'Fontes', anchor: '#sources', },
      { label: 'Perguntas frequentes', anchor: '#faq', },
      { label: 'Leituras relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A norma de produto alemã DIN VDE V 0126-95, publicada em dezembro de 2025, cobre dispositivos solares plug-in sem armazenamento. O comitê de normalização DKE/K 373 começou a planejar uma parte adicional para dispositivos com armazenamento, sem cronograma.',
          'A Verbraucherzentrale informa (página atualizada em 21 de outubro de 2026) que o armazenamento deve ser comunicado atualmente à operadora de rede além do MaStR. A VDE-AR-N 4105 revisada prevê um procedimento simplificado com o formulário F.1.2 para injeção de até 800 W, mas nem todas as operadoras de rede o aceitam ainda e podem aplicar a versão anterior até 1º de março de 2027; confirme o procedimento com a sua operadora de rede antes de comprar.',
          'O projeto de lei EEG 2027 foi aprovado pelo gabinete em 29 de julho de 2026. A mídia especializada relata que ele contaria o armazenamento atrás do mesmo inversor como parte de um dispositivo plug-in, enquanto o armazenamento em CA com inversor próprio não seria coberto. O Parlamento ainda não o aprovou, portanto não é lei.',
          'Os preços de entrada estão caindo. O ADAC (setembro de 2026) estima o armazenamento isolado de 1,5 a 2 kWh em cerca de € 300 a € 1.000. A WattCycle anunciou para a Intersolar Europe 2026 uma bateria de varanda de até 10 kWh; não há preço na UE nem data de disponibilidade divulgados.',
          'Não encontramos nenhum subsídio em nível de UE para baterias de varanda. O apoio, onde existe, é definido por países, estados ou municípios.',
          'Esta página descreve uma tendência de mercado. Ela não substitui o teste de "Você precisa de uma bateria para energia solar de varanda?": uma bateria só compensa se a diferença economizada entre preço de compra e pagamento pela injeção superar o custo dela.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'As regras alemãs para plug-in com armazenamento ainda estão mudando',
        content: [
          '**A norma de produto alemã DIN VDE V 0126-95 cobre dispositivos solares plug-in sem armazenamento.** O órgão de normalização DKE afirma em seu FAQ que a norma não cobre dispositivos solares plug-in com unidade de armazenamento de energia, que exigem requisitos adicionais. O comitê DKE/K 373 começou a planejar uma parte adicional, mas não informa cronograma. A norma foi publicada em dezembro de 2025 e permite até 800 VA de potência do inversor e, com uma tomada doméstica normal, até 960 W de módulos.',
          '**Sobre o registro, a Verbraucherzentrale informa (página atualizada em 21 de outubro de 2026) que o armazenamento deve ser comunicado atualmente à operadora de rede além do Marktstammdatenregister (MaStR), e que o registro simplificado ainda não o cobre.** Para injeção de até 800 W, ela aponta a VDE-AR-N 4105 revisada com um procedimento simplificado (formulário F.1.2), mas observa que nem todas as operadoras de rede o aceitam ainda e que podem continuar usando a versão anterior até 1º de março de 2027. Dispositivos solares plug-in sem armazenamento não precisam mais ser comunicados diretamente à operadora de rede desde o Solarpaket I (maio de 2024). O ADAC (setembro de 2026) descreve o registro do armazenamento de forma mais simples (apenas MaStR, em até um mês) e aconselha esclarecer configurações fora do padrão com a operadora de rede; como as fontes divergem, confirme o procedimento com a sua operadora de rede.',
          '**As regras estão em movimento, mas ainda não são definitivas.** A mídia especializada relata que o gabinete aprovou o projeto de lei EEG 2027 em 29 de julho de 2026 e que ele contaria o armazenamento atrás do mesmo inversor como parte de um dispositivo plug-in; o armazenamento em CA com inversor próprio não seria coberto. Segundo a imprensa, o Bundestag realizou a primeira leitura em 24 de setembro de 2026 e uma audiência de especialistas em 5 de outubro de 2026; a votação final está pendente e o texto ainda pode mudar. O blog de varejista que citamos para o rascunho anterior não é uma fonte neutra. Pergunte à sua operadora de rede qual procedimento vale no dia da colocação em operação.',
          'As regras dos locadores acrescentam outra camada: uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral. Veja [Energia solar de varanda para proprietários e associações habitacionais](/pt/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: preços de entrada em queda e alegações dos fabricantes',
        content: [
          '**Os preços de entrada estão caindo.** A Lidl vendeu na Alemanha, de 21 a 27 de maio de 2026, uma bateria de expansão TRONIC de 2,24 kWh (LiFePO4) por € 399, ou € 299 com o app Lidl Plus. Ela não tem inversor integrado e portanto amplia uma instalação de varanda existente; a promoção provavelmente já terminou, então confira os preços atuais.',
          '**Preços típicos (ADAC, setembro de 2026):** o armazenamento isolado de 1,5 a 2 kWh custa cerca de € 300 a € 1.000. Modelos básicos sem inversor integrado começam em torno de € 300 a € 400, modelos plug-and-play de faixa intermediária custam cerca de € 450 a € 750 e modelos híbridos premium cerca de € 600 a € 1.000. No cálculo do ADAC com a HTW Berlim para um sistema de 880 W, o retorno do investimento é de cerca de 4 anos sem armazenamento e 5 com ele em uma casa de uma pessoa, e de cerca de 3 contra 4 anos em uma casa de três pessoas. Para um guia de compra com ranking, veja [As melhores baterias para solar de varanda](/pt/balcony-solar/best-balcony-solar-batteries-2026).',
          '**Produtos novos vêm com alegações dos fabricantes, não com testes independentes.** Na Intersolar Europe 2026, em Munique, a WattCycle anunciou um sistema de armazenamento de varanda tudo-em-um de até 10 kWh e 2,5 kW ou 5 kW de potência bidirecional, plug-and-play (alegações do fabricante, comunicado de 20 de junho de 2026). Não encontramos preço nem data de disponibilidade publicados para a UE.',
          'Como a DIN VDE V 0126-95 exclui armazenamento, verifique se a potência CA de um sistema combinado permanece dentro do limite de 800 VA que define um dispositivo plug-in na Alemanha e pergunte ao vendedor para qual via de registro o produto foi projetado.',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: 'O argumento da arbitragem tarifária',
        content: [
          '**A ideia de arbitragem por trás de muitos produtos novos tem respaldo em pesquisa, com limites.** Um estudo de simulação revisado por pares (Lorenz, Bayer, Pruckner, Staake e Hopf, *Energy Policy*, volume 209, 2026, DOI 10.1016/j.enpol.2025.114952) usou cinco anos de dados de 448 domicílios. Para uma bateria de 10 kWh, tarifas dinâmicas em nível de preço semelhante ao das tarifas fixas renderam ganhos líquidos 12,7% maiores, mesmo com uma estratégia simples de autoconsumo. Uma previsão perfeita de preços do dia seguinte acrescentou cerca de 6% em relação a previsões ingênuas.',
          'O estudo modela sistemas fotovoltaicos com bateria residenciais, não kits plug-in, então leia-o como uma direção, não como promessa de retorno. Tarifas dinâmicas também expõem você a oscilações de preço.',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: 'Tendência versus decisão individual: o que este artigo não diz',
        content: [
          '**As baterias estão se espalhando, mas isso não significa que uma seja obrigatória nem que compense em todas as casas.** A decisão individual continua dependendo do teste de [Você precisa de uma bateria para energia solar de varanda?](/pt/balcony-solar/do-you-need-a-battery-balcony-solar): a diferença entre o seu preço de compra e o seu pagamento pela injeção é grande o bastante para justificar o custo adicional? Onde o net metering termina, como nos Países Baixos a partir de 1º de janeiro de 2027, essa diferença aumenta; veja [Países Baixos: o fim do net metering em 2027](/pt/balcony-solar/net-metering-rollback-balcony-solar-2027).',
          'Não encontramos nenhum subsídio em nível de UE para baterias de varanda. Os programas, onde existem, são definidos por países, estados ou municípios, então consulte a página oficial do seu órgão local antes de comprar. Para a Alemanha, [Balkonkraftwerk: as regras da Alemanha](/pt/balcony-solar/balkonkraftwerk-germany-rules) cobre as regras de registro de sistemas sem armazenamento.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Órgão de normalização: a norma não cobre dispositivos plug-in com armazenamento; limites de 800 VA e 960 W; DKE/K 373 planeja uma parte de armazenamento',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Informação ao consumidor (atualizada em 21 de outubro de 2026) sobre registro de armazenamento, MaStR, formulário F.1.2 e regras da operadora de rede',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Blog de varejista (não neutro): VDE-AR-N 4105:2026-03 e o rascunho anterior do EEG 2027 de 18 de julho de 2026',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart – bateria Lidl TRONIC de 2,24 kWh',
            description: 'Datas da promoção, preços de € 399/€ 299, sem inversor integrado',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle – comunicado da Intersolar Europe 2026 (via Barchart)',
            description: 'Anúncio do fabricante: até 10 kWh, potência bidirecional de 2,5 kW ou 5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. – Energy Policy 209 (2026), artigo 114952',
            description: 'Estudo de simulação com 448 domicílios: tarifas dinâmicas e ganhos de sistemas fotovoltaicos com bateria',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia e armazenamento em solar de varanda',
            description: 'Reportagem sobre a diretriz da Vonovia que proíbe armazenamento e a avaliação jurídica contestada',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: 'Faixas de preço do armazenamento, registro no MaStR e exemplos de retorno do investimento',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: 'Ministério Federal da Economia — projeto de lei EEG 2027',
            description: 'Projeto do gabinete de 29 de julho de 2026 (PDF em alemão); a definição de armazenamento conforme relatada pela mídia especializada',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: 'Decisão do gabinete de 29 de julho de 2026, primeira leitura no Bundestag e audiência de especialistas (página de 16 de outubro de 2026)',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O armazenamento em bateria já é obrigatório para a energia solar de varanda?',
            a: 'Não. As baterias estão ficando mais comuns, mas nada exige uma. Se uma bateria compensa na sua casa depende da diferença entre o seu preço de compra e o seu pagamento pela injeção; o teste está em "Você precisa de uma bateria para energia solar de varanda?".',
          },
          {
            q: 'Existe subsídio da UE para baterias de energia solar de varanda?',
            a: 'Não encontramos nenhum subsídio em nível de UE. O apoio a baterias de varanda, onde existe, é definido por países, estados ou municípios. Consulte a página oficial do seu órgão local e as condições do programa antes de comprar.',
          },
          {
            q: 'A DIN VDE V 0126-95 cobre sistemas de varanda com bateria?',
            a: 'Não. O órgão de normalização DKE afirma que a norma não cobre dispositivos solares plug-in com armazenamento de energia. O comitê DKE/K 373 começou a planejar uma parte adicional para dispositivos com armazenamento, mas não informa cronograma.',
          },
          {
            q: 'Como registro um sistema de varanda com bateria na Alemanha?',
            a: 'A Verbraucherzentrale informa (página atualizada em 21 de outubro de 2026) que o armazenamento deve ser comunicado atualmente à operadora de rede além do MaStR e que o registro simplificado ainda não o cobre. Com a VDE-AR-N 4105 revisada existe um procedimento simplificado com o formulário F.1.2 para injeção de até 800 W, mas nem todas as operadoras de rede o aceitam ainda. O ADAC descreve o processo de forma mais simples; confirme o procedimento com a sua operadora de rede.',
          },
          {
            q: 'Quanto custa uma bateria para um sistema solar de varanda?',
            a: 'Segundo o ADAC (setembro de 2026), o armazenamento isolado de 1,5 a 2 kWh custa cerca de € 300 a € 1.000: modelos básicos em torno de € 300 a € 400, faixa intermediária em torno de € 450 a € 750, premium em torno de € 600 a € 1.000. Kits completos com 2 a 4 módulos e 1,5 a 2 kWh de armazenamento ficam em cerca de € 700 a € 1.700. Os preços mudam com frequência, e no cálculo de exemplo do ADAC o armazenamento prolonga o retorno do investimento em cerca de um ano.',
          },
          {
            q: 'O que o EEG 2027 muda para as baterias de varanda?',
            a: 'A mídia especializada relata que o projeto de lei EEG 2027, aprovado pelo gabinete em 29 de julho de 2026, contaria o armazenamento atrás do mesmo inversor como parte de um dispositivo plug-in, enquanto o armazenamento em CA com inversor próprio não seria coberto. Ainda não é lei porque o Bundestag não concluiu a votação; por isso, as regras de registro descritas acima continuam valendo.',
          },
          {
            q: 'O que é a bateria de varanda da WattCycle?',
            a: 'Segundo o comunicado do fabricante de 20 de junho de 2026, um sistema de armazenamento de varanda tudo-em-um de até 10 kWh e 2,5 kW ou 5 kW de potência bidirecional, apresentado na Intersolar Europe 2026. São alegações do fabricante, e não encontramos preço nem data de disponibilidade publicados para a UE.',
          },
          {
            q: 'As tarifas de eletricidade dinâmicas tornam as baterias mais vantajosas?',
            a: 'Em uma simulação revisada por pares com 448 domicílios, tarifas dinâmicas em nível de preço semelhante ao das fixas deram a uma bateria de 10 kWh ganhos líquidos 12,7% maiores, e uma previsão perfeita do dia seguinte acrescentou cerca de 6% em relação a previsões ingênuas. O estudo modela sistemas fotovoltaicos com bateria em telhado, e tarifas dinâmicas trazem risco de preço.',
          },
          {
            q: 'Meu locador pode proibir uma bateria de varanda?',
            a: 'Isso é contestado. O direito de locação alemão dá aos inquilinos um direito a dispositivos solares plug-in (§ 554 BGB), mas se isso inclui armazenamento é discutido. Uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral. Pergunte por escrito e busque orientação; isto não é aconselhamento jurídico.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Você precisa de uma bateria para energia solar de varanda?](/pt/balcony-solar/do-you-need-a-battery-balcony-solar) — o teste de decisão centrado na economia em que esta página se apoia',
          '[Balkonkraftwerk: as regras da Alemanha](/pt/balcony-solar/balkonkraftwerk-germany-rules) — registro e normas para sistemas sem armazenamento',
          '[As melhores baterias para energia solar de varanda](/pt/balcony-solar/best-balcony-solar-batteries-2026) — guia de compra de hardware',
          '[Países Baixos: o fim do net metering em 2027](/pt/balcony-solar/net-metering-rollback-balcony-solar-2027) — como uma diferença maior entre preço de compra e de injeção muda o caso do armazenamento',
          '[Energia solar de varanda para proprietários e associações habitacionais](/pt/balcony-solar/balcony-solar-housing-associations-b2b-2027) — posições dos locadores sobre baterias',
          '[Gestão local de energia na casa inteligente](/pt/smart-home/local-smart-home-energy-management-2027) — entre clusters: automação de deslocamento de carga para a energia armazenada',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-zh.webp',
    title: '2027年阳台光伏电池：储能会成为标配吗？',
    seoTitle: '2027年阳台光伏电池：德国规则、价格与何时划算',
    intro: '电池储能正成为德国和欧盟阳台光伏越来越常见的配件，但它既不是强制要求，也不适合每个家庭，而且德国针对带储能的插拔式系统的规则仍在制定中。本页梳理规则现状、加装电池的价格，以及电价套利研究能说明和不能说明的内容。这是一份市场概览，不是购买建议，也不构成法律或电气方面的建议。',
    metaDescription: '德国插拔式光伏标准不含储能，登记规则仍在变动，入门价格下降。梳理阳台电池哪些信息已核实、储能何时划算，以及电价套利研究的适用范围。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-31',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '正在评估2027年是否要增加电池储能的阳台光伏购买者',
    primaryTerm: '2027年阳台光伏电池',
    targetKeywords: ['阳台光伏电池 2027', '德国阳台光伏电池登记', 'DIN VDE V 0126-95 储能', 'wattcycle 阳台光伏电池'],
    leadAnswerBlock: '**电池正在成为阳台光伏的常见加装件，但并非必需，德国针对带储能的即插即用系统的规则也尚未定论。** 2025年12月发布的产品标准DIN VDE V 0126-95仅涵盖不带储能的即插即用光伏设备；标准委员会DKE/K 373已开始规划针对带储能设备的另一部分。德国消费者中心（Verbraucherzentrale）表示（页面更新于2026年10月21日），储能目前除在Marktstammdatenregister登记外，还须向电网运营商申报；修订后的并网规则VDE-AR-N 4105为不超过800 W的馈入提供了简化流程，但并非所有电网运营商都已接受。据报道，内阁于2026年7月29日通过的EEG 2027法案草案，会把位于同一逆变器之后的储能视为即插即用设备的一部分，但它尚未成为法律。ADAC给出的单独储能价格约为300至1,000欧元，电池是否划算仍取决于购电价格与上网收益之间的差额。',
    quickAnswerTop: {
      zh: {
        question: '电池储能正在成为阳台光伏的标准配置吗？',
        answer: '它正变得更常见，但并非强制要求，也不适合每个家庭。加装电池越来越便宜，但德国产品标准DIN VDE V 0126-95并不涵盖带储能的插拔式设备，储能的登记规则也在变化。电池是否划算，取决于您的购电价与上网电量所得之间的差距。',
        bullets: [
          'DIN VDE V 0126-95（2025年12月发布）涵盖不带储能的插拔式光伏设备；委员会DKE/K 373才刚开始规划针对带储能设备的部分',
          '德国消费者中心（页面更新于2026年10月21日）表示，储能目前除在MaStR登记外，还须向电网运营商申报；简化登记尚不适用于储能',
          '据德国消费者中心称，修订后的VDE-AR-N 4105为不超过800 W的馈入提供了简化流程（表格F.1.2），但并非所有电网运营商都已接受，且在2027年3月1日前可继续适用旧版本',
          '2026年一项涵盖448户家庭的模拟研究发现，动态电价使10 kWh电池的净收益提高12.7%；该研究模拟的是屋顶光伏电池系统，而非插拔式套装',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '要点速览', anchor: '#key-takeaways', },
      { label: '德国针对带储能插拔式系统的规则仍在变动', anchor: '#storage-rules', },
      { label: '硬件：入门价格下降与厂商宣称', anchor: '#new-hardware', },
      { label: '电价套利的依据', anchor: '#tariff-arbitrage', },
      { label: '趋势与个人决策：本文没有说的是什么', anchor: '#trend-vs-decision', },
      { label: '资料来源', anchor: '#sources', },
      { label: '常见问题', anchor: '#faq', },
      { label: '相关阅读', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2025年12月发布的德国产品标准DIN VDE V 0126-95涵盖不带储能的插拔式光伏设备。标准委员会DKE/K 373已开始规划针对带储能设备的另一部分，但没有时间表。',
          '德国消费者中心（页面更新于2026年10月21日）表示，储能目前除在MaStR登记外，还须向电网运营商申报。修订后的VDE-AR-N 4105为不超过800 W的馈入提供了使用表格F.1.2的简化流程，但并非所有电网运营商都已接受，且在2027年3月1日前可继续适用旧版本，因此购买前请向您的电网运营商确认流程。',
          'EEG 2027法案草案已于2026年7月29日由内阁通过。专业媒体报道称，位于同一逆变器之后的储能将被视为即插即用设备的一部分，而带独立逆变器的交流储能则不在涵盖范围内。议会尚未通过该法案，因此它还不是法律。',
          '入门价格正在下降。ADAC（2026年9月）给出的1.5至2 kWh单独储能价格约为300至1,000欧元。WattCycle为Intersolar Europe 2026发布了最高10 kWh的阳台电池；目前未公布欧盟价格或上市日期。',
          '我们没有找到针对阳台电池的欧盟层面补贴。补贴如有，由各国、各州或市政当局设定。',
          '本页描述的是市场趋势，并不取代“阳台光伏需要电池吗？”中的家庭测试：只有当购电价与上网补偿之间省下的差距超过电池成本时，电池才划算。',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '德国针对带储能插拔式系统的规则仍在变动',
        content: [
          '**德国产品标准DIN VDE V 0126-95涵盖不带储能的插拔式光伏设备。** 标准机构DKE在其常见问题中说明，该标准不涵盖带储能单元的插拔式光伏设备，这类设备需要附加要求。委员会DKE/K 373已开始规划另一部分，但未给出时间表。该标准于2025年12月发布，允许逆变器输出最高800 VA，使用普通家用插头时组件功率合计最高960 W。',
          '**关于登记，德国消费者中心表示（页面更新于2026年10月21日），储能目前除在Marktstammdatenregister（MaStR）登记外，还须向电网运营商申报，简化登记尚不适用于储能。** 对于不超过800 W的馈入，它指向修订后的VDE-AR-N 4105及其简化流程（表格F.1.2），但提醒说并非所有电网运营商都已接受，且他们在2027年3月1日前可继续使用旧版本。自Solarpaket I（2024年5月）起，不带储能的即插即用光伏设备无需再直接通知电网运营商。ADAC（2026年9月）对储能登记的描述更为简单（仅需MaStR，须在一个月内完成），并建议非标准配置事先与电网运营商确认；由于各来源说法不一，请向您的电网运营商确认流程。',
          '**规则正在变化，但尚未定论。** 专业媒体报道称，内阁于2026年7月29日通过了EEG 2027法案草案，位于同一逆变器之后的储能将被视为即插即用设备的一部分；带独立逆变器的交流储能不在涵盖范围内。据媒体报道，联邦议院于2026年9月24日进行了一读，并于2026年10月5日举行了专家听证；最终表决尚未进行，措辞仍可能变化。我们为早先工作草案引用的零售商博客并非中立来源。请向您的电网运营商确认，在您调试系统当天适用哪种流程。',
          '房东的规定又增加了一层：drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题。参见[面向房东与住房协会的阳台光伏](/zh/balcony-solar/balcony-solar-housing-associations-b2b-2027)。',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: '硬件：入门价格下降与厂商宣称',
        content: [
          '**入门价格正在下降。** Lidl于2026年5月21日至27日在德国销售TRONIC 2.24 kWh（磷酸铁锂）加装电池，常规价399欧元，使用Lidl Plus应用为299欧元。它不带内置逆变器，因此是对现有阳台系统的扩展；促销很可能已结束，请查看当前价格。',
          '**常见价格（ADAC，2026年9月）：** 1.5至2 kWh的单独储能约为300至1,000欧元。不带内置逆变器的入门型号约从300至400欧元起，中端即插即用型号约450至750欧元，高端混合型号约600至1,000欧元。在ADAC引用的HTW柏林对880 W系统的测算中，单人家庭不带储能约4年回本、带储能约5年，三人家庭分别约3年和4年。带排名的选购指南请参阅[最佳阳台光伏电池](/zh/balcony-solar/best-balcony-solar-batteries-2026)。',
          '**新产品附带的是厂商宣称，而非独立测试。** 在慕尼黑举行的Intersolar Europe 2026上，WattCycle发布了一款一体化阳台储能系统，容量最高10 kWh，双向功率为2.5 kW或5 kW，即插即用（厂商宣称，2026年6月20日新闻稿）。我们没有找到已公布的欧盟售价或上市时间。',
          '由于DIN VDE V 0126-95不涵盖储能，请确认组合系统的交流输出保持在德国界定插拔式设备的800 VA上限内，并询问卖家该产品针对哪种登记途径设计。',
        ],
      },
      tariffArbitrage: {
        id: 'tariff-arbitrage',
        title: '电价套利的依据',
        content: [
          '**许多新产品背后的套利思路有研究支持，但有局限。** 一项经同行评审的模拟研究（Lorenz、Bayer、Pruckner、Staake和Hopf，*Energy Policy*，第209卷，2026年，DOI 10.1016/j.enpol.2025.114952）使用了448户家庭五年的数据。对于10 kWh电池，在价格水平与固定电价相近的情况下，动态电价即使采用简单的自发自用策略，净收益也高出12.7%。采用完美的日前价格预测，比朴素预测再多出约6%。',
          '该研究模拟的是住宅光伏电池系统，而非插拔式套装，因此请把它当作一个方向，而不是回本承诺。动态电价还会让您面临价格波动。',
        ],
      },
      trendVsDecision: {
        id: 'trend-vs-decision',
        title: '趋势与个人决策：本文没有说的是什么',
        content: [
          '**电池正在普及，但这并不意味着必须安装，也不意味着每个家庭都划算。** 个人决策仍取决于[阳台光伏需要电池吗？](/zh/balcony-solar/do-you-need-a-battery-balcony-solar)中的测试：您的购电价与上网补偿之间的差距是否大到足以抵消新增成本？在净计量终止的地方，例如荷兰自2027年1月1日起，这一差距会扩大；参见[荷兰净计量政策2027年终止](/zh/balcony-solar/net-metering-rollback-balcony-solar-2027)。',
          '我们没有找到针对阳台电池的欧盟层面补贴。项目如有，由各国、各州或市政当局设定，因此购买前请查看当地主管部门的官方页面。对于德国，[Balkonkraftwerk：德国阳台光伏规则](/zh/balcony-solar/balkonkraftwerk-germany-rules)介绍了不带储能系统的登记规则。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        links: [
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95常见问题',
            description: '标准机构：该标准不涵盖带储能的插拔式设备；800 VA与960 W上限；DKE/K 373规划储能部分',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — 插拔式光伏的法律与标准',
            description: '消费者信息（更新于2026年10月21日）：储能登记、MaStR、表格F.1.2及电网运营商规则',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '零售商博客（非中立）：VDE-AR-N 4105:2026-03及2026年7月18日的早期EEG 2027工作草案',
          },
          {
            url: 'https://www.homeandsmart.de/billig-tricks-beim-lidl-speicher-0032-369875',
            title: 'homeandsmart — Lidl TRONIC 2.24 kWh电池',
            description: '促销日期、399欧元/299欧元价格、不带内置逆变器',
          },
          {
            url: 'https://www.barchart.com/story/news/2566448/wattcycle-at-intersolar-europe-2026-munich-how-the-company-is-setting-new-standards-for-balcony-solar-storage',
            title: 'WattCycle — Intersolar Europe 2026新闻稿（经Barchart）',
            description: '厂商发布：最高10 kWh，双向功率2.5 kW或5 kW',
          },
          {
            url: 'https://doi.org/10.1016/j.enpol.2025.114952',
            title: 'Lorenz et al. — Energy Policy 209（2026），文章114952',
            description: '448户家庭的模拟研究：动态电价与住宅光伏电池系统的收益',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia与阳台光伏储能',
            description: '关于Vonovia禁止储能的指南及其有争议的法律评估的报道',
          },
          {
            url: 'https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk-speicher/',
            title: 'ADAC — Speicher für Balkonkraftwerk',
            description: '储能价格区间、MaStR登记及回本期示例',
          },
          {
            url: 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Downloads/Gesetz/2026/20260729-gesetzentwurf-eeg-stromsektor.pdf?__blob=publicationFile&v=8',
            title: '德国联邦经济部 — EEG 2027政府法案',
            description: '2026年7月29日内阁草案（德语PDF）；储能的定义以专业媒体报道为准',
          },
          {
            url: 'https://www.solaranlage-ratgeber.de/eeg-novelle-die-neuen-uebergangsregeln',
            title: 'solaranlage-ratgeber.de — EEG-Novelle 2026: Was für PV-Anlagen ab 2027 geplant ist',
            description: '2026年7月29日内阁决定、联邦议院一读及专家听证（页面日期2026年10月16日）',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '阳台光伏现在必须配电池吗？',
            a: '不必。电池越来越常见，但没有任何规定要求安装。电池对您的家庭是否划算，取决于购电价与上网补偿之间的差距；测试方法见“阳台光伏需要电池吗？”。',
          },
          {
            q: '阳台光伏电池有欧盟补贴吗？',
            a: '我们没有找到欧盟层面的补贴。阳台电池的支持如有，由各国、各州或市政当局设定。购买前请查看当地主管部门的官方页面和项目条款。',
          },
          {
            q: 'DIN VDE V 0126-95涵盖带电池的阳台系统吗？',
            a: '不涵盖。标准机构DKE说明，该标准不涵盖带储能的插拔式光伏设备。委员会DKE/K 373已开始规划针对带储能设备的另一部分，但未给出时间表。',
          },
          {
            q: '在德国如何登记带电池的阳台系统？',
            a: '德国消费者中心（页面更新于2026年10月21日）表示，储能目前除在MaStR登记外，还须向电网运营商申报，简化登记尚不适用于储能。修订后的VDE-AR-N 4105为不超过800 W的馈入提供了使用表格F.1.2的简化流程，但并非所有电网运营商都已接受。ADAC对流程的描述更为简单，因此请向您的电网运营商确认流程。',
          },
          {
            q: '阳台光伏电池要多少钱？',
            a: '据ADAC（2026年9月），1.5至2 kWh的单独储能约为300至1,000欧元：入门型号约300至400欧元，中端约450至750欧元，高端约600至1,000欧元。含2至4块组件和1.5至2 kWh储能的完整套装约为700至1,700欧元。价格变动频繁，在ADAC的示例测算中，储能会使回本期延长约一年。',
          },
          {
            q: 'EEG 2027对阳台电池有什么改变？',
            a: '专业媒体报道称，内阁于2026年7月29日通过的EEG 2027法案草案会把位于同一逆变器之后的储能视为即插即用设备的一部分，而带独立逆变器的交流储能不在涵盖范围内。由于联邦议院尚未完成表决，它还不是法律，上述登记规则仍然适用。',
          },
          {
            q: 'WattCycle阳台电池是什么？',
            a: '据厂商2026年6月20日的新闻稿，这是一款一体化阳台储能系统，容量最高10 kWh，双向功率2.5 kW或5 kW，在Intersolar Europe 2026上展出。这些是厂商宣称，我们没有找到已公布的欧盟售价或上市时间。',
          },
          {
            q: '动态电价会让电池更划算吗？',
            a: '在一项涵盖448户家庭的经同行评审的模拟中，价格水平与固定电价相近的动态电价使10 kWh电池的净收益高出12.7%，完美的日前预测比朴素预测再多出约6%。该研究模拟的是屋顶光伏电池系统，且动态电价存在价格风险。',
          },
          {
            q: '房东可以禁止阳台电池吗？',
            a: '这存在争议。德国租赁法赋予租户安装插拔式光伏设备的请求权（BGB第554条），但是否包括储能存在争论。drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题。请以书面方式询问并寻求专业意见；这不构成法律建议。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[阳台光伏需要电池吗？](/zh/balcony-solar/do-you-need-a-battery-balcony-solar) — 本页所依据的、以经济性为先的决策测试',
          '[Balkonkraftwerk：德国阳台光伏规则](/zh/balcony-solar/balkonkraftwerk-germany-rules) — 不带储能系统的登记与标准',
          '[最佳阳台光伏电池](/zh/balcony-solar/best-balcony-solar-batteries-2026) — 硬件购买指南',
          '[荷兰净计量政策2027年终止](/zh/balcony-solar/net-metering-rollback-balcony-solar-2027) — 购电价与上网价差距扩大如何改变储能的判断',
          '[面向房东与住房协会的阳台光伏](/zh/balcony-solar/balcony-solar-housing-associations-b2b-2027) — 房东对电池的立场',
          '[本地智能家居能源管理](/zh/smart-home/local-smart-home-energy-management-2027) — 跨集群：为储存的电能做负荷转移的自动化',
        ],
      },
    },
  },
}
