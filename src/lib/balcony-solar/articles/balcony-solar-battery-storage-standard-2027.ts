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
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    current_hardware_mentioned: ['Lidl TRONIC 2.24 kWh add-on battery', 'WattCycle 10 kWh balcony battery'],
    theme: 'Balcony Solar Foundations',
    heroImage: '/images/balcony-solar-battery-storage-standard-2027-overview-hero-en.webp',
    title: 'Balcony Solar Batteries in 2027: Is Storage Becoming Standard?',
    seoTitle: 'Balcony Solar Batteries 2027: Rules, Prices, Payoff',
    intro: 'Battery storage is a growing add-on for balcony solar in Germany and the EU, but it is neither required nor right for every household, and the German rules for plug-in systems with storage are still being written. This page summarizes where the rules stand, what add-on battery prices look like and what the tariff-arbitrage research does and does not show. It is a market overview, not a purchase recommendation and not legal or electrical advice.',
    metaDescription: 'The German plug-in standard excludes storage, registration rules are in flux and prices fall. What is verified about balcony batteries, and when storage pays.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**Batteries are becoming a common add-on for balcony solar, but they are not required, and the German rules for plug-in systems with storage are still unsettled.** The product standard DIN VDE V 0126-95, published in December 2025, covers plug-in solar devices without storage only; the standards committee DKE/K 373 has started planning a further part for devices with storage. The Verbraucherzentrale states that storage must currently be registered with the grid operator by a licensed electrician, while a revised connection rule (VDE-AR-N 4105:2026-03) is reported to simplify the process for small storage up to 800 VA. Entry prices are falling, but whether a battery pays off still depends on the gap between your import price and your export payment.',
    quickAnswerTop: {
      en: {
        question: 'Is battery storage becoming standard for balcony solar?',
        answer: 'It is becoming more common, but it is not required and not right for every household. Add-on batteries are getting cheaper (Lidl sold a 2.24 kWh unit in Germany for €299 with a Lidl Plus card, €399 regular, in a promotion from May 21 to 27, 2026), but the German product standard DIN VDE V 0126-95 does not cover plug-in devices with storage and the registration rules for storage are in flux. Whether a battery pays off depends on the gap between what you pay for imported power and what your exports earn.',
        bullets: [
          'DIN VDE V 0126-95 (published December 2025) covers plug-in solar devices without storage; the committee DKE/K 373 has only started planning a part for devices with storage',
          'The Verbraucherzentrale states that storage must currently be registered with the grid operator by a licensed electrician; the simplified registration route does not cover storage',
          'Trade media report that VDE-AR-N 4105:2026-03 introduces a simplified connection process for small storage up to 800 VA; confirm the procedure with your grid operator',
          'Lidl\'s 2.24 kWh add-on battery cost €299 with a Lidl Plus card (€399 regular) in a May 21–27, 2026 promotion; it has no built-in inverter',
          'A 2026 simulation study of 448 households found dynamic tariffs raised net gains from a 10 kWh battery by 12.7%; it models rooftop PV-battery systems, not plug-in kits',
        ],
        updatedDate: '2026-10-19',
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
          'The Verbraucherzentrale states that storage must currently be registered with the grid operator by a licensed electrician. Trade media report a simplified connection process for storage up to 800 VA under VDE-AR-N 4105:2026-03, so confirm the procedure with your grid operator before buying.',
          'Entry prices are falling: Lidl\'s 2.24 kWh add-on battery was €299 with Lidl Plus (€399 regular) in a May 2026 promotion. WattCycle announced a balcony battery with up to 10 kWh for Intersolar Europe 2026; no EU price or availability date is published.',
          'We found no EU-wide subsidy for balcony batteries. Support, where it exists, is set by countries, states or municipalities.',
          'This page describes a market trend. It does not override the household test in "Do You Need a Battery for Balcony Solar?": a battery pays off only if the saved gap between import price and export payment outweighs its cost.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'German Rules for Plug-In Storage Are Still Moving',
        content: [
          '**The German product standard DIN VDE V 0126-95 covers plug-in solar devices without storage.** The standards body DKE states in its FAQ that the standard does not cover plug-in solar devices with an energy storage unit, which need additional requirements. Committee DKE/K 373 has started planning a further part but gives no timeline. The standard was published in December 2025 and allows up to 800 VA inverter output and, with a normal household plug, up to 960 W of modules.',
          '**On registration, the Verbraucherzentrale states that storage must currently be registered with the grid operator by a licensed electrician, who must also connect it.** The short registration in the Marktstammdatenregister (MaStR) that applies to plug-in solar devices does not apply to storage. Since the Solarpaket I (May 2024), the grid operator no longer has to be informed directly for plug-in solar devices without storage.',
          '**The rules are in motion, but not yet settled.** Trade media report that the revised connection rule VDE-AR-N 4105:2026-03 provides a simplified process (form F.1.2) for small storage and combined units up to 800 VA, and that a ministry working draft of EEG 2027 (July 18, 2026) would count storage behind the same inverter as part of a plug-in device. A working draft is not an adopted law, and the retailer blog we cite for this is not a neutral source. Ask your grid operator which procedure applies on the day you commission the system.',
          'Landlord rules add another layer: Vonovia\'s technical guideline reportedly bans batteries on balcony systems, a position consumer groups contest. See [Balcony Solar for Landlords and Housing Associations](/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: Falling Entry Prices and Manufacturer Claims',
        content: [
          '**Entry prices are falling.** Lidl sold a TRONIC 2.24 kWh LiFePO4 add-on battery in Germany from May 21 to 27, 2026 for €399, or €299 with the Lidl Plus app. It has no built-in inverter, so it extends an existing balcony system; the promotion has likely ended, so check current prices.',
          '**New products come with manufacturer claims, not independent tests.** At Intersolar Europe 2026 in Munich, WattCycle announced an all-in-one balcony storage system with up to 10 kWh and 2.5 kW or 5 kW bidirectional power, plug-and-play, with AI-based charge scheduling (press release of June 20, 2026). We found no published EU price or availability date.',
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
            description: 'Consumer-protection guidance on storage registration, MaStR and grid-operator rules',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Retailer blog (not neutral): VDE-AR-N 4105:2026-03 and the EEG 2027 working draft of July 18, 2026',
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
            a: 'The Verbraucherzentrale states that storage must currently be registered with the grid operator by a licensed electrician, who also connects it, and that the simplified MaStR registration does not apply to storage. Trade media report a simplified process for storage up to 800 VA under VDE-AR-N 4105:2026-03; confirm the procedure with your grid operator.',
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
            a: 'This is contested. German tenant law gives tenants a claim to plug-in solar devices (§ 554 BGB), but whether that covers storage is disputed. Vonovia\'s technical guideline reportedly bans batteries, and consumer groups call blanket bans problematic. Ask in writing and seek advice; this is not legal advice.',
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
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**تصبح البطاريات إضافة شائعة للطاقة الشمسية للشرفة، لكنها ليست إلزامية، والقواعد الألمانية للمنظومات القابلة للتوصيل بالمقبس مع التخزين لم تستقر بعد.** يغطي معيار المنتج DIN VDE V 0126-95، الصادر في ديسمبر 2025، الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين فقط؛ وقد بدأت لجنة المعايير DKE/K 373 التخطيط لجزء إضافي للأجهزة المزوّدة بتخزين. وتذكر منظمة حماية المستهلك الألمانية (Verbraucherzentrale) أن التخزين يجب حاليًا أن يسجّله كهربائي مرخّص لدى مشغّل الشبكة، بينما تفيد وسائل إعلام متخصصة بأن قاعدة الربط المنقّحة (VDE-AR-N 4105:2026-03) تبسّط الإجراءات للتخزين الصغير حتى 800 VA. أسعار الدخول تنخفض، لكن جدوى البطارية لا تزال تعتمد على الفرق بين سعر الشراء وتعويض التصدير.',
    quickAnswerTop: {
      ar: {
        question: 'هل يصبح تخزين البطاريات معيارًا للطاقة الشمسية للشرفة؟',
        answer: 'يزداد انتشاره، لكنه ليس إلزاميًا ولا يناسب كل أسرة. أصبحت بطاريات التوسعة أرخص (باعت Lidl في ألمانيا وحدة بسعة 2.24 kWh بسعر 299 يورو بحامل بطاقة Lidl Plus، و399 يورو بالسعر العادي، في عرض من 21 إلى 27 مايو 2026)، لكن معيار المنتج الألماني DIN VDE V 0126-95 لا يغطي الأجهزة القابلة للتوصيل بالمقبس مع التخزين، وقواعد تسجيل التخزين تتغير. وتعتمد جدوى البطارية على الفرق بين ما تدفعه مقابل الكهرباء المشتراة وما تكسبه من الكهرباء المُصدَّرة.',
        bullets: [
          'يغطي DIN VDE V 0126-95 (الصادر في ديسمبر 2025) الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين؛ ولجنة DKE/K 373 بدأت للتو التخطيط لجزء خاص بالأجهزة المزوّدة بتخزين',
          'تذكر Verbraucherzentrale أن التخزين يجب حاليًا أن يسجّله كهربائي مرخّص لدى مشغّل الشبكة، وأن مسار التسجيل المبسّط لا يشمل التخزين',
          'تفيد وسائل إعلام متخصصة بأن VDE-AR-N 4105:2026-03 تُدخل إجراء ربط مبسّطًا للتخزين الصغير حتى 800 VA؛ أكّد الإجراء مع مشغّل شبكتك',
          'بلغ سعر بطارية التوسعة من Lidl بسعة 2.24 kWh نحو 299 يورو بحامل بطاقة Lidl Plus (399 يورو بالسعر العادي) في عرض من 21 إلى 27 مايو 2026؛ وليس فيها عاكس مدمج',
          'وجدت دراسة محاكاة عام 2026 على 448 أسرة أن التعرفة الديناميكية رفعت صافي مكاسب بطارية 10 kWh بنسبة 12.7%؛ وهي تنمذج منظومات الخلايا الشمسية مع البطاريات على الأسطح، لا مجموعات التوصيل بالمقبس',
        ],
        updatedDate: '2026-10-19',
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
          'تذكر Verbraucherzentrale أن التخزين يجب حاليًا أن يسجّله كهربائي مرخّص لدى مشغّل الشبكة. وتفيد وسائل إعلام متخصصة بإجراء ربط مبسّط للتخزين حتى 800 VA بموجب VDE-AR-N 4105:2026-03، فأكّد الإجراء مع مشغّل شبكتك قبل الشراء.',
          'أسعار الدخول تنخفض: كانت بطارية التوسعة من Lidl بسعة 2.24 kWh بسعر 299 يورو مع Lidl Plus (399 يورو بالسعر العادي) في عرض مايو 2026. وأعلنت WattCycle لمعرض Intersolar Europe 2026 بطارية للشرفة بسعة تصل إلى 10 kWh؛ ولم يُنشر سعر في الاتحاد الأوروبي ولا موعد توفّر.',
          'لم نعثر على دعم على مستوى الاتحاد الأوروبي لبطاريات الشرفة. والدعم، إن وُجد، تحدده الدول أو الولايات أو البلديات.',
          'تصف هذه الصفحة اتجاهًا في السوق ولا تحل محل اختبار الأسرة في «هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟»: لا تُجدي البطارية إلا إذا تجاوز الفرق الموفَّر بين سعر الشراء وتعويض التصدير تكلفتها.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'القواعد الألمانية للمنظومات القابلة للتوصيل بالمقبس مع التخزين لا تزال تتغير',
        content: [
          '**يغطي معيار المنتج الألماني DIN VDE V 0126-95 الأجهزة الشمسية القابلة للتوصيل بالمقبس بدون تخزين.** تذكر هيئة المعايير DKE في أسئلتها الشائعة أن المعيار لا يغطي الأجهزة الشمسية القابلة للتوصيل بالمقبس المزوّدة بوحدة تخزين طاقة، وأنها تحتاج إلى متطلبات إضافية. وقد بدأت اللجنة DKE/K 373 التخطيط لجزء إضافي دون ذكر جدول زمني. صدر المعيار في ديسمبر 2025 ويسمح بخرج عاكس يصل إلى 800 VA، ومع مقبس منزلي عادي بقدرة ألواح إجمالية تصل إلى 960 W.',
          '**وبخصوص التسجيل، تذكر Verbraucherzentrale أن التخزين يجب حاليًا أن يسجّله كهربائي مرخّص لدى مشغّل الشبكة، وهو من يتولى توصيله أيضًا.** التسجيل المختصر في Marktstammdatenregister (MaStR) المطبّق على الأجهزة الشمسية القابلة للتوصيل بالمقبس لا ينطبق على التخزين. ومنذ Solarpaket I (مايو 2024) لم يعد لازمًا إبلاغ مشغّل الشبكة مباشرة بشأن الأجهزة القابلة للتوصيل بالمقبس بدون تخزين.',
          '**القواعد في حالة حركة، لكنها لم تستقر بعد.** تفيد وسائل إعلام متخصصة بأن قاعدة الربط المنقّحة VDE-AR-N 4105:2026-03 تنص على إجراء مبسّط (النموذج F.1.2) للتخزين الصغير والوحدات المدمجة حتى 800 VA، وبأن مسودة عمل لوزارة الاقتصاد الاتحادية بشأن EEG 2027 (18 يوليو 2026) ستعدّ التخزين الموجود خلف العاكس نفسه جزءًا من الجهاز القابل للتوصيل بالمقبس. مسودة العمل ليست قانونًا معتمدًا، ومدونة التاجر التي نستشهد بها في ذلك ليست مصدرًا محايدًا. اسأل مشغّل شبكتك عن الإجراء المنطبق يوم التشغيل.',
          'وتضيف قواعد المؤجّرين طبقة أخرى: تفيد التقارير بأن الإرشادات الفنية لشركة Vonovia تحظر البطاريات على منشآت الشرفات، وهو موقف تعترض عليه جمعيات المستهلكين. انظر [الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان](/ar/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'العتاد: انخفاض أسعار الدخول وادعاءات المصنّعين',
        content: [
          '**أسعار الدخول تنخفض.** باعت Lidl في ألمانيا، من 21 إلى 27 مايو 2026، بطارية توسعة TRONIC بسعة 2.24 kWh (LiFePO4) بسعر 399 يورو، أو 299 يورو عبر تطبيق Lidl Plus. ليس فيها عاكس مدمج، لذا فهي توسّع منشأة شرفة قائمة؛ ومن المرجح أن العرض انتهى، فتحقق من الأسعار الحالية.',
          '**تأتي المنتجات الجديدة بادعاءات المصنّعين لا باختبارات مستقلة.** في معرض Intersolar Europe 2026 في ميونخ، أعلنت WattCycle عن نظام تخزين متكامل للشرفة بسعة تصل إلى 10 kWh وبقدرة ثنائية الاتجاه 2.5 kW أو 5 kW، جاهز للتوصيل والتشغيل، مع جدولة شحن وتفريغ بالذكاء الاصطناعي (بيان صحفي بتاريخ 20 يونيو 2026). لم نعثر على سعر منشور في الاتحاد الأوروبي ولا على موعد توفّر.',
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
            description: 'إرشادات حماية المستهلك بشأن تسجيل التخزين وMaStR وقواعد مشغّل الشبكة',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'مدونة تاجر (غير محايدة): VDE-AR-N 4105:2026-03 ومسودة عمل EEG 2027 بتاريخ 18 يوليو 2026',
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
            a: 'تذكر Verbraucherzentrale أن التخزين يجب حاليًا أن يسجّله ويوصّله كهربائي مرخّص لدى مشغّل الشبكة، وأن تسجيل MaStR المبسّط لا ينطبق على التخزين. وتفيد وسائل إعلام متخصصة بإجراء مبسّط للتخزين حتى 800 VA بموجب VDE-AR-N 4105:2026-03؛ أكّد الإجراء مع مشغّل شبكتك.',
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
            a: 'هذا موضع خلاف. يمنح قانون الإيجار الألماني المستأجرين حقًا في الأجهزة الشمسية القابلة للتوصيل بالمقبس (§ 554 BGB)، لكن هل يشمل ذلك التخزين محل جدل. وتفيد التقارير بأن إرشادات Vonovia الفنية تحظر البطاريات، وترى جمعيات المستهلكين أن الحظر الشامل إشكالي. اسأل كتابيًا واستشر مختصًا؛ وهذه ليست استشارة قانونية.',
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
    metaDescription: 'Die deutsche Steckersolar-Norm schließt Speicher aus, Anmelderegeln sind im Fluss, Einstiegspreise sinken. Was belegt ist und wann sich ein Speicher lohnt.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**Batteriespeicher werden zum verbreiteten Zubehör für Balkonkraftwerke, sind aber nicht vorgeschrieben, und die deutschen Regeln für Steckersolargeräte mit Speicher sind noch nicht abschließend geklärt.** Die Produktnorm DIN VDE V 0126-95 vom Dezember 2025 gilt nur für Steckersolargeräte ohne Speicher; das Normungsgremium DKE/K 373 hat begonnen, einen weiteren Teil für Geräte mit Speicher zu planen. Die Verbraucherzentrale gibt an, dass Speicher derzeit von einem zugelassenen Elektriker beim Netzbetreiber angemeldet werden müssen; für kleine Speicher bis 800 VA soll eine überarbeitete Anschlussregel (VDE-AR-N 4105:2026-03) laut Fachmedien ein vereinfachtes Verfahren bringen. Die Einstiegspreise sinken, ob sich ein Speicher lohnt, hängt aber weiterhin von der Lücke zwischen Bezugspreis und Einspeisevergütung ab.',
    quickAnswerTop: {
      de: {
        question: 'Wird Batteriespeicher zum Standard bei Balkonkraftwerken?',
        answer: 'Er wird häufiger, ist aber nicht vorgeschrieben und nicht für jeden Haushalt sinnvoll. Zusatzspeicher werden günstiger (Lidl verkaufte in Deutschland vom 21. bis 27. Mai 2026 eine Einheit mit 2,24 kWh für 299 € mit Lidl-Plus-Karte, regulär 399 €), aber die Produktnorm DIN VDE V 0126-95 deckt Steckersolargeräte mit Speicher nicht ab, und die Anmelderegeln für Speicher sind im Fluss. Ob sich ein Speicher lohnt, hängt von der Lücke zwischen dem Preis für bezogenen Strom und der Vergütung für Einspeisung ab.',
        bullets: [
          'DIN VDE V 0126-95 (veröffentlicht im Dezember 2025) gilt für Steckersolargeräte ohne Speicher; das Gremium DKE/K 373 hat die Planung eines Teils für Geräte mit Speicher erst begonnen',
          'Die Verbraucherzentrale gibt an, dass Speicher derzeit von einem zugelassenen Elektriker beim Netzbetreiber angemeldet werden müssen; die vereinfachte Anmeldung gilt für Speicher nicht',
          'Fachmedien berichten, dass VDE-AR-N 4105:2026-03 ein vereinfachtes Anschlussverfahren für kleine Speicher bis 800 VA einführt; klären Sie das Verfahren mit Ihrem Netzbetreiber',
          'Der Zusatzspeicher von Lidl mit 2,24 kWh kostete in einer Aktion vom 21. bis 27. Mai 2026 mit Lidl-Plus-Karte 299 € (regulär 399 €); er hat keinen integrierten Wechselrichter',
          'Eine Simulationsstudie von 2026 mit 448 Haushalten ermittelte, dass dynamische Tarife den Nettogewinn eines 10-kWh-Speichers um 12,7 % erhöhten; sie modelliert PV-Speicher-Systeme auf dem Dach, keine Steckersolar-Sets',
        ],
        updatedDate: '2026-10-19',
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
          'Die Verbraucherzentrale gibt an, dass Speicher derzeit von einem zugelassenen Elektriker beim Netzbetreiber angemeldet werden müssen. Fachmedien berichten von einem vereinfachten Anschlussverfahren für Speicher bis 800 VA nach VDE-AR-N 4105:2026-03; klären Sie das Verfahren daher vor dem Kauf mit Ihrem Netzbetreiber.',
          'Die Einstiegspreise sinken: Der Zusatzspeicher von Lidl mit 2,24 kWh kostete in einer Aktion im Mai 2026 mit Lidl Plus 299 € (regulär 399 €). WattCycle kündigte für die Intersolar Europe 2026 einen Balkonspeicher mit bis zu 10 kWh an; ein EU-Preis oder Liefertermin ist nicht veröffentlicht.',
          'Eine EU-weite Förderung für Balkonspeicher haben wir nicht gefunden. Fördermittel, soweit vorhanden, legen Staaten, Länder oder Kommunen fest.',
          'Diese Seite beschreibt einen Markttrend. Sie ersetzt nicht den Haushaltstest in „Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?“: Ein Speicher lohnt sich nur, wenn die eingesparte Lücke zwischen Bezugspreis und Einspeisevergütung seine Kosten übersteigt.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Die deutschen Regeln für Steckersolar mit Speicher sind noch im Fluss',
        content: [
          '**Die deutsche Produktnorm DIN VDE V 0126-95 gilt für Steckersolargeräte ohne Speicher.** Das Normungsgremium DKE erklärt in seinen FAQ, dass die Norm Steckersolargeräte mit Energiespeicher nicht abdeckt; für diese sind zusätzliche Anforderungen nötig. Das Komitee DKE/K 373 hat die Planung eines weiteren Teils begonnen, nennt aber keinen Zeitplan. Die Norm wurde im Dezember 2025 veröffentlicht und erlaubt bis zu 800 VA Wechselrichterleistung und, mit normalem Haushaltsstecker, bis zu 960 W Modulleistung.',
          '**Zur Anmeldung gibt die Verbraucherzentrale an, dass Speicher derzeit von einem zugelassenen Elektriker beim Netzbetreiber angemeldet werden müssen, der sie auch anschließen muss.** Die kurze Anmeldung im Marktstammdatenregister (MaStR), die für Steckersolargeräte gilt, gilt für Speicher nicht. Seit dem Solarpaket I (Mai 2024) muss der Netzbetreiber bei Steckersolargeräten ohne Speicher nicht mehr direkt informiert werden.',
          '**Die Regeln sind in Bewegung, aber noch nicht abschließend.** Fachmedien berichten, dass die überarbeitete Anschlussregel VDE-AR-N 4105:2026-03 für kleine Speicher und kombinierte Einheiten bis 800 VA ein vereinfachtes Verfahren (Formular F.1.2) vorsieht und dass ein Referentenentwurf des Ministeriums zum EEG 2027 (18. Juli 2026) Speicher hinter demselben Wechselrichter als Teil eines Steckersolargeräts zählen würde. Ein Referentenentwurf ist kein beschlossenes Gesetz, und der Händler-Blog, den wir dafür nennen, ist keine neutrale Quelle. Fragen Sie Ihren Netzbetreiber, welches Verfahren am Tag der Inbetriebnahme gilt.',
          'Hinzu kommen Vorgaben von Vermietern: Die technische Richtlinie von Vonovia verbietet Berichten zufolge Batterien an Balkonanlagen, was Verbraucherverbände bestreiten. Siehe [Balkonsolar für Vermieter und Wohnungsgesellschaften](/de/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: Sinkende Einstiegspreise und Herstellerangaben',
        content: [
          '**Die Einstiegspreise sinken.** Lidl verkaufte vom 21. bis 27. Mai 2026 in Deutschland einen TRONIC-Zusatzspeicher mit 2,24 kWh (LiFePO4) für 399 €, mit der Lidl-Plus-App für 299 €. Er hat keinen integrierten Wechselrichter und erweitert daher eine bestehende Balkonanlage; die Aktion ist vermutlich beendet, prüfen Sie also aktuelle Preise.',
          '**Neue Produkte kommen mit Herstellerangaben, nicht mit unabhängigen Tests.** Auf der Intersolar Europe 2026 in München kündigte WattCycle ein Balkon-Speichersystem aus einer Hand mit bis zu 10 kWh und 2,5 kW oder 5 kW bidirektionaler Leistung an, Plug-and-play und mit KI-gestützter Lade- und Entladeplanung (Pressemitteilung vom 20. Juni 2026). Einen veröffentlichten EU-Preis oder Liefertermin haben wir nicht gefunden.',
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
            description: 'Verbraucherinformation zu Speicheranmeldung, MaStR und Netzbetreiberregeln',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Händler-Blog (nicht neutral): VDE-AR-N 4105:2026-03 und der EEG-2027-Referentenentwurf vom 18. Juli 2026',
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
            a: 'Die Verbraucherzentrale gibt an, dass Speicher derzeit von einem zugelassenen Elektriker beim Netzbetreiber angemeldet und angeschlossen werden müssen und dass die vereinfachte MaStR-Anmeldung für Speicher nicht gilt. Fachmedien berichten von einem vereinfachten Verfahren für Speicher bis 800 VA nach VDE-AR-N 4105:2026-03; klären Sie das Verfahren mit Ihrem Netzbetreiber.',
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
            a: 'Das ist umstritten. Das deutsche Mietrecht gibt Mietern einen Anspruch auf Steckersolargeräte (§ 554 BGB), ob das Speicher einschließt, ist strittig. Die technische Richtlinie von Vonovia verbietet Berichten zufolge Batterien, und Verbraucherverbände halten pauschale Verbote für problematisch. Fragen Sie schriftlich nach und holen Sie Rat ein; dies ist keine Rechtsberatung.',
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
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**Las baterías se están convirtiendo en un complemento habitual de la energía solar de balcón, pero no son obligatorias y las reglas alemanas para sistemas plug-in con almacenamiento aún no están asentadas.** La norma de producto DIN VDE V 0126-95, publicada en diciembre de 2025, solo cubre dispositivos solares plug-in sin almacenamiento; el comité de normalización DKE/K 373 ha empezado a planificar una parte adicional para dispositivos con almacenamiento. La Verbraucherzentrale indica que el almacenamiento debe registrarse actualmente ante el gestor de red por un electricista autorizado, mientras que una regla de conexión revisada (VDE-AR-N 4105:2026-03) simplificaría, según la prensa especializada, el proceso para almacenamientos pequeños de hasta 800 VA. Los precios de entrada bajan, pero que una batería compense sigue dependiendo de la diferencia entre tu precio de compra y tu pago por inyección.',
    quickAnswerTop: {
      es: {
        question: '¿Se está convirtiendo el almacenamiento en batería en estándar para la energía solar de balcón?',
        answer: 'Se está volviendo más común, pero no es obligatorio ni adecuado para todos los hogares. Las baterías de ampliación son más baratas (Lidl vendió en Alemania una unidad de 2,24 kWh por 299 € con la tarjeta Lidl Plus, 399 € el precio normal, en una promoción del 21 al 27 de mayo de 2026), pero la norma de producto alemana DIN VDE V 0126-95 no cubre los dispositivos plug-in con almacenamiento y las reglas de registro del almacenamiento están cambiando. Que una batería compense depende de la diferencia entre lo que pagas por la electricidad comprada y lo que cobras por la inyectada.',
        bullets: [
          'La DIN VDE V 0126-95 (publicada en diciembre de 2025) cubre los dispositivos solares plug-in sin almacenamiento; el comité DKE/K 373 solo ha empezado a planificar una parte para dispositivos con almacenamiento',
          'La Verbraucherzentrale indica que el almacenamiento debe registrarse actualmente ante el gestor de red por un electricista autorizado; el registro simplificado no cubre el almacenamiento',
          'La prensa especializada informa de que la VDE-AR-N 4105:2026-03 introduce un proceso de conexión simplificado para almacenamientos pequeños de hasta 800 VA; confirma el procedimiento con tu gestor de red',
          'La batería de ampliación de 2,24 kWh de Lidl costó 299 € con la tarjeta Lidl Plus (399 € el precio normal) en una promoción del 21 al 27 de mayo de 2026; no tiene inversor integrado',
          'Un estudio de simulación de 2026 con 448 hogares halló que las tarifas dinámicas aumentaban un 12,7 % la ganancia neta de una batería de 10 kWh; modela sistemas fotovoltaicos con batería en tejado, no kits plug-in',
        ],
        updatedDate: '2026-10-19',
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
          'La Verbraucherzentrale indica que el almacenamiento debe registrarse actualmente ante el gestor de red por un electricista autorizado. La prensa especializada informa de un proceso de conexión simplificado para almacenamiento de hasta 800 VA según la VDE-AR-N 4105:2026-03, así que confirma el procedimiento con tu gestor de red antes de comprar.',
          'Los precios de entrada bajan: la batería de ampliación de 2,24 kWh de Lidl costó 299 € con Lidl Plus (399 € el precio normal) en una promoción de mayo de 2026. WattCycle anunció para Intersolar Europe 2026 una batería de balcón de hasta 10 kWh; no se ha publicado precio ni fecha de disponibilidad en la UE.',
          'No encontramos ninguna subvención de ámbito UE para baterías de balcón. Las ayudas, donde existen, las fijan países, estados o municipios.',
          'Esta página describe una tendencia del mercado. No sustituye la prueba de «¿Necesitas una batería para la energía solar de balcón?»: una batería solo compensa si la diferencia ahorrada entre precio de compra y pago por inyección supera su coste.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Las reglas alemanas para el plug-in con almacenamiento siguen cambiando',
        content: [
          '**La norma de producto alemana DIN VDE V 0126-95 cubre los dispositivos solares plug-in sin almacenamiento.** El organismo de normalización DKE indica en sus preguntas frecuentes que la norma no cubre los dispositivos solares plug-in con unidad de almacenamiento de energía, que requieren requisitos adicionales. El comité DKE/K 373 ha empezado a planificar una parte adicional, pero no da calendario. La norma se publicó en diciembre de 2025 y permite hasta 800 VA de potencia del inversor y, con un enchufe doméstico normal, hasta 960 W de módulos.',
          '**Sobre el registro, la Verbraucherzentrale indica que el almacenamiento debe registrarse actualmente ante el gestor de red por un electricista autorizado, que también debe conectarlo.** El registro breve en el Marktstammdatenregister (MaStR) que se aplica a los dispositivos solares plug-in no se aplica al almacenamiento. Desde el Solarpaket I (mayo de 2024) ya no hace falta informar directamente al gestor de red en el caso de dispositivos plug-in sin almacenamiento.',
          '**Las reglas están en movimiento, pero aún no asentadas.** La prensa especializada informa de que la regla de conexión revisada VDE-AR-N 4105:2026-03 prevé un proceso simplificado (formulario F.1.2) para almacenamientos pequeños y unidades combinadas de hasta 800 VA, y de que un borrador de trabajo del ministerio para la EEG 2027 (18 de julio de 2026) contaría el almacenamiento detrás del mismo inversor como parte de un dispositivo plug-in. Un borrador de trabajo no es una ley aprobada, y el blog de un minorista que citamos para esto no es una fuente neutral. Pregunta a tu gestor de red qué procedimiento se aplica el día de la puesta en servicio.',
          'Las normas de los arrendadores añaden otra capa: la directriz técnica de Vonovia prohibiría, según informes, las baterías en instalaciones de balcón, una postura que las asociaciones de consumidores cuestionan. Consulta [Energía solar de balcón para propietarios y asociaciones de vivienda](/es/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: precios de entrada a la baja y afirmaciones de los fabricantes',
        content: [
          '**Los precios de entrada bajan.** Lidl vendió en Alemania del 21 al 27 de mayo de 2026 una batería de ampliación TRONIC de 2,24 kWh (LiFePO4) por 399 €, o 299 € con la app Lidl Plus. No tiene inversor integrado, por lo que amplía una instalación de balcón existente; es probable que la promoción haya terminado, así que consulta los precios actuales.',
          '**Los productos nuevos llegan con afirmaciones de los fabricantes, no con pruebas independientes.** En Intersolar Europe 2026 en Múnich, WattCycle anunció un sistema de almacenamiento de balcón todo en uno de hasta 10 kWh y 2,5 kW o 5 kW de potencia bidireccional, plug-and-play, con programación de carga basada en IA (nota de prensa del 20 de junio de 2026). No encontramos precio ni fecha de disponibilidad publicados para la UE.',
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
            description: 'Información de protección al consumidor sobre registro del almacenamiento, MaStR y reglas del gestor de red',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Blog de un minorista (no neutral): VDE-AR-N 4105:2026-03 y el borrador de trabajo EEG 2027 del 18 de julio de 2026',
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
            a: 'La Verbraucherzentrale indica que el almacenamiento debe registrarse actualmente ante el gestor de red y conectarse por un electricista autorizado, y que el registro simplificado en el MaStR no se aplica al almacenamiento. La prensa especializada informa de un proceso simplificado para almacenamiento de hasta 800 VA según la VDE-AR-N 4105:2026-03; confirma el procedimiento con tu gestor de red.',
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
            a: 'Es un tema discutido. El derecho de arrendamientos alemán da a los inquilinos un derecho a los dispositivos solares plug-in (§ 554 BGB), pero si eso incluye el almacenamiento es objeto de debate. La directriz técnica de Vonovia prohibiría las baterías según informes, y las asociaciones de consumidores consideran problemáticas las prohibiciones generales. Pregunta por escrito y busca asesoramiento; esto no es asesoramiento jurídico.',
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
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**Les batteries deviennent un complément courant du solaire de balcon, mais elles ne sont pas obligatoires, et les règles allemandes pour les kits plug-in avec stockage ne sont pas encore stabilisées.** La norme produit DIN VDE V 0126-95, publiée en décembre 2025, ne couvre que les appareils solaires plug-in sans stockage ; le comité de normalisation DKE/K 373 a commencé à planifier une partie supplémentaire pour les appareils avec stockage. La Verbraucherzentrale indique que le stockage doit actuellement être déclaré au gestionnaire de réseau par un électricien agréé, tandis qu\'une règle de raccordement révisée (VDE-AR-N 4105:2026-03) simplifierait, selon la presse spécialisée, la procédure pour les petits stockages jusqu\'à 800 VA. Les prix d\'entrée baissent, mais l\'intérêt d\'une batterie dépend toujours de l\'écart entre votre prix d\'achat et votre rémunération d\'injection.',
    quickAnswerTop: {
      fr: {
        question: 'Le stockage par batterie devient-il la norme pour le solaire de balcon ?',
        answer: 'Il se répand, mais il n\'est pas obligatoire ni adapté à tous les foyers. Les batteries d\'appoint deviennent moins chères (Lidl a vendu en Allemagne une unité de 2,24 kWh à 299 € avec la carte Lidl Plus, 399 € au tarif normal, lors d\'une promotion du 21 au 27 mai 2026), mais la norme produit allemande DIN VDE V 0126-95 ne couvre pas les appareils plug-in avec stockage et les règles d\'enregistrement du stockage évoluent. L\'intérêt d\'une batterie dépend de l\'écart entre le prix de l\'électricité achetée et la rémunération de votre injection.',
        bullets: [
          'La DIN VDE V 0126-95 (publiée en décembre 2025) couvre les appareils solaires plug-in sans stockage ; le comité DKE/K 373 n\'a fait que commencer à planifier une partie pour les appareils avec stockage',
          'La Verbraucherzentrale indique que le stockage doit actuellement être déclaré au gestionnaire de réseau par un électricien agréé ; la déclaration simplifiée ne couvre pas le stockage',
          'La presse spécialisée rapporte que la VDE-AR-N 4105:2026-03 introduit un raccordement simplifié pour les petits stockages jusqu\'à 800 VA ; confirmez la procédure auprès de votre gestionnaire de réseau',
          'La batterie d\'appoint de 2,24 kWh de Lidl coûtait 299 € avec la carte Lidl Plus (399 € au tarif normal) lors d\'une promotion du 21 au 27 mai 2026 ; elle n\'a pas d\'onduleur intégré',
          'Une étude de simulation de 2026 portant sur 448 foyers a trouvé que les tarifs dynamiques augmentaient de 12,7 % le gain net d\'une batterie de 10 kWh ; elle modélise des systèmes PV-batterie en toiture, pas des kits plug-in',
        ],
        updatedDate: '2026-10-19',
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
          'La Verbraucherzentrale indique que le stockage doit actuellement être déclaré au gestionnaire de réseau par un électricien agréé. La presse spécialisée rapporte un raccordement simplifié pour le stockage jusqu\'à 800 VA selon la VDE-AR-N 4105:2026-03 ; confirmez donc la procédure auprès de votre gestionnaire de réseau avant l\'achat.',
          'Les prix d\'entrée baissent : la batterie d\'appoint de 2,24 kWh de Lidl était à 299 € avec Lidl Plus (399 € au tarif normal) lors d\'une promotion de mai 2026. WattCycle a annoncé pour l\'Intersolar Europe 2026 une batterie de balcon jusqu\'à 10 kWh ; aucun prix ni date de disponibilité dans l\'UE n\'est publié.',
          'Nous n\'avons trouvé aucune aide européenne pour les batteries de balcon. Les aides, lorsqu\'elles existent, sont fixées par les pays, les régions ou les communes.',
          'Cette page décrit une tendance du marché. Elle ne remplace pas le test de « Faut-il une batterie pour le solaire de balcon ? » : une batterie n\'est rentable que si l\'écart économisé entre prix d\'achat et rémunération d\'injection dépasse son coût.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'Les règles allemandes pour le plug-in avec stockage évoluent encore',
        content: [
          '**La norme produit allemande DIN VDE V 0126-95 couvre les appareils solaires plug-in sans stockage.** L\'organisme de normalisation DKE indique dans sa FAQ que la norme ne couvre pas les appareils solaires plug-in avec unité de stockage d\'énergie, qui nécessitent des exigences supplémentaires. Le comité DKE/K 373 a commencé à planifier une partie supplémentaire sans donner de calendrier. La norme a été publiée en décembre 2025 et autorise jusqu\'à 800 VA de puissance d\'onduleur et, avec une prise domestique normale, jusqu\'à 960 W de modules.',
          '**Pour la déclaration, la Verbraucherzentrale indique que le stockage doit actuellement être déclaré au gestionnaire de réseau par un électricien agréé, qui doit aussi le raccorder.** L\'enregistrement court dans le Marktstammdatenregister (MaStR) qui s\'applique aux appareils solaires plug-in ne s\'applique pas au stockage. Depuis le Solarpaket I (mai 2024), le gestionnaire de réseau n\'a plus à être informé directement pour les appareils plug-in sans stockage.',
          '**Les règles évoluent, mais ne sont pas encore stabilisées.** La presse spécialisée rapporte que la règle de raccordement révisée VDE-AR-N 4105:2026-03 prévoit une procédure simplifiée (formulaire F.1.2) pour les petits stockages et unités combinées jusqu\'à 800 VA, et qu\'un projet de travail du ministère pour l\'EEG 2027 (18 juillet 2026) compterait le stockage placé derrière le même onduleur comme partie d\'un appareil plug-in. Un projet de travail n\'est pas une loi adoptée, et le blog de revendeur que nous citons n\'est pas une source neutre. Demandez à votre gestionnaire de réseau quelle procédure s\'applique le jour de la mise en service.',
          'Les règles des bailleurs ajoutent une couche : la directive technique de Vonovia interdirait, selon la presse, les batteries sur les installations de balcon, position que des associations de consommateurs contestent. Voir [Le solaire de balcon pour les bailleurs et les organismes de logement](/fr/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Matériel : baisse des prix d\'entrée et déclarations des fabricants',
        content: [
          '**Les prix d\'entrée baissent.** Lidl a vendu en Allemagne du 21 au 27 mai 2026 une batterie d\'appoint TRONIC de 2,24 kWh (LiFePO4) à 399 €, ou 299 € avec l\'application Lidl Plus. Elle n\'a pas d\'onduleur intégré et complète donc une installation de balcon existante ; la promotion est probablement terminée, vérifiez les prix actuels.',
          '**Les nouveaux produits s\'accompagnent d\'affirmations de fabricants, pas de tests indépendants.** À l\'Intersolar Europe 2026 à Munich, WattCycle a annoncé un système de stockage de balcon tout-en-un jusqu\'à 10 kWh et 2,5 kW ou 5 kW de puissance bidirectionnelle, plug-and-play, avec planification de charge par IA (communiqué du 20 juin 2026). Nous n\'avons trouvé ni prix ni date de disponibilité publiés pour l\'UE.',
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
            description: 'Information de protection des consommateurs sur la déclaration du stockage, le MaStR et les règles du gestionnaire de réseau',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher ?',
            description: 'Blog de revendeur (non neutre) : VDE-AR-N 4105:2026-03 et le projet de travail EEG 2027 du 18 juillet 2026',
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
            a: 'La Verbraucherzentrale indique que le stockage doit actuellement être déclaré au gestionnaire de réseau et raccordé par un électricien agréé, et que la déclaration simplifiée MaStR ne s\'applique pas au stockage. La presse spécialisée rapporte une procédure simplifiée pour le stockage jusqu\'à 800 VA selon la VDE-AR-N 4105:2026-03 ; confirmez la procédure auprès de votre gestionnaire de réseau.',
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
            a: 'C\'est contesté. Le droit locatif allemand donne aux locataires un droit aux appareils solaires plug-in (§ 554 BGB), mais savoir si cela inclut le stockage est débattu. La directive technique de Vonovia interdirait les batteries selon la presse, et des associations de consommateurs jugent les interdictions générales problématiques. Demandez par écrit et faites-vous conseiller ; ceci n\'est pas un conseil juridique.',
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
    dateModified: '2026-10-19',
    readTime: '約6分',
    educationalLevel: 'Beginner',
    audience: '2027年に蓄電池の追加を検討しているバルコニーソーラー購入者',
    primaryTerm: 'バルコニーソーラー 蓄電池 2027',
    targetKeywords: ['バルコニーソーラー バッテリー 2027', 'バルコニー 蓄電池 登録 ドイツ', 'DIN VDE V 0126-95 蓄電', 'wattcycle バルコニーソーラー バッテリー'],
    leadAnswerBlock: '**蓄電池はバルコニーソーラーの一般的なオプションになりつつありますが、必須ではなく、蓄電池付きプラグイン式システムに関するドイツのルールもまだ定まっていません。** 2025年12月に公表された製品規格DIN VDE V 0126-95は、蓄電池なしのプラグイン式ソーラー機器のみを対象としており、規格委員会DKE/K 373が蓄電池付き機器向けの追加部分の計画を始めたところです。消費者センター（Verbraucherzentrale）は、蓄電池は現時点では認定電気技術者が系統事業者に登録する必要があるとしています。一方、業界メディアによると、改訂された接続規則（VDE-AR-N 4105:2026-03）は800 VAまでの小型蓄電池の手続きを簡素化するとされています。入門価格は下がっていますが、蓄電池が元を取れるかどうかは、購入価格と売電対価の差に左右されます。',
    quickAnswerTop: {
      ja: {
        question: 'バルコニーソーラーで蓄電池は標準になりつつありますか？',
        answer: '普及は進んでいますが、必須ではなく、すべての世帯に向くわけでもありません。増設用バッテリーは安くなっています（Lidlはドイツで2026年5月21〜27日のキャンペーンで、2.24 kWhの製品をLidl Plusカード利用で299ユーロ、通常399ユーロで販売）。ただし、ドイツの製品規格DIN VDE V 0126-95は蓄電池付きのプラグイン機器を対象としておらず、蓄電池の登録ルールは変動しています。蓄電池が元を取れるかどうかは、購入電力の価格と売電の対価との差で決まります。',
        bullets: [
          'DIN VDE V 0126-95（2025年12月公表）は蓄電池なしのプラグイン式ソーラー機器が対象。蓄電池付き機器向けの部分は、DKE/K 373が計画を始めたばかり',
          'Verbraucherzentraleは、蓄電池は現時点では認定電気技術者が系統事業者に登録する必要があり、簡易登録は蓄電池に適用されないとしている',
          '業界メディアによると、VDE-AR-N 4105:2026-03で800 VAまでの小型蓄電池の接続手続きが簡素化される。手続きは系統事業者に確認すること',
          'Lidlの2.24 kWh増設用バッテリーは、2026年5月21〜27日のキャンペーンでLidl Plusカード利用299ユーロ（通常399ユーロ）。インバーターは内蔵していない',
          '2026年の448世帯のシミュレーション研究では、動的料金により10 kWh蓄電池の純利益が12.7％増加。対象は屋根設置のPV蓄電池システムで、プラグイン式キットではない',
        ],
        updatedDate: '2026-10-19',
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
          'Verbraucherzentraleは、蓄電池は現時点では認定電気技術者が系統事業者に登録する必要があるとしています。業界メディアはVDE-AR-N 4105:2026-03による800 VAまでの手続き簡素化を伝えているため、購入前に系統事業者に手続きを確認してください。',
          '入門価格は下がっています。Lidlの2.24 kWh増設用バッテリーは2026年5月のキャンペーンでLidl Plus利用299ユーロ（通常399ユーロ）でした。WattCycleはIntersolar Europe 2026に向け最大10 kWhのバルコニー用蓄電池を発表しましたが、EUでの価格や提供時期は公表されていません。',
          'バルコニー用蓄電池に対するEU全体の補助金は見つかりませんでした。支援がある場合は、国・州・自治体が定めています。',
          'このページは市場の動向を説明するものです。「バルコニーソーラーに蓄電池は必要？」の世帯向けテストに代わるものではありません。蓄電池が元を取れるのは、購入価格と売電対価の差による節約が費用を上回る場合だけです。',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '蓄電池付きプラグイン式に関するドイツのルールは変化の途中',
        content: [
          '**ドイツの製品規格DIN VDE V 0126-95は、蓄電池なしのプラグイン式ソーラー機器を対象としています。** 規格団体DKEはFAQで、この規格は蓄電ユニット付きのプラグイン式ソーラー機器を対象としておらず、そのような機器には追加の要件が必要だと説明しています。委員会DKE/K 373は追加部分の計画を始めましたが、時期は示していません。規格は2025年12月に公表され、インバーター出力は最大800 VA、通常の家庭用プラグの場合はモジュール出力の合計が最大960 Wまでとされています。',
          '**登録について、Verbraucherzentraleは、蓄電池は現時点では認定電気技術者が系統事業者に登録し、接続も行う必要があるとしています。** プラグイン式ソーラー機器に適用されるMarktstammdatenregister（MaStR）での簡易登録は、蓄電池には適用されません。Solarpaket I（2024年5月）以降、蓄電池なしのプラグイン式ソーラー機器では系統事業者への直接の通知は不要になりました。',
          '**ルールは動いていますが、まだ確定していません。** 業界メディアによると、改訂された接続規則VDE-AR-N 4105:2026-03は、800 VAまでの小型蓄電池および一体型ユニットについて簡素化された手続き（様式F.1.2）を定めています。また、EEG 2027の省内の作業草案（2026年7月18日）は、同じインバーターの後段にある蓄電池をプラグイン式機器の一部として扱うとされています。作業草案は成立した法律ではなく、これを伝える販売店のブログは中立的な情報源ではありません。運転開始の日にどの手続きが適用されるかは、系統事業者に確認してください。',
          '賃貸の場合は、貸主のルールも加わります。報道によると、Vonovia（ドイツ最大の賃貸住宅会社）の技術ガイドラインはバルコニー設備への蓄電池を禁止しており、消費者団体はこれに異議を唱えています。[大家・住宅会社向けバルコニーソーラー](/ja/balcony-solar/balcony-solar-housing-associations-b2b-2027)をご覧ください。',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'ハードウェア：入門価格の下落とメーカーの主張',
        content: [
          '**入門価格は下がっています。** Lidlはドイツで2026年5月21〜27日に、TRONICの2.24 kWh増設用バッテリー（LiFePO4）を399ユーロ、Lidl Plusアプリ利用で299ユーロで販売しました。インバーターは内蔵されておらず、既存のバルコニー設備を拡張するものです。キャンペーンは終了している可能性が高いため、現在の価格を確認してください。',
          '**新製品に付いてくるのは、独立した試験ではなくメーカーの主張です。** WattCycleはミュンヘンのIntersolar Europe 2026で、最大10 kWh、双方向出力2.5 kWまたは5 kWのオールインワン型バルコニー蓄電システムを発表しました。プラグアンドプレイで、AIによる充放電スケジューリングを備えるとしています（2026年6月20日のプレスリリース）。EUでの価格や提供時期は公表されていません。',
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
            description: '蓄電池の登録、MaStR、系統事業者のルールに関する消費者保護機関の案内',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '販売店のブログ（中立ではない）：VDE-AR-N 4105:2026-03と2026年7月18日のEEG 2027作業草案',
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
            a: 'Verbraucherzentraleによると、蓄電池は現時点では認定電気技術者が系統事業者に登録し、接続する必要があり、MaStRの簡易登録は蓄電池に適用されません。業界メディアはVDE-AR-N 4105:2026-03により800 VAまでの蓄電池の手続きが簡素化されると伝えているため、系統事業者に手続きを確認してください。',
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
            a: '争いがあります。ドイツの賃貸法は借主にプラグイン式ソーラー機器を求める権利を認めています（BGB第554条）が、それが蓄電池を含むかどうかは議論があります。報道によると、Vonoviaの技術ガイドラインは蓄電池を禁止しており、消費者団体は一律の禁止に問題があるとしています。書面で問い合わせ、助言を受けてください。これは法的助言ではありません。',
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
    dateModified: '2026-10-19',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: '2027년 배터리 저장장치 추가 여부를 검토 중인 발코니 태양광 구매자',
    primaryTerm: '발코니 태양광 배터리 2027',
    targetKeywords: ['발코니 태양광 배터리 2027', '독일 발코니 배터리 등록', 'DIN VDE V 0126-95 저장장치', 'wattcycle 발코니 태양광 배터리'],
    leadAnswerBlock: '**배터리는 발코니 태양광의 흔한 추가 옵션이 되어 가고 있지만 필수는 아니며, 저장장치가 포함된 플러그인 시스템에 대한 독일의 규정도 아직 확정되지 않았습니다.** 2025년 12월에 발표된 제품 표준 DIN VDE V 0126-95는 저장장치가 없는 플러그인 태양광 장치만 다루며, 표준위원회 DKE/K 373이 저장장치 포함 장치를 위한 추가 부분의 계획을 시작했습니다. 독일 소비자센터(Verbraucherzentrale)는 저장장치를 현재 공인 전기기술자가 전력망 사업자에 등록해야 한다고 밝혔고, 업계 매체에 따르면 개정된 접속 규정(VDE-AR-N 4105:2026-03)은 800 VA까지의 소형 저장장치 절차를 간소화합니다. 입문용 가격은 내려가고 있지만, 배터리가 이익이 되는지는 구매 가격과 역송 보상의 차이에 달려 있습니다.',
    quickAnswerTop: {
      ko: {
        question: '발코니 태양광에서 배터리 저장장치가 표준이 되고 있습니까?',
        answer: '점점 흔해지고 있지만 필수는 아니며 모든 가구에 맞는 것도 아닙니다. 추가용 배터리는 저렴해지고 있습니다(Lidl은 독일에서 2026년 5월 21~27일 프로모션으로 2.24 kWh 제품을 Lidl Plus 카드로 299유로, 정상가 399유로에 판매했습니다). 그러나 독일 제품 표준 DIN VDE V 0126-95는 저장장치가 포함된 플러그인 장치를 다루지 않으며, 저장장치의 등록 규정은 변동 중입니다. 배터리가 이익이 되는지는 구매 전력 가격과 역송 수익의 차이에 달려 있습니다.',
        bullets: [
          'DIN VDE V 0126-95(2025년 12월 발표)는 저장장치가 없는 플러그인 태양광 장치를 다루며, 저장장치 포함 장치를 위한 부분은 DKE/K 373이 계획을 막 시작한 단계입니다',
          'Verbraucherzentrale는 저장장치를 현재 공인 전기기술자가 전력망 사업자에 등록해야 하며 간이 등록은 저장장치에 적용되지 않는다고 밝혔습니다',
          '업계 매체에 따르면 VDE-AR-N 4105:2026-03은 800 VA까지의 소형 저장장치에 대해 간소화된 접속 절차를 도입합니다. 절차는 전력망 사업자에게 확인하십시오',
          'Lidl의 2.24 kWh 추가용 배터리는 2026년 5월 21~27일 프로모션에서 Lidl Plus 카드로 299유로(정상가 399유로)였으며, 인버터는 내장되어 있지 않습니다',
          '2026년 448가구 시뮬레이션 연구에서 동적 요금제가 10 kWh 배터리의 순이익을 12.7% 높였습니다. 지붕형 PV-배터리 시스템을 모델링한 것이며 플러그인 키트가 아닙니다',
        ],
        updatedDate: '2026-10-19',
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
          'Verbraucherzentrale는 저장장치를 현재 공인 전기기술자가 전력망 사업자에 등록해야 한다고 밝혔습니다. 업계 매체는 VDE-AR-N 4105:2026-03에 따라 800 VA까지의 저장장치 절차가 간소화된다고 전하므로, 구매 전에 전력망 사업자에게 절차를 확인하십시오.',
          '입문용 가격은 내려가고 있습니다. Lidl의 2.24 kWh 추가용 배터리는 2026년 5월 프로모션에서 Lidl Plus로 299유로(정상가 399유로)였습니다. WattCycle은 Intersolar Europe 2026을 앞두고 최대 10 kWh 발코니 배터리를 발표했지만, EU 가격과 출시 시기는 공개되지 않았습니다.',
          '발코니 배터리에 대한 EU 차원의 보조금은 찾지 못했습니다. 지원이 있다면 국가, 주 또는 지자체가 정합니다.',
          '이 글은 시장 동향을 설명합니다. 「발코니 태양광에 배터리가 필요할까요?」의 가구별 테스트를 대신하지 않습니다. 구매 가격과 역송 보상의 차이로 절약되는 금액이 배터리 비용을 넘을 때만 이익이 됩니다.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '저장장치가 포함된 플러그인 시스템에 대한 독일 규정은 아직 변동 중입니다',
        content: [
          '**독일 제품 표준 DIN VDE V 0126-95는 저장장치가 없는 플러그인 태양광 장치를 다룹니다.** 표준 기관 DKE는 FAQ에서 이 표준이 에너지 저장 장치가 포함된 플러그인 태양광 장치를 다루지 않으며, 그런 장치에는 추가 요건이 필요하다고 설명합니다. 위원회 DKE/K 373은 추가 부분의 계획을 시작했지만 일정은 밝히지 않았습니다. 이 표준은 2025년 12월에 발표되었고, 인버터 출력은 최대 800 VA, 일반 가정용 플러그를 사용할 때 모듈 합계 최대 960 W를 허용합니다.',
          '**등록에 대해 Verbraucherzentrale는 저장장치를 현재 공인 전기기술자가 전력망 사업자에 등록해야 하며, 연결도 그가 해야 한다고 밝혔습니다.** 플러그인 태양광 장치에 적용되는 Marktstammdatenregister(MaStR)의 간이 등록은 저장장치에 적용되지 않습니다. Solarpaket I(2024년 5월) 이후 저장장치가 없는 플러그인 태양광 장치는 전력망 사업자에 직접 알릴 필요가 없습니다.',
          '**규정은 움직이고 있지만 아직 확정되지 않았습니다.** 업계 매체에 따르면 개정된 접속 규정 VDE-AR-N 4105:2026-03은 800 VA까지의 소형 저장장치와 일체형 장치에 대해 간소화된 절차(양식 F.1.2)를 규정하며, EEG 2027에 관한 연방 부처의 작업 초안(2026년 7월 18일)은 같은 인버터 뒤에 있는 저장장치를 플러그인 장치의 일부로 취급할 것이라고 합니다. 작업 초안은 확정된 법률이 아니며, 이를 전하는 판매업체 블로그는 중립적인 출처가 아닙니다. 가동 당일 어떤 절차가 적용되는지 전력망 사업자에게 문의하십시오.',
          '임대인의 규정이 또 하나의 층을 더합니다. 보도에 따르면 Vonovia의 기술 지침은 발코니 설비에 배터리를 금지하고 있으며, 소비자 단체는 이에 이의를 제기합니다. [임대인과 주택협회를 위한 발코니 태양광](/ko/balcony-solar/balcony-solar-housing-associations-b2b-2027)을 참고하십시오.',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: '하드웨어: 입문용 가격 하락과 제조사의 주장',
        content: [
          '**입문용 가격은 내려가고 있습니다.** Lidl은 독일에서 2026년 5월 21~27일에 TRONIC 2.24 kWh 추가용 배터리(LiFePO4)를 399유로, Lidl Plus 앱 이용 시 299유로에 판매했습니다. 인버터가 내장되어 있지 않아 기존 발코니 설비를 확장하는 용도이며, 프로모션은 이미 끝났을 가능성이 높으므로 현재 가격을 확인하십시오.',
          '**신제품에는 독립 시험이 아닌 제조사의 주장이 따라옵니다.** WattCycle은 뮌헨에서 열린 Intersolar Europe 2026에서 최대 10 kWh, 양방향 출력 2.5 kW 또는 5 kW의 올인원 발코니 저장 시스템을 발표했으며, 플러그 앤 플레이이고 AI 기반 충·방전 스케줄링을 갖췄다고 합니다(2026년 6월 20일 보도자료). EU 가격이나 출시 시기는 공개된 것을 찾지 못했습니다.',
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
            description: '저장장치 등록, MaStR, 전력망 사업자 규정에 관한 소비자 보호 기관의 안내',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '판매업체 블로그(중립적이지 않음): VDE-AR-N 4105:2026-03과 2026년 7월 18일 EEG 2027 작업 초안',
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
            a: 'Verbraucherzentrale에 따르면 저장장치는 현재 공인 전기기술자가 전력망 사업자에 등록하고 연결해야 하며, MaStR 간이 등록은 저장장치에 적용되지 않습니다. 업계 매체는 VDE-AR-N 4105:2026-03에 따라 800 VA까지의 저장장치 절차가 간소화된다고 전하므로, 절차는 전력망 사업자에게 확인하십시오.',
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
            a: '논란이 있습니다. 독일 임대차법은 세입자에게 플러그인 태양광 장치를 요구할 권리를 인정하지만(BGB 제554조), 이것이 저장장치를 포함하는지는 다툼이 있습니다. 보도에 따르면 Vonovia의 기술 지침은 배터리를 금지하고 있으며, 소비자 단체는 일괄 금지가 문제라고 봅니다. 서면으로 문의하고 조언을 구하십시오. 이는 법률 자문이 아닙니다.',
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
    dateModified: '2026-10-19',
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
    leadAnswerBlock: '**As baterias estão se tornando um complemento comum da energia solar de varanda, mas não são obrigatórias, e as regras alemãs para sistemas plug-in com armazenamento ainda não estão consolidadas.** A norma de produto DIN VDE V 0126-95, publicada em dezembro de 2025, cobre apenas dispositivos solares plug-in sem armazenamento; o comitê de normalização DKE/K 373 começou a planejar uma parte adicional para dispositivos com armazenamento. A Verbraucherzentrale informa que o armazenamento deve atualmente ser registrado na operadora de rede por um eletricista autorizado, enquanto uma regra de conexão revisada (VDE-AR-N 4105:2026-03) simplificaria, segundo a imprensa especializada, o processo para armazenamentos pequenos de até 800 VA. Os preços de entrada estão caindo, mas se uma bateria compensa ainda depende da diferença entre o seu preço de compra e o seu pagamento pela injeção.',
    quickAnswerTop: {
      pt: {
        question: 'O armazenamento em bateria está se tornando padrão para a energia solar de varanda?',
        answer: 'Está ficando mais comum, mas não é obrigatório nem adequado para todas as casas. As baterias de expansão estão mais baratas (a Lidl vendeu na Alemanha uma unidade de 2,24 kWh por € 299 com o cartão Lidl Plus, € 399 no preço normal, em uma promoção de 21 a 27 de maio de 2026), mas a norma de produto alemã DIN VDE V 0126-95 não cobre dispositivos plug-in com armazenamento e as regras de registro para armazenamento estão mudando. Se uma bateria compensa depende da diferença entre o que você paga pela energia comprada e o que recebe pela injetada.',
        bullets: [
          'A DIN VDE V 0126-95 (publicada em dezembro de 2025) cobre dispositivos solares plug-in sem armazenamento; o comitê DKE/K 373 apenas começou a planejar uma parte para dispositivos com armazenamento',
          'A Verbraucherzentrale informa que o armazenamento deve atualmente ser registrado na operadora de rede por um eletricista autorizado; o registro simplificado não cobre armazenamento',
          'A imprensa especializada informa que a VDE-AR-N 4105:2026-03 introduz um processo de conexão simplificado para armazenamentos pequenos de até 800 VA; confirme o procedimento com a sua operadora de rede',
          'A bateria de expansão de 2,24 kWh da Lidl custou € 299 com o cartão Lidl Plus (€ 399 no preço normal) em uma promoção de 21 a 27 de maio de 2026; não tem inversor integrado',
          'Um estudo de simulação de 2026 com 448 domicílios constatou que tarifas dinâmicas aumentaram em 12,7% o ganho líquido de uma bateria de 10 kWh; ele modela sistemas fotovoltaicos com bateria em telhado, não kits plug-in',
        ],
        updatedDate: '2026-10-19',
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
          'A Verbraucherzentrale informa que o armazenamento deve atualmente ser registrado na operadora de rede por um eletricista autorizado. A imprensa especializada informa um processo de conexão simplificado para armazenamento de até 800 VA pela VDE-AR-N 4105:2026-03, então confirme o procedimento com a sua operadora de rede antes de comprar.',
          'Os preços de entrada estão caindo: a bateria de expansão de 2,24 kWh da Lidl custou € 299 com o Lidl Plus (€ 399 no preço normal) em uma promoção de maio de 2026. A WattCycle anunciou para a Intersolar Europe 2026 uma bateria de varanda de até 10 kWh; não há preço nem data de disponibilidade na UE publicados.',
          'Não encontramos nenhum subsídio em nível de UE para baterias de varanda. O apoio, onde existe, é definido por países, estados ou municípios.',
          'Esta página descreve uma tendência de mercado. Ela não substitui o teste de "Você precisa de uma bateria para energia solar de varanda?": uma bateria só compensa se a diferença economizada entre preço de compra e pagamento pela injeção superar o custo dela.',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: 'As regras alemãs para plug-in com armazenamento ainda estão mudando',
        content: [
          '**A norma de produto alemã DIN VDE V 0126-95 cobre dispositivos solares plug-in sem armazenamento.** O órgão de normalização DKE afirma em seu FAQ que a norma não cobre dispositivos solares plug-in com unidade de armazenamento de energia, que exigem requisitos adicionais. O comitê DKE/K 373 começou a planejar uma parte adicional, mas não informa cronograma. A norma foi publicada em dezembro de 2025 e permite até 800 VA de potência do inversor e, com uma tomada doméstica normal, até 960 W de módulos.',
          '**Sobre o registro, a Verbraucherzentrale informa que o armazenamento deve atualmente ser registrado na operadora de rede por um eletricista autorizado, que também deve conectá-lo.** O registro curto no Marktstammdatenregister (MaStR) que vale para dispositivos solares plug-in não vale para armazenamento. Desde o Solarpaket I (maio de 2024), a operadora de rede não precisa mais ser informada diretamente no caso de dispositivos plug-in sem armazenamento.',
          '**As regras estão em movimento, mas ainda não consolidadas.** A imprensa especializada informa que a regra de conexão revisada VDE-AR-N 4105:2026-03 prevê um processo simplificado (formulário F.1.2) para armazenamentos pequenos e unidades combinadas de até 800 VA, e que um rascunho de trabalho do ministério para a EEG 2027 (18 de julho de 2026) contaria o armazenamento atrás do mesmo inversor como parte de um dispositivo plug-in. Um rascunho de trabalho não é lei aprovada, e o blog de varejista que citamos para isso não é uma fonte neutra. Pergunte à sua operadora de rede qual procedimento vale no dia da entrada em operação.',
          'As regras dos locadores acrescentam outra camada: a diretriz técnica da Vonovia proibiria, segundo relatos, baterias em instalações de varanda, posição que associações de consumidores contestam. Veja [Energia solar de varanda para proprietários e associações habitacionais](/pt/balcony-solar/balcony-solar-housing-associations-b2b-2027).',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: 'Hardware: preços de entrada em queda e alegações dos fabricantes',
        content: [
          '**Os preços de entrada estão caindo.** A Lidl vendeu na Alemanha, de 21 a 27 de maio de 2026, uma bateria de expansão TRONIC de 2,24 kWh (LiFePO4) por € 399, ou € 299 com o app Lidl Plus. Ela não tem inversor integrado e portanto amplia uma instalação de varanda existente; a promoção provavelmente já terminou, então confira os preços atuais.',
          '**Produtos novos vêm com alegações dos fabricantes, não com testes independentes.** Na Intersolar Europe 2026, em Munique, a WattCycle anunciou um sistema de armazenamento de varanda tudo-em-um de até 10 kWh e 2,5 kW ou 5 kW de potência bidirecional, plug-and-play, com programação de carga baseada em IA (comunicado de 20 de junho de 2026). Não encontramos preço nem data de disponibilidade publicados para a UE.',
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
            description: 'Orientação de defesa do consumidor sobre registro de armazenamento, MaStR e regras da operadora de rede',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk – Kommen endlich Erleichterungen für Steckerspeicher?',
            description: 'Blog de varejista (não neutro): VDE-AR-N 4105:2026-03 e o rascunho de trabalho da EEG 2027 de 18 de julho de 2026',
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
            a: 'A Verbraucherzentrale informa que o armazenamento deve atualmente ser registrado na operadora de rede e conectado por um eletricista autorizado, e que o registro simplificado no MaStR não vale para armazenamento. A imprensa especializada informa um processo simplificado para armazenamento de até 800 VA pela VDE-AR-N 4105:2026-03; confirme o procedimento com a sua operadora de rede.',
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
            a: 'Isso é contestado. O direito de locação alemão dá aos inquilinos um direito a dispositivos solares plug-in (§ 554 BGB), mas se isso inclui armazenamento é discutido. A diretriz técnica da Vonovia proibiria baterias, segundo relatos, e associações de consumidores consideram problemáticas as proibições gerais. Pergunte por escrito e busque orientação; isto não é aconselhamento jurídico.',
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
    dateModified: '2026-10-19',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '正在评估2027年是否要增加电池储能的阳台光伏购买者',
    primaryTerm: '2027年阳台光伏电池',
    targetKeywords: ['阳台光伏电池 2027', '德国阳台光伏电池登记', 'DIN VDE V 0126-95 储能', 'wattcycle 阳台光伏电池'],
    leadAnswerBlock: '**电池正成为阳台光伏常见的加装配件，但并非强制要求，德国针对带储能的插拔式系统的规则也尚未定型。** 2025年12月发布的产品标准DIN VDE V 0126-95只涵盖不带储能的插拔式光伏设备；标准委员会DKE/K 373已开始规划针对带储能设备的另一部分。德国消费者中心（Verbraucherzentrale）表示，储能目前必须由持证电工向电网运营商登记；据行业媒体报道，修订后的并网规则（VDE-AR-N 4105:2026-03）将简化800 VA以内小型储能的流程。入门价格在下降，但电池是否划算，仍取决于您的购电价与上网补偿之间的差距。',
    quickAnswerTop: {
      zh: {
        question: '电池储能正在成为阳台光伏的标准配置吗？',
        answer: '它正变得更常见，但并非强制要求，也不适合每个家庭。加装电池越来越便宜（Lidl于2026年5月21日至27日在德国促销一款2.24 kWh产品，使用Lidl Plus卡299欧元，常规价399欧元），但德国产品标准DIN VDE V 0126-95并不涵盖带储能的插拔式设备，储能的登记规则也在变化。电池是否划算，取决于您的购电价与上网电量所得之间的差距。',
        bullets: [
          'DIN VDE V 0126-95（2025年12月发布）涵盖不带储能的插拔式光伏设备；委员会DKE/K 373才刚开始规划针对带储能设备的部分',
          'Verbraucherzentrale表示，储能目前必须由持证电工向电网运营商登记，简化登记途径不适用于储能',
          '行业媒体报道，VDE-AR-N 4105:2026-03为800 VA以内的小型储能引入了简化并网流程；请向您的电网运营商确认具体手续',
          'Lidl的2.24 kWh加装电池在2026年5月21日至27日促销期间，使用Lidl Plus卡299欧元（常规价399欧元）；不带内置逆变器',
          '2026年一项涵盖448户家庭的模拟研究发现，动态电价使10 kWh电池的净收益提高12.7%；该研究模拟的是屋顶光伏电池系统，而非插拔式套装',
        ],
        updatedDate: '2026-10-19',
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
          'Verbraucherzentrale表示，储能目前必须由持证电工向电网运营商登记。行业媒体报道，根据VDE-AR-N 4105:2026-03，800 VA以内的储能并网流程有所简化，因此购买前请向电网运营商确认手续。',
          '入门价格在下降：Lidl的2.24 kWh加装电池在2026年5月促销期间，使用Lidl Plus为299欧元（常规价399欧元）。WattCycle为Intersolar Europe 2026发布了最高10 kWh的阳台电池，但欧盟售价和上市时间均未公布。',
          '我们没有找到针对阳台电池的欧盟层面补贴。补贴如有，由各国、各州或市政当局设定。',
          '本页描述的是市场趋势，并不取代“阳台光伏需要电池吗？”中的家庭测试：只有当购电价与上网补偿之间省下的差距超过电池成本时，电池才划算。',
        ],
      },
      storageRules: {
        id: 'storage-rules',
        title: '德国针对带储能插拔式系统的规则仍在变动',
        content: [
          '**德国产品标准DIN VDE V 0126-95涵盖不带储能的插拔式光伏设备。** 标准机构DKE在其常见问题中说明，该标准不涵盖带储能单元的插拔式光伏设备，这类设备需要附加要求。委员会DKE/K 373已开始规划另一部分，但未给出时间表。该标准于2025年12月发布，允许逆变器输出最高800 VA，使用普通家用插头时组件功率合计最高960 W。',
          '**关于登记，Verbraucherzentrale表示，储能目前必须由持证电工向电网运营商登记，并由其负责接线。** 适用于插拔式光伏设备的Marktstammdatenregister（MaStR）简易登记不适用于储能。自Solarpaket I（2024年5月）起，不带储能的插拔式光伏设备无需再直接通知电网运营商。',
          '**规则在变化，但尚未定型。** 行业媒体报道，修订后的并网规则VDE-AR-N 4105:2026-03为800 VA以内的小型储能和一体化设备规定了简化流程（表格F.1.2），并且德国联邦经济部关于EEG 2027的工作草案（2026年7月18日）会把位于同一逆变器之后的储能视为插拔式设备的一部分。工作草案不是已通过的法律，我们为此引用的经销商博客也不是中立信息源。请向电网运营商询问投运当天适用哪种手续。',
          '房东的规定又增加了一层：据报道，Vonovia的技术指南禁止在阳台系统上使用电池，消费者团体对此提出异议。参见[面向房东与住房协会的阳台光伏](/zh/balcony-solar/balcony-solar-housing-associations-b2b-2027)。',
        ],
      },
      newHardware: {
        id: 'new-hardware',
        title: '硬件：入门价格下降与厂商宣称',
        content: [
          '**入门价格正在下降。** Lidl于2026年5月21日至27日在德国销售TRONIC 2.24 kWh（磷酸铁锂）加装电池，常规价399欧元，使用Lidl Plus应用为299欧元。它不带内置逆变器，因此是对现有阳台系统的扩展；促销很可能已结束，请查看当前价格。',
          '**新产品附带的是厂商宣称，而非独立测试。** 在慕尼黑举行的Intersolar Europe 2026上，WattCycle发布了一款一体化阳台储能系统，容量最高10 kWh，双向功率为2.5 kW或5 kW，即插即用，并带有基于AI的充放电调度（2026年6月20日新闻稿）。我们没有找到已公布的欧盟售价或上市时间。',
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
            description: '消费者保护机构关于储能登记、MaStR与电网运营商规则的指引',
          },
          {
            url: 'https://kleineskraftwerk.de/blogs/magazin/kommen-endlich-erleichterungen-fur-steckerspeicher',
            title: 'kleines kraftwerk — Kommen endlich Erleichterungen für Steckerspeicher?',
            description: '经销商博客（非中立）：VDE-AR-N 4105:2026-03与2026年7月18日的EEG 2027工作草案',
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
            a: 'Verbraucherzentrale表示，储能目前必须由持证电工向电网运营商登记并接线，MaStR简易登记不适用于储能。行业媒体报道，根据VDE-AR-N 4105:2026-03，800 VA以内的储能流程有所简化；请向电网运营商确认手续。',
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
            a: '这存在争议。德国租赁法赋予租户安装插拔式光伏设备的请求权（BGB第554条），但是否包括储能存在争论。据报道，Vonovia的技术指南禁止电池，消费者团体认为一刀切的禁令有问题。请以书面方式询问并寻求专业意见；这不构成法律建议。',
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
