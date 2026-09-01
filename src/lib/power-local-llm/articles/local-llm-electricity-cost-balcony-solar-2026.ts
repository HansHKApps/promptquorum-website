// Slug: local-llm-electricity-cost-balcony-solar-2026
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-01',
    dateModified: '2026-09-01',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: [
      'RTX 4090',
      'RTX 3090',
      'RTX 4070',
      'Mac Mini M4',
      'MacBook Pro M4 Max',
      'EcoFlow STREAM Ultra',
      'Jackery HomePower 2000 Ultra',
      'Zendure SolarFlow Hub 2000',
      'BLUETTI AC180',
      'BLUETTI AC180P',
    ],
    theme: 'Overview & Reference',
    affiliateDisclosure: true,
    title: 'What Running a Local LLM Costs in Electricity — and Can Balcony Solar Offset It? (2026)',
    seoTitle: 'Local LLM Electricity Cost vs. Balcony Solar (2026)',
    intro:
      'A GPU running a local LLM for a few hours a day costs real, calculable money — about $6.60/month in the US for a moderate 4-hour daily habit, or roughly $60/month if you run a power-hungry card 24/7. An 800W balcony solar system can comfortably cover the moderate case on a sunny summer day, but it cannot offset a heavy always-on rig, especially in winter. This guide walks through the exact math for common local-LLM hardware, compares US and German electricity costs, and sizes the balcony battery you would actually need — with the honest caveats about when solar genuinely helps and when it does not.',
    metaDescription:
      'Local LLM electricity cost calculated: RTX 4090/3090/4070 and Mac Mini M4 power draw, US ($0.184/kWh) and Germany (~€0.32/kWh) monthly cost, and whether an 800W balcony solar system can offset it.',
    twitterDescription:
      'What a local LLM actually costs in electricity — RTX 4090/3090/4070 and Mac Mini M4 power draw, US vs. Germany monthly cost, and whether 800W balcony solar can realistically offset it.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Local-LLM users who want to know the real electricity cost of their setup and whether balcony solar can offset it',
    primaryTerm: 'local LLM electricity cost',
    targetKeywords: [
      'local llm electricity cost',
      'running llm 24/7 power cost',
      'balcony solar for gpu',
      'offset ai electricity with solar',
      'local ai power consumption calculator',
    ],
    leadAnswerBlock:
      '**A GPU idling and running a local LLM a few hours a day costs about $6.60/month in the US (1.2 kWh/day at 18.4¢/kWh) — a heavy 24/7 rig on an RTX 4090-class card costs roughly $60/month instead.** An 800W balcony solar system produces about 3–4.5 kWh on a sunny summer day but only about 0.5–1.5 kWh/day in winter, so it comfortably covers the moderate-use case in summer but cannot meaningfully offset a heavy always-on rig, in any season. Size your battery to your GPU\'s actual draw, not to the solar system\'s nameplate wattage.',
    quickAnswerTop: {
      en: {
        question: 'How much does it cost in electricity to run a local LLM?',
        answer:
          'A GPU running at 300W for 4 hours a day costs about $6.60/month in the US (1.2 kWh/day at 18.4¢/kWh) or roughly €11–15/month in Germany (1.2 kWh/day at 25–40 cents/kWh, depending on tariff). A GPU running 24/7 at 450W costs closer to $60/month in the US. An 800W balcony solar system can offset the moderate case in summer but not the heavy 24/7 case in any season.',
        bullets: [
          'RTX 4090: ~20–33W idle, up to 450W (TBP) under load',
          'RTX 3090: ~18–26W idle, ~350W under load',
          'RTX 4070: 10W idle, 186W average gaming draw, 200W rated TDP',
          'Mac Mini M4: under 5W idle, up to ~65W during LLM inference',
          '800W balcony solar: ~3–4.5 kWh/day in summer, ~0.5–1.5 kWh/day in winter (Germany-sourced figures)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: 'tldr' },
      { label: 'How Much Power Does Local LLM Hardware Use?', anchor: 'gpu-power' },
      { label: 'What Does That Cost Per Month?', anchor: 'monthly-cost' },
      { label: 'Can Balcony Solar Offset a Local LLM Rig?', anchor: 'solar-offset' },
      { label: 'Which Battery Size Do You Actually Need?', anchor: 'battery-sizing' },
      { label: 'Who Should Actually Do This?', anchor: 'who-should-do-this' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local LLM rig costs about $6.60/month in electricity for moderate 4-hour daily use, or roughly $60/month run 24/7 — an 800W balcony solar system can offset the moderate case in summer but not the heavy 24/7 case in any season.' },
      { type: 'plain-terms', content: 'kWh (kilowatt-hour) is the unit your electricity bill is priced in — a 300-watt GPU running for 1 hour uses 0.3 kWh. Multiply watts by hours, divide by 1,000, then multiply by your electricity price per kWh to get the cost. Balcony solar output is measured the same way, so the two numbers can be compared directly.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'A GPU running 4 hours/day at 300W costs about $6.60/month in the US (18.4¢/kWh) or roughly €11–15/month in Germany, depending on tariff',
          'A GPU running 24/7 at 450W (RTX 4090-class) costs closer to $60/month in the US — nearly 10x the moderate-use case',
          'Apple Silicon (Mac Mini M4: under 5W idle, ~65W inference peak) costs a small fraction of a discrete-GPU rig to run',
          'An 800W balcony solar system produces ~3–4.5 kWh on a sunny summer day but only ~0.5–1.5 kWh/day in winter — a roughly 3–7x seasonal swing',
          'Size your battery to your GPU\'s actual daily draw, not to the solar system\'s 800W nameplate rating — the two numbers are not comparable',
          'France\'s plug-in solar inverter limit is 800W, the same as Germany\'s — there is no separate, stricter French cap for this class of system',
        ],
      },
      gpuPower: {
        id: 'gpu-power',
        title: 'How Much Power Does Local LLM Hardware Actually Use?',
        content:
          '**The gap between idle and load power draw is what makes the electricity math nontrivial — a card can sit near-silent for 20 hours a day and still be the single biggest line item on your bill if it runs hot for the other 4.** Figures below are manufacturer specs and independent measurements, not a PromptQuorum-run benchmark.',
        columns: ['Hardware', 'Idle', 'Load / Inference'],
        rows: [
          { 'Hardware': 'RTX 4090', 'Idle': '~20–33W', 'Load / Inference': 'Up to 450W (TBP)' },
          { 'Hardware': 'RTX 3090', 'Idle': '~18–26W', 'Load / Inference': '~350W' },
          { 'Hardware': 'RTX 4070', 'Idle': '10W', 'Load / Inference': '186W avg. (200W rated TDP)' },
          { 'Hardware': 'Mac Mini M4', 'Idle': 'Under 5W', 'Load / Inference': 'Up to ~65W' },
          { 'Hardware': 'MacBook Pro M4 Max', 'Idle': 'Low single digits', 'Load / Inference': '~40–80W inference; ~110W system peak' },
        ],
        items: [
          'RTX 4090: NVIDIA rates Total Board Power at 450W; independent measurements show idle draw between 18W (aggressive power-limited configs) and 33W (Founders Edition), and load can reach 400–600W depending on workload.',
          'RTX 3090: idle sits around 18–26W depending on display configuration; full load under gaming or inference workloads runs about 350W, with some measurements up to 365W.',
          'RTX 4070: NVIDIA\'s own published figures — 10W idle, 16W video playback, 186W average gaming draw — against a 200W rated TDP. Real-world peaks have measured up to 253W.',
          'Mac Mini M4: independently measured at under 5W idle and up to ~65W during LLM inference (one measurement recorded a 50W peak specifically). A cluster of five Mac Minis running inference drew roughly 200W combined.',
          'MacBook Pro M4 Max: LLM inference specifically draws roughly 40–80W; the full system (including the display) peaks around 110W under the most demanding combined workload — Apple Silicon\'s 30–70W typical inference range is well under a discrete desktop GPU\'s 300W+.',
        ],
      },
      monthlyCost: {
        id: 'monthly-cost',
        title: 'What Does That Cost Per Month?',
        content:
          '**The formula is the same everywhere: kWh = watts ÷ 1,000 × hours, then cost = kWh × your price per kWh.** US residential electricity averaged about 18.4¢/kWh in mid-2026 (EIA); German household electricity is far less uniform — new-customer tariffs run about 25–27 cents/kWh while the default "basic supply" (Grundversorgung) rate can run as high as 40 cents/kWh, with the household average landing around 31–32 cents/kWh.',
        columns: ['Usage pattern', 'kWh/day', 'US cost/mo', 'Germany cost/mo'],
        rows: [
          { 'Usage pattern': '300W, 4 hrs/day (moderate)', 'kWh/day': '1.2 kWh', 'US cost/mo': '~$6.60', 'Germany cost/mo': '~€11–15' },
          { 'Usage pattern': '65W, 4 hrs/day (Mac Mini M4)', 'kWh/day': '0.26 kWh', 'US cost/mo': '~$1.44', 'Germany cost/mo': '~€2.50–3.20' },
          { 'Usage pattern': '450W, 24 hrs/day (heavy 24/7)', 'kWh/day': '10.8 kWh', 'US cost/mo': '~$59.60', 'Germany cost/mo': '~€100–130' },
        ],
        note: 'US figure uses the EIA-reported 18.4¢/kWh residential average (mid-2026); Germany figures use a 25–40 cent/kWh range reflecting real tariff spread, not a single rate — check your own bill for your actual rate before treating either number as exact.',
      },
      solarOffset: {
        id: 'solar-offset',
        title: 'Can Balcony Solar Offset a Local LLM Rig?',
        content: [
          '**An 800W balcony solar system — the legal plug-in limit in Germany and, as of this writing, in France as well (both cap the inverter\'s AC output at 800W, not the panel wattage) — produces roughly 3–4.5 kWh on a clear summer day with south-facing panels, but only about 0.5–1.5 kWh/day in winter.** That is a 3–7x seasonal swing driven by sun angle and day length, not a system malfunction.',
          'Compare that to the moderate-use case above: 1.2 kWh/day of GPU draw. In summer, an 800W system\'s 3–4.5 kWh/day output covers that with real surplus left over for other household use. In winter, 0.5–1.5 kWh/day of solar output falls short of or barely matches 1.2 kWh/day of demand — the system stops being a meaningful offset for roughly a third of the year in most of Germany.',
          'For the heavy 24/7 case — 10.8 kWh/day — even summer\'s best-case 4.5 kWh/day covers well under half the load, and winter output covers a small fraction of it. Solar can meaningfully reduce the bill for a moderate, daytime-scheduled local-LLM habit. It does not turn a heavy always-on rig into a "green AI" setup, in any season.',
        ],
        note: 'Skip pairing solar with a local-LLM rig if your usage is heavy and always-on — even the best-case summer output from the legal 800W plug-in limit covers well under half that load, and nothing close to it in winter. Solar is a genuine, meaningful offset for moderate, daytime-scheduled use; it is not a way to make 24/7 heavy inference "green."',
      },
      batterySizing: {
        id: 'battery-sizing',
        title: 'Which Battery Size Do You Actually Need?',
        content:
          '**Size the battery to your GPU\'s actual daily draw in kWh, not to the solar system\'s 800W nameplate rating — the two numbers measure different things and are not directly comparable.** For the moderate 1.2 kWh/day case, even a small battery covers roughly a day of storage; for the heavy 10.8 kWh/day case, none of the single units below get you close to a full day without stacking multiple expansion packs.',
        columns: ['Battery', 'Capacity', 'Price'],
        rows: [
          { 'Battery': 'BLUETTI AC180', 'Capacity': '1.15 kWh (1,152Wh)', 'Price': '$499' },
          { 'Battery': 'BLUETTI AC180P', 'Capacity': '1.44 kWh (1,440Wh)', 'Price': '$649' },
          { 'Battery': 'Zendure SolarFlow Hub 2000', 'Capacity': '1.92 kWh base, expandable to 7.68 kWh (4 modules)', 'Price': 'Hub from €399; complete kits from €1,259' },
          { 'Battery': 'Jackery HomePower 2000 Ultra', 'Capacity': '2–8 kWh expandable', 'Price': '€1,268 (base unit)' },
          { 'Battery': 'EcoFlow STREAM Ultra', 'Capacity': 'Modular/expandable (check current configuration)', 'Price': '$1,279 (list $1,899); 10-yr warranty, 6,000 cycles at 70% retention' },
        ],
        affiliateLinks: [
          { label: 'Check BLUETTI AC180 price →', url: 'https://www.bluettipower.com/products/ac180', productName: 'BLUETTI AC180', productCategory: 'Balcony solar battery' },
          { label: 'Check BLUETTI AC180P price →', url: 'https://www.bluettipower.com/products/ac180p', productName: 'BLUETTI AC180P', productCategory: 'Balcony solar battery' },
          { label: 'Check Zendure SolarFlow Hub 2000 price →', url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', productName: 'Zendure SolarFlow Hub 2000', productCategory: 'Balcony solar battery' },
          { label: 'Check Jackery HomePower 2000 Ultra price →', url: 'https://eu.jackery.com/products/homepower-2000-ultra', productName: 'Jackery HomePower 2000 Ultra', productCategory: 'Balcony solar battery' },
          { label: 'Check EcoFlow STREAM Ultra price →', url: 'https://us.ecoflow.com/products/stream-ultra', productName: 'EcoFlow STREAM Ultra', productCategory: 'Balcony solar battery' },
        ],
        note: 'Product links, no current affiliate relationship — plain links to the vendor\'s own product pages. Anker SOLIX and ALLPOWERS batteries are not included in this table: we could not verify current capacity and pricing to the two-source standard used for the units above, so we\'re not publishing placeholder numbers for them.',
      },
      whoShouldDoThis: {
        id: 'who-should-do-this',
        title: 'Who Should Actually Do This?',
        content:
          '**Solar-plus-battery for a local-LLM setup makes sense for moderate, daytime-scheduled use in a sunny climate — it does not make sense as a way to "green" heavy 24/7 inference.**',
        items: [
          '**Good fit:** weekend or evening hobbyist use (a few hours a day), sunny or moderate climate, existing or planned balcony solar for other household loads, willingness to schedule heavier local-LLM tasks for daylight hours to use solar directly rather than storing and discharging it.',
          '**Poor fit:** heavy always-on inference (an RTX 4090-class card running 24/7), winter-heavy usage patterns, apartments without a viable south-facing balcony or window for panels, or anyone expecting the pairing to fully eliminate the electricity cost rather than meaningfully reduce it.',
          '**Be honest about the framing:** a local LLM plus balcony solar is a real cost reduction for moderate use, not a "carbon-neutral AI" claim for a rig that runs hot around the clock — the math in this guide does not support that stronger claim, and overselling it undermines the genuine case for the moderate-use scenario.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          'Comparing the solar system\'s nameplate wattage (800W) directly to real daily output in kWh. An 800W system running 24 hours at nameplate would be 19.2 kWh — but real-world output is 3–4.5 kWh on a good summer day and 0.5–1.5 kWh in winter, because the sun is not shining at full intensity for 24 hours.',
          'Sizing a battery to the solar system\'s production instead of to the GPU\'s actual draw. The two numbers (solar kWh/day and GPU kWh/day) need to be compared to each other, not treated as automatically matched.',
          'Assuming a legally capped 800W balcony system can fully cover a 450W GPU running 24/7. Even the best summer output (up to 4.5 kWh/day) covers under half of a 10.8 kWh/day load, and winter output covers only a small fraction of it.',
          'Treating France\'s plug-in solar rules as meaningfully stricter than Germany\'s because the two countries are often discussed separately. Both currently cap the inverter\'s AC output at 800W — the country-specific difference is in the registration process (a free declaration to the grid operator in France; a marketplace registration in Germany), not the wattage limit.',
          'Ignoring GPU idle power when estimating monthly cost. A card idling at 20–30W for 20 hours a day adds roughly 0.4–0.6 kWh/day on its own — small next to a 24/7 heavy-load scenario, but not zero, and worth including for an accurate monthly total.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does it cost in electricity to run a local LLM?',
            a: 'For moderate use (a GPU at 300W running 4 hours a day), about $6.60/month in the US at 18.4¢/kWh, or roughly €11–15/month in Germany depending on tariff. For heavy 24/7 use on a 450W card, expect closer to $60/month in the US.',
          },
          {
            q: 'Does GPU idle power matter for the electricity bill?',
            a: 'Yes, but less than load power. A card idling at 20–30W for 20 hours a day uses roughly 0.4–0.6 kWh — a small but real addition to the total, especially over a full month, and worth counting alongside the hours spent actually running inference.',
          },
          {
            q: 'Can balcony solar fully power a local LLM rig?',
            a: 'For moderate, daytime-scheduled use in summer, yes — an 800W system\'s 3–4.5 kWh/day output comfortably covers a 1.2 kWh/day GPU habit. For heavy 24/7 use, no, in any season — even the best summer output covers well under half of a 10.8 kWh/day load.',
          },
          {
            q: 'How much does an 800W balcony solar system produce per day?',
            a: 'Roughly 3–4.5 kWh on a clear summer day with south-facing panels, and roughly 0.5–1.5 kWh/day in winter — a 3–7x seasonal swing driven by sun angle and day length, based on German solar-output data (Germany\'s climate is a reasonable proxy for much of central and northern Europe).',
          },
          {
            q: 'What size battery do I need for a local LLM setup?',
            a: 'Size it to your GPU\'s actual daily kWh draw, not to the 800W solar nameplate rating. For a moderate 1.2 kWh/day habit, a single unit like the BLUETTI AC180 (1.15 kWh) or AC180P (1.44 kWh) covers roughly a day of storage. For heavy 24/7 use, no single unit in this comparison comes close — you would need to stack multiple expansion modules (Zendure SolarFlow up to 7.68 kWh, Jackery HomePower 2000 Ultra up to 8 kWh).',
          },
          {
            q: 'Is a Mac Mini M4 cheaper to run than an RTX 4090 for local AI?',
            a: 'Substantially. The Mac Mini M4 draws under 5W idle and up to ~65W during inference, versus the RTX 4090\'s 20–33W idle and up to 450W under load — at 4 hours/day of use, the Mac Mini costs roughly $1.44/month in the US against the RTX 4090\'s ~$6.60/month, and the gap widens sharply under heavier, longer-running workloads.',
          },
          {
            q: 'Does France have a different balcony solar wattage limit than Germany?',
            a: 'No — both currently cap the plug-in inverter\'s AC output at 800W. The difference between the two countries is procedural: France uses a free online declaration to the grid operator, while Germany uses a marketplace (Marktstammdatenregister) registration. The wattage limit itself is the same.',
          },
          {
            q: 'Is "green local AI" powered by solar realistic for heavy 24/7 use?',
            a: 'Not with a legally capped 800W plug-in system. The math does not support a full-offset claim for a heavy always-on rig in any season — solar meaningfully reduces the electricity cost of moderate, daytime-scheduled local-LLM use, but it does not eliminate the cost of running a power-hungry GPU around the clock.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.chooseenergy.com/electricity-rates-by-state/', title: 'Electricity Rates by State (2026)', description: 'US residential electricity rate data, including the ~18.4¢/kWh national average used in this guide.' },
          { url: 'https://www.stromauskunft.de/strompreise/', title: 'Aktuelle Strompreise (Stromauskunft.de)', description: 'German household electricity price data across new-customer tariffs, average, and Grundversorgung rates.' },
          { url: 'https://www.techpowerup.com/306765/nvidia-geforce-rtx-4070-has-an-average-gaming-power-draw-of-186-w', title: 'NVIDIA GeForce RTX 4070 Power Draw', description: 'TechPowerUp\'s reporting of NVIDIA\'s own RTX 4070 power figures (idle, video playback, average gaming draw).' },
          { url: 'https://www.xda-developers.com/run-local-llms-one-worlds-priciest-energy-markets/', title: 'Running Local LLMs in a High-Cost Energy Market', description: 'Independent measurement of Mac Mini M4 idle and inference power draw, and multi-unit cluster power use.' },
          { url: 'https://de.bluettipower.eu/blogs/solarstrom/balkonkraftwerk-800w-ertrag-pro-tag', title: 'Balkonkraftwerk 800W Ertrag pro Tag', description: 'German-market data on 800W balcony solar system daily output across seasons.' },
          { url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', title: 'Zendure SolarFlow Hub 2000 — Official Product Page', description: 'Official capacity and pricing for the Hub 2000 and its expansion batteries.' },
          { url: 'https://eu.jackery.com/products/homepower-2000-ultra', title: 'Jackery HomePower 2000 Ultra — Official Product Page', description: 'Official capacity, price, and expansion specs for the HomePower 2000 Ultra.' },
          { url: 'https://www.bluettipower.com/products/ac180', title: 'BLUETTI AC180 — Official Product Page', description: 'Official capacity and pricing for the AC180 portable power station.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'What Running a Local LLM Costs in Electricity — and Can Balcony Solar Offset It? (2026)',
      'description': 'Local LLM electricity cost calculated: RTX 4090/3090/4070 and Mac Mini M4 power draw, US and Germany monthly cost, and whether an 800W balcony solar system can offset it.',
      'datePublished': '2026-09-01',
      'dateModified': '2026-09-01',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'en',
      'url': 'https://www.promptquorum.com/power-local-llm/local-llm-electricity-cost-balcony-solar-2026',
      'articleBody': 'A GPU running a local LLM for a few hours a day costs real, calculable money. An 800W balcony solar system can comfortably cover moderate use on a sunny summer day, but it cannot offset a heavy always-on rig, especially in winter.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Local-LLM users who want to know the real electricity cost of their setup and whether balcony solar can offset it' },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-01',
    dateModified: '2026-09-01',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: [
      'RTX 4090',
      'RTX 3090',
      'RTX 4070',
      'Mac Mini M4',
      'MacBook Pro M4 Max',
      'EcoFlow STREAM Ultra',
      'Jackery HomePower 2000 Ultra',
      'Zendure SolarFlow Hub 2000',
      'BLUETTI AC180',
      'BLUETTI AC180P',
    ],
    theme: 'Overview & Reference',
    affiliateDisclosure: true,
    title: 'Was ein lokales LLM an Strom kostet — und ob ein Balkonkraftwerk das ausgleichen kann (2026)',
    seoTitle: 'Lokales LLM: Stromkosten vs. Balkonkraftwerk (2026)',
    intro:
      'Eine GPU, die ein lokales LLM ein paar Stunden am Tag betreibt, kostet echtes, berechenbares Geld — etwa 6,60 $/Monat in den USA bei einer moderaten 4-Stunden-Gewohnheit, oder rund 60 $/Monat, wenn eine stromhungrige Karte rund um die Uhr läuft. Ein 800-Watt-Balkonkraftwerk kann den moderaten Fall an einem sonnigen Sommertag problemlos decken, gleicht aber keine schwere Dauerlast aus, besonders im Winter. Dieser Ratgeber rechnet die genauen Zahlen für gängige lokale-LLM-Hardware durch, vergleicht US- und deutsche Stromkosten und dimensioniert die Batterie, die Sie tatsächlich bräuchten — mit den ehrlichen Einschränkungen, wann Solar wirklich hilft und wann nicht.',
    metaDescription:
      'Stromkosten für lokale LLMs berechnet: RTX 4090/3090/4070 und Mac Mini M4 Verbrauch, US- (0,184 $/kWh) und deutsche (~0,32 €/kWh) Monatskosten, und ob ein 800-W-Balkonkraftwerk das ausgleichen kann.',
    twitterDescription:
      'Was ein lokales LLM wirklich an Strom kostet — RTX 4090/3090/4070 und Mac Mini M4 Verbrauch, US- vs. deutsche Monatskosten, und ob ein 800-W-Balkonkraftwerk das realistisch ausgleichen kann.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Nutzer lokaler LLMs, die die echten Stromkosten ihres Setups kennen wollen und wissen möchten, ob ein Balkonkraftwerk das ausgleichen kann',
    primaryTerm: 'lokales LLM Stromkosten',
    targetKeywords: [
      'lokales llm stromkosten',
      'llm 24/7 stromverbrauch kosten',
      'balkonkraftwerk für gpu',
      'ki stromverbrauch mit solar ausgleichen',
      'lokale ki stromverbrauch rechner',
    ],
    leadAnswerBlock:
      '**Eine GPU, die im Leerlauf steht und ein paar Stunden am Tag ein lokales LLM betreibt, kostet in den USA etwa 6,60 $/Monat (1,2 kWh/Tag bei 18,4 Cent/kWh) — eine schwere 24/7-Anlage mit einer Karte der RTX-4090-Klasse kostet stattdessen rund 60 $/Monat.** Ein 800-Watt-Balkonkraftwerk erzeugt an einem sonnigen Sommertag etwa 3–4,5 kWh, im Winter aber nur etwa 0,5–1,5 kWh/Tag — es deckt den moderaten Nutzungsfall im Sommer komfortabel, kann eine schwere Dauerlast aber in keiner Jahreszeit sinnvoll ausgleichen. Dimensionieren Sie die Batterie nach dem tatsächlichen Verbrauch Ihrer GPU, nicht nach der Nennleistung der Solaranlage.',
    quickAnswerTop: {
      de: {
        question: 'Wie viel kostet es an Strom, ein lokales LLM zu betreiben?',
        answer:
          'Eine GPU, die mit 300 Watt 4 Stunden am Tag läuft, kostet in den USA etwa 6,60 $/Monat (1,2 kWh/Tag bei 18,4 Cent/kWh) oder je nach Tarif rund 11–15 €/Monat in Deutschland (1,2 kWh/Tag bei 25–40 Cent/kWh). Eine GPU, die rund um die Uhr mit 450 Watt läuft, kostet in den USA eher 60 $/Monat. Ein 800-Watt-Balkonkraftwerk kann den moderaten Fall im Sommer ausgleichen, den schweren 24/7-Fall aber in keiner Jahreszeit.',
        bullets: [
          'RTX 4090: ca. 20–33 W Leerlauf, bis zu 450 W (TBP) unter Last',
          'RTX 3090: ca. 18–26 W Leerlauf, ca. 350 W unter Last',
          'RTX 4070: 10 W Leerlauf, 186 W durchschnittlicher Gaming-Verbrauch, 200 W TDP-Angabe',
          'Mac Mini M4: unter 5 W Leerlauf, bis zu ca. 65 W bei LLM-Inferenz',
          '800-W-Balkonkraftwerk: ca. 3–4,5 kWh/Tag im Sommer, ca. 0,5–1,5 kWh/Tag im Winter (deutsche Datenbasis)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Wie viel Strom verbraucht lokale-LLM-Hardware?', anchor: 'gpu-power' },
      { label: 'Was kostet das pro Monat?', anchor: 'monthly-cost' },
      { label: 'Kann ein Balkonkraftwerk eine lokale LLM-Anlage ausgleichen?', anchor: 'solar-offset' },
      { label: 'Welche Batteriegröße brauchen Sie wirklich?', anchor: 'battery-sizing' },
      { label: 'Für wen lohnt sich das wirklich?', anchor: 'who-should-do-this' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Eine lokale LLM-Anlage kostet bei moderater 4-Stunden-Nutzung pro Tag etwa 6,60 $/Monat an Strom, im 24/7-Betrieb eher 60 $/Monat — ein 800-Watt-Balkonkraftwerk kann den moderaten Fall im Sommer ausgleichen, den schweren 24/7-Fall aber in keiner Jahreszeit.' },
      { type: 'plain-terms', content: 'kWh (Kilowattstunde) ist die Einheit, in der Ihre Stromrechnung berechnet wird — eine 300-Watt-GPU, die 1 Stunde läuft, verbraucht 0,3 kWh. Watt mal Stunden geteilt durch 1.000, dann mit Ihrem Strompreis pro kWh multiplizieren, ergibt die Kosten. Der Ertrag eines Balkonkraftwerks wird genauso gemessen, sodass beide Zahlen direkt vergleichbar sind.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Eine GPU, die 4 Stunden/Tag mit 300 W läuft, kostet in den USA etwa 6,60 $/Monat (18,4 Cent/kWh) oder je nach Tarif rund 11–15 €/Monat in Deutschland',
          'Eine GPU, die rund um die Uhr mit 450 W läuft (RTX-4090-Klasse), kostet in den USA eher 60 $/Monat — fast das Zehnfache des moderaten Nutzungsfalls',
          'Apple Silicon (Mac Mini M4: unter 5 W Leerlauf, ca. 65 W Inferenz-Spitze) kostet nur einen kleinen Bruchteil einer diskreten-GPU-Anlage im Betrieb',
          'Ein 800-W-Balkonkraftwerk erzeugt an einem sonnigen Sommertag ca. 3–4,5 kWh, im Winter aber nur ca. 0,5–1,5 kWh/Tag — ein saisonaler Unterschied um den Faktor 3–7',
          'Dimensionieren Sie die Batterie nach dem tatsächlichen Tagesverbrauch Ihrer GPU, nicht nach der 800-Watt-Nennleistung der Solaranlage — beide Zahlen sind nicht direkt vergleichbar',
          'Frankreichs Grenzwert für Steckersolar-Wechselrichter liegt bei 800 W, genau wie in Deutschland — es gibt keinen separaten, strengeren französischen Grenzwert für diese Geräteklasse',
        ],
      },
      gpuPower: {
        id: 'gpu-power',
        title: 'Wie viel Strom verbraucht lokale-LLM-Hardware wirklich?',
        content:
          '**Die Lücke zwischen Leerlauf- und Lastverbrauch macht die Stromrechnung nicht trivial — eine Karte kann 20 Stunden am Tag nahezu lautlos dasitzen und trotzdem der größte einzelne Posten auf Ihrer Rechnung sein, wenn sie die restlichen 4 Stunden unter Volllast läuft.** Die folgenden Zahlen stammen aus Herstellerangaben und unabhängigen Messungen, nicht aus einem von PromptQuorum selbst durchgeführten Benchmark.',
        columns: ['Hardware', 'Leerlauf', 'Last / Inferenz'],
        rows: [
          { 'Hardware': 'RTX 4090', 'Leerlauf': 'ca. 20–33 W', 'Last / Inferenz': 'Bis zu 450 W (TBP)' },
          { 'Hardware': 'RTX 3090', 'Leerlauf': 'ca. 18–26 W', 'Last / Inferenz': 'ca. 350 W' },
          { 'Hardware': 'RTX 4070', 'Leerlauf': '10 W', 'Last / Inferenz': '186 W Ø (200 W TDP-Angabe)' },
          { 'Hardware': 'Mac Mini M4', 'Leerlauf': 'Unter 5 W', 'Last / Inferenz': 'Bis zu ca. 65 W' },
          { 'Hardware': 'MacBook Pro M4 Max', 'Leerlauf': 'Niedriger einstelliger Bereich', 'Last / Inferenz': 'ca. 40–80 W Inferenz; ca. 110 W Systemspitze' },
        ],
        items: [
          'RTX 4090: NVIDIA gibt eine Total Board Power von 450 W an; unabhängige Messungen zeigen einen Leerlaufverbrauch zwischen 18 W (aggressiv leistungsbegrenzte Konfigurationen) und 33 W (Founders Edition), Last kann je nach Workload 400–600 W erreichen.',
          'RTX 3090: Leerlauf liegt je nach Display-Konfiguration bei etwa 18–26 W; Volllast unter Gaming- oder Inferenz-Workloads liegt bei etwa 350 W, manche Messungen bis 365 W.',
          'RTX 4070: NVIDIAs eigene veröffentlichte Zahlen — 10 W Leerlauf, 16 W Videowiedergabe, 186 W durchschnittlicher Gaming-Verbrauch — gegenüber einer TDP-Angabe von 200 W. Reale Spitzenwerte wurden bis zu 253 W gemessen.',
          'Mac Mini M4: unabhängig gemessen mit unter 5 W im Leerlauf und bis zu ca. 65 W bei LLM-Inferenz (eine Messung ergab konkret eine Spitze von 50 W). Ein Cluster aus fünf Mac Minis unter Inferenzlast zog zusammen etwa 200 W.',
          'MacBook Pro M4 Max: LLM-Inferenz allein zieht etwa 40–80 W; das Gesamtsystem (inklusive Display) erreicht unter der anspruchsvollsten kombinierten Last eine Spitze von rund 110 W — Apple Silicons typischer Inferenzbereich von 30–70 W liegt deutlich unter den 300+ W einer diskreten Desktop-GPU.',
        ],
      },
      monthlyCost: {
        id: 'monthly-cost',
        title: 'Was kostet das pro Monat?',
        content:
          '**Die Formel ist überall dieselbe: kWh = Watt ÷ 1.000 × Stunden, dann Kosten = kWh × Ihr Preis pro kWh.** Der US-Haushaltsstrompreis lag Mitte 2026 im Schnitt bei etwa 18,4 Cent/kWh (EIA); deutsche Haushaltsstrompreise sind deutlich uneinheitlicher — Neukundentarife liegen bei etwa 25–27 Cent/kWh, während die Grundversorgung bis zu 40 Cent/kWh kosten kann, mit einem Haushaltsdurchschnitt von etwa 31–32 Cent/kWh.',
        columns: ['Nutzungsmuster', 'kWh/Tag', 'US-Kosten/Mon.', 'DE-Kosten/Mon.'],
        rows: [
          { 'Nutzungsmuster': '300 W, 4 Std./Tag (moderat)', 'kWh/Tag': '1,2 kWh', 'US-Kosten/Mon.': 'ca. 6,60 $', 'DE-Kosten/Mon.': 'ca. 11–15 €' },
          { 'Nutzungsmuster': '65 W, 4 Std./Tag (Mac Mini M4)', 'kWh/Tag': '0,26 kWh', 'US-Kosten/Mon.': 'ca. 1,44 $', 'DE-Kosten/Mon.': 'ca. 2,50–3,20 €' },
          { 'Nutzungsmuster': '450 W, 24 Std./Tag (schwer, dauerhaft)', 'kWh/Tag': '10,8 kWh', 'US-Kosten/Mon.': 'ca. 59,60 $', 'DE-Kosten/Mon.': 'ca. 100–130 €' },
        ],
        note: 'Die US-Angabe nutzt den von der EIA gemeldeten Haushaltsdurchschnitt von 18,4 Cent/kWh (Mitte 2026); die Deutschland-Angaben nutzen eine Spanne von 25–40 Cent/kWh, die die reale Tarifstreuung abbildet, keinen Einzelwert — prüfen Sie Ihre eigene Rechnung, bevor Sie eine der beiden Zahlen als exakt behandeln.',
      },
      solarOffset: {
        id: 'solar-offset',
        title: 'Kann ein Balkonkraftwerk eine lokale LLM-Anlage ausgleichen?',
        content: [
          '**Ein 800-Watt-Balkonkraftwerk — der gesetzliche Grenzwert für Steckersolar in Deutschland und, Stand jetzt, auch in Frankreich (beide begrenzen die Wechselstrom-Ausgangsleistung des Wechselrichters auf 800 W, nicht die Modulleistung) — erzeugt an einem klaren Sommertag mit südausgerichteten Modulen etwa 3–4,5 kWh, im Winter aber nur etwa 0,5–1,5 kWh/Tag.** Das ist ein saisonaler Unterschied um den Faktor 3–7, bedingt durch Sonnenstand und Tageslänge, keine Fehlfunktion der Anlage.',
          'Vergleichen Sie das mit dem moderaten Nutzungsfall oben: 1,2 kWh/Tag GPU-Verbrauch. Im Sommer deckt der Ertrag von 3–4,5 kWh/Tag eines 800-W-Systems das mit echtem Überschuss für andere Haushaltsverbraucher. Im Winter unterschreitet oder erreicht ein Solarertrag von 0,5–1,5 kWh/Tag den Bedarf von 1,2 kWh/Tag nur knapp — die Anlage hört für etwa ein Drittel des Jahres in weiten Teilen Deutschlands auf, ein sinnvoller Ausgleich zu sein.',
          'Für den schweren 24/7-Fall — 10,8 kWh/Tag — deckt selbst der beste Sommerwert von 4,5 kWh/Tag deutlich weniger als die Hälfte der Last, und der Winterertrag deckt nur einen kleinen Bruchteil davon. Solar kann die Kosten für eine moderate, tagsüber geplante lokale-LLM-Gewohnheit spürbar senken. Es macht aus einer schweren Dauerlast-Anlage keine „grüne KI" — in keiner Jahreszeit.',
        ],
        note: 'Verzichten Sie auf die Kombination von Solar mit einer lokalen LLM-Anlage, wenn Ihre Nutzung schwer und dauerhaft ist — selbst der beste Sommerertrag des gesetzlich begrenzten 800-Watt-Steckersolarsystems deckt deutlich weniger als die Hälfte dieser Last, im Winter fast nichts davon. Solar ist ein echter, spürbarer Ausgleich für moderate, tagsüber geplante Nutzung — es ist kein Weg, 24/7-Dauerlast „grün" zu machen.',
      },
      batterySizing: {
        id: 'battery-sizing',
        title: 'Welche Batteriegröße brauchen Sie wirklich?',
        content:
          '**Dimensionieren Sie die Batterie nach dem tatsächlichen Tagesverbrauch Ihrer GPU in kWh, nicht nach der 800-Watt-Nennleistung der Solaranlage — beide Zahlen messen unterschiedliche Dinge und sind nicht direkt vergleichbar.** Für den moderaten Fall mit 1,2 kWh/Tag deckt schon eine kleine Batterie etwa einen Tag Speicher ab; für den schweren Fall mit 10,8 kWh/Tag kommt keine der unten genannten Einzeleinheiten auch nur annähernd an einen vollen Tag heran, ohne mehrere Erweiterungsmodule zu stapeln.',
        columns: ['Batterie', 'Kapazität', 'Preis'],
        rows: [
          { 'Batterie': 'BLUETTI AC180', 'Kapazität': '1,15 kWh (1.152 Wh)', 'Preis': '499 $' },
          { 'Batterie': 'BLUETTI AC180P', 'Kapazität': '1,44 kWh (1.440 Wh)', 'Preis': '649 $' },
          { 'Batterie': 'Zendure SolarFlow Hub 2000', 'Kapazität': '1,92 kWh Basis, erweiterbar auf 7,68 kWh (4 Module)', 'Preis': 'Hub ab 399 €; Komplettsets ab 1.259 €' },
          { 'Batterie': 'Jackery HomePower 2000 Ultra', 'Kapazität': '2–8 kWh erweiterbar', 'Preis': '1.268 € (Basisgerät)' },
          { 'Batterie': 'EcoFlow STREAM Ultra', 'Kapazität': 'Modular/erweiterbar (aktuelle Konfiguration prüfen)', 'Preis': '1.279 $ (Liste 1.899 $); 10 Jahre Garantie, 6.000 Zyklen bei 70 % Restkapazität' },
        ],
        affiliateLinks: [
          { label: 'BLUETTI AC180 Preis prüfen →', url: 'https://www.bluettipower.com/products/ac180', productName: 'BLUETTI AC180', productCategory: 'Balcony solar battery' },
          { label: 'BLUETTI AC180P Preis prüfen →', url: 'https://www.bluettipower.com/products/ac180p', productName: 'BLUETTI AC180P', productCategory: 'Balcony solar battery' },
          { label: 'Zendure SolarFlow Hub 2000 Preis prüfen →', url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', productName: 'Zendure SolarFlow Hub 2000', productCategory: 'Balcony solar battery' },
          { label: 'Jackery HomePower 2000 Ultra Preis prüfen →', url: 'https://eu.jackery.com/products/homepower-2000-ultra', productName: 'Jackery HomePower 2000 Ultra', productCategory: 'Balcony solar battery' },
          { label: 'EcoFlow STREAM Ultra Preis prüfen →', url: 'https://us.ecoflow.com/products/stream-ultra', productName: 'EcoFlow STREAM Ultra', productCategory: 'Balcony solar battery' },
        ],
        note: 'Produktlinks, aktuell keine Affiliate-Beziehung — reine Links zu den Produktseiten der Hersteller. Anker SOLIX und ALLPOWERS sind in dieser Tabelle nicht enthalten: Wir konnten aktuelle Kapazität und Preise nicht auf demselben Zwei-Quellen-Niveau wie oben verifizieren und veröffentlichen daher keine Platzhalterzahlen dafür.',
      },
      whoShouldDoThis: {
        id: 'who-should-do-this',
        title: 'Für wen lohnt sich das wirklich?',
        content:
          '**Solar plus Batterie für eine lokale-LLM-Anlage ist sinnvoll bei moderater, tagsüber geplanter Nutzung in einem sonnigen Klima — nicht als Weg, schwere 24/7-Inferenz „grün" zu machen.**',
        items: [
          '**Guter Fall:** Wochenend- oder Feierabend-Nutzung als Hobby (ein paar Stunden am Tag), sonniges oder gemäßigtes Klima, bereits vorhandenes oder geplantes Balkonkraftwerk für andere Haushaltsverbraucher, Bereitschaft, aufwendigere lokale-LLM-Aufgaben tagsüber einzuplanen, um Solarstrom direkt zu nutzen statt ihn zu speichern und wieder zu entladen.',
          '**Schlechter Fall:** schwere Dauerlast-Inferenz (eine Karte der RTX-4090-Klasse rund um die Uhr), winterlastige Nutzungsmuster, Wohnungen ohne nutzbaren südausgerichteten Balkon oder Fenster für Module, oder wer erwartet, dass die Kombination die Stromkosten vollständig eliminiert statt sie spürbar zu senken.',
          '**Ehrlich bei der Einordnung bleiben:** ein lokales LLM plus Balkonkraftwerk ist bei moderater Nutzung eine echte Kostensenkung, aber keine „CO2-neutrale KI"-Behauptung für eine Anlage, die rund um die Uhr unter Volllast läuft — die Rechnung in diesem Ratgeber stützt diese stärkere Behauptung nicht, und sie zu übertreiben untergräbt das echte Argument für den moderaten Nutzungsfall.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          'Die Nennleistung der Solaranlage (800 W) direkt mit dem realen Tagesertrag in kWh vergleichen. Ein 800-W-System, das 24 Stunden mit Nennleistung liefe, käme auf 19,2 kWh — der reale Ertrag liegt aber bei 3–4,5 kWh an einem guten Sommertag und 0,5–1,5 kWh im Winter, weil die Sonne nicht 24 Stunden mit voller Intensität scheint.',
          'Die Batterie nach dem Ertrag der Solaranlage dimensionieren statt nach dem tatsächlichen Verbrauch der GPU. Beide Zahlen (Solar-kWh/Tag und GPU-kWh/Tag) müssen miteinander verglichen werden, nicht automatisch als passend angenommen werden.',
          'Annehmen, ein gesetzlich auf 800 W begrenztes Balkonkraftwerk könne eine 450-W-GPU im 24/7-Betrieb vollständig decken. Selbst der beste Sommerertrag (bis zu 4,5 kWh/Tag) deckt weniger als die Hälfte einer Last von 10,8 kWh/Tag, und der Winterertrag deckt nur einen kleinen Bruchteil davon.',
          'Frankreichs Steckersolar-Regeln als deutlich strenger als die deutschen betrachten, nur weil beide Länder oft getrennt diskutiert werden. Beide begrenzen die Wechselstrom-Ausgangsleistung des Wechselrichters aktuell auf 800 W — der länderspezifische Unterschied liegt im Anmeldeverfahren (eine kostenlose Meldung an den Netzbetreiber in Frankreich; eine Registrierung im Marktstammdatenregister in Deutschland), nicht im Leistungslimit.',
          'Den Leerlaufverbrauch der GPU bei der Schätzung der Monatskosten ignorieren. Eine Karte, die 20 Stunden am Tag mit 20–30 W im Leerlauf läuft, addiert dadurch allein etwa 0,4–0,6 kWh/Tag — klein im Vergleich zum 24/7-Volllast-Szenario, aber nicht null, und für eine genaue Monatssumme relevant.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel kostet es an Strom, ein lokales LLM zu betreiben?',
            a: 'Bei moderater Nutzung (eine GPU mit 300 W, 4 Stunden am Tag) etwa 6,60 $/Monat in den USA bei 18,4 Cent/kWh, oder je nach Tarif rund 11–15 €/Monat in Deutschland. Bei schwerer 24/7-Nutzung auf einer 450-W-Karte eher 60 $/Monat in den USA.',
          },
          {
            q: 'Spielt der Leerlaufverbrauch der GPU bei der Stromrechnung eine Rolle?',
            a: 'Ja, aber weniger als der Lastverbrauch. Eine Karte, die 20 Stunden am Tag mit 20–30 W im Leerlauf läuft, verbraucht dadurch etwa 0,4–0,6 kWh — ein kleiner, aber realer Zusatzposten, besonders über einen ganzen Monat, und es lohnt sich, ihn neben den tatsächlichen Inferenz-Stunden mitzuzählen.',
          },
          {
            q: 'Kann ein Balkonkraftwerk eine lokale LLM-Anlage vollständig mit Strom versorgen?',
            a: 'Bei moderater, tagsüber geplanter Nutzung im Sommer ja — der Ertrag eines 800-W-Systems von 3–4,5 kWh/Tag deckt eine GPU-Gewohnheit von 1,2 kWh/Tag komfortabel. Bei schwerer 24/7-Nutzung nein, in keiner Jahreszeit — selbst der beste Sommerertrag deckt deutlich weniger als die Hälfte einer Last von 10,8 kWh/Tag.',
          },
          {
            q: 'Wie viel erzeugt ein 800-Watt-Balkonkraftwerk pro Tag?',
            a: 'Etwa 3–4,5 kWh an einem klaren Sommertag mit südausgerichteten Modulen, und etwa 0,5–1,5 kWh/Tag im Winter — ein saisonaler Unterschied um den Faktor 3–7, basierend auf deutschen Solarertragsdaten (Deutschlands Klima ist ein brauchbarer Anhaltspunkt für weite Teile Mittel- und Nordeuropas).',
          },
          {
            q: 'Welche Batteriegröße brauche ich für eine lokale-LLM-Anlage?',
            a: 'Dimensionieren Sie sie nach dem tatsächlichen Tagesverbrauch Ihrer GPU in kWh, nicht nach der 800-Watt-Nennleistung der Solaranlage. Für eine moderate Gewohnheit von 1,2 kWh/Tag deckt eine einzelne Einheit wie das BLUETTI AC180 (1,15 kWh) oder AC180P (1,44 kWh) etwa einen Tag Speicher ab. Bei schwerer 24/7-Nutzung kommt keine Einzeleinheit in diesem Vergleich auch nur annähernd heran — Sie bräuchten mehrere Erweiterungsmodule (Zendure SolarFlow bis 7,68 kWh, Jackery HomePower 2000 Ultra bis 8 kWh).',
          },
          {
            q: 'Ist ein Mac Mini M4 günstiger im Betrieb als eine RTX 4090 für lokale KI?',
            a: 'Deutlich. Der Mac Mini M4 zieht unter 5 W im Leerlauf und bis zu ca. 65 W bei Inferenz, gegenüber 20–33 W Leerlauf und bis zu 450 W unter Last bei der RTX 4090 — bei 4 Stunden Nutzung pro Tag kostet der Mac Mini in den USA etwa 1,44 $/Monat gegenüber ca. 6,60 $/Monat bei der RTX 4090, und der Abstand wächst bei schwereren, länger laufenden Workloads deutlich.',
          },
          {
            q: 'Hat Frankreich einen anderen Leistungsgrenzwert für Balkonkraftwerke als Deutschland?',
            a: 'Nein — beide begrenzen aktuell die Wechselstrom-Ausgangsleistung des Steckersolar-Wechselrichters auf 800 W. Der Unterschied zwischen beiden Ländern ist verfahrenstechnisch: Frankreich nutzt eine kostenlose Online-Meldung an den Netzbetreiber, Deutschland eine Registrierung im Marktstammdatenregister. Das Leistungslimit selbst ist identisch.',
          },
          {
            q: 'Ist „grüne lokale KI" mit Solarstrom bei schwerer 24/7-Nutzung realistisch?',
            a: 'Nicht mit einem gesetzlich auf 800 W begrenzten Steckersolarsystem. Die Rechnung stützt keine vollständige Ausgleichsbehauptung für eine schwere Dauerlast-Anlage in keiner Jahreszeit — Solar senkt die Stromkosten einer moderaten, tagsüber geplanten lokalen-LLM-Nutzung spürbar, eliminiert aber nicht die Kosten für eine stromhungrige GPU im Dauerbetrieb.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://www.chooseenergy.com/electricity-rates-by-state/', title: 'Electricity Rates by State (2026)', description: 'US-Strompreisdaten nach Bundesstaat, inklusive des in diesem Ratgeber genutzten Durchschnitts von ca. 18,4 Cent/kWh.' },
          { url: 'https://www.stromauskunft.de/strompreise/', title: 'Aktuelle Strompreise (Stromauskunft.de)', description: 'Deutsche Haushaltsstrompreisdaten über Neukundentarife, Durchschnitt und Grundversorgungstarife hinweg.' },
          { url: 'https://www.techpowerup.com/306765/nvidia-geforce-rtx-4070-has-an-average-gaming-power-draw-of-186-w', title: 'NVIDIA GeForce RTX 4070 Power Draw', description: 'Berichterstattung von TechPowerUp über NVIDIAs eigene RTX-4070-Verbrauchswerte (Leerlauf, Videowiedergabe, durchschnittlicher Gaming-Verbrauch).' },
          { url: 'https://www.xda-developers.com/run-local-llms-one-worlds-priciest-energy-markets/', title: 'Running Local LLMs in a High-Cost Energy Market', description: 'Unabhängige Messung von Leerlauf- und Inferenzverbrauch des Mac Mini M4 sowie Stromverbrauch im Mehrgeräte-Cluster.' },
          { url: 'https://de.bluettipower.eu/blogs/solarstrom/balkonkraftwerk-800w-ertrag-pro-tag', title: 'Balkonkraftwerk 800W Ertrag pro Tag', description: 'Deutsche Marktdaten zum Tagesertrag eines 800-W-Balkonkraftwerks über die Jahreszeiten hinweg.' },
          { url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', title: 'Zendure SolarFlow Hub 2000 — Offizielle Produktseite', description: 'Offizielle Kapazitäts- und Preisangaben für den Hub 2000 und seine Erweiterungsbatterien.' },
          { url: 'https://eu.jackery.com/products/homepower-2000-ultra', title: 'Jackery HomePower 2000 Ultra — Offizielle Produktseite', description: 'Offizielle Kapazitäts-, Preis- und Erweiterungsangaben für das HomePower 2000 Ultra.' },
          { url: 'https://www.bluettipower.com/products/ac180', title: 'BLUETTI AC180 — Offizielle Produktseite', description: 'Offizielle Kapazitäts- und Preisangaben für die Powerstation AC180.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Was ein lokales LLM an Strom kostet — und ob ein Balkonkraftwerk das ausgleichen kann (2026)',
      'description': 'Stromkosten für lokale LLMs berechnet: RTX 4090/3090/4070 und Mac Mini M4 Verbrauch, US- und deutsche Monatskosten, und ob ein 800-W-Balkonkraftwerk das ausgleichen kann.',
      'datePublished': '2026-09-01',
      'dateModified': '2026-09-01',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-llm-electricity-cost-balcony-solar-2026',
      'articleBody': 'Eine GPU, die ein lokales LLM ein paar Stunden am Tag betreibt, kostet echtes, berechenbares Geld. Ein 800-Watt-Balkonkraftwerk kann den moderaten Nutzungsfall an einem sonnigen Sommertag problemlos decken, gleicht aber keine schwere Dauerlast aus, besonders im Winter.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Nutzer lokaler LLMs, die die echten Stromkosten ihres Setups kennen wollen und wissen möchten, ob ein Balkonkraftwerk das ausgleichen kann' },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-01',
    dateModified: '2026-09-01',
    next_refresh_due: '2027-03-01',
    current_hardware_mentioned: [
      'RTX 4090',
      'RTX 3090',
      'RTX 4070',
      'Mac Mini M4',
      'MacBook Pro M4 Max',
      'EcoFlow STREAM Ultra',
      'Jackery HomePower 2000 Ultra',
      'Zendure SolarFlow Hub 2000',
      'BLUETTI AC180',
      'BLUETTI AC180P',
    ],
    theme: 'Overview & Reference',
    affiliateDisclosure: true,
    title: 'Ce que coûte un LLM local en électricité — et si le solaire de balcon peut compenser (2026)',
    seoTitle: 'LLM local : coût électrique vs. solaire de balcon (2026)',
    intro:
      'Un GPU qui fait tourner un LLM local quelques heures par jour coûte de l\'argent réel et calculable — environ 6,60 $/mois aux États-Unis pour une utilisation modérée de 4 heures par jour, ou près de 60 $/mois si une carte gourmande tourne 24h/24. Un système solaire de balcon de 800 W peut largement couvrir le cas modéré par une journée d\'été ensoleillée, mais ne compense pas une installation lourde et permanente, surtout en hiver. Ce guide détaille le calcul exact pour le matériel courant de LLM local, compare les coûts électriques américains et allemands, et dimensionne la batterie dont vous auriez réellement besoin — avec les réserves honnêtes sur les cas où le solaire aide vraiment et ceux où il n\'aide pas.',
    metaDescription:
      'Coût électrique d\'un LLM local calculé : consommation RTX 4090/3090/4070 et Mac Mini M4, coût mensuel aux États-Unis (0,184 $/kWh) et en Allemagne (~0,32 €/kWh), et si un solaire de balcon 800 W peut compenser.',
    twitterDescription:
      'Ce que coûte réellement un LLM local en électricité — consommation RTX 4090/3090/4070 et Mac Mini M4, coût mensuel États-Unis vs. Allemagne, et si le solaire de balcon 800 W peut réalistement compenser.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de LLM local voulant connaître le coût électrique réel de leur installation et si le solaire de balcon peut le compenser',
    primaryTerm: 'coût électrique LLM local',
    targetKeywords: [
      'cout electrique llm local',
      'cout electricite llm 24/7',
      'solaire de balcon pour gpu',
      'compenser electricite ia avec solaire',
      'calculateur consommation electrique ia locale',
    ],
    leadAnswerBlock:
      '**Un GPU au repos qui fait tourner un LLM local quelques heures par jour coûte environ 6,60 $/mois aux États-Unis (1,2 kWh/jour à 18,4 ¢/kWh) — une installation lourde tournant 24h/24 sur une carte de classe RTX 4090 coûte plutôt environ 60 $/mois.** Un système solaire de balcon de 800 W produit environ 3 à 4,5 kWh par une journée d\'été ensoleillée, mais seulement environ 0,5 à 1,5 kWh/jour en hiver — il couvre largement le cas d\'usage modéré en été, mais ne peut compenser de façon significative une installation lourde en permanence, quelle que soit la saison. Dimensionnez votre batterie selon la consommation réelle de votre GPU, pas selon la puissance nominale du système solaire.',
    quickAnswerTop: {
      fr: {
        question: 'Combien coûte en électricité l\'exécution d\'un LLM local ?',
        answer:
          'Un GPU fonctionnant à 300 W pendant 4 heures par jour coûte environ 6,60 $/mois aux États-Unis (1,2 kWh/jour à 18,4 ¢/kWh) ou environ 11 à 15 €/mois en Allemagne (1,2 kWh/jour à 25–40 centimes/kWh selon le tarif). Un GPU tournant 24h/24 à 450 W coûte plutôt environ 60 $/mois aux États-Unis. Un système solaire de balcon de 800 W peut compenser le cas modéré en été, mais pas le cas lourd 24h/24, quelle que soit la saison.',
        bullets: [
          'RTX 4090 : ~20–33 W au repos, jusqu\'à 450 W (TBP) en charge',
          'RTX 3090 : ~18–26 W au repos, ~350 W en charge',
          'RTX 4070 : 10 W au repos, 186 W en moyenne en jeu, 200 W de TDP nominal',
          'Mac Mini M4 : moins de 5 W au repos, jusqu\'à ~65 W pendant l\'inférence LLM',
          'Solaire de balcon 800 W : ~3–4,5 kWh/jour en été, ~0,5–1,5 kWh/jour en hiver (données issues d\'Allemagne)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Quelle consommation pour le matériel de LLM local ?', anchor: 'gpu-power' },
      { label: 'Combien ça coûte par mois ?', anchor: 'monthly-cost' },
      { label: 'Le solaire de balcon peut-il compenser une installation LLM locale ?', anchor: 'solar-offset' },
      { label: 'Quelle taille de batterie vous faut-il vraiment ?', anchor: 'battery-sizing' },
      { label: 'Qui devrait vraiment faire ça ?', anchor: 'who-should-do-this' },
      { label: 'Erreurs courantes', anchor: 'common-mistakes' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une installation de LLM local coûte environ 6,60 $/mois en électricité pour un usage modéré de 4 heures par jour, ou près de 60 $/mois en 24h/24 — un système solaire de balcon de 800 W peut compenser le cas modéré en été, mais pas le cas lourd 24h/24, quelle que soit la saison.' },
      { type: 'plain-terms', content: 'Le kWh (kilowattheure) est l\'unité utilisée pour votre facture d\'électricité — un GPU de 300 watts fonctionnant 1 heure consomme 0,3 kWh. Multipliez les watts par les heures, divisez par 1 000, puis multipliez par votre prix par kWh pour obtenir le coût. La production du solaire de balcon se mesure de la même façon, ce qui permet de comparer directement les deux chiffres.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        items: [
          'Un GPU fonctionnant 4 h/jour à 300 W coûte environ 6,60 $/mois aux États-Unis (18,4 ¢/kWh) ou environ 11–15 €/mois en Allemagne selon le tarif',
          'Un GPU tournant 24h/24 à 450 W (classe RTX 4090) coûte plutôt environ 60 $/mois aux États-Unis — près de 10 fois le cas d\'usage modéré',
          'Le silicium Apple (Mac Mini M4 : moins de 5 W au repos, ~65 W en pic d\'inférence) coûte une petite fraction d\'une installation à GPU dédié',
          'Un système solaire de balcon de 800 W produit ~3–4,5 kWh par une journée d\'été ensoleillée, mais seulement ~0,5–1,5 kWh/jour en hiver — un écart saisonnier d\'un facteur 3 à 7',
          'Dimensionnez votre batterie selon la consommation quotidienne réelle de votre GPU, pas selon la puissance nominale de 800 W du système solaire — les deux chiffres ne sont pas comparables',
          'La limite française pour les onduleurs solaires enfichables est de 800 W, la même qu\'en Allemagne — il n\'existe pas de limite française séparée et plus stricte pour cette catégorie de système',
        ],
      },
      gpuPower: {
        id: 'gpu-power',
        title: 'Quelle consommation réelle pour le matériel de LLM local ?',
        content:
          '**L\'écart entre la consommation au repos et en charge rend le calcul électrique non trivial — une carte peut rester quasi silencieuse 20 heures par jour et rester malgré tout le plus gros poste de votre facture si elle tourne à plein régime les 4 heures restantes.** Les chiffres ci-dessous proviennent des spécifications constructeur et de mesures indépendantes, pas d\'un benchmark réalisé par PromptQuorum.',
        columns: ['Matériel', 'Repos', 'Charge / Inférence'],
        rows: [
          { 'Matériel': 'RTX 4090', 'Repos': '~20–33 W', 'Charge / Inférence': 'Jusqu\'à 450 W (TBP)' },
          { 'Matériel': 'RTX 3090', 'Repos': '~18–26 W', 'Charge / Inférence': '~350 W' },
          { 'Matériel': 'RTX 4070', 'Repos': '10 W', 'Charge / Inférence': '186 W en moy. (TDP nominal 200 W)' },
          { 'Matériel': 'Mac Mini M4', 'Repos': 'Moins de 5 W', 'Charge / Inférence': 'Jusqu\'à ~65 W' },
          { 'Matériel': 'MacBook Pro M4 Max', 'Repos': 'Chiffre unique bas', 'Charge / Inférence': '~40–80 W en inférence ; ~110 W en pic système' },
        ],
        items: [
          'RTX 4090 : NVIDIA indique une puissance carte totale (TBP) de 450 W ; des mesures indépendantes montrent une consommation au repos entre 18 W (configurations à limitation de puissance agressive) et 33 W (Founders Edition), la charge pouvant atteindre 400–600 W selon la charge de travail.',
          'RTX 3090 : le repos se situe autour de 18–26 W selon la configuration d\'affichage ; la pleine charge en jeu ou en inférence tourne autour de 350 W, certaines mesures atteignant 365 W.',
          'RTX 4070 : chiffres publiés par NVIDIA lui-même — 10 W au repos, 16 W en lecture vidéo, 186 W en moyenne en jeu — contre un TDP nominal de 200 W. Des pics réels ont été mesurés jusqu\'à 253 W.',
          'Mac Mini M4 : mesuré indépendamment à moins de 5 W au repos et jusqu\'à ~65 W pendant l\'inférence LLM (une mesure a spécifiquement relevé un pic de 50 W). Un cluster de cinq Mac Mini en pleine inférence a consommé environ 200 W au total.',
          'MacBook Pro M4 Max : l\'inférence LLM à elle seule consomme environ 40–80 W ; le système complet (écran compris) plafonne autour de 110 W sous la charge combinée la plus exigeante — la plage d\'inférence typique de 30–70 W du silicium Apple reste bien en dessous des 300 W et plus d\'un GPU de bureau dédié.',
        ],
      },
      monthlyCost: {
        id: 'monthly-cost',
        title: 'Combien ça coûte par mois ?',
        content:
          '**La formule est la même partout : kWh = watts ÷ 1 000 × heures, puis coût = kWh × votre prix par kWh.** L\'électricité résidentielle américaine s\'établissait en moyenne à environ 18,4 ¢/kWh mi-2026 (EIA) ; l\'électricité résidentielle allemande est bien moins uniforme — les tarifs nouveaux clients tournent autour de 25–27 centimes/kWh tandis que le tarif de secours par défaut (Grundversorgung) peut atteindre 40 centimes/kWh, la moyenne des ménages se situant autour de 31–32 centimes/kWh.',
        columns: ['Profil d\'usage', 'kWh/jour', 'Coût US/mois', 'Coût DE/mois'],
        rows: [
          { 'Profil d\'usage': '300 W, 4 h/jour (modéré)', 'kWh/jour': '1,2 kWh', 'Coût US/mois': '~6,60 $', 'Coût DE/mois': '~11–15 €' },
          { 'Profil d\'usage': '65 W, 4 h/jour (Mac Mini M4)', 'kWh/jour': '0,26 kWh', 'Coût US/mois': '~1,44 $', 'Coût DE/mois': '~2,50–3,20 €' },
          { 'Profil d\'usage': '450 W, 24 h/jour (lourd, permanent)', 'kWh/jour': '10,8 kWh', 'Coût US/mois': '~59,60 $', 'Coût DE/mois': '~100–130 €' },
        ],
        note: 'Le chiffre US utilise la moyenne résidentielle de 18,4 ¢/kWh rapportée par l\'EIA (mi-2026) ; les chiffres allemands utilisent une fourchette de 25–40 centimes/kWh reflétant la dispersion réelle des tarifs, pas un taux unique — vérifiez votre propre facture avant de considérer l\'un ou l\'autre chiffre comme exact.',
      },
      solarOffset: {
        id: 'solar-offset',
        title: 'Le solaire de balcon peut-il compenser une installation LLM locale ?',
        content: [
          '**Un système solaire de balcon de 800 W — la limite légale pour le solaire enfichable en Allemagne et, à l\'heure actuelle, également en France (les deux limitent la sortie CA de l\'onduleur à 800 W, pas la puissance des panneaux) — produit environ 3 à 4,5 kWh par une journée d\'été claire avec des panneaux orientés au sud, mais seulement environ 0,5 à 1,5 kWh/jour en hiver.** C\'est un écart saisonnier d\'un facteur 3 à 7, dû à l\'angle du soleil et à la durée du jour, pas à un dysfonctionnement du système.',
          'Comparez cela au cas d\'usage modéré ci-dessus : 1,2 kWh/jour de consommation GPU. En été, les 3 à 4,5 kWh/jour produits par un système de 800 W couvrent cela avec un vrai surplus pour d\'autres usages du foyer. En hiver, une production solaire de 0,5 à 1,5 kWh/jour est inférieure ou tout juste égale à une demande de 1,2 kWh/jour — le système cesse d\'être une compensation significative pendant environ un tiers de l\'année dans la majeure partie de l\'Allemagne.',
          'Pour le cas lourd 24h/24 — 10,8 kWh/jour — même le meilleur cas d\'été à 4,5 kWh/jour couvre bien moins de la moitié de la charge, et la production hivernale n\'en couvre qu\'une petite fraction. Le solaire peut réduire sensiblement la facture d\'un usage modéré de LLM local programmé en journée. Il ne transforme pas une installation lourde en permanence en une configuration « IA verte », quelle que soit la saison.',
        ],
        note: 'Évitez d\'associer le solaire à une installation de LLM local si votre usage est lourd et permanent — même la meilleure production estivale de la limite légale de 800 W enfichable couvre bien moins de la moitié de cette charge, et presque rien en hiver. Le solaire est une compensation réelle et significative pour un usage modéré programmé en journée ; ce n\'est pas un moyen de rendre « verte » une inférence lourde 24h/24.',
      },
      batterySizing: {
        id: 'battery-sizing',
        title: 'Quelle taille de batterie vous faut-il vraiment ?',
        content:
          '**Dimensionnez la batterie selon la consommation quotidienne réelle de votre GPU en kWh, pas selon la puissance nominale de 800 W du système solaire — les deux chiffres mesurent des choses différentes et ne sont pas directement comparables.** Pour le cas modéré à 1,2 kWh/jour, même une petite batterie couvre environ une journée de stockage ; pour le cas lourd à 10,8 kWh/jour, aucune des unités ci-dessous ne s\'en approche sans empiler plusieurs modules d\'extension.',
        columns: ['Batterie', 'Capacité', 'Prix'],
        rows: [
          { 'Batterie': 'BLUETTI AC180', 'Capacité': '1,15 kWh (1 152 Wh)', 'Prix': '499 $' },
          { 'Batterie': 'BLUETTI AC180P', 'Capacité': '1,44 kWh (1 440 Wh)', 'Prix': '649 $' },
          { 'Batterie': 'Zendure SolarFlow Hub 2000', 'Capacité': '1,92 kWh de base, extensible à 7,68 kWh (4 modules)', 'Prix': 'Hub à partir de 399 € ; kits complets à partir de 1 259 €' },
          { 'Batterie': 'Jackery HomePower 2000 Ultra', 'Capacité': '2–8 kWh extensible', 'Prix': '1 268 € (unité de base)' },
          { 'Batterie': 'EcoFlow STREAM Ultra', 'Capacité': 'Modulaire/extensible (vérifier la configuration actuelle)', 'Prix': '1 279 $ (liste 1 899 $) ; garantie 10 ans, 6 000 cycles à 70 % de capacité retenue' },
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix du BLUETTI AC180 →', url: 'https://www.bluettipower.com/products/ac180', productName: 'BLUETTI AC180', productCategory: 'Balcony solar battery' },
          { label: 'Vérifier le prix du BLUETTI AC180P →', url: 'https://www.bluettipower.com/products/ac180p', productName: 'BLUETTI AC180P', productCategory: 'Balcony solar battery' },
          { label: 'Vérifier le prix du Zendure SolarFlow Hub 2000 →', url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', productName: 'Zendure SolarFlow Hub 2000', productCategory: 'Balcony solar battery' },
          { label: 'Vérifier le prix du Jackery HomePower 2000 Ultra →', url: 'https://eu.jackery.com/products/homepower-2000-ultra', productName: 'Jackery HomePower 2000 Ultra', productCategory: 'Balcony solar battery' },
          { label: 'Vérifier le prix de l\'EcoFlow STREAM Ultra →', url: 'https://us.ecoflow.com/products/stream-ultra', productName: 'EcoFlow STREAM Ultra', productCategory: 'Balcony solar battery' },
        ],
        note: 'Liens produits, aucune relation d\'affiliation actuelle — liens simples vers les pages produit des fabricants. Anker SOLIX et ALLPOWERS ne figurent pas dans ce tableau : nous n\'avons pas pu vérifier la capacité et le prix actuels au même niveau à deux sources que ci-dessus, nous ne publions donc pas de chiffres provisoires pour ces marques.',
      },
      whoShouldDoThis: {
        id: 'who-should-do-this',
        title: 'Qui devrait vraiment faire ça ?',
        content:
          '**Solaire plus batterie pour une installation de LLM local a du sens pour un usage modéré programmé en journée dans un climat ensoleillé — pas comme moyen de « verdir » une inférence lourde 24h/24.**',
        items: [
          '**Bon profil :** usage de loisir le week-end ou en soirée (quelques heures par jour), climat ensoleillé ou modéré, solaire de balcon déjà installé ou prévu pour d\'autres usages du foyer, volonté de programmer les tâches de LLM local les plus lourdes en journée pour utiliser le solaire directement plutôt que de le stocker et le décharger.',
          '**Mauvais profil :** inférence lourde en permanence (une carte de classe RTX 4090 tournant 24h/24), usage à dominante hivernale, appartement sans balcon ou fenêtre orientée sud viable pour des panneaux, ou toute personne s\'attendant à ce que la combinaison élimine totalement le coût électrique plutôt que de le réduire sensiblement.',
          '**Rester honnête sur le positionnement :** un LLM local plus du solaire de balcon représente une vraie réduction de coût pour un usage modéré, pas une prétention « IA neutre en carbone » pour une installation qui tourne à plein régime en permanence — le calcul de ce guide ne soutient pas cette affirmation plus forte, et l\'exagérer affaiblit l\'argument réel du cas d\'usage modéré.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          'Comparer directement la puissance nominale du système solaire (800 W) à la production réelle en kWh par jour. Un système de 800 W fonctionnant 24 heures à puissance nominale donnerait 19,2 kWh — mais la production réelle est de 3 à 4,5 kWh par bonne journée d\'été et de 0,5 à 1,5 kWh en hiver, car le soleil ne brille pas à pleine intensité pendant 24 heures.',
          'Dimensionner une batterie selon la production du système solaire plutôt que selon la consommation réelle du GPU. Les deux chiffres (kWh/jour solaire et kWh/jour GPU) doivent être comparés l\'un à l\'autre, pas supposés automatiquement assortis.',
          'Supposer qu\'un système de balcon limité légalement à 800 W peut couvrir intégralement un GPU de 450 W tournant 24h/24. Même la meilleure production estivale (jusqu\'à 4,5 kWh/jour) couvre moins de la moitié d\'une charge de 10,8 kWh/jour, et la production hivernale n\'en couvre qu\'une petite fraction.',
          'Considérer les règles françaises du solaire enfichable comme sensiblement plus strictes que les allemandes simplement parce que les deux pays sont souvent discutés séparément. Les deux limitent actuellement la sortie CA de l\'onduleur à 800 W — la différence spécifique à chaque pays réside dans la procédure d\'enregistrement (une déclaration en ligne gratuite auprès du gestionnaire de réseau en France ; un enregistrement au registre Marktstammdatenregister en Allemagne), pas dans la limite de puissance.',
          'Ignorer la consommation au repos du GPU dans l\'estimation du coût mensuel. Une carte au repos à 20–30 W pendant 20 heures par jour ajoute à elle seule environ 0,4 à 0,6 kWh/jour — peu de chose face à un scénario de charge lourde 24h/24, mais pas nul, et à prendre en compte pour un total mensuel exact.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte en électricité l\'exécution d\'un LLM local ?',
            a: 'Pour un usage modéré (un GPU à 300 W fonctionnant 4 heures par jour), environ 6,60 $/mois aux États-Unis à 18,4 ¢/kWh, ou environ 11 à 15 €/mois en Allemagne selon le tarif. Pour un usage lourd 24h/24 sur une carte de 450 W, attendez-vous plutôt à environ 60 $/mois aux États-Unis.',
          },
          {
            q: 'La consommation au repos du GPU compte-t-elle dans la facture d\'électricité ?',
            a: 'Oui, mais moins que la consommation en charge. Une carte au repos à 20–30 W pendant 20 heures par jour consomme environ 0,4 à 0,6 kWh — un ajout modeste mais réel au total, surtout sur un mois complet, et à comptabiliser aux côtés des heures d\'inférence réelle.',
          },
          {
            q: 'Le solaire de balcon peut-il alimenter entièrement une installation de LLM local ?',
            a: 'Pour un usage modéré programmé en journée en été, oui — les 3 à 4,5 kWh/jour produits par un système de 800 W couvrent confortablement une consommation GPU de 1,2 kWh/jour. Pour un usage lourd 24h/24, non, quelle que soit la saison — même la meilleure production estivale couvre bien moins de la moitié d\'une charge de 10,8 kWh/jour.',
          },
          {
            q: 'Combien produit par jour un système solaire de balcon de 800 W ?',
            a: 'Environ 3 à 4,5 kWh par une journée d\'été claire avec des panneaux orientés au sud, et environ 0,5 à 1,5 kWh/jour en hiver — un écart saisonnier d\'un facteur 3 à 7, basé sur des données de production solaire allemandes (le climat allemand est un indicateur raisonnable pour une grande partie de l\'Europe centrale et du Nord).',
          },
          {
            q: 'Quelle taille de batterie me faut-il pour une installation de LLM local ?',
            a: 'Dimensionnez-la selon la consommation quotidienne réelle en kWh de votre GPU, pas selon la puissance nominale de 800 W du solaire. Pour une consommation modérée de 1,2 kWh/jour, une unité seule comme le BLUETTI AC180 (1,15 kWh) ou l\'AC180P (1,44 kWh) couvre environ une journée de stockage. Pour un usage lourd 24h/24, aucune unité seule de ce comparatif ne s\'en approche — il faudrait empiler plusieurs modules d\'extension (Zendure SolarFlow jusqu\'à 7,68 kWh, Jackery HomePower 2000 Ultra jusqu\'à 8 kWh).',
          },
          {
            q: 'Un Mac Mini M4 est-il moins coûteux à faire tourner qu\'une RTX 4090 pour l\'IA locale ?',
            a: 'Nettement. Le Mac Mini M4 consomme moins de 5 W au repos et jusqu\'à ~65 W pendant l\'inférence, contre 20–33 W au repos et jusqu\'à 450 W en charge pour la RTX 4090 — pour 4 heures d\'usage par jour, le Mac Mini coûte environ 1,44 $/mois aux États-Unis contre ~6,60 $/mois pour la RTX 4090, et l\'écart se creuse nettement pour des charges de travail plus lourdes et plus longues.',
          },
          {
            q: 'La France a-t-elle une limite de puissance différente de l\'Allemagne pour le solaire de balcon ?',
            a: 'Non — les deux pays limitent actuellement la sortie CA de l\'onduleur enfichable à 800 W. La différence entre les deux pays est procédurale : la France utilise une déclaration en ligne gratuite auprès du gestionnaire de réseau, tandis que l\'Allemagne utilise un enregistrement au registre Marktstammdatenregister. La limite de puissance elle-même est identique.',
          },
          {
            q: 'Une « IA locale verte » alimentée par le solaire est-elle réaliste pour un usage lourd 24h/24 ?',
            a: 'Pas avec un système enfichable légalement limité à 800 W. Le calcul ne soutient pas une prétention de compensation totale pour une installation lourde en permanence, quelle que soit la saison — le solaire réduit sensiblement le coût électrique d\'un usage modéré de LLM local programmé en journée, mais n\'élimine pas le coût de faire tourner un GPU gourmand en continu.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.chooseenergy.com/electricity-rates-by-state/', title: 'Electricity Rates by State (2026)', description: 'Données de prix de l\'électricité résidentielle américaine par État, incluant la moyenne nationale d\'environ 18,4 ¢/kWh utilisée dans ce guide.' },
          { url: 'https://www.stromauskunft.de/strompreise/', title: 'Aktuelle Strompreise (Stromauskunft.de)', description: 'Données de prix de l\'électricité résidentielle allemande selon les tarifs nouveaux clients, la moyenne et les tarifs de secours (Grundversorgung).' },
          { url: 'https://www.techpowerup.com/306765/nvidia-geforce-rtx-4070-has-an-average-gaming-power-draw-of-186-w', title: 'NVIDIA GeForce RTX 4070 Power Draw', description: 'Rapport de TechPowerUp sur les chiffres de consommation officiels de NVIDIA pour la RTX 4070 (repos, lecture vidéo, moyenne en jeu).' },
          { url: 'https://www.xda-developers.com/run-local-llms-one-worlds-priciest-energy-markets/', title: 'Running Local LLMs in a High-Cost Energy Market', description: 'Mesure indépendante de la consommation au repos et en inférence du Mac Mini M4, et de la consommation d\'un cluster multi-unités.' },
          { url: 'https://de.bluettipower.eu/blogs/solarstrom/balkonkraftwerk-800w-ertrag-pro-tag', title: 'Balkonkraftwerk 800W Ertrag pro Tag', description: 'Données du marché allemand sur la production quotidienne d\'un système solaire de balcon de 800 W selon les saisons.' },
          { url: 'https://eu.zendure.com/products/solarflow-hub2000-balcony-power-plant', title: 'Zendure SolarFlow Hub 2000 — Page produit officielle', description: 'Capacité et prix officiels du Hub 2000 et de ses batteries d\'extension.' },
          { url: 'https://eu.jackery.com/products/homepower-2000-ultra', title: 'Jackery HomePower 2000 Ultra — Page produit officielle', description: 'Capacité, prix et spécifications d\'extension officiels du HomePower 2000 Ultra.' },
          { url: 'https://www.bluettipower.com/products/ac180', title: 'BLUETTI AC180 — Page produit officielle', description: 'Capacité et prix officiels de la station d\'alimentation portable AC180.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Ce que coûte un LLM local en électricité — et si le solaire de balcon peut compenser (2026)',
      'description': 'Coût électrique d\'un LLM local calculé : consommation RTX 4090/3090/4070 et Mac Mini M4, coût mensuel aux États-Unis et en Allemagne, et si un solaire de balcon 800 W peut compenser.',
      'datePublished': '2026-09-01',
      'dateModified': '2026-09-01',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'fr',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-llm-electricity-cost-balcony-solar-2026',
      'articleBody': 'Un GPU qui fait tourner un LLM local quelques heures par jour coûte de l\'argent réel et calculable. Un système solaire de balcon de 800 W peut largement couvrir un usage modéré par une journée d\'été ensoleillée, mais ne compense pas une installation lourde et permanente, surtout en hiver.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Utilisateurs de LLM local voulant connaître le coût électrique réel de leur installation et si le solaire de balcon peut le compenser' },
    },
  },
}
