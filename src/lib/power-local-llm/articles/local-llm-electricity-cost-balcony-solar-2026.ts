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
}
