// Auto-generated from src/lib/local-llms/content.ts
// Slug: used-gpus-for-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'Used GPUs for Local LLMs: Buying Guide',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-en.webp',
      seoTitle: 'Used GPUs for Local LLMs: RTX 3060, 3080, 3090, 4090',
      intro: '**Older used GPUs sell below their launch prices (InsiderLLM tracker: RTX 3080 10GB $280-350, RTX 3060 12GB about $300), but the RTX 3090 and RTX 4090 now sell near or above MSRP in US listings.** The used market is generally well-stocked with ex-mining and ex-gaming cards. Buying used can make sense for a first rig or an upgrade; mining cards are riskier unless you can test on-site. Prices below are US-market estimates and change quickly.',
      metaDescription: 'Used GPUs for local LLMs: RTX 3060, 3080, 3090 and 4090 price ranges, where to buy, mining-card risks and how to test a card before you pay.',
      publishDate: '2026-04-05',
      dateModified: '2026-11-15',
      leadAnswerBlock: '**Older used GPUs sell below their launch prices (InsiderLLM tracker: RTX 3080 10GB $280-350, RTX 3060 12GB about $300), but the RTX 3090 and RTX 4090 now sell near or above MSRP in US listings. Test any used card before buying, especially ex-mining cards.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '8 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Used GPU',
      toc: [
        { label: 'TLDR', anchor: '#key-takeaways' },
        { label: 'Which Used GPUs Are Popular Picks?', anchor: '#safest-cards' },
        { label: 'How Much Should You Pay for Used GPUs?', anchor: '#pricing' },
        { label: 'Mining Cards vs. Gaming Cards: What\'s the Difference?', anchor: '#mining-vs-gaming' },
        { label: 'Where Should You Buy Used GPUs?', anchor: '#where-to-buy' },
        { label: 'How Do You Test a Used GPU Before Committing?', anchor: '#testing' },
        { label: 'Common Used GPU Buying Mistakes', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Used RTX 3060 12GB (InsiderLLM tracker: about $300, range $200-400) and RTX 3080 10GB (InsiderLLM tracker: $280-350) sell below MSRP, while the RTX 3090 and RTX 4090 now sell near or above MSRP; mining cards are often listed cheaper but need an in-person VRAM stress test before you buy.' },
            { type: 'plain-terms', text: 'Buying a used graphics card to run local AI models can still save money on older models, but not on every card: prices for the newest high-end cards are currently at or above their launch price. Avoid cards that ran 24/7 for cryptocurrency mining without checking them first. A gently used gaming card is usually a lower-risk purchase than a used mining card; a used mining card needs a memory stress test before you hand over money.' },
          ],
          items: [
            'RTX 3060 12GB used (InsiderLLM tracker: about $300, range $200-400) and RTX 3080 10GB used (InsiderLLM tracker: $280-350) are popular choices: high listing volume makes prices easy to compare. Test VRAM health before buying.',
            'Mining cards are often listed cheaper but can have more VRAM wear. Only buy if you can stress-test on-site for 2+ hours.',
            'Gaming cards (ex-gaming rig resales) are usually lower-risk than mining cards. Casual gaming typically does not stress VRAM like 24/7 mining.',
            'eBay with buyer protection and Facebook Marketplace with in-person testing are common sources; use local classifieds only if you can meet in a public place and test on-site.',
            'Before closing, run a currently maintained GPU memory test that supports your card (confirm compatibility first), ideally for 1-2 hours. Bad VRAM often shows up as errors.',
            'Expect a discount for unknown-history cards, but if a deal seems too good, the card may have issues.',
            'Avoid ex-server/data-center cards (NVIDIA A100/L40S) unless you can verify their condition; they are often passively cooled and designed for server airflow, so they may overheat in a desktop case.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Which Used GPUs Are Popular Picks?',
          items: [
            '**RTX 3060 12GB** (InsiderLLM tracker: about $300, range $200-400): Large volume on the used market, so many listings to compare. Test VRAM before buying.',
            '**RTX 3080 10GB** (InsiderLLM tracker: $280-350): Popular gaming card. 10GB is usable for smaller models but limits larger ones. Test before buying.',
            '**RTX 4090 24GB** (per the InsiderLLM tracker, US eBay sold listings: $2,575-3,010): Premium pricing, above MSRP. High resale volume gives many listings to compare. Check condition like any used card.',
            '**RTX 3090 24GB** (per the InsiderLLM tracker, US eBay sold listings: about $1,400-1,550): High-end and expensive. Prices rose sharply through 2026 and recent sold listings are well above $1,000. Check condition like any used card.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'How Much Should You Pay for Used GPUs?',
          content: [
            '**Benchmark: Retail MSRP vs.** used market. Figures come from the [InsiderLLM GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (page updated 2026-10-15). The RTX 3090 and RTX 4090 figures are US eBay sold listings, excluding shipping; the tracker does not state a method for its RTX 3060 and RTX 3080 figures. US prices only; not offers or guarantees.',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → used about $300, range $200-400 (InsiderLLM tracker; about 9% below MSRP at $300)',
            'RTX 3080 10GB: MSRP $699 → used $280-350 (InsiderLLM tracker; roughly 50-60% below MSRP)',
            'RTX 4090 24GB: MSRP $1,599 → used sold listings $2,575-3,010 (median $2,860), above MSRP; new listings $2,000-3,000',
            'RTX 3090 24GB: used sold listings about $1,400-1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Mining Cards vs. Gaming Cards: What\'s the Difference?',
          content: [
            '**Mining cards** often ran 24/7 for 1-3 years at full compute load. Sustained load and thermal cycling can wear VRAM, so mining cards can have more VRAM wear. Test before buying.',
            '**Gaming cards** usually ran intermittently at varying load, which typically means less sustained stress.',
            'Visually: Mining cards often have signs of heavy use (dust, thermal damage, peeling labels). Gaming cards look cleaner.',
            'Price: Mining cards are often listed cheaper for the same model. Not worth the risk unless you test on-site.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Where Should You Buy Used GPUs?',
          items: [
            '**eBay**: Buyer protection is available on many listings. Seller ratings visible. Return terms vary by listing; check before buying. Shipping can take a week or more.',
            '**Facebook Marketplace**: Local sales, test on-site before payment. No shipping risk. Instant availability.',
            '**Local classifieds**: Often the lowest prices. Local only. Scams are reported on any peer-to-peer marketplace; meet in a safe public place and test on-site before paying.',
            '**Local computer repair shops**: Often have used inventory. Can ask about return policy. Prices are often higher than eBay, but there is more recourse.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'How Do You Test a Used GPU Before Committing?',
          content: [
            '**1. Visual inspection: Check for physical damage, burnt components, leaking capacitors.**',
            '2. Install in test system: Boot into OS, run GPU-Z. Check clock speeds (should match spec), temperature readings.',
            '3. Run a currently maintained GPU memory test that supports your card (confirm compatibility first; many older tools only support old GPU generations). If the tool allows it, test most of the VRAM for 1-2 hours. Bad memory shows up as errors.',
            '4. Run FurMark (stress test): 30 minutes at full load. Card should not crash or throttle severely.',
            '5. Check memory specs in GPU-Z: Compare to the manufacturer spec. Significantly lower values or errors can indicate a problem.',
            'If buying remotely (for example on eBay), ask the seller for test screenshots and check return terms. Stress tests load the card heavily: confirm return or warranty terms first and stop if temperatures look abnormal.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Common Used GPU Buying Mistakes',
          items: [
            'Buying a mining RTX 3080 at a steep discount without testing--VRAM may be degraded and show errors under load.',
            'Assuming "like new condition" means healthy VRAM--cosmetics ≠ component health. Always stress-test.',
            'Paying for shipping on a GPU without buyer protection (not eBay)--if it arrives dead, you\'re stuck.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'Is a used mining GPU worth buying at a steep discount?', a: 'Only if you can test it in person for 2+ hours with a GPU memory test that supports your card. Otherwise, no. A small discount is rarely worth the risk of a card with worn VRAM.' },
            { q: 'How can I tell if a used GPU was a mining card?', a: 'Often you can\'t from photos alone. Ask the seller directly and compare the answer with the card\'s condition. Look for thermal damage (discoloration near capacitors) or unusually heavy dust.' },
            { q: 'What\'s the oldest RTX generation I should buy used?', a: 'RTX 2000-series cards (2060, 2080; 2018) are old; only consider them at a low price. RTX 3000-series (2020-2021) is a more common baseline.' },
            { q: 'Should I buy a used RTX 4070 or RTX 3080?', a: 'The InsiderLLM tracker lists the RTX 3080 10GB at $280-350 used and gives no RTX 4070 price, so compare current listings for both. The RTX 4070 is a newer generation with 2 GB more VRAM; check benchmarks for your model size.' },
            { q: 'Can I return a used GPU on eBay if it fails after 1 month?', a: 'Return policies depend on the seller and listing. Many offer a limited return window; after it closes you are generally on your own unless a manufacturer warranty applies. Check before buying.' },
            { q: 'Is it worth paying extra for a GPU with return protection?', a: 'Often yes. A return window can protect you from a total loss if the card fails after purchase; compare the premium against the card\'s price.' },
            { q: 'Should I buy a used RTX 3090 or RTX 4090?', a: 'A used RTX 3090 if budget matters. Observed US eBay sold listings, excluding shipping, are about $1,400-1,550 for a used RTX 3090 versus $2,575-3,010 for a used RTX 4090 (InsiderLLM tracker, source updated 2026-10-15). Both have 24 GB. In developer-reported llama.cpp 7B tests (CUDA scoreboard, discussion #15013) the RTX 4090 generates 186.2 tok/s versus 158.2 for the RTX 3090 and processes prompts more than twice as fast (11,993 versus 5,175 tok/s). Buy the RTX 4090 mainly if you need that prompt speed and can afford the premium. Prices are volatile; check live listings.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- US eBay sold-listing prices for RTX 3090 and RTX 4090 (updated 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- user-submitted Llama 2 7B Q4_0 results.',
            'Documentation of the GPU memory-test tool you choose (confirm it supports your card)',
            'GPU-Z specification database for thermal and clock speed baselines',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Used GPUs for Local LLMs: RTX 3060, 3080, 3090, 4090',
        'description': 'Used GPUs for local LLMs: RTX 3060, 3080, 3090 and 4090 price ranges, where to buy, mining-card risks and how to test a card before you pay.',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Used GPUs' },
          { '@type': 'Thing', 'name': 'GPU buying guide' },
          { '@type': 'Thing', 'name': 'GPU testing' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is a used mining GPU worth buying at a steep discount?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Only if you can test it in person for 2+ hours with a GPU memory test that supports your card. Otherwise, no. A small discount is rarely worth the risk of a card with worn VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I tell if a used GPU was a mining card?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Often you can\'t from photos alone. Ask the seller directly and compare the answer with the card\'s condition. Look for thermal damage (discoloration near capacitors) or unusually heavy dust.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the oldest RTX generation I should buy used?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 2000-series cards (2060, 2080; 2018) are old; only consider them at a low price. RTX 3000-series (2020-2021) is a more common baseline.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 4070 or RTX 3080?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The InsiderLLM tracker lists the RTX 3080 10GB at $280-350 used and gives no RTX 4070 price, so compare current listings for both. The RTX 4070 is a newer generation with 2 GB more VRAM; check benchmarks for your model size.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I return a used GPU on eBay if it fails after 1 month?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Return policies depend on the seller and listing. Many offer a limited return window; after it closes you are generally on your own unless a manufacturer warranty applies. Check before buying.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is it worth paying extra for a GPU with return protection?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Often yes. A return window can protect you from a total loss if the card fails after purchase; compare the premium against the card\'s price.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 3090 or RTX 4090?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A used RTX 3090 if budget matters. Observed US eBay sold listings, excluding shipping, are about $1,400-1,550 for a used RTX 3090 versus $2,575-3,010 for a used RTX 4090 (InsiderLLM tracker, source updated 2026-10-15). Both have 24 GB. In developer-reported llama.cpp 7B tests (CUDA scoreboard, discussion #15013) the RTX 4090 generates 186.2 tok/s versus 158.2 for the RTX 3090 and processes prompts more than twice as fast (11,993 versus 5,175 tok/s). Buy the RTX 4090 mainly if you need that prompt speed and can afford the premium. Prices are volatile; check live listings.'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'name': 'Used GPUs for Local LLMs: Cost Comparison & Reliability Notes',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Cost Comparison: RTX 3060 (about $300 used, InsiderLLM tracker) vs RTX 3080 ($280-350, InsiderLLM tracker) vs RTX 3090 (about $1,400-1,550 observed used) vs RTX 4090 (about $2,575-3,010 observed used).' },
          { '@type': 'ListItem', position: 2, name: 'Reliability Notes: RTX 3060 12GB and RTX 3080 10GB have high resale volume. Mining cards can have more VRAM wear; test before buying.' },
          { '@type': 'ListItem', position: 3, name: 'Used GPU Models to Consider: RTX 3060 12GB (budget entry), RTX 3080 10GB (mid-range), RTX 4090 24GB (premium, above MSRP).' },
        ],
      },
    },
    es: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'GPUs de segunda mano para LLMs locales: Guía de compra',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-es.webp',
      seoTitle: 'GPUs usadas para LLM locales: RTX 3060, 3080, 3090, 4090',
      intro: '**Las GPUs de segunda mano más antiguas se venden por debajo de su precio de lanzamiento (rastreador de InsiderLLM: RTX 3080 10GB $280-350, RTX 3060 12GB unos $300), pero la RTX 3090 y la RTX 4090 se venden ahora cerca o por encima del MSRP en los listados de EE. UU.** El mercado de segunda mano suele estar bien surtido de tarjetas ex-minería y ex-gaming. Comprar de segunda mano puede tener sentido para tu primer equipo o al actualizar; las tarjetas de minería son más arriesgadas a menos que puedas probarlas in situ. Los precios son estimaciones del mercado de EE. UU. y cambian con rapidez.',
      metaDescription: 'GPUs de segunda mano para LLMs locales: rangos de precio de RTX 3060, 3080, 3090 y 4090, dónde comprar, riesgos de las tarjetas de minería y cómo probarlas.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Las GPUs de segunda mano más antiguas se venden por debajo del precio de lanzamiento (rastreador de InsiderLLM: RTX 3080 10GB $280-350, RTX 3060 12GB unos $300), pero la RTX 3090 y la RTX 4090 se venden ahora cerca o por encima del MSRP en los listados de EE. UU. Prueba cualquier tarjeta usada antes de comprar, sobre todo las ex-minería.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo de LLMs locales',
      readTime: '8 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU de segunda mano',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué GPUs de segunda mano son opciones populares?', anchor: '#safest-cards' },
        { label: '¿Cuánto deberías pagar por una GPU de segunda mano?', anchor: '#pricing' },
        { label: 'Tarjetas de minería vs. tarjetas gaming: ¿cuál es la diferencia?', anchor: '#mining-vs-gaming' },
        { label: '¿Dónde comprar GPUs de segunda mano?', anchor: '#where-to-buy' },
        { label: '¿Cómo probar una GPU de segunda mano antes de comprar?', anchor: '#testing' },
        { label: 'Errores frecuentes al comprar GPUs de segunda mano', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'La RTX 3060 12GB de segunda mano (rastreador de InsiderLLM: unos $300, rango $200-400) y la RTX 3080 10GB (rastreador de InsiderLLM: $280-350) se venden por debajo del MSRP, mientras que la RTX 3090 y la RTX 4090 se venden ahora cerca o por encima del MSRP; las tarjetas de minería suelen publicarse más baratas, pero necesitan una prueba de estrés de VRAM en persona antes de comprarlas.' },
            { type: 'plain-terms', text: 'Comprar una tarjeta gráfica de segunda mano para ejecutar modelos de IA locales todavía puede ahorrar dinero en modelos antiguos, pero no en todas: los precios de las tarjetas de gama alta más recientes están ahora en su precio de lanzamiento o por encima. Evita las tarjetas que estuvieron minando criptomonedas 24/7 sin comprobarlas antes. Una tarjeta de gaming poco usada suele ser una compra de menor riesgo que una de minería; una tarjeta de minería usada necesita una prueba de estrés de memoria antes de que entregues el dinero.' },
          ],
          items: [
            'La RTX 3060 12GB de segunda mano (rastreador de InsiderLLM: unos $300, rango $200-400) y la RTX 3080 10GB de segunda mano (rastreador de InsiderLLM: $280-350) son opciones populares: el alto volumen de listados facilita comparar precios. Prueba la salud de la VRAM antes de comprar.',
            'Las tarjetas de minería suelen publicarse más baratas, pero pueden tener más desgaste de VRAM. Cómpralas solo si puedes hacer una prueba de estrés in situ durante 2 horas o más.',
            'Las tarjetas gaming (ventas de equipos ex-gaming) suelen ser de menor riesgo que las de minería. El gaming casual normalmente no estresa la VRAM como la minería 24/7.',
            'eBay con protección al comprador y Facebook Marketplace con prueba in situ son fuentes habituales; usa anuncios clasificados locales solo si puedes quedar en un lugar público y probar la tarjeta allí mismo.',
            'Antes de cerrar la compra, ejecuta una prueba de memoria de GPU mantenida actualmente que admita tu tarjeta (confirma antes la compatibilidad), idealmente durante 1-2 horas. La VRAM defectuosa suele mostrarse como errores.',
            'Espera un descuento en tarjetas de historial desconocido, pero si una oferta parece demasiado buena, la tarjeta puede tener problemas.',
            'Evita las tarjetas ex-servidor/centro de datos (NVIDIA A100/L40S) a menos que puedas verificar su estado: suelen tener refrigeración pasiva y estar diseñadas para el flujo de aire de servidor, por lo que pueden sobrecalentarse en una caja de sobremesa.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '¿Qué GPUs de segunda mano son opciones populares?',
          items: [
            '**RTX 3060 12GB** (rastreador de InsiderLLM: unos $300, rango $200-400): Gran volumen en el mercado de segunda mano, con muchos listados para comparar. Prueba la VRAM antes de comprar.',
            '**RTX 3080 10GB** (rastreador de InsiderLLM: $280-350): Tarjeta gaming popular. 10GB es usable con modelos pequeños, pero limita los más grandes. Pruébala antes de comprar.',
            '**RTX 4090 24GB** (según el rastreador de InsiderLLM, listados vendidos en eBay EE. UU.: $2,575-3,010): Precio premium, por encima del MSRP. El alto volumen de reventa da muchos listados para comparar. Revisa su estado como en cualquier tarjeta de segunda mano.',
            '**RTX 3090 24GB** (según el rastreador de InsiderLLM, listados vendidos en eBay EE. UU.: unos $1,400-1,550): Alta gama y cara. Los precios subieron con fuerza durante 2026 y los listados vendidos recientes superan con claridad los $1,000. Revisa su estado como en cualquier tarjeta de segunda mano.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '¿Cuánto deberías pagar por una GPU de segunda mano?',
          content: [
            '**Referencia: MSRP de venta al por menor vs.** mercado de segunda mano. Las cifras proceden del [rastreador de precios de GPU de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (página actualizada el 2026-10-15). Las de la RTX 3090 y la RTX 4090 son listados vendidos en eBay EE. UU., sin gastos de envío; el rastreador no indica el método de sus cifras de la RTX 3060 y la RTX 3080. Solo precios de EE. UU. en USD; en tu país pueden variar según impuestos locales; no son ofertas ni garantías.',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → segunda mano unos $300, rango $200-400 (rastreador de InsiderLLM; cerca de un 9% por debajo del MSRP a $300)',
            'RTX 3080 10GB: MSRP $699 → segunda mano $280-350 (rastreador de InsiderLLM; entre un 50% y un 60% por debajo del MSRP)',
            'RTX 4090 24GB: MSRP $1,599 → segunda mano (listados vendidos) $2,575-3,010, mediana $2,860, por encima del MSRP; listados nuevos $2,000-3,000',
            'RTX 3090 24GB: segunda mano (listados vendidos) unos $1,400-1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Tarjetas de minería vs. tarjetas gaming: ¿cuál es la diferencia?',
          content: [
            '**Tarjetas de minería**: a menudo funcionaron 24/7 durante 1-3 años a plena carga de cómputo. La carga sostenida y los ciclos térmicos pueden desgastar la VRAM, así que estas tarjetas pueden tener más desgaste. Pruébalas antes de comprar.',
            '**Tarjetas gaming**: normalmente funcionaron de forma intermitente con carga variable, lo que suele implicar menos estrés sostenido.',
            'Visualmente: las tarjetas de minería suelen mostrar signos de uso intenso (polvo, daños térmicos, etiquetas despegadas). Las tarjetas gaming tienen mejor aspecto.',
            'Precio: las tarjetas de minería suelen publicarse más baratas para el mismo modelo. No merece la pena el riesgo a menos que las pruebes in situ.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '¿Dónde comprar GPUs de segunda mano?',
          items: [
            '**eBay**: protección al comprador disponible en muchos listados. Calificaciones del vendedor visibles. Las condiciones de devolución varían según el listado; compruébalas antes de comprar. El envío puede tardar una semana o más.',
            '**Facebook Marketplace**: ventas locales, prueba in situ antes del pago. Sin riesgo de envío. Disponibilidad inmediata.',
            '**Anuncios clasificados locales**: a menudo los precios más bajos. Solo local. Se informan estafas en cualquier mercado entre particulares; queda en un lugar público seguro y prueba la tarjeta allí mismo antes de pagar.',
            '**Tiendas locales de reparación de ordenadores**: suelen tener inventario de segunda mano. Puedes preguntar por la política de devoluciones. Los precios suelen ser más altos que en eBay, pero hay más recurso.',
          ],
        },
        'testing': {
          id: 'testing',
          title: '¿Cómo probar una GPU de segunda mano antes de comprar?',
          content: [
            '**1. Inspección visual: comprueba daños físicos, componentes quemados y condensadores con fugas.**',
            '2. Instala en un sistema de prueba: arranca el sistema operativo, ejecuta GPU-Z. Verifica las velocidades de reloj (deben coincidir con las especificaciones) y las lecturas de temperatura.',
            '3. Ejecuta una prueba de memoria de GPU mantenida actualmente que admita tu tarjeta (confirma antes la compatibilidad; muchas herramientas antiguas solo admiten generaciones viejas de GPU). Si la herramienta lo permite, prueba la mayor parte de la VRAM durante 1-2 horas. La memoria defectuosa aparece como errores.',
            '4. Ejecuta FurMark (prueba de estrés): 30 minutos a plena carga. La tarjeta no debería bloquearse ni throttlear gravemente.',
            '5. Comprueba las especificaciones de memoria en GPU-Z: compáralas con las del fabricante. Valores significativamente inferiores o errores pueden indicar un problema.',
            'Si compras a distancia (por ejemplo en eBay), pide al vendedor capturas de pantalla de las pruebas y revisa las condiciones de devolución. Las pruebas de estrés exigen mucho a la tarjeta: confirma antes la devolución o la garantía y detén la prueba si las temperaturas parecen anormales.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Errores frecuentes al comprar GPUs de segunda mano',
          items: [
            'Comprar una RTX 3080 de minería con un gran descuento sin probarla: la VRAM puede estar degradada y mostrar errores bajo carga.',
            'Asumir que "como nueva" equivale a VRAM saludable: el aspecto cosmético no equivale a salud de los componentes. Haz siempre una prueba de estrés.',
            'Pagar el envío de una GPU sin protección al comprador (fuera de eBay): si llega defectuosa, puede que tengas poco recurso.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Merece la pena comprar una GPU de minería de segunda mano con gran descuento?', a: 'Solo si puedes probarla in situ durante 2 horas o más con una prueba de memoria de GPU que admita tu tarjeta. De lo contrario, no. Un descuento pequeño rara vez compensa el riesgo de una tarjeta con la VRAM desgastada.' },
            { q: '¿Cómo puedo saber si una GPU de segunda mano fue una tarjeta de minería?', a: 'En muchos casos no es posible determinarlo solo por las fotos. Pregunta directamente al vendedor y compara la respuesta con el estado de la tarjeta. Busca daños térmicos (decoloración cerca de los condensadores) o polvo excesivo.' },
            { q: '¿Cuál es la generación RTX más antigua que debería comprar de segunda mano?', a: 'Las tarjetas de la serie RTX 2000 (2060, 2080; 2018) son antiguas; solo valen la pena a un precio bajo. La serie RTX 3000 (2020-2021) es una base más habitual.' },
            { q: '¿Debería comprar una RTX 4070 o una RTX 3080 de segunda mano?', a: 'El rastreador de InsiderLLM indica $280-350 para una RTX 3080 10GB de segunda mano y no publica precio de la RTX 4070, así que compara los listados actuales de ambas. La RTX 4070 es una generación más reciente con 2 GB más de VRAM; revisa los benchmarks para el tamaño de tu modelo.' },
            { q: '¿Puedo devolver una GPU de segunda mano en eBay si falla al mes?', a: 'Depende de la política del vendedor y del listado. Muchos ofrecen un plazo de devolución limitado; cuando termina, generalmente estás por tu cuenta salvo que aplique una garantía del fabricante. Compruébalo antes de comprar.' },
            { q: '¿Vale la pena pagar un extra por una GPU con protección de devolución?', a: 'A menudo sí. Un plazo de devolución puede protegerte de una pérdida total si la tarjeta falla después de la compra; compara la prima con el precio de la tarjeta.' },
            { q: '¿Debería comprar una RTX 3090 o una RTX 4090 de segunda mano?', a: 'Una RTX 3090 de segunda mano si el presupuesto importa. En los listados vendidos observados en eBay EE. UU., sin gastos de envío, cuesta unos $1,400-1,550, frente a $2,575-3,010 de una RTX 4090 de segunda mano (rastreador de InsiderLLM, fuente actualizada el 2026-10-15). Ambas tienen 24 GB. En las pruebas de 7B de llama.cpp reportadas por desarrolladores (tabla CUDA, discusión #15013) la RTX 4090 genera 186.2 tok/s frente a 158.2 de la RTX 3090 y procesa prompts más del doble de rápido (11,993 frente a 5,175 tok/s). Compra la RTX 4090 sobre todo si necesitas esa velocidad con prompts largos y puedes pagar la diferencia. Los precios son volátiles; revisa los listados actuales.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/es/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms)',
            '[Guía de hardware para LLMs locales](/es/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- precios de listados vendidos en eBay EE. UU. de la RTX 3090 y la RTX 4090 (actualizado el 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- resultados de Llama 2 7B Q4_0 enviados por usuarios.',
            'Documentación de la herramienta de prueba de memoria de GPU que elijas (confirma que admite tu tarjeta)',
            'Base de datos de especificaciones GPU-Z para valores de referencia térmicos y de velocidad de reloj',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'GPUs usadas para LLM locales: RTX 3060, 3080, 3090, 4090',
        'description': 'GPUs de segunda mano para LLMs locales: rangos de precio de RTX 3060, 3080, 3090 y 4090, dónde comprar, riesgos de las tarjetas de minería y cómo probarlas.',
        'url': 'https://www.promptquorum.com/es/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPUs de segunda mano' },
          { '@type': 'Thing', 'name': 'Guía de compra de GPU' },
          { '@type': 'Thing', 'name': 'Prueba de GPU' },
          { '@type': 'Thing', 'name': 'Inferencia local de LLM' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/es/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Merece la pena comprar una GPU de minería de segunda mano con gran descuento?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Solo si puedes probarla in situ durante 2 horas o más con una prueba de memoria de GPU que admita tu tarjeta. De lo contrario, no. Un descuento pequeño rara vez compensa el riesgo de una tarjeta con la VRAM desgastada.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo puedo saber si una GPU de segunda mano fue una tarjeta de minería?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'En muchos casos no es posible determinarlo solo por las fotos. Pregunta directamente al vendedor y compara la respuesta con el estado de la tarjeta. Busca daños térmicos (decoloración cerca de los condensadores) o polvo excesivo.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la generación RTX más antigua que debería comprar de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Las tarjetas de la serie RTX 2000 (2060, 2080; 2018) son antiguas; solo valen la pena a un precio bajo. La serie RTX 3000 (2020-2021) es una base más habitual.' }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar una RTX 4070 o una RTX 3080 de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'El rastreador de InsiderLLM indica $280-350 para una RTX 3080 10GB de segunda mano y no publica precio de la RTX 4070, así que compara los listados actuales de ambas. La RTX 4070 es una generación más reciente con 2 GB más de VRAM; revisa los benchmarks para el tamaño de tu modelo.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo devolver una GPU de segunda mano en eBay si falla al mes?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Depende de la política del vendedor y del listado. Muchos ofrecen un plazo de devolución limitado; cuando termina, generalmente estás por tu cuenta salvo que aplique una garantía del fabricante. Compruébalo antes de comprar.' }
          },
          {
            '@type': 'Question',
            'name': '¿Vale la pena pagar un extra por una GPU con protección de devolución?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A menudo sí. Un plazo de devolución puede protegerte de una pérdida total si la tarjeta falla después de la compra; compara la prima con el precio de la tarjeta.' }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar una RTX 3090 o una RTX 4090 de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Una RTX 3090 de segunda mano si el presupuesto importa. En los listados vendidos observados en eBay EE. UU., sin gastos de envío, cuesta unos $1,400-1,550, frente a $2,575-3,010 de una RTX 4090 de segunda mano (rastreador de InsiderLLM, fuente actualizada el 2026-10-15). Ambas tienen 24 GB. En las pruebas de 7B de llama.cpp reportadas por desarrolladores (tabla CUDA, discusión #15013) la RTX 4090 genera 186.2 tok/s frente a 158.2 de la RTX 3090 y procesa prompts más del doble de rápido (11,993 frente a 5,175 tok/s). Compra la RTX 4090 sobre todo si necesitas esa velocidad con prompts largos y puedes pagar la diferencia. Los precios son volátiles; revisa los listados actuales.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/es/local-llms/used-gpus-for-local-llms',
        'name': 'GPUs de segunda mano para LLMs locales: Comparativa de costes y notas de fiabilidad',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Comparativa de costes: RTX 3060 (unos $300 de segunda mano, rastreador de InsiderLLM) vs RTX 3080 ($280-350, rastreador de InsiderLLM) vs RTX 3090 (unos $1,400-1,550 observados de segunda mano) vs RTX 4090 (unos $2,575-3,010 observados de segunda mano).' },
          { '@type': 'ListItem', position: 2, name: 'Notas de fiabilidad: la RTX 3060 12GB y la RTX 3080 10GB tienen alto volumen de reventa. Las tarjetas de minería pueden tener más desgaste de VRAM; pruébalas antes de comprar.' },
          { '@type': 'ListItem', position: 3, name: 'Modelos de GPU de segunda mano a considerar: RTX 3060 12GB (entrada económica), RTX 3080 10GB (gama media), RTX 4090 24GB (premium, por encima del MSRP).' },
        ],
      },
    },
    ar: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'وحدات ⁨GPU⁩ المستعملة لنماذج ⁨LLM⁩ المحلية: دليل الشراء',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-ar.webp',
      seoTitle: '⁨GPU⁩ مستعملة لنماذج ⁨LLM⁩ المحلية: ⁨RTX 3060⁩ و⁨3080⁩ و⁨4090⁩',
      intro: '**وحدات GPU المستعملة الأقدم تُباع بأقل من سعر إطلاقها (متتبع InsiderLLM: RTX 3080 10GB بين $280 و$350، وRTX 3060 12GB نحو $300)، لكن RTX 3090 وRTX 4090 تُباعان الآن قرب سعر MSRP أو فوقه في قوائم السوق الأمريكي.** السوق المستعمل عادةً ما يكون مليئًا ببطاقات سابقة للتعدين وسابقة للألعاب. الشراء المستعمل قد يكون منطقيًا لأول جهاز لك أو عند الترقية؛ بطاقات التعدين أكثر مخاطرة ما لم تستطع اختبارها في الموقع. الأسعار أدناه تقديرات للسوق الأمريكي وتتغير بسرعة.',
      metaDescription: '⁨GPU⁩ مستعملة لنماذج ⁨LLM⁩ المحلية: نطاقات أسعار ⁨RTX 3060⁩ و⁨3080⁩ و⁨3090⁩ و⁨4090⁩، وأين تشتري، ومخاطر بطاقات التعدين، وكيف تختبر البطاقة قبل الدفع.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**وحدات GPU المستعملة الأقدم تُباع بأقل من سعر إطلاقها (متتبع InsiderLLM: RTX 3080 10GB بين $280 و$350، وRTX 3060 12GB نحو $300)، لكن RTX 3090 وRTX 4090 تُباعان الآن قرب سعر MSRP أو فوقه في قوائم السوق الأمريكي. اختبر أي بطاقة مستعملة قبل الشراء، خصوصًا بطاقات التعدين السابقة.**',
      audience: 'المطورون المُلمّون بـ Ollama أو LM Studio الذين يحسّنون سير عمل نماذج LLM المحلية',
      readTime: '8 دقائق قراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU مستعملة',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'ما وحدات GPU المستعملة الأكثر شيوعًا للشراء؟', anchor: '#safest-cards' },
        { label: 'كم يجب أن تدفع مقابل GPU مستعملة؟', anchor: '#pricing' },
        { label: 'بطاقات التعدين مقابل بطاقات الألعاب: ما الفرق؟', anchor: '#mining-vs-gaming' },
        { label: 'أين تشتري وحدات GPU المستعملة؟', anchor: '#where-to-buy' },
        { label: 'كيف تختبر GPU مستعملة قبل الشراء؟', anchor: '#testing' },
        { label: 'أخطاء شائعة عند شراء وحدات GPU المستعملة', anchor: '#mistakes' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'بطاقات GPU المستعملة مثل RTX 3060 12GB (متتبع InsiderLLM: نحو 300$، النطاق 200-400$) وRTX 3080 10GB (متتبع InsiderLLM: 280-350$) تُباع بأقل من MSRP، بينما تُباع RTX 3090 وRTX 4090 الآن قرب MSRP أو فوقه؛ وغالبًا ما تُعرض بطاقات التعدين بسعر أقل لكنها تحتاج اختبار إجهاد لذاكرة VRAM حضوريًا قبل الشراء.' },
            { type: 'plain-terms', text: 'شراء بطاقة رسومات مستعملة لتشغيل نماذج الذكاء الاصطناعي المحلية ما زال قد يوفّر المال في الطُرز الأقدم، لكن ليس في كل البطاقات: أسعار أحدث البطاقات العالية الفئة حاليًا عند سعر إطلاقها أو أعلى. تجنّب البطاقات التي عملت على مدار الساعة في تعدين العملات الرقمية دون فحصها أولاً. بطاقة الألعاب قليلة الاستخدام عادةً أقل مخاطرة من بطاقة التعدين؛ أما بطاقة التعدين المستعملة فتحتاج اختبار إجهاد للذاكرة قبل أن تدفع المال.' },
          ],
          items: [
            'RTX 3060 12GB المستعملة (متتبع InsiderLLM: نحو $300، النطاق $200-400) وRTX 3080 10GB المستعملة (متتبع InsiderLLM: $280-350) خياران شائعان: كثرة القوائم تسهّل مقارنة الأسعار. اختبر صحة VRAM قبل الشراء.',
            'غالبًا ما تُعرض بطاقات التعدين بسعر أقل، لكن قد يكون فيها تآكل أكبر في VRAM. اشترِها فقط إذا أمكنك إجراء اختبار إجهاد في الموقع لمدة ساعتين أو أكثر.',
            'بطاقات الألعاب (مبيعات أجهزة سابقة للألعاب) عادةً أقل مخاطرة من بطاقات التعدين. الألعاب العَرَضية لا تُجهد VRAM عادةً مثل التعدين على مدار الساعة.',
            'eBay بحماية المشتري وFacebook Marketplace بالاختبار في الموقع مصدران شائعان؛ استخدم الإعلانات المبوّبة المحلية فقط إذا أمكنك اللقاء في مكان عام واختبار البطاقة هناك.',
            'قبل إتمام الشراء، شغّل اختبار ذاكرة GPU محدّثًا ويدعم بطاقتك (تأكد من التوافق أولًا)، ويُفضَّل لمدة 1-2 ساعة. غالبًا ما تظهر VRAM المعطوبة كأخطاء.',
            'توقّع خصمًا على البطاقات مجهولة التاريخ، لكن إذا بدت الصفقة جيدة أكثر من اللازم فقد تكون في البطاقة مشكلات.',
            'تجنّب البطاقات السابقة للخوادم/مراكز البيانات (NVIDIA A100/L40S) ما لم تستطع التحقق من حالتها: فهي غالبًا مبرّدة بشكل سلبي ومصمَّمة لتدفق هواء الخوادم، لذا قد ترتفع حرارتها كثيرًا داخل علبة حاسوب مكتبي.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'ما وحدات GPU المستعملة الأكثر شيوعًا للشراء؟',
          items: [
            '**RTX 3060 12GB** (متتبع InsiderLLM: نحو $300، النطاق $200-400): حجم كبير في السوق المستعمل، أي قوائم كثيرة للمقارنة. اختبر VRAM قبل الشراء.',
            '**RTX 3080 10GB** (متتبع InsiderLLM: $280-350): بطاقة ألعاب شائعة. 10GB قابلة للاستخدام مع النماذج الأصغر لكنها تحدّ من النماذج الأكبر. اختبرها قبل الشراء.',
            '**RTX 4090 24GB** (وفق متتبع InsiderLLM، قوائم بيع eBay الأمريكي: $2,575-3,010): سعر متميز، أعلى من MSRP. حجم إعادة البيع الكبير يوفّر قوائم كثيرة للمقارنة. افحص حالتها كما تفعل مع أي بطاقة مستعملة.',
            '**RTX 3090 24GB** (وفق متتبع InsiderLLM، قوائم بيع eBay الأمريكي: نحو $1,400-1,550): فئة عليا وباهظة. ارتفعت الأسعار بشدة خلال 2026 وقوائم البيع الأخيرة أعلى بوضوح من $1,000. افحص حالتها كما تفعل مع أي بطاقة مستعملة.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'كم يجب أن تدفع مقابل GPU مستعملة؟',
          content: [
            '**مرجع: سعر التجزئة الرسمي (MSRP) مقابل** السوق المستعمل. الأرقام من [متتبع أسعار GPU لدى InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (الصفحة محدّثة في 2026-10-15). أرقام RTX 3090 وRTX 4090 قوائم بيع على eBay الأمريكي دون الشحن؛ ولا يذكر المتتبع منهجية أرقام RTX 3060 وRTX 3080. أسعار السوق الأمريكي بالدولار فقط؛ قد تختلف الأسعار في بلدك بسبب الضرائب والرسوم؛ وهي ليست عروضًا ولا ضمانات.',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 ← مستعملة نحو $300، والنطاق $200-400 (متتبع InsiderLLM؛ أقل من MSRP بنحو 9% عند $300)',
            'RTX 3080 10GB: MSRP $699 ← مستعملة $280-350 (متتبع InsiderLLM؛ أقل من MSRP بنحو 50-60%)',
            'RTX 4090 24GB: MSRP $1,599 ← مستعملة (قوائم بيع) $2,575-3,010 والوسيط $2,860، أعلى من MSRP؛ القوائم الجديدة $2,000-3,000',
            'RTX 3090 24GB: مستعملة (قوائم بيع) نحو $1,400-1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'بطاقات التعدين مقابل بطاقات الألعاب: ما الفرق؟',
          content: [
            '**بطاقات التعدين**: عملت غالبًا على مدار الساعة لمدة 1-3 سنوات بحمل حوسبة كامل. الحمل المستمر والدورات الحرارية قد يُتلفان VRAM، لذا قد تكون في هذه البطاقات VRAM أكثر تآكلًا. اختبرها قبل الشراء.',
            '**بطاقات الألعاب**: عملت عادةً بشكل متقطع بحمل متغير، ما يعني عادةً إجهادًا مستمرًا أقل.',
            'بصريًا: تُظهر بطاقات التعدين غالبًا علامات استخدام مكثف (غبار، أضرار حرارية، ملصقات منزوعة). بطاقات الألعاب تبدو أفضل.',
            'السعر: غالبًا ما تُعرض بطاقات التعدين بسعر أقل للطراز نفسه. لا تستحق المخاطرة ما لم تختبرها في الموقع.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'أين تشتري وحدات GPU المستعملة؟',
          items: [
            '**eBay**: حماية المشتري متاحة في كثير من القوائم. تقييمات البائع مرئية. شروط الإرجاع تختلف من قائمة لأخرى؛ تحقق منها قبل الشراء. قد يستغرق الشحن أسبوعًا أو أكثر.',
            '**Facebook Marketplace**: مبيعات محلية، اختبار في الموقع قبل الدفع. لا مخاطر شحن. توفر فوري.',
            '**الإعلانات المبوّبة المحلية**: غالبًا أدنى الأسعار. محلي فقط. يُبلَّغ عن عمليات احتيال في أي سوق بين الأفراد؛ قابل البائع في مكان عام آمن واختبر البطاقة في الموقع قبل الدفع.',
            '**متاجر إصلاح الحواسيب المحلية**: غالبًا لديها مخزون مستعمل. يمكنك السؤال عن سياسة الإرجاع. الأسعار غالبًا أعلى من eBay، لكن هناك مجال أكبر للرجوع.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'كيف تختبر GPU مستعملة قبل الشراء؟',
          content: [
            '**1. الفحص البصري: تحقق من الأضرار المادية، والمكونات المحترقة، والمكثفات المتسرّبة.**',
            '2. ثبّتها في نظام اختبار: أقلع نظام التشغيل، شغّل GPU-Z. تحقق من سرعات الساعة (يجب أن تطابق المواصفات) وقراءات الحرارة.',
            '3. شغّل اختبار ذاكرة GPU محدّثًا ويدعم بطاقتك (تأكد من التوافق أولًا؛ كثير من الأدوات القديمة تدعم أجيال GPU قديمة فقط). إن سمحت الأداة، اختبر معظم VRAM لمدة 1-2 ساعة. تظهر الذاكرة المعطوبة كأخطاء.',
            '4. شغّل FurMark (اختبار إجهاد): 30 دقيقة بحمل كامل. يجب ألا تتعطل البطاقة أو تُخنق بشدة.',
            '5. تحقق من مواصفات الذاكرة في GPU-Z: قارنها بمواصفات الشركة المصنّعة. القيم الأقل بشكل كبير أو الأخطاء قد تدل على مشكلة.',
            'إذا اشتريت عن بُعد (مثلًا من eBay)، اطلب من البائع لقطات شاشة للاختبار وتحقق من شروط الإرجاع. اختبارات الإجهاد تحمّل البطاقة كثيرًا: تأكد أولًا من شروط الإرجاع أو الضمان وأوقف الاختبار إذا بدت درجات الحرارة غير طبيعية.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'أخطاء شائعة عند شراء وحدات GPU المستعملة',
          items: [
            'شراء RTX 3080 من التعدين بخصم كبير دون اختبارها: قد يكون VRAM متدهورًا ويُظهر أخطاء تحت الحمل.',
            'افتراض أن "كالجديدة" يعادل VRAM سليمًا: المظهر الخارجي لا يعادل صحة المكونات. أجرِ دائمًا اختبار إجهاد.',
            'دفع رسوم شحن GPU دون حماية المشتري (خارج eBay): إذا وصلت معطلة، فقد لا يكون أمامك سوى سبيل ضئيل للرجوع على البائع.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'هل تستحق GPU التعدين المستعملة الشراء بخصم كبير؟', a: 'فقط إذا أمكنك اختبارها في الموقع لمدة ساعتين أو أكثر باختبار ذاكرة GPU يدعم بطاقتك. وإلا، فلا. نادرًا ما يستحق خصم صغير مخاطرة بطاقة ذات VRAM متآكلة.' },
            { q: 'كيف أعرف إن كانت GPU المستعملة بطاقة تعدين؟', a: 'في حالات كثيرة لا يمكن تحديد ذلك من الصور وحدها. اسأل البائع مباشرة وقارن إجابته بحالة البطاقة. ابحث عن أضرار حرارية (تغيّر لون قرب المكثفات) أو غبار مفرط.' },
            { q: 'ما أقدم جيل RTX يجب أن أشتريه مستعملًا؟', a: 'بطاقات سلسلة RTX 2000 (2060، 2080؛ 2018) قديمة؛ لا تستحق الشراء إلا بسعر منخفض. سلسلة RTX 3000 (2020-2021) نقطة بداية أكثر شيوعًا.' },
            { q: 'هل أشتري RTX 4070 أم RTX 3080 مستعملة؟', a: 'يذكر متتبع InsiderLLM سعر RTX 3080 10GB المستعملة بين $280 و$350 ولا يورد سعرًا لـ RTX 4070، لذا قارن القوائم الحالية لكليهما. RTX 4070 جيل أحدث بذاكرة VRAM أكبر بمقدار 2 GB؛ راجع اختبارات الأداء لحجم النموذج الذي تستخدمه.' },
            { q: 'هل يمكنني إرجاع GPU مستعملة على eBay إذا فشلت بعد شهر؟', a: 'يعتمد على سياسة البائع والقائمة. يقدّم كثيرون مهلة إرجاع محدودة؛ بعد انتهائها تكون عادةً على مسؤوليتك ما لم تنطبق ضمانة الشركة المصنّعة. تحقق قبل الشراء.' },
            { q: 'هل يستحق دفع مبلغ إضافي مقابل GPU بحماية إرجاع؟', a: 'غالبًا نعم. قد تحميك مهلة الإرجاع من خسارة كاملة إذا فشلت البطاقة بعد الشراء؛ قارن العلاوة بسعر البطاقة.' },
            { q: 'هل أشتري RTX 3090 أم RTX 4090 مستعملة؟', a: 'RTX 3090 مستعملة إذا كانت الميزانية مهمة. في قوائم البيع المرصودة على eBay الأمريكي (دون الشحن) تبلغ نحو $1,400-1,550 مقابل $2,575-3,010 لـ RTX 4090 مستعملة (متتبع InsiderLLM، المصدر محدّث في 2026-10-15). كلتاهما بسعة 24 GB. في اختبارات 7B على llama.cpp التي أبلغ عنها مطورون (جدول CUDA، النقاش #15013) تولّد RTX 4090 ما يعادل 186.2 tok/s مقابل 158.2 لـ RTX 3090، وتعالج المطالبات بأكثر من ضعف السرعة (11,993 مقابل 5,175 tok/s). اشترِ RTX 4090 أساسًا إذا احتجت هذه السرعة مع المطالبات الطويلة وكنت قادرًا على دفع الفارق. الأسعار متقلبة؛ راجع القوائم الحالية.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[أفضل وحدات GPU الاقتصادية لنماذج LLM المحلية](/ar/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 مقابل RTX 4090](/ar/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[أفضل وحدات GPU لنماذج LLM المحلية](/ar/local-llms/best-gpus-for-local-llms)',
            '[دليل عتاد LLM المحلي](/ar/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- أسعار قوائم البيع على eBay الأمريكي لـ RTX 3090 وRTX 4090 (محدّث في 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- نتائج Llama 2 7B Q4_0 المرسلة من المستخدمين.',
            'وثائق أداة اختبار ذاكرة GPU التي تختارها (تأكد من أنها تدعم بطاقتك)',
            'قاعدة بيانات مواصفات GPU-Z للقيم المرجعية للحرارة وسرعة الساعة',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'أفضل وحدات GPU المستعملة لنماذج LLM المحلية: دليل شراء RTX 3060، 3080، 4090',
        'description': 'GPU مستعملة لنماذج LLM المحلية: نطاقات أسعار RTX 3060 و3080 و3090 و4090، وأين تشتري، ومخاطر بطاقات التعدين، وكيف تختبر البطاقة قبل الدفع.',
        'url': 'https://www.promptquorum.com/ar/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'inLanguage': 'ar',
        'about': [
          { '@type': 'Thing', 'name': 'وحدات GPU المستعملة' },
          { '@type': 'Thing', 'name': 'دليل شراء GPU' },
          { '@type': 'Thing', 'name': 'اختبار GPU' },
          { '@type': 'Thing', 'name': 'الاستدلال المحلي لـ LLM' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ar',
        'url': 'https://www.promptquorum.com/ar/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'هل تستحق GPU التعدين المستعملة الشراء بخصم كبير؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'فقط إذا أمكنك اختبارها في الموقع لمدة ساعتين أو أكثر باختبار ذاكرة GPU يدعم بطاقتك. وإلا، فلا. نادرًا ما يستحق خصم صغير مخاطرة بطاقة ذات VRAM متآكلة.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أعرف إن كانت GPU المستعملة بطاقة تعدين؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'في حالات كثيرة لا يمكن تحديد ذلك من الصور وحدها. اسأل البائع مباشرة وقارن إجابته بحالة البطاقة. ابحث عن أضرار حرارية (تغيّر لون قرب المكثفات) أو غبار مفرط.' }
          },
          {
            '@type': 'Question',
            'name': 'ما أقدم جيل RTX يجب أن أشتريه مستعملًا؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'بطاقات سلسلة RTX 2000 (2060، 2080؛ 2018) قديمة؛ لا تستحق الشراء إلا بسعر منخفض. سلسلة RTX 3000 (2020-2021) نقطة بداية أكثر شيوعًا.' }
          },
          {
            '@type': 'Question',
            'name': 'هل أشتري RTX 4070 أم RTX 3080 مستعملة؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يذكر متتبع InsiderLLM سعر RTX 3080 10GB المستعملة بين $280 و$350 ولا يورد سعرًا لـ RTX 4070، لذا قارن القوائم الحالية لكليهما. RTX 4070 جيل أحدث بذاكرة VRAM أكبر بمقدار 2 GB؛ راجع اختبارات الأداء لحجم النموذج الذي تستخدمه.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني إرجاع GPU مستعملة على eBay إذا فشلت بعد شهر؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يعتمد على سياسة البائع والقائمة. يقدّم كثيرون مهلة إرجاع محدودة؛ بعد انتهائها تكون عادةً على مسؤوليتك ما لم تنطبق ضمانة الشركة المصنّعة. تحقق قبل الشراء.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يستحق دفع مبلغ إضافي مقابل GPU بحماية إرجاع؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'غالبًا نعم. قد تحميك مهلة الإرجاع من خسارة كاملة إذا فشلت البطاقة بعد الشراء؛ قارن العلاوة بسعر البطاقة.' }
          },
          {
            '@type': 'Question',
            'name': 'هل أشتري RTX 3090 أم RTX 4090 مستعملة؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3090 مستعملة إذا كانت الميزانية مهمة. في قوائم البيع المرصودة على eBay الأمريكي (دون الشحن) تبلغ نحو $1,400-1,550 مقابل $2,575-3,010 لـ RTX 4090 مستعملة (متتبع InsiderLLM، المصدر محدّث في 2026-10-15). كلتاهما بسعة 24 GB. في اختبارات 7B على llama.cpp التي أبلغ عنها مطورون (جدول CUDA، النقاش #15013) تولّد RTX 4090 ما يعادل 186.2 tok/s مقابل 158.2 لـ RTX 3090، وتعالج المطالبات بأكثر من ضعف السرعة (11,993 مقابل 5,175 tok/s). اشترِ RTX 4090 أساسًا إذا احتجت هذه السرعة مع المطالبات الطويلة وكنت قادرًا على دفع الفارق. الأسعار متقلبة؛ راجع القوائم الحالية.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ar/local-llms/used-gpus-for-local-llms',
        'name': 'وحدات GPU المستعملة لنماذج LLM المحلية: مقارنة التكلفة وملاحظات الموثوقية',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'مقارنة التكلفة: RTX 3060 (نحو $300 مستعملة، متتبع InsiderLLM) مقابل RTX 3080 ($280-350، متتبع InsiderLLM) مقابل RTX 3090 (نحو $1,400-1,550 مرصودة مستعملة) مقابل RTX 4090 (نحو $2,575-3,010 مرصودة مستعملة).' },
          { '@type': 'ListItem', position: 2, name: 'ملاحظات الموثوقية: RTX 3060 12GB وRTX 3080 10GB لهما حجم إعادة بيع كبير. بطاقات التعدين قد تعاني تآكلًا أكبر في VRAM؛ اختبرها قبل الشراء.' },
          { '@type': 'ListItem', position: 3, name: 'طُرز GPU مستعملة تستحق النظر: RTX 3060 12GB (بداية اقتصادية)، RTX 3080 10GB (فئة متوسطة)، RTX 4090 24GB (متميزة، أعلى من MSRP).' },
        ],
      },
    },
    pt: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'GPUs usadas para LLMs locais: Guia de compra',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-pt.webp',
      seoTitle: 'GPUs usadas para LLMs locais: RTX 3060, 3080, 3090, 4090',
      intro: '**GPUs usadas mais antigas são vendidas abaixo do preço de lançamento (rastreador da InsiderLLM: RTX 3080 10GB US$ 280-350, RTX 3060 12GB cerca de US$ 300), mas a RTX 3090 e a RTX 4090 agora são vendidas perto do MSRP ou acima dele nas listagens dos EUA.** O mercado de usados costuma estar bem abastecido de placas ex-mineração e ex-gaming. Comprar usado pode fazer sentido para seu primeiro setup ou ao atualizar; placas de mineração são mais arriscadas a menos que você possa testá-las in loco. Os preços abaixo são estimativas do mercado dos EUA e mudam rápido.',
      metaDescription: 'GPUs usadas para LLMs locais: faixas de preço da RTX 3060, 3080, 3090 e 4090, onde comprar, riscos das placas de mineração e como testar antes de pagar.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**GPUs usadas mais antigas são vendidas abaixo do preço de lançamento (rastreador da InsiderLLM: RTX 3080 10GB US$ 280-350, RTX 3060 12GB cerca de US$ 300), mas a RTX 3090 e a RTX 4090 agora são vendidas perto do MSRP ou acima dele nas listagens dos EUA. Teste qualquer placa usada antes de comprar, principalmente as ex-mineração.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho de LLMs locais',
      readTime: '8 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU usada',
      toc: [
        { label: 'Resumo', anchor: '#key-takeaways' },
        { label: 'Quais GPUs usadas são opções populares?', anchor: '#safest-cards' },
        { label: 'Quanto pagar por GPUs usadas?', anchor: '#pricing' },
        { label: 'Placas de mineração vs. gaming: qual a diferença?', anchor: '#mining-vs-gaming' },
        { label: 'Onde comprar GPUs usadas?', anchor: '#where-to-buy' },
        { label: 'Como testar uma GPU usada antes de comprar?', anchor: '#testing' },
        { label: 'Erros comuns ao comprar GPUs usadas', anchor: '#mistakes' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'A RTX 3060 12GB usada (rastreador da InsiderLLM: cerca de US$ 300, faixa US$ 200-400) e a RTX 3080 10GB (rastreador da InsiderLLM: US$ 280-350) são vendidas abaixo do MSRP, enquanto a RTX 3090 e a RTX 4090 agora são vendidas perto do MSRP ou acima dele; placas de mineração costumam ser anunciadas mais baratas, mas precisam de um teste de estresse de VRAM presencial antes da compra.' },
            { type: 'plain-terms', text: 'Comprar uma placa de vídeo usada para rodar modelos de IA locais ainda pode economizar dinheiro em modelos mais antigos, mas não em todas as placas: os preços das placas topo de linha mais recentes estão atualmente no preço de lançamento ou acima. Evite placas que rodaram 24/7 minerando criptomoedas sem serem verificadas antes. Uma placa de jogos pouco usada costuma ser uma compra de menor risco do que uma placa de mineração; uma placa de mineração usada precisa de um teste de estresse de memória antes de você fechar negócio.' },
          ],
          items: [
            'RTX 3060 12GB usada (rastreador da InsiderLLM: cerca de US$ 300, faixa US$ 200-400) e RTX 3080 10GB usada (rastreador da InsiderLLM: US$ 280-350) são escolhas populares: o alto volume de anúncios facilita comparar preços. Teste a saúde da VRAM antes de comprar.',
            'Placas de mineração costumam ser anunciadas mais baratas, mas podem ter mais desgaste de VRAM. Compre apenas se puder fazer teste de estresse in loco por 2 horas ou mais.',
            'Placas de gaming (vendas de rigs ex-gaming) costumam ter menos risco do que as de mineração. O gaming casual normalmente não estressa a VRAM como a mineração 24/7.',
            'eBay com proteção ao comprador, quando oferecida (confira os termos de cada plataforma), e Facebook Marketplace com teste in loco são fontes comuns; use classificados locais apenas se puder encontrar o vendedor em local público e testar a placa na hora.',
            'Antes de fechar a compra, execute um teste de memória de GPU atualizado que seja compatível com a sua placa (confirme a compatibilidade antes), de preferência por 1-2 horas. VRAM com defeito costuma aparecer como erros.',
            'Espere um desconto em placas com histórico desconhecido, mas se uma oferta parece boa demais, a placa pode ter problemas.',
            'Evite placas ex-servidor/data center (NVIDIA A100/L40S) a menos que possa verificar o estado — costumam ter refrigeração passiva e ser projetadas para o fluxo de ar de servidores, então podem superaquecer em um gabinete de desktop.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Quais GPUs usadas são opções populares?',
          items: [
            '**RTX 3060 12GB** (rastreador da InsiderLLM: cerca de US$ 300, faixa US$ 200-400): Grande volume no mercado de usados, com muitos anúncios para comparar. Teste a VRAM antes de comprar.',
            '**RTX 3080 10GB** (rastreador da InsiderLLM: US$ 280-350): Placa de gaming popular. 10GB é utilizável com modelos menores, mas limita os maiores. Teste antes de comprar.',
            '**RTX 4090 24GB** (segundo o rastreador da InsiderLLM, listagens vendidas no eBay EUA: US$ 2.575-3.010): Preço premium, acima do MSRP. O alto volume de revenda dá muitos anúncios para comparar. Verifique o estado como em qualquer placa usada.',
            '**RTX 3090 24GB** (segundo o rastreador da InsiderLLM, listagens vendidas no eBay EUA: cerca de US$ 1.400-1.550): Topo de linha e cara. Os preços subiram bastante ao longo de 2026 e as listagens vendidas recentes ficam bem acima de US$ 1.000. Verifique o estado como em qualquer placa usada.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Quanto pagar por GPUs usadas?',
          content: [
            '**Referência: MSRP de varejo vs.** mercado de usados. Os valores vêm do [rastreador de preços de GPU da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (página atualizada em 2026-10-15). Os da RTX 3090 e da RTX 4090 são listagens vendidas no eBay EUA, sem frete; o rastreador não informa o método dos valores da RTX 3060 e da RTX 3080. Apenas preços dos EUA, em dólares; os preços no Brasil podem variar bastante devido a impostos de importação; não são ofertas nem garantias.',
          ],
          items: [
            'RTX 3060 12GB: MSRP US$ 329 → usada cerca de US$ 300, faixa US$ 200-400 (rastreador da InsiderLLM; cerca de 9% abaixo do MSRP a US$ 300)',
            'RTX 3080 10GB: MSRP US$ 699 → usada US$ 280-350 (rastreador da InsiderLLM; cerca de 50-60% abaixo do MSRP)',
            'RTX 4090 24GB: MSRP US$ 1.599 → usada (listagens vendidas) US$ 2.575-3.010, mediana US$ 2.860, acima do MSRP; listagens novas US$ 2.000-3.000',
            'RTX 3090 24GB: usada (listagens vendidas) cerca de US$ 1.400-1.550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Placas de mineração vs. gaming: qual a diferença?',
          content: [
            '**Placas de mineração** costumavam funcionar 24/7 por 1-3 anos com carga computacional máxima. Carga contínua e ciclos térmicos podem desgastar a VRAM, então essas placas podem ter mais desgaste. Teste antes de comprar.',
            '**Placas de gaming** normalmente funcionaram de forma intermitente com carga variável, o que costuma significar menos estresse contínuo.',
            'Visualmente: placas de mineração costumam mostrar sinais de uso intenso (poeira, danos térmicos, etiquetas descascadas). Placas de gaming têm aparência mais limpa.',
            'Preço: placas de mineração costumam ser anunciadas mais baratas pelo mesmo modelo. Não vale o risco a menos que você as teste in loco.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Onde comprar GPUs usadas?',
          items: [
            '**eBay**: Proteção ao comprador, quando oferecida (confira os termos de cada plataforma), disponível em muitos anúncios. Avaliações do vendedor visíveis. As condições de devolução variam por anúncio; confira antes de comprar. O frete pode levar uma semana ou mais.',
            '**Facebook Marketplace**: Vendas locais, teste in loco antes do pagamento. Sem risco de frete. Disponibilidade imediata.',
            '**Classificados locais**: Costumam ter os preços mais baixos. Somente local. Golpes são relatados em qualquer marketplace entre pessoas físicas; encontre o vendedor em local público seguro e teste a placa na hora, antes de pagar.',
            '**Lojas de informática locais com usados**: Costumam ter estoque de segunda mão. Você pode perguntar sobre a política de devolução. Os preços costumam ser mais altos que no eBay, mas há mais recurso.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Como testar uma GPU usada antes de comprar?',
          content: [
            '**1. Inspeção visual: verifique danos físicos, componentes queimados e capacitores com vazamento.**',
            '2. Instale em um sistema de teste: inicialize o sistema operacional, execute o GPU-Z. Verifique as velocidades de clock (devem corresponder às especificações) e as leituras de temperatura.',
            '3. Execute um teste de memória de GPU atualizado e compatível com a sua placa (confirme antes; muitas ferramentas antigas só suportam gerações antigas de GPU). Se a ferramenta permitir, teste a maior parte da VRAM por 1-2 horas. Memória com defeito aparece como erros.',
            '4. Execute o FurMark (teste de estresse): 30 minutos com carga máxima. A placa não deve travar nem fazer throttling grave.',
            '5. Verifique as especificações de memória no GPU-Z: compare com as especificações do fabricante. Valores significativamente inferiores ou erros podem indicar um problema.',
            'Se comprar à distância (por exemplo no eBay), peça ao vendedor capturas de tela dos testes e confira as condições de devolução. Testes de estresse exigem muito da placa: confirme antes a devolução ou a garantia e interrompa o teste se as temperaturas parecerem anormais.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Erros comuns ao comprar GPUs usadas',
          items: [
            'Comprar uma RTX 3080 de mineração com grande desconto sem testá-la — a VRAM pode estar degradada e mostrar erros sob carga.',
            'Assumir que "como nova" equivale a VRAM saudável — aparência estética não equivale à saúde dos componentes. Faça sempre um teste de estresse.',
            'Pagar o frete de uma GPU sem proteção ao comprador (fora do eBay) — se chegar com defeito, talvez você tenha pouco recurso.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Vale a pena comprar uma GPU de mineração usada com grande desconto?', a: 'Somente se puder testá-la in loco por 2 horas ou mais com um teste de memória de GPU compatível com a sua placa. Caso contrário, não. Um desconto pequeno raramente compensa o risco de uma placa com VRAM desgastada.' },
            { q: 'Como posso saber se uma GPU usada foi uma placa de mineração?', a: 'Em muitos casos não é possível determinar apenas pelas fotos. Pergunte diretamente ao vendedor e compare a resposta com o estado da placa. Procure danos térmicos (descoloração perto dos capacitores) ou poeira excessiva.' },
            { q: 'Qual é a geração RTX mais antiga que devo comprar usada?', a: 'Placas da série RTX 2000 (2060, 2080; 2018) são antigas; só vale considerá-las por um preço baixo. A série RTX 3000 (2020-2021) é uma base mais comum.' },
            { q: 'Devo comprar uma RTX 4070 ou RTX 3080 usada?', a: 'O rastreador da InsiderLLM lista a RTX 3080 10GB usada a US$ 280-350 e não informa preço da RTX 4070, então compare os anúncios atuais das duas. A RTX 4070 é uma geração mais recente com 2 GB a mais de VRAM; confira benchmarks para o tamanho do seu modelo.' },
            { q: 'Posso devolver uma GPU usada no eBay se ela falhar após 1 mês?', a: 'Depende da política do vendedor e do anúncio. Muitos oferecem um prazo de devolução limitado; depois dele, você geralmente fica por sua conta, a menos que haja garantia do fabricante. Confira antes de comprar.' },
            { q: 'Vale a pena pagar um extra por uma GPU com proteção de devolução?', a: 'Muitas vezes sim. Um prazo de devolução pode protegê-lo de uma perda total se a placa falhar após a compra; compare o custo extra com o preço da placa.' },
            { q: 'Devo comprar uma RTX 3090 ou RTX 4090 usada?', a: 'Uma RTX 3090 usada, se o orçamento importa. Nas listagens vendidas observadas no eBay EUA (sem frete) ela custa cerca de US$ 1.400-1.550, contra US$ 2.575-3.010 de uma RTX 4090 usada (rastreador da InsiderLLM, fonte atualizada em 2026-10-15). Ambas têm 24 GB. Nos testes 7B do llama.cpp reportados por desenvolvedores (placar CUDA, discussão #15013) a RTX 4090 gera 186.2 tok/s contra 158.2 da RTX 3090 e processa prompts mais de duas vezes mais rápido (11.993 contra 5.175 tok/s). Compre a RTX 4090 principalmente se precisar dessa velocidade com prompts longos e puder pagar a diferença. Os preços são voláteis; confira as listagens atuais.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/pt/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Melhores GPUs para LLMs locais](/pt/local-llms/best-gpus-for-local-llms)',
            '[Guia de hardware para LLMs locais](/pt/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- preços de listagens vendidas no eBay EUA da RTX 3090 e da RTX 4090 (atualizado em 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- resultados de Llama 2 7B Q4_0 enviados por usuários.',
            'Documentação da ferramenta de teste de memória de GPU escolhida (confirme que ela é compatível com a sua placa)',
            'Banco de dados de especificações GPU-Z para valores de referência térmicos e de velocidade de clock',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'GPUs usadas para LLMs locais: RTX 3060, 3080, 3090, 4090',
        description: 'GPUs usadas para LLMs locais: faixas de preço da RTX 3060, 3080, 3090 e 4090, onde comprar, riscos das placas de mineração e como testar antes de pagar.',
        url: 'https://www.promptquorum.com/pt/local-llms/used-gpus-for-local-llms',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-05',
        dateModified: '2026-11-15',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'GPUs usadas' },
          { '@type': 'Thing', name: 'Guia de compra de GPU' },
          { '@type': 'Thing', name: 'Teste de GPU' },
          { '@type': 'Thing', name: 'Inferência local de LLM' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        educationalLevel: 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        url: 'https://www.promptquorum.com/pt/local-llms/used-gpus-for-local-llms',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Vale a pena comprar uma GPU de mineração usada com grande desconto?',
            acceptedAnswer: { '@type': 'Answer', text: 'Somente se puder testá-la in loco por 2 horas ou mais com um teste de memória de GPU compatível com a sua placa. Caso contrário, não. Um desconto pequeno raramente compensa o risco de uma placa com VRAM desgastada.' }
          },
          {
            '@type': 'Question',
            name: 'Como posso saber se uma GPU usada foi uma placa de mineração?',
            acceptedAnswer: { '@type': 'Answer', text: 'Em muitos casos não é possível determinar apenas pelas fotos. Pergunte diretamente ao vendedor e compare a resposta com o estado da placa. Procure danos térmicos (descoloração perto dos capacitores) ou poeira excessiva.' }
          },
          {
            '@type': 'Question',
            name: 'Qual é a geração RTX mais antiga que devo comprar usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'Placas da série RTX 2000 (2060, 2080; 2018) são antigas; só vale considerá-las por um preço baixo. A série RTX 3000 (2020-2021) é uma base mais comum.' }
          },
          {
            '@type': 'Question',
            name: 'Devo comprar uma RTX 4070 ou RTX 3080 usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'O rastreador da InsiderLLM lista a RTX 3080 10GB usada a US$ 280-350 e não informa preço da RTX 4070, então compare os anúncios atuais das duas. A RTX 4070 é uma geração mais recente com 2 GB a mais de VRAM; confira benchmarks para o tamanho do seu modelo.' }
          },
          {
            '@type': 'Question',
            name: 'Posso devolver uma GPU usada no eBay se ela falhar após 1 mês?',
            acceptedAnswer: { '@type': 'Answer', text: 'Depende da política do vendedor e do anúncio. Muitos oferecem um prazo de devolução limitado; depois dele, você geralmente fica por sua conta, a menos que haja garantia do fabricante. Confira antes de comprar.' }
          },
          {
            '@type': 'Question',
            name: 'Vale a pena pagar um extra por uma GPU com proteção de devolução?',
            acceptedAnswer: { '@type': 'Answer', text: 'Muitas vezes sim. Um prazo de devolução pode protegê-lo de uma perda total se a placa falhar após a compra; compare o custo extra com o preço da placa.' }
          },
          {
            '@type': 'Question',
            name: 'Devo comprar uma RTX 3090 ou RTX 4090 usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'Uma RTX 3090 usada, se o orçamento importa. Nas listagens vendidas observadas no eBay EUA (sem frete) ela custa cerca de US$ 1.400-1.550, contra US$ 2.575-3.010 de uma RTX 4090 usada (rastreador da InsiderLLM, fonte atualizada em 2026-10-15). Ambas têm 24 GB. Nos testes 7B do llama.cpp reportados por desenvolvedores (placar CUDA, discussão #15013) a RTX 4090 gera 186.2 tok/s contra 158.2 da RTX 3090 e processa prompts mais de duas vezes mais rápido (11.993 contra 5.175 tok/s). Compre a RTX 4090 principalmente se precisar dessa velocidade com prompts longos e puder pagar a diferença. Os preços são voláteis; confira as listagens atuais.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/pt/local-llms/used-gpus-for-local-llms',
        name: 'GPUs usadas para LLMs locais: Comparação de custos e notas de confiabilidade',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Comparação de custos: RTX 3060 (cerca de US$ 300 usada, rastreador da InsiderLLM) vs RTX 3080 (US$ 280-350, rastreador da InsiderLLM) vs RTX 3090 (cerca de US$ 1.400-1.550 observados, usada) vs RTX 4090 (cerca de US$ 2.575-3.010 observados, usada).' },
          { '@type': 'ListItem', position: 2, name: 'Notas de confiabilidade: RTX 3060 12GB e RTX 3080 10GB têm alto volume de revenda. Placas de mineração podem ter mais desgaste de VRAM; teste antes de comprar.' },
          { '@type': 'ListItem', position: 3, name: 'Modelos de GPU usada a considerar: RTX 3060 12GB (entrada econômica), RTX 3080 10GB (faixa intermediária), RTX 4090 24GB (premium, acima do MSRP).' },
        ],
      },
    },
    de: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'Gebrauchte GPUs für lokale LLMs: Preise, Risiken und Tests',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-de.webp',
      seoTitle: 'Gebrauchte GPUs für lokale LLMs: RTX 3060 bis 4090',
      intro: '**Ältere gebrauchte GPUs werden unter ihrem Einführungspreis verkauft (InsiderLLM-Tracker: RTX 3080 10GB 280-350 $, RTX 3060 12GB ca. 300 $), die RTX 3090 und die RTX 4090 liegen in US-Angeboten inzwischen aber nahe an oder über der UVP.** Der Gebrauchtmarkt ist in der Regel gut mit Ex-Mining- und Ex-Gaming-Karten versorgt. Der Kauf gebrauchter Hardware kann für Ihr erstes System oder beim Aufrüsten sinnvoll sein; Mining-Karten sind riskanter, es sei denn, Sie können vor Ort testen. Die Preise unten sind Schätzungen für den US-Markt und ändern sich schnell.',
      metaDescription: 'Gebrauchte GPUs für lokale LLMs: Preisbereiche für RTX 3060, 3080, 3090 und 4090, wo kaufen, Risiken bei Mining-Karten und wie Sie eine Karte vor dem Kauf testen.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Ältere gebrauchte GPUs werden unter ihrem Einführungspreis verkauft (InsiderLLM-Tracker: RTX 3080 10GB 280-350 $, RTX 3060 12GB ca. 300 $), die RTX 3090 und die RTX 4090 liegen in US-Angeboten inzwischen aber nahe an oder über der UVP. Testen Sie jede gebrauchte Karte vor dem Kauf, besonders Ex-Mining-Karten.**',
      audience: 'Entwickler, die mit Ollama oder LM Studio lokale LLM-Workflows optimieren',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Gebrauchte GPU',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Welche gebrauchten GPUs sind beliebte Optionen?', anchor: '#safest-cards' },
        { label: 'Wie viel sollten Sie für gebrauchte GPUs bezahlen?', anchor: '#pricing' },
        { label: 'Mining-Karten vs. Gaming-Karten: Was ist der Unterschied?', anchor: '#mining-vs-gaming' },
        { label: 'Wo sollten Sie gebrauchte GPUs kaufen?', anchor: '#where-to-buy' },
        { label: 'Wie testen Sie eine gebrauchte GPU vor dem Kauf?', anchor: '#testing' },
        { label: 'Häufige Fehler beim Kauf gebrauchter GPUs', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Gebrauchte GPUs wie die RTX 3060 12GB (InsiderLLM-Tracker: ca. 300 $, Spanne 200-400 $) und die RTX 3080 10GB (InsiderLLM-Tracker: 280-350 $) werden unter der UVP verkauft, während die RTX 3090 und die RTX 4090 inzwischen nahe an oder über der UVP liegen; Mining-Karten werden oft günstiger angeboten, benötigen aber vor dem Kauf einen persönlichen VRAM-Stresstest.' },
            { type: 'plain-terms', text: 'Der Kauf einer gebrauchten Grafikkarte für lokale KI-Modelle kann bei älteren Modellen weiterhin Geld sparen, aber nicht bei jeder Karte: Die Preise der neuesten High-End-Karten liegen derzeit auf oder über dem Einführungspreis. Vermeiden Sie Karten, die rund um die Uhr fürs Krypto-Mining liefen, ohne vorher geprüft zu werden. Eine kaum genutzte Gaming-Karte ist in der Regel risikoärmer als eine gebrauchte Mining-Karte; eine gebrauchte Mining-Karte braucht vor dem Kauf einen Speicher-Stresstest.' },
          ],
          items: [
            'RTX 3060 12GB gebraucht (InsiderLLM-Tracker: ca. 300 $, Spanne 200-400 $) und RTX 3080 10GB gebraucht (InsiderLLM-Tracker: 280-350 $) sind beliebte Optionen: Das große Angebot erleichtert den Preisvergleich. Prüfen Sie den VRAM-Zustand vor dem Kauf.',
            'Mining-Karten werden oft günstiger angeboten, können aber mehr VRAM-Verschleiß haben. Kaufen Sie nur, wenn Sie vor Ort 2+ Stunden Stresstest durchführen können.',
            'Gaming-Karten (Ex-Gaming-Rig-Verkäufe) sind in der Regel risikoärmer als Mining-Karten. Gelegentliches Gaming belastet den VRAM typischerweise nicht wie 24/7-Mining.',
            'eBay mit Käuferschutz und Facebook Marketplace mit Vor-Ort-Test sind gängige Quellen; nutzen Sie lokale Kleinanzeigen nur, wenn Sie sich an einem öffentlichen Ort treffen und die Karte vor Ort testen können.',
            'Führen Sie vor dem Abschluss einen aktuell gepflegten GPU-Speichertest durch, der Ihre Karte unterstützt (Kompatibilität vorher prüfen), idealerweise 1-2 Stunden lang. Fehlerhafter VRAM zeigt sich oft als Fehlermeldungen.',
            'Rechnen Sie bei Karten mit unbekannter Vorgeschichte mit einem Preisabschlag; wenn ein Angebot zu gut aussieht, hat die Karte möglicherweise Probleme.',
            'Vermeiden Sie Ex-Server-/Rechenzentrumskarten (NVIDIA A100/L40S), es sei denn, Sie können ihren Zustand prüfen – sie sind oft passiv gekühlt und für den Luftstrom von Servern ausgelegt, daher können sie in einem Desktop-Gehäuse überhitzen.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Welche gebrauchten GPUs sind beliebte Optionen?',
          items: [
            '**RTX 3060 12GB** (InsiderLLM-Tracker: ca. 300 $, Spanne 200-400 $): Großes Angebot auf dem Gebrauchtmarkt, viele Inserate zum Vergleichen. VRAM vor dem Kauf testen.',
            '**RTX 3080 10GB** (InsiderLLM-Tracker: 280-350 $): Beliebte Gaming-Karte. 10GB sind für kleinere Modelle nutzbar, begrenzen aber größere. Vor dem Kauf testen.',
            '**RTX 4090 24GB** (laut InsiderLLM-Tracker, US-eBay-Verkaufsangebote: 2.575-3.010 $): Premium-Preise, über der UVP. Das hohe Wiederverkaufsvolumen liefert viele Inserate zum Vergleichen. Zustand wie bei jeder Gebrauchtkarte prüfen.',
            '**RTX 3090 24GB** (laut InsiderLLM-Tracker, US-eBay-Verkaufsangebote: ca. 1.400-1.550 $): High-End und teuer. Die Preise sind 2026 stark gestiegen, und aktuelle Verkaufsangebote liegen deutlich über 1.000 $. Zustand wie bei jeder Gebrauchtkarte prüfen.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Wie viel sollten Sie für gebrauchte GPUs bezahlen?',
          content: [
            '**Vergleich: Retail-UVP vs.** Gebrauchtmarkt. Die Werte stammen aus dem [GPU-Preis-Tracker von InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Seite aktualisiert am 2026-10-15). Die Werte für RTX 3090 und RTX 4090 sind US-eBay-Verkaufsangebote ohne Versand; für die Werte der RTX 3060 und RTX 3080 nennt der Tracker keine Methode. Nur US-Preise in US-Dollar, in Deutschland können sie abweichen; keine Angebote und keine Garantien.',
          ],
          items: [
            'RTX 3060 12GB: UVP 329 $ → gebraucht etwa 300 $, Spanne 200-400 $ (InsiderLLM-Tracker; ca. 9 % unter der UVP bei 300 $)',
            'RTX 3080 10GB: UVP 699 $ → gebraucht 280-350 $ (InsiderLLM-Tracker; ca. 50-60 % unter der UVP)',
            'RTX 4090 24GB: UVP 1.599 $ → gebraucht (Verkaufsangebote) 2.575-3.010 $, Median 2.860 $, über der UVP; Neuware-Angebote 2.000-3.000 $',
            'RTX 3090 24GB: gebraucht (Verkaufsangebote) ca. 1.400-1.550 $',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Mining-Karten vs. Gaming-Karten: Was ist der Unterschied?',
          content: [
            '**Mining-Karten** liefen oft 24/7 für 1-3 Jahre bei voller Rechenlast. Dauerlast und thermische Zyklen können den VRAM verschleißen, daher können Mining-Karten mehr VRAM-Verschleiß aufweisen. Vor dem Kauf testen.',
            '**Gaming-Karten** liefen meist intermittierend bei wechselnder Last, was typischerweise weniger Dauerbelastung bedeutet.',
            'Visuell: Mining-Karten zeigen oft Zeichen starker Nutzung (Staub, Wärmeschaden, abgelöste Etiketten). Gaming-Karten sehen sauberer aus.',
            'Preis: Mining-Karten werden für dasselbe Modell oft günstiger angeboten. Das Risiko lohnt sich nur, wenn Sie vor Ort testen.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Wo sollten Sie gebrauchte GPUs kaufen?',
          items: [
            '**eBay**: Käuferschutz bei vielen Angeboten verfügbar. Verkäuferbewertungen sichtbar. Rückgabebedingungen variieren je nach Angebot; vor dem Kauf prüfen. Der Versand kann eine Woche oder länger dauern.',
            '**Facebook Marketplace**: Lokale Verkäufe, Test vor Ort vor Zahlung. Kein Versandrisiko. Sofortige Verfügbarkeit.',
            '**Lokale Kleinanzeigen**: Oft die niedrigsten Preise. Nur lokal. Betrugsfälle werden auf jedem Peer-to-Peer-Marktplatz gemeldet; treffen Sie sich an einem sicheren öffentlichen Ort und testen Sie die Karte vor der Zahlung vor Ort.',
            '**Lokale Computerreparaturläden**: Haben oft Gebrauchtbestand. Sie können nach der Rückgaberichtlinie fragen. Die Preise sind oft höher als bei eBay, dafür gibt es mehr Ansprechpartner.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Wie testen Sie eine gebrauchte GPU vor dem Kauf?',
          content: [
            '**1. Sichtprüfung: Auf physische Schäden, verbrannte Komponenten, austretende Kondensatoren prüfen.**',
            '2. In Testsystem installieren: In Betriebssystem starten, GPU-Z ausführen. Taktfrequenzen prüfen (sollten Spec entsprechen), Temperaturlesungen.',
            '3. Einen aktuell gepflegten GPU-Speichertest ausführen, der Ihre Karte unterstützt (Kompatibilität vorher prüfen; viele ältere Tools unterstützen nur alte GPU-Generationen). Wenn das Tool es erlaubt, den Großteil des VRAM 1-2 Stunden lang testen. Fehlerhafter Speicher zeigt sich als Fehler.',
            '4. FurMark ausführen (Stresstest): 30 Minuten bei voller Last. Karte sollte nicht abstürzen oder stark drosseln.',
            '5. Speicherspezifikationen in GPU-Z prüfen: Mit den Herstellerangaben vergleichen. Deutlich niedrigere Werte oder Fehler können auf ein Problem hindeuten.',
            'Beim Fernkauf (zum Beispiel auf eBay) bitten Sie den Verkäufer um Screenshots der Tests und prüfen die Rückgabebedingungen. Stresstests belasten die Karte stark: Klären Sie vorher Rückgabe oder Garantie und brechen Sie den Test ab, wenn die Temperaturen ungewöhnlich wirken.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Häufige Fehler beim Kauf gebrauchter GPUs',
          items: [
            'Eine Mining-RTX-3080 mit hohem Rabatt kaufen, ohne zu testen – der VRAM kann verschlissen sein und unter Last Fehler zeigen.',
            'Annehmen, dass "wie neu" bedeutet gesunder VRAM – Kosmetik ≠ Komponentengesundheit. Immer Stress-Test durchführen.',
            'Für Versand ohne Käuferschutz bezahlen (nicht eBay) – kommt sie defekt an, haben Sie möglicherweise kaum Rückgriffsmöglichkeiten.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Lohnt es sich, eine gebrauchte Mining-GPU mit starkem Rabatt zu kaufen?', a: 'Nur, wenn Sie sie vor Ort 2+ Stunden mit einem GPU-Speichertest testen können, der Ihre Karte unterstützt. Sonst nein. Ein kleiner Rabatt ist das Risiko einer Karte mit verschlissenem VRAM selten wert.' },
            { q: 'Wie erkenne ich, ob eine gebrauchte GPU eine Mining-Karte war?', a: 'Oft können Sie es allein anhand von Fotos nicht erkennen. Fragen Sie den Verkäufer direkt und vergleichen Sie die Antwort mit dem Zustand der Karte. Achten Sie auf Wärmeschäden (Verfärbungen neben Kondensatoren) oder ungewöhnlich starken Staub.' },
            { q: 'Was ist die älteste RTX-Generation, die ich gebraucht kaufen sollte?', a: 'Karten der RTX-2000-Serie (2060, 2080; 2018) sind alt; nur zu einem niedrigen Preis in Betracht ziehen. Die RTX-3000-Serie (2020-2021) ist eine gängigere Basis.' },
            { q: 'Sollte ich eine gebrauchte RTX 4070 oder RTX 3080 kaufen?', a: 'Der InsiderLLM-Tracker nennt für die RTX 3080 10GB gebraucht 280-350 $ und führt keinen Preis für die RTX 4070, vergleichen Sie daher aktuelle Angebote beider Karten. Die RTX 4070 ist eine neuere Generation mit 2 GB mehr VRAM; prüfen Sie Benchmarks für Ihre Modellgröße.' },
            { q: 'Kann ich eine gebrauchte GPU auf eBay zurückgeben, wenn sie nach 1 Monat ausfällt?', a: 'Das hängt von der Richtlinie des Verkäufers und des Angebots ab. Viele bieten ein begrenztes Rückgabefenster; danach sind Sie in der Regel auf sich allein gestellt, sofern keine Herstellergarantie greift. Vor dem Kauf prüfen.' },
            { q: 'Lohnt es sich, für eine GPU mit Rückgabeschutz einen Aufpreis zu zahlen?', a: 'Oft ja. Ein Rückgabefenster kann Sie vor einem Totalverlust schützen, wenn die Karte nach dem Kauf ausfällt; vergleichen Sie den Aufpreis mit dem Preis der Karte.' },
            { q: 'Sollte ich eine gebrauchte RTX 3090 oder RTX 4090 kaufen?', a: 'Eine gebrauchte RTX 3090, wenn das Budget zählt. In beobachteten US-eBay-Verkaufsangeboten (ohne Versand) kostet sie ca. 1.400-1.550 $, eine gebrauchte RTX 4090 dagegen 2.575-3.010 $ (InsiderLLM-Tracker, Quelle aktualisiert am 2026-10-15). Beide haben 24 GB. In von Entwicklern gemeldeten llama.cpp-7B-Tests (CUDA-Scoreboard, Diskussion #15013) erzeugt die RTX 4090 186,2 Tok/s gegenüber 158,2 bei der RTX 3090 und verarbeitet Prompts mehr als doppelt so schnell (11.993 gegenüber 5.175 Tok/s). Kaufen Sie die RTX 4090 vor allem, wenn Sie diese Prompt-Geschwindigkeit brauchen und den Aufpreis tragen können. Die Preise schwanken; prüfen Sie aktuelle Angebote.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Empfohlene Artikel',
          items: [
            '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms)',
            '[Leitfaden zur lokalen LLM-Hardware](/de/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- US-eBay-Verkaufspreise für RTX 3090 und RTX 4090 (aktualisiert am 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- von Nutzern eingereichte Ergebnisse für Llama 2 7B Q4_0.',
            'Dokumentation des gewählten GPU-Speichertest-Tools (Kompatibilität mit Ihrer Karte prüfen)',
            'GPU-Z-Spezifikationsdatenbank für thermische und Taktfrequenz-Baselines',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Gebrauchte GPUs für lokale LLMs: RTX 3060 bis 4090',
        'description': 'Gebrauchte GPUs für lokale LLMs: Preisbereiche für RTX 3060, 3080, 3090 und 4090, wo kaufen, Risiken bei Mining-Karten und wie Sie eine Karte vor dem Kauf testen.',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Gebrauchte GPUs' },
          { '@type': 'Thing', 'name': 'GPU-Kaufleitfaden' },
          { '@type': 'Thing', 'name': 'GPU-Test' },
          { '@type': 'Thing', 'name': 'Lokale LLM-Inferenz' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Lohnt es sich, eine gebrauchte Mining-GPU mit starkem Rabatt zu kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Nur, wenn Sie sie vor Ort 2+ Stunden mit einem GPU-Speichertest testen können, der Ihre Karte unterstützt. Sonst nein. Ein kleiner Rabatt ist das Risiko einer Karte mit verschlissenem VRAM selten wert.' }
          },
          {
            '@type': 'Question',
            'name': 'Wie erkenne ich, ob eine gebrauchte GPU eine Mining-Karte war?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oft können Sie es allein anhand von Fotos nicht erkennen. Fragen Sie den Verkäufer direkt und vergleichen Sie die Antwort mit dem Zustand der Karte. Achten Sie auf Wärmeschäden (Verfärbungen neben Kondensatoren) oder ungewöhnlich starken Staub.' }
          },
          {
            '@type': 'Question',
            'name': 'Was ist die älteste RTX-Generation, die ich gebraucht kaufen sollte?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Karten der RTX-2000-Serie (2060, 2080; 2018) sind alt; nur zu einem niedrigen Preis in Betracht ziehen. Die RTX-3000-Serie (2020-2021) ist eine gängigere Basis.' }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich eine gebrauchte RTX 4070 oder RTX 3080 kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Der InsiderLLM-Tracker nennt für die RTX 3080 10GB gebraucht 280-350 $ und führt keinen Preis für die RTX 4070, vergleichen Sie daher aktuelle Angebote beider Karten. Die RTX 4070 ist eine neuere Generation mit 2 GB mehr VRAM; prüfen Sie Benchmarks für Ihre Modellgröße.' }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich eine gebrauchte GPU auf eBay zurückgeben, wenn sie nach 1 Monat ausfällt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Das hängt von der Richtlinie des Verkäufers und des Angebots ab. Viele bieten ein begrenztes Rückgabefenster; danach sind Sie in der Regel auf sich allein gestellt, sofern keine Herstellergarantie greift. Vor dem Kauf prüfen.' }
          },
          {
            '@type': 'Question',
            'name': 'Lohnt es sich, für eine GPU mit Rückgabeschutz einen Aufpreis zu zahlen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oft ja. Ein Rückgabefenster kann Sie vor einem Totalverlust schützen, wenn die Karte nach dem Kauf ausfällt; vergleichen Sie den Aufpreis mit dem Preis der Karte.' }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich eine gebrauchte RTX 3090 oder RTX 4090 kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Eine gebrauchte RTX 3090, wenn das Budget zählt. In beobachteten US-eBay-Verkaufsangeboten (ohne Versand) kostet sie ca. 1.400-1.550 $, eine gebrauchte RTX 4090 dagegen 2.575-3.010 $ (InsiderLLM-Tracker, Quelle aktualisiert am 2026-10-15). Beide haben 24 GB. In von Entwicklern gemeldeten llama.cpp-7B-Tests (CUDA-Scoreboard, Diskussion #15013) erzeugt die RTX 4090 186,2 Tok/s gegenüber 158,2 bei der RTX 3090 und verarbeitet Prompts mehr als doppelt so schnell (11.993 gegenüber 5.175 Tok/s). Kaufen Sie die RTX 4090 vor allem, wenn Sie diese Prompt-Geschwindigkeit brauchen und den Aufpreis tragen können. Die Preise schwanken; prüfen Sie aktuelle Angebote.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'name': 'Gebrauchte GPUs für lokale LLMs: Kostenvergleich & Hinweise zur Zuverlässigkeit',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Kostenvergleich: RTX 3060 (ca. 300 $ gebraucht, InsiderLLM-Tracker) vs RTX 3080 (280-350 $, InsiderLLM-Tracker) vs RTX 3090 (ca. 1.400-1.550 $ beobachtet, gebraucht) vs RTX 4090 (ca. 2.575-3.010 $ beobachtet, gebraucht).' },
          { '@type': 'ListItem', position: 2, name: 'Hinweise zur Zuverlässigkeit: RTX 3060 12GB und RTX 3080 10GB haben ein hohes Wiederverkaufsvolumen. Mining-Karten können mehr VRAM-Verschleiß haben; vor dem Kauf testen.' },
          { '@type': 'ListItem', position: 3, name: 'Gebrauchte GPU-Modelle zur Auswahl: RTX 3060 12GB (günstiger Einstieg), RTX 3080 10GB (Mittelklasse), RTX 4090 24GB (Premium, über der UVP).' },
        ],
      },
    },
    fr: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'GPU d\'occasion pour LLMs locaux : guide d\'achat',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-fr.webp',
      seoTitle: 'GPU d\'occasion pour LLM locaux : RTX 3060 à 4090',
      intro: '**Les GPU d\'occasion plus anciens se vendent en dessous de leur prix de lancement (suivi d\'InsiderLLM : RTX 3080 10GB 280-350 $, RTX 3060 12GB environ 300 $), mais la RTX 3090 et la RTX 4090 se vendent désormais près du PDSF ou au-dessus dans les annonces américaines.** Le marché de l\'occasion est généralement bien approvisionné en cartes ex-mining et ex-gaming. L\'achat d\'occasion peut avoir du sens pour votre premier système ou lors d\'une mise à niveau ; les cartes minières sont plus risquées sauf si vous pouvez tester sur site. Les prix ci-dessous sont des estimations pour le marché américain et changent rapidement.',
      metaDescription: 'GPU d\'occasion pour LLM locaux : fourchettes de prix des RTX 3060, 3080, 3090 et 4090, où acheter, risques des cartes de minage et comment tester avant de payer.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Les GPU d\'occasion plus anciens se vendent en dessous de leur prix de lancement (suivi d\'InsiderLLM : RTX 3080 10GB 280-350 $, RTX 3060 12GB environ 300 $), mais la RTX 3090 et la RTX 4090 se vendent désormais près du PDSF ou au-dessus dans les annonces américaines. Testez toute carte d\'occasion avant d\'acheter, surtout les cartes ex-mining.**',
      audience: 'Développeurs familiers avec Ollama ou LM Studio optimisant les workflows LLM locaux',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU utilisée',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Quelles GPU d\'occasion sont des choix populaires ?', anchor: '#safest-cards' },
        { label: 'Combien devriez-vous payer pour les GPU utilisées ?', anchor: '#pricing' },
        { label: 'Cartes minières vs cartes gaming : Quelle est la différence ?', anchor: '#mining-vs-gaming' },
        { label: 'Où devriez-vous acheter les GPU utilisées ?', anchor: '#where-to-buy' },
        { label: 'Comment testez-vous une GPU utilisée avant de vous engager ?', anchor: '#testing' },
        { label: 'Erreurs courantes lors de l\'achat de GPU utilisées', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Les GPU d\'occasion comme la RTX 3060 12GB (suivi d\'InsiderLLM : environ 300 $, fourchette 200-400 $) et la RTX 3080 10GB (suivi d\'InsiderLLM : 280-350 $) se vendent en dessous du PDSF, tandis que la RTX 3090 et la RTX 4090 se vendent désormais près du PDSF ou au-dessus ; les cartes de minage sont souvent annoncées moins cher mais nécessitent un test de stress VRAM en personne avant l\'achat.' },
            { type: 'plain-terms', text: 'Acheter une carte graphique d\'occasion pour exécuter des modèles d\'IA locaux peut encore faire économiser de l\'argent sur les modèles plus anciens, mais pas sur toutes les cartes : les prix des cartes haut de gamme les plus récentes sont actuellement au niveau de leur prix de lancement ou au-dessus. Évitez les cartes qui ont miné des cryptomonnaies 24h/24 sans avoir été vérifiées au préalable. Une carte de jeu peu utilisée est généralement un achat moins risqué qu\'une carte de minage ; une carte de minage d\'occasion nécessite un test de stress mémoire avant de conclure l\'achat.' },
          ],
          items: [
            'RTX 3060 12GB d\'occasion (suivi d\'InsiderLLM : environ 300 $, fourchette 200-400 $) et RTX 3080 10GB d\'occasion (suivi d\'InsiderLLM : 280-350 $) sont des choix populaires : le grand nombre d\'annonces facilite la comparaison des prix. Testez la santé du VRAM avant d\'acheter.',
            'Les cartes minières sont souvent annoncées moins cher mais peuvent présenter plus d\'usure du VRAM. N\'achetez que si vous pouvez tester sur site pendant 2+ heures.',
            'Les cartes gaming (reventes ex-gaming) sont généralement moins risquées que les cartes minières. Le gaming occasionnel ne sollicite généralement pas le VRAM comme le mining 24/7.',
            'eBay avec protection acheteur et Facebook Marketplace avec test sur site sont des sources courantes ; n\'utilisez les petites annonces locales que si vous pouvez vous retrouver dans un lieu public et tester la carte sur place.',
            'Avant de finaliser, exécutez un test mémoire GPU activement maintenu qui prend en charge votre carte (vérifiez d\'abord la compatibilité), idéalement pendant 1-2 heures. Un VRAM défectueux se manifeste souvent par des erreurs.',
            'Attendez-vous à une remise sur les cartes sans historique connu ; si une offre semble trop belle, la carte peut avoir des problèmes.',
            'Évitez les cartes ex-serveur/data-center (NVIDIA A100/L40S) sauf si vous pouvez vérifier leur état – elles sont souvent refroidies passivement et conçues pour le flux d\'air d\'un serveur, elles peuvent donc surchauffer dans un boîtier de bureau.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Quelles GPU d\'occasion sont des choix populaires ?',
          items: [
            '**RTX 3060 12GB** (suivi d\'InsiderLLM : environ 300 $, fourchette 200-400 $) : Gros volume sur le marché d\'occasion, donc beaucoup d\'annonces à comparer. Testez le VRAM avant d\'acheter.',
            '**RTX 3080 10GB** (suivi d\'InsiderLLM : 280-350 $) : Carte gaming populaire. 10GB sont utilisables pour les petits modèles mais limitent les plus grands. Testez avant d\'acheter.',
            '**RTX 4090 24GB** (selon le suivi d\'InsiderLLM, annonces vendues sur eBay États-Unis : 2 575-3 010 $) : Prix premium, au-dessus du PDSF. Le volume de revente élevé donne beaucoup d\'annonces à comparer. Vérifiez l\'état comme pour toute carte d\'occasion.',
            '**RTX 3090 24GB** (selon le suivi d\'InsiderLLM, annonces vendues sur eBay États-Unis : environ 1 400-1 550 $) : Haut de gamme et chère. Les prix ont fortement augmenté en 2026 et les annonces vendues récentes sont nettement au-dessus de 1 000 $. Vérifiez l\'état comme pour toute carte d\'occasion.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Combien devriez-vous payer pour les GPU utilisées ?',
          content: [
            '**Comparaison : PDSF retail vs.** marché occasion. Les valeurs proviennent du [suivi des prix des GPU d\'InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (page mise à jour le 2026-10-15). Celles de la RTX 3090 et de la RTX 4090 sont des annonces vendues sur eBay États-Unis, hors livraison ; le suivi n\'indique pas sa méthode pour la RTX 3060 et la RTX 3080. Prix américains uniquement, en dollars, ils peuvent différer en France ; ce ne sont ni des offres ni des garanties.',
          ],
          items: [
            'RTX 3060 12GB : PDSF 329 $ → occasion environ 300 $, fourchette 200-400 $ (suivi d\'InsiderLLM ; environ 9 % sous le PDSF à 300 $)',
            'RTX 3080 10GB : PDSF 699 $ → occasion 280-350 $ (suivi d\'InsiderLLM ; environ 50-60 % sous le PDSF)',
            'RTX 4090 24GB : PDSF 1 599 $ → occasion (annonces vendues) 2 575-3 010 $, médiane 2 860 $, au-dessus du PDSF ; annonces neuves 2 000-3 000 $',
            'RTX 3090 24GB : occasion (annonces vendues) environ 1 400-1 550 $',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Cartes minières vs cartes gaming : Quelle est la différence ?',
          content: [
            '**Cartes minières** ont souvent fonctionné 24/7 pendant 1-3 ans à charge de calcul complète. Une charge soutenue et des cycles thermiques peuvent user le VRAM, donc ces cartes peuvent présenter plus d\'usure du VRAM. Testez avant d\'acheter.',
            '**Cartes gaming** fonctionnaient généralement par intermittence à charge variable, ce qui signifie typiquement moins de contrainte soutenue.',
            'Visuellement : Les cartes minières montrent souvent des signes d\'utilisation intensive (poussière, dommages thermiques, étiquettes décollées). Les cartes gaming paraissent plus propres.',
            'Prix : Les cartes minières sont souvent annoncées moins cher pour le même modèle. Pas la peine du risque sauf si vous testez sur site.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Où devriez-vous acheter les GPU utilisées ?',
          items: [
            '**eBay** : Protection acheteur disponible sur de nombreuses annonces. Notations vendeur visibles. Les conditions de retour varient selon l\'annonce ; vérifiez avant d\'acheter. La livraison peut prendre une semaine ou plus.',
            '**Facebook Marketplace** : Ventes locales, test sur site avant paiement. Pas de risque d\'expédition. Disponibilité instantanée.',
            '**Petites annonces locales** : Souvent les prix les plus bas. Local uniquement. Des arnaques sont signalées sur toute place de marché entre particuliers ; retrouvez-vous dans un lieu public sûr et testez la carte sur place avant de payer.',
            '**Magasins de réparation informatique locaux** : Ont souvent de l\'occasion. Vous pouvez demander la politique de retour. Les prix sont souvent plus élevés qu\'eBay, mais il y a plus de recours.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Comment testez-vous une GPU utilisée avant de vous engager ?',
          content: [
            '**1. Inspection visuelle : Vérifiez les dommages physiques, composants brûlés, condensateurs qui fuient.**',
            '2. Installer dans système test : Démarrer dans OS, exécuter GPU-Z. Vérifier les vitesses d\'horloge (doivent correspondre à spec), lectures de température.',
            '3. Exécuter un test mémoire GPU activement maintenu qui prend en charge votre carte (vérifiez d\'abord la compatibilité ; beaucoup d\'anciens outils ne gèrent que d\'anciennes générations de GPU). Si l\'outil le permet, tester la majeure partie du VRAM pendant 1-2 heures. La mémoire défectueuse apparaît comme des erreurs.',
            '4. Exécuter FurMark (test stress) : 30 minutes à charge complète. La carte ne doit pas planter ou réduire sévèrement.',
            '5. Vérifier les spécifications mémoire dans GPU-Z : Comparer aux spécifications du fabricant. Des valeurs nettement inférieures ou des erreurs peuvent indiquer un problème.',
            'Si vous achetez à distance (par exemple sur eBay), demandez au vendeur des captures d\'écran des tests et vérifiez les conditions de retour. Les tests de stress sollicitent fortement la carte : confirmez d\'abord le retour ou la garantie et arrêtez le test si les températures paraissent anormales.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Erreurs courantes lors de l\'achat de GPU utilisées',
          items: [
            'Acheter une RTX 3080 minière avec une forte remise sans tester – le VRAM peut être dégradé et montrer des erreurs sous charge.',
            'Supposer "comme neuve" signifie VRAM sain – cosmétique ≠ santé composant. Toujours test stress.',
            'Payer expédition sans protection acheteur (pas eBay) – si arrive morte, vous êtes bloqué.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            { q: 'Vaut-il la peine d\'acheter une GPU minière utilisée avec forte réduction ?', a: 'Seulement si vous pouvez la tester sur site pendant 2+ heures avec un test mémoire GPU qui prend en charge votre carte. Sinon, non. Une petite réduction vaut rarement le risque d\'une carte au VRAM usé.' },
            { q: 'Comment savoir si une GPU utilisée était une carte minière ?', a: 'Souvent, les photos seules ne suffisent pas. Demandez directement au vendeur et comparez sa réponse à l\'état de la carte. Cherchez des dommages thermiques (décoloration près des condensateurs) ou une poussière inhabituellement abondante.' },
            { q: 'Quelle est la génération RTX la plus ancienne que je devrais acheter utilisée ?', a: 'Les cartes de la série RTX 2000 (2060, 2080 ; 2018) sont anciennes ; à n\'envisager qu\'à bas prix. La série RTX 3000 (2020-2021) est une base plus courante.' },
            { q: 'Devrais-je acheter une RTX 4070 ou RTX 3080 utilisée ?', a: 'Le suivi d\'InsiderLLM indique 280-350 $ pour une RTX 3080 10GB d\'occasion et ne donne pas de prix pour la RTX 4070 ; comparez donc les annonces actuelles des deux. La RTX 4070 est une génération plus récente avec 2 Go de VRAM en plus ; consultez les benchmarks pour la taille de votre modèle.' },
            { q: 'Puis-je retourner une GPU utilisée sur eBay si elle échoue après 1 mois ?', a: 'Cela dépend de la politique du vendeur et de l\'annonce. Beaucoup proposent un délai de retour limité ; une fois celui-ci écoulé, vous êtes généralement seul, sauf garantie constructeur. Vérifiez avant d\'acheter.' },
            { q: 'Vaut-il la peine de payer un supplément pour une GPU avec protection retour ?', a: 'Souvent oui. Un délai de retour peut vous protéger d\'une perte totale si la carte tombe en panne après l\'achat ; comparez le supplément au prix de la carte.' },
            { q: 'Devrais-je acheter RTX 3090 ou RTX 4090 utilisée ?', a: 'Une RTX 3090 d\'occasion si le budget compte. Dans les annonces vendues observées sur eBay États-Unis (hors livraison), elle coûte environ 1 400-1 550 $, contre 2 575-3 010 $ pour une RTX 4090 d\'occasion (suivi InsiderLLM, source mise à jour le 2026-10-15). Les deux ont 24 Go. Dans les tests llama.cpp 7B rapportés par des développeurs (tableau CUDA, discussion #15013), la RTX 4090 génère 186.2 tok/s contre 158.2 pour la RTX 3090 et traite les prompts plus de deux fois plus vite (11 993 contre 5 175 tok/s). Choisissez la RTX 4090 surtout si vous avez besoin de cette vitesse sur de longs prompts et pouvez payer l\'écart. Les prix sont volatils ; consultez les annonces actuelles.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lectures recommandées',
          items: [
            '[Meilleures GPU budget pour LLMs locaux](/fr/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Meilleures GPU pour LLMs locaux](/fr/local-llms/best-gpus-for-local-llms)',
            '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- prix des annonces vendues sur eBay États-Unis pour RTX 3090 et RTX 4090 (mis à jour le 2026-10-15).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- résultats Llama 2 7B Q4_0 soumis par des utilisateurs.',
            'Documentation de l\'outil de test mémoire GPU choisi (vérifiez qu\'il prend en charge votre carte)',
            'Base données spécifications GPU-Z pour baselines thermiques et fréquence horloge',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'GPU d\'occasion pour LLM locaux : RTX 3060 à 4090',
        'description': 'GPU d\'occasion pour LLM locaux : fourchettes de prix des RTX 3060, 3080, 3090 et 4090, où acheter, risques des cartes de minage et comment tester avant de payer.',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPU utilisées' },
          { '@type': 'Thing', 'name': 'Guide achat GPU' },
          { '@type': 'Thing', 'name': 'Test GPU' },
          { '@type': 'Thing', 'name': 'Inférence LLM local' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Vaut-il la peine d\'acheter une GPU minière utilisée avec forte réduction ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Seulement si vous pouvez la tester sur site pendant 2+ heures avec un test mémoire GPU qui prend en charge votre carte. Sinon, non. Une petite réduction vaut rarement le risque d\'une carte au VRAM usé.' }
          },
          {
            '@type': 'Question',
            'name': 'Comment savoir si une GPU utilisée était une carte minière ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Souvent, les photos seules ne suffisent pas. Demandez directement au vendeur et comparez sa réponse à l\'état de la carte. Cherchez des dommages thermiques (décoloration près des condensateurs) ou une poussière inhabituellement abondante.' }
          },
          {
            '@type': 'Question',
            'name': 'Quelle est la génération RTX la plus ancienne que je devrais acheter utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Les cartes de la série RTX 2000 (2060, 2080 ; 2018) sont anciennes ; à n\'envisager qu\'à bas prix. La série RTX 3000 (2020-2021) est une base plus courante.' }
          },
          {
            '@type': 'Question',
            'name': 'Devrais-je acheter une RTX 4070 ou RTX 3080 utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Le suivi d\'InsiderLLM indique 280-350 $ pour une RTX 3080 10GB d\'occasion et ne donne pas de prix pour la RTX 4070 ; comparez donc les annonces actuelles des deux. La RTX 4070 est une génération plus récente avec 2 Go de VRAM en plus ; consultez les benchmarks pour la taille de votre modèle.' }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je retourner une GPU utilisée sur eBay si elle échoue après 1 mois ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Cela dépend de la politique du vendeur et de l\'annonce. Beaucoup proposent un délai de retour limité ; une fois celui-ci écoulé, vous êtes généralement seul, sauf garantie constructeur. Vérifiez avant d\'acheter.' }
          },
          {
            '@type': 'Question',
            'name': 'Vaut-il la peine de payer un supplément pour une GPU avec protection retour ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Souvent oui. Un délai de retour peut vous protéger d\'une perte totale si la carte tombe en panne après l\'achat ; comparez le supplément au prix de la carte.' }
          },
          {
            '@type': 'Question',
            'name': 'Devrais-je acheter RTX 3090 ou RTX 4090 utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Une RTX 3090 d\'occasion si le budget compte. Dans les annonces vendues observées sur eBay États-Unis (hors livraison), elle coûte environ 1 400-1 550 $, contre 2 575-3 010 $ pour une RTX 4090 d\'occasion (suivi InsiderLLM, source mise à jour le 2026-10-15). Les deux ont 24 Go. Dans les tests llama.cpp 7B rapportés par des développeurs (tableau CUDA, discussion #15013), la RTX 4090 génère 186.2 tok/s contre 158.2 pour la RTX 3090 et traite les prompts plus de deux fois plus vite (11 993 contre 5 175 tok/s). Choisissez la RTX 4090 surtout si vous avez besoin de cette vitesse sur de longs prompts et pouvez payer l\'écart. Les prix sont volatils ; consultez les annonces actuelles.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'name': 'GPU d\'occasion pour LLMs locaux : Comparaison des coûts et notes de fiabilité',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Comparaison des coûts : RTX 3060 (environ 300 $ d\'occasion, suivi d\'InsiderLLM) vs RTX 3080 (280-350 $, suivi d\'InsiderLLM) vs RTX 3090 (environ 1 400-1 550 $ observés, occasion) vs RTX 4090 (environ 2 575-3 010 $ observés, occasion).' },
          { '@type': 'ListItem', position: 2, name: 'Notes de fiabilité : RTX 3060 12GB et RTX 3080 10GB ont un volume de revente élevé. Les cartes minières peuvent présenter plus d\'usure du VRAM ; testez avant d\'acheter.' },
          { '@type': 'ListItem', position: 3, name: 'Modèles de GPU d\'occasion à envisager : RTX 3060 12GB (entrée économique), RTX 3080 10GB (milieu de gamme), RTX 4090 24GB (premium, au-dessus du PDSF).' },
        ],
      },
    },
    ja: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: 'ローカルLLM向け中古GPU：購入ガイド',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-ja.webp',
      seoTitle: '中古GPUでローカルLLM：RTX 3060〜4090の選び方',
      intro: '**古めの中古GPUは発売価格を下回る価格で売られていますが（InsiderLLMトラッカー：RTX 3080 10GBは$280-350、RTX 3060 12GBは約$300）、RTX 3090とRTX 4090は米国の出品で現在MSRP付近かそれ以上で取引されています。** 中古市場には元マイニングおよび元ゲーミングのカードが豊富に流通しています。初めての構築やアップグレードでは中古購入が合理的な場合もありますが、マイニングカードは現地でテストできない限りリスクが高くなります。以下の価格は米国市場の目安で、すぐに変動します。',
      metaDescription: 'ローカルLLM向け中古GPU：RTX 3060、3080、3090、4090の価格帯（米国市場の目安）、購入先、マイニングカードのリスク、購入前のテスト方法を解説します。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**古めの中古GPUは発売価格を下回る価格で売られていますが（InsiderLLMトラッカー：RTX 3080 10GBは$280-350、RTX 3060 12GBは約$300）、RTX 3090とRTX 4090は米国の出品で現在MSRP付近かそれ以上で取引されています。中古カードは、特に元マイニングカードの場合、購入前に必ずテストしてください。**',
      audience: 'OllamaまたはLM Studioに精通し、ローカルLLMワークフローを最適化する開発者',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: '中古GPU',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '人気のある中古GPUはどれですか？', anchor: '#safest-cards' },
        { label: '中古GPUにいくら払うべきですか？', anchor: '#pricing' },
        { label: 'マイニングカードvs.ゲーミングカード：違いは何ですか？', anchor: '#mining-vs-gaming' },
        { label: '中古GPUはどこで購入すべきですか？', anchor: '#where-to-buy' },
        { label: 'コミットする前に中古GPUをテストするにはどうしますか？', anchor: '#testing' },
        { label: '中古GPU購入の一般的な間違い', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: '中古のRTX 3060 12GB（InsiderLLMトラッカー：約300ドル、範囲200～400ドル）やRTX 3080 10GB（InsiderLLMトラッカー：280～350ドル）はMSRPを下回る価格で売られていますが、RTX 3090とRTX 4090は現在MSRP付近かそれ以上で取引されています。マイニングカードは安く出品されがちですが、購入前に現地でのVRAMストレステストが必要です。' },
            { type: 'plain-terms', text: 'ローカルAIモデル用に中古のグラフィックカードを購入すれば、古いモデルでは節約できる場合がありますが、すべてのカードで安くなるわけではありません。最新のハイエンドカードは現在、発売価格かそれ以上で取引されています。事前確認なしに24時間365日暗号通貨のマイニングに使われていたカードは避けてください。軽く使用されたゲーミングカードは通常、中古マイニングカードよりリスクが低く、中古マイニングカードは購入前にメモリのストレステストが必要です。' },
          ],
          items: [
            'RTX 3060 12GB中古（InsiderLLMトラッカー：約$300、範囲$200-400）およびRTX 3080 10GB中古（InsiderLLMトラッカー：$280-350）は人気の選択肢です。出品数が多く価格を比較しやすいです。購入前にVRAMの状態をテストしてください。',
            'マイニングカードは安く出品されがちですが、VRAMの消耗が大きい可能性があります。2時間以上のストレステストを現地でできる場合のみ購入してください。',
            'ゲーミングカード（元ゲーミングリグ販売）は通常、マイニングカードよりリスクが低いです。カジュアルゲーミングは通常、24/7マイニングほどVRAMに負荷をかけません。',
            '購入者保護付きeBayや現地テストができるFacebookマーケットプレイスが一般的な入手先です。地域の掲示板は、公共の場で会って現地でテストできる場合のみ利用してください。',
            '購入前に、お使いのカードに対応した、現在もメンテナンスされているGPUメモリテストを（事前に対応状況を確認のうえ）1-2時間を目安に実行してください。不良VRAMはエラーとして表れることが多いです。',
            '履歴不明なカードは値引きが期待できますが、条件が良すぎる場合はカードに問題がある可能性があります。',
            'サーバー/データセンター元のカード（NVIDIA A100/L40S）は、状態を確認できない限り避けてください。多くは受動冷却でサーバーの風流を前提に設計されているため、デスクトップケース内では過熱する可能性があります。',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '人気のある中古GPUはどれですか？',
          items: [
            '**RTX 3060 12GB**（InsiderLLMトラッカー：約$300、範囲$200-400）：中古市場で取引量が多く、比較できる出品が豊富です。購入前にVRAMをテストしてください。',
            '**RTX 3080 10GB**（InsiderLLMトラッカー：$280-350）：人気のゲーミングカード。10GBは小さめのモデルには使えますが、大きなモデルには制約があります。購入前にテストしてください。',
            '**RTX 4090 24GB**（InsiderLLMトラッカーによるeBay米国の落札実績：$2,575-3,010）：プレミアム価格でMSRPを上回ります。再販売量が多く比較できる出品が豊富です。他の中古カードと同様に状態を確認してください。',
            '**RTX 3090 24GB**（InsiderLLMトラッカーによるeBay米国の落札実績：約$1,400-1,550）：ハイエンドで高価です。2026年を通じて価格が大きく上昇し、直近の落札実績は$1,000を大きく上回っています。他の中古カードと同様に状態を確認してください。',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '中古GPUにいくら払うべきですか？',
          content: [
            '**ベンチマーク：小売MSRP vs.** 中古市場。数値は[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（ページ更新日：2026-10-15）によるものです。RTX 3090とRTX 4090はeBay米国の落札実績（送料別）で、RTX 3060とRTX 3080の算出方法はトラッカーに記載されていません。米国の価格（米ドル）のみで、日本では異なる場合があります。オファーや保証ではありません。',
          ],
          items: [
            'RTX 3060 12GB：MSRP $329 → 中古 約$300、範囲$200-400（InsiderLLMトラッカー、$300ならMSRPより約9%安い）',
            'RTX 3080 10GB：MSRP $699 → 中古 $280-350（InsiderLLMトラッカー、MSRPより約50-60%安い）',
            'RTX 4090 24GB：MSRP $1,599 → 中古（落札実績）$2,575-3,010、中央値$2,860、MSRPを上回る。新品の出品は$2,000-3,000',
            'RTX 3090 24GB：中古（落札実績）約$1,400-1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'マイニングカードvs.ゲーミングカード：違いは何ですか？',
          content: [
            '**マイニングカード** は多くの場合、1-3年間フル計算負荷で24/7動作していました。継続的な負荷と熱サイクルはVRAMを消耗させる可能性があり、VRAMの消耗が大きい場合があります。購入前にテストしてください。',
            '**ゲーミングカード** は通常、変動する負荷で間欠的に動作していたため、継続的なストレスは少ない傾向があります。',
            '視覚的に：マイニングカードは頻繁に重い使用の兆候を示します（ほこり、熱損傷、剥がれたラベル）。ゲーミングカードはより清潔に見えます。',
            '価格：マイニングカードは同じモデルでも安く出品されがちです。現地でテストしない限り、リスクに見合いません。',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '中古GPUはどこで購入すべきですか？',
          items: [
            '**eBay** ：多くの出品で購入者保護が利用可能。売り手評価が表示されます。返品条件は出品ごとに異なるため、購入前に確認してください。配送には1週間以上かかる場合があります。',
            '**Facebookマーケットプレイス** ：地元の販売、支払い前に現地テスト。送料リスクなし。即時利用可能。',
            '**地域の掲示板** ：価格が最も安いことが多い。地元のみ。個人間取引ではどの市場でも詐欺が報告されています。安全な公共の場で会い、支払い前に現地でテストしてください。',
            '**ローカルコンピュータ修理店** ：中古在庫があることが多い。返品ポリシーについて尋ねることができます。eBayより高いことが多いですが、対応を求めやすいです。',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'コミットする前に中古GPUをテストするにはどうしますか？',
          content: [
            '**1. 目視検査：物理的損傷、焼け焦げた部品、漏れているコンデンサをチェック。**',
            '2. テストシステムにインストール：OSを起動し、GPU-Zを実行。クロック速度がスペックと一致するか確認、温度読み取り。',
            '3. お使いのカードに対応した、現在もメンテナンスされているGPUメモリテストを実行します（事前に対応状況を確認してください。古いツールの多くは古い世代のGPUしかサポートしません）。ツールが対応していれば、VRAMの大部分を対象に1-2時間実行します。不良メモリはエラーとして表示されます。',
            '4. FurMark（ストレステスト）を実行：フル負荷で30分間。カードはクラッシュせず、大幅に制限されるべきではありません。',
            '5. GPU-Zでメモリ仕様を確認：メーカー仕様と比較。著しく低い値やエラーは問題を示す可能性があります。',
            'eBayなどで遠隔購入する場合は、売り手にテストのスクリーンショットを求め、返品条件を確認してください。ストレステストはカードに大きな負荷をかけます。事前に返品条件や保証を確認し、温度が異常な場合は中止してください。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '中古GPU購入の一般的な間違い',
          items: [
            '大幅な割引のマイニングRTX 3080をテストせずに購入 – VRAMが劣化していて、負荷下でエラーが出る可能性があります。',
            '「新品同様の状態」がVRAM健全を意味すると仮定 – 外見≠コンポーネント健全性。常にストレステストを実施。',
            '購入者保護なしで送料を払う（eBayではない） – 到着時に死亡していれば、立ち往生しています。',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: '大幅割引で中古マイニングGPUを購入する価値はありますか？', a: 'お使いのカードに対応したGPUメモリテストで2時間以上現地でテストできる場合のみ。そうでなければいいえ。小さな割引は、VRAMが消耗したカードのリスクに見合うことはまれです。' },
            { q: '中古GPUがマイニングカードであったかどうかをどうやって判断しますか？', a: '多くの場合、写真だけからは判断できません。売り手に直接聞いて、回答をカードの状態と照らし合わせてください。熱損傷（コンデンサの近くの変色）や異常に多い埃を確認してください。' },
            { q: '購入すべき最も古いRTX世代は何ですか？', a: 'RTX 2000シリーズ（2060、2080；2018年）は古いため、低価格の場合のみ検討してください。RTX 3000シリーズ（2020-2021）がより一般的な基準です。' },
            { q: '中古RTX 4070またはRTX 3080を購入すべきですか？', a: 'InsiderLLMトラッカーは中古RTX 3080 10GBを$280-350としており、RTX 4070の価格は掲載していません。両方の最新の出品を比較してください。RTX 4070は新しい世代でVRAMが2 GB多いので、使用するモデルサイズに合わせてベンチマークを確認してください。' },
            { q: '1ヶ月後に失敗した場合、eBayで中古GPUを返品できますか？', a: '売り手と出品によって異なります。多くは限られた返品期間を設けており、期間終了後は製造元の保証が適用されない限り自己責任になるのが一般的です。購入前に確認してください。' },
            { q: '返品保護付きGPUに追加料金を払う価値はありますか？', a: '多くの場合はい。返品期間があれば、購入後にカードが故障しても全損を避けられます。追加料金をカードの価格と比較してください。' },
            { q: '中古RTX 3090またはRTX 4090を購入すべきですか？', a: '予算が重要なら中古のRTX 3090です。eBay米国の落札実績の観測値（送料別）では中古RTX 3090が約$1,400-1,550、中古RTX 4090が$2,575-3,010です（InsiderLLMトラッカー、情報源の更新日：2026-10-15）。どちらも24 GBです。開発者が報告したllama.cppの7Bテスト（CUDAスコアボード、ディスカッション#15013）では、RTX 4090の生成速度は186.2 tok/s、RTX 3090は158.2 tok/sで、プロンプト処理は2倍以上速い結果です（11,993対5,175 tok/s）。長いプロンプトでその速度が必要で、差額を負担できる場合にRTX 4090を選んでください。価格は変動するため、最新の出品を確認してください。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '関連リーディング',
          items: [
            '[ローカルLLM向けベストバジェットGPU](/ja/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[ローカルLLM向けベストGPU](/ja/local-llms/best-gpus-for-local-llms)',
            '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'ソース',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- RTX 3090とRTX 4090のeBay米国落札価格（2026-10-15更新）。',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- ユーザー投稿のLlama 2 7B Q4_0結果。',
            '選択したGPUメモリテストツールのドキュメント（お使いのカードに対応しているか確認してください）',
            '熱およびクロック速度ベースライン用GPU-Z仕様データベース',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '中古GPUでローカルLLM：RTX 3060〜4090の選び方',
        'description': 'ローカルLLM向け中古GPU：RTX 3060、3080、3090、4090の価格帯（米国市場の目安）、購入先、マイニングカードのリスク、購入前のテスト方法を解説します。',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '中古GPU' },
          { '@type': 'Thing', 'name': 'GPU購入ガイド' },
          { '@type': 'Thing', 'name': 'GPUテスト' },
          { '@type': 'Thing', 'name': 'ローカルLLM推論' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '大幅割引で中古マイニングGPUを購入する価値はありますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'お使いのカードに対応したGPUメモリテストで2時間以上現地でテストできる場合のみ。そうでなければいいえ。小さな割引は、VRAMが消耗したカードのリスクに見合うことはまれです。' }
          },
          {
            '@type': 'Question',
            'name': '中古GPUがマイニングカードであったかどうかをどうやって判断しますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '多くの場合、写真だけからは判断できません。売り手に直接聞いて、回答をカードの状態と照らし合わせてください。熱損傷（コンデンサの近くの変色）や異常に多い埃を確認してください。' }
          },
          {
            '@type': 'Question',
            'name': '購入すべき最も古いRTX世代は何ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000シリーズ（2060、2080；2018年）は古いため、低価格の場合のみ検討してください。RTX 3000シリーズ（2020-2021）がより一般的な基準です。' }
          },
          {
            '@type': 'Question',
            'name': '中古RTX 4070またはRTX 3080を購入すべきですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'InsiderLLMトラッカーは中古RTX 3080 10GBを$280-350としており、RTX 4070の価格は掲載していません。両方の最新の出品を比較してください。RTX 4070は新しい世代でVRAMが2 GB多いので、使用するモデルサイズに合わせてベンチマークを確認してください。' }
          },
          {
            '@type': 'Question',
            'name': '1ヶ月後に失敗した場合、eBayで中古GPUを返品できますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '売り手と出品によって異なります。多くは限られた返品期間を設けており、期間終了後は製造元の保証が適用されない限り自己責任になるのが一般的です。購入前に確認してください。' }
          },
          {
            '@type': 'Question',
            'name': '返品保護付きGPUに追加料金を払う価値はありますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '多くの場合はい。返品期間があれば、購入後にカードが故障しても全損を避けられます。追加料金をカードの価格と比較してください。' }
          },
          {
            '@type': 'Question',
            'name': '中古RTX 3090またはRTX 4090を購入すべきですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '予算が重要なら中古のRTX 3090です。eBay米国の落札実績の観測値（送料別）では中古RTX 3090が約$1,400-1,550、中古RTX 4090が$2,575-3,010です（InsiderLLMトラッカー、情報源の更新日：2026-10-15）。どちらも24 GBです。開発者が報告したllama.cppの7Bテスト（CUDAスコアボード、ディスカッション#15013）では、RTX 4090の生成速度は186.2 tok/s、RTX 3090は158.2 tok/sで、プロンプト処理は2倍以上速い結果です（11,993対5,175 tok/s）。長いプロンプトでその速度が必要で、差額を負担できる場合にRTX 4090を選んでください。価格は変動するため、最新の出品を確認してください。' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'name': 'ローカルLLM向け中古GPU：コスト比較＆信頼性メモ',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'コスト比較：RTX 3060（中古 約$300、InsiderLLMトラッカー）vs RTX 3080（$280-350、InsiderLLMトラッカー）vs RTX 3090（観測値で約$1,400-1,550、中古）vs RTX 4090（観測値で約$2,575-3,010、中古）。' },
          { '@type': 'ListItem', position: 2, name: '信頼性メモ：RTX 3060 12GBおよびRTX 3080 10GBは再販売量が多い。マイニングカードはVRAMの消耗が大きい可能性があるため、購入前にテストしてください。' },
          { '@type': 'ListItem', position: 3, name: '検討したい中古GPUモデル：RTX 3060 12GB（低予算の入門）、RTX 3080 10GB（ミドルクラス）、RTX 4090 24GB（プレミアム、MSRP超え）。' },
        ],
      },
    },
    zh: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: '本地LLM二手GPU：选购指南',
      heroImage: '/images/used-gpus-for-local-llms-overview-hero-zh.webp',
      seoTitle: '本地LLM二手GPU：RTX 3060至4090选购指南',
      intro: '**较旧的二手GPU成交价低于发售价（InsiderLLM追踪页：RTX 3080 10GB为$280-350，RTX 3060 12GB约$300），但RTX 3090和RTX 4090目前在美国挂牌中已接近或高于MSRP。** 二手市场通常有大量前采矿和前游戏的卡。购买二手对于首次组装或升级可能有意义；除非可以现场测试，采矿卡风险更高。以下价格为美国市场估算，变化很快。',
      metaDescription: '本地LLM二手GPU选购：RTX 3060、3080、3090、4090价格区间（美国市场参考）、购买渠道、矿卡风险，以及付款前如何测试显卡。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**较旧的二手GPU成交价低于发售价（InsiderLLM追踪页：RTX 3080 10GB为$280-350，RTX 3060 12GB约$300），但RTX 3090和RTX 4090目前在美国挂牌中已接近或高于MSRP。购买前请测试任何二手卡，尤其是前采矿卡。**',
      audience: '熟悉Ollama或LM Studio优化本地LLM工作流的开发者',
      readTime: '阅读约8分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '二手GPU',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '哪些二手GPU是热门选择？', anchor: '#safest-cards' },
        { label: '二手GPU应该花多少钱？', anchor: '#pricing' },
        { label: '采矿卡vs游戏卡：有什么区别？', anchor: '#mining-vs-gaming' },
        { label: '哪里购买二手GPU？', anchor: '#where-to-buy' },
        { label: '如何在承诺前测试二手GPU？', anchor: '#testing' },
        { label: '二手GPU购买常见错误', anchor: '#mistakes' },
        { label: '常见问题', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'RTX 3060 12GB（InsiderLLM追踪页：约300美元，区间200-400美元）和RTX 3080 10GB（InsiderLLM追踪页：280-350美元）等二手GPU的成交价低于MSRP，而RTX 3090和RTX 4090目前已接近或高于MSRP；矿卡通常挂牌更便宜，但购买前需要现场进行显存压力测试。' },
            { type: 'plain-terms', text: '购买二手显卡运行本地AI模型，在较旧的型号上仍可能省钱，但并非每张卡都如此：最新高端卡目前的价格处于或高于发售价。避开那些未经检测就24小时不间断挖矿的卡。轻度使用的游戏卡通常比二手矿卡风险更低；二手矿卡在您付款前需要进行显存压力测试。' },
          ],
          items: [
            'RTX 3060 12GB二手（InsiderLLM追踪页：约$300，区间$200-400）和RTX 3080 10GB二手（InsiderLLM追踪页：$280-350）是热门选择：挂牌数量多，便于比较价格。购买前请测试显存健康状况。',
            '矿卡通常挂牌更便宜，但显存损耗可能更大。仅在您可以现场进行2小时以上压力测试时购买。',
            '游戏卡（前游戏主机转售）通常比矿卡风险更低。休闲游戏通常不会像24/7挖矿那样给显存带来压力。',
            'eBay（带买家保护）和Facebook Marketplace（可现场测试）是常见来源；仅当您能在公共场所见面并现场测试时，才使用本地分类信息。',
            '成交前，运行一款仍在维护且支持您显卡的GPU内存测试（先确认兼容性），建议1-2小时。显存故障通常会表现为错误。',
            '来历不明的卡可以期待一定折扣，但如果价格好得过分，这张卡可能有问题。',
            '除非您能核实其状况，否则避免前服务器/数据中心卡（NVIDIA A100/L40S）：它们通常为被动散热，按服务器气流设计，因此在台式机机箱中可能过热。',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '哪些二手GPU是热门选择？',
          items: [
            '**RTX 3060 12GB**（InsiderLLM追踪页：约$300，区间$200-400）：二手市场交易量大，可比较的挂牌很多。购买前请测试显存。',
            '**RTX 3080 10GB**（InsiderLLM追踪页：$280-350）：热门游戏卡。10GB可用于较小模型，但对较大模型有限制。购买前请测试。',
            '**RTX 4090 24GB**（InsiderLLM追踪页的eBay美国成交记录：$2,575-3,010）：高端定价，高于MSRP。转售量大，可比较的挂牌很多。像对待任何二手卡一样检查其状况。',
            '**RTX 3090 24GB**（InsiderLLM追踪页的eBay美国成交记录：约$1,400-1,550）：高端且昂贵。价格在2026年大幅上涨，近期成交记录明显高于$1,000。像对待任何二手卡一样检查其状况。',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '二手GPU应该花多少钱？',
          content: [
            '**基准：零售MSRP vs.** 二手市场。数字来自[InsiderLLM GPU价格追踪页](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（页面更新于2026-10-15）。RTX 3090和RTX 4090为eBay美国成交记录（不含运费）；该追踪页未说明RTX 3060和RTX 3080数字的方法。仅为美国价格（美元），不同地区可能有差异；并非报价或保证。',
          ],
          items: [
            'RTX 3060 12GB：MSRP $329 → 二手约$300，区间$200-400（InsiderLLM追踪页；$300时约比MSRP低9%）',
            'RTX 3080 10GB：MSRP $699 → 二手$280-350（InsiderLLM追踪页；约比MSRP低50-60%）',
            'RTX 4090 24GB：MSRP $1,599 → 二手（成交记录）$2,575-3,010，中位数$2,860，高于MSRP；全新挂牌$2,000-3,000',
            'RTX 3090 24GB：二手（成交记录）约$1,400-1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: '采矿卡vs游戏卡：有什么区别？',
          content: [
            '**采矿卡** 往往以全计算负载24/7运行1-3年。持续负载和热循环可能磨损显存，因此矿卡的显存损耗可能更大。购买前请测试。',
            '**游戏卡** 通常间歇性运行、负载变化，持续压力通常更小。',
            '视觉上：采矿卡通常显示大量使用的迹象（灰尘、热损伤、标签剥落）。游戏卡看起来更干净。',
            '价格：相同型号的矿卡通常挂牌更便宜。除非您现场测试，否则不值得冒险。',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '哪里购买二手GPU？',
          items: [
            '**eBay** ：许多商品提供买家保护。卖家评级可见。退货条件因商品而异，购买前请确认。运输可能需要一周或更久。',
            '**Facebook Marketplace** ：本地销售，支付前现场测试。无运费风险。即时可用。',
            '**本地分类信息** ：价格通常最低。仅限本地。任何个人对个人的市场都有诈骗报告；请在安全的公共场所见面，并在付款前现场测试。',
            '**本地计算机维修店** ：通常有二手库存。可以询问退货政策。价格通常比eBay高，但更有追索余地。',
          ],
        },
        'testing': {
          id: 'testing',
          title: '如何在承诺前测试二手GPU？',
          content: [
            '**1. 目视检查：检查物理损伤、烧焦的组件、漏液的电容。**',
            '2. 在测试系统中安装：启动到OS，运行GPU-Z。检查时钟速度（应与规格匹配）、温度读数。',
            '3. 运行一款仍在维护且支持您显卡的GPU内存测试（先确认兼容性；许多旧工具只支持较老的GPU世代）。若工具允许，对大部分VRAM测试1-2小时。坏内存显示为错误。',
            '4. 运行FurMark（压力测试）：全负荷30分钟。卡不应该崩溃或严重限流。',
            '5. 在GPU-Z中检查内存规格：与厂商规格比较。明显偏低的数值或错误可能表明存在问题。',
            '如果远程购买（例如在eBay上），请要求卖家提供测试截图并确认退货条件。压力测试会给显卡带来很大负载：请先确认退货或保修条款，温度异常时请停止测试。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '二手GPU购买常见错误',
          items: [
            '以大幅折扣购买采矿RTX 3080而不测试—显存可能已降级，负载下显示错误。',
            '假设"如新状态"意味着健康的VRAM—外观≠组件健康。始终进行压力测试。',
            '为没有购买者保护的GPU运费付费（不是eBay）—如果到达时死亡，您被困。',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '以陡峭的折扣购买二手采矿GPU值得吗？', a: '仅当您可以使用支持您显卡的GPU内存测试在现场测试2小时以上时。否则，没有。小额折扣很少值得为显存磨损的卡冒险。' },
            { q: '我如何判断二手GPU是否是采矿卡？', a: '通常您无法仅从照片判断。直接询问卖家，并将回答与显卡状况对照。寻找热损伤（电容附近变色）或异常大量灰尘。' },
            { q: '我应该购买的最旧RTX代是什么？', a: 'RTX 2000系列（2060、2080；2018年）较旧，仅在价格很低时考虑。RTX 3000系列（2020-2021）是更常见的基线。' },
            { q: '我应该购买二手RTX 4070还是RTX 3080？', a: 'InsiderLLM追踪页列出的二手RTX 3080 10GB为$280-350，未给出RTX 4070的价格，因此请比较两者的当前挂牌。RTX 4070是较新一代，显存多2 GB；请根据您的模型大小查看基准测试。' },
            { q: '如果1个月后故障，我可以在eBay上退货二手GPU吗？', a: '取决于卖家和商品的政策。许多提供有限的退货期；期限结束后，除非适用制造商保修，否则通常需要自行承担。购买前请确认。' },
            { q: '为带退货保护的GPU多付一笔费用值得吗？', a: '通常值得。退货期可以在卡购买后故障时避免全部损失；请将额外费用与卡的价格比较。' },
            { q: '我应该购买二手RTX 3090还是RTX 4090？', a: '预算有限时选二手RTX 3090。在eBay美国成交记录观测值（不含运费）中，二手RTX 3090约$1,400-1,550，二手RTX 4090为$2,575-3,010（InsiderLLM追踪页，来源更新于2026-10-15）。两者都是24 GB。在开发者报告的llama.cpp 7B测试中（CUDA成绩表，讨论#15013），RTX 4090生成速度为186.2 tok/s，RTX 3090为158.2 tok/s，提示词处理速度超过两倍（11,993对5,175 tok/s）。主要在需要长提示词速度且能承担差价时再选RTX 4090。价格波动较大，请查看当前挂牌。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[本地LLM最佳预算GPU](/zh/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[本地LLM最佳GPU](/zh/local-llms/best-gpus-for-local-llms)',
            '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: '来源',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- RTX 3090和RTX 4090的eBay美国成交价格（2026-10-15更新）。',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- 用户提交的Llama 2 7B Q4_0结果。',
            '所选GPU内存测试工具的文档（请确认其支持您的显卡）',
            'GPU-Z规格数据库用于热和时钟速度基准',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM二手GPU：RTX 3060至4090选购指南',
        'description': '本地LLM二手GPU选购：RTX 3060、3080、3090、4090价格区间（美国市场参考）、购买渠道、矿卡风险，以及付款前如何测试显卡。',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-11-15',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '二手GPU' },
          { '@type': 'Thing', 'name': 'GPU购买指南' },
          { '@type': 'Thing', 'name': 'GPU测试' },
          { '@type': 'Thing', 'name': '本地LLM推论' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '以陡峭的折扣购买二手采矿GPU值得吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '仅当您可以使用支持您显卡的GPU内存测试在现场测试2小时以上时。否则，没有。小额折扣很少值得为显存磨损的卡冒险。' }
          },
          {
            '@type': 'Question',
            'name': '我如何判断二手GPU是否是采矿卡？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '通常您无法仅从照片判断。直接询问卖家，并将回答与显卡状况对照。寻找热损伤（电容附近变色）或异常大量灰尘。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买的最旧RTX代是什么？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000系列（2060、2080；2018年）较旧，仅在价格很低时考虑。RTX 3000系列（2020-2021）是更常见的基线。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买二手RTX 4070还是RTX 3080？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'InsiderLLM追踪页列出的二手RTX 3080 10GB为$280-350，未给出RTX 4070的价格，因此请比较两者的当前挂牌。RTX 4070是较新一代，显存多2 GB；请根据您的模型大小查看基准测试。' }
          },
          {
            '@type': 'Question',
            'name': '如果1个月后故障，我可以在eBay上退货二手GPU吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '取决于卖家和商品的政策。许多提供有限的退货期；期限结束后，除非适用制造商保修，否则通常需要自行承担。购买前请确认。' }
          },
          {
            '@type': 'Question',
            'name': '为带退货保护的GPU多付一笔费用值得吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '通常值得。退货期可以在卡购买后故障时避免全部损失；请将额外费用与卡的价格比较。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买二手RTX 3090还是RTX 4090？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '预算有限时选二手RTX 3090。在eBay美国成交记录观测值（不含运费）中，二手RTX 3090约$1,400-1,550，二手RTX 4090为$2,575-3,010（InsiderLLM追踪页，来源更新于2026-10-15）。两者都是24 GB。在开发者报告的llama.cpp 7B测试中（CUDA成绩表，讨论#15013），RTX 4090生成速度为186.2 tok/s，RTX 3090为158.2 tok/s，提示词处理速度超过两倍（11,993对5,175 tok/s）。主要在需要长提示词速度且能承担差价时再选RTX 4090。价格波动较大，请查看当前挂牌。' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'name': '本地LLM二手GPU：成本比较和可靠性说明',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: '成本比较：RTX 3060（二手约$300，InsiderLLM追踪页）vs RTX 3080（$280-350，InsiderLLM追踪页）vs RTX 3090（观测值约$1,400-1,550，二手）vs RTX 4090（观测值约$2,575-3,010，二手）。' },
          { '@type': 'ListItem', position: 2, name: '可靠性说明：RTX 3060 12GB和RTX 3080 10GB转售量大。矿卡的显存损耗可能更大；购买前请测试。' },
          { '@type': 'ListItem', position: 3, name: '值得考虑的二手GPU型号：RTX 3060 12GB（低预算入门），RTX 3080 10GB（中端），RTX 4090 24GB（高端，高于MSRP）。' },
        ],
      },
    },
  ko: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'GPU Buying Guides',
      title: '중고 GPU로 로컬 LLM 구동하기: 구매 가이드',
    heroImage: '/images/used-gpus-for-local-llms-overview-hero-ko.webp',
      seoTitle: '중고 GPU로 로컬 LLM: RTX 3060~4090 가이드',
      intro: '**구형 중고 GPU는 출시가보다 낮은 가격에 거래되지만(InsiderLLM 트래커: RTX 3080 10GB는 $280~350, RTX 3060 12GB는 약 $300), RTX 3090과 RTX 4090은 현재 미국 매물에서 MSRP 근처이거나 그 이상에 거래됩니다.** 중고 시장에는 일반적으로 채굴용 및 게이밍용 카드가 풍부하게 공급되고 있습니다. 첫 번째 장비 구성이나 업그레이드 시 중고 구매는 합리적일 수 있습니다. 단, 채굴용 카드는 현장에서 직접 테스트할 수 없다면 더 위험합니다. 아래 가격은 미국 시장 추정치이며 빠르게 변동합니다.',
      metaDescription: '로컬 LLM용 중고 GPU: RTX 3060, 3080, 3090, 4090 가격대(미국 시장 기준), 구매처, 채굴용 카드 리스크, 구매 전 테스트 방법을 정리했습니다.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '구형 중고 GPU는 출시가보다 낮은 가격에 거래되지만(InsiderLLM 트래커: RTX 3080 10GB는 $280~350, RTX 3060 12GB는 약 $300), RTX 3090과 RTX 4090은 현재 미국 매물에서 MSRP 근처이거나 그 이상에 거래됩니다. 구매 전에는 모든 중고 카드를, 특히 채굴용이었던 카드를 반드시 테스트하십시오.',
      audience: 'Ollama 또는 LM Studio를 활용하여 로컬 LLM 워크플로우를 최적화하는 개발자',
      readTime: '8분',
      educationalLevel: 'Intermediate',
      primaryTerm: '중고 GPU',
      toc: [
        { label: 'TLDR', anchor: '#key-takeaways' },
        { label: '인기 있는 중고 GPU는 무엇인가?', anchor: '#safest-cards' },
        { label: '중고 GPU 적정 가격은 얼마인가?', anchor: '#pricing' },
        { label: '채굴용 카드 vs 게이밍 카드: 차이점은?', anchor: '#mining-vs-gaming' },
        { label: '중고 GPU는 어디서 구매해야 하나?', anchor: '#where-to-buy' },
        { label: '구매 전 중고 GPU를 테스트하는 방법은?', anchor: '#testing' },
        { label: '중고 GPU 구매 시 흔한 실수', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'RTX 3060 12GB(InsiderLLM 트래커: 약 $300, 범위 $200~400)와 RTX 3080 10GB(InsiderLLM 트래커: $280~350) 같은 중고 GPU는 MSRP보다 낮게 거래되지만, RTX 3090과 RTX 4090은 현재 MSRP 근처이거나 그 이상입니다. 채굴용 카드는 더 싸게 올라오는 경우가 많지만 구매 전 직접 VRAM 스트레스 테스트가 필요합니다.' },
            { type: 'plain-terms', text: '로컬 AI 모델 실행을 위해 중고 그래픽 카드를 구입하면 구형 모델에서는 여전히 비용을 아낄 수 있지만, 모든 카드가 그런 것은 아닙니다. 최신 고사양 카드는 현재 출시가 수준이거나 그 이상에 거래됩니다. 사전 점검 없이 24시간 암호화폐 채굴에 사용된 카드는 피하십시오. 가볍게 사용된 게이밍 카드는 보통 중고 채굴용 카드보다 위험이 낮으며, 중고 채굴용 카드는 구매하기 전에 메모리 스트레스 테스트가 필요합니다.' },
          ],
          items: [
            'RTX 3060 12GB 중고(InsiderLLM 트래커: 약 $300, 범위 $200~400)와 RTX 3080 10GB 중고(InsiderLLM 트래커: $280~350)는 인기 있는 선택입니다. 매물이 많아 가격 비교가 쉽습니다. 구매 전 VRAM 상태를 테스트하십시오.',
            '채굴용 카드는 더 싸게 올라오는 경우가 많지만 VRAM 마모가 더 클 수 있습니다. 현장에서 2시간 이상 스트레스 테스트를 할 수 있는 경우에만 구매하십시오.',
            '게이밍 카드(전 게이밍용 리셀 제품)는 보통 채굴용 카드보다 위험이 낮습니다. 일반적인 게임 사용은 대개 24/7 채굴만큼 VRAM에 부하를 주지 않습니다.',
            'eBay(구매자 보호 포함)와 Facebook Marketplace(현장 테스트 가능)가 흔한 구매 채널입니다. 지역 분류 광고는 공공장소에서 만나 현장에서 테스트할 수 있을 때만 이용하십시오.',
            '거래 확정 전 사용 중인 카드를 지원하며 현재도 유지보수되는 GPU 메모리 테스트를(먼저 호환성을 확인한 뒤) 가급적 1~2시간 실행하십시오. 불량 VRAM은 오류로 나타나는 경우가 많습니다.',
            '이력 불명 카드는 할인을 기대할 수 있지만, 가격이 너무 좋다면 카드에 문제가 있을 수 있습니다.',
            'NVIDIA A100/L40S 등 전 서버/데이터센터 카드는 상태를 확인할 수 없다면 피하십시오. 대개 수동 냉각 방식이며 서버 공기 흐름에 맞춰 설계되어 있어 데스크톱 케이스에서는 과열될 수 있습니다.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '인기 있는 중고 GPU는 무엇인가?',
          items: [
            '**RTX 3060 12GB** (InsiderLLM 트래커: 약 $300, 범위 $200~400): 중고 시장 거래량이 많아 비교할 매물이 풍부합니다. 구매 전 VRAM을 테스트하십시오.',
            '**RTX 3080 10GB** (InsiderLLM 트래커: $280~350): 인기 있는 게이밍 카드입니다. 10GB는 작은 모델에는 쓸 만하지만 큰 모델에는 제약이 있습니다. 구매 전 테스트하십시오.',
            '**RTX 4090 24GB** (InsiderLLM 트래커의 eBay 미국 낙찰 기록: $2,575~3,010): 프리미엄 가격으로 MSRP보다 높습니다. 중고 거래량이 많아 비교할 매물이 풍부합니다. 다른 중고 카드와 마찬가지로 상태를 확인하십시오.',
            '**RTX 3090 24GB** (InsiderLLM 트래커의 eBay 미국 낙찰 기록: 약 $1,400~1,550): 고사양이며 가격이 높습니다. 2026년 내내 가격이 크게 올랐고 최근 낙찰 기록은 $1,000를 크게 웃돕니다. 다른 중고 카드와 마찬가지로 상태를 확인하십시오.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '중고 GPU 적정 가격은 얼마인가?',
          content: [
            '**기준: 소비자 권장 소매가(MSRP) 대비** 중고 시장 가격. 수치는 [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(페이지 갱신일 2026-10-15)에서 가져왔습니다. RTX 3090과 RTX 4090은 eBay 미국 낙찰 기록(배송비 제외)이며, 트래커는 RTX 3060과 RTX 3080 수치의 산출 방법을 밝히지 않습니다. 미국 가격(달러) 기준이며 한국에서는 다를 수 있습니다. 제안이나 보증이 아닙니다.',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → 중고 약 $300, 범위 $200~400 (InsiderLLM 트래커, $300 기준 MSRP보다 약 9% 낮음)',
            'RTX 3080 10GB: MSRP $699 → 중고 $280~350 (InsiderLLM 트래커, MSRP보다 약 50~60% 낮음)',
            'RTX 4090 24GB: MSRP $1,599 → 중고(낙찰 기록) $2,575~3,010, 중앙값 $2,860, MSRP보다 높음, 신품 매물 $2,000~3,000',
            'RTX 3090 24GB: 중고(낙찰 기록) 약 $1,400~1,550',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: '채굴용 카드 vs 게이밍 카드: 차이점은?',
          content: [
            '**채굴용 카드**는 종종 1~3년간 24/7 풀 컴퓨팅 부하로 가동되었습니다. 지속적인 부하와 열 사이클은 VRAM을 마모시킬 수 있어 VRAM 마모가 더 클 수 있습니다. 구매 전 테스트하십시오.',
            '**게이밍 카드**는 보통 변동하는 부하로 간헐적으로 사용되어 지속적인 스트레스가 적은 편입니다.',
            '외관상: 채굴용 카드는 심한 사용 흔적(먼지, 열 손상, 라벨 박리)이 있는 경우가 많습니다. 게이밍 카드는 더 깔끔합니다.',
            '가격: 동일 모델이라도 채굴용 카드가 더 싸게 올라오는 경우가 많습니다. 현장 테스트 없이는 리스크 대비 가치가 없습니다.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '중고 GPU는 어디서 구매해야 하나?',
          items: [
            '**eBay**: 많은 매물에서 구매자 보호를 이용할 수 있습니다. 판매자 평점 확인 가능. 반품 조건은 매물마다 다르므로 구매 전 확인하십시오. 배송에 일주일 이상 걸릴 수 있습니다.',
            '**Facebook Marketplace**: 현지 거래로 결제 전 현장 테스트 가능. 배송 리스크 없음. 즉시 수령 가능.',
            '**지역 분류 광고**: 가격이 가장 낮은 경우가 많습니다. 현지 거래만 가능. 개인 간 거래 시장에서는 어디서나 사기가 보고됩니다. 안전한 공공장소에서 만나 결제 전 현장에서 테스트하십시오.',
            '**지역 컴퓨터 수리점**: 중고 재고를 보유하는 경우가 많습니다. 반품 정책을 문의할 수 있습니다. eBay보다 가격이 높은 경우가 많지만 문의할 창구가 있습니다.',
          ],
        },
        'testing': {
          id: 'testing',
          title: '구매 전 중고 GPU를 테스트하는 방법은?',
          content: [
            '**1. 외관 점검: 물리적 손상, 소손 부품, 캐패시터 누액 여부를 확인합니다.**',
            '2. 테스트 시스템에 설치: OS 부팅 후 GPU-Z를 실행합니다. 클럭 속도(사양 일치 여부)와 온도 수치를 확인합니다.',
            '3. 사용 중인 카드를 지원하며 현재도 유지보수되는 GPU 메모리 테스트를 실행합니다(먼저 호환성을 확인하십시오. 오래된 도구 다수는 구형 GPU 세대만 지원합니다). 도구가 허용하면 VRAM 대부분을 대상으로 1~2시간 실행합니다. 불량 메모리는 오류로 나타납니다.',
            '4. FurMark 실행(스트레스 테스트): 풀 부하로 30분간 실행합니다. 카드가 크래시되거나 심하게 스로틀링되면 안 됩니다.',
            '5. GPU-Z에서 메모리 사양 확인: 제조사 사양과 비교합니다. 현저히 낮은 값이나 오류는 문제를 나타낼 수 있습니다.',
            '원격으로 구매하는 경우(예: eBay) 판매자에게 테스트 스크린샷을 요청하고 반품 조건을 확인하십시오. 스트레스 테스트는 카드에 큰 부하를 줍니다. 먼저 반품 또는 보증 조건을 확인하고, 온도가 비정상이면 중단하십시오.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '중고 GPU 구매 시 흔한 실수',
          items: [
            '테스트 없이 큰 폭으로 할인된 채굴용 RTX 3080 구매 — VRAM이 열화되어 부하 시 오류가 발생할 수 있습니다.',
            '"거의 새것 상태"를 VRAM 정상으로 오해 — 외관과 부품 상태는 별개입니다. 반드시 스트레스 테스트를 실시하십시오.',
            '구매자 보호 없이(eBay 외) 배송으로 GPU 구매 대금 선결제 — 불량으로 도착하면 구제받을 방법이 거의 없을 수 있습니다.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            { q: '대폭 할인된 채굴용 중고 GPU를 구매할 가치가 있나요?', a: '사용 중인 카드를 지원하는 GPU 메모리 테스트로 현장에서 2시간 이상 테스트할 수 있는 경우에만 가치가 있습니다. 그렇지 않다면 구매하지 마십시오. 작은 할인은 VRAM이 마모된 카드의 리스크를 감수할 만한 가치가 드뭅니다.' },
            { q: '중고 GPU가 채굴용인지 어떻게 알 수 있나요?', a: '사진만으로는 판단하기 어려운 경우가 많습니다. 판매자에게 직접 물어보고 답변을 카드 상태와 대조하십시오. 캐패시터 주변의 변색이나 비정상적으로 많은 먼지 등 열 손상 흔적을 확인하십시오.' },
            { q: '중고로 구매할 수 있는 가장 오래된 RTX 세대는 무엇인가요?', a: 'RTX 2000 시리즈(2060, 2080; 2018년 출시)는 오래된 제품이므로 가격이 낮을 때만 고려하십시오. RTX 3000 시리즈(2020~2021년 출시)가 더 일반적인 기준선입니다.' },
            { q: '중고 RTX 4070과 RTX 3080 중 무엇을 선택해야 하나요?', a: 'InsiderLLM 트래커는 중고 RTX 3080 10GB를 $280~350으로 제시하며 RTX 4070 가격은 제공하지 않으므로 두 제품의 최신 매물을 비교하십시오. RTX 4070은 더 새로운 세대로 VRAM이 2 GB 더 많습니다. 사용할 모델 크기에 맞춰 벤치마크를 확인하십시오.' },
            { q: 'eBay에서 구매한 중고 GPU를 1개월 후 불량으로 반품할 수 있나요?', a: '판매자와 매물 정책에 따라 다릅니다. 많은 판매자가 제한된 반품 기간을 두며, 기간이 지나면 제조사 보증이 적용되지 않는 한 대체로 스스로 감수해야 합니다. 구매 전 확인하십시오.' },
            { q: '반품 보호가 있는 GPU에 추가 비용을 지불할 가치가 있나요?', a: '대체로 그렇습니다. 반품 기간이 있으면 구매 후 카드가 고장 나도 전액 손실을 피할 수 있습니다. 추가 비용을 카드 가격과 비교하십시오.' },
            { q: '중고 RTX 3090과 RTX 4090 중 무엇을 선택해야 하나요?', a: '예산이 중요하다면 중고 RTX 3090을 선택하십시오. eBay 미국 낙찰 기록 관측값(배송비 제외)으로 중고 RTX 3090은 약 $1,400~1,550, 중고 RTX 4090은 $2,575~3,010입니다(InsiderLLM 트래커, 출처 갱신일 2026-10-15). 두 제품 모두 24 GB입니다. 개발자가 보고한 llama.cpp 7B 테스트(CUDA 스코어보드, 토론 #15013)에서 RTX 4090은 186.2 tok/s, RTX 3090은 158.2 tok/s를 생성하고 프롬프트 처리는 두 배 이상 빠릅니다(11,993 대 5,175 tok/s). 긴 프롬프트에서 그 속도가 필요하고 차액을 감당할 수 있을 때 RTX 4090을 선택하십시오. 가격은 변동이 크므로 최신 매물을 확인하십시오.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            '[로컬 LLM용 최고의 저예산 GPU](/ko/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/ko/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[로컬 LLM용 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms)',
            '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide)',
          ],
        },
        'sources': {
          id: 'sources',
          title: '출처',
          items: [
            '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) -- RTX 3090과 RTX 4090의 eBay 미국 낙찰 가격(2026-10-15 갱신).',
            '[llama.cpp discussion #15013: Performance on NVIDIA CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) -- 사용자가 제출한 Llama 2 7B Q4_0 결과.',
            '선택한 GPU 메모리 테스트 도구의 문서(사용 중인 카드를 지원하는지 확인하십시오)',
            '열 특성 및 클럭 속도 기준선을 위한 GPU-Z 사양 데이터베이스',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ko/local-llms/used-gpus-for-local-llms',
        'name': '로컬 LLM용 중고 GPU: 비용 비교 및 신뢰성 참고',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: '비용 비교: 중고 RTX 3060(약 $300, InsiderLLM 트래커) vs RTX 3080($280~350, InsiderLLM 트래커) vs RTX 3090(관측값 약 $1,400~1,550, 중고) vs RTX 4090(관측값 약 $2,575~3,010, 중고).' },
          { '@type': 'ListItem', position: 2, name: '신뢰성 참고: RTX 3060 12GB와 RTX 3080 10GB는 재판매 물량이 많습니다. 채굴용 카드는 VRAM 마모가 더 클 수 있으므로 구매 전 테스트하십시오.' },
          { '@type': 'ListItem', position: 3, name: '고려할 만한 중고 GPU 모델: RTX 3060 12GB(저예산 입문용), RTX 3080 10GB(중급), RTX 4090 24GB(프리미엄, MSRP 초과).' },
        ],
      },
    },
  };
