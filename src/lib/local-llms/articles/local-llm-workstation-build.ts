// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-workstation-build
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Hardware Setups',
      title: 'Build a Local LLM PC: Best Workstation Setup (GPU, VRAM, 7B–70B Models)',
      seoTitle: 'Local LLM Workstation Build 2026: Dual RTX 4090, $4–6K, 70B Ready',
      intro: '**A professional workstation for production local LLM inference costs $4,000–6,000 and features dual RTX 4090 GPUs (48 GB VRAM combined), Threadripper 7970X CPU (32 cores), 128 GB DDR5 RAM, custom cooling, and a 2,000 W power supply.** As of April 2026, this tier serves 2–3 concurrent 70B users at 14 tok/s each, runs Llama 3.3 70B fine-tuning side-by-side with inference, and provides on-premises deployment without cloud API costs.',
      metaDescription: 'Build a powerful local LLM workstation with the right GPU, VRAM, and RAM. Exact PC setups to run 7B–70B models fast with Ollama and LM Studio.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**A professional workstation for production local LLM inference costs $4,000–6,000 and features dual RTX 4090 GPUs (48 GB VRAM combined), Threadripper 7970X CPU (32 cores), 128 GB DDR5 RAM, custom cooling, and a 2,000 W power supply.** As of April 2026, this tier serves 2–3 concurrent 70B users at 14 tok/s each, runs Llama 3.3 70B fine-tuning side-by-side with inference, and provides on-premises deployment without cloud API costs.',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '10 min',
      educationalLevel: 'Advanced',
      primaryTerm: 'AI Workstation',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Who Needs a $4K-6K Workstation?', anchor: '#who-needs' },
        { label: 'What\'s the Workstation Parts List?', anchor: '#parts-list' },
        { label: 'How Do You Configure Dual GPUs for Maximum Performance?', anchor: '#dual-gpu' },
        { label: 'Dual RTX 5090 vs Dual RTX 4090: Value Comparison', anchor: '#rtx5090-vs-4090' },
        { label: 'How Do You Cool 1,200W of Heat?', anchor: '#cooling' },
        { label: 'What\'s the Right Power Supply & Electrical Setup?', anchor: '#power' },
        { label: 'What Multi-User Inference Performance Can You Expect?', anchor: '#perf' },
        { label: 'What Are Common Workstation Build Mistakes?', anchor: '#mistakes' },
        { label: 'Frequently Asked Questions', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'CPU: Threadripper 7970X (32-core, $2,499) or Intel Xeon W9-3495X ($5,000+). Enables parallel fine-tuning while serving inference.',
            'GPU: 2× RTX 4090 24GB (used pair ~$2,200-2,600). 48GB total VRAM for multi-user 70B or single 70B + prep tasks.',
            'RAM: 128GB DDR5 ($600-800). Supports 8+ concurrent users on 70B or single-user 70B + quantization in parallel.',
            'Storage: 4-8TB NVMe SSD + 12-24TB HDD ($800-1,500). Multi-model library + backups + training datasets.',
            'PSU: 2× 1200W or 1× 2000W ($800-1,200). Dual 4090s draw 900W sustained; headroom for spikes essential.',
            'Cooling: Custom liquid loop or dual AIO ($1,000-2,000). Single large GPU + CPU = 1,200W heat output.',
            'Network: 10Gbps Ethernet optional ($200-400). LAN multi-user access without bottlenecking.',
            'Total: $4,000-6,000. Supports 8+ concurrent 70B users or 1 user fine-tuning + serving simultaneously.',
          ],
        },
        'who-needs': {
          id: 'who-needs',
          title: 'Who Needs a $4K-6K Workstation?',
          content: 'This tier is for:',
          items: [
            '**SMBs/Enterprises:** Running internal LLM API for 5+ employees simultaneously. On-prem data control required.',
            '**AI researchers:** Fine-tuning large models (70B LoRA) while serving inference to team. Single $2K rig can\'t parallelize.',
            '**MLOps engineers:** Building internal inference clusters. Start with one workstation as the server node.',
            '**Content studios (serious):** Running 24/7 video captioning, code generation, summarization without API costs.',
          ],
        },
        'parts-list': {
          id: 'parts-list',
          title: 'What\'s the Workstation Parts List?',
          content: '**A professional workstation starts with dual RTX 4090s ($2,200–2,600 for used pair) and a Threadripper CPU ($2,800–3,200), paired with 128GB DDR5 RAM and custom liquid cooling.** Here\'s the complete parts list and cost breakdown:',
          rows: [
            { 'Component': 'GPU', 'Model': '2× RTX 4090 24GB (used)', 'Price (April 2026)': '$2,200-2,600', 'Notes': 'NVLink bridges optional. Test both cards before pairing.' },
            { 'Component': 'CPU', 'Model': 'Threadripper 7970X (32-core)', 'Price (April 2026)': '$2,400-2,500', 'Notes': 'Enables 32 parallel cores for fine-tuning while serving inference on both GPUs.' },
            { 'Component': 'Motherboard', 'Model': 'TRX850 or Xeon W90', 'Price (April 2026)': '$400-800', 'Notes': 'Dual GPU support, PCIe 5.0, enterprise-grade power delivery.' },
            { 'Component': 'RAM', 'Model': '128GB DDR5 6000 MHz', 'Price (April 2026)': '$600-800', 'Notes': 'Corsair Dominator Platinum. Enables 8+ concurrent users.' },
            { 'Component': 'Storage', 'Model': '4TB NVMe + 12TB HDD', 'Price (April 2026)': '$800-1,200', 'Notes': 'NVMe for hot models, HDD for backup & datasets.' },
            { 'Component': 'PSU', 'Model': '2000W 80+ Platinum or 2× 1200W', 'Price (April 2026)': '$1,000-1,500', 'Notes': 'Dual 4090s = 900W sustained, need 2000W+ headroom.' },
            { 'Component': 'Cooling', 'Model': 'Custom loop or 2× 360mm AIO', 'Price (April 2026)': '$1,500-2,500', 'Notes': 'CPU + 2 GPUs = 1,200W heat. Air cooling insufficient.' },
            { 'Component': 'Case', 'Model': 'Lian Li O11 Dynamic or Corsair Crystal', 'Price (April 2026)': '$200-300', 'Notes': 'Supports dual GPU + large AIO or loop.' },
            { 'Component': 'Total', 'Model': '--', 'Price (April 2026)': '$4,000-6,000', 'Notes': 'Scales with GPU market prices & cooling choice.' },
          ],
          columns: ['Component', 'Model', 'Price (April 2026)', 'Notes'],
          image: '/images/local-llm-workstation-build-components-layout-en.svg',
          imageCaption: 'Workstation components: dual RTX 4090 GPUs (48GB total VRAM), Threadripper 7970X CPU (32 cores), 128GB DDR5 RAM, 2000W PSU, and liquid cooling system for 1,200W heat dissipation.',
        },
        'dual-gpu': {
          id: 'dual-gpu',
          title: 'How Do You Configure Dual GPUs for Maximum Performance?',
          content: '**Two RTX 4090s give you 48GB VRAM and ~2× throughput for inference.** You have three configuration options: side-by-side independent operation, NVLink fusion for unified VRAM, or tensor parallelism for single-model acceleration.',
          numberedItems: [
            '**Side-by-side (no NVLink):** Each GPU runs independently. Model A on GPU 0, Model B on GPU 1. Best for heterogeneous workloads (fine-tuning 7B + serving 70B).',
            '**NVLink bridge:** Fuse VRAM (48GB appears as single 48GB pool). Enables larger batch sizes or massive context windows. Cost: $200-300 for bridge + setup complexity.',
            '**Dual-GPU inference:** Shard a single 70B model across 2 GPUs for 2× throughput (28 tok/s instead of 14). Requires vLLM or llama.cpp tensor-parallel support.',
          ],
          callouts: [
            { type: '💡 Pro Tip', text: 'Skip NVLink for heterogeneous workloads. Independent operation is simpler, lower cost ($200 saved), and eliminates bridge firmware bugs.' },
            { type: '⚠️ Warning', text: 'NVLink bridge requires NVIDIA proprietary driver support. Open-source ROCm or AMD equivalents do not support bridging across different GPUs.' },
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Dual GPUs either run independent models per card (simplest) or pool their VRAM via NVLink (complex but enables larger models).' },
            { type: 'plain-terms', text: 'Think of it like two separate computers (side-by-side) vs. one shared super-computer (NVLink). Side-by-side is easier to set up; shared gives more power for huge models.' },
          ],
          image: '/images/local-llm-workstation-build-dual-gpu-config-en.svg',
          imageCaption: 'Three dual-GPU configuration options: side-by-side independent (heterogeneous workloads, no NVLink), NVLink bridge (unified 48GB VRAM pool, large context windows), and tensor parallelism (single 70B model sharded across GPUs for 28 tok/s throughput).',
        },
        'rtx5090-vs-4090': {
          id: 'rtx5090-vs-4090',
          title: 'Dual RTX 5090 vs Dual RTX 4090: Performance & Value (April 2026)',
          content: '**Dual RTX 4090 used ($2,200–2,600) remains the value choice for Q4 70B at 100 tok/s. Dual RTX 5090 new ($4,000) wins for higher VRAM (64 GB) and quality (Q8 format) but costs $1,400–1,800 more.** Single RTX 5090 ($2,000 new) fits 70B Q4 at 40–50 tok/s without complexity.',
          rows: [
            { 'Configuration': 'Dual RTX 4090 (used)', 'VRAM': '48 GB', '70B Speed': '100 tok/s (Q4)', 'Cost': '$2,200–2,600' },
            { 'Configuration': 'Single RTX 5090 (new)', 'VRAM': '32 GB', '70B Speed': '40–50 tok/s (Q4)', 'Cost': '$2,000' },
            { 'Configuration': 'Dual RTX 5090 (new)', 'VRAM': '64 GB', '70B Speed': '120 tok/s (Q4)', 'Cost': '$4,000' },
          ],
          columns: ['Configuration', 'VRAM', '70B Speed', 'Cost'],
          callouts: [
            { type: '💡 Pro Tip', text: 'For Q4 70B inference at maximum throughput: dual 4090 used ($2,200–2,600) delivers the best April 2026 value. New 5090s cost 50%+ more.' },
            { type: '📌 Key Point', text: 'Dual 5090 wins for Q8 70B (higher quality output) or future-proofing. Single 5090 eliminates dual-GPU complexity for solo users.' },
          ],
        },
        'cooling': {
          id: 'cooling',
          title: 'How Do You Cool 1,200W of Heat?',
          content: 'RTX 4090 (450W) + RTX 4090 (450W) + CPU (200W) = 1,100W sustained, spikes to 1,300W.',
          items: [
            '**Custom liquid loop:** $1,500-2,500. CPU water block + GPU water blocks + 360mm radiator. Keeps GPUs <75°C, CPU <80°C.',
            '**Dual 360mm AIO:** $600-900. One AIO per GPU + separate CPU cooler. More modular, easier maintenance than custom loop.',
            '**Air cooling:** Not viable. Thermal throttling guaranteed on sustained 70B inference.',
          ],
          callouts: [
            { type: '🛠️ Best Practice', text: 'Use thermal paste with 5+ W/mK conductivity (Noctua NT-H2, Corsair TM30). Cheap paste can add 10–15°C to temps and void GPU warranty.' },
          ],
          image: '/images/local-llm-workstation-build-cooling-setup-en.svg',
          imageCaption: 'Heat dissipation: 1,200W total from dual RTX 4090s (450W each) and Threadripper CPU (200W). Cooling solutions: custom liquid loop ($1,500–2,500), dual 360mm AIO ($600–900), or air cooling (not recommended, causes thermal throttling).',
        },
        'power': {
          id: 'power',
          title: 'What\'s the Right Power Supply & Electrical Setup?',
          content: '**Dual 4090s (900W sustained, spikes to 1,300W) demand a 2000W PSU minimum — anything less causes voltage sag and crashes under load.** You can choose a single 2000W PSU or dual 1200W PSUs for redundancy, but must verify your home/office circuit can handle 2000W at peak draw.',
          items: [
            '**Option 1: Single 2000W PSU:** Seasonic, Corsair, or EVGA 80+ Platinum. Cleaner cable routing, single point of failure.',
            '**Option 2: Dual 1200W PSU:** One PSU per GPU + shared motherboard. Redundancy (one fails, inference continues at 50% speed). Complex setup.',
            '**Capacity rule:** 2000W for dual 4090 is minimum. Anything less causes voltage sag under load.',
            '**Circuit planning:** A dual-GPU rig pulls 2000W at peak. Ensure 20A circuit (typical home/office outlet is 15A, insufficient). Use dedicated 240V line if available.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'Home outlets are typically 15A at 120V (1,800W max). A dual-4090 rig will trip the breaker. Install a dedicated 240V 20A circuit ($200–400 electrician fee).' },
            { type: '📌 Key Point', text: 'Always use modular PSUs. Dual GPUs have dozens of power pins; non-modular cables create fire hazards due to contact resistance on multi-pin connectors.' },
          ],
          image: '/images/local-llm-workstation-build-power-electrical-en.svg',
          imageCaption: 'Power requirements: ~1,100W continuous (450W + 450W GPUs, 200W CPU) with spikes to 1,300W. PSU options: single 2000W (simpler, cleaner cables) or dual 1200W (redundant, complex setup). Both require dedicated 20A 240V circuit.',
        },
        'perf': {
          id: 'perf',
          title: 'What Multi-User Inference Performance Can You Expect?',
          content: '**With 128GB RAM and dual 4090s, you can serve 2–3 concurrent 70B users at 14 tok/s each, or 8+ concurrent 7B users at 30+ tok/s each.** The following benchmarks assume Q4 quantization and vLLM for multi-user scheduling:',
          items: [
            '**Single user, 70B model:** 28 tokens/sec (2× 14 tok/s per GPU via tensor parallelism).',
            '**Two concurrent users, 70B each:** 14 tokens/sec per user (time-multiplexing requests).',
            '**Four concurrent users, 7B each:** 120 tokens/sec total (each user gets 30 tok/s).',
            '**Fine-tuning 7B LoRA + serving 70B:** Fine-tuning on GPU 0 (100W), inference on GPU 1 (450W). No interference.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'What Are Common Workstation Build Mistakes?',
          items: [
            'Buying two different GPU models (5090 + 4090). Asymmetry causes load balancing issues. Stick to identical cards.',
            'Skimping on PSU to save $300. A 1500W PSU + dual 4090s will throttle or crash under load.',
            'Using air cooling instead of liquid. Thermal throttling cuts throughput 30-50% on sustained inference.',
            '**Forgetting electricity cost in TCO calculations.** Dual RTX 4090s at sustained inference draw 900 W. At US average ($0.14/kWh) running 24/7: ~$1,100/year electricity. EU average (~$0.32/kWh): ~$2,500/year. Over 3 years: $3,300–7,500 in electricity alone. Factor this into ROI vs cloud API decisions.',
            '**Underestimating networking for multi-user setups.** Standard gigabit Ethernet (1 Gbps = 125 MB/s) is the bottleneck when serving 5+ concurrent users with long context responses. Upgrade to 2.5 Gbps or 10 Gbps Ethernet for production workstations serving teams. Cost: $200–400 for NIC + switch.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'Mismatched GPUs (different models or VRAM sizes) break tensor parallelism. vLLM will fall back to single-GPU inference, halving throughput.' },
            { type: '💡 Pro Tip', text: 'Buy used RTX 4090 pairs (verified working together by previous owner) instead of new single cards. Save $500–800 and avoid hardware lottery.' },
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'Is a Threadripper CPU necessary, or can I use Ryzen 9?', a: 'For inference alone: Ryzen 9 works fine. For inference + parallel fine-tuning: Threadripper\'s extra cores (64 vs. 16) are essential.' },
            { q: 'Should I use NVLink to fuse the two 4090s?', a: 'Optional. Skip it if running separate models on each GPU (7B + 70B). Use it if sharding a single 70B across both GPUs for higher batch sizes.' },
            { q: 'How many concurrent users can a dual-4090 rig handle?', a: 'For 70B: 2-3 users (each getting 14 tok/s). For 7B: 8+ users (each getting 30+ tok/s).' },
            { q: 'Can I upgrade to RTX 5090 instead of dual 4090?', a: 'Single 5090: Similar performance to dual 4090, half the VRAM (24GB vs. 48GB), $1,999. Dual 5090: $4,000 (overkill, worse value).' },
            { q: 'What\'s the ROI on a $5,000 workstation vs. cloud LLM API?', a: 'Cloud: $0.001 per 1K tokens. Workstation: $5,000 amortized over 2 years = $2,500/year, ~$0.000001 per token. Break-even at 2.5B tokens/year (light use).' },
            { q: 'Does a workstation need data center cooling?', a: 'No. Consumer-grade liquid cooling (2× 360mm AIO or custom loop) is sufficient. Data center cooling (in-row, overhead) is designed for density; a single workstation\'s 1,200W fits within office HVAC.' },
            { q: 'Should I wait for the RTX 6090 instead of buying dual 4090s now?', a: 'NVIDIA\'s RTX 60-series is expected late 2026 to 2027 based on historical 2-year refresh cycles. If you need a workstation now: dual RTX 4090 used ($2,200–2,600) delivers the best 70B inference value in April 2026. If you can wait 12–18 months: RTX 6090 will likely have 48 GB VRAM single-card, eliminating the need for dual GPUs entirely.' },
            { q: 'What is the noise level of a dual-4090 workstation?', a: 'Under sustained 70B inference: 50–60 dB at 1 meter with custom liquid cooling. Comparable to a normal office conversation. With dual 360mm AIO: 55–65 dB (audibly louder under load). Air cooling: 65–75 dB (loud, impractical for office use). For desk-side placement: custom loop or quiet AIO is essential. For server-room placement: noise is irrelevant.' },
          ],
          callouts: [
            { type: '🔍 Did You Know?', text: 'Dual RTX 4090s at full inference load consume 900W sustained. Your electricity bill: ~$2,000/year at US average rates ($0.13/kWh), 24/7 operation.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Local LLM PC Build Under $2,000](/local-llms/local-llm-pc-build-2000) — Mid-range single-GPU setup for small teams.',
            '[Best Local LLM PC Build Under $1,000](/local-llms/local-llm-pc-build-1000) — Budget-friendly 7B-13B inference.',
            '[AMD Ryzen AI Max+ Mini PCs (2026)](/local-llms/best-amd-mini-pc-local-llm-2026) — Alternative: compact 64–128GB unified memory systems for 30–70B model inference.',
            '[Cloud GPU Rental vs Buying: When to Rent](/local-llms/cloud-gpu-rental-comparison-2026) — RunPod, Vast.ai, Lambda Labs pricing and decision matrix.',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm) — Single-GPU comparison for workstation upgrades.',
            '[Fine-Tuning Local LLMs with LoRA](/local-llms/fine-tuning-local-llms-lora) — Techniques for parallel fine-tuning on dual GPUs.',
            '[How Much VRAM for Local LLMs?](/local-llms/how-much-vram-local-llm) — VRAM scaling from 8GB to 128GB.',
            '[Liquid Cooling for GPU Workstations](/local-llms/gpu-cooling-strategies) — Custom loop vs. AIO best practices.',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            '[PCPartPicker](https://pcpartpicker.com) — Live component pricing for Threadripper, RTX 4090/5090, and DDR5 RAM as of April 2026.',
            '[TechPowerUp CPU Database](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&family=Threadripper) — Official Threadripper 7970X power consumption and core count specifications.',
            '[NVIDIA NVLink Documentation](https://www.nvidia.com/en-us/data-center/nvlink/) — Official NVLink specs for memory pooling and tensor parallelism across dual RTX cards.',
            '[vLLM Distributed Serving](https://docs.vllm.ai/en/latest/serving/distributed_serving.html) — Multi-GPU tensor parallelism configuration for 70B models on consumer hardware.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLM Workstation Build 2026: Dual RTX 4090, Threadripper, $4,000–6,000',
        'description': 'Build a $4,000–6,000 workstation: 2× RTX 4090 (48 GB VRAM), Threadripper 7970X, 128 GB DDR5. Serves 2–3 concurrent 70B users at 14 tok/s each. Complete cooling, PSU, electrical guide.',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-workstation-build',
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-25',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper',
          'url': 'https://www.promptquorum.com/about',
          'sameAs': 'https://www.promptquorum.com/about'
        },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Local LLM workstation' },
          { '@type': 'Thing', 'name': 'Dual RTX 4090 build' },
          { '@type': 'Thing', 'name': 'Threadripper 7970X LLM' },
          { '@type': 'Thing', 'name': '70B inference workstation' },
          { '@type': 'Thing', 'name': 'Multi-GPU local AI build' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'proficiencyLevel': 'Advanced',
        'educationalLevel': 'Advanced',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local LLM Workstation Build Components 2026',
        'numberOfItems': 8,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'GPU: 2× RTX 4090 24 GB (used pair)',
            'description': '$2,200–2,600. 48 GB VRAM combined. Tensor parallelism for 70B at 100 tok/s.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'CPU: AMD Threadripper 7970X (32-core)',
            'description': '$2,499. Enables parallel quantization and fine-tuning while serving inference.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Motherboard: TRX50 chipset (sTR5)',
            'description': '$400–800. Dual GPU support, PCIe 5.0, 7-channel DDR5.'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'RAM: 128 GB DDR5 6000 MHz',
            'description': '$600–800. Corsair Dominator Platinum or equivalent. Supports 8+ concurrent users.'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Storage: 4 TB NVMe Gen4 + 12 TB HDD',
            'description': '$800–1,200. NVMe for hot models, HDD for backup and training datasets.'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'PSU: 2,000 W 80+ Platinum',
            'description': '$300–500. Dual 4090s draw 900 W sustained. Headroom for 1,300 W spikes essential.'
          },
          {
            '@type': 'ListItem',
            'position': 7,
            'name': 'Cooling: Custom loop or 2× 360mm AIO',
            'description': '$1,000–2,500. CPU + 2 GPUs = 1,200 W heat. Air cooling causes thermal throttling.'
          },
          {
            '@type': 'ListItem',
            'position': 8,
            'name': 'Case: Lian Li O11 Dynamic XL',
            'description': '$200–300. Dual GPU clearance, large radiator support, cable management.'
          },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-workstation-build',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is a Threadripper CPU necessary, or can I use Ryzen 9?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For inference alone: Ryzen 9 works fine. For inference + parallel fine-tuning: Threadripper\'s extra cores (32 vs. 16) are essential.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I use NVLink to fuse the two 4090s?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Optional. Skip it if running separate models on each GPU (7B + 70B). Use it if sharding a single 70B across both GPUs for higher batch sizes.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many concurrent users can a dual-4090 rig handle?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For 70B: 2–3 users (each getting 14 tok/s). For 7B: 8+ users (each getting 30+ tok/s).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I upgrade to RTX 5090 instead of dual 4090?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Single 5090: Similar performance to dual 4090, half the VRAM (24 GB vs. 48 GB), $1,999. Dual 5090: $4,000 (overkill, worse value).'
            }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the ROI on a $5,000 workstation vs. cloud LLM API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cloud: $0.001 per 1K tokens. Workstation: $5,000 amortized over 2 years = $2,500/year, ~$0.000001 per token. Break-even at 2.5B tokens/year (light use).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does a workstation need data center cooling?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Consumer-grade liquid cooling (2× 360 mm AIO or custom loop) is sufficient. Data center cooling (in-row, overhead) is designed for density; a single workstation\'s 1,200 W fits within office HVAC.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I wait for the RTX 6090 instead of buying dual 4090s now?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NVIDIA\'s RTX 60-series is expected late 2026 to 2027 based on historical 2-year refresh cycles. If you need a workstation now: dual RTX 4090 used ($2,200–2,600) delivers the best 70B inference value in April 2026. If you can wait 12–18 months: RTX 6090 will likely have 48 GB VRAM single-card, eliminating the need for dual GPUs entirely.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the noise level of a dual-4090 workstation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Under sustained 70B inference: 50–60 dB at 1 meter with custom liquid cooling. Comparable to a normal office conversation. With dual 360 mm AIO: 55–65 dB (audibly louder under load). Air cooling: 65–75 dB (loud, impractical for office use). For desk-side placement: custom loop or quiet AIO is essential. For server-room placement: noise is irrelevant.'
            }
          },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-workstation-build-static.html',
      gammaDescription: 'The slide deck below covers the complete workstation build for professional local LLM inference: target audience and build cases, dual RTX 4090 components with total cost ($4,000–6,000), dual-GPU configuration options (side-by-side, NVLink, tensor parallelism), RTX 5090 vs 4090 value comparison, cooling solutions for 1,200 W heat dissipation, power supply and electrical requirements, multi-user inference performance benchmarks (28 tok/s single-user 70B, 2–3 concurrent users, 8+ concurrent 7B users), common build mistakes to avoid, and FAQs on threading, NVLink, thermal management, and upgradability. Download the PDF as a local LLM workstation reference guide.',
    },
    de: {
      freshness_tier: 'annual',
      theme: 'Hardware Setups',
      title: 'Local LLM PC bauen: Beste Workstation (GPU, VRAM, 7B–70B Modelle)',
      seoTitle: 'Lokale LLM-Workstation Build 2026: Dual RTX 4090, €4–6K, 70B-fähig',
      intro: '**Eine professionelle Workstation für lokale LLM-Inferenz in Produktionsqualität kostet €4.000–6.000 und verfügt über zwei RTX 4090 GPUs (insgesamt 48 GB VRAM), Threadripper 7970X CPU (32 Kerne), 128 GB DDR5 RAM, benutzerdefinierte Kühlung und ein 2.000 W Netzteil.** Ab April 2026 können 2–3 gleichzeitige 70B-Benutzer bei 14 Token/s bedient werden, Llama 3.3 70B Feinabstimmung lässt sich parallel zu Inferenz betreiben, und On-Premises-Bereitstellung ohne Cloud-API-Kosten ist möglich.',
      metaDescription: 'Baue deine Local LLM Workstation mit der richtigen GPU, VRAM und RAM. Konkrete PC-Builds für 7B–70B Modelle mit Ollama und LM Studio.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-25',
      leadAnswerBlock: '**Eine professionelle Workstation kostet €4.000–6.000 mit 2× RTX 4090 (48 GB VRAM), Threadripper 7970X (32 Kerne), 128 GB DDR5, custom Kühlung und 2.000 W Netzteil. Ab April 2026: 2–3 gleichzeitige 70B-Benutzer à 14 Token/s.**',
      audience: 'Ingenieure, die lokale LLMs in Produktion oder Unternehmensumgebungen bereitstellen',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Advanced',
      primaryTerm: 'AI Workstation',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Wer benötigt eine €4K-6K Workstation?', anchor: '#who-needs' },
        { label: 'Wie ist die Teile-Liste für die Workstation?', anchor: '#parts-list' },
        { label: 'Wie konfigurieren Sie Dual GPUs für maximale Leistung?', anchor: '#dual-gpu' },
        { label: 'Dual RTX 5090 vs Dual RTX 4090: Wert-Vergleich', anchor: '#rtx5090-vs-4090' },
        { label: 'Wie kühlen Sie 1.200 W Abwärmeleistung?', anchor: '#cooling' },
        { label: 'Wie wählen Sie das richtige Netzteil und Stromversorgungssetup?', anchor: '#power' },
        { label: 'Welche Multi-User-Inferenz-Leistung erwarten Sie?', anchor: '#perf' },
        { label: 'Welche häufigen Fehler beim Workstation-Build sollten Sie vermeiden?', anchor: '#mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU: Threadripper 7970X (32-Kern, €2.400–2.500) oder Intel Xeon W9-3495X (€5.000+). Ermöglicht parallele Feinabstimmung während Inferenz läuft.',
            'GPU: 2× RTX 4090 24GB (gebrauchtes Paar ~€1.900–2.200). 48 GB VRAM insgesamt für Multi-User 70B oder single 70B + Vorbereitungsaufgaben.',
            'RAM: 128GB DDR5 (€600–800). Unterstützt 8+ gleichzeitige Nutzer auf 70B oder single-User 70B + Quantisierung parallel.',
            'Speicher: 4–8TB NVMe SSD + 12–24TB HDD (€800–1.500). Multi-Model-Bibliothek + Backups + Trainings-Datensätze.',
            'Netzteil: 2× 1200W oder 1× 2000W (€800–1.200). Dual 4090er ziehen 900W kontinuierlich; Headroom für Spitzen essentiell.',
            'Kühlung: Custom Liquid Loop oder Dual AIO (€1.000–2.000). Single großer GPU + CPU = 1.200W Wärmeleistung.',
            'Netzwerk: 10Gbps Ethernet optional (€200–400). LAN Multi-User-Zugang ohne Engpässe.',
            'Gesamt: €4.000–6.000. Unterstützt 8+ gleichzeitige 70B-Nutzer oder 1 Nutzer Fine-Tuning + parallel serving.',
          ],
        },
        'who-needs': {
          id: 'who-needs',
          title: 'Wer benötigt eine €4K-6K Workstation?',
          content: 'Dieser Tier ist für:',
          items: [
            '**KMUs/Unternehmen:** LLM API intern für 5+ Mitarbeiter gleichzeitig betreiben. On-Prem-Daten-Kontrolle erforderlich.',
            '**AI-Forscher:** Große Modelle fine-tunen (70B LoRA) während Inferenz für Team serving. Einzelnes €2K Rig kann nicht parallelisieren.',
            '**MLOps-Ingenieure:** Interne Inference-Cluster bauen. Mit einer Workstation als Server-Node starten.',
            '**Content-Studios (professionell):** 24/7 Video-Captioning, Code-Generierung, Zusammenfassung ohne API-Kosten betreiben.',
          ],
        },
        'parts-list': {
          id: 'parts-list',
          title: 'Wie ist die Teile-Liste für die Workstation?',
          content: '**Eine professionelle Workstation beginnt mit Dual RTX 4090s (€1.900–2.200 für gebrauchtes Paar) und einer Threadripper CPU (€2.400–2.500), gepaart mit 128GB DDR5 RAM und custom Liquid-Kühlung.** Hier ist die vollständige Teile-Liste und Kostenaufschlüsselung:',
          rows: [
            { 'Komponente': 'GPU', 'Modell': '2× RTX 4090 24GB (gebraucht)', 'Preis (April 2026)': '€1.900–2.200', 'Notizen': 'NVLink-Brücken optional. Beide Karten vor dem Pairing testen.' },
            { 'Komponente': 'CPU', 'Modell': 'Threadripper 7970X (32-Kern)', 'Preis (April 2026)': '€2.400–2.500', 'Notizen': 'Ermöglicht 32 parallele Kerne für Fine-Tuning während Inferenz auf beiden GPUs läuft.' },
            { 'Komponente': 'Motherboard', 'Modell': 'TRX850 oder Xeon W90', 'Preis (April 2026)': '€400–800', 'Notizen': 'Dual-GPU-Unterstützung, PCIe 5.0, Enterprise-Grade Power Delivery.' },
            { 'Komponente': 'RAM', 'Modell': '128GB DDR5 6000 MHz', 'Preis (April 2026)': '€600–800', 'Notizen': 'Corsair Dominator Platinum. Ermöglicht 8+ gleichzeitige Nutzer.' },
            { 'Komponente': 'Speicher', 'Modell': '4TB NVMe + 12TB HDD', 'Preis (April 2026)': '€800–1.200', 'Notizen': 'NVMe für Hot-Models, HDD für Backup & Datensätze.' },
            { 'Komponente': 'Netzteil', 'Modell': '2000W 80+ Platinum oder 2× 1200W', 'Preis (April 2026)': '€1.000–1.500', 'Notizen': 'Dual 4090s = 900W kontinuierlich, benötigen 2000W+ Headroom.' },
            { 'Komponente': 'Kühlung', 'Modell': 'Custom Loop oder 2× 360mm AIO', 'Preis (April 2026)': '€1.500–2.500', 'Notizen': 'CPU + 2 GPUs = 1.200W Wärme. Luftkühlung unzureichend.' },
            { 'Komponente': 'Gehäuse', 'Modell': 'Lian Li O11 Dynamic oder Corsair Crystal', 'Preis (April 2026)': '€200–300', 'Notizen': 'Unterstützt Dual-GPU + großer AIO oder Loop.' },
            { 'Komponente': 'Gesamt', 'Modell': '--', 'Preis (April 2026)': '€4.000–6.000', 'Notizen': 'Skaliert mit GPU-Marktpreisen & Kühlungsoptionen.' },
          ],
          columns: ['Komponente', 'Modell', 'Preis (April 2026)', 'Notizen'],
          image: '/images/local-llm-workstation-build-components-layout-de.svg',
          imageCaption: 'Workstation-Komponenten: Dual RTX 4090 GPUs (48GB gesamte VRAM), Threadripper 7970X CPU (32 Kerne), 128GB DDR5 RAM, 2000W Netzteil und Flüssigkeitskühlung für 1.200W Wärmeleistung.',
        },
        'dual-gpu': {
          id: 'dual-gpu',
          title: 'Wie konfigurieren Sie Dual GPUs für maximale Leistung?',
          content: '**Zwei RTX 4090s geben Ihnen 48GB VRAM und ~2× Durchsatz für Inferenz.** Sie haben drei Konfigurationsoptionen: nebeneinander unabhängige Operation, NVLink-Fusion für unified VRAM, oder Tensor Parallelism für Single-Model-Beschleunigung.',
          numberedItems: [
            '**Nebeneinander (kein NVLink):** Jede GPU läuft unabhängig. Modell A auf GPU 0, Modell B auf GPU 1. Best für heterogene Workloads (Fine-Tuning 7B + serving 70B).',
            '**NVLink-Brücke:** VRAM fusionieren (48GB erscheint als single 48GB Pool). Ermöglicht größere Batch-Größen oder massive Context-Fenster. Kosten: €200–300 für Brücke + Setup-Komplexität.',
            '**Dual-GPU-Inferenz:** Einen single 70B-Modell über 2 GPUs shardn für 2× Durchsatz (28 tok/s statt 14). Benötigt vLLM oder llama.cpp Tensor-Parallel-Support.',
          ],
          callouts: [
            { type: '💡 Pro Tip', text: 'NVLink für heterogene Workloads skippen. Unabhängige Operation ist einfacher, kostengünstiger (€200 gespart), und eliminiert Brücken-Firmware-Bugs.' },
            { type: '⚠️ Warning', text: 'NVLink-Brücke benötigt NVIDIA proprietären Treiber-Support. Open-Source ROCm oder AMD Äquivalente unterstützen keine Bridging über verschiedene GPUs.' },
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Dual GPUs laufen entweder unabhängige Modelle pro Karte (einfachste) oder pooled VRAM via NVLink (komplex aber ermöglicht größere Modelle).' },
            { type: 'plain-terms', text: 'Denken Sie daran wie zwei separate Computer (nebeneinander) vs. ein geteilter Super-Computer (NVLink). Nebeneinander ist einfacher aufzubauen; geteilt gibt mehr Power für riesige Modelle.' },
          ],
          image: '/images/local-llm-workstation-build-dual-gpu-config-de.svg',
          imageCaption: 'Drei Dual-GPU-Konfigurationsoptionen: Nebeneinander unabhängig (heterogene Workloads, kein NVLink), NVLink-Brücke (vereinigte 48GB VRAM, große Kontextfenster) und Tensor-Parallelität (einzelnes 70B-Modell über GPUs für 28 tok/s-Durchsatz).',
        },
        'rtx5090-vs-4090': {
          id: 'rtx5090-vs-4090',
          title: 'Dual RTX 5090 vs Dual RTX 4090: Leistung & Wert (April 2026)',
          content: '**Dual RTX 4090 gebraucht (€1.900–2.200) bleibt die Wert-Wahl für Q4 70B at 100 tok/s. Dual RTX 5090 neu (€4.000) gewinnt für höheres VRAM (64 GB) und Qualität (Q8-Format) aber kostet €1.400–1.800 mehr.** Single RTX 5090 (€2.000 neu) passt 70B Q4 at 40–50 tok/s ohne Komplexität.',
          rows: [
            { 'Konfiguration': 'Dual RTX 4090 (gebraucht)', 'VRAM': '48 GB', '70B Geschwindigkeit': '100 tok/s (Q4)', 'Kosten': '€1.900–2.200' },
            { 'Konfiguration': 'Single RTX 5090 (neu)', 'VRAM': '32 GB', '70B Geschwindigkeit': '40–50 tok/s (Q4)', 'Kosten': '€2.000' },
            { 'Konfiguration': 'Dual RTX 5090 (neu)', 'VRAM': '64 GB', '70B Geschwindigkeit': '120 tok/s (Q4)', 'Kosten': '€4.000' },
          ],
          columns: ['Konfiguration', 'VRAM', '70B Geschwindigkeit', 'Kosten'],
          callouts: [
            { type: '💡 Pro Tip', text: 'Für Q4 70B Inferenz bei maximaler Durchsatzleistung: Dual 4090 gebraucht (€1.900–2.200) liefert April 2026 bester Wert. Neue 5090s kosten 50%+ mehr.' },
            { type: '📌 Key Point', text: 'Dual 5090 gewinnt für Q8 70B (höhere Ausgabe-Qualität) oder Future-Proofing. Single 5090 eliminiert Dual-GPU-Komplexität für Solo-Nutzer.' },
          ],
        },
        'cooling': {
          id: 'cooling',
          title: 'Wie kühlen Sie 1.200 W Abwärmeleistung?',
          content: 'RTX 4090 (450W) + RTX 4090 (450W) + CPU (200W) = 1.100W kontinuierlich, Spitzen zu 1.300W.',
          items: [
            '**Custom Liquid Loop:** €1.500–2.500. CPU Water Block + GPU Water Blocks + 360mm Radiator. Hält GPUs <75°C, CPU <80°C.',
            '**Dual 360mm AIO:** €600–900. Ein AIO pro GPU + separate CPU-Kühler. Modularer, einfachere Wartung als Custom Loop.',
            '**Luftkühlung:** Nicht möglich. Thermal Throttling garantiert bei sustained 70B Inferenz.',
          ],
          callouts: [
            { type: '🛠️ Best Practice', text: 'Thermal Paste mit 5+ W/mK Leitfähigkeit nutzen (Noctua NT-H2, Corsair TM30). Billige Paste kann 10–15°C zu Temps hinzufügen und GPU-Garantie voidieren.' },
          ],
          image: '/images/local-llm-workstation-build-cooling-setup-de.svg',
          imageCaption: 'Wärmeleistung: 1.200W insgesamt von Dual RTX 4090s (450W jeweils) und Threadripper CPU (200W). Kühlungslösungen: Benutzerdefinierte Flüssigkeitsschleife (€1.350–2.200), Dual 360mm AIO (€540–810) oder Luftkühlung (nicht empfohlen, verursacht thermische Drosselung).',
        },
        'power': {
          id: 'power',
          title: 'Wie wählen Sie das richtige Netzteil und Stromversorgungssetup?',
          content: '**Dual 4090s (900W kontinuierlich, Spitzen zu 1.300W) benötigen ein 2000W Netzteil minimum — alles weniger verursacht Spannungssag und Crashes unter Last.** Sie können ein single 2000W Netzteil oder dual 1200W Netzteile für Redundanz wählen, aber müssen überprüfen, dass Ihr Heim-/Büro-Stromkreis 2000W bei Spitzenlast handhaben kann.',
          items: [
            '**Option 1: Single 2000W Netzteil:** Seasonic, Corsair, oder EVGA 80+ Platinum. Sauberes Kabel-Routing, single Point-of-Failure.',
            '**Option 2: Dual 1200W Netzteil:** Ein Netzteil pro GPU + shared Motherboard. Redundanz (ein Ausfallfall, Inferenz läuft weiter bei 50% Geschwindigkeit). Komplexes Setup.',
            '**Kapazitäts-Regel:** 2000W für Dual 4090 ist Minimum. Alles weniger verursacht Spannungssag unter Last.',
            '**Stromkreis-Planung:** Ein Dual-GPU Rig zieht 2000W bei Spitzenlast. Sicherstellen 20A Stromkreis (typisches Heim-/Büro-Outlet ist 15A, unzureichend). Nutzen Sie dedizierte 240V Linie falls möglich.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'Heim-Outlets sind typisch 15A at 120V (1.800W max). Ein Dual-4090 Rig wird den Breaker auslösen. Installieren Sie einen dedizierten 240V 20A Stromkreis (€200–400 Elektriker-Gebühr).' },
            { type: '📌 Key Point', text: 'Immer modulare Netzteile nutzen. Dual-GPUs haben Dutzende Power-Pins; non-modulare Kabel schaffen Feuer-Gefahren durch Kontakt-Widerstand auf Multi-Pin-Steckern.' },
          ],
          image: '/images/local-llm-workstation-build-power-electrical-de.svg',
          imageCaption: 'Stromversorgungsanforderungen: ~1.100W konstant (450W + 450W GPUs, 200W CPU) mit Spitzen bis 1.300W. Netzteiloptionen: einzelnes 2000W (einfacher, saubere Kabel) oder Dual 1200W (redundant, komplexes Setup). Beide erfordern dedizierten 20A 240V Stromkreis.',
        },
        'perf': {
          id: 'perf',
          title: 'Welche Multi-User-Inferenz-Leistung erwarten Sie?',
          content: '**Mit 128GB RAM und Dual 4090s können Sie 2–3 gleichzeitige 70B-Nutzer at 14 tok/s each serving, oder 8+ gleichzeitige 7B-Nutzer at 30+ tok/s each.** Die folgenden Benchmarks nehmen Q4-Quantisierung und vLLM für Multi-User-Scheduling an:',
          items: [
            '**Single User, 70B Modell:** 28 Tokens/Sek (2× 14 tok/s pro GPU via Tensor Parallelism).',
            '**Zwei gleichzeitige Nutzer, 70B each:** 14 Tokens/Sek pro Nutzer (Zeit-Multiplexing Anfragen).',
            '**Vier gleichzeitige Nutzer, 7B each:** 120 Tokens/Sek Gesamt (jeder Nutzer bekommt 30 tok/s).',
            '**Fine-Tuning 7B LoRA + serving 70B:** Fine-Tuning auf GPU 0 (100W), Inferenz auf GPU 1 (450W). Keine Interferenz.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Welche häufigen Fehler beim Workstation-Build sollten Sie vermeiden?',
          items: [
            'Zwei verschiedene GPU-Modelle kaufen (5090 + 4090). Asymmetrie verursacht Load-Balancing Probleme. Halten Sie sich an identical Karten.',
            'Beim Netzteil sparen um €300 zu sparen. Ein 1500W Netzteil + Dual 4090s wird drosseln oder crashen unter Last.',
            'Luftkühlung statt Liquid nutzen. Thermal Throttling cut Durchsatz 30–50% auf sustained Inferenz.',
            '**Stromkosten in TCO-Berechnungen vergessen.** Dual RTX 4090s bei sustained Inferenz ziehen 900 W. Bei deutschem Durchschnitt (~€0,32/kWh) laufend 24/7: ~€2.500/Jahr Elektrizität. Über 3 Jahre: €7.500–7.500 allein in Stromkosten. Faktor dies in ROI vs Cloud API Entscheidungen.',
            '**Networking für Multi-User-Setups unterschätzen.** Standard-Gigabit Ethernet (1 Gbps = 125 MB/s) ist der Engpass beim Serving 5+ gleichzeitiger Nutzer mit langen Context-Antworten. Upgrade zu 2,5 Gbps oder 10 Gbps Ethernet für Produktions-Workstationen serving Teams. Kosten: €200–400 für NIC + Switch.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'Nicht matching GPUs (verschiedene Modelle oder VRAM Größen) brechen Tensor Parallelism. vLLM wird fallback zu Single-GPU Inferenz, halving Durchsatz.' },
            { type: '💡 Pro Tip', text: 'Gebrauchte RTX 4090 Paare kaufen (verifiziert working zusammen by previous Owner) statt neue single Karten. €500–800 sparen und Hardware-Lotterie vermeiden.' },
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Ist eine Threadripper CPU notwendig, oder kann ich Ryzen 9 nutzen?', a: 'Für nur Inferenz: Ryzen 9 funktioniert gut. Für Inferenz + parallel Fine-Tuning: Threadrippers extra Kerne (32 vs. 16) sind essentiell.' },
            { q: 'Sollte ich NVLink nutzen um die beiden 4090s zu fusionieren?', a: 'Optional. Skippe es wenn unterschiedliche Modelle auf jeder GPU laufen (7B + 70B). Nutze es wenn sharding eines single 70B über beide GPUs für höhere Batch-Größen.' },
            { q: 'Wie viele gleichzeitige Nutzer kann ein Dual-4090 Rig handhaben?', a: 'Für 70B: 2–3 Nutzer (jeder bekommt 14 tok/s). Für 7B: 8+ Nutzer (jeder bekommt 30+ tok/s).' },
            { q: 'Kann ich zu RTX 5090 statt Dual 4090 upgraden?', a: 'Single 5090: Ähnliche Leistung zu Dual 4090, halbes VRAM (24GB vs. 48GB), €2.000. Dual 5090: €4.000 (Overkill, schlechterer Wert).' },
            { q: 'Was ist das ROI auf einer €4.000 Workstation vs Cloud LLM API?', a: 'Cloud: €0,0008 pro 1K Tokens. Workstation: €4.000 amortisiert über 2 Jahre = €2.000/Jahr, ~€0,000001 pro Token. Break-even bei 2,5 Mrd Tokens/Jahr (light Nutzung).' },
            { q: 'Benötigt eine Workstation Datencenter-Kühlung?', a: 'Nein. Consumer-Grade Liquid-Kühlung (2× 360mm AIO oder Custom Loop) ist ausreichend. Datencenter-Kühlung (in-Row, Overhead) ist für Dichte designed; ein single Workstations 1.200W passt within Office HVAC.' },
            { q: 'Sollte ich auf RTX 6090 warten statt jetzt Dual 4090s zu kaufen?', a: 'NVIDIAs RTX 60er wird erwartet Ende 2026 bis 2027 basierend auf historischen 2-Jahr Refresh-Zyklen. Wenn Sie jetzt eine Workstation brauchen: Dual RTX 4090 gebraucht (€1.900–2.200) liefert besten 70B Inferenz-Wert im April 2026. Wenn Sie 12–18 Monate warten können: RTX 6090 wird wahrscheinlich 48 GB VRAM Single-Card haben, eliminierend Bedarf für Dual-GPUs ganz.' },
            { q: 'Was ist das Noise-Level eines Dual-4090 Workstations?', a: 'Under sustained 70B Inferenz: 50–60 dB at 1 Meter mit Custom Liquid-Kühlung. Vergleichbar zu normales Büro-Gespräch. Mit Dual 360mm AIO: 55–65 dB (audibly laut unter Last). Luftkühlung: 65–75 dB (laut, unpraktisch für Büronutzung). Für Desk-Side Placement: Custom Loop oder quiet AIO ist essentiell. Für Server-Room Placement: Noise ist irrelevant.' },
            { q: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?', a: 'Ja. Lokale Inference erfüllt DSGVO Artikel 28 (Datenverarbeitung) automatisch da alle Daten on-Premises bleiben. Konfigurieren Sie Zugriffskontrolle (LDAP, Firewall) um BSI-Grundschutz-Kataloge Anforderungen zu erfüllen. Für Unternehmens-Deployments: Dokumentieren Sie Daten-Flow und Lösch-Policies im DPA (Data Processing Agreement) mit Ihrem Arbeitgeber.' },
            { q: 'Ist eine Workstation für den deutschen Mittelstand geeignet?', a: 'Ja. SMBs (50–500 Mitarbeiter) benötigen oft interne LLM APIs für Dokumenten-Analyse, Kundensupport-Automation oder Content-Generierung während DSGVO-compliant bleibt. €4K–6K Workstation mit Dual 4090s bedient 5–8 Mitarbeiter @ 14 tok/s. ROI: €1K Cloud-API-Kosten/Monat break-even nach 4 Monaten. Für größere Mittelstand (200+ Nutzer): Mehrere Workstations parallel nutzen.' },
          ],
          callouts: [
            { type: '🔍 Did You Know?', text: 'Dual RTX 4090s unter vollem Inferenz-Load verbrauchen 900W kontinuierlich. Ihre Stromrechnung: ~€2.500/Jahr bei deutschem Durchschnitt (€0,32/kWh), 24/7 Betrieb.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            '[AMD Ryzen AI Max+ Mini-PCs (2026)](/de/local-llms/best-amd-mini-pc-local-llm-2026) — Unified Memory 64–128GB, 50 TOPS NPU für €1.200–2.600.',
            '[Bester lokaler LLM PC Build unter €2.000](/de/local-llms/local-llm-pc-build-2000) — Mid-Range Single-GPU Setup für kleine Teams.',
            '[Bester lokaler LLM PC Build unter €1.000](/de/local-llms/local-llm-pc-build-1000) — Budget-Friendly 7B-13B Inferenz.',
            '[RTX 5090 vs RTX 4090](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm) — Single-GPU Vergleich für Workstation-Upgrades.',
            '[Fine-Tuning lokaler LLMs mit LoRA](/de/local-llms/fine-tuning-local-llms-lora) — Techniken für Parallel Fine-Tuning auf Dual-GPUs.',
            '[Wie viel VRAM für lokale LLMs?](/de/local-llms/how-much-vram-local-llm) — VRAM Skalierung von 8GB bis 128GB.',
            '[Liquid-Kühlung für GPU Workstations](/de/local-llms/gpu-cooling-strategies) — Custom Loop vs AIO Best Practices.',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[PCPartPicker](https://pcpartpicker.com) — Live Component Pricing für Threadripper, RTX 4090/5090, DDR5 RAM als April 2026.',
            '[TechPowerUp CPU Datenbank](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&family=Threadripper) — Offizielle Threadripper 7970X Stromverbrauch und Core-Count Spezifikationen.',
            '[NVIDIA NVLink Dokumentation](https://www.nvidia.com/en-us/data-center/nvlink/) — Offizielle NVLink Specs für Memory Pooling und Tensor Parallelism über Dual RTX Karten.',
            '[vLLM Distributed Serving](https://docs.vllm.ai/en/latest/serving/distributed_serving.html) — Multi-GPU Tensor Parallelism Konfiguration für 70B Modelle auf Consumer Hardware.',
          ],
        },
      },
      gammaEmbedUrl: '/presentations/local-llm-workstation-build-static.html',
      gammaDescription: 'Das Foliendeck unten deckt ab: Workstation-Architektur (Dual RTX 4090, Threadripper, 128 GB RAM), GPU-Konfigurationsoptionen (nebeneinander, NVLink, Tensor Parallelism), Kühlungslösungen (Flüssigkeit vs. AIO), Stromversorgungsanforderungen (2000 W PSU, 20 A Stromkreis) und Multi-User-Performance-Benchmarks (2–3 gleichzeitige 70B-Benutzer bei 14 Token/s). Laden Sie das PDF als Workstation-Build-Referenzkarte herunter.',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lokale LLM-Workstation Build 2026: Dual RTX 4090, Threadripper, €4.000–6.000',
        'description': '€4.000–6.000 Workstation: 2× RTX 4090 (48 GB VRAM), Threadripper 7970X, 128 GB DDR5. Bedient 2–3 gleichzeitige 70B-Benutzer bei 14 Token/s. Kompletter Kühl-, Netzteil- und Stromversorgungsleitfaden.',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-workstation-build',
        'inLanguage': 'de',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-25',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper',
          'url': 'https://www.promptquorum.com/about',
          'sameAs': 'https://www.promptquorum.com/about'
        },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Lokale LLM Workstation' },
          { '@type': 'Thing', 'name': 'Dual RTX 4090 Build' },
          { '@type': 'Thing', 'name': 'Threadripper 7970X LLM' },
          { '@type': 'Thing', 'name': '70B Inferenz Workstation' },
          { '@type': 'Thing', 'name': 'Multi-GPU lokaler AI Build' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'proficiencyLevel': 'Advanced',
        'educationalLevel': 'Advanced',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Lokale LLM Workstation Build Komponenten 2026',
        'numberOfItems': 8,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'GPU: 2× RTX 4090 24 GB (gebrauchtes Paar)',
            'description': '€1.900–2.200. 48 GB VRAM kombiniert. Tensor Parallelism für 70B at 100 tok/s.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'CPU: AMD Threadripper 7970X (32-Kern)',
            'description': '€2.400–2.500. Ermöglicht parallele Quantisierung und Fine-Tuning während Serving läuft.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Motherboard: TRX50 Chipset (sTR5)',
            'description': '€400–800. Dual-GPU Support, PCIe 5.0, 7-Channel DDR5.'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'RAM: 128 GB DDR5 6000 MHz',
            'description': '€600–800. Corsair Dominator Platinum oder Äquivalent. Unterstützt 8+ gleichzeitige Nutzer.'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Speicher: 4 TB NVMe Gen4 + 12 TB HDD',
            'description': '€800–1.200. NVMe für Hot-Models, HDD für Backup und Trainings-Datensätze.'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Netzteil: 2.000 W 80+ Platinum',
            'description': '€800–1.200. Dual 4090s ziehen 900 W kontinuierlich. Headroom für 1.300 W Spitzen essentiell.'
          },
          {
            '@type': 'ListItem',
            'position': 7,
            'name': 'Kühlung: Custom Loop oder 2× 360mm AIO',
            'description': '€1.000–2.500. CPU + 2 GPUs = 1.200 W Wärme. Luftkühlung verursacht Thermal Throttling.'
          },
          {
            '@type': 'ListItem',
            'position': 8,
            'name': 'Gehäuse: Lian Li O11 Dynamic XL',
            'description': '€200–300. Dual-GPU Clearance, großer Radiator Support, Kabelmanagement.'
          },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-workstation-build',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Ist eine Threadripper CPU notwendig, oder kann ich Ryzen 9 nutzen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Für nur Inferenz: Ryzen 9 funktioniert gut. Für Inferenz + parallel Fine-Tuning: Threadrippers extra Kerne (32 vs. 16) sind essentiell.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich NVLink nutzen um die beiden 4090s zu fusionieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Optional. Skippe es wenn unterschiedliche Modelle auf jeder GPU laufen (7B + 70B). Nutze es wenn sharding eines single 70B über beide GPUs für höhere Batch-Größen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie viele gleichzeitige Nutzer kann ein Dual-4090 Rig handhaben?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Für 70B: 2–3 Nutzer (jeder bekommt 14 tok/s). Für 7B: 8+ Nutzer (jeder bekommt 30+ tok/s).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich zu RTX 5090 statt Dual 4090 upgraden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Single 5090: Ähnliche Leistung zu Dual 4090, halbes VRAM (24 GB vs. 48 GB), €2.000. Dual 5090: €4.000 (Overkill, schlechterer Wert).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Was ist das ROI auf einer €4.000 Workstation vs Cloud LLM API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cloud: €0,0008 pro 1K Tokens. Workstation: €4.000 amortisiert über 2 Jahre = €2.000/Jahr, ~€0,000001 pro Token. Break-even bei 2,5 Mrd Tokens/Jahr (light Nutzung).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Benötigt eine Workstation Datencenter-Kühlung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nein. Consumer-Grade Liquid-Kühlung (2× 360 mm AIO oder Custom Loop) ist ausreichend. Datencenter-Kühlung ist für Dichte designed; ein single Workstations 1.200 W passt within Office HVAC.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich auf RTX 6090 warten statt jetzt Dual 4090s zu kaufen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NVIDIAs RTX 60er wird erwartet Ende 2026 bis 2027 basierend auf historischen 2-Jahr Refresh-Zyklen. Wenn Sie jetzt eine Workstation brauchen: Dual RTX 4090 gebraucht (€1.900–2.200) liefert besten 70B Inferenz-Wert im April 2026. Wenn Sie 12–18 Monate warten können: RTX 6090 wird wahrscheinlich 48 GB VRAM Single-Card haben, eliminierend Bedarf für Dual-GPUs ganz.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Was ist das Noise-Level eines Dual-4090 Workstations?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Under sustained 70B Inferenz: 50–60 dB at 1 Meter mit Custom Liquid-Kühlung. Vergleichbar zu normales Büro-Gespräch. Mit Dual 360 mm AIO: 55–65 dB (audibly laut unter Last). Luftkühlung: 65–75 dB (laut, unpraktisch für Büronutzung). Für Desk-Side Placement: Custom Loop oder quiet AIO ist essentiell. Für Server-Room Placement: Noise ist irrelevant.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Lokale Inference erfüllt DSGVO Artikel 28 automatisch da alle Daten on-Premises bleiben. Konfigurieren Sie Zugriffskontrolle (LDAP, Firewall) um BSI-Grundschutz-Kataloge Anforderungen zu erfüllen. Für Unternehmens-Deployments: Dokumentieren Sie Daten-Flow und Lösch-Policies im DPA mit Ihrem Arbeitgeber.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist eine Workstation für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. SMBs (50–500 Mitarbeiter) benötigen oft interne LLM APIs für Dokumenten-Analyse, Kundensupport-Automation oder Content-Generierung während DSGVO-compliant bleibt. €4K–6K Workstation mit Dual 4090s bedient 5–8 Mitarbeiter @ 14 tok/s. ROI: €1K Cloud-API-Kosten/Monat break-even nach 4 Monaten. Für größere Mittelstand (200+ Nutzer): Mehrere Workstations parallel nutzen.'
            }
          },
        ],
      },
    },
    fr: {
      freshness_tier: 'annual',
      theme: 'Hardware Setups',
      title: 'Construire un PC LLM local : meilleure workstation (GPU, VRAM, modèles 7B–70B)',
      seoTitle: 'Station de Travail LLM Local 2026 : Dual RTX 4090, 4–6K €, 70B Prêt',
      intro: '**Une station de travail professionnelle pour l\'inférence LLM locale en qualité production coûte 4 000–6 000 € et dispose de deux GPU RTX 4090 (48 GB VRAM combinée), CPU Threadripper 7970X (32 cœurs), 128 GB DDR5, refroidissement personnalisé et bloc d\'alimentation 2 000 W.** À partir d\'avril 2026, ce système peut servir 2–3 utilisateurs 70B simultanés à 14 tok/s, exécuter l\'ajustement Llama 3.3 70B en parallèle avec l\'inférence et fournir un déploiement sur site sans frais d\'API cloud.',
      metaDescription: 'Créez une workstation LLM locale avec le bon GPU, VRAM et RAM. Configurations précises pour exécuter des modèles 7B à 70B avec Ollama et LM Studio.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-25',
      leadAnswerBlock: '**Station de travail 4 000–6 000 € : 2× RTX 4090 (48 GB VRAM), Threadripper 7970X (32 cœurs), 128 GB DDR5, refroidissement personnalisé, bloc 2 000 W.** À partir d\'avril 2026 : 2–3 utilisateurs 70B simultanés à 14 tok/s, ajustement Llama 3.3 en parallèle.',
      audience: 'Ingénieurs déployant des LLM locaux en production ou en environnement d\'entreprise',
      readTime: '10 min de lecture',
      educationalLevel: 'Advanced',
      primaryTerm: 'AI Workstation',
      toc: [
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Qui a besoin d\'une station de €4K–6K ?', anchor: '#who-needs' },
        { label: 'Quelle est la liste complète des composants ?', anchor: '#parts-list' },
        { label: 'Comment configurer les GPU duaux pour des performances maximales ?', anchor: '#dual-gpu' },
        { label: 'RTX 5090 Dual vs RTX 4090 Dual : Comparaison de valeur', anchor: '#rtx5090-vs-4090' },
        { label: 'Comment refroidir 1 200 W de dissipation thermique ?', anchor: '#cooling' },
        { label: 'Quel bloc d\'alimentation et configuration électrique choisir ?', anchor: '#power' },
        { label: 'Quelles performances d\'inférence multi-utilisateurs attendre ?', anchor: '#perf' },
        { label: 'Quels sont les erreurs courantes à éviter ?', anchor: '#mistakes' },
        { label: 'Questions Fréquemment Posées', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU : Threadripper 7970X (32 cœurs, 2 400–2 500 €) ou Intel Xeon W9-3495X (5 000 € +). Permet le fine-tuning parallèle tout en servant l\'inférence.',
            'GPU : 2× RTX 4090 24 GB (paire d\'occasion ~1 900–2 100 €). 48 GB VRAM au total pour 70B multi-utilisateurs ou single 70B + tâches préparatoires.',
            'RAM : 128 GB DDR5 (600–800 €). Supporte 8+ utilisateurs simultanés sur 70B ou single-user 70B + quantification en parallèle.',
            'Stockage : 4–8 TB NVMe SSD + 12–24 TB HDD (800–1 200 €). Bibliothèque multi-modèle + sauvegardes + ensembles de données.',
            'Bloc d\'alimentation : 2× 1 200 W ou 1× 2 000 W (800–1 200 €). Dual 4090s consomment 900 W continu ; headroom pour pics essentiel.',
            'Refroidissement : Boucle personnalisée ou AIO double 360 mm (1 000–2 000 €). GPU unique + CPU = 1 200 W de chaleur.',
            'Réseau : Ethernet 10 Gbps optionnel (200–400 €). Accès LAN multi-utilisateurs sans goulot d\'étranglement.',
            'Total : 4 000–6 000 €. Supporte 8+ utilisateurs 70B simultanés ou 1 utilisateur fine-tuning + serving en parallèle.',
          ],
        },
        'who-needs': {
          id: 'who-needs',
          title: 'Qui a besoin d\'une station de €4K–6K ?',
          content: 'Ce niveau est destiné à :',
          items: [
            '**PME/Entreprises :** Exécuter une API LLM interne pour 5+ employés simultanément. Contrôle des données on-prem requis.',
            '**Chercheurs IA :** Fine-tuning de grands modèles (70B LoRA) tout en servant l\'inférence à l\'équipe. Un seul rig à 2K € ne peut pas paralléliser.',
            '**Ingénieurs MLOps :** Construire des clusters d\'inférence internes. Commencer avec une station comme nœud serveur.',
            '**Studios de contenu (sérieux) :** Exécuter 24/7 génération de sous-titres vidéo, génération de code, résumé sans frais d\'API.',
          ],
        },
        'parts-list': {
          id: 'parts-list',
          title: 'Quelle est la liste complète des composants ?',
          content: '**Une station de travail professionnelle commence par des RTX 4090 duaux (1 900–2 100 € pour paire d\'occasion) et un CPU Threadripper (2 400–2 500 €), associé à 128 GB DDR5 et refroidissement liquide personnalisé.** Voici la liste complète et ventilation des coûts :',
          rows: [
            { 'Composant': 'GPU', 'Modèle': '2× RTX 4090 24 GB (d\'occasion)', 'Prix (Avril 2026)': '1 900–2 100 €', 'Notes': 'Ponts NVLink optionnels. Testez les deux cartes avant appairage.' },
            { 'Composant': 'CPU', 'Modèle': 'Threadripper 7970X (32 cœurs)', 'Prix (Avril 2026)': '2 400–2 500 €', 'Notes': '32 cœurs parallèles pour fine-tuning tout en servant l\'inférence sur les deux GPU.' },
            { 'Composant': 'Carte mère', 'Modèle': 'TRX850 ou Xeon W90', 'Prix (Avril 2026)': '400–800 €', 'Notes': 'Support GPU dual, PCIe 5.0, alimentation grade entreprise.' },
            { 'Composant': 'RAM', 'Modèle': '128 GB DDR5 6000 MHz', 'Prix (Avril 2026)': '600–800 €', 'Notes': 'Corsair Dominator Platinum. Supporte 8+ utilisateurs simultanés.' },
            { 'Composant': 'Stockage', 'Modèle': '4 TB NVMe + 12 TB HDD', 'Prix (Avril 2026)': '800–1 200 €', 'Notes': 'NVMe pour modèles chauds, HDD pour sauvegarde & ensembles.' },
            { 'Composant': 'Bloc d\'alimentation', 'Modèle': '2 000 W 80+ Platinum ou 2× 1 200 W', 'Prix (Avril 2026)': '1 000–1 500 €', 'Notes': 'Dual 4090s = 900 W continu, besoin 2 000 W+ headroom.' },
            { 'Composant': 'Refroidissement', 'Modèle': 'Boucle personnalisée ou 2× 360 mm AIO', 'Prix (Avril 2026)': '1 500–2 500 €', 'Notes': 'CPU + 2 GPU = 1 200 W chaleur. Refroidissement par air insuffisant.' },
            { 'Composant': 'Boîtier', 'Modèle': 'Lian Li O11 Dynamic ou Corsair Crystal', 'Prix (Avril 2026)': '200–300 €', 'Notes': 'Support GPU dual + grand AIO ou boucle.' },
            { 'Composant': 'Total', 'Modèle': '--', 'Prix (Avril 2026)': '4 000–6 000 €', 'Notes': 'Varie avec prix GPU & choix refroidissement.' },
          ],
          columns: ['Composant', 'Modèle', 'Prix (Avril 2026)', 'Notes'],
          image: '/images/local-llm-workstation-build-components-layout-fr.svg',
          imageCaption: 'Composants de la station de travail: GPU Threadripper 7970X dual RTX 4090 (48GB VRAM total), CPU (32 cœurs), RAM DDR5 128GB, bloc d\'alimentation 2000W et refroidissement liquide pour dissipation 1 200W.',
        },
        'dual-gpu': {
          id: 'dual-gpu',
          title: 'Comment configurer les GPU duaux pour des performances maximales ?',
          content: '**Deux RTX 4090s vous donnent 48 GB VRAM et ~2× débit pour l\'inférence.** Vous avez trois options de configuration : opération indépendante côte à côte, fusion NVLink pour VRAM unifié, ou parallelism tenseur pour accélération single-modèle.',
          numberedItems: [
            '**Côte à côte (pas NVLink) :** Chaque GPU fonctionne indépendamment. Modèle A sur GPU 0, Modèle B sur GPU 1. Idéal pour charges hétérogènes (fine-tuning 7B + serving 70B).',
            '**Pont NVLink :** Fusionner VRAM (48 GB apparaît comme pool 48 GB unique). Permet plus grandes tailles de batch ou fenêtres contextes massives. Coût : 200–300 € pont + complexité setup.',
            '**Inférence GPU dual :** Shard un single modèle 70B sur 2 GPU pour 2× débit (28 tok/s au lieu de 14). Requiert vLLM ou support tensor-parallel llama.cpp.',
          ],
          callouts: [
            { type: '💡 Pro Tip', text: 'Ignorer NVLink pour charges hétérogènes. Opération indépendante plus simple, moins chère (200 € économisé), élimine bugs firmware pont.' },
            { type: '⚠️ Warning', text: 'Pont NVLink nécessite support driver propriétaire NVIDIA. ROCm open-source ou AMD équivalents ne supportent pas bridging GPU différents.' },
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Dual GPU fonctionnent soit modèles indépendants par carte (simplest) soit pool VRAM via NVLink (complexe mais modèles plus grands).' },
            { type: 'plain-terms', text: 'Pensez-y comme deux ordinateurs séparés (côte à côte) vs un super-ordinateur partagé (NVLink). Côte à côte plus facile à setup ; partagé donne plus power modèles énormes.' },
          ],
          image: '/images/local-llm-workstation-build-dual-gpu-config-fr.svg',
          imageCaption: 'Trois options de configuration dual-GPU: côte à côte indépendant (charges mixtes, pas NVLink), pont NVLink (VRAM unifié 48GB, grandes fenêtres de contexte) et parallélisation tensorielle (modèle 70B unique fragmenté sur GPUs pour débit 28 jetons/s).',
        },
        'rtx5090-vs-4090': {
          id: 'rtx5090-vs-4090',
          title: 'RTX 5090 Dual vs RTX 4090 Dual : Comparaison Valeur (Avril 2026)',
          content: '**Dual RTX 4090 d\'occasion (1 900–2 100 €) reste choix valeur pour Q4 70B à 100 tok/s. Dual RTX 5090 neuf (4 000 €) gagne sur VRAM plus haut (64 GB) et qualité (format Q8) mais coûte 1 400–1 800 € plus.** Single RTX 5090 (2 000 € neuf) adapte 70B Q4 à 40–50 tok/s sans complexité.',
          rows: [
            { 'Configuration': 'Dual RTX 4090 (d\'occasion)', 'VRAM': '48 GB', 'Vitesse 70B': '100 tok/s (Q4)', 'Coût': '1 900–2 100 €' },
            { 'Configuration': 'Single RTX 5090 (neuf)', 'VRAM': '32 GB', 'Vitesse 70B': '40–50 tok/s (Q4)', 'Coût': '2 000 €' },
            { 'Configuration': 'Dual RTX 5090 (neuf)', 'VRAM': '64 GB', 'Vitesse 70B': '120 tok/s (Q4)', 'Coût': '4 000 €' },
          ],
          columns: ['Configuration', 'VRAM', 'Vitesse 70B', 'Coût'],
          callouts: [
            { type: '💡 Pro Tip', text: 'Pour Q4 70B inférence débit max : dual 4090 d\'occasion (1 900–2 100 €) meilleure valeur avril 2026. Nouveaux 5090 coûtent 50%+ plus.' },
            { type: '📌 Key Point', text: 'Dual 5090 gagne pour Q8 70B (sortie qualité plus haute) ou future-proofing. Single 5090 élimine complexité dual-GPU pour utilisateurs solo.' },
          ],
        },
        'cooling': {
          id: 'cooling',
          title: 'Comment refroidir 1 200 W de dissipation thermique ?',
          content: 'RTX 4090 (450 W) + RTX 4090 (450 W) + CPU (200 W) = 1 100 W continu, pics à 1 300 W.',
          items: [
            '**Boucle liquide personnalisée :** 1 500–2 500 €. Bloc eau CPU + blocs eau GPU + radiateur 360 mm. Garde GPU <75°C, CPU <80°C.',
            '**AIO double 360 mm :** 600–900 €. Un AIO par GPU + refroidisseur CPU séparé. Plus modulaire, maintenance plus facile que boucle personnalisée.',
            '**Refroidissement air :** Impossible. Throttling thermique garanti inférence 70B soutenue.',
          ],
          callouts: [
            { type: '🛠️ Best Practice', text: 'Utiliser pâte thermique avec conductivité 5+ W/mK (Noctua NT-H2, Corsair TM30). Pâte bon marché ajoute 10–15°C et annule garantie GPU.' },
          ],
          image: '/images/local-llm-workstation-build-cooling-setup-fr.svg',
          imageCaption: 'Dissipation thermique: 1 200W total des Dual RTX 4090s (450W chacun) et CPU Threadripper (200W). Solutions de refroidissement: boucle liquide personnalisée (€1 350–2 200), dual AIO 360mm (€540–810) ou refroidissement air (non recommandé, provoque limitation thermique).',
        },
        'power': {
          id: 'power',
          title: 'Quel bloc d\'alimentation et configuration électrique choisir ?',
          content: '**Dual 4090s (900 W continu, pics à 1 300 W) nécessitent bloc 2 000 W minimum — moins cause effondrement tension et crashs sous charge.** Vous pouvez choisir bloc 2 000 W unique ou dual 1 200 W pour redondance, mais vérifiez circuit maison/bureau supporte 2 000 W à pic.',
          items: [
            '**Option 1 : Bloc 2 000 W unique :** Seasonic, Corsair, ou EVGA 80+ Platinum. Routage câbles plus propre, point défaillance unique.',
            '**Option 2 : Dual bloc 1 200 W :** Un bloc par GPU + carte mère partagée. Redondance (un échoue, inférence continue 50% vitesse). Setup complexe.',
            '**Règle capacité :** 2 000 W pour dual 4090 minimum. Moins cause effondrement sous charge.',
            '**Planification circuit :** Rig dual-GPU consomme 2 000 W à pic. Assurer circuit 20A (prise maison/bureau typique 15A, insuffisant). Utiliser ligne dédiée 240V si disponible.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'Prises maison typiquement 15A à 120V (1 800 W max). Rig dual-4090 déclenchera disjoncteur. Installer circuit dédié 240V 20A (200–400 € électricien).' },
            { type: '📌 Key Point', text: 'Toujours utiliser blocs modulaires. Dual-GPU ont dizaines pins power ; câbles non-modulaires créent risques incendie contact-résistance multi-pin.' },
          ],
          image: '/images/local-llm-workstation-build-power-electrical-fr.svg',
          imageCaption: 'Exigences d\'alimentation: ~1 100W continu (450W + 450W GPUs, 200W CPU) avec pics à 1 300W. Options bloc d\'alimentation: unique 2000W (plus simple, câbles propres) ou dual 1200W (redondant, configuration complexe). Les deux nécessitent un circuit dédié 20A 240V.',
        },
        'perf': {
          id: 'perf',
          title: 'Quelles performances d\'inférence multi-utilisateurs attendre ?',
          content: '**Avec 128 GB RAM et dual 4090s, pouvez servir 2–3 utilisateurs 70B simultanés à 14 tok/s chacun, ou 8+ utilisateurs 7B simultanés à 30+ tok/s chacun.** Benchmarks supposent quantification Q4 et vLLM pour ordonnancement multi-utilisateurs :',
          items: [
            '**Utilisateur unique, modèle 70B :** 28 tokens/sec (2× 14 tok/s par GPU via tensor parallelism).',
            '**Deux utilisateurs simultanés, 70B each :** 14 tokens/sec par utilisateur (multiplexage temps requêtes).',
            '**Quatre utilisateurs simultanés, 7B each :** 120 tokens/sec total (chaque utilisateur 30 tok/s).',
            '**Fine-tuning 7B LoRA + serving 70B :** Fine-tuning GPU 0 (100 W), inférence GPU 1 (450 W). Aucune interférence.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Quels sont les erreurs courantes à éviter ?',
          items: [
            'Acheter deux modèles GPU différents (5090 + 4090). Asymétrie cause problèmes load balancing. Rester cartes identiques.',
            'Économiser bloc d\'alimentation pour sauver 300 €. Bloc 1 500 W + dual 4090s throttle ou crash sous charge.',
            'Utiliser refroidissement air au lieu liquide. Throttling thermique coupe débit 30–50% inférence soutenue.',
            '**Oublier coût électricité calculs TCO.** Dual RTX 4090s inférence soutenue consomment 900 W. Tarif français moyen (~0,18 €/kWh) 24/7 : ~€1 400/année électricité. Sur 3 ans : €4 200–4 200 électricité seule. Facteur dans ROI vs cloud API.',
            '**Sous-estimer réseau setups multi-utilisateurs.** Ethernet gigabit standard (1 Gbps = 125 MB/s) goulot 5+ utilisateurs simultanés réponses long contexte. Upgrade 2.5 Gbps ou 10 Gbps pour stations production servant équipes. Coût : 200–400 € NIC + switch.',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'GPU non matching (modèles différents ou tailles VRAM) brisent tensor parallelism. vLLM fallback single-GPU, halving débit.' },
            { type: '💡 Pro Tip', text: 'Acheter paires RTX 4090 d\'occasion (vérifiées ensemble previous owner) au lieu cartes single neuf. Économiser 500–800 € éviter loterie hardware.' },
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Questions Fréquemment Posées',
          faqs: [
            { q: 'Un CPU Threadripper est-il nécessaire, ou puis-je utiliser Ryzen 9 ?', a: 'Inférence seule : Ryzen 9 fonctionne bien. Inférence + fine-tuning parallèle : cœurs extra Threadripper (32 vs. 16) essentiels.' },
            { q: 'Dois-je utiliser NVLink pour fusionner les deux 4090s ?', a: 'Optionnel. Ignorer si modèles séparés chaque GPU (7B + 70B). Utiliser sharding single 70B dual GPU batch sizes plus hautes.' },
            { q: 'Combien utilisateurs simultanés rig dual-4090 supporter ?', a: 'Pour 70B : 2–3 utilisateurs (chacun 14 tok/s). Pour 7B : 8+ utilisateurs (chacun 30+ tok/s).' },
            { q: 'Puis-je upgrader RTX 5090 au lieu dual 4090 ?', a: 'Single 5090 : Performance similaire dual 4090, VRAM moitié (24 GB vs. 48 GB), 1 999 €. Dual 5090 : 4 000 € (overkill, valeur pire).' },
            { q: 'Quel est ROI station €4 000 vs cloud LLM API ?', a: 'Cloud : 0,0008 € pour 1K tokens. Station : 4 000 € amortis 2 ans = 2 000 €/an, ~0,000001 € par token. Seuil 2,5 mrd tokens/an (usage léger).' },
            { q: 'Une station nécessite-t-elle refroidissement datacenter ?', a: 'Non. Refroidissement liquide consumer-grade (2× 360 mm AIO ou boucle) suffisant. Refroidissement datacenter conçu densité ; station unique 1 200 W rentre HVAC bureau.' },
            { q: 'Dois-je attendre RTX 6090 au lieu acheter dual 4090 maintenant ?', a: 'RTX 60-série NVIDIA attendue fin 2026 à 2027 basé cycles refresh historiques 2-an. Besoin station maintenant : dual RTX 4090 d\'occasion (1 900–2 100 €) meilleure valeur 70B avril 2026. Attendre 12–18 mois : RTX 6090 probablement 48 GB VRAM single-card, éliminant besoin GPU dual.' },
            { q: 'Quel est le niveau sonore station dual-4090 ?', a: 'Inférence 70B soutenue : 50–60 dB 1 mètre refroidissement liquide custom. Comparable conversation bureau normal. AIO double 360 mm : 55–65 dB (audiblement plus fort sous charge). Refroidissement air : 65–75 dB (bruyant, impratique usage bureau). Placement side-bureau : boucle custom ou AIO quiet essentiel. Placement server-room : bruit irrelevant.' },
            { q: 'Dois-je considérer des changements de conformité pour CNIL en utilisant LLMs locaux ?', a: 'Oui. Inférence locale satisfait automatiquement CNIL recommandations sur données sensibles professionnelles (finances, médical, juridique). Aucun partage données tiers-parties requis. Configuration contrôle d\'accès (LDAP, Firewall) assure sécurité données. Pour déploiements entreprise : documenter flux données et politique suppression dans DPA (Data Processing Agreement) employeur.' },
          ],
          callouts: [
            { type: '🔍 Did You Know?', text: 'Dual RTX 4090s inférence pleine charge consomment 900 W continu. Facture électricité : ~€1 400/an tarif français moyen (0,18 €/kWh), opération 24/7.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lecture Complémentaire',
          items: [
            '[Mini-PC AMD Ryzen AI Max+ (2026)](/fr/local-llms/best-amd-mini-pc-local-llm-2026) — Mémoire unifiée 64–128 Go, 50 TOPS NPU pour €1.200–2.600.',
            '[Meilleur Local LLM PC Build Sous €2 000](/fr/local-llms/local-llm-pc-build-2000) — Setup single-GPU gamme-moyenne petites équipes.',
            '[Meilleur Local LLM PC Build Sous €1 000](/fr/local-llms/local-llm-pc-build-1000) — Inférence 7B–13B budget.',
            '[RTX 5090 vs RTX 4090](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm) — Comparaison single-GPU upgrades station.',
            '[Fine-Tuning LLMs Locaux avec LoRA](/fr/local-llms/fine-tuning-local-llms-lora) — Techniques fine-tuning parallèle GPU-dual.',
            '[Combien VRAM pour LLMs Locaux ?](/fr/local-llms/how-much-vram-local-llm) — Skalage VRAM 8 GB à 128 GB.',
            '[Refroidissement Liquide pour Stations GPU](/fr/local-llms/gpu-cooling-strategies) — Boucle custom vs AIO meilleures pratiques.',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            '[PCPartPicker](https://pcpartpicker.com) — Tarification composants en direct Threadripper, RTX 4090/5090, RAM DDR5 avril 2026.',
            '[Base Données CPU TechPowerUp](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&family=Threadripper) — Spécifications officielles Threadripper 7970X consommation puissance core count.',
            '[Documentation NVIDIA NVLink](https://www.nvidia.com/en-us/data-center/nvlink/) — Specs NVLink officielles memory pooling tensor parallelism GPU RTX dual.',
            '[vLLM Distributed Serving](https://docs.vllm.ai/en/latest/serving/distributed_serving.html) — Configuration Multi-GPU tensor parallelism modèles 70B hardware consumer.',
          ],
        },
      },
      gammaEmbedUrl: '/presentations/local-llm-workstation-build-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : architecture du poste de travail (Dual RTX 4090, Threadripper, 128 GB RAM), options de configuration GPU (côte à côte, NVLink, parallélisme tensoriel), solutions de refroidissement (liquide vs AIO), exigences d\'alimentation (PSU 2000W, circuit 20A) et benchmarks de performance multi-utilisateurs (2-3 utilisateurs 70B simultanés à 14 tok/s). Téléchargez le PDF comme carte de référence du build du poste de travail.',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Station de Travail LLM Local 2026 : Dual RTX 4090, Threadripper, 4–6K €',
        'description': 'Station de travail 4 000–6 000 € : 2× RTX 4090 (48 GB VRAM), Threadripper 7970X, 128 GB DDR5. Dessert 2–3 utilisateurs 70B simultanés 14 tok/s. Guides complets refroidissement, alimentation, électrique.',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-workstation-build',
        'inLanguage': 'fr',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-25',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper',
          'url': 'https://www.promptquorum.com/about',
          'sameAs': 'https://www.promptquorum.com/about'
        },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Station de travail LLM locale' },
          { '@type': 'Thing', 'name': 'Build Dual RTX 4090' },
          { '@type': 'Thing', 'name': 'Threadripper 7970X LLM' },
          { '@type': 'Thing', 'name': 'Station de travail inférence 70B' },
          { '@type': 'Thing', 'name': 'Build IA local multi-GPU' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'proficiencyLevel': 'Advanced',
        'educationalLevel': 'Advanced',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Composants Station de Travail LLM Local 2026',
        'numberOfItems': 8,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'GPU : 2× RTX 4090 24 GB (paire d\'occasion)',
            'description': '1 900–2 100 €. 48 GB VRAM combinée. Tensor parallelism 70B 100 tok/s.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'CPU : AMD Threadripper 7970X (32 cœurs)',
            'description': '2 400–2 500 €. Permet quantification parallèle fine-tuning pendant serving.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Carte mère : Chipset TRX50 (sTR5)',
            'description': '400–800 €. Support GPU dual, PCIe 5.0, DDR5 7-channel.'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'RAM : 128 GB DDR5 6000 MHz',
            'description': '600–800 €. Corsair Dominator Platinum ou équivalent. Supporte 8+ utilisateurs.'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Stockage : 4 TB NVMe Gen4 + 12 TB HDD',
            'description': '800–1 200 €. NVMe modèles chauds, HDD sauvegarde ensembles.'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Bloc d\'alimentation : 2 000 W 80+ Platinum',
            'description': '800–1 200 €. Dual 4090 consomment 900 W continu. Headroom pics essentiels.'
          },
          {
            '@type': 'ListItem',
            'position': 7,
            'name': 'Refroidissement : Boucle custom ou 2× 360 mm AIO',
            'description': '1 000–2 500 €. CPU + 2 GPU = 1 200 W chaleur. Refroidissement air throttling.'
          },
          {
            '@type': 'ListItem',
            'position': 8,
            'name': 'Boîtier : Lian Li O11 Dynamic XL',
            'description': '200–300 €. Dégagement GPU dual, grand support radiateur, gestion câbles.'
          },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-workstation-build',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Un CPU Threadripper est-il nécessaire, ou puis-je utiliser Ryzen 9 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Inférence seule : Ryzen 9 fonctionne bien. Inférence + fine-tuning parallèle : cœurs extra Threadripper (32 vs. 16) essentiels.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Dois-je utiliser NVLink pour fusionner les deux 4090s ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Optionnel. Ignorer si modèles séparés chaque GPU (7B + 70B). Utiliser sharding single 70B dual GPU batch sizes plus hautes.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Combien utilisateurs simultanés rig dual-4090 supporter ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pour 70B : 2–3 utilisateurs (chacun 14 tok/s). Pour 7B : 8+ utilisateurs (chacun 30+ tok/s).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je upgrader RTX 5090 au lieu dual 4090 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Single 5090 : Performance similaire dual 4090, VRAM moitié (24 GB vs. 48 GB), 1 999 €. Dual 5090 : 4 000 € (overkill, valeur pire).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel est ROI station €4 000 vs cloud LLM API ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cloud : 0,0008 € pour 1K tokens. Station : 4 000 € amortis 2 ans = 2 000 €/an, ~0,000001 € par token. Seuil 2,5 mrd tokens/an.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Une station nécessite-t-elle refroidissement datacenter ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Non. Refroidissement liquide consumer-grade (2× 360 mm AIO ou boucle) suffisant. Refroidissement datacenter pour densité ; station unique 1 200 W rentre HVAC.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Dois-je attendre RTX 6090 au lieu acheter dual 4090 maintenant ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 60-série attendue fin 2026 à 2027 cycles 2-an. Besoin maintenant : dual 4090 occasion (1 900–2 100 €) meilleure valeur 70B. Attendre 12–18 mois : RTX 6090 probablement 48 GB single-card.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel est le niveau sonore station dual-4090 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Inférence 70B soutenue : 50–60 dB 1 mètre refroidissement custom. Comparable conversation bureau. AIO double 360 mm : 55–65 dB. Refroidissement air : 65–75 dB. Placement side-bureau : boucle custom essentiel.'
            }
          },
        ],
      },
    },
    ja: {
      freshness_tier: 'annual',
      theme: 'Hardware Setups',
      title: 'ローカルLLM用PC構築：最適ワークステーション（GPU・VRAM・7B〜70B対応）',
      seoTitle: 'ローカルLLM ワークステーション2026：RTX 4090×2、$4–6K、70B対応',
      intro: '**本番運用向けローカルLLM推論ワークステーションの構築費用は$4,000–6,000で、RTX 4090×2（合計48GB VRAM）、Threadripper 7970X CPU（32コア）、128GB DDR5メモリ、カスタム冷却システム、2,000W電源を搭載します。** 2026年4月時点で、このレベルのマシンは70Bモデルを2–3名の同時利用者に対して14トークン/秒で提供でき、Llama 3.3 70Bのファインチューニングを推論と並行実行でき、クラウドAPI費用なしのオンプレミス環境を実現できます。',
      metaDescription: 'ローカルLLMを高速に動かすPC構成を解説。GPU・VRAM・RAMの最適な組み合わせで、7B〜70BモデルをOllamaやLM Studioで実行できます。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-25',
      leadAnswerBlock: '**$4,000–6,000ワークステーション：RTX 4090×2（48GB VRAM）、Threadripper 7970X（32コア）、128GB DDR5、カスタム冷却、2,000W電源。** 2026年4月：70B×2–3名同時14トークン/秒、Llama 3.3ファインチューニング並行、クラウドAPI不要。',
      audience: '本番環境またはエンタープライズ環境でローカルLLMをデプロイするエンジニア',
      readTime: '10分で読める',
      educationalLevel: 'Advanced',
      primaryTerm: 'AI Workstation',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: '誰が$4K–6Kワークステーションを必要とするか？', anchor: '#who-needs' },
        { label: 'ワークステーションのパーツリストは何か？', anchor: '#parts-list' },
        { label: 'デュアルGPUを最大パフォーマンスに設定するには？', anchor: '#dual-gpu' },
        { label: 'デュアルRTX 5090 vs デュアルRTX 4090：価値比較', anchor: '#rtx5090-vs-4090' },
        { label: '1,200Wの熱をどう冷やすか？', anchor: '#cooling' },
        { label: '適切な電源と電気配線セットアップとは？', anchor: '#power' },
        { label: 'マルチユーザー推論パフォーマンスはどの程度期待できるか？', anchor: '#perf' },
        { label: 'ワークステーション構築の一般的な誤りとは？', anchor: '#mistakes' },
        { label: 'よくある質問', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU：Threadripper 7970X（32コア、¥358,000–367,000）またはIntel Xeon W9-3495X（¥1,100,000以上）。推論提供中の並行ファインチューニングを実現。',
            'GPU：2× RTX 4090 24GB（中古ペア約¥330,000–385,000）。48GB VRAM総容量。マルチユーザー70Bまたは単一70B + 準備タスク。',
            'メモリ：128GB DDR5（¥132,000–176,000）。70B上の8+同時ユーザーまたは単一ユーザー70B + 並行量子化をサポート。',
            'ストレージ：4–8TB NVMe SSD + 12–24TB HDD（¥176,000–330,000）。マルチモデルライブラリ + バックアップ + トレーニングデータセット。',
            '電源：2× 1200Wまたは1× 2000W（¥176,000–264,000）。デュアル4090sは900W持続；スパイク用ヘッドルーム不可欠。',
            '冷却：カスタム液冷ループまたはデュアルAIO（¥220,000–440,000）。GPU単体 + CPU = 1,200W熱出力。',
            'ネットワーク：10Gbpsイーサネット オプション（¥44,000–88,000）。ボトルネックなしLANマルチユーザー。',
            '合計：$4,000–6,000。8+同時70Bユーザーをサポート、または1ユーザーファインチューニング + 並行サービング。',
          ],
        },
        'who-needs': {
          id: 'who-needs',
          title: '誰が$4K–6Kワークステーションを必要とするか？',
          content: 'このティアは対象：',
          items: [
            '**SMB/企業：** 5+従業員向けの内部LLM APIを実行。オンプレミスデータ管理が必須。',
            '**AI研究者：** 大規模モデルのファインチューニング（70B LoRA）およびチーム向け推論提供。単一¥220,000 rigは並行処理不可。',
            '**MLOpsエンジニア：** 内部推論クラスタの構築。1つのワークステーションをサーバーノードとして開始。',
            '**コンテンツスタジオ（プロ向け）：** 24/7ビデオキャプション、コード生成、要約をAPIコストなしで実行。',
          ],
        },
        'parts-list': {
          id: 'parts-list',
          title: 'ワークステーションのパーツリストは何か？',
          content: '**プロフェッショナルワークステーションは、デュアルRTX 4090s（中古ペア¥330,000–385,000）とThreadripper CPU（¥358,000–367,000）から始まり、128GB DDR5メモリとカスタム液冷が含まれます。** 完全なパーツリストとコスト内訳：',
          rows: [
            { 'コンポーネント': 'GPU', 'モデル': '2× RTX 4090 24GB（中古）', '価格（2026年4月）': '¥330,000–385,000', 'ノート': 'NVLink橋をオプション提供。ペアリング前に両カードテスト。' },
            { 'コンポーネント': 'CPU', 'モデル': 'Threadripper 7970X（32コア）', '価格（2026年4月）': '¥358,000–367,000', 'ノート': 'ファインチューニング時に32並列コア、両GPU推論実行。' },
            { 'コンポーネント': 'マザーボード', 'モデル': 'TRX850またはXeon W90', '価格（2026年4月）': '¥88,000–176,000', 'ノート': 'デュアルGPUサポート、PCIe 5.0、エンタープライズグレード電源。' },
            { 'コンポーネント': 'メモリ', 'モデル': '128GB DDR5 6000 MHz', '価格（2026年4月）': '¥132,000–176,000', 'ノート': 'Corsair Dominator Platinum。8+同時ユーザーをサポート。' },
            { 'コンポーネント': 'ストレージ', 'モデル': '4TB NVMe + 12TB HDD', '価格（2026年4月）': '¥176,000–264,000', 'ノート': 'ホットモデルNVMe、バックアップ&データセットHDD。' },
            { 'コンポーネント': '電源', 'モデル': '2000W 80+ Platinum または 2× 1200W', '価格（2026年4月）': '¥220,000–330,000', 'ノート': 'デュアル4090s = 900W持続、2000W+ ヘッドルーム必須。' },
            { 'コンポーネント': '冷却', 'モデル': 'カスタムループまたは2× 360mm AIO', '価格（2026年4月）': '¥330,000–550,000', 'ノート': 'CPU + 2 GPU = 1,200W熱。空冷では不十分。' },
            { 'コンポーネント': 'ケース', 'モデル': 'Lian Li O11 Dynamic または Corsair Crystal', '価格（2026年4月）': '¥44,000–66,000', 'ノート': 'デュアルGPUクリアランス、大型AIOループ対応。' },
            { 'コンポーネント': '合計', 'モデル': '--', '価格（2026年4月）': '¥880,000–1,320,000', 'ノート': 'GPU市場価格と冷却選択で変動。' },
          ],
          columns: ['コンポーネント', 'モデル', '価格（2026年4月）', 'ノート'],
          image: '/images/local-llm-workstation-build-components-layout-ja.svg',
          imageCaption: 'ワークステーション コンポーネント：デュアル RTX 4090 GPU（計 48GB VRAM）、Threadripper 7970X CPU（32 コア）、128GB DDR5 メモリ、2000W 電源、液体冷却システム（1,200W 放熱）。',
        },
        'dual-gpu': {
          id: 'dual-gpu',
          title: 'デュアルGPUを最大パフォーマンスに設定するには？',
          content: '**2つのRTX 4090sは48GB VRAMと推論用約2倍スループットを提供します。** 3つの構成オプション：サイドバイサイド独立操作、NVLink統合VRAMフュージョン、またはテンソル並列単一モデル加速。',
          numberedItems: [
            '**サイドバイサイド（NVLinkなし）：** 各GPUが独立実行。モデルA on GPU 0、モデルB on GPU 1。異種ワークロード（7Bファインチューニング + 70B提供）に最適。',
            '**NVLink橋：** VRAM統合（48GBが単一48GBプールに見える）。より大きなバッチサイズまたは巨大コンテキストウィンドウを有効。コスト：€200–300橋 + セットアップ複雑度。',
            '**デュアルGPU推論：** 単一70Bモデルを2GPU上でシャード化して2倍スループット（14 tok/sではなく28 tok/s）。vLLMまたはllama.cppテンソル並列サポートが必須。',
          ],
          callouts: [
            { type: '💡 Pro Tip', text: '異種ワークロード向けNVLinkをスキップ。独立操作はシンプル、低コスト（¥44,000節約）、ブリッジファームウェアバグを排除。' },
            { type: '⚠️ Warning', text: 'NVLink橋はNVIDIAプロプライエタリドライバサポート必須。オープンソースROCmまたはAMD同等品は異なるGPU間ブリッジをサポートしない。' },
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'デュアルGPUはカード毎独立モデル（最も簡単）またはNVLink経由VRAM統合（複雑だが大規模モデル）のいずれかで実行。' },
            { type: 'plain-terms', text: '2台の別々コンピュータ（サイドバイサイド）vs 1つ共有スーパーコンピュータ（NVLink）として考えてください。サイドバイサイドはセットアップが簡単；共有はハイパワーモデルに有効。' },
          ],
          image: '/images/local-llm-workstation-build-dual-gpu-config-ja.svg',
          imageCaption: '3 つのデュアル GPU 設定オプション：独立した並列運用（混合ワークロード、NVLink なし）、NVLink ブリッジ（統合 48GB VRAM、大規模コンテキスト）、テンソル並列化（単一 70B モデルを GPU 間で分割して 28 トークン/秒スループット）。',
        },
        'rtx5090-vs-4090': {
          id: 'rtx5090-vs-4090',
          title: 'デュアルRTX 5090 vs デュアルRTX 4090：パフォーマンス&価値（2026年4月）',
          content: '**デュアルRTX 4090中古（¥330,000–385,000）はQ4 70B at 100 tok/sで価値選択肢のまま。デュアルRTX 5090新品（¥880,000）はより高VRAM（64GB）と品質（Q8形式）で勝るがコスト¥308,000–396,000多い。** シングルRTX 5090（¥440,000新品）は複雑さなく70B Q4 at 40–50 tok/sに対応。',
          rows: [
            { '構成': 'デュアルRTX 4090（中古）', 'VRAM': '48 GB', '70B速度': '100 tok/s（Q4）', 'コスト': '¥330,000–385,000' },
            { '構成': 'シングルRTX 5090（新品）', 'VRAM': '32 GB', '70B速度': '40–50 tok/s（Q4）', 'コスト': '¥440,000' },
            { '構成': 'デュアルRTX 5090（新品）', 'VRAM': '64 GB', '70B速度': '120 tok/s（Q4）', 'コスト': '¥880,000' },
          ],
          columns: ['構成', 'VRAM', '70B速度', 'コスト'],
          callouts: [
            { type: '💡 Pro Tip', text: 'Q4 70B推論最大スループット：デュアル4090中古（¥330,000–385,000）は2026年4月最高70B価値提供。新5090は50%以上高コスト。' },
            { type: '📌 Key Point', text: 'デュアル5090はQ8 70B（高出力品質）またはフューチャープルーフ向け勝利。シングル5090はソロユーザー向けデュアルGPU複雑度排除。' },
          ],
        },
        'cooling': {
          id: 'cooling',
          title: '1,200Wの熱をどう冷やすか？',
          content: 'RTX 4090（450W）+ RTX 4090（450W）+ CPU（200W）= 1,100W持続、1,300Wまでスパイク。',
          items: [
            '**カスタム液冷ループ：** ¥330,000–550,000。CPU水ブロック + GPU水ブロック + 360mmラジエター。GPU <75°C、CPU <80°Cを維持。',
            '**デュアル360mm AIO：** ¥132,000–198,000。GPU毎1つAIO + 別途CPU冷却。カスタムループより組み立てやすく、メンテナンス容易。',
            '**空冷：** 実現不可。持続70B推論でサーマルスロットリング確実。',
          ],
          callouts: [
            { type: '🛠️ Best Practice', text: '5+ W/mK導熱性熱グリース使用（Noctua NT-H2、Corsair TM30）。低価格グリースは10–15°C追加でGPU保証無効。' },
          ],
          image: '/images/local-llm-workstation-build-cooling-setup-ja.svg',
          imageCaption: '放熱：デュアル RTX 4090（各 450W）と Threadripper CPU（200W）から合計 1,200W。冷却ソリューション：カスタム液体ループ（¥121,000–198,000）、デュアル 360mm AIO（¥49,000–73,000）、または空冷（非推奨、熱スロットリング）。',
        },
        'power': {
          id: 'power',
          title: '適切な電源と電気配線セットアップとは？',
          content: '**デュアル4090s（900W持続、1,300Wスパイク）は2000W電源最小が必須 — それ以下は電圧低下とロード下クラッシュを招く。** 単一2000W電源または冗長用デュアル1200W電源を選択可能ですが、自宅/オフィス回路がピーク時2000Wを処理できることを確認してください。',
          items: [
            '**オプション1：シングル2000W電源：** Seasonic、Corsair、またはEVGA 80+ Platinum。ケーブルルーティングがきれいで単一障害点。',
            '**オプション2：デュアル1200W電源：** GPU毎1つ + 共有マザーボード。冗長性（1つ失敗、推論50%速度で継続）。セットアップ複雑。',
            '**容量ルール：** デュアル4090用2000W最小。それ以下はロード下電圧低下を招く。',
            '**回路計画：** デュアルGPU rigはピーク2000Wを消費。20A回路を確認（典型的ホーム/オフィス100V 15A、不足）。240V専用ラインが利用可能なら使用。',
          ],
          callouts: [
            { type: '⚠️ Warning', text: 'ホーム電源は通常15A 100V（1,800W最大）。デュアル4090 rigはブレーカーをトリップさせます。専用240V 20A回路をインストール（電気工事者費用¥44,000–88,000）。' },
            { type: '📌 Key Point', text: 'モジュラー電源を常に使用。デュアルGPUは多数パワーピン；非モジュラーケーブルはマルチピンコネクタ接触抵抗による火災ハザード作成。' },
          ],
          image: '/images/local-llm-workstation-build-power-electrical-ja.svg',
          imageCaption: '電源要件：常時 ~1,100W（GPU 450W + 450W、CPU 200W）、ピーク 1,300W。電源ユニット オプション：単一 2000W（シンプル、きれいなケーブル）または デュアル 1200W（冗長、複雑な設定）。どちらも 20A 240V 専用回路が必要。',
        },
        'perf': {
          id: 'perf',
          title: 'マルチユーザー推論パフォーマンスはどの程度期待できるか？',
          content: '**128GB RAMおよびデュアル4090sで、2–3同時70Bユーザーを14 tok/sで提供、または8+同時7Bユーザーを30+ tok/sで提供可能。** 以下ベンチマークはQ4量子化とvLLMマルチユーザー・スケジューリングを想定：',
          items: [
            '**シングルユーザー、70Bモデル：** 28トークン/秒（テンソル並列経由GPU毎2× 14 tok/s）。',
            '**2同時ユーザー、70B各：** 14トークン/秒／ユーザー（リクエスト時間多重化）。',
            '**4同時ユーザー、7B各：** 120トークン/秒合計（ユーザー毎30 tok/s）。',
            '**7B LoRA ファインチューニング + 70B提供：** GPU 0上ファインチューニング（100W）、GPU 1上推論（450W）。干渉なし。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'ワークステーション構築の一般的な誤りとは？',
          items: [
            '2つの異なるGPUモデル購入（5090 + 4090）。非対称はロードバランシング問題を招く。同一カードに固定。',
            'PSUコスト削減しようと¥44,000節約。1500W PSU + デュアル4090sはロード下でスロットル或いはクラッシュ。',
            '空冷をリキッド代わりに使用。サーマルスロットリングは持続推論で30–50%スループット削減。',
            '**TCO計算で電気コスト忘却。** デュアルRTX 4090s持続推論で900Wを消費。日本平均（¥32/kWh）24/7実行：約¥1,050,000/年電気代。3年間：¥3,150,000–3,150,000電気のみ。ROI vs クラウドAPI決定に係数化。',
            '**マルチユーザー設定向けネットワークを軽視。** 標準ギガビットイーサネット（1Gbps = 125MB/s）は5+同時ユーザー、長コンテキスト応答時ボトルネック。2.5Gbpsまたは10Gbpsイーサネットへアップグレード本番ステーション向けチームサービング。コスト：NIC + スイッチ¥44,000–88,000。',
          ],
          callouts: [
            { type: '⚠️ Warning', text: '非マッチングGPU（異モデルまたはVRAMサイズ）はテンソル並列破壊。vLLMはシングルGPU推論フォールバック、スループット50%。' },
            { type: '💡 Pro Tip', text: '新シングルカード代わりに検証済み中古RTX 4090ペア購入（前オーナー実績）。¥176,000–264,000節約しハードウェアロットリーリスク回避。' },
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'ThreadripperプロセッサはRyzen 9のかわりに必要か？', a: '推論のみ：Ryzen 9は良好に動作。推論 + 並行ファインチューニング：Threadripperの追加コア（32 vs. 16）は不可欠。' },
            { q: '2つの4090を統合するためNVLinkを使用すべきか？', a: 'オプション。各GPU別モデル実行時（7B + 70B）はスキップ。単一70Bを両GPUシャード化しバッチサイズ向上時は使用。' },
            { q: 'デュアル4090 rigが何同時ユーザーをサポートするか？', a: '70B向け：2–3ユーザー（各14 tok/s）。7B向け：8+ユーザー（各30+ tok/s）。' },
            { q: 'デュアル4090かわりシングルRTX 5090にアップグレード可能か？', a: 'シングル5090：デュアル4090に類似パフォーマンス、VRAMその半分（24GB vs. 48GB）、¥440,000。デュアル5090：¥880,000（オーバーキル、悪い値）。' },
            { q: 'クラウドLLM APIとの¥880,000ワークステーションROIは？', a: 'クラウド：1Kトークンあたり¥0.00088。ワークステーション：¥880,000を2年分割 = ¥440,000/年、約¥0.00000088／トークン。軽度利用で2.5Bトークン/年でブレークイーブン。' },
            { q: 'ワークステーションはデータセンター冷却が必要か？', a: 'いいえ。コンシューマー級液冷（2× 360mm AIOまたはカスタムループ）十分。データセンター冷却（インロー、オーバーヘッド）は密度向け；1ワークステーションの1,200Wはオフィスエアコン内に収まります。' },
            { q: 'デュアル4090今購入かわりにRTX 6090を待つべきか？', a: 'NVIDIA RTX 60シリーズは歴的2年更新サイクル基づき2026年末から2027年予想。今ワークステーション必要：デュアルRTX 4090中古（¥330,000–385,000）が2026年4月で70B推論最高値提供。12–18ヶ月待機可：RTX 6090は可能性49GB VRAM単一カード、デュアルGPU必要排除全体。' },
            { q: 'デュアル4090ワークステーションの騒音レベルはいくつか？', a: '持続70B推論：カスタム液冷で1メートル50–60dB。通常オフィス会話に相当。デュアル360mm AIO：55–65dB（ロード下で聴覚的に大きい）。空冷：65–75dB（大きい、オフィス用実用的でない）。デスク側配置：カスタムループまたは静か AIO不可欠。サーバー室配置：騒音は無関。' },
            { q: 'ローカルLLM使用時のMETI AI ガバナンス考慮は？', a: 'はい。日本（METI AI治理）はローカル推論を戦略的優先。すべてのデータオンプレミスでMETI AI ガバナンス2024完全準拠。エンタープライズデプロイ向け：アクセス管理（LDAP、ファイアウォール）を実装し、データフロー&削除ポリシーをDPA（データ処理契約）で文書化。金融・医療・公的部門の大規模企業に推奨。' },
          ],
          callouts: [
            { type: '🔍 Did You Know?', text: 'デュアルRTX 4090全推論ロード下で900W持続消費。電気代：日本平均（¥32/kWh）で24/7実行時約¥1,050,000/年。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '関連リーディング',
          items: [
            '[AMD Ryzen AI Max+ ミニPC (2026)](/ja/local-llms/best-amd-mini-pc-local-llm-2026) — ユニファイドメモリ 64–128GB、50 TOPS NPU、¥172,000–205,000。',
            '[¥220,000以下最高ローカルLLM PCビルド](/ja/local-llms/local-llm-pc-build-2000) — 小チーム向けミッドレンジシングルGPUセットアップ。',
            '[¥110,000以下最高ローカルLLM PCビルド](/ja/local-llms/local-llm-pc-build-1000) — バジェット向け7B–13B推論。',
            '[RTX 5090 vs RTX 4090](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm) — ワークステーションアップグレード向けシングルGPU比較。',
            '[LoRAでローカルLLMをファインチューニング](/ja/local-llms/fine-tuning-local-llms-lora) — デュアルGPU上並行ファインチューニング技術。',
            '[ローカルLLM向けVRAMはいくつか必要か？](/ja/local-llms/how-much-vram-local-llm) — 8GBから128GBへのVRAMスケーリング。',
            '[GPU ワークステーション向け液冷](/ja/local-llms/gpu-cooling-strategies) — カスタムループ vs AIO ベストプラクティス。',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'ソース',
          items: [
            '[PCPartPicker](https://pcpartpicker.com) — Threadripper、RTX 4090/5090、DDR5 RAMのライブコンポーネント価格（2026年4月）。',
            '[TechPowerUp CPUデータベース](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&family=Threadripper) — Threadripper 7970X公式電力消費とコア数仕様。',
            '[NVIDIA NVLinkドキュメンテーション](https://www.nvidia.com/en-us/data-center/nvlink/) — メモリ統合とデュアルRTXカード間テンソル並列向けNVLink公式仕様。',
            '[vLLM分散サービング](https://docs.vllm.ai/en/latest/serving/distributed_serving.html) — コンシューマーハードウェア上70Bモデル向けマルチGPUテンソル並列設定。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'ローカルLLM ワークステーション構築2026：RTX 4090×2、Threadripper、$4,000–6,000',
        'description': '$4,000–6,000ワークステーション：RTX 4090×2（48GB VRAM）、Threadripper 7970X、128GB DDR5。70B×2–3名同時14トークン/秒。冷却・電源・電気配線完全ガイド。',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-workstation-build',
        'inLanguage': 'ja',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-25',
        'author': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'ローカルLLMワークステーション' },
          { '@type': 'Thing', 'name': 'デュアルRTX 4090ビルド' },
          { '@type': 'Thing', 'name': 'Threadripper 7970X LLM' },
          { '@type': 'Thing', 'name': '70B推論ワークステーション' },
          { '@type': 'Thing', 'name': 'マルチGPUローカルAIビルド' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'proficiencyLevel': 'Advanced',
        'educationalLevel': 'Advanced',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'ローカルLLM ワークステーション構築コンポーネント 2026',
        'numberOfItems': 8,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'GPU：2× RTX 4090 24 GB（中古ペア）',
            'description': '¥330,000–385,000。合計48GB VRAM。テンソル並列100 tok/s 70B。'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'CPU：AMD Threadripper 7970X（32コア）',
            'description': '¥358,000–367,000。提供中の並行量子化&ファインチューニング実現。'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'マザーボード：TRX50チップセット（sTR5）',
            'description': '¥88,000–176,000。デュアルGPUサポート、PCIe 5.0、7チャネルDDR5。'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'メモリ：128 GB DDR5 6000 MHz',
            'description': '¥132,000–176,000。Corsair Dominator Platinumまたは同等。8+同時ユーザーサポート。'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'ストレージ：4 TB NVMe Gen4 + 12 TB HDD',
            'description': '¥176,000–264,000。ホットモデルNVMe、バックアップ&トレーニングデータセットHDD。'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': '電源：2,000 W 80+ Platinum',
            'description': '¥220,000–330,000。デュアル4090s 900W持続消費。1,300Wスパイク向けヘッドルーム。'
          },
          {
            '@type': 'ListItem',
            'position': 7,
            'name': '冷却：カスタムループまたは2× 360mm AIO',
            'description': '¥330,000–550,000。CPU + 2 GPU = 1,200W熱。空冷不十分。'
          },
          {
            '@type': 'ListItem',
            'position': 8,
            'name': 'ケース：Lian Li O11 Dynamic XL',
            'description': '¥44,000–66,000。デュアルGPUクリアランス、大型ラジエータサポート、ケーブル管理。'
          },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ja',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-workstation-build',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ThreadripperプロセッサはRyzen 9のかわりに必要か？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '推論のみ：Ryzen 9は良好に動作。推論 + 並行ファインチューニング：Threadripperの追加コア（32 vs. 16）は不可欠。'
            }
          },
          {
            '@type': 'Question',
            'name': '2つの4090を統合するためNVLinkを使用すべきか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'オプション。各GPU別モデル実行時（7B + 70B）はスキップ。単一70Bを両GPUシャード化しバッチサイズ向上時は使用。'
            }
          },
          {
            '@type': 'Question',
            'name': 'デュアル4090 rigが何同時ユーザーをサポートするか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '70B向け：2–3ユーザー（各14 tok/s）。7B向け：8+ユーザー（各30+ tok/s）。'
            }
          },
          {
            '@type': 'Question',
            'name': 'デュアル4090かわりシングルRTX 5090にアップグレード可能か？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'シングル5090：デュアル4090に類似パフォーマンス、VRAMその半分（24GB vs. 48GB）、¥440,000。デュアル5090：¥880,000（オーバーキル、悪い値）。'
            }
          },
          {
            '@type': 'Question',
            'name': 'クラウドLLM APIとの¥880,000ワークステーションROIは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'クラウド：1Kトークンあたり¥0.00088。ワークステーション：¥880,000を2年分割 = ¥440,000/年、約¥0.00000088／トークン。軽度利用で2.5Bトークン/年でブレークイーブン。'
            }
          },
          {
            '@type': 'Question',
            'name': 'ワークステーションはデータセンター冷却が必要か？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'いいえ。コンシューマー級液冷（2× 360mm AIOまたはカスタムループ）十分。データセンター冷却は密度向け；1ワークステーション1,200Wはオフィスエアコン内に収まります。'
            }
          },
          {
            '@type': 'Question',
            'name': 'デュアル4090今購入かわりにRTX 6090を待つべきか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NVIDIA RTX 60シリーズは2026年末から2027年予想。今ワークステーション必要：デュアルRTX 4090中古（¥330,000–385,000）が2026年4月で70B推論最高値。12–18ヶ月待機可：RTX 6090は可能性48GB VRAM単一カード、デュアルGPU必要排除。'
            }
          },
          {
            '@type': 'Question',
            'name': 'デュアル4090ワークステーションの騒音レベルはいくつか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '持続70B推論：カスタム液冷で1メートル50–60dB。通常オフィス会話相当。デュアル360mm AIO：55–65dB（ロード下聴覚的大きい）。空冷：65–75dB（大きい、オフィス用実用的でない）。デスク側：カスタムループ或いは静か AIO不可欠。サーバー室：騒音無関。'
            }
          },
        ],
      },
    },
    zh: {
      freshness_tier: 'annual',
      theme: 'Hardware Setups',
      title: '本地LLM电脑配置指南：最佳工作站方案（GPU、VRAM、7B–70B模型）',
      seoTitle: '本地LLM工作站构建2026：双RTX 4090，$4–6K，70B就绪',
      intro: '**生产级本地LLM推理工作站的构建成本为$4,000–6,000，包含双RTX 4090 GPU（总计48GB显存）、Threadripper 7970X CPU（32核）、128GB DDR5内存、自定义冷却系统和2,000W电源。** 截至2026年4月，该配置可同时为2–3名70B模型用户提供14 tok/s的推理性能，支持Llama 3.3 70B微调与推理并行运行，实现无云API成本的本地部署。',
      metaDescription: '构建本地LLM工作站，选择合适的GPU、VRAM和内存。查看可运行7B–70B模型的真实配置，支持Ollama和LM Studio。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-25',
      leadAnswerBlock: '**$4,000–6,000工作站：双RTX 4090（48GB显存）、Threadripper 7970X（32核）、128GB DDR5、自定义冷却、2,000W电源。** 2026年4月：同时为2–3名70B用户提供14 tok/s、Llama 3.3微调并行、无云API费用。',
      audience: '在生产或企业环境中部署本地LLM的工程师',
      readTime: '阅读约10分钟',
      educationalLevel: 'Advanced',
      primaryTerm: 'AI Workstation',
      toc: [
        { label: '核心要点', anchor: '#tldr' },
        { label: '谁需要$4K–6K工作站？', anchor: '#who-needs' },
        { label: '工作站零件清单是什么？', anchor: '#parts-list' },
        { label: '如何配置双GPU以获得最大性能？', anchor: '#dual-gpu' },
        { label: '双RTX 5090 vs 双RTX 4090：价值对比', anchor: '#rtx5090-vs-4090' },
        { label: '如何冷却1,200W的热量？', anchor: '#cooling' },
        { label: '如何选择正确的电源和电气设置？', anchor: '#power' },
        { label: '期望什么样的多用户推理性能？', anchor: '#perf' },
        { label: '工作站构建常见错误有哪些？', anchor: '#mistakes' },
        { label: '常见问题解答', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU：Threadripper 7970X（32核，$2,400–2,500）或Intel Xeon W9-3495X（$5,000+）。支持并行微调同时提供推理。',
            'GPU：2× RTX 4090 24GB（二手对约$2,200–2,600）。总计48GB显存。用于多用户70B或单一70B + 准备任务。',
            '内存：128GB DDR5（$600–800）。支持70B上8+并发用户或单用户70B + 并行量化。',
            '存储：4–8TB NVMe SSD + 12–24TB HDD（$800–1,500）。多模型库 + 备份 + 训练数据集。',
            '电源：2× 1200W或1× 2000W（$800–1,200）。双4090s消耗900W持续；峰值余量至关重要。',
            '冷却：自定义液冷环路或双AIO（$1,000–2,000）。单个GPU + CPU = 1,200W热输出。',
            '网络：10Gbps以太网可选（$200–400）。LAN多用户访问无瓶颈。',
            '总计：$4,000–6,000。支持8+并发70B用户或1个用户微调 + 并行服务。',
          ],
        },
        'who-needs': {
          id: 'who-needs',
          title: '谁需要$4K–6K工作站？',
          content: '此级别适用于：',
          items: [
            '**中小企业/企业：** 为5+员工同时运行内部LLM API。需要本地数据控制。',
            '**AI研究人员：** 微调大型模型（70B LoRA）同时为团队提供推理。单个$2K设备无法并行化。',
            '**MLOps工程师：** 构建内部推理集群。以一个工作站作为服务器节点开始。',
            '**内容工作室（专业级）：** 24/7运行视频字幕、代码生成、摘要而无API成本。',
          ],
        },
        'parts-list': {
          id: 'parts-list',
          title: '工作站零件清单是什么？',
          content: '**专业工作站从双RTX 4090s（二手对$2,200–2,600）和Threadripper CPU（$2,400–2,500）开始，配合128GB DDR5和自定义液冷。** 这是完整零件清单和成本明细：',
          rows: [
            { '组件': 'GPU', '型号': '2× RTX 4090 24GB（二手）', '价格（2026年4月）': '$2,200–2,600', '备注': 'NVLink桥可选。配对前测试两张卡。' },
            { '组件': 'CPU', '型号': 'Threadripper 7970X（32核）', '价格（2026年4月）': '$2,400–2,500', '备注': '32并行核心用于微调同时在两个GPU上提供推理。' },
            { '组件': '主板', '型号': 'TRX850或Xeon W90', '价格（2026年4月）': '$400–800', '备注': '双GPU支持、PCIe 5.0、企业级电源传输。' },
            { '组件': '内存', '型号': '128GB DDR5 6000 MHz', '价格（2026年4月）': '$600–800', '备注': 'Corsair Dominator Platinum。支持8+并发用户。' },
            { '组件': '存储', '型号': '4TB NVMe + 12TB HDD', '价格（2026年4月）': '$800–1,200', '备注': 'NVMe用于热模型，HDD用于备份&数据集。' },
            { '组件': '电源', '型号': '2000W 80+ Platinum或2× 1200W', '价格（2026年4月）': '$1,000–1,500', '备注': '双4090s = 900W持续，需要2000W+余量。' },
            { '组件': '冷却', '型号': '自定义环路或2× 360mm AIO', '价格（2026年4月）': '$1,500–2,500', '备注': 'CPU + 2个GPU = 1,200W热。空气冷却不足。' },
            { '组件': '机箱', '型号': 'Lian Li O11 Dynamic或Corsair Crystal', '价格（2026年4月）': '$200–300', '备注': '支持双GPU + 大型AIO或环路。' },
            { '组件': '总计', '型号': '--', '价格（2026年4月）': '$4,000–6,000', '备注': '随GPU市场价格和冷却选择调整。' },
          ],
          columns: ['组件', '型号', '价格（2026年4月）', '备注'],
          image: '/images/local-llm-workstation-build-components-layout-zh.svg',
          imageCaption: '工作站组件：双RTX 4090 GPU（共48GB显存）、Threadripper 7970X CPU（32核心）、128GB DDR5内存、2000W电源、液体冷却系统（1,200W散热）。',
        },
        'dual-gpu': {
          id: 'dual-gpu',
          title: '如何配置双GPU以获得最大性能？',
          content: '**两个RTX 4090s为您提供48GB显存和约2倍推理吞吐量。** 您有三个配置选项：并排独立运行、NVLink融合用于统一显存、或张量并行用于单模型加速。',
          numberedItems: [
            '**并排（无NVLink）：** 每个GPU独立运行。GPU 0上的模型A，GPU 1上的模型B。最适合异构工作负载（7B微调 + 70B服务）。',
            '**NVLink桥：** 融合显存（48GB显示为单个48GB池）。启用更大的批次大小或大规模上下文窗口。成本：$200–300桥 + 设置复杂性。',
            '**双GPU推理：** 在2个GPU上分片单个70B模型以获得2倍吞吐量（28 tok/s而非14）。需要vLLM或llama.cpp张量并行支持。',
          ],
          callouts: [
            { type: '💡 Pro Tip', text: '异构工作负载跳过NVLink。独立操作更简单、成本低（节省$200）、消除桥固件错误。' },
            { type: '⚠️ Warning', text: 'NVLink桥需要NVIDIA专有驱动支持。开源ROCm或AMD等效产品不支持不同GPU之间的桥接。' },
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: '双GPU要么在每张卡上运行独立模型（最简单）要么通过NVLink池化显存（复杂但支持更大模型）。' },
            { type: 'plain-terms', text: '把它想象成两台独立的计算机（并排）vs 一台共享的超级计算机（NVLink）。并排更易设置；共享为超大模型提供更多动力。' },
          ],
          image: '/images/local-llm-workstation-build-dual-gpu-config-zh.svg',
          imageCaption: '三种双GPU配置选项：并排独立（混合工作负载、无NVLink）、NVLink桥接（统一48GB显存、大上下文窗口）、张量并行化（单个70B模型分片到GPU上获得28令牌/秒吞吐量）。',
        },
        'rtx5090-vs-4090': {
          id: 'rtx5090-vs-4090',
          title: '双RTX 5090 vs 双RTX 4090：性能&价值（2026年4月）',
          content: '**双RTX 4090二手（$2,200–2,600）仍是Q4 70B以100 tok/s的价值选择。双RTX 5090新品（$4,000）在显存（64GB）和质量（Q8格式）上胜出但成本多$1,400–1,800。** 单RTX 5090（$2,000新品）以无复杂性的40–50 tok/s处理70B Q4。',
          rows: [
            { '配置': '双RTX 4090（二手）', '显存': '48 GB', '70B速度': '100 tok/s（Q4）', '成本': '$2,200–2,600' },
            { '配置': '单RTX 5090（新品）', '显存': '32 GB', '70B速度': '40–50 tok/s（Q4）', '成本': '$2,000' },
            { '配置': '双RTX 5090（新品）', '显存': '64 GB', '70B速度': '120 tok/s（Q4）', '成本': '$4,000' },
          ],
          columns: ['配置', '显存', '70B速度', '成本'],
          callouts: [
            { type: '💡 Pro Tip', text: '用于Q4 70B推理最大吞吐量：双4090二手（$2,200–2,600）在2026年4月提供最佳70B价值。新5090成本高50%以上。' },
            { type: '📌 Key Point', text: '双5090在Q8 70B（更高输出质量）或未来防护中胜出。单5090消除独立用户的双GPU复杂性。' },
          ],
        },
        'cooling': {
          id: 'cooling',
          title: '如何冷却1,200W的热量？',
          content: 'RTX 4090（450W）+ RTX 4090（450W）+ CPU（200W）= 1,100W持续，峰值至1,300W。',
          items: [
            '**自定义液冷环路：** $1,500–2,500。CPU水冷块 + GPU水冷块 + 360mm散热器。GPU <75°C，CPU <80°C。',
            '**双360mm AIO：** $600–900。每个GPU一个AIO + 单独的CPU冷却器。比自定义环路更模块化，维护更简单。',
            '**空气冷却：** 不可行。在持续70B推理下保证热节流。',
          ],
          callouts: [
            { type: '🛠️ Best Practice', text: '使用5+ W/mK导热性的导热膏（Noctua NT-H2、Corsair TM30）。廉价膏会增加10–15°C并使GPU保修失效。' },
          ],
          image: '/images/local-llm-workstation-build-cooling-setup-zh.svg',
          imageCaption: '散热：双RTX 4090（各450W）和Threadripper CPU（200W）共1,200W。冷却方案：自定义液冷环路（$1,500–2,500）、双360mm AIO（$600–900）或空气冷却（不推荐，导致热节流）。',
        },
        'power': {
          id: 'power',
          title: '如何选择正确的电源和电气设置？',
          content: '**双4090s（900W持续，1,300W峰值）需要最少2000W电源 — 更少的会导致电压下垂和负载下崩溃。** 您可以选择单个2000W电源或双1200W电源实现冗余，但必须验证您的家庭/办公电路能处理峰值2000W。',
          items: [
            '**选项1：单个2000W电源：** Seasonic、Corsair或EVGA 80+ Platinum。更清洁的线路走向，单点故障。',
            '**选项2：双1200W电源：** 每个GPU一个 + 共享主板。冗余性（一个故障，推理继续50%速度）。复杂设置。',
            '**容量规则：** 2000W用于双4090最小。更少会在负载下导致电压下垂。',
            '**电路规划：** 双GPU设备峰值消耗2000W。确保20A电路（典型家庭/办公120V 15A插座不足）。如果可用，使用专用240V线路。',
          ],
          callouts: [
            { type: '⚠️ Warning', text: '家庭插座通常是120V 15A（1,800W最大）。双4090设备会跳闸。安装专用240V 20A电路（电工费$200–400）。' },
            { type: '📌 Key Point', text: '始终使用模块化电源。双GPU有数十个电源针脚；非模块化线路因多针连接器接触电阻造成火灾隐患。' },
          ],
          image: '/images/local-llm-workstation-build-power-electrical-zh.svg',
          imageCaption: '电源要求：持续约1,100W（GPU各450W，CPU 200W），峰值1,300W。电源选项：单个2000W（更简单、线路整洁）或双1200W（冗余、复杂设置）。两者均需专用20A 240V电路。',
        },
        'perf': {
          id: 'perf',
          title: '期望什么样的多用户推理性能？',
          content: '**配备128GB RAM和双4090s，您可以同时为2–3个70B用户提供14 tok/s服务，或为8+个7B用户各提供30+ tok/s。** 下列基准假设Q4量化和vLLM多用户调度：',
          items: [
            '**单用户、70B模型：** 28个令牌/秒（通过张量并行每个GPU 2× 14 tok/s）。',
            '**两个并发用户、各70B：** 14个令牌/秒/用户（请求时分复用）。',
            '**四个并发用户、各7B：** 120个令牌/秒总计（每个用户30 tok/s）。',
            '**7B LoRA微调 + 70B服务：** GPU 0微调（100W）、GPU 1推理（450W）。无干扰。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '工作站构建常见错误有哪些？',
          items: [
            '购买两个不同的GPU型号（5090 + 4090）。不对称导致负载平衡问题。坚持使用相同的卡。',
            '省钱跳过电源购买。1500W电源 + 双4090s在负载下会节流或崩溃。',
            '使用空气冷却而非液冷。热节流在持续推理中削减30–50%吞吐量。',
            '**在TCO计算中忽视电力成本。** 双RTX 4090s持续推理消耗900W。以美国平均值（$0.14/kWh）24/7运行：约$1,100/年电费。3年：$3,300–7,500仅电力。将此纳入ROI vs 云API决定。',
            '**低估多用户设置的网络。** 标准千兆以太网（1Gbps = 125 MB/s）是5+并发用户长上下文响应的瓶颈。升级到2.5 Gbps或10 Gbps以太网用于为团队服务的生产工作站。成本：NIC + 交换机$200–400。',
          ],
          callouts: [
            { type: '⚠️ Warning', text: '不匹配的GPU（不同型号或显存大小）破坏张量并行。vLLM会回退到单GPU推理，吞吐量减半。' },
            { type: '💡 Pro Tip', text: '购买经过验证的二手RTX 4090对（前所有者确认配对）而非新单卡。节省$500–800并避免硬件彩票。' },
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '常见问题解答',
          faqs: [
            { q: 'Threadripper CPU是否必需，还是可以使用Ryzen 9？', a: '仅推理：Ryzen 9工作得很好。推理 + 并行微调：Threadripper的额外核心（32 vs. 16）至关重要。' },
            { q: '应该使用NVLink融合两个4090吗？', a: '可选。如果在每个GPU上运行单独的模型（7B + 70B），请跳过。如果在两个GPU上分片单个70B以获得更高的批次大小，请使用。' },
            { q: '双4090设备能处理多少并发用户？', a: '70B：2–3个用户（每个14 tok/s）。7B：8+个用户（每个30+ tok/s）。' },
            { q: '我能升级到RTX 5090而不是双4090吗？', a: '单5090：性能类似双4090，显存一半（24GB vs. 48GB），$1,999。双5090：$4,000（过度，更差价值）。' },
            { q: '$5,000工作站vs云LLM API的ROI是什么？', a: '云端：$0.001每1K令牌。工作站：$5,000分摊2年 = $2,500/年，约$0.000001每令牌。在2.5B令牌/年（轻度使用）时收支平衡。' },
            { q: '工作站是否需要数据中心冷却？', a: '不需要。消费级液冷（2× 360mm AIO或自定义环路）足够。数据中心冷却（行内、顶部）设计用于密度；单个工作站的1,200W适合办公HVAC。' },
            { q: '应该等待RTX 6090而不是现在购买双4090吗？', a: 'NVIDIA RTX 60系列基于历史2年刷新周期预期于2026年末至2027年推出。如果现在需要工作站：双RTX 4090二手（$2,200–2,600）在2026年4月提供最佳70B推理价值。如果能等12–18个月：RTX 6090可能具有48GB显存单卡，完全消除双GPU需求。' },
            { q: '双4090工作站的噪音级别是多少？', a: '持续70B推理：自定义液冷时1米处50–60 dB。相当于正常办公室对话。双360mm AIO：55–65 dB（负载下听觉上更大）。空气冷却：65–75 dB（大声，办公室使用不实用）。桌边放置：自定义环路或安静AIO至关重要。服务器室放置：噪音无关。' },
            { q: '在中国使用本地LLM时，数据安全法合规性如何？', a: '中国2021年《数据安全法》要求敏感数据不跨越国界。本地推理（Ollama、LM Studio、llama.cpp）完全满足第37条。金融、医疗、能源等关键行业偏好本地AMD ROCm部署以实现数据主权。PromptQuorum连接完全本地推理端点，无第三方云。' },
            { q: '亚太地区多国数据驻地合规性如何？', a: '日本（METI）、新加坡（PDPA）、韩国（PIPA）、越南等地都强制执行数据驻地。本地工作站满足所有地区监管。跨国企业（银行、制药、制造）在亚太子公司可使用单一本地部署满足多国要求，无云锁定或跨境数据问题。ROI：多年成本相比云API节省数百万美元。' },
          ],
          callouts: [
            { type: '🔍 Did You Know?', text: '双RTX 4090全推理负载消耗900W持续。电费账单：美国平均值（$0.14/kWh）24/7运行约$1,100/年。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[AMD Ryzen AI Max+迷你PC (2026)](/zh/local-llms/best-amd-mini-pc-local-llm-2026) — 统一内存 64–128GB、50 TOPS NPU、¥10500–13700。',
            '[最佳$2,000本地LLM PC构建](/zh/local-llms/local-llm-pc-build-2000) — 小型团队的中端单GPU设置。',
            '[最佳$1,000本地LLM PC构建](/zh/local-llms/local-llm-pc-build-1000) — 经济型7B–13B推理。',
            '[RTX 5090 vs RTX 4090](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm) — 工作站升级的单GPU对比。',
            '[使用LoRA微调本地LLM](/zh/local-llms/fine-tuning-local-llms-lora) — 双GPU上的并行微调技术。',
            '[本地LLM需要多少显存？](/zh/local-llms/how-much-vram-local-llm) — 8GB到128GB的显存扩展。',
            '[GPU工作站的液冷](/zh/local-llms/gpu-cooling-strategies) — 自定义环路vs AIO最佳实践。',
          ],
        },
        'sources': {
          id: 'sources',
          title: '信息来源',
          items: [
            '[PCPartPicker](https://pcpartpicker.com) — Threadripper、RTX 4090/5090和DDR5 RAM的实时组件定价（2026年4月）。',
            '[TechPowerUp CPU数据库](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&family=Threadripper) — Threadripper 7970X官方功耗和核心数规格。',
            '[NVIDIA NVLink文档](https://www.nvidia.com/en-us/data-center/nvlink/) — 内存池化和双RTX卡张量并行的官方NVLink规格。',
            '[vLLM分布式服务](https://docs.vllm.ai/en/latest/serving/distributed_serving.html) — 消费级硬件上70B模型的多GPU张量并行配置。',
          ],
        },
      },
      gammaEmbedUrl: '/presentations/local-llm-workstation-build-static.html',
      gammaDescription: '下面的幻灯片涵盖了：工作站架构（双RTX 4090、Threadripper、128GB RAM）、GPU配置选项（并排、NVLink、张量并行）、冷却方案（液冷vs AIO）、电源需求（2000W PSU、20A电路）和多用户性能基准（2–3个并发70B用户，14 tok/s）。将PDF下载为工作站构建参考卡。',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM工作站构建2026：双RTX 4090、Threadripper、$4,000–6,000',
        'description': '$4,000–6,000工作站：双RTX 4090（48GB显存）、Threadripper 7970X、128GB DDR5。同时支持2–3名70B用户14 tok/s。包含冷却、电源、电气完整指南。',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-workstation-build',
        'inLanguage': 'zh',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-25',
        'author': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com'
        },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '本地LLM工作站' },
          { '@type': 'Thing', 'name': '双RTX 4090构建' },
          { '@type': 'Thing', 'name': 'Threadripper 7970X LLM' },
          { '@type': 'Thing', 'name': '70B推理工作站' },
          { '@type': 'Thing', 'name': '多GPU本地AI构建' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'proficiencyLevel': 'Advanced',
        'educationalLevel': 'Advanced',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '本地LLM工作站构建组件2026',
        'numberOfItems': 8,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'GPU：2× RTX 4090 24GB（二手对）',
            'description': '$2,200–2,600。总计48GB显存。70B张量并行100 tok/s。'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'CPU：AMD Threadripper 7970X（32核）',
            'description': '$2,400–2,500。支持微调期间的并行量化和推理。'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '主板：TRX50芯片组（sTR5）',
            'description': '$400–800。双GPU支持、PCIe 5.0、7通道DDR5。'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': '内存：128GB DDR5 6000 MHz',
            'description': '$600–800。Corsair Dominator Platinum或等效产品。支持8+并发用户。'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': '存储：4TB NVMe Gen4 + 12TB HDD',
            'description': '$800–1,200。NVMe用于热模型，HDD用于备份和数据集。'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': '电源：2,000W 80+ Platinum',
            'description': '$1,000–1,500。双4090s消耗900W持续。需要1,300W峰值余量。'
          },
          {
            '@type': 'ListItem',
            'position': 7,
            'name': '冷却：自定义环路或2× 360mm AIO',
            'description': '$1,500–2,500。CPU + 2个GPU = 1,200W热。空气冷却导致热节流。'
          },
          {
            '@type': 'ListItem',
            'position': 8,
            'name': '机箱：Lian Li O11 Dynamic XL',
            'description': '$200–300。双GPU间隙、大型散热器支持、线缆管理。'
          },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'zh',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-workstation-build',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Threadripper CPU是否必需，还是可以使用Ryzen 9？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '仅推理：Ryzen 9工作得很好。推理 + 并行微调：Threadripper的额外核心（32 vs. 16）至关重要。'
            }
          },
          {
            '@type': 'Question',
            'name': '应该使用NVLink融合两个4090吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可选。如果在每个GPU上运行单独的模型（7B + 70B），请跳过。如果在两个GPU上分片单个70B以获得更高的批次大小，请使用。'
            }
          },
          {
            '@type': 'Question',
            'name': '双4090设备能处理多少并发用户？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '70B：2–3个用户（每个14 tok/s）。7B：8+个用户（每个30+ tok/s）。'
            }
          },
          {
            '@type': 'Question',
            'name': '我能升级到RTX 5090而不是双4090吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '单5090：性能类似双4090，显存一半（24GB vs. 48GB），$1,999。双5090：$4,000（过度，更差价值）。'
            }
          },
          {
            '@type': 'Question',
            'name': '$5,000工作站vs云LLM API的ROI是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '云端：$0.001每1K令牌。工作站：$5,000分摊2年 = $2,500/年，约$0.000001每令牌。在2.5B令牌/年时收支平衡。'
            }
          },
          {
            '@type': 'Question',
            'name': '工作站是否需要数据中心冷却？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '不需要。消费级液冷（2× 360mm AIO或自定义环路）足够。数据中心冷却设计用于密度；单个工作站的1,200W适合办公HVAC。'
            }
          },
          {
            '@type': 'Question',
            'name': '应该等待RTX 6090而不是现在购买双4090吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NVIDIA RTX 60系列预期于2026年末至2027年推出。如果现在需要：双RTX 4090二手（$2,200–2,600）在2026年4月最佳价值。如果能等12–18个月：RTX 6090可能具有48GB单卡，消除双GPU需求。'
            }
          },
          {
            '@type': 'Question',
            'name': '双4090工作站的噪音级别是多少？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '持续70B推理：自定义液冷时1米处50–60 dB。相当于正常办公室对话。双360mm AIO：55–65 dB。空气冷却：65–75 dB。桌边：自定义环路或安静AIO必需。服务器室：噪音无关。'
            }
          },
        ],
      },
    },
  };
