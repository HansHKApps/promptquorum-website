// Power Local LLM — Best Web Hosting for Brazil 2026
// Slug: melhor-hospedagem-site-brasil-2026
// Standard web hosting (not GPU/AI compute) for the Brazilian market.
// Hostinger is reachable/monetizable without a Brazilian CNPJ; HostGator Brasil,
// KingHost, and Locaweb are editorial-only mentions — their affiliate programs
// require a Brazilian CNPJ + Nota Fiscal, which PromptQuorum does not have.
// Prices checked 2026-08-30; re-verify before purchasing, especially the
// editorial-only rows whose figures were not independently re-verified this pass.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    publishDate: '2026-08-30',
    dateModified: '2026-08-30',
    next_refresh_due: '2026-09-29',
    theme: 'Overview & Reference',
    title: 'Best Web Hosting for Brazil 2026: Hostinger vs Local Providers',
    seoTitle: 'Web Hosting Brazil 2026: Hostinger vs HostGator vs KingHost',
    intro:
      'Most "best hosting for Brazil" roundups skip the one detail that actually decides whether you can sign up: a CNPJ (Brazilian business tax ID) requirement. Hostinger is reachable and payable by any Brazilian resident without a CNPJ — the well-known Brazilian brands HostGator Brasil, KingHost, and Locaweb are worth knowing about for completeness, but this site cannot link you to a working affiliate offer with any of them, because their programs gate signup behind a CNPJ and Nota Fiscal (Brazilian tax invoice). This guide compares real pricing, the renewal-price jump that catches new Hostinger customers off guard, and what LGPD (Lei Geral de Proteção de Dados) data-residency actually requires from a host.',
    metaDescription:
      'Hostinger vs HostGator Brasil vs KingHost vs Locaweb compared for 2026: real intro and renewal prices, CNPJ requirements, and LGPD data-residency fit.',
    twitterDescription:
      'Web hosting for Brazil in 2026: Hostinger is the only option here you can sign up for without a CNPJ — here is what it actually costs after the renewal jump.',
    affiliateDisclosure: true,
    audience:
      'Brazilian website owners and small businesses choosing a web host, including readers without a CNPJ who need to know which providers they can actually sign up for.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'web hosting Brazil',
    targetKeywords: [
      'melhor hospedagem brasil 2026',
      'hostinger vs hostgator brasil',
      'hospedagem de site sem cnpj',
      'kinghost vs locaweb',
      'hospedagem lgpd brasil',
    ],
    leadAnswerBlock:
      '**Hostinger ($2.99/mo intro, 48-month prepay required, renews at $10.99/mo) is the only provider on this page a Brazilian resident without a CNPJ can actually sign up for and pay through PromptQuorum\'s link. HostGator Brasil, KingHost, and Locaweb are real, well-known Brazilian hosts worth comparing directly on their own sites, but none of their affiliate programs are reachable without a Brazilian CNPJ and Nota Fiscal, so they appear here for reference only.**',
    affiliateLinks: [
      {
        url: 'https://www.hostinger.com/',
        productName: 'Hostinger web hosting',
        productCategory: 'hosting',
        priceRange: '2.99-10.99/mo',
        label: 'Check Hostinger pricing',
      },
    ],
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Provider Comparison Table', anchor: '#comparison-table' },
      { label: 'Standard Hosting vs. AI-Specialized Hosting', anchor: '#standard-vs-ai' },
      { label: 'LGPD Data Residency', anchor: '#lgpd-compliance' },
      { label: 'Verdict', anchor: '#verdict' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Hostinger is the only reachable option here without a CNPJ.** $2.99/mo advertised requires a 48-month prepay ($143.52 upfront) and renews at $10.99/mo — a roughly 3.7x jump. It is the only provider on this page PromptQuorum can link to a working, monetizable offer.',
          '**HostGator Brasil, KingHost, and Locaweb are real options — but editorial mentions only.** Their affiliate programs require a Brazilian CNPJ and Nota Fiscal, which PromptQuorum does not have, so no link here earns a commission on those three.',
          '**KingHost (R$9.99/mo intro) does not disclose its renewal price** on its own pricing page — budget for an increase and confirm the number before signing up.',
          '**Locaweb (R$5.90/mo) is unclear whether that figure is an intro or standard rate** — verify current pricing directly on Locaweb before comparing it to the others.',
          '**HostGator Brasil pricing (R$10-15/mo range) was not independently re-verified this pass** — third-party sources suggest that historical range; confirm the live price before purchasing.',
          '**Brazilian-CNPJ hosts simplify LGPD data-residency obligations** by default, since the provider is already subject to ANPD (Autoridade Nacional de Proteção de Dados) jurisdiction — a real advantage over Hostinger for businesses handling regulated Brazilian personal data.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Hostinger vs HostGator Brasil vs KingHost vs Locaweb in 2026',
        content:
          'Prices checked directly on each provider where possible; see Sources for exactly which figures were independently confirmed on 2026-08-30 and which were not. Only Hostinger has a signup link PromptQuorum can monetize — the other three require a Brazilian CNPJ to join their affiliate programs.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For web hosting in Brazil, Hostinger is the only major option reachable without a CNPJ; HostGator Brasil, KingHost, and Locaweb are real alternatives but gate their affiliate programs behind Brazilian business registration.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it like a store that only opens a business account for local shopkeepers with a registered CNPJ. Hostinger sells to anyone with a card; the three Brazilian hosts sell to anyone, but only pay a referral fee to a partner with a Brazilian tax ID — and PromptQuorum does not have one.',
          },
        ],
        columns: ['Provider', 'Intro price', 'Renewal price', 'CNPJ required'],
        rows: [
          {
            'Provider': 'Hostinger',
            'Intro price': '$2.99/mo (48-mo prepay)',
            'Renewal price': '$10.99/mo (~3.7x jump)',
            'CNPJ required': 'No — reachable without CNPJ',
          },
          {
            'Provider': 'HostGator Brasil',
            'Intro price': 'R$10-15/mo (not re-verified)',
            'Renewal price': 'Not stated by provider',
            'CNPJ required': 'Yes — editorial mention only',
          },
          {
            'Provider': 'KingHost',
            'Intro price': 'R$9.99/mo intro',
            'Renewal price': 'Not disclosed by provider',
            'CNPJ required': 'Yes — editorial mention only',
          },
          {
            'Provider': 'Locaweb',
            'Intro price': 'R$5.90/mo (intro/standard unclear)',
            'Renewal price': 'Unclear — same figure',
            'CNPJ required': 'Yes — editorial mention only',
          },
        ],
      },
      standardVsAi: {
        id: 'standard-vs-ai',
        title: 'Standard Hosting vs. AI-Specialized Hosting',
        content:
          'Everything on this page is standard web hosting — the kind you need for a business website, WordPress blog, or online store. None of these plans include GPU access, so they cannot run or fine-tune a local LLM. If you need to rent GPU compute for AI inference or training, see the [Cloud GPU Rental Guide 2026](/power-local-llm/cloud-gpu-rental-guide-2026), which compares RunPod, Lambda Labs, and Vast.ai on hourly GPU pricing, uptime guarantees, and data-residency fit.',
      },
      lgpdCompliance: {
        id: 'lgpd-compliance',
        title: 'LGPD Data Residency',
        content:
          'Brazil\'s Lei Geral de Proteção de Dados (LGPD) is enforced by the Autoridade Nacional de Proteção de Dados (ANPD) and governs how personal data of people in Brazil is collected, stored, and processed. Hosting with a Brazilian-CNPJ provider like HostGator Brasil, KingHost, or Locaweb simplifies LGPD data-residency and processing-agreement obligations, because the host is already domestically registered and directly subject to ANPD enforcement. Hostinger is an international provider — it can still host Brazilian sites, but a business handling regulated personal data should check Hostinger\'s own LGPD-specific terms and data processing agreement before relying on it for anything beyond a basic informational site.',
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'If you do not have a Brazilian CNPJ, Hostinger is the realistic starting point — budget for the 48-month prepay and the renewal jump to $10.99/mo rather than being surprised by it. If you run a registered Brazilian business, compare HostGator Brasil, KingHost, and Locaweb directly on their own pricing pages before choosing; all three are legitimate, well-known Brazilian hosts, they simply are not ones PromptQuorum can monetize a link to.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I sign up for Brazilian web hosting without a CNPJ?',
            a: 'Yes, with Hostinger — it accepts individual signups without a Brazilian CNPJ. HostGator Brasil, KingHost, and Locaweb are all usable as a Brazilian consumer too, but their affiliate/referral programs specifically require a CNPJ and Nota Fiscal to join, which is why PromptQuorum can only link a working offer to Hostinger.',
          },
          {
            q: 'Why does Hostinger renew at almost 4x the advertised price?',
            a: 'The $2.99/mo Hostinger rate is an introductory price tied to a 48-month prepayment ($143.52 upfront). After that term, the plan renews at the standard rate of $10.99/mo — roughly a 3.7x increase. Budget for the renewal price, not the advertised one, when comparing total cost.',
          },
          {
            q: 'Is HostGator Brasil the same company as HostGator in the US?',
            a: 'HostGator Brasil operates under the HostGator brand for the Brazilian market with its own local pricing and support. Its current pricing was not independently re-verified in this review — third-party sources suggest an R$10-15/mo intro range, but confirm the live price directly on HostGator Brasil\'s site before purchasing.',
          },
          {
            q: 'What does KingHost not disclose about its pricing?',
            a: 'KingHost advertises an R$9.99/mo introductory rate but does not state the renewal price on its own pricing page. Confirm the post-intro renewal cost directly with KingHost before signing up, since it is not published for comparison here.',
          },
          {
            q: 'Does Brazilian hosting help with LGPD compliance?',
            a: 'It simplifies it. A Brazilian-CNPJ host like HostGator Brasil, KingHost, or Locaweb is already domestically registered and subject to ANPD enforcement, which removes ambiguity around data-residency obligations under LGPD. Hostinger can still be used, but check its specific LGPD terms and data processing agreement if you handle regulated personal data.',
          },
          {
            q: 'Can I use any of these hosts to run a local LLM?',
            a: 'No. All four providers on this page offer standard web hosting — shared hosting, WordPress hosting, or similar — with no GPU access. To rent GPU compute for running or fine-tuning a local LLM, see the Cloud GPU Rental Guide 2026, which compares RunPod, Lambda Labs, and Vast.ai instead.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Hostinger pricing](https://www.hostinger.com/) — checked directly on Hostinger, 2026-08-30. $2.99/mo intro requires a 48-month prepayment; renews at $10.99/mo.',
          'HostGator Brasil pricing (R$10-15/mo intro range) — not independently re-verified this pass; based on third-party/historical sources. Confirm the current price on HostGator Brasil\'s own site before purchasing.',
          'KingHost pricing (R$9.99/mo intro) — checked on KingHost\'s pricing page, 2026-08-30. Renewal price is not stated by the provider.',
          'Locaweb pricing (R$5.90/mo) — checked on Locaweb\'s pricing page, 2026-08-30. Whether this is an introductory or standard rate is unclear from the page itself.',
          '[LGPD — Lei Geral de Proteção de Dados (ANPD)](https://www.gov.br/anpd/pt-br) — the Brazilian data protection authority\'s official site, cited for the LGPD/ANPD framing above.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'monthly',
    publishDate: '2026-08-30',
    dateModified: '2026-08-30',
    next_refresh_due: '2026-09-29',
    theme: 'Overview & Reference',
    title: 'Melhor Hospedagem de Site no Brasil 2026: Hostinger e Alternativas',
    seoTitle: 'Hospedagem Brasil 2026: Hostinger vs HostGator vs KingHost',
    intro:
      'A maioria das listas de "melhor hospedagem para o Brasil" ignora o detalhe que decide se você consegue mesmo contratar: a exigência de CNPJ. A Hostinger pode ser contratada e paga por qualquer pessoa no Brasil sem CNPJ — já as marcas brasileiras conhecidas HostGator Brasil, KingHost e Locaweb valem a pena conhecer, mas este site não consegue te levar a uma oferta de afiliado funcional com nenhuma delas, porque os programas de afiliados dessas empresas exigem CNPJ e Nota Fiscal. Este guia compara preços reais, o salto no valor de renovação que pega novos clientes da Hostinger de surpresa, e o que a LGPD exige de fato de um provedor de hospedagem em termos de residência de dados.',
    metaDescription:
      'Hostinger vs HostGator Brasil vs KingHost vs Locaweb comparados em 2026: preços de entrada e renovação, exigência de CNPJ e adequação à LGPD.',
    twitterDescription:
      'Hospedagem de site no Brasil em 2026: a Hostinger é a única opção aqui que você consegue contratar sem CNPJ — veja quanto custa depois do salto na renovação.',
    affiliateDisclosure: true,
    audience:
      'Donos de sites e pequenos negócios no Brasil escolhendo um provedor de hospedagem, incluindo leitores sem CNPJ que precisam saber quais provedores conseguem realmente contratar.',
    readTime: 'Leitura de 9 min',
    educationalLevel: 'Beginner',
    primaryTerm: 'hospedagem de site Brasil',
    targetKeywords: [
      'melhor hospedagem brasil 2026',
      'hostinger vs hostgator brasil',
      'hospedagem de site sem cnpj',
      'kinghost vs locaweb',
      'hospedagem lgpd brasil',
    ],
    leadAnswerBlock:
      '**A Hostinger ($2,99/mês de entrada, com pré-pagamento obrigatório de 48 meses, renovando a $10,99/mês) é a única opção desta página que uma pessoa no Brasil sem CNPJ consegue contratar através do link do PromptQuorum. HostGator Brasil, KingHost e Locaweb são provedores brasileiros reais e conhecidos, que valem a pena comparar diretamente nos próprios sites, mas nenhum dos programas de afiliados deles é acessível sem CNPJ e Nota Fiscal, então aparecem aqui apenas como referência.**',
    affiliateLinks: [
      {
        url: 'https://www.hostinger.com/',
        productName: 'Hospedagem Hostinger',
        productCategory: 'hosting',
        priceRange: '2.99-10.99/mo',
        label: 'Ver preços da Hostinger',
      },
    ],
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Tabela comparativa', anchor: '#comparison-table' },
      { label: 'Hospedagem padrão vs. hospedagem especializada em IA', anchor: '#standard-vs-ai' },
      { label: 'Residência de dados e LGPD', anchor: '#lgpd-compliance' },
      { label: 'Veredito', anchor: '#verdict' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A Hostinger é a única opção realmente acessível aqui sem CNPJ.** O valor anunciado de $2,99/mês exige pré-pagamento de 48 meses ($143,52 à vista) e renova a $10,99/mês — um salto de cerca de 3,7 vezes. É a única provedora desta página com uma oferta funcional e monetizável para o PromptQuorum.',
          '**HostGator Brasil, KingHost e Locaweb são opções reais — mas apenas menções editoriais.** Os programas de afiliados dessas empresas exigem CNPJ e Nota Fiscal, que o PromptQuorum não possui, então nenhum link aqui gera comissão com essas três.',
          '**A KingHost (R$9,99/mês de entrada) não divulga o preço de renovação** na própria página de preços — reserve orçamento para um aumento e confirme o valor antes de contratar.',
          '**Na Locaweb (R$5,90/mês) não fica claro se o valor é promocional ou padrão** — confirme o preço atual diretamente no site da Locaweb antes de comparar com as demais.',
          '**O preço da HostGator Brasil (faixa de R$10-15/mês) não foi reverificado de forma independente nesta análise** — fontes de terceiros sugerem essa faixa histórica; confirme o preço vigente antes de contratar.',
          '**Provedores brasileiros com CNPJ simplificam obrigações de residência de dados da LGPD** por padrão, já que já estão sujeitos à jurisdição da ANPD — uma vantagem real sobre a Hostinger para negócios que lidam com dados pessoais regulados no Brasil.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Hostinger vs HostGator Brasil vs KingHost vs Locaweb em 2026',
        content:
          'Preços verificados diretamente em cada provedor sempre que possível; veja a seção Fontes para saber exatamente quais valores foram confirmados de forma independente em 30/08/2026 e quais não foram. Apenas a Hostinger tem um link de contratação que o PromptQuorum consegue monetizar — as outras três exigem CNPJ para entrar no programa de afiliados.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para hospedagem de site no Brasil, a Hostinger é a única grande opção acessível sem CNPJ; HostGator Brasil, KingHost e Locaweb são alternativas reais, mas restringem seus programas de afiliados a quem tem CNPJ.',
          },
          {
            type: 'plain-terms',
            text: 'É como uma loja que só abre conta de parceiro para lojistas locais com CNPJ registrado. A Hostinger vende para qualquer pessoa com um cartão; as três hospedagens brasileiras também vendem para qualquer pessoa, mas só pagam comissão de indicação a um parceiro com CNPJ — e o PromptQuorum não tem um.',
          },
        ],
        columns: ['Provedor', 'Preço de entrada', 'Preço de renovação', 'Exige CNPJ'],
        rows: [
          {
            'Provedor': 'Hostinger',
            'Preço de entrada': '$2,99/mês (pré-pago 48 meses)',
            'Preço de renovação': '$10,99/mês (~3,7x)',
            'Exige CNPJ': 'Não — acessível sem CNPJ',
          },
          {
            'Provedor': 'HostGator Brasil',
            'Preço de entrada': 'R$10-15/mês (não reverificado)',
            'Preço de renovação': 'Não informado pelo provedor',
            'Exige CNPJ': 'Sim — apenas menção editorial',
          },
          {
            'Provedor': 'KingHost',
            'Preço de entrada': 'R$9,99/mês de entrada',
            'Preço de renovação': 'Não divulgado pelo provedor',
            'Exige CNPJ': 'Sim — apenas menção editorial',
          },
          {
            'Provedor': 'Locaweb',
            'Preço de entrada': 'R$5,90/mês (promo/padrão incerto)',
            'Preço de renovação': 'Incerto — mesmo valor',
            'Exige CNPJ': 'Sim — apenas menção editorial',
          },
        ],
      },
      standardVsAi: {
        id: 'standard-vs-ai',
        title: 'Hospedagem padrão vs. hospedagem especializada em IA',
        content:
          'Tudo nesta página é hospedagem de site padrão — o tipo que você precisa para um site institucional, blog em WordPress ou loja virtual. Nenhum desses planos inclui acesso a GPU, então nenhum deles roda ou faz fine-tuning de um LLM local. Se você precisa alugar computação em GPU para inferência ou treinamento de IA, veja o [Guia de Aluguel de GPU em Nuvem 2026](/power-local-llm/cloud-gpu-rental-guide-2026), que compara RunPod, Lambda Labs e Vast.ai em preço por hora, garantia de disponibilidade e adequação a residência de dados.',
      },
      lgpdCompliance: {
        id: 'lgpd-compliance',
        title: 'Residência de dados e LGPD',
        content:
          'A Lei Geral de Proteção de Dados (LGPD) é fiscalizada pela Autoridade Nacional de Proteção de Dados (ANPD) e rege como dados pessoais de pessoas no Brasil são coletados, armazenados e tratados. Contratar um provedor brasileiro com CNPJ, como HostGator Brasil, KingHost ou Locaweb, simplifica as obrigações de residência de dados e de acordo de tratamento de dados da LGPD, porque o provedor já está registrado no Brasil e sujeito diretamente à fiscalização da ANPD. A Hostinger é uma provedora internacional — ela pode hospedar sites brasileiros normalmente, mas um negócio que lida com dados pessoais regulados deve verificar os termos específicos de LGPD e o acordo de tratamento de dados da Hostinger antes de usá-la para algo além de um site informativo simples.',
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'Se você não tem CNPJ, a Hostinger é o ponto de partida realista — reserve orçamento para o pré-pagamento de 48 meses e para o salto na renovação até $10,99/mês, em vez de ser pego de surpresa. Se você tem uma empresa registrada no Brasil, compare HostGator Brasil, KingHost e Locaweb diretamente nos próprios sites antes de decidir; as três são hospedagens brasileiras legítimas e conhecidas, só não são provedoras que o PromptQuorum consegue monetizar através de um link.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Dá para contratar hospedagem de site no Brasil sem CNPJ?',
            a: 'Sim, com a Hostinger — ela aceita contratação de pessoa física, sem CNPJ. HostGator Brasil, KingHost e Locaweb também podem ser contratadas por uma pessoa física no Brasil, mas os programas de afiliados delas exigem CNPJ e Nota Fiscal para participar, por isso o PromptQuorum só consegue oferecer um link funcional com a Hostinger.',
          },
          {
            q: 'Por que a Hostinger renova a quase 4x o preço anunciado?',
            a: 'O valor de $2,99/mês da Hostinger é um preço promocional vinculado a um pré-pagamento de 48 meses ($143,52 à vista). Depois desse período, o plano renova pelo valor padrão de $10,99/mês — um aumento de cerca de 3,7 vezes. Considere o preço de renovação, não o anunciado, ao comparar o custo total.',
          },
          {
            q: 'A HostGator Brasil é a mesma empresa da HostGator dos Estados Unidos?',
            a: 'A HostGator Brasil opera sob a marca HostGator para o mercado brasileiro, com preços e suporte próprios. O preço atual dela não foi reverificado de forma independente nesta análise — fontes de terceiros sugerem uma faixa de entrada de R$10-15/mês, mas confirme o valor vigente diretamente no site da HostGator Brasil antes de contratar.',
          },
          {
            q: 'O que a KingHost não divulga sobre o preço?',
            a: 'A KingHost anuncia um valor de entrada de R$9,99/mês, mas não informa o preço de renovação na própria página de preços. Confirme o custo de renovação diretamente com a KingHost antes de contratar, já que ele não está publicado para comparação aqui.',
          },
          {
            q: 'Hospedagem brasileira ajuda na conformidade com a LGPD?',
            a: 'Ajuda a simplificar. Um provedor brasileiro com CNPJ, como HostGator Brasil, KingHost ou Locaweb, já está registrado no Brasil e sujeito à fiscalização da ANPD, o que remove ambiguidades sobre residência de dados na LGPD. A Hostinger também pode ser usada, mas verifique os termos específicos de LGPD e o acordo de tratamento de dados dela se você lida com dados pessoais regulados.',
          },
          {
            q: 'Dá para rodar um LLM local em alguma dessas hospedagens?',
            a: 'Não. As quatro provedoras desta página oferecem hospedagem de site padrão — compartilhada, WordPress ou similar — sem acesso a GPU. Para alugar computação em GPU e rodar ou fazer fine-tuning de um LLM local, veja o Guia de Aluguel de GPU em Nuvem 2026, que compara RunPod, Lambda Labs e Vast.ai.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Preços da Hostinger](https://www.hostinger.com/) — verificado diretamente na Hostinger em 30/08/2026. O valor de $2,99/mês de entrada exige pré-pagamento de 48 meses; renova a $10,99/mês.',
          'Preço da HostGator Brasil (faixa de R$10-15/mês de entrada) — não reverificado de forma independente nesta análise; baseado em fontes de terceiros/históricas. Confirme o preço atual no próprio site da HostGator Brasil antes de contratar.',
          'Preço da KingHost (R$9,99/mês de entrada) — verificado na página de preços da KingHost em 30/08/2026. O preço de renovação não é informado pelo provedor.',
          'Preço da Locaweb (R$5,90/mês) — verificado na página de preços da Locaweb em 30/08/2026. Não fica claro pela própria página se é um valor promocional ou padrão.',
          '[LGPD — Lei Geral de Proteção de Dados (ANPD)](https://www.gov.br/anpd/pt-br) — site oficial da autoridade brasileira de proteção de dados, citado para o enquadramento de LGPD/ANPD acima.',
        ],
      },
    },
  },
}
