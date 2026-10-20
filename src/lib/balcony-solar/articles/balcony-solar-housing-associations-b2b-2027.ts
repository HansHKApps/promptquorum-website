// Slug: balcony-solar-housing-associations-b2b-2027
// BSOL-28 — Tier 5 (2027 Trends), long-tail (new B2B/landlord angle — no prior
// coverage in the cluster), semi_annual.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    last_full_refresh: '2026-10-19',
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-en.webp',
    title: 'Balcony Solar for Landlords and Housing Associations in 2027',
    seoTitle: 'Balcony Solar for Landlords and Housing Associations',
    intro: 'In Germany, tenants and condominium owners have had a legal claim to plug-in solar devices ("Steckersolargeräte") since October 17, 2024, which moves the landlord question from "may I?" to "how, and on what terms?". This page explains what the law says, what landlords and owner communities may require, how a large landlord (Vonovia) has handled requests, and what the EU building directive does and does not demand. It is general information about Germany, not legal advice.',
    metaDescription: 'Since October 2024, German tenants and condo owners can claim a plug-in solar device. What landlords may require, and what the EU EPBD says.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    audience: 'Landlords, property managers, housing associations and tenants in Germany assessing plug-in solar',
    primaryTerm: 'balcony solar landlords housing associations',
    targetKeywords: [
      'balcony solar landlords',
      'balkonkraftwerk vermieter',
      'balcony solar tenant rights germany',
    ],
    leadAnswerBlock: '**Since October 17, 2024, German tenants can claim landlord consent for a plug-in solar device under § 554 BGB, and condominium owners have a comparable claim under § 20 (2) no. 5 WEG; consent can be refused only if the measure is unreasonable for the landlord even after weighing the tenant\'s interests.** Landlords and owner communities keep a say in how the device is mounted, but requirements may not hollow out the claim. Large landlords decide case by case: Vonovia agreed "without reservation" to an Aachen tenant\'s installation in January 2026 after a lawsuit supported by Deutsche Umwelthilfe. The EU building directive (EPBD) does not oblige landlords to install plug-in solar in existing rentals, and we found no primary source for reports of landlord programs with 50,000+ units.',
    quickAnswerTop: {
      en: {
        question: 'Can a landlord or housing association in Germany refuse balcony solar?',
        answer: 'Not without a valid reason. Since October 17, 2024, § 554 BGB (tenants) and § 20 (2) no. 5 WEG (condominium owners) cover plug-in solar devices. A tenant can ask for consent unless the measure is unreasonable for the landlord even after weighing the tenant\'s interests. Landlords and owner communities may still set requirements for how the device is mounted, but not so strict that the right is emptied. Whether the claim extends to batteries is disputed.',
        bullets: [
          'Tenants: § 554 (1) BGB; condominium owners: § 20 (2) no. 5 WEG; both in force since October 17, 2024',
          'Refusal requires that the measure be unreasonable for the landlord even after weighing the tenant\'s interests; this page makes no claim about any individual case',
          'Landlords and owner communities can set rules on mounting; Haufe notes that such requirements must not be excessive',
          'Vonovia agreed to an Aachen tenant\'s installation without reservation in January 2026 after a lawsuit backed by Deutsche Umwelthilfe. A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic',
          'The EPBD (Directive (EU) 2024/1275) makes solar the norm for new buildings and certain existing non-residential buildings; it does not require landlords to install plug-in solar',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways', },
      { label: 'What German Law Gives Tenants and Owners', anchor: '#legal-claim', },
      { label: 'Why the EU Building Directive Does Not Mandate Plug-In Solar', anchor: '#regulatory-driver', },
      { label: 'How Large Landlords Are Handling Requests', anchor: '#landlord-practice', },
      { label: 'What Landlords and Owner Communities Can Require, and What Renters Should Do', anchor: '#landlord-rules', },
      { label: 'The Bulk-Procurement Channel', anchor: '#b2b-channel', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Frequently Asked Questions', anchor: '#faq', },
      { label: 'Related Reading', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Since October 17, 2024, § 554 (1) BGB gives tenants, and § 20 (2) no. 5 WEG gives condominium owners, a claim to measures serving electricity generation by plug-in solar devices.',
          'A tenant\'s claim fails only if the measure is unreasonable for the landlord even after weighing the tenant\'s interests (§ 554 BGB). Agreements that disadvantage the tenant and deviate from the rule are void.',
          'Landlords and owner communities keep a say in how a device is mounted, but requirements must not be excessive. Whether a community resolution is formally required is not settled in the sources we checked; ask your administrator.',
          'Vonovia conceded an Aachen tenant\'s installation without reservation in January 2026. A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic.',
          'The EU building directive does not require landlords to install plug-in solar, and we could not verify reports of landlord programs with 50,000+ units.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'What German Law Gives Tenants and Owners',
        content: [
          '**Since October 17, 2024, German law lists plug-in solar devices among the measures tenants and condominium owners can demand.** § 554 (1) BGB lets a tenant ask the landlord to allow structural changes that serve electricity generation by plug-in solar devices ("Steckersolargeräte"), alongside accessibility, EV charging and burglary protection. The claim fails if the change is unreasonable for the landlord even after weighing the tenant\'s interests. § 554 (2) BGB makes agreements that disadvantage the tenant and deviate from the rule void. The tenant may agree to provide special security, with § 551 (3) BGB applying accordingly.',
          '**§ 20 (2) no. 5 WEG gives each condominium owner the same kind of claim.** The owner community decides on the implementation within proper administration. Haufe notes that consent can no longer be refused without good reason, that owners and landlords keep a say in how a device is mounted, and that the requirements must not be excessive. Whether a community resolution is still formally required is not settled in the sources we checked, so ask your administrator.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'Why the EU Building Directive Does Not Mandate Plug-In Solar',
        content: [
          '**The EU building directive does not require landlords to install balcony solar.** The recast Energy Performance of Buildings Directive (EU) 2024/1275 entered into force on May 28, 2024, with a national transposition deadline of May 29, 2026. The European Commission describes installing solar energy as becoming the norm for new buildings, which must also be solar-ready, and as rolling out gradually to certain existing non-residential buildings where it makes sense. Neither category is a plug-in device on the balcony of an existing rental.',
          'We found no primary source for reports that Vonovia and LEG Immobilien run programs with combined targets above 50,000 plug-in units, or for "emerging" institutional programs in the Netherlands, Austria and France. Treat such figures as unverified.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'How Large Landlords Are Handling Requests',
        content: [
          '**Large landlords decide case by case, and the practice is contested.** In January 2026 Vonovia agreed "without reservation" to an Aachen tenant\'s balcony system after a lawsuit supported by Deutsche Umwelthilfe (DUH); according to the DUH, Vonovia had demanded wind-load calculations, structural proofs and compliance with a vertical-glazing standard. The DUH wants Vonovia to revise its installation rules.',
          '**A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic.** These are positions reported by third parties, not court rulings on storage; see [Balcony Solar Batteries in 2027](/balcony-solar/balcony-solar-battery-storage-standard-2027) for the storage rules.',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'What Landlords and Owner Communities Can Require, and What Renters Should Do',
        content: [
          '**Rules on how a device is mounted are allowed; rules that empty the claim are not.** The device itself is limited by the law and the product standard: the EEG definition allows up to 800 W inverter output and 2,000 W of modules, while the product standard DIN VDE V 0126-95 allows up to 960 W of modules with a normal household plug and up to 2,000 Wp with a special energy plug installed by an electrician. The operator registers the device in the Marktstammdatenregister (five technical details); since the Solarpaket I (May 2024) the grid operator no longer has to be informed directly.',
          '**For renters, the practical sequence is to ask in writing, name the device and the mounting method, offer to follow reasonable mounting rules and keep the answer.** If consent is refused without a reason, consumer advice centres and tenant associations can help. This is general information, not legal advice.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'The Bulk-Procurement Channel',
        content: [
          '**In principle, housing companies are a different sales channel for manufacturers and installers than consumer retail:** framework agreements and bulk orders could mean larger and longer-term orders. In the sources we checked, however, the main route in Germany is still tenant-initiated requests under § 554 BGB, and we could not verify landlord-installed programs or unit counts.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB — Gesetze im Internet',
            description: 'Statute text: tenant claim to structural changes for plug-in solar devices, reasonableness test, void contrary agreements',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG — Gesetze im Internet',
            description: 'Statute text: condominium owner claim to measures for plug-in solar devices (para. 2 no. 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe — Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: 'Summary of the October 17, 2024 rule change and what landlords and owner communities may require',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe — press release of January 7, 2026',
            description: 'Vonovia agrees to an Aachen tenant\'s balcony system without reservation',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia and balcony solar storage (July 17, 2026)',
            description: 'Report on Vonovia\'s technical guideline banning storage and the contested assessment',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'European Commission — Energy Performance of Buildings Directive',
            description: 'Transposition deadline May 29, 2026; solar as the norm for new buildings and certain existing non-residential buildings',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — Gesetze und Normen für Steckersolar',
            description: 'Registration in the Marktstammdatenregister, 800 W and 2,000 W limits',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — FAQ zur DIN VDE V 0126-95',
            description: 'Product standard limits: 800 VA, 960 W with a normal plug, 2,000 Wp with a special energy plug',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can a landlord refuse balcony solar in Germany?',
            a: 'Not without a valid reason. Since October 17, 2024, § 554 (1) BGB gives tenants a claim to measures serving electricity generation by plug-in solar devices. The claim fails only if the measure is unreasonable for the landlord even after weighing the tenant\'s interests. This is general information, not legal advice.',
          },
          {
            q: 'Do condominium owners need a community resolution?',
            a: '§ 20 (2) no. 5 WEG gives each owner a claim to appropriate structural changes for plug-in solar devices, and the community decides on the implementation within proper administration. The sources we checked do not settle whether a resolution is still formally required, so ask your administrator.',
          },
          {
            q: 'Do large German landlords run balcony solar programs?',
            a: 'We found no primary source for reports that Vonovia and LEG Immobilien run programs with combined targets above 50,000 plug-in units. Treat such figures as unverified. What is documented is that Vonovia agreed to an Aachen tenant\'s installation without reservation in January 2026 after a lawsuit supported by Deutsche Umwelthilfe.',
          },
          {
            q: 'Does the EU building directive require landlords to install balcony solar?',
            a: 'No. The recast EPBD (Directive (EU) 2024/1275) makes solar installations the norm for new buildings, which must also be solar-ready, and rolls them out gradually to certain existing non-residential buildings. It does not require plug-in solar devices on existing rentals.',
          },
          {
            q: 'Can my landlord ban a battery with my balcony system?',
            a: 'This is contested. A 17 July 2026 report by drweb.de, citing inside digital, quotes Vonovia\'s technical guideline as prohibiting battery storage on balcony systems on fire-protection grounds and says Vonovia confirmed the document is genuine; Deutsche Umwelthilfe and Verbraucherzentrale NRW call a blanket ban problematic. Whether § 554 BGB covers storage is disputed. Ask in writing and seek advice; this is not legal advice.',
          },
          {
            q: 'Which limits apply to a plug-in solar device in Germany?',
            a: 'The EEG definition allows up to 800 W inverter output and 2,000 W of modules. The product standard DIN VDE V 0126-95 allows up to 960 W of modules with a normal household plug and up to 2,000 Wp with a special energy plug installed by an electrician. The standard does not cover devices with storage.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[What Is Balcony Solar?](/balcony-solar/what-is-balcony-solar) — includes the individual landlord/HOA permission FAQ',
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — registration, limits and the German regulatory backdrop',
          '[Balcony Solar Batteries in 2027: Is Storage Becoming Standard?](/balcony-solar/balcony-solar-battery-storage-standard-2027) — storage rules that landlord guidelines run into',
          '[How to Register Balcony Solar](/balcony-solar/how-to-register-balcony-solar) — step-by-step registration',
        ],
      },
    },
  },
  ar: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-ar.webp',
    title: 'الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان في 2027',
    seoTitle: 'الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان',
    intro: 'في ألمانيا، يتمتع المستأجرون وملّاك الوحدات بحق قانوني في الأجهزة الشمسية القابلة للتوصيل بالمقبس («Steckersolargeräte») منذ 17 أكتوبر 2024، مما ينقل سؤال المؤجّر من «هل يجوز لي؟» إلى «كيف وبأي شروط؟». تشرح هذه الصفحة ما ينص عليه القانون، وما يجوز للمؤجّرين وجمعيات الملّاك اشتراطه، وكيف تعاملت شركة عقارية كبيرة (Vonovia) مع الطلبات، وما تتطلبه توجيهات الاتحاد الأوروبي للمباني وما لا تتطلبه. هذه معلومات عامة عن ألمانيا وليست استشارة قانونية.',
    metaDescription: 'منذ أكتوبر 2024 يحق للمستأجرين وملّاك الوحدات في ألمانيا المطالبة بجهاز شمسي قابل للتوصيل بالمقبس. ما يجوز للمؤجّر اشتراطه، وما تقوله EPBD.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'المؤجّرون ومديرو العقارات وجمعيات الإسكان والمستأجرون في ألمانيا الذين يقيّمون الطاقة الشمسية القابلة للتوصيل بالمقبس',
    primaryTerm: 'الطاقة الشمسية للشرفة لأصحاب العقارات وجمعيات الإسكان',
    targetKeywords: [
      'طاقة شمسية للشرفة لأصحاب العقارات',
      'حقوق المستأجر الطاقة الشمسية للشرفة ألمانيا',
      'طاقة شمسية للشرفة جمعيات الإسكان',
    ],
    leadAnswerBlock: '**منذ 17 أكتوبر 2024 يستطيع المستأجرون في ألمانيا المطالبة بموافقة المؤجّر على جهاز شمسي قابل للتوصيل بالمقبس بموجب § 554 BGB، ولملّاك الوحدات حق مماثل بموجب § 20 (2) رقم 5 WEG؛ ولا يجوز رفض الموافقة إلا إذا كان الإجراء غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر.** يحتفظ المؤجّرون وجمعيات الملّاك بحق إبداء الرأي في طريقة تركيب الجهاز، لكن لا يجوز أن تُفرغ اشتراطاتهم الحق من مضمونه. وتقرر الشركات العقارية الكبيرة كل حالة على حدة: وافقت Vonovia «دون تحفظ» على تركيب مستأجر في آخن في يناير 2026 بعد دعوى قضائية دعمتها Deutsche Umwelthilfe. ولا تُلزم توجيهات الاتحاد الأوروبي للمباني (EPBD) المؤجّرين بتركيب أجهزة شمسية قابلة للتوصيل بالمقبس في المساكن المؤجرة القائمة، ولم نعثر على مصدر أولي للتقارير عن برامج مؤجّرين تتجاوز 50,000 وحدة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع المؤجّر أو جمعية الإسكان في ألمانيا رفض الطاقة الشمسية للشرفة؟',
        answer: 'ليس دون سبب وجيه. منذ 17 أكتوبر 2024 يشمل § 554 BGB (المستأجرون) و§ 20 (2) رقم 5 WEG (ملّاك الوحدات) الأجهزة الشمسية القابلة للتوصيل بالمقبس. يستطيع المستأجر طلب الموافقة ما لم يكن الإجراء غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر. وللمؤجّرين وجمعيات الملّاك أن يضعوا اشتراطات بشأن طريقة تركيب الجهاز، لكن دون أن تكون صارمة لدرجة تُفرغ الحق من مضمونه. أما امتداد الحق إلى البطاريات فمحل خلاف.',
        bullets: [
          'المستأجرون: § 554 (1) BGB؛ ملّاك الوحدات: § 20 (2) رقم 5 WEG؛ وكلاهما ساريان منذ 17 أكتوبر 2024',
          'يشترط الرفض أن يكون الإجراء غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر؛ ولا تقدّم هذه الصفحة أي ادعاء بشأن حالة فردية',
          'يستطيع المؤجّرون وجمعيات الملّاك وضع قواعد للتركيب؛ وتشير Haufe إلى أن هذه الاشتراطات يجب ألا تكون مفرطة',
          'وافقت Vonovia دون تحفظ على تركيب مستأجر في آخن في يناير 2026 بعد دعوى دعمتها Deutsche Umwelthilfe. ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي',
          'تجعل EPBD (التوجيه (EU) 2024/1275) الطاقة الشمسية القاعدة في المباني الجديدة وبعض المباني القائمة غير السكنية؛ ولا تُلزم المؤجّرين بتركيب أجهزة شمسية قابلة للتوصيل بالمقبس',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways', },
      { label: 'ما يمنحه القانون الألماني للمستأجرين وملّاك الوحدات', anchor: '#legal-claim', },
      { label: 'لماذا لا تفرض توجيهات الاتحاد الأوروبي للمباني الطاقة الشمسية القابلة للتوصيل بالمقبس', anchor: '#regulatory-driver', },
      { label: 'كيف تتعامل الشركات العقارية الكبيرة مع الطلبات', anchor: '#landlord-practice', },
      { label: 'ما يجوز للمؤجّرين وجمعيات الملّاك اشتراطه، وما ينبغي للمستأجرين فعله', anchor: '#landlord-rules', },
      { label: 'قناة الشراء بالجملة', anchor: '#b2b-channel', },
      { label: 'المصادر', anchor: '#sources', },
      { label: 'الأسئلة الشائعة', anchor: '#faq', },
      { label: 'قراءات ذات صلة', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'منذ 17 أكتوبر 2024 يمنح § 554 (1) BGB المستأجرين، و§ 20 (2) رقم 5 WEG ملّاك الوحدات، حقًا في إجراءات تخدم توليد الكهرباء بأجهزة شمسية قابلة للتوصيل بالمقبس.',
          'لا يسقط حق المستأجر إلا إذا كان الإجراء غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر (§ 554 BGB). وأي اتفاق مخالف يضر بالمستأجر يكون باطلًا.',
          'يحتفظ المؤجّرون وجمعيات الملّاك بحق إبداء الرأي في طريقة التركيب، لكن يجب ألا تكون الاشتراطات مفرطة. أما هل لا يزال قرار الجمعية مطلوبًا شكليًا فلم تحسمه المصادر التي راجعناها؛ اسأل مدير العقار.',
          'رضخت Vonovia دون تحفظ لتركيب مستأجر في آخن في يناير 2026. ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي.',
          'لا تُلزم توجيهات الاتحاد الأوروبي للمباني المؤجّرين بتركيب أجهزة شمسية قابلة للتوصيل بالمقبس، ولم نتمكن من التحقق من تقارير عن برامج مؤجّرين تتجاوز 50,000 وحدة.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'ما يمنحه القانون الألماني للمستأجرين وملّاك الوحدات',
        content: [
          '**منذ 17 أكتوبر 2024 يدرج القانون الألماني الأجهزة الشمسية القابلة للتوصيل بالمقبس ضمن الإجراءات التي يحق للمستأجرين وملّاك الوحدات المطالبة بها.** يتيح § 554 (1) BGB للمستأجر أن يطلب من المؤجّر الإذن بتغييرات إنشائية تخدم توليد الكهرباء بأجهزة شمسية قابلة للتوصيل بالمقبس («Steckersolargeräte»)، إلى جانب إمكانية الوصول وشحن المركبات الكهربائية والحماية من السرقة. ويسقط الحق إذا كان التغيير غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر. ويجعل § 554 (2) BGB الاتفاقات المخالفة التي تضر بالمستأجر باطلة. ويجوز للمستأجر أن يوافق على تقديم ضمان خاص، مع سريان § 551 (3) BGB بالقياس.',
          '**يمنح § 20 (2) رقم 5 WEG كل مالك وحدة حقًا من النوع نفسه.** وتقرر جمعية الملّاك التنفيذ ضمن الإدارة السليمة. وتشير Haufe إلى أن الموافقة لا يمكن رفضها بعد الآن دون سبب وجيه، وأن للملّاك والمؤجّرين رأيًا في طريقة تركيب الجهاز، وأن الاشتراطات يجب ألا تكون مفرطة. أما هل لا يزال قرار الجمعية مطلوبًا شكليًا فلم تحسمه المصادر التي راجعناها، لذا اسأل مدير العقار.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'لماذا لا تفرض توجيهات الاتحاد الأوروبي للمباني الطاقة الشمسية القابلة للتوصيل بالمقبس',
        content: [
          '**لا تُلزم توجيهات الاتحاد الأوروبي للمباني المؤجّرين بتركيب الطاقة الشمسية للشرفة.** دخل التوجيه المعاد صياغته بشأن الأداء الطاقي للمباني (EU) 2024/1275 حيّز التنفيذ في 28 مايو 2024، مع مهلة وطنية لنقله إلى القوانين المحلية حتى 29 مايو 2026. وتصف المفوضية الأوروبية تركيب الطاقة الشمسية بأنه يصبح القاعدة في المباني الجديدة، التي يجب أن تكون أيضًا مهيأة للطاقة الشمسية، وبأنه يُطبَّق تدريجيًا في بعض المباني القائمة غير السكنية حيثما يكون ذلك منطقيًا. وليست أي من الفئتين جهازًا قابلًا للتوصيل بالمقبس على شرفة مسكن مؤجَّر قائم.',
          'لم نعثر على مصدر أولي للتقارير التي تفيد بأن Vonovia وLEG Immobilien تنفذان برامج بأهداف مجمّعة تتجاوز 50,000 جهاز قابل للتوصيل بالمقبس، ولا للبرامج المؤسسية «الناشئة» في هولندا والنمسا وفرنسا. تعامل مع هذه الأرقام على أنها غير مؤكدة.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'كيف تتعامل الشركات العقارية الكبيرة مع الطلبات',
        content: [
          '**تقرر الشركات العقارية الكبيرة كل حالة على حدة، والممارسة محل خلاف.** في يناير 2026 وافقت Vonovia «دون تحفظ» على منشأة شرفة لمستأجر في آخن بعد دعوى قضائية دعمتها Deutsche Umwelthilfe (DUH)؛ ووفق DUH كانت Vonovia قد طالبت بحسابات حمل الرياح وإثباتات إنشائية والامتثال لمعيار الزجاج الرأسي. وتريد DUH أن تراجع Vonovia قواعد التركيب لديها.',
          '**ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي.** هذه مواقف ينقلها أطراف ثالثة، وليست أحكامًا قضائية بشأن التخزين؛ وللاطلاع على قواعد التخزين انظر [بطاريات الطاقة الشمسية للشرفة في 2027](/ar/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'ما يجوز للمؤجّرين وجمعيات الملّاك اشتراطه، وما ينبغي للمستأجرين فعله',
        content: [
          '**القواعد المتعلقة بطريقة تركيب الجهاز مسموحة؛ أما القواعد التي تُفرغ الحق من مضمونه فغير مسموحة.** والجهاز نفسه مقيَّد بالقانون ومعيار المنتج: يسمح تعريف EEG بخرج عاكس يصل إلى 800 W وألواح بقدرة 2,000 W، بينما يسمح معيار المنتج DIN VDE V 0126-95 بما يصل إلى 960 W من الألواح مع مقبس منزلي عادي، وما يصل إلى 2,000 Wp مع مقبس طاقة خاص يركّبه كهربائي. ويسجّل المشغّل الجهاز بنفسه في Marktstammdatenregister (خمس بيانات فنية)؛ ومنذ Solarpaket I (مايو 2024) لم يعد لازمًا إبلاغ مشغّل الشبكة مباشرة.',
          '**أما بالنسبة إلى المستأجرين، فالتسلسل العملي هو أن يطلبوا كتابةً، ويحددوا الجهاز وطريقة التثبيت، ويعرضوا اتباع قواعد تثبيت معقولة، ويحتفظوا بالرد.** وإذا رُفضت الموافقة دون سبب، يمكن لمراكز استشارات المستهلكين ورابطات المستأجرين المساعدة. هذه معلومات عامة وليست استشارة قانونية.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'قناة الشراء بالجملة',
        content: [
          '**من حيث المبدأ، تمثل شركات الإسكان لدى المصنّعين والمركّبين قناة بيع مختلفة عن بيع التجزئة للمستهلكين:** فقد تعني الاتفاقات الإطارية والطلبيات بالجملة طلبيات أكبر وأطول أمدًا. غير أن المسار الرئيسي في ألمانيا، في المصادر التي راجعناها، لا يزال طلبات المستأجرين استنادًا إلى § 554 BGB، ولم نتمكن من التحقق من برامج يركّبها المؤجّرون أو أعداد الوحدات.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB — Gesetze im Internet',
            description: 'نص القانون: حق المستأجر في تغييرات إنشائية للأجهزة الشمسية القابلة للتوصيل بالمقبس، واختبار المعقولية، وبطلان الاتفاقات المخالفة',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG — Gesetze im Internet',
            description: 'نص القانون: حق مالك الوحدة في إجراءات للأجهزة الشمسية القابلة للتوصيل بالمقبس (الفقرة 2 رقم 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe — Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: 'ملخص تغيير القانون في 17 أكتوبر 2024 وما يجوز للمؤجّرين وجمعيات الملّاك اشتراطه',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe — بيان صحفي بتاريخ 7 يناير 2026',
            description: 'موافقة Vonovia دون تحفظ على منشأة شرفة لمستأجر في آخن',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia وتخزين الطاقة في منظومات الشرفة (17 يوليو 2026)',
            description: 'تقرير عن الإرشادات الفنية لشركة Vonovia التي تحظر التخزين والتقييم المختلف عليه',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'المفوضية الأوروبية — توجيه الأداء الطاقي للمباني',
            description: 'مهلة النقل 29 مايو 2026؛ الطاقة الشمسية كقاعدة في المباني الجديدة وبعض المباني القائمة غير السكنية',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — القوانين والمعايير الخاصة بالطاقة الشمسية القابلة للتوصيل بالمقبس',
            description: 'التسجيل في Marktstammdatenregister، وحدّا 800 W و2,000 W',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — الأسئلة الشائعة حول DIN VDE V 0126-95',
            description: 'حدود معيار المنتج: 800 VA، و960 W مع مقبس عادي، و2,000 Wp مع مقبس طاقة خاص',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع المؤجّر في ألمانيا رفض الطاقة الشمسية للشرفة؟',
            a: 'ليس دون سبب وجيه. منذ 17 أكتوبر 2024 يمنح § 554 (1) BGB المستأجرين حقًا في إجراءات تخدم توليد الكهرباء بأجهزة شمسية قابلة للتوصيل بالمقبس. ولا يسقط الحق إلا إذا كان الإجراء غير معقول للمؤجّر حتى بعد موازنته بمصالح المستأجر. هذه معلومات عامة وليست استشارة قانونية.',
          },
          {
            q: 'هل يحتاج ملّاك الوحدات إلى قرار من الجمعية؟',
            a: 'يمنح § 20 (2) رقم 5 WEG كل مالك حقًا في تغييرات إنشائية مناسبة للأجهزة الشمسية القابلة للتوصيل بالمقبس، وتقرر الجمعية التنفيذ ضمن الإدارة السليمة. ولم تحسم المصادر التي راجعناها ما إذا كان القرار لا يزال مطلوبًا شكليًا؛ اسأل مدير العقار.',
          },
          {
            q: 'هل تدير شركات العقارات الألمانية الكبرى برامج للطاقة الشمسية للشرفة؟',
            a: 'لم نعثر على مصدر أولي للتقارير التي تفيد بأن Vonovia وLEG Immobilien تنفذان برامج بأهداف مجمّعة تتجاوز 50,000 جهاز قابل للتوصيل بالمقبس. تعامل مع هذه الأرقام على أنها غير مؤكدة. الموثَّق هو أن Vonovia وافقت دون تحفظ على تركيب مستأجر في آخن في يناير 2026 بعد دعوى دعمتها Deutsche Umwelthilfe.',
          },
          {
            q: 'هل تُلزم توجيهات الاتحاد الأوروبي للمباني المؤجّرين بتركيب الطاقة الشمسية للشرفة؟',
            a: 'لا. تجعل EPBD المعاد صياغتها (التوجيه (EU) 2024/1275) تركيب الطاقة الشمسية القاعدة في المباني الجديدة، التي يجب أن تكون مهيأة للطاقة الشمسية أيضًا، وتطبّقه تدريجيًا في بعض المباني القائمة غير السكنية. ولا تفرض أجهزة شمسية قابلة للتوصيل بالمقبس في المساكن المؤجرة القائمة.',
          },
          {
            q: 'هل يستطيع المؤجّر منع البطارية مع منظومة الشرفة الخاصة بي؟',
            a: 'هذا موضع خلاف. ذكر تقرير نشره drweb.de في 17 يوليو 2026، نقلًا عن inside digital، أن الإرشادات الفنية لشركة Vonovia تحظر تخزين البطاريات على منشآت الشرفات لأسباب تتعلق بالحماية من الحريق، وأفاد بأن Vonovia أكدت صحة الوثيقة؛ وترى Deutsche Umwelthilfe وVerbraucherzentrale NRW أن الحظر الشامل إشكالي. وهل يشمل § 554 BGB التخزين محل جدل. اسأل كتابيًا واستشر مختصًا؛ وهذه ليست استشارة قانونية.',
          },
          {
            q: 'ما الحدود المطبقة على الجهاز الشمسي القابل للتوصيل بالمقبس في ألمانيا؟',
            a: 'يسمح تعريف EEG بخرج عاكس يصل إلى 800 W وألواح بقدرة 2,000 W. ويسمح معيار المنتج DIN VDE V 0126-95 بما يصل إلى 960 W من الألواح مع مقبس منزلي عادي، وما يصل إلى 2,000 Wp مع مقبس طاقة خاص يركّبه كهربائي. ولا يغطي المعيار الأجهزة المزوّدة بتخزين.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[ما هي الطاقة الشمسية للشرفة؟](/ar/balcony-solar/what-is-balcony-solar) — يتضمن الأسئلة الشائعة حول إذن المؤجّر وجمعية الملّاك',
          '[Balkonkraftwerk: قواعد الطاقة الشمسية للشرفة في ألمانيا](/ar/balcony-solar/balkonkraftwerk-germany-rules) — التسجيل والحدود والإطار التنظيمي الألماني',
          '[بطاريات الطاقة الشمسية للشرفة في 2027: هل تصبح معيارًا؟](/ar/balcony-solar/balcony-solar-battery-storage-standard-2027) — قواعد التخزين التي تصطدم بها إرشادات المؤجّرين',
          '[كيفية تسجيل الطاقة الشمسية للشرفة](/ar/balcony-solar/how-to-register-balcony-solar) — التسجيل خطوة بخطوة',
        ],
      },
    },
  },
  de: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-de.webp',
    title: 'Balkonsolar für Vermieter und Wohnungsgesellschaften 2027',
    seoTitle: 'Balkonsolar für Vermieter und Wohnungsgesellschaften',
    intro: 'In Deutschland haben Mieter und Wohnungseigentümer seit dem 17. Oktober 2024 einen gesetzlichen Anspruch auf Steckersolargeräte. Damit verschiebt sich die Vermieterfrage von „Darf ich?“ zu „Wie und zu welchen Bedingungen?“. Diese Seite erklärt, was das Gesetz sagt, was Vermieter und Eigentümergemeinschaften verlangen dürfen, wie ein großer Vermieter (Vonovia) mit Anfragen umgeht und was die EU-Gebäuderichtlinie fordert und was nicht. Es sind allgemeine Informationen zu Deutschland, keine Rechtsberatung.',
    metaDescription: 'Seit Oktober 2024 haben Mieter und Eigentümer Anspruch auf ein Steckersolargerät. Was Vermieter verlangen dürfen und was die EPBD sagt.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Vermieter, Immobilienverwalter, Wohnungsgesellschaften und Mieter in Deutschland, die Steckersolar bewerten',
    primaryTerm: 'Balkonsolar für Vermieter und Wohnungsgesellschaften',
    targetKeywords: [
      'balkonsolar vermieter',
      'balkonkraftwerk vermieter zustimmung',
      'balkonkraftwerk mieter recht',
    ],
    leadAnswerBlock: '**Seit dem 17. Oktober 2024 können Mieter in Deutschland nach § 554 BGB die Zustimmung des Vermieters zu einem Steckersolargerät verlangen, und Wohnungseigentümer haben nach § 20 Abs. 2 Nr. 5 WEG einen vergleichbaren Anspruch; verweigert werden darf die Zustimmung nur, wenn die Maßnahme dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zugemutet werden kann.** Vermieter und Eigentümergemeinschaften behalten ein Mitspracherecht bei der Art der Anbringung, dürfen den Anspruch aber nicht aushöhlen. Große Vermieter entscheiden im Einzelfall: Vonovia stimmte im Januar 2026 nach einer von der Deutschen Umwelthilfe unterstützten Klage der Montage bei einem Aachener Mieter „vorbehaltlos“ zu. Die EU-Gebäuderichtlinie (EPBD) verpflichtet Vermieter nicht, Steckersolar in bestehenden Mietwohnungen zu installieren, und für Berichte über Vermieterprogramme mit mehr als 50.000 Einheiten haben wir keine Primärquelle gefunden.',
    quickAnswerTop: {
      de: {
        question: 'Kann ein Vermieter oder eine Wohnungsgesellschaft in Deutschland Balkonsolar verweigern?',
        answer: 'Nicht ohne triftigen Grund. Seit dem 17. Oktober 2024 erfassen § 554 BGB (Mieter) und § 20 Abs. 2 Nr. 5 WEG (Wohnungseigentümer) Steckersolargeräte. Ein Mieter kann die Zustimmung verlangen, es sei denn, die Maßnahme ist dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zumutbar. Vermieter und Eigentümergemeinschaften dürfen weiterhin Vorgaben zur Anbringung machen, aber nicht so streng, dass das Recht ausgehöhlt wird. Ob der Anspruch auch Batteriespeicher umfasst, ist umstritten.',
        bullets: [
          'Mieter: § 554 Abs. 1 BGB; Wohnungseigentümer: § 20 Abs. 2 Nr. 5 WEG; beides in Kraft seit dem 17. Oktober 2024',
          'Eine Verweigerung setzt voraus, dass die Maßnahme dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zumutbar ist; diese Seite trifft keine Aussage zu einem Einzelfall',
          'Vermieter und Eigentümergemeinschaften können Regeln zur Anbringung aufstellen; laut Haufe dürfen solche Vorgaben nicht überzogen sein',
          'Vonovia stimmte im Januar 2026 nach einer von der Deutschen Umwelthilfe unterstützten Klage der Installation bei einem Aachener Mieter vorbehaltlos zu. Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch',
          'Die EPBD (Richtlinie (EU) 2024/1275) macht Solaranlagen zur Norm für Neubauten und bestimmte bestehende Nichtwohngebäude; Vermieter müssen kein Steckersolar installieren',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Das Wichtigste auf einen Blick', anchor: '#key-takeaways', },
      { label: 'Was das deutsche Recht Mietern und Eigentümern gibt', anchor: '#legal-claim', },
      { label: 'Warum die EU-Gebäuderichtlinie kein Steckersolar vorschreibt', anchor: '#regulatory-driver', },
      { label: 'Wie große Vermieter mit Anfragen umgehen', anchor: '#landlord-practice', },
      { label: 'Was Vermieter und Eigentümergemeinschaften verlangen dürfen und was Mieter tun sollten', anchor: '#landlord-rules', },
      { label: 'Der Kanal der Sammelbeschaffung', anchor: '#b2b-channel', },
      { label: 'Quellen', anchor: '#sources', },
      { label: 'Häufig gestellte Fragen', anchor: '#faq', },
      { label: 'Weiterführende Artikel', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Seit dem 17. Oktober 2024 gibt § 554 Abs. 1 BGB Mietern und § 20 Abs. 2 Nr. 5 WEG Wohnungseigentümern einen Anspruch auf Maßnahmen, die der Stromerzeugung durch Steckersolargeräte dienen.',
          'Der Anspruch des Mieters scheitert nur, wenn die Maßnahme dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zugemutet werden kann (§ 554 BGB). Abweichende Vereinbarungen zum Nachteil des Mieters sind unwirksam.',
          'Vermieter und Eigentümergemeinschaften behalten ein Mitspracherecht bei der Anbringung, die Vorgaben dürfen aber nicht überzogen sein. Ob ein Gemeinschaftsbeschluss formal noch erforderlich ist, klären die von uns geprüften Quellen nicht; fragen Sie Ihre Verwaltung.',
          'Vonovia gab im Januar 2026 der Installation eines Aachener Mieters vorbehaltlos nach. Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch.',
          'Die EU-Gebäuderichtlinie verpflichtet Vermieter nicht zu Steckersolar, und Berichte über Vermieterprogramme mit mehr als 50.000 Einheiten konnten wir nicht verifizieren.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'Was das deutsche Recht Mietern und Eigentümern gibt',
        content: [
          '**Seit dem 17. Oktober 2024 zählt das deutsche Recht Steckersolargeräte zu den Maßnahmen, die Mieter und Wohnungseigentümer verlangen können.** § 554 Abs. 1 BGB erlaubt es Mietern, vom Vermieter die Gestattung baulicher Veränderungen zu verlangen, die der Stromerzeugung durch Steckersolargeräte dienen, neben Barrierefreiheit, Laden elektrisch betriebener Fahrzeuge und Einbruchsschutz. Der Anspruch scheitert, wenn die Veränderung dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zugemutet werden kann. Nach § 554 Abs. 2 BGB sind abweichende Vereinbarungen zum Nachteil des Mieters unwirksam. Der Mieter kann sich zu einer besonderen Sicherheitsleistung bereit erklären, wobei § 551 Abs. 3 BGB entsprechend gilt.',
          '**§ 20 Abs. 2 Nr. 5 WEG gibt jedem Wohnungseigentümer einen Anspruch gleicher Art.** Über die Durchführung entscheidet die Gemeinschaft im Rahmen ordnungsmäßiger Verwaltung. Haufe weist darauf hin, dass die Zustimmung nicht mehr ohne triftigen Grund verweigert werden kann, dass Eigentümer und Vermieter bei der Art der Anbringung mitreden dürfen und dass die Vorgaben nicht überzogen sein dürfen. Ob ein Gemeinschaftsbeschluss formal noch erforderlich ist, klären die von uns geprüften Quellen nicht; fragen Sie daher Ihre Verwaltung.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'Warum die EU-Gebäuderichtlinie kein Steckersolar vorschreibt',
        content: [
          '**Die EU-Gebäuderichtlinie verpflichtet Vermieter nicht, Balkonsolar zu installieren.** Die neugefasste Gebäudeenergieeffizienz-Richtlinie (EU) 2024/1275 trat am 28. Mai 2024 in Kraft, mit einer nationalen Umsetzungsfrist bis zum 29. Mai 2026. Die Europäische Kommission beschreibt die Installation von Solarenergie als künftige Norm für Neubauten, die zudem solarbereit sein müssen, und als schrittweise Einführung bei bestimmten bestehenden Nichtwohngebäuden, wo es sinnvoll ist. Keine der beiden Kategorien ist ein Steckersolargerät auf dem Balkon einer bestehenden Mietwohnung.',
          'Für Berichte, Vonovia und LEG Immobilien betrieben Programme mit gemeinsamen Zielen von über 50.000 Steckersolargeräten, oder für „entstehende“ institutionelle Programme in den Niederlanden, Österreich und Frankreich haben wir keine Primärquelle gefunden. Behandeln Sie solche Zahlen als unbestätigt.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'Wie große Vermieter mit Anfragen umgehen',
        content: [
          '**Große Vermieter entscheiden im Einzelfall, und die Praxis ist umstritten.** Im Januar 2026 stimmte Vonovia nach einer von der Deutschen Umwelthilfe (DUH) unterstützten Klage dem Balkonkraftwerk eines Aachener Mieters „vorbehaltlos“ zu; laut DUH hatte Vonovia zuvor Windlastberechnungen, statische Nachweise und die Einhaltung einer Norm für vertikale Verglasung verlangt. Die DUH fordert, dass Vonovia seine Montageregeln überarbeitet.',
          '**Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch.** Das sind von Dritten berichtete Positionen, keine Gerichtsurteile zu Speichern; zu den Speicherregeln siehe [Batteriespeicher für Balkonkraftwerke 2027](/de/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'Was Vermieter und Eigentümergemeinschaften verlangen dürfen und was Mieter tun sollten',
        content: [
          '**Regeln zur Art der Anbringung sind zulässig, Regeln, die den Anspruch aushöhlen, nicht.** Das Gerät selbst ist durch Gesetz und Produktnorm begrenzt: Die EEG-Definition erlaubt bis zu 800 W Wechselrichterleistung und 2.000 W Modulleistung, die Produktnorm DIN VDE V 0126-95 erlaubt mit normalem Haushaltsstecker bis zu 960 W Modulleistung und mit einem speziellen Energiestecker, den ein Elektriker installiert, bis zu 2.000 Wp. Der Betreiber meldet das Gerät selbst im Marktstammdatenregister an (fünf technische Angaben); seit dem Solarpaket I (Mai 2024) muss der Netzbetreiber nicht mehr direkt informiert werden.',
          '**Für Mieter heißt das praktisch: schriftlich anfragen, das Gerät und die Befestigungsart benennen, anbieten, sich an angemessene Montageregeln zu halten, und die Antwort aufbewahren.** Wird die Zustimmung ohne Begründung verweigert, können Verbraucherzentralen und Mietervereine helfen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'Der Kanal der Sammelbeschaffung',
        content: [
          '**Grundsätzlich sind Wohnungsgesellschaften für Hersteller und Installateure ein anderer Vertriebskanal als der Endkundenhandel:** Rahmenverträge und Großbestellungen könnten größere und längerfristige Aufträge bedeuten. In den von uns geprüften Quellen ist der Hauptweg in Deutschland jedoch weiterhin die vom Mieter ausgehende Anfrage nach § 554 BGB, und von Vermietern installierte Programme oder Stückzahlen konnten wir nicht verifizieren.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB – Gesetze im Internet',
            description: 'Gesetzestext: Anspruch des Mieters auf bauliche Veränderungen für Steckersolargeräte, Zumutbarkeitsprüfung, unwirksame abweichende Vereinbarungen',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG – Gesetze im Internet',
            description: 'Gesetzestext: Anspruch des Wohnungseigentümers auf Maßnahmen für Steckersolargeräte (Absatz 2 Nr. 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe – Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: 'Zusammenfassung der Rechtsänderung vom 17. Oktober 2024 und dessen, was Vermieter und Eigentümergemeinschaften verlangen dürfen',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe – Pressemitteilung vom 7. Januar 2026',
            description: 'Vonovia stimmt dem Balkonkraftwerk eines Aachener Mieters vorbehaltlos zu',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia und Balkonkraftwerk-Speicher (17. Juli 2026)',
            description: 'Bericht über die Vonovia-Richtlinie mit Speicherverbot und die umstrittene Bewertung',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'Europäische Kommission – Gebäudeenergieeffizienz-Richtlinie',
            description: 'Umsetzungsfrist 29. Mai 2026; Solarenergie als Norm für Neubauten und bestimmte bestehende Nichtwohngebäude',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Anmeldung im Marktstammdatenregister, Grenzen von 800 W und 2.000 W',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Grenzen der Produktnorm: 800 VA, 960 W mit normalem Stecker, 2.000 Wp mit speziellem Energiestecker',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ein Vermieter in Deutschland Balkonsolar verweigern?',
            a: 'Nicht ohne triftigen Grund. Seit dem 17. Oktober 2024 gibt § 554 Abs. 1 BGB Mietern einen Anspruch auf Maßnahmen, die der Stromerzeugung durch Steckersolargeräte dienen. Der Anspruch scheitert nur, wenn die Maßnahme dem Vermieter auch unter Würdigung der Interessen des Mieters nicht zumutbar ist. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
          {
            q: 'Brauchen Wohnungseigentümer einen Gemeinschaftsbeschluss?',
            a: '§ 20 Abs. 2 Nr. 5 WEG gibt jedem Eigentümer einen Anspruch auf angemessene bauliche Veränderungen für Steckersolargeräte, und die Gemeinschaft entscheidet über die Durchführung im Rahmen ordnungsmäßiger Verwaltung. Ob ein Beschluss formal noch erforderlich ist, klären die von uns geprüften Quellen nicht; fragen Sie Ihre Verwaltung.',
          },
          {
            q: 'Betreiben große deutsche Vermieter Balkonkraftwerk-Programme?',
            a: 'Für Berichte, Vonovia und LEG Immobilien betrieben Programme mit gemeinsamen Zielen von über 50.000 Steckersolargeräten, haben wir keine Primärquelle gefunden. Behandeln Sie solche Zahlen als unbestätigt. Belegt ist, dass Vonovia im Januar 2026 nach einer von der Deutschen Umwelthilfe unterstützten Klage der Installation bei einem Aachener Mieter vorbehaltlos zustimmte.',
          },
          {
            q: 'Verpflichtet die EU-Gebäuderichtlinie Vermieter zu Balkonsolar?',
            a: 'Nein. Die neugefasste EPBD (Richtlinie (EU) 2024/1275) macht Solaranlagen zur Norm für Neubauten, die zudem solarbereit sein müssen, und führt sie schrittweise bei bestimmten bestehenden Nichtwohngebäuden ein. Steckersolargeräte in bestehenden Mietwohnungen schreibt sie nicht vor.',
          },
          {
            q: 'Kann mein Vermieter eine Batterie an meinem Balkonkraftwerk verbieten?',
            a: 'Das ist umstritten. Ein Bericht von drweb.de vom 17. Juli 2026 zitiert unter Berufung auf inside digital die technische Richtlinie von Vonovia mit einem Verbot von Batteriespeichern an Balkonanlagen aus Brandschutzgründen und gibt an, Vonovia habe die Echtheit des Dokuments bestätigt; die Deutsche Umwelthilfe und die Verbraucherzentrale NRW halten ein pauschales Verbot für problematisch. Ob § 554 BGB Speicher erfasst, ist strittig. Fragen Sie schriftlich nach und holen Sie Rat ein; dies ist keine Rechtsberatung.',
          },
          {
            q: 'Welche Grenzen gelten für ein Steckersolargerät in Deutschland?',
            a: 'Die EEG-Definition erlaubt bis zu 800 W Wechselrichterleistung und 2.000 W Modulleistung. Die Produktnorm DIN VDE V 0126-95 erlaubt mit normalem Haushaltsstecker bis zu 960 W Modulleistung und mit einem speziellen Energiestecker, den ein Elektriker installiert, bis zu 2.000 Wp. Die Norm deckt Geräte mit Speicher nicht ab.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Was ist Balkonsolar?](/de/balcony-solar/what-is-balcony-solar) — mit der FAQ zur Zustimmung von Vermieter und Eigentümergemeinschaft',
          '[Balkonkraftwerk: Die deutschen Regeln](/de/balcony-solar/balkonkraftwerk-germany-rules) — Anmeldung, Grenzen und der deutsche Rechtsrahmen',
          '[Batteriespeicher für Balkonkraftwerke 2027: Wird er zum Standard?](/de/balcony-solar/balcony-solar-battery-storage-standard-2027) — Speicherregeln, auf die Vermieterrichtlinien stoßen',
          '[Balkonkraftwerk anmelden](/de/balcony-solar/how-to-register-balcony-solar) — Anmeldung Schritt für Schritt',
        ],
      },
    },
  },
  es: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-es.webp',
    title: 'Energía solar de balcón para arrendadores y asociaciones de vivienda en 2027',
    seoTitle: 'Solar de balcón: arrendadores y asociaciones de vivienda',
    intro: 'En Alemania, los inquilinos y los copropietarios tienen desde el 17 de octubre de 2024 un derecho legal a los dispositivos solares plug-in («Steckersolargeräte»), lo que desplaza la pregunta del arrendador de «¿puedo?» a «¿cómo y con qué condiciones?». Esta página explica lo que dice la ley, lo que pueden exigir los arrendadores y las comunidades de propietarios, cómo ha gestionado las solicitudes un gran arrendador (Vonovia) y lo que la directiva europea de edificios exige y no exige. Es información general sobre Alemania, no asesoramiento jurídico.',
    metaDescription: 'Desde octubre de 2024, en Alemania inquilinos y copropietarios pueden reclamar un dispositivo solar plug-in. Qué pueden exigir los arrendadores y la EPBD.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Arrendadores, administradores de propiedades, asociaciones de vivienda e inquilinos en Alemania que evalúan la energía solar plug-in',
    primaryTerm: 'energía solar de balcón para arrendadores y asociaciones de vivienda',
    targetKeywords: [
      'energía solar de balcón propietarios',
      'balkonkraftwerk arrendador consentimiento',
      'energía solar de balcón derechos de inquilinos alemania',
    ],
    leadAnswerBlock: '**Desde el 17 de octubre de 2024, los inquilinos alemanes pueden reclamar el consentimiento del arrendador para un dispositivo solar plug-in según el § 554 BGB, y los copropietarios tienen un derecho comparable según el § 20 apdo. 2 n.º 5 WEG; el consentimiento solo puede denegarse si la medida resulta irrazonable para el arrendador incluso valorando los intereses del inquilino.** Los arrendadores y las comunidades de propietarios conservan voz en cómo se monta el dispositivo, pero sus exigencias no pueden vaciar el derecho. Los grandes arrendadores deciden caso por caso: Vonovia aceptó «sin reservas» la instalación de un inquilino de Aquisgrán en enero de 2026 tras una demanda apoyada por la Deutsche Umwelthilfe. La directiva europea de edificios (EPBD) no obliga a los arrendadores a instalar solar plug-in en viviendas de alquiler existentes, y no encontramos fuente primaria para los informes sobre programas de arrendadores con más de 50.000 unidades.',
    quickAnswerTop: {
      es: {
        question: '¿Puede un arrendador o una asociación de vivienda en Alemania negarse al solar de balcón?',
        answer: 'No sin un motivo válido. Desde el 17 de octubre de 2024, el § 554 BGB (inquilinos) y el § 20 apdo. 2 n.º 5 WEG (copropietarios) cubren los dispositivos solares plug-in. Un inquilino puede pedir el consentimiento salvo que la medida sea irrazonable para el arrendador incluso valorando los intereses del inquilino. Los arrendadores y las comunidades pueden fijar requisitos sobre el montaje del dispositivo, pero no tan estrictos que vacíen el derecho. Si el derecho se extiende a las baterías es objeto de debate.',
        bullets: [
          'Inquilinos: § 554 apdo. 1 BGB; copropietarios: § 20 apdo. 2 n.º 5 WEG; ambos en vigor desde el 17 de octubre de 2024',
          'La denegación exige que la medida sea irrazonable para el arrendador incluso valorando los intereses del inquilino; esta página no afirma nada sobre ningún caso concreto',
          'Los arrendadores y las comunidades pueden fijar reglas de montaje; según Haufe, esos requisitos no deben ser excesivos',
          'Vonovia aceptó sin reservas la instalación de un inquilino de Aquisgrán en enero de 2026 tras una demanda respaldada por la Deutsche Umwelthilfe. Un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general',
          'La EPBD (Directiva (UE) 2024/1275) convierte la energía solar en la norma para edificios nuevos y ciertos edificios no residenciales existentes; no obliga a los arrendadores a instalar solar plug-in',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways', },
      { label: 'Lo que la ley alemana da a inquilinos y copropietarios', anchor: '#legal-claim', },
      { label: 'Por qué la directiva europea de edificios no impone el solar plug-in', anchor: '#regulatory-driver', },
      { label: 'Cómo gestionan las solicitudes los grandes arrendadores', anchor: '#landlord-practice', },
      { label: 'Qué pueden exigir arrendadores y comunidades, y qué deben hacer los inquilinos', anchor: '#landlord-rules', },
      { label: 'El canal de compras al por mayor', anchor: '#b2b-channel', },
      { label: 'Fuentes', anchor: '#sources', },
      { label: 'Preguntas frecuentes', anchor: '#faq', },
      { label: 'Lecturas relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Desde el 17 de octubre de 2024, el § 554 apdo. 1 BGB para inquilinos y el § 20 apdo. 2 n.º 5 WEG para copropietarios dan derecho a medidas destinadas a generar electricidad con dispositivos solares plug-in.',
          'El derecho del inquilino solo decae si la medida es irrazonable para el arrendador incluso valorando los intereses del inquilino (§ 554 BGB). Los acuerdos contrarios en perjuicio del inquilino son nulos.',
          'Los arrendadores y las comunidades conservan voz en el montaje, pero sus requisitos no deben ser excesivos. Las fuentes consultadas no aclaran si sigue siendo formalmente necesario un acuerdo de la comunidad; pregunta a tu administrador.',
          'Vonovia cedió sin reservas a la instalación de un inquilino de Aquisgrán en enero de 2026. Un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general.',
          'La directiva europea de edificios no obliga a los arrendadores a instalar solar plug-in, y no pudimos verificar los informes sobre programas de arrendadores con más de 50.000 unidades.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'Lo que la ley alemana da a inquilinos y copropietarios',
        content: [
          '**Desde el 17 de octubre de 2024, la ley alemana incluye los dispositivos solares plug-in entre las medidas que inquilinos y copropietarios pueden exigir.** El § 554 apdo. 1 BGB permite al inquilino pedir al arrendador que autorice modificaciones estructurales destinadas a generar electricidad con dispositivos solares plug-in («Steckersolargeräte»), junto con la accesibilidad, la carga de vehículos eléctricos y la protección contra robos. El derecho decae si la modificación es irrazonable para el arrendador incluso valorando los intereses del inquilino. El § 554 apdo. 2 BGB declara nulos los acuerdos contrarios en perjuicio del inquilino. El inquilino puede aceptar prestar una garantía especial, aplicándose por analogía el § 551 apdo. 3 BGB.',
          '**El § 20 apdo. 2 n.º 5 WEG da a cada copropietario un derecho del mismo tipo.** La comunidad decide sobre la ejecución dentro de una administración ordenada. Haufe señala que el consentimiento ya no puede denegarse sin motivo válido, que copropietarios y arrendadores conservan voz en cómo se monta el dispositivo y que los requisitos no deben ser excesivos. Las fuentes consultadas no aclaran si sigue siendo formalmente necesario un acuerdo de la comunidad, así que pregunta a tu administrador.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'Por qué la directiva europea de edificios no impone el solar plug-in',
        content: [
          '**La directiva europea de edificios no obliga a los arrendadores a instalar solar de balcón.** La refundición de la Directiva de eficiencia energética de los edificios (UE) 2024/1275 entró en vigor el 28 de mayo de 2024, con un plazo de transposición nacional hasta el 29 de mayo de 2026. La Comisión Europea describe la instalación de energía solar como la futura norma para los edificios nuevos, que además deben estar preparados para la energía solar, y como un despliegue gradual en ciertos edificios no residenciales existentes donde tenga sentido. Ninguna de esas categorías es un dispositivo plug-in en el balcón de una vivienda de alquiler existente.',
          'No encontramos fuente primaria para los informes de que Vonovia y LEG Immobilien ejecuten programas con objetivos conjuntos de más de 50.000 dispositivos plug-in, ni para programas institucionales «emergentes» en los Países Bajos, Austria y Francia. Trata esas cifras como no verificadas.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'Cómo gestionan las solicitudes los grandes arrendadores',
        content: [
          '**Los grandes arrendadores deciden caso por caso, y la práctica es discutida.** En enero de 2026, Vonovia aceptó «sin reservas» la instalación de balcón de un inquilino de Aquisgrán tras una demanda apoyada por la Deutsche Umwelthilfe (DUH); según la DUH, Vonovia había exigido cálculos de carga de viento, justificantes estructurales y el cumplimiento de una norma de acristalamiento vertical. La DUH pide que Vonovia revise sus reglas de instalación.',
          '**Un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general.** Son posturas recogidas por terceros, no sentencias sobre el almacenamiento; para las reglas de almacenamiento, consulta [Baterías para energía solar de balcón en 2027](/es/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'Qué pueden exigir arrendadores y comunidades, y qué deben hacer los inquilinos',
        content: [
          '**Se admiten reglas sobre cómo se monta el dispositivo; no se admiten las que vacían el derecho.** El propio dispositivo está limitado por la ley y la norma de producto: la definición de la EEG permite hasta 800 W de potencia del inversor y 2.000 W de módulos, mientras que la norma de producto DIN VDE V 0126-95 permite hasta 960 W de módulos con un enchufe doméstico normal y hasta 2.000 Wp con un enchufe de energía especial instalado por un electricista. El operador registra el dispositivo en el Marktstammdatenregister (cinco datos técnicos); desde el Solarpaket I (mayo de 2024) ya no hace falta informar directamente al gestor de red.',
          '**Para los inquilinos, la secuencia práctica es preguntar por escrito, nombrar el dispositivo y el método de montaje, ofrecerse a seguir reglas de montaje razonables y conservar la respuesta.** Si se deniega el consentimiento sin motivo, las asociaciones de consumidores y de inquilinos pueden ayudar. Es información general, no asesoramiento jurídico.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'El canal de compras al por mayor',
        content: [
          '**En principio, las asociaciones de vivienda son para fabricantes e instaladores un canal de venta distinto del comercio minorista:** los acuerdos marco y los pedidos al por mayor podrían suponer pedidos mayores y más duraderos. Sin embargo, en las fuentes consultadas la vía principal en Alemania sigue siendo la solicitud del inquilino basada en el § 554 BGB, y no pudimos verificar programas instalados por arrendadores ni cifras de unidades.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB – Gesetze im Internet',
            description: 'Texto legal: derecho del inquilino a modificaciones para dispositivos solares plug-in, prueba de razonabilidad, nulidad de acuerdos contrarios',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG – Gesetze im Internet',
            description: 'Texto legal: derecho del copropietario a medidas para dispositivos solares plug-in (apdo. 2 n.º 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe – Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: 'Resumen del cambio legal del 17 de octubre de 2024 y de lo que pueden exigir arrendadores y comunidades',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe – nota de prensa del 7 de enero de 2026',
            description: 'Vonovia acepta sin reservas la instalación de balcón de un inquilino de Aquisgrán',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia y el almacenamiento en solar de balcón (17 de julio de 2026)',
            description: 'Informe sobre la directriz técnica de Vonovia que prohíbe el almacenamiento y la valoración discutida',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'Comisión Europea – Directiva de eficiencia energética de los edificios',
            description: 'Plazo de transposición del 29 de mayo de 2026; energía solar como norma para edificios nuevos y ciertos edificios no residenciales existentes',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Registro en el Marktstammdatenregister, límites de 800 W y 2.000 W',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Límites de la norma de producto: 800 VA, 960 W con enchufe normal, 2.000 Wp con enchufe de energía especial',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede un arrendador negarse al solar de balcón en Alemania?',
            a: 'No sin un motivo válido. Desde el 17 de octubre de 2024, el § 554 apdo. 1 BGB da a los inquilinos un derecho a medidas destinadas a generar electricidad con dispositivos solares plug-in. El derecho decae solo si la medida es irrazonable para el arrendador incluso valorando los intereses del inquilino. Es información general, no asesoramiento jurídico.',
          },
          {
            q: '¿Necesitan los copropietarios un acuerdo de la comunidad?',
            a: 'El § 20 apdo. 2 n.º 5 WEG da a cada copropietario un derecho a modificaciones estructurales adecuadas para dispositivos solares plug-in, y la comunidad decide sobre la ejecución dentro de una administración ordenada. Las fuentes consultadas no aclaran si sigue siendo formalmente necesario un acuerdo; pregunta a tu administrador.',
          },
          {
            q: '¿Tienen los grandes arrendadores alemanes programas de solar de balcón?',
            a: 'No encontramos fuente primaria para los informes de que Vonovia y LEG Immobilien ejecuten programas con objetivos conjuntos de más de 50.000 dispositivos plug-in. Trata esas cifras como no verificadas. Lo documentado es que Vonovia aceptó sin reservas la instalación de un inquilino de Aquisgrán en enero de 2026 tras una demanda apoyada por la Deutsche Umwelthilfe.',
          },
          {
            q: '¿Obliga la directiva europea de edificios a los arrendadores a instalar solar de balcón?',
            a: 'No. La EPBD refundida (Directiva (UE) 2024/1275) convierte las instalaciones solares en la norma para edificios nuevos, que además deben estar preparados para la energía solar, y las despliega gradualmente en ciertos edificios no residenciales existentes. No exige dispositivos solares plug-in en viviendas de alquiler existentes.',
          },
          {
            q: '¿Puede mi arrendador prohibir una batería en mi sistema de balcón?',
            a: 'Es un tema discutido. Un informe de drweb.de del 17 de julio de 2026, que cita a inside digital, recoge la directriz técnica de Vonovia como una prohibición del almacenamiento con baterías en instalaciones de balcón por motivos de protección contra incendios y señala que Vonovia confirmó la autenticidad del documento; la Deutsche Umwelthilfe y la Verbraucherzentrale NRW consideran problemática una prohibición general. Si el § 554 BGB cubre el almacenamiento es objeto de debate. Pregunta por escrito y busca asesoramiento; esto no es asesoramiento jurídico.',
          },
          {
            q: '¿Qué límites se aplican a un dispositivo solar plug-in en Alemania?',
            a: 'La definición de la EEG permite hasta 800 W de potencia del inversor y 2.000 W de módulos. La norma de producto DIN VDE V 0126-95 permite hasta 960 W de módulos con un enchufe doméstico normal y hasta 2.000 Wp con un enchufe de energía especial instalado por un electricista. La norma no cubre dispositivos con almacenamiento.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[¿Qué es la energía solar de balcón?](/es/balcony-solar/what-is-balcony-solar) — incluye las preguntas frecuentes sobre el permiso del arrendador y la comunidad',
          '[Balkonkraftwerk: las reglas de Alemania](/es/balcony-solar/balkonkraftwerk-germany-rules) — registro, límites y marco regulatorio alemán',
          '[Baterías para energía solar de balcón en 2027: ¿se vuelven estándar?](/es/balcony-solar/balcony-solar-battery-storage-standard-2027) — reglas de almacenamiento con las que chocan las directrices de arrendadores',
          '[Cómo registrar la energía solar de balcón](/es/balcony-solar/how-to-register-balcony-solar) — registro paso a paso',
        ],
      },
    },
  },
  fr: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-fr.webp',
    title: 'Le solaire de balcon pour les bailleurs et les organismes de logement en 2027',
    seoTitle: 'Solaire de balcon : bailleurs et organismes de logement',
    intro: 'En Allemagne, les locataires et les copropriétaires disposent depuis le 17 octobre 2024 d\'un droit légal aux appareils solaires plug-in (« Steckersolargeräte »), ce qui fait passer la question du bailleur de « puis-je ? » à « comment et à quelles conditions ? ». Cette page explique ce que dit la loi, ce que les bailleurs et les copropriétés peuvent exiger, comment un grand bailleur (Vonovia) a traité les demandes, et ce que la directive européenne sur les bâtiments exige ou non. Ce sont des informations générales sur l\'Allemagne, pas un conseil juridique.',
    metaDescription: 'Depuis octobre 2024, locataires et copropriétaires allemands ont droit à un appareil solaire plug-in. Ce que les bailleurs peuvent exiger et la directive EPBD.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Bailleurs, gestionnaires immobiliers, organismes de logement et locataires en Allemagne évaluant le solaire plug-in',
    primaryTerm: 'solaire de balcon pour bailleurs et organismes de logement',
    targetKeywords: [
      'solaire de balcon bailleurs',
      'balkonkraftwerk bailleur accord',
      'solaire de balcon droits des locataires allemagne',
    ],
    leadAnswerBlock: '**Depuis le 17 octobre 2024, les locataires allemands peuvent exiger l\'accord du bailleur pour un appareil solaire plug-in en vertu du § 554 BGB, et les copropriétaires disposent d\'un droit comparable en vertu du § 20 al. 2 n° 5 WEG ; le refus n\'est possible que si la mesure est déraisonnable pour le bailleur, même en tenant compte des intérêts du locataire.** Les bailleurs et les copropriétés gardent leur mot à dire sur la fixation de l\'appareil, mais leurs exigences ne doivent pas vider le droit de sa substance. Les grands bailleurs décident au cas par cas : Vonovia a accepté « sans réserve » l\'installation d\'un locataire d\'Aix-la-Chapelle en janvier 2026, après une action en justice soutenue par la Deutsche Umwelthilfe. La directive européenne sur les bâtiments (EPBD) n\'oblige pas les bailleurs à installer du solaire plug-in dans les logements existants, et nous n\'avons trouvé aucune source primaire pour les annonces de programmes de bailleurs de plus de 50 000 unités.',
    quickAnswerTop: {
      fr: {
        question: 'Un bailleur ou un organisme de logement peut-il refuser le solaire de balcon en Allemagne ?',
        answer: 'Pas sans motif valable. Depuis le 17 octobre 2024, le § 554 BGB (locataires) et le § 20 al. 2 n° 5 WEG (copropriétaires) couvrent les appareils solaires plug-in. Un locataire peut demander l\'accord, sauf si la mesure est déraisonnable pour le bailleur même en tenant compte des intérêts du locataire. Les bailleurs et les copropriétés peuvent fixer des exigences sur la fixation de l\'appareil, mais pas au point de vider le droit de sa substance. La question de savoir si le droit s\'étend aux batteries est débattue.',
        bullets: [
          'Locataires : § 554 al. 1 BGB ; copropriétaires : § 20 al. 2 n° 5 WEG ; les deux en vigueur depuis le 17 octobre 2024',
          'Le refus suppose que la mesure soit déraisonnable pour le bailleur même en tenant compte des intérêts du locataire ; cette page ne se prononce sur aucun cas particulier',
          'Les bailleurs et les copropriétés peuvent fixer des règles de fixation ; selon Haufe, ces exigences ne doivent pas être excessives',
          'Vonovia a accepté sans réserve l\'installation d\'un locataire d\'Aix-la-Chapelle en janvier 2026 après une action soutenue par la Deutsche Umwelthilfe. Un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale',
          'L\'EPBD (directive (UE) 2024/1275) fait du solaire la norme pour les bâtiments neufs et certains bâtiments non résidentiels existants ; elle n\'oblige pas les bailleurs à installer du solaire plug-in',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways', },
      { label: 'Ce que le droit allemand donne aux locataires et aux copropriétaires', anchor: '#legal-claim', },
      { label: 'Pourquoi la directive européenne sur les bâtiments n\'impose pas le solaire plug-in', anchor: '#regulatory-driver', },
      { label: 'Comment les grands bailleurs traitent les demandes', anchor: '#landlord-practice', },
      { label: 'Ce que bailleurs et copropriétés peuvent exiger, et ce que les locataires doivent faire', anchor: '#landlord-rules', },
      { label: 'Le canal des achats groupés', anchor: '#b2b-channel', },
      { label: 'Sources', anchor: '#sources', },
      { label: 'Questions fréquemment posées', anchor: '#faq', },
      { label: 'Lectures connexes', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Depuis le 17 octobre 2024, le § 554 al. 1 BGB pour les locataires et le § 20 al. 2 n° 5 WEG pour les copropriétaires donnent un droit aux mesures servant à la production d\'électricité par des appareils solaires plug-in.',
          'Le droit du locataire ne tombe que si la mesure est déraisonnable pour le bailleur même en tenant compte des intérêts du locataire (§ 554 BGB). Les accords contraires au détriment du locataire sont nuls.',
          'Les bailleurs et les copropriétés gardent leur mot à dire sur la fixation, mais leurs exigences ne doivent pas être excessives. Les sources consultées ne tranchent pas si une décision de l\'assemblée est encore formellement requise ; interrogez votre gestionnaire.',
          'Vonovia a cédé sans réserve à l\'installation d\'un locataire d\'Aix-la-Chapelle en janvier 2026. Un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale.',
          'La directive européenne sur les bâtiments n\'oblige pas les bailleurs à installer du solaire plug-in, et nous n\'avons pas pu vérifier les annonces de programmes de bailleurs de plus de 50 000 unités.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'Ce que le droit allemand donne aux locataires et aux copropriétaires',
        content: [
          '**Depuis le 17 octobre 2024, le droit allemand range les appareils solaires plug-in parmi les mesures que locataires et copropriétaires peuvent exiger.** Le § 554 al. 1 BGB permet au locataire de demander au bailleur d\'autoriser des modifications structurelles servant à la production d\'électricité par des appareils solaires plug-in (« Steckersolargeräte »), à côté de l\'accessibilité, de la recharge de véhicules électriques et de la protection contre l\'effraction. Le droit tombe si la modification est déraisonnable pour le bailleur même en tenant compte des intérêts du locataire. Le § 554 al. 2 BGB déclare nuls les accords contraires au détriment du locataire. Le locataire peut accepter de fournir une garantie particulière, le § 551 al. 3 BGB s\'appliquant par analogie.',
          '**Le § 20 al. 2 n° 5 WEG donne à chaque copropriétaire un droit du même type.** La communauté décide de la mise en œuvre dans le cadre d\'une gestion régulière. Haufe relève que l\'accord ne peut plus être refusé sans motif valable, que copropriétaires et bailleurs gardent un mot à dire sur la fixation de l\'appareil et que les exigences ne doivent pas être excessives. Les sources consultées ne tranchent pas si une décision de la communauté est encore formellement requise ; interrogez donc votre gestionnaire.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'Pourquoi la directive européenne sur les bâtiments n\'impose pas le solaire plug-in',
        content: [
          '**La directive européenne sur les bâtiments n\'oblige pas les bailleurs à installer du solaire de balcon.** La directive refondue sur la performance énergétique des bâtiments (UE) 2024/1275 est entrée en vigueur le 28 mai 2024, avec un délai de transposition nationale au 29 mai 2026. La Commission européenne décrit l\'installation de solaire comme devenant la norme pour les bâtiments neufs, qui doivent aussi être prêts pour le solaire, et comme un déploiement progressif pour certains bâtiments non résidentiels existants lorsque c\'est pertinent. Aucune de ces catégories ne correspond à un appareil plug-in sur le balcon d\'un logement locatif existant.',
          'Nous n\'avons trouvé aucune source primaire pour les informations selon lesquelles Vonovia et LEG Immobilien mèneraient des programmes avec des objectifs cumulés de plus de 50 000 appareils plug-in, ni pour des programmes institutionnels « émergents » aux Pays-Bas, en Autriche et en France. Considérez ces chiffres comme non vérifiés.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'Comment les grands bailleurs traitent les demandes',
        content: [
          '**Les grands bailleurs décident au cas par cas, et la pratique est contestée.** En janvier 2026, Vonovia a accepté « sans réserve » l\'installation de balcon d\'un locataire d\'Aix-la-Chapelle après une action en justice soutenue par la Deutsche Umwelthilfe (DUH) ; selon la DUH, Vonovia avait exigé des calculs de charge de vent, des justificatifs de structure et le respect d\'une norme de vitrage vertical. La DUH demande que Vonovia révise ses règles d\'installation.',
          '**Un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale.** Ce sont des positions rapportées par des tiers, pas des décisions de justice sur le stockage ; pour les règles de stockage, voir [Les batteries pour le solaire de balcon en 2027](/fr/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'Ce que bailleurs et copropriétés peuvent exiger, et ce que les locataires doivent faire',
        content: [
          '**Les règles sur la fixation de l\'appareil sont admises ; celles qui vident le droit de sa substance ne le sont pas.** L\'appareil lui-même est limité par la loi et la norme produit : la définition de l\'EEG autorise jusqu\'à 800 W de puissance d\'onduleur et 2 000 W de modules, tandis que la norme produit DIN VDE V 0126-95 autorise jusqu\'à 960 W de modules avec une prise domestique normale et jusqu\'à 2 000 Wp avec une prise énergie spéciale installée par un électricien. L\'exploitant déclare lui-même l\'appareil dans le Marktstammdatenregister (cinq données techniques) ; depuis le Solarpaket I (mai 2024), le gestionnaire de réseau n\'a plus à être informé directement.',
          '**Pour les locataires, la marche à suivre pratique est de demander par écrit, de nommer l\'appareil et le mode de fixation, de proposer de suivre des règles de fixation raisonnables et de conserver la réponse.** Si l\'accord est refusé sans motif, les associations de consommateurs et de locataires peuvent aider. Ce sont des informations générales, pas un conseil juridique.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'Le canal des achats groupés',
        content: [
          '**En principe, les organismes de logement constituent pour les fabricants et les installateurs un canal de vente différent de la vente au détail aux particuliers :** des accords-cadres et des commandes groupées pourraient signifier des commandes plus importantes et plus durables. Dans les sources consultées, la voie principale en Allemagne reste toutefois la demande du locataire fondée sur le § 554 BGB, et nous n\'avons pas pu vérifier de programmes installés par des bailleurs ni de nombres d\'unités.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB – Gesetze im Internet',
            description: 'Texte de loi : droit du locataire aux modifications pour appareils solaires plug-in, test du caractère raisonnable, nullité des accords contraires',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG – Gesetze im Internet',
            description: 'Texte de loi : droit du copropriétaire aux mesures pour appareils solaires plug-in (al. 2 n° 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe – Balkonkraftwerke : Das gilt für WEG & Vermieter',
            description: 'Résumé du changement de règle du 17 octobre 2024 et de ce que bailleurs et copropriétés peuvent exiger',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe – communiqué du 7 janvier 2026',
            description: 'Vonovia accepte sans réserve l\'installation de balcon d\'un locataire d\'Aix-la-Chapelle',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia et le stockage pour le solaire de balcon (17 juillet 2026)',
            description: 'Article sur la directive technique de Vonovia interdisant le stockage et l\'évaluation contestée',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'Commission européenne – directive sur la performance énergétique des bâtiments',
            description: 'Délai de transposition du 29 mai 2026 ; solaire comme norme pour les bâtiments neufs et certains bâtiments non résidentiels existants',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Enregistrement dans le Marktstammdatenregister, limites de 800 W et 2 000 W',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Limites de la norme produit : 800 VA, 960 W avec prise normale, 2 000 Wp avec prise énergie spéciale',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Un bailleur peut-il refuser le solaire de balcon en Allemagne ?',
            a: 'Pas sans motif valable. Depuis le 17 octobre 2024, le § 554 al. 1 BGB donne aux locataires un droit aux mesures servant à la production d\'électricité par des appareils solaires plug-in. Le droit ne tombe que si la mesure est déraisonnable pour le bailleur même en tenant compte des intérêts du locataire. Ce sont des informations générales, pas un conseil juridique.',
          },
          {
            q: 'Les copropriétaires ont-ils besoin d\'une décision de la communauté ?',
            a: 'Le § 20 al. 2 n° 5 WEG donne à chaque copropriétaire un droit à des modifications structurelles appropriées pour les appareils solaires plug-in, et la communauté décide de la mise en œuvre dans le cadre d\'une gestion régulière. Les sources consultées ne tranchent pas si une décision est encore formellement requise ; interrogez votre gestionnaire.',
          },
          {
            q: 'Les grands bailleurs allemands mènent-ils des programmes de solaire de balcon ?',
            a: 'Nous n\'avons trouvé aucune source primaire pour les informations selon lesquelles Vonovia et LEG Immobilien mèneraient des programmes avec des objectifs cumulés de plus de 50 000 appareils plug-in. Considérez ces chiffres comme non vérifiés. Ce qui est documenté, c\'est que Vonovia a accepté sans réserve l\'installation d\'un locataire d\'Aix-la-Chapelle en janvier 2026 après une action soutenue par la Deutsche Umwelthilfe.',
          },
          {
            q: 'La directive européenne sur les bâtiments oblige-t-elle les bailleurs à installer du solaire de balcon ?',
            a: 'Non. L\'EPBD refondue (directive (UE) 2024/1275) fait des installations solaires la norme pour les bâtiments neufs, qui doivent aussi être prêts pour le solaire, et les déploie progressivement dans certains bâtiments non résidentiels existants. Elle n\'impose pas d\'appareils solaires plug-in dans les logements locatifs existants.',
          },
          {
            q: 'Mon bailleur peut-il interdire une batterie avec mon installation de balcon ?',
            a: 'C\'est contesté. Un article de drweb.de du 17 juillet 2026, citant inside digital, cite la directive technique de Vonovia comme interdisant le stockage par batterie sur les installations de balcon pour des raisons de protection contre l\'incendie et indique que Vonovia a confirmé l\'authenticité du document ; la Deutsche Umwelthilfe et la Verbraucherzentrale NRW jugent problématique une interdiction générale. La question de savoir si le § 554 BGB couvre le stockage est débattue. Demandez par écrit et faites-vous conseiller ; ceci n\'est pas un conseil juridique.',
          },
          {
            q: 'Quelles limites s\'appliquent à un appareil solaire plug-in en Allemagne ?',
            a: 'La définition de l\'EEG autorise jusqu\'à 800 W de puissance d\'onduleur et 2 000 W de modules. La norme produit DIN VDE V 0126-95 autorise jusqu\'à 960 W de modules avec une prise domestique normale et jusqu\'à 2 000 Wp avec une prise énergie spéciale installée par un électricien. La norme ne couvre pas les appareils avec stockage.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Qu\'est-ce que le solaire de balcon ?](/fr/balcony-solar/what-is-balcony-solar) — avec la FAQ sur l\'accord du bailleur et de la copropriété',
          '[Balkonkraftwerk : les règles allemandes](/fr/balcony-solar/balkonkraftwerk-germany-rules) — enregistrement, limites et cadre réglementaire allemand',
          '[Les batteries pour le solaire de balcon en 2027 : un nouveau standard ?](/fr/balcony-solar/balcony-solar-battery-storage-standard-2027) — les règles de stockage auxquelles se heurtent les directives de bailleurs',
          '[Comment déclarer un solaire de balcon](/fr/balcony-solar/how-to-register-balcony-solar) — l\'enregistrement pas à pas',
        ],
      },
    },
  },
  ja: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-ja.webp',
    title: '2027年の大家・住宅会社向けバルコニーソーラー',
    seoTitle: '2027年版 大家・住宅会社向けバルコニーソーラーの法的ポイント',
    intro: 'ドイツでは、2024年10月17日から、借主と区分所有者にプラグイン式ソーラー機器（「Steckersolargeräte」）を求める法的な権利があります。これにより、貸主にとっての問いは「設置してよいか」から「どのような条件で、どう設置するか」に移りました。このページでは、法律の内容、貸主や管理組合が求めてよいこと、大手貸主（Vonovia）の対応、EUの建築物指令が求めていること・求めていないことを説明します。ドイツに関する一般的な情報であり、法的助言ではありません。',
    metaDescription: '2024年10月以降、ドイツの借主と区分所有者はプラグイン式ソーラー機器を求める権利があります。貸主が求められることと、EU指令EPBDの内容を解説。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5分で読める',
    educationalLevel: 'Beginner',
    audience: 'プラグイン式ソーラーを検討しているドイツの貸主、不動産管理者、住宅会社、借主',
    primaryTerm: '大家・住宅会社向けバルコニーソーラー',
    targetKeywords: ['バルコニーソーラー 大家', 'バルコニーソーラー 借主 権利 ドイツ', 'バルコニーソーラー 住宅会社'],
    leadAnswerBlock: '**2024年10月17日以降、ドイツの借主はBGB第554条に基づいてプラグイン式ソーラー機器への貸主の同意を求めることができ、区分所有者にはWEG第20条第2項第5号に基づく同様の権利があります。同意を拒否できるのは、借主の利益を考慮しても、その措置が貸主にとって受け入れがたい場合に限られます。** 貸主や管理組合は取り付け方法について意見を述べることができますが、その要求で権利を空洞化させてはなりません。大手貸主は個別に判断しています。Vonoviaは2026年1月、ドイツ環境援助（Deutsche Umwelthilfe）が支援した訴訟を受けて、アーヘンの借主の設置に「留保なく」同意しました。EUの建築物指令（EPBD）は、既存の賃貸住宅にプラグイン式ソーラーを設置するよう貸主に義務づけてはおらず、5万台超の貸主プログラムとする報道には一次情報が見つかりませんでした。',
    quickAnswerTop: {
      ja: {
        question: 'ドイツの貸主や住宅会社はバルコニーソーラーを拒否できますか？',
        answer: '正当な理由がなければできません。2024年10月17日以降、BGB第554条（借主）とWEG第20条第2項第5号（区分所有者）がプラグイン式ソーラー機器を対象としています。借主は、借主の利益を考慮しても貸主にとって受け入れがたい措置でない限り、同意を求めることができます。貸主や管理組合は取り付け方法の要件を定められますが、権利を空洞化させるほど厳しくはできません。この権利が蓄電池に及ぶかどうかは争いがあります。',
        bullets: [
          '借主：BGB第554条第1項、区分所有者：WEG第20条第2項第5号。いずれも2024年10月17日から施行',
          '拒否には、借主の利益を考慮しても措置が貸主にとって受け入れがたいことが必要。このページは個別の事案については何も述べません',
          '貸主や管理組合は取り付けのルールを定められるが、Haufeによるとその要件は過大であってはならない',
          'Vonoviaは2026年1月、Deutsche Umwelthilfeが支援した訴訟を受け、アーヘンの借主の設置に留保なく同意。drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています',
          'EPBD（指令(EU) 2024/1275）は新築建築物と一部の既存の非住宅建築物で太陽光を標準にするもので、貸主にプラグイン式ソーラーの設置を義務づけてはいない',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: '#key-takeaways', },
      { label: 'ドイツの法律が借主と区分所有者に認めていること', anchor: '#legal-claim', },
      { label: 'EUの建築物指令がプラグイン式ソーラーを義務づけない理由', anchor: '#regulatory-driver', },
      { label: '大手貸主は申請にどう対応しているか', anchor: '#landlord-practice', },
      { label: '貸主・管理組合が求められることと、借主がすべきこと', anchor: '#landlord-rules', },
      { label: '一括調達というチャネル', anchor: '#b2b-channel', },
      { label: '出典', anchor: '#sources', },
      { label: 'よくある質問', anchor: '#faq', },
      { label: '関連記事', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2024年10月17日以降、BGB第554条第1項が借主に、WEG第20条第2項第5号が区分所有者に、プラグイン式ソーラー機器による発電に資する措置を求める権利を認めています。',
          '借主の権利が認められないのは、借主の利益を考慮しても措置が貸主にとって受け入れがたい場合だけです（BGB第554条）。借主に不利な、これと異なる合意は無効です。',
          '貸主や管理組合は取り付け方法について意見を述べられますが、要件は過大であってはなりません。管理組合の決議がなお形式上必要かどうかは、確認した情報源では確定していません。管理会社に確認してください。',
          'Vonoviaは2026年1月、アーヘンの借主の設置に留保なく同意しました。drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています。',
          'EUの建築物指令は貸主にプラグイン式ソーラーの設置を義務づけておらず、5万台超の貸主プログラムとする報道は確認できませんでした。',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'ドイツの法律が借主と区分所有者に認めていること',
        content: [
          '**2024年10月17日以降、ドイツの法律はプラグイン式ソーラー機器を、借主と区分所有者が求めることのできる措置に加えています。** BGB第554条第1項は、バリアフリー、電気自動車の充電、侵入防止と並んで、プラグイン式ソーラー機器（「Steckersolargeräte」）による発電に資する構造上の変更を貸主に許可するよう求める権利を借主に認めています。借主の利益を考慮しても貸主にとって受け入れがたい変更であれば、この権利は認められません。同条第2項により、借主に不利でこれと異なる合意は無効です。借主は特別な担保の提供に同意でき、その場合はBGB第551条第3項が準用されます。',
          '**WEG第20条第2項第5号は、各区分所有者に同種の権利を認めています。** 実施については、管理組合が適正な管理の範囲内で決定します。Haufeは、同意を正当な理由なしに拒否することはもはやできないこと、区分所有者や貸主が取り付け方法に意見を述べられること、要件が過大であってはならないことを指摘しています。管理組合の決議がなお形式上必要かどうかは、確認した情報源では確定していないため、管理会社に確認してください。',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'EUの建築物指令がプラグイン式ソーラーを義務づけない理由',
        content: [
          '**EUの建築物指令は、貸主にバルコニーソーラーの設置を義務づけていません。** 改正建築物エネルギー性能指令(EU) 2024/1275は2024年5月28日に発効し、各国での国内法化の期限は2026年5月29日でした。欧州委員会は、太陽光の設置は新築建築物（ソーラー対応も必要）で標準になり、一部の既存の非住宅建築物でも適切な場合に段階的に広がると説明しています。どちらの区分も、既存の賃貸住宅のバルコニーに付けるプラグイン式機器には当たりません。',
          'VonoviaとLEG Immobilienが合計5万台超のプラグイン式機器を目標とするプログラムを進めているという報道や、オランダ・オーストリア・フランスで「広がりつつある」機関向けプログラムについて、一次情報は見つかりませんでした。これらの数字は未確認として扱ってください。',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: '大手貸主は申請にどう対応しているか',
        content: [
          '**大手貸主は個別に判断しており、その運用には争いがあります。** 2026年1月、Vonoviaは、Deutsche Umwelthilfe（DUH）が支援した訴訟を受けて、アーヘンの借主のバルコニー設備に「留保なく」同意しました。DUHによると、Vonoviaはそれまで、風荷重の計算、構造上の証明、垂直ガラス規格の順守を求めていました。DUHはVonoviaに設置ルールの見直しを求めています。',
          '**drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています。** これは第三者が伝える立場であり、蓄電池に関する裁判所の判断ではありません。蓄電池のルールは[2027年のバルコニーソーラー用蓄電池](/ja/balcony-solar/balcony-solar-battery-storage-standard-2027)をご覧ください。',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: '貸主・管理組合が求められることと、借主がすべきこと',
        content: [
          '**機器の取り付け方法に関するルールは認められますが、権利を空洞化させるルールは認められません。** 機器そのものは法律と製品規格で制限されています。EEGの定義ではインバーター出力は最大800 W、モジュールは2,000 Wまでです。製品規格DIN VDE V 0126-95では、通常の家庭用プラグでモジュール最大960 W、電気技術者が設置する専用エネルギープラグで最大2,000 Wpまで認められます。運転者はMarktstammdatenregisterに機器を自分で登録します（技術情報5項目）。Solarpaket I（2024年5月）以降、系統事業者に直接通知する必要はなくなりました。',
          '**借主にとっての実際の手順は、書面で申し出る、機器と取り付け方法を明示する、合理的な取り付けルールに従うと申し出る、回答を保管する、の4つです。** 理由なく同意が拒否された場合は、消費者相談センターや借家人団体が支援してくれます。これは一般的な情報であり、法的助言ではありません。',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: '一括調達というチャネル',
        content: [
          '**原則として、住宅会社はメーカーや施工業者にとって、一般消費者向けの小売とは別の販売チャネルです。** 基本契約や大量発注により、より大きく長期の受注になる可能性があります。ただし、確認した情報源では、ドイツでの主な経路は依然としてBGB第554条に基づく借主からの申し出であり、貸主が設置するプログラムや台数は確認できませんでした。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB — Gesetze im Internet',
            description: '法令本文：プラグイン式ソーラー機器のための構造変更を求める借主の権利、受け入れ可能性の判断、無効となる異なる合意',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG — Gesetze im Internet',
            description: '法令本文：プラグイン式ソーラー機器のための措置を求める区分所有者の権利（第2項第5号）',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe — Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: '2024年10月17日の法改正と、貸主・管理組合が求められることの要約',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe — 2026年1月7日のプレスリリース',
            description: 'Vonoviaがアーヘンの借主のバルコニー設備に留保なく同意',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonoviaとバルコニーソーラーの蓄電池（2026年7月17日）',
            description: '蓄電池を禁止するVonoviaの技術ガイドラインと、争いのある評価に関する報道',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: '欧州委員会 — 建築物エネルギー性能指令',
            description: '国内法化期限2026年5月29日、新築建築物と一部の既存非住宅建築物で標準となる太陽光',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — プラグイン式ソーラーの法律と規格',
            description: 'Marktstammdatenregisterへの登録、800 Wと2,000 Wの上限',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95に関するFAQ',
            description: '製品規格の上限：800 VA、通常のプラグで960 W、専用エネルギープラグで2,000 Wp',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ドイツの貸主はバルコニーソーラーを拒否できますか？',
            a: '正当な理由がなければできません。2024年10月17日以降、BGB第554条第1項は、プラグイン式ソーラー機器による発電に資する措置を求める権利を借主に認めています。この権利が認められないのは、借主の利益を考慮しても措置が貸主にとって受け入れがたい場合だけです。これは一般的な情報であり、法的助言ではありません。',
          },
          {
            q: '区分所有者は管理組合の決議が必要ですか？',
            a: 'WEG第20条第2項第5号は、各区分所有者にプラグイン式ソーラー機器のための適切な構造変更を求める権利を認め、実施については管理組合が適正な管理の範囲内で決定します。決議がなお形式上必要かどうかは、確認した情報源では確定していないため、管理会社に確認してください。',
          },
          {
            q: 'ドイツの大手貸主はバルコニーソーラーのプログラムを実施していますか？',
            a: 'VonoviaとLEG Immobilienが合計5万台超のプラグイン式機器を目標とするプログラムを進めているという報道について、一次情報は見つかりませんでした。これらの数字は未確認として扱ってください。記録されているのは、Vonoviaが2026年1月、Deutsche Umwelthilfeが支援した訴訟を受けて、アーヘンの借主の設置に留保なく同意したことです。',
          },
          {
            q: 'EUの建築物指令は貸主にバルコニーソーラーの設置を義務づけていますか？',
            a: 'いいえ。改正EPBD（指令(EU) 2024/1275）は、新築建築物（ソーラー対応も必要）で太陽光の設置を標準とし、一部の既存の非住宅建築物で段階的に広げるものです。既存の賃貸住宅にプラグイン式ソーラー機器を求めてはいません。',
          },
          {
            q: '貸主は私のバルコニー設備に蓄電池を付けることを禁止できますか？',
            a: '争いがあります。drweb.deの2026年7月17日付の報道は、inside digitalを引用して、Vonoviaの技術ガイドラインが防火上の理由からバルコニー設備への蓄電池の設置を禁止していると伝え、Vonoviaがこの文書の真正性を認めたとしています。Deutsche UmwelthilfeとVerbraucherzentrale NRWは一律の禁止には問題があるとしています。BGB第554条が蓄電池を含むかどうかは議論があります。書面で問い合わせ、助言を受けてください。これは法的助言ではありません。',
          },
          {
            q: 'ドイツでプラグイン式ソーラー機器にはどのような上限がありますか？',
            a: 'EEGの定義ではインバーター出力は最大800 W、モジュールは2,000 Wまでです。製品規格DIN VDE V 0126-95では、通常の家庭用プラグでモジュール最大960 W、電気技術者が設置する専用エネルギープラグで最大2,000 Wpまで認められます。この規格は蓄電池付きの機器を対象としていません。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[バルコニーソーラーとは？](/ja/balcony-solar/what-is-balcony-solar) — 貸主・管理組合の許可に関するFAQを含みます',
          '[Balkonkraftwerk：ドイツのバルコニーソーラー規則](/ja/balcony-solar/balkonkraftwerk-germany-rules) — 登録、上限、ドイツの規制の枠組み',
          '[2027年のバルコニーソーラー用蓄電池：標準になるのか](/ja/balcony-solar/balcony-solar-battery-storage-standard-2027) — 貸主のガイドラインがぶつかる蓄電池のルール',
          '[バルコニーソーラーの登録方法](/ja/balcony-solar/how-to-register-balcony-solar) — 登録の手順',
        ],
      },
    },
  },
  ko: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-ko.webp',
    title: '2027년 임대인과 주택협회를 위한 발코니 태양광',
    seoTitle: '임대인·주택협회를 위한 발코니 태양광: 법적 권리와 규정',
    intro: '독일에서는 세입자와 구분소유자가 2024년 10월 17일부터 플러그인 태양광 장치("Steckersolargeräte")를 요구할 법적 권리를 갖습니다. 이로써 임대인의 질문은 "설치해도 되는가"에서 "어떤 조건으로, 어떻게 하는가"로 옮겨 갔습니다. 이 글은 법이 정하는 내용, 임대인과 관리조합이 요구할 수 있는 것, 대형 임대인(Vonovia)의 대응, EU 건축물 지침이 요구하는 것과 요구하지 않는 것을 설명합니다. 독일에 관한 일반 정보이며 법률 자문이 아닙니다.',
    metaDescription: '2024년 10월부터 독일 세입자와 구분소유자는 플러그인 태양광 장치를 요구할 수 있습니다. 임대인이 요구할 수 있는 것과 EU EPBD의 내용을 정리합니다.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    audience: '플러그인 태양광을 검토하는 독일의 임대인, 부동산 관리자, 주택협회, 세입자',
    primaryTerm: '임대인 및 주택협회를 위한 발코니 태양광',
    targetKeywords: ['발코니 태양광 임대인', '독일 발코니 태양광 세입자 권리', '발코니 태양광 주택협회'],
    leadAnswerBlock: '**2024년 10월 17일부터 독일 세입자는 BGB 제554조에 따라 플러그인 태양광 장치에 대한 임대인의 동의를 요구할 수 있고, 구분소유자도 WEG 제20조 제2항 제5호에 따라 유사한 권리를 갖습니다. 동의를 거부할 수 있는 것은 세입자의 이익을 고려하더라도 그 조치가 임대인에게 기대하기 어려운 경우뿐입니다.** 임대인과 관리조합은 장치를 설치하는 방식에 의견을 낼 수 있지만, 그 요구가 권리를 공동화해서는 안 됩니다. 대형 임대인은 사안별로 판단합니다. Vonovia는 2026년 1월, 독일환경지원(Deutsche Umwelthilfe)이 지원한 소송 이후 아헨 세입자의 설치에 "유보 없이" 동의했습니다. EU 건축물 지침(EPBD)은 기존 임대 주택에 플러그인 태양광을 설치하도록 임대인에게 의무를 지우지 않으며, 임대인 프로그램이 5만 대를 넘는다는 보도에 대해서는 1차 출처를 찾지 못했습니다.',
    quickAnswerTop: {
      ko: {
        question: '독일의 임대인이나 주택협회는 발코니 태양광을 거부할 수 있습니까?',
        answer: '정당한 사유 없이는 안 됩니다. 2024년 10월 17일부터 BGB 제554조(세입자)와 WEG 제20조 제2항 제5호(구분소유자)가 플러그인 태양광 장치를 다룹니다. 세입자는 세입자의 이익을 고려하더라도 임대인에게 기대하기 어려운 조치가 아닌 한 동의를 요구할 수 있습니다. 임대인과 관리조합은 장치 설치 방식에 대한 요건을 정할 수 있지만 권리를 공동화할 만큼 엄격해서는 안 됩니다. 이 권리가 배터리에도 미치는지는 다툼이 있습니다.',
        bullets: [
          '세입자: BGB 제554조 제1항, 구분소유자: WEG 제20조 제2항 제5호. 둘 다 2024년 10월 17일부터 시행',
          '거부하려면 세입자의 이익을 고려하더라도 조치가 임대인에게 기대하기 어려워야 합니다. 이 글은 개별 사안에 대해 어떤 주장도 하지 않습니다',
          '임대인과 관리조합은 설치 규칙을 정할 수 있으나, Haufe에 따르면 그 요건이 과도해서는 안 됩니다',
          'Vonovia는 2026년 1월 독일환경지원이 지원한 소송 이후 아헨 세입자의 설치에 유보 없이 동의했습니다. drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다',
          'EPBD(지침 (EU) 2024/1275)는 신축 건물과 일부 기존 비주거 건물에서 태양광을 표준으로 삼으며, 임대인에게 플러그인 태양광 설치를 의무화하지 않습니다',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways', },
      { label: '독일 법이 세입자와 구분소유자에게 주는 것', anchor: '#legal-claim', },
      { label: 'EU 건축물 지침이 플러그인 태양광을 의무화하지 않는 이유', anchor: '#regulatory-driver', },
      { label: '대형 임대인이 요청을 다루는 방식', anchor: '#landlord-practice', },
      { label: '임대인과 관리조합이 요구할 수 있는 것, 세입자가 할 일', anchor: '#landlord-rules', },
      { label: '대량 조달 채널', anchor: '#b2b-channel', },
      { label: '출처', anchor: '#sources', },
      { label: '자주 묻는 질문', anchor: '#faq', },
      { label: '관련 자료', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2024년 10월 17일부터 BGB 제554조 제1항은 세입자에게, WEG 제20조 제2항 제5호는 구분소유자에게 플러그인 태양광 장치로 발전하는 데 도움이 되는 조치를 요구할 권리를 인정합니다.',
          '세입자의 청구권이 성립하지 않는 것은 세입자의 이익을 고려하더라도 조치가 임대인에게 기대하기 어려운 경우뿐입니다(BGB 제554조). 세입자에게 불리하게 이와 달리 정한 합의는 무효입니다.',
          '임대인과 관리조합은 설치 방식에 의견을 낼 수 있지만 요건이 과도해서는 안 됩니다. 관리조합 결의가 형식상 여전히 필요한지는 확인한 출처에서 확정되지 않았으니 관리자에게 문의하십시오.',
          'Vonovia는 2026년 1월 아헨 세입자의 설치에 유보 없이 동의했습니다. drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다.',
          'EU 건축물 지침은 임대인에게 플러그인 태양광 설치를 의무화하지 않으며, 임대인 프로그램이 5만 대를 넘는다는 보도는 확인할 수 없었습니다.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: '독일 법이 세입자와 구분소유자에게 주는 것',
        content: [
          '**2024년 10월 17일부터 독일 법은 플러그인 태양광 장치를 세입자와 구분소유자가 요구할 수 있는 조치에 포함합니다.** BGB 제554조 제1항은 장애인 접근성, 전기차 충전, 침입 방지와 함께, 플러그인 태양광 장치("Steckersolargeräte")를 이용한 발전에 도움이 되는 구조 변경을 허용해 달라고 세입자가 임대인에게 요구할 수 있게 합니다. 세입자의 이익을 고려하더라도 그 변경이 임대인에게 기대하기 어려우면 청구권은 성립하지 않습니다. 같은 조 제2항에 따라 세입자에게 불리하게 이와 달리 정한 합의는 무효입니다. 세입자는 특별 담보 제공에 동의할 수 있으며, 이때 BGB 제551조 제3항이 준용됩니다.',
          '**WEG 제20조 제2항 제5호는 각 구분소유자에게 같은 종류의 권리를 줍니다.** 실행 방법은 관리조합이 적정한 관리의 범위에서 결정합니다. Haufe는 동의를 정당한 사유 없이 거부할 수 없게 되었고, 소유자와 임대인은 장치를 설치하는 방식에 의견을 낼 수 있으며, 요건이 과도해서는 안 된다고 지적합니다. 조합 결의가 형식상 여전히 필요한지는 확인한 출처에서 확정되지 않았으므로 관리자에게 문의하십시오.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'EU 건축물 지침이 플러그인 태양광을 의무화하지 않는 이유',
        content: [
          '**EU 건축물 지침은 임대인에게 발코니 태양광 설치를 의무화하지 않습니다.** 개정 건축물 에너지 성능 지침 (EU) 2024/1275는 2024년 5월 28일 발효되었고, 각국의 국내법 반영 기한은 2026년 5월 29일이었습니다. 유럽연합 집행위원회는 태양광 설치가 신축 건물(태양광 설치 준비도 갖춰야 함)에서는 표준이 되고, 일부 기존 비주거 건물에서는 적절한 경우 단계적으로 확대된다고 설명합니다. 두 범주 모두 기존 임대 주택 발코니의 플러그인 장치는 아닙니다.',
          'Vonovia와 LEG Immobilien이 합계 5만 대가 넘는 플러그인 장치를 목표로 한 프로그램을 운영한다는 보도나, 네덜란드·오스트리아·프랑스의 "부상하는" 기관 프로그램에 대해서는 1차 출처를 찾지 못했습니다. 이런 수치는 확인되지 않은 것으로 취급하십시오.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: '대형 임대인이 요청을 다루는 방식',
        content: [
          '**대형 임대인은 사안별로 판단하며, 그 관행에는 다툼이 있습니다.** 2026년 1월 Vonovia는 독일환경지원(DUH)이 지원한 소송 이후 아헨 세입자의 발코니 설비에 "유보 없이" 동의했습니다. DUH에 따르면 Vonovia는 그 전까지 풍하중 계산, 구조 증명, 수직 유리 규격 준수를 요구했습니다. DUH는 Vonovia가 설치 규칙을 수정하기를 요구합니다.',
          '**drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다.** 이는 제3자가 전하는 입장이며, 저장장치에 대한 법원 판결이 아닙니다. 저장장치 규정은 [2027년 발코니 태양광 배터리](/ko/balcony-solar/balcony-solar-battery-storage-standard-2027)를 참고하십시오.',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: '임대인과 관리조합이 요구할 수 있는 것, 세입자가 할 일',
        content: [
          '**장치를 설치하는 방식에 대한 규칙은 허용되지만, 권리를 공동화하는 규칙은 허용되지 않습니다.** 장치 자체는 법과 제품 표준으로 제한됩니다. EEG 정의는 인버터 출력 최대 800 W, 모듈 2,000 W까지를 허용하고, 제품 표준 DIN VDE V 0126-95는 일반 가정용 플러그에서 모듈 최대 960 W, 전기기술자가 설치하는 특수 에너지 플러그에서 최대 2,000 Wp를 허용합니다. 운영자는 Marktstammdatenregister에 직접 장치를 등록합니다(기술 정보 5가지). Solarpaket I(2024년 5월) 이후 전력망 사업자에 직접 알릴 필요는 없습니다.',
          '**세입자의 실무 순서는 서면으로 요청하고, 장치와 설치 방식을 명시하고, 합리적인 설치 규칙을 따르겠다고 제안하고, 답변을 보관하는 것입니다.** 이유 없이 동의가 거부되면 소비자 상담센터와 세입자 단체가 도움을 줄 수 있습니다. 이는 일반 정보이며 법률 자문이 아닙니다.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: '대량 조달 채널',
        content: [
          '**원칙적으로 주택협회는 제조사와 설치업체에 일반 소비자 소매와는 다른 판매 채널입니다.** 기본 계약과 대량 주문은 더 크고 장기적인 주문을 뜻할 수 있습니다. 다만 확인한 출처에서 독일의 주된 경로는 여전히 BGB 제554조에 따른 세입자의 요청이며, 임대인이 설치하는 프로그램이나 대수는 확인할 수 없었습니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB — Gesetze im Internet',
            description: '법령 원문: 플러그인 태양광 장치를 위한 구조 변경에 대한 세입자의 청구권, 기대 가능성 판단, 무효가 되는 반대 합의',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG — Gesetze im Internet',
            description: '법령 원문: 플러그인 태양광 장치를 위한 조치에 대한 구분소유자의 권리(제2항 제5호)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe — Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: '2024년 10월 17일 법 개정과 임대인·관리조합이 요구할 수 있는 것에 대한 요약',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe — 2026년 1월 7일 보도자료',
            description: 'Vonovia가 아헨 세입자의 발코니 설비에 유보 없이 동의',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia와 발코니 태양광 저장장치(2026년 7월 17일)',
            description: '저장장치를 금지하는 Vonovia 기술 지침과 논란이 있는 평가에 관한 보도',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: '유럽연합 집행위원회 — 건축물 에너지 성능 지침',
            description: '국내법 반영 기한 2026년 5월 29일, 신축 건물과 일부 기존 비주거 건물에서 표준이 되는 태양광',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — 플러그인 태양광의 법률과 표준',
            description: 'Marktstammdatenregister 등록, 800 W와 2,000 W 한도',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95 FAQ',
            description: '제품 표준 한도: 800 VA, 일반 플러그 960 W, 특수 에너지 플러그 2,000 Wp',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '독일 임대인은 발코니 태양광을 거부할 수 있습니까?',
            a: '정당한 사유 없이는 안 됩니다. 2024년 10월 17일부터 BGB 제554조 제1항은 플러그인 태양광 장치로 발전하는 데 도움이 되는 조치를 요구할 권리를 세입자에게 줍니다. 세입자의 이익을 고려하더라도 조치가 임대인에게 기대하기 어려운 경우에만 청구권이 성립하지 않습니다. 이는 일반 정보이며 법률 자문이 아닙니다.',
          },
          {
            q: '구분소유자는 관리조합 결의가 필요합니까?',
            a: 'WEG 제20조 제2항 제5호는 각 구분소유자에게 플러그인 태양광 장치를 위한 적절한 구조 변경을 요구할 권리를 주며, 실행 방법은 관리조합이 적정한 관리의 범위에서 결정합니다. 결의가 형식상 여전히 필요한지는 확인한 출처에서 확정되지 않았으니 관리자에게 문의하십시오.',
          },
          {
            q: '독일의 대형 임대인은 발코니 태양광 프로그램을 운영합니까?',
            a: 'Vonovia와 LEG Immobilien이 합계 5만 대가 넘는 플러그인 장치를 목표로 한 프로그램을 운영한다는 보도에 대해서는 1차 출처를 찾지 못했습니다. 이런 수치는 확인되지 않은 것으로 취급하십시오. 확인된 것은 Vonovia가 2026년 1월 독일환경지원이 지원한 소송 이후 아헨 세입자의 설치에 유보 없이 동의했다는 점입니다.',
          },
          {
            q: 'EU 건축물 지침은 임대인에게 발코니 태양광 설치를 의무화합니까?',
            a: '아니요. 개정 EPBD(지침 (EU) 2024/1275)는 신축 건물(태양광 설치 준비도 갖춰야 함)에서 태양광 설치를 표준으로 삼고 일부 기존 비주거 건물에서 단계적으로 확대합니다. 기존 임대 주택에 플러그인 태양광 장치를 요구하지는 않습니다.',
          },
          {
            q: '임대인이 제 발코니 설비에 배터리를 금지할 수 있습니까?',
            a: '다툼이 있습니다. drweb.de의 2026년 7월 17일 보도는 inside digital을 인용하여 Vonovia의 기술 지침이 화재 방지를 이유로 발코니 설비에 배터리 저장장치를 금지한다고 전하며 Vonovia가 해당 문서가 진본임을 확인했다고 밝힙니다. Deutsche Umwelthilfe와 Verbraucherzentrale NRW는 일괄 금지가 문제라고 봅니다. BGB 제554조가 저장장치를 포함하는지는 논란이 있습니다. 서면으로 문의하고 조언을 구하십시오. 이는 법률 자문이 아닙니다.',
          },
          {
            q: '독일에서 플러그인 태양광 장치에는 어떤 한도가 적용됩니까?',
            a: 'EEG 정의는 인버터 출력 최대 800 W, 모듈 2,000 W까지를 허용합니다. 제품 표준 DIN VDE V 0126-95는 일반 가정용 플러그에서 모듈 최대 960 W, 전기기술자가 설치하는 특수 에너지 플러그에서 최대 2,000 Wp를 허용합니다. 이 표준은 저장장치가 포함된 장치를 다루지 않습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[발코니 태양광이란?](/ko/balcony-solar/what-is-balcony-solar) — 임대인·관리조합 허가에 관한 FAQ 포함',
          '[Balkonkraftwerk: 독일 발코니 태양광 규정](/ko/balcony-solar/balkonkraftwerk-germany-rules) — 등록, 한도, 독일의 규제 배경',
          '[2027년 발코니 태양광 배터리: 표준이 되고 있습니까?](/ko/balcony-solar/balcony-solar-battery-storage-standard-2027) — 임대인 지침이 부딪히는 저장장치 규정',
          '[발코니 태양광 등록 방법](/ko/balcony-solar/how-to-register-balcony-solar) — 단계별 등록',
        ],
      },
    },
  },
  pt: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-pt.webp',
    title: 'Energia solar de varanda para locadores e associações habitacionais em 2027',
    seoTitle: 'Solar de varanda: locadores e associações habitacionais',
    intro: 'Na Alemanha, inquilinos e condôminos têm desde 17 de outubro de 2024 um direito legal a dispositivos solares plug-in ("Steckersolargeräte"), o que desloca a pergunta do locador de "posso?" para "como e em que condições?". Esta página explica o que diz a lei, o que locadores e comunidades de proprietários podem exigir, como um grande locador (Vonovia) tratou os pedidos e o que a diretiva europeia de edifícios exige ou não exige. São informações gerais sobre a Alemanha, não aconselhamento jurídico.',
    metaDescription: 'Desde outubro de 2024, inquilinos e condôminos alemães podem reivindicar um dispositivo solar plug-in. O que locadores podem exigir e o que diz a EPBD.',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Locadores, administradores de imóveis, associações habitacionais e inquilinos na Alemanha avaliando solar plug-in',
    primaryTerm: 'energia solar de varanda para locadores e associações habitacionais',
    targetKeywords: [
      'energia solar de varanda proprietários',
      'balkonkraftwerk locador consentimento',
      'energia solar de varanda direitos do inquilino alemanha',
    ],
    leadAnswerBlock: '**Desde 17 de outubro de 2024, inquilinos alemães podem reivindicar o consentimento do locador para um dispositivo solar plug-in conforme o § 554 BGB, e condôminos têm um direito comparável conforme o § 20 (2) n.º 5 WEG; o consentimento só pode ser recusado se a medida for irrazoável para o locador mesmo ponderando os interesses do inquilino.** Locadores e comunidades de proprietários mantêm voz sobre como o dispositivo é fixado, mas as exigências não podem esvaziar o direito. Grandes locadores decidem caso a caso: a Vonovia concordou "sem reservas" com a instalação de um inquilino de Aachen em janeiro de 2026, após uma ação apoiada pela Deutsche Umwelthilfe. A diretiva europeia de edifícios (EPBD) não obriga locadores a instalar solar plug-in em imóveis alugados existentes, e não encontramos fonte primária para relatos de programas de locadores com mais de 50.000 unidades.',
    quickAnswerTop: {
      pt: {
        question: 'Um locador ou associação habitacional na Alemanha pode recusar o solar de varanda?',
        answer: 'Não sem um motivo válido. Desde 17 de outubro de 2024, o § 554 BGB (inquilinos) e o § 20 (2) n.º 5 WEG (condôminos) abrangem dispositivos solares plug-in. Um inquilino pode pedir o consentimento, a menos que a medida seja irrazoável para o locador mesmo ponderando os interesses do inquilino. Locadores e comunidades ainda podem estabelecer requisitos sobre a fixação do dispositivo, mas não tão rígidos que esvaziem o direito. Se o direito se estende a baterias é objeto de disputa.',
        bullets: [
          'Inquilinos: § 554 (1) BGB; condôminos: § 20 (2) n.º 5 WEG; ambos em vigor desde 17 de outubro de 2024',
          'A recusa exige que a medida seja irrazoável para o locador mesmo ponderando os interesses do inquilino; esta página não faz afirmações sobre nenhum caso individual',
          'Locadores e comunidades podem estabelecer regras de fixação; segundo a Haufe, esses requisitos não devem ser excessivos',
          'A Vonovia concordou sem reservas com a instalação de um inquilino de Aachen em janeiro de 2026 após uma ação apoiada pela Deutsche Umwelthilfe. Uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral',
          'A EPBD (Diretiva (UE) 2024/1275) faz da energia solar a norma para edifícios novos e certos edifícios não residenciais existentes; não obriga locadores a instalar solar plug-in',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways', },
      { label: 'O que a lei alemã dá a inquilinos e condôminos', anchor: '#legal-claim', },
      { label: 'Por que a diretiva europeia de edifícios não obriga ao solar plug-in', anchor: '#regulatory-driver', },
      { label: 'Como grandes locadores tratam os pedidos', anchor: '#landlord-practice', },
      { label: 'O que locadores e comunidades podem exigir, e o que inquilinos devem fazer', anchor: '#landlord-rules', },
      { label: 'O canal de compras em volume', anchor: '#b2b-channel', },
      { label: 'Fontes', anchor: '#sources', },
      { label: 'Perguntas frequentes', anchor: '#faq', },
      { label: 'Leituras relacionadas', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Desde 17 de outubro de 2024, o § 554 (1) BGB para inquilinos e o § 20 (2) n.º 5 WEG para condôminos dão direito a medidas destinadas à geração de eletricidade por dispositivos solares plug-in.',
          'O direito do inquilino só cai se a medida for irrazoável para o locador mesmo ponderando os interesses do inquilino (§ 554 BGB). Acordos em contrário que prejudiquem o inquilino são nulos.',
          'Locadores e comunidades mantêm voz sobre a fixação, mas os requisitos não devem ser excessivos. As fontes consultadas não esclarecem se uma deliberação da comunidade ainda é formalmente exigida; pergunte ao seu administrador.',
          'A Vonovia cedeu sem reservas à instalação de um inquilino de Aachen em janeiro de 2026. Uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral.',
          'A diretiva europeia de edifícios não obriga locadores a instalar solar plug-in, e não conseguimos verificar relatos de programas de locadores com mais de 50.000 unidades.',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: 'O que a lei alemã dá a inquilinos e condôminos',
        content: [
          '**Desde 17 de outubro de 2024, a lei alemã inclui dispositivos solares plug-in entre as medidas que inquilinos e condôminos podem exigir.** O § 554 (1) BGB permite ao inquilino pedir ao locador que autorize alterações estruturais destinadas à geração de eletricidade por dispositivos solares plug-in ("Steckersolargeräte"), ao lado de acessibilidade, recarga de veículos elétricos e proteção contra arrombamento. O direito cai se a alteração for irrazoável para o locador mesmo ponderando os interesses do inquilino. O § 554 (2) BGB torna nulos acordos em contrário que prejudiquem o inquilino. O inquilino pode concordar em prestar uma garantia especial, aplicando-se por analogia o § 551 (3) BGB.',
          '**O § 20 (2) n.º 5 WEG dá a cada condômino um direito do mesmo tipo.** A comunidade decide sobre a execução dentro de uma administração regular. A Haufe observa que o consentimento não pode mais ser recusado sem motivo válido, que condôminos e locadores mantêm voz sobre como o dispositivo é fixado e que os requisitos não devem ser excessivos. As fontes consultadas não esclarecem se uma deliberação da comunidade ainda é formalmente exigida, então pergunte ao seu administrador.',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: 'Por que a diretiva europeia de edifícios não obriga ao solar plug-in',
        content: [
          '**A diretiva europeia de edifícios não obriga locadores a instalar solar de varanda.** A Diretiva reformulada de desempenho energético dos edifícios (UE) 2024/1275 entrou em vigor em 28 de maio de 2024, com prazo nacional de transposição até 29 de maio de 2026. A Comissão Europeia descreve a instalação de energia solar como a futura norma para edifícios novos, que também devem estar preparados para energia solar, e como uma implantação gradual em certos edifícios não residenciais existentes quando faz sentido. Nenhuma dessas categorias é um dispositivo plug-in na varanda de um imóvel alugado existente.',
          'Não encontramos fonte primária para relatos de que a Vonovia e a LEG Immobilien executam programas com metas somadas acima de 50.000 dispositivos plug-in, nem para programas institucionais "emergentes" nos Países Baixos, na Áustria e na França. Trate esses números como não verificados.',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: 'Como grandes locadores tratam os pedidos',
        content: [
          '**Grandes locadores decidem caso a caso, e a prática é contestada.** Em janeiro de 2026, a Vonovia concordou "sem reservas" com o sistema de varanda de um inquilino de Aachen após uma ação apoiada pela Deutsche Umwelthilfe (DUH); segundo a DUH, a Vonovia havia exigido cálculos de carga de vento, comprovações estruturais e cumprimento de uma norma de envidraçamento vertical. A DUH quer que a Vonovia revise suas regras de instalação.',
          '**Uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral.** São posições relatadas por terceiros, não decisões judiciais sobre armazenamento; para as regras de armazenamento, veja [Baterias para energia solar de varanda em 2027](/pt/balcony-solar/balcony-solar-battery-storage-standard-2027).',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: 'O que locadores e comunidades podem exigir, e o que inquilinos devem fazer',
        content: [
          '**Regras sobre como o dispositivo é fixado são permitidas; regras que esvaziam o direito não são.** O próprio dispositivo é limitado pela lei e pela norma de produto: a definição da EEG permite até 800 W de potência do inversor e 2.000 W de módulos, enquanto a norma de produto DIN VDE V 0126-95 permite até 960 W de módulos com uma tomada doméstica normal e até 2.000 Wp com uma tomada de energia especial instalada por um eletricista. O operador registra o dispositivo no Marktstammdatenregister (cinco dados técnicos); desde o Solarpaket I (maio de 2024), a operadora de rede não precisa mais ser informada diretamente.',
          '**Para inquilinos, a sequência prática é perguntar por escrito, nomear o dispositivo e o método de fixação, oferecer-se para seguir regras razoáveis de fixação e guardar a resposta.** Se o consentimento for recusado sem motivo, centros de defesa do consumidor e associações de inquilinos podem ajudar. São informações gerais, não aconselhamento jurídico.',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: 'O canal de compras em volume',
        content: [
          '**Em princípio, associações habitacionais são para fabricantes e instaladores um canal de venda diferente do varejo ao consumidor:** acordos-quadro e pedidos em volume poderiam significar pedidos maiores e mais duradouros. Nas fontes consultadas, porém, o caminho principal na Alemanha ainda é o pedido do inquilino com base no § 554 BGB, e não conseguimos verificar programas instalados por locadores nem números de unidades.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB – Gesetze im Internet',
            description: 'Texto legal: direito do inquilino a alterações para dispositivos solares plug-in, teste de razoabilidade, nulidade de acordos em contrário',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG – Gesetze im Internet',
            description: 'Texto legal: direito do condômino a medidas para dispositivos solares plug-in (parágrafo 2 n.º 5)',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe – Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: 'Resumo da mudança legal de 17 de outubro de 2024 e do que locadores e comunidades podem exigir',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe – comunicado de 7 de janeiro de 2026',
            description: 'A Vonovia concorda sem reservas com o sistema de varanda de um inquilino de Aachen',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de – Vonovia e armazenamento em solar de varanda (17 de julho de 2026)',
            description: 'Reportagem sobre a diretriz técnica da Vonovia que proíbe armazenamento e a avaliação contestada',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: 'Comissão Europeia – Diretiva de desempenho energético dos edifícios',
            description: 'Prazo de transposição de 29 de maio de 2026; energia solar como norma para edifícios novos e certos edifícios não residenciais existentes',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale – Gesetze und Normen für Steckersolar',
            description: 'Registro no Marktstammdatenregister, limites de 800 W e 2.000 W',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE – FAQ zur DIN VDE V 0126-95',
            description: 'Limites da norma de produto: 800 VA, 960 W com tomada normal, 2.000 Wp com tomada de energia especial',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um locador pode recusar o solar de varanda na Alemanha?',
            a: 'Não sem um motivo válido. Desde 17 de outubro de 2024, o § 554 (1) BGB dá aos inquilinos um direito a medidas destinadas à geração de eletricidade por dispositivos solares plug-in. O direito só cai se a medida for irrazoável para o locador mesmo ponderando os interesses do inquilino. São informações gerais, não aconselhamento jurídico.',
          },
          {
            q: 'Os condôminos precisam de uma deliberação da comunidade?',
            a: 'O § 20 (2) n.º 5 WEG dá a cada condômino um direito a alterações estruturais adequadas para dispositivos solares plug-in, e a comunidade decide sobre a execução dentro de uma administração regular. As fontes consultadas não esclarecem se uma deliberação ainda é formalmente exigida; pergunte ao seu administrador.',
          },
          {
            q: 'Grandes locadores alemães têm programas de solar de varanda?',
            a: 'Não encontramos fonte primária para relatos de que a Vonovia e a LEG Immobilien executam programas com metas somadas acima de 50.000 dispositivos plug-in. Trate esses números como não verificados. O que está documentado é que a Vonovia concordou sem reservas com a instalação de um inquilino de Aachen em janeiro de 2026 após uma ação apoiada pela Deutsche Umwelthilfe.',
          },
          {
            q: 'A diretiva europeia de edifícios obriga locadores a instalar solar de varanda?',
            a: 'Não. A EPBD reformulada (Diretiva (UE) 2024/1275) faz das instalações solares a norma para edifícios novos, que também devem estar preparados para energia solar, e as implanta gradualmente em certos edifícios não residenciais existentes. Ela não exige dispositivos solares plug-in em imóveis alugados existentes.',
          },
          {
            q: 'Meu locador pode proibir uma bateria no meu sistema de varanda?',
            a: 'Isso é contestado. Uma reportagem do drweb.de de 17 de julho de 2026, citando o inside digital, cita a diretriz técnica da Vonovia como proibindo o armazenamento em baterias em instalações de varanda por motivos de proteção contra incêndio e informa que a Vonovia confirmou a autenticidade do documento; a Deutsche Umwelthilfe e a Verbraucherzentrale NRW consideram problemática uma proibição geral. Se o § 554 BGB abrange armazenamento é discutido. Pergunte por escrito e busque orientação; isto não é aconselhamento jurídico.',
          },
          {
            q: 'Quais limites se aplicam a um dispositivo solar plug-in na Alemanha?',
            a: 'A definição da EEG permite até 800 W de potência do inversor e 2.000 W de módulos. A norma de produto DIN VDE V 0126-95 permite até 960 W de módulos com uma tomada doméstica normal e até 2.000 Wp com uma tomada de energia especial instalada por um eletricista. A norma não cobre dispositivos com armazenamento.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O que é energia solar de varanda?](/pt/balcony-solar/what-is-balcony-solar) — inclui o FAQ sobre a permissão de locador e condomínio',
          '[Balkonkraftwerk: as regras da Alemanha](/pt/balcony-solar/balkonkraftwerk-germany-rules) — registro, limites e o quadro regulatório alemão',
          '[Baterias para energia solar de varanda em 2027: viram padrão?](/pt/balcony-solar/balcony-solar-battery-storage-standard-2027) — regras de armazenamento com que as diretrizes de locadores colidem',
          '[Como registrar a energia solar de varanda](/pt/balcony-solar/how-to-register-balcony-solar) — registro passo a passo',
        ],
      },
    },
  },
  zh: {
    theme: 'Balcony Solar Long-Tail',
    heroImage: '/images/balcony-solar-housing-associations-b2b-2027-overview-hero-zh.webp',
    title: '面向房东与住房协会的阳台光伏：2027年',
    seoTitle: '2027年房东与住房协会阳台光伏：租户权利与规则',
    intro: '在德国，租户和业主自2024年10月17日起依法有权要求安装插拔式光伏设备（“Steckersolargeräte”），这使房东的问题从“我可以吗？”变成了“怎么装、条件是什么？”。本页说明法律规定了什么、房东和业主委员会可以提出哪些要求、大型房东（Vonovia）如何处理申请，以及欧盟建筑指令要求和不要求什么。以下是关于德国的一般信息，不构成法律建议。',
    metaDescription: '2024年10月起，德国租户和业主有权要求安装插拔式光伏设备。房东可提出哪些要求，以及欧盟EPBD指令的规定。',
    publishDate: '2026-07-18',
    dateModified: '2026-10-19',
    readTime: '阅读约5分钟',
    educationalLevel: 'Beginner',
    audience: '正在评估插拔式光伏的德国房东、物业管理人员、住房协会和租户',
    primaryTerm: '面向房东和住房协会的阳台光伏',
    targetKeywords: ['阳台光伏 房东', '德国阳台光伏 租户权利', '阳台光伏 住房协会'],
    leadAnswerBlock: '**自2024年10月17日起，德国租户可依据BGB第554条要求房东同意安装插拔式光伏设备，业主则依据WEG第20条第2款第5项享有类似权利；只有在权衡租户利益后该措施仍对房东不可合理期待时，才可拒绝同意。** 房东和业主委员会对设备的安装方式仍有发言权，但提出的要求不得使该权利落空。大型房东逐案决定：2026年1月，在德国环境援助组织（Deutsche Umwelthilfe）支持的诉讼之后，Vonovia对亚琛一名租户的安装表示“无保留”同意。欧盟建筑指令（EPBD）并不要求房东在现有出租房中安装插拔式光伏，而关于房东计划达到5万套以上的报道，我们没有找到一手来源。',
    quickAnswerTop: {
      zh: {
        question: '德国的房东或住房协会可以拒绝阳台光伏吗？',
        answer: '没有正当理由不可以。自2024年10月17日起，BGB第554条（租户）和WEG第20条第2款第5项（业主）涵盖插拔式光伏设备。租户可以要求同意，除非在权衡租户利益后该措施仍对房东不可合理期待。房东和业主委员会仍可就设备安装方式提出要求，但不能严苛到使该权利落空。该权利是否延伸到电池存在争议。',
        bullets: [
          '租户：BGB第554条第1款；业主：WEG第20条第2款第5项；均自2024年10月17日起施行',
          '拒绝的前提是：在权衡租户利益后，该措施对房东仍不可合理期待；本页不对任何个案作出判断',
          '房东和业主委员会可以制定安装规则；据Haufe，这些要求不得过度',
          '2026年1月，在德国环境援助组织支持的诉讼之后，Vonovia无保留同意了亚琛一名租户的安装。drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题',
          'EPBD（指令(EU) 2024/1275）使太阳能成为新建建筑和部分现有非住宅建筑的常态；它并不要求房东安装插拔式光伏',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '要点速览', anchor: '#key-takeaways', },
      { label: '德国法律赋予租户和业主的权利', anchor: '#legal-claim', },
      { label: '为什么欧盟建筑指令并未强制要求插拔式光伏', anchor: '#regulatory-driver', },
      { label: '大型房东如何处理申请', anchor: '#landlord-practice', },
      { label: '房东和业主委员会可以提出哪些要求，租户该怎么做', anchor: '#landlord-rules', },
      { label: '批量采购渠道', anchor: '#b2b-channel', },
      { label: '资料来源', anchor: '#sources', },
      { label: '常见问题', anchor: '#faq', },
      { label: '相关阅读', anchor: '#related-reading', },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '自2024年10月17日起，BGB第554条第1款赋予租户、WEG第20条第2款第5项赋予业主要求采取有助于通过插拔式光伏设备发电的措施的权利。',
          '只有在权衡租户利益后该措施对房东仍不可合理期待时，租户的请求权才不成立（BGB第554条）。对租户不利且与该规定不一致的约定无效。',
          '房东和业主委员会对安装方式仍有发言权，但要求不得过度。业主委员会决议在形式上是否仍然必要，我们查阅的来源并未明确；请询问您的物业管理人。',
          '2026年1月，Vonovia无保留同意了亚琛一名租户的安装。drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题。',
          '欧盟建筑指令并不要求房东安装插拔式光伏，关于房东计划达到5万套以上的报道，我们无法核实。',
        ],
      },
      legalClaim: {
        id: 'legal-claim',
        title: '德国法律赋予租户和业主的权利',
        content: [
          '**自2024年10月17日起，德国法律将插拔式光伏设备列入租户和业主可以要求的措施。** BGB第554条第1款允许租户要求房东同意有助于通过插拔式光伏设备（“Steckersolargeräte”）发电的建筑改动，与无障碍改造、电动汽车充电和防盗措施并列。如果在权衡租户利益后该改动对房东仍不可合理期待，则请求权不成立。BGB第554条第2款规定，对租户不利且与该规定不一致的约定无效。租户可以同意提供特别担保，此时准用BGB第551条第3款。',
          '**WEG第20条第2款第5项赋予每位业主同类权利。** 具体实施由业主团体在正当管理范围内决定。Haufe指出，同意不能再无正当理由地拒绝，业主和房东对设备安装方式仍有发言权，且要求不得过度。业主团体决议在形式上是否仍然必要，我们查阅的来源并未明确，因此请询问您的物业管理人。',
        ],
      },
      regulatoryDriver: {
        id: 'regulatory-driver',
        title: '为什么欧盟建筑指令并未强制要求插拔式光伏',
        content: [
          '**欧盟建筑指令并不要求房东安装阳台光伏。** 修订后的《建筑能效指令》(EU) 2024/1275于2024年5月28日生效，成员国须在2026年5月29日前将其转化为国内法。欧盟委员会表示，安装太阳能将成为新建建筑（同时必须具备太阳能就绪条件）的常态，并在合适的情况下逐步推广到部分现有非住宅建筑。这两类都不是现有出租房阳台上的插拔式设备。',
          '对于“Vonovia和LEG Immobilien开展了合计目标超过5万套插拔式设备的计划”，以及荷兰、奥地利和法国“正在兴起”的机构计划等报道，我们没有找到一手来源。请将这些数字视为未经证实。',
        ],
      },
      landlordPractice: {
        id: 'landlord-practice',
        title: '大型房东如何处理申请',
        content: [
          '**大型房东逐案决定，其做法也存在争议。** 2026年1月，在德国环境援助组织（DUH）支持的诉讼之后，Vonovia对亚琛一名租户的阳台系统表示“无保留”同意；据DUH称，此前Vonovia曾要求提供风荷载计算、结构证明并符合垂直玻璃幕规范。DUH希望Vonovia修订其安装规则。',
          '**drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题。** 这些是第三方转述的立场，而非法院对储能作出的判决；储能规则参见[2027年阳台光伏电池](/zh/balcony-solar/balcony-solar-battery-storage-standard-2027)。',
        ],
      },
      landlordRules: {
        id: 'landlord-rules',
        title: '房东和业主委员会可以提出哪些要求，租户该怎么做',
        content: [
          '**关于设备安装方式的规则是允许的；使该权利落空的规则则不允许。** 设备本身受法律和产品标准限制：EEG的定义允许逆变器输出最高800 W、组件最高2,000 W；产品标准DIN VDE V 0126-95在使用普通家用插头时允许组件最高960 W，使用由电工安装的专用能源插头时最高2,000 Wp。运营者自行在Marktstammdatenregister中登记设备（五项技术信息）；自Solarpaket I（2024年5月）起，无需再直接通知电网运营商。',
          '**对租户而言，实际步骤是：书面提出申请，说明设备和安装方式，表示愿意遵守合理的安装规则，并保存答复。** 如果无理由被拒绝，消费者咨询中心和租户协会可以提供帮助。以上为一般信息，不构成法律建议。',
        ],
      },
      b2bChannel: {
        id: 'b2b-channel',
        title: '批量采购渠道',
        content: [
          '**原则上，住房协会对制造商和安装商来说是不同于消费者零售的销售渠道：** 框架协议和批量订单可能意味着更大、更长期的订单。但在我们查阅的来源中，德国的主要途径仍是租户依据BGB第554条提出的申请，我们无法核实由房东安装的计划或具体数量。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        links: [
          {
            url: 'https://www.gesetze-im-internet.de/bgb/__554.html',
            title: '§ 554 BGB — Gesetze im Internet',
            description: '法条原文：租户就插拔式光伏设备要求建筑改动的请求权、可合理期待性检验、无效的相反约定',
          },
          {
            url: 'https://www.gesetze-im-internet.de/woeigg/__20.html',
            title: '§ 20 WEG — Gesetze im Internet',
            description: '法条原文：业主就插拔式光伏设备要求采取措施的权利（第2款第5项）',
          },
          {
            url: 'https://www.haufe.de/immobilien/verwaltung/balkonkraftwerk-das-gilt-fuer-weg-vermieter_258_626800.html',
            title: 'Haufe — Balkonkraftwerke: Das gilt für WEG & Vermieter',
            description: '对2024年10月17日法律变更以及房东和业主团体可提出要求的概述',
          },
          {
            url: 'https://www.duh.de/presse/pressemitteilungen/pressemitteilung/signalwirkung-fuer-hunderttausende-mieterinnen-und-mieter-vonovia-erlaubt-balkonkraftwerk-nach-recht/',
            title: 'Deutsche Umwelthilfe — 2026年1月7日新闻稿',
            description: 'Vonovia无保留同意亚琛一名租户的阳台系统',
          },
          {
            url: 'https://www.drweb.de/vonovia-balkonkraftwerk-speicher-verbot/',
            title: 'drweb.de — Vonovia与阳台光伏储能（2026年7月17日）',
            description: '关于Vonovia禁止储能的技术指南及其有争议评估的报道',
          },
          {
            url: 'https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en',
            title: '欧盟委员会 — 建筑能效指令',
            description: '转化期限2026年5月29日；太阳能成为新建建筑和部分现有非住宅建筑的常态',
          },
          {
            url: 'https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740',
            title: 'Verbraucherzentrale — 插拔式光伏的法律与标准',
            description: '在Marktstammdatenregister登记，800 W与2,000 W上限',
          },
          {
            url: 'https://www.dke.de/de/arbeitsfelder/energy/normenhinweise/faq-zur-dinvdev012695',
            title: 'DKE — DIN VDE V 0126-95常见问题',
            description: '产品标准上限：800 VA，普通插头960 W，专用能源插头2,000 Wp',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '德国的房东可以拒绝阳台光伏吗？',
            a: '没有正当理由不可以。自2024年10月17日起，BGB第554条第1款赋予租户要求采取有助于通过插拔式光伏设备发电的措施的权利。只有在权衡租户利益后该措施对房东仍不可合理期待时，请求权才不成立。以上为一般信息，不构成法律建议。',
          },
          {
            q: '业主需要业主团体的决议吗？',
            a: 'WEG第20条第2款第5项赋予每位业主要求为插拔式光伏设备进行适当建筑改动的权利，具体实施由业主团体在正当管理范围内决定。决议在形式上是否仍然必要，我们查阅的来源并未明确；请询问您的物业管理人。',
          },
          {
            q: '德国大型房东是否开展阳台光伏计划？',
            a: '对于“Vonovia和LEG Immobilien开展了合计目标超过5万套插拔式设备的计划”的报道，我们没有找到一手来源。请将这些数字视为未经证实。有记录的是：2026年1月，在德国环境援助组织支持的诉讼之后，Vonovia无保留同意了亚琛一名租户的安装。',
          },
          {
            q: '欧盟建筑指令要求房东安装阳台光伏吗？',
            a: '不要求。修订后的EPBD（指令(EU) 2024/1275）使太阳能安装成为新建建筑（同时必须具备太阳能就绪条件）的常态，并逐步推广到部分现有非住宅建筑。它并不要求在现有出租房中安装插拔式光伏设备。',
          },
          {
            q: '房东可以禁止我的阳台系统使用电池吗？',
            a: '这存在争议。drweb.de在2026年7月17日的报道援引inside digital，称Vonovia的技术指南以防火为由禁止在阳台系统上安装电池储能，并称Vonovia确认该文件属实；Deutsche Umwelthilfe和Verbraucherzentrale NRW认为一刀切的禁令有问题。BGB第554条是否涵盖储能存在争论。请以书面方式询问并寻求专业意见；这不构成法律建议。',
          },
          {
            q: '德国的插拔式光伏设备适用哪些上限？',
            a: 'EEG的定义允许逆变器输出最高800 W、组件最高2,000 W。产品标准DIN VDE V 0126-95在使用普通家用插头时允许组件最高960 W，使用由电工安装的专用能源插头时最高2,000 Wp。该标准不涵盖带储能的设备。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[什么是阳台光伏？](/zh/balcony-solar/what-is-balcony-solar) — 包含关于房东和业主团体许可的常见问题',
          '[Balkonkraftwerk：德国阳台光伏规则](/zh/balcony-solar/balkonkraftwerk-germany-rules) — 登记、上限与德国监管背景',
          '[2027年阳台光伏电池：会成为标配吗？](/zh/balcony-solar/balcony-solar-battery-storage-standard-2027) — 房东指南所涉及的储能规则',
          '[如何登记阳台光伏](/zh/balcony-solar/how-to-register-balcony-solar) — 分步登记',
        ],
      },
    },
  },
}
