// Slug: plug-in-balcony-solar-uk-rules
// BSOL-52 — Tier 3, GB legislation + Mode A affiliate buying guide, semi_annual.
// EN-only on first publish (translations pending owner review).
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
    last_full_refresh: '2026-08-27',
    lastFactChecked: '2026-08-27',
    theme: 'Balcony Solar Legislation',
    title: 'Plug-In Balcony Solar UK: 2026 Rules and Legal Kits',
    seoTitle: 'Plug-In Solar UK 2026: Rules, 800VA Limit, Legal Kits',
    metaDescription: 'Plug-in solar became legal in Great Britain on 27 August 2026 under SI 2026/848 — but only four kits were ENA-certified on day one. Here is what you can buy.',
    intro: 'Legal and available are not the same thing. On the day the law changed, four complete kits were listed as Compliant on the ENA plug-in solar register — all four from a single British manufacturer. This guide separates what the rules permit from what is actually on sale.',
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 min read',
    educationalLevel: 'Beginner',
    audience: 'UK renters, flat-dwellers and homeowners deciding whether to buy a plug-in solar kit',
    primaryTerm: 'plug-in solar UK',
    targetKeywords: ['plug in solar uk', 'balcony solar uk legal', 'plug in solar rules 2026', 'si 2026/848 plug in solar', 'g98 notification plug in solar'],
    affiliateDisclosure: true,
    leadAnswerBlock: '**Plug-in balcony solar is legal in Great Britain from 27 August 2026** under SI 2026/848, for complete factory-built kits capped at 800 VA AC output, with no battery, a moulded BS 1363 plug, and a free G98 notification to your network operator within 28 days.',
    quickAnswerTop: {
      en: {
        question: 'Is plug-in balcony solar legal in the UK now?',
        answer: 'Yes, in Great Britain (England, Scotland and Wales) from 27 August 2026. SI 2026/848 amended the Plugs and Sockets Regulations 1994 and the ESQCR 2002 to create a legal route for complete plug-in solar kits that meet the DESNZ Interim Product Specification v2. The kit must be a factory-built product on the ENA type test register, capped at 800 VA AC output, with no battery. You do not need an electrician, but you do need to notify your Distribution Network Operator under G98 and get written consent from a landlord or freeholder before fixing anything to the building. Northern Ireland runs a separate regime under G98/NI.',
        bullets: [
          'In force 27 August 2026 in Great Britain — Northern Ireland is a separate regime',
          '800 VA AC maximum output, 3.5 A maximum current, up to 2,000 W of DC panels',
          'No battery — battery-equipped systems fall outside this route entirely',
          'Complete factory-built kits only, listed as Compliant on the ENA type test register',
          'No electrician needed; free G98 notification to your DNO within 28 days of connecting',
          'Government estimate: up to £110 a year saved, around 20% of an average home\'s electricity use',
        ],
        updatedDate: '2026-08-27',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What Changed on 27 August 2026', anchor: '#what-changed' },
      { label: 'The Compliance Spec', anchor: '#compliance-spec' },
      { label: 'What You Can Actually Buy Today', anchor: '#what-to-buy' },
      { label: 'Best First Buy: UKSOL Pro Compact', anchor: '#pick-compact' },
      { label: 'Maximum Legal Output: UKSOL Pro Duo', anchor: '#pick-duo' },
      { label: 'If Price Decides It: Wait', anchor: '#pick-wait' },
      { label: 'Verify a Kit on the ENA Register', anchor: '#verify-register' },
      { label: 'Where You Can and Cannot Mount It', anchor: '#mounting' },
      { label: 'G98: Install First, Notify After', anchor: '#g98' },
      { label: 'What It Actually Saves', anchor: '#savings' },
      { label: 'Skip Plug-In Solar If', anchor: '#skip-this' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'SI 2026/848 came into force on 27 August 2026 and is what makes plugging a small solar generator into a 13 A socket lawful in Great Britain — BS 7671 Amendment 4 (published 15 April 2026) updated the wiring regulations side, but did not on its own authorise the socket connection.',
          'The cap is 800 VA AC output and 3.5 A maximum current, with up to 2,000 W of DC panels behind it — buy for the inverter cap, not the panel headline.',
          'Batteries are excluded. EcoFlow STREAM, Anker SOLIX Solarbank and Zendure SolarFlow are battery systems and do not qualify for the plug-in route, whatever the marketing says.',
          'On day one, the only complete kits listed as Compliant on the ENA register were four UKSOL models (460 W to 920 W, registered 18–19 August 2026). Anker\'s Solarbank 4 Pro filing was still showing Non-compliant.',
          'Real day-one prices are £699–£965, above the £400–£600 band the government\'s own savings analysis assumed. If price is your deciding factor, waiting for high-street stock is the rational move.',
          'You cannot mount panels on wooden balconies, fences, walls or gates — a fire-risk restriction that rules out a large share of UK balconies before you get to landlord consent.',
          'No electrician is needed for a compliant kit, but a free G98 notification to your Distribution Network Operator within 28 days of connecting is mandatory, and current network rules limit you to one device per household.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        tableFormat: true,
        columns: ['Item', 'Figure'],
        rows: [
          { Item: 'Legal from', Figure: '27 August 2026 (Great Britain)' },
          { Item: 'Legislation', Figure: 'SI 2026/848, made 16 July 2026' },
          { Item: 'Max AC output', Figure: '800 VA, 3.5 A maximum current' },
          { Item: 'Max DC panels', Figure: '2,000 W, max two panels in series' },
          { Item: 'Max DC voltage', Figure: '120 V open-circuit' },
          { Item: 'Battery allowed', Figure: 'No — excluded from this route' },
          { Item: 'Plug', Figure: 'Moulded BS 1363, fuse 5 A or lower' },
          { Item: 'Electrician needed', Figure: 'No, for a compliant kit' },
          { Item: 'DNO notification', Figure: 'G98, free, within 28 days' },
          { Item: 'Kits per household', Figure: 'One, under current G98 rules' },
          { Item: 'Day-one street price', Figure: '£699–£965 for a complete kit' },
          { Item: 'Government saving estimate', Figure: 'Up to £110 a year' },
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'What Changed on 27 August 2026',
        content: [
          '**SI 2026/848 is the instrument that made plug-in solar lawful in Great Britain — not BS 7671 Amendment 4.** The statutory instrument was made on 16 July 2026 and came into force on 27 August 2026, amending the Plugs and Sockets etc. (Safety) Regulations 1994 and the Electricity Safety, Quality and Continuity Regulations 2002 to create a sale-and-use route for qualifying plug-in microgenerators.',
          'Amendment 4 to BS 7671, published 15 April 2026, updated Section 712 to recognise small-scale PV connected via a standard plug for kits meeting the DESNZ Interim Product Specification. That was the wiring-regulations half of the change. Until the SI landed in August, the compliant way to fit panels was still a hardwired connection by a CPS-registered electrician.',
          'The practical effect: if you read anywhere that the UK legalised balcony solar in April 2026, that is the standards change, not the moment you could legally buy a kit and plug it in. **Use 27 August 2026 as the date that matters for buying decisions.**',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'SI 2026/848, in force 27 August 2026, is what makes it lawful to plug a compliant solar kit into a UK 13 A socket; BS 7671 Amendment 4 in April 2026 was the supporting wiring-regulations change.' },
          { type: 'plain-terms', text: 'April changed the rulebook electricians work to. August changed the law about what you are allowed to buy and plug in. Only the August date lets you actually do it.' },
        ],
        callouts: [
          { type: 'warning', text: 'Great Britain only. Northern Ireland is regulated by the Utility Regulator rather than Ofgem and connects under Engineering Recommendation G98/NI, a separate document with its own notification window (30 days rather than 28).' },
        ],
      },
      complianceSpec: {
        id: 'compliance-spec',
        title: 'The Compliance Spec: 800 VA, No Battery, One Plug',
        content: [
          '**A kit qualifies only if it is a complete factory-built product meeting the DESNZ Plug-in Solar Device Interim Product Specification v2 — mixing your own panels, inverter and cable does not qualify, however good the components are.** The specification covers the micro-inverter certification, anti-islanding behaviour, the plug and fuse, and the DC side behind the inverter.',
        ],
        tableFormat: true,
        columns: ['Requirement', 'Limit or rule'],
        rows: [
          { Requirement: 'AC output', 'Limit or rule': 'Max 800 VA apparent power' },
          { Requirement: 'AC current', 'Limit or rule': 'Max 3.5 A' },
          { Requirement: 'DC panel capacity', 'Limit or rule': 'Up to 2,000 W (oversizing allowed)' },
          { Requirement: 'DC string layout', 'Limit or rule': 'Max two panels in series' },
          { Requirement: 'DC voltage', 'Limit or rule': 'Max 120 V open-circuit' },
          { Requirement: 'Micro-inverter', 'Limit or rule': 'Certified to EN 50549, anti-islanding' },
          { Requirement: 'Plug', 'Limit or rule': 'Non-rewireable moulded BS 1363' },
          { Requirement: 'Fuse', 'Limit or rule': 'Rated 5 A or lower' },
          { Requirement: 'Pins', 'Limit or rule': 'Partially insulated' },
          { Requirement: 'Battery', 'Limit or rule': 'Not permitted in this route' },
          { Requirement: 'Register listing', 'Limit or rule': 'Compliant on ENA type test register' },
          { Requirement: 'Units per household', 'Limit or rule': 'One, per current G98 position' },
        ],
        callouts: [
          { type: 'warning', text: 'The battery exclusion is the single most misread rule. Plug-in batteries, kits with integrated storage, and portable power stations that export into house wiring are all outside SI 2026/848 — buying one does not give you a legal plug-in system.' },
          { type: 'tip', text: 'Panel oversizing up to 2,000 W DC behind an 800 VA inverter is deliberate and legal. It raises output on dull British days, when panels rarely reach their rated figure, rather than lifting the peak.' },
        ],
      },
      whatToBuy: {
        id: 'what-to-buy',
        title: 'What You Can Actually Buy Today',
        content: [
          '**Best choice on day one: the UKSOL Pro Compact 460 W Ground Mount Kit — the cheapest complete kit that was actually listed as Compliant on the ENA register when the law changed.** UKSOL registered four kits on 18–19 August 2026 and was the only manufacturer with compliant complete kits on the register at launch; Anker\'s Solarbank 4 Pro filing (3 August) and HDM Solar\'s PIS0100 (19 August) were both still showing Non-compliant.',
          '**Choose based on:** if you have a balcony floor, terrace or patio and no permission to drill, buy the ground-mount 460 W kit. If you have consent for a fixing on a non-wooden surface and want the most output the rules allow, buy the 890 W Duo. If price is your deciding factor and you can wait a few weeks, buy nothing yet and watch the high street.',
        ],
        callouts: [
          { type: 'warning', text: 'EcoFlow STREAM, Anker SOLIX Solarbank and Zendure SolarFlow are widely sold in the UK and widely described as balcony solar. They contain batteries, so none of them is a legal plug-in system under SI 2026/848. They remain legal to own and use on the hardwired route with an electrician and a G98 notification.' },
        ],
      },
      pickCompact: {
        id: 'pick-compact',
        title: 'Best First Buy: UKSOL Pro Compact 460 W Ground Mount Kit',
        sponsoredSlot: true,
        content: [
          '**Buy this if you cannot drill into the building.** It is a single 460 W panel on a foldable ground frame with a ballast tray and an 800 W micro-inverter, so it needs a floor to stand on rather than a fixing point — which sidesteps both the wooden-surface ban and most of the landlord-consent problem in one move.',
          'Three things make it the day-one pick rather than a guess: it was listed as Compliant on the ENA register on 18 August 2026, so its legal status is verifiable rather than a marketing claim; it is around £699 RRP at trade retailers, or £849 direct from UKSOL including VAT and two-man delivery; and it was in stock on 27 August rather than on pre-order.',
        ],
        items: [
          'The catch on price: at roughly £1.85 per watt it is poor value against the £400–£600 band the government\'s own savings analysis assumed.',
          'The catch on size: one 460 W panel uses less than a quarter of the 2,000 W DC headroom the rules allow.',
          'The catch on siting: it needs floor space in sun, so it is useless on a narrow railing-only balcony.',
        ],
        affiliateLinks: [
          { url: 'https://www.cityplumbing.co.uk/p/uksol-pro-compact-plug-in-460w-solar-kit-ground-mount/p/315632', productName: 'UKSOL Pro Compact 460 W Ground Mount Kit', productCategory: 'Complete plug-in solar kit', priceRange: '£699–£849', label: 'Check current price at City Plumbing' },
          { url: 'https://www.electricalsonline.co.uk/products/uksol-uks-c1-460-mz1-ukg-plug-in-solar-kit-460w-pro-compact-ground-mount', productName: 'UKSOL UKS-C1-460-MZ1-UKG Pro Compact 460 W Kit', productCategory: 'Complete plug-in solar kit', priceRange: '£699–£849', label: 'Check stock at Electricals Online' },
        ],
      },
      pickDuo: {
        id: 'pick-duo',
        title: 'Maximum Legal Output: UKSOL Pro Duo 890 W Hybrid Mount Kit',
        content: [
          '**Buy this instead only if you have written consent for a fixing and a non-wooden surface to fix to.** Two panels behind the same 800 VA inverter means the inverter runs closer to its cap for more of the day — that is where the extra yield comes from, not from a higher peak.',
          'It registered as Compliant on 18 August 2026 alongside the Pro Compact, and the hybrid mount covers wall, railing and ground options in one kit. It is priced at £836.92 at iHelios and £965.65 at City Plumbing, both including VAT, so the roughly £130 spread between stockists for the identical kit is worth ten minutes of checking.',
        ],
        items: [
          'Roughly double the panel area for well under double the price of the 460 W kit.',
          'Ruled out entirely if your balcony is timber-framed or timber-clad.',
          'Needs landlord or freeholder consent for any fixing to the building — get it in writing before ordering.',
        ],
        affiliateLinks: [
          { url: 'https://www.uksol.uk/plug-in-solar-1', productName: 'UKSOL Pro Duo 890 W Plug-In Solar Kit', productCategory: 'Complete plug-in solar kit', priceRange: '£837–£966', label: 'See the UKSOL plug-in range' },
        ],
      },
      pickWait: {
        id: 'pick-wait',
        title: 'If Price Decides It: Wait for High-Street Stock',
        content: [
          '**Not buying yet is a legitimate answer this month.** Argos began selling plug-in kits on 28 August 2026, with Amazon, Currys, B&Q, Screwfix, Wickes and British Gas all committed to stocking them, and street prices in the £400–£500 range expected as those ranges land. The £400–£600 band the government modelled is a retail-competition price, not a day-one price, and the day-one register holds four kits from one manufacturer.',
          '**Waiting costs you something real:** several weeks of generation, and they are late-summer weeks, which are the good ones. **Switch to buying now if** you have a south-facing space ready and want this summer\'s output; **wait if** the difference between £699 and £450 is what decides whether you buy at all.',
        ],
        callouts: [
          { type: 'tip', text: 'Early high-street stock may go on shelves before its register status is confirmed. Ask for the ENA register reference at the till or in the listing Q&A — the same check applies whether you buy from a trade supplier or a supermarket.' },
        ],
        affiliateLinks: [
          { url: 'https://www.argos.co.uk/search/plug-in-solar/', productName: 'Plug-in solar kits at Argos', productCategory: 'Retailer listing', priceRange: '£400–£700 expected', label: 'See what Argos is stocking' },
          { url: 'https://www.amazon.co.uk/s?k=plug-in+solar+kit', productName: 'Plug-in solar kits on Amazon UK', productCategory: 'Retailer listing', priceRange: '£400–£700 expected', label: 'Browse Amazon UK listings' },
        ],
        note: 'Buying a bare micro-inverter such as the Hoymiles HMS-800 or APsystems EZ1-M and adding your own panels is cheaper — around £110 for the inverter — but it is not a complete registered product, so it needs a CPS-registered electrician and a hardwired connection.',
      },
      verifyRegister: {
        id: 'verify-register',
        title: 'Verify a Kit on the ENA Register Before You Pay',
        content: [
          '**Ask the seller for the kit\'s ENA type test register listing and check the status reads Compliant, not merely filed.** Two of the first filings — Anker\'s Solarbank 4 Pro (reference ANKER/20920/V1) and HDM Solar\'s PIS0100 — were on the register with a Non-compliant status, which means testing or documentation was incomplete, not that the product had passed.',
        ],
        numberedItems: [
          { title: 'Get the exact model reference', whyItMatters: 'Register entries are per model and mount type. A brand being on the register does not mean the specific kit in your basket is.' },
          { title: 'Check the status field, not the presence of an entry', whyItMatters: 'Filed and Compliant are different states. Only Compliant satisfies the SI 2026/848 route.' },
          { title: 'Confirm the DESNZ Interim Product Specification v2 is named', whyItMatters: 'Version 2 is the finalised specification the August rules refer to; earlier drafts are not the operative document.' },
          { title: 'Confirm there is no battery in the kit', whyItMatters: 'Any integrated storage takes the whole system outside the plug-in route, regardless of the inverter rating.' },
          { title: 'Confirm the plug is a moulded BS 1363 with a 5 A or lower fuse', whyItMatters: 'A rewireable plug or a 13 A fuse is a visible, checkable sign the kit was not built for this specification.' },
        ],
        callouts: [
          { type: 'tip', text: 'If a seller cannot produce a register reference, treat that as a no. It costs them one line of an email and it is the only claim on the page you can independently verify.' },
        ],
      },
      mounting: {
        id: 'mounting',
        title: 'Where You Can and Cannot Mount It',
        content: [
          '**Panels cannot go on wooden balconies, fences, walls or gates — this is a fire-risk restriction, and it disqualifies more UK balconies than the electrical rules do.** Check the mounting surface before you check anything else; on a timber-framed or timber-clad balcony, a ground-standing ballasted kit on the floor is the only route left.',
          'Beyond the material, permissions still apply and are separate from the electrical rules. **Get written consent before you drill:** landlord or freeholder consent for fixings, plus planning permission or listed building consent where the property is listed or in a conservation area. The government\'s own guidance puts checking permissions ahead of buying.',
          '**Avoid a railing-mounted kit if** your lease has an external-appearance clause, which is common in leasehold flats. A floor-standing frame on a balcony or terrace usually falls outside those clauses because nothing is attached to the structure.',
        ],
        snippetBlocks: [
          { type: 'plain-terms', text: 'If your balcony is made of wood, the panels cannot be attached to it. Standing them on the floor is the workaround, and it also avoids needing your landlord\'s permission to drill.' },
        ],
        callouts: [
          { type: 'note', text: 'South-facing is best, but east or west orientation still works and often suits people who are home mornings or evenings — the point is matching generation to when you actually use electricity. See the sizing guide for the numbers.' },
        ],
      },
      g98: {
        id: 'g98',
        title: 'G98: Install First, Notify Within 28 Days',
        content: [
          '**G98 is a notification, not an application — you connect first and tell your Distribution Network Operator afterwards, within 28 days of connecting.** It is free, it covers every generator up to 3.68 kW per phase, and most DNOs accept an online form. Keep the confirmation.',
          '**Do not skip this because no electrician was involved.** A plug-in kit is still generation connected to the public network, and the notification is what keeps your DNO\'s records of local capacity accurate. In Northern Ireland the equivalent is G98/NI, notified to NIE Networks within 30 days.',
          'Current G98 network rules restrict a property to one plug-in device. **Choose the 890 W kit rather than two 460 W kits** if you want more output — a second unit is not a supported route under the present position, even though the panel headroom would allow it.',
        ],
        callouts: [
          { type: 'warning', text: 'The 28-day clock starts at connection or commissioning depending on your DNO\'s wording. Submitting on the day you plug in removes the ambiguity entirely.' },
        ],
      },
      savings: {
        id: 'savings',
        title: 'What It Actually Saves',
        content: [
          '**The government figure is up to £110 a year, from a kit covering around 20% of an average home\'s electricity use; industry estimates start at £70.** That range assumed a kit costing £400–£600, so at day-one prices of £699–£965 the payback is materially longer than the headline suggests.',
        ],
        tableFormat: true,
        columns: ['Scenario', 'Kit price', 'Annual saving', 'Simple payback'],
        rows: [
          { Scenario: 'Government modelled band', 'Kit price': '£400–£600', 'Annual saving': 'Up to £110', 'Simple payback': 'Roughly 4–6 years' },
          { Scenario: 'Day-one 460 W kit', 'Kit price': '£699–£849', 'Annual saving': '£70–£110', 'Simple payback': 'Roughly 6–12 years' },
          { Scenario: 'Day-one 890 W kit', 'Kit price': '£837–£966', 'Annual saving': 'Up to £110', 'Simple payback': 'Roughly 8–14 years' },
        ],
        note: 'Payback figures are simple price-divided-by-saving arithmetic on the sourced price and saving ranges above, with no allowance for electricity price movement or degradation. They are a sanity check, not a forecast.',
        callouts: [
          { type: 'tip', text: 'Self-consumption is the whole game. Plug-in solar has no export payment, so every unit you do not use at the moment it is generated is worth nothing to you — run the dishwasher, washing machine or immersion heater at midday and the saving moves toward the top of the range.' },
          { type: 'warning', text: 'Anyone out of the house every weekday should assume the bottom of the £70–£110 range, not the top. Timers on daytime loads are the cheapest fix, and cost nothing.' },
        ],
      },
      skipThis: {
        id: 'skip-this',
        title: 'Skip Plug-In Solar If',
        content: [
          '**Skip it entirely if your only mounting option is wood, if the household is empty every weekday, or if you have a usable roof.** A rooftop system is roughly five times the size and is the better answer whenever it is available to you.',
          'It is also worth noting that five UK safety bodies publicly urged caution before a mass rollout. That is not a reason to avoid a register-verified kit; it is a reason to be sceptical of anything that is not one.',
        ],
        items: [
          'Your balcony, fence or wall is timber — the fire-risk restriction has no workaround other than a floor-standing kit.',
          'Nobody is home during daylight hours and you cannot shift loads to midday — the saving lands at the bottom of the range.',
          'You want storage — batteries are outside this route, and a hardwired system with an electrician is the honest alternative.',
          'You own a suitable roof — a full rooftop array beats an 800 VA kit on every metric except upfront cost.',
          'You are in Northern Ireland — the GB regime does not apply and G98/NI has its own requirements.',
          'Price is your deciding factor — day-one kits sit well above the £400–£600 band the savings case was built on.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        itemHeadings: true,
        items: [
          'Buying a battery kit and assuming it is covered. EcoFlow STREAM, Anker SOLIX Solarbank and Zendure SolarFlow are excluded from SI 2026/848 because they contain storage. Check for a battery before you check anything else.',
          'Treating an ENA register entry as approval. Anker and HDM Solar both had entries showing Non-compliant. Read the status field, not the presence of the brand.',
          'Assembling your own kit from a Hoymiles or APsystems inverter and separate panels. Components are not a registered product; that route needs a CPS-registered electrician and a hardwired connection.',
          'Skipping the G98 notification because no electrician was involved. It is free, it is mandatory, and the 28-day window starts when you connect.',
          'Buying on the April 2026 headline. BS 7671 Amendment 4 was a standards change; 27 August 2026 is when buying and plugging in became lawful.',
          'Fixing to the building before getting written consent. Landlord or freeholder permission, and planning or listed building consent where applicable, come before purchase — not after delivery.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is plug-in balcony solar legal in the UK from 27 August 2026?', a: 'Yes, in Great Britain. SI 2026/848 came into force on 27 August 2026 and created a legal route to sell and use complete plug-in solar kits meeting the DESNZ Interim Product Specification v2. Northern Ireland is a separate regime with its own connection rules.' },
          { q: 'Do I need an electrician to install a plug-in solar kit?', a: 'No, provided the kit is a complete factory-built product listed as Compliant on the ENA type test register. Anything else — loose components, a self-assembled system, or a battery kit — still needs a CPS-registered electrician and a hardwired connection.' },
          { q: 'How much can I actually save?', a: 'The government estimate is up to £110 a year, covering around 20% of an average home\'s electricity use, with industry figures starting at £70. That range assumed a kit costing £400–£600, so at day-one prices of £699–£965 the payback period is longer than the headline implies.' },
          { q: 'Can I put a plug-in solar panel on a wooden balcony?', a: 'No. Panels cannot be mounted on wooden balconies, fences, walls or gates because of the fire-risk restriction. A ground-standing ballasted kit placed on the balcony floor is the usual workaround, since nothing is fixed to the timber.' },
          { q: 'What is the G98 notification and when do I submit it?', a: 'G98 is a free notification to your Distribution Network Operator telling them you have connected a small generator. You install first and notify within 28 days of connecting; it is not an approval you wait for. Northern Ireland uses G98/NI with a 30-day window.' },
          { q: 'Can I add a battery to a plug-in solar kit?', a: 'Not under this route. SI 2026/848 excludes batteries, kits with integrated storage, and portable power stations that export into house wiring. A battery system is still legal to install, but on the hardwired route with an electrician rather than as a plug-in device.' },
          { q: 'How many plug-in solar kits can I have?', a: 'One per household under the current G98 network position. If you want more output, choose a higher-wattage single kit such as an 890 W or 920 W model rather than installing two smaller units.' },
          { q: 'Which kits were actually certified when the law changed?', a: 'Four UKSOL kits — Pro Compact 460 W ground mount, Pro Compact 515 W hybrid, Pro Duo 890 W hybrid and Pro Advanced 920 W hybrid — registered as Compliant on 18–19 August 2026. Anker\'s Solarbank 4 Pro and HDM Solar\'s PIS0100 filings were both still showing Non-compliant.' },
          { q: 'Did the UK not legalise balcony solar in April 2026?', a: 'April 2026 was BS 7671 Amendment 4, which updated Section 712 of the wiring regulations. It did not by itself authorise connecting a generator to a standard 13 A socket. SI 2026/848 in August is the change that did.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[How to register balcony solar with your grid operator](/balcony-solar/how-to-register-balcony-solar) — the G98 form step by step, and the equivalents in other countries',
          '[Balcony solar mounting options for railings, walls and floors](/balcony-solar/balcony-solar-mounting-guide) — what a ballasted ground frame does that a railing bracket cannot',
          '[Balcony solar sizing, yield and payback maths](/balcony-solar/balcony-solar-sizing-yield-payback) — how orientation and self-consumption move the £70–£110 range',
          '[Do you need a battery with balcony solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — why the UK rules exclude storage, and when a hardwired battery is worth it',
          '[Balkonkraftwerk rules in Germany](/balcony-solar/balkonkraftwerk-germany-rules) — the 800 W market the UK specification was modelled against',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Plug-In Balcony Solar UK: 2026 Rules and Legal Kits',
      description: 'Plug-in solar became legal in Great Britain on 27 August 2026 under SI 2026/848: the 800 VA cap, the battery exclusion, the G98 notification, and which kits were actually ENA-certified on day one.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/plug-in-balcony-solar-uk-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'UK renters, flat-dwellers and homeowners deciding whether to buy a plug-in solar kit' },
      about: ['Plug-in solar', 'SI 2026/848', 'BS 7671 Amendment 4', 'Engineering Recommendation G98', 'ENA type test register'],
    },
  },
}
