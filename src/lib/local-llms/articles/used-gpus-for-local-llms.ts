// Auto-generated from src/lib/local-llms/content.ts
// Slug: used-gpus-for-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'Used GPUs for Local LLMs: Best Value Picks',
      seoTitle: 'Best Used GPUs for Local LLMs: RTX 3060, 3080, 4090 Buying Guide',
      intro: '**Used GPUs offer 30-50% savings over new, with minimal performance risk on reputable models like RTX 3060 12GB and RTX 3080.** As of April 2026, the used market is flooded with ex-mining and ex-gaming cards at stable prices. Buying used makes sense for your first rig or when upgrading; mining cards are risky unless you can test on-site.',
      metaDescription: 'Best used GPUs for local LLMs: RTX 3060, 3080, 3090, 4090. Where to buy, risk assessment, how to bench-test.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Used GPUs offer 30-50% savings over new, with minimal performance risk on reputable models like RTX 3060 12GB and RTX 3080. As of April 2026, the used market is flooded with ex-mining and ex-gaming cards at stable prices.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '8 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Used GPU',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Which Used GPUs Are Safest to Buy?', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB used ($200-250) and RTX 3080 10GB used ($350-400) are the safest bets--high volume, stable pricing, proven VRAM health.',
            'Mining cards are 30% cheaper but carry 10-20% risk of VRAM degradation. Only buy if you can stress-test on-site for 2+ hours.',
            'Gaming cards (ex-gaming rig resales) are safer than mining cards. Casual gaming doesn\'t stress VRAM like 24/7 mining.',
            'eBay with buyer protection, Facebook Marketplace with in-person testing, and Craigslist (local only, test on-site) are your best sources.',
            'Before closing, run MemtestG80 (GPU memory test) for 1-2 hours. Bad VRAM shows up immediately.',
            'Budget 5-10% price discount for unknown-history cards. If a deal seems too good, the card likely has issues.',
            'Avoid ex-server/data-center cards (RTX A100, L40S) unless you\'re sure of their condition--they run hot and may have thermal throttling damage.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Which Used GPUs Are Safest to Buy?',
          items: [
            '**RTX 3060 12GB** ($200-250): Huge volume on used market. Reliable VRAM. Older architecture means fewer failures. Safe pick.',
            '**RTX 3080 10GB** ($350-400): Popular gaming card. Solid VRAM history. 10GB is usable (tight for some 70B models). Safe.',
            '**RTX 4090 24GB** ($1,000-1,300): Premium pricing, but high resale volume = data on failure rates. Rare VRAM failures. Safe if priced right.',
            '**RTX 3090 24GB** ($400-600): High-end, expensive, fewer failures proportionally. Good if you find one under $500.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'How Much Should You Pay for Used GPUs?',
          content: [
            '**Benchmark: Retail MSRP vs.** used market (April 2026).',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → Used $200-250 (39-62% discount)',
            'RTX 3080 10GB: MSRP $699 → Used $350-400 (50-55% discount)',
            'RTX 4090 24GB: MSRP $1,499 → Used $1,000-1,300 (13-33% discount, less discount because newer)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Mining Cards vs. Gaming Cards: What\'s the Difference?',
          content: [
            '**Mining cards** ran 24/7 for 1-3 years at full compute load. Thermal cycling stress is brutal on VRAM. 10-20% chance of VRAM errors by now.',
            '**Gaming cards** ran intermittently (4-8 hrs/day) at varying load. Less stress. VRAM lasts longer. Safer.',
            'Visually: Mining cards often have signs of heavy use (dust, thermal damage, peeling labels). Gaming cards look cleaner.',
            'Price: Mining cards are $50-100 cheaper for same model. Not worth the risk unless you test on-site.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Where Should You Buy Used GPUs?',
          items: [
            '**eBay**: Best buyer protection. Seller ratings visible. Shipping included. Can return if dead on arrival (DOA). Takes 1-2 weeks.',
            '**Facebook Marketplace**: Local sales, test on-site before payment. No shipping risk. Instant availability. Larger pool than Craigslist.',
            '**Craigslist**: Cheapest prices. Local only. Highest scam risk. Only use if you can meet in safe public place and test immediately.',
            '**Local computer repair shops**: Often have used inventory. Can ask about return policy. Prices 10-15% higher than eBay, but more trust.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'How Do You Test a Used GPU Before Committing?',
          content: [
            '**1. Visual inspection: Check for physical damage, burnt components, leaking capacitors.**',
            '2. Install in test system: Boot into OS, run GPU-Z. Check clock speeds (should match spec), temperature readings.',
            '3. Run MemtestG80 (free): Allocate 90% of VRAM, run 1-2 hours. Bad memory shows up as errors.',
            '4. Run FurMark (stress test): 30 minutes at full load. Card should not crash or throttle severely.',
            '5. Check VRAM bandwidth (CrystalDiskInfo or GPU-Z): Compare to spec. Significantly lower = potential degradation.',
            'If buying used on eBay/Craigslist, insist on seller doing this test and providing screenshot proof.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Common Used GPU Buying Mistakes',
          items: [
            'Buying a mining RTX 3080 at "$250 off MSRP" without testing--VRAM is often degraded, shows errors under load.',
            'Assuming "like new condition" means healthy VRAM--cosmetics ≠ component health. Always stress-test.',
            'Paying for shipping on a GPU without buyer protection (not eBay)--if it arrives dead, you\'re stuck.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Is a used mining GPU worth buying at a steep discount?', a: 'Only if you can test it in person for 2+ hours with MemtestG80. Otherwise, no. The discount ($50-100) isn\'t worth the 20% failure risk.' },
            { q: 'How can I tell if a used GPU was a mining card?', a: 'Often you can\'t from photos alone. Ask the seller. Look for thermal damage (discoloration near capacitors) or unusually heavy dust. Request their mining pool address if they used it.' },
            { q: 'What\'s the oldest RTX generation I should buy used?', a: 'RTX 2000-series (2060, 2080) are very old (2018). Only buy if under $80. RTX 3000-series (2020-2021) is the safe baseline.' },
            { q: 'Should I buy a used RTX 4070 or RTX 3080?', a: 'RTX 3080 (10GB, $350-400 used) is better value for local LLMs than 4070 (12GB, $450-550 used). 4070 is newer but only 15% faster.' },
            { q: 'Can I return a used GPU on eBay if it fails after 1 month?', a: 'Depends on seller\'s policy. Most allow 14-day returns. After 30 days, you\'re on your own unless there\'s a manufacturer defect (rare on used cards).' },
            { q: 'Is it worth paying 20% more for a GPU with return protection?', a: 'Yes. Costs ~$30-50 on a $250 GPU, but saves you from a $250 loss if the card dies post-purchase.' },
            { q: 'Should I buy a used RTX 3090 or RTX 4090?', a: 'RTX 4090 if you can afford it ($1,000-1,300). Better power efficiency, newer architecture. RTX 3090 is overkill for 7B models and not much cheaper used (~$500-600).' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            'eBay GPU price history and market data (April 2026)',
            'MemtestG80 and GPU stress-testing tool documentation for VRAM validation',
            'GPU-Z specification database for thermal and clock speed baselines',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best Used GPUs for Local LLMs: RTX 3060, 3080, 4090 Buying Guide',
        'description': 'Best used GPUs for local LLMs: RTX 3060, 3080, 3090, 4090. Where to buy, risk assessment, how to bench-test.',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
              'text': 'Only if you can test it in person for 2+ hours with MemtestG80. Otherwise, no. The discount ($50-100) isn\'t worth the 20% failure risk.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I tell if a used GPU was a mining card?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Often you can\'t from photos alone. Ask the seller. Look for thermal damage (discoloration near capacitors) or unusually heavy dust. Request their mining pool address if they used it.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the oldest RTX generation I should buy used?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 2000-series (2060, 2080) are very old (2018). Only buy if under $80. RTX 3000-series (2020-2021) is the safe baseline.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 4070 or RTX 3080?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 3080 (10GB, $350-400 used) is better value for local LLMs than 4070 (12GB, $450-550 used). 4070 is newer but only 15% faster.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I return a used GPU on eBay if it fails after 1 month?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Depends on seller\'s policy. Most allow 14-day returns. After 30 days, you\'re on your own unless there\'s a manufacturer defect (rare on used cards).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is it worth paying 20% more for a GPU with return protection?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Costs ~$30-50 on a $250 GPU, but saves you from a $250 loss if the card dies post-purchase.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 3090 or RTX 4090?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4090 if you can afford it ($1,000-1,300). Better power efficiency, newer architecture. RTX 3090 is overkill for 7B models and not much cheaper used (~$500-600).'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'name': 'Used GPUs for Local LLMs: Cost Comparison & Reliability',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Cost Comparison: RTX 3060 ($200-250 used) vs RTX 3080 ($350-400) vs RTX 4090 ($1,000-1,300)—30-50% savings over new.' },
          { '@type': 'ListItem', position: 2, name: 'Reliability Data: RTX 3060 12GB and RTX 3080 10GB have high resale volume and proven VRAM health. Mining cards carry 10-20% failure risk.' },
          { '@type': 'ListItem', position: 3, name: 'Recommended Used GPU Models: RTX 3060 12GB (safest entry), RTX 3080 10GB (solid VRAM), RTX 4090 24GB (premium, rare failures).' },
        ],
      },
    },
    es: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'GPUs de segunda mano para LLMs locales: Las mejores opciones por precio',
      seoTitle: 'GPUs de segunda mano para LLMs locales: RTX 3060, 3080, 4090',
      intro: '**Las GPUs de segunda mano ofrecen un ahorro del 30-50% frente a las nuevas, con un riesgo de rendimiento mínimo en modelos de probada fiabilidad como la RTX 3060 12GB y la RTX 3080.** En abril de 2026, el mercado de segunda mano está inundado de tarjetas ex-minería y ex-gaming a precios estables. Comprar de segunda mano tiene sentido para tu primer equipo o al actualizar; las tarjetas de minería son arriesgadas a menos que puedas probarlas in situ.',
      metaDescription: 'Mejores GPUs de segunda mano para LLMs locales: RTX 3060, 3080, 3090, 4090. Dónde comprar, evaluación de riesgos y cómo hacer pruebas de rendimiento.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Las GPUs de segunda mano ofrecen un ahorro del 30-50% frente a las nuevas, con un riesgo mínimo en modelos como la RTX 3060 12GB y la RTX 3080. En abril de 2026, el mercado de segunda mano está inundado de tarjetas ex-minería y ex-gaming a precios estables.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo de LLMs locales',
      readTime: '8 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU de segunda mano',
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: '¿Qué GPUs de segunda mano son más seguras?', anchor: '#safest-cards' },
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
          items: [
            'La RTX 3060 12GB de segunda mano ($200-250) y la RTX 3080 10GB de segunda mano ($350-400) son las apuestas más seguras: alto volumen en el mercado, precios estables y VRAM de salud comprobada.',
            'Las tarjetas de minería son un 30% más baratas, pero presentan un riesgo de degradación del VRAM del 10-20%. Cómprala solo si puedes hacer una prueba de estrés in situ durante 2 horas o más.',
            'Las tarjetas gaming (ventas de equipos ex-gaming) son más seguras que las de minería. El gaming casual no estresa el VRAM como la minería 24/7.',
            'eBay con protección al comprador, Facebook Marketplace con prueba in situ y Craigslist (solo local, prueba en persona) son tus mejores fuentes.',
            'Antes de cerrar la compra, ejecuta MemtestG80 (prueba de memoria GPU) durante 1-2 horas. La VRAM defectuosa se detecta de inmediato.',
            'Descuenta un 5-10% del precio en tarjetas de historial desconocido. Si una oferta parece demasiado buena, la tarjeta probablemente tiene problemas.',
            'Evita las tarjetas ex-servidor/centro de datos (RTX A100, L40S) a menos que estés seguro de su estado: funcionan a altas temperaturas y pueden tener daños por limitación térmica.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '¿Qué GPUs de segunda mano son más seguras?',
          items: [
            '**RTX 3060 12GB** ($200-250): Gran volumen en el mercado de segunda mano. VRAM fiable. La arquitectura más antigua implica menos fallos. Elección segura.',
            '**RTX 3080 10GB** ($350-400): Tarjeta gaming popular. Historial sólido de VRAM. 10GB es usable (ajustado para algunos modelos 70B). Segura.',
            '**RTX 4090 24GB** ($1,000-1,300): Precio premium, pero alto volumen de reventa = datos sobre tasas de fallo. Fallos de VRAM poco frecuentes. Segura si el precio es correcto.',
            '**RTX 3090 24GB** ($400-600): Alta gama, cara, proporcionalmente menos fallos. Buena opción si encuentras una por menos de $500.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '¿Cuánto deberías pagar por una GPU de segunda mano?',
          content: [
            '**Referencia: MSRP de venta al por menor vs.** mercado de segunda mano (abril 2026).',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → Segunda mano $200-250 (39-62% de descuento)',
            'RTX 3080 10GB: MSRP $699 → Segunda mano $350-400 (50-55% de descuento)',
            'RTX 4090 24GB: MSRP $1,499 → Segunda mano $1,000-1,300 (13-33% de descuento, menos descuento por ser más reciente)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Tarjetas de minería vs. tarjetas gaming: ¿cuál es la diferencia?',
          content: [
            '**Tarjetas de minería**: funcionaron 24/7 durante 1-3 años a plena carga de cómputo. El estrés por ciclos térmicos es brutal para el VRAM. Existe un 10-20% de posibilidades de errores de VRAM en la actualidad.',
            '**Tarjetas gaming**: funcionaron de forma intermitente (4-8 h/día) con carga variable. Menos estrés. El VRAM dura más. Más seguras.',
            'Visualmente: las tarjetas de minería suelen mostrar signos de uso intenso (polvo, daños térmicos, etiquetas despegadas). Las tarjetas gaming tienen mejor aspecto.',
            'Precio: las tarjetas de minería son $50-100 más baratas por el mismo modelo. No merece la pena el riesgo a menos que las pruebes in situ.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '¿Dónde comprar GPUs de segunda mano?',
          items: [
            '**eBay**: mejor protección al comprador. Calificaciones del vendedor visibles. Envío incluido. Posibilidad de devolución si llega defectuosa (DOA). Tarda 1-2 semanas.',
            '**Facebook Marketplace**: ventas locales, prueba in situ antes del pago. Sin riesgo de envío. Disponibilidad inmediata. Mayor oferta que Craigslist.',
            '**Craigslist**: precios más bajos. Solo local. Mayor riesgo de estafa. Úsalo solo si puedes quedar en un lugar público seguro y probar de inmediato.',
            '**Tiendas locales de reparación de ordenadores**: suelen tener inventario de segunda mano. Puedes preguntar por la política de devoluciones. Precios un 10-15% más altos que eBay, pero mayor confianza.',
          ],
        },
        'testing': {
          id: 'testing',
          title: '¿Cómo probar una GPU de segunda mano antes de comprar?',
          content: [
            '**1. Inspección visual: comprueba daños físicos, componentes quemados y condensadores con fugas.**',
            '2. Instala en un sistema de prueba: arranca el sistema operativo, ejecuta GPU-Z. Verifica las velocidades de reloj (deben coincidir con las especificaciones) y las lecturas de temperatura.',
            '3. Ejecuta MemtestG80 (gratuito): asigna el 90% del VRAM y ejecútalo durante 1-2 horas. La memoria defectuosa aparece como errores.',
            '4. Ejecuta FurMark (prueba de estrés): 30 minutos a plena carga. La tarjeta no debería bloquearse ni throttlear gravemente.',
            '5. Comprueba el ancho de banda de la VRAM (CrystalDiskInfo o GPU-Z): compara con las especificaciones. Si es significativamente inferior, puede haber degradación.',
            'Si compras en eBay/Craigslist, exige que el vendedor realice esta prueba y proporcione capturas de pantalla como evidencia.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Errores frecuentes al comprar GPUs de segunda mano',
          items: [
            'Comprar una RTX 3080 de minería con "$250 de descuento sobre el MSRP" sin probarla: el VRAM suele estar degradado y muestra errores bajo carga.',
            'Asumir que "como nueva" equivale a VRAM saludable: el aspecto cosmético no equivale a salud de los componentes. Haz siempre una prueba de estrés.',
            'Pagar el envío de una GPU sin protección al comprador (fuera de eBay): si llega defectuosa, no tienes recurso.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: '¿Merece la pena comprar una GPU de minería de segunda mano con gran descuento?', a: 'Solo si puedes probarla in situ durante 2 horas o más con MemtestG80. De lo contrario, no. El descuento ($50-100) no compensa el 20% de riesgo de fallo.' },
            { q: '¿Cómo puedo saber si una GPU de segunda mano fue una tarjeta de minería?', a: 'En muchos casos no es posible determinarlo solo por las fotos. Pregunta al vendedor. Busca daños térmicos (decoloración cerca de los condensadores) o polvo excesivo. Si la usaron para minar, pide la dirección del pool de minería.' },
            { q: '¿Cuál es la generación RTX más antigua que debería comprar de segunda mano?', a: 'La serie RTX 2000 (2060, 2080) es muy antigua (2018). Cómprala solo por menos de $80. La serie RTX 3000 (2020-2021) es el punto de partida seguro.' },
            { q: '¿Debería comprar una RTX 4070 o una RTX 3080 de segunda mano?', a: 'La RTX 3080 (10GB, $350-400 de segunda mano) ofrece mejor relación calidad-precio para LLMs locales que la 4070 (12GB, $450-550 de segunda mano). La 4070 es más reciente, pero solo es un 15% más rápida.' },
            { q: '¿Puedo devolver una GPU de segunda mano en eBay si falla al mes?', a: 'Depende de la política del vendedor. La mayoría permite devoluciones en 14 días. Después de 30 días, eres responsable a menos que haya un defecto de fabricación (raro en tarjetas de segunda mano).' },
            { q: '¿Vale la pena pagar un 20% más por una GPU con protección de devolución?', a: 'Sí. Cuesta unos $30-50 en una GPU de $250, pero te protege de perder $250 si la tarjeta falla después de la compra.' },
            { q: '¿Debería comprar una RTX 3090 o una RTX 4090 de segunda mano?', a: 'La RTX 4090 si te lo puedes permitir ($1,000-1,300). Mejor eficiencia energética, arquitectura más reciente. La RTX 3090 es excesiva para modelos de 7B y no es mucho más barata de segunda mano ($500-600).' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/es/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms)',
            '[Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'Historial de precios de GPUs en eBay y datos del mercado (abril 2026)',
            'Documentación de MemtestG80 y herramientas de prueba de estrés de GPU para validación de VRAM',
            'Base de datos de especificaciones GPU-Z para valores de referencia térmicos y de velocidad de reloj',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mejores GPUs de segunda mano para LLMs locales: Guía de compra RTX 3060, 3080, 4090',
        'description': 'Mejores GPUs de segunda mano para LLMs locales: RTX 3060, 3080, 3090, 4090. Dónde comprar, evaluación de riesgos y cómo hacer pruebas de rendimiento.',
        'url': 'https://www.promptquorum.com/es/es/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/es/es/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Merece la pena comprar una GPU de minería de segunda mano con gran descuento?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Solo si puedes probarla in situ durante 2 horas o más con MemtestG80. De lo contrario, no. El descuento ($50-100) no compensa el 20% de riesgo de fallo.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo puedo saber si una GPU de segunda mano fue una tarjeta de minería?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'En muchos casos no es posible determinarlo solo por las fotos. Pregunta al vendedor. Busca daños térmicos (decoloración cerca de los condensadores) o polvo excesivo. Si la usaron para minar, pide la dirección del pool de minería.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la generación RTX más antigua que debería comprar de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La serie RTX 2000 (2060, 2080) es muy antigua (2018). Cómprala solo por menos de $80. La serie RTX 3000 (2020-2021) es el punto de partida seguro.' }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar una RTX 4070 o una RTX 3080 de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La RTX 3080 (10GB, $350-400 de segunda mano) ofrece mejor relación calidad-precio para LLMs locales que la 4070 (12GB, $450-550 de segunda mano). La 4070 es más reciente, pero solo es un 15% más rápida.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo devolver una GPU de segunda mano en eBay si falla al mes?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Depende de la política del vendedor. La mayoría permite devoluciones en 14 días. Después de 30 días, eres responsable a menos que haya un defecto de fabricación (raro en tarjetas de segunda mano).' }
          },
          {
            '@type': 'Question',
            'name': '¿Vale la pena pagar un 20% más por una GPU con protección de devolución?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Cuesta unos $30-50 en una GPU de $250, pero te protege de perder $250 si la tarjeta falla después de la compra.' }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar una RTX 3090 o una RTX 4090 de segunda mano?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La RTX 4090 si te lo puedes permitir ($1,000-1,300). Mejor eficiencia energética, arquitectura más reciente. La RTX 3090 es excesiva para modelos de 7B y no es mucho más barata de segunda mano ($500-600).' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/es/es/local-llms/used-gpus-for-local-llms',
        'name': 'GPUs de segunda mano para LLMs locales: Comparativa de costes y fiabilidad',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Comparativa de costes: RTX 3060 ($200-250 de segunda mano) vs RTX 3080 ($350-400) vs RTX 4090 ($1,000-1,300): ahorro del 30-50% frente a nueva.' },
          { '@type': 'ListItem', position: 2, name: 'Datos de fiabilidad: la RTX 3060 12GB y la RTX 3080 10GB tienen alto volumen de reventa y VRAM de salud comprobada. Las tarjetas de minería conllevan un riesgo de fallo del 10-20%.' },
          { '@type': 'ListItem', position: 3, name: 'Modelos de GPU de segunda mano recomendados: RTX 3060 12GB (la más segura para empezar), RTX 3080 10GB (VRAM sólida), RTX 4090 24GB (premium, fallos poco frecuentes).' },
        ],
      },
    },
    ar: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'وحدات GPU المستعملة لنماذج LLM المحلية: أفضل الخيارات حسب السعر',
      seoTitle: 'وحدات GPU المستعملة لنماذج LLM المحلية: RTX 3060، 3080، 4090',
      intro: '**توفّر وحدات GPU المستعملة 30-50% مقارنة بالجديدة، مع مخاطر أداء ضئيلة في الطُرز الموثوقة المُثبتة مثل RTX 3060 12GB وRTX 3080.** في أبريل 2026، السوق المستعمل مغمور ببطاقات سابقة للتعدين وسابقة للألعاب بأسعار مستقرة. الشراء المستعمل منطقي لأول جهاز لك أو عند الترقية؛ بطاقات التعدين محفوفة بالمخاطر ما لم تستطع اختبارها في الموقع.',
      metaDescription: 'أفضل وحدات GPU المستعملة لنماذج LLM المحلية: RTX 3060، 3080، 3090، 4090. أين تشتري، وتقييم المخاطر، وكيفية اختبار الأداء.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**توفّر وحدات GPU المستعملة 30-50% مقارنة بالجديدة، مع مخاطر ضئيلة في طُرز مثل RTX 3060 12GB وRTX 3080. في أبريل 2026، السوق المستعمل مغمور ببطاقات سابقة للتعدين وسابقة للألعاب بأسعار مستقرة.**',
      audience: 'المطورون المُلمّون بـ Ollama أو LM Studio الذين يحسّنون سير عمل نماذج LLM المحلية',
      readTime: '8 دقائق قراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU مستعملة',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#tldr' },
        { label: 'أي وحدات GPU المستعملة أكثر أمانًا؟', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB المستعملة ($200-250) وRTX 3080 10GB المستعملة ($350-400) هما الخياران الأكثر أمانًا: حجم كبير في السوق، أسعار مستقرة، وVRAM مُثبت الصحة.',
            'بطاقات التعدين أرخص بنسبة 30%، لكنها تنطوي على خطر تدهور VRAM بنسبة 10-20%. اشترِها فقط إذا أمكنك إجراء اختبار إجهاد في الموقع لمدة ساعتين أو أكثر.',
            'بطاقات الألعاب (مبيعات أجهزة سابقة للألعاب) أكثر أمانًا من بطاقات التعدين. الألعاب العَرَضية لا تُجهد VRAM مثل التعدين على مدار الساعة.',
            'eBay بحماية المشتري، وFacebook Marketplace بالاختبار في الموقع، وCraigslist (محلي فقط، اختبار شخصي) هي أفضل مصادرك.',
            'قبل إتمام الشراء، شغّل MemtestG80 (اختبار ذاكرة GPU) لمدة 1-2 ساعة. تُكتشف VRAM المعطوبة فورًا.',
            'اخصم 5-10% من السعر للبطاقات مجهولة التاريخ. إذا بدت الصفقة جيدة أكثر من اللازم، فالبطاقة على الأرجح بها مشكلات.',
            'تجنّب البطاقات السابقة للخوادم/مراكز البيانات (RTX A100، L40S) ما لم تكن متأكدًا من حالتها: فهي تعمل بحرارة عالية وقد تكون بها أضرار من الخنق الحراري.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'أي وحدات GPU المستعملة أكثر أمانًا؟',
          items: [
            '**RTX 3060 12GB** ($200-250): حجم كبير في السوق المستعمل. VRAM موثوق. البنية الأقدم تعني أعطالًا أقل. خيار آمن.',
            '**RTX 3080 10GB** ($350-400): بطاقة ألعاب شائعة. سجل VRAM قوي. 10GB قابلة للاستخدام (ضيقة لبعض نماذج 70B). آمنة.',
            '**RTX 4090 24GB** ($1,000-1,300): سعر متميز، لكن حجم إعادة بيع كبير = بيانات عن معدلات الأعطال. أعطال VRAM نادرة. آمنة إذا كان السعر مناسبًا.',
            '**RTX 3090 24GB** ($400-600): فئة عليا، باهظة، وأعطال أقل نسبيًا. خيار جيد إذا وجدت واحدة بأقل من $500.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'كم يجب أن تدفع مقابل GPU مستعملة؟',
          content: [
            '**مرجع: سعر التجزئة الرسمي (MSRP) مقابل** السوق المستعمل (أبريل 2026).',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 ← مستعملة $200-250 (خصم 39-62%)',
            'RTX 3080 10GB: MSRP $699 ← مستعملة $350-400 (خصم 50-55%)',
            'RTX 4090 24GB: MSRP $1,499 ← مستعملة $1,000-1,300 (خصم 13-33%، خصم أقل لأنها أحدث)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'بطاقات التعدين مقابل بطاقات الألعاب: ما الفرق؟',
          content: [
            '**بطاقات التعدين**: عملت على مدار الساعة لمدة 1-3 سنوات بحمل حوسبة كامل. إجهاد الدورات الحرارية قاسٍ على VRAM. توجد احتمالية 10-20% لأخطاء VRAM حاليًا.',
            '**بطاقات الألعاب**: عملت بشكل متقطع (4-8 ساعات/يوم) بحمل متغير. إجهاد أقل. يدوم VRAM أطول. أكثر أمانًا.',
            'بصريًا: تُظهر بطاقات التعدين غالبًا علامات استخدام مكثف (غبار، أضرار حرارية، ملصقات منزوعة). بطاقات الألعاب تبدو أفضل.',
            'السعر: بطاقات التعدين أرخص بـ $50-100 للطراز نفسه. لا تستحق المخاطرة ما لم تختبرها في الموقع.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'أين تشتري وحدات GPU المستعملة؟',
          items: [
            '**eBay**: أفضل حماية للمشتري. تقييمات البائع مرئية. الشحن مشمول. إمكانية الإرجاع إذا وصلت معطلة (DOA). تستغرق 1-2 أسبوع.',
            '**Facebook Marketplace**: مبيعات محلية، اختبار في الموقع قبل الدفع. لا مخاطر شحن. توفر فوري. عرض أكبر من Craigslist.',
            '**Craigslist**: أدنى الأسعار. محلي فقط. مخاطر احتيال أعلى. استخدمه فقط إذا أمكنك اللقاء في مكان عام آمن والاختبار فورًا.',
            '**متاجر إصلاح الحواسيب المحلية**: غالبًا لديها مخزون مستعمل. يمكنك السؤال عن سياسة الإرجاع. أسعار أعلى بـ 10-15% من eBay، لكن ثقة أكبر.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'كيف تختبر GPU مستعملة قبل الشراء؟',
          content: [
            '**1. الفحص البصري: تحقق من الأضرار المادية، والمكونات المحترقة، والمكثفات المتسرّبة.**',
            '2. ثبّتها في نظام اختبار: أقلع نظام التشغيل، شغّل GPU-Z. تحقق من سرعات الساعة (يجب أن تطابق المواصفات) وقراءات الحرارة.',
            '3. شغّل MemtestG80 (مجاني): خصّص 90% من VRAM وشغّله لمدة 1-2 ساعة. تظهر الذاكرة المعطوبة كأخطاء.',
            '4. شغّل FurMark (اختبار إجهاد): 30 دقيقة بحمل كامل. يجب ألا تتعطل البطاقة أو تُخنق بشدة.',
            '5. تحقق من عرض نطاق VRAM (CrystalDiskInfo أو GPU-Z): قارن بالمواصفات. إذا كان أقل بشكل كبير، فقد يكون هناك تدهور.',
            'إذا اشتريت من eBay/Craigslist، اطلب من البائع إجراء هذا الاختبار وتقديم لقطات شاشة كدليل.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'أخطاء شائعة عند شراء وحدات GPU المستعملة',
          items: [
            'شراء RTX 3080 من التعدين بـ "خصم $250 عن MSRP" دون اختبارها: غالبًا ما يكون VRAM متدهورًا ويُظهر أخطاء تحت الحمل.',
            'افتراض أن "كالجديدة" يعادل VRAM سليمًا: المظهر الخارجي لا يعادل صحة المكونات. أجرِ دائمًا اختبار إجهاد.',
            'دفع رسوم شحن GPU دون حماية المشتري (خارج eBay): إذا وصلت معطلة، فلا حقّ لك في الرجوع.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'هل تستحق GPU التعدين المستعملة الشراء بخصم كبير؟', a: 'فقط إذا أمكنك اختبارها في الموقع لمدة ساعتين أو أكثر بـ MemtestG80. وإلا، فلا. الخصم ($50-100) لا يعوّض خطر الفشل البالغ 20%.' },
            { q: 'كيف أعرف إن كانت GPU المستعملة بطاقة تعدين؟', a: 'في حالات كثيرة لا يمكن تحديد ذلك من الصور وحدها. اسأل البائع. ابحث عن أضرار حرارية (تغيّر لون قرب المكثفات) أو غبار مفرط. إذا استُخدمت للتعدين، اطلب عنوان مجمّع التعدين.' },
            { q: 'ما أقدم جيل RTX يجب أن أشتريه مستعملًا؟', a: 'سلسلة RTX 2000 (2060، 2080) قديمة جدًا (2018). اشترِها فقط بأقل من $80. سلسلة RTX 3000 (2020-2021) هي نقطة البداية الآمنة.' },
            { q: 'هل أشتري RTX 4070 أم RTX 3080 مستعملة؟', a: 'تقدّم RTX 3080 (10GB، مستعملة $350-400) قيمة أفضل لنماذج LLM المحلية من 4070 (12GB، مستعملة $450-550). 4070 أحدث، لكنها أسرع بنسبة 15% فقط.' },
            { q: 'هل يمكنني إرجاع GPU مستعملة على eBay إذا فشلت بعد شهر؟', a: 'يعتمد على سياسة البائع. يسمح معظمهم بالإرجاع خلال 14 يومًا. بعد 30 يومًا، تتحمّل المسؤولية ما لم يكن هناك عيب تصنيع (نادر في البطاقات المستعملة).' },
            { q: 'هل يستحق دفع 20% إضافية مقابل GPU بحماية إرجاع؟', a: 'نعم. تكلّف نحو $30-50 على GPU بسعر $250، لكنها تحميك من خسارة $250 إذا فشلت البطاقة بعد الشراء.' },
            { q: 'هل أشتري RTX 3090 أم RTX 4090 مستعملة؟', a: 'RTX 4090 إذا كان بإمكانك تحمّلها ($1,000-1,300). كفاءة طاقة أفضل، بنية أحدث. RTX 3090 مبالغ فيها لنماذج 7B وليست أرخص بكثير مستعملة ($500-600).' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[أفضل وحدات GPU الاقتصادية لنماذج LLM المحلية](/ar/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 مقابل RTX 4090](/ar/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[أفضل وحدات GPU لنماذج LLM المحلية](/ar/local-llms/best-gpus-for-local-llms)',
            '[دليل عتاد LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'المصادر',
          items: [
            'سجل أسعار وحدات GPU على eBay وبيانات السوق (أبريل 2026)',
            'وثائق MemtestG80 وأدوات اختبار إجهاد GPU للتحقق من VRAM',
            'قاعدة بيانات مواصفات GPU-Z للقيم المرجعية للحرارة وسرعة الساعة',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'أفضل وحدات GPU المستعملة لنماذج LLM المحلية: دليل شراء RTX 3060، 3080، 4090',
        'description': 'أفضل وحدات GPU المستعملة لنماذج LLM المحلية: RTX 3060، 3080، 3090، 4090. أين تشتري، وتقييم المخاطر، وكيفية اختبار الأداء.',
        'url': 'https://www.promptquorum.com/ar/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'فقط إذا أمكنك اختبارها في الموقع لمدة ساعتين أو أكثر بـ MemtestG80. وإلا، فلا. الخصم ($50-100) لا يعوّض خطر الفشل البالغ 20%.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أعرف إن كانت GPU المستعملة بطاقة تعدين؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'في حالات كثيرة لا يمكن تحديد ذلك من الصور وحدها. اسأل البائع. ابحث عن أضرار حرارية (تغيّر لون قرب المكثفات) أو غبار مفرط. إذا استُخدمت للتعدين، اطلب عنوان مجمّع التعدين.' }
          },
          {
            '@type': 'Question',
            'name': 'ما أقدم جيل RTX يجب أن أشتريه مستعملًا؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'سلسلة RTX 2000 (2060، 2080) قديمة جدًا (2018). اشترِها فقط بأقل من $80. سلسلة RTX 3000 (2020-2021) هي نقطة البداية الآمنة.' }
          },
          {
            '@type': 'Question',
            'name': 'هل أشتري RTX 4070 أم RTX 3080 مستعملة؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'تقدّم RTX 3080 (10GB، مستعملة $350-400) قيمة أفضل لنماذج LLM المحلية من 4070 (12GB، مستعملة $450-550). 4070 أحدث، لكنها أسرع بنسبة 15% فقط.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني إرجاع GPU مستعملة على eBay إذا فشلت بعد شهر؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يعتمد على سياسة البائع. يسمح معظمهم بالإرجاع خلال 14 يومًا. بعد 30 يومًا، تتحمّل المسؤولية ما لم يكن هناك عيب تصنيع (نادر في البطاقات المستعملة).' }
          },
          {
            '@type': 'Question',
            'name': 'هل يستحق دفع 20% إضافية مقابل GPU بحماية إرجاع؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. تكلّف نحو $30-50 على GPU بسعر $250، لكنها تحميك من خسارة $250 إذا فشلت البطاقة بعد الشراء.' }
          },
          {
            '@type': 'Question',
            'name': 'هل أشتري RTX 3090 أم RTX 4090 مستعملة؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4090 إذا كان بإمكانك تحمّلها ($1,000-1,300). كفاءة طاقة أفضل، بنية أحدث. RTX 3090 مبالغ فيها لنماذج 7B وليست أرخص بكثير مستعملة ($500-600).' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ar/local-llms/used-gpus-for-local-llms',
        'name': 'وحدات GPU المستعملة لنماذج LLM المحلية: مقارنة التكلفة والموثوقية',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'مقارنة التكلفة: RTX 3060 (مستعملة $200-250) مقابل RTX 3080 ($350-400) مقابل RTX 4090 ($1,000-1,300): توفير 30-50% مقارنة بالجديدة.' },
          { '@type': 'ListItem', position: 2, name: 'بيانات الموثوقية: RTX 3060 12GB وRTX 3080 10GB لهما حجم إعادة بيع كبير وVRAM مُثبت الصحة. بطاقات التعدين تنطوي على خطر فشل بنسبة 10-20%.' },
          { '@type': 'ListItem', position: 3, name: 'طُرز GPU مستعملة موصى بها: RTX 3060 12GB (الأكثر أمانًا للبدء)، RTX 3080 10GB (VRAM قوي)، RTX 4090 24GB (متميزة، أعطال نادرة).' },
        ],
      },
    },
    pt: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'GPUs usadas para LLMs locais: As melhores opções por preço',
      seoTitle: 'Melhores GPUs usadas para LLMs locais: RTX 3060, 3080, 4090 — Guia de compra',
      intro: '**As GPUs usadas oferecem uma economia de 30-50% em relação às novas, com risco mínimo de desempenho em modelos de confiabilidade comprovada como a RTX 3060 12GB e a RTX 3080.** Em abril de 2026, o mercado de usados está repleto de placas ex-mineração e ex-gaming a preços estáveis. Comprar usado faz sentido para seu primeiro setup ou ao atualizar; placas de mineração são arriscadas a menos que você possa testá-las in loco.',
      metaDescription: 'Melhores GPUs usadas para LLMs locais: RTX 3060, 3080, 3090, 4090. Onde comprar, avaliação de riscos e como fazer benchmarks.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**As GPUs usadas oferecem uma economia de 30-50% em relação às novas, com risco mínimo em modelos como a RTX 3060 12GB e a RTX 3080. Em abril de 2026, o mercado de usados está repleto de placas ex-mineração e ex-gaming a preços estáveis.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho de LLMs locais',
      readTime: '8 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU usada',
      toc: [
        { label: 'Resumo', anchor: '#tldr' },
        { label: 'Quais GPUs usadas são mais seguras para comprar?', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB usada (R$ 1.200-1.500) e RTX 3080 10GB usada (R$ 1.800-2.200) são as apostas mais seguras — alto volume no mercado, preços estáveis, saúde de VRAM comprovada.',
            'Placas de mineração são 30% mais baratas, mas apresentam risco de degradação de VRAM de 10-20%. Compre apenas se puder fazer teste de estresse in loco por 2 horas ou mais.',
            'Placas de gaming (vendas de rigs ex-gaming) são mais seguras que as de mineração. O gaming casual não estressa o VRAM como a mineração 24/7.',
            'Mercado Livre e OLX com proteção ao comprador, grupos do Facebook com teste in loco e Craigslist (somente local, teste pessoalmente) são suas melhores fontes.',
            'Antes de fechar a compra, execute o MemtestG80 (teste de memória de GPU) por 1-2 horas. VRAM com defeito é detectada imediatamente.',
            'Desconte 5-10% no preço de placas com histórico desconhecido. Se uma oferta parece boa demais, a placa provavelmente tem problemas.',
            'Evite placas ex-servidor/data center (RTX A100, L40S) a menos que tenha certeza do estado — funcionam em temperaturas altas e podem ter danos por limitação térmica.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Quais GPUs usadas são mais seguras para comprar?',
          items: [
            '**RTX 3060 12GB** (R$ 1.200-1.500): Grande volume no mercado de usados. VRAM confiável. Arquitetura mais antiga significa menos falhas. Escolha segura.',
            '**RTX 3080 10GB** (R$ 1.800-2.200): Placa de gaming popular. Histórico sólido de VRAM. 10GB é utilizável (apertado para alguns modelos 70B). Segura.',
            '**RTX 4090 24GB** (R$ 7.000-8.000): Preço premium, mas alto volume de revenda = dados sobre taxas de falha. Falhas de VRAM raras. Segura se bem precificada.',
            '**RTX 3090 24GB** (R$ 4.000-5.000): High-end, cara, proporcionalmente menos falhas. Boa opção se encontrar uma abaixo de R$ 4.500.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Quanto pagar por GPUs usadas?',
          content: [
            '**Referência: MSRP de varejo vs.** mercado de usados (abril de 2026).',
          ],
          items: [
            'RTX 3060 12GB: MSRP R$ 1.800 → Usada R$ 1.200-1.500 (17-33% de desconto)',
            'RTX 3080 10GB: MSRP R$ 3.500 → Usada R$ 1.800-2.200 (37-49% de desconto)',
            'RTX 4090 24GB: MSRP R$ 9.000 → Usada R$ 7.000-8.000 (11-22% de desconto, desconto menor por ser mais recente)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Placas de mineração vs. gaming: qual a diferença?',
          content: [
            '**Placas de mineração** funcionaram 24/7 por 1-3 anos com carga computacional máxima. O estresse por ciclos térmicos é brutal para o VRAM. Há 10-20% de chance de erros de VRAM hoje em dia.',
            '**Placas de gaming** funcionaram de forma intermitente (4-8 h/dia) com carga variável. Menos estresse. O VRAM dura mais. Mais seguras.',
            'Visualmente: placas de mineração costumam mostrar sinais de uso intenso (poeira, danos térmicos, etiquetas descascadas). Placas de gaming têm aparência mais limpa.',
            'Preço: placas de mineração são R$ 300-600 mais baratas pelo mesmo modelo. Não vale o risco a menos que você as teste in loco.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Onde comprar GPUs usadas?',
          items: [
            '**Mercado Livre**: Melhor proteção ao comprador. Avaliações do vendedor visíveis. Frete incluso. Possibilidade de devolução se chegar com defeito (DOA). Leva 1-2 semanas.',
            '**OLX / grupos do Facebook**: Vendas locais, teste in loco antes do pagamento. Sem risco de frete. Disponibilidade imediata. Maior oferta que outras plataformas.',
            '**Hardware.com.br / fóruns**: Preços mais baixos. Comunidade técnica. Risco moderado de golpes. Use apenas se puder verificar o histórico do vendedor.',
            '**Lojas de informática locais com usados**: Costumam ter estoque de segunda mão. Você pode perguntar sobre a política de devolução. Preços 10-15% mais altos que o Mercado Livre, mas maior confiança.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Como testar uma GPU usada antes de comprar?',
          content: [
            '**1. Inspeção visual: verifique danos físicos, componentes queimados e capacitores com vazamento.**',
            '2. Instale em um sistema de teste: inicialize o sistema operacional, execute o GPU-Z. Verifique as velocidades de clock (devem corresponder às especificações) e as leituras de temperatura.',
            '3. Execute o MemtestG80 (gratuito): aloque 90% do VRAM e execute por 1-2 horas. Memória com defeito aparece como erros.',
            '4. Execute o FurMark (teste de estresse): 30 minutos com carga máxima. A placa não deve travar nem fazer throttling grave.',
            '5. Verifique a largura de banda do VRAM (CrystalDiskInfo ou GPU-Z): compare com as especificações. Significativamente inferior = potencial degradação.',
            'Se comprar no Mercado Livre ou OLX, exija que o vendedor realize esse teste e forneça capturas de tela como evidência.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Erros comuns ao comprar GPUs usadas',
          items: [
            'Comprar uma RTX 3080 de mineração com "R$ 1.000 de desconto do MSRP" sem testá-la — o VRAM costuma estar degradado e mostra erros sob carga.',
            'Assumir que "como nova" equivale a VRAM saudável — aparência estética não equivale à saúde dos componentes. Faça sempre um teste de estresse.',
            'Pagar o frete de uma GPU sem proteção ao comprador (fora do Mercado Livre) — se chegar com defeito, você não tem recurso.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Vale a pena comprar uma GPU de mineração usada com grande desconto?', a: 'Somente se puder testá-la in loco por 2 horas ou mais com o MemtestG80. Caso contrário, não. O desconto (R$ 300-600) não compensa o risco de falha de 20%.' },
            { q: 'Como posso saber se uma GPU usada foi uma placa de mineração?', a: 'Em muitos casos não é possível determinar apenas pelas fotos. Pergunte ao vendedor. Procure danos térmicos (descoloração perto dos capacitores) ou poeira excessiva. Se foi usada para mineração, peça o endereço da pool de mineração.' },
            { q: 'Qual é a geração RTX mais antiga que devo comprar usada?', a: 'A série RTX 2000 (2060, 2080) é muito antiga (2018). Compre apenas por menos de R$ 400. A série RTX 3000 (2020-2021) é o ponto de partida seguro.' },
            { q: 'Devo comprar uma RTX 4070 ou RTX 3080 usada?', a: 'A RTX 3080 (10GB, R$ 1.800-2.200 usada) oferece melhor custo-benefício para LLMs locais do que a 4070 (12GB, R$ 2.500-3.000 usada). A 4070 é mais recente, mas apenas 15% mais rápida.' },
            { q: 'Posso devolver uma GPU usada no Mercado Livre se ela falhar após 1 mês?', a: 'Depende da política do vendedor. A maioria permite devoluções em 14 dias. Após 30 dias, você fica por sua conta a menos que haja um defeito de fabricação (raro em placas usadas).' },
            { q: 'Vale a pena pagar 20% a mais por uma GPU com proteção de devolução?', a: 'Sim. Custa cerca de R$ 150-250 em uma GPU de R$ 1.500, mas evita perder R$ 1.500 se a placa falhar após a compra.' },
            { q: 'Devo comprar uma RTX 3090 ou RTX 4090 usada?', a: 'RTX 4090 se puder pagar (R$ 7.000-8.000 usada). Melhor eficiência energética, arquitetura mais recente. A RTX 3090 (R$ 4.000-5.000 usada) ainda é capaz para modelos 32B, mas a diferença de preço diminuiu em 2026.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/pt/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Melhores GPUs para LLMs locais](/pt/local-llms/best-gpus-for-local-llms)',
            '[Guia de hardware para LLMs locais 2026](/pt/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Fontes',
          items: [
            'Histórico de preços de GPUs no Mercado Livre e dados do mercado (abril de 2026)',
            'Documentação do MemtestG80 e ferramentas de teste de estresse de GPU para validação de VRAM',
            'Banco de dados de especificações GPU-Z para valores de referência térmicos e de velocidade de clock',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Melhores GPUs usadas para LLMs locais: Guia de compra RTX 3060, 3080, 4090',
        description: 'Melhores GPUs usadas para LLMs locais: RTX 3060, 3080, 3090, 4090. Onde comprar, avaliação de riscos e como fazer benchmarks.',
        url: 'https://www.promptquorum.com/pt/local-llms/used-gpus-for-local-llms',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-05',
        dateModified: '2026-04-19',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
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
            acceptedAnswer: { '@type': 'Answer', text: 'Somente se puder testá-la in loco por 2 horas ou mais com o MemtestG80. Caso contrário, não. O desconto (R$ 300-600) não compensa o risco de falha de 20%.' }
          },
          {
            '@type': 'Question',
            name: 'Como posso saber se uma GPU usada foi uma placa de mineração?',
            acceptedAnswer: { '@type': 'Answer', text: 'Em muitos casos não é possível determinar apenas pelas fotos. Pergunte ao vendedor. Procure danos térmicos (descoloração perto dos capacitores) ou poeira excessiva. Se foi usada para mineração, peça o endereço da pool de mineração.' }
          },
          {
            '@type': 'Question',
            name: 'Qual é a geração RTX mais antiga que devo comprar usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'A série RTX 2000 (2060, 2080) é muito antiga (2018). Compre apenas por menos de R$ 400. A série RTX 3000 (2020-2021) é o ponto de partida seguro.' }
          },
          {
            '@type': 'Question',
            name: 'Devo comprar uma RTX 4070 ou RTX 3080 usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'A RTX 3080 (10GB, R$ 1.800-2.200 usada) oferece melhor custo-benefício para LLMs locais do que a 4070 (12GB, R$ 2.500-3.000 usada). A 4070 é mais recente, mas apenas 15% mais rápida.' }
          },
          {
            '@type': 'Question',
            name: 'Posso devolver uma GPU usada no Mercado Livre se ela falhar após 1 mês?',
            acceptedAnswer: { '@type': 'Answer', text: 'Depende da política do vendedor. A maioria permite devoluções em 14 dias. Após 30 dias, você fica por sua conta a menos que haja um defeito de fabricação (raro em placas usadas).' }
          },
          {
            '@type': 'Question',
            name: 'Vale a pena pagar 20% a mais por uma GPU com proteção de devolução?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sim. Custa cerca de R$ 150-250 em uma GPU de R$ 1.500, mas evita perder R$ 1.500 se a placa falhar após a compra.' }
          },
          {
            '@type': 'Question',
            name: 'Devo comprar uma RTX 3090 ou RTX 4090 usada?',
            acceptedAnswer: { '@type': 'Answer', text: 'RTX 4090 se puder pagar (R$ 7.000-8.000 usada). Melhor eficiência energética, arquitetura mais recente. A RTX 3090 (R$ 4.000-5.000 usada) ainda é capaz para modelos 32B, mas a diferença de preço diminuiu em 2026.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: 'https://www.promptquorum.com/pt/local-llms/used-gpus-for-local-llms',
        name: 'GPUs usadas para LLMs locais: Comparação de custos e confiabilidade',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Comparação de custos: RTX 3060 (R$ 1.200-1.500 usada) vs RTX 3080 (R$ 1.800-2.200) vs RTX 4090 (R$ 7.000-8.000) — economia de 30-50% vs nova.' },
          { '@type': 'ListItem', position: 2, name: 'Dados de confiabilidade: RTX 3060 12GB e RTX 3080 10GB têm alto volume de revenda e saúde de VRAM comprovada. Placas de mineração apresentam risco de falha de 10-20%.' },
          { '@type': 'ListItem', position: 3, name: 'Modelos de GPU usada recomendados: RTX 3060 12GB (a mais segura para começar), RTX 3080 10GB (VRAM sólida), RTX 4090 24GB (premium, falhas raras).' },
        ],
      },
    },
    de: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'Gebrauchte GPUs für lokale LLMs: Die besten Sparangebote',
      seoTitle: 'Gebrauchte GPUs für lokale LLMs 2026: Wert & Risiken',
      intro: '**Gebrauchte GPUs bieten 30-50% Ersparnis gegenüber Neuware bei minimalem Leistungsrisiko bei bewährten Modellen wie RTX 3060 12GB und RTX 3080.** Im April 2026 ist der Gebrauchtmarkt von Ex-Mining- und Ex-Gaming-Karten zu stabilen Preisen überschwemmt. Der Kauf von gebrauchter Hardware macht Sinn für Ihr erstes System oder beim Aufrüsten; Mining-Karten sind riskant, es sei denn, Sie können vor Ort testen.',
      metaDescription: 'Beste gebrauchte GPUs für lokale LLMs: RTX 3060, 3080, 3090, 4090. Wo kaufen, Risikobewertung, Bench-Test-Anleitung.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Gebrauchte GPUs bieten 30-50% Ersparnis gegenüber Neuware bei minimalem Leistungsrisiko bei bewährten Modellen wie RTX 3060 12GB und RTX 3080. Im April 2026 ist der Gebrauchtmarkt von Ex-Mining- und Ex-Gaming-Karten zu stabilen Preisen überschwemmt.**',
      audience: 'Entwickler, die mit Ollama oder LM Studio lokale LLM-Workflows optimieren',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Gebrauchte GPU',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Welche gebrauchten GPUs sind am sichersten zu kaufen?', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB gebraucht (€180-220) und RTX 3080 10GB gebraucht (€320-360) sind die sichersten Wetten – hohe Marktmenge, stabile Preise, bewährte VRAM-Gesundheit.',
            'Mining-Karten sind 30% billiger, aber mit 10-20% Risiko von VRAM-Verschleiß. Kaufen Sie nur, wenn Sie vor Ort 2+ Stunden Stress-Test durchführen können.',
            'Gaming-Karten (Ex-Gaming-Rig-Verkäufe) sind sicherer als Mining-Karten. Casual Gaming belastet VRAM nicht wie 24/7-Mining.',
            'eBay mit Käuferschutz, Facebook Marketplace mit Vorort-Test und Craigslist (nur lokal, Test vor Ort) sind Ihre besten Quellen.',
            'Führen Sie vor dem Abschluss MemtestG80 (GPU-Memory-Test) 1-2 Stunden lang durch. Fehler im VRAM zeigen sich sofort.',
            'Veranschlagen Sie 5-10% Preisabschlag für Karten mit unbekannter Geschichte. Wenn ein Angebot zu gut aussieht, hat die Karte wahrscheinlich Probleme.',
            'Vermeiden Sie Ex-Server-/Rechenzentrum-Karten (RTX A100, L40S), es sei denn, Sie sind sich ihrer Bedingung sicher – sie laufen heiß und können Wärmeschutzschäden haben.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Welche gebrauchten GPUs sind am sichersten zu kaufen?',
          items: [
            '**RTX 3060 12GB** (€180-220): Riesiges Angebot auf dem Gebrauchtmarkt. Zuverlässiger VRAM. Ältere Architektur bedeutet weniger Ausfälle. Sichere Wahl.',
            '**RTX 3080 10GB** (€320-360): Beliebte Gaming-Karte. Solide VRAM-Historie. 10GB ist nutzbar (eng für einige 70B-Modelle). Sicher.',
            '**RTX 4090 24GB** (€900-1.150): Premium-Preisgestaltung, aber hohes Wiederverkaufsvolumen = Daten zu Ausfallraten. Seltene VRAM-Fehler. Sicher bei richtigem Preis.',
            '**RTX 3090 24GB** (€360-540): High-End, teuer, proportional weniger Ausfälle. Gut, wenn Sie eine unter €450 finden.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Wie viel sollten Sie für gebrauchte GPUs bezahlen?',
          content: [
            '**Vergleich: Retail-UVP vs.** Gebrauchtmarkt (April 2026).',
          ],
          items: [
            'RTX 3060 12GB: UVP €329 → Gebraucht €180-220 (33-45% Rabatt)',
            'RTX 3080 10GB: UVP €699 → Gebraucht €320-360 (45-54% Rabatt)',
            'RTX 4090 24GB: UVP €1.499 → Gebraucht €900-1.150 (23-40% Rabatt, kleinerer Rabatt da neuer)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Mining-Karten vs. Gaming-Karten: Was ist der Unterschied?',
          content: [
            '**Mining-Karten** liefen 24/7 für 1-3 Jahre bei voller Rechenlast. Thermische Zyklus-Belastung ist brutal für VRAM. 10-20% Chance auf VRAM-Fehler inzwischen.',
            '**Gaming-Karten** liefen intermittierend (4-8 Std./Tag) bei unterschiedlicher Last. Weniger Belastung. VRAM hält länger. Sicherer.',
            'Visuell: Mining-Karten zeigen oft Zeichen starker Nutzung (Staub, Wärmeschaden, abgelöste Etiketten). Gaming-Karten sehen sauberer aus.',
            'Preis: Mining-Karten sind $50-100 billiger für das gleiche Modell. Nicht wert das Risiko, es sei denn Sie testen vor Ort.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Wo sollten Sie gebrauchte GPUs kaufen?',
          items: [
            '**eBay**: Bester Käuferschutz. Verkäuferbewertungen sichtbar. Versand inklusive. Rückgabe möglich bei Ankunft defekt. Dauert 1-2 Wochen.',
            '**Facebook Marketplace**: Lokale Verkäufe, Test vor Ort vor Zahlung. Kein Versandrisiko. Sofortige Verfügbarkeit. Größerer Pool als Craigslist.',
            '**Craigslist**: Billigste Preise. Nur lokal. Höchstes Betrugsrisiko. Nutzen Sie nur, wenn Sie an sicherem öffentlichem Ort treffen und sofort testen können.',
            '**Lokale Computerreparaturläden**: Haben oft Gebrauchtbestand. Können nach Rückgaberichtlinie fragen. Preise 10-15% höher als eBay, aber mehr Vertrauen.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Wie testen Sie eine gebrauchte GPU vor dem Kauf?',
          content: [
            '**1. Sichtprüfung: Auf physische Schäden, verbrannte Komponenten, austretende Kondensatoren prüfen.**',
            '2. In Testsystem installieren: In Betriebssystem starten, GPU-Z ausführen. Taktfrequenzen prüfen (sollten Spec entsprechen), Temperaturlesungen.',
            '3. MemtestG80 ausführen (kostenlos): 90% des VRAM zuweisen, 1-2 Stunden laufen lassen. Schlechter Speicher zeigt sich als Fehler.',
            '4. FurMark ausführen (Stresstest): 30 Minuten bei voller Last. Karte sollte nicht abstürzen oder stark drosseln.',
            '5. VRAM-Bandbreite prüfen (CrystalDiskInfo oder GPU-Z): Mit Spec vergleichen. Deutlich niedriger = möglicher Verschleiß.',
            'Beim Kauf auf eBay/Craigslist bestehen Sie darauf, dass Verkäufer diesen Test durchführt und Screenshot-Beweis bereitstellt.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Häufige Fehler beim Kauf gebrauchter GPUs',
          items: [
            'Mining RTX 3080 für "€180 unter UVP" kaufen ohne zu testen – VRAM ist oft verschlissen, zeigt Fehler unter Last.',
            'Annehmen, dass "wie neu" bedeutet gesunder VRAM – Kosmetik ≠ Komponentengesundheit. Immer Stress-Test durchführen.',
            'Für Versand ohne Käuferschutz bezahlen (nicht eBay) – kommt defekt an, Sie sind verloren.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Lohnt es sich, eine gebrauchte Mining-GPU mit starkem Rabatt zu kaufen?', a: 'Nur, wenn Sie sie vor Ort 2+ Stunden mit MemtestG80 testen können. Sonst nein. Der Rabatt (€45-90) ist das 20% Ausfallrisiko nicht wert.' },
            { q: 'Wie erkenne ich, ob eine gebrauchte GPU eine Mining-Karte war?', a: 'Oft können Sie es von Fotos allein nicht. Fragen Sie den Verkäufer. Achten Sie auf Wärmeschaden (Verfärbung neben Kondensatoren) oder ungewöhnlich starken Staub. Fragen Sie nach ihrer Mining-Pool-Adresse, falls sie verwendet wurde.' },
            { q: 'Was ist die älteste RTX-Generation, die ich gebraucht kaufen sollte?', a: 'RTX 2000-Serie (2060, 2080) sind sehr alt (2018). Kaufen Sie nur unter €72. RTX 3000-Serie (2020-2021) ist die sichere Grundlage.' },
            { q: 'Sollte ich eine gebrauchte RTX 4070 oder RTX 3080 kaufen?', a: 'RTX 3080 (10GB, €320-360 gebraucht) ist besserer Wert für lokale LLMs als 4070 (12GB, €405-495 gebraucht). 4070 ist neuer aber nur 15% schneller.' },
            { q: 'Kann ich eine gebrauchte GPU auf eBay zurückgeben, wenn sie nach 1 Monat ausfällt?', a: 'Hängt von der Verkäuferrichtlinie ab. Die meisten erlauben 14-tägige Rückgaben. Nach 30 Tagen sind Sie auf sich allein gestellt, es sei denn es gibt einen Herstellerfehler (selten bei gebrauchten Karten).' },
            { q: 'Lohnt es sich, 20% mehr für eine GPU mit Rückgabeschutz zu bezahlen?', a: 'Ja. Kostet ~€25-45 auf einer €250-GPU, aber spart Sie vor €250-Verlust, wenn die Karte nach dem Kauf stirbt.' },
            { q: 'Sollte ich eine gebrauchte RTX 3090 oder RTX 4090 kaufen?', a: 'RTX 4090, wenn Sie es sich leisten können (€900-1.150). Bessere Energieeffizienz, neuere Architektur. RTX 3090 ist Overkill für 7B-Modelle und nicht viel billiger gebraucht (€450-540).' },
            { q: 'Muss ich bei der Verwendung gebrauchter GPUs die DSGVO beachten?', a: 'Gebrauchte GPUs selbst sind nicht DSGVO-relevant. Aber wenn Sie sie zur Verarbeitung personenbezogener Daten in lokalen LLMs verwenden, müssen Sie DSGVO Artikel 28 erfüllen. Lokale Inferenz hilft bei Datenschutz, da Daten nicht die EU verlassen.' },
            { q: 'Sind gebrauchte GPUs für den deutschen Mittelstand geeignet?', a: 'Ja, mit Vorsicht. Gebrauchte RTX 3060 oder 3080 sind kosteneffizient für KMU-LLM-Projekte. Stellen Sie sicher: stabiler Verkäufer (eBay mit Käuferschutz), Vor-Ort-Test oder Rückgaberecht, und BSI-Grundschutz-konforme Lagerung.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Empfohlene Artikel',
          items: [
            '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms)',
            '[Leitfaden zur lokalen LLM-Hardware 2026](/de/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Quellen',
          items: [
            'eBay GPU-Preishistorie und Marktdaten (April 2026)',
            'MemtestG80 und GPU-Stress-Test-Tool-Dokumentation für VRAM-Validierung',
            'GPU-Z-Spezifikationsdatenbank für thermische und Taktfrequenz-Baselines',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Beste gebrauchte GPUs für LLMs: RTX 3060, 3080, 4090 Kaufleitfaden',
        'description': 'Beste gebrauchte GPUs für lokale LLMs: RTX 3060, 3080, 3090, 4090. Wo kaufen, Risikobewertung, Bench-Test-Anleitung.',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Lohnt es sich, eine gebrauchte Mining-GPU mit starkem Rabatt zu kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Nur, wenn Sie sie vor Ort 2+ Stunden mit MemtestG80 testen können. Sonst nein. Der Rabatt (€45-90) ist das 20% Ausfallrisiko nicht wert.' }
          },
          {
            '@type': 'Question',
            'name': 'Wie erkenne ich, ob eine gebrauchte GPU eine Mining-Karte war?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oft können Sie es von Fotos allein nicht. Fragen Sie den Verkäufer. Achten Sie auf Wärmeschaden (Verfärbung neben Kondensatoren) oder ungewöhnlich starken Staub. Fragen Sie nach ihrer Mining-Pool-Adresse, falls sie verwendet wurde.' }
          },
          {
            '@type': 'Question',
            'name': 'Was ist die älteste RTX-Generation, die ich gebraucht kaufen sollte?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000-Serie (2060, 2080) sind sehr alt (2018). Kaufen Sie nur unter €72. RTX 3000-Serie (2020-2021) ist die sichere Grundlage.' }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich eine gebrauchte RTX 4070 oder RTX 3080 kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 (10GB, €320-360 gebraucht) ist besserer Wert für lokale LLMs als 4070 (12GB, €405-495 gebraucht). 4070 ist neuer aber nur 15% schneller.' }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich eine gebrauchte GPU auf eBay zurückgeben, wenn sie nach 1 Monat ausfällt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Hängt von der Verkäuferrichtlinie ab. Die meisten erlauben 14-tägige Rückgaben. Nach 30 Tagen sind Sie auf sich allein gestellt, es sei denn es gibt einen Herstellerfehler (selten bei gebrauchten Karten).' }
          },
          {
            '@type': 'Question',
            'name': 'Lohnt es sich, 20% mehr für eine GPU mit Rückgabeschutz zu bezahlen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Kostet ~€25-45 auf einer €250-GPU, aber spart Sie vor €250-Verlust, wenn die Karte nach dem Kauf stirbt.' }
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich eine gebrauchte RTX 3090 oder RTX 4090 kaufen?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4090, wenn Sie es sich leisten können (€900-1.150). Bessere Energieeffizienz, neuere Architektur. RTX 3090 ist Overkill für 7B-Modelle und nicht viel billiger gebraucht (€450-540).' }
          },
          {
            '@type': 'Question',
            'name': 'Muss ich bei der Verwendung gebrauchter GPUs die DSGVO beachten?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Gebrauchte GPUs selbst sind nicht DSGVO-relevant. Aber wenn Sie sie zur Verarbeitung personenbezogener Daten in lokalen LLMs verwenden, müssen Sie DSGVO Artikel 28 erfüllen. Lokale Inferenz hilft bei Datenschutz, da Daten nicht die EU verlassen.' }
          },
          {
            '@type': 'Question',
            'name': 'Sind gebrauchte GPUs für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, mit Vorsicht. Gebrauchte RTX 3060 oder 3080 sind kosteneffizient für KMU-LLM-Projekte. Stellen Sie sicher: stabiler Verkäufer (eBay mit Käuferschutz), Vor-Ort-Test oder Rückgaberecht, und BSI-Grundschutz-konforme Lagerung.' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/de/local-llms/used-gpus-for-local-llms',
        'name': 'Gebrauchte GPUs für lokale LLMs: Kostenvergleich & Zuverlässigkeit',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Kostenvergleich: RTX 3060 (€180-220 gebraucht) vs RTX 3080 (€320-360) vs RTX 4090 (€900-1.150) – 30-50% Ersparnis gegenüber Neuware.' },
          { '@type': 'ListItem', position: 2, name: 'Zuverlässigkeitsdaten: RTX 3060 12GB und RTX 3080 10GB haben hohes Wiederverkaufsvolumen und bewährte VRAM-Gesundheit. Mining-Karten tragen 10-20% Ausfallrisiko.' },
          { '@type': 'ListItem', position: 3, name: 'Empfohlene gebrauchte GPU-Modelle: RTX 3060 12GB (sicherster Einstieg), RTX 3080 10GB (solider VRAM), RTX 4090 24GB (Premium, seltene Ausfälle).' },
        ],
      },
    },
    fr: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'GPU utilisés pour LLMs locaux : Meilleures offres de valeur',
      seoTitle: 'Meilleures GPU utilisées pour LLMs : Guide d\'achat RTX 3060, 3080, 4090',
      intro: '**Les GPU utilisés offrent 30-50% d\'économies par rapport aux neufs, avec un risque de performance minimal sur des modèles éprouvés comme RTX 3060 12GB et RTX 3080.** En avril 2026, le marché des occasion est inondé de cartes ex-mining et ex-gaming à des prix stables. L\'achat d\'occasion a du sens pour votre premier système ou lors d\'une mise à niveau ; les cartes minières sont risquées sauf si vous pouvez tester sur site.',
      metaDescription: 'Meilleures GPU utilisées pour LLMs locaux : RTX 3060, 3080, 3090, 4090. Où acheter, évaluation des risques, test de performance.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Les GPU utilisés offrent 30-50% d\'économies par rapport aux neufs, avec un risque minimal sur des modèles comme RTX 3060 12GB et RTX 3080. En avril 2026, le marché des occasion est inondé de cartes ex-mining et ex-gaming.**',
      audience: 'Développeurs familiers avec Ollama ou LM Studio optimisant les workflows LLM locaux',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU utilisée',
      toc: [
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Quelles GPU utilisées sont les plus sûres à acheter ?', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB utilisée (€160-190) et RTX 3080 10GB utilisée (€300-330) sont les paris les plus sûrs – volume élevé, prix stables, santé VRAM éprouvée.',
            'Les cartes minières sont 30% moins chères mais comportent un risque de 10-20% de dégradation VRAM. Achetez seulement si vous pouvez tester sur site pendant 2+ heures.',
            'Les cartes gaming (reventes ex-gaming) sont plus sûres que les cartes minières. Le gaming occasionnel ne fatigue pas le VRAM comme le mining 24/7.',
            'eBay avec protection acheteur, Facebook Marketplace avec test sur site et Craigslist (local uniquement, test sur site) sont vos meilleures sources.',
            'Avant de finaliser, exécutez MemtestG80 (test mémoire GPU) pendant 1-2 heures. Les mauvaises VRAM apparaissent immédiatement.',
            'Budgétisez 5-10% de rabais prix pour les cartes sans historique connu. Si une offre semble trop bonne, la carte a probablement des problèmes.',
            'Évitez les cartes ex-serveur/data-center (RTX A100, L40S) sauf si vous êtes certain de leur état – elles tournent chaudes et peuvent avoir des dommages thermiques.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Quelles GPU utilisées sont les plus sûres à acheter ?',
          items: [
            '**RTX 3060 12GB** (€160-190) : Volume énorme sur le marché d\'occasion. VRAM fiable. Architecture plus ancienne signifie moins de défaillances. Choix sûr.',
            '**RTX 3080 10GB** (€300-330) : Carte gaming populaire. Historique VRAM solide. 10GB utilisable (serré pour certains modèles 70B). Sûr.',
            '**RTX 4090 24GB** (€850-1 050) : Prix premium, mais volume de revente élevé = données sur taux de défaillance. Défaillances VRAM rares. Sûr si bien tarifé.',
            '**RTX 3090 24GB** (€330-480) : Haut de gamme, cher, proportionnellement moins de défaillances. Bon si vous en trouvez un sous €400.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'Combien devriez-vous payer pour les GPU utilisées ?',
          content: [
            '**Comparaison : PDSF retail vs.** marché occasion (avril 2026).',
          ],
          items: [
            'RTX 3060 12GB : PDSF €329 → Occasion €160-190 (42-51% rabais)',
            'RTX 3080 10GB : PDSF €699 → Occasion €300-330 (57-57% rabais)',
            'RTX 4090 24GB : PDSF €1 499 → Occasion €850-1 050 (30-43% rabais, rabais moins important car plus récent)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Cartes minières vs cartes gaming : Quelle est la différence ?',
          content: [
            '**Cartes minières** ont fonctionné 24/7 pendant 1-3 ans à charge de calcul complète. Le stress des cycles thermiques est brutal pour le VRAM. 10-20% de chance d\'erreurs VRAM maintenant.',
            '**Cartes gaming** fonctionnaient par intermittence (4-8 h/jour) à charge variable. Moins de stress. Le VRAM dure plus longtemps. Plus sûr.',
            'Visuellement : Les cartes minières montrent souvent des signes d\'utilisation intensive (poussière, dommages thermiques, étiquettes décollées). Les cartes gaming paraissent plus propres.',
            'Prix : Les cartes minières coûtent €40-90 moins cher pour le même modèle. Pas la peine du risque sauf si vous testez sur site.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Où devriez-vous acheter les GPU utilisées ?',
          items: [
            '**eBay** : Meilleure protection acheteur. Notations vendeur visibles. Livraison incluse. Possible de retour si morte à l\'arrivée (DOA). Prend 1-2 semaines.',
            '**Facebook Marketplace** : Ventes locales, test sur site avant paiement. Pas de risque d\'expédition. Disponibilité instantanée. Plus grand pool que Craigslist.',
            '**Craigslist** : Prix les plus bas. Local uniquement. Risque d\'arnaque le plus élevé. Utilisez seulement si vous pouvez rencontrer en lieu public sûr et tester immédiatement.',
            '**Magasins de réparation informatique locaux** : Ont souvent de l\'occasion. Pouvez demander la politique de retour. Prix 10-15% plus élevés qu\'eBay, mais plus de confiance.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'Comment testez-vous une GPU utilisée avant de vous engager ?',
          content: [
            '**1. Inspection visuelle : Vérifiez les dommages physiques, composants brûlés, condensateurs qui fuient.**',
            '2. Installer dans système test : Démarrer dans OS, exécuter GPU-Z. Vérifier les vitesses d\'horloge (doivent correspondre à spec), lectures de température.',
            '3. Exécuter MemtestG80 (gratuit) : Allouer 90% du VRAM, exécuter 1-2 heures. La mémoire défectueuse apparaît comme des erreurs.',
            '4. Exécuter FurMark (test stress) : 30 minutes à charge complète. La carte ne doit pas planter ou réduire sévèrement.',
            '5. Vérifier bande passante VRAM (CrystalDiskInfo ou GPU-Z) : Comparer à spec. Nettement inférieur = dégradation potentielle.',
            'Si achat sur eBay/Craigslist, insistez sur vendeur faisant ce test et fournissant preuve screenshot.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Erreurs courantes lors de l\'achat de GPU utilisées',
          items: [
            'Acheter une RTX 3080 minière pour "€150 moins cher" sans tester – le VRAM est souvent dégradé, montre des erreurs sous charge.',
            'Supposer "comme neuve" signifie VRAM sain – cosmétique ≠ santé composant. Toujours test stress.',
            'Payer expédition sans protection acheteur (pas eBay) – si arrive morte, vous êtes bloqué.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Vaut-il la peine d\'acheter une GPU minière utilisée avec forte réduction ?', a: 'Seulement si vous pouvez la tester sur site pendant 2+ heures avec MemtestG80. Sinon, non. La réduction (€40-80) ne vaut pas le risque de 20% défaillance.' },
            { q: 'Comment savoir si une GPU utilisée était une carte minière ?', a: 'Souvent vous ne pouvez pas à partir des photos seules. Demandez au vendeur. Cherchez dommages thermiques (décoloration près condensateurs) ou poussière inhabituellement lourde. Demandez adresse mining pool s\'ils l\'ont utilisée.' },
            { q: 'Quelle est la génération RTX la plus ancienne que je devrais acheter utilisée ?', a: 'RTX 2000-série (2060, 2080) très vieilles (2018). Achetez seulement sous €72. RTX 3000-série (2020-2021) est base safe.' },
            { q: 'Devrais-je acheter une RTX 4070 ou RTX 3080 utilisée ?', a: 'RTX 3080 (10GB, €300-330 utilisée) meilleur rapport pour LLMs locaux que 4070 (12GB, €380-450 utilisée). 4070 plus récente mais seulement 15% plus rapide.' },
            { q: 'Puis-je retourner une GPU utilisée sur eBay si elle échoue après 1 mois ?', a: 'Dépend politique vendeur. Plupart permettent retours 14 jours. Après 30 jours, vous êtes seul sauf défaut fabricant (rare occasion).' },
            { q: 'Vaut-il la peine de payer 20% plus pour GPU avec protection retour ?', a: 'Oui. Coûte ~€25-40 sur GPU €200, mais vous sauve perte €200 si carte meurt après achat.' },
            { q: 'Devrais-je acheter RTX 3090 ou RTX 4090 utilisée ?', a: 'RTX 4090 si budget (€850-1 050). Meilleure efficacité énergétique, architecture plus récente. RTX 3090 excessive pour modèles 7B et peu moins chère utilisée (€400-480).' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lectures recommandées',
          items: [
            '[Meilleures GPU budget pour LLMs locaux](/fr/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Meilleures GPU pour LLMs locaux](/fr/local-llms/best-gpus-for-local-llms)',
            '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            'Historique prix eBay GPU et données marché (avril 2026)',
            'Documentation outil MemtestG80 et test stress GPU pour validation VRAM',
            'Base données spécifications GPU-Z pour baselines thermiques et fréquence horloge',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Meilleures GPU utilisées pour LLMs : Guide d\'achat RTX 3060, 3080, 4090',
        'description': 'Meilleures GPU utilisées pour LLMs locaux : RTX 3060, 3080, 3090, 4090. Où acheter, évaluation des risques, test de performance.',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Vaut-il la peine d\'acheter une GPU minière utilisée avec forte réduction ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Seulement si vous pouvez la tester sur site pendant 2+ heures avec MemtestG80. Sinon, non. La réduction (€40-80) ne vaut pas le risque de 20% défaillance.' }
          },
          {
            '@type': 'Question',
            'name': 'Comment savoir si une GPU utilisée était une carte minière ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Souvent vous ne pouvez pas à partir des photos seules. Demandez au vendeur. Cherchez dommages thermiques (décoloration près condensateurs) ou poussière inhabituellement lourde. Demandez adresse mining pool s\'ils l\'ont utilisée.' }
          },
          {
            '@type': 'Question',
            'name': 'Quelle est la génération RTX la plus ancienne que je devrais acheter utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000-série (2060, 2080) très vieilles (2018). Achetez seulement sous €72. RTX 3000-série (2020-2021) est base safe.' }
          },
          {
            '@type': 'Question',
            'name': 'Devrais-je acheter une RTX 4070 ou RTX 3080 utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 (10GB, €300-330 utilisée) meilleur rapport pour LLMs locaux que 4070 (12GB, €380-450 utilisée). 4070 plus récente mais seulement 15% plus rapide.' }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je retourner une GPU utilisée sur eBay si elle échoue après 1 mois ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Dépend politique vendeur. Plupart permettent retours 14 jours. Après 30 jours, vous êtes seul sauf défaut fabricant (rare occasion).' }
          },
          {
            '@type': 'Question',
            'name': 'Vaut-il la peine de payer 20% plus pour GPU avec protection retour ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Coûte ~€25-40 sur GPU €200, mais vous sauve perte €200 si carte meurt après achat.' }
          },
          {
            '@type': 'Question',
            'name': 'Devrais-je acheter RTX 3090 ou RTX 4090 utilisée ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4090 si budget (€850-1 050). Meilleure efficacité énergétique, architecture plus récente. RTX 3090 excessive pour modèles 7B et peu moins chère utilisée (€400-480).' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/fr/local-llms/used-gpus-for-local-llms',
        'name': 'GPU utilisées pour LLMs locaux : Comparaison coûts & fiabilité',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Comparaison coûts : RTX 3060 (€160-190 utilisée) vs RTX 3080 (€300-330) vs RTX 4090 (€850-1 050) – 30-50% économies sur neuf.' },
          { '@type': 'ListItem', position: 2, name: 'Données fiabilité : RTX 3060 12GB et RTX 3080 10GB ont volume revente élevé et santé VRAM éprouvée. Cartes minières portent risque défaillance 10-20%.' },
          { '@type': 'ListItem', position: 3, name: 'Modèles GPU recommandés : RTX 3060 12GB (entrée safest), RTX 3080 10GB (VRAM solide), RTX 4090 24GB (premium, défaillances rares).' },
        ],
      },
    },
    ja: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'ローカルLLM向け中古GPU：ベストバリューピック',
      seoTitle: '中古GPUローカルLLMガイド：RTX 3060、3080、4090購入ガイド',
      intro: '**中古GPUは新品比30-50%の節約を提供し、RTX 3060 12GBやRTX 3080などの実績あるモデルでの性能リスクは最小限です。** 2026年4月現在、中古市場は安定した価格の元マイニングおよび元ゲーミングカードで溢れています。中古購入は初回構築やアップグレード時に理にかなっており、マイニングカードは現地でテストできない限りリスキーです。',
      metaDescription: 'ローカルLLM向け最高の中古GPU：RTX 3060、3080、3090、4090。購入方法、リスク評価、ベンチマークテスト。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**中古GPUは新品比30-50%の節約を提供し、RTX 3060 12GBやRTX 3080などのモデルでのリスクは最小限です。2026年4月現在、中古市場は元マイニングおよび元ゲーミングカードで溢れています。**',
      audience: 'OllamaまたはLM Studioに精通し、ローカルLLMワークフローを最適化する開発者',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: '中古GPU',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: '購入するのに最も安全な中古GPUはどれですか？', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB中古（¥26,000-32,500）およびRTX 3080 10GB中古（¥45,500-52,000）が最も安全な選択肢です。高い取引量、安定した価格、実績あるVRAM健全性。',
            'マイニングカードは30%安いですが、VRAM劣化の10-20%リスクがあります。2時間以上のストレステストを現地でできる場合のみ購入してください。',
            'ゲーミングカード（元ゲーミングリグ販売）はマイニングカードより安全です。カジュアルゲーミングは24/7マイニングのようなVRAMストレスではありません。',
            '購入者保護付きeBay、現地テスト付きFacebookマーケットプレイス、Craigslist（地元のみ、現地テスト）が最良の情報源です。',
            'ファイナライズ前に、MemtestG80（GPUメモリテスト）を1-2時間実行してください。不良VRAMはすぐに表示されます。',
            '履歴不明なカードは価格の5-10%割引を予算に組み込みます。取引が良すぎる場合、カードには問題がある可能性が高いです。',
            'サーバー/データセンター元のカード（RTX A100、L40S）を避けてください。状態を確実に把握している場合を除き、これらは高温で動作し、熱スロットル損傷がある可能性があります。',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '購入するのに最も安全な中古GPUはどれですか？',
          items: [
            '**RTX 3060 12GB**（¥26,000-32,500）：中古市場で巨大な取引量。信頼できるVRAM。古いアーキテクチャは障害が少ないことを意味します。安全な選択。',
            '**RTX 3080 10GB**（¥45,500-52,000）：人気のゲーミングカード。堅牢なVRAM履歴。10GBは使用可能（一部の70Bモデルでは狭い）。安全です。',
            '**RTX 4090 24GB**（¥130,000-169,000）：プレミアム価格ですが、高い再販売量=障害率データ。VRAMエラーはまれ。正しく価格設定されていれば安全。',
            '**RTX 3090 24GB**（¥45,500-78,000）：ハイエンド、高価、比例して障害が少ない。¥70,000未満を見つけられれば良い選択。',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '中古GPUにいくら払うべきですか？',
          content: [
            '**ベンチマーク：小売MSRP vs.** 中古市場（2026年4月）。',
          ],
          items: [
            'RTX 3060 12GB：MSRP ¥37,000 → 中古 ¥26,000-32,500（30-42%割引）',
            'RTX 3080 10GB：MSRP ¥78,000 → 中古 ¥45,500-52,000（41-45%割引）',
            'RTX 4090 24GB：MSRP ¥165,000 → 中古 ¥130,000-169,000（-2-21%、新しいため割引が少ない）',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'マイニングカードvs.ゲーミングカード：違いは何ですか？',
          content: [
            '**マイニングカード** は1-3年間、フル計算負荷で24/7動作していました。熱サイクルストレスはVRAMに過酷です。現在、VRAM エラーの10-20%の可能性があります。',
            '**ゲーミングカード** は間欠的（1日4-8時間）に変動する負荷で動作していました。ストレスが少ない。VRAMはより長く続きます。より安全です。',
            '視覚的に：マイニングカードは頻繁に重い使用の兆候を示します（ほこり、熱損傷、剥がれたラベル）。ゲーミングカードはより清潔に見えます。',
            '価格：マイニングカードは同じモデルで¥4,500-9,000安い。現地でテストしない限り、リスクの価値がありません。',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '中古GPUはどこで購入すべきですか？',
          items: [
            '**eBay** ：最高の購入者保護。売り手評価が表示されます。送料込み。到着時に動かなければ返品可能（DOA）。1-2週間かかります。',
            '**Facebookマーケットプレイス** ：地元の販売、支払い前に現地テスト。送料リスクなし。即時利用可能。Craigslistより大きなプール。',
            '**Craigslist** ：最安値。地元のみ。詐欺リスク最高。安全な公共の場で会合でき、すぐにテストできる場合のみ使用してください。',
            '**ローカルコンピュータ修理店** ：中古在庫があることが多い。返品ポリシーについて尋ねることができます。eBayより10-15%高いですが、信頼性が高い。',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'コミットする前に中古GPUをテストするにはどうしますか？',
          content: [
            '**1. 目視検査：物理的損傷、焼け焦げた部品、漏れているコンデンサをチェック。**',
            '2. テストシステムにインストール：OSを起動し、GPU-Zを実行。クロック速度がスペックと一致するか確認、温度読み取り。',
            '3. MemtestG80（無料）を実行：VRAMの90%を割り当て、1-2時間実行します。不良メモリはエラーとして表示されます。',
            '4. FurMark（ストレステスト）を実行：フル負荷で30分間。カードはクラッシュせず、大幅に制限されるべきではありません。',
            '5. VRAM帯域幅を確認（CrystalDiskInfoまたはGPU-Z）：スペックと比較。著しく低い=潜在的な劣化。',
            'eBay/Craigslistで購入する場合、売り手がこのテストを実施し、スクリーンショット証拠を提供することを主張してください。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '中古GPU購入の一般的な間違い',
          items: [
            'マイニングRTX 3080を「¥22,500割引」で購入しテストしない – VRAMは劣化していることが多く、負荷下でエラーを表示します。',
            '「新品同様の状態」がVRAM健全を意味すると仮定 – 外見≠コンポーネント健全性。常にストレステストを実施。',
            '購入者保護なしで送料を払う（eBayではない） – 到着時に死亡していれば、立ち往生しています。',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: '大幅割引で中古マイニングGPUを購入する価値はありますか？', a: 'MemtestG80を使用して2時間以上現地でテストできる場合のみ。そうでなければいいえ。割引（¥4,500-9,000）は20%障害リスクの価値がありません。' },
            { q: '中古GPUがマイニングカードであったかどうかをどうやって判断しますか？', a: '多くの場合、写真だけからは判断できません。売り手に聞いてください。熱損傷（コンデンサの近くの変色）や異常に重い埃を探してください。使用していた場合はマイニングプールアドレスを要求してください。' },
            { q: '購入すべき最も古いRTX世代は何ですか？', a: 'RTX 2000シリーズ（2060、2080）は非常に古い（2018）。¥7,200以下でのみ購入してください。RTX 3000シリーズ（2020-2021）が安全なベースラインです。' },
            { q: '中古RTX 4070またはRTX 3080を購入すべきですか？', a: 'RTX 3080（10GB、¥45,500-52,000中古）はローカルLLMにとって4070（12GB、¥52,000-65,000中古）より良い値です。4070はより新しいですが、わずか15%高速です。' },
            { q: '1ヶ月後に失敗した場合、eBayで中古GPUを返品できますか？', a: '売り手ポリシーによって異なります。ほとんど14日間の返品を許可しています。30日後、製造元の欠陥がない限り自分でやります（中古ではまれ）。' },
            { q: 'リターン保護付きGPUに20%多く支払う価値はありますか？', a: 'はい。¥200 GPUで約¥25,000-40,000かかりますが、購入後にカードが故障した場合の¥200,000損失を防ぎます。' },
            { q: '中古RTX 3090またはRTX 4090を購入すべきですか？', a: '余裕があればRTX 4090（¥130,000-169,000）。より良いエネルギー効率、新しいアーキテクチャ。RTX 3090は7Bモデルに対して過剰で、中古ではそれほど安くない（¥60,000-78,000）。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '関連リーディング',
          items: [
            '[ローカルLLM向けベストバジェットGPU](/ja/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[ローカルLLM向けベストGPU](/ja/local-llms/best-gpus-for-local-llms)',
            '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'ソース',
          items: [
            'eBay GPU価格履歴およびマーケットデータ（2026年4月）',
            'VRAM検証用MemtestG80およびGPUストレステストツール документации',
            '熱およびクロック速度ベースライン用GPU-Z仕様データベース',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '中古GPUローカルLLMガイド：RTX 3060、3080、4090購入ガイド',
        'description': 'ローカルLLM向け最高の中古GPU：RTX 3060、3080、3090、4090。購入方法、リスク評価、ベンチマークテスト。',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '大幅割引で中古マイニングGPUを購入する価値はありますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'MemtestG80を使用して2時間以上現地でテストできる場合のみ。そうでなければいいえ。割引（¥4,500-9,000）は20%障害リスクの価値がありません。' }
          },
          {
            '@type': 'Question',
            'name': '中古GPUがマイニングカードであったかどうかをどうやって判断しますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '多くの場合、写真だけからは判断できません。売り手に聞いてください。熱損傷（コンデンサの近くの変色）や異常に重い埃を探してください。使用していた場合はマイニングプールアドレスを要求してください。' }
          },
          {
            '@type': 'Question',
            'name': '購入すべき最も古いRTX世代は何ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000シリーズ（2060、2080）は非常に古い（2018）。¥7,200以下でのみ購入してください。RTX 3000シリーズ（2020-2021）が安全なベースラインです。' }
          },
          {
            '@type': 'Question',
            'name': '中古RTX 4070またはRTX 3080を購入すべきですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080（10GB、¥45,500-52,000中古）はローカルLLMにとって4070（12GB、¥52,000-65,000中古）より良い値です。4070はより新しいですが、わずか15%高速です。' }
          },
          {
            '@type': 'Question',
            'name': '1ヶ月後に失敗した場合、eBayで中古GPUを返品できますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '売り手ポリシーによって異なります。ほとんど14日間の返品を許可しています。30日後、製造元の欠陥がない限り自分でやります（中古ではまれ）。' }
          },
          {
            '@type': 'Question',
            'name': 'リターン保護付きGPUに20%多く支払う価値はありますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。¥200 GPUで約¥25,000-40,000かかりますが、購入後にカードが故障した場合の¥200,000損失を防ぎます。' }
          },
          {
            '@type': 'Question',
            'name': '中古RTX 3090またはRTX 4090を購入すべきですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '余裕があればRTX 4090（¥130,000-169,000）。より良いエネルギー効率、新しいアーキテクチャ。RTX 3090は7Bモデルに対して過剰で、中古ではそれほど安くない（¥60,000-78,000）。' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ja/local-llms/used-gpus-for-local-llms',
        'name': 'ローカルLLM向け中古GPU：コスト比較＆信頼性',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'コスト比較：RTX 3060（¥26,000-32,500中古）vs RTX 3080（¥45,500-52,000）vs RTX 4090（¥130,000-169,000）– 新品比30-50%節約。' },
          { '@type': 'ListItem', position: 2, name: '信頼性データ：RTX 3060 12GBおよびRTX 3080 10GBは高い再販売量および実績あるVRAM健全性を有する。マイニングカードは10-20%障害リスクを運ぶ。' },
          { '@type': 'ListItem', position: 3, name: '推奨中古GPUモデル：RTX 3060 12GB（最も安全なエントリ）、RTX 3080 10GB（堅牢なVRAM）、RTX 4090 24GB（プレミアム、障害はまれ）。' },
        ],
      },
    },
    zh: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: '本地LLM二手GPU：最佳价值选择',
      seoTitle: '本地LLM最佳二手GPU：RTX 3060、3080、4090购买指南',
      intro: '**二手GPU提供新品30-50%的节省，在RTX 3060 12GB和RTX 3080等经过验证的型号上性能风险最小。** 截至2026年4月，二手市场充斥着来自前采矿和前游戏的卡，价格稳定。购买二手对于首次构建或升级很有意义；采矿卡有风险，除非您可以现场测试。',
      metaDescription: '本地LLM最佳二手GPU：RTX 3060、3080、3090、4090。购买位置、风险评估、基准测试。',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**二手GPU提供新品30-50%的节省，在RTX 3060 12GB和RTX 3080等型号上风险最小。截至2026年4月，二手市场充斥着来自前采矿和前游戏的卡，价格稳定。**',
      audience: '熟悉Ollama或LM Studio优化本地LLM工作流的开发者',
      readTime: '阅读约8分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '二手GPU',
      toc: [
        { label: '核心要点', anchor: '#tldr' },
        { label: '哪些二手GPU最安全购买？', anchor: '#safest-cards' },
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
          items: [
            'RTX 3060 12GB二手（$200-250）和RTX 3080 10GB二手（$350-400）是最安全的选择—高交易量、稳定价格、经过验证的VRAM健康状况。',
            '采矿卡便宜30%，但有10-20%的VRAM降级风险。仅在您可以现场进行2小时以上压力测试时购买。',
            '游戏卡（前游戏钻机转售）比采矿卡更安全。休闲游戏不会对VRAM造成24/7采矿的压力。',
            'eBay带购买者保护、Facebook Marketplace带现场测试和Craigslist（仅限本地、现场测试）是您的最佳来源。',
            '在完成之前，运行MemtestG80（GPU内存测试）1-2小时。坏VRAM会立即显示。',
            '预算历史不明的卡价格折扣5-10%。如果交易看起来太好，卡可能有问题。',
            '避免前服务器/数据中心卡（RTX A100、L40S），除非您确定其状况—它们运行热，可能有热节流损伤。',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: '哪些二手GPU最安全购买？',
          items: [
            '**RTX 3060 12GB**（$200-250）：二手市场上的巨大交易量。可靠的VRAM。较旧的架构意味着更少的故障。安全选择。',
            '**RTX 3080 10GB**（$350-400）：受欢迎的游戏卡。坚实的VRAM历史。10GB可用（对于某些70B模型很紧凑）。安全。',
            '**RTX 4090 24GB**（$1,000-1,300）：高级定价，但高转售量=故障率数据。VRAM故障罕见。如果价格正确则安全。',
            '**RTX 3090 24GB**（$400-600）：高端、昂贵、相对故障较少。如果找到低于$500的价格，不错。',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: '二手GPU应该花多少钱？',
          content: [
            '**基准：零售MSRP vs.** 二手市场（2026年4月）。',
          ],
          items: [
            'RTX 3060 12GB：MSRP $329 → 二手 $200-250（39-62%折扣）',
            'RTX 3080 10GB：MSRP $699 → 二手 $350-400（50-55%折扣）',
            'RTX 4090 24GB：MSRP $1,499 → 二手 $1,000-1,300（13-33%折扣，因为更新所以折扣更少）',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: '采矿卡vs游戏卡：有什么区别？',
          content: [
            '**采矿卡** 以全计算负载24/7运行1-3年。热循环应力对VRAM造成残酷打击。现在有10-20%的VRAM错误机会。',
            '**游戏卡** 间歇性运行（每天4-8小时）负载变化。压力较少。VRAM持久时间更长。更安全。',
            '视觉上：采矿卡通常显示大量使用的迹象（灰尘、热损傷、标签剥落）。游戏卡看起来更干净。',
            '价格：采矿卡便宜$50-100（相同型号）。除非您现场测试，否则不值得冒10-20%的风险。',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: '哪里购买二手GPU？',
          items: [
            '**eBay** ：最佳购买者保护。卖家评级可见。包括运费。如果到达时死亡可以退货（DOA）。需要1-2周。',
            '**Facebook Marketplace** ：本地销售，支付前现场测试。无运费风险。即时可用。池比Craigslist更大。',
            '**Craigslist** ：最便宜的价格。仅限本地。最高诈骗风险。仅在您可以在安全公共场所见面并立即测试时使用。',
            '**本地计算机维修店** ：通常有二手库存。可以询问退货政策。价格比eBay高10-15%，但信任度更高。',
          ],
        },
        'testing': {
          id: 'testing',
          title: '如何在承诺前测试二手GPU？',
          content: [
            '**1. 目视检查：检查物理损伤、烧焦的组件、漏液的电容。**',
            '2. 在测试系统中安装：启动到OS，运行GPU-Z。检查时钟速度（应与规格匹配）、温度读数。',
            '3. 运行MemtestG80（免费）：分配90%VRAM，运行1-2小时。坏内存显示为错误。',
            '4. 运行FurMark（压力测试）：全负荷30分钟。卡不应该崩溃或严重限流。',
            '5. 检查VRAM带宽（CrystalDiskInfo或GPU-Z）：与规格比较。明显较低=潜在降级。',
            '如果在eBay/Craigslist上购买，坚持卖家执行此测试并提供截图证明。',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: '二手GPU购买常见错误',
          items: [
            '购买采矿RTX 3080价格"便宜$250"而不测试—VRAM通常降级，负载下显示错误。',
            '假设"如新状态"意味着健康的VRAM—外观≠组件健康。始终进行压力测试。',
            '为没有购买者保护的GPU运费付费（不是eBay）—如果到达时死亡，您被困。',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '以陡峭的折扣购买二手采矿GPU值得吗？', a: '仅当您可以使用MemtestG80在现场测试2+小时时。否则，没有。$50-100的折扣不值得20%的故障风险。' },
            { q: '我如何判断二手GPU是否是采矿卡？', a: '通常您无法仅从照片判断。问卖家。寻找热损伤（电容附近变色）或异常大量灰尘。如果他们使用过，要求采矿池地址。' },
            { q: '我应该购买的最旧RTX代是什么？', a: 'RTX 2000系列（2060、2080）非常旧（2018）。仅在$80以下购买。RTX 3000系列（2020-2021）是安全基线。' },
            { q: '我应该购买二手RTX 4070还是RTX 3080？', a: 'RTX 3080（10GB、$350-400二手）对本地LLM的价值优于4070（12GB、$450-550二手）。4070较新但仅快15%。' },
            { q: '如果1个月后故障，我可以在eBay上退货二手GPU吗？', a: '取决于卖家政策。大多数允许14天退货。30天后，除非有制造商缺陷（二手卡上罕见），否则您自己负责。' },
            { q: '为返回保护GPU多付20%值得吗？', a: '是的。$200 GPU上成本约$30-50，但如果卡在购买后死亡，可节省$200损失。' },
            { q: '我应该购买二手RTX 3090还是RTX 4090？', a: '如果您能承受，RTX 4090（$1,000-1,300）。更好的能效、更新的架构。RTX 3090对7B模型过度，二手便宜不了多少（$500-600）。' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[本地LLM最佳预算GPU](/zh/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[本地LLM最佳GPU](/zh/local-llms/best-gpus-for-local-llms)',
            '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: '来源',
          items: [
            'eBay GPU价格历史和市场数据（2026年4月）',
            'MemtestG80和GPU压力测试工具VRAM验证文档',
            'GPU-Z规格数据库用于热和时钟速度基准',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM最佳二手GPU：RTX 3060、3080、4090购买指南',
        'description': '本地LLM最佳二手GPU：RTX 3060、3080、3090、4090。购买位置、风险评估、基准测试。',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '以陡峭的折扣购买二手采矿GPU值得吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '仅当您可以使用MemtestG80在现场测试2+小时时。否则，没有。$50-100的折扣不值得20%的故障风险。' }
          },
          {
            '@type': 'Question',
            'name': '我如何判断二手GPU是否是采矿卡？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '通常您无法仅从照片判断。问卖家。寻找热损伤（电容附近变色）或异常大量灰尘。如果他们使用过，要求采矿池地址。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买的最旧RTX代是什么？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 2000系列（2060、2080）非常旧（2018）。仅在$80以下购买。RTX 3000系列（2020-2021）是安全基线。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买二手RTX 4070还是RTX 3080？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080（10GB、$350-400二手）对本地LLM的价值优于4070（12GB、$450-550二手）。4070较新但仅快15%。' }
          },
          {
            '@type': 'Question',
            'name': '如果1个月后故障，我可以在eBay上退货二手GPU吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '取决于卖家政策。大多数允许14天退货。30天后，除非有制造商缺陷（二手卡上罕见），否则您自己负责。' }
          },
          {
            '@type': 'Question',
            'name': '为返回保护GPU多付20%值得吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '是的。$200 GPU上成本约$30-50，但如果卡在购买后死亡，可节省$200损失。' }
          },
          {
            '@type': 'Question',
            'name': '我应该购买二手RTX 3090还是RTX 4090？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '如果您能承受，RTX 4090（$1,000-1,300）。更好的能效、更新的架构。RTX 3090对7B模型过度，二手便宜不了多少（$500-600）。' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/zh/local-llms/used-gpus-for-local-llms',
        'name': '本地LLM二手GPU：成本比较和可靠性',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: '成本比较：RTX 3060（$200-250二手）vs RTX 3080（$350-400）vs RTX 4090（$1,000-1,300）—新品上节省30-50%。' },
          { '@type': 'ListItem', position: 2, name: '可靠性数据：RTX 3060 12GB和RTX 3080 10GB有高转售量和经过验证的VRAM健康。采矿卡承担10-20%故障风险。' },
          { '@type': 'ListItem', position: 3, name: '推荐二手GPU型号：RTX 3060 12GB（最安全入门），RTX 3080 10GB（坚实VRAM），RTX 4090 24GB（高级、故障罕见）。' },
        ],
      },
    },
  };
