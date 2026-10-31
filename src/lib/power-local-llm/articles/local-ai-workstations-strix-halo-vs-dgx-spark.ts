// Slug: local-ai-workstations-strix-halo-vs-dgx-spark
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-en.webp',
    affiliateDisclosure: true,
    title: 'Local AI Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
    seoTitle: 'Local AI Workstations: Strix Halo vs. DGX Spark Guide',
    intro:
      'A local AI workstation is a compact one-box system with 128 GB or more of unified memory on a 256-bit bus, built to run 100B-class models that no 32–64 GB mini PC can load. In October 2026 the field has three architectures: NVIDIA GB10 (DGX Spark), AMD Strix Halo (Ryzen AI Max+ 395 and PRO 495) and, still on the sidelines, Intel Panther Lake. AMD wins on memory options, x86 compatibility and entry price; NVIDIA wins on measured throughput, CUDA and clustering. Memory prices have pushed several figures up since the summer, so the price table below names a source for each line.',
    metaDescription:
      'Local AI workstations compared: DGX Spark vs. AMD Strix Halo systems from AMD, Framework, HP, GMKtec, Minisforum: memory, tested speed, sourced prices.',
    twitterDescription:
      'DGX Spark vs. AMD Strix Halo: which 128–192 GB local AI workstation to buy, what independent tests show, and why this is not a mini-PC category.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing a 128–192 GB local AI workstation and comparing AMD Strix Halo systems with the NVIDIA DGX Spark',
    primaryTerm: 'local AI workstation',
    targetKeywords: [
      'local ai workstation',
      'dgx spark alternatives',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**Buy AMD Strix Halo for the cheapest 128 GB entry and x86/Windows compatibility; buy the DGX Spark if CUDA, throughput or two-box clustering matter more than price.** An independent vLLM test found the Spark faster in all 18 measured cases, by roughly 2–13× in 16 of them, so the AMD advantage is capacity per dollar, not speed. These machines are a separate class from ordinary Intel Core Ultra mini PCs with 32–64 GB.',
    quickAnswerTop: {
      en: {
        question: 'Which local AI workstation should I buy instead of a DGX Spark?',
        answer:
          'For the lowest 128 GB price, take an AMD Ryzen AI Max+ 395 machine such as the AMD Ryzen AI Halo, Minisforum MS-S1 MAX or GMKtec EVO-X2. For more than 128 GB, the Framework Desktop and the 192 GB Ryzen AI Halo are the options, but at the price of a Spark. Choose the Spark itself when CUDA, fine-tuning or linking two boxes decides the purchase.',
        bullets: [
          'Cheapest 128 GB: AMD Ryzen AI Max+ 395 systems (price table below)',
          'Most memory: 192 GB on Ryzen AI Max+ PRO 495 (Framework Desktop, Ryzen AI Halo)',
          'Fastest in independent tests: the DGX Spark',
          'Not in this class: ordinary mini PCs with 32–64 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: 'tldr' },
      { label: 'Why This Is Not a Mini-PC Category', anchor: 'definition' },
      { label: 'Three Architectures, Three Trade-offs', anchor: 'architectures' },
      { label: 'The Five Machines to Shortlist', anchor: 'shortlist' },
      { label: 'Price Check Across All Machines', anchor: 'prices' },
      { label: 'What Independent Tests Show', anchor: 'performance' },
      { label: 'What Fits in 128 GB vs. 192 GB', anchor: 'capacity' },
      { label: 'Where Intel Stands', anchor: 'intel' },
      { label: 'Which One to Buy', anchor: 'decision' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'AMD Strix Halo workstations undercut the NVIDIA DGX Spark on 128 GB entry price and offer 192 GB, but in the one independent test we found the Spark is faster in every measured case.' },
      { type: 'plain-terms', content: 'Unified memory means the processor and graphics share one large pool of RAM, so a model that would not fit in a graphics card\'s own memory can still load. How fast it then runs depends mostly on memory bandwidth and software, not on the capacity figure.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'Class definition: 128 GB or more of unified memory on a 256-bit LPDDR5X bus (about 256–273 GB/s), in one compact box. This is our editorial definition, not a vendor standard.',
          'Same silicon, different boxes: most machines here use the same Ryzen AI Max+ 395, so cooling, ports, firmware, support and price are what separate them.',
          'The "half the price of a Spark" claim holds only at 128 GB. The 192 GB AMD machines cost about the same as a 128 GB Spark.',
          'Independent vLLM serving tests favour the Spark in all 18 cases; single-user chat speed was not measured in that test.',
          'Intel Panther Lake tops out at 96 GB and is a watch item, not a competitor, for large local models.',
        ],
      },
      definition: {
        id: 'definition',
        title: 'Why This Is Not a Mini-PC Category',
        content: [
          '**An ordinary mini PC with a Core Ultra chip and 32–64 GB of RAM answers a different question: "can I run a 7–32B model quietly on my desk?"** A local AI workstation answers "can I load a 100B-class model at all?". The gap comes from the memory system: a 256-bit LPDDR5X bus feeding both CPU and GPU, soldered to the board, with a large share addressable by the GPU. Mini PCs with two-channel DDR5 modules reach a fraction of that bandwidth. For those machines, see our [ASUS mini PC guide](/power-local-llm/asus-mini-pc-local-ai) and the [mini-PC roundup](/local-llms/best-mini-pcs-local-llm).',
          'This page tracks the class under one name, Local AI Workstations, so these machines are compared with each other and not with entry-level desktops. Macs form a separate category and are covered in the [Mac buying guide](/power-local-llm/best-mac-for-local-ai-2026).',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'Three Architectures, Three Trade-offs',
        content:
          '**The real competition is between platforms, not between the nine brands.** Most of the AMD machines share one processor and differ in cooling, power limits, connectivity, firmware, warranty and price.',
        columns: ['Architecture', 'Memory', 'Main advantage', 'Main limitation'],
        rows: [
          { 'Architecture': 'NVIDIA GB10 (DGX Spark)', 'Memory': '128 GB LPDDR5X, 273 GB/s', 'Main advantage': 'CUDA and NVIDIA AI software, 200 Gbps ConnectX-7 networking for linking boxes', 'Main limitation': 'Memory capped at 128 GB; Arm CPU and DGX OS (Linux) only' },
          { 'Architecture': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', 'Memory': '128 GB (395) or up to 192 GB (PRO 495)', 'Main advantage': 'Most memory per dollar, x86, Windows or Linux', 'Main limitation': 'Software and driver maturity varies by OS and backend (ROCm, Vulkan); 10GbE rather than a high-speed fabric on the Ryzen AI Halo' },
          { 'Architecture': 'Intel Panther Lake (Core Ultra X9 388H)', 'Memory': 'Up to 96 GB, 153.6 GB/s', 'Main advantage': 'New Arc graphics and NPU', 'Main limitation': 'Less memory and bandwidth than both rivals' },
        ],
        note: 'Spark figures are from NVIDIA\'s product page; Intel figures are from NanoReview\'s spec database. The 192 GB PRO 495 bandwidth is not stated by Framework or AMD in the sources we read; the 256-bit bus at 8533 MT/s works out to roughly 273 GB/s by arithmetic, which we have not seen independently measured.',
      },
      shortlist: {
        id: 'shortlist',
        title: 'The Five Machines to Shortlist',
        content:
          '**Five machines cover the real buying decisions: the most memory, the vendor reference design, the business option, the best value and the expandable workstation.** This is an editorial selection from spec sheets and third-party reports; PromptQuorum has not benchmarked any of them. Links go to vendor pages with no affiliate relationship.',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: 'Most memory, modular and repairable',
            verdict:
              'Ryzen AI Max+ PRO 495 with 192 GB of LPDDR5X-8533 in a 4.5 L case, offered as a DIY Edition or pre-built with Fedora. Framework opened pre-orders on 30 September 2026 for one batch only, with first shipments expected in November. The PRO 495 configuration has an open PCIe x4 slot and supports USB4 and PCIe clustering.',
            pros: [
              'More memory than a DGX Spark in a standard, repairable chassis',
              'Open PCIe slot and a documented DIY path',
            ],
            cons: [
              'Pre-order only; the November ship date is an expectation',
              '192 GB comes only as preconfigured memory, at a Spark-level price',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — official page →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'AMD\'s own answer to the DGX Spark',
            verdict:
              'AMD\'s developer platform: Ryzen AI Max+ 395 with 128 GB of LPDDR5x-8000 (256 GB/s), a 2 TB SSD, 10GbE and a choice of Windows 11 Pro or AMD\'s Linux developer image. A 192 GB PRO 495 version has been reported at retail. StorageReview\'s test found it clearly slower than the Spark in vLLM serving, with no high-speed fabric for clustering.',
            pros: [
              'Preconfigured AI software stack and dual-OS support',
              'Lowest-risk way to get the 395 platform from AMD itself',
            ],
            cons: [
              'US availability through Micro Center only, per launch coverage',
              'Single 10GbE port, so no multi-box scaling like the Spark',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: 'The business-channel option',
            verdict:
              'Ryzen AI Max+ PRO 395 with up to 128 GB in HP\'s Z workstation line, sold through business and reseller channels with a wide price spread. It is the same platform as the cheaper boxes; you pay for the HP warranty and procurement path.',
            pros: [
              'Established enterprise support and purchasing channels',
              'Same 128 GB platform as the boutique machines',
            ],
            cons: [
              'HP\'s own US price is above every boutique 128 GB machine we found',
              'Prices differ strongly by reseller and storage size',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: 'Value pick on the same processor',
            verdict:
              'Ryzen AI Max+ 395 with 128 GB, among the first boutique Strix Halo boxes. Its store price changes dynamically, and listings we saw ranged widely, so check the live page. It uses the same processor as the machines above, so the case for it is price, not performance.',
            pros: [
              'Several third-party reviews exist',
              'Often among the lower-priced 128 GB options',
            ],
            cons: [
              'Warranty and support terms are the vendor\'s own; check them before buying',
              'Price and configuration listings conflict across sellers',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — official page →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'Workstation-oriented design',
            verdict:
              'Ryzen AI Max+ 395 with 128 GB LPDDR5x-8000, dual 10GbE, USB4 v2 and a PCIe x16 expansion slot, with 2U rack-mount support. Its US store listed the 128 GB / 2 TB model on sale when we checked, with shipping estimated for early November. A 192 GB MS-S1 MAX-P495 has been reported on pre-order.',
            pros: [
              'Dual 10GbE and an expansion slot, unusual in this class',
              'Rack-mount option for office or lab use',
            ],
            cons: [
              'Regular price is 25% above the sale price',
              'Seller warranty of 2 years on the US store',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — official store →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: 'Product links, no affiliate relationship. Specifications come from vendor pages and the cited reports; availability and configurations change.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'Price Check Across All Machines',
        content:
          '**Every figure below is a US price from the stated source at the time of the last refresh (see the Last updated date); none is converted from another currency.** Memory shortages have raised prices repeatedly in 2026, and several lines conflict between sellers, so treat the table as a snapshot and open the vendor page before ordering. European prices differ and are not listed because we could not verify them.',
        columns: ['Machine', 'Chip and memory', 'US price seen', 'Status and source note'],
        rows: [
          { 'Machine': 'NVIDIA DGX Spark', 'Chip and memory': 'GB10, 128 GB', 'US price seen': '$6,950', 'Status and source note': 'Reported 2026-10-03 by ServeTheHome; launched at $3,999, Founders Edition $4,699 earlier in 2026; OEM 64 GB models from $4,999' },
          { 'Machine': 'AMD Ryzen AI Halo', 'Chip and memory': '395, 128 GB', 'US price seen': '$3,999', 'Status and source note': '2 TB SSD; Micro Center per launch coverage' },
          { 'Machine': 'AMD Ryzen AI Halo 192GB', 'Chip and memory': 'PRO 495, 192 GB', 'US price seen': '$7,299', 'Status and source note': 'Single report (VideoCardz); not confirmed on a retailer page' },
          { 'Machine': 'Framework Desktop 192GB', 'Chip and memory': 'PRO 495, 192 GB', 'US price seen': '$6,799 DIY / $7,449 pre-built', 'Status and source note': 'Pre-order, one batch, ships November (Phoronix, Framework)' },
          { 'Machine': 'Framework Desktop 128GB', 'Chip and memory': '395, 128 GB', 'US price seen': '$3,449', 'Status and source note': 'Quoted by Phoronix for comparison' },
          { 'Machine': 'Minisforum MS-S1 MAX', 'Chip and memory': '395, 128 GB', 'US price seen': '$3,919 sale / $4,899 regular', 'Status and source note': '128 GB / 2 TB on the Minisforum US store; early-November shipping' },
          { 'Machine': 'HP Z2 Mini G1a', 'Chip and memory': 'PRO 395, 128 GB', 'US price seen': '$3,734 to $5,079', 'Status and source note': 'Newegg 128 GB / 1 TB vs. HP US price reported by Notebookcheck for 128 GB / 2 TB' },
          { 'Machine': 'GMKtec EVO-X2', 'Chip and memory': '395, 128 GB', 'US price seen': 'about $3,650', 'Status and source note': 'One October 2026 comparison listing for 128 GB / 2 TB; the GMKtec store price changes dynamically' },
          { 'Machine': 'Corsair AI Workstation 300', 'Chip and memory': '395, 128 GB', 'US price seen': '$3,399', 'Status and source note': 'Tom\'s Hardware report; report date not confirmed' },
          { 'Machine': 'Beelink GTR9 Pro', 'Chip and memory': '395, 128 GB', 'US price seen': 'not verified', 'Status and source note': 'US listings conflict; a PRO 495 variant is priced in China only, so far' },
          { 'Machine': 'Bosgame M5', 'Chip and memory': '395, 128 GB', 'US price seen': 'not verified', 'Status and source note': 'No current price found' },
        ],
        note: 'We could not verify the MSI PRO MAX EDGE AI+ 11M, so it is not listed. Prices that were not on a vendor page we opened ourselves are attributed to the publication that reported them.',
      },
      performance: {
        id: 'performance',
        title: 'What Independent Tests Show',
        content: [
          '**The only head-to-head we found with published numbers is StorageReview\'s Ryzen AI Halo vs. DGX Spark test, and the Spark won every case.** It ran vLLM online serving on Linux at batch 64 across six models. The Spark led by roughly 2–13× in 16 of the 18 scenarios and by about 11–12% in the other two, both decode-heavy runs of smaller dense models. The widest gaps appeared on prefill-heavy work and on the FP4 model, which suits Blackwell hardware.',
          'That test measures multi-request serving throughput. Single-user chat speed depends mostly on memory bandwidth, which is close between the two (256 vs. 273 GB/s), so we would expect a smaller gap there, but it is an expectation and was not measured in that test. AMD\'s own published comparisons, including those against Intel, are vendor tests and not independent benchmarks.',
        ],
        note: 'StorageReview\'s review was published 2026-07-06 and modified 2026-10-29. Software moves quickly on both platforms, so re-check before relying on a ratio.',
      },
      capacity: {
        id: 'capacity',
        title: 'What Fits in 128 GB vs. 192 GB',
        content:
          '**Capacity decides what loads; bandwidth and software decide how fast it runs.** The table is quantisation arithmetic (parameters × bits per weight, plus working space for context), not a benchmark.',
        columns: ['Model class', 'Quantisation', 'Weights alone', '128 GB machine', '192 GB machine'],
        rows: [
          { 'Model class': '70B dense', 'Quantisation': '8-bit', 'Weights alone': '~70 GB', '128 GB machine': 'Fits, room for context', '192 GB machine': 'Fits comfortably' },
          { 'Model class': '120B-class', 'Quantisation': '4-bit', 'Weights alone': '~60–70 GB', '128 GB machine': 'Fits comfortably', '192 GB machine': 'Fits with large context' },
          { 'Model class': '200B-class', 'Quantisation': '4-bit', 'Weights alone': '~100 GB', '128 GB machine': 'Tight once context is added', '192 GB machine': 'Fits' },
          { 'Model class': '300B-class', 'Quantisation': '4-bit', 'Weights alone': '~150 GB', '128 GB machine': 'Does not fit', '192 GB machine': 'Fits with limited context' },
        ],
        note: 'Not all memory is available to the GPU by default. How much memory the GPU can address depends on OS, kernel and driver settings, and StorageReview notes the Ryzen AI Halo ships with its variable graphics memory preset to the maximum. Check the vendor guide for your OS and backend (Vulkan or ROCm).',
      },
      intel: {
        id: 'intel',
        title: 'Where Intel Stands',
        content: [
          '**Intel\'s Panther Lake platform is worth watching but is not yet a large-model machine.** The Core Ultra X9 388H with Arc B390 graphics supports up to 96 GB at 153.6 GB/s according to NanoReview, against 192 GB at 256 GB/s for the PRO 495. HotHardware found the Arc B390 ahead of Strix Halo in some OpenVINO workloads, while Strix Halo led in ONNX. Those results compare against the 395, not the PRO 495.',
          'The HP Z2 Mini G1i is a different design again: an Intel workstation with a discrete NVIDIA RTX 4000 SFF Ada card, which means dedicated GPU memory rather than one large shared pool. It belongs in a broader workstation comparison, not in this one.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Which One to Buy',
        items: [
          '**Cheapest way into 128 GB:** an AMD Ryzen AI Max+ 395 machine (Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). Compare current prices, since they are volatile.',
          '**More than 128 GB:** Framework Desktop 192GB or the 192 GB Ryzen AI Halo, accepting a price near a Spark\'s and a pre-order or limited-retail wait.',
          '**Fastest measured serving, CUDA, fine-tuning or two linked boxes:** the DGX Spark, now at a much higher price than at launch.',
          '**Business purchasing and warranty:** HP Z2 Mini G1a.',
          '**Not this class:** anyone whose models fit in 32–64 GB should read the mini-PC guides first.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          'Reading 192 GB as "faster than 128 GB". It loads larger models and longer contexts; speed still follows bandwidth, compute and software.',
          'Treating nine Strix Halo boxes as nine different processors. Check cooling, power limits, ports and warranty instead of the spec-sheet chip name.',
          'Buying on a launch-era price. Several figures in this class have risen since the summer; the table carries dates for that reason.',
          'Assuming all unified memory is usable by the GPU. Allocation limits depend on OS, BIOS and backend.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is the AMD Ryzen AI Halo faster than the DGX Spark?',
            a: 'No, in the independent test we found. StorageReview measured the Spark ahead in all 18 vLLM serving scenarios, though two decode-heavy runs were within about 12%.',
          },
          {
            q: 'Can a 192 GB machine run models a Spark cannot?',
            a: 'Yes, in terms of loading: a roughly 300B-class 4-bit model needs about 150 GB for weights alone. Whether it runs at a usable speed depends on bandwidth and software.',
          },
          {
            q: 'Do I need ROCm to run models on Strix Halo?',
            a: 'Not necessarily. llama.cpp can also run through Vulkan; which backend is faster depends on kernel and driver versions, so test both on your setup.',
          },
          {
            q: 'Why not include Apple Silicon?',
            a: 'Macs are a separate category with their own memory tiers and software; see the Mac buying guide linked above.',
          },
          {
            q: 'Is a Core Ultra mini PC with 64 GB a DGX Spark competitor?',
            a: 'No. It has half the memory at best and a far narrower memory bus, so it competes with the mini PCs in our other guides.',
          },
          {
            q: 'Are these machines good for fine-tuning?',
            a: 'NVIDIA states the Spark supports fine-tuning up to 70B parameters; we found no comparable vendor claim or independent test for the AMD machines.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: 'GB10 specs: 128 GB LPDDR5X, 273 GB/s, 200 Gbps networking, DGX OS, 200B inference claim.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: 'October 2026 report of the $6,950 128 GB price and $4,999 64 GB OEM models.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'vLLM serving results, platform notes, $3,999 Halo and $4,699 Founders Edition prices at review time.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: '128 GB Ryzen AI Halo at $3,999 with Windows 11 support.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: 'Report of the 192 GB Ryzen AI Halo price.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: '192 GB pre-order pricing, November shipping, 128 GB comparison price.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: 'PRO 495 configuration, memory options, chassis and expansion details.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: 'Specifications, sale and regular prices, shipping estimate.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: 'HP US prices for 128 GB configurations.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Corsair 395 / 128 GB price report.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Memory capacity and bandwidth figures for the Intel and AMD chips.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: 'OpenVINO and ONNX comparisons against Ryzen AI Max+ 395.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Local AI Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
      'description': 'Local AI workstations compared: DGX Spark vs. AMD Strix Halo systems from AMD, Framework, HP, GMKtec, Minisforum: memory, tested speed, sourced prices.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
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
      'url': 'https://www.promptquorum.com/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': 'Buy AMD Strix Halo for the cheapest 128 GB entry and x86 compatibility; buy the DGX Spark if CUDA, throughput or clustering matter more than price.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Buyers choosing a 128–192 GB local AI workstation and comparing AMD Strix Halo systems with the NVIDIA DGX Spark' },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-de.webp',
    affiliateDisclosure: true,
    title: 'Lokale KI-Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
    seoTitle: 'Lokale KI-Workstations: Strix Halo vs. DGX Spark Ratgeber',
    intro:
      'Eine lokale KI-Workstation ist ein kompaktes Ein-Gehäuse-System mit 128 GB oder mehr Unified Memory an einem 256-Bit-Speicherbus, gebaut für Modelle der 100B-Klasse, die kein Mini-PC mit 32–64 GB laden kann. Im Oktober 2026 gibt es drei Architekturen: NVIDIA GB10 (DGX Spark), AMD Strix Halo (Ryzen AI Max+ 395 und PRO 495) und, noch am Rand, Intel Panther Lake. AMD gewinnt bei Speicheroptionen, x86-Kompatibilität und Einstiegspreis; NVIDIA gewinnt bei gemessenem Durchsatz, CUDA und Clustering. Die Speicherpreise haben mehrere Zahlen seit dem Sommer nach oben getrieben, daher nennt die Preistabelle unten für jede Zeile eine Quelle.',
    metaDescription:
      'Lokale KI-Workstations im Vergleich: DGX Spark vs. AMD Strix Halo von AMD, Framework, HP, GMKtec, Minisforum — Speicher, Tempo, belegte Preise.',
    twitterDescription:
      'DGX Spark vs. AMD Strix Halo: welche lokale KI-Workstation mit 128–192 GB sich lohnt, was unabhängige Tests zeigen und warum das keine Mini-PC-Kategorie ist.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die eine lokale KI-Workstation mit 128–192 GB auswählen und AMD-Strix-Halo-Systeme mit der NVIDIA DGX Spark vergleichen',
    primaryTerm: 'lokale KI-Workstation',
    targetKeywords: [
      'lokale ki workstation',
      'dgx spark alternativen',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**Kaufen Sie AMD Strix Halo für den günstigsten Einstieg mit 128 GB und x86-/Windows-Kompatibilität; kaufen Sie die DGX Spark, wenn CUDA, Durchsatz oder das Koppeln zweier Geräte wichtiger sind als der Preis.** Ein unabhängiger vLLM-Test sah die Spark in allen 18 gemessenen Fällen vorn, in 16 davon um etwa das 2- bis 13-Fache; der AMD-Vorteil ist also Kapazität pro Dollar, nicht Geschwindigkeit. Diese Geräte bilden eine eigene Klasse neben gewöhnlichen Intel-Core-Ultra-Mini-PCs mit 32–64 GB.',
    quickAnswerTop: {
      de: {
        question: 'Welche lokale KI-Workstation sollte ich statt einer DGX Spark kaufen?',
        answer:
          'Für den niedrigsten Preis bei 128 GB nehmen Sie einen Rechner mit AMD Ryzen AI Max+ 395, etwa den AMD Ryzen AI Halo, den Minisforum MS-S1 MAX oder den GMKtec EVO-X2. Für mehr als 128 GB kommen das Framework Desktop und der Ryzen AI Halo mit 192 GB infrage, allerdings zum Preis einer Spark. Wählen Sie die Spark selbst, wenn CUDA, Fine-Tuning oder das Koppeln zweier Geräte die Kaufentscheidung bestimmen.',
        bullets: [
          'Günstigste 128 GB: Systeme mit AMD Ryzen AI Max+ 395 (Preistabelle unten)',
          'Meiste Speicher: 192 GB beim Ryzen AI Max+ PRO 495 (Framework Desktop, Ryzen AI Halo)',
          'Am schnellsten in unabhängigen Tests: die DGX Spark',
          'Nicht in dieser Klasse: gewöhnliche Mini-PCs mit 32–64 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Warum das keine Mini-PC-Kategorie ist', anchor: 'definition' },
      { label: 'Drei Architekturen, drei Kompromisse', anchor: 'architectures' },
      { label: 'Die fünf Geräte in der engeren Wahl', anchor: 'shortlist' },
      { label: 'Preisüberblick aller Geräte', anchor: 'prices' },
      { label: 'Was unabhängige Tests zeigen', anchor: 'performance' },
      { label: 'Was in 128 GB bzw. 192 GB passt', anchor: 'capacity' },
      { label: 'Wo Intel steht', anchor: 'intel' },
      { label: 'Welches Gerät Sie kaufen sollten', anchor: 'decision' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'AMD-Strix-Halo-Workstations unterbieten die NVIDIA DGX Spark beim Einstiegspreis mit 128 GB und bieten bis zu 192 GB, doch im einzigen unabhängigen Test, den wir gefunden haben, ist die Spark in jedem gemessenen Fall schneller.' },
      { type: 'plain-terms', content: 'Unified Memory bedeutet, dass Prozessor und Grafikeinheit sich einen großen RAM-Pool teilen; ein Modell, das nicht in den eigenen Speicher einer Grafikkarte passt, lässt sich so trotzdem laden. Wie schnell es dann läuft, hängt vor allem von Speicherbandbreite und Software ab, nicht von der Kapazitätsangabe.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Klassendefinition: 128 GB oder mehr Unified Memory an einem 256-Bit-LPDDR5X-Bus (etwa 256–273 GB/s) in einem kompakten Gehäuse. Das ist unsere redaktionelle Definition, kein Herstellerstandard.',
          'Gleiches Silizium, andere Gehäuse: Die meisten Geräte hier nutzen denselben Ryzen AI Max+ 395, daher unterscheiden Kühlung, Anschlüsse, Firmware, Support und Preis sie voneinander.',
          'Die Aussage „halber Preis einer Spark“ gilt nur bei 128 GB. Die AMD-Geräte mit 192 GB kosten etwa so viel wie eine Spark mit 128 GB.',
          'Unabhängige vLLM-Serving-Tests sehen die Spark in allen 18 Fällen vorn; die Chat-Geschwindigkeit für einen einzelnen Nutzer wurde in diesem Test nicht gemessen.',
          'Intel Panther Lake endet bei 96 GB und ist für große lokale Modelle ein Beobachtungskandidat, kein Konkurrent.',
        ],
      },
      definition: {
        id: 'definition',
        title: 'Warum das keine Mini-PC-Kategorie ist',
        content: [
          '**Ein gewöhnlicher Mini-PC mit Core-Ultra-Chip und 32–64 GB RAM beantwortet eine andere Frage: „Kann ich ein 7–32B-Modell leise auf meinem Schreibtisch betreiben?“** Eine lokale KI-Workstation beantwortet: „Kann ich überhaupt ein Modell der 100B-Klasse laden?“. Der Unterschied liegt im Speichersystem: ein 256-Bit-LPDDR5X-Bus, der CPU und GPU versorgt, auf die Platine gelötet, mit einem großen Anteil, den die GPU adressieren kann. Mini-PCs mit zweikanaligen DDR5-Modulen erreichen nur einen Bruchteil dieser Bandbreite. Zu diesen Geräten siehe unseren [ASUS-Mini-PC-Ratgeber](/de/power-local-llm/asus-mini-pc-local-ai) und die [Mini-PC-Übersicht](/de/local-llms/best-mini-pcs-local-llm).',
          'Diese Seite führt die Klasse unter einem Namen, Lokale KI-Workstations, damit die Geräte untereinander verglichen werden und nicht mit Einsteiger-Desktops. Macs bilden eine eigene Kategorie und werden im [Mac-Kaufratgeber](/de/power-local-llm/best-mac-for-local-ai-2026) behandelt.',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'Drei Architekturen, drei Kompromisse',
        content:
          '**Der eigentliche Wettbewerb findet zwischen Plattformen statt, nicht zwischen den neun Marken.** Die meisten AMD-Geräte teilen sich einen Prozessor und unterscheiden sich bei Kühlung, Leistungsgrenzen, Anschlüssen, Firmware, Garantie und Preis.',
        columns: ['Architektur', 'Speicher', 'Hauptvorteil', 'Hauptnachteil'],
        rows: [
          { 'Architektur': 'NVIDIA GB10 (DGX Spark)', 'Speicher': '128 GB LPDDR5X, 273 GB/s', 'Hauptvorteil': 'CUDA und NVIDIA-KI-Software, 200-Gbit/s-ConnectX-7-Netzwerk zum Koppeln', 'Hauptnachteil': 'Speicher auf 128 GB begrenzt; Arm-CPU, nur DGX OS (Linux)' },
          { 'Architektur': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', 'Speicher': '128 GB (395) oder bis zu 192 GB (PRO 495)', 'Hauptvorteil': 'Meiste Speicher pro Dollar, x86, Windows oder Linux', 'Hauptnachteil': 'Software- und Treiberreife variiert je nach Betriebssystem und Backend (ROCm, Vulkan); 10GbE statt schneller Fabric beim Ryzen AI Halo' },
          { 'Architektur': 'Intel Panther Lake (Core Ultra X9 388H)', 'Speicher': 'Bis zu 96 GB, 153,6 GB/s', 'Hauptvorteil': 'Neue Arc-Grafik und NPU', 'Hauptnachteil': 'Weniger Speicher und Bandbreite als beide Konkurrenten' },
        ],
        note: 'Die Spark-Angaben stammen von der Produktseite von NVIDIA, die Intel-Angaben aus der Spezifikationsdatenbank von NanoReview. Die Bandbreite des 192-GB-PRO-495 nennen Framework und AMD in den von uns gelesenen Quellen nicht; der 256-Bit-Bus bei 8533 MT/s ergibt rechnerisch etwa 273 GB/s, was wir nirgends unabhängig gemessen gesehen haben.',
      },
      shortlist: {
        id: 'shortlist',
        title: 'Die fünf Geräte in der engeren Wahl',
        content:
          '**Fünf Geräte decken die echten Kaufentscheidungen ab: den meisten Speicher, das Referenzdesign des Herstellers, die Business-Option, das beste Preis-Leistungs-Verhältnis und die erweiterbare Workstation.** Das ist eine redaktionelle Auswahl aus Datenblättern und Berichten Dritter; PromptQuorum hat keines der Geräte selbst gebenchmarkt. Die Links führen zu Herstellerseiten ohne Affiliate-Beziehung.',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: 'Meiste Speicher, modular und reparierbar',
            verdict:
              'Ryzen AI Max+ PRO 495 mit 192 GB LPDDR5X-8533 in einem 4,5-Liter-Gehäuse, erhältlich als DIY Edition oder vorkonfektioniert mit Fedora. Framework hat am 30. September 2026 Vorbestellungen für nur eine Charge geöffnet; die ersten Auslieferungen werden im November erwartet. Die PRO-495-Konfiguration hat einen offenen PCIe-x4-Steckplatz und unterstützt USB4- und PCIe-Clustering.',
            pros: [
              'Mehr Speicher als eine DGX Spark in einem Standardgehäuse, das sich reparieren lässt',
              'Offener PCIe-Steckplatz und ein dokumentierter DIY-Weg',
            ],
            cons: [
              'Nur auf Vorbestellung; der Liefertermin im November ist eine Erwartung',
              '192 GB gibt es nur als vorkonfigurierten Speicher, zu einem Preis auf Spark-Niveau',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — offizielle Seite →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'Die Antwort von AMD auf die DGX Spark',
            verdict:
              'Die Entwicklerplattform von AMD: Ryzen AI Max+ 395 mit 128 GB LPDDR5x-8000 (256 GB/s), 2-TB-SSD, 10GbE und wahlweise Windows 11 Pro oder dem Linux-Entwickler-Image von AMD. Eine Version mit 192 GB und PRO 495 wurde im Handel gemeldet. Der Test von StorageReview sah das Gerät beim vLLM-Serving deutlich langsamer als die Spark, ohne schnelle Fabric zum Clustering.',
            pros: [
              'Vorkonfigurierter KI-Software-Stack und Unterstützung für zwei Betriebssysteme',
              'Risikoärmster Weg zur 395-Plattform direkt von AMD',
            ],
            cons: [
              'Laut Berichten zum Marktstart in den USA nur über Micro Center erhältlich',
              'Ein einziger 10GbE-Anschluss, daher keine Skalierung über mehrere Geräte wie bei der Spark',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: 'Die Option für den Business-Kanal',
            verdict:
              'Ryzen AI Max+ PRO 395 mit bis zu 128 GB in der Z-Workstation-Reihe von HP, verkauft über Business- und Reseller-Kanäle mit großer Preisspanne. Es ist dieselbe Plattform wie bei den günstigeren Geräten; Sie zahlen für die HP-Garantie und den Beschaffungsweg.',
            pros: [
              'Etablierter Enterprise-Support und Einkaufskanäle',
              'Dieselbe 128-GB-Plattform wie bei den Boutique-Geräten',
            ],
            cons: [
              'Der US-Preis von HP selbst liegt über jedem Boutique-Gerät mit 128 GB, das wir gefunden haben',
              'Preise unterscheiden sich stark je nach Reseller und Speichergröße',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: 'Preis-Leistungs-Tipp mit demselben Prozessor',
            verdict:
              'Ryzen AI Max+ 395 mit 128 GB, eines der ersten Boutique-Strix-Halo-Geräte. Der Preis im Hersteller-Shop ändert sich dynamisch, und die von uns gesehenen Angebote lagen weit auseinander; prüfen Sie daher die aktuelle Seite. Es nutzt denselben Prozessor wie die oben genannten Geräte, das Argument dafür ist also der Preis, nicht die Leistung.',
            pros: [
              'Es gibt mehrere Tests von Dritten',
              'Oft unter den günstigeren Optionen mit 128 GB',
            ],
            cons: [
              'Garantie- und Supportbedingungen sind die des Herstellers; vor dem Kauf prüfen',
              'Preis- und Konfigurationsangaben widersprechen sich zwischen Anbietern',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — offizielle Seite →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'Auf Workstation-Einsatz ausgelegtes Design',
            verdict:
              'Ryzen AI Max+ 395 mit 128 GB LPDDR5x-8000, zwei 10GbE-Anschlüssen, USB4 v2 und einem PCIe-x16-Erweiterungssteckplatz, mit Unterstützung für 2U-Rackmontage. Der US-Shop führte das Modell mit 128 GB / 2 TB bei unserer Prüfung als Angebot, mit geschätztem Versand Anfang November. Ein MS-S1 MAX-P495 mit 192 GB wurde als Vorbestellung gemeldet.',
            pros: [
              'Zwei 10GbE-Anschlüsse und ein Erweiterungssteckplatz, in dieser Klasse ungewöhnlich',
              'Rackmontage-Option für Büro oder Labor',
            ],
            cons: [
              'Der reguläre Preis liegt 25 % über dem Angebotspreis',
              'Händlergarantie von 2 Jahren im US-Shop',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — offizieller Shop →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: 'Produktlinks, keine Affiliate-Beziehung. Die Spezifikationen stammen von Herstellerseiten und den genannten Berichten; Verfügbarkeit und Konfigurationen ändern sich.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'Preisüberblick aller Geräte',
        content:
          '**Jede Angabe unten ist ein US-Preis aus der genannten Quelle zum Zeitpunkt der letzten Aktualisierung (siehe Aktualisierungsdatum); keine ist aus einer anderen Währung umgerechnet.** Speicherknappheit hat die Preise 2026 mehrfach angehoben, und mehrere Zeilen widersprechen sich zwischen Anbietern; betrachten Sie die Tabelle daher als Momentaufnahme und öffnen Sie vor der Bestellung die Herstellerseite. Europäische Preise weichen ab und sind nicht aufgeführt, weil wir sie nicht verifizieren konnten.',
        columns: ['Gerät', 'Chip und Speicher', 'US-Preis (gesehen)', 'Status und Quellenhinweis'],
        rows: [
          { 'Gerät': 'NVIDIA DGX Spark', 'Chip und Speicher': 'GB10, 128 GB', 'US-Preis (gesehen)': '6.950 $', 'Status und Quellenhinweis': 'Am 2026-10-03 von ServeTheHome gemeldet; Marktstart bei 3.999 $, Founders Edition 4.699 $ Anfang 2026; OEM-Modelle mit 64 GB ab 4.999 $' },
          { 'Gerät': 'AMD Ryzen AI Halo', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': '3.999 $', 'Status und Quellenhinweis': '2-TB-SSD; Micro Center laut Berichten zum Marktstart' },
          { 'Gerät': 'AMD Ryzen AI Halo 192GB', 'Chip und Speicher': 'PRO 495, 192 GB', 'US-Preis (gesehen)': '7.299 $', 'Status und Quellenhinweis': 'Einzelner Bericht (VideoCardz); auf keiner Händlerseite bestätigt' },
          { 'Gerät': 'Framework Desktop 192GB', 'Chip und Speicher': 'PRO 495, 192 GB', 'US-Preis (gesehen)': '6.799 $ DIY / 7.449 $ vorkonfektioniert', 'Status und Quellenhinweis': 'Vorbestellung, eine Charge, Versand im November (Phoronix, Framework)' },
          { 'Gerät': 'Framework Desktop 128GB', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': '3.449 $', 'Status und Quellenhinweis': 'Von Phoronix zum Vergleich genannt' },
          { 'Gerät': 'Minisforum MS-S1 MAX', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': '3.919 $ Angebot / 4.899 $ regulär', 'Status und Quellenhinweis': '128 GB / 2 TB im US-Shop von Minisforum; Versand Anfang November' },
          { 'Gerät': 'HP Z2 Mini G1a', 'Chip und Speicher': 'PRO 395, 128 GB', 'US-Preis (gesehen)': '3.734 $ bis 5.079 $', 'Status und Quellenhinweis': 'Newegg 128 GB / 1 TB vs. HP-US-Preis für 128 GB / 2 TB laut Notebookcheck' },
          { 'Gerät': 'GMKtec EVO-X2', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': 'etwa 3.650 $', 'Status und Quellenhinweis': 'Eine Vergleichsliste vom Oktober 2026 für 128 GB / 2 TB; der Shop-Preis von GMKtec ändert sich dynamisch' },
          { 'Gerät': 'Corsair AI Workstation 300', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': '3.399 $', 'Status und Quellenhinweis': 'Bericht von Tom\'s Hardware; Berichtsdatum nicht bestätigt' },
          { 'Gerät': 'Beelink GTR9 Pro', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': 'nicht verifiziert', 'Status und Quellenhinweis': 'US-Angebote widersprechen sich; eine PRO-495-Variante hat bisher nur in China einen Preis' },
          { 'Gerät': 'Bosgame M5', 'Chip und Speicher': '395, 128 GB', 'US-Preis (gesehen)': 'nicht verifiziert', 'Status und Quellenhinweis': 'Kein aktueller Preis gefunden' },
        ],
        note: 'Den MSI PRO MAX EDGE AI+ 11M konnten wir nicht verifizieren, daher ist er nicht aufgeführt. Preise, die nicht auf einer von uns selbst geöffneten Herstellerseite standen, sind der Publikation zugeordnet, die sie gemeldet hat.',
      },
      performance: {
        id: 'performance',
        title: 'Was unabhängige Tests zeigen',
        content: [
          '**Der einzige Direktvergleich mit veröffentlichten Zahlen, den wir gefunden haben, ist der Test von StorageReview zu Ryzen AI Halo vs. DGX Spark, und die Spark gewann jeden Fall.** Er nutzte vLLM-Online-Serving unter Linux bei Batch 64 über sechs Modelle. Die Spark lag in 16 der 18 Szenarien um etwa das 2- bis 13-Fache vorn und in den übrigen zwei um rund 11–12 %, beides Decode-lastige Läufe kleinerer dichter Modelle. Die größten Abstände zeigten sich bei Prefill-lastiger Arbeit und beim FP4-Modell, das zur Blackwell-Hardware passt.',
          'Dieser Test misst den Durchsatz bei mehreren gleichzeitigen Anfragen. Die Chat-Geschwindigkeit für einen einzelnen Nutzer hängt vor allem von der Speicherbandbreite ab, die bei beiden nah beieinander liegt (256 vs. 273 GB/s); wir würden dort einen kleineren Abstand erwarten, doch das ist eine Erwartung und wurde in diesem Test nicht gemessen. Die von AMD selbst veröffentlichten Vergleiche, auch gegen Intel, sind Herstellertests und keine unabhängigen Benchmarks.',
        ],
        note: 'Der Test von StorageReview wurde am 2026-07-06 veröffentlicht und am 2026-10-29 geändert. Die Software entwickelt sich auf beiden Plattformen schnell; prüfen Sie daher erneut, bevor Sie sich auf ein Verhältnis verlassen.',
      },
      capacity: {
        id: 'capacity',
        title: 'Was in 128 GB bzw. 192 GB passt',
        content:
          '**Die Kapazität entscheidet, was sich laden lässt; Bandbreite und Software entscheiden, wie schnell es läuft.** Die Tabelle ist Quantisierungsarithmetik (Parameter × Bit pro Gewicht, plus Arbeitsspeicher für den Kontext), kein Benchmark.',
        columns: ['Modellklasse', 'Quantisierung', 'Nur Gewichte', 'Gerät mit 128 GB', 'Gerät mit 192 GB'],
        rows: [
          { 'Modellklasse': '70B dicht', 'Quantisierung': '8-Bit', 'Nur Gewichte': '~70 GB', 'Gerät mit 128 GB': 'Passt, Platz für Kontext', 'Gerät mit 192 GB': 'Passt bequem' },
          { 'Modellklasse': '120B-Klasse', 'Quantisierung': '4-Bit', 'Nur Gewichte': '~60–70 GB', 'Gerät mit 128 GB': 'Passt bequem', 'Gerät mit 192 GB': 'Passt mit großem Kontext' },
          { 'Modellklasse': '200B-Klasse', 'Quantisierung': '4-Bit', 'Nur Gewichte': '~100 GB', 'Gerät mit 128 GB': 'Knapp, sobald Kontext dazukommt', 'Gerät mit 192 GB': 'Passt' },
          { 'Modellklasse': '300B-Klasse', 'Quantisierung': '4-Bit', 'Nur Gewichte': '~150 GB', 'Gerät mit 128 GB': 'Passt nicht', 'Gerät mit 192 GB': 'Passt mit begrenztem Kontext' },
        ],
        note: 'Standardmäßig steht nicht der gesamte Speicher der GPU zur Verfügung. Wie viel Speicher die GPU adressieren kann, hängt von Betriebssystem, Kernel- und Treibereinstellungen ab, und StorageReview vermerkt, dass der Ryzen AI Halo mit auf das Maximum gestelltem variablem Grafikspeicher ausgeliefert wird. Prüfen Sie die Anleitung des Herstellers für Ihr Betriebssystem und Backend (Vulkan oder ROCm).',
      },
      intel: {
        id: 'intel',
        title: 'Wo Intel steht',
        content: [
          '**Die Plattform Panther Lake von Intel ist beobachtenswert, aber noch keine Maschine für große Modelle.** Der Core Ultra X9 388H mit Arc-B390-Grafik unterstützt laut NanoReview bis zu 96 GB bei 153,6 GB/s, gegenüber 192 GB bei 256 GB/s beim PRO 495. HotHardware sah die Arc B390 in einigen OpenVINO-Workloads vor Strix Halo, während Strix Halo bei ONNX vorn lag. Diese Ergebnisse vergleichen mit dem 395, nicht mit dem PRO 495.',
          'Der HP Z2 Mini G1i ist wieder ein anderes Design: eine Intel-Workstation mit einer dedizierten NVIDIA RTX 4000 SFF Ada, also mit eigenem GPU-Speicher statt einem großen gemeinsamen Pool. Er gehört in einen breiteren Workstation-Vergleich, nicht in diesen.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Welches Gerät Sie kaufen sollten',
        items: [
          '**Günstigster Einstieg in 128 GB:** ein Rechner mit AMD Ryzen AI Max+ 395 (Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). Vergleichen Sie aktuelle Preise, denn sie schwanken stark.',
          '**Mehr als 128 GB:** Framework Desktop 192GB oder der Ryzen AI Halo mit 192 GB, bei einem Preis nahe dem einer Spark und mit Wartezeit durch Vorbestellung oder begrenzten Handel.',
          '**Schnellstes gemessenes Serving, CUDA, Fine-Tuning oder zwei gekoppelte Geräte:** die DGX Spark, jetzt zu einem deutlich höheren Preis als zum Marktstart.',
          '**Business-Einkauf und Garantie:** HP Z2 Mini G1a.',
          '**Nicht diese Klasse:** Wer mit Modellen in 32–64 GB auskommt, sollte zuerst die Mini-PC-Ratgeber lesen.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '192 GB als „schneller als 128 GB“ lesen. Es lädt größere Modelle und längere Kontexte; die Geschwindigkeit folgt weiterhin Bandbreite, Rechenleistung und Software.',
          'Neun Strix-Halo-Geräte für neun verschiedene Prozessoren halten. Prüfen Sie stattdessen Kühlung, Leistungsgrenzen, Anschlüsse und Garantie statt des Chipnamens im Datenblatt.',
          'Zu einem Preis aus der Markteinführung kaufen. Mehrere Preise in dieser Klasse sind seit dem Sommer gestiegen; die Tabelle trägt deshalb Datumsangaben.',
          'Annehmen, dass der gesamte Unified Memory von der GPU nutzbar ist. Zuteilungsgrenzen hängen von Betriebssystem, BIOS und Backend ab.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist der AMD Ryzen AI Halo schneller als die DGX Spark?',
            a: 'Nein, im unabhängigen Test, den wir gefunden haben. StorageReview maß die Spark in allen 18 vLLM-Serving-Szenarien vorn, wobei zwei Decode-lastige Läufe innerhalb von etwa 12 % lagen.',
          },
          {
            q: 'Kann ein Gerät mit 192 GB Modelle ausführen, die eine Spark nicht kann?',
            a: 'Ja, was das Laden betrifft: Ein 4-Bit-Modell der Klasse von etwa 300B braucht allein für die Gewichte rund 150 GB. Ob es mit brauchbarer Geschwindigkeit läuft, hängt von Bandbreite und Software ab.',
          },
          {
            q: 'Brauche ich ROCm, um Modelle auf Strix Halo auszuführen?',
            a: 'Nicht unbedingt. llama.cpp kann auch über Vulkan laufen; welches Backend schneller ist, hängt von Kernel- und Treiberversionen ab, testen Sie daher beide auf Ihrem System.',
          },
          {
            q: 'Warum ist Apple Silicon nicht enthalten?',
            a: 'Macs sind eine eigene Kategorie mit eigenen Speicherstufen und eigener Software; siehe den oben verlinkten Mac-Kaufratgeber.',
          },
          {
            q: 'Ist ein Core-Ultra-Mini-PC mit 64 GB ein Konkurrent der DGX Spark?',
            a: 'Nein. Er hat bestenfalls halb so viel Speicher und einen weitaus schmaleren Speicherbus, konkurriert also mit den Mini-PCs aus unseren anderen Ratgebern.',
          },
          {
            q: 'Eignen sich diese Geräte für Fine-Tuning?',
            a: 'NVIDIA gibt an, dass die Spark Fine-Tuning bis zu 70 Milliarden Parametern unterstützt; für die AMD-Geräte haben wir weder eine vergleichbare Herstellerangabe noch einen unabhängigen Test gefunden.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Offizielle Produktseite', description: 'GB10-Spezifikationen: 128 GB LPDDR5X, 273 GB/s, 200-Gbit/s-Netzwerk, DGX OS, Angabe zu Inferenz mit 200B.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: 'Bericht vom Oktober 2026 zum Preis von 6.950 $ für 128 GB und zu OEM-Modellen mit 64 GB für 4.999 $.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'vLLM-Serving-Ergebnisse, Plattformhinweise, Preise von 3.999 $ (Halo) und 4.699 $ (Founders Edition) zum Zeitpunkt des Tests.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Marktstart des Ryzen AI Halo', description: 'Ryzen AI Halo mit 128 GB für 3.999 $ und Windows-11-Unterstützung.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo mit PRO 495 und 192GB', description: 'Bericht zum Preis des Ryzen AI Halo mit 192 GB.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop mit Ryzen AI Max+ PRO 495', description: 'Vorbestellpreise für 192 GB, Versand im November, Vergleichspreis für 128 GB.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Offizielle Seite', description: 'PRO-495-Konfiguration, Speicheroptionen, Gehäuse und Erweiterungsdetails.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Offizieller US-Shop', description: 'Spezifikationen, Angebots- und Regelpreise, Versandschätzung.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: US-Preise des HP Z2 Mini G1a', description: 'US-Preise von HP für Konfigurationen mit 128 GB.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Preiserhöhung der Corsair AI Workstation 300', description: 'Preisbericht zur Corsair-Variante mit 395 / 128 GB.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Angaben zu Speicherkapazität und Bandbreite der Intel- und AMD-Chips.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Test des Core Ultra X9 388H', description: 'OpenVINO- und ONNX-Vergleiche gegen den Ryzen AI Max+ 395.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Lokale KI-Workstations: AMD Strix Halo vs. NVIDIA DGX Spark',
      'description': 'Lokale KI-Workstations im Vergleich: DGX Spark vs. AMD Strix Halo von AMD, Framework, HP, GMKtec, Minisforum — Speicher, Tempo, belegte Preise.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
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
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': 'Kaufen Sie AMD Strix Halo für den günstigsten Einstieg mit 128 GB und x86-Kompatibilität; kaufen Sie die DGX Spark, wenn CUDA, Durchsatz oder Clustering wichtiger sind als der Preis.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Käufer, die eine lokale KI-Workstation mit 128–192 GB auswählen und AMD-Strix-Halo-Systeme mit der NVIDIA DGX Spark vergleichen' },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-fr.webp',
    affiliateDisclosure: true,
    title: "Stations de travail IA locales : AMD Strix Halo contre NVIDIA DGX Spark",
    seoTitle: "Stations IA locales : Strix Halo contre DGX Spark",
    intro:
      "Une station de travail IA locale est un système compact tout-en-un doté d'au moins 128 Go de mémoire unifiée sur un bus de 256 bits, conçu pour exécuter des modèles de classe 100B qu'aucun mini-PC de 32 à 64 Go ne peut charger. En octobre 2026, le marché compte trois architectures : NVIDIA GB10 (DGX Spark), AMD Strix Halo (Ryzen AI Max+ 395 et PRO 495) et, encore en retrait, Intel Panther Lake. AMD l'emporte par les options de mémoire, la compatibilité x86 et le prix d'entrée ; NVIDIA l'emporte par le débit mesuré, CUDA et le clustering. Les prix de la mémoire ont fait monter plusieurs chiffres depuis l'été : le tableau des prix ci-dessous indique donc une source pour chaque ligne.",
    metaDescription:
      "Stations IA locales : DGX Spark face aux machines AMD Strix Halo d'AMD, Framework, HP, GMKtec et Minisforum : mémoire, vitesse mesurée, prix sourcés.",
    twitterDescription:
      "DGX Spark contre AMD Strix Halo : quelle station IA locale de 128 à 192 Go acheter, ce que montrent les tests indépendants, et pourquoi ce n'est pas une catégorie de mini-PC.",
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: "Acheteurs qui choisissent une station IA locale de 128 à 192 Go et comparent les systèmes AMD Strix Halo au NVIDIA DGX Spark",
    primaryTerm: 'station de travail IA locale',
    targetKeywords: [
      'station de travail ia locale',
      'alternatives dgx spark',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128 go',
      'framework desktop 192 go',
    ],
    leadAnswerBlock:
      "**Choisissez AMD Strix Halo pour l'entrée de gamme la moins chère en 128 Go et la compatibilité x86/Windows ; choisissez le DGX Spark si CUDA, le débit ou le clustering de deux machines comptent plus que le prix.** Un test vLLM indépendant a donné le Spark plus rapide dans les 18 cas mesurés, d'environ 2 à 13× dans 16 d'entre eux : l'avantage d'AMD est donc la capacité par dollar, pas la vitesse. Ces machines forment une classe à part, distincte des mini-PC Intel Core Ultra ordinaires de 32 à 64 Go.",
    quickAnswerTop: {
      fr: {
        question: "Quelle station de travail IA locale acheter à la place d'un DGX Spark ?",
        answer:
          "Pour le prix le plus bas en 128 Go, prenez une machine AMD Ryzen AI Max+ 395 comme l'AMD Ryzen AI Halo, le Minisforum MS-S1 MAX ou le GMKtec EVO-X2. Au-delà de 128 Go, le Framework Desktop et le Ryzen AI Halo 192 Go sont les options, mais au prix d'un Spark. Choisissez le Spark lui-même quand CUDA, le fine-tuning ou la liaison de deux machines décide de l'achat.",
        bullets: [
          "Le moins cher en 128 Go : systèmes AMD Ryzen AI Max+ 395 (tableau des prix ci-dessous)",
          "Le plus de mémoire : 192 Go sur Ryzen AI Max+ PRO 495 (Framework Desktop, Ryzen AI Halo)",
          "Le plus rapide dans les tests indépendants : le DGX Spark",
          "Hors de cette classe : les mini-PC ordinaires de 32 à 64 Go",
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: "Pourquoi ce n'est pas une catégorie de mini-PC", anchor: 'definition' },
      { label: 'Trois architectures, trois compromis', anchor: 'architectures' },
      { label: 'Les cinq machines à présélectionner', anchor: 'shortlist' },
      { label: 'Comparatif des prix de toutes les machines', anchor: 'prices' },
      { label: 'Ce que montrent les tests indépendants', anchor: 'performance' },
      { label: 'Ce qui tient dans 128 Go contre 192 Go', anchor: 'capacity' },
      { label: "Où en est Intel", anchor: 'intel' },
      { label: 'Laquelle acheter', anchor: 'decision' },
      { label: 'Erreurs courantes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Les stations AMD Strix Halo sont moins chères que le NVIDIA DGX Spark en entrée de gamme 128 Go et proposent 192 Go, mais dans le seul test indépendant que nous avons trouvé, le Spark est plus rapide dans tous les cas mesurés." },
      { type: 'plain-terms', content: "La mémoire unifiée signifie que le processeur et le graphique partagent un même grand pool de RAM : un modèle qui ne tiendrait pas dans la mémoire propre d'une carte graphique peut donc quand même se charger. Sa vitesse d'exécution dépend ensuite surtout de la bande passante mémoire et du logiciel, pas de la capacité affichée." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        items: [
          "Définition de la classe : au moins 128 Go de mémoire unifiée sur un bus LPDDR5X de 256 bits (environ 256–273 Go/s), dans un seul boîtier compact. C'est notre définition éditoriale, pas une norme de constructeur.",
          "Même silicium, boîtiers différents : la plupart des machines ici utilisent le même Ryzen AI Max+ 395 ; ce sont donc le refroidissement, les ports, le firmware, le support et le prix qui les distinguent.",
          "L'argument « moitié prix d'un Spark » ne tient qu'à 128 Go. Les machines AMD de 192 Go coûtent à peu près autant qu'un Spark de 128 Go.",
          "Les tests indépendants de service vLLM favorisent le Spark dans les 18 cas ; la vitesse de chat pour un seul utilisateur n'a pas été mesurée dans ce test.",
          "Intel Panther Lake plafonne à 96 Go : c'est un point à surveiller, pas un concurrent, pour les grands modèles locaux.",
        ],
      },
      definition: {
        id: 'definition',
        title: "Pourquoi ce n'est pas une catégorie de mini-PC",
        content: [
          "**Un mini-PC ordinaire avec une puce Core Ultra et 32 à 64 Go de RAM répond à une autre question : « puis-je exécuter un modèle de 7 à 32B silencieusement sur mon bureau ? »** Une station de travail IA locale répond à : « puis-je seulement charger un modèle de classe 100B ? ». L'écart vient du système mémoire : un bus LPDDR5X de 256 bits alimentant à la fois le CPU et le GPU, soudé à la carte, dont une grande part est adressable par le GPU. Les mini-PC à modules DDR5 bicanal n'atteignent qu'une fraction de cette bande passante. Pour ces machines, consultez notre [guide des mini-PC ASUS](/fr/power-local-llm/asus-mini-pc-local-ai) et le [comparatif des mini-PC](/fr/local-llms/best-mini-pcs-local-llm).",
          "Cette page suit la classe sous un seul nom, Stations de travail IA locales, afin que ces machines soient comparées entre elles et non à des ordinateurs de bureau d'entrée de gamme. Les Mac forment une catégorie à part, traitée dans le [guide d'achat Mac](/fr/power-local-llm/best-mac-for-local-ai-2026).",
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'Trois architectures, trois compromis',
        content:
          "**La vraie concurrence oppose des plateformes, pas les neuf marques.** La plupart des machines AMD partagent un même processeur et diffèrent par le refroidissement, les limites de puissance, la connectique, le firmware, la garantie et le prix.",
        columns: ['Architecture', 'Mémoire', 'Atout principal', 'Limite principale'],
        rows: [
          { 'Architecture': 'NVIDIA GB10 (DGX Spark)', 'Mémoire': '128 Go LPDDR5X, 273 Go/s', 'Atout principal': "CUDA et logiciels IA NVIDIA, réseau ConnectX-7 200 Gbps pour relier des machines", 'Limite principale': "Mémoire plafonnée à 128 Go ; CPU Arm et DGX OS (Linux) uniquement" },
          { 'Architecture': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', 'Mémoire': '128 Go (395) ou jusqu\'à 192 Go (PRO 495)', 'Atout principal': "Le plus de mémoire par dollar, x86, Windows ou Linux", 'Limite principale': "Maturité des logiciels et des pilotes variable selon le système et le backend (ROCm, Vulkan) ; 10GbE plutôt qu'un réseau haut débit sur le Ryzen AI Halo" },
          { 'Architecture': 'Intel Panther Lake (Core Ultra X9 388H)', 'Mémoire': "Jusqu'à 96 Go, 153.6 Go/s", 'Atout principal': "Nouveaux graphiques Arc et NPU", 'Limite principale': "Moins de mémoire et de bande passante que les deux rivaux" },
        ],
        note: "Les chiffres du Spark proviennent de la page produit de NVIDIA ; ceux d'Intel, de la base de spécifications de NanoReview. La bande passante du PRO 495 192 Go n'est indiquée ni par Framework ni par AMD dans les sources que nous avons lues ; le bus de 256 bits à 8533 MT/s donne environ 273 Go/s par calcul, valeur que nous n'avons pas vue mesurée de façon indépendante.",
      },
      shortlist: {
        id: 'shortlist',
        title: 'Les cinq machines à présélectionner',
        content:
          "**Cinq machines couvrent les vraies décisions d'achat : le plus de mémoire, le design de référence du constructeur, l'option professionnelle, le meilleur rapport qualité-prix et la station extensible.** Il s'agit d'une sélection éditoriale à partir de fiches techniques et de rapports tiers ; PromptQuorum n'a testé aucune de ces machines. Les liens mènent aux pages des constructeurs, sans relation d'affiliation.",
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: "Le plus de mémoire, modulaire et réparable",
            verdict:
              "Ryzen AI Max+ PRO 495 avec 192 Go de LPDDR5X-8533 dans un boîtier de 4,5 L, proposé en édition DIY ou monté avec Fedora. Framework a ouvert les précommandes le 30 septembre 2026 pour un seul lot, avec des premières livraisons attendues en novembre. La configuration PRO 495 dispose d'un emplacement PCIe x4 libre et prend en charge le clustering USB4 et PCIe.",
            pros: [
              "Plus de mémoire qu'un DGX Spark dans un châssis standard et réparable",
              "Emplacement PCIe libre et parcours DIY documenté",
            ],
            cons: [
              "Précommande uniquement ; la date de livraison de novembre est une attente",
              "Le 192 Go n'existe qu'en mémoire préconfigurée, à un prix de niveau Spark",
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — page officielle →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: "La réponse d'AMD au DGX Spark",
            verdict:
              "Plateforme développeur d'AMD : Ryzen AI Max+ 395 avec 128 Go de LPDDR5x-8000 (256 Go/s), un SSD de 2 To, du 10GbE et le choix entre Windows 11 Pro et l'image Linux développeur d'AMD. Une version PRO 495 de 192 Go a été signalée en vente. Le test de StorageReview l'a trouvée nettement plus lente que le Spark en service vLLM, sans réseau haut débit pour le clustering.",
            pros: [
              "Pile logicielle IA préconfigurée et prise en charge de deux systèmes d'exploitation",
              "Le moyen le moins risqué d'obtenir la plateforme 395 directement auprès d'AMD",
            ],
            cons: [
              "Disponibilité aux États-Unis uniquement via Micro Center, selon la couverture du lancement",
              "Un seul port 10GbE : pas de montée en charge multi-machines comme le Spark",
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: "L'option du canal professionnel",
            verdict:
              "Ryzen AI Max+ PRO 395 avec jusqu'à 128 Go dans la gamme de stations Z de HP, vendu par les canaux professionnels et revendeurs avec un large éventail de prix. C'est la même plateforme que les machines moins chères ; vous payez la garantie HP et le circuit d'achat.",
            pros: [
              "Support d'entreprise et canaux d'achat établis",
              "Même plateforme 128 Go que les machines des petits constructeurs",
            ],
            cons: [
              "Le prix américain de HP dépasse celui de toutes les machines 128 Go de petits constructeurs que nous avons trouvées",
              "Les prix varient fortement selon le revendeur et la taille de stockage",
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: "Le choix valeur sur le même processeur",
            verdict:
              "Ryzen AI Max+ 395 avec 128 Go, parmi les premières machines Strix Halo de petits constructeurs. Son prix en boutique change dynamiquement et les annonces que nous avons vues variaient largement : consultez la page en direct. Il utilise le même processeur que les machines ci-dessus ; l'argument en sa faveur est le prix, pas la performance.",
            pros: [
              "Plusieurs tests tiers existent",
              "Souvent parmi les options 128 Go les moins chères",
            ],
            cons: [
              "Les conditions de garantie et de support sont celles du constructeur ; à vérifier avant l'achat",
              "Prix et configurations contradictoires selon les vendeurs",
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — page officielle →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: "Conception orientée station de travail",
            verdict:
              "Ryzen AI Max+ 395 avec 128 Go de LPDDR5x-8000, double 10GbE, USB4 v2 et un emplacement d'extension PCIe x16, avec prise en charge du montage en rack 2U. Sa boutique américaine affichait le modèle 128 Go / 2 To en promotion lors de notre vérification, avec une expédition estimée début novembre. Une version 192 Go, la MS-S1 MAX-P495, a été signalée en précommande.",
            pros: [
              "Double 10GbE et un emplacement d'extension, rares dans cette classe",
              "Option de montage en rack pour le bureau ou le laboratoire",
            ],
            cons: [
              "Le prix normal est supérieur de 25 % au prix promotionnel",
              "Garantie vendeur de 2 ans sur la boutique américaine",
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — boutique officielle →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: "Liens produits, sans relation d'affiliation. Les spécifications proviennent des pages des constructeurs et des rapports cités ; la disponibilité et les configurations changent.",
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'Comparatif des prix de toutes les machines',
        content:
          "**Chaque chiffre ci-dessous est un prix américain tiré de la source indiquée, au moment de la dernière mise à jour (voir la date de mise à jour) ; aucun n'est converti depuis une autre devise.** Les pénuries de mémoire ont fait monter les prix à plusieurs reprises en 2026 et plusieurs lignes se contredisent selon les vendeurs : considérez le tableau comme un instantané et ouvrez la page du constructeur avant de commander. Les prix européens diffèrent et ne sont pas listés, faute d'avoir pu les vérifier.",
        columns: ['Machine', 'Puce et mémoire', 'Prix US relevé', 'Statut et source'],
        rows: [
          { 'Machine': 'NVIDIA DGX Spark', 'Puce et mémoire': 'GB10, 128 Go', 'Prix US relevé': '$6,950', 'Statut et source': "Signalé le 2026-10-03 par ServeTheHome ; lancé à $3,999, Founders Edition à $4,699 plus tôt en 2026 ; modèles OEM 64 Go à partir de $4,999" },
          { 'Machine': 'AMD Ryzen AI Halo', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': '$3,999', 'Statut et source': "SSD 2 To ; Micro Center selon la couverture du lancement" },
          { 'Machine': 'AMD Ryzen AI Halo 192GB', 'Puce et mémoire': 'PRO 495, 192 Go', 'Prix US relevé': '$7,299', 'Statut et source': "Un seul rapport (VideoCardz) ; non confirmé sur la page d'un revendeur" },
          { 'Machine': 'Framework Desktop 192GB', 'Puce et mémoire': 'PRO 495, 192 Go', 'Prix US relevé': '$6,799 DIY / $7,449 monté', 'Statut et source': "Précommande, un seul lot, livraison en novembre (Phoronix, Framework)" },
          { 'Machine': 'Framework Desktop 128GB', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': '$3,449', 'Statut et source': "Cité par Phoronix à titre de comparaison" },
          { 'Machine': 'Minisforum MS-S1 MAX', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': '$3,919 promo / $4,899 normal', 'Statut et source': "128 Go / 2 To sur la boutique américaine de Minisforum ; expédition début novembre" },
          { 'Machine': 'HP Z2 Mini G1a', 'Puce et mémoire': 'PRO 395, 128 Go', 'Prix US relevé': '$3,734 à $5,079', 'Statut et source': "Newegg 128 Go / 1 To contre prix américain HP relevé par Notebookcheck pour 128 Go / 2 To" },
          { 'Machine': 'GMKtec EVO-X2', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': 'environ $3,650', 'Statut et source': "Une annonce de comparaison d'octobre 2026 pour 128 Go / 2 To ; le prix en boutique GMKtec change dynamiquement" },
          { 'Machine': 'Corsair AI Workstation 300', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': '$3,399', 'Statut et source': "Rapport de Tom's Hardware ; date du rapport non confirmée" },
          { 'Machine': 'Beelink GTR9 Pro', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': 'non vérifié', 'Statut et source': "Annonces américaines contradictoires ; une variante PRO 495 n'est affichée qu'en Chine pour l'instant" },
          { 'Machine': 'Bosgame M5', 'Puce et mémoire': '395, 128 Go', 'Prix US relevé': 'non vérifié', 'Statut et source': "Aucun prix actuel trouvé" },
        ],
        note: "Nous n'avons pas pu vérifier le MSI PRO MAX EDGE AI+ 11M, il n'est donc pas listé. Les prix qui ne figuraient pas sur une page de constructeur que nous avons ouverte nous-mêmes sont attribués à la publication qui les a rapportés.",
      },
      performance: {
        id: 'performance',
        title: 'Ce que montrent les tests indépendants',
        content: [
          "**Le seul duel direct avec des chiffres publiés que nous ayons trouvé est le test Ryzen AI Halo contre DGX Spark de StorageReview, et le Spark a gagné dans tous les cas.** Il a exécuté du service en ligne vLLM sous Linux avec un lot de 64 sur six modèles. Le Spark menait d'environ 2 à 13× dans 16 des 18 scénarios et d'environ 11 à 12 % dans les deux autres, deux exécutions à décodage dominant de modèles denses plus petits. Les plus grands écarts sont apparus sur le travail à préremplissage dominant et sur le modèle FP4, adapté au matériel Blackwell.",
          "Ce test mesure le débit de service multi-requêtes. La vitesse de chat pour un seul utilisateur dépend surtout de la bande passante mémoire, proche entre les deux (256 contre 273 Go/s) ; nous attendrions donc un écart plus faible, mais c'est une attente, non mesurée dans ce test. Les comparaisons publiées par AMD, y compris celles avec Intel, sont des tests de constructeur et non des benchmarks indépendants.",
        ],
        note: "L'évaluation de StorageReview a été publiée le 2026-07-06 et modifiée le 2026-10-29. Les logiciels évoluent vite sur les deux plateformes : revérifiez avant de vous fier à un ratio.",
      },
      capacity: {
        id: 'capacity',
        title: 'Ce qui tient dans 128 Go contre 192 Go',
        content:
          "**La capacité décide de ce qui se charge ; la bande passante et le logiciel décident de la vitesse d'exécution.** Le tableau est un calcul de quantification (paramètres × bits par poids, plus l'espace de travail pour le contexte), pas un benchmark.",
        columns: ['Classe de modèle', 'Quantification', 'Poids seuls', 'Machine 128 Go', 'Machine 192 Go'],
        rows: [
          { 'Classe de modèle': '70B dense', 'Quantification': '8 bits', 'Poids seuls': '~70 Go', 'Machine 128 Go': 'Tient, marge pour le contexte', 'Machine 192 Go': 'Tient confortablement' },
          { 'Classe de modèle': 'Classe 120B', 'Quantification': '4 bits', 'Poids seuls': '~60–70 Go', 'Machine 128 Go': 'Tient confortablement', 'Machine 192 Go': 'Tient avec grand contexte' },
          { 'Classe de modèle': 'Classe 200B', 'Quantification': '4 bits', 'Poids seuls': '~100 Go', 'Machine 128 Go': 'Juste avec le contexte', 'Machine 192 Go': 'Tient' },
          { 'Classe de modèle': 'Classe 300B', 'Quantification': '4 bits', 'Poids seuls': '~150 Go', 'Machine 128 Go': 'Ne tient pas', 'Machine 192 Go': 'Tient avec contexte limité' },
        ],
        note: "Toute la mémoire n'est pas disponible pour le GPU par défaut. La quantité de mémoire que le GPU peut adresser dépend du système, du noyau et des réglages du pilote, et StorageReview note que le Ryzen AI Halo est livré avec la mémoire graphique variable réglée au maximum. Consultez le guide du constructeur pour votre système et votre backend (Vulkan ou ROCm).",
      },
      intel: {
        id: 'intel',
        title: 'Où en est Intel',
        content: [
          "**La plateforme Panther Lake d'Intel mérite d'être surveillée, mais n'est pas encore une machine pour grands modèles.** Le Core Ultra X9 388H avec graphiques Arc B390 prend en charge jusqu'à 96 Go à 153.6 Go/s selon NanoReview, contre 192 Go à 256 Go/s pour le PRO 495. HotHardware a trouvé l'Arc B390 devant Strix Halo dans certaines charges OpenVINO, tandis que Strix Halo menait en ONNX. Ces résultats comparent avec le 395, pas avec le PRO 495.",
          "Le HP Z2 Mini G1i est encore une autre conception : une station Intel avec une carte NVIDIA RTX 4000 SFF Ada dédiée, donc une mémoire GPU dédiée plutôt qu'un grand pool partagé. Il relève d'un comparatif plus large de stations de travail, pas de celui-ci.",
        ],
      },
      decision: {
        id: 'decision',
        title: 'Laquelle acheter',
        items: [
          "**Le moyen le moins cher d'entrer en 128 Go :** une machine AMD Ryzen AI Max+ 395 (Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). Comparez les prix actuels, car ils sont volatils.",
          "**Plus de 128 Go :** Framework Desktop 192GB ou le Ryzen AI Halo 192 Go, en acceptant un prix proche de celui d'un Spark et une attente de précommande ou de distribution limitée.",
          "**Service le plus rapide mesuré, CUDA, fine-tuning ou deux machines liées :** le DGX Spark, désormais à un prix bien supérieur à celui du lancement.",
          "**Achats professionnels et garantie :** HP Z2 Mini G1a.",
          "**Hors de cette classe :** ceux dont les modèles tiennent dans 32 à 64 Go devraient d'abord lire les guides de mini-PC.",
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          "Lire 192 Go comme « plus rapide que 128 Go ». Cela charge des modèles plus grands et des contextes plus longs ; la vitesse dépend toujours de la bande passante, du calcul et du logiciel.",
          "Traiter neuf machines Strix Halo comme neuf processeurs différents. Vérifiez le refroidissement, les limites de puissance, les ports et la garantie plutôt que le nom de la puce sur la fiche technique.",
          "Acheter sur la foi d'un prix de l'époque du lancement. Plusieurs chiffres de cette classe ont augmenté depuis l'été ; le tableau porte des dates pour cette raison.",
          "Supposer que toute la mémoire unifiée est utilisable par le GPU. Les limites d'allocation dépendent du système, du BIOS et du backend.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: "L'AMD Ryzen AI Halo est-il plus rapide que le DGX Spark ?",
            a: "Non, dans le test indépendant que nous avons trouvé. StorageReview a mesuré le Spark en tête dans les 18 scénarios de service vLLM, bien que deux exécutions à décodage dominant soient restées à environ 12 % près.",
          },
          {
            q: "Une machine de 192 Go peut-elle exécuter des modèles qu'un Spark ne peut pas ?",
            a: "Oui, pour le chargement : un modèle d'environ classe 300B en 4 bits exige environ 150 Go pour les poids seuls. Qu'il tourne à une vitesse utilisable dépend de la bande passante et du logiciel.",
          },
          {
            q: "Ai-je besoin de ROCm pour exécuter des modèles sur Strix Halo ?",
            a: "Pas forcément. llama.cpp peut aussi fonctionner via Vulkan ; le backend le plus rapide dépend des versions du noyau et des pilotes, testez donc les deux sur votre configuration.",
          },
          {
            q: "Pourquoi ne pas inclure Apple Silicon ?",
            a: "Les Mac forment une catégorie à part, avec leurs propres niveaux de mémoire et leurs propres logiciels ; consultez le guide d'achat Mac lié plus haut.",
          },
          {
            q: "Un mini-PC Core Ultra avec 64 Go concurrence-t-il le DGX Spark ?",
            a: "Non. Il a au mieux la moitié de la mémoire et un bus mémoire bien plus étroit : il concurrence donc les mini-PC de nos autres guides.",
          },
          {
            q: "Ces machines conviennent-elles au fine-tuning ?",
            a: "NVIDIA indique que le Spark prend en charge le fine-tuning jusqu'à 70 milliards de paramètres ; nous n'avons trouvé ni affirmation comparable de constructeur ni test indépendant pour les machines AMD.",
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: "Spécifications du GB10 : 128 Go LPDDR5X, 273 Go/s, réseau 200 Gbps, DGX OS, affirmation d'inférence 200B." },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: "Rapport d'octobre 2026 sur le prix de $6,950 pour le modèle 128 Go et les modèles OEM 64 Go à $4,999." },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: "Résultats de service vLLM, notes sur la plateforme, prix de $3,999 pour le Halo et de $4,699 pour la Founders Edition au moment du test." },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: "Tom's Hardware: Ryzen AI Halo launch", description: "Ryzen AI Halo 128 Go à $3,999 avec prise en charge de Windows 11." },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: "Rapport sur le prix du Ryzen AI Halo 192 Go." },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: "Prix de précommande du 192 Go, livraison en novembre, prix de comparaison du 128 Go." },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: "Configuration PRO 495, options de mémoire, châssis et détails d'extension." },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: "Spécifications, prix promotionnel et prix normal, estimation d'expédition." },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: "Prix américains HP pour les configurations 128 Go." },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: "Tom's Hardware: Corsair AI Workstation 300 price rise", description: "Rapport sur le prix du Corsair 395 / 128 Go." },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: "Capacité mémoire et bande passante des puces Intel et AMD." },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: "Comparaisons OpenVINO et ONNX avec le Ryzen AI Max+ 395." },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': "Stations de travail IA locales : AMD Strix Halo contre NVIDIA DGX Spark",
      'description': "Stations IA locales : DGX Spark face aux machines AMD Strix Halo d'AMD, Framework, HP, GMKtec et Minisforum : mémoire, vitesse mesurée, prix sourcés.",
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
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
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': "Choisissez AMD Strix Halo pour l'entrée de gamme la moins chère en 128 Go et la compatibilité x86 ; choisissez le DGX Spark si CUDA, le débit ou le clustering comptent plus que le prix.",
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': "Acheteurs qui choisissent une station IA locale de 128 à 192 Go et comparent les systèmes AMD Strix Halo au NVIDIA DGX Spark" },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-ja.webp',
    affiliateDisclosure: true,
    title: 'ローカルAIワークステーション: AMD Strix Halo vs. NVIDIA DGX Spark',
    seoTitle: 'ローカルAIワークステーション Strix Halo vs Spark',
    intro:
      'ローカルAIワークステーションとは、256ビットバス上に128GB以上のユニファイドメモリを搭載し、32〜64GBのmini PCでは読み込めない100B級モデルを動かせる、コンパクトな一体型システムです。2026年10月時点のアーキテクチャは3つ。NVIDIA GB10（DGX Spark）、AMD Strix Halo（Ryzen AI Max+ 395とPRO 495）、そして出遅れているIntel Panther Lakeです。メモリの選択肢、x86互換性、導入価格ではAMDが優位で、実測スループット、CUDA、クラスタリングではNVIDIAが優位です。夏以降、メモリ価格の高騰で複数の価格が上昇したため、下の価格表には各行の情報源を記載しています。',
    metaDescription:
      'ローカルAIワークステーションを比較。DGX SparkとAMD、Framework、HP、GMKtec、MinisforumのStrix Halo機を、メモリ・実測速度・出典付き価格で整理。',
    twitterDescription:
      'DGX SparkとAMD Strix Haloの比較: 128〜192GBのローカルAIワークステーションはどれを買うべきか、独立テストの結果、そしてmini PCとは別カテゴリである理由。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: '128〜192GBのローカルAIワークステーションを選び、AMD Strix Halo搭載機とNVIDIA DGX Sparkを比較している購入者',
    primaryTerm: 'ローカルAIワークステーション',
    targetKeywords: [
      'ローカルai ワークステーション',
      'dgx spark 代替',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**128GBを最も安く手に入れたい、またはx86/Windows互換性が必要ならAMD Strix Halo、価格よりCUDA、スループット、2台クラスタリングを重視するならDGX Sparkを選んでください。** 独立したvLLMテストでは、測定した18ケースすべてでSparkが上回り、うち16ケースでは約2〜13倍の差がありました。つまりAMDの強みは速度ではなく、ドルあたりの容量です。これらのマシンは、32〜64GBの一般的なIntel Core Ultra搭載mini PCとは別のクラスです。',
    quickAnswerTop: {
      ja: {
        question: 'DGX Sparkの代わりに、どのローカルAIワークステーションを買うべきですか？',
        answer:
          '128GBを最も安く手に入れたいなら、AMD Ryzen AI Halo、Minisforum MS-S1 MAX、GMKtec EVO-X2などのAMD Ryzen AI Max+ 395搭載機を選んでください。128GBを超えるなら選択肢はFramework Desktopと192GB版Ryzen AI Haloですが、価格はSparkと同程度です。CUDA、ファインチューニング、2台の接続が購入の決め手なら、Spark自体を選んでください。',
        bullets: [
          '128GBで最安: AMD Ryzen AI Max+ 395搭載機（下の価格表を参照）',
          '最大メモリ: Ryzen AI Max+ PRO 495で192GB（Framework Desktop、Ryzen AI Halo）',
          '独立テストで最速: DGX Spark',
          'このクラスに含まれないもの: 32〜64GBの一般的なmini PC',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: 'mini PCとは別カテゴリである理由', anchor: 'definition' },
      { label: '3つのアーキテクチャとトレードオフ', anchor: 'architectures' },
      { label: '候補に入れる5台', anchor: 'shortlist' },
      { label: '全機種の価格チェック', anchor: 'prices' },
      { label: '独立テストの結果', anchor: 'performance' },
      { label: '128GBと192GBで動くモデル', anchor: 'capacity' },
      { label: 'Intelの現状', anchor: 'intel' },
      { label: 'どれを買うべきか', anchor: 'decision' },
      { label: 'よくある間違い', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '情報源', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'AMD Strix Haloワークステーションは128GBの導入価格でNVIDIA DGX Sparkを下回り、192GBも選べますが、確認できた唯一の独立テストでは、測定したすべてのケースでSparkのほうが高速でした。' },
      { type: 'plain-terms', content: 'ユニファイドメモリとは、プロセッサとグラフィックスが1つの大きなRAMプールを共有する仕組みで、グラフィックスカード自身のメモリに収まらないモデルでも読み込めます。ただし、その後の速度は容量の数字ではなく、主にメモリ帯域幅とソフトウェアで決まります。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'クラスの定義: 256ビットLPDDR5Xバス（約256〜273GB/s）上に128GB以上のユニファイドメモリを搭載した、コンパクトな一体型。これはベンダー標準ではなく、当サイト編集部の定義です。',
          '同じシリコン、異なる筐体: ここで扱うマシンの多くは同じRyzen AI Max+ 395を使っているため、違いを生むのは冷却、ポート、ファームウェア、サポート、価格です。',
          '「Sparkの半額」という主張が成り立つのは128GBの場合のみです。192GBのAMD機は、128GBのSparkとほぼ同じ価格です。',
          '独立したvLLMサービングテストでは、18ケースすべてでSparkが優位でした。このテストでは、1ユーザーのチャット速度は測定されていません。',
          'Intel Panther Lakeは最大96GBで、大規模ローカルモデルでは競合ではなく、注視対象にとどまります。',
        ],
      },
      definition: {
        id: 'definition',
        title: 'mini PCとは別カテゴリである理由',
        content: [
          '**Core Ultraチップと32〜64GBのRAMを積んだ一般的なmini PCが答えるのは、「7〜32Bのモデルをデスクで静かに動かせるか」という別の問いです。** ローカルAIワークステーションが答えるのは、「そもそも100B級モデルを読み込めるか」です。差を生むのはメモリシステムです。CPUとGPUの両方に接続された256ビットLPDDR5Xバスが基板にはんだ付けされ、その大部分をGPUがアドレスできます。2チャネルのDDR5モジュールを使うmini PCの帯域幅は、その何分の一かにとどまります。そうしたマシンについては、[ASUS mini PCガイド](/ja/power-local-llm/asus-mini-pc-local-ai)と[mini PCまとめ](/ja/local-llms/best-mini-pcs-local-llm)をご覧ください。',
          'このページでは、このクラスを「ローカルAIワークステーション」という名前でまとめて扱います。そのため、これらのマシンはエントリークラスのデスクトップではなく、互いに比較します。Macは別カテゴリであり、[Mac購入ガイド](/ja/power-local-llm/best-mac-for-local-ai-2026)で扱っています。',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: '3つのアーキテクチャとトレードオフ',
        content:
          '**本当の競争は、9つのブランド間ではなくプラットフォーム間にあります。** AMD搭載機の多くは同じプロセッサを共有しており、違いは冷却、電力制限、接続性、ファームウェア、保証、価格にあります。',
        columns: ['アーキテクチャ', 'メモリ', '主な利点', '主な制約'],
        rows: [
          { 'アーキテクチャ': 'NVIDIA GB10（DGX Spark）', 'メモリ': '128GB LPDDR5X、273GB/s', '主な利点': 'CUDAとNVIDIA AIソフトウェア、機器接続用の200Gbps ConnectX-7', '主な制約': 'メモリは128GBまで。ArmのCPUで、OSはDGX OS（Linux）のみ' },
          { 'アーキテクチャ': 'AMD Strix Halo（Ryzen AI Max+ 395、PRO 495）', 'メモリ': '128GB（395）、PRO 495は最大192GB', '主な利点': 'ドルあたりのメモリ量が最大。x86、WindowsまたはLinux', '主な制約': 'ソフトウェアとドライバの成熟度はOSやバックエンド（ROCm、Vulkan）で異なる。Ryzen AI Haloは高速ファブリックなしの10GbE' },
          { 'アーキテクチャ': 'Intel Panther Lake（Core Ultra X9 388H）', 'メモリ': '最大96GB、153.6GB/s', '主な利点': '新しいArcグラフィックスとNPU', '主な制約': 'メモリ量と帯域幅が両競合より小さい' },
        ],
        note: 'Sparkの数値はNVIDIAの製品ページ、Intelの数値はNanoReviewのスペックデータベースによるものです。192GB版PRO 495の帯域幅は、確認した情報源ではFrameworkもAMDも明記していません。8533MT/sの256ビットバスから計算すると約273GB/sになりますが、独立した実測値は確認していません。',
      },
      shortlist: {
        id: 'shortlist',
        title: '候補に入れる5台',
        content:
          '**実際の購入判断をカバーするのは5台です。最大メモリ、ベンダーのリファレンス設計、法人向け、コスパ重視、拡張可能なワークステーションです。** これはスペックシートとサードパーティのレポートに基づく編集部の選定であり、PromptQuorumはいずれのマシンもベンチマークしていません。リンク先はベンダーのページで、アフィリエイト関係はありません。',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: '最大メモリ、モジュール式で修理しやすい',
            verdict:
              'Ryzen AI Max+ PRO 495に192GBのLPDDR5X-8533を組み合わせた4.5Lのケースで、DIY EditionまたはFedora搭載の完成品として提供されます。Frameworkは2026年9月30日に1バッチ限定の予約受付を開始し、初回出荷は11月の見込みです。PRO 495構成にはオープンなPCIe x4スロットがあり、USB4とPCIeによるクラスタリングに対応します。',
            pros: [
              '標準的で修理しやすい筐体に、DGX Sparkを上回るメモリを搭載',
              'オープンなPCIeスロットと、文書化されたDIY手順',
            ],
            cons: [
              '予約のみ。11月出荷は見込みにすぎない',
              '192GBは構成済みメモリのみで、価格はSparkと同水準',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — 公式ページ →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'DGX SparkへのAMD自身の回答',
            verdict:
              'AMDの開発者向けプラットフォームです。Ryzen AI Max+ 395に128GBのLPDDR5x-8000（256GB/s）、2TB SSD、10GbEを備え、Windows 11 ProまたはAMDのLinux開発者向けイメージから選べます。192GBのPRO 495版が小売店に並んだとの報告もあります。StorageReviewのテストでは、vLLMサービングでSparkに明確に劣り、クラスタリング用の高速ファブリックもありませんでした。',
            pros: [
              'AIソフトウェアスタックが構成済みで、デュアルOSに対応',
              '395プラットフォームをAMD自身から入手でき、リスクが最も低い',
            ],
            cons: [
              '発売時の報道によると、米国での販売はMicro Centerのみ',
              '10GbEポートが1つのみで、Sparkのような複数台スケーリングは不可',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: '法人チャネル向けの選択肢',
            verdict:
              'HPのZワークステーションラインに属する、最大128GBのRyzen AI Max+ PRO 395搭載機です。法人・リセラー経由で販売され、価格差が大きくなっています。より安い他のマシンと同じプラットフォームであり、HPの保証と調達ルートに対価を払う形です。',
            pros: [
              '確立された法人向けサポートと購入チャネル',
              'ブティック系マシンと同じ128GBプラットフォーム',
            ],
            cons: [
              'HP自身の米国価格は、確認したどのブティック系128GB機よりも高い',
              'リセラーやストレージ容量によって価格が大きく異なる',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: '同じプロセッサのコスパ重視モデル',
            verdict:
              'Ryzen AI Max+ 395に128GBを搭載した、ブティック系Strix Halo機の先駆けの1つです。ストア価格は動的に変動し、確認した掲載価格も幅広かったため、最新のページを確認してください。上のマシンと同じプロセッサなので、選ぶ理由は性能ではなく価格です。',
            pros: [
              'サードパーティのレビューが複数ある',
              '128GBの選択肢の中では安いことが多い',
            ],
            cons: [
              '保証とサポートの条件はベンダー独自のもの。購入前に確認してください',
              '販売店ごとに価格と構成の掲載内容が食い違う',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — 公式ページ →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'ワークステーション志向の設計',
            verdict:
              'Ryzen AI Max+ 395に128GBのLPDDR5x-8000、デュアル10GbE、USB4 v2、PCIe x16拡張スロットを備え、2Uラックマウントにも対応します。確認した時点で、米国ストアは128GB/2TBモデルをセール価格で掲載し、出荷は11月上旬の見込みでした。192GBのMS-S1 MAX-P495が予約受付中との報告もあります。',
            pros: [
              'このクラスでは珍しい、デュアル10GbEと拡張スロット',
              'オフィスやラボ向けのラックマウント対応',
            ],
            cons: [
              '通常価格はセール価格より25%高い',
              '販売元の保証は米国ストアで2年',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — 公式ストア →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: '製品リンクで、アフィリエイト関係はありません。仕様はベンダーのページと引用したレポートに基づいており、在庫状況や構成は変わることがあります。',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: '全機種の価格チェック',
        content:
          '**以下の数値はすべて、最終更新時点（更新日を参照）で記載の情報源から確認した米国価格で、他の通貨からの換算ではありません。** 2026年はメモリ不足により価格が繰り返し上昇しており、販売店間で食い違う行もあります。この表はスナップショットとして扱い、注文前に必ずベンダーのページを確認してください。欧州や日本の価格は異なりますが、確認が取れなかったため掲載していません。',
        columns: ['機種', 'チップとメモリ', '確認した米国価格', '状況と情報源メモ'],
        rows: [
          { '機種': 'NVIDIA DGX Spark', 'チップとメモリ': 'GB10、128GB', '確認した米国価格': '$6,950', '状況と情報源メモ': '2026-10-03にServeTheHomeが報道。発売時$3,999、2026年前半のFounders Editionは$4,699。OEMの64GB版は$4,999から' },
          { '機種': 'AMD Ryzen AI Halo', 'チップとメモリ': '395、128GB', '確認した米国価格': '$3,999', '状況と情報源メモ': '2TB SSD。発売時の報道ではMicro Center' },
          { '機種': 'AMD Ryzen AI Halo 192GB', 'チップとメモリ': 'PRO 495、192GB', '確認した米国価格': '$7,299', '状況と情報源メモ': '単独の報道（VideoCardz）。小売店ページでは未確認' },
          { '機種': 'Framework Desktop 192GB', 'チップとメモリ': 'PRO 495、192GB', '確認した米国価格': 'DIY $6,799 / 完成品 $7,449', '状況と情報源メモ': '予約受付、1バッチ、11月出荷（Phoronix、Framework）' },
          { '機種': 'Framework Desktop 128GB', 'チップとメモリ': '395、128GB', '確認した米国価格': '$3,449', '状況と情報源メモ': '比較用にPhoronixが引用' },
          { '機種': 'Minisforum MS-S1 MAX', 'チップとメモリ': '395、128GB', '確認した米国価格': 'セール $3,919 / 通常 $4,899', '状況と情報源メモ': 'Minisforum米国ストアの128GB/2TB。11月上旬出荷' },
          { '機種': 'HP Z2 Mini G1a', 'チップとメモリ': 'PRO 395、128GB', '確認した米国価格': '$3,734〜$5,079', '状況と情報源メモ': 'Newegg 128GB/1TBと、Notebookcheckが報じたHP米国価格（128GB/2TB）' },
          { '機種': 'GMKtec EVO-X2', 'チップとメモリ': '395、128GB', '確認した米国価格': '約$3,650', '状況と情報源メモ': '2026年10月の比較掲載（128GB/2TB）の1件。GMKtecストアの価格は動的に変動' },
          { '機種': 'Corsair AI Workstation 300', 'チップとメモリ': '395、128GB', '確認した米国価格': '$3,399', '状況と情報源メモ': 'Tom\'s Hardwareの報道。報道日は未確認' },
          { '機種': 'Beelink GTR9 Pro', 'チップとメモリ': '395、128GB', '確認した米国価格': '未確認', '状況と情報源メモ': '米国の掲載内容が食い違う。PRO 495版は現時点で中国のみ価格設定' },
          { '機種': 'Bosgame M5', 'チップとメモリ': '395、128GB', '確認した米国価格': '未確認', '状況と情報源メモ': '現行価格は見つからず' },
        ],
        note: 'MSI PRO MAX EDGE AI+ 11Mは確認が取れなかったため、掲載していません。当サイトが自ら開いたベンダーページに載っていない価格は、報道した媒体名を明記しています。',
      },
      performance: {
        id: 'performance',
        title: '独立テストの結果',
        content: [
          '**数値が公開されている直接比較で確認できたのは、StorageReviewによるRyzen AI HaloとDGX Sparkのテストのみで、全ケースでSparkが勝ちました。** 6つのモデルを使い、Linux上でバッチ64のvLLMオンラインサービングを実行したものです。Sparkは18シナリオのうち16で約2〜13倍の差をつけ、残り2つ（いずれも小型の密モデルでデコード中心の実行）では約11〜12%の差でした。最大の差が出たのは、プリフィル中心の処理と、Blackwellハードウェア向きのFP4モデルです。',
          'このテストが測っているのは、複数リクエストのサービングスループットです。1ユーザーのチャット速度は主にメモリ帯域幅に左右され、両者の帯域幅は近い（256対273GB/s）ため、差は小さいと予想しますが、これは予想であり、このテストでは測定されていません。AMD自身が公表している比較（Intelとの比較を含む）はベンダーによるテストであり、独立したベンチマークではありません。',
        ],
        note: 'StorageReviewのレビューは2026-07-06に公開され、2026-10-29に更新されています。両プラットフォームともソフトウェアの進化は速いため、比率に頼る前に再確認してください。',
      },
      capacity: {
        id: 'capacity',
        title: '128GBと192GBで動くモデル',
        content:
          '**何が読み込めるかは容量で決まり、どれだけ速く動くかは帯域幅とソフトウェアで決まります。** この表は、量子化の計算（パラメータ数 × 重みあたりのビット数に、コンテキスト用の作業領域を加えたもの）であり、ベンチマークではありません。',
        columns: ['モデルクラス', '量子化', '重みのみ', '128GB機', '192GB機'],
        rows: [
          { 'モデルクラス': '70B密モデル', '量子化': '8ビット', '重みのみ': '約70GB', '128GB機': '収まる、コンテキスト余裕あり', '192GB機': '余裕で収まる' },
          { 'モデルクラス': '120B級', '量子化': '4ビット', '重みのみ': '約60〜70GB', '128GB機': '余裕で収まる', '192GB機': '大きなコンテキストでも収まる' },
          { 'モデルクラス': '200B級', '量子化': '4ビット', '重みのみ': '約100GB', '128GB機': 'コンテキスト追加で厳しい', '192GB機': '収まる' },
          { 'モデルクラス': '300B級', '量子化': '4ビット', '重みのみ': '約150GB', '128GB機': '収まらない', '192GB機': '限られたコンテキストで収まる' },
        ],
        note: '標準設定では、すべてのメモリをGPUが使えるわけではありません。GPUがアドレスできるメモリ量はOS、カーネル、ドライバの設定によって異なり、StorageReviewはRyzen AI Haloが可変グラフィックスメモリを最大に設定した状態で出荷されると記しています。お使いのOSとバックエンド（VulkanまたはROCm）に合わせて、ベンダーのガイドを確認してください。',
      },
      intel: {
        id: 'intel',
        title: 'Intelの現状',
        content: [
          '**IntelのPanther Lakeプラットフォームは注目に値しますが、まだ大規模モデル向けのマシンではありません。** NanoReviewによると、Arc B390グラフィックスを備えたCore Ultra X9 388Hは最大96GB・153.6GB/sで、PRO 495の192GB・256GB/sに対して小さくなっています。HotHardwareは、一部のOpenVINOワークロードではArc B390がStrix Haloを上回り、ONNXではStrix Haloが上回ったと報告しています。これらの結果は395との比較であり、PRO 495との比較ではありません。',
          'HP Z2 Mini G1iはさらに別設計で、独立したNVIDIA RTX 4000 SFF Adaカードを搭載するIntelワークステーションです。つまり、1つの大きな共有プールではなく専用のGPUメモリを使います。これは、このページではなく、より広いワークステーション比較で扱うべき製品です。',
        ],
      },
      decision: {
        id: 'decision',
        title: 'どれを買うべきか',
        items: [
          '**128GBに最も安く入る方法:** AMD Ryzen AI Max+ 395搭載機（Ryzen AI Halo、Minisforum MS-S1 MAX、GMKtec EVO-X2、Corsair）。価格は変動しやすいため、最新の価格を比較してください。',
          '**128GB超:** Framework Desktop 192GBまたは192GB版Ryzen AI Halo。価格はSparkに近く、予約や限定販売の待ち時間を受け入れる必要があります。',
          '**最速の実測サービング、CUDA、ファインチューニング、2台の接続:** DGX Spark。ただし価格は発売時よりはるかに高くなっています。',
          '**法人購入と保証:** HP Z2 Mini G1a。',
          '**このクラスではない人:** 使うモデルが32〜64GBに収まるなら、まずmini PCガイドをお読みください。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '192GBを「128GBより速い」と読むこと。より大きなモデルや長いコンテキストを読み込めるだけで、速度は引き続き帯域幅、演算性能、ソフトウェアで決まります。',
          '9台のStrix Halo機を9種類の異なるプロセッサとして扱うこと。スペックシート上のチップ名ではなく、冷却、電力制限、ポート、保証を確認してください。',
          '発売当初の価格で買うこと。このクラスでは夏以降に値上がりした数値が複数あり、そのため表に日付を記載しています。',
          'ユニファイドメモリのすべてをGPUが使えると思い込むこと。割り当ての上限はOS、BIOS、バックエンドによって異なります。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AMD Ryzen AI HaloはDGX Sparkより速いですか？',
            a: '確認できた独立テストでは、いいえ。StorageReviewの測定では、vLLMサービングの18シナリオすべてでSparkが上回りました。ただし、デコード中心の2つの実行では差は約12%以内でした。',
          },
          {
            q: '192GBのマシンは、Sparkで動かせないモデルを動かせますか？',
            a: '読み込みという点ではそうです。約300B級の4ビットモデルは、重みだけで約150GBが必要です。実用的な速度で動くかどうかは、帯域幅とソフトウェアによります。',
          },
          {
            q: 'Strix Haloでモデルを動かすのにROCmは必須ですか？',
            a: '必ずしも必要ではありません。llama.cppはVulkan経由でも動作します。どちらのバックエンドが速いかはカーネルやドライバのバージョンによって異なるため、お使いの環境で両方を試してください。',
          },
          {
            q: 'なぜApple Siliconを含めないのですか？',
            a: 'Macは独自のメモリ階層とソフトウェアを持つ別カテゴリです。上でリンクしたMac購入ガイドをご覧ください。',
          },
          {
            q: '64GBのCore Ultra搭載mini PCは、DGX Sparkの競合になりますか？',
            a: 'なりません。メモリは多くても半分で、メモリバスははるかに狭いため、他のガイドで扱うmini PCと競合します。',
          },
          {
            q: 'これらのマシンはファインチューニングに向いていますか？',
            a: 'NVIDIAは、Sparkが最大70Bパラメータまでのファインチューニングに対応すると述べています。AMD搭載機については、同等のベンダー主張も独立テストも見つかりませんでした。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: 'GB10の仕様: 128GB LPDDR5X、273GB/s、200Gbpsネットワーク、DGX OS、200B推論の主張。' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: '128GB版$6,950、OEM 64GB版$4,999という2026年10月の報道。' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'vLLMサービングの結果、プラットフォームの注記、レビュー時点の価格（Halo $3,999、Founders Edition $4,699）。' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: 'Windows 11対応の128GB版Ryzen AI Halo、$3,999。' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: '192GB版Ryzen AI Haloの価格に関する報道。' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: '192GB版の予約価格、11月出荷、128GB版の比較価格。' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: 'PRO 495構成、メモリの選択肢、筐体と拡張の詳細。' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: '仕様、セール価格と通常価格、出荷見込み。' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: '128GB構成のHP米国価格。' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Corsair 395/128GB版の価格に関する報道。' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'IntelとAMDのチップのメモリ容量と帯域幅の数値。' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: 'Ryzen AI Max+ 395とのOpenVINOおよびONNX比較。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'ローカルAIワークステーション: AMD Strix Halo vs. NVIDIA DGX Spark',
      'description': 'ローカルAIワークステーションを比較。DGX SparkとAMD、Framework、HP、GMKtec、MinisforumのStrix Halo機を、メモリ・実測速度・出典付き価格で整理。',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'ja',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': '128GBを最も安く手に入れたい、またはx86互換性が必要ならAMD Strix Halo、価格よりCUDA、スループット、クラスタリングを重視するならDGX Sparkを選んでください。',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': '128〜192GBのローカルAIワークステーションを選び、AMD Strix Halo搭載機とNVIDIA DGX Sparkを比較している購入者' },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-zh.webp',
    affiliateDisclosure: true,
    title: '本地AI工作站：AMD Strix Halo对比NVIDIA DGX Spark',
    seoTitle: '本地AI工作站：Strix Halo对比DGX Spark选购指南',
    intro:
      '本地AI工作站是一类紧凑的单机系统：配备128 GB或更多统一内存（256位总线），专为运行32–64 GB迷你主机无法加载的百B级模型而设计。2026年10月，这一领域有三种架构：NVIDIA GB10（DGX Spark）、AMD Strix Halo（Ryzen AI Max+ 395与PRO 495），以及仍在场外观望的Intel Panther Lake。AMD胜在内存选项、x86兼容性和入门价格；NVIDIA胜在实测吞吐量、CUDA和多机互联。自夏季以来，内存涨价推高了多项价格，因此下方价格表为每一行都标注了来源。',
    metaDescription:
      '本地AI工作站对比：DGX Spark与AMD、Framework、HP、GMKtec、Minisforum的Strix Halo机型，从内存、实测速度和有来源的价格全面比较。',
    twitterDescription:
      'DGX Spark对比AMD Strix Halo：该买哪款128–192 GB本地AI工作站、独立测试结果如何，以及为什么它不属于迷你主机品类。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    audience: '正在选购128–192 GB本地AI工作站、并在AMD Strix Halo系统与NVIDIA DGX Spark之间比较的买家',
    primaryTerm: '本地AI工作站',
    targetKeywords: [
      'local ai workstation',
      'dgx spark alternatives',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**想要最便宜的128 GB入门配置和x86/Windows兼容性，选AMD Strix Halo；如果CUDA、吞吐量或双机互联比价格更重要，选DGX Spark。** 一项独立的vLLM测试显示，Spark在全部18个测试场景中都更快，其中16个场景领先约2–13倍，因此AMD的优势在于每美元的容量，而不是速度。这类机器与配备32–64 GB内存的普通Intel Core Ultra迷你主机不属于同一级别。',
    quickAnswerTop: {
      zh: {
        question: '不买DGX Spark的话，我该买哪款本地AI工作站？',
        answer:
          '想要最低的128 GB价格，选AMD Ryzen AI Max+ 395机型，例如AMD Ryzen AI Halo、Minisforum MS-S1 MAX或GMKtec EVO-X2。需要超过128 GB内存时，可选Framework Desktop和192 GB版Ryzen AI Halo，但价格与Spark相当。如果CUDA、微调或连接两台机器是购买的决定因素，那就直接选Spark。',
        bullets: [
          '最便宜的128 GB：AMD Ryzen AI Max+ 395系统（见下方价格表）',
          '内存最大：Ryzen AI Max+ PRO 495上的192 GB（Framework Desktop、Ryzen AI Halo）',
          '独立测试中最快：DGX Spark',
          '不属于此类：配备32–64 GB内存的普通迷你主机',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '为什么这不属于迷你主机品类', anchor: 'definition' },
      { label: '三种架构，三种取舍', anchor: 'architectures' },
      { label: '值得列入候选的五款机器', anchor: 'shortlist' },
      { label: '所有机型的价格核对', anchor: 'prices' },
      { label: '独立测试显示了什么', anchor: 'performance' },
      { label: '128 GB与192 GB分别能装下什么', anchor: 'capacity' },
      { label: 'Intel的现状', anchor: 'intel' },
      { label: '该买哪一款', anchor: 'decision' },
      { label: '常见错误', anchor: 'common-mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '来源', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'AMD Strix Halo工作站在128 GB入门价格上低于NVIDIA DGX Spark，并提供192 GB选项，但在我们找到的唯一一项独立测试中，Spark在所有测试场景中都更快。' },
      { type: 'plain-terms', content: '统一内存是指处理器和显卡共用同一大块内存，因此装不进显卡自带显存的模型仍然可以加载。它随后跑得有多快，主要取决于内存带宽和软件，而不是容量数字。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        items: [
          '类别定义：单机内置128 GB或更多统一内存，采用256位LPDDR5X总线（约256–273 GB/s）。这是我们编辑部的定义，不是厂商标准。',
          '同样的芯片，不同的机身：这里大多数机器使用同一颗Ryzen AI Max+ 395，因此区分它们的是散热、接口、固件、售后和价格。',
          '“价格只有Spark一半”的说法仅在128 GB时成立。192 GB的AMD机器价格与128 GB的Spark相近。',
          '独立的vLLM服务测试在全部18个场景中都偏向Spark；该测试没有测量单用户聊天速度。',
          'Intel Panther Lake最高只支持96 GB，对大型本地模型而言是值得关注的对象，而不是竞争对手。',
        ],
      },
      definition: {
        id: 'definition',
        title: '为什么这不属于迷你主机品类',
        content: [
          '**配备Core Ultra芯片和32–64 GB内存的普通迷你主机回答的是另一个问题：“我能在桌面上安静地运行7–32B模型吗？”** 本地AI工作站回答的则是：“我到底能不能加载百B级模型？”差距来自内存系统：256位LPDDR5X总线同时为CPU和GPU供数据，内存焊接在主板上，其中很大一部分可由GPU寻址。采用双通道DDR5内存条的迷你主机，带宽只有它的一小部分。关于那类机器，请参阅我们的[ASUS迷你主机指南](/zh/power-local-llm/asus-mini-pc-local-ai)和[迷你主机汇总](/zh/local-llms/best-mini-pcs-local-llm)。',
          '本页以“本地AI工作站”这一名称追踪这一类别，让这些机器彼此比较，而不是与入门级台式机比较。Mac属于另一个独立类别，详见[Mac选购指南](/zh/power-local-llm/best-mac-for-local-ai-2026)。',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: '三种架构，三种取舍',
        content:
          '**真正的竞争发生在平台之间，而不是九个品牌之间。** 大多数AMD机器共用同一颗处理器，区别在于散热、功耗限制、连接性、固件、保修和价格。',
        columns: ['架构', '内存', '主要优势', '主要限制'],
        rows: [
          { '架构': 'NVIDIA GB10 (DGX Spark)', '内存': '128 GB LPDDR5X，273 GB/s', '主要优势': 'CUDA与NVIDIA AI软件；200 Gbps ConnectX-7网络，可连接多台机器', '主要限制': '内存上限128 GB；仅支持Arm CPU和DGX OS（Linux）' },
          { '架构': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', '内存': '128 GB（395）或最高192 GB（PRO 495）', '主要优势': '每美元内存最多，x86，Windows或Linux', '主要限制': '软件与驱动成熟度因操作系统和后端（ROCm、Vulkan）而异；Ryzen AI Halo为10GbE，没有高速互联' },
          { '架构': 'Intel Panther Lake (Core Ultra X9 388H)', '内存': '最高96 GB，153.6 GB/s', '主要优势': '全新Arc显卡与NPU', '主要限制': '内存与带宽均不及两个对手' },
        ],
        note: 'Spark的数据来自NVIDIA产品页面；Intel的数据来自NanoReview规格数据库。在我们阅读的来源中，Framework和AMD都没有给出192 GB PRO 495的带宽；按256位总线、8533 MT/s计算约为273 GB/s，这是算术推算，我们没有看到独立实测。',
      },
      shortlist: {
        id: 'shortlist',
        title: '值得列入候选的五款机器',
        content:
          '**五款机器涵盖了真正的购买决策：内存最大、厂商参考设计、商用选择、性价比最佳和可扩展工作站。** 这是根据规格表和第三方报道做出的编辑部遴选；PromptQuorum没有对其中任何一款做过基准测试。链接指向厂商页面，不含联盟关系。',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: '内存最大，模块化且易维修',
            verdict:
              '搭载Ryzen AI Max+ PRO 495和192 GB LPDDR5X-8533，机身容积4.5升，提供DIY版或预装Fedora的整机版。Framework于2026年9月30日开放预订，仅限一个批次，预计11月开始首批发货。PRO 495配置带有一个开放的PCIe x4插槽，支持USB4和PCIe互联。',
            pros: [
              '内存比DGX Spark更大，且采用标准、易维修的机箱',
              '开放的PCIe插槽，以及有文档记录的DIY路径',
            ],
            cons: [
              '仅接受预订；11月发货日期只是预期',
              '192 GB只提供预配置内存，价格与Spark相当',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — 官方页面 →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'AMD对DGX Spark的官方回应',
            verdict:
              'AMD的开发者平台：Ryzen AI Max+ 395搭配128 GB LPDDR5x-8000（256 GB/s）、2 TB SSD、10GbE，可选Windows 11 Pro或AMD的Linux开发者镜像。据报道，零售渠道已出现192 GB的PRO 495版本。StorageReview的测试发现，它在vLLM服务中明显慢于Spark，并且没有用于多机互联的高速互联。',
            pros: [
              '预配置的AI软件栈和双系统支持',
              '直接从AMD获得395平台的风险最低方式',
            ],
            cons: [
              '据发布报道，美国仅通过Micro Center销售',
              '只有一个10GbE端口，因此无法像Spark那样多机扩展',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: '商用渠道之选',
            verdict:
              'HP Z工作站系列中的Ryzen AI Max+ PRO 395，最高128 GB，通过企业和经销商渠道销售，价格跨度很大。它与更便宜的机器是同一平台；你花钱买的是HP的保修和采购渠道。',
            pros: [
              '成熟的企业支持和采购渠道',
              '与精品品牌机器相同的128 GB平台',
            ],
            cons: [
              'HP自己的美国售价高于我们找到的所有精品品牌128 GB机器',
              '价格因经销商和存储容量而差异很大',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: '同款处理器上的性价比之选',
            verdict:
              'Ryzen AI Max+ 395搭配128 GB，是最早的精品品牌Strix Halo机器之一。其商店价格动态变化，我们看到的各处报价差异很大，请查看实时页面。它与上述机器使用同一颗处理器，因此选它的理由是价格，而不是性能。',
            pros: [
              '已有多篇第三方评测',
              '通常是价格较低的128 GB选项之一',
            ],
            cons: [
              '保修与支持条款由厂商自行规定，购买前请先核实',
              '不同卖家的价格和配置报价互相矛盾',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — 官方页面 →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: '面向工作站的设计',
            verdict:
              'Ryzen AI Max+ 395搭配128 GB LPDDR5x-8000，配备双10GbE、USB4 v2和PCIe x16扩展插槽，支持2U机架安装。我们查看时，其美国商店正在特价销售128 GB / 2 TB型号，预计11月初发货。据报道，192 GB的MS-S1 MAX-P495已开放预订。',
            pros: [
              '双10GbE和扩展插槽，在此类机器中并不常见',
              '可选机架安装，适合办公室或实验室使用',
            ],
            cons: [
              '正常售价比特价高25%',
              '卖家保修为美国商店2年',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — 官方商店 →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: '产品链接，不含联盟关系。规格来自厂商页面和所引用的报道；供货情况和配置会发生变化。',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: '所有机型的价格核对',
        content:
          '**以下每个数字都是最近一次更新时（见更新日期）、来自所述来源的美国价格；均未从其他货币换算。** 2026年内存短缺已多次推高价格，且若干条目在不同卖家之间互相矛盾，因此请把此表视为一个快照，下单前先打开厂商页面。欧洲价格有所不同，由于我们无法核实，所以未列出。',
        columns: ['机型', '芯片与内存', '美国价格', '状态与来源说明'],
        rows: [
          { '机型': 'NVIDIA DGX Spark', '芯片与内存': 'GB10，128 GB', '美国价格': '$6,950', '状态与来源说明': 'ServeTheHome 2026-10-03报道；年初发布价$3,999，Founders Edition $4,699；OEM 64 GB $4,999起' },
          { '机型': 'AMD Ryzen AI Halo', '芯片与内存': '395，128 GB', '美国价格': '$3,999', '状态与来源说明': '2 TB SSD；据发布报道在Micro Center销售' },
          { '机型': 'AMD Ryzen AI Halo 192GB', '芯片与内存': 'PRO 495，192 GB', '美国价格': '$7,299', '状态与来源说明': '仅有单一报道（VideoCardz）；未在零售商页面确认' },
          { '机型': 'Framework Desktop 192GB', '芯片与内存': 'PRO 495，192 GB', '美国价格': 'DIY $6,799 / 整机 $7,449', '状态与来源说明': '预订，仅一个批次，11月发货（Phoronix、Framework）' },
          { '机型': 'Framework Desktop 128GB', '芯片与内存': '395，128 GB', '美国价格': '$3,449', '状态与来源说明': 'Phoronix为对比而引用' },
          { '机型': 'Minisforum MS-S1 MAX', '芯片与内存': '395，128 GB', '美国价格': '特价 $3,919 / 正常 $4,899', '状态与来源说明': 'Minisforum美国商店128 GB / 2 TB；11月初发货' },
          { '机型': 'HP Z2 Mini G1a', '芯片与内存': 'PRO 395，128 GB', '美国价格': '$3,734至$5,079', '状态与来源说明': 'Newegg 128 GB / 1 TB对比Notebookcheck报道的HP美国128 GB / 2 TB价格' },
          { '机型': 'GMKtec EVO-X2', '芯片与内存': '395，128 GB', '美国价格': '约$3,650', '状态与来源说明': '2026年10月一份对比列表中的128 GB / 2 TB报价；GMKtec商店价格动态变化' },
          { '机型': 'Corsair AI Workstation 300', '芯片与内存': '395，128 GB', '美国价格': '$3,399', '状态与来源说明': 'Tom\'s Hardware报道；报道日期未确认' },
          { '机型': 'Beelink GTR9 Pro', '芯片与内存': '395，128 GB', '美国价格': '未核实', '状态与来源说明': '美国报价互相矛盾；PRO 495版本目前仅在中国标价' },
          { '机型': 'Bosgame M5', '芯片与内存': '395，128 GB', '美国价格': '未核实', '状态与来源说明': '未找到当前价格' },
        ],
        note: '我们无法核实MSI PRO MAX EDGE AI+ 11M，因此未列入。凡不是来自我们亲自打开的厂商页面的价格，均归于报道该价格的媒体。',
      },
      performance: {
        id: 'performance',
        title: '独立测试显示了什么',
        content: [
          '**我们找到的唯一一项有公开数据的正面对比，是StorageReview对Ryzen AI Halo与DGX Spark的测试，结果是Spark赢下了每一个场景。** 测试在Linux上对六个模型以批量64运行vLLM在线服务。在18个场景中，Spark在16个场景领先约2–13倍，在另外两个场景领先约11–12%，这两个都是较小稠密模型的解码密集型运行。差距最大的出现在预填充密集型任务和适合Blackwell硬件的FP4模型上。',
          '该测试衡量的是多请求服务吞吐量。单用户聊天速度主要取决于内存带宽，而两者的带宽相近（256对273 GB/s），因此我们预计那里的差距会小一些，但这只是预期，该测试并未测量。AMD自己发布的对比（包括与Intel的对比）属于厂商测试，不是独立基准测试。',
        ],
        note: 'StorageReview的评测发布于2026-07-06，修改于2026-10-29。两个平台的软件都在快速更新，因此在依赖某个倍数之前请重新核对。',
      },
      capacity: {
        id: 'capacity',
        title: '128 GB与192 GB分别能装下什么',
        content:
          '**容量决定能加载什么；带宽和软件决定跑得多快。** 此表是量化的算术推算（参数量 × 每权重位数，再加上上下文所需的工作空间），不是基准测试。',
        columns: ['模型级别', '量化', '仅权重', '128 GB机器', '192 GB机器'],
        rows: [
          { '模型级别': '70B稠密', '量化': '8位', '仅权重': '~70 GB', '128 GB机器': '可装下，留有上下文空间', '192 GB机器': '宽裕装下' },
          { '模型级别': '120B级', '量化': '4位', '仅权重': '~60–70 GB', '128 GB机器': '宽裕装下', '192 GB机器': '可配大上下文' },
          { '模型级别': '200B级', '量化': '4位', '仅权重': '~100 GB', '128 GB机器': '加上上下文后吃紧', '192 GB机器': '可装下' },
          { '模型级别': '300B级', '量化': '4位', '仅权重': '~150 GB', '128 GB机器': '装不下', '192 GB机器': '可装下，上下文有限' },
        ],
        note: '默认情况下，并非所有内存都可供GPU使用。GPU可寻址的内存量取决于操作系统、内核和驱动设置，StorageReview也指出Ryzen AI Halo出厂时可变显存预设为最大值。请查阅厂商针对你的操作系统和后端（Vulkan或ROCm）的指南。',
      },
      intel: {
        id: 'intel',
        title: 'Intel的现状',
        content: [
          '**Intel的Panther Lake平台值得关注，但目前还不是大模型机器。** 据NanoReview，搭载Arc B390显卡的Core Ultra X9 388H最高支持96 GB、153.6 GB/s，而PRO 495为192 GB、256 GB/s。HotHardware发现，在部分OpenVINO负载中Arc B390领先于Strix Halo，而在ONNX中Strix Halo领先。这些结果是与395对比的，不是与PRO 495对比。',
          'HP Z2 Mini G1i是另一种设计：一台搭载独立NVIDIA RTX 4000 SFF Ada显卡的Intel工作站，这意味着使用专用显存，而不是一大块共享内存。它应当放在更广泛的工作站对比中，而不属于本篇。',
        ],
      },
      decision: {
        id: 'decision',
        title: '该买哪一款',
        items: [
          '**进入128 GB的最便宜方式：** AMD Ryzen AI Max+ 395机器（Ryzen AI Halo、Minisforum MS-S1 MAX、GMKtec EVO-X2、Corsair）。价格波动大，请对比当前价格。',
          '**超过128 GB：** Framework Desktop 192GB或192 GB版Ryzen AI Halo，需接受与Spark相近的价格，以及预订或有限零售渠道的等待。',
          '**实测服务速度最快、需要CUDA、微调或两台机器互联：** DGX Spark，现在的价格比发布时高出许多。',
          '**企业采购与保修：** HP Z2 Mini G1a。',
          '**不属于此类：** 模型能装进32–64 GB的用户，应先阅读迷你主机指南。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '把192 GB理解为“比128 GB更快”。它能加载更大的模型和更长的上下文；速度仍取决于带宽、算力和软件。',
          '把九台Strix Halo机器当作九种不同的处理器。请查看散热、功耗限制、接口和保修，而不是规格表上的芯片名称。',
          '按发布初期的价格购买。此类机器中的若干价格自夏季以来已经上涨；价格表因此标注了日期。',
          '假定所有统一内存都能被GPU使用。分配上限取决于操作系统、BIOS和后端。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AMD Ryzen AI Halo比DGX Spark更快吗？',
            a: '在我们找到的独立测试中并非如此。StorageReview测得Spark在全部18个vLLM服务场景中领先，不过其中两个解码密集型运行的差距在约12%以内。',
          },
          {
            q: '192 GB的机器能运行Spark运行不了的模型吗？',
            a: '从加载角度看可以：约300B级的4位模型仅权重就需要约150 GB。能否以可用的速度运行，则取决于带宽和软件。',
          },
          {
            q: '在Strix Halo上运行模型必须用ROCm吗？',
            a: '不一定。llama.cpp也可以通过Vulkan运行；哪个后端更快取决于内核和驱动版本，因此请在你的环境中两者都测试。',
          },
          {
            q: '为什么不包括Apple Silicon？',
            a: 'Mac属于另一个独立类别，有自己的内存档位和软件；请参阅上文链接的Mac选购指南。',
          },
          {
            q: '配备64 GB内存的Core Ultra迷你主机是DGX Spark的竞争对手吗？',
            a: '不是。它的内存最多只有一半，内存总线也窄得多，因此它与我们其他指南中的迷你主机竞争。',
          },
          {
            q: '这些机器适合微调吗？',
            a: 'NVIDIA声明Spark支持最高70B参数的微调；对于AMD机器，我们没有找到可比的厂商声明或独立测试。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — 官方产品页面', description: 'GB10规格：128 GB LPDDR5X、273 GB/s、200 Gbps网络、DGX OS、200B推理声明。' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: '2026年10月关于128 GB型号$6,950价格和$4,999 64 GB OEM型号的报道。' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'vLLM服务测试结果、平台说明，以及评测时Halo $3,999与Founders Edition $4,699的价格。' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: '128 GB Ryzen AI Halo售价$3,999，支持Windows 11。' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: '关于192 GB Ryzen AI Halo价格的报道。' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: '192 GB预订价格、11月发货、128 GB对比价格。' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — 官方页面', description: 'PRO 495配置、内存选项、机箱与扩展详情。' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — 官方美国商店', description: '规格、特价与正常价格、预计发货时间。' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: 'HP 128 GB配置的美国价格。' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Corsair 395 / 128 GB价格报道。' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Intel与AMD芯片的内存容量和带宽数据。' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: '与Ryzen AI Max+ 395的OpenVINO和ONNX对比。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '本地AI工作站：AMD Strix Halo对比NVIDIA DGX Spark',
      'description': '本地AI工作站对比：DGX Spark与AMD、Framework、HP、GMKtec、Minisforum的Strix Halo机型，从内存、实测速度和有来源的价格全面比较。',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'zh',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': '想要最便宜的128 GB入门配置和x86兼容性，选AMD Strix Halo；如果CUDA、吞吐量或多机互联比价格更重要，选DGX Spark。',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': '正在选购128–192 GB本地AI工作站、并在AMD Strix Halo系统与NVIDIA DGX Spark之间比较的买家' },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-es.webp',
    affiliateDisclosure: true,
    title: 'Estaciones de trabajo de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
    seoTitle: 'Estaciones de IA local: Strix Halo vs. DGX Spark (guía)',
    intro:
      'Una estación de trabajo de IA local es un sistema compacto, todo en una caja, con 128 GB o más de memoria unificada en un bus de 256 bits, pensado para ejecutar modelos de clase 100B que ningún mini PC de 32–64 GB puede cargar. En octubre de 2026 el panorama tiene tres arquitecturas: NVIDIA GB10 (DGX Spark), AMD Strix Halo (Ryzen AI Max+ 395 y PRO 495) y, todavía en segundo plano, Intel Panther Lake. AMD gana en opciones de memoria, compatibilidad x86 y precio de entrada; NVIDIA gana en rendimiento medido, CUDA y clustering. Los precios de la memoria han subido varias cifras desde el verano, así que la tabla de precios de abajo indica una fuente para cada línea.',
    metaDescription:
      'Estaciones de IA local comparadas: DGX Spark frente a equipos AMD Strix Halo de Framework, HP, GMKtec y Minisforum — memoria, velocidad medida y precios.',
    twitterDescription:
      'DGX Spark vs. AMD Strix Halo: qué estación de IA local de 128–192 GB comprar, qué muestran las pruebas independientes y por qué esta no es una categoría de mini PC.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen una estación de trabajo de IA local de 128–192 GB y comparan los sistemas AMD Strix Halo con la NVIDIA DGX Spark',
    primaryTerm: 'estación de trabajo de IA local',
    targetKeywords: [
      'estación de trabajo ia local',
      'alternativas a dgx spark',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**Compra AMD Strix Halo para la entrada más barata a 128 GB y la compatibilidad con x86/Windows; compra la DGX Spark si CUDA, el rendimiento o el clustering de dos cajas importan más que el precio.** Una prueba independiente con vLLM encontró a la Spark más rápida en los 18 casos medidos, aproximadamente 2–13× en 16 de ellos, así que la ventaja de AMD es capacidad por dólar, no velocidad. Estos equipos son una clase aparte de los mini PC Intel Core Ultra habituales con 32–64 GB.',
    quickAnswerTop: {
      es: {
        question: '¿Qué estación de IA local debería comprar en lugar de una DGX Spark?',
        answer:
          'Para el precio más bajo a 128 GB, elige un equipo AMD Ryzen AI Max+ 395 como el AMD Ryzen AI Halo, el Minisforum MS-S1 MAX o el GMKtec EVO-X2. Para más de 128 GB, las opciones son el Framework Desktop y el Ryzen AI Halo de 192 GB, pero al precio de una Spark. Elige la propia Spark cuando CUDA, el fine-tuning o enlazar dos cajas decidan la compra.',
        bullets: [
          'Más barato a 128 GB: sistemas AMD Ryzen AI Max+ 395 (tabla de precios abajo)',
          'Más memoria: 192 GB con Ryzen AI Max+ PRO 495 (Framework Desktop, Ryzen AI Halo)',
          'Más rápida en pruebas independientes: la DGX Spark',
          'Fuera de esta clase: mini PC habituales con 32–64 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Por qué no es una categoría de mini PC', anchor: 'definition' },
      { label: 'Tres arquitecturas, tres compromisos', anchor: 'architectures' },
      { label: 'Las cinco máquinas para la lista corta', anchor: 'shortlist' },
      { label: 'Comparación de precios de todos los equipos', anchor: 'prices' },
      { label: 'Qué muestran las pruebas independientes', anchor: 'performance' },
      { label: 'Qué cabe en 128 GB frente a 192 GB', anchor: 'capacity' },
      { label: 'Dónde está Intel', anchor: 'intel' },
      { label: 'Cuál comprar', anchor: 'decision' },
      { label: 'Errores comunes', anchor: 'common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Las estaciones AMD Strix Halo se quedan por debajo de la NVIDIA DGX Spark en precio de entrada a 128 GB y ofrecen 192 GB, pero en la única prueba independiente que encontramos la Spark es más rápida en todos los casos medidos.' },
      { type: 'plain-terms', content: 'Memoria unificada significa que el procesador y los gráficos comparten un único gran conjunto de RAM, de modo que un modelo que no cabría en la memoria propia de una tarjeta gráfica aún puede cargarse. La velocidad a la que luego se ejecuta depende sobre todo del ancho de banda de memoria y del software, no de la cifra de capacidad.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'Definición de la clase: 128 GB o más de memoria unificada en un bus LPDDR5X de 256 bits (unos 256–273 GB/s), en una sola caja compacta. Es nuestra definición editorial, no un estándar de los fabricantes.',
          'Mismo silicio, cajas distintas: la mayoría de los equipos aquí usan el mismo Ryzen AI Max+ 395, así que lo que los separa es la refrigeración, los puertos, el firmware, el soporte y el precio.',
          'La afirmación de "la mitad del precio de una Spark" solo se cumple a 128 GB. Los equipos AMD de 192 GB cuestan más o menos lo mismo que una Spark de 128 GB.',
          'Las pruebas independientes de servicio con vLLM favorecen a la Spark en los 18 casos; la velocidad de chat para un solo usuario no se midió en esa prueba.',
          'Intel Panther Lake llega como máximo a 96 GB y es un punto a vigilar, no un competidor, para modelos locales grandes.',
        ],
      },
      definition: {
        id: 'definition',
        title: 'Por qué no es una categoría de mini PC',
        content: [
          '**Un mini PC habitual con un chip Core Ultra y 32–64 GB de RAM responde a otra pregunta: "¿puedo ejecutar un modelo de 7–32B en silencio en mi escritorio?"** Una estación de trabajo de IA local responde a "¿puedo siquiera cargar un modelo de clase 100B?". La diferencia viene del sistema de memoria: un bus LPDDR5X de 256 bits que alimenta a CPU y GPU, soldado a la placa, con una gran parte direccionable por la GPU. Los mini PC con módulos DDR5 de dos canales alcanzan una fracción de ese ancho de banda. Para esos equipos, consulta nuestra [guía de mini PC ASUS](/es/power-local-llm/asus-mini-pc-local-ai) y el [resumen de mini PC](/es/local-llms/best-mini-pcs-local-llm).',
          'Esta página sigue la clase bajo un solo nombre, estaciones de trabajo de IA local, para que estos equipos se comparen entre sí y no con ordenadores de sobremesa de gama de entrada. Los Mac forman una categoría aparte y se tratan en la [guía de compra de Mac](/es/power-local-llm/best-mac-for-local-ai-2026).',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'Tres arquitecturas, tres compromisos',
        content:
          '**La competencia real es entre plataformas, no entre las nueve marcas.** La mayoría de los equipos AMD comparten un procesador y se diferencian en refrigeración, límites de potencia, conectividad, firmware, garantía y precio.',
        columns: ['Arquitectura', 'Memoria', 'Ventaja principal', 'Limitación principal'],
        rows: [
          { 'Arquitectura': 'NVIDIA GB10 (DGX Spark)', 'Memoria': '128 GB LPDDR5X, 273 GB/s', 'Ventaja principal': 'CUDA y software de IA de NVIDIA, red ConnectX-7 de 200 Gbps para enlazar cajas', 'Limitación principal': 'Memoria limitada a 128 GB; CPU Arm y solo DGX OS (Linux)' },
          { 'Arquitectura': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', 'Memoria': '128 GB (395) o hasta 192 GB (PRO 495)', 'Ventaja principal': 'Más memoria por dólar, x86, Windows o Linux', 'Limitación principal': 'La madurez del software y de los drivers varía según el SO y el backend (ROCm, Vulkan); 10GbE en lugar de una red de alta velocidad en el Ryzen AI Halo' },
          { 'Arquitectura': 'Intel Panther Lake (Core Ultra X9 388H)', 'Memoria': 'Hasta 96 GB, 153.6 GB/s', 'Ventaja principal': 'Nuevos gráficos Arc y NPU', 'Limitación principal': 'Menos memoria y ancho de banda que ambos rivales' },
        ],
        note: 'Las cifras de la Spark proceden de la página de producto de NVIDIA; las de Intel, de la base de datos de especificaciones de NanoReview. Ni Framework ni AMD indican el ancho de banda del PRO 495 de 192 GB en las fuentes que leímos; el bus de 256 bits a 8533 MT/s da aproximadamente 273 GB/s por aritmética, algo que no hemos visto medido de forma independiente.',
      },
      shortlist: {
        id: 'shortlist',
        title: 'Las cinco máquinas para la lista corta',
        content:
          '**Cinco máquinas cubren las decisiones de compra reales: la que más memoria tiene, el diseño de referencia del fabricante, la opción para empresas, la mejor relación calidad-precio y la estación ampliable.** Es una selección editorial a partir de fichas técnicas e informes de terceros; PromptQuorum no ha medido ninguna de ellas. Los enlaces van a páginas de los fabricantes, sin relación de afiliación.',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: 'La que más memoria tiene, modular y reparable',
            verdict:
              'Ryzen AI Max+ PRO 495 con 192 GB de LPDDR5X-8533 en una caja de 4.5 L, disponible como DIY Edition o premontado con Fedora. Framework abrió las reservas el 30 de septiembre de 2026 para un único lote, con los primeros envíos previstos para noviembre. La configuración PRO 495 tiene una ranura PCIe x4 libre y admite clustering por USB4 y PCIe.',
            pros: [
              'Más memoria que una DGX Spark en un chasis estándar y reparable',
              'Ranura PCIe libre y una vía DIY documentada',
            ],
            cons: [
              'Solo por reserva; la fecha de envío de noviembre es una expectativa',
              'Los 192 GB solo se ofrecen como memoria preconfigurada, a un precio similar al de una Spark',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — página oficial →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'La respuesta propia de AMD a la DGX Spark',
            verdict:
              'La plataforma para desarrolladores de AMD: Ryzen AI Max+ 395 con 128 GB de LPDDR5x-8000 (256 GB/s), un SSD de 2 TB, 10GbE y la opción de Windows 11 Pro o de la imagen de desarrollo Linux de AMD. Se ha informado de una versión PRO 495 de 192 GB en tiendas. La prueba de StorageReview la encontró claramente más lenta que la Spark en servicio con vLLM, sin una red de alta velocidad para clustering.',
            pros: [
              'Pila de software de IA preconfigurada y compatibilidad con dos sistemas operativos',
              'La forma de menor riesgo de obtener la plataforma 395 directamente de AMD',
            ],
            cons: [
              'Disponibilidad en EE. UU. solo a través de Micro Center, según la cobertura del lanzamiento',
              'Un único puerto 10GbE, por lo que no escala con varias cajas como la Spark',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: 'La opción del canal empresarial',
            verdict:
              'Ryzen AI Max+ PRO 395 con hasta 128 GB dentro de la línea de estaciones Z de HP, que se vende por canales empresariales y de distribuidores con una gran dispersión de precios. Es la misma plataforma que las cajas más baratas; se paga por la garantía de HP y la vía de compra corporativa.',
            pros: [
              'Soporte empresarial consolidado y canales de compra establecidos',
              'La misma plataforma de 128 GB que los equipos de fabricantes boutique',
            ],
            cons: [
              'El precio propio de HP en EE. UU. está por encima de todos los equipos boutique de 128 GB que encontramos',
              'Los precios varían mucho según el distribuidor y el tamaño de almacenamiento',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: 'La opción de valor con el mismo procesador',
            verdict:
              'Ryzen AI Max+ 395 con 128 GB, entre las primeras cajas Strix Halo de fabricantes boutique. Su precio en la tienda cambia de forma dinámica y los anuncios que vimos variaban mucho, así que consulta la página en vivo. Usa el mismo procesador que los equipos anteriores, por lo que su argumento es el precio, no el rendimiento.',
            pros: [
              'Existen varias reseñas de terceros',
              'A menudo entre las opciones de 128 GB más baratas',
            ],
            cons: [
              'Las condiciones de garantía y soporte son las del propio fabricante; compruébalas antes de comprar',
              'Los precios y las configuraciones anunciados entran en conflicto entre vendedores',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — página oficial →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'Diseño orientado a estación de trabajo',
            verdict:
              'Ryzen AI Max+ 395 con 128 GB de LPDDR5x-8000, doble 10GbE, USB4 v2 y una ranura de expansión PCIe x16, con compatibilidad de montaje en rack 2U. Su tienda de EE. UU. tenía el modelo de 128 GB / 2 TB en oferta cuando lo comprobamos, con envío estimado para principios de noviembre. Se ha informado de un MS-S1 MAX-P495 de 192 GB en reserva.',
            pros: [
              'Doble 10GbE y una ranura de expansión, algo poco habitual en esta clase',
              'Opción de montaje en rack para oficina o laboratorio',
            ],
            cons: [
              'El precio normal es un 25% superior al precio de oferta',
              'Garantía del vendedor de 2 años en la tienda de EE. UU.',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — tienda oficial →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: 'Enlaces de producto, sin relación de afiliación. Las especificaciones proceden de las páginas de los fabricantes y de los informes citados; la disponibilidad y las configuraciones cambian.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'Comparación de precios de todos los equipos',
        content:
          '**Cada cifra de abajo es un precio de EE. UU. de la fuente indicada, en el momento de la última actualización (consulta la fecha de actualización); ninguna está convertida de otra moneda.** La escasez de memoria ha subido los precios varias veces en 2026 y varias líneas entran en conflicto entre vendedores, así que trata la tabla como una instantánea y abre la página del fabricante antes de pedir. Los precios europeos son distintos y no se incluyen porque no pudimos verificarlos.',
        columns: ['Máquina', 'Chip y memoria', 'Precio EE. UU. visto', 'Estado y fuente'],
        rows: [
          { 'Máquina': 'NVIDIA DGX Spark', 'Chip y memoria': 'GB10, 128 GB', 'Precio EE. UU. visto': '$6,950', 'Estado y fuente': 'Informado el 2026-10-03 por ServeTheHome; lanzada a $3,999, Founders Edition a $4,699 antes en 2026; modelos OEM de 64 GB desde $4,999' },
          { 'Máquina': 'AMD Ryzen AI Halo', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': '$3,999', 'Estado y fuente': 'SSD de 2 TB; Micro Center según la cobertura del lanzamiento' },
          { 'Máquina': 'AMD Ryzen AI Halo 192GB', 'Chip y memoria': 'PRO 495, 192 GB', 'Precio EE. UU. visto': '$7,299', 'Estado y fuente': 'Un solo informe (VideoCardz); no confirmado en la página de un distribuidor' },
          { 'Máquina': 'Framework Desktop 192GB', 'Chip y memoria': 'PRO 495, 192 GB', 'Precio EE. UU. visto': '$6,799 DIY / $7,449 premontado', 'Estado y fuente': 'Reserva, un lote, envío en noviembre (Phoronix, Framework)' },
          { 'Máquina': 'Framework Desktop 128GB', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': '$3,449', 'Estado y fuente': 'Citado por Phoronix a modo de comparación' },
          { 'Máquina': 'Minisforum MS-S1 MAX', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': '$3,919 oferta / $4,899 normal', 'Estado y fuente': '128 GB / 2 TB en la tienda de Minisforum EE. UU.; envío a principios de noviembre' },
          { 'Máquina': 'HP Z2 Mini G1a', 'Chip y memoria': 'PRO 395, 128 GB', 'Precio EE. UU. visto': '$3,734 a $5,079', 'Estado y fuente': 'Newegg 128 GB / 1 TB frente al precio de HP EE. UU. informado por Notebookcheck para 128 GB / 2 TB' },
          { 'Máquina': 'GMKtec EVO-X2', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': 'unos $3,650', 'Estado y fuente': 'Un anuncio de una comparativa de octubre de 2026 para 128 GB / 2 TB; el precio en la tienda de GMKtec cambia de forma dinámica' },
          { 'Máquina': 'Corsair AI Workstation 300', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': '$3,399', 'Estado y fuente': 'Informe de Tom\'s Hardware; fecha del informe sin confirmar' },
          { 'Máquina': 'Beelink GTR9 Pro', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': 'no verificado', 'Estado y fuente': 'Los anuncios en EE. UU. entran en conflicto; una variante PRO 495 tiene precio solo en China, por ahora' },
          { 'Máquina': 'Bosgame M5', 'Chip y memoria': '395, 128 GB', 'Precio EE. UU. visto': 'no verificado', 'Estado y fuente': 'No se encontró ningún precio actual' },
        ],
        note: 'No pudimos verificar el MSI PRO MAX EDGE AI+ 11M, por lo que no figura en la lista. Los precios que no estaban en una página de fabricante que abrimos nosotros mismos se atribuyen a la publicación que los informó.',
      },
      performance: {
        id: 'performance',
        title: 'Qué muestran las pruebas independientes',
        content: [
          '**El único enfrentamiento directo con cifras publicadas que encontramos es la prueba de StorageReview del Ryzen AI Halo frente a la DGX Spark, y la Spark ganó en todos los casos.** Ejecutó servicio online con vLLM en Linux con lote 64 sobre seis modelos. La Spark lideró por aproximadamente 2–13× en 16 de los 18 escenarios y por cerca de un 11–12% en los otros dos, ambos con mucha carga de decodificación en modelos densos más pequeños. Las mayores diferencias aparecieron en el trabajo con mucho prefill y en el modelo FP4, que encaja con el hardware Blackwell.',
          'Esa prueba mide el rendimiento de servicio con múltiples solicitudes. La velocidad de chat de un solo usuario depende sobre todo del ancho de banda de memoria, que es parecido entre ambas (256 frente a 273 GB/s), por lo que esperaríamos una diferencia menor, pero es una expectativa y no se midió en esa prueba. Las comparaciones publicadas por la propia AMD, incluidas las que la enfrentan a Intel, son pruebas del fabricante y no benchmarks independientes.',
        ],
        note: 'La reseña de StorageReview se publicó el 2026-07-06 y se modificó el 2026-10-29. El software avanza con rapidez en ambas plataformas, así que vuelve a comprobarlo antes de fiarte de una proporción.',
      },
      capacity: {
        id: 'capacity',
        title: 'Qué cabe en 128 GB frente a 192 GB',
        content:
          '**La capacidad decide qué se carga; el ancho de banda y el software deciden a qué velocidad se ejecuta.** La tabla es aritmética de cuantización (parámetros × bits por peso, más espacio de trabajo para el contexto), no un benchmark.',
        columns: ['Clase de modelo', 'Cuantización', 'Solo los pesos', 'Equipo de 128 GB', 'Equipo de 192 GB'],
        rows: [
          { 'Clase de modelo': '70B denso', 'Cuantización': '8 bits', 'Solo los pesos': '~70 GB', 'Equipo de 128 GB': 'Cabe, con espacio para contexto', 'Equipo de 192 GB': 'Cabe con holgura' },
          { 'Clase de modelo': 'Clase 120B', 'Cuantización': '4 bits', 'Solo los pesos': '~60–70 GB', 'Equipo de 128 GB': 'Cabe con holgura', 'Equipo de 192 GB': 'Cabe con contexto grande' },
          { 'Clase de modelo': 'Clase 200B', 'Cuantización': '4 bits', 'Solo los pesos': '~100 GB', 'Equipo de 128 GB': 'Justo al añadir contexto', 'Equipo de 192 GB': 'Cabe' },
          { 'Clase de modelo': 'Clase 300B', 'Cuantización': '4 bits', 'Solo los pesos': '~150 GB', 'Equipo de 128 GB': 'No cabe', 'Equipo de 192 GB': 'Cabe con contexto limitado' },
        ],
        note: 'No toda la memoria está disponible para la GPU por defecto. La cantidad de memoria que la GPU puede direccionar depende del SO, del kernel y de los ajustes de los drivers, y StorageReview señala que el Ryzen AI Halo se entrega con la memoria gráfica variable configurada al máximo. Consulta la guía del fabricante para tu sistema operativo y tu backend (Vulkan o ROCm).',
      },
      intel: {
        id: 'intel',
        title: 'Dónde está Intel',
        content: [
          '**La plataforma Panther Lake de Intel merece vigilarse, pero todavía no es una máquina para modelos grandes.** El Core Ultra X9 388H con gráficos Arc B390 admite hasta 96 GB a 153.6 GB/s según NanoReview, frente a 192 GB a 256 GB/s del PRO 495. HotHardware encontró el Arc B390 por delante de Strix Halo en algunas cargas de OpenVINO, mientras que Strix Halo lideró en ONNX. Esos resultados comparan con el 395, no con el PRO 495.',
          'El HP Z2 Mini G1i es otro diseño distinto: una estación Intel con una tarjeta NVIDIA RTX 4000 SFF Ada dedicada, es decir, memoria de GPU dedicada en lugar de un gran conjunto compartido. Pertenece a una comparación más amplia de estaciones de trabajo, no a esta.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Cuál comprar',
        items: [
          '**La forma más barata de llegar a 128 GB:** un equipo AMD Ryzen AI Max+ 395 (Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). Compara los precios actuales, porque son volátiles.',
          '**Más de 128 GB:** Framework Desktop 192GB o el Ryzen AI Halo de 192 GB, aceptando un precio cercano al de una Spark y una espera por reserva o por venta limitada.',
          '**Servicio más rápido medido, CUDA, fine-tuning o dos cajas enlazadas:** la DGX Spark, ahora a un precio mucho más alto que en el lanzamiento.',
          '**Compra empresarial y garantía:** HP Z2 Mini G1a.',
          '**Fuera de esta clase:** quien tenga modelos que quepan en 32–64 GB debería leer primero las guías de mini PC.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          'Interpretar 192 GB como "más rápido que 128 GB". Carga modelos y contextos más grandes; la velocidad sigue dependiendo del ancho de banda, del cómputo y del software.',
          'Tratar nueve cajas Strix Halo como nueve procesadores distintos. Fíjate en la refrigeración, los límites de potencia, los puertos y la garantía en lugar del nombre del chip en la ficha técnica.',
          'Comprar con un precio de la época del lanzamiento. Varias cifras de esta clase han subido desde el verano; por eso la tabla lleva fechas.',
          'Suponer que toda la memoria unificada es utilizable por la GPU. Los límites de asignación dependen del sistema operativo, de la BIOS y del backend.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es el AMD Ryzen AI Halo más rápido que la DGX Spark?',
            a: 'No, en la prueba independiente que encontramos. StorageReview midió a la Spark por delante en los 18 escenarios de servicio con vLLM, aunque dos ejecuciones con mucha decodificación quedaron dentro de un 12% aproximadamente.',
          },
          {
            q: '¿Puede un equipo de 192 GB ejecutar modelos que una Spark no puede?',
            a: 'Sí, en cuanto a la carga: un modelo de clase 300B a 4 bits necesita unos 150 GB solo para los pesos. Que se ejecute a una velocidad utilizable depende del ancho de banda y del software.',
          },
          {
            q: '¿Necesito ROCm para ejecutar modelos en Strix Halo?',
            a: 'No necesariamente. llama.cpp también puede funcionar mediante Vulkan; qué backend es más rápido depende de las versiones del kernel y de los drivers, así que prueba ambos en tu configuración.',
          },
          {
            q: '¿Por qué no incluir Apple Silicon?',
            a: 'Los Mac son una categoría aparte, con sus propios niveles de memoria y su propio software; consulta la guía de compra de Mac enlazada arriba.',
          },
          {
            q: '¿Es un mini PC Core Ultra con 64 GB un competidor de la DGX Spark?',
            a: 'No. Tiene como mucho la mitad de memoria y un bus de memoria mucho más estrecho, así que compite con los mini PC de nuestras otras guías.',
          },
          {
            q: '¿Son buenos estos equipos para el fine-tuning?',
            a: 'NVIDIA afirma que la Spark admite fine-tuning de hasta 70B parámetros; no encontramos una afirmación comparable de los fabricantes ni una prueba independiente para los equipos AMD.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: 'Especificaciones del GB10: 128 GB LPDDR5X, 273 GB/s, red de 200 Gbps, DGX OS, afirmación de inferencia de 200B.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: 'Informe de octubre de 2026 sobre el precio de $6,950 de la versión de 128 GB y los modelos OEM de 64 GB a $4,999.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'Resultados de servicio con vLLM, notas de la plataforma, precios de $3,999 del Halo y $4,699 de la Founders Edition en el momento de la reseña.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: 'Ryzen AI Halo de 128 GB a $3,999 con compatibilidad con Windows 11.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: 'Informe sobre el precio del Ryzen AI Halo de 192 GB.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: 'Precios de reserva del modelo de 192 GB, envío en noviembre, precio de comparación del modelo de 128 GB.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: 'Configuración PRO 495, opciones de memoria, chasis y detalles de expansión.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: 'Especificaciones, precios de oferta y normal, estimación de envío.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: 'Precios de HP en EE. UU. para las configuraciones de 128 GB.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Informe del precio del Corsair con 395 / 128 GB.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Cifras de capacidad y ancho de banda de memoria de los chips de Intel y AMD.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: 'Comparaciones de OpenVINO y ONNX frente al Ryzen AI Max+ 395.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Estaciones de trabajo de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
      'description': 'Estaciones de IA local comparadas: DGX Spark frente a equipos AMD Strix Halo de Framework, HP, GMKtec y Minisforum — memoria, velocidad medida y precios.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
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
      'inLanguage': 'es',
      'url': 'https://www.promptquorum.com/es/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': 'Compra AMD Strix Halo para la entrada más barata a 128 GB y la compatibilidad con x86; compra la DGX Spark si CUDA, el rendimiento o el clustering importan más que el precio.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Compradores que eligen una estación de trabajo de IA local de 128–192 GB y comparan los sistemas AMD Strix Halo con la NVIDIA DGX Spark' },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-pt.webp',
    affiliateDisclosure: true,
    title: 'Workstations de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
    seoTitle: 'Workstations de IA local: Strix Halo vs. DGX Spark',
    intro:
      'Uma workstation de IA local é um sistema compacto, em uma única caixa, com 128 GB ou mais de memória unificada em barramento de 256 bits, feito para rodar modelos da classe de 100B que nenhum mini PC de 32 a 64 GB consegue carregar. Em outubro de 2026, o cenário tem três arquiteturas: NVIDIA GB10 (DGX Spark), AMD Strix Halo (Ryzen AI Max+ 395 e PRO 495) e, ainda na reserva, Intel Panther Lake. A AMD leva vantagem em opções de memória, compatibilidade x86 e preço de entrada; a NVIDIA leva vantagem em throughput medido, CUDA e clustering. Os preços de memória empurraram vários valores para cima desde o verão, por isso a tabela de preços abaixo traz a fonte de cada linha.',
    metaDescription:
      'Workstations de IA local comparadas: DGX Spark vs. AMD Strix Halo da AMD, Framework, HP, GMKtec e Minisforum — memória, velocidade medida e preços.',
    twitterDescription:
      'DGX Spark vs. AMD Strix Halo: qual workstation de IA local de 128 a 192 GB comprar, o que mostram os testes independentes e por que esta não é uma categoria de mini PC.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que escolhem uma workstation de IA local de 128 a 192 GB e comparam sistemas AMD Strix Halo com o NVIDIA DGX Spark',
    primaryTerm: 'workstation de IA local',
    targetKeywords: [
      'workstation de ia local',
      'alternativas ao dgx spark',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**Compre AMD Strix Halo para a entrada mais barata em 128 GB e compatibilidade com x86/Windows; compre o DGX Spark se CUDA, throughput ou clustering de duas caixas pesarem mais que o preço.** Um teste independente com vLLM encontrou o Spark mais rápido em todos os 18 casos medidos, por cerca de 2 a 13 vezes em 16 deles, então a vantagem da AMD é capacidade por dólar, não velocidade. Essas máquinas formam uma classe à parte dos mini PCs comuns com Intel Core Ultra e 32 a 64 GB.',
    quickAnswerTop: {
      pt: {
        question: 'Qual workstation de IA local devo comprar em vez de um DGX Spark?',
        answer:
          'Para o menor preço em 128 GB, escolha uma máquina AMD Ryzen AI Max+ 395, como o AMD Ryzen AI Halo, o Minisforum MS-S1 MAX ou o GMKtec EVO-X2. Para mais de 128 GB, as opções são o Framework Desktop e o Ryzen AI Halo de 192 GB, mas ao preço de um Spark. Escolha o próprio Spark quando CUDA, fine-tuning ou a ligação de duas caixas decidirem a compra.',
        bullets: [
          'Mais barato em 128 GB: sistemas AMD Ryzen AI Max+ 395 (tabela de preços abaixo)',
          'Mais memória: 192 GB no Ryzen AI Max+ PRO 495 (Framework Desktop, Ryzen AI Halo)',
          'Mais rápido em testes independentes: o DGX Spark',
          'Fora desta classe: mini PCs comuns com 32 a 64 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Por que esta não é uma categoria de mini PC', anchor: 'definition' },
      { label: 'Três arquiteturas, três compromissos', anchor: 'architectures' },
      { label: 'As cinco máquinas para a lista final', anchor: 'shortlist' },
      { label: 'Comparação de preços de todas as máquinas', anchor: 'prices' },
      { label: 'O que mostram os testes independentes', anchor: 'performance' },
      { label: 'O que cabe em 128 GB vs. 192 GB', anchor: 'capacity' },
      { label: 'Onde a Intel está', anchor: 'intel' },
      { label: 'Qual comprar', anchor: 'decision' },
      { label: 'Erros comuns', anchor: 'common-mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'As workstations AMD Strix Halo custam menos que o NVIDIA DGX Spark na entrada de 128 GB e oferecem 192 GB, mas no único teste independente que encontramos o Spark é mais rápido em todos os casos medidos.' },
      { type: 'plain-terms', content: 'Memória unificada significa que o processador e a parte gráfica compartilham um único grande bloco de RAM, então um modelo que não caberia na memória da própria placa de vídeo ainda pode ser carregado. A velocidade com que ele roda depende sobretudo da largura de banda da memória e do software, não do valor da capacidade.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'Definição da classe: 128 GB ou mais de memória unificada em um barramento LPDDR5X de 256 bits (cerca de 256 a 273 GB/s), em uma única caixa compacta. Esta é a nossa definição editorial, não um padrão de fabricante.',
          'Mesmo silício, caixas diferentes: a maioria das máquinas aqui usa o mesmo Ryzen AI Max+ 395, então refrigeração, portas, firmware, suporte e preço são o que as diferencia.',
          'A afirmação de "metade do preço de um Spark" vale apenas em 128 GB. As máquinas AMD de 192 GB custam cerca do mesmo que um Spark de 128 GB.',
          'Os testes independentes de serving com vLLM favorecem o Spark nos 18 casos; a velocidade de chat para um único usuário não foi medida nesse teste.',
          'O Intel Panther Lake chega no máximo a 96 GB e é um item a observar, não um concorrente, para modelos locais grandes.',
        ],
      },
      definition: {
        id: 'definition',
        title: 'Por que esta não é uma categoria de mini PC',
        content: [
          '**Um mini PC comum com chip Core Ultra e 32 a 64 GB de RAM responde a outra pergunta: "consigo rodar um modelo de 7 a 32B em silêncio na minha mesa?"** Uma workstation de IA local responde a "consigo carregar um modelo da classe de 100B?". A diferença vem do sistema de memória: um barramento LPDDR5X de 256 bits que alimenta CPU e GPU, soldado à placa, com grande parte endereçável pela GPU. Mini PCs com módulos DDR5 de dois canais alcançam uma fração dessa largura de banda. Para essas máquinas, veja nosso [guia de mini PCs ASUS](/pt/power-local-llm/asus-mini-pc-local-ai) e o [comparativo de mini PCs](/pt/local-llms/best-mini-pcs-local-llm).',
          'Esta página acompanha a classe sob um único nome, Workstations de IA local, para que essas máquinas sejam comparadas entre si e não com desktops de entrada. Os Macs formam uma categoria à parte e são tratados no [guia de compra de Mac](/pt/power-local-llm/best-mac-for-local-ai-2026).',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'Três arquiteturas, três compromissos',
        content:
          '**A competição real é entre plataformas, não entre as nove marcas.** A maioria das máquinas AMD compartilha um único processador e se diferencia em refrigeração, limites de potência, conectividade, firmware, garantia e preço.',
        columns: ['Arquitetura', 'Memória', 'Principal vantagem', 'Principal limitação'],
        rows: [
          { 'Arquitetura': 'NVIDIA GB10 (DGX Spark)', 'Memória': '128 GB LPDDR5X, 273 GB/s', 'Principal vantagem': 'CUDA e software de IA da NVIDIA, rede ConnectX-7 de 200 Gbps para ligar caixas', 'Principal limitação': 'Memória limitada a 128 GB; CPU Arm e apenas DGX OS (Linux)' },
          { 'Arquitetura': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', 'Memória': '128 GB (395) ou até 192 GB (PRO 495)', 'Principal vantagem': 'Mais memória por dólar, x86, Windows ou Linux', 'Principal limitação': 'A maturidade de software e drivers varia conforme o SO e o backend (ROCm, Vulkan); 10GbE em vez de uma malha de alta velocidade no Ryzen AI Halo' },
          { 'Arquitetura': 'Intel Panther Lake (Core Ultra X9 388H)', 'Memória': 'Até 96 GB, 153.6 GB/s', 'Principal vantagem': 'Novos gráficos Arc e NPU', 'Principal limitação': 'Menos memória e largura de banda que os dois rivais' },
        ],
        note: 'Os números do Spark vêm da página de produto da NVIDIA; os da Intel vêm do banco de dados de especificações da NanoReview. A largura de banda do PRO 495 de 192 GB não é informada pela Framework nem pela AMD nas fontes que lemos; o barramento de 256 bits a 8533 MT/s resulta em cerca de 273 GB/s por cálculo aritmético, valor que não vimos medido de forma independente.',
      },
      shortlist: {
        id: 'shortlist',
        title: 'As cinco máquinas para a lista final',
        content:
          '**Cinco máquinas cobrem as decisões de compra reais: a que tem mais memória, o design de referência do fabricante, a opção para empresas, o melhor custo-benefício e a workstation expansível.** Esta é uma seleção editorial a partir de fichas técnicas e relatos de terceiros; a PromptQuorum não fez benchmark de nenhuma delas. Os links levam a páginas dos fabricantes, sem relação de afiliado.',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: 'Mais memória, modular e reparável',
            verdict:
              'Ryzen AI Max+ PRO 495 com 192 GB de LPDDR5X-8533 em um gabinete de 4.5 L, oferecido como DIY Edition ou pré-montado com Fedora. A Framework abriu as pré-encomendas em 30 de setembro de 2026 para um único lote, com as primeiras remessas previstas para novembro. A configuração PRO 495 tem um slot PCIe x4 livre e suporta clustering por USB4 e PCIe.',
            pros: [
              'Mais memória que um DGX Spark em um gabinete padrão e reparável',
              'Slot PCIe livre e um caminho DIY documentado',
            ],
            cons: [
              'Apenas pré-encomenda; a data de envio em novembro é uma expectativa',
              'Os 192 GB vêm só como memória pré-configurada, a um preço de nível Spark',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — página oficial →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'A resposta da própria AMD ao DGX Spark',
            verdict:
              'A plataforma para desenvolvedores da AMD: Ryzen AI Max+ 395 com 128 GB de LPDDR5x-8000 (256 GB/s), SSD de 2 TB, 10GbE e a escolha entre Windows 11 Pro ou a imagem Linux para desenvolvedores da AMD. Uma versão PRO 495 de 192 GB foi reportada no varejo. O teste da StorageReview o encontrou claramente mais lento que o Spark em serving com vLLM, sem malha de alta velocidade para clustering.',
            pros: [
              'Stack de software de IA pré-configurado e suporte a dois sistemas operacionais',
              'Forma de menor risco de obter a plataforma 395 direto da AMD',
            ],
            cons: [
              'Disponibilidade nos EUA apenas pela Micro Center, segundo a cobertura do lançamento',
              'Uma única porta 10GbE, sem escalar com várias caixas como o Spark',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: 'A opção do canal empresarial',
            verdict:
              'Ryzen AI Max+ PRO 395 com até 128 GB na linha de workstations Z da HP, vendido por canais empresariais e revendedores com ampla variação de preço. É a mesma plataforma das caixas mais baratas; você paga pela garantia da HP e pelo caminho de compras corporativo.',
            pros: [
              'Suporte corporativo e canais de compra estabelecidos',
              'A mesma plataforma de 128 GB das máquinas boutique',
            ],
            cons: [
              'O preço da própria HP nos EUA fica acima de toda máquina boutique de 128 GB que encontramos',
              'Os preços variam muito conforme o revendedor e o tamanho do armazenamento',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: 'Opção de custo-benefício no mesmo processador',
            verdict:
              'Ryzen AI Max+ 395 com 128 GB, uma das primeiras caixas Strix Halo boutique. O preço na loja muda dinamicamente e os anúncios que vimos variavam bastante, então confira a página ao vivo. Usa o mesmo processador das máquinas acima, então o argumento a favor dela é o preço, não o desempenho.',
            pros: [
              'Existem várias análises de terceiros',
              'Costuma estar entre as opções de 128 GB mais baratas',
            ],
            cons: [
              'Os termos de garantia e suporte são os do próprio fabricante; confira antes de comprar',
              'Preços e configurações dos anúncios divergem entre vendedores',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — página oficial →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'Design voltado a workstation',
            verdict:
              'Ryzen AI Max+ 395 com 128 GB de LPDDR5x-8000, 10GbE duplo, USB4 v2 e um slot de expansão PCIe x16, com suporte a montagem em rack 2U. A loja dos EUA listava o modelo de 128 GB / 2 TB em promoção quando conferimos, com envio estimado para o início de novembro. Um MS-S1 MAX-P495 de 192 GB foi reportado em pré-encomenda.',
            pros: [
              '10GbE duplo e um slot de expansão, incomuns nesta classe',
              'Opção de montagem em rack para escritório ou laboratório',
            ],
            cons: [
              'O preço normal é 25% acima do preço promocional',
              'Garantia do vendedor de 2 anos na loja dos EUA',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — loja oficial →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: 'Links de produto, sem relação de afiliado. As especificações vêm das páginas dos fabricantes e dos relatos citados; disponibilidade e configurações mudam.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'Comparação de preços de todas as máquinas',
        content:
          '**Todos os valores abaixo são preços dos EUA, da fonte indicada, no momento da última atualização (veja a data de atualização); nenhum foi convertido de outra moeda.** A escassez de memória elevou os preços repetidas vezes em 2026 e várias linhas divergem entre vendedores, então trate a tabela como um retrato do momento e abra a página do fabricante antes de comprar. Os preços europeus diferem e não estão listados porque não conseguimos verificá-los. Os preços no Brasil podem variar bastante devido a impostos de importação.',
        columns: ['Máquina', 'Chip e memória', 'Preço nos EUA visto', 'Status e nota de fonte'],
        rows: [
          { 'Máquina': 'NVIDIA DGX Spark', 'Chip e memória': 'GB10, 128 GB', 'Preço nos EUA visto': '$6,950', 'Status e nota de fonte': 'Reportado em 2026-10-03 pela ServeTheHome; lançado a $3,999, Founders Edition a $4,699 no início de 2026; modelos OEM de 64 GB a partir de $4,999' },
          { 'Máquina': 'AMD Ryzen AI Halo', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': '$3,999', 'Status e nota de fonte': 'SSD de 2 TB; Micro Center, segundo a cobertura do lançamento' },
          { 'Máquina': 'AMD Ryzen AI Halo 192GB', 'Chip e memória': 'PRO 495, 192 GB', 'Preço nos EUA visto': '$7,299', 'Status e nota de fonte': 'Relato único (VideoCardz); não confirmado em página de varejista' },
          { 'Máquina': 'Framework Desktop 192GB', 'Chip e memória': 'PRO 495, 192 GB', 'Preço nos EUA visto': '$6,799 DIY / $7,449 pré-montado', 'Status e nota de fonte': 'Pré-encomenda, um lote, envio em novembro (Phoronix, Framework)' },
          { 'Máquina': 'Framework Desktop 128GB', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': '$3,449', 'Status e nota de fonte': 'Citado pela Phoronix para comparação' },
          { 'Máquina': 'Minisforum MS-S1 MAX', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': '$3,919 promoção / $4,899 normal', 'Status e nota de fonte': '128 GB / 2 TB na loja Minisforum dos EUA; envio no início de novembro' },
          { 'Máquina': 'HP Z2 Mini G1a', 'Chip e memória': 'PRO 395, 128 GB', 'Preço nos EUA visto': '$3,734 a $5,079', 'Status e nota de fonte': 'Newegg 128 GB / 1 TB vs. preço da HP nos EUA reportado pela Notebookcheck para 128 GB / 2 TB' },
          { 'Máquina': 'GMKtec EVO-X2', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': 'cerca de $3,650', 'Status e nota de fonte': 'Um anúncio de comparação de outubro de 2026 para 128 GB / 2 TB; o preço na loja da GMKtec muda dinamicamente' },
          { 'Máquina': 'Corsair AI Workstation 300', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': '$3,399', 'Status e nota de fonte': 'Relato da Tom\'s Hardware; data do relato não confirmada' },
          { 'Máquina': 'Beelink GTR9 Pro', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': 'não verificado', 'Status e nota de fonte': 'Anúncios nos EUA divergem; uma variante PRO 495 tem preço apenas na China, até agora' },
          { 'Máquina': 'Bosgame M5', 'Chip e memória': '395, 128 GB', 'Preço nos EUA visto': 'não verificado', 'Status e nota de fonte': 'Nenhum preço atual encontrado' },
        ],
        note: 'Não conseguimos verificar o MSI PRO MAX EDGE AI+ 11M, por isso ele não está listado. Os preços que não estavam em uma página de fabricante aberta por nós são atribuídos à publicação que os reportou.',
      },
      performance: {
        id: 'performance',
        title: 'O que mostram os testes independentes',
        content: [
          '**O único confronto direto com números publicados que encontramos é o teste Ryzen AI Halo vs. DGX Spark da StorageReview, e o Spark venceu todos os casos.** Ele rodou serving online com vLLM no Linux, em batch 64, com seis modelos. O Spark liderou por cerca de 2 a 13 vezes em 16 dos 18 cenários e por cerca de 11 a 12% nos outros dois, ambos com carga predominante de decode em modelos densos menores. As maiores diferenças apareceram em trabalho dominado por prefill e no modelo FP4, que combina com o hardware Blackwell.',
          'Esse teste mede o throughput de serving com várias requisições. A velocidade de chat para um único usuário depende sobretudo da largura de banda da memória, que é próxima entre os dois (256 vs. 273 GB/s), então esperaríamos uma diferença menor ali, mas isso é uma expectativa e não foi medido nesse teste. As comparações publicadas pela própria AMD, inclusive contra a Intel, são testes do fabricante e não benchmarks independentes.',
        ],
        note: 'A análise da StorageReview foi publicada em 2026-07-06 e modificada em 2026-10-29. O software evolui rápido nas duas plataformas, então confira de novo antes de confiar em uma proporção.',
      },
      capacity: {
        id: 'capacity',
        title: 'O que cabe em 128 GB vs. 192 GB',
        content:
          '**A capacidade decide o que carrega; a largura de banda e o software decidem a velocidade com que roda.** A tabela é aritmética de quantização (parâmetros × bits por peso, mais espaço de trabalho para o contexto), não um benchmark.',
        columns: ['Classe do modelo', 'Quantização', 'Só os pesos', 'Máquina de 128 GB', 'Máquina de 192 GB'],
        rows: [
          { 'Classe do modelo': '70B denso', 'Quantização': '8 bits', 'Só os pesos': '~70 GB', 'Máquina de 128 GB': 'Cabe, com espaço para contexto', 'Máquina de 192 GB': 'Cabe com folga' },
          { 'Classe do modelo': 'Classe 120B', 'Quantização': '4 bits', 'Só os pesos': '~60–70 GB', 'Máquina de 128 GB': 'Cabe com folga', 'Máquina de 192 GB': 'Cabe com contexto grande' },
          { 'Classe do modelo': 'Classe 200B', 'Quantização': '4 bits', 'Só os pesos': '~100 GB', 'Máquina de 128 GB': 'Apertado ao somar o contexto', 'Máquina de 192 GB': 'Cabe' },
          { 'Classe do modelo': 'Classe 300B', 'Quantização': '4 bits', 'Só os pesos': '~150 GB', 'Máquina de 128 GB': 'Não cabe', 'Máquina de 192 GB': 'Cabe com contexto limitado' },
        ],
        note: 'Nem toda a memória fica disponível para a GPU por padrão. A quantidade de memória que a GPU consegue endereçar depende do SO, do kernel e das configurações de driver, e a StorageReview observa que o Ryzen AI Halo sai com a memória gráfica variável predefinida no máximo. Consulte o guia do fabricante para o seu sistema operacional e backend (Vulkan ou ROCm).',
      },
      intel: {
        id: 'intel',
        title: 'Onde a Intel está',
        content: [
          '**A plataforma Panther Lake da Intel merece acompanhamento, mas ainda não é uma máquina para modelos grandes.** O Core Ultra X9 388H com gráficos Arc B390 suporta até 96 GB a 153.6 GB/s segundo a NanoReview, contra 192 GB a 256 GB/s do PRO 495. A HotHardware encontrou o Arc B390 à frente do Strix Halo em algumas cargas OpenVINO, enquanto o Strix Halo liderou em ONNX. Esses resultados comparam com o 395, não com o PRO 495.',
          'O HP Z2 Mini G1i é outro design: uma workstation Intel com uma placa NVIDIA RTX 4000 SFF Ada dedicada, o que significa memória de GPU dedicada em vez de um grande bloco compartilhado. Ele pertence a uma comparação mais ampla de workstations, não a esta.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Qual comprar',
        items: [
          '**Forma mais barata de entrar em 128 GB:** uma máquina AMD Ryzen AI Max+ 395 (Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). Compare os preços atuais, pois são voláteis.',
          '**Mais de 128 GB:** Framework Desktop 192GB ou o Ryzen AI Halo de 192 GB, aceitando um preço próximo ao de um Spark e uma espera por pré-encomenda ou varejo limitado.',
          '**Serving medido mais rápido, CUDA, fine-tuning ou duas caixas ligadas:** o DGX Spark, agora a um preço muito mais alto que no lançamento.',
          '**Compras corporativas e garantia:** HP Z2 Mini G1a.',
          '**Fora desta classe:** quem tem modelos que cabem em 32 a 64 GB deve ler primeiro os guias de mini PCs.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          'Ler 192 GB como "mais rápido que 128 GB". Ele carrega modelos maiores e contextos mais longos; a velocidade continua dependendo de largura de banda, computação e software.',
          'Tratar nove caixas Strix Halo como nove processadores diferentes. Verifique refrigeração, limites de potência, portas e garantia em vez do nome do chip na ficha técnica.',
          'Comprar com base em um preço da época do lançamento. Vários valores desta classe subiram desde o verão; a tabela traz datas por esse motivo.',
          'Presumir que toda a memória unificada pode ser usada pela GPU. Os limites de alocação dependem do sistema operacional, da BIOS e do backend.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O AMD Ryzen AI Halo é mais rápido que o DGX Spark?',
            a: 'Não, no teste independente que encontramos. A StorageReview mediu o Spark à frente nos 18 cenários de serving com vLLM, embora duas execuções com carga predominante de decode tenham ficado a cerca de 12%.',
          },
          {
            q: 'Uma máquina de 192 GB roda modelos que um Spark não roda?',
            a: 'Sim, em termos de carregamento: um modelo de classe 300B em 4 bits precisa de cerca de 150 GB só para os pesos. Se ele roda em velocidade utilizável depende de largura de banda e software.',
          },
          {
            q: 'Preciso do ROCm para rodar modelos no Strix Halo?',
            a: 'Não necessariamente. O llama.cpp também pode rodar via Vulkan; qual backend é mais rápido depende das versões de kernel e driver, então teste os dois na sua configuração.',
          },
          {
            q: 'Por que não incluir o Apple Silicon?',
            a: 'Os Macs são uma categoria à parte, com seus próprios níveis de memória e software; veja o guia de compra de Mac indicado acima.',
          },
          {
            q: 'Um mini PC Core Ultra com 64 GB concorre com o DGX Spark?',
            a: 'Não. Ele tem, na melhor das hipóteses, metade da memória e um barramento de memória bem mais estreito, então concorre com os mini PCs dos nossos outros guias.',
          },
          {
            q: 'Essas máquinas são boas para fine-tuning?',
            a: 'A NVIDIA afirma que o Spark suporta fine-tuning de até 70B parâmetros; não encontramos afirmação equivalente de fabricante nem teste independente para as máquinas AMD.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: 'Especificações do GB10: 128 GB LPDDR5X, 273 GB/s, rede de 200 Gbps, DGX OS, afirmação de inferência de 200B.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: 'Relato de outubro de 2026 sobre o preço de $6,950 do modelo de 128 GB e os modelos OEM de 64 GB a $4,999.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'Resultados de serving com vLLM, notas da plataforma e preços de $3,999 do Halo e $4,699 da Founders Edition na época da análise.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: 'Ryzen AI Halo de 128 GB a $3,999 com suporte ao Windows 11.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: 'Relato do preço do Ryzen AI Halo de 192 GB.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: 'Preço de pré-encomenda de 192 GB, envio em novembro, preço de comparação do modelo de 128 GB.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: 'Configuração PRO 495, opções de memória, gabinete e detalhes de expansão.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: 'Especificações, preços promocional e normal, estimativa de envio.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: 'Preços da HP nos EUA para configurações de 128 GB.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Relato do preço do Corsair 395 / 128 GB.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Capacidade de memória e largura de banda dos chips Intel e AMD.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: 'Comparações de OpenVINO e ONNX com o Ryzen AI Max+ 395.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Workstations de IA local: AMD Strix Halo vs. NVIDIA DGX Spark',
      'description': 'Workstations de IA local comparadas: DGX Spark vs. AMD Strix Halo da AMD, Framework, HP, GMKtec e Minisforum — memória, velocidade medida e preços.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
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
      'inLanguage': 'pt-BR',
      'url': 'https://www.promptquorum.com/pt/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': 'Compre AMD Strix Halo para a entrada mais barata em 128 GB e compatibilidade com x86; compre o DGX Spark se CUDA, throughput ou clustering pesarem mais que o preço.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'Compradores que escolhem uma workstation de IA local de 128 a 192 GB e comparam sistemas AMD Strix Halo com o NVIDIA DGX Spark' },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-ar.webp',
    affiliateDisclosure: true,
    title: 'محطات عمل الذكاء الاصطناعي المحلي: AMD Strix Halo مقابل NVIDIA DGX Spark',
    seoTitle: 'محطات عمل الذكاء الاصطناعي المحلي: Strix Halo أم DGX Spark',
    intro:
      'محطة عمل الذكاء الاصطناعي المحلي هي جهاز مدمج في صندوق واحد بذاكرة موحدة بسعة 128 GB أو أكثر على ناقل بعرض 256 بت، صُمم لتشغيل نماذج من فئة 100B لا يستطيع أي كمبيوتر مصغر بذاكرة 32–64 GB تحميلها. في أكتوبر 2026 يضم المجال ثلاث بنى: NVIDIA GB10 (في DGX Spark) وAMD Strix Halo (شريحتا Ryzen AI Max+ 395 وPRO 495) وIntel Panther Lake التي ما زالت على الهامش. تتفوق AMD في خيارات الذاكرة وتوافق x86 وسعر الدخول، وتتفوق NVIDIA في الإنتاجية المقيسة وCUDA وربط الأجهزة. دفعت أسعار الذاكرة عدة أرقام إلى الأعلى منذ الصيف، لذلك يذكر جدول الأسعار أدناه مصدرًا لكل سطر.',
    metaDescription:
      'مقارنة محطات عمل الذكاء الاصطناعي المحلي: DGX Spark مقابل أجهزة AMD Strix Halo من AMD وFramework وHP وGMKtec وMinisforum: الذاكرة والسرعة وأسعار موثقة.',
    twitterDescription:
      'DGX Spark مقابل AMD Strix Halo: أي محطة عمل محلية بذاكرة 128–192 GB تشتري، وما الذي تُظهره الاختبارات المستقلة، ولماذا لا تنتمي هذه الأجهزة إلى فئة الكمبيوتر المصغر.',
    readTime: '11 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون محطة عمل للذكاء الاصطناعي المحلي بذاكرة 128–192 GB ويقارنون أنظمة AMD Strix Halo مع NVIDIA DGX Spark',
    primaryTerm: 'محطة عمل للذكاء الاصطناعي المحلي',
    targetKeywords: [
      'محطة عمل ذكاء اصطناعي محلي',
      'بدائل dgx spark',
      'strix halo مقابل dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**اشترِ AMD Strix Halo لأرخص مدخل بذاكرة 128 GB وللتوافق مع x86/Windows؛ واشترِ DGX Spark إذا كانت CUDA أو الإنتاجية أو ربط جهازين أهم من السعر.** وجد اختبار vLLM مستقل أن Spark أسرع في جميع الحالات الـ18 المقيسة، بنحو 2–13 ضعفًا في 16 منها، لذا فميزة AMD هي السعة مقابل كل دولار وليست السرعة. تشكّل هذه الأجهزة فئة مستقلة عن أجهزة Intel Core Ultra المصغرة العادية بذاكرة 32–64 GB.',
    quickAnswerTop: {
      ar: {
        question: 'أي محطة عمل للذكاء الاصطناعي المحلي أشتري بدلًا من DGX Spark؟',
        answer:
          'لأقل سعر بذاكرة 128 GB، اختر جهازًا بشريحة AMD Ryzen AI Max+ 395 مثل AMD Ryzen AI Halo أو Minisforum MS-S1 MAX أو GMKtec EVO-X2. وللحصول على أكثر من 128 GB، الخياران هما Framework Desktop وRyzen AI Halo بذاكرة 192 GB، لكن بسعر يقارب سعر Spark. اختر Spark نفسه عندما تحسم CUDA أو الضبط الدقيق (fine-tuning) أو ربط جهازين قرار الشراء.',
        bullets: [
          'الأرخص بذاكرة 128 GB: أنظمة AMD Ryzen AI Max+ 395 (جدول الأسعار أدناه)',
          'الأكثر ذاكرة: 192 GB على Ryzen AI Max+ PRO 495 (في Framework Desktop وRyzen AI Halo)',
          'الأسرع في الاختبارات المستقلة: DGX Spark',
          'خارج هذه الفئة: أجهزة الكمبيوتر المصغرة العادية بذاكرة 32–64 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'لماذا لا تنتمي إلى فئة الكمبيوتر المصغر', anchor: 'definition' },
      { label: 'ثلاث بنى وثلاث مفاضلات', anchor: 'architectures' },
      { label: 'الأجهزة الخمسة المرشحة', anchor: 'shortlist' },
      { label: 'مراجعة أسعار جميع الأجهزة', anchor: 'prices' },
      { label: 'ما الذي تُظهره الاختبارات المستقلة', anchor: 'performance' },
      { label: 'ما يتسع في 128 GB مقابل 192 GB', anchor: 'capacity' },
      { label: 'موقف Intel', anchor: 'intel' },
      { label: 'أيها تشتري', anchor: 'decision' },
      { label: 'الأخطاء الشائعة', anchor: 'common-mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تتفوق محطات عمل AMD Strix Halo على NVIDIA DGX Spark في سعر الدخول بذاكرة 128 GB وتوفر 192 GB، لكن في الاختبار المستقل الوحيد الذي وجدناه كان Spark أسرع في كل حالة مقيسة.' },
      { type: 'plain-terms', content: 'الذاكرة الموحدة تعني أن المعالج ورقاقة الرسومات يتشاركان مجموعة واحدة كبيرة من الذاكرة، فيمكن تحميل نموذج لا يتسع في ذاكرة بطاقة الرسومات الخاصة. أما سرعة تشغيله بعد ذلك فتعتمد في الغالب على عرض نطاق الذاكرة والبرمجيات، لا على رقم السعة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'تعريف الفئة: ذاكرة موحدة بسعة 128 GB أو أكثر على ناقل LPDDR5X بعرض 256 بت (نحو 256–273 GB/s) في صندوق مدمج واحد. هذا تعريف تحريري منا، وليس معيارًا لأي مصنّع.',
          'السيليكون نفسه في صناديق مختلفة: تستخدم معظم الأجهزة هنا شريحة Ryzen AI Max+ 395 نفسها، لذا فالتبريد والمنافذ والبرنامج الثابت والدعم والسعر هي ما يميّز بينها.',
          'مقولة "نصف سعر Spark" تصح عند 128 GB فقط. أجهزة AMD بذاكرة 192 GB تكلّف تقريبًا ما يكلّفه Spark بذاكرة 128 GB.',
          'تُرجّح اختبارات خدمة vLLM المستقلة كفة Spark في الحالات الـ18 جميعها؛ ولم تُقَس سرعة المحادثة لمستخدم واحد في ذلك الاختبار.',
          'يتوقف Intel Panther Lake عند 96 GB، وهو عنصر للمتابعة وليس منافسًا للنماذج المحلية الكبيرة.',
        ],
      },
      definition: {
        id: 'definition',
        title: 'لماذا لا تنتمي إلى فئة الكمبيوتر المصغر',
        content: [
          '**يجيب الكمبيوتر المصغر العادي بشريحة Core Ultra وذاكرة 32–64 GB عن سؤال مختلف: "هل أستطيع تشغيل نموذج 7–32B بهدوء على مكتبي؟"** أما محطة عمل الذكاء الاصطناعي المحلي فتجيب عن سؤال: "هل أستطيع أصلًا تحميل نموذج من فئة 100B؟". ينبع الفرق من نظام الذاكرة: ناقل LPDDR5X بعرض 256 بت يغذّي المعالج ورقاقة الرسومات معًا، ملحوم بالبطاقة، مع حصة كبيرة يمكن لرقاقة الرسومات الوصول إليها. أما الأجهزة المصغرة ذات وحدات DDR5 ثنائية القناة فتبلغ جزءًا ضئيلًا من هذا النطاق. لهذه الأجهزة راجع [دليل ASUS للكمبيوتر المصغر](/ar/power-local-llm/asus-mini-pc-local-ai) و[مقارنة أجهزة الكمبيوتر المصغرة](/ar/local-llms/best-mini-pcs-local-llm).',
          'تتتبّع هذه الصفحة الفئة تحت اسم واحد هو محطات عمل الذكاء الاصطناعي المحلي، لتُقارَن هذه الأجهزة ببعضها وليس بأجهزة مكتبية من الفئة المبتدئة. تشكّل أجهزة Mac فئة منفصلة، وهي مشمولة في [دليل شراء Mac](/ar/power-local-llm/best-mac-for-local-ai-2026).',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: 'ثلاث بنى وثلاث مفاضلات',
        content:
          '**المنافسة الحقيقية بين المنصّات، لا بين العلامات التجارية التسع.** تتشارك معظم أجهزة AMD معالجًا واحدًا وتختلف في التبريد وحدود الطاقة والاتصال والبرنامج الثابت والضمان والسعر.',
        columns: ['البنية', 'الذاكرة', 'الميزة الرئيسية', 'القيد الرئيسي'],
        rows: [
          { 'البنية': 'NVIDIA GB10 (DGX Spark)', 'الذاكرة': '128 GB LPDDR5X، 273 GB/s', 'الميزة الرئيسية': 'CUDA وبرمجيات NVIDIA للذكاء الاصطناعي، وشبكة ConnectX-7 بسرعة 200 Gbps لربط الأجهزة', 'القيد الرئيسي': 'الذاكرة محدودة بـ128 GB؛ معالج Arm ونظام DGX OS (لينكس) فقط' },
          { 'البنية': 'AMD Strix Halo (Ryzen AI Max+ 395 وPRO 495)', 'الذاكرة': '128 GB (395) أو حتى 192 GB (PRO 495)', 'الميزة الرئيسية': 'أكبر ذاكرة مقابل كل دولار، x86، ويندوز أو لينكس', 'القيد الرئيسي': 'يختلف نضج البرمجيات وبرامج التشغيل بحسب نظام التشغيل والواجهة الخلفية (ROCm وVulkan)؛ 10GbE بدل نسيج عالي السرعة في Ryzen AI Halo' },
          { 'البنية': 'Intel Panther Lake (Core Ultra X9 388H)', 'الذاكرة': 'حتى 96 GB، 153.6 GB/s', 'الميزة الرئيسية': 'رسومات Arc جديدة ووحدة NPU', 'القيد الرئيسي': 'ذاكرة وعرض نطاق أقل من المنافسَين' },
        ],
        note: 'أرقام Spark من صفحة منتج NVIDIA؛ وأرقام Intel من قاعدة مواصفات NanoReview. لم تذكر Framework ولا AMD عرض النطاق الترددي لطراز PRO 495 بذاكرة 192 GB في المصادر التي قرأناها؛ والناقل بعرض 256 بت عند 8533 MT/s يعطي حسابيًا نحو 273 GB/s، ولم نرَ هذا الرقم مقيسًا بشكل مستقل.',
      },
      shortlist: {
        id: 'shortlist',
        title: 'الأجهزة الخمسة المرشحة',
        content:
          '**تغطي خمسة أجهزة قرارات الشراء الفعلية: الأكثر ذاكرة، وتصميم الشركة المرجعي، وخيار الأعمال، والأفضل قيمة، ومحطة العمل القابلة للتوسعة.** هذا اختيار تحريري مبني على أوراق المواصفات وتقارير الأطراف الثالثة؛ ولم تجرِ PromptQuorum اختبار أداء لأي منها. الروابط تؤدي إلى صفحات المصنّعين دون أي علاقة تابعة (affiliate).',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: 'أكثر ذاكرة، وقابل للتعديل والإصلاح',
            verdict:
              'شريحة Ryzen AI Max+ PRO 495 مع 192 GB من LPDDR5X-8533 في هيكل بسعة 4.5 L، متاح بإصدار DIY أو مجمّعًا مسبقًا مع Fedora. فتحت Framework الطلب المسبق في 30 سبتمبر 2026 لدفعة واحدة فقط، مع توقع أولى الشحنات في نوفمبر. يتضمن إعداد PRO 495 فتحة PCIe x4 مفتوحة ويدعم الربط عبر USB4 وPCIe.',
            pros: [
              'ذاكرة أكبر من DGX Spark في هيكل قياسي قابل للإصلاح',
              'فتحة PCIe مفتوحة ومسار DIY موثّق',
            ],
            cons: [
              'طلب مسبق فقط؛ موعد الشحن في نوفمبر مجرد توقع',
              'سعة 192 GB تأتي بذاكرة مركّبة مسبقًا فقط، وبسعر يقارب سعر Spark',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — الصفحة الرسمية →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'رد AMD الخاص على DGX Spark',
            verdict:
              'منصة المطورين من AMD: شريحة Ryzen AI Max+ 395 مع 128 GB من LPDDR5x-8000 (256 GB/s) وSSD بسعة 2 TB وشبكة 10GbE، مع خيار ويندوز 11 Pro أو صورة المطورين لينكس من AMD. أُفيد بوجود نسخة PRO 495 بذاكرة 192 GB في التجزئة. وجد اختبار StorageReview أنه أبطأ بوضوح من Spark في خدمة vLLM، مع غياب نسيج عالي السرعة للربط.',
            pros: [
              'حزمة برمجيات ذكاء اصطناعي مُعدّة مسبقًا ودعم نظامَي تشغيل',
              'أقل الطرق مخاطرة للحصول على منصة 395 من AMD نفسها',
            ],
            cons: [
              'التوفر في الولايات المتحدة عبر Micro Center فقط، بحسب تغطيات الإطلاق',
              'منفذ 10GbE واحد، فلا توسّع عبر عدة أجهزة كما في Spark',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: 'خيار قناة الأعمال',
            verdict:
              'شريحة Ryzen AI Max+ PRO 395 بذاكرة حتى 128 GB ضمن سلسلة Z لمحطات العمل من HP، تُباع عبر قنوات الأعمال والموزعين بتفاوت كبير في الأسعار. هي المنصة نفسها الموجودة في الأجهزة الأرخص؛ وما تدفعه ثمنًا لضمان HP ومسار الشراء المؤسسي.',
            pros: [
              'دعم مؤسسي راسخ وقنوات شراء معتمدة',
              'منصة 128 GB نفسها الموجودة في أجهزة العلامات البوتيك',
            ],
            cons: [
              'سعر HP في الولايات المتحدة أعلى من كل جهاز بوتيك بذاكرة 128 GB وجدناه',
              'تختلف الأسعار بشدة بحسب الموزّع وسعة التخزين',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: 'الخيار الاقتصادي على المعالج نفسه',
            verdict:
              'شريحة Ryzen AI Max+ 395 بذاكرة 128 GB، وهو من أوائل أجهزة Strix Halo من العلامات البوتيك. يتغير سعره في المتجر ديناميكيًا، وتفاوتت الإعلانات التي رأيناها كثيرًا، لذا تحقق من الصفحة الحية. يستخدم المعالج نفسه الموجود في الأجهزة أعلاه، فحجته السعر لا الأداء.',
            pros: [
              'توجد عدة مراجعات من أطراف ثالثة',
              'غالبًا من بين أرخص خيارات 128 GB',
            ],
            cons: [
              'شروط الضمان والدعم هي شروط المصنّع نفسه؛ تحقق منها قبل الشراء',
              'تتعارض إعلانات السعر والإعداد بين البائعين',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — الصفحة الرسمية →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: 'تصميم موجّه لمحطات العمل',
            verdict:
              'شريحة Ryzen AI Max+ 395 مع 128 GB من LPDDR5x-8000 وشبكتَي 10GbE وUSB4 v2 وفتحة توسعة PCIe x16، مع دعم التركيب في رف 2U. عرض متجرها الأمريكي طراز 128 GB / 2 TB بسعر مخفّض عند فحصنا، مع تقدير للشحن في أوائل نوفمبر. أُفيد بوجود MS-S1 MAX-P495 بذاكرة 192 GB قيد الطلب المسبق.',
            pros: [
              'شبكتا 10GbE وفتحة توسعة، وهو أمر غير معتاد في هذه الفئة',
              'خيار التركيب في رف للمكتب أو المختبر',
            ],
            cons: [
              'السعر العادي أعلى بـ25% من سعر التخفيض',
              'ضمان البائع مدته 2 سنة في المتجر الأمريكي',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — المتجر الرسمي →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: 'روابط منتجات بلا أي علاقة تابعة (affiliate). المواصفات من صفحات المصنّعين والتقارير المذكورة؛ والتوفر والإعدادات يتغيران.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: 'مراجعة أسعار جميع الأجهزة',
        content:
          '**كل رقم أدناه سعر أمريكي من المصدر المذكور وقت آخر تحديث (انظر تاريخ التحديث)؛ ولا شيء منه محوَّل من عملة أخرى.** رفعت نقائص الذاكرة الأسعار مرارًا في 2026، وتتعارض عدة أسطر بين البائعين، فاعتبر الجدول لقطة آنية وافتح صفحة المصنّع قبل الطلب. الأسعار الأوروبية تختلف ولم نُدرجها لأننا لم نستطع التحقق منها.',
        columns: ['الجهاز', 'الشريحة والذاكرة', 'السعر الأمريكي المرصود', 'الحالة وملاحظة المصدر'],
        rows: [
          { 'الجهاز': 'NVIDIA DGX Spark', 'الشريحة والذاكرة': 'GB10، 128 GB', 'السعر الأمريكي المرصود': '$6,950', 'الحالة وملاحظة المصدر': 'أفادت به ServeTheHome في 2026-10-03؛ أُطلق بسعر $3,999، وFounders Edition بسعر $4,699 في وقت سابق من 2026؛ طرازات OEM بذاكرة 64 GB من $4,999' },
          { 'الجهاز': 'AMD Ryzen AI Halo', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': '$3,999', 'الحالة وملاحظة المصدر': 'SSD بسعة 2 TB؛ Micro Center بحسب تغطية الإطلاق' },
          { 'الجهاز': 'AMD Ryzen AI Halo 192GB', 'الشريحة والذاكرة': 'PRO 495، 192 GB', 'السعر الأمريكي المرصود': '$7,299', 'الحالة وملاحظة المصدر': 'تقرير واحد (VideoCardz)؛ غير مؤكد على صفحة بائع تجزئة' },
          { 'الجهاز': 'Framework Desktop 192GB', 'الشريحة والذاكرة': 'PRO 495، 192 GB', 'السعر الأمريكي المرصود': '$6,799 DIY / $7,449 مجمّع', 'الحالة وملاحظة المصدر': 'طلب مسبق، دفعة واحدة، الشحن في نوفمبر (Phoronix وFramework)' },
          { 'الجهاز': 'Framework Desktop 128GB', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': '$3,449', 'الحالة وملاحظة المصدر': 'ذكرته Phoronix للمقارنة' },
          { 'الجهاز': 'Minisforum MS-S1 MAX', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': '$3,919 تخفيض / $4,899 عادي', 'الحالة وملاحظة المصدر': '128 GB / 2 TB في متجر Minisforum الأمريكي؛ الشحن في أوائل نوفمبر' },
          { 'الجهاز': 'HP Z2 Mini G1a', 'الشريحة والذاكرة': 'PRO 395، 128 GB', 'السعر الأمريكي المرصود': '$3,734 إلى $5,079', 'الحالة وملاحظة المصدر': 'Newegg لطراز 128 GB / 1 TB مقابل سعر HP الأمريكي الذي أوردته Notebookcheck لطراز 128 GB / 2 TB' },
          { 'الجهاز': 'GMKtec EVO-X2', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': 'نحو $3,650', 'الحالة وملاحظة المصدر': 'إعلان واحد في مقارنة أكتوبر 2026 لطراز 128 GB / 2 TB؛ سعر متجر GMKtec يتغير ديناميكيًا' },
          { 'الجهاز': 'Corsair AI Workstation 300', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': '$3,399', 'الحالة وملاحظة المصدر': 'تقرير Tom\'s Hardware؛ تاريخ التقرير غير مؤكد' },
          { 'الجهاز': 'Beelink GTR9 Pro', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': 'لم يُتحقق منه', 'الحالة وملاحظة المصدر': 'تتعارض الإعلانات الأمريكية؛ ونسخة PRO 495 مسعّرة في الصين فقط حتى الآن' },
          { 'الجهاز': 'Bosgame M5', 'الشريحة والذاكرة': '395، 128 GB', 'السعر الأمريكي المرصود': 'لم يُتحقق منه', 'الحالة وملاحظة المصدر': 'لم نجد سعرًا حاليًا' },
        ],
        note: 'لم نستطع التحقق من MSI PRO MAX EDGE AI+ 11M، لذا لم يُدرج. الأسعار التي لم تكن على صفحة مصنّع فتحناها بأنفسنا تُنسب إلى المطبوعة التي أوردتها.',
      },
      performance: {
        id: 'performance',
        title: 'ما الذي تُظهره الاختبارات المستقلة',
        content: [
          '**المواجهة المباشرة الوحيدة التي وجدنا لها أرقامًا منشورة هي اختبار StorageReview لـRyzen AI Halo مقابل DGX Spark، وقد فاز فيه Spark في كل حالة.** شغّل الاختبار خدمة vLLM عبر الإنترنت على لينكس بدفعة 64 على ستة نماذج. تقدّم Spark بنحو 2–13 ضعفًا في 16 من 18 سيناريو، وبنحو 11–12% في السيناريوهين الآخرين، وكلاهما تشغيل يعتمد على فك الترميز (decode) لنماذج كثيفة أصغر. ظهرت أوسع الفجوات في الأعمال الثقيلة في مرحلة prefill وفي نموذج FP4 الذي يناسب عتاد Blackwell.',
          'يقيس هذا الاختبار إنتاجية خدمة طلبات متعددة. أما سرعة المحادثة لمستخدم واحد فتعتمد في الغالب على عرض نطاق الذاكرة، وهو متقارب بين الجهازين (256 مقابل 273 GB/s)، لذا نتوقع فجوة أصغر هناك، لكنه مجرد توقع ولم يُقَس في ذلك الاختبار. أما المقارنات التي تنشرها AMD بنفسها، ومنها المقارنات مع Intel، فهي اختبارات من المصنّع وليست معايير أداء مستقلة.',
        ],
        note: 'نُشرت مراجعة StorageReview في 2026-07-06 وعُدّلت في 2026-10-29. تتطور البرمجيات بسرعة على المنصتين، فأعد التحقق قبل الاعتماد على أي نسبة.',
      },
      capacity: {
        id: 'capacity',
        title: 'ما يتسع في 128 GB مقابل 192 GB',
        content:
          '**السعة تحدد ما يمكن تحميله؛ أما عرض النطاق والبرمجيات فيحددان سرعة تشغيله.** الجدول حساب تكميم (المعاملات × البتات لكل وزن، مع مساحة عمل للسياق)، وليس اختبار أداء.',
        columns: ['فئة النموذج', 'التكميم', 'الأوزان وحدها', 'جهاز 128 GB', 'جهاز 192 GB'],
        rows: [
          { 'فئة النموذج': '70B كثيف', 'التكميم': '8 بت', 'الأوزان وحدها': '~70 GB', 'جهاز 128 GB': 'يتسع، مع مساحة للسياق', 'جهاز 192 GB': 'يتسع براحة' },
          { 'فئة النموذج': 'فئة 120B', 'التكميم': '4 بت', 'الأوزان وحدها': '~60–70 GB', 'جهاز 128 GB': 'يتسع براحة', 'جهاز 192 GB': 'يتسع مع سياق كبير' },
          { 'فئة النموذج': 'فئة 200B', 'التكميم': '4 بت', 'الأوزان وحدها': '~100 GB', 'جهاز 128 GB': 'ضيق عند إضافة السياق', 'جهاز 192 GB': 'يتسع' },
          { 'فئة النموذج': 'فئة 300B', 'التكميم': '4 بت', 'الأوزان وحدها': '~150 GB', 'جهاز 128 GB': 'لا يتسع', 'جهاز 192 GB': 'يتسع مع سياق محدود' },
        ],
        note: 'ليست كل الذاكرة متاحة لرقاقة الرسومات افتراضيًا. يعتمد مقدار الذاكرة الذي تستطيع رقاقة الرسومات عنونته على نظام التشغيل وإعدادات النواة وبرامج التشغيل، وتذكر StorageReview أن Ryzen AI Halo يُشحن بإعداد ذاكرة الرسومات المتغيرة على أقصى قيمة. راجع دليل المصنّع لنظام التشغيل والواجهة الخلفية (Vulkan أو ROCm).',
      },
      intel: {
        id: 'intel',
        title: 'موقف Intel',
        content: [
          '**منصة Panther Lake من Intel تستحق المتابعة لكنها ليست بعد جهازًا للنماذج الكبيرة.** تدعم Core Ultra X9 388H برسومات Arc B390 حتى 96 GB بسرعة 153.6 GB/s بحسب NanoReview، مقابل 192 GB بسرعة 256 GB/s لـPRO 495. وجدت HotHardware أن Arc B390 يتقدم على Strix Halo في بعض أحمال OpenVINO، بينما تقدّم Strix Halo في ONNX. تقارن هذه النتائج مع الشريحة 395 وليس PRO 495.',
          'يمثّل HP Z2 Mini G1i تصميمًا مختلفًا من جديد: محطة عمل Intel ببطاقة NVIDIA RTX 4000 SFF Ada منفصلة، أي ذاكرة رسومات مخصصة بدل مجموعة مشتركة كبيرة واحدة. مكانه في مقارنة محطات عمل أوسع، لا في هذه المقارنة.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'أيها تشتري',
        items: [
          '**أرخص مدخل إلى 128 GB:** جهاز AMD Ryzen AI Max+ 395 (Ryzen AI Halo أو Minisforum MS-S1 MAX أو GMKtec EVO-X2 أو Corsair). قارن الأسعار الحالية لأنها متقلبة.',
          '**أكثر من 128 GB:** Framework Desktop 192GB أو Ryzen AI Halo بذاكرة 192 GB، مع قبول سعر يقارب سعر Spark وانتظار طلب مسبق أو توفر محدود في التجزئة.',
          '**أسرع خدمة مقيسة، أو CUDA، أو الضبط الدقيق (fine-tuning)، أو جهازان مرتبطان:** DGX Spark، بسعر أعلى بكثير الآن مما كان عند الإطلاق.',
          '**الشراء المؤسسي والضمان:** HP Z2 Mini G1a.',
          '**ليس من هذه الفئة:** كل من تتسع نماذجه في 32–64 GB عليه قراءة أدلة الكمبيوتر المصغر أولًا.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          'فهم 192 GB على أنها "أسرع من 128 GB". إنها تحمّل نماذج أكبر وسياقات أطول؛ أما السرعة فما زالت تتبع عرض النطاق والحوسبة والبرمجيات.',
          'التعامل مع تسعة صناديق Strix Halo كأنها تسعة معالجات مختلفة. تحقق من التبريد وحدود الطاقة والمنافذ والضمان بدل اسم الشريحة في ورقة المواصفات.',
          'الشراء بسعر من عهد الإطلاق. ارتفعت عدة أرقام في هذه الفئة منذ الصيف؛ ولهذا يحمل الجدول تواريخ.',
          'افتراض أن كل الذاكرة الموحدة قابلة للاستخدام من رقاقة الرسومات. تعتمد حدود التخصيص على نظام التشغيل وBIOS والواجهة الخلفية.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل AMD Ryzen AI Halo أسرع من DGX Spark؟',
            a: 'لا، بحسب الاختبار المستقل الذي وجدناه. قاست StorageReview تقدّم Spark في جميع سيناريوهات خدمة vLLM الـ18، رغم أن تشغيلين يعتمدان على فك الترميز (decode) كانا ضمن نحو 12%.',
          },
          {
            q: 'هل يستطيع جهاز بذاكرة 192 GB تشغيل نماذج لا يستطيع Spark تشغيلها؟',
            a: 'نعم من حيث التحميل: يحتاج نموذج بتكميم 4 بت من فئة 300B تقريبًا إلى نحو 150 GB للأوزان وحدها. أما تشغيله بسرعة مقبولة فيعتمد على عرض النطاق والبرمجيات.',
          },
          {
            q: 'هل أحتاج ROCm لتشغيل النماذج على Strix Halo؟',
            a: 'ليس بالضرورة. يمكن لـllama.cpp العمل أيضًا عبر Vulkan؛ ويعتمد أي واجهة خلفية أسرع على إصدارات النواة وبرامج التشغيل، لذا جرّب كلتيهما على إعدادك.',
          },
          {
            q: 'لماذا لا يشمل المقال Apple Silicon؟',
            a: 'أجهزة Mac فئة منفصلة بمستويات ذاكرة وبرمجيات خاصة بها؛ راجع دليل شراء Mac المرتبط أعلاه.',
          },
          {
            q: 'هل كمبيوتر Core Ultra مصغر بذاكرة 64 GB منافس لـDGX Spark؟',
            a: 'لا. ذاكرته نصف ذاكرة Spark في أفضل الأحوال وناقله أضيق بكثير، لذا ينافس أجهزة الكمبيوتر المصغرة في أدلتنا الأخرى.',
          },
          {
            q: 'هل هذه الأجهزة جيدة للضبط الدقيق (fine-tuning)؟',
            a: 'تذكر NVIDIA أن Spark يدعم الضبط الدقيق حتى 70B معامل؛ ولم نجد ادعاءً مماثلًا من المصنّع ولا اختبارًا مستقلًا لأجهزة AMD.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — صفحة المنتج الرسمية', description: 'مواصفات GB10: ذاكرة 128 GB LPDDR5X، 273 GB/s، شبكة 200 Gbps، نظام DGX OS، وادعاء الاستدلال على نماذج 200B.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: إطلاق DGX Spark 64GB وارتفاع سعر 128GB', description: 'تقرير أكتوبر 2026 عن سعر 128 GB البالغ $6,950 وطرازات OEM بذاكرة 64 GB بسعر $4,999.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo مقابل DGX Spark', description: 'نتائج خدمة vLLM وملاحظات المنصة وسعر Halo البالغ $3,999 وFounders Edition البالغ $4,699 وقت المراجعة.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: إطلاق Ryzen AI Halo', description: 'جهاز Ryzen AI Halo بذاكرة 128 GB بسعر $3,999 مع دعم ويندوز 11.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo مع PRO 495 وذاكرة 192GB', description: 'تقرير عن سعر Ryzen AI Halo بذاكرة 192 GB.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop مع Ryzen AI Max+ PRO 495', description: 'تسعير الطلب المسبق لطراز 192 GB، والشحن في نوفمبر، وسعر المقارنة لطراز 128 GB.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — الصفحة الرسمية', description: 'إعداد PRO 495 وخيارات الذاكرة وتفاصيل الهيكل والتوسعة.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — المتجر الأمريكي الرسمي', description: 'المواصفات وأسعار التخفيض والسعر العادي وتقدير الشحن.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: أسعار HP Z2 Mini G1a في الولايات المتحدة', description: 'أسعار HP في الولايات المتحدة لإعدادات 128 GB.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: ارتفاع سعر Corsair AI Workstation 300', description: 'تقرير سعر Corsair بشريحة 395 وذاكرة 128 GB.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H مقابل Ryzen AI Max+ 495', description: 'أرقام سعة الذاكرة وعرض النطاق لشريحتَي Intel وAMD.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: مراجعة Core Ultra X9 388H', description: 'مقارنات OpenVINO وONNX مع Ryzen AI Max+ 395.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'محطات عمل الذكاء الاصطناعي المحلي: AMD Strix Halo مقابل NVIDIA DGX Spark',
      'description': 'مقارنة محطات عمل الذكاء الاصطناعي المحلي: DGX Spark مقابل أجهزة AMD Strix Halo من AMD وFramework وHP وGMKtec وMinisforum: الذاكرة والسرعة وأسعار موثقة.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'ar',
      'url': 'https://www.promptquorum.com/ar/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': 'اشترِ AMD Strix Halo لأرخص مدخل بذاكرة 128 GB وللتوافق مع x86؛ واشترِ DGX Spark إذا كانت CUDA أو الإنتاجية أو الربط أهم من السعر.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': 'المشترون الذين يختارون محطة عمل للذكاء الاصطناعي المحلي بذاكرة 128–192 GB ويقارنون أنظمة AMD Strix Halo مع NVIDIA DGX Spark' },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    next_refresh_due: '2027-04-30',
    current_hardware_mentioned: [
      'NVIDIA DGX Spark',
      'AMD Ryzen AI Halo',
      'Framework Desktop 192GB',
      'HP Z2 Mini G1a',
      'GMKtec EVO-X2',
      'Minisforum MS-S1 MAX',
      'Corsair AI Workstation 300',
      'Beelink GTR9 Pro',
      'Bosgame M5',
      'Intel Core Ultra X9 388H',
    ],
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstations-strix-halo-vs-dgx-spark-hero-ko.webp',
    affiliateDisclosure: true,
    title: '로컬 AI 워크스테이션: AMD Strix Halo 대 NVIDIA DGX Spark',
    seoTitle: '로컬 AI 워크스테이션: Strix Halo 대 DGX Spark',
    intro:
      '로컬 AI 워크스테이션은 256비트 버스에 128GB 이상의 통합 메모리를 갖춘 소형 일체형 시스템으로, 32~64GB 미니 PC로는 불러올 수 없는 100B급 모델을 실행하기 위해 만들어졌습니다. 2026년 10월 현재 이 분야에는 세 가지 아키텍처가 있습니다. NVIDIA GB10(DGX Spark), AMD Strix Halo(Ryzen AI Max+ 395 및 PRO 495), 그리고 아직 관망 단계인 Intel Panther Lake입니다. AMD는 메모리 선택지, x86 호환성, 진입 가격에서 앞서고, NVIDIA는 실측 처리량, CUDA, 클러스터링에서 앞섭니다. 여름 이후 메모리 가격이 여러 수치를 끌어올렸으므로, 아래 가격표에는 각 항목마다 출처를 표기했습니다.',
    metaDescription:
      '로컬 AI 워크스테이션 비교: DGX Spark 대 AMD, Framework, HP, GMKtec, Minisforum의 Strix Halo 기기 — 메모리, 실측 속도, 출처 표기 가격.',
    twitterDescription:
      'DGX Spark 대 AMD Strix Halo: 128~192GB 로컬 AI 워크스테이션 선택 기준, 독립 테스트 결과, 그리고 이것이 미니 PC 범주가 아닌 이유.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    audience: '128~192GB 로컬 AI 워크스테이션을 고르면서 AMD Strix Halo 시스템과 NVIDIA DGX Spark를 비교하는 구매자',
    primaryTerm: '로컬 AI 워크스테이션',
    targetKeywords: [
      '로컬 ai 워크스테이션',
      'dgx spark 대안',
      'strix halo vs dgx spark',
      'ryzen ai max+ 395 128gb',
      'framework desktop 192gb',
    ],
    leadAnswerBlock:
      '**가장 저렴한 128GB 진입과 x86/Windows 호환성이 중요하다면 AMD Strix Halo를, 가격보다 CUDA, 처리량, 2대 클러스터링이 중요하다면 DGX Spark를 구매하십시오.** 독립적인 vLLM 테스트에서 Spark는 측정된 18개 사례 모두에서 더 빨랐고, 그중 16개에서는 대략 2~13배 앞섰습니다. 따라서 AMD의 강점은 속도가 아니라 달러당 용량입니다. 이 기기들은 32~64GB를 탑재한 일반 Intel Core Ultra 미니 PC와는 별개의 범주입니다.',
    quickAnswerTop: {
      ko: {
        question: 'DGX Spark 대신 어떤 로컬 AI 워크스테이션을 구매해야 합니까?',
        answer:
          '128GB를 가장 낮은 가격에 원한다면 AMD Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2 같은 AMD Ryzen AI Max+ 395 기기를 선택하십시오. 128GB를 넘는 메모리가 필요하다면 Framework Desktop과 192GB Ryzen AI Halo가 선택지이지만, 가격은 Spark 수준입니다. CUDA, 파인튜닝, 2대 연결이 구매를 좌우한다면 Spark 자체를 선택하십시오.',
        bullets: [
          '가장 저렴한 128GB: AMD Ryzen AI Max+ 395 시스템(아래 가격표 참조)',
          '최대 메모리: Ryzen AI Max+ PRO 495 기반 192GB(Framework Desktop, Ryzen AI Halo)',
          '독립 테스트 최고 속도: DGX Spark',
          '이 범주에 해당하지 않음: 32~64GB 일반 미니 PC',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '미니 PC 범주가 아닌 이유', anchor: 'definition' },
      { label: '세 가지 아키텍처, 세 가지 트레이드오프', anchor: 'architectures' },
      { label: '후보로 꼽을 다섯 기기', anchor: 'shortlist' },
      { label: '전체 기기 가격 확인', anchor: 'prices' },
      { label: '독립 테스트 결과', anchor: 'performance' },
      { label: '128GB와 192GB에서 실행 가능한 모델', anchor: 'capacity' },
      { label: 'Intel의 현재 위치', anchor: 'intel' },
      { label: '어떤 기기를 사야 할까', anchor: 'decision' },
      { label: '흔한 실수', anchor: 'common-mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'AMD Strix Halo 워크스테이션은 128GB 진입 가격에서 NVIDIA DGX Spark보다 저렴하고 192GB도 제공하지만, 저희가 찾은 유일한 독립 테스트에서는 측정된 모든 사례에서 Spark가 더 빨랐습니다.' },
      { type: 'plain-terms', content: '통합 메모리란 프로세서와 그래픽이 하나의 큰 RAM 풀을 공유한다는 뜻으로, 그래픽 카드 자체 메모리에는 들어가지 않는 모델도 불러올 수 있습니다. 이후 실행 속도는 용량 수치보다 주로 메모리 대역폭과 소프트웨어에 좌우됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        items: [
          '범주 정의: 256비트 LPDDR5X 버스(약 256~273 GB/s)에 128GB 이상의 통합 메모리를 갖춘 소형 일체형 기기입니다. 이는 벤더 표준이 아니라 저희 편집부의 정의입니다.',
          '같은 실리콘, 다른 기기: 여기 소개한 대부분의 기기는 동일한 Ryzen AI Max+ 395를 사용하므로, 냉각, 포트, 펌웨어, 지원, 가격이 기기를 구분합니다.',
          '"Spark의 절반 가격"이라는 주장은 128GB에서만 성립합니다. 192GB AMD 기기는 128GB Spark와 비슷한 가격입니다.',
          '독립적인 vLLM 서빙 테스트에서는 18개 사례 모두 Spark가 우세했으며, 해당 테스트에서 단일 사용자 채팅 속도는 측정되지 않았습니다.',
          'Intel Panther Lake는 최대 96GB까지만 지원하므로, 대형 로컬 모델에는 경쟁 제품이 아니라 지켜볼 대상입니다.',
        ],
      },
      definition: {
        id: 'definition',
        title: '미니 PC 범주가 아닌 이유',
        content: [
          '**Core Ultra 칩과 32~64GB RAM을 갖춘 일반 미니 PC는 "7~32B 모델을 책상 위에서 조용히 돌릴 수 있는가?"라는 다른 질문에 답합니다.** 로컬 AI 워크스테이션은 "100B급 모델을 아예 불러올 수 있는가?"에 답합니다. 차이는 메모리 시스템에서 나옵니다. 보드에 납땜된 256비트 LPDDR5X 버스가 CPU와 GPU에 함께 공급되며, 상당 부분을 GPU가 사용할 수 있습니다. 듀얼 채널 DDR5 모듈을 쓰는 미니 PC는 그 대역폭의 일부만 얻습니다. 이런 기기는 [ASUS 미니 PC 가이드](/ko/power-local-llm/asus-mini-pc-local-ai)와 [미니 PC 종합 비교](/ko/local-llms/best-mini-pcs-local-llm)를 참고하십시오.',
          '이 페이지는 해당 범주를 로컬 AI 워크스테이션이라는 하나의 이름으로 다루므로, 이 기기들은 보급형 데스크톱이 아니라 서로 비교됩니다. Mac은 별도 범주이며 [Mac 구매 가이드](/ko/power-local-llm/best-mac-for-local-ai-2026)에서 다룹니다.',
        ],
      },
      architectures: {
        id: 'architectures',
        itemHeadings: true,
        title: '세 가지 아키텍처, 세 가지 트레이드오프',
        content:
          '**실질적인 경쟁은 아홉 개 브랜드 사이가 아니라 플랫폼 사이에서 벌어집니다.** AMD 기기 대부분은 하나의 프로세서를 공유하며 냉각, 전력 제한, 연결성, 펌웨어, 보증, 가격에서 차이가 납니다.',
        columns: ['아키텍처', '메모리', '주요 장점', '주요 한계'],
        rows: [
          { '아키텍처': 'NVIDIA GB10 (DGX Spark)', '메모리': '128GB LPDDR5X, 273 GB/s', '주요 장점': 'CUDA 및 NVIDIA AI 소프트웨어, 기기 연결용 200Gbps ConnectX-7 네트워킹', '주요 한계': '메모리 128GB 상한, Arm CPU와 DGX OS(Linux)만 지원' },
          { '아키텍처': 'AMD Strix Halo (Ryzen AI Max+ 395, PRO 495)', '메모리': '128GB(395) 또는 최대 192GB(PRO 495)', '주요 장점': '달러당 최대 메모리, x86, Windows 또는 Linux', '주요 한계': '소프트웨어와 드라이버 성숙도는 OS와 백엔드(ROCm, Vulkan)에 따라 다름, Ryzen AI Halo는 고속 패브릭 대신 10GbE' },
          { '아키텍처': 'Intel Panther Lake (Core Ultra X9 388H)', '메모리': '최대 96GB, 153.6 GB/s', '주요 장점': '새로운 Arc 그래픽과 NPU', '주요 한계': '두 경쟁 제품보다 적은 메모리와 대역폭' },
        ],
        note: 'Spark 수치는 NVIDIA 제품 페이지, Intel 수치는 NanoReview 사양 데이터베이스에서 가져왔습니다. 192GB PRO 495의 대역폭은 저희가 읽은 자료에서 Framework나 AMD가 명시하지 않았습니다. 8533 MT/s의 256비트 버스로 계산하면 약 273 GB/s이지만, 독립적으로 측정된 값은 확인하지 못했습니다.',
      },
      shortlist: {
        id: 'shortlist',
        title: '후보로 꼽을 다섯 기기',
        content:
          '**다섯 기기가 실제 구매 결정을 모두 포괄합니다. 최대 메모리, 벤더 레퍼런스 설계, 비즈니스용 옵션, 최고 가성비, 확장형 워크스테이션입니다.** 이는 사양서와 제3자 보고서를 바탕으로 한 편집부 선정이며, PromptQuorum은 어떤 기기도 벤치마크하지 않았습니다. 링크는 제휴 관계가 없는 벤더 페이지로 연결됩니다.',
        rankedItems: [
          {
            rank: 1,
            name: 'Framework Desktop 192GB',
            tagline: '최대 메모리, 모듈식이며 수리 가능',
            verdict:
              '4.5L 케이스에 LPDDR5X-8533 192GB를 탑재한 Ryzen AI Max+ PRO 495 기기로, DIY Edition 또는 Fedora가 설치된 완제품으로 제공됩니다. Framework는 2026년 9월 30일에 단일 배치에 한해 사전 주문을 시작했으며, 첫 출하는 11월로 예상됩니다. PRO 495 구성에는 개방형 PCIe x4 슬롯이 있으며 USB4와 PCIe 클러스터링을 지원합니다.',
            pros: [
              '표준 수리 가능 섀시에서 DGX Spark보다 많은 메모리',
              '개방형 PCIe 슬롯과 문서화된 DIY 경로',
            ],
            cons: [
              '사전 주문 전용이며 11월 출하일은 예상일 뿐',
              '192GB는 사전 구성 메모리로만 제공되며 가격은 Spark 수준',
            ],
            affiliateLinks: [
              { label: 'Framework Desktop — 공식 페이지 →', url: 'https://frame.work/desktop', productName: 'Framework Desktop', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 2,
            name: 'AMD Ryzen AI Halo',
            tagline: 'DGX Spark에 대한 AMD의 직접적인 답',
            verdict:
              'AMD의 개발자 플랫폼으로, LPDDR5x-8000(256 GB/s) 128GB를 탑재한 Ryzen AI Max+ 395, 2TB SSD, 10GbE, 그리고 Windows 11 Pro 또는 AMD의 Linux 개발자 이미지 중 선택할 수 있습니다. 192GB PRO 495 버전이 소매점에서 확인되었다는 보도가 있습니다. StorageReview의 테스트에서는 vLLM 서빙에서 Spark보다 확연히 느렸으며, 클러스터링용 고속 패브릭도 없습니다.',
            pros: [
              '사전 구성된 AI 소프트웨어 스택과 듀얼 OS 지원',
              'AMD에서 직접 395 플랫폼을 얻는 가장 위험 부담이 낮은 방법',
            ],
            cons: [
              '출시 보도에 따르면 미국 판매처는 Micro Center뿐',
              '10GbE 포트가 하나뿐이라 Spark처럼 여러 대로 확장할 수 없음',
            ],
          },
          {
            rank: 3,
            name: 'HP Z2 Mini G1a',
            tagline: '비즈니스 채널 옵션',
            verdict:
              'HP의 Z 워크스테이션 라인에서 최대 128GB를 탑재한 Ryzen AI Max+ PRO 395 기기로, 가격 편차가 큰 비즈니스 및 리셀러 채널을 통해 판매됩니다. 더 저렴한 기기들과 같은 플랫폼이며, HP 보증과 조달 경로에 대한 비용을 지불하는 것입니다.',
            pros: [
              '확립된 기업용 지원 및 구매 채널',
              '부티크 기기와 동일한 128GB 플랫폼',
            ],
            cons: [
              'HP의 미국 가격은 저희가 찾은 모든 부티크 128GB 기기보다 높음',
              '리셀러와 저장 용량에 따라 가격 차이가 큼',
            ],
          },
          {
            rank: 4,
            name: 'GMKtec EVO-X2',
            tagline: '같은 프로세서의 가성비 선택',
            verdict:
              '128GB를 탑재한 Ryzen AI Max+ 395 기기로, 최초의 부티크 Strix Halo 기기 중 하나입니다. 스토어 가격이 동적으로 바뀌고 저희가 본 목록의 가격 편차도 커서 실시간 페이지를 확인해야 합니다. 위 기기들과 같은 프로세서를 사용하므로, 이 기기를 선택하는 이유는 성능이 아니라 가격입니다.',
            pros: [
              '여러 건의 제3자 리뷰가 존재',
              '128GB 옵션 중 비교적 저렴한 편인 경우가 많음',
            ],
            cons: [
              '보증 및 지원 조건은 벤더 자체 기준이므로 구매 전에 확인하십시오',
              '판매처마다 가격과 구성 표기가 상충함',
            ],
            affiliateLinks: [
              { label: 'GMKtec EVO-X2 — 공식 페이지 →', url: 'https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc', productName: 'GMKtec EVO-X2', productCategory: 'AI Workstation' },
            ],
          },
          {
            rank: 5,
            name: 'Minisforum MS-S1 MAX',
            tagline: '워크스테이션 지향 설계',
            verdict:
              'LPDDR5x-8000 128GB를 탑재한 Ryzen AI Max+ 395 기기로, 듀얼 10GbE, USB4 v2, PCIe x16 확장 슬롯을 갖추었고 2U 랙 마운트를 지원합니다. 확인 당시 미국 스토어에서 128GB / 2TB 모델이 할인 판매 중이었으며 배송은 11월 초로 안내되었습니다. 192GB MS-S1 MAX-P495가 사전 주문 중이라는 보도가 있습니다.',
            pros: [
              '이 범주에서는 드문 듀얼 10GbE와 확장 슬롯',
              '사무실이나 연구실용 랙 마운트 옵션',
            ],
            cons: [
              '정가가 할인가보다 25% 높음',
              '판매처 보증은 미국 스토어 기준 2년',
            ],
            affiliateLinks: [
              { label: 'Minisforum MS-S1 MAX — 공식 스토어 →', url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', productName: 'Minisforum MS-S1 MAX', productCategory: 'AI Workstation' },
            ],
          },
        ],
        note: '제품 링크이며 제휴 관계는 없습니다. 사양은 벤더 페이지와 인용한 보고서에서 가져왔으며, 재고와 구성은 변경될 수 있습니다.',
      },
      prices: {
        id: 'prices',
        itemHeadings: true,
        title: '전체 기기 가격 확인',
        content:
          '**아래 수치는 모두 최종 업데이트 시점(업데이트 날짜 참조)에 명시된 출처에서 확인한 미국 가격이며, 다른 통화에서 환산한 값은 없습니다.** 2026년에 메모리 부족으로 가격이 여러 차례 올랐고 판매처 간 수치가 상충하는 항목도 있으므로, 표는 스냅샷으로 보시고 주문 전에 벤더 페이지를 확인하십시오. 유럽 및 국내 가격은 확인할 수 없어 기재하지 않았습니다.',
        columns: ['기기', '칩과 메모리', '확인된 미국 가격', '상태 및 출처 메모'],
        rows: [
          { '기기': 'NVIDIA DGX Spark', '칩과 메모리': 'GB10, 128GB', '확인된 미국 가격': '$6,950', '상태 및 출처 메모': 'ServeTheHome이 2026-10-03 보도. 출시가 $3,999, 올해 초 Founders Edition $4,699, OEM 64GB 모델은 $4,999부터' },
          { '기기': 'AMD Ryzen AI Halo', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '$3,999', '상태 및 출처 메모': '2TB SSD, 출시 보도 기준 Micro Center' },
          { '기기': 'AMD Ryzen AI Halo 192GB', '칩과 메모리': 'PRO 495, 192GB', '확인된 미국 가격': '$7,299', '상태 및 출처 메모': '단일 보도(VideoCardz), 판매처 페이지에서 미확인' },
          { '기기': 'Framework Desktop 192GB', '칩과 메모리': 'PRO 495, 192GB', '확인된 미국 가격': 'DIY $6,799 / 완제품 $7,449', '상태 및 출처 메모': '사전 주문, 단일 배치, 11월 출하(Phoronix, Framework)' },
          { '기기': 'Framework Desktop 128GB', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '$3,449', '상태 및 출처 메모': '비교용으로 Phoronix가 인용' },
          { '기기': 'Minisforum MS-S1 MAX', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '할인 $3,919 / 정가 $4,899', '상태 및 출처 메모': 'Minisforum 미국 스토어의 128GB / 2TB, 11월 초 배송' },
          { '기기': 'HP Z2 Mini G1a', '칩과 메모리': 'PRO 395, 128GB', '확인된 미국 가격': '$3,734~$5,079', '상태 및 출처 메모': 'Newegg 128GB / 1TB 대 Notebookcheck가 보도한 HP 미국 128GB / 2TB 가격' },
          { '기기': 'GMKtec EVO-X2', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '약 $3,650', '상태 및 출처 메모': '2026년 10월 비교 목록의 128GB / 2TB 한 건, GMKtec 스토어 가격은 동적으로 변동' },
          { '기기': 'Corsair AI Workstation 300', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '$3,399', '상태 및 출처 메모': 'Tom\'s Hardware 보도, 보도 날짜 미확인' },
          { '기기': 'Beelink GTR9 Pro', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '미확인', '상태 및 출처 메모': '미국 목록이 상충, PRO 495 변종은 현재까지 중국에서만 가격 책정' },
          { '기기': 'Bosgame M5', '칩과 메모리': '395, 128GB', '확인된 미국 가격': '미확인', '상태 및 출처 메모': '현재 가격을 찾지 못함' },
        ],
        note: 'MSI PRO MAX EDGE AI+ 11M은 확인할 수 없어 목록에 넣지 않았습니다. 저희가 직접 연 벤더 페이지에 없던 가격은 이를 보도한 매체의 것으로 표기했습니다.',
      },
      performance: {
        id: 'performance',
        title: '독립 테스트 결과',
        content: [
          '**저희가 찾은 수치가 공개된 유일한 직접 비교는 StorageReview의 Ryzen AI Halo 대 DGX Spark 테스트이며, 모든 사례에서 Spark가 이겼습니다.** 이 테스트는 Linux에서 배치 64로 여섯 개 모델에 대해 vLLM 온라인 서빙을 실행했습니다. 18개 시나리오 중 16개에서 Spark가 대략 2~13배 앞섰고, 나머지 두 개에서는 약 11~12% 앞섰으며 두 경우 모두 작은 dense 모델의 디코드 중심 실행이었습니다. 가장 큰 격차는 프리필 중심 작업과 Blackwell 하드웨어에 적합한 FP4 모델에서 나타났습니다.',
          '이 테스트는 다중 요청 서빙 처리량을 측정합니다. 단일 사용자 채팅 속도는 주로 메모리 대역폭에 좌우되며 두 기기는 대역폭이 비슷하므로(256 대 273 GB/s) 격차가 더 작을 것으로 예상하지만, 이는 예상일 뿐 해당 테스트에서 측정되지 않았습니다. Intel과의 비교를 포함한 AMD 자체 공개 비교는 벤더 테스트이며 독립 벤치마크가 아닙니다.',
        ],
        note: 'StorageReview의 리뷰는 2026-07-06에 게시되었고 2026-10-29에 수정되었습니다. 두 플랫폼 모두 소프트웨어가 빠르게 바뀌므로, 비율 수치에 의존하기 전에 다시 확인하십시오.',
      },
      capacity: {
        id: 'capacity',
        title: '128GB와 192GB에서 실행 가능한 모델',
        content:
          '**용량은 무엇이 로드되는지를 정하고, 대역폭과 소프트웨어는 얼마나 빠르게 실행되는지를 정합니다.** 이 표는 벤치마크가 아니라 양자화 산술(파라미터 × 가중치당 비트 수에 컨텍스트용 작업 공간을 더한 값)입니다.',
        columns: ['모델 급', '양자화', '가중치만', '128GB 기기', '192GB 기기'],
        rows: [
          { '모델 급': '70B dense', '양자화': '8비트', '가중치만': '~70GB', '128GB 기기': '적재 가능, 컨텍스트 여유 있음', '192GB 기기': '여유 있게 적재 가능' },
          { '모델 급': '120B급', '양자화': '4비트', '가중치만': '~60~70GB', '128GB 기기': '여유 있게 적재 가능', '192GB 기기': '큰 컨텍스트로 적재 가능' },
          { '모델 급': '200B급', '양자화': '4비트', '가중치만': '~100GB', '128GB 기기': '컨텍스트를 더하면 빠듯함', '192GB 기기': '적재 가능' },
          { '모델 급': '300B급', '양자화': '4비트', '가중치만': '~150GB', '128GB 기기': '적재 불가', '192GB 기기': '제한된 컨텍스트로 적재 가능' },
        ],
        note: '기본적으로 모든 메모리를 GPU가 사용할 수 있는 것은 아닙니다. GPU가 사용할 수 있는 메모리 양은 OS, 커널, 드라이버 설정에 따라 달라지며, StorageReview는 Ryzen AI Halo가 가변 그래픽 메모리 프리셋이 최대로 설정된 상태로 출하된다고 언급합니다. 사용하는 OS와 백엔드(Vulkan 또는 ROCm)에 맞는 벤더 가이드를 확인하십시오.',
      },
      intel: {
        id: 'intel',
        title: 'Intel의 현재 위치',
        content: [
          '**Intel의 Panther Lake 플랫폼은 지켜볼 가치가 있지만 아직 대형 모델용 기기는 아닙니다.** NanoReview에 따르면 Arc B390 그래픽을 갖춘 Core Ultra X9 388H는 153.6 GB/s에서 최대 96GB를 지원하며, PRO 495는 256 GB/s에서 192GB입니다. HotHardware는 일부 OpenVINO 워크로드에서 Arc B390이 Strix Halo보다 앞서고 ONNX에서는 Strix Halo가 앞선다고 확인했습니다. 이 결과는 PRO 495가 아니라 395와 비교한 것입니다.',
          'HP Z2 Mini G1i는 또 다른 설계입니다. 별도의 NVIDIA RTX 4000 SFF Ada 카드를 갖춘 Intel 워크스테이션으로, 하나의 큰 공유 풀이 아니라 전용 GPU 메모리를 사용한다는 뜻입니다. 이 기기는 이 비교가 아니라 더 넓은 워크스테이션 비교에 속합니다.',
        ],
      },
      decision: {
        id: 'decision',
        title: '어떤 기기를 사야 할까',
        items: [
          '**128GB에 가장 저렴하게 진입하려면:** AMD Ryzen AI Max+ 395 기기(Ryzen AI Halo, Minisforum MS-S1 MAX, GMKtec EVO-X2, Corsair). 가격 변동이 크므로 현재 가격을 비교하십시오.',
          '**128GB 이상이 필요하다면:** Framework Desktop 192GB 또는 192GB Ryzen AI Halo. Spark에 가까운 가격과 사전 주문 또는 제한적 소매 유통에 따른 대기를 감수해야 합니다.',
          '**가장 빠른 실측 서빙, CUDA, 파인튜닝, 2대 연결이 필요하다면:** DGX Spark. 현재 가격은 출시 때보다 훨씬 높습니다.',
          '**비즈니스 구매와 보증:** HP Z2 Mini G1a.',
          '**이 범주에 해당하지 않음:** 모델이 32~64GB에 들어가는 분은 먼저 미니 PC 가이드를 읽으십시오.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '192GB를 "128GB보다 빠르다"고 해석하는 것. 더 큰 모델과 더 긴 컨텍스트를 불러올 뿐이며, 속도는 여전히 대역폭, 연산 능력, 소프트웨어를 따릅니다.',
          'Strix Halo 기기 아홉 대를 아홉 가지 다른 프로세서로 취급하는 것. 사양서의 칩 이름 대신 냉각, 전력 제한, 포트, 보증을 확인하십시오.',
          '출시 당시 가격을 기준으로 구매하는 것. 이 범주의 여러 수치가 여름 이후 올랐으며, 표에 날짜를 표기한 이유입니다.',
          '모든 통합 메모리를 GPU가 사용할 수 있다고 가정하는 것. 할당 제한은 OS, BIOS, 백엔드에 따라 다릅니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AMD Ryzen AI Halo가 DGX Spark보다 빠릅니까?',
            a: '아니요. 저희가 찾은 독립 테스트에서는 그렇지 않았습니다. StorageReview는 vLLM 서빙 18개 시나리오 모두에서 Spark가 앞선다고 측정했으며, 디코드 중심의 두 실행은 약 12% 이내였습니다.',
          },
          {
            q: '192GB 기기는 Spark가 실행할 수 없는 모델을 실행할 수 있습니까?',
            a: '적재 면에서는 그렇습니다. 약 300B급 4비트 모델은 가중치만으로 약 150GB가 필요합니다. 쓸 만한 속도로 실행되는지는 대역폭과 소프트웨어에 달려 있습니다.',
          },
          {
            q: 'Strix Halo에서 모델을 실행하려면 ROCm이 필요합니까?',
            a: '반드시 그렇지는 않습니다. llama.cpp는 Vulkan으로도 실행할 수 있으며, 어느 백엔드가 더 빠른지는 커널과 드라이버 버전에 따라 다르므로 사용 중인 환경에서 두 가지를 모두 테스트해 보십시오.',
          },
          {
            q: '왜 Apple Silicon은 포함하지 않았습니까?',
            a: 'Mac은 고유한 메모리 등급과 소프트웨어를 가진 별도 범주입니다. 위에 링크된 Mac 구매 가이드를 참고하십시오.',
          },
          {
            q: '64GB Core Ultra 미니 PC는 DGX Spark의 경쟁 제품입니까?',
            a: '아니요. 메모리는 많아야 절반이고 메모리 버스는 훨씬 좁으므로, 다른 가이드에서 다루는 미니 PC와 경쟁합니다.',
          },
          {
            q: '이 기기들은 파인튜닝에 적합합니까?',
            a: 'NVIDIA는 Spark가 최대 70B 파라미터까지 파인튜닝을 지원한다고 밝히고 있으며, AMD 기기에 대해서는 이에 상응하는 벤더 주장이나 독립 테스트를 찾지 못했습니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          { url: 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', title: 'NVIDIA DGX Spark — Official Product Page', description: 'GB10 사양: 128GB LPDDR5X, 273 GB/s, 200Gbps 네트워킹, DGX OS, 200B 추론 주장.' },
          { url: 'https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases', title: 'ServeTheHome: DGX Spark 64GB launched, 128GB price increases', description: '128GB 가격 $6,950과 64GB OEM 모델 $4,999에 대한 2026년 10월 보도.' },
          { url: 'https://www.storagereview.com/review/amd-ryzen-ai-halo-review-a-dual-os-200b-parameter-desktop-takes-on-the-dgx-spark', title: 'StorageReview: AMD Ryzen AI Halo vs. DGX Spark', description: 'vLLM 서빙 결과, 플랫폼 참고 사항, 리뷰 당시 Halo $3,999 및 Founders Edition $4,699 가격.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/amd-challenges-nvidias-dgx-spark-with-usd3-999-ryzen-ai-halo-with-windows-11-support-strix-halo-desktop-undercuts-nvidia-by-usd700-packs-128gb-of-unified-memory', title: 'Tom\'s Hardware: Ryzen AI Halo launch', description: 'Windows 11을 지원하는 $3,999의 128GB Ryzen AI Halo.' },
          { url: 'https://videocardz.com/newz/amd-ryzen-ai-halo-with-ryzen-ai-max-pro-495-launches-at-7299-with-192gb-memory', title: 'VideoCardz: Ryzen AI Halo with PRO 495 and 192GB', description: '192GB Ryzen AI Halo 가격 보도.' },
          { url: 'https://www.phoronix.com/news/Framework-Desktop-Gorgon-Halo', title: 'Phoronix: Framework Desktop with Ryzen AI Max+ PRO 495', description: '192GB 사전 주문 가격, 11월 출하, 128GB 비교 가격.' },
          { url: 'https://frame.work/desktop', title: 'Framework Desktop — Official Page', description: 'PRO 495 구성, 메모리 옵션, 섀시 및 확장 세부 정보.' },
          { url: 'https://store.minisforum.com/products/minisforum-ms-s1-max-mini-pc', title: 'Minisforum MS-S1 MAX — Official US Store', description: '사양, 할인가와 정가, 배송 예상일.' },
          { url: 'https://www.notebookcheck.net/Z2-Mini-G1a-HP-reveals-comparatively-high-US-pricing-among-over-a-dozen-AMD-Ryzen-AI-Max-variants.1034018.0.html', title: 'Notebookcheck: HP Z2 Mini G1a US pricing', description: '128GB 구성의 HP 미국 가격.' },
          { url: 'https://www.tomshardware.com/desktops/mini-pcs/corsairs-strix-halo-ai-workstation-300-gets-even-more-expensive-amid-the-rampocalypse-ryzen-ai-max-395-flagship-now-sits-at-usd3-399', title: 'Tom\'s Hardware: Corsair AI Workstation 300 price rise', description: 'Corsair 395 / 128GB 가격 보도.' },
          { url: 'https://nanoreview.net/en/cpu-compare/intel-core-ultra-x9-388h-vs-amd-ryzen-ai-max-495', title: 'NanoReview: Core Ultra X9 388H vs. Ryzen AI Max+ 495', description: 'Intel 및 AMD 칩의 메모리 용량과 대역폭 수치.' },
          { url: 'https://hothardware.com/reviews/intel-core-ultra-x9-388h-panther-lake-review?page=2', title: 'HotHardware: Core Ultra X9 388H review', description: 'Ryzen AI Max+ 395 대비 OpenVINO 및 ONNX 비교.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '로컬 AI 워크스테이션: AMD Strix Halo 대 NVIDIA DGX Spark',
      'description': '로컬 AI 워크스테이션 비교: DGX Spark 대 AMD, Framework, HP, GMKtec, Minisforum의 Strix Halo 기기 — 메모리, 실측 속도, 출처 표기 가격.',
      'datePublished': '2026-10-31',
      'dateModified': '2026-10-31',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'ko',
      'url': 'https://www.promptquorum.com/ko/power-local-llm/local-ai-workstations-strix-halo-vs-dgx-spark',
      'articleBody': '가장 저렴한 128GB 진입과 x86 호환성이 중요하다면 AMD Strix Halo를, 가격보다 CUDA, 처리량, 클러스터링이 중요하다면 DGX Spark를 구매하십시오.',
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'audience': { '@type': 'Audience', 'audienceType': '128~192GB 로컬 AI 워크스테이션을 고르면서 AMD Strix Halo 시스템과 NVIDIA DGX Spark를 비교하는 구매자' },
    },
  },
}
