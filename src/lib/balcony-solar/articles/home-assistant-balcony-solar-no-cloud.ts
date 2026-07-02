// Slug: home-assistant-balcony-solar-no-cloud
// BSOL-05 — Tier 1 local-control thesis page, evergreen. Bridges to the Smart Home cluster.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'No-Cloud Balcony Solar: Monitor Your System With Home Assistant',
    seoTitle: 'Balcony Solar Without the Cloud: Home Assistant Setup',
    intro: 'Most balcony solar kits ship with a vendor app that routes your production data through the manufacturer\'s cloud. That works, but it means a company you\'ve never met can see how much power your home generates and uses — and if their servers go down, so does your monitoring. Local-control hardware and Home Assistant remove that dependency entirely.',
    metaDescription: 'Keep balcony solar monitoring local: which hardware exposes a local API, how to integrate with Home Assistant, and why cloud-bound inverters are a privacy and reliability risk.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Advanced',
    audience: 'Home Assistant users and privacy-conscious buyers evaluating balcony solar hardware',
    primaryTerm: 'no-cloud balcony solar',
    targetKeywords: ['balcony solar home assistant', 'no cloud solar monitoring', 'local balcony solar api', 'balcony solar mqtt', 'evcc balcony solar'],
    leadAnswerBlock: '**Cloud-bound balcony solar inverters send your production and consumption data to the manufacturer\'s servers by default, and stop reporting locally if that connection is required for monitoring to work at all.** Hardware that exposes a local API — reachable directly on your home network — lets you monitor and automate around your balcony solar system through Home Assistant without any data leaving your house, and keeps working even if the vendor\'s cloud goes down.',
    quickAnswerTop: {
      en: {
        question: 'Can I monitor balcony solar without sending data to the cloud?',
        answer: 'Yes, if you choose hardware that exposes a local API or local web dashboard rather than requiring the vendor\'s app and cloud account. Home Assistant can then pull production and consumption data directly from the device over your local network, with no external server involved.',
        bullets: [
          'Look for "local API," "local mode," or explicit Home Assistant integration in the spec sheet before buying',
          'Some vendors offer local access as a toggle; others require the cloud app permanently',
          'Home Assistant integrations exist for several balcony solar and microinverter brands via community-maintained or official integrations',
          'MQTT is the common protocol bridging local-API devices into Home Assistant and other automation platforms',
          'EVCC (open-source EV charging controller) can also consume local balcony solar data for solar-aware charging',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Is Cloud-Bound Solar Monitoring a Problem?', anchor: '#why-cloud-is-a-problem' },
      { label: 'Which Hardware Exposes a Local API?', anchor: '#local-api-hardware' },
      { label: 'How Do You Integrate Balcony Solar With Home Assistant?', anchor: '#ha-integration' },
      { label: 'What About EVCC and MQTT?', anchor: '#evcc-mqtt' },
      { label: 'Building a Recommended No-Cloud Stack', anchor: '#recommended-stack' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Cloud-bound balcony solar monitoring sends production/consumption data to the manufacturer and stops working if their servers are unreachable — even though the panel keeps generating power.',
          'Local-API hardware lets Home Assistant, EVCC, or any home-network tool read your system\'s data directly, with nothing leaving your network.',
          'Not all vendors expose local access equally — some offer it as a documented feature, others block it entirely, and some only unlock it after a firmware update or account workaround.',
          'MQTT is the most common bridge protocol between local-API balcony solar hardware and Home Assistant.',
          'EVCC can use local balcony solar production data to time EV charging or other loads to daylight hours, extending the no-cloud thesis beyond just monitoring.',
          'Verify local-API support against the specific model you\'re buying, not the brand in general — capability varies by product line and sometimes by firmware version.',
        ],
      },
      whyCloudIsAProblem: {
        id: 'why-cloud-is-a-problem',
        title: 'Why Is Cloud-Bound Solar Monitoring a Problem?',
        content: [
          '**A cloud-bound inverter routes your energy data through the manufacturer\'s servers before you can see it — meaning a third party has visibility into your household\'s power generation and usage patterns, and your monitoring dashboard stops working if their service has an outage.** For a device that\'s physically inside your home and connected to your electrical system, that\'s a meaningfully larger trust surface than most people realize when they unbox the kit.',
          'The practical failure mode is simple: the panel keeps producing power regardless of whether the vendor\'s app can reach its servers, but you lose visibility into what it\'s doing. For anyone trying to automate around solar production — running a dishwasher when output is high, for example — a monitoring outage breaks the automation even though the underlying hardware is fine.',
          'This mirrors a broader pattern across connected home hardware: [why local-first smart home control beats cloud dependency](/smart-home/why-local-smart-home-beats-cloud) applies just as directly to solar inverters as it does to thermostats and cameras.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cloud-bound balcony solar monitoring depends on the vendor\'s servers being online, even though the physical hardware works independently of them.' },
          { type: 'plain-terms', text: 'If the company\'s app goes down, you go dark — even though your panel is still making electricity right outside your window.' },
        ],
      },
      localApiHardware: {
        id: 'local-api-hardware',
        title: 'Which Hardware Exposes a Local API?',
        content: [
          '**Local-API support varies by brand and by specific product line — verify it against the exact model, not just the brand name, since capability is inconsistent even within one manufacturer\'s catalog.** See the [best microinverters buyer\'s guide](/balcony-solar/best-balcony-solar-microinverters) for verified per-model local-control status, since this is exactly the kind of detail that changes with firmware updates and new product releases.',
          'A general pattern in the market: some vendors treat local access as a first-class feature and document it clearly; others require their cloud app for any monitoring at all, with no documented local alternative. A minority sit in between — local access exists but is unofficial, community-reverse-engineered, or gated behind a specific firmware version.',
        ],
        callouts: [
          { type: 'tip', text: 'Before buying, search "[product name] local API" or "[product name] Home Assistant" rather than relying on marketing copy — community forums surface the real, verified answer faster than spec sheets.' },
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'How Do You Integrate Balcony Solar With Home Assistant?',
        content: [
          '**For hardware with a documented local API, Home Assistant integration typically works through either a native/official integration, a community-maintained HACS (Home Assistant Community Store) integration, or a generic REST/MQTT sensor pointed at the device\'s local endpoint.** The setup path depends entirely on which of those three your specific hardware supports.',
        ],
        numberedItems: [
          { title: 'Confirm local API availability', whyItMatters: 'Check the manufacturer\'s documentation or community forums for your exact model before assuming local access exists.' },
          { title: 'Check for an official or HACS integration', whyItMatters: 'A maintained integration saves significant setup time versus building your own sensor configuration from scratch.' },
          { title: 'Fall back to REST or MQTT sensors', whyItMatters: 'If no integration exists, most local-API devices still expose readable data over REST or MQTT that Home Assistant can poll directly.' },
          { title: 'Build automations around real-time production data', whyItMatters: 'Once data flows into Home Assistant, you can trigger high-draw appliances during peak production or log historical output for your own records.' },
        ],
      },
      evccMqtt: {
        id: 'evcc-mqtt',
        title: 'What About EVCC and MQTT?',
        content: [
          '**MQTT is the lightweight messaging protocol most local-API balcony solar devices and Home Assistant use to exchange data, and EVCC (an open-source EV charging controller) can consume that same local data stream to time EV charging to daylight production hours.** This extends the no-cloud thesis beyond passive monitoring into active automation — using your balcony solar output to directly influence when other devices draw power, entirely on your local network.',
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'Building a Recommended No-Cloud Stack',
        content: [
          '**A no-cloud balcony solar stack starts with hardware selection, not software** — pick a panel/microinverter combination with confirmed local API support first, since no amount of Home Assistant configuration can add local access to a device that doesn\'t expose it. From there, layer in Home Assistant for monitoring and automation, and optionally EVCC if EV charging is part of your setup.',
        ],
        links: [
          { url: '/balcony-solar/best-balcony-solar-kits-2026', title: 'Best Balcony Solar Kits', description: 'Buyer\'s guide including a dedicated local-control pick' },
          { url: '/balcony-solar/best-balcony-solar-microinverters', title: 'Best Balcony Solar Microinverters', description: 'Per-model cloud vs. local monitoring comparison' },
          { url: '/balcony-solar/best-balcony-solar-batteries-2026', title: 'Best Balcony Solar Batteries', description: 'Storage options, including local-control picks' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does every balcony solar inverter require a cloud account?', a: 'No, but many do by default. Some vendors document local API access as a supported feature; others require their cloud app for any monitoring, with no official local alternative.' },
          { q: 'Can I still monitor my system if the vendor\'s cloud service shuts down?', a: 'Only if your hardware exposes a local API that Home Assistant or another local tool is already reading from. Cloud-only devices lose all monitoring capability if the vendor\'s service goes offline, even though the panel keeps generating power.' },
          { q: 'What is MQTT and why does it matter for balcony solar?', a: 'MQTT is a lightweight messaging protocol widely used to bridge local-API smart-home and solar devices into platforms like Home Assistant, without routing data through an external server.' },
          { q: 'Do I need programming experience to set this up?', a: 'Basic Home Assistant configuration (YAML or the UI-based integrations) is usually sufficient for devices with an official or HACS integration. Devices without one may require manually configuring REST or MQTT sensors, which is more technical.' },
          { q: 'Can EVCC use balcony solar data even without an EV?', a: 'EVCC is built around EV charging control specifically, so its core value depends on having an EV to charge. For non-EV automation, Home Assistant alone is the more direct tool for reacting to local solar production data.' },
          { q: 'Does choosing local-control hardware limit my product options?', a: 'It narrows them, since not every balcony solar brand supports local access. See the linked microinverter and kit buyer\'s guides for verified per-model status rather than assuming any specific brand.' },
          { q: 'Is local monitoring less accurate than the vendor\'s cloud app?', a: 'No — local monitoring reads the same underlying data the device produces. The difference is where that data is processed and displayed, not its accuracy.' },
          { q: 'Will a firmware update break my local API access?', a: 'It can. Some vendors have removed or restricted local access in firmware updates after launch, which is another reason to check community reports rather than relying solely on the original spec sheet.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'No-Cloud Balcony Solar: Monitor Your System With Home Assistant',
      description: 'Keep balcony solar monitoring local: which hardware exposes a local API, how to integrate with Home Assistant, and why cloud-bound inverters are a privacy and reliability risk.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      url: 'https://www.promptquorum.com/balcony-solar/home-assistant-balcony-solar-no-cloud',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Home Assistant users and privacy-conscious buyers evaluating balcony solar hardware' },
      about: ['Balcony solar', 'Home Assistant', 'Local API', 'MQTT', 'EVCC', 'No-cloud smart home'],
    },
  },
};
