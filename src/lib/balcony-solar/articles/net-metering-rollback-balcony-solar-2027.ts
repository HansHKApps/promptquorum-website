// Slug: net-metering-rollback-balcony-solar-2027
// BSOL-29 — Tier 5 (2027 Trends), legislation, annual.
// NOTE: adjacent to a prior "DO NOT BUILD" gate in docs/BALCONY_SOLAR_TIER5_BACKLOG.md
// on a general net-metering/grid-export explainer (pending GSC demand data, never
// pulled). This article is a narrower, differentiated angle — the specific NL
// saldering rollback taking effect Jan 1, 2027 — approved to proceed 2026-07-18
// despite that gate; flag this distinction explicitly in the article body.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2027,
    next_refresh_due: '2027-01-18',
    last_full_refresh: '2026-10-19',
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-en.webp',
    title: 'Netherlands Net Metering Ends in 2027: What It Means for Balcony Solar',
    seoTitle: 'Dutch Net Metering Ends in 2027: Balcony Solar Impact',
    intro: 'The Netherlands ends its saldering scheme, the 1:1 netting of fed-in and drawn electricity, on January 1, 2027. The law passed the Dutch parliament in late 2024. Afterwards, households that feed power back receive a "reasonable compensation" from their supplier, with a statutory floor until 2030. This page covers the Dutch change only; it is not a general EU net-metering guide and not legal or financial advice.',
    metaDescription: 'Dutch net metering (saldering) ends January 1, 2027. Until 2030, feed-in pay must be at least 50% of the ex-tax power price. What it means for balcony solar.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    audience: 'Dutch balcony solar owners and buyers affected by the end of saldering',
    primaryTerm: 'netherlands net metering ending 2027',
    targetKeywords: [
      'saldering 2027',
      'netherlands net metering balcony solar',
      'balcony solar netherlands 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**The Netherlands ends its 1:1 net metering scheme (saldering) on January 1, 2027.** Until January 1, 2027, a household that feeds in 3,000 kWh and draws 4,000 kWh pays only for the 1,000 kWh difference. From 2027 the supplier instead pays a "reasonable compensation" (redelijke vergoeding) for each fed-in kWh: until January 1, 2030 it must be at least 50% of the electricity price excluding energy tax and VAT, and suppliers may still charge feed-in fees. The practical effect is that a kWh you use yourself saves the full retail price while a kWh you export earns far less, so self-consumption gains value and, for some households, so does a battery.',
    quickAnswerTop: {
      en: {
        question: 'Is net metering ending for balcony solar in 2027?',
        answer: 'Yes, in the Netherlands only. The Wet beëindiging salderingsregeling takes effect on January 1, 2027 (Tweede Kamer vote on November 14, 2024, Eerste Kamer vote on December 17, 2024). After that date suppliers pay a "reasonable compensation" for fed-in power, which must be at least 50% of the price excluding energy tax and VAT until January 1, 2030, and they may charge feed-in fees. This is a Dutch law; it does not change the rules in other EU countries.',
        bullets: [
          'Netting ends January 1, 2027 under the Wet beëindiging salderingsregeling (bill 36611)',
          'Fed-in power is then paid a "reasonable compensation": at least 50% of the price excluding energy tax and VAT until January 1, 2030',
          'Suppliers may still charge feed-in fees (terugleverkosten), which the regulator ACM says can sometimes exceed the payment for the power fed back',
          'Suppliers cannot postpone the date; they must split consumption and feed-in into the periods before and from January 1, 2027',
          'Self-consumption gains value; a battery only pays off if the gap between your purchase price and your export payment is large enough',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways', },
      { label: 'The Scheme That Ends and What Replaces It', anchor: '#current-scheme', },
      { label: 'Contract and Fee Details to Check Before 2027', anchor: '#contract-check', },
      { label: 'Why Self-Consumption and Batteries Gain Value', anchor: '#battery-connection', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Frequently Asked Questions', anchor: '#faq', },
      { label: 'Related Reading', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The Netherlands ends saldering (1:1 net metering) on January 1, 2027; the law passed the Tweede Kamer on November 14, 2024 and the Eerste Kamer on December 17, 2024.',
          'Until January 1, 2027, fed-in and drawn electricity are netted: feeding in 3,000 kWh and drawing 4,000 kWh means paying for 1,000 kWh.',
          'From 2027 suppliers owe a "reasonable compensation" for fed-in power. Until January 1, 2030 it must be at least 50% of the price excluding energy tax and VAT, according to the Dutch regulator ACM.',
          'Feed-in fees remain allowed and can exceed the payment for the power fed back. ACM has stated that a net-negative compensation is not banned as such, unless it leads to unreasonable tariffs.',
          'This is a Dutch change only. It does not alter balcony solar rules in Germany or any other country.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'The Scheme That Ends and What Replaces It',
        content: [
          '**Under saldering, electricity drawn from the grid and fed into it are netted 1:1, including energy tax and VAT.** Until January 1, 2027, a household that feeds in 3,000 kWh and draws 4,000 kWh pays for the 1,000 kWh difference. The scheme ends by law on January 1, 2027. The Wet beëindiging salderingsregeling (bill 36611) passed the Tweede Kamer on November 14, 2024 and the Eerste Kamer on December 17, 2024.',
          '**From January 1, 2027, households with a net surplus are entitled to a "reasonable compensation" (redelijke vergoeding) from their supplier.** The law sets no fixed price. According to the consumer site of the regulator ACM, the compensation must be at least 50% of the price paid for electricity excluding energy tax and VAT until January 1, 2030. ACM supervises whether compensation is reasonable. Because the floor is written to run only until 2030, check the rules in force when you sign or renew a contract.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'Contract and Fee Details to Check Before 2027',
        content: [
          '**Check three items in your energy contract: the per-kWh feed-in payment, the feed-in fee (terugleverkosten), and how the contract handles the switch on January 1, 2027.** ACM explains that feed-in fees can be a fixed amount or a charge per kWh fed back, and that they can sometimes be higher than the compensation for the power you feed back.',
          '**Suppliers cannot postpone the legal end date, but your contract terms may still matter.** ACM states that a contract can still grant a right to netting under its own terms, and that the supplier must split your consumption and feed-in into the period up to December 31, 2026 and the period from January 1, 2027. ACM advises comparing offers carefully, especially contracts that run past 2027. This page does not quote supplier rates because offers change often.',
        ],
        callouts: [
          { type: 'info', text: 'This page is general information, not legal or financial advice. Check your own contract and ask your supplier or a qualified adviser before deciding.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Why Self-Consumption and Batteries Gain Value',
        content: [
          '**Without netting, a kWh you use yourself saves the full retail price, while a kWh you export earns only the supplier\'s compensation.** At the statutory floor that payment is half of the price before energy tax and VAT, which is well below half of what a kWh costs at the meter. A battery or shifted consumption, such as running a washing machine at midday, can capture part of that gap.',
          'The consumer organisation Milieu Centraal assumes that roughly 30% of a typical rooftop system\'s output is used directly and about 70% is fed back, and gives a yearly yield without netting of about €170 for six panels (indicative figures). Plug-in systems are small relative to a household\'s constant base load, so they typically export a smaller share; for many of them, shifting consumption is the cheaper first step and a battery is optional. See [Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) for the decision test and [Balcony Solar Batteries in 2027](/balcony-solar/balcony-solar-battery-storage-standard-2027) for the current rules and prices.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer — bill 36611, Wet beëindiging salderingsregeling',
            description: 'Vote dates (Tweede Kamer November 14, 2024; Eerste Kamer December 17, 2024), entry into force January 1, 2027, "reasonable compensation" provision',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer — Salderen en terugleveren',
            description: 'Regulator\'s consumer guidance: 50% floor until January 1, 2030, feed-in fees, contracts that cross the end date',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM — news on feed-in fees and compensation',
            description: 'Regulator statement that net-negative compensation is not banned unless tariffs become unreasonable; supervision plans',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal — Salderingsregeling voor zonnepanelen',
            description: 'Independent consumer guidance: end of netting, direct-use share, indicative yearly yield without netting',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'When does net metering end in the Netherlands?',
            a: 'On January 1, 2027. The Wet beëindiging salderingsregeling passed the Tweede Kamer on November 14, 2024 and the Eerste Kamer on December 17, 2024. Until the end date, the current netting continues.',
          },
          {
            q: 'How does the current Dutch net metering scheme work?',
            a: 'Electricity drawn from the grid and fed into it are netted 1:1 over the billing period, including energy tax and VAT. Until January 1, 2027, a household that feeds in 3,000 kWh and draws 4,000 kWh pays only for the 1,000 kWh difference.',
          },
          {
            q: 'What replaces net metering after January 1, 2027?',
            a: 'Suppliers owe households with a net surplus a "reasonable compensation" for fed-in power. According to ACM, it must be at least 50% of the price paid for electricity excluding energy tax and VAT until January 1, 2030. The law sets no fixed price, so the actual rate depends on your supplier.',
          },
          {
            q: 'Can suppliers still charge feed-in fees?',
            a: 'Yes. ACM states that feed-in fees (terugleverkosten) remain possible, as a fixed amount or per kWh fed back, and that they can sometimes be higher than the compensation. Read the fee and the payment together when you compare contracts.',
          },
          {
            q: 'What happens to a contract that runs past January 1, 2027?',
            a: 'Your supplier cannot postpone the legal end date, but your contract terms may still give you a right to netting. ACM says the supplier must split your consumption and feed-in into the period up to December 31, 2026 and the period from January 1, 2027.',
          },
          {
            q: 'Does this rule apply outside the Netherlands?',
            a: 'No. It is a Dutch law. Other countries, including Germany, have their own feed-in and registration rules; see the [country-by-country legal guide](/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: 'Should I buy a battery because of this change?',
            a: 'Not automatically. The gap between the retail price and the export payment widens, which favors self-consumption, but a battery only pays off if the saved gap outweighs its cost. Start with the one-number test in the battery decision guide.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar Batteries in 2027: Is Storage Becoming Standard?](/balcony-solar/balcony-solar-battery-storage-standard-2027) — current rules, prices and the tariff-arbitrage evidence behind the storage question',
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — the export-credit-gap decision test, directly affected by the end of saldering',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-ar.webp',
    title: 'هولندا: نهاية نظام Net Metering في 2027 وأثره على الطاقة الشمسية للشرفة',
    seoTitle: 'هولندا: نهاية Saldering في 2027 والطاقة الشمسية للشرفة',
    intro: 'تنهي هولندا في 1 يناير 2027 نظام saldering، أي المقاصة 1:1 بين الكهرباء المُصدَّرة إلى الشبكة والمسحوبة منها. أقرّ البرلمان الهولندي القانون في أواخر 2024. وبعد ذلك التاريخ تتلقى الأسر التي تُصدّر الكهرباء «تعويضًا معقولًا» من شركة التوريد، مع حدّ أدنى قانوني حتى عام 2030. تتناول هذه الصفحة التغيير الهولندي فقط؛ وهي ليست دليلًا عامًا لنظام Net Metering في الاتحاد الأوروبي، وليست استشارة قانونية أو مالية.',
    metaDescription: 'ينتهي نظام saldering الهولندي في 1 يناير 2027. حتى 2030 يجب ألا يقل تعويض التصدير عن 50% من سعر الكهرباء قبل الضرائب. ما أثر ذلك على الطاقة الشمسية للشرفة.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'ملاك ومشترو الطاقة الشمسية للشرفة في هولندا المتأثرون بانتهاء نظام saldering',
    primaryTerm: 'نهاية نظام Saldering في هولندا 2027',
    targetKeywords: [
      'نظام Saldering 2027 هولندا',
      'صافي القياس الطاقة الشمسية للشرفة هولندا',
      'الطاقة الشمسية للشرفة هولندا 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**تنهي هولندا نظام المقاصة 1:1 (saldering) في 1 يناير 2027.** حتى 1 يناير 2027 تدفع الأسرة التي تُصدّر 3,000 kWh وتسحب 4,000 kWh ثمن الفرق فقط، أي 1,000 kWh. ابتداءً من 2027 تدفع شركة التوريد بدلًا من ذلك «تعويضًا معقولًا» (redelijke vergoeding) عن كل kWh مُصدَّر: وحتى 1 يناير 2030 يجب ألا يقل عن 50% من سعر الكهرباء دون ضريبة الطاقة وضريبة القيمة المضافة، ويظل بإمكان شركات التوريد فرض رسوم تصدير. عمليًا، الـ kWh الذي تستهلكه بنفسك يوفّر سعر التجزئة كاملًا، بينما يدرّ الـ kWh المُصدَّر أقل بكثير؛ لذا تزداد قيمة الاستهلاك الذاتي، وقد تزداد قيمة البطارية لدى بعض الأسر.',
    quickAnswerTop: {
      ar: {
        question: 'هل ينتهي نظام Net Metering للطاقة الشمسية للشرفة في 2027؟',
        answer: 'نعم، في هولندا فقط. يدخل قانون Wet beëindiging salderingsregeling حيّز التنفيذ في 1 يناير 2027 (تصويت Tweede Kamer في 14 نوفمبر 2024، وتصويت Eerste Kamer في 17 ديسمبر 2024). بعد هذا التاريخ تدفع شركات التوريد «تعويضًا معقولًا» عن الكهرباء المُصدَّرة، يجب ألا يقل حتى 1 يناير 2030 عن 50% من السعر دون ضريبة الطاقة وضريبة القيمة المضافة، ويمكنها فرض رسوم تصدير. هذا قانون هولندي ولا يغيّر قواعد الدول الأوروبية الأخرى.',
        bullets: [
          'تنتهي المقاصة في 1 يناير 2027 بموجب قانون Wet beëindiging salderingsregeling (مشروع القانون 36611)',
          'تحصل الكهرباء المُصدَّرة حينها على «تعويض معقول»: لا يقل عن 50% من السعر دون ضريبة الطاقة وضريبة القيمة المضافة حتى 1 يناير 2030',
          'يمكن لشركات التوريد الاستمرار في فرض رسوم التصدير (terugleverkosten)، وتقول الجهة المنظِّمة ACM إنها قد تتجاوز أحيانًا تعويض الكهرباء المُصدَّرة',
          'لا تستطيع شركات التوريد تأجيل التاريخ؛ عليها تقسيم الاستهلاك والتصدير إلى فترتين: قبل 1 يناير 2027 ومنه فصاعدًا',
          'تزداد قيمة الاستهلاك الذاتي؛ ولا تُجدي البطارية إلا إذا كان الفرق بين سعر الشراء وتعويض التصدير كبيرًا بما يكفي',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways', },
      { label: 'النظام الذي ينتهي وما يحلّ محله', anchor: '#current-scheme', },
      { label: 'تفاصيل العقد والرسوم التي ينبغي مراجعتها قبل 2027', anchor: '#contract-check', },
      { label: 'لماذا تزداد قيمة الاستهلاك الذاتي والبطاريات', anchor: '#battery-connection', },
      { label: 'المصادر', anchor: '#sources', },
      { label: 'الأسئلة الشائعة', anchor: '#faq', },
      { label: 'قراءات ذات صلة', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تنهي هولندا نظام saldering (المقاصة 1:1) في 1 يناير 2027؛ أقرّ القانون مجلس Tweede Kamer في 14 نوفمبر 2024 ومجلس Eerste Kamer في 17 ديسمبر 2024.',
          'حتى 1 يناير 2027 تُجرى مقاصة بين الكهرباء المُصدَّرة والمسحوبة: تصدير 3,000 kWh وسحب 4,000 kWh يعني دفع ثمن 1,000 kWh.',
          'ابتداءً من 2027 تدين شركات التوريد بـ«تعويض معقول» عن الكهرباء المُصدَّرة. وحتى 1 يناير 2030 يجب ألا يقل عن 50% من السعر دون ضريبة الطاقة وضريبة القيمة المضافة، وفق الجهة المنظِّمة الهولندية ACM.',
          'تبقى رسوم التصدير مسموحة وقد تتجاوز تعويض الكهرباء المُصدَّرة. وقد صرّحت ACM بأن التعويض السالب صافيًا غير محظور بحد ذاته ما لم يؤدِّ إلى تعرفة غير معقولة.',
          'هذا تغيير هولندي فقط، ولا يغيّر قواعد الطاقة الشمسية للشرفة في ألمانيا أو أي دولة أخرى.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'النظام الذي ينتهي وما يحلّ محله',
        content: [
          '**في نظام saldering تُجرى مقاصة 1:1 بين الكهرباء المسحوبة من الشبكة والمُصدَّرة إليها، شاملةً ضريبة الطاقة وضريبة القيمة المضافة.** حتى 1 يناير 2027 تدفع الأسرة التي تُصدّر 3,000 kWh وتسحب 4,000 kWh ثمن الفرق البالغ 1,000 kWh. ينتهي النظام بموجب القانون في 1 يناير 2027. أقرّ Tweede Kamer قانون Wet beëindiging salderingsregeling (مشروع القانون 36611) في 14 نوفمبر 2024، وأقرّه Eerste Kamer في 17 ديسمبر 2024.',
          '**ابتداءً من 1 يناير 2027 يحق للأسر التي لديها فائض صافٍ الحصول على «تعويض معقول» (redelijke vergoeding) من شركة التوريد.** لا يحدد القانون سعرًا ثابتًا. ووفق موقع المستهلكين التابع للجهة المنظِّمة ACM، يجب ألا يقل التعويض حتى 1 يناير 2030 عن 50% من السعر المدفوع للكهرباء دون ضريبة الطاقة وضريبة القيمة المضافة. وتشرف ACM على مدى معقولية التعويض. ولأن الحد الأدنى منصوص عليه حتى 2030 فقط، راجع القواعد السارية عند توقيع العقد أو تجديده.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'تفاصيل العقد والرسوم التي ينبغي مراجعتها قبل 2027',
        content: [
          '**راجع في عقد الطاقة ثلاثة بنود: تعويض التصدير لكل kWh، ورسم التصدير (terugleverkosten)، وكيفية تعامل العقد مع الانتقال في 1 يناير 2027.** توضح ACM أن رسوم التصدير قد تكون مبلغًا ثابتًا أو رسمًا على كل kWh مُصدَّر، وأنها قد تتجاوز أحيانًا تعويض الكهرباء المُصدَّرة.',
          '**لا تستطيع شركات التوريد تأجيل تاريخ الانتهاء القانوني، لكن شروط عقدك قد تظل مهمة.** تذكر ACM أن العقد قد يمنح حق المقاصة وفق شروطه الخاصة، وأن على شركة التوريد تقسيم استهلاكك وتصديرك إلى الفترة حتى 31 ديسمبر 2026 والفترة منذ 1 يناير 2027. وتنصح ACM بمقارنة العروض بعناية، خصوصًا العقود التي تمتد بعد 2027. لا نذكر هنا تعرفات شركات بعينها لأن العروض تتغير كثيرًا.',
        ],
        callouts: [
          { type: 'info', text: 'هذه الصفحة معلومات عامة وليست استشارة قانونية أو مالية. راجع عقدك الخاص واسأل شركة التوريد أو مستشارًا مؤهلًا قبل اتخاذ القرار.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'لماذا تزداد قيمة الاستهلاك الذاتي والبطاريات',
        content: [
          '**من دون المقاصة، يوفّر الـ kWh الذي تستهلكه بنفسك سعر التجزئة كاملًا، بينما لا يدرّ الـ kWh المُصدَّر سوى تعويض شركة التوريد.** عند الحد الأدنى القانوني يساوي هذا التعويض نصف السعر قبل ضريبة الطاقة وضريبة القيمة المضافة، أي أقل بكثير من نصف ما يكلفه الـ kWh عند العدّاد. يمكن للبطارية أو لنقل الاستهلاك إلى ساعات النهار، كتشغيل الغسالة عند الظهر، أن تلتقط جزءًا من هذا الفرق.',
          'تفترض منظمة المستهلكين Milieu Centraal أن نحو 30% من إنتاج منظومة سطح نموذجية يُستهلك مباشرة ونحو 70% يُصدَّر، وتذكر عائدًا سنويًا بدون مقاصة يبلغ نحو 170 يورو لست ألواح (أرقام استرشادية). المنظومات القابلة للتوصيل بالمقبس صغيرة مقارنةً بالحمل الأساسي الدائم للأسرة، لذا تُصدّر عادةً نسبة أقل؛ وبالنسبة إلى كثير منها يكون نقل الاستهلاك أرخص خطوة أولى وتبقى البطارية اختيارية. اختبار القرار في [هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟](/ar/balcony-solar/do-you-need-a-battery-balcony-solar)، والقواعد والأسعار الحالية في [بطاريات الطاقة الشمسية للشرفة في 2027](/ar/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer — مشروع القانون 36611 (Wet beëindiging salderingsregeling)',
            description: 'تواريخ التصويت (Tweede Kamer في 14 نوفمبر 2024؛ Eerste Kamer في 17 ديسمبر 2024)، والنفاذ في 1 يناير 2027، وحكم «التعويض المعقول»',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer — Salderen en terugleveren',
            description: 'إرشادات الجهة المنظِّمة للمستهلكين: حدّ أدنى 50% حتى 1 يناير 2030، ورسوم التصدير، والعقود التي تتجاوز تاريخ الانتهاء',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM — خبر عن رسوم التصدير والتعويض',
            description: 'موقف الجهة المنظِّمة: التعويض السالب صافيًا غير محظور ما لم تصبح التعرفة غير معقولة؛ وخطط الرقابة',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal — Salderingsregeling voor zonnepanelen',
            description: 'معلومات مستقلة للمستهلكين: انتهاء المقاصة، ونسبة الاستخدام المباشر، وعائد سنوي استرشادي بدون مقاصة',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'متى ينتهي نظام Net Metering في هولندا؟',
            a: 'في 1 يناير 2027. أقرّ Tweede Kamer قانون Wet beëindiging salderingsregeling في 14 نوفمبر 2024، وأقرّه Eerste Kamer في 17 ديسمبر 2024. وحتى ذلك التاريخ تستمر المقاصة الحالية.',
          },
          {
            q: 'كيف يعمل النظام الهولندي الحالي؟',
            a: 'تُجرى مقاصة 1:1 بين الكهرباء المسحوبة من الشبكة والمُصدَّرة إليها خلال فترة الفوترة، شاملةً ضريبة الطاقة وضريبة القيمة المضافة. حتى 1 يناير 2027 تدفع الأسرة التي تُصدّر 3,000 kWh وتسحب 4,000 kWh ثمن الفرق فقط، أي 1,000 kWh.',
          },
          {
            q: 'ما الذي يحلّ محل Net Metering بعد 1 يناير 2027؟',
            a: 'تدين شركات التوريد للأسر التي لديها فائض صافٍ بـ«تعويض معقول» عن الكهرباء المُصدَّرة. ووفق ACM يجب ألا يقل حتى 1 يناير 2030 عن 50% من السعر المدفوع للكهرباء دون ضريبة الطاقة وضريبة القيمة المضافة. لا يحدد القانون سعرًا ثابتًا، لذا يعتمد السعر الفعلي على شركة التوريد.',
          },
          {
            q: 'هل يمكن لشركات التوريد الاستمرار في فرض رسوم التصدير؟',
            a: 'نعم. وفق ACM تبقى رسوم التصدير (terugleverkosten) ممكنة، كمبلغ ثابت أو لكل kWh مُصدَّر، وقد تتجاوز أحيانًا التعويض. انظر إلى الرسم والتعويض معًا عند مقارنة العقود.',
          },
          {
            q: 'ماذا يحدث لعقد يمتد بعد 1 يناير 2027؟',
            a: 'لا تستطيع شركة التوريد تأجيل التاريخ القانوني، لكن شروط عقدك قد تمنحك حق المقاصة. ووفق ACM على الشركة تقسيم استهلاكك وتصديرك إلى الفترة حتى 31 ديسمبر 2026 والفترة منذ 1 يناير 2027.',
          },
          {
            q: 'هل تنطبق هذه القاعدة خارج هولندا؟',
            a: 'لا. إنه قانون هولندي. لدى الدول الأخرى، ومنها ألمانيا، قواعدها الخاصة للتصدير والتسجيل؛ راجع [دليل الوضع القانوني دولة بدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: 'هل ينبغي أن أشتري بطارية بسبب هذا التغيير؟',
            a: 'ليس تلقائيًا. يتسع الفرق بين سعر التجزئة وتعويض التصدير، مما يصبّ في مصلحة الاستهلاك الذاتي، لكن البطارية لا تُجدي إلا إذا تجاوز الفرق الموفَّر تكلفتها. ابدأ باختبار «الرقم الواحد» في دليل قرار البطارية.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[بطاريات الطاقة الشمسية للشرفة في 2027: هل تصبح معيارًا؟](/ar/balcony-solar/balcony-solar-battery-storage-standard-2027) — القواعد والأسعار الحالية والأدلة على المراجحة السعرية وراء سؤال التخزين',
          '[هل تحتاج إلى بطارية للطاقة الشمسية للشرفة؟](/ar/balcony-solar/do-you-need-a-battery-balcony-solar) — اختبار فجوة تعويض التصدير، المتأثر مباشرة بانتهاء saldering',
          '[هل الطاقة الشمسية للشرفة قانونية؟ دليل دولة بدولة](/ar/balcony-solar/is-balcony-solar-legal-country-guide) — متتبع قانوني عالمي',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-de.webp',
    title: 'Niederlande: Net Metering endet 2027 – Folgen für Balkonkraftwerke',
    seoTitle: 'Niederlande: Saldering endet 2027 – Balkonkraftwerk',
    intro: 'Die Niederlande beenden zum 1. Januar 2027 die Saldering, also die 1:1-Verrechnung von eingespeistem und bezogenem Strom. Das Gesetz hat das niederländische Parlament Ende 2024 passiert. Danach erhalten Haushalte, die Strom einspeisen, von ihrem Versorger eine „angemessene Vergütung“, für die bis 2030 eine gesetzliche Untergrenze gilt. Diese Seite behandelt nur die niederländische Änderung; sie ist kein allgemeiner EU-Ratgeber zum Net Metering und keine Rechts- oder Finanzberatung.',
    metaDescription: 'Die niederländische Saldering endet am 1. Januar 2027. Bis 2030 gilt eine Mindestvergütung von 50 % des Preises ohne Steuern. Folgen für Balkonkraftwerke.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Niederländische Balkonkraftwerk-Besitzer und -Käufer, die vom Ende der Saldering betroffen sind',
    primaryTerm: 'Saldering Niederlande endet 2027',
    targetKeywords: [
      'saldering 2027 niederlande',
      'netzeinspeisung balkonkraftwerk niederlande',
      'balkonkraftwerk niederlande 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**Die Niederlande beenden ihre 1:1-Verrechnung (Saldering) am 1. Januar 2027.** Bis zum 1. Januar 2027 zahlt ein Haushalt, der 3.000 kWh einspeist und 4.000 kWh bezieht, nur für die Differenz von 1.000 kWh. Ab 2027 zahlt der Versorger stattdessen für jede eingespeiste kWh eine „angemessene Vergütung“ (redelijke vergoeding): Bis zum 1. Januar 2030 muss sie mindestens 50 % des Strompreises ohne Energiesteuer und Mehrwertsteuer betragen, und Versorger dürfen weiterhin Einspeisegebühren erheben. Praktisch bedeutet das: Eine selbst verbrauchte kWh spart den vollen Endkundenpreis, eine eingespeiste kWh bringt deutlich weniger – Eigenverbrauch wird wertvoller, und für manche Haushalte auch ein Batteriespeicher.',
    quickAnswerTop: {
      de: {
        question: 'Endet das Net Metering für Balkonkraftwerke 2027?',
        answer: 'Ja, aber nur in den Niederlanden. Das Wet beëindiging salderingsregeling tritt am 1. Januar 2027 in Kraft (Abstimmung in der Tweede Kamer am 14. November 2024, in der Eerste Kamer am 17. Dezember 2024). Danach zahlen Versorger eine „angemessene Vergütung“ für eingespeisten Strom, die bis zum 1. Januar 2030 mindestens 50 % des Preises ohne Energiesteuer und Mehrwertsteuer betragen muss; Einspeisegebühren sind weiterhin erlaubt. Es handelt sich um ein niederländisches Gesetz; die Regeln anderer EU-Länder ändern sich dadurch nicht.',
        bullets: [
          'Die Verrechnung endet am 1. Januar 2027 durch das Wet beëindiging salderingsregeling (Gesetzentwurf 36611)',
          'Eingespeister Strom wird dann „angemessen“ vergütet: mindestens 50 % des Preises ohne Energiesteuer und Mehrwertsteuer bis zum 1. Januar 2030',
          'Versorger dürfen weiterhin Einspeisegebühren (terugleverkosten) erheben, die laut Regulierer ACM mitunter höher ausfallen als die Vergütung für den eingespeisten Strom',
          'Versorger können den Stichtag nicht verschieben; sie müssen Bezug und Einspeisung in die Zeiträume vor und ab dem 1. Januar 2027 aufteilen',
          'Eigenverbrauch gewinnt an Wert; ein Speicher lohnt sich nur, wenn die Lücke zwischen Bezugspreis und Einspeisevergütung groß genug ist',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Das Wichtigste auf einen Blick', anchor: '#key-takeaways', },
      { label: 'Die Regelung, die endet, und was sie ersetzt', anchor: '#current-scheme', },
      { label: 'Vertrags- und Gebührendetails, die Sie vor 2027 prüfen sollten', anchor: '#contract-check', },
      { label: 'Warum Eigenverbrauch und Batteriespeicher an Wert gewinnen', anchor: '#battery-connection', },
      { label: 'Quellen', anchor: '#sources', },
      { label: 'Häufig gestellte Fragen', anchor: '#faq', },
      { label: 'Weiterführende Artikel', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die Niederlande beenden die Saldering (1:1-Verrechnung) am 1. Januar 2027; das Gesetz wurde am 14. November 2024 von der Tweede Kamer und am 17. Dezember 2024 von der Eerste Kamer angenommen.',
          'Bis zum 1. Januar 2027 werden eingespeister und bezogener Strom verrechnet: Wer 3.000 kWh einspeist und 4.000 kWh bezieht, zahlt für 1.000 kWh.',
          'Ab 2027 schulden Versorger eine „angemessene Vergütung“ für eingespeisten Strom. Bis zum 1. Januar 2030 muss sie laut der niederländischen Regulierungsbehörde ACM mindestens 50 % des Preises ohne Energiesteuer und Mehrwertsteuer betragen.',
          'Einspeisegebühren bleiben erlaubt und können höher sein als die Vergütung für den eingespeisten Strom. Die ACM hat erklärt, dass eine netto negative Vergütung als solche nicht verboten ist, sofern sie nicht zu unangemessenen Tarifen führt.',
          'Das ist eine rein niederländische Änderung. Sie berührt die Regeln für Balkonkraftwerke in Deutschland oder anderen Ländern nicht.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'Die Regelung, die endet, und was sie ersetzt',
        content: [
          '**Bei der Saldering werden aus dem Netz bezogener und ins Netz eingespeister Strom 1:1 verrechnet, einschließlich Energiesteuer und Mehrwertsteuer.** Bis zum 1. Januar 2027 zahlt ein Haushalt, der 3.000 kWh einspeist und 4.000 kWh bezieht, für die Differenz von 1.000 kWh. Die Regelung endet gesetzlich am 1. Januar 2027. Das Wet beëindiging salderingsregeling (Gesetzentwurf 36611) wurde am 14. November 2024 von der Tweede Kamer und am 17. Dezember 2024 von der Eerste Kamer angenommen.',
          '**Ab dem 1. Januar 2027 haben Haushalte mit einem Netto-Überschuss Anspruch auf eine „angemessene Vergütung“ (redelijke vergoeding) ihres Versorgers.** Das Gesetz legt keinen festen Preis fest. Laut der Verbraucherseite der Regulierungsbehörde ACM muss die Vergütung bis zum 1. Januar 2030 mindestens 50 % des gezahlten Strompreises ohne Energiesteuer und Mehrwertsteuer betragen. Die ACM überwacht, ob die Vergütung angemessen ist. Da die Untergrenze nur bis 2030 vorgesehen ist, sollten Sie bei Vertragsabschluss oder -verlängerung die dann geltenden Regeln prüfen.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'Vertrags- und Gebührendetails, die Sie vor 2027 prüfen sollten',
        content: [
          '**Prüfen Sie in Ihrem Stromvertrag drei Punkte: die Einspeisevergütung pro kWh, die Einspeisegebühr (terugleverkosten) und den Umgang des Vertrags mit dem Wechsel am 1. Januar 2027.** Die ACM erläutert, dass Einspeisegebühren ein Festbetrag oder ein Preis pro eingespeister kWh sein können und mitunter höher ausfallen als die Vergütung für den eingespeisten Strom.',
          '**Versorger können den gesetzlichen Stichtag nicht verschieben, die Vertragsbedingungen können aber weiterhin eine Rolle spielen.** Die ACM führt aus, dass ein Vertrag nach seinen eigenen Bedingungen weiterhin ein Recht auf Verrechnung gewähren kann und dass der Versorger Bezug und Einspeisung in den Zeitraum bis zum 31. Dezember 2026 und den Zeitraum ab dem 1. Januar 2027 aufteilen muss. Die ACM rät, Angebote sorgfältig zu vergleichen, besonders Verträge mit Laufzeit über 2027 hinaus. Konkrete Versorgertarife nennen wir hier nicht, da sich Angebote häufig ändern.',
        ],
        callouts: [
          { type: 'info', text: 'Diese Seite bietet allgemeine Informationen, keine Rechts- oder Finanzberatung. Prüfen Sie Ihren eigenen Vertrag und fragen Sie Ihren Versorger oder eine qualifizierte Beratung, bevor Sie entscheiden.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Warum Eigenverbrauch und Batteriespeicher an Wert gewinnen',
        content: [
          '**Ohne Verrechnung spart eine selbst verbrauchte kWh den vollen Endkundenpreis, während eine eingespeiste kWh nur die Vergütung des Versorgers einbringt.** An der gesetzlichen Untergrenze beträgt diese Vergütung die Hälfte des Preises vor Energiesteuer und Mehrwertsteuer – deutlich weniger als die Hälfte dessen, was eine kWh am Zähler kostet. Ein Speicher oder verlagerter Verbrauch, etwa eine Waschmaschine am Mittag, kann einen Teil dieser Lücke abschöpfen.',
          'Die Verbraucherorganisation Milieu Centraal geht davon aus, dass bei einer typischen Dachanlage etwa 30 % des Ertrags direkt genutzt und rund 70 % eingespeist werden, und nennt einen Jahresertrag ohne Verrechnung von etwa 170 € für sechs Module (Richtwerte). Steckersolargeräte sind im Verhältnis zur dauerhaften Grundlast eines Haushalts klein und speisen daher typischerweise einen geringeren Anteil ein; für viele ist das Verlagern des Verbrauchs der günstigere erste Schritt, und ein Speicher ist optional. Den Entscheidungstest finden Sie unter [Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?](/de/balcony-solar/do-you-need-a-battery-balcony-solar), aktuelle Regeln und Preise unter [Batteriespeicher für Balkonkraftwerke 2027](/de/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer – Gesetzentwurf 36611, Wet beëindiging salderingsregeling',
            description: 'Abstimmungsdaten (Tweede Kamer 14. November 2024; Eerste Kamer 17. Dezember 2024), Inkrafttreten 1. Januar 2027, Regelung zur „angemessenen Vergütung“',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer – Salderen en terugleveren',
            description: 'Verbraucherinformation des Regulierers: Untergrenze von 50 % bis 1. Januar 2030, Einspeisegebühren, Verträge über den Stichtag hinaus',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM – Meldung zu Einspeisegebühren und Vergütung',
            description: 'Aussage des Regulierers, dass netto negative Vergütungen nicht verboten sind, solange die Tarife nicht unangemessen werden; Aufsichtspläne',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal – Salderingsregeling voor zonnepanelen',
            description: 'Unabhängige Verbraucherinformation: Ende der Verrechnung, Direktnutzungsanteil, Richtwert für den Jahresertrag ohne Verrechnung',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wann endet das Net Metering in den Niederlanden?',
            a: 'Am 1. Januar 2027. Das Wet beëindiging salderingsregeling wurde am 14. November 2024 von der Tweede Kamer und am 17. Dezember 2024 von der Eerste Kamer angenommen. Bis zum Stichtag gilt die bisherige Verrechnung weiter.',
          },
          {
            q: 'Wie funktioniert die aktuelle niederländische Regelung?',
            a: 'Aus dem Netz bezogener und eingespeister Strom werden über den Abrechnungszeitraum 1:1 verrechnet, einschließlich Energiesteuer und Mehrwertsteuer. Bis zum 1. Januar 2027 zahlt ein Haushalt, der 3.000 kWh einspeist und 4.000 kWh bezieht, nur für die Differenz von 1.000 kWh.',
          },
          {
            q: 'Was ersetzt das Net Metering nach dem 1. Januar 2027?',
            a: 'Versorger schulden Haushalten mit Netto-Überschuss eine „angemessene Vergütung“ für eingespeisten Strom. Laut ACM muss sie bis zum 1. Januar 2030 mindestens 50 % des gezahlten Strompreises ohne Energiesteuer und Mehrwertsteuer betragen. Das Gesetz legt keinen festen Preis fest, der tatsächliche Satz hängt also von Ihrem Versorger ab.',
          },
          {
            q: 'Dürfen Versorger weiterhin Einspeisegebühren erheben?',
            a: 'Ja. Laut ACM bleiben Einspeisegebühren (terugleverkosten) möglich, als Festbetrag oder pro eingespeister kWh, und sie können mitunter höher sein als die Vergütung. Betrachten Sie Gebühr und Vergütung beim Vertragsvergleich gemeinsam.',
          },
          {
            q: 'Was passiert mit einem Vertrag, der über den 1. Januar 2027 hinausläuft?',
            a: 'Ihr Versorger kann den gesetzlichen Stichtag nicht verschieben, die Vertragsbedingungen können Ihnen aber weiterhin ein Recht auf Verrechnung geben. Laut ACM muss der Versorger Bezug und Einspeisung in den Zeitraum bis zum 31. Dezember 2026 und den Zeitraum ab dem 1. Januar 2027 aufteilen.',
          },
          {
            q: 'Gilt diese Regel auch außerhalb der Niederlande?',
            a: 'Nein, es ist ein niederländisches Gesetz. Andere Länder, auch Deutschland, haben eigene Einspeise- und Anmelderegeln; siehe den [Länderüberblick zur Rechtslage](/de/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: 'Sollte ich mir wegen dieser Änderung einen Batteriespeicher zulegen?',
            a: 'Nicht automatisch. Die Lücke zwischen Endkundenpreis und Einspeisevergütung wächst, was den Eigenverbrauch begünstigt, aber ein Speicher lohnt sich nur, wenn die eingesparte Lücke seine Kosten übersteigt. Beginnen Sie mit dem Ein-Zahlen-Test im Entscheidungsratgeber zum Batteriespeicher.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Batteriespeicher für Balkonkraftwerke 2027: Wird er zum Standard?](/de/balcony-solar/balcony-solar-battery-storage-standard-2027) — aktuelle Regeln, Preise und die Belege zur Tarifarbitrage hinter der Speicherfrage',
          '[Brauchen Sie einen Batteriespeicher für Ihr Balkonkraftwerk?](/de/balcony-solar/do-you-need-a-battery-balcony-solar) — der Entscheidungstest zur Einspeisevergütungslücke, die vom Ende der Saldering direkt betroffen ist',
          '[Ist Balkonkraftwerk-Solar legal? Ein Länder-Überblick](/de/balcony-solar/is-balcony-solar-legal-country-guide) — globaler Rechtstracker',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-es.webp',
    title: 'Países Bajos: el fin del net metering en 2027 y la energía solar de balcón',
    seoTitle: 'Países Bajos: fin del saldering en 2027 y solar de balcón',
    intro: 'Los Países Bajos ponen fin el 1 de enero de 2027 al saldering, la compensación 1:1 entre la electricidad inyectada y la consumida. La ley fue aprobada por el Parlamento neerlandés a finales de 2024. A partir de entonces, los hogares que inyectan electricidad reciben de su comercializadora una «compensación razonable», con un mínimo legal hasta 2030. Esta página trata solo el cambio neerlandés; no es una guía general de net metering en la UE ni asesoramiento jurídico o financiero.',
    metaDescription: 'El saldering neerlandés termina el 1 de enero de 2027. Hasta 2030 se paga al menos el 50 % del precio sin impuestos. Qué implica para el solar de balcón.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Propietarios y compradores neerlandeses de energía solar de balcón afectados por el fin del saldering',
    primaryTerm: 'fin del saldering países bajos 2027',
    targetKeywords: [
      'saldering 2027 países bajos',
      'balance neto energía solar balcón países bajos',
      'energía solar de balcón países bajos 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**Los Países Bajos ponen fin a su compensación 1:1 (saldering) el 1 de enero de 2027.** Hasta el 1 de enero de 2027, un hogar que inyecta 3.000 kWh y consume 4.000 kWh paga solo la diferencia de 1.000 kWh. A partir de 2027, la comercializadora paga en cambio una «compensación razonable» (redelijke vergoeding) por cada kWh inyectado: hasta el 1 de enero de 2030 debe ser al menos el 50 % del precio de la electricidad sin impuesto energético ni IVA, y las comercializadoras pueden seguir cobrando cargos por inyección. En la práctica, un kWh que usas tú mismo ahorra el precio minorista completo, mientras que un kWh exportado rinde mucho menos: el autoconsumo gana valor y, para algunos hogares, también la batería.',
    quickAnswerTop: {
      es: {
        question: '¿Termina el net metering para la energía solar de balcón en 2027?',
        answer: 'Sí, solo en los Países Bajos. La Wet beëindiging salderingsregeling entra en vigor el 1 de enero de 2027 (votación de la Tweede Kamer el 14 de noviembre de 2024 y de la Eerste Kamer el 17 de diciembre de 2024). Después de esa fecha, las comercializadoras pagan una «compensación razonable» por la electricidad inyectada, que hasta el 1 de enero de 2030 debe ser al menos el 50 % del precio sin impuesto energético ni IVA, y pueden cobrar cargos por inyección. Es una ley neerlandesa; no cambia las reglas de otros países de la UE.',
        bullets: [
          'La compensación termina el 1 de enero de 2027 según la Wet beëindiging salderingsregeling (proyecto de ley 36611)',
          'La electricidad inyectada recibe entonces una «compensación razonable»: al menos el 50 % del precio sin impuesto energético ni IVA hasta el 1 de enero de 2030',
          'Las comercializadoras pueden seguir cobrando cargos por inyección (terugleverkosten), que según el regulador ACM a veces superan el pago por la electricidad inyectada',
          'Las comercializadoras no pueden aplazar la fecha; deben dividir consumo e inyección en los periodos anterior y posterior al 1 de enero de 2027',
          'El autoconsumo gana valor; una batería solo compensa si la diferencia entre tu precio de compra y tu pago por inyección es suficientemente grande',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways', },
      { label: 'El esquema que termina y lo que lo sustituye', anchor: '#current-scheme', },
      { label: 'Detalles de contrato y cargos que conviene revisar antes de 2027', anchor: '#contract-check', },
      { label: 'Por qué ganan valor el autoconsumo y las baterías', anchor: '#battery-connection', },
      { label: 'Fuentes', anchor: '#sources', },
      { label: 'Preguntas frecuentes', anchor: '#faq', },
      { label: 'Lecturas relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los Países Bajos terminan el saldering (compensación 1:1) el 1 de enero de 2027; la ley fue aprobada por la Tweede Kamer el 14 de noviembre de 2024 y por la Eerste Kamer el 17 de diciembre de 2024.',
          'Hasta el 1 de enero de 2027, la electricidad inyectada y la consumida se compensan: inyectar 3.000 kWh y consumir 4.000 kWh significa pagar 1.000 kWh.',
          'Desde 2027 las comercializadoras deben una «compensación razonable» por la electricidad inyectada. Hasta el 1 de enero de 2030 debe ser al menos el 50 % del precio sin impuesto energético ni IVA, según el regulador neerlandés ACM.',
          'Los cargos por inyección siguen permitidos y pueden superar el pago por la electricidad inyectada. La ACM ha indicado que una compensación neta negativa no está prohibida en sí misma, salvo que genere tarifas poco razonables.',
          'Es un cambio exclusivamente neerlandés. No modifica las reglas de la energía solar de balcón en Alemania ni en otros países.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'El esquema que termina y lo que lo sustituye',
        content: [
          '**Con el saldering, la electricidad tomada de la red y la inyectada en ella se compensan 1:1, incluidos el impuesto energético y el IVA.** Hasta el 1 de enero de 2027, un hogar que inyecta 3.000 kWh y consume 4.000 kWh paga la diferencia de 1.000 kWh. El esquema termina por ley el 1 de enero de 2027. La Wet beëindiging salderingsregeling (proyecto de ley 36611) fue aprobada por la Tweede Kamer el 14 de noviembre de 2024 y por la Eerste Kamer el 17 de diciembre de 2024.',
          '**Desde el 1 de enero de 2027, los hogares con excedente neto tienen derecho a una «compensación razonable» (redelijke vergoeding) de su comercializadora.** La ley no fija un precio. Según el sitio para consumidores del regulador ACM, la compensación debe ser al menos el 50 % del precio pagado por la electricidad sin impuesto energético ni IVA hasta el 1 de enero de 2030. La ACM supervisa que la compensación sea razonable. Como el mínimo está previsto solo hasta 2030, revisa las reglas vigentes cuando firmes o renueves un contrato.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'Detalles de contrato y cargos que conviene revisar antes de 2027',
        content: [
          '**Revisa tres puntos de tu contrato de energía: el pago por kWh inyectado, el cargo por inyección (terugleverkosten) y cómo trata el contrato el cambio del 1 de enero de 2027.** La ACM explica que los cargos por inyección pueden ser un importe fijo o un cargo por kWh inyectado, y que a veces son mayores que la compensación por la electricidad inyectada.',
          '**Las comercializadoras no pueden aplazar la fecha legal de fin, pero las condiciones de tu contrato pueden seguir importando.** La ACM indica que un contrato puede seguir otorgando un derecho a compensación según sus propios términos, y que la comercializadora debe dividir tu consumo e inyección en el periodo hasta el 31 de diciembre de 2026 y el periodo desde el 1 de enero de 2027. La ACM aconseja comparar las ofertas con cuidado, sobre todo los contratos que superan 2027. Aquí no citamos tarifas de comercializadoras porque las ofertas cambian a menudo.',
        ],
        callouts: [
          { type: 'info', text: 'Esta página ofrece información general, no asesoramiento jurídico ni financiero. Revisa tu propio contrato y consulta con tu comercializadora o con un asesor cualificado antes de decidir.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Por qué ganan valor el autoconsumo y las baterías',
        content: [
          '**Sin compensación, un kWh que usas tú mismo ahorra el precio minorista completo, mientras que un kWh exportado solo rinde la compensación de la comercializadora.** En el mínimo legal, ese pago es la mitad del precio antes del impuesto energético y el IVA, es decir, bastante menos de la mitad de lo que cuesta un kWh en el contador. Una batería o el desplazamiento del consumo, por ejemplo poner la lavadora a mediodía, puede aprovechar parte de esa diferencia.',
          'La organización de consumidores Milieu Centraal supone que alrededor del 30 % de la producción de una instalación de tejado típica se usa directamente y cerca del 70 % se inyecta, y da un rendimiento anual sin compensación de unos 170 € para seis paneles (cifras orientativas). Los sistemas plug-in son pequeños frente al consumo base permanente de un hogar, por lo que normalmente inyectan una parte menor; para muchos, desplazar el consumo es el primer paso más barato y la batería es opcional. La prueba de decisión está en [¿Necesitas una batería para la energía solar de balcón?](/es/balcony-solar/do-you-need-a-battery-balcony-solar) y las reglas y precios actuales en [Baterías para energía solar de balcón en 2027](/es/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer – proyecto de ley 36611, Wet beëindiging salderingsregeling',
            description: 'Fechas de votación (Tweede Kamer 14 de noviembre de 2024; Eerste Kamer 17 de diciembre de 2024), entrada en vigor el 1 de enero de 2027, disposición sobre la «compensación razonable»',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer – Salderen en terugleveren',
            description: 'Información del regulador para consumidores: mínimo del 50 % hasta el 1 de enero de 2030, cargos por inyección, contratos que cruzan la fecha de fin',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM – noticia sobre cargos por inyección y compensación',
            description: 'Declaración del regulador: la compensación neta negativa no está prohibida mientras las tarifas no sean poco razonables; planes de supervisión',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal – Salderingsregeling voor zonnepanelen',
            description: 'Información independiente para consumidores: fin de la compensación, proporción de uso directo, rendimiento anual orientativo sin compensación',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuándo termina el net metering en los Países Bajos?',
            a: 'El 1 de enero de 2027. La Wet beëindiging salderingsregeling fue aprobada por la Tweede Kamer el 14 de noviembre de 2024 y por la Eerste Kamer el 17 de diciembre de 2024. Hasta esa fecha sigue vigente la compensación actual.',
          },
          {
            q: '¿Cómo funciona el esquema neerlandés actual?',
            a: 'La electricidad tomada de la red y la inyectada se compensan 1:1 durante el periodo de facturación, incluidos el impuesto energético y el IVA. Hasta el 1 de enero de 2027, un hogar que inyecta 3.000 kWh y consume 4.000 kWh paga solo la diferencia de 1.000 kWh.',
          },
          {
            q: '¿Qué sustituye al net metering después del 1 de enero de 2027?',
            a: 'Las comercializadoras deben a los hogares con excedente neto una «compensación razonable» por la electricidad inyectada. Según la ACM, hasta el 1 de enero de 2030 debe ser al menos el 50 % del precio pagado por la electricidad sin impuesto energético ni IVA. La ley no fija un precio, así que la tarifa real depende de tu comercializadora.',
          },
          {
            q: '¿Pueden las comercializadoras seguir cobrando cargos por inyección?',
            a: 'Sí. Según la ACM, los cargos por inyección (terugleverkosten) siguen siendo posibles, como importe fijo o por kWh inyectado, y a veces pueden ser mayores que la compensación. Mira el cargo y el pago juntos al comparar contratos.',
          },
          {
            q: '¿Qué pasa con un contrato que dura más allá del 1 de enero de 2027?',
            a: 'Tu comercializadora no puede aplazar la fecha legal, pero las condiciones de tu contrato pueden seguir dándote derecho a compensación. Según la ACM, la comercializadora debe dividir tu consumo e inyección en el periodo hasta el 31 de diciembre de 2026 y el periodo desde el 1 de enero de 2027.',
          },
          {
            q: '¿Se aplica esta regla fuera de los Países Bajos?',
            a: 'No. Es una ley neerlandesa. Otros países, incluida Alemania, tienen sus propias reglas de inyección y registro; consulta la [guía legal país por país](/es/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: '¿Debería comprar una batería por este cambio?',
            a: 'No automáticamente. La diferencia entre el precio minorista y el pago por inyección aumenta, lo que favorece el autoconsumo, pero una batería solo compensa si la diferencia ahorrada supera su coste. Empieza por la prueba de un solo número de la guía de decisión sobre baterías.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Baterías para energía solar de balcón en 2027: ¿se vuelven estándar?](/es/balcony-solar/balcony-solar-battery-storage-standard-2027) — reglas y precios actuales y la evidencia sobre arbitraje tarifario detrás de la pregunta del almacenamiento',
          '[¿Necesitas una batería para la energía solar de balcón?](/es/balcony-solar/do-you-need-a-battery-balcony-solar) — la prueba de la brecha de pago por inyección, afectada directamente por el fin del saldering',
          '[¿Es legal la energía solar de balcón? Guía por países](/es/balcony-solar/is-balcony-solar-legal-country-guide) — seguimiento legal global',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-fr.webp',
    title: 'Pays-Bas : la fin du net metering en 2027 et le solaire de balcon',
    seoTitle: 'Pays-Bas : fin du saldering en 2027 et solaire de balcon',
    intro: 'Les Pays-Bas mettent fin au 1er janvier 2027 au saldering, la compensation 1:1 entre l\'électricité injectée et l\'électricité soutirée. La loi a été adoptée par le Parlement néerlandais fin 2024. Ensuite, les ménages qui injectent de l\'électricité reçoivent de leur fournisseur une « rémunération raisonnable », assortie d\'un plancher légal jusqu\'en 2030. Cette page ne traite que de ce changement néerlandais ; ce n\'est ni un guide général du net metering dans l\'UE ni un conseil juridique ou financier.',
    metaDescription: 'Le saldering néerlandais prend fin le 1er janvier 2027. Jusqu\'en 2030, au moins 50 % du prix hors taxes est garanti. Effets sur le solaire de balcon.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Propriétaires et acheteurs néerlandais de solaire de balcon concernés par la fin du saldering',
    primaryTerm: 'fin du saldering pays-bas 2027',
    targetKeywords: [
      'saldering 2027 pays-bas',
      'compensation solaire balcon pays-bas',
      'solaire de balcon pays-bas 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**Les Pays-Bas mettent fin à leur dispositif de compensation 1:1 (saldering) le 1er janvier 2027.** Jusqu\'au 1er janvier 2027, un ménage qui injecte 3 000 kWh et soutire 4 000 kWh ne paie que la différence de 1 000 kWh. À partir de 2027, le fournisseur paie à la place une « rémunération raisonnable » (redelijke vergoeding) pour chaque kWh injecté : jusqu\'au 1er janvier 2030, elle doit représenter au moins 50 % du prix de l\'électricité hors taxe énergétique et TVA, et les fournisseurs peuvent toujours facturer des frais d\'injection. En pratique, un kWh que vous consommez vous-même économise le prix de détail complet, tandis qu\'un kWh exporté rapporte bien moins : l\'autoconsommation gagne en valeur et, pour certains ménages, la batterie aussi.',
    quickAnswerTop: {
      fr: {
        question: 'Le net metering prend-il fin pour le solaire de balcon en 2027 ?',
        answer: 'Oui, aux Pays-Bas uniquement. La Wet beëindiging salderingsregeling entre en vigueur le 1er janvier 2027 (vote de la Tweede Kamer le 14 novembre 2024, vote de la Eerste Kamer le 17 décembre 2024). Après cette date, les fournisseurs paient une « rémunération raisonnable » pour l\'électricité injectée, d\'au moins 50 % du prix hors taxe énergétique et TVA jusqu\'au 1er janvier 2030, et ils peuvent facturer des frais d\'injection. Il s\'agit d\'une loi néerlandaise ; elle ne modifie pas les règles des autres pays de l\'UE.',
        bullets: [
          'La compensation prend fin le 1er janvier 2027 en vertu de la Wet beëindiging salderingsregeling (projet de loi 36611)',
          'L\'électricité injectée reçoit alors une « rémunération raisonnable » : au moins 50 % du prix hors taxe énergétique et TVA jusqu\'au 1er janvier 2030',
          'Les fournisseurs peuvent toujours facturer des frais d\'injection (terugleverkosten), qui, selon le régulateur ACM, dépassent parfois la rémunération de l\'électricité injectée',
          'Les fournisseurs ne peuvent pas reporter la date ; ils doivent répartir consommation et injection entre les périodes avant et à partir du 1er janvier 2027',
          'L\'autoconsommation gagne en valeur ; une batterie n\'est rentable que si l\'écart entre votre prix d\'achat et votre rémunération d\'injection est assez grand',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways', },
      { label: 'Le dispositif qui prend fin et ce qui le remplace', anchor: '#current-scheme', },
      { label: 'Les points de contrat et de frais à vérifier avant 2027', anchor: '#contract-check', },
      { label: 'Pourquoi l\'autoconsommation et les batteries gagnent en valeur', anchor: '#battery-connection', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Questions fréquemment posées', anchor: '#faq', },
      { label: 'Lectures connexes', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Les Pays-Bas mettent fin au saldering (compensation 1:1) le 1er janvier 2027 ; la loi a été adoptée par la Tweede Kamer le 14 novembre 2024 et par la Eerste Kamer le 17 décembre 2024.',
          'Jusqu\'au 1er janvier 2027, l\'électricité injectée et soutirée est compensée : injecter 3 000 kWh et en soutirer 4 000 revient à payer 1 000 kWh.',
          'À partir de 2027, les fournisseurs doivent une « rémunération raisonnable » pour l\'électricité injectée. Jusqu\'au 1er janvier 2030, elle doit atteindre au moins 50 % du prix hors taxe énergétique et TVA, selon le régulateur néerlandais ACM.',
          'Les frais d\'injection restent autorisés et peuvent dépasser la rémunération de l\'électricité injectée. L\'ACM a indiqué qu\'une rémunération nette négative n\'est pas interdite en soi, tant qu\'elle n\'aboutit pas à des tarifs déraisonnables.',
          'Il s\'agit d\'un changement purement néerlandais. Il ne modifie pas les règles du solaire de balcon en Allemagne ni ailleurs.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'Le dispositif qui prend fin et ce qui le remplace',
        content: [
          '**Avec le saldering, l\'électricité soutirée du réseau et celle qui y est injectée sont compensées 1:1, taxe énergétique et TVA comprises.** Jusqu\'au 1er janvier 2027, un ménage qui injecte 3 000 kWh et soutire 4 000 kWh paie la différence de 1 000 kWh. Le dispositif prend fin par la loi le 1er janvier 2027. La Wet beëindiging salderingsregeling (projet de loi 36611) a été adoptée par la Tweede Kamer le 14 novembre 2024 et par la Eerste Kamer le 17 décembre 2024.',
          '**À partir du 1er janvier 2027, les ménages ayant un excédent net ont droit à une « rémunération raisonnable » (redelijke vergoeding) de leur fournisseur.** La loi ne fixe pas de prix. Selon le site grand public du régulateur ACM, la rémunération doit représenter au moins 50 % du prix payé pour l\'électricité hors taxe énergétique et TVA jusqu\'au 1er janvier 2030. L\'ACM contrôle le caractère raisonnable de la rémunération. Comme le plancher n\'est prévu que jusqu\'en 2030, vérifiez les règles en vigueur lorsque vous signez ou renouvelez un contrat.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'Les points de contrat et de frais à vérifier avant 2027',
        content: [
          '**Vérifiez trois éléments dans votre contrat d\'énergie : la rémunération d\'injection par kWh, les frais d\'injection (terugleverkosten) et la façon dont le contrat gère le passage du 1er janvier 2027.** L\'ACM explique que les frais d\'injection peuvent être un montant fixe ou un tarif par kWh injecté, et qu\'ils peuvent parfois dépasser la rémunération de l\'électricité injectée.',
          '**Les fournisseurs ne peuvent pas reporter la date légale, mais les conditions de votre contrat peuvent rester importantes.** L\'ACM précise qu\'un contrat peut encore ouvrir un droit à la compensation selon ses propres termes, et que le fournisseur doit répartir votre consommation et votre injection entre la période jusqu\'au 31 décembre 2026 et celle à partir du 1er janvier 2027. L\'ACM conseille de comparer attentivement les offres, surtout les contrats qui dépassent 2027. Nous ne citons pas de tarifs de fournisseurs, car les offres changent souvent.',
        ],
        callouts: [
          { type: 'info', text: 'Cette page donne des informations générales, pas un conseil juridique ou financier. Vérifiez votre propre contrat et interrogez votre fournisseur ou un conseiller qualifié avant de décider.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Pourquoi l\'autoconsommation et les batteries gagnent en valeur',
        content: [
          '**Sans compensation, un kWh consommé vous-même économise le prix de détail complet, alors qu\'un kWh exporté ne rapporte que la rémunération du fournisseur.** Au plancher légal, cette rémunération vaut la moitié du prix avant taxe énergétique et TVA, soit bien moins de la moitié de ce que coûte un kWh au compteur. Une batterie ou un décalage de la consommation, par exemple un lave-linge lancé à midi, peut capter une partie de cet écart.',
          'L\'association de consommateurs Milieu Centraal part du principe qu\'environ 30 % de la production d\'une installation de toit typique est utilisée directement et environ 70 % injectée, et indique un rendement annuel sans compensation d\'environ 170 € pour six panneaux (valeurs indicatives). Les kits plug-in sont petits par rapport à la consommation de base permanente d\'un foyer ; ils injectent donc généralement une part plus faible, et pour beaucoup d\'entre eux, décaler la consommation est la première étape la moins chère, la batterie restant facultative. Le test de décision se trouve dans [Faut-il une batterie pour le solaire de balcon ?](/fr/balcony-solar/do-you-need-a-battery-balcony-solar), les règles et prix actuels dans [Les batteries pour le solaire de balcon en 2027](/fr/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer – projet de loi 36611, Wet beëindiging salderingsregeling',
            description: 'Dates de vote (Tweede Kamer 14 novembre 2024 ; Eerste Kamer 17 décembre 2024), entrée en vigueur le 1er janvier 2027, disposition sur la « rémunération raisonnable »',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer – Salderen en terugleveren',
            description: 'Information du régulateur pour les consommateurs : plancher de 50 % jusqu\'au 1er janvier 2030, frais d\'injection, contrats chevauchant la date de fin',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM – actualité sur les frais d\'injection et la rémunération',
            description: 'Déclaration du régulateur : une rémunération nette négative n\'est pas interdite tant que les tarifs ne deviennent pas déraisonnables ; projets de contrôle',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal – Salderingsregeling voor zonnepanelen',
            description: 'Information indépendante pour les consommateurs : fin de la compensation, part d\'usage direct, rendement annuel indicatif sans compensation',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quand le net metering prend-il fin aux Pays-Bas ?',
            a: 'Le 1er janvier 2027. La Wet beëindiging salderingsregeling a été adoptée par la Tweede Kamer le 14 novembre 2024 et par la Eerste Kamer le 17 décembre 2024. Jusqu\'à cette date, la compensation actuelle continue de s\'appliquer.',
          },
          {
            q: 'Comment fonctionne le dispositif néerlandais actuel ?',
            a: 'L\'électricité soutirée du réseau et celle qui y est injectée sont compensées 1:1 sur la période de facturation, taxe énergétique et TVA comprises. Jusqu\'au 1er janvier 2027, un ménage qui injecte 3 000 kWh et soutire 4 000 kWh ne paie que la différence de 1 000 kWh.',
          },
          {
            q: 'Qu\'est-ce qui remplace le net metering après le 1er janvier 2027 ?',
            a: 'Les fournisseurs doivent aux ménages ayant un excédent net une « rémunération raisonnable » pour l\'électricité injectée. Selon l\'ACM, elle doit atteindre au moins 50 % du prix payé pour l\'électricité hors taxe énergétique et TVA jusqu\'au 1er janvier 2030. La loi ne fixe pas de prix, le tarif réel dépend donc de votre fournisseur.',
          },
          {
            q: 'Les fournisseurs peuvent-ils encore facturer des frais d\'injection ?',
            a: 'Oui. Selon l\'ACM, les frais d\'injection (terugleverkosten) restent possibles, sous forme de montant fixe ou par kWh injecté, et ils peuvent parfois dépasser la rémunération. Examinez les frais et la rémunération ensemble lorsque vous comparez les contrats.',
          },
          {
            q: 'Que devient un contrat qui dépasse le 1er janvier 2027 ?',
            a: 'Votre fournisseur ne peut pas reporter la date légale, mais les conditions de votre contrat peuvent encore vous ouvrir un droit à la compensation. Selon l\'ACM, le fournisseur doit répartir votre consommation et votre injection entre la période jusqu\'au 31 décembre 2026 et celle à partir du 1er janvier 2027.',
          },
          {
            q: 'Cette règle s\'applique-t-elle hors des Pays-Bas ?',
            a: 'Non. C\'est une loi néerlandaise. Les autres pays, dont l\'Allemagne, ont leurs propres règles d\'injection et de déclaration ; voir le [guide juridique pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: 'Dois-je acheter une batterie à cause de ce changement ?',
            a: 'Pas automatiquement. L\'écart entre le prix de détail et la rémunération d\'injection s\'élargit, ce qui favorise l\'autoconsommation, mais une batterie n\'est rentable que si l\'écart économisé dépasse son coût. Commencez par le test à un chiffre du guide de décision sur la batterie.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Les batteries pour le solaire de balcon en 2027 : un nouveau standard ?](/fr/balcony-solar/balcony-solar-battery-storage-standard-2027) — règles et prix actuels, et les preuves sur l\'arbitrage tarifaire derrière la question du stockage',
          '[Faut-il une batterie pour le solaire de balcon ?](/fr/balcony-solar/do-you-need-a-battery-balcony-solar) — le test de l\'écart de rémunération d\'injection, directement concerné par la fin du saldering',
          '[Le solaire de balcon est-il légal ? Guide pays par pays](/fr/balcony-solar/is-balcony-solar-legal-country-guide) — suivi juridique mondial',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-ja.webp',
    title: 'オランダのネットメータリングが2027年に終了：バルコニーソーラーへの影響',
    seoTitle: 'オランダのサルデリング2027年終了とバルコニーソーラー',
    intro: 'オランダは2027年1月1日に、系統への送電量と購入量を1対1で相殺する「サルデリング（saldering）」を終了します。法律は2024年末にオランダ議会で可決されました。以後、余剰電力を送電する世帯は、小売事業者から「合理的な対価」を受け取り、2030年までは法定の下限が適用されます。このページが扱うのはオランダの変更のみです。EU全体のネットメータリングの解説ではなく、法律・金融上の助言でもありません。',
    metaDescription: 'オランダのサルデリングは2027年1月1日に終了。2030年まで、売電の対価は税抜き電気料金の50％以上。バルコニーソーラーへの影響を解説します。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '約5分',
    educationalLevel: 'Beginner',
    audience: 'サルデリング終了の影響を受けるオランダのバルコニーソーラー所有者・購入者',
    primaryTerm: 'オランダ サルデリング終了 2027',
    targetKeywords: ['サルデリング 2027', 'オランダ ネットメータリング バルコニーソーラー', 'バルコニーソーラー オランダ 2027', 'terugleververgoeding 2027'],
    leadAnswerBlock: '**オランダは2027年1月1日に、1対1のネットメータリング（サルデリング）を終了します。** 2027年1月1日までは、3,000 kWhを送電し4,000 kWhを購入した世帯は、差し引き1,000 kWh分だけを支払います。2027年からは、送電した1 kWhごとに小売事業者が「合理的な対価」（redelijke vergoeding）を支払います。2030年1月1日までは、エネルギー税とVATを除く電気料金の50％以上でなければならず、事業者は引き続き送電手数料を課すことができます。実際には、自分で使った1 kWhは小売価格の全額分の節約になる一方、売った1 kWhの対価ははるかに小さくなります。そのため自家消費の価値が高まり、世帯によっては蓄電池の価値も高まります。',
    quickAnswerTop: {
      ja: {
        question: '2027年にバルコニーソーラーのネットメータリングは終了しますか？',
        answer: 'はい、ただしオランダに限ります。「Wet beëindiging salderingsregeling」は2027年1月1日に施行されます（下院Tweede Kamerは2024年11月14日、上院Eerste Kamerは2024年12月17日に採決）。その後、小売事業者は送電した電力に「合理的な対価」を支払い、2030年1月1日まではエネルギー税とVATを除く価格の50％以上でなければなりません。送電手数料を課すことも可能です。これはオランダの法律であり、他のEU諸国のルールは変わりません。',
        bullets: [
          'ネットメータリングは「Wet beëindiging salderingsregeling」（法案36611）により2027年1月1日に終了',
          '送電した電力には「合理的な対価」が支払われ、2030年1月1日まではエネルギー税とVAT抜きの価格の50％以上',
          '事業者は送電手数料（terugleverkosten）を引き続き課すことができ、規制当局ACMは対価を上回る場合もあるとしている',
          '事業者は期日を延期できず、購入量と送電量を2027年1月1日前と以降の期間に分ける必要がある',
          '自家消費の価値が高まる。蓄電池が元を取れるのは、購入価格と売電対価の差が十分に大きい場合だけ',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: '#key-takeaways', },
      { label: '終了する制度と、その後に来るもの', anchor: '#current-scheme', },
      { label: '2027年までに確認したい契約と手数料のポイント', anchor: '#contract-check', },
      { label: '自家消費と蓄電池の価値が高まる理由', anchor: '#battery-connection', },
      { label: '出典', anchor: '#sources', },
      { label: 'よくある質問', anchor: '#faq', },
      { label: '関連記事', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'オランダは2027年1月1日にサルデリング（1対1のネットメータリング）を終了します。法律は2024年11月14日に下院、2024年12月17日に上院で可決されました。',
          '2027年1月1日までは、送電量と購入量が相殺されます。3,000 kWhを送電し4,000 kWhを購入した場合、支払うのは1,000 kWh分です。',
          '2027年から、小売事業者は送電電力に「合理的な対価」を支払います。オランダの規制当局ACMによると、2030年1月1日まではエネルギー税とVATを除く価格の50％以上です。',
          '送電手数料は引き続き認められ、送電電力の対価を上回ることがあります。ACMは、正味でマイナスとなる対価も、料金が不合理にならない限りそれ自体は禁止されていないと述べています。',
          'これはオランダだけの変更です。ドイツなど他国のバルコニーソーラーのルールは変わりません。',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: '終了する制度と、その後に来るもの',
        content: [
          '**サルデリングでは、系統から購入した電力と系統へ送電した電力が、エネルギー税とVATを含めて1対1で相殺されます。** 2027年1月1日までは、3,000 kWhを送電し4,000 kWhを購入した世帯は、差の1,000 kWh分を支払います。この制度は法律により2027年1月1日に終了します。「Wet beëindiging salderingsregeling」（法案36611）は、2024年11月14日に下院、2024年12月17日に上院で可決されました。',
          '**2027年1月1日以降、正味で余剰がある世帯は、小売事業者から「合理的な対価」（redelijke vergoeding）を受け取る権利があります。** 法律は具体的な価格を定めていません。規制当局ACMの消費者向けサイトによると、2030年1月1日までは、エネルギー税とVATを除く電気料金の50％以上でなければなりません。ACMは対価が合理的かどうかを監督します。この下限は2030年までと定められているため、契約の締結・更新時には、その時点で有効なルールを確認してください。',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: '2027年までに確認したい契約と手数料のポイント',
        content: [
          '**電力契約では、1 kWhあたりの売電対価、送電手数料（terugleverkosten）、2027年1月1日の切り替えの扱いという3点を確認してください。** ACMによると、送電手数料は定額の場合も送電量に応じた課金の場合もあり、送電電力の対価を上回ることがあります。',
          '**事業者は法定の終了日を延期できませんが、契約条件は引き続き重要な場合があります。** ACMは、契約自体の条件によって相殺の権利が残ることがあり、事業者は購入量と送電量を2026年12月31日までの期間と2027年1月1日以降の期間に分けなければならないと説明しています。ACMは、特に2027年をまたぐ契約について、オファーを慎重に比較するよう勧めています。オファーは頻繁に変わるため、このページでは事業者ごとの料金は挙げません。',
        ],
        callouts: [
          { type: 'info', text: 'このページは一般的な情報であり、法的助言や金融上の助言ではありません。決める前にご自身の契約内容を確認し、供給事業者または資格のある専門家に相談してください。' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: '自家消費と蓄電池の価値が高まる理由',
        content: [
          '**相殺がなくなると、自分で使った1 kWhは小売価格の全額分を節約できる一方、売った1 kWhは事業者の対価しか生みません。** 法定の下限では、その対価はエネルギー税とVAT抜きの価格の半分であり、メーターで払う1 kWhの価格の半分を大きく下回ります。蓄電池や、昼に洗濯機を回すといった消費のシフトで、この差の一部を取り込めます。',
          '消費者団体Milieu Centraalは、一般的な屋根設置システムでは発電量の約30％が直接使われ、約70％が送電されると想定し、相殺なしの年間収益は6枚のパネルで約170ユーロとしています（目安）。プラグイン式システムは世帯の常時の基礎負荷に比べて小さいため、通常は送電する割合が小さくなります。多くの場合、まず消費のシフトが安上がりな対策で、蓄電池は任意です。判断の基準は[バルコニーソーラーに蓄電池は必要？](/ja/balcony-solar/do-you-need-a-battery-balcony-solar)、最新のルールと価格は[2027年のバルコニーソーラー用蓄電池](/ja/balcony-solar/balcony-solar-battery-storage-standard-2027)をご覧ください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer — 法案36611「Wet beëindiging salderingsregeling」',
            description: '採決日（下院2024年11月14日、上院2024年12月17日）、2027年1月1日の施行、「合理的な対価」の規定',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer — Salderen en terugleveren',
            description: '規制当局の消費者向け案内：2030年1月1日までの50％下限、送電手数料、終了日をまたぐ契約',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM — 送電手数料と対価に関するニュース',
            description: '正味マイナスの対価は料金が不合理にならない限り禁止されないとする規制当局の見解、監督の計画',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal — Salderingsregeling voor zonnepanelen',
            description: '独立した消費者向け情報：ネットメータリングの終了、直接利用の割合、相殺なしの年間収益の目安',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'オランダのネットメータリングはいつ終了しますか？',
            a: '2027年1月1日です。「Wet beëindiging salderingsregeling」は2024年11月14日に下院、2024年12月17日に上院で可決されました。それまでは現行の相殺が続きます。',
          },
          {
            q: '現在のオランダの制度はどのような仕組みですか？',
            a: '系統から購入した電力と送電した電力が、エネルギー税とVATを含めて、請求期間にわたり1対1で相殺されます。2027年1月1日までは、3,000 kWhを送電し4,000 kWhを購入した世帯は、差の1,000 kWh分だけを支払います。',
          },
          {
            q: '2027年1月1日以降は何に置き換わりますか？',
            a: '小売事業者は、正味で余剰がある世帯に、送電した電力の「合理的な対価」を支払う義務があります。ACMによると、2030年1月1日まではエネルギー税とVATを除く電気料金の50％以上です。法律は価格を定めていないため、実際の単価は事業者によって異なります。',
          },
          {
            q: '事業者は引き続き送電手数料を課せますか？',
            a: 'はい。ACMによると、送電手数料（terugleverkosten）は定額または送電量あたりの形で引き続き可能で、対価を上回ることもあります。契約を比較するときは、手数料と対価を合わせて確認してください。',
          },
          {
            q: '2027年1月1日をまたぐ契約はどうなりますか？',
            a: '事業者は法定の終了日を延期できませんが、契約条件によっては相殺の権利が残る場合があります。ACMによると、事業者は購入量と送電量を2026年12月31日までの期間と2027年1月1日以降の期間に分けなければなりません。',
          },
          {
            q: 'このルールはオランダ以外にも適用されますか？',
            a: 'いいえ。これはオランダの法律です。ドイツを含む他国には独自の送電・登録ルールがあります。[国別の法的状況ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide)をご覧ください。',
          },
          {
            q: 'この変更を受けて蓄電池を買うべきですか？',
            a: '自動的にそうとは限りません。小売価格と売電対価の差が広がるため自家消費が有利になりますが、蓄電池は節約できる差が費用を上回る場合にのみ元が取れます。まず蓄電池の判断ガイドにある「1つの数字」のテストから始めてください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2027年のバルコニーソーラー用蓄電池：標準になるのか](/ja/balcony-solar/balcony-solar-battery-storage-standard-2027) — 最新のルールと価格、蓄電をめぐる料金裁定の根拠',
          '[バルコニーソーラーに蓄電池は必要？](/ja/balcony-solar/do-you-need-a-battery-balcony-solar) — サルデリング終了の影響を直接受ける、売電対価の差の判断テスト',
          '[バルコニーソーラーは合法？ 国別ガイド](/ja/balcony-solar/is-balcony-solar-legal-country-guide) — 世界の法規制トラッカー',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-ko.webp',
    title: '네덜란드 넷미터링 2027년 종료: 발코니 태양광에 미치는 영향',
    seoTitle: '네덜란드 살더링 2027년 종료와 발코니 태양광',
    intro: '네덜란드는 2027년 1월 1일에 계통에 보낸 전력과 사용한 전력을 1대1로 상계하는 살더링(saldering) 제도를 종료합니다. 이 법은 2024년 말 네덜란드 의회를 통과했습니다. 이후 전력을 역송하는 가구는 전력 공급사로부터 "합리적인 보상"을 받으며, 2030년까지 법정 하한이 적용됩니다. 이 글은 네덜란드의 변경만 다룹니다. EU 전체의 넷미터링 가이드가 아니며 법률·재무 자문도 아닙니다.',
    metaDescription: '네덜란드 살더링이 2027년 1월 1일 종료됩니다. 2030년까지 역송 보상은 세전 전기요금의 50% 이상이어야 합니다. 발코니 태양광에 미치는 영향.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    audience: '살더링 종료의 영향을 받는 네덜란드 발코니 태양광 소유자 및 구매자',
    primaryTerm: '네덜란드 넷미터링 종료 2027',
    targetKeywords: ['살더링 2027', '네덜란드 넷미터링 발코니 태양광', '발코니 태양광 네덜란드 2027', 'terugleververgoeding 2027'],
    leadAnswerBlock: '**네덜란드는 2027년 1월 1일에 1대1 넷미터링 제도(살더링)를 종료합니다.** 2027년 1월 1일까지는 3,000 kWh를 역송하고 4,000 kWh를 사용한 가구가 차이인 1,000 kWh만큼만 요금을 냅니다. 2027년부터는 공급사가 역송한 1 kWh마다 "합리적인 보상"(redelijke vergoeding)을 지급합니다. 2030년 1월 1일까지는 에너지세와 부가세를 제외한 전기 가격의 50% 이상이어야 하며, 공급사는 계속 역송 수수료를 부과할 수 있습니다. 실제로는 직접 사용한 1 kWh는 소매 가격 전체만큼 절약되는 반면, 판매한 1 kWh의 수익은 훨씬 적습니다. 그래서 자가소비의 가치가 높아지고, 일부 가구에서는 배터리의 가치도 높아집니다.',
    quickAnswerTop: {
      ko: {
        question: '2027년에 발코니 태양광의 넷미터링이 종료됩니까?',
        answer: '네덜란드에 한해 그렇습니다. 「Wet beëindiging salderingsregeling」은 2027년 1월 1일에 시행됩니다(하원 Tweede Kamer 2024년 11월 14일, 상원 Eerste Kamer 2024년 12월 17일 표결). 이후 공급사는 역송 전력에 "합리적인 보상"을 지급하며, 2030년 1월 1일까지는 에너지세와 부가세를 제외한 가격의 50% 이상이어야 합니다. 역송 수수료도 부과할 수 있습니다. 이는 네덜란드 법률이며 다른 EU 국가의 규정은 바뀌지 않습니다.',
        bullets: [
          '넷미터링은 「Wet beëindiging salderingsregeling」(법안 36611)에 따라 2027년 1월 1일에 종료됩니다',
          '역송 전력은 "합리적인 보상"을 받으며, 2030년 1월 1일까지는 에너지세와 부가세를 제외한 가격의 50% 이상입니다',
          '공급사는 역송 수수료(terugleverkosten)를 계속 부과할 수 있으며, 규제 기관 ACM은 이것이 역송 전력의 보상보다 클 수 있다고 밝혔습니다',
          '공급사는 날짜를 연기할 수 없으며, 사용량과 역송량을 2027년 1월 1일 이전과 이후 기간으로 나누어야 합니다',
          '자가소비의 가치가 높아집니다. 배터리는 구매 가격과 역송 보상의 차이가 충분히 클 때만 이익이 됩니다',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways', },
      { label: '종료되는 제도와 그 이후의 방식', anchor: '#current-scheme', },
      { label: '2027년 전에 확인할 계약 및 수수료 항목', anchor: '#contract-check', },
      { label: '자가소비와 배터리의 가치가 높아지는 이유', anchor: '#battery-connection', },
      { label: '출처', anchor: '#sources', },
      { label: '자주 묻는 질문', anchor: '#faq', },
      { label: '관련 자료', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '네덜란드는 2027년 1월 1일에 살더링(1대1 넷미터링)을 종료합니다. 이 법은 2024년 11월 14일 하원, 2024년 12월 17일 상원을 통과했습니다.',
          '2027년 1월 1일까지는 역송량과 사용량이 상계됩니다. 3,000 kWh를 역송하고 4,000 kWh를 사용하면 1,000 kWh만큼 요금을 냅니다.',
          '2027년부터 공급사는 역송 전력에 "합리적인 보상"을 지급해야 합니다. 네덜란드 규제 기관 ACM에 따르면 2030년 1월 1일까지는 에너지세와 부가세를 제외한 가격의 50% 이상이어야 합니다.',
          '역송 수수료는 계속 허용되며 역송 전력의 보상보다 클 수 있습니다. ACM은 순액이 마이너스인 보상도 요금이 불합리해지지 않는 한 그 자체로는 금지되지 않는다고 밝혔습니다.',
          '이는 네덜란드만의 변경입니다. 독일 등 다른 나라의 발코니 태양광 규정은 바뀌지 않습니다.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: '종료되는 제도와 그 이후의 방식',
        content: [
          '**살더링에서는 계통에서 가져온 전력과 계통으로 보낸 전력이 에너지세와 부가세를 포함해 1대1로 상계됩니다.** 2027년 1월 1일까지는 3,000 kWh를 역송하고 4,000 kWh를 사용한 가구는 차이인 1,000 kWh만큼 요금을 냅니다. 이 제도는 법에 따라 2027년 1월 1일에 종료됩니다. 「Wet beëindiging salderingsregeling」(법안 36611)은 2024년 11월 14일 하원, 2024년 12월 17일 상원을 통과했습니다.',
          '**2027년 1월 1일부터 순잉여가 있는 가구는 공급사로부터 "합리적인 보상"(redelijke vergoeding)을 받을 권리가 있습니다.** 법은 고정 가격을 정하지 않습니다. 규제 기관 ACM의 소비자 사이트에 따르면 2030년 1월 1일까지는 에너지세와 부가세를 제외한 전기 가격의 50% 이상이어야 합니다. ACM은 보상이 합리적인지 감독합니다. 이 하한은 2030년까지만 규정되어 있으므로, 계약을 체결하거나 갱신할 때 그 시점에 유효한 규정을 확인하십시오.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: '2027년 전에 확인할 계약 및 수수료 항목',
        content: [
          '**에너지 계약에서 세 가지를 확인하십시오. kWh당 역송 보상, 역송 수수료(terugleverkosten), 그리고 2027년 1월 1일 전환을 계약이 어떻게 다루는지입니다.** ACM은 역송 수수료가 정액일 수도 있고 역송 kWh당 요금일 수도 있으며, 때로는 역송 전력의 보상보다 클 수 있다고 설명합니다.',
          '**공급사는 법정 종료일을 연기할 수 없지만, 계약 조건은 여전히 중요할 수 있습니다.** ACM은 계약 자체의 조건에 따라 상계 권리가 남을 수 있으며, 공급사는 사용량과 역송량을 2026년 12월 31일까지의 기간과 2027년 1월 1일 이후의 기간으로 나누어야 한다고 밝혔습니다. ACM은 특히 2027년을 넘기는 계약의 제안을 신중히 비교하라고 권고합니다. 제안은 자주 바뀌므로 이 글에서는 공급사별 요금을 인용하지 않습니다.',
        ],
        callouts: [
          { type: 'info', text: '이 페이지는 일반 정보이며 법률 또는 재정 자문이 아닙니다. 결정하기 전에 본인의 계약서를 확인하고 공급사 또는 자격을 갖춘 전문가에게 문의하십시오.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: '자가소비와 배터리의 가치가 높아지는 이유',
        content: [
          '**상계가 없어지면 직접 사용한 1 kWh는 소매 가격 전체만큼 절약되지만, 판매한 1 kWh는 공급사의 보상만 가져옵니다.** 법정 하한에서 그 보상은 에너지세와 부가세 이전 가격의 절반이며, 계량기에서 1 kWh에 지불하는 가격의 절반을 크게 밑돕니다. 배터리나 소비 이동(예: 낮에 세탁기 돌리기)으로 이 차이의 일부를 가져올 수 있습니다.',
          '소비자 단체 Milieu Centraal은 일반적인 지붕형 시스템에서 발전량의 약 30%를 직접 사용하고 약 70%를 역송한다고 가정하며, 상계 없이 패널 6장으로 연간 약 170유로의 수익을 제시합니다(참고 수치). 플러그인 시스템은 가구의 상시 기초 부하에 비해 작아서 보통 역송 비율이 더 낮습니다. 많은 경우 소비 이동이 더 저렴한 첫 단계이며 배터리는 선택 사항입니다. 판단 기준은 [발코니 태양광에 배터리가 필요할까요?](/ko/balcony-solar/do-you-need-a-battery-balcony-solar), 현재의 규정과 가격은 [2027년 발코니 태양광 배터리](/ko/balcony-solar/balcony-solar-battery-storage-standard-2027)를 참고하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer — 법안 36611 「Wet beëindiging salderingsregeling」',
            description: '표결 날짜(하원 2024년 11월 14일, 상원 2024년 12월 17일), 2027년 1월 1일 시행, "합리적인 보상" 조항',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer — Salderen en terugleveren',
            description: '규제 기관의 소비자 안내: 2030년 1월 1일까지의 50% 하한, 역송 수수료, 종료일에 걸친 계약',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM — 역송 수수료와 보상에 관한 소식',
            description: '순액 마이너스 보상은 요금이 불합리해지지 않는 한 금지되지 않는다는 규제 기관의 입장, 감독 계획',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal — Salderingsregeling voor zonnepanelen',
            description: '독립 소비자 정보: 넷미터링 종료, 직접 사용 비율, 상계 없는 연간 수익 참고치',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '네덜란드의 넷미터링은 언제 종료됩니까?',
            a: '2027년 1월 1일입니다. 「Wet beëindiging salderingsregeling」은 2024년 11월 14일 하원, 2024년 12월 17일 상원을 통과했습니다. 그 전까지는 현행 상계가 계속됩니다.',
          },
          {
            q: '현재 네덜란드의 제도는 어떻게 작동합니까?',
            a: '계통에서 가져온 전력과 계통으로 보낸 전력이 에너지세와 부가세를 포함해 청구 기간 동안 1대1로 상계됩니다. 2027년 1월 1일까지는 3,000 kWh를 역송하고 4,000 kWh를 사용한 가구는 차이인 1,000 kWh만큼만 요금을 냅니다.',
          },
          {
            q: '2027년 1월 1일 이후에는 무엇이 대체합니까?',
            a: '공급사는 순잉여가 있는 가구에 역송 전력에 대한 "합리적인 보상"을 지급해야 합니다. ACM에 따르면 2030년 1월 1일까지는 에너지세와 부가세를 제외한 전기 가격의 50% 이상이어야 합니다. 법은 고정 가격을 정하지 않으므로 실제 단가는 공급사에 따라 다릅니다.',
          },
          {
            q: '공급사는 여전히 역송 수수료를 부과할 수 있습니까?',
            a: '네. ACM에 따르면 역송 수수료(terugleverkosten)는 정액 또는 역송 kWh당 방식으로 계속 가능하며, 때로는 보상보다 클 수 있습니다. 계약을 비교할 때는 수수료와 보상을 함께 보십시오.',
          },
          {
            q: '2027년 1월 1일을 넘기는 계약은 어떻게 됩니까?',
            a: '공급사는 법정 종료일을 연기할 수 없지만, 계약 조건에 따라 상계 권리가 남을 수 있습니다. ACM에 따르면 공급사는 사용량과 역송량을 2026년 12월 31일까지의 기간과 2027년 1월 1일 이후의 기간으로 나누어야 합니다.',
          },
          {
            q: '이 규정은 네덜란드 밖에도 적용됩니까?',
            a: '아니요. 네덜란드 법률입니다. 독일을 포함한 다른 나라는 자체 역송·등록 규정이 있습니다. [국가별 법적 현황 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide)를 참고하십시오.',
          },
          {
            q: '이 변경 때문에 배터리를 사야 합니까?',
            a: '자동으로 그렇지는 않습니다. 소매 가격과 역송 보상의 차이가 커져 자가소비에 유리해지지만, 배터리는 절약되는 차이가 비용을 넘을 때만 이익이 됩니다. 배터리 결정 가이드의 "숫자 하나" 테스트부터 시작하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[2027년 발코니 태양광 배터리: 표준이 되고 있습니까?](/ko/balcony-solar/balcony-solar-battery-storage-standard-2027) — 현재 규정과 가격, 저장 장치 질문의 배경이 되는 요금 차익 근거',
          '[발코니 태양광에 배터리가 필요할까요?](/ko/balcony-solar/do-you-need-a-battery-balcony-solar) — 살더링 종료의 직접적 영향을 받는 역송 보상 차이 판단 테스트',
          '[발코니 태양광은 합법입니까? 국가별 가이드](/ko/balcony-solar/is-balcony-solar-legal-country-guide) — 글로벌 법규 트래커',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-pt.webp',
    title: 'Países Baixos: o fim do net metering em 2027 e a energia solar de varanda',
    seoTitle: 'Países Baixos: fim do saldering em 2027 e solar de varanda',
    intro: 'Os Países Baixos encerram em 1º de janeiro de 2027 o saldering, a compensação 1:1 entre a eletricidade injetada e a consumida. A lei foi aprovada pelo Parlamento holandês no fim de 2024. Depois disso, as famílias que injetam energia recebem de seu fornecedor uma "remuneração razoável", com um piso legal até 2030. Esta página trata apenas da mudança holandesa; não é um guia geral de net metering na UE nem aconselhamento jurídico ou financeiro.',
    metaDescription: 'O saldering holandês termina em 1º de janeiro de 2027. Até 2030, o pagamento mínimo é 50% do preço sem impostos. Efeitos no solar de varanda.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Proprietários e compradores holandeses de energia solar de varanda afetados pelo fim do saldering',
    primaryTerm: 'fim do saldering países baixos 2027',
    targetKeywords: [
      'saldering 2027 países baixos',
      'net metering energia solar de varanda países baixos',
      'energia solar de varanda países baixos 2027',
      'terugleververgoeding 2027',
    ],
    leadAnswerBlock: '**Os Países Baixos encerram a compensação 1:1 (saldering) em 1º de janeiro de 2027.** Até 1º de janeiro de 2027, uma casa que injeta 3.000 kWh e consome 4.000 kWh paga apenas a diferença de 1.000 kWh. A partir de 2027, o fornecedor passa a pagar uma "remuneração razoável" (redelijke vergoeding) por cada kWh injetado: até 1º de janeiro de 2030, ela deve ser de pelo menos 50% do preço da eletricidade sem imposto de energia e IVA, e os fornecedores ainda podem cobrar taxas de injeção. Na prática, um kWh que você mesmo usa economiza o preço de varejo completo, enquanto um kWh exportado rende bem menos: o autoconsumo ganha valor e, para algumas famílias, a bateria também.',
    quickAnswerTop: {
      pt: {
        question: 'O net metering termina para a energia solar de varanda em 2027?',
        answer: 'Sim, apenas nos Países Baixos. A Wet beëindiging salderingsregeling entra em vigor em 1º de janeiro de 2027 (votação na Tweede Kamer em 14 de novembro de 2024 e na Eerste Kamer em 17 de dezembro de 2024). Depois dessa data, os fornecedores pagam uma "remuneração razoável" pela energia injetada, que até 1º de janeiro de 2030 deve ser de pelo menos 50% do preço sem imposto de energia e IVA, e podem cobrar taxas de injeção. É uma lei holandesa; ela não altera as regras de outros países da UE.',
        bullets: [
          'A compensação termina em 1º de janeiro de 2027 pela Wet beëindiging salderingsregeling (projeto de lei 36611)',
          'A energia injetada passa a receber uma "remuneração razoável": pelo menos 50% do preço sem imposto de energia e IVA até 1º de janeiro de 2030',
          'Os fornecedores ainda podem cobrar taxas de injeção (terugleverkosten), que, segundo o regulador ACM, às vezes superam o pagamento pela energia injetada',
          'Os fornecedores não podem adiar a data; devem dividir consumo e injeção nos períodos anterior e posterior a 1º de janeiro de 2027',
          'O autoconsumo ganha valor; uma bateria só compensa se a diferença entre o seu preço de compra e o pagamento pela injeção for grande o bastante',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways', },
      { label: 'O esquema que termina e o que o substitui', anchor: '#current-scheme', },
      { label: 'Detalhes de contrato e taxas para conferir antes de 2027', anchor: '#contract-check', },
      { label: 'Por que o autoconsumo e as baterias ganham valor', anchor: '#battery-connection', },
      { label: 'Fontes', anchor: '#sources', },
      { label: 'Perguntas frequentes', anchor: '#faq', },
      { label: 'Leituras relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Os Países Baixos encerram o saldering (compensação 1:1) em 1º de janeiro de 2027; a lei foi aprovada pela Tweede Kamer em 14 de novembro de 2024 e pela Eerste Kamer em 17 de dezembro de 2024.',
          'Até 1º de janeiro de 2027, a eletricidade injetada e a consumida são compensadas: injetar 3.000 kWh e consumir 4.000 kWh significa pagar 1.000 kWh.',
          'A partir de 2027, os fornecedores devem uma "remuneração razoável" pela energia injetada. Até 1º de janeiro de 2030, ela deve ser de pelo menos 50% do preço sem imposto de energia e IVA, segundo o regulador holandês ACM.',
          'As taxas de injeção continuam permitidas e podem superar o pagamento pela energia injetada. A ACM afirmou que uma remuneração líquida negativa não é proibida em si, a menos que leve a tarifas irrazoáveis.',
          'Esta é uma mudança exclusivamente holandesa. Ela não altera as regras do solar de varanda na Alemanha nem em outros países.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'O esquema que termina e o que o substitui',
        content: [
          '**No saldering, a eletricidade retirada da rede e a injetada nela são compensadas 1:1, incluindo imposto de energia e IVA.** Até 1º de janeiro de 2027, uma casa que injeta 3.000 kWh e consome 4.000 kWh paga a diferença de 1.000 kWh. O esquema termina por lei em 1º de janeiro de 2027. A Wet beëindiging salderingsregeling (projeto de lei 36611) foi aprovada pela Tweede Kamer em 14 de novembro de 2024 e pela Eerste Kamer em 17 de dezembro de 2024.',
          '**A partir de 1º de janeiro de 2027, as famílias com excedente líquido têm direito a uma "remuneração razoável" (redelijke vergoeding) de seu fornecedor.** A lei não fixa um preço. Segundo o site para consumidores do regulador ACM, a remuneração deve ser de pelo menos 50% do preço pago pela eletricidade sem imposto de energia e IVA até 1º de janeiro de 2030. A ACM fiscaliza se a remuneração é razoável. Como o piso está previsto só até 2030, confira as regras em vigor quando assinar ou renovar um contrato.',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: 'Detalhes de contrato e taxas para conferir antes de 2027',
        content: [
          '**Confira três itens no seu contrato de energia: o pagamento por kWh injetado, a taxa de injeção (terugleverkosten) e como o contrato trata a virada de 1º de janeiro de 2027.** A ACM explica que as taxas de injeção podem ser um valor fixo ou uma cobrança por kWh injetado, e que às vezes são maiores que a remuneração pela energia injetada.',
          '**Os fornecedores não podem adiar a data legal de término, mas as condições do seu contrato ainda podem importar.** A ACM afirma que um contrato pode continuar concedendo direito à compensação pelos seus próprios termos, e que o fornecedor deve dividir seu consumo e sua injeção no período até 31 de dezembro de 2026 e no período a partir de 1º de janeiro de 2027. A ACM recomenda comparar as ofertas com cuidado, especialmente contratos que vão além de 2027. Não citamos tarifas de fornecedores aqui porque as ofertas mudam com frequência.',
        ],
        callouts: [
          { type: 'info', text: 'Esta página traz informações gerais, não aconselhamento jurídico ou financeiro. Confira o seu contrato e consulte seu fornecedor ou um consultor qualificado antes de decidir.' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Por que o autoconsumo e as baterias ganham valor',
        content: [
          '**Sem compensação, um kWh que você mesmo usa economiza o preço de varejo completo, enquanto um kWh exportado rende apenas a remuneração do fornecedor.** No piso legal, esse pagamento é metade do preço antes do imposto de energia e do IVA, ou seja, bem menos da metade do que um kWh custa no medidor. Uma bateria ou o deslocamento do consumo, por exemplo ligar a máquina de lavar ao meio-dia, pode aproveitar parte dessa diferença.',
          'A organização de consumidores Milieu Centraal considera que cerca de 30% da produção de um sistema de telhado típico é usada diretamente e cerca de 70% é injetada, e indica um rendimento anual sem compensação de cerca de € 170 para seis painéis (valores indicativos). Sistemas plug-in são pequenos em relação ao consumo de base permanente de uma casa, por isso normalmente injetam uma parcela menor; para muitos, deslocar o consumo é o primeiro passo mais barato e a bateria é opcional. O teste de decisão está em [Você precisa de uma bateria para energia solar de varanda?](/pt/balcony-solar/do-you-need-a-battery-balcony-solar) e as regras e preços atuais em [Baterias para energia solar de varanda em 2027](/pt/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer – projeto de lei 36611, Wet beëindiging salderingsregeling',
            description: 'Datas de votação (Tweede Kamer 14 de novembro de 2024; Eerste Kamer 17 de dezembro de 2024), entrada em vigor em 1º de janeiro de 2027, disposição sobre a "remuneração razoável"',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer – Salderen en terugleveren',
            description: 'Orientação do regulador ao consumidor: piso de 50% até 1º de janeiro de 2030, taxas de injeção, contratos que atravessam a data de término',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM – notícia sobre taxas de injeção e remuneração',
            description: 'Declaração do regulador: remuneração líquida negativa não é proibida enquanto as tarifas não se tornarem irrazoáveis; planos de fiscalização',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal – Salderingsregeling voor zonnepanelen',
            description: 'Orientação independente ao consumidor: fim da compensação, parcela de uso direto, rendimento anual indicativo sem compensação',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quando termina o net metering nos Países Baixos?',
            a: 'Em 1º de janeiro de 2027. A Wet beëindiging salderingsregeling foi aprovada pela Tweede Kamer em 14 de novembro de 2024 e pela Eerste Kamer em 17 de dezembro de 2024. Até essa data, a compensação atual continua valendo.',
          },
          {
            q: 'Como funciona o esquema holandês atual?',
            a: 'A eletricidade retirada da rede e a injetada são compensadas 1:1 no período de faturamento, incluindo imposto de energia e IVA. Até 1º de janeiro de 2027, uma casa que injeta 3.000 kWh e consome 4.000 kWh paga apenas a diferença de 1.000 kWh.',
          },
          {
            q: 'O que substitui o net metering depois de 1º de janeiro de 2027?',
            a: 'Os fornecedores devem às famílias com excedente líquido uma "remuneração razoável" pela energia injetada. Segundo a ACM, até 1º de janeiro de 2030 ela deve ser de pelo menos 50% do preço pago pela eletricidade sem imposto de energia e IVA. A lei não fixa um preço, então a tarifa real depende do seu fornecedor.',
          },
          {
            q: 'Os fornecedores ainda podem cobrar taxas de injeção?',
            a: 'Sim. Segundo a ACM, as taxas de injeção (terugleverkosten) continuam possíveis, como valor fixo ou por kWh injetado, e às vezes podem ser maiores que a remuneração. Olhe a taxa e o pagamento juntos ao comparar contratos.',
          },
          {
            q: 'O que acontece com um contrato que passa de 1º de janeiro de 2027?',
            a: 'Seu fornecedor não pode adiar a data legal, mas as condições do seu contrato ainda podem dar direito à compensação. Segundo a ACM, o fornecedor deve dividir seu consumo e sua injeção no período até 31 de dezembro de 2026 e no período a partir de 1º de janeiro de 2027.',
          },
          {
            q: 'Essa regra vale fora dos Países Baixos?',
            a: 'Não. É uma lei holandesa. Outros países, incluindo a Alemanha, têm suas próprias regras de injeção e registro; veja o [guia jurídico país a país](/pt/balcony-solar/is-balcony-solar-legal-country-guide).',
          },
          {
            q: 'Devo comprar uma bateria por causa dessa mudança?',
            a: 'Não automaticamente. A diferença entre o preço de varejo e o pagamento pela injeção aumenta, o que favorece o autoconsumo, mas uma bateria só compensa se a diferença economizada superar o custo dela. Comece pelo teste de um número do guia de decisão sobre baterias.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Baterias para energia solar de varanda em 2027: viram padrão?](/pt/balcony-solar/balcony-solar-battery-storage-standard-2027) — regras e preços atuais e as evidências sobre arbitragem tarifária por trás da pergunta sobre armazenamento',
          '[Você precisa de uma bateria para energia solar de varanda?](/pt/balcony-solar/do-you-need-a-battery-balcony-solar) — o teste da diferença de pagamento pela injeção, diretamente afetado pelo fim do saldering',
          '[A energia solar de varanda é legal? Guia país por país](/pt/balcony-solar/is-balcony-solar-legal-country-guide) — rastreador jurídico global',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Legislation',
    heroImage: '/images/net-metering-rollback-balcony-solar-2027-overview-hero-zh.webp',
    title: '荷兰净计量政策2027年终止：对阳台光伏意味着什么',
    seoTitle: '荷兰saldering 2027年终止：对阳台光伏的影响',
    intro: '荷兰将于2027年1月1日终止saldering制度，即上网电量与用电量按1:1相互抵扣。该法律已于2024年底通过荷兰议会。此后，向电网回送电力的家庭将从供电商处获得“合理补偿”，并在2030年前适用法定下限。本页仅讨论荷兰的这项变化，不是欧盟净计量的通用指南，也不构成法律或财务建议。',
    metaDescription: '荷兰saldering制度将于2027年1月1日终止。到2030年，上网补偿不得低于不含税电价的50%。本文解读对阳台光伏的影响。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '约5分钟',
    educationalLevel: 'Beginner',
    audience: '受saldering制度终止影响的荷兰阳台光伏业主和购买者',
    primaryTerm: '荷兰净计量终止 2027',
    targetKeywords: ['2027年荷兰净计量政策', '荷兰阳台光伏净计量', '荷兰阳台光伏 2027', 'terugleververgoeding 2027'],
    leadAnswerBlock: '**荷兰将于2027年1月1日终止1:1净计量制度（saldering）。** 截至2027年1月1日，上网3,000 kWh、用电4,000 kWh的家庭，只需为1,000 kWh的差额付费。自2027年起，供电商改为为每度上网电量支付“合理补偿”（redelijke vergoeding）：到2030年1月1日之前，补偿不得低于不含能源税和增值税的电价的50%，供电商仍可收取上网费用。实际效果是：自己用掉的每度电可节省完整的零售电价，而卖出的每度电收入要低得多，因此自发自用的价值上升，对部分家庭而言，电池的价值也随之上升。',
    quickAnswerTop: {
      zh: {
        question: '2027年阳台光伏的净计量政策会终止吗？',
        answer: '会，但仅限荷兰。《Wet beëindiging salderingsregeling》将于2027年1月1日生效（下议院Tweede Kamer于2024年11月14日表决，上议院Eerste Kamer于2024年12月17日表决）。此后，供电商为上网电力支付“合理补偿”，到2030年1月1日之前不得低于不含能源税和增值税的价格的50%，并且可以收取上网费用。这是荷兰的法律，不会改变欧盟其他国家的规则。',
        bullets: [
          '根据《Wet beëindiging salderingsregeling》（法案36611），净计量于2027年1月1日终止',
          '上网电力改为按“合理补偿”结算：到2030年1月1日之前不低于不含能源税和增值税价格的50%',
          '供电商仍可收取上网费用（terugleverkosten），监管机构ACM表示这些费用有时会高于上网电力的补偿',
          '供电商不能推迟该日期，必须将用电和上网分别划入2027年1月1日之前和之后两个期间',
          '自发自用的价值上升；只有当购电价与上网补偿之间的差距足够大时，电池才划算',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '要点速览', anchor: '#key-takeaways', },
      { label: '即将终止的制度与接替方案', anchor: '#current-scheme', },
      { label: '2027年前应核对的合同与费用细节', anchor: '#contract-check', },
      { label: '自发自用与电池为何更有价值', anchor: '#battery-connection', },
      { label: '资料来源', anchor: '#sources', },
      { label: '常见问题', anchor: '#faq', },
      { label: '相关阅读', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '荷兰将于2027年1月1日终止saldering（1:1净计量）；该法律于2024年11月14日通过下议院，2024年12月17日通过上议院。',
          '截至2027年1月1日，上网电量与用电量相互抵扣：上网3,000 kWh、用电4,000 kWh，只需支付1,000 kWh。',
          '自2027年起，供电商须为上网电力支付“合理补偿”。据荷兰监管机构ACM，到2030年1月1日之前不得低于不含能源税和增值税价格的50%。',
          '上网费用仍然允许收取，且可能高于上网电力的补偿。ACM表示，净额为负的补偿本身并不被禁止，只要不导致不合理的电价。',
          '这仅是荷兰的变化，不改变德国或其他国家的阳台光伏规则。',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: '即将终止的制度与接替方案',
        content: [
          '**在saldering制度下，从电网取用的电量与回送电网的电量按1:1抵扣，含能源税和增值税。** 截至2027年1月1日，上网3,000 kWh、用电4,000 kWh的家庭，为1,000 kWh的差额付费。该制度依法于2027年1月1日终止。《Wet beëindiging salderingsregeling》（法案36611）于2024年11月14日通过下议院，2024年12月17日通过上议院。',
          '**自2027年1月1日起，净有盈余的家庭有权从供电商获得“合理补偿”（redelijke vergoeding）。** 法律未规定固定价格。根据监管机构ACM的消费者网站，到2030年1月1日之前，补偿不得低于所付电价（不含能源税和增值税）的50%。ACM负责监督补偿是否合理。由于该下限只规定到2030年，签订或续签合同时请核实届时有效的规则。',
        ],
      },
      contractCheck: {
        id: 'contract-check',
        title: '2027年前应核对的合同与费用细节',
        content: [
          '**请在能源合同中核对三项：每度电的上网补偿、上网费用（terugleverkosten），以及合同如何处理2027年1月1日的切换。** ACM说明，上网费用可以是固定金额，也可以按上网电量收费，有时会高于上网电力的补偿。',
          '**供电商不能推迟法定的终止日期，但合同条款仍可能起作用。** ACM指出，合同按其自身条款仍可能赋予抵扣权利，供电商必须将您的用电和上网划分为截至2026年12月31日和自2027年1月1日起两个期间。ACM建议仔细比较各类报价，尤其是跨越2027年的合同。报价变化频繁，本页不引用具体供电商的价格。',
        ],
        callouts: [
          { type: 'info', text: '本页面提供的是一般性信息，不构成法律或财务建议。做决定前，请核对您自己的合同，并咨询供电商或具备资质的专业人士。' },
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: '自发自用与电池为何更有价值',
        content: [
          '**没有净计量后，自己用掉的每度电可节省完整的零售电价，而卖出的每度电只能获得供电商的补偿。** 在法定下限处，这笔补偿是税前价格的一半，远低于电表处每度电价格的一半。电池或负荷转移（例如中午开洗衣机）可以捕获这一差距的一部分。',
          '消费者组织Milieu Centraal假设典型屋顶系统约30%的发电量被直接使用、约70%回送电网，并给出无净计量时六块组件的年收益约为170欧元（参考值）。插拔式系统相对于家庭持续的基础负荷较小，通常回送的比例更低；对许多家庭来说，先转移用电更省钱，电池则是可选项。判断方法见[阳台光伏需要电池吗？](/zh/balcony-solar/do-you-need-a-battery-balcony-solar)，当前规则与价格见[2027年阳台光伏电池](/zh/balcony-solar/balcony-solar-battery-storage-standard-2027)。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        links: [
          {
            url: 'https://www.eerstekamer.nl/wetsvoorstel/36611_wet_beeindiging',
            title: 'Eerste Kamer — 法案36611《Wet beëindiging salderingsregeling》',
            description: '表决日期（下议院2024年11月14日；上议院2024年12月17日）、2027年1月1日生效、“合理补偿”条款',
          },
          {
            url: 'https://consument.acm.nl/elektriciteit-en-gas/duurzame-energie/wat-is-salderen',
            title: 'ACM ConsuWijzer — Salderen en terugleveren',
            description: '监管机构的消费者指引：到2030年1月1日的50%下限、上网费用、跨越终止日期的合同',
          },
          {
            url: 'https://www.acm.nl/nl/node/27579',
            title: 'ACM — 上网费用与补偿的新闻',
            description: '监管机构表示：净额为负的补偿只要电价不至于不合理就不被禁止；监督计划',
          },
          {
            url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/salderingsregeling-voor-zonnepanelen/',
            title: 'Milieu Centraal — Salderingsregeling voor zonnepanelen',
            description: '独立消费者信息：净计量终止、直接使用比例、无净计量时年收益的参考值',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '荷兰的净计量政策何时终止？', a: '2027年1月1日。《Wet beëindiging salderingsregeling》于2024年11月14日通过下议院，2024年12月17日通过上议院。在此之前，现行抵扣制度继续有效。', },
          { q: '荷兰现行的净计量制度如何运作？', a: '从电网取用的电量与回送电网的电量在结算期内按1:1抵扣，含能源税和增值税。截至2027年1月1日，上网3,000 kWh、用电4,000 kWh的家庭，只需为1,000 kWh的差额付费。', },
          { q: '2027年1月1日之后用什么取代净计量？', a: '供电商须为净有盈余的家庭上网电力支付“合理补偿”。据ACM，到2030年1月1日之前，补偿不得低于所付电价（不含能源税和增值税）的50%。法律未规定固定价格，因此实际费率取决于您的供电商。', },
          { q: '供电商仍可以收取上网费用吗？', a: '可以。据ACM，上网费用（terugleverkosten）仍然可行，可以是固定金额或按上网电量收取，有时会高于补偿。比较合同时，请把费用和补偿放在一起看。', },
          { q: '跨越2027年1月1日的合同会怎样？', a: '供电商不能推迟法定终止日期，但合同条款仍可能赋予您抵扣权利。据ACM，供电商必须将您的用电和上网划分为截至2026年12月31日和自2027年1月1日起两个期间。', },
          { q: '这项规则适用于荷兰以外吗？', a: '不适用。这是荷兰的法律。包括德国在内的其他国家有各自的上网与登记规则，请参阅[各国法律状况指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide)。', },
          { q: '我应该因为这项变化购买电池吗？', a: '不一定。零售电价与上网补偿的差距扩大，有利于自发自用，但只有当省下的差距超过电池成本时，电池才划算。请先使用电池决策指南中的“单一数字”测试。', },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2027年阳台光伏电池：会成为标配吗？](/zh/balcony-solar/balcony-solar-battery-storage-standard-2027) — 当前规则与价格，以及储能问题背后的电价套利证据',
          '[阳台光伏需要电池吗？](/zh/balcony-solar/do-you-need-a-battery-balcony-solar) — 上网补偿差距的决策测试，直接受saldering终止影响',
          '[阳台光伏合法吗？各国指南](/zh/balcony-solar/is-balcony-solar-legal-country-guide) — 全球法律追踪',
        ],
      },
    },
  },
}
