// Power Local LLM — Best Web Hosting for Korea 2026
// Slug: best-web-hosting-korea-2026
// Standard web hosting (not GPU/AI compute) for the South Korean market.
// EDITORIAL-ONLY PAGE: none of Cafe24, Gabia, Dothome, or NHN Hosting have a
// confirmed public, individual-publisher affiliate/referral program. No
// affiliateLinks entries anywhere on this page (no per-provider entries and no
// top-level article.affiliateLinks). This is stated openly in the page copy.
// Prices checked 2026-08-30.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    publishDate: '2026-08-30',
    dateModified: '2026-08-30',
    next_refresh_due: '2026-09-29',
    theme: 'Overview & Reference',
    title: 'Best Web Hosting for Korea 2026: Cafe24 vs Gabia vs Dothome',
    seoTitle: 'Korea Web Hosting 2026: Cafe24 vs Gabia vs Dothome vs NHN',
    intro:
      'Korea\'s major hosting providers do not currently run blogger-style affiliate programs, so this page is informational only — there is no "sign up here" button anywhere below, and none of the four providers compared here have a confirmed public, individual-publisher referral program. That is itself a useful fact if you were expecting one. This guide compares Cafe24, Gabia, Dothome, and NHN Hosting on real pricing and what each one actually offers, so the absence of an affiliate link does not mean an absence of information.',
    metaDescription:
      'Cafe24 vs Gabia vs Dothome vs NHN Hosting compared for Korea in 2026: real KRW pricing and why none currently run a public affiliate program.',
    twitterDescription:
      'Web hosting in Korea for 2026: Cafe24, Gabia, Dothome, and NHN Hosting compared on real pricing. None of them run a blogger-style affiliate program — here is what that means.',
    affiliateDisclosure: true,
    audience:
      'Website owners and small businesses in South Korea choosing a domestic web host, evaluating real pricing rather than affiliate marketing.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'web hosting Korea',
    targetKeywords: [
      'best web hosting korea 2026',
      'cafe24 vs gabia',
      'dothome hosting review',
      'nhn hosting korea',
      'korean web hosting comparison',
    ],
    leadAnswerBlock:
      '**Cafe24 (450 KRW/mo intro, ~$0.33), Gabia (10,450 KRW/mo, ~$7.60), Dothome (900 KRW/mo, ~$0.65), and NHN Hosting (from 250 KRW/mo promo) are Korea\'s major hosting brands, but none has a confirmed public affiliate program for individual publishers — this page compares them on price and fit only, with no monetized links.**',
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Provider Comparison Table', anchor: '#comparison-table' },
      { label: 'Standard Hosting vs. AI-Specialized Hosting', anchor: '#standard-vs-ai' },
      { label: 'Data Protection: PIPA and PIPC', anchor: '#pipa-compliance' },
      { label: 'Verdict', anchor: '#verdict' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**None of Korea\'s major hosts run a blogger-style affiliate program.** Cafe24, Gabia, Dothome, and NHN Hosting have no confirmed public, individual-publisher referral program — every link on this page is a plain reference link, not a monetized one.',
          '**Cafe24 (450 KRW/mo, ~$0.33) is Korea\'s largest hosting and e-commerce platform.** Its "Partners" portal is for e-commerce and YouTube-Shopping sellers, not a hosting-referral program — do not assume "Partners portal" means an affiliate program.',
          '**Gabia (10,450 KRW/mo, ~$7.60) is Korea\'s #1 domain registrar and a major hosting brand.** Its Partner Center has an "Affiliate Partner" tier in name, but it reads as an API/embed partnership with undisclosed terms requiring direct inquiry, not a simple content-affiliate link.',
          '**Dothome (900 KRW/mo, ~$0.65) skews budget and hobbyist**, popular with students. No affiliate program found.',
          '**NHN Hosting (from 250 KRW/mo promo, 300MB tier) is a dated, legacy-feeling brand.** No affiliate program found; verify current relevance and reviews before featuring it prominently.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cafe24 vs Gabia vs Dothome vs NHN Hosting in 2026',
        content:
          'Prices checked directly on each provider\'s Korean-language pricing page on 2026-08-30. Korea\'s major hosts don\'t currently run blogger-style affiliate programs — these are informational picks only, with no sign-up links attached.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For web hosting in Korea, Cafe24, Gabia, Dothome, and NHN Hosting are the major domestic brands, but none has a confirmed public affiliate program, so this comparison is priced information only.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it like comparing four supermarkets by their receipts, not by which one gave you a loyalty-card kickback — none of them run a rewards program for reviewers here, so the comparison is just the price tag.',
          },
        ],
        columns: ['Provider', 'Intro price', 'Approx. USD', 'Affiliate program'],
        rows: [
          {
            'Provider': 'Cafe24',
            'Intro price': '450 KRW/mo (Startup plan)',
            'Approx. USD': '~$0.33/mo',
            'Affiliate program': 'Partners portal ≠ hosting affiliate',
          },
          {
            'Provider': 'Gabia',
            'Intro price': '10,450 KRW/mo (PHP unlimited)',
            'Approx. USD': '~$7.60/mo',
            'Affiliate program': 'Partner Center — API/embed only',
          },
          {
            'Provider': 'Dothome',
            'Intro price': '900 KRW/mo (Upgrade plan)',
            'Approx. USD': '~$0.65/mo',
            'Affiliate program': 'None found',
          },
          {
            'Provider': 'NHN Hosting',
            'Intro price': '250 KRW/mo promo (300MB tier)',
            'Approx. USD': '~$0.18/mo',
            'Affiliate program': 'None found',
          },
        ],
      },
      standardVsAi: {
        id: 'standard-vs-ai',
        title: 'Standard Hosting vs. AI-Specialized Hosting',
        content:
          'Cafe24, Gabia, Dothome, and NHN Hosting all sell standard web hosting — for a business site, WordPress install, or online store — none of them include GPU access. If you need to rent compute for running or fine-tuning a local LLM, see the [Cloud GPU Rental Guide 2026](/power-local-llm/cloud-gpu-rental-guide-2026), which compares RunPod, Lambda Labs, and Vast.ai on hourly pricing, uptime, and data-residency fit.',
      },
      pipaCompliance: {
        id: 'pipa-compliance',
        title: 'Data Protection: PIPA and PIPC',
        content:
          'South Korea\'s Personal Information Protection Act (PIPA), enforced by the Personal Information Protection Commission (PIPC), restricts cross-border transfer of Korean personal data — per Cloudflare\'s own South Korea PIPA trust-hub page, which confirms this in general terms. Domestic hosting with Cafe24, Gabia, Dothome, or NHN Hosting avoids the cross-border transfer question entirely, since the data never leaves Korea in the first place. That is a genuine selling point for a Korea-domestic host over a foreign one for any site handling Korean personal data, independent of whichever provider a reader ultimately picks on price.',
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Cafe24 is the safest default for a standard business site or online store, given its scale as Korea\'s largest hosting and e-commerce platform. Gabia suits a reader who wants Korea\'s leading domain registrar bundled with hosting and is willing to pay more for it. Dothome fits a budget or hobbyist project, and NHN Hosting is worth a closer look at current reviews before choosing, given its dated positioning. None of the four pays PromptQuorum a commission — this verdict is price-and-fit only.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do any Korean web hosts have an affiliate program for bloggers?',
            a: 'Not a confirmed public one, as of this review. Cafe24, Gabia, Dothome, and NHN Hosting have no individual-publisher affiliate or referral program comparable to what US or European hosts commonly run. Gabia\'s Partner Center names an "Affiliate Partner" tier, but it functions as an API/embed partnership with undisclosed terms requiring direct inquiry, not a simple content-affiliate link.',
          },
          {
            q: 'Is Cafe24\'s "Partners" portal an affiliate program?',
            a: 'No. Cafe24\'s Partners portal is built for e-commerce and YouTube-Shopping sellers integrating with the platform, not for bloggers or reviewers referring hosting customers. It is easy to assume "Partners portal" means an affiliate program — it does not, in Cafe24\'s case.',
          },
          {
            q: 'How much does Gabia hosting cost?',
            a: 'Gabia\'s basic PHP plan with unlimited traffic starts at 10,450 KRW/mo, about $7.60. That makes it the most expensive of the four providers compared here, reflecting its position as Korea\'s #1 domain registrar and a major hosting brand.',
          },
          {
            q: 'Is Dothome good for a hobby project?',
            a: 'Yes, that is its main fit. Dothome\'s Upgrade plan starts at 900 KRW/mo (about $0.65) and the provider skews toward students and hobbyists over small-to-medium businesses. No affiliate program was found for Dothome.',
          },
          {
            q: 'Is NHN Hosting still relevant in 2026?',
            a: 'It offers a low entry price (from 250 KRW/mo promo for a 300MB tier), but it reads as a dated, legacy-feeling brand compared to Cafe24 and Gabia. Verify current reviews and relevance directly before featuring it prominently in a project.',
          },
          {
            q: 'Does PIPA require hosting data inside Korea?',
            a: 'PIPA restricts cross-border transfer of Korean personal data, per Cloudflare\'s South Korea PIPA trust-hub page. Hosting domestically with a Korean provider like Cafe24, Gabia, Dothome, or NHN Hosting avoids the cross-border transfer question entirely, which is a genuine advantage over a foreign host for sites handling Korean personal data.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Cafe24 hosting pricing](https://www.cafe24.com/) — checked directly on Cafe24, 2026-08-30. Startup plan from 450 KRW/mo. Partners portal confirmed as e-commerce/YouTube-Shopping focused, not a hosting affiliate program.',
          '[Gabia hosting pricing](https://www.gabia.com/) — checked directly on Gabia, 2026-08-30. Basic PHP unlimited-traffic plan at 10,450 KRW/mo. Partner Center "Affiliate Partner" tier confirmed as an API/embed partnership with undisclosed terms.',
          '[Dothome hosting pricing](https://www.dothome.co.kr/) — checked directly on Dothome, 2026-08-30. Upgrade plan at 900 KRW/mo. No affiliate program found.',
          '[NHN Hosting pricing](https://www.nhncloud.com/) — checked directly on NHN Hosting, 2026-08-30. Entry Linux hosting from 250 KRW/mo promo, 300MB tier. No affiliate program found.',
          '[Cloudflare — South Korea PIPA Trust Hub](https://www.cloudflare.com/trust-hub/compliance-resources/south-korea-pipa/) — source for the claim that PIPA restricts cross-border transfer of Korean personal data.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    publishDate: '2026-08-30',
    dateModified: '2026-08-30',
    next_refresh_due: '2026-09-29',
    theme: 'Overview & Reference',
    title: '2026년 한국 웹 호스팅 추천: Cafe24 vs 가비아 vs 닷홈',
    seoTitle: '한국 웹 호스팅 2026: Cafe24 vs 가비아 vs 닷홈 vs NHN',
    intro:
      '한국의 주요 호스팅 업체들은 현재 블로거형 제휴(어필리에이트) 프로그램을 운영하지 않습니다. 그래서 이 페이지는 정보 제공 목적으로만 작성되었으며, 아래 어디에도 "가입하기" 버튼이 없고, 이 글에서 비교하는 네 업체 모두 개인 발행자를 위한 공개된 제휴 프로그램이 확인되지 않았습니다. 이는 독자가 그런 프로그램을 기대했다면 그 자체로 유용한 사실입니다. 이 글은 Cafe24, 가비아(Gabia), 닷홈(Dothome), NHN Hosting을 실제 가격과 실제 제공 내용을 기준으로 비교하므로, 제휴 링크가 없다는 것이 정보의 부재를 의미하지는 않습니다.',
    metaDescription:
      'Cafe24 vs 가비아 vs 닷홈 vs NHN Hosting 2026년 비교: 실제 원화 요금과 왜 어느 곳도 공개 제휴 프로그램을 운영하지 않는지 설명합니다.',
    twitterDescription:
      '2026년 한국 웹 호스팅: Cafe24, 가비아, 닷홈, NHN Hosting을 실제 가격으로 비교했습니다. 어느 곳도 블로거형 제휴 프로그램을 운영하지 않습니다 — 그 의미를 설명합니다.',
    affiliateDisclosure: true,
    audience:
      '실제 가격을 기준으로 국내 웹 호스팅을 선택하려는 한국의 웹사이트 운영자와 소규모 사업자, 제휴 마케팅이 아닌 정보를 원하는 독자.',
    readTime: '읽는 시간 9분',
    educationalLevel: 'Beginner',
    primaryTerm: '한국 웹 호스팅',
    targetKeywords: [
      '2026 한국 웹 호스팅 추천',
      'cafe24 vs 가비아',
      '닷홈 호스팅 후기',
      'nhn 호스팅 한국',
      '한국 웹 호스팅 비교',
    ],
    leadAnswerBlock:
      '**Cafe24(월 450원 시작, 약 0.33달러), 가비아(월 10,450원, 약 7.60달러), 닷홈(월 900원, 약 0.65달러), NHN Hosting(프로모션가 월 250원부터)은 한국의 주요 호스팅 브랜드이지만, 개인 발행자를 위한 공개된 제휴 프로그램이 확인된 곳은 없습니다 — 이 페이지는 수익화된 링크 없이 가격과 적합성만을 비교합니다.**',
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '업체 비교표', anchor: '#comparison-table' },
      { label: '일반 호스팅 vs AI 특화 호스팅', anchor: '#standard-vs-ai' },
      { label: '개인정보 보호: PIPA와 개인정보보호위원회', anchor: '#pipa-compliance' },
      { label: '결론', anchor: '#verdict' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**한국의 주요 호스팅 업체 중 블로거형 제휴 프로그램을 운영하는 곳은 없습니다.** Cafe24, 가비아, 닷홈, NHN Hosting 모두 개인 발행자를 위한 공개된 제휴 프로그램이 확인되지 않아, 이 페이지의 모든 링크는 수익이 발생하지 않는 단순 참조 링크입니다.',
          '**Cafe24(월 450원, 약 0.33달러)는 한국 최대 호스팅·이커머스 플랫폼입니다.** "파트너스" 포털은 이커머스 및 유튜브 쇼핑 판매자를 위한 것이지 호스팅 제휴 프로그램이 아닙니다 — "파트너스 포털"이 곧 제휴 프로그램이라고 단정하지 마세요.',
          '**가비아(월 10,450원, 약 7.60달러)는 한국 1위 도메인 등록업체이자 주요 호스팅 브랜드입니다.** 파트너센터에 명칭상 "제휴 파트너" 등급이 있지만, 실제로는 조건이 비공개이며 직접 문의가 필요한 API/임베드 파트너십에 가깝고, 단순 콘텐츠 제휴 링크는 아닙니다.',
          '**닷홈(월 900원, 약 0.65달러)은 예산 중심·취미 이용자에 치우쳐 있으며**, 학생들에게 인기가 있습니다. 제휴 프로그램은 발견되지 않았습니다.',
          '**NHN Hosting(프로모션가 월 250원부터, 300MB 티어)은 다소 오래된 느낌의 브랜드입니다.** 제휴 프로그램은 발견되지 않았으며, 적극적으로 추천하기 전에 현재의 관련성과 후기를 직접 확인하시기 바랍니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026년 Cafe24 vs 가비아 vs 닷홈 vs NHN Hosting 비교',
        content:
          '각 업체의 한국어 가격 페이지에서 2026-08-30에 직접 확인한 가격입니다. 한국의 주요 호스팅 업체들은 현재 블로거형 제휴 프로그램을 운영하지 않으므로, 이 비교는 정보 제공용일 뿐이며 가입 링크가 첨부되어 있지 않습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '한국 웹 호스팅의 경우 Cafe24, 가비아, 닷홈, NHN Hosting이 주요 국내 브랜드이지만 공개된 제휴 프로그램이 확인된 곳이 없어, 이 비교는 순수하게 가격 정보 제공용입니다.',
          },
          {
            type: 'plain-terms',
            text: '네 개의 마트를 적립 혜택이 아니라 영수증만으로 비교한다고 생각하면 됩니다 — 여기서는 어느 업체도 리뷰어를 위한 리워드 프로그램을 운영하지 않으므로, 비교 기준은 오직 가격표뿐입니다.',
          },
        ],
        columns: ['업체', '시작 가격', '약 USD', '제휴 프로그램'],
        rows: [
          {
            '업체': 'Cafe24',
            '시작 가격': '월 450원 (스타트업 플랜)',
            '약 USD': '~$0.33/월',
            '제휴 프로그램': '파트너스 포털 ≠ 호스팅 제휴',
          },
          {
            '업체': '가비아',
            '시작 가격': '월 10,450원 (PHP 무제한)',
            '약 USD': '~$7.60/월',
            '제휴 프로그램': '파트너센터 — API/임베드만',
          },
          {
            '업체': '닷홈',
            '시작 가격': '월 900원 (업그레이드 플랜)',
            '약 USD': '~$0.65/월',
            '제휴 프로그램': '발견되지 않음',
          },
          {
            '업체': 'NHN Hosting',
            '시작 가격': '월 250원 프로모션 (300MB)',
            '약 USD': '~$0.18/월',
            '제휴 프로그램': '발견되지 않음',
          },
        ],
      },
      standardVsAi: {
        id: 'standard-vs-ai',
        title: '일반 호스팅 vs AI 특화 호스팅',
        content:
          'Cafe24, 가비아, 닷홈, NHN Hosting은 모두 기업 사이트, 워드프레스 설치, 온라인 쇼핑몰용 일반 웹 호스팅을 판매하며, GPU 접근 권한은 포함되어 있지 않습니다. 로컬 LLM을 실행하거나 파인튜닝하기 위해 컴퓨팅을 대여해야 한다면, RunPod, Lambda Labs, Vast.ai를 시간당 가격, 가동률, 데이터 거주지 적합성 기준으로 비교한 [클라우드 GPU 대여 가이드 2026](/power-local-llm/cloud-gpu-rental-guide-2026)을 참고하세요.',
      },
      pipaCompliance: {
        id: 'pipa-compliance',
        title: '개인정보 보호: PIPA와 개인정보보호위원회',
        content:
          '한국의 개인정보보호법(PIPA)은 개인정보보호위원회(PIPC)가 집행하며, 한국인 개인정보의 국외 이전을 제한합니다 — 이는 Cloudflare 자체의 South Korea PIPA 트러스트 허브 페이지에서 일반적인 수준으로 확인되는 내용입니다. Cafe24, 가비아, 닷홈, NHN Hosting과 같이 국내에서 호스팅하면 데이터가 애초에 한국을 벗어나지 않으므로 국외 이전 문제 자체를 피할 수 있습니다. 이는 한국인 개인정보를 다루는 사이트라면 어느 업체를 가격 기준으로 최종 선택하든 관계없이, 해외 호스팅 업체 대비 국내 호스팅 업체가 갖는 실질적인 장점입니다.',
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Cafe24는 한국 최대 호스팅·이커머스 플랫폼이라는 규모를 감안할 때 일반적인 기업 사이트나 온라인 쇼핑몰에 가장 안전한 기본 선택지입니다. 가비아는 한국 1위 도메인 등록업체와 호스팅을 함께 이용하고 싶고 그만큼 비용을 지불할 의향이 있는 독자에게 적합합니다. 닷홈은 예산 제약이 있거나 취미 프로젝트에 적합하며, NHN Hosting은 다소 오래된 포지셔닝을 고려할 때 선택 전에 최신 후기를 직접 확인해 볼 가치가 있습니다. 네 업체 모두 PromptQuorum에 수수료를 지급하지 않으며, 이 결론은 오직 가격과 적합성만을 기준으로 합니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '블로거를 위한 제휴 프로그램을 운영하는 한국 웹 호스팅 업체가 있나요?',
            a: '이번 검토 기준으로는 공개적으로 확인된 곳이 없습니다. Cafe24, 가비아, 닷홈, NHN Hosting 모두 미국이나 유럽 호스팅 업체가 흔히 운영하는 것과 같은 개인 발행자 대상 제휴·추천 프로그램이 없습니다. 가비아의 파트너센터에는 명칭상 "제휴 파트너" 등급이 있지만, 실제로는 조건이 비공개이며 직접 문의가 필요한 API/임베드 파트너십으로 작동하며, 단순 콘텐츠 제휴 링크는 아닙니다.',
          },
          {
            q: 'Cafe24의 "파트너스" 포털이 제휴 프로그램인가요?',
            a: '아닙니다. Cafe24의 파트너스 포털은 플랫폼과 연동하는 이커머스 및 유튜브 쇼핑 판매자를 위해 만들어진 것이며, 호스팅 고객을 추천하는 블로거나 리뷰어를 위한 것이 아닙니다. "파트너스 포털"을 제휴 프로그램으로 오해하기 쉽지만, Cafe24의 경우는 그렇지 않습니다.',
          },
          {
            q: '가비아 호스팅 요금은 얼마인가요?',
            a: '가비아의 무제한 트래픽 기본 PHP 플랜은 월 10,450원(약 7.60달러)부터 시작합니다. 이는 여기서 비교한 네 업체 중 가장 높은 가격으로, 한국 1위 도메인 등록업체이자 주요 호스팅 브랜드라는 위치를 반영합니다.',
          },
          {
            q: '닷홈은 취미 프로젝트에 적합한가요?',
            a: '네, 그것이 닷홈의 주된 적합 용도입니다. 닷홈의 업그레이드 플랜은 월 900원(약 0.65달러)부터 시작하며, 중소기업보다는 학생과 취미 이용자에 더 치우쳐 있습니다. 닷홈에 대한 제휴 프로그램은 발견되지 않았습니다.',
          },
          {
            q: 'NHN Hosting은 2026년에도 여전히 유효한 선택지인가요?',
            a: '낮은 시작 가격(300MB 티어 프로모션가 월 250원부터)을 제공하지만, Cafe24나 가비아에 비해 다소 오래된 느낌의 브랜드로 읽힙니다. 프로젝트에서 적극적으로 추천하기 전에 최신 후기와 관련성을 직접 확인하시기 바랍니다.',
          },
          {
            q: 'PIPA는 데이터를 반드시 한국 내에 호스팅하도록 요구하나요?',
            a: 'Cloudflare의 South Korea PIPA 트러스트 허브 페이지에 따르면, PIPA는 한국인 개인정보의 국외 이전을 제한합니다. Cafe24, 가비아, 닷홈, NHN Hosting과 같은 한국 업체에 국내 호스팅하면 국외 이전 문제 자체를 피할 수 있으며, 이는 한국인 개인정보를 다루는 사이트에 해외 호스팅 업체 대비 실질적인 장점입니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Cafe24 호스팅 요금](https://www.cafe24.com/) — 2026-08-30 Cafe24에서 직접 확인. 스타트업 플랜 월 450원부터. 파트너스 포털은 이커머스/유튜브 쇼핑 중심이며 호스팅 제휴 프로그램이 아님을 확인함.',
          '[가비아 호스팅 요금](https://www.gabia.com/) — 2026-08-30 가비아에서 직접 확인. 무제한 트래픽 기본 PHP 플랜 월 10,450원. 파트너센터 "제휴 파트너" 등급은 조건이 비공개인 API/임베드 파트너십임을 확인함.',
          '[닷홈 호스팅 요금](https://www.dothome.co.kr/) — 2026-08-30 닷홈에서 직접 확인. 업그레이드 플랜 월 900원. 제휴 프로그램은 발견되지 않음.',
          '[NHN Hosting 요금](https://www.nhncloud.com/) — 2026-08-30 NHN Hosting에서 직접 확인. 300MB 티어 프로모션가 월 250원부터 시작하는 엔트리 리눅스 호스팅. 제휴 프로그램은 발견되지 않음.',
          '[Cloudflare — South Korea PIPA 트러스트 허브](https://www.cloudflare.com/trust-hub/compliance-resources/south-korea-pipa/) — PIPA가 한국인 개인정보의 국외 이전을 제한한다는 주장의 출처.',
        ],
      },
    },
  },
}
