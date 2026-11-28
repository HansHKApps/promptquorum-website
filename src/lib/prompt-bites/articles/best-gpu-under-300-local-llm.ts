import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-en.webp',
    title: 'RTX 3060 12GB for Local LLMs: Is It Still Under $300? (2026)',
    seoTitle: 'RTX 3060 12GB for Local LLMs: Under $300 in 2026?',
    metaDescription: 'A used RTX 3060 12GB sold for $310–350 in the US, above $300. Under that line we dated a new 10GB Arc B570. See price sources and which models fit.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'Budget buyers choosing a first GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**No 12 GB card we checked has a current US price under $300.** A used RTX 3060 12GB sold for $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). The card with 10 GB or more that we could date under $300 is the new Intel Arc B570 10GB: $279.99–289.99 at the cheapest US retailers on [PC Gamer\'s 28 November list](https://www.pcgamer.com/black-friday-graphics-card-deals/), during Black Friday week. If $300 is firm, the B570 is our editorial pick; if you can go to about $310–350, we prefer the used RTX 3060 12GB. We have not benchmarked either card.',
    toc: [
      { label: 'Our Pick Under $300', anchor: '#best-pick' },
      { label: 'Price and Card Comparison', anchor: '#comparison' },
      { label: 'Which Models Fit?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro: 'This page uses US prices only. Each one is labelled as a completed sale, a retail price or an asking price, with its date. These are different things, so do not compare them like for like. Prices change daily, especially during Black Friday week.',
    quickAnswerTop: {
      en: {
        question: 'What is the best GPU under $300 for local LLMs?',
        answer: 'If $300 is a firm limit, our editorial pick is the new Intel Arc B570 10GB, dated at $279.99–289.99 at US retailers on 27–28 November 2026. We found no current price under $300 for a 12GB card. A used RTX 3060 12GB, our preferred 12GB option, sold for $310–350 on eBay US.',
        bullets: [
          'Arc B570 10GB (new): $279.99–289.99 at the cheapest US retailers in Black Friday week; other listings cost more.',
          'Used RTX 3060 12GB: sold for $310–350 (median $330), 17–26 November 2026, excluding shipping.',
          'Arc B580 12GB: November price sources disagree, and none of the current figures we checked is under $300.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No 12 GB card we checked has a current US price under $300',
          'Firm $300 limit: new Arc B570 10GB, our editorial pick ($279.99–289.99, 27–28 November 2026)',
          'Slightly more budget: used RTX 3060 12GB, sold for $310–350, is the 12 GB card we prefer',
          '10 GB is tight for a 14B model at Q4; none of these cards holds a 70B model',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'We found no 12 GB card currently under $300; the new Arc B570 10GB is our pick for a firm limit, and a used RTX 3060 12GB (sold $310–350) is the 12 GB card we prefer if you can pay more.',
          },
          { type: 'plain-terms', text: 'With a hard $300 cap you give up 2 GB of graphics memory. If you can add $10–50, a used RTX 3060 12GB gives you more room for bigger models.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Under $300: Arc B570 10GB. Just Above: Used RTX 3060 12GB',
        content: [
          '<strong>If $300 is a firm limit, our editorial pick is the new Intel Arc B570 10GB.</strong> <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer\'s list updated 28 November</a> showed it at $279.99 at Newegg (with an extra sign-in discount) and $289.99 at Walmart, next to $307.49 at Best Buy and $313.49 at Amazon. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> listed $289 as the best US price on 27 November. A different Amazon listing tracked by <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> cost $429.97 that day. These are Black Friday week prices, so check the checkout total before you buy.',
          'The limit of the B570 is memory. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama lists Qwen 2.5 14B</a> at 9.0 GB and the 7B version at 4.7 GB. On a 10 GB card, a 9.0 GB model leaves about 1 GB for context and overhead, so plan the B570 for 7B–8B models. For software, the <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU docs</a> describe extra GPU support on Windows and Linux through Vulkan; Linux needs Intel\'s driver components. The <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp SYCL docs</a> list the Arc B-Series, naming the B580 in their table. Do not start a new setup on IPEX-LLM: Intel has <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archived the project</a> and its notice cites known security issues. We have not tested the B570.',
          '<strong>If you can go slightly above $300, we prefer the used RTX 3060 12GB.</strong> It sold for $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM used GPU guide</a>). That is $10–50 over this budget before shipping. You get 12 GB of VRAM and CUDA, and the <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU docs</a> list the RTX 3060 as supported. This is an editorial choice. Used cards carry condition and warranty risk, so test the card within the return window.',
          'Other cards near the line do not change the result for us. A used RTX 3060 Ti 8GB had a median asking price of exactly $300.00 on 7 November (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>), with only 8 GB. New 8 GB cards were above $300 on <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> on 27 November: RTX 5050 from $419 and RX 7600 from $389. Some guides quote older used cards below $300 without a date or sales basis; we do not use those figures.',
          'If you buy an RTX 3060, check that the listing says 12 GB. Smaller-memory versions exist, and they leave much less room for a model.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Check Intel Arc B570 10GB price on Newegg',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Check used RTX 3060 12GB prices on eBay',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Check used RX 6700 XT prices on eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Check Intel Arc B580 12GB price on Newegg',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT and Arc B580 Compared',
        content: [
          '<strong>The price column mixes completed sales, retail prices and asking prices, each labelled, so it is not a like-for-like comparison.</strong> RX 6700 XT: <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> showed a $371 average of tracked eBay listings (fair asking range $343–377, 28 November), and <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> a $425 median asking price (7 November). <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a>\'s November average of the three lowest daily listings was $330, with a best day of $291, so single listings under $300 can appear.',
          'Arc B580 12GB: <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> showed $729 as the best US price (27 November), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> $851.16 new on Amazon US and $499 used on eBay (27 November), and <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> a $399 November lowest average from eBay listings (current figure $431). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> called it unavailable from reputable sellers (28 November). Its $249 launch price is not a current price.',
        ],
        columns: ['GPU', 'VRAM', 'US price and basis', 'Software', 'Our view'],
        rows: [
          { GPU: 'Arc B570 (new)', VRAM: '10 GB', 'US price and basis': '$279.99–289.99 retail, Nov 27–28', Software: 'Vulkan / SYCL', 'Our view': 'Pick if $300 is firm' },
          { GPU: 'RTX 3060 (used)', VRAM: '12 GB', 'US price and basis': '$310–350 sold, Nov 17–26', Software: 'CUDA', 'Our view': 'Preferred 12 GB card' },
          { GPU: 'RX 6700 XT (used)', VRAM: '12 GB', 'US price and basis': '$371 avg listing, Nov 28', Software: 'Check Vulkan', 'Our view': 'Mostly above $300' },
          { GPU: 'Arc B580', VRAM: '12 GB', 'US price and basis': '$399–851, sources disagree', Software: 'Vulkan / SYCL', 'Our view': 'Not shown under $300' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Which Models Fit in 10 GB and 12 GB?',
        columns: ['Model size', '12 GB card', '10 GB card'],
        rows: [
          {
            'Model size': '7B–8B (Q4)',
            '12 GB card': '🟢 Fits',
            '10 GB card': '🟢 Fits',
          },
          {
            'Model size': '14B (Q4)',
            '12 GB card': '🟢 Fits',
            '10 GB card': '🟡 Very tight',
          },
          {
            'Model size': '20B and up',
            '12 GB card': '🟡 Often too big',
            '10 GB card': '🔴 Too big for most',
          },
          {
            'Model size': '70B',
            '12 GB card': '🔴 No',
            '10 GB card': '🔴 No',
          },
        ],
        content: [
          'These are capacity estimates, not test results. The <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama library</a> lists Qwen 2.5 7B at 4.7 GB and 14B at 9.0 GB; context and overhead need memory on top. A 70B model at Q4 needs roughly 40 GB, far beyond one card here.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About GPUs Under $300 for Local LLMs',
        faqs: [
          {
            q: 'Is a used RTX 3060 12GB still under $300?',
            a: 'Not on the sold data we use. It sold for $310–350 (median $330) in 209 eBay US sold listings from 17 to 26 November 2026, excluding shipping (InsiderLLM). A single listing can differ, so check the total with shipping.',
          },
          {
            q: 'Is any 12GB GPU available under $300?',
            a: 'We could not show it with current, dated evidence. InsiderLLM\'s sold range for the used RTX 3060 begins at $310. RX 6700 XT averages were mostly above $300, although GPU Poet recorded a best November day of $291 for its three-lowest-listing average. Current Arc B580 figures ran from a $399 eBay-listing average upward.',
          },
          {
            q: 'RTX 3060 or RX 6700 XT for local LLMs?',
            a: 'Both have 12 GB. We prefer the RTX 3060, mainly for software: Ollama lists it as supported through CUDA. Our RTX 3060 prices are completed sales and our RX 6700 XT figures are mostly listings, so we do not rank the two on price. The Ollama ROCm list we checked does not name the RX 6700 XT; Ollama also offers Vulkan support, so check the current docs.',
          },
          {
            q: 'Should I buy an RTX 3060 with less than 12GB?',
            a: 'No, not for this purpose. Buy the 12 GB version: less memory leaves much less room for the model and its context. Confirm the memory size in the listing before you pay.',
          },
          {
            q: 'Can a GPU under $300 run a 70B model?',
            a: 'Not fully on the card. A 70B model at Q4 needs roughly 40 GB of memory. A 10 or 12 GB card would have to move most of it to system RAM, which is much slower.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best GPU Under $500 for Local LLMs](/local-llms/best-gpu-for-llm-inference-under-500-2026): used RTX 3060 12GB first, Arc B580 second, used RX 7800 XT third (editorial)',
          '[Which GPU Near $600 for Local LLMs?](/prompt-bites/best-gpu-under-600-local-llm): an RTX 4060 Ti 16GB only if you find it near $600 (editorial)',
          '[Best Ollama Models for RTX 3060 12GB](/prompt-bites/best-ollama-models-rtx-3060-12gb): what to run once you have the card',
          '[GPU Buying Guide for Local LLMs](/power-local-llm/best-gpu-buying-guide-local-llm-2026): options across other budgets',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-de.webp',
    title: 'RTX 3060 12GB für lokale LLMs: noch unter 300 $? (2026)',
    seoTitle: 'RTX 3060 12GB für lokale LLMs: unter 300 $ in 2026?',
    metaDescription: 'Gebraucht wurde die RTX 3060 12GB in den USA für 310–350 $ verkauft. Unter 300 $ fanden wir datiert die neue Arc B570 10GB. Mit Preisquellen.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'Budget-Käufer, die eine erste GPU für lokale LLM-Inferenz suchen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**Für keine der geprüften 12-GB-Karten fanden wir einen aktuellen US-Preis unter 300 $.** Eine gebrauchte RTX 3060 12GB wurde für 310–350 $ (Median 330 $) verkauft: 209 abgeschlossene Verkäufe bei eBay USA, 17.–26. November 2026, ohne Versand ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Die Karte mit mindestens 10 GB, die wir datiert unter 300 $ belegen konnten, ist die neue Intel Arc B570 10GB: 279,99–289,99 $ bei den günstigsten US-Händlern in der [Liste von PC Gamer vom 28. November](https://www.pcgamer.com/black-friday-graphics-card-deals/), in der Black-Friday-Woche. Bei festem Limit von 300 $ ist die B570 unsere redaktionelle Wahl; wenn etwa 310–350 $ möglich sind, ziehen wir die gebrauchte RTX 3060 12GB vor. Beide Karten haben wir nicht gebenchmarkt.',
    toc: [
      { label: 'Unsere Wahl unter 300 $', anchor: '#best-pick' },
      { label: 'Preise und Karten im Vergleich', anchor: '#comparison' },
      { label: 'Welche Modelle passen?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro: 'Diese Seite nennt nur US-Preise, keine Euro-Preise für den deutschsprachigen Markt, und keine Umrechnung. Jeder Preis ist als abgeschlossener Verkauf, Händlerpreis oder Angebotspreis mit Datum gekennzeichnet; diese Arten sind nicht direkt vergleichbar. Preise ändern sich täglich, besonders in der Black-Friday-Woche.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste GPU unter 300 $ für lokale LLMs?',
        answer: 'Bei einem festen Limit von 300 $ ist unsere redaktionelle Wahl die neue Intel Arc B570 10GB, am 27.–28. November 2026 bei US-Händlern für 279,99–289,99 $ gelistet. Für 12-GB-Karten fanden wir keinen aktuellen Preis unter 300 $. Die gebrauchte RTX 3060 12GB, unsere bevorzugte 12-GB-Option, wurde bei eBay USA für 310–350 $ verkauft.',
        bullets: [
          'Arc B570 10GB (neu): 279,99–289,99 $ bei den günstigsten US-Händlern in der Black-Friday-Woche; andere Angebote kosten mehr.',
          'Gebrauchte RTX 3060 12GB: verkauft für 310–350 $ (Median 330 $), 17.–26. November 2026, ohne Versand.',
          'Arc B580 12GB: Die Preisquellen vom November widersprechen sich; keine geprüfte aktuelle Zahl liegt unter 300 $.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Keine geprüfte 12-GB-Karte hat einen aktuellen US-Preis unter 300 $',
          'Festes Limit 300 $: neue Arc B570 10GB, unsere redaktionelle Wahl (279,99–289,99 $, 27.–28. November 2026)',
          'Etwas mehr Budget: Die gebrauchte RTX 3060 12GB (verkauft 310–350 $) ist unsere bevorzugte 12-GB-Karte',
          '10 GB sind für ein 14B-Modell in Q4 knapp; keine dieser Karten fasst ein 70B-Modell',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wir fanden aktuell keine 12-GB-Karte unter 300 $; bei festem Limit wählen wir die neue Arc B570 10GB, bei etwas mehr Budget die gebrauchte RTX 3060 12GB (verkauft 310–350 $).',
          },
          { type: 'plain-terms', text: 'Mit einer harten Grenze von 300 $ verzichten Sie auf 2 GB Grafikspeicher. Mit 10–50 $ mehr bietet eine gebrauchte RTX 3060 12GB mehr Platz für größere Modelle.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Unter 300 $: Arc B570 10GB. Knapp darüber: RTX 3060 12GB',
        content: [
          '<strong>Bei einem festen Limit von 300 $ ist unsere redaktionelle Wahl die neue Intel Arc B570 10GB.</strong> Die <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">am 28. November aktualisierte Liste von PC Gamer</a> zeigte 279,99 $ bei Newegg (mit zusätzlichem Rabatt nach Anmeldung) und 289,99 $ bei Walmart, daneben 307,49 $ bei Best Buy und 313,49 $ bei Amazon. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> nannte am 27. November 289 $ als besten US-Preis. Ein anderes, von <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> verfolgtes Amazon-Angebot kostete an diesem Tag 429,97 $. Das sind Preise der Black-Friday-Woche; prüfen Sie vor dem Kauf den Endbetrag.',
          'Die Grenze der B570 ist der Speicher. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama führt Qwen 2.5 14B</a> mit 9,0 GB, die 7B-Version mit 4,7 GB. Auf einer 10-GB-Karte bleiben neben 9,0 GB nur rund 1 GB für Kontext und Overhead; planen Sie die B570 daher für 7B–8B-Modelle. Zur Software: Die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">GPU-Dokumentation von Ollama</a> beschreibt zusätzliche GPU-Unterstützung unter Windows und Linux über Vulkan; unter Linux sind Intels Treiberkomponenten nötig. Die <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">SYCL-Dokumentation von llama.cpp</a> führt die Arc-B-Serie auf und nennt in der Tabelle die B580. Beginnen Sie keine neue Installation mit IPEX-LLM: Intel hat das <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">Projekt archiviert</a>, und der Hinweis nennt bekannte Sicherheitsprobleme. Wir haben die B570 nicht getestet.',
          '<strong>Wenn Sie knapp über 300 $ gehen können, ziehen wir die gebrauchte RTX 3060 12GB vor.</strong> Sie wurde für 310–350 $ (Median 330 $) verkauft: 209 abgeschlossene Verkäufe bei eBay USA, 17.–26. November 2026, ohne Versand (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM-Ratgeber zu gebrauchten GPUs</a>). Das sind 10–50 $ über diesem Budget, ohne Versand. Sie erhalten 12 GB VRAM und CUDA, und die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama-GPU-Dokumentation</a> führt die RTX 3060 als unterstützt. Das ist eine redaktionelle Entscheidung. Gebrauchte Karten haben ein Zustands- und Garantierisiko; testen Sie innerhalb der Rückgabefrist.',
          'Weitere Karten nahe der Grenze ändern unser Ergebnis nicht. Eine gebrauchte RTX 3060 Ti 8GB hatte am 7. November einen Median-Angebotspreis von genau 300,00 $ (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>), bei nur 8 GB. Neue 8-GB-Karten lagen am 27. November laut <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> über 300 $: RTX 5050 ab 419 $, RX 7600 ab 389 $. Manche Ratgeber nennen ältere Gebrauchtkarten unter 300 $ ohne Datum oder Verkaufsbasis; diese Zahlen verwenden wir nicht.',
          'Achten Sie beim Kauf einer RTX 3060 darauf, dass das Angebot 12 GB nennt. Es gibt Versionen mit weniger Speicher, die deutlich weniger Platz für ein Modell lassen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Intel Arc B570 10GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.kleinanzeigen.de/s-pc-zubehoer-software/grafikkarten/rtx-3060-12gb/k0c225+pc_zubehoer_software.art_s:grafikkarten',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Gebrauchte RTX 3060 12GB auf Kleinanzeigen prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'RX 6700 XT Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Intel Arc B580 12GB Preis bei Amazon.de prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT und Arc B580 im Vergleich',
        content: [
          '<strong>Die Preisspalte mischt Verkäufe, Händlerpreise und Angebotspreise, jeweils gekennzeichnet; sie ist kein direkter Vergleich.</strong> RX 6700 XT: <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> zeigte einen Durchschnitt erfasster eBay-Angebote von 371 $ (faire Angebotsspanne 343–377 $, 28. November), <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> einen Median-Angebotspreis von 425 $ (7. November). Der November-Mittelwert der drei günstigsten Tagesangebote bei <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a> lag bei 330 $, am besten Tag bei 291 $; einzelne Angebote unter 300 $ kommen also vor.',
          'Arc B580 12GB: <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> zeigte 729 $ als besten US-Preis (27. November), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> 851,16 $ neu bei Amazon USA und 499 $ gebraucht bei eBay (27. November), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> einen niedrigsten November-Mittelwert aus eBay-Angeboten von 399 $ (aktuell 431 $). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> nannte sie am 28. November bei seriösen Händlern nicht verfügbar. Der Startpreis von 249 $ ist kein aktueller Preis.',
        ],
        columns: ['GPU', 'VRAM', 'US-Preis und Basis', 'Software', 'Unsere Sicht'],
        rows: [
          { GPU: 'Arc B570 (neu)', VRAM: '10 GB', 'US-Preis und Basis': '279,99–289,99 $ Handel, 27.–28.11.', Software: 'Vulkan / SYCL', 'Unsere Sicht': 'Wahl bei festem Limit' },
          { GPU: 'RTX 3060 (gebr.)', VRAM: '12 GB', 'US-Preis und Basis': '310–350 $ verkauft, 17.–26.11.', Software: 'CUDA', 'Unsere Sicht': 'Bevorzugte 12-GB-Karte' },
          { GPU: 'RX 6700 XT (gebr.)', VRAM: '12 GB', 'US-Preis und Basis': '371 $ Angebotsschnitt, 28.11.', Software: 'Vulkan prüfen', 'Unsere Sicht': 'Meist über 300 $' },
          { GPU: 'Arc B580', VRAM: '12 GB', 'US-Preis und Basis': '399–851 $, Quellen uneinig', Software: 'Vulkan / SYCL', 'Unsere Sicht': 'Nicht unter 300 $ belegt' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Welche Modelle passen in 10 GB und 12 GB?',
        columns: ['Modellgröße', '12-GB-Karte', '10-GB-Karte'],
        rows: [
          {
            Modellgröße: '7B–8B (Q4)',
            '12-GB-Karte': '🟢 Passt',
            '10-GB-Karte': '🟢 Passt',
          },
          {
            Modellgröße: '14B (Q4)',
            '12-GB-Karte': '🟢 Passt',
            '10-GB-Karte': '🟡 Sehr knapp',
          },
          {
            Modellgröße: '20B und mehr',
            '12-GB-Karte': '🟡 Oft zu groß',
            '10-GB-Karte': '🔴 Meist zu groß',
          },
          {
            Modellgröße: '70B',
            '12-GB-Karte': '🔴 Nein',
            '10-GB-Karte': '🔴 Nein',
          },
        ],
        content: [
          'Das sind Kapazitätsschätzungen, keine Testergebnisse. Die <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama-Bibliothek</a> führt Qwen 2.5 7B mit 4,7 GB und 14B mit 9,0 GB; Kontext und Overhead brauchen zusätzlichen Speicher. Ein 70B-Modell in Q4 benötigt rund 40 GB, weit mehr als eine dieser Karten bietet.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu GPUs unter 300 $ für lokale LLMs',
        faqs: [
          {
            q: 'Ist eine gebrauchte RTX 3060 12GB noch unter 300 $ zu haben?',
            a: 'Nicht nach den Verkaufsdaten, die wir nutzen. Sie wurde für 310–350 $ (Median 330 $) verkauft: 209 abgeschlossene Verkäufe bei eBay USA vom 17. bis 26. November 2026, ohne Versand (InsiderLLM). Einzelne Angebote können abweichen; prüfen Sie den Gesamtpreis mit Versand.',
          },
          {
            q: 'Gibt es eine 12-GB-GPU unter 300 $?',
            a: 'Mit aktuellen, datierten Belegen konnten wir das nicht zeigen. Die von InsiderLLM genannte Verkaufsspanne der gebrauchten RTX 3060 beginnt bei 310 $. Die Durchschnitte der RX 6700 XT lagen meist über 300 $, auch wenn GPU Poet für seinen Mittelwert der drei günstigsten Angebote am besten Novembertag 291 $ erfasste. Aktuelle Zahlen zur Arc B580 begannen bei einem eBay-Angebotsmittel von 399 $.',
          },
          {
            q: 'RTX 3060 oder RX 6700 XT für lokale LLMs?',
            a: 'Beide haben 12 GB. Wir ziehen die RTX 3060 vor, vor allem wegen der Software: Ollama führt sie als über CUDA unterstützt. Zur RTX 3060 haben wir Verkaufspreise, zur RX 6700 XT meist Angebote; nach Preis ordnen wir beide daher nicht. Die geprüfte ROCm-Liste von Ollama nennt die RX 6700 XT nicht; Ollama bietet auch Vulkan-Unterstützung, prüfen Sie also die aktuelle Dokumentation.',
          },
          {
            q: 'Soll ich eine RTX 3060 mit weniger als 12 GB kaufen?',
            a: 'Nein, nicht für diesen Zweck. Kaufen Sie die 12-GB-Version: Weniger Speicher lässt deutlich weniger Platz für Modell und Kontext. Prüfen Sie die Speichergröße im Angebot vor dem Bezahlen.',
          },
          {
            q: 'Kann eine GPU unter 300 $ ein 70B-Modell ausführen?',
            a: 'Nicht vollständig auf der Karte. Ein 70B-Modell in Q4 braucht rund 40 GB Speicher. Eine Karte mit 10 oder 12 GB müsste das meiste in den Arbeitsspeicher auslagern, was viel langsamer ist.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste GPU unter 500 $ für lokale LLMs](/de/local-llms/best-gpu-for-llm-inference-under-500-2026): gebrauchte RTX 3060 12GB vorn, Arc B580 auf Platz zwei, gebrauchte RX 7800 XT auf Platz drei (redaktionell)',
          '[Welche GPU um 600 $ für lokale LLMs?](/de/prompt-bites/best-gpu-under-600-local-llm): eine RTX 4060 Ti 16GB nur, wenn Sie sie nahe 600 $ finden (redaktionell)',
          '[Beste Ollama-Modelle für RTX 3060 12GB](/de/prompt-bites/best-ollama-models-rtx-3060-12gb): was nach dem Kauf läuft',
          '[GPU-Kaufberatung für lokale LLMs](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026): Optionen für andere Budgets',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-fr.webp',
    title: 'RTX 3060 12 Go pour LLM locaux : encore sous 300 $ ? (2026)',
    seoTitle: 'RTX 3060 12 Go et LLM local : sous 300 $ en 2026 ?',
    metaDescription: 'D’occasion, la RTX 3060 12 Go s’est vendue 310–350 $ aux États-Unis. Sous 300 $, nous datons l’Arc B570 10 Go neuve. Prix sourcés et modèles compatibles.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs à budget limité choisissant une première GPU pour l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**Aucune carte 12 Go vérifiée n’affiche un prix américain actuel sous 300 $.** La RTX 3060 12 Go d’occasion s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay aux États-Unis, du 17 au 26 novembre 2026, hors livraison ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). La carte d’au moins 10 Go que nous pouvons dater sous 300 $ est l’Intel Arc B570 10 Go neuve : 279,99–289,99 $ chez les revendeurs américains les moins chers dans la [liste de PC Gamer du 28 novembre](https://www.pcgamer.com/black-friday-graphics-card-deals/), pendant la semaine du Black Friday. Si 300 $ est un plafond ferme, la B570 est notre choix éditorial ; si vous pouvez monter à environ 310–350 $, nous préférons la RTX 3060 12 Go d’occasion. Nous n’avons testé les performances d’aucune des deux.',
    toc: [
      { label: 'Notre choix sous 300 $', anchor: '#best-pick' },
      { label: 'Prix et cartes comparés', anchor: '#comparison' },
      { label: 'Quels modèles tiennent ?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro: 'Cette page n’utilise que des prix américains, sans conversion en euros : nous n’avons pas de données datées pour le marché français. Chaque prix est indiqué comme vente conclue, prix de revendeur ou prix demandé, avec sa date ; ces bases ne se comparent pas directement. Les prix changent chaque jour, surtout pendant la semaine du Black Friday.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur GPU à moins de 300 $ pour les LLM locaux ?',
        answer: 'Avec un plafond ferme de 300 $, notre choix éditorial est l’Intel Arc B570 10 Go neuve, relevée à 279,99–289,99 $ chez des revendeurs américains les 27 et 28 novembre 2026. Nous n’avons trouvé aucun prix actuel sous 300 $ pour une carte 12 Go. La RTX 3060 12 Go d’occasion, notre option 12 Go préférée, s’est vendue 310–350 $ sur eBay aux États-Unis.',
        bullets: [
          'Arc B570 10 Go (neuve) : 279,99–289,99 $ chez les revendeurs américains les moins chers pendant la semaine du Black Friday ; d’autres offres coûtent plus.',
          'RTX 3060 12 Go d’occasion : vendue 310–350 $ (médiane 330 $), du 17 au 26 novembre 2026, hors livraison.',
          'Arc B580 12 Go : les sources de novembre se contredisent, et aucun chiffre actuel vérifié n’est sous 300 $.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucune carte 12 Go vérifiée n’a de prix américain actuel sous 300 $',
          'Plafond ferme de 300 $ : Arc B570 10 Go neuve, notre choix éditorial (279,99–289,99 $, 27–28 novembre 2026)',
          'Avec un peu plus de budget, nous préférons la RTX 3060 12 Go d’occasion (vendue 310–350 $)',
          '10 Go sont justes pour un modèle 14B en Q4 ; aucune de ces cartes ne contient un 70B',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nous n’avons trouvé aucune carte 12 Go actuellement sous 300 $ ; avec ce plafond, nous choisissons l’Arc B570 10 Go neuve, et avec plus de budget la RTX 3060 12 Go d’occasion (vendue 310–350 $).',
          },
          {
            type: 'plain-terms',
            text: 'Avec un plafond strict de 300 $, vous renoncez à 2 Go de mémoire graphique. Avec 10 à 50 $ de plus, une RTX 3060 12 Go d’occasion laisse plus de place aux grands modèles.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Sous 300 $ : Arc B570. Juste au-dessus : RTX 3060 12 Go',
        content: [
          '<strong>Avec un plafond ferme de 300 $, notre choix éditorial est l’Intel Arc B570 10 Go neuve.</strong> La <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">liste de PC Gamer mise à jour le 28 novembre</a> indiquait 279,99 $ chez Newegg (avec une remise supplémentaire après connexion) et 289,99 $ chez Walmart, à côté de 307,49 $ chez Best Buy et 313,49 $ chez Amazon. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> donnait 289 $ comme meilleur prix américain le 27 novembre. Une autre offre Amazon suivie par <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> coûtait 429,97 $ ce jour-là. Ce sont des prix de la semaine du Black Friday : vérifiez le total au paiement.',
          'La limite de la B570 est sa mémoire. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama liste Qwen 2.5 14B</a> à 9,0 Go et la version 7B à 4,7 Go. Sur une carte de 10 Go, un modèle de 9,0 Go laisse environ 1 Go pour le contexte et les besoins annexes ; prévoyez la B570 pour des modèles 7B–8B. Côté logiciel, la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentation GPU d’Ollama</a> décrit une prise en charge supplémentaire sous Windows et Linux via Vulkan ; Linux exige les composants de pilote d’Intel. La <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentation SYCL de llama.cpp</a> cite la série Arc B et nomme la B580 dans son tableau. Ne démarrez pas une nouvelle installation avec IPEX-LLM : Intel a <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archivé le projet</a> et son avis mentionne des failles de sécurité connues. Nous n’avons pas testé la B570.',
          '<strong>Si vous pouvez dépasser un peu 300 $, nous préférons la RTX 3060 12 Go d’occasion.</strong> Elle s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay aux États-Unis, du 17 au 26 novembre 2026, hors livraison (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">guide InsiderLLM des GPU d’occasion</a>). C’est 10 à 50 $ au-dessus de ce budget, hors livraison. Vous obtenez 12 Go de VRAM et CUDA, et la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentation GPU d’Ollama</a> indique la RTX 3060 comme prise en charge. C’est un choix éditorial. L’occasion comporte un risque sur l’état et la garantie : testez la carte pendant le délai de retour.',
          'Les autres cartes proches du seuil ne changent pas notre résultat. La RTX 3060 Ti 8 Go d’occasion avait un prix demandé médian d’exactement 300,00 $ le 7 novembre (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>), avec seulement 8 Go. Les cartes 8 Go neuves dépassaient 300 $ chez <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> le 27 novembre : RTX 5050 dès 419 $, RX 7600 dès 389 $. Certains guides citent d’anciennes cartes d’occasion sous 300 $ sans date ni base de vente ; nous n’utilisons pas ces chiffres.',
          'Pour une RTX 3060, vérifiez que l’annonce indique 12 Go. Des versions avec moins de mémoire existent et laissent beaucoup moins de place au modèle.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l’Arc B570 10 Go sur Amazon.fr',
          },
          {
            url: 'https://www.leboncoin.fr/recherche?text=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Vérifier les prix de la RTX 3060 12 Go sur leboncoin',
          },
          {
            url: 'https://www.amazon.fr/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Vérifier le prix de la RX 6700 XT sur Amazon.fr',
          },
          {
            url: 'https://www.amazon.fr/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l’Arc B580 12 Go sur Amazon.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT et Arc B580 comparées',
        content: [
          '<strong>La colonne des prix mélange ventes conclues, prix de revendeurs et prix demandés, chacun étant précisé ; la comparaison n’est pas directe.</strong> RX 6700 XT : <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> affichait une moyenne de 371 $ sur les annonces eBay suivies (fourchette demandée jugée juste 343–377 $, 28 novembre) et <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> une médiane demandée de 425 $ (7 novembre). La moyenne de novembre des trois annonces quotidiennes les moins chères chez <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a> était de 330 $, avec un meilleur jour à 291 $ : des annonces isolées sous 300 $ peuvent donc apparaître.',
          'Arc B580 12 Go : <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> indiquait 729 $ comme meilleur prix américain (27 novembre), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> 851,16 $ neuve sur Amazon US et 499 $ d’occasion sur eBay (27 novembre), et <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> une moyenne basse de 399 $ en novembre sur des annonces eBay (431 $ actuellement). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> la disait indisponible chez les vendeurs fiables (28 novembre). Son prix de lancement de 249 $ n’est pas un prix actuel.',
        ],
        columns: ['GPU', 'VRAM', 'Prix US et base', 'Logiciel', 'Notre avis'],
        rows: [
          { GPU: 'Arc B570 (neuve)', VRAM: '10 Go', 'Prix US et base': '279,99–289,99 $ magasin, 27–28/11', Logiciel: 'Vulkan / SYCL', 'Notre avis': 'Choix si plafond ferme' },
          { GPU: 'RTX 3060 (occ.)', VRAM: '12 Go', 'Prix US et base': '310–350 $ vendu, 17–26/11', Logiciel: 'CUDA', 'Notre avis': '12 Go préférée' },
          { GPU: 'RX 6700 XT (occ.)', VRAM: '12 Go', 'Prix US et base': '371 $ moy. annonces, 28/11', Logiciel: 'Vulkan à vérifier', 'Notre avis': 'Surtout au-dessus' },
          { GPU: 'Arc B580', VRAM: '12 Go', 'Prix US et base': '399–851 $, sources divergentes', Logiciel: 'Vulkan / SYCL', 'Notre avis': 'Pas prouvée sous 300 $' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Quels modèles tiennent dans 10 Go et 12 Go ?',
        columns: ['Taille du modèle', 'Carte 12 Go', 'Carte 10 Go'],
        rows: [
          {
            'Taille du modèle': '7B–8B (Q4)',
            'Carte 12 Go': '🟢 Tient',
            'Carte 10 Go': '🟢 Tient',
          },
          {
            'Taille du modèle': '14B (Q4)',
            'Carte 12 Go': '🟢 Tient',
            'Carte 10 Go': '🟡 Très juste',
          },
          {
            'Taille du modèle': '20B et plus',
            'Carte 12 Go': '🟡 Souvent trop gros',
            'Carte 10 Go': '🔴 Trop gros en général',
          },
          {
            'Taille du modèle': '70B',
            'Carte 12 Go': '🔴 Non',
            'Carte 10 Go': '🔴 Non',
          },
        ],
        content: [
          'Ce sont des estimations de capacité, pas des résultats de tests. La <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">bibliothèque Ollama</a> liste Qwen 2.5 7B à 4,7 Go et le 14B à 9,0 Go ; le contexte et les besoins annexes demandent de la mémoire en plus. Un modèle 70B en Q4 exige environ 40 Go, bien au-delà d’une de ces cartes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les GPU sous 300 $ pour les LLM locaux',
        faqs: [
          {
            q: 'La RTX 3060 12 Go d’occasion est-elle encore sous 300 $ ?',
            a: 'Pas selon les ventes que nous utilisons. Elle s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay aux États-Unis du 17 au 26 novembre 2026, hors livraison (InsiderLLM). Une annonce isolée peut différer : vérifiez le total avec la livraison.',
          },
          {
            q: 'Existe-t-il un GPU 12 Go sous 300 $ ?',
            a: 'Nous n’avons pas pu le montrer avec des preuves actuelles et datées. La fourchette de vente d’InsiderLLM pour la RTX 3060 d’occasion commence à 310 $. Les moyennes de la RX 6700 XT dépassaient surtout 300 $, même si GPU Poet a relevé un meilleur jour de novembre à 291 $ pour sa moyenne des trois annonces les moins chères. Les chiffres actuels de l’Arc B580 partaient d’une moyenne d’annonces eBay de 399 $.',
          },
          {
            q: 'RTX 3060 ou RX 6700 XT pour les LLM locaux ?',
            a: 'Les deux ont 12 Go. Nous préférons la RTX 3060, surtout pour le logiciel : Ollama l’indique comme prise en charge via CUDA. Nos prix de RTX 3060 sont des ventes et ceux de la RX 6700 XT surtout des annonces ; nous ne les classons donc pas selon le prix. La liste ROCm d’Ollama consultée ne cite pas la RX 6700 XT ; Ollama propose aussi Vulkan, vérifiez donc la documentation actuelle.',
          },
          {
            q: 'Faut-il acheter une RTX 3060 avec moins de 12 Go ?',
            a: 'Non, pas pour cet usage. Prenez la version 12 Go : avec moins de mémoire, il reste beaucoup moins de place pour le modèle et son contexte. Vérifiez la capacité dans l’annonce avant de payer.',
          },
          {
            q: 'Un GPU sous 300 $ peut-il faire tourner un modèle 70B ?',
            a: 'Pas entièrement sur la carte. Un modèle 70B en Q4 demande environ 40 Go de mémoire. Une carte de 10 ou 12 Go devrait en déplacer la plus grande partie vers la RAM, ce qui est bien plus lent.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur GPU à moins de 500 $ pour LLM locaux](/fr/local-llms/best-gpu-for-llm-inference-under-500-2026) : RTX 3060 12 Go d’occasion en tête, Arc B580 deuxième, RX 7800 XT d’occasion troisième (choix éditorial)',
          '[Quel GPU autour de 600 $ pour les LLM locaux ?](/fr/prompt-bites/best-gpu-under-600-local-llm) : une RTX 4060 Ti 16 Go seulement si vous la trouvez près de 600 $ (choix éditorial)',
          '[Meilleurs modèles Ollama pour RTX 3060 12 Go](/fr/prompt-bites/best-ollama-models-rtx-3060-12gb) : que lancer une fois la carte en main',
          '[Guide d’achat GPU pour LLM locaux](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) : les options pour d’autres budgets',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ja.webp',
    title: 'RTX 3060 12GBでローカルLLM：今も300ドル以下で買えるのか（2026年版）',
    seoTitle: 'RTX 3060 12GBでローカルLLM：300ドル以下？2026',
    metaDescription: '中古RTX 3060 12GBの米国成約価格は310〜350ドルで300ドル超。300ドル以下では新品Arc B570 10GBを日付付きで確認しました。価格の出典と動くモデルを紹介します。',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLM推論向けに最初のGPUを選ぶ予算重視の購入者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**確認した12GBカードに、現在の米国価格が300ドル未満のものはありませんでした。** 中古RTX 3060 12GBは、2026年11月17〜26日のeBay米国の成約209件で310〜350ドル（中央値330ドル、送料別）でした（[InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。10GB以上で300ドル以下を日付付きで確認できたのは新品のIntel Arc B570 10GBです。[PC Gamerの11月28日の一覧](https://www.pcgamer.com/black-friday-graphics-card-deals/)では、米国の安い販売店で279.99〜289.99ドル（ブラックフライデー週）でした。300ドルが上限ならB570が当サイトの編集上の選択です。310〜350ドル程度まで出せるなら、中古RTX 3060 12GBを推します。どちらもベンチマークは実施していません。',
    toc: [
      { label: '300ドル以下の選択', anchor: '#best-pick' },
      { label: '価格とカードの比較', anchor: '#comparison' },
      { label: '収まるモデルは？', anchor: '#model-guide' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro: 'このページの価格はすべて米国のもので、円換算はしていません。日本国内の日付付きデータがないためです。各価格には、成約価格・販売店価格・出品価格の区別と日付を付けています。これらは同じ基準では比べられません。価格は毎日変わり、特にブラックフライデー週は変動が大きくなります。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLM向けで300ドル以下の最適なGPUは？',
        answer: '300ドルが絶対の上限なら、当サイトの編集上の選択は新品のIntel Arc B570 10GBです。2026年11月27〜28日に米国の販売店で279.99〜289.99ドルでした。12GBカードで現在300ドル未満の価格は見つかりませんでした。推奨する12GBの中古RTX 3060は、eBay米国で310〜350ドルで成約しています。',
        bullets: [
          'Arc B570 10GB（新品）：ブラックフライデー週の米国最安クラスで279.99〜289.99ドル。ほかの出品はより高額です。',
          '中古RTX 3060 12GB：2026年11月17〜26日の成約は310〜350ドル（中央値330ドル、送料別）。',
          'Arc B580 12GB：11月の価格情報は食い違い、確認した現在の数値に300ドル未満はありません。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '確認した12GBカードに、現在300ドル未満の米国価格はありません',
          '上限300ドル：新品Arc B570 10GBが編集上の選択（279.99〜289.99ドル、2026年11月27〜28日）',
          '少し予算を足せるなら、中古RTX 3060 12GB（成約310〜350ドル）を推します',
          '10GBはQ4の14Bモデルにはかなり窮屈です。70Bはどのカードにも収まりません',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '現在300ドル未満の12GBカードは見つからず、上限が300ドルなら新品Arc B570 10GB、少し出せるなら中古RTX 3060 12GB（成約310〜350ドル）を選びます。' },
          { type: 'plain-terms', text: '300ドルを厳守するとグラフィックメモリが2GB少なくなります。10〜50ドル足せれば、中古RTX 3060 12GBのほうが大きなモデルに余裕があります。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '300ドル以下ならArc B570、少し超えるならRTX 3060 12GB',
        content: [
          '<strong>300ドルが絶対の上限なら、当サイトの編集上の選択は新品のIntel Arc B570 10GBです。</strong><a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamerの11月28日更新の一覧</a>では、Neweggが279.99ドル（ログインで追加割引）、Walmartが289.99ドル、Best Buyが307.49ドル、Amazonが313.49ドルでした。<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>は11月27日の米国最安値を289ドルとしています。一方、<a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>が追跡する別のAmazon出品は同日429.97ドルでした。いずれもブラックフライデー週の価格なので、購入前に支払総額を確認してください。',
          'B570の弱点はメモリ容量です。<a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">OllamaのQwen 2.5 14B</a>は9.0GB、7B版は4.7GBです。10GBのカードに9.0GBのモデルを載せると、コンテキストなどに使える余裕は約1GBしかありません。B570は7B〜8B向けと考えてください。ソフト面では、<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">OllamaのGPUドキュメント</a>がWindowsとLinuxでのVulkanによる追加GPU対応を説明しています。LinuxではIntelのドライバー関連コンポーネントが必要です。<a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cppのSYCLドキュメント</a>はArc Bシリーズを挙げ、表ではB580を明記しています。新規構築でIPEX-LLMは使わないでください。Intelは<a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">プロジェクトをアーカイブ</a>し、告知では既知のセキュリティ問題に触れています。B570は当サイトでは未検証です。',
          '<strong>300ドルを少し超えてもよいなら、中古RTX 3060 12GBを推します。</strong>2026年11月17〜26日のeBay米国の成約209件で310〜350ドル（中央値330ドル、送料別）でした（<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLMの中古GPUガイド</a>）。送料を除いて予算を10〜50ドル超えます。12GBのVRAMとCUDAが使え、<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">OllamaのGPUドキュメント</a>はRTX 3060を対応GPUに挙げています。これは編集上の判断です。中古品は状態と保証にリスクがあるため、返品期間内に動作を確認してください。',
          '境目付近のほかのカードでも結論は変わりません。中古RTX 3060 Ti 8GBの出品価格の中央値は11月7日にちょうど300.00ドル（<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>）で、メモリは8GBだけです。新品の8GBカードは11月27日の<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>で300ドル超で、RTX 5050は419ドルから、RX 7600は389ドルからでした。日付や成約の根拠なしに古い中古カードを300ドル未満と紹介する情報は、ここでは使いません。',
          'RTX 3060を買うときは、出品に12GBと書かれているか確認してください。メモリの少ない版もあり、モデルに使える余裕が大きく減ります。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでArc B570 10GBの価格を確認する',
          },
          {
            url: 'https://www.sofmap.com/search_result.aspx?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'ソフマップで中古RTX 3060 12GBの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでRX 6700 XTの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでArc B580 12GBの価格を確認する',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570・RTX 3060・RX 6700 XT・Arc B580の比較',
        content: [
          '<strong>価格欄には成約価格・販売店価格・出品価格が混在します。基準は明記していますが、直接の比較はできません。</strong>RX 6700 XTは、<a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a>の追跡eBay出品の平均が371ドル（妥当とする出品価格帯343〜377ドル、11月28日）、<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>の出品中央値が425ドル（11月7日）でした。<a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a>の「毎日の安い3件の平均」は11月が330ドル、最安日が291ドルで、300ドル未満の出品が出ることはあります。',
          'Arc B580 12GBは、<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>の米国最安値が729ドル（11月27日）、<a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>では米Amazonの新品が851.16ドル、eBayの中古が499ドル（11月27日）、<a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>のeBay出品に基づく11月の最安平均は399ドル（現在431ドル）でした。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>は11月28日、信頼できる販売店では入手できないとしています。発売価格249ドルは現在の価格ではありません。',
        ],
        columns: ['GPU', 'VRAM', '米国価格と基準', 'ソフト', '評価'],
        rows: [
          { GPU: 'Arc B570（新品）', VRAM: '10GB', 米国価格と基準: '279.99〜289.99ドル 販売店 11/27〜28', ソフト: 'Vulkan / SYCL', 評価: '上限厳守なら選択' },
          { GPU: 'RTX 3060（中古）', VRAM: '12GB', 米国価格と基準: '310〜350ドル 成約 11/17〜26', ソフト: 'CUDA', 評価: '推奨の12GB' },
          { GPU: 'RX 6700 XT（中古）', VRAM: '12GB', 米国価格と基準: '371ドル 出品平均 11/28', ソフト: 'Vulkanを確認', 評価: '多くは300ドル超' },
          { GPU: 'Arc B580', VRAM: '12GB', 米国価格と基準: '399〜851ドル 情報が不一致', ソフト: 'Vulkan / SYCL', 評価: '300ドル未満は未確認' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '10GBと12GBに収まるモデルは？',
        columns: ['モデル規模', '12GBカード', '10GBカード'],
        rows: [
          {
            モデル規模: '7B〜8B（Q4）',
            '12GBカード': '🟢 収まる',
            '10GBカード': '🟢 収まる',
          },
          {
            モデル規模: '14B（Q4）',
            '12GBカード': '🟢 収まる',
            '10GBカード': '🟡 かなり窮屈',
          },
          {
            モデル規模: '20B以上',
            '12GBカード': '🟡 収まらないことが多い',
            '10GBカード': '🔴 ほぼ収まらない',
          },
          {
            モデル規模: '70B',
            '12GBカード': '🔴 不可',
            '10GBカード': '🔴 不可',
          },
        ],
        content: [
          'これは容量からの見積もりで、テスト結果ではありません。<a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollamaのライブラリ</a>ではQwen 2.5 7Bが4.7GB、14Bが9.0GBです。コンテキストなどには追加のメモリが必要です。Q4の70Bモデルは約40GBを要し、これらのカード1枚では大きく足りません。',
        ],
      },
      faq: {
        id: 'faq',
        title: '300ドル以下のローカルLLM向けGPUのよくある質問',
        faqs: [
          { q: '中古RTX 3060 12GBは今も300ドル以下ですか？', a: '当サイトが使う成約データでは違います。2026年11月17〜26日のeBay米国の成約209件で310〜350ドル（中央値330ドル、送料別）でした（InsiderLLM）。個別の出品は異なることがあるため、送料込みの総額を確認してください。' },
          { q: '300ドル以下の12GB GPUはありますか？', a: '現在の日付付きの根拠では示せませんでした。InsiderLLMが示す中古RTX 3060の成約価格帯は310ドルからです。RX 6700 XTの平均は多くが300ドル超ですが、GPU Poetの「安い3件の平均」は11月の最安日に291ドルでした。Arc B580の現在の数値は、eBay出品平均の399ドルが下限でした。' },
          {
            q: 'ローカルLLMにはRTX 3060とRX 6700 XTのどちらですか？',
            a: 'どちらも12GBです。当サイトは主にソフト面でRTX 3060を推します。OllamaがCUDA対応として挙げています。RTX 3060は成約価格、RX 6700 XTは主に出品価格のため、価格では順位を付けません。確認したOllamaのROCm対応一覧にRX 6700 XTはありません。OllamaはVulkanにも対応するので、最新のドキュメントを確認してください。',
          },
          { q: '12GB未満のRTX 3060を買ってもよいですか？', a: 'この用途にはおすすめしません。12GB版を選んでください。メモリが少ないと、モデルとコンテキストの余裕が大きく減ります。支払う前に出品の容量表示を確認してください。' },
          { q: '300ドル以下のGPUで70Bモデルは動きますか？', a: 'カード上だけでは動きません。Q4の70Bモデルには約40GBのメモリが必要です。10GBや12GBのカードでは大部分をシステムRAMに移すことになり、大幅に遅くなります。' },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[500ドル以下のローカルLLM向けGPU](/ja/local-llms/best-gpu-for-llm-inference-under-500-2026)：1位は中古RTX 3060 12GB、2位はArc B580、3位は中古RX 7800 XT（編集上の順位）',
          '[600ドル前後ならどのGPU？](/ja/prompt-bites/best-gpu-under-600-local-llm)：RTX 4060 Ti 16GBは600ドル近くで見つかる場合のみ（編集上の判断）',
          '[RTX 3060 12GB向けのOllamaモデル](/ja/prompt-bites/best-ollama-models-rtx-3060-12gb)：カードを手に入れたら試すモデル',
          '[ローカルLLM向けGPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)：ほかの予算の選択肢',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-zh.webp',
    title: 'RTX 3060 12GB跑本地LLM：还能在300美元以内买到吗？（2026年）',
    seoTitle: 'RTX 3060 12GB本地LLM：2026年还低于300美元吗？',
    metaDescription: '二手RTX 3060 12GB在美国的成交价为310–350美元，已超过300美元。300美元以内，我们查到有日期记录的是全新Arc B570 10GB。附价格来源与可运行的模型规模。',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: '为本地LLM推理选择第一张显卡的预算型买家',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**我们核查的12GB显卡中，没有一款当前美国价格低于300美元。** 二手RTX 3060 12GB在2026年11月17–26日的209笔eBay美国成交记录中为310–350美元（中位数330美元，不含运费，[InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。在10GB及以上显卡中，我们能用带日期的资料证明低于300美元的是全新Intel Arc B570 10GB：在[PC Gamer 11月28日的清单](https://www.pcgamer.com/black-friday-graphics-card-deals/)上，美国最便宜的零售商报价279.99–289.99美元（黑五周）。如果300美元是硬上限，B570是我们的编辑推荐；如果能加到约310–350美元，我们更推荐二手RTX 3060 12GB。两款我们都没有做过性能测试。',
    toc: [
      { label: '300美元以内的选择', anchor: '#best-pick' },
      { label: '价格与显卡对比', anchor: '#comparison' },
      { label: '能装下哪些模型？', anchor: '#model-guide' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    intro: '本页只使用美国价格，不做汇率换算，因为我们没有中国市场带日期的价格数据（包括二手平台）。每个价格都标明是成交价、零售价还是挂牌价，并附日期；这几类价格不能直接比较。价格每天都在变，黑五周尤其明显。',
    quickAnswerTop: {
      zh: {
        question: '300美元以内跑本地LLM最好的显卡是哪款？',
        answer: '如果300美元是硬上限，我们的编辑推荐是全新Intel Arc B570 10GB，2026年11月27–28日美国零售商报价279.99–289.99美元。我们没有查到当前低于300美元的12GB显卡价格。我们首选的12GB方案是二手RTX 3060 12GB，在eBay美国的成交价为310–350美元。',
        bullets: [
          'Arc B570 10GB（全新）：黑五周美国最低价零售商为279.99–289.99美元，其他报价更高。',
          '二手RTX 3060 12GB：2026年11月17–26日成交价310–350美元（中位数330美元，不含运费）。',
          'Arc B580 12GB：11月各价格来源不一致，我们核查的当前数据均不低于300美元。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '核查的12GB显卡中，没有当前美国价格低于300美元的',
          '硬上限300美元：全新Arc B570 10GB为编辑推荐（279.99–289.99美元，2026年11月27–28日）',
          '预算能多一点时，我们更推荐二手RTX 3060 12GB（成交价310–350美元）',
          '10GB跑Q4的14B模型很吃紧；这些显卡都装不下70B模型',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '我们没有查到当前低于300美元的12GB显卡；硬上限下选全新Arc B570 10GB，能多花一点则选二手RTX 3060 12GB（成交价310–350美元）。' },
          { type: 'plain-terms', text: '死守300美元，就要少2GB显存。如果能多花10–50美元，二手RTX 3060 12GB能为更大的模型留出更多空间。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '300美元以内选Arc B570，略超预算选二手RTX 3060 12GB',
        content: [
          '<strong>如果300美元是硬上限，我们的编辑推荐是全新Intel Arc B570 10GB。</strong><a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer 11月28日更新的清单</a>显示：Newegg为279.99美元（登录后另有折扣），Walmart为289.99美元，同时Best Buy为307.49美元，Amazon为313.49美元。<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>在11月27日列出的美国最低价为289美元。<a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>跟踪的另一条Amazon商品当天为429.97美元。这些是黑五周价格，下单前请核对实付总价。',
          'B570的短板是显存。<a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama中的Qwen 2.5 14B</a>为9.0GB，7B版为4.7GB。在10GB显卡上装9.0GB的模型，只剩约1GB给上下文和其他开销，因此B570应按7B–8B模型来规划。软件方面，<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama的GPU文档</a>说明在Windows和Linux上可通过Vulkan获得额外的GPU支持；Linux还需要Intel的驱动组件。<a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp的SYCL文档</a>列出了Arc B系列，表格中点名的是B580。新环境不要从IPEX-LLM开始：Intel已<a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">将该项目归档</a>，其声明提到存在已知安全问题。我们没有测试过B570。',
          '<strong>如果能略超300美元，我们更推荐二手RTX 3060 12GB。</strong>它在2026年11月17–26日的209笔eBay美国成交中为310–350美元（中位数330美元，不含运费，<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM二手显卡指南</a>）。不含运费就比本预算高10–50美元。它提供12GB显存和CUDA，<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama的GPU文档</a>将RTX 3060列为支持型号。这是编辑判断。二手卡存在成色和保修风险，请在退货期内完成测试。',
          '价格接近门槛的其他显卡不改变结论。二手RTX 3060 Ti 8GB在11月7日的挂牌中位价正好是300.00美元（<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>），但只有8GB。11月27日在<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>上，全新8GB显卡都超过300美元：RTX 5050起价419美元，RX 7600起价389美元。有些指南列出了低于300美元的老二手卡，却没有日期或成交依据，我们不采用这些数字。',
          '购买RTX 3060时，请确认商品页写明12GB。市面上有显存更小的版本，能留给模型的空间少得多。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: '在Amazon查看Arc B570 10GB价格',
          },
          {
            url: 'https://www.goofish.com/search?q=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: '在闲鱼查看二手RTX 3060 12GB价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: '在Amazon查看RX 6700 XT价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: '在Amazon查看Arc B580 12GB价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570、RTX 3060、RX 6700 XT与Arc B580对比',
        content: [
          '<strong>价格列混合了成交价、零售价和挂牌价，均已标注，因此不能直接比较。</strong>RX 6700 XT：<a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a>跟踪的eBay挂牌均价为371美元（其所称合理挂牌区间343–377美元，11月28日），<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>的挂牌中位价为425美元（11月7日）。<a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a>的“每日最低三条挂牌均价”11月为330美元，最低一天为291美元，因此偶尔会出现低于300美元的挂牌。',
          'Arc B580 12GB：<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>列出的美国最低价为729美元（11月27日）；<a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>显示美国Amazon全新851.16美元、eBay二手499美元（11月27日）；<a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>基于eBay挂牌的11月最低均价为399美元（当前431美元）。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>在11月28日称正规卖家无货。249美元是发售价，并非当前价格。',
        ],
        columns: ['显卡', '显存', '美国价格与口径', '软件', '我们的看法'],
        rows: [
          {
            显卡: 'Arc B570（全新）',
            显存: '10GB',
            美国价格与口径: '279.99–289.99美元 零售 11/27–28',
            软件: 'Vulkan / SYCL',
            我们的看法: '硬上限时首选',
          },
          {
            显卡: 'RTX 3060（二手）',
            显存: '12GB',
            美国价格与口径: '310–350美元 成交 11/17–26',
            软件: 'CUDA',
            我们的看法: '首选12GB卡',
          },
          {
            显卡: 'RX 6700 XT（二手）',
            显存: '12GB',
            美国价格与口径: '371美元 挂牌均价 11/28',
            软件: '确认Vulkan',
            我们的看法: '多数超300美元',
          },
          {
            显卡: 'Arc B580',
            显存: '12GB',
            美国价格与口径: '399–851美元 来源不一',
            软件: 'Vulkan / SYCL',
            我们的看法: '无法证明低于300',
          },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '10GB和12GB能装下哪些模型？',
        columns: ['模型规模', '12GB显卡', '10GB显卡'],
        rows: [
          {
            模型规模: '7B–8B（Q4）',
            '12GB显卡': '🟢 装得下',
            '10GB显卡': '🟢 装得下',
          },
          {
            模型规模: '14B（Q4）',
            '12GB显卡': '🟢 装得下',
            '10GB显卡': '🟡 非常吃紧',
          },
          {
            模型规模: '20B及以上',
            '12GB显卡': '🟡 常常装不下',
            '10GB显卡': '🔴 多数装不下',
          },
          {
            模型规模: '70B',
            '12GB显卡': '🔴 不行',
            '10GB显卡': '🔴 不行',
          },
        ],
        content: [
          '以上是按容量做的估计，并非测试结果。<a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama模型库</a>列出Qwen 2.5 7B为4.7GB、14B为9.0GB；上下文和其他开销还需要额外显存。Q4的70B模型大约需要40GB，远超单张此类显卡。',
        ],
      },
      faq: {
        id: 'faq',
        title: '300美元以内本地LLM显卡常见问题',
        faqs: [
          { q: '二手RTX 3060 12GB现在还低于300美元吗？', a: '按我们采用的成交数据，不是。2026年11月17–26日的209笔eBay美国成交为310–350美元（中位数330美元，不含运费，InsiderLLM）。单条商品可能不同，请核对含运费的总价。' },
          { q: '有没有低于300美元的12GB显卡？', a: '用当前带日期的资料，我们无法证明。InsiderLLM给出的二手RTX 3060成交价区间从310美元起。RX 6700 XT的均价多数高于300美元，不过GPU Poet的最低三条挂牌均价在11月最低一天为291美元。Arc B580当前数据最低是399美元的eBay挂牌均价。' },
          { q: '跑本地LLM选RTX 3060还是RX 6700 XT？', a: '两者都是12GB。我们更推荐RTX 3060，主要出于软件原因：Ollama将其列为通过CUDA支持的型号。RTX 3060的数据是成交价，RX 6700 XT的数据主要是挂牌价，因此我们不按价格给两者排序。我们查看的Ollama ROCm列表没有列出RX 6700 XT；Ollama也提供Vulkan支持，请查阅最新文档。' },
          { q: '可以买显存少于12GB的RTX 3060吗？', a: '就这一用途而言不建议。请买12GB版本：显存越少，留给模型和上下文的空间就越小。付款前请确认商品页标注的显存容量。' },
          { q: '300美元以内的显卡能运行70B模型吗？', a: '无法完全放进显卡。Q4的70B模型大约需要40GB内存。10GB或12GB显卡只能把大部分放到系统内存里，速度会慢很多。' },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[500美元以内本地LLM显卡](/zh/local-llms/best-gpu-for-llm-inference-under-500-2026)：第一为二手RTX 3060 12GB，第二为Arc B580，第三为二手RX 7800 XT（编辑排序）',
          '[600美元左右该选哪款显卡？](/zh/prompt-bites/best-gpu-under-600-local-llm)：仅当RTX 4060 Ti 16GB接近600美元时才选它（编辑观点）',
          '[适合RTX 3060 12GB的Ollama模型](/zh/prompt-bites/best-ollama-models-rtx-3060-12gb)：拿到显卡后可以运行什么',
          '[本地LLM显卡购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026)：其他预算的选择',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-es.webp',
    title: 'RTX 3060 12GB para LLM locales: ¿sigue bajo $300? (2026)',
    seoTitle: 'RTX 3060 12GB para LLM local: ¿bajo $300 en 2026?',
    metaDescription: 'La RTX 3060 12GB usada se vendió a $310–350 en EE. UU. Por debajo de $300 fechamos la Arc B570 10GB nueva. Consulta fuentes de precio y modelos.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores con presupuesto ajustado que eligen su primera GPU para inferencia de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**Ninguna tarjeta de 12 GB que revisamos tiene un precio actual en EE. UU. por debajo de $300.** La RTX 3060 12GB usada se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). La tarjeta de 10 GB o más que pudimos fechar por debajo de $300 es la Intel Arc B570 10GB nueva: $279.99–289.99 en las tiendas estadounidenses más baratas de la [lista de PC Gamer del 28 de noviembre](https://www.pcgamer.com/black-friday-graphics-card-deals/), en la semana del Black Friday. Si $300 es un límite firme, la B570 es nuestra elección editorial; si puedes subir a unos $310–350, preferimos la RTX 3060 12GB usada. No hemos hecho benchmarks de ninguna.',
    toc: [
      { label: 'Nuestra elección bajo $300', anchor: '#best-pick' },
      { label: 'Precios y tarjetas comparados', anchor: '#comparison' },
      { label: '¿Qué modelos caben?', anchor: '#model-guide' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro: 'Esta página usa solo precios de EE. UU., sin convertirlos: no tenemos datos fechados de España ni de Latinoamérica. Cada precio indica si es una venta cerrada, un precio de tienda o un precio pedido, con su fecha; no son directamente comparables. Los precios cambian a diario, sobre todo en la semana del Black Friday.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor GPU por menos de $300 para LLM locales?',
        answer: 'Si $300 es un límite firme, nuestra elección editorial es la Intel Arc B570 10GB nueva, registrada a $279.99–289.99 en tiendas de EE. UU. el 27 y 28 de noviembre de 2026. No encontramos ningún precio actual por debajo de $300 para una tarjeta de 12 GB. La RTX 3060 12GB usada, nuestra opción de 12 GB preferida, se vendió a $310–350 en eBay EE. UU.',
        bullets: [
          'Arc B570 10GB (nueva): $279.99–289.99 en las tiendas más baratas de EE. UU. en la semana del Black Friday; otras ofertas cuestan más.',
          'RTX 3060 12GB usada: vendida a $310–350 (mediana $330), 17–26 de noviembre de 2026, sin envío.',
          'Arc B580 12GB: las fuentes de noviembre discrepan y ninguna cifra actual revisada está por debajo de $300.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ninguna tarjeta de 12 GB revisada tiene un precio actual en EE. UU. por debajo de $300',
          'Límite firme de $300: Arc B570 10GB nueva, nuestra elección editorial ($279.99–289.99, 27–28 de noviembre de 2026)',
          'Con algo más de presupuesto, preferimos la RTX 3060 12GB usada (vendida a $310–350)',
          '10 GB van muy justos para un modelo 14B en Q4; ninguna de estas tarjetas contiene un 70B',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'No encontramos ninguna tarjeta de 12 GB actualmente por debajo de $300; con ese límite elegimos la Arc B570 10GB nueva y, con más presupuesto, la RTX 3060 12GB usada (vendida a $310–350).',
          },
          { type: 'plain-terms', text: 'Con un tope estricto de $300 renuncias a 2 GB de memoria gráfica. Si puedes añadir $10–50, una RTX 3060 12GB usada deja más espacio para modelos grandes.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Bajo $300: Arc B570. Un poco más: RTX 3060 12GB usada',
        content: [
          '<strong>Si $300 es un límite firme, nuestra elección editorial es la Intel Arc B570 10GB nueva.</strong> La <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">lista de PC Gamer actualizada el 28 de noviembre</a> mostraba $279.99 en Newegg (con un descuento extra al iniciar sesión) y $289.99 en Walmart, junto a $307.49 en Best Buy y $313.49 en Amazon. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> daba $289 como mejor precio en EE. UU. el 27 de noviembre. Otro anuncio de Amazon seguido por <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> costaba $429.97 ese día. Son precios de la semana del Black Friday: revisa el total antes de pagar.',
          'El límite de la B570 es la memoria. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama indica Qwen 2.5 14B</a> con 9.0 GB y la versión 7B con 4.7 GB. En una tarjeta de 10 GB, un modelo de 9.0 GB deja cerca de 1 GB para contexto y sobrecarga, así que planea la B570 para modelos 7B–8B. En software, la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentación de GPU de Ollama</a> describe soporte adicional en Windows y Linux mediante Vulkan; en Linux hacen falta los componentes de controlador de Intel. La <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentación SYCL de llama.cpp</a> incluye la serie Arc B y nombra la B580 en su tabla. No empieces una instalación nueva con IPEX-LLM: Intel ha <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archivado el proyecto</a> y su aviso menciona problemas de seguridad conocidos. No hemos probado la B570.',
          '<strong>Si puedes superar un poco los $300, preferimos la RTX 3060 12GB usada.</strong> Se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">guía de GPU usadas de InsiderLLM</a>). Son $10–50 por encima de este presupuesto, sin contar el envío. Obtienes 12 GB de VRAM y CUDA, y la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentación de GPU de Ollama</a> incluye la RTX 3060 como compatible. Es una decisión editorial. Una tarjeta usada tiene riesgo de estado y garantía: pruébala dentro del plazo de devolución.',
          'Otras tarjetas cercanas al límite no cambian nuestro resultado. La RTX 3060 Ti 8GB usada tenía una mediana de precio pedido de exactamente $300.00 el 7 de noviembre (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>), con solo 8 GB. Las nuevas de 8 GB superaban los $300 en <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> el 27 de noviembre: RTX 5050 desde $419 y RX 7600 desde $389. Algunas guías citan tarjetas usadas antiguas por menos de $300 sin fecha ni base de venta; no usamos esas cifras.',
          'Si compras una RTX 3060, comprueba que el anuncio diga 12 GB. Existen versiones con menos memoria, que dejan mucho menos espacio para el modelo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Consultar el precio de la Arc B570 10GB en Amazon.es',
          },
          {
            url: 'https://es.wallapop.com/search?keywords=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Consultar RTX 3060 12GB de segunda mano en Wallapop',
          },
          {
            url: 'https://www.amazon.es/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Consultar el precio de la RX 6700 XT en Amazon.es',
          },
          {
            url: 'https://www.amazon.es/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Consultar el precio de la Arc B580 12GB en Amazon.es',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT y Arc B580 comparadas',
        content: [
          '<strong>La columna de precios mezcla ventas cerradas, precios de tienda y precios pedidos, cada uno identificado; no es una comparación directa.</strong> RX 6700 XT: <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> mostraba un promedio de $371 de anuncios de eBay seguidos (rango pedido razonable $343–377, 28 de noviembre) y <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> una mediana pedida de $425 (7 de noviembre). El promedio de noviembre de los tres anuncios diarios más baratos en <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a> fue $330, con un mejor día de $291, así que pueden aparecer anuncios sueltos bajo $300.',
          'Arc B580 12GB: <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> mostraba $729 como mejor precio en EE. UU. (27 de noviembre), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> $851.16 nueva en Amazon EE. UU. y $499 usada en eBay (27 de noviembre) y <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> un promedio mínimo de noviembre de $399 con anuncios de eBay (cifra actual $431). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> la daba como no disponible en vendedores fiables (28 de noviembre). Su precio de lanzamiento de $249 no es un precio actual.',
        ],
        columns: ['GPU', 'VRAM', 'Precio EE. UU. y base', 'Software', 'Nuestra opinión'],
        rows: [
          { GPU: 'Arc B570 (nueva)', VRAM: '10 GB', 'Precio EE. UU. y base': '$279.99–289.99 tienda, 27–28/11', Software: 'Vulkan / SYCL', 'Nuestra opinión': 'Si el tope es firme' },
          { GPU: 'RTX 3060 (usada)', VRAM: '12 GB', 'Precio EE. UU. y base': '$310–350 vendida, 17–26/11', Software: 'CUDA', 'Nuestra opinión': '12 GB preferida' },
          { GPU: 'RX 6700 XT (usada)', VRAM: '12 GB', 'Precio EE. UU. y base': '$371 media anuncios, 28/11', Software: 'Revisar Vulkan', 'Nuestra opinión': 'Sobre todo más de $300' },
          { GPU: 'Arc B580', VRAM: '12 GB', 'Precio EE. UU. y base': '$399–851, fuentes discrepan', Software: 'Vulkan / SYCL', 'Nuestra opinión': 'Sin prueba bajo $300' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '¿Qué modelos caben en 10 GB y 12 GB?',
        columns: ['Tamaño del modelo', 'Tarjeta de 12 GB', 'Tarjeta de 10 GB'],
        rows: [
          {
            'Tamaño del modelo': '7B–8B (Q4)',
            'Tarjeta de 12 GB': '🟢 Cabe',
            'Tarjeta de 10 GB': '🟢 Cabe',
          },
          {
            'Tamaño del modelo': '14B (Q4)',
            'Tarjeta de 12 GB': '🟢 Cabe',
            'Tarjeta de 10 GB': '🟡 Muy justo',
          },
          {
            'Tamaño del modelo': '20B o más',
            'Tarjeta de 12 GB': '🟡 A menudo no cabe',
            'Tarjeta de 10 GB': '🔴 En general no cabe',
          },
          {
            'Tamaño del modelo': '70B',
            'Tarjeta de 12 GB': '🔴 No',
            'Tarjeta de 10 GB': '🔴 No',
          },
        ],
        content: [
          'Son estimaciones de capacidad, no resultados de pruebas. La <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">biblioteca de Ollama</a> indica 4.7 GB para Qwen 2.5 7B y 9.0 GB para 14B; el contexto y la sobrecarga requieren memoria adicional. Un modelo 70B en Q4 necesita unos 40 GB, mucho más que una de estas tarjetas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre GPU por menos de $300 para LLM locales',
        faqs: [
          {
            q: '¿Sigue la RTX 3060 12GB usada por debajo de $300?',
            a: 'No según las ventas que usamos. Se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU. del 17 al 26 de noviembre de 2026, sin envío (InsiderLLM). Un anuncio concreto puede variar: revisa el total con envío.',
          },
          {
            q: '¿Hay alguna GPU de 12 GB por menos de $300?',
            a: 'No pudimos demostrarlo con datos actuales y fechados. El rango de venta de InsiderLLM para la RTX 3060 usada empieza en $310. Los promedios de la RX 6700 XT estaban sobre todo por encima de $300, aunque GPU Poet registró $291 en su mejor día de noviembre para la media de los tres anuncios más baratos. Las cifras actuales de la Arc B580 partían de un promedio de anuncios de eBay de $399.',
          },
          {
            q: '¿RTX 3060 o RX 6700 XT para LLM locales?',
            a: 'Ambas tienen 12 GB. Preferimos la RTX 3060, sobre todo por el software: Ollama la incluye como compatible mediante CUDA. De la RTX 3060 tenemos ventas y de la RX 6700 XT sobre todo anuncios, así que no las ordenamos por precio. La lista ROCm de Ollama que revisamos no nombra la RX 6700 XT; Ollama también ofrece Vulkan, así que consulta la documentación actual.',
          },
          {
            q: '¿Debo comprar una RTX 3060 con menos de 12 GB?',
            a: 'No para este uso. Compra la versión de 12 GB: con menos memoria queda mucho menos espacio para el modelo y su contexto. Confirma la memoria en el anuncio antes de pagar.',
          },
          {
            q: '¿Puede una GPU de menos de $300 ejecutar un modelo 70B?',
            a: 'No por completo en la tarjeta. Un modelo 70B en Q4 necesita unos 40 GB de memoria. Una tarjeta de 10 o 12 GB tendría que mover la mayor parte a la RAM, lo que es mucho más lento.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor GPU por menos de $500 para LLM locales](/es/local-llms/best-gpu-for-llm-inference-under-500-2026): primero la RTX 3060 12GB usada, segunda la Arc B580 y tercera la RX 7800 XT usada (editorial)',
          '[¿Qué GPU cerca de $600 para LLM locales?](/es/prompt-bites/best-gpu-under-600-local-llm): una RTX 4060 Ti 16GB solo si la encuentras cerca de $600 (editorial)',
          '[Mejores modelos de Ollama para RTX 3060 12GB](/es/prompt-bites/best-ollama-models-rtx-3060-12gb): qué ejecutar cuando tengas la tarjeta',
          '[Guía de compra de GPU para LLM locales](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026): opciones para otros presupuestos',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-pt.webp',
    title: 'RTX 3060 12GB para LLMs locais: ainda abaixo de US$ 300? (2026)',
    seoTitle: 'RTX 3060 12GB para LLM local: abaixo de US$ 300?',
    metaDescription: 'A RTX 3060 12GB usada foi vendida por US$ 310–350 nos EUA. Abaixo de US$ 300, datamos a Arc B570 10GB nova. Veja fontes de preço e quais modelos cabem.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores com orçamento limitado escolhendo a primeira GPU para inferência de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**Nenhuma placa de 12 GB que verificamos tem preço atual nos EUA abaixo de US$ 300.** A RTX 3060 12GB usada foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, de 17 a 26 de novembro de 2026, sem frete ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). A placa com 10 GB ou mais que conseguimos datar abaixo de US$ 300 é a Intel Arc B570 10GB nova: US$ 279.99–289.99 nas lojas americanas mais baratas da [lista da PC Gamer de 28 de novembro](https://www.pcgamer.com/black-friday-graphics-card-deals/), na semana da Black Friday. Se US$ 300 for um limite fixo, a B570 é nossa escolha editorial; se der para chegar a cerca de US$ 310–350, preferimos a RTX 3060 12GB usada. Não fizemos benchmarks de nenhuma delas.',
    toc: [
      { label: 'Nossa escolha até US$ 300', anchor: '#best-pick' },
      { label: 'Preços e placas comparados', anchor: '#comparison' },
      { label: 'Quais modelos cabem?', anchor: '#model-guide' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    intro: 'Esta página usa apenas preços dos EUA, sem conversão para reais: não temos dados datados do Brasil, onde impostos de importação mudam bastante o preço. Cada valor é identificado como venda concluída, preço de loja ou preço pedido, com a data; essas bases não são diretamente comparáveis. Os preços mudam diariamente, sobretudo na semana da Black Friday.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor GPU abaixo de US$ 300 para LLMs locais?',
        answer: 'Se US$ 300 for um limite fixo, nossa escolha editorial é a Intel Arc B570 10GB nova, registrada a US$ 279.99–289.99 em lojas dos EUA em 27 e 28 de novembro de 2026. Não encontramos preço atual abaixo de US$ 300 para uma placa de 12 GB. A RTX 3060 12GB usada, nossa opção de 12 GB preferida, foi vendida por US$ 310–350 no eBay dos EUA.',
        bullets: [
          'Arc B570 10GB (nova): US$ 279.99–289.99 nas lojas mais baratas dos EUA na semana da Black Friday; outras ofertas custam mais.',
          'RTX 3060 12GB usada: vendida por US$ 310–350 (mediana US$ 330), de 17 a 26 de novembro de 2026, sem frete.',
          'Arc B580 12GB: as fontes de novembro divergem, e nenhum valor atual verificado está abaixo de US$ 300.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Nenhuma placa de 12 GB verificada tem preço atual nos EUA abaixo de US$ 300',
          'Limite fixo de US$ 300: Arc B570 10GB nova, nossa escolha editorial (US$ 279.99–289.99, 27–28 de novembro de 2026)',
          'Com um pouco mais de orçamento, preferimos a RTX 3060 12GB usada (vendida por US$ 310–350)',
          '10 GB ficam apertados para um modelo 14B em Q4; nenhuma dessas placas comporta um 70B',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Não encontramos placa de 12 GB atualmente abaixo de US$ 300; com esse limite, escolhemos a Arc B570 10GB nova e, com mais orçamento, a RTX 3060 12GB usada (vendida por US$ 310–350).',
          },
          { type: 'plain-terms', text: 'Com um teto rígido de US$ 300, você abre mão de 2 GB de memória de vídeo. Com US$ 10–50 a mais, uma RTX 3060 12GB usada deixa mais espaço para modelos maiores.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Até US$ 300: Arc B570. Um pouco acima: RTX 3060 12GB',
        content: [
          '<strong>Se US$ 300 for um limite fixo, nossa escolha editorial é a Intel Arc B570 10GB nova.</strong> A <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">lista da PC Gamer atualizada em 28 de novembro</a> mostrava US$ 279.99 na Newegg (com desconto extra após login) e US$ 289.99 no Walmart, ao lado de US$ 307.49 na Best Buy e US$ 313.49 na Amazon. A <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> indicava US$ 289 como melhor preço nos EUA em 27 de novembro. Outro anúncio da Amazon acompanhado pela <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> custava US$ 429.97 nesse dia. São preços da semana da Black Friday: confira o total antes de comprar.',
          'O limite da B570 é a memória. O <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama lista o Qwen 2.5 14B</a> com 9.0 GB e a versão 7B com 4.7 GB. Em uma placa de 10 GB, um modelo de 9.0 GB deixa cerca de 1 GB para contexto e sobrecarga; planeje a B570 para modelos 7B–8B. No software, a <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentação de GPU do Ollama</a> descreve suporte adicional no Windows e no Linux via Vulkan; no Linux são necessários os componentes de driver da Intel. A <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentação SYCL do llama.cpp</a> lista a série Arc B e cita a B580 na tabela. Não comece uma instalação nova com IPEX-LLM: a Intel <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">arquivou o projeto</a>, e o aviso menciona problemas de segurança conhecidos. Não testamos a B570.',
          '<strong>Se você puder passar um pouco de US$ 300, preferimos a RTX 3060 12GB usada.</strong> Ela foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, de 17 a 26 de novembro de 2026, sem frete (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">guia de GPUs usadas da InsiderLLM</a>). São US$ 10–50 acima deste orçamento, sem o frete. Você ganha 12 GB de VRAM e CUDA, e a <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentação de GPU do Ollama</a> lista a RTX 3060 como compatível. É uma escolha editorial. Placas usadas têm risco de estado e garantia: teste dentro do prazo de devolução.',
          'Outras placas perto do limite não mudam nosso resultado. A RTX 3060 Ti 8GB usada tinha mediana de preço pedido de exatamente US$ 300.00 em 7 de novembro (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>), com só 8 GB. Placas novas de 8 GB estavam acima de US$ 300 na <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> em 27 de novembro: RTX 5050 a partir de US$ 419 e RX 7600 a partir de US$ 389. Alguns guias citam placas usadas antigas abaixo de US$ 300 sem data nem base de venda; não usamos esses números.',
          'Ao comprar uma RTX 3060, confira se o anúncio diz 12 GB. Existem versões com menos memória, que deixam bem menos espaço para o modelo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Confira o preço da Arc B570 10GB na Amazon.com.br',
          },
          {
            url: 'https://www.mercadolivre.com.br/c/eletronicos/computacao/placas-de-video?q=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Confira a RTX 3060 12GB usada no Mercado Livre',
          },
          {
            url: 'https://www.amazon.com.br/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Confira o preço da RX 6700 XT na Amazon.com.br',
          },
          {
            url: 'https://www.amazon.com.br/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Confira o preço da Arc B580 12GB na Amazon.com.br',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT e Arc B580 comparadas',
        content: [
          '<strong>A coluna de preços mistura vendas concluídas, preços de loja e preços pedidos, todos identificados; não é uma comparação direta.</strong> RX 6700 XT: a <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> mostrava média de US$ 371 em anúncios do eBay acompanhados (faixa pedida considerada justa US$ 343–377, 28 de novembro), e a <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> mediana pedida de US$ 425 (7 de novembro). A média de novembro dos três anúncios diários mais baratos no <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a> foi US$ 330, com melhor dia de US$ 291; anúncios isolados abaixo de US$ 300 podem aparecer.',
          'Arc B580 12GB: a <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> mostrava US$ 729 como melhor preço nos EUA (27 de novembro), a <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> US$ 851.16 nova na Amazon dos EUA e US$ 499 usada no eBay (27 de novembro), e o <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> média mínima de novembro de US$ 399 em anúncios do eBay (valor atual US$ 431). A <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> a descrevia como indisponível em vendedores confiáveis (28 de novembro). O preço de lançamento de US$ 249 não é um preço atual.',
        ],
        columns: ['GPU', 'VRAM', 'Preço nos EUA e base', 'Software', 'Nossa visão'],
        rows: [
          { GPU: 'Arc B570 (nova)', VRAM: '10 GB', 'Preço nos EUA e base': 'US$ 279.99–289.99 loja, 27–28/11', Software: 'Vulkan / SYCL', 'Nossa visão': 'Se o teto for fixo' },
          { GPU: 'RTX 3060 (usada)', VRAM: '12 GB', 'Preço nos EUA e base': 'US$ 310–350 vendida, 17–26/11', Software: 'CUDA', 'Nossa visão': '12 GB preferida' },
          { GPU: 'RX 6700 XT (usada)', VRAM: '12 GB', 'Preço nos EUA e base': 'US$ 371 média anúncios, 28/11', Software: 'Verificar Vulkan', 'Nossa visão': 'Maioria acima de 300' },
          { GPU: 'Arc B580', VRAM: '12 GB', 'Preço nos EUA e base': 'US$ 399–851, fontes divergem', Software: 'Vulkan / SYCL', 'Nossa visão': 'Sem prova abaixo' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Quais modelos cabem em 10 GB e 12 GB?',
        columns: ['Tamanho do modelo', 'Placa de 12 GB', 'Placa de 10 GB'],
        rows: [
          {
            'Tamanho do modelo': '7B–8B (Q4)',
            'Placa de 12 GB': '🟢 Cabe',
            'Placa de 10 GB': '🟢 Cabe',
          },
          {
            'Tamanho do modelo': '14B (Q4)',
            'Placa de 12 GB': '🟢 Cabe',
            'Placa de 10 GB': '🟡 Muito apertado',
          },
          {
            'Tamanho do modelo': '20B ou mais',
            'Placa de 12 GB': '🟡 Muitas vezes não cabe',
            'Placa de 10 GB': '🔴 Em geral não cabe',
          },
          {
            'Tamanho do modelo': '70B',
            'Placa de 12 GB': '🔴 Não',
            'Placa de 10 GB': '🔴 Não',
          },
        ],
        content: [
          'São estimativas de capacidade, não resultados de testes. A <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">biblioteca do Ollama</a> lista o Qwen 2.5 7B com 4.7 GB e o 14B com 9.0 GB; contexto e sobrecarga exigem memória extra. Um modelo 70B em Q4 precisa de cerca de 40 GB, muito mais do que uma dessas placas oferece.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre GPUs abaixo de US$ 300 para LLMs locais',
        faqs: [
          {
            q: 'A RTX 3060 12GB usada ainda custa menos de US$ 300?',
            a: 'Não nas vendas que usamos. Ela foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA de 17 a 26 de novembro de 2026, sem frete (InsiderLLM). Um anúncio isolado pode variar: confira o total com frete.',
          },
          {
            q: 'Existe alguma GPU de 12 GB abaixo de US$ 300?',
            a: 'Não conseguimos mostrar isso com dados atuais e datados. A faixa de venda da InsiderLLM para a RTX 3060 usada começa em US$ 310. As médias da RX 6700 XT ficavam quase sempre acima de US$ 300, embora o GPU Poet tenha registrado US$ 291 no melhor dia de novembro para a média dos três anúncios mais baratos. Os valores atuais da Arc B580 partiam de uma média de anúncios do eBay de US$ 399.',
          },
          {
            q: 'RTX 3060 ou RX 6700 XT para LLMs locais?',
            a: 'Ambas têm 12 GB. Preferimos a RTX 3060, principalmente pelo software: o Ollama a lista como compatível via CUDA. Da RTX 3060 temos vendas e da RX 6700 XT principalmente anúncios, por isso não as ordenamos pelo preço. A lista ROCm do Ollama que consultamos não cita a RX 6700 XT; o Ollama também oferece Vulkan, então confira a documentação atual.',
          },
          {
            q: 'Devo comprar uma RTX 3060 com menos de 12 GB?',
            a: 'Não para esse uso. Compre a versão de 12 GB: com menos memória sobra bem menos espaço para o modelo e o contexto. Confirme a memória no anúncio antes de pagar.',
          },
          {
            q: 'Uma GPU abaixo de US$ 300 roda um modelo 70B?',
            a: 'Não inteiramente na placa. Um modelo 70B em Q4 precisa de cerca de 40 GB de memória. Uma placa de 10 ou 12 GB teria de mover a maior parte para a RAM, o que é muito mais lento.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras relacionadas',
        items: [
          '[Melhor GPU abaixo de US$ 500 para LLMs locais](/pt/local-llms/best-gpu-for-llm-inference-under-500-2026): RTX 3060 12GB usada em primeiro, Arc B580 em segundo e RX 7800 XT usada em terceiro (editorial)',
          '[Qual GPU perto de US$ 600 para LLMs locais?](/pt/prompt-bites/best-gpu-under-600-local-llm): uma RTX 4060 Ti 16GB só se você a encontrar perto de US$ 600 (editorial)',
          '[Melhores modelos do Ollama para RTX 3060 12GB](/pt/prompt-bites/best-ollama-models-rtx-3060-12gb): o que rodar depois de ter a placa',
          '[Guia de compra de GPU para LLMs locais](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026): opções para outros orçamentos',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ar.webp',
    title: 'RTX 3060 12GB للنماذج المحلية: هل ما زالت تحت 300 دولار؟ (2026)',
    seoTitle: 'RTX 3060 12GB للنماذج المحلية: أقل من 300$ في 2026؟',
    metaDescription: 'بيعت RTX 3060 12GB المستعملة بين 310 و350 دولارًا في أمريكا. وتحت 300 دولار وثّقنا بطاقة Arc B570 10GB الجديدة. اطلع على مصادر الأسعار والنماذج المناسبة.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: 'المشترون ذوو الميزانية المحدودة الذين يختارون أول بطاقة رسومات لاستدلال النماذج اللغوية المحلية',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**لم نجد لأي بطاقة بسعة 12 GB من التي فحصناها سعرًا أمريكيًا حاليًا أقل من 300 دولار.** بيعت RTX 3060 12GB المستعملة بين 310 و350 دولارًا (الوسيط 330) في 209 عمليات بيع مكتملة على eBay الأمريكي، من 17 إلى 26 نوفمبر 2026، دون الشحن ([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). أما البطاقة التي لا تقل عن 10 GB ووثّقنا لها سعرًا مؤرخًا تحت 300 دولار فهي Intel Arc B570 10GB الجديدة: 279.99–289.99 دولارًا لدى أرخص المتاجر الأمريكية في [قائمة PC Gamer بتاريخ 28 نوفمبر](https://www.pcgamer.com/black-friday-graphics-card-deals/)، خلال أسبوع الجمعة البيضاء. إذا كان حد 300 دولار صارمًا فاختيارنا التحريري هو B570، وإذا أمكنك الوصول إلى نحو 310–350 دولارًا فإننا نفضّل RTX 3060 12GB المستعملة. لم نجرِ اختبارات أداء على أي منهما.',
    toc: [
      { label: 'اختيارنا تحت 300 دولار', anchor: '#best-pick' },
      { label: 'مقارنة الأسعار والبطاقات', anchor: '#comparison' },
      { label: 'ما النماذج التي تتسع؟', anchor: '#model-guide' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    intro: 'تستخدم هذه الصفحة أسعار الولايات المتحدة فقط دون تحويلها إلى عملات أخرى، وقد تختلف الأسعار في منطقتك بسبب الرسوم والاستيراد. كل سعر موصوف بأنه بيع مكتمل أو سعر متجر أو سعر مطلوب، مع تاريخه، وهذه الأنواع لا تُقارن مباشرة. تتغير الأسعار يوميًا، خصوصًا في أسبوع الجمعة البيضاء.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسومات بأقل من 300 دولار للنماذج المحلية؟',
        answer: 'إذا كان حد 300 دولار صارمًا، فاختيارنا التحريري هو Intel Arc B570 10GB الجديدة، وقد سُجل سعرها بين 279.99 و289.99 دولارًا لدى متاجر أمريكية في 27 و28 نوفمبر 2026. لم نجد سعرًا حاليًا أقل من 300 دولار لبطاقة 12 GB. أما خيارنا المفضل بسعة 12 GB، وهو RTX 3060 المستعملة، فقد بيع على eBay الأمريكي بين 310 و350 دولارًا.',
        bullets: [
          'Arc B570 10GB الجديدة: 279.99–289.99 دولارًا لدى أرخص المتاجر الأمريكية في أسبوع الجمعة البيضاء، وبعض العروض أغلى.',
          'RTX 3060 12GB المستعملة: بيعت بين 310 و350 دولارًا (الوسيط 330) من 17 إلى 26 نوفمبر 2026 دون الشحن.',
          'Arc B580 12GB: مصادر نوفمبر متضاربة، ولا يقل أي رقم حالي فحصناه عن 300 دولار.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا بطاقة 12 GB فحصناها لها سعر أمريكي حالي تحت 300 دولار',
          'الحد الصارم 300 دولار: Arc B570 10GB الجديدة هي اختيارنا التحريري (279.99–289.99 دولارًا، 27–28 نوفمبر 2026)',
          'مع ميزانية أعلى قليلًا نفضّل RTX 3060 12GB المستعملة (بيعت بين 310 و350 دولارًا)',
          'سعة 10 GB ضيقة جدًا لنموذج 14B بصيغة Q4، ولا تتسع أي من هذه البطاقات لنموذج 70B',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'لم نجد بطاقة 12 GB تحت 300 دولار حاليًا؛ مع هذا الحد نختار Arc B570 10GB الجديدة، ومع ميزانية أعلى RTX 3060 12GB المستعملة (بيعت بين 310 و350 دولارًا).' },
          { type: 'plain-terms', text: 'إذا التزمت بحد 300 دولار فستتنازل عن 2 GB من ذاكرة الرسومات. وبإضافة 10–50 دولارًا تمنحك RTX 3060 12GB المستعملة مساحة أكبر للنماذج الكبيرة.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'تحت 300 دولار: Arc B570، وفوقه بقليل: RTX 3060 12GB',
        content: [
          '<strong>إذا كان حد 300 دولار صارمًا، فاختيارنا التحريري هو Intel Arc B570 10GB الجديدة.</strong> أظهرت <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">قائمة PC Gamer المحدّثة في 28 نوفمبر</a> سعر 279.99 دولارًا لدى Newegg (مع خصم إضافي بعد تسجيل الدخول) و289.99 دولارًا لدى Walmart، إلى جانب 307.49 لدى Best Buy و313.49 لدى Amazon. وذكر <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> أن أفضل سعر أمريكي في 27 نوفمبر كان 289 دولارًا. أما عرض آخر على Amazon يتابعه <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> فبلغ 429.97 دولارًا في اليوم نفسه. هذه أسعار أسبوع الجمعة البيضاء، فتحقق من المبلغ النهائي قبل الشراء.',
          'نقطة ضعف B570 هي الذاكرة. يذكر <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama أن Qwen 2.5 14B</a> بحجم 9.0 GB ونسخة 7B بحجم 4.7 GB. على بطاقة 10 GB يترك نموذج بحجم 9.0 GB نحو 1 GB فقط للسياق والأعباء الإضافية، لذا خطط لاستخدام B570 مع نماذج 7B–8B. برمجيًا، يصف <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">توثيق GPU في Ollama</a> دعمًا إضافيًا على Windows وLinux عبر Vulkan، ويحتاج Linux إلى مكونات تعريف Intel. ويدرج <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">توثيق SYCL في llama.cpp</a> سلسلة Arc B ويسمّي B580 في جدوله. لا تبدأ إعدادًا جديدًا على IPEX-LLM: فقد <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">أرشفت Intel المشروع</a> ويشير إشعارها إلى مشكلات أمنية معروفة. لم نختبر B570.',
          '<strong>إذا أمكنك تجاوز 300 دولار قليلًا، فنحن نفضّل RTX 3060 12GB المستعملة.</strong> بيعت بين 310 و350 دولارًا (الوسيط 330) في 209 عمليات بيع مكتملة على eBay الأمريكي من 17 إلى 26 نوفمبر 2026 دون الشحن (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">دليل InsiderLLM للبطاقات المستعملة</a>). أي أعلى من هذه الميزانية بمقدار 10–50 دولارًا قبل الشحن. تحصل على 12 GB من VRAM وعلى CUDA، ويدرج <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">توثيق GPU في Ollama</a> بطاقة RTX 3060 ضمن المدعومة. هذا اختيار تحريري. للبطاقات المستعملة مخاطر تتعلق بالحالة والضمان، فاختبرها خلال مهلة الإرجاع.',
          'البطاقات الأخرى القريبة من الحد لا تغيّر النتيجة. بلغ وسيط السعر المطلوب لبطاقة RTX 3060 Ti 8GB المستعملة 300.00 دولار تمامًا في 7 نوفمبر (<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>) وبسعة 8 GB فقط. وكانت البطاقات الجديدة بسعة 8 GB أعلى من 300 دولار لدى <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> في 27 نوفمبر: RTX 5050 من 419 دولارًا وRX 7600 من 389 دولارًا. تذكر بعض الأدلة بطاقات مستعملة أقدم تحت 300 دولار دون تاريخ أو أساس بيع، ولا نستخدم تلك الأرقام.',
          'عند شراء RTX 3060 تأكد من أن الإعلان يذكر 12 GB. توجد نسخ بذاكرة أقل تترك مساحة أصغر بكثير للنموذج.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'تحقق من سعر Arc B570 10GB على أمازون',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'تحقق من أسعار RTX 3060 12GB المستعملة على eBay',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'تحقق من سعر RX 6700 XT على أمازون',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'تحقق من سعر Arc B580 12GB على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة Arc B570 وRTX 3060 وRX 6700 XT وArc B580',
        content: [
          '<strong>يجمع عمود السعر بين مبيعات مكتملة وأسعار متاجر وأسعار مطلوبة، وكل منها موضّح، فليست مقارنة متكافئة.</strong> بطاقة RX 6700 XT: أظهر <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a> متوسطًا قدره 371 دولارًا لإعلانات eBay المتابَعة (النطاق المطلوب الذي يعده عادلًا 343–377، 28 نوفمبر)، وأظهر <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> وسيطًا مطلوبًا قدره 425 دولارًا (7 نوفمبر). وبلغ متوسط أرخص ثلاثة إعلانات يوميًا لدى <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a> في نوفمبر 330 دولارًا، وأفضل يوم 291 دولارًا، فقد تظهر إعلانات منفردة تحت 300 دولار.',
          'بطاقة Arc B580 12GB: ذكر <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> أن أفضل سعر أمريكي 729 دولارًا (27 نوفمبر)، وأظهر <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> سعر 851.16 دولارًا للجديدة على Amazon الأمريكي و499 للمستعملة على eBay (27 نوفمبر)، وسجّل <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> أدنى متوسط في نوفمبر لإعلانات eBay عند 399 دولارًا (الرقم الحالي 431). ووصفها <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> في 28 نوفمبر بأنها غير متوفرة لدى البائعين الموثوقين. سعر الإطلاق 249 دولارًا ليس سعرًا حاليًا.',
        ],
        columns: ['البطاقة', 'VRAM', 'السعر الأمريكي وأساسه', 'البرمجيات', 'رأينا'],
        rows: [
          { البطاقة: 'Arc B570 جديدة', VRAM: '10 GB', 'السعر الأمريكي وأساسه': '279.99–289.99$ متجر، 27–28/11', البرمجيات: 'Vulkan / SYCL', رأينا: 'خيار الحد الصارم' },
          { البطاقة: 'RTX 3060 مستعملة', VRAM: '12 GB', 'السعر الأمريكي وأساسه': '310–350$ مبيعة، 17–26/11', البرمجيات: 'CUDA', رأينا: 'المفضلة بسعة 12 GB' },
          { البطاقة: 'RX 6700 XT مستعملة', VRAM: '12 GB', 'السعر الأمريكي وأساسه': '371$ متوسط إعلانات، 28/11', البرمجيات: 'تحقق من Vulkan', رأينا: 'غالبًا فوق 300$' },
          { البطاقة: 'Arc B580', VRAM: '12 GB', 'السعر الأمريكي وأساسه': '399–851$ المصادر متضاربة', البرمجيات: 'Vulkan / SYCL', رأينا: 'لم تثبت تحت 300$' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'ما النماذج التي تتسع لها 10 GB و12 GB؟',
        columns: ['حجم النموذج', 'بطاقة 12 GB', 'بطاقة 10 GB'],
        rows: [
          {
            'حجم النموذج': '7B–8B بصيغة Q4',
            'بطاقة 12 GB': '🟢 يتسع',
            'بطاقة 10 GB': '🟢 يتسع',
          },
          {
            'حجم النموذج': '14B بصيغة Q4',
            'بطاقة 12 GB': '🟢 يتسع',
            'بطاقة 10 GB': '🟡 ضيق جدًا',
          },
          {
            'حجم النموذج': '20B فأكثر',
            'بطاقة 12 GB': '🟡 لا يتسع غالبًا',
            'بطاقة 10 GB': '🔴 لا يتسع في الغالب',
          },
          {
            'حجم النموذج': '70B',
            'بطاقة 12 GB': '🔴 لا',
            'بطاقة 10 GB': '🔴 لا',
          },
        ],
        content: [
          'هذه تقديرات للسعة وليست نتائج اختبارات. تذكر <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">مكتبة Ollama</a> أن Qwen 2.5 7B بحجم 4.7 GB و14B بحجم 9.0 GB، ويحتاج السياق والأعباء الإضافية إلى ذاكرة فوق ذلك. يتطلب نموذج 70B بصيغة Q4 نحو 40 GB، وهو أكبر بكثير من سعة أي بطاقة من هذه.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة عن بطاقات تحت 300 دولار للنماذج المحلية',
        faqs: [
          {
            q: 'هل ما زالت RTX 3060 12GB المستعملة تحت 300 دولار؟',
            a: 'ليس وفق بيانات البيع التي نستخدمها. بيعت بين 310 و350 دولارًا (الوسيط 330) في 209 عمليات بيع مكتملة على eBay الأمريكي من 17 إلى 26 نوفمبر 2026 دون الشحن (InsiderLLM). قد يختلف إعلان بعينه، فتحقق من الإجمالي مع الشحن.',
          },
          {
            q: 'هل توجد بطاقة 12 GB تحت 300 دولار؟',
            a: 'لم نستطع إثبات ذلك ببيانات حالية مؤرخة. يبدأ نطاق البيع الذي يذكره InsiderLLM لبطاقة RTX 3060 المستعملة من 310 دولارات. وكانت متوسطات RX 6700 XT غالبًا فوق 300 دولار، مع أن GPU Poet سجّل 291 دولارًا في أفضل أيام نوفمبر لمتوسط أرخص ثلاثة إعلانات. أما الأرقام الحالية لبطاقة Arc B580 فبدأت من متوسط إعلانات على eBay قدره 399 دولارًا.',
          },
          {
            q: 'RTX 3060 أم RX 6700 XT للنماذج المحلية؟',
            a: 'كلتاهما 12 GB. نفضّل RTX 3060 بسبب البرمجيات أساسًا، فـ Ollama يدرجها مدعومة عبر CUDA. أسعار RTX 3060 لدينا مبيعات مكتملة، وأرقام RX 6700 XT إعلانات في الغالب، لذا لا نرتبهما حسب السعر. قائمة ROCm في Ollama التي راجعناها لا تذكر RX 6700 XT، ويوفر Ollama دعم Vulkan أيضًا، فراجع التوثيق الحالي.',
          },
          { q: 'هل أشتري RTX 3060 بأقل من 12 GB؟', a: 'لا ننصح بذلك لهذا الغرض. اشترِ نسخة 12 GB، فالذاكرة الأقل تترك مساحة أصغر بكثير للنموذج وسياقه. تأكد من السعة المذكورة في الإعلان قبل الدفع.' },
          {
            q: 'هل تشغّل بطاقة تحت 300 دولار نموذج 70B؟',
            a: 'ليس بالكامل على البطاقة. يحتاج نموذج 70B بصيغة Q4 إلى نحو 40 GB من الذاكرة. ستضطر بطاقة 10 أو 12 GB إلى نقل معظمه إلى ذاكرة النظام، وهو أبطأ بكثير.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل بطاقة تحت 500 دولار للنماذج المحلية](/ar/local-llms/best-gpu-for-llm-inference-under-500-2026): الأولى RTX 3060 12GB المستعملة، ثم Arc B580، ثم RX 7800 XT المستعملة (ترتيب تحريري)',
          '[أي بطاقة قرب 600 دولار؟](/ar/prompt-bites/best-gpu-under-600-local-llm): ‏RTX 4060 Ti 16GB فقط إذا وجدتها قرب 600 دولار (رأي تحريري)',
          '[أفضل نماذج Ollama لبطاقة RTX 3060 12GB](/ar/prompt-bites/best-ollama-models-rtx-3060-12gb): ما تشغّله بعد اقتناء البطاقة',
          '[دليل شراء بطاقات الرسومات للنماذج المحلية](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026): خيارات لميزانيات أخرى',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ko.webp',
    title: 'RTX 3060 12GB 로컬 LLM: 아직 300달러 이하입니까? (2026년)',
    seoTitle: 'RTX 3060 12GB 로컬 LLM: 2026년에도 300달러 이하?',
    metaDescription: '중고 RTX 3060 12GB의 미국 실거래가는 310~350달러로 300달러를 넘습니다. 300달러 이하에서는 신품 Arc B570 10GB를 날짜와 함께 확인했습니다. 가격 출처와 실행 가능한 모델을 정리합니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B570', 'RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580'],
    educationalLevel: 'Intermediate',
    audience: '로컬 LLM 추론을 위한 첫 GPU를 선택하는 예산 중시 구매자',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock: '**확인한 12GB 카드 가운데 현재 미국 가격이 300달러 미만인 제품은 없었습니다.** 중고 RTX 3060 12GB는 2026년 11월 17~26일 eBay 미국 판매 완료 209건에서 310~350달러(중앙값 330달러, 배송비 제외)에 거래되었습니다([InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). 10GB 이상 카드 중 300달러 이하를 날짜가 있는 자료로 확인한 제품은 신품 Intel Arc B570 10GB입니다. [PC Gamer의 11월 28일 목록](https://www.pcgamer.com/black-friday-graphics-card-deals/)에서 미국 최저가 판매점 기준 279.99~289.99달러였습니다(블랙프라이데이 주간). 300달러가 확실한 상한이라면 B570이 편집부의 선택이며, 310~350달러 정도까지 가능하면 중고 RTX 3060 12GB를 더 권합니다. 두 제품 모두 벤치마크는 하지 않았습니다.',
    toc: [
      { label: '300달러 이하 선택', anchor: '#best-pick' },
      { label: '가격과 카드 비교', anchor: '#comparison' },
      { label: '어떤 모델이 들어갑니까?', anchor: '#model-guide' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro: '이 페이지는 미국 가격만 사용하며 원화로 환산하지 않습니다. 날짜가 확인되는 한국 신품·중고 시세 자료가 없기 때문입니다. 각 가격은 판매 완료가, 판매점 가격, 판매 희망가 중 무엇인지와 날짜를 함께 표시합니다. 이 세 가지는 직접 비교할 수 없습니다. 가격은 매일 바뀌며 블랙프라이데이 주간에는 특히 그렇습니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM용 300달러 이하 최고의 GPU는 무엇입니까?',
        answer: '300달러가 확실한 상한이라면 편집부의 선택은 신품 Intel Arc B570 10GB이며, 2026년 11월 27~28일 미국 판매점에서 279.99~289.99달러였습니다. 12GB 카드는 현재 300달러 미만 가격을 찾지 못했습니다. 선호하는 12GB 선택지인 중고 RTX 3060 12GB는 eBay 미국에서 310~350달러에 거래되었습니다.',
        bullets: [
          'Arc B570 10GB(신품): 블랙프라이데이 주간 미국 최저가 판매점에서 279.99~289.99달러이며 다른 판매처는 더 비쌉니다.',
          '중고 RTX 3060 12GB: 2026년 11월 17~26일 310~350달러(중앙값 330달러, 배송비 제외)에 판매되었습니다.',
          'Arc B580 12GB: 11월 가격 자료가 서로 다르며, 확인한 현재 수치 중 300달러 미만은 없습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '확인한 12GB 카드 중 현재 미국 가격이 300달러 미만인 것은 없습니다',
          '상한이 300달러라면 신품 Arc B570 10GB가 편집부의 선택입니다(279.99~289.99달러, 2026년 11월 27~28일)',
          '예산을 조금 늘릴 수 있다면 중고 RTX 3060 12GB(판매가 310~350달러)를 권합니다',
          '10GB는 Q4 14B 모델에는 매우 빠듯하며, 70B 모델은 어느 카드에도 들어가지 않습니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '현재 300달러 미만의 12GB 카드는 찾지 못했습니다. 상한이 300달러라면 신품 Arc B570 10GB를, 조금 더 쓸 수 있다면 중고 RTX 3060 12GB(판매가 310~350달러)를 고릅니다.' },
          { type: 'plain-terms', text: '300달러를 꼭 지키면 그래픽 메모리 2GB를 포기하게 됩니다. 10~50달러를 더 쓸 수 있다면 중고 RTX 3060 12GB가 큰 모델에 더 여유롭습니다.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '300달러 이하는 Arc B570, 조금 넘으면 RTX 3060 12GB',
        content: [
          '<strong>300달러가 확실한 상한이라면 편집부의 선택은 신품 Intel Arc B570 10GB입니다.</strong> <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">11월 28일에 갱신된 PC Gamer 목록</a>에서는 Newegg 279.99달러(로그인 시 추가 할인), Walmart 289.99달러였고 Best Buy는 307.49달러, Amazon은 313.49달러였습니다. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>는 11월 27일 미국 최저가를 289달러로 표시했습니다. <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>가 추적하는 다른 Amazon 상품은 같은 날 429.97달러였습니다. 블랙프라이데이 주간 가격이므로 결제 총액을 확인하십시오.',
          'B570의 한계는 메모리입니다. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama의 Qwen 2.5 14B</a>는 9.0GB, 7B 버전은 4.7GB입니다. 10GB 카드에 9.0GB 모델을 올리면 컨텍스트와 부가 용도로 약 1GB만 남으므로 B570은 7B~8B 모델용으로 생각하십시오. 소프트웨어 면에서 <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU 문서</a>는 Windows와 Linux에서 Vulkan을 통한 추가 GPU 지원을 설명하며, Linux에는 Intel 드라이버 구성 요소가 필요합니다. <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp SYCL 문서</a>는 Arc B 시리즈를 지원 목록에 두고 표에 B580을 명시합니다. 새 환경을 IPEX-LLM으로 시작하지 마십시오. Intel은 <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">프로젝트를 보관 처리</a>했으며 안내문에서 알려진 보안 문제를 언급합니다. B570은 직접 테스트하지 않았습니다.',
          '<strong>300달러를 조금 넘길 수 있다면 중고 RTX 3060 12GB를 권합니다.</strong> 2026년 11월 17~26일 eBay 미국 판매 완료 209건에서 310~350달러(중앙값 330달러, 배송비 제외)였습니다(<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM 중고 GPU 가이드</a>). 배송비를 빼고도 이 예산보다 10~50달러 높습니다. 12GB VRAM과 CUDA를 사용할 수 있고 <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU 문서</a>는 RTX 3060을 지원 목록에 포함합니다. 이는 편집부의 판단입니다. 중고 카드는 상태와 보증 위험이 있으므로 반품 기간 안에 시험하십시오.',
          '기준선 근처의 다른 카드도 결론을 바꾸지 않습니다. 중고 RTX 3060 Ti 8GB의 판매 희망가 중앙값은 11월 7일 정확히 300.00달러였지만(<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>) 메모리는 8GB뿐입니다. 신품 8GB 카드는 11월 27일 <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> 기준 300달러를 넘었습니다. RTX 5050은 419달러부터, RX 7600은 389달러부터였습니다. 날짜나 거래 근거 없이 오래된 중고 카드를 300달러 미만으로 소개하는 수치는 사용하지 않습니다.',
          'RTX 3060을 살 때는 상품 설명에 12GB라고 적혀 있는지 확인하십시오. 메모리가 더 적은 버전도 있으며 모델에 쓸 공간이 훨씬 줄어듭니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B570',
            productName: 'Intel Arc B570 10GB (new)',
            productCategory: 'gpu',
            label: 'Amazon에서 Arc B570 10GB 가격 확인',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'eBay에서 중고 RTX 3060 12GB 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Amazon에서 RX 6700 XT 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Amazon에서 Arc B580 12GB 가격 확인',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Arc B570, RTX 3060, RX 6700 XT, Arc B580 비교',
        content: [
          '<strong>가격 열에는 판매 완료가, 판매점 가격, 판매 희망가가 섞여 있으며 각각 표시했으므로 동일 기준 비교가 아닙니다.</strong> RX 6700 XT는 <a href="https://resaleprices.com/gpu/amd-rx-6700-xt" class="text-primary hover:underline">ResalePrices</a>의 추적 eBay 상품 평균이 371달러(적정 희망가 범위 343~377달러, 11월 28일), <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>의 희망가 중앙값이 425달러(11월 7일)였습니다. <a href="https://gpupoet.com/gpu/learn/price/november-2026/amd-radeon-rx-6700-xt" class="text-primary hover:underline">GPU Poet</a>의 일일 최저 상품 3개 평균은 11월 330달러, 최저일 291달러여서 300달러 미만 상품이 나올 수도 있습니다.',
          'Arc B580 12GB는 <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>의 미국 최저가가 729달러(11월 27일), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>의 미국 Amazon 신품이 851.16달러, eBay 중고가 499달러(11월 27일), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>의 eBay 상품 기준 11월 최저 평균이 399달러(현재 431달러)였습니다. <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>는 11월 28일 믿을 만한 판매처에서는 구할 수 없다고 했습니다. 출시가 249달러는 현재 가격이 아닙니다.',
        ],
        columns: ['GPU', 'VRAM', '미국 가격과 기준', '소프트웨어', '편집부 의견'],
        rows: [
          { GPU: 'Arc B570(신품)', VRAM: '10GB', '미국 가격과 기준': '279.99~289.99달러 판매점 11/27~28', 소프트웨어: 'Vulkan / SYCL', '편집부 의견': '상한 고정 시 선택' },
          { GPU: 'RTX 3060(중고)', VRAM: '12GB', '미국 가격과 기준': '310~350달러 판매 완료 11/17~26', 소프트웨어: 'CUDA', '편집부 의견': '선호하는 12GB' },
          { GPU: 'RX 6700 XT(중고)', VRAM: '12GB', '미국 가격과 기준': '371달러 상품 평균 11/28', 소프트웨어: 'Vulkan 확인', '편집부 의견': '대체로 300달러 초과' },
          { GPU: 'Arc B580', VRAM: '12GB', '미국 가격과 기준': '399~851달러 자료 불일치', 소프트웨어: 'Vulkan / SYCL', '편집부 의견': '300달러 이하 미확인' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '10GB와 12GB에는 어떤 모델이 들어갑니까?',
        columns: ['모델 크기', '12GB 카드', '10GB 카드'],
        rows: [
          {
            '모델 크기': '7B~8B(Q4)',
            '12GB 카드': '🟢 들어감',
            '10GB 카드': '🟢 들어감',
          },
          {
            '모델 크기': '14B(Q4)',
            '12GB 카드': '🟢 들어감',
            '10GB 카드': '🟡 매우 빠듯함',
          },
          {
            '모델 크기': '20B 이상',
            '12GB 카드': '🟡 안 들어가는 경우가 많음',
            '10GB 카드': '🔴 대부분 안 들어감',
          },
          {
            '모델 크기': '70B',
            '12GB 카드': '🔴 불가',
            '10GB 카드': '🔴 불가',
          },
        ],
        content: [
          '용량에 따른 추정이며 테스트 결과가 아닙니다. <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama 라이브러리</a>에는 Qwen 2.5 7B가 4.7GB, 14B가 9.0GB로 나와 있고, 컨텍스트와 부가 용도에 메모리가 더 필요합니다. Q4 70B 모델은 약 40GB가 필요해 이런 카드 한 장으로는 크게 부족합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '300달러 이하 로컬 LLM GPU 자주 묻는 질문',
        faqs: [
          { q: '중고 RTX 3060 12GB는 아직 300달러 이하입니까?', a: '사용한 거래 자료로는 아닙니다. 2026년 11월 17~26일 eBay 미국 판매 완료 209건에서 310~350달러(중앙값 330달러, 배송비 제외)였습니다(InsiderLLM). 개별 상품은 다를 수 있으므로 배송비를 포함한 총액을 확인하십시오.' },
          {
            q: '300달러 이하의 12GB GPU가 있습니까?',
            a: '날짜가 있는 현재 자료로는 확인하지 못했습니다. InsiderLLM이 제시한 중고 RTX 3060 판매가 범위는 310달러부터입니다. RX 6700 XT 평균은 대체로 300달러를 넘었지만, GPU Poet의 최저 3개 평균은 11월 최저일에 291달러였습니다. Arc B580의 현재 수치는 eBay 상품 평균 399달러가 가장 낮았습니다.',
          },
          {
            q: '로컬 LLM에는 RTX 3060과 RX 6700 XT 중 무엇이 좋습니까?',
            a: '둘 다 12GB입니다. 주로 소프트웨어 때문에 RTX 3060을 권합니다. Ollama가 CUDA 지원 목록에 두고 있습니다. RTX 3060 수치는 판매 완료가이고 RX 6700 XT 수치는 대부분 상품 가격이므로 가격으로는 순위를 매기지 않습니다. 확인한 Ollama ROCm 목록에는 RX 6700 XT가 없습니다. Ollama는 Vulkan도 지원하므로 최신 문서를 확인하십시오.',
          },
          { q: '12GB 미만의 RTX 3060을 사도 됩니까?', a: '이 용도에는 권하지 않습니다. 12GB 버전을 구매하십시오. 메모리가 적으면 모델과 컨텍스트에 쓸 공간이 크게 줄어듭니다. 결제 전에 상품의 용량 표시를 확인하십시오.' },
          { q: '300달러 이하 GPU로 70B 모델을 실행할 수 있습니까?', a: '카드에 전부 올릴 수는 없습니다. Q4 70B 모델에는 약 40GB의 메모리가 필요합니다. 10GB나 12GB 카드는 대부분을 시스템 RAM으로 옮겨야 해서 훨씬 느려집니다.' },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[500달러 이하 로컬 LLM GPU](/ko/local-llms/best-gpu-for-llm-inference-under-500-2026): 1순위 중고 RTX 3060 12GB, 2순위 Arc B580, 3순위 중고 RX 7800 XT(편집부 순위)',
          '[600달러 안팎에서는 어떤 GPU입니까?](/ko/prompt-bites/best-gpu-under-600-local-llm): RTX 4060 Ti 16GB는 600달러에 가깝게 구할 때만(편집부 의견)',
          '[RTX 3060 12GB용 Ollama 모델](/ko/prompt-bites/best-ollama-models-rtx-3060-12gb): 카드를 구한 뒤 실행할 모델',
          '[로컬 LLM GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026): 다른 예산의 선택지',
        ],
      },
    },
  },
}
